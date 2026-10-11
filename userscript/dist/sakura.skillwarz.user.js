// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.4
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

function _0x4a91(_0x220a6b,_0x5e72b6){_0x220a6b=_0x220a6b-(0x91*0x40+-0x261+-0x2089);var _0x13dbea=_0x5328();var _0x2dd580=_0x13dbea[_0x220a6b];if(_0x4a91['DcvhvA']===undefined){var _0x57fdc1=function(_0x519fcb){var _0x36957a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4bb209='',_0x12e14b='';for(var _0x48a61b=-0x209b+0x1*0x1786+0x915,_0x4c493b,_0x6693d9,_0x5cd3d9=-0x1*-0xcb5+-0xe83+0x42*0x7;_0x6693d9=_0x519fcb['charAt'](_0x5cd3d9++);~_0x6693d9&&(_0x4c493b=_0x48a61b%(-0x1105*0x1+-0x1*-0x17b+-0x1*-0xf8e)?_0x4c493b*(0x9e9*0x1+-0x907*-0x1+-0xd*0x170)+_0x6693d9:_0x6693d9,_0x48a61b++%(0x1a00+-0x141+-0x18bb*0x1))?_0x4bb209+=String['fromCharCode'](0x47*0xb+0x21c7+-0x23d5&_0x4c493b>>(-(-0xd*-0x2e0+-0x7eb+-0x3*0x9d1)*_0x48a61b&-0x3*0x585+0xad2+-0x1*-0x5c3)):-0x11*0x24a+0xad4+0x1c16){_0x6693d9=_0x36957a['indexOf'](_0x6693d9);}for(var _0xa6b016=-0xa73+-0x42+0xab5,_0xfc9160=_0x4bb209['length'];_0xa6b016<_0xfc9160;_0xa6b016++){_0x12e14b+='%'+('00'+_0x4bb209['charCodeAt'](_0xa6b016)['toString'](-0x68*-0xd+-0xa9+-0x185*0x3))['slice'](-(0x15c1*-0x1+-0x6c8+0x1c8b));}return decodeURIComponent(_0x12e14b);};_0x4a91['Sejvaw']=_0x57fdc1,_0x4a91['xRLGXp']={},_0x4a91['DcvhvA']=!![];}var _0x3159a9=_0x13dbea[-0x110e+-0x26*0xbf+0x16b4*0x2],_0x4c762d=_0x220a6b+_0x3159a9,_0x43de69=_0x4a91['xRLGXp'][_0x4c762d];return!_0x43de69?(_0x2dd580=_0x4a91['Sejvaw'](_0x2dd580),_0x4a91['xRLGXp'][_0x4c762d]=_0x2dd580):_0x2dd580=_0x43de69,_0x2dd580;}(function(_0x44cb2b,_0xa5acec){var _0x29cf45=_0x4a91,_0x5f18a6=_0x44cb2b();while(!![]){try{var _0x4775bc=-parseInt(_0x29cf45(0x661))/(0xfd6*-0x1+-0x1150+0x2127)*(-parseInt(_0x29cf45(0x286))/(0x1*-0x17d6+0x8c5+0xf13))+-parseInt(_0x29cf45(0x818))/(0xb5a+-0x1*-0x346+-0x1d*0x81)+parseInt(_0x29cf45(0xb9d))/(-0x1289+-0x20ca*0x1+-0x1*-0x3357)*(-parseInt(_0x29cf45(0x94f))/(0x6*-0x45f+-0x1eb7+0x38f6))+parseInt(_0x29cf45(0x6e6))/(0x22e+-0x135e+0x1136)+-parseInt(_0x29cf45(0x32d))/(-0x26c1+0x1f29+0x79f)+-parseInt(_0x29cf45(0x810))/(-0x763+-0x1*-0xf07+-0x79c)+parseInt(_0x29cf45(0x449))/(0x1c05+0x5*-0x761+0x8e9);if(_0x4775bc===_0xa5acec)break;else _0x5f18a6['push'](_0x5f18a6['shift']());}catch(_0x597a9e){_0x5f18a6['push'](_0x5f18a6['shift']());}}}(_0x5328,-0x1*-0x53f17+0x50f2f+0x11179*-0x4),((()=>{'use strict';var _0x16065b=_0x4a91,_0x4490c7={'kCzII':function(_0x40e935,_0xfd59c7){return _0x40e935!==_0xfd59c7;},'hUWTj':_0x16065b(0x290),'JbxSU':_0x16065b(0x21b)+'e','prGAs':function(_0x235204,_0x2e4a50){return _0x235204<_0x2e4a50;},'NENTw':'\x20acti'+'ve','lAfMD':_0x16065b(0x2d5),'IKPcP':function(_0x6f5206,_0x5a0d9e){return _0x6f5206!==_0x5a0d9e;},'uUMMo':'TcQog','ChjQq':_0x16065b(0xb37),'XcdGH':function(_0x3bdc32,_0x4d429b){return _0x3bdc32&&_0x4d429b;},'BDhVR':_0x16065b(0x157)+_0x16065b(0x748)+'v2-ta'+'b','lQWQi':function(_0x39047d,_0x438d14){return _0x39047d+_0x438d14;},'gehBI':function(_0xc4b777,_0x25cbb4){return _0xc4b777+_0x25cbb4;},'oqCkp':_0x16065b(0x5bd)+_0x16065b(0x50e)+_0x16065b(0x628)+_0x16065b(0x274)+_0x16065b(0x972)+_0x16065b(0x212)+_0x16065b(0x7c4)+_0x16065b(0xa9e)+_0x16065b(0x504)+_0x16065b(0xa79)+_0x16065b(0x9bb)+'143,1'+_0x16065b(0x503)+_0x16065b(0x5e2)+_0x16065b(0x9f6),'RfKac':_0x16065b(0x157)+'a','Tvnmq':_0x16065b(0x4af),'pImuV':function(_0x553913,_0x5dcde7){return _0x553913&&_0x5dcde7;},'qySEI':_0x16065b(0x814)+_0x16065b(0x6a8)+'ixed;'+_0x16065b(0x4f3)+_0x16065b(0x215)+'top:1'+_0x16065b(0x81e)+'-inde'+'x:214'+'74829'+_0x16065b(0x1ef)+_0x16065b(0x8e8)+_0x16065b(0x6ba)+_0x16065b(0x3e8)+_0x16065b(0x4cc)+'lect:'+'none;','DsLgU':_0x16065b(0x28e),'BkvCV':_0x16065b(0x1bd)+'b','ppTIJ':function(_0x8e40f2){return _0x8e40f2();},'rWzbR':function(_0x5e1c6d,_0x2419d4){return _0x5e1c6d===_0x2419d4;},'ROkhe':_0x16065b(0xa70),'UMlZK':_0x16065b(0x9dd)+'ra-sw'+'-v2{a'+_0x16065b(0xb87)+'itial'+'}','WWMfv':_0x16065b(0x9e1),'enLMq':_0x16065b(0x811),'CnDPt':function(_0x1550a1,_0x43e307){return _0x1550a1(_0x43e307);},'zMSoX':_0x16065b(0xb0d),'ExPZP':_0x16065b(0x755),'ZrFJR':'auto','OSjsM':'QtNvn','YGNdK':function(_0x4808db){return _0x4808db();},'gWkIN':function(_0x2d0596,_0x34a998,_0x153453){return _0x2d0596(_0x34a998,_0x153453);},'hdHgk':_0x16065b(0x26d),'vquKm':function(_0x1b3d1c){return _0x1b3d1c();},'WLPDS':function(_0x380a8f,_0x483cc9){return _0x380a8f===_0x483cc9;},'KbZOO':function(_0xe94904,_0x29ed8f){return _0xe94904||_0x29ed8f;},'aJbTQ':_0x16065b(0xae4)+'c7','CZONx':function(_0x3fb141,_0x44fcb8){return _0x3fb141+_0x44fcb8;},'TjTYH':function(_0x3d2af5,_0x3527fc){return _0x3d2af5+_0x3527fc;},'ALyvu':_0x16065b(0x665)+_0x16065b(0x1ab)+_0x16065b(0x84d)+'es\x20th'+_0x16065b(0x2e4)+'rscri'+'pt\x20IS'+_0x16065b(0x82f)+_0x16065b(0x96d)+_0x16065b(0x830)+_0x16065b(0x5b9)+_0x16065b(0x819)+_0x16065b(0xaf4)+_0x16065b(0xb77)+'l,\x0a','FuNcn':_0x16065b(0x7ce)+_0x16065b(0xb7d)+'ainin'+_0x16065b(0x440)+_0x16065b(0xa3a)+'\x20are:'+'\x0a\x0a','lZuca':_0x16065b(0x2f2)+_0x16065b(0x6ad)+'rmonk'+_0x16065b(0xb63)+'\x20not\x20'+'injec'+_0x16065b(0x3c3)+'into\x20'+'the\x20c'+_0x16065b(0xb6d)+'origi'+_0x16065b(0x361)+'ame.\x0a','NJFTk':_0x16065b(0xaab)+_0x16065b(0xaa8)+'sakur'+_0x16065b(0x7cf)+'llwar'+_0x16065b(0x174)+_0x16065b(0x366)+_0x16065b(0x99e)+_0x16065b(0x99d)+'d\x20dia'+_0x16065b(0x1f2)+'ipt\x20a'+_0x16065b(0x946),'jNPCb':'\x20\x20\x20\x20\x20'+'insta'+'lled\x20'+_0x16065b(0x5e6)+_0x16065b(0xa6f)+_0x16065b(0x6df)+_0x16065b(0x8e2)+_0x16065b(0x47b)+_0x16065b(0x866)+'h\x20Web'+_0x16065b(0x852)+'bly.i'+_0x16065b(0x1ad)+'tiate'+'.\x0a\x0a','JACyQ':function(_0xc72a14,_0x28a768){return _0xc72a14===_0x28a768;},'ShjNJ':function(_0x375270,_0x283df3){return _0x375270===_0x283df3;},'mEaaS':_0x16065b(0x3f3)+'a8','GtVot':function(_0x287a78,_0x3796c0){return _0x287a78>_0x3796c0;},'vUPWd':'#ffd4'+'8a','iYJQV':_0x16065b(0x475),'xNwOI':_0x16065b(0x9a8),'JWjtm':_0x16065b(0x644)+_0x16065b(0x17f),'qwkGj':_0x16065b(0x7d0)+'\x20ON','Cjcri':_0x16065b(0x2c9)+'f5','GYrZO':function(_0x1e2fc7,_0x42d8e1){return _0x1e2fc7===_0x42d8e1;},'jStoH':_0x16065b(0xa1f),'goHkk':_0x16065b(0x6c8),'RrDOP':function(_0x4ca931,_0x590fc7){return _0x4ca931+_0x590fc7;},'PwDQd':'color'+':','cCRFE':function(_0x8385c2,_0x16db16){return _0x8385c2+_0x16db16;},'dwaDC':function(_0x1fbfab,_0x564bf6){return _0x1fbfab+_0x564bf6;},'eNAMw':function(_0x41d706,_0x29b024){return _0x41d706!==_0x29b024;},'rrAgA':_0x16065b(0x900)+'1b','GOKfV':'ms\x20wi'+'th\x20or'+'igina'+'lFunc'+'=','WwBYn':function(_0x38f267){return _0x38f267();},'GtghG':'displ'+_0x16065b(0x24e)+'ex;fl'+'ex-di'+_0x16065b(0x555)+_0x16065b(0xa26)+_0x16065b(0x7dc)+_0x16065b(0x9f5)+_0x16065b(0x34b)+'idden'+';','qZFSX':function(_0x49961,_0x5d216c){return _0x49961+_0x5d216c;},'RByHD':function(_0x100ce8,_0xca4f6d){return _0x100ce8+_0xca4f6d;},'ljPLF':function(_0x290851,_0x3c271a){return _0x290851+_0x3c271a;},'WatRI':function(_0xfc08a3,_0x3b099d){return _0xfc08a3+_0x3b099d;},'uGMaj':_0x16065b(0x276)+'ura\x20·'+'\x20skil'+_0x16065b(0x95a)+_0x16065b(0x4d4),'OZmef':'<span'+_0x16065b(0xa02)+_0x16065b(0x4ad)+'uild\x22'+'\x20styl'+'e=\x22co'+_0x16065b(0x1af)+_0x16065b(0x936)+'6;fon'+'t-siz'+'e:11p'+_0x16065b(0x857)+'ding:'+'1px\x206'+_0x16065b(0x79e)+'rder:'+_0x16065b(0x8e1)+'olid\x20'+_0x16065b(0x546)+'255,1'+_0x16065b(0x6f4)+_0x16065b(0x30b)+');bor'+'der-r'+'adius'+_0x16065b(0x471)+'x;\x22>v'+_0x16065b(0x870)+_0x16065b(0x39c),'xfZbo':_0x16065b(0x754)+'id=\x22s'+_0x16065b(0x5b8)+_0x16065b(0x316)+_0x16065b(0x6ef)+_0x16065b(0x790)+'lay:n'+_0x16065b(0xb9e)+'>','Ndjbh':'<div\x20'+_0x16065b(0x8a0)+_0x16065b(0xafc)+_0x16065b(0x34e)+'8px\x201'+'2px;b'+'order'+'-bott'+'om:1p'+'x\x20sol'+_0x16065b(0x68b)+_0x16065b(0x5a7)+_0x16065b(0x668)+',177,'+'.18);'+_0x16065b(0x25b)+_0x16065b(0x24e)+'ex;ga'+_0x16065b(0x9ab)+_0x16065b(0x25c)+_0x16065b(0x6c0)+'ms:ce'+_0x16065b(0x673)+'flex:'+'0\x200\x20a'+_0x16065b(0x24d)+_0x16065b(0x607)+'rap:w'+'rap;\x22'+'>','NLDFL':_0x16065b(0x7ec)+'on\x20id'+'=\x22sw2'+_0x16065b(0x82a)+'\x22\x20sty'+'le=\x22b'+_0x16065b(0xa97)+_0x16065b(0x53c)+_0x16065b(0x955)+'paren'+'t;bor'+'der:1'+'px\x20so'+'lid\x20r'+_0x16065b(0xb3e)+_0x16065b(0xaa3)+_0x16065b(0x761)+',.4);'+'color'+_0x16065b(0xad4)+_0x16065b(0x84b)+'order'+_0x16065b(0x7ed)+_0x16065b(0x1cb)+_0x16065b(0x857)+'ding:'+_0x16065b(0x6da)+'px;cu'+'rsor:'+'point'+_0x16065b(0x420)+_0x16065b(0x3ac)+'hot\x20('+'F9)</'+'butto'+'n>','pjNqh':_0x16065b(0x905)+_0x16065b(0xa02)+_0x16065b(0x9de)+'int\x22\x20'+'style'+_0x16065b(0x60c)+'or:#8'+_0x16065b(0x20f)+'\x22>F9\x20'+_0x16065b(0x642)+_0x16065b(0x677)+_0x16065b(0xb42)+_0x16065b(0xaef)+_0x16065b(0x606)+_0x16065b(0x1f1)+_0x16065b(0x3ab)+_0x16065b(0x19b)+_0x16065b(0xa57)+'ks\x20wh'+'ich\x20f'+_0x16065b(0x95b)+_0x16065b(0x65e)+'ich.<'+_0x16065b(0x20b)+'>','mfuyN':'</div'+'>','iEoyn':_0x16065b(0x849)+_0x16065b(0x7d1),'SPjOi':_0x16065b(0x849)+'x','GoByw':'#sw2-'+_0x16065b(0x983),'VxClf':_0x16065b(0x849)+'speed','DqlTf':function(_0x1154a9){return _0x1154a9();},'rCDrw':function(_0x2f971d,_0x50998d){return _0x2f971d(_0x50998d);},'UqZST':'range','SSvcB':_0x16065b(0x9a7)+'ider','yJfJm':function(_0x176807,_0x1fd613){return _0x176807(_0x1fd613);},'QcIEh':'span','CPoMi':function(_0x5bb67b,_0x2494e9){return _0x5bb67b/_0x2494e9;},'PAdeA':function(_0xe9ac95,_0x41f3af){return _0xe9ac95-_0x41f3af;},'njURH':function(_0x4050ba,_0x22b467){return _0x4050ba(_0x22b467);},'MNUwz':function(_0x3b7db6,_0x1a11f9){return _0x3b7db6(_0x1a11f9);},'nylaR':_0x16065b(0x955)+_0x16065b(0xaa2)+'t','NQffN':function(_0x5176b3,_0x3ab875){return _0x5176b3+_0x3ab875;},'CToKf':_0x16065b(0xa56)+_0x16065b(0x2fd),'PxWhJ':function(_0x2dc31a,_0x50614b){return _0x2dc31a/_0x50614b;},'mPYEB':function(_0x42458d,_0xce07c9){return _0x42458d+_0xce07c9;},'amPtL':function(_0x590dd2,_0x4e7317){return _0x590dd2+_0x4e7317;},'hEwhV':_0x16065b(0x7eb),'uSLPE':function(_0x3b5a01,_0x7c8ec7){return _0x3b5a01!=_0x7c8ec7;},'lSNbh':function(_0x1dc292,_0x3ebb17){return _0x1dc292+_0x3ebb17;},'WZyvC':function(_0x5543a5,_0x578d29){return _0x5543a5+_0x578d29;},'Kjwfd':'hooks'+_0x16065b(0x2fd),'esqda':_0x16065b(0x26f)+'ooks\x20'+_0x16065b(0x2f9)+'on\x20th'+_0x16065b(0x302)+'e\x27s\x20o'+'wn\x20Up'+_0x16065b(0x192)+');\x20no'+'thing'+_0x16065b(0x358)+'ured\x20'+_0x16065b(0x5ce),'TGpeP':function(_0x55e47b,_0x51556d){return _0x55e47b!==_0x51556d;},'gvGLD':_0x16065b(0x838),'cOoft':function(_0x2dd6de,_0x5c2fec){return _0x2dd6de<_0x5c2fec;},'PqXJc':function(_0x568866,_0x44e787){return _0x568866!==_0x44e787;},'VgCQj':'──\x20','LKGdv':_0x16065b(0x4a7)+_0x16065b(0xa69)+_0x16065b(0x6cb)+'\x20\x20\x20\x20\x20'+_0x16065b(0x4a9)+_0x16065b(0x929)+_0x16065b(0x3fb)+_0x16065b(0x3fb)+'raw','OAwUQ':function(_0x1f449f,_0x1c401d){return _0x1f449f<_0x1c401d;},'IbBsw':function(_0x259572,_0x5e66a9){return _0x259572+_0x5e66a9;},'hQjaz':function(_0x536a1d,_0x507b0c){return _0x536a1d+_0x507b0c;},'ktMAL':_0x16065b(0x69d),'nKNIl':function(_0x167377,_0x31e517){return _0x167377(_0x31e517);},'cfqHl':function(_0x58dc77,_0x22ffb2){return _0x58dc77!==_0x22ffb2;},'kolVp':function(_0x3f8e82,_0x1233ec){return _0x3f8e82+_0x1233ec;},'CqgGg':'\x20+\x20','hXWTN':_0x16065b(0x91a),'jKQNZ':'\x20\x20cam'+'\x20-','LYyHM':function(_0x3297a9,_0x23fe9d){return _0x3297a9>_0x23fe9d;},'mkClk':function(_0x12ea5f,_0x2c3f15){return _0x12ea5f&&_0x2c3f15;},'ZZQFO':_0x16065b(0x74e),'CRRGg':'ZKLed','SHmlz':'log','qOwPu':_0x16065b(0x22d),'NqZpI':function(_0x2f5a74,_0x5e1d76){return _0x2f5a74>_0x5e1d76;},'pQXWh':_0x16065b(0x4da)+'ion','zNPdD':'name','pBPNC':_0x16065b(0x8b5)+'ntiat'+'e','lBmDv':_0x16065b(0x36b),'NauiY':'Runti'+'me.cr'+_0x16065b(0x396)+_0x16065b(0x4c9)+_0x16065b(0x729)+_0x16065b(0x875)+'le','ZLxCG':_0x16065b(0x7e5),'XcCrs':function(_0x517c7f,_0x15d9f7){return _0x517c7f+_0x15d9f7;},'VtoWU':function(_0x1ab187,_0xe36304){return _0x1ab187(_0xe36304);},'rUqop':'HRgcU','BKvtF':_0x16065b(0x760)+_0x16065b(0x513),'vDODl':function(_0x3c3d67,_0x555f8b){return _0x3c3d67===_0x555f8b;},'MxNPH':function(_0x50b7c1,_0x14140c){return _0x50b7c1^_0x14140c;},'DbFiP':function(_0x1f1506,_0x44cc12){return _0x1f1506+_0x44cc12;},'sPGYG':'Reaso'+_0x16065b(0x433),'ZjbAU':function(_0x4d3ed9,_0x384500){return _0x4d3ed9!==_0x384500;},'dHtHw':_0x16065b(0x5db),'vNMMd':'vRrtg','vLicl':'HuEmB','dvzkU':_0x16065b(0x9d2),'yGuOd':_0x16065b(0x70f)+_0x16065b(0x5b6)+_0x16065b(0x3d6),'foyPI':_0x16065b(0x3da),'FpcFI':'BniPh','uDfKh':function(_0x41234c,_0x2436c0){return _0x41234c+_0x2436c0;},'WqWjM':'.Modu'+'le','MLWtO':'Speed'+'\x20off','ymAIu':_0x16065b(0x521),'onGMu':function(_0x487d9e,_0xd6b6fe){return _0x487d9e===_0xd6b6fe;},'DkkBK':function(_0x75d394,_0x4cddbe){return _0x75d394>_0x4cddbe;},'rEjCh':function(_0x4d73bb,_0x295d68){return _0x4d73bb!==_0x295d68;},'ddXqP':function(_0xee868f,_0x1e3924){return _0xee868f+_0x1e3924;},'jkQqS':_0x16065b(0x2b2)+'\x20heap'+_0x16065b(0x332)+'0x','qiqpN':_0x16065b(0xb58),'sAIdJ':_0x16065b(0xb59),'crNha':_0x16065b(0x7fa),'Kdxjm':function(_0x135d17,_0x40c45d){return _0x135d17(_0x40c45d);},'BvYaM':_0x16065b(0x5df),'DAkZi':'u16','daItW':_0x16065b(0x53a),'brOmG':function(_0x5bb5a3,_0x5eecef){return _0x5bb5a3|_0x5eecef;},'WzwXv':function(_0x3c1412,_0x2c12de){return _0x3c1412<_0x2c12de;},'ysqVG':function(_0x148a8e,_0x55ff3b){return _0x148a8e!==_0x55ff3b;},'LWBZm':_0x16065b(0x8b8),'WFwpM':function(_0xac2dbe,_0x1c1dee){return _0xac2dbe!==_0x1c1dee;},'BZSie':'no\x20HE'+'APU8\x20'+_0x16065b(0x90b)+_0x16065b(0xba0)+'stanc'+_0x16065b(0x529)+_0x16065b(0x635)+_0x16065b(0x565)+_0x16065b(0xab0)+_0x16065b(0x70f)+_0x16065b(0x245)+_0x16065b(0xb73)+_0x16065b(0xa41)+_0x16065b(0x71f)+'any\x20w'+_0x16065b(0x324)+_0x16065b(0x169)+'al','kVJbE':function(_0x1f4b79,_0x3930ef){return _0x1f4b79>_0x3930ef;},'aOGoD':function(_0x5cf32e,_0x203338){return _0x5cf32e+_0x203338;},'XoiEN':_0x16065b(0x326)+_0x16065b(0x186)+'9|1|7'+_0x16065b(0x3d3),'Jjptr':function(_0x1b13f6,_0x2c09a7){return _0x1b13f6&_0x2c09a7;},'yigbf':_0x16065b(0x99b),'dYUYE':_0x16065b(0x1bf),'MWXSG':function(_0x2fe624,_0x1c2c79){return _0x2fe624===_0x1c2c79;},'kvdta':function(_0x164082,_0xbd6700){return _0x164082|_0xbd6700;},'qDqGY':function(_0x3cbfae,_0x5138a6,_0x153643,_0x15d44f){return _0x3cbfae(_0x5138a6,_0x153643,_0x15d44f);},'KwYgs':_0x16065b(0x516),'cosnb':function(_0x5800b1,_0x241bec,_0x30b18e){return _0x5800b1(_0x241bec,_0x30b18e);},'eSWjO':function(_0x1e77a7,_0x405ac4){return _0x1e77a7+_0x405ac4;},'bwmTE':function(_0x2cdd8a,_0x12976f){return _0x2cdd8a+_0x12976f;},'jugeo':function(_0x39c2fd,_0x564937){return _0x39c2fd!==_0x564937;},'cWbom':_0x16065b(0xb8a)+'|7|1|'+'2|0|3','WeiTO':function(_0x317c5e,_0x56578e){return _0x317c5e+_0x56578e;},'hXhuN':function(_0x521e87,_0x579a9d){return _0x521e87|_0x579a9d;},'eJyie':_0x16065b(0x90c)+'n._ru'+_0x16065b(0x1e6)+'.reso'+_0x16065b(0x712)+'me()','wghwD':function(_0x51ebb2,_0x5e229c){return _0x51ebb2/_0x5e229c;},'LrJJL':_0x16065b(0x577)+'ON','YOVLj':function(_0x3f8e25,_0x5e4813){return _0x3f8e25===_0x5e4813;},'uKdMd':function(_0x274002,_0x1f9130){return _0x274002!==_0x1f9130;},'PDOBq':function(_0x1327ac,_0x1270e0){return _0x1327ac/_0x1270e0;},'ceeXB':function(_0x3be927,_0x108523){return _0x3be927-_0x108523;},'DTVlA':function(_0x4d6b98,_0x125c2a){return _0x4d6b98+_0x125c2a;},'qxiAG':'YOUAo','gVauL':function(_0x507cd9,_0x1b1cb3){return _0x507cd9<_0x1b1cb3;},'SiOVi':function(_0x49b3f1,_0x136ea7){return _0x49b3f1+_0x136ea7;},'kETNZ':_0x16065b(0xade)+'oup\x20o'+'f\x20','iKzwz':function(_0x1a3ca0,_0x5ecbb2){return _0x1a3ca0<_0x5ecbb2;},'jVYDL':function(_0x2f8ccc,_0xebc884){return _0x2f8ccc*_0xebc884;},'KjkrY':_0x16065b(0x921),'UScBL':function(_0x12b47f,_0x220a5c){return _0x12b47f<_0x220a5c;},'JcXBa':'tgPMD','mLNwD':function(_0x2a1769,_0x2e66ac,_0x1b07f6,_0x3e6d28,_0x2318bb){return _0x2a1769(_0x2e66ac,_0x1b07f6,_0x3e6d28,_0x2318bb);},'CfBOj':_0x16065b(0x33d),'roqYQ':_0x16065b(0x93a),'uscMG':function(_0x5d4386,_0x1bd056){return _0x5d4386===_0x1bd056;},'rREsW':function(_0x11bbe2,_0x179db2){return _0x11bbe2===_0x179db2;},'sRjWe':'VOvJH','sXeng':_0x16065b(0xba6),'jjiFJ':_0x16065b(0x8b5)+_0x16065b(0x7fd)+_0x16065b(0x1b3)+'xport'+_0x16065b(0xb81)+'ory','LPHiC':_0x16065b(0x85c),'xnFty':function(_0x3391f7,_0x28bb9c){return _0x3391f7-_0x28bb9c;},'CRNGB':function(_0xcdffc3,_0x12b8a){return _0xcdffc3!==_0x12b8a;},'IkjlI':_0x16065b(0x71b)+'e','CKfvQ':_0x16065b(0x295),'sKyvP':_0x16065b(0x430),'xAEBM':function(_0x4e4805,_0x183ec5){return _0x4e4805!==_0x183ec5;},'NqULm':'TGaQI','scGmn':'qqAGy','jiMfp':'MtXkb','BpVIT':'1|6|2'+_0x16065b(0x186)+_0x16065b(0x6a5),'mwnmx':function(_0x325332){return _0x325332();},'sSKrW':function(_0x5b6752,_0x485408){return _0x5b6752<_0x485408;},'AxObJ':function(_0x2db6b8,_0xfd304){return _0x2db6b8>>>_0xfd304;},'LEqcW':function(_0x221323,_0x24fca7){return _0x221323(_0x24fca7);},'gJKiQ':function(_0x4f6e60,_0x535a2d){return _0x4f6e60(_0x535a2d);},'bBoLQ':_0x16065b(0x63a),'EmwWz':function(_0x29bb12,_0x487c84){return _0x29bb12<_0x487c84;},'SgUtV':function(_0xacbcd4,_0x2502c1,_0x1a0d88){return _0xacbcd4(_0x2502c1,_0x1a0d88);},'KUtGR':function(_0x387a7a,_0x5cdd0f){return _0x387a7a<_0x5cdd0f;},'IuvJQ':_0x16065b(0x8ce)+'ntrol'+'ler','tETEm':function(_0x2eb5d3,_0x50a3e0){return _0x2eb5d3 in _0x50a3e0;},'SaSux':function(_0x10b905,_0x3e5b1b){return _0x10b905+_0x3e5b1b;},'fiTQd':function(_0x51265b,_0x40e4e8){return _0x51265b>>>_0x40e4e8;},'eLjEm':'WmKBR','GTNZJ':_0x16065b(0xa90),'utrLa':function(_0x4e2ad0,_0x20412c){return _0x4e2ad0+_0x20412c;},'ccDfF':_0x16065b(0x799),'Mfgam':function(_0x5ae69d,_0x5a57f3){return _0x5ae69d+_0x5a57f3;},'NrTiQ':function(_0xa6f40b,_0x2192cd,_0x4307d5){return _0xa6f40b(_0x2192cd,_0x4307d5);},'TBDfQ':_0x16065b(0x971),'tItdG':function(_0x5f279f,_0x500403,_0x3329c8){return _0x5f279f(_0x500403,_0x3329c8);},'EciiO':function(_0x125153,_0x1fcb1f){return _0x125153+_0x1fcb1f;},'WiyRI':function(_0x4faf5a,_0x13d3e5){return _0x4faf5a===_0x13d3e5;},'WhbWT':function(_0x1703f2,_0x411427){return _0x1703f2===_0x411427;},'pwKgF':function(_0x4c92fc,_0x463ef1){return _0x4c92fc===_0x463ef1;},'zeYzM':function(_0x56180a,_0xba29d8){return _0x56180a(_0xba29d8);},'BFsMO':'TubBv','ZQnFZ':_0x16065b(0xb8d),'uoODB':function(_0x3c53f4,_0x53aa94){return _0x3c53f4+_0x53aa94;},'kPqmr':function(_0x4ef64b,_0x63560e){return _0x4ef64b+_0x63560e;},'iBaxb':'hid=','JFHRQ':_0x16065b(0x885),'ZcwSH':_0x16065b(0x27e)+'t\x200\x20('+'int-w'+_0x16065b(0x5cd),'qgpHy':function(_0x437685,_0x10e995){return _0x437685!==_0x10e995;},'jYCWO':function(_0x274bb4,_0x176ebc){return _0x274bb4===_0x176ebc;},'xXbLa':function(_0x47d785,_0x2c6c97){return _0x47d785!==_0x2c6c97;},'IcCAJ':function(_0x294f4c,_0x4d2a33){return _0x294f4c!==_0x4d2a33;},'OwSnQ':'numbe'+'r','LczIY':function(_0x1e5d0a,_0x54c859){return _0x1e5d0a(_0x54c859);},'VeBWc':'TgORu','HwZtY':_0x16065b(0x16b)+_0x16065b(0x922)+_0x16065b(0xacc)+_0x16065b(0x797)+_0x16065b(0x29d)+'`play'+_0x16065b(0x3c8),'eTaMf':_0x16065b(0x8e4),'IngAU':function(_0x5b3b00,_0x2fda27){return _0x5b3b00===_0x2fda27;},'ecizK':'unity'+'Insta'+'nce','QKWCq':_0x16065b(0xb64)+_0x16065b(0x926),'IHoqd':'unity'+'Insta'+_0x16065b(0x5e4)+'apper','CxTyT':_0x16065b(0x688)+_0x16065b(0x67f),'dbDxp':'Mouse'+_0x16065b(0x4e0)+_0x16065b(0xa64)+'a','yIRiL':function(_0x7f44eb,_0x56b31e){return _0x7f44eb<_0x56b31e;},'zEgsi':function(_0x25b346,_0x17ef1d){return _0x25b346!==_0x17ef1d;},'mlBAd':function(_0x399024,_0x262998){return _0x399024!==_0x262998;},'yMDDr':_0x16065b(0x8b6),'GSroL':_0x16065b(0x80c),'qWhwh':_0x16065b(0x700)+'t','fCZwq':function(_0x37fee1,_0x1195b8){return _0x37fee1!==_0x1195b8;},'DuERP':function(_0x469684,_0x2813d8){return _0x469684+_0x2813d8;},'UanKL':function(_0x67a435,_0x5afaea){return _0x67a435+_0x5afaea;},'xujWW':function(_0x18bce6,_0x374227){return _0x18bce6+_0x374227;},'WYrLT':function(_0x59ba29,_0x4d06fd,_0x36ba5c){return _0x59ba29(_0x4d06fd,_0x36ba5c);},'OdwhA':_0x16065b(0x2ef)+'oth','YtgXo':_0x16065b(0x9a9),'ufjRf':_0x16065b(0x8a0),'ATucH':function(_0x475a86,_0x51b3de){return _0x475a86+_0x51b3de;},'JQsyv':_0x16065b(0x636)+_0x16065b(0x6b4)+'x\x208px'+_0x16065b(0x2dc)+':11px'+'/1.45'+'\x20ui-m'+_0x16065b(0xbaa)+'ace,C'+_0x16065b(0x4ac)+'as,mo'+'nospa'+_0x16065b(0x699)+'lor:#'+_0x16065b(0x664)+'5;','gUBgl':function(_0x54f465,_0x111bd3){return _0x54f465+_0x111bd3;},'lqKkF':function(_0xa40765,_0x52ff67){return _0xa40765+_0x52ff67;},'FJeve':_0x16065b(0x276)+_0x16065b(0xb0f)+'b>','JoMqH':_0x16065b(0x7ec)+_0x16065b(0xb23)+'ta-a='+_0x16065b(0x42d)+'style'+_0x16065b(0x6a4)+'kgrou'+'nd:tr'+_0x16065b(0x8b4)+'rent;'+'borde'+_0x16065b(0x472)+'\x20soli'+'d\x20rgb'+_0x16065b(0x6d9)+_0x16065b(0x23c)+_0x16065b(0x92b)+_0x16065b(0x240),'ndGLC':_0x16065b(0x2a9)+'t\x20dat'+_0x16065b(0x4f2)+'fx\x22\x20t'+'ype=\x22'+_0x16065b(0x5e9)+'\x22\x20min'+'=\x221\x22\x20'+'max=\x22'+_0x16065b(0x95c)+_0x16065b(0x408)+'.5\x22\x20v'+_0x16065b(0x78c)+_0x16065b(0x82c)+_0x16065b(0x6ef)+_0x16065b(0xb2a)+'h:92p'+_0x16065b(0x8f6)+'ent-c'+_0x16065b(0x79d),'xJbXj':'<span'+_0x16065b(0x3ec)+_0x16065b(0xa94)+_0x16065b(0x53e)+_0x16065b(0x649)+_0x16065b(0x844)+_0x16065b(0x9ae)+'9c9;m'+'in-wi'+'dth:3'+'0px;\x22'+_0x16065b(0x9fd)+_0x16065b(0x505)+'n>','vTMzF':_0x16065b(0x7ec)+'on\x20da'+_0x16065b(0x7ea)+_0x16065b(0x4e5)+_0x16065b(0x6c1)+'e=\x22ba'+_0x16065b(0x236)+_0x16065b(0x38e)+_0x16065b(0x576)+'arent'+';bord'+_0x16065b(0xb97)+_0x16065b(0x170)+'id\x20rg'+'ba(25'+'5,143'+_0x16065b(0xabb)+'.45);','LviWU':_0x16065b(0x7ec)+_0x16065b(0xb23)+_0x16065b(0x7ea)+_0x16065b(0x63b)+'\x22\x20sty'+_0x16065b(0x237)+_0x16065b(0x8a8)+'-left'+_0x16065b(0x592)+';back'+_0x16065b(0xadc)+'d:tra'+_0x16065b(0x96c)+_0x16065b(0x913)+_0x16065b(0x7c4)+_0x16065b(0xa9e)+_0x16065b(0x504)+_0x16065b(0xa79)+_0x16065b(0x9bb)+'143,1'+'77,.4'+'5);','Umwhx':'color'+':#f7e'+'ef5;b'+'order'+_0x16065b(0x7ed)+_0x16065b(0x98b)+_0x16065b(0x857)+'ding:'+_0x16065b(0x4d7)+_0x16065b(0x708)+_0x16065b(0x8e8)+'point'+'er;fo'+'nt:in'+_0x16065b(0x8ba)+';\x22>-<'+_0x16065b(0x474)+'on>','weObW':_0x16065b(0x571),'hSpbo':'snap','KZiKJ':function(_0x5b6d96,_0x2dc5e6){return _0x5b6d96(_0x2dc5e6);},'NPNLa':_0x16065b(0x775),'lezkf':function(_0x22de58,_0xc6be01){return _0x22de58+_0xc6be01;},'XuOmy':function(_0x2aca6b){return _0x2aca6b();},'XFYug':function(_0x1f6cbf,_0x180559){return _0x1f6cbf===_0x180559;},'PGUUK':_0x16065b(0x5a4),'VEAeD':function(_0x27d26d){return _0x27d26d();},'JUFyo':function(_0x566abe,_0x250f81){return _0x566abe+_0x250f81;},'BfRju':_0x16065b(0x64c),'XNDPt':function(_0x51d071,_0x3aad59){return _0x51d071+_0x3aad59;},'EUtqz':function(_0x460053,_0x382158){return _0x460053+_0x382158;},'jRDGi':function(_0x5ca58b,_0x2ef73d){return _0x5ca58b+_0x2ef73d;},'iTXew':function(_0x320295,_0x3475e8){return _0x320295+_0x3475e8;},'Muond':function(_0x2d3f7c,_0x3cddb7){return _0x2d3f7c+_0x3cddb7;},'CBjUI':'\x20\x20hoo'+_0x16065b(0xb1a),'fAZpr':_0x16065b(0x7f7)+'\x20','DtoGh':_0x16065b(0x2fa),'srDxH':'PLAYE'+'RS\x20','XXqsy':_0x16065b(0x546)+_0x16065b(0x5c3)+_0x16065b(0x620)+'6,.95'+')','nLQFh':function(_0x2ed31a,_0x24942f){return _0x2ed31a+_0x24942f;},'itXaU':function(_0x2affee,_0x1a9b6f){return _0x2affee-_0x1a9b6f;},'yLtgd':function(_0x3036ad,_0x10044c){return _0x3036ad*_0x10044c;},'pXjdW':_0x16065b(0x643),'MIacv':_0x16065b(0x90f),'qCupN':function(_0x1aa8e8,_0x2a2938){return _0x1aa8e8===_0x2a2938;},'pxqQA':_0x16065b(0x49e),'HPKMj':function(_0x26847e,_0x5430fc){return _0x26847e===_0x5430fc;},'ynmJN':_0x16065b(0x809)+'t','IULgx':function(_0x45e902,_0xa0018d){return _0x45e902===_0xa0018d;},'GeQKF':'Brack'+'etLef'+'t','UeFbO':function(_0x192ce4,_0x1db3fb){return _0x192ce4+_0x1db3fb;},'xqonw':function(_0x238791,_0xa4ff40){return _0x238791(_0xa4ff40);},'CgCRZ':_0x16065b(0xae6),'kroaA':_0x16065b(0x219),'ZNiPs':function(_0x3a70fa,_0x62809a,_0x291791){return _0x3a70fa(_0x62809a,_0x291791);},'jQSMb':'ZVlEE','dRTBg':function(_0x839279,_0x182c69){return _0x839279/_0x182c69;},'asWWq':function(_0x578f24,_0x39fac6){return _0x578f24*_0x39fac6;},'VHHOJ':function(_0x47e457,_0x444690){return _0x47e457*_0x444690;},'RVgpQ':function(_0xa7a93,_0x1a6dad){return _0xa7a93<=_0x1a6dad;},'ertwJ':function(_0x140353,_0x18008d){return _0x140353*_0x18008d;},'JBNEi':function(_0x14743d,_0x3d5543){return _0x14743d-_0x3d5543;},'bDvPW':function(_0x434ee9,_0x16a1f9){return _0x434ee9*_0x16a1f9;},'DPSEf':function(_0x2e9dab,_0x414b07){return _0x2e9dab*_0x414b07;},'fuaVE':function(_0x503b70,_0x23d059){return _0x503b70*_0x23d059;},'pwPIU':function(_0x312f41,_0x2553cb){return _0x312f41*_0x2553cb;},'AAZFD':function(_0x3b9949,_0x4457e3){return _0x3b9949/_0x4457e3;},'JlaaF':function(_0x178490,_0x51aae9){return _0x178490*_0x51aae9;},'AoEST':function(_0x46878f,_0x523f56,_0x1da7de){return _0x46878f(_0x523f56,_0x1da7de);},'wTRJn':_0x16065b(0xa14)+'ody','fvstZ':function(_0x425829,_0xb3c40b,_0x3023bc){return _0x425829(_0xb3c40b,_0x3023bc);},'fawvu':function(_0x4a9a97,_0x43379e){return _0x4a9a97+_0x43379e;},'qCBGh':_0x16065b(0x695),'eIGOD':'false','BpzCb':function(_0x339a1d,_0x509276,_0x3672be){return _0x339a1d(_0x509276,_0x3672be);},'Kaqwb':'sk-ra'+_0x16065b(0xb1f),'hgFVv':function(_0x3c555e,_0x28373b){return _0x3c555e(_0x28373b);},'qfuIp':function(_0x5b7c36,_0x8a7c0f,_0x1a88c2){return _0x5b7c36(_0x8a7c0f,_0x1a88c2);},'ccRFJ':'sk-va'+'l','aURzk':function(_0x239ead,_0x4993f7){return _0x239ead+_0x4993f7;},'tuFkU':'<span'+_0x16065b(0x312)+'s=\x27sk'+_0x16065b(0x520)+'\x27>','lCUZW':function(_0x481750,_0x15f22b){return _0x481750===_0x15f22b;},'DOvAC':function(_0x4828e4,_0x478089){return _0x4828e4===_0x478089;},'tnBHH':function(_0x506779,_0x51e572){return _0x506779+_0x51e572;},'EedqN':'\x20fiel'+'ds\x20·\x20','PPVNL':_0x16065b(0x405)+'es','ggTJp':_0x16065b(0x79a)+_0x16065b(0x92f)+'\x20move'+'ment-'+_0x16065b(0x26d)+_0x16065b(0x353)+_0x16065b(0x9cb)+_0x16065b(0x3f9)+'eight'+_0x16065b(0x8bb)+_0x16065b(0x43a)+'\x20jump'+_0x16065b(0x820)+_0x16065b(0x9a5)+_0x16065b(0x4fc),'AOvbL':'bxUKB','vBLUc':function(_0x20bce1,_0x3f3159){return _0x20bce1+_0x3f3159;},'aanKl':function(_0x3d4954,_0x56fa5b){return _0x3d4954+_0x56fa5b;},'LnJeQ':'bhyVx','IkRgK':'Copy\x20'+_0x16065b(0xaf9)+'d','sURAo':'ldpVA','nHZzK':'iHUOQ','vrLQj':_0x16065b(0x7d0)+'\x20hack','KsfMd':function(_0x5bf41d,_0x1d6d12,_0x1b1741,_0x238497){return _0x5bf41d(_0x1d6d12,_0x1b1741,_0x238497);},'BRlXr':_0x16065b(0x79a)+'plier','pWckv':function(_0x4de5ea,_0x259b7a,_0x47114a,_0x1181f6){return _0x4de5ea(_0x259b7a,_0x47114a,_0x1181f6);},'slhqu':_0x16065b(0x691)+'ngs','NrlEc':function(_0x308ff4,_0x1d3863,_0x11eeb9,_0x4a9c1f){return _0x308ff4(_0x1d3863,_0x11eeb9,_0x4a9c1f);},'Shtls':_0x16065b(0x7cd)+'n','RdxmZ':_0x16065b(0x816)+'n','lgkXR':'F9\x20\x20s'+_0x16065b(0x7d5)+_0x16065b(0x843)+'\x20F7\x20\x20'+_0x16065b(0x26d)+_0x16065b(0x9a6)+_0x16065b(0x8af)+'\x20/\x20F6'+_0x16065b(0xabc)+'tor\x20+'+_0x16065b(0x4bd)+'\x0a[\x20\x20]'+'\x20\x20fie'+'ld\x20of'+_0x16065b(0x657)+'\x0aInse'+_0x16065b(0xb61)+'his\x20m'+'enu','UtcyS':function(_0x36e3cb,_0x24cb5d){return _0x36e3cb===_0x24cb5d;},'UsXRh':'World'+_0x16065b(0xa8e)+'e\x20min'+_0x16065b(0x710)+'\x20top-'+'right'+'.\x20Nee'+'ds\x20on'+'ly\x20po'+_0x16065b(0x357)+'ns.','jSKIU':function(_0x5882b8,_0x380788,_0x5f3ee9){return _0x5882b8(_0x380788,_0x5f3ee9);},'hazaE':_0x16065b(0x3cd),'pGccD':'sk-md'+'esc','wtovx':function(_0x5c1a91,_0x22f51e,_0x55da7d,_0x5bcc5a){return _0x5c1a91(_0x22f51e,_0x55da7d,_0x5bcc5a);},'hHISo':'view:'+'\x20','fXxvV':'Mouse'+_0x16065b(0x16e),'IWStd':'\x20\x20cam'+'era\x20','etucx':'\x20\x20yaw'+'\x20','nBDpC':_0x16065b(0x534)+'s','mddko':_0x16065b(0xb48)+_0x16065b(0x864)+'3','qFOBQ':_0x16065b(0x6bb)+'r','Gkarv':'appli'+_0x16065b(0x660)+_0x16065b(0x2ff)+_0x16065b(0x7c0),'SBmNe':'\x20/\x20','QKfQR':function(_0x1298bb,_0x2d0106){return _0x1298bb+_0x2d0106;},'RAJWB':'Photo'+'nNetw'+_0x16065b(0xa60)+'nc','HSpwv':function(_0x551bf4,_0x5c6305){return _0x551bf4+_0x5c6305;},'GNLjc':function(_0x537206,_0x5dce94){return _0x537206+_0x5dce94;},'diaiM':'7|8|0'+_0x16065b(0x3c2)+_0x16065b(0x7f2)+'|3|6','ufjtu':function(_0x527db3,_0x52d176){return _0x527db3(_0x52d176);},'fkSTR':function(_0x52a597,_0x320719){return _0x52a597-_0x320719;},'KQIcU':'Sessi'+'on','ADSWh':'Posit'+_0x16065b(0x9c3),'GVrOk':'FPSco'+'ntrol'+'ler+','puuLS':function(_0x296438,_0x1b646d,_0x48c656,_0x5d65ca){return _0x296438(_0x1b646d,_0x48c656,_0x5d65ca);},'kYYpq':_0x16065b(0x67b)+_0x16065b(0x18c)+'ed','ePrLx':function(_0x1df98e,_0x2a3416,_0xd8e2e6,_0x10013d){return _0x1df98e(_0x2a3416,_0xd8e2e6,_0x10013d);},'YdKsT':function(_0x577461,_0x1a9b17){return _0x577461===_0x1a9b17;},'gXVqp':'Diagn'+_0x16065b(0xa55)+'s','bZlJh':_0x16065b(0x9d0)+_0x16065b(0xa4a)+'s','lsaoW':_0x16065b(0x83b)+_0x16065b(0xaf4)+_0x16065b(0x3e1)+_0x16065b(0xb69)+'g\x20whe'+_0x16065b(0xb85)+_0x16065b(0x725)+'g\x20loo'+_0x16065b(0x937)+_0x16065b(0x753),'QrHrV':function(_0x5cea49,_0x3069fa){return _0x5cea49+_0x3069fa;},'RqEer':function(_0x40827d,_0xba4a23){return _0x40827d===_0xba4a23;},'tZcyR':'KRHNh','hDyLl':function(_0x3d946a,_0x3e7332){return _0x3d946a===_0x3e7332;},'GLmqx':'zEDFi','kUukf':'.28','EzdAn':_0x16065b(0x500)+'a\x20Ski'+'llWar'+_0x16065b(0x82d)+_0x16065b(0x8a7),'OWsMD':_0x16065b(0xb31)+'|3|0|'+_0x16065b(0xb38)+_0x16065b(0x89c),'rVKds':function(_0x46688e,_0x2ed897){return _0x46688e-_0x2ed897;},'aPCUx':_0x16065b(0xacf),'evqJg':_0x16065b(0x3d7)+'up','xbyQP':'touch'+'move','LYIfX':function(_0x5c6237,_0x3907e5){return _0x5c6237(_0x3907e5);},'HWnah':_0x16065b(0xb4c),'RvlZz':'kybwu','sEmlD':'Elfye','lEZPw':'sakur'+_0x16065b(0x257)+_0x16065b(0x4c7),'vdrfi':function(_0x25d097,_0xf39bf6,_0x5810f1){return _0x25d097(_0xf39bf6,_0x5810f1);},'bJSAf':_0x16065b(0x5ee)+_0x16065b(0x8dc),'LaUFg':'sakur'+'a-men'+_0x16065b(0x1fa)+'t','JnoUC':function(_0x325643,_0x236a8c,_0x50edb8){return _0x325643(_0x236a8c,_0x50edb8);},'tzxvv':'mn-lo'+'go','JIvWX':function(_0x25fddb,_0x9556eb,_0x587f61){return _0x25fddb(_0x9556eb,_0x587f61);},'wnQzI':_0x16065b(0x3b1)+'in','Nrawd':'mn-ti'+'tles','nNyIs':'mn-h','pUIuK':function(_0x7e00ba,_0x52386a,_0x2a58cb){return _0x7e00ba(_0x52386a,_0x2a58cb);},'cbZFq':_0x16065b(0x453)+'l>','TkNSO':_0x16065b(0xaf1)+_0x16065b(0x1c0),'RvvVD':function(_0x484427,_0x16c7e2,_0x227f92){return _0x484427(_0x16c7e2,_0x227f92);},'ihkAr':function(_0x275d3b,_0x2ac268){return _0x275d3b(_0x2ac268);},'oRfxn':function(_0x12b43a,_0x2d54c8){return _0x12b43a<_0x2d54c8;},'BOGIk':_0x16065b(0x500)+_0x16065b(0x8e9)+'llWar'+'z\x20—\x20','yDqBy':function(_0xdff528,_0xcc5b3a){return _0xdff528(_0xcc5b3a);},'hbWWs':_0x16065b(0x1f9),'OkNgx':'cNjpy','pCjvY':function(_0x22a41c){return _0x22a41c();},'MatbZ':'nnLlJ','dhzBb':_0x16065b(0x228),'sTLHP':_0x16065b(0x259),'FMNXe':function(_0xc74f40,_0x587475){return _0xc74f40<_0x587475;},'ZNlpv':function(_0xcff740,_0x53d045){return _0xcff740<_0x53d045;},'BdTBQ':function(_0x38b49b,_0x147dd5){return _0x38b49b+_0x147dd5;},'qPwrJ':function(_0x4bd3e6,_0x5b953e){return _0x4bd3e6+_0x5b953e;},'GHODO':_0x16065b(0x197)+_0x16065b(0x23e)+_0x16065b(0x27f),'WYuEC':_0x16065b(0x197)+'heap\x20','FTWuE':function(_0x10d3b1,_0x573396){return _0x10d3b1===_0x573396;},'OXBgx':function(_0x5b4b72,_0x2353f8){return _0x5b4b72+_0x2353f8;},'BiSHb':function(_0x2b303c,_0xa46b55){return _0x2b303c===_0xa46b55;},'mDhGD':'every'+'one\x20b'+_0x16065b(0x9b4)+'u','KgJqi':_0x16065b(0x8ce)+'ntrol'+'ler+0'+'x2E4','kaRto':'+0x29'+'8','okuFY':_0x16065b(0x744),'AMWZs':function(_0x25e1e5,_0xcbd5e3){return _0x25e1e5===_0xcbd5e3;},'fITNd':_0x16065b(0x382)+_0x16065b(0x28b)+'pt','aCzbq':function(_0x136c8c,_0x3bcb87){return _0x136c8c===_0x3bcb87;},'uIOYi':'VNtzp','EeOsN':function(_0x445787,_0x5ed0fa){return _0x445787(_0x5ed0fa);},'uZdyU':function(_0x1d3820,_0x56b8a5){return _0x1d3820===_0x56b8a5;},'gonYL':function(_0x184375,_0x347220){return _0x184375>_0x347220;},'FqvZh':'tTVDv','QTHTj':'lVMDQ','zdUNF':function(_0x564bde,_0x54056e){return _0x564bde===_0x54056e;},'WmBIf':function(_0x5bfaa2,_0x2d81f4){return _0x5bfaa2*_0x2d81f4;},'EuCzu':_0x16065b(0x986),'HdGlL':'%c[sa'+'kura]'+'\x20pane'+_0x16065b(0x369)+_0x16065b(0x231),'VPSQj':function(_0x4bb9e8,_0x48ddbf){return _0x4bb9e8+_0x48ddbf;},'dcXWi':_0x16065b(0x7ca),'cmGpF':function(_0x2ec4a0,_0x28869e,_0x854ee2,_0x2d605b){return _0x2ec4a0(_0x28869e,_0x854ee2,_0x2d605b);},'QsFMt':function(_0x1239ef,_0x38162a){return _0x1239ef===_0x38162a;},'xNkqJ':function(_0x315584,_0x24b4cd,_0x34d674){return _0x315584(_0x24b4cd,_0x34d674);},'MzhMH':function(_0x41143e,_0x304aad){return _0x41143e+_0x304aad;},'DKqtD':function(_0x30871d,_0x45fdf3){return _0x30871d*_0x45fdf3;},'PxNGh':_0x16065b(0x157)+_0x16065b(0xa82),'XXYAb':'user-'+_0x16065b(0x8c8)+_0x16065b(0x85b)+_0x16065b(0x42f)+'bkit-'+'user-'+_0x16065b(0x8c8)+_0x16065b(0x85b)+'e;','uQAaq':_0x16065b(0x157)+'a-box'+'es','YPaZB':_0x16065b(0x814)+'ion:f'+_0x16065b(0x8f0)+'left:'+_0x16065b(0x682)+':0;z-'+'index'+_0x16065b(0x991)+_0x16065b(0x623)+'5;poi'+'nter-'+_0x16065b(0x7bc)+_0x16065b(0x654)+'e;','SjdsI':function(_0x5efe07,_0x2bbe60){return _0x5efe07(_0x2bbe60);},'LiSWu':function(_0x4ec0a4,_0x215695){return _0x4ec0a4+_0x215695;},'FMBxI':function(_0x1fa6f2,_0x546ce6){return _0x1fa6f2+_0x546ce6;},'TmcGn':function(_0x53f6e3,_0x4bed08){return _0x53f6e3+_0x4bed08;},'ywwEE':function(_0x20b479,_0x5c5e69){return _0x20b479+_0x5c5e69;},'cfnYL':function(_0x52ad0c,_0x140ca2){return _0x52ad0c+_0x140ca2;},'sNzfD':function(_0x397d65,_0x4c1d78){return _0x397d65!==_0x4c1d78;},'vOETj':function(_0x564ee7,_0x38a980){return _0x564ee7===_0x38a980;},'hLVzz':'wfrdh','ZnvYB':function(_0x1f6350,_0x3bc62e){return _0x1f6350+_0x3bc62e;},'kFeYB':function(_0x186981,_0x5b27d8){return _0x186981+_0x5b27d8;},'iPPVP':function(_0x3fd311,_0x1fb52a){return _0x3fd311-_0x1fb52a;},'skViG':function(_0x2f75a8,_0x3164ca){return _0x2f75a8/_0x3164ca;},'rYnmn':'EbwrC','pruKh':_0x16065b(0x4b6),'FJbMf':function(_0x1fd83b,_0x548905){return _0x1fd83b-_0x548905;},'bNdAx':function(_0x59c045,_0x1758df){return _0x59c045+_0x1758df;},'HAGTg':_0x16065b(0x541)+_0x16065b(0x4de)+_0x16065b(0x6b1),'Vwzbi':function(_0x2eba4e){return _0x2eba4e();},'NMIyW':function(_0x8cd3eb,_0x130587){return _0x8cd3eb-_0x130587;},'xJcpX':function(_0x4a684b,_0x15f83e){return _0x4a684b/_0x15f83e;},'CDxMj':function(_0x4dfb68,_0xadef15){return _0x4dfb68===_0xadef15;},'niIrH':function(_0xe5c91b,_0x48ebfe){return _0xe5c91b*_0x48ebfe;},'MrsfS':function(_0x19bb28,_0x1b92d6){return _0x19bb28!==_0x1b92d6;},'pNUGU':'XoKNI','dzwQM':function(_0x588559,_0x27b111){return _0x588559*_0x27b111;},'exCAk':function(_0x5d248d,_0x54f4af){return _0x5d248d-_0x54f4af;},'MRcLP':function(_0x2a0552,_0xaa5d22){return _0x2a0552===_0xaa5d22;},'hONKl':'CEIvg','xqYiD':function(_0x615b9b,_0xf11b5e){return _0x615b9b+_0xf11b5e;},'HvSmj':function(_0x273f00,_0x4607b3){return _0x273f00+_0x4607b3;},'fyfml':'\x20·\x20fo'+'v\x20','eunVN':_0x16065b(0x40c)+'am','UHhml':function(_0x22e7e6,_0x23a713){return _0x22e7e6!==_0x23a713;},'vyBbi':_0x16065b(0x8f1),'jRajY':function(_0x2b08d7,_0x4ede0e){return _0x2b08d7-_0x4ede0e;},'DxnnO':function(_0x113ebf,_0x55d449){return _0x113ebf===_0x55d449;},'flqdP':'#4f8f'+'6a','MCQhJ':function(_0x2d6239,_0x338d3f){return _0x2d6239(_0x338d3f);},'cbhES':function(_0x1caa26){return _0x1caa26();},'KWaxV':_0x16065b(0x230),'CIepT':function(_0x420af0,_0x2d7534){return _0x420af0(_0x2d7534);},'bwrPq':_0x16065b(0xa4b),'ipwpe':function(_0x3c21b0,_0x5892a0){return _0x3c21b0+_0x5892a0;},'pjEfT':'backg'+_0x16065b(0x50e)+':rgba'+_0x16065b(0x274)+_0x16065b(0x972)+'.72);'+'borde'+_0x16065b(0x472)+_0x16065b(0x59d)+'d\x20rgb'+'a(255'+_0x16065b(0x23c)+_0x16065b(0x92b)+'4);bo'+'rder-'+'radiu'+'s:10p'+'x;','WICIi':'paddi'+_0x16065b(0x992)+'x;fon'+_0x16065b(0x562)+'x/1.3'+_0x16065b(0x776)+_0x16065b(0xbaa)+'ace,C'+_0x16065b(0x4ac)+'as,mo'+'nospa'+'ce;co'+_0x16065b(0x1af)+_0x16065b(0x464)+'9;','wYHec':_0x16065b(0x754)+_0x16065b(0x829)+'akura'+_0x16065b(0xa1e)+'lg\x22\x20s'+_0x16065b(0x6ef)+_0x16065b(0x6a7)+'-alig'+'n:cen'+'ter\x22>'+'</div'+'>','lZAQk':_0x16065b(0x9dd)+_0x16065b(0x44c)+_0x16065b(0x904),'ijfRS':function(_0xfdd816){return _0xfdd816();},'ZNzUH':function(_0x871f53){return _0x871f53();},'OyvVz':_0x16065b(0x5ac)+'y\x20fai'+_0x16065b(0xb90),'DtZgA':function(_0xf288ff,_0x1183ab){return _0xf288ff+_0x1183ab;},'evDDN':_0x16065b(0x26b)+_0x16065b(0x7af)+_0x16065b(0x16c)+_0x16065b(0xb90),'Fdunh':'captu'+_0x16065b(0x392),'FWgYT':'\x20obje'+'ct(s)'+_0x16065b(0xae0)+_0x16065b(0x4e3)+_0x16065b(0x431)+_0x16065b(0x6ce),'GWWAl':'repla'+_0x16065b(0x609)+_0x16065b(0x833)+_0x16065b(0x322)+_0x16065b(0x3dd)+_0x16065b(0x1ad)+_0x16065b(0x3c4)+'o\x20we\x20'+_0x16065b(0xb24)+_0x16065b(0x5f2)+_0x16065b(0xaf4)+'wrong'+'\x20obje'+'ct\x20fo'+'r\x20','naeqw':_0x16065b(0x500)+_0x16065b(0x611)+_0x16065b(0x72e)+_0x16065b(0x8d1)+_0x16065b(0x25f)+_0x16065b(0x1d5)+_0x16065b(0xad3)+_0x16065b(0xa31)+_0x16065b(0xb14)+_0x16065b(0xb4e)+'.','TLcGj':function(_0x19b2c5,_0x4ecb16){return _0x19b2c5===_0x4ecb16;},'lfGpk':_0x16065b(0x841),'RxOeu':function(_0x2e631e,_0x345806){return _0x2e631e===_0x345806;},'Dyjui':function(_0x1ea7bb,_0x3525c3){return _0x1ea7bb>_0x3525c3;},'mutNR':_0x16065b(0x428),'oicio':function(_0x1b20aa,_0x4db44c){return _0x1b20aa+_0x4db44c;},'RMlLv':_0x16065b(0x9fe),'GRYBJ':'so\x20ho'+_0x16065b(0x8cf)+_0x16065b(0x371)+_0x16065b(0x300)+'after'+_0x16065b(0x1d2)+'re\x20ig'+'nored'+'\x20for\x20'+_0x16065b(0x81d)+'ife\x20o'+'f\x20the'+_0x16065b(0x346)+'.\x20','XSLbZ':'\x20hook'+_0x16065b(0xabf)+_0x16065b(0x87e)+'\x20armi'+'ng\x20at'+'\x20docu'+_0x16065b(0x60b)+_0x16065b(0x5b0)+'.','MwJtg':'\x20hook'+_0x16065b(0x6d6)+_0x16065b(0xb22)+'able\x20'+'index'+_0x16065b(0xae0)+'appli'+'ed\x20no'+_0x16065b(0x94a)+'he\x20si'+_0x16065b(0x160)+'re\x20','iZcAC':function(_0x1249dc,_0x5820f2){return _0x1249dc>_0x5820f2;},'mwtbL':function(_0x46c059,_0x2e49cf){return _0x46c059===_0x2e49cf;},'LWFtJ':_0x16065b(0x54b),'tDwMH':'%c[sa'+_0x16065b(0x204)+'\x20Skil'+'lWarz'+_0x16065b(0x203)+'rt','CobHi':function(_0x316d17,_0x37a2fe){return _0x316d17+_0x37a2fe;},'QJlhP':';font'+'-weig'+_0x16065b(0x6aa)+'0','XErJi':function(_0x30b64d,_0x58a1ab){return _0x30b64d+_0x58a1ab;},'QlYcq':function(_0x2389bb,_0x1049b1,_0x235535,_0x4e746d){return _0x2389bb(_0x1049b1,_0x235535,_0x4e746d);},'BkGRR':function(_0x28d616,_0x204530){return _0x28d616===_0x204530;},'rNeRp':function(_0x302c5f,_0x437df7){return _0x302c5f|_0x437df7;},'GkUMl':function(_0x3153c6,_0x4b8b3b){return _0x3153c6^_0x4b8b3b;},'VIzBH':function(_0x262ed2,_0x128cf3){return _0x262ed2+_0x128cf3;},'fZyPj':function(_0x3ed034,_0x4d8cb1){return _0x3ed034+_0x4d8cb1;},'WecrE':function(_0xca9049,_0x5e4ba4){return _0xca9049===_0x5e4ba4;},'BrcCi':function(_0x4e8c16,_0x2986b9){return _0x4e8c16===_0x2986b9;},'xIRVd':function(_0x17bd17,_0x13b2f0){return _0x17bd17+_0x13b2f0;},'MHwti':function(_0x2ad605){return _0x2ad605();},'yzyHH':function(_0x67df31){return _0x67df31();},'SZEuj':function(_0x151608){return _0x151608();},'dWzmj':_0x16065b(0x9f8)+'ura_s'+_0x16065b(0x878),'tHMnn':_0x16065b(0xb2b)+_0x16065b(0x670)+'SKILL'+_0x16065b(0x61b)+_0x16065b(0x58d)+_0x16065b(0x2e2),'vtefj':_0x16065b(0xb2b)+'KURA-'+'SKILL'+_0x16065b(0x61b)+'END=='+'=','muumE':'%c[sa'+_0x16065b(0x204)+_0x16065b(0x17b)+'AL\x20AC'+'TIVE','tEJNR':function(_0xbe3f7,_0x10b9a6){return _0xbe3f7+_0x10b9a6;},'uuoqV':function(_0x44ba55,_0x4a27fe){return _0x44ba55+_0x4a27fe;},'JcSxq':'sakur'+_0x16065b(0x748)+'panel'+_0x16065b(0x55a)+'en','UVrgt':function(_0x2cea1f){return _0x2cea1f();},'xBmIi':_0x16065b(0x3ca)+_0x16065b(0x204)+_0x16065b(0x681)+'LAYER'+'\x20ACTI'+_0x16065b(0x997),'goZOY':';font'+_0x16065b(0x46b)+_0x16065b(0x6aa)+_0x16065b(0x5ae)+_0x16065b(0x15f)+_0x16065b(0x473)+'x','cFNyN':function(_0x5953b4,_0x45466c,_0x441cac){return _0x5953b4(_0x45466c,_0x441cac);},'RDvua':_0x16065b(0x23a),'CfLIt':_0x16065b(0xb1c),'dSdPs':'Netwo'+'rkPla'+'yerAn'+'imati'+_0x16065b(0x48d),'DVhgl':_0x16065b(0x71a)+_0x16065b(0x982)+_0x16065b(0x763),'VDvAv':'cInpu'+_0x16065b(0x296),'ssJFh':_0x16065b(0x3f4),'FfnNE':_0x16065b(0x3df)+_0x16065b(0x17c),'VtEOI':_0x16065b(0x25e),'KlSOm':'0x28','KsoDc':_0x16065b(0x703),'nPuDd':_0x16065b(0x67e),'lOjij':_0x16065b(0x48a)+'le','EYTiV':'0x18','EeWGZ':_0x16065b(0x1ee),'OBdLJ':_0x16065b(0x180)+'h','VnLey':_0x16065b(0x3bc)+'tHeal'+_0x16065b(0x252),'YyuXz':'0xe8','EScTz':'0x14','HvZDk':_0x16065b(0x955)+_0x16065b(0x373),'PfwmS':_0x16065b(0x21a),'jCfsQ':_0x16065b(0x17a),'DDVXL':_0x16065b(0x727),'pRGUx':function(_0x2ddbb7,_0x251e03){return _0x2ddbb7===_0x251e03;},'KOXmJ':'GAWsr','knUrZ':_0x16065b(0x82b),'fIcwu':_0x16065b(0x47d)+'ls','uZQwj':'VIS','PONCg':function(_0x525b93,_0x5df40f){return _0x525b93+_0x5df40f;},'fXzyl':function(_0x16a037,_0x3f7d4e){return _0x16a037+_0x3f7d4e;},'ZuILT':function(_0x2aca0f,_0x52dca4){return _0x2aca0f+_0x52dca4;},'avase':function(_0x3b5968,_0x5f0d17){return _0x3b5968+_0x5f0d17;},'dgHrX':function(_0x24c8cb,_0x5b63a9){return _0x24c8cb+_0x5b63a9;},'UaTiZ':function(_0x121d73,_0x5e7812){return _0x121d73+_0x5e7812;},'pHxpL':function(_0xc7b562,_0x5c5b07){return _0xc7b562+_0x5c5b07;},'jnPIr':function(_0x38da8c,_0x28b869){return _0x38da8c+_0x28b869;},'VdFZu':function(_0x42a25f,_0x276f9c){return _0x42a25f+_0x276f9c;},'RewPq':function(_0x38ff98,_0x156f36){return _0x38ff98+_0x156f36;},'QNvdE':function(_0x2412d,_0x4c26b2){return _0x2412d+_0x4c26b2;},'UJRlx':function(_0x4f5384,_0xff95c1){return _0x4f5384+_0xff95c1;},'GAgWn':function(_0x4499ab,_0x34b703){return _0x4499ab+_0x34b703;},'STXjf':_0x16065b(0x9dd)+_0x16065b(0x8ac)+'nu-ro'+_0x16065b(0x1c2)+_0x16065b(0x3f8)+_0x16065b(0x378),'Fxgrd':_0x16065b(0x9dd)+_0x16065b(0x8ac)+_0x16065b(0x4e7)+'ot.mn'+_0x16065b(0x57d)+_0x16065b(0xa03)+_0x16065b(0x364)+_0x16065b(0x865)+_0x16065b(0x7a1)+_0x16065b(0x4fe)+_0x16065b(0x79e)+_0x16065b(0x3bd)+'24px;'+_0x16065b(0x1a4)+_0x16065b(0x667)+'620px'+_0x16065b(0x80e)+'(100v'+_0x16065b(0x4a4)+'8px))'+_0x16065b(0x9ea)+'heigh'+'t:min'+'(500p'+_0x16065b(0x658)+_0x16065b(0x4a1)+'vh\x20-\x20'+_0x16065b(0x39d)+');','rHGhx':'displ'+_0x16065b(0x24e)+'ex;ga'+_0x16065b(0x20c)+'x;pad'+_0x16065b(0x34e)+'10px;'+_0x16065b(0x5ec)+_0x16065b(0xa10)+'ius:2'+_0x16065b(0xaf6)+_0x16065b(0x935)+'r-eve'+'nts:a'+'uto;z'+_0x16065b(0x5dc)+'x:214'+'74836'+_0x16065b(0x3fc),'mUKLY':'backg'+_0x16065b(0x50e)+_0x16065b(0x628)+'(24,1'+_0x16065b(0x297)+'.82);'+'backd'+'rop-f'+_0x16065b(0x733)+':blur'+'(22px'+_0x16065b(0x73c)+_0x16065b(0x7fc)+_0x16065b(0x81f)+_0x16065b(0xabd)+_0x16065b(0x416)+_0x16065b(0x3db)+_0x16065b(0x289)+_0x16065b(0x733)+':blur'+'(22px'+')\x20sat'+'urate'+_0x16065b(0x81f)+');','URiEL':_0x16065b(0x785)+_0x16065b(0x97d)+_0x16065b(0xa3f)+_0x16065b(0x497)+_0x16065b(0xa79)+_0x16065b(0x9bb)+_0x16065b(0x91f)+'55,.0'+'6),in'+_0x16065b(0x842)+_0x16065b(0x414)+'0\x20rgb'+_0x16065b(0x6d9)+_0x16065b(0x280)+_0x16065b(0x92d)+_0x16065b(0x750)+'\x2030px'+_0x16065b(0x999)+_0x16065b(0xa79)+'(0,0,'+_0x16065b(0xad7)+');','fTEDB':'color'+_0x16065b(0x261)+_0x16065b(0x26c)+'ont-s'+'ize:1'+_0x16065b(0x9db)+_0x16065b(0x35a)+_0x16065b(0x634)+_0x16065b(0xb6a)+'er\x22,\x22'+_0x16065b(0x439)+_0x16065b(0x98a)+'syste'+'m-ui,'+_0x16065b(0x29a)+_0x16065b(0x883)+';}','UtyEc':'.mn-l'+'ogo{d'+_0x16065b(0x2c5)+_0x16065b(0x911)+'d;pla'+'ce-it'+_0x16065b(0xb7c)+'enter'+';widt'+_0x16065b(0x7f1)+_0x16065b(0x466)+'ght:3'+'2px;m'+_0x16065b(0x8a8)+_0x16065b(0xaf0)+'om:6p'+'x;}','KKPuu':'.mn-t'+_0x16065b(0x3b7)+'ver{c'+'olor:'+_0x16065b(0x546)+'246,2'+_0x16065b(0x2a0)+_0x16065b(0x315)+';}','EIazb':_0x16065b(0x973)+'{font'+'-size'+':17px'+';font'+_0x16065b(0x46b)+_0x16065b(0x7b7)+_0x16065b(0xb46),'EnIFZ':_0x16065b(0x652)+_0x16065b(0x3fd)+'hover'+_0x16065b(0x97f)+_0x16065b(0x619)+_0x16065b(0x7ab)+'groun'+_0x16065b(0x1a2)+'a(255'+_0x16065b(0x280)+_0x16065b(0x92d)+_0x16065b(0x21c),'zrQQe':'.mn-c'+_0x16065b(0x4e1)+_0x16065b(0x928)+';min-'+_0x16065b(0x8be)+'t:0;o'+'verfl'+'ow-y:'+_0x16065b(0xae3)+_0x16065b(0x25b)+'ay:gr'+_0x16065b(0x413)+'id-te'+_0x16065b(0x815)+'e-col'+'umns:'+'repea'+_0x16065b(0xb4b)+_0x16065b(0x4a6)+_0x16065b(0x79f)+_0x16065b(0x49a)+_0x16065b(0x732)+_0x16065b(0x29c)+';','aVpmR':'align'+'-item'+_0x16065b(0x62b)+_0x16065b(0x15b)+_0x16065b(0x42b)+_0x16065b(0x217)+'t:sta'+_0x16065b(0x37a)+_0x16065b(0x20c)+'x;pad'+_0x16065b(0x34e)+'0\x204px'+_0x16065b(0xa0f)+'0;}','CMOAi':_0x16065b(0x652)+'ols::'+'-webk'+'it-sc'+_0x16065b(0x47f)+'ar{wi'+'dth:8'+'px;}','OjOUH':_0x16065b(0x652)+'ols::'+_0x16065b(0x4b4)+_0x16065b(0x78d)+'rollb'+_0x16065b(0x6be)+_0x16065b(0x479)+'ackgr'+_0x16065b(0x53c)+'rgba('+'255,2'+'55,25'+_0x16065b(0x930)+_0x16065b(0x8b2)+_0x16065b(0x3f0)+_0x16065b(0x747)+':4px;'+'}','ZGNVn':'.sk-c'+_0x16065b(0x5b5)+_0x16065b(0x5c0)+'ispla'+'y:fle'+_0x16065b(0x7a0)+_0x16065b(0x56a)+_0x16065b(0xb7c)+'enter'+';gap:'+'8px;p'+'addin'+_0x16065b(0x774)+'x\x2012p'+'x;}','EDMcE':_0x16065b(0x279)+'ard-t'+'itle\x20'+_0x16065b(0x61f)+'g{fon'+_0x16065b(0x15f)+_0x16065b(0x826)+'x;fon'+_0x16065b(0x57f)+_0x16065b(0x3b6)+_0x16065b(0x86c)+_0x16065b(0x7f9)+_0x16065b(0xb3e)+_0x16065b(0x30a)+_0x16065b(0x55f)+',.45)'+';}','xDbKo':_0x16065b(0x279)+'ard.o'+_0x16065b(0x862)+'-card'+_0x16065b(0x201)+_0x16065b(0x5a5)+_0x16065b(0x235)+_0x16065b(0x79d)+'#fff0'+_0x16065b(0x388),'LagFG':_0x16065b(0x7fb)+'desc{'+_0x16065b(0x4cf)+_0x16065b(0x896)+_0x16065b(0x876)+'opaci'+_0x16065b(0xb15)+_0x16065b(0x92a)+_0x16065b(0x736)+_0x16065b(0x3bd)+_0x16065b(0x41d)+_0x16065b(0xa84)+'space'+':pre-'+'wrap;'+'}','WgGrv':_0x16065b(0x279)+'tl{di'+_0x16065b(0x2aa)+_0x16065b(0x706)+';alig'+_0x16065b(0x6c0)+_0x16065b(0x2b0)+_0x16065b(0x673)+_0x16065b(0x96f)+'px;pa'+'dding'+':4px\x20'+'0;fon'+_0x16065b(0x15f)+'e:11.'+'5px;}','biQYw':_0x16065b(0x7ad)+'witch'+_0x16065b(0x80d)+'er{co'+_0x16065b(0x707)+_0x16065b(0x6e1)+'ositi'+'on:ab'+_0x16065b(0x2a1)+_0x16065b(0x1e4)+_0x16065b(0x22a)+_0x16065b(0x4f3)+'3px;w'+'idth:'+_0x16065b(0x4f9)+'eight'+_0x16065b(0x44b)+_0x16065b(0x5ec)+_0x16065b(0xa10)+'ius:5'+_0x16065b(0xa4e),'NLJzB':_0x16065b(0x5bd)+'round'+_0x16065b(0x628)+'(255,'+_0x16065b(0x91f)+_0x16065b(0x7c1)+'5);tr'+_0x16065b(0x773)+'ion:l'+'eft\x20.'+_0x16065b(0x72a)+_0x16065b(0x236)+'und\x20.'+'2s;}','VsBWk':_0x16065b(0x7ad)+_0x16065b(0xa52)+_0x16065b(0xa91)+_0x16065b(0x1ba)+_0x16065b(0x6f6)+'true\x22'+']{bac'+_0x16065b(0x432)+_0x16065b(0x99c)+'ba(25'+'5,107'+_0x16065b(0x8f7)+_0x16065b(0x957)+'}','zDGKO':'.sk-s'+_0x16065b(0x4df)+_0x16065b(0x807)+_0x16065b(0x416)+_0x16065b(0x248)+_0x16065b(0x605)+'nable'+_0x16065b(0x32f)+'k{hei'+_0x16065b(0x167)+_0x16065b(0x79e)+_0x16065b(0x27b)+_0x16065b(0x892)+'s:2px'+';','bUADA':'.sk-s'+_0x16065b(0x4df)+_0x16065b(0x807)+'bkit-'+_0x16065b(0x248)+_0x16065b(0xa15)+_0x16065b(0x2c4)+_0x16065b(0x889)+_0x16065b(0x19c)+_0x16065b(0x603)+'e:non'+_0x16065b(0x429)+_0x16065b(0x3b3)+_0x16065b(0x466)+_0x16065b(0x3b6)+_0x16065b(0x3ed)+_0x16065b(0x16d)+_0x16065b(0x251)+_0x16065b(0x29e)+_0x16065b(0x7c4)+'-radi'+_0x16065b(0x90e)+'%;bac'+_0x16065b(0x432)+_0x16065b(0x310)+_0x16065b(0x2c8)+';}','thZPn':'.sk-v'+_0x16065b(0x61e)+'nt-si'+'ze:11'+_0x16065b(0x4d3)+_0x16065b(0xa1a)+_0x16065b(0x867)+_0x16065b(0x7aa)+'in-wi'+'dth:3'+_0x16065b(0x80f)+'ext-a'+_0x16065b(0x58e)+_0x16065b(0xae2)+';colo'+'r:rgb'+_0x16065b(0x44f)+_0x16065b(0x6de)+'242,.'+'8);}','GsdOm':_0x16065b(0x44a)+_0x16065b(0x351)+'ont-s'+'ize:1'+'1px;c'+_0x16065b(0x79d)+'rgba('+_0x16065b(0x908)+'38,24'+_0x16065b(0x2b9)+';padd'+_0x16065b(0x1b9)+_0x16065b(0x486)+'white'+_0x16065b(0xa8e)+_0x16065b(0xac4)+_0x16065b(0x25d)+';}','qRKfN':'.sk-n'+_0x16065b(0x6d7)+'rr{co'+_0x16065b(0x1af)+'ff7a9'+_0x16065b(0x2d6),'frSMM':_0x16065b(0x336)+_0x16065b(0x595)+'ign-s'+'elf:f'+'lex-s'+_0x16065b(0x45b)+_0x16065b(0x5ec)+_0x16065b(0x319)+_0x16065b(0x7c4)+_0x16065b(0x7ed)+'us:8p'+_0x16065b(0x857)+'ding:'+'8px\x201'+_0x16065b(0x7b2)+_0x16065b(0xa97)+'ound:'+_0x16065b(0x177)+_0x16065b(0x2af)+_0x16065b(0x1af)+'fff;','YoDrh':_0x16065b(0x9f0)+'re{fo'+'nt:11'+'px/1.'+'5\x20ui-'+_0x16065b(0x630)+'pace,'+'Conso'+'las,m'+_0x16065b(0xbaa)+_0x16065b(0x6c9)+_0x16065b(0xa84)+_0x16065b(0x522)+_0x16065b(0xb8b)+_0x16065b(0x615)+'word-'+'break'+_0x16065b(0x85f)+_0x16065b(0x4b2)+_0x16065b(0x71e)+'gin:0'+';opac'+_0x16065b(0x58c)+_0x16065b(0x2b3)+_0x16065b(0x188)+'ght:2'+'80px;'+'overf'+_0x16065b(0x5f9)+'uto;}','yUpEJ':'#saku'+_0x16065b(0xb2c)+_0x16065b(0x7a3)+_0x16065b(0x38a)+_0x16065b(0x8eb)+'xed;t'+_0x16065b(0x5be)+'px;ri'+_0x16065b(0x406)+_0x16065b(0x81e)+'-inde'+_0x16065b(0xad9)+_0x16065b(0xaa4)+'46;cu'+_0x16065b(0x8e8)+_0x16065b(0x6ba)+'er;wi'+_0x16065b(0x7e9)+'6px;h'+_0x16065b(0x363)+_0x16065b(0x501)+';opac'+_0x16065b(0x58c)+_0x16065b(0x7a9),'CzFPc':_0x16065b(0x955)+'ition'+_0x16065b(0x2e3)+_0x16065b(0x6c3)+_0x16065b(0x159)+'inter'+_0x16065b(0xa98)+'ts:au'+_0x16065b(0x15e)+'lter:'+_0x16065b(0x570)+_0x16065b(0x38d)+'w(0\x200'+'\x204px\x20'+'rgba('+_0x16065b(0x5c3)+'07,15'+_0x16065b(0x74f)+');}','dbLyq':_0x16065b(0x308)+'class'+'=\x22mn-'+_0x16065b(0x625)+_0x16065b(0x2eb)+_0x16065b(0x6e4)+'ox=\x220'+_0x16065b(0xa4c)+_0x16065b(0x88d)+_0x16065b(0x30f)+'\x20d=\x22M'+_0x16065b(0x5c7)+_0x16065b(0x64a)+'-2.5-'+_0x16065b(0x1d0)+_0x16065b(0x8d3)+_0x16065b(0x690)+_0x16065b(0x1a7)+'8-4.5'+_0x16065b(0x8b7)+'5s4\x202'+_0x16065b(0x3a4)+'5c0\x203'+_0x16065b(0xad2)+_0x16065b(0x265)+_0x16065b(0x882),'Vaifk':_0x16065b(0x789),'bYLZp':'AaPGq','FSicr':_0x16065b(0x6fd),'CPSHA':_0x16065b(0x247)+'ntent'+_0x16065b(0xb7b)+'d'};var _0x410a83=location[_0x16065b(0x4ec)+'ame']||'',_0x128710=/(^|\.)www\.crazygames\.com$/[_0x16065b(0x9c4)](_0x410a83),_0x12ba22=/(^|\.)games\.crazygames\.com$/['test'](_0x410a83),_0x3513f1=/(^|\.)crazygames\.com$/[_0x16065b(0x9c4)](_0x410a83)&&!_0x128710&&!_0x12ba22,_0xbe2c58=_0x128710?_0x16065b(0xb77)+'l':_0x12ba22?_0x16065b(0x86d)+'er':_0x16065b(0x23e)+'r';if(!_0x128710&&!_0x12ba22&&!_0x3513f1)return;var _0x5e2156='#ff8f'+'b1',_0x466bdc=_0x4490c7['dWzmj'],_0x5e09ee=_0x4490c7['tHMnn'],_0x29d676=_0x4490c7['vtefj'],_0x383cde=_0x16065b(0x638);if(_0x12ba22){if(_0x16065b(0x8bd)!=='Iaffc')try{var _0x564e12=_0x49d161[_0x16065b(0x8ce)+_0x16065b(0x7e1)+'ler'];if(!_0x564e12||!_0x564e12['ptr'])return null;var _0x374781=_0x227278(_0x564e12['ptr'],-0xedb*-0x1+0x1111+-0x3a1*0x8,-0x1459+0x95d+0x233*0x5);return _0x374781?_0x374781[0x182*0x4+0x2587*-0x1+0x1f80]:null;}catch(_0x408109){return null;}else{window[_0x16065b(0xb86)+'entLi'+'stene'+'r'](_0x16065b(0x158)+'ge',function(_0x27dc78){var _0x4e6e1c=_0x16065b;if(_0x4490c7['kCzII'](_0x4e6e1c(0x880),_0x4490c7[_0x4e6e1c(0x7ff)])){var _0x26dd9f=_0x27dc78['data'];if(!_0x26dd9f||_0x26dd9f['__sak'+'ura']!==_0x466bdc)return;try{if(window[_0x4e6e1c(0xaa2)+'t']&&window['paren'+'t']!==window)window[_0x4e6e1c(0xaa2)+'t'][_0x4e6e1c(0xb8e)+_0x4e6e1c(0x78a)+'e'](_0x26dd9f,'*');if(window['top']&&window[_0x4e6e1c(0x502)]!==window)window['top'][_0x4e6e1c(0xb8e)+_0x4e6e1c(0x78a)+'e'](_0x26dd9f,'*');}catch(_0x2541e0){}if(_0x26dd9f&&_0x26dd9f['kind']==='cmd')try{var _0x38120f=document[_0x4e6e1c(0x4e6)+_0x4e6e1c(0x291)+_0x4e6e1c(0x96b)+'l'](_0x4490c7['JbxSU']);for(var _0x336fc7=0xa52+0x268e+-0x30e0;_0x4490c7[_0x4e6e1c(0xb39)](_0x336fc7,_0x38120f['lengt'+'h']);_0x336fc7++){try{if(_0x38120f[_0x336fc7][_0x4e6e1c(0x9e3)+_0x4e6e1c(0xa85)+'dow'])_0x38120f[_0x336fc7]['conte'+_0x4e6e1c(0xa85)+_0x4e6e1c(0x66c)][_0x4e6e1c(0xb8e)+_0x4e6e1c(0x78a)+'e'](_0x26dd9f,'*');}catch(_0x41a4aa){}}}catch(_0x3e8b09){}}else _0x34ef85=_0x39aa34,_0x44b104=_0x34b506[_0x53b4ba];}),console[_0x16065b(0xafe)](_0x16065b(0x3ca)+_0x16065b(0x204)+_0x16065b(0x8b1)+_0x16065b(0x2ed)+_0x16065b(0x72f)+'IVE\x20('+_0x16065b(0x2da)+_0x16065b(0x6ac)+_0x16065b(0x5e5),_0x4490c7[_0x16065b(0x329)]('color'+':',_0x5e2156));return;}}if(_0x128710){console[_0x16065b(0xafe)](_0x4490c7['muumE'],_0x4490c7[_0x16065b(0xb5a)](_0x4490c7[_0x16065b(0x5e8)](_0x16065b(0x844)+':',_0x5e2156),_0x4490c7[_0x16065b(0x778)]),{'host':_0x410a83});var _0x3c37cc={'set':function(){},'command':function(){}};function _0x171070(_0x374192,_0x525dba){var _0x214c2c=_0x16065b,_0x528479={'hTIQJ':_0x4490c7[_0x214c2c(0x766)]},_0x401dcc={'__sakura':_0x466bdc,'kind':_0x214c2c(0x218),'cmd':_0x374192,'arg':_0x525dba};try{var _0x1badfb=document[_0x214c2c(0x4e6)+_0x214c2c(0x291)+_0x214c2c(0x96b)+'l']('ifram'+'e');for(var _0x187d8b=0x517+-0x14b8+-0x1*-0xfa1;_0x187d8b<_0x1badfb['lengt'+'h'];_0x187d8b++){if(_0x4490c7['lAfMD']!==_0x214c2c(0x2d5)){if(_0x42e2d2[_0x214c2c(0x7cd)+'ns'][_0x225b66]['class'+'List'])_0x114f0c[_0x214c2c(0x7cd)+'ns'][_0x36fd3c][_0x214c2c(0x6ed)+_0x214c2c(0xa9b)]=_0x214c2c(0x1bd)+'b'+(_0x2bfe1f===_0x22f108?_0x528479[_0x214c2c(0x89a)]:'');}else try{if(_0x1badfb[_0x187d8b][_0x214c2c(0x9e3)+_0x214c2c(0xa85)+_0x214c2c(0x66c)])_0x1badfb[_0x187d8b][_0x214c2c(0x9e3)+'ntWin'+_0x214c2c(0x66c)][_0x214c2c(0xb8e)+_0x214c2c(0x78a)+'e'](_0x401dcc,'*');}catch(_0x1146bf){}}}catch(_0x270384){}try{var _0x127f7c=new BroadcastChannel('sakur'+'a-sw');_0x127f7c['postM'+_0x214c2c(0x78a)+'e'](_0x401dcc),setTimeout(function(){var _0x1318d8=_0x214c2c;if(_0x1318d8(0x1d6)==='xGRrK')try{_0x127f7c[_0x1318d8(0x755)]();}catch(_0x5e120b){}else _0x2a9602(_0x1318d8(0x760)+_0x1318d8(0x513));},0x26*-0xc5+-0x2*-0x1182+0x266*-0x2);}catch(_0x39f09f){}}var _0x361223=_0x4490c7[_0x16065b(0x23b)];function _0x2cbd13(){try{return localStorage['getIt'+'em'](_0x361223)==='1';}catch(_0x5cfbc0){return![];}}function _0x2b982a(_0x36e737){var _0x3e7f7c=_0x16065b,_0x4f15f4={'ifypV':function(_0x3dc67c,_0x4fbac7){return _0x3dc67c(_0x4fbac7);}};if(_0x4490c7[_0x3e7f7c(0x958)](_0x4490c7[_0x3e7f7c(0x27d)],_0x3e7f7c(0x352)))_0x14ccd4(!_0x4601b4['on'],_0x3100a9['facto'+'r']);else{try{_0x36e737?localStorage[_0x3e7f7c(0x340)+'em'](_0x361223,'1'):localStorage[_0x3e7f7c(0x4b5)+_0x3e7f7c(0x268)](_0x361223);}catch(_0x3a838c){}try{if('chmtV'===_0x4490c7[_0x3e7f7c(0x8f5)])_0x405d68['preve'+_0x3e7f7c(0x3b9)+_0x3e7f7c(0x646)]();else{var _0x1dcd7b=document[_0x3e7f7c(0x5bc)+_0x3e7f7c(0x59a)+_0x3e7f7c(0x83f)]('sakur'+'a-sw-'+'v2');if(_0x1dcd7b)_0x1dcd7b[_0x3e7f7c(0x4b5)+'e']();}}catch(_0x1b9e1d){}try{var _0x21f7c6=document[_0x3e7f7c(0x5bc)+'ement'+'ById'](_0x3e7f7c(0x157)+_0x3e7f7c(0x748)+'v2-ta'+'b');if(_0x4490c7[_0x3e7f7c(0x1ca)](_0x36e737,!_0x21f7c6)&&document[_0x3e7f7c(0x4eb)]){var _0x245e61=document['creat'+_0x3e7f7c(0x238)+'ent'](_0x3e7f7c(0x28e));_0x245e61['id']=_0x4490c7['BDhVR'],_0x245e61[_0x3e7f7c(0x8a0)]['cssTe'+'xt']=_0x4490c7[_0x3e7f7c(0x8c6)](_0x4490c7[_0x3e7f7c(0x8c6)](_0x4490c7['gehBI'](_0x3e7f7c(0x814)+_0x3e7f7c(0x6a8)+_0x3e7f7c(0x8f0)+'left:'+_0x3e7f7c(0x215)+_0x3e7f7c(0x8e3)+_0x3e7f7c(0x81e)+_0x3e7f7c(0x5dc)+_0x3e7f7c(0xad9)+'74829'+_0x3e7f7c(0x1ef)+_0x3e7f7c(0x8e8)+_0x3e7f7c(0x6ba)+_0x3e7f7c(0x3e8)+'er-se'+'lect:'+'none;',_0x4490c7[_0x3e7f7c(0x54a)]),_0x5e2156),';')+(_0x3e7f7c(0x5ec)+_0x3e7f7c(0xa10)+_0x3e7f7c(0x1c7)+_0x3e7f7c(0xb17)+_0x3e7f7c(0x636)+'ng:4p'+'x\x2012p'+'x;fon'+_0x3e7f7c(0x20a)+_0x3e7f7c(0x4ab)+'\x20ui-m'+'onosp'+'ace,C'+_0x3e7f7c(0x4ac)+_0x3e7f7c(0xb1e)+'nospa'+_0x3e7f7c(0x8ad)),_0x245e61[_0x3e7f7c(0x3f1)+'onten'+'t']=_0x4490c7[_0x3e7f7c(0x343)],_0x245e61['oncli'+'ck']=function(){_0x2b982a(![]),_0x17f87a();},document[_0x3e7f7c(0x4eb)][_0x3e7f7c(0x4b9)+_0x3e7f7c(0x46f)+'d'](_0x245e61);}else!_0x36e737&&_0x21f7c6&&(_0x4490c7[_0x3e7f7c(0x5b1)]===_0x3e7f7c(0x7b8)?_0x57e96e=_0x4f15f4[_0x3e7f7c(0x7d7)](_0x498861,_0x31586a&&_0x40410c['messa'+'ge']||_0x41e525):_0x21f7c6[_0x3e7f7c(0x4b5)+'e']());}catch(_0x432da2){}}}function _0x234cc1(){var _0xa27d7e=_0x16065b,_0x76ce7b={'AVwle':_0xa27d7e(0x1a5)+'|5|3|'+'2|6','ZYjty':_0xa27d7e(0x7cd)+'n','NwQhE':_0x4490c7['BkvCV'],'YUjnE':function(_0x54789f){return _0x54789f();}};if(_0x4490c7['ppTIJ'](_0x2cbd13))return null;var _0x51aafd=document[_0xa27d7e(0x5bc)+_0xa27d7e(0x59a)+_0xa27d7e(0x83f)](_0xa27d7e(0x157)+_0xa27d7e(0x748)+'v2');if(_0x51aafd)return _0x51aafd;if(!document['body']||!document[_0xa27d7e(0x4eb)]['appen'+'dChil'+'d'])return null;try{if(!document['getEl'+'ement'+'ById']('sakur'+'a-sw-'+_0xa27d7e(0xb12)+'s')){if(_0x4490c7[_0xa27d7e(0x4b7)](_0x4490c7['ROkhe'],'YYuwv')){var _0x1b13a1=_0x76ce7b['AVwle'][_0xa27d7e(0x1a9)]('|'),_0x4ca38a=-0x3d*-0x6b+0x540+0x1ebf*-0x1;while(!![]){switch(_0x1b13a1[_0x4ca38a++]){case'0':var _0x439232=_0x29a5ff[_0x1f189e];continue;case'1':_0x392890[_0xa27d7e(0x9e7)]=_0x76ce7b[_0xa27d7e(0x75a)];continue;case'2':_0x84dc57[_0x439232['id']]=_0x392890;continue;case'3':(function(_0x29d20e){_0x392890['oncli'+'ck']=function(){_0xb72537(_0x29d20e);};}(_0x439232['id']));continue;case'4':var _0x392890=_0x542e4b(_0xa27d7e(0x7cd)+'n',_0x76ce7b[_0xa27d7e(0x6ca)],'<smal'+'l>'+_0x439232[_0xa27d7e(0x7e6)]+(_0xa27d7e(0xaf1)+_0xa27d7e(0x1c0)));continue;case'5':_0x392890['title']=_0x439232['label'];continue;case'6':_0x5d9373['appen'+'dChil'+'d'](_0x392890);continue;}break;}}else{var _0x1a1b2a=document['creat'+_0xa27d7e(0x238)+_0xa27d7e(0x56c)]('style');_0x1a1b2a['id']=_0xa27d7e(0x157)+'a-sw-'+_0xa27d7e(0xb12)+'s',_0x1a1b2a[_0xa27d7e(0x3f1)+_0xa27d7e(0x217)+'t']=_0x4490c7[_0xa27d7e(0x4ce)],(document[_0xa27d7e(0x2bc)]||document['docum'+_0xa27d7e(0x769)+'ement'])['appen'+_0xa27d7e(0x46f)+'d'](_0x1a1b2a);}}return _0x51aafd=document[_0xa27d7e(0x965)+_0xa27d7e(0x238)+'ent'](_0xa27d7e(0x28e)),_0x51aafd['id']=_0xa27d7e(0x157)+'a-sw-'+'v2',document[_0xa27d7e(0x4eb)][_0xa27d7e(0x4b9)+_0xa27d7e(0x46f)+'d'](_0x51aafd),_0x51aafd;}catch(_0x3b4d19){if(_0x4490c7[_0xa27d7e(0x958)](_0x4490c7[_0xa27d7e(0x6e3)],_0x4490c7['enLMq']))return null;else{var _0x20411c=_0xe476a8['getEl'+'ement'+'ById'](_0xa27d7e(0x157)+_0xa27d7e(0x748)+'v2-ta'+'b');if(_0x4490c7[_0xa27d7e(0x888)](_0xfb57f3,!_0x20411c)&&_0x3f66bb['body']){var _0x138802=(_0xa27d7e(0x9cc)+'|5|0|'+'1')[_0xa27d7e(0x1a9)]('|'),_0x2fda1e=-0x1750+0x1b98+-0x448;while(!![]){switch(_0x138802[_0x2fda1e++]){case'0':_0x5cbbdb['oncli'+'ck']=function(){_0x227c25(![]),_0x76ce7b['YUjnE'](_0xe5e6bc);};continue;case'1':_0x1ecf93[_0xa27d7e(0x4eb)][_0xa27d7e(0x4b9)+_0xa27d7e(0x46f)+'d'](_0x5cbbdb);continue;case'2':_0x5cbbdb[_0xa27d7e(0x8a0)]['cssTe'+'xt']=_0x4490c7[_0xa27d7e(0x7a8)]+('backg'+_0xa27d7e(0x50e)+':rgba'+'(21,1'+_0xa27d7e(0x972)+_0xa27d7e(0x212)+_0xa27d7e(0x7c4)+_0xa27d7e(0xa9e)+_0xa27d7e(0x504)+_0xa27d7e(0xa79)+'(255,'+'143,1'+'77,.5'+_0xa27d7e(0x5e2)+'or:')+_0x4f8ea9+';'+(_0xa27d7e(0x5ec)+_0xa27d7e(0xa10)+'ius:9'+_0xa27d7e(0xb17)+'paddi'+_0xa27d7e(0x992)+_0xa27d7e(0x2e7)+_0xa27d7e(0x64e)+'t:11p'+'x/1.4'+_0xa27d7e(0x776)+'onosp'+_0xa27d7e(0x444)+_0xa27d7e(0x4ac)+'as,mo'+_0xa27d7e(0xa81)+_0xa27d7e(0x8ad));continue;case'3':var _0x5cbbdb=_0x3b1c64['creat'+'eElem'+_0xa27d7e(0x56c)](_0x4490c7['DsLgU']);continue;case'4':_0x5cbbdb['id']='sakur'+_0xa27d7e(0x748)+_0xa27d7e(0x8d6)+'b';continue;case'5':_0x5cbbdb['textC'+_0xa27d7e(0x217)+'t']=_0xa27d7e(0x157)+'a';continue;}break;}}else!_0x331c4d&&_0x20411c&&_0x20411c['remov'+'e']();}}}function _0x17f87a(){var _0x41f13e=_0x16065b,_0x516c54=_0x234cc1();if(!_0x516c54)return _0x3c37cc;if(_0x516c54['datas'+'et'][_0x41f13e(0x441)])return _0x516c54[_0x41f13e(0x441)];try{return _0x4490c7[_0x41f13e(0x86a)](_0x25218d,_0x516c54);}catch(_0xf7c4e0){return _0x516c54[_0x41f13e(0x5f7)+'et'][_0x41f13e(0x441)]='1',_0x516c54[_0x41f13e(0x441)]=_0x3c37cc,console['warn'](_0x41f13e(0x3ca)+_0x41f13e(0x204)+'\x20pane'+'l\x20dis'+'abled',_0x4490c7[_0x41f13e(0x8c6)]('color'+':',_0x5e2156),_0xf7c4e0),_0x3c37cc;}}function _0x25218d(_0x2c3d7b){var _0x3307b3=_0x16065b,_0x2bda3a={'SCdIm':function(_0x31d9d7,_0x1aa575){var _0xbaf86d=_0x4a91;return _0x4490c7[_0xbaf86d(0x1d1)](_0x31d9d7,_0x1aa575);},'JOOig':function(_0x57d779){return _0x4490c7['YGNdK'](_0x57d779);},'YEpfH':_0x4490c7[_0x3307b3(0x7df)],'OJcTE':'Speed'+_0x3307b3(0x639),'GZexT':'UUVuE','fqHgf':function(_0x107696,_0x54d504){return _0x107696+_0x54d504;},'FhHEA':_0x3307b3(0x874)+_0x3307b3(0x7d3)+'red\x20a'+'t\x20','yoxTW':_0x4490c7['GOKfV'],'ovjUE':function(_0x3d48ee,_0x2156d5){return _0x3d48ee+_0x2156d5;},'ZVQqq':function(_0xdd92ec,_0x1255ba){return _0xdd92ec+_0x1255ba;},'UVYRa':function(_0x5a0270){return _0x4490c7['WwBYn'](_0x5a0270);},'QkYvJ':function(_0x2ec63c,_0x52d81c){return _0x2ec63c+_0x52d81c;},'PkHZO':_0x4490c7[_0x3307b3(0x54a)],'pXZVQ':_0x3307b3(0x157)+_0x3307b3(0x748)+'v2-ta'+'b','LHIpN':'Runti'+_0x3307b3(0x482)+_0x3307b3(0x396)+'lugin'+_0x3307b3(0x729)+_0x3307b3(0x875)+'le','GlDom':function(_0x244f23,_0x5bf888){return _0x244f23+_0x5bf888;}};_0x2c3d7b[_0x3307b3(0x8a0)]['cssTe'+'xt']=_0x4490c7[_0x3307b3(0xaed)](_0x3307b3(0x814)+_0x3307b3(0x6a8)+_0x3307b3(0x8f0)+_0x3307b3(0x4f3)+'12px;'+'top:1'+_0x3307b3(0x81e)+_0x3307b3(0x5dc)+_0x3307b3(0xad9)+'74830'+'00;ma'+_0x3307b3(0x468)+_0x3307b3(0xb09)+_0x3307b3(0x3cf)+'w,620'+'px);m'+'ax-he'+'ight:'+_0x3307b3(0x477)+(_0x3307b3(0x5bd)+'round'+_0x3307b3(0x181)+'c1d;c'+_0x3307b3(0x79d)+'#f7ee'+_0x3307b3(0xa12)+_0x3307b3(0x241)+'1px\x20s'+_0x3307b3(0x2b7)+_0x3307b3(0x546)+_0x3307b3(0x5c3)+'43,17'+_0x3307b3(0x93b)+_0x3307b3(0xa7f)+_0x3307b3(0xb06)+_0x3307b3(0x7b5)+_0x3307b3(0xb29)),_0x3307b3(0x81c)+'12px/'+_0x3307b3(0x683)+_0x3307b3(0x593)+'ospac'+_0x3307b3(0x4b3)+_0x3307b3(0x995)+_0x3307b3(0x9d6)+_0x3307b3(0x522)+';box-'+_0x3307b3(0x38d)+_0x3307b3(0x8fb)+_0x3307b3(0x3a2)+_0x3307b3(0x614)+_0x3307b3(0x3b2)+'#000;')+_0x4490c7[_0x3307b3(0x50a)],_0x2c3d7b['inner'+_0x3307b3(0x714)]=_0x4490c7[_0x3307b3(0xaed)](_0x4490c7[_0x3307b3(0xb01)](_0x4490c7['lQWQi'](_0x4490c7['RByHD'](_0x4490c7['ljPLF'](_0x4490c7[_0x3307b3(0x3eb)](_0x4490c7['lQWQi'](_0x3307b3(0x754)+_0x3307b3(0x8a0)+_0x3307b3(0xafc)+_0x3307b3(0x34e)+'9px\x201'+'2px;b'+_0x3307b3(0x7c4)+'-bott'+_0x3307b3(0x988)+'x\x20sol'+'id\x20rg'+_0x3307b3(0x5a7)+'5,143'+',177,'+'.3);d'+_0x3307b3(0x2c5)+'y:fle'+'x;gap'+':8px;'+_0x3307b3(0x194)+'-item'+'s:cen'+_0x3307b3(0x1ac)+'lex:0'+_0x3307b3(0x4a0)+'to;\x22>'+('<b\x20st'+_0x3307b3(0x649)+'color'+':')+_0x5e2156+_0x4490c7['uGMaj']+_0x4490c7['OZmef'],_0x3307b3(0x905)+_0x3307b3(0xa02)+_0x3307b3(0x3e2)+'tatus'+_0x3307b3(0x613)+'le=\x22c'+_0x3307b3(0x79d)+'#bda9'+_0x3307b3(0x4d8)+'aitin'+_0x3307b3(0x334)+_0x3307b3(0x6ff)+'\x20fram'+'e…</s'+_0x3307b3(0xa23))+(_0x3307b3(0x7ec)+'on\x20id'+_0x3307b3(0x73b)+_0x3307b3(0x19e)+'\x22\x20sty'+_0x3307b3(0x9ad)+_0x3307b3(0x2c5)+_0x3307b3(0x859)+'e;mar'+'gin-l'+_0x3307b3(0x8c2)+_0x3307b3(0xb13)+'ackgr'+'ound:'),_0x5e2156)+(_0x3307b3(0xa7f)+'er:0;'+_0x3307b3(0x844)+':#2a0'+'f1b;b'+'order'+_0x3307b3(0x7ed)+'us:7p'+_0x3307b3(0x857)+_0x3307b3(0x34e)+_0x3307b3(0xadf)+_0x3307b3(0x9cd)+'ont-w'+_0x3307b3(0x363)+_0x3307b3(0x5fe)+'curso'+_0x3307b3(0x42e)+_0x3307b3(0x673)+_0x3307b3(0x30e)+'y\x20JSO'+_0x3307b3(0x375)+'tton>')+(_0x3307b3(0x7ec)+_0x3307b3(0x189)+'=\x22sw2'+'-togg'+_0x3307b3(0x77a)+'tyle='+_0x3307b3(0x770)+_0x3307b3(0xadc)+'d:tra'+_0x3307b3(0x96c)+'ent;b'+_0x3307b3(0x7c4)+_0x3307b3(0xa9e)+'solid'+_0x3307b3(0xa79)+_0x3307b3(0x9bb)+_0x3307b3(0x179)+'77,.4'+_0x3307b3(0x5e2)+_0x3307b3(0x9c5)+'7eef5'+_0x3307b3(0xa7f)+_0x3307b3(0xb06)+_0x3307b3(0x7b5)+'7px;p'+'addin'+_0x3307b3(0x599)+'\x208px;'+_0x3307b3(0x8d4)+_0x3307b3(0x42e)+'nter;'+_0x3307b3(0xa58)+'n</bu'+'tton>')+('<butt'+'on\x20id'+_0x3307b3(0x73b)+'-x\x22\x20s'+'tyle='+'\x22back'+_0x3307b3(0xadc)+_0x3307b3(0x910)+'nspar'+_0x3307b3(0x913)+_0x3307b3(0x7c4)+_0x3307b3(0xa9e)+'solid'+'\x20rgba'+'(255,'+_0x3307b3(0x179)+'77,.4'+');col'+_0x3307b3(0x9c5)+'7eef5'+_0x3307b3(0xa7f)+_0x3307b3(0xb06)+_0x3307b3(0x7b5)+_0x3307b3(0x5a3)+_0x3307b3(0x498)+_0x3307b3(0x599)+_0x3307b3(0xa5b)+_0x3307b3(0x8d4)+'r:poi'+_0x3307b3(0x673)+_0x3307b3(0x728)+'butto'+'n>'),'</div'+'>'),_0x4490c7[_0x3307b3(0x208)])+_0x4490c7[_0x3307b3(0x544)],_0x3307b3(0x7ec)+_0x3307b3(0x189)+'=\x22sw2'+_0x3307b3(0x968)+'d\x22\x20st'+_0x3307b3(0x649)+_0x3307b3(0x5bd)+'round'+_0x3307b3(0x5fa)+_0x3307b3(0x7db)+'nt;bo'+_0x3307b3(0x241)+'1px\x20s'+_0x3307b3(0x2b7)+_0x3307b3(0x546)+'255,1'+_0x3307b3(0x6f4)+_0x3307b3(0x6e0)+_0x3307b3(0x44e)+_0x3307b3(0x5d3)+_0x3307b3(0x6f5)+_0x3307b3(0x5ec)+_0x3307b3(0xa10)+_0x3307b3(0x492)+_0x3307b3(0x834)+_0x3307b3(0x92e)+_0x3307b3(0x7ae)+_0x3307b3(0x951)+_0x3307b3(0x8d4)+_0x3307b3(0x42e)+_0x3307b3(0x673)+_0x3307b3(0x6d0)+_0x3307b3(0x320)+_0x3307b3(0x663)+_0x3307b3(0x879))+(_0x3307b3(0x2a9)+_0x3307b3(0x912)+'\x22sw2-'+'facto'+'r\x22\x20ty'+_0x3307b3(0x355)+_0x3307b3(0x198)+_0x3307b3(0x581)+_0x3307b3(0x52b)+_0x3307b3(0x87b)+_0x3307b3(0xae7)+_0x3307b3(0x902)+_0x3307b3(0x836)+'lue=\x22'+_0x3307b3(0x8aa)+'yle=\x22'+_0x3307b3(0x1a4)+':120p'+'x;acc'+_0x3307b3(0x6fb)+_0x3307b3(0x79d))+_0x5e2156+_0x3307b3(0x6d1),'<span'+'\x20id=\x22'+'sw2-f'+_0x3307b3(0x812)+_0x3307b3(0x7e6)+_0x3307b3(0x613)+'le=\x22c'+_0x3307b3(0x79d)+_0x3307b3(0x1d3)+_0x3307b3(0xa77)+'n-wid'+_0x3307b3(0x195)+_0x3307b3(0x205)+'1.0x<'+'/span'+'>')+_0x4490c7[_0x3307b3(0x977)]+_0x4490c7[_0x3307b3(0x3c5)],_0x4490c7[_0x3307b3(0x556)])+('<pre\x20'+'id=\x22s'+_0x3307b3(0x22f)+'t\x22\x20st'+_0x3307b3(0x649)+'margi'+'n:0;p'+'addin'+_0x3307b3(0x45d)+'x\x2012p'+'x;ove'+_0x3307b3(0x318)+_0x3307b3(0x592)+';flex'+_0x3307b3(0x9a0)+_0x3307b3(0xae3)+'white'+_0x3307b3(0xa8e)+_0x3307b3(0xac4)+'-wrap'+_0x3307b3(0x572)+'-brea'+'k:bre'+_0x3307b3(0x6e8)+_0x3307b3(0x5e3)+'nt:in'+_0x3307b3(0x8ba)+';')+(_0x3307b3(0x5cf)+'eight'+':62vh'+_0x3307b3(0x6f7)+_0x3307b3(0x203)+'rt\x20ye'+_0x3307b3(0x848)+_0x3307b3(0x98c)+_0x3307b3(0x422)+'updat'+'es\x20it'+_0x3307b3(0x172)+_0x3307b3(0x893)+_0x3307b3(0x487)+'ame\x20f'+_0x3307b3(0x52e)+_0x3307b3(0x56e)+'\x20—\x20no'+'\x20cons'+'ole\x20n'+_0x3307b3(0x784)+'.\x0a\x0aIf'+'\x20it\x20s'+_0x3307b3(0x624)+_0x3307b3(0xa0b)+',\x20Tam'+_0x3307b3(0x1d5)+_0x3307b3(0xad3)+'is\x20no'+'t\x20inj'+_0x3307b3(0x281)+'g\x20int'+'o\x20the'+_0x3307b3(0x394)+_0x3307b3(0x7c8)+'gin\x20g'+'ame\x20f'+_0x3307b3(0x5b2)+_0x3307b3(0x7e2)+'>')+_0x4490c7['mfuyN'];var _0x45b793=_0x2c3d7b[_0x3307b3(0x4e6)+_0x3307b3(0x291)+_0x3307b3(0xb41)](_0x3307b3(0x849)+'statu'+'s'),_0x73d088=_0x2c3d7b['query'+_0x3307b3(0x291)+_0x3307b3(0xb41)](_0x3307b3(0x849)+_0x3307b3(0xb5b)),_0x16de24=_0x2c3d7b[_0x3307b3(0x4e6)+_0x3307b3(0x291)+'tor']('#sw2-'+_0x3307b3(0x258)),_0x5dd56e=_0x2c3d7b[_0x3307b3(0x4e6)+_0x3307b3(0x291)+_0x3307b3(0xb41)](_0x4490c7[_0x3307b3(0x66e)]),_0x2eb74c=_0x2c3d7b['query'+'Selec'+_0x3307b3(0xb41)](_0x4490c7['SPjOi']),_0x3fcab1=_0x2c3d7b['query'+_0x3307b3(0x291)+_0x3307b3(0xb41)](_0x3307b3(0x849)+'toggl'+'e'),_0x23a331=_0x2c3d7b['query'+_0x3307b3(0x291)+_0x3307b3(0xb41)]('#sw2-'+_0x3307b3(0x4eb)),_0x425d6e=_0x2c3d7b['query'+'Selec'+_0x3307b3(0xb41)](_0x4490c7[_0x3307b3(0xacd)]),_0x1f118e=_0x2c3d7b['query'+'Selec'+'tor'](_0x4490c7['VxClf']),_0x373869=_0x2c3d7b[_0x3307b3(0x4e6)+_0x3307b3(0x291)+'tor'](_0x3307b3(0x849)+'facto'+'r'),_0x1f91ae=_0x2c3d7b['query'+'Selec'+_0x3307b3(0xb41)](_0x3307b3(0x849)+_0x3307b3(0x5c4)+_0x3307b3(0x709)+'l'),_0x4c7b9c=_0x2c3d7b[_0x3307b3(0x4e6)+'Selec'+_0x3307b3(0xb41)](_0x3307b3(0x849)+_0x3307b3(0x349)),_0x2a444b=null,_0x37df3c=![];function _0xb468de(){var _0xc45c1b=_0x3307b3;if(_0x23a331)_0x23a331[_0xc45c1b(0x8a0)][_0xc45c1b(0x25b)+'ay']=_0x37df3c?'':_0x4490c7[_0xc45c1b(0x7d4)];if(_0x3fcab1)_0x3fcab1['textC'+_0xc45c1b(0x217)+'t']=_0x37df3c?_0x4490c7['ExPZP']:'open';_0x2c3d7b[_0xc45c1b(0x8a0)]['width']=_0x37df3c?_0xc45c1b(0xbab)+'2vw,6'+'20px)':_0x4490c7['ZrFJR'],_0x2c3d7b[_0xc45c1b(0x8a0)]['backg'+'round']=_0x37df3c?_0xc45c1b(0x584)+'1d':'rgba('+'21,12'+',29,.'+'9)';}if(_0x3fcab1)_0x3fcab1['oncli'+'ck']=function(){var _0x1483e5=_0x3307b3;if(_0x1483e5(0x3e7)===_0x4490c7['OSjsM']){var _0xec8500=_0x2219b4[_0x1483e5(0x331)](0x526+0x24f3+-0x2a18,_0x2ff4d7[_0x1483e5(0x7b3)+_0x1483e5(0x76c)]||_0x4af13e[_0x1483e5(0x253)+'entEl'+_0x1483e5(0x59a)]['clien'+_0x1483e5(0x309)+'h']||0x1257+-0x80f*0x2+-0x1*0x239),_0x4acea8=_0x569f27['max'](-0x27*-0x7b+0xe44*0x1+0xb0*-0x30,_0x127d90['inner'+'Heigh'+'t']||_0x55062a['docum'+'entEl'+'ement'][_0x1483e5(0x3cc)+'tHeig'+'ht']||-0xa*0x315+-0x2072*-0x1+-0x1a0);return(_0x2bda3a['SCdIm'](_0x2a1146['cv'][_0x1483e5(0x1a4)],_0xec8500)||_0x2bda3a[_0x1483e5(0x610)](_0x4a3f55['cv'][_0x1483e5(0x8be)+'t'],_0x4acea8))&&(_0x1978d4['cv']['width']=_0xec8500,_0x3b743c['cv'][_0x1483e5(0x8be)+'t']=_0x4acea8),{'w':_0xec8500,'h':_0x4acea8};}else _0x37df3c=!_0x37df3c,_0x4490c7['YGNdK'](_0xb468de);};_0x4490c7[_0x3307b3(0x1b0)](_0xb468de);if(_0x2eb74c)_0x2eb74c['oncli'+'ck']=function(){_0x2b982a(!![]);};if(_0x425d6e)_0x425d6e[_0x3307b3(0x574)+'ck']=function(){var _0x35b407=_0x3307b3;_0x171070('snaps'+_0x35b407(0x513));};var _0x3bcaad=![];function _0x52e2a5(){var _0x153073=_0x3307b3;_0x4490c7['gWkIN'](_0x171070,_0x4490c7['hdHgk'],{'on':_0x3bcaad,'factor':parseFloat(_0x373869[_0x153073(0x534)])||-0x1*0x19e5+-0x82d*-0x1+0x15d*0xd});}if(_0x1f118e)_0x1f118e[_0x3307b3(0x574)+'ck']=function(){var _0x468e7f=_0x3307b3,_0x3ebeeb=(_0x468e7f(0xa8b)+_0x468e7f(0xb25))[_0x468e7f(0x1a9)]('|'),_0x49fa78=-0x1bfd*-0x1+-0xa15+-0x11e8;while(!![]){switch(_0x3ebeeb[_0x49fa78++]){case'0':_0x2bda3a[_0x468e7f(0x845)](_0x52e2a5);continue;case'1':_0x3bcaad=!_0x3bcaad;continue;case'2':_0x1f118e[_0x468e7f(0x8a0)][_0x468e7f(0x844)]=_0x3bcaad?_0x2bda3a[_0x468e7f(0x1d9)]:_0x468e7f(0x2c9)+'f5';continue;case'3':_0x1f118e[_0x468e7f(0x3f1)+_0x468e7f(0x217)+'t']=_0x3bcaad?'Speed'+'\x20ON':_0x2bda3a[_0x468e7f(0x4cd)];continue;case'4':_0x1f118e[_0x468e7f(0x8a0)]['backg'+'round']=_0x3bcaad?_0x5e2156:_0x468e7f(0x955)+_0x468e7f(0xaa2)+'t';continue;}break;}};if(_0x373869)_0x373869['oninp'+'ut']=function(){var _0x367fe5=_0x3307b3;if(_0x1f91ae)_0x1f91ae['textC'+'onten'+'t']=(parseFloat(_0x373869[_0x367fe5(0x534)])||0x207b+-0x1*-0x214a+-0x41c4)['toFix'+'ed'](-0xd2f+-0x20cc+0x2dfc)+'x';_0x52e2a5();};if(_0x5dd56e)_0x5dd56e['oncli'+'ck']=function(){var _0x2e1df7=_0x3307b3,_0x11fa42={'oFjiF':_0x2bda3a[_0x2e1df7(0x3c1)],'kgvdT':_0x2e1df7(0xb0d),'DakFp':function(_0x5b8ddd,_0x123bbb){return _0x5b8ddd+_0x123bbb;},'EOFir':function(_0x47c3c7,_0x4b468c){var _0x16b67b=_0x2e1df7;return _0x2bda3a[_0x16b67b(0x3a6)](_0x47c3c7,_0x4b468c);},'cnlEU':_0x2bda3a['FhHEA'],'UpjEB':_0x2bda3a['yoxTW'],'LhrIk':function(_0x48e901,_0x41f8db){return _0x48e901+_0x41f8db;},'GRxQf':function(_0x2515b3,_0x14d15a){return _0x2515b3+_0x14d15a;},'CWrqc':function(_0x56126e,_0x4f39da){return _0x56126e+_0x4f39da;},'oYuCc':'Heap\x20'+'reads'+'\x20stay'+_0x2e1df7(0x70d)+_0x2e1df7(0xaff)+_0x2e1df7(0x966)+'a\x20gam'+_0x2e1df7(0x52d)+_0x2e1df7(0x43d)+'ith\x20M'+_0x2e1df7(0x51e)+_0x2e1df7(0x32b)+'U8\x20is'+_0x2e1df7(0x635)+'hable'+'.','NXvpk':function(_0x7e503e,_0x5dcc12){return _0x7e503e===_0x5dcc12;}},_0x1206eb=_0x2bda3a[_0x2e1df7(0x804)](_0x2bda3a['ovjUE'](_0x2bda3a['fqHgf'](_0x2bda3a['ZVQqq'](_0x5e09ee,'\x0a'),_0x2a444b?JSON[_0x2e1df7(0x942)+_0x2e1df7(0x4bc)](_0x2a444b,null,0x31*0x6+-0x11a9+0x1084):''),'\x0a'),_0x29d676),_0x3efb51=function(){var _0x27c5ec=_0x2e1df7;if('UUVuE'===_0x11fa42['oFjiF']){if(_0x5dd56e)_0x5dd56e['textC'+_0x27c5ec(0x217)+'t']='Copie'+'d';}else _0x3dba3e['begin'+'Path'](),_0x95388[_0x27c5ec(0x66f)](_0x26fb76,_0x596c8e,(_0x46a36c-(0x1*0x2131+0x63a*-0x4+0x845*-0x1))*_0x6c067b/(-0x1*-0x16e2+-0x32d+-0x13b2),0x1*-0x2303+-0x8*-0x419+0x23b,_0x141c1f['PI']*(-0x13a2+0x1ea8+-0xb04)),_0x5374ae[_0x27c5ec(0xb7f)+'e']();};if(navigator['clipb'+_0x2e1df7(0x15a)]&&navigator[_0x2e1df7(0x36e)+'oard'][_0x2e1df7(0x40b)+_0x2e1df7(0x69b)]){if(_0x2e1df7(0xa1c)===_0x2e1df7(0xa1c))navigator['clipb'+_0x2e1df7(0x15a)][_0x2e1df7(0x40b)+'Text'](_0x1206eb)['then'](_0x3efb51,function(){_0x22a82b();});else try{var _0x58ecf8=_0x9004b7;if(_0x58ecf8&&_0x58ecf8['el'])_0x58ecf8['el']['style']['displ'+'ay']=_0x12f507?'':_0x11fa42['kgvdT'];var _0x2e589d=_0x394be3;if(_0x2e589d&&_0x2e589d['cv'])_0x2e589d['cv'][_0x2e1df7(0x8a0)]['displ'+'ay']=_0x5a7429?'':_0x11fa42[_0x2e1df7(0xb53)];}catch(_0x4abca6){}}else _0x2bda3a[_0x2e1df7(0x626)](_0x22a82b);function _0x22a82b(){var _0x494c41=_0x2e1df7,_0x3d7681=document['creat'+_0x494c41(0x238)+_0x494c41(0x56c)](_0x494c41(0xaeb)+'rea');_0x3d7681[_0x494c41(0x534)]=_0x1206eb;if(!document['body'])return;document[_0x494c41(0x4eb)][_0x494c41(0x4b9)+'dChil'+'d'](_0x3d7681),_0x3d7681[_0x494c41(0x8c8)+'t']();try{if(_0x11fa42[_0x494c41(0x6f8)](_0x494c41(0x9e9),_0x494c41(0x9e9)))document[_0x494c41(0xa19)+_0x494c41(0xb72)+'d']('copy'),_0x3efb51();else{var _0x213c51='';_0x4045c2['hookF'+'irePr'+_0x494c41(0xb9a)]&&(_0x213c51=_0x11fa42[_0x494c41(0x43b)](_0x11fa42[_0x494c41(0x539)](_0x11fa42[_0x494c41(0xab4)]+_0x254f30[_0x494c41(0x3ce)+_0x494c41(0x5c8)+_0x494c41(0xb9a)]['atMs']+_0x11fa42['UpjEB']+_0x1ffa05[_0x494c41(0x3ce)+'irePr'+_0x494c41(0xb9a)]['origi'+'nalFu'+'nc']+('\x20and\x20'+_0x494c41(0xb70)+_0x494c41(0xb44)+_0x494c41(0xb40))+_0x4ca3a9[_0x494c41(0x3ce)+'irePr'+_0x494c41(0xb9a)][_0x494c41(0xb44)+'veGam'+'eAtFi'+'re'],'\x20(sou'+'rce:\x20')+(_0x35ad55[_0x494c41(0x3ce)+_0x494c41(0x5c8)+_0x494c41(0xb9a)]['gameS'+_0x494c41(0x79c)+'AtFir'+'e']||_0x11fa42[_0x494c41(0xb53)]),'),\x20so'+'\x20the\x20'+'refer'+'ence\x20'+_0x494c41(0x32e)+'ed\x20th'+_0x494c41(0x890)+_0x494c41(0x6b5)+_0x494c41(0x42a)+_0x494c41(0x537)+_0x494c41(0x84a)+'ow.')),_0x50bb3d['warni'+'ngs']['push'](_0x11fa42[_0x494c41(0xacb)](_0x11fa42[_0x494c41(0x74d)](_0x11fa42[_0x494c41(0x558)](_0x11fa42['EOFir'](_0x494c41(0x2bd)+_0x494c41(0x82f)+'ance\x20'+_0x494c41(0x42a)+'esolv'+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20',_0x2f81c5['globa'+'ls'][_0x494c41(0x424)+_0x494c41(0x79c)]||_0x11fa42['kgvdT']),_0x494c41(0x64f)),_0x11fa42['oYuCc']),_0x213c51));}}catch(_0x283c18){}_0x3d7681[_0x494c41(0x4b5)+'e']();}};setTimeout(function(){var _0x755e2e=_0x3307b3,_0x1307ae={'BCuUy':function(_0x263697){return _0x4490c7['vquKm'](_0x263697);}};if(_0x4490c7['WLPDS']('aYePQ','XRCdn'))_0x1307ae['BCuUy'](_0x41af3a);else{if(_0x2a444b)return;if(_0x4490c7[_0x755e2e(0x63d)](!_0x45b793,!_0x16de24))return;_0x45b793['textC'+_0x755e2e(0x217)+'t']=_0x755e2e(0xadb)+_0x755e2e(0x402)+_0x755e2e(0x386)+'\x2060s\x20'+_0x755e2e(0x85e)+_0x755e2e(0xb19)+_0x755e2e(0x52a)+_0x755e2e(0x73a)+'?',_0x45b793[_0x755e2e(0x8a0)][_0x755e2e(0x844)]=_0x4490c7[_0x755e2e(0x5f6)],_0x16de24[_0x755e2e(0x3f1)+'onten'+'t']=_0x4490c7[_0x755e2e(0xaed)](_0x4490c7[_0x755e2e(0x3bb)](_0x755e2e(0x952)+'ame\x20f'+_0x755e2e(0x52e)+_0x755e2e(0x6cf)+_0x755e2e(0x9a3)+_0x755e2e(0x813)+_0x755e2e(0x83c)+'e\x20rep'+_0x755e2e(0xa99)+'\x0a'+_0x4490c7['ALyvu']+_0x4490c7[_0x755e2e(0xb65)],_0x4490c7['lZuca'])+(_0x755e2e(0xba5)+'The\x20p'+_0x755e2e(0x715)+'as\x20no'+_0x755e2e(0x7d8)+_0x755e2e(0x47e)+_0x755e2e(0x41f)+_0x755e2e(0x4f7)+'e\x20ins'+_0x755e2e(0x9d7)+'ng.\x0a')+_0x4490c7['NJFTk']+_0x4490c7[_0x755e2e(0x662)],'Reloa'+'d\x20the'+_0x755e2e(0x6ff)+'\x20page'+_0x755e2e(0x597)+_0x755e2e(0x830)+'watch'+_0x755e2e(0x298)+_0x755e2e(0x979)+_0x755e2e(0xad0)+_0x755e2e(0x851));}},0x45eb+0xecc8+-0x4853);var _0x5891f1={'set':function(_0x464815){var _0x5e4f88=_0x3307b3,_0x462e74={'cfkEW':function(_0x122c78,_0x3350d5){return _0x4490c7['JACyQ'](_0x122c78,_0x3350d5);}};_0x2a444b=_0x464815;if(_0x5dd56e)_0x5dd56e[_0x5e4f88(0x8a0)][_0x5e4f88(0x25b)+'ay']='';if(_0x73d088){_0x73d088[_0x5e4f88(0x3f1)+_0x5e4f88(0x217)+'t']='v'+(_0x464815[_0x5e4f88(0x7a2)+'on']||'?');var _0x8dfd96=_0x383cde,_0x270fc2=_0x464815[_0x5e4f88(0x7a2)+'on']||'';_0x73d088['style']['color']=_0x270fc2===_0x8dfd96?_0x5e2156:_0x5e4f88(0xaca)+'74',_0x73d088[_0x5e4f88(0x8a0)]['borde'+_0x5e4f88(0xb07)+'r']=_0x4490c7[_0x5e4f88(0x506)](_0x270fc2,_0x8dfd96)?_0x5e4f88(0x546)+'255,1'+'43,17'+'7,.35'+')':'#ff6e'+'74';}var _0x4d7360=_0x464815[_0x5e4f88(0x8b5)+_0x5e4f88(0x224)]&&_0x464815[_0x5e4f88(0x8b5)+_0x5e4f88(0x224)][_0x5e4f88(0x8ce)+'ntrol'+_0x5e4f88(0x763)],_0x958955=Math[_0x5e4f88(0x50e)]((_0x464815[_0x5e4f88(0x7c9)+_0x5e4f88(0x395)]||-0x6de+-0x18b8+0x1*0x1f96)/(-0x1*0x1c4b+0x1*-0x2386+0x43b9));if(_0x45b793){var _0xe05b00,_0x253523;if(_0x4d7360&&_0x464815[_0x5e4f88(0x5ac)+'y']&&_0x464815[_0x5e4f88(0x5ac)+'y'][_0x5e4f88(0x8ce)+_0x5e4f88(0x7e1)+_0x5e4f88(0x763)])_0xe05b00=_0x4490c7[_0x5e4f88(0x8c6)](_0x5e4f88(0x2b5)+'·\x20',Object[_0x5e4f88(0x4f0)](_0x464815['insta'+'nces'])['lengt'+'h'])+(_0x5e4f88(0x62f)+_0x5e4f88(0x5b3)+'\x20')+_0x958955+'s',_0x253523=_0x4490c7['mEaaS'];else{if(_0x4490c7['GtVot'](_0x464815[_0x5e4f88(0x541)+_0x5e4f88(0x656)+'ed'],-0x8c2+0x9e6+-0x2*0x92))_0xe05b00=_0x5e4f88(0x541)+'\x20arme'+_0x5e4f88(0x6b1)+_0x958955+'s',_0x253523=_0x4490c7['vUPWd'];else{if(_0x464815[_0x5e4f88(0x72b)+_0x5e4f88(0xaa9)])_0xe05b00='metad'+_0x5e4f88(0x37c)+'eady\x20'+'·\x20'+_0x958955+'s',_0x253523='#ffd4'+'8a';else{if(_0x4490c7[_0x5e4f88(0x4b7)](_0x4490c7['iYJQV'],_0x4490c7['xNwOI']))try{return _0x462e74[_0x5e4f88(0x9f2)](_0x52b11e[_0x5e4f88(0xaf7)+'em'](_0xa0d1f6),'1');}catch(_0x3875eb){return![];}else _0xe05b00=_0x4490c7[_0x5e4f88(0x1be)](_0x464815['arm']&&_0x464815[_0x5e4f88(0x419)]['ok']?_0x4490c7[_0x5e4f88(0x869)]:_0x5e4f88(0x7af)+'g\x20·\x20',_0x958955)+'s',_0x253523=_0x5e4f88(0x984)+'8a';}}}_0x45b793[_0x5e4f88(0x3f1)+'onten'+'t']=_0xe05b00,_0x45b793[_0x5e4f88(0x8a0)]['color']=_0x253523;}_0x4c7b9c&&(_0x4c7b9c[_0x5e4f88(0x3f1)+'onten'+'t']=_0x464815[_0x5e4f88(0x372)]&&_0x464815['diff'][_0x5e4f88(0x618)+'h']?'Diff\x20'+_0x5e4f88(0x2ba)+_0x5e4f88(0x3b5)+'t:\x20'+_0x464815[_0x5e4f88(0x372)]['join'](',\x20'):_0x5e4f88(0x9c6)+_0x5e4f88(0x92c)+_0x5e4f88(0x3a8)+_0x5e4f88(0x3f5)+_0x5e4f88(0xb80)+_0x5e4f88(0xb95)+'ting\x20'+_0x5e4f88(0x3a7)+_0x5e4f88(0xa3c)+_0x5e4f88(0x840)+_0x5e4f88(0x35d)+_0x5e4f88(0x8d5)+_0x5e4f88(0x899)+_0x5e4f88(0x35d)+'h.');if(_0x464815[_0x5e4f88(0x26d)]&&_0x1f118e){_0x3bcaad=!!_0x464815[_0x5e4f88(0x26d)]['on'],_0x1f118e['textC'+_0x5e4f88(0x217)+'t']=_0x3bcaad?_0x4490c7['qwkGj']:'Speed'+_0x5e4f88(0x639),_0x1f118e[_0x5e4f88(0x8a0)]['backg'+_0x5e4f88(0x50e)]=_0x3bcaad?_0x5e2156:_0x5e4f88(0x955)+'paren'+'t',_0x1f118e['style'][_0x5e4f88(0x844)]=_0x3bcaad?_0x5e4f88(0x900)+'1b':_0x4490c7[_0x5e4f88(0x6c4)];if(_0x1f91ae&&_0x464815['speed'][_0x5e4f88(0x5c4)+'r']){if(_0x4490c7['GYrZO']('LyaSJ','LyaSJ'))_0x1f91ae[_0x5e4f88(0x3f1)+_0x5e4f88(0x217)+'t']=Number(_0x464815['speed']['facto'+'r'])[_0x5e4f88(0xa39)+'ed'](0x2299+-0x126e+-0x102a)+'x';else{var _0x11dda2=(_0x5e4f88(0x8f3)+_0x5e4f88(0xa62)+_0x5e4f88(0x43f))['split']('|'),_0x289619=0x13d4+0x1*0x566+0x2*-0xc9d;while(!![]){switch(_0x11dda2[_0x289619++]){case'0':_0x4d3dfa[_0x5e4f88(0x8a0)][_0x5e4f88(0x617)+'xt']=_0x2bda3a[_0x5e4f88(0xb04)](_0x2bda3a['ZVQqq'](_0x5e4f88(0x814)+'ion:f'+'ixed;'+_0x5e4f88(0x4f3)+_0x5e4f88(0x215)+'top:1'+'2px;z'+_0x5e4f88(0x5dc)+_0x5e4f88(0xad9)+'74829'+'99;cu'+_0x5e4f88(0x8e8)+_0x5e4f88(0x6ba)+_0x5e4f88(0x3e8)+_0x5e4f88(0x4cc)+'lect:'+'none;',_0x2bda3a['PkHZO'])+_0x37a262,';')+(_0x5e4f88(0x5ec)+'r-rad'+_0x5e4f88(0x1c7)+'99px;'+_0x5e4f88(0x636)+_0x5e4f88(0x992)+_0x5e4f88(0x2e7)+'x;fon'+'t:11p'+'x/1.4'+_0x5e4f88(0x776)+_0x5e4f88(0xbaa)+'ace,C'+_0x5e4f88(0x4ac)+_0x5e4f88(0xb1e)+_0x5e4f88(0xa81)+'ce;');continue;case'1':var _0x75bc84={'GZouh':function(_0x4c1676){return _0x4c1676();}};continue;case'2':_0x4d3dfa['textC'+'onten'+'t']=_0x5e4f88(0x157)+'a';continue;case'3':_0x4d3dfa['id']=_0x2bda3a['pXZVQ'];continue;case'4':_0x5dd147['body']['appen'+_0x5e4f88(0x46f)+'d'](_0x4d3dfa);continue;case'5':var _0x4d3dfa=_0x46d64a[_0x5e4f88(0x965)+_0x5e4f88(0x238)+'ent'](_0x5e4f88(0x28e));continue;case'6':_0x4d3dfa[_0x5e4f88(0x574)+'ck']=function(){_0xf45932(![]),_0x75bc84['GZouh'](_0x2c2935);};continue;}break;}}}}if(_0x16de24){if(_0x4490c7[_0x5e4f88(0x97e)]==='CtBnF')try{if(_0x4490c7['goHkk']!==_0x4490c7['goHkk']){_0x5e0344[_0x5e4f88(0x22d)]=_0x2bda3a['LHIpN'];return;}else _0x16de24[_0x5e4f88(0x3f1)+_0x5e4f88(0x217)+'t']=_0x1f6999(_0x464815);}catch(_0x13850c){_0x16de24['textC'+'onten'+'t']=JSON[_0x5e4f88(0x942)+_0x5e4f88(0x4bc)](_0x464815,null,0x30b*0xc+-0x2*0x4a2+-0x1b3f);}else _0x56f41a=_0x2bda3a['GlDom'](_0x2bda3a[_0x5e4f88(0xb04)]('LIVE\x20'+'·\x20'+_0x2ab5ae[_0x5e4f88(0x4f0)](_0x2c05ee['insta'+'nces'])['lengt'+'h']+('\x20obje'+_0x5e4f88(0x5b3)+'\x20'),_0x19360a),'s'),_0x2785c4='#7ee0'+'a8';}console[_0x5e4f88(0xafe)]('%c[sa'+_0x5e4f88(0x204)+'\x20Skil'+_0x5e4f88(0x4c1)+_0x5e4f88(0x203)+'rt',_0x4490c7['RrDOP'](_0x4490c7[_0x5e4f88(0x4dc)]+_0x5e2156,';font'+'-weig'+_0x5e4f88(0x6aa)+'0'),_0x464815),console[_0x5e4f88(0xafe)](_0x4490c7['CZONx'](_0x4490c7['cCRFE'](_0x4490c7['dwaDC'](_0x4490c7[_0x5e4f88(0xaed)](_0x5e09ee,'\x0a'),JSON[_0x5e4f88(0x942)+_0x5e4f88(0x4bc)](_0x464815,null,-0xf8f*0x1+0x186d+0x8dd*-0x1)),'\x0a'),_0x29d676));}};return _0x2c3d7b[_0x3307b3(0x5f7)+'et'][_0x3307b3(0x441)]='1',_0x2c3d7b['api']=_0x5891f1,_0x5891f1;}function _0x1f6999(_0x4ccf89){var _0x3d3fd9=_0x16065b,_0x227650={'gbMCV':function(_0x5de7e9,_0x5188c0){return _0x4490c7['CPoMi'](_0x5de7e9,_0x5188c0);},'GpnnX':function(_0x6253d3,_0x4ed895){return _0x4490c7['PAdeA'](_0x6253d3,_0x4ed895);},'ohGGU':function(_0x846224,_0x121974){return _0x846224<_0x121974;},'SsPlb':function(_0x48ede,_0x48e126){return _0x4490c7['njURH'](_0x48ede,_0x48e126);},'nauky':function(_0x56ca8e,_0x5425f2){return _0x4490c7['MNUwz'](_0x56ca8e,_0x5425f2);},'VwvDJ':function(_0x5a98f9,_0xc20806){return _0x5a98f9+_0xc20806;},'JTepP':_0x4490c7[_0x3d3fd9(0x5d8)],'OvfAn':_0x4490c7['rrAgA'],'TzCde':function(_0x571a1e){return _0x4490c7['YGNdK'](_0x571a1e);}},_0xe94b42=[];_0xe94b42[_0x3d3fd9(0xa01)](_0x4490c7['NQffN'](_0x4490c7['CToKf'],_0x4ccf89[_0x3d3fd9(0x7e4)]||'?')+_0x3d3fd9(0xa28)+Math[_0x3d3fd9(0x50e)](_0x4490c7['PxWhJ'](_0x4ccf89['elaps'+'edMs']||-0x179f*0x1+-0x1*-0x1a4d+-0x2ae,-0x1*0x195b+-0x1d04+-0x3a47*-0x1))+'s)'),_0xe94b42[_0x3d3fd9(0xa01)](_0x4490c7['mPYEB'](_0x4490c7['amPtL'](_0x4490c7['cCRFE']('uwmk\x20'+_0x3d3fd9(0x2fd)+(_0x4ccf89['uwmk']?_0x4490c7[_0x3d3fd9(0x898)]:'no'),_0x3d3fd9(0x5cb)+'ntext'+'\x20'),_0x4ccf89[_0x3d3fd9(0x7e0)+'pCont'+'ext']?_0x4490c7['hEwhV']:'no'),'\x20\x20\x20ty'+_0x3d3fd9(0x540))+(_0x4490c7[_0x3d3fd9(0x5d7)](_0x4ccf89[_0x3d3fd9(0x50d)+'ount'],null)?_0x4ccf89['typeC'+_0x3d3fd9(0x3e6)]:'?')),_0xe94b42['push'](_0x4490c7[_0x3d3fd9(0xa09)](_0x4490c7[_0x3d3fd9(0x55e)](_0x4490c7[_0x3d3fd9(0x272)],_0x4ccf89['hooks'+_0x3d3fd9(0x656)+'ed'])+'/',_0x4ccf89['hooks'+_0x3d3fd9(0xac5)])+(_0x3d3fd9(0x18e)+_0x3d3fd9(0x648))),_0xe94b42[_0x3d3fd9(0xa01)]('');var _0x1292f4=_0x4ccf89[_0x3d3fd9(0x8b5)+_0x3d3fd9(0x224)]||{},_0x443651=Object[_0x3d3fd9(0x4f0)](_0x1292f4);!_0x443651[_0x3d3fd9(0x618)+'h']&&(_0xe94b42[_0x3d3fd9(0xa01)]('no\x20li'+'ve\x20ob'+'jects'+_0x3d3fd9(0x358)+'ured\x20'+'yet.'),_0xe94b42[_0x3d3fd9(0xa01)](''),_0xe94b42['push'](_0x4490c7[_0x3d3fd9(0x9d8)]),_0xe94b42[_0x3d3fd9(0xa01)](_0x3d3fd9(0x59e)+'date\x20'+_0x3d3fd9(0x187)+'et,\x20o'+_0x3d3fd9(0x7f5)+_0x3d3fd9(0x25a)+_0x3d3fd9(0x9f1)+_0x3d3fd9(0xb5d)+_0x3d3fd9(0x2ad)+'atch.'));for(var _0x584142=-0x1*0xc7+0x1075*0x1+-0xfae*0x1;_0x584142<_0x443651[_0x3d3fd9(0x618)+'h'];_0x584142++){if(_0x4490c7['TGpeP'](_0x4490c7['gvGLD'],'NrxbV')){var _0x4b3ded={'tChFo':function(_0x42e4e1,_0x578db5){var _0x3ff6ae=_0x3d3fd9;return _0x4490c7[_0x3ff6ae(0xb8c)](_0x42e4e1,_0x578db5);}},_0x3546c4=_0x58da8e(_0x4490c7[_0x3d3fd9(0x9aa)],_0x3d3fd9(0x9e2)+_0x3d3fd9(0xb1f)),_0x23bc9e=_0x1a4677[_0x3d3fd9(0x965)+_0x3d3fd9(0x238)+_0x3d3fd9(0x56c)](_0x3d3fd9(0xb89));_0x23bc9e['type']=_0x4490c7[_0x3d3fd9(0x8a3)],_0x23bc9e[_0x3d3fd9(0x6ed)+'Name']=_0x4490c7[_0x3d3fd9(0x686)],_0x23bc9e['min']=_0x4490c7['rCDrw'](_0x1fca3e,_0x36c21b),_0x23bc9e['max']=_0x53f6e0(_0x104336),_0x23bc9e['step']=_0x4490c7['yJfJm'](_0x35c007,_0x3c12bb);var _0x586cbf=_0x53fc24(_0x4490c7['QcIEh'],'sk-va'+'l'),_0x4a15ca=function(){var _0x20a5d7=_0x3d3fd9,_0x6142cc=('4|2|1'+'|0|3')[_0x20a5d7(0x1a9)]('|'),_0xcec56d=0x1*0xe43+0x1*-0x1ed+-0x2*0x62b;while(!![]){switch(_0x6142cc[_0xcec56d++]){case'0':var _0x18657a=_0x227650[_0x20a5d7(0x55d)](_0x227650['GpnnX'](_0x3432ad,_0x2199c6),_0x15dbe0-_0x582db0)*(-0x1*0x1dda+0x1*0xe20+0x101e*0x1);continue;case'1':_0x586cbf[_0x20a5d7(0x3f1)+_0x20a5d7(0x217)+'t']=(_0x227650[_0x20a5d7(0x808)](_0x1c3ce8,-0x13*0x191+-0x114c+0x2f10)?_0x3432ad[_0x20a5d7(0xa39)+'ed'](-0x103b*0x1+-0x23be*-0x1+-0x1382):_0x227650['SsPlb'](_0x27cc69,_0x196a4e[_0x20a5d7(0x50e)](_0x3432ad)))+(_0x23bc9e['datas'+'et'][_0x20a5d7(0x51b)]||'');continue;case'2':_0x23bc9e[_0x20a5d7(0x534)]=_0x227650[_0x20a5d7(0x669)](_0x5029f6,_0x3432ad);continue;case'3':_0x23bc9e[_0x20a5d7(0x8a0)][_0x20a5d7(0x568)+_0x20a5d7(0x8b3)+'y']('--p',_0x227650['VwvDJ'](_0x18657a,'%'));continue;case'4':var _0x3432ad=_0x3700e8();continue;}break;}};return _0x23bc9e[_0x3d3fd9(0x325)+'ut']=function(){var _0x231d4c=_0x3d3fd9;_0x4ad8b0(_0x4b3ded['tChFo'](_0x26e4ac,_0x23bc9e[_0x231d4c(0x534)])||_0x20e68d),_0x4a15ca();},_0x3546c4[_0x3d3fd9(0x4b9)+_0x3d3fd9(0x46f)+'d'](_0x23bc9e),_0x3546c4[_0x3d3fd9(0x4b9)+_0x3d3fd9(0x46f)+'d'](_0x586cbf),_0x3546c4[_0x3d3fd9(0x1dd)]=_0x4a15ca,_0x3546c4[_0x3d3fd9(0xb89)]=_0x23bc9e,_0x4490c7[_0x3d3fd9(0x1b0)](_0x4a15ca),_0x383843[_0x3d3fd9(0x538)][_0x3d3fd9(0xa01)](_0x4a15ca),_0x3546c4;}else{var _0x5ef0db=_0x443651[_0x584142];_0xe94b42[_0x3d3fd9(0xa01)](_0x5ef0db+_0x3d3fd9(0x1f9)+_0x1292f4[_0x5ef0db]);}}_0xe94b42['push']('');var _0x5f4aab=_0x4ccf89[_0x3d3fd9(0x5ac)+'y']||{},_0x454bfe=Object['keys'](_0x5f4aab);for(var _0x49ba2b=0x5*0x299+-0x1*0x1f70+-0x1*-0x1273;_0x4490c7['cOoft'](_0x49ba2b,_0x454bfe[_0x3d3fd9(0x618)+'h']);_0x49ba2b++){if(_0x4490c7[_0x3d3fd9(0x461)]('lKCUT',_0x3d3fd9(0x454)))_0x215991=!_0x4fdb96,_0x24e706[_0x3d3fd9(0x3f1)+'onten'+'t']=_0x5191a8?'Speed'+_0x3d3fd9(0x5f8):_0x3d3fd9(0x7d0)+'\x20off',_0x4332d9[_0x3d3fd9(0x8a0)]['backg'+_0x3d3fd9(0x50e)]=_0x457f4d?_0x1d56c5:_0x227650['JTepP'],_0xd66045[_0x3d3fd9(0x8a0)]['color']=_0x1a2e2d?_0x227650[_0x3d3fd9(0x672)]:_0x3d3fd9(0x2c9)+'f5',_0x227650['TzCde'](_0x523171);else{var _0x254c46=_0x454bfe[_0x49ba2b],_0x4471d1=_0x5f4aab[_0x254c46];if(!_0x4471d1||!_0x4471d1['lengt'+'h'])continue;_0xe94b42['push'](_0x4490c7[_0x3d3fd9(0x8d2)]+_0x254c46+'\x20'+new Array(Math[_0x3d3fd9(0x331)](0x3ee*0x7+-0x3c7*0x3+-0x1*0x102c,0x1f9a+-0x1623+-0x955-_0x254c46[_0x3d3fd9(0x618)+'h']))['join']('─')),_0xe94b42[_0x3d3fd9(0xa01)](_0x4490c7['LKGdv']);for(var _0x3b36e1=-0x24a1*-0x1+-0x1c45*0x1+-0x85c;_0x4490c7[_0x3d3fd9(0x5c9)](_0x3b36e1,_0x4471d1[_0x3d3fd9(0x618)+'h']);_0x3b36e1++){var _0x524520=_0x4471d1[_0x3b36e1],_0x5ece49=typeof _0x524520['v']===_0x3d3fd9(0x3d9)+'r'?Math[_0x3d3fd9(0x50e)](_0x524520['v']*(0x3*-0x31+0x35*-0x39+0x2*0x824))/(0x8c+0x5b0+-0x254):_0x524520['v'];_0xe94b42[_0x3d3fd9(0xa01)](_0x4490c7[_0x3d3fd9(0x549)](_0x4490c7[_0x3d3fd9(0x3d0)]('\x20\x20'+_0x4490c7[_0x3d3fd9(0x499)]('0x',_0x524520['o']['toStr'+'ing'](-0xd9f+0x2a1+0xb0e))['padEn'+'d'](-0x22d*-0xb+-0x38f+-0x1458)+'\x20'+_0x524520['k'][_0x3d3fd9(0xa06)+'d'](-0x1159+0x99c*0x2+0xd*-0x24)+'\x20'+String(_0x5ece49)[_0x3d3fd9(0xa06)+'d'](-0x1a85+0x1d6*-0x14+0x3f4d),'\x20'),_0x524520[_0x3d3fd9(0x2c3)]||''));}_0xe94b42[_0x3d3fd9(0xa01)]('');}}if(_0x4ccf89[_0x3d3fd9(0x863)+'ngs']&&_0x4ccf89['warni'+'ngs']['lengt'+'h']){_0xe94b42[_0x3d3fd9(0xa01)](_0x3d3fd9(0x863)+'ngs');for(var _0x41dfcb=-0x25c9*-0x1+0xd*-0x53+-0x2192;_0x41dfcb<_0x4ccf89['warni'+'ngs'][_0x3d3fd9(0x618)+'h'];_0x41dfcb++)_0xe94b42[_0x3d3fd9(0xa01)](_0x3d3fd9(0x1d4)+_0x4ccf89['warni'+_0x3d3fd9(0x6ee)][_0x41dfcb]);}return _0xe94b42['join']('\x0a');}window[_0x16065b(0xb86)+_0x16065b(0x835)+_0x16065b(0x6d2)+'r'](_0x16065b(0x158)+'ge',function(_0x212c3c){var _0x4fa2d6=_0x16065b,_0x21d7a9=_0x212c3c[_0x4fa2d6(0x596)];if(!_0x21d7a9||_0x21d7a9[_0x4fa2d6(0x9f8)+'ura']!==_0x466bdc)return;try{if(_0x21d7a9['kind']===_0x4490c7['ktMAL']){_0x4490c7['DqlTf'](_0x17f87a)['set']({'host':_0x21d7a9[_0x4fa2d6(0x7e4)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x21d7a9[_0x4fa2d6(0x63f)]==='repor'+'t')_0x17f87a()[_0x4fa2d6(0x61a)](_0x21d7a9[_0x4fa2d6(0x700)+'t']);}catch(_0x29084c){console['warn'](_0x4fa2d6(0x3ca)+_0x4fa2d6(0x204)+_0x4fa2d6(0x979)+_0x4fa2d6(0xb74)+_0x4fa2d6(0x443)+_0x4fa2d6(0x759),_0x4fa2d6(0x844)+':'+_0x5e2156,_0x29084c);}});function _0x1cc221(){_0x2b982a(!![]);}if(document[_0x16065b(0x4eb)])_0x4490c7[_0x16065b(0x3d2)](_0x1cc221);else document[_0x16065b(0xb86)+_0x16065b(0x835)+'stene'+'r']('DOMCo'+_0x16065b(0x707)+'Loade'+'d',_0x1cc221,{'once':!![]});return;}window[_0x16065b(0x9c8)+_0x16065b(0x69f)+'W__']=window['__SAK'+'URA_S'+_0x16065b(0x46d)]||{'at':Date['now']()};function _0x1ddd1b(_0x14f37d,_0x2bdb29){var _0x4eae16=_0x16065b,_0x2cd871={'__sakura':_0x466bdc,'kind':_0x14f37d};if(_0x2bdb29){for(var _0x17864d in _0x2bdb29)_0x2cd871[_0x17864d]=_0x2bdb29[_0x17864d];}try{if(window['paren'+'t']&&window[_0x4eae16(0xaa2)+'t']!==window)window[_0x4eae16(0xaa2)+'t']['postM'+_0x4eae16(0x78a)+'e'](_0x2cd871,'*');}catch(_0x4608f3){}try{if(window[_0x4eae16(0x502)]&&window['top']!==window)window[_0x4eae16(0x502)][_0x4eae16(0xb8e)+'essag'+'e'](_0x2cd871,'*');}catch(_0x29ac38){}}console[_0x16065b(0xafe)](_0x4490c7[_0x16065b(0xa8d)]+_0x383cde,_0x16065b(0x844)+':'+_0x5e2156+_0x4490c7['goZOY'],{'host':_0x410a83,'href':location['href'],'version':_0x383cde}),_0x4490c7[_0x16065b(0x91c)](_0x1ddd1b,_0x4490c7[_0x16065b(0x74b)],{'host':_0x410a83,'role':_0xbe2c58});var _0x1c2398=window[_0x16065b(0x9c8)+'URA_S'+_0x16065b(0x46d)]&&window['__SAK'+_0x16065b(0x69f)+_0x16065b(0x46d)]['at']||Date['now']();window['addEv'+_0x16065b(0x835)+'stene'+'r'](_0x16065b(0x158)+'ge',function(_0x1221eb){var _0x53757e=_0x16065b,_0x5e6be2={'TkGzx':function(_0x4b40a0,_0x13ffc7){var _0x2bf2ab=_0x4a91;return _0x4490c7[_0x2bf2ab(0x41e)](_0x4b40a0,_0x13ffc7);}};if(_0x4490c7['GYrZO'](_0x53757e(0x694),_0x53757e(0x67c))){var _0x59004d=_0x227774[_0x53757e(0x7b3)+_0x53757e(0x9e5)+'t']||-0x6*-0x57b+-0x25bf+0x7fd;if(_0x59004d<0x2*0x99d+0x45*0x5d+-0x29df)_0x5e6be2[_0x53757e(0x2f6)](_0x1c75be,![]);}else try{var _0x3e6093=_0x1221eb&&_0x1221eb['data'];if(!_0x3e6093||_0x3e6093[_0x53757e(0x9f8)+_0x53757e(0x1e3)]!==_0x466bdc||_0x4490c7[_0x53757e(0x2d9)](_0x3e6093['kind'],_0x53757e(0x218)))return;_0x4490c7[_0x53757e(0x380)](_0x1798f3,_0x3e6093['cmd'],_0x3e6093['arg']);}catch(_0xd67132){}});try{if(_0x4490c7[_0x16065b(0xba4)]!==_0x4490c7['CfLIt']){var _0x5179c3=new BroadcastChannel('sakur'+'a-sw');_0x5179c3[_0x16065b(0x751)+_0x16065b(0x6fa)]=function(_0x4b77a5){var _0x2422b1=_0x16065b,_0x238b31=_0x4b77a5[_0x2422b1(0x596)];if(_0x238b31&&_0x238b31[_0x2422b1(0x9f8)+_0x2422b1(0x1e3)]===_0x466bdc&&_0x238b31[_0x2422b1(0x63f)]==='cmd')_0x4490c7[_0x2422b1(0x380)](_0x1798f3,_0x238b31['cmd'],_0x238b31['arg']);};}else _0xee02d8['textC'+_0x16065b(0x217)+'t']=_0x21bde0>-0x2fe*0xc+-0x1*-0x1405+0xfe3?_0x4490c7[_0x16065b(0x499)](_0x4490c7[_0x16065b(0x47c)](_0x16065b(0x5f3)+_0x16065b(0xa7c),_0x17b3a0)+(_0x5d6ac8?_0x4490c7[_0x16065b(0x680)](_0x4490c7[_0x16065b(0x95d)],_0x64288f)+_0x4490c7['hXWTN']:''),_0x37cd99&&_0x512095['camer'+'a']?'\x20\x20cam'+'\x20'+_0x3f6724['camer'+'aFrom']:_0x4490c7['jKQNZ']):_0x16065b(0xa71)+'emies'+_0x16065b(0x68d)+_0x16065b(0x3bf)+_0x16065b(0xae9)+_0x16065b(0xae5)+(_0x44f647&&_0x357340[_0x16065b(0xa64)+'a']?_0x4975d7[_0x16065b(0xa64)+'aFrom']:'-'),_0x1213e2[_0x16065b(0x8a0)][_0x16065b(0x844)]=_0x4490c7['LYyHM'](_0x16ce86,0x2f5*0x2+0x1*0x11d4+-0x17be)?_0x4490c7[_0x16065b(0x8ef)]:_0x16065b(0x3b8)+'99';}catch(_0x28a9ac){}var _0x2690e8=[];(function _0x5887ef(){var _0x4670c0=_0x16065b,_0x129f7f={'rreNh':function(_0x4628fe,_0x5455fc){var _0x48e6b0=_0x4a91;return _0x4490c7[_0x48e6b0(0x512)](_0x4628fe,_0x5455fc);},'wRFiL':_0x4490c7[_0x4670c0(0x7d4)],'aRTnX':_0x4670c0(0xae4)+'c7','GXczm':'so\x20th'+_0x4670c0(0xb7d)+'ainin'+'g\x20sus'+_0x4670c0(0xa3a)+_0x4670c0(0x73e)+'\x0a\x0a','PmJhG':_0x4670c0(0x2f2)+_0x4670c0(0x6ad)+_0x4670c0(0x4d9)+_0x4670c0(0xb63)+'\x20not\x20'+_0x4670c0(0x9e4)+'ting\x20'+'into\x20'+'the\x20c'+'ross-'+_0x4670c0(0x255)+_0x4670c0(0x361)+_0x4670c0(0xa34),'NntSS':function(_0x372117,_0x30f7bc,_0x42bf6b){var _0x2a23fb=_0x4670c0;return _0x4490c7[_0x2a23fb(0x380)](_0x372117,_0x30f7bc,_0x42bf6b);},'iQmoU':_0x4670c0(0x760)+'hot','YWaMh':_0x4490c7[_0x4670c0(0x6c7)],'OLGGO':_0x4490c7['CRRGg'],'cAXqt':function(_0x149782,_0xb8d3c9){var _0x4c6902=_0x4670c0;return _0x4490c7[_0x4c6902(0x2d9)](_0x149782,_0xb8d3c9);}};if(_0x4490c7[_0x4670c0(0x1dc)]('hEAqA','byWFc')){var _0x25f856=_0x594a62[_0x4670c0(0x2bd)+_0x4670c0(0x8a9)+'dkit']&&_0x35f986[_0x4670c0(0x2bd)+_0x4670c0(0x8a9)+_0x4670c0(0x9c0)][_0x4670c0(0x70f)+'me'];_0x8e6adf['tag']=_0x25f856&&_0x25f856[_0x4670c0(0x9f8)+'uraTa'+'g']||null,_0x5c05fa[_0x4670c0(0x8e7)+'tches']=!!(_0x129f7f[_0x4670c0(0x68a)](_0x25f856,_0x3d9540)&&_0x25f856[_0x4670c0(0x9f8)+_0x4670c0(0xb60)+'g']===_0x296cf6),_0x447c63['runti'+_0x4670c0(0x33b)+'e']=_0x25f856&&_0x25f856['_game']?typeof _0x25f856['_game']:_0x129f7f['wRFiL'],_0x14b81a['plugi'+_0x4670c0(0xb9c)+_0x4670c0(0x2a2)+_0x4670c0(0x31e)+'ted']=!!(_0x368070&&_0x3d72e9['_runt'+'ime']&&_0x2c5a73[_0x4670c0(0xaa1)+'ime']===_0x25f856),_0x1e4c2c['plugi'+'nRunt'+'imeGa'+'me']=_0x3ec568&&_0x16561a[_0x4670c0(0xaa1)+'ime']&&_0x45b5da[_0x4670c0(0xaa1)+_0x4670c0(0xaa6)]['_game']?typeof _0xdb3320[_0x4670c0(0xaa1)+_0x4670c0(0xaa6)][_0x4670c0(0x8ab)]:_0x4670c0(0xb0d);}else{var _0x133794=[_0x4490c7['SHmlz'],_0x4670c0(0x7b1),_0x4490c7[_0x4670c0(0x8d7)],_0x4670c0(0xa30),'debug'];for(var _0xee52cf=0x435*-0x3+0x13*0x1bf+-0x6da*0x3;_0xee52cf<_0x133794[_0x4670c0(0x618)+'h'];_0xee52cf++){(function(_0x3fcc1c){var _0x568416=_0x4670c0,_0x82bfb={'rJazg':function(_0xed98ae,_0x5c3b07){return _0xed98ae||_0x5c3b07;},'qnnQo':_0x129f7f[_0x568416(0x7ac)],'rxhuC':_0x129f7f['GXczm'],'QvQZC':_0x129f7f['PmJhG'],'bApWj':'\x20\x202.\x20'+'The\x20p'+_0x568416(0x715)+_0x568416(0x528)+_0x568416(0x7d8)+_0x568416(0x47e)+'oaded'+'\x20sinc'+_0x568416(0x455)+_0x568416(0x9d7)+_0x568416(0x4a3),'zthSK':_0x568416(0xaab)+'Both\x20'+_0x568416(0x157)+_0x568416(0x7cf)+_0x568416(0x51a)+_0x568416(0x174)+'r.js\x20'+'AND\x20t'+_0x568416(0x99d)+'d\x20dia'+'g\x20scr'+_0x568416(0x29f)+'re\x0a','PowDF':_0x568416(0x3fb)+_0x568416(0x8b5)+_0x568416(0x84e)+'—\x20two'+_0x568416(0xa6f)+_0x568416(0x6df)+_0x568416(0x8e2)+_0x568416(0x47b)+_0x568416(0x866)+_0x568416(0x993)+'Assem'+_0x568416(0x403)+_0x568416(0x1ad)+_0x568416(0x2d4)+'.\x0a\x0a','gVISn':function(_0xd6a972,_0x16d96c,_0x201cf3){return _0x129f7f['NntSS'](_0xd6a972,_0x16d96c,_0x201cf3);},'cJIbz':_0x129f7f['iQmoU'],'BknFW':_0x129f7f['YWaMh'],'Oznoy':'vXFdZ','zZQKr':function(_0x2e9c11,_0x199569){return _0x2e9c11!==_0x199569;},'ueGyB':_0x129f7f[_0x568416(0x1ed)],'HdDNv':_0x568416(0x942)+'g','TJCHX':function(_0xd0bb76,_0x4366cf){return _0xd0bb76===_0x4366cf;}},_0x288678=console[_0x3fcc1c];if(_0x129f7f[_0x568416(0xa75)](typeof _0x288678,_0x568416(0x4da)+'ion'))return;console[_0x3fcc1c]=function(){var _0x2a75dd=_0x568416,_0x4713b2={'ClGzh':function(_0x11c14b,_0x2c4fdc){return _0x11c14b===_0x2c4fdc;},'fvpnf':function(_0x4b48eb,_0x23d0bc,_0x5a6dc2){return _0x82bfb['gVISn'](_0x4b48eb,_0x23d0bc,_0x5a6dc2);},'FOWJk':_0x82bfb[_0x2a75dd(0xadd)],'Nkybu':function(_0x14e464){return _0x14e464();},'PgXoV':function(_0x16b685){return _0x16b685();},'VtICZ':function(_0x3f8a17,_0x1b5150){return _0x3f8a17!==_0x1b5150;},'OAQod':function(_0x57acc4,_0x23cb2d){return _0x57acc4+_0x23cb2d;},'Klmmg':_0x82bfb[_0x2a75dd(0x44d)]};try{if('vXFdZ'!==_0x82bfb['Oznoy']){var _0x4b2aee=(_0x2a75dd(0x6a2)+'|3|4')[_0x2a75dd(0x1a9)]('|'),_0x4e6ccb=0x11*-0x56+0x37*0x1a+0x20;while(!![]){switch(_0x4b2aee[_0x4e6ccb++]){case'0':if(_0x44f54a)return;continue;case'1':_0x2c5e6b[_0x2a75dd(0x3f1)+_0x2a75dd(0x217)+'t']=_0x2a75dd(0xadb)+_0x2a75dd(0x402)+_0x2a75dd(0x386)+_0x2a75dd(0xb3c)+_0x2a75dd(0x85e)+_0x2a75dd(0xb19)+_0x2a75dd(0x52a)+'ected'+'?';continue;case'2':if(_0x82bfb[_0x2a75dd(0x446)](!_0xf5c3ac,!_0x349a7b))return;continue;case'3':_0x20ecb1['style'][_0x2a75dd(0x844)]=_0x82bfb['qnnQo'];continue;case'4':_0x523862[_0x2a75dd(0x3f1)+_0x2a75dd(0x217)+'t']='The\x20g'+_0x2a75dd(0xb88)+_0x2a75dd(0x52e)+_0x2a75dd(0x6cf)+'\x20post'+_0x2a75dd(0x813)+_0x2a75dd(0x83c)+_0x2a75dd(0xa4d)+_0x2a75dd(0xa99)+'\x0a'+(_0x2a75dd(0x665)+'panel'+_0x2a75dd(0x84d)+_0x2a75dd(0x3c0)+'e\x20use'+'rscri'+_0x2a75dd(0x65f)+_0x2a75dd(0x82f)+'alled'+_0x2a75dd(0x830)+_0x2a75dd(0x5b9)+_0x2a75dd(0x819)+_0x2a75dd(0xaf4)+_0x2a75dd(0xb77)+'l,\x0a')+_0x82bfb[_0x2a75dd(0x1ff)]+_0x82bfb[_0x2a75dd(0x791)]+_0x82bfb[_0x2a75dd(0x183)]+_0x82bfb[_0x2a75dd(0x678)]+_0x82bfb['PowDF']+('Reloa'+_0x2a75dd(0x385)+'\x20game'+_0x2a75dd(0x346)+'\x20once'+'\x20and\x20'+'watch'+'\x20this'+_0x2a75dd(0x979)+_0x2a75dd(0xad0)+_0x2a75dd(0x851));continue;}break;}}else{var _0x233d40='';for(var _0x4cf122=-0x3*-0xa0b+-0x1*-0xb09+-0x292a;_0x4cf122<arguments[_0x2a75dd(0x618)+'h'];_0x4cf122++){if(_0x82bfb[_0x2a75dd(0x583)](_0x2a75dd(0xa5f),_0x82bfb[_0x2a75dd(0x260)])){if(_0x4713b2['ClGzh'](_0x501810,'speed')){_0x4713b2[_0x2a75dd(0x2b8)](_0x5ed351,_0x2b0612&&_0x4713b2[_0x2a75dd(0x923)](typeof _0x41a12a['on'],'boole'+'an')?_0xe06589['on']:_0x14cb04['on'],_0x4c948e&&typeof _0x367977[_0x2a75dd(0x5c4)+'r']==='numbe'+'r'?_0xe4891a['facto'+'r']:_0x2cb839[_0x2a75dd(0x5c4)+'r']);return;}if(_0x1a246d!==_0x4713b2[_0x2a75dd(0x175)])return;var _0xb3c757=_0x4713b2[_0x2a75dd(0x2db)](_0x3bd4f7),_0x20107d=_0x1b5157(_0xb3c757),_0x346f33=_0x1612c6();for(var _0x601793 in _0x346f33)_0x20107d[_0x601793]=_0x346f33[_0x601793];if(!_0x3df8d){_0x41da4b=_0x20107d,_0x1d6c70=[],_0x2bea68('repor'+'t',{'report':_0x4713b2[_0x2a75dd(0x9fc)](_0x10ba3d)});return;}_0x2f2026=[];for(var _0x5ef8ee in _0x20107d){var _0x5e1e89=_0x26dd80[_0x5ef8ee],_0x5077c9=_0x20107d[_0x5ef8ee];if(_0x4713b2[_0x2a75dd(0x764)](_0x5e1e89,_0x5077c9))_0x532698['push'](_0x4713b2[_0x2a75dd(0x8c3)](_0x5ef8ee+':\x20'+_0x5e1e89,_0x4713b2[_0x2a75dd(0x4ca)])+_0x5077c9);}_0x538eb9=_0x20107d,_0x1d8ade('repor'+'t',{'report':_0xee542c()});}else{var _0x1d1931=arguments[_0x4cf122];if(typeof _0x1d1931===_0x82bfb['HdDNv'])_0x233d40+=_0x1d1931;else{if(_0x1d1931&&_0x1d1931['messa'+'ge'])_0x233d40+=_0x1d1931[_0x2a75dd(0x158)+'ge'];}}}if(_0x233d40['index'+'Of'](_0x5e09ee)!==-(-0x14ba+-0x1*0x7+0x14c2*0x1))return _0x288678['apply'](console,arguments);if(_0x82bfb[_0x2a75dd(0x583)](_0x233d40[_0x2a75dd(0x305)+'Of']('Unity'+'WebMo'+'dkit'),-(-0x186e+0x1c01+-0x1c9*0x2))){var _0x45d052=_0x233d40[_0x2a75dd(0x868)](0x751+0x1418+0x1b69*-0x1,0x1169*-0x1+0xd+0x1288);if(_0x82bfb[_0x2a75dd(0x1a0)](_0x2690e8[_0x2a75dd(0x305)+'Of'](_0x45d052),-(0x1*-0xb1e+0xbab*-0x2+0x2275))&&_0x2690e8[_0x2a75dd(0x618)+'h']<-0xdf+0x2f*0x9d+-0x1bb8)_0x2690e8['push'](_0x45d052);}}}catch(_0x953436){}return _0x288678['apply'](console,arguments);};}(_0x133794[_0xee52cf]));}}}());var _0x491224={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x331a86=null,_0x2a1ad9=null,_0x22470f=-(0x11b*0x1+-0x14a8+-0x138e*-0x1),_0x1c7a63=null;function _0x35d51a(_0x2f6da4){var _0x324e29=_0x16065b;try{if(!_0x2f6da4)return;var _0x149a82=_0x2f6da4[_0x324e29(0x8b5)+'nce']?_0x2f6da4[_0x324e29(0x8b5)+_0x324e29(0xb56)][_0x324e29(0xab7)+'ts']:_0x2f6da4['expor'+'ts']||null;if(!_0x149a82)return;if(!_0x1c7a63)try{_0x1c7a63=Object[_0x324e29(0x4f0)](_0x149a82)['slice'](-0xa67*0x3+-0xb*0x1d+0x2074,0x25*-0xef+0xa4*0x1d+0x1*0x100f);}catch(_0x3d66c3){}var _0x251467=_0x149a82[_0x324e29(0x6f1)+'y'];_0x251467&&_0x251467[_0x324e29(0xb3f)+'r']&&_0x4490c7[_0x324e29(0x7dd)](_0x251467['buffe'+'r'][_0x324e29(0x655)+_0x324e29(0x746)],0x1f7*-0x8+0x15b9*0x1+-0x601)&&(_0x2a1ad9=_0x251467,_0x22470f=_0x4490c7[_0x324e29(0xa33)](Date[_0x324e29(0x914)](),_0x1c2398));}catch(_0x4de25f){}}function _0x1f58e1(){var _0x27d6f9=_0x16065b,_0x1888d7={'lbRdY':'ufELU','OhWQw':function(_0x80a541,_0x4f27b8){return _0x80a541!==_0x4f27b8;},'OhUxv':_0x4490c7[_0x27d6f9(0x8a4)],'vuLnr':_0x4490c7['zNPdD']};try{if(_0x4490c7[_0x27d6f9(0xa20)](typeof WebAssembly,_0x27d6f9(0x688)+_0x27d6f9(0x67f)))return;var _0x201336=[_0x4490c7[_0x27d6f9(0xa83)],_0x27d6f9(0x8b5)+'ntiat'+_0x27d6f9(0x557)+'aming'];for(var _0x49ad84=0x2500+-0x1f8+0x26*-0xec;_0x49ad84<_0x201336[_0x27d6f9(0x618)+'h'];_0x49ad84++){(function(_0x416737){var _0x452a71=_0x27d6f9,_0x27fc45={'xfsLc':'hNxGo','BuedN':_0x1888d7[_0x452a71(0xa08)],'QuWyz':function(_0x329c03,_0x2d55c4){return _0x329c03===_0x2d55c4;}},_0x5872a1=WebAssembly[_0x416737];if(_0x1888d7['OhWQw'](typeof _0x5872a1,_0x1888d7['OhUxv'])||_0x5872a1[_0x452a71(0x9f8)+_0x452a71(0xb78)+'moryT'+'ap'])return;var _0x599e6f=function(){var _0x3a703d=_0x452a71;if(_0x3a703d(0x2a3)===_0x27fc45[_0x3a703d(0x288)])_0x553cbe[_0x3a703d(0xa01)](_0x448fd0['type']+':\x20'+_0x5e02d7(_0x4bd458&&_0x598aba[_0x3a703d(0x158)+'ge']||_0x42bea3)[_0x3a703d(0x868)](0xfe+0x3aa*-0x7+0x18a8,-0xb28+-0x9f3+0x15bb*0x1));else{var _0x164505=_0x5872a1[_0x3a703d(0x954)](this,arguments);try{if(_0x27fc45['BuedN']!=='SNsPD'){if(_0x164505&&_0x27fc45['QuWyz'](typeof _0x164505['then'],_0x3a703d(0x4da)+'ion'))_0x164505[_0x3a703d(0x752)](_0x35d51a,function(){});else _0x35d51a(_0x164505);}else{if(_0x2f1970[_0x31cbe][_0x3a703d(0x9e3)+'ntWin'+_0x3a703d(0x66c)])_0x3ce7d4[_0x4c9670][_0x3a703d(0x9e3)+'ntWin'+_0x3a703d(0x66c)][_0x3a703d(0xb8e)+_0x3a703d(0x78a)+'e'](_0x1ffc99,'*');}}catch(_0x46bb30){}return _0x164505;}};_0x599e6f[_0x452a71(0x9f8)+_0x452a71(0xb78)+_0x452a71(0x6d3)+'ap']=!![];try{Object[_0x452a71(0xae1)+'eProp'+'erty'](_0x599e6f,_0x1888d7['vuLnr'],{'value':_0x5872a1[_0x452a71(0x26a)],'configurable':!![]});}catch(_0x1f6c95){}WebAssembly[_0x416737]=_0x599e6f;}(_0x201336[_0x49ad84]));}}catch(_0x15a6a5){}}var _0xea7181=null,_0x1427bd=null,_0x39f72e={},_0xd685a=[],_0x44de5c=[],_0x4f49e7=[{'type':'FPSco'+_0x16065b(0x7e1)+'ler','keep':!![]},{'type':_0x4490c7[_0x16065b(0x17d)],'keep':!![]},{'type':'Weapo'+_0x16065b(0x3cb)+_0x16065b(0x711),'keep':![]},{'type':'TDM_G'+'ameMa'+_0x16065b(0x62c),'keep':!![]},{'type':_0x16065b(0x5d4)+'meMan'+'ager','keep':!![]},{'type':_0x4490c7[_0x16065b(0x821)],'keep':!![],'many':!![]},{'type':_0x4490c7[_0x16065b(0x2cb)],'keep':!![],'many':!![]},{'type':_0x4490c7[_0x16065b(0x350)],'keep':!![],'many':!![]},{'type':'Enemy'+_0x16065b(0xa5d),'keep':!![],'many':!![]}],_0x28b24f=['Assem'+'bly-C'+'Sharp'+_0x16065b(0x793),'Assem'+'bly-C'+_0x16065b(0x93c)+'-firs'+'tpass'+_0x16065b(0x793),_0x16065b(0x858)+'cofor'+'ge.De'+_0x16065b(0x5ab)+'ll',_0x4490c7['VDvAv'],_0x16065b(0x563)+_0x16065b(0x693)+'racte'+'rCont'+_0x16065b(0x5e7)+_0x16065b(0x792),_0x16065b(0xa32)+_0x16065b(0x1f3)+'d'];(function _0x2a7a57(){var _0x282ca0=_0x16065b,_0x3537be={'QSsiG':function(_0x40b284,_0x1f1431){return _0x40b284/_0x1f1431;},'tzsHX':function(_0x297bb2,_0x598044){return _0x297bb2*_0x598044;}};try{if(_0x4490c7[_0x282ca0(0x1dc)](_0x282ca0(0x4dd),_0x282ca0(0x4dd))){var _0x4e5e01=window[_0x282ca0(0x2bd)+'WebMo'+_0x282ca0(0x9c0)]&&window[_0x282ca0(0x2bd)+_0x282ca0(0x8a9)+_0x282ca0(0x9c0)][_0x282ca0(0x70f)+'me'];if(!_0x4e5e01||_0x4490c7['eNAMw'](typeof _0x4e5e01[_0x282ca0(0x965)+_0x282ca0(0x34f)+'in'],_0x282ca0(0x4da)+_0x282ca0(0x9c3))){if(_0x4490c7['JACyQ'](_0x282ca0(0x514),'GvVoJ')){_0x491224['error']=_0x4490c7['NauiY'];return;}else{var _0x233cf1=_0x472d39[_0x282ca0(0x70b)+_0x282ca0(0x508)]({'typeName':_0x1747c1[_0x282ca0(0x9e7)],'methodName':_0x282ca0(0x71b)+'e','params':[_0x4490c7['lBmDv'],_0x282ca0(0x36b)],'returnType':_0x51d48c},_0x50ed8e(_0x5d2d41[_0x282ca0(0x9e7)],_0x3515fd[_0x282ca0(0x232)],_0x2189f7[_0x282ca0(0x2ab)]));_0x207c35[_0x282ca0(0xa01)]({'type':_0x522471[_0x282ca0(0x9e7)],'hook':_0x233cf1,'keep':_0x5afda5[_0x282ca0(0x232)]});}}_0x491224[_0x282ca0(0x225)+_0x282ca0(0x2e6)]=!![],_0x1427bd=_0x4e5e01[_0x282ca0(0x965)+_0x282ca0(0x34f)+'in']({'name':'sakur'+_0x282ca0(0x7bf)+_0x282ca0(0x51a)+'z','version':_0x383cde,'referencedAssemblies':_0x28b24f['slice']()}),_0x491224['ok']=!![];try{if(_0x4490c7[_0x282ca0(0x64d)]('fGGRG',_0x4490c7['ZLxCG'])){var _0x4fda0a=window[_0x282ca0(0x2bd)+_0x282ca0(0x8a9)+_0x282ca0(0x9c0)]['Runti'+'me'];_0x4fda0a['__sak'+_0x282ca0(0xb60)+'g']=_0x4490c7['XcCrs'](_0x383cde,':')+Math[_0x282ca0(0x1d8)+'m']()['toStr'+_0x282ca0(0x8bc)](0x1d2f+-0x1844+-0x4c7)[_0x282ca0(0x868)](0x4*-0x869+0xa7*0xd+0x192b,-0x8a6*-0x1+0x59*-0x12+0x2*-0x12d),_0x331a86=_0x4fda0a[_0x282ca0(0x9f8)+_0x282ca0(0xb60)+'g'];}else return _0x3537be['QSsiG'](_0x1f5a9e[_0x282ca0(0x50e)](_0x3537be[_0x282ca0(0x67a)](_0x336138,0x1*-0x288+0x10b*0x15+-0x2b*0x71)),-0x8c2*-0x2+-0x14*-0x190+-0x3060);}catch(_0x5cb3cf){}_0x12d88b(),_0x491224['hooks'+_0x282ca0(0x227)+'tered']=_0xd685a['lengt'+'h'],_0x4490c7[_0x282ca0(0x1b0)](_0x1f58e1),_0x491224['memor'+_0x282ca0(0x75b)]=!![];}else return _0x1a23e6[_0x282ca0(0x2ec)+'e']=_0x383bbe[_0x282ca0(0x2ec)+'e']||_0x282ca0(0x8b5)+'ntiat'+'e().e'+_0x282ca0(0x2f0)+'s.mem'+_0x282ca0(0xa95),new _0x4b749b(_0x5ca52e['buffe'+'r']);}catch(_0x18d552){_0x491224[_0x282ca0(0x22d)]=_0x4490c7[_0x282ca0(0x651)](String,_0x18d552&&_0x18d552['messa'+'ge']||_0x18d552);}}());var _0x3d310c=new Float32Array(-0xafe+-0x97a*-0x1+0x185),_0x53420c=new Int32Array(_0x3d310c['buffe'+'r']);function _0x49d529(_0xf6a391){var _0x50179d=_0x16065b;if(_0x4490c7[_0x50179d(0x461)](_0x4490c7['rUqop'],_0x50179d(0x886)))return _0x3d310c[0x1*-0x7f4+0x136d+-0x1*0xb79]=_0xf6a391,_0x53420c[-0x26d+0x4b1*-0x4+0x1531];else{var _0x66b71e=_0x1fef1f[_0x50179d(0xb64)+_0x50179d(0x70e)+'nce']||_0x27239f[_0x50179d(0xb64)+'Game']||_0x47e9f7[_0x50179d(0x9b6)];if(_0x66b71e)return _0x5e882d['sourc'+'e']=_0x50179d(0x292)+_0x50179d(0x3b4)+'bal',_0x66b71e;}}function _0x7cff6d(_0x2f13f9){var _0x1abaf3=_0x16065b;if('LDfkA'!==_0x1abaf3(0x567))_0x15b1aa(_0x4490c7['BKvtF']);else return _0x53420c[-0x2029+0x1f1e+0x10b]=_0x2f13f9|-0x1055+0x170e+0x1*-0x6b9,_0x3d310c[0x7ea*-0x1+-0x1545+-0x1*-0x1d2f];}var _0x3c996c={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x4d5370(){var _0x58eed5=_0x16065b,_0x2acc23={'WqTMd':function(_0x186915,_0x11171f){return _0x186915+_0x11171f;},'ugHBn':'obfF','bIWRn':function(_0x2ee74f,_0x4920da){var _0x1a8012=_0x4a91;return _0x4490c7[_0x1a8012(0x4b0)](_0x2ee74f,_0x4920da);},'aOXDs':function(_0x2d5b98,_0x423441){return _0x2d5b98^_0x423441;},'fGnlX':function(_0x3d5747,_0x628c60){var _0x35b1c8=_0x4a91;return _0x4490c7[_0x35b1c8(0xab8)](_0x3d5747,_0x628c60);},'lycgD':function(_0x4f5dc9,_0x32f0a0){return _0x4490c7['DbFiP'](_0x4f5dc9,_0x32f0a0);},'pQFIe':function(_0x21d48c,_0x15469a){return _0x21d48c+_0x15469a;},'anuFm':_0x4490c7[_0x58eed5(0x33c)]};if(_0x4490c7['ZjbAU']('FjXwd',_0x4490c7[_0x58eed5(0x32a)]))return _0x496916[_0x58eed5(0xaf9)+'d']++,_0x2deb62[_0x58eed5(0x591)+'rror']=_0x38a15a['lastE'+_0x58eed5(0x2ca)]||_0x2acc23[_0x58eed5(0x8ee)](_0x2acc23[_0x58eed5(0x8ee)](_0x58eed5(0x284)+'ss\x200x',_0x1b09a1['toStr'+_0x58eed5(0x8bc)](-0x998*-0x3+-0x3*0x8e1+-0x29*0xd)),_0x58eed5(0x2b2)+'\x20heap'+'\x20end\x20'+'0x')+_0x3262e2[_0x58eed5(0x655)+'ength'][_0x58eed5(0x6f9)+'ing'](0x3c5*0x3+0x14fe+-0x203d),_0x4fbe67;else{try{if(_0x1427bd&&_0x1427bd['_runt'+_0x58eed5(0xaa6)]){var _0x64d36=_0x1427bd[_0x58eed5(0xaa1)+_0x58eed5(0xaa6)];if(typeof _0x64d36[_0x58eed5(0xb44)+_0x58eed5(0x9a2)+'e']===_0x4490c7[_0x58eed5(0x8a4)]){if(_0x4490c7['vNMMd']===_0x58eed5(0x740)){var _0xe1ee77=_0x64d36['resol'+_0x58eed5(0x9a2)+'e']();if(_0xe1ee77)return _0x3c996c[_0x58eed5(0x2ec)+'e']=_0x58eed5(0x90c)+_0x58eed5(0x632)+_0x58eed5(0x1e6)+_0x58eed5(0x37e)+_0x58eed5(0x712)+'me()',_0xe1ee77;}else{if(_0xfee2e8[_0x58eed5(0xaa2)+'t']&&_0x2d40ec['paren'+'t']!==_0x1b4cfd)_0xac95bd[_0x58eed5(0xaa2)+'t'][_0x58eed5(0xb8e)+'essag'+'e'](_0x18b14b,'*');}}if(_0x64d36[_0x58eed5(0x8ab)])return _0x3c996c['sourc'+'e']=_0x58eed5(0x90c)+_0x58eed5(0x632)+'ntime'+_0x58eed5(0xa40)+'e',_0x64d36[_0x58eed5(0x8ab)];}}catch(_0x2a25d7){}try{var _0x3338bd=window['Unity'+'WebMo'+'dkit']&&window['Unity'+_0x58eed5(0x8a9)+'dkit']['Runti'+'me'];if(_0x3338bd&&typeof _0x3338bd['resol'+_0x58eed5(0x9a2)+'e']===_0x4490c7[_0x58eed5(0x8a4)]){if(_0x4490c7[_0x58eed5(0x7b0)]!==_0x58eed5(0x36a)){var _0x744fa0=_0x3338bd['resol'+_0x58eed5(0x9a2)+'e']();if(_0x744fa0)return _0x3c996c['sourc'+'e']=_0x58eed5(0x70f)+_0x58eed5(0x245)+_0x58eed5(0xb73)+_0x58eed5(0xa41)+')',_0x744fa0;}else{if(_0x5e5d8c===_0x2acc23['ugHBn'])return _0x261d49(_0x394181^_0x304d0c);if(_0x2acc23['bIWRn'](_0x37050f,'obfI'))return _0x2acc23['aOXDs'](_0x451e26,_0x201dd8)|-0x2518+-0x9e3*-0x3+0x76f;return(_0x2acc23[_0x58eed5(0x5fd)](_0x42138a,_0x209067)&0x17c+0x3*-0x785+-0x235*-0xa)!==-0x3*0x185+-0x9a2+0x4bb*0x3?0x23d5*-0x1+0x19dd+0x6f*0x17:-0x1a97+-0x50e+0x1fa5;}}if(_0x3338bd&&_0x3338bd[_0x58eed5(0x8ab)]){if('jCPBK'===_0x4490c7[_0x58eed5(0xa4f)])return _0x3c996c['sourc'+'e']=_0x4490c7[_0x58eed5(0xa1d)],_0x3338bd;else _0x203b1f['warni'+_0x58eed5(0x6ee)][_0x58eed5(0xa01)](_0x2acc23['lycgD'](_0x2acc23['pQFIe'](_0x2acc23[_0x58eed5(0x8ff)](_0x58eed5(0x788)+_0x58eed5(0x392),_0x1724c9[_0x58eed5(0x4f0)](_0x106291[_0x58eed5(0x8b5)+'nces'])['lengt'+'h']),_0x58eed5(0x62f)+_0x58eed5(0x1e5)+_0x58eed5(0xae0)+_0x58eed5(0x4e3)+_0x58eed5(0x431)+'lds.\x20'),_0x72c7dc[_0x58eed5(0x591)+_0x58eed5(0x2ca)]?_0x2acc23[_0x58eed5(0x4f4)]+_0x19d9f4[_0x58eed5(0x591)+'rror']:'No\x20re'+_0x58eed5(0x96a)+_0x58eed5(0x533)+_0x58eed5(0x994)+_0x58eed5(0x817)+_0x58eed5(0x27e)+_0x58eed5(0x767)+'\x20skip'+_0x58eed5(0x41c)+_0x58eed5(0x906)+'e.'));}}catch(_0x2256f2){}try{if(_0x4490c7[_0x58eed5(0x43c)]===_0x4490c7[_0x58eed5(0x20d)])return _0x3cb548[_0x58eed5(0x2ec)+'e']=_0x58eed5(0x292)+_0x58eed5(0x3b4)+_0x58eed5(0xa5c),_0x360567;else{var _0x26a3cb=window[_0x58eed5(0xb64)+_0x58eed5(0x70e)+'nce']||window['unity'+'Game']||window[_0x58eed5(0x9b6)];if(_0x26a3cb)return _0x3c996c['sourc'+'e']=_0x58eed5(0x292)+'w\x20glo'+'bal',_0x26a3cb;}}catch(_0x3b12cf){}try{if(typeof game!=='undef'+_0x58eed5(0x67f)&&game)return _0x3c996c[_0x58eed5(0x2ec)+'e']='bare\x20'+_0x58eed5(0xb70)+'bindi'+'ng',game;}catch(_0x57b502){}try{if(_0x58eed5(0x266)!=='ljRwV')return null;else{var _0x102c6f=Object[_0x58eed5(0x4f0)](window);for(var _0xde1795=-0x2*-0x79f+0x1*-0x22ea+-0x4eb*-0x4;_0xde1795<_0x102c6f[_0x58eed5(0x618)+'h']&&_0xde1795<-0x1*0x16dc+0x7fb+-0x1139*-0x1;_0xde1795++){var _0x2ff9b1=window[_0x102c6f[_0xde1795]];if(_0x2ff9b1&&typeof _0x2ff9b1==='objec'+'t'&&_0x2ff9b1[_0x58eed5(0x9e6)+'e']&&_0x2ff9b1['Modul'+'e'][_0x58eed5(0x55b)+'8']&&_0x2ff9b1[_0x58eed5(0x9e6)+'e'][_0x58eed5(0x55b)+'8']['buffe'+'r'])return _0x3c996c['sourc'+'e']=_0x4490c7['uDfKh'](_0x4490c7[_0x58eed5(0x460)]('windo'+'w.',_0x102c6f[_0xde1795]),_0x4490c7[_0x58eed5(0x211)]),_0x2ff9b1;}}}catch(_0x3abc6d){}return _0x3c996c[_0x58eed5(0x2ec)+'e']=null,null;}}function _0x590c2f(){var _0x31eea8=_0x16065b;if(_0x4490c7['ymAIu']===_0x31eea8(0x18f))_0x38b5c3['sp'][_0x31eea8(0x3f1)+_0x31eea8(0x217)+'t']=_0x4756da['on']?_0x31eea8(0x7d0)+_0x31eea8(0x5f8):_0x4490c7[_0x31eea8(0xafa)],_0x4bf458['sp']['style'][_0x31eea8(0x5bd)+_0x31eea8(0x50e)]=_0x16eabc['on']?_0x53678c:_0x4490c7[_0x31eea8(0x5d8)],_0x48ed49['sp'][_0x31eea8(0x8a0)]['color']=_0x5302b1['on']?_0x31eea8(0x900)+'1b':_0x4490c7['Cjcri'];else{try{if(_0x2a1ad9&&_0x2a1ad9[_0x31eea8(0xb3f)+'r']&&_0x2a1ad9[_0x31eea8(0xb3f)+'r']['byteL'+_0x31eea8(0x746)])return _0x3c996c['sourc'+'e']=_0x3c996c['sourc'+'e']||_0x31eea8(0x8b5)+_0x31eea8(0x7fd)+'e().e'+'xport'+'s.mem'+'ory',new Uint8Array(_0x2a1ad9['buffe'+'r']);}catch(_0x2d6a91){}try{var _0x329e56=_0x4d5370();if(_0x329e56&&_0x329e56['Modul'+'e']&&_0x329e56['Modul'+'e'][_0x31eea8(0x55b)+'8']&&_0x329e56['Modul'+'e']['HEAPU'+'8'][_0x31eea8(0xb3f)+'r'])return _0x329e56['Modul'+'e']['HEAPU'+'8'];}catch(_0x3fb16b){}return null;}}function _0x34dd1c(){var _0x5887f4=_0x16065b,_0x3872=_0x590c2f();if(!_0x3872)return null;try{if(_0x5887f4(0x4c6)==='bdzpK')return new DataView(_0x3872[_0x5887f4(0xb3f)+'r'],_0x3872['byteO'+'ffset'],_0x3872[_0x5887f4(0x655)+_0x5887f4(0x746)]);else{var _0x280df3=_0x5d0b9c[_0x2e1ea],_0x386e12=typeof _0x40397f[_0x280df3];_0xde8b87[_0x280df3]=_0x4490c7[_0x5887f4(0x974)](_0x386e12,'undef'+'ined')?_0x5887f4(0x688)+_0x5887f4(0x67f):_0x386e12;}}catch(_0x235d5d){return null;}}function _0x3f03aa(_0x5ec917,_0x3f9e93){var _0x4b8208=_0x16065b,_0x370733={'iWQkw':function(_0x3d69e9,_0x2b9d91){var _0x1db71a=_0x4a91;return _0x4490c7[_0x1db71a(0x64d)](_0x3d69e9,_0x2b9d91);},'BNtEq':function(_0x38189d,_0x298494){return _0x38189d===_0x298494;},'sCTtL':function(_0x400894,_0x395086){var _0x12d570=_0x4a91;return _0x4490c7[_0x12d570(0x9ef)](_0x400894,_0x395086);},'Qxzcn':_0x4490c7['rrAgA'],'gNiwj':_0x4490c7[_0x4b8208(0x6c4)],'LNNhq':function(_0x2fe1a6,_0x58ef21){return _0x4490c7['yJfJm'](_0x2fe1a6,_0x58ef21);},'kwgFk':function(_0x474b79,_0x4a38a4){return _0x474b79+_0x4a38a4;}},_0x43a54f=_0x34dd1c();if(!_0x43a54f)return _0x3c996c[_0x4b8208(0xaf9)+'d']++,_0x3c996c[_0x4b8208(0x591)+'rror']=_0x3c996c[_0x4b8208(0x591)+_0x4b8208(0x2ca)]||_0x4b8208(0x64b)+_0x4b8208(0x62d)+'-\x20Uni'+'ty\x20in'+'stanc'+'e\x20not'+'\x20reac'+'hable'+'\x20via\x20'+_0x4b8208(0x70f)+_0x4b8208(0x245)+_0x4b8208(0xb73)+'Game('+_0x4b8208(0x71f)+_0x4b8208(0x689)+_0x4b8208(0x324)+_0x4b8208(0x169)+'al',undefined;if(_0x5ec917<-0x260f+-0x1eb9+0x44c8||_0x4490c7[_0x4b8208(0x60d)](_0x5ec917+(0x1*0x1d01+0x21d3+-0x3ed0),_0x43a54f[_0x4b8208(0x655)+_0x4b8208(0x746)])){if(_0x4490c7['rEjCh'](_0x4b8208(0x3a3),_0x4b8208(0x3a3))){var _0xd87921=_0x4721c4['on'];_0x17a8d9['on']=!!_0x23e5ba;_0x3bff74['on']&&!_0xd87921&&(_0x370733[_0x4b8208(0x627)](_0x1b11ed,_0x497dde)||_0x370733[_0x4b8208(0x627)](_0x3bcb0b,null)||_0x370733['BNtEq'](_0x370733[_0x4b8208(0x94e)](_0x1f8224,_0x673477),0x985+-0x12cf+0x94b))&&(_0x5759b2=_0x1442a2);_0x19ae41['facto'+'r']=_0x2bec2b[_0x4b8208(0x63e)](_0x239754[_0x4b8208(0x331)],_0x416cef['max'](_0x4f1e6d[_0x4b8208(0x63e)],_0x39f6a2(_0x2605e7)||0x1f9b+0x1548+-0x34e2));if(!_0x4a4238['on'])_0x2bd279={};var _0x2574f9=_0x33b58a();if(_0x2574f9){_0x2574f9['sp']&&(_0x2574f9['sp'][_0x4b8208(0x3f1)+'onten'+'t']=_0x4ebf15['on']?'Speed'+'\x20ON':'Speed'+_0x4b8208(0x639),_0x2574f9['sp'][_0x4b8208(0x8a0)]['backg'+_0x4b8208(0x50e)]=_0x563bca['on']?_0x22e98f:_0x4b8208(0x955)+'paren'+'t',_0x2574f9['sp']['style'][_0x4b8208(0x844)]=_0x3288c5['on']?_0x370733['Qxzcn']:_0x370733[_0x4b8208(0x62a)]);if(_0x2574f9['fx'])_0x2574f9['fx'][_0x4b8208(0x534)]=_0x370733['LNNhq'](_0x5294b9,_0x175766[_0x4b8208(0x5c4)+'r']);if(_0x2574f9['fv'])_0x2574f9['fv']['textC'+'onten'+'t']=_0x370733['kwgFk'](_0x336264[_0x4b8208(0x5c4)+'r']['toFix'+'ed'](-0x9*-0x289+-0x2349+-0xc79*-0x1),'x');}}else return _0x3c996c['faile'+'d']++,_0x3c996c['lastE'+'rror']=_0x3c996c[_0x4b8208(0x591)+'rror']||_0x4490c7[_0x4b8208(0x294)]('addre'+_0x4b8208(0x953),_0x5ec917['toStr'+'ing'](-0x1*0x1b15+-0x2b*-0x5f+0xb30))+_0x4490c7['jkQqS']+_0x43a54f[_0x4b8208(0x655)+'ength'][_0x4b8208(0x6f9)+_0x4b8208(0x8bc)](0x1d23+-0x1*-0x1f3c+-0x3c4f*0x1),undefined;}try{_0x3c996c['ok']++;switch(_0x3f9e93){case'u8':return _0x43a54f['getUi'+_0x4b8208(0x34a)](_0x5ec917);case'i8':return _0x43a54f['getIn'+'t8'](_0x5ec917);case _0x4490c7[_0x4b8208(0xa51)]:return _0x43a54f['getIn'+'t16'](_0x5ec917,!![]);case _0x4b8208(0x2b1):return _0x43a54f[_0x4b8208(0x2a6)+'nt16'](_0x5ec917,!![]);case'i32':return _0x43a54f['getIn'+_0x4b8208(0x481)](_0x5ec917,!![]);case _0x4b8208(0x53a):return _0x43a54f[_0x4b8208(0x2a6)+_0x4b8208(0xaec)](_0x5ec917,!![]);case _0x4490c7[_0x4b8208(0x85d)]:return _0x43a54f['getFl'+'oat32'](_0x5ec917,!![]);case _0x4b8208(0x806):return _0x43a54f[_0x4b8208(0x72c)+_0x4b8208(0x93e)](_0x5ec917,!![]);case'v2':case'v3':case'v4':return _0x43a54f[_0x4b8208(0x72c)+_0x4b8208(0x832)](_0x5ec917,!![]);default:return _0x43a54f['getIn'+_0x4b8208(0x481)](_0x5ec917,!![]);}}catch(_0x39c02d){if(_0x4490c7['crNha']===_0x4490c7[_0x4b8208(0x28c)])return _0x3c996c[_0x4b8208(0xaf9)+'d']++,_0x3c996c[_0x4b8208(0x591)+'rror']=_0x3c996c[_0x4b8208(0x591)+_0x4b8208(0x2ca)]||_0x4490c7[_0x4b8208(0xac9)](String,_0x39c02d&&_0x39c02d['messa'+'ge']||_0x39c02d)[_0x4b8208(0x868)](-0x321*-0x1+-0x63f+0x31e,-0xbc+0x351*0x1+0x1*-0x21d),undefined;else{var _0x23f923=_0x50daca['Unity'+'WebMo'+'dkit']&&_0x3b6823[_0x4b8208(0x2bd)+_0x4b8208(0x8a9)+_0x4b8208(0x9c0)]['Runti'+'me'];if(_0x23f923&&typeof _0x23f923[_0x4b8208(0xb44)+'veGam'+'e']===_0x4b8208(0x4da)+_0x4b8208(0x9c3)){var _0x52336c=_0x23f923['resol'+'veGam'+'e']();if(_0x52336c)return _0xb8c28c['sourc'+'e']=_0x4b8208(0x70f)+_0x4b8208(0x245)+'solve'+_0x4b8208(0xa41)+')',_0x52336c;}if(_0x23f923&&_0x23f923['_game'])return _0x1dd0f5['sourc'+'e']='Runti'+_0x4b8208(0x5b6)+_0x4b8208(0x3d6),_0x23f923;}}}function _0x25eae8(_0x11a87b,_0x5773cc,_0x37f6cc){var _0x29ede7=_0x16065b,_0x11c552=_0x34dd1c();if(!_0x11c552||_0x11a87b<-0x2352+-0x13*0x169+-0x3e1d*-0x1||_0x11a87b+(0x85d+0x1*0x4b9+-0x7*0x1de)>_0x11c552[_0x29ede7(0x655)+_0x29ede7(0x746)])return![];try{if(_0x4490c7[_0x29ede7(0x958)](_0x29ede7(0x24c),_0x4490c7[_0x29ede7(0x96e)])){switch(_0x5773cc){case'u8':case'i8':_0x11c552[_0x29ede7(0x588)+'nt8'](_0x11a87b,_0x37f6cc&-0x26ef*0x1+0x1a37+-0xdb7*-0x1);break;case _0x4490c7['qiqpN']:case _0x4490c7[_0x29ede7(0x56b)]:_0x11c552['setIn'+'t16'](_0x11a87b,_0x37f6cc|0x1295+0x18da+-0x2b6f,!![]);break;case _0x29ede7(0x36b):case _0x4490c7[_0x29ede7(0x5af)]:_0x11c552[_0x29ede7(0x894)+_0x29ede7(0x481)](_0x11a87b,_0x4490c7[_0x29ede7(0xb1b)](_0x37f6cc,0x186e+0x33b*0x5+0x2895*-0x1),!![]);break;case _0x29ede7(0xb59):_0x11c552['setFl'+'oat32'](_0x11a87b,_0x37f6cc,!![]);break;default:_0x11c552['setIn'+'t32'](_0x11a87b,_0x4490c7[_0x29ede7(0xb1b)](_0x37f6cc,0x1bdc+-0x49*-0x50+-0x32ac),!![]);}return!![];}else return _0x552d5b[-0x241*0x3+0x1de7+-0x1724]=_0xadc5df,_0x512478[0xce8+-0x7de+-0x50a];}catch(_0x426784){return![];}}var _0x413f93={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x4490c7[_0x16065b(0x6fc)]},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x16065b(0x36b)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0xb7e187(_0x4e21ae){var _0x33389f=_0x16065b,_0x4b8dcd='';for(var _0x511a63=0xd*0x109+0x2315+-0x308a;_0x4490c7['WzwXv'](_0x511a63,_0x4e21ae[_0x33389f(0x618)+'h']);_0x511a63++){if(_0x4490c7['ysqVG'](_0x33389f(0x8b8),_0x4490c7['LWBZm'])){_0x16323d[_0x507fe4]='0x'+_0x394f3e[_0x1542b0][_0x33389f(0x1cd)][_0x33389f(0x6f9)+'ing'](-0x5e*-0x15+-0x1600+0xe5a);if(_0x46688c[_0x31f0c5][_0x33389f(0xaba)+'ced'])_0x1e8aca['push'](_0x5c7115);}else{var _0x21cf44=_0x4e21ae[_0x511a63][_0x33389f(0x6f9)+'ing'](-0x507*-0x3+0x129b+-0x10d0*0x2);_0x4b8dcd+=(_0x21cf44['lengt'+'h']<-0x1*-0xbe6+-0x9a7+-0x23d?'0':'')+_0x21cf44;}}return _0x4b8dcd;}function _0x4c25f8(_0x8e5dfe,_0x3ca062,_0x2c3f6c){var _0x267112=_0x16065b,_0x4d8e25=_0x34dd1c();if(!_0x4d8e25){if(_0x4490c7[_0x267112(0x93f)](_0x267112(0x161),'wofQg'))return _0x3c996c['faile'+'d']++,_0x3c996c[_0x267112(0x591)+'rror']=_0x3c996c[_0x267112(0x591)+_0x267112(0x2ca)]||_0x4490c7['BZSie'],null;else{_0x3114cf(_0x52a7cd&&typeof _0x8740ea['on']===_0x267112(0x737)+'an'?_0xfc5ef7['on']:_0x1ad55b['on'],_0x2014d8&&_0x4490c7[_0x267112(0x4b0)](typeof _0x4b2a46[_0x267112(0x5c4)+'r'],_0x267112(0x3d9)+'r')?_0x4252b0[_0x267112(0x5c4)+'r']:_0x525450['facto'+'r']);return;}}if(_0x4490c7[_0x267112(0xa2a)](_0x3ca062,-0x187*0x14+-0x1*-0x692+0x22e*0xb)||_0x4490c7[_0x267112(0x837)](_0x3ca062+_0x2c3f6c,_0x4d8e25[_0x267112(0x655)+_0x267112(0x746)]))return _0x3c996c[_0x267112(0xaf9)+'d']++,_0x3c996c['lastE'+'rror']=_0x3c996c[_0x267112(0x591)+_0x267112(0x2ca)]||'addre'+_0x267112(0x953)+_0x4490c7[_0x267112(0x460)](_0x8e5dfe,_0x3ca062)['toStr'+'ing'](0x203f+0x8*-0x1e1+-0x1127)+('\x20past'+_0x267112(0xa5e)+'\x20end\x20'+'0x')+_0x4d8e25['byteL'+_0x267112(0x746)][_0x267112(0x6f9)+_0x267112(0x8bc)](0x2301+0xc1f*-0x1+-0x16d2*0x1),null;try{var _0x576350=new Uint8Array(_0x2c3f6c);for(var _0x343c2f=-0x1a89*0x1+-0x90a+0x2393;_0x343c2f<_0x2c3f6c;_0x343c2f++)_0x576350[_0x343c2f]=_0x4d8e25[_0x267112(0x2a6)+'nt8'](_0x4490c7['aOGoD'](_0x8e5dfe+_0x3ca062,_0x343c2f));return _0x3c996c['ok']++,_0x576350;}catch(_0x2c9fb6){return _0x3c996c[_0x267112(0xaf9)+'d']++,_0x3c996c[_0x267112(0x591)+_0x267112(0x2ca)]=_0x3c996c['lastE'+_0x267112(0x2ca)]||String(_0x2c9fb6&&_0x2c9fb6[_0x267112(0x158)+'ge']||_0x2c9fb6)[_0x267112(0x868)](0x1765+-0xa*-0xf0+-0x20c5,0xa89*0x1+0x173+0x10c*-0xb),null;}}function _0x418104(_0x44b733,_0x347584,_0x32c125){var _0x5f2e28=_0x16065b,_0x2b6462=_0x4490c7['XoiEN'][_0x5f2e28(0x1a9)]('|'),_0x1ee084=0x14e7+0x36*-0xa3+0xd7b;while(!![]){switch(_0x2b6462[_0x1ee084++]){case'0':var _0x1865a1=_0x4c25f8(_0x44b733,_0x347584,_0x4d7478['size']);continue;case'1':var _0x716dd2=_0x4490c7[_0x5f2e28(0x70c)](_0xe0e437[_0x5f2e28(0x2a6)+_0x5f2e28(0x34a)](_0x4d7478[_0x5f2e28(0x787)+'d']),-0x104e+0x1a8b+-0x83*0x14);continue;case'2':return{'keyAtOffset0':_0x4421cd,'hidden':_0x30c564,'inited':_0x716dd2,'fake':_0x3ca273,'act':_0x4a33a2,'hex':_0xb7e187(_0x1865a1),'alt':_0x32c125===_0x4490c7[_0x5f2e28(0x39b)]?_0x30c564^_0x4490c7[_0x5f2e28(0xb1b)](_0x3ca273,-0xc*0x26+-0x1098+0x15*0xe0):null};case'3':var _0x4d7478=_0x413f93[_0x32c125];continue;case'4':var _0xe0e437=new DataView(_0x1865a1[_0x5f2e28(0xb3f)+'r'],_0x1865a1['byteO'+_0x5f2e28(0x511)],_0x1865a1['byteL'+'ength']);continue;case'5':var _0x4421cd=_0xe0e437['getIn'+_0x5f2e28(0x481)](_0x4d7478['key'],!![]);continue;case'6':if(!_0x1865a1)return null;continue;case'7':var _0x3ca273=_0x32c125===_0x5f2e28(0x1bf)?_0xe0e437[_0x5f2e28(0x72c)+_0x5f2e28(0x832)](_0x4d7478['fake'],!![]):_0x32c125===_0x5f2e28(0x99b)?_0xe0e437['getIn'+'t32'](_0x4d7478[_0x5f2e28(0x717)],!![]):_0xe0e437[_0x5f2e28(0x2a6)+_0x5f2e28(0x34a)](_0x4d7478[_0x5f2e28(0x717)]);continue;case'8':var _0x4a33a2=_0xe0e437['getUi'+_0x5f2e28(0x34a)](_0x4d7478[_0x5f2e28(0x62e)+'e'])&0x1cff+-0xf5*0x22+0x4*0xe3;continue;case'9':var _0x30c564=_0xe0e437[_0x5f2e28(0x705)+'t32'](_0x4d7478[_0x5f2e28(0x9eb)+'n'],!![]);continue;}break;}}function _0x1ef87a(_0x3ca5a6,_0xc5a113,_0x458787){var _0x43c2cc=_0x16065b;if(_0x3ca5a6===_0x4490c7[_0x43c2cc(0x633)])return _0x7cff6d(_0xc5a113^_0x458787);if(_0x4490c7[_0x43c2cc(0x1bb)](_0x3ca5a6,_0x43c2cc(0x99b)))return _0x4490c7['kvdta'](_0xc5a113^_0x458787,-0x17e+-0x49*-0x7+-0x81);return((_0xc5a113^_0x458787)&-0x125+0x1*0x1c1+0x63)!==-0x10d*0x1a+-0x16*-0x8+0x7*0x3ce?0x229*-0x10+0x3*0x2fc+0x199d*0x1:0x1*-0x5f3+0x1f4d*0x1+-0x195a;}function _0xaaaf20(_0x349d8c,_0x8474a2,_0x406023){var _0xcbf7a0=_0x16065b;if(_0x4490c7['TGpeP'](_0x4490c7['KwYgs'],_0x4490c7['KwYgs'])){var _0x489f3b=_0x323e69[_0xcbf7a0(0x8ce)+_0xcbf7a0(0x7e1)+_0xcbf7a0(0x763)];if(!_0x489f3b||!_0x489f3b['ptr'])return null;var _0x4145a9=_0x4490c7[_0xcbf7a0(0x659)](_0x109142,_0x489f3b['ptr'],-0x1*-0xf6d+0x80*0x27+-0x2009,-0x261b+0x2042+0x5dc);return _0x4145a9?_0x4145a9[0xa1b+0x2062*0x1+-0x2a7c]:null;}else{var _0x4d34c7=_0x413f93[_0x406023];if(!_0x4d34c7)return null;var _0x3a7cc4=_0x4490c7[_0xcbf7a0(0xab3)](_0x3f03aa,_0x349d8c+_0x8474a2+_0x4d34c7[_0xcbf7a0(0x87d)],'u8'),_0x2f9771=_0x3f03aa(_0x4490c7['eSWjO'](_0x4490c7[_0xcbf7a0(0x3eb)](_0x349d8c,_0x8474a2),_0x4d34c7['hidde'+'n']),_0xcbf7a0(0x36b)),_0x177342=_0x3f03aa(_0x4490c7['bwmTE'](_0x349d8c+_0x8474a2,_0x4d34c7['inite'+'d']),'u8'),_0x371ea3=_0x3f03aa(_0x349d8c+_0x8474a2+_0x4d34c7['fake'],_0x406023===_0x4490c7['dYUYE']?'f32':_0x406023==='obfI'?_0xcbf7a0(0x36b):'u8'),_0x331d06=_0x4490c7['gWkIN'](_0x3f03aa,_0x349d8c+_0x8474a2+_0x4d34c7['activ'+'e'],'u8');if(_0x4490c7['rWzbR'](_0x3a7cc4,undefined)||_0x2f9771===undefined||_0x371ea3===undefined||_0x4490c7[_0xcbf7a0(0x974)](_0x331d06,undefined))return null;_0x3a7cc4&=-0x13c5+0x12f*0x13+-0x9*0x31,_0x2f9771|=0x2*0x4d2+-0x9f*-0x1a+0x19ca*-0x1,_0x177342=(_0x177342||-0x200+-0x5*-0x1ab+0x21d*-0x3)&0x2*-0x132e+-0xf*0x10d+0x8*0x6c4,_0x331d06&=0x13f*0x4+0xa*0x21b+-0x1a09;var _0x43fb0c;if(_0x406023===_0x4490c7['dYUYE'])_0x43fb0c=_0x7cff6d(_0x2f9771^_0x3a7cc4);else{if(_0x406023===_0x4490c7[_0xcbf7a0(0x39b)])_0x43fb0c=_0x4490c7[_0xcbf7a0(0xab8)](_0x2f9771,_0x3a7cc4)|0x2446+0x25*-0x59+-0xd*0x1cd;else _0x43fb0c=_0x4490c7['jugeo']((_0x2f9771^_0x3a7cc4)&-0x1*-0x26f5+0x16a3+-0x1*0x3c99,0x22e*-0x11+0x213*-0xd+0x25f*0x1b)?0x1668+-0x1*-0x2226+-0x388d:0x1*0x2d1+0x15*0x195+0x1*-0x240a;}return{'real':_0x43fb0c,'fake':_0x371ea3,'act':_0x331d06,'init':_0x177342,'key':_0x3a7cc4,'hidden':_0x2f9771};}}function _0x3d12a0(_0x59eb08,_0x9d0708,_0x169872,_0x47a43a){var _0x153344=_0x16065b,_0x54aee9=_0x4490c7[_0x153344(0x74c)][_0x153344(0x1a9)]('|'),_0x1b9029=-0x1*-0x17fe+0xe3d+-0x263b;while(!![]){switch(_0x54aee9[_0x1b9029++]){case'0':if(_0x169872===_0x4490c7[_0x153344(0x633)])_0x40d5c6=_0x4490c7['Kdxjm'](_0x49d529,_0x47a43a);else{if(_0x169872===_0x4490c7['yigbf'])_0x40d5c6=_0x47a43a|0x2*-0x3cb+0x40+0x2*0x3ab;else _0x40d5c6=(_0x47a43a?-0x1de8+-0x9c1+0x1*0x27aa:0xef+0x1*-0x137b+-0x4a3*-0x4)&-0x98*0x21+0x318*-0x3+0x1ddf;}continue;case'1':var _0x105fa7=_0x23fb2d[_0x153344(0x676)+'pe']==='u8'?_0x39688a['getUi'+_0x153344(0x34a)](_0x23fb2d[_0x153344(0x87d)]):_0x39688a['getIn'+_0x153344(0x481)](_0x23fb2d[_0x153344(0x87d)],!![]);continue;case'2':var _0x40d5c6;continue;case'3':return _0x25eae8(_0x4490c7['WeiTO'](_0x59eb08,_0x9d0708)+_0x23fb2d[_0x153344(0x9eb)+'n'],_0x153344(0x36b),_0x40d5c6^_0x105fa7)&&_0x25eae8(_0x59eb08+_0x9d0708+_0x23fb2d['fake'],_0x169872===_0x4490c7[_0x153344(0x633)]?'f32':_0x4490c7[_0x153344(0xa20)](_0x169872,_0x153344(0x99b))?_0x153344(0x36b):'u8',_0x169872==='obfF'?_0x47a43a:_0x4490c7['vDODl'](_0x169872,_0x153344(0x99b))?_0x4490c7['hXhuN'](_0x47a43a,-0x3e*0x95+-0x14b*-0x1c+-0xa*0x3):_0x47a43a?0x2b2+0x1161+0x7*-0x2de:-0x1*0x2f5+0x692*0x2+-0x21*0x4f)&&_0x4490c7[_0x153344(0x659)](_0x25eae8,_0x4490c7[_0x153344(0x329)](_0x59eb08+_0x9d0708,_0x23fb2d[_0x153344(0x62e)+'e']),'u8',-0x1112+0xb8c+0x2c3*0x2);case'4':var _0x49bfbf=_0x4c25f8(_0x59eb08,_0x9d0708,_0x23fb2d[_0x153344(0x57e)]);continue;case'5':if(!_0x49bfbf)return![];continue;case'6':var _0x23fb2d=_0x413f93[_0x169872];continue;case'7':var _0x39688a=new DataView(_0x49bfbf['buffe'+'r'],_0x49bfbf[_0x153344(0x631)+'ffset'],_0x49bfbf['byteL'+_0x153344(0x746)]);continue;}break;}}var _0x2c37ef={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0xf1affc=0x3*-0xbce+-0x1838+-0x1c1*-0x22+0.03,_0x3e9d2b=0x1632+-0x106*-0x26+-0x3d14,_0x419b36={},_0x316e84=-0x23d6+0x16cb+-0x3*-0x459,_0x29fd06=[],_0xc1c993=[];function _0x5f576d(_0x553789){var _0x493a9b=_0x16065b,_0x395c1e={'bYIdp':_0x4490c7[_0x493a9b(0xac0)],'xWWzR':function(_0x121d31,_0x429c9e){var _0x547464=_0x493a9b;return _0x4490c7[_0x547464(0x330)](_0x121d31,_0x429c9e);},'lqnqM':function(_0x4db2ec,_0x4556c6){return _0x4490c7['onGMu'](_0x4db2ec,_0x4556c6);},'ggPxB':_0x4490c7[_0x493a9b(0x46e)],'LmCgr':function(_0x197feb,_0x596ea1){var _0xb62940=_0x493a9b;return _0x4490c7[_0xb62940(0x850)](_0x197feb,_0x596ea1);},'prQEs':function(_0x8d2e4,_0x13f58b){var _0xd99968=_0x493a9b;return _0x4490c7[_0xd99968(0x339)](_0x8d2e4,_0x13f58b);},'mJbnP':function(_0x4667bc,_0x193e5d){return _0x4667bc===_0x193e5d;},'kDmyd':_0x493a9b(0x7f6)+'\x20','zdZDL':'Photo'+_0x493a9b(0x33a)+_0x493a9b(0xa60)+'nc','JfSMK':function(_0x2dd71d,_0x4d0d49){return _0x2dd71d(_0x4d0d49);},'cJXQH':_0x493a9b(0x382)+'h','mXVux':function(_0x269181,_0x2eaaf1,_0x5a51f4){return _0x269181(_0x2eaaf1,_0x5a51f4);}},_0x16b539=_0x44a8c1[_0x493a9b(0x8ce)+_0x493a9b(0x7e1)+_0x493a9b(0x763)]||[],_0x2240dd=[];_0xc1c993=[],_0x29fd06=[];for(var _0x38d496=0xc1*0x6+0x65*-0x3d+-0x138b*-0x1;_0x4490c7[_0x493a9b(0xb39)](_0x38d496,_0x16b539['lengt'+'h']);_0x38d496++){var _0x411bdb=_0x16b539[_0x38d496][0x197a+-0x984+-0xff6*0x1];if(_0x4490c7['PqXJc'](_0x16b539[_0x38d496][-0x9e+0x19ae+-0x190f],_0x493a9b(0x1bf)))continue;var _0x2ef1ef=_0x418104(_0x553789,_0x411bdb,_0x4490c7[_0x493a9b(0x633)]);if(!_0x2ef1ef||_0x4490c7[_0x493a9b(0x2d9)](_0x2ef1ef[_0x493a9b(0x787)+'d'],0xf45+0x1428+-0x236c))continue;var _0x312a3e=_0x1ef87a(_0x493a9b(0x1bf),_0x2ef1ef['hidde'+'n'],_0x2ef1ef[_0x493a9b(0xad1)+_0x493a9b(0x94b)+'t0']);if(_0x4490c7[_0x493a9b(0x641)](typeof _0x312a3e,'numbe'+'r')||!isFinite(_0x312a3e))continue;var _0x366a18=_0x4490c7['ddXqP'](_0x553789,':')+_0x411bdb,_0x3f6633=_0x419b36[_0x366a18];if(!_0x3f6633||_0x312a3e!==_0x3f6633['lastW'+'ritte'+'n'])_0x3f6633=_0x419b36[_0x366a18]={'base':_0x312a3e,'lastWritten':null};var _0x55fb51=_0x3f6633['base'],_0x5e6488=Math[_0x493a9b(0x49c)](_0x55fb51);if(_0x4490c7['prGAs'](_0x5e6488,0xfc3+-0x1*-0x17f3+-0x30e*0xd+0.0001)||_0x4490c7['LYyHM'](_0x5e6488,-0x24a15+-0x46*-0x3cf+0x2c61b)){_0xc1c993['push']({'o':_0x411bdb,'v':_0x312a3e,'why':'impla'+_0x493a9b(0xb76)+'e'});continue;}_0x2240dd[_0x493a9b(0xa01)]({'o':_0x411bdb,'v':_0x312a3e,'a':_0x5e6488,'base':_0x55fb51,'key':_0x366a18,'st':_0x3f6633});}var _0x5c5693=[];for(var _0x131651=0x52*0x1c+0x1*0x155+-0xa4d;_0x131651<_0x2240dd[_0x493a9b(0x618)+'h'];_0x131651++){var _0x35d525=_0x2240dd[_0x131651]['a'],_0x1eeb42=null;for(var _0x879023=-0x18c+-0x24c+-0x29*-0x18;_0x879023<_0x5c5693[_0x493a9b(0x618)+'h'];_0x879023++){var _0x19493a=_0x4490c7['PDOBq'](_0x5c5693[_0x879023]['mean'],_0x35d525);if(_0x19493a>_0x4490c7[_0x493a9b(0x162)](0x17f2*-0x1+0x1*0xbe0+0xc13,_0xf1affc)&&_0x19493a<_0x4490c7['DTVlA'](0x1ef*-0xe+0x6d*-0x47+0x394e,_0xf1affc)){_0x1eeb42=_0x5c5693[_0x879023];break;}}!_0x1eeb42&&(_0x493a9b(0xb4f)===_0x4490c7['qxiAG']?_0x4490c7[_0x493a9b(0xac9)](_0x18b70e,_0x3d54d7):(_0x1eeb42={'mean':_0x35d525,'members':[]},_0x5c5693[_0x493a9b(0xa01)](_0x1eeb42)));_0x1eeb42['membe'+'rs'][_0x493a9b(0xa01)](_0x2240dd[_0x131651]),_0x1eeb42[_0x493a9b(0x9b2)]=-0x712*0x5+-0x216c+0x44c6;for(var _0x59a62b=-0x1be4+0xb*-0x70+0x20b4;_0x4490c7[_0x493a9b(0x847)](_0x59a62b,_0x1eeb42['membe'+'rs'][_0x493a9b(0x618)+'h']);_0x59a62b++)_0x1eeb42['mean']+=_0x1eeb42[_0x493a9b(0x323)+'rs'][_0x59a62b]['a'];_0x1eeb42['mean']/=_0x1eeb42[_0x493a9b(0x323)+'rs'][_0x493a9b(0x618)+'h'];}var _0x255973=[];for(var _0x5567bb=0x315*-0x8+0x9e8+-0xec*-0x10;_0x4490c7[_0x493a9b(0x5c9)](_0x5567bb,_0x5c5693[_0x493a9b(0x618)+'h']);_0x5567bb++){if(_0x5c5693[_0x5567bb][_0x493a9b(0x323)+'rs']['lengt'+'h']>=_0x3e9d2b)_0x255973[_0x493a9b(0xa01)](_0x5c5693[_0x5567bb]);}if(!_0x255973['lengt'+'h']){_0xc1c993[_0x493a9b(0xa01)]({'o':-(0x2373+0x2041+0x3*-0x1691),'v':0x0,'why':_0x4490c7['SiOVi'](_0x4490c7[_0x493a9b(0xb6e)],_0x3e9d2b)+('\x20Obsc'+_0x493a9b(0xb2f)+_0x493a9b(0x5c2)+_0x493a9b(0x518)+'ed')});return;}var _0x195c3b=_0x255973[0x5*-0x4d+-0x18f*0xd+0x15c4]['mean'];for(var _0x5c2fb3=-0x1ad7+0x1cd7*-0x1+0x37ae;_0x5c2fb3<_0x255973[_0x493a9b(0x618)+'h'];_0x5c2fb3++)if(_0x4490c7['iKzwz'](_0x255973[_0x5c2fb3]['mean'],_0x195c3b))_0x195c3b=_0x255973[_0x5c2fb3]['mean'];var _0xe7225a=_0x4490c7[_0x493a9b(0xb2d)](_0x195c3b,-0x1749+0x17*-0x89+-0x11cc*-0x2+0.5);for(var _0x7c633b=-0x2633+0xd75+-0xc5f*-0x2;_0x4490c7['prGAs'](_0x7c633b,_0x5c5693[_0x493a9b(0x618)+'h']);_0x7c633b++){if(_0x4490c7['KjkrY']!=='DzWGB')return _0x2b5b2b['sourc'+'e']=_0x395c1e[_0x493a9b(0x249)],_0x1856ca;else{if(_0x5c5693[_0x7c633b]['membe'+'rs']['lengt'+'h']>=_0x3e9d2b)continue;for(var _0x3709b2=0xb30+-0x19bf*-0x1+-0x9b*0x3d;_0x4490c7[_0x493a9b(0x3a5)](_0x3709b2,_0x5c5693[_0x7c633b]['membe'+'rs'][_0x493a9b(0x618)+'h']);_0x3709b2++){_0xc1c993['push']({'o':_0x5c5693[_0x7c633b]['membe'+'rs'][_0x3709b2]['o'],'v':_0x5c5693[_0x7c633b]['membe'+'rs'][_0x3709b2]['v'],'why':_0x493a9b(0x83c)+'eton'});}}}for(var _0x14b437=-0x2*0x128a+0x263a+0x2*-0x93;_0x14b437<_0x255973['lengt'+'h'];_0x14b437++){if(_0x493a9b(0x938)!==_0x4490c7['JcXBa']){var _0x18c003={'pKIQF':function(_0x2718a5,_0x28e637){return _0x395c1e['xWWzR'](_0x2718a5,_0x28e637);}},_0x327f14=_0x79d6d0[_0x309db4]['datas'+'et']['k'],_0x28b862='';if(_0x395c1e[_0x493a9b(0x5d6)](_0x327f14,_0x395c1e['ggPxB']))_0x28b862=_0x494d4f?_0x24d2b4[_0x493a9b(0x7a2)+'on']:'-';else{if(_0x395c1e['LmCgr'](_0x327f14,_0x493a9b(0x5a6)+_0x493a9b(0x660)+_0x493a9b(0x2ff)+_0x493a9b(0x7c0)))_0x28b862=_0x387bbb?_0x395c1e['prQEs'](_0x37ffce[_0x493a9b(0x541)+'Appli'+'ed']+_0x493a9b(0xa29),_0x26d996['hooks'+_0x493a9b(0x227)+_0x493a9b(0x7c0)+'AtArm']):'-';else{if(_0x395c1e[_0x493a9b(0x65b)](_0x327f14,'from\x20'+'insta'+_0x493a9b(0x7fd)+'e()'))_0x28b862=_0x2acb67&&_0x35aae7['wasmM'+_0x493a9b(0x822)]&&_0x40cc96[_0x493a9b(0x287)+'emory'][_0x493a9b(0x788)+'red']?_0xe3ee3d[_0x493a9b(0x50e)](_0x89fa9[_0x493a9b(0x287)+_0x493a9b(0x822)][_0x493a9b(0x168)]/(0x19f1d2+0x24b86*0x4+-0x2*0x98ff5))+_0x395c1e['kDmyd']+_0x2d4475[_0x493a9b(0x287)+_0x493a9b(0x822)]['atMs']+'ms':'-';else{if(_0x395c1e[_0x493a9b(0x5d6)](_0x327f14,_0x395c1e[_0x493a9b(0x9b7)]))_0x28b862=_0x28cbd1&&_0x2bf565[_0x493a9b(0x451)]?_0x52a907(_0x301c7d['esp']['playe'+'rCoun'+'t']):'-';else{if(_0x327f14===_0x493a9b(0x9cf)+_0x493a9b(0x58f)+_0x493a9b(0x9b4)+'u')_0x28b862=_0x3b2ba8&&_0x5014f6[_0x493a9b(0x451)]?_0x395c1e['JfSMK'](_0x5414a3,_0x5dc6a2[_0x493a9b(0x451)][_0x493a9b(0x306)+_0x493a9b(0xaf3)]):'-';else{if(_0x327f14==='off\x20t'+_0x493a9b(0x60f)+_0x493a9b(0x317)+_0x493a9b(0x62c))_0x28b862=_0x349a64&&_0x1e63d7['esp']&&_0x422508[_0x493a9b(0x451)]['camer'+'a']?_0x395c1e['prQEs'](_0x14f1f0[_0x493a9b(0x451)][_0x493a9b(0xa64)+'a'],'\x20(')+_0x18b333[_0x493a9b(0x451)]['camer'+_0x493a9b(0x234)]+')':'-';else{if(_0x327f14===_0x493a9b(0x8ce)+_0x493a9b(0x7e1)+'ler+0'+_0x493a9b(0x4f1))_0x28b862=_0x113f25&&_0x1c0093[_0x493a9b(0x6b9)]&&_0x45e755[_0x493a9b(0x6b9)]['feet']?_0x45db65[_0x493a9b(0x6b9)]['feet']['map'](function(_0x15bab9){var _0x4f1bb8=_0x493a9b;return _0x10a85c[_0x4f1bb8(0x50e)](_0x15bab9*(0x2b*-0x10+-0xd*0x222+-0x1*-0x1ece))/(-0x1*-0x477+-0x957+0x544);})['join']('\x20\x20'):'-';else{if(_0x327f14===_0x493a9b(0xa61)+'8')_0x28b862=_0x441c61&&_0x4d6500[_0x493a9b(0x6b9)]&&_0xaa1d1[_0x493a9b(0x6b9)]['eye']?_0x1d681a[_0x493a9b(0x6b9)][_0x493a9b(0x586)][_0x493a9b(0x49b)](function(_0x410d5b){var _0x58d5ba=_0x493a9b;return _0x18c003[_0x58d5ba(0xab6)](_0x58e039[_0x58d5ba(0x50e)](_0x410d5b*(0x3*-0x383+0x16d1+-0xbe4)),-0x1ab*-0x4+-0x3*0x7ed+-0x117f*-0x1);})[_0x493a9b(0x895)]('\x20\x20'):'-';else{var _0x2ec24a=_0x327f14[_0x493a9b(0x1a9)]('+');_0x28b862=_0x14e677(_0x239fab,_0x2ec24a[0xe38+-0x2243*-0x1+0x563*-0x9]['index'+'Of'](_0x395c1e['cJXQH'])===0x2701+-0x1*-0x1ba0+-0x42a1?_0x493a9b(0x382)+'hScri'+'pt':_0x493a9b(0x8ce)+'ntrol'+_0x493a9b(0x763),_0x395c1e[_0x493a9b(0x53d)](_0x4be42e,_0x2ec24a[-0x25b2+0x169*-0x10+0x3c43*0x1],-0x235b*0x1+-0x1fc6*-0x1+0x3a5));}}}}}}}}if(_0x28b862!==_0x300fab[_0x41ffe7][_0x493a9b(0x3f1)+_0x493a9b(0x217)+'t'])_0x574d54[_0xb25d41]['textC'+_0x493a9b(0x217)+'t']=_0x28b862;}else{var _0x57596f=_0x255973[_0x14b437]['membe'+'rs'];for(var _0x1f5ad8=0xe3*0x2b+0x5*0x4b2+-0x3d9b;_0x1f5ad8<_0x57596f[_0x493a9b(0x618)+'h'];_0x1f5ad8++){var _0x26f237=_0x57596f[_0x1f5ad8];if(_0x26f237['a']<_0xe7225a){_0xc1c993[_0x493a9b(0xa01)]({'o':_0x26f237['o'],'v':_0x26f237['v'],'why':_0x493a9b(0x6ea)+_0x493a9b(0x4e9)+'r\x20'+_0xe7225a['toFix'+'ed'](0xbb*0x1c+0x234e+-0x37c*0x10)});continue;}var _0x3141f1=_0x4490c7[_0x493a9b(0xb2d)](_0x26f237['base'],_0x2c37ef[_0x493a9b(0x5c4)+'r']);_0x4490c7['mLNwD'](_0x3d12a0,_0x553789,_0x26f237['o'],'obfF',_0x3141f1)&&(_0x26f237['st'][_0x493a9b(0x278)+_0x493a9b(0x46a)+'n']=Math['froun'+'d'](_0x3141f1),_0x316e84++,_0x29fd06['push']('0x'+_0x26f237['o'][_0x493a9b(0x6f9)+'ing'](0x2632*-0x1+-0x2452*-0x1+-0x1f*-0x10)));}}}}var _0x44a8c1={'FPScontroller':[[-0x1*-0x12ac+-0x1*-0xa55+-0x1cf1,'obfF'],[-0x778+-0x1*0x265c+0x2dfc,_0x4490c7['dYUYE']],[0x1afa+0x1ae4+-0x359e,_0x4490c7[_0x16065b(0x633)]],[-0x1d7*-0x9+0x1215+0x5*-0x6dc,_0x16065b(0x1bf)],[-0x15*0x6b+-0x1*0x22d3+0x2c0a,_0x4490c7[_0x16065b(0x633)]],[0x1e18+0x2537+-0x42c7,'obfF'],[-0x31*0xc9+0x97*-0x1+0xa*0x3f8,_0x16065b(0x1bf)],[0xeb3+0x10a0+-0x1e9b,_0x4490c7[_0x16065b(0x91b)]],[-0x1*0x20c5+-0x9a5*0x3+0x3e78,_0x4490c7[_0x16065b(0x633)]],[0x1cb6+-0x2ef+-0x18eb*0x1,_0x4490c7[_0x16065b(0x6fc)]],[-0x50a*0x1+-0x65*-0x61+-0x2f1*0xb,'v3'],[-0x1*0x11ca+-0x2119+0x33cf,'u8'],[-0xf2e+0xa*0x27b+-0x8b0,_0x4490c7[_0x16065b(0x633)]],[-0x1bb0*0x1+-0x1*-0x6f4+0x15c4,_0x16065b(0x36b)],[-0x202d+0x1215+0x13*0xcc,'u8'],[-0x3d*0x2+-0x1b42+0x26*0xc2,_0x16065b(0x36b)],[-0x9*-0x19c+0x1*-0x1a70+0xd08,'u8'],[0xe3*-0x6+0x26ab*-0x1+0x2d12,'u8'],[-0x54+0x17b1+-0x1641,_0x16065b(0x1bf)],[0x15d1*0x1+-0xcd8*0x2+0x1b1*0x3,_0x4490c7[_0x16065b(0x633)]],[-0x1db3+-0x2228+0x503*0xd,_0x16065b(0xb59)],[-0x67*0x29+-0x109*0xe+0x204d,_0x16065b(0xb59)],[-0x2414+0x1410+-0x5*-0x378,'v3'],[0x1b32+0xd60+-0x2732,'v3'],[0x2373+0x1ac6+-0x5*0xc29,_0x16065b(0xb59)],[0xfa9*0x2+0x9d8+-0x27ba,_0x4490c7[_0x16065b(0x85d)]],[0x206c+-0x2f1*0x7+-0xa4d,'u8'],[-0x2452+0x71*0x4f+0x2ff,_0x16065b(0xb59)],[-0x15fe+0x2553+-0x1*0xdbd,'v3'],[0x1*-0x926+-0x21ff+0x2cc9,'u8'],[-0x46f+-0x5da+0xbfd,_0x4490c7[_0x16065b(0x85d)]],[0x1*-0x6be+-0x143*-0xa+-0x13*0x38,_0x16065b(0xb59)],[0x11*-0x112+0x8ce+-0x59*-0x20,'u8'],[0x1080+-0xc8c*0x2+0x1*0xa55,'u8'],[0x1c*0x14f+0x1*-0x15eb+-0x1*0xcf9,_0x16065b(0x1bf)],[-0x6e1+-0xfd5+0x188e,_0x16065b(0xb59)],[-0xf9e+0x2bd*-0xd+-0x11b1*-0x3,'u8'],[0xf4c+0x2b3*-0xa+0xd92,_0x4490c7[_0x16065b(0x633)]],[-0xe62+-0x259f+-0x29*-0x151,'v3'],[-0x1541*0x1+-0x1279*-0x1+-0x10*-0x4d,_0x16065b(0x3f4)],[0x2*-0x12ff+-0x1980+0x4196,'f32'],[-0x85*0x34+-0x897+0x25b7,_0x4490c7[_0x16065b(0x85d)]],[0x1dc1+-0x1*-0x18e1+0x57*-0x9a,_0x16065b(0xb59)],[-0x25*-0x102+-0x2f0*-0xd+-0x492a,_0x4490c7[_0x16065b(0x85d)]],[-0xb93*-0x1+-0x1a74+0x1*0x1135,_0x16065b(0xb59)],[-0x34*0x61+-0xd*-0x1b7+-0x3f,_0x4490c7[_0x16065b(0x85d)]],[-0xbb8+0x22*0xef+-0x11aa,'u8'],[0x16b5+-0x11*-0x21b+-0x3823,'u8'],[0xe71*-0x2+-0x4*0x920+0x43c0,'u8'],[-0x4e*-0xa+0xd5b+-0xe07,_0x16065b(0xb59)],[-0x391+0x1ed6+-0x18e1,'u8'],[-0x1d8*0xd+0x1bde+-0x181,'u8'],[-0x5*-0x265+-0x998+0x7,_0x16065b(0xb59)],[0x1f93+0xffe+0x2d25*-0x1,_0x16065b(0xb59)],[0xc*0xd5+-0x1*0x6bb+-0x13*0xb,_0x16065b(0xb59)],[0x1*0x51b+-0x1*0xa9f+0x7f8,_0x4490c7['sAIdJ']],[-0x905*0x1+0xe9*-0x29+0x30ce,_0x16065b(0xb59)],[0xc9*-0xa+-0x4de+-0x1*-0xf34,_0x16065b(0xb59)],[-0x10*0xd+0x139+-0x1*-0x217,_0x16065b(0xb59)],[-0x53*0x1e+0x23a2+-0x1764,'v3'],[-0x1*0xb2d+0x1dd6+-0x17*0xb3,'u8'],[0x10b9+0x2*0x354+0x139*-0x11,'v3'],[-0x1a42+-0x1*0x1ad5+-0x1*-0x37bb,_0x4490c7[_0x16065b(0x85d)]],[-0xbd9+-0x1a8c+0x2911*0x1,'v3'],[0xa2e+0x1443+-0x1bb9,'f32'],[-0x1d21+0xea4*0x2+0x1*0x295,_0x16065b(0xb59)],[0x56*0x3+-0xf05+0x10c3,_0x16065b(0xb59)],[0x15db+0x1578*-0x1+0x261,'u8'],[0xc0b*-0x3+0x2*0x3b0+0x1f86,'u8'],[0x14dd+0x678+-0x3*0x82f,'f32'],[0xebd+0x19a9+0x12c5*-0x2,_0x16065b(0xb59)],[-0x1*0x3e7+-0x173d+0x1e08,'v3'],[-0x1609*0x1+0x4f2*-0x3+0x27cf,'v3'],[-0x1375+-0xb3c+0x21ad,_0x4490c7[_0x16065b(0x85d)]],[0x2fc*-0xd+-0x221e+0x4bea,_0x4490c7[_0x16065b(0x85d)]],[0x1008+0x2*0xde7+-0x1469*0x2,_0x16065b(0xb59)],[-0x8c5+-0x15ad+0x5*0x6b2,'f32'],[0x1e92+0x1f66+-0x3aec,'v3'],[-0x18a2+0xc53+0xf67,'u8'],[-0x11a1+-0x95*0x1+0x1552,'v3'],[-0xe5c+-0x90d+-0x1*-0x1a91,_0x16065b(0x36b)],[-0x4a7+0x8fe+0x12b*-0x1,_0x4490c7['sAIdJ']],[0x269c+0x16a9*-0x1+-0xcc3,_0x16065b(0xb59)],[0xffa*0x1+0x1720+-0x23e6,_0x4490c7[_0x16065b(0x85d)]],[0xaed*0x2+0x1*-0x177f+0x4e1*0x1,'f32'],[0x2*-0x130f+0x1*-0xb03+0xb*0x4c3,'u8'],[0x1b1e+0x15*-0x1af+0x5bf*0x2,'u8'],[-0x1b1*0x17+0x46d+0x1*0x25c6,'u8'],[0x326+0xe03+-0xddc,'u8'],[-0x931+0x1345*0x1+-0x6*0x121,'u8'],[-0xf51+0x3*-0xb9b+0x3572,_0x4490c7['sAIdJ']],[0x1*0x1462+0x9d1+-0x1adf,_0x16065b(0xb59)],[0x2*0x1127+-0x1126+-0x1ba*0x8,_0x4490c7['sAIdJ']],[0x1*0x943+-0x139*-0xf+-0xc1f*0x2,_0x16065b(0xb59)],[-0x554+-0x444*0x5+0x1e08,'f32'],[0x175e+-0x89*-0x29+-0x29eb,'u8'],[0x422+0xe7*0x29+-0x25b9,_0x16065b(0xb59)],[0x7ae*-0x2+-0x1b8d+0x2e55*0x1,'f32'],[0x168e+0x1db3*0x1+0x1*-0x30d1,'u8'],[-0x85+-0x6eb*-0x3+0x74*-0x25,'v3'],[-0x15c2*-0x1+-0x1c9+-0xb*0x17f,'v3'],[0x1e53*0x1+0x105f+-0x2b22,'v3'],[-0xa*-0x362+0x1*-0x1309+-0xb2f,_0x4490c7['sAIdJ']],[0x182f+-0x1*0xcd1+-0x1*0x7be,_0x4490c7[_0x16065b(0x85d)]],[-0xf48+0x118d*-0x2+-0x5*-0xace,'f32'],[0x92b+-0x244b+-0xf64*-0x2,'v3'],[-0x1541+-0x1*-0x1b06+-0x211,_0x4490c7['lBmDv']],[-0x218b+0x67*-0x17+-0x1a*-0x1ca,'u8'],[-0x17fa*-0x1+0x1f27+-0x3365,_0x16065b(0x36b)],[-0x10f*0x2+0xe*-0x8b+-0x1*-0xd78,_0x4490c7[_0x16065b(0x85d)]],[-0x9b*0x8+-0x3*-0xa97+0x1*-0x1729,_0x16065b(0xb59)],[-0x2*-0xdb7+-0x1be*0x6+0x466*-0x3,'f32'],[-0x1a2d*-0x1+-0x657+-0x100a,_0x4490c7[_0x16065b(0x85d)]],[0xc1e+0x1eab*0x1+-0x1*0x26f9,'v3'],[-0xc9*0x10+-0x16b8+0x7d4*0x5,'i32'],[0x1f5*-0x1+0x1123+-0xb4e,'u8'],[0xcb*0xe+0x2fe*-0x2+-0x13d*0x1,'u8'],[-0x581*-0x1+0x131*0x1a+-0x2099,'u8'],[-0xbcd+0x1*0x229e+-0x5f*0x33,_0x4490c7[_0x16065b(0x85d)]],[-0xdaf+-0x11ac+0x213*0x11,'i32']],'HealthScript':[[0x1*-0x14e3+0x1393+0x35*0x8,'u8'],[-0xa3*0x1+-0xc5*0x12+-0xb5*-0x15,_0x4490c7['lBmDv']],[-0x4d2+0x25*-0xcf+-0x1f*-0x123,_0x4490c7['sAIdJ']],[-0x526*-0x2+0x32d+-0xcf5,'f32'],[0x205d+0x1*-0x163b+0x99a*-0x1,_0x16065b(0xb59)],[0x16e4+-0x844+0x11*-0xd4,'f32'],[0x2*0x60d+-0x62*-0x41+-0x246c,'f32'],[-0xf35*0x1+0x25f*-0xf+0x335a,_0x16065b(0xb59)],[0xe9b*-0x1+-0xb30*-0x1+0x159*0x3,_0x16065b(0x36b)],[-0x23f7+0x5*-0x67d+0x450c,'i32'],[0x6e2*0x3+-0x443*-0x9+-0x3a59,'u8'],[-0x1a8b+0xe49+-0xceb*-0x1,'u8'],[-0x1a9a+-0x1*-0x1463+0x6e1,'u8'],[-0x16ba*0x1+-0x515*0x6+0x35e3,'u8'],[0x3*0xc5d+-0x12cb*0x1+-0x118c,_0x4490c7['yigbf']],[0x224*-0x2+0x127d+-0xd61,_0x16065b(0x99b)],[0xf6f+0x1781+0x982*-0x4,_0x16065b(0x99b)],[0x784+0x17d5+-0x1e5d,'obfI'],[0x148a+0x16cc+0x2a46*-0x1,_0x16065b(0x99b)],[-0x1680+0x6c*0x3+-0x8*-0x2cc,'obfB'],[-0xdfa+-0x13bd+0x22e7,_0x16065b(0x1bf)],[0x91b+-0x5*-0x103+-0xce2,'f32'],[-0x8*-0x3b2+0x108*0x1+0x6*-0x4e2,'f32'],[-0x1*0xfa7+-0x3e*-0x22+-0x1*-0x8bb,_0x4490c7['sAIdJ']],[0x1b45+-0x4*0x31+-0x1*0x192d,_0x4490c7[_0x16065b(0x85d)]],[-0x211a+0x66f*0x4+0x8ba,_0x16065b(0xb59)],[0x26c2+0x1*-0x1601+-0xf61,'v3'],[-0x2524*-0x1+0x403*-0x8+-0x39c,'f32'],[-0x6d3+0x574+-0x2d7*-0x1,_0x4490c7[_0x16065b(0x85d)]],[-0x408+-0x17e9+0x1*0x1d71,'u8'],[0x259b+-0x2a0+-0x9*0x3b7,'u8'],[0x1243+0xdac+-0x1e5f,_0x16065b(0x36b)]],'PlayerConfig':[],'WeaponManager':[[0x369+-0xa*-0x21f+-0x111*0x17,_0x4490c7['lBmDv']],[-0x1*0x1177+-0x1*-0x1d48+0x1*-0xbb5,_0x4490c7['lBmDv']],[-0x13a4+-0x171e*0x1+-0x1f3*-0x16,'u8'],[-0x2308+-0x3*0xba9+0x4627,'i32'],[-0x1*0x20b+-0x1481+0x10*0x16f,_0x16065b(0x1bf)],[-0x4fe+0x15a*0x4+0x12,_0x4490c7[_0x16065b(0x85d)]],[0x1*0x259b+-0x10c5*0x1+0x6c6*-0x3,_0x4490c7['lBmDv']],[0x8*-0x416+0x14d9+0x1*0xc5f,'u8'],[-0x2527+-0x5*-0x1b7+-0x1d*-0x101,'u8'],[-0x1*-0x1b61+0x127e+-0x2d53,_0x4490c7[_0x16065b(0x6fc)]],[-0x4c5+-0x1*0x224f+0x27a4,_0x4490c7[_0x16065b(0x85d)]],[0x5*0x66a+-0x5*0x2a5+-0x1241,_0x16065b(0xb59)],[-0x10a+0x692+-0x4dc,_0x16065b(0x36b)],[-0xd19+-0xb81+0x1956,'u8'],[-0x565*-0x6+0x812+0x22*-0x12a,_0x4490c7[_0x16065b(0x39b)]],[0x17e7+0x9ed+-0x20e4,_0x16065b(0x99b)],[0x130c+-0x1379+-0x7b*-0x3,_0x4490c7[_0x16065b(0x85d)]],[0xba0+0x1906*-0x1+0xe6e*0x1,_0x16065b(0xb59)],[0x22db*-0x1+0x8e1+0x1b06,_0x4490c7[_0x16065b(0x85d)]],[-0x119*-0x1e+0x22b5+-0x428b,_0x16065b(0xb59)],[-0x1*-0x3f8+-0x13*-0x1cf+0x3*-0xc67,_0x4490c7[_0x16065b(0x85d)]],[0xf8a+0x2632+0x14*-0x2a1,'u8'],[-0xb32*0x1+-0x94b+0x15a9,_0x16065b(0x99b)],[-0x1*-0xdb9+-0x11dc+-0xc5*-0x7,_0x4490c7[_0x16065b(0x39b)]],[0x11f0+-0x61*-0x67+-0x37a3,'obfI'],[0x52*0x6d+0x1*-0x6f5+0x1a8d*-0x1,'obfB'],[-0x1*-0x1a29+0x1*-0x1c3d+-0x2*-0x1c4,_0x16065b(0x3f4)],[-0x65*0x7+-0x1e2d+0x26*0xe8,_0x4490c7['ssJFh']],[0xe3*-0x25+-0xdf2+0x304d,_0x16065b(0x3f4)],[0x1a1d+0x1346*-0x1+-0x533,_0x4490c7[_0x16065b(0x91b)]],[0x293*-0x1+0x2*0x1168+0x365*-0x9,_0x16065b(0x99b)],[0x8db*-0x2+0x507+0x1*0xe7b,_0x16065b(0x36b)],[0x2361*0x1+0x2a5*-0xc+0x7*-0x43,'u8'],[-0x541+-0x1*-0x26c1+0xfd6*-0x2,_0x4490c7[_0x16065b(0x6fc)]],[-0x24b5+0x174e+0xf3f,_0x4490c7['lBmDv']],[-0x9*0x1a7+-0x10ea+0x21c9,_0x4490c7['lBmDv']],[0x20*0x33+-0xec*0x4+-0xc*0xd,'u8'],[0x10c5+0x96b+-0x17*0x10c,'u8'],[0x347*0x3+0xb0a+-0x12c2,'u8'],[-0x18db+-0x221f+0x3d18,'u8'],[0x2153+0x1ad2+-0x425*0xe,'u8'],[-0xd5*-0x2c+-0x24f9*0x1+-0x1*-0x2ad,_0x4490c7['lBmDv']],[-0xc4b+0x151e*0x1+-0x67b,'u8']],'GG_GameManager':[[0x1*0xb98+0xe65+-0x19d9,'u8'],[0x55*-0x1+0x6f*0xb+-0x444,_0x16065b(0xb59)],[-0x23cf+-0x2*0xe7c+0x410b*0x1,'u8'],[0x1*-0x1258+0x1936*-0x1+-0x35f*-0xd,'u8'],[-0xf9*0x1+0x1a03*0x1+-0x18c2,_0x16065b(0xb59)],[-0x913*0x1+-0x921+-0x20*-0x94,_0x16065b(0xb59)],[-0x26e0+0x2120+0x610,_0x16065b(0x36b)],[-0x18*-0x59+-0x431+-0x1*0x3d3,_0x16065b(0x36b)],[-0x1*-0x18eb+0xa5d*0x1+-0x22f0,'u8'],[-0x2284+-0x2*0xc28+0x4*0xed2,'u8'],[-0x4*0x92c+0x1*0x2357+0x1d1*0x1,_0x16065b(0xb59)],[0x10ae+-0x913+0x71f*-0x1,_0x4490c7[_0x16065b(0x85d)]],[-0x7c8+-0x1b58+0x10*0x23b,_0x16065b(0x36b)],[0x1b6e+0x1*0xc+-0x1ae6,'u8'],[0x6d4+-0x289*-0x2+0xb32*-0x1,_0x16065b(0x36b)],[0x23fb+-0x2055+-0x2ea,_0x16065b(0x36b)],[0x868*-0x4+0x1*-0x2543+0x47a3,_0x4490c7['lBmDv']],[-0x18fb+-0x4*0x1f6+0x1*0x21bb,_0x16065b(0x99b)],[0x644+0x1*-0x2242+-0x2*-0xe7d,_0x16065b(0x99b)],[-0x1009+-0x1*0xb5d+-0x1*-0x1c76,'obfI'],[0x183*0x19+-0x1996+-0xb09,'u8'],[-0x34b+0x12c3+-0x1*0xe48,_0x16065b(0x36b)],[0x3*0x994+-0x211*-0x9+-0x1*0x2df1,'u8'],[0x23*-0x2c+0x1953+0x11df*-0x1,_0x4490c7[_0x16065b(0x85d)]],[-0x1e38+-0x1ad5+-0xd*-0x481,'u8'],[-0x7ef+-0x265*-0x1+0x16a*0x5,'u8'],[0x79*0x43+-0x1d2f+-0xd8,'u8'],[0x1e07+0x1*0x16db+-0x333a,'i32'],[-0xc*-0x212+-0x1f12+-0x6*-0x151,_0x16065b(0xb59)],[-0x259*-0x3+-0x214d+0x1bf2,'u8'],[0xe16+0x2*0xda0+-0x27a5*0x1,'u8'],[0x491*-0x5+-0x17a0+-0x1*-0x302d,'i32'],[-0xdcf+0x2*0x5b+0xed5,_0x4490c7[_0x16065b(0x6fc)]],[-0x2287*0x1+-0xf4*0x26+-0x487f*-0x1,_0x4490c7[_0x16065b(0x85d)]],[0x203a+-0x2*0x1186+0x496,_0x4490c7['lBmDv']],[-0xa7d+-0x1563+-0x18*-0x167,_0x16065b(0xb59)],[0x1*-0x1edb+-0x21fa+0x42a1,_0x16065b(0x36b)],[0x251e*-0x1+-0xc22+0x1*0x3310,_0x16065b(0x36b)]],'TDM_GameManager':[[0x3a*0x9d+-0x1a*-0x6b+-0x172c*0x2,'u8'],[-0x833*-0x2+-0x4*0x305+-0x6*0xb3,'u8'],[-0x1b7*-0x12+-0x1fb7+0xfa,'u8'],[0x1df0+0x3d*-0x8+-0x1be4,_0x4490c7[_0x16065b(0x85d)]],[-0x3*0x4a+0x54c*-0x6+-0x1*-0x20fe,'u8'],[0x12d2+0x2ad+-0x1523,_0x4490c7[_0x16065b(0x85d)]],[0x201c+0x146*-0x11+-0xa16,_0x16065b(0xb59)],[0x1f45+-0x10*0x19+-0x5dd*0x5,'i32'],[-0x4bd*0x6+-0x1d79+0x3a4f,_0x16065b(0x36b)],[-0x5ac+-0x1a69*-0x1+-0x1451,'u8'],[0x4*-0x3cb+0x1023+0x2*-0x45,'u8'],[-0x1*-0xd17+-0x12ea+0xe5*0x7,_0x16065b(0xb59)],[0x1*-0xb6+0xb3*-0x18+0x11f2,_0x16065b(0xb59)],[-0x464+0x193d*0x1+-0x6f*0x2f,_0x4490c7[_0x16065b(0x6fc)]],[0x1285+-0x25f0+0x13f7,'u8'],[0x6b*-0x41+-0x34*0x6+0x1cf3,_0x16065b(0x99b)],[-0x22a4+0xa*-0x131+0x2f66*0x1,_0x16065b(0x99b)],[-0x11ca+-0xee8+0x1*0x219e,'obfI'],[-0x12b7*-0x2+0x1f46+-0x43b4,_0x4490c7['yigbf']],[-0xab*0xd+-0xeab*0x1+0x186e,'u8'],[-0x47*0x7b+-0x2bf+0x2638,'u8'],[-0x4db*0x1+0xb79+-0x53e*0x1,_0x16065b(0x36b)],[0x9d*0x5+0x2131*-0x1+-0x7e3*-0x4,'u8'],[0x2*0x6ed+-0x1*-0x25a2+-0x31f8,'u8'],[0xa7*0x29+0x2*-0x223+0x3*-0x6fb,_0x4490c7['sAIdJ']],[0xe8c+0x12a0+0x2c*-0xb8,_0x16065b(0x36b)],[-0x1e48+0x81a+0x17be,_0x4490c7['lBmDv']],[-0x1df8+-0xfe5+0x2f71,_0x16065b(0xb59)],[0xd90+-0xf1f*0x1+0x10d*0x3,_0x4490c7[_0x16065b(0x6fc)]],[-0x245e+0x14e9+0x1111,_0x4490c7[_0x16065b(0x6fc)]],[0x9ac+0x1a65*0x1+-0x2271,_0x4490c7[_0x16065b(0x85d)]],[-0x3*0x314+0x16*-0xdf+0x1e0a,_0x4490c7[_0x16065b(0x85d)]],[-0x2332+-0x1*-0x15e6+0xef4,'i32'],[-0x2f*0x82+-0x18d5+0x3263,'u8'],[-0x2*-0x948+-0x4a*-0x3d+-0x49*0x79,'u8'],[-0xd*0x55+-0x830+0xe39,_0x4490c7['sAIdJ']]],'PhotonNetworkSync':[[-0x13*0x1e+0x343*0x5+-0xde1,'v3'],[-0x251f+-0x1*-0xd19+0x1846,_0x16065b(0x36b)],[-0xf3a+-0x1*-0x1c5b+0x25*-0x59,'u8'],[0xdef+-0x1705+0x95b,'u8'],[-0xd53+-0x26f4+-0xf*-0x381,'v3'],[-0xdea+0x1840+-0xa02,'u8'],[0x1c6*0xc+-0x1*-0x365+-0x1855,_0x4490c7[_0x16065b(0x6fc)]],[-0xcd6+-0x181*-0x4+-0x2*-0x397,'i32'],[0x7b5*-0x2+0x8c8+-0x256*-0x3,_0x16065b(0xb59)],[0x1*-0x23c9+-0x2*0x319+0x2a5f,_0x4490c7['sAIdJ']],[-0x63d*-0x4+-0x7bc*-0x4+-0x377c,_0x4490c7[_0x16065b(0x85d)]],[0xda*-0x13+0x15cd+-0x533,'v3'],[0xf18+0x110d+-0x33*0x9f,_0x4490c7['sAIdJ']],[0xb4*0x3+0xcdf+-0xe7f,_0x4490c7['sAIdJ']],[0xa87+-0x1e08+0x1401*0x1,_0x16065b(0x36b)],[-0x252f+-0x1913+0x34e*0x13,_0x16065b(0xb59)]],'MouseLook':[[0x1575+-0x2*-0xe75+-0x324b,'f32'],[0x52*-0x3+-0x1627+0x1735,_0x16065b(0xb59)],[0x16d3+-0x17*-0x179+-0x3896,_0x16065b(0xb59)],[-0x20bd+-0x1*0xb5c+0x2c39,_0x4490c7['sAIdJ']],[-0x1*0x12d9+0x128d+-0x7*-0x10,_0x16065b(0xb59)],[0x2137+0xb*-0xe3+0x13*-0x13a,_0x4490c7['sAIdJ']],[0xe82*0x1+-0x1ab1+0xc5f,'f32'],[-0x7*-0x6b+0x2*-0x5da+-0x1*-0x8fb,'u8'],[-0xd3b+-0x1dc7+0x2b3a,_0x16065b(0xb59)],[0x6a*0x26+0x7d*0x2e+-0x56*0x71,'f32'],[-0xc15+-0x66*0xa+0x1051,_0x16065b(0x36b)],[0xccd+0x4ad*0x7+0xb51*-0x4,'u8'],[-0x81*0x4d+-0x13*0x115+-0xee9*-0x4,'v2']],'NetworkPlayerAnimations':[[-0x3*-0x6e9+-0x123*-0x18+-0x2f5b,'v3'],[-0x2e*-0xb5+0x94*0x10+-0x2912,'v3'],[0x161*0x11+0x1bea*0x1+-0x329b,'u8'],[-0x23*0xef+-0x23+0x2194,_0x4490c7[_0x16065b(0x6fc)]],[0x22+0x17f2+-0x174c,_0x4490c7[_0x16065b(0x6fc)]],[0x8*-0xf3+-0x213+-0x8d*-0x13,_0x16065b(0xb59)],[0xc84*-0x1+-0x782*-0x2+-0x1b0,_0x4490c7[_0x16065b(0x85d)]],[-0x84f+0x2431+-0x1b06,_0x16065b(0xb59)],[-0x17e4+0x1*0x15ef+0x2d5*0x1,_0x4490c7[_0x16065b(0x85d)]],[-0x2217+-0x119*-0x1f+-0x1f*-0x8,_0x16065b(0xb59)],[0xc7a+-0x3d*0x56+0xb0*0xd,_0x4490c7[_0x16065b(0x85d)]],[-0x48a*0x1+-0x170c+0x4c1*0x6,_0x4490c7[_0x16065b(0x85d)]],[-0x6d6+0x399*0x1+0x25*0x1d,'f32'],[0x685+0x1a92+-0x201f,_0x16065b(0xb59)],[-0x1fff+0xdf1+0x130a,_0x16065b(0xb59)],[-0x4b*0x35+0x17*-0xac+-0x3*-0xaa9,'f32'],[0x1d*0x108+-0x1*-0x959+-0xd*0x2f1,_0x16065b(0xb59)],[0x35e+0x76*-0x4a+0x1fc6,_0x16065b(0x36b)],[0x68f*-0x3+-0x1ec2+0x337b,'u8'],[0x13b7+-0x715*-0x1+-0x19bc,_0x16065b(0x36b)],[-0x1d*0x5d+-0xe08*0x1+0x19a5,'i32'],[-0xa7f+0x3*-0xc2+0xddd,'u8'],[0x5*-0x70d+0x10c1+0x139c,_0x16065b(0xb59)],[0xf6d*0x1+0x21b8+-0x1*0x3005,_0x4490c7['sAIdJ']],[-0x11c*-0xb+-0x13cc+0xd*0xac,_0x16065b(0xb59)],[0x1097*-0x2+-0x81*-0x3d+0x399,_0x4490c7[_0x16065b(0x85d)]],[-0xdc9*-0x1+0xe5*0x2+0x3*-0x4cd,'u8'],[0x23e+0x240a+-0x2510*0x1,'u8'],[-0x1*0x718+-0x885+-0xe3*-0x13,'v3'],[-0xfde+0x1*0x1561+-0x43b,'v3'],[-0x1*0xdf0+0x1*0x352+-0x1be*-0x7,'u8']],'NPC_Cotroller':[[0x2129+-0xe7e+-0x1*0x1297,'v3'],[-0xf44*0x1+-0x12bb+0x5*0x6d3,_0x4490c7[_0x16065b(0x85d)]],[0x3*0x22e+-0x4a*0x49+0x75a*0x2,_0x4490c7[_0x16065b(0x85d)]],[0x11*0x31+0x1fdd+0x6a*-0x54,'u8'],[-0x1220+0x249b+-0x1224,'u8'],[-0x1d35+-0xb16+0x28a7,'v3'],[0x19fd*-0x1+-0x2505+-0x1*-0x3f9e,'u8'],[0x5*0xfb+0x9ff*0x3+-0x2244,_0x4490c7['sAIdJ']],[-0x16fd+0x26d0+-0x17*0xa9,'f32'],[0x1*-0xcd2+0x1ed6*0x1+-0x114c,_0x16065b(0xb59)],[-0x1*0xd2d+0x3f4+0x1*0x9f5,_0x16065b(0xb59)],[-0x3d*0x40+-0x260b*-0x1+0x5*-0x467,'u8'],[-0x23c+0x1bc2+-0x18ba,_0x4490c7[_0x16065b(0x85d)]],[-0x307*0xa+-0x58e+-0x2*-0x1256,_0x4490c7[_0x16065b(0x85d)]],[-0x14b*-0x13+-0x1c77+0x4c2,_0x4490c7[_0x16065b(0x85d)]],[0x1*-0x17b+-0x1601+-0x617*-0x4,_0x16065b(0xb59)],[-0x1d34+0x23e1+-0x5c9*0x1,'u8'],[-0x2022*-0x1+-0x1183*-0x1+-0x30b9*0x1,_0x16065b(0xb59)],[-0x1dd2+0xa0*0x23+-0x3*-0x2f6,'v3'],[-0x1*-0x220d+-0x3*0x46a+-0x13d3,_0x16065b(0xb59)],[0x1dfd+0x405+-0x2102,'i32'],[-0x1*0xe78+-0x2436+-0x3fa*-0xd,_0x4490c7[_0x16065b(0x85d)]],[-0x1d56+0x1618+0x423*0x2,_0x16065b(0xb59)],[-0x1bf4*-0x1+-0x21a+-0x18ce,_0x16065b(0xb59)],[0x265d+-0x1c0+-0x2389,'v3'],[-0x218a+-0x202*-0x5+0x18a0,'f32'],[0x557+0x1e69+-0x229c,_0x16065b(0xb59)],[-0xf57+-0x11e7+0x2272,'v3'],[0x4*-0x2e7+-0x1417+0x1*0x20f7,'u8'],[0x16*0x79+-0x1795+0xe77,_0x16065b(0xb59)],[0x162b+0xf9+-0x15d4,'v3'],[0xffd*0x2+0x183e+0x2be*-0x14,_0x16065b(0x36b)],[0x1141+-0x1*0x23f9+0x1*0x1424,_0x4490c7[_0x16065b(0x6fc)]],[0xc3b+-0x594+-0x1*0x537,_0x4490c7['sAIdJ']],[0x1*-0x393+0x24bb+-0xfda*0x2,'u8'],[-0x7c7+0x2*0x6dd+-0x47b,'v4'],[-0x2*0x509+-0x3*0xa61+-0x2abd*-0x1,_0x4490c7[_0x16065b(0x85d)]],[0x1f32+0x3*-0x8c8+-0x34e,_0x4490c7[_0x16065b(0x85d)]],[0x181+-0x2*0x904+0x1217,'f32'],[0x6*0x277+-0x3*0x219+-0x6e7,'u8'],[-0x52d*0x3+0x133d*-0x1+0x2464,_0x16065b(0x36b)]],'TargetHealth':[[-0x89*0x46+-0x95b*-0x3+0x975,_0x16065b(0x36b)],[-0x2*0xdba+-0x1f23+0x3aab,'i32'],[0x401+-0x347*-0x5+0x1430*-0x1,'u8'],[-0x3a0+0x14d3+0x363*-0x5,_0x16065b(0x36b)],[0x31b*-0x7+-0xf7*-0x1+0x150e,_0x16065b(0x36b)],[-0x1601+-0x4*-0x2ba+-0x1*-0xb65,_0x4490c7['lBmDv']],[0x7*-0x3a9+-0x33*-0x4b+0xafe,_0x4490c7['lBmDv']],[-0x83+0x17bf+-0x16b8,_0x4490c7[_0x16065b(0x85d)]],[-0x2*0x10ad+0x217e+0x68,_0x16065b(0xb59)],[-0x1af*-0x17+0x25f9*-0x1+-0x18*0x2,'u8'],[0xb19+0x2*-0x99a+0x8af,_0x4490c7[_0x16065b(0x85d)]],[-0x20db+-0x240e+0x458d,'u8'],[0x2a1*-0x2+-0x96d*-0x2+-0xcf0,_0x4490c7['lBmDv']],[-0x14d1*-0x1+0x2276+-0x369b,_0x4490c7['lBmDv']],[0x62d*-0x2+-0xb*0x13d+-0x1ab9*-0x1,_0x16065b(0xb59)],[0xa25*-0x1+0x3*0x79f+-0xbec,'u8']],'SectatorCamera':[[-0x853+-0x75b*0x4+0x1a5*0x17,_0x4490c7['sAIdJ']],[0x1*0x1edc+0x12a9+0x1*-0x316d,_0x16065b(0xb59)],[0x24be*-0x1+0x8ef*0x1+0x1*0x1beb,_0x16065b(0xb59)],[0x1cac+0x6bc+0x469*-0x8,'v3'],[-0x2547*-0x1+-0x2077+-0x4a4,'v3'],[-0x5b*-0x3b+-0xc85+0x416*-0x2,'i32'],[-0x2*0x679+-0x2*0x31c+0x6a*0x2f,_0x4490c7[_0x16065b(0x6fc)]],[-0xc14+0x244d*-0x1+-0x30b1*-0x1,_0x16065b(0xb59)],[0x103*0xe+0x1144*0x1+0xf8d*-0x2,'i32'],[0x56a+0x123b+0x174d*-0x1,_0x4490c7[_0x16065b(0x85d)]],[0x1f30*-0x1+0x16bd+0x8cf,'u8'],[-0x1*0x14e9+-0x264e+0x3b97,'v3'],[0x1*-0x16ea+-0xc9*-0x14+0x7a2*0x1,'v4'],[0x1*-0x115b+-0x2102+-0x3*-0x10f3,'u8'],[0x125f+-0x120a+0x2b,_0x16065b(0x36b)]],'UISettings':[[0xdfd*-0x1+0x877+0x5a6,_0x4490c7['lBmDv']],[0x4*0x875+0xc4b+-0x1*0x2df7,_0x16065b(0xb59)],[0x9*-0x21d+-0x241e+0x3*0x12cd,'u8'],[-0x161*-0x11+-0x2*0x7d3+-0x1*0x683,'i32'],[-0x2eb*0x2+-0x2*0x68c+-0x1*-0x1442,_0x16065b(0x36b)],[0x39*0x65+0x101c+-0x2541,_0x4490c7['lBmDv']],[-0x1f*0xd5+0x8f5+0x1232,'u8'],[0x23d4+-0x624+-0x1c53,'u8'],[0x12d1*-0x2+0x1ca5+-0xa5b*-0x1,'u8'],[0x2*0x10e5+-0xacf+-0x159c,'u8'],[-0x21af+-0x49*-0xa+0x5*0x671,'u8'],[-0x2c7+0x3*0x95f+-0x17f5,'u8'],[0x2531+0x2*0x12c4+0x1*-0x4957,'u8'],[0x2*-0x89f+-0x2*0x1349+0xfe*0x3a,'f32'],[0x6ad+0x1f97+-0x2480,_0x4490c7['sAIdJ']],[0x2037+0x184b+0x366a*-0x1,'u8'],[0x1783+0x1af*0x6+-0x375*0x9,_0x16065b(0xb59)],[-0x82*-0x11+-0x2337+0x1d35,_0x16065b(0x36b)],[0x4*-0x2e3+-0x45*-0x5+0xd2b,'u8'],[-0xf19+-0x22f+0x2*0xa72,'u8'],[-0x1*0x213+-0x8e8+0x1*0xe9b,'v2'],[-0x3*-0x91d+0x8f*0xb+-0x5c*0x53,'v2'],[-0xa97*0x3+-0x11e*-0x22+-0x287,'u8'],[0x1f17+0x1*0x1210+-0x2d6f,'u8'],[-0x1*0xe27+0x3d1*0x9+-0x1066*0x1,_0x16065b(0xb59)],[-0xa53+-0x1290+0x1*0x20b3,'v3'],[0x18d5+-0x391*-0x1+-0x1886,_0x4490c7['sAIdJ']],[-0xfb8+-0x1a51+0x2ded,_0x4490c7['sAIdJ']],[-0x343+-0x1c61+-0x4*-0x8e3,_0x16065b(0xb59)],[-0x342+0xa03+-0x7*0x67,'u8'],[0xa84*0x1+-0x31*-0x1c+-0xbef,'u8'],[-0x11*0x5f+0x1242+-0x7ff,_0x16065b(0x36b)],[-0x1a79+0x15ea+-0x139*-0x7,'i32'],[0xdd*-0x1+0x3*0x67f+-0xe9c,_0x16065b(0x36b)],[-0x1b08+-0x1a40+0x10*0x395,_0x4490c7[_0x16065b(0x6fc)]],[-0x4a*0x19+0xf79+-0x433,_0x4490c7[_0x16065b(0x6fc)]],[-0x14b7*-0x1+-0x49*0x1c+-0x1*0x8ab,'i32'],[0x17b9+-0x72c*-0x1+-0x1ad1,_0x4490c7['lBmDv']],[0xfdd*0x1+0x1*-0x141+0x1*-0xa84,_0x4490c7['lBmDv']],[0x2588+0x10b+-0x2277,_0x16065b(0x36b)],[-0x5*-0x168+0xce3+-0xfcb,_0x4490c7['lBmDv']],[0xb2*-0x5+0xf15+-0x747,'u8'],[-0xae7*-0x3+0x423+-0x2083,'u8'],[-0x1076+0x7c5*-0x3+-0x1*-0x2c1b,'u8'],[0xf0c*-0x1+0x2*-0x5ce+0x1eff,'u8'],[0x1dc+0xd2+-0xef*-0x2,_0x4490c7['sAIdJ']]]},_0x3a9240={},_0x24ab5f={};function _0x2eabc9(_0x409848,_0x3b9d0a,_0x3b6d12){var _0x51e20a={'yOwOW':function(_0x3d900c,_0x39e6d9){return _0x3d900c===_0x39e6d9;}};return function(_0x2736b8){var _0x4b0fd5=_0x4a91,_0x55cd54={'XCIAn':function(_0x5a65d7,_0x33e4cb){return _0x4490c7['mPYEB'](_0x5a65d7,_0x33e4cb);},'noEiB':function(_0x5c5003,_0x5d9895){var _0x4f20e7=_0x4a91;return _0x4490c7[_0x4f20e7(0x171)](_0x5c5003,_0x5d9895);},'bMIZY':function(_0x5a6323,_0x2c778c,_0x4e5483){return _0x5a6323(_0x2c778c,_0x4e5483);},'KZdal':'Sessi'+'on','eyNIg':_0x4b0fd5(0x21b)+'e','pnruu':function(_0x41af42,_0x3c4ee6){return _0x41af42<_0x3c4ee6;},'gBoLl':function(_0x267594,_0x411909,_0x1de5e9){return _0x267594(_0x411909,_0x1de5e9);},'ULBvD':function(_0x10d278,_0x47fad1,_0x39449f){return _0x10d278(_0x47fad1,_0x39449f);},'RjryT':'i32','xqIPt':function(_0x1a06b9,_0x411302){return _0x1a06b9!==_0x411302;}};try{if(_0x4490c7['CfBOj']===_0x4490c7['CfBOj']){var _0x55a1f1=_0x2736b8&&_0x2736b8[_0x4b0fd5(0x5cc)]?_0x2736b8[_0x4b0fd5(0x5cc)]():0x3*-0x691+0x1345*0x1+0x2*0x37;if(!_0x55a1f1)return;var _0x300372=_0x24ab5f[_0x409848]||(_0x24ab5f[_0x409848]={}),_0x96fc7b=_0x300372[_0x55a1f1];if(!_0x96fc7b)_0x96fc7b=_0x300372[_0x55a1f1]={'ptr':_0x55a1f1,'firstSeen':Date['now'](),'hits':0x0};_0x96fc7b['hits']++;if(_0x3b6d12){if(!_0x3a9240[_0x55a1f1])_0x3a9240[_0x55a1f1]={'ptr':_0x55a1f1,'kind':_0x409848,'firstSeen':Date[_0x4b0fd5(0x914)](),'hits':0x0};_0x3a9240[_0x55a1f1][_0x4b0fd5(0x26e)]++;}else{if(_0x4b0fd5(0x93a)===_0x4490c7[_0x4b0fd5(0x34d)]){var _0x2a7930=_0x39f72e[_0x409848];if(!_0x2a7930||_0x2a7930[_0x4b0fd5(0x1cd)]!==_0x55a1f1){_0x39f72e[_0x409848]={'ptr':_0x55a1f1,'firstSeen':Date[_0x4b0fd5(0x914)](),'hits':0x0,'replaced':!!_0x2a7930};try{var _0x2d464e=_0xd685a['filte'+'r'](function(_0x159113){var _0x3b24df=_0x4b0fd5,_0x3c49b7={'TwepS':function(_0x9ce0a1,_0x16da2c){return _0x9ce0a1+_0x16da2c;}};if('Tmrdo'===_0x3b24df(0x77b)){var _0x2df936=_0x7fe186[_0x3b24df(0x2bd)+_0x3b24df(0x8a9)+'dkit']['Runti'+'me'];_0x2df936[_0x3b24df(0x9f8)+_0x3b24df(0xb60)+'g']=_0x3c49b7['TwepS'](_0x4d8173,':')+_0x20b76c['rando'+'m']()[_0x3b24df(0x6f9)+'ing'](0xb*0x67+-0x1*-0x266f+-0x2ab8)['slice'](-0x777+0x3*0x5db+-0xa18,-0x1*-0x14df+-0x515*-0x2+-0x1eff),_0x5990e9=_0x2df936[_0x3b24df(0x9f8)+_0x3b24df(0xb60)+'g'];}else return _0x159113[_0x3b24df(0x9e7)]===_0x409848;})[-0x26e1*-0x1+-0xe9f+0xe6*-0x1b];_0x2244dc={'type':_0x409848,'atMs':_0x4490c7['PAdeA'](Date[_0x4b0fd5(0x914)](),_0x1c2398),'originalFunc':!!(_0x2d464e&&_0x2d464e[_0x4b0fd5(0x7c3)]&&_0x4490c7[_0x4b0fd5(0x961)](typeof _0x2d464e[_0x4b0fd5(0x7c3)]['origi'+_0x4b0fd5(0x491)+'nc'],_0x4b0fd5(0x4da)+'ion')),'resolveGameAtFire':!!_0x4d5370(),'gameSourceAtFire':_0x3c996c['sourc'+'e']};}catch(_0x38da1f){}}}else{var _0x4c2d7f=_0x193c40[_0x24533b]['toStr'+_0x4b0fd5(0x8bc)](-0xe10+-0x59b+0x13bb);_0x68b6a4+=_0x55cd54[_0x4b0fd5(0x193)](_0x55cd54['noEiB'](_0x4c2d7f[_0x4b0fd5(0x618)+'h'],0x2179+-0x1*-0x5f7+-0x276e)?'0':'',_0x4c2d7f);}}if(_0x409848==='FPSco'+_0x4b0fd5(0x7e1)+_0x4b0fd5(0x763)&&_0x2c37ef['on'])try{_0x5f576d(_0x55a1f1);}catch(_0x3730c5){}if(!_0x3b9d0a){if(_0x4490c7[_0x4b0fd5(0x713)]('BBrYP',_0x4490c7[_0x4b0fd5(0x250)]))_0x188e93=_0x55cd54[_0x4b0fd5(0x582)](_0x4281d9,_0x55cd54['KZdal'],![]),_0x49b5e9[_0x4b0fd5(0xa01)](_0x19801f);else{var _0x2d464e=_0xd685a['filte'+'r'](function(_0x2e6a1a){var _0x567ad8=_0x4b0fd5;return _0x51e20a[_0x567ad8(0x960)](_0x2e6a1a['type'],_0x409848);})[-0x2*0x355+-0x92b*-0x1+-0x1*0x281];if(_0x2d464e&&_0x2d464e[_0x4b0fd5(0x7c3)])try{if(_0x4490c7['sXeng']===_0x4b0fd5(0xba6))_0x2d464e[_0x4b0fd5(0x7c3)]['enabl'+'ed']=![];else{var _0xb9f45a=_0x22eeeb[_0x4b0fd5(0x4e6)+'Selec'+_0x4b0fd5(0x96b)+'l'](_0x55cd54[_0x4b0fd5(0x367)]);for(var _0x492a3b=0x202*-0xd+-0x1551+0x2f6b;_0x55cd54['pnruu'](_0x492a3b,_0xb9f45a['lengt'+'h']);_0x492a3b++){try{if(_0xb9f45a[_0x492a3b]['conte'+_0x4b0fd5(0xa85)+_0x4b0fd5(0x66c)])_0xb9f45a[_0x492a3b]['conte'+_0x4b0fd5(0xa85)+'dow'][_0x4b0fd5(0xb8e)+_0x4b0fd5(0x78a)+'e'](_0x2c6cf0,'*');}catch(_0x486dc6){}}}}catch(_0x2e7425){}}}}else{_0x22eaaf[_0x4b0fd5(0x3fe)]={};for(var _0x3e4dcd=0x2ad*0x6+0x2c8+-0x12d6;_0x3e4dcd<_0x388629[_0x4b0fd5(0x618)+'h'];_0x3e4dcd++){var _0x5d5865=_0x55cd54[_0x4b0fd5(0x1db)](_0x23a1d8,_0x55cd54['XCIAn'](_0x1f8194,_0x55cd54['ULBvD'](_0x4f12ec,_0x3890ed[_0x3e4dcd][-0xbc8+-0x277*-0x1+0x1*0x951],0x2486+0x1*-0x14f7+-0xf7f)),_0x55cd54[_0x4b0fd5(0x1df)]);if(_0x55cd54[_0x4b0fd5(0x3de)](_0x5d5865,_0x25e2b6))_0x5f00b0[_0x4b0fd5(0x3fe)][_0x54c442[_0x3e4dcd][-0x8*0x2f+0x3*0x86+-0x19]]=_0x5d5865;}}}catch(_0x49d9b9){}};}function _0x12d88b(){var _0x315aea=_0x16065b;if(_0x4490c7[_0x315aea(0x653)]===_0x315aea(0x85c)){if(_0xd685a[_0x315aea(0x618)+'h'])return!![];if(!window[_0x315aea(0x2bd)+_0x315aea(0x8a9)+_0x315aea(0x9c0)]||!window[_0x315aea(0x2bd)+'WebMo'+_0x315aea(0x9c0)][_0x315aea(0x70f)+'me'])return![];var _0x3c4c86=window['Unity'+_0x315aea(0x8a9)+_0x315aea(0x9c0)]['Runti'+'me'];if(!_0x3c4c86['plugi'+'ns']||!_0x3c4c86['plugi'+'ns']['lengt'+'h'])return![];_0xea7181=window[_0x315aea(0x2bd)+'WebMo'+_0x315aea(0x9c0)]['Value'+_0x315aea(0x604)+'er'],_0x1427bd=_0x1427bd||_0x3c4c86[_0x315aea(0x90c)+'ns'][_0x4490c7['xnFty'](_0x3c4c86['plugi'+'ns'][_0x315aea(0x618)+'h'],0x7*-0x299+-0x1210+0x2440*0x1)];if(!_0x1427bd||_0x4490c7['CRNGB'](typeof _0x1427bd['hookP'+_0x315aea(0x508)],_0x4490c7['pQXWh']))return![];for(var _0x50c690=0x1af5+-0x157d*-0x1+-0x9f*0x4e;_0x50c690<_0x4f49e7['lengt'+'h'];_0x50c690++){var _0x42c4fa=_0x4f49e7[_0x50c690];try{var _0x2d85bf=_0x1427bd[_0x315aea(0x70b)+'refix']({'typeName':_0x42c4fa['type'],'methodName':_0x4490c7[_0x315aea(0xac6)],'params':['i32','i32'],'returnType':undefined},_0x2eabc9(_0x42c4fa['type'],_0x42c4fa['keep'],_0x42c4fa[_0x315aea(0x2ab)]));_0xd685a[_0x315aea(0xa01)]({'type':_0x42c4fa[_0x315aea(0x9e7)],'hook':_0x2d85bf,'keep':_0x42c4fa[_0x315aea(0x232)]});}catch(_0x366056){_0x44de5c[_0x315aea(0xa01)](_0x42c4fa['type']+':\x20'+String(_0x366056&&_0x366056['messa'+'ge']||_0x366056)[_0x315aea(0x868)](-0x2*-0x41c+0x16*0x29+-0xbbe,-0x10f9*0x1+-0x407*-0x1+0xd92));}}return _0x4490c7['GtVot'](_0xd685a[_0x315aea(0x618)+'h'],-0x9*0x3b0+0x21d4+-0xa4);}else{if(_0x1704b4&&_0x53808d['buffe'+'r']&&_0x400f69['buffe'+'r']['byteL'+_0x315aea(0x746)])return _0x329586[_0x315aea(0x2ec)+'e']=_0x15cbdf['sourc'+'e']||_0x4490c7[_0x315aea(0x762)],new _0x1b0754(_0x4e5e13[_0x315aea(0xb3f)+'r']);}}function _0x527af2(){var _0x55640a=_0x16065b,_0x31ab9f=-0x404+-0x1*-0x19dc+-0x15d8;for(var _0x550c66=-0x2*-0x4b1+-0x146d+-0xb0b*-0x1;_0x550c66<_0xd685a['lengt'+'h'];_0x550c66++){if('RZXiU'!==_0x4490c7['CKfvQ'])_0x1aa74e=_0x33d837(_0x51e613);else{if(_0xd685a[_0x550c66][_0x55640a(0x7c3)]&&_0xd685a[_0x550c66][_0x55640a(0x7c3)]['table'+'Index']!==undefined)_0x31ab9f++;}}return _0x31ab9f;}function _0x494a7a(){var _0x19afd2=_0x16065b,_0x5d7261=-0x129*0x6+0x1d87+-0x1*0x1691;for(var _0x5de0ed=0xf2a+0x216f+-0x3099;_0x5de0ed<_0xd685a[_0x19afd2(0x618)+'h'];_0x5de0ed++){if(_0x4490c7['vDODl'](_0x4490c7[_0x19afd2(0x687)],'rPEyH'))try{_0x2d0fa5(_0x796f82);}catch(_0x29178){}else{if(_0xd685a[_0x5de0ed][_0x19afd2(0x7c3)]&&_0xd685a[_0x5de0ed]['hook'][_0x19afd2(0x5a6)+'ed'])_0x5d7261++;}}return _0x5d7261;}var _0x1cce95=null,_0x38cf79=[],_0x135a11={},_0x2244dc=null;function _0x2599da(_0x1af0f4){var _0x3a8c4a=_0x16065b,_0x5ea956={'pLueu':'Runti'+'me._g'+'ame'};try{if(_0x4490c7['xAEBM'](_0x3a8c4a(0x831),_0x4490c7[_0x3a8c4a(0x795)])){var _0x2e0e95=_0x46b97d['resol'+_0x3a8c4a(0x9a2)+'e']();if(_0x2e0e95)return _0x226db5['sourc'+'e']='plugi'+_0x3a8c4a(0x632)+_0x3a8c4a(0x1e6)+'.reso'+_0x3a8c4a(0x712)+_0x3a8c4a(0x675),_0x2e0e95;}else{if(!_0xea7181||!_0x1af0f4)return null;var _0x1dc586=new _0xea7181(_0x1af0f4)[_0x3a8c4a(0x2ea)+'assNa'+'me']();return _0x1dc586===undefined?null:_0x1dc586;}}catch(_0x434182){return _0x4490c7['scGmn']!==_0x4490c7['jiMfp']?null:(_0x2c27f9['sourc'+'e']=_0x5ea956[_0x3a8c4a(0x293)],_0x41d314);}}function _0x392b1a(_0x4335d3,_0x14d35e,_0x346c1c){var _0x44a92e=_0x16065b,_0x43bee1=_0x4490c7[_0x44a92e(0x3e4)]['split']('|'),_0x59eea0=0x1b69*-0x1+-0x13*0x31+-0x4*-0x7c3;while(!![]){switch(_0x43bee1[_0x59eea0++]){case'0':return _0x2f1cdb;case'1':var _0x4f3071=_0x34dd1c();continue;case'2':if(_0x14d35e<0x2227+-0x1*0x33+-0x21f4||_0x4490c7['DkkBK'](_0x14d35e+_0x346c1c*(-0x1287+-0x1*0x1fc5+0x3250),_0x4f3071['byteL'+_0x44a92e(0x746)]))return null;continue;case'3':_0x3c996c['ok']+=_0x346c1c;continue;case'4':var _0x2f1cdb=[];continue;case'5':for(var _0x328f18=-0x21*0x7+-0x153c+-0x1623*-0x1;_0x328f18<_0x346c1c;_0x328f18++)_0x2f1cdb[_0x44a92e(0xa01)](_0x4f3071[_0x44a92e(0x72c)+'oat32'](_0x4490c7[_0x44a92e(0x8c0)](_0x4335d3+_0x14d35e,_0x328f18*(0x1c64*-0x1+0x2691+-0xa29)),!![]));continue;case'6':if(!_0x4f3071)return null;continue;}break;}}var _0x348663={'PhotonNetworkSync':[[_0x16065b(0x67e),_0x4490c7[_0x16065b(0x182)]],[_0x4490c7[_0x16065b(0x4aa)],_0x16065b(0x180)+'h'],[_0x16065b(0xa9d),_0x16065b(0x955)+_0x16065b(0x373)],[_0x4490c7[_0x16065b(0x692)],'fps'],[_0x4490c7[_0x16065b(0x51d)],_0x16065b(0x3d7)+_0x16065b(0x756)]],'NetworkPlayerAnimations':[[_0x4490c7['nPuDd'],_0x4490c7['lOjij']],[_0x4490c7['EYTiV'],_0x16065b(0x1dd)]],'NPC_Cotroller':[[_0x16065b(0x5f4),_0x16065b(0x48a)+'le'],[_0x16065b(0x478),_0x16065b(0x3bc)+'tHeal'+'th'],[_0x4490c7[_0x16065b(0x4bb)],_0x4490c7[_0x16065b(0x73f)]],[_0x16065b(0x173),_0x4490c7[_0x16065b(0x7c6)]],[_0x4490c7[_0x16065b(0x18d)],_0x16065b(0x955)+'form']],'EnemyBot':[[_0x4490c7['EScTz'],_0x4490c7[_0x16065b(0x222)]]]},_0x38aabb={'PhotonNetworkSync':[[_0x4490c7[_0x16065b(0xb08)],_0x4490c7[_0x16065b(0x307)]],[_0x4490c7[_0x16065b(0x239)],_0x16065b(0x6b9)+_0x16065b(0x80a)],[_0x16065b(0x16a),'id']]};function _0x3fe9d5(_0x5a7020,_0x448eb6){var _0xb92683=_0x16065b,_0x2cd7c4={'sUnfe':_0xb92683(0xb59),'MRhWO':_0x4490c7[_0xb92683(0x6fc)],'JYiko':function(_0x4b5a8e,_0x3a3b50,_0x358fd0){return _0x4b5a8e(_0x3a3b50,_0x358fd0);},'YvVXR':function(_0x3adece,_0x372b51){var _0x273978=_0xb92683;return _0x4490c7[_0x273978(0xa16)](_0x3adece,_0x372b51);}};if(_0x4490c7['WLPDS']('XjOdk',_0xb92683(0x4d5))){var _0x2e4ae9=_0x44a8c1[_0x5a7020]||[],_0x8c7d9={'kind':_0x5a7020,'ptr':'0x'+_0x448eb6[_0xb92683(0x6f9)+_0xb92683(0x8bc)](-0x2585+0x3f5*0x7+0x9e2),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x28b76b=-0x2542+0x1fd4+0x2*0x2b7;_0x28b76b<_0x2e4ae9['lengt'+'h'];_0x28b76b++){if(_0x2e4ae9[_0x28b76b][0x2*0xd85+0x1678+0x1b5*-0x1d]!=='v3')continue;var _0x1dd565=_0x4490c7['qDqGY'](_0x392b1a,_0x448eb6,_0x2e4ae9[_0x28b76b][-0x3*0x3f+0x937+0x46*-0x1f],0x97*0x2b+-0x2*0x48b+-0x56c*0x3);if(!_0x1dd565)continue;_0x8c7d9[_0xb92683(0xac1)+'cs'][_0xb92683(0xa01)]({'o':'0x'+_0x2e4ae9[_0x28b76b][-0x55*0xd+-0x662*0x4+0x1dd9*0x1][_0xb92683(0x6f9)+_0xb92683(0x8bc)](-0x149+-0x1b79+-0x77*-0x3e),'v':_0x1dd565});}var _0x494117=-0xe4d+-0xa*0x1cf+0x2063,_0x38dc8e=_0x264430(_0x8c7d9['allVe'+'cs'],_0x4490c7[_0xb92683(0xb51)](_0x55baaf));_0x8c7d9[_0xb92683(0xa78)]=_0x38dc8e[_0xb92683(0xa78)],_0x8c7d9[_0xb92683(0x59c)]=_0x38dc8e[_0xb92683(0x59c)],_0x8c7d9['inBan'+'d']=_0x38dc8e[_0xb92683(0x493)+'d'],_0x8c7d9[_0xb92683(0x6a0)]=_0x38dc8e['reach'],void _0x494117;var _0x55a13a=_0x348663[_0x5a7020],_0xf40cfe=_0x38aabb[_0x5a7020];if(_0xf40cfe){_0x8c7d9[_0xb92683(0x3fe)]={};for(var _0x423a0f=-0x1*0x1063+-0x5*0x4a8+0xf*0x2a5;_0x4490c7[_0xb92683(0x794)](_0x423a0f,_0xf40cfe[_0xb92683(0x618)+'h']);_0x423a0f++){var _0x5b0726=_0x3f03aa(_0x448eb6+_0x4490c7['gWkIN'](parseInt,_0xf40cfe[_0x423a0f][-0x25a*-0x3+0x18d*-0x11+-0x1*-0x134f],0x90c+-0x2*-0x114d+-0x2b96),_0xb92683(0x36b));if(_0x5b0726!==undefined)_0x8c7d9['tag'][_0xf40cfe[_0x423a0f][-0xa1*0x31+-0x1347+0x3219]]=_0x5b0726;}}if(_0x55a13a)for(var _0x545af8=-0x2389+0x3*0x59d+0x1*0x12b2;_0x4490c7['UScBL'](_0x545af8,_0x55a13a[_0xb92683(0x618)+'h']);_0x545af8++){var _0x15108f=_0x3f03aa(_0x448eb6+parseInt(_0x55a13a[_0x545af8][-0x49*0x79+0x669*0x2+-0xd*-0x1ab],-0x1205+0x161e+0x1*-0x409),_0x4490c7[_0xb92683(0x5af)]);if(_0x15108f)_0x8c7d9['refs'][_0x55a13a[_0x545af8][0x2*0x121f+-0xfb8+0x11*-0x135]]='0x'+_0x4490c7[_0xb92683(0x967)](_0x15108f,-0xa53+0x20df+-0x6f*0x34)[_0xb92683(0x6f9)+_0xb92683(0x8bc)](0x3fe*-0x3+-0x15e6*-0x1+-0x9dc);}return _0x8c7d9['scala'+'rs']=_0x2e4ae9[_0xb92683(0x1c1)+'r'](function(_0x3e8838){return _0x3e8838[0x26*-0x43+-0xb75+-0x89*-0x28]===_0x2cd7c4['sUnfe']||_0x3e8838[0x17c3+-0x61*0x15+-0x1*0xfcd]===_0x2cd7c4['MRhWO'];})[_0xb92683(0x49b)](function(_0x24fe97){var _0x4baf40=_0xb92683;if(_0x4baf40(0x956)!==_0x4baf40(0x956)){var _0x33bac0=_0x4f9f9e['slice'](-0x1225+0x1*0x251c+-0x12f7,-0x1d29*0x1+0x30*-0xd+0x20c5);if(_0x3b2780['index'+'Of'](_0x33bac0)===-(0x3ae*-0x1+-0x1*0x66a+0xa19)&&_0x1d26fd[_0x4baf40(0x618)+'h']<-0xa3e+-0x5e*-0x2f+-0x6c8)_0x115979[_0x4baf40(0xa01)](_0x33bac0);}else return{'o':'0x'+_0x24fe97[0x1*0x263b+0x25ce+-0xe5*0x55]['toStr'+_0x4baf40(0x8bc)](-0x572+0x387*0x9+-0x1a3d),'v':_0x2cd7c4[_0x4baf40(0x4a8)](_0x3f03aa,_0x2cd7c4[_0x4baf40(0x5a9)](_0x448eb6,_0x24fe97[-0x1c6*-0x1+0x1a*-0x23+0x13*0x18]),_0x24fe97[-0xc62+-0x1691+0x22f4])};})[_0xb92683(0x1c1)+'r'](function(_0x4c2b6c){return _0x4c2b6c['v']!==undefined&&isFinite(_0x4c2b6c['v']);})['slice'](-0xabe+-0x2354+0x2e12,-0x1*0x1314+0xee1+0x43f),_0x8c7d9;}else try{_0xffb3f3();}catch(_0x56634f){}}function _0x4e9072(){var _0x297126=_0x16065b;if(_0x4490c7[_0x297126(0x970)](_0x297126(0x301),_0x4490c7['bBoLQ'])){var _0x342884={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x3983c2=_0x39f72e[_0x297126(0x8ce)+_0x297126(0x7e1)+'ler']&&_0x39f72e[_0x297126(0x8ce)+_0x297126(0x7e1)+_0x297126(0x763)][_0x297126(0x1cd)]||-0x10d8+0x1c3b+-0xb63,_0x133ff3=_0x24ab5f[_0x297126(0x1f6)+_0x297126(0x33a)+'orkSy'+'nc']||{},_0x3c0f9d=Object[_0x297126(0x4f0)](_0x133ff3);for(var _0x31e05c=0x4e4*0x1+-0x3*0x9c6+0x1*0x186e;_0x31e05c<_0x3c0f9d[_0x297126(0x618)+'h']&&_0x4490c7['EmwWz'](_0x31e05c,0x8f+0x4db*0x2+0xa2d*-0x1);_0x31e05c++){var _0x49640c=_0x133ff3[_0x3c0f9d[_0x31e05c]],_0x5e8976=_0x3fe9d5('Photo'+_0x297126(0x33a)+'orkSy'+'nc',_0x49640c[_0x297126(0x1cd)]);_0x5e8976['hits']=_0x49640c[_0x297126(0x26e)],_0x5e8976[_0x297126(0x78b)+_0x297126(0xaaa)+'s']=_0x49640c['first'+_0x297126(0x803)]-_0x1c2398,_0x5e8976[_0x297126(0x16b)+'al']=!!_0x3983c2&&_0x5e8976[_0x297126(0x8ea)][_0x297126(0x796)]==='0x'+_0x3983c2[_0x297126(0x6f9)+'ing'](-0x16ef*-0x1+-0x33e*0x3+-0xd25);if(_0x5e8976[_0x297126(0x8ea)][_0x297126(0x180)+'h']){if(_0x297126(0x391)==='EUhBL')_0x753c6f(_0x4490c7[_0x297126(0x989)](_0x45ba28,_0x202ddf['value'])||_0x5978a0),_0x2509ae();else{var _0x20bf70=parseInt(_0x5e8976['refs']['healt'+'h'],0x1470+-0x8*-0x1f3+0x1*-0x23f8);_0x5e8976[_0x297126(0x180)+'h']=_0x4490c7['qDqGY'](_0x5a8cb4,_0x20bf70,_0x297126(0x382)+_0x297126(0x28b)+'pt','obfI');}}_0x342884['playe'+'rs'][_0x297126(0xa01)](_0x5e8976);}_0x342884[_0x297126(0x23e)+_0x297126(0x5ea)+'t']=_0x3c0f9d[_0x297126(0x618)+'h'];var _0x15453a=_0x24ab5f[_0x297126(0x71a)+'otrol'+'ler']||{},_0x3c8710=Object['keys'](_0x15453a);for(var _0x113dec=0x1*0x237e+-0xe8e+-0x14f0;_0x113dec<_0x3c8710[_0x297126(0x618)+'h']&&_0x4490c7[_0x297126(0x4d0)](_0x113dec,0x25f0+-0x17a3+-0xe35);_0x113dec++){var _0x3e9083=_0x4490c7['cosnb'](_0x3fe9d5,'NPC_C'+_0x297126(0x982)+'ler',_0x15453a[_0x3c8710[_0x113dec]]['ptr']);_0x3e9083[_0x297126(0x26e)]=_0x15453a[_0x3c8710[_0x113dec]][_0x297126(0x26e)],_0x3e9083[_0x297126(0x78b)+'SeenM'+'s']=_0x15453a[_0x3c8710[_0x113dec]][_0x297126(0x78b)+_0x297126(0x803)]-_0x1c2398;if(_0x3e9083[_0x297126(0x8ea)]['healt'+'h'])_0x3e9083[_0x297126(0x180)+'h']=_0x4490c7[_0x297126(0x659)](_0x5a8cb4,_0x4490c7[_0x297126(0x166)](parseInt,_0x3e9083['refs'][_0x297126(0x180)+'h'],-0x13*0x61+-0x24*-0x10e+-0x1eb5),_0x297126(0x382)+'hScri'+'pt',_0x4490c7['yigbf']);_0x342884[_0x297126(0x4a2)][_0x297126(0xa01)](_0x3e9083);}_0x342884[_0x297126(0x2d3)+_0x297126(0x390)]=_0x3c8710[_0x297126(0x618)+'h'];var _0x1eae99=_0x24ab5f['FPSco'+_0x297126(0x7e1)+'ler']||{},_0x2ab3ad=Object['keys'](_0x1eae99);for(var _0x23c4a1=-0x49*-0x3+0x1c0b+0x4d1*-0x6;_0x4490c7['KUtGR'](_0x23c4a1,_0x2ab3ad[_0x297126(0x618)+'h'])&&_0x4490c7['gVauL'](_0x23c4a1,0x1*-0xf45+0x3a+0xf23*0x1);_0x23c4a1++){var _0x3d0431=_0x3fe9d5(_0x4490c7[_0x297126(0xaae)],_0x1eae99[_0x2ab3ad[_0x23c4a1]][_0x297126(0x1cd)]);_0x3d0431['hits']=_0x1eae99[_0x2ab3ad[_0x23c4a1]]['hits'],_0x3d0431['isLoc'+'al']=_0x1eae99[_0x2ab3ad[_0x23c4a1]]['ptr']===_0x3983c2,_0x342884[_0x297126(0x5e1)+_0x297126(0xb0b)+'s'][_0x297126(0xa01)](_0x3d0431);}_0x342884['contr'+_0x297126(0xb0b)+_0x297126(0xaf3)]=_0x2ab3ad['lengt'+'h'];var _0x215efb=_0x342884[_0x297126(0x23e)+'rs']['conca'+'t'](_0x342884[_0x297126(0x4a2)]);for(var _0x2d7bcc=0x2*-0x92f+-0x2fe*0x2+0x185a;_0x2d7bcc<_0x215efb[_0x297126(0x618)+'h'];_0x2d7bcc++){if(_0x215efb[_0x2d7bcc]['isLoc'+'al'])continue;_0x342884[_0x297126(0x5c1)+'es']['push'](_0x215efb[_0x2d7bcc]);}_0x342884[_0x297126(0x306)+_0x297126(0xaf3)]=_0x342884[_0x297126(0x5c1)+'es'][_0x297126(0x618)+'h'];var _0x43d3fb={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x39735b={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x28f8e7 in _0x39f72e){var _0x96d437=_0x39f72e[_0x28f8e7];if(!_0x96d437||!_0x96d437[_0x297126(0x1cd)])continue;if(!_0x4490c7['tETEm'](_0x28f8e7,_0x43d3fb))continue;_0x342884[_0x297126(0x741)+_0x297126(0xa05)][_0x28f8e7]='0x'+_0x96d437[_0x297126(0x1cd)][_0x297126(0x6f9)+_0x297126(0x8bc)](-0x297*-0x3+-0x1ec7+0x1712);var _0x224857=_0x3f03aa(_0x96d437['ptr']+_0x43d3fb[_0x28f8e7],_0x4490c7['daItW']),_0x2c8132=_0x3f03aa(_0x4490c7[_0x297126(0x8c6)](_0x96d437[_0x297126(0x1cd)],_0x39735b[_0x28f8e7]),_0x297126(0x53a));_0x224857&&_0x4490c7[_0x297126(0x64d)](_0x342884['camer'+'a'],null)&&(_0x342884[_0x297126(0xa64)+'a']=_0x4490c7[_0x297126(0xa92)]('0x',_0x4490c7[_0x297126(0x88a)](_0x224857,-0x4c0+-0x1b5+0x675)['toStr'+_0x297126(0x8bc)](0x911+-0xee9+0x5e8)),_0x342884['camer'+_0x297126(0x234)]=_0x28f8e7);if(_0x2c8132&&_0x342884['playe'+_0x297126(0x943)]===null)_0x342884[_0x297126(0x23e)+_0x297126(0x943)]='0x'+(_0x2c8132>>>0x1e69+-0x55*-0xd+0x7*-0x4f6)[_0x297126(0x6f9)+'ing'](-0x1362*0x1+0x7f*0x41+-0xccd);}if(!_0x342884[_0x297126(0x23e)+_0x297126(0x5ea)+'t']&&!_0x342884['botCo'+'unt']&&!_0x342884['camer'+'a']){if(_0x4490c7[_0x297126(0xa27)]===_0x4490c7[_0x297126(0xb49)]){var _0x104b79=_0x416211();if(!_0x104b79)return null;return{'ptr':'0x'+_0x104b79['ptr'][_0x297126(0x6f9)+_0x297126(0x8bc)](-0x1*-0xe4d+0x21d9+-0x3016*0x1),'feet':_0x104b79[_0x297126(0x321)],'eye':_0x104b79[_0x297126(0x586)],'posAt':_0x104b79['posAt'],'eyeHeight':_0x104203,'pitch':_0x104b79['pitch'],'yaw':_0x104b79[_0x297126(0x209)],'reach':_0x104b79[_0x297126(0x6a0)]};}else _0x342884[_0x297126(0x480)]='No\x20Ph'+_0x297126(0x68f)+'etwor'+'kSync'+',\x20no\x20'+'NPC_C'+_0x297126(0x982)+_0x297126(0x9df)+_0x297126(0x31b)+'\x20game'+'\x20mana'+_0x297126(0x156)+'That\x20'+'is\x20wh'+_0x297126(0x9af)+(_0x297126(0x81d)+'obby\x20'+_0x297126(0x765)+_0x297126(0x27a)+_0x297126(0xba2)+_0x297126(0xb21)+'\x20reco'+_0x297126(0x7e3)+_0x297126(0x519)+'\x20live'+'\x20roun'+_0x297126(0x781)+'t\x20the'+'\x20menu'+'.');}else{if(!_0x342884[_0x297126(0x306)+_0x297126(0xaf3)]){if('zWgff'==='WUJZy')return _0x213db4();else _0x342884[_0x297126(0x480)]=_0x4490c7[_0x297126(0x4fa)]('Playe'+'rs\x20ar'+_0x297126(0x9f7)+'sent\x20'+'but\x20n'+_0x297126(0x846)+_0x297126(0x2fb)+_0x297126(0x5a2)+'ied\x20a'+'s\x20ene'+'mies\x20'+_0x297126(0xa9f)+'\x20chec'+'k\x20',_0x297126(0x16b)+'al\x20on'+'\x20each'+_0x297126(0x797)+_0x297126(0x29d)+'`play'+'ers`.');}}try{if(_0x297126(0x46c)!=='RWwkd'){var _0x3b445f=window[_0x297126(0x2bd)+_0x297126(0x8a9)+'dkit']&&window[_0x297126(0x2bd)+_0x297126(0x8a9)+_0x297126(0x9c0)][_0x297126(0x70f)+'me'],_0x5d9b74=_0x3b445f&&_0x3b445f['inter'+'nalWa'+'smTyp'+'es']||[],_0x2b8e9f={};for(var _0x90507f=-0x176c+0x215c+0x6*-0x1a8;_0x90507f<_0x5d9b74['lengt'+'h']&&_0x90507f<-0x5f3*0x5+-0x2024+0x4d83;_0x90507f++){if('fFsmr'!=='xkUNU'){var _0x51565c=_0x5d9b74[_0x90507f][_0x297126(0xb43)+'s'][_0x297126(0x895)](',')+_0x4490c7['ZZQFO']+(_0x5d9b74[_0x90507f]['retur'+_0x297126(0x88f)]||_0x4490c7[_0x297126(0x38c)]);_0x2b8e9f[_0x51565c]=_0x4490c7['Mfgam'](_0x2b8e9f[_0x51565c]||0x86*0x3a+0x3*0x15f+-0x1*0x2279,0x8ea*-0x3+0x807+0x12b8);}else{_0x3b5c95['sp']&&(_0x1e84ae['sp']['textC'+_0x297126(0x217)+'t']=_0x4045b1['on']?_0x297126(0x7d0)+_0x297126(0x5f8):_0x297126(0x7d0)+'\x20off',_0x24e2cd['sp'][_0x297126(0x8a0)][_0x297126(0x5bd)+_0x297126(0x50e)]=_0x4e7bd4['on']?_0x13ff5d:'trans'+'paren'+'t',_0x2da9fc['sp']['style']['color']=_0x3d68af['on']?_0x297126(0x900)+'1b':_0x297126(0x2c9)+'f5');if(_0x6d0ea3['fx'])_0x57906e['fx'][_0x297126(0x534)]=_0x4490c7[_0x297126(0x924)](_0x123535,_0x14d558['facto'+'r']);if(_0x1da421['fv'])_0x2b001f['fv'][_0x297126(0x3f1)+_0x297126(0x217)+'t']=_0x2ef950['facto'+'r']['toFix'+'ed'](-0x547+-0x10a2+0x15ea)+'x';}}_0x342884[_0x297126(0x4b1)+_0x297126(0x3d5)]=_0x2b8e9f;}else _0x302114=[];}catch(_0xf8a22d){}return _0x342884;}else _0x46610e=!_0x3db83f,_0x263c86();}function _0x5a8cb4(_0x162d89,_0x1390f3,_0x47ad5f){var _0x5686e3=_0x16065b;if('DkPRw'==='UuUJO'){var _0x47002c=_0x4f4db3['filte'+'r'](function(_0x58c277){var _0x58543e=_0x4a91;return _0x58c277[_0x58543e(0x9e7)]===_0x2d3811;})[0x645*0x4+0xfd3+0x11b*-0x25];_0x4241c6={'type':_0x5bf154,'atMs':_0x538857[_0x5686e3(0x914)]()-_0xd29b77,'originalFunc':!!(_0x47002c&&_0x47002c['hook']&&typeof _0x47002c[_0x5686e3(0x7c3)]['origi'+_0x5686e3(0x491)+'nc']===_0x5686e3(0x4da)+_0x5686e3(0x9c3)),'resolveGameAtFire':!!_0x2672c0(),'gameSourceAtFire':_0x26e24d[_0x5686e3(0x2ec)+'e']};}else{try{var _0x2f7c21=_0x44a8c1[_0x1390f3]||[];for(var _0x5a20f7=0x17*-0x15d+0x21f9*0x1+-0x29e;_0x5a20f7<_0x2f7c21['lengt'+'h'];_0x5a20f7++){if(_0x2f7c21[_0x5a20f7][-0x127*0x20+-0xd4f+0x3230]!==_0x47ad5f)continue;var _0x261443=_0x2f7c21[_0x5a20f7][-0xd42+-0x1*-0x7ad+0x595];if(_0x47ad5f['index'+'Of']('obf')===0x30a+0x272*-0xe+-0x1f32*-0x1){var _0x71a0eb=_0x418104(_0x162d89,_0x261443,_0x47ad5f);if(!_0x71a0eb)return null;_0x71a0eb['o']=_0x261443,_0x71a0eb['k']=_0x47ad5f;var _0x434975=_0x35abd8([_0x71a0eb]);if(!_0x434975[_0x5686e3(0x6db)]['lengt'+'h'])return null;return _0x434975[_0x5686e3(0x6db)][-0x1db7+-0x14ff+0x2*0x195b];}var _0x13fe66=_0x4490c7['NrTiQ'](_0x3f03aa,_0x162d89+_0x261443,_0x47ad5f);if(_0x13fe66===undefined)return null;return{'o':'0x'+_0x261443['toStr'+'ing'](-0x1*0x6f1+-0x229f+0x29a0),'v':_0x13fe66};}}catch(_0x11f41d){}return null;}}function _0x3f239b(){var _0x383805=_0x16065b,_0x48fbd4={};_0x3c996c['ok']=0x17ad+0x1306+-0x1*0x2ab3,_0x3c996c[_0x383805(0xaf9)+'d']=-0x1aff+0x17b2+0xd*0x41,_0x3c996c[_0x383805(0x591)+'rror']=null;var _0x277fb1=Object['keys'](_0x44a8c1);for(var _0x35b31d=0x14ea+0xa62+-0x7d3*0x4;_0x35b31d<_0x277fb1[_0x383805(0x618)+'h'];_0x35b31d++){var _0xdd0333=_0x277fb1[_0x35b31d],_0x5144fa=_0x39f72e[_0xdd0333];if(!_0x5144fa||!_0x5144fa['ptr'])continue;var _0x5dc78a=_0x44a8c1[_0xdd0333]||[],_0x417ff4=[];for(var _0x5451a6=-0x73*0x23+-0x869+0x2*0xc11;_0x5451a6<_0x5dc78a['lengt'+'h'];_0x5451a6++){var _0x99a0ca=_0x5dc78a[_0x5451a6][-0xa35+-0xe9b+0x18d0],_0x47c9e3=_0x5dc78a[_0x5451a6][-0xd30*-0x1+-0x1e4b+-0x36c*-0x5];if(_0x47c9e3['index'+'Of'](_0x4490c7[_0x383805(0x98d)])===-0x1763*0x1+0x5b*-0x51+0x342e){var _0xed807a=_0x418104(_0x5144fa[_0x383805(0x1cd)],_0x99a0ca,_0x47c9e3);if(!_0xed807a)continue;_0xed807a['o']=_0x99a0ca,_0xed807a['k']=_0x47c9e3,_0x417ff4[_0x383805(0xa01)](_0xed807a);}else{var _0x1141d3=_0x4490c7[_0x383805(0x738)](_0x3f03aa,_0x4490c7['EciiO'](_0x5144fa[_0x383805(0x1cd)],_0x99a0ca),_0x47c9e3);if(_0x1141d3===undefined)continue;var _0x600db6={'o':_0x99a0ca,'k':_0x47c9e3,'v':_0x1141d3};if(_0x4490c7['WiyRI'](_0x47c9e3,'v2')||_0x4490c7['WhbWT'](_0x47c9e3,'v3')||_0x47c9e3==='v4'){var _0x3f0bce=_0x4490c7[_0x383805(0xb3a)](_0x47c9e3,'v2')?0xd*-0x185+-0x2642+0x3*0x1357:_0x47c9e3==='v3'?-0x1408+0x2388+-0xf7d:0x418*-0x4+-0xe60+0x2*0xf62,_0x50cd34=_0x392b1a(_0x5144fa['ptr'],_0x99a0ca,_0x3f0bce);_0x50cd34&&(_0x600db6['xyz']=_0x50cd34,_0x600db6['v']=_0x50cd34[0xc0e+0x6*0x593+-0x2d80]);}_0x417ff4[_0x383805(0xa01)](_0x600db6);}}if(_0x417ff4['lengt'+'h']){var _0xa37630=_0x4490c7['zeYzM'](_0x35abd8,_0x417ff4);_0x48fbd4[_0xdd0333]=_0xa37630[_0x383805(0x6db)],_0x135a11[_0xdd0333]={'key':_0xa37630['key'],'sane':_0xa37630['sane'],'checked':_0xa37630['check'+'ed'],'keyConsistent':_0xa37630[_0x383805(0x608)+_0x383805(0x418)+_0x383805(0x56c)],'keySource':_0xa37630[_0x383805(0x78e)+'urce']};}}return _0x48fbd4;}function _0x35abd8(_0x3b718c){var _0x4207ab=_0x16065b,_0x4c815e={'egHgp':function(_0x403740,_0x4a9663){return _0x403740(_0x4a9663);},'jWbLm':function(_0x3e2814,_0x3cd1be,_0x109334){return _0x3e2814(_0x3cd1be,_0x109334);}};if(_0x4490c7[_0x4207ab(0x8f4)]==='TubBv'){var _0x54b528=0xe73+-0x863+0x184*-0x4,_0x1646d3=0x1fcb+-0x839+-0x35e*0x7,_0x522c73=null;for(var _0x1757b9=-0xb03+0xbf*0x2b+0x383*-0x6;_0x1757b9<_0x3b718c[_0x4207ab(0x618)+'h'];_0x1757b9++){if(_0x4207ab(0xb8d)!==_0x4490c7[_0x4207ab(0xa07)]){_0x4c815e['egHgp'](_0x4f3e70,![]),_0x4c815e[_0x4207ab(0x980)](_0x1ffb76,_0x1790cf,-0xadc*-0x1+-0x43*0xd+0x649*-0x1);return;}else{var _0x19b320=_0x3b718c[_0x1757b9];if(_0x19b320['k'][_0x4207ab(0x305)+'Of'](_0x4207ab(0x971))!==0x13a2+-0x113d+-0x265)continue;_0x19b320['v']=_0x1ef87a(_0x19b320['k'],_0x19b320['hidde'+'n'],_0x19b320[_0x4207ab(0xad1)+'Offse'+'t0']),_0x19b320[_0x4207ab(0x589)+'ed']=_0x19b320[_0x4207ab(0xad1)+_0x4207ab(0x94b)+'t0'],_0x19b320['raw']=_0x4490c7[_0x4207ab(0xb68)](_0x4490c7['kPqmr'](_0x4490c7['eSWjO'](_0x4490c7['iBaxb']+_0x19b320['hidde'+'n']+('\x20fake'+'='),_0x19b320[_0x4207ab(0x717)]),_0x19b320[_0x4207ab(0x920)]?_0x4207ab(0x282)+'VE':'')+_0x4207ab(0x9c1)+_0x19b320[_0x4207ab(0xad1)+'Offse'+'t0'],_0x4490c7[_0x4207ab(0x4ae)])+_0x19b320['hex'];if(_0x522c73===null)_0x522c73=_0x19b320[_0x4207ab(0xad1)+'Offse'+'t0'];_0x1646d3++,_0x416bb3(_0x19b320)?(_0x54b528++,_0x19b320[_0x4207ab(0x269)]=!![]):_0x19b320[_0x4207ab(0x269)]=![],delete _0x19b320['alt'];}}return{'rows':_0x3b718c,'key':_0x522c73,'sane':_0x54b528,'checked':_0x1646d3,'keyConsistent':_0x4490c7[_0x4207ab(0x6f0)](_0x5a1eb0,_0x3b718c),'keySource':_0x4490c7[_0x4207ab(0xa72)]};}else{var _0x276eec=_0x2d3026[_0x4a328a],_0x3c126c=_0x4490c7[_0x4207ab(0x659)](_0x4c91c3,_0x463186,_0x3a21b0,_0x276eec[_0x4207ab(0x57e)]);if(!_0x3c126c)return null;var _0x2dd230=new _0x273f7f(_0x3c126c['buffe'+'r'],_0x3c126c['byteO'+_0x4207ab(0x511)],_0x3c126c[_0x4207ab(0x655)+_0x4207ab(0x746)]),_0x3c1939=_0x2dd230[_0x4207ab(0x705)+_0x4207ab(0x481)](_0x276eec['key'],!![]),_0x20d85b=_0x2dd230['getIn'+_0x4207ab(0x481)](_0x276eec['hidde'+'n'],!![]),_0x3f7bf3=_0x2dd230[_0x4207ab(0x2a6)+_0x4207ab(0x34a)](_0x276eec['inite'+'d'])&-0x1c2d+-0x5d*0x49+0x36b3,_0x812637=_0x413dd5===_0x4490c7[_0x4207ab(0x633)]?_0x2dd230['getFl'+'oat32'](_0x276eec[_0x4207ab(0x717)],!![]):_0x1e4e98===_0x4207ab(0x99b)?_0x2dd230[_0x4207ab(0x705)+_0x4207ab(0x481)](_0x276eec['fake'],!![]):_0x2dd230['getUi'+'nt8'](_0x276eec['fake']),_0x50596c=_0x4490c7['Jjptr'](_0x2dd230[_0x4207ab(0x2a6)+'nt8'](_0x276eec[_0x4207ab(0x62e)+'e']),0x21b2+0x106*-0x9+-0x187b);return{'keyAtOffset0':_0x3c1939,'hidden':_0x20d85b,'inited':_0x3f7bf3,'fake':_0x812637,'act':_0x50596c,'hex':_0x2df54f(_0x3c126c),'alt':_0x53aeca===_0x4207ab(0x99b)?_0x4490c7[_0x4207ab(0xab8)](_0x20d85b,_0x812637|0x2*-0x1263+0x2b7+0x220f):null};}}function _0x5a1eb0(_0x26284e){var _0x24b298=_0x16065b,_0x23d4fe={'bnQnQ':function(_0x5a27a1,_0x30b98e){var _0x3ed69d=_0x4a91;return _0x4490c7[_0x3ed69d(0xb2d)](_0x5a27a1,_0x30b98e);}};if(_0x4490c7['WLPDS']('QvEvM',_0x24b298(0x202))){var _0x8d822f={};for(var _0x3da02f=-0x1*-0x18c5+-0x1a26+0x161;_0x3da02f<_0x26284e[_0x24b298(0x618)+'h'];_0x3da02f++){var _0x4557da=_0x26284e[_0x3da02f];if(_0x4490c7[_0x24b298(0x407)](_0x4557da['k']['index'+'Of'](_0x4490c7[_0x24b298(0x98d)]),0xd90+0x1d3*0x1+-0xf63))continue;if(_0x4490c7[_0x24b298(0xb4d)](_0x8d822f[_0x4557da['k']],undefined))_0x8d822f[_0x4557da['k']]=_0x4557da['keyUs'+'ed'];else{if(_0x4490c7[_0x24b298(0x165)](_0x8d822f[_0x4557da['k']],_0x4557da[_0x24b298(0x589)+'ed']))return![];}}return!![];}else return _0x1ee182[_0x24b298(0x50e)](_0x23d4fe[_0x24b298(0x9ee)](_0x50f11e,0x111b+-0x1e5b+-0x1*-0xda4))/(-0x2612+-0x2420+0x1*0x4a96);}function _0x416bb3(_0x51d025){var _0x2369b5=_0x16065b,_0x4004a6=_0x51d025['v'];if(_0x4490c7['IcCAJ'](typeof _0x4004a6,_0x4490c7[_0x2369b5(0xa3b)])||!_0x4490c7['LczIY'](isFinite,_0x4004a6))return![];if(_0x51d025['k']==='obfB')return _0x4004a6===-0xc67*-0x2+-0xa*0x3e+0x1e*-0xbf||_0x4004a6===-0x1*0x26ff+0x1380+-0x34*-0x60;var _0x30ab06=_0x51d025[_0x2369b5(0x717)];if(typeof _0x30ab06!==_0x2369b5(0x3d9)+'r'||!isFinite(_0x30ab06))return!![];if(_0x4490c7['onGMu'](_0x51d025[_0x2369b5(0x920)],0xe7*-0x1+0x1c*-0x10d+-0xf2a*-0x2)){if(_0x2369b5(0xa6c)===_0x4490c7['VeBWc'])return Math[_0x2369b5(0x49c)](_0x4004a6-_0x30ab06)<=Math['max'](-0xb*0x1cd+0x87f+0xb51,Math[_0x2369b5(0x49c)](_0x30ab06)*(0x1a58+-0x1059+0x3*-0x355+0.6));else _0x5ef6a6['textC'+'onten'+'t']=_0x1380f3(_0x40fe1b);}return Math['abs'](_0x4004a6)<0x8777a64+-0x1b205e74+-0x3c1f4*-0x14d4;}function _0x142608(){var _0x539670=_0x16065b;if('ugcYQ'===_0x4490c7['eTaMf'])_0x110b9d[_0x539670(0x480)]=_0x4490c7[_0x539670(0x6a3)]('Playe'+_0x539670(0x645)+_0x539670(0x9f7)+_0x539670(0x998)+_0x539670(0xabe)+_0x539670(0x846)+'re\x20cl'+_0x539670(0x5a2)+_0x539670(0xb1d)+'s\x20ene'+'mies\x20'+_0x539670(0xa9f)+'\x20chec'+'k\x20',_0x4490c7['HwZtY']);else{var _0x3f40bf={};try{var _0x27dcb2=window[_0x539670(0x2bd)+_0x539670(0x8a9)+_0x539670(0x9c0)]&&window[_0x539670(0x2bd)+'WebMo'+'dkit']['Runti'+'me'];_0x3f40bf[_0x539670(0x3fe)]=_0x27dcb2&&_0x27dcb2[_0x539670(0x9f8)+_0x539670(0xb60)+'g']||null,_0x3f40bf['tagMa'+_0x539670(0x3e3)]=!!(_0x27dcb2&&_0x331a86&&_0x27dcb2[_0x539670(0x9f8)+_0x539670(0xb60)+'g']===_0x331a86),_0x3f40bf['runti'+_0x539670(0x33b)+'e']=_0x27dcb2&&_0x27dcb2[_0x539670(0x8ab)]?typeof _0x27dcb2['_game']:'none',_0x3f40bf['plugi'+_0x539670(0xb9c)+_0x539670(0x2a2)+'Expor'+_0x539670(0x8a1)]=!!(_0x1427bd&&_0x1427bd[_0x539670(0xaa1)+'ime']&&_0x4490c7[_0x539670(0x333)](_0x1427bd[_0x539670(0xaa1)+'ime'],_0x27dcb2)),_0x3f40bf[_0x539670(0x90c)+_0x539670(0xb9c)+_0x539670(0x1d7)+'me']=_0x1427bd&&_0x1427bd[_0x539670(0xaa1)+_0x539670(0xaa6)]&&_0x1427bd['_runt'+_0x539670(0xaa6)][_0x539670(0x8ab)]?typeof _0x1427bd[_0x539670(0xaa1)+'ime'][_0x539670(0x8ab)]:'none';}catch(_0x2c278b){'keMQP'===_0x539670(0x1eb)?_0x124b97[_0x539670(0x269)]=![]:_0x3f40bf['error']=String(_0x2c278b&&_0x2c278b['messa'+'ge']||_0x2c278b);}return _0x3f40bf;}}function _0x57b023(){var _0x2b123e=_0x16065b,_0x6ebcfe=[_0x4490c7['ecizK'],_0x4490c7[_0x2b123e(0xb45)],_0x2b123e(0x9b6),_0x4490c7[_0x2b123e(0x438)]],_0x55ef14={};for(var _0x56b874=0xa21*0x1+-0x1*0x71f+-0x181*0x2;_0x4490c7['OAwUQ'](_0x56b874,_0x6ebcfe[_0x2b123e(0x618)+'h']);_0x56b874++){var _0x317dfa=_0x6ebcfe[_0x56b874],_0xfc8fe0=typeof window[_0x317dfa];_0x55ef14[_0x317dfa]=_0x4490c7['WhbWT'](_0xfc8fe0,_0x2b123e(0x688)+_0x2b123e(0x67f))?_0x4490c7['CxTyT']:_0xfc8fe0;}var _0x5c31fe=_0x4d5370();_0x55ef14[_0x2b123e(0x424)+_0x2b123e(0x79c)]=_0x3c996c[_0x2b123e(0x2ec)+'e'];try{_0x55ef14[_0x2b123e(0x839)+_0x2b123e(0x6e7)]=!!(_0x5c31fe&&_0x5c31fe[_0x2b123e(0x9e6)+'e']),_0x55ef14[_0x2b123e(0x9fb)+'8']=!!(_0x5c31fe&&_0x5c31fe['Modul'+'e']&&_0x5c31fe['Modul'+'e']['HEAPU'+'8']),_0x55ef14['heapB'+'ytes']=_0x55ef14[_0x2b123e(0x9fb)+'8']?_0x5c31fe[_0x2b123e(0x9e6)+'e']['HEAPU'+'8'][_0x2b123e(0x618)+'h']:-0x6a*0x4+0xa57*-0x1+0xbff;}catch(_0x49eb58){_0x55ef14[_0x2b123e(0x839)+'dule']=![],_0x55ef14['heapU'+'8']=![],_0x55ef14['heapB'+'ytes']=-0x3*-0x7d3+-0x51*0x9+0xa5*-0x20;}return _0x55ef14['value'+_0x2b123e(0x604)+'er']=typeof _0xea7181,_0x55ef14;}function _0x286b80(){var _0x5cf2da=_0x16065b,_0x2cb3d3={},_0x568a77=_0x3af216();if(!_0x568a77)return _0x2cb3d3;_0x2cb3d3[_0x5cf2da(0xb9b)+'Look@'+_0x5cf2da(0x1cd)]=_0x568a77['mouse'+'Look'];for(var _0x2828da in _0x568a77[_0x5cf2da(0x527)+'s'])_0x2cb3d3[_0x5cf2da(0xb9b)+'Look+'+_0x2828da]=_0x568a77['float'+'s'][_0x2828da];if(_0x568a77['camer'+'a'])_0x2cb3d3[_0x4490c7[_0x5cf2da(0x6cc)]]=_0x568a77['camer'+'a'];return _0x2cb3d3;}function _0x3c83a4(_0x5774e8){var _0x5aab0d=_0x16065b,_0x5dcbae={};for(var _0x5a66bd in _0x5774e8){var _0x261777=_0x5774e8[_0x5a66bd];for(var _0x5a9944=0x115*0x22+-0x516*0x5+-0xb5c;_0x4490c7['yIRiL'](_0x5a9944,_0x261777[_0x5aab0d(0x618)+'h']);_0x5a9944++){_0x5dcbae[_0x5a66bd+_0x5aab0d(0xb5f)+_0x261777[_0x5a9944]['o'][_0x5aab0d(0x6f9)+_0x5aab0d(0x8bc)](-0x1*-0xdf0+0x1b9+-0xf99)]=_0x261777[_0x5a9944]['v'];}}return _0x5dcbae;}function _0x1798f3(_0x605892,_0x11040a){var _0x170984=_0x16065b;if(_0x4490c7['zEgsi']('Uwola',_0x170984(0xba3)))try{_0x36172a['hook'][_0x170984(0x553)+'ed']=![];}catch(_0x884c2f){}else{if(_0x605892==='speed'){if(_0x4490c7[_0x170984(0x2be)](_0x4490c7['yMDDr'],_0x4490c7[_0x170984(0x71d)])){_0x40fd6e(_0x11040a&&typeof _0x11040a['on']===_0x170984(0x737)+'an'?_0x11040a['on']:_0x2c37ef['on'],_0x11040a&&_0x4490c7[_0x170984(0x333)](typeof _0x11040a[_0x170984(0x5c4)+'r'],'numbe'+'r')?_0x11040a[_0x170984(0x5c4)+'r']:_0x2c37ef[_0x170984(0x5c4)+'r']);return;}else _0x2f74ea=_0x4a87ec,_0x1195cb=_0x5968fd[_0x489c6c];}if(_0x605892!==_0x170984(0x760)+_0x170984(0x513))return;var _0x2495d8=_0x3f239b(),_0x175cd3=_0x4490c7['LczIY'](_0x3c83a4,_0x2495d8),_0x124650=_0x286b80();for(var _0x101789 in _0x124650)_0x175cd3[_0x101789]=_0x124650[_0x101789];if(!_0x1cce95){_0x1cce95=_0x175cd3,_0x38cf79=[],_0x4490c7[_0x170984(0x738)](_0x1ddd1b,_0x4490c7['qWhwh'],{'report':_0x14526b()});return;}_0x38cf79=[];for(var _0x1e1c4d in _0x175cd3){var _0x5ae7b5=_0x1cce95[_0x1e1c4d],_0x3242ca=_0x175cd3[_0x1e1c4d];if(_0x4490c7['fCZwq'](_0x5ae7b5,_0x3242ca))_0x38cf79[_0x170984(0xa01)](_0x4490c7[_0x170984(0x55e)](_0x4490c7[_0x170984(0xa0d)](_0x4490c7['UanKL'](_0x4490c7['xujWW'](_0x1e1c4d,':\x20'),_0x5ae7b5),_0x4490c7[_0x170984(0x6c7)]),_0x3242ca));}_0x1cce95=_0x175cd3,_0x4490c7['WYrLT'](_0x1ddd1b,_0x4490c7['qWhwh'],{'report':_0x14526b()});}}var _0x42430d=null;function _0x1dc02e(){var _0x58564b=_0x16065b,_0x3c0be0={'vJDQJ':function(_0x1b2b18,_0x52bce8){return _0x1b2b18+_0x52bce8;},'UzdAG':_0x58564b(0x545)+_0x58564b(0x1f8),'EjMsX':function(_0x23c034,_0x270f2e){return _0x4490c7['mlBAd'](_0x23c034,_0x270f2e);},'MyEGV':_0x58564b(0xb98),'NYHNh':_0x4490c7[_0x58564b(0x7df)],'cjCpo':'#f7ee'+'f5','ZvwLX':function(_0x24f1bd){return _0x4490c7['ppTIJ'](_0x24f1bd);},'ByIGW':'none','JFDDM':_0x4490c7[_0x58564b(0x2f5)],'pOWLk':_0x58564b(0x621)+'ap','dtlgv':_0x58564b(0x5bf)+'n','Muapz':function(_0x148682,_0x4d8f8d){return _0x148682(_0x4d8f8d);},'JwTmA':function(_0x4bc621,_0x4c04c2){return _0x4bc621<_0x4c04c2;},'RCOus':_0x4490c7[_0x58564b(0x4e2)],'aTuab':function(_0x53652c,_0x7f9edd){return _0x53652c===_0x7f9edd;},'rXjkz':function(_0x1d2aea,_0x50dea4){return _0x1d2aea(_0x50dea4);}};if(_0x42430d)return _0x42430d;try{if(!document['body']||!document[_0x58564b(0x4eb)][_0x58564b(0x4b9)+_0x58564b(0x46f)+'d'])return null;if(!document['getEl'+'ement'+'ById'](_0x58564b(0x157)+_0x58564b(0x748)+_0x58564b(0xb27)+'ss')){var _0x1635db=document[_0x58564b(0x965)+'eElem'+_0x58564b(0x56c)](_0x4490c7[_0x58564b(0xb0a)]);_0x1635db['id']='sakur'+_0x58564b(0x748)+_0x58564b(0xb27)+'ss',_0x1635db['textC'+_0x58564b(0x217)+'t']=_0x58564b(0x9dd)+'ra-sw'+'-hud{'+'all:i'+_0x58564b(0xa35)+'l}',(document['head']||document[_0x58564b(0x253)+_0x58564b(0x769)+'ement'])[_0x58564b(0x4b9)+'dChil'+'d'](_0x1635db);}var _0x5bdcad=document['creat'+'eElem'+'ent'](_0x58564b(0x28e));_0x5bdcad['id']='sakur'+'a-sw-'+_0x58564b(0x6ae),_0x5bdcad['style'][_0x58564b(0x617)+'xt']=_0x4490c7['ATucH'](_0x4490c7[_0x58564b(0x47c)]('posit'+'ion:f'+_0x58564b(0x8f0)+_0x58564b(0x4f3)+'8px;b'+_0x58564b(0x216)+':8px;'+'z-ind'+_0x58564b(0x685)+_0x58564b(0x314)+_0x58564b(0x45e)+'ispla'+'y:fle'+_0x58564b(0xa2b)+_0x58564b(0x376)+'ectio'+_0x58564b(0xa7e)+_0x58564b(0xaac)+'ap:4p'+'x;',_0x58564b(0x5bd)+_0x58564b(0x50e)+':rgba'+'(21,1'+_0x58564b(0x972)+'.92);'+'borde'+'r:1px'+_0x58564b(0x59d)+'d\x20rgb'+_0x58564b(0x6d9)+_0x58564b(0x23c)+_0x58564b(0x92b)+'45);b'+_0x58564b(0x7c4)+_0x58564b(0x7ed)+_0x58564b(0x41b)+_0x58564b(0x525)),_0x4490c7[_0x58564b(0xa1b)])+(_0x58564b(0x785)+_0x58564b(0x97d)+_0x58564b(0xa66)+_0x58564b(0x3aa)+_0x58564b(0x780)+'2px\x20#'+_0x58564b(0x2fc)+'ser-s'+_0x58564b(0x6c2)+':none'+_0x58564b(0x7bb)+_0x58564b(0x404)+'ser-s'+_0x58564b(0x6c2)+_0x58564b(0x4f6)+';');var _0x3f59db=_0x58564b(0x754)+_0x58564b(0x8a6)+_0x58564b(0x560)+'2\x22\x20st'+'yle=\x22'+_0x58564b(0x844)+_0x58564b(0x456)+'a99;m'+_0x58564b(0x6eb)+'dth:2'+_0x58564b(0x702)+'\x22></d'+_0x58564b(0x7a7);_0x5bdcad[_0x58564b(0x7b3)+'HTML']=_0x4490c7['gUBgl'](_0x4490c7[_0x58564b(0x9fa)](_0x4490c7[_0x58564b(0x4ee)](_0x4490c7[_0x58564b(0x294)](_0x4490c7[_0x58564b(0x1b6)]('<div\x20'+'data-'+_0x58564b(0x4c3)+_0x58564b(0x327)+'yle=\x22'+_0x58564b(0x25b)+'ay:fl'+_0x58564b(0x21d)+'p:6px'+_0x58564b(0x25c)+_0x58564b(0x6c0)+'ms:ce'+'nter;'+_0x58564b(0xa6d)+_0x58564b(0x273)+_0x58564b(0x615)+_0x58564b(0x277)+_0x58564b(0x99f)+'290px'+_0x58564b(0x6d1)+(_0x58564b(0x496)+'yle=\x22'+_0x58564b(0x844)+':'),_0x5e2156),_0x4490c7['FJeve'])+_0x4490c7[_0x58564b(0x524)]+(_0x58564b(0x844)+_0x58564b(0xad4)+_0x58564b(0x84b)+'order'+'-radi'+_0x58564b(0x98b)+'x;pad'+_0x58564b(0x34e)+_0x58564b(0x3af)+_0x58564b(0x708)+'rsor:'+'point'+_0x58564b(0x22b)+'nt:in'+_0x58564b(0x8ba)+';\x22>Sp'+_0x58564b(0x640)+'ff</b'+_0x58564b(0x825)+'>'),_0x4490c7[_0x58564b(0x40d)])+_0x5e2156+_0x58564b(0x6d1)+_0x4490c7[_0x58564b(0x616)]+_0x4490c7[_0x58564b(0x4ff)]+('color'+':#f7e'+_0x58564b(0x84b)+_0x58564b(0x7c4)+_0x58564b(0x7ed)+_0x58564b(0x98b)+_0x58564b(0x857)+'ding:'+'2px\x207'+'px;cu'+_0x58564b(0x8e8)+_0x58564b(0x6ba)+_0x58564b(0x22b)+'nt:in'+_0x58564b(0x8ba)+_0x58564b(0x823)+_0x58564b(0xb7a)+'/butt'+'on>')+(_0x58564b(0x7ec)+_0x58564b(0xb23)+'ta-a='+_0x58564b(0x7ee)+'\x22\x20sty'+'le=\x22b'+_0x58564b(0xa97)+'ound:'+'trans'+_0x58564b(0xaa2)+_0x58564b(0x207)+_0x58564b(0x7bd)+_0x58564b(0x4f5)+'lid\x20r'+_0x58564b(0xb3e)+_0x58564b(0xaa3)+_0x58564b(0x761)+_0x58564b(0x425)+';')+(_0x58564b(0x844)+':#f7e'+'ef5;b'+_0x58564b(0x7c4)+'-radi'+_0x58564b(0x98b)+_0x58564b(0x857)+_0x58564b(0x34e)+_0x58564b(0x5ba)+'px;cu'+'rsor:'+_0x58564b(0x6ba)+_0x58564b(0x22b)+_0x58564b(0xb50)+_0x58564b(0x8ba)+';\x22>Sn'+_0x58564b(0x387)+_0x58564b(0x825)+'>')+_0x4490c7[_0x58564b(0x89b)],_0x4490c7[_0x58564b(0x9ce)]),_0x4490c7['mfuyN'])+('<div\x20'+'data-'+_0x58564b(0x560)+_0x58564b(0x613)+_0x58564b(0x78f)+_0x58564b(0x79d)+'#8d7a'+'99;ma'+_0x58564b(0x468)+_0x58564b(0x7da)+_0x58564b(0x1f0)+'></di'+'v>')+(_0x58564b(0x754)+'data-'+'a=\x22st'+'2\x22\x20st'+_0x58564b(0x649)+'color'+_0x58564b(0x456)+'a99;m'+'ax-wi'+_0x58564b(0x7e9)+_0x58564b(0x702)+_0x58564b(0x6e2)+_0x58564b(0x7a7)),_0x5bdcad[_0x58564b(0x7b3)+_0x58564b(0x714)]=_0x3f59db;var _0x1a7543=function(_0x1d16fc){var _0x524ad=_0x58564b;return _0x5bdcad[_0x524ad(0x4e6)+_0x524ad(0x291)+_0x524ad(0xb41)](_0x3c0be0[_0x524ad(0x5b7)](_0x3c0be0[_0x524ad(0xa37)]+_0x1d16fc,'\x22]'));},_0x454342=_0x1a7543('st'),_0x2d1151=_0x1a7543(_0x58564b(0x2c6)),_0x2fc2df=_0x1a7543('sp'),_0x38871a=_0x1a7543('fx'),_0x245453=_0x1a7543('fv'),_0x138b78=_0x1a7543(_0x4490c7[_0x58564b(0xa80)]);if(_0x2fc2df)_0x2fc2df['oncli'+'ck']=function(){var _0x261e29=_0x58564b;_0x3c0be0[_0x261e29(0xb82)]('Pvrpf',_0x3c0be0[_0x261e29(0xb3b)])?(_0x4fd346['hasMo'+_0x261e29(0x6e7)]=!!(_0x3fba13&&_0xbdc022['Modul'+'e']),_0x3bf8b0[_0x261e29(0x9fb)+'8']=!!(_0x15ff35&&_0x4cec80['Modul'+'e']&&_0x1de11b['Modul'+'e'][_0x261e29(0x55b)+'8']),_0x290e2e[_0x261e29(0x9d5)+'ytes']=_0x336ceb[_0x261e29(0x9fb)+'8']?_0x91974e['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:0x2508+-0x282*0xe+-0x1ec):_0x40fd6e(!_0x2c37ef['on'],_0x2c37ef['facto'+'r']);};if(_0x38871a)_0x38871a[_0x58564b(0x325)+'ut']=function(){var _0x403555=_0x58564b;_0x40fd6e(_0x2c37ef['on'],parseFloat(_0x38871a[_0x403555(0x534)])||0x1*-0xd7+0x1*0x4f4+-0x41c);};if(_0x1a7543(_0x4490c7[_0x58564b(0x7d6)]))_0x1a7543(_0x58564b(0x983))['oncli'+'ck']=function(){var _0x2c73ed=_0x58564b;_0x4490c7['zeYzM'](_0x1798f3,_0x4490c7[_0x2c73ed(0x447)]);};var _0x5946cf=_0x4490c7[_0x58564b(0x989)](_0x1a7543,_0x58564b(0x451));if(_0x5946cf)_0x5946cf['oncli'+'ck']=function(){var _0x7b8692=_0x58564b,_0x26ac30=(_0x7b8692(0x399)+_0x7b8692(0x3b0))[_0x7b8692(0x1a9)]('|'),_0x501cae=0x1c53*0x1+-0x1*-0xeb6+-0x1df*0x17;while(!![]){switch(_0x26ac30[_0x501cae++]){case'0':_0x5946cf['style']['color']=_0x153506['on']?_0x3c0be0['NYHNh']:_0x3c0be0[_0x7b8692(0x8d0)];continue;case'1':try{var _0x39c804=_0x3c0be0[_0x7b8692(0xb33)](_0x4b4573);if(_0x39c804&&_0x39c804['el'])_0x39c804['el'][_0x7b8692(0x8a0)]['displ'+'ay']=_0x153506['on']?'':_0x7b8692(0xb0d);var _0x42221b=_0x27e57d;if(_0x42221b&&_0x42221b['cv'])_0x42221b['cv'][_0x7b8692(0x8a0)][_0x7b8692(0x25b)+'ay']=_0x153506['on']&&_0x153506[_0x7b8692(0x3a0)]?'':_0x3c0be0['ByIGW'];}catch(_0x22cd4d){}continue;case'2':_0x5946cf[_0x7b8692(0x3f1)+_0x7b8692(0x217)+'t']=!_0x153506['on']?_0x7b8692(0x509)+'ff':_0x153506[_0x7b8692(0x3a0)]?_0x3c0be0[_0x7b8692(0x22e)]:_0x3c0be0['pOWLk'];continue;case'3':if(!_0x153506['on'])_0x153506['on']=!![],_0x153506['boxes']=![];else!_0x153506[_0x7b8692(0x3a0)]?_0x153506[_0x7b8692(0x3a0)]=!![]:_0x153506['on']=![];continue;case'4':_0x5946cf[_0x7b8692(0x8a0)][_0x7b8692(0x5bd)+'round']=_0x153506['on']?_0x5e2156:'trans'+'paren'+'t';continue;}break;}};if(_0x1a7543('fold'))_0x4490c7['KZiKJ'](_0x1a7543,_0x4490c7['NPNLa'])[_0x58564b(0x574)+'ck']=function(){var _0x29b5b2=_0x58564b;if(_0x3c0be0['RCOus']!==_0x3c0be0['RCOus']){_0x25dd2e[_0x29b5b2(0xa7b)]=!!_0x446606;var _0x129bc8=_0x1054cc();if(!_0x129bc8)return;_0x129bc8['class'+_0x29b5b2(0xa9b)]=_0x3c0be0['vJDQJ']('mn-pa'+'nel',_0x416c94[_0x29b5b2(0xa7b)]?_0x3c0be0[_0x29b5b2(0x1e9)]:'');if(_0x37ea45['petal'])_0x4afa68[_0x29b5b2(0x6bf)][_0x29b5b2(0x8a0)]['opaci'+'ty']=_0x2d9e5b[_0x29b5b2(0xa7b)]?'1':'.5';if(_0x3e04e6[_0x29b5b2(0xa7b)]){_0x3c0be0['Muapz'](_0x510b4e,_0xa1e823[_0x29b5b2(0x15d)]);try{var _0x503399=_0x59bdcb['inner'+'Heigh'+'t']||-0x1ce1+-0xf4+0x20f5;if(_0x3c0be0['JwTmA'](_0x503399,0x1f1*-0x8+-0xbd*-0x23+-0x3*0x2a1))_0xfe63d1(![]);}catch(_0x1c9871){}}}else{if(!_0x138b78)return;var _0x26573a=_0x3c0be0['aTuab'](_0x138b78['style']['displ'+'ay'],_0x3c0be0['ByIGW']);_0x138b78[_0x29b5b2(0x8a0)]['displ'+'ay']=_0x26573a?'':_0x3c0be0[_0x29b5b2(0x7f0)],_0x3c0be0[_0x29b5b2(0x6a1)](_0x1a7543,'fold')['textC'+_0x29b5b2(0x217)+'t']=_0x26573a?'-':'+';}};return document[_0x58564b(0x4eb)][_0x58564b(0x4b9)+_0x58564b(0x46f)+'d'](_0x5bdcad),_0x42430d={'el':_0x5bdcad,'st':_0x454342,'st2':_0x2d1151,'sp':_0x2fc2df,'fx':_0x38871a,'fv':_0x245453},_0x42430d;}catch(_0x37df12){return console[_0x58564b(0x7b1)](_0x58564b(0x3ca)+_0x58564b(0x204)+_0x58564b(0x1f7)+'rame\x20'+'HUD\x20d'+'isabl'+'ed',_0x4490c7[_0x58564b(0xa50)](_0x58564b(0x844)+':',_0x5e2156),_0x37df12),null;}}var _0x3c144a=0x71*-0x47+-0x1971+-0x1c65*-0x2;function _0x40fd6e(_0xa1ef61,_0x526104){var _0x749fb3=_0x16065b,_0x4bac1a=_0x2c37ef['on'];_0x2c37ef['on']=!!_0xa1ef61;_0x2c37ef['on']&&!_0x4bac1a&&(_0x526104===undefined||_0x526104===null||_0x4490c7[_0x749fb3(0x86f)](_0x4490c7[_0x749fb3(0x9ef)](Number,_0x526104),0x1edf+-0x2*-0xe4d+-0x3b78))&&(_0x4490c7[_0x749fb3(0x506)]('lcrcp',_0x4490c7['PGUUK'])?_0x526104=_0x3c144a:_0xce5b56['span']=_0x573f2a);_0x2c37ef['facto'+'r']=Math['min'](_0x2c37ef[_0x749fb3(0x331)],Math[_0x749fb3(0x331)](_0x2c37ef['min'],Number(_0x526104)||-0x283*0x1+0x2611*0x1+0x238d*-0x1));if(!_0x2c37ef['on'])_0x419b36={};var _0x2b9caa=_0x4490c7[_0x749fb3(0x6e9)](_0x1dc02e);if(_0x2b9caa){if(_0x2b9caa['sp']){if(_0x4490c7[_0x749fb3(0x5d5)](_0x749fb3(0x925),_0x749fb3(0x925))){if(!_0xbfaf54)return;_0x5cf885=![],_0x347088[_0x749fb3(0x8a0)][_0x749fb3(0x8d4)+'r']=_0x749fb3(0xacf),_0x4490c7[_0x749fb3(0x871)](_0x481a8b);}else _0x2b9caa['sp']['textC'+_0x749fb3(0x217)+'t']=_0x2c37ef['on']?'Speed'+_0x749fb3(0x5f8):_0x749fb3(0x7d0)+_0x749fb3(0x639),_0x2b9caa['sp'][_0x749fb3(0x8a0)][_0x749fb3(0x5bd)+_0x749fb3(0x50e)]=_0x2c37ef['on']?_0x5e2156:_0x4490c7[_0x749fb3(0x5d8)],_0x2b9caa['sp']['style'][_0x749fb3(0x844)]=_0x2c37ef['on']?_0x749fb3(0x900)+'1b':_0x4490c7[_0x749fb3(0x6c4)];}if(_0x2b9caa['fx'])_0x2b9caa['fx'][_0x749fb3(0x534)]=String(_0x2c37ef[_0x749fb3(0x5c4)+'r']);if(_0x2b9caa['fv'])_0x2b9caa['fv']['textC'+_0x749fb3(0x217)+'t']=_0x2c37ef['facto'+'r'][_0x749fb3(0xa39)+'ed'](-0x1*-0x1d7d+0x1812+-0x358e)+'x';}}function _0x158b5d(_0x121aac){var _0x5f2501=_0x16065b,_0x4ee991={'Hudxd':function(_0x4b44c8,_0x188ac4){return _0x4b44c8+_0x188ac4;},'otHon':function(_0x5ec0c3,_0x589a09){var _0x2c732e=_0x4a91;return _0x4490c7[_0x2c732e(0x40a)](_0x5ec0c3,_0x589a09);}};if(_0x5f2501(0x8c9)===_0x4490c7['BfRju']){if(_0x2b56dc[_0xde53d3][_0x5f2501(0x323)+'rs']['lengt'+'h']>=_0x5752bc)_0x20dd0a[_0x5f2501(0xa01)](_0x1d99cd[_0x5688fc]);}else{var _0x25075b=_0x1dc02e();if(!_0x25075b||!_0x25075b['st'])return;try{if(!_0x4490c7['VEAeD'](_0x16ad62)&&!_0x3ebaa9){if(_0x25075b['el'])_0x25075b['el'][_0x5f2501(0x8a0)][_0x5f2501(0x25b)+'ay']='none';return;}if(_0x25075b['el'])_0x25075b['el'][_0x5f2501(0x8a0)][_0x5f2501(0x25b)+'ay']='';var _0x560ea0=Object[_0x5f2501(0x4f0)](_0x121aac&&_0x121aac['insta'+'nces']||{})['lengt'+'h'],_0x22b035=_0x121aac&&_0x121aac[_0x5f2501(0x451)]||null,_0xb38249=_0x22b035?_0x22b035['enemy'+_0x5f2501(0xaf3)]||-0x9*-0xaf+-0xb*0x278+0x11b*0x13:-0x19*-0xdb+-0x16*0x9f+-0x7b9,_0x565380=_0x22b035?_0x22b035['botCo'+_0x5f2501(0x390)]||-0x1167+0xd02+0x465:0x138f+-0x1c55+0x8c6,_0xe1d62c=_0x2a1ad9?_0x4490c7['XNDPt']((_0x2a1ad9['buffe'+'r'][_0x5f2501(0x655)+_0x5f2501(0x746)]/(-0x1*0x1f3eeb+-0x1d3*0x9f5+0x4168da))['toFix'+'ed'](-0x1bbb+0x184e+0x36d),'MB'):_0x5f2501(0x29b)+'m',_0x4978ba=_0x4490c7[_0x5f2501(0xa67)](_0x4490c7[_0x5f2501(0x58b)](_0x4490c7['qZFSX'](_0x4490c7[_0x5f2501(0x987)](_0x4490c7[_0x5f2501(0x2fe)](_0x4490c7['JUFyo']('v',_0x121aac&&_0x121aac['versi'+'on']||_0x383cde)+_0x4490c7[_0x5f2501(0xb0e)],_0x121aac&&_0x121aac['hooks'+'Appli'+'ed']||-0x359*0x5+0x2*-0xa7c+-0xc5*-0x31)+'/'+(_0x121aac&&_0x121aac[_0x5f2501(0x541)+'Total']||0x152e*0x1+0x402+-0x1930)+(_0x5f2501(0xa65)+'s\x20'),_0x560ea0)+_0x4490c7['fAZpr'],_0xe1d62c),_0x5f2501(0x27c)+_0x5f2501(0x368)),_0x316e84);_0x25075b['st'][_0x5f2501(0x3f1)+_0x5f2501(0x217)+'t']=_0x4978ba;var _0x1cdde6=_0x25075b['st2'];if(_0x1cdde6){if(_0x4490c7[_0x5f2501(0x6b7)]!==_0x4490c7[_0x5f2501(0x6b7)]){var _0x1149e0=_0x433d25[_0x53c682];for(var _0xd53aee=-0x1*-0x237b+0x1498+-0x3813;_0xd53aee<_0x1149e0[_0x5f2501(0x618)+'h'];_0xd53aee++){_0x22386e[_0x4ee991['Hudxd'](_0x4ee991['otHon'](_0x4e89ca,_0x5f2501(0xb5f)),_0x1149e0[_0xd53aee]['o'][_0x5f2501(0x6f9)+_0x5f2501(0x8bc)](-0x1ea*-0x14+0xea*-0xf+0x1*-0x1882))]=_0x1149e0[_0xd53aee]['v'];}}else _0x1cdde6['textC'+_0x5f2501(0x217)+'t']=_0xb38249>0x135*0xf+-0x1108+0x5*-0x37?_0x4490c7['srDxH']+_0xb38249+(_0x565380?'\x20+\x20'+_0x565380+'\x20bots':'')+(_0x22b035&&_0x22b035['camer'+'a']?_0x5f2501(0x452)+'\x20'+_0x22b035['camer'+'aFrom']:_0x4490c7['jKQNZ']):'no\x20en'+'emies'+'\x20yet\x20'+'(lobb'+'y?)\x20\x20'+'cam\x20'+(_0x22b035&&_0x22b035['camer'+'a']?_0x22b035[_0x5f2501(0xa64)+_0x5f2501(0x234)]:'-'),_0x1cdde6[_0x5f2501(0x8a0)]['color']=_0xb38249>-0x26ce*0x1+-0x1210*-0x1+0x14be*0x1?'#7ee0'+'a8':'#8d7a'+'99';}}catch(_0x15278d){}}}window['addEv'+_0x16065b(0x835)+_0x16065b(0x6d2)+'r'](_0x16065b(0x548)+'wn',function(_0x7c5300){var _0x53db5a=_0x16065b,_0x394d4f={'FiAuR':function(_0x5e4b4d){return _0x5e4b4d();}};if(_0x4490c7['kCzII'](_0x4490c7['pXjdW'],_0x53db5a(0x190))){if(!_0x7c5300)return;try{if(_0x4490c7['pwKgF'](_0x4490c7[_0x53db5a(0x585)],'MBPVm'))_0x3ad61a['fillS'+_0x53db5a(0x6a9)]=_0x4490c7[_0x53db5a(0x36f)],_0x57f03a['font']='10px\x20'+'ui-mo'+_0x53db5a(0xa81)+_0x53db5a(0x6a6)+_0x53db5a(0x45a)+'s,mon'+'ospac'+'e',_0x278d75[_0x53db5a(0x37d)+_0x53db5a(0x60a)](_0x4490c7[_0x53db5a(0x8f9)](_0xb87d23[_0x53db5a(0x50e)](_0x2c6f4d['d']||-0x1*0x1e16+-0x1*0x108f+0x2ea5),'m'),_0x47d37c-_0x9aa351/(0xc26*-0x1+0x16a+-0xb*-0xfa),_0x203c23-_0x34d608/(0x63f*0x1+0x587*-0x1+-0xd*0xe)-(0x1f9f*0x1+0x1f4e+-0x3eea));else{if(_0x4490c7['qCupN'](_0x7c5300[_0x53db5a(0x9ca)],'F9')){_0x7c5300['preve'+'ntDef'+'ault'](),_0x1798f3(_0x53db5a(0x760)+_0x53db5a(0x513));return;}if(_0x4490c7[_0x53db5a(0x713)](_0x7c5300[_0x53db5a(0x9ca)],'F7')){if(_0x53db5a(0x99a)!==_0x4490c7['pxqQA']){_0x7c5300[_0x53db5a(0x242)+_0x53db5a(0x3b9)+'ault'](),_0x40fd6e(!_0x2c37ef['on'],_0x2c37ef[_0x53db5a(0x5c4)+'r']);return;}else _0x3724d8['execC'+'omman'+'d']('copy'),_0x394d4f['FiAuR'](_0xab21c0);}if(_0x7c5300[_0x53db5a(0x9ca)]==='F8'){_0x7c5300['preve'+_0x53db5a(0x3b9)+_0x53db5a(0x646)](),_0x40fd6e(_0x2c37ef['on'],_0x4490c7['amPtL'](_0x2c37ef[_0x53db5a(0x5c4)+'r'],0x7b*0x3+-0x19eb+0x187a+0.5));return;}if(_0x7c5300['code']==='F6'){_0x7c5300['preve'+_0x53db5a(0x3b9)+'ault'](),_0x40fd6e(_0x2c37ef['on'],_0x4490c7[_0x53db5a(0xa33)](_0x2c37ef[_0x53db5a(0x5c4)+'r'],-0x7ac*0x5+0xdf3*0x1+0x1869+0.5));return;}if(_0x4490c7[_0x53db5a(0xa04)](_0x7c5300['code'],_0x4490c7[_0x53db5a(0x944)])){_0x7c5300['preve'+_0x53db5a(0x3b9)+'ault'](),_0x4490c7['yJfJm'](_0x5f554b,!_0x15e472['open']);return;}if(_0x4490c7[_0x53db5a(0x1c5)](_0x7c5300[_0x53db5a(0x9ca)],_0x53db5a(0x214)+_0x53db5a(0x75e)+'ht')){_0x7c5300['preve'+_0x53db5a(0x3b9)+'ault'](),_0x17963f['fov']=Math[_0x53db5a(0x63e)](0x981*0x2+-0x1262+-0x4*0x5,_0x17963f['fov']+(0x584+0x172b+-0x1cad*0x1)),_0x25a69a();return;}if(_0x4490c7[_0x53db5a(0xb4d)](_0x7c5300[_0x53db5a(0x9ca)],_0x4490c7[_0x53db5a(0x720)])){_0x7c5300[_0x53db5a(0x242)+_0x53db5a(0x3b9)+_0x53db5a(0x646)](),_0x17963f[_0x53db5a(0x530)]=Math[_0x53db5a(0x331)](0x4b1+-0x2331+-0x2*-0xf4f,_0x4490c7[_0x53db5a(0xb00)](_0x17963f['fov'],0x1*-0x130d+0x175f+-0x5c*0xc)),_0x25a69a();return;}}}catch(_0x39f79e){}}else{var _0x294af3=_0x4490c7['itXaU'](_0x12857d[-0xfee+-0x609+-0x15f7*-0x1],_0x75bfb2[_0x53db5a(0x321)][-0x1*0x1273+0x5*0x607+-0xbb0]),_0x5eaf5d=_0x5e4728[0x1916+-0x1fdf+0x6cb]-_0x3eb3a4[_0x53db5a(0x321)][-0x1*0x2122+-0x6b*0x5+0x233b];_0x35f8e8['d']=_0x2326df[_0x53db5a(0x8fd)](_0x4490c7[_0x53db5a(0xafb)](_0x294af3,_0x294af3)+_0x5eaf5d*_0x5eaf5d),_0x6c623c['beari'+'ng']=_0x4490c7[_0x53db5a(0xafb)](_0x1493b7[_0x53db5a(0x52c)](_0x294af3,_0x5eaf5d),0x2d2*-0x7+0x22*0x7e+0x3b6)/_0xcd1749['PI'];}},!![]);var _0x153506={'on':!![],'span':0x50,'boxes':![]};function _0x3af216(){var _0x34b45d=_0x16065b,_0x3706bc=_0x24ab5f[_0x34b45d(0x1f6)+_0x34b45d(0x33a)+'orkSy'+'nc']||{},_0x59dd5f=Object['keys'](_0x3706bc);for(var _0x2d2e70=-0x260b*-0x1+-0x1075+-0x1596;_0x2d2e70<_0x59dd5f[_0x34b45d(0x618)+'h'];_0x2d2e70++){var _0x507dd4=_0x3706bc[_0x59dd5f[_0x2d2e70]]['ptr'],_0x1a4af2=_0x3f03aa(_0x507dd4+(-0x989*0x3+0x2027*0x1+-0x35c),_0x4490c7['daItW']);if(!_0x1a4af2)continue;var _0x528544=_0x44a8c1[_0x34b45d(0xb9b)+'Look']||[],_0x524dbc={'mouseLook':'0x'+(_0x1a4af2>>>-0x13b1+0x971+0xa40)['toStr'+'ing'](0x373*0xa+0x577+0x7*-0x5b3),'floats':{},'camera':null,'vec2':null};for(var _0x4c30d2=-0x222+0x297*-0x6+0x3*0x5e4;_0x4c30d2<_0x528544[_0x34b45d(0x618)+'h'];_0x4c30d2++){if(_0x528544[_0x4c30d2][-0xd13+-0x2ef+0x1003]!==_0x34b45d(0xb59))continue;_0x524dbc['float'+'s']['0x'+_0x528544[_0x4c30d2][0x1d61+-0x17*-0x9d+-0x2b7c]['toStr'+'ing'](-0x3c4+-0xa67+-0x1*-0xe3b)]=_0x3f03aa(_0x1a4af2+_0x528544[_0x4c30d2][-0xd4d+0x3e6+0x967],_0x4490c7['sAIdJ']);}var _0xb3530f=_0x3f03aa(_0x1a4af2+(-0x23*0x31+-0x208d+-0x57*-0x74),_0x4490c7[_0x34b45d(0x5af)]);if(_0xb3530f)_0x524dbc['camer'+'a']=_0x4490c7['UeFbO']('0x',_0x4490c7[_0x34b45d(0x88a)](_0xb3530f,0x227c+-0x3f6+-0x1e86)['toStr'+_0x34b45d(0x8bc)](-0x1de7*-0x1+-0x1263+0xb74*-0x1));var _0x240ae4=_0x4490c7[_0x34b45d(0x659)](_0x392b1a,_0x1a4af2,-0x1a*0x38+-0x207c*0x1+0x6b*0x5c,0x129a*0x1+0x1*0x21cf+-0x3467);if(_0x240ae4)_0x524dbc['vec2']=_0x240ae4;return _0x524dbc;}return null;}var _0xe22e2b=_0x16065b(0x157)+_0x16065b(0x748)+_0x16065b(0x530),_0x17963f={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{if(_0x4490c7[_0x16065b(0x9d4)](_0x4490c7[_0x16065b(0x5ef)],_0x4490c7[_0x16065b(0x445)])){var _0x1e173a=_0x861fc1[_0x16065b(0x954)](this,arguments);try{if(_0x1e173a&&typeof _0x1e173a['then']===_0x16065b(0x4da)+'ion')_0x1e173a['then'](_0x1c2044,function(){});else _0x4490c7[_0x16065b(0x3c6)](_0x23985b,_0x1e173a);}catch(_0x122adc){}return _0x1e173a;}else{var _0x392686=localStorage['getIt'+'em'](_0xe22e2b);if(_0x392686)_0x17963f[_0x16065b(0x530)]=Math[_0x16065b(0x63e)](-0x1327+-0x1b2c+-0x47*-0xa9,Math[_0x16065b(0x331)](-0x29*-0x1+-0x50f*-0x2+0x9*-0x121,parseFloat(_0x392686)||0x5*0x36b+-0x731*-0x5+-0x34b2));}}catch(_0x507f8f){}function _0x25a69a(){var _0x3234de=_0x16065b;if(_0x3234de(0x1c3)===_0x3234de(0x8da))return _0x4490c7['cfqHl'](_0x1e0608['v'],_0x14d2d7)&&_0x2488aa(_0x3e582b['v']);else try{_0x4490c7[_0x3234de(0xb5e)]!==_0x3234de(0xab5)?localStorage[_0x3234de(0x340)+'em'](_0xe22e2b,String(_0x17963f['fov'])):_0x4abc40['syncs'][_0x37dcdf]();}catch(_0x54fc87){}}function _0x178092(){var _0x36dd58=_0x16065b;if(_0x4490c7[_0x36dd58(0x94c)]===_0x36dd58(0xb02)){if(_0x2f2d1c)_0x1ba1c2[_0x36dd58(0x3f1)+_0x36dd58(0x217)+'t']='Copie'+'d';}else{var _0x232fdd=_0x3af216();if(!_0x232fdd||!_0x232fdd['mouse'+_0x36dd58(0x756)])return null;var _0x3df386=parseInt(_0x232fdd[_0x36dd58(0x3d7)+'Look'],0x15a7+0x2*0x48f+-0x463*0x7),_0x595791=_0x3f03aa(_0x3df386+(-0x1c2b*0x1+-0x10fb+0x2d3e),_0x36dd58(0xb59)),_0x59a5c4=_0x4490c7[_0x36dd58(0x9f4)](_0x3f03aa,_0x4490c7[_0x36dd58(0x887)](_0x3df386,0x69e+-0x29e*0x2+-0x146),'f32');if(typeof _0x595791!==_0x36dd58(0x3d9)+'r'||_0x4490c7['zEgsi'](typeof _0x59a5c4,_0x36dd58(0x3d9)+'r'))return null;return{'pitch':_0x595791+_0x17963f[_0x36dd58(0x800)+'Off'],'yaw':_0x59a5c4+_0x17963f[_0x36dd58(0x57c)+'f']};}}function _0x14687d(_0x2be320,_0x5d9984,_0xe19a3c,_0x30dbda){var _0xafa31b=_0x16065b;if(_0x4490c7[_0xafa31b(0x5d5)]('lNDnH',_0x4490c7[_0xafa31b(0x213)])){var _0x14eff6=_0x4490c7[_0xafa31b(0xab9)](_0x178092);if(!_0x14eff6)return null;var _0x27ad63=_0x4490c7[_0xafa31b(0x401)](_0x14eff6[_0xafa31b(0x800)]*Math['PI'],0xbb*-0x2f+0x174a+-0xbbf*-0x1),_0x247455=_0x4490c7['PxWhJ'](_0x14eff6[_0xafa31b(0x209)]*Math['PI'],-0x5ba+-0x10f*0x3+-0x99b*-0x1),_0x30c2a=Math[_0xafa31b(0x80b)](_0x27ad63),_0x2d651f=Math[_0xafa31b(0xb7e)](_0x247455)*_0x30c2a,_0x27fea2=-Math[_0xafa31b(0xb7e)](_0x27ad63),_0x39d8c8=_0x4490c7[_0xafa31b(0x9b1)](Math['cos'](_0x247455),_0x30c2a),_0x21f025=_0x39d8c8,_0x8d1000=0x21*0xac+-0x305*0x7+-0x35*0x5,_0x1821b9=-_0x2d651f,_0x4a4e6b=_0x5d9984[0x2*0xd8d+0x19f0+0x3e*-0xdb]-_0x2be320[0x255*0x1+-0x1615*-0x1+-0x186a],_0x4081ef=_0x5d9984[-0x22e3+0x1704+0xbe0]-_0x2be320[-0x1d7*0xa+-0x4ad+0x1714],_0x463b70=_0x5d9984[0x211d+-0xe50+-0x12cb]-_0x2be320[-0x6f*-0x3+-0x1*-0x11d9+-0x1324],_0x45cccd=_0x4a4e6b*_0x2d651f+_0x4490c7[_0xafa31b(0x650)](_0x4081ef,_0x27fea2)+_0x463b70*_0x39d8c8;if(_0x4490c7[_0xafa31b(0x450)](_0x45cccd,0x2*-0x6a+-0xf6*-0x7+-0x5e6+0.05))return null;var _0x5dbbf7=_0x4490c7['UeFbO'](_0x4a4e6b*_0x21f025,_0x4081ef*_0x8d1000)+_0x463b70*_0x1821b9,_0x314656=_0x4490c7[_0xafa31b(0x6d5)](_0x4a4e6b,_0x4490c7[_0xafa31b(0xa2d)](_0x8d1000*_0x39d8c8,_0x4490c7[_0xafa31b(0xab1)](_0x1821b9,_0x27fea2)))+_0x4490c7[_0xafa31b(0x4fd)](_0x4081ef,_0x1821b9*_0x2d651f-_0x21f025*_0x39d8c8)+_0x4490c7[_0xafa31b(0x36d)](_0x463b70,_0x21f025*_0x27fea2-_0x8d1000*_0x2d651f),_0x14c4b5=_0x4490c7[_0xafa31b(0x31c)](_0xe19a3c,_0x30dbda),_0x40e33f=_0x4490c7['pwPIU'](_0x17963f['fov'],Math['PI'])/(-0x53*0x3a+-0x163f+0x3*0xdeb),_0x28f94b=Math[_0xafa31b(0x417)](_0x40e33f/(0x2178+0x11cb*0x1+-0x3341)),_0x26536=_0x4490c7[_0xafa31b(0x959)](_0x5dbbf7,_0x45cccd)/(_0x28f94b*_0x14c4b5),_0x3b495d=_0x4490c7['PDOBq'](_0x314656/_0x45cccd,_0x28f94b);if(_0x26536<-(-0x1228+-0x16a6+0x28cf+0.6000000000000001)||_0x26536>0x23b1+-0x1*0x6da+0x1cd6*-0x1+0.6000000000000001||_0x3b495d<-(-0x1d24+-0x1f9*-0x7+-0x12e*-0xd+0.6000000000000001)||_0x3b495d>0x1782+-0x778*0x2+0x11*-0x81+0.6000000000000001)return null;return{'x':_0x4490c7['VHHOJ'](_0x4490c7[_0xafa31b(0x6ec)](_0x26536,0x225+0x497*-0x1+0x272+0.5)+(0x1209+0x595*0x5+-0x2df2+0.5),_0xe19a3c),'y':(0x2f*-0x97+-0xf3f+0x2af8+0.5-_0x3b495d*(-0x10e9*0x1+0x4a*-0x69+0xfc1*0x3+0.5))*_0x30dbda,'z':_0x45cccd};}else{if(_0x144983['open'])_0x503514(!![]);}}var _0x15e472={'open':![],'cat':_0x16065b(0x730)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x1457f3=_0x16065b(0x157)+'a-sw-'+_0x16065b(0x981)+'pos',_0x3ebaa9=null,_0x3799fb=[{'id':_0x16065b(0x730)+'t','label':'CMB'},{'id':_0x4490c7[_0x16065b(0x3a1)],'label':_0x4490c7[_0x16065b(0x6bd)]},{'id':'value'+'s','label':_0x16065b(0xb3d)},{'id':_0x4490c7[_0x16065b(0x1e1)],'label':_0x16065b(0x569)}],_0x1eef45=_0x4490c7['PONCg'](_0x4490c7[_0x16065b(0x9f9)](_0x4490c7[_0x16065b(0xa46)](_0x4490c7[_0x16065b(0x5f1)](_0x4490c7[_0x16065b(0x389)](_0x4490c7['UanKL'](_0x4490c7['avase'](_0x4490c7[_0x16065b(0x891)](_0x4490c7[_0x16065b(0xaad)](_0x4490c7[_0x16065b(0x59f)](_0x4490c7['dwaDC'](_0x4490c7[_0x16065b(0x6af)](_0x4490c7['jnPIr'](_0x4490c7[_0x16065b(0xb84)](_0x4490c7['xIRVd'](_0x4490c7[_0x16065b(0x580)](_0x4490c7[_0x16065b(0x941)](_0x4490c7[_0x16065b(0x735)](_0x4490c7[_0x16065b(0xaf5)](_0x4490c7[_0x16065b(0xa16)](_0x4490c7[_0x16065b(0x8c5)](_0x4490c7[_0x16065b(0x3f2)](_0x4490c7[_0x16065b(0xa45)](_0x4490c7['STXjf'],_0x4490c7['Fxgrd'])+_0x4490c7['rHGhx'],_0x4490c7[_0x16065b(0x2ae)])+_0x4490c7[_0x16065b(0x7d9)]+(_0x16065b(0x8e0)+_0x16065b(0xa17)+_0x16065b(0x955)+'form:'+_0x16065b(0x955)+'lateY'+'(18px'+_0x16065b(0x805)+'nter-'+_0x16065b(0x7bc)+'s:non'+_0x16065b(0xb10)+_0x16065b(0x1b1)+_0x16065b(0x6d8)+_0x16065b(0x342)+_0x16065b(0xa76)+_0x16065b(0x84f)+',tran'+_0x16065b(0x6c5)+_0x16065b(0x949)+_0x16065b(0xa87)+'c-bez'+_0x16065b(0x4d6)+'22,1,'+_0x16065b(0xad8)+');')+_0x4490c7[_0x16065b(0x566)]+('#saku'+_0x16065b(0x8ac)+'nu-ro'+_0x16065b(0x3d8)+'-pane'+_0x16065b(0x94d)+_0x16065b(0x884)+_0x16065b(0x342)+_0x16065b(0x701)+_0x16065b(0x81a)+_0x16065b(0x5ca)+_0x16065b(0x200)+_0x16065b(0x410)+_0x16065b(0xa98)+_0x16065b(0x1e2)+_0x16065b(0x21f))+(_0x16065b(0x719)+_0x16065b(0xb71)+'ispla'+'y:fle'+_0x16065b(0xa2b)+'x-dir'+_0x16065b(0x931)+'n:col'+_0x16065b(0x79b)+'lign-'+'items'+_0x16065b(0x7c5)+_0x16065b(0xa36)+_0x16065b(0x5e0)+';widt'+'h:62p'+_0x16065b(0xa2b)+_0x16065b(0x8cb)+_0x16065b(0x206)+'ding:'+'12px\x20'+'0;')+('borde'+'r-rad'+_0x16065b(0x674)+_0x16065b(0x7b2)+_0x16065b(0xa97)+_0x16065b(0x53c)+_0x16065b(0x546)+'255,2'+_0x16065b(0x196)+'5,.02'+'5);bo'+'x-sha'+'dow:i'+_0x16065b(0x66b)+_0x16065b(0x335)+'\x201px\x20'+'rgba('+_0x16065b(0x91f)+_0x16065b(0x196)+'5,.05'+_0x16065b(0x4e4)),_0x4490c7[_0x16065b(0xa13)])+(_0x16065b(0x5fb)+_0x16065b(0xb54)+'vg{wi'+'dth:2'+'5px;h'+'eight'+_0x16065b(0x6f3)+_0x16065b(0x434)+'flow:'+_0x16065b(0x6f2)+'le;fi'+'lter:'+_0x16065b(0x570)+_0x16065b(0x38d)+_0x16065b(0x5d1)+_0x16065b(0x262)+_0x16065b(0x546)+_0x16065b(0x5c3)+_0x16065b(0x30c)+'7,.8)'+_0x16065b(0x4e4)),_0x16065b(0x856)+_0x16065b(0x220)+_0x16065b(0x2aa)+_0x16065b(0x706)+';alig'+'n-ite'+'ms:ce'+_0x16065b(0x673)+_0x16065b(0x9e8)+'fy-co'+_0x16065b(0x707)+':cent'+'er;wi'+_0x16065b(0x24f)+'2px;h'+_0x16065b(0x363)+_0x16065b(0x1b4)+_0x16065b(0xa7f)+_0x16065b(0x470)+'borde'+'r-rad'+_0x16065b(0x674)+_0x16065b(0x23f))+(_0x16065b(0x5bd)+_0x16065b(0x50e)+':tran'+_0x16065b(0x7db)+_0x16065b(0x48e)+'lor:r'+_0x16065b(0xb3e)+_0x16065b(0x30a)+_0x16065b(0x55f)+_0x16065b(0x43e)+'curso'+_0x16065b(0x42e)+_0x16065b(0x673)+_0x16065b(0x4cf)+'size:'+'10px;'+'font-'+_0x16065b(0x3ba)+'t:700'+_0x16065b(0x2dc)+_0x16065b(0x1e7)+_0x16065b(0x311)+_0x16065b(0x8ba)+';}')+_0x4490c7[_0x16065b(0x777)],'.mn-t'+_0x16065b(0x8c7)+'tive{'+_0x16065b(0x844)+_0x16065b(0x283)+_0x16065b(0xb2e)+'ackgr'+_0x16065b(0x53c)+_0x16065b(0x546)+'255,1'+'07,15'+_0x16065b(0xaee)+';}'),'.mn-m'+'ain{f'+'lex:1'+';min-'+_0x16065b(0x1a4)+_0x16065b(0x47a)+'splay'+_0x16065b(0x706)+';flex'+'-dire'+_0x16065b(0x2f8)+_0x16065b(0x68c)+_0x16065b(0xa0a))+(_0x16065b(0x856)+'op{di'+_0x16065b(0x2aa)+_0x16065b(0x706)+';alig'+'n-ite'+_0x16065b(0x2b0)+'nter;'+'gap:1'+'2px;p'+'addin'+_0x16065b(0x4c0)+'\x206px\x20'+'12px;'+_0x16065b(0x507)+_0x16065b(0x8c8)+_0x16065b(0x85b)+_0x16065b(0x2b6))+('.mn-t'+_0x16065b(0x18b)+_0x16065b(0x56d)+_0x16065b(0x223)+_0x16065b(0x2bf)+'th:0;'+'}')+_0x4490c7[_0x16065b(0x909)]+(_0x16065b(0x719)+'ub{fo'+'nt-si'+_0x16065b(0x8f8)+_0x16065b(0xac3)+'acity'+_0x16065b(0x564))+(_0x16065b(0x652)+'lose{'+_0x16065b(0x25b)+'ay:gr'+'id;pl'+'ace-i'+'tems:'+_0x16065b(0x16f)+'r;wid'+'th:28'+_0x16065b(0x7f8)+_0x16065b(0x867)+_0x16065b(0x8cc)+'borde'+'r:0;b'+'order'+_0x16065b(0x7ed)+_0x16065b(0x722)+_0x16065b(0xa2f)+'kgrou'+_0x16065b(0x5dd)+_0x16065b(0x8b4)+_0x16065b(0x38b))+(_0x16065b(0x844)+_0x16065b(0xb92)+'rit;o'+'pacit'+_0x16065b(0x9da)+';curs'+_0x16065b(0x88c)+_0x16065b(0x410)+';}'),_0x4490c7['EnIFZ']),'.mn-c'+_0x16065b(0x881)+_0x16065b(0xaea)+_0x16065b(0x99f)+'14px;'+_0x16065b(0x8be)+'t:14p'+'x;fil'+_0x16065b(0xb96)+_0x16065b(0x4c5)+'oke:c'+'urren'+'tColo'+'r;str'+'oke-w'+_0x16065b(0x99f)+'2;str'+_0x16065b(0x782)+_0x16065b(0x337)+_0x16065b(0x374)+_0x16065b(0x547))+_0x4490c7[_0x16065b(0xad5)],_0x4490c7['aVpmR'])+_0x4490c7[_0x16065b(0xb6c)],_0x4490c7[_0x16065b(0x975)])+(_0x16065b(0x279)+'ard{b'+'order'+_0x16065b(0x7ed)+'us:12'+_0x16065b(0x745)+_0x16065b(0x236)+_0x16065b(0x17e)+_0x16065b(0xb3e)+_0x16065b(0x196)+_0x16065b(0xba1)+_0x16065b(0x51f)+');box'+_0x16065b(0x442)+_0x16065b(0x771)+_0x16065b(0x842)+_0x16065b(0xb9f)+'1px\x20r'+_0x16065b(0xb3e)+_0x16065b(0x196)+_0x16065b(0xba1)+_0x16065b(0xaa7)+';}')+(_0x16065b(0x279)+'ard.o'+'n{bac'+_0x16065b(0x432)+_0x16065b(0x99c)+_0x16065b(0x5a7)+'5,255'+',255,'+'.04);'+_0x16065b(0x785)+'hadow'+_0x16065b(0xa2e)+'t\x200\x200'+'\x200\x201p'+_0x16065b(0x2c1)+_0x16065b(0x6d9)+_0x16065b(0x5c5)+'157,.'+_0x16065b(0x9ac)),_0x4490c7['ZGNVn']),_0x16065b(0x279)+_0x16065b(0x853)+_0x16065b(0x1b5)+'flex:'+_0x16065b(0x37f)+_0x16065b(0x423)+_0x16065b(0x3d4)),_0x4490c7['EDMcE']),_0x4490c7['xDbKo']),'.sk-m'+_0x16065b(0xa54)+_0x16065b(0x636)+_0x16065b(0x854)+'12px\x20'+_0x16065b(0x951)+'}')+_0x4490c7[_0x16065b(0x35c)]+_0x4490c7[_0x16065b(0x9bd)]+(_0x16065b(0x8c1)+_0x16065b(0x51c)+_0x16065b(0xb36)+_0x16065b(0x9c9)+_0x16065b(0x8c4)+_0x16065b(0x5f5)+_0x16065b(0xb47)+',242,'+'.75);'+'}')+('.sk-h'+_0x16065b(0x2bb)+_0x16065b(0x2c5)+_0x16065b(0x88b)+_0x16065b(0x9b0)+_0x16065b(0x969)+_0x16065b(0x552)+_0x16065b(0xac3)+_0x16065b(0x342)+_0x16065b(0x564))+(_0x16065b(0x7ad)+_0x16065b(0xa52)+'{posi'+_0x16065b(0x7b4)+'relat'+_0x16065b(0xad6)+_0x16065b(0x99f)+_0x16065b(0xb99)+'heigh'+_0x16065b(0xa2c)+'x;bor'+'der:0'+';bord'+_0x16065b(0xb06)+_0x16065b(0x7b5)+'99px;'+_0x16065b(0x5bd)+_0x16065b(0x50e)+_0x16065b(0x628)+'(255,'+_0x16065b(0x91f)+'55,.0'+_0x16065b(0x313)+_0x16065b(0x8e8)+'point'+_0x16065b(0xb30)+_0x16065b(0x381)+'ne;}'),_0x4490c7[_0x16065b(0x263)]),_0x4490c7[_0x16065b(0x9dc)])+_0x4490c7[_0x16065b(0x185)],_0x16065b(0x7ad)+_0x16065b(0xa52)+_0x16065b(0xa91)+'-chec'+_0x16065b(0x6f6)+_0x16065b(0x476)+']::af'+_0x16065b(0x176)+_0x16065b(0x73d)+_0x16065b(0x637)+'ackgr'+_0x16065b(0x53c)+_0x16065b(0x177)+_0x16065b(0x70a))+(_0x16065b(0xb4a)+'ange{'+_0x16065b(0x25b)+_0x16065b(0x24e)+_0x16065b(0x8ed)+_0x16065b(0x437)+'tems:'+'cente'+_0x16065b(0xa9c)+_0x16065b(0x44b)+'}'),'.sk-s'+'lider'+_0x16065b(0x462)+'kit-a'+'ppear'+_0x16065b(0x40e)+_0x16065b(0x164)+_0x16065b(0x32c)+_0x16065b(0xa0e)+_0x16065b(0x4f6)+';widt'+_0x16065b(0x7a4)+'x;hei'+'ght:8'+_0x16065b(0x745)+'ckgro'+_0x16065b(0x38e)+_0x16065b(0x576)+_0x16065b(0xb6b)+';}')+_0x4490c7['zDGKO']+('backg'+'round'+':line'+_0x16065b(0x6dd)+'adien'+'t(#ff'+'6b9d,'+'#ff6b'+_0x16065b(0x1c8)+_0x16065b(0x600)+'var(-'+_0x16065b(0x5ff)+_0x16065b(0x210)+_0x16065b(0x602)+_0x16065b(0x495)+'at,rg'+_0x16065b(0x5a7)+_0x16065b(0xba1)+',255,'+'.08);'+'}')+_0x4490c7[_0x16065b(0x9d1)]+_0x4490c7[_0x16065b(0x3a9)]+_0x4490c7[_0x16065b(0x9b5)],_0x4490c7[_0x16065b(0xa49)]),_0x4490c7[_0x16065b(0x48b)])+('font-'+_0x16065b(0x896)+_0x16065b(0xa74)+_0x16065b(0x64e)+_0x16065b(0x57f)+_0x16065b(0x8fa)+'00;cu'+'rsor:'+_0x16065b(0x6ba)+'er;fo'+'nt-fa'+_0x16065b(0xb67)+_0x16065b(0x1a1)+_0x16065b(0xb8f)),_0x16065b(0x336)+'tn:ho'+_0x16065b(0x3dc)+'ilter'+_0x16065b(0x199)+'htnes'+_0x16065b(0x1ae)+');}')+_0x4490c7[_0x16065b(0x69c)],_0x4490c7['yUpEJ'])+_0x4490c7[_0x16065b(0xada)],_0x355eaa=_0x16065b(0x308)+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+_0x16065b(0x30f)+_0x16065b(0x629)+_0x16065b(0x5c7)+'c-1.5'+'-2.5-'+'4-4.5'+'-4-7.'+_0x16065b(0x690)+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x16065b(0x435)+'\x204\x204.'+_0x16065b(0xb57)+_0x16065b(0xad2)+'5-4\x207'+'.5z\x22\x20'+(_0x16065b(0x4e8)+_0x16065b(0x749)+_0x16065b(0x2d2)+_0x16065b(0x9b3)+_0x16065b(0x177)+'9d\x22\x20s'+'troke'+_0x16065b(0x423)+_0x16065b(0x191)+_0x16065b(0x598)+_0x16065b(0x1f5)+'necap'+_0x16065b(0x485)+'nd\x22\x20s'+_0x16065b(0x8b0)+'-line'+'join='+_0x16065b(0x612)+_0x16065b(0x671))+(_0x16065b(0x5da)+'le\x20cx'+'=\x2212\x22'+'\x20cy=\x22'+'10\x22\x20r'+_0x16065b(0xb75)+_0x16065b(0x718)+_0x16065b(0xa86)+_0x16065b(0x2c8)+_0x16065b(0x6cd)+_0x16065b(0x184)),_0x40326c=_0x4490c7[_0x16065b(0xa3d)](_0x4490c7[_0x16065b(0x5d2)],'fill='+_0x16065b(0x749)+_0x16065b(0x2d2)+_0x16065b(0x9b3)+'#ff6b'+'9d\x22\x20s'+_0x16065b(0x8b0)+_0x16065b(0x423)+_0x16065b(0x917)+_0x16065b(0x61d)+_0x16065b(0x436)+'linec'+'ap=\x22r'+_0x16065b(0xa59)+_0x16065b(0x598)+'ke-li'+'nejoi'+'n=\x22ro'+_0x16065b(0x3f7)+'>')+(_0x16065b(0x5da)+'le\x20cx'+'=\x2212\x22'+_0x16065b(0x1ea)+_0x16065b(0x31a)+'=\x221.2'+_0x16065b(0x718)+_0x16065b(0xa86)+_0x16065b(0x2c8)+'\x22/></'+'svg>');function _0x78f5e7(_0x46ec01,_0x107577,_0x57f6ac){var _0x1a4612=_0x16065b,_0x268bf7=document[_0x1a4612(0x965)+_0x1a4612(0x238)+'ent'](_0x46ec01);if(_0x107577)_0x268bf7[_0x1a4612(0x6ed)+_0x1a4612(0xa9b)]=_0x107577;if(_0x57f6ac!=null)_0x268bf7[_0x1a4612(0x7b3)+_0x1a4612(0x714)]=_0x57f6ac;return _0x268bf7;}function _0x10b70(_0x321df2,_0x5331df){var _0xe012d2=_0x16065b;if(_0xe012d2(0xa8f)===_0xe012d2(0xa8f)){var _0x4a6fe3=(_0xe012d2(0x523)+'|9|0|'+_0xe012d2(0x950)+_0xe012d2(0x50c))['split']('|'),_0x34815a=0xb5*-0x11+-0x20e2+0x2ce7;while(!![]){switch(_0x4a6fe3[_0x34815a++]){case'0':var _0x3651a4=_0x4490c7[_0xe012d2(0x919)](_0x78f5e7,_0xe012d2(0x28e),_0x4490c7[_0xe012d2(0x4ed)]);continue;case'1':_0x23cac8[_0xe012d2(0x4b9)+_0xe012d2(0x46f)+'d'](_0x3651a4);continue;case'2':var _0x9c2268=_0x4490c7[_0xe012d2(0x54c)](_0x78f5e7,'div',_0xe012d2(0xa89)+'rd-he'+'ad');continue;case'3':_0x23cac8['head']=_0xa95a98;continue;case'4':return _0x23cac8;case'5':var _0xa95a98=_0x78f5e7(_0xe012d2(0x28e),_0xe012d2(0xa89)+_0xe012d2(0xb11)+_0xe012d2(0x178),_0x4490c7['fawvu'](_0x4490c7['WeiTO']('<stro'+'ng>',_0x321df2),_0xe012d2(0x50b)+_0xe012d2(0x8a2)));continue;case'6':var _0x23cac8=_0x4490c7['NrTiQ'](_0x78f5e7,'div',_0x4490c7[_0xe012d2(0x460)]('sk-ca'+'rd',_0x5331df?_0xe012d2(0x4be):''));continue;case'7':_0x23cac8['appen'+_0xe012d2(0x46f)+'d'](_0x9c2268);continue;case'8':_0x23cac8['body']=_0x3651a4;continue;case'9':_0x9c2268['appen'+'dChil'+'d'](_0xa95a98);continue;}break;}}else _0x278201['warni'+'ngs'][_0xe012d2(0xa01)](_0xe012d2(0x292)+'w.Uni'+'tyWeb'+_0xe012d2(0x4ea)+_0xe012d2(0x962)+_0xe012d2(0x24b)+_0xe012d2(0x4ef)+_0xe012d2(0x2c2)+_0xe012d2(0x426)+'\x20-\x20ca'+'pture'+_0xe012d2(0x484)+_0xe012d2(0x397)+'g\x20bli'+_0xe012d2(0x5c6));}function _0x2fbd33(_0x3ffdcc,_0x2b80ef){var _0x6d53c=_0x16065b,_0xbb38f5={'JgZDI':function(_0x3b0343,_0x2c526f){return _0x3b0343(_0x2c526f);},'LdLcl':function(_0x52c07b){return _0x52c07b();},'cnSfr':function(_0x58a92f){return _0x58a92f();}},_0x17b553=_0x78f5e7(_0x6d53c(0x7cd)+'n',_0x6d53c(0x916)+'itch');_0x17b553['type']='butto'+'n';var _0x18c506=function(){var _0x46593e=_0x6d53c;_0x17b553[_0x46593e(0x72d)+_0x46593e(0xa53)+'te']('aria-'+'check'+'ed',_0x4490c7[_0x46593e(0x5fc)](_0x3ffdcc)?_0x4490c7['qCBGh']:_0x4490c7['eIGOD']);};return _0x17b553[_0x6d53c(0x574)+'ck']=function(){_0xbb38f5['JgZDI'](_0x2b80ef,!_0xbb38f5['LdLcl'](_0x3ffdcc)),_0xbb38f5['cnSfr'](_0x18c506);},_0x18c506(),_0x17b553[_0x6d53c(0x1dd)]=_0x18c506,_0x15e472['syncs']['push'](_0x18c506),_0x17b553;}function _0x34b777(_0x11abc1,_0x24b0a3,_0x5bcc5f,_0xd801cd,_0x5c60a3){var _0x3d2bd0=_0x16065b,_0x26458d={'SkawP':_0x3d2bd0(0x9d9),'VhTLp':'4|0|3'+_0x3d2bd0(0x89c),'RIrnl':function(_0x109cdd,_0x73be99){return _0x109cdd-_0x73be99;},'DXuKO':function(_0x11eb63,_0x4a8473){var _0x40ed42=_0x3d2bd0;return _0x4490c7[_0x40ed42(0x2fe)](_0x11eb63,_0x4a8473);},'WitmW':function(_0xadfa85,_0x382255){return _0xadfa85<_0x382255;},'dnMwT':function(_0x1aed34){return _0x1aed34();}},_0xedf835=_0x4490c7['BpzCb'](_0x78f5e7,_0x4490c7[_0x3d2bd0(0x9aa)],_0x4490c7['Kaqwb']),_0x233129=document[_0x3d2bd0(0x965)+_0x3d2bd0(0x238)+_0x3d2bd0(0x56c)]('input');_0x233129[_0x3d2bd0(0x9e7)]='range',_0x233129[_0x3d2bd0(0x6ed)+_0x3d2bd0(0xa9b)]=_0x4490c7['SSvcB'],_0x233129[_0x3d2bd0(0x63e)]=String(_0x11abc1),_0x233129[_0x3d2bd0(0x331)]=String(_0x24b0a3),_0x233129[_0x3d2bd0(0x9c7)]=_0x4490c7[_0x3d2bd0(0x573)](String,_0x5bcc5f);var _0x3afa8a=_0x4490c7['qfuIp'](_0x78f5e7,_0x3d2bd0(0x98e),_0x4490c7['ccRFJ']),_0x576d13=function(){var _0x313741=_0x3d2bd0;if('jHzXO'!==_0x26458d[_0x313741(0x91d)]){var _0x1a644c=_0x26458d[_0x313741(0x517)][_0x313741(0x1a9)]('|'),_0x1527d4=0x93b+-0x1e45+0x150a;while(!![]){switch(_0x1a644c[_0x1527d4++]){case'0':_0x233129['value']=String(_0x54c094);continue;case'1':var _0x468f45=_0x26458d['RIrnl'](_0x54c094,_0x11abc1)/_0x26458d['RIrnl'](_0x24b0a3,_0x11abc1)*(-0x1069+0x21*-0xbb+-0x88*-0x4d);continue;case'2':_0x233129['style'][_0x313741(0x568)+_0x313741(0x8b3)+'y'](_0x313741(0x400),_0x26458d[_0x313741(0xb79)](_0x468f45,'%'));continue;case'3':_0x3afa8a['textC'+'onten'+'t']=(_0x26458d[_0x313741(0x536)](_0x5bcc5f,-0x25a8+0x1ea5+0x704)?_0x54c094['toFix'+'ed'](0x1887+-0x1334+-0x552):String(Math[_0x313741(0x50e)](_0x54c094)))+(_0x233129[_0x313741(0x5f7)+'et']['unit']||'');continue;case'4':var _0x54c094=_0x26458d[_0x313741(0x2d0)](_0xd801cd);continue;}break;}}else _0x57c0ad[_0x313741(0x530)]=_0x3badcb,_0x59d7b3();};return _0x233129[_0x3d2bd0(0x325)+'ut']=function(){var _0x31945c=_0x3d2bd0;_0x5c60a3(parseFloat(_0x233129[_0x31945c(0x534)])||_0x11abc1),_0x4490c7['DqlTf'](_0x576d13);},_0xedf835[_0x3d2bd0(0x4b9)+_0x3d2bd0(0x46f)+'d'](_0x233129),_0xedf835[_0x3d2bd0(0x4b9)+_0x3d2bd0(0x46f)+'d'](_0x3afa8a),_0xedf835['sync']=_0x576d13,_0xedf835[_0x3d2bd0(0xb89)]=_0x233129,_0x576d13(),_0x15e472['syncs']['push'](_0x576d13),_0xedf835;}function _0x268e66(_0x202adb,_0x3a920f){var _0x1d491d=_0x16065b,_0x282e1b=_0x78f5e7(_0x1d491d(0x28e),_0x1d491d(0x855)+'l'),_0x41c1b4=_0x78f5e7(_0x1d491d(0x28e),'sk-la'+_0x1d491d(0x731),_0x4490c7['aURzk'](_0x202adb,_0x3a920f?_0x4490c7[_0x1d491d(0xb01)](_0x4490c7[_0x1d491d(0xac8)],_0x3a920f)+('</spa'+'n>'):''));return _0x282e1b['appen'+_0x1d491d(0x46f)+'d'](_0x41c1b4),_0x282e1b;}function _0x1b873d(_0x30986e,_0x284cd0,_0xdee7,_0x47897e){var _0x3dc8f1=_0x16065b,_0x359556=_0x30986e&&_0x30986e[_0x3dc8f1(0x5ac)+'y']&&_0x30986e['surve'+'y'][_0x284cd0];if(!_0x359556)return'-';for(var _0x4d2d5b=0xe0+0xf59*0x2+-0x1f92*0x1;_0x4d2d5b<_0x359556['lengt'+'h'];_0x4d2d5b++){if(_0x4490c7[_0x3dc8f1(0x1da)](_0x359556[_0x4d2d5b]['o'],_0xdee7)){if(_0x47897e==='v3'){var _0x7d5541=_0x359556[_0x4d2d5b][_0x3dc8f1(0x6d4)]||[_0x359556[_0x4d2d5b]['v'],0x3f*0x5+0xfa9+-0x10e4,-0x1ca*-0x3+0x1*-0x1639+0x10db];return _0x7d5541[_0x3dc8f1(0x49b)](function(_0x274924){var _0x47d039=_0x3dc8f1;if(_0x4490c7['lCUZW'](_0x47d039(0x948),_0x47d039(0x948)))return Math[_0x47d039(0x50e)](_0x274924*(0x18c8+0x9d7+-0x7f*0x45))/(0x1d5f+0x587*-0x7+-0x71*-0x16);else _0x53557b=_0x45f860+_0x4310a5,_0x4851a9=_0x22527a+_0x1dc5f7;})['join']('\x20\x20');}var _0x3a9d8a=_0x359556[_0x4d2d5b]['v'];return typeof _0x3a9d8a==='numbe'+'r'?Math['round'](_0x3a9d8a*(-0x4*-0x209+0x16*-0x194+0x1e7c))/(-0x558+-0xb6+0xa*0xff):String(_0x3a9d8a);}}return'-';}function _0x354dcb(_0x292d2b){var _0x5398eb=_0x16065b,_0x3d35f4={'VbYAS':function(_0x34c13f){return _0x34c13f();},'UCVZi':function(_0x53f241,_0x3e1571){var _0x81e5ee=_0x4a91;return _0x4490c7[_0x81e5ee(0xb4d)](_0x53f241,_0x3e1571);},'ehhkr':function(_0x5f4a05){return _0x5f4a05();},'DObvL':_0x4490c7['sURAo'],'XQuSD':_0x5398eb(0x4fb),'yJRoA':_0x4490c7['nHZzK'],'hJKwP':_0x5398eb(0xaa5),'XVIYV':function(_0x31aac8,_0x509af3){var _0x167134=_0x5398eb;return _0x4490c7[_0x167134(0x330)](_0x31aac8,_0x509af3);},'Pkvhl':_0x5398eb(0xb0d)},_0x160701=_0x3ebaa9,_0x1da9c6=[],_0x3c1bf6;if(_0x292d2b===_0x5398eb(0x730)+'t'){var _0x3e3843=_0x10b70(_0x4490c7[_0x5398eb(0x365)],_0x2c37ef['on']),_0x4c41e0=_0x4490c7[_0x5398eb(0x551)](_0x78f5e7,_0x5398eb(0x28e),'sk-md'+_0x5398eb(0x49f),_0x2c37ef['on']?'x'+_0x2c37ef['facto'+'r'][_0x5398eb(0xa39)+'ed'](-0xa*0x12e+0x24e4*0x1+-0x3*0x85d)+'\x20on\x20'+_0x29fd06[_0x5398eb(0x618)+'h']+_0x4490c7[_0x5398eb(0x384)]+_0x316e84+(_0x5398eb(0x405)+'es'):'Multi'+_0x5398eb(0x92f)+'\x20move'+_0x5398eb(0x60b)+_0x5398eb(0x26d)+_0x5398eb(0x353)+'ds\x20on'+_0x5398eb(0x3f9)+_0x5398eb(0x363)+_0x5398eb(0x8bb)+'p\x20and'+'\x20jump'+'\x20are\x20'+_0x5398eb(0x9a5)+_0x5398eb(0x4fc)),_0x38a69a=_0x268e66(_0x5398eb(0x1a6)+'ed');_0x38a69a[_0x5398eb(0x4b9)+'dChil'+'d'](_0x2fbd33(function(){var _0x13db99=_0x5398eb,_0x5c11de={'PrnGX':function(_0x2993ac){var _0x4869d6=_0x4a91;return _0x3d35f4[_0x4869d6(0x990)](_0x2993ac);}};if(_0x3d35f4[_0x13db99(0x2a5)](_0x13db99(0xb52),'qDZVn'))_0x3d523b=_0x5c11de[_0x13db99(0x344)](_0x14fb89);else return _0x2c37ef['on'];},function(_0x253b8f){var _0x3fcb0c=_0x5398eb;_0x40fd6e(_0x253b8f,_0x2c37ef[_0x3fcb0c(0x5c4)+'r']),_0x4c41e0['textC'+_0x3fcb0c(0x217)+'t']=_0x253b8f?_0x4490c7['uDfKh'](_0x4490c7[_0x3fcb0c(0x398)](_0x4490c7[_0x3fcb0c(0x74a)]('x',_0x2c37ef[_0x3fcb0c(0x5c4)+'r'][_0x3fcb0c(0xa39)+'ed'](-0x34*-0x3d+0x1*-0xf27+0x2c4))+_0x3fcb0c(0x1e8)+_0x29fd06['lengt'+'h'],_0x4490c7['EedqN'])+_0x316e84,_0x4490c7['PPVNL']):_0x4490c7['ggTJp'];})),_0x3e3843['body'][_0x5398eb(0x4b9)+'dChil'+'d'](_0x4c41e0),_0x3e3843[_0x5398eb(0x4eb)]['appen'+_0x5398eb(0x46f)+'d'](_0x38a69a);var _0xe1778=_0x34b777(0x7*0x489+-0x21c6+0x1a*0x14,0x2b*0x2c+-0x1478+0xd19,-0x165b+0x1321+0x33a+0.5,function(){var _0x6e1a59=_0x5398eb;return _0x2c37ef[_0x6e1a59(0x5c4)+'r'];},function(_0x20c637){var _0x368226=_0x5398eb;if('ldpVA'===_0x3d35f4[_0x368226(0x2f4)])_0x40fd6e(_0x2c37ef['on'],_0x20c637);else{var _0x3befd3=_0x4aeb6c[_0x368226(0x1f6)+_0x368226(0x33a)+_0x368226(0xa60)+'nc']||{};if(!_0x48f7be[_0x368226(0x4f0)](_0x3befd3)['lengt'+'h'])return![];return!!_0x3d35f4['ehhkr'](_0x32f6f9);}});_0xe1778[_0x5398eb(0xb89)][_0x5398eb(0x5f7)+'et'][_0x5398eb(0x51b)]='x';var _0x3f04e8=_0x4490c7['ZNiPs'](_0x268e66,_0x4490c7[_0x5398eb(0x798)],'F8\x20/\x20'+'F6\x20al'+_0x5398eb(0x5a1)+_0x5398eb(0xace)+'is');_0x3f04e8[_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0xe1778),_0x3e3843['body'][_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x3f04e8);if(_0xc1c993[_0x5398eb(0x618)+'h']){var _0x32834e=_0x4490c7[_0x5398eb(0x1c6)](_0x78f5e7,_0x5398eb(0x28e),_0x5398eb(0x6b2)+'te','Refus'+'ed:\x20'+_0xc1c993[_0x5398eb(0x868)](-0x1639*-0x1+-0xbf5+-0xa44,-0x133b+-0x111d+0x2*0x122e)[_0x5398eb(0x49b)](function(_0x17f3c4){var _0x4a2e22=_0x5398eb;if(_0x4490c7[_0x4a2e22(0x88e)]!==_0x4a2e22(0x9bc))return _0x4490c7[_0x4a2e22(0x578)](_0x4490c7['eSWjO'](_0x4490c7[_0x4a2e22(0x1bc)](_0x4490c7[_0x4a2e22(0x873)]('0x',_0x17f3c4['o']<0x23c3*-0x1+0x21*0x71+-0x1*-0x1532?'?':_0x17f3c4['o']['toStr'+_0x4a2e22(0x8bc)](-0xe3f*-0x2+0x74e*-0x4+-0xca*-0x1)),'\x20('),_0x17f3c4['why']),')');else _0x21e0a0[_0x4a2e22(0x340)+'em'](_0x12e8a6,_0x23db64[_0x4a2e22(0x942)+'gify'](_0x1f9e05[_0x4a2e22(0xa78)]));})['join']('\x20\x20'));_0x3e3843[_0x5398eb(0x4eb)]['appen'+_0x5398eb(0x46f)+'d'](_0x32834e);}_0x1da9c6['push'](_0x3e3843);var _0x5a8ad2=_0x10b70(_0x4490c7[_0x5398eb(0x4b8)]),_0x8926fe=_0x4490c7['NrlEc'](_0x78f5e7,_0x4490c7['Shtls'],_0x4490c7['RdxmZ'],_0x5398eb(0x3ac)+_0x5398eb(0x76b)+_0x5398eb(0x35b)+'9)');_0x8926fe[_0x5398eb(0x9e7)]=_0x4490c7['Shtls'],_0x8926fe[_0x5398eb(0x574)+'ck']=function(){var _0x59645b=_0x5398eb;_0x1798f3('snaps'+_0x59645b(0x513));},_0x5a8ad2[_0x5398eb(0x4eb)][_0x5398eb(0x4b9)+'dChil'+'d'](_0x4490c7[_0x5398eb(0x8b9)](_0x78f5e7,_0x5398eb(0x28e),'sk-md'+'esc',_0x4490c7['lgkXR'])),_0x5a8ad2[_0x5398eb(0x4eb)]['appen'+_0x5398eb(0x46f)+'d'](_0x8926fe),_0x1da9c6[_0x5398eb(0xa01)](_0x5a8ad2);}if(_0x4490c7['UtcyS'](_0x292d2b,'visua'+'ls')){var _0x431bec=_0x4490c7[_0x5398eb(0x54c)](_0x10b70,'Radar',_0x153506['on']),_0x1440a4=_0x4490c7[_0x5398eb(0x41e)](_0x268e66,_0x5398eb(0x1a6)+'ed');_0x1440a4[_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x2fbd33(function(){return _0x153506['on'];},function(_0x2c2e81){_0x153506['on']=_0x2c2e81,_0x1bb385();})),_0x431bec[_0x5398eb(0x4eb)][_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x78f5e7(_0x5398eb(0x28e),_0x5398eb(0x77d)+_0x5398eb(0x49f),_0x4490c7[_0x5398eb(0x907)])),_0x431bec[_0x5398eb(0x4eb)][_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x1440a4);var _0x2cf23e=_0x34b777(0x242*-0xc+-0x1*-0x679+-0x1*-0x14c7,-0x2*-0x9f1+-0x2af+-0x1093,0x8f*0x13+0x2f0*0x6+-0x1c33*0x1,function(){var _0x50908f=_0x5398eb,_0x4d513f={'fisQL':_0x50908f(0x814)+'ion:f'+_0x50908f(0x8f0)+_0x50908f(0x4f3)+'0;top'+_0x50908f(0x58a)+_0x50908f(0x305)+_0x50908f(0x991)+_0x50908f(0x623)+'5;poi'+'nter-'+_0x50908f(0x7bc)+_0x50908f(0x654)+'e;'};if(_0x4490c7['mlBAd']('YYvgq',_0x50908f(0x31f)))return _0x153506[_0x50908f(0x98e)];else{if(_0x51fd8d)return _0x1653a1;try{if(!_0x25f58b['body']||!_0x7eb4f5[_0x50908f(0x4eb)]['appen'+'dChil'+'d'])return null;var _0x560b28=_0x3b5537['creat'+_0x50908f(0x238)+_0x50908f(0x56c)](_0x50908f(0x1c4)+'s');return _0x560b28['id']='sakur'+_0x50908f(0x976)+'es',_0x560b28[_0x50908f(0x8a0)][_0x50908f(0x617)+'xt']=_0x4d513f['fisQL'],_0x18bf10['body']['appen'+'dChil'+'d'](_0x560b28),_0x1f9546={'cv':_0x560b28},_0x2ab3cb;}catch(_0x38b117){return null;}}},function(_0x17c7f4){var _0x535eed=_0x5398eb;_0x153506[_0x535eed(0x98e)]=_0x17c7f4;});_0x2cf23e['input'][_0x5398eb(0x5f7)+'et']['unit']='m';var _0x3c0643=_0x268e66(_0x5398eb(0x915),'world'+_0x5398eb(0x543)+_0x5398eb(0x36c)+'oss\x20t'+_0x5398eb(0x76e)+'dar');_0x3c0643['appen'+_0x5398eb(0x46f)+'d'](_0x2cf23e),_0x431bec[_0x5398eb(0x4eb)][_0x5398eb(0x4b9)+'dChil'+'d'](_0x3c0643),_0x1da9c6[_0x5398eb(0xa01)](_0x431bec);var _0x4afeb1=_0x4490c7[_0x5398eb(0xa8c)](_0x10b70,_0x4490c7['hazaE'],_0x153506[_0x5398eb(0x3a0)]),_0x2c5811=_0x268e66(_0x5398eb(0x1a6)+'ed');_0x2c5811[_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x4490c7[_0x5398eb(0x54c)](_0x2fbd33,function(){return _0x3d35f4['XQuSD']!=='cKeOC'?_0x38afc6['round'](_0x5adee7*(0x4*-0x3e0+-0x2e7*0x1+0x12cb))/(-0x15*0x141+-0x22d7+0x3d90):_0x153506['boxes'];},function(_0x1b8f44){var _0x1c2243=_0x5398eb;_0x153506[_0x1c2243(0x3a0)]=_0x1b8f44,_0x153506['on']=!![],_0x1bb385();})),_0x4afeb1['body'][_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x78f5e7(_0x5398eb(0x28e),_0x4490c7['pGccD'],_0x5398eb(0x28f)+'n-spa'+_0x5398eb(0xa38)+_0x5398eb(0x827)+_0x5398eb(0x6e5)+'ield\x20'+'of\x20vi'+_0x5398eb(0xa96)+_0x5398eb(0x21e)+_0x5398eb(0x76f)+'ad\x20fr'+_0x5398eb(0x28a)+_0x5398eb(0xa43)+_0x5398eb(0x721)+_0x5398eb(0x8df)+_0x5398eb(0x897)+'itted'+_0x5398eb(0x41a)+_0x5398eb(0xa6e))),_0x4afeb1[_0x5398eb(0x4eb)]['appen'+_0x5398eb(0x46f)+'d'](_0x2c5811);var _0x4aa4de=_0x34b777(-0x1ba2+-0x1*-0x164f+-0x1*-0x58f,-0xc2a+0x2501+0x1855*-0x1,0x179*-0x3+0x229d*-0x1+0x270a,function(){var _0x10569c=_0x5398eb;return _0x17963f[_0x10569c(0x530)];},function(_0x33f138){var _0x1e46e5=_0x5398eb;if(_0x3d35f4[_0x1e46e5(0x163)]===_0x3d35f4[_0x1e46e5(0x83a)]){if(_0x3cc1d5[_0x58f150][_0x1e46e5(0x7c3)]&&_0x457a11[_0x171615][_0x1e46e5(0x7c3)]['appli'+'ed'])_0x8f1cb7++;}else _0x17963f[_0x1e46e5(0x530)]=_0x33f138,_0x25a69a();});_0x4aa4de[_0x5398eb(0xb89)]['datas'+'et'][_0x5398eb(0x51b)]='°';var _0x3383fe=_0x268e66(_0x5398eb(0x532)+'\x20of\x20v'+_0x5398eb(0x30d),_0x5398eb(0x1aa)+_0x5398eb(0xa18)+_0x5398eb(0x5a1)+'ep\x20th'+'is');_0x3383fe['appen'+_0x5398eb(0x46f)+'d'](_0x4aa4de),_0x4afeb1['body']['appen'+_0x5398eb(0x46f)+'d'](_0x3383fe);var _0x52d4a3=_0x160701&&_0x160701[_0x5398eb(0x2de)];_0x4afeb1[_0x5398eb(0x4eb)]['appen'+_0x5398eb(0x46f)+'d'](_0x4490c7['wtovx'](_0x78f5e7,_0x5398eb(0x28e),_0x5398eb(0x6b2)+'te',_0x4490c7[_0x5398eb(0x256)]+(_0x52d4a3?_0x52d4a3[_0x5398eb(0x3d7)+'Look']?_0x4490c7[_0x5398eb(0x9ba)]+_0x52d4a3[_0x5398eb(0x3d7)+_0x5398eb(0x756)]+(_0x52d4a3[_0x5398eb(0xa64)+'a']?_0x4490c7['IWStd']+_0x52d4a3[_0x5398eb(0xa64)+'a']:''):'no\x20Mo'+_0x5398eb(0x4c4)+_0x5398eb(0x489)+'t':'no\x20Mo'+'useLo'+'ok\x20ye'+'t')+(_0x17963f['pitch'+_0x5398eb(0x947)]||_0x17963f['yawOf'+'f']?_0x4490c7[_0x5398eb(0x2fe)](_0x4490c7[_0x5398eb(0x58b)](_0x5398eb(0xb5c)+'h\x20',Math['round'](_0x17963f['pitch'+'Off']))+_0x4490c7[_0x5398eb(0x8d8)],Math[_0x5398eb(0x50e)](_0x17963f['yawOf'+'f'])):''))),_0x1da9c6[_0x5398eb(0xa01)](_0x4afeb1);}if(_0x4490c7['GYrZO'](_0x292d2b,_0x4490c7[_0x5398eb(0x772)])){var _0x29248c=_0x4490c7[_0x5398eb(0x285)]['split']('|'),_0x2d2f94=0x1*0x16ed+-0x1160+-0x58d;while(!![]){switch(_0x29248c[_0x2d2f94++]){case'0':var _0x5204ac=_0x10b70(_0x4490c7['qFOBQ'],![]);continue;case'1':var _0x1dc4bb=[[_0x5398eb(0x1ce),_0x4490c7[_0x5398eb(0x46e)],_0x160701?_0x160701['versi'+'on']:'-'],['Hooks',_0x4490c7['Gkarv'],_0x160701?_0x4490c7['UanKL'](_0x160701['hooks'+_0x5398eb(0x656)+'ed'],_0x4490c7[_0x5398eb(0x531)])+_0x160701[_0x5398eb(0x541)+_0x5398eb(0x227)+_0x5398eb(0x7c0)+'AtArm']:'-'],[_0x5398eb(0x5b4),_0x5398eb(0x304)+_0x5398eb(0x8b5)+'ntiat'+_0x5398eb(0x1fb),_0x160701&&_0x160701[_0x5398eb(0x287)+'emory']&&_0x160701['wasmM'+_0x5398eb(0x822)]['captu'+_0x5398eb(0xa0c)]?_0x4490c7['EciiO'](_0x4490c7[_0x5398eb(0xaf5)](Math[_0x5398eb(0x50e)](_0x160701['wasmM'+'emory'][_0x5398eb(0x168)]/(0x1*0x11ee8b+0x891f1+-0xa807c)),_0x5398eb(0x7f6)+'\x20')+_0x160701[_0x5398eb(0x287)+'emory'][_0x5398eb(0x52f)],'ms'):'-'],['Playe'+'rs',_0x4490c7[_0x5398eb(0x821)],_0x160701&&_0x160701['esp']?String(_0x160701[_0x5398eb(0x451)]['playe'+'rCoun'+'t']):'-'],[_0x5398eb(0xba8)+'es',_0x5398eb(0x9cf)+_0x5398eb(0x58f)+_0x5398eb(0x9b4)+'u',_0x160701&&_0x160701[_0x5398eb(0x451)]?String(_0x160701['esp'][_0x5398eb(0x306)+_0x5398eb(0xaf3)]):'-'],[_0x5398eb(0x421)+'a','off\x20t'+_0x5398eb(0x60f)+'ve\x20ma'+_0x5398eb(0x62c),_0x160701&&_0x160701[_0x5398eb(0x451)]&&_0x160701[_0x5398eb(0x451)][_0x5398eb(0xa64)+'a']?_0x4490c7[_0x5398eb(0x768)](_0x4490c7['GNLjc'](_0x160701[_0x5398eb(0x451)][_0x5398eb(0xa64)+'a'],'\x20('),_0x160701[_0x5398eb(0x451)][_0x5398eb(0xa64)+_0x5398eb(0x234)])+')':'-']];continue;case'2':for(_0x3c1bf6=-0x1*-0x1747+0x31a+-0x1a61;_0x4490c7['UScBL'](_0x3c1bf6,_0x24f6a6[_0x5398eb(0x618)+'h']);_0x3c1bf6++){var _0x2e1c7d=_0x4490c7[_0x5398eb(0x579)]['split']('|'),_0x54bfc1=0x662+-0x96*0x27+-0x1f*-0x88;while(!![]){switch(_0x2e1c7d[_0x54bfc1++]){case'0':_0x3a7d22['style'][_0x5398eb(0x6fe)+_0x5398eb(0x1b2)]='0';continue;case'1':_0x3a7d22['textC'+_0x5398eb(0x217)+'t']=String(_0x24f6a6[_0x3c1bf6][-0x1084*-0x2+-0x3b3+-0x1d53]);continue;case'2':_0x3a7d22['style']['flex']='1';continue;case'3':_0x5204ac[_0x5398eb(0x4eb)]['appen'+_0x5398eb(0x46f)+'d'](_0x297654);continue;case'4':_0x3a7d22[_0x5398eb(0x5f7)+'et']['k']=_0x24f6a6[_0x3c1bf6][0x1cc3+0x26dd+-0x439f];continue;case'5':_0x297654[_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x3a7d22);continue;case'6':_0x5204ac[_0x5398eb(0x4eb)][_0x5398eb(0x8bf)+_0x5398eb(0x559)]['sp']=_0x3a7d22;continue;case'7':var _0x297654=_0x268e66(_0x24f6a6[_0x3c1bf6][0x233a+-0x675+0x997*-0x3]);continue;case'8':var _0x3a7d22=_0x78f5e7(_0x5398eb(0x98e),_0x5398eb(0x933)+'l');continue;case'9':_0x3a7d22['style'][_0x5398eb(0x1f4)+_0x5398eb(0x5d0)]='right';continue;}break;}}continue;case'3':_0x1da9c6[_0x5398eb(0xa01)](_0x5204ac);continue;case'4':for(_0x3c1bf6=-0x94*0x19+-0x24f5+-0x3369*-0x1;_0x3c1bf6<_0x1dc4bb[_0x5398eb(0x618)+'h'];_0x3c1bf6++){var _0x12d590=_0x4490c7[_0x5398eb(0x2e5)](_0x268e66,_0x1dc4bb[_0x3c1bf6][-0x13*0xd3+-0xe42+0x1deb]),_0x1d6834=_0x78f5e7('span',_0x4490c7[_0x5398eb(0x427)]);_0x1d6834['style'][_0x5398eb(0x6fe)+_0x5398eb(0x1b2)]='0',_0x1d6834['style'][_0x5398eb(0x40f)]='1',_0x1d6834['style'][_0x5398eb(0x1f4)+'lign']=_0x5398eb(0xae2),_0x1d6834[_0x5398eb(0x3f1)+'onten'+'t']=_0x4490c7['ufjtu'](String,_0x1dc4bb[_0x3c1bf6][-0x1*-0x181d+0xb*-0x149+0x1d*-0x58]),_0x1d6834['datas'+'et']['k']=_0x1dc4bb[_0x3c1bf6][0x1*-0x181c+-0xc87+-0x46*-0x86],_0x12d590['appen'+'dChil'+'d'](_0x1d6834);var _0x43be4d=_0x1da9c6[_0x5398eb(0x618)+'h']?_0x1da9c6[_0x4490c7[_0x5398eb(0x89e)](_0x1da9c6['lengt'+'h'],-0x10*-0x19d+-0x11e0+0x3*-0x2a5)]:null;!_0x43be4d&&(_0x43be4d=_0x4490c7[_0x5398eb(0x738)](_0x10b70,_0x4490c7[_0x5398eb(0x360)],![]),_0x1da9c6[_0x5398eb(0xa01)](_0x43be4d)),_0x43be4d[_0x5398eb(0x4eb)]['appen'+_0x5398eb(0x46f)+'d'](_0x12d590),_0x43be4d['body']['lastC'+_0x5398eb(0x559)]['sp']=_0x1d6834;}continue;case'5':var _0x24f6a6=[[_0x4490c7[_0x5398eb(0x5a0)],_0x160701&&_0x160701[_0x5398eb(0x6b9)]&&_0x160701['local'][_0x5398eb(0x59c)]?_0x4490c7[_0x5398eb(0xa3d)](_0x4490c7[_0x5398eb(0x338)],_0x160701[_0x5398eb(0x6b9)][_0x5398eb(0x59c)]):_0x5398eb(0x8ce)+'ntrol'+'ler',_0x160701&&_0x160701['local']&&_0x160701[_0x5398eb(0x6b9)][_0x5398eb(0x321)]?_0x160701['local']['feet'][_0x5398eb(0x49b)](function(_0x425f83){var _0x54c864=_0x5398eb;return Math[_0x54c864(0x50e)](_0x425f83*(0xa2*-0x1+0x6*0x58a+-0x1*0x2036))/(-0x1*0x192a+0x25c7*0x1+-0x1*0xc39);})['join']('\x20\x20'):'-'],['Eye','+'+_0x13830d+'m',_0x160701&&_0x160701[_0x5398eb(0x6b9)]&&_0x160701[_0x5398eb(0x6b9)][_0x5398eb(0x586)]?_0x160701[_0x5398eb(0x6b9)][_0x5398eb(0x586)]['map'](function(_0x407b92){var _0x5150c=_0x5398eb;return _0x3d35f4['XVIYV'](Math[_0x5150c(0x50e)](_0x407b92*(-0x55+0x1201+-0x452*0x4)),-0xa*0x1c4+0x1548+-0x33c);})[_0x5398eb(0x895)]('\x20\x20'):'-'],['Walk\x20'+_0x5398eb(0x26d),_0x5398eb(0x67e),_0x4490c7['puuLS'](_0x1b873d,_0x160701,'FPSco'+_0x5398eb(0x7e1)+_0x5398eb(0x763),-0x64*-0x26+0x1df9+0x1*-0x2cc1)],[_0x4490c7[_0x5398eb(0x90d)],'0x40',_0x4490c7[_0x5398eb(0x3ee)](_0x1b873d,_0x160701,_0x4490c7['IuvJQ'],0x2292+-0x7ed*-0x3+0x6b*-0x8b)],['Jump\x20'+_0x5398eb(0x8be)+'t',_0x5398eb(0x54e),_0x4490c7[_0x5398eb(0x7ef)](_0x1b873d,_0x160701,_0x4490c7[_0x5398eb(0xaae)],0xca4+0x1c17+-0x9*0x467)],['Healt'+'h',_0x5398eb(0x382)+_0x5398eb(0x28b)+'pt+0x'+'C0',_0x1b873d(_0x160701,_0x5398eb(0x382)+_0x5398eb(0x28b)+'pt',-0x1260+0x161a+-0x2fa)]];continue;}break;}}if(_0x4490c7[_0x5398eb(0x246)](_0x292d2b,_0x5398eb(0xafe))){var _0x46e794=_0x10b70(_0x4490c7[_0x5398eb(0x35e)],![]),_0xd37573=_0x160701&&_0x160701[_0x5398eb(0x863)+_0x5398eb(0x6ee)]&&_0x160701[_0x5398eb(0x863)+_0x5398eb(0x6ee)][_0x5398eb(0x618)+'h']?_0x160701[_0x5398eb(0x863)+_0x5398eb(0x6ee)][_0x5398eb(0x895)]('\x0a'):_0x4490c7[_0x5398eb(0x5bb)];_0x46e794[_0x5398eb(0x4eb)][_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x78f5e7(_0x5398eb(0x28e),_0x5398eb(0xafd)+'e',_0xd37573)),_0x1da9c6['push'](_0x46e794);var _0x5b2d90=_0x10b70('Repor'+'t',![]),_0x161d1e=_0x78f5e7(_0x5398eb(0x7cd)+'n',_0x4490c7['RdxmZ'],_0x5398eb(0xa11)+_0x5398eb(0x267)+'to\x20cl'+_0x5398eb(0xb20)+'rd');_0x161d1e[_0x5398eb(0x9e7)]=_0x4490c7['Shtls'],_0x161d1e['oncli'+'ck']=function(){var _0x403863=_0x5398eb,_0x26b4db={'yTkky':_0x403863(0x362)};if(_0x403863(0x483)===_0x4490c7['LnJeQ']){if(_0x200e1a['el'])_0xb1445f['el'][_0x403863(0x8a0)]['displ'+'ay']=_0x3d35f4[_0x403863(0xa00)];return;}else try{var _0x5a7674=_0x4490c7['aanKl'](_0x5e09ee+'\x0a'+JSON[_0x403863(0x942)+_0x403863(0x4bc)](_0x160701,null,0x2515+0x1*-0x14b7+0x1*-0x105d),'\x0a')+_0x29d676;if(navigator['clipb'+_0x403863(0x15a)]&&navigator['clipb'+_0x403863(0x15a)][_0x403863(0x40b)+_0x403863(0x69b)])navigator['clipb'+'oard'][_0x403863(0x40b)+_0x403863(0x69b)](_0x5a7674)[_0x403863(0x752)](function(){var _0xdf558a=_0x403863;'CdYTb'===_0x26b4db['yTkky']?_0x161d1e[_0xdf558a(0x3f1)+_0xdf558a(0x217)+'t']='Copie'+'d':_0x3b82ff[_0xdf558a(0x7c3)][_0xdf558a(0x553)+'ed']=![];});else _0x161d1e[_0x403863(0x3f1)+'onten'+'t']=_0x403863(0x526)+_0x403863(0x3e5)+'block'+_0x403863(0x8ec)+_0x403863(0x684)+'the\x20p'+'anel\x20'+_0x403863(0x561)+'ad';}catch(_0x2b5504){_0x161d1e[_0x403863(0x3f1)+'onten'+'t']=_0x4490c7[_0x403863(0x932)];}},_0x5b2d90['body'][_0x5398eb(0x4b9)+'dChil'+'d'](_0x78f5e7('div',_0x4490c7['pGccD'],_0x4490c7['lsaoW'])),_0x5b2d90['body'][_0x5398eb(0x4b9)+_0x5398eb(0x46f)+'d'](_0x161d1e),_0x1da9c6[_0x5398eb(0xa01)](_0x5b2d90);}return _0x1da9c6;}function _0x1bb385(){var _0x36de40=_0x16065b;if(_0x15e472[_0x36de40(0xa7b)])_0x5f554b(!![]);}function _0x109826(){var _0x3320eb=_0x16065b;if('jQPPH'!==_0x3320eb(0x97b))return _0x58dfe2[_0x3320eb(0x5f7)+'et']['api']='1',_0x456839[_0x3320eb(0x441)]=_0xd5aebb,_0x5021d3['warn']('%c[sa'+_0x3320eb(0x204)+'\x20pane'+_0x3320eb(0x369)+_0x3320eb(0x231),_0x4490c7[_0x3320eb(0x7be)]('color'+':',_0x3b0cb9),_0x3d41da),_0x469b8a;else try{var _0x1ed066=localStorage['getIt'+'em'](_0x1457f3);if(!_0x1ed066)return;var _0x4baf5c=JSON['parse'](_0x1ed066);if(_0x4baf5c&&typeof _0x4baf5c['x']===_0x4490c7[_0x3320eb(0xa3b)]&&typeof _0x4baf5c['y']===_0x3320eb(0x3d9)+'r')_0x15e472['pos']=_0x4baf5c;}catch(_0x1adda9){}}function _0x2b076b(){var _0x371143=_0x16065b;try{localStorage[_0x371143(0x340)+'em'](_0x1457f3,JSON['strin'+_0x371143(0x4bc)](_0x15e472['pos']));}catch(_0x3c5210){}}function _0x1caaea(){var _0x43801c=_0x16065b,_0x462de2={'HIBMa':function(_0x1d9114){return _0x1d9114();}},_0x8bd426=_0x15e472['root'];if(!_0x8bd426||!_0x8bd426['style'])return;if(_0x15e472[_0x43801c(0xa78)]){if(_0x4490c7['RqEer'](_0x43801c(0x757),_0x4490c7[_0x43801c(0x1fd)])){var _0x4b18fe=_0x462de2['HIBMa'](_0x3e6214);if(_0x4b18fe&&_0x4b18fe['Modul'+'e']&&_0x4b18fe[_0x43801c(0x9e6)+'e'][_0x43801c(0x55b)+'8']&&_0x4b18fe[_0x43801c(0x9e6)+'e'][_0x43801c(0x55b)+'8'][_0x43801c(0xb3f)+'r'])return _0x4b18fe[_0x43801c(0x9e6)+'e'][_0x43801c(0x55b)+'8'];}else _0x8bd426['style'][_0x43801c(0x60e)]=_0x15e472[_0x43801c(0xa78)]['x']+'px',_0x8bd426['style'][_0x43801c(0x502)]=_0x4490c7[_0x43801c(0x58b)](_0x15e472[_0x43801c(0xa78)]['y'],'px'),_0x8bd426['style']['right']=_0x43801c(0x254),_0x8bd426['style'][_0x43801c(0x490)+'m']=_0x4490c7[_0x43801c(0x229)];}else _0x4490c7[_0x43801c(0x39e)](_0x4490c7['GLmqx'],'QfVMw')?_0x4f8e73=_0x193275:(_0x8bd426['style'][_0x43801c(0x60e)]=_0x43801c(0x254),_0x8bd426[_0x43801c(0x8a0)]['top']=_0x4490c7[_0x43801c(0x229)],_0x8bd426[_0x43801c(0x8a0)]['right']=_0x43801c(0xb62),_0x8bd426[_0x43801c(0x8a0)][_0x43801c(0x490)+'m']='24px');}function _0x223b5e(_0x352116,_0x370b6c){var _0x5aa2ef=_0x16065b,_0x42d433={'TVYif':function(_0x1282a4,_0x4ee2af){var _0x17c970=_0x4a91;return _0x4490c7[_0x17c970(0x8c0)](_0x1282a4,_0x4ee2af);},'qZeVx':'no\x20gr'+'oup\x20o'+'f\x20','KDIma':'\x20Obsc'+'uredF'+_0x5aa2ef(0x5c2)+_0x5aa2ef(0x518)+'ed','CIkrS':_0x5aa2ef(0x87c)+_0x5aa2ef(0x8bc),'lklDC':function(_0xc8fa89,_0x127459){var _0x5b3ae5=_0x5aa2ef;return _0x4490c7[_0x5b3ae5(0xa2d)](_0xc8fa89,_0x127459);},'vPFIr':function(_0xaa3800,_0x4c08ef){return _0xaa3800-_0x4c08ef;},'vxsCl':function(_0x40fd33,_0x6258b7){var _0x1983ad=_0x5aa2ef;return _0x4490c7[_0x1983ad(0xb00)](_0x40fd33,_0x6258b7);},'EUTpr':_0x5aa2ef(0x3ae),'PHPSk':_0x4490c7['OWsMD'],'zETso':function(_0x8e8413,_0x12f67a){var _0x2fbcc4=_0x5aa2ef;return _0x4490c7[_0x2fbcc4(0x82e)](_0x8e8413,_0x12f67a);},'KWVJq':function(_0x1a119b,_0x410ae5){return _0x1a119b+_0x410ae5;},'ZGFCl':'auto','RmVjE':function(_0x42c905,_0x220009){var _0x3bf399=_0x5aa2ef;return _0x4490c7[_0x3bf399(0xb8c)](_0x42c905,_0x220009);},'fuoWj':function(_0x535441,_0x3ad131){var _0x25b775=_0x5aa2ef;return _0x4490c7[_0x25b775(0x5d5)](_0x535441,_0x3ad131);}};try{if(_0x5aa2ef(0x7cb)==='ZfsVT'){var _0x3ccf0b=![],_0x119f38=0x1acc+-0x1195+-0x937*0x1,_0x31e1c5=-0x8cb+0x1662+-0x7*0x1f1;_0x370b6c['style'][_0x5aa2ef(0x8d4)+'r']=_0x4490c7['aPCUx'],_0x370b6c['style'][_0x5aa2ef(0x356)+_0x5aa2ef(0x15c)+'n']=_0x5aa2ef(0xb0d);var _0x3cf3d2=function(_0x30752c){var _0x2b1cb3=_0x5aa2ef;_0x3ccf0b=!![],_0x370b6c['style'][_0x2b1cb3(0x8d4)+'r']=_0x42d433[_0x2b1cb3(0x3e0)];var _0xfd7ea0={'left':parseFloat(_0x352116[_0x2b1cb3(0x8a0)][_0x2b1cb3(0x60e)])||0x13fc+0x2355+-0x3751,'top':parseFloat(_0x352116['style'][_0x2b1cb3(0x502)])||-0x1c33*-0x1+0x5+-0x1c38};(!_0x352116['style'][_0x2b1cb3(0x60e)]||_0x352116[_0x2b1cb3(0x8a0)][_0x2b1cb3(0x60e)]===_0x2b1cb3(0x254))&&(_0xfd7ea0[_0x2b1cb3(0x60e)]=(window[_0x2b1cb3(0x7b3)+_0x2b1cb3(0x76c)]||-0x622*-0x2+-0x97*-0x25+-0x1*0x2217)-(_0x352116[_0x2b1cb3(0x27e)+'tWidt'+'h']||-0x1ea+0x7cc+-0x376)-(0x3cb*0x3+0x2066+-0x2baf));(!_0x352116[_0x2b1cb3(0x8a0)]['top']||_0x352116[_0x2b1cb3(0x8a0)][_0x2b1cb3(0x502)]===_0x2b1cb3(0x254))&&(_0xfd7ea0[_0x2b1cb3(0x502)]=_0x42d433[_0x2b1cb3(0x61c)](_0x42d433['vPFIr'](window['inner'+_0x2b1cb3(0x9e5)+'t']||0x1d34+0x1d4e+-0x3a82,_0x352116[_0x2b1cb3(0x27e)+'tHeig'+'ht']||-0x185*-0x6+0x22b4+-0x1521*0x2),0xcf2*-0x2+-0x3f3*-0x7+-0x1a9));_0x119f38=_0x42d433[_0x2b1cb3(0x42c)](_0x30752c[_0x2b1cb3(0x3cc)+'tX']||-0x49*0x18+-0x20a3+0x277b,_0xfd7ea0[_0x2b1cb3(0x60e)]),_0x31e1c5=(_0x30752c[_0x2b1cb3(0x3cc)+'tY']||-0x11af+0x1*0xef9+0x2b6)-_0xfd7ea0[_0x2b1cb3(0x502)];try{if(_0x2b1cb3(0x50f)===_0x42d433['EUTpr']){_0x5690fc[_0x2b1cb3(0xa01)]({'o':-(0x22b9+0xf2c*0x1+-0x31e4),'v':0x0,'why':_0x42d433[_0x2b1cb3(0x24a)](_0x42d433['qZeVx']+_0x2337d4,_0x42d433[_0x2b1cb3(0x275)])});return;}else _0x30752c[_0x2b1cb3(0x242)+'ntDef'+_0x2b1cb3(0x646)]();}catch(_0x8e87b9){}},_0x53b867=function(_0x2e677d){var _0xa61d5a=_0x5aa2ef,_0x2065d4=_0x42d433['PHPSk']['split']('|'),_0x16ffb0=-0x3a*0x64+0x13*-0xb1+-0x1*-0x23cb;while(!![]){switch(_0x2065d4[_0x16ffb0++]){case'0':_0x43acea=Math[_0xa61d5a(0x331)](0x759+0x1*-0xdc6+0x1d*0x39,Math['min']((window[_0xa61d5a(0x7b3)+'Heigh'+'t']||0x1c99+0xc21*0x2+-0x34db)-_0x4f088a-(-0x2ff+-0xc*-0x184+0x1*-0xf29),_0x43acea));continue;case'1':_0x352116['style'][_0xa61d5a(0x490)+'m']='auto';continue;case'2':_0x15e472['pos']={'x':_0x4a464f,'y':_0x43acea};continue;case'3':_0x4a464f=Math[_0xa61d5a(0x331)](-0x2*-0x12f7+-0x17*0x47+0x1*-0x1f85,Math['min'](_0x42d433[_0xa61d5a(0x42c)]((window['inner'+_0xa61d5a(0x76c)]||0x1fa6*-0x1+-0x1e4a*0x1+0x3df0)-_0x3f6096,-0x117a+0x152e+-0x3ac),_0x4a464f));continue;case'4':_0x352116['style']['top']=_0x42d433[_0xa61d5a(0x24a)](_0x43acea,'px');continue;case'5':var _0x4a464f=_0x42d433['vxsCl'](_0x2e677d['clien'+'tX']||0x16*0x1c5+-0x46*-0x77+0x1*-0x4778,_0x119f38),_0x43acea=_0x42d433['zETso'](_0x2e677d[_0xa61d5a(0x3cc)+'tY']||0x268c+0x1*-0xacb+-0x1*0x1bc1,_0x31e1c5);continue;case'6':var _0x3f6096=_0x352116['offse'+_0xa61d5a(0x309)+'h']||-0x1d9d+-0x228a*0x1+0x4293,_0x4f088a=_0x352116[_0xa61d5a(0x27e)+_0xa61d5a(0x3e9)+'ht']||-0x1*0x243c+-0x32*-0x72+0x11c*0xe;continue;case'7':_0x352116[_0xa61d5a(0x8a0)]['left']=_0x42d433[_0xa61d5a(0x3ff)](_0x4a464f,'px');continue;case'8':if(!_0x3ccf0b)return;continue;case'9':_0x352116['style']['right']=_0x42d433[_0xa61d5a(0x2ac)];continue;}break;}},_0xb24f2a=function(){var _0x292486=_0x5aa2ef,_0x384bbb={'Vufet':function(_0x3b09af,_0x1f92c8){return _0x3b09af(_0x1f92c8);},'sPfMT':function(_0x4f9f90,_0x46068b){var _0x2b39c3=_0x4a91;return _0x42d433[_0x2b39c3(0x467)](_0x4f9f90,_0x46068b);}};if(_0x42d433[_0x292486(0x2c0)](_0x292486(0x8e5),'kypRA')){if(!_0x3ccf0b)return;_0x3ccf0b=![],_0x370b6c[_0x292486(0x8a0)]['curso'+'r']='grab',_0x2b076b();}else{_0x384bbb['Vufet'](_0x46466a,_0x53eaa7[_0x292486(0x15d)]);try{var _0x4fdc40=_0xe989ef[_0x292486(0x7b3)+_0x292486(0x9e5)+'t']||-0x1630+0x16d2+0x2*0x13f;if(_0x4fdc40<-0x2e2+0x2459*0x1+0x3*-0xa59)_0x384bbb[_0x292486(0xa88)](_0x48c41f,![]);}catch(_0x4227cb){}}};_0x370b6c[_0x5aa2ef(0xb86)+_0x5aa2ef(0x835)+'stene'+'r'](_0x5aa2ef(0x3d7)+_0x5aa2ef(0x872),_0x3cf3d2),window[_0x5aa2ef(0xb86)+_0x5aa2ef(0x835)+_0x5aa2ef(0x6d2)+'r']('mouse'+'move',_0x53b867),window[_0x5aa2ef(0xb86)+_0x5aa2ef(0x835)+_0x5aa2ef(0x6d2)+'r'](_0x4490c7[_0x5aa2ef(0x354)],_0xb24f2a),_0x370b6c[_0x5aa2ef(0xb86)+_0x5aa2ef(0x835)+'stene'+'r'](_0x5aa2ef(0x356)+_0x5aa2ef(0x5b0),_0x3cf3d2,{'passive':![]}),window[_0x5aa2ef(0xb86)+'entLi'+'stene'+'r'](_0x4490c7['xbyQP'],_0x53b867,{'passive':![]}),window['addEv'+_0x5aa2ef(0x835)+_0x5aa2ef(0x6d2)+'r'](_0x5aa2ef(0x356)+_0x5aa2ef(0x45f),_0xb24f2a);}else{if(!_0x3af395['petal'])return;var _0x3fddf7=_0x3538d2();_0x239817[_0x5aa2ef(0x6bf)][_0x5aa2ef(0x8a0)][_0x5aa2ef(0x8e0)+'ty']=_0x531e39[_0x5aa2ef(0xa7b)]?'1':_0x3fddf7?'.8':_0x4490c7[_0x5aa2ef(0x3fa)],_0x1bfef4['petal']['title']=_0x3fddf7?_0x4490c7['EzdAn']:'Sakur'+_0x5aa2ef(0x8e9)+_0x5aa2ef(0x22c)+_0x5aa2ef(0x587)+'aitin'+_0x5aa2ef(0x334)+_0x5aa2ef(0xaf4)+'game\x20'+'(Inse'+_0x5aa2ef(0x75d);}}catch(_0x338f79){}}function _0x2776d4(){var _0x920bd5=_0x16065b;if(_0x4490c7['RvlZz']!==_0x4490c7['sEmlD']){if(_0x15e472[_0x920bd5(0x8de)])return _0x15e472[_0x920bd5(0xa3e)];try{if(!document[_0x920bd5(0x4eb)]||!document['body'][_0x920bd5(0x4b9)+_0x920bd5(0x46f)+'d'])return null;if(!document['getEl'+_0x920bd5(0x59a)+'ById'](_0x4490c7['lEZPw'])){var _0x2247d6=document['creat'+_0x920bd5(0x238)+_0x920bd5(0x56c)]('style');_0x2247d6['id']=_0x4490c7[_0x920bd5(0x83e)],_0x2247d6[_0x920bd5(0x3f1)+_0x920bd5(0x217)+'t']=_0x1eef45,(document['head']||document[_0x920bd5(0x253)+'entEl'+_0x920bd5(0x59a)])[_0x920bd5(0x4b9)+_0x920bd5(0x46f)+'d'](_0x2247d6);}var _0x595d95=_0x4490c7['vdrfi'](_0x78f5e7,_0x920bd5(0x28e),_0x4490c7[_0x920bd5(0x877)]);_0x595d95['id']=_0x4490c7[_0x920bd5(0x393)];var _0x2fbddd=_0x4490c7[_0x920bd5(0x459)](_0x78f5e7,_0x920bd5(0x28e),'mn-si'+'de'),_0x3094f=_0x4490c7['qDqGY'](_0x78f5e7,_0x4490c7[_0x920bd5(0x9aa)],_0x4490c7[_0x920bd5(0x63c)],_0x40326c);_0x2fbddd['appen'+'dChil'+'d'](_0x3094f);var _0x4a5e52=_0x4490c7[_0x920bd5(0x9e0)](_0x78f5e7,_0x4490c7['DsLgU'],_0x4490c7['wnQzI']),_0x864e4f=_0x78f5e7(_0x4490c7[_0x920bd5(0x9aa)],_0x920bd5(0x5eb)+'p'),_0x51976a=_0x78f5e7(_0x4490c7[_0x920bd5(0x9aa)],_0x4490c7[_0x920bd5(0x93d)]),_0x3c1d8c=_0x78f5e7(_0x4490c7[_0x920bd5(0x9aa)],_0x4490c7['nNyIs'],_0x920bd5(0x500)+_0x920bd5(0x8e9)+'llWar'+'z'),_0x1fd38d=_0x78f5e7(_0x920bd5(0x28e),'mn-su'+'b','start'+'ing…');_0x51976a[_0x920bd5(0x4b9)+_0x920bd5(0x46f)+'d'](_0x3c1d8c),_0x51976a[_0x920bd5(0x4b9)+'dChil'+'d'](_0x1fd38d);var _0x586359=_0x4490c7['qDqGY'](_0x78f5e7,_0x4490c7['DsLgU'],_0x920bd5(0x4c2)+_0x920bd5(0x226),_0x920bd5(0x308)+'viewB'+_0x920bd5(0x19f)+_0x920bd5(0xa4c)+_0x920bd5(0x88d)+'<path'+'\x20d=\x22M'+_0x920bd5(0x723)+_0x920bd5(0xa24)+_0x920bd5(0x33f)+_0x920bd5(0x945)+_0x920bd5(0x7a5)+_0x920bd5(0x996));_0x586359['oncli'+'ck']=function(){_0x4490c7['LYIfX'](_0x5f554b,![]);},_0x864e4f[_0x920bd5(0x4b9)+'dChil'+'d'](_0x51976a),_0x864e4f[_0x920bd5(0x4b9)+'dChil'+'d'](_0x586359);var _0xc77e42=_0x4490c7['pUIuK'](_0x78f5e7,'div',_0x920bd5(0x679)+'ls');_0x4a5e52[_0x920bd5(0x4b9)+'dChil'+'d'](_0x864e4f),_0x4a5e52['appen'+_0x920bd5(0x46f)+'d'](_0xc77e42),_0x595d95[_0x920bd5(0x4b9)+'dChil'+'d'](_0x2fbddd),_0x595d95[_0x920bd5(0x4b9)+'dChil'+'d'](_0x4a5e52),document['body']['appen'+_0x920bd5(0x46f)+'d'](_0x595d95),_0x15e472['root']=_0x595d95,_0x15e472[_0x920bd5(0x412)]=_0xc77e42,_0x15e472['head']=_0x3c1d8c,_0x15e472[_0x920bd5(0x465)]=_0x1fd38d,_0x109826(),_0x1caaea(),_0x223b5e(_0x595d95,_0x864e4f);var _0x377af3={};for(var _0x4e8a60=-0x5f*0x28+0xf2a+-0x29*0x2;_0x4e8a60<_0x3799fb['lengt'+'h'];_0x4e8a60++){var _0x55a6f2=_0x3799fb[_0x4e8a60],_0x1a553b=_0x78f5e7(_0x4490c7['Shtls'],_0x4490c7[_0x920bd5(0x33e)],_0x4490c7['cbZFq']+_0x55a6f2['label']+_0x4490c7[_0x920bd5(0x39a)]);_0x1a553b[_0x920bd5(0x9e7)]=_0x920bd5(0x7cd)+'n',_0x1a553b[_0x920bd5(0x2e9)]=_0x55a6f2[_0x920bd5(0x7e6)],function(_0x351b55){var _0x96f736=_0x920bd5,_0x3c3707={'DEiha':_0x4490c7['HWnah']};_0x1a553b[_0x96f736(0x574)+'ck']=function(){var _0x4821f9=_0x96f736,_0x5a40bb={'dHOWZ':function(_0x2a9530,_0x38a27f){return _0x2a9530+_0x38a27f;},'xPnpj':_0x4821f9(0x799)};if(_0x3c3707[_0x4821f9(0xb55)]!==_0x3c3707[_0x4821f9(0xb55)]){var _0x1b5993=_0x597585['Unity'+_0x4821f9(0x8a9)+_0x4821f9(0x9c0)]&&_0x4a7ee3[_0x4821f9(0x2bd)+_0x4821f9(0x8a9)+_0x4821f9(0x9c0)][_0x4821f9(0x70f)+'me'],_0x1fe4c6=_0x1b5993&&_0x1b5993[_0x4821f9(0x410)+'nalWa'+_0x4821f9(0xb83)+'es']||[],_0x2c353e={};for(var _0x809e44=-0x1*0x17f6+0x1657+0x19f;_0x809e44<_0x1fe4c6['lengt'+'h']&&_0x809e44<-0x686+0x1792+0x1c*-0xd;_0x809e44++){var _0x3e4e90=_0x5a40bb['dHOWZ'](_0x1fe4c6[_0x809e44][_0x4821f9(0xb43)+'s'][_0x4821f9(0x895)](',')+_0x4821f9(0x74e),_0x1fe4c6[_0x809e44][_0x4821f9(0x448)+'nType']||_0x5a40bb[_0x4821f9(0x927)]);_0x2c353e[_0x3e4e90]=(_0x2c353e[_0x3e4e90]||-0x1a14+0x258a+-0x12*0xa3)+(0x125e+-0x1ff5+-0x1e*-0x74);}_0xf4a687['wasmT'+_0x4821f9(0x3d5)]=_0x2c353e;}else _0x4944df(_0x351b55);};}(_0x55a6f2['id']),_0x377af3[_0x55a6f2['id']]=_0x1a553b,_0x2fbddd[_0x920bd5(0x4b9)+'dChil'+'d'](_0x1a553b);}_0x15e472[_0x920bd5(0x7cd)+'ns']=_0x377af3;var _0x4b5b80=_0x78f5e7('div',null,_0x355eaa);return _0x4b5b80['id']='sakur'+_0x920bd5(0x469)+'al',_0x4b5b80[_0x920bd5(0x2e9)]=_0x4490c7[_0x920bd5(0x85a)],_0x4b5b80['onmou'+_0x920bd5(0x6c6)+'er']=function(){var _0x1f9bd1=_0x920bd5;_0x4b5b80[_0x1f9bd1(0x8a0)][_0x1f9bd1(0x8e0)+'ty']='1';},_0x4b5b80[_0x920bd5(0x601)+'selea'+'ve']=function(){var _0x2c2cce=_0x920bd5;_0x4b5b80[_0x2c2cce(0x8a0)][_0x2c2cce(0x8e0)+'ty']=_0x15e472[_0x2c2cce(0xa7b)]?'1':'.5';},_0x4b5b80[_0x920bd5(0x574)+'ck']=function(_0xf2c90d){var _0x3de411=_0x920bd5;if(_0xf2c90d&&_0xf2c90d['stopP'+_0x3de411(0x1de)+'ation'])_0xf2c90d[_0x3de411(0x696)+_0x3de411(0x1de)+'ation']();_0x5f554b(!_0x15e472['open']);},document['body'][_0x920bd5(0x4b9)+'dChil'+'d'](_0x4b5b80),_0x15e472['petal']=_0x4b5b80,_0x4490c7[_0x920bd5(0xb26)](setInterval,function(){var _0x596504=_0x920bd5;try{if(!_0x15e472[_0x596504(0x6bf)])return;var _0x3766e8=_0x16ad62();_0x15e472[_0x596504(0x6bf)][_0x596504(0x8a0)]['opaci'+'ty']=_0x15e472[_0x596504(0xa7b)]?'1':_0x3766e8?'.8':_0x4490c7[_0x596504(0x3fa)],_0x15e472['petal'][_0x596504(0x2e9)]=_0x3766e8?_0x596504(0x500)+_0x596504(0x8e9)+_0x596504(0x22c)+_0x596504(0x82d)+'sert)':'Sakur'+'a\x20Ski'+'llWar'+_0x596504(0x587)+'aitin'+_0x596504(0x334)+_0x596504(0xaf4)+_0x596504(0xb70)+_0x596504(0x2a8)+'rt)';}catch(_0x48124b){}},0xd24+-0x1063+0x5fb),_0x15e472[_0x920bd5(0x8de)]=!![],_0x4490c7[_0x920bd5(0x233)](_0x4944df,_0x15e472['cat']),_0x595d95;}catch(_0x1b9f95){return console[_0x920bd5(0x7b1)](_0x920bd5(0x3ca)+_0x920bd5(0x204)+_0x920bd5(0x8a5)+'\x20unav'+'ailab'+'le',_0x4490c7[_0x920bd5(0x4dc)]+_0x5e2156,_0x1b9f95),null;}}else{var _0x363407=_0x9a8834[_0x920bd5(0xaa1)+'ime'];if(typeof _0x363407['resol'+_0x920bd5(0x9a2)+'e']===_0x4490c7[_0x920bd5(0x8a4)]){var _0x15f391=_0x363407['resol'+_0x920bd5(0x9a2)+'e']();if(_0x15f391)return _0x14894e['sourc'+'e']=_0x4490c7['eJyie'],_0x15f391;}if(_0x363407['_game'])return _0x575c83[_0x920bd5(0x2ec)+'e']=_0x920bd5(0x90c)+_0x920bd5(0x632)+_0x920bd5(0x1e6)+_0x920bd5(0xa40)+'e',_0x363407['_game'];}}function _0x4944df(_0x5d9254){var _0x26c820=_0x16065b;_0x15e472[_0x26c820(0x15d)]=_0x5d9254,_0x15e472[_0x26c820(0x538)]=[];if(!_0x15e472['cols'])return;var _0x40886a=null;for(var _0x504ab7=0x1f36+0x238d*0x1+-0x42c3;_0x4490c7[_0x26c820(0x45c)](_0x504ab7,_0x3799fb['lengt'+'h']);_0x504ab7++)if(_0x3799fb[_0x504ab7]['id']===_0x5d9254)_0x40886a=_0x3799fb[_0x504ab7];_0x15e472['head']['textC'+_0x26c820(0x217)+'t']=_0x4490c7[_0x26c820(0x359)]+(_0x40886a&&_0x40886a[_0x26c820(0x7e6)]||'?');for(var _0x42e2f1 in _0x15e472['butto'+'ns']){if(_0x15e472[_0x26c820(0x7cd)+'ns'][_0x42e2f1]['class'+_0x26c820(0x303)])_0x15e472[_0x26c820(0x7cd)+'ns'][_0x42e2f1][_0x26c820(0x6ed)+'Name']=_0x26c820(0x1bd)+'b'+(_0x42e2f1===_0x5d9254?_0x26c820(0x7c7)+'ve':'');}var _0xa4971d=[];try{_0xa4971d=_0x4490c7[_0x26c820(0x2dd)](_0x354dcb,_0x5d9254);}catch(_0x16479b){_0xa4971d=[];}while(_0x15e472[_0x26c820(0x412)]['first'+'Child'])_0x15e472[_0x26c820(0x412)][_0x26c820(0x4b5)+'eChil'+'d'](_0x15e472['cols'][_0x26c820(0x78b)+_0x26c820(0x6b3)]);for(var _0x4ae351=-0x1*0x8a+-0x1eef+0x1f79;_0x4490c7['gVauL'](_0x4ae351,_0xa4971d[_0x26c820(0x618)+'h']);_0x4ae351++)_0x15e472[_0x26c820(0x412)]['appen'+_0x26c820(0x46f)+'d'](_0xa4971d[_0x4ae351]);}function _0x5f554b(_0x5f466c){var _0x4444a6=_0x16065b;if(_0x4490c7[_0x4444a6(0x801)]===_0x4444a6(0x90a))_0x340b26['on']=_0x28304e,_0x57fb11();else{_0x15e472[_0x4444a6(0xa7b)]=!!_0x5f466c;var _0x439fe3=_0x4490c7['pCjvY'](_0x2776d4);if(!_0x439fe3)return;_0x439fe3['class'+_0x4444a6(0xa9b)]=_0x4444a6(0x5ee)+_0x4444a6(0x8dc)+(_0x15e472[_0x4444a6(0xa7b)]?'\x20show'+'n':'');if(_0x15e472[_0x4444a6(0x6bf)])_0x15e472['petal']['style'][_0x4444a6(0x8e0)+'ty']=_0x15e472[_0x4444a6(0xa7b)]?'1':'.5';if(_0x15e472[_0x4444a6(0xa7b)]){if(_0x4490c7['MatbZ']!==_0x4490c7['dhzBb']){_0x4944df(_0x15e472['cat']);try{if('vkTvL'!==_0x4490c7['sTLHP']){var _0x4dabc2=window[_0x4444a6(0x7b3)+'Heigh'+'t']||-0x13b1+0xf70+0x1*0x761;if(_0x4490c7['FMNXe'](_0x4dabc2,0x5*0x108+0x3b+-0x2f7))_0xac07a9(![]);}else _0x51e8e4[_0x4444a6(0x3a0)]=_0x5226cb,_0x5d87e2['on']=!![],_0x5b9751();}catch(_0x383dbc){}}else{var _0x2dbaa8=_0x4ac39a[_0x21e33c];_0x4155a6[_0x4444a6(0xa01)](_0x4490c7[_0x4444a6(0xaf5)](_0x2dbaa8+_0x4490c7[_0x4444a6(0x1fe)],_0x2a9d16[_0x2dbaa8]));}}}}function _0x1c52fb(){var _0x36017e=_0x16065b,_0x34e697={'swNUy':function(_0x1f49f1,_0x12006a){return _0x1f49f1/_0x12006a;}};if(!_0x15e472['open']||!_0x15e472['built'])return;try{for(var _0x2945df=0xc24+-0x1*-0xb1d+-0x1741;_0x4490c7[_0x36017e(0x6ab)](_0x2945df,_0x15e472[_0x36017e(0x538)]['lengt'+'h']);_0x2945df++){try{_0x15e472['syncs'][_0x2945df]();}catch(_0x5dd055){}}var _0x1b9543=_0x3ebaa9;_0x15e472[_0x36017e(0x465)]['textC'+_0x36017e(0x217)+'t']=_0x1b9543?_0x4490c7[_0x36017e(0x2e1)](_0x4490c7['UeFbO'](_0x4490c7['WatRI'](_0x4490c7[_0x36017e(0x95e)](_0x4490c7['qPwrJ'](_0x4490c7['IbBsw']('v',_0x1b9543['versi'+'on'])+(_0x36017e(0x197)+_0x36017e(0x541)+'\x20')+_0x1b9543[_0x36017e(0x541)+'Appli'+'ed'],'/'),_0x1b9543[_0x36017e(0x541)+_0x36017e(0xac5)]),_0x4490c7['GHODO'])+(_0x1b9543[_0x36017e(0x451)]&&_0x1b9543['esp'][_0x36017e(0x23e)+'rCoun'+'t']||0x3*-0xb1+0x1f78+-0x1d65),_0x4490c7[_0x36017e(0x1b7)]),_0x1b9543[_0x36017e(0x287)+'emory']&&_0x1b9543[_0x36017e(0x287)+_0x36017e(0x822)][_0x36017e(0x788)+_0x36017e(0xa0c)]?Math[_0x36017e(0x50e)](_0x4490c7['wghwD'](_0x1b9543[_0x36017e(0x287)+'emory'][_0x36017e(0x168)],0xcdf7*0x1f+-0x4*-0x5da83+-0x1*0x205af5))+'MB':'-'):'waiti'+_0x36017e(0x3ef)+'r\x20the'+_0x36017e(0xb05)+_0x36017e(0x647)+_0x36017e(0x535);var _0x3163bf=_0x15e472[_0x36017e(0x412)][_0x36017e(0x4e6)+'Selec'+_0x36017e(0x96b)+'l']?_0x15e472[_0x36017e(0x412)]['query'+_0x36017e(0x291)+'torAl'+'l'](_0x36017e(0x545)+_0x36017e(0x5d9)):[];for(var _0x4c7813=0x1*-0x16b5+0xc59+0xa5c;_0x4c7813<_0x3163bf[_0x36017e(0x618)+'h'];_0x4c7813++){if('BEwzd'!==_0x36017e(0xb34)){var _0x96ca08=_0x3163bf[_0x4c7813][_0x36017e(0x5f7)+'et']['k'],_0xddd549='';if(_0x96ca08===_0x36017e(0x577)+'ON')_0xddd549=_0x1b9543?_0x1b9543[_0x36017e(0x7a2)+'on']:'-';else{if(_0x4490c7[_0x36017e(0x554)](_0x96ca08,_0x4490c7[_0x36017e(0x6dc)]))_0xddd549=_0x1b9543?_0x4490c7['OXBgx'](_0x1b9543[_0x36017e(0x541)+'Appli'+'ed'],_0x4490c7[_0x36017e(0x531)])+_0x1b9543['hooks'+'Regis'+_0x36017e(0x7c0)+'AtArm']:'-';else{if(_0x4490c7['BiSHb'](_0x96ca08,_0x36017e(0x304)+_0x36017e(0x8b5)+'ntiat'+'e()'))_0xddd549=_0x1b9543&&_0x1b9543[_0x36017e(0x287)+'emory']&&_0x1b9543['wasmM'+'emory'][_0x36017e(0x788)+_0x36017e(0xa0c)]?_0x4490c7['XNDPt'](Math['round'](_0x1b9543[_0x36017e(0x287)+_0x36017e(0x822)][_0x36017e(0x168)]/(-0x1b58d*-0xb+-0x1c01e7+0x1934d8))+('\x20MB\x20@'+'\x20')+_0x1b9543['wasmM'+_0x36017e(0x822)]['atMs'],'ms'):'-';else{if(_0x96ca08===_0x36017e(0x1f6)+'nNetw'+_0x36017e(0xa60)+'nc')_0xddd549=_0x1b9543&&_0x1b9543[_0x36017e(0x451)]?String(_0x1b9543['esp'][_0x36017e(0x23e)+_0x36017e(0x5ea)+'t']):'-';else{if(_0x4490c7[_0x36017e(0x1bb)](_0x96ca08,_0x4490c7[_0x36017e(0x5de)]))_0xddd549=_0x1b9543&&_0x1b9543[_0x36017e(0x451)]?String(_0x1b9543[_0x36017e(0x451)][_0x36017e(0x306)+_0x36017e(0xaf3)]):'-';else{if(_0x4490c7['WiyRI'](_0x96ca08,'off\x20t'+_0x36017e(0x60f)+_0x36017e(0x317)+'nager'))_0xddd549=_0x1b9543&&_0x1b9543['esp']&&_0x1b9543[_0x36017e(0x451)][_0x36017e(0xa64)+'a']?_0x1b9543['esp'][_0x36017e(0xa64)+'a']+'\x20('+_0x1b9543[_0x36017e(0x451)][_0x36017e(0xa64)+'aFrom']+')':'-';else{if(_0x96ca08===_0x4490c7[_0x36017e(0x743)])_0xddd549=_0x1b9543&&_0x1b9543[_0x36017e(0x6b9)]&&_0x1b9543[_0x36017e(0x6b9)][_0x36017e(0x321)]?_0x1b9543['local']['feet'][_0x36017e(0x49b)](function(_0x3707e1){var _0xea005=_0x36017e;return _0x34e697['swNUy'](Math[_0xea005(0x50e)](_0x3707e1*(0x6f*0x55+-0x23f5+0xd*-0xa)),0xb*0x29f+0x1*-0xe2f+-0xe42);})['join']('\x20\x20'):'-';else{if(_0x4490c7['YdKsT'](_0x96ca08,_0x4490c7['kaRto']))_0xddd549=_0x1b9543&&_0x1b9543['local']&&_0x1b9543['local'][_0x36017e(0x586)]?_0x1b9543[_0x36017e(0x6b9)]['eye']['map'](function(_0x2cbae2){var _0xe10edc=_0x36017e;return Math[_0xe10edc(0x50e)](_0x4490c7[_0xe10edc(0xab1)](_0x2cbae2,-0x1a1a+0xcf9+0xd85))/(-0x10b8+-0x2*-0xe78+-0xbd4);})['join']('\x20\x20'):'-';else{if(_0x4490c7['okuFY']!=='EFhYa'){var _0x555673=_0x96ca08['split']('+');_0xddd549=_0x1b873d(_0x1b9543,_0x4490c7[_0x36017e(0x54f)](_0x555673[-0x4*0x32b+-0x26*-0xa7+0x3*-0x40a]['index'+'Of'](_0x36017e(0x382)+'h'),0x30*-0xbc+-0x16a+0x2d2*0xd)?_0x4490c7[_0x36017e(0x17d)]:_0x36017e(0x8ce)+_0x36017e(0x7e1)+'ler',_0x4490c7[_0x36017e(0x380)](parseInt,_0x555673[-0x5b*0x19+-0x21b9+0x2a9d*0x1],-0x1a45+0xf*-0x24b+0x2*0x1e5d));}else return _0x112dbe['facto'+'r'];}}}}}}}}if(_0xddd549!==_0x3163bf[_0x4c7813]['textC'+'onten'+'t'])_0x3163bf[_0x4c7813]['textC'+_0x36017e(0x217)+'t']=_0xddd549;}else _0x4944a8(!![]);}}catch(_0x27973){}}function _0x55baaf(){var _0x39a519=_0x16065b;try{if(_0x39a519(0x9ed)!==_0x39a519(0x9ed))_0xd32b1f();else{var _0x3ba16d=_0x39f72e['FPSco'+_0x39a519(0x7e1)+_0x39a519(0x763)];if(!_0x3ba16d||!_0x3ba16d[_0x39a519(0x1cd)])return null;var _0x38ce8c=_0x392b1a(_0x3ba16d[_0x39a519(0x1cd)],0x1f6d+0x106c+0x11*-0x2a5,0xb*-0x56+0x15f1+0x48f*-0x4);return _0x38ce8c?_0x38ce8c[0x2544+0x64d+-0x2b90]:null;}}catch(_0x12c4bf){return null;}}var _0x536cc3=0x19*-0x45+0x1*0xf77+-0x8b8+0.5,_0x13830d=-0x1fce+0xd*-0x2d4+0x4493+0.8;function _0x264430(_0x2d2590,_0x4f2b3e){var _0x5983f9=_0x16065b,_0x3f9c01={'auyVC':function(_0x951ed3,_0x58117d){var _0x269a9e=_0x4a91;return _0x4490c7[_0x269a9e(0xa22)](_0x951ed3,_0x58117d);},'fRBWo':function(_0x2b91f9,_0x5cf711){return _0x2b91f9(_0x5cf711);},'rzpzJ':_0x5983f9(0x3d9)+'r','sBetY':function(_0x5e43e6,_0x102be4,_0x29dfe4){return _0x5e43e6(_0x102be4,_0x29dfe4);},'vxyaC':_0x4490c7['daItW']};if(_0x4490c7[_0x5983f9(0xa20)](_0x5983f9(0x575),_0x4490c7[_0x5983f9(0x550)])){var _0x596be5=null,_0x273387=0x1195+0xa4*0x31+-0x30f9,_0x58a251=0x2*0xafb+0x1*-0x1265+-0x53*0xb,_0x2d9bda=_0x4490c7[_0x5983f9(0x6b6)](_0x4f2b3e,null)&&_0x4f2b3e!==undefined&&_0x4490c7[_0x5983f9(0x48f)](isFinite,_0x4f2b3e);for(var _0x37c883=0x213+-0x131a+0x1107;_0x37c883<_0x2d2590['lengt'+'h'];_0x37c883++){var _0x4091a2=_0x2d2590[_0x37c883]['v'];if(!_0x4091a2)continue;if(_0x4490c7[_0x5983f9(0x515)](_0x4091a2[0x25cb+0x190b+-0x3ed6],0x36*-0x79+-0x331*-0xc+-0xcc6)&&_0x4490c7['XFYug'](_0x4091a2[0x10db*0x1+0x3b*-0x7+-0xf3d],-0x1a93+-0x6ba+-0x307*-0xb)&&_0x4091a2[0x20c0+0x1acf*-0x1+-0x5ef]===-0xec*-0xd+-0x1d95+0x35*0x55)continue;var _0x5a1a58=_0x4490c7['fawvu'](_0x4490c7['asWWq'](_0x4091a2[0x3*-0xca3+0x3*-0x942+0x41af],_0x4091a2[-0x1103+0x153d*0x1+0x43a*-0x1]),_0x4091a2[0x1*-0x132c+-0x5f8+0x3*0x862]*_0x4091a2[0x1d0f+0x1*-0x64d+-0x7*0x340]);if(_0x2d9bda&&Math['abs'](_0x4091a2[-0x3bd+-0x136c+0x172a]-_0x4f2b3e)>_0x536cc3)continue;if(_0x2d9bda)_0x58a251++;if(!_0x596be5||_0x4490c7[_0x5983f9(0x87f)](_0x5a1a58,_0x273387)){if(_0x4490c7[_0x5983f9(0x9a4)]!==_0x4490c7['QTHTj'])_0x273387=_0x5a1a58,_0x596be5=_0x2d2590[_0x37c883];else{if(_0x4ae06a&&_0x3f9c01[_0x5983f9(0x8d9)](typeof _0x2d796e[_0x5983f9(0x752)],'funct'+_0x5983f9(0x9c3)))_0x121478['then'](_0x4fb37e,function(){});else _0x3f9c01['fRBWo'](_0xaf9a81,_0x1841ad);}}}if(!_0x596be5){_0x58a251=-0x531*-0x5+-0x1c52+-0x1*-0x25d;for(var _0x1229ec=0x55d*-0x5+0x3a3+0x172e*0x1;_0x1229ec<_0x2d2590['lengt'+'h'];_0x1229ec++){var _0x4e395c=_0x2d2590[_0x1229ec]['v'];if(!_0x4e395c)continue;if(_0x4e395c[0x259*-0x1+-0x1adc+-0x1*-0x1d35]===-0x351*-0x7+0x8e0*-0x3+-0x1*-0x369&&_0x4490c7[_0x5983f9(0x742)](_0x4e395c[0x2239+0x2*0x9+0xe*-0x273],0x50e*-0x2+-0x26ee+0x310a)&&_0x4e395c[-0xef1+0xa93*0x2+-0x633]===-0xe14+0x4a4*0x3+0x1*0x28)continue;var _0x29b4b5=_0x4490c7[_0x5983f9(0xa7a)](_0x4e395c[-0x2*-0x4cc+-0x993+-0x5],_0x4e395c[-0x51c+-0x19d1+0x1eed])+_0x4490c7['jVYDL'](_0x4e395c[-0x61f+0x1*-0x1c05+-0x5b1*-0x6],_0x4e395c[0x1b41*-0x1+0x8e9*-0x1+0x5*0x73c]);if(!_0x596be5||_0x29b4b5>_0x273387){if('jFKsv'==='ycmoT')try{var _0x3017ba=_0x254a57['getIt'+'em'](_0xb55bce);if(!_0x3017ba)return;var _0x28b7b7=_0x12dbf9[_0x5983f9(0x383)](_0x3017ba);if(_0x28b7b7&&typeof _0x28b7b7['x']===_0x3f9c01['rzpzJ']&&typeof _0x28b7b7['y']===_0x5983f9(0x3d9)+'r')_0x203b98[_0x5983f9(0xa78)]=_0x28b7b7;}catch(_0x4384b1){}else _0x273387=_0x29b4b5,_0x596be5=_0x2d2590[_0x1229ec];}}}return{'pos':_0x596be5?_0x596be5['v']:null,'posAt':_0x596be5?_0x596be5['o']:null,'inBand':_0x58a251,'reach':Math[_0x5983f9(0x8fd)](_0x273387)};}else for(var _0x442683=-0x1bd9*-0x1+0x8b9+-0x2492;_0x442683<_0x48193b[_0x5983f9(0x618)+'h'];_0x442683++){var _0x20ae0a=_0x54f9d4(_0x6e0e29+_0x3f9c01[_0x5983f9(0x8fc)](_0x3fdb1f,_0x5114b6[_0x442683][0x1319+-0x805*0x1+0xb14*-0x1],0x1d43+-0x1373+0x9c*-0x10),_0x3f9c01['vxyaC']);if(_0x20ae0a)_0x173565[_0x5983f9(0x8ea)][_0x57f1f9[_0x442683][0x21e6*-0x1+0x253c+-0x355*0x1]]='0x'+(_0x20ae0a>>>-0x133d*0x1+0x5*0x449+-0x10*0x23)['toStr'+'ing'](0x215+-0xd96*0x1+-0x3f*-0x2f);}}function _0x29609a(){var _0x3d7b4f=_0x16065b,_0x26a542={'FJEGx':function(_0x5c8c22,_0x403f35){return _0x5c8c22+_0x403f35;},'YdSiM':function(_0x2c1b09,_0x44d381){return _0x2c1b09+_0x44d381;},'exFGZ':function(_0x265925,_0x4a8262){var _0x1fa9f6=_0x4a91;return _0x4490c7[_0x1fa9f6(0x3a5)](_0x265925,_0x4a8262);}};if(_0x3d7b4f(0x986)!==_0x4490c7[_0x3d7b4f(0x4c8)])return _0x26a542[_0x3d7b4f(0x9b8)](_0x26a542[_0x3d7b4f(0x2ee)]('0x',_0x26a542['exFGZ'](_0xf1a3c['o'],-0x238*0xd+-0x1535*0x1+0x1*0x320d)?'?':_0x566dde['o'][_0x3d7b4f(0x6f9)+_0x3d7b4f(0x8bc)](0x92b+-0xd99+-0x32*-0x17))+'\x20(',_0x33e500[_0x3d7b4f(0x89f)])+')';else{var _0xf8f516=_0x39f72e['FPSco'+_0x3d7b4f(0x7e1)+_0x3d7b4f(0x763)];if(!_0xf8f516||!_0xf8f516[_0x3d7b4f(0x1cd)])return null;var _0x45ee00=_0x44a8c1['FPSco'+_0x3d7b4f(0x7e1)+_0x3d7b4f(0x763)]||[],_0x33d1e6=[];for(var _0x5f5100=0x3*-0x3db+-0x3*-0x577+-0x4d4;_0x4490c7['yIRiL'](_0x5f5100,_0x45ee00[_0x3d7b4f(0x618)+'h']);_0x5f5100++){if(_0x4490c7[_0x3d7b4f(0x165)](_0x45ee00[_0x5f5100][0x1*0x1673+0xeb*-0x11+-0x6d7],'v3'))continue;var _0x42e899=_0x392b1a(_0xf8f516['ptr'],_0x45ee00[_0x5f5100][0x224f+0x1a59+-0x3ca8],-0x1bce+-0x1003*0x1+0x15ea*0x2);if(_0x42e899)_0x33d1e6[_0x3d7b4f(0xa01)]({'o':'0x'+_0x45ee00[_0x5f5100][0x929+-0xd57+-0x1*-0x42e]['toStr'+'ing'](-0x56d+-0xbad*-0x3+0x26*-0xc7),'v':_0x42e899});}var _0x53edad=_0x264430(_0x33d1e6,null);if(!_0x53edad[_0x3d7b4f(0xa78)])return null;var _0x19e4f1=_0x53edad[_0x3d7b4f(0xa78)];return{'ptr':_0xf8f516[_0x3d7b4f(0x1cd)],'feet':_0x19e4f1,'posAt':_0x53edad[_0x3d7b4f(0x59c)],'inBand':_0x53edad[_0x3d7b4f(0x493)+'d'],'eye':[_0x19e4f1[-0x13dd+-0x1*-0x106+0x12d7],_0x4490c7['EUtqz'](_0x19e4f1[0x8f9+0x3b*-0x55+0xa9f],_0x13830d),_0x19e4f1[0xef6+0x73a+0x14e*-0x11]],'reach':_0x53edad[_0x3d7b4f(0x6a0)],'pitch':_0x4490c7[_0x3d7b4f(0xa8c)](_0x3f03aa,_0x4490c7[_0x3d7b4f(0xaf5)](_0xf8f516[_0x3d7b4f(0x1cd)],0xbf6+-0x822+0x1c*-0x16),_0x3d7b4f(0xb59)),'yaw':_0x4490c7['pUIuK'](_0x3f03aa,_0xf8f516['ptr']+(0x86*0x39+-0x243f+-0x31*-0x29),_0x3d7b4f(0xb59))};}}function _0x1017af(){var _0x56dcbf=_0x16065b;if(_0x4490c7[_0x56dcbf(0x65a)]===_0x56dcbf(0x7ca)){var _0x4a7cd7=_0x29609a(),_0x4c3f92=[],_0x40e926=_0x24ab5f[_0x56dcbf(0x1f6)+_0x56dcbf(0x33a)+_0x56dcbf(0xa60)+'nc']||{},_0x1515a5=Object[_0x56dcbf(0x4f0)](_0x40e926);for(var _0x2ea52c=-0xc82*-0x2+-0x16bd+-0x247;_0x2ea52c<_0x1515a5[_0x56dcbf(0x618)+'h']&&_0x2ea52c<-0x1c6e+0xb*0x183+0x1*0xbed;_0x2ea52c++){if(_0x56dcbf(0x7d2)===_0x56dcbf(0x345)){var _0x220917=(_0x56dcbf(0x2cf)+_0x56dcbf(0x457)+_0x56dcbf(0x828))['split']('|'),_0x26d523=-0xa*0x30d+-0x15+0x1e97;while(!![]){switch(_0x220917[_0x26d523++]){case'0':if(!_0x433a46)return null;continue;case'1':_0x433a46['o']=_0x46bc76;continue;case'2':_0x433a46['k']=_0x5d31d7;continue;case'3':return _0x1b92e0['rows'][0x63a+-0x230d+0x1cd3];case'4':var _0x1b92e0=_0xa470f2([_0x433a46]);continue;case'5':var _0x433a46=_0x4490c7['qDqGY'](_0x5271a5,_0x162d64,_0x21c244,_0x1cfb6e);continue;case'6':if(!_0x1b92e0[_0x56dcbf(0x6db)][_0x56dcbf(0x618)+'h'])return null;continue;}break;}}else{var _0x363235=_0x40e926[_0x1515a5[_0x2ea52c]],_0x4a5100=_0x4490c7[_0x56dcbf(0x2df)](_0x392b1a,_0x363235[_0x56dcbf(0x1cd)],0x1*0x2105+0x1788+-0x1*0x3859,0x18*0x67+-0x320+-0x685);if(!_0x4a5100||_0x4490c7[_0x56dcbf(0x713)](_0x4a5100[-0x15*0x2f+-0x2648+-0x7*-0x605],0xa8c+-0x1239+0x7ad)&&_0x4490c7['QsFMt'](_0x4a5100[-0xdd8*0x2+0x1234+0x7*0x15b],-0x12*0x1c6+-0x64*0x3e+-0x1c12*-0x2)&&_0x4a5100[-0x9*-0x82+0x1*-0x1d0b+0x187b]===-0x92f*0x1+0x25d3*-0x1+0x16*0x223)continue;var _0x405b90={'ptr':_0x363235[_0x56dcbf(0x1cd)],'x':_0x4a5100[0x1e08+0x2*0xb15+-0x1*0x3432],'y':_0x4a5100[0x264+0x2640+-0x28a3],'z':_0x4a5100[-0x346*0x2+0x222d+-0x1b9f],'team':_0x3f03aa(_0x363235['ptr']+(-0x173b*-0x1+0x1b53+-0x2*0x191b),'i32'),'localFlag':_0x4490c7['xNkqJ'](_0x3f03aa,_0x363235['ptr']+(-0x8a5*0x1+-0x4*-0x1bc+-0x21*-0x11),_0x4490c7['lBmDv'])};if(_0x4a7cd7){var _0x182034=_0x4a5100[-0x2336+0x19b4+0x1*0x982]-_0x4a7cd7[_0x56dcbf(0x321)][0x2b*0xa+-0x10e5+0x5*0x30b],_0x2e5f06=_0x4490c7['rVKds'](_0x4a5100[0x11*0x233+0x5*-0x655+-0x5b8],_0x4a7cd7[_0x56dcbf(0x321)][0x1*0x6b7+0x53*-0x17+-0x10*-0xc]);_0x405b90['d']=Math['sqrt'](_0x4490c7['MzhMH'](_0x182034*_0x182034,_0x4490c7[_0x56dcbf(0x36d)](_0x2e5f06,_0x2e5f06))),_0x405b90['beari'+'ng']=_0x4490c7[_0x56dcbf(0x9ec)](Math['atan2'](_0x182034,_0x2e5f06),0x47e+-0x3ca+0x0)/Math['PI'];}_0x4c3f92[_0x56dcbf(0xa01)](_0x405b90);}}return{'me':_0x4a7cd7,'list':_0x4c3f92};}else{var _0x41ebca=_0xe2d0ea();if(!_0x41ebca)return _0x454b88;if(_0x41ebca[_0x56dcbf(0x5f7)+'et'][_0x56dcbf(0x441)])return _0x41ebca[_0x56dcbf(0x441)];try{return _0x4490c7[_0x56dcbf(0x989)](_0x22d2a9,_0x41ebca);}catch(_0x531d70){return _0x41ebca[_0x56dcbf(0x5f7)+'et'][_0x56dcbf(0x441)]='1',_0x41ebca['api']=_0x21b80c,_0x16c999['warn'](_0x4490c7[_0x56dcbf(0x6b0)],_0x4490c7[_0x56dcbf(0x2e8)](_0x4490c7[_0x56dcbf(0x4dc)],_0xd8695c),_0x531d70),_0x2c51fa;}}}var _0x59344c=null;function _0x4b4573(){var _0x188649=_0x16065b;if(_0x59344c)return _0x59344c;try{if(!document['body']||!document['body']['appen'+'dChil'+'d'])return null;var _0x1850ac=document['creat'+_0x188649(0x238)+_0x188649(0x56c)](_0x4490c7[_0x188649(0x9aa)]);_0x1850ac['id']=_0x4490c7[_0x188649(0xb03)],_0x1850ac[_0x188649(0x8a0)][_0x188649(0x617)+'xt']='posit'+_0x188649(0x6a8)+'ixed;'+_0x188649(0xae2)+':12px'+_0x188649(0x411)+_0x188649(0x86b)+'z-ind'+_0x188649(0x685)+_0x188649(0x314)+'646;p'+'ointe'+_0x188649(0x1c9)+'nts:n'+_0x188649(0x87a)+(_0x188649(0x5bd)+_0x188649(0x50e)+_0x188649(0x628)+'(21,1'+'2,29,'+'.72);'+_0x188649(0x5ec)+'r:1px'+'\x20soli'+'d\x20rgb'+_0x188649(0x6d9)+',143,'+'177,.'+'4);bo'+'rder-'+_0x188649(0x892)+_0x188649(0x622)+'x;')+(_0x188649(0x636)+_0x188649(0x992)+_0x188649(0x64e)+'t:10p'+_0x188649(0x18a)+_0x188649(0x776)+_0x188649(0xbaa)+_0x188649(0x444)+'onsol'+'as,mo'+'nospa'+'ce;co'+_0x188649(0x1af)+'bda9c'+'9;')+_0x4490c7['XXYAb'],_0x1850ac['inner'+_0x188649(0x714)]=_0x188649(0x1cc)+_0x188649(0x7f3)+'=\x22sak'+_0x188649(0x985)+'sp-cv'+'\x22\x20wid'+'th=\x221'+'60\x22\x20h'+_0x188649(0x363)+'=\x22160'+'\x22\x20sty'+_0x188649(0x9ad)+_0x188649(0x2c5)+'y:blo'+_0x188649(0x19d)+_0x188649(0x409)+'as>'+('<div\x20'+_0x188649(0x829)+_0x188649(0x270)+_0x188649(0xa1e)+_0x188649(0x9bf)+_0x188649(0x6ef)+_0x188649(0x6a7)+'-alig'+'n:cen'+'ter\x22>'+'</div'+'>');var _0x4065d7={'cv':{'getContext':function(){return null;}},'el':_0x1850ac};document['body']['appen'+_0x188649(0x46f)+'d'](_0x1850ac),_0x59344c={'el':_0x1850ac,'cv':_0x1850ac[_0x188649(0x4e6)+_0x188649(0x291)+_0x188649(0xb41)]('#saku'+_0x188649(0x44c)+'p-cv'),'lg':_0x1850ac[_0x188649(0x4e6)+'Selec'+_0x188649(0xb41)](_0x188649(0x9dd)+'ra-es'+_0x188649(0x71c))};if(!_0x59344c['cv']||!_0x59344c['cv'][_0x188649(0xb18)+_0x188649(0xb93)])_0x59344c=_0x4065d7;return _0x59344c;}catch(_0x147153){return null;}}var _0x27e57d=null;function _0x1fc46c(){var _0xc8ccac=_0x16065b;if(_0x27e57d)return _0x27e57d;try{if(!document[_0xc8ccac(0x4eb)]||!document['body']['appen'+'dChil'+'d'])return null;var _0x468743=document[_0xc8ccac(0x965)+_0xc8ccac(0x238)+_0xc8ccac(0x56c)](_0xc8ccac(0x1c4)+'s');return _0x468743['id']=_0x4490c7[_0xc8ccac(0xac2)],_0x468743['style'][_0xc8ccac(0x617)+'xt']=_0x4490c7['YPaZB'],document[_0xc8ccac(0x4eb)]['appen'+_0xc8ccac(0x46f)+'d'](_0x468743),_0x27e57d={'cv':_0x468743},_0x27e57d;}catch(_0x10cbc9){return null;}}function _0xfc9cf1(_0x433422){var _0x1f2283=_0x16065b;try{var _0x22f4e6=Math[_0x1f2283(0x331)](-0x8*-0x18a+-0x10c2+0x473,window['inner'+'Width']||document['docum'+'entEl'+'ement'][_0x1f2283(0x3cc)+_0x1f2283(0x309)+'h']||0x6c0+-0x1ae*0x10+0x1420),_0x1ee39a=Math['max'](0x896+-0xa*-0xad+0x165*-0xb,window[_0x1f2283(0x7b3)+'Heigh'+'t']||document['docum'+'entEl'+_0x1f2283(0x59a)]['clien'+'tHeig'+'ht']||-0x14*0x118+-0x137*-0x3+0x123b);if(_0x433422['cv'][_0x1f2283(0x1a4)]!==_0x22f4e6||_0x4490c7[_0x1f2283(0x415)](_0x433422['cv'][_0x1f2283(0x8be)+'t'],_0x1ee39a)){if(_0x4490c7['vOETj'](_0x4490c7[_0x1f2283(0x9d3)],_0x4490c7[_0x1f2283(0x9d3)]))_0x433422['cv']['width']=_0x22f4e6,_0x433422['cv'][_0x1f2283(0x8be)+'t']=_0x1ee39a;else{_0x13b744[_0x1f2283(0x242)+_0x1f2283(0x3b9)+_0x1f2283(0x646)](),_0x4490c7['SjdsI'](_0x4dfe89,!_0x3e5b9b['open']);return;}}return{'w':_0x22f4e6,'h':_0x1ee39a};}catch(_0x5f0613){if(_0x4490c7['rEjCh']('lkDud',_0x1f2283(0xb91)))return{'w':0x0,'h':0x0};else{var _0x3afc25=_0x96c4cf[_0x874f93],_0x6f3924=_0x4490c7[_0x1f2283(0xa04)](typeof _0x3afc25['v'],'numbe'+'r')?_0x570a09[_0x1f2283(0x50e)](_0x3afc25['v']*(-0xb5+0x14*-0x1c4+0x27ed))/(0x861+-0x11fb*-0x1+0x1674*-0x1):_0x3afc25['v'];_0x2f9dfe['push'](_0x4490c7[_0x1f2283(0x69e)](_0x4490c7['FMBxI'](_0x4490c7['TmcGn'](_0x4490c7[_0x1f2283(0x389)]('\x20\x20'+_0x4490c7[_0x1f2283(0x726)]('0x',_0x3afc25['o']['toStr'+'ing'](-0x1bd+-0xb0*0x1+0xd*0x31))['padEn'+'d'](0x1b1c+0x682+0x6*-0x599)+'\x20'+_0x3afc25['k'][_0x1f2283(0xa06)+'d'](-0x141*-0x16+-0x1ee7+-0x5*-0xac),'\x20'),_0x325dfd(_0x6f3924)['padEn'+'d'](-0x614+-0x1*-0x2117+-0x1*0x1af3)),'\x20'),_0x3afc25[_0x1f2283(0x2c3)]||''));}}}function _0x1cc77e(_0x3cd37e){var _0x34544c=_0x16065b,_0x48ec3f={'PKiMP':function(_0x2ad663,_0x119df4){return _0x4490c7['ZnvYB'](_0x2ad663,_0x119df4);},'xOlsw':_0x34544c(0x347),'Ofbrl':function(_0x4895a6,_0x5e19b5){return _0x4490c7['kFeYB'](_0x4895a6,_0x5e19b5);},'rqoLf':_0x34544c(0xa73)+'v\x20','YolHU':_0x34544c(0x40c)+'am'},_0x1b5072=_0x27e57d;if(!_0x1b5072)return;var _0x3edd5c=_0x1b5072['cv'][_0x34544c(0xb18)+'ntext']&&_0x1b5072['cv'][_0x34544c(0xb18)+_0x34544c(0xb93)]('2d');if(!_0x3edd5c)return;var _0x4aea58=_0xfc9cf1(_0x1b5072);_0x3edd5c['clear'+_0x34544c(0x4db)](-0x1*0x868+0x47*-0x48+0x1c60,-0x1*-0x435+0x1a38+-0x1e6d,_0x4aea58['w'],_0x4aea58['h']);if(!_0x153506[_0x34544c(0x3a0)]||!_0x3cd37e||!_0x3cd37e['me'])return;var _0x5c3fd7=_0x3cd37e['me'],_0x964137=null,_0x5232bc=_0x24ab5f[_0x34544c(0x1f6)+'nNetw'+'orkSy'+'nc']||{},_0x32483e=Object[_0x34544c(0x4f0)](_0x5232bc);for(var _0x53a60c=-0x1ef1+0x235a+0x469*-0x1;_0x4490c7['sSKrW'](_0x53a60c,_0x32483e[_0x34544c(0x618)+'h']);_0x53a60c++){if(_0x34544c(0x3c7)==='qapzS'){var _0x4bbe30=_0x392b1a(_0x5232bc[_0x32483e[_0x53a60c]][_0x34544c(0x1cd)],-0x18db+0x109f+0xf0*0x9,0x1053+-0x20b4+0x419*0x4);if(_0x4bbe30&&_0x4bbe30[0x1448*-0x1+0x2235+-0xded]===-0x1*0x1f42+0x1550+0x9f2&&_0x4490c7[_0x34544c(0x28d)](_0x4bbe30[-0x124a+-0x1aa3+-0x9*-0x4fe],0x11b3+0x1*-0x162a+0x3*0x17d)&&_0x4bbe30[-0x49*0x75+0x1c38+0x527]===-0xbcc*0x2+0x1c0f*0x1+-0x477){_0x964137=_0x4490c7['JIvWX'](_0x3f03aa,_0x4490c7['HSpwv'](_0x5232bc[_0x32483e[_0x53a60c]][_0x34544c(0x1cd)],-0x2*-0x1375+0x283*0x7+-0x3827),'i32');break;}}else _0x26590d['lg'][_0x34544c(0x3f1)+'onten'+'t']=_0x48ec3f['PKiMP'](_0x48ec3f[_0x34544c(0x98f)](_0x48ec3f[_0x34544c(0x7cc)],_0x37d047)+_0x34544c(0x17f)+_0x38b0ff[_0x34544c(0x50e)](_0x1d4a02[_0x34544c(0x98e)])+'m',_0x443472['boxes']?_0x48ec3f['Ofbrl'](_0x48ec3f[_0x34544c(0x341)],_0x23d78b['round'](_0x501b0e[_0x34544c(0x530)]))+'°':'')+(_0x262d44!==null?_0x48ec3f[_0x34544c(0x2f3)]+_0x4e52e2:'');}for(var _0x1fa560=0x1d61*0x1+-0x1452+-0x1*0x90f;_0x1fa560<_0x3cd37e['list']['lengt'+'h'];_0x1fa560++){var _0x75e94a=_0x3cd37e['list'][_0x1fa560],_0xccbeac=_0x4490c7['xAEBM'](_0x964137,null)&&_0x75e94a[_0x34544c(0x17a)]===_0x964137,_0x8d324a=_0x4490c7['mLNwD'](_0x14687d,_0x5c3fd7['eye'],[_0x75e94a['x'],_0x75e94a['y']-(0x1af*-0x15+0xb9e+0x17be),_0x75e94a['z']],_0x4aea58['w'],_0x4aea58['h']),_0x95b463=_0x14687d(_0x5c3fd7[_0x34544c(0x586)],[_0x75e94a['x'],_0x75e94a['y']+(-0x2477+0x2d0+0x21a7+0.8),_0x75e94a['z']],_0x4aea58['w'],_0x4aea58['h']);if(_0x4490c7[_0x34544c(0x63d)](!_0x8d324a,!_0x95b463))continue;var _0x4e0a03=Math['min'](_0x8d324a['x'],_0x95b463['x']),_0x300170=Math[_0x34544c(0x331)](_0x8d324a['x'],_0x95b463['x']),_0xf9d5bd=Math['min'](_0x8d324a['y'],_0x95b463['y']),_0xf5c215=Math['max'](_0x8d324a['y'],_0x95b463['y']),_0x4d5330=Math[_0x34544c(0x331)](-0x5*0x26b+0x17cd+-0xbb3,Math[_0x34544c(0x63e)](-0x75b+-0x1763+0x1efa,_0x4490c7[_0x34544c(0x53b)](_0x300170,_0x4e0a03))),_0x38a128=Math['max'](-0x10f4+0x1*0x2543+-0x1449,Math[_0x34544c(0x63e)](-0x1748+0x20f6+-0x922,_0x4490c7['fkSTR'](_0xf5c215,_0xf9d5bd))),_0x57c130=_0x4490c7[_0x34544c(0x7de)](_0x4490c7[_0x34544c(0xa0d)](_0x4e0a03,_0x300170),-0x121c+0x2390+-0x1172),_0x440c0c=(_0xf9d5bd+_0xf5c215)/(-0x2616+0x1887*-0x1+0x3e9f);_0x3edd5c[_0x34544c(0xb7f)+_0x34544c(0x8fe)+'e']=_0xccbeac?_0x34544c(0x546)+_0x34544c(0x97c)+'3,106'+',.9)':'rgba('+_0x34544c(0x5c3)+_0x34544c(0x620)+'6,.95'+')',_0x3edd5c[_0x34544c(0x542)+'idth']=_0xccbeac?-0x23b+0xd9+0x163:-0x247+0x1940+-0x1*0x16f7,_0x3edd5c['strok'+'eRect'](_0x57c130-_0x4d5330/(-0x6*-0x25+0x1147+0x1223*-0x1),_0x440c0c-_0x4490c7[_0x34544c(0x959)](_0x38a128,-0x1182+0xd65+-0x1*-0x41f),_0x4d5330,_0x38a128),!_0xccbeac&&(_0x4490c7['rYnmn']!==_0x4490c7[_0x34544c(0x861)]?(_0x3edd5c[_0x34544c(0xac7)+_0x34544c(0x6a9)]=_0x4490c7['XXqsy'],_0x3edd5c['font']='10px\x20'+_0x34544c(0xb0c)+_0x34544c(0xa81)+_0x34544c(0x6a6)+_0x34544c(0x45a)+'s,mon'+_0x34544c(0x3ea)+'e',_0x3edd5c[_0x34544c(0x37d)+'ext'](Math[_0x34544c(0x50e)](_0x75e94a['d']||-0x1*-0xaee+0x3*-0x962+0x1138)+'m',_0x57c130-_0x4d5330/(-0x1c66+0x460*0x4+0xae8),_0x4490c7[_0x34544c(0x2d8)](_0x440c0c,_0x38a128/(0x755+-0x1ac5+-0x2*-0x9b9))-(0x19e+-0x3*-0xac4+-0x21*0x107))):_0x3820c6[_0x34544c(0x3f1)+'onten'+'t']=_0x412909(_0x192f4a[_0x34544c(0x26d)]['facto'+'r'])[_0x34544c(0xa39)+'ed'](-0x212d+-0x3f*-0x3b+0x119*0x11)+'x');}}function _0x282f1f(){var _0x5cf021=_0x16065b,_0x58a1e9={'tOqeX':function(_0x5a7455,_0x5886c0){return _0x5a7455+_0x5886c0;}},_0x8e2480=_0x4490c7[_0x5cf021(0x8e6)](_0x4b4573);if(!_0x8e2480||!_0x8e2480['cv'])return;try{var _0x477785=_0x8e2480['cv']['getCo'+'ntext']&&_0x8e2480['cv'][_0x5cf021(0xb18)+'ntext']('2d');if(!_0x477785)return;var _0x361cd4=_0x8e2480['cv'][_0x5cf021(0x1a4)],_0x149bb8=_0x361cd4/(0x1*0x26d6+-0x28a+-0x244a),_0x124a58=_0x4490c7['YGNdK'](_0x1017af),_0x178c7c=_0x124a58['me'];_0x477785['clear'+'Rect'](0x363+0xd8d+-0x2*0x878,0x19f6+0x1*-0x699+-0x135d,_0x361cd4,_0x361cd4),_0x477785[_0x5cf021(0xb7f)+_0x5cf021(0x8fe)+'e']='rgba('+_0x5cf021(0x5c3)+_0x5cf021(0x6f4)+'7,.16'+')',_0x477785[_0x5cf021(0x542)+_0x5cf021(0x31d)]=0x169*0x3+0x1fbe+-0x23f8*0x1;for(var _0x29fb21=-0x12ef+-0x1*-0x252f+-0x123f*0x1;_0x29fb21<=-0x92*0x44+0x2490+0x23b;_0x29fb21++){_0x477785[_0x5cf021(0x4bf)+_0x5cf021(0x5a8)](),_0x477785[_0x5cf021(0x66f)](_0x149bb8,_0x149bb8,_0x4490c7['ertwJ'](_0x4490c7['FJbMf'](_0x149bb8,0x224a+0x1372+-0x35b8),_0x29fb21)/(-0x1c7*0x11+-0xcaf+0x2ae9),-0x2032+-0x76*0xd+0xd0*0x2f,Math['PI']*(-0x3f+0x7a5+0x2c*-0x2b)),_0x477785[_0x5cf021(0xb7f)+'e']();}_0x477785[_0x5cf021(0x4bf)+'Path'](),_0x477785['moveT'+'o'](-0xd18*-0x2+-0x1a39+0xd,_0x149bb8),_0x477785[_0x5cf021(0x53f)+'o'](_0x4490c7['NMIyW'](_0x361cd4,0x348+0xeb*0x29+-0x28e7),_0x149bb8),_0x477785['moveT'+'o'](_0x149bb8,-0xca1+0x731*-0x1+-0x9eb*-0x2),_0x477785[_0x5cf021(0x53f)+'o'](_0x149bb8,_0x361cd4-(0x21e9+0x8e*0x12+-0x2be1)),_0x477785['strok'+'e']();if(!_0x178c7c){if(_0x8e2480['lg'])_0x8e2480['lg'][_0x5cf021(0x3f1)+'onten'+'t']='';return;}var _0x3bc6e8=_0x4490c7[_0x5cf021(0x8ae)](_0x149bb8-(0xa2*-0x1f+0x1af7+-0x753),_0x153506[_0x5cf021(0x98e)]),_0x550f81=null,_0x58c751=_0x24ab5f[_0x5cf021(0x1f6)+_0x5cf021(0x33a)+_0x5cf021(0xa60)+'nc']||{},_0x43bc29=Object['keys'](_0x58c751);for(var _0x4e1052=-0x3*-0x56d+0x1*0x1a5+-0x11ec;_0x4e1052<_0x43bc29['lengt'+'h'];_0x4e1052++){var _0x476038=_0x392b1a(_0x58c751[_0x43bc29[_0x4e1052]][_0x5cf021(0x1cd)],0x2148+-0x1903+-0x7*0x127,-0xf*-0x3d+0x5*0x2b6+-0x111e);if(_0x476038&&_0x4490c7[_0x5cf021(0x7b9)](_0x476038[0x1116+-0x11d+-0xff9],-0x1*0x2360+-0x2482+0x47e2)&&_0x476038[0x1*0x1aaa+0x7*0xb1+-0x1f80]===-0x2f9*-0xa+-0x858+-0x1562&&_0x4490c7['qCupN'](_0x476038[0x89*-0x2e+0x6bb*-0x1+0x1f5b],0x11*0xce+-0x1*0x1046+-0x2*-0x14c)){_0x550f81=_0x3f03aa(_0x58c751[_0x43bc29[_0x4e1052]]['ptr']+(-0x8da+-0x1673+-0x1fa5*-0x1),_0x5cf021(0x36b));break;}}var _0x448f12=0x4*-0x515+-0x1735+0x2b89;for(var _0xd11989=0x357+0x155b+-0x18b2;_0x4490c7[_0x5cf021(0x847)](_0xd11989,_0x124a58[_0x5cf021(0x5aa)]['lengt'+'h']);_0xd11989++){if('HUWxT'===_0x5cf021(0xa42)){var _0x257043=_0x124a58[_0x5cf021(0x5aa)][_0xd11989],_0x4ed8de=(_0x257043['x']-_0x178c7c[_0x5cf021(0x321)][0x681+-0x3*0x9f7+0x1764])*_0x3bc6e8,_0x32509f=(_0x257043['z']-_0x178c7c[_0x5cf021(0x321)][-0x1*-0x1cc7+-0x244*0x2+0x55*-0x49])*_0x3bc6e8,_0x3ffee8=Math['sqrt'](_0x4ed8de*_0x4ed8de+_0x4490c7[_0x5cf021(0xaaf)](_0x32509f,_0x32509f)),_0x312b35=_0x149bb8,_0x36ac84=_0x149bb8;_0x3ffee8>_0x4490c7['fkSTR'](_0x149bb8,0x4*0x2b7+0x1905+0x89*-0x43)?_0x4490c7[_0x5cf021(0x69a)](_0x4490c7['pNUGU'],'MalYp')?(_0x312b35=_0x149bb8+_0x4ed8de/_0x3ffee8*_0x4490c7['ceeXB'](_0x149bb8,0x1324+-0x103*0x5+-0xe0f),_0x36ac84=_0x149bb8+_0x4490c7['dzwQM'](_0x32509f/_0x3ffee8,_0x4490c7[_0x5cf021(0xb28)](_0x149bb8,0xfd7+-0x13*0x1ff+-0x1*-0x161c))):(_0x50a4a3=_0x4490c7[_0x5cf021(0x370)](_0x4490c7['HAGTg']+_0x44f39b,'s'),_0x2d84a2=_0x4490c7[_0x5cf021(0x510)]):(_0x312b35=_0x149bb8+_0x4ed8de,_0x36ac84=_0x149bb8+_0x32509f);var _0xf98592=_0x550f81!==null&&_0x4490c7[_0x5cf021(0xaf8)](_0x257043[_0x5cf021(0x17a)],_0x550f81);_0x477785[_0x5cf021(0xac7)+'tyle']=_0xf98592?'#4f8f'+'6a':'#ff6e'+'74',_0x477785[_0x5cf021(0x4bf)+'Path'](),_0x477785['arc'](_0x312b35,_0x36ac84,_0xf98592?-0x1347+-0x2*-0x44f+0x1*0xaab:0x223*-0x9+-0x152d+0x286b+0.20000000000000018,0x152b*-0x1+0x2*0xa01+0x129,_0x4490c7[_0x5cf021(0x6ec)](Math['PI'],0x2548+0x43*0x75+0xd*-0x539)),_0x477785[_0x5cf021(0x666)](),_0x448f12++;}else _0x539973[_0x5cf021(0x60e)]=(_0x5758b3['inner'+'Width']||0x47*-0x1d+0x1273+-0xa68)-(_0x1505dc[_0x5cf021(0x27e)+_0x5cf021(0x309)+'h']||0x6b2*-0x1+0x1e91+-0x1573)-(-0xd2b+-0x469*-0x3+0x8*0x1);}_0x477785[_0x5cf021(0xac7)+'tyle']=_0x4490c7['mEaaS'],_0x477785['begin'+_0x5cf021(0x5a8)](),_0x477785['arc'](_0x149bb8,_0x149bb8,-0xf77*-0x2+0x1a57+-0x3942,-0x5*0x4bf+-0x220*0x2+-0xd*-0x227,Math['PI']*(0x1f65+-0x138+-0x1e2b)),_0x477785['fill'](),_0x8e2480['lg']&&(_0x5cf021(0x91e)!==_0x4490c7[_0x5cf021(0x348)]?(_0x5d79e8['style']['left']=_0x58a1e9[_0x5cf021(0x4a5)](_0x342a79[_0x5cf021(0xa78)]['x'],'px'),_0x5787f7['style'][_0x5cf021(0x502)]=_0x390441['pos']['y']+'px',_0x2ff16c[_0x5cf021(0x8a0)][_0x5cf021(0xae2)]=_0x5cf021(0x254),_0x203bcd[_0x5cf021(0x8a0)][_0x5cf021(0x490)+'m']=_0x5cf021(0x254)):_0x8e2480['lg']['textC'+_0x5cf021(0x217)+'t']=_0x4490c7[_0x5cf021(0x716)](_0x4490c7['HvSmj'](_0x5cf021(0x347)+_0x448f12,_0x5cf021(0x17f))+Math[_0x5cf021(0x50e)](_0x153506['span']),'m')+(_0x153506[_0x5cf021(0x3a0)]?_0x4490c7[_0x5cf021(0x58b)](_0x4490c7[_0x5cf021(0x594)]+Math['round'](_0x17963f['fov']),'°'):'')+(_0x550f81!==null?_0x4490c7[_0x5cf021(0x3eb)](_0x4490c7[_0x5cf021(0x75c)],_0x550f81):''));}catch(_0x130490){}}function _0x16ad62(){var _0x176852=_0x16065b;if(_0x4490c7[_0x176852(0x57a)]('BBBuI',_0x176852(0xae8))){var _0x114814=_0x24ab5f[_0x176852(0x1f6)+_0x176852(0x33a)+'orkSy'+'nc']||{};if(!Object[_0x176852(0x4f0)](_0x114814)[_0x176852(0x618)+'h'])return![];return!!_0x29609a();}else return _0xee5bd0[_0x176852(0xaf9)+'d']++,_0x4d3342[_0x176852(0x591)+_0x176852(0x2ca)]=_0x347c85[_0x176852(0x591)+_0x176852(0x2ca)]||'no\x20HE'+_0x176852(0x62d)+_0x176852(0x90b)+_0x176852(0xba0)+_0x176852(0x1cf)+'e\x20not'+'\x20reac'+_0x176852(0x565)+_0x176852(0xab0)+_0x176852(0x70f)+_0x176852(0x245)+_0x176852(0xb73)+'Game('+')\x20or\x20'+'any\x20w'+_0x176852(0x324)+'\x20glob'+'al',null;}function _0xac07a9(_0x35c786){var _0x19dbf8=_0x16065b;try{if(_0x19dbf8(0x8f1)===_0x4490c7[_0x19dbf8(0x7b6)]){var _0x3d9ea6=_0x59344c;if(_0x3d9ea6&&_0x3d9ea6['el'])_0x3d9ea6['el']['style']['displ'+'ay']=_0x35c786?'':_0x19dbf8(0xb0d);var _0x3e4c72=_0x27e57d;if(_0x3e4c72&&_0x3e4c72['cv'])_0x3e4c72['cv'][_0x19dbf8(0x8a0)][_0x19dbf8(0x25b)+'ay']=_0x35c786?'':_0x4490c7[_0x19dbf8(0x7d4)];}else{var _0x4213e4=_0x495c4a();if(_0x4213e4&&_0x4213e4['el'])_0x4213e4['el'][_0x19dbf8(0x8a0)][_0x19dbf8(0x25b)+'ay']=_0x400336['on']?'':_0x4490c7[_0x19dbf8(0x7d4)];var _0xea4cf5=_0x20c12e;if(_0xea4cf5&&_0xea4cf5['cv'])_0xea4cf5['cv'][_0x19dbf8(0x8a0)]['displ'+'ay']=_0xbc033['on']&&_0x25710e[_0x19dbf8(0x3a0)]?'':_0x19dbf8(0xb0d);}}catch(_0x56df53){}}function _0x300837(){var _0x4f8112=_0x16065b;if(!_0x153506['on']||!_0x16ad62()){_0x4490c7[_0x4f8112(0x6b8)](_0xac07a9,![]),setTimeout(_0x300837,-0xeeb+0x472+0xba5);return;}_0xac07a9(!![]),_0x4b4573();if(_0x153506['boxes'])_0x1fc46c();var _0x46a496=null;try{_0x46a496=_0x4490c7[_0x4f8112(0x4cb)](_0x1017af);}catch(_0x192985){}try{if(_0x4490c7[_0x4f8112(0xa22)](_0x4f8112(0x68e),_0x4f8112(0x9a1))){_0xe884c[_0x4f8112(0x242)+_0x4f8112(0x3b9)+_0x4f8112(0x646)](),_0x3a76ec(_0x275153['on'],_0x902896[_0x4f8112(0x5c4)+'r']-(0x2*0x853+-0x1da4+0xcfe+0.5));return;}else _0x282f1f();}catch(_0x1d8daf){}try{if('CddfU'!==_0x4490c7['KWaxV']){var _0x4fe308=_0x59cd7d['list'][_0x191a3d],_0x51298c=(_0x4fe308['x']-_0x39b40e[_0x4f8112(0x321)][-0x39*0x4f+0x1381*-0x1+0x2*0x128c])*_0x76c94c,_0x2474df=(_0x4fe308['z']-_0x1bd38d['feet'][-0x1*-0xb59+0x2694+-0x31eb])*_0x253a3c,_0x311a86=_0x43f1f3['sqrt'](_0x4490c7['lezkf'](_0x51298c*_0x51298c,_0x4490c7[_0x4f8112(0x36d)](_0x2474df,_0x2474df))),_0x224126=_0x5796bc,_0x45020f=_0x324f09;_0x311a86>_0x4490c7['jRajY'](_0x456bbf,-0x941+-0x210d+0x2a54)?(_0x224126=_0x4490c7[_0x4f8112(0x95e)](_0x19063,_0x51298c/_0x311a86*(_0x7fedcc-(-0x89c+0x207f+-0x17dd))),_0x45020f=_0x17b6f9+_0x2474df/_0x311a86*(_0x20c309-(-0x1*-0x2658+0x6e0+-0x2d32))):(_0x224126=_0x59e8e2+_0x51298c,_0x45020f=_0x2be128+_0x2474df);var _0x1466c2=_0xb8c587!==null&&_0x4490c7['DxnnO'](_0x4fe308[_0x4f8112(0x17a)],_0x297cca);_0x435173[_0x4f8112(0xac7)+_0x4f8112(0x6a9)]=_0x1466c2?_0x4490c7[_0x4f8112(0x9c2)]:_0x4f8112(0xaca)+'74',_0x54fbc0[_0x4f8112(0x4bf)+'Path'](),_0x2c6044['arc'](_0x224126,_0x45020f,_0x1466c2?-0xe05*0x1+-0x121*0xf+0x1ef6:-0x1189+0x45a*-0x4+0x22f4+0.20000000000000018,-0x128+0x12a*0x16+-0x1874,_0x2628ce['PI']*(-0x1b22+0x6*-0x5c2+0x3db0*0x1)),_0xb731a8['fill'](),_0x59c99b++;}else _0x4490c7[_0x4f8112(0xb32)](_0x1cc77e,_0x46a496);}catch(_0x239546){}setTimeout(_0x300837,-0x1*0xda3+0x61a+0x1*0x7bb);}function _0x14526b(){var _0x4e045f=_0x16065b,_0xa53eaa={'hJfNo':function(_0xde7676){return _0xde7676();},'qPGlJ':function(_0x1bca41,_0x429255){return _0x1bca41+_0x429255;},'ahZsH':function(_0x3c9a30,_0x2222af,_0x1c0f12){return _0x3c9a30(_0x2222af,_0x1c0f12);},'sdVpw':_0x4490c7['qWhwh']},_0xa12a7d=window[_0x4e045f(0x2bd)+_0x4e045f(0x8a9)+'dkit']&&window['Unity'+_0x4e045f(0x8a9)+_0x4e045f(0x9c0)][_0x4e045f(0x70f)+'me']||null,_0x43738d=_0xa12a7d&&_0xa12a7d[_0x4e045f(0x7e0)+'pCont'+_0x4e045f(0x60a)],_0x5a4fa9=_0x43738d&&_0x43738d['scrip'+_0x4e045f(0xaa9)],_0x34f2f6={},_0x3e592e=[];for(var _0x110ff0 in _0x39f72e){_0x34f2f6[_0x110ff0]='0x'+_0x39f72e[_0x110ff0]['ptr'][_0x4e045f(0x6f9)+_0x4e045f(0x8bc)](0x4*-0x820+-0x2483+0x1*0x4513);if(_0x39f72e[_0x110ff0][_0x4e045f(0xaba)+'ced'])_0x3e592e['push'](_0x110ff0);}var _0x13a017={};for(var _0x224a82 in _0x39f72e)_0x13a017[_0x224a82]=_0x4490c7[_0x4e045f(0x651)](_0x2599da,_0x39f72e[_0x224a82][_0x4e045f(0x1cd)]);var _0xf5ab0={},_0x3672f7=null;try{_0xf5ab0=_0x3f239b();}catch(_0x571337){_0x3672f7=String(_0x571337&&_0x571337[_0x4e045f(0x158)+'ge']||_0x571337);}var _0x147475={'version':_0x383cde,'when':new Date()[_0x4e045f(0x66a)+_0x4e045f(0x779)+'g'](),'elapsedMs':Date[_0x4e045f(0x914)]()-_0x1c2398,'frame':location[_0x4e045f(0x67d)][_0x4e045f(0x868)](0xe*0xac+0xce*-0x25+0x145e,-0x57*-0x8+-0x1684+0xa22*0x2),'host':_0x410a83,'frameRole':_0xbe2c58,'uwmk':!!_0xa12a7d,'il2CppContext':!!_0x43738d,'typeCount':_0x5a4fa9?Object['keys'](_0x5a4fa9)[_0x4e045f(0x618)+'h']:null,'arm':_0x491224,'assemblies':_0x28b24f,'hooksTotal':_0xd685a[_0x4e045f(0x618)+'h'],'hooksApplied':_0x4490c7[_0x4e045f(0x7e7)](_0x494a7a),'hooksResolved':_0x527af2(),'hooksRegisteredAtArm':_0x491224[_0x4e045f(0x541)+_0x4e045f(0x227)+'tered']||-0x47*-0x3+0x1520+-0x15f5,'hookErrors':_0x44de5c[_0x4e045f(0x868)](-0x151*0x11+-0x3eb+0xc6*0x22,-0x213*0xb+-0x146*0x10+0x2b39),'instances':_0x34f2f6,'classNames':_0x13a017,'instancesReplaced':_0x3e592e,'hookFireProof':_0x2244dc,'survey':_0xf5ab0,'actkKeys':_0x135a11,'surveyRows':Object[_0x4e045f(0x4f0)](_0xf5ab0)['reduc'+'e'](function(_0x50bb33,_0xf520ce){return _0x50bb33+_0xf5ab0[_0xf520ce]['lengt'+'h'];},0x356+0x76*-0xf+0x394),'reads':{'ok':_0x3c996c['ok'],'failed':_0x3c996c['faile'+'d'],'lastError':_0x3c996c[_0x4e045f(0x591)+_0x4e045f(0x2ca)],'source':_0x3c996c['sourc'+'e']},'identity':_0x4490c7[_0x4e045f(0xab9)](_0x142608),'globals':_0x4490c7[_0x4e045f(0x48c)](_0x57b023),'wasmMemory':{'captured':!!_0x2a1ad9,'atMs':_0x22470f,'bytes':(function(){var _0x3a2707=_0x4e045f,_0x6fbc47={'txVSw':function(_0x56df3b,_0x19d57d){return _0x56df3b/_0x19d57d;},'DrtQs':function(_0xe640ad,_0x249bd8){return _0xe640ad*_0x249bd8;},'RRUls':_0x4490c7[_0x3a2707(0xa3b)],'cyWnT':function(_0x2ce8e4,_0x3c3e3c){return _0x2ce8e4/_0x3c3e3c;}};if(_0x4490c7['bwrPq']==='PYQmZ'){var _0x42b215={'ebcHn':function(_0x4cd9ce,_0x37e4f9){return _0x6fbc47['txVSw'](_0x4cd9ce,_0x37e4f9);},'bgsPu':function(_0x5196af,_0x112031){var _0x3102b8=_0x3a2707;return _0x6fbc47[_0x3102b8(0x786)](_0x5196af,_0x112031);}};if(_0x25de31==='v3'){var _0x1996b8=_0x47363d[_0x1cb1b2][_0x3a2707(0x6d4)]||[_0x1a741e[_0x124813]['v'],0x155e+0x1d0b+-0x91*0x59,-0x18e0+-0x1*-0x1017+0x8c9];return _0x1996b8[_0x3a2707(0x49b)](function(_0x5819aa){var _0x123c32=_0x3a2707;return _0x42b215[_0x123c32(0x77f)](_0x2cc2a3['round'](_0x42b215[_0x123c32(0x377)](_0x5819aa,-0x1*-0x4bb+0x3c8*0x1+-0x81f)),-0x1*0x249b+-0x6fa+-0x1*-0x2bf9);})[_0x3a2707(0x895)]('\x20\x20');}var _0x24c52c=_0x2f90bb[_0x435b26]['v'];return typeof _0x24c52c===_0x6fbc47[_0x3a2707(0x84c)]?_0x6fbc47['cyWnT'](_0x384087['round'](_0x24c52c*(0x75e*0x1+-0x1379*0x1+-0x1003*-0x1)),0x89*0x35+-0x23ee+-0x59*-0x21):_0x4b4dfc(_0x24c52c);}else try{return _0x2a1ad9&&_0x2a1ad9['buffe'+'r']?_0x2a1ad9[_0x3a2707(0xb3f)+'r']['byteL'+_0x3a2707(0x746)]:-0x497*-0x3+0x600+-0x7*0x2d3;}catch(_0x3830cc){return 0x1*0xb73+0x1934+0x355*-0xb;}}()),'exportKeys':_0x1c7a63},'diff':_0x38cf79[_0x4e045f(0x868)](-0x1*0x1c07+0x228+-0x25*-0xb3,0x6ac+0x147a+0x2*-0xd7f),'speed':{'on':_0x2c37ef['on'],'factor':_0x2c37ef[_0x4e045f(0x5c4)+'r'],'writes':_0x316e84,'scaled':_0x29fd06[_0x4e045f(0x868)](0x25df+0x1f80+0x12d*-0x3b,-0xdb+0x1d7*-0xa+-0x73*-0x2b),'skipped':_0xc1c993[_0x4e045f(0x868)](-0x16e7+0x1dd2+-0x17*0x4d,-0x99*-0x14+-0x1a0a+0x1*0xe26)},'esp':_0x4e9072(),'view':_0x3af216(),'fov':_0x17963f[_0x4e045f(0x530)],'espView':{'on':_0x153506['on'],'boxes':_0x153506[_0x4e045f(0x3a0)],'span':_0x153506[_0x4e045f(0x98e)]},'local':(function(){var _0x5b85f4=_0x4e045f,_0x537625=_0xa53eaa[_0x5b85f4(0x7c2)](_0x29609a);if(!_0x537625)return null;return{'ptr':_0xa53eaa[_0x5b85f4(0x54d)]('0x',_0x537625[_0x5b85f4(0x1cd)][_0x5b85f4(0x6f9)+_0x5b85f4(0x8bc)](-0x200+0x14*0x17d+0x24*-0xc5)),'feet':_0x537625[_0x5b85f4(0x321)],'eye':_0x537625[_0x5b85f4(0x586)],'posAt':_0x537625['posAt'],'eyeHeight':_0x13830d,'pitch':_0x537625['pitch'],'yaw':_0x537625[_0x5b85f4(0x209)],'reach':_0x537625[_0x5b85f4(0x6a0)]};}()),'uwmkLog':_0x2690e8[_0x4e045f(0x868)](0x15b*0x3+0x9*0x3f7+-0x27c0,0x1a03+0x1453+-0x2e42),'warnings':[]};if(_0x3672f7)_0x147475[_0x4e045f(0x863)+_0x4e045f(0x6ee)]['push'](_0x4490c7['OyvVz']+_0x3672f7);if(_0x491224['error'])_0x147475[_0x4e045f(0x863)+'ngs']['push'](_0x4490c7[_0x4e045f(0x3c9)](_0x4490c7['evDDN'],_0x491224[_0x4e045f(0x22d)]));_0x147475[_0x4e045f(0x5ac)+_0x4e045f(0xa6a)]===0x1853*0x1+-0x7*0x50+0x761*-0x3&&Object[_0x4e045f(0x4f0)](_0x147475[_0x4e045f(0x8b5)+_0x4e045f(0x224)])['lengt'+'h']>-0x4ec+0x11e7*0x2+-0x3b*0x86&&_0x147475[_0x4e045f(0x863)+'ngs'][_0x4e045f(0xa01)](_0x4490c7[_0x4e045f(0x824)]+Object[_0x4e045f(0x4f0)](_0x147475['insta'+_0x4e045f(0x224)])['lengt'+'h']+_0x4490c7[_0x4e045f(0x939)]+(_0x3c996c[_0x4e045f(0x591)+_0x4e045f(0x2ca)]?_0x4490c7['VPSQj'](_0x4490c7[_0x4e045f(0x33c)],_0x3c996c['lastE'+_0x4e045f(0x2ca)]):'No\x20re'+_0x4e045f(0x96a)+_0x4e045f(0x533)+_0x4e045f(0x994)+_0x4e045f(0x817)+'offse'+_0x4e045f(0x767)+_0x4e045f(0xa68)+_0x4e045f(0x41c)+'y\x20typ'+'e.'));_0x147475['ident'+_0x4e045f(0x86e)]&&_0x4490c7[_0x4e045f(0x554)](_0x147475[_0x4e045f(0xa63)+_0x4e045f(0x86e)][_0x4e045f(0x8e7)+_0x4e045f(0x3e3)],![])&&_0x147475[_0x4e045f(0x863)+_0x4e045f(0x6ee)][_0x4e045f(0xa01)](_0x4e045f(0x4f8)+_0x4e045f(0x3d1)+_0x4e045f(0xb16)+_0x4e045f(0x5ad)+_0x4e045f(0x940)+_0x4e045f(0xa6b)+_0x4e045f(0x9ff)+'Unity'+'WebMo'+'dkit.'+'\x20The\x20'+'Runti'+'me\x20we'+'\x20arme'+'d\x20was'+'\x20'+_0x4490c7[_0x4e045f(0x2a7)]+(_0x4e045f(0x487)+_0x4e045f(0xb35)+_0x4e045f(0x3a8)+'the\x20o'+'ne\x20ho'+_0x4e045f(0x783)+'\x20it\x20i'+_0x4e045f(0x59b)+_0x4e045f(0x20e)+'.\x20Dis'+'able\x20'+'every'+_0x4e045f(0x77c)+'r\x20')+_0x4490c7['naeqw']);_0x147475['ident'+_0x4e045f(0x86e)]&&_0x147475[_0x4e045f(0xa63)+_0x4e045f(0x86e)][_0x4e045f(0x90c)+_0x4e045f(0xb9c)+'imeIs'+'Expor'+_0x4e045f(0x8a1)]===![]&&_0x147475['warni'+'ngs'][_0x4e045f(0xa01)](_0x4e045f(0x90c)+_0x4e045f(0x632)+'ntime'+_0x4e045f(0x8db)+_0x4e045f(0x49d)+'ndow.'+_0x4e045f(0x2bd)+_0x4e045f(0x8a9)+_0x4e045f(0xa25)+_0x4e045f(0x70f)+_0x4e045f(0x65d)+'the\x20p'+'lugin'+_0x4e045f(0xa7d)+_0x4e045f(0x8de)+'\x20'+(_0x4e045f(0x243)+_0x4e045f(0x379)+_0x4e045f(0x2cc)+_0x4e045f(0x1e0)+'Runti'+_0x4e045f(0xa9a)+_0x4e045f(0x1cf)+_0x4e045f(0x802)+'n\x20the'+'\x20glob'+'al\x20no'+_0x4e045f(0x488)+_0x4e045f(0x56f)));if(_0x147475['esp']&&_0x147475['esp'][_0x4e045f(0x480)])_0x147475['warni'+'ngs']['push'](_0x4e045f(0x724)+_0x147475['esp'][_0x4e045f(0x480)]);if(_0x147475[_0x4e045f(0x65c)+'ls']&&!_0x147475[_0x4e045f(0x65c)+'ls'][_0x4e045f(0x9fb)+'8']){if(_0x4490c7[_0x4e045f(0x76d)](_0x4e045f(0x5ed),_0x4490c7['lfGpk'])){if(!_0x4b52b1[_0x4e045f(0x4eb)]||!_0x38b281['body'][_0x4e045f(0x4b9)+_0x4e045f(0x46f)+'d'])return null;var _0x1dff21=_0x2608b3['creat'+'eElem'+_0x4e045f(0x56c)](_0x4490c7['DsLgU']);_0x1dff21['id']=_0x4490c7['PxNGh'],_0x1dff21[_0x4e045f(0x8a0)][_0x4e045f(0x617)+'xt']=_0x4490c7['ipwpe'](_0x4490c7[_0x4e045f(0x76a)]('posit'+_0x4e045f(0x6a8)+_0x4e045f(0x8f0)+'right'+_0x4e045f(0x39f)+_0x4e045f(0x411)+'46px;'+_0x4e045f(0xba7)+_0x4e045f(0x685)+_0x4e045f(0x314)+_0x4e045f(0x860)+_0x4e045f(0x935)+'r-eve'+_0x4e045f(0x2cd)+'one;'+_0x4490c7['pjEfT'],_0x4490c7[_0x4e045f(0x1ec)]),_0x4e045f(0x507)+_0x4e045f(0x8c8)+_0x4e045f(0x85b)+'e;-we'+'bkit-'+_0x4e045f(0x507)+_0x4e045f(0x8c8)+_0x4e045f(0x85b)+'e;'),_0x1dff21[_0x4e045f(0x7b3)+_0x4e045f(0x714)]=_0x4e045f(0x1cc)+_0x4e045f(0x7f3)+_0x4e045f(0x66d)+_0x4e045f(0x985)+_0x4e045f(0xa48)+_0x4e045f(0x901)+'th=\x221'+'60\x22\x20h'+_0x4e045f(0x363)+_0x4e045f(0x698)+'\x22\x20sty'+'le=\x22d'+_0x4e045f(0x2c5)+'y:blo'+_0x4e045f(0x19d)+'/canv'+'as>'+_0x4490c7[_0x4e045f(0x77e)];var _0xd69ce1={'cv':{'getContext':function(){return null;}},'el':_0x1dff21};_0x3f2bd0[_0x4e045f(0x4eb)][_0x4e045f(0x4b9)+_0x4e045f(0x46f)+'d'](_0x1dff21),_0x152961={'el':_0x1dff21,'cv':_0x1dff21['query'+_0x4e045f(0x291)+_0x4e045f(0xb41)](_0x4490c7['lZAQk']),'lg':_0x1dff21['query'+_0x4e045f(0x291)+_0x4e045f(0xb41)]('#saku'+'ra-es'+_0x4e045f(0x71c))};if(!_0x3811a8['cv']||!_0x15a2bc['cv'][_0x4e045f(0xb18)+_0x4e045f(0xb93)])_0x186811=_0xd69ce1;return _0x2da56e;}else{var _0xf61fcf='';if(_0x147475[_0x4e045f(0x3ce)+'irePr'+_0x4e045f(0xb9a)]){if(_0x4490c7['RxOeu'](_0x4e045f(0x264),_0x4e045f(0x264)))_0xf61fcf=_0x4490c7['RrDOP'](_0x4490c7[_0x4e045f(0x4ee)](_0x4e045f(0x874)+'ok\x20fi'+_0x4e045f(0x963)+'t\x20'+_0x147475['hookF'+_0x4e045f(0x5c8)+_0x4e045f(0xb9a)]['atMs']+(_0x4e045f(0x328)+'th\x20or'+'igina'+_0x4e045f(0x918)+'=')+_0x147475['hookF'+'irePr'+_0x4e045f(0xb9a)][_0x4e045f(0x255)+'nalFu'+'nc']+(_0x4e045f(0x830)+'game\x20'+'resol'+_0x4e045f(0xb40))+_0x147475['hookF'+_0x4e045f(0x5c8)+_0x4e045f(0xb9a)][_0x4e045f(0xb44)+'veGam'+_0x4e045f(0x458)+'re'],'\x20(sou'+'rce:\x20'),_0x147475[_0x4e045f(0x3ce)+_0x4e045f(0x5c8)+_0x4e045f(0xb9a)][_0x4e045f(0x424)+'ource'+'AtFir'+'e']||'none')+('),\x20so'+'\x20the\x20'+_0x4e045f(0x697)+'ence\x20'+_0x4e045f(0x32e)+'ed\x20th'+_0x4e045f(0x890)+_0x4e045f(0x6b5)+'not\x20r'+'eacha'+_0x4e045f(0x84a)+_0x4e045f(0x7ba));else{_0x548f72=_0x36dde0,_0x3541cc=[],_0xa53eaa['ahZsH'](_0x44e43e,_0xa53eaa[_0x4e045f(0x8f2)],{'report':_0x51b736()});return;}}_0x147475['warni'+_0x4e045f(0x6ee)][_0x4e045f(0xa01)](_0x4e045f(0x2bd)+'\x20inst'+'ance\x20'+_0x4e045f(0x42a)+'esolv'+_0x4e045f(0x1a8)+'t\x20(so'+_0x4e045f(0x2d7)+'\x20'+(_0x147475['globa'+'ls']['gameS'+'ource']||'none')+_0x4e045f(0x64f)+(_0x4e045f(0x2f1)+_0x4e045f(0x734)+'\x20stay'+_0x4e045f(0x70d)+'ked\x20u'+_0x4e045f(0x966)+'a\x20gam'+_0x4e045f(0x52d)+_0x4e045f(0x43d)+'ith\x20M'+'odule'+_0x4e045f(0x32b)+'U8\x20is'+'\x20reac'+_0x4e045f(0x565)+'.')+_0xf61fcf);}}(_0x147475[_0x4e045f(0x65c)+'ls']&&!_0x147475[_0x4e045f(0x65c)+'ls'][_0x4e045f(0x534)+'Wrapp'+'er']||_0x147475[_0x4e045f(0x65c)+'ls'][_0x4e045f(0x534)+_0x4e045f(0x604)+'er']==='undef'+_0x4e045f(0x67f))&&_0x147475['warni'+'ngs']['push'](_0x4e045f(0x292)+'w.Uni'+_0x4e045f(0xb94)+'Modki'+_0x4e045f(0x962)+'ueWra'+_0x4e045f(0x4ef)+'is\x20mi'+_0x4e045f(0x426)+'\x20-\x20ca'+_0x4e045f(0x2b4)+_0x4e045f(0x484)+'unnin'+_0x4e045f(0x37b)+'nd.');if(_0x4490c7[_0x4e045f(0x244)](_0x147475[_0x4e045f(0x541)+_0x4e045f(0xac5)],-0x1359*0x1+-0x1de9+-0x1a*-0x1e5)&&_0x4490c7['MRcLP'](_0x147475[_0x4e045f(0x541)+_0x4e045f(0x656)+'ed'],0x2*0xf8b+-0x1*-0x170f+-0x3625)&&_0x5a4fa9){if(_0x4490c7[_0x4e045f(0x38f)]!==_0x4e045f(0x2d1))_0x147475['hooks'+_0x4e045f(0x8dd)+'ved']===-0x1100+-0x1*-0xbf2+0x50e?_0x147475['warni'+'ngs'][_0x4e045f(0xa01)](_0x4490c7[_0x4e045f(0x4d1)](_0x4490c7['TmcGn'](_0x4490c7[_0x4e045f(0x590)](_0x4490c7[_0x4e045f(0x271)],_0x147475[_0x4e045f(0x541)+_0x4e045f(0xac5)]),'\x20hook'+_0x4e045f(0x34c)+_0x4e045f(0x19a)+_0x4e045f(0x8ca)+_0x4e045f(0x81b)+_0x4e045f(0xab2)+_0x4e045f(0x5f0)+'apply'+_0x4e045f(0x2c7)+'\x20')+('runs\x20'+_0x4e045f(0x704)+_0x4e045f(0x2a4)+_0x4e045f(0x97a)+_0x4e045f(0x852)+'bly.i'+_0x4e045f(0x1ad)+'tiate'+_0x4e045f(0x830)+_0x4e045f(0x760)+_0x4e045f(0x9be)+_0x4e045f(0x90c)+'n.hoo'+_0x4e045f(0xba9)+_0x4e045f(0x2f7)+'\x20')+_0x4490c7[_0x4e045f(0xa5a)]+('Regis'+_0x4e045f(0x7c0)+'\x20'),_0x147475[_0x4e045f(0x541)+_0x4e045f(0x227)+_0x4e045f(0x7c0)+_0x4e045f(0xaa0)])+_0x4490c7['XSLbZ']):_0x147475['warni'+_0x4e045f(0x6ee)]['push'](_0x4e045f(0x26b)+_0x4e045f(0xb44)+_0x4e045f(0xb66)+_0x147475[_0x4e045f(0x541)+'Resol'+_0x4e045f(0x4ba)]+'\x20of\x20'+_0x147475['hooks'+_0x4e045f(0xac5)]+_0x4490c7[_0x4e045f(0x9f3)]+(_0x4e045f(0xb6f)+',\x20Met'+'hodIn'+_0x4e045f(0x7e8)+_0x4e045f(0x739)+'id\x20do'+_0x4e045f(0x57b)+_0x4e045f(0xa44)+_0x4e045f(0xa8a)+_0x4e045f(0xa43)+_0x4e045f(0x2ce)));else return null;}return _0x4490c7[_0x4e045f(0x1b8)](_0x147475[_0x4e045f(0x541)+_0x4e045f(0x656)+'ed'],0x1*0x1315+-0xb08+0x1*-0x80d)&&!_0x147475[_0x4e045f(0x8b5)+_0x4e045f(0x224)][_0x4e045f(0x8ce)+_0x4e045f(0x7e1)+'ler']&&_0x147475['warni'+_0x4e045f(0x6ee)]['push']('Hooks'+_0x4e045f(0x820)+_0x4e045f(0x5a6)+_0x4e045f(0x8cd)+_0x4e045f(0x55c)+'FPSco'+_0x4e045f(0x7e1)+_0x4e045f(0xa21)+_0x4e045f(0xa93)+_0x4e045f(0x9b9)+_0x4e045f(0x7a6)+('Eithe'+'r\x20you'+_0x4e045f(0x820)+'not\x20i'+_0x4e045f(0xa47)+'ound,'+_0x4e045f(0x964)+_0x4e045f(0x221)+_0x4e045f(0x4d2)+_0x4e045f(0x1fc)+_0x4e045f(0x83d)+'ong\x20o'+_0x4e045f(0x23d)+_0x4e045f(0x3f6))),_0x147475[_0x4e045f(0x8b5)+_0x4e045f(0x934)+'eplac'+'ed']['lengt'+'h']&&(_0x4490c7[_0x4e045f(0x75f)](_0x4e045f(0x54b),_0x4490c7['LWFtJ'])?_0x147475[_0x4e045f(0x863)+'ngs']['push'](_0x4490c7[_0x4e045f(0x55e)]('rebui'+'lt\x20si'+'nce\x20f'+'irst\x20'+_0x4e045f(0x788)+_0x4e045f(0x463)+_0x4e045f(0x89d)+_0x4e045f(0x7fe),_0x147475[_0x4e045f(0x8b5)+_0x4e045f(0x934)+'eplac'+'ed']['join'](',\x20'))):_0x2a3b1b['top']=(_0x70fc67['inner'+_0x4e045f(0x9e5)+'t']||-0xb2*0x22+-0x144e+0x2bf2)-(_0x20e15c[_0x4e045f(0x27e)+'tHeig'+'ht']||0xffa*-0x1+-0x3*0x30b+0x1aab)-(0xc*0x119+0x1785+-0x2499)),_0x147475;}function _0x13aa23(_0x55be90){var _0x62d840=_0x16065b;console[_0x62d840(0xafe)](_0x4490c7['tDwMH'],_0x4490c7[_0x62d840(0x1a3)](_0x62d840(0x844)+':',_0x5e2156)+_0x4490c7['QJlhP'],_0x55be90),console[_0x62d840(0xafe)](_0x4490c7[_0x62d840(0x35f)](_0x5e09ee+'\x0a'+JSON[_0x62d840(0x942)+_0x62d840(0x4bc)](_0x55be90,null,-0x1117+0x112d+0x1*-0x15),'\x0a')+_0x29d676),_0x3ebaa9=_0x55be90;try{_0x158b5d(_0x55be90);}catch(_0x3a2ed9){}_0x1ddd1b(_0x4490c7['qWhwh'],{'report':_0x55be90});}function _0x29202a(){var _0x481c9f=_0x16065b;try{return _0x4490c7[_0x481c9f(0x8e6)](_0x14526b);}catch(_0x49b7ff){return{'version':_0x383cde,'when':new Date()['toISO'+_0x481c9f(0x779)+'g'](),'elapsedMs':_0x4490c7[_0x481c9f(0x82e)](Date[_0x481c9f(0x914)](),_0x1c2398),'host':_0x410a83,'uwmk':!!(window[_0x481c9f(0x2bd)+'WebMo'+_0x481c9f(0x9c0)]&&window['Unity'+'WebMo'+'dkit'][_0x481c9f(0x70f)+'me']),'il2CppContext':![],'arm':_0x491224,'hooksTotal':_0xd685a[_0x481c9f(0x618)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x4490c7[_0x481c9f(0x2e5)](String,_0x49b7ff&&_0x49b7ff['messa'+'ge']||_0x49b7ff)};}}function _0x3597c3(){var _0x195201=_0x16065b,_0x420324=-0xf20+0x2472+-0x1*0x1552;try{_0x4490c7[_0x195201(0x494)](_0x300837);}catch(_0x2ae7c5){}try{if('aGBpC'===_0x195201(0x95f)){var _0x57c489=_0x365bda[_0x18b17d],_0x3be717=_0x4490c7[_0x195201(0x758)](_0x111f4c,_0x373e6b,_0x2090f0,_0x57c489['size']);if(!_0x3be717)return![];var _0x4f8273=new _0x299636(_0x3be717['buffe'+'r'],_0x3be717[_0x195201(0x631)+'ffset'],_0x3be717[_0x195201(0x655)+'ength']),_0x4bfed1=_0x57c489[_0x195201(0x676)+'pe']==='u8'?_0x4f8273[_0x195201(0x2a6)+_0x195201(0x34a)](_0x57c489[_0x195201(0x87d)]):_0x4f8273[_0x195201(0x705)+'t32'](_0x57c489['key'],!![]),_0x210c17;if(_0x4490c7[_0x195201(0x978)](_0x15462a,'obfF'))_0x210c17=_0x367bbe(_0x197544);else{if(_0x5165b0===_0x4490c7[_0x195201(0x39b)])_0x210c17=_0x4490c7['rNeRp'](_0x25d785,-0xdd7*-0x1+0x2*-0x45f+-0x519);else _0x210c17=(_0x5b6ae0?-0x1cb1+0x6*-0x1ba+0x270e:0x108b+-0x1391+0x306)&-0xeca+0x1292+-0x17*0x1f;}return _0x48917c(_0x3b812d+_0x5bee40+_0x57c489['hidde'+'n'],_0x4490c7[_0x195201(0x6fc)],_0x4490c7[_0x195201(0x7f4)](_0x210c17,_0x4bfed1))&&_0x4490c7[_0x195201(0x551)](_0x37cb53,_0x4490c7[_0x195201(0x3ad)](_0x4490c7['fZyPj'](_0x1d4d2a,_0x1d9f5b),_0x57c489[_0x195201(0x717)]),_0x4490c7[_0x195201(0x3be)](_0x223c12,_0x195201(0x1bf))?'f32':_0x554a89===_0x4490c7[_0x195201(0x39b)]?'i32':'u8',_0x4490c7[_0x195201(0xaf2)](_0x357846,'obfF')?_0x223311:_0x32313a===_0x4490c7[_0x195201(0x39b)]?_0x4490c7['brOmG'](_0x3e372b,0x4d7+-0x1d10+-0x75*-0x35):_0x3a1308?0x23d7+-0xef7+-0x14df:-0x8f5*-0x1+-0x1cd*-0x2+0x5*-0x283)&&_0x354447(_0x4490c7['xIRVd'](_0x2c38fc,_0x135725)+_0x57c489[_0x195201(0x62e)+'e'],'u8',0x18c1*0x1+0x1*0x14fb+-0x2dbc);}else _0x4490c7['SZEuj'](_0x2776d4);}catch(_0x57e4e8){}_0x4490c7[_0x195201(0x919)](setInterval,_0x1c52fb,0x2590+0x959*-0x4+0x358),_0x4490c7[_0x195201(0x9ef)](_0x13aa23,_0x29202a()),function _0x54cba1(){var _0x2133cf=_0x195201;if(!_0xd685a['lengt'+'h'])try{_0x12d88b();}catch(_0x96742c){}_0x420324++,_0x13aa23(_0x4490c7['MHwti'](_0x29202a));if(!_0xd685a[_0x2133cf(0x618)+'h']&&_0x420324<-0x85a+-0x2588+0x2f0e)setTimeout(_0x54cba1,0x66f+-0xf9d*0x1+0x87f*0x2);else{if(!Object[_0x2133cf(0x4f0)](_0x39f72e)['lengt'+'h']&&_0x420324<-0x1*-0xe64+0x1e4f+-0x1*0x2b87)setTimeout(_0x54cba1,-0x2*-0x273+-0x12fc+0x15e6);else setTimeout(_0x54cba1,0xd*-0x239+-0x2*0xdef+0x3d73);}}();}if(document['body'])_0x3597c3();else document[_0x16065b(0xb86)+_0x16065b(0x835)+_0x16065b(0x6d2)+'r'](_0x16065b(0x247)+'ntent'+_0x16065b(0xb7b)+'d',_0x3597c3,{'once':!![]});if(document['body']){if(_0x4490c7[_0x16065b(0x2e0)]===_0x4490c7['Vaifk'])try{if(_0x4490c7[_0x16065b(0xb4d)](_0x4490c7[_0x16065b(0x6bc)],_0x4490c7[_0x16065b(0x299)]))return{'w':0x0,'h':0x0};else _0x1dc02e();}catch(_0x29ba34){}else try{_0x18ddb4['syncs'][_0x333b71]();}catch(_0x3c2d59){}}else document['addEv'+_0x16065b(0x835)+_0x16065b(0x6d2)+'r'](_0x4490c7[_0x16065b(0x903)],function(){try{_0x1dc02e();}catch(_0x173427){}},{'once':!![]});})()));function _0x5328(){var _0x20ebe9=['v21cswy','B3bLBG','uLmG','ihDHCYa','BJPJB2W','o2jVCMq','D2vpyLC','BM9ZCge','ys1LC3a','CejqtKm','AgL0zs0','BNrxAw4','Bd0Ii2y','ign1yMK','C1bMtvq','C2STy2e','y2GGDgG','mxWZFdq','ALnlsvu','EejTswK','lxnWywm','yvvoDgW','r3fpEey','w2fYAwe','u2ftDxG','yxmGzMK','lwe9iMy','B3j5','zxCGy2e','ywnRz3i','lwv2zw4','B3j0lGO','BwuGAw4','tMfTzq','CJTNyxa','mhGYna','oJfWEca','Ewv0ic0','qxrbCM0','x3j1BNq','CgfYzw4','ntuSmtq','nZq4mZy','uujhDxy','Aw1L','lc4WnsK','qM90Aca','DerHDge','u2vLBK0','icaZlIa','Dw1Uo2C','vwfuAvO','sxv2sLe','BMLjCKG','ihzPysa','yKr2ufC','vvDnsY4','y29ZBMi','y25Srvu','rvnpwvC','CeTjuuy','zxHWB3i','txHoueG','wuDozeS','CMvWBge','lde3nYW','icbMywm','ktSTD2u','yNv0ig4','khmPigq','zuP5Awu','ywXSvMu','Dvfbyxe','ChG7B3a','ztPWCMu','vg90ywW','swTQBeK','zMLSBfm','DhvgA1u','s2r4AM0','i2zMnMu','tgHYswS','igvHy2G','r29cExC','zxaGDgG','z3jHyG','BcbHz2e','A2v5qxq','ltiUnsa','BMTLEsa','oInMn2u','ENjruwu','AxzLo3C','mcWUntu','lJm2lde','EdOYmtq','q3Pgugm','BM8GCMu','z3jVDw4','y0PjyNO','BM8Gz3i','nhb4ide','igj1Dca','zgvMAw4','CMLNAhq','yxv0BZS','i2zMyJm','y2fTia','tvzYz1C','iIbZDgu','zMfjwfu','Et8Pica','C3zNE3C','Dgv4Dge','BNqZmG','q1PptNG','nYWUmsK','A2LUzYa','lwjVDhq','pc9ZBwe','qNjJq2K','q291BNq','ihrOzsa','uuTMuvi','mNb4o3a','z2v0sxq','tvjJtfa','zMfPBgu','tuXxDe8','EuX0z2q','psjWywq','C2STChi','Bg9N','A2vKihu','Axryyvu','CvPgu1G','BhHfr2u','uhHor2G','uwTzDKO','igzPCNm','zxiTCMe','CKnVBg8','ugz3Bvm','DgG6BwK','DwzQuMy','B2XSzxi','DwKTBw8','BM9Uzq','q0jQvuK','DxjHpc8','ztT0CMe','CMqTDgK','DJiTy3m','DxrVo2i','yxjKlxi','DhK6lJq','tuSGq08','otLWEdS','z2v0q28','BwuGBM8','A3mG','yNjpBuC','DKfkC3e','AwvKige','yxmSBw8','BMDL','AxbIB2e','BIb0Agu','BYbHihq','B24Gzge','yxjLige','Fdj8ma','uNz2vKq','AhvKlwm','zxHdqwS','mtrWEdS','iNDPzhq','pt09u0e','CMeTCgu','ALzzreW','yJLKo2i','DxjLzey','zxi7zMW','ohW2Fdu','q0LLCfq','wNz3tfG','vvnSt0y','yw1LihC','zMXLEdO','A29Wt04','n3W0FdK','Chjhqxm','ChDlz0y','txLfr1y','idyWCYa','vKfm','z2jHkdi','yNvMzMu','DMvKpq','Dg9Y','zsb3ywW','CgfYyw0','CMvZB2W','uuTxq3e','mdT9','nIWYmZG','mxW0Fda','r1rowKO','lNnRlxi','DcHHDxq','zKnLqvi','ALLdv08','zwXVywq','r2LzwKu','BNq6Aw4','BxDUBxG','t01IEey','A2D2zfq','B2DVlxm','revPAge','BMnL','nwmWidm','Ate2','zJmY','DevktLi','yNvPBgq','cNbPDgm','igrPzca','q2DduLO','kZb4','DxjHvge','CNqGihq','mJrWEa','zxKGAxm','Dw5PDhK','rNvoy24','DMvKia','BwLSEtO','Dw9prei','ihrOAw4','oIjjBNq','yxjLBNq','q01pqwK','CM9ZCY0','A0vutLO','khrOAxm','z2fTzsa','AwrLE2q','B21Tyw4','C29SDMu','Bcb1Cgq','psiXlJu','DxnPyMW','Cg9YDge','DxjHtwu','rfH1s08','ucbVBJW','tg9Hzgu','zw1ZoMm','zsbYzw0','C2LU','C3rYB2S','BMCGlYa','CY5Tzw0','rwPnC1G','C21uExa','vMrgwNu','BIbZB20','ywrKrxy','BgW6Aw4','yw1Ligy','Aw5WDxq','nNW0Fdu','oNbYzs0','CKneCNC','DeLdEfO','Cg9ZDe0','Axq7Fq','BgvKoIa','BfD4vxO','oMLUAgu','BNrLEhq','DhLxzwi','C3bYAw4','BdPUB24','zxi6mxa','uhzYCgy','mJzWEdS','B29M','tw91C2u','BLj1BNq','mJG4ndaXmMf3whLRBa','B25LoYi','idaGmca','DhKGAw4','nsWYntu','ic0GCNu','vxDVBge','uKr2Dwe','icaYlIa','q0jMBhC','EI1PBMq','rw5LBwK','A3mUBgu','B25VC3a','BwLUkdu','z2vYlIa','C2fRDxi','BwvZC2e','mNm7Cg8','B2fYza','CNq7ywW','qwn0Aw8','y2f0','Dg87zMK','Dc1ZAxO','z25HDhu','wuziCei','y2vLwei','EuPsB0e','BM9UztS','EfHItge','u2DvDfy','z2H0oJi','yNL0zxm','igDSB2i','mhG1yW','AxnmB2m','zYbMywK','CMDPBI0','tg9VAYa','y2vUDgu','EcbZB2W','y09VzNq','C2vSzIa','mhHKna','EI51C2u','rK9xsMS','DgvYE2W','i2zMnMi','DgXL','mtqZlde','DgvHBq','ifbpuLq','BLzPzxC','zKLutMq','Dw5KoNi','imk3ia','AgvHBhq','oImXnta','rMzUtKu','yKfWv2O','C3zNpG','vNncv2S','Fdr8nxW','CMfUihK','Ec1OzwK','B24GAwq','Ec8XlJm','AxrSzxm','DcbZCgu','wxL1whO','igfWCgW','wvDkz2m','tMTLBuq','Ad0ImIi','zgf0zsG','wenjqw4','ywXPz24','DgG6mZq','ntuSmJu','icdcTYaG','yw5Nzsi','oMjYAwC','zsbLDMu','Dw1WAw4','lwfWCgu','y2SIpJW','lwnVChK','B3G9iJa','vePdsfG','Aw5Ozxi','zdPYz2i','q29IsgK','D2LKDgG','mhW0Fde','rw5HyMW','lJuGms4','zwqGEwu','C3bSAxq','wYbHBMq','CgfUzwW','DgvYo2y','BNn0yw4','CYGXlJe','Bg9YoIm','rhfSvgy','BNnPDgK','zhrO','zsGPlMu','oJm0ChG','AxrSzxS','EhvQv1C','v1L1rum','AvPJqum','Aw5NoJi','lwnOzwm','tvDyu0C','DKjmvwm','Bw4TDge','z2vOqKK','B2jMrG','BgW+','zMLSDgu','B3r7ywW','De1mqMS','y2fUDMe','svvmz3G','CfDJA3y','AxvZoJK','owqPida','CI1LDMu','wgnKr0G','Dxm6n3a','pgnHBNy','ChrY','qNvPBgq','C3rHBMm','nc00lJu','zu5btxC','igL0ige','i2jKytK','icaHia','CgvYBw8','EeDsCKS','Aw1Lr2e','CMfUzg8','wuvWzKG','re92qum','z0jVtgW','sKfdEve','C3LUyW','CM9WywC','uMPYEvq','CMvUDca','u0HTBhO','Dhm6yxu','DxjH','ztT0B3a','y3qOCYK','BNrPBwu','lwzHBwK','ig9Uia','zhrSz3y','ign5psi','tMjhvuy','v0LdswK','t0Xhr08','mhHKma','otK7y3u','mhb4oYi','Aw50Aw4','zYbZy3i','zxjHDgu','Dgv4Dee','A2uTBgK','ugHVDg8','igLUlwy','lwe9iG','ieaG','Ds1YB28','zsGP','ig9Uihq','DfPJEvi','Agjxv3m','CNHODum','BMu7Cg8','lxrPDgW','uxzfDK0','ihjLCg8','A3vYyv0','ChG7iJ4','ztTWywq','DdTIB3i','EgzAyM8','Ewf3','DdOXmxa','l3nWyw4','CdOXmha','rNbJrKK','AgfUzwq','zdDHotK','jsKGmta','v3fxAK0','lJKPo2i','ALfttwi','qNjHy2S','mtjWEdS','B3r0B20','B250zw4','y21K','z1zkv0G','mhG1oa','AwzYyw0','mduPo30','zxG7z2e','BM5VDca','Dg87Fq','ywj7zgK','AguGAg8','shzArgS','oJe7BwK','BMnLCW','yxr0zw0','B3nL','uMvNAxm','tezQq3q','wNjgsLi','oJnWEdS','zxi7zM8','BgXxyxi','zxjYB3i','sKzere0','DZiTB3u','q2rKzLu','ywjSzwq','A2vLCa','AwHRqxi','yuzYB20','B25NE2m','y2TNCM8','Bgu9iM0','zuvSzw0','rerwweW','B0rTBLm','sMntEhe','lde0mYW','DMvYBg8','CgXHEwu','mhb4oW','nduPoW','CMrLCJO','ChjLDMu','ywDHAw4','rhLQDwK','BwuUCMu','wwrlC1q','re9nq28','C2XPzgu','yLLjzha','vfzzAwy','DwvxCMe','s0z1rgK','DxrVo2y','yxK6zMW','zhrOoJu','C1jQv2u','Dg9WoI0','DgGY','zg9JDw0','yxv0BW','B3jPz2K','AeHju28','ys1Tzw4','B3v0','t0Peqxe','ihnPz24','zgLZCgW','o2fSAwC','lxDYyxa','mhGYma','BIbuyw0','DwvhEui','oInMnMu','idrWEca','yMLrwxC','quTJsg4','ns00idC','BgPsD1y','sLnptIa','zuL0zw0','C2fUzq','BMfTzq','vvDnsYa','zwyYo2y','C3bLzwq','AgL0CW','vgHLigG','ywT1CMe','uK1Sthy','s2P3zMq','D3jHCdO','kdiXlde','s0rjBwe','iJ5ZywS','Bwf4lxC','BgfZDfC','lNnRlwm','igXPA2u','CMrLCI0','icb3CMK','Dvvntw8','B2zMC2u','CNmG','ldi1nsW','zwn0Aw4','iefdveK','oInMzJy','ywrKCMu','BwrKA28','mtq0ndG4ofHSEuHdrW','D2fZBu0','EgzZtgm','CM9Wlwy','B20GDgG','AfnJCMK','y3joAge','uxngtxq','zgL2','u2nYzwu','u2PUs0i','u2vSzwm','D2LUzg8','CeX1zxu','zgryCva','uLPyAvu','Dc5KBgW','nYWYmsW','ihrOAxm','rLnPy3i','C2fUCY0','BM8TBwu','mwzYksK','EsbPBIa','mNb4o2i','Axb0ige','mZGSmJq','C29SDxq','Aw1Lsxm','v3j6zMG','zhvYAw4','vunwwMK','z2v0vwK','r1DxqwW','keLUC2u','pgLUChu','C3bSyxK','BwfUEq','wKDgq2W','BM90ig0','BvvltfK','owq7y28','Bxm6y2u','Dte2','ihbHC3q','nZu7Bwe','Chr1CMu','teLwrsa','ztT9','B2XPzca','zNzWBMy','mIWUnsK','DNmGC24','Aw50E2q','AgvHza','vw5PDhK','BwXcqwq','BI13Awq','zNvVv2O','EcbYz2i','AxmGBwK','CMf3','Bwj7lxC','AxnWBge','C3qY','ihbHC3m','zJzIowq','i2y3zwu','CNjVCG','zfnKuhm','zgLMzMu','BNrZoM4','AwXKlG','nxWWFde','zg5nD1q','DunUD1a','iIbZDhi','yM90q28','DgLHDgu','wgPLwu4','mZT9','DxjJztO','rKPItwy','y2zXsgW','CMvSyxK','tMT5yNu','o2zVBNq','EurXqNK','DMLLDW','y21hCey','vMfPzMS','u2LpvMK','pt09','oM9Wywm','zsb1C2u','BMPvuKG','ChrLza','EcaXmNa','vLbtuwO','DgL0Bgu','z2v0q2W','C3zNiIa','C291CMm','uKfqueu','wwrtAu0','rvnqigi','EhbVCNq','sgvHCca','icaXlIa','ww9Ssfu','re9IDKW','t2r3Aee','vgThENG','BMD0AcW','y3rPB24','zMLYzsa','DfPovwq','CMuGy2W','mdaWo3u','icaGia','txvVBMq','CMvNAxm','zxjLzca','D0PLBui','zsbNyw0','tgLZDa','zNjVBsa','Aw5KzxG','zw5LBxK','AKnMC1e','phn2zYa','DfDPzhq','ndySmJm','nYWUmZu','mdCSmtu','Awv3','iJ5dB3a','phbHDgG','BMq6i2y','BhK6Aw4','ignSyxm','nYK7y3u','ndC0odm','mIWUocK','zhKIihm','DMuGBwe','CMzSB3C','CJOWo2i','mtaIihi','BMqGBM8','uhHxAeO','Awr0Aa','rxHWB3i','qK94AK8','zwqGB2y','zMvLDa','AwzMzxi','BwvTyMu','Aw5KB3C','B25PBNa','m3WWFdy','CIiGC3q','BxmGD2K','wgndCNm','zeH0shC','lKHfqva','yxbWzwe','mZG3nJu2nu5nD3L1ua','zxHPC3q','lxrYywm','D2DOD0q','Bwf4','igvUzca','sw5Nqvu','zYbMB3i','mcaWida','lNnRlwi','Aw5Ly2e','r1zYt2S','y0nsrKu','BK5LDhC','Bwvhyw0','C1bhwuC','DeL1r3K','qMT2q1y','mtGGnIa','C2v0sxq','CNfVtgy','ywnPDhK','uMzlywm','uhjUr1G','uwntEha','ihbHz2u','zxnWia','Ae9os2W','AgLUDa','BNq4','Bg93oMG','CYb3zxi','CM9Xwve','zgLUzZO','zvbSDwC','rfzOz2W','B3rLE2y','vgnrB2C','igzPzwW','zxzXsMC','Cgu9iNi','Dg91y2G','C2L0Aw8','ignHChq','qK9hswS','B250lwy','B3CGkey','tgfNrKC','ihDOAwm','z1HwCxa','wevYsMK','s1fjy1u','BIbPzNi','q2rzvgi','zwLNAhq','AxrPB24','DNjmuwO','CI5QCYa','zxLoswC','DgvZia','BcbKAxm','yvD3s24','AtmY','CYbHy3i','zNvHvKu','y2XPCgi','wfHXC3K','yK5KqxG','zwDPC3q','zgLMzG','zM9YBq','CdPYB3u','tJWVyNu','Ec1KAxi','yMDZuhu','DgLHBh0','C3qGysa','CNq7z2e','zYbIBgK','yxrHihi','zMLSBfq','lNjLC28','mtTTAw4','z1DRsu4','zxG6BM8','sgvHBhq','CgfYC2u','rwvKCu4','zcb0Agu','ywz0zxi','yxa8l2i','zJu7Fq','ExD3ruu','B3nPDgK','CMvUDdS','y2nezKy','C2HHzg8','Dw5KoNq','Bxv0tLi','Dw50','rNLbvgS','CMvKia','tgfvrMC','ignYB3m','zwrnCW','zwf0zva','Dw5UAw4','vwfUs0W','m3WYFdq','vgTou08','EwLNyMy','yw4+','ndHWEcK','Aer5tgW','oJeYChG','yM94zxm','zKLJD3u','mhb4idu','veT3vg4','idqGnc4','vvnJqKW','zNfiz2y','lYbQDw0','AgLSzsa','DgHAug4','ChGGmZa','zYaVigO','u25HChm','vKL6qKG','twPqy1a','mNb4idG','Fdb8mq','Bw4TBwe','mJbWEca','DgG6nNa','DYbNBg8','yxbZAg8','z2H0oJy','ywi6Ag8','iZHKn2e','BNrezwy','D2vPz2G','vgPuwuG','DgfYz2u','DhrVBtO','v2vJCKu','kgXVyMi','zxmGDgG','r1PLEfq','Fdj8oxW','DgLUzYa','y2uSihm','CgPoCwG','EhfVBNC','CwfWELm','zxjZyc4','rhrAz0e','jwnBC2e','BK1HBMe','y2XPzw4','qM94zxm','Ag9VA0y','BIG1mNy','AffQyxO','rviGvvC','vvzYz3q','FdH8mG','AdOWo30','ExbLCW','yw1L','Bw91C2u','B3qUBw4','BNvTyMu','tePNwhm','yMfJA2q','DMvYE2y','zw50igK','Ehfjuhq','CgHVDg8','q0LRCLm','D2HVBgu','C3CYlxm','DgnOzxm','qNbwsvq','B2fYzca','B3vUDa','vMXfq2G','zxi7Dxm','DeHLAwC','B3nWywm','v2f0uKK','igrHDge','ChG7Bwe','zvbYthG','BMCGzM8','zgvYlxi','Dgv4Dem','r0fNv24','iZDLzta','B2jMqG','D2fSA2K','ywqU','Dw5KiI8','BdPPBMK','BhKUieG','A1v1A2y','icaGica','ndC7','Bg9ZztO','DgfN','s1DwsNe','ls1W','zfjuqMC','Cg9YDca','yMX5lMK','A2L0lxu','ihDYAxq','z2H0oJe','CwDWshK','zxa9iJa','l2nHBNy','sLvgEw8','D3jPDgu','imk3ihrL','BMrhtem','yw5JztO','zMXLEa','Aw50zxi','o3rVCdO','y29SCW','Awq7z3i','idfWEca','C056zKq','yMTPDc0','DgfU','BNnPC3q','yxjT','igj5igu','Dxm6mta','CgvKigi','nNb4o3C','BKToswW','B2fKzwq','zxi7iJ4','q2fTzxi','yw5LBca','lxDPzhq','z2fTzvm','lc40nsK','C3nPBMC','y2nsrKO','DKzlv20','ztT3Awq','BM90ihi','AwDUlwm','DNHZq2W','iNnWiIa','CJPWB2K','ztSTD2u','zgrUCMO','mcbMAwu','A2DYB3u','BJOG','o292zxi','nxm0idi','CM9Rzs0','AwDUlwK','suHVCwq','u2vNB2u','CcbHBMq','rgfRrNa','zM95ueK','zwn0ihC','lc40ktS','nNW0','zYbZDxm','yxbP','lxnOywq','yxrLigy','ywnLlem','A25vCLO','CKPHEMC','qKT2Dey','CMv0Dxi','mtmYmZKZmdzKrgjszxq','lNnRlw4','oJHWEdS','CMeTzxm','qMTUrLC','o2nVBg8','ysGYndy','uLzNCfe','zxnW','icbJyw0','phnTywW','BeTdvvq','zsbPBNm','oIm4zdC','Fdj8nhW','zuf0rMK','sM5Vvum','BNnVBge','DgfYDdS','B1jMEg4','zZOXmha','nJq3o2q','zw5K','tLfMzK4','uhfysMm','EY13zwi','CMuGkhi','yMrHowm','C3vI','EdTOzwK','uM1wAKu','Ec13Awq','ys1Wzxq','CML0Dgu','lxDLAwC','D0jksvC','v19F','thjksKW','zenOAwW','zxi6mdS','oJK5oxa','CJOXChG','ztOXnha','l2j1Dhq','t1PuBxm','Dhj1zsi','nZH2AdS','mhHIna','Dw1IE2i','oJa7zgK','igjVDgG','zhDHrem','DMLZDwe','BIbYzwW','CM9SBgi','BM90zq','DdmY','BwuUy3i','DKzRt1G','igLZihi','psjYB3u','ChGGmdS','DgHLigC','DYbLEha','B2SGEwu','y2fWC3u','zNjttu0','wK56vuG','B25Z','BNq7y28','rwvpC04','yM90Dg8','BMfSrNu','AxvZoJC','Aw5cyw4','ExP5seG','lxjLCgu','pgiGC3q','mcaXChG','ywrKAw4','uNjet1a','Bwf4kdi','BwfW','ywjZ','B3qGD2K','B3r3s2G','zxnJ','idaGyxu','yYGXmda','yM90CW','BMCUcG','DYaTidq','De9XzvG','BY1MAwW','icbVzMy','sLLPA28','icaGDMe','vNrft0K','Ec8XlJq','B25ZB2W','C3CYlwi','sKziuLe','Aw5WsNq','DKrprgW','D2fZBvq','AY13B3i','zsXdB24','lxDLyMS','CMvTB3y','vgzHBNC','CLD6yLi','C2XOCxu','yxbWzw4','DMvK','rwvxr1O','z2LMEq','lY0WlJu','ig9U','yMvNAw4','zZO2ChG','BfDHCNO','Bw4Ty2W','yt0IyMe','DxnLtg8','ztTZDhi','yMr6CeS','Ds1JC3m','rxvdENu','BhvNAw4','s2XTBwC','y2jOrvm','zxiTC2u','t0PJveu','vu1SwKS','zM9UDc0','AuT6D3O','yw1qDeW','B2SGAxm','ChG7zM8','pc9IpG','wgPpzgS','AwvYkc4','mxb4idy','yZKIpNC','CM1VBMS','zNvUy3q','uMvJDa','uhDeuwq','su9OvNK','igfYBwu','BgLKzxi','tg9VAYS','B2XZE2y','wxrNwg8','CMvHzca','ktT9','iMvZCci','CxvLCNK','BNuTCM8','zMLSBd0','igzSB28','tw9KA2K','yM9KEq','Ag9ZDg4','D1rssM4','BhflA0y','ChbLCIa','A2v5CW','Edjfna','ys1Hpsi','BgvMDdO','yw51rM0','ChGGC28','oM5VBMu','ihnPBMm','qu5pveG','ohb4o2G','DxrYtge','y0TLt0m','zwqU','rfbtrwy','Ahq6mJq','DLrnEKy','u2fRDxi','oJi2ChG','Dg9W','nZCSlJu','C29SAwq','pc9ZCge','u2HQtKO','DxnLCI0','CMvMAxG','rvnqig8','r3rNAeC','pc9ZDhi','Fdn8na','DhLWzum','CM91BMq','wvzovgi','DLvqv2q','zMzZzxq','BwTdBgS','Ag90','r3zwB0O','DvPKEvu','v1n6q2G','vMHutha','igfNCMu','surfige','BgX3yxi','Dw5PDa','ywjLBhS','s3nVrgm','B2r1Bgu','lc4WmJu','lwHPBNq','rLjzDw8','C3bHy2u','nNWYFdu','sM9nCuG','ChG7','q2XPCgi','zMXVyxq','yxmGBM8','zsbUB3q','DcbPBMO','iJeIig0','yxrHBJi','zsbVyMO','CMfTzsa','yxrnCW','zM92','u0jTtMu','rMLLBgq','AwXLzcW','DMfSDwu','B3j04OcM','v2L0BvC','zwfJAge','C3LUy3m','ru9gAxi','DtmY','AvbqvLa','B3vUzdO','BvHwDxG','DIiGC3q','BgLUzvq','CgvZia','Ag9VA3m','BgLUzvC','ihvUAxq','tMrQyMG','w2rHDge','CMDIysG','BMq7Fq','A2v5zg8','swjcC3C','B3fdA3a','AKzHvfe','zNzZDfO','CvbhBeO','mhGXmum','qu1xwNm','DuLpwwK','s3nMtwq','EMu6mta','zw5HyMW','rLrxDuu','CMvJDgK','Bwz1Eu4','zvn0CMu','q1DYCwm','AgLSza','lwHPzgq','sevbufu','DcbUBYa','z2jnq1y','v1P5DKm','ocWYndi','yt0IC3q','Aw5ZDgu','DdOXmha','u2nPDM8','oI40o30','AgfIBgu','zLrfrei','terMA0e','C2v0uhi','te9h','z24TAxq','refRwMK','zw50','E2zSzxG','Bg9Hzhm','B3nLCY4','zhjVCc0','yMfY','o3DVCMq','AgDgvNy','B25JBgK','vK50ENa','CMfUC3a','vKvsu0K','uKj5seq','zgLHAu0','vuHOBwW','zxmGBM8','Ewf3t2y','lxbHBMu','C2L6zq','Dc13zwK','uMv3uhe','ig1PBJ0','yK1jwLK','ELPrs3i','iZe1mgm','tuLHy3y','zxLL','EIaTihC','C2v0vwK','A2v5vxm','oJa7EI0','ALjer2K','Axr5oI4','qKvhsu4','BgLNBJO','B25Ligi','B2LJAw8','BgfZDeu','oMf1Dg8','As1TB24','zNLMBwW','Dg57ywW','zgf0yq','ig9Uy2u','ihn0CM8','zZO0ChG','zw1LBNq','CYbVCNa','Cg9Zqxq','ihnVBgK','BM8Gvxa','CeH4CeW','qurtv2G','C28GC3q','yxnZAwy','n3b4o3a','BgnYy3a','zsbZDhi','yxbWBgK','yMeOmJu','ugf0Aa','wxzwwfi','BgLZDa','y2fSlMq','C3vYDMu','ufKGve8','mdTMB24','zgfjDfC','C3rHCNq','vhzUBxe','CMfTzs4','y3rZimk3','sgvHCa','yxjKlwG','BwuUx2C','DKPeuuO','DZiTyM8','CNvUBMK','mNb4idC','yLPSsMG','z2v0rwW','yMfJA2C','B3a6mti','ihnOB3C','zwfKE2q','zw5LBwK','Bg9HDhm','mJu1lde','zMfJDg8','ldeWnYW','BMqU','mtiGmJe','AxjLuhi','t0f3vve','CM06BM8','icaGy28','DMfS','Awr0AcK','BwvHBNm','Bwf4lwG','BgLNBG','DYGWida','zgjmExe','CJOJzJC','r0DFr2e','EKvNC2K','BhfUCu0','Dvnmueu','BNLSyvi','lwTD','pgnPCMm','rMPyD2q','lwLUzgu','BMq6Dhi','BurOr0q','shHJtfu','CdO0ChG','y29UDhi','ktTJB2W','CMq7zM8','BMnLv3i','B3DUkq','4Ocuihr3BW','CM9SBgu','DxvVCvy','CMfUz2u','CKnVDw4','Bw4TDg8','yM9Yzgu','whjbuLi','Bw4TCge','s09yBuO','ifrOzsa','yvvsEMS','C2TPBMC','ueXbwuu','mhG5oa','yMeOmJq','yuPIvfe','zgf0yxm','ie9o','Bg93oMe','oNrYyw4','lM1UlwW','ChbusuO','zKDUBfG','oJCWmdS','lxaSnta','idaGlYa','B25TB3u','mcuGBM8','yxjHBMm','v3jHCha','CI1YDw4','lYbZChi','Bgv4lxC','A2v5q28','y2vKigi','zxH0','BwvUDc0','psjJB2W','rgTRqKS','BgvMDa','AguGBgK','u0nKsw0','ys9vv00','iNjVDw4','iIbZDhK','mhb4ic0','D3jHCdS','EePIwgO','y3nZvgu','BgvUz3q','Axr5oJe','C2v0','v0fswI0','BgTSrem','nIiGC3q','ywX7zM8','C3rYB24','mtaSmte','rvnqig0','CZOXmha','ndGZnJq','Dgf5CYa','Bg9NBY0','vvzzuMe','AvDrA3C','oNjNyMe','igq9iK0','z05PD2O','CZPZDge','BMfNzxi','qvbvoca','ywn0Axy','ig9IAMu','Bw9UB3m','yNL0zu8','BI5FCNu','zfLvwuu','yw1PBhK','ihjLywm','CgfKzgK','nxb4o2i','mI45lJm','ig9MzG','tM9kuKW','iMzVBgq','DhP4DNy','s2jAt08','BwLU','A2LUza','zwvKig8','DuTKtwq','DhDPy2u','shHhDhO','yxjTzwq','CNmGyxi','yxvSDa','DcbYzxa','AwvK','EwXLpsi','yY0XlJu','BM8Gseu','BgjlrNO','v0Xqrfm','EdTMB24','ks4G','vKHit0O','vNrVv1u','lM1Ulwm','tfbiAum','CZPUB24','yNL0zuW','qxbWBgK','ihzPzxC','EcXJywW','CurXr1K','zgnyv2K','BuPIBLa','z2XVyMe','BwuGlsa','AxmGD2G','ChqGsvm','zwqGlYa','muvQAvPuqW','AK5qq2i','zJWVyNu','zJDLzwy','vgHPCYa','zMLSBa','oM1PBIG','nsWXndm','BMf1A3K','Dg9ju08','BNnLDca','zg93','psjZywS','AuvVEw4','yxjJ','s1vsqs0','zciVpG','t3zMqw4','BNrLCJS','AxvZoJe','BwuOkq','A2v5vhK','ihDOAwW','ENrOu0S','Bw4Ty28','DhPZsfG','u3bYAw4','vuP1BLm','AhjLzG','mhGXma','Aw5Lza','A29SvNa','ifnxlva','mdT0B3a','ms41ihu','B3bLBIa','zxG6mJe','u1n2y0i','C0T5DLa','Dw5Kzwy','yw55ihC','CNjLtMG','AwqGCMC','oMnVBhu','ihLLDca','vLzYz2i','B3rVBK4','nsaWlti','qMLUzgK','s2Xtt20','Bg9dAge','AvPnzgC','Dhj1zq','C3rVCfa','CMvMzxi','psiXnJa','y2u7y28','txjZzLm','vgv4Da','ww9eCMG','AgvSBg8','tgLtv3u','vvjbx1m','CMvHy2G','CLHQA3O','mhWYFde','Bvbzrui','psjIywm','m3WW','y2uSq28','iNrLEhq','Aw9UoMy','DhLSzq','Ahq6nZa','wK5SChy','ihvWk2q','vgfTCgu','AhvK','EeLsvMq','sgrhBeW','zcdcTYa','C2STBM8','q2HPBgq','BMC6nNa','zcbPCYa','ANvNzw8','rhrVr2G','tunrAeO','Bg9JywW','Cg9PBNq','ugXHEwu','yLLmwNa','DvPrD2O','yxiTDgG','Cgv0ywW','BI1PDgu','ihn0EwW','zwXLy3q','Axr5ic4','q2PJCMK','C2zVCM0','C2vLBNq','wLPrrK8','ru1lEKm','ywnLo3C','tNDrAeu','igTPBMq','zgjeEha','iI8+pc8','BgrZlIa','BMv2zxi','iJ5tCgu','oYi+','C3rLBMu','Bw9YEvq','EhL6','zxj0D0O','khmPihq','B3rLlMu','B246B3a','ysGYntu','nhb4idK','CM93CW','r2THCNy','yxiTz3i','ldiZocW','zxmGB2y','nYWUncK','oIiIo3a','iJ48l2q','v1DnzNy','DMLLD0i','vgHLigy','mJuZodC1mfLuqvPPAW','zhvSzq','ywSTD28','vKvbzuq','yMvSB3C','yxGTD2K','sMXHyuy','y2XHC3m','BMDZ','DhLSzt0','EuPMsM0','BwvTB3i','DMLZAwi','oJi1ChG','ndmSmtC','zwvMntS','A2vKpsi','oYi+tM8','tLH2CgS','Dg9tDhi','C2fNzq','zw50lwm','BejTrhy','BwjZCKO','BwLUv2K','igDHBwu','CMvWB3i','oJe7Dhi','otbWEdS','mhGZma','B25Jzsa','z2v0sw4','oMzSzxG','BNrLBNq','ChG7y3u','CMXHyMu','owq7Fq','Ag9VA1a','sMPWDhi','igjSB2m','sw5ZDge','uNvUDgK','Aw1HCcW','z2vY','BhzLr2e','CLjfC1C','sfrnta','ywDLigG','EhfzAuq','zMfRzq','iIbMAwW','lM1Ulxm','tLbdx0m','vxbKyxq','Cc1SzW','r1nYB0W','zdTTyxi','ksbVCIa','r2vrs0y','AwXKlca','Dxm6oha','nIa2Bde','rvnqoIa','zxrOAw4','y2zUwuW','mhG3yW','iJ54pc8','ihvUyxy','mNmSyMe','C2nYAxa','z2v0rMW','C2v0qxq','sYbZy3i','uIbbq1q','y29TyMe','yMvS','ntbWEcW','AwX0zxi','CMvHzhm','zvnxAK8','Aw4TyM8','yM9VBgu','DeL0zeC','lt4GDM8','zwn0zwq','psjZDZi','ksbZyxq','zwz0oJe','igfYztO','t0jKteO','DLjYDgC','BwfUywC','EMrvtKy','s2DkCwK','AMndyum','ChG7yMe','zw5NDgG','ywrPDxm','ys1ZDY0','iM5VBMu','Dg5cseG','A3rnquW','y1DIB20','r1j4uwy','ic0+ia','nYWUnYK','mduPlda','B25Tzxm','DgHLBG','B25NlG','pgrPDIa','y2XVC2u','tg9VAW','q3bVCg8','uwXzy3e','ywLSzwq','wLLQDhK','EvrHCa','zxvUvK4','CNqP','zxrsAwC','BxD0yKW','C25HChm','mYWXnZC','AMPPrKO','BgvY','vNrjq1O','Bg9VA3m','tKvovhC','Dcb3yxm','sfnWD3y','zw50rwW','A0zLwui','Ag90ig4','v2LKDgG','veXJr2O','AguGCMe','yMuGCMu','iMjHy2S','B3C6Aw4','BKjeCem','yw5ZAxq','zZOXmxa','zM9Sza','ihvPlw0','s0TqDxu','uuPSAfa','u3rYAw4','BguIihm','rezVBMG','ig90Agu','C2STBwq','D1Lizwm','zwjJsg4','ChGGlte','zcWGBM8','B2TLlwW','BgrPBMC','zwvKzwq','yM94lxm','rhj0uxm','Aw5PDgu','y2fWDhu','rwfsshu','zxnZywC','zMLYC3q','ywX1zt0','AxqTC2m','A2v5u28','Bgu9iMm','iMrPC3a','uxzrwKm','CI5KBgW','lMrSBa','C1nlCLC','tNfvtg0','zNbZ','igvUDhi','qLjSwhi','DM9Pza','txvSDgK','Dw1Uo2e','B3vYy2u','B2XVCJO','ChG7yM8','BcXTAw4','EdTHBgK','zdTYAwC','DMvYC2K','DgfSE3a','AdO5nNa','lZ48l3m','zxqUia','Axy+','CxLtruK','mJG7','nJaWo20','o2jHy2S','yvjuBLG','lNnRlxm','oJrWEca','yxjTAw4','DKXPy2W','D2fYBG','nNb4o2i','Aw5Uzxi','DgLVBJO','zgL1CZO','DNLcyMK','Ahq6nJu','CMDWELy','q0r4twO','B3CU','oY13zwi','zxzLBNq','zgvYoJe','uxjiCLy','ys1ZA2K','DgvYzwq','ntuSlJi','AePMtM8','Ag9VAW','B3jKzxi','oMnLBNq','vM5mzxK','igfJDgK','CY1VCMK','zwXHChm','r0zyyK0','wMzZvLq','Ee9SC3C','yNv0Dg8','C28GDgG','ys5ZA2K','u3bLzwq','y29WEq','vwDTzw0','B2SGzMK','EK1tB1G','BMfWC2G','AfnWyM8','Awz5Cfy','DcbIzwu','vvjPruW','DgG6mJK','C3bHCMu','BhvTBJS','tNfACeK','C2TwAuC','CNjbz0e','AwWYq3a','BNrYB2W','pc9WCMu','BIbjtLm','Ag9ZDa','zKDhuKC','BgfIzwW','AwPMuLm','zM8Qksa','zhrOoJi','DgeTyt0','EwvZ','pgj1Dhq','lxjHzgK','iNnUyxa','D3rVDNG','qNLjr1C','AdOZmNa','mxW0Fdu','yxmGAwq','r2TvtwW','CIb0Agu','ie1ciea','icbTzw0','ChG7Agu','Bg9YoNi','u3zNDLa','lNnRlw0','DxjHDgu','BNrPyxq','BJ8PoIa','AfvxvgO','CgL0y2G','t2Toz3G','zsb0Age','u2vLBG','B3zQvuu','ktTWB2K','zJy0','oJOTD2u','B2Hhr1u','sw5Zzxi','rMXHzW','y29Z','BhP3zLq','oJPHzNq','lgnHBgm','nhb4o3q','ndK3mZyWmeXTy0jeAq','rK5sB00','ywn0B3i','zwqGysa','Cg9ZAxq','BxbSyxq','C2STyNq','DMvYEsa','otC0mJi5y3j3tfzk','BMCGB24','yw5ZzM8','tIbIEsa','zM9UDdO','DgHLigW','mNb4o3O','kde1mcu','igfYzsa','uKfkv0i','zw1VCNK','oYi+rvm','rMr1BMG','Dxr0B24','ztOXm3a','EgvZlIa','nNWZ','Awq9iNm','lxnUyxa','t0THDKS','iJiIihm','EIaOsw4','CLzlzhm','igLUC3q','igfUzca','veDHuuK','B2f0mZi','EsbHigq','ChG7Cge','zw50tgK','msiGDMe','A1zkyKu','tNj4yLy','AgfZtw8','AePlD1a','ugfZDgu','C2LUz2W','AguGD3i','BevAuhC','qNLjza','BwfYA3m','zNPbqw4','C2v0ida','B3qGica','y29SB3i','sK9pAwC','B25Lige','z1zHDuW','Dc4kcLq','i3n3mI0','yMXLig4','zwy1o2i','uLjvBhm','ihbYB3y','BgXLzca','igvHC2u','wu9wtgO','Aw4U','qxnZzw0','yxjKlxq','BMC6mca','C2STy3q','lM1Ulxq','EdTWywq','y2GUC3K','EtPUB24','rxPKqw4','DdPUB24','CfjprgK','C0fjzeO','4OcuigzYyq','oMjYzwe','nJq2o3a','Chj1s2G','BIaUC2S','D2fYBMK','Fdv8mNW','oMzPEgu','ihbHDgm','AwDODdO','C2XPy2u','sLDQDg0','q25euhq','ndzWEdS','mda7y28','D3jHCha','Axr5','wezzDwC','pZWVC3a','whvpBxK','zg93BG','ywfUs2W','ieeGAg8','ywLSywi','mtfWEdS','yKPtqwy','D192mG','DhrVBJ4','B25LoW','yxG9iJu','z3jHyMi','A2v5','DxjPBMC','z29UwuW','v2jAuMC','Bg9Zzsa','lJv6iIa','C2vYAwy','D257B3a','igHLEd0','DfPOCLq','vwvgyK8','CeLTDvy','zwjRAxq','zMLuuwq','EtPIBg8','B3i6Cg8','idi0iJ4','qu92yKW','BLr5Cgu','zw4Gyw4','zgDiCLG','CMfKAxu','D2HLBIa','C2v0sw4','AM9PBG','C2L6ztO','igLZigy','Aev3Afy','BgqGAxm','AfrjuuO','thzPv1u','Fdf8mG','zxnWyxC','zMTtvfi','D2H5','C3r5Bgu','DgvK','B25NpG','vxfAu1q','Cffyv2G','ig1LBNu','zgf0ys0','C2vYDcK','yxjNAw4','v2vItw8','msiGC3q','x2DHBwu','CMeTBwu','y2u7','EePJCfG','zMykrJG','DhjVA2u','ifnxlvC','ktTIB3i','B3bLCNq','yw5ZCge','Aw5ZDge','zejPC0O','idqTnc4','Bg5bvM0','tNjSrwm','AgvYAxq','lcbZDgu','Aw5N','swfMzMm','AgvPz2G','BgfZDem','BgPqtey','lNnRlwW','zwz0oMe','t0frB2q','B3i6CMC','vuPsBhG','BffxuwK','ywiUywm','C2vSzwm','y0jWvKO','BIbtruu','EdPUB24','mJHWEdS','zwqGyNu','rLbty28','B2TZihi','y2PdCg8','Axb0igK','vMDduwO','ltqTnY4','y3vYC28','AcbMAwu','DJiTDge','Cu93uhu','zxr1y3G','yxv5vKm','s1HTvKq','igLZig4','BMvS','uMvZB2W','yNvPBhq','C28GAxq','B3bHy2K','mxb4ihm','ifvxtuS','Dg9WoJe','u1vwrhu','rwvkzNi','vND6yMK','DgfNtwe','CNnVCJO','ysbtA2K','CMvMCW','B246zMK','zwqGlsa','zxG7ywW','v3futwq','BuvHyvm','AxHLzdS','zKrhueq','C2rwChC','mxW1Fdm','qKzZtu8','q2HQuxe','EdTHy2m','lde1nYW','EMu6mte','BKXrrMG','z2H0oJC','DZOWidi','C0jLDfK','C3fYDa','zvn0EwW','BhLJz0q','iZjHmgy','iIb3Awq','Cd0Imc4','q1btsee','Cc1JDG','phnWyw4','Esb0Exa','vxnyuMG','mJq2ldi','ruLHEMi','uvHVEhO','lsbvBMK','CgX1z2K','A1LzChe','Dxm6nta','wMX5Dwi','zdP0CMe','EtPNCMK','DcbPzd0','zw50o2i','BM93','uMfUz2u','C2STC3C','Ad0Ims4','Bez1BMm','qw9fu1q','igjVDhm','C3nkrMG','y0zoEu4','u2THD1a','q0vjDMC','mJu1ldi','ywn0','rhPxr0i','ywWGB24','q2XhEMG','z0PlAve','sgDRCfq','r2fTzq','EfbUCgO','Bgv4oJe','BhvLica','o21HCMC','mtC3lc4','AwnLihC','mJu1lc4','zgrPBMC','CgXPzxm','nsWUmdG','zwn0Aw8','swTsz0S','C2STDMe','BMnLC1i','B2LUDgu','n2e2ntG','A3mGD3i','DgDqtuq','rLDNwvq','AuLguwK','nYWUnsK','u2HHCNa','tNjHD2q','B2f0nJq','v0z3Ce0','t0SGt1y','uu52zeu','C3rYAw4','CKXPC3q','Ew5TsK4','nIaXoci','CMuk','t2zM','EKPcAwy','ic40nxm','BMuUifq','t2zMC2u','A3jVyue','Bc5ZAg8','C0nuDeW','nunqEhnuza','n3WXFdG','mtbWEdS','vgHLigC','C3mGmhG','yxbWBhK','DhjHBNm','rvPivuC','lJi1ktS','suTqy1a','qufArKq','BhDHCNO','AwvSzca','nsiGC3q','q3fNr2C','qMruqLe','Dercsei','Eu93t1C','DxnJtuC','Dc5wywW','CMvKige','ig9Yihq','y3jLyxq','BNrPBca','qxHpyKO','lxnWzwu','BNqTC2K','ywqGzMe','Dg9YqwW','BNnWyxi','ywXSzwq','qNzzyu0','z2fWoJG','CKvQq2G','B2jM','mIWYosW','lM1UlwG','B25htxu','t2PpvuG','ys1IB3G','tKXerKW','qMThuLi','ihbHBMu','zYbxzwi','ALfqueG','nZKSmtq','AgfKB3C','ALn0B0G','E29Wywm','ALDItg0','BwvUDs0','B3rYB2W','C25HCa','i2zMzdq','DxjHlwu','BwTAvgy','AvryzxC','B206mxa','tevXy1C','ifvjiIW','Dxm6nNa','AgLZiha','vejezLe','C3bHBG','ueTPtva','vMjzqvm','oJiXndC','BMC6nha','Acbxzwi','ihnVigu','C29Syxm','DMC+','vKuGDG','C2vUDca','idGWChG','uwHHDNu','B2jMsq','BMq6CMC','AguGB2W','qu5eihq','Awr0AdO','oJeGmsa','r09ywxK','DMvhyw0','ihbVC3q','rNf2wMG','CMvMDxm','ig9Ul28','C2STC2W','sfvlCLm','CxjLruO','rhnmz1u','CdO4ChG','mJGPo30','Bgu9iMq','oInIzge','yxqG','y2S7zM8','yxnxv3e','BwvHBG','B2TLpsi','DxqGEw8','r3nKt20','z2fTzq','EMrAreW','rKPfr3G','CMvKihK','zLH4DLy','kdi1nsW','tKLyy1a','v2DhCNy','Ag90CYa','BgCIihm','zgTPDa','igSWpq','zMXXzfa','Aw9U','DgvZDa','B3i6i2y','rJKGDhC','C3rLCa','x19tquS','mtTJB2W','y29Kzq','zhmGB24','m3W0Fdi','mhb4o2y','vw13AhG','zxzLCNK','BM8GD2e','yLvbree','AKnqqKS','AeXwENO','CfjhvxG','AgvHCei','lg1VBM8','DgfSBgK','zxnXzge','sfvZD1O','EtOUndu','m3b4o2y','tKXkEKi','i3nHA3u','C3CYlwG','BgvYige','sKL2v1G','quDMBfu','C2STCMe','y29UDgu','Aw5Qzwm','sgvPz2G','tw9KDwW','DhLWzq','ANvZDgK','BuzYDge','o21HEc0','AgLKzgu','reTXDeq','ExjNvvi','yM5rBLe','tu5vD3O','lNnRlxa','yxr1CMu','y2zRrvC','txDkDgC','wK5Puhm','B3zLCMy','B3i6','zsbWCMu','x19ZywS','zLH6EwW','A1bXBxi','AgvHCfu','ugDyB1y','pJiUmhG','mcbVzIa','BMrVDY4','ugT2AgW','ChvZAa','igLKpsi','BhTWB3m','sfbltwO','zxjZ','CgfKrw4','wLfUrLO','BgjszfK','BfnoyMG','Bw47Fq','zw1WDhK','CMvK','rhvfuLa','CMfUy2u','idzWEca','CI1Yywq','q29WEsa','zJu7yM8','vxr5rwm','C2STBwi','CI10Ahu','DurMs2G','DhK6mdS','if0GywW','zxHLy0m','BNqTD2u','sLfZExy','wwjMy2y','EuD1t2q','lwvZCc0','q3rcBKy','r1LYwK8','BgvYigG','yun6yNe','CgfUpG','mIaXmK0','zgTPDc4','B246y28','zuXQrw0','icaO','ic8G','v3P3why','EdTMBgu','DdOXnha','sKjorwK','oMLUC2u','EdTIywm','Aw5MBW','yw5KigG','x19hzw4','uefKzue','yw1LlGO','BML0Awe','zxi7z2e','vxPKquC','y2uGyM8','Dg9gAxG','CgvJDhm','t3DtBLe','CgLUzYa','yu9hB0q','CM9VDa','oJaGmca','lL9Nyw0','r2fTzsG','sfvxEfq','AxmGyNu','DcbTyxq','r05mAMm','wNvjtfq','BIbHihi','C3aTy3y','CvjlzK4','CM5PBMC','z29kvMK','idaGmJq','zsbYzxa','mcu7','zhz6A1u','Bgv6A2y','CwLXCe4','D2L0y2G','DhjPyNu','yM9KExS','B3n0Awm','zNjHBwu','zYbTyxi','iJ5VCgu','B3vUzci','r1jzqKO','idHWEdS','yMfS','qM90','igHLyxa','wKTmzwq','B3jRu3K','kZb4mJK','Fdb8mNW','AwrLBNq','y2fTzxi','icbVyMO','oJaGmta','rvv0CxO','ihnRAxa','C2v0ica','EvjVD3m','rviGD2K','vgDpuNu','zMXLEc0','EwuU','ignVCgK','DxbzsNu','BM8Gzw4','wMn3u0G','imk3igzV','mteUnxa','y0fyCxq','ic4Znxm','yZK7BwK','Cg9Z','ihjNyMe'];_0x5328=function(){return _0x20ebe9;};return _0x5328();}
