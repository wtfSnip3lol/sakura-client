// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.4
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

(function(_0x5561ef,_0x110509){var _0x14a4ff=_0x3166,_0x1ebf94=_0x5561ef();while(!![]){try{var _0x293d0e=-parseInt(_0x14a4ff(0x3d5))/(-0x2*-0x1346+0x5fa+-0x2c85)+parseInt(_0x14a4ff(0x34b))/(0x43*-0x43+0x53c+0xc4f)*(parseInt(_0x14a4ff(0x436))/(0x1d6c*-0x1+0x1949+0x426))+-parseInt(_0x14a4ff(0x157))/(0xe89+-0x11d3+0x34e)+-parseInt(_0x14a4ff(0x205))/(0x206c+0x1c01*-0x1+-0x466)*(parseInt(_0x14a4ff(0x11c))/(0x148*-0x15+0x1f3*-0x2+0x1ed4))+-parseInt(_0x14a4ff(0x119))/(0x5*0xd7+-0x6*-0x425+-0x1d0a*0x1)+parseInt(_0x14a4ff(0x2db))/(0x2705+-0xe8*-0x15+-0x1357*0x3)*(-parseInt(_0x14a4ff(0x2ee))/(0x23e5+0x15*0xa7+-0x1*0x318f))+-parseInt(_0x14a4ff(0x1f3))/(0x2*0xb51+-0x1*-0x3ab+0x9*-0x2eb)*(-parseInt(_0x14a4ff(0x3d8))/(0x1*0x3+-0xe5f+0xe67));if(_0x293d0e===_0x110509)break;else _0x1ebf94['push'](_0x1ebf94['shift']());}catch(_0x3e8b27){_0x1ebf94['push'](_0x1ebf94['shift']());}}}(_0x5e47,0xb552*-0x29+-0x164f36+-0x28*-0x1a5ec),((()=>{'use strict';var _0x15a8a6=_0x3166,_0x5f5962={'CkdfZ':function(_0x1e13e4,_0x6e7037){return _0x1e13e4!==_0x6e7037;},'ElGXe':function(_0x311d8a,_0x2c6dbf){return _0x311d8a!==_0x2c6dbf;},'FlKZH':function(_0xb087d,_0x1c416d){return _0xb087d!==_0x1c416d;},'bddbe':_0x15a8a6(0x3bf)+_0x15a8a6(0x24a)+_0x15a8a6(0x461)+'s','vaxLm':function(_0x56aaf0,_0xd68532){return _0x56aaf0===_0xd68532;},'GFFTv':'sakur'+_0x15a8a6(0x1cd),'qbxTG':function(_0x5430a0,_0x11d386,_0x29a318){return _0x5430a0(_0x11d386,_0x29a318);},'eYpbh':'sakur'+_0x15a8a6(0x24a)+'v2','ahPED':'XFTQG','SEACk':'div','ZZFqj':function(_0x1ec364){return _0x1ec364();},'sbMuK':function(_0x376d7c,_0x71f9b0){return _0x376d7c(_0x71f9b0);},'UVZnX':_0x15a8a6(0x233)+_0x15a8a6(0x2fb)+_0x15a8a6(0x2a7)+_0x15a8a6(0xe4)+_0x15a8a6(0x219),'exwcc':_0x15a8a6(0x27c)+':','QlwNd':function(_0x508868,_0x494f2d){return _0x508868+_0x494f2d;},'nKHut':'#7ee0'+'a8','Cgmjq':function(_0x149ca5,_0x27ea8e){return _0x149ca5>_0x27ea8e;},'VSOIh':_0x15a8a6(0x3c6),'SaQNd':_0x15a8a6(0x1c0),'GMptf':function(_0x458b00,_0xf08af3){return _0x458b00+_0xf08af3;},'vsZZs':_0x15a8a6(0x39d)+'8a','fYlMz':'armed'+'\x20·\x20','VDDdL':function(_0x9a78a7,_0x6cfb5b){return _0x9a78a7!==_0x6cfb5b;},'uQBwZ':_0x15a8a6(0x225),'azWyW':_0x15a8a6(0x3ea)+_0x15a8a6(0x418)+_0x15a8a6(0x3dc)+_0x15a8a6(0x11e)+_0x15a8a6(0x253)+_0x15a8a6(0x135)+'ting\x20'+_0x15a8a6(0x448)+_0x15a8a6(0x1ae)+_0x15a8a6(0x20f)+_0x15a8a6(0x3bb)+'h\x20fie'+_0x15a8a6(0x332)+'\x20whic'+'h.','EGUUx':'skAaO','NoLxW':function(_0x3d4bcd,_0x212b0e){return _0x3d4bcd+_0x212b0e;},'zUClB':_0x15a8a6(0x2c4)+'port\x20'+_0x15a8a6(0xff)+_0x15a8a6(0x202)+'—\x20fra'+_0x15a8a6(0x33c)+_0x15a8a6(0x3a6)+_0x15a8a6(0x2f7)+'?','diUlv':'#ffb3'+'c7','hkrqK':'\x20\x20\x20\x20\x20'+_0x15a8a6(0x162)+_0x15a8a6(0x1ac)+'—\x20two'+'\x20copi'+'es\x20of'+_0x15a8a6(0x116)+_0x15a8a6(0x164)+'\x20patc'+'h\x20Web'+_0x15a8a6(0x3f2)+'bly.i'+_0x15a8a6(0x2ed)+'tiate'+'.\x0a\x0a','nrlpM':function(_0x349496,_0x4053f6){return _0x349496+_0x4053f6;},'xebot':_0x15a8a6(0x1ec)+_0x15a8a6(0x146)+_0x15a8a6(0x199)+_0x15a8a6(0x36e)+_0x15a8a6(0x3b3)+_0x15a8a6(0x290)+_0x15a8a6(0x43a)+_0x15a8a6(0x235)+'x:214'+_0x15a8a6(0x114)+_0x15a8a6(0x148)+_0x15a8a6(0x1ce)+'in(52'+'vw,62'+_0x15a8a6(0x385)+_0x15a8a6(0xf6)+_0x15a8a6(0x17d)+':78vh'+';','VuKHt':'backg'+_0x15a8a6(0x26c)+':#150'+'c1d;c'+_0x15a8a6(0x404)+_0x15a8a6(0x255)+_0x15a8a6(0x2b4)+'rder:'+'1px\x20s'+'olid\x20'+'rgba('+'255,1'+_0x15a8a6(0x421)+_0x15a8a6(0x269)+_0x15a8a6(0x380)+_0x15a8a6(0x13b)+_0x15a8a6(0x41e)+_0x15a8a6(0x2b3),'ELdjF':function(_0x451592,_0x5c4c96){return _0x451592+_0x5c4c96;},'IocoB':function(_0x5342af,_0x224d7f){return _0x5342af+_0x224d7f;},'vvVeh':function(_0x4fafee,_0x2e2e3e){return _0x4fafee+_0x2e2e3e;},'kLiTU':function(_0x541391,_0x5a6241){return _0x541391+_0x5a6241;},'gmang':function(_0x30220c,_0x1cb1fc){return _0x30220c+_0x1cb1fc;},'KRKxn':function(_0x1bc308,_0x4771c4){return _0x1bc308+_0x4771c4;},'MpklS':'<b\x20st'+'yle=\x22'+_0x15a8a6(0x27c)+':','uSfCh':'\x22>sak'+_0x15a8a6(0x465)+_0x15a8a6(0x15d)+_0x15a8a6(0x395)+_0x15a8a6(0x3f7),'qQadl':'</div'+'>','TTvtT':_0x15a8a6(0x237)+_0x15a8a6(0x393)+_0x15a8a6(0x124)+'ding:'+'8px\x201'+'2px;b'+'order'+_0x15a8a6(0x109)+'om:1p'+_0x15a8a6(0x3db)+'id\x20rg'+'ba(25'+_0x15a8a6(0x35b)+_0x15a8a6(0x2d8)+'.18);'+_0x15a8a6(0x2de)+_0x15a8a6(0x243)+'ex;ga'+_0x15a8a6(0x314)+_0x15a8a6(0x330)+'n-ite'+_0x15a8a6(0x3f9)+'nter;'+'flex:'+_0x15a8a6(0x23f)+_0x15a8a6(0x357)+'>','jyhGR':_0x15a8a6(0x2e2)+_0x15a8a6(0x3f6)+'=\x22sw2'+'-snap'+_0x15a8a6(0x2b7)+_0x15a8a6(0x367)+'ackgr'+_0x15a8a6(0x31b)+'trans'+_0x15a8a6(0x1a8)+_0x15a8a6(0x39a)+'der:1'+_0x15a8a6(0x3d4)+_0x15a8a6(0x287)+_0x15a8a6(0xfb)+_0x15a8a6(0xe5)+_0x15a8a6(0x25c)+_0x15a8a6(0x30c)+_0x15a8a6(0x27c)+':#f7e'+'ef5;b'+_0x15a8a6(0x2f5)+_0x15a8a6(0x39f)+_0x15a8a6(0x30e)+_0x15a8a6(0x376)+'ding:'+_0x15a8a6(0x3e9)+'px;cu'+'rsor:'+_0x15a8a6(0x3dd)+'er;\x22>'+_0x15a8a6(0x391)+_0x15a8a6(0x14b)+'F9)</'+'butto'+'n>','FwdWO':_0x15a8a6(0x305)+_0x15a8a6(0x43b)+'sw2-h'+'int\x22\x20'+'style'+_0x15a8a6(0x21b)+_0x15a8a6(0x434)+'d7a99'+_0x15a8a6(0x2e7)+_0x15a8a6(0x2c6)+_0x15a8a6(0x3f1)+_0x15a8a6(0x433)+_0x15a8a6(0x26b)+'/\x20spr'+'intin'+_0x15a8a6(0x2f2)+_0x15a8a6(0x36c)+'g\x20mar'+_0x15a8a6(0x22f)+_0x15a8a6(0x44c)+_0x15a8a6(0xf1)+_0x15a8a6(0x2fd)+_0x15a8a6(0x3b4)+'/span'+'>','zKBNN':'<pre\x20'+_0x15a8a6(0x38e)+'w2-ou'+_0x15a8a6(0x42b)+_0x15a8a6(0x34d)+_0x15a8a6(0xe9)+_0x15a8a6(0x14a)+_0x15a8a6(0x191)+_0x15a8a6(0x274)+_0x15a8a6(0x216)+'x;ove'+'rflow'+_0x15a8a6(0x371)+_0x15a8a6(0x31f)+':1\x201\x20'+_0x15a8a6(0x443)+'white'+_0x15a8a6(0x3b8)+_0x15a8a6(0x3a9)+_0x15a8a6(0x344)+_0x15a8a6(0xe7)+'-brea'+_0x15a8a6(0x402)+_0x15a8a6(0x213)+_0x15a8a6(0x1f1)+_0x15a8a6(0x31a)+_0x15a8a6(0x40a)+';','SzzcZ':_0x15a8a6(0x121)+'statu'+'s','sjgtQ':_0x15a8a6(0x121)+_0x15a8a6(0x3cc),'Owxbd':_0x15a8a6(0x1e0)+_0x15a8a6(0x19b),'wqQkS':'yes','PmKXn':_0x15a8a6(0x338)+_0x15a8a6(0x406),'bnZzV':_0x15a8a6(0x2ea),'RzAqk':'no\x20Up'+'date\x20'+'ran\x20y'+_0x15a8a6(0x10c)+'r\x20the'+'\x20sign'+'ature'+_0x15a8a6(0x1b7)+_0x15a8a6(0x198)+_0x15a8a6(0x467),'PZNpc':function(_0x2dd0b0,_0x11dc66){return _0x2dd0b0<_0x11dc66;},'nvaLi':function(_0x7f312c,_0x397d4d){return _0x7f312c===_0x397d4d;},'zrSce':'\x20@\x20','vuwgo':'iBbwh','MgRTF':_0x15a8a6(0x2bd),'ZAXVX':function(_0x205518,_0x1172b7){return _0x205518+_0x1172b7;},'VyYYf':function(_0x42a1a2,_0x155d43){return _0x42a1a2-_0x155d43;},'UNjNU':_0x15a8a6(0x195)+_0x15a8a6(0x41b)+'\x20kind'+'\x20\x20\x20\x20\x20'+_0x15a8a6(0x352)+'lue\x20\x20'+_0x15a8a6(0x303)+_0x15a8a6(0x303)+_0x15a8a6(0x3f3),'kBoMW':function(_0x1f8f80,_0x542a69){return _0x1f8f80<_0x542a69;},'Cyebr':_0x15a8a6(0x2b1)+'r','QOmPx':function(_0x509755,_0x26f9fb){return _0x509755/_0x26f9fb;},'aFWLh':function(_0x1087fa,_0x3d3d1c){return _0x1087fa+_0x3d3d1c;},'ISgdR':function(_0x4905e1,_0x5f3249){return _0x4905e1+_0x5f3249;},'QKYCj':function(_0x1f5730,_0x1257f6){return _0x1f5730+_0x1257f6;},'CPxDU':'hello','MdDhh':function(_0x3e72b1,_0x387f1b){return _0x3e72b1===_0x387f1b;},'FRzgz':_0x15a8a6(0x238)+'t','MkpQZ':function(_0x4ed274,_0x46604b){return _0x4ed274!==_0x46604b;},'AMroi':_0x15a8a6(0x2e5),'OYgnm':function(_0x1d1f6b,_0x44c82e){return _0x1d1f6b!==_0x44c82e;},'HZHan':'\x20hook'+_0x15a8a6(0x3f0)+'o\x20a\x20t'+_0x15a8a6(0x12d)+_0x15a8a6(0x3b0)+'\x20but\x20'+_0x15a8a6(0x1e5)+_0x15a8a6(0x2ab)+'ne.\x20T'+_0x15a8a6(0x103)+_0x15a8a6(0x2a3)+_0x15a8a6(0x3c9),'uKlcC':'Runti'+_0x15a8a6(0x292)+_0x15a8a6(0x286)+'lugin'+_0x15a8a6(0x140)+_0x15a8a6(0x41d)+'le','GCXCB':_0x15a8a6(0x3bf)+_0x15a8a6(0x267)+_0x15a8a6(0x36b)+'z','dAJjA':_0x15a8a6(0x233)+_0x15a8a6(0x2fb)+'\x20pane'+_0x15a8a6(0x322)+_0x15a8a6(0x28c)+_0x15a8a6(0x1dc),'ZXTQj':'funct'+_0x15a8a6(0x405),'OvAJM':'plugi'+_0x15a8a6(0x34e)+'ntime'+_0x15a8a6(0x11d)+'lveGa'+_0x15a8a6(0x354),'EHedG':function(_0x202d0f,_0x3325c7){return _0x202d0f===_0x3325c7;},'NBctP':_0x15a8a6(0x1fa),'ymnhx':_0x15a8a6(0x2a8),'JyJsk':function(_0x252bf8,_0x247084){return _0x252bf8!==_0x247084;},'btJPH':_0x15a8a6(0x1d0)+'ined','KAamb':'objec'+'t','LnGzt':_0x15a8a6(0x2f6),'VcxNG':function(_0xaafcb2){return _0xaafcb2();},'LYqTh':_0x15a8a6(0x25d),'EzNwb':function(_0x2f8a0c,_0x128c46){return _0x2f8a0c+_0x128c46;},'twkJy':_0x15a8a6(0x241)+_0x15a8a6(0x29a),'QexDX':'u16','bxqKL':_0x15a8a6(0x100),'jOMwW':'f64','PjpXJ':'i32','FrVPK':'u32','NToNQ':function(_0x3f6313,_0xdc2b1f){return _0x3f6313|_0xdc2b1f;},'tdlmj':function(_0x52042c,_0x26a689){return _0x52042c===_0x26a689;},'LhKqD':function(_0x30a296,_0x24f138){return _0x30a296===_0x24f138;},'buxkH':function(_0x389d25,_0x5555ad){return _0x389d25===_0x5555ad;},'IpAGp':function(_0x46819c,_0x6ccc39){return _0x46819c^_0x6ccc39;},'HvohM':'obfI','LTKUz':function(_0x225250,_0x56e083){return _0x225250&_0x56e083;},'leetV':function(_0x258aeb,_0x23bcc6){return _0x258aeb+_0x23bcc6;},'sJuiH':_0x15a8a6(0x43c),'acqEq':function(_0x358428,_0xe2b771,_0x1b9760){return _0x358428(_0xe2b771,_0x1b9760);},'pUkKp':function(_0xf7fc42,_0xaeabbb){return _0xf7fc42&_0xaeabbb;},'nqpDX':function(_0x58cd16,_0x4021f2){return _0x58cd16!==_0x4021f2;},'xeEDF':'SbOOf','IyhAX':function(_0x432ed,_0x2ec617){return _0x432ed(_0x2ec617);},'RELSs':function(_0x39d504,_0x18b2c8){return _0x39d504^_0x18b2c8;},'HCBwH':function(_0x28ffea,_0xb6d3ae,_0x2b1a2a,_0x3ca13d){return _0x28ffea(_0xb6d3ae,_0x2b1a2a,_0x3ca13d);},'QVDRj':function(_0x2ce104,_0x365230){return _0x2ce104|_0x365230;},'rVflg':function(_0x201c4f,_0x554790,_0x2f929f,_0xec99a4){return _0x201c4f(_0x554790,_0x2f929f,_0xec99a4);},'dhgGn':function(_0x6aa80d,_0x3cad57){return _0x6aa80d+_0x3cad57;},'aYggk':function(_0x98f1b3,_0x24614b){return _0x98f1b3+_0x24614b;},'sgIrT':function(_0x69e902,_0x46e471){return _0x69e902<_0x46e471;},'kShuX':function(_0x2e4fd8,_0x2e916a){return _0x2e4fd8||_0x2e916a;},'HPuvp':_0x15a8a6(0x304)+'VE','ZVDAZ':function(_0x2b8be1,_0x3d7c1d){return _0x2b8be1===_0x3d7c1d;},'LuJaD':function(_0x4a7690,_0x1842ab){return _0x4a7690*_0x1842ab;},'fCcnr':function(_0x363616,_0x221794){return _0x363616+_0x221794;},'ZwmaU':function(_0x67a2c8,_0xc6edeb){return _0x67a2c8===_0xc6edeb;},'wtPJh':_0x15a8a6(0x19e)+_0x15a8a6(0x25b)+_0x15a8a6(0x41f),'bUFNt':function(_0x138de1,_0x19fc4b){return _0x138de1===_0x19fc4b;},'tGcJn':function(_0x4db106,_0x52060c){return _0x4db106===_0x52060c;},'ooJEA':_0x15a8a6(0x151),'xkmtW':_0x15a8a6(0x27d),'aUxOj':function(_0xeab9f5){return _0xeab9f5();},'FKfFc':function(_0x11f4e7){return _0x11f4e7();},'ukHNt':function(_0x176a85,_0x465609){return _0x176a85!==_0x465609;},'xGJrk':'snaps'+_0x15a8a6(0x2f3),'eQqFE':function(_0xcfb3e6,_0x182227){return _0xcfb3e6!==_0x182227;},'HFCzd':function(_0x151453,_0x3657be){return _0x151453+_0x3657be;},'nIzwQ':_0x15a8a6(0x28a),'CyuYi':'XLtew','qMmPG':_0x15a8a6(0x44b),'BuXOZ':'TNUKS','IzuWh':function(_0x3cdf6e,_0x2ab573){return _0x3cdf6e+_0x2ab573;},'iKKof':_0x15a8a6(0x178),'sIKsL':function(_0x2a9dbd){return _0x2a9dbd();},'JVSzm':function(_0x42c035,_0x1318c8){return _0x42c035+_0x1318c8;},'AACFD':function(_0x27e4d8,_0x7ff408){return _0x27e4d8+_0x7ff408;},'EVCbv':function(_0x164a9c,_0x193b96){return _0x164a9c+_0x193b96;},'KHGNc':_0x15a8a6(0x3be)+_0x15a8a6(0x260),'xkAqu':function(_0x132518,_0x236a61){return _0x132518+_0x236a61;},'zAsEi':function(_0x1e74f2,_0x34ab0d){return _0x1e74f2+_0x34ab0d;},'RvTKB':function(_0x39d14f,_0x1019c3){return _0x39d14f+_0x1019c3;},'FORGL':function(_0x2b0b2d,_0x2a7ac8){return _0x2b0b2d+_0x2a7ac8;},'nBNfY':_0x15a8a6(0x1aa)+'ok\x20fi'+_0x15a8a6(0x20d)+'t\x20','NCTNy':_0x15a8a6(0x1b5),'fJzyS':function(_0x1c0941,_0x307a8a){return _0x1c0941+_0x307a8a;},'ewkPT':function(_0x87d26d,_0x284b7a){return _0x87d26d+_0x284b7a;},'fyuvn':function(_0x481c1f,_0x429791){return _0x481c1f+_0x429791;},'MPybT':'windo'+_0x15a8a6(0x2f0)+_0x15a8a6(0x3d2)+'Modki'+_0x15a8a6(0x1b0)+_0x15a8a6(0x250)+_0x15a8a6(0x2ba)+_0x15a8a6(0x1c1)+_0x15a8a6(0x272)+_0x15a8a6(0x3fe)+_0x15a8a6(0x346)+_0x15a8a6(0x137)+_0x15a8a6(0x183)+_0x15a8a6(0x2af)+'nd.','pJYNC':function(_0x1fd2f0,_0x1cbf75){return _0x1fd2f0+_0x1cbf75;},'erWnU':function(_0x1dbc8a,_0x24f412){return _0x1dbc8a+_0x24f412;},'ltvfh':function(_0x4d30a3,_0x28f6ae){return _0x4d30a3+_0x28f6ae;},'bBmMi':_0x15a8a6(0x358)+_0x15a8a6(0x1c5)+'durin'+'g\x20Web'+_0x15a8a6(0x3f2)+'bly.i'+_0x15a8a6(0x2ed)+_0x15a8a6(0x464)+_0x15a8a6(0x3c3)+_0x15a8a6(0x2ce)+'hots\x20'+_0x15a8a6(0x439)+_0x15a8a6(0x127)+_0x15a8a6(0x401)+_0x15a8a6(0x24b)+'\x20','fzgOr':'so\x20ho'+_0x15a8a6(0x1ea)+'egist'+_0x15a8a6(0x122)+_0x15a8a6(0xff)+'\x20it\x20a'+_0x15a8a6(0x215)+_0x15a8a6(0x110)+_0x15a8a6(0x2d2)+_0x15a8a6(0x423)+'ife\x20o'+'f\x20the'+_0x15a8a6(0x284)+'.\x20','znCsl':function(_0x647554,_0x104899){return _0x647554+_0x104899;},'yrSvx':function(_0x3aad1d,_0x16b674){return _0x3aad1d+_0x16b674;},'OUZYS':_0x15a8a6(0x445)+_0x15a8a6(0x3ec)+_0x15a8a6(0x3d6),'UMoYM':'Hooks'+'\x20are\x20'+_0x15a8a6(0x1e5)+_0x15a8a6(0x10a)+_0x15a8a6(0x1a5)+'FPSco'+_0x15a8a6(0x3b6)+'ler\x20h'+_0x15a8a6(0x245)+_0x15a8a6(0x133)+_0x15a8a6(0x2d9),'pblzd':function(_0x3083f1,_0x44a91e){return _0x3083f1+_0x44a91e;},'nGjxc':_0x15a8a6(0x10b)+_0x15a8a6(0x1bd)+_0x15a8a6(0x129)+'0','RLJDU':function(_0x173104,_0x531630){return _0x173104+_0x531630;},'OONBD':function(_0x2794a6,_0x267708){return _0x2794a6+_0x267708;},'ynMdj':_0x15a8a6(0x1f5),'hUqmB':function(_0x41e051,_0x3fe068){return _0x41e051-_0x3fe068;},'HTDDj':_0x15a8a6(0x3e6)+'l','oeijY':function(_0x5b2be4,_0x4046e4){return _0x5b2be4&&_0x4046e4;},'zfNSz':'__sak'+_0x15a8a6(0x156)+_0x15a8a6(0x1cf),'RFtmP':'===SA'+_0x15a8a6(0x165)+_0x15a8a6(0x2df)+_0x15a8a6(0x15f)+_0x15a8a6(0x160)+'=','jXkOH':_0x15a8a6(0x40f)+'ge','kqoRJ':_0x15a8a6(0x233)+_0x15a8a6(0x2fb)+_0x15a8a6(0x3aa)+_0x15a8a6(0x1fc)+'R\x20ACT'+_0x15a8a6(0x1db)+'relay'+_0x15a8a6(0x25e)+')','uXGSK':_0x15a8a6(0x233)+_0x15a8a6(0x2fb)+'\x20PORT'+_0x15a8a6(0x44f)+'TIVE','syzgE':function(_0x4d4f4e,_0x304443){return _0x4d4f4e+_0x304443;},'nYNlr':_0x15a8a6(0x446)+_0x15a8a6(0x3b6)+'ler','chVUf':_0x15a8a6(0x220)+_0x15a8a6(0x40c)+'ger','AInqp':_0x15a8a6(0x386)+'cofor'+_0x15a8a6(0x33a)+'cal.d'+'ll','dTvur':'obfB','KWoKQ':_0x15a8a6(0x258)+'wn'};var _0x2ff23e=location[_0x15a8a6(0x431)+_0x15a8a6(0x2ef)]||'',_0x4caaec=/(^|\.)www\.crazygames\.com$/['test'](_0x2ff23e),_0x481f84=/(^|\.)games\.crazygames\.com$/['test'](_0x2ff23e),_0x346a78=/(^|\.)crazygames\.com$/[_0x15a8a6(0x282)](_0x2ff23e)&&!_0x4caaec&&!_0x481f84,_0x1ac922=_0x4caaec?_0x5f5962['HTDDj']:_0x481f84?_0x15a8a6(0x43e)+'er':_0x15a8a6(0x279)+'r';if(_0x5f5962[_0x15a8a6(0x179)](!_0x4caaec,!_0x481f84)&&!_0x346a78)return;var _0x2bd5ae='#ff8f'+'b1',_0x3b5605=_0x5f5962[_0x15a8a6(0x26f)],_0x8c722b=_0x15a8a6(0x1fd)+_0x15a8a6(0x165)+'SKILL'+_0x15a8a6(0x15f)+'BEGIN'+'===',_0x4c80b5=_0x5f5962['RFtmP'];if(_0x481f84){window[_0x15a8a6(0x212)+_0x15a8a6(0x1a6)+_0x15a8a6(0x1e3)+'r'](_0x5f5962['jXkOH'],function(_0x319876){var _0x433095=_0x15a8a6,_0x4d3723=_0x319876['data'];if(!_0x4d3723||_0x5f5962[_0x433095(0x112)](_0x4d3723[_0x433095(0x31d)+_0x433095(0x306)],_0x3b5605))return;try{if(window[_0x433095(0x1a8)+'t']&&_0x5f5962[_0x433095(0x347)](window['paren'+'t'],window))window[_0x433095(0x1a8)+'t'][_0x433095(0x273)+'essag'+'e'](_0x4d3723,'*');if(window['top']&&_0x5f5962[_0x433095(0x1f8)](window['top'],window))window[_0x433095(0x2e9)][_0x433095(0x273)+_0x433095(0x120)+'e'](_0x4d3723,'*');}catch(_0x4f982e){}}),console[_0x15a8a6(0x3fd)](_0x5f5962[_0x15a8a6(0x16d)],_0x5f5962['leetV']('color'+':',_0x2bd5ae));return;}if(_0x4caaec){console[_0x15a8a6(0x3fd)](_0x5f5962['uXGSK'],_0x15a8a6(0x27c)+':'+_0x2bd5ae+_0x5f5962[_0x15a8a6(0x40e)],{'host':_0x2ff23e});var _0x5ba5ea={'set':function(){},'command':function(){}};function _0x778bf4(_0x318978,_0x987e58){var _0x32a072=_0x15a8a6,_0x375f33={'etMqT':_0x5f5962['bddbe'],'pFamQ':function(_0x2574f2,_0x55961a){return _0x5f5962['vaxLm'](_0x2574f2,_0x55961a);},'WWtSH':'MoUAC'},_0x2bbcec={'__sakura':_0x3b5605,'kind':'cmd','cmd':_0x318978,'arg':_0x987e58};try{var _0x213800=new BroadcastChannel(_0x5f5962[_0x32a072(0x210)]);_0x213800['postM'+'essag'+'e'](_0x2bbcec),_0x5f5962[_0x32a072(0x449)](setTimeout,function(){var _0x5dd68b=_0x32a072;if(_0x375f33['pFamQ'](_0x5dd68b(0x324),_0x5dd68b(0x324)))try{_0x375f33['WWtSH']==='MoUAC'?_0x213800['close']():_0x3ee4f7();}catch(_0xb41172){}else{var _0x50e9da=_0x74dab1[_0x5dd68b(0xeb)+_0x5dd68b(0x2f1)+_0x5dd68b(0x12c)](_0x5dd68b(0x393));_0x50e9da['id']=_0x375f33[_0x5dd68b(0x1a0)],_0x50e9da['textC'+_0x5dd68b(0x2aa)+'t']='#saku'+'ra-sw'+_0x5dd68b(0x29b)+_0x5dd68b(0x115)+_0x5dd68b(0x3ca)+'}',(_0x3a4407[_0x5dd68b(0x387)]||_0x5d0dea[_0x5dd68b(0x2e3)+'entEl'+'ement'])['appen'+_0x5dd68b(0x24d)+'d'](_0x50e9da);}},-0xd5*0x2b+-0x1*-0x8c6+-0x179*-0x13);}catch(_0x298fac){}}function _0x57e0a5(){var _0x57c50c=_0x15a8a6,_0x4c8260=document[_0x57c50c(0x166)+'ement'+_0x57c50c(0x319)](_0x5f5962['eYpbh']);if(_0x4c8260)return _0x4c8260;if(!document['body']||!document['body'][_0x57c50c(0x2bb)+_0x57c50c(0x24d)+'d'])return null;try{if('QhYtU'!==_0x5f5962[_0x57c50c(0x368)]){if(!document[_0x57c50c(0x166)+'ement'+'ById'](_0x5f5962[_0x57c50c(0x2c7)])){var _0x3657b9=document[_0x57c50c(0xeb)+_0x57c50c(0x2f1)+'ent']('style');_0x3657b9['id']=_0x5f5962['bddbe'],_0x3657b9[_0x57c50c(0x422)+_0x57c50c(0x2aa)+'t']=_0x57c50c(0x2fa)+_0x57c50c(0x277)+'-v2{a'+_0x57c50c(0x115)+_0x57c50c(0x3ca)+'}',(document[_0x57c50c(0x387)]||document['docum'+_0x57c50c(0x32b)+_0x57c50c(0x397)])[_0x57c50c(0x2bb)+'dChil'+'d'](_0x3657b9);}return _0x4c8260=document['creat'+'eElem'+_0x57c50c(0x12c)](_0x5f5962[_0x57c50c(0x300)]),_0x4c8260['id']=_0x57c50c(0x3bf)+'a-sw-'+'v2',document[_0x57c50c(0x23b)]['appen'+'dChil'+'d'](_0x4c8260),_0x4c8260;}else _0x1f6a1c['textC'+_0x57c50c(0x2aa)+'t']=_0x56bce3[_0x57c50c(0x3a4)+_0x57c50c(0x2d4)](_0x3b6d4c,null,-0x252f+0x839*-0x1+-0x1*-0x2d69);}catch(_0x46250c){return null;}}function _0x47f273(){var _0x26d5f2=_0x15a8a6,_0x267ab5=_0x5f5962[_0x26d5f2(0x149)](_0x57e0a5);if(!_0x267ab5)return _0x5ba5ea;if(_0x267ab5['datas'+'et'][_0x26d5f2(0x388)])return _0x267ab5['api'];try{return _0x5f5962[_0x26d5f2(0x1ff)](_0x34f7a3,_0x267ab5);}catch(_0xb8d1cf){return _0x267ab5[_0x26d5f2(0x11f)+'et']['api']='1',_0x267ab5[_0x26d5f2(0x388)]=_0x5ba5ea,console[_0x26d5f2(0x460)](_0x5f5962['UVZnX'],_0x5f5962['exwcc']+_0x2bd5ae,_0xb8d1cf),_0x5ba5ea;}}function _0x34f7a3(_0x1898b9){var _0x3929e3=_0x15a8a6,_0x5bebf9={'LzxyD':_0x3929e3(0x381),'ukXAh':function(_0x3d7271,_0x33b06e){return _0x3d7271(_0x33b06e);},'ewQLu':function(_0x1133e3,_0x300ccc){return _0x1133e3+_0x300ccc;},'dEmow':function(_0x51848d,_0x379fd2){return _0x51848d+_0x379fd2;},'YNFKX':_0x5f5962['zUClB'],'QTPan':_0x5f5962['diUlv'],'DTBkO':function(_0x4364d2,_0x17f268){return _0x4364d2+_0x17f268;},'VuDdo':function(_0x4ff076,_0x4f7155){return _0x4ff076+_0x4f7155;},'RfBaH':_0x3929e3(0x1d1)+_0x3929e3(0x424)+_0x3929e3(0x298)+'never'+_0x3929e3(0x211)+'ed\x20a\x20'+_0x3929e3(0x20c)+_0x3929e3(0x3cf)+'ort.\x0a'+'\x0a','IJYAg':'This\x20'+_0x3929e3(0x2b8)+'\x20prov'+'es\x20th'+_0x3929e3(0x23c)+_0x3929e3(0x37c)+_0x3929e3(0x3bc)+_0x3929e3(0x275)+'alled'+'\x20and\x20'+'runni'+'ng\x20on'+_0x3929e3(0xf5)+_0x3929e3(0x3e6)+'l,\x0a','pFDSN':'so\x20th'+_0x3929e3(0x289)+_0x3929e3(0x30f)+'g\x20sus'+_0x3929e3(0x35e)+_0x3929e3(0x398)+'\x0a\x0a','VXLWe':_0x5f5962[_0x3929e3(0x31c)]};_0x1898b9['style']['cssTe'+'xt']=_0x5f5962[_0x3929e3(0x400)](_0x5f5962[_0x3929e3(0x3ab)](_0x5f5962['xebot'],_0x5f5962[_0x3929e3(0x221)]),'font:'+_0x3929e3(0xee)+_0x3929e3(0xef)+_0x3929e3(0x142)+_0x3929e3(0x37e)+_0x3929e3(0x35a)+_0x3929e3(0x3df)+',mono'+_0x3929e3(0x1b6)+_0x3929e3(0x107)+_0x3929e3(0x1d4)+'w:0\x202'+'0px\x205'+_0x3929e3(0x1be)+'20px\x20'+'#000;')+('displ'+_0x3929e3(0x243)+_0x3929e3(0x321)+'ex-di'+'recti'+'on:co'+'lumn;'+'overf'+_0x3929e3(0x2b5)+'idden'+';'),_0x1898b9[_0x3929e3(0x1b9)+'HTML']=_0x5f5962['ELdjF'](_0x5f5962['IocoB'](_0x5f5962[_0x3929e3(0x372)](_0x5f5962[_0x3929e3(0x372)](_0x5f5962['kLiTU'](_0x5f5962[_0x3929e3(0x360)](_0x5f5962[_0x3929e3(0x101)](_0x3929e3(0x237)+'style'+_0x3929e3(0x124)+_0x3929e3(0x229)+'9px\x201'+_0x3929e3(0x17e)+_0x3929e3(0x2f5)+'-bott'+_0x3929e3(0x1ca)+'x\x20sol'+_0x3929e3(0x2f4)+_0x3929e3(0x15a)+_0x3929e3(0x35b)+_0x3929e3(0x2d8)+'.3);d'+_0x3929e3(0x22b)+_0x3929e3(0x33b)+_0x3929e3(0x1de)+_0x3929e3(0x37a)+_0x3929e3(0x23a)+_0x3929e3(0x311)+_0x3929e3(0x217)+_0x3929e3(0x1e7)+'lex:0'+_0x3929e3(0x1ee)+'to;\x22>'+_0x5f5962[_0x3929e3(0x188)]+_0x2bd5ae,_0x5f5962[_0x3929e3(0x144)])+('<span'+_0x3929e3(0x43b)+_0x3929e3(0x417)+_0x3929e3(0x249)+_0x3929e3(0x2b7)+_0x3929e3(0x22e)+'olor:'+'#bda9'+'c9\x22>w'+_0x3929e3(0x297)+_0x3929e3(0x102)+_0x3929e3(0x3c0)+_0x3929e3(0x132)+'e…</s'+_0x3929e3(0x24e)),'<butt'+_0x3929e3(0x3f6)+_0x3929e3(0x1e8)+_0x3929e3(0x2fe)+_0x3929e3(0x2b7)+_0x3929e3(0x456)+'ispla'+'y:non'+_0x3929e3(0xfe)+_0x3929e3(0x457)+_0x3929e3(0x33f)+'uto;b'+_0x3929e3(0x2e8)+'ound:')+_0x2bd5ae,';bord'+'er:0;'+_0x3929e3(0x27c)+_0x3929e3(0x38a)+'f1b;b'+_0x3929e3(0x2f5)+_0x3929e3(0x39f)+_0x3929e3(0x30e)+_0x3929e3(0x376)+_0x3929e3(0x229)+'4px\x201'+'0px;f'+'ont-w'+_0x3929e3(0x17d)+':700;'+'curso'+_0x3929e3(0x30d)+_0x3929e3(0x1c4)+'\x22>Cop'+'y\x20JSO'+'N</bu'+'tton>')+('<butt'+'on\x20id'+'=\x22sw2'+_0x3929e3(0x3bd)+_0x3929e3(0x3cb)+_0x3929e3(0x203)+'groun'+_0x3929e3(0x359)+_0x3929e3(0x247)+_0x3929e3(0x331)+'order'+':1px\x20'+'solid'+_0x3929e3(0x22d)+'(255,'+'143,1'+'77,.4'+');col'+'or:#f'+'7eef5'+_0x3929e3(0x380)+'er-ra'+_0x3929e3(0x41e)+'7px;p'+'addin'+'g:4px'+_0x3929e3(0x326)+'curso'+_0x3929e3(0x30d)+'nter;'+'\x22>x</'+'butto'+'n>')+_0x5f5962[_0x3929e3(0x1c7)],_0x5f5962[_0x3929e3(0x316)]),_0x5f5962['jyhGR']),_0x5f5962['FwdWO'])+(_0x3929e3(0x32d)+'>'),_0x5f5962[_0x3929e3(0x2ac)])+('max-h'+_0x3929e3(0x17d)+':62vh'+_0x3929e3(0x21f)+'\x20repo'+'rt\x20ye'+'t.\x0a\x0aT'+'his\x20p'+'anel\x20'+_0x3929e3(0x170)+'es\x20it'+_0x3929e3(0x45a)+_0x3929e3(0x193)+'the\x20g'+_0x3929e3(0x424)+'rame\x20'+'loads'+'\x20—\x20no'+'\x20cons'+_0x3929e3(0x26d)+_0x3929e3(0x44d)+'.\x0a\x0aIf'+'\x20it\x20s'+_0x3929e3(0x180)+'empty'+_0x3929e3(0x3a0)+_0x3929e3(0x234)+'nkey\x20'+_0x3929e3(0x207)+_0x3929e3(0x3a6)+_0x3929e3(0xfc)+_0x3929e3(0x1b3)+'o\x20the'+'\x20cros'+_0x3929e3(0x13f)+_0x3929e3(0x435)+'ame\x20f'+'rame.'+'</pre'+'>');var _0x38692a=_0x1898b9[_0x3929e3(0x236)+_0x3929e3(0x392)+'tor'](_0x5f5962[_0x3929e3(0x288)]),_0x38e022=_0x1898b9[_0x3929e3(0x236)+_0x3929e3(0x392)+_0x3929e3(0x1b2)]('#sw2-'+_0x3929e3(0x410)),_0x2b3e93=_0x1898b9['query'+'Selec'+_0x3929e3(0x1b2)](_0x3929e3(0x121)+_0x3929e3(0x2c1)),_0x35738d=_0x1898b9['query'+'Selec'+_0x3929e3(0x1b2)](_0x3929e3(0x121)+'x'),_0x3deaf3=_0x1898b9[_0x3929e3(0x236)+_0x3929e3(0x392)+_0x3929e3(0x1b2)](_0x3929e3(0x121)+_0x3929e3(0x1d8)),_0x4d77dd=_0x1898b9[_0x3929e3(0x236)+_0x3929e3(0x392)+_0x3929e3(0x1b2)](_0x5f5962['sjgtQ']),_0x4f4081=null;if(_0x35738d)_0x35738d[_0x3929e3(0x1e9)+'ck']=function(){var _0x3df234=_0x3929e3;try{_0x1898b9[_0x3df234(0x34c)+'e']();}catch(_0x232bf2){}};if(_0x3deaf3)_0x3deaf3[_0x3929e3(0x1e9)+'ck']=function(){var _0x135393=_0x3929e3,_0x2b017b={'oJpzf':function(_0x513645){return _0x513645();},'wxfFG':function(_0x502664,_0x325ab1){return _0x502664-_0x325ab1;}};if(_0x135393(0x425)!==_0x5bebf9['LzxyD'])_0x5bebf9['ukXAh'](_0x778bf4,'snaps'+'hot');else try{return _0x2b017b[_0x135393(0x1ab)](_0x959378);}catch(_0x418283){return{'version':_0x2dcd28,'when':new _0x596d1e()[_0x135393(0x343)+_0x135393(0x26e)+'g'](),'elapsedMs':_0x2b017b['wxfFG'](_0x13cab2[_0x135393(0x36a)](),_0x56ab78),'host':_0x20829d,'uwmk':!!(_0x236ac5[_0x135393(0x200)+_0x135393(0x206)+_0x135393(0x29f)]&&_0x1063b3[_0x135393(0x200)+'WebMo'+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x3a77ba,'hooksTotal':_0x51957a['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x45dd54(_0x418283&&_0x418283[_0x135393(0x40f)+'ge']||_0x418283)};}};if(_0x2b3e93)_0x2b3e93[_0x3929e3(0x1e9)+'ck']=function(){var _0x9b42ba=_0x3929e3,_0x178d1e={'rCpOL':_0x9b42ba(0x2c1)},_0x2b25c4=_0x5bebf9[_0x9b42ba(0x276)](_0x5bebf9[_0x9b42ba(0x252)](_0x8c722b,'\x0a'),_0x4f4081?JSON[_0x9b42ba(0x3a4)+_0x9b42ba(0x2d4)](_0x4f4081,null,0x4*-0x543+0x20de+0x5*-0x25d):'')+'\x0a'+_0x4c80b5,_0x360866=function(){var _0x259f6a=_0x9b42ba;if(_0x2b3e93)_0x2b3e93[_0x259f6a(0x422)+_0x259f6a(0x2aa)+'t']=_0x259f6a(0x2b2)+'d';};if(navigator['clipb'+_0x9b42ba(0x447)]&&navigator[_0x9b42ba(0x32f)+_0x9b42ba(0x447)]['write'+'Text'])navigator['clipb'+'oard']['write'+_0x9b42ba(0x328)](_0x2b25c4)[_0x9b42ba(0x104)](_0x360866,function(){_0x34ac1e();});else _0x34ac1e();function _0x34ac1e(){var _0x52aa12=_0x9b42ba,_0x46fb04=document['creat'+'eElem'+_0x52aa12(0x12c)]('texta'+_0x52aa12(0x19b));_0x46fb04['value']=_0x2b25c4;if(!document[_0x52aa12(0x23b)])return;document['body'][_0x52aa12(0x2bb)+_0x52aa12(0x24d)+'d'](_0x46fb04),_0x46fb04[_0x52aa12(0x39e)+'t']();try{document['execC'+_0x52aa12(0x2dd)+'d'](_0x178d1e[_0x52aa12(0x458)]),_0x360866();}catch(_0x5264c4){}_0x46fb04[_0x52aa12(0x34c)+'e']();}};setTimeout(function(){var _0x33438c=_0x3929e3;if(_0x4f4081)return;if(!_0x38692a||!_0x38e022)return;_0x38692a['textC'+'onten'+'t']=_0x5bebf9[_0x33438c(0x43f)],_0x38692a[_0x33438c(0x393)][_0x33438c(0x27c)]=_0x5bebf9[_0x33438c(0x197)],_0x38e022[_0x33438c(0x422)+'onten'+'t']=_0x5bebf9[_0x33438c(0x223)](_0x5bebf9[_0x33438c(0x1cb)](_0x5bebf9[_0x33438c(0x280)],_0x5bebf9[_0x33438c(0x39b)])+_0x5bebf9[_0x33438c(0x1f2)]+('\x20\x201.\x20'+'Tampe'+'rmonk'+'ey\x20is'+'\x20not\x20'+_0x33438c(0x1df)+_0x33438c(0x32e)+_0x33438c(0x411)+_0x33438c(0x3ba)+_0x33438c(0x196)+_0x33438c(0x227)+_0x33438c(0x45f)+'ame.\x0a'),_0x33438c(0x452)+'The\x20p'+_0x33438c(0x12a)+'as\x20no'+'t\x20bee'+'n\x20rel'+_0x33438c(0x262)+_0x33438c(0x453)+_0x33438c(0x1bc)+_0x33438c(0x1c8)+_0x33438c(0x176))+(_0x33438c(0x29c)+'Both\x20'+'sakur'+_0x33438c(0x2cb)+_0x33438c(0x36b)+'z.use'+_0x33438c(0x226)+_0x33438c(0x1fe)+'he\x20ol'+'d\x20dia'+_0x33438c(0x3c5)+'ipt\x20a'+_0x33438c(0x3e3))+_0x5bebf9['VXLWe']+(_0x33438c(0x1b4)+_0x33438c(0xf2)+_0x33438c(0x3c0)+'\x20page'+_0x33438c(0x155)+_0x33438c(0x3c3)+'watch'+_0x33438c(0x182)+_0x33438c(0x2a7)+'l\x20aga'+_0x33438c(0xea));},-0x45d*0x67+0x4996*0x6+-0x1*-0xf247);var _0x11fb55={'set':function(_0x10464d){var _0x2c8dec=_0x3929e3,_0x169d8f={'PAoeD':_0x2c8dec(0x345)+_0x2c8dec(0x292)+'eateP'+'lugin'+_0x2c8dec(0x140)+'ailab'+'le','NsSWF':_0x2c8dec(0x3bf)+'a-ski'+_0x2c8dec(0x36b)+'z','MTCEY':function(_0x11174b,_0x44f8f2){return _0x11174b+_0x44f8f2;},'DhCjX':_0x2c8dec(0x28d)+'\x20heap'+_0x2c8dec(0x3cd)+'0x'};_0x4f4081=_0x10464d;if(_0x2b3e93)_0x2b3e93[_0x2c8dec(0x393)][_0x2c8dec(0x2de)+'ay']='';var _0x47365f=_0x10464d[_0x2c8dec(0x162)+_0x2c8dec(0x2e4)]&&_0x10464d[_0x2c8dec(0x162)+_0x2c8dec(0x2e4)][_0x2c8dec(0x446)+_0x2c8dec(0x3b6)+'ler'],_0x3ea9ea=Math[_0x2c8dec(0x26c)]((_0x10464d['elaps'+'edMs']||-0x79+0xbc1*0x1+-0xb48)/(0x24fe+-0x1*-0x2079+-0x418f));if(_0x38692a){if(_0x5f5962['vaxLm']('dyvPW',_0x2c8dec(0x118))){var _0x238153,_0x1e609a;if(_0x47365f&&_0x10464d[_0x2c8dec(0xf0)+'y']&&_0x10464d[_0x2c8dec(0xf0)+'y']['FPSco'+'ntrol'+'ler']){if(_0x2c8dec(0x18c)!==_0x2c8dec(0x18c)){if(_0x29cadf[_0x2c8dec(0x1a8)+'t']&&_0x162284['paren'+'t']!==_0x59a386)_0x19c4a8[_0x2c8dec(0x1a8)+'t'][_0x2c8dec(0x273)+_0x2c8dec(0x120)+'e'](_0x5bd263,'*');}else _0x238153=_0x5f5962['QlwNd'](_0x5f5962[_0x2c8dec(0x2dc)](_0x2c8dec(0x230)+'·\x20',Object['keys'](_0x10464d['insta'+'nces'])[_0x2c8dec(0x455)+'h'])+(_0x2c8dec(0x1e2)+_0x2c8dec(0x1ed)+'\x20')+_0x3ea9ea,'s'),_0x1e609a=_0x5f5962['nKHut'];}else{if(_0x5f5962['Cgmjq'](_0x10464d[_0x2c8dec(0x383)+'Appli'+'ed'],-0x2526+0x2*0x5d9+-0x16a*-0x12)){if(_0x5f5962[_0x2c8dec(0x428)]===_0x5f5962[_0x2c8dec(0x407)]){var _0x160f4d=arguments[_0x4cac3c];if(typeof _0x160f4d==='strin'+'g')_0x5a4f6c+=_0x160f4d;else{if(_0x160f4d&&_0x160f4d['messa'+'ge'])_0x3a5d20+=_0x160f4d['messa'+'ge'];}}else _0x238153=_0x5f5962[_0x2c8dec(0x400)]('hooks'+'\x20arme'+'d\x20·\x20',_0x3ea9ea)+'s',_0x1e609a=_0x5f5962[_0x2c8dec(0x224)];}else _0x10464d[_0x2c8dec(0x459)+_0x2c8dec(0x2be)]?(_0x238153='metad'+'ata\x20r'+'eady\x20'+'·\x20'+_0x3ea9ea+'s',_0x1e609a=_0x5f5962[_0x2c8dec(0x224)]):(_0x238153=(_0x10464d[_0x2c8dec(0x299)]&&_0x10464d[_0x2c8dec(0x299)]['ok']?_0x5f5962[_0x2c8dec(0x3d3)]:_0x2c8dec(0x337)+_0x2c8dec(0x320))+_0x3ea9ea+'s',_0x1e609a=_0x2c8dec(0x39d)+'8a');}_0x38692a['textC'+'onten'+'t']=_0x238153,_0x38692a[_0x2c8dec(0x393)][_0x2c8dec(0x27c)]=_0x1e609a;}else return _0x5cfea6[_0x2c8dec(0x3e5)+'e']=_0x2c8dec(0x439)+_0x2c8dec(0x34e)+_0x2c8dec(0x35c)+_0x2c8dec(0x11d)+_0x2c8dec(0x41c)+'me()',_0x49615d;}if(_0x4d77dd){if(_0x5f5962[_0x2c8dec(0x187)]('uYbzj',_0x5f5962[_0x2c8dec(0x334)]))_0x4d77dd[_0x2c8dec(0x422)+'onten'+'t']=_0x10464d[_0x2c8dec(0x3ac)]&&_0x10464d['diff'][_0x2c8dec(0x455)+'h']?'Diff\x20'+'vs\x20sn'+_0x2c8dec(0x13e)+'t:\x20'+_0x10464d[_0x2c8dec(0x3ac)][_0x2c8dec(0x3c4)](',\x20'):_0x5f5962[_0x2c8dec(0x408)];else try{var _0x293d38=_0x932766['Unity'+'WebMo'+_0x2c8dec(0x29f)]&&_0x339ab1[_0x2c8dec(0x200)+'WebMo'+_0x2c8dec(0x29f)][_0x2c8dec(0x345)+'me'];if(!_0x293d38||typeof _0x293d38['creat'+'ePlug'+'in']!==_0x2c8dec(0x294)+_0x2c8dec(0x405)){_0x122174[_0x2c8dec(0x396)]=_0x169d8f[_0x2c8dec(0x310)];return;}_0x56c626[_0x2c8dec(0x430)+'pted']=!![],_0x1e288c=_0x293d38[_0x2c8dec(0xeb)+_0x2c8dec(0x1e1)+'in']({'name':_0x169d8f[_0x2c8dec(0x2a1)],'version':_0x2972f2,'referencedAssemblies':_0x2dde44[_0x2c8dec(0x163)]()}),_0x1fc0d7['ok']=!![],_0x558526(),_0x492e86[_0x2c8dec(0x383)+_0x2c8dec(0x3de)+'tered']=_0x5abc0b['lengt'+'h'];}catch(_0x93eb29){_0x288b69['error']=_0xbf0b81(_0x93eb29&&_0x93eb29[_0x2c8dec(0x40f)+'ge']||_0x93eb29);}}if(_0x38e022)try{_0x38e022[_0x2c8dec(0x422)+_0x2c8dec(0x2aa)+'t']=_0x1acbd5(_0x10464d);}catch(_0x4a2eba){if(_0x5f5962[_0x2c8dec(0x187)](_0x2c8dec(0x3ed),_0x5f5962[_0x2c8dec(0x228)]))_0x38e022['textC'+'onten'+'t']=JSON[_0x2c8dec(0x3a4)+_0x2c8dec(0x2d4)](_0x10464d,null,0x515+-0x3*-0xc29+-0x298f);else return _0x44a7ad[_0x2c8dec(0x248)+'d']++,_0x72d6c5['lastE'+'rror']=_0x23a0e9[_0x2c8dec(0x3d1)+_0x2c8dec(0x24f)]||_0x169d8f[_0x2c8dec(0x2bf)](_0x2c8dec(0x241)+'ss\x200x'+_0x51f9f1[_0x2c8dec(0x16b)+_0x2c8dec(0x442)](0x1a86+0x26d*0x1+-0x57*0x55)+_0x169d8f[_0x2c8dec(0x307)],_0x44c8db[_0x2c8dec(0xf7)+'ength'][_0x2c8dec(0x16b)+'ing'](-0x7bb*0x4+-0x45*-0x31+-0x29*-0x6f)),_0x5456aa;}console[_0x2c8dec(0x3fd)]('%c[sa'+_0x2c8dec(0x2fb)+_0x2c8dec(0x1a2)+_0x2c8dec(0x1a9)+_0x2c8dec(0x23d)+'rt','color'+':'+_0x2bd5ae+(';font'+'-weig'+'ht:70'+'0'),_0x10464d),console['log'](_0x5f5962[_0x2c8dec(0x400)](_0x5f5962[_0x2c8dec(0x1af)](_0x8c722b+'\x0a',JSON[_0x2c8dec(0x3a4)+'gify'](_0x10464d,null,0x5*-0x2d7+-0x8*0x3e6+0x2d64)),'\x0a')+_0x4c80b5);}};return _0x1898b9[_0x3929e3(0x11f)+'et'][_0x3929e3(0x388)]='1',_0x1898b9[_0x3929e3(0x388)]=_0x11fb55,_0x11fb55;}function _0x1acbd5(_0x531f18){var _0x2a1258=_0x15a8a6,_0x5437b5={'tEXnU':_0x2a1258(0x383)+_0x2a1258(0x153)+_0x2a1258(0x2da)},_0x4ba815=[];_0x4ba815[_0x2a1258(0x3a7)](_0x5f5962[_0x2a1258(0x372)](_0x5f5962['KRKxn']('frame'+_0x2a1258(0x2d3)+(_0x531f18[_0x2a1258(0x20e)]||'?')+_0x2a1258(0x3e1),Math[_0x2a1258(0x26c)]((_0x531f18[_0x2a1258(0x3a1)+'edMs']||0x293*0x1+0x48*0x6c+-0x20f3*0x1)/(0x2553+0x624+-0x278f))),'s)')),_0x4ba815[_0x2a1258(0x3a7)](_0x5f5962[_0x2a1258(0x101)](_0x2a1258(0x1d9)+'\x20\x20\x20\x20',_0x531f18['uwmk']?_0x5f5962[_0x2a1258(0x278)]:'no')+(_0x2a1258(0x1bb)+_0x2a1258(0x2c5)+'\x20')+(_0x531f18[_0x2a1258(0x281)+_0x2a1258(0xf3)+_0x2a1258(0x30a)]?_0x2a1258(0x139):'no')+_0x5f5962[_0x2a1258(0x131)]+(_0x531f18[_0x2a1258(0x246)+'ount']!=null?_0x531f18[_0x2a1258(0x246)+'ount']:'?')),_0x4ba815['push'](_0x5f5962[_0x2a1258(0x372)](_0x2a1258(0x383)+_0x2a1258(0x2d3),_0x531f18[_0x2a1258(0x383)+_0x2a1258(0x147)+'ed'])+'/'+_0x531f18['hooks'+_0x2a1258(0x251)]+('\x20appl'+_0x2a1258(0x192))),_0x4ba815[_0x2a1258(0x3a7)]('');var _0x4a4777=_0x531f18['insta'+_0x2a1258(0x2e4)]||{},_0x5eaa49=Object['keys'](_0x4a4777);if(!_0x5eaa49['lengt'+'h']){if(_0x2a1258(0x3c7)===_0x5f5962['bnZzV'])return _0x49b2bc[0x82e+0x27c+-0xaaa]=_0x5d0206,_0x3eee21[0x2109+0x8*0x283+-0x3521];else _0x4ba815['push']('no\x20li'+'ve\x20ob'+_0x2a1258(0x12e)+_0x2a1258(0x27b)+_0x2a1258(0x308)+_0x2a1258(0x3e7)),_0x4ba815[_0x2a1258(0x3a7)](''),_0x4ba815[_0x2a1258(0x3a7)](_0x2a1258(0x143)+_0x2a1258(0x45d)+'fire\x20'+_0x2a1258(0x13d)+'e\x20gam'+'e\x27s\x20o'+'wn\x20Up'+'date('+');\x20no'+_0x2a1258(0x204)+'\x20capt'+_0x2a1258(0x308)+_0x2a1258(0x329)),_0x4ba815[_0x2a1258(0x3a7)](_0x5f5962['RzAqk']);}for(var _0x15eb09=0x149+-0x2352+0x2209;_0x5f5962[_0x2a1258(0x174)](_0x15eb09,_0x5eaa49[_0x2a1258(0x455)+'h']);_0x15eb09++){if(_0x5f5962[_0x2a1258(0xe2)](_0x2a1258(0x154),_0x2a1258(0x42f)))_0x19a6b0=_0x5437b5[_0x2a1258(0x1c2)]+_0x3d049d+'s',_0x447367='#ffd4'+'8a';else{var _0x47228b=_0x5eaa49[_0x15eb09];_0x4ba815['push'](_0x47228b+_0x5f5962['zrSce']+_0x4a4777[_0x47228b]);}}_0x4ba815[_0x2a1258(0x3a7)]('');var _0x3eb935=_0x531f18[_0x2a1258(0xf0)+'y']||{},_0xddb5b4=Object['keys'](_0x3eb935);for(var _0x2a1703=0x8*0x331+0x7cb+-0x2153;_0x2a1703<_0xddb5b4[_0x2a1258(0x455)+'h'];_0x2a1703++){if(_0x5f5962[_0x2a1258(0x1f8)](_0x5f5962[_0x2a1258(0x36f)],_0x5f5962['MgRTF'])){var _0x3f6f86=_0xddb5b4[_0x2a1703],_0x2c9580=_0x3eb935[_0x3f6f86];if(!_0x2c9580||!_0x2c9580['lengt'+'h'])continue;_0x4ba815[_0x2a1258(0x3a7)](_0x5f5962['ZAXVX'](_0x5f5962['ZAXVX'](_0x2a1258(0x201),_0x3f6f86),'\x20')+new Array(Math[_0x2a1258(0x19c)](0xc5e*-0x1+0xa1*0x35+-0x1*0x14f6,_0x5f5962['VyYYf'](-0x26b0+0x5f8*-0x1+-0x2cca*-0x1,_0x3f6f86['lengt'+'h'])))['join']('─')),_0x4ba815[_0x2a1258(0x3a7)](_0x5f5962[_0x2a1258(0x3da)]);for(var _0x342a88=-0xa7*-0x2+-0x1e9d+0x1d4f;_0x5f5962['kBoMW'](_0x342a88,_0x2c9580[_0x2a1258(0x455)+'h']);_0x342a88++){var _0x5ad566=_0x2c9580[_0x342a88],_0x57a0ee=typeof _0x5ad566['v']===_0x5f5962[_0x2a1258(0x2c2)]?_0x5f5962[_0x2a1258(0x3ee)](Math[_0x2a1258(0x26c)](_0x5ad566['v']*(0x7*0x547+-0x4*0x3bd+0x1*-0x1215)),-0x1b44+0xaa2+0x148a):_0x5ad566['v'];_0x4ba815[_0x2a1258(0x3a7)](_0x5f5962['aFWLh'](_0x5f5962[_0x2a1258(0x351)]('\x20\x20',_0x5f5962['QKYCj']('0x',_0x5ad566['o']['toStr'+_0x2a1258(0x442)](-0x219c+-0xb78+-0x6c*-0x6b))[_0x2a1258(0x2b9)+'d'](0xcd0+-0x172b+-0x1*-0xa63))+'\x20'+_0x5ad566['k'][_0x2a1258(0x2b9)+'d'](-0x25f7+0x1*-0x9d+0x1*0x269f)+'\x20'+String(_0x57a0ee)[_0x2a1258(0x2b9)+'d'](0x1b24+0x17f6+0x2f*-0x116),'\x20')+(_0x5ad566[_0x2a1258(0x3f3)]||''));}_0x4ba815['push']('');}else{var _0x4b623f=_0x49b850[_0x2a1258(0xeb)+_0x2a1258(0x2f1)+'ent'](_0x5f5962[_0x2a1258(0x2b0)]);_0x4b623f[_0x2a1258(0xf4)]=_0x14e611;if(!_0x85adf8['body'])return;_0x192663['body'][_0x2a1258(0x2bb)+'dChil'+'d'](_0x4b623f),_0x4b623f[_0x2a1258(0x39e)+'t']();try{_0x81a087['execC'+'omman'+'d']('copy'),_0x266b89();}catch(_0x2c3ede){}_0x4b623f[_0x2a1258(0x34c)+'e']();}}if(_0x531f18[_0x2a1258(0x2a6)+_0x2a1258(0x1c6)]&&_0x531f18['warni'+'ngs']['lengt'+'h']){_0x4ba815['push'](_0x2a1258(0x2a6)+_0x2a1258(0x1c6));for(var _0x551a3b=0xd*-0x293+0x4*-0xd0+0x24b7;_0x551a3b<_0x531f18['warni'+'ngs']['lengt'+'h'];_0x551a3b++)_0x4ba815[_0x2a1258(0x3a7)](_0x2a1258(0x159)+_0x531f18['warni'+_0x2a1258(0x1c6)][_0x551a3b]);}return _0x4ba815[_0x2a1258(0x3c4)]('\x0a');}window['addEv'+_0x15a8a6(0x1a6)+'stene'+'r'](_0x5f5962[_0x15a8a6(0x1f4)],function(_0x54936f){var _0x54628a=_0x15a8a6,_0x297c51=_0x54936f[_0x54628a(0x42e)];if(!_0x297c51||_0x297c51['__sak'+'ura']!==_0x3b5605)return;try{if(_0x297c51[_0x54628a(0x468)]===_0x5f5962['CPxDU']){_0x47f273()['set']({'host':_0x297c51['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x5f5962['MdDhh'](_0x297c51[_0x54628a(0x468)],_0x5f5962[_0x54628a(0x134)]))_0x47f273()['set'](_0x297c51['repor'+'t']);}catch(_0x56402c){console[_0x54628a(0x460)](_0x54628a(0x233)+'kura]'+_0x54628a(0x2a7)+'l\x20upd'+'ate\x20f'+_0x54628a(0x1dc),'color'+':'+_0x2bd5ae,_0x56402c);}});if(document[_0x15a8a6(0x23b)])_0x47f273();else document['addEv'+'entLi'+_0x15a8a6(0x1e3)+'r'](_0x15a8a6(0x1a4)+_0x15a8a6(0x348)+'Loade'+'d',_0x47f273,{'once':!![]});return;}window['__SAK'+_0x15a8a6(0x28f)+_0x15a8a6(0x171)]=window['__SAK'+_0x15a8a6(0x28f)+_0x15a8a6(0x171)]||{'at':Date[_0x15a8a6(0x36a)]()};function _0x1b7acd(_0x32a876,_0x6b2c20){var _0x16a427=_0x15a8a6,_0x512123={'__sakura':_0x3b5605,'kind':_0x32a876};if(_0x6b2c20){for(var _0xe20022 in _0x6b2c20)_0x512123[_0xe20022]=_0x6b2c20[_0xe20022];}try{if(window[_0x16a427(0x1a8)+'t']&&window[_0x16a427(0x1a8)+'t']!==window)window['paren'+'t'][_0x16a427(0x273)+_0x16a427(0x120)+'e'](_0x512123,'*');}catch(_0x1fdd99){}try{if(window[_0x16a427(0x2e9)]&&window['top']!==window)window['top'][_0x16a427(0x273)+'essag'+'e'](_0x512123,'*');}catch(_0x150c7c){}}console[_0x15a8a6(0x3fd)](_0x15a8a6(0x233)+'kura]'+'\x20SW-P'+_0x15a8a6(0xec)+_0x15a8a6(0x304)+'VE',_0x5f5962[_0x15a8a6(0x19f)](_0x15a8a6(0x27c)+':',_0x2bd5ae)+_0x5f5962[_0x15a8a6(0x40e)],{'host':_0x2ff23e,'href':location[_0x15a8a6(0x29e)]}),_0x1b7acd(_0x5f5962['CPxDU'],{'host':_0x2ff23e,'role':_0x1ac922});var _0xe3dd93=window[_0x15a8a6(0x10f)+_0x15a8a6(0x28f)+_0x15a8a6(0x171)]&&window[_0x15a8a6(0x10f)+_0x15a8a6(0x28f)+_0x15a8a6(0x171)]['at']||Date['now']();try{var _0x5d5f57=new BroadcastChannel(_0x5f5962[_0x15a8a6(0x210)]);_0x5d5f57[_0x15a8a6(0x2d5)+_0x15a8a6(0x113)]=function(_0x4407b4){var _0x33450a=_0x15a8a6,_0xc8c53=_0x4407b4[_0x33450a(0x42e)];if(_0xc8c53&&_0x5f5962['vaxLm'](_0xc8c53[_0x33450a(0x31d)+_0x33450a(0x306)],_0x3b5605)&&_0xc8c53[_0x33450a(0x468)]===_0x33450a(0x16e))_0x550aa8(_0xc8c53['cmd'],_0xc8c53['arg']);};}catch(_0x59055b){}var _0x6cca34=[];(function _0x2e6ab5(){var _0x549f87=_0x15a8a6,_0x4fb813={'CdOQb':function(_0x51e20a,_0xd55dc){var _0x523351=_0x3166;return _0x5f5962[_0x523351(0x1ff)](_0x51e20a,_0xd55dc);},'QmsPd':_0x549f87(0x2ce)+_0x549f87(0x2f3),'jMVCc':function(_0x2b76e3,_0x144e30){return _0x2b76e3(_0x144e30);},'kEcuv':function(_0x1f17a6){return _0x1f17a6();},'ZqtAf':'repor'+'t','DOqbz':function(_0x29ee8d,_0x66d2e){return _0x5f5962['OYgnm'](_0x29ee8d,_0x66d2e);},'JHemM':'CaWNm','NBsmU':function(_0x1bcdc9,_0x1f871b){return _0x1bcdc9<_0x1f871b;},'KHMnW':_0x549f87(0x3a4)+'g','VHQWc':function(_0x39086a,_0x1f54b3){return _0x5f5962['nrlpM'](_0x39086a,_0x1f54b3);},'gmqyu':_0x5f5962[_0x549f87(0x42d)]},_0x2d82cb=['log','warn',_0x549f87(0x396),'info',_0x549f87(0x14c)];for(var _0x57d88f=-0x2673+0x1*0x1733+0xf40;_0x5f5962['kBoMW'](_0x57d88f,_0x2d82cb[_0x549f87(0x455)+'h']);_0x57d88f++){_0x5f5962[_0x549f87(0xe2)](_0x549f87(0x21d),'NDkXZ')?function(_0xcc317){var _0x11922f=_0x549f87,_0x56e453={'uanTf':_0x11922f(0x39d)+'8a'};if(_0x5f5962[_0x11922f(0x25a)](_0x11922f(0x2e5),_0x5f5962[_0x11922f(0x21c)]))_0x25fdba=_0x11922f(0x20a)+'ata\x20r'+_0x11922f(0x24c)+'·\x20'+_0x23b7f9+'s',_0x4fd646=_0x56e453[_0x11922f(0x2d6)];else{var _0x9ec494=console[_0xcc317];if(typeof _0x9ec494!==_0x11922f(0x294)+'ion')return;console[_0xcc317]=function(){var _0x158d26=_0x11922f,_0x2767b2={'jJGRw':function(_0x229930,_0x5528df){var _0x5ed62f=_0x3166;return _0x4fb813[_0x5ed62f(0x265)](_0x229930,_0x5528df);},'zZzQr':_0x4fb813['QmsPd'],'Nvfoh':function(_0x58c465,_0xea9bb4){var _0x4f77a4=_0x3166;return _0x4fb813[_0x4f77a4(0x2c3)](_0x58c465,_0xea9bb4);},'tzKUq':function(_0x53c336,_0x51d552,_0x230b13){return _0x53c336(_0x51d552,_0x230b13);},'yaAcr':function(_0x54c5d6){var _0x314c8d=_0x3166;return _0x4fb813[_0x314c8d(0x2ca)](_0x54c5d6);},'QfrbO':function(_0x55bcfb,_0x59f6aa){return _0x55bcfb!==_0x59f6aa;},'fUhOx':function(_0x15f36e,_0x45f050){return _0x15f36e+_0x45f050;},'NbVEl':_0x4fb813['ZqtAf']};if(_0x4fb813[_0x158d26(0x1c9)](_0x158d26(0x309),_0x4fb813[_0x158d26(0x2b6)])){try{if(_0x4fb813[_0x158d26(0x1c9)]('OgeLA',_0x158d26(0x13c))){var _0x394c85='';for(var _0xbf745f=0x9*0x366+0xec*0x1f+-0x3b2a;_0x4fb813[_0x158d26(0x3ff)](_0xbf745f,arguments['lengt'+'h']);_0xbf745f++){var _0x1f5495=arguments[_0xbf745f];if(typeof _0x1f5495===_0x4fb813['KHMnW'])_0x394c85+=_0x1f5495;else{if(_0x1f5495&&_0x1f5495['messa'+'ge'])_0x394c85+=_0x1f5495['messa'+'ge'];}}if(_0x394c85['index'+'Of'](_0x158d26(0x200)+'WebMo'+_0x158d26(0x29f))!==-(0xc*0x217+-0x3a2*-0x8+0x3623*-0x1)&&_0x6cca34[_0x158d26(0x455)+'h']<0x2193+0xd02+-0x1*0x2e59)_0x6cca34[_0x158d26(0x3a7)](_0x394c85['slice'](0x1*-0xef9+0x17f*-0xc+0x20ed,0xbea+0x202d+-0x2aeb));}else _0x13e12a['error']=_0x2767b2['jJGRw'](_0x26cc41,_0xccdcc6&&_0x3c3fdf['messa'+'ge']||_0x147374);}catch(_0x4bb369){}return _0x9ec494['apply'](console,arguments);}else{if(_0x461afa!==_0x2767b2['zZzQr'])return;var _0x757bb2=_0x15b791(),_0x485716=_0x2767b2['Nvfoh'](_0x2a956e,_0x757bb2);if(!_0x195412){_0xd9eed8=_0x485716,_0x79dadb=[],_0x2767b2[_0x158d26(0x1f0)](_0x12cd96,_0x158d26(0x238)+'t',{'report':_0x2767b2[_0x158d26(0x3c8)](_0xf1418f)});return;}_0x96f515=[];for(var _0x5fc584 in _0x485716){var _0x1f641f=_0x57f344[_0x5fc584],_0x7261ef=_0x485716[_0x5fc584];if(_0x2767b2[_0x158d26(0x161)](_0x1f641f,_0x7261ef))_0xeb0098[_0x158d26(0x3a7)](_0x2767b2[_0x158d26(0x45e)](_0x5fc584,':\x20')+_0x1f641f+_0x158d26(0x28a)+_0x7261ef);}_0x30e6fb=_0x485716,_0x2767b2[_0x158d26(0x1f0)](_0x50e249,_0x2767b2[_0x158d26(0x454)],{'report':_0x562266()});}};}}(_0x2d82cb[_0x57d88f]):_0x3639eb['warni'+'ngs'][_0x549f87(0x3a7)](_0x4fb813['VHQWc']('UWMK\x20'+_0x549f87(0x3ec)+_0x549f87(0x3d6)+_0x473f1a[_0x549f87(0x383)+_0x549f87(0x355)+_0x549f87(0x177)]+_0x549f87(0x373)+_0x49a181['hooks'+_0x549f87(0x251)],_0x4fb813[_0x549f87(0x2f9)])+(_0x549f87(0x466)+',\x20Met'+_0x549f87(0x415)+'fo*)\x20'+_0x549f87(0x40d)+_0x549f87(0x469)+'es\x20no'+'t\x20mat'+_0x549f87(0x1d5)+'is\x20bu'+_0x549f87(0x10e)));}}());var _0x19df63={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x4764a8=_0x15a8a6(0x189),_0x3ea9b3=null,_0x4b671f=null,_0x5c6675={},_0x243733=[],_0x356e86=[],_0x30c4fd=[{'type':_0x5f5962[_0x15a8a6(0x42c)],'keep':!![]},{'type':_0x15a8a6(0x12b)+_0x15a8a6(0x429)+'pt','keep':!![]},{'type':_0x5f5962[_0x15a8a6(0x2cf)],'keep':![]},{'type':_0x15a8a6(0x38f)+_0x15a8a6(0x145)+'ager','keep':![]}],_0x47a3df=['Assem'+'bly-C'+_0x15a8a6(0x20b)+'.dll',_0x15a8a6(0x3f2)+'bly-C'+'Sharp'+'-firs'+_0x15a8a6(0x336)+_0x15a8a6(0x2d1),_0x5f5962['AInqp'],'cInpu'+'t.dll',_0x15a8a6(0x117)+_0x15a8a6(0x3f5)+_0x15a8a6(0x123)+_0x15a8a6(0x37d)+_0x15a8a6(0x2a9)+_0x15a8a6(0x266),_0x15a8a6(0xf9)+_0x15a8a6(0x14e)+'d'];(function _0x1e6dcd(){var _0x1e649e=_0x15a8a6,_0x4058d5={'DOTnN':function(_0x52461d,_0x158664){return _0x5f5962['VDDdL'](_0x52461d,_0x158664);},'gtdMl':'funct'+'ion','ccRQA':_0x5f5962['uKlcC'],'cYsnK':'sakur'+'a-ski'+_0x1e649e(0x36b)+'z'};if('jAIWv'==='jAIWv')try{var _0x2ababb=window[_0x1e649e(0x200)+_0x1e649e(0x206)+_0x1e649e(0x29f)]&&window[_0x1e649e(0x200)+_0x1e649e(0x206)+_0x1e649e(0x29f)]['Runti'+'me'];if(!_0x2ababb||typeof _0x2ababb['creat'+_0x1e649e(0x1e1)+'in']!=='funct'+_0x1e649e(0x405)){_0x19df63[_0x1e649e(0x396)]=_0x1e649e(0x345)+_0x1e649e(0x292)+_0x1e649e(0x286)+_0x1e649e(0x125)+_0x1e649e(0x140)+'ailab'+'le';return;}_0x19df63['attem'+'pted']=!![],_0x4b671f=_0x2ababb['creat'+_0x1e649e(0x1e1)+'in']({'name':_0x5f5962[_0x1e649e(0x32a)],'version':_0x4764a8,'referencedAssemblies':_0x47a3df['slice']()}),_0x19df63['ok']=!![],_0x3d04b6(),_0x19df63[_0x1e649e(0x383)+'Regis'+'tered']=_0x243733[_0x1e649e(0x455)+'h'];}catch(_0x3c7717){_0x19df63[_0x1e649e(0x396)]=String(_0x3c7717&&_0x3c7717[_0x1e649e(0x40f)+'ge']||_0x3c7717);}else{var _0x28f723=_0x52f4aa['Unity'+'WebMo'+_0x1e649e(0x29f)]&&_0x4a2074[_0x1e649e(0x200)+_0x1e649e(0x206)+'dkit']['Runti'+'me'];if(!_0x28f723||_0x4058d5[_0x1e649e(0x44e)](typeof _0x28f723[_0x1e649e(0xeb)+_0x1e649e(0x1e1)+'in'],_0x4058d5['gtdMl'])){_0x2caf95['error']=_0x4058d5[_0x1e649e(0x232)];return;}_0x317e9f['attem'+_0x1e649e(0x130)]=!![],_0x523e18=_0x28f723[_0x1e649e(0xeb)+_0x1e649e(0x1e1)+'in']({'name':_0x4058d5['cYsnK'],'version':_0x3294d0,'referencedAssemblies':_0x499828['slice']()}),_0x4873a7['ok']=!![],_0x3abc3f(),_0x2cd340['hooks'+_0x1e649e(0x3de)+_0x1e649e(0x1a7)]=_0xcf6cfd[_0x1e649e(0x455)+'h'];}}());var _0x6ccf82=new Float32Array(0x12c2+-0xedb+-0x3e6),_0x3121d4=new Int32Array(_0x6ccf82[_0x15a8a6(0x15b)+'r']);function _0x2bdc58(_0x3048a6){return _0x6ccf82[-0x2ad+0x1*0x1e01+0x27c*-0xb]=_0x3048a6,_0x3121d4[-0x2b*0x1+0x25d7+0x25ac*-0x1];}function _0x37bd67(_0x341d4c){return _0x3121d4[-0x460+-0x359+0x7b9]=_0x341d4c|0x20cb+0xff3*-0x1+-0x62*0x2c,_0x6ccf82[0xe87+-0x2*-0x196+-0x11b3];}var _0x5c2d1b={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0xd6843(){var _0x36bac1=_0x15a8a6;try{if(_0x4b671f&&_0x4b671f['_runt'+_0x36bac1(0x43d)]){var _0x2fff92=_0x4b671f['_runt'+_0x36bac1(0x43d)];if(_0x5f5962[_0x36bac1(0x1c3)](typeof _0x2fff92[_0x36bac1(0x3ec)+'veGam'+'e'],_0x5f5962['ZXTQj'])){var _0xe446c8=_0x2fff92[_0x36bac1(0x3ec)+'veGam'+'e']();if(_0xe446c8)return _0x5c2d1b[_0x36bac1(0x3e5)+'e']=_0x5f5962['OvAJM'],_0xe446c8;}if(_0x2fff92[_0x36bac1(0x268)])return _0x5c2d1b[_0x36bac1(0x3e5)+'e']=_0x36bac1(0x439)+'n._ru'+'ntime'+_0x36bac1(0x105)+'e',_0x2fff92[_0x36bac1(0x268)];}}catch(_0x1af2b3){}try{var _0x3dfffb=window[_0x36bac1(0x200)+_0x36bac1(0x206)+'dkit']&&window[_0x36bac1(0x200)+'WebMo'+_0x36bac1(0x29f)]['Runti'+'me'];if(_0x3dfffb&&typeof _0x3dfffb['resol'+'veGam'+'e']===_0x5f5962[_0x36bac1(0x412)]){var _0x56f030=_0x3dfffb[_0x36bac1(0x3ec)+'veGam'+'e']();if(_0x56f030)return _0x5c2d1b[_0x36bac1(0x3e5)+'e']='Runti'+_0x36bac1(0x16c)+_0x36bac1(0x335)+'Game('+')',_0x56f030;}if(_0x3dfffb&&_0x3dfffb[_0x36bac1(0x268)])return _0x5c2d1b[_0x36bac1(0x3e5)+'e']='Runti'+'me._g'+'ame',_0x3dfffb;}catch(_0x401cec){}try{if(_0x5f5962['EHedG'](_0x5f5962[_0x36bac1(0x362)],_0x36bac1(0x1fa))){var _0x1bc268=window[_0x36bac1(0x19e)+_0x36bac1(0x25b)+_0x36bac1(0x41f)]||window[_0x36bac1(0x19e)+_0x36bac1(0x2fc)]||window[_0x36bac1(0x3fb)];if(_0x1bc268)return'aKlwQ'===_0x5f5962['ymnhx']?(_0x5c2d1b['sourc'+'e']='windo'+_0x36bac1(0x450)+_0x36bac1(0x11a),_0x1bc268):{'version':_0xdd8659,'when':new _0x4e4889()['toISO'+'Strin'+'g'](),'elapsedMs':_0x5f5962[_0x36bac1(0x3b2)](_0x42038d['now'](),_0x16e06d),'host':_0x1eb648,'uwmk':!!(_0xc13e0f['Unity'+_0x36bac1(0x206)+_0x36bac1(0x29f)]&&_0x501a6a['Unity'+_0x36bac1(0x206)+_0x36bac1(0x29f)][_0x36bac1(0x345)+'me']),'il2CppContext':![],'arm':_0x1cbcf5,'hooksTotal':_0x43b9ee[_0x36bac1(0x455)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x329a87(_0x1a4b5c&&_0x567e6a['messa'+'ge']||_0x28da51)};}else _0x69a022['warn'](_0x5f5962[_0x36bac1(0x365)],_0x5f5962[_0x36bac1(0x3ce)](_0x5f5962['exwcc'],_0x27d56c),_0x12da94);}catch(_0x529714){}try{if(_0x5f5962['JyJsk'](typeof game,_0x5f5962[_0x36bac1(0x185)])&&game)return _0x5c2d1b[_0x36bac1(0x3e5)+'e']=_0x36bac1(0x158)+'game\x20'+_0x36bac1(0x13a)+'ng',game;}catch(_0x3fc254){}try{var _0x3af796=Object[_0x36bac1(0x2bc)](window);for(var _0x82bd9d=-0x1*-0x1f42+0xab*-0x1a+-0xde4;_0x82bd9d<_0x3af796[_0x36bac1(0x455)+'h']&&_0x5f5962[_0x36bac1(0x174)](_0x82bd9d,0x1bc4+-0x1c6b+-0xd*-0x3b);_0x82bd9d++){var _0x573a7b=window[_0x3af796[_0x82bd9d]];if(_0x573a7b&&_0x5f5962['EHedG'](typeof _0x573a7b,_0x5f5962[_0x36bac1(0x462)])&&_0x573a7b[_0x36bac1(0x190)+'e']&&_0x573a7b[_0x36bac1(0x190)+'e']['HEAPU'+'8']&&_0x573a7b[_0x36bac1(0x190)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x5c2d1b[_0x36bac1(0x3e5)+'e']=_0x5f5962['ISgdR'](_0x36bac1(0x38d)+'w.'+_0x3af796[_0x82bd9d],_0x36bac1(0x239)+'le'),_0x573a7b;}}catch(_0x5982cc){}return _0x5c2d1b[_0x36bac1(0x3e5)+'e']=null,null;}function _0x23991d(){var _0x37b730=_0x15a8a6,_0x56606a={'yNfFu':_0x37b730(0x1dd)};if(_0x5f5962[_0x37b730(0x25a)]('ItSoQ','ItSoQ'))return null;else{try{if(_0x37b730(0x38b)!==_0x5f5962['LnGzt']){var _0x14144b=_0x5f5962[_0x37b730(0x149)](_0xd6843);if(_0x14144b&&_0x14144b[_0x37b730(0x190)+'e']&&_0x14144b[_0x37b730(0x190)+'e'][_0x37b730(0x16a)+'8']&&_0x14144b['Modul'+'e']['HEAPU'+'8']['buffe'+'r'])return _0x14144b[_0x37b730(0x190)+'e']['HEAPU'+'8'];}else{var _0x40f4b7=_0x3ebfb8['hookP'+_0x37b730(0x2ae)]({'typeName':_0x1ce027[_0x37b730(0x353)],'methodName':_0x37b730(0xe8)+'e','params':[_0x56606a[_0x37b730(0x317)],'i32'],'returnType':_0x48fff7},_0xc1f5c5(_0x12b57f['type'],_0x699aac[_0x37b730(0x3e4)]));_0x422a58['push']({'type':_0x4c5950['type'],'hook':_0x40f4b7,'keep':_0x572770['keep']});}}catch(_0x212713){}return null;}}function _0x3db426(){var _0x39ebab=_0x15a8a6,_0x1abba3=_0x5f5962[_0x39ebab(0x242)](_0x23991d);if(!_0x1abba3)return null;try{return _0x39ebab(0x25d)!==_0x5f5962[_0x39ebab(0x2f8)]?new _0x318a9b(_0x5ac192[_0x39ebab(0x15b)+'r'],_0x4d6cda['byteO'+_0x39ebab(0x32c)],_0x581329[_0x39ebab(0xf7)+'ength']):new DataView(_0x1abba3['buffe'+'r'],_0x1abba3['byteO'+'ffset'],_0x1abba3['byteL'+'ength']);}catch(_0x26255f){return null;}}function _0x10314d(_0x5b8b2d,_0x49154b){var _0x4809c5=_0x15a8a6,_0x37d3bc=_0x3db426();if(!_0x37d3bc)return _0x5c2d1b['faile'+'d']++,_0x5c2d1b['lastE'+'rror']=_0x5c2d1b[_0x4809c5(0x3d1)+'rror']||_0x4809c5(0x437)+_0x4809c5(0x463)+_0x4809c5(0x17c)+'ty\x20in'+'stanc'+'e\x20not'+'\x20reac'+'hable'+'\x20via\x20'+'Runti'+'me.re'+_0x4809c5(0x335)+_0x4809c5(0x389)+')\x20or\x20'+'any\x20w'+'indow'+_0x4809c5(0x18b)+'al',undefined;if(_0x5b8b2d<0xc2+-0x214c+-0x46*-0x77||_0x5f5962[_0x4809c5(0x44a)](_0x5b8b2d,0x6cb*0x2+0x1e5*-0x13+-0x1*-0x166d)>_0x37d3bc['byteL'+'ength'])return _0x5c2d1b['faile'+'d']++,_0x5c2d1b[_0x4809c5(0x3d1)+_0x4809c5(0x24f)]=_0x5c2d1b['lastE'+_0x4809c5(0x24f)]||_0x5f5962[_0x4809c5(0x360)](_0x5f5962[_0x4809c5(0x14f)]+_0x5b8b2d['toStr'+_0x4809c5(0x442)](0x92+0x13d0+-0x1452),_0x4809c5(0x28d)+_0x4809c5(0x3e0)+'\x20end\x20'+'0x')+_0x37d3bc[_0x4809c5(0xf7)+_0x4809c5(0x254)]['toStr'+_0x4809c5(0x442)](0x3*-0x599+-0x977*0x2+0x23c9),undefined;try{_0x5c2d1b['ok']++;switch(_0x49154b){case'u8':return _0x37d3bc[_0x4809c5(0x403)+_0x4809c5(0x3c1)](_0x5b8b2d);case'i8':return _0x37d3bc[_0x4809c5(0x3a8)+'t8'](_0x5b8b2d);case _0x4809c5(0x222):return _0x37d3bc[_0x4809c5(0x3a8)+'t16'](_0x5b8b2d,!![]);case _0x5f5962[_0x4809c5(0x167)]:return _0x37d3bc['getUi'+'nt16'](_0x5b8b2d,!![]);case _0x4809c5(0x1dd):return _0x37d3bc['getIn'+'t32'](_0x5b8b2d,!![]);case'u32':return _0x37d3bc[_0x4809c5(0x403)+_0x4809c5(0x2c0)](_0x5b8b2d,!![]);case _0x5f5962['bxqKL']:return _0x37d3bc[_0x4809c5(0x394)+_0x4809c5(0x1e4)](_0x5b8b2d,!![]);case _0x5f5962['jOMwW']:return _0x37d3bc[_0x4809c5(0x394)+'oat64'](_0x5b8b2d,!![]);default:return _0x37d3bc[_0x4809c5(0x3a8)+_0x4809c5(0x208)](_0x5b8b2d,!![]);}}catch(_0x36e751){return _0x5c2d1b[_0x4809c5(0x248)+'d']++,_0x5c2d1b[_0x4809c5(0x3d1)+_0x4809c5(0x24f)]=_0x5c2d1b[_0x4809c5(0x3d1)+'rror']||String(_0x36e751&&_0x36e751[_0x4809c5(0x40f)+'ge']||_0x36e751)['slice'](0x23d4+-0x23de+0xa,-0x26a9+0x5*0x469+-0x88a*-0x2),undefined;}}function _0x257198(_0x2ba0fa,_0x18dd52,_0x4ab44e){var _0x4444ba=_0x15a8a6,_0x48ad39=_0x5f5962[_0x4444ba(0x149)](_0x3db426);if(!_0x48ad39||_0x2ba0fa<-0x19df+0x27+0x19b8||_0x5f5962[_0x4444ba(0x1af)](_0x2ba0fa,0x1e0d+0x3*0x88a+-0x62f*0x9)>_0x48ad39[_0x4444ba(0xf7)+_0x4444ba(0x254)])return![];try{switch(_0x18dd52){case'u8':case'i8':_0x48ad39['setUi'+_0x4444ba(0x3c1)](_0x2ba0fa,_0x4ab44e&0x19be+0x1*0x144+-0x1a03);break;case _0x4444ba(0x222):case _0x4444ba(0xe3):_0x48ad39[_0x4444ba(0x35d)+'t16'](_0x2ba0fa,_0x4ab44e|-0x11db+-0x110f*-0x1+-0x33*-0x4,!![]);break;case _0x5f5962['PjpXJ']:case _0x5f5962['FrVPK']:_0x48ad39['setIn'+'t32'](_0x2ba0fa,_0x5f5962[_0x4444ba(0x426)](_0x4ab44e,0x6b*0x1d+0x39*-0x17+0x7*-0x100),!![]);break;case _0x5f5962[_0x4444ba(0x291)]:_0x48ad39[_0x4444ba(0x399)+'oat32'](_0x2ba0fa,_0x4ab44e,!![]);break;default:_0x48ad39[_0x4444ba(0x35d)+_0x4444ba(0x208)](_0x2ba0fa,_0x5f5962[_0x4444ba(0x426)](_0x4ab44e,0x9eb*0x2+0x1054*0x1+-0x242a),!![]);}return!![];}catch(_0xf55e2c){if(_0x5f5962['tdlmj'](_0x4444ba(0x441),_0x4444ba(0x441)))return![];else _0x23e5c7[_0x4444ba(0x413)+_0x4444ba(0x136)]=![],_0x2825d0[_0x4444ba(0x209)+'8']=![],_0x14eaed['heapB'+_0x4444ba(0x379)]=-0x7*-0x125+-0x335+-0x4ce;}}var _0x75ec6={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa}};function _0x13da76(_0x100f28,_0xe05d13,_0x1d97f8){var _0x381e7b=_0x15a8a6,_0x34e52e=('13|6|'+_0x381e7b(0x414)+'11|8|'+_0x381e7b(0x3b5)+'|1|14'+_0x381e7b(0x451)+'|7|4')[_0x381e7b(0x313)]('|'),_0x53446e=0x16b6+-0x10db*-0x2+-0x9d*0x5c;while(!![]){switch(_0x34e52e[_0x53446e++]){case'0':if(_0x5f5962[_0x381e7b(0x152)](_0x4039cc,undefined)||_0x5f5962[_0x381e7b(0x427)](_0x3f61aa,undefined)||_0x5f5962[_0x381e7b(0x2a5)](_0x27a1c5,undefined)||_0x591836===undefined)return null;continue;case'1':_0x3f61aa|=-0x2248+0xa94+0x17b4;continue;case'2':_0x4039cc&=-0xb34+-0x19f8+0x262b;continue;case'3':var _0x591836=_0x10314d(_0x100f28+_0xe05d13+_0x4b5c01['activ'+'e'],'u8');continue;case'4':return{'real':_0x2ed8d7,'fake':_0x27a1c5,'act':_0x591836,'init':_0x4e1916,'key':_0x4039cc,'hidden':_0x3f61aa};case'5':var _0x2ed8d7;continue;case'6':if(!_0x4b5c01)return null;continue;case'7':if(_0x1d97f8===_0x381e7b(0x43c))_0x2ed8d7=_0x37bd67(_0x5f5962['IpAGp'](_0x3f61aa,_0x4039cc));else{if(_0x1d97f8===_0x5f5962[_0x381e7b(0x45c)])_0x2ed8d7=_0x3f61aa^_0x4039cc|0xa*0x341+0x1*-0x12c1+-0xdc9;else _0x2ed8d7=_0x5f5962[_0x381e7b(0x37f)](_0x5f5962['IpAGp'](_0x3f61aa,_0x4039cc),-0xf*-0x25+0x2052+-0x217e)!==0x2e6*0x1+-0x1182+-0x44*-0x37?-0x232f+0x2*-0x266+0x27fc:-0x9*-0x3ee+0x1e1a*0x1+0x5*-0xd18;}continue;case'8':var _0x27a1c5=_0x5f5962['qbxTG'](_0x10314d,_0x5f5962[_0x381e7b(0x111)](_0x100f28,_0xe05d13)+_0x4b5c01['fake'],_0x5f5962[_0x381e7b(0x1c3)](_0x1d97f8,_0x5f5962[_0x381e7b(0x340)])?_0x5f5962[_0x381e7b(0x291)]:_0x1d97f8===_0x5f5962[_0x381e7b(0x45c)]?'i32':'u8');continue;case'9':var _0x3f61aa=_0x10314d(_0x5f5962[_0x381e7b(0x2ff)](_0x100f28+_0xe05d13,_0x4b5c01['hidde'+'n']),_0x381e7b(0x1dd));continue;case'10':_0x591836&=0x1b84+0x94b+-0x1267*0x2;continue;case'11':var _0x4e1916=_0x5f5962[_0x381e7b(0x175)](_0x10314d,_0x5f5962['aFWLh'](_0x100f28+_0xe05d13,_0x4b5c01[_0x381e7b(0x259)+'d']),'u8');continue;case'12':var _0x4039cc=_0x10314d(_0x100f28+_0xe05d13+_0x4b5c01[_0x381e7b(0x10d)],'u8');continue;case'13':var _0x4b5c01=_0x75ec6[_0x1d97f8];continue;case'14':_0x4e1916=_0x5f5962['pUkKp'](_0x4e1916||0x1af2+0x200a+-0x3afc,-0x881*-0x2+0x1d*0x11f+-0x3184);continue;}break;}}function _0x38e51d(_0x351a7d,_0x2c4a9d,_0x3880bd,_0x3e4132){var _0x5a32da=_0x15a8a6;if(_0x5f5962['nqpDX'](_0x5f5962[_0x5a32da(0x15e)],_0x5a32da(0x432))){var _0x3f2547=_0x75ec6[_0x3880bd];if(!_0x3f2547)return![];var _0x438f7e=_0x13da76(_0x351a7d,_0x2c4a9d,_0x3880bd);if(!_0x438f7e)return![];var _0x2fe178=_0x438f7e[_0x5a32da(0x10d)],_0x65c2c;if(_0x5f5962['LhKqD'](_0x3880bd,_0x5f5962[_0x5a32da(0x340)]))_0x65c2c=_0x5f5962['IyhAX'](_0x2bdc58,_0x3e4132)^_0x2fe178;else{if(_0x3880bd===_0x5f5962[_0x5a32da(0x45c)])_0x65c2c=_0x5f5962[_0x5a32da(0x3a3)](_0x3e4132|-0x1*0x246b+-0x1b3*0xc+0x38cf,_0x2fe178);else _0x65c2c=_0x5f5962['RELSs']((_0x3e4132?-0x1aa2+0xd*-0x22+-0x89*-0x35:0x2*-0xb89+-0x5*0x5f7+0x34e5)&0x11*0x151+0x1*0xe27+-0x2389,_0x2fe178);}var _0x4cb8df=_0x3880bd==='obfF'?_0x5a32da(0x100):_0x5f5962['vaxLm'](_0x3880bd,_0x5f5962['HvohM'])?_0x5a32da(0x1dd):'u8',_0x5d58bb=_0x3880bd==='obfF'?_0x3e4132:_0x3880bd==='obfI'?_0x3e4132|-0xd*-0x185+0x3*0x3ca+-0x1f1f:_0x3e4132?-0x8b1+-0x149a+0x271*0xc:0x47*0x77+0x3*0x12b+-0x1241*0x2;return _0x5f5962[_0x5a32da(0x14d)](_0x257198,_0x351a7d+_0x2c4a9d+_0x3f2547[_0x5a32da(0x318)+'n'],_0x5f5962[_0x5a32da(0x2c8)],_0x5f5962['QVDRj'](_0x65c2c,-0x76d+-0x7cd+0xf3a))&&_0x5f5962[_0x5a32da(0x369)](_0x257198,_0x5f5962[_0x5a32da(0x19a)](_0x351a7d+_0x2c4a9d,_0x3f2547[_0x5a32da(0x261)]),_0x4cb8df,_0x5d58bb)&&_0x257198(_0x5f5962[_0x5a32da(0x19a)](_0x351a7d,_0x2c4a9d)+_0x3f2547['activ'+'e'],'u8',0xe06+0xad*0x11+-0x1983);}else{var _0x53c483=_0x4b5118[_0x14a6b2[_0xfc447]];if(_0x53c483&&typeof _0x53c483==='objec'+'t'&&_0x53c483[_0x5a32da(0x190)+'e']&&_0x53c483[_0x5a32da(0x190)+'e'][_0x5a32da(0x16a)+'8']&&_0x53c483[_0x5a32da(0x190)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x197cec[_0x5a32da(0x3e5)+'e']=_0x5a32da(0x38d)+'w.'+_0x286ebd[_0x476d63]+(_0x5a32da(0x239)+'le'),_0x53c483;}}var _0x5e6b51={'FPScontroller':[[0x589+-0x3*-0x888+-0x1f11,_0x15a8a6(0x43c)],[0x3*0x21f+0xda+0x8b*-0xd,_0x15a8a6(0x43c)],[0x1*0xd8e+0xcf0+0x1*-0x1a3e,_0x5f5962[_0x15a8a6(0x340)]],[-0x13*0x157+-0x7*-0x4e1+0x42d*-0x2,'obfF'],[0x56f+-0x2550+0x2051*0x1,_0x15a8a6(0x43c)],[0x14ee+0x270c+-0xe*0x43f,_0x15a8a6(0x43c)],[0x15*0x3b+0x1278+-0x16af,_0x5f5962['sJuiH']],[-0x1b9e*0x1+0x1*-0x9c1+-0x31*-0xc7,_0x15a8a6(0x42a)],[0x98a+0x1*-0xc1b+-0x1*-0x355,'obfF'],[0x731+-0x2438+0x1de3,_0x5f5962[_0x15a8a6(0x2c8)]],[0x727*0x1+-0x14a7+0xe6c,'u8'],[0x1*-0x2029+-0x200f+0x4128*0x1,_0x5f5962[_0x15a8a6(0x340)]],[-0x670+0x3*0x977+-0x14ed,_0x15a8a6(0x1dd)],[0xf17+-0x2504+0x1*0x16f9,'u8'],[-0x1c3f+-0x1*0x2125+0x1f3a*0x2,'i32'],[0x457*-0x3+-0x1f30+0x2d49,'u8'],[-0x161f+0xb*0x294+-0xc*0x6e,'u8'],[0x1ab2+0x1*0x153d+-0x1*0x2ed3,_0x5f5962['sJuiH']],[-0x331+0x657*0x1+-0x1f2,'obfF'],[-0x776*-0x5+-0x1754+-0x43a*0x3,_0x15a8a6(0x100)],[-0x77f+-0x2*0x4f+-0x13*-0x7f,'f32'],[-0x7*0x1c7+-0x3f3*0x3+0x19b6,'f32'],[-0x1c32+-0x20*0xf2+-0x46*-0xdb,_0x5f5962['bxqKL']],[0x8b1*-0x1+-0xaa5+0xa6f*0x2,'u8'],[-0x1d28+-0x25ae+0x4462,_0x15a8a6(0x100)],[-0xa72+0x1108+-0x4f2,'u8'],[0x6b*-0x47+0x253+0x1d0e,_0x5f5962[_0x15a8a6(0x291)]],[-0x19fe+-0x1cba*0x1+-0x54*-0xac,_0x5f5962[_0x15a8a6(0x291)]],[-0x1427+0x5e3*-0x3+0x278c,'u8'],[-0x1*0x1dba+-0x12ea+0x3*0x10cb,'u8'],[0x47b+-0x23d7*0x1+0x28c*0xd,_0x15a8a6(0x43c)],[-0x93+0x2128+-0x1ebd,_0x5f5962['bxqKL']],[0x13*0x18d+-0x556+-0x1645*0x1,'u8'],[0x1177*0x1+-0x1*0x1bd9+0xc42,_0x15a8a6(0x43c)],[0x56d+0x1*-0x3f5+0x90,_0x15a8a6(0x42a)],[-0x24ff+-0x3*-0x7bb+0x4a*0x37,_0x5f5962[_0x15a8a6(0x291)]],[-0x1*0xb04+0x13*0xe+-0x1a*-0x77,_0x15a8a6(0x100)],[-0x116b+-0x1cf0+0xeb*0x35,_0x15a8a6(0x100)],[-0x1d89*0x1+-0x1*0x33a+0x2313,'f32'],[-0x5*0x38a+-0x389+0x178f,_0x15a8a6(0x100)],[0x1ba+0x210+-0x172,_0x15a8a6(0x100)],[-0x40+0x2456+-0x21ba,'u8'],[-0xdf+0x10a*0x1+0x232,'u8'],[0x8*-0x44b+0x4*-0x80e+-0x15a*-0x33,'u8'],[-0xfbb*-0x1+-0x2381+-0x3f*-0x5a,_0x15a8a6(0x100)],[-0x30d+-0x1d*-0xb3+-0xed6,'u8'],[-0x23a0+-0xdce+0x33d3,'u8'],[0x4*0x20b+-0x10a9+-0x1*-0xae5,_0x5f5962[_0x15a8a6(0x291)]],[-0x73c+-0x13b4+0x757*0x4,_0x5f5962['bxqKL']],[-0x8f*0x2+-0x1b4f+-0x1*-0x1edd,_0x5f5962[_0x15a8a6(0x291)]],[-0x1a75+0x13fe+0x1*0x8eb,_0x5f5962[_0x15a8a6(0x291)]],[0x728+0x3d6+0x2*-0x443,_0x5f5962[_0x15a8a6(0x291)]],[0xee0+0x21b1+-0x2e15*0x1,_0x15a8a6(0x100)],[0x1f5e+-0x1*0x45+-0x1*0x1c99,_0x5f5962[_0x15a8a6(0x291)]],[-0x17ea*0x1+-0x76*0x35+0x32ec,'u8'],[0xb2b+-0x318+0xd*-0x6b,_0x5f5962[_0x15a8a6(0x291)]],[0x2b6*0x1+0x62e+-0x14*0x4f,_0x15a8a6(0x100)],[-0x173d+0x22f6+0x27*-0x3b,_0x5f5962[_0x15a8a6(0x291)]],[-0x7*-0x44f+0x2*0x7fb+-0x2b5f,'f32'],[-0x91+0x8aa*0x4+0x63*-0x51,'u8'],[-0xe*-0x160+0x9*0x15b+0x1*-0x1cae,'u8'],[0xf20+-0xd64+0x10c,_0x5f5962['bxqKL']],[-0x279*0x5+-0x48*-0x87+-0x3*0x795,'f32'],[0xa85*-0x1+0x1a1a+0xd7*-0xf,_0x15a8a6(0x100)],[-0x156*0x6+0x161a+0x42*-0x2b,_0x15a8a6(0x100)],[-0x166*0x15+0x1bf0+-0x239*-0x2,_0x5f5962['bxqKL']],[0x183d*-0x1+-0x20e7*-0x1+-0x5a2,_0x15a8a6(0x100)],[0x1f4c+0x14b+-0x3*0x9d5,'u8'],[0x60*0x4f+0xb8*-0x5+-0x16e0,_0x5f5962['PjpXJ']],[-0x1*0x10bd+-0xf0e+0x1*0x22f7,_0x5f5962['bxqKL']],[0x1c*-0x32+-0x173a+0x1fe2,_0x15a8a6(0x100)],[-0xe7*-0x3+0x53*0x37+-0x1156,_0x15a8a6(0x100)],[-0x17f7+-0x1*0x13fe+0x2f31,_0x15a8a6(0x100)],[-0x1*0x1eac+0x328+0x1*0x1ec4,'u8'],[-0x1e33+-0x1bf8+0x3d6c,'u8'],[-0x6d*-0x2a+-0xf1*0x21+0x107b,'u8'],[-0x2005+0x7*0x43a+0x2de*0x2,'u8'],[-0x1760+-0x13ce+0x2e7c,'u8'],[0x1*0x20a4+-0x4*-0x4b+0x3d*-0x80,_0x5f5962['bxqKL']],[-0x980+0xdb3+0x1*-0xdf,_0x15a8a6(0x100)],[0x154a+-0x3ca*0x2+-0xa5e*0x1,_0x15a8a6(0x100)],[0x1*0x2051+0x40d+-0x1a*0x145,'f32'],[-0x801+-0x24e7+0x3048,_0x15a8a6(0x100)],[0x1a97*-0x1+0x108c+0xd6f,'u8'],[-0xd7*-0x6+-0xb74+0x9d2,'f32'],[-0x17e1*-0x1+0x1389*-0x1+-0xec,'f32'],[0x1940*-0x1+0x40*0x6b+0x1f0,'u8'],[0x106b+-0x25b*0x6+0x153,'f32'],[0x832+-0x22f4*-0x1+0x13c3*-0x2,_0x5f5962['bxqKL']],[-0x15ba+0x10*-0x81+0x216e,'f32'],[-0x998+-0x561+-0x12ad*-0x1,_0x5f5962[_0x15a8a6(0x2c8)]],[-0x1c33+-0x1d8b+-0x3d76*-0x1,'u8'],[-0x226*-0x12+0x2304+0x25*-0x1e4,'i32'],[-0xc36*0x3+-0x2*0x599+0x4*0xce5,_0x15a8a6(0x100)],[0x1918+0xbbf+0x2113*-0x1,_0x15a8a6(0x100)],[0x21c3+-0x2e*-0xb3+-0x3e25,'f32'],[0x1*-0x205f+0x67*-0x1b+-0xd7*-0x38,_0x5f5962[_0x15a8a6(0x291)]],[0x20e0+0x26c3*-0x1+-0x5*-0x1f3,_0x5f5962['PjpXJ']],[-0x871+0x7*0x480+0x665*-0x3,'u8'],[-0x2629+0x3*-0xada+-0x38*-0x155,'u8'],[0x673+0x21bd+-0xc1a*0x3,'u8'],[0x2c*-0x77+0x1baf+-0x357,_0x15a8a6(0x100)],[-0x38*0x4f+-0x240+-0x1e*-0xc8,_0x5f5962['PjpXJ']]],'HealthScript':[[0x1b1*0x6+0x7b4+-0x1f2*0x9,'u8'],[-0x157*-0x3+-0xe5*0x1+0xc*-0x3b,_0x15a8a6(0x1dd)],[-0x17d3+-0x2574+0x3dc7,_0x15a8a6(0x100)],[0x4d7+0x2de+-0x731,_0x5f5962[_0x15a8a6(0x291)]],[-0x3*-0x901+-0x19c4+-0xb7,_0x5f5962[_0x15a8a6(0x291)]],[0x155+-0x1*-0x25c9+-0x2692*0x1,_0x15a8a6(0x100)],[0x139b+-0xb14*0x3+0xe31,_0x5f5962[_0x15a8a6(0x291)]],[0x1a*0x1+0x1*-0xe64+0xede,_0x5f5962['bxqKL']],[0x1*-0x7cd+-0x12a*-0x4+0x3c5,_0x15a8a6(0x1dd)],[-0x1*-0x151+-0x176c*-0x1+-0x1819,'i32'],[-0x1*-0x1f09+-0x206e+0x20d,'u8'],[0x16cb+0x9*-0x1a0+-0x782,'u8'],[-0x1*-0x25ef+-0xc7*-0x10+-0x31b5,'u8'],[-0x21cb+0x17ea*-0x1+0x3a60,'u8'],[0x2363+-0x1*0x2383+0xe0,_0x15a8a6(0x3b9)],[0x1ccc+0xc10+-0x2808,'obfI'],[-0x2150+-0x399*0x1+0x25d1,_0x15a8a6(0x3b9)],[0x84b*0x4+-0x1039*-0x2+-0x1*0x40a2,'obfI'],[0x1*0x1aa5+-0x1*-0x1f35+0x3*-0x12ee,_0x5f5962[_0x15a8a6(0x45c)]],[-0x91f+0xb18+-0xd5,_0x5f5962[_0x15a8a6(0x1a1)]],[0xe11+-0x17bf*0x1+-0x2*-0x56f,'obfF'],[0x131a+-0x1342+0x2*0xb8,_0x5f5962[_0x15a8a6(0x291)]],[-0xd75+0x2*-0x5ec+0xb*0x26b,_0x15a8a6(0x100)],[-0x2115+-0xb*0x84+-0x1*-0x2811,_0x15a8a6(0x100)],[-0x24a5+-0x58*0x6e+0x4bc9,'f32'],[0xe6f+0x167*0x2+-0xf*0x10f,'f32'],[0x1cd6+0x20+0x1a*-0x10f,_0x5f5962[_0x15a8a6(0x291)]],[0x359*-0x8+0x2373+-0x733,_0x15a8a6(0x100)],[-0x1*-0x24f2+-0x4e4*-0x6+-0x2065*0x2,'u8'],[0x1a*0x4a+-0xed4+0x1b*0x54,'u8'],[-0x133f+-0x8c9+0x1d98,_0x5f5962[_0x15a8a6(0x2c8)]]],'PlayerConfig':[],'WeaponManager':[[-0x10*0x17f+-0xa3*0x1+0x18ab,_0x15a8a6(0x1dd)],[-0xe*-0x56+0x1f51+-0x23e9,_0x5f5962[_0x15a8a6(0x2c8)]],[0x2*0xc6d+0x251*-0x6+-0xad4,'u8'],[0x1c1e+0x2*0x137+-0x8*0x3cd,'i32'],[-0x2380+-0x13ad+-0x3791*-0x1,_0x5f5962[_0x15a8a6(0x340)]],[0x5*0x679+-0x2388+0x3a7,_0x15a8a6(0x100)],[0x23ba+0x135d*0x1+-0x3693,'i32'],[0x1fbf+0x5ee+-0x2525,'u8'],[0x4*-0xfe+-0x22ef+0x2770,'u8'],[-0x1425+-0x2*-0x577+-0x9c3*-0x1,'i32'],[-0xa3*-0x27+-0x7fc+-0x1049,_0x5f5962['bxqKL']],[-0x1*0x1f1a+-0x2ed+-0x229f*-0x1,_0x15a8a6(0x100)],[0x53b*0x5+-0x5*-0xa1+-0x1ca0,_0x15a8a6(0x1dd)],[0x1*-0x1ead+0x100f*-0x2+0x3f87,'u8'],[0x1*-0x1521+0x75d+0xea0,_0x5f5962['HvohM']],[-0x6f4+0xf39+-0x755,_0x5f5962['HvohM']],[0x313+0x21c6+-0x1*0x23d5,_0x5f5962['bxqKL']],[0x26aa+-0x1*-0x479+-0x2a1b,_0x15a8a6(0x100)],[-0x259e+-0x424+0x2ace,_0x15a8a6(0x100)],[0x24e1*0x1+0x1*-0x3c7+-0x22*0xf1,_0x15a8a6(0x100)],[0x215c+0x2485+-0x44c1*0x1,'f32'],[-0x226c+-0x1*-0x18de+0x392*0x3,'u8'],[-0x346+0x1a7+0x2cb,_0x5f5962[_0x15a8a6(0x45c)]],[-0x21a7+0x19*-0x164+0x45ab,_0x15a8a6(0x3b9)],[-0xac*0x35+0x1667+0x3d*0x3d,_0x15a8a6(0x3b9)],[0xbbb+-0x52*0x2e+0x469*0x1,'obfB'],[-0x1b*0x81+0x1a*-0xfb+0x288d,_0x15a8a6(0x42a)],[0x14b6+-0x1caf+-0x19*-0x61,'obfB'],[0x1*-0x2231+-0x6*-0x161+0x4f*0x59,_0x15a8a6(0x42a)],[-0xfd*-0x3+0x1236*-0x2+0x2319,'obfB'],[0x1570+-0x57*0x3+0x12bb*-0x1,'obfI'],[-0x23c0+-0xeb+-0x2b*-0xe5,'i32'],[0x6e4+-0x15ff+0x47*0x3d,'u8'],[-0x12ba+-0x1fe+0x168c,_0x15a8a6(0x1dd)],[0x136b+0x11*-0x140+-0x3ad*-0x1,_0x5f5962[_0x15a8a6(0x2c8)]],[-0x482+-0x2e1+0x1*0x963,_0x15a8a6(0x1dd)],[0xef*0x22+-0x1f15+0x16b,'u8'],[0x9a7+-0x18*0x15a+0x18e5,'u8'],[-0x448+0xadb*-0x3+-0x2*-0x137b,'u8'],[0x11de+-0x1764+0x7a4,'u8'],[-0x1c70+-0x2ef*0x7+-0x147*-0x28,'u8'],[0x23dc+-0x1cb2*0x1+-0x4da,_0x15a8a6(0x1dd)],[-0x7ed*0x1+0x1007+0x5c2*-0x1,'u8']],'GG_GameManager':[[-0x77c*0x5+0xcc8+-0x1e8*-0xd,'u8'],[0x9*0x2b5+0x7e1*0x2+-0x27f3,_0x5f5962[_0x15a8a6(0x291)]],[-0x3*-0x29b+0x1632*-0x1+0xa3*0x17,'u8'],[0x1e32+-0x1769+-0x684,'u8'],[0x54a+-0x4ab*-0x6+-0x2104,_0x15a8a6(0x100)],[-0x610+-0x2348+-0x1a*-0x19a,_0x5f5962['bxqKL']],[-0x5*0x7+-0x16b+-0xef*-0x2,_0x15a8a6(0x1dd)],[-0x17*0x29+-0xb9*-0xf+0x6d4*-0x1,_0x15a8a6(0x1dd)],[-0x22*0x14+0xb*0x163+-0xc41,'u8'],[-0x1513+-0x1189*-0x1+0x3fe,'u8'],[-0xaa*0x11+-0x2380+0x17*0x20e,_0x15a8a6(0x100)],[0x195d+-0x9a6+-0xf3b,'f32'],[-0x253e+0x1*0x1acb+0xb03,_0x5f5962[_0x15a8a6(0x2c8)]],[-0x22ec+0x27c*0x5+0x1714,'u8'],[0x1191*-0x1+0x1d20+-0xadb,_0x5f5962['PjpXJ']],[0x17*0x143+-0x11de+-0x17d*0x7,_0x5f5962[_0x15a8a6(0x2c8)]],[0x1712+-0x1*0xbdf+0xa73*-0x1,_0x5f5962[_0x15a8a6(0x2c8)]],[-0xe55+0xc75+0x2c8,'obfI'],[0x157d*0x1+-0x4af+-0xfd2,_0x15a8a6(0x3b9)],[-0x1*-0x8db+0xb*0xa0+-0xeab,'obfI'],[0x23c5+-0x329*0xc+0x353,'u8'],[-0x5ff+-0x2549+0x2c78,_0x15a8a6(0x1dd)],[0x1a60+0x1565+-0x2e61,'u8'],[0xd*-0xfb+-0xc13+0x1a42,_0x15a8a6(0x100)],[-0x1*-0x1c55+0x2*-0xf8f+0x449*0x1,'u8'],[0x7*0x341+-0x25f0+-0x1*-0x10b1,'u8'],[-0x10d5+0x9d*0x23+-0x2fe,'u8'],[-0x1009*0x2+0x5*-0x2b1+0x2f2f*0x1,_0x15a8a6(0x1dd)],[0x12db+0xe*-0xf3+-0x3e5,_0x5f5962[_0x15a8a6(0x291)]],[-0x1*0x63f+0x2*-0x5b+0x8a5*0x1,'u8'],[-0x2088+-0x7*0x107+0x296a,'u8'],[-0x117a+0x929+-0x16f*-0x7,_0x15a8a6(0x1dd)],[-0x87*-0x45+0x439+-0x26e0,_0x5f5962[_0x15a8a6(0x2c8)]],[0x1c71+0xd61+-0x2812,_0x15a8a6(0x100)],[-0x7cc+-0xd7+0xa67,'i32'],[-0x148c+-0x9df*-0x1+0xc75,_0x15a8a6(0x100)],[-0x1*0x202d+-0x1087+-0x1940*-0x2,_0x15a8a6(0x1dd)],[-0x8de+0x77b+0x3*0x111,_0x15a8a6(0x1dd)]]};function _0x2ae4d2(_0x13d210,_0x1af1d1){var _0x176e5d={'hUuYf':function(_0x3f958b,_0x6184a){return _0x3f958b===_0x6184a;},'UmkZP':function(_0x105fd3,_0x1f4c78){return _0x105fd3!==_0x1f4c78;},'ahbVv':function(_0x3651be,_0x224980){var _0x2d7778=_0x3166;return _0x5f5962[_0x2d7778(0x3b2)](_0x3651be,_0x224980);},'vMMwj':'funct'+'ion','SqNQn':function(_0x3417ff){var _0x334670=_0x3166;return _0x5f5962[_0x334670(0x242)](_0x3417ff);}};return function(_0x33ee3b){var _0x297606=_0x3166,_0x514594={'wzDrU':function(_0x49a556,_0x5dc929){var _0x38e9bd=_0x3166;return _0x176e5d[_0x38e9bd(0x2e6)](_0x49a556,_0x5dc929);},'YrHgG':function(_0x3d9a1d,_0x33771e){return _0x3d9a1d===_0x33771e;},'tyijk':'nkfXG'};try{var _0x2ab04b=_0x33ee3b&&_0x33ee3b['val']?_0x33ee3b['val']():0x64*-0x13+0x309+0x463;if(!_0x2ab04b)return;var _0x2362f6=_0x5c6675[_0x13d210];if(!_0x2362f6||_0x2362f6['ptr']!==_0x2ab04b){_0x5c6675[_0x13d210]={'ptr':_0x2ab04b,'firstSeen':Date[_0x297606(0x36a)](),'hits':0x0,'replaced':!!_0x2362f6};try{if(_0x176e5d['UmkZP'](_0x297606(0x301),'uvNvc')){var _0x3dab2c=_0x243733['filte'+'r'](function(_0x5e74e0){var _0x1fa3e9=_0x297606;return _0x514594[_0x1fa3e9(0x3d0)](_0x5e74e0['type'],_0x13d210);})[0x1afe+0x1e5a+-0x3958];_0x571a35={'type':_0x13d210,'atMs':_0x176e5d['ahbVv'](Date[_0x297606(0x36a)](),_0xe3dd93),'originalFunc':!!(_0x3dab2c&&_0x3dab2c[_0x297606(0x341)]&&typeof _0x3dab2c['hook'][_0x297606(0x227)+_0x297606(0x1eb)+'nc']===_0x176e5d['vMMwj']),'resolveGameAtFire':!!_0x176e5d[_0x297606(0x3a5)](_0xd6843),'gameSourceAtFire':_0x5c2d1b[_0x297606(0x3e5)+'e']};}else return _0x2492e4[_0x297606(0x3e5)+'e']=_0x297606(0x345)+'me._g'+_0x297606(0x2ef),_0x404e82;}catch(_0x2468a6){}}_0x5c6675[_0x13d210][_0x297606(0x3f4)]++;if(!_0x1af1d1){var _0x3dab2c=_0x243733['filte'+'r'](function(_0x2bc4f7){var _0xb10adf=_0x297606;if(_0xb10adf(0x184)!==_0x514594['tyijk'])return _0x2bc4f7[_0xb10adf(0x353)]===_0x13d210;else{var _0x9e21e5={'zveyI':function(_0x1ce011,_0x20ffb2){return _0x514594['YrHgG'](_0x1ce011,_0x20ffb2);}},_0x2fd622=new _0x49e50b(_0xb10adf(0x3bf)+_0xb10adf(0x1cd));_0x2fd622['onmes'+_0xb10adf(0x113)]=function(_0x56fe44){var _0x47b4bd=_0xb10adf,_0x443063=_0x56fe44[_0x47b4bd(0x42e)];if(_0x443063&&_0x9e21e5[_0x47b4bd(0x34f)](_0x443063[_0x47b4bd(0x31d)+_0x47b4bd(0x306)],_0x524341)&&_0x443063['kind']==='cmd')_0x57c829(_0x443063['cmd'],_0x443063['arg']);};}})[0x1d8c+0x15ad+-0x3339];if(_0x3dab2c&&_0x3dab2c[_0x297606(0x341)])try{_0x3dab2c[_0x297606(0x341)]['enabl'+'ed']=![];}catch(_0x318ae9){}}}catch(_0x261cc7){}};}function _0x3d04b6(){var _0x19b433=_0x15a8a6;if(_0x5f5962[_0x19b433(0x2a5)](_0x19b433(0x1cc),_0x19b433(0x1e6))){var _0x4305ea=_0x3a06a0['getEl'+_0x19b433(0x397)+'ById']('sakur'+'a-sw-'+'v2');if(_0x4305ea)return _0x4305ea;if(!_0x1e05b5[_0x19b433(0x23b)]||!_0x4b2392[_0x19b433(0x23b)][_0x19b433(0x2bb)+'dChil'+'d'])return null;try{var _0x4a214b=('2|1|3'+_0x19b433(0x263))['split']('|'),_0x4da7b7=0x36d*0x5+-0x197a+0x1*0x859;while(!![]){switch(_0x4a214b[_0x4da7b7++]){case'0':return _0x4305ea;case'1':_0x4305ea=_0x6c902a[_0x19b433(0xeb)+_0x19b433(0x2f1)+_0x19b433(0x12c)](_0x5f5962[_0x19b433(0x300)]);continue;case'2':if(!_0x5580e9[_0x19b433(0x166)+_0x19b433(0x397)+_0x19b433(0x319)](_0x5f5962['bddbe'])){var _0x40726e=_0x4ebcc3['creat'+'eElem'+_0x19b433(0x12c)]('style');_0x40726e['id']='sakur'+_0x19b433(0x24a)+_0x19b433(0x461)+'s',_0x40726e['textC'+'onten'+'t']=_0x19b433(0x2fa)+_0x19b433(0x277)+'-v2{a'+_0x19b433(0x115)+_0x19b433(0x3ca)+'}',(_0x33d367[_0x19b433(0x387)]||_0xa95962[_0x19b433(0x2e3)+_0x19b433(0x32b)+_0x19b433(0x397)])['appen'+_0x19b433(0x24d)+'d'](_0x40726e);}continue;case'3':_0x4305ea['id']=_0x19b433(0x3bf)+'a-sw-'+'v2';continue;case'4':_0x11853f[_0x19b433(0x23b)][_0x19b433(0x2bb)+'dChil'+'d'](_0x4305ea);continue;}break;}}catch(_0x47b2a9){return null;}}else{if(_0x243733[_0x19b433(0x455)+'h'])return!![];if(!window[_0x19b433(0x200)+_0x19b433(0x206)+_0x19b433(0x29f)]||!window[_0x19b433(0x200)+'WebMo'+_0x19b433(0x29f)]['Runti'+'me'])return![];var _0x415da3=window['Unity'+_0x19b433(0x206)+_0x19b433(0x29f)][_0x19b433(0x345)+'me'];if(!_0x415da3[_0x19b433(0x439)+'ns']||!_0x415da3[_0x19b433(0x439)+'ns'][_0x19b433(0x455)+'h'])return![];_0x3ea9b3=window[_0x19b433(0x200)+_0x19b433(0x206)+_0x19b433(0x29f)][_0x19b433(0xfd)+_0x19b433(0x283)+'er'],_0x4b671f=_0x4b671f||_0x415da3[_0x19b433(0x439)+'ns'][_0x415da3[_0x19b433(0x439)+'ns'][_0x19b433(0x455)+'h']-(0x6e9+0x1ad6+-0x4d2*0x7)];if(!_0x4b671f||typeof _0x4b671f[_0x19b433(0x3d9)+_0x19b433(0x2ae)]!=='funct'+_0x19b433(0x405))return![];for(var _0x2005c8=0x71e+0x170+-0x1e*0x49;_0x5f5962['kBoMW'](_0x2005c8,_0x30c4fd[_0x19b433(0x455)+'h']);_0x2005c8++){if(_0x5f5962[_0x19b433(0x2a5)](_0x19b433(0x11b),'XFEgr'))_0x5a0286[_0x19b433(0x3fd)](_0x19b433(0x233)+_0x19b433(0x2fb)+_0x19b433(0x1a2)+'lWarz'+'\x20repo'+'rt','color'+':'+_0x5e1311+(';font'+'-weig'+_0x19b433(0x129)+'0'),_0x553495),_0x2798a3[_0x19b433(0x3fd)](_0x5f5962[_0x19b433(0x302)](_0x5f5962[_0x19b433(0x2ff)](_0x5f5962[_0x19b433(0x384)](_0x36c4e7,'\x0a'),_0x2cde04[_0x19b433(0x3a4)+'gify'](_0x46b24c,null,-0x1031*0x1+-0x143e+0x10*0x247))+'\x0a',_0x30396d)),_0x21a5a4(_0x19b433(0x238)+'t',{'report':_0x2e38c6});else{var _0x5b4f68=_0x30c4fd[_0x2005c8];try{var _0x1d8609=_0x4b671f['hookP'+_0x19b433(0x2ae)]({'typeName':_0x5b4f68[_0x19b433(0x353)],'methodName':_0x19b433(0xe8)+'e','params':['i32',_0x5f5962[_0x19b433(0x2c8)]],'returnType':undefined},_0x2ae4d2(_0x5b4f68[_0x19b433(0x353)],_0x5b4f68['keep']));_0x243733[_0x19b433(0x3a7)]({'type':_0x5b4f68[_0x19b433(0x353)],'hook':_0x1d8609,'keep':_0x5b4f68[_0x19b433(0x3e4)]});}catch(_0x5df618){_0x356e86[_0x19b433(0x3a7)](_0x5b4f68['type']+':\x20'+_0x5f5962[_0x19b433(0x409)](String,_0x5df618&&_0x5df618['messa'+'ge']||_0x5df618)['slice'](-0x5*0x2f+0x12d0+-0x11e5,0x66e+0xaf6+-0x10c4));}}}return _0x243733[_0x19b433(0x455)+'h']>0xdf7+0x15*0x8e+-0x199d;}}function _0x5e75f4(){var _0x762841=_0x15a8a6,_0x3c2e7b=0x26bc+-0xd5f+0x2b*-0x97;for(var _0x24565e=-0xb28+-0xb6a+0x1692;_0x24565e<_0x243733[_0x762841(0x455)+'h'];_0x24565e++){if(_0x243733[_0x24565e]['hook']&&_0x243733[_0x24565e][_0x762841(0x341)][_0x762841(0x3b7)+_0x762841(0x3ad)]!==undefined)_0x3c2e7b++;}return _0x3c2e7b;}function _0x568322(){var _0x3982f4=_0x15a8a6,_0x216984=-0x29*-0xbb+0x1aff*-0x1+-0x2f4;for(var _0xf7680a=0x248b+0xa*-0x1b7+-0x1365;_0x5f5962['sgIrT'](_0xf7680a,_0x243733['lengt'+'h']);_0xf7680a++){if(_0x243733[_0xf7680a][_0x3982f4(0x341)]&&_0x243733[_0xf7680a][_0x3982f4(0x341)][_0x3982f4(0x1e5)+'ed'])_0x216984++;}return _0x216984;}var _0x1a796e=null,_0x2d347f=[],_0x571a35=null;function _0x29c80b(_0x4fb96d){var _0x1525bf=_0x15a8a6;try{if(_0x5f5962['kShuX'](!_0x3ea9b3,!_0x4fb96d))return null;var _0x24bc7a=new _0x3ea9b3(_0x4fb96d)['getCl'+_0x1525bf(0x377)+'me']();return _0x24bc7a===undefined?null:_0x24bc7a;}catch(_0x565f07){return null;}}function _0x5eeb36(){var _0x52441d=_0x15a8a6,_0x2375b5={};_0x5c2d1b['ok']=-0x1d3a+-0xd*0x23b+0x3a39,_0x5c2d1b['faile'+'d']=0x1e*-0x136+-0x9a5+0x3*0xf53,_0x5c2d1b[_0x52441d(0x3d1)+'rror']=null;var _0x405ea5=Object['keys'](_0x5e6b51);for(var _0x280dd5=0x16f0+-0x760+-0xf90;_0x5f5962['PZNpc'](_0x280dd5,_0x405ea5['lengt'+'h']);_0x280dd5++){var _0x5f3698=_0x405ea5[_0x280dd5],_0x48a6f3=_0x5c6675[_0x5f3698];if(!_0x48a6f3||!_0x48a6f3['ptr'])continue;var _0x53732a=_0x5e6b51[_0x5f3698]||[],_0x4d4a1d=[];for(var _0x223638=0x2041+0x1*0x6d3+-0x2714;_0x223638<_0x53732a['lengt'+'h'];_0x223638++){var _0x43eb1b=_0x53732a[_0x223638][0x11fa+-0x17*0x109+-0x5d5*-0x1],_0x599b96=_0x53732a[_0x223638][-0x2*0x752+-0x2508+0x33ad];if(_0x599b96[_0x52441d(0x3b0)+'Of']('obf')===0x2464+-0x10*0x1f3+-0x534){var _0x34f75a=_0x13da76(_0x48a6f3[_0x52441d(0x28e)],_0x43eb1b,_0x599b96);if(!_0x34f75a)continue;_0x4d4a1d['push']({'o':_0x43eb1b,'k':_0x599b96,'v':_0x34f75a[_0x52441d(0x1fb)],'fake':_0x34f75a[_0x52441d(0x261)],'act':_0x34f75a[_0x52441d(0x181)],'inited':_0x34f75a[_0x52441d(0x374)],'raw':_0x5f5962['leetV'](_0x52441d(0x438)+_0x34f75a[_0x52441d(0x10d)]+'\x20hid='+_0x34f75a[_0x52441d(0x318)+'n']+('\x20fake'+'=')+_0x34f75a[_0x52441d(0x261)],_0x34f75a[_0x52441d(0x181)]?_0x5f5962['HPuvp']:'')});}else{var _0x48968b=_0x10314d(_0x48a6f3[_0x52441d(0x28e)]+_0x43eb1b,_0x599b96);if(_0x5f5962['ZVDAZ'](_0x48968b,undefined))continue;_0x4d4a1d['push']({'o':_0x43eb1b,'k':_0x599b96,'v':_0x48968b,'raw':''});}}if(_0x4d4a1d[_0x52441d(0x455)+'h'])_0x2375b5[_0x5f3698]=_0x4d4a1d;}return _0x2375b5;}function _0x148008(){var _0x48dc19=_0x15a8a6;if(_0x5f5962[_0x48dc19(0x128)]('MiepI','ZuSai')){if(typeof _0x4208bc!==_0x48dc19(0x1d0)+_0x48dc19(0x2cd)&&_0x1b7a39)return _0x23fca0['sourc'+'e']='bare\x20'+'game\x20'+'bindi'+'ng',_0x1ddbb8;}else{var _0x3e0d8e=[_0x5f5962[_0x48dc19(0x370)],_0x48dc19(0x19e)+'Game','game','unity'+_0x48dc19(0x25b)+_0x48dc19(0x39c)+_0x48dc19(0x240)],_0xf88c6d={};for(var _0x5314dd=-0x18d9+-0x1*0x2479+0x3d52;_0x5314dd<_0x3e0d8e['lengt'+'h'];_0x5314dd++){if('XtPLM'!==_0x48dc19(0x214)){var _0x30c9c0=_0x3e0d8e[_0x5314dd],_0x533232=typeof window[_0x30c9c0];_0xf88c6d[_0x30c9c0]=_0x5f5962[_0x48dc19(0x22c)](_0x533232,'undef'+_0x48dc19(0x2cd))?_0x5f5962[_0x48dc19(0x185)]:_0x533232;}else{try{var _0xb3c4de=_0x478c61();if(_0xb3c4de&&_0xb3c4de[_0x48dc19(0x190)+'e']&&_0xb3c4de[_0x48dc19(0x190)+'e']['HEAPU'+'8']&&_0xb3c4de[_0x48dc19(0x190)+'e'][_0x48dc19(0x16a)+'8'][_0x48dc19(0x15b)+'r'])return _0xb3c4de['Modul'+'e'][_0x48dc19(0x16a)+'8'];}catch(_0x35cf89){}return null;}}var _0x202cd9=_0x5f5962['VcxNG'](_0xd6843);_0xf88c6d['gameS'+_0x48dc19(0x3fc)]=_0x5c2d1b[_0x48dc19(0x3e5)+'e'];try{if(_0x5f5962['tGcJn']('pTIMT',_0x5f5962['ooJEA'])){var _0x495efc=_0x327a8a[_0x547205],_0x9009c4=typeof _0x495efc['v']==='numbe'+'r'?_0x5f5962['QOmPx'](_0x299168[_0x48dc19(0x26c)](_0x5f5962[_0x48dc19(0x108)](_0x495efc['v'],0x1*-0x166f+0x15d8+0x47f)),-0x99f+-0x3*-0x487+0x1*-0xe):_0x495efc['v'];_0x32e6c4['push'](_0x5f5962['fCcnr']('\x20\x20'+('0x'+_0x495efc['o'][_0x48dc19(0x16b)+'ing'](-0x1928+0x1cf4+-0x3bc))['padEn'+'d'](0x151c+-0x237f+0xe6b)+'\x20'+_0x495efc['k'][_0x48dc19(0x2b9)+'d'](-0x355*-0x7+0xace+-0x2216)+'\x20'+_0x1867f4(_0x9009c4)['padEn'+'d'](0xebd+-0x512+0x99b*-0x1),'\x20')+(_0x495efc[_0x48dc19(0x3f3)]||''));}else _0xf88c6d['hasMo'+'dule']=!!(_0x202cd9&&_0x202cd9['Modul'+'e']),_0xf88c6d[_0x48dc19(0x209)+'8']=!!(_0x202cd9&&_0x202cd9[_0x48dc19(0x190)+'e']&&_0x202cd9[_0x48dc19(0x190)+'e']['HEAPU'+'8']),_0xf88c6d[_0x48dc19(0x1d7)+_0x48dc19(0x379)]=_0xf88c6d['heapU'+'8']?_0x202cd9[_0x48dc19(0x190)+'e'][_0x48dc19(0x16a)+'8']['lengt'+'h']:-0x1882+0x21ac+-0x92a;}catch(_0xf58b40){_0xf88c6d['hasMo'+_0x48dc19(0x136)]=![],_0xf88c6d['heapU'+'8']=![],_0xf88c6d[_0x48dc19(0x1d7)+'ytes']=-0xed4+-0x1206*-0x1+-0x332;}return _0xf88c6d['value'+_0x48dc19(0x283)+'er']=typeof _0x3ea9b3,_0xf88c6d;}}function _0x7f4fb5(_0x40829e){var _0x73a092=_0x15a8a6,_0x29d77a={};for(var _0x3f6fd3 in _0x40829e){var _0x3ade51=_0x40829e[_0x3f6fd3];for(var _0x2bcc4c=-0xd35+0xc70+0xc5;_0x2bcc4c<_0x3ade51[_0x73a092(0x455)+'h'];_0x2bcc4c++){_0x29d77a[_0x5f5962[_0x73a092(0x218)](_0x3f6fd3,_0x5f5962[_0x73a092(0x2e0)])+_0x3ade51[_0x2bcc4c]['o'][_0x73a092(0x16b)+'ing'](-0x269*0xe+0x1773+-0xa5b*-0x1)]=_0x3ade51[_0x2bcc4c]['v'];}}return _0x29d77a;}function _0x550aa8(_0x2a1dfb){var _0x43cfcb=_0x15a8a6,_0x2d1d51=(_0x43cfcb(0x1ba)+_0x43cfcb(0x38c)+_0x43cfcb(0x296))[_0x43cfcb(0x313)]('|'),_0x446826=-0xb74+-0xb*0x318+0x2d7c;while(!![]){switch(_0x2d1d51[_0x446826++]){case'0':_0x1a796e=_0x54bc86;continue;case'1':var _0x2a756f=_0x5f5962[_0x43cfcb(0x34a)](_0x5eeb36);continue;case'2':_0x5f5962[_0x43cfcb(0x449)](_0x1b7acd,'repor'+'t',{'report':_0x5f5962['FKfFc'](_0x16015c)});continue;case'3':if(_0x5f5962[_0x43cfcb(0x186)](_0x2a1dfb,_0x5f5962['xGJrk']))return;continue;case'4':if(!_0x1a796e){_0x1a796e=_0x54bc86,_0x2d347f=[],_0x1b7acd('repor'+'t',{'report':_0x16015c()});return;}continue;case'5':for(var _0x47aa47 in _0x54bc86){var _0x265862=_0x1a796e[_0x47aa47],_0x5bc24c=_0x54bc86[_0x47aa47];if(_0x5f5962['eQqFE'](_0x265862,_0x5bc24c))_0x2d347f['push'](_0x5f5962['HFCzd'](_0x47aa47+':\x20'+_0x265862,_0x5f5962['nIzwQ'])+_0x5bc24c);}continue;case'6':_0x2d347f=[];continue;case'7':var _0x54bc86=_0x7f4fb5(_0x2a756f);continue;}break;}}window['addEv'+_0x15a8a6(0x1a6)+_0x15a8a6(0x1e3)+'r'](_0x5f5962[_0x15a8a6(0x40b)],function(_0x109a2e){var _0x2d8347=_0x15a8a6;if(_0x109a2e&&_0x109a2e['code']==='F9'){if(_0x5f5962[_0x2d8347(0x128)](_0x5f5962[_0x2d8347(0x141)],_0x5f5962[_0x2d8347(0x323)]))try{_0xdd0cf3[_0x2d8347(0x34c)+'e']();}catch(_0xf8052){}else _0x109a2e['preve'+'ntDef'+'ault'](),_0x550aa8(_0x2d8347(0x2ce)+_0x2d8347(0x2f3));}},!![]);function _0x16015c(){var _0xebc8d4=_0x15a8a6,_0x2d7ede={'HhvtJ':function(_0x3e85ac,_0x584d0d){return _0x3e85ac+_0x584d0d;},'sdURX':_0x5f5962[_0xebc8d4(0x185)]};if(_0x5f5962[_0xebc8d4(0x1f6)]!==_0xebc8d4(0x3c2))_0x2748ec[_0xebc8d4(0x3a7)]('no\x20li'+_0xebc8d4(0x375)+_0xebc8d4(0x12e)+'\x20capt'+'ured\x20'+_0xebc8d4(0x3e7)),_0x2c3bb1['push'](''),_0x303893['push']('The\x20h'+_0xebc8d4(0x45d)+_0xebc8d4(0x1bf)+'on\x20th'+'e\x20gam'+_0xebc8d4(0x26a)+_0xebc8d4(0x349)+'date('+');\x20no'+_0xebc8d4(0x204)+_0xebc8d4(0x27b)+'ured\x20'+_0xebc8d4(0x329)),_0x4515ad[_0xebc8d4(0x3a7)](_0x5f5962['RzAqk']);else{var _0x4e9cf5=window[_0xebc8d4(0x200)+'WebMo'+'dkit']&&window[_0xebc8d4(0x200)+_0xebc8d4(0x206)+'dkit']['Runti'+'me']||null,_0x3a82dc=_0x4e9cf5&&_0x4e9cf5[_0xebc8d4(0x281)+_0xebc8d4(0xf3)+_0xebc8d4(0x30a)],_0x5518ce=_0x3a82dc&&_0x3a82dc['scrip'+_0xebc8d4(0x2be)],_0x496a70={},_0x1bda27=[];for(var _0x37214d in _0x5c6675){_0x496a70[_0x37214d]=_0x5f5962['IzuWh']('0x',_0x5c6675[_0x37214d][_0xebc8d4(0x28e)][_0xebc8d4(0x16b)+_0xebc8d4(0x442)](0x356+0x1*0x13ba+0x5c*-0x40));if(_0x5c6675[_0x37214d][_0xebc8d4(0x25f)+_0xebc8d4(0x285)])_0x1bda27[_0xebc8d4(0x3a7)](_0x37214d);}var _0x2cf674={};for(var _0x437340 in _0x5c6675)_0x2cf674[_0x437340]=_0x29c80b(_0x5c6675[_0x437340][_0xebc8d4(0x28e)]);var _0x52a538={},_0x11177e=null;try{_0x52a538=_0x5eeb36();}catch(_0x118981){if(_0x5f5962[_0xebc8d4(0x2ad)]===_0x5f5962[_0xebc8d4(0x2ad)])_0x11177e=String(_0x118981&&_0x118981['messa'+'ge']||_0x118981);else return _0x1131f1();}var _0x4b3022={'version':_0x4764a8,'when':new Date()[_0xebc8d4(0x343)+_0xebc8d4(0x26e)+'g'](),'elapsedMs':Date[_0xebc8d4(0x36a)]()-_0xe3dd93,'frame':location[_0xebc8d4(0x29e)][_0xebc8d4(0x163)](-0x9c7+-0x1*0x1f6a+0x2931,0x2270+0x433*0x1+-0x262b),'host':_0x2ff23e,'frameRole':_0x1ac922,'uwmk':!!_0x4e9cf5,'il2CppContext':!!_0x3a82dc,'typeCount':_0x5518ce?Object[_0xebc8d4(0x2bc)](_0x5518ce)[_0xebc8d4(0x455)+'h']:null,'arm':_0x19df63,'assemblies':_0x47a3df,'hooksTotal':_0x243733[_0xebc8d4(0x455)+'h'],'hooksApplied':_0x5f5962[_0xebc8d4(0x16f)](_0x568322),'hooksResolved':_0x5e75f4(),'hooksRegisteredAtArm':_0x19df63[_0xebc8d4(0x383)+_0xebc8d4(0x3de)+_0xebc8d4(0x1a7)]||0xd1+-0x5b3*0x1+0x4e2,'hookErrors':_0x356e86[_0xebc8d4(0x163)](0xedb+0x2a*0x87+-0x2501,0x139*-0x19+-0x21d9+0x4072),'instances':_0x496a70,'classNames':_0x2cf674,'instancesReplaced':_0x1bda27,'hookFireProof':_0x571a35,'survey':_0x52a538,'surveyRows':Object[_0xebc8d4(0x2bc)](_0x52a538)[_0xebc8d4(0x257)+'e'](function(_0x19f7bb,_0x23853a){return _0x2d7ede['HhvtJ'](_0x19f7bb,_0x52a538[_0x23853a]['lengt'+'h']);},-0xa40+0x440+-0x1*-0x600),'reads':{'ok':_0x5c2d1b['ok'],'failed':_0x5c2d1b[_0xebc8d4(0x248)+'d'],'lastError':_0x5c2d1b[_0xebc8d4(0x3d1)+_0xebc8d4(0x24f)],'source':_0x5c2d1b['sourc'+'e']},'globals':_0x148008(),'diff':_0x2d347f['slice'](-0x4b*0x76+-0x4f6+-0x58*-0x73,-0x1e05+-0xe62+-0xbb*-0x3d),'uwmkLog':_0x6cca34['slice'](0xab3+-0x1*0x17e5+0xd32,0xec7+0x263*-0xc+0xdf1),'warnings':[]};if(_0x11177e)_0x4b3022[_0xebc8d4(0x2a6)+_0xebc8d4(0x1c6)][_0xebc8d4(0x3a7)](_0xebc8d4(0xf0)+_0xebc8d4(0x33e)+_0xebc8d4(0x382)+_0x11177e);if(_0x19df63[_0xebc8d4(0x396)])_0x4b3022[_0xebc8d4(0x2a6)+_0xebc8d4(0x1c6)][_0xebc8d4(0x3a7)](_0x5f5962['JVSzm'](_0xebc8d4(0x445)+_0xebc8d4(0x337)+'g\x20fai'+_0xebc8d4(0x382),_0x19df63['error']));_0x4b3022[_0xebc8d4(0xf0)+_0xebc8d4(0x2d0)]===0x64*-0x10+-0x110b*-0x1+-0xacb&&Object[_0xebc8d4(0x2bc)](_0x4b3022[_0xebc8d4(0x162)+'nces'])[_0xebc8d4(0x455)+'h']>-0x2029+0x853*-0x1+-0xa1f*-0x4&&_0x4b3022[_0xebc8d4(0x2a6)+_0xebc8d4(0x1c6)]['push'](_0x5f5962[_0xebc8d4(0x2ec)](_0x5f5962[_0xebc8d4(0x315)](_0x5f5962['KHGNc'],Object['keys'](_0x4b3022[_0xebc8d4(0x162)+_0xebc8d4(0x2e4)])[_0xebc8d4(0x455)+'h']),_0xebc8d4(0x1e2)+'ct(s)'+'\x20but\x20'+_0xebc8d4(0xe1)+_0xebc8d4(0x126)+_0xebc8d4(0x23e))+(_0x5c2d1b[_0xebc8d4(0x3d1)+'rror']?_0x5f5962['xkAqu'](_0xebc8d4(0x3ef)+_0xebc8d4(0xf8),_0x5c2d1b['lastE'+_0xebc8d4(0x24f)]):'No\x20re'+_0xebc8d4(0x29d)+'iled,'+'\x20so\x20e'+'very\x20'+'offse'+_0xebc8d4(0x3af)+'\x20skip'+_0xebc8d4(0x1ef)+'y\x20typ'+'e.'));if(_0x4b3022['globa'+'ls']&&!_0x4b3022[_0xebc8d4(0x2c9)+'ls']['heapU'+'8']){var _0x3c8492='';_0x4b3022[_0xebc8d4(0x3ae)+_0xebc8d4(0x27e)+'oof']&&(_0x3c8492=_0x5f5962[_0xebc8d4(0x444)](_0x5f5962[_0xebc8d4(0x111)](_0x5f5962['RvTKB'](_0x5f5962[_0xebc8d4(0x271)](_0x5f5962['IocoB'](_0x5f5962[_0xebc8d4(0x21e)]+_0x4b3022[_0xebc8d4(0x3ae)+_0xebc8d4(0x27e)+'oof']['atMs'],_0xebc8d4(0x420)+_0xebc8d4(0x366)+_0xebc8d4(0x17b)+_0xebc8d4(0x17a)+'=')+_0x4b3022[_0xebc8d4(0x3ae)+'irePr'+_0xebc8d4(0x27a)][_0xebc8d4(0x227)+_0xebc8d4(0x1eb)+'nc'],_0xebc8d4(0x3c3)+_0xebc8d4(0x295)+_0xebc8d4(0x3ec)+_0xebc8d4(0x419)),_0x4b3022['hookF'+_0xebc8d4(0x27e)+'oof'][_0xebc8d4(0x3ec)+'veGam'+_0xebc8d4(0x256)+'re'])+(_0xebc8d4(0x416)+'rce:\x20'),_0x4b3022['hookF'+_0xebc8d4(0x27e)+_0xebc8d4(0x27a)]['gameS'+_0xebc8d4(0x3fc)+_0xebc8d4(0xfa)+'e']||_0x5f5962[_0xebc8d4(0x312)]),'),\x20so'+'\x20the\x20'+_0xebc8d4(0x18e)+_0xebc8d4(0x3eb)+_0xebc8d4(0x2cc)+_0xebc8d4(0x378)+_0xebc8d4(0x30b)+'d\x20is\x20'+'not\x20r'+'eacha'+_0xebc8d4(0x22a)+_0xebc8d4(0x150))),_0x4b3022[_0xebc8d4(0x2a6)+'ngs']['push'](_0x5f5962[_0xebc8d4(0x2a2)](_0x5f5962['ewkPT'](_0x5f5962[_0xebc8d4(0xe6)](_0xebc8d4(0x200)+'\x20inst'+'ance\x20'+'not\x20r'+_0xebc8d4(0x364)+'ed\x20ye'+_0xebc8d4(0xed)+_0xebc8d4(0x17f)+'\x20',_0x4b3022['globa'+'ls'][_0xebc8d4(0x3fa)+'ource']||_0xebc8d4(0x1b5)),_0xebc8d4(0x270))+(_0xebc8d4(0x2d7)+_0xebc8d4(0x12f)+_0xebc8d4(0x41a)+'\x20bloc'+'ked\x20u'+'ntil\x20'+_0xebc8d4(0x231)+_0xebc8d4(0x2a4)+'ect\x20w'+'ith\x20M'+_0xebc8d4(0x2eb)+'.HEAP'+_0xebc8d4(0x3e2)+_0xebc8d4(0x361)+_0xebc8d4(0x18d)+'.'),_0x3c8492));}(_0x4b3022['globa'+'ls']&&!_0x4b3022[_0xebc8d4(0x2c9)+'ls'][_0xebc8d4(0xf4)+'Wrapp'+'er']||_0x4b3022['globa'+'ls']['value'+'Wrapp'+'er']===_0x5f5962[_0xebc8d4(0x185)])&&_0x4b3022[_0xebc8d4(0x2a6)+_0xebc8d4(0x1c6)][_0xebc8d4(0x3a7)](_0x5f5962[_0xebc8d4(0x138)]);if(_0x4b3022[_0xebc8d4(0x383)+'Total']>0x1c25+0xfab+-0x2bd0&&_0x5f5962['nvaLi'](_0x4b3022[_0xebc8d4(0x383)+_0xebc8d4(0x147)+'ed'],0x1*0xca1+0x1ebb+-0x2b5c)&&_0x5518ce){if(_0x5f5962['LhKqD'](_0x4b3022['hooks'+_0xebc8d4(0x355)+'ved'],-0x1*0x85f+-0x47+0x52*0x1b))_0x4b3022[_0xebc8d4(0x2a6)+_0xebc8d4(0x1c6)][_0xebc8d4(0x3a7)](_0x5f5962[_0xebc8d4(0x1d2)](_0x5f5962['erWnU'](_0x5f5962[_0xebc8d4(0x2e1)](_0x5f5962[_0xebc8d4(0x19a)](_0xebc8d4(0x1f7),_0x4b3022['hooks'+_0xebc8d4(0x251)]),'\x20hook'+_0xebc8d4(0x390)+'e\x20eve'+_0xebc8d4(0x350)+'N\x20by\x20'+_0xebc8d4(0x31e)+_0xebc8d4(0x339)+_0xebc8d4(0x173)+'\x20pass'+'\x20'),_0x5f5962[_0xebc8d4(0x293)])+_0x5f5962[_0xebc8d4(0x333)],'Regis'+'tered'+'\x20')+_0x4b3022['hooks'+_0xebc8d4(0x3de)+_0xebc8d4(0x1a7)+_0xebc8d4(0x440)]+(_0xebc8d4(0x106)+_0xebc8d4(0x28b)+_0xebc8d4(0x1b8)+_0xebc8d4(0x2a0)+_0xebc8d4(0x33d)+_0xebc8d4(0x1b1)+_0xebc8d4(0x1da)+_0xebc8d4(0x27f)+'.'));else{if('ojmeC'!=='bpVDY')_0x4b3022['warni'+_0xebc8d4(0x1c6)]['push'](_0x5f5962[_0xebc8d4(0x1a3)](_0x5f5962[_0xebc8d4(0x169)](_0x5f5962['yrSvx'](_0x5f5962['OUZYS']+_0x4b3022[_0xebc8d4(0x383)+_0xebc8d4(0x355)+_0xebc8d4(0x177)]+_0xebc8d4(0x373),_0x4b3022['hooks'+_0xebc8d4(0x251)]),_0xebc8d4(0x106)+'(s)\x20t'+_0xebc8d4(0x264)+_0xebc8d4(0x12d)+'index'+_0xebc8d4(0x327)+_0xebc8d4(0x1e5)+'ed\x20no'+'ne.\x20T'+'he\x20si'+_0xebc8d4(0x2a3)+'re\x20'),'(this'+_0xebc8d4(0x3b1)+_0xebc8d4(0x415)+'fo*)\x20'+_0xebc8d4(0x40d)+'id\x20do'+_0xebc8d4(0x3f8)+'t\x20mat'+_0xebc8d4(0x1d5)+'is\x20bu'+_0xebc8d4(0x10e)));else{var _0x349273=[_0xebc8d4(0x19e)+_0xebc8d4(0x25b)+_0xebc8d4(0x41f),_0xebc8d4(0x19e)+'Game',_0xebc8d4(0x3fb),'unity'+_0xebc8d4(0x25b)+'nceWr'+'apper'],_0x35ee96={};for(var _0x51f8d0=0x2160+-0x16*-0xf7+-0x369a;_0x51f8d0<_0x349273['lengt'+'h'];_0x51f8d0++){var _0x3b0605=_0x349273[_0x51f8d0],_0x123041=typeof _0x10b013[_0x3b0605];_0x35ee96[_0x3b0605]=_0x123041===_0x2d7ede['sdURX']?_0xebc8d4(0x1d0)+_0xebc8d4(0x2cd):_0x123041;}var _0x5d8a4b=_0x4dfa05();_0x35ee96[_0xebc8d4(0x3fa)+_0xebc8d4(0x3fc)]=_0x37045a['sourc'+'e'];try{_0x35ee96['hasMo'+'dule']=!!(_0x5d8a4b&&_0x5d8a4b['Modul'+'e']),_0x35ee96[_0xebc8d4(0x209)+'8']=!!(_0x5d8a4b&&_0x5d8a4b['Modul'+'e']&&_0x5d8a4b[_0xebc8d4(0x190)+'e'][_0xebc8d4(0x16a)+'8']),_0x35ee96['heapB'+_0xebc8d4(0x379)]=_0x35ee96['heapU'+'8']?_0x5d8a4b[_0xebc8d4(0x190)+'e']['HEAPU'+'8'][_0xebc8d4(0x455)+'h']:0x20d*0xc+0x23*0xf3+-0x66d*0x9;}catch(_0x4004c6){_0x35ee96['hasMo'+_0xebc8d4(0x136)]=![],_0x35ee96[_0xebc8d4(0x209)+'8']=![],_0x35ee96[_0xebc8d4(0x1d7)+_0xebc8d4(0x379)]=-0x1129+-0x2e7*-0x3+0x874;}return _0x35ee96[_0xebc8d4(0xf4)+_0xebc8d4(0x283)+'er']=typeof _0x5503a6,_0x35ee96;}}}return _0x4b3022[_0xebc8d4(0x383)+_0xebc8d4(0x147)+'ed']>0x1768+-0x6d9+-0x108f&&!_0x4b3022[_0xebc8d4(0x162)+_0xebc8d4(0x2e4)][_0xebc8d4(0x446)+'ntrol'+'ler']&&_0x4b3022[_0xebc8d4(0x2a6)+'ngs']['push'](_0x5f5962[_0xebc8d4(0x3a2)]+(_0xebc8d4(0x356)+_0xebc8d4(0x18a)+_0xebc8d4(0x172)+_0xebc8d4(0x36d)+_0xebc8d4(0x363)+_0xebc8d4(0x325)+'\x20or\x20t'+_0xebc8d4(0x45b)+'ok\x20is'+'\x20on\x20t'+_0xebc8d4(0x35f)+_0xebc8d4(0x168)+_0xebc8d4(0x244)+'ad.')),_0x4b3022[_0xebc8d4(0x162)+_0xebc8d4(0x37b)+_0xebc8d4(0x21a)+'ed'][_0xebc8d4(0x455)+'h']&&_0x4b3022[_0xebc8d4(0x2a6)+_0xebc8d4(0x1c6)][_0xebc8d4(0x3a7)](_0x5f5962[_0xebc8d4(0x1ad)]('rebui'+'lt\x20si'+_0xebc8d4(0x3d7)+_0xebc8d4(0x15c)+'captu'+_0xebc8d4(0x342)+_0xebc8d4(0x1d3)+_0xebc8d4(0x194),_0x4b3022['insta'+_0xebc8d4(0x37b)+_0xebc8d4(0x21a)+'ed']['join'](',\x20'))),_0x4b3022;}}function _0x2023a8(_0x2c779a){var _0x4bf2db=_0x15a8a6;console[_0x4bf2db(0x3fd)]('%c[sa'+'kura]'+_0x4bf2db(0x1a2)+'lWarz'+_0x4bf2db(0x23d)+'rt',_0x5f5962['exwcc']+_0x2bd5ae+_0x5f5962[_0x4bf2db(0x40e)],_0x2c779a),console[_0x4bf2db(0x3fd)](_0x5f5962['RLJDU'](_0x5f5962[_0x4bf2db(0x1d6)](_0x8c722b,'\x0a'),JSON['strin'+_0x4bf2db(0x2d4)](_0x2c779a,null,-0x1951+0x5*-0x68f+0x3a1d))+'\x0a'+_0x4c80b5),_0x1b7acd(_0x5f5962['FRzgz'],{'report':_0x2c779a});}function _0x446b49(){var _0x5cc71b=_0x15a8a6;try{if(_0x5cc71b(0x1f5)===_0x5f5962['ynMdj'])return _0x5f5962[_0x5cc71b(0x1f9)](_0x16015c);else _0x5d14e4[_0x5cc71b(0x341)][_0x5cc71b(0x18f)+'ed']=![];}catch(_0xa57879){return{'version':_0x4764a8,'when':new Date()[_0x5cc71b(0x343)+_0x5cc71b(0x26e)+'g'](),'elapsedMs':_0x5f5962['hUqmB'](Date['now'](),_0xe3dd93),'host':_0x2ff23e,'uwmk':!!(window['Unity'+_0x5cc71b(0x206)+'dkit']&&window[_0x5cc71b(0x200)+_0x5cc71b(0x206)+_0x5cc71b(0x29f)]['Runti'+'me']),'il2CppContext':![],'arm':_0x19df63,'hooksTotal':_0x243733[_0x5cc71b(0x455)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x5f5962[_0x5cc71b(0x1ff)](String,_0xa57879&&_0xa57879[_0x5cc71b(0x40f)+'ge']||_0xa57879)};}}function _0x3e871d(){var _0x32e0b7=_0x15a8a6,_0x1e4105={'CpGum':function(_0x5085e1){return _0x5085e1();},'FTeGu':function(_0x6f8f14,_0x112337,_0x102afb){return _0x6f8f14(_0x112337,_0x102afb);}},_0x2cd42b=0x19*-0x97+0xb*0x31c+0x11*-0x125;_0x5f5962['IyhAX'](_0x2023a8,_0x5f5962[_0x32e0b7(0x34a)](_0x446b49)),function _0x94d37f(){var _0x33a3f7=_0x32e0b7;if(!_0x243733['lengt'+'h'])try{_0x1e4105['CpGum'](_0x3d04b6);}catch(_0x489241){}_0x2cd42b++,_0x2023a8(_0x1e4105[_0x33a3f7(0x19d)](_0x446b49));if(!_0x243733[_0x33a3f7(0x455)+'h']&&_0x2cd42b<-0x63+-0x1*-0x46c+-0x2dd*0x1)_0x1e4105['FTeGu'](setTimeout,_0x94d37f,0x1*-0x1b6+0x1a2a+-0x47*0x3c);else{if(!Object['keys'](_0x5c6675)[_0x33a3f7(0x455)+'h']&&_0x2cd42b<-0x5*0x32e+-0xccf*-0x1+0x443)setTimeout(_0x94d37f,0x2454+-0x4f8+-0x178c);else setTimeout(_0x94d37f,-0x1a*-0x19+-0x413*0x1+0x639);}}();}if(document[_0x15a8a6(0x23b)])_0x3e871d();else document['addEv'+_0x15a8a6(0x1a6)+_0x15a8a6(0x1e3)+'r']('DOMCo'+_0x15a8a6(0x348)+_0x15a8a6(0x3e8)+'d',_0x3e871d,{'once':!![]});})()));function _0x3166(_0x246ed2,_0x58b182){_0x246ed2=_0x246ed2-(0x1*-0x2009+0xf14+0x11d6);var _0x435d70=_0x5e47();var _0x4d2511=_0x435d70[_0x246ed2];if(_0x3166['Ylikqy']===undefined){var _0x1f7c95=function(_0x4fc078){var _0x4a807e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5d613d='',_0x2e9f1e='';for(var _0x41a0a0=-0xbb7+0x4*0x74f+-0x1185,_0x499249,_0xed3113,_0x3840df=0x1829*-0x1+0xd84+-0x6d*-0x19;_0xed3113=_0x4fc078['charAt'](_0x3840df++);~_0xed3113&&(_0x499249=_0x41a0a0%(0xa3*0x3+-0x4f*0x13+0x3f8)?_0x499249*(0xa*-0x3cf+0xbf9+0x1a5d)+_0xed3113:_0xed3113,_0x41a0a0++%(0x9*-0x69+0x23be+-0x2009))?_0x5d613d+=String['fromCharCode'](-0x93a*-0x1+-0x1*-0xcca+-0x1505*0x1&_0x499249>>(-(-0x9aa*-0x2+-0x154e*-0x1+-0x10*0x28a)*_0x41a0a0&-0x24d1+0x8*-0x471+0x485f*0x1)):-0x88d+-0x5f6+-0x1*-0xe83){_0xed3113=_0x4a807e['indexOf'](_0xed3113);}for(var _0x4ba2e8=0x3bc+0xc5e+0x2*-0x80d,_0x294bd2=_0x5d613d['length'];_0x4ba2e8<_0x294bd2;_0x4ba2e8++){_0x2e9f1e+='%'+('00'+_0x5d613d['charCodeAt'](_0x4ba2e8)['toString'](-0x13e2+0x2c*-0x6a+-0x2*-0x1315))['slice'](-(0x18b*0x3+0xb6f+-0x100e));}return decodeURIComponent(_0x2e9f1e);};_0x3166['NQpAAN']=_0x1f7c95,_0x3166['dJrzoP']={},_0x3166['Ylikqy']=!![];}var _0x5b9da9=_0x435d70[-0x597+0xb*-0x164+-0x14e3*-0x1],_0x22bcb2=_0x246ed2+_0x5b9da9,_0x23e190=_0x3166['dJrzoP'][_0x22bcb2];return!_0x23e190?(_0x4d2511=_0x3166['NQpAAN'](_0x4d2511),_0x3166['dJrzoP'][_0x22bcb2]=_0x4d2511):_0x4d2511=_0x23e190,_0x4d2511;}function _0x5e47(){var _0x259de6=['zgLZCgW','u0TjteW','EgTTDfC','Bhr2zMG','pgj1Dhq','zg9JDw0','BMnLCW','CNHcrwW','Afv1wwy','iJ5gosa','ywnRz3i','Dg9W','Avv3zwG','B2r1Bgu','qufdrKq','BNn0yw4','mJaYntLmALjjq0W','yw1L','DY5vBMK','zuvSzw0','zYaVigO','Ag90','AwqGCMC','B3jKzxi','qxjRwKK','zwn0zwq','tfLXvgG','z21XExu','i3nHA3u','A3vYyv0','r2fTzq','AxmGD2G','lwnVChK','uuTzq2O','u0vbq2S','uM5cDum','yvLNz2S','icaGica','iefdveK','phnWyw4','DxjH','rgHdALG','DxjLzca','vfnltMu','zxH0','zw4Gyw4','lc40ktS','CJPWB2K','Dxm6n3a','ywLUAw4','uefVzuq','lwL0zw0','tKnutNK','C3bSAxq','CdO2ChG','rvzdyNy','vfr2Dfq','Eu5MrNu','AgLKzgu','qNLjza','BNq6Aw4','B3vUzdO','AgTYCuS','x19ZywS','vvDnsY4','o2zSzxG','zYdcTYa','zxG7zMW','Bcb1Cgq','Cu1TueC','v05jExy','B3vUzcW','idHWEdS','igj1Dca','vgv4Da','BwvHBNm','r0nyq0i','zw50rwW','zMzZzxq','pc9KAxy','DgLUzYa','y2XPCgi','o2fSAwC','zw50o2i','BgqGAxm','zNPNt3i','DvfcD1O','C29SDMu','DhbHC3m','yxjTAw4','icaGDhK','ifrOzsa','z2uUrgu','EtPMBgu','BwuGBM8','BMCGyxq','EsbMywK','zwz0oMe','C0P1AuG','Ag9VAW','CMuGkhi','Dg9ju08','lxDYyxa','uNvUDgK','Chr1CMu','rwXhwgu','BNrLBNq','D24Gvxa','yvv4t2O','ndbiB0zUDgC','CMvTB3y','EwXLpsi','BI5FCNu','ENzLEuK','BIbtruu','svnNzfi','icaGDMe','DhLWzq','BwuOkq','uMvZB2W','rwL0Agu','DxrVoYi','CNvUCYa','zdP0CMe','zsXdB24','nsWXndm','BNrPBwu','C2v0sw4','CgvJDhm','AguGD3i','z21HBMC','ihjLywm','tKjJDfa','BIbHihi','zxnVBhy','zefkAKe','DgGGB3i','Bgu9iMi','ywHqruq','CLzMBgC','BM93','BgX3yxi','Dw1WAw4','BM90igK','BgvMDdO','DNv3z28','D3rqsMG','oMf1Dg8','DNzwzwG','ig9Mia','Aw5PDa','DMuGB2i','EdTWywq','yxnZtMe','zwqGDgG','ExrLCW','oJHWEdS','BMnLC1i','CNnJCMK','CKnVBNq','B3nWywm','tfrlvxO','o2jVCMq','ELP2Cuq','BgvKoIa','Ag9VA3m','yuzxtgG','mhb4ktS','y2GUC3K','AgvHza','yxbP','r2fTzsG','oImYyta','uMvNAKy','Fdr8nNW','D2LUzg8','Awq9iNm','r0DFr2e','CYb3zxi','u25HChm','u2vSzwm','C3r5Bgu','z2v0rMW','BhDHCNO','zxjYB3i','zw1LBNq','igfYztO','C2v0rMW','DdTIB3i','suPzqwC','BMnLv3i','i2zMzdq','C2vSzwm','lxjHzgK','lcbuyw0','zwXHChm','vu1Vwu0','sxbbr3a','C3rYAw4','u3fouw4','DcbPBMO','ChvZAa','z2v0sw4','ztPWCMu','ifnxlvC','BNjSCe0','zgLMzG','sw5KzxG','Ag9VA0y','Dcb3yxm','Aw5KzxG','lcbnzxq','vNLzwwy','mtjWEdS','AwnOlJW','m3WWFdi','BNrYB2W','DgfIBgu','lxnWywm','B2jMsq','DgHLigm','ihDOAwm','ChqGsvm','lxGIihm','y2fWDhu','C2fRDxi','igDHBwu','BNq4','ve5vs1m','igfUzca','AM9PBG','zYbZy3i','v1fjq00','q3nhuwW','Ewfby3i','CMuG','AxrPywW','DhLSzt0','AgLUDa','igvUzca','sw9JB0i','zsbYzxa','D3PeCLu','BgfZDeu','DhLxzwi','zLLStxO','ChGGC28','mZe1ndu0Ae5itenN','DMvKia','BMnLigy','mJK4nJa2DwrXAxrc','Ag9VA1a','vu5QtLu','EcbZB2W','AgLSzsa','Cg9PBNq','uMvNAxm','C29Syxm','igHLyxa','icaO','vtGGAxm','CMuk','A2vLCa','C291CMm','Cg9YDge','Ewv0lG','tg9Hzgu','nhb4idK','rJKGDhC','zw5Jzsa','CMvZB2W','tNrvtvK','uu9TuhG','uMvHC28','khmPihq','ihDOAwW','qxnZzw0','CMf3','AgL0CW','Bg9dAge','B24GAwq','pc9IpG','zxmGBM8','Bxm6y2u','z2fTzvm','z2fTzq','B3vYy2u','Bg9N','ic0Gy2e','tKjZBvu','r01WDgy','A3mUBgu','AZPICMu','z2v0vwK','B2XVCJO','Aw9U','CgvZia','u2frtMq','yxPxEvC','sxLOqvG','AgvYAxq','s1DVs1e','BK1HBMe','lt4GDM8','BKDQEgm','BwvZC2e','B3v0','Aw50BYa','wLHuuwO','AgfZtw8','mtj8oxW','Ag9Ksw4','icHZB3u','C3CYlxm','AwnLihC','DMvKpq','ihn0yxK','C2v0ica','BhzLr2e','ywLSywi','zgL1CZO','BMnL','BxmGD2K','ndmSmtC','Dgv4Dem','DgHLigW','yw1Ligy','wvrsBhm','tLrVtLe','DgrSBwO','vLnpswG','AfnJCMK','B2jMqG','DciGC3q','BLLoBhi','sfPiyw4','zgf0yq','zMHNCNa','yxr0zw0','Ag9ZDg4','A3PSA1a','zsb3ywW','B3i6iZG','z2LUigC','mJCXmtG1EwDby0LZ','BM8Gseu','A2v5pq','CgX1z2K','mNb4o3O','igLKpsi','B2jMrG','Aw1L','D3jHCha','wu5gs1G','qxrbCM0','q3fgvgi','Aw5N','yxv0BZS','EKfZrwK','vvDnsYa','rLbty28','B2fYza','lYbQDw0','Cwj4veC','rxPoD2i','sKDdEKS','AwnOigy','zwvKzwq','re9uBK4','quWGqum','DYbNBg8','FdeWFdu','icaYlIa','ihnPBMm','tMjwrwW','BgvUz3q','Bgu9iMq','z2LUlwW','CKnWt0W','C2nYAxa','C2vSzIa','AguGAg8','shzVAe0','B29RCYa','zLvOt3G','BIbPzNi','D2fYBG','DJiTy3m','s0fHBwi','qvbvoca','DgLHDgu','DxjHimk3','khrOAxm','yxrJAc4','A2LUza','AwqGzg8','CMvHzca','BNzHtgK','Dte2','BcbKAxm','ntuSmtq','zNL1DM4','o3DVCMq','vxbKyxq','BwfYz2K','Aw4U','y3jLyxq','tefzrvi','DcaOC28','mtjWEc8','ms41ihu','C3vYDMu','AwvSzca','zcb0Agu','CenVBNq','DMfSDwu','ihrOzsa','Bwf4lwG','yNL0zuW','BJOG','x19hzw4','qxrgAxi','z2jHkdi','zwn0Aw4','vMfSDwu','ztTTyxi','ywz0zxi','zJmY','s1jlEg4','zYbMB3i','AguGC2K','DgHLBG','lL9Nyw0','igHVB2S','o2jVEc0','thvkyuq','lwjVDhq','zwqGyNu','o2zVBNq','zxqSig8','A2v5','AwXKlG','x19tquS','BM9Yzwq','BgvLDfy','q2TKzLO','C2fNzq','nZq4mZa','BgW6Aw4','ifvxtuS','u2nPDM8','zhL2ufC','mta4ndKZmtr1tgTOBNO','yMfS','s2P0swq','mtmYmhPcCujmzW','lNjLC28','D2fSA2K','zgf0yxm','zxnZywC','i3n3mI0','zxjLzca','CMfJDgu','psjWywq','BhvNAw4','mcbMAwu','BI5OB28','wNDTyvu','Ahq6nZa','ywDLigG','sgvHBhq','zw50','ywjSzsa','AMvJDhm','CMvHzhm','ChrLza','ug1lwg4','igzYyw0','CMvKihK','rLj6z3O','C3bYAw4','zhvSzq','igLZihi','tvb5yLq','EwvZ','yMLUzgK','zxiTCMe','BK1TrMS','B24GDgG','yxbZAg8','CY1VCMK','ihvUyxy','q3L1wwK','As1TB24','vgHLigG','DvnMq2G','Bwvnyw4','Aw9UoMy','qxbWBgK','mda7D2K','wLPgCwO','BJOWo3a','Ag90icG','zgvIDwC','sencD0G','zxjHDgu','DhDRsNK','B3CU','q3fsrhK','tgHlCuq','igfYBwu','rNj2wNC','ig9Uy2u','DxjHx3m','nJaWnteWnezYwevRza','yMfYzsa','icaHia','yMeOmJu','yNvMzMu','AxjZDca','ihnRAwW','Egvfrey','v0fswI0','ru5ept0','uwzYyK8','Aw5ZDge','C2XPy2u','igjVDgG','s1vsqs0','z2v0rwW','uwv4rfG','B25Nig8','EM5dC2W','sevbufu','Dg9tDhi','BwuUCMu','A3fVuKO','y21K','C0LlC0W','DxbKyxq','v19F','igfYzsa','yxbWBhK','ufPoCgm','ywnXrxe','BMCUcG','DMvK','ENrwwfC','B2vPALK','Bez1BMm','AwDPBMe','lsbvBMK','zwLNAhq','mNb4o2i','DxjJztO','Dgf5CYa','ywn0','ihrOAxm','Dw5UAw4','qMTSqMK','yNrkueG','DwTitNq','vKrezeW','txbRBfm','mI4WlJq','CIb5B3u','igDSB2i','tw15v3a','AgfIBgu','CMvMzxi','zw5HyMW','tw9KDwW','ywrKAw4','AwvK','D2HLBIa','BJ8PoIa','icbVzMy','CM9ZCY0','uvrqyw4','BM90ig0','AxHLzdS','zgHNr24','CMvH','Bwf4','q3bhDw0','Dw5PDhK','C3L6z0u','zxrnCvq','zfr2Dxi','ifnRAwW','zKnJBNi','re9nq28','DcbUBYa','zw50tgK','DgvYzwq','CgfYzw4','BfDHCNO','ieeGAg8','B0PWEMy','BgXLzca','CgjSEMq','CgLUzYa','tM9mEfC','Dc5wywW','igrVy3u','Dg9Y','zYbPBNq','uMvSB2e','BM9Uzq','C3bHy2u','igrPzca','DxjPBMC','Aw5Uzxi','m3WXFdC','icaGy28','zsbPBNm','lxDLAwC','mhb4ic0','zMLYzsa','Ahzkueu','AxmGBwK','DevyBLu','DMf4tg0','BNrLCJS','B25Jzsa','BMDZ','CvfHzgW','DgfSBgK','re9XyNO','B206mxa','vNvezg8','rKnIuhO','ys1ZDW','zhrOoM0','D192mG','Dw5Kzwy','vgHLigC','CePztKm','zxnWyxC','C2HHzg8','y2GGDgG','t09oqKq','AgvHCei','C25HCa','DxDTAYa','BwvUDc0','svzficG','ywLSzwq','AtmY','EdTNyxa','Aw5Qzwm','Dgv4Dge','zvbSDwC','ig9IAMu','C3rLBMu','B2f0mZi','yxbWBgK','ENPSv2u','DgvYo2y','psjZDZi','B25JBgK','B2TZihi','BMfSrNu','Cg9ZAxq','y3rZimk3','idaGyxu','CgvKigi','DhPlvxe','CMq7zM8','Cezeu04','mty3me9sEvLUzW','ALHRt0G','rLP0s1y','qNvyt1O','mcbVzIa','rMXlwKG','rKTMrMm','EMDKrgW','CMvHBa','uKfqueu','pt09u0e','qu5eihq','C2jnDuS','vw5PDhK','4Psa4Psaia','idyWCYa','iMjHy2S','DgHPBMC','mZG4mZvrzKfMvhu','v2vItw8','AxmGBM8','DdmY','AgvHCfu','Bwv0ywq','u2HHCNa','C2LUz2W','CMvKige','Ag9ZDa','BwfYA3m','r0zgvhy','ihbVC3q','ywrKrxy','ywSTD28','B1HIDui','CMuGAwC','EcaXmNa','CZPJzw4','ruXKAKy','ywjSzwq','zxbSywm','psjJB2W','qu1YB2K','tKrRwfO','BKjozLK','oYi+tM8','v2vHCg8','vNvlshq','Ate2','rfrcA08','DNnAwNm','s0v6vK4','CI5QCYa','B3jPz2K','ruDvvxG','zgLUzZO','yMXLig4','AxnWBge','yLvgtNq','ihjNyMe','Bgu9iMm','A3mGD2G','teLwrsa','ysbNyw0','y2nsuue','jwnBC2e','CgvYBw8','lwLUzgu','CxvLCNK','pgrPDIa','CMvWB3i','lK1Vzhu','ywXPz24','yM9KEq','zsb1C2u','ihjLCg8','BgrZlIa','mcaWige','yxbWzxi','ywrKCMu','vMn4tKC','yxK6zMW','DMvYBg8','yxmGzMK','DhLWzum','BNnWyxi','zMfPBgu','Dgf0Dxm','ys1ZDY0','BMD0AcW','zwfKEsa','zenOAwW','CgfUpG','CNjVCG','DwvxCMe','vg90ywW','zevTB3C','BMCGlYa','zw5NDgG','i2y3zwu','zuf0rMK','CMvKDwm','A2v5zg8','Aw5PDgu','twTWuvO','sw5ZDge','mYWXnZC','DuDJyxa','ig9UBhK','CMvWBge','CMvKia','zMfRzq','B2fKzwq','Fdr8ma','BYbHihq','q2rpuwi','CI5KBgW','ys1ZA2K','x2DHBwu','nYWUnsK','zsDZig8','A2LUzYa','CM91BMq','B2XLig4','u3rYAw4','EMzou3O','ks4G','rK9sr0W','C3nPBMC','Cg9ZDe0','zZOXmha','igLUC3q','zxDrthu','CMeTC3C','D3frA1m','CgXHEwu','B29M','ignHChq','y29SB3i','kZb4','AxjLuhi','C3rHCNq','uMzcyuG','AwWYq3a','DgvZDa','v3jHCha','ihbHz2u','y2vK','zwf0zva','BgLKihi','u3P6y1O','zsbYzw0','ic0+ia','khmPigq','yxrLigy','ihbHC3q','ChrY','vvjbx1m','Dg9WoJe','yNHXs0W','BwuUy3i','yKjTtwK','zNvUy3q','z2fTzsa','nxWWFdi','ywL0Aw4','CMfTzsa','yxjT','C3mGmhG','lxyYE2e','icaZlIa','ywqGzMe','AhjLzG','zgTPDa','igfYBwK','tNntv0y','zKP6Evm','z25HDhu','zsbVyMO','yNv4A0G','D2fYBMK','ihbHBMu','yuTSD1e','CM9SBgu','B250zw4','zwqGBM8','EKTctK4','AuTlB2y','CMvMAxG','zYbIBgK','t3D4yMq','BNvTyMu','q29WAwu','mtrWEdS','zJu7yM8','Bg93oMG','sKHLBu0','iIbZDhK','CgfUzwW','CgfKrw4','ChbLCIa','yxbWzw4','A2v5CW','DwDLAfq','DerHDge','tvrdrvK','BNqZmG','y29WEq','q3LLyNi','AK1wq2m','BM8GCMu','BNrLEhq','DhDPy2u','yMrKyMu','ugPWweO','z2XVyMe','A0vJDxy','ys5ZA2K','zxHPC3q','Aw5Lza','C25HChm','y2Hwvwy','EvjVD3m','lMrSBa','igzVCIa','icaGia','z2LMEq','B25Tzxm','DwfUvgy','sgvHCca','lde3nYW','zxqUia','zcdcTYa','mteWne9SrMX6wG','uwX3tMq','B21Tyw4'];_0x5e47=function(){return _0x259de6;};return _0x5e47();}
