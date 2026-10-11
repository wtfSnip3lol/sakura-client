// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.2
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

function _0x3979(_0x537adb,_0x3283cb){_0x537adb=_0x537adb-(0x1*0x959+0x62f*-0x6+0x1d5e);var _0x46736c=_0x404c();var _0x404b3e=_0x46736c[_0x537adb];if(_0x3979['IlIfat']===undefined){var _0x71a4bb=function(_0x440e13){var _0x53aa78='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x49c7c7='',_0xc84ac0='';for(var _0x1f19c3=-0x21f8+-0x1d31+0x3f29,_0x5d906a,_0x30065e,_0x1f3526=-0x14d4+0x2c*-0x34+0x1dc4;_0x30065e=_0x440e13['charAt'](_0x1f3526++);~_0x30065e&&(_0x5d906a=_0x1f19c3%(0x1b58+0x39*0x49+-0x2b95)?_0x5d906a*(0x1108+-0x197f+0x8b7)+_0x30065e:_0x30065e,_0x1f19c3++%(0x1*-0x2f+0x1d5*-0x5+0x95c))?_0x49c7c7+=String['fromCharCode'](-0x24bd+0x24*-0x7a+0x493*0xc&_0x5d906a>>(-(0x1*-0x815+0x193c+-0x1125)*_0x1f19c3&0x5*-0x89+-0x6c5*0x1+0x978)):-0x2686+0x255e+-0x1*-0x128){_0x30065e=_0x53aa78['indexOf'](_0x30065e);}for(var _0x1a7345=-0x15d+-0xec8+0x1025*0x1,_0x5d2343=_0x49c7c7['length'];_0x1a7345<_0x5d2343;_0x1a7345++){_0xc84ac0+='%'+('00'+_0x49c7c7['charCodeAt'](_0x1a7345)['toString'](0x2672+0x2*-0x635+-0x19f8))['slice'](-(0x2620+-0x74*0x1d+0x17*-0x116));}return decodeURIComponent(_0xc84ac0);};_0x3979['KPRxAv']=_0x71a4bb,_0x3979['swjCRv']={},_0x3979['IlIfat']=!![];}var _0x41d26e=_0x46736c[-0x22*0x105+0xaba+0x17f0],_0x2527ed=_0x537adb+_0x41d26e,_0x4a5460=_0x3979['swjCRv'][_0x2527ed];return!_0x4a5460?(_0x404b3e=_0x3979['KPRxAv'](_0x404b3e),_0x3979['swjCRv'][_0x2527ed]=_0x404b3e):_0x404b3e=_0x4a5460,_0x404b3e;}function _0x404c(){var _0x441532=['wgrHuMq','Ec1OzwK','EgnJr28','AgvHCei','mJTZDhi','sMjvwvm','phbHDgG','sLnptIa','yNL0zu8','t1voywW','yMXVy2S','BNnLDca','s0L6Eeu','A3mGD2G','Ds1YB28','B2zMihq','w2rHDge','vKLt','nYWUmsK','ig9MzG','yMX5lMK','EMu6mte','CMfUihK','BYb0Agu','B3v0','CNfgzxe','r0zcwxu','CZPUB24','Fdb8nG','nsWUmdG','oYi+ltW','EeH3DKe','yxbRA1y','Cgv0ywW','z2v0q2W','igLKpsi','zxj0Eq','BgLKihi','yMvbvuK','DMvJmG','zhrOoJi','EcbZB2W','C29SDMu','AxLkzw8','lKHfqva','iMvZCci','r0PkChG','vgj3ENi','ugXHEwu','mtaSmte','twrODLy','yxrnCW','i2y3zwu','qM94zxm','iNnUyxa','tLLWt3a','EuTMrKq','mNmSyMe','DgG6BwK','ys1ZDW','yxjKlxi','tefvtLC','Bgu9iM0','iNrLEhq','zxLuDwW','A2v5zg8','qwL6zgC','yMeOmJq','igLZig4','yM90q28','DgG6mZq','lsbvBMK','AgvHBhq','nZu7Bwe','CdO4ChG','Cg9PBNq','CMeTzxm','nKDQteziEa','B25NlG','Ewf3','C3LLrvO','mNWXFdu','ltiUnsa','mJGPo30','uwnYEhC','zwz0oMe','CgLnyK8','BIb0Agu','zMLzCfy','DgHLig8','t2zMC2u','D2HVBgu','pgiGC3q','DLvOzwC','yxrPB24','ndySmJm','mtu3lc4','zsbWCMu','uhrnwLG','yxLuBeG','zYdcTYa','C2fNzq','ldiZocW','uwrZDe4','ywn0B3i','mhHLoa','B3bHy2K','B3i6CMC','Ce1nuNq','y0PoDKS','txvSDgK','BvD6DvG','yxmGAwq','z0PXCe8','ALnSBuq','CKnVDw4','ihvPlw0','Bg1xufi','CMvNAxm','Bw9YEvq','vLDyDMO','BMC6nha','zKnKug0','kdeWmhy','BwuUy3i','zxaGDgG','CMfUzg8','Dxm6n3a','rNPTvuu','BNnVBge','qK96rgS','ww1XvfK','vKfm','C29SDxq','rfzmD3q','CMfTzs4','AuzeuNy','iJ5dB3a','mNb4idC','Dg9YicS','tJWVyNu','zgLUzZO','u1HgweS','s3HWteW','ihbHBMu','nhW3Fdi','kdiXlde','CI5QCYa','BMfSv2e','B3jPz2K','vg90ywW','t0PrseO','AgvYAxq','DY5vBMK','vMfHuxO','CJOJzJC','ifnRAwW','tw9KDwW','yxvSDa','v2vItw8','C3LUyW','BgrPBMC','Cg9Z','tgvey2O','AwHvzwG','BgLNBJO','lc4WnsK','mtaIihi','Aw9JDMC','ChDswva','tMv0D28','CwXiwMm','B3vUDa','i2zMnMi','tNPRy3q','BwuGBM8','u2vNB2u','sevbufu','A0LHq0q','ywrKCMu','B3vUzci','EMLWvxi','zMzZzxq','AY13B3i','psiXlJi','BgLUzvq','C0Dkuhq','uxzbDvC','Awr0AdO','C2TPBMC','nNb4o2i','yKzlBuy','rJGGlYa','BM9UztS','zMfSC2u','CI1YDw4','zNjHBwu','zwP0zLy','s1LwsgK','u2vzCem','zLjTzfy','wfL0ugC','vvDnsYa','DMD7D2K','s2vWzuy','zw1ZoMm','revpufe','lM1UlwW','AMLtyu8','ztOXnha','zgvIDwC','DgHLigW','EtPMBgu','o2jVCMq','zxnbqvi','zw4Gyw4','o21HEc0','BhqGC2K','ChG7yM8','C3bSAxq','CNqGihq','qNjHy2S','BgLUzwm','yxrLigy','zIb0Agu','vw5PDhK','Aw1Lr2e','igfUzca','zMLYC3q','zgvYoJa','v0nmAfe','ysbtA2K','ihvUAxq','Ate2','BwuUx2C','qMrOALa','B3i6','B3qUBw4','DgXLCW','CZPJzw4','DhrVBJ4','oImXnta','Ahq6mJq','mhb4ic0','CfjmvgC','C2STC3C','yxbWzw4','zfLtAgm','igvHC2u','B2jMqG','CMv7zM8','CMDPBI0','o2DHCdO','D3jHCha','swPyExq','D2fYBMK','mNz3ldy','Chf3q1q','oYi+rvm','y2TNCM8','lJq1ktS','y2XPCgi','pZWVC3a','AcbMAwu','ndC7','idaGlYa','D2fYBG','ifvjiIW','Aw5Qzwm','mJu1ldi','wvfjyum','svPzs1a','yxrHihi','mcuGBM8','B3rLE2y','AxvZoJK','AwDUlxm','CMrLCJO','iMrPC3a','nxW0Fdy','swP6suC','EIaOsw4','BM9Uzq','CZOXmha','CMeTC3C','mhG5oa','yNL0zuW','B25VC3a','BeHTDg4','CMvK','zxCGy2e','tLbdx0m','ANPoD0e','v3f3tfa','ywLSywi','o3bHzgq','BNrezwy','mda7Bwe','zwqGB2y','DgHLiha','zxG6mJe','werSCeu','zYbTyxi','yMrHowm','DgvK','CuLyt2q','y2vKigi','v29YBgq','AxrSzxm','Bg9JywW','Aw1L','DxjJzq','mhb4oYi','BNqTC2K','ksWGC28','mcu7','CMfJDgu','uLf4ALm','AwzLig8','ChGGlte','zwfKEsa','rNvgDw0','mNWZFde','ALz0wLy','ChG7Agu','zxHPC3q','z2H0oJC','zgLZCgW','z3fXAxa','zM92','BgLNBI0','yLjhD1e','rwL0Agu','Dg9YqwW','o3DPzhq','BwLUv2K','DMC+','D2HPDgu','ywz0zxi','y2u7','vgHLigy','oJeYChG','icbOB28','z2v0q28','v19F','q291BNq','Ag9VAW','Dgv4Dee','ztT9','DwzPuve','otK7y3u','zhHOtNq','qvrVEgS','CMf3','D3jHCdS','nsK7','igjSB2m','iefdveK','qu5pveG','zZOXmxa','lwzPCNm','rw5LBxK','t05WEgK','zujWBue','CgXPzxi','B2TLpsi','zfjRB24','AdOWo30','BwLSEtO','Awz3ELu','y2GGDgG','ufHitei','Bwf4','BLr5Cgu','oMjYAwC','Ew52vuS','msiGDMe','cNbPDgm','ywqU','rMPdvei','z3vhDvy','owqPida','idHWEdS','z2jHkdi','t2fRq0C','zNjVBsa','nhb4ide','mhb4idu','BgqGAxm','ExbLCW','uwzAuuK','ChGGmdS','AwDPBMe','yNv0Dg8','mhGXmum','zwn0zwq','Fdz8oa','psjZywS','weDnA0y','Dc13zwK','icdcTYaG','zvn0EwW','oNrYyw4','y0D2ufi','AguGBgK','BMLqDxq','zs1JB2W','lNnRlwi','Fdj8mhW','AgLKzgu','Aw5KzxG','BMfNzxi','ChbLyxi','CM9SBgi','AxrSzsa','BMq7Fq','zcWGBM8','icaGia','igzYyw0','B2jMrG','Bg9HDhm','Ag9ZDa','DLrAA2q','C2XPzgu','ysGYntu','vw13wgC','ohb4o2G','igLZigy','B3CGkey','tMX3D3i','DcbIzwu','z2H0oJm','mJq2ldi','C3CYlwi','B24GAwq','BfDHCNO','AgfKB3C','DdPUB24','EcXJywW','zgvZy3S','quDxD2K','AwXKlG','zuvHrKO','ugfZDgu','mda7y3u','Bwf4lwG','yNvMzMu','sgvHCa','z2v0rMW','nxWY','lZeUndu','khrOAxm','z2H0oJe','DxjLzca','CdOXmha','mJbWEca','zMvLDa','zJWVyNu','DMPMEfm','qufgsvq','lwHPBNq','DxbKyxq','CgfKrw4','t21VAxm','y2fTzxi','wMLOAwG','Dg9WoJe','sKXyA04','psjZDZi','sgjMv2K','wNbnu3O','zgPgsum','Bg9Hzhm','Fdb8nhW','khmPihq','ztTWywq','zM9Sza','zcbYz2i','C2HbAKG','tgffz2i','BI5FCNu','wLnqu0m','x19ZywS','Aw1WBge','ywLUAw4','zMfJDg8','CM9ZCY0','y2XLyxi','tLr6ufG','Bw4TAa','DfPntvy','igXPDMu','yxr1CMu','AhvKlwm','ywjZ','o29Wywm','DcbUBYa','Dg9tDhi','zMfRzq','CML0Dgu','y1zMA2e','y2fWDhu','DgHLigC','lY0WlJu','yNvsqwm','D29Yzc0','y3vYC28','yxjT','nYWUmZu','B2fKzwq','z25HDhu','Cg9YDca','qxrbCM0','Bd0Ii2y','v2Drqwe','AwnLihC','z2fTzvm','zwjRAxq','tLDvq2m','rgLHz24','C29SAwq','Ag11B2i','B3i6i2y','DhLSzq','DcbYzxa','vLrfsK0','D2H5','C3bLzwq','r2TmueG','AMHiA24','Axr0zwq','Ewv0ic0','DgX1tw4','ihn0CM8','r05TC3m','C1DvAe4','sNrywNa','zwfKE2q','Ag9VA1a','rvbvwLy','uxPYC0S','zxiTCMe','idmWChG','B3r7ywW','l3nWyw4','BM8Gz3i','DhLWzq','DhjqBwW','B2XZE2y','lwe9iG','sMvwuMe','BgfZDfC','EdTMB24','BLD2uvy','mYWXmdy','zYbMB3i','svvLCg4','lYbQDw0','zwDPC3q','C1nWzMK','yxnZtMe','ltqTnY4','yZK7BwK','igzPzwW','y0LUChu','icb3CMK','r2Tjv2W','yxjKlxq','oInMzJy','Cgzxrwq','tM8GCMu','Bw4TBg8','nJi3mdmYwgHYyKLl','D2X1Chm','ChG7y3u','C2v0sxq','pt09u0e','ic0GCNu','D2L0y2G','AxrJAa','B2jM','zenOAwW','yxrHBJi','B25Ligi','ms41ihu','Aw9fwLi','uvj4qu4','igfYBwu','ywT1CMe','vgfvze0','DcbPBMO','icb5yxC','icbVzMy','DgG6mJG','ufbeDM0','m1vSvvvysa','Cc1JDG','BNrPBwu','BJ8PoIa','oM1PBIG','w2fYAwe','icaXlIa','yw5ZzM8','iokaLcbUBW','Axb0igK','vMfSDwu','Aw5KB3C','EdOYmtq','B25ZB2W','sg9VA3m','igvUzca','ig9IAMu','C2STDMe','wwvwz0q','idqTnc4','mdCSmtu','u25HChm','Ce5Wsxi','Bgv4oJe','CcbHBMq','DdPZDge','yw5LBca','zdTTyxi','CMHzzNe','zdTWBge','CgfUpG','kdi0lde','sNrire0','rgnts1m','y29UDgu','Dw5KoNq','A2LUza','oJe7Dhi','C1jWC3m','sgHyAhG','zwvMntS','EuPICwO','Awr0AcK','BK5LDhC','lcbnzxq','t0jOyLq','r0r0y2C','A3mUBgu','B246B3a','tLfbsfy','BNrPyxq','A3mGD3i','vLbpD1m','AtmY','yxrJAc4','Cg9Zqxq','ieeGAg8','DcHHDxq','ugf0Aa','y3qOCYK','CYbLBMu','zeP4vgq','mhGXoa','DxjHx3m','rfLqD1O','C3rHBMm','ignYB3m','lNnRlw4','kde4ChG','Aw50BYa','Bxm6y2u','otCWnZyWv0P0vMjP','rvHTwLy','Bg9ZzxS','EhbVCNq','Bg9NBY0','vvjbx1m','zw5LBwK','zw5NDgG','zxG7z2e','i3nHA3u','zMXLEdO','CMeTBwu','zgL2','ntu1nduXmLr5v1HMEq','CwXQB2i','ysGYndy','o2nVBg8','v1vgCMm','BMnL','vwDJyxO','A1n5BMm','lJi4','iJ54pc8','C0TYEKG','iey3ica','q3vPvwy','vwfnEeK','BNrLBNq','CMvHy2G','runxwxa','idaGyxu','wLjcEwu','lxyYE2e','ic4Znxm','zvnJwKu','ntuSmtq','B2f0nJq','v2vMyNG','B250lxm','BMnLCW','u2vSzwm','BM8Gseu','ChG7B3a','CMfWoYi','nYWUocK','teTxDMe','sgLSAu4','ExnytNi','kZb4','Ad0Ims4','zvbYB3a','lwjYzwe','mtbWEdS','vKXqwvG','B29M','D2fZBu0','y2fUDMe','idaGmJq','yMfY','tu5nzwe','AgXdzg8','BeLrrhy','C3bYAw4','nJu4nZGWwe9pu3P6','mxWWFdu','zxqUia','BK1Uu3O','ywnLo3C','B3b7zgK','lxDPzhq','qLbtwLi','igLUlwy','tMXnvLm','mdTMB24','BNrxAw4','Ec8XlJm','u2HHCNa','i2zMnMu','v1biyKi','ihnRAxa','ihDOAwW','zgvYlxi','nZCSlJq','q2fmA0e','rxLL','z2rvqKS','ChGPo20','BLjOBLK','nIWYmZG','BfnZuKC','C3qGysa','i2zMzJa','zMXVyxq','DMvKia','Dg9Y','s1Lyz0W','ufKGve8','y2f0','B24Gzge','Be9WA0K','otbWEdS','ywjSzwq','zg9JDw0','C3aTy3y','Bw4TDge','uevdtg0','AgvSBg8','yxjLBNq','y29MB3i','C2LUz2W','Ag9VA3m','uKfju1q','Ag9VA0y','BMvJyxa','tvPpwgi','qKv4ywS','BYbHihq','mhGYma','B3n0Awm','zgf0yq','DgfNtwe','tfP2u2S','AgHmugG','CKXPC3q','BNrLCI0','nsaWlti','Aer5DuS','yw5KigG','ntuSmJu','BMv2zxi','yxGTD2K','CxrxAhq','zxHfuuW','swHYC24','zYaVigO','BhDHCNO','zw1VCNK','BhK6Aw4','ywTmwuK','Bw91C2u','zxG7zMW','EtOUndu','B2TLlxC','ohW2Fdu','yw4+','zxiIlci','DdmY','DNmGC24','C2H2rfy','z2XVyMe','BgLNBG','CY5Tzw0','mhG3yW','zxnWyxC','qMXmBwm','B3j0lGO','A2v5CW','EKjiD0S','rxHWB3i','zsbLDMu','Bg9YoIm','BwLU','DgLHDgu','nxW4Fdy','DxrVo2i','yvbgANq','mdT9','BM90ig0','Ds1JC3m','Aw9U','rMXHzW','mJu1lde','zEkaPJWVCW','wLHkuwq','zMLSBd0','ocWYndi','A1fpsLe','lxbHBMu','BhvLica','zgrPBMC','DM9Pza','yMvNAw4','C3rLCa','vgHLigC','sw5ZDge','AwDcyNO','zJzIowq','BMC+','qKjJAhO','C3bHy2u','CK15DeS','lNjLC28','kdaSmcW','mtqZlde','DZiTyM8','Bg1OrxO','lNnRlxm','A0nQuue','zsbZDhi','Bw4Ty2W','ywnRz3i','sffWzvu','tgLZDa','ksbVCIa','r2fTzq','yMTPDc0','CenVBNq','Dg46Ag8','CwrZAMC','yxjNAw4','ndmSmtC','ExLWzLe','BNrLEhq','BMCGlYa','zfHdzNi','imk3igzV','sgvPz2G','Dhj1zq','oxW3Fde','rvjTtMe','wu5cqvq','rLbty28','mIiGC3q','qKPougW','BMvQB2K','Bg9dAge','oMnLBNq','BgLZDa','s2rgtwG','lxnOywq','qKHIAeW','B2PeuMm','DYbNBg8','ihjNyMe','zt0IyMe','ywn0','zxnW','lK1Vzhu','zsbPBNm','otK7Bwe','iZaWmdS','FdD8mhW','ywqGzNi','DfbiuwK','DLHJA04','y2XHC3m','AwnOigy','CJPWB2K','BwfUywC','mNm7Fq','AfjjrLy','oMzSzxG','zYbSB28','surfige','y0DSzw4','vLnTC3a','DeHLywW','AgvPz2G','oxWYFdy','mIWYosW','C2STy2e','o2jHy2S','rK1RCeW','zM8Qksa','igj1Dca','BgjICKy','zfzhveO','uwfUteK','Ahzsv0u','CMfKAxu','uMvJDa','zgf0zsa','u3bLzwq','yw55ihC','uuL2sNO','CMq7zM8','Awr0Aa','C3nPBMC','igfYzsa','iZDLzta','u2nYzwu','qMLNA3u','zMPRvhe','Bc5ZAg8','BMDZ','DcGJzMy','zdPYz2i','ktTWB2K','B25LoW','CMrLCI0','BMDL','CgfKzgK','zuHxvvG','AwvSzca','lL9Nyw0','BMqU','ignHChq','BwvHBG','rJKGihm','igjVDgG','seLctgm','ys9vv00','zxzLBNq','yKHXBMC','BMrVDY4','sNvTCca','nhWZFde','Aw5ZDgu','B2DVlxm','ywi6Ag8','Dgv4Dem','zcdcTYa','CgfYyw0','EgvKo3q','lxDLAwC','lGOk','ChG7zM8','ALDoEMK','B2LUDgu','BhrLCJO','Bwvnyw4','mcaWida','zeHZsg4','BeXXzhi','C2vYDcK','Cwr1wKK','yZKIpNC','uNjVu0S','lxaSnta','Dg87Fq','mtuWnJe5EeTAqNbQ','vxbKyxq','zcbPCYa','igzVCIa','AxnWvfe','AgfIBgu','yxv0BZS','C3rLBMu','Aw50iIa','Bg9N','Bg93oMe','zxLL','CM9VDa','oxWWFde','rgLMzIa','BgvUz3q','B2fYza','DxjHlwu','oJe3ChG','u2XnsKW','lM1UlwG','CvPezvO','mtrWEdS','zw50','DND6A2u','DZOWidi','vKvsu0K','Dg9W','CeTfEei','CgvYBw8','sKrhy0y','CNnUuMy','AxmGBwK','zZO0ChG','BKPKDgu','DxjH','AgL0zs0','ufbZDgu','rLPJquS','CNLevw4','CIb0Agu','DgfYz2u','EdTWywq','ndC0odm','o21PBI0','wg5nrfK','ns00idC','mdaWo3u','DgvRsxa','D29yzuq','uu9myw8','nMi5zcW','zuvSzw0','Dg9ju08','zJmY','qNLjza','vwHKEeW','vhLtAhK','BMDlD0i','zM9UDdO','yxjJ','o3DVCMq','z3jVDw4','rMf0Bu4','rvnqoIa','oYi+','Ag9ms2u','vuHLu3G','BhKUieG','zcb3yxm','DdOWo28','Acbxzwi','ucbVBJW','vvPsA2q','lJe4ktS','ihnVBgK','zMXLEa','ig90Agu','BerJrhe','Dwj7zM8','B25JBgK','tMfTzq','zhmGB24','BNq7yM8','Dw5UAw4','DYbLEha','veLwrq','pc9WCMu','ywrPzw4','CMeTCgu','ihrOAxm','Bgu9iMm','BML0Awe','BMfTzq','zxzLCNK','ntuSlJi','EtPIBg8','zxGTzgK','y29UDhi','ywj7zgK','oJa7EI0','C3CYlwy','CgTpCem','sgvHBhq','C3CYlwG','AxnmB2m','Dw5KoNi','AxnWBge','CMvTB3y','CgXHEwu','Fdf8nNW','r05Uv2e','wg9dEgK','BNrZoMe','vKjcrMK','ig9Mia','zxnVBhy','DhfPww8','icbJyw0','uw5YDfG','vgPqs0u','rLbAzMi','ig9Uia','zw9ACxm','zM9UDa','B3rO','oYi+u24','icaHia','BgLfrva','BdPPBMK','AwWYq3a','DxnLtg8','ywnPDhK','B24+','n2e2ntG','Dw1WAw4','DgfU','iZe1mgm','DxjHimk3','txzfALy','DhjHBNm','Fdn8n3W','yw1L','Bwf4psi','BvLcrfi','Dc5wywW','z2vYlIa','ChrY','uw1bueG','yt0IyMe','rg5NDui','ALbRvxi','lxnWywm','Ec8XlJq','pc9KAxy','BMC6mca','C2jRrhq','Dw5Kzwy','psjIywm','DvzZD1O','ru1RwKW','vNzoq04','CKnVBNq','n2vLzJu','Dhm6yxu','DhHkwve','yxG9iJu','rviGvvC','CMvHzca','mNb4o2i','BNq4','Bwf4kdi','tLbgs1a','y2fSlMq','EI51C2u','ihvUyxy','BNnPC3q','lc40ktS','icbVyMO','yNvPBhq','q2fTzxi','EK9SBee','tgDuEKW','DMLLDW','tw91C2u','DhLWzum','nxm0idi','lwLUzgu','B2yGDMK','mhW0Fdi','iMjHy2S','oInMnMu','y2fTia','igLUC3q','oJaGmca','CNjVCG','khmPigq','qMrTvKy','zwf2vNm','su9MzMK','veXJvxC','AwvYkc4','iIbZDhK','yujXsLm','uKfqueu','BwvZC2e','zciVpG','n3W0Fdi','Bw9osMC','CMvUDca','EY13zwi','lcbZDgu','y3zbExe','ihrVCc0','z2v0sxq','BMnLC1i','BM9ZCge','AgLSza','B25NE2m','BKHSD1m','zw5HyMW','C28GC3q','yxmSBw8','uMjhBee','C2fUzq','oJm0ChG','AwX3uhC','zxG6BM8','mIaXmK0','mxb4o2m','Be5cAKi','B25PBNa','ig9Ul28','C3vI','CLDeq3G','ExLXsgy','zxrmzwy','C2HHzg8','lwnOzwm','Dw5PDhK','igzSB28','ys1IB3G','zxa9iJa','DgvYiJ4','mtGGnIa','wwz6tu8','nZKSmtq','ExzUy0W','ENHur2q','ww9NA0O','idfWEca','AgLUDa','sKnSEwC','vgv4Da','D053yMS','z2v0rwW','ihrOzsa','B25Lige','ChG7Fq','vNzctxa','r2fTzsG','BwvTB3i','kdi1nsW','yxjHBMm','Fdf8mW','igvUDhi','iIbMAwW','mhHKma','sw5Zzxi','DgGY','Axb0ige','s3PJDxu','y3zpr1q','ywSTD28','BK93uKC','qvDxseW','igDHBwu','DgHLigm','z2uUrgu','BeTsAMy','ksbZyxq','qxbWBgK','Esb0Exa','C2v0sw4','zKLlB0e','ihnPz24','DgLUzYa','ifrOzsa','lc4WmJu','yMeOmJu','DdOXnha','CMfTzsa','zYbIBgK','tLf2ALC','ywjSzsa','AMXfBve','Aw5Uzxi','nYWUncK','ru5ept0','rJKPpc8','yxj7D2K','BgfZDem','EwvZ','zxjYB3i','B2r5','zYbMywK','BeL0uwC','oMzPEgu','zKDVEKS','Fdj8mW','nNb4o3C','psiXnJa','B25Z','DxjjB1O','DgHPBMC','BxmGD2K','Bgu9iMq','C3fYDa','nZq4mZa','Ehfmue0','DgnOzxm','CJT3Awq','B3bLCNq','C2STC2W','iJ48l2q','oJiXndC','lwH1zhS','wLLxsvm','yxv0BW','vtGGAxm','mhGXna','ywL0Aw4','BufbBhq','BwuGD2u','BwTRCMq','Dxr0B24','sw5KzxG','EeLjweK','Cg9YDge','wMHLAKK','psjTBI0','AefyC1u','BhjPswC','DgvTCZO','ANvZDgK','D2LKDgG','ywnLlwK','lwrPCMu','v0vZu0O','ywXPz24','DvLjCg0','ywWGBM8','EuTXvNy','vMr5DuC','rhjqDKu','CMfUz2u','s1b4yNO','DgfSBgK','B2r1Bgu','BwfYA3m','BgvYkZa','Axr5oJe','wvj5v3O','ohb4ide','ufDtrNu','y29SCW','CNnVCJO','CgHVDg8','BcbKAxm','DgnvqxC','zMjArgK','qLnAEu8','Ee9AEe0','lt4GDM8','yxm+','idaGmxa','DhLSzt0','ig9Yihq','wKPpB1e','De9rD2C','B3vUzcW','t2zM','EdTHy2m','FdD8m3W','ywXSoMK','mJG7','Be5LBLC','mduPo30','Bgv4lxC','sg5Yre0','y2uTAxq','yJLKo2i','B2Xwv0m','qu5SBva','oM9Wywm','DcbZCgu','Bw4TBwe','DxDTAYa','D2LUzg8','ic0+ia','zM5vuhy','EdT9','y2uGyM8','lxnUyxa','AwDODdO','BIbPzNi','ie9o','vhD3su4','Cff1uLu','Aw5WDxq','mcaWige','zgf0yxm','yuXUuwi','sefmz2K','y3jcrMK','zM9UDc0','EdTOzwK','oIm4zdC','vLf5sKe','wKLLs3u','m3WXFdu','EwuU','pc9ZBwe','tuSGq08','ihbHC3m','BM8GD2e','A2DYB3u','ihbHz2u','rhrys28','DxjHtwu','B3i6Cg8','EMu6mta','idrWEca','m3WYFde','DgvZia','o21HCMC','B3rVBvq','BNrLCJS','C3rYB24','zvbSDwC','z2v0vwK','Bu9Kufm','u3rYAw4','q2PxAeq','DcbKyxq','BM93','Aw5PDgu','yxnZtKW','oJi1ChG','yM90CW','DdOXmha','C3vYDMu','yMfZzq','yhbSyxK','AgfUzwq','nduPo2i','yM9VBgu','AgfZtw8','mNb4o3O','B2XZoJO','EKrUzw0','EdPUB24','BgLKzxi','mNW2','i2zMzdq','o3rVCdO','C2vYlxm','ywWGB24','oMnVBhu','D1D1zg8','wurTuLe','ktT9','Axy+','DfDPzhq','tfDtAhG','zMykrJG','z24TAxq','zsb0Age','z2H0oJy','C3LZDgu','zMLSDgu','BgvJDdO','CYbVCNa','ywnLlem','ie9IC2m','BNrZoM4','ztOXmxa','tuz1DvG','EwHLz0y','oNbYzs0','C2vLBNq','sKzQrgK','C291CMm','Aw5Lza','yMfJA2C','DxrdA3q','Agf3qLy','yxbWBhK','BgvY','zNbZ','vgfTCgu','zwq6ia','Dcb3yxm','C28GAg8','BgfIzwW','EvrHCa','iM5VBMu','nxWWFde','o292zxi','zw1WDhK','ldi1nsW','t2TdsMe','ihjLy28','zNjVDw4','Cg9ZDe0','ntbWEcW','CM91BMq','wKfZyKi','psiXmIi','A2v5u28','ztTTyxi','ihnRAwW','mhG0ma','BMD0AcW','v2LKDgG','BwuGAw4','igHHy2S','BNqZmG','z1bXq1C','y2uSihm','sgjXD2S','DgL2zxS','z2fTzsa','BhfcCLq','B0nTv0S','EdTMBgu','Bw4Ty28','DxnPyMW','weXTwMu','pgj1Dhq','yMvHCMK','ANbprwy','tKrKtMO','C1j2D2O','CM93CW','mtjWEca','ig1LBNu','mhHKna','DgfN','CfjTwfu','yM9KEq','Aw9UoMy','zhrOoJu','pc9ZDhi','zwqU','iIb3Awq','y2PhDxC','BxbSyxq','ug9nB24','B2fNDhO','DgGGB3i','BNLAzge','zxrsAwC','q0PnChO','C2STBM8','BMCGyxq','ywLUE2y','DKThDfm','zuznr0S','C2fRDxi','CM9Rzs0','ihjLCg8','AwDtwKq','zdDHotK','BwLUkdu','EKjyrfO','mxb4idy','nhW4Fdm','yxK6zMW','nZC2mda2A2znDeXZ','C3rYAw4','BwuUCMu','AvDXCvO','Fdz8mta','BgvKoIa','CMvIDwK','yM94zxm','nhWWFdy','CNq7ywW','zg93','v0zoCMS','swj2ELy','qvrIrfG','Dg8Gy2W','mtC3lc4','B246y28','DJiTy3m','AxjLuhi','v2vHCg8','r3v6r0G','DxL3Bem','DhjVA2u','D2vPz2G','B3j5','rw5HyMW','keLUC2u','vLrABKu','BgvMDdO','CI1Yywq','tgDAzxm','BMu7Cg8','igDSB2i','xxTIywm','C3rHCNq','uMvNAxm','z2LMEq','Dxm6oha','q1vRzwy','u1vAD2O','B2SGAxm','v3jHCha','vLH6Cve','Et8Pica','Bw4TC2K','lwjVDhq','CKnVBg8','Dg87zMK','zgLMzG','nIKSAw4','ign5psi','BwvTyMu','we9fvgi','BuT4vNa','zvjAzNy','Dg9gAxG','lNnRlxy','B3jRu3K','y2S7zM8','DgeTyt0','ALj3tfK','lNnRlwm','AvnoCxC','y29Kzq','zgTPDc4','oInMn2u','zM9YBq','ic8G','Dgf5CYa','rNzpC1K','CMvMDxm','yMfLzxC','Chr4r3u','AwvKige','CMvMCW','CgfYzw4','CNvUBMK','lxjLCgu','nsK7yM8','sfveigq','DxjPBMC','wfHJChq','BgXxyxi','Ewf3t2y','ihbHC3q','sKrWzMe','AgrovwC','EIdIGjqG','zxi7zM8','Bw4TDgK','ignSyxm','qxnZzw0','DhrVBtO','yxjKlwG','C2XPy2u','zwn0Aw8','qKvhsu4','DdPTAw4','sxfbrw0','zw50o2i','Bg9VA3m','BgCIihm','CMuG','DLnXuLy','DgG9iJe','phbYzsa','zwqGyNu','igHLEd0','BMfWC2G','qxrgAxi','B3CTEtO','DhbvwuG','DeHLAwC','yw5Jzsa','wfbMDxO','BNqXnG','yLnfD1K','zxr3B3i','mhb4o2y','y3rZimk3','lxrYywm','AwvK','vgLPu0O','B206mxa','q0HdAfi','zKfoA0e','EwXLpsi','DhK6mdS','zvzsCeW','vfjKtLC','zwqGlsa','zxmGDgG','EdTIywm','DMuGBwe','rgHlyvu','jtTIywm','ndzWEdS','Ewv0lG','BM90zq','r2vWzxO','B2XPzca','zxiTC2u','DgXL','zxjfAM4','AxrLBxm','BJPJB2W','yxbWBgK','BgvYigG','z1DRweS','zYbZy3i','ztT0B3a','CMvWBge','Fdf8mhW','wwXmsxC','y21K','wvvRqNy','C3rVCfa','nYK7y3u','idGWChG','y2vUDgu','C2nYAxa','CNj7y28','Aw5N','Eca4ChG','suDXCKy','B2f0mZi','FdL8mtu','D2f0y2G','EKHIveW','yKzKz1a','EejeB2m','iIbZDgu','zxnJ','FdeZFde','CM9SBgu','Au5lvvu','zwy1o2i','Dte2','q2TmD0O','lwL0zw0','Dde2','lNnRlwW','DMvhyw0','BMuUifq','zw50tgK','r0z5r0C','C25HChm','oJfWEca','zw1LBNq','C3nqt2u','txHqDMu','DxjHDgu','BejAzKC','zgfY','s3L5vNa','BM90ihi','Bgv4oJa','B3vWig8','AunAqNi','B21Tyw4','u0TjteW','E29Wywm','y2uSq28','u29OD2K','C3zNiIa','y2XPzw4','D2fZBvq','zwz0oJe','igL0ihm','EMf0teS','D1PrswO','Fdj8na','B3qGD2K','DvngEKK','x3j1BNq','m3WYFda','s29wB1i','yxmGzMK','FdD8nxW','CNvUDgK','yw5NzxS','CNvUCYa','AgL0CW','yuzYB20','Aw4TyM8','igP1Bxa','yxqSCMC','ytK5o20','zdP0CMe','zxH0','lM1Ulxm','zwXLy3q','CgvJDhm','ufHUq04','yxnZAwy','oM5VBMu','mtj8mtq','zxjLzca','D2jYwhO','DxjYzw4','r09bzeS','zhvSzq','oJrWEca','Aw5NoJi','Bujjvgm','CMvvrfy','vgDrD0y','zwz0ic4','zw51','DefUCgy','s0fbtKe','zhmGWRCG','y29WEq','AfnJCMK','Fdr8m3W','idqGnc4','C2STBwq','CMvKihK','B2T4Au0','sYbZy3i','D3HAD1e','BKvIEKW','mcaXChG','ntTWB2K','D3jtBhO','zxi7zMW','vgLJEMu','z2vY','C3bSyxK','te91zgG','DMLZAwi','CgL0y2G','tIbIEsa','B3rVBK4','B3rYB2W','l2j1Dhq','CMuGAwC','CgX1z2K','re9nq28','zJu7Fq','r1j5uem','ihDYAxq','C2vSzIa','ywrKrxy','Dgf0Dxm','uwjkywK','BLj1BNq','phn2zYa','mxb4ihm','CgfUzwW','AfD2twi','DejtwvO','nxb4o2G','AgvHza','igLZihi','yNv0ig4','BNTIywm','lcbUBYa','zwLNAhq','C28GAxq','EdTIB3i','wLbMtxC','nYWUnsK','lgnHBgm','B25Jzsa','oMjSDxi','swHisvu','CMvHzhm','x19tquS','yw1LihC','Bezpzfi','rK9xCgK','AguGCMe','lJuGms4','CMvMAxG','BMfSrNu','BIbHihi','zxjZ','y3jLyxq','ExrxAxK','sezouei','zK92Cxy','zwqGDgG','zxHWB3i','mda7y28','CI10Ahu','BgnTuhK','AxmGyNu','CMXHyMu','Fdb8na','zwXVywq','qNnKyu0','tezPEvq','igrVy3u','DciGC3q','icaYlIa','zYbZDxm','ywLSzwq','Bg5bveq','uLmG','CNmGyxi','rvnqig0','DuXAqvy','s0vtrxa','BgvYige','BhvWrK4','B3vUzdO','ig9U','uKvUzNa','tvDTB2O','BcXTAw4','DgHLBG','nsWUmdi','B2XSzxi','r1PAy3O','icHZB3u','A2L0lxu','lZ48l3m','teLwrsa','zxrVBG','ChvZAa','ywX1zt0','CMv0Dxi','B1PIBwG','CxvLCNK','DMLLD0i','pgnHBNy','CIb5B3u','lNnRlxi','zgvMAw4','yxbWzxi','vgHPCYa','DxjHvge','uMT6sxG','EdTNyxa','Bs11AsW','ifvxtuS','qLbArNK','CNz5vey','A2v5','ihvWk2q','kgXVyMi','CMvZB2W','zMfPBgu','EMrtsuO','zwyYo2y','qM90','A2v5qxq','4Psa4Psaia','yM9KExS','BM5VDca','rg1OuM8','zxrOAw4','nhb4idK','BejZtKK','ywrKAw4','CMuGkhi','rhjNsw4','nZH2AdS','ic0Gy2e','CJOXChG','D3jVBMC','Bg93oMG','rg5ovKC','B2zMC2u','z2fTzq','CMvWzwe','BMqGBM8','rJyGywW','r0PQu1a','ugHVDg8','phnTywW','AwqGCMC','jwnBC2e','BNnWyxi','zwf0zva','DvLJBw0','DMvYBg8','ChG7yMe','B3LtEuW','lwnHCMq','E2zVBNq','zeDWC2C','icaGDhK','CMvSyxq','CvLksKy','ENPqr1y','yw1PBhK','rNzSwfu','idaGmca','A3TOzwK','s21Zv2i','DYGWida','CMvWB3i','EMrfCeW','yxK6z3i','B25LoYi','ys1LC3a','yt0IC3q','nwmWidm','CgfJAxq','oxWXmhW','Bg9ZztO','zw1Pzxm','lJm2lde','Fdf8oa','D192mG','Fdb8m3W','zKnUuhO','kduWmha','vhn5CNm','DYaTidq','y3nZvgu','ChrLza','s2Phs3a','sMTXA1i','Axr5','y2fWC3u','AxDYvKG','ktTJB2W','CMuGy2W','B3bLBIa','B246ywi','v3r4CLq','DMfSDwu','s3LvwMi','ug9ZAxq','B3bLBG','CxbHsLK','q2XPCgi','uxnKrhC','r0DzEg0','AZPICMu','Cd0Imc4','A2vKpsi','BuPvvwe','DhjPyNu','B2LJuhC','zMy8l2i','psjJB2W','EdSIpNy','Eu94EgO','AxnHyMW','zxG7ywW','D1nSEg0','rwvMt2q','zsbNyw0','BM9Yzwq','EtPNCMK','AwqGzg8','lM1Ulwm','BhPlr3K','Dw1IE2i','DxjJztO','DgL0Bgu','BYb3zsa','Ahq6nZa','vKuGDG','A2LUzYa','tvnUAMK','z2v0sw4','zw5Jzsa','ywrPDxm','Bg9YoNi','D3z3B3K','i2zMyJm','z0PzrNO','qKDVrfi','zw50zxi','DcaOC28','Ag9Ksw4','ChqRmhG','CIiGDhK','y2HLy2S','qM5yBgy','ktSTD2u','oJrWEdS','B250zw4','BuXRCgW','l2nHBNy','sMPnzwi','idzWEca','twreq08','swXsEu0','CfjPru8','B20GDgG','EI1PBMq','ys1Tzw4','ihDOAwm','lM1Ulw0','C2STChi','ywDLigG','BwfYz2K','tuvYyLC','AguGD3i','BwvHBNm','CeXwwK0','DcbTyxq','yxbP','wKjTs0e','zNP6wfu','pgrPDIa','DxjHpc8','DMvYC2K','DgLHBh0','Bw4TC3u','yM94lxm','A2vLCa','lde0mYW','zYbxzwi','Dc1ZAxO','yMTiy1a','DYW2mJa','u2fRDxi','C3r5Bgu','AwrLCG','y29Z','rNnzBuq','B0Trtxi','y2Pcs0G','psiXiIa','BMTLEsa','y2GUC3K','zsbUB3q','oNjNyMe','B0XVCuq','nJq2o3a','BNq6Aw4','AffqAgy','Dxm6nNa','ANP4rMe','Aw1Lsxm','BMCGzM8','DxDUCei','r2LRzhC','ohb4o2i','CMDIysG','zgvYoJe','qwr3quK','zNKTy28','jsKGmta','CM9WywC','ugTevMW','nsWYntu','EcaXmNa','n3W0FdG','ys1ZDY0','FdH8mxW','DhLxzwi','CYb3zxi','Aw5N4OcM','u2fzwvm','thf2rMq','CJOWo2i','u2nRCLa','CIiGC3q','zMLSBfm','DgG6mdS','tNjNwKC','Dwfmrey','C3bHBG','C2L6zq','BhTWB3m','DMfYkc0','Aw9UoMW','mteUnxa','BNn0yw4','iZjHmgy','C3rYB2S','A0nqsLC','mtjWEc8','y2u7y28','tg9VAW','EhL6','DMuGB2i','uMvZB2W','igHVB2S','igHLyxa','B2XVCJO','igXPA2u','Bgu9iMi','AxrPB24','v3L5sei','BvPpuLu','lM1Ulxq','lde1nYW','tun5A28','AwrLBNq','ztT3Awq','x2DHBwu','mZmWodu2CeHcrfnt','odbWEdS','B3G9iJa','A2v5q28','ChjLDMu','yw5ZCge','vffnzNO','C3LUy3m','ig1PBJ0','Bw9UB3m','zgTPDa','nxW0Fda','u2vLBG','BMC6nNa','AwzYyw0','iIbZDhi','B3qGica','rLbWrxe','zMzMoW','lxnWzwu','DuHYEMW','rKDrvwS','B2jMsq','oJeGmsa','Fdf8mta','A3vYyv0','ig9Uihq','y29SB3i','B3jKzxi','xtO6ywy','Ag9ZDg4','zMLYzsa','zw5LBxK','BNrYB2W','DKrHuwS','rg9ZEem','DgvYo2y','AgLKpq','AvLHEgm','BhKGCg8','CMfUC3a','EcbYz2i','q09pC2e','BgLUzvC','zcb0Agu','DLPOsu4','Dw1Uo2e','wuzerfq','Ec1ZAge','qNvPBgq','BgX3yxi','BMCGB24','C2vSzwm','DNDrwKG','ExztENK','nsWXndm','ChGVms4','yNL0zxm','BgXLzca','C3mGmhG','s0ncD3m','ihn0EwW','lMrSBa','phnWyw4','yw5Nzsi','s0XNqNu','EMfyvM8','DMLZDwe','icaGica','z3TMB24','DgvHBq','ChGGC28','BNvTyMu','quzZsNu','AM9PBG','nxb4o30','Aw50zxi','otLWEdS','C2LU','BwvUDc0','q29WAwu','ihzPysa','y29Uy2e','ChzyAwK','lJCYktS','mduPlda','AgvHCca','DcaWicG','rwjQwfe','zw50lwm','uMvSB2e','CZ0NC2S','CML0o28','D3jPDgu','ncK7yM8','zwqGBM8','s3DfwgG','Awq9iNm','mxW0Fdi','zxnZywC','zxi6mdS','C3zNpG','mNb4o3a','CgLUzYa','Ahq6nJu','ChG7Bwe','mcbYz2i','ys5ZA2K','vKH2ELK','Chr1CMu','yxr0zw0','ywn0Axy','ztTZDhi','B2TZihi','CwXTwgi','Dw5PDa','D3jHCdO','lwv2zw4','ifnxlva','AwX0zxi','Fdb8mNW','CI1LDMu','twjHwuS','Ag90CYa','BK1HBMe','ys1ZA2K','Dc5KBgW','E2zSzxG','zeLnr3a','CM96wwC','o2zVBNq','yMLUzgK','s1nrvhy','B1vZCfq','lc40nsK','Bu5cDeC','oI40o30','u2vZC2K','q1fTCLG','o2fSAwC','DMvK','zw50rwW','BM92zum','Aw5ZDge','qvbvoca','nsiGC3q','Fdn8nNW','DtmY','AwqTDgu','sfrnta','C2STy3q','pgLUChu','Ec1KAxi','zxi7D2K','q3bMAMO','y29TyMe','qxLHu0m','DgfsEwe','ywXSvMu','mNb4o2G','igfYBwK','AgvHCfu','owm5o20','BI1PDgu','mtiGmJe','zhjVCc0','zxmGAxq','mIWUnsK','AwrLE2q','vLPxqKy','zK5dqMq','ihjLywm','zgj3rwC','lJuIihy','zwXMoMy','z2H0oJi','ntuSlJa','igjVDhm','ChfYzNC','B2D4Chi','zwvKig8','q2L0zNu','yM9Yzgu','AwXfuxC','nNWY','oJeYmha','nZq4mJK','lxDLyMS','D0nIwgm','zwrnCW','oIjjBNq','lxrVz2C','kde1mcu','EsbMywK','lJKYktS','CgXPzxm','lJv6iIa','qw9qs08','EgvZlIa','igfYztO','nsWUmdu','BguGy3G','Dw50','oc00lJu','u2vLBK0','Ag90','imk3ia','v0fJwNO','zNvUy3q','mhGXma','BgfZDeu','q29WEsa','lYbZChi','oMf1Dg8','wKvyAeu','DgvYzwq','nduPoW','A2v5vxm','Fdz8mNW','oJOTD2u','icbTzw0','nJaWo20','ktTIB3i','igq9iK0','CvLqEhe','B3nWywm','v3rIq2W','yxjKlM8','vuHlwwe','mtfWEdS','C2STCMe','Aw1HCcW','i3n3mI0','ndy7y3u','C2v0ida','AxPLoJe','CMLNAhq','iZHKn2e','rvrwELy','zgL1CZO','B2SGEwu','wwj5z3m','Cg9ZAxq','o2n1CNm','u1DwweS','zKLiwMi','lwvZCc0','AxHLzdS','zxi7Dxm','seTwre4','igL0ige','B2XLig4','C2vYAwy','C01yvuS','mJu1lc4','uNvUDgK','BIbuyw0','AdO5nNa','zgf0ys0','uMLpEu4','lxjHzgK','mtjWEdS','nsb1As0','EgnsCLu','EvnWy1G','sMn0BMG','sLLIvgK','zhrOoJm','owqIihm','twTLuhi','nc00lJu','wLzfAg8','DhKGAw4','vhvSqvK','ocK7Fq','s1vsqs0','DuTlufe','yMfS','mZGSmJq','shLmwfC','nJiWChG','vKLqyue','AxvZoJC','C3qY','AgLZiha','nxWZFdq','DdOG','AxvZoJu','idi0iJ4','AgLSzsa','DgvZDa','AK5QAvi','y3voqMm','reHWB3m','AxbIB2e','B3i6iZG','BwfW','mcbVzIa'];_0x404c=function(){return _0x441532;};return _0x404c();}(function(_0x4d688d,_0x513abc){var _0x42006e=_0x3979,_0xc9ba60=_0x4d688d();while(!![]){try{var _0x3bc6b0=-parseInt(_0x42006e(0x3e8))/(-0xed9*-0x1+0xa4f+-0x1927)+parseInt(_0x42006e(0x8a1))/(-0x2394+-0x877*0x4+0x1*0x4572)*(-parseInt(_0x42006e(0x257))/(-0xec3*-0x1+0x3e3+-0x12a3))+-parseInt(_0x42006e(0x2dd))/(-0x15fa+-0x26fa+0x3cf8)+parseInt(_0x42006e(0x29e))/(0x1750+-0x1940+-0x1f5*-0x1)*(-parseInt(_0x42006e(0xa18))/(-0x79f*-0x2+0x4*0x7a7+-0x2dd4*0x1))+parseInt(_0x42006e(0x62b))/(0x64e*-0x1+-0x5c*-0x65+-0x1df7)+parseInt(_0x42006e(0x240))/(0x1eb6*-0x1+-0x23f2+0x42b0)+parseInt(_0x42006e(0x2ab))/(-0x1*-0xc9d+-0x1bf+-0xad5);if(_0x3bc6b0===_0x513abc)break;else _0xc9ba60['push'](_0xc9ba60['shift']());}catch(_0x348289){_0xc9ba60['push'](_0xc9ba60['shift']());}}}(_0x404c,0x2*0x1ce92+-0x1693a+-0x3233),((()=>{'use strict';var _0x4b6c3b=_0x3979,_0x220211={'pExDr':'YUHtL','FMkpL':function(_0xdea635,_0x3f6939){return _0xdea635===_0x3f6939;},'GFBYu':_0x4b6c3b(0x6c5),'oySyL':_0x4b6c3b(0x8af)+'e','sSpfi':_0x4b6c3b(0x2a7)+'ra-sw'+_0x4b6c3b(0x52e)+_0x4b6c3b(0x568)+_0x4b6c3b(0x444)+'l}','wZQIj':function(_0x4d0c13,_0x7bb3c7){return _0x4d0c13!==_0x7bb3c7;},'xBDoc':'EKemy','GNnWa':function(_0x3425db,_0xc24816){return _0x3425db<_0xc24816;},'buRAc':function(_0x2fa229,_0x154e41,_0x491e85){return _0x2fa229(_0x154e41,_0x491e85);},'DVLwt':function(_0x4da4fe){return _0x4da4fe();},'DcXvk':_0x4b6c3b(0x586),'NmWhs':'RGUpR','pLVZM':'sakur'+'a-sw-'+'v2-ta'+'b','TulAY':'ZhejI','PtMZX':'div','KdFMh':function(_0x23acb8,_0x432cd7){return _0x23acb8+_0x432cd7;},'DtXKo':function(_0x546916,_0x3e5e61){return _0x546916+_0x3e5e61;},'CuiUf':_0x4b6c3b(0x621)+'a','RbGlA':'sakur'+_0x4b6c3b(0x875)+'v2','XGrnf':'#saku'+_0x4b6c3b(0xae7)+_0x4b6c3b(0x2be)+'ll:in'+'itial'+'}','HaAhP':_0x4b6c3b(0x974)+_0x4b6c3b(0x7aa)+'d','YDisU':'AECaY','BdhjP':_0x4b6c3b(0x487),'ECWYp':'%c[sa'+'kura]'+_0x4b6c3b(0xa5b)+_0x4b6c3b(0x558)+'abled','ZKqaZ':'close','oicPw':_0x4b6c3b(0x626)+_0x4b6c3b(0xacb)+'20px)','wNwbk':'speed','jTJRw':_0x4b6c3b(0x863),'RroSK':function(_0x4c92ba,_0x2e797f){return _0x4c92ba+_0x2e797f;},'uaLDF':'no\x20re'+_0x4b6c3b(0x203)+'after'+'\x2060s\x20'+'—\x20fra'+_0x4b6c3b(0xa7a)+_0x4b6c3b(0x252)+_0x4b6c3b(0xb56)+'?','CJzoG':_0x4b6c3b(0x79e)+_0x4b6c3b(0x74c)+'\x20prov'+_0x4b6c3b(0x6ae)+'e\x20use'+'rscri'+'pt\x20IS'+_0x4b6c3b(0x4a9)+'alled'+_0x4b6c3b(0xaae)+_0x4b6c3b(0x677)+_0x4b6c3b(0x8d4)+_0x4b6c3b(0x4e8)+_0x4b6c3b(0x53a)+'l,\x0a','DosxC':_0x4b6c3b(0x77a)+'The\x20p'+_0x4b6c3b(0x83e)+'as\x20no'+_0x4b6c3b(0x1b2)+'n\x20rel'+_0x4b6c3b(0x201)+'\x20sinc'+_0x4b6c3b(0x38c)+_0x4b6c3b(0x54d)+'ng.\x0a','rXaUo':'\x20\x203.\x20'+'Both\x20'+_0x4b6c3b(0x621)+_0x4b6c3b(0x90c)+_0x4b6c3b(0x8d3)+_0x4b6c3b(0x496)+_0x4b6c3b(0xa5e)+'AND\x20t'+'he\x20ol'+'d\x20dia'+_0x4b6c3b(0x6c0)+_0x4b6c3b(0x4f6)+'re\x0a','FvlXU':_0x4b6c3b(0x3ae)+_0x4b6c3b(0x57e),'DrgIn':_0x4b6c3b(0x3ae)+_0x4b6c3b(0x9de),'MNMea':_0x4b6c3b(0x727),'QKCbg':_0x4b6c3b(0x8f1)+'d','VZWBF':_0x4b6c3b(0x86b)+_0x4b6c3b(0x349)+'43,17'+'7,.35'+')','QdAmx':_0x4b6c3b(0x3f6)+_0x4b6c3b(0x331)+'apsho'+_0x4b6c3b(0x9bf),'vKGtS':_0x4b6c3b(0x9ff)+'f5','vZhIN':function(_0x2151f9,_0x380eaf){return _0x2151f9+_0x380eaf;},'jrUvD':_0x4b6c3b(0x5d6)+_0x4b6c3b(0x5ec)+_0x4b6c3b(0xabc)+'c1d;c'+'olor:'+_0x4b6c3b(0x9ff)+'f5;bo'+_0x4b6c3b(0xae0)+_0x4b6c3b(0x74b)+'olid\x20'+_0x4b6c3b(0x86b)+_0x4b6c3b(0x349)+'43,17'+_0x4b6c3b(0x759)+';bord'+_0x4b6c3b(0x221)+_0x4b6c3b(0x990)+'14px;','fRmdV':function(_0x1167db,_0x29f577){return _0x1167db+_0x29f577;},'HyLXW':function(_0xaf51f7,_0xa47083){return _0xaf51f7+_0xa47083;},'AFsJu':function(_0x3ff632,_0x52d037){return _0x3ff632+_0x52d037;},'olVWC':function(_0x306b4f,_0xb1b2d1){return _0x306b4f+_0xb1b2d1;},'HbfWi':function(_0x4f13d2,_0x510c9f){return _0x4f13d2+_0x510c9f;},'sGJPt':function(_0x278466,_0x27659f){return _0x278466+_0x27659f;},'TwwIN':function(_0x176351,_0x22ef2e){return _0x176351+_0x22ef2e;},'JYbTi':function(_0x5cf768,_0x54e8b1){return _0x5cf768+_0x54e8b1;},'KYVHi':function(_0x4e140b,_0x4695d4){return _0x4e140b+_0x4695d4;},'yJbqj':_0x4b6c3b(0x848)+_0x4b6c3b(0x902)+_0x4b6c3b(0x360)+'dy\x22\x20s'+_0x4b6c3b(0x560)+_0x4b6c3b(0xae1)+'lay:n'+_0x4b6c3b(0x7df)+'>','WAWxb':_0x4b6c3b(0x848)+_0x4b6c3b(0x855)+'=\x22pad'+'ding:'+'8px\x201'+_0x4b6c3b(0x491)+_0x4b6c3b(0x8bd)+'-bott'+'om:1p'+_0x4b6c3b(0x9f4)+_0x4b6c3b(0x7c7)+_0x4b6c3b(0x509)+_0x4b6c3b(0x8d8)+',177,'+_0x4b6c3b(0x432)+_0x4b6c3b(0xb12)+_0x4b6c3b(0x62a)+'ex;ga'+_0x4b6c3b(0xa15)+';alig'+'n-ite'+_0x4b6c3b(0x29d)+_0x4b6c3b(0x59d)+'flex:'+_0x4b6c3b(0x582)+'uto;f'+_0x4b6c3b(0x56c)+'rap:w'+_0x4b6c3b(0x2c9)+'>','mZUab':_0x4b6c3b(0x429),'NDdNj':'<span'+'\x20id=\x22'+_0x4b6c3b(0x44d)+_0x4b6c3b(0xa33)+'label'+_0x4b6c3b(0x4b2)+_0x4b6c3b(0x443)+_0x4b6c3b(0x895)+'#bda9'+_0x4b6c3b(0x236)+'n-wid'+_0x4b6c3b(0xa11)+'px;\x22>'+'1.0x<'+'/span'+'>','mlDUF':'<span'+_0x4b6c3b(0x9ee)+_0x4b6c3b(0x450)+_0x4b6c3b(0x3f0)+_0x4b6c3b(0x855)+_0x4b6c3b(0x80a)+_0x4b6c3b(0x9c8)+_0x4b6c3b(0x625)+'\x22>F9\x20'+'twice'+_0x4b6c3b(0x2ee)+'e\x20wal'+_0x4b6c3b(0x81d)+_0x4b6c3b(0x975)+'intin'+_0x4b6c3b(0x324)+_0x4b6c3b(0x46f)+_0x4b6c3b(0xaf9)+_0x4b6c3b(0x9d8)+_0x4b6c3b(0x394)+'ield\x20'+'is\x20wh'+'ich.<'+_0x4b6c3b(0x224)+'>','pRLTg':_0x4b6c3b(0x694)+_0x4b6c3b(0x902)+'w2-ou'+_0x4b6c3b(0x779)+_0x4b6c3b(0x6a9)+_0x4b6c3b(0x83f)+'n:0;p'+_0x4b6c3b(0x7b6)+'g:10p'+_0x4b6c3b(0x873)+'x;ove'+'rflow'+':auto'+';flex'+_0x4b6c3b(0x8b8)+_0x4b6c3b(0x3ee)+'white'+_0x4b6c3b(0x480)+'e:pre'+'-wrap'+_0x4b6c3b(0x425)+_0x4b6c3b(0x2d1)+_0x4b6c3b(0x803)+_0x4b6c3b(0x4f9)+_0x4b6c3b(0x3b1)+'nt:in'+_0x4b6c3b(0xa63)+';','Wefbx':_0x4b6c3b(0x1c1)+'eight'+':62vh'+';\x22>No'+_0x4b6c3b(0x623)+'rt\x20ye'+'t.\x0a\x0aT'+_0x4b6c3b(0x9bd)+'anel\x20'+_0x4b6c3b(0x1d1)+_0x4b6c3b(0x947)+_0x4b6c3b(0x745)+'when\x20'+_0x4b6c3b(0x1fa)+'ame\x20f'+'rame\x20'+_0x4b6c3b(0x1dc)+_0x4b6c3b(0x25f)+'\x20cons'+_0x4b6c3b(0x99c)+'eeded'+'.\x0a\x0aIf'+_0x4b6c3b(0x6fb)+_0x4b6c3b(0x66f)+_0x4b6c3b(0x5e5)+',\x20Tam'+_0x4b6c3b(0x405)+_0x4b6c3b(0x85c)+'is\x20no'+_0x4b6c3b(0x252)+'ectin'+'g\x20int'+_0x4b6c3b(0x9e2)+_0x4b6c3b(0x299)+'s-ori'+'gin\x20g'+'ame\x20f'+_0x4b6c3b(0xa52)+_0x4b6c3b(0x43f)+'>','pwRYP':'#sw2-'+'statu'+'s','XdaRd':_0x4b6c3b(0x989)+'build','DiQJo':_0x4b6c3b(0x989)+_0x4b6c3b(0x9e3),'EefOd':_0x4b6c3b(0x989)+'toggl'+'e','vTZkd':_0x4b6c3b(0x989)+_0x4b6c3b(0x60e),'WyOuc':_0x4b6c3b(0x989)+'snap','igSZD':_0x4b6c3b(0x989)+_0x4b6c3b(0x4e3),'sWUhN':function(_0x4b44d4,_0x37e2c0,_0x1243e0){return _0x4b44d4(_0x37e2c0,_0x1243e0);},'FjhOt':'vjWkd','XLmZe':function(_0x496579,_0x44506f){return _0x496579+_0x44506f;},'akLYI':function(_0x573b61,_0xa8d21e){return _0x573b61+_0xa8d21e;},'KoVoR':_0x4b6c3b(0x575)+'\x20\x20\x20\x20','dEzPS':'\x20\x20\x20co'+'ntext'+'\x20','gYvwq':_0x4b6c3b(0x516),'OpRpK':_0x4b6c3b(0x7d2)+'pes\x20','ssPOe':function(_0x224290,_0x58535d){return _0x224290!=_0x58535d;},'ptxGu':function(_0xbff5a2,_0x1715b5){return _0xbff5a2+_0x1715b5;},'zOllA':function(_0x56986c,_0x512137){return _0x56986c+_0x512137;},'TgQwF':_0x4b6c3b(0x30c)+_0x4b6c3b(0x1a5),'YRyWz':'no\x20li'+_0x4b6c3b(0x891)+'jects'+'\x20capt'+_0x4b6c3b(0x1c9)+_0x4b6c3b(0x6b4),'mLkpl':_0x4b6c3b(0x461),'iWqqZ':function(_0x2d2cfa,_0x4e3e91){return _0x2d2cfa+_0x4e3e91;},'ekCzj':function(_0x1b2ff8,_0x5d6fed){return _0x1b2ff8!==_0x5d6fed;},'ytWiy':function(_0x3e2787,_0x3b422a){return _0x3e2787+_0x3b422a;},'IZYKP':function(_0x17c3cd,_0x38ace0){return _0x17c3cd/_0x38ace0;},'liEEP':function(_0x465fd9,_0x68fb48){return _0x465fd9+_0x68fb48;},'iocvg':function(_0x27ce40,_0x1a041d){return _0x27ce40+_0x1a041d;},'EQhcW':_0x4b6c3b(0x467),'cVfka':function(_0x427cf9,_0x92cc3a){return _0x427cf9+_0x92cc3a;},'FOWpi':_0x4b6c3b(0x6c2)+_0x4b6c3b(0xafd)+'y\x20a\x20d'+'iffer'+'ent\x20i'+_0x4b6c3b(0x889)+_0x4b6c3b(0x5f9)+_0x4b6c3b(0x81a)+'are\x20a'+_0x4b6c3b(0xa88)+_0x4b6c3b(0x4e8)+_0x4b6c3b(0x7bc)+_0x4b6c3b(0x267)+'ct\x20fo'+'r\x20','bfmML':'the\x20g'+_0x4b6c3b(0x760)+_0x4b6c3b(0x9c2)+_0x4b6c3b(0xa24)+'ne\x20ho'+_0x4b6c3b(0xa6c)+'\x20it\x20i'+_0x4b6c3b(0x5ca)+_0x4b6c3b(0x5ae)+'.\x20Dis'+_0x4b6c3b(0x50e)+'every'+_0x4b6c3b(0x435)+'r\x20','WAcZz':function(_0x2b1031,_0x5e7c63){return _0x2b1031(_0x5e7c63);},'sbkDt':function(_0x273c93,_0x3210b6){return _0x273c93!==_0x3210b6;},'LAUNW':_0x4b6c3b(0x605),'IhHIU':function(_0x44fb2a,_0x13dd97){return _0x44fb2a!==_0x13dd97;},'qduZI':function(_0x16b77d,_0x52b02a){return _0x16b77d!==_0x52b02a;},'xEeCH':'lriIg','EXmZV':function(_0x2115a8){return _0x2115a8();},'MKzAP':_0x4b6c3b(0x2b1),'DrPvE':'color'+':','mzUKy':function(_0x185dc8,_0x4801b7){return _0x185dc8(_0x4801b7);},'GGYxm':_0x4b6c3b(0xae5),'JClyg':function(_0x537358,_0x4804d3){return _0x537358!==_0x4804d3;},'BBchz':function(_0x30f276,_0x105905){return _0x30f276===_0x105905;},'gJqpO':function(_0x41409d,_0x15f874){return _0x41409d===_0x15f874;},'JFjDi':'HecnQ','lzKGy':'log','qmROo':'warn','sUOtX':'muLvo','GNmss':function(_0x3bda0d,_0x2d3aeb,_0x6d3fea,_0x21a043){return _0x3bda0d(_0x2d3aeb,_0x6d3fea,_0x21a043);},'MZOXb':_0x4b6c3b(0x3a2)+'rd-ti'+_0x4b6c3b(0x6b9),'vsZeZ':_0x4b6c3b(0x3a2)+'rd-he'+'ad','KwEXh':_0x4b6c3b(0x278),'irchJ':_0x4b6c3b(0x6eb),'EXWOs':function(_0x293f25,_0x4a7064){return _0x293f25>_0x4a7064;},'wrSlz':_0x4b6c3b(0x4ff),'fbZDi':function(_0x2043bf,_0x424f5a){return _0x2043bf-_0x424f5a;},'kAJXO':'BmfCx','ryDUn':function(_0x517e76,_0x2e560e){return _0x517e76===_0x2e560e;},'hCQry':_0x4b6c3b(0x971)+_0x4b6c3b(0x347),'PXHLB':function(_0x43b5f1,_0x1e85f1){return _0x43b5f1===_0x1e85f1;},'fzzXU':function(_0x2e2092,_0x2081c8){return _0x2e2092<_0x2081c8;},'yvncL':_0x4b6c3b(0x58e)+'ll>','tBSYZ':function(_0x5340eb,_0x1c570c){return _0x5340eb!==_0x1c570c;},'xOZxM':'UCrna','SWVXK':'sakur'+_0x4b6c3b(0x91e)+_0x4b6c3b(0x8d3)+'z','mjuiO':function(_0x381a33){return _0x381a33();},'JkqkR':'PMdXY','oZbmh':'i32','dIDLk':function(_0xc5a4c1,_0x245c70){return _0xc5a4c1!==_0x245c70;},'hzFAR':_0x4b6c3b(0x277),'lLqdr':_0x4b6c3b(0x740)+_0x4b6c3b(0x1e4)+_0x4b6c3b(0x259)+'._gam'+'e','ySpcX':_0x4b6c3b(0x9a0)+'me.re'+'solve'+'Game('+')','mKxVp':_0x4b6c3b(0x485)+_0x4b6c3b(0x5d5),'CBjHT':_0x4b6c3b(0x576)+'w.','blTZy':_0x4b6c3b(0x301),'VTZnE':'mtFVS','NlMVS':_0x4b6c3b(0x4c3),'jzxFa':_0x4b6c3b(0x2c7)+_0x4b6c3b(0x931)+_0x4b6c3b(0xa12)+_0x4b6c3b(0x9b1)+'stanc'+_0x4b6c3b(0x85e)+_0x4b6c3b(0x94c)+'hable'+_0x4b6c3b(0x8f2)+'Runti'+_0x4b6c3b(0x62d)+_0x4b6c3b(0x9f5)+_0x4b6c3b(0x4ec)+')\x20or\x20'+'any\x20w'+_0x4b6c3b(0x262)+'\x20glob'+'al','tluMn':function(_0x1f0c0e,_0x566f49){return _0x1f0c0e+_0x566f49;},'VlsUp':function(_0x51aa5d,_0x1e11c7){return _0x51aa5d+_0x1e11c7;},'QnrtX':_0x4b6c3b(0x67f)+_0x4b6c3b(0x894)+_0x4b6c3b(0x266)+'0x','CDdJV':'cGlen','rvyTF':_0x4b6c3b(0x6dc),'ilwPw':_0x4b6c3b(0x41e),'TRdNW':_0x4b6c3b(0x8b7),'kdeAx':function(_0x38f5ef,_0x537c38){return _0x38f5ef<_0x537c38;},'KmsWb':function(_0x1d7e37,_0x47a050){return _0x1d7e37>_0x47a050;},'vUheg':function(_0x5ed156,_0x419a25){return _0x5ed156|_0x419a25;},'PPste':_0x4b6c3b(0x934),'MErbW':function(_0x1e7f8c,_0xfd0f54){return _0x1e7f8c|_0xfd0f54;},'HLpvh':function(_0xa62724,_0x35cf49){return _0xa62724!==_0x35cf49;},'zxTGd':'gHPJQ','GDtcg':_0x4b6c3b(0x539),'VaaQz':function(_0x2ed4f1,_0x30307c){return _0x2ed4f1+_0x30307c;},'ngKwB':function(_0xf3442e,_0x2691ef){return _0xf3442e+_0x2691ef;},'oCmWK':_0x4b6c3b(0xa7e)+'ss\x200x','mWzuX':function(_0x575520,_0x3ef9ad){return _0x575520(_0x3ef9ad);},'JtxKw':function(_0x266c9a,_0x47ab80){return _0x266c9a===_0x47ab80;},'OBhbT':function(_0x4b45bd,_0x1f4b96){return _0x4b45bd===_0x1f4b96;},'QRxAN':function(_0x5ced91,_0x1d5946){return _0x5ced91&_0x1d5946;},'gJYFz':function(_0x225ac7,_0x319c41){return _0x225ac7(_0x319c41);},'VvBMp':function(_0x5bfcb9,_0x598a7e){return _0x5bfcb9===_0x598a7e;},'HnrDM':function(_0x52d0f0,_0x22ce2a){return _0x52d0f0^_0x22ce2a;},'YNBAT':'obfF','qYjQF':function(_0x12056f,_0x112c5c){return _0x12056f^_0x112c5c;},'NWUCc':function(_0x314a7a,_0xfb1a56){return _0x314a7a!==_0xfb1a56;},'cvOGT':function(_0x1c693e,_0x50f94f){return _0x1c693e^_0x50f94f;},'fGozK':function(_0x306b06,_0x468c41,_0x225454){return _0x306b06(_0x468c41,_0x225454);},'piMbO':function(_0x3611c3,_0x5f45bc){return _0x3611c3+_0x5f45bc;},'iSNqw':function(_0x57d0ae,_0x2ab602){return _0x57d0ae===_0x2ab602;},'hvRWE':function(_0x4037d3,_0x1e6297){return _0x4037d3===_0x1e6297;},'KYXgL':function(_0x1d98a0,_0x34af2b){return _0x1d98a0===_0x34af2b;},'rWDCx':function(_0x1fdbae,_0x4ed8cc){return _0x1fdbae&_0x4ed8cc;},'qIXOd':function(_0x412999,_0x2f0f18){return _0x412999===_0x2f0f18;},'dXCfr':function(_0x4a1111,_0x54d96e){return _0x4a1111===_0x54d96e;},'nWvQV':function(_0x1176ec,_0x6c33a2,_0x1266a1,_0x222838){return _0x1176ec(_0x6c33a2,_0x1266a1,_0x222838);},'uSFzI':'snaps'+'hot','FPpEq':function(_0x3a1d5c,_0x2f38af){return _0x3a1d5c<_0x2f38af;},'gCEds':function(_0x4b7055,_0x4e4f72){return _0x4b7055!==_0x4e4f72;},'dIMGp':function(_0x57987f,_0xcec915){return _0x57987f<_0xcec915;},'djFIC':function(_0x4a1d7f,_0x322191){return _0x4a1d7f>_0x322191;},'FfbUb':function(_0x37166d,_0x4af84c){return _0x37166d+_0x4af84c;},'SUZwj':function(_0x22d1cc,_0x4dd7f1){return _0x22d1cc<_0x4dd7f1;},'BlLmc':function(_0xb2d707,_0x28da17){return _0xb2d707!==_0x28da17;},'rhYfq':'Nlwwr','FatmN':_0x4b6c3b(0x30b)+_0x4b6c3b(0x792),'aBqJS':'below'+_0x4b6c3b(0x4d8)+'r\x20','qpaJY':function(_0x3be4c6,_0x532652){return _0x3be4c6*_0x532652;},'uTkwW':'void','VIPaA':_0x4b6c3b(0x708)+_0x4b6c3b(0x75b)+'durin'+_0x4b6c3b(0x850)+'Assem'+'bly.i'+_0x4b6c3b(0x889)+_0x4b6c3b(0x340)+_0x4b6c3b(0xaae)+'snaps'+'hots\x20'+'plugi'+'n.hoo'+_0x4b6c3b(0x286)+_0x4b6c3b(0x5f3)+'\x20','dxhNt':_0x4b6c3b(0x5df)+_0x4b6c3b(0x912)+_0x4b6c3b(0x232)+_0x4b6c3b(0x718)+'after'+_0x4b6c3b(0x99b)+_0x4b6c3b(0x73f)+_0x4b6c3b(0x812)+_0x4b6c3b(0x3eb)+'the\x20l'+_0x4b6c3b(0xb09)+_0x4b6c3b(0xaab)+'\x20page'+'.\x20','RiOyN':'UWMK\x20'+'resol'+'ved\x20','sMXUK':'\x20of\x20','kIaCD':'NvOnC','lIQDv':'exEQL','IoqRD':_0x4b6c3b(0x38b)+'le','QanLI':'RmNRw','sRvwj':'zwzng','utCkt':_0x4b6c3b(0x3e9)+'e','YujZO':function(_0x28b8f7,_0x267fe9){return _0x28b8f7+_0x267fe9;},'KLgBu':function(_0x1d9f66,_0x452d26){return _0x1d9f66!==_0x452d26;},'nRhnY':_0x4b6c3b(0xa0b),'lmWPR':function(_0xad4deb,_0x54b536){return _0xad4deb!==_0x54b536;},'rKYbX':function(_0x50db5b,_0x57077c){return _0x50db5b||_0x57077c;},'SBjuD':function(_0xc3c52f,_0x29d7f8){return _0xc3c52f===_0x29d7f8;},'AWWHL':function(_0x5cbcc1){return _0x5cbcc1();},'JLXkN':function(_0x184a0c,_0x1f6d3c){return _0x184a0c<_0x1f6d3c;},'kCjQA':function(_0x277d5f,_0x384e39){return _0x277d5f+_0x384e39;},'wvwoy':function(_0x12d1cd,_0x444463){return _0x12d1cd<_0x444463;},'WCLhQ':function(_0x43742c,_0x14e8c2){return _0x43742c*_0x14e8c2;},'AuzmI':function(_0x2658e9,_0x1e3c66){return _0x2658e9>_0x1e3c66;},'VQyJA':_0x4b6c3b(0x9b0),'rqFeq':'BSoSf','AyaSC':function(_0x2ea284,_0x1104b3,_0x4664ee){return _0x2ea284(_0x1104b3,_0x4664ee);},'QfZQI':function(_0x35c5ea,_0x1bb94a){return _0x35c5ea+_0x1bb94a;},'bkHcP':function(_0x7a94ab,_0x57421a){return _0x7a94ab<_0x57421a;},'QkJJx':function(_0x1d9289,_0x446e56){return _0x1d9289<_0x446e56;},'LZvSk':function(_0x1b5b48,_0xd215f){return _0x1b5b48===_0xd215f;},'uywlC':'Photo'+_0x4b6c3b(0x282)+'orkSy'+'nc','fNCBd':function(_0x5129dc,_0x2e2f57){return _0x5129dc<_0x2e2f57;},'KPxbz':_0x4b6c3b(0x3fb),'qlutp':'4|0|2'+'|1|3','bRGwQ':function(_0x53452c,_0x33defd,_0x151733){return _0x53452c(_0x33defd,_0x151733);},'HhXhx':_0x4b6c3b(0x44f)+_0x4b6c3b(0x728)+'pt','FsYmD':function(_0x37ddb3,_0x4c6f84,_0x133734){return _0x37ddb3(_0x4c6f84,_0x133734);},'igBbz':function(_0x531d7b,_0x3faa77){return _0x531d7b in _0x3faa77;},'cjGuw':function(_0x496199,_0x23f6a9){return _0x496199+_0x23f6a9;},'mJUUa':function(_0x25974f,_0x54e9f4){return _0x25974f===_0x54e9f4;},'GvNAo':function(_0x2bfb60,_0x495dba){return _0x2bfb60>>>_0x495dba;},'sKrzH':function(_0x2779d8,_0x289e5){return _0x2779d8===_0x289e5;},'jzNwA':function(_0x510fbe,_0x5a3d47){return _0x510fbe+_0x5a3d47;},'syrIp':'No\x20Ph'+_0x4b6c3b(0x73c)+_0x4b6c3b(0x6a0)+_0x4b6c3b(0x2b2)+_0x4b6c3b(0x754)+'NPC_C'+_0x4b6c3b(0x73d)+_0x4b6c3b(0x783)+_0x4b6c3b(0x7c2)+_0x4b6c3b(0x4fc)+'\x20mana'+_0x4b6c3b(0x47a)+'That\x20'+'is\x20wh'+'at\x20','CdOnH':_0x4b6c3b(0xa9e)+'obby\x20'+_0x4b6c3b(0x68f)+_0x4b6c3b(0x896)+_0x4b6c3b(0x245)+'n\x20the'+_0x4b6c3b(0x5e8)+'n\x20INS'+_0x4b6c3b(0x39b)+_0x4b6c3b(0x1ef)+'\x20roun'+_0x4b6c3b(0x1a4)+'t\x20the'+'\x20menu'+'.','GJjSP':function(_0x53a849,_0x546e0f){return _0x53a849!==_0x546e0f;},'ZevKa':_0x4b6c3b(0x248),'PXnCN':function(_0x2296d4,_0x423359){return _0x2296d4<_0x423359;},'cSOXX':_0x4b6c3b(0x385),'ioEZR':function(_0x54a339,_0x2c4822){return _0x54a339===_0x2c4822;},'KyyVp':function(_0x5f5a1b,_0x2edfb4){return _0x5f5a1b===_0x2edfb4;},'rrALt':function(_0x1c2dc5,_0x328566){return _0x1c2dc5===_0x328566;},'tZMMV':function(_0x59b346,_0x511265,_0x2d9215,_0xe2be67){return _0x59b346(_0x511265,_0x2d9215,_0xe2be67);},'WqwLP':_0x4b6c3b(0x311),'gdUBK':function(_0x23f96c,_0x398697){return _0x23f96c+_0x398697;},'zDnem':'\x20fake'+'=','LQZIO':function(_0x526e0a,_0x53125d){return _0x526e0a(_0x53125d);},'XGddT':_0x4b6c3b(0x86d),'IUhFm':'hyBjT','tbKNe':function(_0x3e5dbf,_0x336077){return _0x3e5dbf-_0x336077;},'ogxpr':function(_0x5363e9,_0x129060){return _0x5363e9!==_0x129060;},'GOAdK':_0x4b6c3b(0x47e),'DmhRo':_0x4b6c3b(0xb46),'jpqmg':function(_0x1aa337,_0x5e9598){return _0x1aa337===_0x5e9598;},'hmuob':_0x4b6c3b(0xac4),'CQmrX':function(_0xcb1c00,_0x6ad3e0){return _0xcb1c00<_0x6ad3e0;},'tqiYo':function(_0x5d4cd9,_0x2104fb){return _0x5d4cd9===_0x2104fb;},'FzmUE':_0x4b6c3b(0x4d7)+_0x4b6c3b(0x356)+'nce','txJYQ':_0x4b6c3b(0x4d7)+_0x4b6c3b(0x356)+'nceWr'+_0x4b6c3b(0x79d),'HiliN':function(_0x140e0b,_0x2a7d8b){return _0x140e0b<_0x2a7d8b;},'fiqZA':'Xjbtp','CjWhD':function(_0x339018,_0x389c6a){return _0x339018===_0x389c6a;},'xHwvA':'CLRPq','yQZRW':function(_0x53dcef,_0x4da911){return _0x53dcef(_0x4da911);},'nMnSz':function(_0x198cac,_0x482c31,_0x10a11c){return _0x198cac(_0x482c31,_0x10a11c);},'iwrVH':function(_0x5e95a0,_0xc44529){return _0x5e95a0(_0xc44529);},'gfYmV':_0x4b6c3b(0x7c8)+_0x4b6c3b(0x8ba)+_0x4b6c3b(0x2e5)+_0x4b6c3b(0x50b)+_0x4b6c3b(0x67a)+'isabl'+'ed','jVtZV':function(_0x453ae8){return _0x453ae8();},'pfWEd':'user-'+_0x4b6c3b(0x8d5)+_0x4b6c3b(0x1b9)+'e;-we'+'bkit-'+'user-'+'selec'+_0x4b6c3b(0x1b9)+'e;','Pwivh':_0x4b6c3b(0x621)+_0x4b6c3b(0x875)+_0x4b6c3b(0x1f1)+'ss','Qcrxw':function(_0x1802a9,_0x4421e3){return _0x1802a9+_0x4421e3;},'woXeD':'paddi'+_0x4b6c3b(0x8ae)+_0x4b6c3b(0x6ce)+_0x4b6c3b(0x923)+':11px'+_0x4b6c3b(0x1c6)+_0x4b6c3b(0xa3f)+_0x4b6c3b(0xaea)+'ace,C'+_0x4b6c3b(0x264)+_0x4b6c3b(0x4c6)+'nospa'+_0x4b6c3b(0x88e)+_0x4b6c3b(0x33e)+'f7eef'+'5;','LFwzQ':'<div\x20'+'data-'+'a=\x22st'+_0x4b6c3b(0x37c)+_0x4b6c3b(0x6a9)+_0x4b6c3b(0x8bc)+_0x4b6c3b(0x589)+'a99;m'+_0x4b6c3b(0x320)+_0x4b6c3b(0x9f3)+'90px;'+_0x4b6c3b(0x52c)+_0x4b6c3b(0x5c0),'IbvzV':function(_0x3fbc1f,_0x3dde89){return _0x3fbc1f+_0x3dde89;},'qtWht':function(_0x49f14a,_0x523869){return _0x49f14a+_0x523869;},'eEaFJ':function(_0x217165,_0x5c3a7a){return _0x217165+_0x5c3a7a;},'NYpOp':function(_0x125bef,_0x3148dc){return _0x125bef+_0x3148dc;},'Nzkct':_0x4b6c3b(0x848)+_0x4b6c3b(0x9a3)+_0x4b6c3b(0x47d)+_0x4b6c3b(0x87e)+'yle=\x22'+_0x4b6c3b(0xb12)+_0x4b6c3b(0x62a)+_0x4b6c3b(0x2a6)+'p:6px'+';alig'+'n-ite'+'ms:ce'+_0x4b6c3b(0x59d)+'flex-'+_0x4b6c3b(0x915)+_0x4b6c3b(0xb2d)+'max-w'+_0x4b6c3b(0xa87)+'290px'+_0x4b6c3b(0x429),'TQUNV':'<inpu'+_0x4b6c3b(0x5a4)+'a-a=\x22'+'fx\x22\x20t'+'ype=\x22'+_0x4b6c3b(0x54b)+'\x22\x20min'+_0x4b6c3b(0x85b)+_0x4b6c3b(0x477)+_0x4b6c3b(0x932)+_0x4b6c3b(0x4da)+_0x4b6c3b(0x94e)+_0x4b6c3b(0x794)+'\x222\x22\x20s'+'tyle='+'\x22widt'+'h:92p'+_0x4b6c3b(0x566)+_0x4b6c3b(0x8fa)+_0x4b6c3b(0x895),'ycElX':_0x4b6c3b(0x8bc)+_0x4b6c3b(0x66c)+_0x4b6c3b(0x6db)+'order'+'-radi'+'us:6p'+_0x4b6c3b(0x412)+_0x4b6c3b(0xa58)+_0x4b6c3b(0xa55)+_0x4b6c3b(0x242)+'rsor:'+'point'+'er;fo'+'nt:in'+_0x4b6c3b(0xa63)+_0x4b6c3b(0xacd)+_0x4b6c3b(0x430)+_0x4b6c3b(0x73e)+'on>','uLZAV':'<butt'+_0x4b6c3b(0x300)+_0x4b6c3b(0x666)+_0x4b6c3b(0xa01)+_0x4b6c3b(0x4b2)+'le=\x22b'+'ackgr'+_0x4b6c3b(0x785)+'trans'+_0x4b6c3b(0x676)+'t;bor'+'der:1'+_0x4b6c3b(0x8e8)+'lid\x20r'+_0x4b6c3b(0xb4a)+_0x4b6c3b(0x2c1)+'3,177'+_0x4b6c3b(0x927)+';','hWvMb':'<butt'+'on\x20da'+_0x4b6c3b(0x666)+'\x22fold'+'\x22\x20sty'+_0x4b6c3b(0xa09)+'argin'+'-left'+_0x4b6c3b(0x976)+_0x4b6c3b(0x3a3)+_0x4b6c3b(0x426)+'d:tra'+_0x4b6c3b(0x7c9)+'ent;b'+_0x4b6c3b(0x8bd)+_0x4b6c3b(0x6e6)+_0x4b6c3b(0x20c)+_0x4b6c3b(0x387)+_0x4b6c3b(0x4ee)+_0x4b6c3b(0x35f)+_0x4b6c3b(0x2f0)+_0x4b6c3b(0xb2e),'TKjIj':function(_0x145c0d,_0x4e6ffa){return _0x145c0d(_0x4e6ffa);},'FdjhP':_0x4b6c3b(0x9bc),'LgZes':function(_0xf69af9,_0x5b162d){return _0xf69af9(_0x5b162d);},'ETVzV':function(_0x148b43,_0x1f7736){return _0x148b43(_0x1f7736);},'IjzIG':_0x4b6c3b(0x2d8),'dGpsg':'snap','hdNUg':function(_0x2aa9a4,_0x5b24c5){return _0x2aa9a4(_0x5b24c5);},'qlHZc':_0x4b6c3b(0x1e0),'DnNVG':'UHKYa','OzqOe':'sakur'+_0x4b6c3b(0x7e0),'qOhou':_0x4b6c3b(0x3c1)+_0x4b6c3b(0xa44)+'x;fon'+_0x4b6c3b(0x5aa)+'x/1.3'+_0x4b6c3b(0xa3f)+_0x4b6c3b(0xaea)+_0x4b6c3b(0x5cb)+'onsol'+'as,mo'+'nospa'+_0x4b6c3b(0x88e)+_0x4b6c3b(0x33e)+'bda9c'+'9;','lqBrT':_0x4b6c3b(0x799)+_0x4b6c3b(0xa3b)+_0x4b6c3b(0xb58)+_0x4b6c3b(0x3f9)+_0x4b6c3b(0x305)+_0x4b6c3b(0x613)+'th=\x221'+'60\x22\x20h'+'eight'+_0x4b6c3b(0x51f)+'\x22\x20sty'+'le=\x22d'+_0x4b6c3b(0x453)+_0x4b6c3b(0x448)+'ck\x22><'+'/canv'+_0x4b6c3b(0x55e),'xXcmu':_0x4b6c3b(0x848)+'id=\x22s'+'akura'+_0x4b6c3b(0x997)+_0x4b6c3b(0x690)+'tyle='+_0x4b6c3b(0xa0a)+'-alig'+'n:cen'+_0x4b6c3b(0x4db)+'</div'+'>','svVAh':'DddOx','fiYpV':_0x4b6c3b(0x88a)+'1b','mkkrd':function(_0x459f94,_0x46ac86){return _0x459f94+_0x46ac86;},'eFMGK':function(_0x2f17f6,_0x2dde32){return _0x2f17f6(_0x2dde32);},'fOvqv':function(_0x316e3a){return _0x316e3a();},'TyShy':_0x4b6c3b(0x9be)+_0x4b6c3b(0xb63)+_0x4b6c3b(0x378)+_0x4b6c3b(0x62f)+'|8','OUNal':function(_0x5afd1f,_0x40639f){return _0x5afd1f+_0x40639f;},'cvAyq':_0x4b6c3b(0xb21)+'ks\x20','wSCFr':_0x4b6c3b(0x239)+_0x4b6c3b(0x59a),'LgTzL':function(_0x53a2a,_0x7a2599){return _0x53a2a+_0x7a2599;},'jRwLY':'PLAYE'+_0x4b6c3b(0x77e),'omkWh':_0x4b6c3b(0x45e)+'\x20','WgQAa':_0x4b6c3b(0x45e)+'\x20-','Sohwi':_0x4b6c3b(0x3b5)+'a8','MSnji':function(_0x228464,_0x5ae2d5){return _0x228464(_0x5ae2d5);},'XPfuz':function(_0x2d6b3a,_0x167867,_0x55bb3d){return _0x2d6b3a(_0x167867,_0x55bb3d);},'gPqCW':function(_0xa870e3,_0x224e36){return _0xa870e3+_0x224e36;},'ynvUK':function(_0x20ccff,_0x5f54aa){return _0x20ccff===_0x5f54aa;},'jeyEJ':function(_0x4e33df,_0x1b8d9f){return _0x4e33df(_0x1b8d9f);},'KyUZb':'Brack'+_0x4b6c3b(0x61a)+'ht','urIoZ':function(_0x26e7df){return _0x26e7df();},'LaEgb':function(_0x2bd544,_0x4ed971){return _0x2bd544(_0x4ed971);},'tOQwg':function(_0x1338a8,_0x27836d){return _0x1338a8(_0x27836d);},'AoPKO':function(_0x273453,_0x5c464a){return _0x273453===_0x5c464a;},'upDCU':_0x4b6c3b(0x21f),'ZIeKu':_0x4b6c3b(0x5bd),'bFKmF':function(_0x321fe2,_0x3e57b6){return _0x321fe2!==_0x3e57b6;},'ZRBye':function(_0x187d36,_0xf07bc2){return _0x187d36+_0xf07bc2;},'OJQHJ':function(_0x303009,_0x33cebb){return _0x303009+_0x33cebb;},'PFBqN':function(_0x4164cb,_0x51524b){return _0x4164cb>>>_0x51524b;},'LFiyT':function(_0x23937d,_0x237ae2,_0x1dae3c){return _0x23937d(_0x237ae2,_0x1dae3c);},'lnATD':_0x4b6c3b(0x8e9)+'r','ispTQ':function(_0x2af9ef,_0x2c6569){return _0x2af9ef/_0x2c6569;},'LeDcj':function(_0x535d04,_0x2abd29){return _0x535d04-_0x2abd29;},'rMytK':function(_0x22a583,_0x29110a){return _0x22a583+_0x29110a;},'Cpfjj':function(_0x18e0e9,_0x418807){return _0x18e0e9+_0x418807;},'pqwCT':function(_0xb11d31,_0x1bb1f3){return _0xb11d31*_0x1bb1f3;},'HQpeU':function(_0x270c6b,_0x267841){return _0x270c6b/_0x267841;},'tALcs':function(_0x1945b5,_0x2c1c58){return _0x1945b5>_0x2c1c58;},'TjPKE':function(_0x489718,_0x6835b){return _0x489718-_0x6835b;},'hUFWT':'2|4|5'+_0x4b6c3b(0x567)+_0x4b6c3b(0x3f5)+_0x4b6c3b(0xb57),'dbwEg':function(_0x54df5b,_0x556e1b,_0x23435c){return _0x54df5b(_0x556e1b,_0x23435c);},'BsdaM':function(_0x777f28,_0x4817f5,_0x3fc656){return _0x777f28(_0x4817f5,_0x3fc656);},'JFnEc':'<stro'+'ng>','wSlxm':function(_0x3ffff7){return _0x3ffff7();},'ynina':_0x4b6c3b(0xac0)+_0x4b6c3b(0x247),'zzPGV':function(_0x18a968,_0x6ce9da){return _0x18a968(_0x6ce9da);},'uKKPQ':_0x4b6c3b(0x32d)+_0x4b6c3b(0x6d8)+'6|0|1'+_0x4b6c3b(0x903)+_0x4b6c3b(0x475)+_0x4b6c3b(0x717)+_0x4b6c3b(0x6d1)+_0x4b6c3b(0x8b9),'baEgS':'input','kWCcw':_0x4b6c3b(0x987)+_0x4b6c3b(0x3c0),'LtQWu':_0x4b6c3b(0x52b)+_0x4b6c3b(0x856),'xqLPM':_0x4b6c3b(0x937)+'l','drCqx':function(_0x4ec6b3,_0x1bdf85){return _0x4ec6b3+_0x1bdf85;},'iCLct':_0x4b6c3b(0x8e0)+_0x4b6c3b(0x685)+_0x4b6c3b(0x8fc)+_0x4b6c3b(0x1d0)+'\x27>','okxiM':function(_0x1e7c90,_0xfbff8f){return _0x1e7c90<_0xfbff8f;},'WFNrk':function(_0xabc526,_0x517a64){return _0xabc526===_0x517a64;},'zipUr':function(_0x1cb107,_0xe56748){return _0x1cb107!==_0xe56748;},'PkDVl':'wpIjy','NQAHV':function(_0x519250,_0x3c737a){return _0x519250(_0x3c737a);},'ZPfMw':function(_0xcb143c,_0x48717f){return _0xcb143c+_0x48717f;},'gQWIG':_0x4b6c3b(0x744)+'es','KxpLL':function(_0xd932a3,_0x1221dd){return _0xd932a3+_0x1221dd;},'AGWwi':function(_0x111dac){return _0x111dac();},'WtxrT':function(_0x1ba784,_0x200853){return _0x1ba784+_0x200853;},'ZRokx':function(_0x1a872e,_0x4e15b1){return _0x1a872e+_0x4e15b1;},'UHeSx':function(_0x3b04a1,_0x4c1fd3,_0x306329,_0x2f5753){return _0x3b04a1(_0x4c1fd3,_0x306329,_0x2f5753);},'WUFrc':function(_0x743817,_0xdd75c0){return _0x743817+_0xdd75c0;},'ZXJQd':'\x20on\x20','TNlau':_0x4b6c3b(0x237)+_0x4b6c3b(0x726),'JDpfa':'Multi'+_0x4b6c3b(0xb37),'zatLK':_0x4b6c3b(0xa8b)+_0x4b6c3b(0x7c3)+'so\x20st'+_0x4b6c3b(0xa48)+'is','SbUNt':_0x4b6c3b(0x89a),'eoZqs':_0x4b6c3b(0x1cf),'YmqTY':_0x4b6c3b(0xb54)+'n','tftAv':'Radar','jiSaO':function(_0x3a9322,_0x51941f){return _0x3a9322(_0x51941f);},'BGoDR':_0x4b6c3b(0x644)+'ed','uYIpm':_0x4b6c3b(0xafe)+'-spac'+'e\x20min'+_0x4b6c3b(0x988)+_0x4b6c3b(0x4bd)+'right'+'.\x20Nee'+'ds\x20on'+_0x4b6c3b(0x8c8)+'sitio'+'ns.','IqAEm':function(_0x433dc2,_0x589aeb,_0x1fbc20){return _0x433dc2(_0x589aeb,_0x1fbc20);},'CaLkA':function(_0x11a083,_0x46c180,_0x435f46){return _0x11a083(_0x46c180,_0x435f46);},'EZSDG':_0x4b6c3b(0xa00),'hlCdo':'sk-md'+_0x4b6c3b(0x6d7),'fCnPz':'Field'+'\x20of\x20v'+'iew','SaYYS':_0x4b6c3b(0x61c)+'te','FcmQd':'view:'+'\x20','VvNCN':_0x4b6c3b(0x4a0)+'Look\x20','szIfR':_0x4b6c3b(0x45e)+'era\x20','DEOPQ':'no\x20Mo'+_0x4b6c3b(0x46b)+_0x4b6c3b(0x991)+'t','dJxTd':_0x4b6c3b(0xb44)+'h\x20','QOLao':_0x4b6c3b(0x253)+'\x20','zHbTL':_0x4b6c3b(0x7fb)+'s','SInkP':_0x4b6c3b(0x59c),'NhoXZ':_0x4b6c3b(0x8d2),'dRkon':_0x4b6c3b(0x402)+'ON','aqAep':'appli'+'ed\x20/\x20'+'regis'+_0x4b6c3b(0x978),'bFdgP':_0x4b6c3b(0x66e),'ZsBoa':'\x20MB\x20@'+'\x20','bKNdR':'Enemi'+'es','XGMkF':_0x4b6c3b(0x446)+_0x4b6c3b(0x24b)+'ut\x20yo'+'u','WyyHB':_0x4b6c3b(0x9da)+'he\x20li'+_0x4b6c3b(0x6b0)+_0x4b6c3b(0x19f),'QmAPH':function(_0x277e09,_0x335065){return _0x277e09<_0x335065;},'assNL':_0x4b6c3b(0x268)+'l','dYShc':function(_0x3907a3,_0x4a8972,_0x2b9d06){return _0x3907a3(_0x4a8972,_0x2b9d06);},'tekIp':function(_0x4b5369,_0x3b7eb3,_0x201402){return _0x4b5369(_0x3b7eb3,_0x201402);},'wABKZ':_0x4b6c3b(0x7fd)+'ion','eScZE':'FPSco'+_0x4b6c3b(0x8c2)+_0x4b6c3b(0x550)+'x2E4','fnUPv':_0x4b6c3b(0x37b)+_0x4b6c3b(0x8c2)+_0x4b6c3b(0x5da),'smnnw':function(_0x76f128,_0x1158d6,_0x2abee1,_0x3693ea){return _0x76f128(_0x1158d6,_0x2abee1,_0x3693ea);},'YogkJ':function(_0x89f2f0,_0x157dd5){return _0x89f2f0(_0x157dd5);},'BJNPl':function(_0x17d797,_0x4f5544,_0x514315,_0x4997cd){return _0x17d797(_0x4f5544,_0x514315,_0x4997cd);},'yyqHf':_0x4b6c3b(0x83d)+'e','yTGoQ':'sk-bt'+'n','rozYg':_0x4b6c3b(0x974)+_0x4b6c3b(0x9d2)+_0x4b6c3b(0x639)+_0x4b6c3b(0x9c7)+'rd','Bigku':'QyZco','xccGo':_0x4b6c3b(0x855),'LGiRj':'mn-pa'+'nel','uhfwe':_0x4b6c3b(0x574)+'in','fCdPm':'mn-to'+'p','oUspT':function(_0xe4c1c9,_0x33e5ac,_0x1bf12a,_0x1ae666){return _0xe4c1c9(_0x33e5ac,_0x1bf12a,_0x1ae666);},'otrfm':_0x4b6c3b(0x1ed),'jWNzi':'Sakur'+_0x4b6c3b(0xab2)+_0x4b6c3b(0x67d)+'z','TQMfz':function(_0xe36521,_0x1e975c,_0x168a6a,_0x2f1135){return _0xe36521(_0x1e975c,_0x168a6a,_0x2f1135);},'aAIEv':_0x4b6c3b(0x74a)+'viewB'+'ox=\x220'+'\x200\x2024'+_0x4b6c3b(0x9c1)+'<path'+'\x20d=\x22M'+'6\x206l1'+_0x4b6c3b(0x4cc)+_0x4b6c3b(0x4dc)+'6\x2018\x22'+_0x4b6c3b(0x790)+_0x4b6c3b(0xb1b),'ZlUjj':_0x4b6c3b(0x600)+'ls','cESvD':'mn-ta'+'b','HIedK':'Sakur'+'a\x20Ski'+_0x4b6c3b(0x67d)+'z\x20(In'+'sert)','XoCxi':function(_0xf14363,_0x54b6b7,_0x1b3e67){return _0xf14363(_0x54b6b7,_0x1b3e67);},'zBHwK':function(_0x2fefef,_0xf81381){return _0x2fefef!==_0xf81381;},'fIKoA':_0x4b6c3b(0x93e),'eILAJ':function(_0x1faad0,_0x5a62d0){return _0x1faad0!==_0x5a62d0;},'ZEXhE':'\x20acti'+'ve','UbFkm':_0x4b6c3b(0x9a0)+_0x4b6c3b(0xa47)+'eateP'+'lugin'+'\x20unav'+'ailab'+'le','erEjn':'waiti'+_0x4b6c3b(0x867)+_0x4b6c3b(0x410)+'\x20firs'+_0x4b6c3b(0x210)+'ort…','KESEp':function(_0x389b06,_0x1eaa10){return _0x389b06+_0x1eaa10;},'qYPxq':_0x4b6c3b(0xb4c)+_0x4b6c3b(0x930)+'ntiat'+'e()','OakCG':function(_0x5b04bd,_0x1872c8){return _0x5b04bd+_0x1872c8;},'Tsyrs':function(_0x173119,_0x442901){return _0x173119+_0x442901;},'fVtPB':function(_0x324f19,_0xbc1836){return _0x324f19===_0xbc1836;},'VBBFi':function(_0xd7884a,_0x23996b){return _0xd7884a+_0x23996b;},'WVsxg':function(_0x14f8af,_0x3b2860){return _0x14f8af+_0x3b2860;},'khPId':function(_0x546b19,_0x478b50){return _0x546b19+_0x478b50;},'VPOwS':'+0x29'+'8','YDmRQ':_0x4b6c3b(0x44f)+'h','TaUdM':function(_0x221046,_0x3c8a26,_0x473d04,_0x2b6340){return _0x221046(_0x3c8a26,_0x473d04,_0x2b6340);},'ufiQQ':function(_0x2d7026,_0x41ebdd,_0x3af3d7,_0x27154b){return _0x2d7026(_0x41ebdd,_0x3af3d7,_0x27154b);},'UhdxL':function(_0x2a5d39){return _0x2a5d39();},'Citfu':function(_0x5bd739,_0x240777){return _0x5bd739<_0x240777;},'qYJJF':function(_0x2a95f9,_0x1d27aa){return _0x2a95f9===_0x1d27aa;},'ihUeh':function(_0x4640e4,_0x28b599,_0x4b3f43){return _0x4640e4(_0x28b599,_0x4b3f43);},'YeVgD':function(_0x1b9b2c,_0x40192a){return _0x1b9b2c+_0x40192a;},'JbUYS':_0x4b6c3b(0x2a7)+_0x4b6c3b(0xa17)+'p-lg','VwQLQ':function(_0x5ea91c,_0x351afb){return _0x5ea91c+_0x351afb;},'JdNbN':_0x4b6c3b(0x993)+_0x4b6c3b(0x60f)+_0x4b6c3b(0x998)+_0x4b6c3b(0x98d)+_0x4b6c3b(0xb20)+';top:'+_0x4b6c3b(0x6b3)+_0x4b6c3b(0x839)+_0x4b6c3b(0xaf7)+'47483'+'646;p'+'ointe'+'r-eve'+'nts:n'+'one;','COOsa':'SOmLv','NudFy':_0x4b6c3b(0x2d6)+'s','kAJsM':_0x4b6c3b(0x621)+_0x4b6c3b(0x4d9)+'es','xiHKh':'posit'+_0x4b6c3b(0x60f)+_0x4b6c3b(0x998)+_0x4b6c3b(0x647)+'0;top'+_0x4b6c3b(0x44c)+'index'+_0x4b6c3b(0x52d)+'48364'+_0x4b6c3b(0x732)+_0x4b6c3b(0x31a)+'event'+_0x4b6c3b(0x9e6)+'e;','niPhD':function(_0x5f523a,_0x3835f5){return _0x5f523a===_0x3835f5;},'gHuBn':'QdstN','vDaQk':function(_0x45c73f,_0x16f38a){return _0x45c73f*_0x16f38a;},'SXFXK':function(_0x2d0785,_0x502baf){return _0x2d0785!==_0x502baf;},'PPDvm':function(_0x3aa5a6,_0x17d5a4){return _0x3aa5a6+_0x17d5a4;},'Ybygs':function(_0x1c7e7c,_0x7c13df){return _0x1c7e7c<_0x7c13df;},'qXUlv':function(_0xf2df2e,_0x585594,_0x1f19da,_0x34c110,_0x166eb4){return _0xf2df2e(_0x585594,_0x1f19da,_0x34c110,_0x166eb4);},'BWcln':function(_0x4b99df,_0x5dfae6){return _0x4b99df+_0x5dfae6;},'FuFum':function(_0x718b2a,_0x3a46b5){return _0x718b2a+_0x3a46b5;},'nTfhG':_0x4b6c3b(0x86b)+_0x4b6c3b(0x349)+_0x4b6c3b(0x9fc)+'6,.95'+')','LbHzT':function(_0x2932bd,_0x2d8e7c){return _0x2932bd/_0x2d8e7c;},'cJNvK':function(_0x5262f0,_0x2682b6){return _0x5262f0-_0x2682b6;},'kCPJW':function(_0x23bad9,_0x5711a0){return _0x23bad9(_0x5711a0);},'LZdcX':function(_0x15d25f,_0x28910f){return _0x15d25f(_0x28910f);},'gVkXq':'--p','FvOsY':_0x4b6c3b(0x473),'iNKUU':function(_0x5e2f4e){return _0x5e2f4e();},'rZPoL':function(_0x2fb592,_0x2975e5){return _0x2fb592-_0x2975e5;},'LqvFd':'irZeE','JXQTs':_0x4b6c3b(0x47f),'iFDRv':function(_0x491ceb,_0x41cce4){return _0x491ceb-_0x41cce4;},'TUJpH':function(_0x30d740,_0x90d249){return _0x30d740-_0x90d249;},'IUepn':function(_0x3d841d,_0x69ea9e){return _0x3d841d+_0x69ea9e;},'UrTMr':function(_0x29beac,_0x294706){return _0x29beac!==_0x294706;},'ELgUS':'#4f8f'+'6a','UIPTv':function(_0x31775a,_0x548185){return _0x31775a*_0x548185;},'NQvjW':function(_0x1c9681,_0x2d4113){return _0x1c9681*_0x2d4113;},'qZDeZ':_0x4b6c3b(0x5d0),'ztRgS':_0x4b6c3b(0x96f),'EOyfF':'\x20·\x20te'+'am','XOETb':function(_0x33dbc1,_0x2f78d9){return _0x33dbc1(_0x2f78d9);},'XYtPg':_0x4b6c3b(0x9a8),'ddqfb':function(_0x368a52,_0x6dc0e2,_0x4fa8ce){return _0x368a52(_0x6dc0e2,_0x4fa8ce);},'FzRcI':_0x4b6c3b(0x4b7)+_0x4b6c3b(0x933)+_0x4b6c3b(0x5e3)+'|8','nEbzL':_0x4b6c3b(0x377),'NVNek':_0x4b6c3b(0x406),'ignqg':function(_0x245db8,_0x509dd1){return _0x245db8(_0x509dd1);},'FAKIq':function(_0x33eaf1,_0x21bab9){return _0x33eaf1===_0x21bab9;},'cGvPR':_0x4b6c3b(0x5fa),'MkePr':function(_0x5636b7,_0x344c27){return _0x5636b7+_0x344c27;},'trPml':_0x4b6c3b(0x1f9)+'red\x20','Omois':'\x20obje'+_0x4b6c3b(0x292)+_0x4b6c3b(0x3a6)+_0x4b6c3b(0x490)+'0\x20fie'+'lds.\x20','DhIXG':'Reaso'+'n:\x20','iYaxc':function(_0x39d7b6,_0x2dfd10){return _0x39d7b6+_0x2dfd10;},'lBsNI':'again'+_0x4b6c3b(0x2f8)+'diffe'+_0x4b6c3b(0x4b9)+_0x4b6c3b(0x9a0)+_0x4b6c3b(0x5f5)+_0x4b6c3b(0x298)+_0x4b6c3b(0x5c5)+_0x4b6c3b(0xa22)+_0x4b6c3b(0x64b)+_0x4b6c3b(0x547)+_0x4b6c3b(0x43d)+'oses.','syeEZ':_0x4b6c3b(0x428),'gDHKf':'DKUME','ayTlH':function(_0x5973de,_0x84000d){return _0x5973de+_0x84000d;},'wlups':_0x4b6c3b(0x28f)+'ok\x20fi'+'red\x20a'+'t\x20','CVkrP':'\x20and\x20'+_0x4b6c3b(0x5fc)+'resol'+'ved=','VyxAX':_0x4b6c3b(0xb05)+_0x4b6c3b(0x4e8)+'refer'+_0x4b6c3b(0x820)+_0x4b6c3b(0xb10)+_0x4b6c3b(0x76d)+_0x4b6c3b(0xaa2)+_0x4b6c3b(0x3ea)+'not\x20r'+'eacha'+'ble\x20n'+'ow.','WPHbB':function(_0x22c0e8,_0x1889cf){return _0x22c0e8+_0x1889cf;},'kjspa':_0x4b6c3b(0xaac)+'\x20inst'+_0x4b6c3b(0x69c)+_0x4b6c3b(0x6ee)+_0x4b6c3b(0x45c)+'ed\x20ye'+_0x4b6c3b(0x828)+_0x4b6c3b(0x818)+'\x20','ydgvD':').\x20','QbJai':'Heap\x20'+_0x4b6c3b(0x75e)+'\x20stay'+_0x4b6c3b(0xb2f)+'ked\x20u'+'ntil\x20'+'a\x20gam'+'e\x20obj'+'ect\x20w'+'ith\x20M'+_0x4b6c3b(0x54e)+_0x4b6c3b(0x9f7)+_0x4b6c3b(0x531)+_0x4b6c3b(0x94c)+_0x4b6c3b(0x3ed)+'.','DYPwZ':function(_0x109e0f,_0xa23e0f){return _0x109e0f===_0xa23e0f;},'REnfp':'TKgSI','oKQMr':function(_0x2f3391,_0x2b1943){return _0x2f3391+_0x2b1943;},'hawBV':_0x4b6c3b(0x9ca),'ZAsbB':_0x4b6c3b(0x893)+_0x4b6c3b(0x878)+_0x4b6c3b(0x33d)+'n\x20SEE'+_0x4b6c3b(0x73b)+'UWMK.'+'\x20The\x20'+_0x4b6c3b(0x5d9)+_0x4b6c3b(0x590)+'\x20','RevQz':_0x4b6c3b(0xb17)+_0x4b6c3b(0x79a)+_0x4b6c3b(0x3b4)+'not\x20i'+_0x4b6c3b(0x767)+_0x4b6c3b(0x564)+_0x4b6c3b(0x561)+'he\x20ho'+_0x4b6c3b(0x653)+_0x4b6c3b(0x8bb)+'he\x20wr'+'ong\x20o'+'verlo'+_0x4b6c3b(0xb45),'retxg':function(_0x381b1d,_0x527a66){return _0x381b1d!==_0x527a66;},'Ticze':_0x4b6c3b(0x4a5)+_0x4b6c3b(0x4f0),'PECLm':function(_0xe87057,_0x963217,_0x3e4076){return _0xe87057(_0x963217,_0x3e4076);},'zFONu':_0x4b6c3b(0x7dc)+'t','LOudh':_0x4b6c3b(0x893)+_0x4b6c3b(0x1de)+_0x4b6c3b(0x312)+'able\x20'+_0x4b6c3b(0x19e)+_0x4b6c3b(0x3a6)+_0x4b6c3b(0x6bd)+_0x4b6c3b(0x900)+'ne.\x20T'+'he\x20si'+_0x4b6c3b(0x202)+'re\x20','dvaIC':_0x4b6c3b(0x1c7)+_0x4b6c3b(0x283)+_0x4b6c3b(0x829)+_0x4b6c3b(0x3a5)+_0x4b6c3b(0x55d)+_0x4b6c3b(0x814)+'es\x20no'+_0x4b6c3b(0x844)+_0x4b6c3b(0xb3d)+'is\x20bu'+'ild.','vwzke':function(_0x9b10b4,_0xd3374a){return _0x9b10b4-_0xd3374a;},'AToxk':'SVkHZ','IzdQd':'Kzcuu','YlLIw':function(_0x405c01,_0x16e2f6){return _0x405c01!==_0x16e2f6;},'BPZFy':_0x4b6c3b(0x27d),'lmhEz':'fOUNh','aLnQb':function(_0x2ec4c1,_0x5a82e6,_0x1b43fd){return _0x2ec4c1(_0x5a82e6,_0x1b43fd);},'jXASp':function(_0x13fe85,_0x143c5b){return _0x13fe85(_0x143c5b);},'VWXvj':'xVnlf','CHChR':_0x4b6c3b(0x53a)+'l','crHAw':_0x4b6c3b(0x244)+'KURA-'+_0x4b6c3b(0x6f3)+'WARZ-'+_0x4b6c3b(0x512)+'=','EMlbX':'%c[sa'+_0x4b6c3b(0x8ba)+'\x20SW-W'+_0x4b6c3b(0x4b4)+'R\x20ACT'+'IVE\x20('+'relay'+_0x4b6c3b(0x7a7)+'own)','cUSBS':_0x4b6c3b(0x7c8)+'kura]'+'\x20PORT'+'AL\x20AC'+_0x4b6c3b(0x43e),'bHqng':function(_0x59bb97,_0x226bf7){return _0x59bb97+_0x226bf7;},'JPRYY':_0x4b6c3b(0x923)+_0x4b6c3b(0x3d8)+'ht:70'+'0','BOzDk':'messa'+'ge','BPSZR':function(_0x55514e,_0x5e84d8){return _0x55514e+_0x5e84d8;},'fIHZb':_0x4b6c3b(0x7c8)+_0x4b6c3b(0x8ba)+_0x4b6c3b(0x917)+'LAYER'+_0x4b6c3b(0xb30)+_0x4b6c3b(0x81c),'vuvkh':function(_0x51422a,_0xb6e81e){return _0x51422a+_0xb6e81e;},'eVRpL':function(_0x1b35fe,_0x3cdf17){return _0x1b35fe+_0x3cdf17;},'mBITc':_0x4b6c3b(0x923)+_0x4b6c3b(0x3d8)+_0x4b6c3b(0x81b)+_0x4b6c3b(0x2e7)+_0x4b6c3b(0x851)+_0x4b6c3b(0xa9c)+'x','ibBbI':_0x4b6c3b(0x621)+_0x4b6c3b(0xa06),'RKLvG':_0x4b6c3b(0x63e)+_0x4b6c3b(0x91d)+_0x4b6c3b(0x736),'dVGTJ':'NPC_C'+'otrol'+_0x4b6c3b(0x5da),'pNpIr':'Assem'+'bly-C'+'Sharp'+_0x4b6c3b(0xb33)+'tpass'+'.dll','xtLWf':_0x4b6c3b(0x238)+_0x4b6c3b(0x91f),'UCVVx':'Scivo'+_0x4b6c3b(0x37f)+_0x4b6c3b(0xb07)+_0x4b6c3b(0x48a)+_0x4b6c3b(0x6d9)+'r.dll','YzFOw':_0x4b6c3b(0x972),'aRlkB':'healt'+'h','Ltodw':'0x24','shAjH':_0x4b6c3b(0x7f4)+'le','pvXii':'team','HKVDN':_0x4b6c3b(0xb00)+_0x4b6c3b(0x348),'EbjXQ':_0x4b6c3b(0x8b5),'qfmxH':_0x4b6c3b(0x9c5),'wbrXz':'CMB','vXckN':'visua'+'ls','pqrfw':'LOG','ARUdG':function(_0x54f9c7,_0x3b2731){return _0x54f9c7+_0x3b2731;},'AIObH':function(_0x5bb7a9,_0x32fa8f){return _0x5bb7a9+_0x32fa8f;},'Aizdg':function(_0x420c86,_0x4635f1){return _0x420c86+_0x4635f1;},'Ihrsn':function(_0x3f1780,_0x206b18){return _0x3f1780+_0x206b18;},'GJJpx':function(_0x3ca564,_0x318f7b){return _0x3ca564+_0x318f7b;},'IlRyM':function(_0xe93ae3,_0x417176){return _0xe93ae3+_0x417176;},'dTiGs':function(_0x5e85ec,_0x4f8a1a){return _0x5e85ec+_0x4f8a1a;},'tPHQi':function(_0x54f29b,_0x174826){return _0x54f29b+_0x174826;},'pTSvl':function(_0x2fcf44,_0x373bdb){return _0x2fcf44+_0x373bdb;},'TAEQy':function(_0x2d4478,_0x11278e){return _0x2d4478+_0x11278e;},'Tbwzr':function(_0x118723,_0x14cd07){return _0x118723+_0x14cd07;},'JeVRa':function(_0x1d5b4e,_0x2fbaa9){return _0x1d5b4e+_0x2fbaa9;},'AYJzQ':_0x4b6c3b(0x2a7)+_0x4b6c3b(0x2a9)+'nu-ro'+_0x4b6c3b(0xab8)+'-pane'+_0x4b6c3b(0x885)+'ition'+_0x4b6c3b(0x51b)+'d;rig'+_0x4b6c3b(0xabd)+_0x4b6c3b(0xaa5)+'ttom:'+'24px;'+_0x4b6c3b(0x541)+_0x4b6c3b(0x25b)+_0x4b6c3b(0x9b9)+_0x4b6c3b(0x75a)+_0x4b6c3b(0xa46)+_0x4b6c3b(0x7ee)+'8px))'+_0x4b6c3b(0xaa3)+_0x4b6c3b(0x39f)+_0x4b6c3b(0x68c)+_0x4b6c3b(0x7ec)+_0x4b6c3b(0x1ba)+'c(100'+'vh\x20-\x20'+'48px)'+');','BTwGr':_0x4b6c3b(0x5d6)+_0x4b6c3b(0x5ec)+':rgba'+_0x4b6c3b(0x276)+'7,21,'+'.82);'+'backd'+'rop-f'+'ilter'+':blur'+'(22px'+_0x4b6c3b(0x500)+'urate'+'(150%'+_0x4b6c3b(0x82e)+'bkit-'+'backd'+'rop-f'+_0x4b6c3b(0x918)+_0x4b6c3b(0x75c)+'(22px'+')\x20sat'+_0x4b6c3b(0x6ea)+_0x4b6c3b(0x961)+');','beAUI':_0x4b6c3b(0x84d)+_0x4b6c3b(0x1b8)+_0x4b6c3b(0x4aa)+_0x4b6c3b(0x731)+'\x20rgba'+_0x4b6c3b(0x4ee)+'255,2'+_0x4b6c3b(0x951)+_0x4b6c3b(0x65c)+'set\x200'+_0x4b6c3b(0x4e2)+_0x4b6c3b(0x90b)+'a(255'+',255,'+_0x4b6c3b(0x99f)+_0x4b6c3b(0x8f6)+_0x4b6c3b(0x222)+_0x4b6c3b(0x6c9)+_0x4b6c3b(0x387)+_0x4b6c3b(0x35e)+'0,.55'+');','MdDCO':_0x4b6c3b(0x8bc)+_0x4b6c3b(0x4a7)+_0x4b6c3b(0x7ac)+'ont-s'+'ize:1'+'3px;f'+'ont-f'+_0x4b6c3b(0x7d6)+_0x4b6c3b(0x95f)+_0x4b6c3b(0x32f)+_0x4b6c3b(0xa7b)+_0x4b6c3b(0xad6)+_0x4b6c3b(0x5c7)+_0x4b6c3b(0x7a2)+'sans-'+_0x4b6c3b(0x99d)+';}','XDlpE':'.mn-s'+_0x4b6c3b(0x949)+_0x4b6c3b(0x453)+'y:fle'+_0x4b6c3b(0x5ff)+_0x4b6c3b(0x939)+_0x4b6c3b(0x68a)+_0x4b6c3b(0x6bc)+_0x4b6c3b(0x8cf)+_0x4b6c3b(0xb15)+_0x4b6c3b(0x6bb)+_0x4b6c3b(0x380)+'er;ga'+'p:4px'+';widt'+'h:62p'+'x;fle'+_0x4b6c3b(0x5b5)+_0x4b6c3b(0x1df)+'ding:'+_0x4b6c3b(0x609)+'0;','iLjFI':'borde'+_0x4b6c3b(0x648)+'ius:1'+_0x4b6c3b(0xa89)+_0x4b6c3b(0x366)+_0x4b6c3b(0x785)+'rgba('+_0x4b6c3b(0xad8)+_0x4b6c3b(0x31e)+_0x4b6c3b(0x78b)+_0x4b6c3b(0x679)+_0x4b6c3b(0x8d1)+'dow:i'+_0x4b6c3b(0x9d6)+_0x4b6c3b(0x3df)+_0x4b6c3b(0x4e2)+_0x4b6c3b(0x86b)+_0x4b6c3b(0xad8)+_0x4b6c3b(0x31e)+_0x4b6c3b(0x969)+');}','UPPDk':'.mn-l'+_0x4b6c3b(0x3d2)+_0x4b6c3b(0xa96)+_0x4b6c3b(0x9f3)+_0x4b6c3b(0x74f)+_0x4b6c3b(0x755)+_0x4b6c3b(0x5a8)+_0x4b6c3b(0x5e4)+'flow:'+_0x4b6c3b(0x739)+'le;fi'+_0x4b6c3b(0x3dd)+_0x4b6c3b(0x946)+_0x4b6c3b(0x4d5)+'w(0\x200'+_0x4b6c3b(0x598)+'rgba('+_0x4b6c3b(0x349)+'07,15'+_0x4b6c3b(0x2ca)+');}','ZSPSC':'.mn-t'+_0x4b6c3b(0x44b)+'splay'+_0x4b6c3b(0x399)+';alig'+_0x4b6c3b(0x944)+_0x4b6c3b(0x29d)+'nter;'+_0x4b6c3b(0x540)+_0x4b6c3b(0x86e)+_0x4b6c3b(0x2b9)+':cent'+_0x4b6c3b(0x93a)+_0x4b6c3b(0x610)+_0x4b6c3b(0x940)+_0x4b6c3b(0x755)+_0x4b6c3b(0x4c9)+_0x4b6c3b(0xaa0)+_0x4b6c3b(0x905)+_0x4b6c3b(0x957)+'r-rad'+'ius:1'+'0px;','KSQTv':_0x4b6c3b(0x5d6)+'round'+_0x4b6c3b(0xb5d)+'spare'+'nt;co'+'lor:r'+_0x4b6c3b(0xb4a)+_0x4b6c3b(0xa2a)+_0x4b6c3b(0x34d)+_0x4b6c3b(0x499)+_0x4b6c3b(0x1fe)+_0x4b6c3b(0x395)+_0x4b6c3b(0x59d)+'font-'+'size:'+'10px;'+'font-'+_0x4b6c3b(0x642)+'t:700'+_0x4b6c3b(0x923)+'-fami'+_0x4b6c3b(0x327)+'herit'+';}','WjhSc':_0x4b6c3b(0x89b)+_0x4b6c3b(0x3d3)+'ver{c'+_0x4b6c3b(0x895)+'rgba('+_0x4b6c3b(0x1b4)+'38,24'+'2,.8)'+';}','Gepez':_0x4b6c3b(0x83c)+_0x4b6c3b(0x61e)+'lex:1'+_0x4b6c3b(0x414)+_0x4b6c3b(0x541)+':0;di'+_0x4b6c3b(0x737)+_0x4b6c3b(0x399)+';flex'+_0x4b6c3b(0x543)+'ction'+_0x4b6c3b(0x5bc)+'mn;}','apkkV':_0x4b6c3b(0x3fc)+_0x4b6c3b(0x7d0)+'-size'+_0x4b6c3b(0x3fa)+_0x4b6c3b(0x923)+_0x4b6c3b(0x3d8)+_0x4b6c3b(0x909)+'0;}','heUaS':_0x4b6c3b(0x815)+_0x4b6c3b(0x5b3)+_0x4b6c3b(0x95c)+'it-sc'+_0x4b6c3b(0x1a1)+_0x4b6c3b(0x514)+'dth:8'+_0x4b6c3b(0x4ea),'eBpmA':'.sk-c'+'ard{b'+'order'+'-radi'+'us:12'+_0x4b6c3b(0x7cd)+'ckgro'+_0x4b6c3b(0x452)+_0x4b6c3b(0xb4a)+_0x4b6c3b(0x31e)+_0x4b6c3b(0x872)+_0x4b6c3b(0x508)+');box'+_0x4b6c3b(0x383)+'ow:in'+_0x4b6c3b(0x98b)+_0x4b6c3b(0x7d8)+'1px\x20r'+_0x4b6c3b(0xb4a)+_0x4b6c3b(0x31e)+_0x4b6c3b(0x872)+_0x4b6c3b(0xa71)+';}','RkzIx':_0x4b6c3b(0x668)+_0x4b6c3b(0x984)+_0x4b6c3b(0x753)+_0x4b6c3b(0x592)+'nd:rg'+_0x4b6c3b(0x509)+_0x4b6c3b(0x872)+_0x4b6c3b(0x5e6)+'.04);'+_0x4b6c3b(0x84d)+'hadow'+':inse'+'t\x200\x200'+_0x4b6c3b(0x55f)+_0x4b6c3b(0x8ca)+_0x4b6c3b(0x1ac)+',107,'+_0x4b6c3b(0xa2b)+_0x4b6c3b(0xa1e),'mYBDR':'.sk-c'+'ard-t'+'itle{'+_0x4b6c3b(0x2a8)+'1;min'+'-widt'+_0x4b6c3b(0xb3a),'wZuAg':_0x4b6c3b(0x5d6)+_0x4b6c3b(0x5ec)+_0x4b6c3b(0x85f)+_0x4b6c3b(0x4ee)+'255,2'+_0x4b6c3b(0x447)+'5);tr'+'ansit'+_0x4b6c3b(0x887)+_0x4b6c3b(0x722)+_0x4b6c3b(0xa04)+'ckgro'+'und\x20.'+_0x4b6c3b(0x397),'gkKzk':'.sk-s'+_0x4b6c3b(0x246)+'[aria'+_0x4b6c3b(0x4d6)+'ked=\x22'+'true\x22'+_0x4b6c3b(0x8be)+'ter{l'+_0x4b6c3b(0x6fa)+'5px;b'+'ackgr'+'ound:'+_0x4b6c3b(0xa78)+'9d;}','ruMdk':_0x4b6c3b(0x29a)+_0x4b6c3b(0xadd)+_0x4b6c3b(0x2c4)+_0x4b6c3b(0x98c)+_0x4b6c3b(0x4cd)+'olor:'+_0x4b6c3b(0x86b)+'246,2'+_0x4b6c3b(0x9b7)+_0x4b6c3b(0x948)+_0x4b6c3b(0xaf2)+_0x4b6c3b(0x71e)+_0x4b6c3b(0xb52)+_0x4b6c3b(0xb1c)+_0x4b6c3b(0x480)+'e:pre'+'-wrap'+';}','QoCJS':_0x4b6c3b(0xb62)+'tn{al'+_0x4b6c3b(0xadf)+_0x4b6c3b(0x94f)+'lex-s'+'tart;'+_0x4b6c3b(0x957)+_0x4b6c3b(0x87c)+_0x4b6c3b(0x8bd)+'-radi'+_0x4b6c3b(0x650)+_0x4b6c3b(0x412)+'ding:'+_0x4b6c3b(0x553)+_0x4b6c3b(0xa89)+'ackgr'+_0x4b6c3b(0x785)+_0x4b6c3b(0xa78)+'9d;co'+'lor:#'+_0x4b6c3b(0x8b3),'BLhof':_0x4b6c3b(0xb62)+_0x4b6c3b(0x36d)+'ver{f'+'ilter'+_0x4b6c3b(0xb41)+'htnes'+'s(1.1'+');}','KIzxE':function(_0x49b6b0,_0x44a125){return _0x49b6b0+_0x44a125;},'EMkZL':_0x4b6c3b(0x74a)+'class'+_0x4b6c3b(0x53c)+_0x4b6c3b(0x2a2)+_0x4b6c3b(0x6f7)+_0x4b6c3b(0x798)+'ox=\x220'+_0x4b6c3b(0x2d7)+_0x4b6c3b(0x9c1)+'<path'+_0x4b6c3b(0x980)+'12\x2021'+'c-1.5'+'-2.5-'+'4-4.5'+_0x4b6c3b(0x235)+_0x4b6c3b(0x31b)+_0x4b6c3b(0x764)+'8-4.5'+_0x4b6c3b(0x26a)+_0x4b6c3b(0x4a2)+'\x204\x204.'+_0x4b6c3b(0x7e2)+_0x4b6c3b(0xa1d)+_0x4b6c3b(0x416)+_0x4b6c3b(0x965),'AVqfc':function(_0x4d380a){return _0x4d380a();},'CMcSE':_0x4b6c3b(0x741)+'ntent'+'Loade'+'d','zaXVo':function(_0x4f859f,_0xd0def4){return _0x4f859f!==_0xd0def4;},'BMioD':'yvSzy'};var _0x3a4971=location[_0x4b6c3b(0x8bf)+_0x4b6c3b(0x476)]||'',_0x2bdff0=/(^|\.)www\.crazygames\.com$/[_0x4b6c3b(0x9c3)](_0x3a4971),_0x19b7d5=/(^|\.)games\.crazygames\.com$/[_0x4b6c3b(0x9c3)](_0x3a4971),_0x4c0ede=/(^|\.)crazygames\.com$/[_0x4b6c3b(0x9c3)](_0x3a4971)&&!_0x2bdff0&&!_0x19b7d5,_0x501c58=_0x2bdff0?_0x220211[_0x4b6c3b(0x6a7)]:_0x19b7d5?_0x4b6c3b(0xac8)+'er':'playe'+'r';if(!_0x2bdff0&&!_0x19b7d5&&!_0x4c0ede)return;var _0x563cd7='#ff8f'+'b1',_0xa1b757=_0x4b6c3b(0x1e6)+_0x4b6c3b(0x296)+_0x4b6c3b(0x7e9),_0x15d915=_0x4b6c3b(0x244)+_0x4b6c3b(0x9b4)+_0x4b6c3b(0x6f3)+'WARZ-'+_0x4b6c3b(0x68b)+'===',_0x323bbd=_0x220211['crHAw'],_0x596a6f='2.9.2';if(_0x19b7d5){window[_0x4b6c3b(0x746)+'entLi'+'stene'+'r'](_0x4b6c3b(0x4b5)+'ge',function(_0x23d671){var _0x526c07=_0x4b6c3b,_0x29bd07={'APvXu':_0x526c07(0x621)+_0x526c07(0x83a)+'u-css'},_0x487190=_0x23d671['data'];if(!_0x487190||_0x487190['__sak'+'ura']!==_0xa1b757)return;try{if(_0x526c07(0x220)!==_0x220211['pExDr']){if(window[_0x526c07(0x676)+'t']&&window['paren'+'t']!==window)window[_0x526c07(0x676)+'t'][_0x526c07(0x5ea)+_0x526c07(0x904)+'e'](_0x487190,'*');if(window[_0x526c07(0x403)]&&window[_0x526c07(0x403)]!==window)window['top'][_0x526c07(0x5ea)+'essag'+'e'](_0x487190,'*');}else _0x165a05[_0x526c07(0x3d4)+'onten'+'t']=_0x5aff41[_0x526c07(0x62c)+_0x526c07(0x64f)](_0x2c808a,null,0xce4+0x1f45+-0x2c28);}catch(_0x28ccda){}if(_0x487190&&_0x220211[_0x526c07(0x3a4)](_0x487190[_0x526c07(0x27b)],_0x220211['GFBYu'])){if('KepeF'!==_0x526c07(0xa97)){var _0x24bb96=_0x1dbf70[_0x526c07(0x769)+_0x526c07(0x41c)+'ent'](_0x526c07(0x855));_0x24bb96['id']=_0x29bd07['APvXu'],_0x24bb96[_0x526c07(0x3d4)+_0x526c07(0x830)+'t']=_0x1385de,(_0x1128b9[_0x526c07(0x750)]||_0x57cde4['docum'+_0x526c07(0x92e)+_0x526c07(0x6e7)])['appen'+_0x526c07(0x249)+'d'](_0x24bb96);}else try{var _0x3c26d9=document[_0x526c07(0x797)+_0x526c07(0x2c6)+_0x526c07(0xb18)+'l'](_0x220211[_0x526c07(0x7ce)]);for(var _0x48f748=0x143b+-0xcc*0x2b+0xe09;_0x48f748<_0x3c26d9[_0x526c07(0x3f7)+'h'];_0x48f748++){try{if(_0x3c26d9[_0x48f748][_0x526c07(0x279)+_0x526c07(0x2e8)+_0x526c07(0x635)])_0x3c26d9[_0x48f748]['conte'+'ntWin'+'dow']['postM'+'essag'+'e'](_0x487190,'*');}catch(_0x4c111a){}}}catch(_0x41c22c){}}}),console['log'](_0x220211['EMlbX'],_0x4b6c3b(0x8bc)+':'+_0x563cd7);return;}if(_0x2bdff0){console['log'](_0x220211['cUSBS'],_0x220211[_0x4b6c3b(0x3cd)]('color'+':'+_0x563cd7,_0x220211['JPRYY']),{'host':_0x3a4971});var _0x5908ca={'set':function(){},'command':function(){}};function _0x5445e0(_0x4c8d4f,_0xb9d46a){var _0x56fbd6=_0x4b6c3b,_0x1be8c2={'__sakura':_0xa1b757,'kind':_0x56fbd6(0x6c5),'cmd':_0x4c8d4f,'arg':_0xb9d46a};try{if('KjGKp'===_0x56fbd6(0x7f1)){var _0x46e26a=document['query'+_0x56fbd6(0x2c6)+_0x56fbd6(0xb18)+'l']('ifram'+'e');for(var _0x2be818=-0x1de2+-0x1*0x17f5+0xb3*0x4d;_0x220211[_0x56fbd6(0x457)](_0x2be818,_0x46e26a[_0x56fbd6(0x3f7)+'h']);_0x2be818++){try{if(_0x46e26a[_0x2be818]['conte'+_0x56fbd6(0x2e8)+_0x56fbd6(0x635)])_0x46e26a[_0x2be818][_0x56fbd6(0x279)+'ntWin'+_0x56fbd6(0x635)]['postM'+'essag'+'e'](_0x1be8c2,'*');}catch(_0x40b541){}}}else{var _0x4e3da4=_0x4b5669[_0x56fbd6(0x769)+_0x56fbd6(0x41c)+_0x56fbd6(0x3ff)](_0x56fbd6(0x855));_0x4e3da4['id']='sakur'+'a-sw-'+_0x56fbd6(0x1f1)+'ss',_0x4e3da4[_0x56fbd6(0x3d4)+'onten'+'t']=_0x220211['sSpfi'],(_0x3f29cb[_0x56fbd6(0x750)]||_0x11818a['docum'+'entEl'+_0x56fbd6(0x6e7)])[_0x56fbd6(0xac1)+_0x56fbd6(0x249)+'d'](_0x4e3da4);}}catch(_0x28f24a){}try{var _0x106d4b=new BroadcastChannel('sakur'+_0x56fbd6(0xa06));_0x106d4b[_0x56fbd6(0x5ea)+_0x56fbd6(0x904)+'e'](_0x1be8c2),_0x220211[_0x56fbd6(0x1fc)](setTimeout,function(){var _0x9cb797=_0x56fbd6;try{_0x220211['wZQIj'](_0x220211[_0x9cb797(0x6d5)],_0x220211[_0x9cb797(0x6d5)])?_0x30665f[_0x9cb797(0xaca)+'ngs'][_0x9cb797(0x793)](_0x9cb797(0x576)+_0x9cb797(0xa64)+_0x9cb797(0x877)+'Modki'+'t.Val'+'ueWra'+'pper\x20'+_0x9cb797(0x408)+_0x9cb797(0x3b3)+_0x9cb797(0x7ba)+_0x9cb797(0x90e)+_0x9cb797(0x751)+_0x9cb797(0x43c)+_0x9cb797(0x50c)+_0x9cb797(0x3c5)):_0x106d4b['close']();}catch(_0xecb2e3){}},-0x120d*-0x1+0x2076+-0x3189);}catch(_0x244e95){}}var _0x472d16='sakur'+'a-sw-'+'panel'+'-hidd'+'en';function _0x2d1e9a(){var _0x257103=_0x4b6c3b;try{return _0x220211['FMkpL'](localStorage[_0x257103(0x4be)+'em'](_0x472d16),'1');}catch(_0xf1ce96){return![];}}function _0x299fde(_0x10d230){var _0x4ffb23=_0x4b6c3b,_0x5224da={'iCZBr':function(_0x87c180){var _0x4635e4=_0x3979;return _0x220211[_0x4635e4(0xa51)](_0x87c180);}};if(_0x220211['DcXvk']===_0x220211['NmWhs']){_0x23db59[_0x4a3fb2]='0x'+_0x6a5166[_0x2da25a]['ptr']['toStr'+'ing'](0x8b5+0x1ffb+-0x14*0x208);if(_0xdd57d0[_0x4fcd99]['repla'+'ced'])_0x418e61['push'](_0x565345);}else{try{_0x10d230?localStorage[_0x4ffb23(0x243)+'em'](_0x472d16,'1'):localStorage[_0x4ffb23(0x454)+'eItem'](_0x472d16);}catch(_0x53878e){}try{var _0x47bda3=document[_0x4ffb23(0x4e7)+'ement'+_0x4ffb23(0x41f)]('sakur'+'a-sw-'+'v2');if(_0x47bda3)_0x47bda3['remov'+'e']();}catch(_0x51963d){}try{if(_0x220211[_0x4ffb23(0x3a4)]('PRxpK','hKeMB')){var _0x237951=_0xe8bd8f[_0x4ffb23(0x4e7)+_0x4ffb23(0x6e7)+'ById']('sakur'+'a-sw-'+'v2');if(_0x237951)_0x237951['remov'+'e']();}else{var _0xfb6822=document['getEl'+'ement'+_0x4ffb23(0x41f)](_0x220211[_0x4ffb23(0x843)]);if(_0x10d230&&!_0xfb6822&&document[_0x4ffb23(0x60e)]){if(_0x220211[_0x4ffb23(0x3a4)](_0x4ffb23(0x53b),_0x220211[_0x4ffb23(0x9b2)])){var _0x595b74=document[_0x4ffb23(0x769)+_0x4ffb23(0x41c)+'ent'](_0x220211[_0x4ffb23(0xa2d)]);_0x595b74['id']=_0x4ffb23(0x621)+'a-sw-'+'v2-ta'+'b',_0x595b74['style'][_0x4ffb23(0x7ef)+'xt']=_0x220211['KdFMh'](_0x220211[_0x4ffb23(0x594)](_0x4ffb23(0x993)+_0x4ffb23(0x60f)+_0x4ffb23(0x998)+_0x4ffb23(0x647)+_0x4ffb23(0x9a6)+_0x4ffb23(0x1d6)+'2px;z'+_0x4ffb23(0x4a3)+'x:214'+_0x4ffb23(0x95b)+_0x4ffb23(0xb29)+_0x4ffb23(0x556)+_0x4ffb23(0xa16)+'er;us'+'er-se'+'lect:'+'none;',_0x4ffb23(0x5d6)+'round'+_0x4ffb23(0x85f)+'(21,1'+_0x4ffb23(0x3a1)+'.9);b'+_0x4ffb23(0x8bd)+':1px\x20'+_0x4ffb23(0x20c)+_0x4ffb23(0x387)+'(255,'+'143,1'+'77,.5'+');col'+_0x4ffb23(0xab7))+_0x563cd7+';',_0x4ffb23(0x957)+'r-rad'+_0x4ffb23(0xade)+_0x4ffb23(0x8ee)+'paddi'+_0x4ffb23(0xa44)+'x\x2012p'+'x;fon'+'t:11p'+_0x4ffb23(0x481)+'\x20ui-m'+_0x4ffb23(0xaea)+_0x4ffb23(0x5cb)+'onsol'+'as,mo'+_0x4ffb23(0x4c0)+_0x4ffb23(0xb1e)),_0x595b74['textC'+_0x4ffb23(0x830)+'t']=_0x220211[_0x4ffb23(0x2b7)],_0x595b74['oncli'+'ck']=function(){var _0x2627d4=_0x4ffb23;_0x299fde(![]),_0x5224da[_0x2627d4(0x6f1)](_0x3f6d4d);},document[_0x4ffb23(0x60e)][_0x4ffb23(0xac1)+_0x4ffb23(0x249)+'d'](_0x595b74);}else _0x57671b(![]),_0x37ed5c();}else!_0x10d230&&_0xfb6822&&_0xfb6822[_0x4ffb23(0x454)+'e']();}}catch(_0x1beee0){}}}function _0x2769c1(){var _0x31cb36=_0x4b6c3b;if(_0x2d1e9a())return null;var _0x239c36=document[_0x31cb36(0x4e7)+'ement'+_0x31cb36(0x41f)](_0x220211[_0x31cb36(0x4c7)]);if(_0x239c36)return _0x239c36;if(!document['body']||!document[_0x31cb36(0x60e)][_0x31cb36(0xac1)+_0x31cb36(0x249)+'d'])return null;try{var _0x5f1a20=(_0x31cb36(0xb0d)+_0x31cb36(0x774))['split']('|'),_0x33bd2a=-0x1*0x1f1e+-0x297*0xb+-0x3b9b*-0x1;while(!![]){switch(_0x5f1a20[_0x33bd2a++]){case'0':document[_0x31cb36(0x60e)][_0x31cb36(0xac1)+_0x31cb36(0x249)+'d'](_0x239c36);continue;case'1':_0x239c36['id']='sakur'+'a-sw-'+'v2';continue;case'2':if(!document['getEl'+_0x31cb36(0x6e7)+_0x31cb36(0x41f)]('sakur'+'a-sw-'+_0x31cb36(0x63c)+'s')){var _0x4d2377=document[_0x31cb36(0x769)+_0x31cb36(0x41c)+_0x31cb36(0x3ff)](_0x31cb36(0x855));_0x4d2377['id']='sakur'+_0x31cb36(0x875)+'v2-cs'+'s',_0x4d2377['textC'+'onten'+'t']=_0x220211['XGrnf'],(document[_0x31cb36(0x750)]||document['docum'+_0x31cb36(0x92e)+'ement'])[_0x31cb36(0xac1)+'dChil'+'d'](_0x4d2377);}continue;case'3':_0x239c36=document['creat'+'eElem'+'ent'](_0x31cb36(0x2aa));continue;case'4':return _0x239c36;}break;}}catch(_0x25a861){return null;}}function _0x3f6d4d(){var _0x8a5cf4=_0x4b6c3b,_0x5c0d96={'MCyko':_0x220211['HaAhP']};if(_0x8a5cf4(0x87d)===_0x220211['YDisU'])_0x5c9376['textC'+'onten'+'t']=_0x5c0d96[_0x8a5cf4(0x89d)];else{var _0x364584=_0x2769c1();if(!_0x364584)return _0x5908ca;if(_0x364584[_0x8a5cf4(0x583)+'et'][_0x8a5cf4(0x845)])return _0x364584[_0x8a5cf4(0x845)];try{return _0x34d8a7(_0x364584);}catch(_0x14a6d2){if(_0x8a5cf4(0x487)===_0x220211[_0x8a5cf4(0xab6)])return _0x364584[_0x8a5cf4(0x583)+'et'][_0x8a5cf4(0x845)]='1',_0x364584[_0x8a5cf4(0x845)]=_0x5908ca,console[_0x8a5cf4(0xad5)](_0x220211[_0x8a5cf4(0x2bb)],'color'+':'+_0x563cd7,_0x14a6d2),_0x5908ca;else{var _0xf6606d=_0x14e9b3[_0x47e415][_0x8a5cf4(0x1f5)+'ing'](-0x97a+-0x226e+0x2bf8);_0x24c07e+=(_0xf6606d[_0x8a5cf4(0x3f7)+'h']<0x483+0x3*-0x209+0x19a?'0':'')+_0xf6606d;}}}}function _0x34d8a7(_0x4a0aea){var _0x4a7a35=_0x4b6c3b,_0x18381f={'MFuuX':function(_0x399180,_0x287077){return _0x399180!==_0x287077;},'XnMDY':'pRmXU','KCBws':function(_0x1060c4,_0x4bbdc6){return _0x1060c4(_0x4bbdc6);},'lNBjB':_0x4a7a35(0x702)+'|1|4','JtXZp':'#2a0f'+'1b','GkLPH':_0x220211[_0x4a7a35(0x7d7)],'pQuRU':_0x220211['DrgIn'],'dgyCk':_0x220211[_0x4a7a35(0x2d9)],'ibyuK':_0x220211['QKCbg'],'BHbhL':function(_0x5cbe87){return _0x5cbe87();},'lFOdR':'posit'+'ion:f'+'ixed;'+'left:'+_0x4a7a35(0x9a6)+_0x4a7a35(0x1d6)+_0x4a7a35(0x5b2)+'-inde'+_0x4a7a35(0x263)+_0x4a7a35(0x95b)+_0x4a7a35(0xb29)+_0x4a7a35(0x556)+_0x4a7a35(0xa16)+_0x4a7a35(0x999)+_0x4a7a35(0x6b8)+_0x4a7a35(0x5c9)+_0x4a7a35(0xa8c),'jKFbp':_0x220211[_0x4a7a35(0x2b7)],'QIvJz':function(_0x1580ea,_0x942e6f){return _0x1580ea<_0x942e6f;},'oLoqD':function(_0xf5e7b3,_0x4d47ba,_0x27b54e){return _0xf5e7b3(_0x4d47ba,_0x27b54e);},'VdyuG':function(_0x1f3861,_0x1932cd){return _0x1f3861===_0x1932cd;},'PWSFu':_0x220211[_0x4a7a35(0x94a)],'nJdte':function(_0x2abee6,_0x5e275c){return _0x220211['RroSK'](_0x2abee6,_0x5e275c);},'mkAVd':function(_0x14316a,_0x302c28){return _0x220211['DtXKo'](_0x14316a,_0x302c28);},'ysXNr':_0x4a7a35(0x791)+'·\x20','WEsSJ':'#7ee0'+'a8','mVYqy':function(_0x3dfaa4,_0x503c7d){return _0x3dfaa4>_0x503c7d;},'WLBXF':function(_0x5ab3fb,_0x441707){return _0x5ab3fb+_0x441707;},'NtVjQ':function(_0xc2f5b1,_0x5506a9){return _0xc2f5b1+_0x5506a9;},'moNJg':function(_0x1cc7f7,_0x134056){return _0x1cc7f7+_0x134056;},'IOffi':_0x220211['QdAmx'],'RAIST':_0x4a7a35(0x3d0)+'|2|0','AGrLP':_0x4a7a35(0x474)+_0x4a7a35(0x676)+'t','uYcmm':_0x220211[_0x4a7a35(0x61f)],'lItQg':_0x4a7a35(0x6e4),'lcmPy':_0x4a7a35(0x7c8)+'kura]'+_0x4a7a35(0xa67)+_0x4a7a35(0x1b7)+_0x4a7a35(0x623)+'rt','tgUNh':function(_0x307ab0,_0x11991b){return _0x307ab0+_0x11991b;},'XXcpt':function(_0x51c80c,_0x1258ae){var _0x438759=_0x4a7a35;return _0x220211[_0x438759(0x594)](_0x51c80c,_0x1258ae);},'wlTpZ':'color'+':','jlEmQ':function(_0x321781,_0x4f3bad){return _0x220211['vZhIN'](_0x321781,_0x4f3bad);}};_0x4a0aea[_0x4a7a35(0x855)][_0x4a7a35(0x7ef)+'xt']=_0x220211[_0x4a7a35(0x594)]('posit'+'ion:f'+'ixed;'+_0x4a7a35(0x647)+_0x4a7a35(0x9a6)+_0x4a7a35(0x1d6)+_0x4a7a35(0x5b2)+_0x4a7a35(0x4a3)+_0x4a7a35(0x263)+_0x4a7a35(0x526)+_0x4a7a35(0xaf4)+'x-wid'+_0x4a7a35(0xa05)+'n(52v'+_0x4a7a35(0x853)+_0x4a7a35(0x2f4)+'ax-he'+_0x4a7a35(0x57c)+_0x4a7a35(0x7b9)+_0x220211['jrUvD']+(_0x4a7a35(0x423)+_0x4a7a35(0x88d)+_0x4a7a35(0x24c)+'i-mon'+'ospac'+'e,Con'+'solas'+',mono'+'space'+';box-'+'shado'+_0x4a7a35(0x401)+_0x4a7a35(0xb4e)+_0x4a7a35(0xabe)+_0x4a7a35(0x1cb)+_0x4a7a35(0x38e)),'displ'+_0x4a7a35(0x62a)+_0x4a7a35(0x32a)+_0x4a7a35(0x449)+'recti'+_0x4a7a35(0x63b)+'lumn;'+'overf'+_0x4a7a35(0x7bd)+'idden'+';'),_0x4a0aea[_0x4a7a35(0x510)+'HTML']=_0x220211['DtXKo'](_0x220211[_0x4a7a35(0xa93)](_0x220211[_0x4a7a35(0x9b8)](_0x220211[_0x4a7a35(0x8ea)](_0x220211['AFsJu'](_0x220211[_0x4a7a35(0x570)](_0x220211[_0x4a7a35(0x1d9)](_0x220211['sGJPt'](_0x220211[_0x4a7a35(0x57f)](_0x220211[_0x4a7a35(0x9ab)](_0x220211[_0x4a7a35(0xa91)]('<div\x20'+_0x4a7a35(0x855)+'=\x22pad'+_0x4a7a35(0xa58)+'9px\x201'+'2px;b'+'order'+'-bott'+_0x4a7a35(0x6a6)+_0x4a7a35(0x9f4)+'id\x20rg'+'ba(25'+_0x4a7a35(0x8d8)+',177,'+'.3);d'+_0x4a7a35(0x453)+'y:fle'+_0x4a7a35(0x7a1)+':8px;'+_0x4a7a35(0x545)+'-item'+_0x4a7a35(0xaba)+_0x4a7a35(0x8c5)+_0x4a7a35(0x6ef)+_0x4a7a35(0x2bc)+'to;\x22>'+(_0x4a7a35(0xa27)+_0x4a7a35(0x6a9)+'color'+':'),_0x563cd7)+('\x22>sak'+_0x4a7a35(0x472)+_0x4a7a35(0x5f1)+_0x4a7a35(0x325)+'</b>')+(_0x4a7a35(0x8e0)+'\x20id=\x22'+_0x4a7a35(0x1b5)+'uild\x22'+_0x4a7a35(0x8de)+'e=\x22co'+'lor:#'+_0x4a7a35(0x46e)+'6;fon'+_0x4a7a35(0x851)+_0x4a7a35(0x5ce)+_0x4a7a35(0x412)+_0x4a7a35(0xa58)+'1px\x206'+_0x4a7a35(0xaa5)+_0x4a7a35(0xae0)+'1px\x20s'+_0x4a7a35(0x6b7)+'rgba('+'255,1'+_0x4a7a35(0x370)+_0x4a7a35(0x200)+_0x4a7a35(0x97f)+_0x4a7a35(0x2ef)+_0x4a7a35(0x821)+':999p'+_0x4a7a35(0x80b)+_0x4a7a35(0xad1)+_0x4a7a35(0x32e))+('<span'+'\x20id=\x22'+'sw2-s'+_0x4a7a35(0x747)+_0x4a7a35(0x4b2)+_0x4a7a35(0x443)+_0x4a7a35(0x895)+'#bda9'+_0x4a7a35(0x3e4)+'aitin'+_0x4a7a35(0x22f)+'\x20game'+_0x4a7a35(0x1a6)+_0x4a7a35(0x34a)+_0x4a7a35(0x275)),_0x4a7a35(0x603)+_0x4a7a35(0x1b6)+_0x4a7a35(0x1d8)+'-copy'+_0x4a7a35(0x4b2)+'le=\x22d'+'ispla'+'y:non'+_0x4a7a35(0x5f0)+'gin-l'+_0x4a7a35(0xa20)+_0x4a7a35(0x342)+_0x4a7a35(0x366)+'ound:'),_0x563cd7)+(_0x4a7a35(0xaa0)+_0x4a7a35(0x905)+'color'+':#2a0'+'f1b;b'+_0x4a7a35(0x8bd)+_0x4a7a35(0x9a5)+_0x4a7a35(0xa4a)+'x;pad'+_0x4a7a35(0xa58)+_0x4a7a35(0xb4d)+_0x4a7a35(0x6a1)+'ont-w'+_0x4a7a35(0x755)+':700;'+'curso'+_0x4a7a35(0x395)+'nter;'+_0x4a7a35(0xa54)+'y\x20JSO'+_0x4a7a35(0xa57)+_0x4a7a35(0xabb))+('<butt'+'on\x20id'+'=\x22sw2'+_0x4a7a35(0x960)+'le\x22\x20s'+_0x4a7a35(0x560)+'\x22back'+'groun'+_0x4a7a35(0x70f)+'nspar'+_0x4a7a35(0x68e)+_0x4a7a35(0x8bd)+_0x4a7a35(0x6e6)+_0x4a7a35(0x20c)+_0x4a7a35(0x387)+'(255,'+'143,1'+'77,.4'+');col'+_0x4a7a35(0x20e)+_0x4a7a35(0x48b)+_0x4a7a35(0xaa0)+'er-ra'+'dius:'+'7px;p'+_0x4a7a35(0x7b6)+_0x4a7a35(0x409)+'\x208px;'+'curso'+'r:poi'+_0x4a7a35(0x59d)+'\x22>ope'+'n</bu'+_0x4a7a35(0xabb)),'<butt'+'on\x20id'+'=\x22sw2'+'-x\x22\x20s'+'tyle='+_0x4a7a35(0x4a6)+_0x4a7a35(0x426)+_0x4a7a35(0x70f)+_0x4a7a35(0x7c9)+_0x4a7a35(0x68e)+_0x4a7a35(0x8bd)+_0x4a7a35(0x6e6)+'solid'+_0x4a7a35(0x387)+_0x4a7a35(0x4ee)+'143,1'+_0x4a7a35(0x2f0)+_0x4a7a35(0x7f6)+_0x4a7a35(0x20e)+_0x4a7a35(0x48b)+_0x4a7a35(0xaa0)+'er-ra'+'dius:'+'7px;p'+_0x4a7a35(0x7b6)+_0x4a7a35(0x409)+_0x4a7a35(0xb49)+_0x4a7a35(0x1fe)+'r:poi'+_0x4a7a35(0x59d)+_0x4a7a35(0x2b4)+'butto'+'n>')+(_0x4a7a35(0x482)+'>'),_0x220211[_0x4a7a35(0x280)])+_0x220211['WAWxb'],'<butt'+_0x4a7a35(0x1b6)+_0x4a7a35(0x1d8)+_0x4a7a35(0x8b4)+'d\x22\x20st'+'yle=\x22'+_0x4a7a35(0x5d6)+_0x4a7a35(0x5ec)+':tran'+'spare'+_0x4a7a35(0x43b)+_0x4a7a35(0xae0)+'1px\x20s'+_0x4a7a35(0x6b7)+_0x4a7a35(0x86b)+'255,1'+_0x4a7a35(0x370)+_0x4a7a35(0x511)+_0x4a7a35(0x2ae)+_0x4a7a35(0xa66)+_0x4a7a35(0x27f)+'borde'+'r-rad'+_0x4a7a35(0x9bb)+'px;pa'+'dding'+':4px\x20'+'10px;'+_0x4a7a35(0x1fe)+_0x4a7a35(0x395)+_0x4a7a35(0x59d)+'\x22>Spe'+_0x4a7a35(0xaf5)+_0x4a7a35(0x1cd)+_0x4a7a35(0xabb))+(_0x4a7a35(0x938)+'t\x20id='+'\x22sw2-'+_0x4a7a35(0x1e9)+_0x4a7a35(0x82b)+'pe=\x22r'+_0x4a7a35(0x8e1)+_0x4a7a35(0x8a9)+'\x221\x22\x20m'+_0x4a7a35(0x48e)+_0x4a7a35(0x6d6)+_0x4a7a35(0x804)+_0x4a7a35(0xb43)+'lue=\x22'+'1\x22\x20st'+'yle=\x22'+'width'+_0x4a7a35(0x95a)+_0x4a7a35(0x566)+_0x4a7a35(0x8fa)+'olor:')+_0x563cd7,_0x220211['mZUab']),_0x220211[_0x4a7a35(0x606)]),_0x4a7a35(0x603)+_0x4a7a35(0x1b6)+'=\x22sw2'+_0x4a7a35(0x57b)+'\x22\x20sty'+_0x4a7a35(0x897)+_0x4a7a35(0x366)+_0x4a7a35(0x785)+'trans'+_0x4a7a35(0x676)+'t;bor'+_0x4a7a35(0x86c)+'px\x20so'+_0x4a7a35(0x9f0)+'gba(2'+_0x4a7a35(0x2c1)+'3,177'+',.4);'+_0x4a7a35(0x8bc)+_0x4a7a35(0x66c)+_0x4a7a35(0x6db)+'order'+_0x4a7a35(0x9a5)+_0x4a7a35(0xa4a)+'x;pad'+'ding:'+_0x4a7a35(0x7b4)+_0x4a7a35(0x242)+_0x4a7a35(0x556)+'point'+'er;\x22>'+_0x4a7a35(0x26c)+'hot\x20('+_0x4a7a35(0x513)+_0x4a7a35(0xb54)+'n>'),_0x220211['mlDUF']),_0x4a7a35(0x482)+'>')+_0x220211[_0x4a7a35(0xabf)]+_0x220211[_0x4a7a35(0x2c3)]+('</div'+'>');var _0xfda3eb=_0x4a0aea['query'+_0x4a7a35(0x2c6)+'tor'](_0x220211[_0x4a7a35(0xa74)]),_0x59144b=_0x4a0aea['query'+'Selec'+_0x4a7a35(0x2fc)](_0x220211[_0x4a7a35(0x9cb)]),_0x389c47=_0x4a0aea[_0x4a7a35(0x797)+_0x4a7a35(0x2c6)+'tor'](_0x220211['DiQJo']),_0x2ae04e=_0x4a0aea[_0x4a7a35(0x797)+_0x4a7a35(0x2c6)+_0x4a7a35(0x2fc)](_0x4a7a35(0x989)+'copy'),_0x59c1e9=_0x4a0aea[_0x4a7a35(0x797)+_0x4a7a35(0x2c6)+'tor'](_0x4a7a35(0x989)+'x'),_0x4eb94e=_0x4a0aea[_0x4a7a35(0x797)+_0x4a7a35(0x2c6)+'tor'](_0x220211[_0x4a7a35(0x810)]),_0x231598=_0x4a0aea[_0x4a7a35(0x797)+'Selec'+'tor'](_0x220211[_0x4a7a35(0x1aa)]),_0x2bee6b=_0x4a0aea[_0x4a7a35(0x797)+_0x4a7a35(0x2c6)+_0x4a7a35(0x2fc)](_0x220211['WyOuc']),_0x51d148=_0x4a0aea[_0x4a7a35(0x797)+_0x4a7a35(0x2c6)+_0x4a7a35(0x2fc)](_0x4a7a35(0x989)+'speed'),_0xf84924=_0x4a0aea['query'+'Selec'+'tor'](_0x4a7a35(0x989)+_0x4a7a35(0x1e9)+'r'),_0x1328c1=_0x4a0aea['query'+'Selec'+_0x4a7a35(0x2fc)]('#sw2-'+_0x4a7a35(0x1e9)+_0x4a7a35(0x773)+'l'),_0x3f6a5d=_0x4a0aea['query'+_0x4a7a35(0x2c6)+'tor'](_0x220211[_0x4a7a35(0x624)]),_0x28d521=null,_0x300bbb=![];function _0x3e6db9(){var _0x1d225c=_0x4a7a35;if(_0x231598)_0x231598['style'][_0x1d225c(0xb12)+'ay']=_0x300bbb?'':_0x1d225c(0xae5);if(_0x4eb94e)_0x4eb94e[_0x1d225c(0x3d4)+_0x1d225c(0x830)+'t']=_0x300bbb?_0x220211['ZKqaZ']:_0x1d225c(0x7fe);_0x4a0aea['style']['width']=_0x300bbb?_0x220211[_0x1d225c(0x808)]:_0x1d225c(0x530),_0x4a0aea['style'][_0x1d225c(0x5d6)+_0x1d225c(0x5ec)]=_0x300bbb?_0x1d225c(0x471)+'1d':_0x1d225c(0x86b)+'21,12'+',29,.'+'9)';}if(_0x4eb94e)_0x4eb94e[_0x4a7a35(0x438)+'ck']=function(){var _0x86a906=_0x4a7a35;if(_0x18381f[_0x86a906(0x5cf)](_0x86a906(0x60d),_0x18381f[_0x86a906(0x415)]))return _0x4b29b0+_0xa2fe7e[_0x319807][_0x86a906(0x3f7)+'h'];else _0x300bbb=!_0x300bbb,_0x3e6db9();};_0x3e6db9();if(_0x59c1e9)_0x59c1e9[_0x4a7a35(0x438)+'ck']=function(){var _0x15b005=_0x4a7a35;_0x18381f[_0x15b005(0x8dd)](_0x299fde,!![]);};if(_0x2bee6b)_0x2bee6b[_0x4a7a35(0x438)+'ck']=function(){var _0x12487e=_0x4a7a35;_0x5445e0(_0x12487e(0x6e5)+'hot');};var _0x235dd0=![];function _0x12102c(){var _0x4580f9=_0x4a7a35;_0x5445e0(_0x220211[_0x4580f9(0x4e6)],{'on':_0x235dd0,'factor':parseFloat(_0xf84924[_0x4580f9(0x7fb)])||0x2*-0x97d+-0x1f02+0x31fd});}if(_0x51d148)_0x51d148['oncli'+'ck']=function(){var _0x561d48=_0x4a7a35,_0x44a3f6=_0x18381f[_0x561d48(0x4ce)][_0x561d48(0xaa6)]('|'),_0x46e6c=0x6*-0x3c5+-0x1868+0x2f06;while(!![]){switch(_0x44a3f6[_0x46e6c++]){case'0':_0x51d148['style']['backg'+'round']=_0x235dd0?_0x563cd7:_0x561d48(0x474)+'paren'+'t';continue;case'1':_0x51d148[_0x561d48(0x855)]['color']=_0x235dd0?_0x18381f[_0x561d48(0x21c)]:_0x561d48(0x9ff)+'f5';continue;case'2':_0x51d148[_0x561d48(0x3d4)+'onten'+'t']=_0x235dd0?_0x18381f[_0x561d48(0x214)]:_0x18381f[_0x561d48(0x580)];continue;case'3':_0x235dd0=!_0x235dd0;continue;case'4':_0x12102c();continue;}break;}};if(_0xf84924)_0xf84924[_0x4a7a35(0x4cf)+'ut']=function(){var _0x32bab9=_0x4a7a35,_0x563479={'wxZwQ':_0x220211[_0x32bab9(0x2bb)]};if('hQPhf'===_0x220211['jTJRw']){if(_0x1328c1)_0x1328c1[_0x32bab9(0x3d4)+_0x32bab9(0x830)+'t']=_0x220211[_0x32bab9(0x3e5)]((parseFloat(_0xf84924[_0x32bab9(0x7fb)])||0x8b+-0x5*-0x1cf+0x1*-0x995)[_0x32bab9(0x662)+'ed'](-0x20a8+0x1*0x1408+0xca1),'x');_0x220211['DVLwt'](_0x12102c);}else{var _0x2e077d=_0xad2fd8();if(!_0x2e077d)return _0x5b9b06;if(_0x2e077d[_0x32bab9(0x583)+'et'][_0x32bab9(0x845)])return _0x2e077d['api'];try{return _0x5b6995(_0x2e077d);}catch(_0x3bfa99){return _0x2e077d[_0x32bab9(0x583)+'et'][_0x32bab9(0x845)]='1',_0x2e077d[_0x32bab9(0x845)]=_0x541d9a,_0x36053d[_0x32bab9(0xad5)](_0x563479[_0x32bab9(0x72f)],_0x32bab9(0x8bc)+':'+_0x51b152,_0x3bfa99),_0x323632;}}};if(_0x2ae04e)_0x2ae04e[_0x4a7a35(0x438)+'ck']=function(){var _0x80b988=_0x4a7a35,_0x11f4a7={'NTzPX':_0x18381f['ibyuK'],'HIBLc':function(_0x4f8d9a,_0x204c0c){return _0x4f8d9a<_0x204c0c;},'lmRKn':function(_0x258c2d){var _0x52c387=_0x3979;return _0x18381f[_0x52c387(0x384)](_0x258c2d);}},_0x48900a=_0x15d915+'\x0a'+(_0x28d521?JSON[_0x80b988(0x62c)+'gify'](_0x28d521,null,-0x64+0x1f1+-0x1*0x18c):'')+'\x0a'+_0x323bbd,_0x29cb25=function(){var _0xb1baab=_0x80b988;if(_0x2ae04e)_0x2ae04e['textC'+'onten'+'t']=_0x11f4a7[_0xb1baab(0x1ec)];};if(navigator['clipb'+_0x80b988(0x3f8)]&&navigator[_0x80b988(0xad0)+'oard'][_0x80b988(0x8fe)+'Text'])navigator[_0x80b988(0xad0)+'oard']['write'+_0x80b988(0x4e5)](_0x48900a)[_0x80b988(0x78a)](_0x29cb25,function(){var _0x1de9d7=_0x80b988;if(_0x1de9d7(0x76b)!==_0x1de9d7(0x76b)){var _0x2bdbc1=0x31*0x9b+0x3b3+0x1*-0x215e;for(var _0x57c6aa=0x1*0xef5+0xd*-0x226+-0xcf9*-0x1;_0x11f4a7[_0x1de9d7(0x3ca)](_0x57c6aa,_0x1f937c[_0x1de9d7(0x3f7)+'h']);_0x57c6aa++){if(_0x500aac[_0x57c6aa][_0x1de9d7(0xb25)]&&_0x51b3c6[_0x57c6aa]['hook']['table'+_0x1de9d7(0x538)]!==_0x1617b1)_0x2bdbc1++;}return _0x2bdbc1;}else _0x11f4a7['lmRKn'](_0x127b84);});else _0x127b84();function _0x127b84(){var _0x3124c1=_0x80b988,_0x57aabd=document[_0x3124c1(0x769)+_0x3124c1(0x41c)+'ent']('texta'+'rea');_0x57aabd['value']=_0x48900a;if(!document[_0x3124c1(0x60e)])return;document[_0x3124c1(0x60e)]['appen'+'dChil'+'d'](_0x57aabd),_0x57aabd['selec'+'t']();try{if(_0x3124c1(0x2cb)!=='LKWva')return _0x136277[0x1294*-0x1+-0x41b*0x4+0x2300]=_0x2d3ac6,_0x41f4a3[0x108f+-0x23c2+0x1333];else document['execC'+_0x3124c1(0x6f2)+'d'](_0x18381f['dgyCk']),_0x29cb25();}catch(_0x19ed8c){}_0x57aabd['remov'+'e']();}};_0x220211[_0x4a7a35(0x21b)](setTimeout,function(){var _0x1083aa=_0x4a7a35;if(_0x28d521)return;if(!_0xfda3eb||!_0x389c47)return;_0xfda3eb['textC'+_0x1083aa(0x830)+'t']=_0x220211[_0x1083aa(0x882)],_0xfda3eb[_0x1083aa(0x855)][_0x1083aa(0x8bc)]=_0x1083aa(0x824)+'c7',_0x389c47[_0x1083aa(0x3d4)+'onten'+'t']=_0x220211['RroSK'](_0x1083aa(0x355)+'ame\x20f'+_0x1083aa(0x50b)+_0x1083aa(0x31f)+'\x20post'+'ed\x20a\x20'+'singl'+'e\x20rep'+_0x1083aa(0x339)+'\x0a'+_0x220211['CJzoG']+('so\x20th'+'e\x20rem'+_0x1083aa(0x1e8)+_0x1083aa(0x77b)+_0x1083aa(0x713)+_0x1083aa(0x968)+'\x0a\x0a')+(_0x1083aa(0x25d)+_0x1083aa(0x5dc)+'rmonk'+'ey\x20is'+'\x20not\x20'+_0x1083aa(0xad7)+_0x1083aa(0x506)+_0x1083aa(0x29c)+_0x1083aa(0x4fd)+_0x1083aa(0x1ea)+'origi'+_0x1083aa(0x57d)+'ame.\x0a'),_0x220211[_0x1083aa(0x8c4)])+_0x220211['rXaUo']+('\x20\x20\x20\x20\x20'+_0x1083aa(0x930)+_0x1083aa(0x8db)+'—\x20two'+'\x20copi'+'es\x20of'+_0x1083aa(0x7a3)+_0x1083aa(0x3c9)+'\x20patc'+_0x1083aa(0x42f)+'Assem'+_0x1083aa(0x9df)+_0x1083aa(0x889)+'tiate'+_0x1083aa(0x3d9))+(_0x1083aa(0x8fb)+_0x1083aa(0x8cd)+_0x1083aa(0x4fc)+_0x1083aa(0x593)+'\x20once'+_0x1083aa(0xaae)+_0x1083aa(0x6d2)+_0x1083aa(0x442)+_0x1083aa(0xa5b)+'l\x20aga'+'in.');},-0x3db9*0x3+-0x1*-0xd91+0xa*0x2899);var _0x2e1273={'set':function(_0x505246){var _0xa3624c=_0x4a7a35,_0x3df628={'GZZcz':function(_0x444924,_0x47783a){return _0x444924+_0x47783a;},'lDcDq':function(_0x5aa57c,_0x592150){return _0x5aa57c+_0x592150;},'DhKaU':_0x18381f[_0xa3624c(0x761)],'CUkef':_0xa3624c(0x5d6)+'round'+':rgba'+_0xa3624c(0xa5d)+'2,29,'+'.9);b'+'order'+_0xa3624c(0x6e6)+_0xa3624c(0x20c)+_0xa3624c(0x387)+'(255,'+'143,1'+'77,.5'+_0xa3624c(0x7f6)+_0xa3624c(0xab7),'VHvzY':_0x18381f['jKFbp'],'BdmVF':function(_0x42323a){return _0x42323a();},'CPwqv':function(_0x553236,_0x3fd82d){var _0xd358a7=_0xa3624c;return _0x18381f[_0xd358a7(0x3b0)](_0x553236,_0x3fd82d);},'ZpMSz':function(_0x35b485,_0x1e5331,_0x5513a5){return _0x35b485(_0x1e5331,_0x5513a5);},'MWmoj':function(_0x1a356f,_0x46c729,_0x26c71e){var _0x2f682a=_0xa3624c;return _0x18381f[_0x2f682a(0x860)](_0x1a356f,_0x46c729,_0x26c71e);}};_0x28d521=_0x505246;if(_0x2ae04e)_0x2ae04e[_0xa3624c(0x855)][_0xa3624c(0xb12)+'ay']='';if(_0x59144b){var _0x2e585c=('4|1|0'+_0xa3624c(0x51d))['split']('|'),_0x5abd3d=0x114b+-0x199*0x10+0x845;while(!![]){switch(_0x2e585c[_0x5abd3d++]){case'0':var _0x251f2b=_0x505246['versi'+'on']||'';continue;case'1':var _0xc6d23a=_0x596a6f;continue;case'2':_0x59144b[_0xa3624c(0x855)][_0xa3624c(0x8bc)]=_0x18381f[_0xa3624c(0x549)](_0x251f2b,_0xc6d23a)?_0x563cd7:_0xa3624c(0x2eb)+'74';continue;case'3':_0x59144b[_0xa3624c(0x855)][_0xa3624c(0x957)+_0xa3624c(0x659)+'r']=_0x251f2b===_0xc6d23a?_0x18381f[_0xa3624c(0x554)]:'#ff6e'+'74';continue;case'4':_0x59144b[_0xa3624c(0x3d4)+_0xa3624c(0x830)+'t']=_0x18381f[_0xa3624c(0x40a)]('v',_0x505246[_0xa3624c(0x84a)+'on']||'?');continue;}break;}}var _0x1e47b6=_0x505246[_0xa3624c(0x930)+'nces']&&_0x505246['insta'+_0xa3624c(0x2c5)]['FPSco'+_0xa3624c(0x8c2)+_0xa3624c(0x5da)],_0x3c53fe=Math['round']((_0x505246['elaps'+_0xa3624c(0x95e)]||0xa9*-0xa+-0x2c0+-0x156*-0x7)/(0x509+0x1a8a+-0x313*0x9));if(_0xfda3eb){var _0x2edeec,_0x192335;if(_0x1e47b6&&_0x505246[_0xa3624c(0x5ab)+'y']&&_0x505246[_0xa3624c(0x5ab)+'y'][_0xa3624c(0x37b)+'ntrol'+'ler']){if(_0xa3624c(0x44e)===_0xa3624c(0x44e))_0x2edeec=_0x18381f['mkAVd'](_0x18381f[_0xa3624c(0x2cd)],Object[_0xa3624c(0x33a)](_0x505246['insta'+_0xa3624c(0x2c5)])['lengt'+'h'])+(_0xa3624c(0x267)+_0xa3624c(0x6a2)+'\x20')+_0x3c53fe+'s',_0x192335=_0x18381f[_0xa3624c(0x544)];else return _0x50dae5[_0xa3624c(0x797)+_0xa3624c(0x2c6)+'tor'](_0x3df628[_0xa3624c(0x78d)](_0xa3624c(0x9db)+_0xa3624c(0x229)+_0x26e126,'\x22]'));}else{if(_0x18381f['mVYqy'](_0x505246['hooks'+_0xa3624c(0x501)+'ed'],-0xa1*0x39+-0x1d87+0x4160))_0x2edeec='hooks'+'\x20arme'+_0xa3624c(0x3d5)+_0x3c53fe+'s',_0x192335=_0xa3624c(0x5b8)+'8a';else _0x505246['scrip'+'tData']?(_0x2edeec=_0x18381f['WLBXF'](_0x18381f['NtVjQ']('metad'+_0xa3624c(0xadb)+_0xa3624c(0xb0b)+'·\x20',_0x3c53fe),'s'),_0x192335=_0xa3624c(0x5b8)+'8a'):(_0x2edeec=_0x18381f[_0xa3624c(0x4b8)]((_0x505246['arm']&&_0x505246[_0xa3624c(0x1ff)]['ok']?'armed'+'\x20·\x20':'armin'+_0xa3624c(0xa2f))+_0x3c53fe,'s'),_0x192335=_0xa3624c(0x5b8)+'8a');}_0xfda3eb['textC'+'onten'+'t']=_0x2edeec,_0xfda3eb[_0xa3624c(0x855)][_0xa3624c(0x8bc)]=_0x192335;}_0x3f6a5d&&(_0x3f6a5d['textC'+_0xa3624c(0x830)+'t']=_0x505246['diff']&&_0x505246['diff'][_0xa3624c(0x3f7)+'h']?_0x18381f[_0xa3624c(0x4af)]+_0x505246[_0xa3624c(0x65b)]['join'](',\x20'):'F9\x20tw'+_0xa3624c(0x207)+'hile\x20'+'walki'+_0xa3624c(0x373)+_0xa3624c(0x2dc)+'ting\x20'+_0xa3624c(0x231)+_0xa3624c(0x908)+_0xa3624c(0x54f)+_0xa3624c(0x83b)+_0xa3624c(0xad2)+_0xa3624c(0xb4f)+'\x20whic'+'h.');if(_0x505246[_0xa3624c(0x213)]&&_0x51d148){if(_0x18381f['MFuuX'](_0xa3624c(0x661),_0xa3624c(0x661))){var _0x1da6ce=_0x16b405['creat'+'eElem'+_0xa3624c(0x3ff)](_0xa3624c(0x2aa));_0x1da6ce['id']=_0xa3624c(0x621)+_0xa3624c(0x875)+'v2-ta'+'b',_0x1da6ce[_0xa3624c(0x855)]['cssTe'+'xt']=_0x3df628[_0xa3624c(0x78d)](_0x3df628['lDcDq'](_0x3df628[_0xa3624c(0x436)](_0x3df628[_0xa3624c(0x6b1)],_0x3df628[_0xa3624c(0x651)])+_0x2ecef3,';'),_0xa3624c(0x957)+_0xa3624c(0x648)+'ius:9'+_0xa3624c(0x8ee)+_0xa3624c(0x3c1)+'ng:4p'+'x\x2012p'+_0xa3624c(0x22c)+'t:11p'+_0xa3624c(0x481)+_0xa3624c(0xa3f)+'onosp'+'ace,C'+_0xa3624c(0x264)+_0xa3624c(0x4c6)+_0xa3624c(0x4c0)+'ce;'),_0x1da6ce[_0xa3624c(0x3d4)+_0xa3624c(0x830)+'t']=_0x3df628[_0xa3624c(0x90d)],_0x1da6ce[_0xa3624c(0x438)+'ck']=function(){_0x387283(![]),_0x43696e();},_0x5e5f63['body']['appen'+_0xa3624c(0x249)+'d'](_0x1da6ce);}else{var _0x476965=_0x18381f[_0xa3624c(0x30d)]['split']('|'),_0x393db3=0x1c51+0x1061+-0x3*0xee6;while(!![]){switch(_0x476965[_0x393db3++]){case'0':_0x1328c1&&_0x505246['speed'][_0xa3624c(0x1e9)+'r']&&(_0x1328c1['textC'+'onten'+'t']=Number(_0x505246[_0xa3624c(0x213)]['facto'+'r'])['toFix'+'ed'](0xa*-0xd+0x8bf+-0x22*0x3e)+'x');continue;case'1':_0x51d148[_0xa3624c(0x855)][_0xa3624c(0x5d6)+_0xa3624c(0x5ec)]=_0x235dd0?_0x563cd7:_0x18381f['AGrLP'];continue;case'2':_0x51d148[_0xa3624c(0x855)][_0xa3624c(0x8bc)]=_0x235dd0?_0x18381f[_0xa3624c(0x21c)]:_0x18381f[_0xa3624c(0x7cb)];continue;case'3':_0x51d148[_0xa3624c(0x3d4)+_0xa3624c(0x830)+'t']=_0x235dd0?'Speed'+'\x20ON':_0xa3624c(0x3ae)+_0xa3624c(0x9de);continue;case'4':_0x235dd0=!!_0x505246[_0xa3624c(0x213)]['on'];continue;}break;}}}if(_0x389c47){if(_0x18381f[_0xa3624c(0x549)](_0x18381f[_0xa3624c(0x51a)],_0xa3624c(0x6bf))){if(!_0x499977['lengt'+'h'])try{_0x3df628[_0xa3624c(0x4ad)](_0x2ec5fc);}catch(_0x2d7703){}_0x55c485++,_0x5be030(_0x419cc0());if(!_0x16171a['lengt'+'h']&&_0x3df628['CPwqv'](_0x4d43b9,-0xd*-0x1cd+-0x225b*-0x1+-0x1c4c*0x2))_0x3df628[_0xa3624c(0x1da)](_0x4ee63d,_0x35127,-0xa3b+0x17cb+-0x5c0);else{if(!_0x92e72e[_0xa3624c(0x33a)](_0x335890)['lengt'+'h']&&_0x3df628['CPwqv'](_0x4eb20e,-0x9e6+-0x2ea+0xdfc))_0x1f0bb0(_0x132cd1,0x2336+-0x49*0x61+-0x1*-0x43);else _0x3df628[_0xa3624c(0x788)](_0x5bcdfc,_0x1ef24e,-0x21f+0x6b*0x2e+-0xc6b);}}else try{_0x389c47[_0xa3624c(0x3d4)+_0xa3624c(0x830)+'t']=_0x9c87d9(_0x505246);}catch(_0x4bc564){_0x389c47[_0xa3624c(0x3d4)+_0xa3624c(0x830)+'t']=JSON[_0xa3624c(0x62c)+_0xa3624c(0x64f)](_0x505246,null,-0x454*0x8+0x25bd+0xc7*-0x4);}}console[_0xa3624c(0x3f1)](_0x18381f[_0xa3624c(0x771)],_0x18381f['tgUNh'](_0x18381f[_0xa3624c(0x67c)](_0x18381f['wlTpZ'],_0x563cd7),_0xa3624c(0x923)+_0xa3624c(0x3d8)+_0xa3624c(0x81b)+'0'),_0x505246),console[_0xa3624c(0x3f1)](_0x18381f[_0xa3624c(0x50f)](_0x18381f['WLBXF'](_0x18381f['XXcpt'](_0x15d915,'\x0a'),JSON['strin'+_0xa3624c(0x64f)](_0x505246,null,0x83*0x1f+0x35*0xa7+0x1*-0x326f))+'\x0a',_0x323bbd));}};return _0x4a0aea[_0x4a7a35(0x583)+'et']['api']='1',_0x4a0aea[_0x4a7a35(0x845)]=_0x2e1273,_0x2e1273;}function _0x9c87d9(_0x4a247d){var _0x427419=_0x4b6c3b;if(_0x220211['FjhOt']===_0x427419(0x1ad))try{if(_0x2c6bc7[_0x276c94][_0x427419(0x279)+_0x427419(0x2e8)+_0x427419(0x635)])_0x43ad70[_0x3c3875][_0x427419(0x279)+'ntWin'+'dow'][_0x427419(0x5ea)+_0x427419(0x904)+'e'](_0x39429a,'*');}catch(_0xe71174){}else{var _0x22cd39=[];_0x22cd39[_0x427419(0x793)](_0x220211[_0x427419(0x382)](_0x427419(0xa8f)+'\x20\x20\x20\x20'+(_0x4a247d[_0x427419(0x1a9)]||'?')+'\x20\x20('+Math['round']((_0x4a247d['elaps'+_0x427419(0x95e)]||0x23de+0xfb+-0x24d9)/(0x10bb+0x84c+-0x151f)),'s)')),_0x22cd39[_0x427419(0x793)](_0x220211[_0x427419(0x9b8)](_0x220211[_0x427419(0x602)](_0x220211[_0x427419(0x328)](_0x220211[_0x427419(0x703)],_0x4a247d['uwmk']?_0x427419(0x516):'no')+_0x220211['dEzPS']+(_0x4a247d['il2Cp'+_0x427419(0x36c)+_0x427419(0x710)]?_0x220211['gYvwq']:'no'),_0x220211['OpRpK']),_0x220211[_0x427419(0x6e8)](_0x4a247d[_0x427419(0x4a1)+'ount'],null)?_0x4a247d['typeC'+_0x427419(0xa77)]:'?')),_0x22cd39[_0x427419(0x793)](_0x220211[_0x427419(0x8ce)](_0x220211[_0x427419(0x673)](_0x220211[_0x427419(0x49d)](_0x220211[_0x427419(0x721)],_0x4a247d['hooks'+'Appli'+'ed']),'/'),_0x4a247d['hooks'+_0x427419(0xa61)])+('\x20appl'+_0x427419(0x6a4))),_0x22cd39[_0x427419(0x793)]('');var _0x3cb967=_0x4a247d['insta'+_0x427419(0x2c5)]||{},_0x1b5802=Object[_0x427419(0x33a)](_0x3cb967);!_0x1b5802[_0x427419(0x3f7)+'h']&&(_0x22cd39['push'](_0x220211[_0x427419(0x552)]),_0x22cd39['push'](''),_0x22cd39[_0x427419(0x793)]('The\x20h'+'ooks\x20'+_0x427419(0x8c0)+'on\x20th'+_0x427419(0x811)+'e\x27s\x20o'+'wn\x20Up'+'date('+');\x20no'+_0x427419(0x522)+_0x427419(0x3c6)+_0x427419(0x1c9)+_0x427419(0x842)),_0x22cd39[_0x427419(0x793)]('no\x20Up'+_0x427419(0x3ad)+_0x427419(0x9e1)+'et,\x20o'+_0x427419(0x410)+_0x427419(0x505)+_0x427419(0x1f0)+'\x20did\x20'+_0x427419(0x345)+_0x427419(0x28d)));for(var _0x2a3a7f=-0x2361*-0x1+-0xa85*0x1+-0x56*0x4a;_0x2a3a7f<_0x1b5802[_0x427419(0x3f7)+'h'];_0x2a3a7f++){if(_0x220211[_0x427419(0x831)]===_0x220211[_0x427419(0x831)]){var _0xe7144c=_0x1b5802[_0x2a3a7f];_0x22cd39['push'](_0x220211[_0x427419(0x62e)](_0xe7144c,'\x20@\x20')+_0x3cb967[_0xe7144c]);}else _0x220211['DVLwt'](_0x22fe53);}_0x22cd39[_0x427419(0x793)]('');var _0x5568ae=_0x4a247d[_0x427419(0x5ab)+'y']||{},_0x40a7a3=Object[_0x427419(0x33a)](_0x5568ae);for(var _0x140928=-0x47+-0x6fd*0x1+0x744;_0x220211['GNnWa'](_0x140928,_0x40a7a3[_0x427419(0x3f7)+'h']);_0x140928++){if(_0x220211['ekCzj']('pKExB',_0x427419(0x404))){if(_0x1c7780[_0x427419(0x676)+'t']&&_0x43f9ca['paren'+'t']!==_0x4666ef)_0x1f4c87['paren'+'t'][_0x427419(0x5ea)+'essag'+'e'](_0x44792f,'*');if(_0x10919d[_0x427419(0x403)]&&_0x148b79['top']!==_0x1bff4b)_0x22062c['top'][_0x427419(0x5ea)+_0x427419(0x904)+'e'](_0x2f7743,'*');}else{var _0x413850=_0x40a7a3[_0x140928],_0x4c0595=_0x5568ae[_0x413850];if(!_0x4c0595||!_0x4c0595[_0x427419(0x3f7)+'h'])continue;_0x22cd39[_0x427419(0x793)](_0x220211['ytWiy'](_0x427419(0x7af)+_0x413850+'\x20',new Array(Math[_0x427419(0xb3f)](-0x28e+-0x17e3+0x2*0xd39,-0x3e2+0xa*-0x5e+0x7b0-_0x413850[_0x427419(0x3f7)+'h']))[_0x427419(0x8eb)]('─'))),_0x22cd39[_0x427419(0x793)](_0x427419(0x254)+'set\x20\x20'+'\x20kind'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20va'+_0x427419(0x350)+_0x427419(0x8e5)+_0x427419(0x8e5)+_0x427419(0xb2c));for(var _0x301849=0x1bc4+0x585*0x2+-0x26ce;_0x301849<_0x4c0595['lengt'+'h'];_0x301849++){var _0x4cd964=_0x4c0595[_0x301849],_0x499fb4=typeof _0x4cd964['v']==='numbe'+'r'?_0x220211[_0x427419(0xada)](Math[_0x427419(0x5ec)](_0x4cd964['v']*(-0x13*-0xc9+0x19c7+-0x24ca)),-0x1*-0x84d+-0x1*-0x2047+-0x24ac):_0x4cd964['v'];_0x22cd39[_0x427419(0x793)](_0x220211['iWqqZ'](_0x220211[_0x427419(0x468)]('\x20\x20'+_0x220211[_0x427419(0xa73)]('0x',_0x4cd964['o'][_0x427419(0x1f5)+_0x427419(0x6cd)](0x1*-0x425+0xb3*0x23+-0x1444*0x1))[_0x427419(0x1d2)+'d'](-0x1266+0x1*0xe44+-0x52*-0xd)+'\x20'+_0x4cd964['k']['padEn'+'d'](0x5*-0x601+0x717*-0x1+0x2527),'\x20')+String(_0x499fb4)['padEn'+'d'](0x187c+-0x13*0x11f+0x31f*-0x1)+'\x20',_0x4cd964[_0x427419(0xb2c)]||''));}_0x22cd39[_0x427419(0x793)]('');}}if(_0x4a247d[_0x427419(0xaca)+_0x427419(0x3ba)]&&_0x4a247d[_0x427419(0xaca)+_0x427419(0x3ba)][_0x427419(0x3f7)+'h']){_0x22cd39[_0x427419(0x793)](_0x427419(0xaca)+_0x427419(0x3ba));for(var _0x47090f=0x1*0x1f19+-0x2*-0xd21+-0x395b;_0x47090f<_0x4a247d['warni'+_0x427419(0x3ba)][_0x427419(0x3f7)+'h'];_0x47090f++)_0x22cd39[_0x427419(0x793)](_0x220211['EQhcW']+_0x4a247d['warni'+_0x427419(0x3ba)][_0x47090f]);}return _0x22cd39['join']('\x0a');}}window['addEv'+_0x4b6c3b(0x6e3)+'stene'+'r'](_0x220211[_0x4b6c3b(0xa4d)],function(_0x4680f9){var _0x266ca4=_0x4b6c3b,_0x48a434={'vbhVb':_0x220211[_0x266ca4(0x9e5)],'MxPve':function(_0x4bb048,_0x5637cd,_0x9ba813){return _0x4bb048(_0x5637cd,_0x9ba813);}};if(_0x220211[_0x266ca4(0x484)](_0x220211[_0x266ca4(0xa08)],'jaCwF')){var _0x4d7ee8=_0x4680f9['data'];if(!_0x4d7ee8||_0x220211[_0x266ca4(0x75d)](_0x4d7ee8['__sak'+'ura'],_0xa1b757))return;try{if(_0x220211['qduZI'](_0x220211['xEeCH'],_0x266ca4(0x53e)))_0x186045['warni'+_0x266ca4(0x3ba)][_0x266ca4(0x793)](_0x220211[_0x266ca4(0x1f8)](_0x266ca4(0xb31)+'ER\x20UW'+'MK\x20CO'+_0x266ca4(0x2fe)+'OK\x20OV'+'ER\x20wi'+'ndow.'+'Unity'+_0x266ca4(0xa6a)+'dkit.'+'\x20The\x20'+'Runti'+_0x266ca4(0x535)+'\x20arme'+_0x266ca4(0x42d)+'\x20'+_0x220211[_0x266ca4(0x762)]+_0x220211['bfmML'],_0x266ca4(0x854)+_0x266ca4(0x3cb)+_0x266ca4(0x72e)+'ipt\x20i'+'n\x20Tam'+_0x266ca4(0x405)+_0x266ca4(0x85c)+_0x266ca4(0x31d)+_0x266ca4(0xa07)+_0x266ca4(0x775)+'.'));else{if(_0x220211[_0x266ca4(0x3a4)](_0x4d7ee8[_0x266ca4(0x27b)],_0x266ca4(0x308))){_0x220211[_0x266ca4(0x29f)](_0x3f6d4d)['set']({'host':_0x4d7ee8[_0x266ca4(0x1a9)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x4d7ee8[_0x266ca4(0x27b)]===_0x266ca4(0x7dc)+'t')_0x3f6d4d()['set'](_0x4d7ee8[_0x266ca4(0x7dc)+'t']);}}catch(_0x2373d9){if(_0x220211[_0x266ca4(0x3e3)](_0x220211['MKzAP'],_0x266ca4(0x2b1))){var _0x5928ae=_0x407da0[_0x266ca4(0x510)+_0x266ca4(0x376)+'t']||-0x10ca+-0x1dbd*0x1+0x31a7;if(_0x220211['GNnWa'](_0x5928ae,-0xd*0x83+-0x5*-0x33c+-0x719))_0x220211[_0x266ca4(0x970)](_0x413ed2,![]);}else console['warn'](_0x266ca4(0x7c8)+_0x266ca4(0x8ba)+_0x266ca4(0xa5b)+'l\x20upd'+'ate\x20f'+_0x266ca4(0x77c),_0x220211['ptxGu'](_0x220211[_0x266ca4(0x54a)],_0x563cd7),_0x2373d9);}}else{var _0x38616f=_0x4ce602&&_0x61dade['data'];if(!_0x38616f||_0x38616f['__sak'+_0x266ca4(0x40b)]!==_0x3bfe16||_0x38616f[_0x266ca4(0x27b)]!==_0x48a434['vbhVb'])return;_0x48a434[_0x266ca4(0x6e9)](_0x4907c6,_0x38616f[_0x266ca4(0x6c5)],_0x38616f['arg']);}});function _0x498df9(){_0x220211['mzUKy'](_0x299fde,!![]);}if(document[_0x4b6c3b(0x60e)])_0x498df9();else document['addEv'+'entLi'+'stene'+'r'](_0x4b6c3b(0x741)+_0x4b6c3b(0x2b9)+'Loade'+'d',_0x498df9,{'once':!![]});return;}window[_0x4b6c3b(0x75f)+_0x4b6c3b(0x2a3)+_0x4b6c3b(0xb23)]=window['__SAK'+_0x4b6c3b(0x2a3)+_0x4b6c3b(0xb23)]||{'at':Date[_0x4b6c3b(0x5a5)]()};function _0x3ec60e(_0x8048a4,_0x3a2ad4){var _0xa1b3f0=_0x4b6c3b,_0x3f08f3={'hAXsU':_0x220211[_0xa1b3f0(0x802)]},_0x2db6d5={'__sakura':_0xa1b757,'kind':_0x8048a4};if(_0x3a2ad4){for(var _0x50e31a in _0x3a2ad4)_0x2db6d5[_0x50e31a]=_0x3a2ad4[_0x50e31a];}try{if(window[_0xa1b3f0(0x676)+'t']&&window[_0xa1b3f0(0x676)+'t']!==window)window['paren'+'t'][_0xa1b3f0(0x5ea)+_0xa1b3f0(0x904)+'e'](_0x2db6d5,'*');}catch(_0x1482a0){}try{if('ADcyA'!=='ADcyA'){var _0x2f221f=_0x43b2e2;if(_0x2f221f&&_0x2f221f['el'])_0x2f221f['el'][_0xa1b3f0(0x855)][_0xa1b3f0(0xb12)+'ay']=_0x361c42?'':_0xa1b3f0(0xae5);var _0x36dccd=_0x4dd36a;if(_0x36dccd&&_0x36dccd['cv'])_0x36dccd['cv'][_0xa1b3f0(0x855)]['displ'+'ay']=_0x289e4c?'':_0x3f08f3[_0xa1b3f0(0x53d)];}else{if(window['top']&&window[_0xa1b3f0(0x403)]!==window)window[_0xa1b3f0(0x403)][_0xa1b3f0(0x5ea)+_0xa1b3f0(0x904)+'e'](_0x2db6d5,'*');}}catch(_0x5ca19d){}}console['log'](_0x220211[_0x4b6c3b(0x2e4)](_0x220211[_0x4b6c3b(0x996)],_0x596a6f),_0x220211['vuvkh'](_0x220211[_0x4b6c3b(0x6ab)](_0x220211['DrPvE'],_0x563cd7),_0x220211[_0x4b6c3b(0x71f)]),{'host':_0x3a4971,'href':location['href'],'version':_0x596a6f}),_0x3ec60e(_0x4b6c3b(0x308),{'host':_0x3a4971,'role':_0x501c58});var _0x14db79=window[_0x4b6c3b(0x75f)+_0x4b6c3b(0x2a3)+'W__']&&window[_0x4b6c3b(0x75f)+_0x4b6c3b(0x2a3)+_0x4b6c3b(0xb23)]['at']||Date[_0x4b6c3b(0x5a5)]();window['addEv'+'entLi'+_0x4b6c3b(0x3ef)+'r']('messa'+'ge',function(_0x2f666f){var _0x23cfc3=_0x4b6c3b;if(_0x23cfc3(0x23a)===_0x23cfc3(0x69a)){_0x1fa879['preve'+_0x23cfc3(0xaf3)+_0x23cfc3(0xa69)](),_0x5a4f7a(!_0xbd56be[_0x23cfc3(0x7fe)]);return;}else try{var _0x28bfa3=_0x2f666f&&_0x2f666f[_0x23cfc3(0x315)];if(!_0x28bfa3||_0x28bfa3[_0x23cfc3(0x1e6)+_0x23cfc3(0x40b)]!==_0xa1b757||_0x220211[_0x23cfc3(0x4e4)](_0x28bfa3[_0x23cfc3(0x27b)],_0x23cfc3(0x6c5)))return;_0x3c8bb4(_0x28bfa3[_0x23cfc3(0x6c5)],_0x28bfa3['arg']);}catch(_0x346a9d){}});try{var _0x2dccd4=new BroadcastChannel(_0x220211['ibBbI']);_0x2dccd4['onmes'+_0x4b6c3b(0xa30)]=function(_0xc26852){var _0x4720e8=_0x4b6c3b,_0x5038a6=_0xc26852[_0x4720e8(0x315)];if(_0x5038a6&&_0x220211[_0x4720e8(0x35a)](_0x5038a6[_0x4720e8(0x1e6)+'ura'],_0xa1b757)&&_0x220211['gJqpO'](_0x5038a6[_0x4720e8(0x27b)],'cmd'))_0x220211[_0x4720e8(0x1fc)](_0x3c8bb4,_0x5038a6[_0x4720e8(0x6c5)],_0x5038a6['arg']);};}catch(_0xd7627d){}var _0x48d7c5=[];(function _0x2fc062(){var _0xa25e21=_0x4b6c3b,_0x59b306={'baeew':function(_0x1ec46e,_0x36acfd){return _0x1ec46e!==_0x36acfd;},'yKqVv':_0x220211[_0xa25e21(0x5d3)],'hmPsR':function(_0xb628de,_0x1be2b8){return _0xb628de(_0x1be2b8);}},_0x45cede=[_0x220211[_0xa25e21(0x816)],_0x220211['qmROo'],_0xa25e21(0x517),'info',_0xa25e21(0xa9d)];for(var _0x42c3e0=0x12cd*-0x1+0x6ff+-0x5e7*-0x2;_0x42c3e0<_0x45cede[_0xa25e21(0x3f7)+'h'];_0x42c3e0++){if(_0x220211[_0xa25e21(0x484)]('qeKvI',_0x220211['sUOtX']))(function(_0x34bf63){var _0x13c646=_0xa25e21,_0x4f5981={'EnlHT':function(_0x10083c,_0x2298a4){return _0x59b306['baeew'](_0x10083c,_0x2298a4);},'qlmXb':'eHWUX','ONpxi':function(_0x1e70d3,_0x3a6868){return _0x1e70d3===_0x3a6868;},'VjBPb':function(_0x5637a2,_0x377595){return _0x59b306['baeew'](_0x5637a2,_0x377595);},'VXzqQ':function(_0x4d54c4,_0x50f0c6){var _0x2ce835=_0x3979;return _0x59b306[_0x2ce835(0x672)](_0x4d54c4,_0x50f0c6);},'GJNwo':_0x59b306[_0x13c646(0x548)],'VTEJM':function(_0x4bbbf3,_0x4a34f8){return _0x4bbbf3<_0x4a34f8;}},_0x21d061=console[_0x34bf63];if(typeof _0x21d061!==_0x13c646(0x971)+_0x13c646(0x347))return;console[_0x34bf63]=function(){var _0x59733e=_0x13c646,_0x19e0b0={'zdSIJ':function(_0x190129,_0x2a605b){return _0x190129+_0x2a605b;}};try{var _0x16eb93='';for(var _0x588c6c=0x1*0x23c5+-0x1*0x1703+-0xcc2;_0x588c6c<arguments[_0x59733e(0x3f7)+'h'];_0x588c6c++){if(_0x4f5981['EnlHT'](_0x59733e(0x3c2),_0x4f5981[_0x59733e(0x913)])){var _0x509a60=_0x4df721[_0x59733e(0xaac)+_0x59733e(0xa6a)+_0x59733e(0x8ab)][_0x59733e(0x9a0)+'me'];_0x509a60['__sak'+'uraTa'+'g']=_0x19e0b0[_0x59733e(0x7ab)](_0x4727e3+':',_0x65acee[_0x59733e(0xa49)+'m']()[_0x59733e(0x1f5)+'ing'](0xcef+0x2*0xfee+-0x2ca7)[_0x59733e(0x689)](0x1d2c+-0x963+-0x13c7,0x3*-0x1b4+-0x1632+0x1b58)),_0x5d58c3=_0x509a60[_0x59733e(0x1e6)+_0x59733e(0x79f)+'g'];}else{var _0x3e9080=arguments[_0x588c6c];if(_0x4f5981['ONpxi'](typeof _0x3e9080,_0x59733e(0x62c)+'g'))_0x16eb93+=_0x3e9080;else{if(_0x3e9080&&_0x3e9080[_0x59733e(0x4b5)+'ge'])_0x16eb93+=_0x3e9080['messa'+'ge'];}}}if(_0x16eb93[_0x59733e(0x19e)+'Of'](_0x15d915)!==-(-0x1095+0x8e9+0x7ad*0x1))return _0x21d061[_0x59733e(0x5d9)](console,arguments);if(_0x4f5981['VjBPb'](_0x16eb93[_0x59733e(0x19e)+'Of'](_0x59733e(0xaac)+_0x59733e(0xa6a)+_0x59733e(0x8ab)),-(0x1*-0x905+-0x1f2d+-0x2833*-0x1))){if(_0x4f5981[_0x59733e(0x655)](_0x4f5981['GJNwo'],_0x4f5981['GJNwo']))_0xbc0e4f++,_0x1bd506[_0x59733e(0x4c8)]=!![];else{var _0x21195e=_0x16eb93[_0x59733e(0x689)](0x12e8+0x5*-0x703+0x1027,-0x1c59+-0x1*-0xa84+0x1301);if(_0x4f5981[_0x59733e(0xb35)](_0x48d7c5[_0x59733e(0x19e)+'Of'](_0x21195e),-(-0x9a*0x25+0x1*0xc3a+0xa09))&&_0x4f5981[_0x59733e(0x211)](_0x48d7c5['lengt'+'h'],-0xb6e*-0x2+0x1*-0x14d9+-0x1c7))_0x48d7c5[_0x59733e(0x793)](_0x21195e);}}}catch(_0x142ac7){}return _0x21d061[_0x59733e(0x5d9)](console,arguments);};}(_0x45cede[_0x42c3e0]));else{var _0x531f4b=_0x59b306['hmPsR'](_0x59336d,_0x573450);_0x3fd196[_0x164ed3]=_0x531f4b[_0xa25e21(0x608)],_0x7b0548[_0x2f9cb6]={'key':_0x531f4b[_0xa25e21(0x7a6)],'sane':_0x531f4b['sane'],'checked':_0x531f4b['check'+'ed'],'keyConsistent':_0x531f4b[_0xa25e21(0x8a4)+_0xa25e21(0x498)+_0xa25e21(0x3ff)],'keySource':_0x531f4b[_0xa25e21(0x5ef)+_0xa25e21(0xb02)]};}}}());var _0x291d7c={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x1973a7=null,_0x59950b=null,_0x5bb996=-(0x21f4+-0x1*0x59+-0x16*0x187),_0x53629c=null;function _0x282be2(_0x1ef515){var _0x12ab25=_0x4b6c3b;if(_0x220211[_0x12ab25(0x901)]===_0x220211['irchJ']){var _0x3f7031=(_0x12ab25(0x341)+_0x12ab25(0x38f)+'1|4|2'+'|3|9')['split']('|'),_0xfc52b4=-0x1f*-0xdb+0x2ed+-0x2*0xeb9;while(!![]){switch(_0x3f7031[_0xfc52b4++]){case'0':var _0x54b09f=_0x21431d(_0x220211[_0x12ab25(0xa2d)],'sk-mb'+'ody');continue;case'1':_0x416829[_0x12ab25(0xac1)+_0x12ab25(0x249)+'d'](_0x532573);continue;case'2':_0x416829[_0x12ab25(0x60e)]=_0x54b09f;continue;case'3':_0x416829[_0x12ab25(0x750)]=_0x2b8999;continue;case'4':_0x416829[_0x12ab25(0xac1)+_0x12ab25(0x249)+'d'](_0x54b09f);continue;case'5':var _0x416829=_0x3cc015(_0x220211[_0x12ab25(0xa2d)],'sk-ca'+'rd'+(_0x86054d?_0x12ab25(0x786):''));continue;case'6':var _0x2b8999=_0x220211[_0x12ab25(0x21a)](_0x4deca2,_0x12ab25(0x2aa),_0x220211[_0x12ab25(0x310)],'<stro'+_0x12ab25(0x359)+_0x5e11df+(_0x12ab25(0x611)+'ong>'));continue;case'7':_0x532573['appen'+'dChil'+'d'](_0x2b8999);continue;case'8':var _0x532573=_0x3213a6('div',_0x220211['vsZeZ']);continue;case'9':return _0x416829;}break;}}else try{if(!_0x1ef515)return;var _0x26c327=_0x1ef515[_0x12ab25(0x930)+'nce']?_0x1ef515[_0x12ab25(0x930)+_0x12ab25(0x2b0)]['expor'+'ts']:_0x1ef515[_0x12ab25(0x76e)+'ts']||null;if(!_0x26c327)return;if(!_0x53629c)try{_0x53629c=Object[_0x12ab25(0x33a)](_0x26c327)['slice'](0x259b+0x10c9+-0x3664,0x6d3+-0x13*-0x94+-0x1*0x11b7);}catch(_0xb0c17c){}var _0x115aa0=_0x26c327['memor'+'y'];if(_0x115aa0&&_0x115aa0[_0x12ab25(0x1c2)+'r']&&_0x220211['EXWOs'](_0x115aa0[_0x12ab25(0x1c2)+'r'][_0x12ab25(0xae9)+'ength'],0x9a3*0x1+0x2*-0x18e+-0x687*0x1)){if(_0x220211[_0x12ab25(0x733)]!==_0x12ab25(0x407))_0x59950b=_0x115aa0,_0x5bb996=_0x220211[_0x12ab25(0x55a)](Date['now'](),_0x14db79);else return _0x2ed4fe['sourc'+'e']=_0x12ab25(0x576)+'w.'+_0x483666[_0x5b9450]+(_0x12ab25(0x38b)+'le'),_0x4a807a;}}catch(_0x2a578e){}}function _0x4fa0fb(){var _0x5571e8=_0x4b6c3b,_0x3fd822={'PlTIV':function(_0x224797){return _0x224797();},'PSuAV':function(_0x288e96,_0x4bfa90){return _0x288e96!==_0x4bfa90;},'YfzMO':_0x5571e8(0x6c6),'SeYpC':_0x220211['kAJXO'],'NPFKP':function(_0x18f6c9,_0x3c0348){var _0x7d492d=_0x5571e8;return _0x220211[_0x7d492d(0x40f)](_0x18f6c9,_0x3c0348);},'adFOK':_0x220211['hCQry'],'reUDV':'dofsv'};try{if(_0x5571e8(0x9c6)===_0x5571e8(0x1ce)){if(_0x4c19c7[_0x5571e8(0x7fe)])_0xc08240(!![]);}else{if(_0x220211[_0x5571e8(0xb3e)](typeof WebAssembly,_0x5571e8(0x485)+_0x5571e8(0x5d5)))return;var _0x33de25=[_0x5571e8(0x930)+_0x5571e8(0x289)+'e',_0x5571e8(0x930)+'ntiat'+'eStre'+'aming'];for(var _0x3a153b=-0x1cb+-0x1a1f+-0x94e*-0x3;_0x220211['fzzXU'](_0x3a153b,_0x33de25['lengt'+'h']);_0x3a153b++){(function(_0x29f940){var _0x757c10=_0x5571e8,_0x44a631=WebAssembly[_0x29f940];if(typeof _0x44a631!=='funct'+_0x757c10(0x347)||_0x44a631[_0x757c10(0x1e6)+'uraMe'+_0x757c10(0xa42)+'ap'])return;var _0x387743=function(){var _0x157cd8=_0x757c10,_0x2b9805={'vSqRV':function(_0x7d2a8a,_0x18014e){return _0x7d2a8a(_0x18014e);},'hoLKe':function(_0x92a2c8){return _0x3fd822['PlTIV'](_0x92a2c8);}};if(_0x3fd822['PSuAV'](_0x3fd822[_0x157cd8(0x4dd)],_0x3fd822[_0x157cd8(0xa92)])){var _0x1269be=_0x44a631['apply'](this,arguments);try{if(_0x1269be&&_0x3fd822[_0x157cd8(0x494)](typeof _0x1269be[_0x157cd8(0x78a)],_0x3fd822['adFOK']))_0x1269be[_0x157cd8(0x78a)](_0x282be2,function(){});else _0x282be2(_0x1269be);}catch(_0x15cc2b){}return _0x1269be;}else{if(_0x4148e9)_0x4fde32['textC'+'onten'+'t']=(_0x2b9805[_0x157cd8(0x692)](_0x13bf91,_0x2a3e50['value'])||0x7a1*0x1+0x1039+0x4c5*-0x5)['toFix'+'ed'](0x175d*-0x1+-0x12+0xc8*0x1e)+'x';_0x2b9805[_0x157cd8(0x42a)](_0x5bfe38);}};_0x387743['__sak'+_0x757c10(0x595)+'moryT'+'ap']=!![];try{if(_0x3fd822['reUDV']!==_0x3fd822[_0x757c10(0x720)])return _0x34143d[_0x757c10(0x7aa)+'d']++,_0x26d2cd[_0x757c10(0x973)+_0x757c10(0x4ab)]=_0x4ca4b4[_0x757c10(0x973)+'rror']||_0x20f294(_0x4b9434&&_0x51536b[_0x757c10(0x4b5)+'ge']||_0x1c7b65)[_0x757c10(0x689)](-0x50b*0x1+-0x1651+-0xce*-0x22,0x226*0xf+-0x4ad+-0x1b15),null;else Object[_0x757c10(0x79c)+_0x757c10(0x2d0)+_0x757c10(0x9ef)](_0x387743,'name',{'value':_0x44a631[_0x757c10(0x445)],'configurable':!![]});}catch(_0x29e56d){}WebAssembly[_0x29f940]=_0x387743;}(_0x33de25[_0x3a153b]));}}}catch(_0x151895){}}var _0x458e96=null,_0x523f84=null,_0x51bfd8={},_0x48a15f=[],_0x59658a=[],_0x565286=[{'type':'FPSco'+'ntrol'+'ler','keep':!![]},{'type':_0x4b6c3b(0x44f)+_0x4b6c3b(0x728)+'pt','keep':!![]},{'type':_0x220211['RKLvG'],'keep':![]},{'type':'TDM_G'+'ameMa'+'nager','keep':!![]},{'type':'GG_Ga'+_0x4b6c3b(0x3de)+'ager','keep':!![]},{'type':_0x220211[_0x4b6c3b(0x640)],'keep':!![],'many':!![]},{'type':_0x4b6c3b(0xa75)+'rkPla'+'yerAn'+'imati'+_0x4b6c3b(0x520),'keep':!![],'many':!![]},{'type':_0x220211[_0x4b6c3b(0x3a8)],'keep':!![],'many':!![]},{'type':_0x4b6c3b(0xb34)+_0x4b6c3b(0x7ad),'keep':!![],'many':!![]}],_0x39b607=['Assem'+'bly-C'+_0x4b6c3b(0x2ea)+_0x4b6c3b(0x8df),_0x220211[_0x4b6c3b(0x26d)],_0x4b6c3b(0x85d)+_0x4b6c3b(0x30a)+_0x4b6c3b(0x4fe)+_0x4b6c3b(0x495)+'ll',_0x220211['xtLWf'],_0x220211['UCVVx'],'__Gen'+'erate'+'d'];(function _0x3faa85(){var _0x3249ed=_0x4b6c3b,_0x114978={'IXSXq':function(_0x5d9c78){var _0x225b60=_0x3979;return _0x220211[_0x225b60(0x29f)](_0x5d9c78);}};if(_0x220211[_0x3249ed(0x74e)]('unUCs','unUCs'))_0x19af6d=_0x114978['IXSXq'](_0x2a1a88);else try{var _0x1868e4=window[_0x3249ed(0xaac)+'WebMo'+'dkit']&&window['Unity'+_0x3249ed(0xa6a)+'dkit']['Runti'+'me'];if(!_0x1868e4||_0x220211['tBSYZ'](typeof _0x1868e4[_0x3249ed(0x769)+'ePlug'+'in'],_0x3249ed(0x971)+_0x3249ed(0x347))){if(_0x220211[_0x3249ed(0x55c)]!==_0x220211[_0x3249ed(0x55c)]){var _0x1af99f=_0x4c0e75[_0x4f2423],_0xabfdd9=_0x2a1053(_0x3249ed(0xb54)+'n',_0x3249ed(0x306)+'b','<smal'+'l>'+_0x1af99f[_0x3249ed(0x5e0)]+_0x220211[_0x3249ed(0x4df)]);_0xabfdd9[_0x3249ed(0x226)]='butto'+'n',_0xabfdd9['title']=_0x1af99f[_0x3249ed(0x5e0)],function(_0x41a88f){var _0x51ae26=_0x3249ed,_0x148499={'mMFfu':function(_0x360bb2,_0x299816){return _0x360bb2(_0x299816);}};_0xabfdd9[_0x51ae26(0x438)+'ck']=function(){_0x148499['mMFfu'](_0x917e58,_0x41a88f);};}(_0x1af99f['id']),_0x22665f[_0x1af99f['id']]=_0xabfdd9,_0xed84d8['appen'+_0x3249ed(0x249)+'d'](_0xabfdd9);}else{_0x291d7c[_0x3249ed(0x517)]=_0x3249ed(0x9a0)+'me.cr'+_0x3249ed(0x7ca)+'lugin'+'\x20unav'+'ailab'+'le';return;}}_0x291d7c[_0x3249ed(0x90f)+_0x3249ed(0x7f0)]=!![],_0x523f84=_0x1868e4[_0x3249ed(0x769)+_0x3249ed(0x59f)+'in']({'name':_0x220211[_0x3249ed(0x995)],'version':_0x596a6f,'referencedAssemblies':_0x39b607[_0x3249ed(0x689)]()}),_0x291d7c['ok']=!![];try{var _0x4cf5ef=window[_0x3249ed(0xaac)+'WebMo'+_0x3249ed(0x8ab)][_0x3249ed(0x9a0)+'me'];_0x4cf5ef['__sak'+_0x3249ed(0x79f)+'g']=_0x596a6f+':'+Math[_0x3249ed(0xa49)+'m']()[_0x3249ed(0x1f5)+_0x3249ed(0x6cd)](-0xb*-0x1b1+0x8*0x425+-0x339f)[_0x3249ed(0x689)](0x24cc+-0x147f+0x104b*-0x1,0x115f+0x1837*-0x1+0x6e2),_0x1973a7=_0x4cf5ef[_0x3249ed(0x1e6)+_0x3249ed(0x79f)+'g'];}catch(_0x23d2e4){}_0x220211['mjuiO'](_0x338f0e),_0x291d7c[_0x3249ed(0x30c)+'Regis'+_0x3249ed(0x978)]=_0x48a15f['lengt'+'h'],_0x4fa0fb(),_0x291d7c[_0x3249ed(0x4ed)+_0x3249ed(0x5e1)]=!![];}catch(_0x3c2a5c){_0x291d7c[_0x3249ed(0x517)]=String(_0x3c2a5c&&_0x3c2a5c['messa'+'ge']||_0x3c2a5c);}}());var _0x2902cc=new Float32Array(-0xab8+0x1cb4+0x1*-0x11fb),_0x41fd35=new Int32Array(_0x2902cc['buffe'+'r']);function _0x31452a(_0x423319){return _0x2902cc[-0xe7*0x9+0x26d7+0x2*-0xf5c]=_0x423319,_0x41fd35[-0x1dc8+0x3f*-0x47+-0x2f41*-0x1];}function _0x223c4d(_0x325562){var _0x1d447c=_0x4b6c3b;if(_0x220211[_0x1d447c(0x7f2)]==='PMdXY')return _0x41fd35[-0xb*0x1b1+-0x34a*0x1+0x3b*0x5f]=_0x325562|-0x1056+0x3*0x2d9+0x7cb,_0x2902cc[-0xd*0xbb+0x7*0x505+-0x19a4];else _0x247405[_0x1d447c(0xad0)+_0x1d447c(0x3f8)][_0x1d447c(0x8fe)+'Text'](_0x169ce3)['then'](function(){var _0x88ce47=_0x1d447c;_0x19f738['textC'+'onten'+'t']=_0x88ce47(0x8f1)+'d';});}var _0x4b0787={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x194389(){var _0x53d3f0=_0x4b6c3b,_0x10398c={'VSmsp':_0x220211['oZbmh']};try{if(_0x523f84&&_0x523f84[_0x53d3f0(0x701)+_0x53d3f0(0xb01)]){var _0x5e4b73=_0x523f84['_runt'+_0x53d3f0(0xb01)];if(typeof _0x5e4b73[_0x53d3f0(0x7a9)+'veGam'+'e']==='funct'+'ion'){if(_0x220211['dIDLk'](_0x220211['hzFAR'],_0x53d3f0(0x277))){var _0x422b83=_0x4dcfae(_0x332baf+_0x513faa(_0x3cecc9[_0x33c691][-0x1e9+-0x2693*0x1+0x1*0x287c],-0x1197+0x48a*0x3+0x409),_0x10398c[_0x53d3f0(0x39d)]);if(_0x422b83!==_0x3c6a3b)_0x323822['tag'][_0xaffa7e[_0x298dbf][-0x1*-0x1459+-0x14c*-0x4+-0x1988]]=_0x422b83;}else{var _0x29025d=_0x5e4b73[_0x53d3f0(0x7a9)+'veGam'+'e']();if(_0x29025d)return _0x4b0787[_0x53d3f0(0x5d4)+'e']='plugi'+_0x53d3f0(0x1e4)+_0x53d3f0(0x259)+_0x53d3f0(0x35d)+'lveGa'+'me()',_0x29025d;}}if(_0x5e4b73['_game'])return _0x4b0787[_0x53d3f0(0x5d4)+'e']=_0x220211[_0x53d3f0(0x3e1)],_0x5e4b73[_0x53d3f0(0x8a0)];}}catch(_0x5bd546){}try{var _0x39bbee=window[_0x53d3f0(0xaac)+'WebMo'+'dkit']&&window[_0x53d3f0(0xaac)+_0x53d3f0(0xa6a)+'dkit'][_0x53d3f0(0x9a0)+'me'];if(_0x39bbee&&_0x220211[_0x53d3f0(0x3a4)](typeof _0x39bbee[_0x53d3f0(0x7a9)+_0x53d3f0(0x6e1)+'e'],_0x53d3f0(0x971)+'ion')){var _0x235f60=_0x39bbee[_0x53d3f0(0x7a9)+_0x53d3f0(0x6e1)+'e']();if(_0x235f60)return _0x4b0787[_0x53d3f0(0x5d4)+'e']=_0x220211[_0x53d3f0(0x9a9)],_0x235f60;}if(_0x39bbee&&_0x39bbee[_0x53d3f0(0x8a0)])return _0x220211[_0x53d3f0(0x484)](_0x53d3f0(0x215),_0x53d3f0(0x215))?_0x4ce0c3&&_0x372e00['buffe'+'r']?_0x300df4[_0x53d3f0(0x1c2)+'r'][_0x53d3f0(0xae9)+'ength']:0x137b*0x1+0x1338+-0x26b3:(_0x4b0787[_0x53d3f0(0x5d4)+'e']=_0x53d3f0(0x9a0)+'me._g'+_0x53d3f0(0x476),_0x39bbee);}catch(_0x4fe380){}try{var _0x21e6f6=window[_0x53d3f0(0x4d7)+_0x53d3f0(0x356)+_0x53d3f0(0x2b0)]||window['unity'+_0x53d3f0(0x36a)]||window['game'];if(_0x21e6f6)return _0x4b0787['sourc'+'e']=_0x53d3f0(0x576)+_0x53d3f0(0x386)+_0x53d3f0(0x9b6),_0x21e6f6;}catch(_0x3e6c50){}try{if(typeof game!==_0x220211[_0x53d3f0(0x660)]&&game)return _0x4b0787['sourc'+'e']='bare\x20'+_0x53d3f0(0x5fc)+_0x53d3f0(0x924)+'ng',game;}catch(_0x4dda43){}try{var _0x28060e=Object[_0x53d3f0(0x33a)](window);for(var _0x2fda84=0x1606+0xd*0xee+-0x3b*0x94;_0x220211[_0x53d3f0(0x457)](_0x2fda84,_0x28060e[_0x53d3f0(0x3f7)+'h'])&&_0x2fda84<-0x166b+0x1*-0x1069+0x292c;_0x2fda84++){var _0x5b9d3b=window[_0x28060e[_0x2fda84]];if(_0x5b9d3b&&typeof _0x5b9d3b==='objec'+'t'&&_0x5b9d3b[_0x53d3f0(0xa68)+'e']&&_0x5b9d3b['Modul'+'e']['HEAPU'+'8']&&_0x5b9d3b[_0x53d3f0(0xa68)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x4b0787['sourc'+'e']=_0x220211['CBjHT']+_0x28060e[_0x2fda84]+('.Modu'+'le'),_0x5b9d3b;}}catch(_0x1bbede){}return _0x4b0787['sourc'+'e']=null,null;}function _0x497845(){var _0x5d7d9=_0x4b6c3b;try{if(_0x59950b&&_0x59950b['buffe'+'r']&&_0x59950b[_0x5d7d9(0x1c2)+'r'][_0x5d7d9(0xae9)+'ength'])return _0x4b0787['sourc'+'e']=_0x4b0787[_0x5d7d9(0x5d4)+'e']||'insta'+_0x5d7d9(0x289)+'e().e'+_0x5d7d9(0x2a1)+'s.mem'+_0x5d7d9(0x643),new Uint8Array(_0x59950b[_0x5d7d9(0x1c2)+'r']);}catch(_0x46617a){}try{var _0xb6c756=_0x194389();if(_0xb6c756&&_0xb6c756[_0x5d7d9(0xa68)+'e']&&_0xb6c756[_0x5d7d9(0xa68)+'e'][_0x5d7d9(0xa7c)+'8']&&_0xb6c756[_0x5d7d9(0xa68)+'e'][_0x5d7d9(0xa7c)+'8'][_0x5d7d9(0x1c2)+'r'])return _0xb6c756[_0x5d7d9(0xa68)+'e']['HEAPU'+'8'];}catch(_0x5e8530){}return null;}function _0x3ce0ed(){var _0x23d2a2=_0x4b6c3b;if(_0x220211[_0x23d2a2(0xb3e)]('FOJWj',_0x220211['blTZy']))try{if(_0x1e5564[_0x1d9dd1]['conte'+'ntWin'+_0x23d2a2(0x635)])_0x2e55fa[_0x537adb][_0x23d2a2(0x279)+_0x23d2a2(0x2e8)+_0x23d2a2(0x635)]['postM'+'essag'+'e'](_0x3283cb,'*');}catch(_0x508f7e){}else{var _0x290dd4=_0x497845();if(!_0x290dd4)return null;try{return'Kujsx'!==_0x220211[_0x23d2a2(0x646)]?new DataView(_0x290dd4[_0x23d2a2(0x1c2)+'r'],_0x290dd4[_0x23d2a2(0x9d3)+_0x23d2a2(0xa81)],_0x290dd4['byteL'+_0x23d2a2(0x2a5)]):(_0x138b2c[_0x23d2a2(0x5d4)+'e']='plugi'+'n._ru'+_0x23d2a2(0x259)+_0x23d2a2(0x3c4)+'e',_0x1c6aa5[_0x23d2a2(0x8a0)]);}catch(_0x5169e3){return null;}}}function _0x4094a9(_0x29677a,_0x44b9d6){var _0x3fc01c=_0x4b6c3b,_0x441504={'mAAlt':function(_0x19fb67){return _0x19fb67();},'iYOOF':_0x3fc01c(0xae5)};if('nHlwS'!==_0x220211[_0x3fc01c(0x2e6)]){var _0x16c675=_0x441504[_0x3fc01c(0x534)](_0x4bd559);if(_0x16c675&&_0x16c675['el'])_0x16c675['el']['style']['displ'+'ay']=_0x3fe36c['on']?'':_0x441504['iYOOF'];var _0xdfc986=_0x309f4e;if(_0xdfc986&&_0xdfc986['cv'])_0xdfc986['cv']['style']['displ'+'ay']=_0x3e66e3['on']&&_0x8c4ac5[_0x3fc01c(0x632)]?'':_0x3fc01c(0xae5);}else{var _0x53ec84=_0x3ce0ed();if(!_0x53ec84)return _0x4b0787['faile'+'d']++,_0x4b0787['lastE'+_0x3fc01c(0x4ab)]=_0x4b0787[_0x3fc01c(0x973)+_0x3fc01c(0x4ab)]||_0x220211[_0x3fc01c(0x865)],undefined;if(_0x29677a<-0x3e5*-0x3+0x1*-0x641+-0x56e||_0x29677a+(0x102f+-0x26d8+-0x78f*-0x3)>_0x53ec84[_0x3fc01c(0xae9)+_0x3fc01c(0x2a5)])return _0x4b0787[_0x3fc01c(0x7aa)+'d']++,_0x4b0787[_0x3fc01c(0x973)+_0x3fc01c(0x4ab)]=_0x4b0787[_0x3fc01c(0x973)+'rror']||_0x220211[_0x3fc01c(0x468)](_0x220211[_0x3fc01c(0x218)](_0x220211['VlsUp']('addre'+_0x3fc01c(0x8dc),_0x29677a[_0x3fc01c(0x1f5)+_0x3fc01c(0x6cd)](0x28*0x2+0x5*0x643+0x3*-0xa85)),_0x220211[_0x3fc01c(0x45f)]),_0x53ec84['byteL'+_0x3fc01c(0x2a5)][_0x3fc01c(0x1f5)+_0x3fc01c(0x6cd)](0x15a+-0x12db*0x1+0x1191)),undefined;try{if(_0x220211['CDdJV']!==_0x3fc01c(0x39c))return _0x753253['sourc'+'e']=_0x461f43[_0x3fc01c(0x5d4)+'e']||_0x3fc01c(0x930)+_0x3fc01c(0x289)+'e().e'+_0x3fc01c(0x2a1)+_0x3fc01c(0x335)+_0x3fc01c(0x643),new _0x7b8122(_0x488a52['buffe'+'r']);else{_0x4b0787['ok']++;switch(_0x44b9d6){case'u8':return _0x53ec84[_0x3fc01c(0x5a0)+'nt8'](_0x29677a);case'i8':return _0x53ec84[_0x3fc01c(0x81f)+'t8'](_0x29677a);case _0x3fc01c(0xab4):return _0x53ec84[_0x3fc01c(0x81f)+_0x3fc01c(0x6df)](_0x29677a,!![]);case _0x220211[_0x3fc01c(0x7a5)]:return _0x53ec84['getUi'+_0x3fc01c(0x69e)](_0x29677a,!![]);case _0x220211['oZbmh']:return _0x53ec84['getIn'+_0x3fc01c(0x330)](_0x29677a,!![]);case _0x3fc01c(0x934):return _0x53ec84[_0x3fc01c(0x5a0)+_0x3fc01c(0x5f7)](_0x29677a,!![]);case _0x220211[_0x3fc01c(0x4ca)]:return _0x53ec84[_0x3fc01c(0x1c4)+'oat32'](_0x29677a,!![]);case'f64':return _0x53ec84[_0x3fc01c(0x1c4)+_0x3fc01c(0x2c2)](_0x29677a,!![]);case'v2':case'v3':case'v4':return _0x53ec84[_0x3fc01c(0x1c4)+'oat32'](_0x29677a,!![]);default:return _0x53ec84[_0x3fc01c(0x81f)+_0x3fc01c(0x330)](_0x29677a,!![]);}}}catch(_0x49845f){return _0x4b0787[_0x3fc01c(0x7aa)+'d']++,_0x4b0787[_0x3fc01c(0x973)+_0x3fc01c(0x4ab)]=_0x4b0787[_0x3fc01c(0x973)+_0x3fc01c(0x4ab)]||String(_0x49845f&&_0x49845f[_0x3fc01c(0x4b5)+'ge']||_0x49845f)['slice'](0x9*-0x3a3+-0x2145+0x4200,-0xa*-0x126+0x1*-0x20a1+-0x1f7*-0xb),undefined;}}}function _0x1ed598(_0x4e1022,_0x5068d5,_0x1c3885){var _0x3a9ffa=_0x4b6c3b,_0x30dd06={'lHmtn':_0x3a9ffa(0x44f)+'hScri'+'pt','Gikdw':_0x220211['TRdNW']},_0x39c0aa=_0x3ce0ed();if(!_0x39c0aa||_0x220211['kdeAx'](_0x4e1022,0x4b*0x31+-0xbed+0x137*-0x2)||_0x220211[_0x3a9ffa(0x7da)](_0x4e1022+(0x1260+0x23a3+-0x35ff),_0x39c0aa[_0x3a9ffa(0xae9)+_0x3a9ffa(0x2a5)]))return![];try{switch(_0x5068d5){case'u8':case'i8':_0x39c0aa['setUi'+_0x3a9ffa(0x492)](_0x4e1022,_0x1c3885&-0x4f*0x2b+0x10*-0xa4+0xc*0x20b);break;case'i16':case _0x3a9ffa(0x6dc):_0x39c0aa[_0x3a9ffa(0x503)+_0x3a9ffa(0x6df)](_0x4e1022,_0x220211[_0x3a9ffa(0xa28)](_0x1c3885,-0x4*-0x943+-0x125c+-0x12b0),!![]);break;case'i32':case _0x220211[_0x3a9ffa(0x40d)]:_0x39c0aa[_0x3a9ffa(0x503)+'t32'](_0x4e1022,_0x1c3885|0x205b+0x1f83+-0x3fde,!![]);break;case _0x3a9ffa(0x41e):_0x39c0aa['setFl'+_0x3a9ffa(0x6d0)](_0x4e1022,_0x1c3885,!![]);break;default:_0x39c0aa[_0x3a9ffa(0x503)+'t32'](_0x4e1022,_0x220211[_0x3a9ffa(0x840)](_0x1c3885,-0x9*-0x187+0x2375+-0x3134),!![]);}return!![];}catch(_0x309307){if(_0x220211['HLpvh'](_0x220211['zxTGd'],_0x220211[_0x3a9ffa(0x4e0)])){var _0x3c7c41=_0x180ff4[_0x440f0c[_0x12e840]],_0xb8f85a=_0x4e6130(_0x3a9ffa(0x7c5)+_0x3a9ffa(0x282)+_0x3a9ffa(0x664)+'nc',_0x3c7c41[_0x3a9ffa(0x47b)]);_0xb8f85a[_0x3a9ffa(0x709)]=_0x3c7c41[_0x3a9ffa(0x709)],_0xb8f85a[_0x3a9ffa(0xaaf)+_0x3a9ffa(0x96d)+'s']=_0x3c7c41[_0x3a9ffa(0xaaf)+_0x3a9ffa(0x8ad)]-_0x364896,_0xb8f85a['isLoc'+'al']=!!_0x42ed3c&&_0xb8f85a['refs']['fps']==='0x'+_0x5a879f['toStr'+'ing'](-0x2491+0xf15+-0xe*-0x18a);if(_0xb8f85a['refs'][_0x3a9ffa(0xa13)+'h']){var _0x3b160a=_0x39858e(_0xb8f85a['refs'][_0x3a9ffa(0xa13)+'h'],-0x1*-0x1e32+0xd79*-0x1+-0x10a9);_0xb8f85a[_0x3a9ffa(0xa13)+'h']=_0x35d408(_0x3b160a,_0x30dd06[_0x3a9ffa(0xaeb)],_0x30dd06[_0x3a9ffa(0x869)]);}_0xb69bdc['playe'+'rs'][_0x3a9ffa(0x793)](_0xb8f85a);}else return![];}}var _0x1605e7={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x4b6c3b(0x28c)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x4b6c3b(0x28c)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x34252e(_0x45cea1){var _0x10caf5=_0x4b6c3b;if('xIIXI'===_0x220211[_0x10caf5(0x285)]){var _0x76a3b0='';for(var _0x1f6d94=-0x3d*-0x10+-0x1*0x1daa+0x19da;_0x1f6d94<_0x45cea1[_0x10caf5(0x3f7)+'h'];_0x1f6d94++){var _0x308c20=_0x45cea1[_0x1f6d94][_0x10caf5(0x1f5)+_0x10caf5(0x6cd)](0x3*-0x6f9+-0x3*-0x767+0x1*-0x13a);_0x76a3b0+=_0x220211[_0x10caf5(0x218)](_0x308c20[_0x10caf5(0x3f7)+'h']<0x13c4+-0x12*-0x133+-0x2958?'0':'',_0x308c20);}return _0x76a3b0;}else _0x2cdf06['sane']=![];}function _0x2e2f2f(_0x55f3e1,_0x3df798,_0x2e4661){var _0x4e2848=_0x4b6c3b,_0x1362c7=_0x3ce0ed();if(!_0x1362c7)return _0x4b0787[_0x4e2848(0x7aa)+'d']++,_0x4b0787[_0x4e2848(0x973)+_0x4e2848(0x4ab)]=_0x4b0787[_0x4e2848(0x973)+_0x4e2848(0x4ab)]||_0x4e2848(0x2c7)+_0x4e2848(0x931)+_0x4e2848(0xa12)+_0x4e2848(0x9b1)+_0x4e2848(0x298)+'e\x20not'+_0x4e2848(0x94c)+_0x4e2848(0x3ed)+'\x20via\x20'+'Runti'+'me.re'+_0x4e2848(0x9f5)+_0x4e2848(0x4ec)+')\x20or\x20'+_0x4e2848(0x3af)+_0x4e2848(0x262)+_0x4e2848(0x64b)+'al',null;if(_0x3df798<0x3*-0x4e1+0xee4+-0x41||_0x220211[_0x4e2848(0x9ab)](_0x3df798,_0x2e4661)>_0x1362c7[_0x4e2848(0xae9)+'ength'])return _0x4b0787['faile'+'d']++,_0x4b0787[_0x4e2848(0x973)+'rror']=_0x4b0787['lastE'+'rror']||_0x220211[_0x4e2848(0x3e5)](_0x220211[_0x4e2848(0xa65)](_0x220211[_0x4e2848(0x422)](_0x220211[_0x4e2848(0x5fe)],_0x220211[_0x4e2848(0xa93)](_0x55f3e1,_0x3df798)[_0x4e2848(0x1f5)+'ing'](0xa1d+0x94d*0x1+0x1*-0x135a)),'\x20past'+_0x4e2848(0x894)+_0x4e2848(0x266)+'0x'),_0x1362c7[_0x4e2848(0xae9)+'ength'][_0x4e2848(0x1f5)+_0x4e2848(0x6cd)](-0x3*-0x2a+-0xbf*0x2+0x88*0x2)),null;try{var _0x5b0079=new Uint8Array(_0x2e4661);for(var _0x564d26=-0x4b1*-0x5+-0x773+-0x1002;_0x564d26<_0x2e4661;_0x564d26++)_0x5b0079[_0x564d26]=_0x1362c7['getUi'+'nt8'](_0x220211['HyLXW'](_0x55f3e1,_0x3df798)+_0x564d26);return _0x4b0787['ok']++,_0x5b0079;}catch(_0xcf2983){return _0x4b0787[_0x4e2848(0x7aa)+'d']++,_0x4b0787['lastE'+_0x4e2848(0x4ab)]=_0x4b0787[_0x4e2848(0x973)+_0x4e2848(0x4ab)]||_0x220211['mWzuX'](String,_0xcf2983&&_0xcf2983['messa'+'ge']||_0xcf2983)[_0x4e2848(0x689)](-0x17d4+-0x1728+0x2efc,-0x7*-0x4a7+0xdf*-0x9+-0x1842),null;}}function _0x303b5b(_0x2e8018,_0x4e4967,_0x1decd1){var _0xa5b4e=_0x4b6c3b,_0x106131=_0x1605e7[_0x1decd1],_0x427ab6=_0x2e2f2f(_0x2e8018,_0x4e4967,_0x106131['size']);if(!_0x427ab6)return null;var _0x30cd5d=new DataView(_0x427ab6['buffe'+'r'],_0x427ab6['byteO'+'ffset'],_0x427ab6['byteL'+_0xa5b4e(0x2a5)]),_0x1a2e43=_0x30cd5d['getIn'+_0xa5b4e(0x330)](_0x106131[_0xa5b4e(0x7a6)],!![]),_0x5413bd=_0x30cd5d[_0xa5b4e(0x81f)+_0xa5b4e(0x330)](_0x106131['hidde'+'n'],!![]),_0x380010=_0x30cd5d['getUi'+'nt8'](_0x106131[_0xa5b4e(0x5a6)+'d'])&0x48*0x45+0x1a*0xdb+-0x29a5,_0x2d8680=_0x220211['JtxKw'](_0x1decd1,_0xa5b4e(0x1a7))?_0x30cd5d[_0xa5b4e(0x1c4)+_0xa5b4e(0x6d0)](_0x106131['fake'],!![]):_0x220211[_0xa5b4e(0x284)](_0x1decd1,_0xa5b4e(0x8b7))?_0x30cd5d['getIn'+_0xa5b4e(0x330)](_0x106131[_0xa5b4e(0x1f6)],!![]):_0x30cd5d['getUi'+_0xa5b4e(0x492)](_0x106131['fake']),_0x345048=_0x220211['QRxAN'](_0x30cd5d[_0xa5b4e(0x5a0)+'nt8'](_0x106131['activ'+'e']),-0xb20+0x1539+-0x4c*0x22);return{'keyAtOffset0':_0x1a2e43,'hidden':_0x5413bd,'inited':_0x380010,'fake':_0x2d8680,'act':_0x345048,'hex':_0x220211['gJYFz'](_0x34252e,_0x427ab6),'alt':_0x220211['VvBMp'](_0x1decd1,_0xa5b4e(0x8b7))?_0x220211[_0xa5b4e(0x56d)](_0x5413bd,_0x2d8680|0x2e*0x1f+-0x20c9+0x1b37):null};}function _0x4a377c(_0x2b760e,_0x32c178,_0x152915){var _0x5cc1e3=_0x4b6c3b;if(_0x2b760e===_0x220211['YNBAT'])return _0x220211[_0x5cc1e3(0x825)](_0x223c4d,_0x220211['qYjQF'](_0x32c178,_0x152915));if(_0x2b760e===_0x220211[_0x5cc1e3(0x6ac)])return _0x32c178^_0x152915|-0x11*0xb+0xb5*0x10+0x9*-0x12d;return _0x220211['NWUCc'](_0x220211['QRxAN'](_0x220211[_0x5cc1e3(0x4f8)](_0x32c178,_0x152915),0xece*0x2+0x1*-0x3cd+-0x18d0),-0x5*-0x6be+0x1fe+-0x23b4)?0xb1*0x2f+-0x1b35*0x1+-0x549:-0x184f+-0x1*0x1c4b+0x349a;}function _0xdbb562(_0x1a2d47,_0x5277e7,_0x5a7edc){var _0x74bbd9=_0x4b6c3b,_0x3c72cb=_0x1605e7[_0x5a7edc];if(!_0x3c72cb)return null;var _0x3a4128=_0x220211[_0x74bbd9(0x1fc)](_0x4094a9,_0x220211[_0x74bbd9(0xa93)](_0x220211[_0x74bbd9(0x1d9)](_0x1a2d47,_0x5277e7),_0x3c72cb['key']),'u8'),_0x3df018=_0x4094a9(_0x220211['ptxGu'](_0x1a2d47,_0x5277e7)+_0x3c72cb[_0x74bbd9(0x19d)+'n'],_0x74bbd9(0x28c)),_0x247548=_0x220211[_0x74bbd9(0x51c)](_0x4094a9,_0x1a2d47+_0x5277e7+_0x3c72cb['inite'+'d'],'u8'),_0x4970e5=_0x4094a9(_0x220211[_0x74bbd9(0xa21)](_0x1a2d47,_0x5277e7)+_0x3c72cb[_0x74bbd9(0x1f6)],_0x5a7edc===_0x74bbd9(0x1a7)?_0x220211['ilwPw']:_0x220211[_0x74bbd9(0xa3c)](_0x5a7edc,_0x220211[_0x74bbd9(0x6ac)])?'i32':'u8'),_0x1ddc58=_0x4094a9(_0x220211[_0x74bbd9(0xa73)](_0x1a2d47,_0x5277e7)+_0x3c72cb[_0x74bbd9(0x910)+'e'],'u8');if(_0x220211[_0x74bbd9(0x669)](_0x3a4128,undefined)||_0x3df018===undefined||_0x220211[_0x74bbd9(0x3aa)](_0x4970e5,undefined)||_0x1ddc58===undefined)return null;_0x3a4128&=-0x12*-0x75+0x59e*-0x1+-0x19d,_0x3df018|=0x4ca+0x1119+-0x1*0x15e3,_0x247548=(_0x247548||-0x6b7+-0x23fb+0x2ab2)&0x14a9+-0xbfb*0x3+0xf49,_0x1ddc58&=0xd*-0x2db+0x1ced+0x833;var _0x1028b6;if(_0x5a7edc==='obfF')_0x1028b6=_0x223c4d(_0x3df018^_0x3a4128);else{if(_0x5a7edc===_0x74bbd9(0x8b7))_0x1028b6=_0x3df018^_0x3a4128|0x1*0xf12+-0x1*0xb85+-0x38d;else _0x1028b6=((_0x3df018^_0x3a4128)&0x17*0x17b+0x192b*0x1+0x54b*-0xb)!==-0x8*0x3b8+-0x22bc+0x407c?-0xb*0x346+0x1841*0x1+0x5*0x25a:-0x252f+0x16e8+0xe47;}return{'real':_0x1028b6,'fake':_0x4970e5,'act':_0x1ddc58,'init':_0x247548,'key':_0x3a4128,'hidden':_0x3df018};}function _0xe3026c(_0xd66360,_0x253fd7,_0x232f51,_0x1eac4e){var _0x364c38=_0x4b6c3b,_0x962afc=(_0x364c38(0x599)+_0x364c38(0x705)+_0x364c38(0x633))['split']('|'),_0x5bf2d4=0x1ae9+-0xd*-0x24b+-0x42*0xdc;while(!![]){switch(_0x962afc[_0x5bf2d4++]){case'0':if(_0x220211['KYXgL'](_0x232f51,_0x220211[_0x364c38(0x37a)]))_0x103c99=_0x220211[_0x364c38(0x825)](_0x31452a,_0x1eac4e);else{if(_0x232f51===_0x364c38(0x8b7))_0x103c99=_0x1eac4e|0x53d+-0x106*0x5+-0x1f;else _0x103c99=_0x220211[_0x364c38(0x4d2)](_0x1eac4e?0x2e2*-0xc+-0x26f*0xa+0x141*0x2f:0xdf2+-0x1*0xfcc+0x1da,-0x793+0x26bd+-0x1e2b);}continue;case'1':if(!_0x52a1a9)return![];continue;case'2':var _0x52a1a9=_0x2e2f2f(_0xd66360,_0x253fd7,_0x2cef55[_0x364c38(0x884)]);continue;case'3':var _0x2cef55=_0x1605e7[_0x232f51];continue;case'4':var _0x103c99;continue;case'5':var _0x18f813=_0x220211['gJqpO'](_0x2cef55['keyTy'+'pe'],'u8')?_0x56d8d2[_0x364c38(0x5a0)+'nt8'](_0x2cef55['key']):_0x56d8d2['getIn'+_0x364c38(0x330)](_0x2cef55['key'],!![]);continue;case'6':return _0x220211[_0x364c38(0x21a)](_0x1ed598,_0x220211[_0x364c38(0x594)](_0xd66360,_0x253fd7)+_0x2cef55[_0x364c38(0x19d)+'n'],_0x220211['oZbmh'],_0x103c99^_0x18f813)&&_0x1ed598(_0xd66360+_0x253fd7+_0x2cef55['fake'],_0x220211[_0x364c38(0xafc)](_0x232f51,_0x364c38(0x1a7))?_0x220211['ilwPw']:_0x220211[_0x364c38(0x374)](_0x232f51,'obfI')?_0x364c38(0x28c):'u8',_0x232f51===_0x220211[_0x364c38(0x37a)]?_0x1eac4e:_0x232f51==='obfI'?_0x1eac4e|-0x1ae*-0xb+0x1*-0x22f9+0x107f:_0x1eac4e?-0x24a8+-0x21f+-0x11*-0x248:0x12b9+0x1*0xe5f+-0x2118)&&_0x220211[_0x364c38(0x22d)](_0x1ed598,_0x220211['zOllA'](_0x220211[_0x364c38(0x49d)](_0xd66360,_0x253fd7),_0x2cef55['activ'+'e']),'u8',0x1664*0x1+0x2*-0x7f0+-0x684);case'7':var _0x56d8d2=new DataView(_0x52a1a9['buffe'+'r'],_0x52a1a9[_0x364c38(0x9d3)+_0x364c38(0xa81)],_0x52a1a9[_0x364c38(0xae9)+_0x364c38(0x2a5)]);continue;}break;}}var _0x11986b={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x1feccf=0x243+-0xcd7*-0x3+0x18*-0x1b3+0.03,_0x2db8d2=0x2412+0x1148+0x6ab*-0x8,_0xccd687={},_0x1bad6a=-0x3a7+-0x2*-0x11f5+-0x2043,_0x574ae3=[],_0x5595d4=[];function _0x24b659(_0x939463){var _0x4a9943=_0x4b6c3b,_0x30643e=_0x49dac9['FPSco'+'ntrol'+_0x4a9943(0x5da)]||[],_0x4ced1b=[];_0x5595d4=[],_0x574ae3=[];for(var _0x19222e=0x2*0x2cf+0xce5*0x1+-0x1283;_0x220211['FPpEq'](_0x19222e,_0x30643e['lengt'+'h']);_0x19222e++){var _0x75060c=_0x30643e[_0x19222e][0x3ae+-0x10ba*-0x1+-0x1468];if(_0x30643e[_0x19222e][-0x20f9+-0x903+0x29fd]!==_0x4a9943(0x1a7))continue;var _0x4a32ff=_0x220211[_0x4a9943(0x22d)](_0x303b5b,_0x939463,_0x75060c,_0x220211[_0x4a9943(0x37a)]);if(!_0x4a32ff||_0x220211['gCEds'](_0x4a32ff[_0x4a9943(0x5a6)+'d'],0x683*0x1+0xd4c+-0x13ce))continue;var _0x2ec1b7=_0x4a377c(_0x4a9943(0x1a7),_0x4a32ff['hidde'+'n'],_0x4a32ff[_0x4a9943(0x7ae)+'Offse'+'t0']);if(typeof _0x2ec1b7!=='numbe'+'r'||!_0x220211[_0x4a9943(0xa3a)](isFinite,_0x2ec1b7))continue;var _0xcd3c86=_0x939463+':'+_0x75060c,_0x494f67=_0xccd687[_0xcd3c86];if(!_0x494f67||_0x2ec1b7!==_0x494f67[_0x4a9943(0x22b)+'ritte'+'n'])_0x494f67=_0xccd687[_0xcd3c86]={'base':_0x2ec1b7,'lastWritten':null};var _0x352d6f=_0x494f67[_0x4a9943(0x5ac)],_0x252fc6=Math[_0x4a9943(0x1f2)](_0x352d6f);if(_0x220211['kdeAx'](_0x252fc6,0xa1a+-0xd05+0x2eb*0x1+0.0001)||_0x220211[_0x4a9943(0x7da)](_0x252fc6,0x2e774+0x3*-0x9889+0x68c7)){_0x5595d4[_0x4a9943(0x793)]({'o':_0x75060c,'v':_0x2ec1b7,'why':_0x4a9943(0x1e7)+_0x4a9943(0x601)+'e'});continue;}_0x4ced1b[_0x4a9943(0x793)]({'o':_0x75060c,'v':_0x2ec1b7,'a':_0x252fc6,'base':_0x352d6f,'key':_0xcd3c86,'st':_0x494f67});}var _0x6519d4=[];for(var _0x13ffb6=0x179a+0x1241*-0x2+0xce8;_0x220211[_0x4a9943(0x921)](_0x13ffb6,_0x4ced1b[_0x4a9943(0x3f7)+'h']);_0x13ffb6++){var _0x1d3611=_0x4ced1b[_0x13ffb6]['a'],_0x59c75c=null;for(var _0x4e6cf9=-0x25c1+-0x23d*0xf+0x4754;_0x4e6cf9<_0x6519d4[_0x4a9943(0x3f7)+'h'];_0x4e6cf9++){var _0x86e890=_0x6519d4[_0x4e6cf9][_0x4a9943(0x3c7)]/_0x1d3611;if(_0x220211[_0x4a9943(0x1db)](_0x86e890,-0x19*-0x3a+0x8ab+-0xe*0x106-_0x1feccf)&&_0x86e890<_0x220211['FfbUb'](0x1956+-0xd9+-0x187c,_0x1feccf)){_0x59c75c=_0x6519d4[_0x4e6cf9];break;}}!_0x59c75c&&(_0x59c75c={'mean':_0x1d3611,'members':[]},_0x6519d4[_0x4a9943(0x793)](_0x59c75c));_0x59c75c[_0x4a9943(0x65e)+'rs']['push'](_0x4ced1b[_0x13ffb6]),_0x59c75c['mean']=0x28*0x17+0xe0d+-0x11a5;for(var _0x4058c=-0x819*0x1+-0x2*0x2a1+0xd5b;_0x4058c<_0x59c75c[_0x4a9943(0x65e)+'rs']['lengt'+'h'];_0x4058c++)_0x59c75c['mean']+=_0x59c75c['membe'+'rs'][_0x4058c]['a'];_0x59c75c[_0x4a9943(0x3c7)]/=_0x59c75c[_0x4a9943(0x65e)+'rs']['lengt'+'h'];}var _0x38a5aa=[];for(var _0x530753=0x1d10+-0x1*0x7d7+-0x1539;_0x220211[_0x4a9943(0x8b2)](_0x530753,_0x6519d4[_0x4a9943(0x3f7)+'h']);_0x530753++){if(_0x6519d4[_0x530753][_0x4a9943(0x65e)+'rs'][_0x4a9943(0x3f7)+'h']>=_0x2db8d2)_0x38a5aa['push'](_0x6519d4[_0x530753]);}if(!_0x38a5aa['lengt'+'h']){if(_0x220211[_0x4a9943(0x75d)](_0x4a9943(0x2ac),_0x4a9943(0x69f))){_0x5595d4['push']({'o':-(0x283*-0x1+0x1454+-0x11d0),'v':0x0,'why':_0x220211['iocvg'](_0x4a9943(0x225)+_0x4a9943(0x6f0)+'f\x20',_0x2db8d2)+(_0x4a9943(0x5cc)+'uredF'+_0x4a9943(0x1a8)+'\x20agre'+'ed')});return;}else return null;}var _0x1c53cc=_0x38a5aa[-0x20db+0x613*-0x1+0x26ee]['mean'];for(var _0x4d6c03=0xf46+0x1ac5+-0x2a0b;_0x220211['SUZwj'](_0x4d6c03,_0x38a5aa['lengt'+'h']);_0x4d6c03++)if(_0x220211[_0x4a9943(0x847)](_0x38a5aa[_0x4d6c03][_0x4a9943(0x3c7)],_0x1c53cc))_0x1c53cc=_0x38a5aa[_0x4d6c03][_0x4a9943(0x3c7)];var _0x58f22d=_0x1c53cc*(0x404+0x1c9a+-0x209e+0.5);for(var _0x458339=-0x59*0x65+-0x13*0xcb+0x322e;_0x458339<_0x6519d4[_0x4a9943(0x3f7)+'h'];_0x458339++){if(_0x6519d4[_0x458339][_0x4a9943(0x65e)+'rs']['lengt'+'h']>=_0x2db8d2)continue;for(var _0x30cb08=0x2653+-0xadf+0x1b74*-0x1;_0x30cb08<_0x6519d4[_0x458339][_0x4a9943(0x65e)+'rs'][_0x4a9943(0x3f7)+'h'];_0x30cb08++){_0x220211[_0x4a9943(0x338)](_0x4a9943(0x1b1),_0x220211[_0x4a9943(0x273)])?_0x1e8137(_0x220211[_0x4a9943(0x700)]):_0x5595d4[_0x4a9943(0x793)]({'o':_0x6519d4[_0x458339][_0x4a9943(0x65e)+'rs'][_0x30cb08]['o'],'v':_0x6519d4[_0x458339][_0x4a9943(0x65e)+'rs'][_0x30cb08]['v'],'why':_0x220211[_0x4a9943(0x427)]});}}for(var _0x1e9971=-0x1598+0x169d*-0x1+0x2c35*0x1;_0x1e9971<_0x38a5aa[_0x4a9943(0x3f7)+'h'];_0x1e9971++){var _0x46dddd=_0x38a5aa[_0x1e9971][_0x4a9943(0x65e)+'rs'];for(var _0x137e48=0xd82+0xaa2+-0x1824;_0x137e48<_0x46dddd['lengt'+'h'];_0x137e48++){var _0x2bfdad=_0x46dddd[_0x137e48];if(_0x2bfdad['a']<_0x58f22d){_0x5595d4[_0x4a9943(0x793)]({'o':_0x2bfdad['o'],'v':_0x2bfdad['v'],'why':_0x220211[_0x4a9943(0x4b3)]+_0x58f22d['toFix'+'ed'](0xd5*-0x2+0x5b8+0x2*-0x206)});continue;}var _0x475d0f=_0x220211[_0x4a9943(0x7ff)](_0x2bfdad[_0x4a9943(0x5ac)],_0x11986b[_0x4a9943(0x1e9)+'r']);_0xe3026c(_0x939463,_0x2bfdad['o'],'obfF',_0x475d0f)&&(_0x2bfdad['st'][_0x4a9943(0x22b)+_0x4a9943(0x1f7)+'n']=Math[_0x4a9943(0x5e9)+'d'](_0x475d0f),_0x1bad6a++,_0x574ae3[_0x4a9943(0x793)](_0x220211[_0x4a9943(0x1d9)]('0x',_0x2bfdad['o']['toStr'+_0x4a9943(0x6cd)](-0x20e5+-0x2333+0x4428))));}}}var _0x49dac9={'FPScontroller':[[-0x1*0x985+0xac*0x13+-0x32f*0x1,'obfF'],[0x35*-0x28+-0x412*0x5+0x1cca,_0x220211[_0x4b6c3b(0x37a)]],[-0x3*0xc92+0x1a0d+0xbe9,'obfF'],[-0x3*0x12d+-0x7ea+0xbc9,'obfF'],[0x79f*-0x5+-0x415+0x2aa0,_0x4b6c3b(0x1a7)],[0x1dcb+0x83e*-0x3+-0x81*0x9,_0x220211['YNBAT']],[0x32c+-0x295*0x1+-0x1*-0x9,_0x220211['YNBAT']],[-0x2*0x4cb+-0x1f77+0x29c5,'obfB'],[0x21d8+0x267c+-0x4790,_0x4b6c3b(0x1a7)],[0x1803+-0x1*-0x23+-0x1*0x174a,'i32'],[0x1d7c+0x1061+-0x2cfd,'v3'],[-0xa*0xb5+-0x123a+0x68e*0x4,'u8'],[0xdaa+0xc42+0x4*-0x63f,_0x220211[_0x4b6c3b(0x37a)]],[-0x87e*0x2+-0x1ec0+-0x4*-0xc31,_0x220211[_0x4b6c3b(0x796)]],[-0x2b1+0xf82+0x1*-0xbc5,'u8'],[0x1bb*0x5+0xe8d*0x1+-0x4*0x589,_0x4b6c3b(0x28c)],[-0x17*0x162+-0x2499+0x3*0x1729,'u8'],[-0x1a58+-0x26d2+0x423f,'u8'],[0x13ed+-0x1a7a+-0x1*-0x7a9,_0x220211['YNBAT']],[0x2203+0x1bdc*0x1+-0x3cab,_0x220211[_0x4b6c3b(0x37a)]],[0x11*-0xda+-0x1cad+0x2c73,'f32'],[-0x3*0x3f3+0x770+0x5b9,_0x4b6c3b(0x41e)],[-0x46*-0x78+0x9aa+-0x2926,'v3'],[0x20bb+0x5*-0x602+-0x151*0x1,'v3'],[-0x220c+-0x8b5*0x3+0x3d97,_0x4b6c3b(0x41e)],[-0x17e2+-0x1530+0x1*0x2e82,_0x4b6c3b(0x41e)],[0x8b1+-0x694*-0x5+-0x1*0x280d,'u8'],[0x1*-0x1859+-0x3a*0x4d+0x2b57,'f32'],[0x14f6+-0x1afe+0x7a0,'v3'],[0x2*0x1a6+0x21b1+-0x1*0x2359,'u8'],[-0x120a*-0x1+0x1*-0x236b+0x1315,'f32'],[0xfb*-0x1f+-0x14+0x2031,_0x4b6c3b(0x41e)],[-0x24f9+0x566+0x214f*0x1,'u8'],[-0x1e9a+-0xbcf*-0x2+0x8b9,'u8'],[0x2*-0x413+-0x1af8*0x1+0x24de,'obfF'],[0x1e96*0x1+-0x2323+0x1*0x665,'f32'],[0x116d+0x7*-0x593+0x1774,'u8'],[-0x1c3a+-0x1e81*0x1+0x3c9b,_0x4b6c3b(0x1a7)],[-0x1afb+-0x1c26+-0x1*-0x3919,'v3'],[-0xbb0+0x31a*-0x2+0x13ec,_0x4b6c3b(0xac4)],[-0x2347+0x4*0x79d+0x17*0x4d,'f32'],[0x2192*0x1+-0x1*0x2c5+-0x1cb1,_0x4b6c3b(0x41e)],[-0x1345*0x2+0x6d6+-0x22*-0x100,_0x220211[_0x4b6c3b(0x4ca)]],[-0x1913*-0x1+-0x98c+-0xd37,_0x4b6c3b(0x41e)],[-0x167e+-0x18ee+-0x18e0*-0x2,_0x220211['ilwPw']],[-0x253a+0xed1*-0x1+0x3663,_0x220211['ilwPw']],[-0xd9a*-0x2+0x1c37+-0x1*0x350f,'u8'],[-0x74*-0x3+0x3e*-0x58+0x1d*0xc5,'u8'],[0x1f68+-0x212d+0x3*0x161,'u8'],[-0x1*0xb3+0x5ea+0x2d7*-0x1,_0x4b6c3b(0x41e)],[-0x929+0x8c6+-0x3*-0xed,'u8'],[-0xb*0x2da+-0xd59+0x2f1c,'u8'],[0x13e5+-0x45*-0x7c+0x1*-0x32e9,_0x4b6c3b(0x41e)],[0x878+-0x762+0x156,'f32'],[-0x2710+0xbb*-0x9+0x18d*0x1f,_0x4b6c3b(0x41e)],[0x5*-0x6d9+-0x2*-0xde5+0x8e7,_0x4b6c3b(0x41e)],[0x1fe9+0x8*-0x28c+0x1*-0x911,'f32'],[0x20b6+-0x6*-0x154+-0x2632*0x1,_0x4b6c3b(0x41e)],[0x3*0x35f+-0x5f3+0x3*-0x8e,_0x4b6c3b(0x41e)],[-0x223*0xd+0x6b0+0x179b,'v3'],[-0x494*0x4+0x1a5*-0x3+0x19d3,'u8'],[-0x7ea*-0x3+0x1*-0x200e+-0x4*-0x2ba,'v3'],[0x1e75+-0x243a+0x869,_0x220211['ilwPw']],[-0x8*0xc+0x1*-0x17e7+0x1af3*0x1,'v3'],[0x752+0x16ae+-0x1b48,'f32'],[-0x128c+-0x22f0+0x3838,'f32'],[-0x320+-0x51*0x47+0x5*0x5ab,_0x220211['ilwPw']],[0x1*0x1723+-0x2199+0xd3a,'u8'],[-0x12fe+-0x1600+0x2bc3,'u8'],[-0x1*0x234a+0x2059+0x5b9,_0x220211['ilwPw']],[0x12c5+-0x173a*0x1+0x751,_0x4b6c3b(0x41e)],[-0x701+-0x2*-0xb12+-0xc3f,'v3'],[-0x1dc+0x73c+-0x270,'v3'],[-0x25*-0xbf+-0x2e*-0x74+-0x71*0x67,_0x220211[_0x4b6c3b(0x4ca)]],[-0x19b2+-0xed3*-0x1+0x1*0xddf,_0x220211[_0x4b6c3b(0x4ca)]],[0xec+0x56b+-0x1*0x353,'f32'],[0xdfc+-0x11af+-0x1*-0x6bb,_0x220211[_0x4b6c3b(0x4ca)]],[-0x1*0x24b5+-0xf3+0x28b4*0x1,'v3'],[0x8*-0x3ea+0x1569+0xcff,'u8'],[0x51+-0x3c7+-0x3a*-0x1d,'v3'],[-0x2*0x10f2+0x1417+0x10f5,_0x220211['oZbmh']],[0x2*-0x1381+-0x1142+0x3b70,_0x220211[_0x4b6c3b(0x4ca)]],[0x10fe+-0x157f+0x1*0x7b1,_0x220211[_0x4b6c3b(0x4ca)]],[0x900+-0x2285*-0x1+-0x2851,'f32'],[0x12e+-0xc59+0xe67,_0x220211['ilwPw']],[-0x3*-0xb11+0x41*0x34+-0x2b27*0x1,'u8'],[0x128f+-0x26b9+0x176b,'u8'],[0x2f9*0x2+0x15df*0x1+0x1*-0x1885,'u8'],[0xcdf+0x236a*0x1+-0x2cfc,'u8'],[0x224a+-0x30a+-0x3fe*0x7,'u8'],[-0x12d1+-0x1345*0x2+0x3cab,_0x220211['ilwPw']],[0x89*-0x2d+-0x2202+0x3*0x1479,_0x220211['ilwPw']],[0x385+-0x56c+0x11*0x4f,_0x4b6c3b(0x41e)],[-0x261e+-0x2361+-0xf5f*-0x5,_0x220211['ilwPw']],[0x1c77+-0x1d88+0x471,'f32'],[-0x265e+0x1d86+0x4*0x30f,'u8'],[0x26ec+0x1392+0x1b8b*-0x2,'f32'],[0x1*0x839+-0x8d1+0x404,'f32'],[-0x109e+-0x3*-0xb04+-0x1*0xcfe,'u8'],[0x1b7a+0x251c+0x1e8f*-0x2,'v3'],[-0x1aad*0x1+0x11*0x92+0x147f,'v3'],[0x4dc*0x4+-0x239*0x1+-0xda7,'v3'],[0x15e6*-0x1+-0x1ae7*-0x1+-0x15*0x11,_0x4b6c3b(0x41e)],[-0x26c5+0x1*-0x70+0x2ad5,'f32'],[-0x1a28+0x3*-0x632+0x3062,_0x220211['ilwPw']],[0x3*-0xa8d+0xe*0x6c+0x9cd*0x3,'v3'],[-0x18ee+-0x266a+0x1*0x430c,_0x220211['oZbmh']],[-0x1*0x11f3+0x1*0xe43+0x768,'u8'],[0xaee+0x1ee2+-0x985*0x4,_0x220211[_0x4b6c3b(0x796)]],[-0x347*0x7+0x1*-0x16bd+0x13*0x29a,_0x4b6c3b(0x41e)],[0x1103*-0x1+0x1fd8+-0xb11,_0x220211['ilwPw']],[0x236d+-0x4*-0x148+-0x24c5,_0x220211[_0x4b6c3b(0x4ca)]],[0x1c74+-0x2216+0x8e*0x11,_0x220211['ilwPw']],[-0x1343*0x2+-0x1969+0x43bf,'v3'],[0x25e1+0x1*-0x23d6+0x1d1,_0x220211[_0x4b6c3b(0x796)]],[0x123*-0x1d+-0x19d4*0x1+0x3eab,'u8'],[0x16*-0x17+0xa2b*-0x1+0x1006,'u8'],[-0x20bb+0x3*0xc22+0x37,'u8'],[-0x75e*0x2+0x470+-0x1*-0xe30,_0x4b6c3b(0x41e)],[-0x18a*-0xc+-0x205e*-0x1+-0x2eee,_0x220211[_0x4b6c3b(0x796)]]],'HealthScript':[[-0x1d2a+-0x1*0xe64+0x2be6,'u8'],[-0x229e+-0x1*0x2682+0x497c,_0x220211[_0x4b6c3b(0x796)]],[0x21b8+0x59*-0x37+0x3*-0x4b3,_0x220211[_0x4b6c3b(0x4ca)]],[0x1ff+0x180d+-0x2*0xcc4,_0x4b6c3b(0x41e)],[-0xd*-0x227+0x2*0x83e+-0x2bef,_0x220211[_0x4b6c3b(0x4ca)]],[-0x1438+0x3b0*0x2+0xd64,_0x4b6c3b(0x41e)],[-0xb*0x151+0x1307*-0x1+-0x2212*-0x1,_0x220211[_0x4b6c3b(0x4ca)]],[0x12a2+0x169c+-0x28aa,_0x220211['ilwPw']],[-0xcf8+-0x52*-0x43+0x2*-0x3ef,'i32'],[-0xbcc+0x2063*-0x1+0x2cd3,'i32'],[-0x317*0xb+0xc01+0x16a4,'u8'],[-0x13e5+0x251*0x7+-0x1*-0x457,'u8'],[-0x3e1*0x9+-0x419*-0x4+0x132f,'u8'],[0x1f3+0x5*0x43c+-0x4*0x59d,'u8'],[-0x535+-0x1bb3+0xb38*0x3,_0x220211[_0x4b6c3b(0x6ac)]],[0x22ff+-0x2*0xf0b+-0x415,_0x220211[_0x4b6c3b(0x6ac)]],[-0x14f0+0x264+0x19f*0xc,'obfI'],[0x2a*-0x8b+0x126e+0x157*0x4,_0x4b6c3b(0x8b7)],[-0x3*-0x3e1+0x253e+-0x2fd1,_0x4b6c3b(0x8b7)],[-0x1*-0x23ee+0x55*-0x61+-0x295,'obfB'],[0xd1d+-0xc91+-0xa4*-0x1,_0x220211[_0x4b6c3b(0x37a)]],[0x8e5+-0x11*0x44+-0x319*0x1,_0x4b6c3b(0x41e)],[0x5f7+-0xbad+-0x12b*-0x6,_0x4b6c3b(0x41e)],[-0x12ec*-0x1+-0xe20+-0x1be*0x2,_0x220211[_0x4b6c3b(0x4ca)]],[0x952+-0x1*-0x28b+-0xa89,_0x220211['ilwPw']],[-0x183a+0x7*-0x16+0x1a30,_0x220211[_0x4b6c3b(0x4ca)]],[-0x258c+-0x540+0x2c2c,'v3'],[0xfcd*0x1+-0x131f+0x4c2,_0x4b6c3b(0x41e)],[0x1*0x1ccd+0x110b+0xa*-0x470,_0x4b6c3b(0x41e)],[0x13a1+-0x1*0x1e91+0x8*0x18e,'u8'],[-0x1*0x17f+-0x23ed+0x74*0x56,'u8'],[-0xf13*0x2+0xf85+-0x5*-0x33d,_0x4b6c3b(0x28c)]],'PlayerConfig':[],'WeaponManager':[[0x1000+-0x7ca*0x1+-0x40f*0x2,'i32'],[-0x1*-0x19cd+0x201a+0x5*-0xb8f,_0x4b6c3b(0x28c)],[-0x4*0x878+-0x1806+0x3a06,'u8'],[-0x51b*0x1+-0x1f*-0x6d+-0x7f4,_0x220211['oZbmh']],[-0x1*0x1237+-0xf01+0x219c,'obfF'],[-0x2ea*0x3+-0xc*-0x330+-0x1d06,_0x4b6c3b(0x41e)],[-0x126d+0x15*-0xea+-0x2ef*-0xd,_0x4b6c3b(0x28c)],[-0x23af+0x1e95*0x1+0x2d1*0x2,'u8'],[-0x1*-0xd0f+-0x912+0x44*-0xd,'u8'],[0x1518+0x222b*-0x1+0x13d*0xb,_0x220211[_0x4b6c3b(0x796)]],[-0x1ff1+-0x1*0x61d+0x269e,_0x220211[_0x4b6c3b(0x4ca)]],[0xd66+0x1d3c+-0x2a0a,_0x220211[_0x4b6c3b(0x4ca)]],[0x3ff+0x197f+-0x1cd2,_0x220211[_0x4b6c3b(0x796)]],[0x2503*0x1+0xf51+-0x3398,'u8'],[0xecf+-0x3*-0x6d9+-0x227e,'obfI'],[-0x1dac+0xd7b+-0x36d*-0x5,_0x220211['TRdNW']],[0x44a*0x6+-0x64f*0x2+-0xc1a,'f32'],[-0x1827+-0x1681*-0x1+0xe*0x31,_0x4b6c3b(0x41e)],[0x249f+0x25*0x97+-0x3966,_0x220211['ilwPw']],[0x3a0*-0x5+0xa72+0x8c6,_0x4b6c3b(0x41e)],[0xe94*0x2+-0x10f7+-0xb11*0x1,_0x220211[_0x4b6c3b(0x4ca)]],[0xc53+0x1628+-0x1c1*0x13,'u8'],[-0x94*0xb+-0x10fc*-0x2+-0x1a70,_0x4b6c3b(0x8b7)],[0xbdd+-0x23ca+0x192d,_0x220211[_0x4b6c3b(0x6ac)]],[-0x2556+0x61*-0x1f+0x3269,_0x220211[_0x4b6c3b(0x6ac)]],[0x188a+-0x213+-0x150f,'obfB'],[-0x4b*0xf+-0xa0*0x35+0x26f9,'obfB'],[-0x9f*-0x5+-0xf2e*-0x1+-0x10c9,_0x220211[_0x4b6c3b(0x20d)]],[0x24bc*-0x1+-0x1f2+0x283a,'obfB'],[-0xd3d+-0x59*-0x63+-0x1*0x138a,_0x220211['hmuob']],[-0x9ca+0x6e3*-0x5+-0x7*-0x68f,_0x220211[_0x4b6c3b(0x6ac)]],[0x1*-0x58f+-0x1c37+0x2392,_0x220211[_0x4b6c3b(0x796)]],[-0x1e8c*-0x1+-0x4cf*-0x8+0xb*-0x61c,'u8'],[0x132a+0x35*0x7+0x3*-0x643,_0x220211[_0x4b6c3b(0x796)]],[0x25d4+-0x26ee+0x2f2,_0x4b6c3b(0x28c)],[0x6*0x38a+0x1c1a+-0x2*0x17ab,_0x220211[_0x4b6c3b(0x796)]],[0x1*0x23b1+-0x1416+-0xd87*0x1,'u8'],[-0xff6*-0x1+0x3c*0x4b+-0x1f6e,'u8'],[-0x1b82+0x237b*0x1+-0x5dc,'u8'],[0x3cb*0x1+-0x2422+-0x2275*-0x1,'u8'],[-0x59c+-0x9*-0xf8+-0xfd,'u8'],[0x15b5+0xe1f+-0x2184,_0x4b6c3b(0x28c)],[-0x1*-0x2180+-0x169f*0x1+-0x5f*0x17,'u8']],'GG_GameManager':[[-0x975+0xe62+-0x4c9,'u8'],[0x1*0x22ec+0x201f*0x1+0x143*-0x35,_0x220211[_0x4b6c3b(0x4ca)]],[0x1c35+-0x1b1b+0xd6*-0x1,'u8'],[0x1*-0x198d+0x47*-0x41+0x2bd9*0x1,'u8'],[-0xa7*-0x30+0x1a21+-0x3929,_0x4b6c3b(0x41e)],[0x2*-0x4a3+0xf4f*-0x2+0x8*0x506,_0x220211[_0x4b6c3b(0x4ca)]],[-0x269*0x2+-0xc1d+-0x113f*-0x1,_0x4b6c3b(0x28c)],[-0x631+0x469*-0x1+0x2*0x577,_0x4b6c3b(0x28c)],[-0x6*-0x1ca+0x2385+-0x2de9,'u8'],[-0xacb+-0x12d2+0x1e11,'u8'],[-0x6d4+-0x1b89*0x1+-0xf1*-0x25,_0x4b6c3b(0x41e)],[-0xc6f+-0x9d9*-0x2+0x5*-0x15b,_0x220211[_0x4b6c3b(0x4ca)]],[-0x3*0x60d+0x1847+-0x590,_0x4b6c3b(0x28c)],[-0xd*0x241+0x23ce+0x29*-0x25,'u8'],[-0x1ac9+-0x26f3*0x1+0x109c*0x4,'i32'],[0xd90+-0x200c+0x2*0x99c,_0x4b6c3b(0x28c)],[0x1784+0x76*-0x1+-0x164e,_0x4b6c3b(0x28c)],[0x47*-0x7f+0x16ee*-0x1+0x3b0f,_0x4b6c3b(0x8b7)],[-0x245a+0x1e38+-0x38f*-0x2,'obfI'],[-0x162+-0x24b*-0x5+0x905*-0x1,_0x220211['TRdNW']],[0x9b7+-0x3a8+-0x4e3,'u8'],[-0x2215+-0x1*-0x42c+0x1f19,_0x220211['oZbmh']],[0x10*0x1be+0xa86+-0x2502,'u8'],[-0x14df*0x1+0x1908+-0x2b9,_0x4b6c3b(0x41e)],[-0xc9b+0x20cd+0x12b2*-0x1,'u8'],[0x6*-0x4e1+-0x1b2e+0x39fc,'u8'],[-0x2401+0x571*0x2+0x11*0x193,'u8'],[-0x256b+0x25*-0xc6+0x43b1,_0x4b6c3b(0x28c)],[-0x110*0x8+0x1bb9*0x1+-0x118d,_0x220211[_0x4b6c3b(0x4ca)]],[-0x1*-0x23ae+0x203d+-0x423b,'u8'],[0x19*0x8c+-0x366+0x895*-0x1,'u8'],[0x1*-0x719+0x3fd+-0x6*-0xce,_0x220211['oZbmh']],[0x2525+0x4ec+-0x23*0x127,_0x4b6c3b(0x28c)],[-0x75*-0x18+0x18a+-0xac2,_0x4b6c3b(0x41e)],[0x1597+-0x4cf+-0xf04,_0x4b6c3b(0x28c)],[-0x20dd+0x3*-0x46b+0x2fe6,'f32'],[0x63b*-0x5+0x242a+-0x1*0x337,'i32'],[-0xe3a+0x2*-0x9bd+0x4*0x8e1,_0x220211['oZbmh']]],'TDM_GameManager':[[-0x9a+0xbf3+0x43*-0x2b,'u8'],[-0x1e4b+0x1*0x1bb0+-0x3*-0xe9,'u8'],[0xe9*-0x13+0x22f6+-0x118a,'u8'],[0x9*-0x43f+-0x143d+0x3a98,_0x4b6c3b(0x41e)],[0x1d21+0x1703+-0x33cc,'u8'],[-0x76b+0xb85+-0x3be*0x1,'f32'],[0x1529*0x1+0x5*0x5a2+0x1*-0x30f3,_0x4b6c3b(0x41e)],[-0x5*-0x167+-0x1db*0x9+0xa14,_0x4b6c3b(0x28c)],[-0x4*0x9b9+0x7a*-0x4f+0x3*0x19a6,_0x220211['oZbmh']],[-0x189f+-0x2*-0x9e0+0x54b,'u8'],[0xb30+-0x1da0+0x12dd,'u8'],[0x95d+0x1*0x23bf+0xc*-0x3b9,_0x220211['ilwPw']],[-0x1*-0x1f62+0xa4*0x2b+-0x5*0xbb2,'f32'],[-0xf31+-0x55*-0xc+-0x1ab*-0x7,_0x4b6c3b(0x28c)],[0x1bb*-0xb+0x5fa+0x81*0x1b,'u8'],[0xb00+0xcb9+-0x1729,_0x220211[_0x4b6c3b(0x6ac)]],[0x18fd*-0x1+-0xf90+0x2965,'obfI'],[-0x243e+0x112e+0x13fc,'obfI'],[-0x1*-0x1dae+-0x1754+0x1*-0x55a,'obfI'],[-0x1841+-0x18fa*-0x1+0x5b,'u8'],[0x1a39+-0x199*-0x1+-0x1a76,'u8'],[0x26f*0xd+0x2*0x9d+0xa7f*-0x3,_0x4b6c3b(0x28c)],[0x1379+-0xb8f+-0x67e,'u8'],[-0x45c+0x2302+-0x1d22,'u8'],[-0xe1*0xf+0x1d*0xf1+-0xc96,_0x220211['ilwPw']],[0xf06+0x1f72+-0x2cec,_0x220211['oZbmh']],[-0x8e2*-0x3+0x1cea+0x80*-0x6c,'i32'],[0x14*-0x15f+-0xcf5*-0x3+0x85*-0x13,_0x4b6c3b(0x41e)],[-0x77*0x31+-0x1f4a+0x37a9,_0x4b6c3b(0x28c)],[0x67*-0x2f+-0x1*-0x2104+-0xc7f,_0x220211[_0x4b6c3b(0x796)]],[0x22f3+-0x14b*0x17+-0x33*0x12,_0x4b6c3b(0x41e)],[-0x1ae8+0x26e4+-0xa58,_0x220211[_0x4b6c3b(0x4ca)]],[0x1518+0xdf+-0x3*0x6c5,_0x4b6c3b(0x28c)],[0x50b*0x4+-0x1*0x1318+-0xc*-0xd,'u8'],[-0x81d+-0x106*-0x5+0x4b0,'u8'],[-0x1bc7+-0x1*0x2598+0x4b*0xe5,_0x4b6c3b(0x41e)]],'PhotonNetworkSync':[[0x12a0+0xaf*0x1e+-0x26ee,'v3'],[-0x1f1b+0xa48+0x1513,_0x4b6c3b(0x28c)],[-0x10*0x117+-0x9*0x39e+0x3242,'u8'],[-0xf02*0x1+-0x1c8+-0x1*-0x110f,'u8'],[0x7*-0x377+0x151a+0x3*0x125,'v3'],[-0x1*0x5fc+0x26*0x8d+0x74f*-0x2,'u8'],[0xf59+-0x1330+-0x15*-0x33,'i32'],[0xbe6+0x2*0x12d2+-0x312e,_0x220211[_0x4b6c3b(0x796)]],[-0x1*-0x1b25+-0x19f1+-0x35*0x4,'f32'],[-0x55d+-0x1*0x1597+-0x32*-0x8c,_0x220211[_0x4b6c3b(0x4ca)]],[-0x232a+-0x1772+-0xc*-0x4eb,'f32'],[-0x1f84+0x2632*0x1+0x2*-0x321,'v3'],[-0x1ee+0x1*0x1ec7+-0x1c61,_0x220211['ilwPw']],[-0x6e4+-0x7b7*0x5+-0x1*-0x2df3,_0x4b6c3b(0x41e)],[0xf1b*0x2+0x1739+0x1*-0x34ef,_0x4b6c3b(0x28c)],[-0x18df+-0x13bb+0x6d*0x6a,_0x220211['ilwPw']]],'MouseLook':[[-0x23d0+0x226e+0x176,'f32'],[0x1441+-0x1*0x4b7+0x293*-0x6,_0x4b6c3b(0x41e)],[0x1*0x84b+-0x9*-0x191+-0x1648,_0x220211[_0x4b6c3b(0x4ca)]],[0x3df*-0xa+0x15a+0x257c*0x1,_0x4b6c3b(0x41e)],[-0xcc5+-0xa44*0x3+0x1*0x2bb5,'f32'],[-0xb9e+0xe1*-0x10+0x19d6,_0x4b6c3b(0x41e)],[0x1*-0x1691+0xc91*0x1+0xa30,_0x4b6c3b(0x41e)],[-0x528+-0x9e*-0x39+-0x1dd2,'u8'],[-0x138b+0x1*0x1c1c+-0x859,_0x4b6c3b(0x41e)],[0x1d*-0x125+0x2f1*0x1+0x1e7c,_0x4b6c3b(0x41e)],[0x247+-0x594+0x9*0x65,_0x4b6c3b(0x28c)],[-0x133a+-0x5c6+0xe*0x1ce,'u8'],[-0x17e1+-0x23*-0xb+0x16a8,'v2']],'NetworkPlayerAnimations':[[-0x893+-0x1b01+0x243c,'v3'],[-0xeab+0x1b1d+-0xbbe,'v3'],[-0xef2+-0x2303+0x32b5,'u8'],[-0x240b+-0x2573+-0x2*-0x2521,_0x4b6c3b(0x28c)],[-0x1*0x7a2+0x9ba+-0x150,_0x4b6c3b(0x28c)],[-0x2ea*-0xc+-0x2*0x99a+-0xef8,_0x220211['ilwPw']],[0x1a*-0x26+-0x116b*0x1+0x1617,_0x220211[_0x4b6c3b(0x4ca)]],[0x118b+-0x26f5*0x1+-0x2*-0xb23,_0x4b6c3b(0x41e)],[-0x354+-0x17ea+0x76*0x3d,_0x4b6c3b(0x41e)],[0x137a+0x514+-0x17a6,_0x4b6c3b(0x41e)],[0x3*-0x4b7+-0x85f+0xfa*0x18,_0x4b6c3b(0x41e)],[0xb2b+0xc2*-0x24+0x110d,_0x4b6c3b(0x41e)],[-0x3ed+0x2*-0x1078+-0x1*-0x25d1,_0x220211['ilwPw']],[0x1ec6+0x1154+-0x2f22,_0x220211[_0x4b6c3b(0x4ca)]],[0x1*-0xb7b+0x6*-0x3e4+0x23cf,_0x4b6c3b(0x41e)],[0x1e04*0x1+0x1*0x33b+-0x203f,_0x4b6c3b(0x41e)],[0xc*0x37+0x251+-0x14b*0x3,_0x220211[_0x4b6c3b(0x4ca)]],[-0x47*-0x1a+0x41c*-0x8+0x1ab2,_0x220211['oZbmh']],[-0x1*-0x15dd+0x112*-0x1a+0x703,'u8'],[0x16a+-0x6*0x65b+0x138*0x1f,_0x4b6c3b(0x28c)],[-0x7dc+0x323*0xb+-0x1991,_0x220211[_0x4b6c3b(0x796)]],[0x17*-0x193+-0x4*0x1+0x2551,'u8'],[0xd*0x296+0x22b5+0x1*-0x4337,_0x220211[_0x4b6c3b(0x4ca)]],[0xd1+-0x1*-0x9d+-0x1*0x4e,_0x220211['ilwPw']],[0x2e7*-0x2+0x42*0x8c+0xd*-0x23e,_0x4b6c3b(0x41e)],[-0x31*0x4+-0x1d*-0x1+-0x1cf*-0x1,'f32'],[0x5*0x641+-0xb5+0x4c*-0x63,'u8'],[0x17e1+0x13*-0x1e6+-0xd69*-0x1,'u8'],[0x9fa*-0x2+-0x231+0x2d*0x85,'v3'],[-0x61*0x34+0x329+0x11d3,'v3'],[-0x7aa+-0x1502+0x1e40,'u8']],'NPC_Cotroller':[[0xa81*-0x1+-0x967+-0x1*-0x13fc,'v3'],[-0xba*0x24+0x71e+0x132a,_0x220211[_0x4b6c3b(0x4ca)]],[0x131c*-0x2+-0x1c82+0x76e*0x9,_0x4b6c3b(0x41e)],[0xb92*-0x2+0xc9f*0x2+-0x4*0x71,'u8'],[0x31*-0x7f+0x1*0x4eb+0x13bb,'u8'],[-0x1bca+-0x1ef4+0x3b1a,'v3'],[-0x25b7+0x20d0+-0x53*-0x11,'u8'],[0x1a*0xb9+0x2669*0x1+0x815*-0x7,_0x4b6c3b(0x41e)],[-0x15b9+-0x24cd+0x3b2a*0x1,_0x220211['ilwPw']],[-0x67*-0x2e+-0x18e5*0x1+0x71b*0x1,_0x220211[_0x4b6c3b(0x4ca)]],[-0x2011+-0x1fe1+-0x2*-0x2057,'f32'],[-0xb66+-0x1151*0x1+0x1d7f,'u8'],[-0x1b80+0x1d2b+-0xdf*0x1,_0x4b6c3b(0x41e)],[-0x1a4d*-0x1+0x7*-0x3d5+0xa*0x23,_0x220211[_0x4b6c3b(0x4ca)]],[0xc29+0x26a1+0x31ee*-0x1,_0x220211[_0x4b6c3b(0x4ca)]],[0x208e+-0x24e0+0x532,_0x4b6c3b(0x41e)],[-0x14f1*-0x1+0x12a4*0x2+-0x3955,'u8'],[-0x1ca4*0x1+0x1a15+0x9*0x63,'f32'],[0xfe*0x25+0x19d*0x1+-0x2563,'v3'],[0x35*-0x1d+-0xdef+0x14ec,_0x220211[_0x4b6c3b(0x4ca)]],[0x2514+-0x81+0x2393*-0x1,'i32'],[-0x3e9*0x1+0x6*-0xb1+0x1*0x913,_0x4b6c3b(0x41e)],[0x1159*0x2+0x11*-0x1f+-0x1d*0x117,_0x220211[_0x4b6c3b(0x4ca)]],[-0x9af+0x6e9+0x3d2,_0x220211[_0x4b6c3b(0x4ca)]],[-0x1a6a+0x2*0x283+-0xb3c*-0x2,'v3'],[-0x20a3+-0x7e1*-0x1+0x19e2,'f32'],[-0x1f7b+-0x18f7+0x1*0x3996,_0x4b6c3b(0x41e)],[0x1c42+0x5*-0x54f+-0x83,'v3'],[0xa65+0xcfc+0x3*-0x75f,'u8'],[0x8dd+0x1a3*0x10+-0x21c5,_0x4b6c3b(0x41e)],[-0x26df+-0x3e3*-0x4+0x18a3,'v3'],[0xeef*-0x1+-0x23*-0x5e+0x375,_0x220211['oZbmh']],[0x9d*0x30+0x1c56+-0x385a,'i32'],[-0x1ac3+0x21f+0x1a14,_0x220211[_0x4b6c3b(0x4ca)]],[0x19b6+-0x1fed*0x1+0x1*0x7ab,'u8'],[-0x223f*0x1+-0x6c3+-0x2a7a*-0x1,'v4'],[0xa93+0x1106+-0x1a11,_0x220211['ilwPw']],[-0x1f11+0x1bdc+0x1*0x4c1,_0x220211[_0x4b6c3b(0x4ca)]],[-0x102*-0x1a+0x3b9+-0x1c5d,_0x4b6c3b(0x41e)],[-0x1ed7+0xb89*0x1+0x14e6,'u8'],[-0xf7*0x7+-0x454+0xcb5*0x1,_0x220211[_0x4b6c3b(0x796)]]],'TargetHealth':[[0x1c64+0x16cb+-0x331f*0x1,_0x4b6c3b(0x28c)],[-0x12*-0x196+-0x225+0x125*-0x17,_0x220211[_0x4b6c3b(0x796)]],[-0x1*-0x1049+0xb23+-0x1b38,'u8'],[0x1f*0x37+0x1*-0x171a+0x149*0xd,_0x220211['oZbmh']],[-0x742*0x1+-0xd3d*-0x1+-0x5b3*0x1,_0x220211[_0x4b6c3b(0x796)]],[0x1fde+0x236*0x6+0x6*-0x779,_0x4b6c3b(0x28c)],[0x1*-0x125f+0x32d+0xf82,'i32'],[-0x124c+0x1*-0xeaa+0x217a,_0x220211[_0x4b6c3b(0x4ca)]],[0x1075+-0x2369+0x1380,_0x220211[_0x4b6c3b(0x4ca)]],[-0xc*-0x1f6+-0xd63+0x995*-0x1,'u8'],[-0xeea*-0x2+-0x2024+0x2e4,_0x220211['ilwPw']],[-0x315+-0x5*0x6a5+0x1*0x24f2,'u8'],[0x181e+0xd6d+-0x24e3*0x1,'i32'],[-0x1*-0x9fd+-0x6d9+0x13c*-0x2,_0x220211['oZbmh']],[-0x11c4*-0x1+0xb*-0xa7+0x9d7*-0x1,_0x4b6c3b(0x41e)],[-0x4*0x24+-0x3*-0xa57+0x9e3*-0x3,'u8']],'SectatorCamera':[[-0x20b1*0x1+0x10af+0x1*0x1016,'f32'],[0x1*0x25dc+-0x1463+0x3*-0x5cb,_0x220211[_0x4b6c3b(0x4ca)]],[-0x12fc+0x6c7*-0x1+0x19df,_0x220211['ilwPw']],[-0x2ad*0x7+-0x1f69*0x1+0xc91*0x4,'v3'],[0x158d+0x260b*-0x1+-0x36*-0x4f,'v3'],[0x4c9+0x767+0xbe8*-0x1,'i32'],[0x1114+-0x1*0x214b+0x1083,'i32'],[-0x2*0xc11+0x18d9*0x1+-0x67,_0x220211[_0x4b6c3b(0x4ca)]],[-0x52c+-0x1*-0x7f+0x501,_0x220211[_0x4b6c3b(0x796)]],[-0x2497+-0x15e1+0x3ad0,_0x4b6c3b(0x41e)],[0x26f4+-0xa0+0x3cc*-0xa,'u8'],[0x77+0x2*-0x181+-0x2eb*-0x1,'v3'],[-0xbb8+-0x1*-0x2a3+-0x981*-0x1,'v4'],[0x8a9+0x31*0x1+0x2ca*-0x3,'u8'],[-0x1dbf+-0x36+-0x45*-0x71,'i32']],'UISettings':[[0x8b*0x46+-0xa85*-0x1+-0x3067,_0x4b6c3b(0x28c)],[-0x7*-0x125+-0x1*0xe80+0x1*0x6a5,_0x220211[_0x4b6c3b(0x4ca)]],[-0x22df+0x1671+0xdb2,'u8'],[-0x3e*0x7c+0x1a60*0x1+0x8*0x9e,_0x4b6c3b(0x28c)],[-0x7*-0x3d6+0x1*-0x79f+-0x11e7,'i32'],[-0xc64+-0x41e+0x11da,_0x4b6c3b(0x28c)],[0xc*-0x84+0x11cd+-0x4b*0x23,'u8'],[0x1a9f+-0xaed+0x3*-0x4c7,'u8'],[0x100e+-0x197b+0xacb,'u8'],[0x194+-0x1b4d+-0x4*-0x6c6,'u8'],[-0x3b9*0x7+0x15ef+0x580,'u8'],[-0xd4d+0x1e57+-0x13*0xd3,'u8'],[-0x4cd*-0x1+-0x377*0xb+0x22b2,'u8'],[0x8f8+-0x1092+0x956,_0x4b6c3b(0x41e)],[0xf3f+-0xb2d*0x2+0x8df,'f32'],[0x16*0x7f+-0x1*-0x7bd+-0x108f,'u8'],[-0x440+0x2172+0x2*-0xd59,_0x4b6c3b(0x41e)],[0xa1c+-0x1a6f+0x12f3,_0x220211['oZbmh']],[0x2*-0x10c9+-0x22c6+0x1*0x4750,'u8'],[0x2583+-0x1dee+-0x9*0x71,'u8'],[0x11e0+0x1d0a+0x3*-0xe6e,'v2'],[0x1*-0xdd+-0x4a*-0x7a+-0x1cf*0x11,'v2'],[-0xb87+0x5*-0x513+-0x40f*-0xa,'u8'],[0x185a+-0xe*-0x266+-0x3636,'u8'],[0x16c8+0x9*0x31c+-0x2ef8,_0x220211[_0x4b6c3b(0x4ca)]],[-0x327*0x4+0x5c0+0xaac,'v3'],[0xb1*-0x19+0x26b+0x12be,_0x220211[_0x4b6c3b(0x4ca)]],[-0x234b+-0x2a9*-0x3+0x1f34,_0x220211[_0x4b6c3b(0x4ca)]],[-0x6*-0xb3+-0x1*0x25d1+-0x1*-0x2587,'f32'],[0xb8b+-0x2*0xef8+0x1655,'u8'],[-0x899+-0x7b4+0x1*0x143e,'u8'],[-0xe6a+-0x556+-0x5ed*-0x4,_0x4b6c3b(0x28c)],[0xf5d+-0x1*0x169b+0x59f*0x2,_0x4b6c3b(0x28c)],[-0x1d92+-0x22ed*0x1+-0x4483*-0x1,'i32'],[0x1ee8+0xd46+0x2826*-0x1,_0x4b6c3b(0x28c)],[-0x3*0xa3b+-0x1c9a+-0x17*-0x2c1,'i32'],[0x2*-0x685+0x4b6+0xc64,'i32'],[-0x99c+0x6*0xbd+0x18b*0x6,'i32'],[0x13b+0x571+-0x294,_0x220211['oZbmh']],[-0x1f58+0x903*0x1+0x1*0x1a71,_0x4b6c3b(0x28c)],[-0x1a*-0xae+-0x2b*-0xc7+0x1e1*-0x19,_0x220211['oZbmh']],[-0x3*-0x3f5+0x2*0x2d5+-0xd35,'u8'],[0x8b*0x11+-0x26*0x8f+0x1054,'u8'],[0x1bab+0x141*-0x8+-0xd4d,'u8'],[0x21d5*0x1+-0xf*0xd3+0x1*-0x1121,'u8'],[0x6f6+-0x1*0x1e9e+0x1c34,_0x4b6c3b(0x41e)]]},_0x83f13d={},_0x3e5154={};function _0x23b64c(_0x394e1f,_0x1f5080,_0x325e0e){var _0x2c5902=_0x4b6c3b,_0x45de85={'VLPYX':_0x220211['uTkwW'],'TLcUw':function(_0x502eb8,_0x5a971e){return _0x502eb8===_0x5a971e;},'guGuV':function(_0x31080e,_0x50ea84){return _0x31080e===_0x50ea84;},'lNenW':function(_0xd99d3d,_0x2d9f68){return _0xd99d3d+_0x2d9f68;},'UaMxI':function(_0x38468e,_0x2ef13c){return _0x38468e+_0x2ef13c;},'pMMRt':function(_0x27e322,_0x2b5971){return _0x27e322+_0x2b5971;},'lbbrF':_0x2c5902(0x893)+'s\x20wer'+_0x2c5902(0x33d)+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+_0x2c5902(0x507)+_0x2c5902(0x5d9)+_0x2c5902(0x590)+'\x20','vwQZH':_0x220211[_0x2c5902(0x9ba)],'GbCVb':_0x220211[_0x2c5902(0xb2a)],'xJfEk':_0x2c5902(0x64e)+_0x2c5902(0x978)+'\x20','fPjYH':_0x220211[_0x2c5902(0x9a4)],'nLnZX':_0x220211[_0x2c5902(0x99e)],'OikoD':function(_0x26a448,_0x146e35){return _0x26a448===_0x146e35;},'lrHuB':_0x220211[_0x2c5902(0xa7d)],'UZRkd':function(_0x12871b,_0x2287d3){return _0x12871b!==_0x2287d3;},'kmSgL':_0x220211[_0x2c5902(0x2db)],'LYMst':function(_0x2a3b89,_0x528933){var _0x51d4b5=_0x2c5902;return _0x220211[_0x51d4b5(0x4e4)](_0x2a3b89,_0x528933);},'jSlmD':_0x2c5902(0x971)+'ion','AVvkJ':function(_0x4c88db,_0x2f5a89){return _0x4c88db===_0x2f5a89;},'eavVs':'samte'};return function(_0x55b6be){var _0x192306=_0x2c5902;try{var _0x556bc4=_0x55b6be&&_0x55b6be['val']?_0x55b6be['val']():-0x2c*-0x15+-0x1*-0xc83+-0x101f;if(!_0x556bc4)return;var _0x20b3a1=_0x3e5154[_0x394e1f]||(_0x3e5154[_0x394e1f]={}),_0x6f8ca=_0x20b3a1[_0x556bc4];if(!_0x6f8ca)_0x6f8ca=_0x20b3a1[_0x556bc4]={'ptr':_0x556bc4,'firstSeen':Date['now'](),'hits':0x0};_0x6f8ca['hits']++;if(_0x325e0e){if(_0x45de85['OikoD'](_0x45de85['lrHuB'],'HyEnV')){_0x4e099f()['set']({'host':_0x2e795b[_0x192306(0x1a9)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{if(!_0x83f13d[_0x556bc4])_0x83f13d[_0x556bc4]={'ptr':_0x556bc4,'kind':_0x394e1f,'firstSeen':Date[_0x192306(0x5a5)](),'hits':0x0};_0x83f13d[_0x556bc4][_0x192306(0x709)]++;}}else{if(_0x45de85[_0x192306(0x431)](_0x192306(0x322),_0x45de85['kmSgL'])){var _0x381b23=_0x139e02[_0x192306(0xaac)+'WebMo'+'dkit']&&_0x12cc8d['Unity'+'WebMo'+'dkit'][_0x192306(0x9a0)+'me'],_0x3349aa=_0x381b23&&_0x381b23[_0x192306(0x8ed)+'nalWa'+'smTyp'+'es']||[],_0x31ee66={};for(var _0x28fdc0=0x1f03+0x27a+-0x217d*0x1;_0x28fdc0<_0x3349aa[_0x192306(0x3f7)+'h']&&_0x28fdc0<0x4*0x63d+-0x7*0x95+-0x541;_0x28fdc0++){var _0x60e9b5=_0x3349aa[_0x28fdc0]['param'+'s'][_0x192306(0x8eb)](',')+_0x192306(0x577)+(_0x3349aa[_0x28fdc0][_0x192306(0x795)+_0x192306(0xb40)]||_0x45de85[_0x192306(0x2d3)]);_0x31ee66[_0x60e9b5]=(_0x31ee66[_0x60e9b5]||0x9b*-0x7+0x660*-0x3+0x175d)+(-0x1e5d+-0x2122+0x3f80);}_0x1fad26[_0x192306(0x6f9)+_0x192306(0xb50)]=_0x31ee66;}else{var _0x19077b=_0x51bfd8[_0x394e1f];if(!_0x19077b||_0x19077b['ptr']!==_0x556bc4){if(_0x45de85['LYMst'](_0x192306(0x562),_0x192306(0x85a))){_0x51bfd8[_0x394e1f]={'ptr':_0x556bc4,'firstSeen':Date[_0x192306(0x5a5)](),'hits':0x0,'replaced':!!_0x19077b};try{var _0x524174=_0x48a15f['filte'+'r'](function(_0x450135){var _0x32bb4f=_0x192306;return _0x45de85[_0x32bb4f(0x4b0)](_0x450135['type'],_0x394e1f);})[0x1*-0x429+0x1c19+-0x17f0];_0x1feade={'type':_0x394e1f,'atMs':Date[_0x192306(0x5a5)]()-_0x14db79,'originalFunc':!!(_0x524174&&_0x524174['hook']&&typeof _0x524174[_0x192306(0xb25)][_0x192306(0xa60)+'nalFu'+'nc']===_0x45de85[_0x192306(0xa3d)]),'resolveGameAtFire':!!_0x194389(),'gameSourceAtFire':_0x4b0787['sourc'+'e']};}catch(_0x23e5d6){}}else _0x45de85['guGuV'](_0x5a246f[_0x192306(0x30c)+'Resol'+_0x192306(0x92d)],0x1319*0x2+-0x1557+-0x10db)?_0x4c2df6[_0x192306(0xaca)+_0x192306(0x3ba)][_0x192306(0x793)](_0x45de85[_0x192306(0x56a)](_0x45de85[_0x192306(0x2b8)](_0x45de85[_0x192306(0xa37)](_0x45de85[_0x192306(0x56a)]('0\x20of\x20'+_0x2c55a8['hooks'+_0x192306(0xa61)],_0x45de85[_0x192306(0x3a7)]),_0x45de85[_0x192306(0x8d6)])+_0x45de85['GbCVb']+_0x45de85['xJfEk'],_0x2b4b19['hooks'+_0x192306(0x64e)+'tered'+'AtArm']),_0x192306(0x893)+_0x192306(0x4ac)+_0x192306(0x67b)+'\x20armi'+_0x192306(0x61d)+'\x20docu'+_0x192306(0x8f0)+_0x192306(0x64d)+'.')):_0x14f3e9['warni'+_0x192306(0x3ba)][_0x192306(0x793)](_0x45de85['pMMRt'](_0x45de85['fPjYH']+_0x4cde62[_0x192306(0x30c)+_0x192306(0x892)+'ved'],_0x45de85['nLnZX'])+_0x31a158[_0x192306(0x30c)+'Total']+('\x20hook'+'(s)\x20t'+_0x192306(0x312)+'able\x20'+_0x192306(0x19e)+'\x20but\x20'+_0x192306(0x6bd)+'ed\x20no'+'ne.\x20T'+'he\x20si'+'gnatu'+_0x192306(0x691))+(_0x192306(0x1c7)+_0x192306(0x283)+_0x192306(0x829)+'fo*)\x20'+'->\x20vo'+'id\x20do'+'es\x20no'+_0x192306(0x844)+'ch\x20th'+_0x192306(0x772)+'ild.'));}}}if(_0x45de85['AVvkJ'](_0x394e1f,_0x192306(0x37b)+'ntrol'+'ler')&&_0x11986b['on'])try{if(_0x45de85[_0x192306(0x4ae)]===_0x45de85[_0x192306(0x4ae)])_0x24b659(_0x556bc4);else{var _0x54d72b=_0x2bc4f7==='v2'?-0x2*-0x380+0x1*0x1129+-0x80d*0x3:_0x45de85[_0x192306(0xb47)](_0x917f95,'v3')?0xb*-0x202+-0xb89*0x2+-0x2d2b*-0x1:0x9e9+-0x3fc+-0x5e9,_0x4dc320=_0x9b7a8(_0x2aa3b3[_0x192306(0x47b)],_0x44e5b3,_0x54d72b);_0x4dc320&&(_0x44a6eb['xyz']=_0x4dc320,_0x1ea6cb['v']=_0x4dc320[0x2*-0xad8+-0x7*0x2f+0x1*0x16f9]);}}catch(_0xd9d0bb){}if(!_0x1f5080){var _0x524174=_0x48a15f[_0x192306(0x5c8)+'r'](function(_0xf2a75e){var _0x33826e=_0x192306;return _0x45de85[_0x33826e(0xb47)](_0xf2a75e[_0x33826e(0x226)],_0x394e1f);})[-0x57b*0x2+-0x14e4+-0x1b*-0x12e];if(_0x524174&&_0x524174['hook'])try{_0x524174[_0x192306(0xb25)][_0x192306(0x4c4)+'ed']=![];}catch(_0x3a790c){}}}catch(_0x1969c6){}};}function _0x338f0e(){var _0x23d849=_0x4b6c3b;if(_0x220211[_0x23d849(0x3a9)]!==_0x220211[_0x23d849(0x607)]){if(_0x48a15f[_0x23d849(0x3f7)+'h'])return!![];if(!window[_0x23d849(0xaac)+'WebMo'+'dkit']||!window['Unity'+_0x23d849(0xa6a)+_0x23d849(0x8ab)]['Runti'+'me'])return![];var _0x152b01=window[_0x23d849(0xaac)+_0x23d849(0xa6a)+_0x23d849(0x8ab)]['Runti'+'me'];if(!_0x152b01[_0x23d849(0x740)+'ns']||!_0x152b01[_0x23d849(0x740)+'ns'][_0x23d849(0x3f7)+'h'])return![];_0x458e96=window[_0x23d849(0xaac)+_0x23d849(0xa6a)+'dkit'][_0x23d849(0x261)+'Wrapp'+'er'],_0x523f84=_0x523f84||_0x152b01[_0x23d849(0x740)+'ns'][_0x152b01['plugi'+'ns']['lengt'+'h']-(0x1538+0x1*0x307+-0x183e)];if(!_0x523f84||typeof _0x523f84['hookP'+'refix']!==_0x220211['hCQry'])return![];for(var _0x5b23ee=0x1*-0x1be0+0xc*-0x1ff+0x1f*0x1ac;_0x220211[_0x23d849(0x921)](_0x5b23ee,_0x565286['lengt'+'h']);_0x5b23ee++){if('yyffT'!=='BXiKQ'){var _0x1f3bbe=_0x565286[_0x5b23ee];try{var _0x45efb8=_0x523f84[_0x23d849(0x21e)+_0x23d849(0x765)]({'typeName':_0x1f3bbe[_0x23d849(0x226)],'methodName':_0x220211[_0x23d849(0x5d7)],'params':['i32','i32'],'returnType':undefined},_0x220211['nWvQV'](_0x23b64c,_0x1f3bbe['type'],_0x1f3bbe[_0x23d849(0x84e)],_0x1f3bbe['many']));_0x48a15f['push']({'type':_0x1f3bbe[_0x23d849(0x226)],'hook':_0x45efb8,'keep':_0x1f3bbe['keep']});}catch(_0x59fc24){_0x59658a[_0x23d849(0x793)](_0x220211['YujZO'](_0x1f3bbe[_0x23d849(0x226)],':\x20')+String(_0x59fc24&&_0x59fc24[_0x23d849(0x4b5)+'ge']||_0x59fc24)['slice'](0x1fdb+-0x2*0xe06+-0x3cf,-0x17ea*-0x1+-0x16d4+-0x1*0x76));}}else _0x31d53e(_0x23d849(0x6e5)+_0x23d849(0x96e));}return _0x48a15f[_0x23d849(0x3f7)+'h']>-0x1*0x19eb+0xe62+-0xb89*-0x1;}else{var _0x33057d=_0x3b8eda[_0x23d849(0x33a)](_0x5d5798);for(var _0x12f0e7=0x19*0xcd+0x29*0x4+-0x14a9;_0x12f0e7<_0x33057d[_0x23d849(0x3f7)+'h']&&_0x12f0e7<-0xaff*-0x2+-0x1*-0x2677+-0x135f*0x3;_0x12f0e7++){var _0x59efda=_0x325278[_0x33057d[_0x12f0e7]];if(_0x59efda&&typeof _0x59efda==='objec'+'t'&&_0x59efda[_0x23d849(0xa68)+'e']&&_0x59efda[_0x23d849(0xa68)+'e']['HEAPU'+'8']&&_0x59efda['Modul'+'e']['HEAPU'+'8']['buffe'+'r'])return _0x2143d6[_0x23d849(0x5d4)+'e']=_0x220211[_0x23d849(0x57f)]('windo'+'w.',_0x33057d[_0x12f0e7])+_0x220211['IoqRD'],_0x59efda;}}}function _0x4ad977(){var _0x534503=_0x4b6c3b,_0x40dbef={'saUSy':function(_0x3c3f22,_0x326d6a){return _0x3c3f22||_0x326d6a;},'HALgi':function(_0x513254,_0x3059ec){return _0x513254===_0x3059ec;}};if(_0x220211[_0x534503(0x8e2)](_0x220211[_0x534503(0x2f5)],'rdqMf')){var _0x37a7c7=0x1b5a+0x1909*0x1+-0x3463;for(var _0x594686=0x15b*-0x18+0x8b*-0x43+-0x44e9*-0x1;_0x594686<_0x48a15f[_0x534503(0x3f7)+'h'];_0x594686++){if('Agofg'==='qvshs'){if(_0x40dbef['saUSy'](!_0x44878d,!_0x1044d9))return null;var _0x21cbdc=new _0x3ac125(_0x19e24f)[_0x534503(0x9ed)+_0x534503(0x234)+'me']();return _0x40dbef[_0x534503(0x585)](_0x21cbdc,_0xdf36bb)?null:_0x21cbdc;}else{if(_0x48a15f[_0x594686][_0x534503(0xb25)]&&_0x220211['lmWPR'](_0x48a15f[_0x594686][_0x534503(0xb25)]['table'+'Index'],undefined))_0x37a7c7++;}}return _0x37a7c7;}else{var _0x5a5d29=-0x241c+-0x1d*0xbb+0x394b;for(var _0x4e2d4d=-0x2af+0x14b*-0x1c+0x389*0xb;_0x220211[_0x534503(0x652)](_0x4e2d4d,_0x48ae1f['lengt'+'h']);_0x4e2d4d++){if(_0x20abf4[_0x4e2d4d]['hook']&&_0x123ad0[_0x4e2d4d]['hook'][_0x534503(0x6bd)+'ed'])_0x5a5d29++;}return _0x5a5d29;}}function _0xe25d46(){var _0x574f45=_0x4b6c3b,_0x2b38fc=-0x85b+-0x2643+-0x75*-0x66;for(var _0xa49fb0=-0x32a*0x4+0xe5*0x25+-0x1471*0x1;_0xa49fb0<_0x48a15f[_0x574f45(0x3f7)+'h'];_0xa49fb0++){if(_0x48a15f[_0xa49fb0][_0x574f45(0xb25)]&&_0x48a15f[_0xa49fb0][_0x574f45(0xb25)][_0x574f45(0x6bd)+'ed'])_0x2b38fc++;}return _0x2b38fc;}var _0x2fe959=null,_0x609f51=[],_0x4659b4={},_0x1feade=null;function _0x153ec1(_0x2228dc){var _0x294115=_0x4b6c3b;if(_0x294115(0x617)!=='oagtz')return _0x5446cd[0x1*-0x1a0b+-0x1632+0x303d]=_0x5387b9|-0x1d23+0x1a*0xbb+0xa25,_0xda5fc2[0x355+0x1381+-0x9e*0x25];else try{if(_0x220211['rKYbX'](!_0x458e96,!_0x2228dc))return null;var _0x329409=new _0x458e96(_0x2228dc)['getCl'+_0x294115(0x234)+'me']();return _0x220211['SBjuD'](_0x329409,undefined)?null:_0x329409;}catch(_0x3c6d0b){return null;}}function _0x5f44a9(_0x17dab2,_0x499f3a,_0x349c90){var _0x20e14b=_0x4b6c3b,_0x715a4a=('1|0|6'+_0x20e14b(0x729)+_0x20e14b(0x1c5))['split']('|'),_0x1c97d8=-0x17*-0x53+0x5a*-0x58+0x177b;while(!![]){switch(_0x715a4a[_0x1c97d8++]){case'0':if(!_0x50d88d)return null;continue;case'1':var _0x50d88d=_0x220211[_0x20e14b(0x4fb)](_0x3ce0ed);continue;case'2':return _0x3dd304;case'3':for(var _0x5f4529=0xb8a+0x1f*0x61+-0x1749;_0x5f4529<_0x349c90;_0x5f4529++)_0x3dd304[_0x20e14b(0x793)](_0x50d88d[_0x20e14b(0x1c4)+_0x20e14b(0x6d0)](_0x220211['AFsJu'](_0x17dab2,_0x499f3a)+_0x5f4529*(-0x162a+-0xab5*0x2+-0x2b98*-0x1),!![]));continue;case'4':var _0x3dd304=[];continue;case'5':_0x4b0787['ok']+=_0x349c90;continue;case'6':if(_0x220211[_0x20e14b(0x1d7)](_0x499f3a,-0xeac+-0x7*-0xf8+0x7e4)||_0x220211[_0x20e14b(0x7da)](_0x499f3a+_0x349c90*(0xa*0x9b+0x254c+-0x102*0x2b),_0x50d88d['byteL'+'ength']))return null;continue;}break;}}var _0xa21199={'PhotonNetworkSync':[[_0x220211['YzFOw'],_0x4b6c3b(0x557)+'nView'],[_0x4b6c3b(0x313),_0x220211['aRlkB']],[_0x220211['Ltodw'],_0x4b6c3b(0x474)+_0x4b6c3b(0x66d)],['0x28','fps'],['0x30','mouse'+_0x4b6c3b(0x88f)]],'NetworkPlayerAnimations':[[_0x220211['YzFOw'],_0x220211[_0x4b6c3b(0x1e2)]],[_0x4b6c3b(0x295),_0x4b6c3b(0xa6b)]],'NPC_Cotroller':[[_0x4b6c3b(0xae8),'capsu'+'le'],['0xb4',_0x4b6c3b(0x411)+_0x4b6c3b(0x39e)+'th'],[_0x4b6c3b(0x4f3),'healt'+'h'],[_0x4b6c3b(0x60b),_0x4b6c3b(0x411)+_0x4b6c3b(0x39e)+_0x4b6c3b(0x4f5)],[_0x4b6c3b(0xa34),_0x4b6c3b(0x474)+'form']],'EnemyBot':[[_0x4b6c3b(0x532),_0x4b6c3b(0x474)+_0x4b6c3b(0x66d)]]},_0xaa3f76={'PhotonNetworkSync':[['0x58',_0x220211[_0x4b6c3b(0x8f4)]],[_0x4b6c3b(0x336),_0x220211[_0x4b6c3b(0x99a)]],['0x5c','id']]};function _0x5062f0(_0x32cf99,_0x329c7c){var _0x4bf694=_0x4b6c3b,_0x22acd8=_0x49dac9[_0x32cf99]||[],_0x32b512={'kind':_0x32cf99,'ptr':'0x'+_0x329c7c['toStr'+_0x4bf694(0x6cd)](0x24d0+0x1158+-0x3618),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x27cc9d=0x2172+0x1*0x272+-0x8f9*0x4;_0x220211[_0x4bf694(0x823)](_0x27cc9d,_0x22acd8[_0x4bf694(0x3f7)+'h']);_0x27cc9d++){if(_0x22acd8[_0x27cc9d][0x1173+-0xe26+-0x34c]!=='v3')continue;var _0xe096e4=_0x5f44a9(_0x329c7c,_0x22acd8[_0x27cc9d][-0x1d7*0x9+-0x1baa+0x1*0x2c39],-0x61f+0x1163*-0x1+0x1*0x1785);if(!_0xe096e4)continue;_0x32b512[_0x4bf694(0x93f)+'cs'][_0x4bf694(0x793)]({'o':_0x220211[_0x4bf694(0x9b8)]('0x',_0x22acd8[_0x27cc9d][-0x1c6b+-0x544*-0x7+0x1*-0x871][_0x4bf694(0x1f5)+_0x4bf694(0x6cd)](-0x231d+0x1*-0xdef+0x311c)),'v':_0xe096e4});}var _0xd2e593=0x125*0x8+0x5c3+0x13*-0xc9;for(var _0x46c96b=0x2*-0x132e+0x1427+0x1*0x1235;_0x46c96b<_0x32b512[_0x4bf694(0x93f)+'cs']['lengt'+'h'];_0x46c96b++){var _0x5eec2c=_0x32b512[_0x4bf694(0x93f)+'cs'][_0x46c96b]['v'],_0x2ad7e4=_0x220211[_0x4bf694(0x1d9)](_0x220211[_0x4bf694(0x7ff)](_0x5eec2c[0xbb6+0x795+-0x134b],_0x5eec2c[-0x1f9+0x85b*0x1+-0x662]),_0x220211[_0x4bf694(0xab1)](_0x5eec2c[-0x271*0x4+-0x1161+0x1b27],_0x5eec2c[-0xf39+-0x1*0x7ae+0x16e9]));_0x220211['AuzmI'](_0x2ad7e4,_0xd2e593)&&('ZVEho'===_0x220211[_0x4bf694(0x58a)]?(_0xd2e593=_0x2ad7e4,_0x32b512[_0x4bf694(0xa6d)]=_0x5eec2c,_0x32b512[_0x4bf694(0x28e)]=_0x32b512[_0x4bf694(0x93f)+'cs'][_0x46c96b]['o']):_0x4569e2=_0x15e299(_0x138756&&_0x11ebaf[_0x4bf694(0x4b5)+'ge']||_0x4b9905));}_0x32b512[_0x4bf694(0x2ba)]=Math['sqrt'](_0xd2e593);var _0x58301c=_0xa21199[_0x32cf99],_0x2a413f=_0xaa3f76[_0x32cf99];if(_0x2a413f){if(_0x220211['rqFeq']===_0x220211[_0x4bf694(0x9e4)]){_0x32b512['tag']={};for(var _0x245e3e=0x4*-0x727+-0x133f*0x1+0x1*0x2fdb;_0x245e3e<_0x2a413f[_0x4bf694(0x3f7)+'h'];_0x245e3e++){var _0x277e4a=_0x220211[_0x4bf694(0x93d)](_0x4094a9,_0x220211[_0x4bf694(0x57f)](_0x329c7c,_0x220211[_0x4bf694(0x51c)](parseInt,_0x2a413f[_0x245e3e][0x11*0x175+-0x5ab+-0x6*0x32f],0x2*0x93e+0x6fc*-0x4+0x984)),_0x4bf694(0x28c));if(_0x277e4a!==undefined)_0x32b512['tag'][_0x2a413f[_0x245e3e][-0x1*0x12b3+0x1f57*0x1+-0xca3]]=_0x277e4a;}}else _0x220211['AWWHL'](_0x327648);}if(_0x58301c)for(var _0x232975=-0x25a3+0x2*0xcc7+0xc15;_0x220211[_0x4bf694(0x921)](_0x232975,_0x58301c[_0x4bf694(0x3f7)+'h']);_0x232975++){var _0x44c93b=_0x4094a9(_0x329c7c+parseInt(_0x58301c[_0x232975][-0x1333+0x6*0x5c9+-0xf83*0x1],-0x22d9*0x1+0x119b*-0x1+0x3484),'u32');if(_0x44c93b)_0x32b512[_0x4bf694(0x675)][_0x58301c[_0x232975][0xc64+0x13c1+0x11*-0x1e4]]=_0x220211[_0x4bf694(0xb51)]('0x',(_0x44c93b>>>0x22bf+0x1*0x766+-0x2a25*0x1)['toStr'+_0x4bf694(0x6cd)](0xd4*-0x2f+-0x93d+0x3039));}return _0x32b512['scala'+'rs']=_0x22acd8['filte'+'r'](function(_0x9d8fa){var _0x3a0f3d=_0x4bf694;return _0x9d8fa[0x1ebc+0xcd3*0x1+0x45b*-0xa]===_0x3a0f3d(0x41e)||_0x9d8fa[0x1652+0xc*0x94+-0x1d41*0x1]==='i32';})[_0x4bf694(0x9c9)](function(_0x238a42){var _0x25af98=_0x4bf694;return{'o':_0x220211[_0x25af98(0x363)]('0x',_0x238a42[0x1*0x1f67+-0x1689+0x1*-0x8de][_0x25af98(0x1f5)+_0x25af98(0x6cd)](0x1e16+-0x12e4+-0x3*0x3b6)),'v':_0x220211[_0x25af98(0x51c)](_0x4094a9,_0x329c7c+_0x238a42[0x14*-0xf2+0x2348+-0x20*0x83],_0x238a42[0x9*-0x2b1+-0x3*0xa50+0x372a])};})[_0x4bf694(0x5c8)+'r'](function(_0xd3d715){return _0xd3d715['v']!==undefined&&isFinite(_0xd3d715['v']);})['slice'](0x1*-0x2443+-0x20fc+0x3a5*0x13,0x4*-0x527+-0x17cd+-0x13*-0x257),_0x32b512;}function _0x2e9680(){var _0xb23d79=_0x4b6c3b,_0x5ede1a={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x16918c=_0x51bfd8['FPSco'+_0xb23d79(0x8c2)+'ler']&&_0x51bfd8['FPSco'+'ntrol'+'ler']['ptr']||0x1*-0x135f+0x16*0x1be+-0x17*0xd3,_0x3c8fd6=_0x3e5154['Photo'+'nNetw'+_0xb23d79(0x664)+'nc']||{},_0xce1b3e=Object[_0xb23d79(0x33a)](_0x3c8fd6);for(var _0x128531=0x518*-0x2+-0x2680+0x30b0;_0x220211[_0xb23d79(0x852)](_0x128531,_0xce1b3e[_0xb23d79(0x3f7)+'h'])&&_0x220211['QkJJx'](_0x128531,0x8d*0x9+0x4c+-0x529);_0x128531++){var _0x2fc909=(_0xb23d79(0x8ac)+_0xb23d79(0x97b)+'3|1')['split']('|'),_0x2c7cac=-0x3*-0x6a9+-0x1ce1+0x8e6;while(!![]){switch(_0x2fc909[_0x2c7cac++]){case'0':_0x3d5da7['hits']=_0x3f1fe8['hits'];continue;case'1':_0x5ede1a[_0xb23d79(0x455)+'rs'][_0xb23d79(0x793)](_0x3d5da7);continue;case'2':_0x3d5da7['isLoc'+'al']=!!_0x16918c&&_0x220211[_0xb23d79(0x317)](_0x3d5da7['refs'][_0xb23d79(0x5db)],'0x'+_0x16918c[_0xb23d79(0x1f5)+'ing'](-0x2e0*0x2+0x22*0xe+0x3f4));continue;case'3':if(_0x3d5da7[_0xb23d79(0x675)]['healt'+'h']){var _0x42a389=parseInt(_0x3d5da7['refs'][_0xb23d79(0xa13)+'h'],-0x269a+-0x619*0x5+0x34b*0x15);_0x3d5da7['healt'+'h']=_0x3e1e01(_0x42a389,'Healt'+'hScri'+'pt',_0x220211['TRdNW']);}continue;case'4':var _0x3d5da7=_0x220211[_0xb23d79(0x1fc)](_0x5062f0,_0x220211[_0xb23d79(0x640)],_0x3f1fe8['ptr']);continue;case'5':var _0x3f1fe8=_0x3c8fd6[_0xce1b3e[_0x128531]];continue;case'6':_0x3d5da7[_0xb23d79(0xaaf)+_0xb23d79(0x96d)+'s']=_0x3f1fe8[_0xb23d79(0xaaf)+_0xb23d79(0x8ad)]-_0x14db79;continue;}break;}}_0x5ede1a['playe'+_0xb23d79(0xa3e)+'t']=_0xce1b3e['lengt'+'h'];var _0x263b64=_0x3e5154[_0xb23d79(0xaee)+_0xb23d79(0x73d)+_0xb23d79(0x5da)]||{},_0x1b7f34=Object['keys'](_0x263b64);for(var _0x3809be=0x10b*-0x14+0x1*-0xb2b+0x2007;_0x220211[_0xb23d79(0x94b)](_0x3809be,_0x1b7f34[_0xb23d79(0x3f7)+'h'])&&_0x3809be<-0x1668+0x1*-0xed7+0x2557;_0x3809be++){if(_0x220211[_0xb23d79(0x20a)]('DGVra',_0x220211[_0xb23d79(0x54c)])){var _0x1ca6ac=_0x220211['qlutp'][_0xb23d79(0xaa6)]('|'),_0xf972b5=0x162f+-0x11*-0xad+0x1*-0x21ac;while(!![]){switch(_0x1ca6ac[_0xf972b5++]){case'0':_0x32d6f1[_0xb23d79(0x709)]=_0x263b64[_0x1b7f34[_0x3809be]][_0xb23d79(0x709)];continue;case'1':if(_0x32d6f1[_0xb23d79(0x675)][_0xb23d79(0xa13)+'h'])_0x32d6f1[_0xb23d79(0xa13)+'h']=_0x3e1e01(_0x220211[_0xb23d79(0xb16)](parseInt,_0x32d6f1[_0xb23d79(0x675)]['healt'+'h'],-0x5fb+-0x17*-0xc7+-0x12f*0xa),_0x220211[_0xb23d79(0x27e)],_0xb23d79(0x8b7));continue;case'2':_0x32d6f1['first'+_0xb23d79(0x96d)+'s']=_0x263b64[_0x1b7f34[_0x3809be]][_0xb23d79(0xaaf)+_0xb23d79(0x8ad)]-_0x14db79;continue;case'3':_0x5ede1a['bots'][_0xb23d79(0x793)](_0x32d6f1);continue;case'4':var _0x32d6f1=_0x220211[_0xb23d79(0x858)](_0x5062f0,'NPC_C'+_0xb23d79(0x73d)+'ler',_0x263b64[_0x1b7f34[_0x3809be]]['ptr']);continue;}break;}}else{var _0x50be24=new _0x826b7c(_0x3dbc0b);for(var _0x193787=0x1*-0x1517+-0x17c4+0x2cdb*0x1;_0x193787<_0x393299;_0x193787++)_0x50be24[_0x193787]=_0x17ca82['getUi'+'nt8'](_0x3f011b+_0x4913f6+_0x193787);return _0x4b24f2['ok']++,_0x50be24;}}_0x5ede1a[_0xb23d79(0xa10)+_0xb23d79(0x96b)]=_0x1b7f34[_0xb23d79(0x3f7)+'h'];var _0x444ad3=_0x3e5154[_0xb23d79(0x37b)+'ntrol'+'ler']||{},_0x374399=Object['keys'](_0x444ad3);for(var _0x2ca408=0x18f5+0x15a+-0x1a4f;_0x2ca408<_0x374399['lengt'+'h']&&_0x2ca408<-0x185*-0x16+-0x1aba+0x3*-0x234;_0x2ca408++){var _0x467a32=_0x5062f0(_0xb23d79(0x37b)+_0xb23d79(0x8c2)+'ler',_0x444ad3[_0x374399[_0x2ca408]]['ptr']);_0x467a32[_0xb23d79(0x709)]=_0x444ad3[_0x374399[_0x2ca408]][_0xb23d79(0x709)],_0x467a32[_0xb23d79(0x451)+'al']=_0x220211[_0xb23d79(0x4eb)](_0x444ad3[_0x374399[_0x2ca408]][_0xb23d79(0x47b)],_0x16918c),_0x5ede1a[_0xb23d79(0x44a)+_0xb23d79(0x78c)+'s'][_0xb23d79(0x793)](_0x467a32);}_0x5ede1a[_0xb23d79(0x44a)+'oller'+_0xb23d79(0xb24)]=_0x374399['lengt'+'h'];var _0x50e4ae=_0x5ede1a['playe'+'rs'][_0xb23d79(0x8f3)+'t'](_0x5ede1a[_0xb23d79(0x5a9)]);for(var _0x10f9c6=0x236+-0x1334+0x1d*0x96;_0x10f9c6<_0x50e4ae['lengt'+'h'];_0x10f9c6++){if(_0x50e4ae[_0x10f9c6][_0xb23d79(0x451)+'al'])continue;_0x5ede1a[_0xb23d79(0x2a4)+'es']['push'](_0x50e4ae[_0x10f9c6]);}_0x5ede1a[_0xb23d79(0x8c1)+_0xb23d79(0xb24)]=_0x5ede1a[_0xb23d79(0x2a4)+'es']['lengt'+'h'];var _0x233797={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0xc74c04={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x357c94 in _0x51bfd8){var _0x2bea19=_0x51bfd8[_0x357c94];if(!_0x2bea19||!_0x2bea19['ptr'])continue;if(!_0x220211[_0xb23d79(0x357)](_0x357c94,_0x233797))continue;_0x5ede1a[_0xb23d79(0x396)+_0xb23d79(0x768)][_0x357c94]='0x'+_0x2bea19['ptr'][_0xb23d79(0x1f5)+_0xb23d79(0x6cd)](-0x2680+-0x10a*0x16+0x3d6c);var _0xb189f3=_0x4094a9(_0x220211[_0xb23d79(0x614)](_0x2bea19[_0xb23d79(0x47b)],_0x233797[_0x357c94]),_0x220211['PPste']),_0x306ec6=_0x4094a9(_0x220211[_0xb23d79(0x76a)](_0x2bea19['ptr'],_0xc74c04[_0x357c94]),_0x220211['PPste']);_0xb189f3&&_0x220211['mJUUa'](_0x5ede1a[_0xb23d79(0x1d4)+'a'],null)&&(_0x5ede1a[_0xb23d79(0x1d4)+'a']='0x'+_0x220211['GvNAo'](_0xb189f3,-0x11c8+0x1b52*-0x1+0x2d1a)[_0xb23d79(0x1f5)+_0xb23d79(0x6cd)](-0xd*-0x272+0xc97+-0x2c51),_0x5ede1a[_0xb23d79(0x1d4)+_0xb23d79(0x70a)]=_0x357c94);if(_0x306ec6&&_0x220211[_0xb23d79(0x2b5)](_0x5ede1a[_0xb23d79(0x455)+'rList'],null))_0x5ede1a[_0xb23d79(0x455)+_0xb23d79(0x319)]='0x'+(_0x306ec6>>>-0x1*0x22f1+-0x9af*-0x4+-0x3cb)[_0xb23d79(0x1f5)+'ing'](-0x18cb*0x1+0x67b*0x6+-0xe07);}if(!_0x5ede1a[_0xb23d79(0x455)+_0xb23d79(0xa3e)+'t']&&!_0x5ede1a[_0xb23d79(0xa10)+'unt']&&!_0x5ede1a[_0xb23d79(0x1d4)+'a'])_0x5ede1a[_0xb23d79(0x6b5)]=_0x220211[_0xb23d79(0xaef)](_0x220211['syrIp'],_0x220211['CdOnH']);else!_0x5ede1a['enemy'+_0xb23d79(0xb24)]&&(_0x5ede1a[_0xb23d79(0x6b5)]=_0xb23d79(0x9fb)+_0xb23d79(0x77f)+_0xb23d79(0xa2c)+'sent\x20'+_0xb23d79(0x752)+_0xb23d79(0x4e9)+_0xb23d79(0x7f7)+_0xb23d79(0x715)+_0xb23d79(0x674)+_0xb23d79(0x293)+'mies\x20'+_0xb23d79(0x217)+'\x20chec'+'k\x20'+('isLoc'+_0xb23d79(0x5bb)+'\x20each'+_0xb23d79(0x4f1)+'y\x20in\x20'+_0xb23d79(0x5ad)+'ers`.'));try{var _0x2f3ff4=window[_0xb23d79(0xaac)+'WebMo'+'dkit']&&window[_0xb23d79(0xaac)+'WebMo'+'dkit'][_0xb23d79(0x9a0)+'me'],_0x58af5e=_0x2f3ff4&&_0x2f3ff4[_0xb23d79(0x8ed)+_0xb23d79(0xa5f)+'smTyp'+'es']||[],_0x2589e7={};for(var _0x3098ee=0x20a9+0xbfc+0x1*-0x2ca5;_0x220211[_0xb23d79(0x921)](_0x3098ee,_0x58af5e[_0xb23d79(0x3f7)+'h'])&&_0x3098ee<-0x168f+-0x188a+0x3eb9;_0x3098ee++){var _0x300181=_0x58af5e[_0x3098ee]['param'+'s']['join'](',')+'\x20->\x20'+(_0x58af5e[_0x3098ee][_0xb23d79(0x795)+_0xb23d79(0xb40)]||'void');_0x2589e7[_0x300181]=(_0x2589e7[_0x300181]||-0x71d+-0x113d+-0x6*-0x40f)+(0x2411+0x95a+-0x2d6a);}_0x5ede1a['wasmT'+'ypes']=_0x2589e7;}catch(_0x205522){}return _0x5ede1a;}function _0x3e1e01(_0xa57e29,_0x5b64cb,_0x532fc1){var _0x14a630=_0x4b6c3b;try{var _0x57c615=_0x49dac9[_0x5b64cb]||[];for(var _0x31267b=0x11*0x27+0x1*0x1cc9+-0x1f60;_0x31267b<_0x57c615[_0x14a630(0x3f7)+'h'];_0x31267b++){if(_0x220211['GJjSP'](_0x57c615[_0x31267b][-0x241c+0x1b89+0x894],_0x532fc1))continue;var _0x560f1a=_0x57c615[_0x31267b][-0x4f0+-0x73a+0xc2a*0x1];if(_0x532fc1['index'+'Of'](_0x220211['ZevKa'])===0x1b0a+0x16b1+-0x31bb){var _0x1b4a74=(_0x14a630(0x2de)+'|3|4|'+'2|6')['split']('|'),_0x5c5bb3=-0x4e1+-0x990+0xe71;while(!![]){switch(_0x1b4a74[_0x5c5bb3++]){case'0':if(!_0x51c5ed)return null;continue;case'1':var _0x51c5ed=_0x303b5b(_0xa57e29,_0x560f1a,_0x532fc1);continue;case'2':if(!_0x234a99[_0x14a630(0x608)]['lengt'+'h'])return null;continue;case'3':_0x51c5ed['k']=_0x532fc1;continue;case'4':var _0x234a99=_0x2034b8([_0x51c5ed]);continue;case'5':_0x51c5ed['o']=_0x560f1a;continue;case'6':return _0x234a99['rows'][-0x1f*-0x29+-0x1a*-0xe5+0x1c39*-0x1];}break;}}var _0x5a285b=_0x220211[_0x14a630(0x51c)](_0x4094a9,_0xa57e29+_0x560f1a,_0x532fc1);if(_0x5a285b===undefined)return null;return{'o':'0x'+_0x560f1a['toStr'+_0x14a630(0x6cd)](0x1527+-0x130+0x3fb*-0x5),'v':_0x5a285b};}}catch(_0x47df52){}return null;}function _0x2393c1(){var _0x33e43e=_0x4b6c3b,_0x37ffb8={'eTAyR':function(_0x16e405,_0x366bdc){return _0x16e405(_0x366bdc);}},_0x20e0f3={};_0x4b0787['ok']=0x6d+-0x911+0x8a4,_0x4b0787[_0x33e43e(0x7aa)+'d']=0x7e9+0x15a1+0xc7*-0x26,_0x4b0787[_0x33e43e(0x973)+'rror']=null;var _0x457e38=Object['keys'](_0x49dac9);for(var _0x37aff0=0x2524+0x724+-0x2c48;_0x37aff0<_0x457e38[_0x33e43e(0x3f7)+'h'];_0x37aff0++){var _0x2fb6f4=_0x457e38[_0x37aff0],_0x4bd410=_0x51bfd8[_0x2fb6f4];if(!_0x4bd410||!_0x4bd410['ptr'])continue;var _0x1b56ad=_0x49dac9[_0x2fb6f4]||[],_0x177b42=[];for(var _0x51a4b1=0x5*0x1e2+0x78d*-0x1+-0x1dd;_0x220211[_0x33e43e(0x714)](_0x51a4b1,_0x1b56ad['lengt'+'h']);_0x51a4b1++){if(_0x220211['cSOXX']!=='ojDRc')_0x44fc45(_0x42bd2a);else{var _0x13ef42=_0x1b56ad[_0x51a4b1][0x1025+0x253f+-0x4*0xd59],_0x38a78f=_0x1b56ad[_0x51a4b1][0x30*0x44+0x533*0x2+-0x1725];if(_0x38a78f[_0x33e43e(0x19e)+'Of'](_0x33e43e(0x248))===-0x3e9*0x5+0x3d*-0x85+0x333e){var _0xecc1f0=_0x303b5b(_0x4bd410[_0x33e43e(0x47b)],_0x13ef42,_0x38a78f);if(!_0xecc1f0)continue;_0xecc1f0['o']=_0x13ef42,_0xecc1f0['k']=_0x38a78f,_0x177b42[_0x33e43e(0x793)](_0xecc1f0);}else{var _0x1e7fe3=_0x4094a9(_0x4bd410[_0x33e43e(0x47b)]+_0x13ef42,_0x38a78f);if(_0x220211[_0x33e43e(0x24d)](_0x1e7fe3,undefined))continue;var _0x404e43={'o':_0x13ef42,'k':_0x38a78f,'v':_0x1e7fe3};if(_0x220211[_0x33e43e(0x2fd)](_0x38a78f,'v2')||_0x220211['KyyVp'](_0x38a78f,'v3')||_0x220211[_0x33e43e(0x317)](_0x38a78f,'v4')){var _0x479515=_0x220211[_0x33e43e(0x6ed)](_0x38a78f,'v2')?-0x186d+0x11d8+0x697:_0x220211['rrALt'](_0x38a78f,'v3')?-0xb7*-0x15+-0x1303+0x403:-0x1656+0x2d9+0x1381,_0x4ef92c=_0x220211[_0x33e43e(0x1ee)](_0x5f44a9,_0x4bd410['ptr'],_0x13ef42,_0x479515);_0x4ef92c&&(_0x404e43[_0x33e43e(0x890)]=_0x4ef92c,_0x404e43['v']=_0x4ef92c[0x16c1+0xd3*-0x17+-0x3cc]);}_0x177b42['push'](_0x404e43);}}}if(_0x177b42[_0x33e43e(0x3f7)+'h']){if(_0x220211[_0x33e43e(0xaf0)]!=='BExak')_0x5a1869['oncli'+'ck']=function(){_0x37ffb8['eTAyR'](_0x55b9ff,_0x26705f);};else{var _0xd60e05=_0x220211[_0x33e43e(0x970)](_0x2034b8,_0x177b42);_0x20e0f3[_0x2fb6f4]=_0xd60e05['rows'],_0x4659b4[_0x2fb6f4]={'key':_0xd60e05['key'],'sane':_0xd60e05[_0x33e43e(0x4c8)],'checked':_0xd60e05[_0x33e43e(0x82c)+'ed'],'keyConsistent':_0xd60e05['keyCo'+_0x33e43e(0x498)+'ent'],'keySource':_0xd60e05[_0x33e43e(0x5ef)+_0x33e43e(0xb02)]};}}}return _0x20e0f3;}function _0x2034b8(_0x44277f){var _0x3497b7=_0x4b6c3b,_0x2f82dc=-0x20f9+0xd64+-0x3*-0x687,_0x5c70a2=-0x7cc*-0x4+-0x2574+0x1*0x644,_0xfa2ae5=null;for(var _0x1ee79b=0x221b*-0x1+-0x1*-0x50b+-0x136*-0x18;_0x1ee79b<_0x44277f['lengt'+'h'];_0x1ee79b++){var _0x27189c=_0x44277f[_0x1ee79b];if(_0x220211[_0x3497b7(0x7c4)](_0x27189c['k']['index'+'Of']('obf'),0xa81+0x743+-0x11c4))continue;_0x27189c['v']=_0x4a377c(_0x27189c['k'],_0x27189c[_0x3497b7(0x19d)+'n'],_0x27189c[_0x3497b7(0x7ae)+'Offse'+'t0']),_0x27189c['keyUs'+'ed']=_0x27189c[_0x3497b7(0x7ae)+'Offse'+'t0'],_0x27189c[_0x3497b7(0xb2c)]=_0x220211['fRmdV'](_0x220211['tluMn'](_0x220211[_0x3497b7(0x363)](_0x220211[_0x3497b7(0xa21)](_0x220211['gdUBK'](_0x3497b7(0x8c6),_0x27189c['hidde'+'n']),_0x220211[_0x3497b7(0x5b4)])+_0x27189c[_0x3497b7(0x1f6)]+(_0x27189c[_0x3497b7(0x389)]?'\x20ACTI'+'VE':''),'\x20k0=')+_0x27189c[_0x3497b7(0x7ae)+_0x3497b7(0xa25)+'t0'],_0x3497b7(0x696)),_0x27189c['hex']);if(_0x220211['sKrzH'](_0xfa2ae5,null))_0xfa2ae5=_0x27189c['keyAt'+'Offse'+'t0'];_0x5c70a2++,_0x3032d4(_0x27189c)?(_0x2f82dc++,_0x27189c[_0x3497b7(0x4c8)]=!![]):_0x27189c[_0x3497b7(0x4c8)]=![],delete _0x27189c['alt'];}return{'rows':_0x44277f,'key':_0xfa2ae5,'sane':_0x2f82dc,'checked':_0x5c70a2,'keyConsistent':_0x220211['LQZIO'](_0x4405e9,_0x44277f),'keySource':'offse'+_0x3497b7(0x8f8)+'int-w'+_0x3497b7(0x281)};}function _0x4405e9(_0x221bd9){var _0x2c50a6=_0x4b6c3b;if(_0x220211['XGddT']!==_0x2c50a6(0x86d))_0x58a44a[_0x2c50a6(0x454)+'e']();else{var _0x71768c={};for(var _0xda9768=0x1fb5+-0x11*-0x19f+-0x3b44;_0xda9768<_0x221bd9[_0x2c50a6(0x3f7)+'h'];_0xda9768++){if(_0x220211['IUhFm']!=='hqxxz'){var _0x1a04e7=_0x221bd9[_0xda9768];if(_0x1a04e7['k']['index'+'Of'](_0x2c50a6(0x248))!==0x15a9+-0x3e*-0x97+-0x3a3b)continue;if(_0x71768c[_0x1a04e7['k']]===undefined)_0x71768c[_0x1a04e7['k']]=_0x1a04e7[_0x2c50a6(0x97a)+'ed'];else{if(_0x71768c[_0x1a04e7['k']]!==_0x1a04e7['keyUs'+'ed'])return![];}}else _0x80bb15['on']=!![],_0x4a6e68['boxes']=![];}return!![];}}function _0x3032d4(_0x40166f){var _0x57a962=_0x4b6c3b,_0x44d613={'Jctnh':function(_0x26d5da,_0x4f2f66){return _0x220211['tbKNe'](_0x26d5da,_0x4f2f66);},'LzvxB':function(_0x4bdb91,_0x181f8b){var _0x47cfec=_0x3979;return _0x220211[_0x47cfec(0x3aa)](_0x4bdb91,_0x181f8b);},'nOwRG':function(_0xe5bf36){return _0xe5bf36();}};if(_0x220211[_0x57a962(0x954)](_0x220211[_0x57a962(0x71b)],_0x220211[_0x57a962(0x7b2)])){var _0x5f21fb=_0x40166f['v'];if(_0x220211[_0x57a962(0xa40)](typeof _0x5f21fb,'numbe'+'r')||!isFinite(_0x5f21fb))return![];if(_0x220211['jpqmg'](_0x40166f['k'],_0x220211[_0x57a962(0x20d)]))return _0x5f21fb===0x1251*-0x1+0x9d9+0x8*0x10f||_0x5f21fb===0xdf8+-0x1b38*0x1+-0x1*-0xd41;var _0x1a2be8=_0x40166f['fake'];if(typeof _0x1a2be8!==_0x57a962(0x8e9)+'r'||!isFinite(_0x1a2be8))return!![];if(_0x40166f[_0x57a962(0x389)]===0x1f4d+-0x1129+-0xe23)return Math['abs'](_0x220211[_0x57a962(0x55a)](_0x5f21fb,_0x1a2be8))<=Math[_0x57a962(0xb3f)](-0x1*0x129d+-0x5c9+-0x1867*-0x1,Math[_0x57a962(0x1f2)](_0x1a2be8)*(0xc*0x2d4+-0xd73*-0x1+0x1*-0x2f63+0.6));return _0x220211[_0x57a962(0x92b)](Math[_0x57a962(0x1f2)](_0x5f21fb),-0x12e*0x316925+0x1*0x289d34c7+0x4d479edf*0x1);}else{_0x54570d[_0x50bc2c]={'ptr':_0x1eca8b,'firstSeen':_0x537eaa[_0x57a962(0x5a5)](),'hits':0x0,'replaced':!!_0x10a9ca};try{var _0x1d0ca6=_0x595612['filte'+'r'](function(_0x3514aa){var _0x231329=_0x57a962;return _0x3514aa[_0x231329(0x226)]===_0x218d57;})[-0x24a*-0x7+-0x1958+0x952];_0x33b5d0={'type':_0xc8382b,'atMs':_0x44d613[_0x57a962(0x9aa)](_0x1082db[_0x57a962(0x5a5)](),_0x5af3bb),'originalFunc':!!(_0x1d0ca6&&_0x1d0ca6[_0x57a962(0xb25)]&&_0x44d613['LzvxB'](typeof _0x1d0ca6[_0x57a962(0xb25)][_0x57a962(0xa60)+_0x57a962(0x766)+'nc'],_0x57a962(0x971)+'ion')),'resolveGameAtFire':!!_0x44d613[_0x57a962(0x4fa)](_0x45be8a),'gameSourceAtFire':_0x58749d[_0x57a962(0x5d4)+'e']};}catch(_0x427a5b){}}}function _0x4ea42c(){var _0x47a550=_0x4b6c3b,_0x43696c={};try{var _0x3f6880=window['Unity'+_0x47a550(0xa6a)+_0x47a550(0x8ab)]&&window[_0x47a550(0xaac)+_0x47a550(0xa6a)+'dkit']['Runti'+'me'];_0x43696c[_0x47a550(0x60c)]=_0x3f6880&&_0x3f6880['__sak'+'uraTa'+'g']||null,_0x43696c[_0x47a550(0x316)+_0x47a550(0x528)]=!!(_0x3f6880&&_0x1973a7&&_0x220211[_0x47a550(0x45d)](_0x3f6880[_0x47a550(0x1e6)+_0x47a550(0x79f)+'g'],_0x1973a7)),_0x43696c[_0x47a550(0x706)+'meGam'+'e']=_0x3f6880&&_0x3f6880[_0x47a550(0x8a0)]?typeof _0x3f6880[_0x47a550(0x8a0)]:'none',_0x43696c[_0x47a550(0x740)+'nRunt'+_0x47a550(0x866)+'Expor'+'ted']=!!(_0x523f84&&_0x523f84[_0x47a550(0x701)+_0x47a550(0xb01)]&&_0x523f84['_runt'+'ime']===_0x3f6880),_0x43696c[_0x47a550(0x740)+'nRunt'+_0x47a550(0xaad)+'me']=_0x523f84&&_0x523f84[_0x47a550(0x701)+_0x47a550(0xb01)]&&_0x523f84[_0x47a550(0x701)+_0x47a550(0xb01)][_0x47a550(0x8a0)]?typeof _0x523f84[_0x47a550(0x701)+_0x47a550(0xb01)][_0x47a550(0x8a0)]:'none';}catch(_0x2de4a1){_0x43696c[_0x47a550(0x517)]=String(_0x2de4a1&&_0x2de4a1['messa'+'ge']||_0x2de4a1);}return _0x43696c;}function _0x3046c6(){var _0x4a82a2=_0x4b6c3b,_0x13382c=('1|7|2'+_0x4a82a2(0x7ea)+_0x4a82a2(0xae2))['split']('|'),_0x2371ec=0x1c0d+-0x523*0x6+0x2c5;while(!![]){switch(_0x13382c[_0x2371ec++]){case'0':var _0x3fc286=_0x194389();continue;case'1':var _0x1d3571=[_0x220211[_0x4a82a2(0xa4b)],_0x4a82a2(0x4d7)+_0x4a82a2(0x36a),_0x4a82a2(0x7c0),_0x220211[_0x4a82a2(0x48d)]];continue;case'2':for(var _0xc6370b=0x2*-0x14b+-0x16da+-0xb*-0x250;_0x220211[_0x4a82a2(0x2cc)](_0xc6370b,_0x1d3571[_0x4a82a2(0x3f7)+'h']);_0xc6370b++){var _0x497d22=_0x1d3571[_0xc6370b],_0x35f50d=typeof window[_0x497d22];_0xa3a5b7[_0x497d22]=_0x35f50d===_0x220211[_0x4a82a2(0x660)]?_0x4a82a2(0x485)+'ined':_0x35f50d;}continue;case'3':_0xa3a5b7[_0x4a82a2(0x208)+'ource']=_0x4b0787[_0x4a82a2(0x5d4)+'e'];continue;case'4':_0xa3a5b7['value'+_0x4a82a2(0x654)+'er']=typeof _0x458e96;continue;case'5':try{_0xa3a5b7['hasMo'+'dule']=!!(_0x3fc286&&_0x3fc286[_0x4a82a2(0xa68)+'e']),_0xa3a5b7[_0x4a82a2(0x942)+'8']=!!(_0x3fc286&&_0x3fc286['Modul'+'e']&&_0x3fc286['Modul'+'e'][_0x4a82a2(0xa7c)+'8']),_0xa3a5b7['heapB'+'ytes']=_0xa3a5b7[_0x4a82a2(0x942)+'8']?_0x3fc286[_0x4a82a2(0xa68)+'e'][_0x4a82a2(0xa7c)+'8'][_0x4a82a2(0x3f7)+'h']:-0x15*0x1d8+0x2642+-0x76*-0x1;}catch(_0x3b2854){_0xa3a5b7[_0x4a82a2(0x5b1)+_0x4a82a2(0x71c)]=![],_0xa3a5b7[_0x4a82a2(0x942)+'8']=![],_0xa3a5b7[_0x4a82a2(0x9ce)+'ytes']=0x24e0+-0xcd+-0x1*0x2413;}continue;case'6':return _0xa3a5b7;case'7':var _0xa3a5b7={};continue;}break;}}function _0x72529(_0x2b2bd6){var _0x1a2126=_0x4b6c3b,_0x3a6e76={};for(var _0x24fa52 in _0x2b2bd6){if(_0x220211['fiqZA']===_0x220211['fiqZA']){var _0x48e678=_0x2b2bd6[_0x24fa52];for(var _0x131219=-0x8c6*-0x4+-0x3*0xc77+0x24d;_0x131219<_0x48e678[_0x1a2126(0x3f7)+'h'];_0x131219++){_0x3a6e76[_0x24fa52+'+0x'+_0x48e678[_0x131219]['o'][_0x1a2126(0x1f5)+_0x1a2126(0x6cd)](-0x171b+-0x1184+0x1*0x28af)]=_0x48e678[_0x131219]['v'];}}else{if(_0x1d1a03[_0x3996e1][_0x1a2126(0xb25)]&&_0x5b3584[_0xfcf4de]['hook'][_0x1a2126(0x6bd)+'ed'])_0x8d3b5++;}}return _0x3a6e76;}function _0x3c8bb4(_0x4a9a1b,_0x12ddf3){var _0x31e468=_0x4b6c3b;if(_0x220211[_0x31e468(0x40f)](_0x4a9a1b,_0x31e468(0x213))){if(_0x220211[_0x31e468(0x5a3)](_0x220211[_0x31e468(0x9ea)],_0x31e468(0x52f)))_0x156607(_0x4e4dd9['on'],_0x4410fd);else{_0x220211[_0x31e468(0x858)](_0x1f9a50,_0x12ddf3&&typeof _0x12ddf3['on']===_0x31e468(0x5b0)+'an'?_0x12ddf3['on']:_0x11986b['on'],_0x12ddf3&&typeof _0x12ddf3[_0x31e468(0x1e9)+'r']==='numbe'+'r'?_0x12ddf3[_0x31e468(0x1e9)+'r']:_0x11986b[_0x31e468(0x1e9)+'r']);return;}}if(_0x4a9a1b!==_0x31e468(0x6e5)+_0x31e468(0x96e))return;var _0x301455=_0x2393c1(),_0x5ed6b9=_0x220211['yQZRW'](_0x72529,_0x301455);if(!_0x2fe959){_0x2fe959=_0x5ed6b9,_0x609f51=[],_0x3ec60e('repor'+'t',{'report':_0x4bf228()});return;}_0x609f51=[];for(var _0x94cbf5 in _0x5ed6b9){var _0x56ed18=_0x2fe959[_0x94cbf5],_0x13b12a=_0x5ed6b9[_0x94cbf5];if(_0x220211['lmWPR'](_0x56ed18,_0x13b12a))_0x609f51[_0x31e468(0x793)](_0x94cbf5+':\x20'+_0x56ed18+'\x20->\x20'+_0x13b12a);}_0x2fe959=_0x5ed6b9,_0x220211['nMnSz'](_0x3ec60e,_0x31e468(0x7dc)+'t',{'report':_0x4bf228()});}var _0xb884d9=null;function _0x233f8e(){var _0x298238=_0x4b6c3b,_0x1240a8={'JjMeb':function(_0x3684bc,_0x5221a4){return _0x3684bc===_0x5221a4;},'RQxjS':function(_0x379c4e,_0x382f06){return _0x379c4e+_0x382f06;},'CnRoD':_0x298238(0x5d6)+_0x298238(0x5ec)+':rgba'+'(21,1'+_0x298238(0x3a1)+_0x298238(0x8f5)+_0x298238(0x957)+'r:1px'+'\x20soli'+'d\x20rgb'+'a(255'+_0x298238(0x84f)+_0x298238(0x63a)+_0x298238(0x8ff)+_0x298238(0x3bf)+'radiu'+_0x298238(0xae6)+'x;','sBeeg':_0x220211[_0x298238(0x23d)],'hebEd':'Clipb'+'oard\x20'+'block'+_0x298238(0x6ad)+_0x298238(0x7f8)+_0x298238(0xaf6)+_0x298238(0x271)+_0x298238(0x3d1)+'ad','ATbDX':_0x220211[_0x298238(0x802)]};if(_0xb884d9)return _0xb884d9;try{if(!document[_0x298238(0x60e)]||!document[_0x298238(0x60e)][_0x298238(0xac1)+'dChil'+'d'])return null;if(!document[_0x298238(0x4e7)+'ement'+'ById'](_0x220211['Pwivh'])){var _0x3e84cb=document[_0x298238(0x769)+_0x298238(0x41c)+_0x298238(0x3ff)](_0x298238(0x855));_0x3e84cb['id']='sakur'+_0x298238(0x875)+'hud-c'+'ss',_0x3e84cb[_0x298238(0x3d4)+_0x298238(0x830)+'t']=_0x220211[_0x298238(0x233)],(document[_0x298238(0x750)]||document[_0x298238(0x304)+_0x298238(0x92e)+'ement'])['appen'+'dChil'+'d'](_0x3e84cb);}var _0x3bd9f4=document['creat'+'eElem'+'ent'](_0x220211[_0x298238(0xa2d)]);_0x3bd9f4['id']=_0x298238(0x621)+_0x298238(0x875)+'hud',_0x3bd9f4[_0x298238(0x855)]['cssTe'+'xt']=_0x220211['Qcrxw'](_0x220211[_0x298238(0x363)]('posit'+_0x298238(0x60f)+_0x298238(0x998)+'left:'+_0x298238(0x86a)+'ottom'+':8px;'+'z-ind'+_0x298238(0xaf7)+_0x298238(0x413)+'647;d'+_0x298238(0x453)+'y:fle'+'x;fle'+_0x298238(0x939)+_0x298238(0x68a)+_0x298238(0x6bc)+'umn;g'+'ap:4p'+'x;',_0x298238(0x5d6)+'round'+_0x298238(0x85f)+_0x298238(0xa5d)+_0x298238(0x3a1)+_0x298238(0x963)+_0x298238(0x957)+_0x298238(0x7bb)+_0x298238(0x433)+_0x298238(0x1e1)+'a(255'+_0x298238(0x84f)+_0x298238(0x63a)+_0x298238(0x5af)+_0x298238(0x8bd)+_0x298238(0x9a5)+'us:10'+'px;')+_0x220211[_0x298238(0x419)],_0x298238(0x84d)+_0x298238(0x1b8)+':0\x2010'+'px\x2030'+_0x298238(0xb0a)+'2px\x20#'+_0x298238(0x417)+_0x298238(0x5ba)+_0x298238(0x712)+_0x298238(0x716)+';-web'+_0x298238(0x78f)+_0x298238(0x5ba)+_0x298238(0x712)+_0x298238(0x716)+';');var _0x4c4218=_0x220211['LFwzQ'];_0x3bd9f4[_0x298238(0x510)+'HTML']=_0x220211[_0x298238(0xa85)](_0x220211[_0x298238(0x637)](_0x220211[_0x298238(0x321)](_0x220211[_0x298238(0x8ea)](_0x220211['KdFMh'](_0x220211[_0x298238(0xb51)](_0x220211[_0x298238(0x1be)](_0x220211[_0x298238(0xa02)](_0x220211[_0x298238(0x1f8)](_0x220211[_0x298238(0xa79)],'<b\x20st'+'yle=\x22'+'color'+':')+_0x563cd7+('\x22>sak'+_0x298238(0x849)+'b>')+('<butt'+_0x298238(0x300)+_0x298238(0x666)+'\x22sp\x22\x20'+_0x298238(0x855)+_0x298238(0x486)+'kgrou'+'nd:tr'+_0x298238(0x8a6)+'rent;'+'borde'+'r:1px'+'\x20soli'+_0x298238(0x1e1)+'a(255'+',143,'+_0x298238(0x63a)+_0x298238(0x979)),'color'+':#f7e'+_0x298238(0x6db)+_0x298238(0x8bd)+_0x298238(0x9a5)+'us:6p'+_0x298238(0x412)+'ding:'+'2px\x208'+'px;cu'+'rsor:'+'point'+'er;fo'+'nt:in'+_0x298238(0xa63)+';\x22>Sp'+_0x298238(0x955)+_0x298238(0x809)+_0x298238(0x537)+'>'),_0x220211['TQUNV'])+_0x563cd7+_0x220211['mZUab']+(_0x298238(0x8e0)+'\x20data'+'-a=\x22f'+'v\x22\x20st'+_0x298238(0x6a9)+_0x298238(0x8bc)+':#bda'+_0x298238(0x943)+'in-wi'+_0x298238(0x9ac)+_0x298238(0xb03)+'>2.0x'+'</spa'+'n>'),_0x298238(0x603)+'on\x20da'+_0x298238(0x666)+_0x298238(0x9f8)+'\x20styl'+_0x298238(0x388)+'ckgro'+_0x298238(0x27a)+'ransp'+_0x298238(0x309)+_0x298238(0xaa0)+'er:1p'+_0x298238(0x9f4)+'id\x20rg'+_0x298238(0x509)+'5,143'+',177,'+_0x298238(0xacf)),_0x220211['ycElX']),_0x220211[_0x298238(0x781)])+('color'+_0x298238(0x66c)+'ef5;b'+'order'+_0x298238(0x9a5)+'us:6p'+'x;pad'+_0x298238(0xa58)+_0x298238(0xa55)+_0x298238(0x242)+_0x298238(0x556)+_0x298238(0xa16)+_0x298238(0x683)+_0x298238(0x862)+_0x298238(0xa63)+_0x298238(0x466)+'ap</b'+'utton'+'>')+_0x220211[_0x298238(0x74d)]+(_0x298238(0x8bc)+':#f7e'+_0x298238(0x6db)+'order'+_0x298238(0x9a5)+_0x298238(0x864)+_0x298238(0x412)+'ding:'+_0x298238(0x628)+_0x298238(0x242)+_0x298238(0x556)+'point'+'er;fo'+'nt:in'+'herit'+_0x298238(0x9e9)+_0x298238(0x73e)+_0x298238(0x46d)),_0x298238(0x482)+'>'),_0x298238(0x848)+'data-'+'a=\x22st'+_0x298238(0x4b2)+_0x298238(0x443)+'olor:'+'#8d7a'+_0x298238(0x38d)+'x-wid'+'th:29'+_0x298238(0xb03)+'></di'+'v>'),'<div\x20'+'data-'+_0x298238(0x7e1)+'2\x22\x20st'+_0x298238(0x6a9)+_0x298238(0x8bc)+_0x298238(0x589)+_0x298238(0x70e)+_0x298238(0x320)+'dth:2'+_0x298238(0x302)+_0x298238(0x52c)+_0x298238(0x5c0)),_0x3bd9f4[_0x298238(0x510)+_0x298238(0x936)]=_0x4c4218;var _0x4d608a=function(_0x174993){var _0x466835=_0x298238;if(_0x1240a8[_0x466835(0x833)](_0x466835(0xad9),_0x466835(0x318)))_0x4fa70c(!_0x337da1['on'],_0x3cf07c[_0x466835(0x1e9)+'r']);else return _0x3bd9f4['query'+_0x466835(0x2c6)+_0x466835(0x2fc)]('[data'+_0x466835(0x229)+_0x174993+'\x22]');},_0x54481b=_0x220211['iwrVH'](_0x4d608a,'st'),_0x5f454a=_0x220211['TKjIj'](_0x4d608a,_0x220211['FdjhP']),_0x154d46=_0x220211[_0x298238(0x649)](_0x4d608a,'sp'),_0x17c892=_0x220211[_0x298238(0x98f)](_0x4d608a,'fx'),_0x22977c=_0x4d608a('fv'),_0x500756=_0x4d608a(_0x220211[_0x298238(0xae3)]);if(_0x154d46)_0x154d46[_0x298238(0x438)+'ck']=function(){var _0x3d4bc9=_0x298238;_0x1f9a50(!_0x11986b['on'],_0x11986b[_0x3d4bc9(0x1e9)+'r']);};if(_0x17c892)_0x17c892['oninp'+'ut']=function(){_0x1f9a50(_0x11986b['on'],parseFloat(_0x17c892['value'])||-0x26c+0xa*0x9+0x1*0x213);};if(_0x4d608a(_0x220211[_0x298238(0x7d1)]))_0x4d608a(_0x220211['dGpsg'])[_0x298238(0x438)+'ck']=function(){var _0x1cef04=_0x298238;_0x220211[_0x1cef04(0x7f5)](_0x3c8bb4,_0x1cef04(0x6e5)+'hot');};var _0x4f3573=_0x4d608a(_0x298238(0x38a));if(_0x4f3573)_0x4f3573['oncli'+'ck']=function(){var _0x130028=_0x298238,_0x3ddd81={'hDyuK':_0x220211['gfYmV']};if(_0x220211[_0x130028(0x374)]('ejtfV',_0x130028(0xa90))){if(!_0x5623eb['on'])_0x5623eb['on']=!![],_0x5623eb[_0x130028(0x632)]=![];else{if(!_0x5623eb['boxes']){if(_0x130028(0x5a1)===_0x130028(0x8d0)){if(_0x5a26bf)return _0x3bc6b2;try{var _0x3efd54=('5|7|3'+_0x130028(0x1dd)+_0x130028(0x3a0)+_0x130028(0x7e8))[_0x130028(0xaa6)]('|'),_0x4917d1=-0xcd*0x16+-0x1*-0x41+0x115d;while(!![]){switch(_0x3efd54[_0x4917d1++]){case'0':_0x10290e['style']['cssTe'+'xt']=_0x1240a8[_0x130028(0xb08)](_0x1240a8[_0x130028(0xb08)]('posit'+'ion:f'+_0x130028(0x998)+'right'+_0x130028(0xb20)+';top:'+'46px;'+_0x130028(0x839)+_0x130028(0xaf7)+_0x130028(0x413)+_0x130028(0x861)+_0x130028(0x3dc)+'r-eve'+_0x130028(0x5cd)+'one;'+_0x1240a8['CnRoD'],'paddi'+_0x130028(0xa44)+_0x130028(0x22c)+'t:10p'+_0x130028(0x2e9)+_0x130028(0xa3f)+_0x130028(0xaea)+_0x130028(0x5cb)+'onsol'+_0x130028(0x4c6)+'nospa'+_0x130028(0x88e)+_0x130028(0x33e)+'bda9c'+'9;'),_0x1240a8['sBeeg']);continue;case'1':if(!_0x3ea9b4['cv']||!_0x2559af['cv'][_0x130028(0xb22)+'ntext'])_0x516b0c=_0x23bfce;continue;case'2':_0x30ef76[_0x130028(0x60e)][_0x130028(0xac1)+_0x130028(0x249)+'d'](_0x10290e);continue;case'3':_0x10290e['id']='sakur'+_0x130028(0x7e0);continue;case'4':_0x10290e[_0x130028(0x510)+'HTML']=_0x130028(0x799)+'as\x20id'+_0x130028(0xb58)+_0x130028(0x3f9)+_0x130028(0x305)+_0x130028(0x613)+_0x130028(0x693)+'60\x22\x20h'+'eight'+'=\x22160'+'\x22\x20sty'+_0x130028(0x524)+'ispla'+_0x130028(0x448)+'ck\x22><'+_0x130028(0x832)+'as>'+('<div\x20'+_0x130028(0x902)+_0x130028(0x250)+_0x130028(0x997)+_0x130028(0x690)+'tyle='+_0x130028(0xa0a)+'-alig'+'n:cen'+_0x130028(0x4db)+'</div'+'>');continue;case'5':if(!_0x2e1b4f[_0x130028(0x60e)]||!_0x4c327f[_0x130028(0x60e)][_0x130028(0xac1)+_0x130028(0x249)+'d'])return null;continue;case'6':_0x5f3a23={'el':_0x10290e,'cv':_0x10290e[_0x130028(0x797)+_0x130028(0x2c6)+'tor'](_0x130028(0x2a7)+'ra-es'+_0x130028(0x258)),'lg':_0x10290e['query'+_0x130028(0x2c6)+'tor']('#saku'+_0x130028(0xa17)+'p-lg')};continue;case'7':var _0x10290e=_0x4bd1b2[_0x130028(0x769)+'eElem'+_0x130028(0x3ff)](_0x130028(0x2aa));continue;case'8':return _0x4d02d2;case'9':var _0x23bfce={'cv':{'getContext':function(){return null;}},'el':_0x10290e};continue;}break;}}catch(_0x1d68f3){return null;}}else _0x5623eb[_0x130028(0x632)]=!![];}else _0x5623eb['on']=![];}_0x4f3573[_0x130028(0x3d4)+_0x130028(0x830)+'t']=!_0x5623eb['on']?'ESP\x20o'+'ff':_0x5623eb[_0x130028(0x632)]?'ESP\x20b'+_0x130028(0x465):_0x130028(0x780)+'ap',_0x4f3573[_0x130028(0x855)]['backg'+'round']=_0x5623eb['on']?_0x563cd7:'trans'+_0x130028(0x676)+'t',_0x4f3573['style'][_0x130028(0x8bc)]=_0x5623eb['on']?'#2a0f'+'1b':_0x220211['vKGtS'];try{var _0x328ec1=_0x3c3442();if(_0x328ec1&&_0x328ec1['el'])_0x328ec1['el']['style'][_0x130028(0xb12)+'ay']=_0x5623eb['on']?'':_0x220211[_0x130028(0x802)];var _0x1a36cf=_0x4518e2;if(_0x1a36cf&&_0x1a36cf['cv'])_0x1a36cf['cv'][_0x130028(0x855)]['displ'+'ay']=_0x5623eb['on']&&_0x5623eb['boxes']?'':_0x130028(0xae5);}catch(_0x351641){}}else return _0x12aeed[_0x130028(0xad5)](_0x3ddd81[_0x130028(0x31c)],_0x130028(0x8bc)+':'+_0x44cfca,_0x216a15),null;};if(_0x4d608a(_0x298238(0x1e0)))_0x220211['hdNUg'](_0x4d608a,_0x220211[_0x298238(0xa76)])[_0x298238(0x438)+'ck']=function(){var _0x43eb23=_0x298238,_0x273345={'dHsHn':_0x43eb23(0x8f1)+'d','ULAib':function(_0x203c0e,_0x42ad50){return _0x203c0e+_0x42ad50;},'fANkA':_0x1240a8['hebEd']};if('xgAnj'!=='xgAnj'){var _0x165780={'Zihih':_0x273345[_0x43eb23(0x3e0)]},_0x3a931f=_0x273345['ULAib'](_0x273345['ULAib'](_0x53b1ed+'\x0a',_0x1e0ab7['strin'+'gify'](_0x303d50,null,0x1207+-0x1*0x98d+-0x879))+'\x0a',_0x62b8b4);if(_0x23d277['clipb'+_0x43eb23(0x3f8)]&&_0x297a46['clipb'+_0x43eb23(0x3f8)][_0x43eb23(0x8fe)+_0x43eb23(0x4e5)])_0x52dbd7[_0x43eb23(0xad0)+'oard']['write'+_0x43eb23(0x4e5)](_0x3a931f)[_0x43eb23(0x78a)](function(){var _0x56ea50=_0x43eb23;_0x277425['textC'+_0x56ea50(0x830)+'t']=_0x165780[_0x56ea50(0x1d5)];});else _0x452fdc[_0x43eb23(0x3d4)+'onten'+'t']=_0x273345[_0x43eb23(0x6a8)];}else{if(!_0x500756)return;var _0x3f00e3=_0x500756[_0x43eb23(0x855)][_0x43eb23(0xb12)+'ay']===_0x1240a8[_0x43eb23(0x638)];_0x500756[_0x43eb23(0x855)][_0x43eb23(0xb12)+'ay']=_0x3f00e3?'':_0x43eb23(0xae5),_0x4d608a('fold')[_0x43eb23(0x3d4)+_0x43eb23(0x830)+'t']=_0x3f00e3?'-':'+';}};return document[_0x298238(0x60e)]['appen'+_0x298238(0x249)+'d'](_0x3bd9f4),_0xb884d9={'el':_0x3bd9f4,'st':_0x54481b,'st2':_0x5f454a,'sp':_0x154d46,'fx':_0x17c892,'fv':_0x22977c},_0xb884d9;}catch(_0x1edd24){if(_0x298238(0x985)!==_0x220211[_0x298238(0x7be)])_0x1b8517(!_0x581b83()),_0x220211[_0x298238(0xb0e)](_0x3c01c7);else return console[_0x298238(0xad5)]('%c[sa'+'kura]'+'\x20in-f'+_0x298238(0x50b)+_0x298238(0x67a)+_0x298238(0x80d)+'ed','color'+':'+_0x563cd7,_0x1edd24),null;}}var _0x16703e=-0x1906*0x1+0xa93+-0xe75*-0x1;function _0x1f9a50(_0x23a662,_0x1b61c8){var _0x31d9b9=_0x4b6c3b;if(_0x220211[_0x31d9b9(0x338)](_0x220211['svVAh'],'DddOx')){var _0x5e54ff=('5|9|0'+_0x31d9b9(0x456)+'8|7|3'+_0x31d9b9(0x6fe))[_0x31d9b9(0xaa6)]('|'),_0x1ccd3a=-0x1268+-0xc35+0x1e9d;while(!![]){switch(_0x5e54ff[_0x1ccd3a++]){case'0':_0x1e1b23['id']=_0x220211['OzqOe'];continue;case'1':_0x1e1b23[_0x31d9b9(0x855)]['cssTe'+'xt']=_0x31d9b9(0x993)+_0x31d9b9(0x60f)+_0x31d9b9(0x998)+_0x31d9b9(0x98d)+':12px'+_0x31d9b9(0x5b9)+'46px;'+_0x31d9b9(0x839)+_0x31d9b9(0xaf7)+'47483'+'646;p'+'ointe'+_0x31d9b9(0x91a)+_0x31d9b9(0x5cd)+_0x31d9b9(0x3be)+('backg'+'round'+_0x31d9b9(0x85f)+_0x31d9b9(0xa5d)+_0x31d9b9(0x3a1)+'.72);'+_0x31d9b9(0x957)+_0x31d9b9(0x7bb)+_0x31d9b9(0x433)+'d\x20rgb'+_0x31d9b9(0x1ac)+_0x31d9b9(0x84f)+'177,.'+_0x31d9b9(0x8ff)+_0x31d9b9(0x3bf)+_0x31d9b9(0x3ab)+_0x31d9b9(0xae6)+'x;')+_0x220211['qOhou']+_0x220211[_0x31d9b9(0x23d)];continue;case'2':if(!_0x99b703['cv']||!_0x4e6b2e['cv'][_0x31d9b9(0xb22)+_0x31d9b9(0x372)])_0x5f317b=_0x3d4eab;continue;case'3':_0x2ad5aa={'el':_0x1e1b23,'cv':_0x1e1b23[_0x31d9b9(0x797)+_0x31d9b9(0x2c6)+'tor'](_0x31d9b9(0x2a7)+_0x31d9b9(0xa17)+'p-cv'),'lg':_0x1e1b23['query'+'Selec'+_0x31d9b9(0x2fc)]('#saku'+'ra-es'+'p-lg')};continue;case'4':return _0x25737e;case'5':if(!_0x1e077e['body']||!_0x2f3b04[_0x31d9b9(0x60e)][_0x31d9b9(0xac1)+'dChil'+'d'])return null;continue;case'6':_0x1e1b23[_0x31d9b9(0x510)+'HTML']=_0x220211[_0x31d9b9(0x570)](_0x220211[_0x31d9b9(0x5fd)],_0x220211['xXcmu']);continue;case'7':_0x6066e1[_0x31d9b9(0x60e)]['appen'+_0x31d9b9(0x249)+'d'](_0x1e1b23);continue;case'8':var _0x3d4eab={'cv':{'getContext':function(){return null;}},'el':_0x1e1b23};continue;case'9':var _0x1e1b23=_0x2aad48['creat'+_0x31d9b9(0x41c)+_0x31d9b9(0x3ff)]('div');continue;}break;}}else{var _0x5f29d3=('5|3|4'+_0x31d9b9(0x6c3)+_0x31d9b9(0x959))[_0x31d9b9(0xaa6)]('|'),_0x58fc2a=-0x1*0x328+-0x3e*0x3+0x3e2;while(!![]){switch(_0x5f29d3[_0x58fc2a++]){case'0':if(!_0x11986b['on'])_0xccd687={};continue;case'1':_0x11986b[_0x31d9b9(0x1e9)+'r']=Math['min'](_0x11986b[_0x31d9b9(0xb3f)],Math['max'](_0x11986b[_0x31d9b9(0x33f)],Number(_0x1b61c8)||-0x6d*-0x53+-0x1606+0x2*-0x6a8));continue;case'2':if(_0x259c20){_0x259c20['sp']&&(_0x259c20['sp']['textC'+'onten'+'t']=_0x11986b['on']?_0x220211[_0x31d9b9(0x7d7)]:_0x220211[_0x31d9b9(0x7b8)],_0x259c20['sp']['style'][_0x31d9b9(0x5d6)+'round']=_0x11986b['on']?_0x563cd7:'trans'+'paren'+'t',_0x259c20['sp'][_0x31d9b9(0x855)]['color']=_0x11986b['on']?_0x220211[_0x31d9b9(0xa23)]:_0x31d9b9(0x9ff)+'f5');if(_0x259c20['fx'])_0x259c20['fx']['value']=String(_0x11986b[_0x31d9b9(0x1e9)+'r']);if(_0x259c20['fv'])_0x259c20['fv'][_0x31d9b9(0x3d4)+_0x31d9b9(0x830)+'t']=_0x220211[_0x31d9b9(0x536)](_0x11986b[_0x31d9b9(0x1e9)+'r'][_0x31d9b9(0x662)+'ed'](-0x37*0xae+-0x2185+-0x2*-0x2374),'x');}continue;case'3':_0x11986b['on']=!!_0x23a662;continue;case'4':_0x11986b['on']&&!_0xde6c32&&(_0x1b61c8===undefined||_0x220211['qIXOd'](_0x1b61c8,null)||_0x220211[_0x31d9b9(0x317)](_0x220211[_0x31d9b9(0x620)](Number,_0x1b61c8),0x152d+-0x16af+0x183))&&(_0x1b61c8=_0x16703e);continue;case'5':var _0xde6c32=_0x11986b['on'];continue;case'6':var _0x259c20=_0x233f8e();continue;}break;}}}function _0x3e971a(_0x389025){var _0x279fec=_0x4b6c3b,_0x3c0654=_0x220211['fOvqv'](_0x233f8e);if(!_0x3c0654||!_0x3c0654['st'])return;try{var _0x41ccca=_0x220211[_0x279fec(0x421)][_0x279fec(0xaa6)]('|'),_0x1a5d46=0x1cc2*-0x1+0x698*-0x4+0x3722;while(!![]){switch(_0x41ccca[_0x1a5d46++]){case'0':var _0x59d520=_0x348615?_0x348615['enemy'+_0x279fec(0xb24)]||-0xbfa+0x1254+-0x65a:0x1255+0x25e*-0x7+0xb*-0x29;continue;case'1':var _0x56b02f=_0x220211[_0x279fec(0x1d9)](_0x220211[_0x279fec(0x9d4)](_0x220211['RroSK'](_0x220211[_0x279fec(0x1d9)]('v'+(_0x389025&&_0x389025['versi'+'on']||_0x596a6f)+_0x220211[_0x279fec(0x4bc)]+(_0x389025&&_0x389025['hooks'+_0x279fec(0x501)+'ed']||-0x1*0x2453+0x1cd9+0x77a*0x1),'/'),_0x389025&&_0x389025[_0x279fec(0x30c)+'Total']||-0x1d41*0x1+0x1752+0x5ef)+(_0x279fec(0x49a)+'s\x20'),_0x3d3176)+(_0x279fec(0x97d)+'\x20'),_0x27644d)+_0x220211['wSCFr']+_0x1bad6a;continue;case'2':var _0x348615=_0x389025&&_0x389025[_0x279fec(0x38a)]||null;continue;case'3':if(_0x3c0654['el'])_0x3c0654['el']['style'][_0x279fec(0xb12)+'ay']='';continue;case'4':var _0x3d3176=Object['keys'](_0x389025&&_0x389025[_0x279fec(0x930)+_0x279fec(0x2c5)]||{})['lengt'+'h'];continue;case'5':if(!_0x220211['mjuiO'](_0x898e61)&&!_0x2ed218){if(_0x3c0654['el'])_0x3c0654['el']['style']['displ'+'ay']=_0x279fec(0xae5);return;}continue;case'6':_0x3c0654['st']['textC'+_0x279fec(0x830)+'t']=_0x56b02f;continue;case'7':var _0x27644d=_0x59950b?_0x220211[_0x279fec(0x49e)]((_0x59950b[_0x279fec(0x1c2)+'r']['byteL'+'ength']/(0xd8d*-0x1b3+0x82e9d+-0x6*-0x523ff))['toFix'+'ed'](0x47*0x4+-0x22a6+0xa2*0x35),'MB'):'no-me'+'m';continue;case'8':_0xa1e754&&(_0xa1e754['textC'+'onten'+'t']=_0x59d520>0x8c2+0x1b35+0x23f7*-0x1?_0x220211[_0x279fec(0x667)]+_0x59d520+(_0x98f9b3?'\x20+\x20'+_0x98f9b3+_0x279fec(0x952):'')+(_0x348615&&_0x348615[_0x279fec(0x1d4)+'a']?_0x220211['omkWh']+_0x348615[_0x279fec(0x1d4)+_0x279fec(0x70a)]:_0x220211[_0x279fec(0x206)]):'no\x20en'+_0x279fec(0x7e6)+'\x20yet\x20'+_0x279fec(0x7a8)+_0x279fec(0x656)+_0x279fec(0x4a8)+(_0x348615&&_0x348615['camer'+'a']?_0x348615[_0x279fec(0x1d4)+_0x279fec(0x70a)]:'-'),_0xa1e754[_0x279fec(0x855)]['color']=_0x59d520>-0x6d*-0x57+0x21f0+-0x46fb?_0x220211[_0x279fec(0x6f6)]:_0x279fec(0x98e)+'99');continue;case'9':var _0x98f9b3=_0x348615?_0x348615[_0x279fec(0xa10)+'unt']||-0x433*0x3+0x4*-0x92b+-0x1*-0x3145:-0x18*0xd5+0xc62+0x796;continue;case'10':var _0xa1e754=_0x3c0654[_0x279fec(0x9bc)];continue;}break;}}catch(_0x25eb0e){}}window[_0x4b6c3b(0x746)+_0x4b6c3b(0x6e3)+_0x4b6c3b(0x3ef)+'r'](_0x4b6c3b(0xa0c)+'wn',function(_0x479ec5){var _0x5b5268=_0x4b6c3b;if(!_0x479ec5)return;try{if(_0x220211[_0x5b5268(0x8e2)]('zdEpL',_0x5b5268(0x7dd))){if(_0x4ac349&&_0x4c901e['stopP'+_0x5b5268(0x870)+'ation'])_0x295478['stopP'+'ropag'+_0x5b5268(0xa29)]();_0xaae4b7(!_0x3b2341[_0x5b5268(0x7fe)]);}else{if(_0x220211['gJqpO'](_0x479ec5['code'],'F9')){_0x479ec5['preve'+'ntDef'+_0x5b5268(0xa69)](),_0x220211[_0x5b5268(0x81e)](_0x3c8bb4,'snaps'+'hot');return;}if(_0x479ec5['code']==='F7'){_0x479ec5['preve'+'ntDef'+_0x5b5268(0xa69)](),_0x1f9a50(!_0x11986b['on'],_0x11986b[_0x5b5268(0x1e9)+'r']);return;}if(_0x479ec5[_0x5b5268(0x66a)]==='F8'){_0x479ec5['preve'+'ntDef'+_0x5b5268(0xa69)](),_0x220211[_0x5b5268(0x69d)](_0x1f9a50,_0x11986b['on'],_0x220211[_0x5b5268(0x5f8)](_0x11986b[_0x5b5268(0x1e9)+'r'],-0x543*-0x1+0x61d+0xe*-0xd0+0.5));return;}if(_0x220211['mJUUa'](_0x479ec5['code'],'F6')){_0x479ec5[_0x5b5268(0x8a5)+'ntDef'+_0x5b5268(0xa69)](),_0x220211['nMnSz'](_0x1f9a50,_0x11986b['on'],_0x220211[_0x5b5268(0x55a)](_0x11986b[_0x5b5268(0x1e9)+'r'],0x17a8+-0xd*0x19f+-0x295+0.5));return;}if(_0x220211[_0x5b5268(0xb42)](_0x479ec5[_0x5b5268(0x66a)],_0x5b5268(0x4f4)+'t')){_0x479ec5['preve'+'ntDef'+'ault'](),_0x220211['jeyEJ'](_0x3cbf67,!_0x22035b[_0x5b5268(0x7fe)]);return;}if(_0x220211[_0x5b5268(0x806)](_0x479ec5[_0x5b5268(0x66a)],_0x220211[_0x5b5268(0x7fc)])){_0x479ec5[_0x5b5268(0x8a5)+'ntDef'+_0x5b5268(0xa69)](),_0x5791d0[_0x5b5268(0xb14)]=Math[_0x5b5268(0x33f)](0x17eb+0x1e22*-0x1+0x6c3*0x1,_0x5791d0['fov']+(-0x25fe+-0x1bbf*-0x1+0xa41)),_0x402c69();return;}if(_0x479ec5[_0x5b5268(0x66a)]===_0x5b5268(0xaa8)+_0x5b5268(0x4d4)+'t'){_0x479ec5[_0x5b5268(0x8a5)+'ntDef'+'ault'](),_0x5791d0[_0x5b5268(0xb14)]=Math['max'](0x1190+0x752*0x1+0x13d*-0x14,_0x5791d0[_0x5b5268(0xb14)]-(-0x3b*-0x23+0x689+0x74c*-0x2)),_0x220211[_0x5b5268(0x521)](_0x402c69);return;}}}catch(_0x406303){}},!![]);var _0x5623eb={'on':!![],'span':0x50,'boxes':![]};function _0x430306(){var _0x573adb=_0x4b6c3b,_0x1d5794=_0x3e5154[_0x573adb(0x7c5)+'nNetw'+'orkSy'+'nc']||{},_0x1b454b=Object[_0x573adb(0x33a)](_0x1d5794);for(var _0x108890=-0x463+-0x1fa*0x1+0x65d;_0x220211['PXnCN'](_0x108890,_0x1b454b[_0x573adb(0x3f7)+'h']);_0x108890++){if(_0x220211[_0x573adb(0x6fd)](_0x220211['upDCU'],'EPUZV')){var _0x47661d=_0x56828c['getIt'+'em'](_0x3bf43a);if(_0x47661d)_0x11f71d[_0x573adb(0xb14)]=_0x56f6ed['min'](-0x56*-0x20+0x15d0+0xaac*-0x3,_0x53c1aa[_0x573adb(0xb3f)](-0x220f*-0x1+-0x1067+0x5*-0x382,_0x220211[_0x573adb(0x1e3)](_0x157305,_0x47661d)||-0x4*0x30d+-0x12*0xcd+0x8*0x35f));}else{var _0x29bb58=_0x1d5794[_0x1b454b[_0x108890]]['ptr'],_0x3fb191=_0x220211[_0x573adb(0x93d)](_0x4094a9,_0x29bb58+(-0x486+0xe09+0xd9*-0xb),_0x573adb(0x934));if(!_0x3fb191)continue;var _0x17f0c8=_0x49dac9[_0x573adb(0x4a0)+_0x573adb(0x88f)]||[],_0x4209ea={'mouseLook':'0x'+(_0x3fb191>>>0x190f*0x1+-0x22a*-0x4+-0x21b7*0x1)['toStr'+_0x573adb(0x6cd)](-0x2*0xbef+-0x2c*-0x19+0x2*0x9d1),'floats':{},'camera':null,'vec2':null};for(var _0x583e8f=0x16a5+-0x262c+-0x35*-0x4b;_0x583e8f<_0x17f0c8[_0x573adb(0x3f7)+'h'];_0x583e8f++){if(_0x220211[_0x573adb(0x58b)]===_0x220211['ZIeKu']){if(_0x220211[_0x573adb(0xa8a)](_0x17f0c8[_0x583e8f][-0x2e+0x5*0x61+-0x1b6],_0x220211[_0x573adb(0x4ca)]))continue;_0x4209ea[_0x573adb(0x2fa)+'s'][_0x220211[_0x573adb(0x2bd)]('0x',_0x17f0c8[_0x583e8f][-0x24ad+0x2570+-0xc3][_0x573adb(0x1f5)+_0x573adb(0x6cd)](-0x1cf5*0x1+-0x1f4c+0x3c51*0x1))]=_0x4094a9(_0x220211[_0x573adb(0xa62)](_0x3fb191,_0x17f0c8[_0x583e8f][-0x256b+0x231e+0x24d]),_0x220211[_0x573adb(0x4ca)]);}else{var _0x37c1f0=(_0x573adb(0x629)+'|7|9|'+_0x573adb(0xa1c)+_0x573adb(0x9e7))[_0x573adb(0xaa6)]('|'),_0x5074e3=0xc7d+-0x7*-0x3fd+-0x18*0x1af;while(!![]){switch(_0x37c1f0[_0x5074e3++]){case'0':var _0x5f29cc=_0x220211['QRxAN'](_0x272952[_0x573adb(0x5a0)+'nt8'](_0x33914d[_0x573adb(0x910)+'e']),0x8*0x240+-0x834+-0x9cb);continue;case'1':var _0x987b0e=_0x220211[_0x573adb(0x24e)](_0x272952[_0x573adb(0x5a0)+_0x573adb(0x492)](_0x33914d['inite'+'d']),-0x5b8+-0x36d*0x5+0x16da);continue;case'2':var _0x27f748=_0x272952[_0x573adb(0x81f)+_0x573adb(0x330)](_0x33914d['hidde'+'n'],!![]);continue;case'3':if(!_0x242bbc)return null;continue;case'4':var _0x33914d=_0x26013a[_0x1e55cb];continue;case'5':var _0x16f9ba=_0x49a00b===_0x573adb(0x1a7)?_0x272952[_0x573adb(0x1c4)+_0x573adb(0x6d0)](_0x33914d[_0x573adb(0x1f6)],!![]):_0x220211['ryDUn'](_0x1918cf,'obfI')?_0x272952['getIn'+_0x573adb(0x330)](_0x33914d['fake'],!![]):_0x272952['getUi'+'nt8'](_0x33914d[_0x573adb(0x1f6)]);continue;case'6':return{'keyAtOffset0':_0x188b54,'hidden':_0x27f748,'inited':_0x987b0e,'fake':_0x16f9ba,'act':_0x5f29cc,'hex':_0x220211[_0x573adb(0x563)](_0x50c714,_0x242bbc),'alt':_0x220211[_0x573adb(0x966)](_0x1755b9,_0x220211['TRdNW'])?_0x27f748^(_0x16f9ba|0xff4+-0x8e7+-0x5*0x169):null};case'7':var _0x272952=new _0x1e1621(_0x242bbc['buffe'+'r'],_0x242bbc[_0x573adb(0x9d3)+'ffset'],_0x242bbc[_0x573adb(0xae9)+'ength']);continue;case'8':var _0x242bbc=_0x220211[_0x573adb(0x1ee)](_0x345f0e,_0x21b35,_0x4a3795,_0x33914d[_0x573adb(0x884)]);continue;case'9':var _0x188b54=_0x272952['getIn'+'t32'](_0x33914d[_0x573adb(0x7a6)],!![]);continue;}break;}}}var _0x5a54ed=_0x220211[_0x573adb(0x51c)](_0x4094a9,_0x3fb191+(-0x3*-0x464+0x1e*0xe6+-0x13fa*0x2),'u32');if(_0x5a54ed)_0x4209ea[_0x573adb(0x1d4)+'a']='0x'+_0x220211['PFBqN'](_0x5a54ed,0x49e+0x646+-0xae4)['toStr'+_0x573adb(0x6cd)](-0x15da+-0x2*0x3b5+0x1d54);var _0x8d2c=_0x5f44a9(_0x3fb191,0x1565*0x1+-0x41e+-0x10ff,-0x1662+-0x252d+0x3b91);if(_0x8d2c)_0x4209ea[_0x573adb(0x9f2)]=_0x8d2c;return _0x4209ea;}}return null;}var _0x59651b=_0x4b6c3b(0x621)+_0x4b6c3b(0x875)+_0x4b6c3b(0xb14),_0x5791d0={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{if(_0x220211['qIXOd'](_0x220211[_0x4b6c3b(0x8f9)],_0x220211['qfmxH']))_0x222c4e[_0x2990b3+_0x4b6c3b(0x2ce)+_0x393422[_0x276679]['o']['toStr'+_0x4b6c3b(0x6cd)](-0x82*0x30+-0x2247*-0x1+0x9d7*-0x1)]=_0x541c85[_0x20bf40]['v'];else{var _0x5edb7e=localStorage[_0x4b6c3b(0x4be)+'em'](_0x59651b);if(_0x5edb7e)_0x5791d0[_0x4b6c3b(0xb14)]=Math['min'](-0x84e+-0x1e50+0x9*0x45a,Math[_0x4b6c3b(0xb3f)](0xbda*0x1+-0xf63+0x3a7,parseFloat(_0x5edb7e)||0x1893+-0x1*-0x1350+-0x1*0x2b89));}}catch(_0x5dcab9){}function _0x402c69(){var _0x34a2f8=_0x4b6c3b;try{localStorage['setIt'+'em'](_0x59651b,String(_0x5791d0[_0x34a2f8(0xb14)]));}catch(_0x5be32a){}}function _0x522109(){var _0x10ec29=_0x4b6c3b,_0x2ad725=_0x220211['mjuiO'](_0x430306);if(!_0x2ad725||!_0x2ad725[_0x10ec29(0x329)+_0x10ec29(0x88f)])return null;var _0x3a5960=_0x220211[_0x10ec29(0x777)](parseInt,_0x2ad725[_0x10ec29(0x329)+'Look'],0x3*-0x202+-0xab*0x2+0x4*0x1db),_0x596637=_0x4094a9(_0x3a5960+(-0x2561+-0x1*0x1591+0x3b0a),_0x220211['ilwPw']),_0x1ee747=_0x4094a9(_0x3a5960+(-0x1e0e+-0x1e65*-0x1+0x3b*-0x1),'f32');if(typeof _0x596637!==_0x220211[_0x10ec29(0x77d)]||typeof _0x1ee747!=='numbe'+'r')return null;return{'pitch':_0x220211['mkkrd'](_0x596637,_0x5791d0[_0x10ec29(0x73a)+'Off']),'yaw':_0x220211[_0x10ec29(0x76a)](_0x1ee747,_0x5791d0[_0x10ec29(0x67e)+'f'])};}function _0x4d99ce(_0x546cca,_0x45e01a,_0x1a5326,_0x2c33d1){var _0x54ea4e=_0x4b6c3b,_0x323ea1=_0x522109();if(!_0x323ea1)return null;var _0x4b0600=_0x323ea1[_0x54ea4e(0x73a)]*Math['PI']/(0x646+0x178a+-0x1d1c),_0x435c84=_0x220211[_0x54ea4e(0x3ec)](_0x323ea1['yaw']*Math['PI'],0x1fa2+0x2f5*0x1+-0x21e3),_0x59fd1a=Math[_0x54ea4e(0x857)](_0x4b0600),_0x43e4b7=Math['sin'](_0x435c84)*_0x59fd1a,_0x56599c=-Math[_0x54ea4e(0x8ef)](_0x4b0600),_0x4b5d36=Math[_0x54ea4e(0x857)](_0x435c84)*_0x59fd1a,_0xf174c4=_0x4b5d36,_0x52bf57=-0x141e+0x8*0x305+-0x2*0x205,_0x3a31dd=-_0x43e4b7,_0x2807c8=_0x220211[_0x54ea4e(0xa6e)](_0x45e01a[-0x5*-0x1b7+-0x633*0x1+-0x20*0x13],_0x546cca[-0x7f+0x1e61+-0x1de2]),_0x23e756=_0x45e01a[-0x16dd+0x42*-0x1c+0xf0b*0x2]-_0x546cca[-0x1ceb+0x24eb+0x59*-0x17],_0x246852=_0x45e01a[0xdc6+0xcc6+0x1a8a*-0x1]-_0x546cca[-0x113f+-0x6b*-0x11+0xa26],_0x494072=_0x220211['rMytK'](_0x2807c8*_0x43e4b7+_0x220211['WCLhQ'](_0x23e756,_0x56599c),_0x246852*_0x4b5d36);if(_0x494072<=-0x14c9*-0x1+-0x12b*-0x17+-0x2fa6+0.05)return null;var _0x301ca2=_0x2807c8*_0xf174c4+_0x23e756*_0x52bf57+_0x246852*_0x3a31dd,_0xbca465=_0x220211[_0x54ea4e(0x93b)](_0x2807c8*(_0x52bf57*_0x4b5d36-_0x3a31dd*_0x56599c),_0x220211['WCLhQ'](_0x23e756,_0x220211[_0x54ea4e(0xacc)](_0x3a31dd,_0x43e4b7)-_0xf174c4*_0x4b5d36))+_0x220211[_0x54ea4e(0xacc)](_0x246852,_0x220211[_0x54ea4e(0xab1)](_0xf174c4,_0x56599c)-_0x52bf57*_0x43e4b7),_0x293bda=_0x1a5326/_0x2c33d1,_0x3008e8=_0x5791d0[_0x54ea4e(0xb14)]*Math['PI']/(0x3*-0xca0+-0x1d*-0xe7+0x3*0x423),_0x372872=Math[_0x54ea4e(0x470)](_0x3008e8/(0x6*-0x57+0x16af*-0x1+0x18bb)),_0x5d9a7c=_0x220211[_0x54ea4e(0x367)](_0x301ca2,_0x494072)/(_0x372872*_0x293bda),_0x15a646=_0xbca465/_0x494072/_0x372872;if(_0x5d9a7c<-(-0x61*-0x25+0x2040+-0x2e44+0.6000000000000001)||_0x5d9a7c>-0x19dd*-0x1+-0x4*-0xc+-0x1a0c+0.6000000000000001||_0x15a646<-(0x93f+0x7*0x583+-0x35*0xe7+0.6000000000000001)||_0x220211['tALcs'](_0x15a646,-0xec3*0x1+0x13cd*0x1+0x509*-0x1+0.6000000000000001))return null;return{'x':(_0x220211[_0x54ea4e(0x7ff)](_0x5d9a7c,0x2027*0x1+-0x1*0x42d+-0x1bfa+0.5)+(-0xea7+0x23*0x9+0xd6c+0.5))*_0x1a5326,'y':_0x220211[_0x54ea4e(0x460)](0x2174+-0x23e4+0x270+0.5,_0x15a646*(0x1*-0x1b96+-0x26*0x89+0xbfb*0x4+0.5))*_0x2c33d1,'z':_0x494072};}var _0x22035b={'open':![],'cat':'comba'+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[]},_0x2ed218=null,_0x32c6de=[{'id':_0x4b6c3b(0x93c)+'t','label':_0x220211[_0x4b6c3b(0x719)]},{'id':_0x220211[_0x4b6c3b(0x392)],'label':_0x4b6c3b(0x9dc)},{'id':_0x4b6c3b(0x7fb)+'s','label':_0x4b6c3b(0xa4f)},{'id':_0x220211[_0x4b6c3b(0x816)],'label':_0x220211[_0x4b6c3b(0x953)]}],_0x2b659c=_0x220211['ARUdG'](_0x220211[_0x4b6c3b(0x9ab)](_0x220211['AIObH'](_0x220211['sGJPt'](_0x220211[_0x4b6c3b(0x3cd)](_0x220211[_0x4b6c3b(0xa0d)](_0x220211[_0x4b6c3b(0x323)](_0x220211[_0x4b6c3b(0xb0c)](_0x220211['VwQLQ'](_0x220211[_0x4b6c3b(0x9f9)](_0x220211[_0x4b6c3b(0x836)](_0x220211[_0x4b6c3b(0x2ec)](_0x220211[_0x4b6c3b(0x2ec)](_0x220211[_0x4b6c3b(0x9b8)](_0x220211['dTiGs'](_0x220211['LgTzL'](_0x220211[_0x4b6c3b(0x218)](_0x220211['NYpOp'](_0x220211[_0x4b6c3b(0x391)](_0x220211['pTSvl'](_0x220211['dTiGs'](_0x220211['YujZO'](_0x220211['TAEQy'](_0x220211['VBBFi'](_0x220211['BPSZR'](_0x220211[_0x4b6c3b(0x9fa)](_0x220211[_0x4b6c3b(0xa0d)](_0x220211[_0x4b6c3b(0x22a)](_0x4b6c3b(0x2a7)+_0x4b6c3b(0x2a9)+'nu-ro'+_0x4b6c3b(0x223)+_0x4b6c3b(0x469)+_0x4b6c3b(0x84b)+_0x220211['AYJzQ'],'displ'+'ay:fl'+'ex;ga'+_0x4b6c3b(0x1ca)+_0x4b6c3b(0x412)+_0x4b6c3b(0xa58)+_0x4b6c3b(0x2d2)+_0x4b6c3b(0x957)+_0x4b6c3b(0x648)+'ius:2'+'2px;p'+_0x4b6c3b(0x3dc)+_0x4b6c3b(0x91a)+_0x4b6c3b(0x459)+'uto;z'+'-inde'+_0x4b6c3b(0x263)+'74836'+_0x4b6c3b(0xad3)),_0x220211['BTwGr'])+_0x220211[_0x4b6c3b(0x9f1)],_0x4b6c3b(0xa35)+_0x4b6c3b(0x6aa)+'trans'+'form:'+'trans'+'lateY'+_0x4b6c3b(0x29b)+_0x4b6c3b(0x3bd)+'nter-'+_0x4b6c3b(0x3cc)+_0x4b6c3b(0x9e6)+'e;tra'+'nsiti'+_0x4b6c3b(0x287)+'acity'+_0x4b6c3b(0x2bf)+_0x4b6c3b(0xac3)+',tran'+'sform'+'\x20.45s'+'\x20cubi'+'c-bez'+_0x4b6c3b(0x4b1)+'22,1,'+_0x4b6c3b(0x7e7)+');'),_0x220211[_0x4b6c3b(0x835)])+(_0x4b6c3b(0x2a7)+_0x4b6c3b(0x2a9)+'nu-ro'+'ot.mn'+_0x4b6c3b(0x34f)+_0x4b6c3b(0x3b9)+'wn{op'+_0x4b6c3b(0x46c)+_0x4b6c3b(0x27c)+_0x4b6c3b(0x25e)+'rm:no'+_0x4b6c3b(0x64a)+_0x4b6c3b(0x8ed)+_0x4b6c3b(0x916)+'ts:au'+_0x4b6c3b(0x3e7)),_0x220211[_0x4b6c3b(0xaf8)])+_0x220211['iLjFI'],_0x4b6c3b(0xa9a)+'ogo{d'+_0x4b6c3b(0x453)+_0x4b6c3b(0x813)+_0x4b6c3b(0x274)+_0x4b6c3b(0x56e)+_0x4b6c3b(0xa98)+_0x4b6c3b(0x827)+_0x4b6c3b(0xb19)+'h:32p'+_0x4b6c3b(0x588)+_0x4b6c3b(0x1b3)+'2px;m'+_0x4b6c3b(0x36f)+_0x4b6c3b(0x658)+'om:6p'+'x;}'),_0x220211['UPPDk'])+_0x220211[_0x4b6c3b(0x1e5)]+_0x220211[_0x4b6c3b(0x925)]+_0x220211['WjhSc']+('.mn-t'+'ab.ac'+_0x4b6c3b(0x5fb)+'color'+_0x4b6c3b(0x23c)+_0x4b6c3b(0x56f)+'ackgr'+_0x4b6c3b(0x785)+_0x4b6c3b(0x86b)+_0x4b6c3b(0x349)+'07,15'+_0x4b6c3b(0x9dd)+';}')+_0x220211[_0x4b6c3b(0x6b6)]+(_0x4b6c3b(0x89b)+_0x4b6c3b(0x2e2)+_0x4b6c3b(0x737)+_0x4b6c3b(0x399)+';alig'+_0x4b6c3b(0x944)+_0x4b6c3b(0x29d)+'nter;'+'gap:1'+_0x4b6c3b(0x907)+_0x4b6c3b(0x7b6)+'g:6px'+'\x206px\x20'+'12px;'+'user-'+'selec'+_0x4b6c3b(0x1b9)+_0x4b6c3b(0xb27)),_0x4b6c3b(0x89b)+_0x4b6c3b(0xaff)+_0x4b6c3b(0x920)+':1;mi'+'n-wid'+_0x4b6c3b(0x880)+'}')+_0x220211[_0x4b6c3b(0x9eb)],_0x4b6c3b(0x711)+_0x4b6c3b(0x437)+'nt-si'+'ze:11'+_0x4b6c3b(0x2c8)+'acity'+_0x4b6c3b(0x929)),'.mn-c'+_0x4b6c3b(0x2a0)+'displ'+_0x4b6c3b(0x7de)+'id;pl'+_0x4b6c3b(0x542)+_0x4b6c3b(0x53f)+_0x4b6c3b(0x6ca)+_0x4b6c3b(0x529)+_0x4b6c3b(0x255)+_0x4b6c3b(0xb0f)+'ight:'+'28px;'+_0x4b6c3b(0x957)+_0x4b6c3b(0x87c)+_0x4b6c3b(0x8bd)+_0x4b6c3b(0x9a5)+_0x4b6c3b(0x650)+_0x4b6c3b(0x6af)+_0x4b6c3b(0x592)+'nd:tr'+_0x4b6c3b(0x8a6)+'rent;')+(_0x4b6c3b(0x8bc)+':inhe'+_0x4b6c3b(0x8fd)+_0x4b6c3b(0x7e3)+_0x4b6c3b(0x32b)+_0x4b6c3b(0x994)+_0x4b6c3b(0x596)+'inter'+';}')+(_0x4b6c3b(0x815)+_0x4b6c3b(0x7e5)+'hover'+_0x4b6c3b(0x6f4)+_0x4b6c3b(0x551)+_0x4b6c3b(0x3a3)+_0x4b6c3b(0x426)+_0x4b6c3b(0x3bc)+_0x4b6c3b(0x1ac)+_0x4b6c3b(0x5e6)+_0x4b6c3b(0x99f)+_0x4b6c3b(0x56b))+('.mn-c'+'lose\x20'+'svg{w'+'idth:'+_0x4b6c3b(0x3fe)+'heigh'+_0x4b6c3b(0x50a)+'x;fil'+'l:non'+_0x4b6c3b(0x911)+'oke:c'+_0x4b6c3b(0x71a)+'tColo'+'r;str'+_0x4b6c3b(0x32c)+_0x4b6c3b(0xa87)+_0x4b6c3b(0x9cf)+'oke-l'+'ineca'+'p:rou'+_0x4b6c3b(0x1a3)),_0x4b6c3b(0x815)+_0x4b6c3b(0x228)+_0x4b6c3b(0x26e)+_0x4b6c3b(0x414)+'heigh'+_0x4b6c3b(0x42e)+'verfl'+_0x4b6c3b(0x699)+_0x4b6c3b(0x3ee)+'displ'+_0x4b6c3b(0x7de)+'id;gr'+_0x4b6c3b(0x935)+_0x4b6c3b(0x615)+_0x4b6c3b(0xb61)+'umns:'+_0x4b6c3b(0x7c1)+_0x4b6c3b(0x290)+'o-fil'+_0x4b6c3b(0x789)+_0x4b6c3b(0x493)+_0x4b6c3b(0x5eb)+'1fr))'+';')+(_0x4b6c3b(0x545)+_0x4b6c3b(0x6de)+'s:sta'+_0x4b6c3b(0x634)+'ign-c'+_0x4b6c3b(0x830)+_0x4b6c3b(0x270)+'rt;ga'+'p:10p'+'x;pad'+_0x4b6c3b(0xa58)+'0\x204px'+_0x4b6c3b(0x834)+_0x4b6c3b(0x344))+_0x220211['heUaS'],'.mn-c'+'ols::'+'-webk'+'it-sc'+'rollb'+'ar-th'+_0x4b6c3b(0x817)+_0x4b6c3b(0x366)+_0x4b6c3b(0x785)+'rgba('+_0x4b6c3b(0xad8)+_0x4b6c3b(0x31e)+_0x4b6c3b(0x9e8)+_0x4b6c3b(0x97f)+_0x4b6c3b(0x2ef)+_0x4b6c3b(0x821)+_0x4b6c3b(0x82f)+'}'),_0x220211[_0x4b6c3b(0xb36)]),_0x220211[_0x4b6c3b(0x7a0)]),'.sk-c'+_0x4b6c3b(0x688)+_0x4b6c3b(0x21d)+_0x4b6c3b(0x453)+_0x4b6c3b(0xa9f)+'x;ali'+_0x4b6c3b(0x5c4)+'ems:c'+'enter'+_0x4b6c3b(0xac7)+'8px;p'+'addin'+_0x4b6c3b(0xb32)+_0x4b6c3b(0x873)+_0x4b6c3b(0x579))+_0x220211[_0x4b6c3b(0x478)]+('.sk-c'+_0x4b6c3b(0x23b)+_0x4b6c3b(0x1a2)+_0x4b6c3b(0x59e)+_0x4b6c3b(0x8e6)+'t-siz'+'e:13p'+'x;fon'+'t-wei'+_0x4b6c3b(0x5c6)+_0x4b6c3b(0x76f)+_0x4b6c3b(0x822)+_0x4b6c3b(0xb4a)+'46,23'+_0x4b6c3b(0x34d)+',.45)'+';}')+('.sk-c'+_0x4b6c3b(0x984)+'n\x20.sk'+_0x4b6c3b(0x7cf)+'-titl'+_0x4b6c3b(0x364)+_0x4b6c3b(0x4c2)+'olor:'+_0x4b6c3b(0x2f9)+_0x4b6c3b(0x742)),'.sk-m'+_0x4b6c3b(0x7b0)+'paddi'+_0x4b6c3b(0x483)+'12px\x20'+'10px;'+'}'),'.sk-m'+_0x4b6c3b(0x1bb)+_0x4b6c3b(0x587)+'size:'+_0x4b6c3b(0x986)+'opaci'+'ty:.4'+_0x4b6c3b(0x59b)+_0x4b6c3b(0x70b)+_0x4b6c3b(0x687)+_0x4b6c3b(0x51e)+_0x4b6c3b(0x40c)+_0x4b6c3b(0x35b)+':pre-'+'wrap;'+'}')+(_0x4b6c3b(0x668)+'tl{di'+_0x4b6c3b(0x737)+':flex'+_0x4b6c3b(0x92c)+_0x4b6c3b(0x944)+'ms:ce'+'nter;'+'gap:8'+'px;pa'+_0x4b6c3b(0x351)+_0x4b6c3b(0x71d)+_0x4b6c3b(0x2e7)+_0x4b6c3b(0x851)+'e:11.'+_0x4b6c3b(0x8ec)),_0x4b6c3b(0x6e0)+'abel{'+'flex:'+'1;col'+_0x4b6c3b(0xa36)+_0x4b6c3b(0xa0e)+_0x4b6c3b(0x2f6)+',242,'+'.75);'+'}'),'.sk-h'+'int{d'+'ispla'+_0x4b6c3b(0x448)+_0x4b6c3b(0x665)+'nt-si'+_0x4b6c3b(0x597)+_0x4b6c3b(0x2c8)+_0x4b6c3b(0x46c)+':.4;}'),_0x4b6c3b(0x362)+_0x4b6c3b(0x246)+'{posi'+'tion:'+_0x4b6c3b(0x7d3)+'ive;w'+_0x4b6c3b(0xa87)+'26px;'+'heigh'+'t:14p'+_0x4b6c3b(0x757)+_0x4b6c3b(0xab0)+';bord'+_0x4b6c3b(0x221)+_0x4b6c3b(0x990)+_0x4b6c3b(0x8ee)+'backg'+'round'+_0x4b6c3b(0x85f)+_0x4b6c3b(0x4ee)+_0x4b6c3b(0xad8)+_0x4b6c3b(0x951)+_0x4b6c3b(0x6c8)+_0x4b6c3b(0x556)+_0x4b6c3b(0xa16)+_0x4b6c3b(0x734)+_0x4b6c3b(0x4cb)+'ne;}')+('.sk-s'+_0x4b6c3b(0x246)+'::aft'+'er{co'+_0x4b6c3b(0x2b9)+':\x22\x22;p'+'ositi'+_0x4b6c3b(0x7f9)+_0x4b6c3b(0xa50)+_0x4b6c3b(0x6c1)+':3px;'+'left:'+'3px;w'+'idth:'+_0x4b6c3b(0x1ae)+_0x4b6c3b(0x755)+':8px;'+_0x4b6c3b(0x957)+'r-rad'+_0x4b6c3b(0x9c0)+_0x4b6c3b(0xb06)),_0x220211['wZuAg']),_0x4b6c3b(0x362)+'witch'+_0x4b6c3b(0x25c)+_0x4b6c3b(0x4d6)+_0x4b6c3b(0x805)+'true\x22'+_0x4b6c3b(0x64c)+'kgrou'+'nd:rg'+_0x4b6c3b(0x509)+'5,107'+_0x4b6c3b(0x89c)+'.25);'+'}'),_0x220211['gkKzk']),_0x4b6c3b(0x79b)+_0x4b6c3b(0x707)+'displ'+_0x4b6c3b(0x62a)+_0x4b6c3b(0x80e)+'ign-i'+'tems:'+_0x4b6c3b(0x6ca)+'r;gap'+':8px;'+'}')+(_0x4b6c3b(0x362)+_0x4b6c3b(0x5b6)+_0x4b6c3b(0x4ba)+'kit-a'+_0x4b6c3b(0x1a0)+'ance:'+'none;'+'appea'+'rance'+_0x4b6c3b(0x716)+_0x4b6c3b(0xb19)+_0x4b6c3b(0x9a2)+_0x4b6c3b(0x588)+'ght:8'+'px;ba'+_0x4b6c3b(0xace)+_0x4b6c3b(0x27a)+_0x4b6c3b(0x8c9)+'arent'+';}')+('.sk-s'+_0x4b6c3b(0x5b6)+_0x4b6c3b(0x97c)+_0x4b6c3b(0x36b)+_0x4b6c3b(0x1ab)+_0x4b6c3b(0xa8e)+'nable'+_0x4b6c3b(0x6a3)+_0x4b6c3b(0x7d9)+_0x4b6c3b(0x950)+_0x4b6c3b(0xaa5)+_0x4b6c3b(0x3bf)+_0x4b6c3b(0x3ab)+'s:2px'+';')+(_0x4b6c3b(0x5d6)+_0x4b6c3b(0x5ec)+':line'+'ar-gr'+_0x4b6c3b(0x440)+_0x4b6c3b(0x3bb)+_0x4b6c3b(0x41b)+'#ff6b'+_0x4b6c3b(0xb48)+_0x4b6c3b(0xad4)+_0x4b6c3b(0x886)+_0x4b6c3b(0x3e6)+_0x4b6c3b(0x86f)+_0x4b6c3b(0xadc)+_0x4b6c3b(0x678)+_0x4b6c3b(0x70d)+_0x4b6c3b(0x509)+_0x4b6c3b(0x872)+',255,'+'.08);'+'}'),_0x4b6c3b(0x362)+_0x4b6c3b(0x5b6)+'::-we'+_0x4b6c3b(0x36b)+'slide'+_0x4b6c3b(0x770)+'mb{-w'+_0x4b6c3b(0x209)+'-appe'+_0x4b6c3b(0x4ef)+'e:non'+_0x4b6c3b(0x89f)+'th:6p'+_0x4b6c3b(0x588)+_0x4b6c3b(0x5c6)+_0x4b6c3b(0x90a)+_0x4b6c3b(0xac6)+'top:-'+_0x4b6c3b(0x491)+'order'+_0x4b6c3b(0x9a5)+'us:50'+_0x4b6c3b(0x6b2)+_0x4b6c3b(0x592)+'nd:#f'+_0x4b6c3b(0x358)+';}')+(_0x4b6c3b(0x663)+'al{fo'+_0x4b6c3b(0xb04)+_0x4b6c3b(0x9e0)+_0x4b6c3b(0x3da)+'nt-we'+_0x4b6c3b(0x57c)+_0x4b6c3b(0x97e)+'in-wi'+_0x4b6c3b(0x9ac)+'4px;t'+'ext-a'+_0x4b6c3b(0xa70)+_0x4b6c3b(0x98d)+_0x4b6c3b(0x2ae)+'r:rgb'+_0x4b6c3b(0x2ad)+_0x4b6c3b(0xa31)+'242,.'+_0x4b6c3b(0x9b3))+_0x220211['ruMdk']+(_0x4b6c3b(0x29a)+'ote.e'+_0x4b6c3b(0x6cc)+'lor:#'+'ff7a9'+'3;}'),_0x220211['QoCJS'])+(_0x4b6c3b(0x587)+'size:'+_0x4b6c3b(0x888)+_0x4b6c3b(0x22c)+_0x4b6c3b(0xb5a)+_0x4b6c3b(0xb11)+_0x4b6c3b(0x1c0)+_0x4b6c3b(0x556)+_0x4b6c3b(0xa16)+'er;fo'+'nt-fa'+_0x4b6c3b(0xb3b)+'inher'+'it;}')+_0x220211['BLhof'],'.sk-p'+_0x4b6c3b(0xac5)+'nt:11'+_0x4b6c3b(0x8d9)+_0x4b6c3b(0x9a7)+_0x4b6c3b(0x8aa)+'pace,'+'Conso'+'las,m'+_0x4b6c3b(0xaea)+_0x4b6c3b(0x2e1)+_0x4b6c3b(0x40c)+_0x4b6c3b(0x35b)+_0x4b6c3b(0x5d1)+_0x4b6c3b(0xb2d)+_0x4b6c3b(0x1fd)+'break'+':brea'+_0x4b6c3b(0xa82)+_0x4b6c3b(0x272)+'gin:0'+_0x4b6c3b(0x1f3)+'ity:.'+_0x4b6c3b(0xa14)+_0x4b6c3b(0x9cc)+_0x4b6c3b(0x950)+_0x4b6c3b(0x8a2)+'overf'+_0x4b6c3b(0x3f2)+'uto;}'),'#saku'+_0x4b6c3b(0x441)+'tal{p'+'ositi'+'on:fi'+_0x4b6c3b(0x3d7)+'op:12'+'px;ri'+_0x4b6c3b(0x1c8)+_0x4b6c3b(0x5b2)+_0x4b6c3b(0x4a3)+'x:214'+'74836'+_0x4b6c3b(0x98a)+_0x4b6c3b(0x556)+_0x4b6c3b(0xa16)+'er;wi'+_0x4b6c3b(0x9f3)+'6px;h'+'eight'+':26px'+_0x4b6c3b(0x1f3)+'ity:.'+_0x4b6c3b(0x569))+('trans'+_0x4b6c3b(0x898)+_0x4b6c3b(0x572)+'ity\x20.'+'2s;po'+'inter'+_0x4b6c3b(0x916)+_0x4b6c3b(0x48c)+_0x4b6c3b(0x65a)+_0x4b6c3b(0x3dd)+_0x4b6c3b(0x946)+_0x4b6c3b(0x4d5)+_0x4b6c3b(0x7db)+'\x204px\x20'+_0x4b6c3b(0x86b)+_0x4b6c3b(0x349)+_0x4b6c3b(0x26b)+'7,.7)'+_0x4b6c3b(0x5bf)),_0xb09808=_0x220211['iWqqZ'](_0x4b6c3b(0x74a)+'viewB'+_0x4b6c3b(0x8a3)+_0x4b6c3b(0x2d7)+_0x4b6c3b(0x9c1)+_0x4b6c3b(0x9d1)+_0x4b6c3b(0x980)+_0x4b6c3b(0x945)+'c-1.5'+'-2.5-'+_0x4b6c3b(0x9af)+'-4-7.'+'5\x200-2'+_0x4b6c3b(0x764)+_0x4b6c3b(0x96c)+_0x4b6c3b(0x26a)+'5s4\x202'+_0x4b6c3b(0x72a)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+(_0x4b6c3b(0x34c)+_0x4b6c3b(0x5e2)+_0x4b6c3b(0x8b0)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x4b6c3b(0x641)+_0x4b6c3b(0x2e3)+'h=\x222\x22'+_0x4b6c3b(0x219)+'ke-li'+_0x4b6c3b(0x30f)+'=\x22rou'+'nd\x22\x20s'+'troke'+'-line'+'join='+'\x22roun'+_0x4b6c3b(0x4b6)),'<circ'+_0x4b6c3b(0x96a)+_0x4b6c3b(0x5ee)+'\x20cy=\x22'+_0x4b6c3b(0xa72)+'=\x221.5'+_0x4b6c3b(0x4f2)+_0x4b6c3b(0x205)+_0x4b6c3b(0x358)+'\x22/></'+_0x4b6c3b(0x906)),_0x112260=_0x220211[_0x4b6c3b(0x9d7)](_0x220211[_0x4b6c3b(0x488)]+(_0x4b6c3b(0x34c)+'\x22none'+'\x22\x20str'+_0x4b6c3b(0xb38)+'#ff6b'+_0x4b6c3b(0x9ad)+_0x4b6c3b(0x641)+'-widt'+_0x4b6c3b(0x2cf)+'6\x22\x20st'+_0x4b6c3b(0x622)+_0x4b6c3b(0xaa9)+'ap=\x22r'+_0x4b6c3b(0xa7f)+_0x4b6c3b(0x219)+'ke-li'+_0x4b6c3b(0x37e)+'n=\x22ro'+'und\x22/'+'>'),'<circ'+_0x4b6c3b(0x96a)+'=\x2212\x22'+_0x4b6c3b(0x65d)+_0x4b6c3b(0xa72)+_0x4b6c3b(0xa83)+_0x4b6c3b(0x4f2)+_0x4b6c3b(0x205)+_0x4b6c3b(0x358)+'\x22/></'+'svg>');function _0x2078e6(_0x3505cc,_0x29bf0d,_0x1d0bf3){var _0x568cf2=_0x4b6c3b,_0x4e9455=document[_0x568cf2(0x769)+'eElem'+_0x568cf2(0x3ff)](_0x3505cc);if(_0x29bf0d)_0x4e9455[_0x568cf2(0x393)+'Name']=_0x29bf0d;if(_0x1d0bf3!=null)_0x4e9455['inner'+_0x568cf2(0x936)]=_0x1d0bf3;return _0x4e9455;}function _0x39c2d0(_0x300f40,_0x432664){var _0x39f59a=_0x4b6c3b,_0x3e8a47=_0x220211['hUFWT'][_0x39f59a(0xaa6)]('|'),_0x60e583=0x18de+-0x4*-0x34c+-0x260e;while(!![]){switch(_0x3e8a47[_0x60e583++]){case'0':_0xcf6ed2[_0x39f59a(0xac1)+_0x39f59a(0x249)+'d'](_0x3f198b);continue;case'1':_0xcf6ed2['body']=_0x3f198b;continue;case'2':var _0xcf6ed2=_0x220211[_0x39f59a(0x51c)](_0x2078e6,'div',_0x39f59a(0x3a2)+'rd'+(_0x432664?_0x39f59a(0x786):''));continue;case'3':var _0x3f198b=_0x220211[_0x39f59a(0x94d)](_0x2078e6,_0x39f59a(0x2aa),'sk-mb'+_0x39f59a(0x518));continue;case'4':var _0x4afc5e=_0x220211[_0x39f59a(0x776)](_0x2078e6,_0x220211[_0x39f59a(0xa2d)],_0x39f59a(0x3a2)+'rd-he'+'ad');continue;case'5':var _0x514b11=_0x2078e6(_0x39f59a(0x2aa),'sk-ca'+'rd-ti'+_0x39f59a(0x6b9),_0x220211['JFnEc']+_0x300f40+('</str'+'ong>'));continue;case'6':_0xcf6ed2['head']=_0x514b11;continue;case'7':_0x4afc5e[_0x39f59a(0xac1)+'dChil'+'d'](_0x514b11);continue;case'8':return _0xcf6ed2;case'9':_0xcf6ed2[_0x39f59a(0xac1)+'dChil'+'d'](_0x4afc5e);continue;}break;}}function _0x55f9d5(_0xa532a1,_0x1a0cec){var _0x390e99=_0x4b6c3b,_0x571d43={'hXNYm':'true','EzeCx':'false','PoMon':function(_0x463aa9){var _0x147396=_0x3979;return _0x220211[_0x147396(0x80f)](_0x463aa9);}},_0x327f5d=_0x2078e6(_0x390e99(0xb54)+'n',_0x220211['ynina']);_0x327f5d[_0x390e99(0x226)]=_0x390e99(0xb54)+'n';var _0x51547d=function(){var _0xb47342=_0x390e99;_0x327f5d['setAt'+_0xb47342(0x807)+'te']('aria-'+_0xb47342(0x82c)+'ed',_0xa532a1()?_0x571d43['hXNYm']:_0x571d43['EzeCx']);};return _0x327f5d[_0x390e99(0x438)+'ck']=function(){var _0x510ddb=_0x390e99;_0x1a0cec(!_0xa532a1()),_0x571d43[_0x510ddb(0x616)](_0x51547d);},_0x51547d(),_0x327f5d[_0x390e99(0xa6b)]=_0x51547d,_0x22035b[_0x390e99(0x8a8)]['push'](_0x51547d),_0x327f5d;}function _0x46440f(_0x24b918,_0xc74881,_0x43912d,_0x3a6c2e,_0x5ca44b){var _0xb3ae35=_0x4b6c3b,_0x5774c8=_0x220211[_0xb3ae35(0x9b5)]['split']('|'),_0x3330b6=-0x46*0x71+0x24a5+0x1*-0x5bf;while(!![]){switch(_0x5774c8[_0x3330b6++]){case'0':_0x2cbe94['max']=_0x220211[_0xb3ae35(0x681)](String,_0xc74881);continue;case'1':_0x22035b['syncs']['push'](_0x244196);continue;case'2':var _0x244196=function(){var _0x4c8617=_0xb3ae35,_0x2af729=_0x3a6c2e();_0x2cbe94[_0x4c8617(0x7fb)]=_0x220211['MSnji'](String,_0x2af729),_0x4d4814['textC'+_0x4c8617(0x830)+'t']=(_0x43912d<-0x11b0+0xb*-0x178+0x21d9?_0x2af729['toFix'+'ed'](0x6*-0x4aa+-0x1*0x101e+0x2c1b):String(Math['round'](_0x2af729)))+(_0x2cbe94[_0x4c8617(0x583)+'et']['unit']||'');var _0x432731=_0x220211[_0x4c8617(0xacc)]((_0x2af729-_0x24b918)/(_0xc74881-_0x24b918),0x1b7f+-0x1831+-0x2ea);_0x2cbe94['style']['setPr'+'opert'+'y']('--p',_0x432731+'%');};continue;case'3':_0x2cbe94[_0xb3ae35(0x4cf)+'ut']=function(){var _0x17cb72=_0xb3ae35;_0x5ca44b(_0x220211[_0x17cb72(0x7d5)](parseFloat,_0x2cbe94[_0x17cb72(0x7fb)])||_0x24b918),_0x244196();};continue;case'4':var _0x4d4814=_0x2078e6(_0xb3ae35(0x883),'sk-va'+'l');continue;case'5':_0x2cbe94['type']=_0xb3ae35(0x54b);continue;case'6':var _0x2cbe94=document[_0xb3ae35(0x769)+'eElem'+_0xb3ae35(0x3ff)](_0x220211['baEgS']);continue;case'7':_0x4ac49a[_0xb3ae35(0xac1)+_0xb3ae35(0x249)+'d'](_0x2cbe94);continue;case'8':var _0x4ac49a=_0x2078e6(_0x220211[_0xb3ae35(0xa2d)],_0x220211['kWCcw']);continue;case'9':_0x4ac49a[_0xb3ae35(0x581)]=_0x2cbe94;continue;case'10':return _0x4ac49a;case'11':_0x2cbe94[_0xb3ae35(0x354)]=String(_0x43912d);continue;case'12':_0x4ac49a[_0xb3ae35(0xac1)+'dChil'+'d'](_0x4d4814);continue;case'13':_0x2cbe94['class'+_0xb3ae35(0x439)]=_0x220211['LtQWu'];continue;case'14':_0x4ac49a['sync']=_0x244196;continue;case'15':_0x220211[_0xb3ae35(0x76c)](_0x244196);continue;case'16':_0x2cbe94[_0xb3ae35(0x33f)]=String(_0x24b918);continue;}break;}}function _0x5b9fe5(_0x49154c,_0x21cc37){var _0x399f1f=_0x4b6c3b,_0x5d5852=_0x2078e6(_0x220211[_0x399f1f(0xa2d)],_0x220211[_0x399f1f(0x527)]),_0x346338=_0x220211[_0x399f1f(0x1ee)](_0x2078e6,_0x220211[_0x399f1f(0xa2d)],'sk-la'+'bel',_0x220211['drCqx'](_0x49154c,_0x21cc37?_0x220211['iCLct']+_0x21cc37+('</spa'+'n>'):''));return _0x5d5852[_0x399f1f(0xac1)+_0x399f1f(0x249)+'d'](_0x346338),_0x5d5852;}function _0x3046b0(_0x199cf2,_0x1735b9,_0x5dbc27,_0x57a018){var _0x4213b4=_0x4b6c3b,_0x37f8da=_0x199cf2&&_0x199cf2['surve'+'y']&&_0x199cf2[_0x4213b4(0x5ab)+'y'][_0x1735b9];if(!_0x37f8da)return'-';for(var _0x23e706=0x13f*-0xd+0xcb*-0x2e+-0x383*-0xf;_0x220211[_0x4213b4(0x72d)](_0x23e706,_0x37f8da[_0x4213b4(0x3f7)+'h']);_0x23e706++){if(_0x37f8da[_0x23e706]['o']===_0x5dbc27){if(_0x57a018==='v3'){var _0x16bd77=_0x37f8da[_0x23e706][_0x4213b4(0x890)]||[_0x37f8da[_0x23e706]['v'],0x1*0x196a+-0x4*0x773+0x462,-0xa2b+-0x1610+0x203b];return _0x16bd77[_0x4213b4(0x9c9)](function(_0x3f5374){return Math['round'](_0x3f5374*(0x1648+-0x11ee+-0x3f6))/(0x1b4b+-0xbe5+-0xf02);})[_0x4213b4(0x8eb)]('\x20\x20');}var _0x3ef8e6=_0x37f8da[_0x23e706]['v'];return _0x220211[_0x4213b4(0x636)](typeof _0x3ef8e6,_0x220211[_0x4213b4(0x77d)])?Math['round'](_0x3ef8e6*(-0x52*0x6a+0x1*0x67c+-0x10*-0x1f6))/(-0x15bd+0x1*-0x101+0x1aa6):String(_0x3ef8e6);}}return'-';}function _0x5b6f42(_0x2144ed){var _0x220a85=_0x4b6c3b,_0x526d8e={'qdsjg':function(_0x5a71e2,_0xcfdff3){var _0x2140a5=_0x3979;return _0x220211[_0x2140a5(0x758)](_0x5a71e2,_0xcfdff3);},'hRIFV':_0x220a85(0x237)+'ds\x20·\x20','ilEQw':_0x220211['gQWIG'],'JZvsq':_0x220a85(0xa39)+_0x220a85(0x964)+'\x20move'+_0x220a85(0x8f0)+_0x220a85(0x213)+_0x220a85(0x237)+_0x220a85(0x43a)+_0x220a85(0x42c)+_0x220a85(0x755)+_0x220a85(0x4bb)+'p\x20and'+_0x220a85(0x70c)+_0x220a85(0x3b4)+_0x220a85(0x671)+_0x220a85(0x612),'cIsan':_0x220a85(0x576)+'w\x20glo'+_0x220a85(0x9b6),'JWIzT':function(_0x31c651,_0x49c725){var _0x137b4d=_0x220a85;return _0x220211[_0x137b4d(0xa5a)](_0x31c651,_0x49c725);},'HQzZy':function(_0x25ef48,_0x45aeb3){var _0x3fc39d=_0x220a85;return _0x220211[_0x3fc39d(0x921)](_0x25ef48,_0x45aeb3);},'sUHtc':'shvDV','KAANA':function(_0x510e14,_0x12bbec,_0x994dc1){return _0x510e14(_0x12bbec,_0x994dc1);},'noveC':function(_0xf0267a){var _0x38443b=_0x220a85;return _0x220211[_0x38443b(0x1bc)](_0xf0267a);},'yypfQ':function(_0x1a840c,_0x54a85a){return _0x220211['ispTQ'](_0x1a840c,_0x54a85a);},'HloSw':function(_0x2b4c25,_0x329020){var _0x2504fc=_0x220a85;return _0x220211[_0x2504fc(0x7fa)](_0x2b4c25,_0x329020);},'ameGf':_0x220a85(0x743),'OkCJa':function(_0x51788a,_0x380867){var _0x77b472=_0x220a85;return _0x220211[_0x77b472(0x93b)](_0x51788a,_0x380867);},'mNBtG':function(_0x13c41f,_0x1aac87){return _0x220211['ZRokx'](_0x13c41f,_0x1aac87);},'FZcAK':_0x220a85(0x800)+'oard\x20'+_0x220a85(0x9d5)+_0x220a85(0x6ad)+_0x220a85(0x7f8)+_0x220a85(0xaf6)+'anel\x20'+_0x220a85(0x3d1)+'ad'},_0x3e7181=_0x2ed218,_0x1e2e23=[],_0x5ddbbe;if(_0x2144ed==='comba'+'t'){var _0x40d6de=_0x220211['LFiyT'](_0x39c2d0,_0x220a85(0x3ae)+_0x220a85(0x5f6),_0x11986b['on']),_0x15e451=_0x220211[_0x220a85(0x42b)](_0x2078e6,_0x220a85(0x2aa),_0x220a85(0x72b)+'esc',_0x11986b['on']?_0x220211[_0x220a85(0x2af)](_0x220211[_0x220a85(0x2f3)](_0x220211[_0x220a85(0xa85)]('x'+_0x11986b[_0x220a85(0x1e9)+'r']['toFix'+'ed'](0x1f78+0x35b*0x7+-0x36f4),_0x220211[_0x220a85(0x34b)]),_0x574ae3[_0x220a85(0x3f7)+'h'])+_0x220211['TNlau'],_0x1bad6a)+('\x20writ'+'es'):_0x220a85(0xa39)+'plies'+'\x20move'+_0x220a85(0x8f0)+'speed'+_0x220a85(0x237)+'ds\x20on'+_0x220a85(0x42c)+'eight'+_0x220a85(0x4bb)+_0x220a85(0x26f)+_0x220a85(0x70c)+'\x20are\x20'+'refus'+'ed.'),_0x1eaf18=_0x5b9fe5(_0x220a85(0x644)+'ed');_0x1eaf18[_0x220a85(0xac1)+'dChil'+'d'](_0x55f9d5(function(){return _0x11986b['on'];},function(_0x216596){var _0x31fcc1=_0x220a85;_0x1f9a50(_0x216596,_0x11986b[_0x31fcc1(0x1e9)+'r']),_0x15e451[_0x31fcc1(0x3d4)+_0x31fcc1(0x830)+'t']=_0x216596?_0x526d8e[_0x31fcc1(0x36e)](_0x526d8e[_0x31fcc1(0x36e)](_0x526d8e['qdsjg']('x'+_0x11986b[_0x31fcc1(0x1e9)+'r']['toFix'+'ed'](-0x126e*0x1+-0x2434+0x36a3)+'\x20on\x20',_0x574ae3['lengt'+'h'])+_0x526d8e[_0x31fcc1(0x398)],_0x1bad6a),_0x526d8e[_0x31fcc1(0x958)]):_0x526d8e['JZvsq'];})),_0x40d6de[_0x220a85(0x60e)]['appen'+'dChil'+'d'](_0x15e451),_0x40d6de['body'][_0x220a85(0xac1)+'dChil'+'d'](_0x1eaf18);var _0x40c0bc=_0x46440f(-0x6e*-0x20+0xc9a+-0x1a59,-0x907+0x1*0x54e+0x3be,0x18dc+-0xd*0x75+0xa7*-0x1d+0.5,function(){var _0x45d51c=_0x220a85;return _0x11986b[_0x45d51c(0x1e9)+'r'];},function(_0x16d69f){var _0x3a452e=_0x220a85;if(_0x220211[_0x3a452e(0xa80)](_0x220211[_0x3a452e(0x871)],'wiUOK'))_0x1f9a50(_0x11986b['on'],_0x16d69f);else{var _0x59b9b0=_0x2b0b71['Photo'+_0x3a452e(0x282)+_0x3a452e(0x664)+'nc']||{};if(!_0x18a959[_0x3a452e(0x33a)](_0x59b9b0)[_0x3a452e(0x3f7)+'h'])return![];return!!_0x2d6c77();}});_0x40c0bc['input'][_0x220a85(0x583)+'et']['unit']='x';var _0x2fdbbe=_0x5b9fe5(_0x220211[_0x220a85(0x680)],_0x220211[_0x220a85(0x6fc)]);_0x2fdbbe['appen'+_0x220a85(0x249)+'d'](_0x40c0bc),_0x40d6de[_0x220a85(0x60e)]['appen'+'dChil'+'d'](_0x2fdbbe);if(_0x5595d4['lengt'+'h']){if(_0x220211['SbUNt']===_0x220211[_0x220a85(0x463)])return _0x315b19[_0x220a85(0x5d4)+'e']=_0x526d8e['cIsan'],_0x12a504;else{var _0x290138=_0x2078e6('div',_0x220a85(0x61c)+'te','Refus'+_0x220a85(0x5dd)+_0x5595d4[_0x220a85(0x689)](0x18c8+-0x2*0xe7d+-0x219*-0x2,-0x3*-0xc47+-0x11*-0x127+-0x3868)['map'](function(_0x18d307){var _0xabdcc2=_0x220a85;return _0x526d8e[_0xabdcc2(0x36e)]('0x'+(_0x18d307['o']<-0xeea*0x2+-0x184f+0x3623?'?':_0x18d307['o']['toStr'+'ing'](0x33*0x22+0x2*-0xa0f+-0xc*-0x11e))+'\x20('+_0x18d307[_0xabdcc2(0x212)],')');})[_0x220a85(0x8eb)]('\x20\x20'));_0x40d6de['body'][_0x220a85(0xac1)+'dChil'+'d'](_0x290138);}}_0x1e2e23['push'](_0x40d6de);var _0x33d39c=_0x220211['tOQwg'](_0x39c2d0,'Bindi'+_0x220a85(0x3ba)),_0x384379=_0x2078e6(_0x220a85(0xb54)+'n','sk-bt'+'n','Snaps'+'hot\x20n'+_0x220a85(0x1b0)+'9)');_0x384379['type']=_0x220211[_0x220a85(0xa4e)],_0x384379['oncli'+'ck']=function(){var _0x3fd9f5=_0x220a85;_0x220211[_0x3fd9f5(0x649)](_0x3c8bb4,_0x3fd9f5(0x6e5)+_0x3fd9f5(0x96e));},_0x33d39c[_0x220a85(0x60e)][_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x2078e6(_0x220211['PtMZX'],_0x220a85(0x72b)+_0x220a85(0x6d7),_0x220a85(0x3c8)+_0x220a85(0x697)+_0x220a85(0x8b1)+_0x220a85(0x2b6)+_0x220a85(0x213)+_0x220a85(0x4d0)+_0x220a85(0x5c3)+'\x20/\x20F6'+'\x20\x20fac'+_0x220a85(0xa56)+_0x220a85(0x1fb)+'\x0a[\x20\x20]'+'\x20\x20fie'+'ld\x20of'+'\x20view'+'\x0aInse'+_0x220a85(0xaa7)+'his\x20m'+_0x220a85(0x723))),_0x33d39c['body'][_0x220a85(0xac1)+'dChil'+'d'](_0x384379),_0x1e2e23[_0x220a85(0x793)](_0x33d39c);}if(_0x220211[_0x220a85(0x24d)](_0x2144ed,_0x220a85(0x8e4)+'ls')){var _0x4598b2=_0x39c2d0(_0x220211['tftAv'],_0x5623eb['on']),_0x453fe7=_0x220211['jiSaO'](_0x5b9fe5,_0x220211[_0x220a85(0x826)]);_0x453fe7['appen'+'dChil'+'d'](_0x220211[_0x220a85(0x51c)](_0x55f9d5,function(){return _0x5623eb['on'];},function(_0x59a2a6){_0x5623eb['on']=_0x59a2a6,_0x13bc6d();})),_0x4598b2[_0x220a85(0x60e)][_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x220211['nWvQV'](_0x2078e6,'div','sk-md'+'esc',_0x220211[_0x220a85(0x546)])),_0x4598b2[_0x220a85(0x60e)][_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x453fe7);var _0x2591ff=_0x46440f(-0x1f*-0xc9+0xb*0x175+-0x2836,0x22a3*-0x1+-0xa*-0x1f6+0xfa7*0x1,0x1*-0x1796+-0x7bf*-0x1+0x32d*0x5,function(){return _0x5623eb['span'];},function(_0x42d724){var _0x1e9e3a=_0x220a85;if(_0x526d8e['sUHtc']===_0x1e9e3a(0x332))_0x5623eb[_0x1e9e3a(0x883)]=_0x42d724;else return _0x526d8e[_0x1e9e3a(0x36e)](_0x526d8e['JWIzT']('0x',_0x526d8e['HQzZy'](_0x2d06a8['o'],-0x1833+-0x9b9*0x1+0x21ec)?'?':_0xea0803['o'][_0x1e9e3a(0x1f5)+'ing'](-0x5e9+0x1*0x19ad+-0x13b4))+'\x20(',_0x2051fa['why'])+')';});_0x2591ff[_0x220a85(0x581)][_0x220a85(0x583)+'et']['unit']='m';var _0x196672=_0x220211[_0x220a85(0x68d)](_0x5b9fe5,'Range','world'+_0x220a85(0xab3)+'s\x20acr'+'oss\x20t'+_0x220a85(0x763)+_0x220a85(0x6ec));_0x196672['appen'+'dChil'+'d'](_0x2591ff),_0x4598b2[_0x220a85(0x60e)][_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x196672),_0x1e2e23[_0x220a85(0x793)](_0x4598b2);var _0x987625=_0x220211[_0x220a85(0x2f1)](_0x39c2d0,_0x220211['EZSDG'],_0x5623eb[_0x220a85(0x632)]),_0x5d5a52=_0x5b9fe5(_0x220a85(0x644)+'ed');_0x5d5a52[_0x220a85(0xac1)+'dChil'+'d'](_0x55f9d5(function(){var _0x5921da=_0x220a85;return _0x5623eb[_0x5921da(0x632)];},function(_0x261307){var _0x2b08f1=_0x220a85;_0x5623eb[_0x2b08f1(0x632)]=_0x261307,_0x5623eb['on']=!![],_0x13bc6d();})),_0x987625['body'][_0x220a85(0xac1)+'dChil'+'d'](_0x2078e6(_0x220a85(0x2aa),_0x220211[_0x220a85(0x2da)],_0x220a85(0x3b6)+'n-spa'+_0x220a85(0x57a)+_0x220a85(0x967)+_0x220a85(0xb1f)+_0x220a85(0x3c3)+_0x220a85(0x4a4)+_0x220a85(0xaed)+_0x220a85(0x7b1)+'be\x20re'+_0x220a85(0x390)+_0x220a85(0x838)+_0x220a85(0x772)+'ild,\x20'+_0x220a85(0x756)+_0x220a85(0x1af)+_0x220a85(0x216)+'\x20by\x20e'+_0x220a85(0x58d))),_0x987625[_0x220a85(0x60e)]['appen'+'dChil'+'d'](_0x5d5a52);var _0x5db9b1=_0x46440f(-0x259f+0x803+-0x17e*-0x14,0x2b*0x41+0x152b*0x1+-0x1f94,0x1543+0x738+-0x1c79,function(){var _0x48e9ee=_0x220a85;if(_0x48e9ee(0x61b)==='mNJCb')_0x526d8e[_0x48e9ee(0x725)](_0x5885b4,_0x25da75,_0x540fcb['facto'+'r']),_0x182ad4['textC'+_0x48e9ee(0x830)+'t']=_0x4846ca?_0x526d8e[_0x48e9ee(0x36e)]('x'+_0x2ed82b['facto'+'r'][_0x48e9ee(0x662)+'ed'](-0x21fe+0x1f5*0xc+-0xd*-0xcf)+_0x48e9ee(0x462)+_0x23b49d[_0x48e9ee(0x3f7)+'h'],_0x48e9ee(0x237)+_0x48e9ee(0x726))+_0x8f4928+('\x20writ'+'es'):_0x526d8e['JZvsq'];else return _0x5791d0[_0x48e9ee(0xb14)];},function(_0x1a0e3b){var _0xefddc5=_0x220a85;_0x5791d0['fov']=_0x1a0e3b,_0x526d8e[_0xefddc5(0x92f)](_0x402c69);});_0x5db9b1[_0x220a85(0x581)]['datas'+'et'][_0x220a85(0x914)]='°';var _0x13e36e=_0x5b9fe5(_0x220211[_0x220a85(0x7eb)],'[\x20and'+'\x20]\x20al'+_0x220a85(0x4c5)+_0x220a85(0xa48)+'is');_0x13e36e[_0x220a85(0xac1)+'dChil'+'d'](_0x5db9b1),_0x987625[_0x220a85(0x60e)][_0x220a85(0xac1)+'dChil'+'d'](_0x13e36e);var _0x42b002=_0x3e7181&&_0x3e7181[_0x220a85(0x49f)];_0x987625[_0x220a85(0x60e)][_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x2078e6(_0x220211[_0x220a85(0xa2d)],_0x220211[_0x220a85(0x87a)],_0x220211['FcmQd']+(_0x42b002?_0x42b002[_0x220a85(0x329)+_0x220a85(0x88f)]?_0x220211[_0x220a85(0x1f8)](_0x220211[_0x220a85(0x489)],_0x42b002[_0x220a85(0x329)+'Look'])+(_0x42b002[_0x220a85(0x1d4)+'a']?_0x220211['szIfR']+_0x42b002[_0x220a85(0x1d4)+'a']:''):_0x220211['DEOPQ']:_0x220211[_0x220a85(0xa99)])+(_0x5791d0[_0x220a85(0x73a)+_0x220a85(0x565)]||_0x5791d0['yawOf'+'f']?_0x220211['KxpLL'](_0x220211[_0x220a85(0x294)]+Math['round'](_0x5791d0[_0x220a85(0x73a)+'Off'])+_0x220211[_0x220a85(0x41a)],Math['round'](_0x5791d0['yawOf'+'f'])):''))),_0x1e2e23[_0x220a85(0x793)](_0x987625);}if(_0x220211[_0x220a85(0x806)](_0x2144ed,_0x220211[_0x220a85(0x6d3)])){if(_0x220a85(0x59c)===_0x220211['SInkP']){var _0x204d3b=[[_0x220211['NhoXZ'],_0x220211[_0x220a85(0xb39)],_0x3e7181?_0x3e7181[_0x220a85(0x84a)+'on']:'-'],['Hooks',_0x220211['aqAep'],_0x3e7181?_0x220211['cVfka'](_0x220211[_0x220a85(0x1d9)](_0x3e7181['hooks'+'Appli'+'ed'],_0x220211[_0x220a85(0x6d4)]),_0x3e7181[_0x220a85(0x30c)+'Regis'+_0x220a85(0x978)+_0x220a85(0x204)]):'-'],[_0x220a85(0x1c3),_0x220a85(0xb4c)+_0x220a85(0x930)+_0x220a85(0x289)+'e()',_0x3e7181&&_0x3e7181['wasmM'+'emory']&&_0x3e7181[_0x220a85(0x2d5)+_0x220a85(0x326)][_0x220a85(0x1f9)+_0x220a85(0xaec)]?Math[_0x220a85(0x5ec)](_0x3e7181[_0x220a85(0x2d5)+_0x220a85(0x326)][_0x220a85(0x8da)]/(0x1f4cc1+0x5*0x3ef3+-0x7*0x25c80))+_0x220211['ZsBoa']+_0x3e7181['wasmM'+'emory']['atMs']+'ms':'-'],['Playe'+'rs',_0x220a85(0x7c5)+_0x220a85(0x282)+_0x220a85(0x664)+'nc',_0x3e7181&&_0x3e7181['esp']?String(_0x3e7181[_0x220a85(0x38a)][_0x220a85(0x455)+'rCoun'+'t']):'-'],[_0x220211['bKNdR'],_0x220211[_0x220a85(0xb59)],_0x3e7181&&_0x3e7181[_0x220a85(0x38a)]?String(_0x3e7181[_0x220a85(0x38a)][_0x220a85(0x8c1)+_0x220a85(0xb24)]):'-'],[_0x220a85(0x49c)+'a',_0x220211[_0x220a85(0x899)],_0x3e7181&&_0x3e7181[_0x220a85(0x38a)]&&_0x3e7181[_0x220a85(0x38a)]['camer'+'a']?_0x220211[_0x220a85(0xa1f)](_0x3e7181['esp'][_0x220a85(0x1d4)+'a']+'\x20('+_0x3e7181['esp'][_0x220a85(0x1d4)+_0x220a85(0x70a)],')'):'-']];for(_0x5ddbbe=-0x167a+-0x1817*0x1+0x83*0x5b;_0x220211[_0x220a85(0x47c)](_0x5ddbbe,_0x204d3b[_0x220a85(0x3f7)+'h']);_0x5ddbbe++){var _0x4619c5=_0x5b9fe5(_0x204d3b[_0x5ddbbe][0x4*0x3d7+0x1f88+-0x2ee4]),_0x2de614=_0x220211[_0x220a85(0x2e0)](_0x2078e6,_0x220a85(0x883),_0x220211[_0x220a85(0x5a7)]);_0x2de614['style']['minWi'+'dth']='0',_0x2de614[_0x220a85(0x855)][_0x220a85(0x434)]='1',_0x2de614[_0x220a85(0x855)][_0x220a85(0xb26)+'lign']='right',_0x2de614['textC'+_0x220a85(0x830)+'t']=String(_0x204d3b[_0x5ddbbe][-0x8*0x76+0xb*-0x33+0xb*0x89]),_0x2de614['datas'+'et']['k']=_0x204d3b[_0x5ddbbe][-0x3*0xbc3+-0x5c8+0x2912*0x1],_0x4619c5['appen'+'dChil'+'d'](_0x2de614);var _0x30a666=_0x1e2e23[_0x220a85(0x3f7)+'h']?_0x1e2e23[_0x1e2e23[_0x220a85(0x3f7)+'h']-(0x15ff*0x1+0x13ac*-0x1+0x63*-0x6)]:null;!_0x30a666&&(_0x30a666=_0x220211[_0x220a85(0xac2)](_0x39c2d0,_0x220a85(0x92a)+'on',![]),_0x1e2e23['push'](_0x30a666)),_0x30a666[_0x220a85(0x60e)][_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x4619c5),_0x30a666[_0x220a85(0x60e)][_0x220a85(0x515)+'hild']['sp']=_0x2de614;}var _0xfc51fc=_0x220211[_0x220a85(0x418)](_0x39c2d0,_0x220a85(0x9fb)+'r',![]),_0x23fcc1=[[_0x220211['wABKZ'],_0x220211['eScZE'],_0x3e7181&&_0x3e7181[_0x220a85(0xb00)]&&_0x3e7181[_0x220a85(0xb00)][_0x220a85(0x1cc)]?_0x3e7181[_0x220a85(0xb00)]['feet']['map'](function(_0x1aec63){var _0x59bfd1=_0x220a85;return Math[_0x59bfd1(0x5ec)](_0x1aec63*(0x4e1*-0x1+-0x71*-0x15+-0x400))/(-0x3a5*0x7+-0x1c87+-0x366e*-0x1);})[_0x220a85(0x8eb)]('\x20\x20'):'-'],[_0x220a85(0x2f2),'+0x29'+'8',_0x3e7181&&_0x3e7181['local']&&_0x3e7181['local'][_0x220a85(0x3f3)]?_0x3e7181['local'][_0x220a85(0x3f3)][_0x220a85(0x9c9)](function(_0x4ecb22){var _0x4f8765=_0x220a85,_0x17a040={'cOhaC':function(_0xf97c8a,_0x4867c5){var _0x4b12b0=_0x3979;return _0x526d8e[_0x4b12b0(0x371)](_0xf97c8a,_0x4867c5);},'esAAR':function(_0xcc626,_0x519790){return _0xcc626*_0x519790;},'yOxxj':function(_0x3873fe,_0xd75e7){return _0x3873fe+_0xd75e7;},'HGDdK':function(_0x1b864b,_0x120d21){return _0x1b864b+_0x120d21;},'QsdDw':function(_0x3b359c,_0x34e61a){return _0x3b359c+_0x34e61a;},'vZAWF':function(_0x37d195,_0x3a0f06){return _0x526d8e['JWIzT'](_0x37d195,_0x3a0f06);},'jNjiR':function(_0x57df0f,_0x1acec0){return _0x57df0f+_0x1acec0;},'tzdJp':function(_0xe55627,_0x24f118){return _0x526d8e['HloSw'](_0xe55627,_0x24f118);},'IGqrF':function(_0x12b173,_0x7ed2d0){return _0x12b173(_0x7ed2d0);}};if(_0x4f8765(0xa03)!==_0x526d8e['ameGf'])return _0x526d8e[_0x4f8765(0x371)](Math['round'](_0x4ecb22*(-0xead+0x371*-0x1+-0x1282*-0x1)),-0x71*-0x9+0x1b*-0x5e+-0x1*-0x655);else{var _0x1ab316=_0x5b30ed[_0x19b437],_0x2ab5f3=typeof _0x1ab316['v']==='numbe'+'r'?_0x17a040['cOhaC'](_0x3681e3['round'](_0x17a040[_0x4f8765(0xaa1)](_0x1ab316['v'],0xa37+0x1014+-0xb*0x209)),-0x1*0x210a+0x3*-0xa1d+-0x1*-0x4349):_0x1ab316['v'];_0x5aa4d1[_0x4f8765(0x793)](_0x17a040[_0x4f8765(0x80c)](_0x17a040['HGDdK'](_0x17a040[_0x4f8765(0x801)](_0x17a040['vZAWF'](_0x17a040[_0x4f8765(0x9c4)](_0x17a040['tzdJp']('\x20\x20',('0x'+_0x1ab316['o'][_0x4f8765(0x1f5)+_0x4f8765(0x6cd)](0xe83+0x71*-0x2b+0x488))[_0x4f8765(0x1d2)+'d'](0x9b3+0x1*0x155d+-0x1f08))+'\x20',_0x1ab316['k'][_0x4f8765(0x1d2)+'d'](-0x2a6*0x3+-0x3*0x9ef+0x12e5*0x2)),'\x20'),_0x17a040[_0x4f8765(0x6cf)](_0x5cba9c,_0x2ab5f3)['padEn'+'d'](-0x10*-0xb8+0xb8d*-0x1+0x1d)),'\x20'),_0x1ab316[_0x4f8765(0xb2c)]||''));}})['join']('\x20\x20'):'-'],['Walk\x20'+_0x220a85(0x213),_0x220a85(0x972),_0x3046b0(_0x3e7181,_0x220211[_0x220a85(0x578)],0x1762+0x25*0x7a+-0xa3d*0x4)],['Sprin'+_0x220a85(0x573)+'ed',_0x220a85(0x5f2),_0x220211['smnnw'](_0x3046b0,_0x3e7181,_0x220a85(0x37b)+_0x220a85(0x8c2)+_0x220a85(0x5da),0x17be+0x1cd8+-0x3a*0xe7)],[_0x220a85(0x3cf)+_0x220a85(0x39f)+'t',_0x220a85(0xb55),_0x3046b0(_0x3e7181,_0x220a85(0x37b)+'ntrol'+'ler',-0x96d+0x1686+-0xbfd*0x1)],[_0x220a85(0x44f)+'h',_0x220a85(0x44f)+_0x220a85(0x728)+_0x220a85(0x82a)+'C0',_0x3046b0(_0x3e7181,_0x220211[_0x220a85(0x27e)],-0x3*-0xc88+0xb51+0x1*-0x3029)]];for(_0x5ddbbe=-0x3a1*0x1+-0x183f+0x1be0;_0x5ddbbe<_0x23fcc1['lengt'+'h'];_0x5ddbbe++){var _0x575f0d=('3|7|4'+_0x220a85(0x876)+'2|0|6'+'|5|9')[_0x220a85(0xaa6)]('|'),_0x3a3d27=-0x32f*-0x2+0x1d28+0x1*-0x2386;while(!![]){switch(_0x575f0d[_0x3a3d27++]){case'0':_0x55ca9e['datas'+'et']['k']=_0x23fcc1[_0x5ddbbe][-0x1*-0x983+0x9ab+-0x132d];continue;case'1':_0x55ca9e[_0x220a85(0x855)][_0x220a85(0xb26)+_0x220a85(0x334)]=_0x220a85(0x98d);continue;case'2':_0x55ca9e[_0x220a85(0x3d4)+'onten'+'t']=String(_0x23fcc1[_0x5ddbbe][-0x2591+-0x1415+0x334*0x12]);continue;case'3':var _0x2b49d5=_0x220211[_0x220a85(0x4e1)](_0x5b9fe5,_0x23fcc1[_0x5ddbbe][0xfd6+0x640+0xb*-0x202]);continue;case'4':_0x55ca9e['style'][_0x220a85(0xb1a)+'dth']='0';continue;case'5':_0xfc51fc[_0x220a85(0x60e)]['appen'+_0x220a85(0x249)+'d'](_0x2b49d5);continue;case'6':_0x2b49d5[_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x55ca9e);continue;case'7':var _0x55ca9e=_0x2078e6(_0x220a85(0x883),_0x220211['assNL']);continue;case'8':_0x55ca9e[_0x220a85(0x855)]['flex']='1';continue;case'9':_0xfc51fc['body'][_0x220a85(0x515)+_0x220a85(0x4c1)]['sp']=_0x55ca9e;continue;}break;}}_0x1e2e23[_0x220a85(0x793)](_0xfc51fc);}else{_0x1ebf2b[_0x220a85(0x8a5)+'ntDef'+_0x220a85(0xa69)](),_0x220211[_0x220a85(0x288)](_0x48337f,'snaps'+'hot');return;}}if(_0x220211[_0x220a85(0x5a3)](_0x2144ed,_0x220211['lzKGy'])){var _0x1e8938=(_0x220a85(0x874)+_0x220a85(0x919)+_0x220a85(0x7e4)+_0x220a85(0x58c)+'|6')[_0x220a85(0xaa6)]('|'),_0x5e88b5=-0xb14+-0x145+-0x1*-0xc59;while(!![]){switch(_0x1e8938[_0x5e88b5++]){case'0':_0x1e2e23['push'](_0x3c5477);continue;case'1':_0x436bfb[_0x220a85(0x60e)]['appen'+_0x220a85(0x249)+'d'](_0x220211[_0x220a85(0x37d)](_0x2078e6,_0x220211[_0x220a85(0xa2d)],_0x220211[_0x220a85(0x2da)],_0x220a85(0x1bf)+_0x220a85(0x4e8)+_0x220a85(0xa26)+'\x20thin'+'g\x20whe'+'n\x20som'+_0x220a85(0x7b3)+_0x220a85(0x39a)+_0x220a85(0x28a)+_0x220a85(0xa19)));continue;case'2':var _0x436bfb=_0x39c2d0('Repor'+'t',![]);continue;case'3':_0x33b7d6[_0x220a85(0x438)+'ck']=function(){var _0x33bf9e=_0x220a85;try{var _0x36e8b2=_0x526d8e[_0x33bf9e(0x5e7)](_0x526d8e[_0x33bf9e(0x928)](_0x15d915,'\x0a')+JSON[_0x33bf9e(0x62c)+_0x33bf9e(0x64f)](_0x3e7181,null,-0x1d*0x7+0x2*0x7ab+0x745*-0x2),'\x0a')+_0x323bbd;if(navigator['clipb'+_0x33bf9e(0x3f8)]&&navigator[_0x33bf9e(0xad0)+_0x33bf9e(0x3f8)][_0x33bf9e(0x8fe)+'Text'])navigator['clipb'+'oard']['write'+_0x33bf9e(0x4e5)](_0x36e8b2)[_0x33bf9e(0x78a)](function(){var _0x1682e7=_0x33bf9e;_0x33b7d6[_0x1682e7(0x3d4)+_0x1682e7(0x830)+'t']='Copie'+'d';});else _0x33b7d6['textC'+_0x33bf9e(0x830)+'t']=_0x526d8e[_0x33bf9e(0x40e)];}catch(_0x7aa084){_0x33b7d6[_0x33bf9e(0x3d4)+_0x33bf9e(0x830)+'t']=_0x33bf9e(0x974)+'faile'+'d';}};continue;case'4':var _0x4b439e=_0x3e7181&&_0x3e7181[_0x220a85(0xaca)+'ngs']&&_0x3e7181[_0x220a85(0xaca)+'ngs']['lengt'+'h']?_0x3e7181[_0x220a85(0xaca)+_0x220a85(0x3ba)][_0x220a85(0x8eb)]('\x0a'):_0x220a85(0x591)+'rning'+'s';continue;case'5':_0x436bfb[_0x220a85(0x60e)][_0x220a85(0xac1)+_0x220a85(0x249)+'d'](_0x33b7d6);continue;case'6':_0x1e2e23['push'](_0x436bfb);continue;case'7':var _0x3c5477=_0x39c2d0(_0x220a85(0x20b)+_0x220a85(0x314)+'s',![]);continue;case'8':_0x3c5477[_0x220a85(0x60e)]['appen'+'dChil'+'d'](_0x2078e6(_0x220a85(0x2aa),_0x220211[_0x220a85(0x4d3)],_0x4b439e));continue;case'9':var _0x33b7d6=_0x2078e6('butto'+'n',_0x220211['yTGoQ'],_0x220211[_0x220a85(0x922)]);continue;case'10':_0x33b7d6['type']='butto'+'n';continue;}break;}}return _0x1e2e23;}function _0x13bc6d(){var _0x4eca80=_0x4b6c3b;if(_0x22035b[_0x4eca80(0x7fe)])_0x220211[_0x4eca80(0x7d5)](_0x3cbf67,!![]);}function _0x4cc6c6(){var _0xb147f5=_0x4b6c3b,_0x58752f={'OLfTw':_0xb147f5(0x854)+_0xb147f5(0xab2)+_0xb147f5(0x67d)+'z\x20-\x20w'+_0xb147f5(0x533)+_0xb147f5(0x22f)+_0xb147f5(0x4e8)+_0xb147f5(0x5fc)+_0xb147f5(0x645)+'rt)'};if(_0x22035b['built'])return _0x22035b[_0xb147f5(0x3f4)];try{if(!document['body']||!document[_0xb147f5(0x60e)][_0xb147f5(0xac1)+'dChil'+'d'])return null;if(!document[_0xb147f5(0x4e7)+_0xb147f5(0x6e7)+_0xb147f5(0x41f)](_0xb147f5(0x621)+'a-men'+'u-css')){var _0x45f2c8=document['creat'+_0xb147f5(0x41c)+'ent'](_0x220211[_0xb147f5(0x9cd)]);_0x45f2c8['id']=_0xb147f5(0x621)+'a-men'+_0xb147f5(0x346),_0x45f2c8[_0xb147f5(0x3d4)+_0xb147f5(0x830)+'t']=_0x2b659c,(document['head']||document[_0xb147f5(0x304)+'entEl'+_0xb147f5(0x6e7)])[_0xb147f5(0xac1)+_0xb147f5(0x249)+'d'](_0x45f2c8);}var _0x4b9b92=_0x2078e6(_0xb147f5(0x2aa),_0x220211['LGiRj']);_0x4b9b92['id']=_0xb147f5(0x621)+'a-men'+_0xb147f5(0x9d9)+'t';var _0x51aafe=_0x2078e6(_0x220211[_0xb147f5(0xa2d)],_0xb147f5(0x657)+'de'),_0x449c9f=_0x2078e6(_0x220211['PtMZX'],_0xb147f5(0x23f)+'go',_0x112260);_0x51aafe[_0xb147f5(0xac1)+_0xb147f5(0x249)+'d'](_0x449c9f);var _0x3e7d84=_0x2078e6(_0xb147f5(0x2aa),_0x220211['uhfwe']),_0x2b8f24=_0x220211['sWUhN'](_0x2078e6,_0xb147f5(0x2aa),_0x220211[_0xb147f5(0xa45)]),_0xf39581=_0x220211[_0xb147f5(0x68d)](_0x2078e6,_0xb147f5(0x2aa),_0xb147f5(0x684)+_0xb147f5(0xab9)),_0x43e46f=_0x220211[_0xb147f5(0x926)](_0x2078e6,_0xb147f5(0x2aa),_0x220211['otrfm'],_0x220211[_0xb147f5(0x3db)]),_0x10ae04=_0x220211[_0xb147f5(0x8a7)](_0x2078e6,_0xb147f5(0x2aa),_0xb147f5(0x84c)+'b','start'+_0xb147f5(0x879));_0xf39581[_0xb147f5(0xac1)+_0xb147f5(0x249)+'d'](_0x43e46f),_0xf39581['appen'+_0xb147f5(0x249)+'d'](_0x10ae04);var _0x334909=_0x2078e6(_0xb147f5(0x2aa),_0xb147f5(0x365)+'ose',_0x220211['aAIEv']);_0x334909[_0xb147f5(0x438)+'ck']=function(){var _0x5d2e56=_0xb147f5;if('kQOJQ'!==_0x5d2e56(0x34e))return _0x4b8d35[-0xaa*-0x7+0x406+-0x13d*0x7]==='f32'||_0x4f0b68[-0x2353*0x1+0xcb*0xe+-0xc1d*-0x2]==='i32';else _0x3cbf67(![]);},_0x2b8f24[_0xb147f5(0xac1)+'dChil'+'d'](_0xf39581),_0x2b8f24[_0xb147f5(0xac1)+'dChil'+'d'](_0x334909);var _0x5a71e6=_0x2078e6('div',_0x220211['ZlUjj']);_0x3e7d84['appen'+_0xb147f5(0x249)+'d'](_0x2b8f24),_0x3e7d84['appen'+_0xb147f5(0x249)+'d'](_0x5a71e6),_0x4b9b92[_0xb147f5(0xac1)+'dChil'+'d'](_0x51aafe),_0x4b9b92[_0xb147f5(0xac1)+_0xb147f5(0x249)+'d'](_0x3e7d84),document[_0xb147f5(0x60e)]['appen'+_0xb147f5(0x249)+'d'](_0x4b9b92),_0x22035b[_0xb147f5(0x3f4)]=_0x4b9b92,_0x22035b['cols']=_0x5a71e6,_0x22035b[_0xb147f5(0x750)]=_0x43e46f,_0x22035b[_0xb147f5(0x4d1)]=_0x10ae04;var _0x217ebd={};for(var _0x3e4014=-0x578+0x78e+-0x216;_0x3e4014<_0x32c6de[_0xb147f5(0x3f7)+'h'];_0x3e4014++){var _0x38219d=('5|3|1'+_0xb147f5(0x1dd)+_0xb147f5(0x5b7))['split']('|'),_0x29e6a3=0x5*-0x2df+-0x5*0x3a+0x41*0x3d;while(!![]){switch(_0x38219d[_0x29e6a3++]){case'0':_0x2b69b8[_0xb147f5(0x819)]=_0x5127bf[_0xb147f5(0x5e0)];continue;case'1':_0x2b69b8[_0xb147f5(0x226)]=_0x220211[_0xb147f5(0xa4e)];continue;case'2':_0x217ebd[_0x5127bf['id']]=_0x2b69b8;continue;case'3':var _0x2b69b8=_0x2078e6(_0xb147f5(0xb54)+'n',_0x220211['cESvD'],_0x220211[_0xb147f5(0xa02)](_0xb147f5(0x7c6)+'l>'+_0x5127bf[_0xb147f5(0x5e0)],_0x220211[_0xb147f5(0x4df)]));continue;case'4':(function(_0x22cafe){_0x2b69b8['oncli'+'ck']=function(){_0x8184ee(_0x22cafe);};}(_0x5127bf['id']));continue;case'5':var _0x5127bf=_0x32c6de[_0x3e4014];continue;case'6':_0x51aafe['appen'+'dChil'+'d'](_0x2b69b8);continue;}break;}}_0x22035b[_0xb147f5(0xb54)+'ns']=_0x217ebd;var _0x1324ab=_0x2078e6(_0x220211[_0xb147f5(0xa2d)],null,_0xb09808);return _0x1324ab['id']=_0xb147f5(0x621)+'a-pet'+'al',_0x1324ab['title']=_0x220211['HIedK'],_0x1324ab['onmou'+_0xb147f5(0x5d2)+'er']=function(){var _0x2335b4=_0xb147f5;_0x1324ab[_0x2335b4(0x855)]['opaci'+'ty']='1';},_0x1324ab['onmou'+'selea'+'ve']=function(){var _0x53e5d5=_0xb147f5;_0x1324ab['style']['opaci'+'ty']=_0x22035b[_0x53e5d5(0x7fe)]?'1':'.5';},_0x1324ab[_0xb147f5(0x438)+'ck']=function(_0x53d3dd){var _0x5d4ad0=_0xb147f5,_0xc110ce={'nyZda':function(_0xe08e9,_0xb0e7a4){return _0xe08e9===_0xb0e7a4;}};if(_0x220211['qIXOd']('FRhlL',_0x220211[_0x5d4ad0(0x3b7)]))return _0xc110ce[_0x5d4ad0(0x619)](_0x54d5d9['type'],_0x3c2d17);else{if(_0x53d3dd&&_0x53d3dd['stopP'+_0x5d4ad0(0x870)+'ation'])_0x53d3dd[_0x5d4ad0(0x6c7)+_0x5d4ad0(0x870)+_0x5d4ad0(0xa29)]();_0x220211['gJYFz'](_0x3cbf67,!_0x22035b[_0x5d4ad0(0x7fe)]);}},document[_0xb147f5(0x60e)][_0xb147f5(0xac1)+_0xb147f5(0x249)+'d'](_0x1324ab),_0x22035b['petal']=_0x1324ab,_0x220211[_0xb147f5(0x458)](setInterval,function(){var _0x56e366=_0xb147f5;try{if(!_0x22035b[_0x56e366(0x9ec)])return;var _0x1222a8=_0x898e61();_0x22035b[_0x56e366(0x9ec)][_0x56e366(0x855)][_0x56e366(0xa35)+'ty']=_0x22035b['open']?'1':_0x1222a8?'.8':_0x56e366(0x2b3),_0x22035b[_0x56e366(0x9ec)][_0x56e366(0x819)]=_0x1222a8?_0x56e366(0x854)+_0x56e366(0xab2)+_0x56e366(0x67d)+_0x56e366(0xae4)+_0x56e366(0x3e2):_0x58752f['OLfTw'];}catch(_0x5acbd5){}},-0x1*-0x137b+0x67e+-0x173d),_0x22035b['built']=!![],_0x8184ee(_0x22035b['cat']),_0x4b9b92;}catch(_0x4ee0e9){if(_0x220211[_0xb147f5(0x33b)](_0xb147f5(0x343),_0x220211[_0xb147f5(0x504)]))return console['warn'](_0xb147f5(0x7c8)+_0xb147f5(0x8ba)+_0xb147f5(0x60a)+_0xb147f5(0x497)+_0xb147f5(0xaf1)+'le',_0xb147f5(0x8bc)+':'+_0x563cd7,_0x4ee0e9),null;else{if(_0x395e69)_0x410d42[_0xb147f5(0x3d4)+_0xb147f5(0x830)+'t']='Copie'+'d';}}}function _0x8184ee(_0x1901c1){var _0x10c642=_0x4b6c3b,_0x486df9={'tAnpf':function(_0x34d334,_0x498c79,_0x50d1de){var _0x2c8de3=_0x3979;return _0x220211[_0x2c8de3(0xb16)](_0x34d334,_0x498c79,_0x50d1de);},'blFKi':'span'};if(_0x220211['eILAJ'](_0x10c642(0x55b),'RBORv')){_0x22035b[_0x10c642(0x2ff)]=_0x1901c1,_0x22035b['syncs']=[];if(!_0x22035b[_0x10c642(0x555)])return;var _0x21b321=null;for(var _0x4aca30=-0x12*0x1a5+-0x2*-0x4ad+0x1440*0x1;_0x4aca30<_0x32c6de['lengt'+'h'];_0x4aca30++)if(_0x32c6de[_0x4aca30]['id']===_0x1901c1)_0x21b321=_0x32c6de[_0x4aca30];_0x22035b[_0x10c642(0x750)]['textC'+_0x10c642(0x830)+'t']=_0x10c642(0x854)+_0x10c642(0xab2)+'llWar'+_0x10c642(0x682)+(_0x21b321&&_0x21b321[_0x10c642(0x5e0)]||'?');for(var _0x25c623 in _0x22035b[_0x10c642(0xb54)+'ns']){if(_0x22035b[_0x10c642(0xb54)+'ns'][_0x25c623]['class'+_0x10c642(0x368)])_0x22035b[_0x10c642(0xb54)+'ns'][_0x25c623][_0x10c642(0x393)+_0x10c642(0x439)]=_0x220211[_0x10c642(0x602)](_0x10c642(0x306)+'b',_0x25c623===_0x1901c1?_0x220211[_0x10c642(0x977)]:'');}var _0xbc8e19=[];try{_0x10c642(0x784)!==_0x10c642(0xa86)?_0xbc8e19=_0x5b6f42(_0x1901c1):(_0x265dd3['st'][_0x10c642(0x22b)+_0x10c642(0x1f7)+'n']=_0x5204c5['froun'+'d'](_0x2f7043),_0xdcaaf0++,_0x5d1689[_0x10c642(0x793)](_0x220211[_0x10c642(0x363)]('0x',_0x1a98d2['o'][_0x10c642(0x1f5)+_0x10c642(0x6cd)](-0x1ae7+0xea2+0xc55))));}catch(_0x497b61){if(_0x10c642(0x63f)===_0x10c642(0x63f))_0xbc8e19=[];else{if(_0x40fc2e[_0x2b005d][_0x10c642(0x279)+_0x10c642(0x2e8)+'dow'])_0x2e05d1[_0x1da578][_0x10c642(0x279)+_0x10c642(0x2e8)+_0x10c642(0x635)]['postM'+_0x10c642(0x904)+'e'](_0x13d5dd,'*');}}while(_0x22035b['cols'][_0x10c642(0xaaf)+'Child'])_0x22035b[_0x10c642(0x555)]['remov'+'eChil'+'d'](_0x22035b[_0x10c642(0x555)][_0x10c642(0xaaf)+'Child']);for(var _0x50858c=0x1*-0x469+0x14a2+-0x1039;_0x50858c<_0xbc8e19['lengt'+'h'];_0x50858c++)_0x22035b['cols'][_0x10c642(0xac1)+_0x10c642(0x249)+'d'](_0xbc8e19[_0x50858c]);}else{var _0x355684=_0x3655ab(_0x433dcd[_0x3b8cb5][-0x37c+-0x1b95+0x1f11]),_0x27b5eb=_0x486df9[_0x10c642(0x724)](_0x1fff93,_0x486df9['blFKi'],'sk-va'+'l');_0x27b5eb[_0x10c642(0x855)]['minWi'+'dth']='0',_0x27b5eb['style'][_0x10c642(0x434)]='1',_0x27b5eb[_0x10c642(0x855)][_0x10c642(0xb26)+_0x10c642(0x334)]=_0x10c642(0x98d),_0x27b5eb[_0x10c642(0x3d4)+_0x10c642(0x830)+'t']=_0x3e4d1c(_0x59ba1e[_0x157b4b][0xc36+0x13d*0x11+0x2141*-0x1]),_0x27b5eb['datas'+'et']['k']=_0xc20479[_0x3a2df5][0x1d87+0x7a*-0x8+-0x19b6],_0x355684[_0x10c642(0xac1)+_0x10c642(0x249)+'d'](_0x27b5eb),_0x25c332[_0x10c642(0x60e)][_0x10c642(0xac1)+'dChil'+'d'](_0x355684),_0x509f37[_0x10c642(0x60e)][_0x10c642(0x515)+'hild']['sp']=_0x27b5eb;}}function _0x3cbf67(_0x566ba5){var _0x480aa2=_0x4b6c3b;_0x22035b[_0x480aa2(0x7fe)]=!!_0x566ba5;var _0x1ca864=_0x4cc6c6();if(!_0x1ca864)return;_0x1ca864[_0x480aa2(0x393)+_0x480aa2(0x439)]=_0x220211['LGiRj']+(_0x22035b['open']?'\x20show'+'n':'');if(_0x22035b[_0x480aa2(0x9ec)])_0x22035b['petal'][_0x480aa2(0x855)]['opaci'+'ty']=_0x22035b['open']?'1':'.5';if(_0x22035b['open']){_0x8184ee(_0x22035b[_0x480aa2(0x2ff)]);try{var _0x1eefa2=window[_0x480aa2(0x510)+_0x480aa2(0x376)+'t']||0x2*-0x77f+0x2b*0x20+-0x2*-0x65f;if(_0x1eefa2<0x1a5*0xc+-0x1fe7*0x1+-0x1*-0xe97)_0x55a220(![]);}catch(_0x23cb6c){}}}function _0x37cde6(){var _0x2d8205=_0x4b6c3b,_0x1383bf={'qGdVG':_0x220211['UbFkm'],'ANlmP':function(_0x58947c,_0x4e4639){return _0x220211['HQpeU'](_0x58947c,_0x4e4639);},'tcUAw':function(_0xa9308a,_0x5174f1){var _0x54020d=_0x3979;return _0x220211[_0x54020d(0x7ff)](_0xa9308a,_0x5174f1);}};if('UXgrj'!=='UXgrj'){_0x7e4df0[_0x2d8205(0x517)]=_0x1383bf['qGdVG'];return;}else{if(!_0x22035b[_0x2d8205(0x7fe)]||!_0x22035b[_0x2d8205(0x49b)])return;try{for(var _0x53fc7d=-0x14d5*-0x1+0xad9+-0x2*0xfd7;_0x53fc7d<_0x22035b['syncs'][_0x2d8205(0x3f7)+'h'];_0x53fc7d++){try{_0x22035b['syncs'][_0x53fc7d]();}catch(_0x2a302f){}}var _0xefca7a=_0x2ed218;_0x22035b[_0x2d8205(0x4d1)]['textC'+_0x2d8205(0x830)+'t']=_0xefca7a?_0x220211[_0x2d8205(0x570)](_0x220211[_0x2d8205(0xa1f)]('v',_0xefca7a['versi'+'on'])+('\x20\x20·\x20\x20'+'hooks'+'\x20')+_0xefca7a[_0x2d8205(0x30c)+'Appli'+'ed']+'/',_0xefca7a[_0x2d8205(0x30c)+_0x2d8205(0xa61)])+('\x20\x20·\x20\x20'+_0x2d8205(0x455)+'rs\x20')+(_0xefca7a[_0x2d8205(0x38a)]&&_0xefca7a[_0x2d8205(0x38a)][_0x2d8205(0x455)+_0x2d8205(0xa3e)+'t']||0x21b8+0x2420+0x3c*-0x12a)+(_0x2d8205(0xb5b)+_0x2d8205(0x8f7))+(_0xefca7a[_0x2d8205(0x2d5)+'emory']&&_0xefca7a['wasmM'+_0x2d8205(0x326)][_0x2d8205(0x1f9)+_0x2d8205(0xaec)]?Math['round'](_0x220211['IZYKP'](_0xefca7a['wasmM'+_0x2d8205(0x326)][_0x2d8205(0x8da)],0xfabb1+-0x8*0xf89d+-0x81937*-0x1))+'MB':'-'):_0x220211[_0x2d8205(0x6ba)];var _0x58a545=_0x22035b[_0x2d8205(0x555)][_0x2d8205(0x797)+'Selec'+'torAl'+'l']?_0x22035b['cols']['query'+'Selec'+_0x2d8205(0xb18)+'l']('[data'+'-k]'):[];for(var _0x500e76=-0x464*-0x8+-0x1a6e+-0x6*0x173;_0x220211[_0x2d8205(0x1d7)](_0x500e76,_0x58a545['lengt'+'h']);_0x500e76++){var _0x176bee=_0x58a545[_0x500e76][_0x2d8205(0x583)+'et']['k'],_0x304ec7='';if(_0x176bee===_0x2d8205(0x402)+'ON')_0x304ec7=_0xefca7a?_0xefca7a[_0x2d8205(0x84a)+'on']:'-';else{if(_0x176bee===_0x2d8205(0x6bd)+'ed\x20/\x20'+_0x2d8205(0xa41)+'tered')_0x304ec7=_0xefca7a?_0x220211[_0x2d8205(0x782)](_0xefca7a['hooks'+'Appli'+'ed'],_0x2d8205(0x66e))+_0xefca7a[_0x2d8205(0x30c)+_0x2d8205(0x64e)+_0x2d8205(0x978)+_0x2d8205(0x204)]:'-';else{if(_0x220211[_0x2d8205(0x806)](_0x176bee,_0x220211[_0x2d8205(0x981)]))_0x304ec7=_0xefca7a&&_0xefca7a[_0x2d8205(0x2d5)+_0x2d8205(0x326)]&&_0xefca7a[_0x2d8205(0x2d5)+'emory'][_0x2d8205(0x1f9)+_0x2d8205(0xaec)]?_0x220211[_0x2d8205(0xb4b)](_0x220211[_0x2d8205(0x7ed)](Math['round'](_0xefca7a[_0x2d8205(0x2d5)+'emory'][_0x2d8205(0x8da)]/(-0xaf03*0x2+-0x117e75+0x22dc7b))+_0x220211['ZsBoa'],_0xefca7a[_0x2d8205(0x2d5)+_0x2d8205(0x326)][_0x2d8205(0x9fe)]),'ms'):'-';else{if(_0x220211['KyyVp'](_0x176bee,_0x2d8205(0x7c5)+'nNetw'+_0x2d8205(0x664)+'nc'))_0x304ec7=_0xefca7a&&_0xefca7a[_0x2d8205(0x38a)]?String(_0xefca7a[_0x2d8205(0x38a)][_0x2d8205(0x455)+_0x2d8205(0xa3e)+'t']):'-';else{if(_0x220211['fVtPB'](_0x176bee,_0x220211['XGMkF']))_0x304ec7=_0xefca7a&&_0xefca7a[_0x2d8205(0x38a)]?String(_0xefca7a[_0x2d8205(0x38a)][_0x2d8205(0x8c1)+'Count']):'-';else{if(_0x220211[_0x2d8205(0x24d)](_0x176bee,'off\x20t'+_0x2d8205(0xb5f)+'ve\x20ma'+_0x2d8205(0x19f)))_0x304ec7=_0xefca7a&&_0xefca7a['esp']&&_0xefca7a[_0x2d8205(0x38a)][_0x2d8205(0x1d4)+'a']?_0x220211[_0x2d8205(0x45a)](_0x220211['WVsxg'](_0x220211['khPId'](_0xefca7a[_0x2d8205(0x38a)][_0x2d8205(0x1d4)+'a'],'\x20('),_0xefca7a[_0x2d8205(0x38a)][_0x2d8205(0x1d4)+'aFrom']),')'):'-';else{if(_0x176bee===_0x220211[_0x2d8205(0x2c0)])_0x304ec7=_0xefca7a&&_0xefca7a['local']&&_0xefca7a[_0x2d8205(0xb00)][_0x2d8205(0x1cc)]?_0xefca7a[_0x2d8205(0xb00)][_0x2d8205(0x1cc)][_0x2d8205(0x9c9)](function(_0xd12690){var _0x505628=_0x2d8205;return Math[_0x505628(0x5ec)](_0xd12690*(0x1*-0x1427+0x1*0x1295+0x1f6))/(0x8a4+0xc71+-0x14b1);})['join']('\x20\x20'):'-';else{if(_0x220211['OBhbT'](_0x176bee,_0x220211[_0x2d8205(0x28b)]))_0x304ec7=_0xefca7a&&_0xefca7a['local']&&_0xefca7a[_0x2d8205(0xb00)][_0x2d8205(0x3f3)]?_0xefca7a['local']['eye']['map'](function(_0x58330e){var _0x114f7d=_0x2d8205;return _0x1383bf[_0x114f7d(0x571)](Math[_0x114f7d(0x5ec)](_0x1383bf[_0x114f7d(0x559)](_0x58330e,0x7e8+-0x26fe+-0x2*-0xfbd)),0x1*0x13d5+-0x1b1b+0x7aa);})['join']('\x20\x20'):'-';else{var _0x3e28b5=_0x176bee['split']('+');_0x304ec7=_0x3046b0(_0xefca7a,_0x3e28b5[-0x473*-0x1+0x1*0x312+-0x785][_0x2d8205(0x19e)+'Of'](_0x220211[_0x2d8205(0x5be)])===0x12e2+0x1e72+-0x3154?_0x220211['HhXhx']:_0x2d8205(0x37b)+_0x2d8205(0x8c2)+_0x2d8205(0x5da),parseInt(_0x3e28b5[0x1c05+-0x78b*0x3+-0x1*0x563],0x17*-0xd9+-0x1d49+0x4*0xc36));}}}}}}}}if(_0x304ec7!==_0x58a545[_0x500e76][_0x2d8205(0x3d4)+_0x2d8205(0x830)+'t'])_0x58a545[_0x500e76]['textC'+_0x2d8205(0x830)+'t']=_0x304ec7;}}catch(_0x1fc023){}}}function _0x7e4e7f(){var _0x569e27=_0x4b6c3b,_0x468603=_0x51bfd8[_0x569e27(0x37b)+'ntrol'+_0x569e27(0x5da)];if(!_0x468603||!_0x468603[_0x569e27(0x47b)])return null;var _0x4c3a57=_0x220211[_0x569e27(0x251)](_0x5f44a9,_0x468603['ptr'],0x1*-0x1caf+-0x21de+0x4171,0x10d5+-0xb*0x33b+0x12b7),_0x558f38=_0x220211[_0x569e27(0xb28)](_0x5f44a9,_0x468603[_0x569e27(0x47b)],0x1146+0x1ba7+0x1*-0x2a55,0x1db*-0xe+0x25b7+-0x5dd*0x2);if(!_0x4c3a57)return null;return{'ptr':_0x468603['ptr'],'feet':_0x4c3a57,'eye':_0x558f38,'reach':Math['sqrt'](_0x220211[_0x569e27(0x7ff)](_0x4c3a57[-0xa7e+-0x2550+0x2fce],_0x4c3a57[-0xd*0x1e5+0x2*0x1385+-0xe69])+_0x4c3a57[-0x1*0x563+-0x1*0x82b+0xd90]*_0x4c3a57[0x19e*-0x5+0x1006+-0x7ee]),'pitch':_0x4094a9(_0x220211['ngKwB'](_0x468603['ptr'],-0x49*0x13+-0x24c0+-0x2b97*-0x1),'f32'),'yaw':_0x4094a9(_0x468603[_0x569e27(0x47b)]+(0xd75+-0x581*-0x5+0x5a6*-0x7),_0x220211['ilwPw'])};}function _0x81000f(){var _0xe26bc6=_0x4b6c3b,_0x2f1a9b=_0x220211['UhdxL'](_0x7e4e7f),_0xfa9c0f=[],_0x1fe4af=_0x3e5154[_0xe26bc6(0x7c5)+_0xe26bc6(0x282)+'orkSy'+'nc']||{},_0x41e5a1=Object[_0xe26bc6(0x33a)](_0x1fe4af);for(var _0x3c50bd=0x1239+0x2007+0xc*-0x430;_0x220211[_0xe26bc6(0x956)](_0x3c50bd,_0x41e5a1[_0xe26bc6(0x3f7)+'h'])&&_0x220211[_0xe26bc6(0x1d7)](_0x3c50bd,0x1848+0xbd0+-0x23f8);_0x3c50bd++){var _0x4f0fb4=_0x1fe4af[_0x41e5a1[_0x3c50bd]],_0x52ea3e=_0x5f44a9(_0x4f0fb4['ptr'],-0x1*-0xf7+0xd0c+-0xdcf,0x301*-0x6+-0xb30+-0x1*-0x1d39);if(!_0x52ea3e||_0x52ea3e[-0xd1d*0x1+0x1*0xa6d+0x2b0]===-0x1975+0x13ea+0x58b&&_0x52ea3e[-0x1*-0x144f+0xf1e+-0x236c]===-0xea5+0xdfd+0x7*0x18&&_0x220211[_0xe26bc6(0x7d4)](_0x52ea3e[-0x2e2+0x8*-0x152+0xd74],0x2b*0x65+-0x4f3+-0x2*0x602))continue;var _0x312f01={'ptr':_0x4f0fb4[_0xe26bc6(0x47b)],'x':_0x52ea3e[-0x1197+-0x2549+0x36e*0x10],'y':_0x52ea3e[-0x2*-0xba9+0x1*-0x611+-0x8*0x228],'z':_0x52ea3e[0x4*0x652+0x2668+0x42*-0xf7],'team':_0x4094a9(_0x4f0fb4[_0xe26bc6(0x47b)]+(0x61*0x39+0x13f1+-0x2932),_0x220211['oZbmh']),'localFlag':_0x220211[_0xe26bc6(0xa6f)](_0x4094a9,_0x4f0fb4[_0xe26bc6(0x47b)]+(-0x7f*0x2b+-0xf13+-0xc*-0x313),'i32')};if(_0x2f1a9b){var _0x26f63f=_0x52ea3e[0x21a0+0x1131+-0x32d1]-_0x2f1a9b['feet'][0x9b4+-0x6a3+-0x311],_0x228660=_0x52ea3e[-0x21*-0x76+-0x1e6b*0x1+0xf37]-_0x2f1a9b[_0xe26bc6(0x1cc)][-0x1497+-0x7*0x565+0x14*0x2eb];_0x312f01['d']=Math['sqrt'](_0x220211['YeVgD'](_0x220211[_0xe26bc6(0x7ff)](_0x26f63f,_0x26f63f),_0x228660*_0x228660)),_0x312f01[_0xe26bc6(0x604)+'ng']=Math[_0xe26bc6(0x24a)](_0x26f63f,_0x228660)*(-0x1e8f*0x1+0x124*0x10+-0x1*-0xd03)/Math['PI'];}_0xfa9c0f[_0xe26bc6(0x793)](_0x312f01);}return{'me':_0x2f1a9b,'list':_0xfa9c0f};}var _0x4f80f2=null;function _0x3c3442(){var _0x58e847=_0x4b6c3b;if(_0x4f80f2)return _0x4f80f2;try{var _0x4954f9=('8|1|9'+_0x58e847(0x933)+_0x58e847(0xa5c)+'|5|0')['split']('|'),_0x36372f=-0x18e*0xa+-0x1*0x1549+0x24d5;while(!![]){switch(_0x4954f9[_0x36372f++]){case'0':return _0x4f80f2;case'1':var _0x33b6cb=document[_0x58e847(0x769)+_0x58e847(0x41c)+_0x58e847(0x3ff)](_0x220211[_0x58e847(0xa2d)]);continue;case'2':_0x4f80f2={'el':_0x33b6cb,'cv':_0x33b6cb[_0x58e847(0x797)+_0x58e847(0x2c6)+'tor'](_0x58e847(0x2a7)+'ra-es'+_0x58e847(0x258)),'lg':_0x33b6cb[_0x58e847(0x797)+_0x58e847(0x2c6)+_0x58e847(0x2fc)](_0x220211[_0x58e847(0x9d0)])};continue;case'3':_0x33b6cb[_0x58e847(0x855)][_0x58e847(0x7ef)+'xt']=_0x220211['VwQLQ'](_0x220211[_0x58e847(0x7fa)](_0x220211['JdNbN'],'backg'+_0x58e847(0x5ec)+_0x58e847(0x85f)+_0x58e847(0xa5d)+'2,29,'+_0x58e847(0x8f5)+_0x58e847(0x957)+'r:1px'+'\x20soli'+_0x58e847(0x1e1)+_0x58e847(0x1ac)+_0x58e847(0x84f)+_0x58e847(0x63a)+'4);bo'+_0x58e847(0x3bf)+_0x58e847(0x3ab)+'s:10p'+'x;')+('paddi'+'ng:4p'+'x;fon'+_0x58e847(0x5aa)+'x/1.3'+_0x58e847(0xa3f)+_0x58e847(0xaea)+_0x58e847(0x5cb)+'onsol'+'as,mo'+_0x58e847(0x4c0)+_0x58e847(0x88e)+'lor:#'+_0x58e847(0xafa)+'9;'),_0x220211[_0x58e847(0x23d)]);continue;case'4':var _0x3568a8={'cv':{'getContext':function(){return null;}},'el':_0x33b6cb};continue;case'5':if(!_0x4f80f2['cv']||!_0x4f80f2['cv']['getCo'+'ntext'])_0x4f80f2=_0x3568a8;continue;case'6':_0x33b6cb['inner'+_0x58e847(0x936)]=_0x220211[_0x58e847(0x328)](_0x220211['lqBrT'],_0x220211['xXcmu']);continue;case'7':document['body'][_0x58e847(0xac1)+_0x58e847(0x249)+'d'](_0x33b6cb);continue;case'8':if(!document['body']||!document[_0x58e847(0x60e)][_0x58e847(0xac1)+'dChil'+'d'])return null;continue;case'9':_0x33b6cb['id']=_0x58e847(0x621)+_0x58e847(0x7e0);continue;}break;}}catch(_0x389d67){return null;}}var _0x4518e2=null;function _0x58a8e3(){var _0x55207b=_0x4b6c3b,_0x7a65fc={'lSsRG':_0x55207b(0x352)};if(_0x220211[_0x55207b(0x8cb)]===_0x55207b(0xb3c)){if(_0x37cb4a[_0x438b32][_0x55207b(0x65e)+'rs'][_0x55207b(0x3f7)+'h']>=_0x55a8d9)_0x3bdfab[_0x55207b(0x793)](_0x431c2a[_0x4a1af6]);}else{if(_0x4518e2)return _0x4518e2;try{if(!document['body']||!document[_0x55207b(0x60e)]['appen'+'dChil'+'d'])return null;var _0x5a03f8=document[_0x55207b(0x769)+_0x55207b(0x41c)+_0x55207b(0x3ff)](_0x220211['NudFy']);return _0x5a03f8['id']=_0x220211['kAJsM'],_0x5a03f8['style']['cssTe'+'xt']=_0x220211['xiHKh'],document[_0x55207b(0x60e)]['appen'+_0x55207b(0x249)+'d'](_0x5a03f8),_0x4518e2={'cv':_0x5a03f8},_0x4518e2;}catch(_0x420677){if(_0x220211['niPhD'](_0x220211['gHuBn'],_0x55207b(0xa32)))return null;else{var _0x3a8a7d=_0x2c9689[_0x189e60][_0x55207b(0x3d6)+'s'][_0x55207b(0x8eb)](',')+_0x55207b(0x577)+(_0x3414d6[_0x2cf98e][_0x55207b(0x795)+'nType']||_0x7a65fc[_0x55207b(0x2f7)]);_0x1c6277[_0x3a8a7d]=(_0x29f7ca[_0x3a8a7d]||0x261f+-0x9a9*-0x1+-0x2fc8)+(0x2403+0x1bdd+-0xc5*0x53);}}}}function _0x2ed4e4(_0x4bb8c9){var _0x1e4996=_0x4b6c3b,_0x365cf3={'feqhd':_0x1e4996(0x7c8)+'kura]'+_0x1e4996(0xa5b)+'l\x20dis'+_0x1e4996(0x303),'sPYKz':function(_0x28e96b,_0x14687f){return _0x28e96b+_0x14687f;},'MbaYK':'color'+':'};try{var _0x2f1c02=Math['max'](0x1*-0x1ac5+0xe6c+-0x1f*-0x66,window['inner'+_0x1e4996(0x5f4)]||document['docum'+'entEl'+_0x1e4996(0x6e7)]['clien'+_0x1e4996(0x5c1)+'h']||0x74f+0x8d9+-0x2c*0x5e),_0x475eb9=Math['max'](-0x8d*0x5+-0x1075+0x1337,window[_0x1e4996(0x510)+_0x1e4996(0x376)+'t']||document['docum'+_0x1e4996(0x92e)+_0x1e4996(0x6e7)][_0x1e4996(0x6f8)+_0x1e4996(0x69b)+'ht']||-0x1*0x50c+-0x3*0x151+-0x7*-0x149);if(_0x220211[_0x1e4996(0xa59)](_0x4bb8c9['cv']['width'],_0x2f1c02)||_0x4bb8c9['cv']['heigh'+'t']!==_0x475eb9){if(_0x1e4996(0x5c2)!=='OZLOb')_0x4bb8c9['cv'][_0x1e4996(0x541)]=_0x2f1c02,_0x4bb8c9['cv']['heigh'+'t']=_0x475eb9;else return _0x507ac4['datas'+'et'][_0x1e4996(0x845)]='1',_0x5c8d5e['api']=_0x229209,_0x5a5d6f[_0x1e4996(0xad5)](_0x365cf3['feqhd'],_0x365cf3['sPYKz'](_0x365cf3[_0x1e4996(0x91b)],_0x4e6eee),_0x1ac364),_0x4d7625;}return{'w':_0x2f1c02,'h':_0x475eb9};}catch(_0x1339d7){return _0x1e4996(0x95d)===_0x1e4996(0x95d)?{'w':0x0,'h':0x0}:_0x3df0ce['round'](_0x220211['vDaQk'](_0x3b22cd,0x386*0x8+0x51b*-0x4+-0x760))/(0x2088+0x22bb+-0x1*0x42df);}}function _0x1fd2a0(_0x3d95cf){var _0x596ad6=_0x4b6c3b,_0x24ad24=_0x4518e2;if(!_0x24ad24)return;var _0x2bf869=_0x24ad24['cv'][_0x596ad6(0xb22)+_0x596ad6(0x372)]&&_0x24ad24['cv']['getCo'+_0x596ad6(0x372)]('2d');if(!_0x2bf869)return;var _0x330df6=_0x2ed4e4(_0x24ad24);_0x2bf869['clear'+_0x596ad6(0x3ac)](-0x1d13+0x1a61+0x2b2,-0x62*-0x10+0xfa*0x11+0x2*-0xb5d,_0x330df6['w'],_0x330df6['h']);if(!_0x5623eb[_0x596ad6(0x632)]||!_0x3d95cf||!_0x3d95cf['me'])return;var _0x571401=_0x3d95cf['me'],_0x5f27d9=null,_0x458429=_0x3e5154[_0x596ad6(0x7c5)+'nNetw'+_0x596ad6(0x664)+'nc']||{},_0xe09c0f=Object[_0x596ad6(0x33a)](_0x458429);for(var _0x3b2caa=-0x1ca3+0x2c*-0x1f+0x21f7;_0x3b2caa<_0xe09c0f['lengt'+'h'];_0x3b2caa++){var _0x2bab70=_0x5f44a9(_0x458429[_0xe09c0f[_0x3b2caa]][_0x596ad6(0x47b)],0x182d+-0x37f+-0x147a,0x1183+-0x23*0x107+0x1275);if(_0x2bab70&&_0x2bab70[-0x665*-0x4+0x2*0xb51+-0x3036]===-0x9b0+-0x1b00+0x24b0&&_0x220211['ynvUK'](_0x2bab70[-0x223*-0xb+-0x1*0x19fd+0xd*0x31],-0x1f20+0x96d*0x2+0xc46)&&_0x2bab70[-0x1fdd+-0x1*-0x1b7c+0x463]===0x1*-0xb59+-0x1caa*0x1+0x2803){_0x5f27d9=_0x4094a9(_0x220211[_0x596ad6(0x256)](_0x458429[_0xe09c0f[_0x3b2caa]][_0x596ad6(0x47b)],-0x11df+-0x13*0x7f+0x1ba4),_0x220211[_0x596ad6(0x796)]);break;}}for(var _0x527500=0x1c23+0x1cd5+-0xe3e*0x4;_0x220211[_0x596ad6(0x992)](_0x527500,_0x3d95cf['list'][_0x596ad6(0x3f7)+'h']);_0x527500++){var _0x4afd7d=_0x3d95cf[_0x596ad6(0x381)][_0x527500],_0x1b7392=_0x220211['SXFXK'](_0x5f27d9,null)&&_0x4afd7d[_0x596ad6(0x8e7)]===_0x5f27d9,_0x5e3140=_0x220211['qXUlv'](_0x4d99ce,_0x571401['eye'],[_0x4afd7d['x'],_0x220211['fbZDi'](_0x4afd7d['y'],0x52c*0x6+0x266b+-0x4572*0x1),_0x4afd7d['z']],_0x330df6['w'],_0x330df6['h']),_0x2a7263=_0x220211['qXUlv'](_0x4d99ce,_0x571401[_0x596ad6(0x3f3)],[_0x4afd7d['x'],_0x220211['BWcln'](_0x4afd7d['y'],0x2*0x608+-0x170c+0xafc+0.8),_0x4afd7d['z']],_0x330df6['w'],_0x330df6['h']);if(!_0x5e3140||!_0x2a7263)continue;var _0x1253b4=Math[_0x596ad6(0x33f)](_0x5e3140['x'],_0x2a7263['x']),_0x1e7f5e=Math[_0x596ad6(0xb3f)](_0x5e3140['x'],_0x2a7263['x']),_0x2f3207=Math['min'](_0x5e3140['y'],_0x2a7263['y']),_0x5a5725=Math[_0x596ad6(0xb3f)](_0x5e3140['y'],_0x2a7263['y']),_0x387e9e=Math[_0x596ad6(0xb3f)](-0x11c5+-0x1*0x19a+0x1362,Math['min'](-0x11cc+-0x14a*-0xc+-0x148*-0x2,_0x1e7f5e-_0x1253b4)),_0x15ca28=Math['max'](-0x973+0x4e8+0x491,Math[_0x596ad6(0x33f)](-0x1d19+-0x6*0x599+0x3f3b*0x1,_0x5a5725-_0x2f3207)),_0x12bcd8=_0x220211['KdFMh'](_0x1253b4,_0x1e7f5e)/(0x25d9*0x1+-0x2*0x6aa+0x4e7*-0x5),_0x33e6ab=_0x220211[_0x596ad6(0xada)](_0x220211['FuFum'](_0x2f3207,_0x5a5725),0x3b3*-0x3+-0x1513+-0xaba*-0x3);_0x2bf869[_0x596ad6(0x88b)+'eStyl'+'e']=_0x1b7392?_0x596ad6(0x86b)+_0x596ad6(0x4de)+_0x596ad6(0x22e)+',.9)':_0x220211['nTfhG'],_0x2bf869[_0x596ad6(0x8cc)+_0x596ad6(0x3b2)]=_0x1b7392?-0x2313+-0x101*-0x1f+0x3f5*0x1:0xf1*0x20+-0x1878+-0x5a6,_0x2bf869[_0x596ad6(0x88b)+'eRect'](_0x12bcd8-_0x220211[_0x596ad6(0x3ec)](_0x387e9e,-0xc6a+0x810+-0x24*-0x1f),_0x33e6ab-_0x220211['LbHzT'](_0x15ca28,-0x154+0xddf+-0xc89),_0x387e9e,_0x15ca28),!_0x1b7392&&(_0x2bf869['fillS'+'tyle']=_0x596ad6(0x86b)+_0x596ad6(0x349)+'10,11'+'6,.95'+')',_0x2bf869[_0x596ad6(0x464)]='10px\x20'+'ui-mo'+_0x596ad6(0x4c0)+_0x596ad6(0x6f5)+_0x596ad6(0xa4c)+'s,mon'+_0x596ad6(0x982)+'e',_0x2bf869['fillT'+_0x596ad6(0x710)](Math[_0x596ad6(0x5ec)](_0x4afd7d['d']||0x9e*0x15+-0xd6*0x25+-0x73*-0x28)+'m',_0x220211[_0x596ad6(0xa38)](_0x12bcd8,_0x387e9e/(0x1*-0x1fc7+0x684+0x1945)),_0x33e6ab-_0x15ca28/(-0x1*-0x101+-0xd6*-0xb+-0x1*0xa31)-(-0x48f+-0xf38+0x13ca)));}}function _0x5d89f0(){var _0x2bf4b9=_0x4b6c3b;if(_0x220211[_0x2bf4b9(0x670)]===_0x220211['FvOsY']){var _0x511562=_0x220211['wSlxm'](_0x3c3442);if(!_0x511562||!_0x511562['cv'])return;try{var _0x47ab9c=_0x511562['cv'][_0x2bf4b9(0xb22)+'ntext']&&_0x511562['cv'][_0x2bf4b9(0xb22)+'ntext']('2d');if(!_0x47ab9c)return;var _0x3858c2=_0x511562['cv'][_0x2bf4b9(0x541)],_0x3554aa=_0x220211[_0x2bf4b9(0x367)](_0x3858c2,-0xbe8+0xe28+0x2*-0x11f),_0x1e1c59=_0x220211[_0x2bf4b9(0x6da)](_0x81000f),_0x29670c=_0x1e1c59['me'];_0x47ab9c[_0x2bf4b9(0x1eb)+'Rect'](0x1a77+0xce*0x2a+-0x3c43,0x56*-0x67+-0x16*-0x55+0x1b4c,_0x3858c2,_0x3858c2),_0x47ab9c['strok'+_0x2bf4b9(0xb5c)+'e']=_0x2bf4b9(0x86b)+_0x2bf4b9(0x349)+_0x2bf4b9(0x370)+'7,.16'+')',_0x47ab9c['lineW'+_0x2bf4b9(0x3b2)]=-0x1662+-0x5ec+0x1c4f;for(var _0x2a633e=-0x13d3+-0x1bfe+0x2fd2;_0x2a633e<=-0x16d9+0x1ab8+-0x3dc;_0x2a633e++){_0x47ab9c[_0x2bf4b9(0x353)+'Path'](),_0x47ab9c[_0x2bf4b9(0x424)](_0x3554aa,_0x3554aa,_0x220211['rZPoL'](_0x3554aa,0x1*-0x944+0x24e+0x1*0x6fa)*_0x2a633e/(0x23a*-0x2+-0x142f*0x1+0x18a6),0x1b46*0x1+0x4*-0x5ad+0xd*-0x5a,_0x220211[_0x2bf4b9(0xacc)](Math['PI'],0x1154+0x2*-0x12ae+0x140a)),_0x47ab9c['strok'+'e']();}_0x47ab9c['begin'+_0x2bf4b9(0x291)](),_0x47ab9c['moveT'+'o'](0x1*0x16a+0xb*0x189+0x1*-0x1249,_0x3554aa),_0x47ab9c[_0x2bf4b9(0xa84)+'o'](_0x3858c2-(0x1acb*-0x1+-0x2029+0x4*0xebe),_0x3554aa),_0x47ab9c['moveT'+'o'](_0x3554aa,-0x2208+0xb3*-0x23+0x3a85),_0x47ab9c['lineT'+'o'](_0x3554aa,_0x3858c2-(-0xbd9*0x1+0x6d*0x14+0x359)),_0x47ab9c['strok'+'e']();if(!_0x29670c){if(_0x220211[_0x2bf4b9(0x87b)]!==_0x2bf4b9(0x9fd)){if(_0x511562['lg'])_0x511562['lg']['textC'+'onten'+'t']='';return;}else _0x12c9b2=_0x12696d(_0x2bf4b9(0x92a)+'on',![]),_0x25fcf3[_0x2bf4b9(0x793)](_0x38b775);}var _0x2fa513=_0x220211['ispTQ'](_0x3554aa-(-0x3b9*-0x5+-0x4*-0x3f5+-0x226b),_0x5623eb[_0x2bf4b9(0x883)]),_0x5d8496=null,_0x24bdad=_0x3e5154['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x51658e=Object[_0x2bf4b9(0x33a)](_0x24bdad);for(var _0x5d89af=0x129d+0x2*0x5c9+-0x1*0x1e2f;_0x5d89af<_0x51658e['lengt'+'h'];_0x5d89af++){var _0x2fc39e=_0x5f44a9(_0x24bdad[_0x51658e[_0x5d89af]]['ptr'],-0x23*-0x101+-0x453+-0x1e9c,0x11*0x39+0x46c*0x6+-0x50d*0x6);if(_0x2fc39e&&_0x220211[_0x2bf4b9(0xb3e)](_0x2fc39e[-0xed5*0x2+0xfd2+0xdd8],0x5*0x48b+-0x2eb+-0x13cc)&&_0x2fc39e[0xceb+0x1e63+-0x2b4d]===-0x2441+-0x7ce+0x2c0f&&_0x220211[_0x2bf4b9(0x317)](_0x2fc39e[0xa37*0x2+0x8e0+0x2ee*-0xa],0x89+-0x1*-0x2364+-0x23ed)){if('jPkUr'!==_0x220211['JXQTs'])return _0x267570[_0x2bf4b9(0x7aa)+'d']++,_0x2bab6e['lastE'+_0x2bf4b9(0x4ab)]=_0x286db7[_0x2bf4b9(0x973)+'rror']||_0x220211['LaEgb'](_0x468207,_0x1e6aed&&_0x5d689c[_0x2bf4b9(0x4b5)+'ge']||_0x11b161)[_0x2bf4b9(0x689)](0x139f+-0x10f*0x7+-0xc36,-0x2203*0x1+-0x270d+-0xd*-0x5a8),_0x45581b;else{_0x5d8496=_0x4094a9(_0x220211[_0x2bf4b9(0x382)](_0x24bdad[_0x51658e[_0x5d89af]][_0x2bf4b9(0x47b)],0x54a*0x4+0x92e+-0x15d*0x16),_0x220211[_0x2bf4b9(0x796)]);break;}}}var _0x2063a1=0x52*0x43+0x1ef6+-0x2*0x1a36;for(var _0x12a53a=0x8*-0xd+0x26f1+-0x2689;_0x12a53a<_0x1e1c59[_0x2bf4b9(0x381)][_0x2bf4b9(0x3f7)+'h'];_0x12a53a++){var _0x209277=_0x1e1c59[_0x2bf4b9(0x381)][_0x12a53a],_0xff87e7=_0x220211[_0x2bf4b9(0xa53)](_0x209277['x'],_0x29670c[_0x2bf4b9(0x1cc)][0x1*-0x2665+0x149+0x251c])*_0x2fa513,_0xa0113a=_0x220211['WCLhQ'](_0x209277['z']-_0x29670c[_0x2bf4b9(0x1cc)][-0x22d6+-0x43c*-0x3+0x1624],_0x2fa513),_0xad96e9=Math[_0x2bf4b9(0x525)](_0x220211[_0x2bf4b9(0x8c3)](_0xff87e7,_0xff87e7)+_0x220211['pqwCT'](_0xa0113a,_0xa0113a)),_0x5b6e29=_0x3554aa,_0xcaa45b=_0x3554aa;_0xad96e9>_0x220211['TUJpH'](_0x3554aa,-0x1720+-0x1*-0x1173+-0x1*-0x5b3)?(_0x5b6e29=_0x3554aa+_0xff87e7/_0xad96e9*(_0x3554aa-(0x16a*0x1a+0x1e1+-0x269f)),_0xcaa45b=_0x220211[_0x2bf4b9(0x230)](_0x3554aa,_0xa0113a/_0xad96e9*(_0x3554aa-(0x25f8+0x3b*-0xa6+0x50)))):(_0x5b6e29=_0x3554aa+_0xff87e7,_0xcaa45b=_0x3554aa+_0xa0113a);var _0x5b3e02=_0x220211['UrTMr'](_0x5d8496,null)&&_0x209277[_0x2bf4b9(0x8e7)]===_0x5d8496;_0x47ab9c['fillS'+'tyle']=_0x5b3e02?_0x220211['ELgUS']:'#ff6e'+'74',_0x47ab9c[_0x2bf4b9(0x353)+_0x2bf4b9(0x291)](),_0x47ab9c[_0x2bf4b9(0x424)](_0x5b6e29,_0xcaa45b,_0x5b3e02?-0x2119+-0x18c8+0x39e3:0xe*-0x57+0x1d*0x79+-0x8f0+0.20000000000000018,0x1*-0x21c7+0x1*0x1eef+-0xd*-0x38,_0x220211['UIPTv'](Math['PI'],0x15*0x14f+0x9af*-0x3+0x4*0x65)),_0x47ab9c['fill'](),_0x2063a1++;}_0x47ab9c[_0x2bf4b9(0x87f)+_0x2bf4b9(0x20f)]=_0x220211[_0x2bf4b9(0x6f6)],_0x47ab9c[_0x2bf4b9(0x353)+'Path'](),_0x47ab9c[_0x2bf4b9(0x424)](_0x3554aa,_0x3554aa,-0x1f4b*-0x1+0x1993*-0x1+-0x5b5,0x1*0x23c3+0x6*-0x1a5+-0x1*0x19e5,_0x220211[_0x2bf4b9(0x50d)](Math['PI'],0x4e*0x7a+0x1e35+-0x435f)),_0x47ab9c['fill']();if(_0x511562['lg']){if(_0x2bf4b9(0x5d0)===_0x220211[_0x2bf4b9(0x3fd)])_0x511562['lg']['textC'+_0x2bf4b9(0x830)+'t']=_0x220211[_0x2bf4b9(0x76a)](_0x220211['qtWht']('esp\x20',_0x2063a1)+_0x220211['ztRgS']+Math[_0x2bf4b9(0x5ec)](_0x5623eb[_0x2bf4b9(0x883)])+'m'+(_0x5623eb[_0x2bf4b9(0x632)]?_0x2bf4b9(0x375)+'v\x20'+Math['round'](_0x5791d0[_0x2bf4b9(0xb14)])+'°':''),_0x5d8496!==null?_0x220211['sGJPt'](_0x220211['EOyfF'],_0x5d8496):'');else{var _0x30377b=_0x2273c9[_0x2bf4b9(0x315)];if(_0x30377b&&_0x220211['LZvSk'](_0x30377b['__sak'+_0x2bf4b9(0x40b)],_0x461e31)&&_0x30377b['kind']===_0x220211['GFBYu'])_0x220211['ihUeh'](_0x29c2c9,_0x30377b['cmd'],_0x30377b['arg']);}}}catch(_0x36cbd9){}}else{var _0x1dea47=_0x35d1c9();_0x1d27b6['value']=_0x220211[_0x2bf4b9(0x88c)](_0x15ae3a,_0x1dea47),_0x476cfb['textC'+'onten'+'t']=(_0x18d949<-0x259b+0x49*0x86+-0x9a?_0x1dea47['toFix'+'ed'](0x3*0xed+0x3*0x3c1+-0xe09):_0x220211['LZdcX'](_0x47bfcc,_0x18034f[_0x2bf4b9(0x5ec)](_0x1dea47)))+(_0x496528[_0x2bf4b9(0x583)+'et']['unit']||'');var _0x272896=_0x220211[_0x2bf4b9(0xa6e)](_0x1dea47,_0x2c2149)/_0x220211['fbZDi'](_0x162b1f,_0x472df6)*(0x66*0xb+-0x1*-0xf01+-0x655*0x3);_0x2d34ac[_0x2bf4b9(0x855)]['setPr'+_0x2bf4b9(0x52a)+'y'](_0x220211['gVkXq'],_0x220211[_0x2bf4b9(0x1f8)](_0x272896,'%'));}}function _0x898e61(){var _0x1bb978=_0x4b6c3b,_0x485693=_0x3e5154[_0x1bb978(0x7c5)+_0x1bb978(0x282)+_0x1bb978(0x664)+'nc']||{};if(!Object[_0x1bb978(0x33a)](_0x485693)[_0x1bb978(0x3f7)+'h'])return![];return!!_0x7e4e7f();}function _0x55a220(_0x378c70){var _0x5822f6=_0x4b6c3b;try{var _0x1cf319=_0x4f80f2;if(_0x1cf319&&_0x1cf319['el'])_0x1cf319['el'][_0x5822f6(0x855)]['displ'+'ay']=_0x378c70?'':_0x5822f6(0xae5);var _0x537cf8=_0x4518e2;if(_0x537cf8&&_0x537cf8['cv'])_0x537cf8['cv']['style'][_0x5822f6(0xb12)+'ay']=_0x378c70?'':'none';}catch(_0xfa3af){}}function _0x446d98(){var _0x2706d5=_0x4b6c3b,_0x11eb3d={'PTcOn':_0x2706d5(0x9a0)+_0x2706d5(0xab5)+'ame'};if(!_0x5623eb['on']||!_0x898e61()){_0x220211[_0x2706d5(0x65f)](_0x55a220,![]),setTimeout(_0x446d98,0x191b*0x1+-0x250e+0xd1f);return;}_0x55a220(!![]),_0x3c3442();if(_0x5623eb[_0x2706d5(0x632)])_0x58a8e3();var _0x19666f=null;try{if(_0x220211[_0x2706d5(0x8e2)](_0x220211[_0x2706d5(0xa94)],_0x2706d5(0x8b6)))_0x19666f=_0x81000f();else{var _0x551b6b=_0x439d45['Unity'+_0x2706d5(0xa6a)+'dkit']&&_0x3bce76['Unity'+_0x2706d5(0xa6a)+'dkit']['Runti'+'me'];if(_0x551b6b&&typeof _0x551b6b['resol'+'veGam'+'e']===_0x2706d5(0x971)+_0x2706d5(0x347)){var _0x160e63=_0x551b6b[_0x2706d5(0x7a9)+'veGam'+'e']();if(_0x160e63)return _0x2feae9[_0x2706d5(0x5d4)+'e']=_0x2706d5(0x9a0)+_0x2706d5(0x62d)+_0x2706d5(0x9f5)+_0x2706d5(0x4ec)+')',_0x160e63;}if(_0x551b6b&&_0x551b6b['_game'])return _0x5f2584[_0x2706d5(0x5d4)+'e']=_0x11eb3d['PTcOn'],_0x551b6b;}}catch(_0x3ea19f){}try{_0x220211[_0x2706d5(0x29f)](_0x5d89f0);}catch(_0x18598a){}try{_0x1fd2a0(_0x19666f);}catch(_0x1e5bd1){}_0x220211['ddqfb'](setTimeout,_0x446d98,0x14d6+0xc7d+-0x2121);}function _0x4bf228(){var _0x3aab8f=_0x4b6c3b,_0x53318a={'ZBmKA':'boole'+'an','CkLwJ':function(_0x4c8ee4,_0x45c7c2){return _0x4c8ee4+_0x45c7c2;},'iyJeo':_0x220211['FzRcI'],'AGHEK':function(_0x80fac9){return _0x80fac9();},'ERmNa':_0x220211[_0x3aab8f(0x730)]},_0x397176=window['Unity'+'WebMo'+_0x3aab8f(0x8ab)]&&window['Unity'+'WebMo'+_0x3aab8f(0x8ab)]['Runti'+'me']||null,_0x5331b5=_0x397176&&_0x397176[_0x3aab8f(0x46a)+_0x3aab8f(0x36c)+'ext'],_0x5bb6c8=_0x5331b5&&_0x5331b5[_0x3aab8f(0x6cb)+'tData'],_0xa284d={},_0x2967bd=[];for(var _0x1a942d in _0x51bfd8){if(_0x220211[_0x3aab8f(0x806)](_0x3aab8f(0x406),_0x220211['NVNek'])){_0xa284d[_0x1a942d]='0x'+_0x51bfd8[_0x1a942d]['ptr'][_0x3aab8f(0x1f5)+'ing'](-0x1*0xbb+0x1*-0x211+0xf4*0x3);if(_0x51bfd8[_0x1a942d][_0x3aab8f(0x6c2)+'ced'])_0x2967bd['push'](_0x1a942d);}else _0x260eec[_0x3aab8f(0xad5)](_0x3aab8f(0x7c8)+'kura]'+_0x3aab8f(0xa5b)+'l\x20upd'+_0x3aab8f(0xaaa)+'ailed',_0x220211['VwQLQ']('color'+':',_0x2be75b),_0x3edcdb);}var _0xd12e89={};for(var _0x3949ea in _0x51bfd8)_0xd12e89[_0x3949ea]=_0x220211['ignqg'](_0x153ec1,_0x51bfd8[_0x3949ea]['ptr']);var _0x504286={},_0x3e6db3=null;try{_0x504286=_0x220211['AGWwi'](_0x2393c1);}catch(_0xa88aab){_0x3e6db3=_0x220211[_0x3aab8f(0xa9b)](String,_0xa88aab&&_0xa88aab[_0x3aab8f(0x4b5)+'ge']||_0xa88aab);}var _0x493441={'version':_0x596a6f,'when':new Date()[_0x3aab8f(0x41d)+_0x3aab8f(0x5a2)+'g'](),'elapsedMs':Date[_0x3aab8f(0x5a5)]()-_0x14db79,'frame':location['href'][_0x3aab8f(0x689)](0x1fb2*0x1+-0x469+0x575*-0x5,0x2*0x1056+-0x1c*-0x128+-0x4094),'host':_0x3a4971,'frameRole':_0x501c58,'uwmk':!!_0x397176,'il2CppContext':!!_0x5331b5,'typeCount':_0x5bb6c8?Object['keys'](_0x5bb6c8)[_0x3aab8f(0x3f7)+'h']:null,'arm':_0x291d7c,'assemblies':_0x39b607,'hooksTotal':_0x48a15f['lengt'+'h'],'hooksApplied':_0xe25d46(),'hooksResolved':_0x4ad977(),'hooksRegisteredAtArm':_0x291d7c[_0x3aab8f(0x30c)+_0x3aab8f(0x64e)+_0x3aab8f(0x978)]||-0x1ad7*0x1+0x1d7d+-0x2a6,'hookErrors':_0x59658a[_0x3aab8f(0x689)](0xf73+-0x1f1b+0xfa8,0x41c*-0x9+-0x1de9+-0x3*-0x164f),'instances':_0xa284d,'classNames':_0xd12e89,'instancesReplaced':_0x2967bd,'hookFireProof':_0x1feade,'survey':_0x504286,'actkKeys':_0x4659b4,'surveyRows':Object[_0x3aab8f(0x33a)](_0x504286)['reduc'+'e'](function(_0x48e1fe,_0xb1dd11){var _0xc7b59=_0x3aab8f;return _0x220211[_0xc7b59(0x35c)](_0x48e1fe,_0x504286[_0xb1dd11][_0xc7b59(0x3f7)+'h']);},0x1*0x15cd+-0x679*0x3+-0x262),'reads':{'ok':_0x4b0787['ok'],'failed':_0x4b0787['faile'+'d'],'lastError':_0x4b0787[_0x3aab8f(0x973)+_0x3aab8f(0x4ab)],'source':_0x4b0787[_0x3aab8f(0x5d4)+'e']},'identity':_0x4ea42c(),'globals':_0x3046c6(),'wasmMemory':{'captured':!!_0x59950b,'atMs':_0x5bb996,'bytes':(function(){var _0x545a7a=_0x3aab8f,_0x44aea0={'fjkTq':_0x53318a[_0x545a7a(0x846)],'TiiSJ':function(_0x188a15,_0x3e7093){return _0x188a15===_0x3e7093;},'IjXyt':_0x545a7a(0x8e9)+'r'};try{if(_0x545a7a(0x837)==='CDJcH'){_0x26e565(_0x2440d1&&typeof _0x49bc47['on']===_0x44aea0[_0x545a7a(0x3b8)]?_0x26b8ed['on']:_0x736107['on'],_0x46447f&&_0x44aea0[_0x545a7a(0x6a5)](typeof _0x197e35[_0x545a7a(0x1e9)+'r'],_0x44aea0[_0x545a7a(0xac9)])?_0x3f39ce[_0x545a7a(0x1e9)+'r']:_0x5890f4['facto'+'r']);return;}else return _0x59950b&&_0x59950b['buffe'+'r']?_0x59950b[_0x545a7a(0x1c2)+'r'][_0x545a7a(0xae9)+'ength']:0x15f1+0x1cf0+-0x5*0xa2d;}catch(_0x46799b){return 0xba6+-0x6d*0x18+0xb7*-0x2;}}()),'exportKeys':_0x53629c},'diff':_0x609f51[_0x3aab8f(0x689)](0x5*-0x2c3+-0xba0+0x196f,-0x75*0x32+0x14*-0x15b+-0x2*-0x190f),'speed':{'on':_0x11986b['on'],'factor':_0x11986b['facto'+'r'],'writes':_0x1bad6a,'scaled':_0x574ae3['slice'](-0x1787*-0x1+0x6f8+-0x1e7f,-0x4df*-0x4+0x1*-0x1d27+0x9bb),'skipped':_0x5595d4[_0x3aab8f(0x689)](-0x1*0x19b5+0x4*0x464+0x825,-0x4*-0x13+0x1504+-0x1540)},'esp':_0x220211[_0x3aab8f(0x4fb)](_0x2e9680),'view':_0x430306(),'fov':_0x5791d0['fov'],'espView':{'on':_0x5623eb['on'],'boxes':_0x5623eb[_0x3aab8f(0x632)],'span':_0x5623eb['span']},'local':(function(){var _0x77a6b4=_0x3aab8f,_0x1e3689=_0x7e4e7f();if(!_0x1e3689)return null;return{'ptr':_0x53318a[_0x77a6b4(0x6dd)]('0x',_0x1e3689[_0x77a6b4(0x47b)][_0x77a6b4(0x1f5)+'ing'](0x3b5*-0x1+-0x1*-0x1af+-0x6*-0x59)),'feet':_0x1e3689['feet'],'eye':_0x1e3689[_0x77a6b4(0x3f3)],'pitch':_0x1e3689[_0x77a6b4(0x73a)],'yaw':_0x1e3689[_0x77a6b4(0xa1a)],'reach':_0x1e3689['reach']};}()),'uwmkLog':_0x48d7c5['slice'](0x642+0x17*-0x5c+0x202,-0x8*-0x1c+0x123a+-0x1306),'warnings':[]};if(_0x3e6db3)_0x493441[_0x3aab8f(0xaca)+_0x3aab8f(0x3ba)][_0x3aab8f(0x793)]('surve'+_0x3aab8f(0x962)+_0x3aab8f(0x630)+_0x3e6db3);if(_0x291d7c['error'])_0x493441[_0x3aab8f(0xaca)+'ngs']['push'](_0x3aab8f(0xa95)+'armin'+_0x3aab8f(0x519)+_0x3aab8f(0x630)+_0x291d7c[_0x3aab8f(0x517)]);if(_0x220211['FAKIq'](_0x493441[_0x3aab8f(0x5ab)+'yRows'],-0x1883+-0x1349*-0x2+-0xe0f)&&Object['keys'](_0x493441[_0x3aab8f(0x930)+_0x3aab8f(0x2c5)])['lengt'+'h']>0x247f+-0x1*0x2479+-0x6){if(_0x3aab8f(0xb13)===_0x220211[_0x3aab8f(0xb5e)]){var _0x5e1b06=_0x53318a[_0x3aab8f(0x9f6)][_0x3aab8f(0xaa6)]('|'),_0x314f0a=-0xda1+-0x14b1*0x1+0x2252;while(!![]){switch(_0x5e1b06[_0x314f0a++]){case'0':_0x3d4ca6['sync']=_0x77e60d;continue;case'1':_0x15ab28[_0x3aab8f(0x8a8)]['push'](_0x77e60d);continue;case'2':_0x3d4ca6[_0x3aab8f(0x226)]='butto'+'n';continue;case'3':var _0x77e60d=function(){var _0x33e6a0=_0x3aab8f;_0x3d4ca6['setAt'+_0x33e6a0(0x807)+'te']('aria-'+_0x33e6a0(0x82c)+'ed',_0x3b0aef[_0x33e6a0(0x82d)](_0x49369c)?_0x3b0aef[_0x33e6a0(0x627)]:_0x33e6a0(0xa8d));};continue;case'4':var _0x3d4ca6=_0x4076c0(_0x3aab8f(0xb54)+'n','sk-sw'+'itch');continue;case'5':_0x77e60d();continue;case'6':_0x3d4ca6[_0x3aab8f(0x438)+'ck']=function(){_0x236b96(!_0x3b0aef['BnXlf'](_0x6c3a6e)),_0x3b0aef['BnXlf'](_0x77e60d);};continue;case'7':var _0x3b0aef={'BnXlf':function(_0x342ddb){return _0x53318a['AGHEK'](_0x342ddb);},'zBXDZ':_0x53318a[_0x3aab8f(0x379)]};continue;case'8':return _0x3d4ca6;}break;}}else _0x493441['warni'+'ngs']['push'](_0x220211[_0x3aab8f(0x9ae)](_0x220211[_0x3aab8f(0x218)](_0x220211[_0x3aab8f(0x227)],Object[_0x3aab8f(0x33a)](_0x493441['insta'+_0x3aab8f(0x2c5)])[_0x3aab8f(0x3f7)+'h']),_0x220211[_0x3aab8f(0x1d3)])+(_0x4b0787[_0x3aab8f(0x973)+_0x3aab8f(0x4ab)]?_0x220211[_0x3aab8f(0xa93)](_0x220211['DhIXG'],_0x4b0787['lastE'+'rror']):_0x3aab8f(0x23e)+'ad\x20fa'+'iled,'+'\x20so\x20e'+'very\x20'+_0x3aab8f(0x7bf)+_0x3aab8f(0x5de)+_0x3aab8f(0x2ed)+'ped\x20b'+_0x3aab8f(0x502)+'e.'));}_0x493441[_0x3aab8f(0x89e)+'ity']&&_0x493441[_0x3aab8f(0x89e)+_0x3aab8f(0x7f3)]['tagMa'+_0x3aab8f(0x528)]===![]&&_0x493441[_0x3aab8f(0xaca)+'ngs'][_0x3aab8f(0x793)](_0x220211[_0x3aab8f(0x8c7)](_0x220211[_0x3aab8f(0xa65)]('ANOTH'+_0x3aab8f(0x48f)+_0x3aab8f(0x58f)+_0x3aab8f(0x2fe)+'OK\x20OV'+'ER\x20wi'+_0x3aab8f(0x3ce)+_0x3aab8f(0xaac)+_0x3aab8f(0xa6a)+_0x3aab8f(0x66b)+'\x20The\x20'+'Runti'+_0x3aab8f(0x535)+_0x3aab8f(0x24f)+'d\x20was'+'\x20',_0x220211[_0x3aab8f(0x762)]),_0x220211['bfmML'])+(_0x3aab8f(0x854)+'a/UWM'+_0x3aab8f(0x72e)+_0x3aab8f(0x260)+_0x3aab8f(0x9a1)+_0x3aab8f(0x405)+_0x3aab8f(0x85c)+'and\x20h'+_0x3aab8f(0xa07)+'eload'+'.'));_0x493441[_0x3aab8f(0x89e)+_0x3aab8f(0x7f3)]&&_0x220211[_0x3aab8f(0x669)](_0x493441[_0x3aab8f(0x89e)+'ity'][_0x3aab8f(0x740)+_0x3aab8f(0x749)+_0x3aab8f(0x866)+_0x3aab8f(0x33c)+_0x3aab8f(0xafb)],![])&&_0x493441[_0x3aab8f(0xaca)+_0x3aab8f(0x3ba)][_0x3aab8f(0x793)]('plugi'+_0x3aab8f(0x1e4)+_0x3aab8f(0x259)+_0x3aab8f(0xa0f)+_0x3aab8f(0x6ff)+'ndow.'+_0x3aab8f(0xaac)+'WebMo'+'dkit.'+_0x3aab8f(0x9a0)+'me\x20-\x20'+'the\x20p'+'lugin'+'\x20was\x20'+'built'+'\x20'+_0x220211[_0x3aab8f(0x7b5)]);if(_0x493441[_0x3aab8f(0x38a)]&&_0x493441[_0x3aab8f(0x38a)][_0x3aab8f(0x6b5)])_0x493441[_0x3aab8f(0xaca)+_0x3aab8f(0x3ba)][_0x3aab8f(0x793)](_0x220211[_0x3aab8f(0xa1b)]+_0x493441[_0x3aab8f(0x38a)][_0x3aab8f(0x6b5)]);if(_0x493441['globa'+'ls']&&!_0x493441[_0x3aab8f(0x333)+'ls'][_0x3aab8f(0x942)+'8']){var _0x4b3e9a='';_0x493441[_0x3aab8f(0x30e)+'irePr'+'oof']&&(_0x220211[_0x3aab8f(0x338)](_0x220211['gDHKf'],'DKUME')?_0x53d748(![]):_0x4b3e9a=_0x220211[_0x3aab8f(0x1d9)](_0x220211['qtWht'](_0x220211[_0x3aab8f(0xa2e)](_0x220211[_0x3aab8f(0x241)]+_0x493441[_0x3aab8f(0x30e)+_0x3aab8f(0x63d)+'oof'][_0x3aab8f(0x9fe)]+(_0x3aab8f(0x523)+_0x3aab8f(0x618)+_0x3aab8f(0xb53)+'lFunc'+'='),_0x493441['hookF'+_0x3aab8f(0x63d)+_0x3aab8f(0x2d4)]['origi'+_0x3aab8f(0x766)+'nc'])+_0x220211['CVkrP'],_0x493441[_0x3aab8f(0x30e)+'irePr'+_0x3aab8f(0x2d4)][_0x3aab8f(0x7a9)+'veGam'+'eAtFi'+'re'])+(_0x3aab8f(0x78e)+'rce:\x20')+(_0x493441[_0x3aab8f(0x30e)+'irePr'+'oof']['gameS'+'ource'+_0x3aab8f(0x698)+'e']||_0x220211['GGYxm']),_0x220211['VyxAX'])),_0x493441[_0x3aab8f(0xaca)+_0x3aab8f(0x3ba)][_0x3aab8f(0x793)](_0x220211[_0x3aab8f(0x3e5)](_0x220211['WPHbB'](_0x220211['kjspa']+(_0x493441[_0x3aab8f(0x333)+'ls']['gameS'+'ource']||_0x3aab8f(0xae5)),_0x220211['ydgvD'])+_0x220211[_0x3aab8f(0x748)],_0x4b3e9a));}if(_0x493441[_0x3aab8f(0x333)+'ls']&&!_0x493441[_0x3aab8f(0x333)+'ls']['value'+_0x3aab8f(0x654)+'er']||_0x220211[_0x3aab8f(0x297)](_0x493441['globa'+'ls'][_0x3aab8f(0x7fb)+'Wrapp'+'er'],'undef'+'ined')){if(_0x220211['PXHLB']('WtbCl',_0x3aab8f(0x983)))_0x493441['warni'+'ngs'][_0x3aab8f(0x793)](_0x3aab8f(0x576)+_0x3aab8f(0xa64)+'tyWeb'+'Modki'+_0x3aab8f(0x479)+'ueWra'+'pper\x20'+'is\x20mi'+_0x3aab8f(0x3b3)+'\x20-\x20ca'+'pture'+_0x3aab8f(0x751)+_0x3aab8f(0x43c)+_0x3aab8f(0x50c)+_0x3aab8f(0x3c5));else return _0x2a6a80[_0x3aab8f(0x7aa)+'d']++,_0x549928['lastE'+_0x3aab8f(0x4ab)]=_0x5ef82a[_0x3aab8f(0x973)+_0x3aab8f(0x4ab)]||'no\x20HE'+_0x3aab8f(0x931)+'-\x20Uni'+_0x3aab8f(0x9b1)+'stanc'+_0x3aab8f(0x85e)+_0x3aab8f(0x94c)+_0x3aab8f(0x3ed)+_0x3aab8f(0x8f2)+'Runti'+_0x3aab8f(0x62d)+_0x3aab8f(0x9f5)+_0x3aab8f(0x4ec)+_0x3aab8f(0x369)+_0x3aab8f(0x3af)+'indow'+_0x3aab8f(0x64b)+'al',null;}if(_0x493441[_0x3aab8f(0x30c)+'Total']>-0x23d2+0x2*-0xa78+-0x5ad*-0xa&&_0x493441[_0x3aab8f(0x30c)+_0x3aab8f(0x501)+'ed']===-0x1df8+0x179*-0x16+0x3e5e&&_0x5bb6c8){if(_0x493441[_0x3aab8f(0x30c)+_0x3aab8f(0x892)+_0x3aab8f(0x92d)]===-0xfed+0x37f*-0x7+0x2866){if('SViCS'===_0x220211[_0x3aab8f(0x787)])return new _0x276289(_0x43e69c[_0x3aab8f(0x1c2)+'r'],_0x23868c[_0x3aab8f(0x9d3)+'ffset'],_0x5e2da2[_0x3aab8f(0xae9)+_0x3aab8f(0x2a5)]);else _0x493441[_0x3aab8f(0xaca)+_0x3aab8f(0x3ba)]['push'](_0x220211['VlsUp'](_0x220211[_0x3aab8f(0x859)](_0x220211[_0x3aab8f(0x5d8)]+_0x493441[_0x3aab8f(0x30c)+'Total']+_0x220211[_0x3aab8f(0x5ed)]+(_0x3aab8f(0x708)+_0x3aab8f(0x75b)+'durin'+_0x3aab8f(0x850)+_0x3aab8f(0x686)+_0x3aab8f(0x9df)+_0x3aab8f(0x889)+_0x3aab8f(0x340)+_0x3aab8f(0xaae)+'snaps'+_0x3aab8f(0x91c)+_0x3aab8f(0x740)+'n.hoo'+'ks.le'+_0x3aab8f(0x5f3)+'\x20'),'so\x20ho'+_0x3aab8f(0x912)+_0x3aab8f(0x232)+'ered\x20'+_0x3aab8f(0xb1d)+_0x3aab8f(0x99b)+_0x3aab8f(0x73f)+'nored'+_0x3aab8f(0x3eb)+'the\x20l'+_0x3aab8f(0xb09)+_0x3aab8f(0xaab)+'\x20page'+'.\x20')+(_0x3aab8f(0x64e)+'tered'+'\x20'),_0x493441['hooks'+_0x3aab8f(0x64e)+_0x3aab8f(0x978)+_0x3aab8f(0x204)])+('\x20hook'+_0x3aab8f(0x4ac)+_0x3aab8f(0x67b)+_0x3aab8f(0x941)+_0x3aab8f(0x61d)+_0x3aab8f(0x778)+'ment-'+'start'+'.'));}else _0x493441['warni'+_0x3aab8f(0x3ba)][_0x3aab8f(0x793)](_0x220211['ngKwB'](_0x220211[_0x3aab8f(0x1f8)](_0x220211[_0x3aab8f(0xa91)](_0x3aab8f(0xa95)+_0x3aab8f(0x7a9)+_0x3aab8f(0x2fb)+_0x493441[_0x3aab8f(0x30c)+_0x3aab8f(0x892)+'ved'],_0x3aab8f(0x45b))+_0x493441[_0x3aab8f(0x30c)+'Total'],_0x3aab8f(0x893)+_0x3aab8f(0x1de)+'o\x20a\x20t'+_0x3aab8f(0x50e)+_0x3aab8f(0x19e)+_0x3aab8f(0x3a6)+_0x3aab8f(0x6bd)+_0x3aab8f(0x900)+_0x3aab8f(0x6e2)+'he\x20si'+_0x3aab8f(0x202)+'re\x20'),'(this'+_0x3aab8f(0x283)+_0x3aab8f(0x829)+'fo*)\x20'+_0x3aab8f(0x55d)+_0x3aab8f(0x814)+'es\x20no'+'t\x20mat'+'ch\x20th'+'is\x20bu'+_0x3aab8f(0x1bd)));}return _0x493441[_0x3aab8f(0x30c)+_0x3aab8f(0x501)+'ed']>0xcb1+-0x729*0x1+0x588*-0x1&&!_0x493441[_0x3aab8f(0x930)+'nces'][_0x3aab8f(0x37b)+'ntrol'+_0x3aab8f(0x5da)]&&_0x493441['warni'+'ngs']['push'](_0x3aab8f(0x265)+'\x20are\x20'+_0x3aab8f(0x6bd)+_0x3aab8f(0x695)+'t\x20no\x20'+_0x3aab8f(0x37b)+_0x3aab8f(0x8c2)+_0x3aab8f(0x6be)+_0x3aab8f(0x704)+'red\x20y'+'et.\x20'+_0x220211['RevQz']),_0x493441[_0x3aab8f(0x930)+_0x3aab8f(0x4bf)+'eplac'+'ed'][_0x3aab8f(0x3f7)+'h']&&_0x493441[_0x3aab8f(0xaca)+_0x3aab8f(0x3ba)]['push'](_0x3aab8f(0x631)+_0x3aab8f(0xaa4)+'nce\x20f'+'irst\x20'+'captu'+_0x3aab8f(0x7b7)+_0x3aab8f(0x337)+_0x3aab8f(0x25a)+_0x493441[_0x3aab8f(0x930)+'ncesR'+'eplac'+'ed']['join'](',\x20')),_0x493441;}function _0x6a55c0(_0x511b78){var _0x5815db=_0x4b6c3b;if(_0x220211[_0x5815db(0xa80)]('uzRNg',_0x5815db(0x868))){var _0x472e67=_0x220211[_0x5815db(0x735)][_0x5815db(0xaa6)]('|'),_0x41ae81=-0x10ed*-0x2+0x180c+-0x39e6;while(!![]){switch(_0x472e67[_0x41ae81++]){case'0':console[_0x5815db(0x3f1)](_0x5815db(0x7c8)+_0x5815db(0x8ba)+_0x5815db(0xa67)+_0x5815db(0x1b7)+'\x20repo'+'rt','color'+':'+_0x563cd7+(';font'+_0x5815db(0x3d8)+_0x5815db(0x81b)+'0'),_0x511b78);continue;case'1':try{_0x3e971a(_0x511b78);}catch(_0x3cf8b0){}continue;case'2':_0x2ed218=_0x511b78;continue;case'3':_0x220211[_0x5815db(0x307)](_0x3ec60e,_0x220211['zFONu'],{'report':_0x511b78});continue;case'4':console['log'](_0x220211['gdUBK'](_0x220211['KESEp'](_0x15d915+'\x0a',JSON[_0x5815db(0x62c)+'gify'](_0x511b78,null,-0x1dd1+-0x1*0x1838+0x360a)),'\x0a')+_0x323bbd);continue;}break;}}else{var _0xcacc41=_0x493264();if(!_0xcacc41||!_0xcacc41[_0x5815db(0x329)+'Look'])return null;var _0x43161e=_0x111dba(_0xcacc41['mouse'+_0x5815db(0x88f)],-0x2129+0x5ed+-0x1*-0x1b4c),_0x12fbfb=_0x3f9235(_0x43161e+(0x1136+-0xa01+0x1*-0x71d),_0x5815db(0x41e)),_0x48bdfe=_0x1f9ed7(_0x43161e+(-0x1*0x1c22+0x64e+0x15f0),'f32');if(typeof _0x12fbfb!==_0x220211[_0x5815db(0x77d)]||_0x220211['retxg'](typeof _0x48bdfe,_0x220211[_0x5815db(0x77d)]))return null;return{'pitch':_0x220211[_0x5815db(0x9ab)](_0x12fbfb,_0x580708[_0x5815db(0x73a)+_0x5815db(0x565)]),'yaw':_0x220211[_0x5815db(0x269)](_0x48bdfe,_0x16d2b9['yawOf'+'f'])};}}function _0x598eb0(){var _0x43578e=_0x4b6c3b,_0x12e1df={'RdqCE':function(_0x471f5c,_0x429fff){return _0x471f5c===_0x429fff;}};try{if(_0x220211['AToxk']!==_0x220211[_0x43578e(0xb2b)])_0x4e3d43[_0x43578e(0xaca)+'ngs'][_0x43578e(0x793)](_0x220211[_0x43578e(0x614)](_0x220211[_0x43578e(0x321)](_0x220211[_0x43578e(0x9a4)],_0x1116eb['hooks'+'Resol'+'ved']),'\x20of\x20')+_0x3a66f4[_0x43578e(0x30c)+_0x43578e(0xa61)]+_0x220211[_0x43578e(0x738)]+_0x220211['dvaIC']);else return _0x4bf228();}catch(_0x59ed6e){if(_0x220211['qIXOd'](_0x220211['IzdQd'],_0x43578e(0x4f7)))return{'version':_0x596a6f,'when':new Date()[_0x43578e(0x41d)+'Strin'+'g'](),'elapsedMs':Date[_0x43578e(0x5a5)]()-_0x14db79,'host':_0x3a4971,'uwmk':!!(window[_0x43578e(0xaac)+'WebMo'+_0x43578e(0x8ab)]&&window[_0x43578e(0xaac)+_0x43578e(0xa6a)+_0x43578e(0x8ab)][_0x43578e(0x9a0)+'me']),'il2CppContext':![],'arm':_0x291d7c,'hooksTotal':_0x48a15f['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x220211['XOETb'](String,_0x59ed6e&&_0x59ed6e['messa'+'ge']||_0x59ed6e)};else{var _0x593c88=_0x312396[_0x43578e(0x5c8)+'r'](function(_0x9a18b9){var _0x5e80c7=_0x43578e;return _0x12e1df['RdqCE'](_0x9a18b9[_0x5e80c7(0x226)],_0x437b6a);})[0x11d7*-0x1+-0x3bd+0x1594];_0x394b70={'type':_0x3b17ca,'atMs':_0x220211[_0x43578e(0x400)](_0x348c90[_0x43578e(0x5a5)](),_0x2439ea),'originalFunc':!!(_0x593c88&&_0x593c88['hook']&&typeof _0x593c88[_0x43578e(0xb25)]['origi'+_0x43578e(0x766)+'nc']===_0x220211['hCQry']),'resolveGameAtFire':!!_0x7a15bf(),'gameSourceAtFire':_0x3c2ccc['sourc'+'e']};}}}function _0x2ded46(){var _0x4c463f=_0x4b6c3b,_0x80bfe8={'JjzKF':function(_0x2c93c1){var _0x2521c1=_0x3979;return _0x220211[_0x2521c1(0x420)](_0x2c93c1);}};if(_0x4c463f(0x881)!==_0x220211[_0x4c463f(0x361)]){var _0x236aca=0x1127*0x1+0x2300+-0x3427;try{_0x446d98();}catch(_0x5c3d78){}try{if(_0x220211[_0x4c463f(0x484)](_0x4c463f(0xb60),'niPut'))try{_0x149a5e['close']();}catch(_0x12ff94){}else _0x4cc6c6();}catch(_0x1c4d91){}_0x220211[_0x4c463f(0x584)](setInterval,_0x37cde6,0x7c2*0x3+-0x13*-0x161+0xb5*-0x41),_0x220211['jXASp'](_0x6a55c0,_0x598eb0()),function _0x1cf3b0(){var _0x344e1f=_0x4c463f;if(!_0x48a15f['lengt'+'h'])try{_0x220211[_0x344e1f(0x6c4)](_0x220211[_0x344e1f(0x7a4)],'FpRRo')?_0x338f0e():_0x41b5fa[_0x344e1f(0xaca)+'ngs']['push'](_0x344e1f(0x265)+_0x344e1f(0x3b4)+'appli'+'ed\x20bu'+_0x344e1f(0x1f4)+_0x344e1f(0x37b)+'ntrol'+_0x344e1f(0x6be)+'as\x20fi'+_0x344e1f(0x72c)+_0x344e1f(0x2df)+('Eithe'+_0x344e1f(0x79a)+'\x20are\x20'+'not\x20i'+'n\x20a\x20r'+'ound,'+_0x344e1f(0x561)+'he\x20ho'+_0x344e1f(0x653)+'\x20on\x20t'+_0x344e1f(0x841)+'ong\x20o'+_0x344e1f(0x7cc)+_0x344e1f(0xb45)));}catch(_0x54ff15){}_0x236aca++,_0x6a55c0(_0x220211[_0x344e1f(0xa51)](_0x598eb0));if(!_0x48a15f[_0x344e1f(0x3f7)+'h']&&_0x236aca<0x11*0x107+0x1*-0xe66+-0x1e5)setTimeout(_0x1cf3b0,0x146b+-0x1*0x849+-0x452);else{if(!Object[_0x344e1f(0x33a)](_0x51bfd8)['lengt'+'h']&&_0x220211[_0x344e1f(0x72d)](_0x236aca,-0x12cf+-0xe8*-0xf+0x663))setTimeout(_0x1cf3b0,-0x1a79+0xc*0x30a+0xd*-0x2b);else setTimeout(_0x1cf3b0,0x2206+-0x1*-0x119f+-0x2ef5*0x1);}}();}else _0x80bfe8['JjzKF'](_0x4689c4);}if(document[_0x4b6c3b(0x60e)])_0x220211['AVqfc'](_0x2ded46);else document[_0x4b6c3b(0x746)+_0x4b6c3b(0x6e3)+_0x4b6c3b(0x3ef)+'r'](_0x220211['CMcSE'],_0x2ded46,{'once':!![]});if(document[_0x4b6c3b(0x60e)]){if(_0x220211[_0x4b6c3b(0x8e3)](_0x4b6c3b(0x8d7),_0x220211['BMioD']))return null;else try{_0x233f8e();}catch(_0x4c75b4){}}else document[_0x4b6c3b(0x746)+'entLi'+_0x4b6c3b(0x3ef)+'r'](_0x220211['CMcSE'],function(){var _0x19f635=_0x4b6c3b;if('xVnlf'===_0x220211[_0x19f635(0xa43)])try{_0x233f8e();}catch(_0x13a78c){}else _0x2013d1=[];},{'once':!![]});})()));
