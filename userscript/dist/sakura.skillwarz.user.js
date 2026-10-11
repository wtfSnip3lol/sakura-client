// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.0.5
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

function _0x2e8b(){var _0x3136f5=['quvyD3i','lYbQDw0','y3qOCYK','EhPWq2S','pc9KAxy','B1DvtgO','AvPpDem','CNvUCYa','uxP0vwu','tJWVyNu','C2TPBMC','t25PCwq','r0DFr2e','DxjPBMC','uMvHC28','tfzwtMW','zNDIzeS','zM9UDdO','r0HxyNG','mhWXFdi','BwuGAw4','B2fKzwq','C3rHBMm','AgLZiha','Aw5Lza','DxjH','C3rYAw4','EfnjBge','s2fUzeW','Dgv4Dem','sfrnta','wKr0yLC','t0Tnz3i','BgqGAxm','DgfIBgu','AxnWBge','vgLSs1C','oJeGmsa','uKfqueu','A3vWDMy','vw5PDhK','qNLjza','EdTNyxa','Bwf4lwG','mtm4nLfAD3HguW','BI1PDgu','zLLTCLi','BgrPBMC','zdDHotK','r2H5uMe','lIbeAxm','ig9Mia','BfDHCNO','AwqGCMC','C25yzgi','C2fRDxi','wwLkvNK','sKHIChK','vwvRy2e','yMfS','ieaG','rgriCNG','Dgf0Dxm','zgTPDc4','C2v0ica','qu5pveG','zMLSDgu','B24GDgG','AfnJCMK','ihnRAxa','DMvKpq','BwuUy3i','DgLHDgu','BNrLCJS','zwDZA1G','Bgv4oJa','zw1LBNq','ig90Agu','y29MB3i','Axb0igK','Dw1WAw4','zvfTqKG','rxfVu00','DuXPwMS','4Psa4Psaia','C0XWDeS','s0TYq3e','tNnWu2G','ig9IAMu','ywn0Axy','lxyYE2e','igHPzd0','BwvZC2e','mtqZlde','Aw5ZDge','EcaXmNa','wLvgs1C','ignHChq','ywjSzsa','BMuUifq','AKjOrK8','vLjLsxG','C3bHy2u','kZb4','sgfUsey','D2LUzg8','B3jKzxi','ze12t24','B2SGzMK','ignVBNm','C2v0vwK','zMfPBgu','BgvUz3q','CMfTzsa','CMvWBge','rhv2B0K','C2nYAxa','nxWYFdq','FdD8m3W','zgL1CZO','AxHLzdS','uMvZB2W','B2SGAxm','mtu5nLfKvLjeCW','ys1ZDW','zsbYzw0','CMDIysG','BMnLv3i','zwqGEwu','ys1ZDY0','iJ54pc8','zsDZig8','CLrtENi','A2LUza','sLzWAfG','yxrnCW','sKjprxC','zgvIDwC','CMvKihK','igDHBwu','Bg9N','igzHA2u','Aw1L','y29Kzq','u2fRDxi','BhbyDM0','yNL0zuW','sg9VA3m','yxr0zw0','C3CYlwG','khmPihq','DwHuvLu','A3P6reG','C3bSAxq','CMvHBa','Aw5PDgu','AwrXvgq','yZKIpNC','C3rLBMu','DgLUzYa','ywXSzwq','Ag9VAW','rvHbB2y','A3mGD2G','zvfztM8','zg9JDw0','AgfIBgu','u3LhA1u','DxjHx3m','DgvYzwq','zsb0Age','vhjKr0G','vMfSDwu','y3jLyxq','mhb4ktS','zuvSzw0','uNjzvNq','zZO0ChG','BM8Gseu','ihDOAwW','Cg9YDge','C29Xz00','DhjHBNm','v1blA00','yxvSDa','ic0Gy2e','igfWCgW','B2jQzwm','Cfjctw0','BhDHCNO','psjWywq','AwWYq3a','vez5yva','Ag9Ksw4','igL0ige','CvzTsKe','BNq4','r2L3Aeq','t0TTtxq','ihbVC3q','AurXzxC','vKzsquS','Aw5N','odq2mZKWmeP6veP6yq','B29RCYa','zKLqqMK','Ag9VA3m','lwjYzwe','DuPyAKC','CNqGEwu','B29cDfi','D24Gvxa','BMD0AcW','vgHdAuO','qw5mwey','zJmY','EdOYmtq','EKDgC3a','yxmGBM8','wNbOAgK','vM5RAuW','zsbNyw0','zenOAwW','Eg11r1y','ksbVCIa','A2v5zg8','uNH1swO','zwqGBM8','DcbIzwu','zYbxzwi','icbVzMy','Ahq6nZa','zxnWyxC','rKv4DgG','BgvY','lL9Nyw0','ztPWCMu','zxjLzca','yLfHs3C','nZq4mZa','igj1Dca','o2zVBNq','yxjTAw4','BwuUCMu','Dw5UAw4','zhbUwvy','B2XLig4','v1zKzM4','lg1VBM8','rviGD2K','zw5NDgG','lMrSBa','ztTTyxi','ww1KAha','zEkaPJWVCW','jwnBC2e','AgLSzsa','DgfNtwe','yxbWzw4','ifnxlva','BLDmuMm','BgfZDeu','wwvPCu4','BM90igK','oImYyta','BwfYz2K','AxjLuhi','BM90ihi','AtmY','CMvWB3i','EdTWywq','whzyEfK','oJC4DMG','BNqXnG','t3zgs1O','Bg9dAge','D1nwy3i','mhb4ic0','sMzXuge','tw9KDwW','mNb4o3O','AhjLzG','AwDnrhu','ywDHAw4','Cg9ZDe0','ihnPBMm','C29SAwq','zMXgtei','u2Hvs3O','CI5QCYa','yxjT','DhbHC3m','qMDPC2y','uKPYreu','z2uUrgu','u2nPDM8','AgvHCfu','vgfTCgu','sw5KzxG','uMfZzxe','DMvYBg8','AxnUvK4','yZfKo2m','CgvJDhm','B206mxa','BJOWo3a','idaGyxu','Dg9Y','DhrWz3C','A0fmB2y','uxrQvNO','CMf3','CM1VBMS','mda7D2K','EdTVDMu','zvbSDwC','ChrY','BwuUx2C','BM9Uzq','zsb1C2u','wgvtq2i','EwXLpsi','zhvSzq','Aw9U','uLbRvNu','wwXoD00','Bgu9iMm','v3jHCha','BI5OB28','o2zSzxG','DeDpsey','yxrHihi','z0rLv1G','ifrOzsa','DY5vBMK','yxbP','y2fWDhu','ywnRz3i','AgfZtw8','phnWyw4','AwvSzca','DdTIB3i','zxbSywm','D0TAC1u','D2fSA2K','sYbZy3i','BNrPBca','zxzLCNK','mhb4idu','yxbWBgK','y21K','B246y28','zYbZy3i','ywrKrxy','Dxm6n3a','yM9KEq','icaYlIa','yw1L','C2XPy2u','DhLWzum','yxK6zMW','CJPWB2K','uIbbq1q','DxrVo2i','ihzPysa','yxbWzxi','ywDLigG','CMvSyxK','lde3nYW','ChvZAa','i2y3zwu','zcbKAwe','zfHbz3K','wKDpq1m','BM8GBgK','BwuOkq','yNv0Dg8','zMXLEdO','u3rYAw4','suvXq0q','DLHqzu4','ihvUyxy','B25Nig8','zxiTCMe','DMvK','EtPUB24','oImXnta','zwfKEsa','rhvKuvq','C291CMm','z2LUigC','BwuGD2u','Bez1BMm','tu5Hr28','igfUzca','zYbIBgK','zxi7iJ4','uMjLsMO','ChrLza','zxqUia','sM5qEwe','v19F','D2fYBG','rNPLwvi','ifnRAwW','zwqGysa','y2GUC3K','zxqSig8','lt4GDM8','CgfUzwW','C25HChm','ihnVigu','ChjLDMu','vuXHvgu','khmPigq','zxnVBhy','zxGTzgK','Ag90icG','BgvKoIa','zu96A0e','C2vSzwm','CMuGkhi','pt09u0e','imk3ia','icaO','igvUzca','yw5LBca','zxjHDgu','qujTvNO','lJe4ktS','CZPJzw4','B2XVCJO','CMvMzxi','zNjHBwu','Bgu9iMi','y2XVC2u','DciGC3q','B2fYza','EMDPzvO','B3vYy2u','zw50','Dte2','q3PbqwS','zYbMywK','y2vK','EfbdwuG','ywqGzMe','Ag9VA1a','ifnxlvC','CMvMAxG','z2LMEq','ENveCeK','zwz0oMe','qxbWBgK','s1LrBfe','y3nZvgu','B3nWywm','zMfRzq','ihbHz2u','Dg9WoJe','ywrKAw4','i2jKytK','su5mvLK','CMvKia','BwuGBM8','qw14tgm','Ag9VA0y','B2jM','BgW6Aw4','AgfUzwq','Ag9Twxm','igTPBMq','B1vqDgu','igfYztO','whLgz1q','Acbxzwi','t0SGt1y','s1vsqs0','AwrLBNq','igrPzca','ks4G','Aw5KzxG','BxHSy2K','Fdj8nxW','twfHDNC','A2vKihu','ENPNrhC','pgiGC3q','CuP5CLG','vgHLigG','DgvYo2y','DcbPBMO','DdmY','txHrzNK','vNLpueK','psjJB2W','D192mG','zwfJAge','zuzvyvm','Aw9UoMy','Aw5PDa','ELfNCMq','Dc5KBgW','zwXVywq','u2vSzwm','o2jVCMq','zJu7yM8','ihn0yxK','Dg9W','r3DerK4','DgvZDa','BwLywxe','ntG5oty4ofL6DgjJvW','D3jHCha','vKfOBfu','DZiTB3u','DerHDge','B2TZihi','Dc4kcLq','zgTPDa','zJfIo2i','DMuGB2i','i3nHA3u','z2v0rwW','ihDOAwm','y2fSlMq','igjVDgG','igHVB2S','BNvTyMu','mcbVzIa','C2v0sw4','BNfTuuS','re9nq28','z2fTzsa','zeXMyxe','ugTXBKG','DYbNBg8','vtGGAxm','BMnLC1i','DMfSDwu','z1rnyMe','mNb4o2i','B2f0nJq','BgrZlIa','ntCXnMXlze1juG','DtmY','i2zMyJm','BLzlt24','BM90ig0','D3jPDgu','DeDlwK0','vgHPCYa','zsbUB3q','qxnZzw0','wwTItNm','Awq9iNm','qxrIDK4','zxnZywC','B3i6i2y','BgLKihi','EvvTAhC','v25mDg4','CMfUzg8','DxDTAW','t0fftva','x19tquS','zw50rwW','mJm0nfbXvLHNqG','DhrVBJ4','BfDqB2e','ihbHBMu','DgHLigm','DZOWidi','y2GGDgG','BIbtruu','z3PPte4','CMvZB2W','B2jMqG','lcbuyw0','DxDTAYa','mhW2Fdq','CxvLCNK','DgHLigC','iIbZDhK','mtjWEdS','CMfJDgu','BunsA1i','vgv4Da','AMTlBLG','ndmSmtC','sfLAtuO','zwn0zwq','CMrLCJO','yw1LihC','tKTSreO','AM9PBG','Cg9ZAxq','zgf0zsG','BcWk','AwDPBMe','AgvHza','DhDPy2u','uMvSB2e','yNvPBhq','DMvYEsa','yxjKlxi','zsbLDMu','y2vKigi','BMTLEsa','icaXlIa','y2uSihm','AgvHCei','CIb5B3u','zgf0zsa','vhDevwm','D2fYBMK','CKD2thu','yw5Jzsa','BNvpDeC','lxnUyxa','BMuGAg8','CMfUihK','Cw5twgW','vePAyvG','lGOkswy','yvP0quC','Esbku08','zxH0','igfYBwu','CNvUDgK','BNjzqKO','ig9Uihq','z2jHkdi','B2r1Bgu','AguGB2W','AwnLihC','ywjSzwq','ExrLCW','icaGDMe','AwzMzxi','zgLMzG','BNrYB2W','CMnSEKy','v0vmuLe','BMnLigy','BMnLCW','x2DHBwu','CgfYzw4','BNrLBNq','BNn0yw4','zxmGB2y','DgfSBgK','i3n3mI0','BgvMDdO','sevbufu','CMeTC3C','zuf0rMK','AxmGBwK','qM90Aca','Afrrvhy','z0PVEvC','qxfmt1G','yNvMzMu','BgTXEe8','BK1HBMe','mtrWEdS','icaZlIa','y1HtuNm','BLj1BNq','BNrPBwu','CgvYBw8','qvbvoca','CMvHzhm','rviGvvC','zhvYAw4','vxnqA1m','khrOAxm','C3Hsqu0','zwn0Aw4','B2jMrG','q2HeEKS','mI4WlJu','lJmPo2q','i2zMzdq','nZCSlJq','DvvJBwq','Dw5PDhK','yxbWBhK','AwnOigy','x19ZywS','uMvNAxm','zNL1wwC','C2v0','BI5FCNu','icaGDhK','Axr5','icaGy28','oYi+tM8','DxjHvge','lxGIihm','pgrPDIa','DxjLzca','mcbMAwu','yuziBgi','y3vYC28','igfYzsa','vvjbx1m','CgX1z2K','C3mGmhG','ys1ZA2K','AwXLzcW','BM93','CM91BMq','zdP0CMe','sgvHBhq','DcbUBYa','CwjfDvy','ChGGC28','DgfN','BNbdsfG','tw5rvNm','DYbLEha','Dde2','AguGAg8','z2v0vwK','lNjLC28','DhLWzq','AxmGyNu','DcbTyxq','Bg9Iq0m','Bwvnyw4','mJu1lde','CNnJCMK','wM1rAxy','zwrnCW','zsbYzxa','zwXHChm','icaGia','CgvKigi','y2XPCgi','AgvYAxq','sej3D2y','zgLUzZO','zKzYBxq','u1L2qNO','C3qGysa','CMTPveq','DhjeCw4','yMeOmJu','C3vYDMu','y29SB3i','lwjVDhq','ChPbzvC','CdO2ChG','B3j0lGO','BgvYigG','CMvIDwK','sLz4q1y','lsbvBMK','yMfYzsa','BcbHz2e','sunPwKm','yKHqr3m','DMvKia','zxjYB3i','BNrezwy','Ag9ZDa','EcbZB2W','ywrKCMu','vwz0sw4','Ag90','qxvzBNa','BMnL','sw5ZDge','CMvH','CenVBNq','igDSB2i','EwPYDfi','lwLUzgu','AcbMAwu','AxrPywW','yMX5lum','B2f0mZi','lK1Vzhu','q2vHAMW','v2v5zMK','Dcb3yxm','yw55ihC','yKPqDvm','DKTHCMq','ugjwDwm','Dg9ju08','B250zw4','B3i6iZG','Aw4U','r2fTzsG','vvDnsYa','BwvUDc0','vfDit2q','zgLZCgW','icaGica','C25HCa','AguGD3i','DdOG','BMv2zxi','CYbVCNa','AwTMEeK','B2zMC2u','C2fNzq','u0TjteW','BNnWyxi','v2vItw8','iJ5gosa','DgjcBMm','z2v0rMW','iJ5ZywS','veT2qwC','vxbKyxq','ktSGBM8','ig5VDca','uhPUyMG','qwfVD1i','A3vYyv0','CNvUBMK','A2LUzYa','v1zYwuy','B2ncDNy','Aw5Qzwm','BhvNAw4','BMDZ','Fdf8mNW','yw1Ligy','tLD4qxq','ic0+ia','C29SDMu','DgHLiha','zYdcTYa','zw50tgK','oInMn2u','yMX5lMK','vNPvC1G','uNvUDgK','zcb3yxm','yuvHzvm','CMvHzca','rJKPpc8','B25JBgK','z2v0sw4','BJOG','CMvTB3y','BwfYA3m','BIbuyw0','AwqGzg8','rLbty28','DgvK','lxDYyxa','lxDLAwC','z2fTzq','Aw1Lsxm','zfzPvvq','u3jtB3O','zgf0yxm','rgLMzIa','zwDPC3q','ihjLCg8','sMTKruS','mtjWEc8','ihnRAwW','wvDAwMu','Cg9PBNq','tM8GCMu','yMLUzgK','zcdcTYa','n2vLzJu','seXMqKq','mhb4o2y','z25HDhu','DhKGAw4','Bwvhyw0','B24GAwq','oMf1Dg8','zwf0zva','igLKpsi','mtq2ote4mhrwvMTrtW','DJiTy3m','CgvZia','vg90ywW','CNjVCG','Aw50Aw4','B3v0','BMDrDNu','D2f0y2G','wez5s28','mtG5mZGYwwDqq0rm','C3rHCNq','ChbLCIa','zwqGyNu','zxHLy0m','EtPMBgu','r2fTzq','C3CYlxm','BcbKAxm','iZaWmdS','zxHPC3q','Awn3yLu','A2vLCa','ufzgAeW','mJeWnJnsu2TOrw4','BIbHihi','zwy1o2i','ihbHDgm','igLZig4','ig9UBhK','BgX3yxi','Dg9tDhi','DMvhyw0','yNzRwvq','tg9Hzgu','CMzSB3C','ktTJB2W','CMvKige','AgvSBg8','Aw5Uzxi','ig9Uy2u','C3r5Bgu','Bwv0ywq','ihrOzsa','zZOXmha','A2v5','mxb4ihm','AgLKzgu','BLfMuhC','vgHLigC','DNmGC24','BNvYzMG','B3vUDa','r3rYAvi','Dgf5CYa','DeTuBue','Dc5wywW','nhb4idK','yw5KigG','B2jMsq','oxb4ide','B2flqwS','Dw5Kzwy','oJHWEdS','mte4nZiWDhPOB3vP','psjZDZi','CKnVBNq','DNCSnJi','pc9WCMu','mJbWEca','Fdf8nNW','ignYB3m','zNvUy3q','Dvb4wKC','igLUC3q','nYWUnsK','mxW0Fda','BwvHBNm','zgf0yq','Eg9SweW','tIbIEsa','BYbHihq','x3j1BNq','yxrLigy','BhzLr2e','C3rHDhu','zfDdtwm','u1H3ANG','BxmGD2K','BNq6Aw4','rJKGDhC','z2fTzvm','A2v5CW'];_0x2e8b=function(){return _0x3136f5;};return _0x2e8b();}function _0x3723(_0x32cf76,_0x1a7186){_0x32cf76=_0x32cf76-(0x259+0x3f*-0x73+0x55f*0x5);var _0x95475f=_0x2e8b();var _0x15ab37=_0x95475f[_0x32cf76];if(_0x3723['yTnROK']===undefined){var _0x24ec4e=function(_0x598ad2){var _0x3de747='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1f6b4f='',_0x435d35='';for(var _0x39eac1=-0x1*-0x1136+0x9a3+-0x1ad9,_0x49a96c,_0x5a7145,_0x4cc3f4=0xbd0*-0x2+0x96f+0xe31;_0x5a7145=_0x598ad2['charAt'](_0x4cc3f4++);~_0x5a7145&&(_0x49a96c=_0x39eac1%(-0x1*0x1e43+-0x6ec+0x2533)?_0x49a96c*(0x67*0x46+-0x3*-0x921+-0x374d)+_0x5a7145:_0x5a7145,_0x39eac1++%(-0x511+0xf39+-0xa24))?_0x1f6b4f+=String['fromCharCode'](0x136*-0x1e+-0x22be+0x13*0x3cb&_0x49a96c>>(-(-0x24ab*-0x1+-0x22d2+-0x9d*0x3)*_0x39eac1&0x1633+-0x264c*-0x1+0x1*-0x3c79)):-0x2422+-0x2*0x131+0x2684){_0x5a7145=_0x3de747['indexOf'](_0x5a7145);}for(var _0x13fa32=-0xd1c+-0x558+-0x2*-0x93a,_0x3fd3e8=_0x1f6b4f['length'];_0x13fa32<_0x3fd3e8;_0x13fa32++){_0x435d35+='%'+('00'+_0x1f6b4f['charCodeAt'](_0x13fa32)['toString'](0x1c17+-0x62*0xb+-0x17d1))['slice'](-(0x53e*-0x5+-0x1832+0x326a));}return decodeURIComponent(_0x435d35);};_0x3723['OgWZZR']=_0x24ec4e,_0x3723['NEPolK']={},_0x3723['yTnROK']=!![];}var _0xf6b48f=_0x95475f[-0x26d*0x3+-0x1fff+-0x2*-0x13a3],_0x275f96=_0x32cf76+_0xf6b48f,_0x2734f6=_0x3723['NEPolK'][_0x275f96];return!_0x2734f6?(_0x15ab37=_0x3723['OgWZZR'](_0x15ab37),_0x3723['NEPolK'][_0x275f96]=_0x15ab37):_0x15ab37=_0x2734f6,_0x15ab37;}(function(_0x42c56e,_0x204372){var _0x357420=_0x3723,_0xd70a00=_0x42c56e();while(!![]){try{var _0x125ea9=-parseInt(_0x357420(0x2fa))/(-0xf5f+-0xf*0x55+0x145b)+parseInt(_0x357420(0x19d))/(-0xfe0*-0x1+-0x122c+0x24e)*(parseInt(_0x357420(0x3c8))/(-0x96f+-0x12e1+0x1c53))+-parseInt(_0x357420(0x17d))/(0x24f4+0x5b1+-0x2aa1*0x1)+-parseInt(_0x357420(0x2f0))/(-0x377*0x5+0xf17*0x2+0x66b*-0x2)+-parseInt(_0x357420(0x418))/(0x3bf*0x1+0x5*-0x309+0xb74)+-parseInt(_0x357420(0x308))/(-0x20*0x2+0x1582+0x5*-0x43f)*(-parseInt(_0x357420(0x1b4))/(0x1cab*0x1+-0x1*-0x14bb+-0x315e))+parseInt(_0x357420(0x379))/(-0xc6f+0x18ea+0x426*-0x3)*(parseInt(_0x357420(0x330))/(-0x871+-0x14e1+-0x4*-0x757));if(_0x125ea9===_0x204372)break;else _0xd70a00['push'](_0xd70a00['shift']());}catch(_0x4e9cfd){_0xd70a00['push'](_0xd70a00['shift']());}}}(_0x2e8b,0x3*0x718e9+-0x1*0x194e3d+-0x89*-0x2011),((()=>{'use strict';var _0x10f5a8=_0x3723,_0xc65731={'TKvAg':'sYZoV','YWZZe':function(_0x4f897f,_0x73055){return _0x4f897f!==_0x73055;},'QztUe':'cmd','lWPoa':'sakur'+_0x10f5a8(0x3ce)+'v2','nqmQK':'sakur'+'a-sw-'+'v2-cs'+'s','xmuGV':function(_0x3f9d1b,_0x33fce7){return _0x3f9d1b!==_0x33fce7;},'dXAgy':_0x10f5a8(0x467),'ZGOCS':function(_0x5d683e,_0x4c1ff1){return _0x5d683e+_0x4c1ff1;},'LxAMb':function(_0x453eaa,_0x173537){return _0x453eaa(_0x173537);},'dViUT':function(_0x202f84){return _0x202f84();},'nrYBJ':'thPEs','FwseA':_0x10f5a8(0x44c)+'kura]'+_0x10f5a8(0x1b7)+_0x10f5a8(0x302)+_0x10f5a8(0x1f9),'HLfBD':_0x10f5a8(0x26b)+':','RPkVu':function(_0x3eec51,_0x153009){return _0x3eec51!==_0x153009;},'WVrYF':'iKxXZ','ZUFKW':function(_0x38beda,_0x39d612){return _0x38beda||_0x39d612;},'zgieZ':function(_0x3f2bdc,_0x24a6c1){return _0x3f2bdc+_0x24a6c1;},'FlzoY':_0x10f5a8(0x1de)+_0x10f5a8(0x476)+_0x10f5a8(0x485)+'ey\x20is'+_0x10f5a8(0x2b0)+_0x10f5a8(0x2b8)+_0x10f5a8(0x3ec)+'into\x20'+_0x10f5a8(0x1b8)+'ross-'+'origi'+'n\x20ifr'+'ame.\x0a','TFyaP':_0x10f5a8(0x217)+_0x10f5a8(0x20f)+'sakur'+'a.ski'+'llwar'+'z.use'+_0x10f5a8(0x46e)+'AND\x20t'+_0x10f5a8(0x1f7)+_0x10f5a8(0xf0)+_0x10f5a8(0x4ad)+'ipt\x20a'+'re\x0a','KKrCq':_0x10f5a8(0x1d7)+'d\x20the'+_0x10f5a8(0x3d8)+_0x10f5a8(0x147)+_0x10f5a8(0x318)+_0x10f5a8(0x107)+_0x10f5a8(0x2f8)+'\x20this'+'\x20pane'+_0x10f5a8(0x275)+_0x10f5a8(0x297),'mxlci':function(_0x25d62e,_0x32f114){return _0x25d62e/_0x32f114;},'egskX':_0x10f5a8(0x2b1),'nWLRc':function(_0x262db6,_0xb5eb1c){return _0x262db6+_0xb5eb1c;},'zbqOO':'LIVE\x20'+'·\x20','xolXL':function(_0x4efd94,_0x3bdf54){return _0x4efd94>_0x3bdf54;},'aEaeS':function(_0x282a04,_0x41b4a2){return _0x282a04+_0x41b4a2;},'HYZMJ':_0x10f5a8(0x228)+'8a','uhTVU':function(_0x178030,_0x487c86){return _0x178030+_0x487c86;},'jBhFO':function(_0x536418,_0x5b8257){return _0x536418===_0x5b8257;},'BZtxs':_0x10f5a8(0x444),'HBwwf':_0x10f5a8(0x218),'YkbNs':function(_0x122282,_0x280b15){return _0x122282(_0x280b15);},'RJrDE':function(_0x526c93,_0x54ae81){return _0x526c93+_0x54ae81;},'qZurG':'\x20past'+'\x20heap'+_0x10f5a8(0x126)+'0x','trDqn':function(_0x320ab6,_0x38774c){return _0x320ab6+_0x38774c;},'VzUsX':_0x10f5a8(0x2ac)+'ura\x20·'+_0x10f5a8(0x2e0)+_0x10f5a8(0x40a)+'</b>','isnVN':'<butt'+_0x10f5a8(0x2ec)+_0x10f5a8(0x331)+'-copy'+'\x22\x20sty'+'le=\x22d'+_0x10f5a8(0x370)+_0x10f5a8(0xfe)+_0x10f5a8(0x449)+'gin-l'+_0x10f5a8(0x141)+_0x10f5a8(0xe8)+'ackgr'+'ound:','lpXvm':_0x10f5a8(0x4a0)+'\x20id=\x22'+_0x10f5a8(0x3e2)+'int\x22\x20'+'style'+_0x10f5a8(0x16c)+_0x10f5a8(0x296)+_0x10f5a8(0x37d)+_0x10f5a8(0x2a9)+_0x10f5a8(0x1d6)+_0x10f5a8(0x400)+'e\x20wal'+_0x10f5a8(0x2b5)+'/\x20spr'+_0x10f5a8(0x2f5)+'g\x20/\x20j'+_0x10f5a8(0x39d)+'g\x20mar'+_0x10f5a8(0x3f0)+_0x10f5a8(0x22d)+_0x10f5a8(0x4a1)+'is\x20wh'+'ich.<'+'/span'+'>','ICiZC':'</div'+'>','KkqTX':'<pre\x20'+_0x10f5a8(0x1a8)+_0x10f5a8(0x180)+_0x10f5a8(0x131)+_0x10f5a8(0x48e)+_0x10f5a8(0x456)+_0x10f5a8(0x47e)+_0x10f5a8(0x149)+_0x10f5a8(0x31c)+_0x10f5a8(0x3ac)+_0x10f5a8(0x487)+_0x10f5a8(0x313)+_0x10f5a8(0x2ed)+_0x10f5a8(0x496)+_0x10f5a8(0x372)+'auto;'+'white'+'-spac'+_0x10f5a8(0x439)+_0x10f5a8(0x2d4)+';word'+_0x10f5a8(0x41c)+'k:bre'+'ak-wo'+'rd;fo'+_0x10f5a8(0x349)+_0x10f5a8(0x261)+';','xSIla':_0x10f5a8(0x209)+'copy','Oniqd':'#sw2-'+_0x10f5a8(0x29e),'ShUKz':function(_0x152812,_0x477a23){return _0x152812+_0x477a23;},'afptE':_0x10f5a8(0x125),'AmxLc':function(_0x17d01e,_0x9d43d1){return _0x17d01e+_0x9d43d1;},'snXdb':'yes','DuvoI':_0x10f5a8(0x235)+'ntext'+'\x20','Maavw':_0x10f5a8(0x233)+_0x10f5a8(0x2f2),'IcNHO':function(_0x552937,_0x2eeffc){return _0x552937+_0x2eeffc;},'gRprn':'hooks'+'\x20\x20\x20\x20','TWHOd':_0x10f5a8(0x407)+'ied','uUvUT':_0x10f5a8(0xf3)+_0x10f5a8(0x186)+'jects'+'\x20capt'+_0x10f5a8(0x23a)+'yet.','KRZwB':_0x10f5a8(0x166)+_0x10f5a8(0x419)+'fire\x20'+_0x10f5a8(0x390)+_0x10f5a8(0x42a)+_0x10f5a8(0x3d0)+_0x10f5a8(0x420)+_0x10f5a8(0x1d2)+_0x10f5a8(0x2af)+'thing'+_0x10f5a8(0x3ae)+_0x10f5a8(0x23a)+_0x10f5a8(0x33d),'Ymdhp':'no\x20Up'+_0x10f5a8(0x1e2)+_0x10f5a8(0x1ea)+_0x10f5a8(0x114)+'r\x20the'+'\x20sign'+'ature'+_0x10f5a8(0x15c)+_0x10f5a8(0x1a1)+'atch.','idqTd':function(_0x445929,_0x315d5c){return _0x445929<_0x315d5c;},'GHWbx':function(_0x37dde5,_0x33293e){return _0x37dde5+_0x33293e;},'eOzkA':'mdcAM','FzeYR':function(_0x3776e5,_0x28dcea){return _0x3776e5+_0x28dcea;},'VAhlU':_0x10f5a8(0x3a1),'YlNwM':function(_0x1af930,_0x5be285){return _0x1af930!==_0x5be285;},'flFLB':function(_0x52d72c,_0x3cc25f){return _0x52d72c===_0x3cc25f;},'lobCC':function(_0x32728b,_0x2c0f5f){return _0x32728b/_0x2c0f5f;},'ooBtR':function(_0x3d5b9a,_0x33d483){return _0x3d5b9a*_0x33d483;},'LrAOa':function(_0x2f93e6,_0x3e7925){return _0x2f93e6+_0x3e7925;},'JnPya':function(_0x39494c,_0x427449){return _0x39494c+_0x427449;},'ESNxv':function(_0x4e9302,_0x3da1d3){return _0x4e9302+_0x3da1d3;},'miXYq':_0x10f5a8(0x2f9),'uPxZG':_0x10f5a8(0x153),'SrSoz':function(_0x5830b4){return _0x5830b4();},'pzAeW':_0x10f5a8(0x49d)+_0x10f5a8(0x14c),'ikfxI':_0x10f5a8(0x35b)+_0x10f5a8(0x2cd),'JkdEK':'unity'+'Insta'+_0x10f5a8(0x281),'fyuYg':_0x10f5a8(0x22b)+_0x10f5a8(0x282)+_0x10f5a8(0x3cc)+_0x10f5a8(0xea),'UkxVs':_0x10f5a8(0x3d6),'JfqPa':function(_0x107218,_0x1ab348){return _0x107218<_0x1ab348;},'OvFKZ':function(_0x14dcf7,_0x37f1ff){return _0x14dcf7!==_0x37f1ff;},'xyjwT':_0x10f5a8(0x499),'kALof':_0x10f5a8(0x3c2)+_0x10f5a8(0x336)+'3|7|0','RbeJj':_0x10f5a8(0x384)+_0x10f5a8(0x242)+_0x10f5a8(0x30e)+'z','Raseq':_0x10f5a8(0x240)+'n._ru'+_0x10f5a8(0x21a)+_0x10f5a8(0x438)+'e','Maxff':function(_0x4771bb,_0x59d69a){return _0x4771bb===_0x59d69a;},'WnLtn':_0x10f5a8(0x106),'JVxCV':function(_0x32336b,_0xf0df3c){return _0x32336b!==_0xf0df3c;},'Zblqx':_0x10f5a8(0x453),'oWULj':function(_0xc6151c,_0x1021ba){return _0xc6151c===_0x1021ba;},'yiXqV':_0x10f5a8(0x155),'DudQT':_0x10f5a8(0x1b1),'VyOPI':'windo'+'w.','bHPGs':function(_0x2080b0){return _0x2080b0();},'eFUaS':function(_0x111621,_0x596966){return _0x111621+_0x596966;},'TRGFn':_0x10f5a8(0x27d)+_0x10f5a8(0x241),'tKTmA':_0x10f5a8(0x280),'uJXjG':function(_0x182b5e,_0x165a19){return _0x182b5e>_0x165a19;},'dWCMc':function(_0xafefd7,_0x28f2df){return _0xafefd7&_0x28f2df;},'usmJx':_0x10f5a8(0x136),'WqpUf':function(_0xe35eb7,_0x17651f){return _0xe35eb7|_0x17651f;},'ChDzK':_0x10f5a8(0x459),'XyFgT':_0x10f5a8(0x424),'PVFhL':function(_0x26f7bc,_0x2f946e,_0x15b8e6){return _0x26f7bc(_0x2f946e,_0x15b8e6);},'MxQfy':function(_0x1bbc34,_0x1455e9){return _0x1bbc34+_0x1455e9;},'gTMba':function(_0xd49548,_0x40f772,_0xfe10cd){return _0xd49548(_0x40f772,_0xfe10cd);},'DHrbX':function(_0x3e05f8,_0x35c969){return _0x3e05f8+_0x35c969;},'eQYNo':function(_0x5ea678,_0x3c59d6){return _0x5ea678+_0x3c59d6;},'wKZsU':'obfF','zzgDw':'obfI','WELRQ':function(_0x1596f,_0x193fff,_0x5740aa){return _0x1596f(_0x193fff,_0x5740aa);},'mCRkR':function(_0xbef6b8,_0x57b42b){return _0xbef6b8&_0x57b42b;},'rGvLu':function(_0x16fe7a,_0x1c1147){return _0x16fe7a||_0x1c1147;},'zGFsp':function(_0x1d3d10,_0x1bbbc3){return _0x1d3d10===_0x1bbbc3;},'bseUL':function(_0x3f84bb,_0x576ccd){return _0x3f84bb^_0x576ccd;},'nQfPw':function(_0x17bcc7,_0x48e074){return _0x17bcc7!==_0x48e074;},'WPKkM':function(_0x56e1a5,_0x1cba5e){return _0x56e1a5^_0x1cba5e;},'bQaKw':function(_0x5afe6c,_0x3a3da4,_0x23d581,_0x319420){return _0x5afe6c(_0x3a3da4,_0x23d581,_0x319420);},'AtbvN':function(_0x38175a,_0x5f3c5c){return _0x38175a===_0x5f3c5c;},'jlfGv':function(_0x23fc86,_0x5d121f,_0x254123,_0x49e52f){return _0x23fc86(_0x5d121f,_0x254123,_0x49e52f);},'fwbdK':function(_0x525623,_0x4038b4){return _0x525623+_0x4038b4;},'ZDtbW':function(_0x4dc567,_0x4960ef){return _0x4dc567!==_0x4960ef;},'LCOHb':'XOndQ','HMMtb':_0x10f5a8(0x338)+'ion','kupvf':function(_0x476c86){return _0x476c86();},'sLptK':function(_0x2768bb,_0x165c64){return _0x2768bb+_0x165c64;},'TwDUc':_0x10f5a8(0x38e)+_0x10f5a8(0x21e)+'MK\x20CO'+'PY\x20TO'+_0x10f5a8(0x159)+_0x10f5a8(0x446)+'ndow.'+_0x10f5a8(0x375)+_0x10f5a8(0x2a8)+'dkit.'+_0x10f5a8(0x49a)+_0x10f5a8(0x2c6)+_0x10f5a8(0x104)+_0x10f5a8(0x1f1)+_0x10f5a8(0x2c7)+'\x20','fYmrR':'repla'+_0x10f5a8(0x1dc)+'y\x20a\x20d'+_0x10f5a8(0x1fc)+'ent\x20i'+_0x10f5a8(0x206)+_0x10f5a8(0x1df)+'o\x20we\x20'+'are\x20a'+_0x10f5a8(0x357)+_0x10f5a8(0x31b)+'wrong'+_0x10f5a8(0x3a5)+'ct\x20fo'+'r\x20','KandL':_0x10f5a8(0x3dd)+'a/UWM'+'K\x20scr'+_0x10f5a8(0x39c)+'n\x20Tam'+'permo'+_0x10f5a8(0x1dd)+_0x10f5a8(0x32a)+_0x10f5a8(0x1da)+_0x10f5a8(0x174)+'.','CdVJo':'kzzDH','rkiTD':function(_0x508567,_0x29cdca){return _0x508567-_0x29cdca;},'NUZTz':function(_0x178417,_0x485ff2){return _0x178417!==_0x485ff2;},'ZmQiv':function(_0x5ac505,_0x50c752){return _0x5ac505===_0x50c752;},'qbEuV':_0x10f5a8(0x3d3),'QkjCL':function(_0x287ee2,_0x560376){return _0x287ee2+_0x560376;},'VnkiL':function(_0x53322d,_0x5bf929){return _0x53322d+_0x5bf929;},'MKODQ':function(_0x24633c,_0x5be252){return _0x24633c===_0x5be252;},'dLfaq':function(_0x3f0838,_0x5c295c){return _0x3f0838===_0x5c295c;},'CGyFw':function(_0x3244c6,_0x2bc04c){return _0x3244c6|_0x2bc04c;},'rclzF':function(_0x39fc91,_0x5f5b3e){return _0x39fc91+_0x5f5b3e;},'WPVJl':'RrYVt','gYgGO':_0x10f5a8(0x422),'GQXaR':function(_0x20da56,_0xf4b8af){return _0x20da56!==_0xf4b8af;},'iZOtC':_0x10f5a8(0x3f4),'nXmxR':function(_0x3fc117,_0x39ac22){return _0x3fc117+_0x39ac22;},'qkgrg':function(_0x1b0263,_0xf64477){return _0x1b0263+_0xf64477;},'OOhJZ':_0x10f5a8(0x3a8),'ttpgw':'\x20ACTI'+'VE','SXwjx':function(_0x12ffaf,_0x5aabff){return _0x12ffaf+_0x5aabff;},'RxuIj':'none','jkKnX':function(_0x4ce6d2,_0x919c3){return _0x4ce6d2&&_0x919c3;},'LVVNl':_0x10f5a8(0x442),'VFRAK':'zWdCU','nuOtG':_0x10f5a8(0x28c)+'le','TilKW':'SxEtU','qJyrX':'UsPkS','JgZCi':'undef'+_0x10f5a8(0x365),'SwZVr':function(_0x2c3f1c,_0x516d99){return _0x2c3f1c!==_0x516d99;},'JHbpy':'xVrJM','gJoyW':_0x10f5a8(0x222),'npCHX':_0x10f5a8(0x3b4),'uLiZk':function(_0x4e240b,_0x296de0){return _0x4e240b===_0x296de0;},'DFAfN':_0x10f5a8(0x2b7),'DdHrx':_0x10f5a8(0x45a)+'t','NKlDJ':function(_0x25abbc,_0x19643b){return _0x25abbc(_0x19643b);},'zhLJN':function(_0x439f37,_0xd4de9f){return _0x439f37+_0xd4de9f;},'XvXxY':'UWMK\x20'+'resol'+_0x10f5a8(0x278),'kcTSf':_0x10f5a8(0x18c)+_0x10f5a8(0x3e3)+_0x10f5a8(0x341)+_0x10f5a8(0x3af)+_0x10f5a8(0x15e)+_0x10f5a8(0x43d)+'appli'+_0x10f5a8(0x430)+_0x10f5a8(0x3b0)+'he\x20si'+_0x10f5a8(0x2e9)+'re\x20','UftIn':_0x10f5a8(0x221)+',\x20Met'+_0x10f5a8(0x40e)+'fo*)\x20'+_0x10f5a8(0x115)+_0x10f5a8(0x2d1)+'es\x20no'+_0x10f5a8(0x255)+_0x10f5a8(0x1ba)+_0x10f5a8(0x254)+'ild.','QtjVz':_0x10f5a8(0x367)+'g','ALgfz':function(_0x1e1c84,_0x10c6c5){return _0x1e1c84(_0x10c6c5);},'iTaam':_0x10f5a8(0x26a)+'y\x20fai'+_0x10f5a8(0x11f),'tbBnc':_0x10f5a8(0x299)+_0x10f5a8(0x43f)+_0x10f5a8(0x138)+'led:\x20','pRBMm':_0x10f5a8(0x3a5)+_0x10f5a8(0x34f)+_0x10f5a8(0x43d)+_0x10f5a8(0x2c9)+_0x10f5a8(0x23b)+_0x10f5a8(0x19c),'XeSCb':function(_0x4e8d5f,_0x2bf68d){return _0x4e8d5f+_0x2bf68d;},'zQgrd':_0x10f5a8(0xf8),'SOKTz':_0x10f5a8(0x1c3)+_0x10f5a8(0x1ce)+_0x10f5a8(0x44d)+'the\x20o'+_0x10f5a8(0x1e9)+_0x10f5a8(0x37c)+'\x20it\x20i'+'s\x20orp'+_0x10f5a8(0x152)+'.\x20Dis'+'able\x20'+'every'+_0x10f5a8(0x39a)+'r\x20','tsmfr':_0x10f5a8(0x240)+_0x10f5a8(0x232)+_0x10f5a8(0x21a)+_0x10f5a8(0x30c)+'ot\x20wi'+'ndow.'+_0x10f5a8(0x375)+'WebMo'+_0x10f5a8(0x38c)+_0x10f5a8(0x2c6)+'me\x20-\x20'+_0x10f5a8(0x2c0)+_0x10f5a8(0x2b9)+'\x20was\x20'+_0x10f5a8(0x1d8)+'\x20','PbVuc':function(_0x3dd4f0,_0x274365){return _0x3dd4f0+_0x274365;},'yUmhw':_0x10f5a8(0x348)+'th\x20or'+_0x10f5a8(0x1d4)+_0x10f5a8(0x105)+'=','yjrtR':'\x20(sou'+'rce:\x20','yzwpI':function(_0x496450,_0x521372){return _0x496450+_0x521372;},'nVKOn':'ZkZPK','niJOv':function(_0x2e090f,_0x2b5d6c){return _0x2e090f===_0x2b5d6c;},'nMtuv':_0x10f5a8(0x3b5),'gziLN':function(_0x22f3aa,_0x2c3218){return _0x22f3aa+_0x2c3218;},'OhnRm':function(_0x3a5440,_0x373451){return _0x3a5440+_0x373451;},'rzlhy':function(_0x2ec69f,_0x55047c){return _0x2ec69f+_0x55047c;},'xhVyF':_0x10f5a8(0x18e),'PkqnH':_0x10f5a8(0x354)+'once\x20'+_0x10f5a8(0x21f)+_0x10f5a8(0x432)+'Assem'+_0x10f5a8(0x2c4)+'nstan'+_0x10f5a8(0x395)+_0x10f5a8(0x107)+'snaps'+'hots\x20'+'plugi'+_0x10f5a8(0x495)+'ks.le'+_0x10f5a8(0x421)+'\x20','SmgnH':'so\x20ho'+_0x10f5a8(0x182)+_0x10f5a8(0x2dc)+_0x10f5a8(0x43a)+'after'+_0x10f5a8(0x40f)+'re\x20ig'+'nored'+'\x20for\x20'+'the\x20l'+'ife\x20o'+'f\x20the'+'\x20page'+'.\x20','YPApM':'Cnyar','vXPeN':function(_0x5df0b6,_0x17b923){return _0x5df0b6+_0x17b923;},'bJPuS':_0x10f5a8(0x271)+'lt\x20si'+_0x10f5a8(0x201)+'irst\x20'+_0x10f5a8(0x49d)+_0x10f5a8(0x122)+_0x10f5a8(0x435)+'n?):\x20','GioaK':'%c[sa'+'kura]'+_0x10f5a8(0x111)+_0x10f5a8(0x381)+_0x10f5a8(0x2dd)+'rt','Weyfi':function(_0x3a1b7d,_0x3eb133){return _0x3a1b7d+_0x3eb133;},'MnQVs':function(_0x5e1fe1,_0x201db6){return _0x5e1fe1(_0x201db6);},'jQCLH':_0x10f5a8(0x117)+'hot','vKard':_0x10f5a8(0x415),'OKmMt':'pMIuM','ABmVz':function(_0x1d2236,_0x17e4b7){return _0x1d2236(_0x17e4b7);},'VyLtR':_0x10f5a8(0x3ef),'coMmb':function(_0x135038,_0x10b370){return _0x135038!==_0x10b370;},'wDwim':_0x10f5a8(0x264),'NWxAt':function(_0x17eb04,_0x3467fe){return _0x17eb04(_0x3467fe);},'dMvOn':function(_0x26e8e4,_0xffc1fb){return _0x26e8e4<_0xffc1fb;},'ewvtv':'__sak'+_0x10f5a8(0x3f5)+_0x10f5a8(0x16d),'GiwhD':_0x10f5a8(0x3a9)+'ge','aFHlb':function(_0x14c095,_0x3ac57e){return _0x14c095+_0x3ac57e;},'INLVY':_0x10f5a8(0x44c)+_0x10f5a8(0x2b3)+'\x20PORT'+'AL\x20AC'+'TIVE','alpxU':_0x10f5a8(0x44c)+_0x10f5a8(0x2b3)+_0x10f5a8(0x450)+'LAYER'+'\x20ACTI'+'VE','tGOHF':function(_0x147de4,_0x3d0855){return _0x147de4+_0x3d0855;},'oaKAk':function(_0x43b572,_0x2c76f3){return _0x43b572+_0x2c76f3;},'AqLOX':'hello','nVUsi':_0x10f5a8(0x226),'aZtAG':_0x10f5a8(0x359)+_0x10f5a8(0x257)+'ager','qlwVZ':_0x10f5a8(0x1a6)+_0x10f5a8(0x28a)+'Sharp'+'.dll','jIcvp':_0x10f5a8(0x474)+_0x10f5a8(0x460)+_0x10f5a8(0x1c6)+_0x10f5a8(0x332)+'rolle'+'r.dll','Ceajl':'__Gen'+_0x10f5a8(0x128)+'d','fNfTy':_0x10f5a8(0x1be),'EqoSM':function(_0xe079b4){return _0xe079b4();},'hTQTv':_0x10f5a8(0x191)+_0x10f5a8(0x205)+'Loade'+'d'};var _0x1efff6=location['hostn'+_0x10f5a8(0x4b2)]||'',_0x358413=/(^|\.)www\.crazygames\.com$/[_0x10f5a8(0x17b)](_0x1efff6),_0x1e7703=/(^|\.)games\.crazygames\.com$/[_0x10f5a8(0x17b)](_0x1efff6),_0x40f770=/(^|\.)crazygames\.com$/[_0x10f5a8(0x17b)](_0x1efff6)&&!_0x358413&&!_0x1e7703,_0x3b3312=_0x358413?'porta'+'l':_0x1e7703?_0x10f5a8(0x17e)+'er':'playe'+'r';if(!_0x358413&&!_0x1e7703&&!_0x40f770)return;var _0x1753d8='#ff8f'+'b1',_0x839ca=_0xc65731['ewvtv'],_0x30a4c2=_0x10f5a8(0x123)+'KURA-'+_0x10f5a8(0x2a6)+'WARZ-'+'BEGIN'+'===',_0x5194c7=_0x10f5a8(0x123)+_0x10f5a8(0x15a)+_0x10f5a8(0x2a6)+'WARZ-'+'END=='+'=';if(_0x1e7703){window[_0x10f5a8(0x4ae)+'entLi'+_0x10f5a8(0x3eb)+'r'](_0xc65731[_0x10f5a8(0x412)],function(_0x5e62ba){var _0x4ed368=_0x10f5a8;if(_0xc65731[_0x4ed368(0x2ad)]===_0xc65731[_0x4ed368(0x2ad)]){var _0x5c696e=_0x5e62ba[_0x4ed368(0x33e)];if(!_0x5c696e||_0xc65731[_0x4ed368(0x2e1)](_0x5c696e['__sak'+_0x4ed368(0x366)],_0x839ca))return;try{if(window[_0x4ed368(0x204)+'t']&&window[_0x4ed368(0x204)+'t']!==window)window[_0x4ed368(0x204)+'t']['postM'+_0x4ed368(0x1aa)+'e'](_0x5c696e,'*');if(window[_0x4ed368(0x179)]&&_0xc65731[_0x4ed368(0x2e1)](window['top'],window))window[_0x4ed368(0x179)][_0x4ed368(0x469)+'essag'+'e'](_0x5c696e,'*');}catch(_0x3920ae){}}else return _0x530042[_0x4ed368(0x102)+'e']=_0x4ed368(0x240)+'n._ru'+'ntime'+'.reso'+_0x4ed368(0x344)+_0x4ed368(0xf4),_0x1681fa;}),console['log'](_0x10f5a8(0x44c)+'kura]'+_0x10f5a8(0x13d)+_0x10f5a8(0x373)+_0x10f5a8(0xe7)+'IVE\x20('+_0x10f5a8(0xec)+_0x10f5a8(0x30d)+')',_0xc65731[_0x10f5a8(0x23c)]('color'+':',_0x1753d8));return;}if(_0x358413){console[_0x10f5a8(0x3d9)](_0xc65731[_0x10f5a8(0x14b)],_0x10f5a8(0x26b)+':'+_0x1753d8+(';font'+'-weig'+'ht:70'+'0'),{'host':_0x1efff6});var _0x58bdba={'set':function(){},'command':function(){}};function _0x5c1a1e(_0x2a9986,_0x44530d){var _0x596cb2=_0x10f5a8,_0x278fbc={'__sakura':_0x839ca,'kind':_0xc65731[_0x596cb2(0x355)],'cmd':_0x2a9986,'arg':_0x44530d};try{var _0x17e2eb=new BroadcastChannel('sakur'+_0x596cb2(0x3c9));_0x17e2eb['postM'+_0x596cb2(0x1aa)+'e'](_0x278fbc),setTimeout(function(){var _0x2c4b39=_0x596cb2;try{_0x17e2eb[_0x2c4b39(0x130)]();}catch(_0x4efabf){}},0x1535+0x1d1c+-0x3157);}catch(_0x47a698){}}function _0x237d51(){var _0x19afcf=_0x10f5a8,_0x5bd375={'TrdGH':_0x19afcf(0x274)+_0x19afcf(0x192)+'bindi'+'ng'};if('KJHCZ'!=='KJHCZ')_0x35e6d0[_0x855201+'+0x'+_0x1410fc[_0x3392f0]['o']['toStr'+_0x19afcf(0x417)](0x113d+-0xb*-0x2f9+-0x54*0x98)]=_0x4e74f9[_0x11f712]['v'];else{var _0x2e873b=document[_0x19afcf(0x188)+'ement'+_0x19afcf(0x376)]('sakur'+_0x19afcf(0x3ce)+'v2');if(_0x2e873b)return _0x2e873b;if(!document['body']||!document['body'][_0x19afcf(0x44f)+'dChil'+'d'])return null;try{var _0x3fe96f=(_0x19afcf(0x33c)+'|3|2')[_0x19afcf(0x3e6)]('|'),_0x25842f=0x1*-0x1b16+-0x127f*0x1+0x7*0x683;while(!![]){switch(_0x3fe96f[_0x25842f++]){case'0':_0x2e873b['id']=_0xc65731['lWPoa'];continue;case'1':if(!document['getEl'+_0x19afcf(0x399)+'ById'](_0xc65731[_0x19afcf(0x190)])){var _0x2da0f8=document[_0x19afcf(0x3fa)+_0x19afcf(0x3fc)+_0x19afcf(0x135)](_0x19afcf(0x319));_0x2da0f8['id']='sakur'+'a-sw-'+_0x19afcf(0x2f1)+'s',_0x2da0f8['textC'+'onten'+'t']='#saku'+_0x19afcf(0x20c)+_0x19afcf(0x3a7)+'ll:in'+_0x19afcf(0x289)+'}',(document[_0x19afcf(0x1d5)]||document[_0x19afcf(0x3f2)+_0x19afcf(0x1b3)+_0x19afcf(0x399)])['appen'+'dChil'+'d'](_0x2da0f8);}continue;case'2':return _0x2e873b;case'3':document['body'][_0x19afcf(0x44f)+_0x19afcf(0x42b)+'d'](_0x2e873b);continue;case'4':_0x2e873b=document[_0x19afcf(0x3fa)+'eElem'+_0x19afcf(0x135)]('div');continue;}break;}}catch(_0x407d89){return _0xc65731[_0x19afcf(0x42c)](_0xc65731[_0x19afcf(0xf1)],_0xc65731[_0x19afcf(0xf1)])?(_0x203bea['sourc'+'e']=_0x5bd375[_0x19afcf(0x3f8)],_0x5d14b2):null;}}}function _0x1d575b(){var _0x46c338=_0x10f5a8,_0xdddfc6=_0xc65731[_0x46c338(0x2d8)](_0x237d51);if(!_0xdddfc6)return _0x58bdba;if(_0xdddfc6[_0x46c338(0x2da)+'et']['api'])return _0xdddfc6[_0x46c338(0x49c)];try{if(_0xc65731[_0x46c338(0x1f3)]!==_0x46c338(0x423))return _0x45af86(_0xdddfc6);else _0x296d3e[_0x46c338(0xee)](_0xc65731['ZGOCS'](_0xc65731[_0x46c338(0xf2)](_0x32dadc['type'],':\x20'),_0xc65731['LxAMb'](_0x1e3410,_0x2a8cf1&&_0x91d753[_0x46c338(0x3a9)+'ge']||_0x32d8b7)[_0x46c338(0x4b3)](0x2d3*-0x5+-0x66a+0x1489,0x17c7+0x822+-0x1f49)));}catch(_0x3a4fad){return _0xdddfc6[_0x46c338(0x2da)+'et']['api']='1',_0xdddfc6[_0x46c338(0x49c)]=_0x58bdba,console[_0x46c338(0x10f)](_0xc65731['FwseA'],_0xc65731[_0x46c338(0x2e7)]+_0x1753d8,_0x3a4fad),_0x58bdba;}}function _0x45af86(_0x33c048){var _0x56b43e=_0x10f5a8,_0xea1529={'GhyRa':function(_0x57a2ae,_0x2c8c82){var _0x42cea6=_0x3723;return _0xc65731[_0x42cea6(0x451)](_0x57a2ae,_0x2c8c82);},'JBOEw':function(_0x3d0296,_0x163353){return _0x3d0296+_0x163353;},'soqgM':function(_0x1ad227){var _0xd2ea21=_0x3723;return _0xc65731[_0xd2ea21(0x2d8)](_0x1ad227);},'xPCYH':function(_0x17771d,_0x69084d){return _0x17771d+_0x69084d;},'qnSXl':function(_0x2629bc){return _0x2629bc();},'KFtRv':_0x56b43e(0x27d)+'ss\x200x','TJZaX':_0xc65731['qZurG']};_0x33c048[_0x56b43e(0x319)][_0x56b43e(0x144)+'xt']=_0xc65731[_0x56b43e(0x2c8)](_0x56b43e(0x1d1)+_0x56b43e(0x170)+_0x56b43e(0x3c5)+_0x56b43e(0x20a)+_0x56b43e(0x1c5)+_0x56b43e(0x148)+_0x56b43e(0x465)+_0x56b43e(0x287)+_0x56b43e(0x425)+_0x56b43e(0x43c)+_0x56b43e(0x486)+'dth:m'+'in(52'+_0x56b43e(0x333)+_0x56b43e(0x3fb)+'max-h'+'eight'+_0x56b43e(0x45d)+';'+('backg'+'round'+_0x56b43e(0xff)+_0x56b43e(0x47b)+_0x56b43e(0x12c)+_0x56b43e(0xef)+_0x56b43e(0x177)+_0x56b43e(0x1cd)+_0x56b43e(0x31e)+'olid\x20'+_0x56b43e(0x3cb)+_0x56b43e(0x258)+_0x56b43e(0x1ca)+_0x56b43e(0x33b)+_0x56b43e(0x176)+_0x56b43e(0xfc)+'dius:'+_0x56b43e(0x216))+(_0x56b43e(0x35e)+_0x56b43e(0x2df)+'1.5\x20u'+'i-mon'+_0x56b43e(0x145)+'e,Con'+'solas'+_0x56b43e(0x445)+_0x56b43e(0x3b3)+';box-'+'shado'+_0x56b43e(0x1b9)+_0x56b43e(0x4a9)+_0x56b43e(0x462)+_0x56b43e(0x335)+_0x56b43e(0x303)),_0x56b43e(0x29c)+'ay:fl'+'ex;fl'+_0x56b43e(0x11d)+'recti'+_0x56b43e(0x4ac)+'lumn;'+'overf'+'low:h'+'idden'+';'),_0x33c048[_0x56b43e(0x317)+_0x56b43e(0x36b)]=_0xc65731['ZGOCS'](_0xc65731[_0x56b43e(0x268)](_0xc65731['RJrDE'](_0xc65731['RJrDE'](_0x56b43e(0x239)+_0x56b43e(0x319)+_0x56b43e(0x40b)+_0x56b43e(0x263)+_0x56b43e(0x32c)+_0x56b43e(0x19a)+'order'+'-bott'+_0x56b43e(0x47d)+_0x56b43e(0x27c)+_0x56b43e(0x382)+_0x56b43e(0x269)+'5,143'+',177,'+_0x56b43e(0x227)+_0x56b43e(0x370)+_0x56b43e(0x2ff)+_0x56b43e(0x377)+_0x56b43e(0x32f)+'align'+'-item'+_0x56b43e(0x12b)+_0x56b43e(0x167)+_0x56b43e(0x398)+_0x56b43e(0x47f)+'to;\x22>',_0x56b43e(0x164)+_0x56b43e(0x48e)+_0x56b43e(0x26b)+':')+_0x1753d8+_0xc65731[_0x56b43e(0x2c5)]+(_0x56b43e(0x4a0)+_0x56b43e(0x2ef)+_0x56b43e(0x301)+_0x56b43e(0x38b)+_0x56b43e(0x1c4)+_0x56b43e(0x493)+_0x56b43e(0x12c)+_0x56b43e(0x14a)+_0x56b43e(0x3ea)+'aitin'+'g\x20for'+_0x56b43e(0x3d8)+'\x20fram'+_0x56b43e(0x44b)+'pan>')+_0xc65731[_0x56b43e(0x47a)]+_0x1753d8+(_0x56b43e(0x176)+'er:0;'+'color'+_0x56b43e(0x455)+_0x56b43e(0x185)+'order'+'-radi'+_0x56b43e(0x4af)+_0x56b43e(0x45b)+_0x56b43e(0x263)+'4px\x201'+_0x56b43e(0x2e8)+'ont-w'+'eight'+':700;'+_0x56b43e(0x23d)+_0x56b43e(0x4b6)+'nter;'+'\x22>Cop'+_0x56b43e(0x1ef)+_0x56b43e(0x356)+_0x56b43e(0x1b5))+('<butt'+_0x56b43e(0x2ec)+_0x56b43e(0x331)+_0x56b43e(0x238)+'tyle='+'\x22back'+'groun'+_0x56b43e(0x246)+_0x56b43e(0x2a7)+'ent;b'+_0x56b43e(0x3b7)+':1px\x20'+_0x56b43e(0x46b)+'\x20rgba'+'(255,'+_0x56b43e(0x3aa)+_0x56b43e(0x229)+_0x56b43e(0x314)+_0x56b43e(0x1ab)+_0x56b43e(0x2e6)+';bord'+_0x56b43e(0xfc)+_0x56b43e(0x3c4)+'7px;p'+_0x56b43e(0x149)+_0x56b43e(0x3fe)+'\x208px;'+'curso'+'r:poi'+'nter;'+_0x56b43e(0x3cf)+'butto'+'n>'),_0x56b43e(0x351)+'>')+(_0x56b43e(0x239)+_0x56b43e(0x319)+_0x56b43e(0x40b)+_0x56b43e(0x263)+'8px\x201'+_0x56b43e(0x19a)+'order'+_0x56b43e(0x26c)+'om:1p'+'x\x20sol'+'id\x20rg'+_0x56b43e(0x269)+'5,143'+_0x56b43e(0xed)+_0x56b43e(0x12a)+'displ'+_0x56b43e(0x4b5)+'ex;ga'+_0x56b43e(0x26e)+';alig'+_0x56b43e(0x37a)+'ms:ce'+_0x56b43e(0x396)+_0x56b43e(0xf6)+'0\x200\x20a'+'uto;\x22'+'>')+('<butt'+'on\x20id'+_0x56b43e(0x331)+_0x56b43e(0x1e8)+'\x22\x20sty'+_0x56b43e(0x12f)+_0x56b43e(0x49e)+'ound:'+_0x56b43e(0x403)+_0x56b43e(0x204)+_0x56b43e(0x4a2)+'der:1'+_0x56b43e(0x24a)+_0x56b43e(0x1ac)+_0x56b43e(0x1f5)+'55,14'+'3,177'+',.4);'+_0x56b43e(0x26b)+_0x56b43e(0x2c3)+_0x56b43e(0x30a)+_0x56b43e(0x3b7)+'-radi'+_0x56b43e(0x4af)+_0x56b43e(0x45b)+_0x56b43e(0x263)+_0x56b43e(0x329)+'px;cu'+'rsor:'+_0x56b43e(0x2e2)+_0x56b43e(0x109)+'Snaps'+_0x56b43e(0x11e)+_0x56b43e(0x2ca)+_0x56b43e(0xf5)+'n>'),_0xc65731[_0x56b43e(0x3de)])+_0xc65731[_0x56b43e(0x276)]+_0xc65731['KkqTX'],_0x56b43e(0x378)+'eight'+':62vh'+_0x56b43e(0x236)+'\x20repo'+_0x56b43e(0x41e)+_0x56b43e(0x183)+_0x56b43e(0x364)+_0x56b43e(0x127)+'updat'+'es\x20it'+'self\x20'+'when\x20'+'the\x20g'+_0x56b43e(0x2bc)+'rame\x20'+'loads'+'\x20—\x20no'+_0x56b43e(0x3ba)+_0x56b43e(0x443)+'eeded'+_0x56b43e(0x1ed)+'\x20it\x20s'+_0x56b43e(0x326)+'empty'+_0x56b43e(0x1bf)+_0x56b43e(0x21b)+_0x56b43e(0x1dd)+'is\x20no'+_0x56b43e(0x168)+_0x56b43e(0x223)+'g\x20int'+'o\x20the'+_0x56b43e(0x337)+'s-ori'+_0x56b43e(0x103)+_0x56b43e(0x2bc)+'rame.'+_0x56b43e(0x334)+'>');var _0x543f0b=_0x33c048[_0x56b43e(0x1c2)+_0x56b43e(0x175)+_0x56b43e(0x480)](_0x56b43e(0x209)+_0x56b43e(0x345)+'s'),_0x285d39=_0x33c048[_0x56b43e(0x1c2)+_0x56b43e(0x175)+_0x56b43e(0x480)](_0x56b43e(0x209)+_0x56b43e(0x2f6)),_0x3af7dd=_0x33c048['query'+_0x56b43e(0x175)+_0x56b43e(0x480)](_0xc65731[_0x56b43e(0x368)]),_0x179ce8=_0x33c048[_0x56b43e(0x1c2)+_0x56b43e(0x175)+_0x56b43e(0x480)]('#sw2-'+'x'),_0x37f87=_0x33c048[_0x56b43e(0x1c2)+'Selec'+'tor'](_0xc65731[_0x56b43e(0x358)]),_0x2aef79=_0x33c048['query'+'Selec'+'tor']('#sw2-'+'hint'),_0x492389=null;if(_0x179ce8)_0x179ce8[_0x56b43e(0x2cb)+'ck']=function(){var _0x59d927=_0x56b43e;if('KYQlQ'===_0x59d927(0x143))try{if(_0xc65731['RPkVu'](_0xc65731['WVrYF'],_0xc65731[_0x59d927(0x2b6)])){var _0xaf068e=_0x1fa0a4[_0x5c88ec];for(var _0x82dbca=0x1*-0x20f0+0x2575+-0x485;_0x82dbca<_0xaf068e[_0x59d927(0x3bd)+'h'];_0x82dbca++){_0x4f19fc[_0xea1529[_0x59d927(0x37e)](_0xea1529[_0x59d927(0x3d5)](_0xf4069b,'+0x'),_0xaf068e[_0x82dbca]['o'][_0x59d927(0x30f)+_0x59d927(0x417)](-0x26*0xde+0x1*0x150c+0xbf8*0x1))]=_0xaf068e[_0x82dbca]['v'];}}else _0x33c048[_0x59d927(0x2ce)+'e']();}catch(_0x353ae3){}else _0x32897f['warni'+_0x59d927(0x2ba)][_0x59d927(0xee)](_0x59d927(0x3e0)+'\x20are\x20'+'appli'+_0x59d927(0x2fd)+_0x59d927(0x248)+_0x59d927(0x2d2)+'ntrol'+_0x59d927(0x270)+'as\x20fi'+'red\x20y'+_0x59d927(0x10c)+('Eithe'+_0x59d927(0x1e1)+'\x20are\x20'+_0x59d927(0x454)+_0x59d927(0x309)+'ound,'+'\x20or\x20t'+_0x59d927(0x250)+_0x59d927(0x3c7)+'\x20on\x20t'+_0x59d927(0x29f)+_0x59d927(0xfb)+_0x59d927(0x479)+'ad.'));};if(_0x37f87)_0x37f87['oncli'+'ck']=function(){var _0x151976=_0x56b43e;_0x5c1a1e(_0x151976(0x117)+_0x151976(0x27f));};if(_0x3af7dd)_0x3af7dd[_0x56b43e(0x2cb)+'ck']=function(){var _0x486df6=_0x56b43e,_0x521c6f={'Zphhi':function(_0x53fdff,_0x1d5751){return _0x53fdff!==_0x1d5751;}},_0x316e64=_0xea1529[_0x486df6(0x13a)](_0x30a4c2+'\x0a'+(_0x492389?JSON['strin'+'gify'](_0x492389,null,0xd*0xce+0x1b56+0x3*-0xc99):''),'\x0a')+_0x5194c7,_0x3336a9=function(){var _0x2aeebd=_0x486df6;if(_0x3af7dd)_0x3af7dd[_0x2aeebd(0x36a)+_0x2aeebd(0x295)+'t']='Copie'+'d';};if(navigator[_0x486df6(0x260)+_0x486df6(0x132)]&&navigator[_0x486df6(0x260)+'oard'][_0x486df6(0x1a2)+_0x486df6(0x1c8)])navigator['clipb'+_0x486df6(0x132)][_0x486df6(0x1a2)+_0x486df6(0x1c8)](_0x316e64)['then'](_0x3336a9,function(){var _0x4b2bbc=_0x486df6;_0xea1529[_0x4b2bbc(0x402)](_0x4a0be1);});else _0xea1529[_0x486df6(0x1eb)](_0x4a0be1);function _0x4a0be1(){var _0x458373=_0x486df6,_0x509b5c={'UbEzC':function(_0x4a1ea3){return _0x4a1ea3();}};if(_0x521c6f[_0x458373(0x428)](_0x458373(0x11a),_0x458373(0x305))){var _0x4007a3=document['creat'+_0x458373(0x3fc)+_0x458373(0x135)]('texta'+_0x458373(0x283));_0x4007a3[_0x458373(0x198)]=_0x316e64;if(!document['body'])return;document['body'][_0x458373(0x44f)+'dChil'+'d'](_0x4007a3),_0x4007a3[_0x458373(0x121)+'t']();try{document[_0x458373(0x2fe)+'omman'+'d']('copy'),_0x3336a9();}catch(_0x4ccef0){}_0x4007a3[_0x458373(0x2ce)+'e']();}else{var _0x5581a5=('2|1|4'+_0x458373(0x3c3)+'6|0|5')['split']('|'),_0x2deb51=-0x5e4+0x4*0x377+-0x7f8;while(!![]){switch(_0x5581a5[_0x2deb51++]){case'0':_0x509b5c['UbEzC'](_0x270f92);continue;case'1':if(!_0x2109f4||typeof _0x2109f4['creat'+'ePlug'+'in']!==_0x458373(0x338)+_0x458373(0x490)){_0xe6c94[_0x458373(0x279)]=_0x458373(0x2c6)+_0x458373(0x394)+_0x458373(0x2ee)+_0x458373(0x2b9)+_0x458373(0xfa)+'ailab'+'le';return;}continue;case'2':var _0x2109f4=_0x198a58[_0x458373(0x375)+'WebMo'+'dkit']&&_0x12c64f[_0x458373(0x375)+'WebMo'+_0x458373(0x184)]['Runti'+'me'];continue;case'3':_0x547944['ok']=!![];continue;case'4':_0x328fee[_0x458373(0x3e1)+_0x458373(0x10b)]=!![];continue;case'5':_0x198b19[_0x458373(0x41b)+_0x458373(0x22f)+'tered']=_0x362231['lengt'+'h'];continue;case'6':try{var _0x46f5e6=_0x2dd548['Unity'+_0x458373(0x2a8)+'dkit'][_0x458373(0x2c6)+'me'];_0x46f5e6[_0x458373(0x22e)+'uraTa'+'g']=_0x3f4cc0+':'+_0x369eff[_0x458373(0x1af)+'m']()[_0x458373(0x30f)+'ing'](0x2*0x295+-0x2*-0xf04+0x281*-0xe)['slice'](0x109a+-0x4cd*-0x6+0x6*-0x791,-0x5b1+0xb76*0x1+-0x5bb),_0x4b837c=_0x46f5e6[_0x458373(0x22e)+'uraTa'+'g'];}catch(_0x297f3f){}continue;case'7':_0x59586a=_0x2109f4[_0x458373(0x3fa)+_0x458373(0x488)+'in']({'name':_0x458373(0x384)+'a-ski'+'llwar'+'z','version':_0x548144,'referencedAssemblies':_0x973c3[_0x458373(0x4b3)]()});continue;}break;}}}};setTimeout(function(){var _0x2a0bcb=_0x56b43e,_0x105d72=(_0x2a0bcb(0x360)+'|4|3')['split']('|'),_0x4e0296=-0x1f06+-0x22bd*-0x1+-0x3b7;while(!![]){switch(_0x105d72[_0x4e0296++]){case'0':if(_0x492389)return;continue;case'1':if(_0xc65731[_0x2a0bcb(0x3ad)](!_0x543f0b,!_0x285d39))return;continue;case'2':_0x543f0b[_0x2a0bcb(0x36a)+'onten'+'t']='no\x20re'+'port\x20'+'after'+'\x2060s\x20'+'—\x20fra'+_0x2a0bcb(0x14d)+'t\x20inj'+_0x2a0bcb(0x1cc)+'?';continue;case'3':_0x285d39['textC'+'onten'+'t']=_0xc65731['ZGOCS'](_0xc65731['zgieZ'](_0xc65731['ZGOCS'](_0x2a0bcb(0x321)+'ame\x20f'+_0x2a0bcb(0x3be)+_0x2a0bcb(0x2a1)+_0x2a0bcb(0x414)+_0x2a0bcb(0x112)+'singl'+_0x2a0bcb(0x25c)+_0x2a0bcb(0x26f)+'\x0a',_0x2a0bcb(0x1a4)+_0x2a0bcb(0x116)+'\x20prov'+'es\x20th'+_0x2a0bcb(0x48c)+_0x2a0bcb(0x259)+'pt\x20IS'+_0x2a0bcb(0x33a)+_0x2a0bcb(0x3ed)+_0x2a0bcb(0x107)+_0x2a0bcb(0x2b4)+'ng\x20on'+_0x2a0bcb(0x31b)+_0x2a0bcb(0x401)+_0x2a0bcb(0x1d3))+('so\x20th'+_0x2a0bcb(0x3ca)+'ainin'+'g\x20sus'+_0x2a0bcb(0x47c)+_0x2a0bcb(0x156)+'\x0a\x0a')+_0xc65731['FlzoY']+(_0x2a0bcb(0x4b1)+'The\x20p'+_0x2a0bcb(0xeb)+_0x2a0bcb(0x427)+_0x2a0bcb(0x431)+'n\x20rel'+_0x2a0bcb(0x362)+_0x2a0bcb(0x46a)+'e\x20ins'+_0x2a0bcb(0x208)+'ng.\x0a'),_0xc65731[_0x2a0bcb(0x40d)])+(_0x2a0bcb(0x29d)+_0x2a0bcb(0x3ab)+'lled\x20'+'—\x20two'+'\x20copi'+_0x2a0bcb(0x207)+'\x20UWMK'+_0x2a0bcb(0x18b)+_0x2a0bcb(0x30b)+_0x2a0bcb(0x158)+'Assem'+_0x2a0bcb(0x2c4)+_0x2a0bcb(0x206)+'tiate'+'.\x0a\x0a'),_0xc65731[_0x2a0bcb(0x3a3)]);continue;case'4':_0x543f0b[_0x2a0bcb(0x319)][_0x2a0bcb(0x26b)]=_0x2a0bcb(0x19f)+'c7';continue;}break;}},0x91ea*0x3+0x89c9+-0x15527);var _0x261665={'set':function(_0x29cda2){var _0x389072=_0x56b43e;_0x492389=_0x29cda2;if(_0x3af7dd)_0x3af7dd['style']['displ'+'ay']='';var _0x284ad5=_0x29cda2[_0x389072(0x3ab)+'nces']&&_0x29cda2[_0x389072(0x3ab)+_0x389072(0x202)]['FPSco'+'ntrol'+_0x389072(0x437)],_0x3f244e=Math[_0x389072(0x245)](_0xc65731[_0x389072(0x15f)](_0x29cda2[_0x389072(0x25d)+_0x389072(0x25b)]||-0x924+0x1*0x1c78+-0x1354,0x22f3+0xa*-0x2ab+-0x1*0x45d));if(_0x543f0b){if(_0xc65731['RPkVu'](_0xc65731[_0x389072(0x397)],'Pznbh'))return _0x537d6a(_0x1e7560);else{var _0x31e4d2,_0x1af1e0;if(_0x284ad5&&_0x29cda2['surve'+'y']&&_0x29cda2[_0x389072(0x26a)+'y'][_0x389072(0x2d2)+'ntrol'+'ler'])_0x31e4d2=_0xc65731[_0x389072(0x451)](_0xc65731['zbqOO'],Object[_0x389072(0x34c)](_0x29cda2['insta'+_0x389072(0x202)])['lengt'+'h'])+('\x20obje'+'cts\x20·'+'\x20')+_0x3f244e+'s',_0x1af1e0='#7ee0'+'a8';else{if(_0xc65731[_0x389072(0x33f)](_0x29cda2['hooks'+'Appli'+'ed'],-0x23f8*-0x1+-0x13a0+-0x1058))_0x31e4d2=_0xc65731[_0x389072(0x2c8)](_0xc65731[_0x389072(0x2c8)](_0x389072(0x41b)+_0x389072(0x1f1)+_0x389072(0x2e5),_0x3f244e),'s'),_0x1af1e0=_0xc65731[_0x389072(0x1cb)];else{if(_0x29cda2[_0x389072(0x3c1)+'tData'])_0x31e4d2=_0xc65731[_0x389072(0x3e4)](_0x389072(0x31a)+_0x389072(0x498)+_0x389072(0x100)+'·\x20'+_0x3f244e,'s'),_0x1af1e0='#ffd4'+'8a';else{if(_0xc65731['jBhFO']('dgcWo',_0xc65731['BZtxs']))return _0x2b4e7e['faile'+'d']++,_0x58ea83[_0x389072(0x452)+'rror']=_0x2c2a12[_0x389072(0x452)+'rror']||_0xea1529[_0x389072(0x13a)](_0xea1529['KFtRv'],_0x426d18[_0x389072(0x30f)+'ing'](0x2e9*-0x3+0x7*0x49+0x6cc))+_0xea1529[_0x389072(0x1ec)]+_0x1f4e7f[_0x389072(0x3df)+_0x389072(0x447)][_0x389072(0x30f)+_0x389072(0x417)](-0xd1*0x29+0x565*-0x7+0x474c),_0x2ce2a5;else _0x31e4d2=_0xc65731[_0x389072(0x451)]((_0x29cda2[_0x389072(0x46f)]&&_0x29cda2['arm']['ok']?'armed'+_0x389072(0x124):'armin'+_0x389072(0x2c1))+_0x3f244e,'s'),_0x1af1e0=_0xc65731[_0x389072(0x1cb)];}}}_0x543f0b['textC'+'onten'+'t']=_0x31e4d2,_0x543f0b['style']['color']=_0x1af1e0;}}_0x2aef79&&(_0x2aef79[_0x389072(0x36a)+_0x389072(0x295)+'t']=_0x29cda2['diff']&&_0x29cda2[_0x389072(0x1fd)]['lengt'+'h']?_0x389072(0x2db)+_0x389072(0x322)+'apsho'+_0x389072(0x2a0)+_0x29cda2[_0x389072(0x1fd)]['join'](',\x20'):_0x389072(0x34a)+_0x389072(0x1f8)+_0x389072(0x44d)+_0x389072(0x4a5)+'ng\x20/\x20'+'sprin'+_0x389072(0x3ec)+_0x389072(0x34e)+'ping\x20'+_0x389072(0x2cf)+_0x389072(0x189)+_0x389072(0x288)+_0x389072(0x36e)+_0x389072(0x189)+'h.');if(_0x285d39)try{if('HEsQI'===_0xc65731[_0x389072(0x262)])return null;else _0x285d39['textC'+'onten'+'t']=_0xc65731[_0x389072(0x1a7)](_0x4f8dc5,_0x29cda2);}catch(_0x4086e0){_0x285d39['textC'+'onten'+'t']=JSON['strin'+_0x389072(0x13f)](_0x29cda2,null,0x121*0x1+0x103d*0x1+0x23*-0x7f);}console[_0x389072(0x3d9)]('%c[sa'+_0x389072(0x2b3)+_0x389072(0x111)+'lWarz'+_0x389072(0x2dd)+'rt',_0xc65731[_0x389072(0x472)](_0x389072(0x26b)+':',_0x1753d8)+(';font'+_0x389072(0x2d5)+'ht:70'+'0'),_0x29cda2),console[_0x389072(0x3d9)](_0xc65731['nWLRc'](_0x30a4c2+'\x0a'+JSON[_0x389072(0x367)+'gify'](_0x29cda2,null,0x18*0x1f+0xb91+-0xe78)+'\x0a',_0x5194c7));}};return _0x33c048['datas'+'et'][_0x56b43e(0x49c)]='1',_0x33c048['api']=_0x261665,_0x261665;}function _0x4f8dc5(_0x2913be){var _0x33b2c3=_0x10f5a8,_0x538236={'nurfh':_0x33b2c3(0x3b6)+_0x33b2c3(0x195)+_0x33b2c3(0x388)},_0x33da17=[];_0x33da17[_0x33b2c3(0xee)](_0xc65731[_0x33b2c3(0x46d)](_0xc65731['zgieZ'](_0xc65731[_0x33b2c3(0x472)](_0x33b2c3(0x12e)+_0x33b2c3(0x25e)+(_0x2913be['host']||'?'),_0xc65731['afptE']),Math['round'](_0xc65731['mxlci'](_0x2913be[_0x33b2c3(0x25d)+_0x33b2c3(0x25b)]||0x752+-0xd99+0x647,0x1024+-0x178+-0xd4*0xd))),'s)')),_0x33da17[_0x33b2c3(0xee)](_0xc65731['aEaeS'](_0xc65731[_0x33b2c3(0x14e)](_0x33b2c3(0x1c0)+'\x20\x20\x20\x20'+(_0x2913be[_0x33b2c3(0x1b0)]?_0xc65731[_0x33b2c3(0x383)]:'no'),_0xc65731[_0x33b2c3(0x3c0)]),_0x2913be[_0x33b2c3(0x40c)+_0x33b2c3(0x284)+'ext']?_0xc65731[_0x33b2c3(0x383)]:'no')+_0xc65731[_0x33b2c3(0x161)]+(_0x2913be['typeC'+_0x33b2c3(0x324)]!=null?_0x2913be[_0x33b2c3(0x4b4)+_0x33b2c3(0x324)]:'?')),_0x33da17['push'](_0xc65731['IcNHO'](_0xc65731[_0x33b2c3(0x133)](_0xc65731['gRprn'],_0x2913be[_0x33b2c3(0x41b)+_0x33b2c3(0x142)+'ed'])+'/'+_0x2913be['hooks'+'Total'],_0xc65731[_0x33b2c3(0x29b)])),_0x33da17['push']('');var _0x4117d0=_0x2913be['insta'+'nces']||{},_0x4d563a=Object[_0x33b2c3(0x34c)](_0x4117d0);!_0x4d563a[_0x33b2c3(0x3bd)+'h']&&(_0x33da17[_0x33b2c3(0xee)](_0xc65731['uUvUT']),_0x33da17['push'](''),_0x33da17['push'](_0xc65731['KRZwB']),_0x33da17['push'](_0xc65731[_0x33b2c3(0x44a)]));for(var _0x333118=0x63b*-0x3+0xfcb+0x2e6;_0xc65731[_0x33b2c3(0x3e9)](_0x333118,_0x4d563a['lengt'+'h']);_0x333118++){var _0x42b6aa=_0x4d563a[_0x333118];_0x33da17[_0x33b2c3(0xee)](_0xc65731['GHWbx'](_0x42b6aa+_0x33b2c3(0x389),_0x4117d0[_0x42b6aa]));}_0x33da17[_0x33b2c3(0xee)]('');var _0x1faa53=_0x2913be[_0x33b2c3(0x26a)+'y']||{},_0xdf7f49=Object[_0x33b2c3(0x34c)](_0x1faa53);for(var _0x1a04ea=-0x8b*-0x1f+0x15*-0xc7+-0x82;_0xc65731[_0x33b2c3(0x3e9)](_0x1a04ea,_0xdf7f49[_0x33b2c3(0x3bd)+'h']);_0x1a04ea++){if(_0x33b2c3(0x350)!==_0xc65731[_0x33b2c3(0x120)]){var _0xbb3c67=_0xdf7f49[_0x1a04ea],_0x143cd4=_0x1faa53[_0xbb3c67];if(!_0x143cd4||!_0x143cd4[_0x33b2c3(0x3bd)+'h'])continue;_0x33da17['push'](_0xc65731[_0x33b2c3(0x110)](_0xc65731[_0x33b2c3(0x17f)]+_0xbb3c67,'\x20')+new Array(Math['max'](-0x6d+0x9b9+0x319*-0x3,0x2051+-0x1fbb*0x1+-0x74-_0xbb3c67[_0x33b2c3(0x3bd)+'h']))['join']('─')),_0x33da17['push'](_0x33b2c3(0x433)+_0x33b2c3(0x38d)+_0x33b2c3(0x154)+_0x33b2c3(0x29d)+_0x33b2c3(0x1fb)+'lue\x20\x20'+_0x33b2c3(0x29d)+_0x33b2c3(0x29d)+'raw');for(var _0x2b2a81=0x9d9*-0x1+-0x264*-0x4+0x49;_0x2b2a81<_0x143cd4[_0x33b2c3(0x3bd)+'h'];_0x2b2a81++){if(_0xc65731[_0x33b2c3(0x492)](_0x33b2c3(0x325),'GtriR')){var _0x5b004a=_0x2cd73f['unity'+_0x33b2c3(0x282)+_0x33b2c3(0x281)]||_0x37fead[_0x33b2c3(0x22b)+_0x33b2c3(0x300)]||_0x508dc9['game'];if(_0x5b004a)return _0x4fca98[_0x33b2c3(0x102)+'e']=_0x538236[_0x33b2c3(0x323)],_0x5b004a;}else{var _0x12d415=_0x143cd4[_0x2b2a81],_0x2fbedd=_0xc65731[_0x33b2c3(0x46c)](typeof _0x12d415['v'],_0x33b2c3(0x18d)+'r')?_0xc65731[_0x33b2c3(0x256)](Math['round'](_0xc65731[_0x33b2c3(0x41f)](_0x12d415['v'],0x194a+-0x6*-0x295+0x14*-0x1d8)),0x2448+-0x575+-0x8f9*0x3):_0x12d415['v'];_0x33da17[_0x33b2c3(0xee)](_0xc65731['LrAOa'](_0xc65731['uhTVU'](_0xc65731[_0x33b2c3(0x10d)]('\x20\x20',_0xc65731['ESNxv']('0x',_0x12d415['o'][_0x33b2c3(0x30f)+'ing'](0x140*0xd+0x1b80+-0x2bb0))['padEn'+'d'](-0xee2+-0x1f9d+0x2e87)),'\x20')+_0x12d415['k']['padEn'+'d'](0x123d*-0x1+-0x3c7+-0x160f*-0x1)+'\x20'+String(_0x2fbedd)['padEn'+'d'](-0x57*0x26+-0x23be+0x185c*0x2)+'\x20',_0x12d415[_0x33b2c3(0x484)]||''));}}_0x33da17['push']('');}else return{'version':_0x321ee0,'when':new _0x526842()[_0x33b2c3(0x294)+_0x33b2c3(0xf7)+'g'](),'elapsedMs':_0x36ec10[_0x33b2c3(0x244)]()-_0x114b52,'host':_0x59b375,'uwmk':!!(_0x3fd36c['Unity'+_0x33b2c3(0x2a8)+'dkit']&&_0x5a1a1e[_0x33b2c3(0x375)+'WebMo'+_0x33b2c3(0x184)]['Runti'+'me']),'il2CppContext':![],'arm':_0x10e8c6,'hooksTotal':_0x140ed5[_0x33b2c3(0x3bd)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x38be64(_0x40e57a&&_0x2419e8['messa'+'ge']||_0x5a1e8c)};}if(_0x2913be['warni'+'ngs']&&_0x2913be['warni'+_0x33b2c3(0x2ba)]['lengt'+'h']){if(_0x33b2c3(0x2f9)!==_0xc65731[_0x33b2c3(0x17c)])_0xc65731[_0x33b2c3(0x2d8)](_0x36c973);else{_0x33da17[_0x33b2c3(0xee)](_0x33b2c3(0x1e4)+_0x33b2c3(0x2ba));for(var _0x47913b=-0x407*-0x5+0x1*0x941+-0x1d64;_0x47913b<_0x2913be[_0x33b2c3(0x1e4)+_0x33b2c3(0x2ba)]['lengt'+'h'];_0x47913b++)_0x33da17[_0x33b2c3(0xee)]('\x20\x20!\x20'+_0x2913be[_0x33b2c3(0x1e4)+'ngs'][_0x47913b]);}}return _0x33da17['join']('\x0a');}window['addEv'+'entLi'+'stene'+'r'](_0x10f5a8(0x3a9)+'ge',function(_0x3e9beb){var _0x4bbf12=_0x10f5a8,_0x5b9ba6={'AsjUH':function(_0x35219c,_0x199add){return _0x35219c!==_0x199add;}},_0x424415=_0x3e9beb['data'];if(!_0x424415||_0x424415[_0x4bbf12(0x22e)+_0x4bbf12(0x366)]!==_0x839ca)return;try{if(_0x424415['kind']===_0x4bbf12(0x316)){if(_0xc65731[_0x4bbf12(0x339)]===_0x4bbf12(0x153)){_0x1d575b()['set']({'host':_0x424415[_0x4bbf12(0x27b)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{var _0x49acfc=_0x1fb073[_0x4bbf12(0x33e)];if(!_0x49acfc||_0x49acfc[_0x4bbf12(0x22e)+_0x4bbf12(0x366)]!==_0x292a1d)return;try{if(_0xe51c73[_0x4bbf12(0x204)+'t']&&_0x2dfc37[_0x4bbf12(0x204)+'t']!==_0xfb2a56)_0x122830[_0x4bbf12(0x204)+'t'][_0x4bbf12(0x469)+_0x4bbf12(0x1aa)+'e'](_0x49acfc,'*');if(_0x5d6db5['top']&&_0x5b9ba6['AsjUH'](_0x5926a3[_0x4bbf12(0x179)],_0x20ac3b))_0xc4aad5['top'][_0x4bbf12(0x469)+'essag'+'e'](_0x49acfc,'*');}catch(_0x2fa649){}}}if(_0xc65731[_0x4bbf12(0x3b1)](_0x424415[_0x4bbf12(0x3d2)],_0x4bbf12(0x45a)+'t'))_0xc65731[_0x4bbf12(0x2d9)](_0x1d575b)[_0x4bbf12(0x231)](_0x424415['repor'+'t']);}catch(_0x5b0181){console['warn']('%c[sa'+_0x4bbf12(0x2b3)+'\x20pane'+'l\x20upd'+_0x4bbf12(0x343)+'ailed',_0xc65731[_0x4bbf12(0x35f)](_0xc65731[_0x4bbf12(0x2e7)],_0x1753d8),_0x5b0181);}});if(document[_0x10f5a8(0x4b0)])_0x1d575b();else document[_0x10f5a8(0x4ae)+'entLi'+'stene'+'r'](_0x10f5a8(0x191)+_0x10f5a8(0x205)+_0x10f5a8(0x312)+'d',_0x1d575b,{'once':!![]});return;}window[_0x10f5a8(0x1b2)+'URA_S'+_0x10f5a8(0x10e)]=window['__SAK'+_0x10f5a8(0x23f)+_0x10f5a8(0x10e)]||{'at':Date[_0x10f5a8(0x244)]()};function _0x4fdbab(_0x39fd32,_0x173e53){var _0x100426=_0x10f5a8,_0x4df7d3={'KksvO':_0xc65731[_0x100426(0x26d)],'Bgisf':'\x20obje'+'ct(s)'+'\x20but\x20'+_0x100426(0x2c9)+'0\x20fie'+_0x100426(0x19c),'hCCWI':function(_0x2837e8,_0x264476){return _0xc65731['aEaeS'](_0x2837e8,_0x264476);},'AWgxi':_0xc65731[_0x100426(0x2a3)]},_0x4cc591={'__sakura':_0x839ca,'kind':_0x39fd32};if(_0x173e53){for(var _0x42ab72 in _0x173e53)_0x4cc591[_0x42ab72]=_0x173e53[_0x42ab72];}try{if(_0xc65731['YlNwM']('cwmbu','SSOYw')){if(window[_0x100426(0x204)+'t']&&window[_0x100426(0x204)+'t']!==window)window[_0x100426(0x204)+'t']['postM'+_0x100426(0x1aa)+'e'](_0x4cc591,'*');}else _0x468bd8['warni'+_0x100426(0x2ba)][_0x100426(0xee)](_0x4df7d3['KksvO']+_0x2ef812[_0x100426(0x34c)](_0x238dd4[_0x100426(0x3ab)+_0x100426(0x202)])['lengt'+'h']+_0x4df7d3[_0x100426(0x471)]+(_0x3a9422[_0x100426(0x452)+'rror']?_0x4df7d3['hCCWI'](_0x4df7d3['AWgxi'],_0x9df44d[_0x100426(0x452)+'rror']):_0x100426(0x2e3)+'ad\x20fa'+_0x100426(0x243)+_0x100426(0x118)+_0x100426(0x1d9)+_0x100426(0x2a4)+_0x100426(0x28f)+'\x20skip'+'ped\x20b'+'y\x20typ'+'e.'));}catch(_0x1a02cf){}try{if(window['top']&&window[_0x100426(0x179)]!==window)window[_0x100426(0x179)]['postM'+'essag'+'e'](_0x4cc591,'*');}catch(_0x1e0966){}}console[_0x10f5a8(0x3d9)](_0xc65731['alpxU'],_0xc65731[_0x10f5a8(0x497)](_0xc65731[_0x10f5a8(0x32d)](_0x10f5a8(0x26b)+':',_0x1753d8),_0x10f5a8(0x43e)+'-weig'+'ht:70'+'0'),{'host':_0x1efff6,'href':location[_0x10f5a8(0x466)]}),_0xc65731['gTMba'](_0x4fdbab,_0xc65731[_0x10f5a8(0x212)],{'host':_0x1efff6,'role':_0x3b3312});var _0x2728ce=window[_0x10f5a8(0x1b2)+_0x10f5a8(0x23f)+_0x10f5a8(0x10e)]&&window[_0x10f5a8(0x1b2)+_0x10f5a8(0x23f)+'W__']['at']||Date['now']();try{var _0x14232c=new BroadcastChannel('sakur'+'a-sw');_0x14232c['onmes'+_0x10f5a8(0x2a5)]=function(_0x29b54a){var _0x594716=_0x10f5a8,_0x5196d1=_0x29b54a['data'];if(_0x5196d1&&_0x5196d1['__sak'+_0x594716(0x366)]===_0x839ca&&_0x5196d1['kind']===_0xc65731['QztUe'])_0xad9f13(_0x5196d1[_0x594716(0x4ab)],_0x5196d1['arg']);};}catch(_0x1cc58b){}var _0x4baa95=[];(function _0x1fe1ee(){var _0x45a705=_0x10f5a8,_0x5372b7={'qVmJA':_0xc65731[_0x45a705(0x2de)],'tnLoA':_0xc65731[_0x45a705(0x230)],'IlrFH':function(_0x46bed6,_0x28ef60){return _0x46bed6<_0x28ef60;},'jiBIE':function(_0x21551b,_0x5c8ad2){return _0x21551b===_0x5c8ad2;},'tGKZM':_0x45a705(0x375)+'WebMo'+_0x45a705(0x184)},_0x25e38b=[_0x45a705(0x3d9),_0x45a705(0x10f),'error','info',_0xc65731['UkxVs']];for(var _0x2cba38=0x1fe7*0x1+0x1281*0x1+-0x3268;_0xc65731[_0x45a705(0x463)](_0x2cba38,_0x25e38b['lengt'+'h']);_0x2cba38++){_0xc65731[_0x45a705(0x45f)](_0x45a705(0x436),_0xc65731['xyjwT'])?function(_0x137e38){var _0x1f7ab4=_0x45a705;if('paSvb'==='dOlfO'){var _0x566e6e=(_0x1f7ab4(0x1c1)+_0x1f7ab4(0x160)+'7|1|3')[_0x1f7ab4(0x3e6)]('|'),_0x29e7db=-0x222a+0x10b0+-0x2*-0x8bd;while(!![]){switch(_0x566e6e[_0x29e7db++]){case'0':var _0x438282=[_0x5372b7[_0x1f7ab4(0x410)],_0x1f7ab4(0x22b)+_0x1f7ab4(0x300),_0x1f7ab4(0x2d6),_0x5372b7['tnLoA']];continue;case'1':_0xbfb3da['value'+_0x1f7ab4(0x494)+'er']=typeof _0x5551c7;continue;case'2':var _0x24058d=_0x4d6cf4();continue;case'3':return _0xbfb3da;case'4':for(var _0x23a176=0xb*0x137+-0x9c*0x24+0x5*0x1b7;_0x5372b7['IlrFH'](_0x23a176,_0x438282['lengt'+'h']);_0x23a176++){var _0x431184=_0x438282[_0x23a176],_0x17c34c=typeof _0x58eb5e[_0x431184];_0xbfb3da[_0x431184]=_0x17c34c==='undef'+_0x1f7ab4(0x365)?'undef'+'ined':_0x17c34c;}continue;case'5':_0xbfb3da[_0x1f7ab4(0x34b)+_0x1f7ab4(0x134)]=_0x1617d2['sourc'+'e'];continue;case'6':var _0xbfb3da={};continue;case'7':try{_0xbfb3da['hasMo'+'dule']=!!(_0x24058d&&_0x24058d['Modul'+'e']),_0xbfb3da[_0x1f7ab4(0x475)+'8']=!!(_0x24058d&&_0x24058d['Modul'+'e']&&_0x24058d['Modul'+'e'][_0x1f7ab4(0x20b)+'8']),_0xbfb3da[_0x1f7ab4(0x1e0)+_0x1f7ab4(0x1fa)]=_0xbfb3da['heapU'+'8']?_0x24058d[_0x1f7ab4(0x464)+'e'][_0x1f7ab4(0x20b)+'8']['lengt'+'h']:-0x5*0x361+0x20b*-0x3+-0x34a*-0x7;}catch(_0x4ff1b0){_0xbfb3da['hasMo'+'dule']=![],_0xbfb3da['heapU'+'8']=![],_0xbfb3da[_0x1f7ab4(0x1e0)+'ytes']=-0x1c20+-0xb1b*0x1+0x273b;}continue;}break;}}else{var _0x184348=console[_0x137e38];if(typeof _0x184348!=='funct'+_0x1f7ab4(0x490))return;console[_0x137e38]=function(){var _0xe2529f=_0x1f7ab4;try{var _0x5848b1='';for(var _0xfd8b75=0x1*-0x175d+0xf41+0x81c;_0xfd8b75<arguments['lengt'+'h'];_0xfd8b75++){var _0x24d0bf=arguments[_0xfd8b75];if(_0x5372b7['jiBIE'](typeof _0x24d0bf,_0xe2529f(0x367)+'g'))_0x5848b1+=_0x24d0bf;else{if(_0x24d0bf&&_0x24d0bf['messa'+'ge'])_0x5848b1+=_0x24d0bf['messa'+'ge'];}}if(_0x5848b1['index'+'Of'](_0x30a4c2)!==-(0x7cf*-0x3+0x1a99*-0x1+0x3207))return _0x184348['apply'](console,arguments);if(_0x5848b1['index'+'Of'](_0x5372b7[_0xe2529f(0x1a3)])!==-(0x14*-0x148+0xcdd+0x56*0x26)){var _0x5d13ff=_0x5848b1[_0xe2529f(0x4b3)](0x1102*-0x1+0x1cf6*0x1+0xf*-0xcc,-0x119b*0x1+-0xdf8+-0x20bf*-0x1);if(_0x5372b7['jiBIE'](_0x4baa95[_0xe2529f(0x15e)+'Of'](_0x5d13ff),-(0x376*0x1+-0x57f*0x6+0x2af*0xb))&&_0x4baa95['lengt'+'h']<0x213d+0x1af8+-0x3bf9)_0x4baa95[_0xe2529f(0xee)](_0x5d13ff);}}catch(_0x4527e8){}return _0x184348[_0xe2529f(0x22c)](console,arguments);};}}(_0x25e38b[_0x2cba38]):_0x5838b5['remov'+'e']();}}());var _0x4cd1ce={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x267cb7=null,_0x35415e=_0xc65731['nVUsi'],_0x519a92=null,_0x461692=null,_0x7f1f61={},_0x2263bc=[],_0x1bf46e=[],_0x39026b=[{'type':'FPSco'+'ntrol'+'ler','keep':!![]},{'type':_0x10f5a8(0x247)+_0x10f5a8(0x391)+'pt','keep':!![]},{'type':'Weapo'+_0x10f5a8(0x215)+'ger','keep':![]},{'type':_0xc65731[_0x10f5a8(0x1ee)],'keep':![]}],_0x2af74d=[_0xc65731['qlwVZ'],_0x10f5a8(0x1a6)+'bly-C'+'Sharp'+'-firs'+_0x10f5a8(0x470)+_0x10f5a8(0x448),_0x10f5a8(0x113)+_0x10f5a8(0x39b)+_0x10f5a8(0x473)+_0x10f5a8(0x18a)+'ll','cInpu'+_0x10f5a8(0x173),_0xc65731['jIcvp'],_0xc65731[_0x10f5a8(0x28d)]];(function _0x3de489(){var _0x44dac4=_0x10f5a8;try{var _0x6ae753=_0xc65731[_0x44dac4(0x482)]['split']('|'),_0x40f1cf=0x35*0x33+-0x92*-0x3b+-0x2c35;while(!![]){switch(_0x6ae753[_0x40f1cf++]){case'0':_0x4cd1ce[_0x44dac4(0x41b)+_0x44dac4(0x22f)+'tered']=_0x2263bc[_0x44dac4(0x3bd)+'h'];continue;case'1':_0x461692=_0x38589b[_0x44dac4(0x3fa)+'ePlug'+'in']({'name':_0xc65731[_0x44dac4(0x10a)],'version':_0x35415e,'referencedAssemblies':_0x2af74d['slice']()});continue;case'2':if(!_0x38589b||typeof _0x38589b['creat'+_0x44dac4(0x488)+'in']!==_0x44dac4(0x338)+_0x44dac4(0x490)){_0x4cd1ce[_0x44dac4(0x279)]='Runti'+_0x44dac4(0x394)+'eateP'+'lugin'+_0x44dac4(0xfa)+'ailab'+'le';return;}continue;case'3':try{var _0x2409d2=window[_0x44dac4(0x375)+_0x44dac4(0x2a8)+'dkit']['Runti'+'me'];_0x2409d2[_0x44dac4(0x22e)+'uraTa'+'g']=_0x35415e+':'+Math['rando'+'m']()[_0x44dac4(0x30f)+'ing'](0x1*-0xc7b+0x9da+0x2c5)[_0x44dac4(0x4b3)](-0x2*0x1b3+0xb78+-0x18*0x56,-0x3*0x9e+0x1*-0x1024+0x1208),_0x267cb7=_0x2409d2[_0x44dac4(0x22e)+_0x44dac4(0x237)+'g'];}catch(_0x1a09a5){}continue;case'4':_0x4cd1ce[_0x44dac4(0x3e1)+_0x44dac4(0x10b)]=!![];continue;case'5':var _0x38589b=window[_0x44dac4(0x375)+_0x44dac4(0x2a8)+'dkit']&&window['Unity'+_0x44dac4(0x2a8)+_0x44dac4(0x184)][_0x44dac4(0x2c6)+'me'];continue;case'6':_0x4cd1ce['ok']=!![];continue;case'7':_0xc65731['dViUT'](_0x10fbd5);continue;}break;}}catch(_0x515c4a){_0x4cd1ce['error']=String(_0x515c4a&&_0x515c4a['messa'+'ge']||_0x515c4a);}}());var _0x1a201e=new Float32Array(0x772*0x3+0x1fcc+0x5d*-0x95),_0x383785=new Int32Array(_0x1a201e['buffe'+'r']);function _0x3a37dc(_0x427cfb){return _0x1a201e[-0x19b1+0x1102+0x2e5*0x3]=_0x427cfb,_0x383785[0x51*0x56+0x1*-0xef+-0x7*0x3c1];}function _0x4baa50(_0x15ca39){return _0x383785[0x1*-0x13ed+0x1f77+-0xb8a]=_0x15ca39|-0x1*-0x563+0x147d+0x120*-0x17,_0x1a201e[0x1d3b+-0x24d4+0x1*0x799];}var _0xc390dc={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0xebbc1a(){var _0x38be58=_0x10f5a8,_0x20ba61={'rGsAY':_0xc65731[_0x38be58(0x1b6)],'YiJVy':_0x38be58(0x319),'Uekca':'sakur'+'a-sw-'+'v2-cs'+'s'};if(_0xc65731['Maxff']('MNaGo',_0xc65731[_0x38be58(0x1ae)])){try{if(_0x461692&&_0x461692[_0x38be58(0x342)+_0x38be58(0x3db)]){var _0x4efca6=_0x461692[_0x38be58(0x342)+'ime'];if(typeof _0x4efca6[_0x38be58(0x1bd)+_0x38be58(0x310)+'e']==='funct'+'ion'){if(_0xc65731[_0x38be58(0x272)](_0x38be58(0x453),_0xc65731['Zblqx']))return _0x5a0cf8['sourc'+'e']=_0xc65731[_0x38be58(0x478)],_0x5f058b['_game'];else{var _0x16dd92=_0x4efca6[_0x38be58(0x1bd)+'veGam'+'e']();if(_0x16dd92)return _0xc390dc['sourc'+'e']=_0x38be58(0x240)+'n._ru'+'ntime'+_0x38be58(0x252)+'lveGa'+_0x38be58(0xf4),_0x16dd92;}}if(_0x4efca6['_game'])return _0xc390dc[_0x38be58(0x102)+'e']=_0xc65731['Raseq'],_0x4efca6[_0x38be58(0x203)];}}catch(_0x590e88){}try{if(_0xc65731['oWULj']('AaowR',_0x38be58(0x2b2))){var _0x5d912e=window[_0x38be58(0x375)+_0x38be58(0x2a8)+_0x38be58(0x184)]&&window[_0x38be58(0x375)+_0x38be58(0x2a8)+'dkit'][_0x38be58(0x2c6)+'me'];if(_0x5d912e&&_0xc65731[_0x38be58(0x352)](typeof _0x5d912e['resol'+'veGam'+'e'],_0x38be58(0x338)+'ion')){if(_0xc65731['yiXqV']!==_0x38be58(0x155)){var _0x11a897=0x4*0x83f+-0x1*0xde7+0x1*-0x1315;for(var _0x5ef934=-0x1d9*0xc+0x1184+0x95*0x8;_0x5ef934<_0x36b362[_0x38be58(0x3bd)+'h'];_0x5ef934++){if(_0x43528c[_0x5ef934][_0x38be58(0x3ee)]&&_0x23b198[_0x5ef934]['hook']['appli'+'ed'])_0x11a897++;}return _0x11a897;}else{var _0x40e030=_0x5d912e['resol'+'veGam'+'e']();if(_0x40e030)return _0xc390dc[_0x38be58(0x102)+'e']='Runti'+_0x38be58(0x440)+_0x38be58(0x2bf)+'Game('+')',_0x40e030;}}if(_0x5d912e&&_0x5d912e[_0x38be58(0x203)])return _0xc390dc[_0x38be58(0x102)+'e']='Runti'+'me._g'+_0x38be58(0x4b2),_0x5d912e;}else{var _0xecc8be=_0x54b1bc[_0x38be58(0x188)+'ement'+_0x38be58(0x376)](_0x20ba61['rGsAY']);if(_0xecc8be)return _0xecc8be;if(!_0x5875a5[_0x38be58(0x4b0)]||!_0x2c3a4d['body'][_0x38be58(0x44f)+_0x38be58(0x42b)+'d'])return null;try{if(!_0x4fcb3b[_0x38be58(0x188)+_0x38be58(0x399)+_0x38be58(0x376)]('sakur'+_0x38be58(0x3ce)+'v2-cs'+'s')){var _0x34461a=_0x5cde16['creat'+_0x38be58(0x3fc)+_0x38be58(0x135)](_0x20ba61[_0x38be58(0x385)]);_0x34461a['id']=_0x20ba61[_0x38be58(0x387)],_0x34461a[_0x38be58(0x36a)+'onten'+'t']=_0x38be58(0x187)+'ra-sw'+_0x38be58(0x3a7)+_0x38be58(0x151)+_0x38be58(0x289)+'}',(_0x24bcf8['head']||_0x46d6e1[_0x38be58(0x3f2)+'entEl'+_0x38be58(0x399)])[_0x38be58(0x44f)+_0x38be58(0x42b)+'d'](_0x34461a);}return _0xecc8be=_0x157879[_0x38be58(0x3fa)+_0x38be58(0x3fc)+_0x38be58(0x135)]('div'),_0xecc8be['id']='sakur'+_0x38be58(0x3ce)+'v2',_0x1d1e01['body'][_0x38be58(0x44f)+_0x38be58(0x42b)+'d'](_0xecc8be),_0xecc8be;}catch(_0x34d1c7){return null;}}}catch(_0x240783){}try{if(_0xc65731['jBhFO'](_0x38be58(0x3b2),_0xc65731[_0x38be58(0x101)]))_0x227543[_0x38be58(0x10f)]('%c[sa'+_0x38be58(0x2b3)+_0x38be58(0x1b7)+'l\x20upd'+'ate\x20f'+'ailed',_0xc65731['uhTVU'](_0xc65731[_0x38be58(0x2e7)],_0x596594),_0x42a510);else{var _0x124f86=window[_0x38be58(0x22b)+_0x38be58(0x282)+'nce']||window['unity'+_0x38be58(0x300)]||window['game'];if(_0x124f86)return _0xc390dc[_0x38be58(0x102)+'e']=_0x38be58(0x3b6)+_0x38be58(0x195)+'bal',_0x124f86;}}catch(_0x5e0674){}try{if('ueFos'===_0x38be58(0x36d)){try{var _0x1d560e=_0xba456f();if(_0x1d560e&&_0x1d560e[_0x38be58(0x464)+'e']&&_0x1d560e['Modul'+'e']['HEAPU'+'8']&&_0x1d560e[_0x38be58(0x464)+'e']['HEAPU'+'8'][_0x38be58(0x213)+'r'])return _0x1d560e[_0x38be58(0x464)+'e']['HEAPU'+'8'];}catch(_0x5b1404){}return null;}else{if(typeof game!=='undef'+_0x38be58(0x365)&&game)return _0xc390dc[_0x38be58(0x102)+'e']=_0x38be58(0x274)+'game\x20'+_0x38be58(0x2e4)+'ng',game;}}catch(_0x19373f){}try{var _0x2b8b3a=Object['keys'](window);for(var _0x43cb68=0x16b1+0x248d+-0x3b3e;_0x43cb68<_0x2b8b3a[_0x38be58(0x3bd)+'h']&&_0x43cb68<0x1c8c+-0x13*0x119+-0x559;_0x43cb68++){var _0x56336e=window[_0x2b8b3a[_0x43cb68]];if(_0x56336e&&typeof _0x56336e==='objec'+'t'&&_0x56336e[_0x38be58(0x464)+'e']&&_0x56336e[_0x38be58(0x464)+'e']['HEAPU'+'8']&&_0x56336e[_0x38be58(0x464)+'e'][_0x38be58(0x20b)+'8']['buffe'+'r'])return _0xc390dc[_0x38be58(0x102)+'e']=_0xc65731[_0x38be58(0x16b)]+_0x2b8b3a[_0x43cb68]+('.Modu'+'le'),_0x56336e;}}catch(_0x346e6a){}return _0xc390dc[_0x38be58(0x102)+'e']=null,null;}else _0x118e48[_0x38be58(0x36a)+'onten'+'t']=_0x4843cd['strin'+_0x38be58(0x13f)](_0x490b16,null,0x1*0x16bd+0xaa4+-0x2160);}function _0x25d8fc(){var _0x4d4a32=_0x10f5a8;try{var _0x30c16c=_0xebbc1a();if(_0x30c16c&&_0x30c16c[_0x4d4a32(0x464)+'e']&&_0x30c16c[_0x4d4a32(0x464)+'e'][_0x4d4a32(0x20b)+'8']&&_0x30c16c[_0x4d4a32(0x464)+'e'][_0x4d4a32(0x20b)+'8'][_0x4d4a32(0x213)+'r'])return _0x30c16c[_0x4d4a32(0x464)+'e']['HEAPU'+'8'];}catch(_0x553d8c){}return null;}function _0xacd251(){var _0x5cf401=_0x10f5a8;if('qQtep'==='pudVF')_0x3293bb&&_0x167a62[_0x5cf401(0x3dc)]==='F9'&&(_0x86a8b1[_0x5cf401(0x119)+_0x5cf401(0x27a)+_0x5cf401(0x405)](),_0x1d0020(_0x5cf401(0x117)+'hot'));else{var _0x189c5e=_0xc65731[_0x5cf401(0x277)](_0x25d8fc);if(!_0x189c5e)return null;try{return new DataView(_0x189c5e['buffe'+'r'],_0x189c5e['byteO'+'ffset'],_0x189c5e[_0x5cf401(0x3df)+_0x5cf401(0x447)]);}catch(_0xdb58cf){return null;}}}function _0x538724(_0x18b8db,_0x9ec04e){var _0x5e18a7=_0x10f5a8,_0x5de645=_0xacd251();if(!_0x5de645)return _0xc390dc[_0x5e18a7(0x3bc)+'d']++,_0xc390dc['lastE'+_0x5e18a7(0x2f4)]=_0xc390dc[_0x5e18a7(0x452)+_0x5e18a7(0x2f4)]||_0x5e18a7(0x3ff)+_0x5e18a7(0x21c)+'-\x20Uni'+_0x5e18a7(0x2ea)+'stanc'+'e\x20not'+'\x20reac'+_0x5e18a7(0x3f3)+'\x20via\x20'+'Runti'+'me.re'+_0x5e18a7(0x2bf)+'Game('+')\x20or\x20'+_0x5e18a7(0x290)+'indow'+'\x20glob'+'al',undefined;if(_0xc65731[_0x5e18a7(0x463)](_0x18b8db,0x1910+0x1b75+-0x3485)||_0xc65731[_0x5e18a7(0x35f)](_0x18b8db,-0xdf*0x16+-0x24eb*0x1+0x3819)>_0x5de645['byteL'+_0x5e18a7(0x447)])return _0xc390dc[_0x5e18a7(0x3bc)+'d']++,_0xc390dc['lastE'+_0x5e18a7(0x2f4)]=_0xc390dc[_0x5e18a7(0x452)+_0x5e18a7(0x2f4)]||_0xc65731[_0x5e18a7(0x16f)](_0xc65731['zgieZ'](_0xc65731['TRGFn'],_0x18b8db[_0x5e18a7(0x30f)+'ing'](-0x81*-0x27+-0x3*-0xb9b+0xd9a*-0x4)),_0xc65731['qZurG'])+_0x5de645['byteL'+'ength'][_0x5e18a7(0x30f)+_0x5e18a7(0x417)](0xe1*0x1f+0x37*-0xaf+0xa6a),undefined;try{_0xc390dc['ok']++;switch(_0x9ec04e){case'u8':return _0x5de645[_0x5e18a7(0x251)+_0x5e18a7(0x411)](_0x18b8db);case'i8':return _0x5de645['getIn'+'t8'](_0x18b8db);case'i16':return _0x5de645['getIn'+_0x5e18a7(0x24f)](_0x18b8db,!![]);case _0x5e18a7(0x136):return _0x5de645[_0x5e18a7(0x251)+_0x5e18a7(0x45e)](_0x18b8db,!![]);case'i32':return _0x5de645[_0x5e18a7(0x2cc)+_0x5e18a7(0x169)](_0x18b8db,!![]);case _0x5e18a7(0x19e):return _0x5de645[_0x5e18a7(0x251)+'nt32'](_0x18b8db,!![]);case _0x5e18a7(0x424):return _0x5de645['getFl'+_0x5e18a7(0x28b)](_0x18b8db,!![]);case'f64':return _0x5de645[_0x5e18a7(0x2ab)+_0x5e18a7(0x19b)](_0x18b8db,!![]);default:return _0x5de645[_0x5e18a7(0x2cc)+_0x5e18a7(0x169)](_0x18b8db,!![]);}}catch(_0x485382){if(_0x5e18a7(0x41a)===_0xc65731[_0x5e18a7(0x327)]){var _0x5ceac4=_0x82fe38[_0x5e18a7(0x375)+_0x5e18a7(0x2a8)+_0x5e18a7(0x184)]['Runti'+'me'];_0x5ceac4['__sak'+_0x5e18a7(0x237)+'g']=_0x379b36+':'+_0xc752cf['rando'+'m']()['toStr'+_0x5e18a7(0x417)](-0x15a1+-0x1ec7+0x348c)[_0x5e18a7(0x4b3)](0x1*0x827+0x5ec*0x2+-0x13fd,0x1*-0x16f+0xee3+0x22*-0x65),_0x26a429=_0x5ceac4[_0x5e18a7(0x22e)+'uraTa'+'g'];}else return _0xc390dc[_0x5e18a7(0x3bc)+'d']++,_0xc390dc['lastE'+_0x5e18a7(0x2f4)]=_0xc390dc[_0x5e18a7(0x452)+'rror']||String(_0x485382&&_0x485382['messa'+'ge']||_0x485382)[_0x5e18a7(0x4b3)](0xcf+-0x1b25+0x1a56,0x1*0x1e11+0x204*0xa+-0x31c1*0x1),undefined;}}function _0x10d164(_0x31773c,_0x19a959,_0xdc3d5f){var _0x36d1fa=_0x10f5a8,_0x3b7c12=_0xacd251();if(!_0x3b7c12||_0x31773c<0x13*-0x1a5+-0xa*0x357+0x40a5*0x1||_0xc65731[_0x36d1fa(0x41d)](_0x31773c+(0x180c+0x1eef+-0x1*0x36f7),_0x3b7c12[_0x36d1fa(0x3df)+_0x36d1fa(0x447)]))return![];try{switch(_0x19a959){case'u8':case'i8':_0x3b7c12[_0x36d1fa(0x3bb)+_0x36d1fa(0x411)](_0x31773c,_0xc65731[_0x36d1fa(0x346)](_0xdc3d5f,-0x2373+-0xa*0x223+0x5*0xb90));break;case'i16':case _0xc65731['usmJx']:_0x3b7c12[_0x36d1fa(0x18f)+_0x36d1fa(0x24f)](_0x31773c,_0xc65731['WqpUf'](_0xdc3d5f,-0x1c1*0x1+0x22db+-0x1*0x211a),!![]);break;case _0xc65731[_0x36d1fa(0x225)]:case _0x36d1fa(0x19e):_0x3b7c12[_0x36d1fa(0x18f)+'t32'](_0x31773c,_0xdc3d5f|0x99e+0x3*-0xccd+0x1cc9*0x1,!![]);break;case _0xc65731[_0x36d1fa(0x157)]:_0x3b7c12['setFl'+'oat32'](_0x31773c,_0xdc3d5f,!![]);break;default:_0x3b7c12['setIn'+'t32'](_0x31773c,_0xdc3d5f|-0x15d+-0x7ce+0x1*0x92b,!![]);}return!![];}catch(_0x46e9d8){return![];}}var _0x35fb5e={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa}};function _0x49a0c5(_0x551e73,_0xf7c7fa,_0x1d3500){var _0x518d34=_0x10f5a8,_0x312b1f=_0x35fb5e[_0x1d3500];if(!_0x312b1f)return null;var _0x2492ae=_0xc65731[_0x518d34(0x307)](_0x538724,_0xc65731['AmxLc'](_0xc65731[_0x518d34(0x16a)](_0x551e73,_0xf7c7fa),_0x312b1f['key']),'u8'),_0xbc57fb=_0xc65731[_0x518d34(0x199)](_0x538724,_0x551e73+_0xf7c7fa+_0x312b1f[_0x518d34(0x31f)+'n'],_0xc65731['ChDzK']),_0x2170aa=_0x538724(_0xc65731['DHrbX'](_0x551e73+_0xf7c7fa,_0x312b1f[_0x518d34(0x3e8)+'d']),'u8'),_0x3b0742=_0x538724(_0xc65731[_0x518d34(0x268)](_0xc65731[_0x518d34(0x3f1)](_0x551e73,_0xf7c7fa),_0x312b1f['fake']),_0x1d3500===_0xc65731[_0x518d34(0x4a4)]?_0xc65731['XyFgT']:_0x1d3500===_0xc65731[_0x518d34(0x163)]?_0x518d34(0x459):'u8'),_0x305f68=_0xc65731[_0x518d34(0x200)](_0x538724,_0x551e73+_0xf7c7fa+_0x312b1f[_0x518d34(0x3a6)+'e'],'u8');if(_0xc65731[_0x518d34(0x352)](_0x2492ae,undefined)||_0xbc57fb===undefined||_0x3b0742===undefined||_0x305f68===undefined)return null;_0x2492ae&=-0x11*-0x5+0x215d+-0x2f9*0xb,_0xbc57fb|=-0x1f0e+-0x1c75+0x3b83,_0x2170aa=_0xc65731[_0x518d34(0x1c7)](_0xc65731[_0x518d34(0x1e5)](_0x2170aa,-0x3*0x48b+0x1*-0x2dd+-0x83f*-0x2),0x1a*-0x54+-0x373+0x3b*0x34),_0x305f68&=0x165e*-0x1+0x220c*-0x1+0x386b;var _0x542f42;if(_0x1d3500===_0xc65731[_0x518d34(0x4a4)])_0x542f42=_0x4baa50(_0xbc57fb^_0x2492ae);else{if(_0xc65731[_0x518d34(0x426)](_0x1d3500,'obfI'))_0x542f42=_0xc65731['bseUL'](_0xbc57fb,_0x2492ae)|-0x1ee9+0x18ab+0x63e;else _0x542f42=_0xc65731[_0x518d34(0x320)](_0xc65731[_0x518d34(0x404)](_0xbc57fb,_0x2492ae)&-0x29f+-0x1c7f+0x201d,-0xf36+0x113b+0x1*-0x205)?-0x111d+0x2e2+0x1*0xe3c:0xdca*0x2+0x1e2d+0xb8d*-0x5;}return{'real':_0x542f42,'fake':_0x3b0742,'act':_0x305f68,'init':_0x2170aa,'key':_0x2492ae,'hidden':_0xbc57fb};}function _0x3bd549(_0x53e082,_0x231dd0,_0x58f49f,_0x11332a){var _0x4bd3a6=_0x10f5a8,_0x2df59f=_0x35fb5e[_0x58f49f];if(!_0x2df59f)return![];var _0xbe6719=_0xc65731[_0x4bd3a6(0x43b)](_0x49a0c5,_0x53e082,_0x231dd0,_0x58f49f);if(!_0xbe6719)return![];var _0x135b4d=_0xbe6719[_0x4bd3a6(0x31d)],_0x2e1e79;if(_0x58f49f===_0x4bd3a6(0x224))_0x2e1e79=_0x3a37dc(_0x11332a)^_0x135b4d;else{if(_0x58f49f===_0xc65731[_0x4bd3a6(0x163)])_0x2e1e79=(_0x11332a|0x1eab+0x1276*0x1+-0x1*0x3121)^_0x135b4d;else _0x2e1e79=(_0x11332a?-0x1a2e+0x89*-0x3a+0x3939:0xd*-0x28d+0x1*0x2113+0x16)&-0x1f38+-0x29b*0x5+0x2d3e^_0x135b4d;}var _0x3897ba=_0xc65731['AtbvN'](_0x58f49f,'obfF')?'f32':_0xc65731['oWULj'](_0x58f49f,'obfI')?_0xc65731[_0x4bd3a6(0x225)]:'u8',_0x206aae=_0x58f49f===_0xc65731[_0x4bd3a6(0x4a4)]?_0x11332a:_0x58f49f===_0xc65731['zzgDw']?_0x11332a|-0x17d2+0x2374+0x5d1*-0x2:_0x11332a?0x1381+0xcd7+-0x2057:0xcb8*-0x3+-0x1df+0x2807;return _0xc65731['bQaKw'](_0x10d164,_0x53e082+_0x231dd0+_0x2df59f[_0x4bd3a6(0x31f)+'n'],_0xc65731[_0x4bd3a6(0x225)],_0x2e1e79|0x10a8+-0x1*-0x9e+-0x1146)&&_0xc65731['jlfGv'](_0x10d164,_0xc65731[_0x4bd3a6(0x35d)](_0xc65731[_0x4bd3a6(0x451)](_0x53e082,_0x231dd0),_0x2df59f[_0x4bd3a6(0x146)]),_0x3897ba,_0x206aae)&&_0x10d164(_0x53e082+_0x231dd0+_0x2df59f[_0x4bd3a6(0x3a6)+'e'],'u8',0xb17+-0x19a7*0x1+0xe90);}var _0x7d41a8={'FPScontroller':[[-0x3d*0x64+-0xc8b+0x246f*0x1,'obfF'],[-0xc5e+-0x8b1*-0x2+-0x137*0x4,_0x10f5a8(0x224)],[0x1*-0x189d+-0x19a1*0x1+0x327e,_0x10f5a8(0x224)],[-0x265*0x8+-0x1442+0x5ae*0x7,_0xc65731['wKZsU']],[0x12f9+-0x255a+-0x12d1*-0x1,_0xc65731[_0x10f5a8(0x4a4)]],[-0x178c+-0x16bb+0x2ecf,_0x10f5a8(0x224)],[0xf*0x33+-0x1*0x414+0x1b7*0x1,_0xc65731['wKZsU']],[-0x1e26+0x1678+-0x2*-0x433,'obfB'],[0x9*0x292+0x1f4c+-0x35aa,_0x10f5a8(0x224)],[0x128c+0x1373+-0xc61*0x3,_0xc65731[_0x10f5a8(0x225)]],[0x299+0x282*0x6+-0x10b9,'u8'],[0x19fd+-0x5ed+-0x1320*0x1,'obfF'],[-0x171c+0x102e*-0x1+0x2*0x1429,_0xc65731['ChDzK']],[0x2*0x126c+0x1d45*-0x1+-0x687,'u8'],[-0x17a9+0x2ab*-0x7+-0xa*-0x457,_0x10f5a8(0x459)],[-0x16*-0x93+-0x766+0x10a*-0x4,'u8'],[-0x253b+0x2e*0x4c+0x18a8,'u8'],[-0x2254+-0x25c*-0xc+0x39*0x20,_0x10f5a8(0x224)],[0x3*0xbfc+0x6*0x23d+-0x371*0xe,_0x10f5a8(0x224)],[0xa4*0x2f+0xa*-0x93+-0x1712,_0xc65731['XyFgT']],[-0xaf5+0x112+-0x2f*-0x3d,_0xc65731[_0x10f5a8(0x157)]],[0x10ee*0x1+-0x42e*0x4+-0x1*-0x136,_0xc65731['XyFgT']],[0x141b*0x1+-0x1*0xb83+-0x728,_0xc65731['XyFgT']],[0x1db5+-0x3df*-0x4+-0x2ba9,'u8'],[-0xa3*-0x7+-0x90*-0x6+-0x649,'f32'],[0x2615*-0x1+-0xb*-0x241+-0xd*-0x126,'u8'],[-0x1*-0x1a92+-0x74*-0x19+-0x2432,_0x10f5a8(0x424)],[-0x1f1f+-0xf18+0x7*0x6d9,'f32'],[-0x15a*0xf+0x1747*0x1+-0x145,'u8'],[0xe78+0x222e+-0xfa3*0x3,'u8'],[0x611*0x1+0x4*-0x507+0xfcb,_0x10f5a8(0x224)],[-0xa09+-0x20*-0x26+0x16d*0x5,_0xc65731[_0x10f5a8(0x157)]],[-0x16f0+0x3b9*-0x5+0x2b69,'u8'],[0xe*-0x80+0x193c+0xc*-0x15d,_0x10f5a8(0x224)],[0x1382*0x1+0x61e+-0x1798,'obfB'],[0x1329*0x2+0x1*-0x7be+-0x4*0x71f,_0xc65731['XyFgT']],[-0x2376+0x347*-0x7+0x3c83,'f32'],[0x242+0x714+-0x70a,_0x10f5a8(0x424)],[0xc48+-0x7dd+-0x21b,_0x10f5a8(0x424)],[-0x1459+0x14b9+0x64*0x5,_0xc65731['XyFgT']],[-0xcda+0xd78+0x1ba,_0x10f5a8(0x424)],[0x32*-0x6+-0x23b1+0x2739,'u8'],[0x2f5*-0x2+0x1*0x5d6+0x271,'u8'],[0x1*-0x3cb+0xad0*-0x2+0x1*0x1bc9,'u8'],[0x1807+0x49*0x11+-0x8*0x350,_0x10f5a8(0x424)],[-0x1*-0x9a4+-0x1c26+-0x19*-0xd6,'u8'],[-0x111*0xd+0x4*-0x2c3+0x1b4e,'u8'],[-0x1d46+-0x260a+-0x116e*-0x4,'f32'],[-0x19*0x8b+-0x2345+-0x4*-0xcd1,_0x10f5a8(0x424)],[-0x1457+-0x538*0x4+-0x2ba7*-0x1,'f32'],[0x22cc+0xa9*-0x2a+-0x49e,'f32'],[0x22a7+0x250f+-0x229f*0x2,_0x10f5a8(0x424)],[-0x616+-0xc1d+-0x161*-0xf,_0xc65731[_0x10f5a8(0x157)]],[0x11bd*-0x1+-0x183c+0x5*0x8e5,_0x10f5a8(0x424)],[0x1aea*0x1+-0x340+-0x1*0x1516,'u8'],[-0xcc3+0x10cf*0x2+-0x1237,_0x10f5a8(0x424)],[0x579+0x1d88+-0x675*0x5,_0x10f5a8(0x424)],[0xd02+-0x1*-0x1357+-0x1d9d,_0xc65731['XyFgT']],[-0x8*0x146+0x9c8+0x328,'f32'],[0x3*0xa43+-0x15ca+0x91*-0xb,'u8'],[-0x216f+0x1*0x1ae7+0x94d,'u8'],[0x97b+-0x13+-0x35*0x20,_0x10f5a8(0x424)],[0x1afc+0x2*0x897+0x2*-0x14a7,_0xc65731[_0x10f5a8(0x157)]],[0xe93+-0x10dd*0x1+0x546,_0x10f5a8(0x424)],[0x12d*0xe+-0x1ecf+0x1159,_0xc65731['XyFgT']],[-0x2616+0x9*0x2b6+0x10b4,'f32'],[-0x8ef+-0x50*0x1e+0x1557,'f32'],[0x178a+-0x1*0x17c1+0x34f,'u8'],[0x1*0x1f79+0x7b1+-0x2402,_0xc65731[_0x10f5a8(0x225)]],[-0x3*-0x45+0x3e*0x3f+0x1*-0xce5,_0x10f5a8(0x424)],[0x1612+0x135d*-0x1+0x7b,_0x10f5a8(0x424)],[0x2316+-0x2263+0x281,_0x10f5a8(0x424)],[0x52*0x35+0x220f+-0x2fcd,_0xc65731['XyFgT']],[0x8b*0x11+0xa08+0x1003*-0x1,'u8'],[-0x1930+0x116*-0x16+-0x3455*-0x1,'u8'],[0x567*0x7+0x1e0c*-0x1+-0x479,'u8'],[0x1*-0x108d+-0x1ef+0x3*0x743,'u8'],[-0x1aa3+-0x1*-0x19e1+-0x208*-0x2,'u8'],[0xf*-0x64+0x34+0x4*0x23e,_0xc65731['XyFgT']],[0x18*0x86+-0x1*0xd8b+0x44f,_0xc65731[_0x10f5a8(0x157)]],[-0x1*0x1dfd+0x1*-0x60b+0xa8*0x3c,'f32'],[0x45a+-0xc25*-0x2+-0x1948,'f32'],[-0x231d*0x1+0x5*0x41d+-0x1f*-0x94,_0xc65731[_0x10f5a8(0x157)]],[-0x2*0xc7f+-0x60*0x61+-0x2061*-0x2,'u8'],[-0x12ef+-0x1ce8+0x333f,_0x10f5a8(0x424)],[-0x1959+-0xe2*-0xa+-0x5*-0x3fd,_0x10f5a8(0x424)],[-0x1*-0x13c+-0x12bf+-0x14f3*-0x1,'u8'],[-0x1*0x4e3+-0x2*0xeb2+0xb7*0x35,_0xc65731[_0x10f5a8(0x157)]],[-0x915+0x20d8+-0x5*0x407,_0x10f5a8(0x424)],[0x1416+0x2701*0x1+-0x1*0x3773,'f32'],[-0x4*0x580+0x1*-0x11d7+0x2b8b,_0x10f5a8(0x459)],[0x6*-0x3e1+0x1*-0x147a+0x2f78,'u8'],[-0x119*-0x4+0x5*-0x289+0xc05*0x1,_0xc65731[_0x10f5a8(0x225)]],[-0x2132+0x1ef6*-0x1+0x43e8,'f32'],[0x52f*0x2+-0x24a5+0x1e0b,_0xc65731['XyFgT']],[0x1533+-0x55b*0x1+-0x10*0xc1,_0xc65731['XyFgT']],[-0xf1b+-0x943*0x1+0x1c2a,_0xc65731[_0x10f5a8(0x157)]],[0x3*-0x755+-0x1*0x1029+0x2a04,_0xc65731[_0x10f5a8(0x225)]],[0x90*0x32+-0x120c+0x18d*-0x4,'u8'],[-0x222f+-0x2378+-0x34*-0x16a,'u8'],[0x1*-0x2443+-0x1e95*-0x1+0x90*0x11,'u8'],[0x442*0x1+0x63d*-0x2+0xc1c,'f32'],[0x843+-0xd3*0x5+-0x3*0x14,_0x10f5a8(0x459)]],'HealthScript':[[0xb7b+-0x1685+0xb62*0x1,'u8'],[-0x44b*-0x1+0x263*-0x1+-0xc6*0x2,_0xc65731[_0x10f5a8(0x225)]],[-0x1e95+0x1*0x1f08+-0xd*-0x1,_0x10f5a8(0x424)],[0x5*-0x8b+0x1*0x178d+0x11*-0x132,_0xc65731[_0x10f5a8(0x157)]],[0x50*0x6b+0x7*-0x43+0x1*-0x1f13,_0xc65731[_0x10f5a8(0x157)]],[0x61*0x2a+-0x8e3+-0x3*0x229,'f32'],[-0x1*0x1fe3+0x2099*-0x1+0x2086*0x2,_0x10f5a8(0x424)],[-0x9*-0xed+0xf1f+-0x16e0,_0x10f5a8(0x424)],[-0x813+-0xe*-0x2c0+-0x3*0x9ef,'i32'],[-0x4f*-0x43+0xc1b+-0x2024,_0xc65731[_0x10f5a8(0x225)]],[0x1d4*-0x7+0xdc+0xc98,'u8'],[0x367*0x1+-0x140b+0x114d,'u8'],[0x2211+0x270d+0x2*-0x243a,'u8'],[0x87*0x30+0x1465*0x1+-0x2d0a,'u8'],[-0x216c+-0x52d*-0x2+-0xbe9*-0x2,_0x10f5a8(0x32b)],[0x1*0x172f+0x5cb+-0x2*0xe13,_0x10f5a8(0x32b)],[0x158c+0x163*0x4+-0x1a30*0x1,_0xc65731['zzgDw']],[-0x301+-0x7e1+-0x7*-0x1b2,_0xc65731['zzgDw']],[-0x164d*-0x1+-0xaa*0x35+-0xdf5*-0x1,'obfI'],[-0x2491+0xc5b+-0x3b*-0x6e,_0xc65731['fNfTy']],[-0x5d5*0x3+0x1b5d+-0x457*0x2,_0xc65731[_0x10f5a8(0x4a4)]],[-0xbe8+0x4f*0x59+-0xe47,_0xc65731[_0x10f5a8(0x157)]],[-0x7cf*-0x4+-0x139e+0xa52*-0x1,'f32'],[-0x254e+-0x23af+-0x4a4d*-0x1,_0x10f5a8(0x424)],[0x934+-0xfdc+0x7fc,_0xc65731[_0x10f5a8(0x157)]],[0x21ea+-0x20*-0x22+-0x24ce,_0xc65731['XyFgT']],[0xdab+-0x1030+-0x3f5*-0x1,_0xc65731[_0x10f5a8(0x157)]],[-0x244b+-0x1cc+0x1*0x278f,_0xc65731[_0x10f5a8(0x157)]],[-0x1*-0x1c83+-0xad*0x13+0x1*-0xe2c,'u8'],[-0x45*-0x15+-0x26d9+0x39*0x9c,'u8'],[0x8*-0xc1+-0xcf0+0x1488*0x1,_0x10f5a8(0x459)]],'PlayerConfig':[],'WeaponManager':[[-0x7f6*-0x1+-0xa19+-0x1*-0x23b,'i32'],[-0x2440*0x1+-0x1*-0x246e+-0x12,_0x10f5a8(0x459)],[-0x1676+-0x4f1*-0x4+0x2d2,'u8'],[-0xc1*0x29+0x1bb4+-0x359*-0x1,'i32'],[0x1*-0x1d7b+0x8a8+0x1537,'obfF'],[0x1132+0x62*-0x5+-0x1*0xecc,_0x10f5a8(0x424)],[-0x974+-0x1*-0x1af9+0x5ab*-0x3,_0xc65731[_0x10f5a8(0x225)]],[-0x1e08+0xc7c+0x1214,'u8'],[0x766+0x88c*0x1+-0xf69,'u8'],[-0xf57+0x528*0x1+0x1*0xabb,_0x10f5a8(0x459)],[-0xc2d+0x1dec+-0x112f,_0xc65731[_0x10f5a8(0x157)]],[-0xc41*-0x2+0x1*-0x1f39+0x74f*0x1,_0xc65731[_0x10f5a8(0x157)]],[-0x9*0x24b+0x1b04+-0x5b5,_0x10f5a8(0x459)],[0xadd+0xf9d+-0x19be,'u8'],[-0x1116+0xa30+0x7c2,_0xc65731[_0x10f5a8(0x163)]],[0x1962+0x228f+-0x1*0x3b01,'obfI'],[0xc*0xf4+-0x1*-0xa93+-0x19*0xd7,_0xc65731['XyFgT']],[0xb*-0xa7+0x6d3*-0x1+0xf08,_0x10f5a8(0x424)],[-0x758+-0x1558+0x1dbc,_0xc65731[_0x10f5a8(0x157)]],[0x1718+-0x1367+0x299*-0x1,_0xc65731['XyFgT']],[0x1cdb+-0x16*0x5d+0xa3*-0x1f,_0x10f5a8(0x424)],[0x2611+-0x5b*-0x12+0x1*-0x2b4f,'u8'],[-0x1907+0xb3*0x31+-0x56*0x18,_0xc65731['zzgDw']],[0x6a*0x3f+-0x888+-0x827*0x2,_0xc65731['zzgDw']],[0x1e62+-0x7*-0x186+0x52*-0x7c,_0x10f5a8(0x32b)],[-0xef+-0xfa3*0x2+0x1*0x219d,_0xc65731['fNfTy']],[0x7dc*-0x3+-0xccc+0x25d4,_0xc65731['fNfTy']],[0x2703+0x467+0x431*-0xa,'obfB'],[0x1cb9+0x17*-0x74+0x1*-0x10c1,'obfB'],[-0x8c1+0x2634+-0x1bcf,'obfB'],[0x2d*-0xb6+0x7bd+0x19f1,_0xc65731[_0x10f5a8(0x163)]],[-0x1bf7+0x2*0xb2f+-0x277*-0x3,_0xc65731[_0x10f5a8(0x225)]],[0x129e+0x16ec+-0x46a*0x9,'u8'],[0x4*-0x1cf+0x1c*-0xd6+0x103c*0x2,_0xc65731['ChDzK']],[0x26a+-0x8*0x411+0x1ff6*0x1,_0xc65731[_0x10f5a8(0x225)]],[-0x11a7*0x1+0x37f*0x7+0x269*-0x2,_0x10f5a8(0x459)],[-0x4f*-0x37+0x355*-0x2+-0x83b,'u8'],[0x516+-0x322*0x2+-0x34a*-0x1,'u8'],[0x864+0x13*-0x4f+0x1*-0x6a,'u8'],[0x549+0x3+-0x4a*0xb,'u8'],[0x2159*0x1+-0x14e4+0x62*-0x1b,'u8'],[-0xb2+0x331*-0x1+0x633,_0x10f5a8(0x459)],[-0x1c66*0x1+0xa12+0x2*0xa56,'u8']],'GG_GameManager':[[0x2342*-0x1+0x11ef*0x1+0x11*0x107,'u8'],[0xfc*0x2+-0x9*-0x2bd+-0x7*0x3c7,_0x10f5a8(0x424)],[-0x1983+-0x233d+0x3d04,'u8'],[0x42*0x73+-0x2b9*0xe+0x8bd,'u8'],[0x1568+-0xf*0x16d+0x43,_0x10f5a8(0x424)],[-0x1ba+0x167*0x13+0x835*-0x3,_0x10f5a8(0x424)],[0x35*-0x5f+0x4*-0x46a+0x25a3,_0x10f5a8(0x459)],[0x239e+-0x1e4a+0x4*-0x140,'i32'],[-0x2*0x7f+0x12f1*-0x1+-0x1447*-0x1,'u8'],[-0x69d*0x1+0x1b*0x13e+0x1a79*-0x1,'u8'],[0xd*0x17+0x2*0x51d+-0xaed,_0x10f5a8(0x424)],[0xdba+-0x1*0x1ced+0xfaf,'f32'],[0x219e+-0x2120+0x12,_0x10f5a8(0x459)],[-0x11e6*0x1+0x1a*-0x12b+-0x2*-0x186c,'u8'],[-0x1f13+0x2549+-0x582,_0x10f5a8(0x459)],[0xea2+-0x1942*0x1+0xb5c,_0x10f5a8(0x459)],[0x8e6*-0x1+0x106a+-0x6c4,'i32'],[-0x1*0x11c1+0x5e7*-0x1+0x1890,_0xc65731[_0x10f5a8(0x163)]],[0x26ba+-0x21d6+-0x3e8,_0x10f5a8(0x32b)],[0x2192+0x1295+-0xb*0x4a5,_0x10f5a8(0x32b)],[0x1*-0x2605+-0x182*0x2+0x5*0x871,'u8'],[0x4*-0x15e+-0x63b+0xce3,_0xc65731[_0x10f5a8(0x225)]],[0x20e7+-0xeda+0x1*-0x10a9,'u8'],[0xf2+-0x34f*0xb+-0x13*-0x1f1,_0x10f5a8(0x424)],[-0xb21*0x1+-0x6*0x251+-0x1*-0x1a87,'u8'],[0x31*-0xa2+-0x47b+-0xc57*-0x3,'u8'],[0x2*0x795+0x1962+0x2*-0x1374,'u8'],[-0x55*0x16+0x596*-0x1+0xe*0x10a,'i32'],[0xb5*0x1d+0x2*0x14e+-0x1571,_0xc65731[_0x10f5a8(0x157)]],[0x4*0x393+-0x1*0x24d9+0x5*0x4d9,'u8'],[0x40b+-0x11*0x35+0x12b,'u8'],[0x19fd*0x1+0x32c*0x7+0x2e79*-0x1,_0x10f5a8(0x459)],[-0x1143+-0x2053+0x3352,'i32'],[-0x1*0x205d+-0x59*-0x56+0x53*0xd,_0x10f5a8(0x424)],[0x1512+0x1fa7+-0x32f5,'i32'],[-0x26f8+0x220f*-0x1+0x4acf,_0xc65731['XyFgT']],[-0x15*0xd3+0xaf5+0x826,_0x10f5a8(0x459)],[0x1*0x434+-0x2*0xedb+0x1a*0x10d,_0x10f5a8(0x459)]]};function _0x52057f(_0x22142c,_0xb42eec){var _0x31ef92={'rTSzr':function(_0x333e12,_0x3e6335){var _0x41da3c=_0x3723;return _0xc65731[_0x41da3c(0x3b1)](_0x333e12,_0x3e6335);}};return function(_0x318005){var _0x4bb55c=_0x3723;try{var _0x17ac98=_0x318005&&_0x318005['val']?_0x318005['val']():-0x15af+-0x17f6*-0x1+0x247*-0x1;if(!_0x17ac98)return;var _0x2197cb=_0x7f1f61[_0x22142c];if(!_0x2197cb||_0xc65731[_0x4bb55c(0x36c)](_0x2197cb[_0x4bb55c(0x489)],_0x17ac98)){if(_0xc65731[_0x4bb55c(0x46c)](_0xc65731['LCOHb'],_0x4bb55c(0x137)))return _0x1b1e1[_0x4bb55c(0x102)+'e']=_0x4bb55c(0x3b6)+'w\x20glo'+'bal',_0xa81505;else{_0x7f1f61[_0x22142c]={'ptr':_0x17ac98,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x2197cb};try{var _0x5afc26=_0x2263bc['filte'+'r'](function(_0x29363e){var _0x194b5c=_0x4bb55c;return _0x29363e[_0x194b5c(0x253)]===_0x22142c;})[0x13*-0x15a+0x2*0x65b+0xcf8];_0xe05d70={'type':_0x22142c,'atMs':Date['now']()-_0x2728ce,'originalFunc':!!(_0x5afc26&&_0x5afc26['hook']&&typeof _0x5afc26['hook']['origi'+'nalFu'+'nc']===_0xc65731['HMMtb']),'resolveGameAtFire':!!_0xc65731[_0x4bb55c(0x374)](_0xebbc1a),'gameSourceAtFire':_0xc390dc[_0x4bb55c(0x102)+'e']};}catch(_0xdbd47b){}}}_0x7f1f61[_0x22142c]['hits']++;if(!_0xb42eec){var _0x5afc26=_0x2263bc[_0x4bb55c(0x38f)+'r'](function(_0x17ca30){var _0x4505e3=_0x4bb55c;return _0x31ef92[_0x4505e3(0x3d1)](_0x17ca30[_0x4505e3(0x253)],_0x22142c);})[0xf51*-0x1+0x387*0x1+-0x5e5*-0x2];if(_0x5afc26&&_0x5afc26[_0x4bb55c(0x3ee)])try{_0x5afc26['hook']['enabl'+'ed']=![];}catch(_0x6799){}}}catch(_0x19f827){}};}function _0x10fbd5(){var _0x460d08=_0x10f5a8,_0x78d644={'LHWjf':'sakur'+'a-sw'};if(_0x460d08(0x3e5)===_0xc65731['CdVJo']){if(_0x2263bc[_0x460d08(0x3bd)+'h'])return!![];if(!window['Unity'+'WebMo'+_0x460d08(0x184)]||!window[_0x460d08(0x375)+_0x460d08(0x2a8)+_0x460d08(0x184)]['Runti'+'me'])return![];var _0x459779=window['Unity'+_0x460d08(0x2a8)+_0x460d08(0x184)]['Runti'+'me'];if(!_0x459779[_0x460d08(0x240)+'ns']||!_0x459779[_0x460d08(0x240)+'ns'][_0x460d08(0x3bd)+'h'])return![];_0x519a92=window[_0x460d08(0x375)+'WebMo'+'dkit'][_0x460d08(0x3f9)+'Wrapp'+'er'],_0x461692=_0x461692||_0x459779['plugi'+'ns'][_0xc65731[_0x460d08(0x267)](_0x459779[_0x460d08(0x240)+'ns'][_0x460d08(0x3bd)+'h'],-0x782*0x1+0x19a7*-0x1+0x212a)];if(!_0x461692||_0xc65731['NUZTz'](typeof _0x461692[_0x460d08(0x13c)+_0x460d08(0x13e)],'funct'+'ion'))return![];for(var _0x143526=0x22a1+-0x1d64+-0x53d;_0x143526<_0x39026b[_0x460d08(0x3bd)+'h'];_0x143526++){if(_0xc65731[_0x460d08(0x25a)](_0xc65731[_0x460d08(0x249)],_0x460d08(0x39e)))_0x4e5ce1['warni'+_0x460d08(0x2ba)][_0x460d08(0xee)](_0xc65731[_0x460d08(0x3a2)](_0xc65731[_0x460d08(0x1e3)],_0xc65731[_0x460d08(0x37b)])+(_0x460d08(0x1c3)+'ame\x20w'+'hile\x20'+'the\x20o'+_0x460d08(0x1e9)+_0x460d08(0x37c)+'\x20it\x20i'+_0x460d08(0x2a2)+_0x460d08(0x152)+_0x460d08(0x37f)+_0x460d08(0x3af)+_0x460d08(0x4a8)+_0x460d08(0x39a)+'r\x20')+_0xc65731[_0x460d08(0x369)]);else{var _0x4dabc2=_0x39026b[_0x143526];try{if('UhAVy'==='UhAVy'){var _0x2b93d6=_0x461692['hookP'+_0x460d08(0x13e)]({'typeName':_0x4dabc2[_0x460d08(0x253)],'methodName':_0x460d08(0x2ae)+'e','params':['i32',_0xc65731[_0x460d08(0x225)]],'returnType':undefined},_0xc65731[_0x460d08(0x307)](_0x52057f,_0x4dabc2[_0x460d08(0x253)],_0x4dabc2[_0x460d08(0x306)]));_0x2263bc['push']({'type':_0x4dabc2['type'],'hook':_0x2b93d6,'keep':_0x4dabc2[_0x460d08(0x306)]});}else{if(_0x393ee9[_0x4db7fd][_0x460d08(0x3ee)]&&_0x4894b0[_0x5eef72]['hook'][_0x460d08(0x36f)+'Index']!==_0x33a4b3)_0x4b9b47++;}}catch(_0x1b720b){_0x1bf46e[_0x460d08(0xee)](_0xc65731['QkjCL'](_0xc65731[_0x460d08(0x110)](_0x4dabc2['type'],':\x20'),String(_0x1b720b&&_0x1b720b[_0x460d08(0x3a9)+'ge']||_0x1b720b)['slice'](-0x1*0x170f+0x9*-0x20b+0x2*0x14b9,0x22a*-0x1+0x1*-0x176f+-0x1*-0x1a39)));}}}return _0xc65731[_0x460d08(0x33f)](_0x2263bc['lengt'+'h'],0x43*-0x62+0x1*0x1b0e+0x78*-0x3);}else{var _0x5e1121=new _0x4df1e7(_0x78d644['LHWjf']);_0x5e1121['postM'+_0x460d08(0x1aa)+'e'](_0x43b440),_0x18eb11(function(){var _0x347be1=_0x460d08;try{_0x5e1121[_0x347be1(0x130)]();}catch(_0x12e9da){}},-0x4*0x2d0+0x219b+0xd*-0x1a5);}}function _0x311c7a(){var _0x2b2eb6=_0x10f5a8,_0x2e9beb={'lkqxO':function(_0x1189c0,_0x31a294){var _0x15ab24=_0x3723;return _0xc65731[_0x15ab24(0x1ff)](_0x1189c0,_0x31a294);},'GwDFN':'windo'+'w.','UvKtS':_0x2b2eb6(0x28c)+'le'};if(_0x2b2eb6(0x3fd)!==_0xc65731['WPVJl']){var _0x4dfdc5=('9|8|6'+'|1|0|'+'2|5|7'+'|4|3')['split']('|'),_0x9bbd94=-0x12c1+0x9c5+0x8fc;while(!![]){switch(_0x4dfdc5[_0x9bbd94++]){case'0':var _0xa10127=_0x53ccd8['key'];continue;case'1':if(!_0x53ccd8)return![];continue;case'2':var _0x37dbc2;continue;case'3':return _0x3b6f71(_0x5958a9+_0x2ec564+_0xa59e08[_0x2b2eb6(0x31f)+'n'],_0xc65731[_0x2b2eb6(0x225)],_0x37dbc2|0xcd0+0x9b8+-0x1688)&&_0x284d68(_0x3afe1e+_0x3cfd3d+_0xa59e08[_0x2b2eb6(0x146)],_0x436364,_0x23005b)&&_0x1d6d85(_0xc65731[_0x2b2eb6(0x429)](_0x3ebd38,_0x36c8e2)+_0xa59e08[_0x2b2eb6(0x3a6)+'e'],'u8',0x11f*0xd+-0x133d+-0x3*-0x18e);case'4':var _0x23005b=_0xc65731['MKODQ'](_0x1be408,'obfF')?_0x345fd4:_0xc65731[_0x2b2eb6(0x193)](_0x553af0,_0x2b2eb6(0x32b))?_0xc65731['CGyFw'](_0x18ace1,-0xb65*0x2+0x12b8+0x2*0x209):_0x152ab7?0x23+-0x188f*-0x1+0x1*-0x18b1:-0x88a+0x2*-0x10a2+0x1*0x29ce;continue;case'5':if(_0x46b43c===_0xc65731['wKZsU'])_0x37dbc2=_0x1a65ad(_0x4721c5)^_0xa10127;else{if(_0x172ef6==='obfI')_0x37dbc2=(_0xe34442|-0x2*-0x269+-0x1915+0xf7*0x15)^_0xa10127;else _0x37dbc2=(_0x5b1582?0xa62+0xe11*-0x1+0x10*0x3b:-0x1be*-0x4+-0x123b+-0x3*-0x3c1)&0x3*0x907+-0x5a7*-0x2+-0x2564^_0xa10127;}continue;case'6':var _0x53ccd8=_0x19abdf(_0x439e3e,_0x46bdd4,_0x214902);continue;case'7':var _0x436364=_0x4d02c1===_0x2b2eb6(0x224)?_0xc65731['XyFgT']:_0x1772b4==='obfI'?_0x2b2eb6(0x459):'u8';continue;case'8':if(!_0xa59e08)return![];continue;case'9':var _0xa59e08=_0x11b055[_0xd1f100];continue;}break;}}else{var _0x33dd2e=-0x18ad+-0x24c2+0x3d6f*0x1;for(var _0x250200=0x1*0xde2+-0x129e+0x1*0x4bc;_0xc65731['JfqPa'](_0x250200,_0x2263bc['lengt'+'h']);_0x250200++){if(_0xc65731['gYgGO']!==_0x2b2eb6(0x22a)){if(_0x2263bc[_0x250200][_0x2b2eb6(0x3ee)]&&_0xc65731['GQXaR'](_0x2263bc[_0x250200]['hook'][_0x2b2eb6(0x36f)+_0x2b2eb6(0x477)],undefined))_0x33dd2e++;}else return _0x1a44a2[_0x2b2eb6(0x102)+'e']=_0x2e9beb[_0x2b2eb6(0x214)](_0x2e9beb[_0x2b2eb6(0x17a)],_0x3d5d11[_0x326008])+_0x2e9beb['UvKtS'],_0x2131e0;}return _0x33dd2e;}}function _0x5931f9(){var _0x3511aa=_0x10f5a8,_0x51789e=0x872+-0x24c1+0x1*0x1c4f;for(var _0x3fdb5c=-0x1a79+0x2*-0x56f+0x2557;_0xc65731[_0x3511aa(0x463)](_0x3fdb5c,_0x2263bc['lengt'+'h']);_0x3fdb5c++){if(_0x2263bc[_0x3fdb5c][_0x3511aa(0x3ee)]&&_0x2263bc[_0x3fdb5c][_0x3511aa(0x3ee)][_0x3511aa(0x4aa)+'ed'])_0x51789e++;}return _0x51789e;}var _0x2a114e=null,_0x2bf712=[],_0xe05d70=null;function _0x4c481b(_0x56cb7f){var _0x1e841f=_0x10f5a8;try{if(_0xc65731[_0x1e841f(0x1e5)](!_0x519a92,!_0x56cb7f))return null;var _0x144f30=new _0x519a92(_0x56cb7f)['getCl'+'assNa'+'me']();return _0x144f30===undefined?null:_0x144f30;}catch(_0x53a229){if(_0xc65731[_0x1e841f(0x491)](_0xc65731['iZOtC'],_0xc65731[_0x1e841f(0x353)])){var _0x243679=_0x44d725();if(_0x243679&&_0x243679['Modul'+'e']&&_0x243679[_0x1e841f(0x464)+'e'][_0x1e841f(0x20b)+'8']&&_0x243679[_0x1e841f(0x464)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x243679[_0x1e841f(0x464)+'e'][_0x1e841f(0x20b)+'8'];}else return null;}}function _0x5a2945(){var _0x435377=_0x10f5a8,_0x1f1374={};_0xc390dc['ok']=-0x7f6+0x14af+-0xcb9,_0xc390dc['faile'+'d']=-0x24*0x75+0x15e2+0x1*-0x56e,_0xc390dc[_0x435377(0x452)+_0x435377(0x2f4)]=null;var _0x286132=Object['keys'](_0x7d41a8);for(var _0xd6107b=0x686+-0x942+-0xe*-0x32;_0xc65731[_0x435377(0x3e9)](_0xd6107b,_0x286132[_0x435377(0x3bd)+'h']);_0xd6107b++){var _0x5d7e6a=_0x286132[_0xd6107b],_0x154c91=_0x7f1f61[_0x5d7e6a];if(!_0x154c91||!_0x154c91[_0x435377(0x489)])continue;var _0x66e804=_0x7d41a8[_0x5d7e6a]||[],_0x1a723a=[];for(var _0x34c178=0x1bfe+0x40*-0x29+-0x6*0x2f5;_0x34c178<_0x66e804[_0x435377(0x3bd)+'h'];_0x34c178++){var _0x5953c0=_0x66e804[_0x34c178][-0x12aa+-0x15c9+0x2873],_0x1a0c5b=_0x66e804[_0x34c178][0x17b8+0x2a4*0x1+-0x1a5b];if(_0xc65731[_0x435377(0x46c)](_0x1a0c5b['index'+'Of'](_0x435377(0x150)),-0x18*0x59+0x128a*0x2+0x3*-0x994)){var _0x5bbdee=_0x49a0c5(_0x154c91[_0x435377(0x489)],_0x5953c0,_0x1a0c5b);if(!_0x5bbdee)continue;_0x1a723a['push']({'o':_0x5953c0,'k':_0x1a0c5b,'v':_0x5bbdee[_0x435377(0x3e7)],'fake':_0x5bbdee[_0x435377(0x146)],'act':_0x5bbdee['act'],'inited':_0x5bbdee[_0x435377(0x171)],'raw':_0xc65731[_0x435377(0x46d)](_0xc65731['nXmxR'](_0xc65731['qkgrg']('key=',_0x5bbdee['key']),_0xc65731['OOhJZ'])+_0x5bbdee['hidde'+'n']+(_0x435377(0x3da)+'='),_0x5bbdee[_0x435377(0x146)])+(_0x5bbdee['act']?_0xc65731[_0x435377(0x481)]:'')});}else{var _0x82ef30=_0x538724(_0xc65731['SXwjx'](_0x154c91[_0x435377(0x489)],_0x5953c0),_0x1a0c5b);if(_0x82ef30===undefined)continue;_0x1a723a[_0x435377(0xee)]({'o':_0x5953c0,'k':_0x1a0c5b,'v':_0x82ef30,'raw':''});}}if(_0x1a723a[_0x435377(0x3bd)+'h'])_0x1f1374[_0x5d7e6a]=_0x1a723a;}return _0x1f1374;}function _0x1f41c6(){var _0xecf6f1=_0x10f5a8,_0x1435ad={};try{if(_0xecf6f1(0x3a4)==='cUrHl'){if(!_0x49b0cf['lengt'+'h'])try{_0x13dace();}catch(_0x2b3092){}_0xa5585b++,_0xe64b3d(_0xc08465());if(!_0x2f3264[_0xecf6f1(0x3bd)+'h']&&_0x31515f<0x1*-0x2176+-0xf*0x153+0x367f)_0x5d15bb(_0x7ecaae,-0x5*-0x6de+0xed+-0x1b73);else{if(!_0x12a202[_0xecf6f1(0x34c)](_0x5e3201)[_0xecf6f1(0x3bd)+'h']&&_0x178a0f<-0x6d*0x3a+0x22ce+0x16*-0x68)_0x5a4b1e(_0x11fe36,0x41*0x32+0x23a3+-0x2885);else _0x262e98(_0x2ca09f,0x1951+-0x25be*0x1+0xd*0x151);}}else{var _0x46a728=('4|5|3'+_0xecf6f1(0x2bb)+'0')[_0xecf6f1(0x3e6)]('|'),_0x440a48=-0x20f7+0x1808+0x8ef;while(!![]){switch(_0x46a728[_0x440a48++]){case'0':_0x1435ad[_0xecf6f1(0x240)+_0xecf6f1(0x219)+'imeGa'+'me']=_0x461692&&_0x461692['_runt'+_0xecf6f1(0x3db)]&&_0x461692[_0xecf6f1(0x342)+_0xecf6f1(0x3db)]['_game']?typeof _0x461692[_0xecf6f1(0x342)+_0xecf6f1(0x3db)][_0xecf6f1(0x203)]:'none';continue;case'1':_0x1435ad[_0xecf6f1(0x1f2)+_0xecf6f1(0x2eb)+'e']=_0x39e867&&_0x39e867[_0xecf6f1(0x203)]?typeof _0x39e867[_0xecf6f1(0x203)]:_0xc65731[_0xecf6f1(0x42f)];continue;case'2':_0x1435ad['plugi'+_0xecf6f1(0x219)+_0xecf6f1(0x2d7)+'Expor'+_0xecf6f1(0x2d3)]=!!(_0x461692&&_0x461692[_0xecf6f1(0x342)+_0xecf6f1(0x3db)]&&_0xc65731[_0xecf6f1(0x3b1)](_0x461692['_runt'+_0xecf6f1(0x3db)],_0x39e867));continue;case'3':_0x1435ad[_0xecf6f1(0x44e)+'tches']=!!(_0xc65731[_0xecf6f1(0x1c9)](_0x39e867,_0x267cb7)&&_0xc65731[_0xecf6f1(0x1a9)](_0x39e867['__sak'+_0xecf6f1(0x237)+'g'],_0x267cb7));continue;case'4':var _0x39e867=window[_0xecf6f1(0x375)+_0xecf6f1(0x2a8)+_0xecf6f1(0x184)]&&window[_0xecf6f1(0x375)+_0xecf6f1(0x2a8)+_0xecf6f1(0x184)][_0xecf6f1(0x2c6)+'me'];continue;case'5':_0x1435ad[_0xecf6f1(0x24b)]=_0x39e867&&_0x39e867[_0xecf6f1(0x22e)+_0xecf6f1(0x237)+'g']||null;continue;}break;}}}catch(_0x255064){if(_0xc65731[_0xecf6f1(0x35c)]!==_0xc65731[_0xecf6f1(0x416)])_0x1435ad[_0xecf6f1(0x279)]=_0xc65731['YkbNs'](String,_0x255064&&_0x255064[_0xecf6f1(0x3a9)+'ge']||_0x255064);else return _0x16a845[_0xecf6f1(0x102)+'e']=_0xecf6f1(0x2c6)+_0xecf6f1(0x48a)+_0xecf6f1(0x4b2),_0x79e682;}return _0x1435ad;}function _0x25f299(){var _0x30bc46=_0x10f5a8,_0x568168={'NOQdD':_0x30bc46(0x459),'SYvBz':function(_0x14caa8,_0x595c5c,_0xd18e10){return _0x14caa8(_0x595c5c,_0xd18e10);}},_0x374b1d=[_0xc65731[_0x30bc46(0x2de)],_0x30bc46(0x22b)+_0x30bc46(0x300),'game',_0xc65731[_0x30bc46(0x230)]],_0x576ca7={};for(var _0x44f137=0x158d+0x204f+-0x35dc;_0x44f137<_0x374b1d['lengt'+'h'];_0x44f137++){if(_0xc65731['NUZTz'](_0xc65731[_0x30bc46(0x371)],'dFCvv')){var _0x300218=_0x374b1d[_0x44f137],_0x22b9c7=typeof window[_0x300218];_0x576ca7[_0x300218]=_0x22b9c7===_0x30bc46(0x32e)+_0x30bc46(0x365)?_0x30bc46(0x32e)+_0x30bc46(0x365):_0x22b9c7;}else{var _0x59eae1=_0x225bc6[_0x2b73ff[_0x483f0e]];if(_0x59eae1&&typeof _0x59eae1===_0x30bc46(0x408)+'t'&&_0x59eae1['Modul'+'e']&&_0x59eae1['Modul'+'e'][_0x30bc46(0x20b)+'8']&&_0x59eae1[_0x30bc46(0x464)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x4930f3['sourc'+'e']=_0x30bc46(0x3b6)+'w.'+_0x2a2db1[_0x194f3a]+_0xc65731[_0x30bc46(0x1e7)],_0x59eae1;}}var _0x3f12ae=_0xc65731['bHPGs'](_0xebbc1a);_0x576ca7['gameS'+_0x30bc46(0x134)]=_0xc390dc['sourc'+'e'];try{_0x576ca7['hasMo'+'dule']=!!(_0x3f12ae&&_0x3f12ae[_0x30bc46(0x464)+'e']),_0x576ca7['heapU'+'8']=!!(_0x3f12ae&&_0x3f12ae['Modul'+'e']&&_0x3f12ae['Modul'+'e']['HEAPU'+'8']),_0x576ca7['heapB'+_0x30bc46(0x1fa)]=_0x576ca7[_0x30bc46(0x475)+'8']?_0x3f12ae['Modul'+'e'][_0x30bc46(0x20b)+'8'][_0x30bc46(0x3bd)+'h']:0x6ae+-0xb2*-0x15+-0x1548;}catch(_0x2b96a7){if(_0xc65731['Maxff'](_0xc65731[_0x30bc46(0x165)],_0x30bc46(0x220)))_0x576ca7[_0x30bc46(0x49f)+_0x30bc46(0x48f)]=![],_0x576ca7[_0x30bc46(0x475)+'8']=![],_0x576ca7[_0x30bc46(0x1e0)+'ytes']=0x1340+-0x33*-0x8d+0x2f57*-0x1;else{var _0x119ab0=_0xfcd676[_0x68e248];try{var _0x1935c2=_0x1b6f62[_0x30bc46(0x13c)+'refix']({'typeName':_0x119ab0[_0x30bc46(0x253)],'methodName':_0x30bc46(0x2ae)+'e','params':[_0x30bc46(0x459),_0x568168['NOQdD']],'returnType':_0x31148e},_0x568168[_0x30bc46(0x265)](_0x4efef3,_0x119ab0[_0x30bc46(0x253)],_0x119ab0['keep']));_0x4c9570[_0x30bc46(0xee)]({'type':_0x119ab0[_0x30bc46(0x253)],'hook':_0x1935c2,'keep':_0x119ab0[_0x30bc46(0x306)]});}catch(_0x1aee71){_0x195245[_0x30bc46(0xee)](_0x119ab0[_0x30bc46(0x253)]+':\x20'+_0x480cae(_0x1aee71&&_0x1aee71[_0x30bc46(0x3a9)+'ge']||_0x1aee71)['slice'](0x1643+-0xe9*0x17+-0x22*0xa,0x1d22+-0x1*0x225b+0x5d9));}}}return _0x576ca7['value'+'Wrapp'+'er']=typeof _0x519a92,_0x576ca7;}function _0x298295(_0x56661f){var _0x2dbc57=_0x10f5a8;if(_0xc65731['SwZVr'](_0xc65731['JHbpy'],_0xc65731[_0x2dbc57(0x386)]))_0x279dc9['close']();else{var _0x382872={};for(var _0x3cc215 in _0x56661f){var _0x543c17=_0x56661f[_0x3cc215];for(var _0x193a33=0x2*0x52f+-0x7f*-0x2e+-0x2130;_0x193a33<_0x543c17['lengt'+'h'];_0x193a33++){if(_0x2dbc57(0x34d)!==_0xc65731[_0x2dbc57(0x211)])_0x382872[_0x3cc215+_0xc65731[_0x2dbc57(0x24c)]+_0x543c17[_0x193a33]['o'][_0x2dbc57(0x30f)+_0x2dbc57(0x417)](0x19cf+-0x1bd4*-0x1+0x3593*-0x1)]=_0x543c17[_0x193a33]['v'];else{var _0x55c2a5=_0x2f921e[_0x49d1aa],_0x1c97d2=typeof _0x26f072[_0x55c2a5];_0x384822[_0x55c2a5]=_0x1c97d2===_0x2dbc57(0x32e)+'ined'?_0xc65731['JgZCi']:_0x1c97d2;}}}return _0x382872;}}function _0xad9f13(_0x3003f0){var _0x38af2f=_0x10f5a8,_0x3898cd={'bvkYT':function(_0x3c1fdc,_0x157a48,_0xcc26ac){return _0x3c1fdc(_0x157a48,_0xcc26ac);},'FJfcW':_0x38af2f(0x45a)+'t'};if(_0xc65731['uLiZk'](_0xc65731['DFAfN'],'ocBvv')){if(_0x3003f0!=='snaps'+'hot')return;var _0x1cd1a8=_0x5a2945(),_0x1a02c7=_0x298295(_0x1cd1a8);if(!_0x2a114e){_0x2a114e=_0x1a02c7,_0x2bf712=[],_0xc65731['WELRQ'](_0x4fdbab,_0xc65731['DdHrx'],{'report':_0xf56926()});return;}_0x2bf712=[];for(var _0x16ef9e in _0x1a02c7){var _0x4ec93c=_0x2a114e[_0x16ef9e],_0x15961e=_0x1a02c7[_0x16ef9e];if(_0x4ec93c!==_0x15961e)_0x2bf712['push'](_0x16ef9e+':\x20'+_0x4ec93c+_0x38af2f(0x2be)+_0x15961e);}_0x2a114e=_0x1a02c7,_0x4fdbab(_0xc65731[_0x38af2f(0x38a)],{'report':_0xc65731['bHPGs'](_0xf56926)});}else{_0x50019d=_0x291ec6,_0x32cea7=[],_0x3898cd[_0x38af2f(0x311)](_0x98aef4,_0x3898cd['FJfcW'],{'report':_0x2966ba()});return;}}window[_0x10f5a8(0x4ae)+'entLi'+'stene'+'r'](_0x10f5a8(0x42e)+'wn',function(_0x5119db){var _0x24ba46=_0x10f5a8;_0x5119db&&_0x5119db[_0x24ba46(0x3dc)]==='F9'&&(_0x5119db['preve'+_0x24ba46(0x27a)+'ault'](),_0xc65731[_0x24ba46(0x1cf)](_0xad9f13,_0x24ba46(0x117)+_0x24ba46(0x27f)));},!![]);function _0xf56926(){var _0x49becc=_0x10f5a8,_0x3f2318=window['Unity'+_0x49becc(0x2a8)+_0x49becc(0x184)]&&window[_0x49becc(0x375)+_0x49becc(0x2a8)+_0x49becc(0x184)][_0x49becc(0x2c6)+'me']||null,_0xb407f5=_0x3f2318&&_0x3f2318[_0x49becc(0x40c)+_0x49becc(0x284)+_0x49becc(0x1f0)],_0x759bba=_0xb407f5&&_0xb407f5[_0x49becc(0x3c1)+_0x49becc(0x181)],_0x54141c={},_0x3b8199=[];for(var _0x5ae7c2 in _0x7f1f61){_0x54141c[_0x5ae7c2]=_0xc65731[_0x49becc(0x3a2)]('0x',_0x7f1f61[_0x5ae7c2]['ptr'][_0x49becc(0x30f)+_0x49becc(0x417)](0x1e4f+0x1bbf*-0x1+0x2*-0x140));if(_0x7f1f61[_0x5ae7c2][_0x49becc(0x3bf)+_0x49becc(0x139)])_0x3b8199[_0x49becc(0xee)](_0x5ae7c2);}var _0x69b3a0={};for(var _0x4f32ae in _0x7f1f61)_0x69b3a0[_0x4f32ae]=_0xc65731['ALgfz'](_0x4c481b,_0x7f1f61[_0x4f32ae]['ptr']);var _0x58eecb={},_0x91311b=null;try{_0x58eecb=_0x5a2945();}catch(_0x54a06b){_0x91311b=String(_0x54a06b&&_0x54a06b[_0x49becc(0x3a9)+'ge']||_0x54a06b);}var _0x6c7868={'version':_0x35415e,'when':new Date()[_0x49becc(0x294)+_0x49becc(0xf7)+'g'](),'elapsedMs':Date['now']()-_0x2728ce,'frame':location['href'][_0x49becc(0x4b3)](-0x78b*-0x4+0x1*0xca4+0x28*-0x112,0x895*0x3+0x1c77+-0x35be),'host':_0x1efff6,'frameRole':_0x3b3312,'uwmk':!!_0x3f2318,'il2CppContext':!!_0xb407f5,'typeCount':_0x759bba?Object['keys'](_0x759bba)[_0x49becc(0x3bd)+'h']:null,'arm':_0x4cd1ce,'assemblies':_0x2af74d,'hooksTotal':_0x2263bc['lengt'+'h'],'hooksApplied':_0x5931f9(),'hooksResolved':_0xc65731['SrSoz'](_0x311c7a),'hooksRegisteredAtArm':_0x4cd1ce['hooks'+'Regis'+_0x49becc(0x3f6)]||0x1*-0xa91+0x1da5*0x1+-0x1314,'hookErrors':_0x1bf46e['slice'](-0x1*-0x12cd+-0x2b7*0xe+0x1335*0x1,-0x7e1+-0xb74*-0x2+0x15d*-0xb),'instances':_0x54141c,'classNames':_0x69b3a0,'instancesReplaced':_0x3b8199,'hookFireProof':_0xe05d70,'survey':_0x58eecb,'surveyRows':Object['keys'](_0x58eecb)['reduc'+'e'](function(_0x54ce71,_0x4adb46){return _0xc65731['zgieZ'](_0x54ce71,_0x58eecb[_0x4adb46]['lengt'+'h']);},0x1b5b+0x1d*0xd+-0x1cd4),'reads':{'ok':_0xc390dc['ok'],'failed':_0xc390dc['faile'+'d'],'lastError':_0xc390dc[_0x49becc(0x452)+_0x49becc(0x2f4)],'source':_0xc390dc[_0x49becc(0x102)+'e']},'identity':_0x1f41c6(),'globals':_0xc65731[_0x49becc(0x2d9)](_0x25f299),'diff':_0x2bf712['slice'](0x1*0x1870+0x1a*0xc3+-0x652*0x7,0x425+-0xd66+-0x323*-0x3),'uwmkLog':_0x4baa95[_0x49becc(0x4b3)](-0x1822+-0x20a7+0x38c9,0x1f0c*0x1+0x1*-0x49c+0x1a5c*-0x1),'warnings':[]};if(_0x91311b)_0x6c7868['warni'+'ngs'][_0x49becc(0xee)](_0xc65731['iTaam']+_0x91311b);if(_0x4cd1ce[_0x49becc(0x279)])_0x6c7868[_0x49becc(0x1e4)+_0x49becc(0x2ba)]['push'](_0xc65731[_0x49becc(0x2aa)]+_0x4cd1ce['error']);_0xc65731['AtbvN'](_0x6c7868[_0x49becc(0x26a)+'yRows'],0x1e21+0x1de*0x4+0xb*-0x36b)&&_0xc65731['xolXL'](Object['keys'](_0x6c7868[_0x49becc(0x3ab)+_0x49becc(0x202)])['lengt'+'h'],-0x17f*0x7+0x73*0x37+0x71e*-0x2)&&_0x6c7868['warni'+'ngs'][_0x49becc(0xee)](_0xc65731['nWLRc']('captu'+_0x49becc(0x14c)+Object[_0x49becc(0x34c)](_0x6c7868['insta'+'nces'])[_0x49becc(0x3bd)+'h']+_0xc65731[_0x49becc(0x409)],_0xc390dc[_0x49becc(0x452)+'rror']?_0xc65731[_0x49becc(0x48d)]('Reaso'+_0x49becc(0x2cd),_0xc390dc[_0x49becc(0x452)+'rror']):_0x49becc(0x2e3)+_0x49becc(0x13b)+_0x49becc(0x243)+_0x49becc(0x118)+_0x49becc(0x1d9)+_0x49becc(0x2a4)+'t\x20was'+_0x49becc(0x392)+_0x49becc(0x25f)+'y\x20typ'+'e.'));_0x6c7868[_0x49becc(0x15b)+'ity']&&_0xc65731[_0x49becc(0x46c)](_0x6c7868[_0x49becc(0x15b)+_0x49becc(0x234)]['tagMa'+'tches'],![])&&(_0xc65731[_0x49becc(0x172)]===_0xc65731[_0x49becc(0x172)]?_0x6c7868['warni'+_0x49becc(0x2ba)]['push'](_0xc65731[_0x49becc(0x347)](_0xc65731[_0x49becc(0x1e3)]+_0xc65731[_0x49becc(0x37b)],_0xc65731['SOKTz'])+(_0x49becc(0x3dd)+'a/UWM'+_0x49becc(0x4a6)+'ipt\x20i'+_0x49becc(0x2d0)+_0x49becc(0x21b)+'nkey\x20'+'and\x20h'+'ard-r'+_0x49becc(0x174)+'.')):_0x8f360e[_0x49becc(0x1e4)+_0x49becc(0x2ba)][_0x49becc(0xee)](_0xc65731['zhLJN'](_0xc65731['IcNHO'](_0xc65731['GHWbx'](_0xc65731[_0x49becc(0x45c)]+_0x49a483[_0x49becc(0x41b)+'Resol'+'ved'],_0x49becc(0x380))+_0xadf125[_0x49becc(0x41b)+'Total'],_0xc65731['kcTSf']),_0xc65731[_0x49becc(0x27e)])));_0x6c7868[_0x49becc(0x15b)+_0x49becc(0x234)]&&_0x6c7868[_0x49becc(0x15b)+'ity']['plugi'+'nRunt'+'imeIs'+'Expor'+_0x49becc(0x2d3)]===![]&&_0x6c7868[_0x49becc(0x1e4)+_0x49becc(0x2ba)]['push'](_0xc65731['tsmfr']+(_0x49becc(0x468)+_0x49becc(0x266)+'diffe'+'rent\x20'+_0x49becc(0x2c6)+_0x49becc(0x361)+'stanc'+_0x49becc(0x3f7)+'n\x20the'+_0x49becc(0x285)+'al\x20no'+_0x49becc(0x24e)+'oses.'));if(_0x6c7868['globa'+'ls']&&!_0x6c7868['globa'+'ls'][_0x49becc(0x475)+'8']){var _0x48b186='';_0x6c7868[_0x49becc(0x14f)+_0x49becc(0x457)+'oof']&&(_0x48b186=_0xc65731[_0x49becc(0x293)]('\x20A\x20ho'+_0x49becc(0x3b9)+_0x49becc(0x315)+'t\x20'+_0x6c7868[_0x49becc(0x14f)+'irePr'+'oof'][_0x49becc(0x3d4)]+_0xc65731[_0x49becc(0x1ad)]+_0x6c7868['hookF'+_0x49becc(0x457)+'oof']['origi'+'nalFu'+'nc'],'\x20and\x20'+'game\x20'+_0x49becc(0x1bd)+_0x49becc(0x393))+_0x6c7868[_0x49becc(0x14f)+_0x49becc(0x457)+'oof']['resol'+'veGam'+_0x49becc(0x20d)+'re']+_0xc65731[_0x49becc(0x286)]+(_0x6c7868[_0x49becc(0x14f)+_0x49becc(0x457)+'oof'][_0x49becc(0x34b)+'ource'+'AtFir'+'e']||'none')+('),\x20so'+_0x49becc(0x31b)+_0x49becc(0x12d)+'ence\x20'+_0x49becc(0x304)+'ed\x20th'+'en\x20an'+'d\x20is\x20'+_0x49becc(0x458)+_0x49becc(0x16e)+'ble\x20n'+'ow.')),_0x6c7868[_0x49becc(0x1e4)+_0x49becc(0x2ba)][_0x49becc(0xee)](_0xc65731['SXwjx'](_0xc65731['yzwpI'](_0xc65731[_0x49becc(0x110)]('Unity'+_0x49becc(0x33a)+_0x49becc(0x1e6)+_0x49becc(0x458)+_0x49becc(0x11c)+_0x49becc(0x3cd)+'t\x20(so'+'urce:'+'\x20',_0x6c7868['globa'+'ls'][_0x49becc(0x34b)+'ource']||_0x49becc(0x48b)),_0x49becc(0x15d)),'Heap\x20'+_0x49becc(0x21d)+_0x49becc(0x178)+'\x20bloc'+_0x49becc(0x162)+_0x49becc(0x4a7)+'a\x20gam'+'e\x20obj'+'ect\x20w'+'ith\x20M'+_0x49becc(0x1f6)+'.HEAP'+_0x49becc(0x196)+'\x20reac'+_0x49becc(0x3f3)+'.')+_0x48b186);}if(_0x6c7868['globa'+'ls']&&!_0x6c7868['globa'+'ls'][_0x49becc(0x198)+'Wrapp'+'er']||_0x6c7868['globa'+'ls'][_0x49becc(0x198)+_0x49becc(0x494)+'er']==='undef'+'ined'){if(_0xc65731['ZmQiv']('ZkZPK',_0xc65731[_0x49becc(0x1a0)]))_0x6c7868[_0x49becc(0x1e4)+_0x49becc(0x2ba)][_0x49becc(0xee)]('windo'+_0x49becc(0x49b)+'tyWeb'+'Modki'+_0x49becc(0x328)+'ueWra'+_0x49becc(0x2fc)+_0x49becc(0x20e)+'ssing'+_0x49becc(0x406)+'pture'+'\x20is\x20r'+_0x49becc(0x441)+_0x49becc(0x108)+'nd.');else return _0x1aad3a['faile'+'d']++,_0x2371b0['lastE'+'rror']=_0x19cee3[_0x49becc(0x452)+'rror']||_0x49becc(0x3ff)+_0x49becc(0x21c)+_0x49becc(0x273)+_0x49becc(0x2ea)+_0x49becc(0x363)+_0x49becc(0x1a5)+'\x20reac'+'hable'+_0x49becc(0xe9)+_0x49becc(0x2c6)+'me.re'+'solve'+_0x49becc(0x298)+_0x49becc(0x42d)+_0x49becc(0x290)+'indow'+'\x20glob'+'al',_0x21edb6;}if(_0x6c7868['hooks'+_0x49becc(0x2f3)]>-0x1ea4+-0x740+0xc2*0x32&&_0xc65731[_0x49becc(0x3a0)](_0x6c7868[_0x49becc(0x41b)+_0x49becc(0x142)+'ed'],-0x151e+0x698+0xe86)&&_0x759bba){if(_0xc65731['niJOv'](_0xc65731['nMtuv'],_0x49becc(0x140)))try{_0x25bb43[_0x49becc(0x2ce)+'e']();}catch(_0x5c246c){}else _0x6c7868['hooks'+_0x49becc(0x3c6)+_0x49becc(0xfd)]===0x3*-0x5b5+-0x8c3*0x1+0x19e2?_0x6c7868[_0x49becc(0x1e4)+'ngs']['push'](_0xc65731[_0x49becc(0x1bc)](_0xc65731['OhnRm'](_0xc65731['rzlhy'](_0xc65731[_0x49becc(0x3f1)](_0xc65731['xhVyF'],_0x6c7868[_0x49becc(0x41b)+_0x49becc(0x2f3)]),'\x20hook'+'s\x20wer'+_0x49becc(0x1db)+_0x49becc(0x1bb)+_0x49becc(0x340)+'UWMK.'+'\x20The\x20'+_0x49becc(0x22c)+'\x20pass'+'\x20'),_0xc65731[_0x49becc(0x194)])+_0xc65731['SmgnH']+(_0x49becc(0x22f)+'tered'+'\x20'),_0x6c7868['hooks'+'Regis'+_0x49becc(0x3f6)+'AtArm'])+(_0x49becc(0x18c)+_0x49becc(0x11b)+_0x49becc(0x35a)+'\x20armi'+'ng\x20at'+'\x20docu'+_0x49becc(0x29a)+_0x49becc(0x2fb)+'.')):_0x6c7868['warni'+_0x49becc(0x2ba)]['push'](_0xc65731[_0x49becc(0x10d)](_0xc65731['sLptK']('UWMK\x20'+'resol'+_0x49becc(0x278),_0x6c7868['hooks'+_0x49becc(0x3c6)+_0x49becc(0xfd)])+_0x49becc(0x380)+_0x6c7868['hooks'+_0x49becc(0x2f3)]+(_0x49becc(0x18c)+_0x49becc(0x3e3)+'o\x20a\x20t'+_0x49becc(0x3af)+'index'+_0x49becc(0x43d)+_0x49becc(0x4aa)+'ed\x20no'+_0x49becc(0x3b0)+'he\x20si'+'gnatu'+'re\x20'),_0xc65731[_0x49becc(0x27e)]));}if(_0x6c7868[_0x49becc(0x41b)+'Appli'+'ed']>0x7*-0x50f+0x1*-0x1fb7+0x4320&&!_0x6c7868['insta'+_0x49becc(0x202)]['FPSco'+_0x49becc(0x1fe)+_0x49becc(0x437)]){if(_0xc65731['YPApM']==='Cnyar')_0x6c7868[_0x49becc(0x1e4)+'ngs'][_0x49becc(0xee)](_0xc65731['XeSCb']('Hooks'+'\x20are\x20'+'appli'+'ed\x20bu'+_0x49becc(0x248)+_0x49becc(0x2d2)+_0x49becc(0x1fe)+'ler\x20h'+'as\x20fi'+_0x49becc(0x3d7)+_0x49becc(0x10c),'Eithe'+_0x49becc(0x1e1)+_0x49becc(0x23e)+'not\x20i'+_0x49becc(0x309)+'ound,'+'\x20or\x20t'+'he\x20ho'+'ok\x20is'+_0x49becc(0x1f4)+_0x49becc(0x29f)+'ong\x20o'+_0x49becc(0x479)+'ad.'));else{var _0x41ea70=arguments[_0x4d2f24];if(typeof _0x41ea70===_0xc65731[_0x49becc(0x483)])_0x27ecab+=_0x41ea70;else{if(_0x41ea70&&_0x41ea70[_0x49becc(0x3a9)+'ge'])_0x4b1e12+=_0x41ea70['messa'+'ge'];}}}return _0x6c7868['insta'+'ncesR'+'eplac'+'ed']['lengt'+'h']&&_0x6c7868['warni'+'ngs'][_0x49becc(0xee)](_0xc65731[_0x49becc(0xf9)](_0xc65731[_0x49becc(0x291)],_0x6c7868[_0x49becc(0x3ab)+_0x49becc(0x197)+_0x49becc(0x4a3)+'ed'][_0x49becc(0x1d0)](',\x20'))),_0x6c7868;}function _0x3541d8(_0x297a20){var _0x1d2b4b=_0x10f5a8;console[_0x1d2b4b(0x3d9)](_0xc65731['GioaK'],_0x1d2b4b(0x26b)+':'+_0x1753d8+(';font'+'-weig'+_0x1d2b4b(0x434)+'0'),_0x297a20),console[_0x1d2b4b(0x3d9)](_0xc65731['rzlhy'](_0x30a4c2+'\x0a',JSON[_0x1d2b4b(0x367)+_0x1d2b4b(0x13f)](_0x297a20,null,0x203b+-0xfb2*-0x1+-0x2fec))+'\x0a'+_0x5194c7),_0x4fdbab(_0x1d2b4b(0x45a)+'t',{'report':_0x297a20});}function _0x22c6d0(){var _0x31ecc0=_0x10f5a8;if('iDqew'!==_0xc65731[_0x31ecc0(0x292)])return _0x44fa8b['datas'+'et']['api']='1',_0x273741['api']=_0x1aec3b,_0x31845f[_0x31ecc0(0x10f)](_0x31ecc0(0x44c)+_0x31ecc0(0x2b3)+'\x20pane'+'l\x20dis'+_0x31ecc0(0x1f9),_0xc65731[_0x31ecc0(0x28e)](_0xc65731[_0x31ecc0(0x2e7)],_0x21d626),_0x1637e2),_0x3b2860;else try{return _0xf56926();}catch(_0x67799a){if(_0xc65731[_0x31ecc0(0x491)](_0x31ecc0(0x2f7),_0xc65731[_0x31ecc0(0x413)]))return{'version':_0x35415e,'when':new Date()['toISO'+_0x31ecc0(0xf7)+'g'](),'elapsedMs':_0xc65731['rkiTD'](Date['now'](),_0x2728ce),'host':_0x1efff6,'uwmk':!!(window['Unity'+_0x31ecc0(0x2a8)+_0x31ecc0(0x184)]&&window[_0x31ecc0(0x375)+_0x31ecc0(0x2a8)+_0x31ecc0(0x184)][_0x31ecc0(0x2c6)+'me']),'il2CppContext':![],'arm':_0x4cd1ce,'hooksTotal':_0x2263bc[_0x31ecc0(0x3bd)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0xc65731[_0x31ecc0(0x129)](String,_0x67799a&&_0x67799a[_0x31ecc0(0x3a9)+'ge']||_0x67799a)};else _0xc65731[_0x31ecc0(0x24d)](_0x2d4c0a,_0xc65731['jQCLH']);}}function _0x125f11(){var _0xe8436c=0x1ebb*0x1+-0x281+-0xe1d*0x2;_0x3541d8(_0x22c6d0()),function _0x368268(){var _0x200fda=_0x3723;if(_0xc65731[_0x200fda(0x25a)](_0x200fda(0x3ef),_0xc65731['VyLtR'])){if(!_0x2263bc[_0x200fda(0x3bd)+'h']){if(_0xc65731['coMmb'](_0xc65731['wDwim'],_0x200fda(0x461)))try{_0x10fbd5();}catch(_0x59082f){}else return _0x164a1b['faile'+'d']++,_0x4cd018[_0x200fda(0x452)+'rror']=_0x4017bf[_0x200fda(0x452)+_0x200fda(0x2f4)]||_0xdc2e26(_0x4a79b6&&_0x50af46['messa'+'ge']||_0x7429c9)[_0x200fda(0x4b3)](0x34*-0x84+-0x225b+0x3d2b*0x1,0xb5+-0x2102+0x1*0x20c5),_0x48522d;}_0xe8436c++,_0xc65731[_0x200fda(0x2bd)](_0x3541d8,_0x22c6d0());if(!_0x2263bc['lengt'+'h']&&_0xe8436c<0x1a0b+0x40*-0x3a+-0xa5f)setTimeout(_0x368268,-0x1b*-0x29+-0x11d9*0x1+0x1556);else{if(!Object[_0x200fda(0x34c)](_0x7f1f61)[_0x200fda(0x3bd)+'h']&&_0xc65731[_0x200fda(0x3b8)](_0xe8436c,0xdb8+-0x1*-0x110e+-0x1a5*0x12))setTimeout(_0x368268,-0x131b+-0x1*0x1219+0x10c*0x2b);else setTimeout(_0x368268,-0x1012+0x5*0x76d+-0x21*0x7f);}}else{_0xfaa31c[_0x2b99fd]='0x'+_0x3ca2df[_0x507ebf][_0x200fda(0x489)][_0x200fda(0x30f)+_0x200fda(0x417)](-0xfd5+0x20cb+-0x10e6);if(_0x1b45dd[_0x2e2b99][_0x200fda(0x3bf)+_0x200fda(0x139)])_0x3f8e2a['push'](_0xe7a79c);}}();}if(document[_0x10f5a8(0x4b0)])_0xc65731[_0x10f5a8(0x39f)](_0x125f11);else document[_0x10f5a8(0x4ae)+_0x10f5a8(0x2c2)+_0x10f5a8(0x3eb)+'r'](_0xc65731[_0x10f5a8(0x210)],_0x125f11,{'once':!![]});})()));
