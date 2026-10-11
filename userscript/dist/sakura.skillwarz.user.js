// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.5
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

function _0x35e4(_0x2905a9,_0x2a5b9a){_0x2905a9=_0x2905a9-(-0x1396+0x1*-0x445+-0x24*-0xae);var _0x1f6a0c=_0x149f();var _0x38cf51=_0x1f6a0c[_0x2905a9];if(_0x35e4['TXtkeV']===undefined){var _0x59c119=function(_0x3083bb){var _0x375770='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x42db46='',_0x571f55='';for(var _0x358c1a=-0xc9d+-0x12*-0xd3+-0x239,_0x2ee173,_0x2550c0,_0x2d92bb=-0x1c6*0x7+-0xe8d+0x1af7;_0x2550c0=_0x3083bb['charAt'](_0x2d92bb++);~_0x2550c0&&(_0x2ee173=_0x358c1a%(-0x12e2+-0x30d+0x15f3)?_0x2ee173*(0xb*-0x1f9+0x1*-0x121+-0xd3*-0x1c)+_0x2550c0:_0x2550c0,_0x358c1a++%(-0x6*0x16b+-0x1d8b+-0x2611*-0x1))?_0x42db46+=String['fromCharCode'](0xd6c+0x4*-0x494+-0x1*-0x5e3&_0x2ee173>>(-(0x11*0x1d4+-0x6c7*-0x5+-0x40f5)*_0x358c1a&-0xe5*0x6+-0x2696+-0x2*-0x15fd)):0x1*0x258a+-0x1532*0x1+-0x1058){_0x2550c0=_0x375770['indexOf'](_0x2550c0);}for(var _0x68c5a0=-0x1*-0x1c6e+0xe50*-0x1+-0x2*0x70f,_0x209654=_0x42db46['length'];_0x68c5a0<_0x209654;_0x68c5a0++){_0x571f55+='%'+('00'+_0x42db46['charCodeAt'](_0x68c5a0)['toString'](-0x1abf+-0xe*0x288+0x1*0x3e3f))['slice'](-(0x1221+0x23ce+-0x35ed));}return decodeURIComponent(_0x571f55);};_0x35e4['StGODj']=_0x59c119,_0x35e4['JsYgsi']={},_0x35e4['TXtkeV']=!![];}var _0x2cc613=_0x1f6a0c[-0x5d5*-0x5+0x1b*-0x101+-0x20e],_0x1f85c5=_0x2905a9+_0x2cc613,_0x2f133a=_0x35e4['JsYgsi'][_0x1f85c5];return!_0x2f133a?(_0x38cf51=_0x35e4['StGODj'](_0x38cf51),_0x35e4['JsYgsi'][_0x1f85c5]=_0x38cf51):_0x38cf51=_0x2f133a,_0x38cf51;}(function(_0x3712c1,_0x2305ad){var _0x594e77=_0x35e4,_0x24eb0a=_0x3712c1();while(!![]){try{var _0x32cac0=parseInt(_0x594e77(0x62a))/(0x1b9f+0x197*-0x1+0x1*-0x1a07)*(-parseInt(_0x594e77(0x3f5))/(0xace+0x39d+-0xe69))+-parseInt(_0x594e77(0x5c7))/(0x174d+0x5*-0x1f7+-0xd77)+-parseInt(_0x594e77(0x128))/(0x172+0x1*-0x1b23+0x1*0x19b5)*(parseInt(_0x594e77(0x56b))/(0x22f7+-0x10bf+-0x1233*0x1))+-parseInt(_0x594e77(0x3e3))/(0x2342*-0x1+0x1*-0x1325+-0x1*-0x366d)*(-parseInt(_0x594e77(0xaa1))/(-0x1*0xec6+-0x1725*0x1+0x25f2))+parseInt(_0x594e77(0x5ca))/(-0xdda+-0x1020+-0x14e*-0x17)*(-parseInt(_0x594e77(0x27e))/(0x1d2f*0x1+0x1f2d+-0x3c53))+parseInt(_0x594e77(0xf7))/(-0x1034+0x1d82+-0xd44)+-parseInt(_0x594e77(0x344))/(0x7*-0x502+-0x66f+-0x2988*-0x1)*(-parseInt(_0x594e77(0x92a))/(0x1f*0x65+0x7+-0xc36));if(_0x32cac0===_0x2305ad)break;else _0x24eb0a['push'](_0x24eb0a['shift']());}catch(_0x4784b9){_0x24eb0a['push'](_0x24eb0a['shift']());}}}(_0x149f,0x12336+-0x15d*-0x196+0x643d),((()=>{'use strict';var _0x4ccb6b=_0x35e4,_0x616644={'MPVMW':'0|6|7'+'|5|4|'+'1|9|3'+_0x4ccb6b(0x57c)+'10','ORhZM':function(_0x47309a,_0x249eb1){return _0x47309a>_0x249eb1;},'rwTxw':function(_0x20b85c,_0x134467){return _0x20b85c*_0x134467;},'QLUVE':function(_0x50a7fd,_0x45c207){return _0x50a7fd/_0x45c207;},'wSUIo':function(_0x49bdc7,_0x345fad){return _0x49bdc7+_0x345fad;},'eGSIP':function(_0x159f6c,_0x4974c1){return _0x159f6c*_0x4974c1;},'lRFTs':'#4f8f'+'6a','ikAEz':function(_0x5ba149,_0x5d4230,_0x573f0d){return _0x5ba149(_0x5d4230,_0x573f0d);},'QQcJu':_0x4ccb6b(0x982),'KrwkC':function(_0x4fd736,_0x282e92){return _0x4fd736<_0x282e92;},'apDod':_0x4ccb6b(0x47f),'nuZwp':_0x4ccb6b(0x3ad),'yZhsg':function(_0x54d1f9,_0x1e74e4){return _0x54d1f9!==_0x1e74e4;},'Cwiku':function(_0x420d8f,_0x165c90){return _0x420d8f!==_0x165c90;},'JWkiy':_0x4ccb6b(0x850),'yVhqy':'FhNEK','ZZavu':'cmd','KmxUu':function(_0x36d15e,_0x354371,_0x54990c){return _0x36d15e(_0x354371,_0x54990c);},'LoSmz':function(_0x17c730,_0x19755c){return _0x17c730===_0x19755c;},'Stahs':function(_0x5622ca,_0x143734){return _0x5622ca+_0x143734;},'aZNKz':function(_0x11b824,_0x42ea52){return _0x11b824+_0x42ea52;},'lLYnq':_0x4ccb6b(0x255)+'ion:f'+_0x4ccb6b(0x237)+'left:'+'12px;'+_0x4ccb6b(0x98a)+_0x4ccb6b(0x706)+'-inde'+_0x4ccb6b(0x748)+'74829'+_0x4ccb6b(0x7f7)+_0x4ccb6b(0x7dc)+_0x4ccb6b(0x736)+'er;us'+_0x4ccb6b(0x260)+_0x4ccb6b(0xa5b)+'none;','dhCSZ':_0x4ccb6b(0x602)+'r-rad'+'ius:9'+_0x4ccb6b(0x7a9)+'paddi'+'ng:4p'+'x\x2012p'+_0x4ccb6b(0xb2c)+_0x4ccb6b(0x297)+'x/1.4'+'\x20ui-m'+_0x4ccb6b(0x40c)+'ace,C'+_0x4ccb6b(0x7b6)+_0x4ccb6b(0x5a4)+_0x4ccb6b(0xdf)+_0x4ccb6b(0x802),'yJmzR':_0x4ccb6b(0x6f7)+_0x4ccb6b(0x5fe)+'v2','pZmIM':_0x4ccb6b(0x6f7)+_0x4ccb6b(0x5fe)+'v2-cs'+'s','jxUPC':_0x4ccb6b(0x8bd),'AVFck':function(_0x472770){return _0x472770();},'vBYuo':_0x4ccb6b(0x350)+_0x4ccb6b(0x794)+'\x20pane'+_0x4ccb6b(0x1e7)+_0x4ccb6b(0x4ad),'Xcolj':'color'+':','mPFBh':function(_0x1d5f06,_0x2792bf){return _0x1d5f06===_0x2792bf;},'ojUHC':_0x4ccb6b(0xa38)+_0x4ccb6b(0x24a),'IDrXZ':_0x4ccb6b(0x837)+'\x20off','lpwEb':function(_0x37e657){return _0x37e657();},'OOQZD':_0x4ccb6b(0x22f)+'f5','lNbQz':function(_0x788496,_0x362739){return _0x788496===_0x362739;},'PRKSL':'ZRYJW','mXlyw':function(_0x4ecec2,_0x307619){return _0x4ecec2||_0x307619;},'ICfqa':_0x4ccb6b(0x23b)+'port\x20'+_0x4ccb6b(0x22a)+_0x4ccb6b(0x80b)+'—\x20fra'+_0x4ccb6b(0x715)+_0x4ccb6b(0x85d)+_0x4ccb6b(0x9e1)+'?','ZmUBe':function(_0x3cc1d6,_0x3df435){return _0x3cc1d6+_0x3df435;},'WbrGl':'The\x20g'+_0x4ccb6b(0x91e)+_0x4ccb6b(0xf5)+_0x4ccb6b(0xb08)+_0x4ccb6b(0x740)+'ed\x20a\x20'+'singl'+'e\x20rep'+'ort.\x0a'+'\x0a','ZVvyh':'so\x20th'+_0x4ccb6b(0x6d2)+'ainin'+_0x4ccb6b(0x10a)+_0x4ccb6b(0x82a)+_0x4ccb6b(0x8b5)+'\x0a\x0a','mMqjT':_0x4ccb6b(0x978)+'insta'+_0x4ccb6b(0xfa)+_0x4ccb6b(0x6f4)+_0x4ccb6b(0xb0)+_0x4ccb6b(0x15d)+'\x20UWMK'+_0x4ccb6b(0x298)+'\x20patc'+_0x4ccb6b(0x60c)+'Assem'+'bly.i'+_0x4ccb6b(0x4ef)+'tiate'+_0x4ccb6b(0x86d),'gkzQY':'Reloa'+_0x4ccb6b(0x1ef)+_0x4ccb6b(0x810)+'\x20page'+_0x4ccb6b(0x41d)+_0x4ccb6b(0x4da)+_0x4ccb6b(0x6b4)+_0x4ccb6b(0x686)+'\x20pane'+_0x4ccb6b(0x1d6)+_0x4ccb6b(0xa89),'nEsGa':_0x4ccb6b(0x5f2),'lowjH':function(_0x260ee5,_0x243b8b){return _0x260ee5+_0x243b8b;},'zkDRY':function(_0x29e0d0,_0x4cb345){return _0x29e0d0===_0x4cb345;},'LdajE':_0x4ccb6b(0x22b)+_0x4ccb6b(0x4b0)+'43,17'+'7,.35'+')','WCybQ':function(_0x2effd1,_0x2e2ebf){return _0x2effd1/_0x2e2ebf;},'sFAYC':'CfKLu','pBAUQ':'#7ee0'+'a8','VGApH':'hooks'+_0x4ccb6b(0x218)+'d\x20·\x20','XVSjP':'#ffd4'+'8a','lHHMq':function(_0x520fe2,_0x207a75){return _0x520fe2!==_0x207a75;},'ZVbnw':_0x4ccb6b(0x15f),'jGInQ':_0x4ccb6b(0x4a8)+_0x4ccb6b(0x737)+_0x4ccb6b(0x106)+'·\x20','oNblB':function(_0x39b861,_0x3197e1){return _0x39b861+_0x3197e1;},'oPuct':function(_0x5709ab,_0x2136f5){return _0x5709ab+_0x2136f5;},'NRTCC':_0x4ccb6b(0x34f)+_0x4ccb6b(0x380)+_0x4ccb6b(0xa05)+'walki'+'ng\x20/\x20'+'sprin'+'ting\x20'+'/\x20jum'+_0x4ccb6b(0x3b8)+'marks'+'\x20whic'+_0x4ccb6b(0x93d)+_0x4ccb6b(0x447)+'\x20whic'+'h.','XxZGx':_0x4ccb6b(0x3e8),'HjNNL':function(_0x28bb10,_0x4fcb1e){return _0x28bb10(_0x4fcb1e);},'zrbaD':function(_0x4c66a5,_0x2fd046){return _0x4c66a5(_0x2fd046);},'tjJEE':_0x4ccb6b(0xb22),'SyLSB':'%c[sa'+_0x4ccb6b(0x794)+_0x4ccb6b(0x2b5)+_0x4ccb6b(0x3b6)+'\x20repo'+'rt','WzyfK':function(_0x2acf9c,_0x2fae41){return _0x2acf9c+_0x2fae41;},'Qieno':function(_0x42beeb,_0xf98e1c){return _0x42beeb+_0xf98e1c;},'Jhrup':function(_0x1872f6,_0x3c4a67){return _0x1872f6+_0x3c4a67;},'pDANa':_0x4ccb6b(0x264)+_0x4ccb6b(0x42c)+'20px)','ZNuSx':_0x4ccb6b(0xa52),'JjiqO':_0x4ccb6b(0x22c)+'s\x20wer'+_0x4ccb6b(0x50b)+_0x4ccb6b(0x420)+_0x4ccb6b(0x8be)+'UWMK.'+_0x4ccb6b(0xaef)+_0x4ccb6b(0xa1f)+_0x4ccb6b(0x9a0)+'\x20','DbShN':_0x4ccb6b(0x521)+'tered'+'\x20','WXsPm':_0x4ccb6b(0x22c)+_0x4ccb6b(0x82f)+_0x4ccb6b(0x191)+_0x4ccb6b(0x7d2)+_0x4ccb6b(0xb24)+'\x20docu'+_0x4ccb6b(0x5f3)+_0x4ccb6b(0x2c8)+'.','dPgwL':_0x4ccb6b(0x6e2)+_0x4ccb6b(0x4b1)+'ved\x20','sxpTI':'\x20of\x20','rSFgO':function(_0x4df6ac,_0x3d8e98){return _0x4df6ac+_0x3d8e98;},'IcYqU':_0x4ccb6b(0x764)+_0x4ccb6b(0x82e)+'1.5\x20u'+_0x4ccb6b(0xaac)+_0x4ccb6b(0x79c)+_0x4ccb6b(0x7e3)+_0x4ccb6b(0x42d)+_0x4ccb6b(0x798)+'space'+_0x4ccb6b(0x49a)+_0x4ccb6b(0x496)+_0x4ccb6b(0x35c)+_0x4ccb6b(0xac0)+_0x4ccb6b(0x1f8)+_0x4ccb6b(0x991)+'#000;','EeszK':function(_0x26c9a0,_0x1f9c84){return _0x26c9a0+_0x1f9c84;},'YiUpr':'<span'+'\x20id=\x22'+'sw2-b'+_0x4ccb6b(0x651)+_0x4ccb6b(0xcc)+'e=\x22co'+_0x4ccb6b(0x90f)+'7a658'+'6;fon'+'t-siz'+'e:11p'+'x;pad'+'ding:'+'1px\x206'+'px;bo'+'rder:'+_0x4ccb6b(0x986)+_0x4ccb6b(0xd4)+'rgba('+_0x4ccb6b(0x4b0)+_0x4ccb6b(0x678)+_0x4ccb6b(0x48e)+_0x4ccb6b(0x1f7)+_0x4ccb6b(0x91b)+_0x4ccb6b(0x357)+_0x4ccb6b(0x4af)+_0x4ccb6b(0x735)+_0x4ccb6b(0x12a)+'an>','hIeui':_0x4ccb6b(0xf9)+_0x4ccb6b(0x570)+_0x4ccb6b(0x915)+':#2a0'+'f1b;b'+_0x4ccb6b(0x224)+'-radi'+'us:7p'+'x;pad'+'ding:'+'4px\x201'+_0x4ccb6b(0xa73)+'ont-w'+'eight'+':700;'+'curso'+_0x4ccb6b(0x4a2)+_0x4ccb6b(0xb32)+_0x4ccb6b(0x4ab)+_0x4ccb6b(0x536)+_0x4ccb6b(0xaaa)+_0x4ccb6b(0x2b7),'oulTb':'<butt'+_0x4ccb6b(0x4c4)+_0x4ccb6b(0x418)+'-togg'+'le\x22\x20s'+_0x4ccb6b(0x292)+'\x22back'+'groun'+'d:tra'+_0x4ccb6b(0x6e9)+'ent;b'+'order'+_0x4ccb6b(0x1f9)+_0x4ccb6b(0xb31)+_0x4ccb6b(0x38e)+'(255,'+_0x4ccb6b(0x910)+'77,.4'+_0x4ccb6b(0x4a3)+'or:#f'+'7eef5'+';bord'+_0x4ccb6b(0x112)+'dius:'+_0x4ccb6b(0x608)+'addin'+_0x4ccb6b(0x1fb)+'\x208px;'+_0x4ccb6b(0x7b7)+_0x4ccb6b(0x4a2)+_0x4ccb6b(0xb32)+_0x4ccb6b(0x593)+'n</bu'+_0x4ccb6b(0x2b7),'LWdXK':'<butt'+_0x4ccb6b(0x4c4)+'=\x22sw2'+_0x4ccb6b(0xb5)+'tyle='+_0x4ccb6b(0x6f6)+_0x4ccb6b(0x99b)+'d:tra'+_0x4ccb6b(0x6e9)+_0x4ccb6b(0x6ab)+_0x4ccb6b(0x224)+_0x4ccb6b(0x1f9)+_0x4ccb6b(0xb31)+'\x20rgba'+_0x4ccb6b(0x465)+'143,1'+_0x4ccb6b(0x9c9)+');col'+_0x4ccb6b(0x62b)+_0x4ccb6b(0x46d)+';bord'+_0x4ccb6b(0x112)+_0x4ccb6b(0x40e)+_0x4ccb6b(0x608)+'addin'+'g:4px'+'\x208px;'+_0x4ccb6b(0x7b7)+_0x4ccb6b(0x4a2)+_0x4ccb6b(0xb32)+'\x22>x</'+'butto'+'n>','ZJlIB':'</div'+'>','DVohw':_0x4ccb6b(0xab2)+_0x4ccb6b(0x75a)+_0x4ccb6b(0x233)+_0x4ccb6b(0x6f8)+'tyle='+_0x4ccb6b(0x6c7)+_0x4ccb6b(0x4d8)+_0x4ccb6b(0x197)+'>','bYzHb':_0x4ccb6b(0xab2)+'style'+'=\x22pad'+_0x4ccb6b(0xbf)+_0x4ccb6b(0x468)+'2px;b'+_0x4ccb6b(0x224)+'-bott'+'om:1p'+'x\x20sol'+_0x4ccb6b(0xb15)+_0x4ccb6b(0x824)+_0x4ccb6b(0x2bf)+_0x4ccb6b(0x333)+_0x4ccb6b(0xb09)+_0x4ccb6b(0x95a)+_0x4ccb6b(0x306)+_0x4ccb6b(0x28a)+'p:8px'+';alig'+_0x4ccb6b(0x7ee)+'ms:ce'+_0x4ccb6b(0xb32)+'flex:'+'0\x200\x20a'+'uto;f'+_0x4ccb6b(0x1e5)+'rap:w'+_0x4ccb6b(0x508)+'>','ltVhF':_0x4ccb6b(0x6b9)+'t\x20id='+_0x4ccb6b(0xa9)+'facto'+_0x4ccb6b(0x7fe)+'pe=\x22r'+'ange\x22'+'\x20min='+_0x4ccb6b(0xe0)+_0x4ccb6b(0x210)+_0x4ccb6b(0x6cc)+'p=\x220.'+_0x4ccb6b(0x788)+'lue=\x22'+_0x4ccb6b(0x4a4)+'yle=\x22'+_0x4ccb6b(0x398)+':120p'+_0x4ccb6b(0x906)+'ent-c'+_0x4ccb6b(0x57e),'awSUZ':_0x4ccb6b(0xa4a)+'on\x20id'+_0x4ccb6b(0x418)+'-snap'+_0x4ccb6b(0x672)+'le=\x22b'+_0x4ccb6b(0x165)+_0x4ccb6b(0xa81)+_0x4ccb6b(0x36c)+_0x4ccb6b(0x4d4)+_0x4ccb6b(0x510)+_0x4ccb6b(0xa04)+_0x4ccb6b(0x97e)+_0x4ccb6b(0xaa2)+_0x4ccb6b(0xe9)+_0x4ccb6b(0x5db)+_0x4ccb6b(0x87f)+',.4);'+'color'+':#f7e'+_0x4ccb6b(0x780)+_0x4ccb6b(0x224)+_0x4ccb6b(0x36a)+'us:7p'+_0x4ccb6b(0x70c)+'ding:'+'4px\x209'+'px;cu'+_0x4ccb6b(0x7dc)+_0x4ccb6b(0x736)+'er;\x22>'+_0x4ccb6b(0x816)+_0x4ccb6b(0x7c7)+_0x4ccb6b(0x5a3)+_0x4ccb6b(0x42e)+'n>','OxofC':_0x4ccb6b(0x8db)+_0x4ccb6b(0x481)+'sw2-h'+_0x4ccb6b(0x949)+'style'+_0x4ccb6b(0x1f3)+_0x4ccb6b(0xa58)+_0x4ccb6b(0x688)+_0x4ccb6b(0xa91)+'twice'+_0x4ccb6b(0x159)+_0x4ccb6b(0x1c9)+_0x4ccb6b(0xaa6)+'/\x20spr'+_0x4ccb6b(0x727)+_0x4ccb6b(0x5d3)+'umpin'+_0x4ccb6b(0x7f8)+_0x4ccb6b(0x383)+'ich\x20f'+_0x4ccb6b(0x3e6)+'is\x20wh'+_0x4ccb6b(0x4ac)+_0x4ccb6b(0x49d)+'>','SvBBx':_0x4ccb6b(0x1c1)+_0x4ccb6b(0x75a)+_0x4ccb6b(0x374)+'t\x22\x20st'+'yle=\x22'+_0x4ccb6b(0x254)+'n:0;p'+_0x4ccb6b(0x3c5)+'g:10p'+_0x4ccb6b(0x5e9)+_0x4ccb6b(0x7d7)+_0x4ccb6b(0x8c9)+':auto'+_0x4ccb6b(0x998)+_0x4ccb6b(0x926)+_0x4ccb6b(0x8d6)+_0x4ccb6b(0x42b)+_0x4ccb6b(0x9f6)+'e:pre'+_0x4ccb6b(0x60f)+_0x4ccb6b(0x803)+'-brea'+_0x4ccb6b(0x69b)+_0x4ccb6b(0x805)+'rd;fo'+'nt:in'+'herit'+';','jVhoV':'max-h'+_0x4ccb6b(0x59d)+':62vh'+_0x4ccb6b(0x150)+_0x4ccb6b(0x903)+_0x4ccb6b(0x505)+_0x4ccb6b(0x691)+'his\x20p'+_0x4ccb6b(0x97b)+_0x4ccb6b(0xa0f)+'es\x20it'+_0x4ccb6b(0xa5c)+_0x4ccb6b(0x1fa)+'the\x20g'+_0x4ccb6b(0x91e)+_0x4ccb6b(0xf5)+_0x4ccb6b(0x2e4)+_0x4ccb6b(0x591)+'\x20cons'+_0x4ccb6b(0x4f6)+_0x4ccb6b(0x920)+'.\x0a\x0aIf'+_0x4ccb6b(0x85b)+_0x4ccb6b(0x67d)+_0x4ccb6b(0x2ce)+_0x4ccb6b(0x428)+'permo'+'nkey\x20'+_0x4ccb6b(0xafa)+'t\x20inj'+_0x4ccb6b(0xae1)+_0x4ccb6b(0x18f)+_0x4ccb6b(0xb33)+_0x4ccb6b(0x3b9)+_0x4ccb6b(0x9d4)+_0x4ccb6b(0x362)+'ame\x20f'+_0x4ccb6b(0x42f)+_0x4ccb6b(0xa2f)+'>','zXhau':_0x4ccb6b(0x8d8)+'toggl'+'e','kPCpG':_0x4ccb6b(0x8d8)+'body','iIICO':'#sw2-'+'snap','dTics':_0x4ccb6b(0x8d8)+_0x4ccb6b(0x1d8)+'r','KyoNg':'#sw2-'+'facto'+_0x4ccb6b(0xa67)+'l','xHngQ':_0x4ccb6b(0x8d8)+_0x4ccb6b(0x4ae),'HjIpv':function(_0x45b0a5){return _0x45b0a5();},'XAmWX':function(_0x22c8ec,_0x3cbb6a){return _0x22c8ec+_0x3cbb6a;},'CtBix':function(_0x17a9bf,_0x5747d9){return _0x17a9bf+_0x5747d9;},'DGBZN':_0x4ccb6b(0x92f)+'\x20\x20\x20\x20','rHBdS':_0x4ccb6b(0x6bc),'nUTiN':'\x20\x20\x20ty'+'pes\x20','JxCFy':function(_0x2d5cc9,_0x2527b1){return _0x2d5cc9!=_0x2527b1;},'eleGg':function(_0x5acb78,_0xc2fc63){return _0x5acb78!==_0xc2fc63;},'UqLwY':'bnihE','QWSRV':_0x4ccb6b(0x24f),'zKtxq':_0x4ccb6b(0xa97)+'r','IorbO':function(_0x325b8c,_0x14ce63){return _0x325b8c+_0x14ce63;},'wiEvK':function(_0x3fe556,_0x3d7fb7){return _0x3fe556+_0x3d7fb7;},'pVttl':function(_0x1608a4,_0x2c2990){return _0x1608a4+_0x2c2990;},'CPYcw':function(_0x473514,_0x5e72f3){return _0x473514+_0x5e72f3;},'VVOEf':function(_0x30e375,_0x3488d5){return _0x30e375+_0x3488d5;},'PzXwQ':'warni'+_0x4ccb6b(0x92e),'Gwrug':function(_0x4a6750,_0x35b8b9){return _0x4a6750!==_0x35b8b9;},'lSPxH':function(_0x156ce5,_0x566087){return _0x156ce5===_0x566087;},'YMPnT':'RQukR','Qygbz':function(_0x2469a4,_0x19226f){return _0x2469a4===_0x19226f;},'eHfSW':'hello','IMkMd':_0x4ccb6b(0xa0)+'t','LspBQ':function(_0x4ce437,_0x1e6b48){return _0x4ce437!==_0x1e6b48;},'vgaSk':_0x4ccb6b(0xb1b),'KiDJn':function(_0x5bdfc8,_0x49bbe2){return _0x5bdfc8!==_0x49bbe2;},'jUtsx':function(_0x1be8b7,_0x2c33f8,_0x3146ac){return _0x1be8b7(_0x2c33f8,_0x3146ac);},'LVVZi':_0x4ccb6b(0x2a2),'sNQnL':_0x4ccb6b(0x546),'KhwvI':'info','inIkv':_0x4ccb6b(0x837)+_0x4ccb6b(0x497),'ODhXW':'SfVwi','fqsWA':function(_0x12043c,_0x5c4886){return _0x12043c===_0x5c4886;},'ofSox':function(_0x12721e,_0x9ecc97){return _0x12721e-_0x9ecc97;},'LGgYX':function(_0x3ca5dc,_0x18c928){return _0x3ca5dc(_0x18c928);},'HkUoK':_0x4ccb6b(0x113),'TeoJy':'QGzmG','ruyYv':'EeyCA','stUgK':_0x4ccb6b(0x50c)+'l>','NJpyu':function(_0x411a37,_0x4d409a){return _0x411a37<_0x4d409a;},'IQJlN':function(_0x508300,_0x594758){return _0x508300>>>_0x594758;},'ffpzK':function(_0x575167){return _0x575167();},'TpDfP':'qkymX','SBUlD':_0x4ccb6b(0xa55),'qQhDr':'bFloP','InXIM':function(_0x44d380,_0x326650){return _0x44d380(_0x326650);},'mfBOZ':function(_0x433c29,_0x56b5ac){return _0x433c29+_0x56b5ac;},'tFbvV':function(_0x46ea4d,_0x1fec27){return _0x46ea4d*_0x1fec27;},'FuopW':_0x4ccb6b(0x912),'jmnzJ':function(_0x14498f,_0x337f49){return _0x14498f|_0x337f49;},'gqJMx':function(_0x513ace,_0x2c64f2){return _0x513ace!==_0x2c64f2;},'BwPOw':function(_0x49ae05,_0x5030de){return _0x49ae05+_0x5030de;},'zdvTW':function(_0x116402,_0x246cb3){return _0x116402!==_0x246cb3;},'uMVMg':_0x4ccb6b(0x450),'VdVZn':_0x4ccb6b(0x76c),'bieOB':_0x4ccb6b(0xa86)+_0x4ccb6b(0x50f)+_0x4ccb6b(0xa18)+'._gam'+'e','KcOYs':'OVTbu','CddJq':_0x4ccb6b(0xa29),'bKhNz':_0x4ccb6b(0x4f9),'QiSRx':'undef'+_0x4ccb6b(0x2de),'TrqFo':function(_0x4a934d,_0x20cc87){return _0x4a934d<_0x20cc87;},'jjjVk':_0x4ccb6b(0x39b)+'le','wdIWa':_0x4ccb6b(0x198)+_0x4ccb6b(0x56d)+_0x4ccb6b(0x54d)+_0x4ccb6b(0x8e9)+_0x4ccb6b(0x29c)+_0x4ccb6b(0x801),'Lhiyy':function(_0x2f9266){return _0x2f9266();},'ztwvi':function(_0xec07b,_0x5558d1){return _0xec07b+_0x5558d1;},'BxGEN':'addre'+'ss\x200x','yimiZ':'gfljW','OyICw':_0x4ccb6b(0x1c3),'PQHmr':'f32','HHtep':'BHVgM','nQNnb':function(_0x1af9c8,_0x172e77){return _0x1af9c8+_0x172e77;},'JFKCG':function(_0x2ad298,_0x5208b2){return _0x2ad298<_0x5208b2;},'FdTNy':function(_0x2fe785,_0x26ce01){return _0x2fe785+_0x26ce01;},'GFpHe':function(_0x337d9a){return _0x337d9a();},'Owhyl':function(_0x598a6e,_0x4c1f05){return _0x598a6e+_0x4c1f05;},'fknmP':function(_0x37a26e,_0x3b3bce){return _0x37a26e+_0x3b3bce;},'UBlkV':function(_0x470f46,_0x27b684){return _0x470f46===_0x27b684;},'lQtTV':_0x4ccb6b(0x96a),'XbNtC':function(_0x284eef,_0x21cf76){return _0x284eef(_0x21cf76);},'rAysd':_0x4ccb6b(0x4e5)+'|0|5|'+'3|4|6'+_0x4ccb6b(0x5c0),'MJVWt':function(_0x2ef588,_0x30ae54,_0x3b70ae,_0x32a69c){return _0x2ef588(_0x30ae54,_0x3b70ae,_0x32a69c);},'ADivy':function(_0xd8ba3f,_0x231056){return _0xd8ba3f===_0x231056;},'zyIhc':_0x4ccb6b(0x836),'OsXiu':_0x4ccb6b(0x8e6),'nHewo':_0x4ccb6b(0x9ac),'MWoAQ':function(_0x35a45a,_0x2e3e8d){return _0x35a45a^_0x2e3e8d;},'rCUqI':function(_0x42fdac,_0x33a269){return _0x42fdac&_0x33a269;},'JdBEp':function(_0x36de7d,_0x128a50){return _0x36de7d^_0x128a50;},'gBCXW':function(_0x22ea8c,_0x20253f,_0x45a712){return _0x22ea8c(_0x20253f,_0x45a712);},'KjwZA':function(_0x55bb86,_0x2db948){return _0x55bb86===_0x2db948;},'NkGbt':function(_0x4c8848,_0x527e66){return _0x4c8848===_0x527e66;},'hdXnM':function(_0x1e583f,_0x2098d6){return _0x1e583f&_0x2098d6;},'OHCHJ':function(_0x41902c,_0x389ec7){return _0x41902c(_0x389ec7);},'UadOW':function(_0x2a2222,_0x18f8a7){return _0x2a2222^_0x18f8a7;},'KkWJE':function(_0x2bece7,_0x237aec){return _0x2bece7===_0x237aec;},'AjORQ':function(_0x4fac50,_0x4aba23){return _0x4fac50===_0x4aba23;},'CIuTO':function(_0x154280,_0x3e3010){return _0x154280/_0x3e3010;},'jKoKa':function(_0x4d9be4,_0x125673){return _0x4d9be4<=_0x125673;},'MWXgW':_0x4ccb6b(0x1d5),'BckIR':'Sakur'+_0x4ccb6b(0x75c)+_0x4ccb6b(0x182)+'z\x20-\x20w'+'aitin'+_0x4ccb6b(0xa64)+_0x4ccb6b(0xaa8)+_0x4ccb6b(0x5c3)+_0x4ccb6b(0x474)+'rt)','pvwAj':_0x4ccb6b(0x8b7),'OnEsp':_0x4ccb6b(0x795),'HCDLv':function(_0x4f63cc,_0x4e0448){return _0x4f63cc!==_0x4e0448;},'KbKQT':function(_0x18c86c,_0x54d989){return _0x18c86c+_0x54d989;},'IwdDK':_0x4ccb6b(0x41a),'aznOz':function(_0x7f8eda,_0x18d4ed){return _0x7f8eda>_0x18d4ed;},'APOZK':function(_0x2c0a0f,_0x453ae1){return _0x2c0a0f-_0x453ae1;},'QmPsH':_0x4ccb6b(0x9a7),'iTzES':'NCUdC','ihBwL':function(_0xf78572,_0xfa5036){return _0xf78572>=_0xfa5036;},'avLXi':_0x4ccb6b(0x8eb)+_0x4ccb6b(0x3c1)+_0x4ccb6b(0xbc)+'\x20agre'+'ed','AdPdt':function(_0x2592a6,_0x2cb4f1){return _0x2592a6!==_0x2cb4f1;},'yuDRS':_0x4ccb6b(0x93b),'ZjAza':_0x4ccb6b(0x287)+_0x4ccb6b(0x68e),'GujGo':function(_0x418ce1,_0x162ab3){return _0x418ce1<_0x162ab3;},'oMJVy':_0x4ccb6b(0xa41),'TDkaC':function(_0x4093dc,_0x20642d){return _0x4093dc<_0x20642d;},'Fskvh':'IPKkN','DQclX':function(_0x2bafcb,_0xfb74a,_0x26b4ea,_0x3566ec,_0x117065){return _0x2bafcb(_0xfb74a,_0x26b4ea,_0x3566ec,_0x117065);},'MSVMs':_0x4ccb6b(0x417),'UnVJp':_0x4ccb6b(0xab1),'DVXIl':function(_0x13fdee,_0x5ea3a4){return _0x13fdee(_0x5ea3a4);},'RLDBk':'BpwJR','lNPiE':function(_0x433501,_0x394a7b){return _0x433501+_0x394a7b;},'asQZD':_0x4ccb6b(0x807)+_0x4ccb6b(0xa42),'cliTP':function(_0x3488ba,_0x1b4db4){return _0x3488ba===_0x1b4db4;},'cAsVm':_0x4ccb6b(0x761)+'|3|2|'+'0|6','lWEXF':function(_0xf4e14e,_0xec3b66){return _0xf4e14e<_0xec3b66;},'WtvJB':function(_0x29970a,_0x291a99){return _0x29970a+_0x291a99;},'kkXoQ':function(_0x41691c,_0x21ab75){return _0x41691c+_0x21ab75;},'KaKUp':function(_0x2c0c6c,_0x2f4312){return _0x2c0c6c===_0x2f4312;},'uyKdJ':'GntAb','NKoGv':function(_0x588467,_0x591822){return _0x588467+_0x591822;},'EvFSw':function(_0x12bdbf,_0x28a52a,_0x19b779){return _0x12bdbf(_0x28a52a,_0x19b779);},'biFcq':function(_0x21bddd,_0x142a86){return _0x21bddd<_0x142a86;},'nVKRV':function(_0xa6daf4,_0x2ee3c8){return _0xa6daf4+_0x2ee3c8;},'cXalf':_0x4ccb6b(0x966),'WFkGj':function(_0x51928d,_0x5db547){return _0x51928d!==_0x5db547;},'LLbTW':_0x4ccb6b(0x36f),'cXfBs':_0x4ccb6b(0x905)+'|6|5|'+_0x4ccb6b(0xa4e),'GqhLD':function(_0x2414d9,_0x86b773,_0x1c4f11){return _0x2414d9(_0x86b773,_0x1c4f11);},'hWeKi':_0x4ccb6b(0x3e9)+'nNetw'+_0x4ccb6b(0x9c0)+'nc','zrMcW':function(_0xab6193,_0x231d90,_0x259916,_0x496e30){return _0xab6193(_0x231d90,_0x259916,_0x496e30);},'nMmRW':function(_0x5691ff,_0xc1d84a,_0x3cc95e){return _0x5691ff(_0xc1d84a,_0x3cc95e);},'IWJUE':_0x4ccb6b(0x7da)+_0x4ccb6b(0xa02)+'pt','vwpCR':_0x4ccb6b(0x1e2)+_0x4ccb6b(0x259)+_0x4ccb6b(0x64f),'zqwXl':function(_0x307abe,_0x2a9d7e){return _0x307abe===_0x2a9d7e;},'OnpTT':_0x4ccb6b(0x72e),'TpCDP':_0x4ccb6b(0x790),'WNPiw':function(_0x14d43b,_0x267603){return _0x14d43b+_0x267603;},'sxHPa':function(_0x35e7ec,_0x35e18d){return _0x35e7ec>>>_0x35e18d;},'jlExi':'No\x20Ph'+_0x4ccb6b(0x732)+'etwor'+'kSync'+_0x4ccb6b(0x1ba)+_0x4ccb6b(0x63d)+_0x4ccb6b(0x652)+_0x4ccb6b(0x948)+'nd\x20no'+_0x4ccb6b(0x810)+'\x20mana'+_0x4ccb6b(0x325)+_0x4ccb6b(0x2ec)+'is\x20wh'+'at\x20','ivMaY':_0x4ccb6b(0x783)+'rs\x20ar'+_0x4ccb6b(0x9ef)+'sent\x20'+_0x4ccb6b(0x7b9)+_0x4ccb6b(0x6dc)+_0x4ccb6b(0x89e)+_0x4ccb6b(0x4dd)+_0x4ccb6b(0x1a3)+_0x4ccb6b(0x85e)+'mies\x20'+_0x4ccb6b(0x1a8)+'\x20chec'+'k\x20','KFQMe':_0x4ccb6b(0x718)+_0x4ccb6b(0x1a1),'OutZU':function(_0x56a517,_0x4a6371){return _0x56a517<_0x4a6371;},'AnFys':function(_0x51664f,_0x315225){return _0x51664f+_0x315225;},'nbdEB':_0x4ccb6b(0x97f),'ICePE':_0x4ccb6b(0x6eb),'kFOGd':function(_0x3de491,_0x481031){return _0x3de491!==_0x481031;},'JkMjg':'obf','DnYLp':function(_0x53b64e,_0x3d228c,_0x1cd791,_0x306d29){return _0x53b64e(_0x3d228c,_0x1cd791,_0x306d29);},'Gummu':function(_0x5040a2,_0x170129){return _0x5040a2(_0x170129);},'EcvBk':function(_0x304cb6,_0x491da3,_0x39becd){return _0x304cb6(_0x491da3,_0x39becd);},'NZGfZ':function(_0x215905,_0x1b4625){return _0x215905===_0x1b4625;},'eCqXh':function(_0x597d04,_0x157298){return _0x597d04!==_0x157298;},'nxbJM':function(_0x25a3c9,_0x42e285){return _0x25a3c9+_0x42e285;},'NWysZ':_0x4ccb6b(0x4c6)+'=','rzhYT':_0x4ccb6b(0x749),'yJrKp':function(_0x193a5f){return _0x193a5f();},'AwQjY':function(_0x16d7e4,_0x39d4fb){return _0x16d7e4!==_0x39d4fb;},'xLtGO':'Dwjyh','ziRhi':_0x4ccb6b(0x375)+'|2|4|'+_0x4ccb6b(0x6dd),'OdSNF':function(_0x2adcbd,_0x389d16){return _0x2adcbd===_0x389d16;},'ivoJv':'\x20/\x20','pTdvL':function(_0x343746,_0x3a208f){return _0x343746===_0x3a208f;},'QWcZn':'from\x20'+'insta'+'ntiat'+_0x4ccb6b(0xad9),'mKLWN':function(_0x1f292e,_0x167997){return _0x1f292e+_0x167997;},'uFCLO':function(_0x4c0cf5,_0x1c355f){return _0x4c0cf5(_0x1c355f);},'TetaY':function(_0x37893a,_0x5e0dfe){return _0x37893a===_0x5e0dfe;},'PqSIx':_0x4ccb6b(0x2a1)+_0x4ccb6b(0x6c3)+_0x4ccb6b(0x9f9)+'u','yWkQz':function(_0x465541,_0x24567f){return _0x465541===_0x24567f;},'OiakF':function(_0x118de6,_0x3e6471){return _0x118de6+_0x3e6471;},'AaAEO':_0x4ccb6b(0x1e2)+_0x4ccb6b(0x259)+_0x4ccb6b(0x78d)+_0x4ccb6b(0xa2),'OJaER':'+0x29'+'8','rwiuI':'Healt'+'h','plJUK':function(_0x23379d,_0x42d903){return _0x23379d*_0x42d903;},'ruoYO':function(_0x3824ab,_0x33b89f){return _0x3824ab/_0x33b89f;},'QNSkZ':function(_0x580ffc,_0xa1f866){return _0x580ffc&&_0xa1f866;},'uqiLR':'none','OWZpP':_0x4ccb6b(0x309),'lcIjY':_0x4ccb6b(0x46a)+'ve\x20ob'+'jects'+_0x4ccb6b(0xab5)+_0x4ccb6b(0x7ae)+'yet.','DuLyu':_0x4ccb6b(0x257)+_0x4ccb6b(0x118)+_0x4ccb6b(0x51d)+'on\x20th'+'e\x20gam'+'e\x27s\x20o'+_0x4ccb6b(0x4dc)+_0x4ccb6b(0x87c)+_0x4ccb6b(0x671)+_0x4ccb6b(0x72a)+'\x20capt'+_0x4ccb6b(0x7ae)+'means','CjBti':_0x4ccb6b(0x7a7)+_0x4ccb6b(0x8f1)+'ptr','SgESE':_0x4ccb6b(0x7a7)+_0x4ccb6b(0x586)+'camer'+'a','SNbzI':function(_0x5ce2e5,_0x484542){return _0x5ce2e5+_0x484542;},'oidcg':_0x4ccb6b(0x284),'xpUER':_0x4ccb6b(0x313)+'an','gMrmJ':function(_0x2e2c25,_0x2ff9ef){return _0x2e2c25+_0x2ff9ef;},'IMrOW':function(_0x550dcf,_0x2e23f5){return _0x550dcf+_0x2e23f5;},'SdqkJ':'\x20->\x20','oXSjA':function(_0x1255ca,_0x250ccd,_0x25ab0d){return _0x1255ca(_0x250ccd,_0x25ab0d);},'McbUl':function(_0x15de3a){return _0x15de3a();},'zQLWk':function(_0xc6fa0d,_0x2528d9){return _0xc6fa0d===_0x2528d9;},'XUAyx':function(_0x1ce6d1,_0x225550){return _0x1ce6d1(_0x225550);},'phXzQ':'SERWn','MDDDa':'[data'+_0x4ccb6b(0x351),'CGkPM':_0x4ccb6b(0x231)+'1b','aJeXv':'bcbTl','VNLsG':_0x4ccb6b(0x2e5),'bTsKw':function(_0x4bf1e3,_0x93b531){return _0x4bf1e3(_0x93b531);},'tWeGw':function(_0x5cd2d0,_0x13b72e,_0x1058bd){return _0x5cd2d0(_0x13b72e,_0x1058bd);},'EJjbG':function(_0x229006,_0x982a05){return _0x229006+_0x982a05;},'OxfgG':function(_0x5f3f58,_0x68afc8){return _0x5f3f58*_0x68afc8;},'oZHxI':_0x4ccb6b(0x68a),'BzVTl':'#saku'+_0x4ccb6b(0x92c)+'-hud{'+'all:i'+_0x4ccb6b(0xb16)+'l}','FHPtL':function(_0x44b76c,_0x3787bb){return _0x44b76c+_0x3787bb;},'qEQzm':function(_0x5aaa24,_0x5827c9){return _0x5aaa24+_0x5827c9;},'FiBZB':function(_0x395bb0,_0x5db64d){return _0x395bb0+_0x5db64d;},'whnpH':function(_0x3277e5,_0x201b5d){return _0x3277e5+_0x201b5d;},'qyEKx':function(_0x57aca9,_0x548b1f){return _0x57aca9+_0x548b1f;},'NQOsP':function(_0x3eb915,_0x409e8f){return _0x3eb915+_0x409e8f;},'wmwAN':function(_0x1e2a4d,_0x20fae7){return _0x1e2a4d+_0x20fae7;},'xXWQF':function(_0x40e196,_0x59b014){return _0x40e196+_0x59b014;},'tRchF':_0x4ccb6b(0xab2)+_0x4ccb6b(0x4e8)+_0x4ccb6b(0x955)+'r\x22\x20st'+_0x4ccb6b(0x7ef)+'displ'+_0x4ccb6b(0x306)+_0x4ccb6b(0x28a)+_0x4ccb6b(0x925)+';alig'+_0x4ccb6b(0x7ee)+_0x4ccb6b(0x238)+_0x4ccb6b(0xb32)+_0x4ccb6b(0x5cf)+'wrap:'+_0x4ccb6b(0x1fe)+_0x4ccb6b(0x93e)+'idth:'+'290px'+';\x22>','TJMFA':_0x4ccb6b(0xa4a)+_0x4ccb6b(0x3d3)+_0x4ccb6b(0x9b3)+_0x4ccb6b(0x86c)+'style'+'=\x22bac'+_0x4ccb6b(0x163)+'nd:tr'+_0x4ccb6b(0x15c)+'rent;'+'borde'+_0x4ccb6b(0x6de)+_0x4ccb6b(0x757)+_0x4ccb6b(0x585)+_0x4ccb6b(0x174)+',143,'+_0x4ccb6b(0x9c1)+_0x4ccb6b(0x1a6),'Nkymj':'color'+':#f7e'+_0x4ccb6b(0x780)+'order'+_0x4ccb6b(0x36a)+_0x4ccb6b(0x507)+'x;pad'+'ding:'+_0x4ccb6b(0x133)+_0x4ccb6b(0xb01)+'rsor:'+_0x4ccb6b(0x736)+'er;fo'+_0x4ccb6b(0x21e)+_0x4ccb6b(0xa92)+_0x4ccb6b(0x85f)+_0x4ccb6b(0xa00)+'ff</b'+_0x4ccb6b(0x2da)+'>','sGYWy':_0x4ccb6b(0xa4a)+_0x4ccb6b(0x3d3)+'ta-a='+_0x4ccb6b(0x7d3)+_0x4ccb6b(0xcc)+_0x4ccb6b(0x2d5)+'ckgro'+_0x4ccb6b(0x631)+_0x4ccb6b(0x1aa)+_0x4ccb6b(0x3fb)+_0x4ccb6b(0xf9)+'er:1p'+_0x4ccb6b(0x2fa)+'id\x20rg'+_0x4ccb6b(0x824)+_0x4ccb6b(0x2bf)+',177,'+_0x4ccb6b(0x482),'QQBoO':'<butt'+_0x4ccb6b(0x3d3)+'ta-a='+'\x22snap'+_0x4ccb6b(0x672)+_0x4ccb6b(0x76a)+_0x4ccb6b(0x165)+'ound:'+_0x4ccb6b(0x36c)+_0x4ccb6b(0x4d4)+_0x4ccb6b(0x510)+'der:1'+'px\x20so'+_0x4ccb6b(0xaa2)+_0x4ccb6b(0xe9)+_0x4ccb6b(0x5db)+_0x4ccb6b(0x87f)+',.45)'+';','YtZbT':'color'+_0x4ccb6b(0x91a)+_0x4ccb6b(0x780)+_0x4ccb6b(0x224)+'-radi'+_0x4ccb6b(0x507)+_0x4ccb6b(0x70c)+'ding:'+_0x4ccb6b(0x511)+'px;cu'+_0x4ccb6b(0x7dc)+'point'+_0x4ccb6b(0x371)+_0x4ccb6b(0x21e)+_0x4ccb6b(0xa92)+_0x4ccb6b(0x242)+_0x4ccb6b(0x5ac)+'on>','KWLKn':_0x4ccb6b(0xab2)+_0x4ccb6b(0x4e8)+_0x4ccb6b(0x6aa)+'\x22\x20sty'+_0x4ccb6b(0x5f7)+_0x4ccb6b(0x57e)+_0x4ccb6b(0x3ea)+_0x4ccb6b(0x16c)+'x-wid'+_0x4ccb6b(0x8a3)+_0x4ccb6b(0x327)+_0x4ccb6b(0x96d)+'v>','GafWX':_0x4ccb6b(0xab2)+'data-'+_0x4ccb6b(0x6aa)+_0x4ccb6b(0xa08)+_0x4ccb6b(0x7ef)+_0x4ccb6b(0x915)+':#8d7'+'a99;m'+_0x4ccb6b(0x416)+_0x4ccb6b(0xab8)+_0x4ccb6b(0x6c6)+'\x22></d'+'iv>','YUhep':function(_0x1edb9d,_0xd28546){return _0x1edb9d(_0xd28546);},'rjrBL':function(_0x44991f,_0x5561a1){return _0x44991f(_0x5561a1);},'uYfqe':_0x4ccb6b(0xa2c),'qKVWi':function(_0x3309f0,_0x128914){return _0x3309f0(_0x128914);},'ZUbst':'fold','nQSJA':'%c[sa'+_0x4ccb6b(0x794)+_0x4ccb6b(0xfc)+_0x4ccb6b(0xf5)+'HUD\x20d'+_0x4ccb6b(0x9e3)+'ed','TSIDQ':_0x4ccb6b(0x316)+_0x4ccb6b(0x68f)+_0x4ccb6b(0x6bb)+'\x20entr'+'y\x20in\x20'+_0x4ccb6b(0xa70)+'ers`.','RXBal':function(_0x5831d6,_0x222f0a){return _0x5831d6===_0x222f0a;},'Klfvn':function(_0x635a01,_0x24fd4c){return _0x635a01===_0x24fd4c;},'anmwd':function(_0x5294c4,_0x155ad9){return _0x5294c4!==_0x155ad9;},'PzPTC':_0x4ccb6b(0x71a),'qHMGx':_0x4ccb6b(0x8fc),'wNJpz':_0x4ccb6b(0x84e)+_0x4ccb6b(0x714)+_0x4ccb6b(0x314)+_0x4ccb6b(0x93c)+'|7','NNgcf':function(_0x3bafd7,_0x3eb697){return _0x3bafd7+_0x3eb697;},'htVsu':function(_0x36eec4,_0x4c3d9b){return _0x36eec4+_0x4c3d9b;},'SVhvP':_0x4ccb6b(0xb00)+'ks\x20','Geeat':'\x20\x20obj'+'s\x20','MYEMS':_0x4ccb6b(0x603)+_0x4ccb6b(0x2c5),'GHlUb':_0x4ccb6b(0x782)+_0x4ccb6b(0x55f),'nTmem':function(_0x57fe68,_0x120906){return _0x57fe68+_0x120906;},'pYvcM':'no\x20en'+'emies'+_0x4ccb6b(0x599)+_0x4ccb6b(0x1ac)+_0x4ccb6b(0x50d)+_0x4ccb6b(0xa93),'ALYXo':function(_0x5043d3,_0x4065a7){return _0x5043d3>_0x4065a7;},'zHLZP':function(_0x5b6a8e,_0x42af4e){return _0x5b6a8e/_0x42af4e;},'HAVMv':function(_0x19382b,_0x159719){return _0x19382b===_0x159719;},'DbguJ':'Inser'+'t','VTqQz':function(_0xe6df18,_0x3a9460){return _0xe6df18(_0x3a9460);},'oYfHP':function(_0x42aeca,_0x3d9096){return _0x42aeca===_0x3d9096;},'YfgZt':function(_0x3d2a67,_0x596384){return _0x3d2a67===_0x596384;},'OkXea':_0x4ccb6b(0x282),'RiMeZ':function(_0x1ebd4d,_0x16d79f){return _0x1ebd4d<_0x16d79f;},'sOqWR':function(_0x2fcb3e,_0x53b105){return _0x2fcb3e+_0x53b105;},'kNirT':function(_0x5b9c44,_0x4a95eb){return _0x5b9c44+_0x4a95eb;},'IRebo':function(_0xbaea57,_0x5f518f){return _0xbaea57>>>_0x5f518f;},'OOFCI':function(_0x29818f,_0x1f15ab){return _0x29818f+_0x1f15ab;},'BnKMD':'no\x20Mo'+'useLo'+_0x4ccb6b(0x4d9)+'t','sMoBB':function(_0x408b88,_0x3f11cb){return _0x408b88!==_0x3f11cb;},'elzNX':_0x4ccb6b(0x7a7)+_0x4ccb6b(0x759)+'float'+'s\x20unr'+_0x4ccb6b(0x2ba)+'le','tduLk':function(_0x454724){return _0x454724();},'CxAKc':function(_0x35166d,_0x37a855){return _0x35166d<_0x37a855;},'qvEQV':function(_0x1731e8,_0x16944c){return _0x1731e8>_0x16944c;},'OcpOz':function(_0x22972f,_0x589afe){return _0x22972f+_0x589afe;},'IjXsJ':function(_0xfda649,_0xcb3337){return _0xfda649+_0xcb3337;},'VpsHE':_0x4ccb6b(0x472),'OWgte':function(_0x1fa492,_0x3a9a06){return _0x1fa492*_0x3a9a06;},'GlYvb':function(_0x30981a,_0x1f8323){return _0x30981a*_0x1f8323;},'SapDS':function(_0x428287,_0x36ca79){return _0x428287*_0x36ca79;},'tKazj':function(_0x422b54){return _0x422b54();},'MfxNW':function(_0x4c0381,_0x479fdd){return _0x4c0381*_0x479fdd;},'tEmXZ':function(_0x342610,_0x10704a){return _0x342610/_0x10704a;},'ZKaUA':function(_0x5356f5,_0x577bac){return _0x5356f5/_0x577bac;},'lMzJS':function(_0xb6c1d,_0x562cea){return _0xb6c1d/_0x562cea;},'bmOiy':function(_0x34c23d,_0x594922){return _0x34c23d>_0x594922;},'Wzmeh':function(_0x3fedfa,_0x19ce10){return _0x3fedfa>_0x19ce10;},'gFPNl':function(_0x5ac2e5,_0x4cd14f){return _0x5ac2e5/_0x4cd14f;},'UbkyQ':_0x4ccb6b(0x868)+'rd','fNnVR':'\x20on','sBZsR':function(_0x2c2fc3,_0x1813ea){return _0x2c2fc3+_0x1813ea;},'rabYn':'sk-mb'+_0x4ccb6b(0x9e5),'tINtE':_0x4ccb6b(0x6f7)+_0x4ccb6b(0x347)+'es','pOuVt':function(_0x2f93e1,_0x3f2e56){return _0x2f93e1(_0x3f2e56);},'oHdpi':_0x4ccb6b(0xb0e),'tkryq':_0x4ccb6b(0x2f4)+'itch','bCtMf':_0x4ccb6b(0x885),'HADwf':function(_0x260994,_0x34538c){return _0x260994+_0x34538c;},'gLgNg':function(_0x79b88f,_0x280ba2){return _0x79b88f/_0x280ba2;},'QeDby':function(_0x4336e5,_0x1b724a){return _0x4336e5(_0x1b724a);},'fSDYR':function(_0x48a0ff,_0x4d4ec3){return _0x48a0ff(_0x4d4ec3);},'udUFO':'sk-ra'+_0x4ccb6b(0x8f5),'zsoEj':'sk-sl'+_0x4ccb6b(0x1dc),'SAmCo':function(_0x2a6421,_0x344e05){return _0x2a6421(_0x344e05);},'YyNMZ':function(_0x3238e6,_0x29086c){return _0x3238e6(_0x29086c);},'InMVd':_0x4ccb6b(0x3fe),'WRBHb':function(_0x54d68c,_0x1e9c10){return _0x54d68c+_0x1e9c10;},'KsVHI':function(_0x2145c4,_0x55a0ab){return _0x2145c4+_0x55a0ab;},'IZMDn':function(_0x31bf83,_0x408f25){return _0x31bf83/_0x408f25;},'PhXvX':_0x4ccb6b(0x28c),'TaNag':_0x4ccb6b(0x863),'GTDbf':function(_0x2f8652,_0x47d557){return _0x2f8652===_0x47d557;},'eagDr':'PEqXJ','AkRpn':function(_0x4d29b7,_0x945fc0){return _0x4d29b7===_0x945fc0;},'cqyKw':function(_0x2d3997){return _0x2d3997();},'oytbY':function(_0x5b387e,_0x33d759){return _0x5b387e===_0x33d759;},'bTlpm':'ymVRI','mAroR':function(_0x239e24,_0x386523){return _0x239e24===_0x386523;},'HjkgJ':_0x4ccb6b(0x758),'KBjJc':function(_0x17d36d,_0xc1cc97){return _0x17d36d+_0xc1cc97;},'PkRjP':function(_0x3d96e4,_0x5e123a){return _0x3d96e4/_0x5e123a;},'fWaDH':_0x4ccb6b(0x251)+_0x4ccb6b(0x134)+'f\x20','qMLqj':_0x4ccb6b(0x2c4),'TUiyC':function(_0x5c320f,_0x3fa3da,_0x4699b0){return _0x5c320f(_0x3fa3da,_0x4699b0);},'PPYYm':function(_0x2a84c1,_0x436ae6){return _0x2a84c1(_0x436ae6);},'sTAlE':function(_0x23430c,_0x393532){return _0x23430c===_0x393532;},'ujiBH':'qtxqg','uOKYi':_0x4ccb6b(0x431)+_0x4ccb6b(0x1e6)+_0x4ccb6b(0x55d)+'ed\x20-\x20'+'open\x20'+_0x4ccb6b(0x87e)+_0x4ccb6b(0x97b)+_0x4ccb6b(0x4b7)+'ad','POhZv':_0x4ccb6b(0xa8),'wtVvr':'Speed'+_0x4ccb6b(0x562),'mBIye':'sk-md'+'esc','FrScg':function(_0x54bced,_0x2cfd24){return _0x54bced+_0x2cfd24;},'OqLYQ':function(_0x1d67e7,_0x4ad56a){return _0x1d67e7+_0x4ad56a;},'BxMUg':function(_0x1ef054,_0x2e021b){return _0x1ef054+_0x2e021b;},'jxIkh':_0x4ccb6b(0x4e0),'GMTqM':_0x4ccb6b(0x5c9)+_0x4ccb6b(0x679),'uXkFj':_0x4ccb6b(0x3d0)+_0x4ccb6b(0xa40)+_0x4ccb6b(0x99a)+_0x4ccb6b(0x5f3)+_0x4ccb6b(0x284)+_0x4ccb6b(0x5c9)+'ds\x20on'+_0x4ccb6b(0x196)+'eight'+',\x20ste'+_0x4ccb6b(0x95e)+_0x4ccb6b(0x225)+_0x4ccb6b(0x190)+_0x4ccb6b(0x4e1)+_0x4ccb6b(0x40a),'jEfjS':_0x4ccb6b(0x3d0)+'plier','CYURH':_0x4ccb6b(0xb2e)+'F6\x20al'+_0x4ccb6b(0x6a2)+'ep\x20th'+'is','EYseE':_0x4ccb6b(0x816)+_0x4ccb6b(0x5a5)+_0x4ccb6b(0xb2d)+'9)','KEkoz':_0x4ccb6b(0x1ce)+_0x4ccb6b(0x650)+'ot\x20\x20\x20'+'\x20F7\x20\x20'+_0x4ccb6b(0x284)+'\x20on/o'+'ff\x0aF8'+_0x4ccb6b(0x3d4)+_0x4ccb6b(0x3bd)+_0x4ccb6b(0x108)+_0x4ccb6b(0x742)+_0x4ccb6b(0x817)+_0x4ccb6b(0x2a4)+'ld\x20of'+_0x4ccb6b(0x30f)+_0x4ccb6b(0xa74)+'rt\x20\x20t'+_0x4ccb6b(0x17e)+_0x4ccb6b(0x9aa),'IxSYF':_0x4ccb6b(0x5c1)+'ls','AQcIR':'boblP','WvWhS':'oJask','NPjpf':_0x4ccb6b(0xa68)+_0x4ccb6b(0x9f6)+'e\x20min'+_0x4ccb6b(0x8d9)+_0x4ccb6b(0x97c)+'right'+_0x4ccb6b(0x271)+'ds\x20on'+_0x4ccb6b(0x9ae)+'sitio'+_0x4ccb6b(0x939),'GPgTP':function(_0x1c879a,_0x2efdfb,_0x43a8b9,_0x277d21,_0x11f6e1,_0x1fef19){return _0x1c879a(_0x2efdfb,_0x43a8b9,_0x277d21,_0x11f6e1,_0x1fef19);},'PjasM':'world'+_0x4ccb6b(0x2d9)+_0x4ccb6b(0x216)+_0x4ccb6b(0x8ce)+'he\x20ra'+'dar','EpAUr':function(_0x24981c,_0x41de15){return _0x24981c+_0x41de15;},'tjcxo':_0x4ccb6b(0x1c4)+_0x4ccb6b(0xa59)+'s\x20uni'+'denti'+_0x4ccb6b(0xa44),'IkGoq':_0x4ccb6b(0x352)+'ese\x20t'+'wo\x20fl'+_0x4ccb6b(0x1cf)+'are\x20n'+'ot\x20pi'+_0x4ccb6b(0xe3)+_0x4ccb6b(0xa28)+_0x4ccb6b(0x53b)+_0x4ccb6b(0xa8f)+'9,\x20tu'+'rn\x20ab'+'out\x209'+_0x4ccb6b(0x4bf)+_0x4ccb6b(0xa5a)+_0x4ccb6b(0xdc),'XCZEe':_0x4ccb6b(0x592)+_0x4ccb6b(0x8b3)+'iew\x20i'+'s\x20','lTQve':'°,\x20ou'+_0x4ccb6b(0x1b6)+_0x4ccb6b(0xaa8)+_0x4ccb6b(0x609)+_0x4ccb6b(0x612)+_0x4ccb6b(0x93a)+_0x4ccb6b(0x753)+_0x4ccb6b(0x343)+'.','wHnBc':_0x4ccb6b(0x592)+'\x20of\x20v'+_0x4ccb6b(0x5b0),'VtevR':_0x4ccb6b(0x248)+'\x20]\x20al'+_0x4ccb6b(0x6a2)+_0x4ccb6b(0x13c)+'is','UaKno':function(_0x11dde4,_0x281790,_0x40e05f){return _0x11dde4(_0x281790,_0x40e05f);},'yFFDM':_0x4ccb6b(0x419)+'n','rgtAr':_0x4ccb6b(0xa46),'OpHcq':_0x4ccb6b(0x723)+'te','xjALP':function(_0x1ca9fb,_0x39919b){return _0x1ca9fb+_0x39919b;},'XcnbB':_0x4ccb6b(0x8c5)+'ing\x200'+_0x4ccb6b(0xb07),'edvnl':'\x20\x20(re'+_0x4ccb6b(0x97a)+'d)','PmqKh':function(_0x1e176c,_0x930b76){return _0x1e176c+_0x930b76;},'USiLl':'Build','nAvOl':'VERSI'+'ON','OafHD':_0x4ccb6b(0x5ed),'HGosP':_0x4ccb6b(0x4c2)+_0x4ccb6b(0x516)+_0x4ccb6b(0x6d1)+_0x4ccb6b(0x38d),'zgTAw':function(_0xa32eb3,_0x4d1dac){return _0xa32eb3+_0x4d1dac;},'Uoxha':_0x4ccb6b(0x88c),'GBWai':_0x4ccb6b(0x3cc),'PUCPo':function(_0x35df05,_0x248b94,_0x5a9b00,_0x7599c){return _0x35df05(_0x248b94,_0x5a9b00,_0x7599c);},'joJjo':'Healt'+_0x4ccb6b(0xa02)+'pt+0x'+'C0','adnTs':'sk-va'+'l','GEFht':function(_0x13f1b0,_0x9975d4,_0x3a44bb){return _0x13f1b0(_0x9975d4,_0x3a44bb);},'QZxVL':'Diagn'+'ostic'+'s','GxcKq':_0x4ccb6b(0x971)+'t','VLNpB':_0x4ccb6b(0xa16)+_0x4ccb6b(0xaa8)+_0x4ccb6b(0x7a1)+'\x20thin'+_0x4ccb6b(0x320)+'n\x20som'+'ethin'+_0x4ccb6b(0x738)+'ks\x20wr'+_0x4ccb6b(0x17b),'rMEbH':_0x4ccb6b(0x4f7),'TsyVQ':_0x4ccb6b(0x279),'YsWRp':'grab','ApHTX':_0x4ccb6b(0x3bc),'ACtOf':function(_0xd1e529,_0x4391da){return _0xd1e529===_0x4391da;},'djiHh':function(_0x2ac910,_0x217486){return _0x2ac910-_0x217486;},'WRbfF':'mouse'+_0x4ccb6b(0x639),'qeTFr':'mouse'+_0x4ccb6b(0x56e),'EgdtW':_0x4ccb6b(0x45a)+'up','ulcWC':_0x4ccb6b(0xaba)+_0x4ccb6b(0x2c8),'EpeUA':_0x4ccb6b(0xaba)+'move','mkhsU':_0x4ccb6b(0xaba)+_0x4ccb6b(0x994),'ASUYn':function(_0x2aecb8,_0x44f28e){return _0x2aecb8(_0x44f28e);},'BVvFI':function(_0x598437){return _0x598437();},'DqvSv':'Sakur'+'a\x20Ski'+'llWar'+_0x4ccb6b(0x124)+_0x4ccb6b(0x890),'oBDdO':'sakur'+_0x4ccb6b(0x12b)+_0x4ccb6b(0xa4c)+'t','VCmHe':_0x4ccb6b(0x42e)+'n','dzJgC':_0x4ccb6b(0x70a)+'ll>','dODkN':_0x4ccb6b(0x9bb)+'tles','fvPld':_0x4ccb6b(0x9ff),'ObqLQ':function(_0x5ea94b,_0x475f4c,_0x5cdb7d,_0x2d6eec){return _0x5ea94b(_0x475f4c,_0x5cdb7d,_0x2d6eec);},'zOVGv':_0x4ccb6b(0x58f)+'go','lApty':'mn-to'+'p','hYaKl':function(_0x2e0b62){return _0x2e0b62();},'xOsMY':'sakur'+'a-pet'+'al','kdgoq':_0x4ccb6b(0x9ed)+'a\x20Ski'+'llWar'+'z\x20—\x20','TySml':_0x4ccb6b(0x8e4)+'b','DBMAK':_0x4ccb6b(0x909)+'ve','CNNrW':_0x4ccb6b(0x227),'sRKVQ':function(_0x372566,_0x164392){return _0x372566(_0x164392);},'XgEjy':function(_0x1ec254,_0x48e6a3){return _0x1ec254(_0x48e6a3);},'pcyPa':_0x4ccb6b(0xa62)+'nel','UMwRk':'\x20show'+'n','KMdjE':function(_0x250402,_0x4b3c72){return _0x250402*_0x4b3c72;},'NTyph':function(_0x23fcd7,_0x541a6c){return _0x23fcd7+_0x541a6c;},'rAsLn':'Sakur'+'a/UWM'+_0x4ccb6b(0xae3)+_0x4ccb6b(0x9f8)+_0x4ccb6b(0x35b)+_0x4ccb6b(0x446)+_0x4ccb6b(0x579)+'and\x20h'+_0x4ccb6b(0x6db)+_0x4ccb6b(0x24b)+'.','IpJrY':'\x20\x20·\x20\x20'+'hooks'+'\x20','OCZGu':_0x4ccb6b(0x524)+'heap\x20','yUykk':function(_0x399898,_0x2bc8f9){return _0x399898/_0x2bc8f9;},'WNVgo':_0x4ccb6b(0x9ec)+_0x4ccb6b(0x145)+_0x4ccb6b(0x5ad)+'\x20firs'+_0x4ccb6b(0xec)+'ort…','hUgRH':_0x4ccb6b(0xb1f)+'-k]','ZcCRk':_0x4ccb6b(0x892)+'\x20','VMnIs':function(_0x49e7d3,_0x3ed0e1){return _0x49e7d3(_0x3ed0e1);},'mNnfc':function(_0x2b77fe,_0x1a20ab){return _0x2b77fe===_0x1a20ab;},'XvwJA':_0x4ccb6b(0x908)+'he\x20li'+'ve\x20ma'+_0x4ccb6b(0x373),'LTRHy':function(_0x236738,_0x2d8b6a){return _0x236738===_0x2d8b6a;},'ksPAD':_0x4ccb6b(0x100),'prlLj':function(_0x53607d,_0x5a1e9a,_0x5c437d){return _0x53607d(_0x5a1e9a,_0x5c437d);},'exQqY':function(_0x11b273,_0x1e3b42,_0x4a41eb,_0x5f5252){return _0x11b273(_0x1e3b42,_0x4a41eb,_0x5f5252);},'zzNRt':function(_0x4e9eef,_0x52e03c){return _0x4e9eef!==_0x52e03c;},'TqTvK':function(_0x305879,_0x54d070){return _0x305879(_0x54d070);},'sqKhq':function(_0x54b214,_0x327d2a){return _0x54b214!==_0x327d2a;},'UqyXO':'GnRWv','nvfHk':function(_0x55ff29,_0x458c38){return _0x55ff29===_0x458c38;},'iWrNb':'vhzer','IKXXI':_0x4ccb6b(0x18c),'SLWke':function(_0x2ef4d2,_0x356a6d){return _0x2ef4d2*_0x356a6d;},'iHJhN':function(_0x5deef1,_0x342dd3){return _0x5deef1!==_0x342dd3;},'VaBJZ':_0x4ccb6b(0x5fb),'ShSRx':function(_0x1aa09a,_0x21a5c9){return _0x1aa09a<_0x21a5c9;},'dzNny':function(_0x5efd77,_0x2def5e){return _0x5efd77+_0x2def5e;},'oRfiD':function(_0x35ab62,_0x213100){return _0x35ab62/_0x213100;},'PeMba':'GRXIO','oxDDz':function(_0x58f380,_0x27c927){return _0x58f380!==_0x27c927;},'hQSam':'YwuXk','LXaIm':function(_0x1a7465,_0x3a2ebf){return _0x1a7465===_0x3a2ebf;},'KIrpx':function(_0x2bbd8a,_0xc486d3){return _0x2bbd8a+_0xc486d3;},'dcDGQ':function(_0xb8130){return _0xb8130();},'GShrh':_0x4ccb6b(0x6af)+_0x4ccb6b(0x5c3)+_0x4ccb6b(0x21d)+'ng','mnrFc':function(_0x116e8f,_0x3de564){return _0x116e8f+_0x3de564;},'ihoZV':_0x4ccb6b(0x7db)+_0x4ccb6b(0x799)+':rgba'+_0x4ccb6b(0xa0d)+'2,29,'+'.72);'+'borde'+_0x4ccb6b(0x6de)+'\x20soli'+_0x4ccb6b(0x585)+'a(255'+',143,'+_0x4ccb6b(0x9c1)+'4);bo'+_0x4ccb6b(0xd2)+'radiu'+'s:10p'+'x;','qHuQM':'paddi'+'ng:4p'+'x;fon'+'t:10p'+_0x4ccb6b(0x65c)+_0x4ccb6b(0x33a)+'onosp'+_0x4ccb6b(0x3b4)+'onsol'+_0x4ccb6b(0x5a4)+'nospa'+'ce;co'+_0x4ccb6b(0x90f)+_0x4ccb6b(0xd5)+'9;','FFBju':'<div\x20'+_0x4ccb6b(0x75a)+_0x4ccb6b(0x81f)+_0x4ccb6b(0x844)+'lg\x22\x20s'+'tyle='+_0x4ccb6b(0x762)+_0x4ccb6b(0x8ba)+_0x4ccb6b(0x101)+'ter\x22>'+_0x4ccb6b(0x451)+'>','KdAgw':_0x4ccb6b(0x3f3)+_0x4ccb6b(0x96e)+_0x4ccb6b(0x341),'rMHuB':'iYhDP','yeukx':function(_0x502784,_0x283d86){return _0x502784!==_0x283d86;},'aWyBH':function(_0x3e0694,_0x12e112){return _0x3e0694!==_0x12e112;},'PZFzJ':_0x4ccb6b(0x3ca),'dnnrl':_0x4ccb6b(0x44d),'WweiY':function(_0xbf829b,_0x368535){return _0xbf829b<_0x368535;},'sSElo':function(_0x5163a4,_0x38a8bd){return _0x5163a4+_0x38a8bd;},'Wmqmv':_0x4ccb6b(0x45e),'QfzZk':_0x4ccb6b(0x6bf),'gXbBw':'Uhqiy','Qcqfi':function(_0xfe162b,_0x13c5eb){return _0xfe162b(_0x13c5eb);},'hTqAE':function(_0x45703a,_0x42c080){return _0x45703a===_0x42c080;},'LeCbK':function(_0xb0d7bc,_0x2a8dc7,_0x5d76b3){return _0xb0d7bc(_0x2a8dc7,_0x5d76b3);},'iOoRw':function(_0x682ef6,_0x160f98){return _0x682ef6+_0x160f98;},'VtyvJ':function(_0x3af46a,_0x592e18){return _0x3af46a!==_0x592e18;},'QEArC':function(_0x111aa4,_0x243308){return _0x111aa4-_0x243308;},'OYEkv':function(_0x36203c,_0x2f5cd0){return _0x36203c-_0x2f5cd0;},'jmYEo':function(_0x46ce9a,_0x4ac2c1){return _0x46ce9a/_0x4ac2c1;},'nNXNg':function(_0x1b3738,_0x45dae3){return _0x1b3738+_0x45dae3;},'eBoAx':function(_0x2c4652,_0x543662){return _0x2c4652-_0x543662;},'ipmzt':_0x4ccb6b(0x115),'nWRrE':'10px\x20'+'ui-mo'+'nospa'+_0x4ccb6b(0x6b2)+_0x4ccb6b(0x9e7)+_0x4ccb6b(0x98b)+'ospac'+'e','NzrgU':function(_0x2ebc94,_0x56d280){return _0x2ebc94/_0x56d280;},'RQqeV':function(_0x43e624){return _0x43e624();},'MZAdy':function(_0xcca8c2,_0x313cc6){return _0xcca8c2-_0x313cc6;},'RCtQS':function(_0x3b07b9,_0x3a095c){return _0x3b07b9-_0x3a095c;},'FHoDl':_0x4ccb6b(0x223),'ysKYe':function(_0x508e39,_0x4e89ca){return _0x508e39-_0x4e89ca;},'wjVMd':function(_0x2f5429,_0x569ca2){return _0x2f5429<_0x569ca2;},'VspAG':function(_0xd6b53b,_0x14c61b){return _0xd6b53b===_0x14c61b;},'eIUFt':function(_0x55e88e,_0x14b7e4){return _0x55e88e/_0x14b7e4;},'sthlm':function(_0x378670,_0x4c6a70){return _0x378670+_0x4c6a70;},'elGWu':function(_0x233f05,_0x3b0833){return _0x233f05*_0x3b0833;},'fKsGw':function(_0x5ea711,_0x26c14f){return _0x5ea711+_0x26c14f;},'xDXzy':_0x4ccb6b(0x4fb),'GivnV':function(_0x49d567,_0x215e1b){return _0x49d567+_0x215e1b;},'YzQoS':'\x20·\x20te'+'am','VTKOV':function(_0xbe7ac8){return _0xbe7ac8();},'BPeBY':function(_0x472732,_0x1edb02,_0x105a25){return _0x472732(_0x1edb02,_0x105a25);},'iFyFo':'LEJOw','zZqIi':'MtnWz','eIUvH':_0x4ccb6b(0x5f1)+'|5|2|'+'1','xGjZB':function(_0x2dbc76,_0x564747){return _0x2dbc76+_0x564747;},'nwujx':_0x4ccb6b(0xff),'NLaRd':_0x4ccb6b(0x494)+'\x20-','kbkKF':_0x4ccb6b(0x96f)+'|9|3|'+_0x4ccb6b(0x77c)+_0x4ccb6b(0x89d),'CSTEk':'sakur'+'a-ski'+'llwar'+'z','egicp':'XAahP','iwfiB':function(_0xf88a83,_0xd6dfb2){return _0xf88a83>=_0xd6dfb2;},'sTKxj':function(_0x5d737d,_0x50275e){return _0x5d737d+_0x50275e;},'YKJYn':function(_0x47f36d,_0x161a87){return _0x47f36d(_0x161a87);},'labMh':function(_0x465f1b){return _0x465f1b();},'zzJNf':function(_0x4bb561){return _0x4bb561();},'YobGO':'TmMvy','xQPml':'VzUVI','qxurw':_0x4ccb6b(0xa66)+'red\x20','XnpKV':_0x4ccb6b(0x4fe)+_0x4ccb6b(0x763)+_0x4ccb6b(0x323)+'read\x20'+'0\x20fie'+_0x4ccb6b(0x53e),'QJWmf':function(_0x14266a,_0x3f2252){return _0x14266a+_0x3f2252;},'hXsqV':'Reaso'+_0x4ccb6b(0x5b9),'UfOro':'MTMtL','KDUgp':function(_0x2d28ab,_0x479887){return _0x2d28ab+_0x479887;},'wuuTd':_0x4ccb6b(0xfe)+'ame\x20w'+_0x4ccb6b(0xa05)+_0x4ccb6b(0x402)+_0x4ccb6b(0x5e4)+_0x4ccb6b(0x30c)+_0x4ccb6b(0x1ed)+'s\x20orp'+'haned'+_0x4ccb6b(0x83f)+_0x4ccb6b(0x6e7)+'every'+_0x4ccb6b(0x6e4)+'r\x20','XcMUn':_0x4ccb6b(0x620)+_0x4ccb6b(0x77b)+_0x4ccb6b(0x3ce)+'rent\x20'+_0x4ccb6b(0x1a0)+_0x4ccb6b(0x168)+_0x4ccb6b(0x7b8)+_0x4ccb6b(0x74c)+'n\x20the'+'\x20glob'+_0x4ccb6b(0xabf)+_0x4ccb6b(0x491)+_0x4ccb6b(0x9ab),'RiZuz':_0x4ccb6b(0xabe),'tlclc':function(_0x1648f2,_0x1d3236){return _0x1648f2+_0x1d3236;},'bYicY':_0x4ccb6b(0x8a7)+'th\x20or'+'igina'+_0x4ccb6b(0x14e)+'=','XIRxH':'),\x20so'+'\x20the\x20'+'refer'+_0x4ccb6b(0x2e1)+_0x4ccb6b(0x2bc)+_0x4ccb6b(0x278)+_0x4ccb6b(0x5a2)+'d\x20is\x20'+_0x4ccb6b(0x503)+_0x4ccb6b(0x747)+_0x4ccb6b(0x355)+'ow.','tFkyp':function(_0x454b0b,_0x1e372a){return _0x454b0b+_0x1e372a;},'GCxhZ':_0x4ccb6b(0x1c2)+_0x4ccb6b(0x557)+'\x20stay'+'\x20bloc'+'ked\x20u'+'ntil\x20'+'a\x20gam'+_0x4ccb6b(0x4d7)+_0x4ccb6b(0x6a8)+_0x4ccb6b(0x142)+_0x4ccb6b(0x5b8)+_0x4ccb6b(0x721)+'U8\x20is'+_0x4ccb6b(0x936)+'hable'+'.','cgcGR':function(_0x4ed369,_0xc9089){return _0x4ed369===_0xc9089;},'qJxeW':function(_0x3ca6c,_0x1a2e0e){return _0x3ca6c!==_0x1a2e0e;},'jxOEK':function(_0x5bd72f,_0x5585a6){return _0x5bd72f+_0x5585a6;},'trlsu':function(_0x4b28d3,_0x418985){return _0x4b28d3+_0x418985;},'JyvwG':_0x4ccb6b(0x16a)+'once\x20'+_0x4ccb6b(0x512)+_0x4ccb6b(0x192)+'Assem'+_0x4ccb6b(0x88a)+_0x4ccb6b(0x4ef)+_0x4ccb6b(0x613)+'\x20and\x20'+_0x4ccb6b(0xa38)+_0x4ccb6b(0xa3f)+'plugi'+_0x4ccb6b(0x531)+'ks.le'+_0x4ccb6b(0x767)+'\x20','pAECl':function(_0x4e2ad0,_0x103314){return _0x4e2ad0===_0x103314;},'YyngK':function(_0x3ec748,_0x3f13db){return _0x3ec748>_0x3f13db;},'xkaRA':function(_0x362810,_0x14b524){return _0x362810+_0x14b524;},'tZDqs':'Hooks'+'\x20are\x20'+_0x4ccb6b(0x4c2)+'ed\x20bu'+'t\x20no\x20'+'FPSco'+'ntrol'+_0x4ccb6b(0x563)+'as\x20fi'+_0x4ccb6b(0x83a)+'et.\x20','qnjPK':function(_0x432fe4,_0x39931c){return _0x432fe4+_0x39931c;},'QahtM':_0x4ccb6b(0x3a8)+_0x4ccb6b(0xa7c)+_0x4ccb6b(0x756)+'0','Srcjq':_0x4ccb6b(0x318),'ZiLOU':function(_0x2aa20d,_0x32de30){return _0x2aa20d===_0x32de30;},'PbKQh':'WQMFB','pTbWK':_0x4ccb6b(0xd1),'XJfhT':_0x4ccb6b(0x9be),'gKUaE':function(_0x36aa12){return _0x36aa12();},'efQZB':function(_0x30b87d,_0x19d6e8){return _0x30b87d<_0x19d6e8;},'tnBvr':_0x4ccb6b(0x424)+'b1','GAPfK':_0x4ccb6b(0x647)+_0x4ccb6b(0x9f5)+_0x4ccb6b(0x67c)+'WARZ-'+'BEGIN'+'===','pOVyD':'2.9.3','OXrkn':function(_0x53bbb5,_0x4bb47d){return _0x53bbb5+_0x4bb47d;},'NSogx':'messa'+'ge','OdgPm':function(_0x32f60c,_0x2f92dd,_0x585076){return _0x32f60c(_0x2f92dd,_0x585076);},'YGijG':_0x4ccb6b(0x6f7)+_0x4ccb6b(0x1b4),'XECmo':_0x4ccb6b(0x5aa)+_0x4ccb6b(0x580)+'ger','NRovM':'Assem'+'bly-C'+_0x4ccb6b(0x9a8)+_0x4ccb6b(0x527)+'tpass'+'.dll','bmgSo':'ch.sy'+_0x4ccb6b(0x615)+_0x4ccb6b(0x1b1)+'cal.d'+'ll','Zpczu':'Scivo'+'loCha'+_0x4ccb6b(0x471)+_0x4ccb6b(0x5ae)+_0x4ccb6b(0x360)+_0x4ccb6b(0x212),'oNFgM':_0x4ccb6b(0xab)+_0x4ccb6b(0x30b)+'d','cRRkz':'obfB','PWhOq':'healt'+'h','Zsnif':_0x4ccb6b(0x36c)+'form','UXDju':'0x28','IzdGp':_0x4ccb6b(0x413),'EWwkD':_0x4ccb6b(0x45a)+'Look','QOKYB':_0x4ccb6b(0xa50)+'le','aQKnJ':'sync','zLjaM':_0x4ccb6b(0x833)+_0x4ccb6b(0x78a)+'th','cAMek':_0x4ccb6b(0x833)+'tHeal'+_0x4ccb6b(0x9d8),'uoSkb':_0x4ccb6b(0x454),'lPYdk':'sakur'+'a-sw-'+'menu-'+'pos','XRtdY':'CMB','xIvop':'VIS','dgKAZ':_0x4ccb6b(0x5eb)+'s','SOwaI':_0x4ccb6b(0x303),'kaFnW':function(_0x27cb98,_0x109919){return _0x27cb98+_0x109919;},'vUilU':function(_0xdec6a2,_0x5cb22d){return _0xdec6a2+_0x5cb22d;},'qVdtr':function(_0x56d258,_0x39922c){return _0x56d258+_0x39922c;},'TsGxk':function(_0x456144,_0x2feb06){return _0x456144+_0x2feb06;},'fhlZp':function(_0xaf38e4,_0x2bef4d){return _0xaf38e4+_0x2bef4d;},'vUayx':function(_0x1e14ce,_0x355bbb){return _0x1e14ce+_0x355bbb;},'ALvdK':function(_0x58bef9,_0x24f219){return _0x58bef9+_0x24f219;},'useDA':function(_0x47ee37,_0xa6d826){return _0x47ee37+_0xa6d826;},'ERPvP':function(_0x3ddbf5,_0x1cf32c){return _0x3ddbf5+_0x1cf32c;},'JlTju':function(_0xf4a9d6,_0x26c01d){return _0xf4a9d6+_0x26c01d;},'MXhIN':function(_0x2e1ceb,_0x2b4e15){return _0x2e1ceb+_0x2b4e15;},'KftHu':_0x4ccb6b(0x3f3)+_0x4ccb6b(0x774)+_0x4ccb6b(0x655)+_0x4ccb6b(0x7e2)+_0x4ccb6b(0x588)+'l{pos'+'ition'+_0x4ccb6b(0x5d7)+_0x4ccb6b(0x548)+_0x4ccb6b(0xa07)+_0x4ccb6b(0xac3)+_0x4ccb6b(0x85a)+_0x4ccb6b(0x9f0)+_0x4ccb6b(0x398)+_0x4ccb6b(0x5c5)+_0x4ccb6b(0x958)+_0x4ccb6b(0x401)+'(100v'+_0x4ccb6b(0x7a2)+_0x4ccb6b(0x6c4)+';max-'+_0x4ccb6b(0x629)+'t:min'+'(500p'+'x,cal'+_0x4ccb6b(0x98e)+_0x4ccb6b(0x208)+'48px)'+');','FEetF':'backg'+'round'+_0x4ccb6b(0x777)+_0x4ccb6b(0x3c4)+_0x4ccb6b(0x80f)+_0x4ccb6b(0x406)+'backd'+_0x4ccb6b(0x667)+'ilter'+_0x4ccb6b(0x3e0)+_0x4ccb6b(0x246)+_0x4ccb6b(0x228)+_0x4ccb6b(0x154)+'(150%'+');-we'+'bkit-'+_0x4ccb6b(0x18e)+'rop-f'+_0x4ccb6b(0xafe)+':blur'+_0x4ccb6b(0x246)+_0x4ccb6b(0x228)+'urate'+_0x4ccb6b(0x67e)+');','iDGIc':_0x4ccb6b(0x415)+_0x4ccb6b(0xafd)+_0x4ccb6b(0x53f)+_0x4ccb6b(0x1da)+'\x20rgba'+'(255,'+'255,2'+_0x4ccb6b(0x1d9)+_0x4ccb6b(0x785)+_0x4ccb6b(0x5d2)+'\x201px\x20'+_0x4ccb6b(0x30e)+'a(255'+_0x4ccb6b(0x1f4)+_0x4ccb6b(0x56a)+'05),0'+'\x2030px'+_0x4ccb6b(0xa8d)+'\x20rgba'+'(0,0,'+_0x4ccb6b(0x9ad)+');','HHQjq':_0x4ccb6b(0x13e)+'ogo-s'+'vg{wi'+_0x4ccb6b(0xab8)+_0x4ccb6b(0x9f1)+_0x4ccb6b(0x59d)+':25px'+_0x4ccb6b(0x9f7)+_0x4ccb6b(0x950)+'visib'+_0x4ccb6b(0x7b1)+_0x4ccb6b(0x7f4)+'drop-'+'shado'+_0x4ccb6b(0x5f9)+'\x204px\x20'+'rgba('+'255,1'+_0x4ccb6b(0x542)+'7,.8)'+');}','opoVt':'.mn-t'+_0x4ccb6b(0x103)+'ver{c'+_0x4ccb6b(0x57e)+'rgba('+_0x4ccb6b(0xac)+'38,24'+'2,.8)'+';}','cvVnp':'.mn-s'+_0x4ccb6b(0x3f0)+_0x4ccb6b(0x660)+_0x4ccb6b(0x1c0)+_0x4ccb6b(0x23c)+_0x4ccb6b(0x8c0)+_0x4ccb6b(0x170),'lFbZq':'.mn-c'+_0x4ccb6b(0x520)+'displ'+'ay:gr'+'id;pl'+'ace-i'+_0x4ccb6b(0x62d)+_0x4ccb6b(0x75e)+'r;wid'+'th:28'+_0x4ccb6b(0x7f1)+_0x4ccb6b(0x444)+_0x4ccb6b(0x855)+_0x4ccb6b(0x602)+_0x4ccb6b(0x493)+'order'+_0x4ccb6b(0x36a)+_0x4ccb6b(0x442)+_0x4ccb6b(0x11b)+_0x4ccb6b(0x163)+'nd:tr'+_0x4ccb6b(0x15c)+_0x4ccb6b(0x815),'GNPXC':'.mn-c'+_0x4ccb6b(0x189)+_0x4ccb6b(0x478)+'idth:'+'14px;'+_0x4ccb6b(0x629)+'t:14p'+_0x4ccb6b(0x6a4)+_0x4ccb6b(0x5af)+_0x4ccb6b(0x835)+_0x4ccb6b(0x967)+_0x4ccb6b(0xce)+_0x4ccb6b(0x13b)+_0x4ccb6b(0x1c8)+_0x4ccb6b(0x951)+_0x4ccb6b(0x102)+'2;str'+'oke-l'+_0x4ccb6b(0x9bd)+_0x4ccb6b(0x24c)+'nd;}','xYrTp':'.mn-c'+_0x4ccb6b(0x369)+_0x4ccb6b(0xb4)+'it-sc'+_0x4ccb6b(0x623)+_0x4ccb6b(0x594)+_0x4ccb6b(0x80e)+_0x4ccb6b(0x165)+'ound:'+_0x4ccb6b(0x22b)+'255,2'+_0x4ccb6b(0x131)+_0x4ccb6b(0x86e)+_0x4ccb6b(0x1f7)+'der-r'+_0x4ccb6b(0x357)+_0x4ccb6b(0x502)+'}','MxCTH':_0x4ccb6b(0x232)+'ard{b'+_0x4ccb6b(0x224)+'-radi'+_0x4ccb6b(0x544)+'px;ba'+_0x4ccb6b(0x9fd)+_0x4ccb6b(0x466)+_0x4ccb6b(0xe9)+_0x4ccb6b(0x131)+_0x4ccb6b(0x7d6)+',.025'+');box'+_0x4ccb6b(0x7de)+'ow:in'+_0x4ccb6b(0x5d2)+_0x4ccb6b(0x46e)+_0x4ccb6b(0x45d)+'gba(2'+_0x4ccb6b(0x131)+_0x4ccb6b(0x7d6)+',.05)'+';}','sUdOU':_0x4ccb6b(0x232)+_0x4ccb6b(0xadc)+_0x4ccb6b(0x9f3)+_0x4ccb6b(0x163)+'nd:rg'+_0x4ccb6b(0x824)+'5,255'+_0x4ccb6b(0x1f4)+_0x4ccb6b(0x27b)+'box-s'+_0x4ccb6b(0xafd)+':inse'+_0x4ccb6b(0x829)+_0x4ccb6b(0x9c4)+_0x4ccb6b(0x14b)+'a(255'+',107,'+'157,.'+'28);}','IZkmT':_0x4ccb6b(0x232)+_0x4ccb6b(0x8c6)+_0x4ccb6b(0x881)+_0x4ccb6b(0x2e3)+_0x4ccb6b(0x5e5)+'x;ali'+'gn-it'+_0x4ccb6b(0x7d5)+'enter'+_0x4ccb6b(0x724)+'8px;p'+_0x4ccb6b(0x3c5)+_0x4ccb6b(0x2c7)+'x\x2012p'+_0x4ccb6b(0x2df),'yDFzK':'.sk-h'+_0x4ccb6b(0x70e)+'ispla'+'y:blo'+_0x4ccb6b(0x49b)+_0x4ccb6b(0x660)+_0x4ccb6b(0x766)+_0x4ccb6b(0x23c)+'acity'+_0x4ccb6b(0x170),'Wxyni':_0x4ccb6b(0xa80)+'witch'+_0x4ccb6b(0x84f)+_0x4ccb6b(0x4b4)+'relat'+_0x4ccb6b(0x5de)+_0x4ccb6b(0x102)+_0x4ccb6b(0x669)+_0x4ccb6b(0x629)+'t:14p'+_0x4ccb6b(0x3fd)+_0x4ccb6b(0x1f1)+';bord'+'er-ra'+_0x4ccb6b(0x40e)+'99px;'+_0x4ccb6b(0x7db)+'round'+_0x4ccb6b(0x777)+_0x4ccb6b(0x465)+'255,2'+_0x4ccb6b(0x1d9)+_0x4ccb6b(0x3b2)+'rsor:'+_0x4ccb6b(0x736)+_0x4ccb6b(0x624)+_0x4ccb6b(0x8f6)+_0x4ccb6b(0x960),'UMaAa':'.sk-s'+'witch'+_0x4ccb6b(0x9de)+'-chec'+_0x4ccb6b(0x8da)+'true\x22'+_0x4ccb6b(0x53a)+_0x4ccb6b(0x43b)+_0x4ccb6b(0xac5)+'5px;b'+'ackgr'+_0x4ccb6b(0xa81)+'#ff6b'+_0x4ccb6b(0xc6),'UDLfW':'.sk-s'+_0x4ccb6b(0x74d)+_0x4ccb6b(0x213)+'kit-a'+_0x4ccb6b(0x78b)+_0x4ccb6b(0x916)+'none;'+'appea'+'rance'+':none'+_0x4ccb6b(0x8ec)+'h:96p'+_0x4ccb6b(0x6a1)+_0x4ccb6b(0x642)+_0x4ccb6b(0x702)+'ckgro'+_0x4ccb6b(0x631)+_0x4ccb6b(0x1aa)+_0x4ccb6b(0x3fb)+';}','wtFxC':'.sk-s'+_0x4ccb6b(0x74d)+'::-we'+_0x4ccb6b(0xad2)+_0x4ccb6b(0x7c4)+_0x4ccb6b(0x67b)+'nable'+_0x4ccb6b(0x62e)+'k{hei'+_0x4ccb6b(0x596)+'px;bo'+'rder-'+'radiu'+_0x4ccb6b(0x981)+';','kzkrm':_0x4ccb6b(0xaeb)+'ote.e'+_0x4ccb6b(0xc7)+_0x4ccb6b(0x90f)+_0x4ccb6b(0x3ae)+_0x4ccb6b(0x47d),'VFxju':_0x4ccb6b(0x558)+_0x4ccb6b(0x1c7)+_0x4ccb6b(0x846)+_0x4ccb6b(0xb2c)+'t-wei'+_0x4ccb6b(0xa14)+_0x4ccb6b(0x2e7)+_0x4ccb6b(0x7dc)+_0x4ccb6b(0x736)+_0x4ccb6b(0x371)+'nt-fa'+_0x4ccb6b(0xa79)+'inher'+_0x4ccb6b(0x84c),'igWTY':_0x4ccb6b(0x11c)+_0x4ccb6b(0x125)+_0x4ccb6b(0x9b5)+_0x4ccb6b(0xafe)+_0x4ccb6b(0x6ce)+'htnes'+_0x4ccb6b(0x5fa)+_0x4ccb6b(0xa8a),'NLXWH':_0x4ccb6b(0x3f3)+'ra-pe'+'tal{p'+_0x4ccb6b(0x48c)+'on:fi'+'xed;t'+_0x4ccb6b(0x274)+_0x4ccb6b(0x993)+_0x4ccb6b(0x4de)+_0x4ccb6b(0x706)+_0x4ccb6b(0x8f8)+'x:214'+'74836'+'46;cu'+_0x4ccb6b(0x7dc)+'point'+_0x4ccb6b(0x622)+_0x4ccb6b(0xab8)+_0x4ccb6b(0x484)+_0x4ccb6b(0x59d)+':26px'+';opac'+'ity:.'+_0x4ccb6b(0x1c6),'Oleis':_0x4ccb6b(0x36c)+_0x4ccb6b(0x365)+_0x4ccb6b(0x7cd)+'ity\x20.'+'2s;po'+_0x4ccb6b(0x3db)+_0x4ccb6b(0x52d)+_0x4ccb6b(0x8a9)+'to;fi'+'lter:'+_0x4ccb6b(0x6a9)+'shado'+_0x4ccb6b(0x5f9)+_0x4ccb6b(0x713)+_0x4ccb6b(0x22b)+_0x4ccb6b(0x4b0)+_0x4ccb6b(0x542)+'7,.7)'+');}','XPiWN':function(_0x3abfdd,_0x53e73c){return _0x3abfdd+_0x53e73c;},'dSaxm':'<circ'+_0x4ccb6b(0x1b7)+'=\x2212\x22'+'\x20cy=\x22'+'10\x22\x20r'+_0x4ccb6b(0x796)+_0x4ccb6b(0x4ba)+'l=\x22#f'+_0x4ccb6b(0x633)+'\x22/></'+_0x4ccb6b(0x1db),'YrmMH':_0x4ccb6b(0x10c)};var _0x3cbf7b=location[_0x4ccb6b(0xabd)+_0x4ccb6b(0x73e)]||'',_0x375bc4=/(^|\.)www\.crazygames\.com$/[_0x4ccb6b(0x346)](_0x3cbf7b),_0x167220=/(^|\.)games\.crazygames\.com$/[_0x4ccb6b(0x346)](_0x3cbf7b),_0x14c794=/(^|\.)crazygames\.com$/['test'](_0x3cbf7b)&&!_0x375bc4&&!_0x167220,_0x3f86d7=_0x375bc4?_0x4ccb6b(0x2d7)+'l':_0x167220?'wrapp'+'er':_0x4ccb6b(0xaff)+'r';if(!_0x375bc4&&!_0x167220&&!_0x14c794)return;var _0x5ae3b3=_0x616644[_0x4ccb6b(0xb29)],_0xf35bdd=_0x4ccb6b(0x675)+_0x4ccb6b(0x581)+_0x4ccb6b(0x156),_0x66cc24=_0x616644[_0x4ccb6b(0x8f3)],_0x1e4295=_0x4ccb6b(0x647)+'KURA-'+_0x4ccb6b(0x67c)+'WARZ-'+'END=='+'=',_0x143793=_0x616644[_0x4ccb6b(0x397)];if(_0x167220){window['addEv'+_0x4ccb6b(0x959)+_0x4ccb6b(0x800)+'r']('messa'+'ge',function(_0xd3825c){var _0x4b7a16=_0x4ccb6b,_0x22f50f={'YqnsE':function(_0x5a89de,_0x2d16cc,_0x39e028){return _0x616644['ikAEz'](_0x5a89de,_0x2d16cc,_0x39e028);},'ldaEB':_0x4b7a16(0x3af)+'on'};if('mPbPB'==='iYNLq'){var _0x3b36c4=_0x616644['MPVMW']['split']('|'),_0x311352=0x2096+0x3*0x94a+-0x3c74;while(!![]){switch(_0x3b36c4[_0x311352++]){case'0':var _0x326d86=_0x44ac7d[_0x4b7a16(0x235)][_0x3ef564];continue;case'1':var _0x525702=_0x3dda99!==null&&_0x326d86[_0x4b7a16(0x8af)]===_0x1a73e3;continue;case'2':_0x587dac['fill']();continue;case'3':_0x3637b3['begin'+'Path']();continue;case'4':_0x616644['ORhZM'](_0x528324,_0x3f6120-(0x9e*0x1+-0x13e4+-0xf7*-0x14))?(_0x11ff06=_0x40fbdc+_0x35ac24/_0x528324*(_0x523f2a-(0x1f*0x5e+-0x1*0xa81+-0xdb)),_0x21bebe=_0x23b66a+_0x616644[_0x4b7a16(0x645)](_0x616644['QLUVE'](_0x29bc25,_0x528324),_0xa3df4-(0x1*0xc87+0xf*0x1d0+-0x27b1))):(_0x11ff06=_0x51e456+_0x35ac24,_0x21bebe=_0x55c61e+_0x29bc25);continue;case'5':var _0x11ff06=_0x2631e4,_0x21bebe=_0x3d7c05;continue;case'6':var _0x35ac24=(_0x326d86['x']-_0x4fb38d[_0x4b7a16(0x5b4)][-0x242b+0xc48+-0x4c7*-0x5])*_0xd575f3,_0x29bc25=(_0x326d86['z']-_0x357c62['feet'][-0x1da9+0x1*0xb4d+0x1*0x125e])*_0x2f23bc;continue;case'7':var _0x528324=_0x39c525[_0x4b7a16(0x942)](_0x616644[_0x4b7a16(0x927)](_0x616644['rwTxw'](_0x35ac24,_0x35ac24),_0x616644['eGSIP'](_0x29bc25,_0x29bc25)));continue;case'8':_0x215354[_0x4b7a16(0x648)](_0x11ff06,_0x21bebe,_0x525702?0x19*0x16f+0xa2e+-0x2e03:0x1c5f+-0x1*0x2063+0x1*0x407+0.20000000000000018,0xe48*0x1+0xfb0*0x2+-0x2*0x16d4,_0x3a1ca7['PI']*(-0x1849*0x1+-0x14eb+0x789*0x6));continue;case'9':_0x51a03c[_0x4b7a16(0xb05)+_0x4b7a16(0x4e6)]=_0x525702?_0x616644['lRFTs']:_0x4b7a16(0xa20)+'74';continue;case'10':_0x4c8fe6++;continue;}break;}}else{var _0x2305b7=_0xd3825c['data'];if(!_0x2305b7||_0x2305b7['__sak'+'ura']!==_0xf35bdd)return;try{if(window['paren'+'t']&&window[_0x4b7a16(0x4d4)+'t']!==window)window['paren'+'t'][_0x4b7a16(0x27d)+'essag'+'e'](_0x2305b7,'*');if(window[_0x4b7a16(0x4b6)]&&window[_0x4b7a16(0x4b6)]!==window)window[_0x4b7a16(0x4b6)][_0x4b7a16(0x27d)+'essag'+'e'](_0x2305b7,'*');}catch(_0x30942e){}if(_0x2305b7&&_0x2305b7['kind']===_0x4b7a16(0x526)){if('BZUSI'===_0x616644[_0x4b7a16(0xae8)])try{var _0x4c6881=document[_0x4b7a16(0x789)+_0x4b7a16(0x689)+'torAl'+'l']('ifram'+'e');for(var _0x3afa11=0x5ec*0x1+-0xe5e+0x2e*0x2f;_0x616644['KrwkC'](_0x3afa11,_0x4c6881[_0x4b7a16(0xc4)+'h']);_0x3afa11++){try{if(_0x616644[_0x4b7a16(0x28f)]!==_0x616644['apDod'])_0x259626[_0x4b7a16(0x598)+_0x4b7a16(0xeb)](),_0xce2dbd['arc'](_0x3d2217,_0x46a1b8,(_0x539b51-(-0x22ee+0x13a3*0x1+-0x1*-0xf4f))*_0xad883/(0x1*-0x1079+0x1c4a+-0xbce),0x13af*0x1+0x6f7*0x3+0xc4*-0x35,_0x4f1eb8['PI']*(0x1*-0x1e29+0x6fa+0x7bb*0x3)),_0x118a87[_0x4b7a16(0x15b)+'e']();else{if(_0x4c6881[_0x3afa11][_0x4b7a16(0x6e3)+'ntWin'+_0x4b7a16(0x267)])_0x4c6881[_0x3afa11][_0x4b7a16(0x6e3)+_0x4b7a16(0xb12)+_0x4b7a16(0x267)][_0x4b7a16(0x27d)+_0x4b7a16(0x273)+'e'](_0x2305b7,'*');}}catch(_0x442650){}}}catch(_0x55d431){}else _0x2f7938=_0x22f50f['YqnsE'](_0x2a7d2c,_0x22f50f[_0x4b7a16(0x91c)],![]),_0x3bc567[_0x4b7a16(0xb0c)](_0x3d4b01);}}}),console[_0x4ccb6b(0x2f0)]('%c[sa'+_0x4ccb6b(0x794)+'\x20SW-W'+'RAPPE'+'R\x20ACT'+'IVE\x20('+'relay'+_0x4ccb6b(0x9c3)+'own)',_0x616644['OXrkn'](_0x4ccb6b(0x915)+':',_0x5ae3b3));return;}if(_0x375bc4){console[_0x4ccb6b(0x2f0)](_0x4ccb6b(0x350)+'kura]'+'\x20PORT'+'AL\x20AC'+_0x4ccb6b(0x569),_0x616644['EJjbG'](_0x616644['Xcolj']+_0x5ae3b3,_0x616644[_0x4ccb6b(0x17a)]),{'host':_0x3cbf7b});var _0x21e683={'set':function(){},'command':function(){}};function _0x65ec14(_0x53e8fa,_0x2f9d71){var _0x6ef631=_0x4ccb6b,_0x17ab19={'JpEfw':function(_0x2e9c3c,_0x56dae6){return _0x2e9c3c!==_0x56dae6;},'QFrji':_0x6ef631(0x78e)};if(_0x616644[_0x6ef631(0xa63)](_0x616644[_0x6ef631(0x455)],_0x616644[_0x6ef631(0x538)])){var _0x189a71={'__sakura':_0xf35bdd,'kind':_0x616644[_0x6ef631(0x280)],'cmd':_0x53e8fa,'arg':_0x2f9d71};try{if(_0x6ef631(0x18a)===_0x6ef631(0x18a)){var _0x57f3d4=document[_0x6ef631(0x789)+_0x6ef631(0x689)+'torAl'+'l']('ifram'+'e');for(var _0xbbe993=-0x1433+-0x1680+0x2ab3;_0xbbe993<_0x57f3d4['lengt'+'h'];_0xbbe993++){try{if(_0x6ef631(0x8b8)==='rVmit'){if(_0x57f3d4[_0xbbe993][_0x6ef631(0x6e3)+'ntWin'+_0x6ef631(0x267)])_0x57f3d4[_0xbbe993][_0x6ef631(0x6e3)+'ntWin'+'dow'][_0x6ef631(0x27d)+_0x6ef631(0x273)+'e'](_0x189a71,'*');}else try{return _0x13a878&&_0x455700['buffe'+'r']?_0x56b88b[_0x6ef631(0x14d)+'r'][_0x6ef631(0x821)+'ength']:0x5b3*0x1+0xc5f+-0x1212;}catch(_0x47fa64){return-0x176*-0x2+-0x3*0x1d+-0x295;}}catch(_0x507b63){}}}else try{return _0x50780a['getIt'+'em'](_0x3e1e7d)==='1';}catch(_0x3d2a60){return![];}}catch(_0xc4a741){}try{var _0xa47c6f=new BroadcastChannel(_0x6ef631(0x6f7)+'a-sw');_0xa47c6f['postM'+_0x6ef631(0x273)+'e'](_0x189a71),_0x616644[_0x6ef631(0x421)](setTimeout,function(){var _0x4b95cb=_0x6ef631;try{if(_0x17ab19['JpEfw']('NXSRM',_0x17ab19[_0x4b95cb(0x321)]))return _0x38cb57[_0x4b95cb(0x4d3)+'ified']=![],null;else _0xa47c6f[_0x4b95cb(0x45b)]();}catch(_0x366e63){}},0x18d8+-0x23a5+0xbc7);}catch(_0x3aab90){}}else{var _0x4da3a7=_0xece286(_0x3c757d+_0x57a54f(_0xc0a513[_0x392080][0x321+0xb9*0x35+-0x296e],0x914+-0x25ee+0x1*0x1cea),_0x616644['nuZwp']);if(_0x616644['yZhsg'](_0x4da3a7,_0x377ba2))_0x252246[_0x6ef631(0x5a7)][_0x2e19f2[_0x594f5f][0x4*0x4d5+0x10dc+-0x242f]]=_0x4da3a7;}}var _0xe1d18f=_0x4ccb6b(0x6f7)+_0x4ccb6b(0x5fe)+_0x4ccb6b(0x937)+_0x4ccb6b(0x26f)+'en';function _0x17597c(){var _0x552269=_0x4ccb6b;try{return _0x616644[_0x552269(0x637)](localStorage[_0x552269(0x158)+'em'](_0xe1d18f),'1');}catch(_0xa376d7){return![];}}function _0x2d9dc5(_0x59bd62){var _0x4e6a75=_0x4ccb6b,_0x3fef94={'UNjpv':function(_0x43e0bf,_0x297705){return _0x43e0bf(_0x297705);}};try{_0x4e6a75(0xb17)!==_0x4e6a75(0xb17)?_0x34d74e['textC'+_0x4e6a75(0x4e9)+'t']=_0x33144e(_0x5d5e82[_0x4e6a75(0x284)][_0x4e6a75(0x1d8)+'r'])[_0x4e6a75(0x186)+'ed'](0x77+-0xe1b+-0x1*-0xda5)+'x':_0x59bd62?localStorage['setIt'+'em'](_0xe1d18f,'1'):localStorage[_0x4e6a75(0x61c)+'eItem'](_0xe1d18f);}catch(_0x29f69e){}try{var _0x2f179c=document['getEl'+_0x4e6a75(0x77a)+_0x4e6a75(0xae4)](_0x4e6a75(0x6f7)+'a-sw-'+'v2');if(_0x2f179c)_0x2f179c['remov'+'e']();}catch(_0x96736d){}try{if(_0x616644['Cwiku'](_0x4e6a75(0x644),_0x4e6a75(0x414))){var _0x4cf284=document[_0x4e6a75(0x2ea)+_0x4e6a75(0x77a)+'ById'](_0x4e6a75(0x6f7)+_0x4e6a75(0x5fe)+_0x4e6a75(0x9a5)+'b');if(_0x59bd62&&!_0x4cf284&&document['body']){var _0x4f7cf6=('3|5|0'+_0x4e6a75(0x695)+'2')[_0x4e6a75(0xad1)]('|'),_0x20dc55=0x2192+-0x11*0xa0+-0x10b*0x16;while(!![]){switch(_0x4f7cf6[_0x20dc55++]){case'0':_0x230440[_0x4e6a75(0x28c)][_0x4e6a75(0x4bb)+'xt']=_0x616644[_0x4e6a75(0x927)](_0x616644[_0x4e6a75(0xb10)](_0x616644[_0x4e6a75(0xae9)](_0x616644['lLYnq'],'backg'+_0x4e6a75(0x799)+':rgba'+'(21,1'+_0x4e6a75(0x50a)+_0x4e6a75(0x566)+'order'+_0x4e6a75(0x1f9)+_0x4e6a75(0xb31)+'\x20rgba'+_0x4e6a75(0x465)+_0x4e6a75(0x910)+_0x4e6a75(0x543)+');col'+_0x4e6a75(0x8ef)),_0x5ae3b3),';')+_0x616644['dhCSZ'];continue;case'1':_0x230440['textC'+'onten'+'t']='sakur'+'a';continue;case'2':document[_0x4e6a75(0x388)]['appen'+_0x4e6a75(0x813)+'d'](_0x230440);continue;case'3':var _0x230440=document[_0x4e6a75(0x995)+_0x4e6a75(0x6a5)+_0x4e6a75(0x89b)]('div');continue;case'4':_0x230440[_0x4e6a75(0x3a6)+'ck']=function(){var _0xdba462=_0x4e6a75;_0x3fef94[_0xdba462(0x310)](_0x2d9dc5,![]),_0x624655();};continue;case'5':_0x230440['id']='sakur'+_0x4e6a75(0x5fe)+_0x4e6a75(0x9a5)+'b';continue;}break;}}else!_0x59bd62&&_0x4cf284&&_0x4cf284[_0x4e6a75(0x61c)+'e']();}else return _0x41d84a&&_0x4878a4[_0x4e6a75(0x14d)+'r']?_0x2a0350['buffe'+'r'][_0x4e6a75(0x821)+_0x4e6a75(0xb7)]:0xcf*-0x17+0x1*-0x233b+0xac4*0x5;}catch(_0x481221){}}function _0x28ecd9(){var _0x15e43e=_0x4ccb6b;if(_0x17597c())return null;var _0x56f9a4=document[_0x15e43e(0x2ea)+_0x15e43e(0x77a)+'ById'](_0x616644[_0x15e43e(0x700)]);if(_0x56f9a4)return _0x56f9a4;if(!document['body']||!document[_0x15e43e(0x388)]['appen'+_0x15e43e(0x813)+'d'])return null;try{if(!document[_0x15e43e(0x2ea)+_0x15e43e(0x77a)+'ById'](_0x616644[_0x15e43e(0x963)])){var _0x423d88=document[_0x15e43e(0x995)+'eElem'+_0x15e43e(0x89b)](_0x15e43e(0x28c));_0x423d88['id']=_0x15e43e(0x6f7)+'a-sw-'+_0x15e43e(0x7ba)+'s',_0x423d88[_0x15e43e(0xc9)+'onten'+'t']=_0x15e43e(0x3f3)+'ra-sw'+'-v2{a'+'ll:in'+_0x15e43e(0x4ca)+'}',(document[_0x15e43e(0x568)]||document[_0x15e43e(0x1e3)+'entEl'+'ement'])['appen'+_0x15e43e(0x813)+'d'](_0x423d88);}return _0x56f9a4=document['creat'+_0x15e43e(0x6a5)+_0x15e43e(0x89b)](_0x616644[_0x15e43e(0x404)]),_0x56f9a4['id']=_0x616644[_0x15e43e(0x700)],document[_0x15e43e(0x388)]['appen'+'dChil'+'d'](_0x56f9a4),_0x56f9a4;}catch(_0x5600b9){return null;}}function _0x624655(){var _0x11dc04=_0x4ccb6b,_0x4c8113=_0x616644['AVFck'](_0x28ecd9);if(!_0x4c8113)return _0x21e683;if(_0x4c8113['datas'+'et'][_0x11dc04(0x422)])return _0x4c8113['api'];try{return _0x5f4db7(_0x4c8113);}catch(_0x5b7274){return _0x4c8113[_0x11dc04(0x52b)+'et']['api']='1',_0x4c8113[_0x11dc04(0x422)]=_0x21e683,console[_0x11dc04(0x2a2)](_0x616644[_0x11dc04(0x974)],_0x616644[_0x11dc04(0xa54)]+_0x5ae3b3,_0x5b7274),_0x21e683;}}function _0x5f4db7(_0x485b0f){var _0x17f07a=_0x4ccb6b,_0x443bcc={'BbjKf':'close','quImU':_0x616644[_0x17f07a(0x730)],'NsKMz':_0x616644['ZNuSx'],'NMhxf':function(_0x1d8170,_0x551ce6){return _0x1d8170(_0x551ce6);},'QJeJm':function(_0x25021e,_0x321129){return _0x25021e+_0x321129;},'zZWae':function(_0x4001d5,_0x10184b){var _0x4ee0f8=_0x17f07a;return _0x616644[_0x4ee0f8(0x3f4)](_0x4001d5,_0x10184b);},'MbXpJ':function(_0x4f9e4e){return _0x4f9e4e();},'KhNmD':'color'+':','oVeNi':function(_0x46cdf7){return _0x46cdf7();},'xfuyM':function(_0x47115b,_0x149fbf){return _0x47115b+_0x149fbf;},'ldcwA':function(_0x5632be,_0xae54c){return _0x5632be<_0xae54c;},'PVzSF':_0x616644['vBYuo'],'tbjGF':function(_0x19ec7f,_0x4da5e3){return _0x19ec7f+_0x4da5e3;},'uQgAo':function(_0x20d165,_0x3fc135){return _0x20d165+_0x3fc135;},'CFhlR':function(_0x159caa,_0x357a5b){var _0x18f996=_0x17f07a;return _0x616644[_0x18f996(0x376)](_0x159caa,_0x357a5b);},'cOHzS':_0x616644['JjiqO'],'KBJlb':_0x17f07a(0x16a)+'once\x20'+'durin'+_0x17f07a(0x192)+'Assem'+_0x17f07a(0x88a)+'nstan'+_0x17f07a(0x613)+_0x17f07a(0x4da)+_0x17f07a(0xa38)+_0x17f07a(0xa3f)+'plugi'+_0x17f07a(0x531)+_0x17f07a(0xa98)+_0x17f07a(0x767)+'\x20','JkutV':_0x616644[_0x17f07a(0x23a)],'eXbSS':_0x616644[_0x17f07a(0x878)],'hikoZ':function(_0x471eea,_0x3a1653){return _0x471eea+_0x3a1653;},'THrhT':function(_0x13533c,_0x2b2749){return _0x616644['aZNKz'](_0x13533c,_0x2b2749);},'wrRol':_0x616644['dPgwL'],'DFQhb':_0x616644[_0x17f07a(0x9cc)]};_0x485b0f['style'][_0x17f07a(0x4bb)+'xt']=_0x616644['rSFgO'](_0x616644['Jhrup']('posit'+_0x17f07a(0x874)+'ixed;'+_0x17f07a(0x394)+_0x17f07a(0x1d0)+'top:1'+_0x17f07a(0x706)+'-inde'+_0x17f07a(0x748)+'74830'+_0x17f07a(0x72c)+_0x17f07a(0x2a7)+'th:mi'+_0x17f07a(0xaa)+'w,620'+_0x17f07a(0x746)+_0x17f07a(0x545)+'ight:'+_0x17f07a(0x202),'backg'+_0x17f07a(0x799)+_0x17f07a(0x8fe)+'c1d;c'+'olor:'+_0x17f07a(0x22f)+'f5;bo'+_0x17f07a(0x35f)+_0x17f07a(0x986)+'olid\x20'+_0x17f07a(0x22b)+_0x17f07a(0x4b0)+'43,17'+'7,.5)'+_0x17f07a(0xf9)+_0x17f07a(0x112)+'dius:'+_0x17f07a(0x3cb)),_0x616644[_0x17f07a(0x37e)])+(_0x17f07a(0x95a)+_0x17f07a(0x306)+_0x17f07a(0xf4)+'ex-di'+_0x17f07a(0xa37)+_0x17f07a(0x9d6)+'lumn;'+'overf'+'low:h'+_0x17f07a(0xa96)+';'),_0x485b0f[_0x17f07a(0x1b9)+'HTML']=_0x616644[_0x17f07a(0x376)](_0x616644['aZNKz'](_0x616644[_0x17f07a(0xae9)](_0x616644['Jhrup'](_0x616644['oPuct'](_0x616644['oPuct'](_0x616644['EeszK'](_0x17f07a(0xab2)+'style'+'=\x22pad'+_0x17f07a(0xbf)+'9px\x201'+_0x17f07a(0x549)+_0x17f07a(0x224)+_0x17f07a(0xaec)+'om:1p'+_0x17f07a(0x2fa)+_0x17f07a(0xb15)+_0x17f07a(0x824)+_0x17f07a(0x2bf)+_0x17f07a(0x333)+_0x17f07a(0x92b)+_0x17f07a(0x2e3)+'y:fle'+'x;gap'+_0x17f07a(0x33c)+'align'+_0x17f07a(0xa3a)+_0x17f07a(0x616)+'ter;f'+_0x17f07a(0xa21)+_0x17f07a(0x99e)+_0x17f07a(0xaf5)+(_0x17f07a(0x339)+_0x17f07a(0x7ef)+_0x17f07a(0x915)+':'),_0x5ae3b3)+(_0x17f07a(0x412)+_0x17f07a(0x7ce)+_0x17f07a(0x656)+'lwarz'+_0x17f07a(0x80d))+_0x616644[_0x17f07a(0x8b9)],'<span'+_0x17f07a(0x481)+'sw2-s'+'tatus'+_0x17f07a(0x672)+'le=\x22c'+'olor:'+_0x17f07a(0xcb)+_0x17f07a(0x49e)+_0x17f07a(0x3dc)+'g\x20for'+_0x17f07a(0x810)+_0x17f07a(0x1f5)+'e…</s'+'pan>')+(_0x17f07a(0xa4a)+_0x17f07a(0x4c4)+'=\x22sw2'+_0x17f07a(0xaf8)+_0x17f07a(0x672)+'le=\x22d'+'ispla'+'y:non'+'e;mar'+_0x17f07a(0x530)+'eft:a'+_0x17f07a(0x65d)+'ackgr'+_0x17f07a(0xa81))+_0x5ae3b3+_0x616644['hIeui']+_0x616644['oulTb']+_0x616644[_0x17f07a(0x139)]+_0x616644[_0x17f07a(0x657)]+_0x616644[_0x17f07a(0x61b)],_0x616644['bYzHb'])+('<butt'+'on\x20id'+'=\x22sw2'+'-spee'+_0x17f07a(0x338)+'yle=\x22'+_0x17f07a(0x7db)+'round'+_0x17f07a(0xabc)+_0x17f07a(0xac7)+'nt;bo'+_0x17f07a(0x35f)+'1px\x20s'+_0x17f07a(0xd4)+_0x17f07a(0x22b)+_0x17f07a(0x4b0)+'43,17'+_0x17f07a(0x814)+';colo'+_0x17f07a(0x153)+_0x17f07a(0x193)+'borde'+_0x17f07a(0x4f5)+_0x17f07a(0x534)+_0x17f07a(0x9b9)+_0x17f07a(0xac2)+_0x17f07a(0x368)+'10px;'+'curso'+'r:poi'+'nter;'+'\x22>Spe'+_0x17f07a(0x9b8)+'f</bu'+'tton>')+_0x616644[_0x17f07a(0x3d8)]+_0x5ae3b3,';\x22>'),'<span'+_0x17f07a(0x481)+'sw2-f'+_0x17f07a(0x17f)+_0x17f07a(0x8c1)+_0x17f07a(0x672)+'le=\x22c'+_0x17f07a(0x57e)+'#bda9'+_0x17f07a(0x79f)+_0x17f07a(0xa4f)+'th:34'+_0x17f07a(0xa10)+'1.0x<'+'/span'+'>')+_0x616644[_0x17f07a(0xaf3)]+_0x616644[_0x17f07a(0x4a5)],'</div'+'>'),_0x616644['SvBBx'])+_0x616644['jVhoV']+(_0x17f07a(0x451)+'>');var _0x5bc7fa=_0x485b0f[_0x17f07a(0x789)+_0x17f07a(0x689)+_0x17f07a(0x5b2)]('#sw2-'+_0x17f07a(0xa8b)+'s'),_0x4bb8ef=_0x485b0f['query'+_0x17f07a(0x689)+_0x17f07a(0x5b2)](_0x17f07a(0x8d8)+_0x17f07a(0x7cb)),_0x1262e8=_0x485b0f[_0x17f07a(0x789)+'Selec'+_0x17f07a(0x5b2)](_0x17f07a(0x8d8)+'out'),_0x39d680=_0x485b0f[_0x17f07a(0x789)+'Selec'+_0x17f07a(0x5b2)]('#sw2-'+'copy'),_0x4613f8=_0x485b0f['query'+_0x17f07a(0x689)+'tor'](_0x17f07a(0x8d8)+'x'),_0x3d7b46=_0x485b0f['query'+_0x17f07a(0x689)+_0x17f07a(0x5b2)](_0x616644[_0x17f07a(0x673)]),_0x5b2a26=_0x485b0f['query'+_0x17f07a(0x689)+_0x17f07a(0x5b2)](_0x616644[_0x17f07a(0x6ee)]),_0x44984b=_0x485b0f[_0x17f07a(0x789)+'Selec'+_0x17f07a(0x5b2)](_0x616644[_0x17f07a(0x2af)]),_0x276e81=_0x485b0f['query'+_0x17f07a(0x689)+'tor']('#sw2-'+'speed'),_0x5a2a80=_0x485b0f[_0x17f07a(0x789)+'Selec'+'tor'](_0x616644[_0x17f07a(0x127)]),_0x48abf3=_0x485b0f['query'+_0x17f07a(0x689)+'tor'](_0x616644[_0x17f07a(0xd6)]),_0x6f2ba=_0x485b0f[_0x17f07a(0x789)+'Selec'+_0x17f07a(0x5b2)](_0x616644[_0x17f07a(0x29b)]),_0x42d6fa=null,_0x832b56=![];function _0x358d0e(){var _0x116bec=_0x17f07a;if(_0x5b2a26)_0x5b2a26['style']['displ'+'ay']=_0x832b56?'':_0x116bec(0xa71);if(_0x3d7b46)_0x3d7b46[_0x116bec(0xc9)+'onten'+'t']=_0x832b56?_0x443bcc[_0x116bec(0x67a)]:_0x116bec(0x305);_0x485b0f['style'][_0x116bec(0x398)]=_0x832b56?_0x443bcc['quImU']:_0x116bec(0x3bc),_0x485b0f[_0x116bec(0x28c)]['backg'+_0x116bec(0x799)]=_0x832b56?_0x116bec(0x8df)+'1d':_0x116bec(0x22b)+_0x116bec(0x94c)+_0x116bec(0xb9)+'9)';}if(_0x3d7b46)_0x3d7b46['oncli'+'ck']=function(){var _0x49c79d=_0x17f07a;_0x443bcc['NsKMz']!==_0x443bcc[_0x49c79d(0x990)]?_0x1f4679():(_0x832b56=!_0x832b56,_0x358d0e());};_0x616644[_0x17f07a(0x162)](_0x358d0e);if(_0x4613f8)_0x4613f8[_0x17f07a(0x3a6)+'ck']=function(){var _0x3af25d=_0x17f07a,_0x2e1dbc={'bAZLN':_0x3af25d(0x3bc)};if(_0x3af25d(0x239)===_0x3af25d(0x239))_0x2d9dc5(!![]);else{var _0x393ff7=_0xeeb161['root'];if(!_0x393ff7||!_0x393ff7[_0x3af25d(0x28c)])return;_0x1f6db3[_0x3af25d(0x2b2)]?(_0x393ff7['style'][_0x3af25d(0x2be)]=_0x211552[_0x3af25d(0x2b2)]['x']+'px',_0x393ff7['style']['top']=_0x4e1632['pos']['y']+'px',_0x393ff7[_0x3af25d(0x28c)][_0x3af25d(0x88c)]='auto',_0x393ff7['style']['botto'+'m']='auto'):(_0x393ff7['style']['left']=_0x2e1dbc[_0x3af25d(0x293)],_0x393ff7[_0x3af25d(0x28c)]['top']=_0x3af25d(0x3bc),_0x393ff7['style'][_0x3af25d(0x88c)]=_0x3af25d(0x886),_0x393ff7['style'][_0x3af25d(0xb21)+'m']=_0x3af25d(0x886));}};if(_0x44984b)_0x44984b['oncli'+'ck']=function(){var _0x4418d4=_0x17f07a,_0x406bbf={'OOWjV':function(_0x643d5c,_0x107f5d){return _0x643d5c<_0x107f5d;},'yTBcX':function(_0x2d01ac,_0x5f2154){return _0x2d01ac+_0x5f2154;}};if(_0x616644[_0x4418d4(0x2ca)]('bWJLZ',_0x4418d4(0x565)))_0x65ec14(_0x616644[_0x4418d4(0x129)]);else{_0x2dc140[_0x4418d4(0xb0c)](_0x4418d4(0xd3)+'ngs');for(var _0xabf64a=-0x7d0*-0x3+-0x1f3+-0x1*0x157d;_0x406bbf[_0x4418d4(0x907)](_0xabf64a,_0xaabb7['warni'+_0x4418d4(0x92e)][_0x4418d4(0xc4)+'h']);_0xabf64a++)_0x26b12b[_0x4418d4(0xb0c)](_0x406bbf['yTBcX']('\x20\x20!\x20',_0x2dcde5[_0x4418d4(0xd3)+'ngs'][_0xabf64a]));}};var _0x4e4434=![];function _0x1e8486(){var _0x4c0083=_0x17f07a;_0x65ec14(_0x4c0083(0x284),{'on':_0x4e4434,'factor':_0x443bcc['NMhxf'](parseFloat,_0x5a2a80[_0x4c0083(0x5eb)])||0x2651*-0x1+0x138f+0x12c3});}if(_0x276e81)_0x276e81['oncli'+'ck']=function(){var _0x8a3820=_0x17f07a,_0x425dd9=(_0x8a3820(0xa1)+'|4|2')[_0x8a3820(0xad1)]('|'),_0x549d7a=-0x657*0x2+-0x2b3*0xa+0x13d6*0x2;while(!![]){switch(_0x425dd9[_0x549d7a++]){case'0':_0x4e4434=!_0x4e4434;continue;case'1':_0x276e81['textC'+_0x8a3820(0x4e9)+'t']=_0x4e4434?_0x8a3820(0x837)+_0x8a3820(0x497):_0x616644[_0x8a3820(0x3b0)];continue;case'2':_0x616644[_0x8a3820(0x63c)](_0x1e8486);continue;case'3':_0x276e81[_0x8a3820(0x28c)]['backg'+_0x8a3820(0x799)]=_0x4e4434?_0x5ae3b3:_0x8a3820(0x36c)+'paren'+'t';continue;case'4':_0x276e81['style'][_0x8a3820(0x915)]=_0x4e4434?'#2a0f'+'1b':_0x616644[_0x8a3820(0xa35)];continue;}break;}};if(_0x5a2a80)_0x5a2a80[_0x17f07a(0xad0)+'ut']=function(){var _0x169089=_0x17f07a;if(_0x48abf3)_0x48abf3[_0x169089(0xc9)+_0x169089(0x4e9)+'t']=_0x443bcc[_0x169089(0x68c)]((_0x443bcc[_0x169089(0xa48)](parseFloat,_0x5a2a80[_0x169089(0x5eb)])||-0x1*0x1839+0x1084+-0x149*-0x6)[_0x169089(0x186)+'ed'](0x83e+-0xee7+0x6aa),'x');_0x443bcc[_0x169089(0x22e)](_0x1e8486);};if(_0x39d680)_0x39d680['oncli'+'ck']=function(){var _0x1e026e=_0x17f07a,_0x2ebcdf={'kSiSu':_0x443bcc['KhNmD'],'iEWYt':_0x1e026e(0xa9f),'SajwO':_0x1e026e(0x6e6)},_0x5d5c19=_0x443bcc[_0x1e026e(0x68c)](_0x66cc24+'\x0a'+(_0x42d6fa?JSON[_0x1e026e(0x89c)+'gify'](_0x42d6fa,null,-0x1cf7+-0x1420+0x1*0x3118):''),'\x0a')+_0x1e4295,_0x30d737=function(){var _0x50ad6d=_0x1e026e;if(_0x39d680)_0x39d680['textC'+'onten'+'t']=_0x50ad6d(0x582)+'d';};if(navigator[_0x1e026e(0x2c9)+'oard']&&navigator['clipb'+'oard']['write'+'Text'])navigator['clipb'+'oard'][_0x1e026e(0x312)+'Text'](_0x5d5c19)[_0x1e026e(0x712)](_0x30d737,function(){_0x48d08d();});else _0x443bcc['oVeNi'](_0x48d08d);function _0x48d08d(){var _0x29384f=_0x1e026e,_0x310cfa=document[_0x29384f(0x995)+'eElem'+'ent']('texta'+_0x29384f(0x5f6));_0x310cfa['value']=_0x5d5c19;if(!document[_0x29384f(0x388)])return;document['body'][_0x29384f(0x49f)+_0x29384f(0x813)+'d'](_0x310cfa),_0x310cfa['selec'+'t']();try{'ufygg'!==_0x2ebcdf['iEWYt']?(document[_0x29384f(0x387)+'omman'+'d'](_0x2ebcdf['SajwO']),_0x30d737()):_0x31dd64[_0x29384f(0x2a2)]('%c[sa'+_0x29384f(0x794)+_0x29384f(0x151)+_0x29384f(0x2a6)+_0x29384f(0x745)+'ailed',_0x2ebcdf['kSiSu']+_0x4955f2,_0x47f6b2);}catch(_0x2eda47){}_0x310cfa['remov'+'e']();}};setTimeout(function(){var _0x374ea2=_0x17f07a;if(_0x616644['lNbQz'](_0x374ea2(0x7e1),_0x616644[_0x374ea2(0x31f)]))return _0x25051d[-0xc95*-0x1+0x1f*-0x71+0x11a]=_0x2bbf8d,_0x3644e0[0x971+0xb6f+-0x14e0];else{if(_0x42d6fa)return;if(_0x616644['mXlyw'](!_0x5bc7fa,!_0x1262e8))return;_0x5bc7fa[_0x374ea2(0xc9)+_0x374ea2(0x4e9)+'t']=_0x616644[_0x374ea2(0x54c)],_0x5bc7fa['style'][_0x374ea2(0x915)]=_0x374ea2(0x643)+'c7',_0x1262e8[_0x374ea2(0xc9)+'onten'+'t']=_0x616644[_0x374ea2(0xae9)](_0x616644['ZmUBe'](_0x616644['WbrGl'],'This\x20'+_0x374ea2(0x937)+_0x374ea2(0x14f)+_0x374ea2(0x3ff)+_0x374ea2(0xb0f)+_0x374ea2(0xbd)+'pt\x20IS'+_0x374ea2(0x479)+_0x374ea2(0x88d)+_0x374ea2(0x4da)+_0x374ea2(0x3d7)+_0x374ea2(0xa65)+_0x374ea2(0xaa8)+_0x374ea2(0x2d7)+_0x374ea2(0xb02)),_0x616644['ZVvyh'])+(_0x374ea2(0x68b)+_0x374ea2(0x843)+_0x374ea2(0x123)+_0x374ea2(0x214)+_0x374ea2(0xb18)+_0x374ea2(0x4f4)+'ting\x20'+_0x374ea2(0xf3)+_0x374ea2(0xadd)+_0x374ea2(0x839)+_0x374ea2(0x528)+_0x374ea2(0x515)+'ame.\x0a')+(_0x374ea2(0x5df)+_0x374ea2(0x7ab)+_0x374ea2(0x436)+_0x374ea2(0x744)+'t\x20bee'+_0x374ea2(0xacb)+_0x374ea2(0x53c)+_0x374ea2(0xae6)+_0x374ea2(0x3e2)+'talli'+_0x374ea2(0x270))+(_0x374ea2(0x2ab)+_0x374ea2(0x35e)+'sakur'+'a.ski'+_0x374ea2(0xa4)+'z.use'+_0x374ea2(0x9e)+'AND\x20t'+_0x374ea2(0xa9d)+_0x374ea2(0x2f7)+_0x374ea2(0x17d)+_0x374ea2(0x999)+_0x374ea2(0xac9))+_0x616644[_0x374ea2(0x921)]+_0x616644['gkzQY'];}},-0x6949*-0x4+0x1a0f1+-0x25bb5);var _0x42ae7e={'set':function(_0x387bef){var _0x351382=_0x17f07a,_0x583b06={'UpyMZ':function(_0x4d841e,_0x1813e2){return _0x4d841e===_0x1813e2;},'hxcuT':_0x351382(0xa86)+'n._ru'+_0x351382(0xa18)+_0x351382(0x8c3)+'lveGa'+_0x351382(0x9d5),'HAWcm':function(_0x244274,_0x1567df){return _0x244274+_0x1567df;}};if(_0x616644[_0x351382(0xa63)](_0x616644['nEsGa'],_0x351382(0x5f2)))return _0x443bcc[_0x351382(0xa5e)]('0x'+(_0x443bcc[_0x351382(0xae0)](_0x2b2abf['o'],0x1ce8+-0x2401+0x1*0x719)?'?':_0x2d161a['o'][_0x351382(0x834)+'ing'](0x192+-0x1de+-0x2*-0x2e))+'\x20(',_0x1b3905[_0x351382(0x7f2)])+')';else{_0x42d6fa=_0x387bef;if(_0x39d680)_0x39d680[_0x351382(0x28c)][_0x351382(0x95a)+'ay']='';if(_0x4bb8ef){_0x4bb8ef[_0x351382(0xc9)+_0x351382(0x4e9)+'t']=_0x616644[_0x351382(0x98d)]('v',_0x387bef['versi'+'on']||'?');var _0x98d3f7=_0x143793,_0x32b992=_0x387bef[_0x351382(0x2b8)+'on']||'';_0x4bb8ef[_0x351382(0x28c)][_0x351382(0x915)]=_0x616644['zkDRY'](_0x32b992,_0x98d3f7)?_0x5ae3b3:_0x351382(0xa20)+'74',_0x4bb8ef[_0x351382(0x28c)]['borde'+_0x351382(0x891)+'r']=_0x32b992===_0x98d3f7?_0x616644[_0x351382(0xb2f)]:_0x351382(0xa20)+'74';}var _0x657e6d=_0x387bef['insta'+_0x351382(0x121)]&&_0x387bef['insta'+_0x351382(0x121)]['FPSco'+_0x351382(0x259)+_0x351382(0x64f)],_0x1ecb5c=Math['round'](_0x616644[_0x351382(0x684)](_0x387bef['elaps'+_0x351382(0x33f)]||0x1*0x8d5+0x14db+-0x1db0,0x1db2+0x28*0xce+-0x39fa));if(_0x5bc7fa){var _0x2d276b,_0x29f4c9;if(_0x657e6d&&_0x387bef['surve'+'y']&&_0x387bef[_0x351382(0x116)+'y']['FPSco'+_0x351382(0x259)+_0x351382(0x64f)]){if(_0x616644['sFAYC']!==_0x616644['sFAYC'])return _0x3d4de7['datas'+'et'][_0x351382(0x422)]='1',_0x20d2f1[_0x351382(0x422)]=_0x2e1a8a,_0x126911[_0x351382(0x2a2)](_0x443bcc[_0x351382(0x992)],_0x443bcc['KhNmD']+_0x1f5963,_0x477801),_0x13a72f;else _0x2d276b=_0x616644['wSUIo'](_0x616644[_0x351382(0xae9)](_0x616644['lowjH'](_0x616644[_0x351382(0x927)]('LIVE\x20'+'·\x20',Object[_0x351382(0x1b3)](_0x387bef[_0x351382(0x198)+_0x351382(0x121)])[_0x351382(0xc4)+'h']),'\x20obje'+_0x351382(0x8c8)+'\x20'),_0x1ecb5c),'s'),_0x29f4c9=_0x616644[_0x351382(0x1ae)];}else{if(_0x387bef['hooks'+'Appli'+'ed']>-0xe62+-0x6*0x679+0x1*0x3538)_0x2d276b=_0x616644[_0x351382(0xae9)](_0x616644[_0x351382(0x696)]+_0x1ecb5c,'s'),_0x29f4c9=_0x616644['XVSjP'];else{if(_0x387bef[_0x351382(0x24e)+_0x351382(0x895)]){if(_0x616644['lHHMq'](_0x351382(0x15f),_0x616644['ZVbnw'])){var _0x128d8f=_0x497d65[_0x351382(0xadb)+_0x351382(0x733)];if(_0x583b06['UpyMZ'](typeof _0x128d8f['resol'+_0x351382(0x66b)+'e'],'funct'+_0x351382(0xa42))){var _0x2b661d=_0x128d8f[_0x351382(0x4b1)+_0x351382(0x66b)+'e']();if(_0x2b661d)return _0x23e739[_0x351382(0x7eb)+'e']=_0x583b06['hxcuT'],_0x2b661d;}if(_0x128d8f[_0x351382(0x964)])return _0x572edf[_0x351382(0x7eb)+'e']=_0x351382(0xa86)+'n._ru'+'ntime'+_0x351382(0x514)+'e',_0x128d8f['_game'];}else _0x2d276b=_0x616644[_0x351382(0x99d)](_0x616644['jGInQ'],_0x1ecb5c)+'s',_0x29f4c9=_0x616644[_0x351382(0x372)];}else _0x2d276b=_0x616644['oNblB'](_0x616644['oPuct'](_0x387bef['arm']&&_0x387bef[_0x351382(0x27c)]['ok']?'armed'+'\x20·\x20':'armin'+_0x351382(0x2aa),_0x1ecb5c),'s'),_0x29f4c9='#ffd4'+'8a';}}_0x5bc7fa[_0x351382(0xc9)+_0x351382(0x4e9)+'t']=_0x2d276b,_0x5bc7fa['style'][_0x351382(0x915)]=_0x29f4c9;}_0x6f2ba&&(_0x6f2ba[_0x351382(0xc9)+'onten'+'t']=_0x387bef['diff']&&_0x387bef[_0x351382(0x43d)][_0x351382(0xc4)+'h']?'Diff\x20'+'vs\x20sn'+'apsho'+'t:\x20'+_0x387bef[_0x351382(0x43d)][_0x351382(0xb2)](',\x20'):_0x616644[_0x351382(0x6ed)]);if(_0x387bef[_0x351382(0x284)]&&_0x276e81){_0x4e4434=!!_0x387bef['speed']['on'],_0x276e81[_0x351382(0xc9)+_0x351382(0x4e9)+'t']=_0x4e4434?_0x351382(0x837)+'\x20ON':'Speed'+_0x351382(0x9c2),_0x276e81['style']['backg'+'round']=_0x4e4434?_0x5ae3b3:'trans'+'paren'+'t',_0x276e81[_0x351382(0x28c)][_0x351382(0x915)]=_0x4e4434?_0x351382(0x231)+'1b':'#f7ee'+'f5';if(_0x48abf3&&_0x387bef[_0x351382(0x284)][_0x351382(0x1d8)+'r']){if(_0x616644[_0x351382(0x39c)](_0x616644['XxZGx'],_0x351382(0x167)))_0x48abf3['textC'+_0x351382(0x4e9)+'t']=_0x616644['HjNNL'](Number,_0x387bef[_0x351382(0x284)][_0x351382(0x1d8)+'r'])[_0x351382(0x186)+'ed'](0x83f*-0x3+-0x355*0x3+0x22bd)+'x';else return{'o':_0x583b06['HAWcm']('0x',_0xa18e87[0x482*0x1+-0x233d+0x1ebb]['toStr'+'ing'](-0x16d1+-0x13af*-0x1+0x332)),'v':_0x635316(_0x65fbd2+_0x423063[0x3*0xc5+-0x92f+0x6e0],_0x3bfc68[-0x12ae*-0x2+0xc7*0x2e+-0x491d])};}}if(_0x1262e8)try{_0x1262e8['textC'+'onten'+'t']=_0x616644['zrbaD'](_0x39ba1f,_0x387bef);}catch(_0x5979e3){_0x616644[_0x351382(0x89a)]===_0x616644[_0x351382(0x89a)]?_0x1262e8['textC'+'onten'+'t']=JSON['strin'+'gify'](_0x387bef,null,-0x1e99*0x1+-0x1304+-0x319e*-0x1):_0x3a73c7['hooks'+_0x351382(0x382)+_0x351382(0xa6c)]===0x1272+0x1*-0x3aa+-0xec8?_0x24136d['warni'+'ngs'][_0x351382(0xb0c)](_0x443bcc['tbjGF'](_0x443bcc['uQgAo'](_0x443bcc['CFhlR']('0\x20of\x20',_0xde436a[_0x351382(0x940)+'Total'])+_0x443bcc[_0x351382(0x37f)],_0x443bcc[_0x351382(0x8fa)])+(_0x351382(0x3c9)+_0x351382(0x519)+_0x351382(0x211)+_0x351382(0xaee)+'after'+_0x351382(0x786)+'re\x20ig'+_0x351382(0x18d)+'\x20for\x20'+_0x351382(0x9f4)+'ife\x20o'+_0x351382(0x411)+'\x20page'+'.\x20')+_0x443bcc['JkutV']+_0x1435a1['hooks'+'Regis'+'tered'+_0x351382(0x8ff)],_0x443bcc['eXbSS'])):_0x471c8f['warni'+_0x351382(0x92e)][_0x351382(0xb0c)](_0x443bcc['xfuyM'](_0x443bcc[_0x351382(0x605)](_0x443bcc[_0x351382(0x1ff)](_0x443bcc['wrRol'],_0x23fb7d['hooks'+_0x351382(0x382)+'ved'])+_0x443bcc['DFQhb']+_0x7f3eb0['hooks'+_0x351382(0x5cc)],'\x20hook'+_0x351382(0x16b)+_0x351382(0x16e)+'able\x20'+_0x351382(0x820)+_0x351382(0x323)+_0x351382(0x4c2)+'ed\x20no'+_0x351382(0xa13)+'he\x20si'+_0x351382(0xe5)+_0x351382(0x3eb)),'(this'+_0x351382(0xa7f)+'hodIn'+_0x351382(0x2cf)+_0x351382(0x9c5)+'id\x20do'+_0x351382(0x141)+_0x351382(0xa9b)+'ch\x20th'+_0x351382(0x9a6)+'ild.'));}console[_0x351382(0x2f0)](_0x616644['SyLSB'],_0x616644[_0x351382(0x40f)](_0x616644['Qieno'](_0x616644[_0x351382(0xa54)],_0x5ae3b3),_0x351382(0x3a8)+_0x351382(0xa7c)+_0x351382(0x756)+'0'),_0x387bef),console['log'](_0x616644['oPuct'](_0x616644[_0x351382(0xa87)](_0x66cc24,'\x0a')+JSON['strin'+_0x351382(0x403)](_0x387bef,null,0x2*0x1022+-0xc2*0x20+0x7*-0x125),'\x0a')+_0x1e4295);}}};return _0x485b0f[_0x17f07a(0x52b)+'et']['api']='1',_0x485b0f[_0x17f07a(0x422)]=_0x42ae7e,_0x42ae7e;}function _0x39ba1f(_0x49f41e){var _0x27eae2=_0x4ccb6b,_0x209f9f=[];_0x209f9f[_0x27eae2(0xb0c)](_0x616644[_0x27eae2(0x927)](_0x616644[_0x27eae2(0x5a0)](_0x27eae2(0x349)+'\x20\x20\x20\x20',_0x49f41e[_0x27eae2(0x61d)]||'?')+_0x27eae2(0x8dd),Math['round']((_0x49f41e['elaps'+_0x27eae2(0x33f)]||-0xe8c+-0x2e*-0xa7+-0xf76)/(-0xbb1+-0x1f*0xb3+0x2546)))+'s)'),_0x209f9f[_0x27eae2(0xb0c)](_0x616644[_0x27eae2(0xaad)](_0x616644['CtBix'](_0x616644[_0x27eae2(0x26c)]+(_0x49f41e['uwmk']?_0x616644[_0x27eae2(0x6e8)]:'no'),'\x20\x20\x20co'+'ntext'+'\x20')+(_0x49f41e[_0x27eae2(0x2f5)+_0x27eae2(0x8b1)+'ext']?'yes':'no')+_0x616644['nUTiN'],_0x616644[_0x27eae2(0x19e)](_0x49f41e['typeC'+_0x27eae2(0x94b)],null)?_0x49f41e[_0x27eae2(0x44b)+'ount']:'?')),_0x209f9f['push'](_0x616644[_0x27eae2(0x299)](_0x27eae2(0x940)+'\x20\x20\x20\x20'+_0x49f41e['hooks'+'Appli'+'ed'],'/')+_0x49f41e[_0x27eae2(0x940)+'Total']+(_0x27eae2(0x4cf)+_0x27eae2(0x5ec))),_0x209f9f[_0x27eae2(0xb0c)]('');var _0x5328b3=_0x49f41e['insta'+_0x27eae2(0x121)]||{},_0x4d1c94=Object['keys'](_0x5328b3);!_0x4d1c94['lengt'+'h']&&(_0x209f9f[_0x27eae2(0xb0c)](_0x27eae2(0x46a)+'ve\x20ob'+_0x27eae2(0x11a)+_0x27eae2(0xab5)+'ured\x20'+'yet.'),_0x209f9f['push'](''),_0x209f9f[_0x27eae2(0xb0c)](_0x27eae2(0x257)+'ooks\x20'+_0x27eae2(0x51d)+'on\x20th'+_0x27eae2(0x5f5)+'e\x27s\x20o'+_0x27eae2(0x4dc)+_0x27eae2(0x87c)+');\x20no'+'thing'+'\x20capt'+_0x27eae2(0x7ae)+'means'),_0x209f9f[_0x27eae2(0xb0c)](_0x27eae2(0x4cb)+_0x27eae2(0x819)+_0x27eae2(0xd0)+'et,\x20o'+_0x27eae2(0x5ad)+'\x20sign'+'ature'+_0x27eae2(0x902)+'not\x20m'+'atch.'));for(var _0x1b3767=0xf67+0x2151+-0x30b8;_0x1b3767<_0x4d1c94['lengt'+'h'];_0x1b3767++){if(_0x616644[_0x27eae2(0x898)](_0x616644[_0x27eae2(0x3ef)],_0x27eae2(0x90c))){var _0x2691bc=_0x4d1c94[_0x1b3767];_0x209f9f['push'](_0x2691bc+_0x27eae2(0x966)+_0x5328b3[_0x2691bc]);}else _0x4c25db[_0x27eae2(0x546)]=_0x3b4110(_0x152510&&_0x3cb321['messa'+'ge']||_0x21744d);}_0x209f9f[_0x27eae2(0xb0c)]('');var _0x167246=_0x49f41e[_0x27eae2(0x116)+'y']||{},_0x4aa3a2=Object[_0x27eae2(0x1b3)](_0x167246);for(var _0x2bd94d=-0x25*-0x31+-0x7*0x467+0x17bc;_0x2bd94d<_0x4aa3a2['lengt'+'h'];_0x2bd94d++){var _0x7520ca=_0x4aa3a2[_0x2bd94d],_0x345095=_0x167246[_0x7520ca];if(!_0x345095||!_0x345095[_0x27eae2(0xc4)+'h'])continue;_0x209f9f[_0x27eae2(0xb0c)](_0x616644[_0x27eae2(0xb10)](_0x616644[_0x27eae2(0x83e)]+_0x7520ca+'\x20',new Array(Math['max'](-0x1ff1+0x1*-0x481+-0xd9*-0x2b,0x430*0x4+0x35*-0x49+-0x181-_0x7520ca['lengt'+'h']))[_0x27eae2(0xb2)]('─'))),_0x209f9f[_0x27eae2(0xb0c)](_0x27eae2(0x3bb)+_0x27eae2(0x6b8)+_0x27eae2(0x83b)+_0x27eae2(0x978)+_0x27eae2(0x2f6)+'lue\x20\x20'+_0x27eae2(0x978)+'\x20\x20\x20\x20\x20'+'raw');for(var _0x373574=0x18f0+0x78e*-0x1+-0x1162;_0x373574<_0x345095[_0x27eae2(0xc4)+'h'];_0x373574++){var _0xdc903e=_0x345095[_0x373574],_0x191a2c=_0x616644[_0x27eae2(0x4f0)](typeof _0xdc903e['v'],_0x616644[_0x27eae2(0x2f3)])?_0x616644['QLUVE'](Math['round'](_0xdc903e['v']*(0x978+0x1*0x24f7+-0x2a87)),-0x2431+0x41*0x3d+-0x1c2*-0xe):_0xdc903e['v'];_0x209f9f['push'](_0x616644[_0x27eae2(0x20c)](_0x616644['wiEvK'](_0x616644['pVttl'](_0x616644[_0x27eae2(0x432)]('\x20\x20'+_0x616644[_0x27eae2(0x3e7)]('0x',_0xdc903e['o'][_0x27eae2(0x834)+'ing'](-0xcb*-0x25+0x121d*-0x1+-0xb2a))['padEn'+'d'](0xbd*-0x7+0x1c*0x127+-0x215*0xd),'\x20'),_0xdc903e['k'][_0x27eae2(0x16f)+'d'](-0x337*-0x2+-0x1767+0x1104))+'\x20',String(_0x191a2c)[_0x27eae2(0x16f)+'d'](0x71*0x1f+-0x1*-0x1d95+-0x2b34)),'\x20')+(_0xdc903e[_0x27eae2(0x29d)]||''));}_0x209f9f[_0x27eae2(0xb0c)]('');}if(_0x49f41e['warni'+'ngs']&&_0x49f41e['warni'+'ngs']['lengt'+'h']){_0x209f9f['push'](_0x616644[_0x27eae2(0x19f)]);for(var _0x4e9af8=0x3*0x34e+0x1327+-0x1d11;_0x616644[_0x27eae2(0x7af)](_0x4e9af8,_0x49f41e[_0x27eae2(0xd3)+_0x27eae2(0x92e)]['lengt'+'h']);_0x4e9af8++)_0x209f9f['push']('\x20\x20!\x20'+_0x49f41e['warni'+_0x27eae2(0x92e)][_0x4e9af8]);}return _0x209f9f[_0x27eae2(0xb2)]('\x0a');}window[_0x4ccb6b(0x33b)+_0x4ccb6b(0x959)+_0x4ccb6b(0x800)+'r'](_0x616644[_0x4ccb6b(0x52f)],function(_0x4286c9){var _0xa5e4f1=_0x4ccb6b;if(_0x616644[_0xa5e4f1(0xb04)](_0xa5e4f1(0x157),'XiLlt'))return _0x52a272['facto'+'r'];else{var _0x5810df=_0x4286c9[_0xa5e4f1(0x76b)];if(!_0x5810df||_0x5810df[_0xa5e4f1(0x675)+_0xa5e4f1(0x81e)]!==_0xf35bdd)return;try{if(_0x616644[_0xa5e4f1(0x2ca)](_0x616644['YMPnT'],'Wlbwp'))try{var _0x5d3013=_0x5bb07c[_0xa5e4f1(0x95d)](-0x926+0xd97+-0x470,_0x3e2b26['inner'+_0xa5e4f1(0x294)]||_0x2d789e[_0xa5e4f1(0x1e3)+'entEl'+'ement'][_0xa5e4f1(0x69d)+_0xa5e4f1(0xa94)+'h']||0x1f*0x11+-0x15b8+0x13a9),_0x46177d=_0x19deef[_0xa5e4f1(0x95d)](-0x242a+-0xe2b+-0x1*-0x3256,_0x162863[_0xa5e4f1(0x1b9)+_0xa5e4f1(0x2dc)+'t']||_0x29bff['docum'+_0xa5e4f1(0x2c6)+_0xa5e4f1(0x77a)]['clien'+_0xa5e4f1(0x931)+'ht']||-0x1c5c+-0x521*-0x2+0x121a*0x1);return(_0x616644[_0xa5e4f1(0x222)](_0x1b203e['cv']['width'],_0x5d3013)||_0x3ae6ec['cv'][_0xa5e4f1(0x629)+'t']!==_0x46177d)&&(_0x4ad575['cv']['width']=_0x5d3013,_0x4c6eb4['cv']['heigh'+'t']=_0x46177d),{'w':_0x5d3013,'h':_0x46177d};}catch(_0x17407a){return{'w':0x0,'h':0x0};}else{if(_0x616644[_0xa5e4f1(0x6b7)](_0x5810df['kind'],_0x616644['eHfSW'])){_0x616644[_0xa5e4f1(0x162)](_0x624655)['set']({'host':_0x5810df['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x616644['lSPxH'](_0x5810df[_0xa5e4f1(0x577)],_0x616644[_0xa5e4f1(0x1d2)]))_0x624655()['set'](_0x5810df[_0xa5e4f1(0xa0)+'t']);}}catch(_0x4a7151){console[_0xa5e4f1(0x2a2)]('%c[sa'+_0xa5e4f1(0x794)+_0xa5e4f1(0x151)+_0xa5e4f1(0x2a6)+'ate\x20f'+_0xa5e4f1(0x6cb),'color'+':'+_0x5ae3b3,_0x4a7151);}}});function _0x44e922(){_0x2d9dc5(!![]);}if(document[_0x4ccb6b(0x388)])_0x44e922();else document[_0x4ccb6b(0x33b)+_0x4ccb6b(0x959)+_0x4ccb6b(0x800)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x44e922,{'once':!![]});return;}window['__SAK'+_0x4ccb6b(0x48a)+_0x4ccb6b(0x110)]=window[_0x4ccb6b(0x55a)+_0x4ccb6b(0x48a)+'W__']||{'at':Date[_0x4ccb6b(0x976)]()};function _0x903c1e(_0x2ed83a,_0x3a3206){var _0x2eb683=_0x4ccb6b,_0x2aba6a={'__sakura':_0xf35bdd,'kind':_0x2ed83a};if(_0x3a3206){for(var _0x5a18ba in _0x3a3206)_0x2aba6a[_0x5a18ba]=_0x3a3206[_0x5a18ba];}try{if(window[_0x2eb683(0x4d4)+'t']&&window['paren'+'t']!==window)window[_0x2eb683(0x4d4)+'t'][_0x2eb683(0x27d)+_0x2eb683(0x273)+'e'](_0x2aba6a,'*');}catch(_0x2a13a7){}try{if('vUWIM'===_0x2eb683(0x861)){if(window[_0x2eb683(0x4b6)]&&window['top']!==window)window[_0x2eb683(0x4b6)]['postM'+_0x2eb683(0x273)+'e'](_0x2aba6a,'*');}else{_0x4baa4c=_0x4b94f5,_0x43d3e3=[],_0x1e2c25(_0x2eb683(0xa0)+'t',{'report':_0x4fc264()});return;}}catch(_0x578ce6){}}console['log'](_0x616644[_0x4ccb6b(0x299)](_0x4ccb6b(0x350)+_0x4ccb6b(0x794)+_0x4ccb6b(0x7fb)+'LAYER'+'\x20ACTI'+_0x4ccb6b(0xaed),_0x143793),_0x4ccb6b(0x915)+':'+_0x5ae3b3+(';font'+_0x4ccb6b(0xa7c)+_0x4ccb6b(0x756)+'0;fon'+_0x4ccb6b(0x5d4)+_0x4ccb6b(0xa15)+'x'),{'host':_0x3cbf7b,'href':location['href'],'version':_0x143793}),_0x616644['OdgPm'](_0x903c1e,_0x616644['eHfSW'],{'host':_0x3cbf7b,'role':_0x3f86d7});var _0x246d5b=window[_0x4ccb6b(0x55a)+'URA_S'+'W__']&&window[_0x4ccb6b(0x55a)+'URA_S'+_0x4ccb6b(0x110)]['at']||Date[_0x4ccb6b(0x976)]();window[_0x4ccb6b(0x33b)+'entLi'+_0x4ccb6b(0x800)+'r']('messa'+'ge',function(_0x3ab479){var _0x16780b=_0x4ccb6b;try{if(_0x616644[_0x16780b(0x3be)](_0x616644[_0x16780b(0x439)],_0x16780b(0xa8e))){var _0x2096ec=_0x3ab479&&_0x3ab479[_0x16780b(0x76b)];if(!_0x2096ec||_0x2096ec[_0x16780b(0x675)+_0x16780b(0x81e)]!==_0xf35bdd||_0x616644['KiDJn'](_0x2096ec[_0x16780b(0x577)],'cmd'))return;_0x616644[_0x16780b(0xb14)](_0x2a2547,_0x2096ec['cmd'],_0x2096ec['arg']);}else{var _0x257aaf=-0x333+0x2652+-0x3*0xbb5;for(var _0x5a3f7b=-0xd*0x143+-0x1779+0x27e0;_0x5a3f7b<_0x21b45d['lengt'+'h'];_0x5a3f7b++){if(_0x32b686[_0x5a3f7b]['hook']&&_0x2125f1[_0x5a3f7b][_0x16780b(0x7b3)][_0x16780b(0x4c2)+'ed'])_0x257aaf++;}return _0x257aaf;}}catch(_0x29fefd){}});try{var _0x3f7647=new BroadcastChannel(_0x616644['YGijG']);_0x3f7647['onmes'+_0x4ccb6b(0x66d)]=function(_0x2aea71){var _0x5e371d=_0x4ccb6b,_0x481367=_0x2aea71[_0x5e371d(0x76b)];if(_0x481367&&_0x481367['__sak'+_0x5e371d(0x81e)]===_0xf35bdd&&_0x616644['lNbQz'](_0x481367[_0x5e371d(0x577)],'cmd'))_0x2a2547(_0x481367[_0x5e371d(0x526)],_0x481367['arg']);};}catch(_0x55cf3a){}var _0x2c41cf=[];(function _0x58d8e0(){var _0x2e1cac=_0x4ccb6b,_0x5c52ed=[_0x2e1cac(0x2f0),_0x616644[_0x2e1cac(0xaf0)],_0x616644['sNQnL'],_0x616644['KhwvI'],_0x2e1cac(0x8a6)];for(var _0x34681d=0x154e+0x8e*0x29+-0x2*0x1606;_0x34681d<_0x5c52ed[_0x2e1cac(0xc4)+'h'];_0x34681d++){(function(_0x5af07e){var _0x3f5f42=_0x2e1cac,_0x3db63c={'xedvM':function(_0x2322f3,_0x5294a1){return _0x2322f3!==_0x5294a1;},'fzMtL':function(_0x55124b,_0x4dc01b){return _0x55124b===_0x4dc01b;}},_0x5368fb=console[_0x5af07e];if(_0x616644[_0x3f5f42(0x39c)](typeof _0x5368fb,_0x3f5f42(0x807)+_0x3f5f42(0xa42)))return;console[_0x5af07e]=function(){var _0x31d5d2=_0x3f5f42;try{var _0x33fcad='';for(var _0x4ca712=-0x7*0x2b+0x41b*0x4+-0xf3f;_0x4ca712<arguments[_0x31d5d2(0xc4)+'h'];_0x4ca712++){var _0x3c54f9=arguments[_0x4ca712];if(typeof _0x3c54f9===_0x31d5d2(0x89c)+'g')_0x33fcad+=_0x3c54f9;else{if(_0x3c54f9&&_0x3c54f9[_0x31d5d2(0x935)+'ge'])_0x33fcad+=_0x3c54f9[_0x31d5d2(0x935)+'ge'];}}if(_0x3db63c[_0x31d5d2(0xaf)](_0x33fcad['index'+'Of'](_0x66cc24),-(-0x1e41+-0xbc*0x22+0x373a)))return _0x5368fb[_0x31d5d2(0xa1f)](console,arguments);if(_0x3db63c[_0x31d5d2(0xaf)](_0x33fcad[_0x31d5d2(0x820)+'Of'](_0x31d5d2(0x791)+_0x31d5d2(0x6a3)+'dkit'),-(-0xa7*-0x1f+-0xe8d+-0x1*0x5ab))){var _0x2bdfe7=_0x33fcad[_0x31d5d2(0x87a)](-0x7ef*0x3+-0x1f85+0x49*0xc2,0x1*0x1ec5+-0x1f*0x4f+0x1*-0x1408);if(_0x3db63c['fzMtL'](_0x2c41cf['index'+'Of'](_0x2bdfe7),-(-0xc82*-0x3+-0xe8+-0x249d))&&_0x2c41cf[_0x31d5d2(0xc4)+'h']<-0x521*-0x1+-0x1a48+-0x5*-0x447)_0x2c41cf['push'](_0x2bdfe7);}}catch(_0x287018){}return _0x5368fb[_0x31d5d2(0xa1f)](console,arguments);};}(_0x5c52ed[_0x34681d]));}}());var _0xf5d7fd={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0xd11fea=null,_0x4b55b6=null,_0x353db4=-(-0x665*-0x1+-0x8f1+0x28d),_0x440a52=null;function _0x11e18e(_0x149353){var _0x3bcc77=_0x4ccb6b,_0x48c02c={'MMRoj':_0x616644['inIkv'],'rNVab':_0x3bcc77(0x36c)+'paren'+'t','IziuN':function(_0x504d66,_0x37ec2b){return _0x504d66(_0x37ec2b);},'UQUEb':function(_0x18beac,_0x16a20c){return _0x18beac+_0x16a20c;}};if(_0x3bcc77(0x6fd)!==_0x616644['ODhXW'])_0x166dbc=_0x332635(_0x3815ee);else try{if(!_0x149353)return;var _0x57df75=_0x149353[_0x3bcc77(0x198)+_0x3bcc77(0x685)]?_0x149353['insta'+_0x3bcc77(0x685)][_0x3bcc77(0x5f0)+'ts']:_0x149353['expor'+'ts']||null;if(!_0x57df75)return;if(!_0x440a52)try{if(_0x616644[_0x3bcc77(0xa88)]('ugXUL',_0x3bcc77(0x770)))_0x440a52=Object[_0x3bcc77(0x1b3)](_0x57df75)[_0x3bcc77(0x87a)](-0xe9a+-0x213a*-0x1+-0x4*0x4a8,-0x60f*0x6+-0x7b*-0x39+0x90f);else{_0x17c757['sp']&&(_0x150fc6['sp'][_0x3bcc77(0xc9)+'onten'+'t']=_0x4772f0['on']?_0x48c02c[_0x3bcc77(0x69f)]:_0x3bcc77(0x837)+_0x3bcc77(0x9c2),_0x863b76['sp']['style'][_0x3bcc77(0x7db)+_0x3bcc77(0x799)]=_0x59eb88['on']?_0x36ced8:_0x48c02c[_0x3bcc77(0x434)],_0xefd882['sp'][_0x3bcc77(0x28c)][_0x3bcc77(0x915)]=_0x1ec625['on']?'#2a0f'+'1b':'#f7ee'+'f5');if(_0x121054['fx'])_0x1ed8e8['fx'][_0x3bcc77(0x5eb)]=_0x48c02c['IziuN'](_0x34b8d2,_0x5d943b['facto'+'r']);if(_0x204127['fv'])_0x15bc59['fv'][_0x3bcc77(0xc9)+_0x3bcc77(0x4e9)+'t']=_0x48c02c[_0x3bcc77(0xb35)](_0x51f13f[_0x3bcc77(0x1d8)+'r'][_0x3bcc77(0x186)+'ed'](-0x1c3f+0x1ed3+-0x293*0x1),'x');}}catch(_0x529db7){}var _0x107950=_0x57df75['memor'+'y'];_0x107950&&_0x107950['buffe'+'r']&&_0x107950[_0x3bcc77(0x14d)+'r'][_0x3bcc77(0x821)+_0x3bcc77(0xb7)]>0x249d+0x885+-0x2d22&&(_0x4b55b6=_0x107950,_0x353db4=_0x616644[_0x3bcc77(0x20a)](Date['now'](),_0x246d5b));}catch(_0x2039c1){}}function _0x5cbfe2(){var _0x5553dd=_0x4ccb6b,_0x5ac4e3={'ZboTv':function(_0x5b650e,_0x475378){return _0x5b650e+_0x475378;},'COMXN':_0x5553dd(0x8e4)+'b'};try{if(_0x5553dd(0x483)==='hcevq'){if(_0x616644[_0x5553dd(0x6b7)](typeof WebAssembly,_0x5553dd(0x709)+_0x5553dd(0x2de)))return;var _0x16316d=[_0x5553dd(0x198)+'ntiat'+'e',_0x5553dd(0x198)+_0x5553dd(0x56d)+_0x5553dd(0x7f6)+_0x5553dd(0x559)];for(var _0x3bfda4=0x1395+0x1*0x25e7+-0x397c;_0x616644['NJpyu'](_0x3bfda4,_0x16316d[_0x5553dd(0xc4)+'h']);_0x3bfda4++){(function(_0x2d4f13){var _0x5443ea=_0x5553dd,_0x4fc6b4={'LnCnw':_0x5443ea(0x74f),'IOUOK':'funct'+_0x5443ea(0xa42),'qQGgD':function(_0x40c88d,_0x28f192){var _0xc54d30=_0x5443ea;return _0x616644[_0xc54d30(0xa43)](_0x40c88d,_0x28f192);}};if(_0x616644['HkUoK']==='ZJERj')try{_0x3bcdca[_0x5443ea(0xac4)+'em'](_0x482c89,_0x20502e[_0x5443ea(0x89c)+_0x5443ea(0x403)](_0x42fc88[_0x5443ea(0x2b2)]));}catch(_0x5709de){}else{var _0x25e39b=WebAssembly[_0x2d4f13];if(_0x616644[_0x5443ea(0x3be)](typeof _0x25e39b,_0x5443ea(0x807)+_0x5443ea(0xa42))||_0x25e39b['__sak'+'uraMe'+_0x5443ea(0xb37)+'ap'])return;var _0x1fab74=function(){var _0x1fa115=_0x5443ea,_0x48a16d=_0x25e39b[_0x1fa115(0xa1f)](this,arguments);try{if(_0x1fa115(0x2a9)!==_0x4fc6b4[_0x1fa115(0x28d)]){if(_0x48a16d&&typeof _0x48a16d['then']===_0x4fc6b4['IOUOK'])_0x48a16d[_0x1fa115(0x712)](_0x11e18e,function(){});else _0x4fc6b4['qQGgD'](_0x11e18e,_0x48a16d);}else _0x274367(_0x365370['on'],_0x2fb7e7);}catch(_0x1f2363){}return _0x48a16d;};_0x1fab74[_0x5443ea(0x675)+'uraMe'+_0x5443ea(0xb37)+'ap']=!![];try{if(_0x616644[_0x5443ea(0x6a7)]===_0x616644['ruyYv']){if(_0x35c1ca['butto'+'ns'][_0xfb1c99][_0x5443ea(0x266)+_0x5443ea(0x23e)])_0x44883c['butto'+'ns'][_0xea1fdf]['class'+'Name']=_0x5ac4e3['ZboTv'](_0x5ac4e3['COMXN'],_0x2b52de===_0x47afed?'\x20acti'+'ve':'');}else Object[_0x5443ea(0x176)+'eProp'+'erty'](_0x1fab74,_0x5443ea(0x2c4),{'value':_0x25e39b[_0x5443ea(0x2c4)],'configurable':!![]});}catch(_0x12a34e){}WebAssembly[_0x2d4f13]=_0x1fab74;}}(_0x16316d[_0x3bfda4]));}}else{var _0x572ef8=_0x3ae5f9[_0xaed215],_0xb55038=_0x4045ea('butto'+'n',_0x5553dd(0x8e4)+'b',_0x616644['stUgK']+_0x572ef8[_0x5553dd(0x8c1)]+('</sma'+_0x5553dd(0x90e)));_0xb55038['type']=_0x5553dd(0x42e)+'n',_0xb55038[_0x5553dd(0x9c7)]=_0x572ef8['label'],function(_0x363ae1){var _0x21a732=_0x5553dd;_0xb55038[_0x21a732(0x3a6)+'ck']=function(){_0x46c401(_0x363ae1);};}(_0x572ef8['id']),_0x3bbf27[_0x572ef8['id']]=_0xb55038,_0x285aae['appen'+'dChil'+'d'](_0xb55038);}}catch(_0x3478bf){}}var _0x592997=null,_0x31d7cc=null,_0x19a388={},_0xbf6b9a=[],_0xd2b6ff=[],_0x5e28e2=[{'type':_0x616644['vwpCR'],'keep':!![]},{'type':_0x616644[_0x4ccb6b(0x1b8)],'keep':!![]},{'type':_0x616644[_0x4ccb6b(0x5f8)],'keep':![]},{'type':'TDM_G'+_0x4ccb6b(0x663)+'nager','keep':!![]},{'type':_0x4ccb6b(0x9fe)+_0x4ccb6b(0x34a)+'ager','keep':!![]},{'type':_0x616644[_0x4ccb6b(0x1bc)],'keep':!![],'many':!![]},{'type':_0x4ccb6b(0xed)+_0x4ccb6b(0x95c)+_0x4ccb6b(0xc8)+_0x4ccb6b(0x4a0)+_0x4ccb6b(0x864),'keep':!![],'many':!![]},{'type':_0x4ccb6b(0x63d)+_0x4ccb6b(0x652)+_0x4ccb6b(0x64f),'keep':!![],'many':!![]},{'type':'Enemy'+'Bot','keep':!![],'many':!![]}],_0x188b81=[_0x4ccb6b(0x48f)+'bly-C'+'Sharp'+_0x4ccb6b(0x47a),_0x616644[_0x4ccb6b(0x64b)],_0x616644[_0x4ccb6b(0x7be)],_0x4ccb6b(0x2fb)+'t.dll',_0x616644[_0x4ccb6b(0x34c)],_0x616644[_0x4ccb6b(0x456)]];(function _0x1c263c(){var _0x5504ba=_0x4ccb6b,_0x50195b={'kLPLB':function(_0x4dfcc3){var _0x4eea54=_0x35e4;return _0x616644[_0x4eea54(0x9d)](_0x4dfcc3);}};try{if(_0x616644[_0x5504ba(0x2ee)]===_0x616644['SBUlD']){var _0x373e3e=_0x515202(_0x198a4b+_0x616644['KmxUu'](_0x27be23,_0x3e4011[_0x5836fd][0x72d*0x5+0x4cc*0x2+-0x2d79],-0x6eb+-0x1*0xd3a+0x1435*0x1),'u32');if(_0x373e3e)_0x221ebd['refs'][_0x330b34[_0x54f8dc][0x1b75+-0x1333+-0x1*0x841]]='0x'+_0x616644[_0x5504ba(0x358)](_0x373e3e,0x709*-0x1+-0x1*-0x81b+-0x112*0x1)['toStr'+_0x5504ba(0x873)](-0x1b6*0x16+-0x62a+0x2bde);}else{var _0x2a39bf=window[_0x5504ba(0x791)+'WebMo'+_0x5504ba(0x6b3)]&&window[_0x5504ba(0x791)+_0x5504ba(0x6a3)+'dkit']['Runti'+'me'];if(!_0x2a39bf||typeof _0x2a39bf[_0x5504ba(0x995)+_0x5504ba(0x5c4)+'in']!==_0x5504ba(0x807)+'ion'){_0xf5d7fd[_0x5504ba(0x546)]='Runti'+'me.cr'+'eateP'+'lugin'+_0x5504ba(0x9bf)+_0x5504ba(0xa6b)+'le';return;}_0xf5d7fd[_0x5504ba(0x69a)+'pted']=!![],_0x31d7cc=_0x2a39bf[_0x5504ba(0x995)+'ePlug'+'in']({'name':_0x5504ba(0x6f7)+'a-ski'+_0x5504ba(0xa4)+'z','version':_0x143793,'referencedAssemblies':_0x188b81[_0x5504ba(0x87a)]()}),_0xf5d7fd['ok']=!![];try{if(_0x616644[_0x5504ba(0x2ca)](_0x616644[_0x5504ba(0x34b)],_0x616644['qQhDr'])){var _0x2aa936=window[_0x5504ba(0x791)+'WebMo'+'dkit'][_0x5504ba(0x1a0)+'me'];_0x2aa936['__sak'+_0x5504ba(0x64d)+'g']=_0x143793+':'+Math[_0x5504ba(0x130)+'m']()['toStr'+_0x5504ba(0x873)](0xb56*-0x1+0x3a9*0x1+0x57*0x17)['slice'](0x181f+0x1*-0x150e+0x1*-0x30f,0x1*-0x2159+0x523+0x1c40),_0xd11fea=_0x2aa936['__sak'+'uraTa'+'g'];}else try{_0x50195b['kLPLB'](_0x28aea4);}catch(_0x5a30a0){}}catch(_0x32a380){}_0x11ee21(),_0xf5d7fd[_0x5504ba(0x940)+'Regis'+'tered']=_0xbf6b9a['lengt'+'h'],_0x5cbfe2(),_0xf5d7fd['memor'+_0x5504ba(0x60b)]=!![];}}catch(_0x4ed01f){_0xf5d7fd['error']=_0x616644[_0x5504ba(0x32d)](String,_0x4ed01f&&_0x4ed01f['messa'+'ge']||_0x4ed01f);}}());var _0x1a7b92=new Float32Array(-0x331*-0x5+0x1e74+-0x2e68),_0x2587c1=new Int32Array(_0x1a7b92['buffe'+'r']);function _0x44dc38(_0x167948){return _0x1a7b92[-0xad*-0x13+-0x405+-0x8d2*0x1]=_0x167948,_0x2587c1[0x61b+-0x1c3c+0x1621];}function _0x41b08d(_0x1ddbcd){var _0x47fda2=_0x4ccb6b;if(_0x616644[_0x47fda2(0x488)](_0x47fda2(0x1e9),_0x616644[_0x47fda2(0x6b0)]))return _0x2587c1[-0x1d30+0x2182+-0x452]=_0x616644[_0x47fda2(0x4c7)](_0x1ddbcd,-0x182b*0x1+0x21cb+-0x9a0),_0x1a7b92[-0x362*0x4+0x268f*-0x1+0x17d*0x23];else _0x40a4c5=_0x616644['mfBOZ'](_0x11b398,_0x616644['tFbvV'](_0x3f1035/_0x450ce6,_0x5eb3e3-(0x1*-0x65f+0x12b1+-0xc4c))),_0x2a852f=_0x35b23c+_0x12a39f/_0x406280*(_0x55e53b-(0x2*0x115f+-0x1*-0xce3+-0x2f9b*0x1));}var _0x444a2f={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0xac484d(){var _0xa26735=_0x4ccb6b;try{if(_0x31d7cc&&_0x31d7cc[_0xa26735(0xadb)+_0xa26735(0x733)]){if(_0xa26735(0x584)==='PKYko')_0x52426a(_0xc16d4f);else{var _0x268662=_0x31d7cc[_0xa26735(0xadb)+_0xa26735(0x733)];if(typeof _0x268662[_0xa26735(0x4b1)+'veGam'+'e']===_0xa26735(0x807)+'ion'){var _0x549431=_0x268662[_0xa26735(0x4b1)+_0xa26735(0x66b)+'e']();if(_0x549431){if(_0x616644['lNbQz'](_0xa26735(0x571),'lOjwC'))return _0x444a2f['sourc'+'e']='plugi'+'n._ru'+_0xa26735(0xa18)+_0xa26735(0x8c3)+'lveGa'+'me()',_0x549431;else try{var _0x45d0ef=_0x180174&&_0x29afe3[_0xa26735(0x76b)];if(!_0x45d0ef||_0x616644[_0xa26735(0x9f)](_0x45d0ef[_0xa26735(0x675)+'ura'],_0x4f32c3)||_0x45d0ef['kind']!==_0x616644[_0xa26735(0x280)])return;_0x4cf762(_0x45d0ef['cmd'],_0x45d0ef['arg']);}catch(_0x160126){}}}if(_0x268662[_0xa26735(0x964)]){if(_0x616644[_0xa26735(0x119)](_0x616644[_0xa26735(0x6be)],_0x616644['VdVZn']))return _0x444a2f['sourc'+'e']=_0x616644[_0xa26735(0x5d6)],_0x268662['_game'];else _0x55c819[_0x616644[_0xa26735(0x66a)](_0x616644[_0xa26735(0xaad)](_0x5b5a63,_0xa26735(0x45e)),_0x3be514[_0x30a125]['o'][_0xa26735(0x834)+_0xa26735(0x873)](0xaeb+-0xe67+0x38c))]=_0x82d4e1[_0x1f5d05]['v'];}}}}catch(_0x418f3c){}try{if(_0x616644['KcOYs']!==_0x616644['CddJq']){var _0x65c691=window[_0xa26735(0x791)+'WebMo'+_0xa26735(0x6b3)]&&window[_0xa26735(0x791)+_0xa26735(0x6a3)+'dkit'][_0xa26735(0x1a0)+'me'];if(_0x65c691&&_0x616644[_0xa26735(0xa88)](typeof _0x65c691[_0xa26735(0x4b1)+'veGam'+'e'],'funct'+'ion')){var _0x2d7eb5=_0x65c691['resol'+'veGam'+'e']();if(_0x2d7eb5)return _0x444a2f[_0xa26735(0x7eb)+'e']='Runti'+_0xa26735(0x462)+_0xa26735(0x3f6)+_0xa26735(0x9eb)+')',_0x2d7eb5;}if(_0x65c691&&_0x65c691[_0xa26735(0x964)])return _0x444a2f[_0xa26735(0x7eb)+'e']=_0xa26735(0x1a0)+_0xa26735(0x632)+'ame',_0x65c691;}else _0x2dd73c=_0x25e14d+_0x2c7807,_0x16eba9=_0x3a5cb1+_0x44f599;}catch(_0x570b95){}try{var _0x3e25ea=window[_0xa26735(0x690)+_0xa26735(0x169)+'nce']||window[_0xa26735(0x690)+_0xa26735(0x3de)]||window[_0xa26735(0x309)];if(_0x3e25ea)return _0x444a2f[_0xa26735(0x7eb)+'e']='windo'+'w\x20glo'+_0xa26735(0x887),_0x3e25ea;}catch(_0x1d0691){}try{if(_0x616644[_0xa26735(0x119)](_0x616644['bKhNz'],_0xa26735(0x4f9))){var _0x5ec2c3=_0x352a37();if(!_0x5ec2c3)return null;return{'ptr':'0x'+_0x5ec2c3[_0xa26735(0x872)][_0xa26735(0x834)+_0xa26735(0x873)](0x3b*0x13+0x2*-0xd0f+-0x15cd*-0x1),'feet':_0x5ec2c3['feet'],'eye':_0x5ec2c3['eye'],'posAt':_0x5ec2c3[_0xa26735(0x944)],'eyeHeight':_0x107951,'pitch':_0x5ec2c3[_0xa26735(0x5e7)],'yaw':_0x5ec2c3[_0xa26735(0x32a)],'reach':_0x5ec2c3['reach']};}else{if(typeof game!==_0x616644[_0xa26735(0x1bb)]&&game)return _0x444a2f['sourc'+'e']=_0xa26735(0x6af)+_0xa26735(0x5c3)+'bindi'+'ng',game;}}catch(_0x156aef){}try{var _0x5c91ae=Object['keys'](window);for(var _0x22ec8f=0x33*0x1a+0xfd1*-0x1+-0x185*-0x7;_0x22ec8f<_0x5c91ae[_0xa26735(0xc4)+'h']&&_0x616644[_0xa26735(0x20e)](_0x22ec8f,-0x14e2+0x5*0xb5+0x13b1);_0x22ec8f++){var _0x3439a9=window[_0x5c91ae[_0x22ec8f]];if(_0x3439a9&&typeof _0x3439a9===_0xa26735(0xa11)+'t'&&_0x3439a9['Modul'+'e']&&_0x3439a9['Modul'+'e']['HEAPU'+'8']&&_0x3439a9[_0xa26735(0x122)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x444a2f['sourc'+'e']=_0xa26735(0x760)+'w.'+_0x5c91ae[_0x22ec8f]+_0x616644['jjjVk'],_0x3439a9;}}catch(_0x434fea){}return _0x444a2f[_0xa26735(0x7eb)+'e']=null,null;}function _0x1eb52e(){var _0x4025e2=_0x4ccb6b;try{if(_0x4b55b6&&_0x4b55b6['buffe'+'r']&&_0x4b55b6['buffe'+'r']['byteL'+'ength'])return _0x444a2f['sourc'+'e']=_0x444a2f['sourc'+'e']||_0x616644[_0x4025e2(0x8c7)],new Uint8Array(_0x4b55b6[_0x4025e2(0x14d)+'r']);}catch(_0x391a85){}try{var _0x13eff8=_0xac484d();if(_0x13eff8&&_0x13eff8['Modul'+'e']&&_0x13eff8[_0x4025e2(0x122)+'e']['HEAPU'+'8']&&_0x13eff8['Modul'+'e']['HEAPU'+'8'][_0x4025e2(0x14d)+'r'])return _0x13eff8[_0x4025e2(0x122)+'e'][_0x4025e2(0x6f5)+'8'];}catch(_0x19d457){}return null;}function _0x475c3a(){var _0x467ed2=_0x4ccb6b,_0x2255f4=_0x1eb52e();if(!_0x2255f4)return null;try{return new DataView(_0x2255f4[_0x467ed2(0x14d)+'r'],_0x2255f4['byteO'+_0x467ed2(0x177)],_0x2255f4[_0x467ed2(0x821)+'ength']);}catch(_0x4cb084){return null;}}function _0x5c90fe(_0x128d1a,_0x3d6eb2){var _0x5aad4f=_0x4ccb6b,_0x30c3e4={'dhuHa':function(_0xa9f671,_0x3fb116){return _0xa9f671(_0x3fb116);},'rUNFF':function(_0xf675c6){return _0xf675c6();}},_0x44ac6b=_0x616644[_0x5aad4f(0xaae)](_0x475c3a);if(!_0x44ac6b)return _0x444a2f[_0x5aad4f(0xb1e)+'d']++,_0x444a2f['lastE'+_0x5aad4f(0x2e0)]=_0x444a2f[_0x5aad4f(0x776)+'rror']||'no\x20HE'+_0x5aad4f(0xa1b)+'-\x20Uni'+_0x5aad4f(0xdd)+'stanc'+'e\x20not'+_0x5aad4f(0x936)+'hable'+_0x5aad4f(0x8e1)+'Runti'+'me.re'+'solve'+'Game('+_0x5aad4f(0x70f)+'any\x20w'+_0x5aad4f(0x717)+'\x20glob'+'al',undefined;if(_0x128d1a<-0x1869+0x1*0x3f9+0x6*0x368||_0x128d1a+(-0xe2*-0x16+0x19d1+0x11*-0x2a9)>_0x44ac6b['byteL'+_0x5aad4f(0xb7)])return _0x444a2f[_0x5aad4f(0xb1e)+'d']++,_0x444a2f[_0x5aad4f(0x776)+_0x5aad4f(0x2e0)]=_0x444a2f[_0x5aad4f(0x776)+'rror']||_0x616644['ztwvi'](_0x616644[_0x5aad4f(0x7e6)]+_0x128d1a[_0x5aad4f(0x834)+'ing'](0x1*-0x2327+0x1*0xcd3+-0x2*-0xb32)+(_0x5aad4f(0x3f2)+'\x20heap'+_0x5aad4f(0x7fc)+'0x'),_0x44ac6b['byteL'+_0x5aad4f(0xb7)]['toStr'+'ing'](0xd0*0x15+-0x818+-0x26*0x3c)),undefined;try{if(_0x616644[_0x5aad4f(0x5d1)]('WDZQQ',_0x616644[_0x5aad4f(0x513)])){_0x444a2f['ok']++;switch(_0x3d6eb2){case'u8':return _0x44ac6b['getUi'+'nt8'](_0x128d1a);case'i8':return _0x44ac6b['getIn'+'t8'](_0x128d1a);case _0x616644[_0x5aad4f(0xa3e)]:return _0x44ac6b[_0x5aad4f(0x8bf)+_0x5aad4f(0x754)](_0x128d1a,!![]);case _0x5aad4f(0xbb):return _0x44ac6b[_0x5aad4f(0x487)+_0x5aad4f(0x221)](_0x128d1a,!![]);case _0x5aad4f(0x3ad):return _0x44ac6b[_0x5aad4f(0x8bf)+'t32'](_0x128d1a,!![]);case _0x5aad4f(0x790):return _0x44ac6b[_0x5aad4f(0x487)+'nt32'](_0x128d1a,!![]);case'f32':return _0x44ac6b[_0x5aad4f(0x5b7)+_0x5aad4f(0xb30)](_0x128d1a,!![]);case'f64':return _0x44ac6b['getFl'+'oat64'](_0x128d1a,!![]);case'v2':case'v3':case'v4':return _0x44ac6b[_0x5aad4f(0x5b7)+_0x5aad4f(0xb30)](_0x128d1a,!![]);default:return _0x44ac6b[_0x5aad4f(0x8bf)+_0x5aad4f(0x10d)](_0x128d1a,!![]);}}else _0x30c3e4[_0x5aad4f(0x2fe)](_0x17b44d,![]),_0x30c3e4[_0x5aad4f(0xa7b)](_0x84738b);}catch(_0x3062f2){return _0x444a2f['faile'+'d']++,_0x444a2f[_0x5aad4f(0x776)+_0x5aad4f(0x2e0)]=_0x444a2f[_0x5aad4f(0x776)+'rror']||String(_0x3062f2&&_0x3062f2[_0x5aad4f(0x935)+'ge']||_0x3062f2)['slice'](-0x41d*0x3+-0x66*-0x10+-0x1fd*-0x3,-0x1*-0x991+-0x5d9*0x1+-0x340),undefined;}}function _0xfc2421(_0x470a1f,_0x4d4c36,_0x4c4757){var _0x29fdb8=_0x4ccb6b,_0x526c13=_0x475c3a();if(!_0x526c13||_0x616644[_0x29fdb8(0x20e)](_0x470a1f,0x1c36+0x2544*-0x1+-0x90e*-0x1)||_0x616644['Qieno'](_0x470a1f,0xb*-0x157+-0x1*0x1f79+0x2e3a)>_0x526c13['byteL'+_0x29fdb8(0xb7)])return![];try{switch(_0x4d4c36){case'u8':case'i8':_0x526c13[_0x29fdb8(0x4cc)+'nt8'](_0x470a1f,_0x4c4757&-0x2*0x92c+-0x1aa5+0x2dfc);break;case'i16':case _0x29fdb8(0xbb):_0x526c13[_0x29fdb8(0x245)+_0x29fdb8(0x754)](_0x470a1f,_0x4c4757|-0xb27*-0x2+-0x16e4+0x1e*0x5,!![]);break;case _0x616644[_0x29fdb8(0xaa4)]:case _0x29fdb8(0x790):_0x526c13[_0x29fdb8(0x245)+_0x29fdb8(0x10d)](_0x470a1f,_0x616644[_0x29fdb8(0x4c7)](_0x4c4757,-0x1d*0xdc+-0x919*-0x3+-0x25f*0x1),!![]);break;case _0x616644[_0x29fdb8(0xaa3)]:_0x526c13[_0x29fdb8(0x286)+_0x29fdb8(0xb30)](_0x470a1f,_0x4c4757,!![]);break;default:_0x526c13['setIn'+_0x29fdb8(0x10d)](_0x470a1f,_0x616644[_0x29fdb8(0x4c7)](_0x4c4757,-0x1736+0x3*0x3aa+0x2e*0x44),!![]);}return!![];}catch(_0x233586){return![];}}var _0x352685={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x616644['nuZwp']},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x616644[_0x4ccb6b(0xaa4)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0xa34f36(_0x110b2c){var _0x1d4450=_0x4ccb6b;if(_0x616644[_0x1d4450(0x88b)]===_0x1d4450(0x2d1)){var _0xcc1c9f='';for(var _0x292ea9=-0x24c6+0x5d5*-0x1+-0x1*-0x2a9b;_0x616644['KrwkC'](_0x292ea9,_0x110b2c['lengt'+'h']);_0x292ea9++){var _0xc9dd62=_0x110b2c[_0x292ea9]['toStr'+'ing'](0xf3b+-0x15d*-0x2+-0x11e5);_0xcc1c9f+=_0x616644['nQNnb'](_0x616644[_0x1d4450(0x822)](_0xc9dd62['lengt'+'h'],-0x160c+0x2*-0x9fe+0x1505*0x2)?'0':'',_0xc9dd62);}return _0xcc1c9f;}else _0x2b51f7[_0x1d4450(0x28c)][_0x1d4450(0x476)+'ty']=_0x5adf5e['open']?'1':'.5';}function _0x115b1f(_0x34c8f8,_0x17124d,_0x4c61ec){var _0x4792ae=_0x4ccb6b,_0x302e79=_0x616644['GFpHe'](_0x475c3a);if(!_0x302e79)return _0x444a2f['faile'+'d']++,_0x444a2f['lastE'+_0x4792ae(0x2e0)]=_0x444a2f[_0x4792ae(0x776)+_0x4792ae(0x2e0)]||'no\x20HE'+_0x4792ae(0xa1b)+_0x4792ae(0xab0)+'ty\x20in'+_0x4792ae(0x7b8)+_0x4792ae(0x901)+_0x4792ae(0x936)+'hable'+_0x4792ae(0x8e1)+_0x4792ae(0x1a0)+_0x4792ae(0x462)+_0x4792ae(0x3f6)+_0x4792ae(0x9eb)+')\x20or\x20'+'any\x20w'+'indow'+_0x4792ae(0x8a0)+'al',null;if(_0x17124d<0x296+-0x1b+-0x27b||_0x616644[_0x4792ae(0x99d)](_0x17124d,_0x4c61ec)>_0x302e79[_0x4792ae(0x821)+_0x4792ae(0xb7)])return _0x444a2f[_0x4792ae(0xb1e)+'d']++,_0x444a2f[_0x4792ae(0x776)+_0x4792ae(0x2e0)]=_0x444a2f[_0x4792ae(0x776)+'rror']||_0x616644[_0x4792ae(0xaf1)](_0x616644['Owhyl'](_0x616644[_0x4792ae(0x7e6)],(_0x34c8f8+_0x17124d)[_0x4792ae(0x834)+'ing'](0x1cbd+0x1d58+0x3a05*-0x1))+(_0x4792ae(0x3f2)+_0x4792ae(0x6c1)+_0x4792ae(0x7fc)+'0x'),_0x302e79['byteL'+_0x4792ae(0xb7)]['toStr'+_0x4792ae(0x873)](-0x1c5b+0x1ed9+-0x26e*0x1)),null;try{var _0x4559fc=new Uint8Array(_0x4c61ec);for(var _0x143dd1=0x17+0x2*0x118e+-0x2333;_0x143dd1<_0x4c61ec;_0x143dd1++)_0x4559fc[_0x143dd1]=_0x302e79[_0x4792ae(0x487)+_0x4792ae(0x4c0)](_0x616644[_0x4792ae(0x4a7)](_0x34c8f8+_0x17124d,_0x143dd1));return _0x444a2f['ok']++,_0x4559fc;}catch(_0x29714b){if(_0x616644[_0x4792ae(0x230)](_0x4792ae(0xdb),_0x616644['lQtTV']))_0x4193f6[_0x4792ae(0x28c)]['left']=_0x25386e[_0x4792ae(0x2b2)]['x']+'px',_0x137a2f[_0x4792ae(0x28c)]['top']=_0x616644['FdTNy'](_0x64ecf8[_0x4792ae(0x2b2)]['y'],'px'),_0x4b789c[_0x4792ae(0x28c)]['right']='auto',_0x95abb7[_0x4792ae(0x28c)]['botto'+'m']=_0x4792ae(0x3bc);else return _0x444a2f[_0x4792ae(0xb1e)+'d']++,_0x444a2f[_0x4792ae(0x776)+'rror']=_0x444a2f[_0x4792ae(0x776)+_0x4792ae(0x2e0)]||_0x616644[_0x4792ae(0xabb)](String,_0x29714b&&_0x29714b[_0x4792ae(0x935)+'ge']||_0x29714b)['slice'](0x19d3+-0x1e5*0xd+-0x132,0x1148+0x1f89+-0x3059),null;}}function _0x3ecd98(_0x16f9ec,_0x200b26,_0x3ae8e9){var _0x55d34c=_0x4ccb6b,_0x3743b2=_0x616644['rAysd'][_0x55d34c(0xad1)]('|'),_0x46e5af=-0x1*0xd6c+0x6*-0x105+0x138a;while(!![]){switch(_0x3743b2[_0x46e5af++]){case'0':var _0x2c6507=new DataView(_0x377e2a['buffe'+'r'],_0x377e2a[_0x55d34c(0x773)+'ffset'],_0x377e2a[_0x55d34c(0x821)+'ength']);continue;case'1':var _0x13f095=_0x2c6507['getUi'+'nt8'](_0x12a180[_0x55d34c(0x8ab)+'e'])&-0x155+-0x1ea3+0x1ff9;continue;case'2':var _0x377e2a=_0x616644['MJVWt'](_0x115b1f,_0x16f9ec,_0x200b26,_0x12a180['size']);continue;case'3':var _0x54899b=_0x2c6507['getIn'+'t32'](_0x12a180['hidde'+'n'],!![]);continue;case'4':var _0x1a502d=_0x2c6507[_0x55d34c(0x487)+_0x55d34c(0x4c0)](_0x12a180['inite'+'d'])&0x22d0*0x1+0x3a1*0x5+-0x34f4;continue;case'5':var _0x2afd87=_0x2c6507[_0x55d34c(0x8bf)+'t32'](_0x12a180[_0x55d34c(0xa26)],!![]);continue;case'6':var _0x2d7b65=_0x616644['ADivy'](_0x3ae8e9,_0x616644[_0x55d34c(0x461)])?_0x2c6507[_0x55d34c(0x5b7)+'oat32'](_0x12a180['fake'],!![]):_0x616644[_0x55d34c(0x666)](_0x3ae8e9,_0x616644[_0x55d34c(0x91d)])?_0x2c6507[_0x55d34c(0x8bf)+_0x55d34c(0x10d)](_0x12a180[_0x55d34c(0x4f1)],!![]):_0x2c6507['getUi'+_0x55d34c(0x4c0)](_0x12a180['fake']);continue;case'7':if(!_0x377e2a)return null;continue;case'8':return{'keyAtOffset0':_0x2afd87,'hidden':_0x54899b,'inited':_0x1a502d,'fake':_0x2d7b65,'act':_0x13f095,'hex':_0xa34f36(_0x377e2a),'alt':_0x616644['mPFBh'](_0x3ae8e9,_0x55d34c(0x8e6))?_0x54899b^(_0x2d7b65|-0x1b2b+0x1f*-0x11a+0x593*0xb):null};case'9':var _0x12a180=_0x352685[_0x3ae8e9];continue;}break;}}function _0x117f55(_0x2ca68b,_0x41a642,_0x21996f){var _0x5044d3=_0x4ccb6b;if(_0x616644[_0x5044d3(0x3d5)]!==_0x616644[_0x5044d3(0x3d5)]){if(!_0x2ba886[_0x5044d3(0x388)]||!_0x31bb7b['body']['appen'+_0x5044d3(0x813)+'d'])return null;var _0x4aaf2f=_0x1c1564['creat'+_0x5044d3(0x6a5)+_0x5044d3(0x89b)](_0x5044d3(0x268)+'s');return _0x4aaf2f['id']=_0x5044d3(0x6f7)+'a-box'+'es',_0x4aaf2f['style']['cssTe'+'xt']='posit'+_0x5044d3(0x874)+_0x5044d3(0x237)+_0x5044d3(0x394)+_0x5044d3(0x3d1)+':0;z-'+'index'+':2147'+'48364'+_0x5044d3(0x653)+_0x5044d3(0x710)+_0x5044d3(0x9d1)+_0x5044d3(0x81c)+'e;',_0x355c9b[_0x5044d3(0x388)][_0x5044d3(0x49f)+'dChil'+'d'](_0x4aaf2f),_0x571eaf={'cv':_0x4aaf2f},_0x4b8c94;}else{if(_0x2ca68b===_0x616644[_0x5044d3(0x461)])return _0x41b08d(_0x41a642^_0x21996f);if(_0x2ca68b===_0x616644[_0x5044d3(0x91d)])return _0x616644[_0x5044d3(0x866)](_0x41a642,_0x21996f)|0x7d+0x17b2+0x97*-0x29;return _0x616644[_0x5044d3(0xb26)](_0x616644[_0x5044d3(0x5c8)](_0x41a642,_0x21996f),-0x2*-0x1253+-0x6d7*0x2+-0x3*0x753)!==0xa4b+-0x7*0x119+0x14e*-0x2?0x251*-0x10+0x7*-0x393+-0x373*-0x12:-0x1ca9+-0x19c9+0x1226*0x3;}}function _0x527165(_0x3f69b8,_0xf657c3,_0x43ea33){var _0x49fa67=_0x4ccb6b,_0x5d183b=_0x352685[_0x43ea33];if(!_0x5d183b)return null;var _0x1f3aa7=_0x616644['gBCXW'](_0x5c90fe,_0x3f69b8+_0xf657c3+_0x5d183b['key'],'u8'),_0x1b8ecb=_0x5c90fe(_0x3f69b8+_0xf657c3+_0x5d183b[_0x49fa67(0x1a2)+'n'],_0x49fa67(0x3ad)),_0xd81a01=_0x616644['gBCXW'](_0x5c90fe,_0x3f69b8+_0xf657c3+_0x5d183b[_0x49fa67(0x155)+'d'],'u8'),_0x3b48a9=_0x5c90fe(_0x616644['VVOEf'](_0x3f69b8+_0xf657c3,_0x5d183b[_0x49fa67(0x4f1)]),_0x43ea33==='obfF'?'f32':_0x616644[_0x49fa67(0x972)](_0x43ea33,_0x616644[_0x49fa67(0x91d)])?_0x49fa67(0x3ad):'u8'),_0x21b100=_0x5c90fe(_0x616644['wSUIo'](_0x3f69b8,_0xf657c3)+_0x5d183b['activ'+'e'],'u8');if(_0x1f3aa7===undefined||_0x616644[_0x49fa67(0x1cd)](_0x1b8ecb,undefined)||_0x3b48a9===undefined||_0x21b100===undefined)return null;_0x1f3aa7&=-0x3be+-0xeeb+0x13a8,_0x1b8ecb|=0xd69+-0x751+-0x618,_0xd81a01=_0x616644['hdXnM'](_0xd81a01||-0x1a*0x3b+-0x151c+0xd8d*0x2,-0x1*0xe2f+0x253e+-0x170e),_0x21b100&=0x114c+0x1bcc+-0x2d17;var _0xcba25d;if(_0x43ea33==='obfF')_0xcba25d=_0x616644['OHCHJ'](_0x41b08d,_0x616644['MWoAQ'](_0x1b8ecb,_0x1f3aa7));else{if(_0x616644['LoSmz'](_0x43ea33,_0x616644['OsXiu']))_0xcba25d=_0x616644[_0x49fa67(0x5c8)](_0x1b8ecb,_0x1f3aa7)|-0x355+-0xe14+0x1169*0x1;else _0xcba25d=_0x616644['gqJMx'](_0x616644['UadOW'](_0x1b8ecb,_0x1f3aa7)&0x1d*0x60+-0x248a+-0x23*-0xc3,-0xb5a+0x94*-0x31+0x27ae)?0x256f+0x74*0x3a+-0x91a*0x7:0x66c+-0x1997+-0x1*-0x132b;}return{'real':_0xcba25d,'fake':_0x3b48a9,'act':_0x21b100,'init':_0xd81a01,'key':_0x1f3aa7,'hidden':_0x1b8ecb};}function _0x2ebc0b(_0x258105,_0x96474c,_0xbc745a,_0xbccfe7){var _0x52ed7c=_0x4ccb6b,_0x37f047=('2|0|5'+_0x52ed7c(0x5d0)+'1|7|6')['split']('|'),_0x40bc6c=0x1fb7+0x1*0x115b+0xb*-0x476;while(!![]){switch(_0x37f047[_0x40bc6c++]){case'0':var _0x17634a=_0x616644['MJVWt'](_0x115b1f,_0x258105,_0x96474c,_0x1b58d7[_0x52ed7c(0x2b1)]);continue;case'1':var _0x5e167f;continue;case'2':var _0x1b58d7=_0x352685[_0xbc745a];continue;case'3':var _0x59c005=new DataView(_0x17634a[_0x52ed7c(0x14d)+'r'],_0x17634a[_0x52ed7c(0x773)+_0x52ed7c(0x177)],_0x17634a['byteL'+'ength']);continue;case'4':var _0x26e6aa=_0x616644[_0x52ed7c(0x972)](_0x1b58d7['keyTy'+'pe'],'u8')?_0x59c005[_0x52ed7c(0x487)+_0x52ed7c(0x4c0)](_0x1b58d7[_0x52ed7c(0xa26)]):_0x59c005[_0x52ed7c(0x8bf)+'t32'](_0x1b58d7[_0x52ed7c(0xa26)],!![]);continue;case'5':if(!_0x17634a)return![];continue;case'6':return _0xfc2421(_0x616644['lowjH'](_0x258105+_0x96474c,_0x1b58d7[_0x52ed7c(0x1a2)+'n']),_0x52ed7c(0x3ad),_0x5e167f^_0x26e6aa)&&_0x616644['MJVWt'](_0xfc2421,_0x616644[_0x52ed7c(0x95b)](_0x258105,_0x96474c)+_0x1b58d7['fake'],_0x616644['KkWJE'](_0xbc745a,_0x52ed7c(0x836))?_0x616644[_0x52ed7c(0xaa3)]:_0xbc745a===_0x616644['OsXiu']?_0x52ed7c(0x3ad):'u8',_0xbc745a===_0x52ed7c(0x836)?_0xbccfe7:_0x616644['AjORQ'](_0xbc745a,'obfI')?_0xbccfe7|0x790+-0x1*0x2a+-0x766:_0xbccfe7?-0x716*-0x4+-0x2*-0x122d+-0x40b1:0x20ef+0x97*-0x9+-0x1ba0)&&_0xfc2421(_0x616644[_0x52ed7c(0xb10)](_0x258105,_0x96474c)+_0x1b58d7[_0x52ed7c(0x8ab)+'e'],'u8',-0xb6c+0x6a7*-0x2+0x18ba);case'7':if(_0xbc745a===_0x616644['zyIhc'])_0x5e167f=_0x44dc38(_0xbccfe7);else{if(_0x616644[_0x52ed7c(0x666)](_0xbc745a,_0x52ed7c(0x8e6)))_0x5e167f=_0xbccfe7|0x154e+0x63e+0x56*-0x52;else _0x5e167f=(_0xbccfe7?0xfeb+-0x3*-0x8d7+-0x2a6f:-0x1579+0x1*0xbcd+-0x1*-0x9ac)&0x2018+0x212f+-0x4048;}continue;}break;}}var _0x5ecc68={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x3a7421=0x13b6+-0xf59+-0x1*0x45d+0.03,_0x5a0b56=-0x1*0x6b3+0x27*-0x8+0x7ed,_0x1c8839={},_0x207f7e=-0x190+-0x1*-0x264e+-0x24be,_0x4529f1=[],_0x447df4=[];function _0x46f144(_0xbcda1b){var _0x39302d=_0x4ccb6b,_0x39f805={'nhFgW':function(_0x777342){return _0x777342();}};if(_0x616644['pvwAj']!==_0x616644[_0x39302d(0x900)]){var _0x50bd3a=_0x20a90a['FPSco'+_0x39302d(0x259)+'ler']||[],_0x5329ec=[];_0x447df4=[],_0x4529f1=[];for(var _0x3276e2=-0x11*0xbf+0x21b6+0x1507*-0x1;_0x616644[_0x39302d(0x822)](_0x3276e2,_0x50bd3a['lengt'+'h']);_0x3276e2++){var _0x842e36=_0x50bd3a[_0x3276e2][-0x1a4b+0x1*0x1499+0xa2*0x9];if(_0x50bd3a[_0x3276e2][0x2555+-0x7*0x224+-0x478*0x5]!==_0x616644['zyIhc'])continue;var _0x4e2c77=_0x3ecd98(_0xbcda1b,_0x842e36,'obfF');if(!_0x4e2c77||_0x4e2c77['inite'+'d']!==0x7a9+-0x1ba9+0x1401*0x1)continue;var _0x183bed=_0x117f55(_0x39302d(0x836),_0x4e2c77['hidde'+'n'],_0x4e2c77[_0x39302d(0x674)+_0x39302d(0x703)+'t0']);if(_0x616644[_0x39302d(0x896)](typeof _0x183bed,'numbe'+'r')||!isFinite(_0x183bed))continue;var _0x50833f=_0x616644[_0x39302d(0x828)](_0xbcda1b,':')+_0x842e36,_0x24c83c=_0x1c8839[_0x50833f];if(!_0x24c83c||_0x183bed!==_0x24c83c[_0x39302d(0x988)+'ritte'+'n'])_0x24c83c=_0x1c8839[_0x50833f]={'base':_0x183bed,'lastWritten':null};var _0x3c3838=_0x24c83c[_0x39302d(0x25e)],_0x5ca6b7=Math['abs'](_0x3c3838);if(_0x5ca6b7<-0xc1*0x2e+-0x1692+-0xe5*-0x40+0.0001||_0x616644['ORhZM'](_0x5ca6b7,0x1e5ae+-0x1*0x4f5c+0x7*-0x23e)){if(_0x616644[_0x39302d(0xad4)]!=='ejqMc'){var _0x19e714=_0x616644['HjIpv'](_0x4182e9),_0x4256e3=null,_0x164bd7=null,_0xf80751=_0x2b113d();if(_0xf80751){var _0xf50205=_0x4203dc(_0xf80751[_0x39302d(0x649)],[_0xf80751['eye'][-0xe5*-0xb+0x5*-0x103+-0x6*0xcc],_0xf80751[_0x39302d(0x649)][-0x2410+0x4*-0x10f+-0x3*-0xd6f],_0xf80751[_0x39302d(0x649)][-0xdd*-0x28+-0x1*-0x217b+-0x4401]+(0x1*0x1d61+0x483+-0x21e3)],-0x86*0x1c+0x2e*0x9d+-0x9a6,0x2599+0x813+0xb*-0x3cc);_0xf50205&&(_0x4256e3=_0xf50205['x']/(-0x1c26+0x675+-0x1999*-0x1),_0x164bd7=_0x616644['CIuTO'](_0xf50205['y'],-0x59*-0x6b+0x19*0x7+-0x21fa));}return{'identified':_0x2e1a72['ident'+'ified'],'why':_0x45434e[_0x39302d(0x7f2)],'rawPitch':_0x5dee87[_0x39302d(0x5e7)],'rawYaw':_0x2b5a66[_0x39302d(0x32a)],'fov':_0xb8ce64[_0x39302d(0x11d)],'fovSane':_0xdf9eae[_0x39302d(0x11d)]>=0x1369+-0xf96+-0x1*0x397&&_0x616644['jKoKa'](_0x360f58[_0x39302d(0x11d)],0x732+0x2f8+-0x9bc),'centreX':_0x4256e3,'centreY':_0x164bd7};}else{_0x447df4[_0x39302d(0xb0c)]({'o':_0x842e36,'v':_0x183bed,'why':_0x39302d(0xc1)+'usibl'+'e'});continue;}}_0x5329ec[_0x39302d(0xb0c)]({'o':_0x842e36,'v':_0x183bed,'a':_0x5ca6b7,'base':_0x3c3838,'key':_0x50833f,'st':_0x24c83c});}var _0x3c2049=[];for(var _0x33b060=-0x143*-0x11+-0x26e6*0x1+0x1173;_0x33b060<_0x5329ec['lengt'+'h'];_0x33b060++){var _0x229bc2=_0x5329ec[_0x33b060]['a'],_0x3f4615=null;for(var _0x3fb00f=0x123*0x7+0x1*-0x1ec1+0x16cc;_0x616644['JFKCG'](_0x3fb00f,_0x3c2049[_0x39302d(0xc4)+'h']);_0x3fb00f++){var _0x8c96a1=_0x3c2049[_0x3fb00f][_0x39302d(0x20f)]/_0x229bc2;if(_0x616644['aznOz'](_0x8c96a1,_0x616644[_0x39302d(0x7c0)](-0x1d3*-0x13+-0x869*-0x1+-0x2b11,_0x3a7421))&&_0x616644[_0x39302d(0x20e)](_0x8c96a1,0x1be*0x12+0x25*-0xa3+-0x7cc+_0x3a7421)){if('pmidx'===_0x616644['QmPsH']){var _0x5d9a62=_0x39f805['nhFgW'](_0x56a584);if(_0x5d9a62&&_0x5d9a62['Modul'+'e']&&_0x5d9a62['Modul'+'e'][_0x39302d(0x6f5)+'8']&&_0x5d9a62['Modul'+'e']['HEAPU'+'8'][_0x39302d(0x14d)+'r'])return _0x5d9a62['Modul'+'e'][_0x39302d(0x6f5)+'8'];}else{_0x3f4615=_0x3c2049[_0x3fb00f];break;}}}!_0x3f4615&&(_0x3f4615={'mean':_0x229bc2,'members':[]},_0x3c2049[_0x39302d(0xb0c)](_0x3f4615));_0x3f4615['membe'+'rs']['push'](_0x5329ec[_0x33b060]),_0x3f4615['mean']=-0x3b6+-0x86*-0x15+-0x748;for(var _0x45d6e4=-0x1*-0x130d+0x1*-0x19b6+-0x155*-0x5;_0x45d6e4<_0x3f4615['membe'+'rs']['lengt'+'h'];_0x45d6e4++)_0x3f4615['mean']+=_0x3f4615['membe'+'rs'][_0x45d6e4]['a'];_0x3f4615[_0x39302d(0x20f)]/=_0x3f4615[_0x39302d(0x9ca)+'rs']['lengt'+'h'];}var _0x55f7a0=[];for(var _0x381ec4=-0x2*-0x907+-0xa56*0x1+-0x7b8;_0x381ec4<_0x3c2049[_0x39302d(0xc4)+'h'];_0x381ec4++){if(_0x616644[_0x39302d(0x34d)]!==_0x39302d(0x44a))try{if(!_0x44bb9f[_0x39302d(0x9a4)])return;var _0x30bc26=_0x616644[_0x39302d(0x9d)](_0x1eab80);_0x53a49a['petal'][_0x39302d(0x28c)][_0x39302d(0x476)+'ty']=_0x385bd8['open']?'1':_0x30bc26?'.8':_0x616644[_0x39302d(0xacc)],_0x57c212['petal']['title']=_0x30bc26?'Sakur'+_0x39302d(0x75c)+_0x39302d(0x182)+'z\x20(In'+_0x39302d(0x890):_0x616644[_0x39302d(0xb28)];}catch(_0x5a13e0){}else{if(_0x616644['ihBwL'](_0x3c2049[_0x381ec4]['membe'+'rs']['lengt'+'h'],_0x5a0b56))_0x55f7a0[_0x39302d(0xb0c)](_0x3c2049[_0x381ec4]);}}if(!_0x55f7a0[_0x39302d(0xc4)+'h']){_0x447df4[_0x39302d(0xb0c)]({'o':-(0x1416+0x150d+-0x2922),'v':0x0,'why':_0x616644[_0x39302d(0xaad)](_0x616644[_0x39302d(0x432)](_0x39302d(0x251)+'oup\x20o'+'f\x20',_0x5a0b56),_0x616644['avLXi'])});return;}var _0x2f5531=_0x55f7a0[-0xa1d*-0x1+0x2525+0x20e*-0x17][_0x39302d(0x20f)];for(var _0xbaab7b=0x1bb5+-0x49*-0x49+-0x3086;_0xbaab7b<_0x55f7a0['lengt'+'h'];_0xbaab7b++)if(_0x55f7a0[_0xbaab7b]['mean']<_0x2f5531)_0x2f5531=_0x55f7a0[_0xbaab7b][_0x39302d(0x20f)];var _0x1b075c=_0x616644[_0x39302d(0x645)](_0x2f5531,-0x1*0x13e2+-0x3d*0x5b+0xddb*0x3+0.5);for(var _0x1f3ef2=-0xe6a+-0x257*-0x10+-0x1706*0x1;_0x1f3ef2<_0x3c2049[_0x39302d(0xc4)+'h'];_0x1f3ef2++){if(_0x616644[_0x39302d(0x28e)](_0x616644[_0x39302d(0xb1)],'PbjLp')){if(_0x3c2049[_0x1f3ef2]['membe'+'rs'][_0x39302d(0xc4)+'h']>=_0x5a0b56)continue;for(var _0x43f58c=-0x4cf*0x1+0x2*0x711+-0x953;_0x43f58c<_0x3c2049[_0x1f3ef2]['membe'+'rs'][_0x39302d(0xc4)+'h'];_0x43f58c++){_0x447df4[_0x39302d(0xb0c)]({'o':_0x3c2049[_0x1f3ef2]['membe'+'rs'][_0x43f58c]['o'],'v':_0x3c2049[_0x1f3ef2]['membe'+'rs'][_0x43f58c]['v'],'why':_0x616644['ZjAza']});}}else{var _0x3f752c=_0x161410();if(!_0x3f752c)return null;try{return new _0x3699b0(_0x3f752c['buffe'+'r'],_0x3f752c[_0x39302d(0x773)+_0x39302d(0x177)],_0x3f752c[_0x39302d(0x821)+'ength']);}catch(_0x2eea33){return null;}}}for(var _0x12333d=0x53f+0xf*-0x89+0x2c8;_0x616644['GujGo'](_0x12333d,_0x55f7a0[_0x39302d(0xc4)+'h']);_0x12333d++){var _0x24f323=_0x55f7a0[_0x12333d][_0x39302d(0x9ca)+'rs'];for(var _0x5b30d1=-0x25ea+-0x539*-0x6+0x4*0x1a5;_0x5b30d1<_0x24f323[_0x39302d(0xc4)+'h'];_0x5b30d1++){if('vbrjR'===_0x616644[_0x39302d(0x5dd)]){var _0x48b41b=_0x24f323[_0x5b30d1];if(_0x616644[_0x39302d(0xa6f)](_0x48b41b['a'],_0x1b075c)){if(_0x616644[_0x39302d(0x3be)](_0x616644[_0x39302d(0x610)],_0x616644[_0x39302d(0x610)])){if(_0x5d820a[_0x15d138]['conte'+_0x39302d(0xb12)+_0x39302d(0x267)])_0x502efd[_0x31abb6]['conte'+'ntWin'+_0x39302d(0x267)][_0x39302d(0x27d)+_0x39302d(0x273)+'e'](_0x3c25ec,'*');}else{_0x447df4[_0x39302d(0xb0c)]({'o':_0x48b41b['o'],'v':_0x48b41b['v'],'why':_0x39302d(0x343)+_0x39302d(0x65e)+'r\x20'+_0x1b075c[_0x39302d(0x186)+'ed'](-0x2*-0xfda+-0x1804+-0x2*0x3d7)});continue;}}var _0x56c656=_0x616644['eGSIP'](_0x48b41b[_0x39302d(0x25e)],_0x5ecc68['facto'+'r']);_0x616644[_0x39302d(0x1cb)](_0x2ebc0b,_0xbcda1b,_0x48b41b['o'],_0x616644[_0x39302d(0x461)],_0x56c656)&&(_0x48b41b['st']['lastW'+_0x39302d(0xa2d)+'n']=Math['froun'+'d'](_0x56c656),_0x207f7e++,_0x4529f1[_0x39302d(0xb0c)]('0x'+_0x48b41b['o'][_0x39302d(0x834)+'ing'](0x1*0x2489+-0x22f8+-0x181)));}else _0x10f996[_0x39302d(0x492)]=_0x2fec7b,_0x5f0e97['v']=_0x18ea4e[0x2434+-0x1309+-0x112b];}}}else _0x165b85[_0x39302d(0xd3)+_0x39302d(0x92e)][_0x39302d(0xb0c)](_0x616644['VVOEf'](_0x616644[_0x39302d(0x5a0)](_0x39302d(0x6e2)+'resol'+'ved\x20'+_0x257911[_0x39302d(0x940)+_0x39302d(0x382)+_0x39302d(0xa6c)],'\x20of\x20'),_0x3e9032[_0x39302d(0x940)+'Total'])+('\x20hook'+_0x39302d(0x16b)+_0x39302d(0x16e)+_0x39302d(0x6e7)+_0x39302d(0x820)+'\x20but\x20'+_0x39302d(0x4c2)+_0x39302d(0x495)+_0x39302d(0xa13)+_0x39302d(0x179)+_0x39302d(0xe5)+'re\x20')+('(this'+',\x20Met'+_0x39302d(0xa1d)+_0x39302d(0x2cf)+'->\x20vo'+'id\x20do'+_0x39302d(0x141)+'t\x20mat'+_0x39302d(0x4c3)+_0x39302d(0x9a6)+_0x39302d(0x7d9)));}var _0x20a90a={'FPScontroller':[[0x1a8d+-0x10a3*-0x1+-0x2b20,_0x4ccb6b(0x836)],[-0xf64+-0x1*-0x5cf+-0x3*-0x33f,'obfF'],[-0x224a+-0x109a+-0x110c*-0x3,_0x616644[_0x4ccb6b(0x461)]],[0x70*-0x7+0x9*-0xa1+-0xb*-0xd3,_0x4ccb6b(0x836)],[0x6e0+-0x523*0x1+0x1*-0x14d,_0x616644['zyIhc']],[-0x5fc+-0x137f+0x1a03,_0x616644[_0x4ccb6b(0x461)]],[-0x1cc3+0xd30+0x13f*0xd,_0x616644['zyIhc']],[-0x2361+0x14a9+0xf70,'obfB'],[0x107*0x11+-0x24aa+-0x13f7*-0x1,_0x616644['zyIhc']],[0xe9b+0x515+-0x12d4,_0x616644['nuZwp']],[0xbf4+-0x6b*0x27+0x7*0xbf,'v3'],[-0x9d*0x5+0x14b8+-0x10bb,'u8'],[0x13a5+0x1770+0x2a25*-0x1,_0x616644[_0x4ccb6b(0x461)]],[-0x2f*-0x65+-0x3b*0x2a+-0x5*0x191,_0x616644['nuZwp']],[-0x3*-0x7ab+-0xf34+-0x6c1,'u8'],[-0x5e*0x9+0x7*0x353+-0x64d*0x3,_0x616644['nuZwp']],[0x1*-0x145c+0x20a0+-0x598*0x2,'u8'],[0x2048+0x1*0x2408+-0x433b*0x1,'u8'],[-0x1*0x1de1+-0x1*-0x13eb+0xda*0xd,_0x616644['zyIhc']],[-0x1b78+-0x1300+-0x2a6*-0x12,_0x616644[_0x4ccb6b(0x461)]],[-0x25f9+-0x748+0x2e8d*0x1,'f32'],[-0x1*-0x1b+0x451*0x2+-0x76d,_0x616644[_0x4ccb6b(0xaa3)]],[0x666+0xf7a*-0x1+-0xde*-0xc,'v3'],[-0x1*0x15e+0x1153*0x1+0xe95*-0x1,'v3'],[-0xaab*-0x1+0x16f7*0x1+-0x2036,_0x616644['PQHmr']],[0x24d7+-0x1c*-0x162+-0x1*0x4a1f,'f32'],[-0x80f*-0x3+0xe57+-0x24fc,'u8'],[0x239d+0x13f5+-0x3606,_0x4ccb6b(0x893)],[-0xa0*0x5+0xbc9+-0x711,'v3'],[-0x1a54+-0xa1*0x2b+-0x3703*-0x1,'u8'],[-0x46*0x4d+0xd*-0x2f5+0x1*0x3d33,_0x616644[_0x4ccb6b(0xaa3)]],[0x8*0xf2+0xb*0x115+-0xb*0x19d,_0x4ccb6b(0x893)],[-0x1*0x1601+0x1603*0x1+0x1ba,'u8'],[-0x5d5*-0x1+-0xfa4+0xb8c,'u8'],[0x2ef*0x1+0xb4*0x25+-0x1b33,_0x616644['zyIhc']],[0x1068+0x2d6+-0x1166,_0x4ccb6b(0x893)],[-0x397*-0x1+-0x7*0x469+0x1d24,'u8'],[-0x235*0x4+0x1773+-0xd*0xfb,'obfF'],[-0x3*-0x4be+0x19af+-0xb*0x373,'v3'],[0x1f8*0x13+-0x2*0x4ac+0xe*-0x1dc,'obfB'],[-0x5*0x4cf+0x42*0x7+-0x1855*-0x1,_0x616644[_0x4ccb6b(0xaa3)]],[0x1*-0x1bc5+-0x1951+0x3732,'f32'],[0xd*0x2c3+0x1049+-0x31e4,_0x616644[_0x4ccb6b(0xaa3)]],[-0x86+-0xf*0x232+0x23c4,'f32'],[-0x1714+-0x3*0x775+-0xfed*-0x3,_0x616644[_0x4ccb6b(0xaa3)]],[-0x1*0x2173+0x9*0x111+0x1a32,_0x616644[_0x4ccb6b(0xaa3)]],[-0x6b5+-0x2*0xa70+0x1df1,'u8'],[-0x2092+-0x2*-0xdad+0x795,'u8'],[0x5c9+0x1*0x1a3+0x50e*-0x1,'u8'],[0x7*-0x17d+0x2*0x915+0x19*-0x37,_0x4ccb6b(0x893)],[-0x1*0x20cf+-0x219*0x12+-0x3d7*-0x13,'u8'],[0x85b+-0x4eb*0x2+0x3e0,'u8'],[0x26f*-0x1+-0x199f*-0x1+0x428*-0x5,'f32'],[-0x67e+0x1263+0x979*-0x1,_0x616644[_0x4ccb6b(0xaa3)]],[0x2702+-0x623+-0xa25*0x3,_0x616644[_0x4ccb6b(0xaa3)]],[-0x3e*-0x3d+-0x3*-0x955+-0x2851*0x1,_0x616644[_0x4ccb6b(0xaa3)]],[-0x2*-0xbe7+-0x1108+0x26*-0x1d,_0x616644['PQHmr']],[0x12d1+0xce6+0x7*-0x42d,_0x616644[_0x4ccb6b(0xaa3)]],[-0x2f*-0xb5+-0xb1b*0x1+0x1*-0x13a0,'f32'],[0x1*0x19e3+-0x1ade*0x1+0x37f,'v3'],[0x3*0x79f+0xd1*0x15+-0x256e,'u8'],[-0x4bd*-0x2+-0x134f+0xc6d,'v3'],[0x473+0x5*0x376+-0x131d,_0x4ccb6b(0x893)],[0x1a2d*-0x1+-0x1ce+-0x7*-0x461,'v3'],[-0x526*0x1+0x1e*0x101+-0x1640,_0x4ccb6b(0x893)],[-0x1feb*0x1+-0x1*-0x18f5+0x9b2,'f32'],[0x25f9+0x1747+-0x3a80,_0x616644[_0x4ccb6b(0xaa3)]],[-0x7f2+0xcbb+-0xb*0x2f,'u8'],[0xe51+0x1*0x631+-0x11bd,'u8'],[0x1f90+-0x1ea+-0x1ade,_0x616644[_0x4ccb6b(0xaa3)]],[0x48*-0x65+0x22b1+-0x36d*0x1,_0x616644[_0x4ccb6b(0xaa3)]],[-0x137*0xd+-0x2f9*-0x6+0x1f*0x7,'v3'],[0x18d1+-0x137e+0x263*-0x1,'v3'],[0x1cd9+0x43f*-0x7+-0xd*-0x4c,_0x4ccb6b(0x893)],[0x6c5*0x5+0x6f5*0x4+-0x3aad,'f32'],[-0x1*-0x10a6+0x6f5*-0x4+0xe32,_0x616644['PQHmr']],[-0x9b4+-0x21d2+0x2e8e,_0x616644[_0x4ccb6b(0xaa3)]],[-0x145+-0x1095+-0x32*-0x6b,'v3'],[-0x26e1+0x258b*-0x1+0xb5c*0x7,'u8'],[-0x103b+0x653+0x22*0x62,'v3'],[-0xfa7*-0x2+-0x65c+-0x15ca,_0x616644['nuZwp']],[-0x1cf4+-0x24eb+0x450b*0x1,_0x4ccb6b(0x893)],[0x1a62+0x2d1*0x3+-0x1fa5,_0x4ccb6b(0x893)],[-0x1*-0x13af+0x2*-0xb35+0x5ef,_0x4ccb6b(0x893)],[0x112+-0xd9b*-0x1+-0xb71,_0x4ccb6b(0x893)],[-0xb*0x115+0x1*-0x1cfd+0x2c24,'u8'],[-0x1*0x1274+0x2*-0x346+0x1c41,'u8'],[0x1*0xd4c+0xc2*-0xb+-0x1aa,'u8'],[0x4e4+-0x2304+0x1*0x216d,'u8'],[0x1eed+-0x7a7*-0x5+-0x9*0x752,'u8'],[-0x142d+-0x860*0x2+0x283d*0x1,'f32'],[-0x1349*-0x1+-0x8*-0xa4+-0x3*0x707,_0x616644[_0x4ccb6b(0xaa3)]],[-0xe82+0xa32+0x7a8,_0x4ccb6b(0x893)],[0x1*-0xc63+-0x22d6+0x3295,_0x616644[_0x4ccb6b(0xaa3)]],[-0x1*0x2327+0x1e76*-0x1+-0x15*-0x349,'f32'],[-0x21b7+0x2347+0x1d4,'u8'],[0x101e+-0x1046+0x390,_0x4ccb6b(0x893)],[0x3b0+-0x1c8e*0x1+0x1c4a,_0x616644[_0x4ccb6b(0xaa3)]],[0x3a*0xa6+0x72d*-0x5+0x1b5*0x1,'u8'],[0x11*0x1c9+-0x15d1+0x6c*-0xc,'v3'],[0x556*0x3+0xc3a+-0x1c4*0xe,'v3'],[-0x2500+-0x69f+-0x1*-0x2f2f,'v3'],[-0x1b31+-0x1*-0x152b+-0x12*-0x89,_0x616644[_0x4ccb6b(0xaa3)]],[0x1d7f+-0x3b*-0x17+0x8c*-0x39,'f32'],[0x35*0x1f+-0xc3b+-0x25d*-0x4,'f32'],[-0x1*0x8db+0x677*0x3+0x6e2*-0x1,'v3'],[-0x26d5+-0xd6d*0x2+0x3*0x1721,_0x616644['nuZwp']],[-0xa76+-0x13c+-0x2*-0x7b5,'u8'],[0x21f*-0xa+-0x22ac+-0x3b9e*-0x1,_0x4ccb6b(0x3ad)],[0x11f*0x15+-0x22a8+0xedd,_0x4ccb6b(0x893)],[0x1e47+0x9ef+0x1239*-0x2,'f32'],[-0x1ce1+0x6*0x183+0x1797,_0x4ccb6b(0x893)],[-0x1f*-0x89+-0x1b38+-0x4cf*-0x3,_0x616644[_0x4ccb6b(0xaa3)]],[-0x25f3+0x11a0+-0xa7*-0x25,'v3'],[0x16a0+0x1ddb+-0x1*0x309f,_0x616644['nuZwp']],[0x4a8+0x2be+-0x52*0xb,'u8'],[0x1d50*0x1+0x1*-0x1005+-0x96a,'u8'],[-0x910+0x77*0x52+0x1*-0x192c,'u8'],[0x36d*0x3+-0xb47+0x4e4,_0x4ccb6b(0x893)],[0xf09*0x1+0x52d+0x104e*-0x1,_0x616644[_0x4ccb6b(0xaa4)]]],'HealthScript':[[0xd29*-0x1+0x5ae+0x1*0x7d3,'u8'],[0x17ec*-0x1+0x1e2d+-0x5e5,_0x616644['nuZwp']],[0x371*0x1+0x191*0x3+-0x7a4,_0x4ccb6b(0x893)],[0x2*0xdbe+0x2*-0x12d9+0xaba*0x1,'f32'],[0x1b8e+0x35b*-0x4+0x6cd*-0x2,_0x4ccb6b(0x893)],[-0x1*-0x1ef7+0xf1a+0x1*-0x2d85,_0x616644['PQHmr']],[0x2*-0x527+0x3*-0x65b+0x1def,_0x4ccb6b(0x893)],[0x22b7+-0x15e8+-0xc3b,_0x616644[_0x4ccb6b(0xaa3)]],[0x1bb8+0x5f6+-0x210e,_0x4ccb6b(0x3ad)],[0x1d92+0x74f+-0x243d*0x1,'i32'],[0x71f*0x1+0x1*-0x10e9+0xa72,'u8'],[-0xf20+-0xe09+0xee9*0x2,'u8'],[-0x1748*0x1+-0x5*-0x65e+-0x7e4,'u8'],[0x1d69+-0x16c*0x10+-0x5fe,'u8'],[-0xbf*0x3+-0x1573+0x4*0x61c,'obfI'],[-0x47f+-0xb46+0x1099*0x1,_0x4ccb6b(0x8e6)],[-0x116*-0x1f+-0x2416+0xd5*0x4,'obfI'],[0x3*0xb9d+0x1*-0xd2d+-0x14ae,'obfI'],[-0x183f+0x1d*-0x125+0x3a80,_0x616644[_0x4ccb6b(0x91d)]],[0x1*0x1320+-0x7ea*0x1+-0xa12,_0x616644['cRRkz']],[-0xdad*0x1+0xcc1+-0xa*-0x36,_0x616644['zyIhc']],[-0x15c5+0x2650+0x1*-0xf43,'f32'],[0x25fa*-0x1+0x14c2+0x1284,_0x4ccb6b(0x893)],[0x8*-0x4a8+0x964+-0x1*-0x1d2c,_0x4ccb6b(0x893)],[-0x18b0+-0x757+-0x215b*-0x1,'f32'],[-0x61+-0x213b+0x22f8,_0x616644[_0x4ccb6b(0xaa3)]],[-0x1881+-0x7*-0x368+0x209,'v3'],[0x2435*0x1+0x663+0x1b7*-0x18,_0x4ccb6b(0x893)],[0x1a71+0x1e+0x1*-0x1917,_0x616644[_0x4ccb6b(0xaa3)]],[0xbc+-0x1*-0x1df4+0x8*-0x3a6,'u8'],[-0x5a5+-0x2*-0x321+0xef*0x1,'u8'],[0x2694+-0x23*0x104+-0x1*0x178,_0x4ccb6b(0x3ad)]],'PlayerConfig':[],'WeaponManager':[[-0x1aef+-0x18e9+0x33f0,_0x4ccb6b(0x3ad)],[-0x1c3c*-0x1+0x1ac2+-0x36e2,_0x4ccb6b(0x3ad)],[0xf1d+-0x1*-0x19f6+0x1*-0x28f3,'u8'],[-0x1fe4+0x141b+0xbed,'i32'],[-0x1*-0x47b+-0x1652+0x123b,_0x616644[_0x4ccb6b(0x461)]],[0x2161+0x1798+-0x387d,_0x4ccb6b(0x893)],[-0x25c5+-0x175d+0xd*0x4be,_0x616644['nuZwp']],[-0x1c16+-0x65*0x5c+0x946*0x7,'u8'],[-0x1b80+-0x1*-0xc67+0x2e*0x57,'u8'],[0x12a*-0x7+0x50d*0x3+-0x13*0x57,'i32'],[-0x1*0x595+0x116a+-0xb45,_0x4ccb6b(0x893)],[0xdc2+-0x64*-0x2f+-0x1*0x1f86,_0x4ccb6b(0x893)],[-0x24c8+0x1*-0x481+0x29f5,_0x4ccb6b(0x3ad)],[-0x5*-0x269+-0x1f21+0x13d0*0x1,'u8'],[-0x19af*0x1+-0x13*0x167+0x3530,_0x4ccb6b(0x8e6)],[0xeca*-0x2+-0x133c+0x18e0*0x2,_0x616644[_0x4ccb6b(0x91d)]],[0xcb6+-0x336+-0x87c,_0x616644[_0x4ccb6b(0xaa3)]],[0x2e*-0x9+0x8e+0x218,_0x4ccb6b(0x893)],[-0x4fe*-0x5+0x2597+0xeb*-0x43,'f32'],[-0x4*0x43f+0xfba+0x2*0x12d,_0x4ccb6b(0x893)],[0xf5*0x15+-0x2*0x12aa+0x125b,_0x4ccb6b(0x893)],[-0x191d+0x2*-0x5ac+0x259d,'u8'],[-0x1436+0x25*0x33+-0x11*-0xd3,_0x616644[_0x4ccb6b(0x91d)]],[0x1*0x1f05+0x1b*-0xa+0x1*-0x1cb7,'obfI'],[-0x189*-0x6+-0x1ee3*0x1+0xd*0x1c5,_0x616644[_0x4ccb6b(0x91d)]],[-0x1d17+0xbb5+-0x25*-0x82,_0x616644[_0x4ccb6b(0x72f)]],[-0xd1a+-0x3ec+0x6e*0x2b,_0x4ccb6b(0xa17)],[-0x935+0x21ab+-0xb7b*0x2,'obfB'],[-0x289*-0xf+0x22e1+-0x475c,_0x4ccb6b(0xa17)],[0x1582+0x11e2+-0x970*0x4,'obfB'],[-0x1550+-0x1f3f+-0x1215*-0x3,'obfI'],[-0x1644+0xbcd+-0x2b*-0x49,'i32'],[-0x1bc8+-0x22*-0xe2+0x6*-0x12,'u8'],[0x140c+0x3*-0xa59+-0xcd3*-0x1,_0x4ccb6b(0x3ad)],[0x1cd5*-0x1+-0x4a0*0x4+0x1*0x312d,_0x616644[_0x4ccb6b(0xaa4)]],[0x69f*-0x5+-0xfc2*-0x1+0x1*0x1359,_0x616644['nuZwp']],[-0x87+0x1f57+-0x3*0x994,'u8'],[-0x7*0x3ad+-0x86*0x35+0x3795,'u8'],[-0x1c76*0x1+0x5*-0x399+0x3090,'u8'],[-0x24b0+0x2218+-0x1*-0x4b6,'u8'],[0x6a1*-0x1+-0x2561+0x2e21,'u8'],[-0x21*0x8c+-0x1bab+0x3007,_0x616644['nuZwp']],[0x1bb0+0x1081+-0x1*0x29d9,'u8']],'GG_GameManager':[[0x67e*0x1+0x1f*-0x96+0x36*0x38,'u8'],[0x1bab+0x2635+0x244*-0x1d,_0x616644[_0x4ccb6b(0xaa3)]],[0x1301+-0xac4+0x1*-0x7f9,'u8'],[-0x10ee*0x1+0x1*-0x7ef+-0x2*-0xc91,'u8'],[0x2d5*-0x1+-0x1de3+-0x100*-0x21,_0x4ccb6b(0x893)],[0x2*0x3a+0x713+0x1*-0x73b,_0x4ccb6b(0x893)],[-0x83*0x2f+-0x1*-0xdc8+0xa95,_0x4ccb6b(0x3ad)],[0x1*0x12fa+0x1793*-0x1+0x4ed,_0x4ccb6b(0x3ad)],[-0xfae+-0x1*-0x2494+-0x148e,'u8'],[0x1b7*0x8+-0x2556+0x1812,'u8'],[0x692*0x2+0x1*0x836+0x6*-0x37b,_0x4ccb6b(0x893)],[-0x1a1f+-0x3*-0x61f+-0x2*-0x41f,_0x616644[_0x4ccb6b(0xaa3)]],[0x1afb+-0x1599+-0x4d2,_0x4ccb6b(0x3ad)],[0x4*0x63d+0x9*-0x5+0x3*-0x811,'u8'],[-0x1*0x1939+0x11*0x17d+0xa0,'i32'],[0x103*0x5+0x250+0x1*-0x6a3,'i32'],[0x7*0x18e+0x25ef+-0x3011*0x1,_0x616644[_0x4ccb6b(0xaa4)]],[0xd*-0x61+-0x1*0x15cd+0x1ba2,_0x616644['OsXiu']],[-0x1f*-0xcd+0x5*0x161+-0xe*0x232,'obfI'],[-0x1000+0x174b+-0xb*0x91,_0x616644[_0x4ccb6b(0x91d)]],[0x15ed+0x1482+0xdc1*-0x3,'u8'],[-0x2a8+-0x4a*-0xe+-0x2*0x1a,_0x4ccb6b(0x3ad)],[-0x1625+-0x7*-0xb6+-0x128f*-0x1,'u8'],[0x126b+-0x756+-0x9a5,_0x616644[_0x4ccb6b(0xaa3)]],[0x1127*0x2+0x1*0x1b36+-0x3c04,'u8'],[0x270d*-0x1+0x243a+-0x5*-0xdf,'u8'],[0x201d+0x51a*0x7+-0x422f,'u8'],[-0x3*-0x8ba+-0x1e64+0x5de,'i32'],[-0x2*-0x8e9+0x10e9+-0x28b*0xd,_0x4ccb6b(0x893)],[0x4*0x533+-0x2369+0x104d,'u8'],[-0x21a8+-0x1*0x1519+0x3872,'u8'],[-0x526+0x8*0x4a0+0x85*-0x3a,_0x4ccb6b(0x3ad)],[0x6*0x4ef+-0x1*0x1c19+0x3b,_0x4ccb6b(0x3ad)],[0x1b43+-0x1*-0x10e2+0x2a65*-0x1,_0x616644[_0x4ccb6b(0xaa3)]],[0x1*0x17e6+0x1339+-0x295b,_0x616644[_0x4ccb6b(0xaa4)]],[-0x1e*0xf3+-0x15*0x8d+0x29d3,'f32'],[-0x1bc9+0x122b+-0x1e7*-0x6,'i32'],[-0x20f4+-0x1*0x18b4+0x3b78,_0x616644[_0x4ccb6b(0xaa4)]]],'TDM_GameManager':[[-0x1b0a*-0x1+-0x1d43+-0x1*-0x251,'u8'],[0x8c*-0x42+0x1649+0xdef,'u8'],[0xf68+-0x1f7*-0x13+-0x103*0x34,'u8'],[0x886*-0x1+-0x266b+0x2f15,_0x616644[_0x4ccb6b(0xaa3)]],[0x1*-0x6bd+0xcef*-0x2+0x4b5*0x7,'u8'],[0x29*0xe5+0x1f45+-0xd3*0x52,_0x4ccb6b(0x893)],[-0x16d3*0x1+-0x1369+-0x38d*-0xc,_0x4ccb6b(0x893)],[-0x15d6+-0xd*-0x2bd+-0xd5f,_0x616644[_0x4ccb6b(0xaa4)]],[-0x313*-0x7+0x145e*-0x1+-0xbf,_0x616644[_0x4ccb6b(0xaa4)]],[0x5f*0xf+0x297+0x16*-0x5a,'u8'],[-0x1c80+-0x79b*-0x1+0x1552,'u8'],[0x1539*-0x1+0x1e42+-0x899*0x1,_0x616644['PQHmr']],[-0x7*-0x4ca+-0xc*-0x10c+0x213*-0x16,'f32'],[-0x77*0x25+0x851*0x3+-0x748,_0x4ccb6b(0x3ad)],[-0x1ee4*-0x1+0x2455+-0x42ad,'u8'],[-0x12a+0x136a+-0x46c*0x4,_0x616644[_0x4ccb6b(0x91d)]],[0x1765*-0x1+0x20a2+-0x865,_0x4ccb6b(0x8e6)],[0x2f*-0x61+-0x2*-0x4e4+0x8f3,_0x4ccb6b(0x8e6)],[-0x15dd+-0x8*-0x1b+0x1*0x1605,_0x616644[_0x4ccb6b(0x91d)]],[0x1*-0x1227+0x1e95+0x1*-0xb5a,'u8'],[-0xc10*-0x1+0x2702*0x1+-0x31b6,'u8'],[-0x151a+-0xefa+0x2574,_0x616644[_0x4ccb6b(0xaa4)]],[0x2464+0x1b5*0xd+-0x3929,'u8'],[0x29f+0x23d9+-0x1*0x24f4,'u8'],[-0x4e1*-0x1+-0xf14+0xb*0x111,_0x4ccb6b(0x893)],[0x68*-0x5a+0xa92+0x32*0x8d,_0x4ccb6b(0x3ad)],[-0x59*0x39+-0x1451*0x1+0x29b2,_0x4ccb6b(0x3ad)],[0x16*-0x193+-0x114e+-0x19*-0x224,_0x616644['PQHmr']],[0x101*0x4+-0x59*-0x69+-0x1*0x26ed,_0x616644[_0x4ccb6b(0xaa4)]],[0x2*-0x809+0x34+0x117a*0x1,'i32'],[0x1000+-0x4f*0x67+0x1169,_0x4ccb6b(0x893)],[0x1563+-0x16dc+0x31d*0x1,'f32'],[0x15c2+-0x1*-0x152b+-0x2945,_0x4ccb6b(0x3ad)],[0xe35+-0x44*-0x5+0xdd9*-0x1,'u8'],[0x1*-0x12ff+-0x1*-0xa57+0xa59,'u8'],[0x1829*0x1+-0x147a+-0x1*0x1f7,_0x616644[_0x4ccb6b(0xaa3)]]],'PhotonNetworkSync':[[0x943+0xa6c+-0x137b,'v3'],[-0x314+0x26b6+-0x2362,_0x4ccb6b(0x3ad)],[0x72d+0x1115+-0x25*0xa6,'u8'],[-0x788+-0x120*-0x6+0x10d,'u8'],[-0x2277+-0x7b5*-0x3+-0x30*-0x3e,'v3'],[0x3*0xaf9+-0x2*-0x469+-0x2969*0x1,'u8'],[-0x2*-0x111d+-0x30*0x68+0x7*-0x20e,_0x4ccb6b(0x3ad)],[0x1*0x9e2+0x8d*0x36+-0x2744,_0x4ccb6b(0x3ad)],[-0xd03*-0x2+0x1*-0x517+-0x148f,_0x616644[_0x4ccb6b(0xaa3)]],[-0x7f7*-0x1+0x10e3*-0x1+-0x1*-0x950,'f32'],[0x233d+-0x17f2+-0xae3,_0x616644['PQHmr']],[-0x6ca+-0x177f+0x1eb5,'v3'],[-0x2*0x8cb+0xe1f*0x1+0x3ef,'f32'],[0x2dd*-0xa+-0x9d5*0x2+0x30c8,_0x4ccb6b(0x893)],[0x95e+0xf14+0x5*-0x4ca,_0x616644['nuZwp']],[-0x5aa*0x6+-0x1*-0x2223+0x61*0x1,'f32']],'MouseLook':[[-0x16*-0x26+0x1129*-0x2+0x1f22,_0x616644['PQHmr']],[0x1143+0x1c67*0x1+-0x2d92,_0x616644['PQHmr']],[0x1*-0x1d5d+0x9c+0x1cdd,'f32'],[-0x1b1b+-0xe5f+0x299a,_0x616644['PQHmr']],[0x95+-0xfdc+0xf6b,_0x616644['PQHmr']],[-0x130c+0x3*0x1cf+-0x1*-0xdc7,_0x616644[_0x4ccb6b(0xaa3)]],[-0x1c34+-0x1*0x389+0x1fed*0x1,_0x616644[_0x4ccb6b(0xaa3)]],[-0x940*-0x2+-0x505+-0xb*0x135,'u8'],[-0x1*0x2182+-0x13*-0x15e+-0x3e*-0x20,'f32'],[0x1*0xf2c+-0xdde+-0x112,'f32'],[-0x11bc+-0x146b*-0x1+-0x59*0x7,_0x4ccb6b(0x3ad)],[-0x10b1+0x1f6*0x1+0xeff,'u8'],[-0x16d9+0x1b4*0x6+0xce9,'v2']],'NetworkPlayerAnimations':[[-0x745+0x20e*-0x10+0x1*0x28cd,'v3'],[0x900+0x44a+-0xc96,'v3'],[0x24e3+-0x2487+0x1*0x64,'u8'],[-0x1cd9+-0x2*-0x110c+-0x47b,_0x616644[_0x4ccb6b(0xaa4)]],[-0x196+0x3fd*-0x3+-0x4c7*-0x3,_0x616644[_0x4ccb6b(0xaa4)]],[-0x1*-0x1a05+-0x37c+-0x15bd,_0x616644['PQHmr']],[-0x844*0x1+0xbf*0x17+0x815*-0x1,'f32'],[0x1906+-0x254b*-0x1+-0x3d75,_0x4ccb6b(0x893)],[0xf85+0x5*-0x553+0xbfa,_0x616644[_0x4ccb6b(0xaa3)]],[0x45b*0x5+0x533*-0x7+-0x2*-0x7c3,'f32'],[-0x14*0x131+-0x1748+0x4*0xc02,_0x616644[_0x4ccb6b(0xaa3)]],[-0x18*0x12d+0x125f+0xb*0xfb,_0x616644['PQHmr']],[0x1*0x1f75+-0xeca+-0xfb7,_0x616644[_0x4ccb6b(0xaa3)]],[-0xd4*-0x26+0xdff+-0xed5*0x3,_0x4ccb6b(0x893)],[-0xa86+-0x1907+0x2489,_0x4ccb6b(0x893)],[0x23f3+-0x1*0x1333+-0xfc0,_0x4ccb6b(0x893)],[0x2a*-0x47+-0x1375+0x201f,_0x4ccb6b(0x893)],[0x1603+-0x2316+-0x9d*-0x17,_0x4ccb6b(0x3ad)],[-0x1d*-0xd+0x2*0x490+-0x1*0x98d,'u8'],[-0xe9e*-0x1+-0x1af0+0x476*0x3,_0x616644[_0x4ccb6b(0xaa4)]],[-0x189d+-0x2*0xd1+-0x1*-0x1b53,'i32'],[-0x1*-0x12f7+-0x21dc+-0x1*-0xffd,'u8'],[-0x9*0xf7+0x1a05*0x1+-0x103a,_0x4ccb6b(0x893)],[-0x1878+-0x22*0x86+0x4*0xad9,_0x616644[_0x4ccb6b(0xaa3)]],[-0x2263+0x704+-0x981*-0x3,_0x616644['PQHmr']],[0x1*-0x1c03+-0x24eb*-0x1+-0x7c0,_0x4ccb6b(0x893)],[-0x1e3b+0xb0d*-0x3+-0x2047*-0x2,'u8'],[-0x1ba1+0x1071+-0x2*-0x634,'u8'],[-0xba2+0x17ef+-0xb11,'v3'],[-0x547+0x991+-0x23*0x16,'v3'],[-0x2*-0xbf5+0x5d1+0x1c27*-0x1,'u8']],'NPC_Cotroller':[[0x2*-0x55f+-0x1d2b+0x27fd*0x1,'v3'],[-0x43f*0x3+0xd1d+-0x40,'f32'],[0xf*-0x1f5+0x13f3*-0x1+0x3172,_0x4ccb6b(0x893)],[0x1*0x17be+0xa8d+-0x21f5*0x1,'u8'],[-0x20f3+-0x3*-0xb32+0x1*-0x4c,'u8'],[-0x3d6*-0x1+0x3*-0xb27+0x1dfb,'v3'],[-0x535*0x1+0x1bdb+-0x160a,'u8'],[-0x221+0x3ea+-0x129*0x1,_0x616644[_0x4ccb6b(0xaa3)]],[0x830+-0x2d*-0x92+-0xb12*0x3,_0x616644['PQHmr']],[-0x1fb4+0x24bd+-0x451,_0x616644[_0x4ccb6b(0xaa3)]],[0xf48+0x3*-0xcb1+-0x1*-0x1787,_0x4ccb6b(0x893)],[0x774+0x955*-0x3+0x35*0x67,'u8'],[-0x1*-0x161f+0x918*-0x3+0x5f5,_0x616644['PQHmr']],[0xfe7+0x3d6*-0x3+-0x1*0x38d,_0x616644[_0x4ccb6b(0xaa3)]],[0x1296+0xc2*-0x2f+0x11e4,_0x616644[_0x4ccb6b(0xaa3)]],[-0x19e8+-0x13e6+-0xef*-0x32,'f32'],[-0x17*-0x16e+0xa90+-0x2a8e,'u8'],[0x532+-0xa78+0x632,_0x616644['PQHmr']],[-0x2391+-0xecd*0x1+0x88d*0x6,'v3'],[0xb7f*0x1+0x245f*-0x1+0x5*0x52c,_0x616644[_0x4ccb6b(0xaa3)]],[-0x21*0x3e+-0x3*0x309+0x1*0x1219,_0x616644['nuZwp']],[-0x1ed4*0x1+0x1dae+0x2*0x115,'f32'],[0xb19+-0x1a66+0x1055,_0x616644[_0x4ccb6b(0xaa3)]],[-0xa60+-0x14d+0xcb9,_0x616644['PQHmr']],[-0x12fa+0x2*-0x10dd+-0x6b9*-0x8,'v3'],[-0x1b3*-0x13+0x5a4+-0x24cd,_0x616644[_0x4ccb6b(0xaa3)]],[-0x1621*-0x1+-0xe9c+-0x661,_0x616644['PQHmr']],[0x282*-0xd+-0x1714+-0x38e2*-0x1,'v3'],[-0x8db*0x1+0x8*0x416+-0x1691,'u8'],[0x1*-0xf8d+0x2588+-0x2f5*0x7,'f32'],[-0x1*-0xe9+-0xe00+0xe67,'v3'],[0xbb9*-0x1+-0x7bc+0x14d5,_0x616644[_0x4ccb6b(0xaa4)]],[-0x1*0xd5b+-0x8bd+0x1784,_0x616644['nuZwp']],[0x1da+0x2189+-0x21f3,_0x4ccb6b(0x893)],[0x1380+-0x1*-0xd49+0xd*-0x269,'u8'],[-0x40c+-0x1*-0x107b+-0xaf7,'v4'],[-0x1aa*0xb+0x1f51+-0xb7b,'f32'],[-0x180b+0x2*-0x369+0x1*0x2069,_0x616644[_0x4ccb6b(0xaa3)]],[-0x2*-0x152+0x13*0x14b+-0x19a5,_0x4ccb6b(0x893)],[-0x1b32+-0x21a+0x7b9*0x4,'u8'],[-0x71d+0x3eb+0x4d2,_0x4ccb6b(0x3ad)]],'TargetHealth':[[-0xf12+-0x210d+0x302f,_0x616644[_0x4ccb6b(0xaa4)]],[0x1*-0x1957+0xa*0x305+-0x4c7,_0x616644[_0x4ccb6b(0xaa4)]],[0x1249+-0xaa4+0x7f*-0xf,'u8'],[-0x1cb*-0x9+0x1*0x829+-0x1808,'i32'],[0x24c3+0xde3+-0x6*0x865,_0x616644[_0x4ccb6b(0xaa4)]],[-0xa36*0x1+0x1*-0x141b+-0x1cd*-0x11,_0x4ccb6b(0x3ad)],[-0x12b3*-0x1+0x1789*0x1+0xa7b*-0x4,_0x616644['nuZwp']],[0x1de8+-0xbab+-0x1*0x11b9,_0x4ccb6b(0x893)],[0x1715*0x1+-0x1*0x899+-0x1be*0x8,_0x4ccb6b(0x893)],[0x2064+-0x220f+-0x23b*-0x1,'u8'],[0x131f+0x2235+-0x34c0,_0x616644['PQHmr']],[0x2*-0x818+0x1*0x1e19+-0x1*0xd45,'u8'],[0x22b+-0x867*0x3+0x17b2,_0x616644[_0x4ccb6b(0xaa4)]],[-0x149*0xa+-0xda*0x1d+0x2*0x131c,'i32'],[0x1fa5+-0x5c8*0x1+0x1*-0x191d,_0x616644[_0x4ccb6b(0xaa3)]],[-0x842+-0x3*0x264+0x2*0x81d,'u8']],'SectatorCamera':[[-0x51d*-0x7+0x238c+-0x3*0x17c1,_0x4ccb6b(0x893)],[-0x702+0x1f09+-0x17ef,_0x4ccb6b(0x893)],[-0x208c+0xf4f+-0x1*-0x1159,_0x4ccb6b(0x893)],[0x1*-0x18f7+-0xaf9*-0x2+-0x73*-0x7,'v3'],[-0x224c+-0x2*0x24b+0x270e,'v3'],[0xb96+-0x26a*0xf+0x18e8,_0x616644[_0x4ccb6b(0xaa4)]],[0x1637+0x1a66+-0x3051,_0x4ccb6b(0x3ad)],[0x16b5*0x1+0x1*0x1009+-0x1337*0x2,_0x616644['PQHmr']],[-0x11c2*-0x1+0x375*-0x3+0x8b*-0xd,_0x616644['nuZwp']],[-0x68d+0x2315*-0x1+-0x1*-0x29fa,_0x616644[_0x4ccb6b(0xaa3)]],[0x1632+0x214f+-0x3725,'u8'],[-0x22+0x176f+-0x1*0x16ed,'v3'],[-0xa42+0x1307+-0x859,'v4'],[0x230+0x1885+-0x1a39,'u8'],[0x56*0x1d+0x2ff+0xd*-0xf1,_0x616644[_0x4ccb6b(0xaa4)]]],'UISettings':[[0x2359*-0x1+-0x7c*-0x3b+0x5*0x161,_0x4ccb6b(0x3ad)],[0x3d*-0x18+-0x47*-0x7a+0x1bf6*-0x1,_0x4ccb6b(0x893)],[0xca*0x1c+-0x80a+-0xcca,'u8'],[-0x35*-0x35+-0xf6e+0x5bd,_0x616644[_0x4ccb6b(0xaa4)]],[-0x7*0x8f+0x1e56+-0x1919,_0x616644['nuZwp']],[-0x29*0x47+-0x2*-0x305+-0x6ad*-0x1,'i32'],[-0x1*-0xbb4+0x373*0x1+-0xdcb*0x1,'u8'],[-0x4eb+-0x15*-0x1cf+0x21d*-0xf,'u8'],[-0xa*0x34a+0x302*-0x8+-0x1d29*-0x2,'u8'],[0x3b*0x57+0x5*0x3c1+-0x2573,'u8'],[0x1*0xe56+-0x1f9d*0x1+0x12a7*0x1,'u8'],[-0x99e*-0x1+-0x1aac+-0x79*-0x27,'u8'],[-0xae7+0x3*-0xa7b+0xc1*0x3a,'u8'],[0xc10+-0x22c8+0x1874,_0x4ccb6b(0x893)],[-0x23a8+0x1e52+0x71a,'f32'],[0x2609+0x36*0xc+0x43*-0x93,'u8'],[-0x10*0x1c3+0x1141*0x2+-0x3d2,_0x616644[_0x4ccb6b(0xaa3)]],[0x22c9+-0x748+-0x18e1,_0x4ccb6b(0x3ad)],[-0x751*0x1+0x6e*0x1+0x9db,'u8'],[-0xc*0x8b+0x1f90+-0x1570,'u8'],[0x222+0x5*-0x1db+0xac5,'v2'],[-0x2d3*0x7+0x2506*0x1+-0xd99*0x1,'v2'],[-0x989*0x4+0x19db+0x2f*0x57,'u8'],[0x16af+0x2*-0xc2c+-0x51*-0x11,'u8'],[0x1879+0x19f4+-0x2ea1,_0x616644['PQHmr']],[-0x1867*-0x1+-0xa2*-0x1e+0xb*-0x399,'v3'],[0x14*-0x1aa+-0x1*-0x1d68+0x7c0,_0x4ccb6b(0x893)],[-0x187+-0x17*0x97+0x654*0x3,_0x616644['PQHmr']],[-0x11b*-0x2+-0xe7c+0x102e,_0x616644['PQHmr']],[-0x1876+0x18b3+-0x3b3*-0x1,'u8'],[-0x3e*0x82+-0x5*0x51a+0x3cef,'u8'],[-0x1*-0x110c+0x1b1d+-0x1*0x2835,'i32'],[-0xb47*0x2+-0x696*0x1+0x25e*0xe,_0x4ccb6b(0x3ad)],[-0x7db+-0xa45*0x2+0x2069,'i32'],[-0x5*-0x579+0xf70+0x5*-0x7c1,_0x4ccb6b(0x3ad)],[0x1917+0x21ff+0xb02*-0x5,_0x616644['nuZwp']],[-0x191*-0x2+-0x2*-0x781+-0xe14,_0x616644['nuZwp']],[0xd45+-0x11*0x65+0x1*-0x27c,'i32'],[-0x1f9+-0x20b4+0x26c5*0x1,'i32'],[-0x55f*0x2+0x333+-0x13*-0x9d,_0x4ccb6b(0x3ad)],[0x9d3+-0x2*-0xf0d+0x263*-0xf,_0x4ccb6b(0x3ad)],[-0x1e0a+-0x8af+-0x67*-0x6b,'u8'],[0x1c9*-0x15+-0x140+0x2b12,'u8'],[-0x61f*-0x1+0x1d*0xa1+0xa03*-0x2,'u8'],[0x1*-0x1e16+0x347*-0x7+-0x395e*-0x1,'u8'],[0x5*-0x541+0x1198+0xd39,_0x4ccb6b(0x893)]]},_0x89634c={},_0x1d185b={};function _0x101d4f(_0x20865e,_0x41707e,_0x15cc86){var _0x2330cd=_0x4ccb6b,_0xbe05b9={'wYNjN':'hello','srSzQ':function(_0x68f25c){return _0x68f25c();},'tADxi':function(_0x493183,_0x2fee94){return _0x493183===_0x2fee94;},'zicFD':function(_0x28b2f0,_0x4ff4d2){var _0x87cbb1=_0x35e4;return _0x616644[_0x87cbb1(0x230)](_0x28b2f0,_0x4ff4d2);},'olEhs':_0x2330cd(0x620)+_0x2330cd(0x77b)+'diffe'+_0x2330cd(0x63f)+_0x2330cd(0x1a0)+'me\x20in'+'stanc'+_0x2330cd(0x74c)+_0x2330cd(0x4df)+'\x20glob'+'al\x20no'+_0x2330cd(0x491)+_0x2330cd(0x9ab),'zxdkI':_0x2330cd(0x6f7)+'a-sw-'+_0x2330cd(0x7ba)+'s','pSZWH':function(_0x28d330,_0x36f5fe){var _0x45545f=_0x2330cd;return _0x616644[_0x45545f(0x9f)](_0x28d330,_0x36f5fe);},'dbEVo':'JZoQt','eSlJw':_0x616644['MSVMs'],'VlsSu':_0x616644['UnVJp'],'huHfT':function(_0x5b6007){return _0x5b6007();},'WAYxy':function(_0x213926,_0x361b20){return _0x213926===_0x361b20;},'jlmrO':'FPSco'+'ntrol'+_0x2330cd(0x64f),'gZJgx':function(_0x4d79be,_0x481c18){var _0x31064f=_0x2330cd;return _0x616644[_0x31064f(0x919)](_0x4d79be,_0x481c18);}};return'vJOvk'===_0x616644[_0x2330cd(0x1e0)]?null:function(_0x5744b6){var _0x5e12c4=_0x2330cd,_0x2eabcc={'MJsoC':_0x5e12c4(0xa86)+'n._ru'+_0x5e12c4(0xa18)+_0x5e12c4(0x86b)+'ot\x20wi'+_0x5e12c4(0x47e)+_0x5e12c4(0x791)+_0x5e12c4(0x6a3)+_0x5e12c4(0x385)+'Runti'+'me\x20-\x20'+_0x5e12c4(0x87e)+'lugin'+_0x5e12c4(0x79a)+_0x5e12c4(0x9d3)+'\x20','vszBh':_0xbe05b9[_0x5e12c4(0x470)],'wLdjg':function(_0x369cbc,_0x27f078){return _0x369cbc===_0x27f078;},'zglOJ':_0xbe05b9[_0x5e12c4(0x3c8)]};if(_0xbe05b9[_0x5e12c4(0xae7)]('JZoQt',_0xbe05b9[_0x5e12c4(0x625)]))return-0x303*0xa+0x93*0x26+0x84c;else try{var _0x3f1b00=_0x5744b6&&_0x5744b6[_0x5e12c4(0x3f9)]?_0x5744b6[_0x5e12c4(0x3f9)]():0x9e9+0x1*0xc77+0x2*-0xb30;if(!_0x3f1b00)return;var _0xb61d0d=_0x1d185b[_0x20865e]||(_0x1d185b[_0x20865e]={}),_0x5dfc80=_0xb61d0d[_0x3f1b00];if(!_0x5dfc80)_0x5dfc80=_0xb61d0d[_0x3f1b00]={'ptr':_0x3f1b00,'firstSeen':Date[_0x5e12c4(0x976)](),'hits':0x0};_0x5dfc80[_0x5e12c4(0xae5)]++;if(_0x15cc86){if(!_0x89634c[_0x3f1b00])_0x89634c[_0x3f1b00]={'ptr':_0x3f1b00,'kind':_0x20865e,'firstSeen':Date[_0x5e12c4(0x976)](),'hits':0x0};_0x89634c[_0x3f1b00][_0x5e12c4(0xae5)]++;}else{if(_0x5e12c4(0x680)===_0xbe05b9['eSlJw']){if(_0xf380a3[_0x5e12c4(0x577)]===_0xbe05b9['wYNjN']){_0xbe05b9['srSzQ'](_0x320168)['set']({'host':_0x9445ec['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0xbe05b9['tADxi'](_0x4ab3a8['kind'],_0x5e12c4(0xa0)+'t'))_0x3a6de2()['set'](_0x4d920e[_0x5e12c4(0xa0)+'t']);}else{var _0x48893f=_0x19a388[_0x20865e];if(!_0x48893f||_0xbe05b9[_0x5e12c4(0xae7)](_0x48893f[_0x5e12c4(0x872)],_0x3f1b00)){_0x19a388[_0x20865e]={'ptr':_0x3f1b00,'firstSeen':Date[_0x5e12c4(0x976)](),'hits':0x0,'replaced':!!_0x48893f};try{if(_0xbe05b9['VlsSu']!==_0x5e12c4(0xca)){var _0x1644e6=_0xbf6b9a['filte'+'r'](function(_0xd9234d){var _0x30d54b=_0x5e12c4;if(_0xbe05b9['zicFD']('SrOUY',_0x30d54b(0x4d5)))return _0xd9234d['type']===_0x20865e;else _0xcd0fc0[_0x30d54b(0xd3)+_0x30d54b(0x92e)][_0x30d54b(0xb0c)](_0x2eabcc[_0x30d54b(0xa5)]+_0x2eabcc[_0x30d54b(0x8f0)]);})[0x1*-0x2a8+-0x549+0x7f1];_0x4213bb={'type':_0x20865e,'atMs':Date['now']()-_0x246d5b,'originalFunc':!!(_0x1644e6&&_0x1644e6[_0x5e12c4(0x7b3)]&&_0xbe05b9['tADxi'](typeof _0x1644e6['hook']['origi'+_0x5e12c4(0x852)+'nc'],_0x5e12c4(0x807)+_0x5e12c4(0xa42))),'resolveGameAtFire':!!_0xbe05b9['huHfT'](_0xac484d),'gameSourceAtFire':_0x444a2f[_0x5e12c4(0x7eb)+'e']};}else _0x641da['syncs'][_0x3655dc]();}catch(_0x37244c){}}}}if(_0xbe05b9[_0x5e12c4(0x105)](_0x20865e,_0xbe05b9['jlmrO'])&&_0x5ecc68['on'])try{_0xbe05b9[_0x5e12c4(0x975)](_0x46f144,_0x3f1b00);}catch(_0xdb37c5){}if(!_0x41707e){var _0x1644e6=_0xbf6b9a[_0x5e12c4(0xa0e)+'r'](function(_0x6669b4){var _0x29eadd=_0x5e12c4;return _0x2eabcc[_0x29eadd(0x1ee)](_0x6669b4[_0x29eadd(0x109)],_0x20865e);})[0x1*0x1007+0x51*0x2e+-0x1e95];if(_0x1644e6&&_0x1644e6[_0x5e12c4(0x7b3)]){if(_0x5e12c4(0x173)!==_0x5e12c4(0x173)){var _0x2a31d6=_0xd65258[_0x5e12c4(0x995)+'eElem'+_0x5e12c4(0x89b)](_0x5e12c4(0x28c));_0x2a31d6['id']=_0x2eabcc[_0x5e12c4(0x498)],_0x2a31d6['textC'+'onten'+'t']=_0x5e12c4(0x3f3)+'ra-sw'+_0x5e12c4(0x7e9)+_0x5e12c4(0x4eb)+'itial'+'}',(_0x1b10fa['head']||_0x5afabb[_0x5e12c4(0x1e3)+_0x5e12c4(0x2c6)+'ement'])[_0x5e12c4(0x49f)+_0x5e12c4(0x813)+'d'](_0x2a31d6);}else try{_0x1644e6['hook']['enabl'+'ed']=![];}catch(_0x44c361){}}}}catch(_0x301e50){}};}function _0x11ee21(){var _0x363f58=_0x4ccb6b,_0x248d7c=(_0x363f58(0x5b3)+_0x363f58(0x9ba)+'0|6|1'+'|4')['split']('|'),_0x4dde96=0x6*0x33e+-0x7*-0x509+0xb*-0x4f9;while(!![]){switch(_0x248d7c[_0x4dde96++]){case'0':_0x31d7cc=_0x31d7cc||_0x1d3423[_0x363f58(0xa86)+'ns'][_0x1d3423[_0x363f58(0xa86)+'ns'][_0x363f58(0xc4)+'h']-(-0xd1*-0x15+-0x6b0*0x2+-0x3c4)];continue;case'1':for(var _0xb6099a=0x1d6+0x3*-0xac4+0x1e76;_0xb6099a<_0x5e28e2[_0x363f58(0xc4)+'h'];_0xb6099a++){var _0x33929f=_0x5e28e2[_0xb6099a];try{var _0x1867da=_0x31d7cc[_0x363f58(0x4ea)+_0x363f58(0x58b)]({'typeName':_0x33929f[_0x363f58(0x109)],'methodName':'Updat'+'e','params':['i32',_0x616644[_0x363f58(0xaa4)]],'returnType':undefined},_0x101d4f(_0x33929f[_0x363f58(0x109)],_0x33929f[_0x363f58(0x97d)],_0x33929f[_0x363f58(0x3f1)]));_0xbf6b9a[_0x363f58(0xb0c)]({'type':_0x33929f[_0x363f58(0x109)],'hook':_0x1867da,'keep':_0x33929f['keep']});}catch(_0x4e1255){_0xd2b6ff[_0x363f58(0xb0c)](_0x616644['lNPiE'](_0x33929f['type'],':\x20')+String(_0x4e1255&&_0x4e1255['messa'+'ge']||_0x4e1255)[_0x363f58(0x87a)](0x10d9+0x1d*0x10a+-0x2efb,0x2498+0x1b88+-0x3f80));}}continue;case'2':if(!_0x1d3423[_0x363f58(0xa86)+'ns']||!_0x1d3423['plugi'+'ns'][_0x363f58(0xc4)+'h'])return![];continue;case'3':_0x592997=window['Unity'+_0x363f58(0x6a3)+_0x363f58(0x6b3)]['Value'+'Wrapp'+'er'];continue;case'4':return _0xbf6b9a[_0x363f58(0xc4)+'h']>0x2*0xf76+0x1aa6+0x2*-0x1cc9;case'5':if(!window['Unity'+'WebMo'+_0x363f58(0x6b3)]||!window['Unity'+'WebMo'+_0x363f58(0x6b3)][_0x363f58(0x1a0)+'me'])return![];continue;case'6':if(!_0x31d7cc||typeof _0x31d7cc['hookP'+_0x363f58(0x58b)]!==_0x616644[_0x363f58(0x2ac)])return![];continue;case'7':if(_0xbf6b9a[_0x363f58(0xc4)+'h'])return!![];continue;case'8':var _0x1d3423=window[_0x363f58(0x791)+_0x363f58(0x6a3)+'dkit'][_0x363f58(0x1a0)+'me'];continue;}break;}}function _0x2ab637(){var _0x132379=_0x4ccb6b,_0x5d7df1=-0x1*0x244d+0x127a*0x1+0x1*0x11d3;for(var _0x301add=-0x3*0x90d+0x1756*-0x1+0x327d;_0x301add<_0xbf6b9a['lengt'+'h'];_0x301add++){if(_0xbf6b9a[_0x301add][_0x132379(0x7b3)]&&_0xbf6b9a[_0x301add][_0x132379(0x7b3)]['table'+'Index']!==undefined)_0x5d7df1++;}return _0x5d7df1;}function _0x2b9d71(){var _0x499ac1=_0x4ccb6b,_0x665f5c={'eQUgu':function(_0x34c736,_0x568c6a){return _0x34c736(_0x568c6a);}};if(_0x616644['cliTP'](_0x499ac1(0x308),_0x499ac1(0x308))){var _0x3a17fb=0x4*-0x40f+-0x3*0x58b+0x20dd;for(var _0x49862f=0x1b5+0x19c3+-0x1b78;_0x49862f<_0xbf6b9a[_0x499ac1(0xc4)+'h'];_0x49862f++){if(_0xbf6b9a[_0x49862f][_0x499ac1(0x7b3)]&&_0xbf6b9a[_0x49862f]['hook'][_0x499ac1(0x4c2)+'ed'])_0x3a17fb++;}return _0x3a17fb;}else{var _0x215c9d={'eegoi':function(_0x1637e3,_0x1f4eea){var _0x27b260=_0x499ac1;return _0x665f5c[_0x27b260(0x8cf)](_0x1637e3,_0x1f4eea);}};_0x19e19f[_0x499ac1(0x3a6)+'ck']=function(){_0x215c9d['eegoi'](_0x3dd3dc,_0x21c7d6);};}}var _0x1363df=null,_0x1daa64=[],_0x133445={},_0x4213bb=null;function _0x550904(_0x139c55){var _0x2481c9=_0x4ccb6b;try{if(_0x616644[_0x2481c9(0xa3)](!_0x592997,!_0x139c55))return null;var _0x2a58dd=new _0x592997(_0x139c55)[_0x2481c9(0x95f)+_0x2481c9(0x784)+'me']();return _0x616644[_0x2481c9(0x6b7)](_0x2a58dd,undefined)?null:_0x2a58dd;}catch(_0x55e452){return null;}}function _0x5072cf(_0xdbc4ec,_0x9cb641,_0x55454a){var _0x2592e6=_0x4ccb6b,_0x326b0a={'SAkUA':function(_0x26f563,_0x263703){return _0x26f563===_0x263703;}};if('YDlxm'==='YDlxm'){var _0x345767=_0x616644[_0x2592e6(0x575)]['split']('|'),_0x129d42=-0x20ed+-0x127f*-0x2+0x411*-0x1;while(!![]){switch(_0x345767[_0x129d42++]){case'0':_0x444a2f['ok']+=_0x55454a;continue;case'1':if(!_0x9ba485)return null;continue;case'2':for(var _0x386282=0x1ec4+-0x1bbf+-0x305;_0x616644['lWEXF'](_0x386282,_0x55454a);_0x386282++)_0x449ad2['push'](_0x9ba485[_0x2592e6(0x5b7)+_0x2592e6(0xb30)](_0x616644[_0x2592e6(0x9e6)](_0xdbc4ec,_0x9cb641)+_0x386282*(0x268f+0x35*-0x6e+-0xfc5),!![]));continue;case'3':var _0x449ad2=[];continue;case'4':if(_0x9cb641<-0x7c0+0x2c5*0xd+0x3*-0x96b||_0x616644[_0x2592e6(0x5a9)](_0x9cb641,_0x616644[_0x2592e6(0x989)](_0x55454a,0xae7*-0x2+0x298*-0x1+0x1*0x186a))>_0x9ba485[_0x2592e6(0x821)+_0x2592e6(0xb7)])return null;continue;case'5':var _0x9ba485=_0x475c3a();continue;case'6':return _0x449ad2;}break;}}else return _0x326b0a[_0x2592e6(0x3dd)](_0x1f505f[_0x2592e6(0x109)],_0x369fa8);}var _0xbb01c1={'PhotonNetworkSync':[[_0x616644[_0x4ccb6b(0x517)],'photo'+'nView'],[_0x4ccb6b(0x473),_0x616644[_0x4ccb6b(0x7c3)]],['0x24',_0x616644['Zsnif']],[_0x616644['UXDju'],_0x4ccb6b(0x384)],[_0x616644[_0x4ccb6b(0x74e)],_0x616644['EWwkD']]],'NetworkPlayerAnimations':[[_0x616644[_0x4ccb6b(0x517)],_0x616644[_0x4ccb6b(0x699)]],['0x18',_0x616644[_0x4ccb6b(0x63e)]]],'NPC_Cotroller':[[_0x4ccb6b(0x722),_0x616644['QOKYB']],[_0x4ccb6b(0x301),_0x616644['zLjaM']],[_0x4ccb6b(0x847),_0x4ccb6b(0x7a3)+'h'],['0xd4',_0x616644['cAMek']],[_0x4ccb6b(0x8ac),'trans'+_0x4ccb6b(0x9e8)]],'EnemyBot':[[_0x4ccb6b(0x6d8),_0x4ccb6b(0x36c)+'form']]},_0xb1f3ea={'PhotonNetworkSync':[['0x58','team'],[_0x616644[_0x4ccb6b(0x4be)],_0x4ccb6b(0x8e8)+'Flag'],['0x5c','id']]};function _0x523167(_0x26d863,_0x133758){var _0x4aed79=_0x4ccb6b,_0x3c5836=_0x20a90a[_0x26d863]||[],_0x5102ce={'kind':_0x26d863,'ptr':'0x'+_0x133758[_0x4aed79(0x834)+'ing'](0x1b74+-0x4*-0x9ad+0x48*-0xeb),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x43bea5=0x1080+0x16a4+-0x2724;_0x43bea5<_0x3c5836[_0x4aed79(0xc4)+'h'];_0x43bea5++){if(_0x3c5836[_0x43bea5][-0x1420+0xc0b*0x2+-0x3f5]!=='v3')continue;var _0x56f7af=_0x5072cf(_0x133758,_0x3c5836[_0x43bea5][0x11f8+-0x2442+0x124a],-0xd58+-0x137a+0x20d5);if(!_0x56f7af)continue;_0x5102ce[_0x4aed79(0xa0b)+'cs']['push']({'o':_0x616644[_0x4aed79(0x3a0)]('0x',_0x3c5836[_0x43bea5][0x3e*-0x2+0xed7+0x20d*-0x7]['toStr'+'ing'](0x1f*0x31+0xdcf+-0x1ca*0xb)),'v':_0x56f7af});}var _0x2e4bba=-0xceb*-0x1+0x2088+-0x2d73,_0x5057ef=_0x616644[_0x4aed79(0x604)](_0x650fb0,_0x5102ce['allVe'+'cs'],_0x616644[_0x4aed79(0xaae)](_0x22b4b5));_0x5102ce[_0x4aed79(0x2b2)]=_0x5057ef['pos'],_0x5102ce['posAt']=_0x5057ef[_0x4aed79(0x944)],_0x5102ce[_0x4aed79(0x386)+'d']=_0x5057ef[_0x4aed79(0x386)+'d'],_0x5102ce['reach']=_0x5057ef['reach'],void _0x2e4bba;var _0x20b6e5=_0xbb01c1[_0x26d863],_0x50c8b6=_0xb1f3ea[_0x26d863];if(_0x50c8b6){_0x5102ce['tag']={};for(var _0x17b622=-0x1*0x107b+-0xf03+0x1*0x1f7e;_0x616644[_0x4aed79(0x849)](_0x17b622,_0x50c8b6[_0x4aed79(0xc4)+'h']);_0x17b622++){var _0x4fcd3c=_0x5c90fe(_0x133758+parseInt(_0x50c8b6[_0x17b622][0x1*-0x1bd4+-0x21f+-0x2b9*-0xb],-0x1d*0xe2+-0x2e+0x19d8*0x1),_0x616644[_0x4aed79(0xaa4)]);if(_0x4fcd3c!==undefined)_0x5102ce[_0x4aed79(0x5a7)][_0x50c8b6[_0x17b622][0x122a+0xd80+-0x1fa9]]=_0x4fcd3c;}}if(_0x20b6e5)for(var _0xfa41d0=0x3*0x161+-0x57*0x3a+-0xf93*-0x1;_0xfa41d0<_0x20b6e5['lengt'+'h'];_0xfa41d0++){var _0x5b1bfc=_0x5c90fe(_0x616644[_0x4aed79(0x4bd)](_0x133758,_0x616644['EvFSw'](parseInt,_0x20b6e5[_0xfa41d0][0x2243+-0x754+-0xc5*0x23],-0x2bf+0xc8+-0x207*-0x1)),'u32');if(_0x5b1bfc)_0x5102ce['refs'][_0x20b6e5[_0xfa41d0][0x3b*0x13+-0x139*-0xb+-0x11d3]]=_0x616644['aZNKz']('0x',(_0x5b1bfc>>>-0x365*-0x3+-0x1*-0x1bf2+-0x2621)[_0x4aed79(0x834)+_0x4aed79(0x873)](-0x2105+0x73c+-0x1fd*-0xd));}return _0x5102ce['scala'+'rs']=_0x3c5836['filte'+'r'](function(_0x705b14){var _0x35ea16=_0x4aed79;return _0x616644['KaKUp'](_0x705b14[-0xc5f*-0x2+-0x1b8b+-0x2*-0x167],_0x35ea16(0x893))||_0x616644[_0x35ea16(0x842)](_0x705b14[0x230*-0x3+0x4bf*-0x8+-0x2c89*-0x1],_0x616644[_0x35ea16(0xaa4)]);})[_0x4aed79(0x2d4)](function(_0x2b97b2){var _0xadc415=_0x4aed79,_0x9b6409={'hYAsL':_0xadc415(0x1a0)+'me.re'+_0xadc415(0x3f6)+_0xadc415(0x9eb)+')'};return _0xadc415(0x25b)!==_0x616644[_0xadc415(0x4d1)]?(_0x3ca19c['sourc'+'e']=_0x9b6409[_0xadc415(0x5cb)],_0xe99f2d):{'o':'0x'+_0x2b97b2[0xb*-0x2e7+-0x1e4b+0x3e38][_0xadc415(0x834)+_0xadc415(0x873)](0x1f57*0x1+-0x1c*0x125+0xc5),'v':_0x5c90fe(_0x616644[_0xadc415(0x9e6)](_0x133758,_0x2b97b2[-0x567*0x4+-0x16*-0x157+0x2*-0x3ef]),_0x2b97b2[-0xd6e+-0x1*-0x12f7+0x1d8*-0x3])};})['filte'+'r'](function(_0x20dfb4){var _0x3fea82=_0x4aed79;return _0x616644[_0x3fea82(0xa63)](_0x20dfb4['v'],undefined)&&isFinite(_0x20dfb4['v']);})[_0x4aed79(0x87a)](0x12f6+-0x31e+-0xa9*0x18,-0x502+-0x230e+0x281c),_0x5102ce;}function _0x51bbb1(){var _0xd4b801=_0x4ccb6b,_0xbf84df={'iJNjO':function(_0x336cb0,_0x5c25c0){var _0x4bce95=_0x35e4;return _0x616644[_0x4bce95(0xa87)](_0x336cb0,_0x5c25c0);},'jpuBt':_0x616644[_0xd4b801(0x37a)],'PQGxG':function(_0x4e08a6,_0x35d825){return _0x4e08a6+_0x35d825;}},_0x4a97a9={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x514284=_0x19a388[_0xd4b801(0x1e2)+'ntrol'+_0xd4b801(0x64f)]&&_0x19a388['FPSco'+_0xd4b801(0x259)+_0xd4b801(0x64f)]['ptr']||-0xeeb+0x1f3b+-0x1050,_0x7ef07d=_0x1d185b['Photo'+_0xd4b801(0x410)+_0xd4b801(0x9c0)+'nc']||{},_0x86a4ba=Object['keys'](_0x7ef07d);for(var _0x48c427=-0x31*0x4b+0x3c+0x2d3*0x5;_0x616644['JFKCG'](_0x48c427,_0x86a4ba['lengt'+'h'])&&_0x48c427<-0x15e+0x1d5b+-0x25*0xc1;_0x48c427++){if(_0x616644[_0xd4b801(0x751)](_0x616644[_0xd4b801(0x356)],_0xd4b801(0x8cb))){var _0x276d31=_0x616644[_0xd4b801(0x307)][_0xd4b801(0xad1)]('|'),_0x27cd5c=0xa9c+0x51*0x2b+0x1837*-0x1;while(!![]){switch(_0x276d31[_0x27cd5c++]){case'0':var _0x27fd37=_0x7ef07d[_0x86a4ba[_0x48c427]];continue;case'1':if(_0x5f4fde[_0xd4b801(0x337)][_0xd4b801(0x7a3)+'h']){var _0x4584ee=_0x616644['KmxUu'](parseInt,_0x5f4fde[_0xd4b801(0x337)][_0xd4b801(0x7a3)+'h'],0x23d5+0x1ca0+-0x4065);_0x5f4fde['healt'+'h']=_0x616644[_0xd4b801(0x60a)](_0x400c42,_0x4584ee,_0xd4b801(0x7da)+'hScri'+'pt',_0xd4b801(0x8e6));}continue;case'2':_0x4a97a9['playe'+'rs']['push'](_0x5f4fde);continue;case'3':var _0x5f4fde=_0x616644[_0xd4b801(0x973)](_0x523167,_0x616644['hWeKi'],_0x27fd37[_0xd4b801(0x872)]);continue;case'4':_0x5f4fde['hits']=_0x27fd37['hits'];continue;case'5':_0x5f4fde['isLoc'+'al']=!!_0x514284&&_0x5f4fde[_0xd4b801(0x337)]['fps']==='0x'+_0x514284[_0xd4b801(0x834)+'ing'](0x229f*0x1+0x245a+-0x46e9);continue;case'6':_0x5f4fde['first'+_0xd4b801(0x6b6)+'s']=_0x27fd37[_0xd4b801(0x39e)+_0xd4b801(0x61a)]-_0x246d5b;continue;}break;}}else return _0x15d7f7['query'+'Selec'+'tor'](_0x616644[_0xd4b801(0x4f3)]('[data'+_0xd4b801(0x351),_0x2296c7)+'\x22]');}_0x4a97a9[_0xd4b801(0xaff)+_0xd4b801(0x490)+'t']=_0x86a4ba[_0xd4b801(0xc4)+'h'];var _0x956392=_0x1d185b['NPC_C'+'otrol'+_0xd4b801(0x64f)]||{},_0x18ec18=Object['keys'](_0x956392);for(var _0x59e0c4=0xaad*-0x1+0x1f76+-0x14c9;_0x59e0c4<_0x18ec18[_0xd4b801(0xc4)+'h']&&_0x59e0c4<0x9fb+0x102c+0x7*-0x3b9;_0x59e0c4++){var _0x536c9e=_0x616644['KmxUu'](_0x523167,_0xd4b801(0x63d)+'otrol'+_0xd4b801(0x64f),_0x956392[_0x18ec18[_0x59e0c4]][_0xd4b801(0x872)]);_0x536c9e['hits']=_0x956392[_0x18ec18[_0x59e0c4]][_0xd4b801(0xae5)],_0x536c9e[_0xd4b801(0x39e)+_0xd4b801(0x6b6)+'s']=_0x956392[_0x18ec18[_0x59e0c4]][_0xd4b801(0x39e)+'Seen']-_0x246d5b;if(_0x536c9e['refs'][_0xd4b801(0x7a3)+'h'])_0x536c9e[_0xd4b801(0x7a3)+'h']=_0x616644['zrMcW'](_0x400c42,_0x616644[_0xd4b801(0x345)](parseInt,_0x536c9e[_0xd4b801(0x337)][_0xd4b801(0x7a3)+'h'],-0x60*-0x4+0x17de+-0x194e),_0x616644[_0xd4b801(0x1b8)],'obfI');_0x4a97a9[_0xd4b801(0x848)]['push'](_0x536c9e);}_0x4a97a9['botCo'+'unt']=_0x18ec18[_0xd4b801(0xc4)+'h'];var _0xfbad22=_0x1d185b['FPSco'+_0xd4b801(0x259)+_0xd4b801(0x64f)]||{},_0x108f65=Object[_0xd4b801(0x1b3)](_0xfbad22);for(var _0x3519bb=0x1428+0xf9*-0xd+0x3*-0x281;_0x3519bb<_0x108f65[_0xd4b801(0xc4)+'h']&&_0x3519bb<-0x33c*-0x2+0x1508+-0x36d*0x8;_0x3519bb++){var _0xb593f7=_0x523167(_0x616644['vwpCR'],_0xfbad22[_0x108f65[_0x3519bb]]['ptr']);_0xb593f7['hits']=_0xfbad22[_0x108f65[_0x3519bb]][_0xd4b801(0xae5)],_0xb593f7[_0xd4b801(0x316)+'al']=_0x616644[_0xd4b801(0x533)](_0xfbad22[_0x108f65[_0x3519bb]][_0xd4b801(0x872)],_0x514284),_0x4a97a9['contr'+_0xd4b801(0x9db)+'s']['push'](_0xb593f7);}_0x4a97a9['contr'+_0xd4b801(0x9db)+'Count']=_0x108f65[_0xd4b801(0xc4)+'h'];var _0x4afd12=_0x4a97a9[_0xd4b801(0xaff)+'rs']['conca'+'t'](_0x4a97a9[_0xd4b801(0x848)]);for(var _0x2fbdcb=-0x1ba8+-0x2*0x125f+0x4066;_0x2fbdcb<_0x4afd12['lengt'+'h'];_0x2fbdcb++){if(_0x616644['OnpTT']==='AUjSF'){var _0x2ce194=_0x2b5027[_0x7e55bf];_0x3bf42f[_0xd4b801(0xb0c)](_0xbf84df[_0xd4b801(0x4aa)](_0x2ce194+_0xbf84df[_0xd4b801(0x11e)],_0x2f50c7[_0x2ce194]));}else{if(_0x4afd12[_0x2fbdcb]['isLoc'+'al'])continue;_0x4a97a9['enemi'+'es'][_0xd4b801(0xb0c)](_0x4afd12[_0x2fbdcb]);}}_0x4a97a9['enemy'+_0xd4b801(0x4cd)]=_0x4a97a9[_0xd4b801(0x5c2)+'es'][_0xd4b801(0xc4)+'h'];var _0x3365fc={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x52a09c={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x5ae74a in _0x19a388){if(_0x616644['AdPdt'](_0xd4b801(0x7ac),'NxPhp'))_0x2f9d93['fillS'+_0xd4b801(0x4e6)]=_0xd4b801(0x22b)+'255,1'+_0xd4b801(0x7b4)+_0xd4b801(0xe6)+')',_0x44e5cb[_0xd4b801(0x1a7)]='10px\x20'+_0xd4b801(0x37b)+_0xd4b801(0xdf)+_0xd4b801(0x6b2)+_0xd4b801(0x9e7)+_0xd4b801(0x98b)+_0xd4b801(0x79c)+'e',_0x178810[_0xd4b801(0xa9c)+_0xd4b801(0x518)](_0xbf84df['PQGxG'](_0x5e2ba1['round'](_0x363d2b['d']||0x2549+0xd7*0x23+-0x42ae),'m'),_0x1069a5-_0x3b5f89/(0x14*-0x47+-0x465*0x3+-0x75*-0x29),_0x45a30a-_0x472f2f/(0x1efd+0x377*0x3+0x2*-0x14b0)-(-0x4*-0x862+-0x11e+-0x2067));else{var _0x764285=_0x19a388[_0x5ae74a];if(!_0x764285||!_0x764285['ptr'])continue;if(!(_0x5ae74a in _0x3365fc))continue;_0x4a97a9['manag'+_0xd4b801(0x258)][_0x5ae74a]=_0x616644['NKoGv']('0x',_0x764285[_0xd4b801(0x872)]['toStr'+'ing'](-0x1dbf+0x1d*0xd9+0x29d*0x2));var _0x574866=_0x5c90fe(_0x764285['ptr']+_0x3365fc[_0x5ae74a],_0x616644['TpCDP']),_0x58796f=_0x5c90fe(_0x764285[_0xd4b801(0x872)]+_0x52a09c[_0x5ae74a],_0x616644[_0xd4b801(0x7c1)]);_0x574866&&_0x4a97a9['camer'+'a']===null&&(_0x4a97a9[_0xd4b801(0x463)+'a']=_0x616644[_0xd4b801(0x71f)]('0x',_0x616644[_0xd4b801(0xa34)](_0x574866,0x1c54+0x5*0x59f+-0x386f)[_0xd4b801(0x834)+_0xd4b801(0x873)](0x1818*0x1+-0xdd7+-0xa31)),_0x4a97a9[_0xd4b801(0x463)+_0xd4b801(0xb25)]=_0x5ae74a);if(_0x58796f&&_0x4a97a9[_0xd4b801(0xaff)+'rList']===null)_0x4a97a9[_0xd4b801(0xaff)+_0xd4b801(0x8e3)]='0x'+(_0x58796f>>>-0x164b+0x1b*0xc7+0x1*0x14e)['toStr'+_0xd4b801(0x873)](-0x1*-0x2315+0x94*0x25+-0x3869);}}if(!_0x4a97a9['playe'+'rCoun'+'t']&&!_0x4a97a9['botCo'+_0xd4b801(0x980)]&&!_0x4a97a9[_0xd4b801(0x463)+'a'])_0x4a97a9[_0xd4b801(0x7ca)]=_0x616644[_0xd4b801(0x18b)]+(_0xd4b801(0x9f4)+'obby\x20'+'looks'+'\x20like'+'\x20-\x20ru'+'n\x20the'+_0xd4b801(0x252)+'n\x20INS'+_0xd4b801(0x250)+'\x20live'+'\x20roun'+'d,\x20no'+'t\x20the'+_0xd4b801(0x31c)+'.');else!_0x4a97a9[_0xd4b801(0xf2)+_0xd4b801(0x4cd)]&&(_0xd4b801(0x7a8)===_0xd4b801(0xa09)?_0x1cc11f[_0xd4b801(0x36b)]=![]:_0x4a97a9[_0xd4b801(0x7ca)]=_0x616644[_0xd4b801(0x98f)]+(_0xd4b801(0x316)+'al\x20on'+'\x20each'+_0xd4b801(0x1e1)+'y\x20in\x20'+_0xd4b801(0xa70)+_0xd4b801(0x697)));try{var _0x5d302e=_0x616644[_0xd4b801(0x9ee)][_0xd4b801(0xad1)]('|'),_0x54e0bc=-0x1*0xdae+-0x1*-0xb26+0x288;while(!![]){switch(_0x5d302e[_0x54e0bc++]){case'0':var _0x4afc90=_0x20a842&&_0x20a842[_0xd4b801(0x3db)+_0xd4b801(0x41c)+_0xd4b801(0x716)+'es']||[];continue;case'1':_0x4a97a9[_0xd4b801(0xb0a)+_0xd4b801(0x79d)]=_0x1f958d;continue;case'2':var _0x1f958d={};continue;case'3':for(var _0x50819d=-0x10e4+-0x1575+-0x2659*-0x1;_0x616644[_0xd4b801(0x1fc)](_0x50819d,_0x4afc90[_0xd4b801(0xc4)+'h'])&&_0x50819d<-0xca6+0x1b46+0x100;_0x50819d++){var _0x45420b=_0x616644[_0xd4b801(0x120)](_0x4afc90[_0x50819d]['param'+'s'][_0xd4b801(0xb2)](','),_0xd4b801(0x52a))+(_0x4afc90[_0x50819d][_0xd4b801(0x51a)+_0xd4b801(0x7bc)]||_0xd4b801(0x970));_0x1f958d[_0x45420b]=(_0x1f958d[_0x45420b]||-0x7*-0x2ed+0x84d+-0x1*0x1cc8)+(-0x181d+0x1*-0xbf1+-0x1*-0x240f);}continue;case'4':var _0x20a842=window[_0xd4b801(0x791)+_0xd4b801(0x6a3)+_0xd4b801(0x6b3)]&&window['Unity'+'WebMo'+'dkit'][_0xd4b801(0x1a0)+'me'];continue;}break;}}catch(_0x5a76dd){}return _0x4a97a9;}function _0x400c42(_0x36779a,_0x461b76,_0x330c28){var _0x1dd1a7=_0x4ccb6b,_0x10e9f8={'wwigY':function(_0x234316,_0x592918,_0x2a848e){return _0x234316(_0x592918,_0x2a848e);},'gnBmx':function(_0x529d4f,_0x5cc8a0){return _0x616644['LGgYX'](_0x529d4f,_0x5cc8a0);},'kHLYq':function(_0x445b4c){return _0x445b4c();}};try{if(_0x616644['yZhsg']('iAuhL',_0x616644[_0x1dd1a7(0x51c)])){_0x492005['preve'+'ntDef'+_0x1dd1a7(0x8a8)](),_0x10e9f8[_0x1dd1a7(0x8b4)](_0x59a727,!_0x18c643['on'],_0x50301c[_0x1dd1a7(0x1d8)+'r']);return;}else{var _0x5b410f=_0x20a90a[_0x461b76]||[];for(var _0x590b45=-0x20d1+0x2391+0x16*-0x20;_0x616644[_0x1dd1a7(0xcf)](_0x590b45,_0x5b410f[_0x1dd1a7(0xc4)+'h']);_0x590b45++){if(_0x616644['ICePE']==='PKYHQ'){if(_0x616644[_0x1dd1a7(0xa0a)](_0x5b410f[_0x590b45][-0x1e1d+-0x1*0x1307+0x3125],_0x330c28))continue;var _0x449c06=_0x5b410f[_0x590b45][0x248b*-0x1+0x33b*-0x2+0x2b01];if(_0x330c28['index'+'Of'](_0x616644['JkMjg'])===0x34f+0x81*-0x28+0x10d9){var _0x90a4da=_0x616644['DnYLp'](_0x3ecd98,_0x36779a,_0x449c06,_0x330c28);if(!_0x90a4da)return null;_0x90a4da['o']=_0x449c06,_0x90a4da['k']=_0x330c28;var _0x3f0803=_0x616644['Gummu'](_0x2dbfdb,[_0x90a4da]);if(!_0x3f0803['rows'][_0x1dd1a7(0xc4)+'h'])return null;return _0x3f0803[_0x1dd1a7(0x16d)][0x2d4*0x6+0x1*-0x505+-0x7*0x1b5];}var _0x28953e=_0x616644['ikAEz'](_0x5c90fe,_0x36779a+_0x449c06,_0x330c28);if(_0x28953e===undefined)return null;return{'o':_0x616644['XAmWX']('0x',_0x449c06[_0x1dd1a7(0x834)+_0x1dd1a7(0x873)](0x1fd+0x1d42+-0x1f2f)),'v':_0x28953e};}else{var _0x236caa=(_0x1dd1a7(0x5f1)+_0x1dd1a7(0x7e5))['split']('|'),_0x14e787=-0x20*0xa+0x23ab+-0x226b;while(!![]){switch(_0x236caa[_0x14e787++]){case'0':_0x38f799['yawOf'+'f']=-0x3f1*0x3+0x1fd2+0x13ff*-0x1;continue;case'1':_0x10e9f8[_0x1dd1a7(0x3b7)](_0x5b158d,_0x16fb14[_0x1dd1a7(0x74a)]);continue;case'2':_0x10e9f8[_0x1dd1a7(0x98c)](_0x58fe99);continue;case'3':_0xcc0095[_0x1dd1a7(0x11d)]=-0x1374+-0x259b+0x6*0x98f;continue;case'4':_0x589a61['pitch'+_0x1dd1a7(0x10b)]=-0x7*0x2cf+-0x1*-0x1147+0x262*0x1;continue;}break;}}}}}catch(_0x5962fa){}return null;}function _0x32b88a(){var _0x2e2eca=_0x4ccb6b,_0x3cb7a2={};_0x444a2f['ok']=0x623+0x3*0x2f+-0x6b0,_0x444a2f[_0x2e2eca(0xb1e)+'d']=-0x92b*-0x2+0x387+-0x15dd,_0x444a2f['lastE'+'rror']=null;var _0x24e614=Object[_0x2e2eca(0x1b3)](_0x20a90a);for(var _0x52e1ac=0x1d24+-0x2618+0x4*0x23d;_0x52e1ac<_0x24e614[_0x2e2eca(0xc4)+'h'];_0x52e1ac++){var _0x5a8e2b=_0x24e614[_0x52e1ac],_0x10367b=_0x19a388[_0x5a8e2b];if(!_0x10367b||!_0x10367b[_0x2e2eca(0x872)])continue;var _0x3ea518=_0x20a90a[_0x5a8e2b]||[],_0x532fba=[];for(var _0x507fad=-0x75f+0x25c6+-0x1e67;_0x616644[_0x2e2eca(0xa6f)](_0x507fad,_0x3ea518['lengt'+'h']);_0x507fad++){var _0x41a019=_0x3ea518[_0x507fad][-0x2+0x1*-0x252f+0x2531],_0x593070=_0x3ea518[_0x507fad][0x1*0x153e+-0x18b3+0x376];if(_0x593070['index'+'Of'](_0x616644['JkMjg'])===-0x608+0x269+0x67*0x9){var _0x45903f=_0x616644[_0x2e2eca(0x331)](_0x3ecd98,_0x10367b[_0x2e2eca(0x872)],_0x41a019,_0x593070);if(!_0x45903f)continue;_0x45903f['o']=_0x41a019,_0x45903f['k']=_0x593070,_0x532fba['push'](_0x45903f);}else{var _0x36195e=_0x616644[_0x2e2eca(0xa77)](_0x5c90fe,_0x616644[_0x2e2eca(0xa87)](_0x10367b['ptr'],_0x41a019),_0x593070);if(_0x36195e===undefined)continue;var _0x3b7db7={'o':_0x41a019,'k':_0x593070,'v':_0x36195e};if(_0x593070==='v2'||_0x616644[_0x2e2eca(0x38c)](_0x593070,'v3')||_0x593070==='v4'){var _0xdb99e4=_0x593070==='v2'?0xbc7+0x1bdf+-0x27a4:_0x593070==='v3'?0x1*0xc31+-0x343*0xb+0x17b3:0x700+-0x1835+-0x1*-0x1139,_0x5eb088=_0x616644['MJVWt'](_0x5072cf,_0x10367b[_0x2e2eca(0x872)],_0x41a019,_0xdb99e4);_0x5eb088&&(_0x3b7db7[_0x2e2eca(0x492)]=_0x5eb088,_0x3b7db7['v']=_0x5eb088[0x1885+0x1*0x3df+-0x4*0x719]);}_0x532fba['push'](_0x3b7db7);}}if(_0x532fba[_0x2e2eca(0xc4)+'h']){var _0x25d313=_0x2dbfdb(_0x532fba);_0x3cb7a2[_0x5a8e2b]=_0x25d313[_0x2e2eca(0x16d)],_0x133445[_0x5a8e2b]={'key':_0x25d313[_0x2e2eca(0xa26)],'sane':_0x25d313[_0x2e2eca(0x36b)],'checked':_0x25d313[_0x2e2eca(0x9cd)+'ed'],'keyConsistent':_0x25d313[_0x2e2eca(0x80c)+_0x2e2eca(0xa6a)+_0x2e2eca(0x89b)],'keySource':_0x25d313['keySo'+_0x2e2eca(0x148)]};}}return _0x3cb7a2;}function _0x2dbfdb(_0x269508){var _0x478620=_0x4ccb6b;if(_0x478620(0xaa5)!==_0x478620(0x2db)){var _0x5c10b9=-0x40c+0x47*0x11+0x13*-0x9,_0x3105aa=-0x1a41+-0x1fcb+0x3a0c,_0x8ae145=null;for(var _0x331813=-0x3c*-0x73+0xa51+-0x2545;_0x616644['KrwkC'](_0x331813,_0x269508[_0x478620(0xc4)+'h']);_0x331813++){var _0x1ee795=_0x269508[_0x331813];if(_0x616644[_0x478620(0x831)](_0x1ee795['k']['index'+'Of'](_0x616644[_0x478620(0x8bb)]),0x168f+-0x214*0x8+-0x5ef))continue;_0x1ee795['v']=_0x117f55(_0x1ee795['k'],_0x1ee795[_0x478620(0x1a2)+'n'],_0x1ee795[_0x478620(0x674)+'Offse'+'t0']),_0x1ee795[_0x478620(0x529)+'ed']=_0x1ee795[_0x478620(0x674)+_0x478620(0x703)+'t0'],_0x1ee795['raw']=_0x616644[_0x478620(0x811)](_0x616644['nxbJM'](_0x478620(0x2f2),_0x1ee795[_0x478620(0x1a2)+'n'])+_0x616644['NWysZ']+_0x1ee795[_0x478620(0x4f1)]+(_0x1ee795['act']?'\x20ACTI'+'VE':'')+_0x478620(0x2b9),_0x1ee795['keyAt'+_0x478620(0x703)+'t0'])+_0x616644[_0x478620(0x7cf)]+_0x1ee795['hex'];if(_0x616644[_0x478620(0x38c)](_0x8ae145,null))_0x8ae145=_0x1ee795[_0x478620(0x674)+_0x478620(0x703)+'t0'];_0x3105aa++,_0x616644[_0x478620(0x797)](_0x410b6d,_0x1ee795)?(_0x5c10b9++,_0x1ee795['sane']=!![]):_0x1ee795['sane']=![],delete _0x1ee795['alt'];}return{'rows':_0x269508,'key':_0x8ae145,'sane':_0x5c10b9,'checked':_0x3105aa,'keyConsistent':_0x2658bd(_0x269508),'keySource':'offse'+_0x478620(0xacf)+'int-w'+'idth)'};}else{_0x5af958[_0x302c90]='0x'+_0x2eaf06[_0x42dcc7][_0x478620(0x872)][_0x478620(0x834)+_0x478620(0x873)](0x1269+-0x15*-0xc5+-0xe*0x277);if(_0x21cd91[_0x51a5fd][_0x478620(0x3fc)+_0x478620(0x5da)])_0x9d95d8['push'](_0x402906);}}function _0x2658bd(_0x8ffea5){var _0x2f01f2=_0x4ccb6b,_0xfcc8dd={};for(var _0x3a8904=-0x101+-0x1046+0x1*0x1147;_0x3a8904<_0x8ffea5[_0x2f01f2(0xc4)+'h'];_0x3a8904++){if(_0x616644[_0x2f01f2(0x435)](_0x616644[_0x2f01f2(0xaf7)],_0x2f01f2(0x54f))){var _0x5ca9ba=_0x8ffea5[_0x3a8904];if(_0x5ca9ba['k']['index'+'Of']('obf')!==0xe1c+0x26*-0x4a+-0x320)continue;if(_0xfcc8dd[_0x5ca9ba['k']]===undefined)_0xfcc8dd[_0x5ca9ba['k']]=_0x5ca9ba['keyUs'+'ed'];else{if(_0xfcc8dd[_0x5ca9ba['k']]!==_0x5ca9ba[_0x2f01f2(0x529)+'ed'])return![];}}else{var _0x545b7c=_0x440d6c[_0x2f01f2(0x76b)];if(!_0x545b7c||_0x616644[_0x2f01f2(0x898)](_0x545b7c[_0x2f01f2(0x675)+_0x2f01f2(0x81e)],_0x25f34e))return;try{if(_0x545b7c[_0x2f01f2(0x577)]===_0x2f01f2(0x6d5)){_0x2ecda2()[_0x2f01f2(0x913)]({'host':_0x545b7c[_0x2f01f2(0x61d)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x616644[_0x2f01f2(0x2ca)](_0x545b7c[_0x2f01f2(0x577)],_0x2f01f2(0xa0)+'t'))_0x616644['yJrKp'](_0x538d9f)[_0x2f01f2(0x913)](_0x545b7c['repor'+'t']);}catch(_0x1b35e1){_0x5414ff[_0x2f01f2(0x2a2)](_0x2f01f2(0x350)+_0x2f01f2(0x794)+_0x2f01f2(0x151)+'l\x20upd'+_0x2f01f2(0x745)+_0x2f01f2(0x6cb),'color'+':'+_0x1ed28c,_0x1b35e1);}}}return!![];}function _0x410b6d(_0x10fa05){var _0x1beb18=_0x4ccb6b,_0x5d113b=_0x616644['ziRhi'][_0x1beb18(0xad1)]('|'),_0x2b5e3c=-0xac1+-0x1*-0x1bd9+-0x1118;while(!![]){switch(_0x5d113b[_0x2b5e3c++]){case'0':if(_0x10fa05['act']===-0xca4+0x2*-0x1091+0x2dc7)return Math[_0x1beb18(0x3d2)](_0x616644['ofSox'](_0x159f2c,_0x5f4fa7))<=Math[_0x1beb18(0x95d)](-0x419*-0x8+-0x1ad*-0xf+-0x1*0x39ea,Math[_0x1beb18(0x3d2)](_0x5f4fa7)*(0x24d5+-0xe70+0x3*-0x777+0.6));continue;case'1':return Math['abs'](_0x159f2c)<0x402f311e+0x1*0xc33e9a1+-0x1*0x10c850bf;case'2':var _0x5f4fa7=_0x10fa05['fake'];continue;case'3':var _0x159f2c=_0x10fa05['v'];continue;case'4':if(typeof _0x5f4fa7!=='numbe'+'r'||!isFinite(_0x5f4fa7))return!![];continue;case'5':if(_0x616644[_0x1beb18(0x39c)](typeof _0x159f2c,_0x1beb18(0xa97)+'r')||!_0x616644['Gummu'](isFinite,_0x159f2c))return![];continue;case'6':if(_0x616644['OdSNF'](_0x10fa05['k'],'obfB'))return _0x159f2c===0x1428+0xf*0x5+0x3*-0x6d1||_0x159f2c===0x1*-0x1c9f+-0x18a8+0x58*0x9b;continue;}break;}}function _0x515089(){var _0x290b8f=_0x4ccb6b,_0x1da0bb={'erWpT':function(_0x631708,_0x41fed2){return _0x616644['plJUK'](_0x631708,_0x41fed2);},'AwDsj':function(_0x225fc9,_0x80257c){return _0x616644['ruoYO'](_0x225fc9,_0x80257c);}},_0x232d55={};try{if('wesIg'==='wesIg'){var _0x4f17f0=window[_0x290b8f(0x791)+_0x290b8f(0x6a3)+_0x290b8f(0x6b3)]&&window[_0x290b8f(0x791)+'WebMo'+'dkit']['Runti'+'me'];_0x232d55[_0x290b8f(0x5a7)]=_0x4f17f0&&_0x4f17f0[_0x290b8f(0x675)+'uraTa'+'g']||null,_0x232d55[_0x290b8f(0x818)+_0x290b8f(0x457)]=!!(_0x616644['QNSkZ'](_0x4f17f0,_0xd11fea)&&_0x616644[_0x290b8f(0xb04)](_0x4f17f0['__sak'+'uraTa'+'g'],_0xd11fea)),_0x232d55[_0x290b8f(0x21c)+_0x290b8f(0x19a)+'e']=_0x4f17f0&&_0x4f17f0['_game']?typeof _0x4f17f0['_game']:'none',_0x232d55[_0x290b8f(0xa86)+'nRunt'+_0x290b8f(0x897)+_0x290b8f(0x1b2)+_0x290b8f(0x283)]=!!(_0x31d7cc&&_0x31d7cc['_runt'+_0x290b8f(0x733)]&&_0x31d7cc[_0x290b8f(0xadb)+'ime']===_0x4f17f0),_0x232d55[_0x290b8f(0xa86)+'nRunt'+_0x290b8f(0x114)+'me']=_0x31d7cc&&_0x31d7cc[_0x290b8f(0xadb)+'ime']&&_0x31d7cc['_runt'+'ime'][_0x290b8f(0x964)]?typeof _0x31d7cc['_runt'+_0x290b8f(0x733)]['_game']:_0x616644[_0x290b8f(0x43c)];}else{var _0x1d4695=_0x345e7f[_0x2ae446][_0x290b8f(0x52b)+'et']['k'],_0x4e8e39='';if(_0x1d4695===_0x290b8f(0x564)+'ON')_0x4e8e39=_0x43cdfa?_0x2b6a97['versi'+'on']:'-';else{if(_0x1d4695==='appli'+'ed\x20/\x20'+'regis'+_0x290b8f(0x38d))_0x4e8e39=_0x34aa56?_0x285538['hooks'+_0x290b8f(0x1cc)+'ed']+_0x616644['ivoJv']+_0x3366b9[_0x290b8f(0x940)+_0x290b8f(0x521)+_0x290b8f(0x38d)+'AtArm']:'-';else{if(_0x616644[_0x290b8f(0x826)](_0x1d4695,_0x616644[_0x290b8f(0x8f7)]))_0x4e8e39=_0x3d0e1a&&_0x573269['wasmM'+'emory']&&_0xcebcc6[_0x290b8f(0xa7)+_0x290b8f(0xef)]['captu'+_0x290b8f(0x634)]?_0x616644[_0x290b8f(0x47c)](_0x2b3bb5[_0x290b8f(0x799)](_0x616644[_0x290b8f(0x734)](_0x2cf7cb[_0x290b8f(0xa7)+_0x290b8f(0xef)][_0x290b8f(0x9e0)],0x170f06+0x15de0d+-0x1ced13)),_0x290b8f(0x892)+'\x20')+_0x1dddb9[_0x290b8f(0xa7)+'emory'][_0x290b8f(0xa03)]+'ms':'-';else{if(_0x616644[_0x290b8f(0x6b7)](_0x1d4695,_0x290b8f(0x3e9)+_0x290b8f(0x410)+_0x290b8f(0x9c0)+'nc'))_0x4e8e39=_0x396d15&&_0x228598['esp']?_0x616644[_0x290b8f(0x4e3)](_0x24289b,_0x28a531[_0x290b8f(0x94f)][_0x290b8f(0xaff)+_0x290b8f(0x490)+'t']):'-';else{if(_0x616644['TetaY'](_0x1d4695,_0x616644[_0x290b8f(0xb34)]))_0x4e8e39=_0x2a5224&&_0x330aeb[_0x290b8f(0x94f)]?_0x616644[_0x290b8f(0x6f0)](_0x1f654d,_0x2c4a6f[_0x290b8f(0x94f)][_0x290b8f(0xf2)+_0x290b8f(0x4cd)]):'-';else{if(_0x616644[_0x290b8f(0x5e0)](_0x1d4695,_0x290b8f(0x908)+'he\x20li'+_0x290b8f(0x6e5)+_0x290b8f(0x373)))_0x4e8e39=_0x371927&&_0x3bbd1c[_0x290b8f(0x94f)]&&_0x5f1e1d[_0x290b8f(0x94f)][_0x290b8f(0x463)+'a']?_0x616644[_0x290b8f(0x6e0)](_0x616644[_0x290b8f(0x95b)](_0x534fa2['esp']['camer'+'a'],'\x20('),_0x15e633[_0x290b8f(0x94f)][_0x290b8f(0x463)+'aFrom'])+')':'-';else{if(_0x1d4695===_0x616644['AaAEO'])_0x4e8e39=_0x46f64d&&_0x2647be[_0x290b8f(0x8e8)]&&_0x58f745['local'][_0x290b8f(0x5b4)]?_0x5a1997['local'][_0x290b8f(0x5b4)][_0x290b8f(0x2d4)](function(_0x2ecf67){var _0x556827=_0x290b8f;return _0x450696['round'](_0x1da0bb[_0x556827(0x43f)](_0x2ecf67,0x7a*-0x21+-0x1dd3+0x2df1))/(-0x80*-0x4d+-0x235d+0x1*-0x2bf);})[_0x290b8f(0xb2)]('\x20\x20'):'-';else{if(_0x616644['ADivy'](_0x1d4695,_0x616644[_0x290b8f(0x8e5)]))_0x4e8e39=_0x4f3e7e&&_0x180726[_0x290b8f(0x8e8)]&&_0xdb5726['local']['eye']?_0x442937[_0x290b8f(0x8e8)][_0x290b8f(0x649)]['map'](function(_0x5e2af5){var _0x1bf44c=_0x290b8f;return _0x1da0bb[_0x1bf44c(0x509)](_0x16c0cb[_0x1bf44c(0x799)](_0x5e2af5*(-0x2be+-0x2141+-0x3*-0xc21)),0x165f*0x1+-0x125c+0x135*-0x3);})[_0x290b8f(0xb2)]('\x20\x20'):'-';else{var _0x5144f8=_0x1d4695[_0x290b8f(0xad1)]('+');_0x4e8e39=_0x17041b(_0x228278,_0x5144f8[-0x3*0xa49+0x165a+0x881][_0x290b8f(0x820)+'Of'](_0x616644[_0x290b8f(0x405)])===-0x4*0x26+0x83*-0x33+0x1ab1?'Healt'+'hScri'+'pt':_0x616644[_0x290b8f(0x551)],_0x112096(_0x5144f8[0x75f+-0x16de+0xf80],-0x9*-0x3ca+-0xbb*-0x1+-0x22c5));}}}}}}}}if(_0x4e8e39!==_0x2cc510[_0x23ff0c][_0x290b8f(0xc9)+'onten'+'t'])_0x19be80[_0x31918e]['textC'+_0x290b8f(0x4e9)+'t']=_0x4e8e39;}}catch(_0x14e242){_0x232d55[_0x290b8f(0x546)]=_0x616644['Gummu'](String,_0x14e242&&_0x14e242[_0x290b8f(0x935)+'ge']||_0x14e242);}return _0x232d55;}function _0x28b98e(){var _0x2ca367=_0x4ccb6b,_0x41ce71=(_0x2ca367(0xa78)+'|5|4|'+_0x2ca367(0x832))['split']('|'),_0x21beac=-0x280+0x1*0x4cf+-0x24f;while(!![]){switch(_0x41ce71[_0x21beac++]){case'0':return _0x3de0b2;case'1':var _0x3de0b2={};continue;case'2':try{_0x3de0b2[_0x2ca367(0x290)+_0x2ca367(0x775)]=!!(_0x2a553f&&_0x2a553f['Modul'+'e']),_0x3de0b2['heapU'+'8']=!!(_0x2a553f&&_0x2a553f['Modul'+'e']&&_0x2a553f[_0x2ca367(0x122)+'e']['HEAPU'+'8']),_0x3de0b2['heapB'+'ytes']=_0x3de0b2[_0x2ca367(0x879)+'8']?_0x2a553f[_0x2ca367(0x122)+'e'][_0x2ca367(0x6f5)+'8']['lengt'+'h']:-0x31+-0x1fab+0x1fdc;}catch(_0x2db212){_0x3de0b2[_0x2ca367(0x290)+_0x2ca367(0x775)]=![],_0x3de0b2['heapU'+'8']=![],_0x3de0b2[_0x2ca367(0x52c)+_0x2ca367(0x335)]=0x1aa0+-0x1*-0x265a+-0x40fa;}continue;case'3':var _0x44e1e8=['unity'+'Insta'+_0x2ca367(0x685),_0x2ca367(0x690)+'Game',_0x616644[_0x2ca367(0x768)],_0x2ca367(0x690)+_0x2ca367(0x169)+_0x2ca367(0x396)+'apper'];continue;case'4':_0x3de0b2['gameS'+_0x2ca367(0x55c)]=_0x444a2f[_0x2ca367(0x7eb)+'e'];continue;case'5':var _0x2a553f=_0xac484d();continue;case'6':_0x3de0b2[_0x2ca367(0x5eb)+'Wrapp'+'er']=typeof _0x592997;continue;case'7':for(var _0x49fdd8=0x635*0x1+-0x1146+0xb11*0x1;_0x49fdd8<_0x44e1e8[_0x2ca367(0xc4)+'h'];_0x49fdd8++){var _0x11169c=_0x44e1e8[_0x49fdd8],_0x39b3ed=typeof window[_0x11169c];_0x3de0b2[_0x11169c]=_0x39b3ed===_0x616644[_0x2ca367(0x1bb)]?_0x616644[_0x2ca367(0x1bb)]:_0x39b3ed;}continue;}break;}}function _0x172b3f(){var _0x148680=_0x4ccb6b,_0x50a0f7={'drZjj':_0x616644[_0x148680(0x395)],'mTrRl':_0x616644['DuLyu'],'ExsXs':_0x148680(0x4cb)+_0x148680(0x819)+_0x148680(0xd0)+'et,\x20o'+_0x148680(0x5ad)+'\x20sign'+_0x148680(0x595)+_0x148680(0x902)+'not\x20m'+_0x148680(0x35a)};if(_0x616644[_0x148680(0x666)](_0x148680(0x968),'icdFC'))_0x2271ec['push'](_0x50a0f7[_0x148680(0xb8)]),_0x423447[_0x148680(0xb0c)](''),_0xfc0f53[_0x148680(0xb0c)](_0x50a0f7[_0x148680(0x882)]),_0xb3fca2['push'](_0x50a0f7['ExsXs']);else{var _0x2309e5={},_0x26b2e6=_0x4c0eed();if(!_0x26b2e6)return _0x2309e5;_0x2309e5[_0x616644['CjBti']]=_0x26b2e6[_0x148680(0x45a)+_0x148680(0x9d2)];for(var _0x5a7087 in _0x26b2e6[_0x148680(0x956)+'s'])_0x2309e5['Mouse'+_0x148680(0x586)+_0x5a7087]=_0x26b2e6[_0x148680(0x956)+'s'][_0x5a7087];if(_0x26b2e6['camer'+'a'])_0x2309e5[_0x616644[_0x148680(0x6a0)]]=_0x26b2e6['camer'+'a'];return _0x2309e5;}}function _0x5e8a6e(_0xfc30b5){var _0x35b57e=_0x4ccb6b,_0x3aab39={};for(var _0x4743f8 in _0xfc30b5){if(_0x35b57e(0xa56)!=='tIuqI'){_0x5d952b[_0x35b57e(0x8d2)+'ntDef'+'ault'](),_0x179573(!_0x43dba0[_0x35b57e(0x305)]);return;}else{var _0x51e5a5=_0xfc30b5[_0x4743f8];for(var _0xac28e5=0x1fc5+0xde5*0x1+0x23*-0x14e;_0x616644['GujGo'](_0xac28e5,_0x51e5a5['lengt'+'h']);_0xac28e5++){_0x3aab39[_0x4743f8+_0x35b57e(0x45e)+_0x51e5a5[_0xac28e5]['o'][_0x35b57e(0x834)+_0x35b57e(0x873)](-0xa22*0x2+0x168b+-0x237)]=_0x51e5a5[_0xac28e5]['v'];}}}return _0x3aab39;}function _0x2a2547(_0x212278,_0x46f414){var _0x22f8b3=_0x4ccb6b;if(_0x212278===_0x616644[_0x22f8b3(0x185)]){if('EYbNa'===_0x22f8b3(0x858)){_0x1dda55(_0x46f414&&typeof _0x46f414['on']===_0x616644['xpUER']?_0x46f414['on']:_0x5ecc68['on'],_0x46f414&&typeof _0x46f414['facto'+'r']===_0x616644['zKtxq']?_0x46f414[_0x22f8b3(0x1d8)+'r']:_0x5ecc68[_0x22f8b3(0x1d8)+'r']);return;}else _0x4e6ae2['camer'+'a']=_0x616644['SNbzI']('0x',(_0x298003>>>-0x15fc+-0x2b3*-0x1+-0x1*-0x1349)[_0x22f8b3(0x834)+_0x22f8b3(0x873)](0x9*0x419+-0x8*-0x283+-0x38e9)),_0x5f3f2c[_0x22f8b3(0x463)+'aFrom']=_0x388fbb;}if(_0x212278!==_0x22f8b3(0xa38)+_0x22f8b3(0x24a))return;var _0x2a4627=_0x32b88a(),_0x2985ed=_0x5e8a6e(_0x2a4627),_0x12c058=_0x172b3f();for(var _0x454324 in _0x12c058)_0x2985ed[_0x454324]=_0x12c058[_0x454324];if(!_0x1363df){_0x1363df=_0x2985ed,_0x1daa64=[],_0x616644['jUtsx'](_0x903c1e,_0x22f8b3(0xa0)+'t',{'report':_0x27b125()});return;}_0x1daa64=[];for(var _0x16f8b6 in _0x2985ed){var _0x2517f9=_0x1363df[_0x16f8b6],_0x2fa79e=_0x2985ed[_0x16f8b6];if(_0x2517f9!==_0x2fa79e)_0x1daa64[_0x22f8b3(0xb0c)](_0x616644[_0x22f8b3(0x66e)](_0x616644['IMrOW'](_0x16f8b6,':\x20'),_0x2517f9)+_0x616644[_0x22f8b3(0x50e)]+_0x2fa79e);}_0x1363df=_0x2985ed,_0x616644['oXSjA'](_0x903c1e,_0x22f8b3(0xa0)+'t',{'report':_0x616644['McbUl'](_0x27b125)});}var _0x2449d1=null;function _0x5d808b(){var _0x53ace5=_0x4ccb6b,_0x6a9607={'xIKNh':function(_0x3c8ed8,_0x5055f3){var _0x3ec539=_0x35e4;return _0x616644[_0x3ec539(0x1fd)](_0x3c8ed8,_0x5055f3);},'HGSWv':function(_0x1a9fad,_0x24c2b9){var _0x3aaa7b=_0x35e4;return _0x616644[_0x3aaa7b(0x44e)](_0x1a9fad,_0x24c2b9);},'iviCb':_0x616644[_0x53ace5(0x8aa)],'qXmPN':'yvdFG','IgaqX':function(_0x43b244,_0x5a71db){return _0x43b244(_0x5a71db);}};if(_0x2449d1)return _0x2449d1;try{if(_0x616644['eCqXh'](_0x53ace5(0x5ce),_0x53ace5(0x9b7))){if(!document[_0x53ace5(0x388)]||!document['body'][_0x53ace5(0x49f)+_0x53ace5(0x813)+'d'])return null;if(!document['getEl'+_0x53ace5(0x77a)+_0x53ace5(0xae4)]('sakur'+'a-sw-'+_0x53ace5(0xb1c)+'ss')){var _0x45de57=document[_0x53ace5(0x995)+'eElem'+'ent'](_0x53ace5(0x28c));_0x45de57['id']=_0x53ace5(0x6f7)+_0x53ace5(0x5fe)+_0x53ace5(0xb1c)+'ss',_0x45de57[_0x53ace5(0xc9)+'onten'+'t']=_0x616644['BzVTl'],(document['head']||document['docum'+_0x53ace5(0x2c6)+_0x53ace5(0x77a)])['appen'+'dChil'+'d'](_0x45de57);}var _0x2f7ece=document['creat'+'eElem'+'ent'](_0x616644['jxUPC']);_0x2f7ece['id']='sakur'+'a-sw-'+'hud',_0x2f7ece['style'][_0x53ace5(0x4bb)+'xt']=_0x616644[_0x53ace5(0x7aa)](_0x616644['qEQzm'](_0x53ace5(0x255)+_0x53ace5(0x874)+_0x53ace5(0x237)+_0x53ace5(0x394)+_0x53ace5(0x720)+'ottom'+_0x53ace5(0x33c)+'z-ind'+_0x53ace5(0x792)+_0x53ace5(0x535)+'647;d'+'ispla'+'y:fle'+_0x53ace5(0x288)+_0x53ace5(0x567)+'ectio'+_0x53ace5(0x9b0)+_0x53ace5(0x194)+_0x53ace5(0xe8)+'x;',_0x53ace5(0x7db)+_0x53ace5(0x799)+':rgba'+_0x53ace5(0xa0d)+'2,29,'+'.92);'+_0x53ace5(0x602)+_0x53ace5(0x6de)+_0x53ace5(0x757)+'d\x20rgb'+_0x53ace5(0x174)+_0x53ace5(0x6d3)+_0x53ace5(0x9c1)+_0x53ace5(0x827)+'order'+'-radi'+'us:10'+_0x53ace5(0x9b4)),_0x53ace5(0x448)+_0x53ace5(0x1d1)+_0x53ace5(0x41f)+_0x53ace5(0x3a8)+':11px'+_0x53ace5(0x541)+'\x20ui-m'+_0x53ace5(0x40c)+'ace,C'+'onsol'+_0x53ace5(0x5a4)+_0x53ace5(0xdf)+_0x53ace5(0x2f1)+_0x53ace5(0x90f)+'f7eef'+'5;')+(_0x53ace5(0x415)+'hadow'+_0x53ace5(0x6cd)+'px\x2030'+_0x53ace5(0x731)+_0x53ace5(0x6b5)+_0x53ace5(0x2ef)+'ser-s'+'elect'+_0x53ace5(0x69c)+_0x53ace5(0x7ad)+_0x53ace5(0x73a)+_0x53ace5(0x1af)+'elect'+':none'+';');var _0x29b1d2=_0x53ace5(0xab2)+'data-'+'a=\x22st'+'2\x22\x20st'+_0x53ace5(0x7ef)+_0x53ace5(0x915)+_0x53ace5(0x263)+'a99;m'+'ax-wi'+_0x53ace5(0xab8)+'90px;'+_0x53ace5(0x3b1)+_0x53ace5(0x883);_0x2f7ece['inner'+'HTML']=_0x616644[_0x53ace5(0x708)](_0x616644['ztwvi'](_0x616644[_0x53ace5(0xaab)](_0x616644['XAmWX'](_0x616644[_0x53ace5(0x11f)](_0x616644[_0x53ace5(0x6fe)](_0x616644[_0x53ace5(0x6f9)](_0x616644[_0x53ace5(0x4e7)](_0x616644[_0x53ace5(0xaa7)],'<b\x20st'+_0x53ace5(0x7ef)+_0x53ace5(0x915)+':')+_0x5ae3b3+(_0x53ace5(0x412)+_0x53ace5(0x9da)+'b>'),_0x616644['TJMFA']),_0x616644['Nkymj'])+(_0x53ace5(0x6b9)+_0x53ace5(0x2e9)+_0x53ace5(0x54e)+'fx\x22\x20t'+'ype=\x22'+'range'+_0x53ace5(0x19c)+_0x53ace5(0x65f)+'max=\x22'+_0x53ace5(0x370)+'ep=\x220'+_0x53ace5(0xa33)+'alue='+'\x222\x22\x20s'+'tyle='+_0x53ace5(0x31e)+_0x53ace5(0x132)+_0x53ace5(0x906)+'ent-c'+'olor:')+_0x5ae3b3+';\x22>'+(_0x53ace5(0x8db)+_0x53ace5(0x219)+'-a=\x22f'+'v\x22\x20st'+'yle=\x22'+_0x53ace5(0x915)+_0x53ace5(0x37c)+_0x53ace5(0x857)+_0x53ace5(0x26a)+'dth:3'+_0x53ace5(0x327)+'>2.0x'+'</spa'+'n>'),_0x616644[_0x53ace5(0xfb)]),'color'+':#f7e'+'ef5;b'+'order'+_0x53ace5(0x36a)+'us:6p'+'x;pad'+_0x53ace5(0xbf)+'2px\x207'+_0x53ace5(0xb01)+'rsor:'+'point'+_0x53ace5(0x371)+'nt:in'+_0x53ace5(0xa92)+_0x53ace5(0x43a)+'P\x20on<'+_0x53ace5(0x5ac)+_0x53ace5(0xa30)),_0x616644['QQBoO'])+(_0x53ace5(0x915)+_0x53ace5(0x91a)+_0x53ace5(0x780)+_0x53ace5(0x224)+_0x53ace5(0x36a)+'us:6p'+_0x53ace5(0x70c)+'ding:'+_0x53ace5(0x683)+'px;cu'+_0x53ace5(0x7dc)+_0x53ace5(0x736)+_0x53ace5(0x371)+_0x53ace5(0x21e)+_0x53ace5(0xa92)+';\x22>Sn'+_0x53ace5(0xa32)+_0x53ace5(0x2da)+'>')+('<butt'+'on\x20da'+_0x53ace5(0x9b3)+_0x53ace5(0x6ac)+_0x53ace5(0x672)+_0x53ace5(0x1c5)+'argin'+'-left'+_0x53ace5(0x3ba)+';back'+'groun'+_0x53ace5(0x9ea)+'nspar'+_0x53ace5(0x6ab)+_0x53ace5(0x224)+_0x53ace5(0x1f9)+_0x53ace5(0xb31)+'\x20rgba'+'(255,'+'143,1'+'77,.4'+_0x53ace5(0x25a)),_0x616644['YtZbT']),_0x53ace5(0x451)+'>')+_0x616644[_0x53ace5(0x8bc)]+_0x616644[_0x53ace5(0x3da)],_0x2f7ece['inner'+_0x53ace5(0x664)]=_0x29b1d2;var _0x345c55=function(_0x551646){var _0x47a30f=_0x53ace5,_0x34ec0b={'LLzFJ':function(_0x19c6e1,_0x6bf77b){return _0x19c6e1*_0x6bf77b;},'iJUxD':function(_0x3048f7,_0x1d69a8){return _0x3048f7===_0x1d69a8;},'WdAdt':function(_0x40ea2c,_0xd03b1){var _0x31deb1=_0x35e4;return _0x616644[_0x31deb1(0x5bf)](_0x40ea2c,_0xd03b1);},'otEdj':_0x616644[_0x47a30f(0x2f3)],'CIBDX':function(_0x5e40b7,_0x1d4656){var _0x455d4a=_0x47a30f;return _0x616644[_0x455d4a(0x752)](_0x5e40b7,_0x1d4656);}};if(_0x616644['KjwZA']('BjXIj',_0x616644[_0x47a30f(0x152)])){var _0x259959={'FNVXX':function(_0x45a8ea,_0x353dc9){return _0x34ec0b['LLzFJ'](_0x45a8ea,_0x353dc9);}};if(_0x34ec0b['iJUxD'](_0x2f4211,'v3')){var _0x478584=_0x324fa1[_0x58b26d]['xyz']||[_0x5baa97[_0x13f2e4]['v'],-0xa02+-0x163*0xf+0x1ecf,0x145e+-0x127c+-0x2*0xf1];return _0x478584['map'](function(_0x509bec){var _0x5ee288=_0x47a30f;return _0x18c632[_0x5ee288(0x799)](_0x259959[_0x5ee288(0x79b)](_0x509bec,0x130e+0xaa9+0x1d53*-0x1))/(0xe33+-0x1577+-0x46*-0x1c);})[_0x47a30f(0xb2)]('\x20\x20');}var _0x25ba0d=_0x14489b[_0x4aae0a]['v'];return _0x34ec0b['WdAdt'](typeof _0x25ba0d,_0x34ec0b[_0x47a30f(0x6ec)])?_0x17fea0['round'](_0x25ba0d*(0x72f+-0x265*-0x2+-0x811))/(-0x16+-0x21f5+0x25f3):_0x34ec0b['CIBDX'](_0x3c7602,_0x25ba0d);}else return _0x2f7ece[_0x47a30f(0x789)+'Selec'+_0x47a30f(0x5b2)](_0x616644['Owhyl'](_0x616644['CtBix'](_0x616644[_0x47a30f(0x665)],_0x551646),'\x22]'));},_0x276d41=_0x345c55('st'),_0x3f6dbc=_0x345c55(_0x53ace5(0x7f0)),_0x276952=_0x345c55('sp'),_0x1f825b=_0x616644[_0x53ace5(0x597)](_0x345c55,'fx'),_0x55cef7=_0x616644[_0x53ace5(0x25c)](_0x345c55,'fv'),_0x37a864=_0x345c55('bar');if(_0x276952)_0x276952['oncli'+'ck']=function(){var _0x4adaea=_0x53ace5,_0x14605b={'TkKfJ':function(_0x20309f,_0x181353){var _0x3219cf=_0x35e4;return _0x6a9607[_0x3219cf(0x6fb)](_0x20309f,_0x181353);}};if('ZtjSQ'!==_0x4adaea(0x611)){var _0x3a6363=_0x11a3b8[_0x4adaea(0x791)+'WebMo'+'dkit']['Runti'+'me'];_0x3a6363['__sak'+_0x4adaea(0x64d)+'g']=_0x14605b[_0x4adaea(0xa57)](_0x3c5583+':',_0x2d6ac4['rando'+'m']()[_0x4adaea(0x834)+'ing'](0x10*0x199+0x19f4+-0x3360)['slice'](-0x4b2*0x8+-0x221c+0xa*0x72b,-0x1535*0x1+0x1e29+0x8ea*-0x1)),_0x5d924e=_0x3a6363[_0x4adaea(0x675)+'uraTa'+'g'];}else _0x1dda55(!_0x5ecc68['on'],_0x5ecc68[_0x4adaea(0x1d8)+'r']);};if(_0x1f825b)_0x1f825b['oninp'+'ut']=function(){var _0x5d0316=_0x53ace5;_0x1dda55(_0x5ecc68['on'],parseFloat(_0x1f825b[_0x5d0316(0x5eb)])||0x111d*0x1+-0x1f6c+0xe50);};if(_0x616644[_0x53ace5(0x917)](_0x345c55,_0x616644['uYfqe']))_0x345c55(_0x53ace5(0xa2c))[_0x53ace5(0x3a6)+'ck']=function(){var _0x369fec=_0x53ace5;if(_0x6a9607['iviCb']===_0x6a9607['qXmPN'])return _0x35604e[_0x369fec(0x799)](_0x6a9607[_0x369fec(0x9d7)](_0x57e6dc,-0x759+-0x1c5*0x1+-0x2*-0x4c1))/(-0x1*-0x224e+-0x22f1+0x107);else _0x6a9607[_0x369fec(0xda)](_0x2a2547,_0x369fec(0xa38)+'hot');};var _0x29292d=_0x345c55(_0x53ace5(0x94f));if(_0x29292d)_0x29292d[_0x53ace5(0x3a6)+'ck']=function(){var _0x1afd33=_0x53ace5,_0x2f14c2={'FuVZU':function(_0xe68662,_0x2412e1){return _0xe68662(_0x2412e1);}};if(!_0x2b6a93['on'])_0x2b6a93['on']=!![],_0x2b6a93[_0x1afd33(0x64a)]=![];else!_0x2b6a93[_0x1afd33(0x64a)]?_0x2b6a93['boxes']=!![]:_0x2b6a93['on']=![];_0x29292d['textC'+'onten'+'t']=!_0x2b6a93['on']?'ESP\x20o'+'ff':_0x2b6a93[_0x1afd33(0x64a)]?'ESP\x20b'+'oth':_0x1afd33(0x6df)+'ap',_0x29292d[_0x1afd33(0x28c)][_0x1afd33(0x7db)+'round']=_0x2b6a93['on']?_0x5ae3b3:_0x1afd33(0x36c)+'paren'+'t',_0x29292d[_0x1afd33(0x28c)][_0x1afd33(0x915)]=_0x2b6a93['on']?_0x616644[_0x1afd33(0x983)]:_0x616644['OOQZD'];try{if('GNtDo'===_0x616644['aJeXv'])_0x39c403=_0x2f14c2[_0x1afd33(0x638)](_0xe56510,_0x2e45ad&&_0x39d77c[_0x1afd33(0x935)+'ge']||_0x4f298b);else{var _0x43e1f9=_0x1e532f();if(_0x43e1f9&&_0x43e1f9['el'])_0x43e1f9['el']['style'][_0x1afd33(0x95a)+'ay']=_0x2b6a93['on']?'':_0x616644['uqiLR'];var _0x49ac8f=_0x3c8045;if(_0x49ac8f&&_0x49ac8f['cv'])_0x49ac8f['cv'][_0x1afd33(0x28c)]['displ'+'ay']=_0x2b6a93['on']&&_0x2b6a93['boxes']?'':'none';}}catch(_0x2f1431){}};if(_0x616644[_0x53ace5(0x2c1)](_0x345c55,'fold'))_0x345c55(_0x616644[_0x53ace5(0x5bb)])[_0x53ace5(0x3a6)+'ck']=function(){var _0xf13174=_0x53ace5;if('CtypK'!==_0x616644['VNLsG']){_0x50c80e(![]),_0x33ae54(_0x1dfb85,-0x2635+-0x2*-0xacf+0x11c3*0x1);return;}else{if(!_0x37a864)return;var _0x2e385b=_0x37a864[_0xf13174(0x28c)]['displ'+'ay']===_0x616644[_0xf13174(0x43c)];_0x37a864['style'][_0xf13174(0x95a)+'ay']=_0x2e385b?'':'none',_0x616644['bTsKw'](_0x345c55,_0xf13174(0x90b))['textC'+'onten'+'t']=_0x2e385b?'-':'+';}};return document[_0x53ace5(0x388)][_0x53ace5(0x49f)+'dChil'+'d'](_0x2f7ece),_0x2449d1={'el':_0x2f7ece,'st':_0x276d41,'st2':_0x3f6dbc,'sp':_0x276952,'fx':_0x1f825b,'fv':_0x55cef7},_0x2449d1;}else for(var _0x111a95=-0xc0e+0x1*-0xa39+0x76d*0x3;_0x111a95<_0x57a52a[_0x53ace5(0xc4)+'h'];_0x111a95++){var _0x1b0727=_0x616644[_0x53ace5(0x933)](_0x39836e,_0xd28565+_0x37a325(_0x302b99[_0x111a95][-0x221b*0x1+0x16*0x1a3+-0x1e7],-0x106a+0x206d+-0xff3),_0x616644[_0x53ace5(0x7c1)]);if(_0x1b0727)_0x1d3407['refs'][_0x5c080d[_0x111a95][-0x23*-0x4d+0x2*-0x4b4+-0x16*0xd]]='0x'+(_0x1b0727>>>0x184f+-0x2240+0x9f1*0x1)['toStr'+'ing'](-0xeb0+0x1*-0x151b+0x23db);}}catch(_0x58fc9e){return console[_0x53ace5(0x2a2)](_0x616644['nQSJA'],_0x616644['NKoGv'](_0x53ace5(0x915)+':',_0x5ae3b3),_0x58fc9e),null;}}var _0x376bb9=-0x93*0x2f+-0xcc7*0x1+-0x27c6*-0x1;function _0x1dda55(_0x206bf4,_0x4ccdaa){var _0x44fea5=_0x4ccb6b,_0xf85e92={'XJwjm':function(_0x31f734,_0x48a656){return _0x31f734+_0x48a656;},'EZtlv':_0x616644[_0x44fea5(0x3b5)]},_0x3c3bc1=_0x5ecc68['on'];_0x5ecc68['on']=!!_0x206bf4;_0x5ecc68['on']&&!_0x3c3bc1&&(_0x616644['RXBal'](_0x4ccdaa,undefined)||_0x4ccdaa===null||_0x616644['Klfvn'](Number(_0x4ccdaa),0x1839+0x1b3*0xf+-0x31b5))&&(_0x4ccdaa=_0x376bb9);_0x5ecc68['facto'+'r']=Math[_0x44fea5(0x681)](_0x5ecc68[_0x44fea5(0x95d)],Math['max'](_0x5ecc68['min'],Number(_0x4ccdaa)||0x2d7*-0x9+-0x18f*-0xb+0x86b));if(!_0x5ecc68['on'])_0x1c8839={};var _0x275afe=_0x5d808b();if(_0x275afe){_0x275afe['sp']&&(_0x616644['anmwd'](_0x44fea5(0x71a),_0x616644['PzPTC'])?_0x32acce[_0x44fea5(0x7ca)]=_0xf85e92[_0x44fea5(0x3e5)]('Playe'+'rs\x20ar'+'e\x20pre'+'sent\x20'+_0x44fea5(0x7b9)+_0x44fea5(0x6dc)+_0x44fea5(0x89e)+'assif'+_0x44fea5(0x1a3)+_0x44fea5(0x85e)+_0x44fea5(0x275)+_0x44fea5(0x1a8)+_0x44fea5(0x5ba)+'k\x20',_0xf85e92[_0x44fea5(0x3cf)]):(_0x275afe['sp'][_0x44fea5(0xc9)+'onten'+'t']=_0x5ecc68['on']?'Speed'+_0x44fea5(0x497):'Speed'+_0x44fea5(0x9c2),_0x275afe['sp'][_0x44fea5(0x28c)][_0x44fea5(0x7db)+_0x44fea5(0x799)]=_0x5ecc68['on']?_0x5ae3b3:_0x44fea5(0x36c)+'paren'+'t',_0x275afe['sp'][_0x44fea5(0x28c)]['color']=_0x5ecc68['on']?'#2a0f'+'1b':_0x616644[_0x44fea5(0xa35)]));if(_0x275afe['fx'])_0x275afe['fx'][_0x44fea5(0x5eb)]=_0x616644[_0x44fea5(0x919)](String,_0x5ecc68[_0x44fea5(0x1d8)+'r']);if(_0x275afe['fv'])_0x275afe['fv'][_0x44fea5(0xc9)+_0x44fea5(0x4e9)+'t']=_0x5ecc68[_0x44fea5(0x1d8)+'r'][_0x44fea5(0x186)+'ed'](-0x260a+-0x2*0x38+0x267b)+'x';}}function _0x169c57(_0x10a224){var _0xb63ac3=_0x4ccb6b,_0x4de4c1={'AcenG':function(_0xb10339,_0x576fd2){return _0xb10339+_0x576fd2;},'QRRxJ':_0x616644[_0xb63ac3(0x1ae)]};if(_0xb63ac3(0x8fc)!==_0x616644[_0xb63ac3(0xa45)])_0x156192=_0x4de4c1[_0xb63ac3(0x48b)](_0xb63ac3(0xe2)+'·\x20'+_0x3ae071[_0xb63ac3(0x1b3)](_0x6b7376[_0xb63ac3(0x198)+'nces'])['lengt'+'h']+('\x20obje'+_0xb63ac3(0x8c8)+'\x20')+_0x512d66,'s'),_0x3c412d=_0x4de4c1['QRRxJ'];else{var _0x5c84de=_0x5d808b();if(!_0x5c84de||!_0x5c84de['st'])return;try{var _0x5b395c=_0x616644[_0xb63ac3(0xf0)]['split']('|'),_0x1cdef9=-0x455*0x5+-0x1d80+0x3329;while(!![]){switch(_0x5b395c[_0x1cdef9++]){case'0':var _0x1c2347=_0x5c84de[_0xb63ac3(0x7f0)];continue;case'1':var _0x1858a2=_0x10a224&&_0x10a224[_0xb63ac3(0x94f)]||null;continue;case'2':_0x5c84de['st']['textC'+_0xb63ac3(0x4e9)+'t']=_0x51253d;continue;case'3':var _0x1b8fe2=_0x1858a2?_0x1858a2['enemy'+'Count']||0x9cb*0x3+0xdae+-0x1*0x2b0f:0x1c93+0xe7*0x1c+-0x4e5*0xb;continue;case'4':var _0x235873=_0x1858a2?_0x1858a2[_0xb63ac3(0x8c4)+_0xb63ac3(0x980)]||-0x47+-0x140b+0x1452:-0xe0f*-0x1+-0x6d6+0x2b*-0x2b;continue;case'5':if(_0x5c84de['el'])_0x5c84de['el'][_0xb63ac3(0x28c)]['displ'+'ay']='';continue;case'6':var _0x51253d=_0x616644['NNgcf'](_0x616644[_0xb63ac3(0x57b)]('v'+(_0x10a224&&_0x10a224[_0xb63ac3(0x2b8)+'on']||_0x143793)+_0x616644['SVhvP']+(_0x10a224&&_0x10a224[_0xb63ac3(0x940)+_0xb63ac3(0x1cc)+'ed']||0x2ef+0xb17+-0xe06)+'/'+(_0x10a224&&_0x10a224['hooks'+_0xb63ac3(0x5cc)]||0x1*-0x301+-0x5ab+0x8ac)+_0x616644[_0xb63ac3(0x922)],_0x2fb1f4)+(_0xb63ac3(0x911)+'\x20')+_0x566746+_0x616644[_0xb63ac3(0xab9)],_0x207f7e);continue;case'7':_0x1c2347&&(_0x1c2347[_0xb63ac3(0xc9)+_0xb63ac3(0x4e9)+'t']=_0x1b8fe2>-0x1fd+-0x1*-0x912+0x25*-0x31?_0x616644[_0xb63ac3(0xa87)](_0x616644[_0xb63ac3(0xaab)](_0x616644[_0xb63ac3(0x8f4)],_0x1b8fe2),_0x235873?'\x20+\x20'+_0x235873+_0xb63ac3(0x2cd):'')+(_0x1858a2&&_0x1858a2[_0xb63ac3(0x463)+'a']?'\x20\x20cam'+'\x20'+_0x1858a2[_0xb63ac3(0x463)+'aFrom']:'\x20\x20cam'+'\x20-'):_0x616644[_0xb63ac3(0x576)](_0x616644[_0xb63ac3(0x27a)],_0x1858a2&&_0x1858a2[_0xb63ac3(0x463)+'a']?_0x1858a2[_0xb63ac3(0x463)+'aFrom']:'-'),_0x1c2347[_0xb63ac3(0x28c)]['color']=_0x616644[_0xb63ac3(0xb0b)](_0x1b8fe2,0x1bf*-0x8+0x7c7*-0x1+0x15bf)?_0x616644[_0xb63ac3(0x1ae)]:'#8d7a'+'99');continue;case'8':var _0x566746=_0x4b55b6?_0x616644[_0xb63ac3(0x7e4)](_0x4b55b6[_0xb63ac3(0x14d)+'r']['byteL'+'ength'],-0x240*-0x7c9+-0x1472fe+0x12eebe)[_0xb63ac3(0x186)+'ed'](-0x4*-0x2ab+-0x46c*0x1+0x28*-0x28)+'MB':_0xb63ac3(0xa5d)+'m';continue;case'9':var _0x2fb1f4=Object[_0xb63ac3(0x1b3)](_0x10a224&&_0x10a224['insta'+_0xb63ac3(0x121)]||{})[_0xb63ac3(0xc4)+'h'];continue;case'10':if(!_0x616644['ffpzK'](_0x3ea2ce)&&!_0x4b2daf){if(_0x5c84de['el'])_0x5c84de['el'][_0xb63ac3(0x28c)]['displ'+'ay']=_0xb63ac3(0xa71);return;}continue;}break;}}catch(_0x563fe3){}}}window['addEv'+_0x4ccb6b(0x959)+_0x4ccb6b(0x800)+'r']('keydo'+'wn',function(_0xf94b53){var _0x495180=_0x4ccb6b;if(!_0xf94b53)return;try{var _0x592fa2=('1|4|0'+_0x495180(0xafb)+'2|3')['split']('|'),_0x511461=-0x1ed7*-0x1+-0x1e71+-0x66;while(!![]){switch(_0x592fa2[_0x511461++]){case'0':if(_0xf94b53[_0x495180(0x953)]==='F8'){_0xf94b53[_0x495180(0x8d2)+_0x495180(0x806)+_0x495180(0x8a8)](),_0x616644['EcvBk'](_0x1dda55,_0x5ecc68['on'],_0x5ecc68['facto'+'r']+(-0x9c*-0x1e+0x9ae*-0x3+-0x3*-0x396+0.5));return;}continue;case'1':if(_0x616644['lSPxH'](_0xf94b53['code'],'F9')){_0xf94b53['preve'+_0x495180(0x806)+_0x495180(0x8a8)](),_0x2a2547(_0x616644['ojUHC']);return;}continue;case'2':if(_0xf94b53[_0x495180(0x953)]==='Brack'+'etRig'+'ht'){_0xf94b53[_0x495180(0x8d2)+_0x495180(0x806)+_0x495180(0x8a8)](),_0x299fc0['fov']=Math[_0x495180(0x681)](-0x41c+-0x1*0x1255+0x16fd,_0x616644[_0x495180(0x576)](_0x299fc0[_0x495180(0x11d)],0x2*-0x1173+-0x24b3+0x479b)),_0x4509fb();return;}continue;case'3':if(_0x616644[_0x495180(0x9d0)](_0xf94b53['code'],_0x495180(0x54b)+_0x495180(0x5bd)+'t')){_0xf94b53[_0x495180(0x8d2)+_0x495180(0x806)+'ault'](),_0x299fc0[_0x495180(0x11d)]=Math[_0x495180(0x95d)](-0x8*0x139+-0x1*-0x396+0x650,_0x616644['APOZK'](_0x299fc0[_0x495180(0x11d)],-0x93d+0x8bc+0x83)),_0x4509fb();return;}continue;case'4':if(_0xf94b53['code']==='F7'){_0xf94b53['preve'+_0x495180(0x806)+'ault'](),_0x616644['EvFSw'](_0x1dda55,!_0x5ecc68['on'],_0x5ecc68[_0x495180(0x1d8)+'r']);return;}continue;case'5':if(_0xf94b53[_0x495180(0x953)]===_0x616644[_0x495180(0x3c0)]){_0xf94b53['preve'+_0x495180(0x806)+_0x495180(0x8a8)](),_0x616644[_0x495180(0x25f)](_0x1a0992,!_0x2cf7d2[_0x495180(0x305)]);return;}continue;case'6':if(_0x616644[_0x495180(0x66c)](_0xf94b53['code'],'F6')){_0xf94b53[_0x495180(0x8d2)+_0x495180(0x806)+_0x495180(0x8a8)](),_0x1dda55(_0x5ecc68['on'],_0x5ecc68[_0x495180(0x1d8)+'r']-(-0x2*0x74f+0x1*0x14c3+-0x625+0.5));return;}continue;}break;}}catch(_0x2902f4){}},!![]);var _0x2b6a93={'on':!![],'span':0x50,'boxes':![]};function _0x4c0eed(){var _0x2c7a3b=_0x4ccb6b,_0x157d41={'FGmCp':function(_0x38386a,_0x64433f){return _0x38386a-_0x64433f;},'LfnNp':function(_0x5d45b4,_0x22d092){return _0x5d45b4+_0x22d092;}};if(_0x616644['YfgZt']('WumeN',_0x2c7a3b(0x9e2))){var _0x5c1c35=_0x1d185b[_0x2c7a3b(0x3e9)+_0x2c7a3b(0x410)+'orkSy'+'nc']||{},_0x596ee0=Object['keys'](_0x5c1c35);for(var _0x5c6ed4=0x1ff7+0x17f9+-0x37f0;_0x616644[_0x2c7a3b(0x977)](_0x5c6ed4,_0x596ee0[_0x2c7a3b(0xc4)+'h']);_0x5c6ed4++){if(_0x616644[_0x2c7a3b(0x943)]===_0x2c7a3b(0x8f2))_0x4a0419('snaps'+'hot');else{var _0x52e2ac=_0x5c1c35[_0x596ee0[_0x5c6ed4]][_0x2c7a3b(0x872)],_0x5c79ea=_0x5c90fe(_0x52e2ac+(-0x988*0x2+-0x1ce5*0x1+0x3025),_0x2c7a3b(0x790));if(!_0x5c79ea)continue;var _0x4e721c=_0x20a90a[_0x2c7a3b(0x7a7)+_0x2c7a3b(0x9d2)]||[],_0x44e479={'mouseLook':'0x'+(_0x5c79ea>>>0x15b7+-0x7*-0x201+-0x19*0x16e)[_0x2c7a3b(0x834)+_0x2c7a3b(0x873)](-0x199+0x2603+-0x245a),'floats':{},'camera':null,'vec2':null};for(var _0x5ca69d=0x1*-0x138f+0x2*-0x1172+-0x107*-0x35;_0x616644['RiMeZ'](_0x5ca69d,_0x4e721c[_0x2c7a3b(0xc4)+'h']);_0x5ca69d++){if(_0x4e721c[_0x5ca69d][0x1209+0x167f+0x1*-0x2887]!==_0x616644[_0x2c7a3b(0xaa3)])continue;_0x44e479[_0x2c7a3b(0x956)+'s'][_0x616644[_0x2c7a3b(0x600)]('0x',_0x4e721c[_0x5ca69d][-0x801+0x3b*-0x9+0x6*0x1ae]['toStr'+'ing'](0x7fa+-0xdbf+0x5d5))]=_0x5c90fe(_0x616644[_0x2c7a3b(0x1e8)](_0x5c79ea,_0x4e721c[_0x5ca69d][0x778+-0x692+-0xe6]),_0x2c7a3b(0x893));}var _0x231d69=_0x5c90fe(_0x616644['NKoGv'](_0x5c79ea,-0x1*0x236b+0x13bf+0xfd8),'u32');if(_0x231d69)_0x44e479['camer'+'a']=_0x616644[_0x2c7a3b(0x6d4)]('0x',_0x616644[_0x2c7a3b(0x15e)](_0x231d69,-0xe3*0x19+0xfef*-0x2+-0x57*-0x9f)['toStr'+_0x2c7a3b(0x873)](0x1af9+-0x1f34+0x44b));var _0x4aebf2=_0x5072cf(_0x5c79ea,0x8*-0x37f+-0x103*-0x7+0x152b*0x1,0x1a7+0x3*-0x19f+0x338);if(_0x4aebf2)_0x44e479['vec2']=_0x4aebf2;return _0x44e479;}}return null;}else{if(!_0x4c68bd)return;var _0x45d44f=_0xd3b1d0[_0x2c7a3b(0x348)+'tWidt'+'h']||0x5dd*-0x4+0x1bea+-0x20a,_0x473c91=_0x33d5a8[_0x2c7a3b(0x348)+_0x2c7a3b(0x931)+'ht']||0x1394+0x17*0x152+0xb*-0x466,_0x5c8628=_0x157d41[_0x2c7a3b(0xa49)](_0x5b40a5['clien'+'tX']||0x4f*0x61+0x1005+-0x16fa*0x2,_0x12f15a),_0x51e707=(_0x3f2e86['clien'+'tY']||-0x30*-0x74+-0x26ca+-0x5ae*-0x3)-_0x5cfacf;_0x5c8628=_0x5d9e34['max'](0xf*-0x1d9+0x268d+0x39a*-0x3,_0x117ed9[_0x2c7a3b(0x681)](_0x157d41[_0x2c7a3b(0xa49)](_0x6f0a34['inner'+_0x2c7a3b(0x294)]||0x10*-0x75+-0x6b9*-0x1+0x97,_0x45d44f)-(-0x652+0x267b*-0x1+0x1*0x2cd5),_0x5c8628)),_0x51e707=_0x3d3cf1['max'](-0x1*-0x1b83+-0x4b4*-0x2+0x1f1*-0x13,_0x476591[_0x2c7a3b(0x681)]((_0x372d1b[_0x2c7a3b(0x1b9)+'Heigh'+'t']||-0x1fa*-0x6+0x303*-0x1+-0x8d9)-_0x473c91-(-0xfcc*-0x2+0x942+-0x28d2),_0x51e707)),_0x995a49[_0x2c7a3b(0x28c)][_0x2c7a3b(0x2be)]=_0x157d41['LfnNp'](_0x5c8628,'px'),_0xbfc07f[_0x2c7a3b(0x28c)][_0x2c7a3b(0x4b6)]=_0x157d41[_0x2c7a3b(0x427)](_0x51e707,'px'),_0xfd5ef9['style'][_0x2c7a3b(0x88c)]='auto',_0x8d9081['style'][_0x2c7a3b(0xb21)+'m']=_0x2c7a3b(0x3bc),_0x7b338f[_0x2c7a3b(0x2b2)]={'x':_0x5c8628,'y':_0x51e707};}}var _0x4e7812=_0x4ccb6b(0x6f7)+_0x4ccb6b(0x5fe)+_0x4ccb6b(0x11d),_0x299fc0={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{var _0x56d403=localStorage[_0x4ccb6b(0x158)+'em'](_0x4e7812);if(_0x56d403)_0x299fc0['fov']=Math[_0x4ccb6b(0x681)](-0x4d*0x3d+0x63c*0x1+0x7*0x1cf,Math[_0x4ccb6b(0x95d)](0x2*-0xc2c+-0xe7d+-0x1*-0x26f3,parseFloat(_0x56d403)||-0xac0*-0x2+0x623+-0x1b49));}catch(_0x35d472){}function _0x4509fb(){var _0xefa6ec=_0x4ccb6b;try{localStorage['setIt'+'em'](_0x4e7812,_0x616644[_0xefa6ec(0x6f0)](String,_0x299fc0['fov']));}catch(_0x28e5ad){}}var _0x54f170={'pitch':null,'yaw':null,'identified':![],'why':_0x4ccb6b(0xad5)+'useLo'+_0x4ccb6b(0x4d9)+'t'};function _0x409e34(){var _0x21967f=_0x4ccb6b,_0x4aac8e=('12|10'+_0x21967f(0x262)+'|0|11'+'|2|5|'+'6|14|'+_0x21967f(0x1d4)+_0x21967f(0xade)+'15')[_0x21967f(0xad1)]('|'),_0x113705=-0x249e+-0xe7b+0x3319;while(!![]){switch(_0x4aac8e[_0x113705++]){case'0':var _0x1ea719=_0x5c90fe(_0x616644['OOFCI'](_0x11d05f,-0x1981+-0x1de3+0x3780),_0x21967f(0x893));continue;case'1':_0x54f170['pitch']=_0x27290a+_0x299fc0[_0x21967f(0x5e7)+_0x21967f(0x10b)];continue;case'2':_0x54f170[_0x21967f(0x5e7)]=_0x27290a;continue;case'3':_0x54f170[_0x21967f(0x4d3)+_0x21967f(0x9df)]=!![];continue;case'4':if(_0x20c83e['lengt'+'h'])return _0x54f170['ident'+_0x21967f(0x9df)]=![],null;continue;case'5':_0x54f170['yaw']=_0x1ea719;continue;case'6':var _0x20c83e=[];continue;case'7':var _0x27290a=_0x5c90fe(_0x616644[_0x21967f(0x576)](_0x11d05f,-0x2b*0x77+-0x88d*0x1+-0x1ca2*-0x1),_0x616644[_0x21967f(0xaa3)]);continue;case'8':_0x54f170['why']=_0x20c83e['lengt'+'h']?_0x20c83e[_0x21967f(0xb2)](';\x20'):'';continue;case'9':_0x54f170[_0x21967f(0x32a)]=_0x616644['NKoGv'](_0x1ea719,_0x299fc0['yawOf'+'f']);continue;case'10':if(!_0x244811||!_0x244811['mouse'+'Look'])return _0x54f170[_0x21967f(0x4d3)+'ified']=![],_0x54f170[_0x21967f(0x7f2)]=_0x616644[_0x21967f(0x840)],null;continue;case'11':if(typeof _0x27290a!=='numbe'+'r'||_0x616644['sMoBB'](typeof _0x1ea719,_0x616644[_0x21967f(0x2f3)])||!isFinite(_0x27290a)||!isFinite(_0x1ea719))return _0x54f170[_0x21967f(0x4d3)+_0x21967f(0x9df)]=![],_0x54f170[_0x21967f(0x7f2)]=_0x616644[_0x21967f(0x44c)],null;continue;case'12':var _0x244811=_0x616644['tduLk'](_0x4c0eed);continue;case'13':var _0x11d05f=parseInt(_0x244811['mouse'+_0x21967f(0x9d2)],-0x1072*-0x1+-0xda*0x6+-0x3*0x3c2);continue;case'14':if(_0x616644['CxAKc'](_0x27290a,-(0xd2f+-0xaed+-0x1e8))||_0x616644['qvEQV'](_0x27290a,0x12ae+0x8a*-0x5+-0xfa2))_0x20c83e['push'](_0x616644['OcpOz'](_0x21967f(0x6f3),Math[_0x21967f(0x799)](_0x27290a))+(_0x21967f(0x86b)+'ot\x20a\x20'+_0x21967f(0x5e7)));continue;case'15':return _0x54f170;}break;}}function _0x101477(_0x1a292c,_0x34b8ce,_0x164be8,_0x231fec){var _0x478ca7=_0x4ccb6b;if(_0x616644['VpsHE']!=='TcEAG'){var _0x386f48=_0x563439[_0x405efc],_0x5ae07f=_0x594389[_0x519d14];if(_0x386f48!==_0x5ae07f)_0x1124c0[_0x478ca7(0xb0c)](_0x616644[_0x478ca7(0x84a)](_0x616644[_0x478ca7(0x1b5)](_0x47a48b+':\x20',_0x386f48)+_0x616644[_0x478ca7(0x50e)],_0x5ae07f));}else{var _0x212d6d=(_0x478ca7(0x4f2)+_0x478ca7(0x7d4)+_0x478ca7(0x504)+_0x478ca7(0x57d)+'3|4|0'+'|2|17'+_0x478ca7(0x7fd)+'|16|1'+'5|8')[_0x478ca7(0xad1)]('|'),_0x2267bb=0x13*-0x1aa+0x23c5+-0x427;while(!![]){switch(_0x212d6d[_0x2267bb++]){case'0':var _0x4ef4c8=_0x616644[_0x478ca7(0x6e0)](_0x616644[_0x478ca7(0xa72)](_0x616644[_0x478ca7(0x984)](_0x4e3ee9,_0x53ac4e*_0x3236c9-_0x2cd579*_0x55360a),_0x433005*(_0x616644[_0x478ca7(0xb06)](_0x2cd579,_0x59c45c)-_0x616644[_0x478ca7(0x73d)](_0x54dd09,_0x3236c9))),_0x2a4999*(_0x54dd09*_0x55360a-_0x53ac4e*_0x59c45c));continue;case'1':var _0xd514f2=_0x616644[_0x478ca7(0x708)](_0x4e3ee9*_0x59c45c+_0x433005*_0x55360a,_0x2a4999*_0x3236c9);continue;case'2':var _0x21e21d=_0x164be8/_0x231fec;continue;case'3':if(_0x616644[_0x478ca7(0x7b2)](_0xd514f2,-0x95f+-0xb6a+0x139*0x11+0.05))return null;continue;case'4':var _0x247373=_0x4e3ee9*_0x54dd09+_0x433005*_0x53ac4e+_0x2a4999*_0x2cd579;continue;case'5':var _0x4b717e=Math[_0x478ca7(0x704)](_0x303846/(0x2393*0x1+0x1314+-0x3*0x1237));continue;case'6':var _0x59c45c=_0x616644[_0x478ca7(0x929)](Math[_0x478ca7(0x336)](_0x2e7f81),_0x3111c4),_0x55360a=-Math[_0x478ca7(0x336)](_0x55a964),_0x3236c9=Math['cos'](_0x2e7f81)*_0x3111c4;continue;case'7':var _0x3111c4=Math[_0x478ca7(0x3e1)](_0x55a964);continue;case'8':return{'x':(_0x50628a*(0x93d+-0x10ef+0x7b2*0x1+0.5)+(0x81*-0x46+0x1*0x252e+0xf4*-0x2+0.5))*_0x164be8,'y':_0x616644['SapDS'](-0x7cc*0x1+-0x18a3+-0x1b5*-0x13+0.5-_0x598f7f*(0x429+-0x6*-0x147+-0xbd3+0.5),_0x231fec),'z':_0xd514f2};case'9':var _0x4a46df=_0x616644['tKazj'](_0x409e34);continue;case'10':var _0x4e3ee9=_0x34b8ce[-0x1*0xe5+-0x1bb5+-0x20b*-0xe]-_0x1a292c[-0x1a42*0x1+0x1d36+-0x2f4],_0x433005=_0x616644['ofSox'](_0x34b8ce[0x2*0xa51+-0x21e4+-0x5*-0x2a7],_0x1a292c[0xb*-0x2ab+0x77*0x2+0x6b*0x44]),_0x2a4999=_0x34b8ce[0x1b62+-0x18e5+-0x27b]-_0x1a292c[0x268c+-0x15*0x1a3+-0x61*0xb];continue;case'11':var _0x55a964=_0x616644[_0x478ca7(0x684)](_0x616644['MfxNW'](_0x4a46df[_0x478ca7(0x5e7)],Math['PI']),-0x13af*0x1+0x5e*0x1+0x1405*0x1),_0x2e7f81=_0x616644['tEmXZ'](_0x616644[_0x478ca7(0x12c)](_0x4a46df[_0x478ca7(0x32a)],Math['PI']),0x916+-0x1209+0x9a7);continue;case'12':var _0x50628a=_0x616644[_0x478ca7(0x772)](_0x616644[_0x478ca7(0x659)](_0x247373,_0xd514f2),_0x4b717e*_0x21e21d);continue;case'13':if(!_0x4a46df)return null;continue;case'14':var _0x54dd09=_0x3236c9,_0x53ac4e=0x1cf3*0x1+-0x234f*0x1+0x65c,_0x2cd579=-_0x59c45c;continue;case'15':if(_0x616644['RiMeZ'](_0x50628a,-(-0x1779*0x1+-0x2*-0xf5b+-0x73c+0.6000000000000001))||_0x616644['bmOiy'](_0x50628a,-0x1*-0x19bd+0x4a3*0x1+-0x1e5f+0.6000000000000001)||_0x616644[_0x478ca7(0x20e)](_0x598f7f,-(-0x1*0xb5+0x4*-0x91e+0x1*0x252e+0.6000000000000001))||_0x616644[_0x478ca7(0xa90)](_0x598f7f,-0x18c6+-0x358*-0x1+0x725*0x3+0.6000000000000001))return null;continue;case'16':var _0x598f7f=_0x616644['gFPNl'](_0x616644['ruoYO'](_0x4ef4c8,_0xd514f2),_0x4b717e);continue;case'17':var _0x303846=_0x616644[_0x478ca7(0x961)](_0x299fc0[_0x478ca7(0x11d)]*Math['PI'],0x113*0x17+0x1*0x4c1+0x1cc2*-0x1);continue;}break;}}}var _0x2cf7d2={'open':![],'cat':_0x4ccb6b(0x7a5)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x8f603c=_0x616644['lPYdk'],_0x4b2daf=null,_0x5023cd=[{'id':_0x4ccb6b(0x7a5)+'t','label':_0x616644[_0x4ccb6b(0x590)]},{'id':'visua'+'ls','label':_0x616644['xIvop']},{'id':_0x616644['dgKAZ'],'label':_0x616644[_0x4ccb6b(0x475)]},{'id':_0x4ccb6b(0x2f0),'label':_0x4ccb6b(0x277)}],_0x49fe31=_0x616644[_0x4ccb6b(0x36e)](_0x616644[_0x4ccb6b(0x84a)](_0x616644[_0x4ccb6b(0x2a8)](_0x616644[_0x4ccb6b(0x7fa)](_0x616644['mKLWN'](_0x616644['mnrFc'](_0x616644[_0x4ccb6b(0x261)](_0x616644['vUilU'](_0x616644[_0x4ccb6b(0x7aa)](_0x616644[_0x4ccb6b(0x20c)](_0x616644['qVdtr'](_0x616644[_0x4ccb6b(0x195)](_0x616644[_0x4ccb6b(0x725)](_0x616644[_0x4ccb6b(0x555)](_0x616644[_0x4ccb6b(0xa47)](_0x616644[_0x4ccb6b(0x243)](_0x616644[_0x4ccb6b(0x207)](_0x616644['qnjPK'](_0x616644[_0x4ccb6b(0x4b3)](_0x616644['JlTju'](_0x616644['MXhIN'](_0x4ccb6b(0x3f3)+'ra-me'+_0x4ccb6b(0x655)+'ot{al'+_0x4ccb6b(0x8d4)+'tial}',_0x616644[_0x4ccb6b(0xb23)]),_0x4ccb6b(0x95a)+_0x4ccb6b(0x306)+'ex;ga'+'p:10p'+_0x4ccb6b(0x70c)+'ding:'+_0x4ccb6b(0x618)+_0x4ccb6b(0x602)+'r-rad'+'ius:2'+_0x4ccb6b(0x4c5)+_0x4ccb6b(0x19b)+_0x4ccb6b(0x635)+_0x4ccb6b(0x6d9)+_0x4ccb6b(0xe4)+'-inde'+_0x4ccb6b(0x748)+_0x4ccb6b(0x3a2)+_0x4ccb6b(0x33e)),_0x616644['FEetF'])+_0x616644[_0x4ccb6b(0x865)],_0x4ccb6b(0x476)+'ty:0;'+'trans'+'form:'+'trans'+_0x4ccb6b(0x552)+_0x4ccb6b(0x2ae)+_0x4ccb6b(0xc0)+_0x4ccb6b(0x710)+'event'+'s:non'+'e;tra'+_0x4ccb6b(0x928)+_0x4ccb6b(0x2fc)+'acity'+'\x20.35s'+'\x20ease'+_0x4ccb6b(0x646)+_0x4ccb6b(0x126)+_0x4ccb6b(0x172)+'\x20cubi'+'c-bez'+_0x4ccb6b(0xb0d)+'22,1,'+_0x4ccb6b(0x3fa)+');')+('color'+':#f6e'+_0x4ccb6b(0x281)+_0x4ccb6b(0xac8)+'ize:1'+_0x4ccb6b(0x7b5)+_0x4ccb6b(0x877)+_0x4ccb6b(0x501)+':\x22Int'+_0x4ccb6b(0x9b2)+_0x4ccb6b(0x2c2)+'\x20UI\x22,'+_0x4ccb6b(0xb2a)+_0x4ccb6b(0x46c)+_0x4ccb6b(0x743)+_0x4ccb6b(0x9a1)+';}')+('#saku'+'ra-me'+_0x4ccb6b(0x655)+_0x4ccb6b(0x7e2)+'-pane'+'l.sho'+'wn{op'+_0x4ccb6b(0x8c0)+':1;tr'+_0x4ccb6b(0xa61)+_0x4ccb6b(0x8ad)+_0x4ccb6b(0x440)+'inter'+'-even'+_0x4ccb6b(0x8a9)+_0x4ccb6b(0x869))+(_0x4ccb6b(0x4ff)+'ide{d'+_0x4ccb6b(0x2e3)+_0x4ccb6b(0x5e5)+_0x4ccb6b(0x288)+_0x4ccb6b(0x567)+'ectio'+_0x4ccb6b(0x9b0)+_0x4ccb6b(0x4d0)+'lign-'+_0x4ccb6b(0x8ed)+':cent'+_0x4ccb6b(0x3a1)+_0x4ccb6b(0x206)+_0x4ccb6b(0x8ec)+_0x4ccb6b(0xb03)+_0x4ccb6b(0x288)+'x:non'+_0x4ccb6b(0x787)+_0x4ccb6b(0xbf)+_0x4ccb6b(0x6f2)+'0;')+(_0x4ccb6b(0x602)+_0x4ccb6b(0x4f5)+_0x4ccb6b(0x7c5)+_0x4ccb6b(0x957)+_0x4ccb6b(0x165)+_0x4ccb6b(0xa81)+_0x4ccb6b(0x22b)+_0x4ccb6b(0x500)+_0x4ccb6b(0x131)+'5,.02'+'5);bo'+_0x4ccb6b(0x441)+_0x4ccb6b(0x5ef)+_0x4ccb6b(0x9f2)+_0x4ccb6b(0x918)+'\x201px\x20'+_0x4ccb6b(0x22b)+_0x4ccb6b(0x500)+_0x4ccb6b(0x131)+_0x4ccb6b(0x2cc)+_0x4ccb6b(0xa8a))+('.mn-l'+_0x4ccb6b(0x82c)+_0x4ccb6b(0x2e3)+'y:gri'+_0x4ccb6b(0x7e8)+_0x4ccb6b(0x34e)+_0x4ccb6b(0x7d5)+_0x4ccb6b(0x884)+_0x4ccb6b(0x8ec)+'h:32p'+'x;hei'+_0x4ccb6b(0x7f9)+'2px;m'+_0x4ccb6b(0x8b6)+_0x4ccb6b(0xaec)+_0x4ccb6b(0x7a6)+_0x4ccb6b(0x2df))+_0x616644[_0x4ccb6b(0x987)],_0x4ccb6b(0x59e)+_0x4ccb6b(0x329)+'splay'+':flex'+';alig'+'n-ite'+_0x4ccb6b(0x238)+'nter;'+_0x4ccb6b(0x56f)+_0x4ccb6b(0x149)+_0x4ccb6b(0xa22)+_0x4ccb6b(0x12d)+_0x4ccb6b(0x622)+'dth:5'+_0x4ccb6b(0x8a5)+_0x4ccb6b(0x59d)+_0x4ccb6b(0x2f9)+';bord'+_0x4ccb6b(0x570)+'borde'+_0x4ccb6b(0x4f5)+_0x4ccb6b(0x7c5)+_0x4ccb6b(0xb13))+(_0x4ccb6b(0x7db)+_0x4ccb6b(0x799)+_0x4ccb6b(0xabc)+_0x4ccb6b(0xac7)+_0x4ccb6b(0x144)+'lor:r'+'gba(2'+_0x4ccb6b(0x39f)+_0x4ccb6b(0x86a)+',.4);'+_0x4ccb6b(0x7b7)+_0x4ccb6b(0x4a2)+'nter;'+_0x4ccb6b(0x558)+_0x4ccb6b(0x1c7)+_0x4ccb6b(0x618)+'font-'+'weigh'+_0x4ccb6b(0x9dd)+_0x4ccb6b(0x3a8)+'-fami'+'ly:in'+_0x4ccb6b(0xa92)+';}'),_0x616644[_0x4ccb6b(0x630)]),'.mn-t'+'ab.ac'+_0x4ccb6b(0x477)+'color'+':#ff6'+'b9d;b'+'ackgr'+_0x4ccb6b(0xa81)+_0x4ccb6b(0x22b)+'255,1'+'07,15'+'7,.1)'+';}'),'.mn-m'+'ain{f'+'lex:1'+_0x4ccb6b(0x5cd)+_0x4ccb6b(0x398)+_0x4ccb6b(0x7ff)+_0x4ccb6b(0x1d7)+_0x4ccb6b(0x6ea)+_0x4ccb6b(0x998)+_0x4ccb6b(0x199)+_0x4ccb6b(0x36d)+_0x4ccb6b(0xc2)+_0x4ccb6b(0x6fa))+(_0x4ccb6b(0x59e)+_0x4ccb6b(0xa5f)+_0x4ccb6b(0x1d7)+_0x4ccb6b(0x6ea)+_0x4ccb6b(0x88f)+_0x4ccb6b(0x7ee)+_0x4ccb6b(0x238)+_0x4ccb6b(0xb32)+_0x4ccb6b(0x8b2)+_0x4ccb6b(0x4c5)+_0x4ccb6b(0x3c5)+_0x4ccb6b(0x62c)+_0x4ccb6b(0x359)+'12px;'+'user-'+'selec'+_0x4ccb6b(0x607)+'e;}')+(_0x4ccb6b(0x59e)+_0x4ccb6b(0xaf4)+_0x4ccb6b(0x698)+_0x4ccb6b(0x1a5)+_0x4ccb6b(0xa4f)+'th:0;'+'}')+('.mn-h'+_0x4ccb6b(0x24d)+'-size'+_0x4ccb6b(0x256)+';font'+'-weig'+_0x4ccb6b(0x7bf)+_0x4ccb6b(0x7ed))+_0x616644[_0x4ccb6b(0x104)]+_0x616644[_0x4ccb6b(0x60e)]+('color'+':inhe'+'rit;o'+_0x4ccb6b(0x7cc)+_0x4ccb6b(0xadf)+_0x4ccb6b(0xa2b)+_0x4ccb6b(0x5b6)+_0x4ccb6b(0x3db)+';}'),_0x4ccb6b(0x51b)+'lose:'+'hover'+_0x4ccb6b(0x75f)+'ity:1'+';back'+_0x4ccb6b(0x99b)+_0x4ccb6b(0x8ee)+'a(255'+_0x4ccb6b(0x1f4)+_0x4ccb6b(0x56a)+_0x4ccb6b(0x88e)),_0x616644[_0x4ccb6b(0x7d1)])+(_0x4ccb6b(0x51b)+'ols{f'+_0x4ccb6b(0x4bc)+_0x4ccb6b(0x5cd)+_0x4ccb6b(0x629)+_0x4ccb6b(0x71c)+'verfl'+'ow-y:'+_0x4ccb6b(0x8d6)+_0x4ccb6b(0x95a)+'ay:gr'+'id;gr'+_0x4ccb6b(0x7e7)+'mplat'+'e-col'+_0x4ccb6b(0x6cf)+_0x4ccb6b(0x8ea)+_0x4ccb6b(0x75b)+_0x4ccb6b(0x8ae)+_0x4ccb6b(0x390)+_0x4ccb6b(0x556)+'50px,'+_0x4ccb6b(0x6d7)+';'),_0x4ccb6b(0x45f)+_0x4ccb6b(0xa3a)+'s:sta'+_0x4ccb6b(0x3ee)+_0x4ccb6b(0x4b2)+_0x4ccb6b(0x4e9)+'t:sta'+_0x4ccb6b(0x5d9)+'p:10p'+_0x4ccb6b(0x70c)+_0x4ccb6b(0xbf)+'0\x204px'+'\x206px\x20'+_0x4ccb6b(0x7ed))+('.mn-c'+_0x4ccb6b(0x369)+_0x4ccb6b(0xb4)+'it-sc'+'rollb'+_0x4ccb6b(0x486)+_0x4ccb6b(0xbe)+_0x4ccb6b(0x573))+_0x616644['xYrTp'],_0x616644[_0x4ccb6b(0x5c6)])+_0x616644[_0x4ccb6b(0x39d)],_0x616644['IZkmT'])+('.sk-c'+_0x4ccb6b(0x867)+'itle{'+'flex:'+'1;min'+'-widt'+'h:0;}')+('.sk-c'+_0x4ccb6b(0x867)+'itle\x20'+_0x4ccb6b(0x3ec)+'g{fon'+'t-siz'+'e:13p'+'x;fon'+'t-wei'+'ght:6'+_0x4ccb6b(0x76e)+'lor:r'+_0x4ccb6b(0xe9)+_0x4ccb6b(0x39f)+_0x4ccb6b(0x86a)+',.45)'+';}')+('.sk-c'+_0x4ccb6b(0xadc)+_0x4ccb6b(0x135)+'-card'+'-titl'+'e\x20str'+_0x4ccb6b(0x315)+'olor:'+'#fff0'+_0x4ccb6b(0x5ab))+(_0x4ccb6b(0x1b0)+'body{'+_0x4ccb6b(0x448)+_0x4ccb6b(0x296)+'12px\x20'+_0x4ccb6b(0x618)+'}'),_0x4ccb6b(0x1b0)+'desc{'+_0x4ccb6b(0x558)+_0x4ccb6b(0x1c7)+'11px;'+'opaci'+'ty:.4'+_0x4ccb6b(0x5ee)+_0x4ccb6b(0xaf6)+'ttom:'+'6px;w'+_0x4ccb6b(0x5d8)+_0x4ccb6b(0x755)+_0x4ccb6b(0x54a)+'wrap;'+'}')+(_0x4ccb6b(0x232)+'tl{di'+'splay'+_0x4ccb6b(0x6ea)+_0x4ccb6b(0x88f)+'n-ite'+_0x4ccb6b(0x238)+_0x4ccb6b(0xb32)+_0x4ccb6b(0x8fd)+_0x4ccb6b(0x9b9)+'dding'+_0x4ccb6b(0x368)+'0;fon'+'t-siz'+'e:11.'+_0x4ccb6b(0x626))+(_0x4ccb6b(0x90a)+_0x4ccb6b(0x32b)+_0x4ccb6b(0x8d5)+_0x4ccb6b(0x6ef)+_0x4ccb6b(0x1f2)+'ba(24'+_0x4ccb6b(0x59b)+',242,'+_0x4ccb6b(0x587)+'}')+_0x616644[_0x4ccb6b(0x4e2)]+_0x616644[_0x4ccb6b(0x452)]+(_0x4ccb6b(0xa80)+'witch'+_0x4ccb6b(0xa1e)+_0x4ccb6b(0x364)+'ntent'+_0x4ccb6b(0xa9e)+_0x4ccb6b(0x48c)+'on:ab'+'solut'+'e;top'+':3px;'+_0x4ccb6b(0x394)+_0x4ccb6b(0x6d0)+_0x4ccb6b(0x102)+'8px;h'+_0x4ccb6b(0x59d)+':8px;'+_0x4ccb6b(0x602)+'r-rad'+_0x4ccb6b(0x52e)+'0%;'),_0x4ccb6b(0x7db)+_0x4ccb6b(0x799)+_0x4ccb6b(0x777)+'(255,'+_0x4ccb6b(0x500)+_0x4ccb6b(0x449)+_0x4ccb6b(0x82d)+'ansit'+_0x4ccb6b(0x409)+_0x4ccb6b(0xa99)+'2s,ba'+_0x4ccb6b(0x9fd)+_0x4ccb6b(0x40b)+'2s;}'),'.sk-s'+'witch'+_0x4ccb6b(0x9de)+_0x4ccb6b(0x46b)+_0x4ccb6b(0x8da)+_0x4ccb6b(0x525)+']{bac'+_0x4ccb6b(0x163)+_0x4ccb6b(0x670)+_0x4ccb6b(0x824)+_0x4ccb6b(0x9fb)+_0x4ccb6b(0x6b1)+_0x4ccb6b(0x851)+'}')+_0x616644[_0x4ccb6b(0x904)],_0x4ccb6b(0xad)+'ange{'+_0x4ccb6b(0x95a)+'ay:fl'+_0x4ccb6b(0x729)+_0x4ccb6b(0x662)+'tems:'+_0x4ccb6b(0x75e)+_0x4ccb6b(0x332)+':8px;'+'}'),_0x616644[_0x4ccb6b(0x21b)])+_0x616644[_0x4ccb6b(0xa6e)]+('backg'+'round'+_0x4ccb6b(0x183)+_0x4ccb6b(0xab3)+_0x4ccb6b(0x7bb)+'t(#ff'+_0x4ccb6b(0x489)+_0x4ccb6b(0x9a9)+'9d)\x200'+_0x4ccb6b(0x379)+_0x4ccb6b(0x437)+_0x4ccb6b(0x90d)+_0x4ccb6b(0x311)+'0%\x20no'+'-repe'+'at,rg'+_0x4ccb6b(0x824)+'5,255'+_0x4ccb6b(0x1f4)+_0x4ccb6b(0x2d8)+'}'),'.sk-s'+'lider'+_0x4ccb6b(0x64c)+_0x4ccb6b(0xad2)+'slide'+'r-thu'+'mb{-w'+_0x4ccb6b(0x4a1)+'-appe'+'aranc'+_0x4ccb6b(0xa85)+_0x4ccb6b(0x58a)+'th:6p'+'x;hei'+'ght:6'+'px;ma'+'rgin-'+'top:-'+'2px;b'+_0x4ccb6b(0x224)+_0x4ccb6b(0x36a)+'us:50'+_0x4ccb6b(0x181)+'kgrou'+'nd:#f'+_0x4ccb6b(0x633)+';}')+(_0x4ccb6b(0x554)+_0x4ccb6b(0x37d)+'nt-si'+'ze:11'+'px;fo'+_0x4ccb6b(0x99c)+_0x4ccb6b(0x444)+_0x4ccb6b(0xaf2)+'in-wi'+'dth:3'+'4px;t'+_0x4ccb6b(0xac1)+_0x4ccb6b(0x9cf)+'right'+_0x4ccb6b(0x20d)+'r:rgb'+'a(246'+',238,'+_0x4ccb6b(0x20b)+'8);}')+(_0x4ccb6b(0xaeb)+_0x4ccb6b(0xa60)+'ont-s'+_0x4ccb6b(0x946)+'1px;c'+'olor:'+_0x4ccb6b(0x22b)+_0x4ccb6b(0xac)+'38,24'+'2,.5)'+_0x4ccb6b(0x5e2)+_0x4ccb6b(0x31a)+_0x4ccb6b(0x33d)+_0x4ccb6b(0x42b)+_0x4ccb6b(0x9f6)+_0x4ccb6b(0x677)+'-wrap'+';}')+_0x616644[_0x4ccb6b(0x537)]+('.sk-b'+_0x4ccb6b(0xf8)+_0x4ccb6b(0x924)+'elf:f'+_0x4ccb6b(0x2dd)+'tart;'+'borde'+'r:0;b'+_0x4ccb6b(0x224)+_0x4ccb6b(0x36a)+_0x4ccb6b(0x442)+_0x4ccb6b(0x70c)+'ding:'+_0x4ccb6b(0x468)+_0x4ccb6b(0x957)+'ackgr'+_0x4ccb6b(0xa81)+'#ff6b'+_0x4ccb6b(0x94a)+'lor:#'+'fff;')+_0x616644['VFxju']+_0x616644[_0x4ccb6b(0xd8)],'.sk-p'+_0x4ccb6b(0x81b)+'nt:11'+'px/1.'+_0x4ccb6b(0x61f)+_0x4ccb6b(0x7a0)+_0x4ccb6b(0x825)+_0x4ccb6b(0x8dc)+_0x4ccb6b(0x29f)+'onosp'+'ace;w'+'hite-'+_0x4ccb6b(0x755)+':pre-'+'wrap;'+_0x4ccb6b(0xa83)+_0x4ccb6b(0xa75)+':brea'+_0x4ccb6b(0x285)+_0x4ccb6b(0x30d)+'gin:0'+';opac'+'ity:.'+_0x4ccb6b(0x8e2)+'x-hei'+_0x4ccb6b(0x596)+_0x4ccb6b(0x3df)+_0x4ccb6b(0x79e)+_0x4ccb6b(0xe1)+'uto;}'),_0x616644[_0x4ccb6b(0x459)])+_0x616644['Oleis'],_0x3878c0=_0x616644[_0x4ccb6b(0x217)]('<svg\x20'+'viewB'+_0x4ccb6b(0x93f)+_0x4ccb6b(0x460)+_0x4ccb6b(0xa19)+'<path'+_0x4ccb6b(0x830)+'12\x2021'+_0x4ccb6b(0x711)+'-2.5-'+_0x4ccb6b(0xa3c)+'-4-7.'+_0x4ccb6b(0x781)+_0x4ccb6b(0x4fd)+_0x4ccb6b(0x880)+_0x4ccb6b(0x7f5)+'5s4\x202'+_0x4ccb6b(0x5ea)+'5c0\x203'+_0x4ccb6b(0x654)+_0x4ccb6b(0x862)+'.5z\x22\x20',_0x4ccb6b(0x923)+_0x4ccb6b(0x694)+_0x4ccb6b(0xac6)+'oke=\x22'+_0x4ccb6b(0x9a9)+_0x4ccb6b(0x83c)+_0x4ccb6b(0x363)+'-widt'+_0x4ccb6b(0x7e0)+_0x4ccb6b(0x32c)+'ke-li'+'necap'+_0x4ccb6b(0x438)+_0x4ccb6b(0x2eb)+_0x4ccb6b(0x363)+'-line'+'join='+_0x4ccb6b(0xad7)+'d\x22/>')+_0x616644['dSaxm'],_0x568067=_0x4ccb6b(0x340)+'class'+'=\x22mn-'+'logo-'+_0x4ccb6b(0x59f)+_0x4ccb6b(0x954)+_0x4ccb6b(0x93f)+'\x200\x2024'+_0x4ccb6b(0xa19)+'<path'+'\x20d=\x22M'+_0x4ccb6b(0x996)+'c-1.5'+'-2.5-'+'4-4.5'+'-4-7.'+_0x4ccb6b(0x781)+'.5\x201.'+'8-4.5'+_0x4ccb6b(0x7f5)+_0x4ccb6b(0x3c3)+_0x4ccb6b(0x5ea)+'5c0\x203'+'-2.5\x20'+_0x4ccb6b(0x862)+'.5z\x22\x20'+(_0x4ccb6b(0x923)+_0x4ccb6b(0x694)+'\x22\x20str'+_0x4ccb6b(0x2e8)+_0x4ccb6b(0x9a9)+_0x4ccb6b(0x83c)+'troke'+'-widt'+'h=\x221.'+'6\x22\x20st'+_0x4ccb6b(0x899)+'linec'+'ap=\x22r'+_0x4ccb6b(0x3a9)+_0x4ccb6b(0x32c)+_0x4ccb6b(0x1df)+'nejoi'+_0x4ccb6b(0x3ac)+'und\x22/'+'>')+(_0x4ccb6b(0x1e4)+_0x4ccb6b(0x1b7)+_0x4ccb6b(0x3cd)+_0x4ccb6b(0xae2)+'10\x22\x20r'+_0x4ccb6b(0x6c9)+_0x4ccb6b(0x4ba)+'l=\x22#f'+_0x4ccb6b(0x633)+_0x4ccb6b(0x407)+_0x4ccb6b(0x1db));function _0x3b2bc6(_0x3d79fb,_0x1b1d5b,_0x3d4ea0){var _0x588bd4=_0x4ccb6b,_0x33e7bf=document[_0x588bd4(0x995)+'eElem'+_0x588bd4(0x89b)](_0x3d79fb);if(_0x1b1d5b)_0x33e7bf[_0x588bd4(0x266)+'Name']=_0x1b1d5b;if(_0x3d4ea0!=null)_0x33e7bf[_0x588bd4(0x1b9)+'HTML']=_0x3d4ea0;return _0x33e7bf;}function _0x20f6fd(_0x2632cd,_0x25d6a2){var _0x2d4f4a=_0x4ccb6b,_0x32bfca=_0x3b2bc6(_0x616644['jxUPC'],_0x616644['OiakF'](_0x616644['UbkyQ'],_0x25d6a2?_0x616644[_0x2d4f4a(0x6e1)]:'')),_0x20519b=_0x3b2bc6(_0x2d4f4a(0x8bd),_0x2d4f4a(0x868)+'rd-he'+'ad'),_0x24be03=_0x3b2bc6('div',_0x2d4f4a(0x868)+_0x2d4f4a(0x22d)+_0x2d4f4a(0x31d),_0x616644['sBZsR'](_0x616644['wSUIo'](_0x2d4f4a(0x393)+_0x2d4f4a(0x175),_0x2632cd),'</str'+_0x2d4f4a(0xa8c)));_0x20519b['appen'+_0x2d4f4a(0x813)+'d'](_0x24be03);var _0x37c11c=_0x616644['GqhLD'](_0x3b2bc6,_0x616644[_0x2d4f4a(0x404)],_0x616644[_0x2d4f4a(0xfd)]);return _0x32bfca['appen'+'dChil'+'d'](_0x20519b),_0x32bfca[_0x2d4f4a(0x49f)+'dChil'+'d'](_0x37c11c),_0x32bfca['body']=_0x37c11c,_0x32bfca[_0x2d4f4a(0x568)]=_0x24be03,_0x32bfca;}function _0xe5d3c7(_0xf98f9d,_0x47b86b){var _0x2e0c17=_0x4ccb6b,_0x2e73e8={'ZyDxx':_0x2e0c17(0x268)+'s','EXdYI':_0x616644[_0x2e0c17(0x9a3)],'mvBwq':function(_0xa924d2,_0x1a09b1){var _0x9846bf=_0x2e0c17;return _0x616644[_0x9846bf(0x435)](_0xa924d2,_0x1a09b1);},'SfmyQ':function(_0x1c90ab){return _0x1c90ab();},'OOMfr':_0x2e0c17(0x205),'ZsxpH':function(_0x28ba02,_0x37abe3){var _0xa52804=_0x2e0c17;return _0x616644[_0xa52804(0x5e1)](_0x28ba02,_0x37abe3);},'fbzzc':function(_0x293522){return _0x293522();}};if(_0x616644[_0x2e0c17(0x289)]===_0x2e0c17(0x641)){if(_0xd8e386&&typeof _0x21b664['then']===_0x616644[_0x2e0c17(0x2ac)])_0x4f2296['then'](_0x283416,function(){});else _0x4cde88(_0xe44609);}else{var _0x5b20d3=_0x616644[_0x2e0c17(0x58c)](_0x3b2bc6,'butto'+'n',_0x616644['tkryq']);_0x5b20d3[_0x2e0c17(0x109)]=_0x2e0c17(0x42e)+'n';var _0x4979af=function(){var _0x5f054f=_0x2e0c17;if(_0x2e73e8[_0x5f054f(0xa84)](_0x5f054f(0xa4b),'xClru'))_0x5b20d3['setAt'+_0x5f054f(0x57a)+'te'](_0x5f054f(0x66f)+'check'+'ed',_0x2e73e8[_0x5f054f(0x5ff)](_0xf98f9d)?_0x5f054f(0x220):_0x5f054f(0x467));else{if(_0x4383e7)return _0x1fad10;try{if(!_0x3d241b['body']||!_0x3025aa['body'][_0x5f054f(0x49f)+'dChil'+'d'])return null;var _0x344033=_0x3260bc[_0x5f054f(0x995)+_0x5f054f(0x6a5)+_0x5f054f(0x89b)](_0x2e73e8[_0x5f054f(0x234)]);return _0x344033['id']=_0x2e73e8['EXdYI'],_0x344033[_0x5f054f(0x28c)][_0x5f054f(0x4bb)+'xt']='posit'+'ion:f'+'ixed;'+'left:'+_0x5f054f(0x3d1)+_0x5f054f(0x30a)+_0x5f054f(0x820)+_0x5f054f(0xa7d)+'48364'+_0x5f054f(0x653)+_0x5f054f(0x710)+_0x5f054f(0x9d1)+_0x5f054f(0x81c)+'e;',_0x400af9['body']['appen'+'dChil'+'d'](_0x344033),_0x43d588={'cv':_0x344033},_0x51ba66;}catch(_0x33dd3e){return null;}}};return _0x5b20d3['oncli'+'ck']=function(){var _0x4eb173=_0x2e0c17,_0x3a5f59={'dlSWC':_0x4eb173(0x445)+_0x4eb173(0x5f6)};if(_0x2e73e8['OOMfr']!=='XDqHC')_0x2e73e8[_0x4eb173(0x209)](_0x47b86b,!_0x2e73e8[_0x4eb173(0x9b6)](_0xf98f9d)),_0x4979af();else{var _0x1c9a7f=(_0x4eb173(0x532)+_0x4eb173(0x4e4)+_0x4eb173(0x72b))[_0x4eb173(0xad1)]('|'),_0x3baba6=0xea7*-0x2+0x246c+-0x2*0x38f;while(!![]){switch(_0x1c9a7f[_0x3baba6++]){case'0':_0x2989ac[_0x4eb173(0x5eb)]=_0xf4784a;continue;case'1':var _0x2989ac=_0x9d4a22[_0x4eb173(0x995)+_0x4eb173(0x6a5)+_0x4eb173(0x89b)](_0x3a5f59[_0x4eb173(0x7c9)]);continue;case'2':_0x38d257[_0x4eb173(0x388)][_0x4eb173(0x49f)+_0x4eb173(0x813)+'d'](_0x2989ac);continue;case'3':_0x2989ac[_0x4eb173(0x61c)+'e']();continue;case'4':_0x2989ac[_0x4eb173(0x1a4)+'t']();continue;case'5':if(!_0x24ed1f[_0x4eb173(0x388)])return;continue;case'6':try{_0x122a6c[_0x4eb173(0x387)+_0x4eb173(0x300)+'d']('copy'),_0x3451a2();}catch(_0x2dbe60){}continue;}break;}}},_0x4979af(),_0x5b20d3['sync']=_0x4979af,_0x2cf7d2['syncs']['push'](_0x4979af),_0x5b20d3;}}function _0x47a79b(_0xeab9b7,_0x1c9d78,_0x59c138,_0x3c2d14,_0x3a8fcb){var _0x296fee=_0x4ccb6b,_0x5e2cfd={'ngLvf':function(_0x20df6c,_0x4d19fa){return _0x616644['fSDYR'](_0x20df6c,_0x4d19fa);},'brUyA':function(_0x3bdea0){return _0x3bdea0();}},_0x4ce14a=_0x3b2bc6(_0x296fee(0x8bd),_0x616644[_0x296fee(0xa27)]),_0x370d70=document['creat'+'eElem'+'ent']('input');_0x370d70['type']=_0x296fee(0x91f),_0x370d70['class'+_0x296fee(0x1a9)]=_0x616644['zsoEj'],_0x370d70[_0x296fee(0x681)]=_0x616644[_0x296fee(0x60d)](String,_0xeab9b7),_0x370d70['max']=_0x616644[_0x296fee(0x28b)](String,_0x1c9d78),_0x370d70['step']=String(_0x59c138);var _0x4c52c5=_0x3b2bc6(_0x616644[_0x296fee(0xa12)],_0x296fee(0x430)+'l'),_0x2af357=function(){var _0x10b6ec=_0x296fee,_0x461ca8=(_0x10b6ec(0x3ed)+_0x10b6ec(0x485))['split']('|'),_0x3f340f=-0x1e12+-0x3*-0xa73+0x3*-0x6d;while(!![]){switch(_0x461ca8[_0x3f340f++]){case'0':_0x370d70[_0x10b6ec(0x28c)][_0x10b6ec(0xf6)+'opert'+'y'](_0x616644[_0x10b6ec(0x453)],_0x616644['HADwf'](_0x513227,'%'));continue;case'1':var _0x513227=_0x616644[_0x10b6ec(0x989)](_0x616644[_0x10b6ec(0x804)](_0x7bb05-_0xeab9b7,_0x1c9d78-_0xeab9b7),0x18b9+-0x6d9*-0x1+-0x1f2e);continue;case'2':_0x4c52c5[_0x10b6ec(0xc9)+_0x10b6ec(0x4e9)+'t']=(_0x59c138<0x161b+-0x2433*-0x1+0x3a4d*-0x1?_0x7bb05[_0x10b6ec(0x186)+'ed'](0x454+-0x9c1+0x56e):_0x616644[_0x10b6ec(0x7ea)](String,Math[_0x10b6ec(0x799)](_0x7bb05)))+(_0x370d70['datas'+'et']['unit']||'');continue;case'3':_0x370d70['value']=String(_0x7bb05);continue;case'4':var _0x7bb05=_0x616644[_0x10b6ec(0x9e9)](_0x3c2d14);continue;}break;}};return _0x370d70[_0x296fee(0xad0)+'ut']=function(){var _0x1990e3=_0x296fee;_0x5e2cfd['ngLvf'](_0x3a8fcb,parseFloat(_0x370d70['value'])||_0xeab9b7),_0x5e2cfd[_0x1990e3(0x26d)](_0x2af357);},_0x4ce14a[_0x296fee(0x49f)+_0x296fee(0x813)+'d'](_0x370d70),_0x4ce14a[_0x296fee(0x49f)+'dChil'+'d'](_0x4c52c5),_0x4ce14a[_0x296fee(0x540)]=_0x2af357,_0x4ce14a[_0x296fee(0x2e6)]=_0x370d70,_0x2af357(),_0x2cf7d2[_0x296fee(0x5bc)]['push'](_0x2af357),_0x4ce14a;}function _0x592bb1(_0x14acaf,_0x9db07f){var _0x4be8d4=_0x4ccb6b,_0x2ff0fb=_0x3b2bc6(_0x616644['jxUPC'],_0x4be8d4(0x304)+'l'),_0x1e94b7=_0x616644[_0x4be8d4(0x331)](_0x3b2bc6,_0x4be8d4(0x8bd),_0x4be8d4(0x676)+_0x4be8d4(0x9af),_0x616644[_0x4be8d4(0x143)](_0x14acaf,_0x9db07f?_0x616644[_0x4be8d4(0x3f7)](_0x4be8d4(0x8db)+_0x4be8d4(0x8de)+_0x4be8d4(0x2bd)+'-hint'+'\x27>'+_0x9db07f,_0x4be8d4(0x94e)+'n>'):''));return _0x2ff0fb['appen'+'dChil'+'d'](_0x1e94b7),_0x2ff0fb;}function _0x366415(_0x58bed9,_0x456a63,_0x101f7a,_0x4301cd){var _0x3b2789=_0x4ccb6b,_0x8acd49={'Ojcpd':_0x616644[_0x3b2789(0x1bd)]};if('edjPJ'!==_0x616644[_0x3b2789(0x423)])_0x219b3b[_0x3b2789(0xd3)+_0x3b2789(0x92e)]['push'](_0x616644['OcpOz']('Hooks'+_0x3b2789(0x190)+_0x3b2789(0x4c2)+'ed\x20bu'+_0x3b2789(0x72d)+'FPSco'+_0x3b2789(0x259)+'ler\x20h'+_0x3b2789(0x138)+_0x3b2789(0x83a)+'et.\x20',_0x3b2789(0x6fc)+_0x3b2789(0xafc)+'\x20are\x20'+_0x3b2789(0x276)+_0x3b2789(0x8a2)+_0x3b2789(0x985)+'\x20or\x20t'+'he\x20ho'+_0x3b2789(0x1de)+'\x20on\x20t'+_0x3b2789(0x894)+'ong\x20o'+'verlo'+'ad.'));else{var _0x28a890=_0x58bed9&&_0x58bed9[_0x3b2789(0x116)+'y']&&_0x58bed9[_0x3b2789(0x116)+'y'][_0x456a63];if(!_0x28a890)return'-';for(var _0x2b3b37=0x47f*0x5+0x4e5*0x4+-0x2a0f;_0x2b3b37<_0x28a890['lengt'+'h'];_0x2b3b37++){if(_0x616644[_0x3b2789(0x10e)](_0x28a890[_0x2b3b37]['o'],_0x101f7a)){if(_0x616644['GTDbf'](_0x616644[_0x3b2789(0x58d)],_0x3b2789(0x7dd))){if(_0x616644[_0x3b2789(0x3c2)](_0x4301cd,'v3')){var _0x5c24d9=_0x28a890[_0x2b3b37]['xyz']||[_0x28a890[_0x2b3b37]['v'],-0x2031*0x1+-0x1*-0x8c5+0x176c,0x1fc7*0x1+0x1*0xb03+-0x2aca];return _0x5c24d9['map'](function(_0x4cca0c){var _0x3f554a=_0x3b2789,_0x953bb={'HxXlM':function(_0x2e63a1,_0x9aeabc){return _0x2e63a1/_0x9aeabc;},'QzTdY':function(_0x5b3c3b,_0x5a3e10){return _0x5b3c3b*_0x5a3e10;}};if(_0x3f554a(0x1dd)==='aofNj'){var _0x185baa=_0x1f336b[_0x4a1fe5]['xyz']||[_0x1656d5[_0x35030e]['v'],0x331*-0x3+-0x22e8+-0xc1*-0x3b,-0x1567+-0x71*-0x1f+0x7b8];return _0x185baa[_0x3f554a(0x2d4)](function(_0x25a2c6){var _0x4c8958=_0x3f554a;return _0x953bb[_0x4c8958(0x853)](_0x29fb3b[_0x4c8958(0x799)](_0x953bb[_0x4c8958(0x76f)](_0x25a2c6,0x15*0x1db+0xec3+0x2*-0x1aab)),0x3c3+-0x4*-0x6+-0x1*0x377);})[_0x3f554a(0xb2)]('\x20\x20');}else return _0x616644['IZMDn'](Math[_0x3f554a(0x799)](_0x616644[_0x3f554a(0xb06)](_0x4cca0c,-0x2227+-0x2585*-0x1+-0x2fa)),-0x53*0x36+-0xaee+-0x2*-0xe6a);})['join']('\x20\x20');}var _0x265668=_0x28a890[_0x2b3b37]['v'];return typeof _0x265668===_0x616644[_0x3b2789(0x2f3)]?_0x616644['zHLZP'](Math['round'](_0x265668*(0x3fe+0xb28+-0xb3e)),-0x2*-0x1235+-0xe5*0x15+0x3*-0x493):String(_0x265668);}else{var _0x4e786c=_0x18e196['creat'+_0x3b2789(0x6a5)+'ent'](_0x8acd49[_0x3b2789(0x244)]);_0x4e786c['id']=_0x3b2789(0x6f7)+'a-men'+'u-css',_0x4e786c['textC'+_0x3b2789(0x4e9)+'t']=_0x39b03c,(_0x5e0893['head']||_0x312900[_0x3b2789(0x1e3)+_0x3b2789(0x2c6)+_0x3b2789(0x77a)])['appen'+_0x3b2789(0x813)+'d'](_0x4e786c);}}}return'-';}}function _0x9fdd66(_0x3aacee){var _0x49afec=_0x4ccb6b,_0xe6764b={'UpUXW':_0x616644['qMLqj'],'tmlMl':_0x49afec(0x8e7),'afPll':function(_0x26c1d9,_0x42e045,_0x51b883){return _0x616644['GqhLD'](_0x26c1d9,_0x42e045,_0x51b883);},'tMaQP':_0x49afec(0x5c9)+'ds\x20·\x20','ROOFF':function(_0x4fa33e,_0x3f5aac){var _0x16980a=_0x49afec;return _0x616644[_0x16980a(0x4e3)](_0x4fa33e,_0x3f5aac);},'UqXAE':_0x49afec(0x83d),'FiHyT':function(_0x5edad8,_0x42a410,_0x53820a){var _0x22320e=_0x49afec;return _0x616644[_0x22320e(0x51f)](_0x5edad8,_0x42a410,_0x53820a);},'tRggL':function(_0x229069,_0x23f227){return _0x229069+_0x23f227;},'SgcAo':function(_0x3ba87d,_0x2596dc){var _0x42460b=_0x49afec;return _0x616644[_0x42460b(0x201)](_0x3ba87d,_0x2596dc);},'kKsXc':_0x616644['ojUHC'],'xkKbu':function(_0x44924b,_0x54d1c0){var _0x1c0524=_0x49afec;return _0x616644[_0x1c0524(0x204)](_0x44924b,_0x54d1c0);},'DMzbm':function(_0x26c5ba,_0x5d36d8){var _0x31470b=_0x49afec;return _0x616644[_0x31470b(0x119)](_0x26c5ba,_0x5d36d8);},'RWGqq':'yPpWD','cXwNT':function(_0x1c0a35){var _0x22d0ae=_0x49afec;return _0x616644[_0x22d0ae(0x7d0)](_0x1c0a35);},'tECUJ':function(_0xfcbe08,_0x4f90ae){return _0xfcbe08(_0x4f90ae);},'yqEUa':function(_0x26174c,_0x37173d){return _0x26174c*_0x37173d;},'WvbbQ':_0x616644[_0x49afec(0x8cd)],'TttkH':_0x49afec(0x3a5),'HfSJw':_0x616644[_0x49afec(0x574)]};if(_0x616644['NZGfZ'](_0x616644[_0x49afec(0xa1c)],_0x616644['POhZv'])){var _0x4118ab=_0x4b2daf,_0x590d33=[],_0x3fc4c2;if(_0x616644[_0x49afec(0x253)](_0x3aacee,_0x49afec(0x7a5)+'t')){var _0x39b22f=_0x20f6fd(_0x616644['wtVvr'],_0x5ecc68['on']),_0x3faa73=_0x3b2bc6(_0x49afec(0x8bd),_0x616644['mBIye'],_0x5ecc68['on']?_0x616644[_0x49afec(0xacd)](_0x616644[_0x49afec(0x73c)](_0x616644[_0x49afec(0x2b3)]('x',_0x5ecc68[_0x49afec(0x1d8)+'r']['toFix'+'ed'](-0xa*0x2b0+-0xf1+0x1bd2)),_0x616644[_0x49afec(0x3ab)])+_0x4529f1[_0x49afec(0xc4)+'h'],_0x616644['GMTqM'])+_0x207f7e+('\x20writ'+'es'):_0x616644[_0x49afec(0xea)]),_0x110c81=_0x592bb1(_0x49afec(0xad6)+'ed');_0x110c81[_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0xe5d3c7(function(){var _0x5af8dc=_0x49afec;if('Yoeqw'!==_0x5af8dc(0xb27))_0x1e70a0[_0x5af8dc(0x176)+_0x5af8dc(0xa3d)+_0x5af8dc(0x4db)](_0x562361,_0xe6764b[_0x5af8dc(0x146)],{'value':_0x314631[_0x5af8dc(0x2c4)],'configurable':!![]});else return _0x5ecc68['on'];},function(_0xe0ba01){var _0x2d8f14=_0x49afec;if('GlCqo'===_0xe6764b['tmlMl'])_0xe6764b['afPll'](_0x1dda55,_0xe0ba01,_0x5ecc68['facto'+'r']),_0x3faa73[_0x2d8f14(0xc9)+_0x2d8f14(0x4e9)+'t']=_0xe0ba01?'x'+_0x5ecc68[_0x2d8f14(0x1d8)+'r'][_0x2d8f14(0x186)+'ed'](0x29*-0x6a+-0x4e*-0x23+0x651)+'\x20on\x20'+_0x4529f1['lengt'+'h']+_0xe6764b['tMaQP']+_0x207f7e+('\x20writ'+'es'):_0x2d8f14(0x3d0)+_0x2d8f14(0xa40)+_0x2d8f14(0x99a)+_0x2d8f14(0x5f3)+'speed'+_0x2d8f14(0x5c9)+'ds\x20on'+_0x2d8f14(0x196)+_0x2d8f14(0x59d)+_0x2d8f14(0x2bb)+'p\x20and'+_0x2d8f14(0x225)+_0x2d8f14(0x190)+'refus'+'ed.';else{if(_0x490a17['paren'+'t']&&_0x35937c[_0x2d8f14(0x4d4)+'t']!==_0xe91636)_0x41d6b3['paren'+'t'][_0x2d8f14(0x27d)+_0x2d8f14(0x273)+'e'](_0x23a03b,'*');}})),_0x39b22f['body'][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x3faa73),_0x39b22f[_0x49afec(0x388)][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x110c81);var _0x1d7290=_0x47a79b(-0x22d*-0x7+-0x23dd*-0x1+-0x3317,-0x15d*-0x1c+-0x10*-0x1f5+-0x4577,0x1*-0x787+0x649+-0x6a*-0x3+0.5,function(){var _0x5410ce=_0x49afec;if('Arasa'!==_0xe6764b[_0x5410ce(0x705)])_0xe6764b[_0x5410ce(0x4ee)](_0x5911c5,_0x5410ce(0xa38)+_0x5410ce(0x24a));else return _0x5ecc68[_0x5410ce(0x1d8)+'r'];},function(_0x100899){var _0x18d5f3=_0x49afec;_0xe6764b[_0x18d5f3(0x750)](_0x1dda55,_0x5ecc68['on'],_0x100899);});_0x1d7290['input']['datas'+'et']['unit']='x';var _0x1f0c3a=_0x592bb1(_0x616644[_0x49afec(0x2b4)],_0x616644[_0x49afec(0x96b)]);_0x1f0c3a[_0x49afec(0x49f)+'dChil'+'d'](_0x1d7290),_0x39b22f[_0x49afec(0x388)][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x1f0c3a);if(_0x447df4['lengt'+'h']){var _0xc7288=_0x3b2bc6(_0x616644[_0x49afec(0x404)],_0x49afec(0x723)+'te',_0x49afec(0x31b)+'ed:\x20'+_0x447df4['slice'](-0x1667+-0x17*0x29+-0xe*-0x1dd,0x97b+0x224f+-0x2bc6)[_0x49afec(0x2d4)](function(_0x2fcd9d){var _0xc5e216=_0x49afec;return _0xe6764b[_0xc5e216(0x2a5)](_0xe6764b[_0xc5e216(0x2a5)]('0x'+(_0x2fcd9d['o']<-0xeeb+0x5a6*-0x3+0x1fdd?'?':_0x2fcd9d['o'][_0xc5e216(0x834)+_0xc5e216(0x873)](0x348+-0x117*0x15+0x13ab*0x1)),'\x20(')+_0x2fcd9d['why'],')');})[_0x49afec(0xb2)]('\x20\x20'));_0x39b22f[_0x49afec(0x388)][_0x49afec(0x49f)+'dChil'+'d'](_0xc7288);}_0x590d33[_0x49afec(0xb0c)](_0x39b22f);var _0x51ab2f=_0x20f6fd(_0x49afec(0x4a9)+'ngs'),_0x1b25ae=_0x3b2bc6(_0x49afec(0x42e)+'n','sk-bt'+'n',_0x616644[_0x49afec(0x7c8)]);_0x1b25ae[_0x49afec(0x109)]=_0x49afec(0x42e)+'n',_0x1b25ae[_0x49afec(0x3a6)+'ck']=function(){var _0x4d9efd=_0x49afec;_0xe6764b[_0x4d9efd(0x4a6)](_0x2a2547,_0xe6764b[_0x4d9efd(0x19d)]);},_0x51ab2f['body'][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x3b2bc6('div','sk-md'+_0x49afec(0x45c),_0x616644['KEkoz'])),_0x51ab2f['body']['appen'+_0x49afec(0x813)+'d'](_0x1b25ae),_0x590d33['push'](_0x51ab2f);}if(_0x616644[_0x49afec(0x972)](_0x3aacee,_0x616644['IxSYF'])){if(_0x616644[_0x49afec(0xa0a)](_0x616644[_0x49afec(0x324)],_0x616644[_0x49afec(0x188)])){var _0x399d17=_0x616644[_0x49afec(0x973)](_0x20f6fd,_0x49afec(0x302),_0x2b6a93['on']),_0x11fc8e=_0x616644[_0x49afec(0x797)](_0x592bb1,_0x49afec(0xad6)+'ed');_0x11fc8e[_0x49afec(0x49f)+'dChil'+'d'](_0xe5d3c7(function(){return _0x2b6a93['on'];},function(_0x90e6cf){_0x2b6a93['on']=_0x90e6cf,_0x616644['cqyKw'](_0x11c1f7);})),_0x399d17['body'][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x3b2bc6(_0x616644[_0x49afec(0x404)],_0x616644[_0x49afec(0x997)],_0x616644['NPjpf'])),_0x399d17[_0x49afec(0x388)][_0x49afec(0x49f)+'dChil'+'d'](_0x11fc8e);var _0x2c0ead=_0x616644['GPgTP'](_0x47a79b,0x1716+-0x520+-0x11ce,-0x157e+0x1b3*0x11+-0x1*0x6c5,0x34a*0xb+0x1*-0x496+0xfc7*-0x2,function(){var _0x51182b=_0x49afec,_0x1c0a4d={'nUtxt':'none'};if(_0x616644[_0x51182b(0x87d)](_0x51182b(0x23f),_0x616644[_0x51182b(0xb20)])){var _0x266383=_0x51e649;if(_0x266383&&_0x266383['el'])_0x266383['el']['style'][_0x51182b(0x95a)+'ay']=_0x2d7d1b?'':_0x1c0a4d[_0x51182b(0x3d9)];var _0x2e0b67=_0x2e0506;if(_0x2e0b67&&_0x2e0b67['cv'])_0x2e0b67['cv'][_0x51182b(0x28c)]['displ'+'ay']=_0x4ad28c?'':_0x1c0a4d['nUtxt'];}else return _0x2b6a93['span'];},function(_0x26c28c){_0x2b6a93['span']=_0x26c28c;});_0x2c0ead['input']['datas'+'et'][_0x49afec(0x8ca)]='m';var _0x49a04a=_0x592bb1('Range',_0x616644[_0x49afec(0x6ba)]);_0x49a04a[_0x49afec(0x49f)+'dChil'+'d'](_0x2c0ead),_0x399d17['body']['appen'+_0x49afec(0x813)+'d'](_0x49a04a),_0x590d33['push'](_0x399d17);var _0x56051a=_0x20f6fd('Boxes',_0x2b6a93['boxes']),_0x215474=_0x592bb1(_0x49afec(0xad6)+'ed');_0x215474['appen'+_0x49afec(0x813)+'d'](_0xe5d3c7(function(){return _0x2b6a93['boxes'];},function(_0x39a9b2){var _0x3a9c16=_0x49afec;_0x2b6a93[_0x3a9c16(0x64a)]=_0x39a9b2,_0x2b6a93['on']=!![],_0x11c1f7();}));var _0xf4d57b=_0x4118ab&&_0x4118ab['angle'+'s'];_0x56051a[_0x49afec(0x388)]['appen'+'dChil'+'d'](_0x3b2bc6('div',_0x616644[_0x49afec(0x997)],_0xf4d57b&&!_0xf4d57b['ident'+_0x49afec(0x9df)]?_0x616644['EpAUr'](_0x49afec(0xa23)+'rawin'+_0x49afec(0x4c9),_0xf4d57b[_0x49afec(0x7f2)]||_0x616644['tjcxo'])+_0x616644['IkGoq']:_0xf4d57b&&!_0xf4d57b[_0x49afec(0x480)+'ne']?_0x616644[_0x49afec(0x3a0)](_0x616644[_0x49afec(0xa6)]+Math[_0x49afec(0x799)](_0xf4d57b[_0x49afec(0x11d)]),_0x616644['lTQve']):'Scree'+_0x49afec(0x342)+_0x49afec(0x272)+'xes.\x20'+'The\x20f'+_0x49afec(0x3e6)+_0x49afec(0xa51)+'ew\x20ca'+_0x49afec(0x71b)+_0x49afec(0x739)+_0x49afec(0x1ea)+_0x49afec(0x82b)+_0x49afec(0x9a6)+'ild,\x20'+'so\x20it'+_0x49afec(0x523)+'itted'+_0x49afec(0x8c2)+_0x49afec(0x5b5))),_0x56051a[_0x49afec(0x388)][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x215474);var _0x272b0f=_0x47a79b(0x1bc1*0x1+0x23ab+-0x1510*0x3,-0x216*-0xe+0xd5*0x22+-0x824*0x7,-0x181a*0x1+-0x2*0x945+-0xce*-0x35,function(){var _0x511520=_0x49afec;if(_0x616644[_0x511520(0xaaf)](_0x511520(0x68d),_0x616644['HjkgJ'])){var _0x56ccc1=_0x289093[_0x511520(0x87a)](0x1401*0x1+-0x1*0x1249+-0x1b8,-0x83*-0x3f+-0x2206+0x1*0x2f5);if(_0xe6764b[_0x511520(0x4ed)](_0x5f2e4a[_0x511520(0x820)+'Of'](_0x56ccc1),-(0x4*0x724+-0x524+-0x176b))&&_0x1f3ef0[_0x511520(0xc4)+'h']<0x5*-0x69b+-0xfdf+-0x26*-0x14b)_0x55fda6[_0x511520(0xb0c)](_0x56ccc1);}else return _0x299fc0[_0x511520(0x11d)];},function(_0x411e00){var _0x229f97=_0x49afec;_0x299fc0[_0x229f97(0x11d)]=_0x411e00,_0x4509fb();});_0x272b0f['input'][_0x49afec(0x52b)+'et'][_0x49afec(0x8ca)]='°';var _0x57f998=_0x592bb1(_0x616644['wHnBc'],_0x616644[_0x49afec(0xaa9)]);_0x57f998[_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x272b0f);var _0x399ee0=_0x616644['UaKno'](_0x592bb1,'Reset'+'\x20view',_0x49afec(0x3d6)+_0x49afec(0x399)+_0x49afec(0x229)+'\x20offs'+'ets\x20c'+'lear'),_0x1c7050=_0x3b2bc6(_0x49afec(0x42e)+'n',_0x616644['yFFDM'],_0x49afec(0x841));_0x1c7050[_0x49afec(0x33b)+_0x49afec(0x959)+'stene'+'r'](_0x616644[_0x49afec(0xaea)],function(){var _0x55ef36=_0x49afec;_0xe6764b[_0x55ef36(0x443)](_0x55ef36(0x2d2),_0xe6764b[_0x55ef36(0xba)])?_0x7e4465[_0x55ef36(0xac4)+'em'](_0x4e6394,_0x3b6548[_0x55ef36(0x89c)+'gify'](_0x5ec951[_0x55ef36(0x2b2)])):(_0x299fc0[_0x55ef36(0x11d)]=-0x167*0xf+-0x9d*0x12+0x205e,_0x299fc0['pitch'+_0x55ef36(0x10b)]=-0x1043*0x1+0x2e7+0xd5c,_0x299fc0[_0x55ef36(0x658)+'f']=-0x1a51*-0x1+0x286*-0x2+-0x1ef*0xb,_0xe6764b['cXwNT'](_0x4509fb),_0xe6764b[_0x55ef36(0x965)](_0x282db7,_0x2cf7d2['cat']));}),_0x399ee0[_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x1c7050),_0x56051a['body'][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x57f998),_0x56051a['body'][_0x49afec(0x49f)+'dChil'+'d'](_0x399ee0);var _0x56c52b=_0x4118ab&&_0x4118ab[_0x49afec(0x812)];_0x56051a[_0x49afec(0x388)][_0x49afec(0x49f)+'dChil'+'d'](_0x3b2bc6('div',_0x616644['OpHcq'],'view:'+'\x20'+(_0x56c52b?_0x56c52b[_0x49afec(0x45a)+_0x49afec(0x9d2)]?_0x616644[_0x49afec(0x2ad)]('Mouse'+'Look\x20',_0x56c52b['mouse'+'Look'])+(_0x56c52b[_0x49afec(0x463)+'a']?_0x616644['NNgcf']('\x20\x20cam'+_0x49afec(0x136),_0x56c52b[_0x49afec(0x463)+'a']):''):'no\x20Mo'+_0x49afec(0x809)+_0x49afec(0x4d9)+'t':_0x616644['BnKMD'])+(_0xf4d57b?_0x616644[_0x49afec(0x166)]+(_0xf4d57b[_0x49afec(0x87b)+'tch']===null?'-':Math[_0x49afec(0x799)](_0xf4d57b['rawPi'+_0x49afec(0x547)]))+('\x20\x200x1'+'C=')+(_0xf4d57b[_0x49afec(0x2a0)+'w']===null?'-':Math[_0x49afec(0x799)](_0xf4d57b['rawYa'+'w']))+(_0xf4d57b[_0x49afec(0x4d3)+_0x49afec(0x9df)]?_0x49afec(0xc3)+'cepte'+'d\x20as\x20'+'pitch'+_0x49afec(0x947):_0x616644[_0x49afec(0x381)]):'')+(_0x299fc0['pitch'+'Off']||_0x299fc0[_0x49afec(0x658)+'f']?_0x616644[_0x49afec(0x3a4)](_0x616644[_0x49afec(0x73c)]('\x0apitc'+'h\x20',Math[_0x49afec(0x799)](_0x299fc0[_0x49afec(0x5e7)+_0x49afec(0x10b)]))+(_0x49afec(0xa95)+'\x20'),Math[_0x49afec(0x799)](_0x299fc0[_0x49afec(0x658)+'f'])):''))),_0x590d33[_0x49afec(0xb0c)](_0x56051a);}else{var _0x4aa0fe=(_0x49afec(0x838)+_0x49afec(0x65a)+'|8|15'+_0x49afec(0x203)+_0x49afec(0x4c1)+_0x49afec(0x9c6)+'|0|7|'+'14')['split']('|'),_0x3c58c4=0x9f0+0x212a+-0x2b1a;while(!![]){switch(_0x4aa0fe[_0x3c58c4++]){case'0':_0xbf2adc['pitch']=_0x458271+_0x202220['pitch'+_0x49afec(0x10b)];continue;case'1':if(_0x458271<-(0x119c+-0x4*0x7be+0x492*0x3)||_0x458271>-0xe5*0x1d+-0x194e+0x3399*0x1)_0x4da820['push'](_0x616644[_0x49afec(0xaab)](_0x616644[_0x49afec(0x61e)](_0x49afec(0x6f3),_0x2d3507[_0x49afec(0x799)](_0x458271)),'\x20is\x20n'+'ot\x20a\x20'+_0x49afec(0x5e7)));continue;case'2':_0x5e7369[_0x49afec(0x32a)]=_0x557f4f;continue;case'3':_0x5042f0[_0x49afec(0x4d3)+_0x49afec(0x9df)]=!![];continue;case'4':var _0x458271=_0x511275(_0x616644[_0x49afec(0x4f8)](_0x3fced1,-0x254c+-0x1*-0xd02+0x1862),_0x49afec(0x893));continue;case'5':_0x5c1eae['pitch']=_0x458271;continue;case'6':_0x482f01[_0x49afec(0x7f2)]=_0x4da820[_0x49afec(0xc4)+'h']?_0x4da820[_0x49afec(0xb2)](';\x20'):'';continue;case'7':_0x35670c[_0x49afec(0x32a)]=_0x557f4f+_0x583e9d[_0x49afec(0x658)+'f'];continue;case'8':var _0x557f4f=_0x5265c7(_0x616644[_0x49afec(0x120)](_0x3fced1,-0x2541+0x840+0x1d*0x101),_0x616644['PQHmr']);continue;case'9':var _0x4da820=[];continue;case'10':if(!_0x430204||!_0x430204['mouse'+_0x49afec(0x9d2)])return _0x1ea12['ident'+_0x49afec(0x9df)]=![],_0x247f75[_0x49afec(0x7f2)]=_0x616644[_0x49afec(0x840)],null;continue;case'11':var _0x3fced1=_0x616644['gBCXW'](_0x41a96f,_0x430204['mouse'+_0x49afec(0x9d2)],0x477*-0x5+0x12aa*0x1+0x3b9);continue;case'12':if(_0x4da820[_0x49afec(0xc4)+'h'])return _0x3ebe0a[_0x49afec(0x4d3)+_0x49afec(0x9df)]=![],null;continue;case'13':var _0x430204=_0xcda750();continue;case'14':return _0x3721e3;case'15':if(typeof _0x458271!=='numbe'+'r'||typeof _0x557f4f!==_0x616644['zKtxq']||!_0x616644[_0x49afec(0xabb)](_0x394aae,_0x458271)||!_0x616644[_0x49afec(0x917)](_0x2789d2,_0x557f4f))return _0x27178e[_0x49afec(0x4d3)+_0x49afec(0x9df)]=![],_0x715752['why']=_0x49afec(0x7a7)+_0x49afec(0x759)+_0x49afec(0x956)+_0x49afec(0x2a3)+_0x49afec(0x2ba)+'le',null;continue;}break;}}}if(_0x616644['yWkQz'](_0x3aacee,'value'+'s')){var _0xa8a79a=[[_0x616644[_0x49afec(0x96c)],_0x616644['nAvOl'],_0x4118ab?_0x4118ab[_0x49afec(0x2b8)+'on']:'-'],[_0x616644['OafHD'],_0x616644[_0x49afec(0x7f3)],_0x4118ab?_0x4118ab[_0x49afec(0x940)+_0x49afec(0x1cc)+'ed']+_0x616644['ivoJv']+_0x4118ab['hooks'+_0x49afec(0x521)+_0x49afec(0x38d)+'AtArm']:'-'],[_0x49afec(0x3f8),_0x616644[_0x49afec(0x8f7)],_0x4118ab&&_0x4118ab[_0x49afec(0xa7)+'emory']&&_0x4118ab[_0x49afec(0xa7)+_0x49afec(0xef)]['captu'+'red']?_0x616644['zgTAw'](_0x616644['KbKQT'](Math[_0x49afec(0x799)](_0x616644[_0x49afec(0x772)](_0x4118ab['wasmM'+_0x49afec(0xef)]['bytes'],0x17d123+0x9ffaf*-0x3+0xb16f5*0x2)),_0x49afec(0x892)+'\x20'),_0x4118ab['wasmM'+'emory'][_0x49afec(0xa03)])+'ms':'-'],[_0x49afec(0x783)+'rs',_0x616644['hWeKi'],_0x4118ab&&_0x4118ab['esp']?String(_0x4118ab[_0x49afec(0x94f)][_0x49afec(0xaff)+_0x49afec(0x490)+'t']):'-'],['Enemi'+'es',_0x616644['PqSIx'],_0x4118ab&&_0x4118ab[_0x49afec(0x94f)]?_0x616644[_0x49afec(0x752)](String,_0x4118ab[_0x49afec(0x94f)]['enemy'+'Count']):'-'],['Camer'+'a','off\x20t'+_0x49afec(0x46f)+_0x49afec(0x6e5)+'nager',_0x4118ab&&_0x4118ab[_0x49afec(0x94f)]&&_0x4118ab['esp'][_0x49afec(0x463)+'a']?_0x4118ab['esp']['camer'+'a']+'\x20('+_0x4118ab['esp'][_0x49afec(0x463)+'aFrom']+')':'-']];for(_0x3fc4c2=0x1*-0x1661+0x455*-0x2+0xa59*0x3;_0x3fc4c2<_0xa8a79a[_0x49afec(0xc4)+'h'];_0x3fc4c2++){var _0x5729a6=_0x592bb1(_0xa8a79a[_0x3fc4c2][-0x7b5*0x4+0xaa6*0x1+0x142e]),_0x59f672=_0x3b2bc6(_0x616644[_0x49afec(0xa12)],_0x49afec(0x430)+'l');_0x59f672[_0x49afec(0x28c)][_0x49afec(0x3e4)+'dth']='0',_0x59f672[_0x49afec(0x28c)][_0x49afec(0x3bf)]='1',_0x59f672[_0x49afec(0x28c)][_0x49afec(0x12f)+'lign']=_0x616644[_0x49afec(0x328)],_0x59f672[_0x49afec(0xc9)+_0x49afec(0x4e9)+'t']=_0x616644[_0x49afec(0x917)](String,_0xa8a79a[_0x3fc4c2][0x198*-0x1+-0x3*-0xa76+-0x1dc8]),_0x59f672[_0x49afec(0x52b)+'et']['k']=_0xa8a79a[_0x3fc4c2][0x1981*0x1+-0x8fd+-0x1083],_0x5729a6[_0x49afec(0x49f)+'dChil'+'d'](_0x59f672);var _0x428179=_0x590d33[_0x49afec(0xc4)+'h']?_0x590d33[_0x590d33[_0x49afec(0xc4)+'h']-(-0x2f4+0x31b+-0x26)]:null;!_0x428179&&(_0x428179=_0x20f6fd(_0x49afec(0x3af)+'on',![]),_0x590d33[_0x49afec(0xb0c)](_0x428179)),_0x428179['body'][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x5729a6),_0x428179['body'][_0x49afec(0xd7)+'hild']['sp']=_0x59f672;}var _0x21d4f1=_0x20f6fd(_0x49afec(0x783)+'r',![]),_0x1983e2=[['Posit'+'ion',_0x4118ab&&_0x4118ab[_0x49afec(0x8e8)]&&_0x4118ab[_0x49afec(0x8e8)]['posAt']?_0x49afec(0x1e2)+_0x49afec(0x259)+_0x49afec(0x2f8)+_0x4118ab[_0x49afec(0x8e8)][_0x49afec(0x944)]:_0x49afec(0x1e2)+'ntrol'+'ler',_0x4118ab&&_0x4118ab['local']&&_0x4118ab[_0x49afec(0x8e8)][_0x49afec(0x5b4)]?_0x4118ab[_0x49afec(0x8e8)]['feet'][_0x49afec(0x2d4)](function(_0x18c880){var _0x5679b0=_0x49afec;return _0x616644['PkRjP'](Math['round'](_0x616644[_0x5679b0(0x645)](_0x18c880,-0x2e9*-0x7+0xe9*-0x1+-0x1312)),-0x1694+-0x3*-0x98c+0x79*-0xc);})[_0x49afec(0xb2)]('\x20\x20'):'-'],[_0x49afec(0x6c5),'+'+_0x5de7f7+'m',_0x4118ab&&_0x4118ab[_0x49afec(0x8e8)]&&_0x4118ab['local'][_0x49afec(0x649)]?_0x4118ab['local'][_0x49afec(0x649)]['map'](function(_0x131f66){var _0x2d236c=_0x49afec;if(_0x2d236c(0x55b)!=='QDzKe')return Math[_0x2d236c(0x799)](_0xe6764b[_0x2d236c(0x164)](_0x131f66,-0x3c5*-0x3+0x11*-0x199+0x103e))/(-0x1558*-0x1+-0x1255+0x29f*-0x1);else _0x559fcc[_0x2d236c(0x290)+_0x2d236c(0x775)]=![],_0x7f70f6['heapU'+'8']=![],_0x263f5a['heapB'+'ytes']=-0x10b0+-0x20+0x10d0;})['join']('\x20\x20'):'-'],['Walk\x20'+_0x49afec(0x284),_0x616644[_0x49afec(0x517)],_0x616644['zrMcW'](_0x366415,_0x4118ab,_0x49afec(0x1e2)+'ntrol'+'ler',0x3bd+0x1317+-0x16c4)],[_0x49afec(0x73b)+'t\x20spe'+'ed','0x40',_0x366415(_0x4118ab,_0x49afec(0x1e2)+_0x49afec(0x259)+_0x49afec(0x64f),-0x145a+0x1e38+-0x99e)],[_0x49afec(0x561)+_0x49afec(0x629)+'t',_0x49afec(0x78f),_0x616644['PUCPo'](_0x366415,_0x4118ab,_0x616644[_0x49afec(0x551)],0xc80+-0x6aa*0x3+0x89a)],[_0x616644[_0x49afec(0x405)],_0x616644[_0x49afec(0xa06)],_0x366415(_0x4118ab,_0x49afec(0x7da)+_0x49afec(0xa02)+'pt',0x1757+0xc37*0x1+-0x16*0x195)]];for(_0x3fc4c2=0xd7f+0x9*-0x2ea+0xcbb;_0x3fc4c2<_0x1983e2['lengt'+'h'];_0x3fc4c2++){var _0x1d360d=('7|0|4'+_0x49afec(0xad3)+'8|6|5'+_0x49afec(0x42a))[_0x49afec(0xad1)]('|'),_0x37a6a2=-0x148b*-0x1+-0x15b7+-0x32*-0x6;while(!![]){switch(_0x1d360d[_0x37a6a2++]){case'0':var _0x5ab207=_0x616644[_0x49afec(0x6da)](_0x3b2bc6,_0x49afec(0x3fe),_0x616644[_0x49afec(0x187)]);continue;case'1':_0x5ab207[_0x49afec(0x28c)][_0x49afec(0x3bf)]='1';continue;case'2':_0x21d4f1[_0x49afec(0x388)][_0x49afec(0xd7)+_0x49afec(0x71d)]['sp']=_0x5ab207;continue;case'3':_0x5ab207[_0x49afec(0x28c)][_0x49afec(0x12f)+_0x49afec(0xe7)]=_0x49afec(0x88c);continue;case'4':_0x5ab207['style'][_0x49afec(0x3e4)+_0x49afec(0x29a)]='0';continue;case'5':_0x23f8e3[_0x49afec(0x49f)+'dChil'+'d'](_0x5ab207);continue;case'6':_0x5ab207[_0x49afec(0x52b)+'et']['k']=_0x1983e2[_0x3fc4c2][-0x26b*-0x7+-0x9*0x1b6+0xa*-0x27];continue;case'7':var _0x23f8e3=_0x592bb1(_0x1983e2[_0x3fc4c2][0x7*0x397+0x201e+-0x393f]);continue;case'8':_0x5ab207[_0x49afec(0xc9)+_0x49afec(0x4e9)+'t']=_0x616644[_0x49afec(0xabb)](String,_0x1983e2[_0x3fc4c2][-0x5bf*-0x6+-0x44c+0x1e2c*-0x1]);continue;case'9':_0x21d4f1[_0x49afec(0x388)][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x23f8e3);continue;}break;}}_0x590d33['push'](_0x21d4f1);}if(_0x3aacee==='log'){var _0x831f62=_0x616644[_0x49afec(0x322)](_0x20f6fd,_0x616644[_0x49afec(0x49c)],![]),_0x256ce6=_0x4118ab&&_0x4118ab['warni'+_0x49afec(0x92e)]&&_0x4118ab['warni'+_0x49afec(0x92e)]['lengt'+'h']?_0x4118ab['warni'+_0x49afec(0x92e)][_0x49afec(0xb2)]('\x0a'):'no\x20wa'+_0x49afec(0x295)+'s';_0x831f62[_0x49afec(0x388)][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x616644[_0x49afec(0x331)](_0x3b2bc6,'div','sk-pr'+'e',_0x256ce6)),_0x590d33[_0x49afec(0xb0c)](_0x831f62);var _0x14bcb7=_0x20f6fd(_0x616644[_0x49afec(0x71e)],![]),_0x3e3345=_0x3b2bc6(_0x49afec(0x42e)+'n',_0x616644[_0x49afec(0x26e)],_0x49afec(0x499)+'JSON\x20'+_0x49afec(0x7bd)+'ipboa'+'rd');_0x3e3345['type']=_0x49afec(0x42e)+'n',_0x3e3345[_0x49afec(0x3a6)+'ck']=function(){var _0x4b1b61=_0x49afec,_0x2c3b4c={'bxMRx':'Runti'+_0x4b1b61(0x632)+_0x4b1b61(0x73e)};try{var _0x1c02de=_0xe6764b[_0x4b1b61(0x2a5)](_0x66cc24,'\x0a')+JSON[_0x4b1b61(0x89c)+_0x4b1b61(0x403)](_0x4118ab,null,-0xa27+0x7af*0x5+-0x1*0x1c43)+'\x0a'+_0x1e4295;if(navigator[_0x4b1b61(0x2c9)+'oard']&&navigator[_0x4b1b61(0x2c9)+'oard'][_0x4b1b61(0x312)+'Text']){if(_0xe6764b[_0x4b1b61(0x4ed)](_0xe6764b[_0x4b1b61(0x85c)],_0xe6764b['TttkH']))return _0x28727e['sourc'+'e']=_0x2c3b4c[_0x4b1b61(0x5f4)],_0x645946;else navigator[_0x4b1b61(0x2c9)+_0x4b1b61(0x137)][_0x4b1b61(0x312)+_0x4b1b61(0xace)](_0x1c02de)[_0x4b1b61(0x712)](function(){var _0x4c7e4c=_0x4b1b61;_0x3e3345[_0x4c7e4c(0xc9)+_0x4c7e4c(0x4e9)+'t']='Copie'+'d';});}else _0x3e3345['textC'+_0x4b1b61(0x4e9)+'t']=_0xe6764b[_0x4b1b61(0x9fa)];}catch(_0x24478d){_0x3e3345[_0x4b1b61(0xc9)+'onten'+'t']=_0x4b1b61(0x499)+_0x4b1b61(0xb1e)+'d';}},_0x14bcb7[_0x49afec(0x388)][_0x49afec(0x49f)+_0x49afec(0x813)+'d'](_0x616644[_0x49afec(0x60a)](_0x3b2bc6,_0x616644[_0x49afec(0x404)],_0x49afec(0x3a3)+_0x49afec(0x45c),_0x616644[_0x49afec(0x44f)])),_0x14bcb7[_0x49afec(0x388)][_0x49afec(0x49f)+'dChil'+'d'](_0x3e3345),_0x590d33['push'](_0x14bcb7);}return _0x590d33;}else{_0x594e01[_0x49afec(0xb0c)]({'o':-(-0x9*-0x7b+0x23ee+-0xb8*0x38),'v':0x0,'why':_0x616644['FHPtL'](_0x616644[_0x49afec(0x117)]+_0x1ff5dc,'\x20Obsc'+_0x49afec(0x3c1)+'loats'+_0x49afec(0x9dc)+'ed')});return;}}function _0x11c1f7(){if(_0x2cf7d2['open'])_0x1a0992(!![]);}function _0x3850a9(){var _0x3e2e2a=_0x4ccb6b;try{var _0x989552=localStorage[_0x3e2e2a(0x158)+'em'](_0x8f603c);if(!_0x989552)return;var _0x401394=JSON['parse'](_0x989552);if(_0x401394&&typeof _0x401394['x']===_0x616644['zKtxq']&&typeof _0x401394['y']===_0x3e2e2a(0xa97)+'r')_0x2cf7d2['pos']=_0x401394;}catch(_0x467b41){}}function _0x8683be(){var _0x17edd6=_0x4ccb6b,_0x21f697={'aLBQQ':function(_0x396ff2,_0x31ad5d){return _0x616644['EpAUr'](_0x396ff2,_0x31ad5d);}};try{if(_0x616644['AkRpn'](_0x616644[_0x17edd6(0x10f)],'wuoXl'))return _0x21f697[_0x17edd6(0x111)](_0x576c8a,_0x48cf47[_0x297246]['lengt'+'h']);else localStorage[_0x17edd6(0xac4)+'em'](_0x8f603c,JSON[_0x17edd6(0x89c)+'gify'](_0x2cf7d2['pos']));}catch(_0x3b52f0){}}function _0x43400f(){var _0x57e53c=_0x4ccb6b,_0x292bab=_0x2cf7d2['root'];if(!_0x292bab||!_0x292bab[_0x57e53c(0x28c)])return;if(_0x2cf7d2['pos']){if('rVBqI'!==_0x616644['TsyVQ'])_0x292bab[_0x57e53c(0x28c)][_0x57e53c(0x2be)]=_0x616644[_0x57e53c(0x4f3)](_0x2cf7d2[_0x57e53c(0x2b2)]['x'],'px'),_0x292bab['style']['top']=_0x2cf7d2[_0x57e53c(0x2b2)]['y']+'px',_0x292bab['style']['right']=_0x57e53c(0x3bc),_0x292bab[_0x57e53c(0x28c)][_0x57e53c(0xb21)+'m']='auto';else{var _0x259702=_0x57a84c['FPSco'+'ntrol'+_0x57e53c(0x64f)];if(!_0x259702||!_0x259702[_0x57e53c(0x872)])return null;var _0x11f938=_0x52667e(_0x259702[_0x57e53c(0x872)],0x1*0x74f+-0x1c3*0x1+0x2a8*-0x1,0x2f1*0x7+0x1787+0x64d*-0x7);return _0x11f938?_0x11f938[0xd7d*-0x1+0x25c4+0xef*-0x1a]:null;}}else _0x292bab['style']['left']='auto',_0x292bab['style'][_0x57e53c(0x4b6)]=_0x57e53c(0x3bc),_0x292bab['style'][_0x57e53c(0x88c)]=_0x57e53c(0x886),_0x292bab[_0x57e53c(0x28c)][_0x57e53c(0xb21)+'m']='24px';}function _0x593d8b(_0x11dae9,_0x8580d8){var _0x331f5c=_0x4ccb6b,_0x5a8fd7={'BvlCo':_0x331f5c(0x58e)+_0x331f5c(0x873),'yHMVc':_0x616644['ApHTX'],'EbvfR':function(_0x3d231e,_0x1c6eb9){return _0x3d231e-_0x1c6eb9;},'knLnm':function(_0x553eb7,_0x4096f7){var _0x517503=_0x331f5c;return _0x616644[_0x517503(0x20a)](_0x553eb7,_0x4096f7);},'BhVEz':function(_0x5b4839,_0x3ee269){return _0x616644['ACtOf'](_0x5b4839,_0x3ee269);},'GhACm':function(_0x1ad4dc,_0x5c797e){return _0x1ad4dc-_0x5c797e;},'LlowV':function(_0x312fdd,_0x159d9a){var _0x53dd3e=_0x331f5c;return _0x616644[_0x53dd3e(0x70d)](_0x312fdd,_0x159d9a);},'YkMib':function(_0x204647,_0x12fa4f){return _0x204647+_0x12fa4f;}};try{var _0x114b38=![],_0x599e1e=0x9*-0x43b+0x9e*-0x31+0x1*0x4451,_0x1f6490=0x1a2f*-0x1+0x4*0xf1+0x1*0x166b;_0x8580d8[_0x331f5c(0x28c)][_0x331f5c(0x7b7)+'r']='grab',_0x8580d8['style']['touch'+'Actio'+'n']='none';var _0x39d953=function(_0x2d40e8){var _0x1d8ca2=_0x331f5c;_0x114b38=!![],_0x8580d8[_0x1d8ca2(0x28c)]['curso'+'r']=_0x5a8fd7[_0x1d8ca2(0x377)];var _0x3a21fc={'left':parseFloat(_0x11dae9['style'][_0x1d8ca2(0x2be)])||0x2ad+0x20e3+0x10*-0x239,'top':parseFloat(_0x11dae9[_0x1d8ca2(0x28c)]['top'])||0x1f91*-0x1+-0x1cb0+0x3c41};(!_0x11dae9[_0x1d8ca2(0x28c)]['left']||_0x11dae9[_0x1d8ca2(0x28c)]['left']===_0x5a8fd7[_0x1d8ca2(0x7df)])&&(_0x3a21fc[_0x1d8ca2(0x2be)]=_0x5a8fd7['EbvfR'](_0x5a8fd7['knLnm'](window[_0x1d8ca2(0x1b9)+'Width']||0xf*0x24d+-0x427*-0x2+-0x61*0x71,_0x11dae9[_0x1d8ca2(0x348)+_0x1d8ca2(0xa94)+'h']||0xc0a+-0x7a1+-0x1fd),-0x1e17*-0x1+0x988+-0x2787));(!_0x11dae9['style'][_0x1d8ca2(0x4b6)]||_0x5a8fd7[_0x1d8ca2(0x8fb)](_0x11dae9['style'][_0x1d8ca2(0x4b6)],_0x1d8ca2(0x3bc)))&&(_0x3a21fc['top']=_0x5a8fd7['knLnm']((window[_0x1d8ca2(0x1b9)+_0x1d8ca2(0x2dc)+'t']||0x122*0xe+0x2293+-0x326f)-(_0x11dae9['offse'+'tHeig'+'ht']||0x192c+0x313*-0x8+0xfc),-0x1387*-0x1+0x1510+-0x287f));_0x599e1e=_0x5a8fd7['knLnm'](_0x2d40e8[_0x1d8ca2(0x69d)+'tX']||0x1f9*-0x1+-0x1017*-0x2+-0x1*0x1e35,_0x3a21fc[_0x1d8ca2(0x2be)]),_0x1f6490=_0x5a8fd7['GhACm'](_0x2d40e8[_0x1d8ca2(0x69d)+'tY']||0xc82+0x114+-0xd96,_0x3a21fc[_0x1d8ca2(0x4b6)]);try{_0x2d40e8[_0x1d8ca2(0x8d2)+_0x1d8ca2(0x806)+_0x1d8ca2(0x8a8)]();}catch(_0x2ff47a){}},_0x2d8dac=function(_0x47bdc1){var _0x5e311f=_0x331f5c,_0x392d1c={'ZSYMs':function(_0x5dae30,_0x124a96){return _0x5dae30-_0x124a96;}};if(_0x5e311f(0x8d3)!=='LRcEN')_0x3a582c[_0x5e311f(0x2be)]=_0x392d1c['ZSYMs'](_0x392d1c[_0x5e311f(0x1ec)](_0x1a2d4c['inner'+'Width']||0x163*0x17+-0x5*0x52f+-0x5fa,_0xaa47ac[_0x5e311f(0x348)+'tWidt'+'h']||-0x231*-0x1+-0x1c7b+-0x15e*-0x15),-0x1*0x6e6+0x2*0x131+0x49c);else{var _0x5039f9=(_0x5e311f(0x4b8)+'|2|1|'+_0x5e311f(0x4b9)+_0x5e311f(0xb2b))['split']('|'),_0x25cbdd=0x37*-0x75+0x1*0x1849+-0x1*-0xda;while(!![]){switch(_0x5039f9[_0x25cbdd++]){case'0':var _0x336c44=(_0x47bdc1[_0x5e311f(0x69d)+'tX']||-0x4cd+-0x8bb*-0x1+-0x3ee)-_0x599e1e,_0x642175=(_0x47bdc1['clien'+'tY']||-0x1*0x2692+0x1f5a*-0x1+0x45ec)-_0x1f6490;continue;case'1':_0x642175=Math['max'](0x35e+0x48b+0x7e1*-0x1,Math[_0x5e311f(0x681)]((window['inner'+'Heigh'+'t']||0x1bf1+0x1f60+-0x3b51)-_0x379373-(-0x1c0*0x8+-0x3f5*-0x5+-0x1eb*0x3),_0x642175));continue;case'2':_0x336c44=Math[_0x5e311f(0x95d)](0x1*0x25f7+0x549+-0x2b38,Math[_0x5e311f(0x681)](_0x5a8fd7[_0x5e311f(0x2ff)]((window['inner'+'Width']||-0x2b2+-0x92f*-0x1+-0x67d)-_0x46a8a4,-0x3*0x2c5+0x1149+-0x8f2),_0x336c44));continue;case'3':_0x11dae9['style']['botto'+'m']=_0x5a8fd7['yHMVc'];continue;case'4':_0x2cf7d2[_0x5e311f(0x2b2)]={'x':_0x336c44,'y':_0x642175};continue;case'5':_0x11dae9[_0x5e311f(0x28c)]['right']=_0x5e311f(0x3bc);continue;case'6':var _0x46a8a4=_0x11dae9[_0x5e311f(0x348)+_0x5e311f(0xa94)+'h']||0x178f+-0x25f7*-0x1+0x5e9*-0xa,_0x379373=_0x11dae9[_0x5e311f(0x348)+_0x5e311f(0x931)+'ht']||-0x617*-0x3+-0x829*0x2+-0xb*0x9;continue;case'7':if(!_0x114b38)return;continue;case'8':_0x11dae9[_0x5e311f(0x28c)][_0x5e311f(0x2be)]=_0x336c44+'px';continue;case'9':_0x11dae9[_0x5e311f(0x28c)]['top']=_0x5a8fd7[_0x5e311f(0x1f6)](_0x642175,'px');continue;}break;}}},_0x4f5534=function(){var _0x4e4c0c=_0x331f5c;if(!_0x114b38)return;_0x114b38=![],_0x8580d8[_0x4e4c0c(0x28c)][_0x4e4c0c(0x7b7)+'r']=_0x616644[_0x4e4c0c(0xab6)],_0x8683be();};_0x8580d8['addEv'+'entLi'+_0x331f5c(0x800)+'r'](_0x616644['WRbfF'],_0x39d953),window['addEv'+'entLi'+_0x331f5c(0x800)+'r'](_0x616644['qeTFr'],_0x2d8dac),window['addEv'+'entLi'+_0x331f5c(0x800)+'r'](_0x616644[_0x331f5c(0x15a)],_0x4f5534),_0x8580d8[_0x331f5c(0x33b)+'entLi'+_0x331f5c(0x800)+'r'](_0x616644['ulcWC'],_0x39d953,{'passive':![]}),window[_0x331f5c(0x33b)+'entLi'+'stene'+'r'](_0x616644[_0x331f5c(0x9e4)],_0x2d8dac,{'passive':![]}),window['addEv'+_0x331f5c(0x959)+_0x331f5c(0x800)+'r'](_0x616644['mkhsU'],_0x4f5534);}catch(_0x58e62f){}}function _0x169091(){var _0x1cc81d=_0x4ccb6b,_0x3263a6={'FwpoP':function(_0x484a87){return _0x616644['BVvFI'](_0x484a87);},'odWAF':_0x616644[_0x1cc81d(0x589)]};if(_0x2cf7d2[_0x1cc81d(0x9d3)])return _0x2cf7d2[_0x1cc81d(0xa53)];try{var _0x469fb4=('11|34'+'|22|6'+_0x1cc81d(0x40d)+_0x1cc81d(0x63a)+'6|37|'+'12|16'+'|44|2'+_0x1cc81d(0x572)+_0x1cc81d(0x330)+_0x1cc81d(0xa0c)+'|18|3'+'0|4|4'+_0x1cc81d(0x59a)+'|45|2'+'9|21|'+_0x1cc81d(0x13a)+'|3|14'+_0x1cc81d(0x21a)+_0x1cc81d(0x62f)+_0x1cc81d(0x17c)+_0x1cc81d(0x94d)+'33|13'+'|1|10'+_0x1cc81d(0x361)+'6|28|'+'42')[_0x1cc81d(0xad1)]('|'),_0x342f10=-0x2481+0x1*-0x3e5+0x2866;while(!![]){switch(_0x469fb4[_0x342f10++]){case'0':document['body'][_0x1cc81d(0x49f)+'dChil'+'d'](_0x1e19bc);continue;case'1':document['body'][_0x1cc81d(0x49f)+_0x1cc81d(0x813)+'d'](_0x3715f3);continue;case'2':_0x45ead7[_0x1cc81d(0x49f)+'dChil'+'d'](_0x52ee47);continue;case'3':_0x43400f();continue;case'4':_0x2a2752[_0x1cc81d(0x49f)+'dChil'+'d'](_0x4654c9);continue;case'5':_0x11ba2d[_0x1cc81d(0x49f)+_0x1cc81d(0x813)+'d'](_0x4be495);continue;case'6':_0x1e19bc['id']=_0x616644['oBDdO'];continue;case'7':_0x2cf7d2['butto'+'ns']=_0x256576;continue;case'8':for(var _0x2309da=0x23ff+-0x26c5+0x2c6;_0x2309da<_0x5023cd['lengt'+'h'];_0x2309da++){var _0x12c098=(_0x1cc81d(0x5a6)+'|4|0|'+_0x1cc81d(0x539))[_0x1cc81d(0xad1)]('|'),_0x4bc4cf=0xccd+0x6a*-0xe+-0xa3*0xb;while(!![]){switch(_0x12c098[_0x4bc4cf++]){case'0':(function(_0x293145){var _0x275f71=_0x1cc81d,_0x40e8b2={'dKiEg':function(_0x49b048,_0x4c206a){return _0x49b048(_0x4c206a);}};_0x42dea4[_0x275f71(0x3a6)+'ck']=function(){var _0x813c23=_0x275f71;_0x40e8b2[_0x813c23(0x29e)](_0x282db7,_0x293145);};}(_0x215c01['id']));continue;case'1':var _0x42dea4=_0x3b2bc6(_0x616644[_0x1cc81d(0x6ad)],_0x1cc81d(0x8e4)+'b',_0x616644[_0x1cc81d(0x578)]+_0x215c01['label']+_0x616644[_0x1cc81d(0x249)]);continue;case'2':var _0x215c01=_0x5023cd[_0x2309da];continue;case'3':_0x42dea4[_0x1cc81d(0x109)]=_0x1cc81d(0x42e)+'n';continue;case'4':_0x42dea4['title']=_0x215c01[_0x1cc81d(0x8c1)];continue;case'5':_0x11ba2d['appen'+_0x1cc81d(0x813)+'d'](_0x42dea4);continue;case'6':_0x256576[_0x215c01['id']]=_0x42dea4;continue;}break;}}continue;case'9':_0x1e19bc['appen'+'dChil'+'d'](_0x2a2752);continue;case'10':_0x2cf7d2[_0x1cc81d(0x9a4)]=_0x3715f3;continue;case'11':if(!document[_0x1cc81d(0x388)]||!document[_0x1cc81d(0x388)][_0x1cc81d(0x49f)+'dChil'+'d'])return null;continue;case'12':var _0x45ead7=_0x3b2bc6(_0x1cc81d(0x8bd),_0x616644['dODkN']);continue;case'13':_0x3715f3[_0x1cc81d(0x3a6)+'ck']=function(_0x38ad74){var _0x5a2b0f=_0x1cc81d;if(_0x38ad74&&_0x38ad74['stopP'+'ropag'+_0x5a2b0f(0x32e)])_0x38ad74[_0x5a2b0f(0x89f)+_0x5a2b0f(0x778)+_0x5a2b0f(0x32e)]();_0x1a0992(!_0x2cf7d2[_0x5a2b0f(0x305)]);};continue;case'14':_0x593d8b(_0x1e19bc,_0x2af455);continue;case'15':_0x3715f3[_0x1cc81d(0x51e)+'seent'+'er']=function(){var _0x367bd9=_0x1cc81d;_0x3715f3[_0x367bd9(0x28c)]['opaci'+'ty']='1';};continue;case'16':var _0x52ee47=_0x3b2bc6(_0x616644[_0x1cc81d(0x404)],_0x616644[_0x1cc81d(0x506)],'Sakur'+_0x1cc81d(0x75c)+_0x1cc81d(0x182)+'z');continue;case'17':var _0x4be495=_0x616644['ObqLQ'](_0x3b2bc6,_0x1cc81d(0x8bd),_0x616644[_0x1cc81d(0xb1d)],_0x568067);continue;case'18':var _0x4654c9=_0x3b2bc6(_0x616644['jxUPC'],_0x1cc81d(0x2fd)+'ls');continue;case'19':_0x45ead7[_0x1cc81d(0x49f)+_0x1cc81d(0x813)+'d'](_0xd1ec80);continue;case'20':var _0x2dcf13=_0x3b2bc6(_0x616644['jxUPC'],'mn-cl'+'ose',_0x1cc81d(0x340)+_0x1cc81d(0x954)+_0x1cc81d(0x93f)+'\x200\x2024'+_0x1cc81d(0xa19)+_0x1cc81d(0x389)+_0x1cc81d(0x830)+_0x1cc81d(0x808)+_0x1cc81d(0x77f)+_0x1cc81d(0x628)+'6\x2018\x22'+'/></s'+_0x1cc81d(0x7b0));continue;case'21':_0x2cf7d2[_0x1cc81d(0x568)]=_0x52ee47;continue;case'22':var _0x1e19bc=_0x616644['GqhLD'](_0x3b2bc6,_0x616644[_0x1cc81d(0x404)],_0x1cc81d(0xa62)+_0x1cc81d(0xb36));continue;case'23':_0x3715f3[_0x1cc81d(0x9c7)]=_0x1cc81d(0x9ed)+'a\x20Ski'+_0x1cc81d(0x182)+_0x1cc81d(0x124)+_0x1cc81d(0x890);continue;case'24':var _0x3715f3=_0x3b2bc6(_0x1cc81d(0x8bd),null,_0x3878c0);continue;case'25':_0x2af455['appen'+_0x1cc81d(0x813)+'d'](_0x45ead7);continue;case'26':var _0x2a2752=_0x616644[_0x1cc81d(0x6da)](_0x3b2bc6,_0x1cc81d(0x8bd),_0x1cc81d(0x719)+'in');continue;case'27':_0x2cf7d2['sub']=_0xd1ec80;continue;case'28':_0x282db7(_0x2cf7d2[_0x1cc81d(0x74a)]);continue;case'29':_0x2cf7d2[_0x1cc81d(0x70b)]=_0x4654c9;continue;case'30':_0x2a2752[_0x1cc81d(0x49f)+'dChil'+'d'](_0x2af455);continue;case'31':setInterval(function(){var _0x1d2d52=_0x1cc81d;try{if(!_0x2cf7d2['petal'])return;var _0x136571=_0x3263a6[_0x1d2d52(0x8f9)](_0x3ea2ce);_0x2cf7d2[_0x1d2d52(0x9a4)]['style']['opaci'+'ty']=_0x2cf7d2['open']?'1':_0x136571?'.8':_0x1d2d52(0x1d5),_0x2cf7d2['petal']['title']=_0x136571?_0x3263a6[_0x1d2d52(0x779)]:_0x1d2d52(0x9ed)+_0x1d2d52(0x75c)+'llWar'+_0x1d2d52(0x4fa)+_0x1d2d52(0x3dc)+_0x1d2d52(0xa64)+'\x20the\x20'+_0x1d2d52(0x5c3)+'(Inse'+_0x1d2d52(0xa31);}catch(_0x242e19){}},-0x255e+-0x224e+0x4a68);continue;case'32':_0x2af455[_0x1cc81d(0x49f)+'dChil'+'d'](_0x2dcf13);continue;case'33':_0x3715f3['onmou'+'selea'+'ve']=function(){var _0x1ed895=_0x1cc81d;_0x3715f3['style'][_0x1ed895(0x476)+'ty']=_0x2cf7d2['open']?'1':'.5';};continue;case'34':if(!document[_0x1cc81d(0x2ea)+_0x1cc81d(0x77a)+_0x1cc81d(0xae4)](_0x1cc81d(0x6f7)+'a-men'+'u-css')){var _0x18d655=document['creat'+'eElem'+_0x1cc81d(0x89b)](_0x1cc81d(0x28c));_0x18d655['id']='sakur'+_0x1cc81d(0x12b)+_0x1cc81d(0x2b0),_0x18d655['textC'+_0x1cc81d(0x4e9)+'t']=_0x49fe31,(document[_0x1cc81d(0x568)]||document[_0x1cc81d(0x1e3)+_0x1cc81d(0x2c6)+_0x1cc81d(0x77a)])[_0x1cc81d(0x49f)+_0x1cc81d(0x813)+'d'](_0x18d655);}continue;case'35':var _0x256576={};continue;case'36':_0x2cf7d2['built']=!![];continue;case'37':var _0x2af455=_0x3b2bc6(_0x616644[_0x1cc81d(0x404)],_0x616644[_0x1cc81d(0x226)]);continue;case'38':var _0x11ba2d=_0x3b2bc6(_0x1cc81d(0x8bd),_0x1cc81d(0x236)+'de');continue;case'39':_0x616644[_0x1cc81d(0x6ca)](_0x3850a9);continue;case'40':_0x1e19bc['appen'+'dChil'+'d'](_0x11ba2d);continue;case'41':_0x3715f3['id']=_0x616644[_0x1cc81d(0xb11)];continue;case'42':return _0x1e19bc;case'43':_0x2dcf13[_0x1cc81d(0x3a6)+'ck']=function(){var _0x4336c3=_0x1cc81d;_0x616644[_0x4336c3(0x99f)](_0x1a0992,![]);};continue;case'44':var _0xd1ec80=_0x3b2bc6('div',_0x1cc81d(0x6ae)+'b',_0x1cc81d(0x2c8)+_0x1cc81d(0x4d6));continue;case'45':_0x2cf7d2['root']=_0x1e19bc;continue;}break;}}catch(_0x3d471f){return console[_0x1cc81d(0x2a2)]('%c[sa'+_0x1cc81d(0x794)+_0x1cc81d(0x31c)+_0x1cc81d(0x9bf)+'ailab'+'le',_0x1cc81d(0x915)+':'+_0x5ae3b3,_0x3d471f),null;}}function _0x282db7(_0x175374){var _0x119fe8=_0x4ccb6b,_0x3fa42f={'diIQZ':'f32','WwyXr':_0x119fe8(0x3ad)};_0x2cf7d2[_0x119fe8(0x74a)]=_0x175374,_0x2cf7d2[_0x119fe8(0x5bc)]=[];if(!_0x2cf7d2['cols'])return;var _0x325d7c=null;for(var _0x332bb0=-0x1660+-0x1327+0x2987;_0x332bb0<_0x5023cd[_0x119fe8(0xc4)+'h'];_0x332bb0++)if(_0x5023cd[_0x332bb0]['id']===_0x175374)_0x325d7c=_0x5023cd[_0x332bb0];_0x2cf7d2[_0x119fe8(0x568)][_0x119fe8(0xc9)+'onten'+'t']=_0x616644[_0x119fe8(0x606)]+(_0x325d7c&&_0x325d7c[_0x119fe8(0x8c1)]||'?');for(var _0x14d1cd in _0x2cf7d2[_0x119fe8(0x42e)+'ns']){if(_0x119fe8(0x617)==='SknkN')_0x213646[_0x119fe8(0x290)+_0x119fe8(0x775)]=!!(_0x335c82&&_0x152587[_0x119fe8(0x122)+'e']),_0x5b318f[_0x119fe8(0x879)+'8']=!!(_0x5f2d40&&_0x47c6b9[_0x119fe8(0x122)+'e']&&_0x415729[_0x119fe8(0x122)+'e']['HEAPU'+'8']),_0x30a493[_0x119fe8(0x52c)+'ytes']=_0x359a40[_0x119fe8(0x879)+'8']?_0x3f6e03[_0x119fe8(0x122)+'e']['HEAPU'+'8'][_0x119fe8(0xc4)+'h']:0x194*-0x13+-0x7d9+0x25d5*0x1;else{if(_0x2cf7d2[_0x119fe8(0x42e)+'ns'][_0x14d1cd][_0x119fe8(0x266)+_0x119fe8(0x23e)])_0x2cf7d2[_0x119fe8(0x42e)+'ns'][_0x14d1cd]['class'+_0x119fe8(0x1a9)]=_0x616644[_0x119fe8(0x6c2)]+(_0x616644['AkRpn'](_0x14d1cd,_0x175374)?_0x616644[_0x119fe8(0x871)]:'');}}var _0x2e6fab=[];try{if(_0x119fe8(0x13d)===_0x616644[_0x119fe8(0x765)])return _0x99ec75[0xc*-0x297+-0x15b9+-0x34ce*-0x1]===_0x3fa42f['diIQZ']||_0x265fa7[0x10fb*-0x2+-0xae7*-0x3+0x142]===_0x3fa42f[_0x119fe8(0x75d)];else _0x2e6fab=_0x9fdd66(_0x175374);}catch(_0x378e0d){_0x2e6fab=[];}while(_0x2cf7d2[_0x119fe8(0x70b)][_0x119fe8(0x39e)+'Child'])_0x2cf7d2['cols']['remov'+_0x119fe8(0x875)+'d'](_0x2cf7d2['cols'][_0x119fe8(0x39e)+_0x119fe8(0x53d)]);for(var _0x490197=-0x1c57+0x11*-0x7+-0x2*-0xe67;_0x490197<_0x2e6fab[_0x119fe8(0xc4)+'h'];_0x490197++)_0x2cf7d2['cols']['appen'+'dChil'+'d'](_0x2e6fab[_0x490197]);}function _0x1a0992(_0x374ad8){var _0x27cfe1=_0x4ccb6b,_0x3890ea=(_0x27cfe1(0x627)+_0x27cfe1(0x378)+'4')['split']('|'),_0xd8d87c=-0x2*-0xc3e+0x19e2*-0x1+0x1*0x166;while(!![]){switch(_0x3890ea[_0xd8d87c++]){case'0':if(_0x2cf7d2['petal'])_0x2cf7d2['petal'][_0x27cfe1(0x28c)]['opaci'+'ty']=_0x2cf7d2[_0x27cfe1(0x305)]?'1':'.5';continue;case'1':if(!_0x11c4d9)return;continue;case'2':_0x2cf7d2[_0x27cfe1(0x305)]=!!_0x374ad8;continue;case'3':var _0x11c4d9=_0x169091();continue;case'4':if(_0x2cf7d2[_0x27cfe1(0x305)]){_0x616644['sRKVQ'](_0x282db7,_0x2cf7d2[_0x27cfe1(0x74a)]);try{var _0x17ffb2=window[_0x27cfe1(0x1b9)+'Heigh'+'t']||-0x25*-0x94+0x1193*-0x2+0x10e2;if(_0x17ffb2<0x2*-0x4d1+-0x1dc0+-0x29ce*-0x1)_0x616644[_0x27cfe1(0x741)](_0x246b65,![]);}catch(_0x3d241e){}}continue;case'5':_0x11c4d9['class'+_0x27cfe1(0x1a9)]=_0x616644[_0x27cfe1(0x21f)]+(_0x2cf7d2[_0x27cfe1(0x305)]?_0x616644['UMwRk']:'');continue;}break;}}function _0x5e6244(){var _0x1c86e7=_0x4ccb6b;if('zXEZl'!==_0x1c86e7(0x621)){if(!_0x2cf7d2['open']||!_0x2cf7d2[_0x1c86e7(0x9d3)])return;try{for(var _0x168742=0x1d46+0x2*0xf38+0x2*-0x1ddb;_0x168742<_0x2cf7d2[_0x1c86e7(0x5bc)][_0x1c86e7(0xc4)+'h'];_0x168742++){try{_0x2cf7d2[_0x1c86e7(0x5bc)][_0x168742]();}catch(_0xc5ae78){}}var _0x3e821d=_0x4b2daf;_0x2cf7d2['sub'][_0x1c86e7(0xc9)+'onten'+'t']=_0x3e821d?_0x616644[_0x1c86e7(0x969)](_0x616644['oNblB'](_0x616644[_0x1c86e7(0x811)]('v'+_0x3e821d[_0x1c86e7(0x2b8)+'on'],_0x616644[_0x1c86e7(0x48d)]),_0x3e821d[_0x1c86e7(0x940)+'Appli'+'ed'])+'/'+_0x3e821d['hooks'+_0x1c86e7(0x5cc)],_0x1c86e7(0x524)+_0x1c86e7(0xaff)+'rs\x20')+(_0x3e821d[_0x1c86e7(0x94f)]&&_0x3e821d[_0x1c86e7(0x94f)]['playe'+'rCoun'+'t']||0xed9+0x124f+-0x2128)+_0x616644[_0x1c86e7(0x560)]+(_0x3e821d['wasmM'+'emory']&&_0x3e821d[_0x1c86e7(0xa7)+_0x1c86e7(0xef)][_0x1c86e7(0xa66)+_0x1c86e7(0x634)]?Math['round'](_0x616644['yUykk'](_0x3e821d[_0x1c86e7(0xa7)+_0x1c86e7(0xef)]['bytes'],0x21265*-0x1+0x1536f6+-0x32491))+'MB':'-'):_0x616644['WNVgo'];var _0x27c571=_0x2cf7d2[_0x1c86e7(0x70b)]['query'+_0x1c86e7(0x689)+_0x1c86e7(0xaa0)+'l']?_0x2cf7d2['cols'][_0x1c86e7(0x789)+_0x1c86e7(0x689)+_0x1c86e7(0xaa0)+'l'](_0x616644['hUgRH']):[];for(var _0x51ee94=0x1a6a+0x17cb+-0x3235;_0x51ee94<_0x27c571[_0x1c86e7(0xc4)+'h'];_0x51ee94++){var _0x3b70e5=_0x27c571[_0x51ee94]['datas'+'et']['k'],_0x49534d='';if(_0x616644[_0x1c86e7(0x4f0)](_0x3b70e5,_0x1c86e7(0x564)+'ON'))_0x49534d=_0x3e821d?_0x3e821d[_0x1c86e7(0x2b8)+'on']:'-';else{if(_0x616644['lNbQz'](_0x3b70e5,_0x1c86e7(0x4c2)+'ed\x20/\x20'+_0x1c86e7(0x6d1)+_0x1c86e7(0x38d)))_0x49534d=_0x3e821d?_0x616644[_0x1c86e7(0xacd)](_0x3e821d['hooks'+_0x1c86e7(0x1cc)+'ed'],'\x20/\x20')+_0x3e821d[_0x1c86e7(0x940)+_0x1c86e7(0x521)+_0x1c86e7(0x38d)+'AtArm']:'-';else{if(_0x616644['zkDRY'](_0x3b70e5,_0x1c86e7(0x178)+_0x1c86e7(0x198)+'ntiat'+_0x1c86e7(0xad9)))_0x49534d=_0x3e821d&&_0x3e821d['wasmM'+'emory']&&_0x3e821d[_0x1c86e7(0xa7)+_0x1c86e7(0xef)]['captu'+'red']?_0x616644[_0x1c86e7(0x1fd)](Math['round'](_0x3e821d[_0x1c86e7(0xa7)+_0x1c86e7(0xef)]['bytes']/(-0xd*0x12f83+-0x2ee4*0x34+0x89*0x4c7f))+_0x616644['ZcCRk'],_0x3e821d['wasmM'+_0x1c86e7(0xef)][_0x1c86e7(0xa03)])+'ms':'-';else{if(_0x3b70e5==='Photo'+_0x1c86e7(0x410)+'orkSy'+'nc')_0x49534d=_0x3e821d&&_0x3e821d['esp']?_0x616644[_0x1c86e7(0x38f)](String,_0x3e821d['esp'][_0x1c86e7(0xaff)+_0x1c86e7(0x490)+'t']):'-';else{if(_0x616644[_0x1c86e7(0x5a1)](_0x3b70e5,_0x616644['PqSIx']))_0x49534d=_0x3e821d&&_0x3e821d['esp']?String(_0x3e821d['esp'][_0x1c86e7(0xf2)+'Count']):'-';else{if(_0x3b70e5===_0x616644[_0x1c86e7(0xb1a)])_0x49534d=_0x3e821d&&_0x3e821d['esp']&&_0x3e821d['esp'][_0x1c86e7(0x463)+'a']?_0x616644[_0x1c86e7(0x73c)](_0x616644['oNblB'](_0x3e821d[_0x1c86e7(0x94f)]['camer'+'a']+'\x20(',_0x3e821d[_0x1c86e7(0x94f)][_0x1c86e7(0x463)+_0x1c86e7(0xb25)]),')'):'-';else{if(_0x616644['LTRHy'](_0x3b70e5,_0x616644['AaAEO']))_0x49534d=_0x3e821d&&_0x3e821d[_0x1c86e7(0x8e8)]&&_0x3e821d['local'][_0x1c86e7(0x5b4)]?_0x3e821d[_0x1c86e7(0x8e8)][_0x1c86e7(0x5b4)][_0x1c86e7(0x2d4)](function(_0x213c3b){var _0x5699b2=_0x1c86e7;return _0x616644[_0x5699b2(0x7e4)](Math['round'](_0x616644[_0x5699b2(0x929)](_0x213c3b,-0x10*0x1ca+-0x11c0+-0x2*-0x1762)),-0x6d*0x51+0x13b7+0xf2a);})['join']('\x20\x20'):'-';else{if(_0x3b70e5===_0x616644[_0x1c86e7(0x8e5)])_0x49534d=_0x3e821d&&_0x3e821d[_0x1c86e7(0x8e8)]&&_0x3e821d[_0x1c86e7(0x8e8)][_0x1c86e7(0x649)]?_0x3e821d['local'][_0x1c86e7(0x649)][_0x1c86e7(0x2d4)](function(_0x3caca3){var _0x888cdc=_0x1c86e7;return _0x616644['CIuTO'](Math['round'](_0x616644[_0x888cdc(0x701)](_0x3caca3,0x1782+-0x1e7f+0x761)),-0x1aa*0xf+0x327*-0x4+0x25f6);})[_0x1c86e7(0xb2)]('\x20\x20'):'-';else{if(_0x616644[_0x1c86e7(0xa63)](_0x1c86e7(0x171),_0x616644[_0x1c86e7(0xab7)])){var _0x5cb529=_0x3b70e5[_0x1c86e7(0xad1)]('+');_0x49534d=_0x366415(_0x3e821d,_0x5cb529[-0x1ecc+-0x1bb7+-0x3a83*-0x1]['index'+'Of'](_0x616644[_0x1c86e7(0x405)])===-0x18b9*-0x1+0x107f*0x1+-0x2938?_0x616644[_0x1c86e7(0x1b8)]:_0x616644['vwpCR'],_0x616644[_0x1c86e7(0x4d2)](parseInt,_0x5cb529[-0x1*-0xfd5+-0x2*-0x479+-0x18c6],-0x911+0x2323+-0x1a02));}else _0x8a0ca1[_0x1c86e7(0xd3)+'ngs'][_0x1c86e7(0xb0c)](_0x616644[_0x1c86e7(0x969)]('ANOTH'+_0x1c86e7(0x27f)+'MK\x20CO'+_0x1c86e7(0x5fc)+_0x1c86e7(0x367)+_0x1c86e7(0x5a8)+_0x1c86e7(0x47e)+_0x1c86e7(0x791)+_0x1c86e7(0x6a3)+'dkit.'+'\x20The\x20'+_0x1c86e7(0x1a0)+_0x1c86e7(0x2d0)+'\x20arme'+'d\x20was'+'\x20'+(_0x1c86e7(0x3fc)+_0x1c86e7(0xaca)+_0x1c86e7(0x5d5)+_0x1c86e7(0x823)+'ent\x20i'+'nstan'+_0x1c86e7(0x5e6)+'o\x20we\x20'+_0x1c86e7(0x1ad)+_0x1c86e7(0x92d)+_0x1c86e7(0xaa8)+_0x1c86e7(0x5fd)+'\x20obje'+_0x1c86e7(0x291)+'r\x20')+(_0x1c86e7(0xfe)+'ame\x20w'+_0x1c86e7(0xa05)+_0x1c86e7(0x402)+'ne\x20ho'+_0x1c86e7(0x30c)+'\x20it\x20i'+'s\x20orp'+_0x1c86e7(0x200)+_0x1c86e7(0x83f)+_0x1c86e7(0x6e7)+_0x1c86e7(0x2a1)+_0x1c86e7(0x6e4)+'r\x20'),_0x616644['rAsLn']));}}}}}}}}if(_0x49534d!==_0x27c571[_0x51ee94][_0x1c86e7(0xc9)+'onten'+'t'])_0x27c571[_0x51ee94][_0x1c86e7(0xc9)+'onten'+'t']=_0x49534d;}}catch(_0x45538b){}}else{var _0x1ef44e=_0x52633f[_0x1c86e7(0x789)+_0x1c86e7(0x689)+'torAl'+'l']('ifram'+'e');for(var _0x22f81f=0x8*0x143+0x5*-0x50e+0xf2e;_0x22f81f<_0x1ef44e['lengt'+'h'];_0x22f81f++){try{if(_0x1ef44e[_0x22f81f][_0x1c86e7(0x6e3)+_0x1c86e7(0xb12)+_0x1c86e7(0x267)])_0x1ef44e[_0x22f81f][_0x1c86e7(0x6e3)+_0x1c86e7(0xb12)+_0x1c86e7(0x267)][_0x1c86e7(0x27d)+_0x1c86e7(0x273)+'e'](_0x2ef4e3,'*');}catch(_0x4f7f90){}}}}function _0x22b4b5(){var _0x359d17=_0x4ccb6b;try{var _0x1811c3=_0x19a388['FPSco'+_0x359d17(0x259)+_0x359d17(0x64f)];if(!_0x1811c3||!_0x1811c3['ptr'])return null;var _0x4f97b3=_0x616644[_0x359d17(0x859)](_0x5072cf,_0x1811c3[_0x359d17(0x872)],-0x1cb2+-0x3*0xb4d+-0x1*-0x417d,-0x667*0x3+-0x1a34+-0x12*-0x286);return _0x4f97b3?_0x4f97b3[0x13*0xe1+0x5f2*0x5+0x4*-0xb9b]:null;}catch(_0x54c159){return _0x359d17(0x876)==='waOhp'?new _0x46d270(_0x50c0cc['buffe'+'r'],_0x3aeaf7[_0x359d17(0x773)+_0x359d17(0x177)],_0x42ae5e[_0x359d17(0x821)+_0x359d17(0xb7)]):null;}}var _0x28ef66=-0x7*0x10+0x28c*-0xb+0x1*0x1c76+0.5,_0x5de7f7=-0x6*-0xe7+-0x2234+0x1ccb+0.8;function _0x650fb0(_0x1997d8,_0x3037c4){var _0x585f56=_0x4ccb6b,_0x4ef1e8={'kReQV':function(_0x369beb,_0x4246f2){return _0x369beb===_0x4246f2;},'jiyWi':_0x585f56(0x6f7)+_0x585f56(0x1b4)},_0x3e9cfa=null,_0x190bfb=-0x2132+-0x8f9+-0x2a2b*-0x1,_0x1b3339=0x12a1+0x1277*0x2+-0x1af*0x21,_0x372f3e=_0x616644['zzNRt'](_0x3037c4,null)&&_0x616644[_0x585f56(0x9f)](_0x3037c4,undefined)&&_0x616644['TqTvK'](isFinite,_0x3037c4);for(var _0x223d15=0x15cc+0x2321+-0x38ed;_0x223d15<_0x1997d8[_0x585f56(0xc4)+'h'];_0x223d15++){var _0x394728=_0x1997d8[_0x223d15]['v'];if(!_0x394728)continue;if(_0x394728[-0x1b1b+0x7d4+0x1347]===0x962+0x1301*-0x1+0x99f&&_0x394728[0x322+0x2fe+-0x61f]===0x2160+-0x8*-0x6d+-0x499*0x8&&_0x394728[0x78b+0x221+0x1*-0x9aa]===-0x4d*0x5b+-0x257+0x1db6)continue;var _0x397ec2=_0x394728[-0x2*-0x748+-0x5*0x54f+-0x1*-0xbfb]*_0x394728[-0x1b96+-0x2517*0x1+-0x158f*-0x3]+_0x394728[-0x972+-0x1f1a+0x288e]*_0x394728[-0x3*0x9b+-0x568*0x4+0x57*0x45];if(_0x372f3e&&Math[_0x585f56(0x3d2)](_0x394728[-0x29*0xc7+-0x2*-0xef+0x1e02]-_0x3037c4)>_0x28ef66)continue;if(_0x372f3e)_0x1b3339++;if(!_0x3e9cfa||_0x397ec2>_0x190bfb){if(_0x616644['sqKhq']('GnRWv',_0x616644[_0x585f56(0x147)])){var _0x4768d2=_0x5fe14e[_0x585f56(0x158)+'em'](_0x4d7fb6);if(!_0x4768d2)return;var _0xc868a7=_0x5e691f['parse'](_0x4768d2);if(_0xc868a7&&typeof _0xc868a7['x']===_0x616644[_0x585f56(0x2f3)]&&typeof _0xc868a7['y']===_0x585f56(0xa97)+'r')_0x226c34['pos']=_0xc868a7;}else _0x190bfb=_0x397ec2,_0x3e9cfa=_0x1997d8[_0x223d15];}}if(!_0x3e9cfa){if(_0x616644[_0x585f56(0x69e)](_0x616644[_0x585f56(0x8d1)],_0x616644[_0x585f56(0x408)])){var _0x23845a=new _0x1514b9(_0x4ef1e8[_0x585f56(0x7ec)]);_0x23845a[_0x585f56(0x1eb)+_0x585f56(0x66d)]=function(_0xe94111){var _0x4e26d3=_0x585f56,_0x4575b0=_0xe94111[_0x4e26d3(0x76b)];if(_0x4575b0&&_0x4ef1e8[_0x4e26d3(0x1d3)](_0x4575b0[_0x4e26d3(0x675)+'ura'],_0x22a14f)&&_0x4ef1e8['kReQV'](_0x4575b0[_0x4e26d3(0x577)],_0x4e26d3(0x526)))_0x4e14a5(_0x4575b0[_0x4e26d3(0x526)],_0x4575b0[_0x4e26d3(0x4b5)]);};}else{_0x1b3339=0x91*-0x1d+-0x8b*0x1c+0x1fa1*0x1;for(var _0x1abe47=0x142+0x1bda+-0xa2*0x2e;_0x1abe47<_0x1997d8['lengt'+'h'];_0x1abe47++){var _0x310c87=_0x1997d8[_0x1abe47]['v'];if(!_0x310c87)continue;if(_0x310c87[0x1acc+-0x1433*0x1+-0x699]===0x19b1*-0x1+-0x1dec+0x379d&&_0x310c87[0x5*0x9f+-0x27*0xeb+-0x1*-0x20b3]===-0x8da+-0x22d+0x3ad*0x3&&_0x310c87[0x3*-0x821+0x1*0x6cd+-0x233*-0x8]===0x82f+-0x14*-0x1b1+0x2cd*-0xf)continue;var _0x3221d9=_0x616644[_0x585f56(0xd9)](_0x310c87[-0x2b0*0x1+0x1*-0x47b+-0x5*-0x16f],_0x310c87[0x1*-0x3f3+0x140+0x2b3])+_0x310c87[0x1755+-0x1*0x908+-0xe4b*0x1]*_0x310c87[0xd00+-0x22a7+0x1*0x15a9];if(!_0x3e9cfa||_0x3221d9>_0x190bfb){if(_0x616644[_0x585f56(0x32f)](_0x616644[_0x585f56(0x215)],'QRZEf'))_0x190bfb=_0x3221d9,_0x3e9cfa=_0x1997d8[_0x1abe47];else return null;}}}}return{'pos':_0x3e9cfa?_0x3e9cfa['v']:null,'posAt':_0x3e9cfa?_0x3e9cfa['o']:null,'inBand':_0x1b3339,'reach':Math['sqrt'](_0x190bfb)};}function _0x64405e(){var _0x1e66d4=_0x4ccb6b,_0x298b69=_0x19a388[_0x1e66d4(0x1e2)+'ntrol'+_0x1e66d4(0x64f)];if(!_0x298b69||!_0x298b69[_0x1e66d4(0x872)])return null;var _0xfc1926=_0x20a90a[_0x1e66d4(0x1e2)+_0x1e66d4(0x259)+_0x1e66d4(0x64f)]||[],_0x1f602b=[];for(var _0x61cce=-0xc18+-0x5f7+0x120f;_0x616644[_0x1e66d4(0xab4)](_0x61cce,_0xfc1926[_0x1e66d4(0xc4)+'h']);_0x61cce++){if(_0x616644['Gwrug'](_0xfc1926[_0x61cce][0xcbd+0x8f7+0x37*-0x65],'v3'))continue;var _0xf371a2=_0x616644['DnYLp'](_0x5072cf,_0x298b69['ptr'],_0xfc1926[_0x61cce][0x24a9*-0x1+-0x155e+-0x1*-0x3a07],-0x1271*-0x2+-0x7*0x401+-0x2*0x46c);if(_0xf371a2)_0x1f602b[_0x1e66d4(0xb0c)]({'o':'0x'+_0xfc1926[_0x61cce][-0x1065+0x719*-0x2+0x1e97][_0x1e66d4(0x834)+_0x1e66d4(0x873)](0x26bd+0x26c1+-0x2*0x26b7),'v':_0xf371a2});}var _0x45eb50=_0x650fb0(_0x1f602b,null);if(!_0x45eb50['pos'])return null;var _0x308d73=_0x45eb50['pos'];return{'ptr':_0x298b69[_0x1e66d4(0x872)],'feet':_0x308d73,'posAt':_0x45eb50['posAt'],'inBand':_0x45eb50['inBan'+'d'],'eye':[_0x308d73[0x1e08+0x17c2+0x132*-0x2d],_0x616644[_0x1e66d4(0x354)](_0x308d73[-0xc5d+0x11*0x7b+0x433],_0x5de7f7),_0x308d73[0x13*0x9d+0x2c*0xa3+-0x27a9]],'reach':_0x45eb50[_0x1e66d4(0x353)],'pitch':_0x616644[_0x1e66d4(0x933)](_0x5c90fe,_0x298b69[_0x1e66d4(0x872)]+(0x215c+-0x4*0x2c3+-0x14e4),'f32'),'yaw':_0x5c90fe(_0x616644[_0x1e66d4(0x57f)](_0x298b69['ptr'],-0x1a08+0x1fd0+-0x2*0x22c),_0x1e66d4(0x893))};}function _0x26fd12(){var _0x3dfa19=_0x4ccb6b,_0x1e79fa={'gCXht':function(_0x3b49f4,_0x51f247){return _0x616644['oRfiD'](_0x3b49f4,_0x51f247);}};if(_0x616644[_0x3dfa19(0xa88)](_0x616644['PeMba'],_0x3dfa19(0x619))){var _0x53fdc4=_0x64405e(),_0x3c2471=[],_0x2f9c64=_0x1d185b['Photo'+_0x3dfa19(0x410)+'orkSy'+'nc']||{},_0x645928=Object['keys'](_0x2f9c64);for(var _0x247589=0x1282+-0x1b6d+-0x1*-0x8eb;_0x616644['CxAKc'](_0x247589,_0x645928['lengt'+'h'])&&_0x247589<0xbc7+-0x2474+0x18cd;_0x247589++){if(_0x616644['oxDDz'](_0x3dfa19(0x429),_0x616644['hQSam']))_0x23b65c=_0x1e79fa[_0x3dfa19(0xa69)](_0x4fca3c['x'],-0x2*0xdef+-0x17b1+-0x3*-0x127d),_0x2f48e8=_0x1e79fa[_0x3dfa19(0xa69)](_0xe2e5fc['y'],0xa2c+0x489*0x2+-0x2*0x7ab);else{var _0x358184=_0x2f9c64[_0x645928[_0x247589]],_0x3bc061=_0x5072cf(_0x358184[_0x3dfa19(0x872)],-0x2*0x1225+0x1*-0xa37+0x2eb5,-0xd8f*0x2+0x102b*-0x1+0x1*0x2b4c);if(!_0x3bc061||_0x616644[_0x3dfa19(0x550)](_0x3bc061[0x67*0xd+0x19f8+-0x1f33],-0xe*-0x242+-0x1456+0xd*-0xde)&&_0x3bc061[0x1537+-0x2*-0xbd4+-0x2cde]===0xa1*0x19+0x1c67+-0x584*0x8&&_0x616644[_0x3dfa19(0x941)](_0x3bc061[0x893+-0x1f*-0x11e+0x1*-0x2b33],-0x1*0x18c7+0x5d0*-0x3+0x1*0x2a37))continue;var _0x3d396c={'ptr':_0x358184['ptr'],'x':_0x3bc061[0xf*-0x121+-0x2128+0x3217*0x1],'y':_0x3bc061[0x1d3f+-0x15*0x1d3+0x911],'z':_0x3bc061[-0x55d+-0x24b9+0x382*0xc],'team':_0x5c90fe(_0x616644[_0x3dfa19(0xb3)](_0x358184[_0x3dfa19(0x872)],-0x1723+-0x856+-0x2d*-0xb5),_0x616644[_0x3dfa19(0xaa4)]),'localFlag':_0x5c90fe(_0x616644[_0x3dfa19(0x2b3)](_0x358184['ptr'],0x1ba1+-0xc*-0x23d+-0x3601),_0x616644['nuZwp'])};if(_0x53fdc4){var _0x72d5f1=_0x3bc061[0x2*-0xeef+-0x6f3+-0x1d*-0x145]-_0x53fdc4['feet'][-0x77e+-0x9cf+0x1*0x114d],_0x360136=_0x616644[_0x3dfa19(0x7c0)](_0x3bc061[0xf*-0x14f+0xec2+0x1*0x4e1],_0x53fdc4[_0x3dfa19(0x5b4)][0x23f8+-0x4e1*0x8+-0x312*-0x1]);_0x3d396c['d']=Math[_0x3dfa19(0x942)](_0x72d5f1*_0x72d5f1+_0x616644['rwTxw'](_0x360136,_0x360136)),_0x3d396c[_0x3dfa19(0x3aa)+'ng']=Math['atan2'](_0x72d5f1,_0x360136)*(-0x95c*-0x2+0xe4c+0x2*-0x1028)/Math['PI'];}_0x3c2471['push'](_0x3d396c);}}return{'me':_0x53fdc4,'list':_0x3c2471};}else return _0x5d152d['on'];}var _0x4feb87=null;function _0x1e532f(){var _0x4be3a0=_0x4ccb6b,_0x2ef050={'bAzEd':_0x616644[_0x4be3a0(0xa2a)],'HmVAy':'vCWGT'};if(_0x4feb87)return _0x4feb87;try{if(!document[_0x4be3a0(0x388)]||!document['body'][_0x4be3a0(0x49f)+'dChil'+'d'])return null;var _0x3cd2f3=document['creat'+'eElem'+_0x4be3a0(0x89b)]('div');_0x3cd2f3['id']=_0x4be3a0(0x6f7)+_0x4be3a0(0x73f),_0x3cd2f3[_0x4be3a0(0x28c)][_0x4be3a0(0x4bb)+'xt']=_0x616644[_0x4be3a0(0x74b)](_0x616644[_0x4be3a0(0x3c6)](_0x4be3a0(0x255)+_0x4be3a0(0x874)+'ixed;'+_0x4be3a0(0x88c)+':12px'+_0x4be3a0(0x854)+_0x4be3a0(0x5dc)+'z-ind'+_0x4be3a0(0x792)+_0x4be3a0(0x535)+'646;p'+'ointe'+'r-eve'+_0x4be3a0(0x7a4)+_0x4be3a0(0x682),_0x616644[_0x4be3a0(0x326)]),_0x616644[_0x4be3a0(0x6a6)])+('user-'+'selec'+'t:non'+_0x4be3a0(0x319)+'bkit-'+_0x4be3a0(0xa76)+'selec'+'t:non'+'e;'),_0x3cd2f3['inner'+'HTML']='<canv'+'as\x20id'+_0x4be3a0(0x41b)+_0x4be3a0(0x366)+'sp-cv'+_0x4be3a0(0x860)+'th=\x221'+_0x4be3a0(0x693)+_0x4be3a0(0x59d)+'=\x22160'+'\x22\x20sty'+'le=\x22d'+_0x4be3a0(0x2e3)+_0x4be3a0(0x914)+_0x4be3a0(0x962)+_0x4be3a0(0x38b)+_0x4be3a0(0x39a)+_0x616644[_0x4be3a0(0x2b6)];var _0x10aeec={'cv':{'getContext':function(){var _0x5d4b8d=_0x4be3a0,_0x3ebd9a={'yzFVC':_0x2ef050[_0x5d4b8d(0x870)]};return'EufBo'===_0x2ef050[_0x5d4b8d(0x614)]?(_0x4ea41f['sourc'+'e']=_0x3ebd9a[_0x5d4b8d(0x5e8)],_0x3cdd86):null;}},'el':_0x3cd2f3};document[_0x4be3a0(0x388)]['appen'+_0x4be3a0(0x813)+'d'](_0x3cd2f3),_0x4feb87={'el':_0x3cd2f3,'cv':_0x3cd2f3[_0x4be3a0(0x789)+_0x4be3a0(0x689)+_0x4be3a0(0x5b2)](_0x616644[_0x4be3a0(0xa6d)]),'lg':_0x3cd2f3['query'+'Selec'+_0x4be3a0(0x5b2)](_0x4be3a0(0x3f3)+_0x4be3a0(0x96e)+_0x4be3a0(0x636))};if(!_0x4feb87['cv']||!_0x4feb87['cv'][_0x4be3a0(0xf1)+_0x4be3a0(0x47b)])_0x4feb87=_0x10aeec;return _0x4feb87;}catch(_0x355441){if(_0x616644['rMHuB']===_0x4be3a0(0x86f))_0x18181e=_0x616644[_0x4be3a0(0x8a1)](_0x32068b);else return null;}}var _0x3c8045=null;function _0x6e65fb(){var _0x1fcd8d=_0x4ccb6b;if(_0x3c8045)return _0x3c8045;try{if(!document[_0x1fcd8d(0x388)]||!document['body'][_0x1fcd8d(0x49f)+_0x1fcd8d(0x813)+'d'])return null;var _0x5567b7=document[_0x1fcd8d(0x995)+_0x1fcd8d(0x6a5)+_0x1fcd8d(0x89b)]('canva'+'s');return _0x5567b7['id']='sakur'+_0x1fcd8d(0x347)+'es',_0x5567b7['style']['cssTe'+'xt']='posit'+_0x1fcd8d(0x874)+_0x1fcd8d(0x237)+_0x1fcd8d(0x394)+'0;top'+':0;z-'+_0x1fcd8d(0x820)+':2147'+_0x1fcd8d(0x43e)+_0x1fcd8d(0x653)+_0x1fcd8d(0x710)+_0x1fcd8d(0x9d1)+'s:non'+'e;',document['body'][_0x1fcd8d(0x49f)+_0x1fcd8d(0x813)+'d'](_0x5567b7),_0x3c8045={'cv':_0x5567b7},_0x3c8045;}catch(_0x372af0){return null;}}function _0x45c421(_0x3b4c6a){var _0x2a2d53=_0x4ccb6b,_0x234ab4={'kBDYv':function(_0x3afdc3,_0x451b08){return _0x3afdc3(_0x451b08);}};try{var _0x2166ee=Math[_0x2a2d53(0x95d)](0x6f4*0x2+0x8*0x303+-0x25ff,window['inner'+'Width']||document['docum'+'entEl'+_0x2a2d53(0x77a)]['clien'+'tWidt'+'h']||0x2*-0xc84+0x1f55+-0x64d),_0x4db078=Math[_0x2a2d53(0x95d)](-0x46e*-0x4+0x2003+-0x31ba,window['inner'+_0x2a2d53(0x2dc)+'t']||document[_0x2a2d53(0x1e3)+_0x2a2d53(0x2c6)+_0x2a2d53(0x77a)][_0x2a2d53(0x69d)+'tHeig'+'ht']||-0x3*-0x706+0x4*-0x8c6+-0xa*-0x167);if(_0x616644[_0x2a2d53(0x728)](_0x3b4c6a['cv']['width'],_0x2166ee)||_0x616644[_0x2a2d53(0x3a7)](_0x3b4c6a['cv']['heigh'+'t'],_0x4db078)){if('sxWHH'===_0x616644[_0x2a2d53(0xa36)])try{_0x52cc80[_0x2a2d53(0x7b3)][_0x2a2d53(0x25d)+'ed']=![];}catch(_0x359f08){}else _0x3b4c6a['cv'][_0x2a2d53(0x398)]=_0x2166ee,_0x3b4c6a['cv'][_0x2a2d53(0x629)+'t']=_0x4db078;}return{'w':_0x2166ee,'h':_0x4db078};}catch(_0x1215d2){if(_0x2a2d53(0x3c7)===_0x616644['dnnrl']){_0x158901(_0x2fac4f[_0x2a2d53(0x74a)]);try{var _0x2c1f70=_0x2d1153['inner'+'Heigh'+'t']||0x2006+0x15f3+-0x32d9;if(_0x2c1f70<-0x10*0x1ea+-0x1735*-0x1+0x9d7)_0x234ab4['kBDYv'](_0x24c985,![]);}catch(_0x308d4c){}}else return{'w':0x0,'h':0x0};}}function _0x5be811(_0x37aee9){var _0x1c3f5d=_0x4ccb6b,_0x3b0c91={'ZIINY':function(_0x3c3d8a,_0x357252){return _0x3c3d8a+_0x357252;},'OmwxA':_0x616644[_0x1c3f5d(0x687)],'kWXJp':'\x20·\x20fo'+'v\x20'};if(_0x616644[_0x1c3f5d(0x2cb)]===_0x616644['gXbBw']){var _0x461f3c=_0x3c8045;if(!_0x461f3c)return;var _0x526385=_0x461f3c['cv'][_0x1c3f5d(0xf1)+'ntext']&&_0x461f3c['cv'][_0x1c3f5d(0xf1)+'ntext']('2d');if(!_0x526385)return;var _0x464d89=_0x616644['Qcqfi'](_0x45c421,_0x461f3c);_0x526385['clear'+_0x1c3f5d(0x12e)](-0xc2*0x28+0x454*-0x7+0x50d*0xc,0x103c+0x5c2+0x466*-0x5,_0x464d89['w'],_0x464d89['h']);if(!_0x2b6a93[_0x1c3f5d(0x64a)]||!_0x37aee9||!_0x37aee9['me'])return;var _0x240773=_0x37aee9['me'],_0x7cd9b2=null,_0x3685c0=_0x1d185b[_0x1c3f5d(0x3e9)+_0x1c3f5d(0x410)+_0x1c3f5d(0x9c0)+'nc']||{},_0xe3010b=Object['keys'](_0x3685c0);for(var _0x17fb77=0xd5c+-0x1*0x2163+0x1*0x1407;_0x616644[_0x1c3f5d(0x5e3)](_0x17fb77,_0xe3010b[_0x1c3f5d(0xc4)+'h']);_0x17fb77++){var _0x244870=_0x5072cf(_0x3685c0[_0xe3010b[_0x17fb77]][_0x1c3f5d(0x872)],-0x264c+-0x1368+-0x6d*-0x88,0x150b*0x1+0x9ad+-0x1eb5);if(_0x244870&&_0x244870[-0x1*0x175e+0x1136*-0x2+-0x1ce5*-0x2]===0x17a5+-0x1743+-0x62&&_0x244870[0x5*0x683+-0x2d*0x35+0x173d*-0x1]===0x16a7+-0x1901*-0x1+-0xa*0x4c4&&_0x616644[_0x1c3f5d(0x65b)](_0x244870[0x1759+-0x1*-0x2467+-0x3bbe],-0x24b8+-0x1631+-0x1*-0x3ae9)){_0x7cd9b2=_0x616644['LeCbK'](_0x5c90fe,_0x616644['iOoRw'](_0x3685c0[_0xe3010b[_0x17fb77]][_0x1c3f5d(0x872)],-0x2c*0x85+0x4*-0x895+-0x38*-0x107),_0x616644['nuZwp']);break;}}for(var _0x4030c4=-0x1e6d+-0x19bb*-0x1+-0x259*-0x2;_0x4030c4<_0x37aee9['list'][_0x1c3f5d(0xc4)+'h'];_0x4030c4++){var _0x59af1a=_0x37aee9['list'][_0x4030c4],_0x4e64fd=_0x616644['VtyvJ'](_0x7cd9b2,null)&&_0x59af1a['team']===_0x7cd9b2,_0x13dd62=_0x101477(_0x240773['eye'],[_0x59af1a['x'],_0x616644['QEArC'](_0x59af1a['y'],-0x8d0+-0x5c1+0xe92),_0x59af1a['z']],_0x464d89['w'],_0x464d89['h']),_0x47b345=_0x101477(_0x240773['eye'],[_0x59af1a['x'],_0x616644['OiakF'](_0x59af1a['y'],0x279*-0x2+0x77d+0x5d*-0x7+0.8),_0x59af1a['z']],_0x464d89['w'],_0x464d89['h']);if(!_0x13dd62||!_0x47b345)continue;var _0x6797d5=Math[_0x1c3f5d(0x681)](_0x13dd62['x'],_0x47b345['x']),_0x1e4b2b=Math[_0x1c3f5d(0x95d)](_0x13dd62['x'],_0x47b345['x']),_0x33913a=Math[_0x1c3f5d(0x681)](_0x13dd62['y'],_0x47b345['y']),_0x12afc4=Math['max'](_0x13dd62['y'],_0x47b345['y']),_0x160c01=Math[_0x1c3f5d(0x95d)](-0x315*0x7+0xa2e*-0x2+0x29f2,Math['min'](-0x1a2d*-0x1+0x7*-0x29d+-0x7a6*0x1,_0x616644['OYEkv'](_0x1e4b2b,_0x6797d5))),_0x5d4d57=Math[_0x1c3f5d(0x95d)](0x1*-0x25cd+-0x1*0x2103+0x46d6,Math[_0x1c3f5d(0x681)](0x65e*-0x1+0x10*-0xb+-0x79a*-0x1,_0x616644['djiHh'](_0x12afc4,_0x33913a))),_0x527d3f=_0x616644[_0x1c3f5d(0xde)](_0x6797d5+_0x1e4b2b,-0x1*0x1083+0x1d2e+-0xca9),_0x67d81c=_0x616644['nNXNg'](_0x33913a,_0x12afc4)/(0x220f*-0x1+-0x12ec+0x5*0xa99);_0x526385[_0x1c3f5d(0x15b)+'eStyl'+'e']=_0x4e64fd?'rgba('+'79,14'+'3,106'+',.9)':_0x1c3f5d(0x22b)+_0x1c3f5d(0x4b0)+'10,11'+_0x1c3f5d(0xe6)+')',_0x526385[_0x1c3f5d(0x845)+'idth']=_0x4e64fd?-0x28d*-0x1+-0x1aaf+0x1823:0x1309+0x966+-0x1c6d,_0x526385['strok'+'eRect'](_0x616644[_0x1c3f5d(0x84d)](_0x527d3f,_0x160c01/(0xe3*0x1d+0x1*0xe59+-0x3*0xd5a)),_0x67d81c-_0x5d4d57/(-0x14a8+0x1*-0x170a+-0x4*-0xaed),_0x160c01,_0x5d4d57);if(!_0x4e64fd){if(_0x616644[_0x1c3f5d(0x2ed)]===_0x616644['ipmzt'])_0x526385['fillS'+'tyle']='rgba('+_0x1c3f5d(0x4b0)+_0x1c3f5d(0x7b4)+_0x1c3f5d(0xe6)+')',_0x526385['font']=_0x616644[_0x1c3f5d(0x2e2)],_0x526385[_0x1c3f5d(0xa9c)+_0x1c3f5d(0x518)](Math['round'](_0x59af1a['d']||0xcb*-0x19+-0x20fc+0x34cf*0x1)+'m',_0x616644['eBoAx'](_0x527d3f,_0x160c01/(0x1a56*-0x1+0x15d1+-0x1*-0x487)),_0x67d81c-_0x5d4d57/(-0xdc6+-0x2517+0x32df)-(-0x7a*0x1d+0x4*-0x49d+-0xf*-0x227));else{var _0x93a2e2=_0x49a933[_0x82819d];for(var _0x59426b=0x237f+-0xc89+-0x16f6;_0x616644['WweiY'](_0x59426b,_0x93a2e2[_0x1c3f5d(0xc4)+'h']);_0x59426b++){_0x574a40[_0x616644['sSElo'](_0x616644[_0x1c3f5d(0x3a4)](_0x228b27,_0x616644[_0x1c3f5d(0x793)]),_0x93a2e2[_0x59426b]['o']['toStr'+_0x1c3f5d(0x873)](-0x14b*-0x11+0x1c62*-0x1+0x677))]=_0x93a2e2[_0x59426b]['v'];}}}}}else _0x56c06a['lg'][_0x1c3f5d(0xc9)+_0x1c3f5d(0x4e9)+'t']=_0x3b0c91[_0x1c3f5d(0xee)](_0x3b0c91[_0x1c3f5d(0xee)](_0x3b0c91['OmwxA']+_0x13b396+_0x1c3f5d(0x4fb)+_0x2f61a4['round'](_0x1efda8[_0x1c3f5d(0x3fe)])+'m',_0x15b37e['boxes']?_0x3b0c91['kWXJp']+_0x2081c4[_0x1c3f5d(0x799)](_0x42243d[_0x1c3f5d(0x11d)])+'°':''),_0x56728!==null?'\x20·\x20te'+'am'+_0x23d464:'');}function _0x1dd863(){var _0x2cdb45=_0x4ccb6b,_0x2667c5={'JuyVm':_0x2cdb45(0x1a0)+_0x2cdb45(0x462)+'solve'+'Game('+')'},_0x389ef8=_0x1e532f();if(!_0x389ef8||!_0x389ef8['cv'])return;try{var _0x5dca3e=_0x389ef8['cv'][_0x2cdb45(0xf1)+_0x2cdb45(0x47b)]&&_0x389ef8['cv'][_0x2cdb45(0xf1)+_0x2cdb45(0x47b)]('2d');if(!_0x5dca3e)return;var _0x5813c7=_0x389ef8['cv'][_0x2cdb45(0x398)],_0x2ae956=_0x616644[_0x2cdb45(0x8d0)](_0x5813c7,-0x1*0x1e2b+0x1e3a+-0xd),_0x24d0da=_0x616644['RQqeV'](_0x26fd12),_0x4ee472=_0x24d0da['me'];_0x5dca3e['clear'+_0x2cdb45(0x12e)](-0x18bb+0x683*0x3+0x13*0x46,-0x1*-0x1a22+0x19c5*-0x1+-0x5d,_0x5813c7,_0x5813c7),_0x5dca3e['strok'+_0x2cdb45(0xc5)+'e']=_0x2cdb45(0x22b)+_0x2cdb45(0x4b0)+'43,17'+_0x2cdb45(0x9bc)+')',_0x5dca3e[_0x2cdb45(0x845)+_0x2cdb45(0x84b)]=0x22ad+0x1549+0x1*-0x37f5;for(var _0x447a62=0xf4b+-0x177a*0x1+0x830;_0x447a62<=0x3d9*-0x1+-0x35f*0x1+0x73b*0x1;_0x447a62++){_0x5dca3e['begin'+'Path'](),_0x5dca3e[_0x2cdb45(0x648)](_0x2ae956,_0x2ae956,(_0x2ae956-(0x85f+0x236f+-0x15e5*0x2))*_0x447a62/(-0x2*0x8b5+0xe42+-0x1*-0x32b),-0x1*0x151c+0x1*0x15a5+-0x89*0x1,Math['PI']*(0x4f1*0x3+0x26*-0x47+0x5*-0xdb)),_0x5dca3e[_0x2cdb45(0x15b)+'e']();}_0x5dca3e['begin'+'Path'](),_0x5dca3e[_0x2cdb45(0x979)+'o'](0x2387+0x2301+-0x4684,_0x2ae956),_0x5dca3e[_0x2cdb45(0x81d)+'o'](_0x616644[_0x2cdb45(0x6c0)](_0x5813c7,-0x11*0xed+-0xba9+-0x16*-0x13f),_0x2ae956),_0x5dca3e[_0x2cdb45(0x979)+'o'](_0x2ae956,0x20f2+0x10c*-0x25+-0x1*-0x5ce),_0x5dca3e[_0x2cdb45(0x81d)+'o'](_0x2ae956,_0x616644['RCtQS'](_0x5813c7,0x6f0*-0x4+-0x36d*0xb+0x5*0xd17)),_0x5dca3e['strok'+'e']();if(!_0x4ee472){if(_0x616644[_0x2cdb45(0x77e)]===_0x616644[_0x2cdb45(0x77e)]){if(_0x389ef8['lg'])_0x389ef8['lg']['textC'+'onten'+'t']='';return;}else{var _0x2cd978=_0x94e2f7['resol'+_0x2cdb45(0x66b)+'e']();if(_0x2cd978)return _0x17c9c9[_0x2cdb45(0x7eb)+'e']=_0x2667c5['JuyVm'],_0x2cd978;}}var _0xf48665=_0x616644['ruoYO'](_0x616644[_0x2cdb45(0xb6)](_0x2ae956,-0x2*-0x293+-0x1139*-0x2+-0x2792),_0x2b6a93[_0x2cdb45(0x3fe)]),_0xa4ba5f=null,_0x3c7add=_0x1d185b[_0x2cdb45(0x3e9)+'nNetw'+_0x2cdb45(0x9c0)+'nc']||{},_0x56f39a=Object['keys'](_0x3c7add);for(var _0x3f573b=0x1*-0x13e9+-0x1d47+0x3130;_0x616644['wjVMd'](_0x3f573b,_0x56f39a['lengt'+'h']);_0x3f573b++){if('sDkuH'!==_0x2cdb45(0xa82))_0x103178(_0x5c8b88);else{var _0x237909=_0x5072cf(_0x3c7add[_0x56f39a[_0x3f573b]][_0x2cdb45(0x872)],-0x7c7+0xbfc+0x19*-0x29,0x163d+0x22d1+-0x390b);if(_0x237909&&_0x237909[0x9b*0x22+0x4*-0x70f+0x7a6]===-0xce*0x29+-0x1*0x1dc5+0x3ec3&&_0x237909[0x1f*0x11+-0x250c+0x22fe]===0x6c5+0x1d95*0x1+-0x245a&&_0x616644['VspAG'](_0x237909[-0x4ef*0x1+-0x2b*-0xd6+-0x1f01*0x1],-0x1c46+0x15a*-0x2+0x1efa)){_0xa4ba5f=_0x5c90fe(_0x616644[_0x2cdb45(0x7d8)](_0x3c7add[_0x56f39a[_0x3f573b]][_0x2cdb45(0x872)],0x263a+-0x58*0x71+-0x29*-0x6),_0x2cdb45(0x3ad));break;}}}var _0xeb321c=-0x1*0xb75+0x65a*-0x1+0x1*0x11cf;for(var _0xcde94f=0x3c3+-0x2218+0x1e55;_0xcde94f<_0x24d0da['list'][_0x2cdb45(0xc4)+'h'];_0xcde94f++){var _0x29892e=_0x24d0da[_0x2cdb45(0x235)][_0xcde94f],_0x25db00=_0x616644[_0x2cdb45(0x645)](_0x29892e['x']-_0x4ee472[_0x2cdb45(0x5b4)][0x1f86+-0x2c7+0x21*-0xdf],_0xf48665),_0x5e429b=(_0x29892e['z']-_0x4ee472[_0x2cdb45(0x5b4)][-0xd36+0x361+0x9d7])*_0xf48665,_0x2e31de=Math['sqrt'](_0x616644[_0x2cdb45(0x9e6)](_0x25db00*_0x25db00,_0x5e429b*_0x5e429b)),_0x2d1ae2=_0x2ae956,_0x55ca38=_0x2ae956;_0x2e31de>_0x2ae956-(-0x21*0x7+0x6e0*-0x4+0x1c6d)?(_0x2d1ae2=_0x616644['pVttl'](_0x2ae956,_0x616644['eIUFt'](_0x25db00,_0x2e31de)*(_0x2ae956-(-0x2*-0xc5f+0x1eac+-0x2c5*0x14))),_0x55ca38=_0x2ae956+_0x5e429b/_0x2e31de*(_0x2ae956-(0x2*-0x95f+0x1*-0x853+0x1b17))):(_0x2d1ae2=_0x616644['sthlm'](_0x2ae956,_0x25db00),_0x55ca38=_0x2ae956+_0x5e429b);var _0x29bb2f=_0x616644['Gwrug'](_0xa4ba5f,null)&&_0x29892e[_0x2cdb45(0x8af)]===_0xa4ba5f;_0x5dca3e['fillS'+'tyle']=_0x29bb2f?_0x616644['lRFTs']:_0x2cdb45(0xa20)+'74',_0x5dca3e[_0x2cdb45(0x598)+'Path'](),_0x5dca3e['arc'](_0x2d1ae2,_0x55ca38,_0x29bb2f?-0x3*0x205+-0xf3d+0x154e:-0x498*0x1+0x1b8d+0xb79*-0x2+0.20000000000000018,-0xb*0x82+0x7b4+0x2*-0x10f,_0x616644['elGWu'](Math['PI'],-0x1*0x10af+0x2199+-0x8*0x21d)),_0x5dca3e[_0x2cdb45(0xb19)](),_0xeb321c++;}_0x5dca3e[_0x2cdb45(0xb05)+'tyle']=_0x2cdb45(0x6bd)+'a8',_0x5dca3e[_0x2cdb45(0x598)+_0x2cdb45(0xeb)](),_0x5dca3e[_0x2cdb45(0x648)](_0x2ae956,_0x2ae956,-0x23a1+-0x199+0x253d,-0x26e5+0x223e+0x1*0x4a7,Math['PI']*(0x34b+0xb*0x1c1+-0x1694)),_0x5dca3e[_0x2cdb45(0xb19)](),_0x389ef8['lg']&&(_0x389ef8['lg'][_0x2cdb45(0xc9)+'onten'+'t']=_0x616644[_0x2cdb45(0x945)](_0x616644[_0x2cdb45(0x687)]+_0xeb321c+_0x616644[_0x2cdb45(0xcd)]+Math['round'](_0x2b6a93[_0x2cdb45(0x3fe)])+'m',_0x2b6a93[_0x2cdb45(0x64a)]?_0x616644['GivnV'](_0x2cdb45(0x3b3)+'v\x20'+Math[_0x2cdb45(0x799)](_0x299fc0[_0x2cdb45(0x11d)]),'°'):'')+(_0xa4ba5f!==null?_0x616644['YzQoS']+_0xa4ba5f:''));}catch(_0x58344a){}}function _0x3ea2ce(){var _0x15f315=_0x4ccb6b,_0x56b725=_0x1d185b['Photo'+'nNetw'+_0x15f315(0x9c0)+'nc']||{};if(!Object[_0x15f315(0x1b3)](_0x56b725)[_0x15f315(0xc4)+'h'])return![];return!!_0x616644[_0x15f315(0x2d6)](_0x64405e);}function _0x246b65(_0x50e4de){var _0x1c07b9=_0x4ccb6b;try{var _0x2f5edb=_0x4feb87;if(_0x2f5edb&&_0x2f5edb['el'])_0x2f5edb['el'][_0x1c07b9(0x28c)]['displ'+'ay']=_0x50e4de?'':_0x1c07b9(0xa71);var _0x222cc0=_0x3c8045;if(_0x222cc0&&_0x222cc0['cv'])_0x222cc0['cv']['style']['displ'+'ay']=_0x50e4de?'':_0x1c07b9(0xa71);}catch(_0x2718e8){}}function _0x2f0d9a(){var _0x47fa77=_0x4ccb6b;if(!_0x2b6a93['on']||!_0x3ea2ce()){_0x616644['QeDby'](_0x246b65,![]),_0x616644[_0x47fa77(0x35d)](setTimeout,_0x2f0d9a,-0x1a4+0x151*0x3+0x3*-0x61);return;}_0x246b65(!![]),_0x1e532f();if(_0x2b6a93['boxes'])_0x6e65fb();var _0x355cb8=null;try{_0x355cb8=_0x26fd12();}catch(_0x80f7ab){}try{_0x1dd863();}catch(_0x4a98ae){}try{_0x616644['iFyFo']!==_0x616644[_0x47fa77(0x265)]?_0x616644['pOuVt'](_0x5be811,_0x355cb8):(_0x7c4f86[_0x47fa77(0x64a)]=_0x3705cf,_0x3bb88c['on']=!![],_0x5ba289());}catch(_0x53dd6b){}setTimeout(_0x2f0d9a,0x22ab+-0x10*0x91+0x1969*-0x1);}function _0x27b125(){var _0x53df7c=_0x4ccb6b,_0x491618={'AcYxa':function(_0x27bd7f,_0x3d7d5d){return _0x27bd7f!==_0x3d7d5d;},'awyXJ':_0x616644[_0x53df7c(0x77d)],'PTWRa':function(_0x1d9e07,_0x4b4d4c){return _0x1d9e07+_0x4b4d4c;},'jTRVH':function(_0x45cd12,_0x4a586d){return _0x45cd12/_0x4a586d;},'AYIdz':function(_0x4b2b77,_0x12c739){return _0x616644['iwfiB'](_0x4b2b77,_0x12c739);},'YawQd':function(_0x5dd2fb,_0x319744){return _0x5dd2fb<=_0x319744;}},_0x52ea52=window[_0x53df7c(0x791)+_0x53df7c(0x6a3)+'dkit']&&window['Unity'+_0x53df7c(0x6a3)+_0x53df7c(0x6b3)][_0x53df7c(0x1a0)+'me']||null,_0x737d9c=_0x52ea52&&_0x52ea52[_0x53df7c(0x2f5)+_0x53df7c(0x8b1)+'ext'],_0x17c1b8=_0x737d9c&&_0x737d9c[_0x53df7c(0x24e)+_0x53df7c(0x895)],_0x60772d={},_0x474066=[];for(var _0x18294e in _0x19a388){if(_0x53df7c(0xa9a)!==_0x53df7c(0x1f0)){_0x60772d[_0x18294e]=_0x616644[_0x53df7c(0x55e)]('0x',_0x19a388[_0x18294e]['ptr'][_0x53df7c(0x834)+'ing'](-0x5*-0x10c+0x1e9*-0x1+-0x343));if(_0x19a388[_0x18294e]['repla'+_0x53df7c(0x5da)])_0x474066['push'](_0x18294e);}else _0x16916c[_0x53df7c(0xb0c)]({'o':_0x4f7b66[_0x1bf6ca][_0x53df7c(0x9ca)+'rs'][_0x4fabd2]['o'],'v':_0x2f8050[_0x55cdae]['membe'+'rs'][_0x55ddff]['v'],'why':_0x616644['ZjAza']});}var _0x465b00={};for(var _0x25bd67 in _0x19a388)_0x465b00[_0x25bd67]=_0x550904(_0x19a388[_0x25bd67]['ptr']);var _0x234450={},_0x1ef877=null;try{_0x234450=_0x32b88a();}catch(_0x482ca6){_0x1ef877=_0x616644[_0x53df7c(0x932)](String,_0x482ca6&&_0x482ca6['messa'+'ge']||_0x482ca6);}var _0x533471={'version':_0x143793,'when':new Date()[_0x53df7c(0x78c)+_0x53df7c(0x400)+'g'](),'elapsedMs':Date[_0x53df7c(0x976)]()-_0x246d5b,'frame':location[_0x53df7c(0xae)][_0x53df7c(0x87a)](-0x4*0x425+-0x264b+0xb*0x4fd,0x1030+-0xa6f+-0x549),'host':_0x3cbf7b,'frameRole':_0x3f86d7,'uwmk':!!_0x52ea52,'il2CppContext':!!_0x737d9c,'typeCount':_0x17c1b8?Object[_0x53df7c(0x1b3)](_0x17c1b8)['lengt'+'h']:null,'arm':_0xf5d7fd,'assemblies':_0x188b81,'hooksTotal':_0xbf6b9a[_0x53df7c(0xc4)+'h'],'hooksApplied':_0x2b9d71(),'hooksResolved':_0x616644[_0x53df7c(0x583)](_0x2ab637),'hooksRegisteredAtArm':_0xf5d7fd[_0x53df7c(0x940)+'Regis'+_0x53df7c(0x38d)]||0x95a+-0x1*0x1b16+0x11bc,'hookErrors':_0xd2b6ff[_0x53df7c(0x87a)](-0xea5+-0x22f7*-0x1+-0x1452,0x2680+-0xccb+-0x1*0x19ad),'instances':_0x60772d,'classNames':_0x465b00,'instancesReplaced':_0x474066,'hookFireProof':_0x4213bb,'survey':_0x234450,'actkKeys':_0x133445,'surveyRows':Object[_0x53df7c(0x1b3)](_0x234450)[_0x53df7c(0xa3b)+'e'](function(_0x327e1a,_0x40baae){var _0x47de17=_0x53df7c;if(_0x491618[_0x47de17(0x522)](_0x491618['awyXJ'],_0x47de17(0xa7e)))return _0x491618['PTWRa'](_0x327e1a,_0x234450[_0x40baae]['lengt'+'h']);else{_0x3b8265['preve'+_0x47de17(0x806)+_0x47de17(0x8a8)](),_0x14b203(_0x47de17(0xa38)+_0x47de17(0x24a));return;}},0x2084+-0x8bd+0x17c7*-0x1),'reads':{'ok':_0x444a2f['ok'],'failed':_0x444a2f['faile'+'d'],'lastError':_0x444a2f['lastE'+_0x53df7c(0x2e0)],'source':_0x444a2f[_0x53df7c(0x7eb)+'e']},'identity':_0x515089(),'globals':_0x616644[_0x53df7c(0x6d6)](_0x28b98e),'wasmMemory':{'captured':!!_0x4b55b6,'atMs':_0x353db4,'bytes':(function(){var _0x16a65f=_0x53df7c;try{return _0x4b55b6&&_0x4b55b6[_0x16a65f(0x14d)+'r']?_0x4b55b6['buffe'+'r'][_0x16a65f(0x821)+'ength']:-0x1e19+-0xcec+0x2b05;}catch(_0xd5ccc9){return 0xa6+0x11b3+-0x7*0x29f;}}()),'exportKeys':_0x440a52},'diff':_0x1daa64[_0x53df7c(0x87a)](-0x298+-0x1*0x13a5+0x163d*0x1,0x6b*0x3+0xb96+-0x1*0xcaf),'speed':{'on':_0x5ecc68['on'],'factor':_0x5ecc68['facto'+'r'],'writes':_0x207f7e,'scaled':_0x4529f1['slice'](0x2297+-0x1f55+-0x3*0x116,-0x32*0x96+0xb24+-0x58*-0x35),'skipped':_0x447df4[_0x53df7c(0x87a)](0x3*-0x809+-0xd6b+0x641*0x6,-0x332+0x89*0x47+-0x22bd)},'esp':_0x51bbb1(),'view':_0x616644[_0x53df7c(0x769)](_0x4c0eed),'angles':(function(){var _0x3b3178=_0x53df7c,_0x107311=_0x409e34(),_0x3201cf=null,_0x4fe36a=null,_0x5cc428=_0x64405e();if(_0x5cc428){var _0x5251e7=_0x101477(_0x5cc428['eye'],[_0x5cc428[_0x3b3178(0x649)][-0x2643+0x1b3b+0x2*0x584],_0x5cc428[_0x3b3178(0x649)][0x1*0x81+-0x352+0x1*0x2d2],_0x5cc428[_0x3b3178(0x649)][-0x16*0x3f+-0x1528+-0x7*-0x3cc]+(0x28d*0x9+-0x1*-0x10e5+-0x27d9)],-0x159*-0x4+0x1429+-0x15a5,-0x1f*0x74+-0x19*-0x89+0x493);_0x5251e7&&(_0x3201cf=_0x5251e7['x']/(-0x1b06+0x2e1*0xb+-0xbd),_0x4fe36a=_0x491618[_0x3b3178(0xada)](_0x5251e7['y'],0xb1*0x2b+-0x2*0xe3b+-0x4b*-0x9));}return{'identified':_0x54f170['ident'+'ified'],'why':_0x54f170['why'],'rawPitch':_0x54f170['pitch'],'rawYaw':_0x54f170['yaw'],'fov':_0x299fc0[_0x3b3178(0x11d)],'fovSane':_0x491618[_0x3b3178(0x107)](_0x299fc0[_0x3b3178(0x11d)],-0x18eb+0xd71+0xbb6)&&_0x491618[_0x3b3178(0xaf9)](_0x299fc0[_0x3b3178(0x11d)],0x228b+-0x49f*0x1+-0x1d7e),'centreX':_0x3201cf,'centreY':_0x4fe36a};}()),'fov':_0x299fc0[_0x53df7c(0x11d)],'espView':{'on':_0x2b6a93['on'],'boxes':_0x2b6a93[_0x53df7c(0x64a)],'span':_0x2b6a93['span']},'local':(function(){var _0x128767=_0x53df7c,_0xad5236=_0x64405e();if(!_0xad5236)return null;return{'ptr':'0x'+_0xad5236[_0x128767(0x872)]['toStr'+'ing'](0x1e5f+-0xcd*-0x21+0x1c5e*-0x2),'feet':_0xad5236[_0x128767(0x5b4)],'eye':_0xad5236[_0x128767(0x649)],'posAt':_0xad5236[_0x128767(0x944)],'eyeHeight':_0x5de7f7,'pitch':_0xad5236[_0x128767(0x5e7)],'yaw':_0xad5236['yaw'],'reach':_0xad5236['reach']};}()),'uwmkLog':_0x2c41cf['slice'](-0x26b3*0x1+-0x811+-0x49*-0xa4,-0xa*-0x14b+-0x238f+-0x16b5*-0x1),'warnings':[]};if(_0x1ef877)_0x533471['warni'+_0x53df7c(0x92e)]['push'](_0x616644[_0x53df7c(0xb10)]('surve'+_0x53df7c(0x1be)+'led:\x20',_0x1ef877));if(_0xf5d7fd['error'])_0x533471[_0x53df7c(0xd3)+_0x53df7c(0x92e)]['push'](_0x53df7c(0x6e2)+'armin'+_0x53df7c(0x9a2)+_0x53df7c(0x23d)+_0xf5d7fd[_0x53df7c(0x546)]);if(_0x616644['Qygbz'](_0x533471['surve'+'yRows'],-0x25ee+0x268a+0xd*-0xc)&&_0x616644[_0x53df7c(0xb0b)](Object[_0x53df7c(0x1b3)](_0x533471[_0x53df7c(0x198)+'nces'])[_0x53df7c(0xc4)+'h'],-0x1334+-0x1d95*-0x1+-0xa61)){if(_0x616644['YobGO']===_0x616644[_0x53df7c(0x889)]){var _0x5d76b8=_0x616644[_0x53df7c(0x640)][_0x53df7c(0xad1)]('|'),_0x57f1bf=-0x14d0+0xe3*0x23+-0xa39;while(!![]){switch(_0x5d76b8[_0x57f1bf++]){case'0':if(!_0x46ba10)return;continue;case'1':if(_0x2ea74e['open']){_0x2f5d82(_0x1ed5c9[_0x53df7c(0x74a)]);try{var _0x23b05c=_0x3cf55a['inner'+'Heigh'+'t']||0x57d+-0x2223*0x1+0x1fc6;if(_0x23b05c<0x1a29+0xe40+-0x25fd)_0x616644['YyNMZ'](_0x2a5fc2,![]);}catch(_0x5b238e){}}continue;case'2':if(_0x316cd9['petal'])_0x374653['petal']['style']['opaci'+'ty']=_0x33268d[_0x53df7c(0x305)]?'1':'.5';continue;case'3':_0x159136[_0x53df7c(0x305)]=!!_0x4aba9b;continue;case'4':var _0x46ba10=_0x308791();continue;case'5':_0x46ba10['class'+_0x53df7c(0x1a9)]=_0x53df7c(0xa62)+'nel'+(_0x14ca3b[_0x53df7c(0x305)]?_0x616644['UMwRk']:'');continue;}break;}}else _0x533471[_0x53df7c(0xd3)+_0x53df7c(0x92e)][_0x53df7c(0xb0c)](_0x616644[_0x53df7c(0x20c)](_0x616644[_0x53df7c(0x9ce)]+Object[_0x53df7c(0x1b3)](_0x533471[_0x53df7c(0x198)+_0x53df7c(0x121)])[_0x53df7c(0xc4)+'h'],_0x616644['XnpKV'])+(_0x444a2f[_0x53df7c(0x776)+_0x53df7c(0x2e0)]?_0x616644[_0x53df7c(0x4ce)](_0x616644[_0x53df7c(0x67f)],_0x444a2f[_0x53df7c(0x776)+_0x53df7c(0x2e0)]):'No\x20re'+_0x53df7c(0x5be)+_0x53df7c(0x4c8)+'\x20so\x20e'+'very\x20'+'offse'+_0x53df7c(0x9b1)+_0x53df7c(0x7c6)+_0x53df7c(0x9d9)+_0x53df7c(0xa39)+'e.'));}_0x533471[_0x53df7c(0x4d3)+_0x53df7c(0x692)]&&_0x533471['ident'+'ity'][_0x53df7c(0x818)+_0x53df7c(0x457)]===![]&&(_0x616644[_0x53df7c(0x6c8)]==='MTMtL'?_0x533471[_0x53df7c(0xd3)+'ngs']['push'](_0x616644[_0x53df7c(0xa24)]('ANOTH'+_0x53df7c(0x27f)+_0x53df7c(0x392)+_0x53df7c(0x5fc)+_0x53df7c(0x367)+_0x53df7c(0x5a8)+_0x53df7c(0x47e)+'Unity'+'WebMo'+_0x53df7c(0x385)+_0x53df7c(0xaef)+'Runti'+_0x53df7c(0x2d0)+'\x20arme'+'d\x20was'+'\x20','repla'+_0x53df7c(0xaca)+'y\x20a\x20d'+'iffer'+'ent\x20i'+_0x53df7c(0x4ef)+_0x53df7c(0x5e6)+'o\x20we\x20'+'are\x20a'+_0x53df7c(0x92d)+_0x53df7c(0xaa8)+_0x53df7c(0x5fd)+_0x53df7c(0x4fe)+_0x53df7c(0x291)+'r\x20')+_0x616644[_0x53df7c(0x14c)]+_0x616644['rAsLn']):(_0x3d8179[_0x53df7c(0xc9)+_0x53df7c(0x4e9)+'t']=_0x1c5c18>-0x1*-0xa27+0x1e34*0x1+-0x1*0x285b?_0x53df7c(0x782)+_0x53df7c(0x55f)+_0x4aa3b2+(_0x37ba1b?_0x616644[_0x53df7c(0x8d7)](_0x616644[_0x53df7c(0x7c2)],_0x1b65e4)+'\x20bots':'')+(_0x3ac10a&&_0x1e4b09[_0x53df7c(0x463)+'a']?_0x53df7c(0x494)+'\x20'+_0x1ee211[_0x53df7c(0x463)+_0x53df7c(0xb25)]:_0x616644['NLaRd']):_0x53df7c(0x140)+_0x53df7c(0x458)+'\x20yet\x20'+_0x53df7c(0x1ac)+'y?)\x20\x20'+_0x53df7c(0xa93)+(_0x4ce5ba&&_0x5e9dcb[_0x53df7c(0x463)+'a']?_0x2d9100[_0x53df7c(0x463)+'aFrom']:'-'),_0xaf40e6[_0x53df7c(0x28c)][_0x53df7c(0x915)]=_0x40b1ff>0x14*0x161+-0xc10+-0xf84?_0x616644[_0x53df7c(0x1ae)]:'#8d7a'+'99'));_0x533471[_0x53df7c(0x4d3)+_0x53df7c(0x692)]&&_0x533471[_0x53df7c(0x4d3)+_0x53df7c(0x692)][_0x53df7c(0xa86)+_0x53df7c(0x38a)+'imeIs'+_0x53df7c(0x1b2)+'ted']===![]&&_0x533471['warni'+_0x53df7c(0x92e)][_0x53df7c(0xb0c)]('plugi'+'n._ru'+_0x53df7c(0xa18)+'\x20is\x20n'+'ot\x20wi'+_0x53df7c(0x47e)+_0x53df7c(0x791)+_0x53df7c(0x6a3)+_0x53df7c(0x385)+_0x53df7c(0x1a0)+_0x53df7c(0x668)+'the\x20p'+'lugin'+_0x53df7c(0x79a)+'built'+'\x20'+_0x616644[_0x53df7c(0x553)]);if(_0x533471[_0x53df7c(0x94f)]&&_0x533471['esp'][_0x53df7c(0x7ca)])_0x533471[_0x53df7c(0xd3)+_0x53df7c(0x92e)][_0x53df7c(0xb0c)](_0x616644[_0x53df7c(0x8e0)]+_0x533471[_0x53df7c(0x94f)]['note']);if(_0x533471['globa'+'ls']&&!_0x533471[_0x53df7c(0x64e)+'ls'][_0x53df7c(0x879)+'8']){var _0x257bc4='';_0x533471[_0x53df7c(0xa2e)+'irePr'+_0x53df7c(0x41e)]&&(_0x257bc4=_0x616644['QJWmf'](_0x616644[_0x53df7c(0x6ff)](_0x616644[_0x53df7c(0x4f8)]('\x20A\x20ho'+'ok\x20fi'+_0x53df7c(0x59c)+'t\x20'+_0x533471['hookF'+_0x53df7c(0x81a)+_0x53df7c(0x41e)][_0x53df7c(0xa03)]+_0x616644[_0x53df7c(0x76d)]+_0x533471[_0x53df7c(0xa2e)+_0x53df7c(0x81a)+_0x53df7c(0x41e)]['origi'+_0x53df7c(0x852)+'nc']+(_0x53df7c(0x4da)+_0x53df7c(0x5c3)+'resol'+'ved=')+_0x533471[_0x53df7c(0xa2e)+_0x53df7c(0x81a)+'oof']['resol'+_0x53df7c(0x66b)+'eAtFi'+'re'],_0x53df7c(0x4ec)+_0x53df7c(0x6f1)),_0x533471[_0x53df7c(0xa2e)+_0x53df7c(0x81a)+'oof']['gameS'+'ource'+_0x53df7c(0xa1a)+'e']||_0x53df7c(0xa71)),_0x616644[_0x53df7c(0x8b0)])),_0x533471['warni'+_0x53df7c(0x92e)]['push'](_0x616644[_0x53df7c(0x1ab)](_0x53df7c(0x791)+'\x20inst'+_0x53df7c(0x938)+_0x53df7c(0x503)+_0x53df7c(0x180)+_0x53df7c(0x1ca)+'t\x20(so'+'urce:'+'\x20'+(_0x533471['globa'+'ls']['gameS'+_0x53df7c(0x55c)]||_0x53df7c(0xa71))+_0x53df7c(0x240),_0x616644['GCxhZ'])+_0x257bc4);}(_0x533471[_0x53df7c(0x64e)+'ls']&&!_0x533471[_0x53df7c(0x64e)+'ls'][_0x53df7c(0x5eb)+'Wrapp'+'er']||_0x533471['globa'+'ls']['value'+_0x53df7c(0x63b)+'er']===_0x53df7c(0x709)+_0x53df7c(0x2de))&&(_0x616644['mPFBh']('OmwTx',_0x53df7c(0x161))?_0x533471['warni'+_0x53df7c(0x92e)][_0x53df7c(0xb0c)](_0x53df7c(0x760)+'w.Uni'+'tyWeb'+_0x53df7c(0x5b1)+'t.Val'+_0x53df7c(0xa25)+_0x53df7c(0x80a)+'is\x20mi'+_0x53df7c(0x707)+_0x53df7c(0x269)+'pture'+'\x20is\x20r'+_0x53df7c(0x934)+_0x53df7c(0x334)+_0x53df7c(0x9c8)):_0x373663['textC'+'onten'+'t']=_0x42baec[_0x53df7c(0x89c)+_0x53df7c(0x403)](_0x28a7cb,null,-0x921+0xb17+-0x1f5));if(_0x616644['qvEQV'](_0x533471['hooks'+'Total'],-0xf38+0x5e*-0x38+0x479*0x8)&&_0x616644[_0x53df7c(0x247)](_0x533471[_0x53df7c(0x940)+_0x53df7c(0x1cc)+'ed'],-0x21e6+0x7d1+0xb*0x25f)&&_0x17c1b8){if(_0x616644['qJxeW'](_0x53df7c(0x426),'DEynR')){if(_0x533471[_0x53df7c(0x940)+'Resol'+_0x53df7c(0xa6c)]===0x1ae2+0x24e9*-0x1+0xa07)_0x533471['warni'+_0x53df7c(0x92e)]['push'](_0x616644['jxOEK'](_0x616644[_0x53df7c(0xad8)]('0\x20of\x20',_0x533471[_0x53df7c(0x940)+_0x53df7c(0x5cc)])+_0x616644['JjiqO']+_0x616644['JyvwG']+(_0x53df7c(0x3c9)+_0x53df7c(0x519)+_0x53df7c(0x211)+_0x53df7c(0xaee)+_0x53df7c(0x22a)+_0x53df7c(0x786)+_0x53df7c(0x952)+_0x53df7c(0x18d)+_0x53df7c(0xa7a)+'the\x20l'+'ife\x20o'+_0x53df7c(0x411)+'\x20page'+'.\x20')+_0x616644['DbShN']+_0x533471['hooks'+_0x53df7c(0x521)+'tered'+_0x53df7c(0x8ff)],_0x53df7c(0x22c)+_0x53df7c(0x82f)+_0x53df7c(0x191)+_0x53df7c(0x7d2)+_0x53df7c(0xb24)+'\x20docu'+_0x53df7c(0x5f3)+_0x53df7c(0x2c8)+'.'));else{if(_0x616644['pAECl'](_0x53df7c(0x9cb),'wauHg'))_0x533471[_0x53df7c(0xd3)+'ngs'][_0x53df7c(0xb0c)](_0x616644['NKoGv'](_0x53df7c(0x6e2)+_0x53df7c(0x4b1)+'ved\x20'+_0x533471[_0x53df7c(0x940)+'Resol'+_0x53df7c(0xa6c)]+_0x53df7c(0x601)+_0x533471[_0x53df7c(0x940)+_0x53df7c(0x5cc)],_0x53df7c(0x22c)+_0x53df7c(0x16b)+_0x53df7c(0x16e)+_0x53df7c(0x6e7)+_0x53df7c(0x820)+'\x20but\x20'+_0x53df7c(0x4c2)+_0x53df7c(0x495)+'ne.\x20T'+'he\x20si'+_0x53df7c(0xe5)+_0x53df7c(0x3eb))+(_0x53df7c(0x425)+_0x53df7c(0xa7f)+_0x53df7c(0xa1d)+'fo*)\x20'+_0x53df7c(0x9c5)+_0x53df7c(0x930)+_0x53df7c(0x141)+_0x53df7c(0xa9b)+'ch\x20th'+_0x53df7c(0x9a6)+'ild.'));else{var _0x5c9d42=_0x616644['kbkKF'][_0x53df7c(0xad1)]('|'),_0x2782bc=0x25b7+0xbf*-0xb+-0x1d82;while(!![]){switch(_0x5c9d42[_0x2782bc++]){case'0':try{var _0x3b922e=_0x192606[_0x53df7c(0x791)+_0x53df7c(0x6a3)+_0x53df7c(0x6b3)][_0x53df7c(0x1a0)+'me'];_0x3b922e['__sak'+'uraTa'+'g']=_0x240341+':'+_0x2d889b['rando'+'m']()[_0x53df7c(0x834)+_0x53df7c(0x873)](-0xf77+-0x1179+-0x3a*-0x92)['slice'](-0x1*-0x15e2+0x8bb*0x3+-0x6b*0x73,0x25*0x45+-0x1f83+0x1594),_0x1d203e=_0x3b922e[_0x53df7c(0x675)+_0x53df7c(0x64d)+'g'];}catch(_0x507296){}continue;case'1':_0x38679c[_0x53df7c(0x69a)+_0x53df7c(0x391)]=!![];continue;case'2':var _0xae1553=_0x556365[_0x53df7c(0x791)+'WebMo'+'dkit']&&_0x2082ab[_0x53df7c(0x791)+'WebMo'+_0x53df7c(0x6b3)][_0x53df7c(0x1a0)+'me'];continue;case'3':_0x1143b9['ok']=!![];continue;case'4':_0x381f45();continue;case'5':_0x11773c();continue;case'6':_0x1d9a8b['hooks'+_0x53df7c(0x521)+'tered']=_0x19cdef['lengt'+'h'];continue;case'7':if(!_0xae1553||typeof _0xae1553[_0x53df7c(0x995)+_0x53df7c(0x5c4)+'in']!==_0x53df7c(0x807)+_0x53df7c(0xa42)){_0xd695c8[_0x53df7c(0x546)]='Runti'+_0x53df7c(0x317)+'eateP'+_0x53df7c(0x661)+'\x20unav'+'ailab'+'le';return;}continue;case'8':_0x2d6c85['memor'+_0x53df7c(0x60b)]=!![];continue;case'9':_0x44a413=_0xae1553[_0x53df7c(0x995)+_0x53df7c(0x5c4)+'in']({'name':_0x616644[_0x53df7c(0x160)],'version':_0x1c87ba,'referencedAssemblies':_0x2c907b['slice']()});continue;}break;}}}}else _0x11b729=_0x431133,_0x4218a8=_0xa78e08[_0x314cac];}return _0x616644[_0x53df7c(0x241)](_0x533471['hooks'+_0x53df7c(0x1cc)+'ed'],0x517*0x1+0x1247+0x3e5*-0x6)&&!_0x533471['insta'+'nces'][_0x53df7c(0x1e2)+_0x53df7c(0x259)+_0x53df7c(0x64f)]&&_0x533471['warni'+_0x53df7c(0x92e)]['push'](_0x616644['xkaRA'](_0x616644[_0x53df7c(0x9fc)],_0x53df7c(0x6fc)+_0x53df7c(0xafc)+_0x53df7c(0x190)+_0x53df7c(0x276)+_0x53df7c(0x8a2)+_0x53df7c(0x985)+'\x20or\x20t'+'he\x20ho'+_0x53df7c(0x1de)+'\x20on\x20t'+'he\x20wr'+_0x53df7c(0x8cc)+_0x53df7c(0x13f)+_0x53df7c(0x56c))),_0x533471[_0x53df7c(0x198)+_0x53df7c(0x2c3)+'eplac'+'ed']['lengt'+'h']&&_0x533471[_0x53df7c(0xd3)+_0x53df7c(0x92e)][_0x53df7c(0xb0c)]('rebui'+'lt\x20si'+_0x53df7c(0x26b)+_0x53df7c(0x4fc)+_0x53df7c(0xa66)+_0x53df7c(0x888)+'espaw'+'n?):\x20'+_0x533471[_0x53df7c(0x198)+_0x53df7c(0x2c3)+_0x53df7c(0x14a)+'ed'][_0x53df7c(0xb2)](',\x20')),_0x533471;}function _0x50adeb(_0x2728c7){var _0x1e1a3d=_0x4ccb6b,_0x46024e={'wwfqh':function(_0x1297c9,_0x229782){var _0x4e1b84=_0x35e4;return _0x616644[_0x4e1b84(0x932)](_0x1297c9,_0x229782);}};console[_0x1e1a3d(0x2f0)](_0x1e1a3d(0x350)+_0x1e1a3d(0x794)+_0x1e1a3d(0x2b5)+_0x1e1a3d(0x3b6)+'\x20repo'+'rt',_0x616644[_0x1e1a3d(0xa01)](_0x616644['Xcolj']+_0x5ae3b3,_0x616644[_0x1e1a3d(0x17a)]),_0x2728c7),console[_0x1e1a3d(0x2f0)](_0x616644[_0x1e1a3d(0x36e)](_0x616644[_0x1e1a3d(0x66e)](_0x66cc24+'\x0a',JSON['strin'+_0x1e1a3d(0x403)](_0x2728c7,null,0x2ba+-0x1c*-0x3e+-0x3*0x32b))+'\x0a',_0x1e4295)),_0x4b2daf=_0x2728c7;try{if(_0x616644[_0x1e1a3d(0x8a4)]!==_0x616644['Srcjq'])return{'version':_0x53f058,'when':new _0x25dded()['toISO'+_0x1e1a3d(0x400)+'g'](),'elapsedMs':_0x2a7c3e['now']()-_0x29fed0,'host':_0xce9f91,'uwmk':!!(_0x1acb12['Unity'+_0x1e1a3d(0x6a3)+_0x1e1a3d(0x6b3)]&&_0x343b84['Unity'+_0x1e1a3d(0x6a3)+'dkit'][_0x1e1a3d(0x1a0)+'me']),'il2CppContext':![],'arm':_0x144db1,'hooksTotal':_0x1db197[_0x1e1a3d(0xc4)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x46024e[_0x1e1a3d(0x464)](_0x294d92,_0x5405bf&&_0xa527e1['messa'+'ge']||_0x27b983)};else _0x169c57(_0x2728c7);}catch(_0x45c85b){}_0x903c1e(_0x1e1a3d(0xa0)+'t',{'report':_0x2728c7});}function _0x3d6cd7(){var _0x1d42e5=_0x4ccb6b;if(_0x616644[_0x1d42e5(0x1bf)](_0x616644[_0x1d42e5(0x469)],_0x616644['PbKQh']))try{return _0x616644[_0x1d42e5(0x433)]===_0x616644[_0x1d42e5(0x771)]?![]:_0x27b125();}catch(_0x3d04b5){return{'version':_0x143793,'when':new Date()[_0x1d42e5(0x78c)+'Strin'+'g'](),'elapsedMs':Date[_0x1d42e5(0x976)]()-_0x246d5b,'host':_0x3cbf7b,'uwmk':!!(window['Unity'+'WebMo'+_0x1d42e5(0x6b3)]&&window['Unity'+_0x1d42e5(0x6a3)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0xf5d7fd,'hooksTotal':_0xbf6b9a[_0x1d42e5(0xc4)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x616644['zrbaD'](String,_0x3d04b5&&_0x3d04b5[_0x1d42e5(0x935)+'ge']||_0x3d04b5)};}else{if(_0x1ff9ca['el'])_0x30e586['el'][_0x1d42e5(0x28c)]['displ'+'ay']=_0x616644[_0x1d42e5(0x43c)];return;}}function _0x20d371(){var _0x30629b=_0x4ccb6b,_0x5e797e=(_0x30629b(0x2c0)+_0x30629b(0x726)+'1')[_0x30629b(0xad1)]('|'),_0x376179=0x58*0x2+0xa99*-0x1+0x9e9;while(!![]){switch(_0x5e797e[_0x376179++]){case'0':_0x50adeb(_0x3d6cd7());continue;case'1':(function _0x5361a0(){var _0x5f5793=_0x30629b;if(!_0xbf6b9a[_0x5f5793(0xc4)+'h'])try{_0x616644[_0x5f5793(0x856)](_0x11ee21);}catch(_0x10c9ed){}_0x266030++,_0x50adeb(_0x3d6cd7());if(!_0xbf6b9a[_0x5f5793(0xc4)+'h']&&_0x616644[_0x5f5793(0x2d3)](_0x266030,0x2225+0x1*-0x353+0xa*-0x2f7))setTimeout(_0x5361a0,0x3ea+0x517*-0x4+0x1842);else{if(!Object['keys'](_0x19a388)[_0x5f5793(0xc4)+'h']&&_0x266030<0x1511*0x1+-0xe8f*0x2+0x939*0x1)setTimeout(_0x5361a0,-0x5*-0x797+0x1836*-0x1+-0x1*0x5ed);else setTimeout(_0x5361a0,-0x2*-0xf0b+-0xb7f+-0xde7*0x1);}}());continue;case'2':var _0x266030=0x7*-0x38c+0x35*0x4f+-0x9*-0xf1;continue;case'3':setInterval(_0x5e6244,-0x140f+-0x92*-0x23+0x39d);continue;case'4':try{_0x2f0d9a();}catch(_0x3cbdff){}continue;case'5':try{_0x616644[_0x30629b(0x8a1)](_0x169091);}catch(_0x18343d){}continue;}break;}}if(document[_0x4ccb6b(0x388)])_0x20d371();else document[_0x4ccb6b(0x33b)+_0x4ccb6b(0x959)+_0x4ccb6b(0x800)+'r']('DOMCo'+_0x4ccb6b(0xa22)+'Loade'+'d',_0x20d371,{'once':!![]});if(document[_0x4ccb6b(0x388)])try{if(_0x4ccb6b(0x10c)===_0x616644['YrmMH'])_0x5d808b();else return null;}catch(_0x3a73d4){}else document[_0x4ccb6b(0x33b)+_0x4ccb6b(0x959)+_0x4ccb6b(0x800)+'r'](_0x4ccb6b(0xa4d)+_0x4ccb6b(0xa22)+_0x4ccb6b(0x184)+'d',function(){try{_0x5d808b();}catch(_0x484907){}},{'once':!![]});})()));function _0x149f(){var _0x5db514=['A3nqquq','zhrOoJi','tvLftvm','Dg91y2G','wgjoDem','oNrYyw4','Ag9ZDg4','rvnqoIa','ywWGBM8','mhb4idu','zxH0lwe','zgrPBMC','ChG7yM8','C2v0sxq','zwz0oJe','iIbZDhi','C3bHCMu','B250lxm','CMuk','y2vKigi','BIbYzwW','tvDyz1C','rNjty2C','vgv4Da','DcaWicG','B25PBNa','C3bSAxq','yMTPDc0','Fdf8m3W','sxDKreS','BM8Gtw8','rw5HyMW','iNjVDw4','DhjSC3u','zsGP','ALrsvKG','x3j1BNq','yxjKlM8','DgHLigm','Fdf8oxW','EtOUndu','BgrJD0e','zwn0Aw4','ign5psi','sYbZy3i','qNLjza','AgL0CW','ihnPBMm','CfnAv0G','uvfJsNu','yvPos3O','CMD0qxi','lNnRlw4','lwjVDhq','vKuGDG','zxjLzca','ifrOzsa','tfzwwMK','q3rcAxG','nJaWo20','yxDtvvO','AxrSzxm','Dg87iJ4','Aw4TyM8','EeX0r08','lwnVChK','wwf3uwq','AxmGBM8','Fdz8nxW','CIb5B3u','AgfKB3C','AwX0zxi','CgXHEwu','icbOB28','ChG7y3u','BcWk','AdO2mNa','BfnqEeG','zMLSBfm','CgXkvuS','Ede4pq','BMv2zxi','lJe4ktS','D2fZBvq','quXzwg8','ChvZAa','AwvYkc4','vwnVAwu','zsb1C2u','u3rHAhm','Ee9ZtvK','BNrxAw4','mhb4oW','ALv0C3G','AwqGCMC','BML0Awe','zwDdtNK','ig5VDca','zMLSBa','whz3sKe','CKLLy2i','AhvKlwm','EK9wr3y','zMfPBgu','w2rHDge','yLrSCg0','yM90Dg8','y3bRzuS','s2z0shu','BMCGyxq','yuzYB20','CKnvCuK','ww9LCxC','qMnRsvi','Dg5cDNi','C3LZDgu','Fdn8na','EdTMB24','B3CGkey','rJGGlYa','tgrHAKu','B2f0mZi','C29SAwq','BNrLCJS','BYb0Agu','uhftsxG','vvfvrwi','BMvS','Bw9YEvq','zMzWEKS','CI5QCYa','z3fktxG','CMvWB3i','mhWXFdm','Edjfna','BvHSExC','BgX3yxi','tuPZB0m','wenArwu','D2fZBu0','zezqv3G','iNn3mI0','BIG1mNy','x19hzw4','mJq2ldi','lNnRlxi','AhjLzG','EgvKDK0','ignVCgK','ExveuLm','AM9PBG','s0LYChG','lxDLyMS','lxGIihm','Exnlwwu','zw5NDgG','zhjAAMO','ldi5lc4','uLDhCxe','Dte2','Bg9HDhm','CNnJCMK','zhrOoJG','zgLUzZO','ktTWB2K','Aw1WBge','oMnVBhu','icaOywm','BgvUz3q','zvn0EwW','owq7Fq','CNj7y28','EwvYqw4','Dgv4Dem','CxDjEeW','i2jKytK','ihn0EwW','EeryENK','DxjYzw4','r3vQr28','CMfUihK','zfD4rMi','CMrLCI0','D2fYBMK','B2XPzca','yMrHowm','s3LVtMC','BgfZDem','AwDxvfK','u0XxA2u','swDHCvG','wKPAvwC','rJKU','DhKGAw4','AM1zrw8','BM9ZCge','iJeIig0','Bg93oMe','teLwrsa','DgnOige','DxrVo3O','z25HDhu','nIWUotu','BgLNBG','yxa6nha','z2jHkdi','DvHRrMO','ugf0Aa','DcbYzxa','tMv0D28','wKLjtLK','zw1VCNK','D05kChO','z2v0q28','zw5LBxK','Aw50BYa','zxG7zMW','CMfTzsa','C2v0uhi','mZqWodeZmhrfv1Hdzq','Dg57ywW','o2jVCMq','BgXLzca','C0Dzv3K','igLUlwy','CMfIww4','DgHLigC','icSG','DhzWzwC','BJPJzw4','Awr0AdO','ywi6Ag8','y3zwBNa','v0fzEhK','zwfKEsa','qvLjzhO','Dg9YicS','DhLWzq','zYbZDxm','t2zM','tvn6v3i','DdmY','qwPpuLe','CK1fyKG','v19F','yuXcuve','zxiTCMe','DvnJDMK','Aw1Lr2e','vxzJtuu','C3vYDMu','zLDHreG','B29RCYa','EMr2vfC','AMvJDhm','EdTIywm','lNnRlwi','zM92','ANb1qNq','CxLfs3G','qw5gExm','BMnLCW','tw9KDwW','CM1VBMS','EIaOsw4','Dg46Ag8','C2zVCM0','zfrPy3m','nfv0tKzcva','B2Pvsem','pZWVC3a','ys1Tzw4','twz4tLC','oMnLBNq','uMvJDa','Dgv4Dee','CMfUzg8','ntuSmJu','AdO5mNa','mNb4idG','B3vWig8','BIaUC2S','zxjHia','B2fYza','yxmGzMK','tfDKweS','mJD8mZK','DenVBg8','zxaGDgG','t0PbBhG','lM1UlwW','DMvYBg8','BM8Gzw4','zxmGBM8','AxrOie0','v1jcsgi','BNq7y28','BMCGzM8','vxbvwfC','vxf5we8','DxjJzq','zNKTy28','zxbSywm','EcbYz2i','D3v1vgq','yNvMzMu','Bez1BMm','ihbYB3y','oYi+tM8','ihbHBMu','CgHyELe','CJOJzJC','DxjHDgu','Aw5PDgu','D192mG','sK1VCvK','z2v0sxq','ihDOAwW','rwDKDfC','C3rYB2S','yw5ZCge','zxmGB2y','svjLyM8','Bu9KD3u','q1nurwS','t213vhG','sgPjChy','A2DYB3u','Exffvwe','ywnRz3i','wgnUyKi','wfDLz1G','BwuGAw4','sw5ZDge','CNvUCYa','khmPihq','otK7Bwe','CM93CW','BYbHihq','CgfKrw4','oI40o30','AMLQt2e','ic40nxm','B2zyCMO','ysGYntu','BMC+','zgvMAw4','zMzZzxq','zNjVBsa','AguGC2K','uwfODe0','B25NlG','FdqXFdi','zYbZy3i','AgLZig0','ywn0B3i','zxnVBhy','jtTIywm','BgXxyxi','oMXPBMu','tg9Hzgu','B2LKy2C','Dg9gAxG','ywrUvhm','v3zxAfm','Bg9Zzsa','EMXcDvq','AMXfEgK','D3jpAeu','BM9Yzwq','yMfJA2q','zYbPBNq','igfYzsa','DxjPBMC','zYbxzwi','zwvMntS','Dw1Uo2C','vhnhEgS','BhKUieG','B25LoYi','Aw5ZDge','lwrPCMu','Bwvhyw0','B2LUDgu','iIbTAw4','A0TZwgm','sNHdrNK','uhPyD1e','uNvUDgK','Fdn8mq','AgLKzgu','AwvKige','C2vSzwm','oJe7BwK','nduPoW','zM9UDa','Ewv0ic0','tMfTzq','CMfUC3a','DezRExa','kgXVyMi','yxjLige','Cejbvve','C2vYlxm','lNnRlw0','z2uUrgu','rxHWB3i','A2v5CW','ys1ZDW','swPyC0O','DhnPzgu','BguGy3G','svDkvuu','Aw5Uzxi','lcbUBYa','uwLtuNG','AfDLs2K','ugHyDLG','EsbMywK','wMLmt1u','EMu6mte','phbYzsa','sgvHCca','Ate2','DMLLDYa','Bgu9iM0','mJG7','C2L6ztO','CJTZDhi','zsb3ywW','zwqGEwu','rffJBfG','qxbWBgK','tMThyNq','rJKGihm','B2f0CYa','mtjWEdS','BMC6nNa','su1Rtwq','A1jLuvy','ohW0Fdm','lJi4','BcbHz2e','C3bSyxK','zMfJDg8','ntuSlJa','mcaXChG','C3zNpG','AwrLCG','zMrpq1e','B2SGAxm','A2uTBgK','uKXeqMS','igvUDhi','rLbty28','zg9JDw0','pgnPCMm','Bgv4lxC','B2fYzca','BcbKAxm','CLngz08','wK1Sr0y','ywqGzNi','B25Tzxm','wLnztxm','igL0igK','D0XKAMC','zcb0Agu','zwLtAMS','zgvYoJa','B3i6CMC','psjJB2W','ldi1nsW','igzYyw0','wwTnAwi','ktTIB3i','mhb4ic0','oJfWEca','D2HLBIa','zZO0ChG','t3v0wLu','ruPQyKC','D3jHCdS','veHYAfq','AgfUzwq','ufbzww0','nZH2AdS','Fdv8mNW','C1rbBeu','Dxfztxq','CdO0ChG','DxnLree','DMGGlsa','wNn4CeG','B2ztB3G','mJqYlc4','sw9YyK8','o2nVBg8','vhjXrM8','BwvHBG','yxG9iJu','zwDPC3q','CI5KBgW','EY13zwi','zxKGAxm','vMfcsLO','CYbHy3i','wfbPv04','igfYBwu','igrHDge','Fdm1FdG','vurmzLC','CNvUDgK','yMLUzgK','BNq6Aw4','Cgn5uge','Dhj1zq','BNqXnG','r3DYDwC','zKTOyMu','B3jKzxi','igP1Bxa','BefWDhK','DvbJtve','ksbZyxq','BYa3nsW','ywz0zxi','CMDIysG','igHVB2S','CMqTDgK','twjyCeO','i2y3zwu','vujSA1y','iZjHmgy','lNnRlwm','DZiTyM8','wNLeEhG','BgLZDa','Bw4TC2K','AxHLzdS','Bxm6y2u','AuXHyMi','rgjtAe4','BM8GCMu','ChG7B3a','BgvKoIa','tgLZDa','wunXwhq','ks4G','wxLUz0S','oYi+ltW','quX2zeS','t2PJCgq','C2v0sw4','kdiYChG','y2DJr1i','wYbHBMq','zhPkz0m','Ag90','zwXVywq','CdPYB3u','E2zVBNq','C2nYAxa','4Psa4Psaia','surfige','BM8Gz3i','ihjLy28','s2TxsKu','BwfYz2K','Cg9ZAxq','oJe3ChG','vgHLigG','zxjZ','BNrYB2W','nsK7','r250qwi','CMPYqKW','zw5HyMW','yMfZzq','vLrXuxO','zxiTC2u','A2fgBLC','FdeZFdC','oIm4zdC','BwLUkdu','ELPXswK','y2XHC3m','zg93','y2fUDMe','ic0Gy2e','Aw4TD2K','BMnLigy','reDcwK4','yNjvEue','Euzgre0','lwHPzgq','BMCUcG','lIbozwu','y2uGyM8','zxnZywC','B3a6mti','BwLLCYa','BM90igK','te9h','zwqGDgG','yK1Jtfm','CfL2y00','lJa0ktS','yxjT','Cg9ZDe0','mJC5zLn0ENnV','rviGvvC','wLPHDNu','zwyYo2y','u0PgzLO','DgvK','C3bLzwq','AY13B3i','C2v0rMW','C2LUz2W','EdTMBgu','B0HKCgK','zxG7z2e','wxLotvO','C3r5Bgu','tg5dBNC','qwrqzhq','yxbeB2q','AgfZtw8','y3qGzM8','DhLSzt0','yKfAte4','v2LKDgG','CM5PBMC','BMC6mca','DdOXmxa','igjVDgG','uwLLBM8','zhrO','EeHUz1e','CY5Tzw0','CMf3','zeTPrwC','BgfZlg0','CMf3wwe','zxzLCNK','D2fYBG','CYb1BNi','icbMAwu','DfjNz0W','Bcb1Cgq','Ec13Awq','ANHpruS','sgv4CuS','zYdcTYa','icaZlIa','yxnrwKq','EgPbtfa','kde4ChG','AuLjq08','Ds1JC3m','C2L6zq','Cg9Z','qNHnvwC','AKvMALm','ifnRAwW','rKzcANu','DhrVBJ4','DMvYC2K','igSWpq','zwfKywi','lcbZDgu','zxHPC3q','CZ0NC2S','BgvMDa','nsWXndm','mNW0Fdu','CuTwv2K','u2vNB2u','BMnLC1i','BMfTzq','DgvZia','zw50rwW','zZOXmxa','C3rHCNq','y2XPCgi','BvbgqMG','z1HIqNC','nsWUmdu','igjVDhm','zw1WDhK','zM8Qksa','BwuGD2u','qKHwz00','EvbWv0q','zwzrwKi','BwfW','zt0IyMe','vLrlt1y','Cg9YDge','lJa4ktS','ihvUAxq','Dxr0B24','EfncB3u','sgvPz2G','Bgv4lxm','Aw5Lza','EdT9','CNjVCG','zw5Jzsa','BLDsCKu','AxnWBge','Bg9Hzhm','q3r5CeS','Aw5WDxq','mda7y3u','B2TLpsi','DcbKyxq','z2v0rwW','BMqIihm','vgHHDca','AxbTENq','vhbezLa','mdaWo3u','Bg9N','y2u7y28','AgLKpq','EKT0Ehe','C2STC3C','AwWYq3a','icaGDMe','zcbKAwe','BgvYkW','oJm0ChG','EcbZB2W','y0LUChu','B246B3a','Bw4Ty28','zgH1sge','tgXVD1y','B21Tyw4','mhHIna','uMfKyxi','vKfm','C2STy3q','B3bLBG','yxK6zMW','y1HMqNm','zvHyq1i','z2fTzq','oJa7EI0','zxjHDgu','BgrPBMC','zdTTyxi','mcbYz2i','ihzPzxC','vu5QChy','jsKGmta','D3jPDgu','yM9VBgu','Fdr8ohW','B25NE2m','AxnmB2m','BwuUy3i','AMLJyMG','ztSTD2u','Aw5NoJi','uMvMDxm','ig1LBNu','DgXL','iNDPzhq','ufjlu0W','zYb3Agu','uuzYAMK','r0vgAhq','igj1Dca','qvfJsvi','z2vYlIa','AwHVwLy','mhb4oYi','vw94Age','ywj7zgK','Ewf3','ywjLBhS','ihn0CM8','sw5ysu0','yxrPB24','AuHkAe4','mhW0m3W','ENjny1C','CJTNyxa','lde3nYW','zYbIBgK','ExrLCW','C2LU','CMvMCW','zciGC3q','pgiGC3q','ihvPlw0','ywrKrxy','oJHWEdS','ChGGmdS','ndC7','zwrnCW','phn2zYa','Cc1JDG','BI1ZCge','yMvSB3C','ntu0nZe0nLPLtxPIuq','BK1TuLC','DgvZDa','ys1IB3G','B2zMC2u','zNjHBwu','Bwvnyw4','CvfOrhi','wNbJENu','Avr6rvm','y2uTAxq','rJKGDhC','jwnBC2e','lwe9iG','ic0GDgG','CMvHy2G','zhPoBNK','yMXLig4','teXIvfC','ywrPDxm','svfkBe4','idzWEca','yxrJAc4','BIbuyw0','DZOWidi','qLbLqLK','qM90Aca','CMrLCJO','CM9SBgu','FdmXFdm','z2LUigC','DhjVA2u','zxj7y28','AxrPB24','DxjHlwu','t0SGt1y','oJrWEca','B2XZoJO','lxjHzgK','C2fUzq','DhjHBNm','y3rPB24','tK5Ny2y','r2fUyKq','nsiGC3q','zxi7zM8','wfztALa','BMfNzxi','DZiTB3u','m3W1Fdy','B1b1y3q','qNzSq28','Fdv8mhW','idaGlYa','y1HHBgy','DwKTBw8','oInIzge','ywX7zM8','swnzCvu','y09iELm','AwnLihC','zwr2BMW','uMvZB2W','A3mGD2G','zNbZ','zgTPDc4','Aw5cyw4','zxHLy0m','yM9KEq','phbHDgG','BLj1BNq','l2nHBNy','tLPhzLO','DgvYzwq','ihjNyMe','vK1Usxm','BcXTAw4','ChrLza','tuSGq08','phn0CM8','BgvMDdO','BgnjALK','BMnLv3i','Ce9wEuq','D2LKDgG','ywnRihq','yxm+','lK1Vzhu','BeHitxe','C1vKt1u','zMLYC3q','ndySmJm','tKTVr3y','zxi7z2e','nZq4mZy','C2STBwq','ug1Xs2G','s3njwvm','B25JBgK','yvD5qKG','o2zVBNq','B3vUzci','yMvHCMK','ANHjA2G','BJ0ICM8','AtmY','zMy3ytK','u2vZC2K','surYwfO','iJ48l2q','nYK7y3u','imk3igzV','ywnLlem','vfnjrfe','BfDHCNO','z25cBxG','CgLUzYa','ignYB3m','oMf1Dg8','icbVzMy','yxv0BW','icbMywm','thnWqLe','zMXLEa','rgjNDuO','DxjLzey','qwTsCg4','nxm0idi','kdi0lde','ywrKAw4','Bw5YrMm','EMfxy2y','ENHKA0K','C28GAg8','y1b3BMS','mtrWEdS','mhGXma','psiXmIi','zgLMzMu','rvP0Bhy','txvSDgK','mdT0B3a','ywjZ','B24Gzge','ic8GrJy','BKHLD28','zM92igi','CNvUBMK','BhrwAey','BLv0Ehq','r2fMv1G','Aw50zxi','ywL0Aw4','u0fRvue','r2fTzq','odbWEdS','oMjSDxi','y29Z','zsbPBNm','mtm4z0XwDKLc','BwLUv2K','weP3AM0','AwvSzca','vLzprwy','zfbZsNC','ugHVDg8','iZHKn2e','CMuG','C3rYB24','nhWZFdi','CNq7ywW','vxfmD1K','Dwj7zM8','BwfUEq','ihbHC3q','i3nHA3u','sgPotKW','nZrJugzbwKe','C29SDMu','s3nwseK','sgvHCa','DMfS','lJm2lde','yxjLBNq','CMvWBge','EdTIB3i','C3bHBG','zxmGDgG','u3rYAw4','lgnHBgm','DgHLig8','z2LMEq','ANHvuem','CNDPDuK','lJGYktS','iI8+pc8','suTyweK','Aw9UoMW','zwqU','Dw5Kic4','B25VC3a','Fdm4Fde','zgL1CZO','v3P5zKS','BK5LDhC','zIb0Agu','iJ5ZywS','mhGZma','ruzfu1O','yM94lxm','yxGTD2K','DMn1rxm','psjZDZi','C2STyNq','zwPXtwm','psjZywS','BMfSv2e','ig9Uy2u','B29M','Eca4ChG','BIbtruu','s214vxu','yxbP','vgfoywC','i2zMogy','khrOAxm','vhrTAhi','tgzUtNa','lcbuyw0','wxD1wgS','FdL8mG','D2HPDgu','mNz3ldy','C29Syxm','yNv0Dg8','CMfTzs4','C2STDMe','q2XPCgi','q1bzy3C','CfrIv0S','CK5wywi','qxDrALK','ywDLigG','DMfYkc0','psjYB3u','DMDHu2S','oYi+rvm','DgvYE2W','DxfPtfi','zgLMzG','ndGZnJq','zxjxCfq','BMu7Cg8','Ec1ZAge','Dxm6oha','re16yM0','AwDODdO','Dgv4Dge','CgvYBw8','BgqGAxm','CgfKzgK','ntuSlJi','tKnvzem','DhLWzum','zwX6tLG','uhrQreq','t3HMz0C','vKXoCei','z3bqs3y','pc9KAxy','v3H5BMK','yKn0twy','mhG3yW','sLDRAxK','B05gz00','DgnOzxm','zw1Pzxm','tKXyv0G','Bw91C2u','y2XVC2u','zxnJ','mxb4ihi','kZb4','ywXPz24','idaGmJq','ENLjAgm','BwuUCMu','y2fTzxi','D3DMCwG','kdi1nsW','Dw5KoNi','zMfSC2u','ohb4ide','ugjluwG','BM8GBgK','lwnOzwm','Bs11AsW','n2vLzJu','idaGmca','AguGBgK','B2XfAhm','CMfJDgu','vgnfquC','mhGYma','keLUC2u','u093yuK','B3bHy2K','DgL2zxS','C3zNE3C','igLUC3q','lMrSBa','BNrLEhq','BuTmv04','mZT9','BMrVDY4','EerQwLC','zM92u2e','igLKpsi','lJq1ktS','AgnLDNe','nNb4o2G','Fdf8ma','yxj7D2K','z2v0vwK','s2LesM4','nMi5zcW','vvjbx1m','qwnLBKC','B3nPDgK','sxbkCLK','nYWUmZu','qxnZzw0','CKnVDw4','DYbLEha','EhL6','CJOWo2i','icbJyw0','zwqGBM8','C2HHzg8','ie9o','EMDSt0O','q29WEsa','o2jVEc0','y2S7zM8','uvP4vKW','l3nWyw4','yZKIpNC','yxbWzw4','Aw1HDgK','zwjRAxq','CJPWB2K','ktTJB2W','msiGC3q','t3HVzKm','u2DJqw8','zMTUBva','Bwv0ywq','qMLUzgK','AuPoAK8','iJ5dB3a','AwnOlJW','ywjSzwq','AgLUDa','oJK5oxa','mJu1lde','CMvZB2W','AwDUlwm','rvjqDLa','DgLVBJO','yxjN','Dg9W','Aw5ZDgu','n3W2Fda','ohW5Fdu','iIbMAwW','y3nZvgu','Bgv4oJe','rMrutNK','Dw9tA2i','mmkWlcbW','BNq4','oxWXFdy','yxbWBgK','y2GGDgG','B24GAwq','mNb4o3a','igzHA2u','AM1UEKO','AwXLzcW','zY4G','AxrPywW','BM8Gvxa','C2v0vwK','q291BNq','uuPxBwy','igfWCgW','Dw1Uo2e','DxLlzeO','ChjStgO','AwrLBNq','CgfYzw4','u3jpvvK','Aw5N4OcM','zsbVyMO','Bgf5oM4','B2SGEwu','igfUzca','zxj0Eq','D24Gvxa','yxnZAwy','z2H0oJe','BIb0Agu','ig9Uia','CMvMDxm','EurgEKS','Duzdte8','Fdj8nhW','oxWYFdC','DhLSzq','EfHxuuy','zgf0ys0','B250zw4','Ag9VA1a','BgW6Aw4','icHZB3u','EgTlyNu','uK9prKy','BNn0yw4','Be5IuxO','zMfRzq','oxWXm3W','BLzluLy','Aw5Qzwm','CI1Yywq','B2XLig4','CgDRzu4','BNHIsK0','vLLNExq','EIaTihC','imk3ia','AxjZDca','lJuGms4','ig9IAMu','lM1Ulxm','mJu1ldi','yw1PBhK','oJrWEdS','BM90ihi','nNWXnhW','CNqGEwu','zNzqBgq','Dxm6nNa','CMfWoYi','qxDeC2O','mIWYosW','zsbLDMu','phnTywW','Et8Pica','u2rXA0O','BI5FCNu','DdTIB3i','mxb4idy','zhvYAw4','EwLTAvO','lL9Nyw0','BIbPzNi','zwqGlYa','r0jxywK','zxH0','B2TZihi','CMv0Dxi','lM1Ulwm','BMjKrui','zMLYzsa','B25TB3u','vfvPEum','Bg9ZzxS','uMvNAxm','qwnzEge','igLZigy','icdcTYaG','Dhj1zsi','y21K','lwzPCNm','B3jPz2K','A2v5vxm','ic0+ia','zgf0yxm','AgvHCei','lwv2zw4','AxvZoJu','tLnVz3G','z2LUlwW','BI5OB28','mxWWFdu','ENf3wgW','AxvZoJC','ndC0odm','Esbku08','A3PRCM0','EvzOCxK','nNW1','xtO6ywy','DY4Guhi','B2fKzwq','q2HPBgq','BgrZlIa','oJaGmca','C3LUyW','lZeUndu','mdCSmtu','nZCSlJu','Dxm6mti','yxGTAgu','zxjYB3i','DgnO','zdTYAwC','mNb4o2i','oNbYzs0','qNjHy2S','sunMCwe','zsGPlMu','ys1Hpsi','vNvPsg4','tfHHsw0','DNDWq1i','Bgf0zvK','wgnnvw4','lNnRlxy','zMHSwNa','Bwf4kdi','CMvHzhm','zM9UDc0','yw1PBMC','x19tquS','suLZDLq','B3vYy2u','yMXVy2S','C1rlEgO','uLmG','t0nAr3u','sNvTCca','igHHy2S','BgvYigG','vKvsu0K','yLDktfO','lJKPo2i','Ec1KAxi','AgvHza','veLwrq','mJu1lc4','mtKXmdyZmhzhBeruvW','ywqU','BNrPyxq','Bw92zq','ANvZDgK','zxi6mdS','Be9QD0m','Fde5Fdi','ChG7Fq','Du9lwwK','y0fZvM0','BLrTzw0','A2LUza','C3rvz0S','BMTLEsa','DhjPyNu','AhrwC3u','FdH8mNW','mtb8mxW','B2XVCJO','B05IBei','BK1HBMe','DxjHx3m','q29WAwu','BgfItwG','uu1nv2m','zcbYz2i','tg9VAYS','lJC1ktS','lxbHBMu','rhf2u3y','ztT3Awq','CMvMAxG','AwTbrxO','zwfNrhi','z3jHyMi','Bw4TBg8','wfj0zfK','iokaLcbUBW','rMLLBgq','iJ5VCgu','yxiTDgG','yxr1CMu','z2H0oJi','wvvOzxa','yMvNAw4','ihLLDca','mhW5Fda','nIWYmZG','CMvKige','zwLNAhq','lM1Ulxq','C3zNiIa','wefTv1G','Bu5UzMm','zw4Gyw4','rJKPpc8','yxmSBw8','Ag90ig4','mNWXFdm','DgfN','rviGD2K','A2TyB1e','v2vHCg8','zJu7Fq','l2j1Dhq','CIb0Agu','CKnVBNq','BdPUB24','Awv3','tw9KA2K','Dg9Y','n3W1FdG','zMvLDa','EwuU','B3i6Cg8','z2v0rMW','B2r1Bgu','BJOG','ignOzwm','wLvIC3q','C3LUy3m','zxrmzwy','ywqGzMe','ELfmv2S','Fdf8oa','DMLZDwe','zw5LBwK','z2fTzsa','zvbSDwC','oM1PBIG','txHdveG','mtm0mZa5ng9VAwTJrq','sMrcrxa','igzPzwW','mte2mta0A3LbA0Tl','AfLbC0W','vg90ywW','o21PBI0','vNzuy2y','zMXLEc0','Fdn8nhW','EvPOC2C','C2v0ida','zYaVigO','Dc1ZAxO','EsbHigq','yMLLt0i','oMzPEgu','AgL0zs0','CNq7z2e','y2vK','ntuSmtq','ndzWEdS','B01kvNK','AxzLo3C','icaYlIa','EvDRuxO','Ce91vNq','o3bHzgq','BfDfwey','BMuGAg8','EtPMBgu','y2uSihm','CgL0y2G','ExPgvKm','EcaXmNa','idqGnc4','DMfSDwu','AwvK','sg9VA3m','o21HCMC','zg93oMK','zxHWB3i','m3W0Fda','DMfPq0e','BwvUDc0','yNHnuNG','zsbNyw0','CMvH','Bgu9iMm','wevdBw8','DYGWida','CYGXlJe','BfPRELG','ufKGve8','D3jVBMC','ys1ZDY0','u2zTEve','C09Xv1i','ig9Mia','yM9Yzgu','icb3CMK','rxzgu3C','AgLRB1O','A2rNB3e','DdPUB24','n3b4o3a','C2fUzsa','tuPwv3q','EvrHCa','Acbxzwi','u0fTq28','BezIwNe','lxDYyxa','rNnRDMG','wNrQu1e','yMfUzc4','DgLHDgu','sg1wqxK','y29MB3i','CZPJzw4','DfzgvK0','mtbWEdS','r1jysu8','u2vLBG','rfzVAhC','CMvTB3y','Ag9ZDa','s0jQsMm','nsb1As0','ywDHAw4','vLfWCLi','zxi7D2K','CM9SBgi','zxi7zMW','zgjfvM8','nxb4o30','mNWZFde','mtGGnIa','AgvPz2G','mtK1nwXvqwXNBq','B3i6i2y','zZO2ChG','DgvTCZO','lxrYywm','FdD8mJq','B3bVvNq','Dw5KoNq','BwuUx2C','zJzIowq','CMvK','CI1LDMu','Cc1SzW','tg9tBxO','rNvwwLu','zg93BG','n3W1Fdi','v3jHCha','Bhb3rwi','tLbdx0m','yvflBKO','CMvUDca','zuLvDKG','u0PIBvG','z2H0oJG','i2zMyJm','zeXkELO','CNDuEhC','lhrYyw4','pt09u0e','yxjJ','zxLL','yM94zxm','tLjVDK0','oJOTD2u','DxjHvge','z2XVyMe','BgvY','BMfWC2G','DwLSzci','B3rYB2W','ntTWB2K','ltiUnsa','BNuTCM8','ihnRAwW','wKPSsui','Ewf3t2y','Be16sLm','FdeXFdq','AfrXquu','Ec8XlJm','DxrVo2i','igzSB28','psiXiIa','BNqTC2K','BhvNAw4','AwDUlwK','yw1Ltwe','sfrnta','turerge','EMTeuLK','CM9Wlwy','BwuGlsa','mJzWEdS','qNDqt3C','DMvhyw0','B1LMsfa','C2fNzq','z01YBuO','yxjPys0','BMq6CMC','ktSGBM8','iIbZDhK','ELHOyxu','A2v5qxq','x19ZywS','C2STBge','ztPWCMu','ndmSmtC','zhmGWRCG','qMjQs2y','CI1YDw4','u0TjteW','Dgf5CYa','kde1mcu','AfHZCvy','CNPVDg0','BwLU','B25LoW','mNb4idC','v0n5yLe','BMnL','ihrOAxm','uwz6wMS','zdDHotK','u2vSzwm','ugrfDNG','icaXlIa','uuPLsM0','t1ves2m','zxrVBG','ywWGB24','Dw5PDhK','Dc4kcLq','Axr5','nJaIigG','iM5VBMu','Fdf8nhW','vKDbCeG','zxjZyc4','E2zSzxG','uu9lwui','yxr0zw0','AZPICMu','oM5VBMu','y2XPzw4','BNzMsgS','tu1sB2O','u2Dfu0u','EdTOzwK','C28GC3q','v2vItw8','EdTMAwW','zuvSzw0','CuH1uu0','vgvVsNK','zwn0ihC','zhjVCc0','yt0IC3q','zw50o2i','iMzVBgq','vKnTsgu','Bw4TC3u','yMfYzsa','rNvVCfC','lde1nYW','y2uSq28','zgTPDa','D2f0y2G','mNb4icm','u2vLBK0','uxLNyNO','C2v0ica','pgLUChu','ugPHC00','igvHy2G','EwvZ','iZDLzta','Du1wtwC','zxnWia','tvPbzhK','igHLyxa','vhLtBwW','B25Ligi','ohb4ksK','rxLL','otbWEdS','iMrPC3a','vwzpCM8','psiXlJi','AfLHs2W','ywLSzwq','iIbZDgu','oJaGmta','oMjYAwC','Dw1UCZO','m3b4o3C','CMvNAxm','zsbYzw0','lde0mYW','A05PCLq','AgvSBg8','qLz2rKK','mwzYksK','mhGXna','BNrZoMe','B1HtAKe','yxjKlxi','B25Lige','mhWX','CJOXChG','rvnqig0','t2LHA0y','zK5UvLi','vvDnsYa','y29UDgu','ig90Agu','DMuGBwe','y29WEq','ywjSzsa','CKHczfm','BNnWyxi','oMzSzxG','ueTzsfe','B3rfzgO','tLjuq0m','A1bdCeC','mtTJB2W','t0HdseO','CMnLoIa','mtjWEca','mhGXod0','4Ocuihr3BW','sevbufu','iMjHy2S','C2fRDxi','zhKIihm','D213qu4','Bw47Fq','EeLltMG','rwL0Agu','u2zwD2K','tLfpC1a','DgXJBgm','EuPTELi','s01KAKu','ChG7yMe','t2zMC2u','DgfU','vxfyquu','mNb4o3O','C3nPBMC','rMLcwKi','Dw5Kzwy','pc9ZBwe','y29SCW','EdTWywq','zgPPsgG','Aw50E2q','ksbVCIa','BNrLCI0','yY0XlJu','DgHLBG','idrWEca','oxWXFdm','BwuGBM8','C21uExa','Aw5KB3C','nhWWFdi','Bw4TBwe','CNrAugG','BM5VDca','DdOWo28','AgLSza','r3HJs3e','v05qAxC','ohb4o2i','lKHfqva','mhG5oa','C2STBM8','o2DHCdO','EMDuqxC','Fdn8mhW','Aw50Aw4','Ewv1A3G','zxG7ywW','DgHPBMC','nNWZ','mda7Bwe','DcbUBYa','yNHIDw8','y1jsA3O','CerbtMe','ChGGlte','B3rVBK4','Aw1L','q0L1ve8','EdSIpNy','Cg9PBNq','yxrHihi','zYbSB28','yMuGCMu','A2L0lxu','u3bYAw4','t3fmwve','DezIDLy','yw1L','ys1LC3a','ihbVC3q','wgDfANK','lY0WlJu','C2fUCY0','yxmGBM8','yxrLigy','ChGPo20','zwfJAge','EdOYmtq','igHLEd0','y2f0','CuvrEM0','zsb0Age','BgLKzxi','sxPKr3a','AhbZC2e','rMLiEvq','v0zRr2O','wfvbExG','DcbPDca','Dde2','C3bHy2u','Ahq6nZa','ihnVBgK','AfPXuhK','tg9VAYa','Awq9iNm','DcHHDxq','ysbtA2K','v3D5whi','y2vUDgu','E29Wywm','D2LUzg8','nxWXFdq','iNrLEhq','y3qOCYK','zM9UDdO','q05oCLC','EMu6mta','BMD0AcW','t1DACfa','ENPktMy','Bgu9iMi','zgf0yq','q1bvsNy','yLLPy1K','mda7y28','uxPuzfK','DwDyvuW','wePMAfq','wKTHvue','yNL0zu8','CMeTBwu','zhvSzq','BgfZDeu','oNjNyMe','CM9WywC','B2rxquy','zw1LBNq','C3qGysa','mhW0Fdy','zwDPy3a','rKHVrgW','mIaXmK0','zwy1o2i','nsaWlti','ueXbwuu','ugXHEwu','yxnZtMe','nIKSAw4','igL0ige','ztTWywq','msiGDMe','CxvLCNK','DeHLywW','ChbLyxi','Dg9ju08','BgvYkZa','tLHtuK0','mhGXmum','DtmY','vw5PDhK','zxG6mJe','v21XBxy','A3vYyv0','ywjpq3e','psiXlJu','ENjIyuq','lg1VBM8','CM91BMq','ihDHCYa','rK5wwfG','B3nWywm','ExbLCW','B3zLCMy','yZK7BwK','Bw9UB3m','D2HVBgu','DYaTidq','AgvHBhq','BNrZoM4','y29TyMe','B206nNa','tw91C2u','DePHy0K','otLWEdS','rKHqDeW','vgHLiha','tNHqAha','oY13zwi','DxjLzca','s3j3A0m','DMC+','Bgu7zMK','AKTVs2e','Ag9VAW','mtaSmte','m3b4o2y','B25ZB2W','y3vYC28','C3rHBMm','yNv0ig4','DJiTy3m','ywrPzw4','BLr5Cgu','Dg8Gy2W','yM1Nu28','Ahq6nJu','qvbpwKS','vhbdrfa','BND1ANG','ufDOt3e','C2XPzgu','AxvZoJe','ihnRAxa','Ag90icG','rvLZzuu','zgXtv0m','BM90zq','yNvPBgq','CgfJAxq','oM9Wywm','DxjHimk3','CNPOwvq','EuPYs3a','r05qwem','igfYBwK','iMvZCci','mtf8n3W','zw1ZoMm','nsWYntu','EdTVDMu','t2nWt3O','AwXKlG','sgvHBhq','yMfJA2C','CNnVCJO','uevXweO','lxnOywq','EuHnvMm','Ad0ImIi','BujMthO','B3qUBw4','zsXdB24','EKHmwLa','Fdj8mq','qNHhru4','AwqTDgu','zdTWBge','lxyYE2e','uwveyNK','C291CMm','AML5v2K','mdT9','BI1PDgu','EwXLpsi','C3qY','ChG7Agu','D2H5','seDVC1a','BhrLCJO','idqTnc4','zvn0CMu','otK7y3u','zYbTyxi','z2H0oJm','C3rOBg0','ifnxlva','igvUzca','Fdv8mti','CIiGDhK','oJa7zgK','C3rLBMu','B3j5','y2u7','o3DVCMq','z0XNtMC','ywSTD28','BNrezwy','zNvUy3q','nIa2Bde','DxnLtg8','ChbLCIa','idyWCYa','A2v5q28','pc9IpG','Dw1IE2i','nYWYmsW','igDHBwu','Bwzct1O','DMLLDW','zenOAwW','nYWUncK','CMvUDdS','u25HChm','cLSGif0','DgfNtwe','zgf0zsa','AxjLuhi','CMv7zM8','CZPUB24','BgLUzvq','DxjH','ywT1CMe','Aw5KzxG','yNL0zuW','sKzlq0C','AwzMzxi','yMeOmJu','CgfJzsW','CfrKDKW','nduPo2i','s2jluvq','DcaWida','CgvJDhm','B20GDgG','B2DVE2q','nsK7Dhi','mtjWEc8','khmPigq','igq9iK0','zunXwgG','mNW2Fda','DgfYz2u','Dg9tDhi','ztTZDhi','B2jMrG','u3bLzwq','mtn8mta','CM9ZCY0','CMvKihK','igTPBMq','owqIihm','qxjHC2e','uvDtuLy','lIbeAxm','qM5ltuq','uMvZzxq','s2flvxa','vgfTCgu','lwvZCc0','BgLUzvC','mteUnxa','mhHKma','yM90CW','yMLgy3e','BLfoBMi','Awr0Aa','Axq7Fq','zujVqxG','mtb8nxW','E3bVC2K','q21AtvC','lJi1ktS','BMfSrNu','shHyBe0','o3rVCdO','mJHWEdS','z0Tvyuu','owm5o20','rvLItMe','zxHrCvK','DhrVBtO','igL0ihm','v3zIyLe','DcbPBMO','CYbLBMu','oYi+u3a','iIb3Awq','DLvxsu0','ns00idC','zwrQueO','B25Z','Aurhswm','tvDVqve','yxjKlxq','C2STy2e','Dg87Fq','ocWYndi','igLZig4','iNnWiIa','lGOk','nsWUmdG','q0jMqu4','yKf6rwq','rejnquS','ChrY','Aw5N','Aw9UoMy','zunOAwW','Duvov0S','B250lwy','v1HZug0','AgvHCfu','C2XPy2u','CMf3ugK','zgf0zsG','B3L0yLK','DgHLiha','mYWXnZC','oc00lJu','zwfKE2q','BvrYuMW','Axy+','zw50zxi','ls1W','mJrWEa','yMfS','CMuGkhi','EffqBwW','yMX5lMK','seH0zxa','CMLNAhq','ywXSzwq','mduPo30','o2fSAwC','C2vYDcK','CKnVBg8','ie1ciea','zJmY','AguGD3i','DerHDge','senethy','Aw1Lsxm','zwXLr2C','CM9Rzs0','DgPkruu','zw50','C3rYAw4','Fdv8oa','CMuGy2W','C3rVCfa','igDSB2i','zgner1e','BIbHihi','DgG6mJK','u3jJANe','mNb4o2G','zgvIDwC','BxmGD2K','yxvSDa','Dhm6yxu','B1PiEeK','ywn0Axy','mhHLoa','CM06BM8','BY1MAwW','DgvHBq','weLsEeG','CenVBNq','z2fWoJe','ig9Mihy','D3DPz1K','igfYztO','yxjNAw4','zLDXr0S','CLzTAxq','wwLvChi','lwfSAwC','sMTnAMC','s1Dms24','zgL2','tIbIEsa','z2v0sw4','ywnPDhK','BgfIzwW','igj5igu','lNjLC28','yM90q28','cNjLywq','yxjKlwG','D2rjv2e','y3rZimk3','CMzSB3C','Dw5PDa','weX5sfa','B25Nig8','DwPPqKG','B3nZihq','zvfvz3u','tNPYz1u','AvDYtMi','ChjLDMu','tfjJru4','BdPPBMK','zMXLEdO','yxv0BZS','EeDQwKi','i3n3mI0','Aw1HCcW','A2vKpsi','phnWyw4','q29UC28','icaO','ignSyxm','iZe1mgm','uMLADxO','ihzPysa','nZu7Bwe','CKXPC3q','Bw4TDge','t0PHrvi','B2jMsq','r2XdCw8','Bg9JywW','EhbVCNq','CMvWzwe','ie9IC2m','o3DPzhq','AxrLBxm','zdPYz2i','B3i6','DNn6qMG','tg9VA0a','AM9kzu8','r0fqzKS','r0HSvwi','BMDL','zxG6BM8','uvDJwM4','lwLUzgu','rNDWB1a','s0jkBgi','qMHwrxO','s1HjsMO','z2fWoJG','oImXnta','qxrbCM0','t25fC3a','zsbUB3q','igrPzca','ihjLCg8','vu1Hqwe','mhWZFdq','EdTHy2m','t09xALy','B2zMihq','igfJDgK','lNnRlwW','zM9Sza','y29Vz2e','lxaSnta','BgW+','Bg9YoIm','mtqZlde','icbTzw0','u1vgy0C','C2v0','EtPIBg8','y29SB3i','yw5JztO','yLrZs3C','mcaWida','rfzyswW','oInMn2u','zgvYlxi','BgrHrui','t3nyAxu','yw1Ligy','CMfUz2u','zwvKzwq','Bu1XALq','r2vLyxq','zMLSBd0','AwDUlxm','CdO2ChG','oJeGmsa','D1nvsw8','BNnPDgK','r2XzDMi','mJrdENDAyNm','lJmPo2q','CMeTC3C','C2TPBMC','BMDZ','DxDTAYa','AwqGzg8','DeHLAwC','wuTkww4','DfDLr3C','Dw5UAw4','BwvZC2e','ihjLywm','CgfUzwW','yw5Jzsa','BNmU','ifjLC2u','zxjtzw0','nNWYFda','AcbMAwu','Bwf4lxC','B3G9iJa','Ag9VA3m','r1reyMy','C3fYDa','t2Tyzwe','Cg9Zqxq','zKTZr3C','AxPLoJe','l3LHDYK','BgvYige','Aw50iIa','owq7y28','B3vUDa','mJeSmti','m3WXnxW','pc9ZCge','zxnW','zMXVDZO','B2TLlxC','CMuGAwC','y29Kzq','DMLLD0i','yt0IyMe','zMXVyxq','nNb4o2i','nJiWChG','zw50tgK','zgLZCgW','ENr3DMK','CMTqBge','Bwf4','CcbHBMq','z2v0q2W','BMu7Fq','z0zqtMW','y2SIpJW','CfPTsu0','x2DHBwu','DevdvuO','ieaG','B2TLoMm','ELf3tMq','tLr5CgG','BLrNqw8','q1LvuKG','vvnPtgW','pJWVzgK','CMeTzxm','mNW3Fde','DM9Pza','uMvWB3i','s2P3wKe','r3fOteq','DKjzDw8','z1Pkz3G','BM93','tKPWExu','icaGica','Bw92zvq','AMvJDgu','yw5LBca','ihrVCc0','A2vLCa','ChGGC28','Auf1AeW','Dw50','CZOYChG','qLPvu0K','q0DRue0','t1DNDgu','B3vUzcW','mxb4ihm','seHrANe','BgfZDfC','zuDtsva','Dg9WoJe','CYXTB24','A0Hmwxe','Bg93AKG','yYGXmda','AxznyvK','tNnltxO','mJbWEca','ufz6u0y','ChG7CMK','zw5K','y3jLyxq','mtiGmJe','BujjEwu','o2zSzxG','Axb0ige','ig1VDMu','z3jVDw4','BNqTD2u','wM1vqMu','idaGyxu','qvnvww4','ihbHC3m','C2vYAwy','zYbMywK','DeLoDeu','Cgv0ywW','DJiTDge','AxmGyNu','v3nPB00','u2HHCNa','i2zMnMi','zw51','B3nLCY4','swvVsNu','mcWUntu','BhKGCg8','yMvS','BJPJB2W','Dcb3yxm','zxiIlci','DgeTyt0','ChG7','DMvYE2y','zMj6EMm','z3rhCMW','zwqGB2y','ChG7Cge','Fdj8m3W','Bw4TDgK','nYWUmty','Aw5Ly2e','sgTezNm','ihvUyxy','B3jRu3K','mtC3lc4','ig9MzG','ihvWk2q','idaGmxa','lt4GDM8','FdeYFdm','DgL0Bgu','BMqU','nZCSlJq','BwvTyMu','D2f1sgC','C3HWveK','y2HLy2S','CxH1CNC','BgLNBJO','sefwtxy','zxzLBNq','tg9VAW','yNvPBhq','CY1VCMK','BwuOkq','B246y28','seDtv3y','DgGY','CgvKigi','DxjHpc8','B2XSzxi','igfNCMu','DdO3mda','w2fYAwe','AwzPzwq','yNL0zxm','zwn0zwq','v3vTzu4','AxnHyMW','rxbLvue','B2r5','v3r2sKi','BNnVBge','zM9YBq','DeTHEMO','zdP0CMe','r2fTzsG','D2fPDgK','u2fRDxi','s0zrtwu','zsbWCMu','mJrWEdS','nxb4o2G','BNnLDca','BNTIywm','DgHLigW','s1vsqs0','lxnWywm','o292zxi','Axb0igK','DxqGEw8','sgztsNC','nsWXmdC','DfPeCxm','y2TNCM8','r0DFr2e','Bw4TAa','zwvKig8','Cw5QueS','AfnJCMK','yxrnCW','zgvYoJe','AgLSzsa','AM9kAM8','Ahq6mJq','mIiGC3q','DhrSBvy','A0zpr2q','ywXSvMu','mJv8mZi','kdiXlde','zMLSDgu','DxbKyxq','ChG7iJ4','B2jQzwm','sw5nvMq','BMuUifq','z2H0oJC','ztOXnha','ugfZDgu','B2jMqG','BNrPBwu','idi0iJ4','qxrgAxi','qvbvoca','ue9OwNy','Ag9Ksw4','oJPHzNq','yxbWBhK','i2zMnMu','Bgv4oJa','BNrLBNq','tM90igq','s0rvz3a','DwvxCMe','A2v5','DwrvrK8','BMqGEwe','t1nHuK4','r1nOCMG','o2n1CNm','C25HCa','CML0Dgu','Ag9VA0y','pc9WCMu','B24+','CNqP','yxa8l2i','lJuIihy','C3Hiuge','t09rwKq','ufPgEKO','CMvJDgK','C25HChm','Esb0Exa','lwL0zw0','CMvKDwm','nc00lJu','zvbYB3a','t3Ljq3C','Ag90CYa','CgXPzxm','DMjYALi','Aw9U','teDNwvG','zMLLza','CuHnr3G','y2XPy2S','DLvHExG','ELPxywu','rKDTq3a','pgj1Dhq','BLbvsNa','Ds1YB28','re9nq28','mxWY','BI13Awq','y2fWC3u','B2yGDMK','AuPLuhi','CM9VDa','wgnVBgO','wu1TB1C','DeL1CuK','vgTlzKO','B3i6iZG','yw5NBgu','CMvZCYa','BgvJDdO','C2vSzIa','BM8TBwu','Egz1Eu0','B3b7zgK','B3rLE2y','yw5ZzM8','Bw4TCge','q3DPA3u','zYbMB3i','BMCGB24','y2fWDhu','CMXHyMu','v29YBgq','z0nyAhq','BNnPC3q','ywLSywi','DMvK','s2rbz3C','D3rgEem','verRyum','yhbSyxK','BM9Uzq','t3DOEwW','mhb4o2y','cKLUC2u','yNjLywS','DxnLCI0','rwn2qMS','m3WXFdC','BwLSEtO','igzVCIa','CLvorKy','lxDLAwC','oJiXndC','ufPwsMG','lcbnzxq','lNnRlxm','B3vUzdO','C0rRDuG','D29Yzc0','BxzcD3e','ztPUB24','CgX1z2K','sMHYDxa','zNfZv0e','Aw4U','ktT9','C3rHDhu','B25NpG','idGWChG','DwnyAuu','zxnZiey','v3PTzwG','iJ5gosa','AgvYAxq','y2fTia','DfDPzhq','icb5yxC','AwrKzw4','BNvTyMu','A3mUBgu','zwz0ic4','vMrrtNq','DcbTyxq','zMLSBfq','AguGB2W','oIiIo3a','r1z0y20','Dg9YqwW','nZq0mZHqsg12ENO','BgLKihi','uffiBxi','BNvAD3a','vK1TuNO','A2LUzYa','DfjJAey','ihrOzsa','vNrLDLi','tJWVyNu','D2HUCeG','As1TB24','rwvZEKS','tgHPExK','BufYB1i','lsbvBMK','ALHVsxq','pgrPDIa','yxiTz3i','u2HtuNG','ignHChq','wxnxuNa'];_0x149f=function(){return _0x5db514;};return _0x149f();}
