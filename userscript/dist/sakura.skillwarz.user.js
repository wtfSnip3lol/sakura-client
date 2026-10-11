// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.12
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
                        // SAKURA PATCH: the WASM writer emits import/export field names as raw
                        // byte values, not UTF-8. Unity's own method names are ASCII
                        // ("Update"), so this never showed - but an obfuscated IL2CPP
                        // name is not: MouseLook's accessors are U+008B and friends,
                        // and pasting one in produced
                        //   CompileError: field name: no valid UTF-8 string @+20672
                        // which killed instantiation outright. The game would not load.
                        //
                        // This name only has to be UNIQUE. It is the key used in
                        // importObject.env[...] and written into the binary as that
                        // same string on both sides; the IL2CPP method is resolved
                        // separately, by the real methodName, against scriptData. So
                        // it can safely be a hex encoding rather than the name itself.
                        const __asciiName = (s) => {
                            let out = "";
                            for (let i = 0; i < s.length; i++) {
                                out += s.charCodeAt(i).toString(16) + "_";
                            }
                            return out;
                        };
                        const injectName = useHook.typeName + "xx" + __asciiName(useHook.methodName) + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.makeId)(8);
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

function _0x3c88(_0x15fd4,_0x46a473){_0x15fd4=_0x15fd4-(0x2342+-0xc*-0x328+-0xe63*0x5);var _0x34ab92=_0x2c90();var _0x2a3138=_0x34ab92[_0x15fd4];if(_0x3c88['iivWde']===undefined){var _0x5a6ca0=function(_0x4523f8){var _0x3a4e64='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4d55b8='',_0x1eed84='';for(var _0x43202f=-0x1*0x1871+0x896*0x4+-0x9e7,_0x6d68c1,_0x37996e,_0x2fec41=-0xe12+0x31*-0x4f+0x9bb*0x3;_0x37996e=_0x4523f8['charAt'](_0x2fec41++);~_0x37996e&&(_0x6d68c1=_0x43202f%(-0x256d+0xec7+0x16aa*0x1)?_0x6d68c1*(-0xa8a+-0x1*-0x19cf+-0xf05)+_0x37996e:_0x37996e,_0x43202f++%(0xb40+-0x202a+0x14ee))?_0x4d55b8+=String['fromCharCode'](0x6*-0x61f+0x1*-0x7d3+0x2d8c&_0x6d68c1>>(-(0x986+0xc5f*-0x1+0x2db)*_0x43202f&-0x11cb*0x2+0xa74*0x2+-0x4*-0x3ad)):0x25*-0x100+-0x11b*0x5+-0x1*-0x2a87){_0x37996e=_0x3a4e64['indexOf'](_0x37996e);}for(var _0x5ad994=-0x14c6+0x1d4f+0x13*-0x73,_0x408528=_0x4d55b8['length'];_0x5ad994<_0x408528;_0x5ad994++){_0x1eed84+='%'+('00'+_0x4d55b8['charCodeAt'](_0x5ad994)['toString'](0x431+-0xf7b*0x2+-0x1*-0x1ad5))['slice'](-(-0x19c9+0xb*0x332+-0x1df*0x5));}return decodeURIComponent(_0x1eed84);};_0x3c88['NpbVjr']=_0x5a6ca0,_0x3c88['Rizrrb']={},_0x3c88['iivWde']=!![];}var _0x307c00=_0x34ab92[-0x167b+0x255e+0x25*-0x67],_0x58d129=_0x15fd4+_0x307c00,_0xb6e3c4=_0x3c88['Rizrrb'][_0x58d129];return!_0xb6e3c4?(_0x2a3138=_0x3c88['NpbVjr'](_0x2a3138),_0x3c88['Rizrrb'][_0x58d129]=_0x2a3138):_0x2a3138=_0xb6e3c4,_0x2a3138;}(function(_0x5f5a18,_0x27abfc){var _0x1c5ae9=_0x3c88,_0x2ac266=_0x5f5a18();while(!![]){try{var _0x5d8706=parseInt(_0x1c5ae9(0xb76))/(-0x16de+-0x1a48+0x3127)*(-parseInt(_0x1c5ae9(0x74e))/(0x1a98+0x1562+-0x17fc*0x2))+-parseInt(_0x1c5ae9(0x85c))/(0x24aa+-0x1*0x9fa+-0x1aad)+parseInt(_0x1c5ae9(0x412))/(0x135b+-0xd22+-0xe3*0x7)+parseInt(_0x1c5ae9(0x807))/(-0x2*-0x6c7+-0x10c7*-0x1+-0x1e50)*(-parseInt(_0x1c5ae9(0x80e))/(-0x1a*0x1+-0xb3*-0x16+-0x22e*0x7))+-parseInt(_0x1c5ae9(0x77d))/(0x821+-0x1da3+0x25*0x95)*(-parseInt(_0x1c5ae9(0x530))/(0x1b51+-0x328+-0x3*0x80b))+parseInt(_0x1c5ae9(0x863))/(0x1*-0xa47+-0x2023+0x2a73)+-parseInt(_0x1c5ae9(0x814))/(-0x20cb+0x1ee9+0x1ec)*(-parseInt(_0x1c5ae9(0x8a8))/(-0x1*0x1dff+0x278*0x7+0xcc2*0x1));if(_0x5d8706===_0x27abfc)break;else _0x2ac266['push'](_0x2ac266['shift']());}catch(_0x42013d){_0x2ac266['push'](_0x2ac266['shift']());}}}(_0x2c90,-0x284b1*-0x1+-0x69*-0x39a3+0x3*-0x4a5d3),((()=>{'use strict';var _0xc654b5=_0x3c88,_0x2c575e={'IfiQk':function(_0x1a85b2,_0x16167f){return _0x1a85b2(_0x16167f);},'SYsTp':function(_0x48be77,_0x2bdd41){return _0x48be77+_0x2bdd41;},'JxrdO':function(_0x985e8c,_0x3d69fa){return _0x985e8c!==_0x3d69fa;},'hTIaS':function(_0x5e267d,_0x241226){return _0x5e267d===_0x241226;},'uFgxS':'XHbWO','lIBPT':function(_0x15ea4c,_0x27ea55){return _0x15ea4c<_0x27ea55;},'fYojf':_0xc654b5(0x159)+'|5|4|'+'6|0','GRdcC':'Speed'+_0xc654b5(0x1d6),'xTsNN':'#2a0f'+'1b','ypJNX':'#f7ee'+'f5','kKoFC':function(_0x581f77,_0x12bc1b){return _0x581f77+_0x12bc1b;},'bsUaz':function(_0x3a1e3b,_0x1047b9){return _0x3a1e3b===_0x1047b9;},'dmltM':'Ybnej','oLoVY':'Wksoc','oGqJX':function(_0x5cdf9f,_0x54d6ff,_0x24d7fb){return _0x5cdf9f(_0x54d6ff,_0x24d7fb);},'Ktlnl':function(_0x37e6a7,_0x53b19b){return _0x37e6a7===_0x53b19b;},'ANeiv':'JOsqt','qfkJX':function(_0x57de93,_0x3670d1){return _0x57de93(_0x3670d1);},'GYMxV':function(_0x36bdc4){return _0x36bdc4();},'OgOsg':'sakur'+_0xc654b5(0x6d9)+_0xc654b5(0x767)+'b','aoXId':'posit'+_0xc654b5(0x626)+_0xc654b5(0x7da)+'left:'+_0xc654b5(0xc6c)+_0xc654b5(0x971)+_0xc654b5(0xc0c)+_0xc654b5(0x962)+_0xc654b5(0x7d0)+_0xc654b5(0x298)+_0xc654b5(0x407)+_0xc654b5(0x188)+_0xc654b5(0x964)+'er;us'+_0xc654b5(0x7b9)+'lect:'+_0xc654b5(0x4d2),'uSgEG':_0xc654b5(0xac4)+'r-rad'+_0xc654b5(0x34b)+'99px;'+_0xc654b5(0xaf2)+'ng:4p'+'x\x2012p'+_0xc654b5(0x98b)+_0xc654b5(0x83b)+_0xc654b5(0xb85)+_0xc654b5(0x39f)+_0xc654b5(0x347)+_0xc654b5(0xab1)+_0xc654b5(0xc69)+_0xc654b5(0x779)+'nospa'+'ce;','qjozJ':_0xc654b5(0x72f)+'a','vSWcK':function(_0xc7db5f,_0x2309d9){return _0xc7db5f&&_0x2309d9;},'VMnwC':function(_0x43ca4a,_0x24d0f1){return _0x43ca4a!==_0x24d0f1;},'ElVCj':_0xc654b5(0x3e9),'dGykh':'sakur'+_0xc654b5(0x6d9)+'v2','AVqcF':_0xc654b5(0x184)+'kura]'+_0xc654b5(0x924)+_0xc654b5(0x8a9)+_0xc654b5(0x333),'EcyKm':_0xc654b5(0x62d),'EvLLQ':_0xc654b5(0x4a3)+'1d','jPtoi':function(_0x2274d1,_0x53bafd){return _0x2274d1(_0x53bafd);},'HadTG':function(_0x13346a){return _0x13346a();},'fIaCc':function(_0x25a7bb,_0x4a2628){return _0x25a7bb+_0x4a2628;},'udnuT':_0xc654b5(0x68d)+_0xc654b5(0x55c)+_0xc654b5(0x64f)+_0xc654b5(0xb3c)+_0xc654b5(0x876)+_0xc654b5(0x9e4)+'ting\x20'+_0xc654b5(0x6a1)+_0xc654b5(0x248)+'ross-'+'origi'+_0xc654b5(0x2b8)+_0xc654b5(0xb2d),'mcVaG':_0xc654b5(0x195)+_0xc654b5(0x1c2)+_0xc654b5(0x72f)+'a.ski'+_0xc654b5(0x323)+'z.use'+'r.js\x20'+_0xc654b5(0xcc3)+_0xc654b5(0x9e6)+'d\x20dia'+_0xc654b5(0xbbb)+_0xc654b5(0x500)+_0xc654b5(0xabb),'AsVTU':function(_0x504ce2,_0x117f82){return _0x504ce2!==_0x117f82;},'zrylU':_0xc654b5(0x756)+'74','foQnu':'rgba('+'255,1'+_0xc654b5(0x966)+_0xc654b5(0x593)+')','JSsuD':function(_0x34ac98,_0x5b5612){return _0x34ac98+_0x5b5612;},'eYmMb':function(_0x5a5031,_0x308f7b){return _0x5a5031+_0x308f7b;},'xuaBS':'\x20obje'+_0xc654b5(0x8b2)+'\x20','GNCdx':_0xc654b5(0x2aa)+'a8','yBJEe':function(_0x4438f4,_0x1b53c2){return _0x4438f4>_0x1b53c2;},'mPzWO':_0xc654b5(0x37d),'OjXgT':'#ffd4'+'8a','UvRNg':function(_0x1e537f,_0x947b05){return _0x1e537f+_0x947b05;},'lltjS':_0xc654b5(0x1c3)+_0xc654b5(0x7b8)+_0xc654b5(0xb1f)+'·\x20','KguEX':_0xc654b5(0xbb3),'xBPVZ':_0xc654b5(0x4d4)+'-weig'+'ht:70'+'0','YgTRt':function(_0x1156d5,_0x1b12fb){return _0x1156d5+_0x1b12fb;},'KaSzh':function(_0x1d3ef8,_0x449a58){return _0x1d3ef8+_0x449a58;},'HRGkK':function(_0x53f020,_0x54b519){return _0x53f020+_0x54b519;},'RZwcX':function(_0x4db82d,_0x28ae85){return _0x4db82d+_0x28ae85;},'FDWrG':function(_0x103f87,_0x444acc){return _0x103f87+_0x444acc;},'XpQGc':function(_0xde00a9,_0xb2fc4e){return _0xde00a9+_0xb2fc4e;},'SJdyS':'<div\x20'+_0xc654b5(0x7fb)+_0xc654b5(0x62b)+_0xc654b5(0x9d8)+_0xc654b5(0xa13)+_0xc654b5(0x3fd)+_0xc654b5(0x603)+'-bott'+'om:1p'+_0xc654b5(0x6ba)+_0xc654b5(0x26b)+'ba(25'+_0xc654b5(0x250)+',177,'+_0xc654b5(0x14a)+_0xc654b5(0x605)+_0xc654b5(0x8d2)+_0xc654b5(0x23a)+':8px;'+_0xc654b5(0x61e)+'-item'+_0xc654b5(0x564)+_0xc654b5(0x84c)+'lex:0'+'\x200\x20au'+_0xc654b5(0xa18),'xMTMF':_0xc654b5(0x95a)+_0xc654b5(0x3ae)+'color'+':','dcRYY':_0xc654b5(0xa48)+'on\x20id'+_0xc654b5(0x133)+_0xc654b5(0x7f7)+_0xc654b5(0xb9d)+_0xc654b5(0xb67)+'ispla'+'y:non'+_0xc654b5(0x77f)+'gin-l'+'eft:a'+_0xc654b5(0x7f1)+'ackgr'+_0xc654b5(0x3e4),'AYETk':_0xc654b5(0x937)+_0xc654b5(0xb47)+'color'+_0xc654b5(0xcc7)+_0xc654b5(0x1e5)+_0xc654b5(0x603)+_0xc654b5(0x8e5)+_0xc654b5(0x6f3)+_0xc654b5(0xbd4)+_0xc654b5(0x9d8)+'4px\x201'+'0px;f'+_0xc654b5(0xa2e)+_0xc654b5(0x6cf)+_0xc654b5(0x4a4)+_0xc654b5(0x7a1)+_0xc654b5(0x432)+'nter;'+'\x22>Cop'+_0xc654b5(0x739)+_0xc654b5(0x389)+_0xc654b5(0x19a),'etIdh':_0xc654b5(0x169)+'>','lUoib':'<div\x20'+'id=\x22s'+'w2-bo'+_0xc654b5(0x9c8)+_0xc654b5(0xb63)+_0xc654b5(0x364)+_0xc654b5(0x676)+_0xc654b5(0x7e3)+'>','zNKPT':_0xc654b5(0x8c9)+'style'+'=\x22pad'+_0xc654b5(0x9d8)+_0xc654b5(0x204)+'2px;b'+'order'+_0xc654b5(0x975)+_0xc654b5(0x230)+'x\x20sol'+_0xc654b5(0x26b)+_0xc654b5(0x3b3)+'5,143'+',177,'+_0xc654b5(0x5bf)+_0xc654b5(0x305)+_0xc654b5(0x692)+'ex;ga'+'p:8px'+_0xc654b5(0xb3d)+_0xc654b5(0x8f8)+'ms:ce'+_0xc654b5(0x1f3)+_0xc654b5(0x608)+_0xc654b5(0xa3a)+_0xc654b5(0x9a9)+'lex-w'+'rap:w'+_0xc654b5(0x521)+'>','BnbKI':'<pre\x20'+'id=\x22s'+'w2-ou'+_0xc654b5(0x1c8)+_0xc654b5(0x3ae)+_0xc654b5(0xa0e)+_0xc654b5(0x3ad)+_0xc654b5(0x619)+_0xc654b5(0x8b3)+_0xc654b5(0x5c6)+_0xc654b5(0xcdd)+_0xc654b5(0x144)+_0xc654b5(0xbb0)+_0xc654b5(0xb45)+':1\x201\x20'+_0xc654b5(0x443)+'white'+_0xc654b5(0x37e)+'e:pre'+_0xc654b5(0x661)+';word'+_0xc654b5(0x14b)+'k:bre'+_0xc654b5(0x382)+_0xc654b5(0x2b7)+'nt:in'+'herit'+';','ZBXVQ':_0xc654b5(0x995)+_0xc654b5(0x282),'KlAKv':'#sw2-'+_0xc654b5(0xa4d),'HlyqI':_0xc654b5(0x995)+_0xc654b5(0xb37)+'e','PpYZk':_0xc654b5(0x995)+_0xc654b5(0x5a3),'DQIgz':_0xc654b5(0x995)+_0xc654b5(0x7b7)+'r','GoYPD':_0xc654b5(0x995)+_0xc654b5(0xca1),'pZkLc':function(_0x1f62c5,_0x2dd236){return _0x1f62c5+_0x2dd236;},'ARBFq':function(_0x10476f,_0x377d4e){return _0x10476f+_0x377d4e;},'uoxeK':function(_0x451184,_0x4fdd84){return _0x451184/_0x4fdd84;},'REjqx':function(_0x819ca2,_0x327559){return _0x819ca2+_0x327559;},'lFNdY':'yes','Platx':'\x20\x20\x20co'+'ntext'+'\x20','Vhjkv':function(_0x39bfbf,_0x39028a){return _0x39bfbf!=_0x39028a;},'soGra':function(_0x253613,_0xc319ed){return _0x253613+_0xc319ed;},'eqWOk':'hooks'+_0xc654b5(0xb6b),'Wqqkf':_0xc654b5(0x679)+_0xc654b5(0x8c1),'GWXMz':_0xc654b5(0x5da)+_0xc654b5(0x9a1)+'ran\x20y'+_0xc654b5(0x462)+_0xc654b5(0x34c)+'\x20sign'+'ature'+_0xc654b5(0xaac)+_0xc654b5(0x6d0)+'atch.','jSAUu':_0xc654b5(0x973)+'r','eCkdA':function(_0x9385a1,_0x3ebb01){return _0x9385a1/_0x3ebb01;},'CBhgR':function(_0x51dbe1,_0x1a76d1){return _0x51dbe1*_0x1a76d1;},'tEdfQ':function(_0x543a51,_0x35334c){return _0x543a51+_0x35334c;},'VCNHe':'warni'+'ngs','MlbCJ':'\x20\x20!\x20','ZCHho':_0xc654b5(0x86d),'VkwRk':_0xc654b5(0x184)+_0xc654b5(0xaff)+_0xc654b5(0x924)+_0xc654b5(0x459)+_0xc654b5(0xb65)+_0xc654b5(0x91c),'uclHX':_0xc654b5(0x1cc)+':','eXbar':_0xc654b5(0x6b9),'FiabX':function(_0x2b76e8,_0x517f46){return _0x2b76e8!==_0x517f46;},'QQqkZ':function(_0x30c754,_0x1bd7dc){return _0x30c754!==_0x1bd7dc;},'LkZpH':_0xc654b5(0xc60),'KbLHh':function(_0x127366,_0x8c420b,_0x3de2be){return _0x127366(_0x8c420b,_0x3de2be);},'DjeUj':_0xc654b5(0x2f5)+'WebMo'+_0xc654b5(0xa19),'szrsV':_0xc654b5(0xa54),'SShvy':function(_0x4ae57b,_0x4eff74){return _0x4ae57b+_0x4eff74;},'KRcCG':function(_0x1c488c,_0x42438a){return _0x1c488c+_0x42438a;},'lbawB':function(_0x256b09,_0x27d790){return _0x256b09+_0x27d790;},'pfNzo':'\x20hook'+'(s)\x20t'+'o\x20a\x20t'+_0xc654b5(0x291)+'index'+'\x20but\x20'+_0xc654b5(0xba7)+_0xc654b5(0x273)+_0xc654b5(0x726)+_0xc654b5(0x812)+_0xc654b5(0xac0)+_0xc654b5(0xc48),'MilMS':function(_0x283578,_0x389822){return _0x283578===_0x389822;},'ZmjFc':_0xc654b5(0xae0),'nsJUb':'nHCFL','zBlfD':function(_0x9942e7,_0x3be627){return _0x9942e7-_0x3be627;},'OouUS':_0xc654b5(0x24b)+_0xc654b5(0x664),'OBFxH':_0xc654b5(0xb49),'tedsz':'lcHWL','JmTun':_0xc654b5(0x4e0)+_0xc654b5(0xb5f)+'eateP'+_0xc654b5(0xa8d)+'\x20unav'+_0xc654b5(0xc54)+'le','LDFUn':_0xc654b5(0x4ef),'YWKTo':function(_0x224a56){return _0x224a56();},'YBKzT':function(_0x4fd686){return _0x4fd686();},'lIvvm':function(_0x392d0a,_0x3a124d){return _0x392d0a|_0x3a124d;},'lqwMP':_0xc654b5(0x624),'CRnYb':'<stro'+'ng>','DmoWq':function(_0xb62180,_0x387789,_0x52c491){return _0xb62180(_0x387789,_0x52c491);},'yBCRy':_0xc654b5(0x331)+'ody','Ityrq':function(_0x17fad0,_0x181da8){return _0x17fad0+_0x181da8;},'KvQJu':_0xc654b5(0x272),'TPkam':function(_0x361b0d,_0x31b987){return _0x361b0d!==_0x31b987;},'SmSLL':'vWUvm','BZDZi':_0xc654b5(0x4e0)+'me._g'+'ame','Tubef':_0xc654b5(0xc7d)+'ined','pCoPB':'HYiTU','ZyAgI':_0xc654b5(0xb7b)+_0xc654b5(0x823)+_0xc654b5(0x2fb)+'ng','sLJVr':function(_0x3105f4,_0x25b2d8){return _0x3105f4===_0x25b2d8;},'vMqws':_0xc654b5(0xc94)+'t','ASVwm':_0xc654b5(0x3b8)+'w.','MBcic':_0xc654b5(0x72f)+_0xc654b5(0x6d9)+_0xc654b5(0x393)+'s','IWMoP':_0xc654b5(0xb7e)+_0xc654b5(0x1ba)+_0xc654b5(0x573)+'ll:in'+'itial'+'}','XOoRs':_0xc654b5(0x2d2),'KuIlb':_0xc654b5(0x41a),'mFmpr':'RGdMN','Ncjrk':function(_0x1abb37,_0x38423a){return _0x1abb37+_0x38423a;},'EMaDW':_0xc654b5(0x72c),'GnIXc':_0xc654b5(0x983),'BUXlH':'i16','JZeuC':_0xc654b5(0xb44),'cLsvs':function(_0x54b143,_0x40a78b){return _0x54b143|_0x40a78b;},'kuWoL':function(_0x3218d0,_0x186d1d){return _0x3218d0(_0x186d1d);},'zLHat':'right','uecBh':function(_0x5a9d30,_0x4d83d5){return _0x5a9d30(_0x4d83d5);},'HnIwz':function(_0x2dc0ec,_0x3d2407){return _0x2dc0ec-_0x3d2407;},'ejtVF':_0xc654b5(0x13a)+'on','vBXcd':'hFkgz','ecqTj':'UuFBo','ekmui':_0xc654b5(0x97a)+_0xc654b5(0x717),'pOTqE':function(_0x5192fb,_0x25c22a){return _0x5192fb&_0x25c22a;},'fmTvt':function(_0x203cbc,_0x46df2e){return _0x203cbc(_0x46df2e);},'FTjJb':function(_0x1a6674,_0x35a5b3){return _0x1a6674^_0x35a5b3;},'Brveu':function(_0x3885a7,_0x171c17){return _0x3885a7===_0x171c17;},'oDYop':function(_0x56cdcf,_0x360c5a){return _0x56cdcf+_0x360c5a;},'gPshT':function(_0x5ca019,_0x3f3ab9){return _0x5ca019+_0x3f3ab9;},'UbviY':function(_0x3108f2,_0x4fc381){return _0x3108f2===_0x4fc381;},'RgZBT':function(_0x4dc5f,_0x466f4b){return _0x4dc5f===_0x466f4b;},'irbYk':function(_0x14c77b,_0x2f9ba4){return _0x14c77b&_0x2f9ba4;},'fmIgP':function(_0x1fce8a,_0x19ee47){return _0x1fce8a===_0x19ee47;},'OLPXm':function(_0x562190,_0x456158){return _0x562190===_0x456158;},'FFtZT':function(_0x3eaab1,_0x5b1237){return _0x3eaab1+_0x5b1237;},'fVRGL':function(_0x1c7115,_0x29ad58,_0x1743b1,_0xfc704c){return _0x1c7115(_0x29ad58,_0x1743b1,_0xfc704c);},'sCPjA':function(_0x42f168,_0x5acd5a){return _0x42f168+_0x5acd5a;},'HnYdn':_0xc654b5(0x6c8),'WOfEC':function(_0x51dac5,_0x5c8a75){return _0x51dac5===_0x5c8a75;},'qwgqt':_0xc654b5(0x473),'MsgpC':function(_0x996337,_0xeba473){return _0x996337!==_0xeba473;},'RqstT':function(_0x768ae9,_0x54710f){return _0x768ae9(_0x54710f);},'utKbl':function(_0x1f983b,_0x2fe588){return _0x1f983b<_0x2fe588;},'TwJNl':function(_0x18a2dc,_0x5d75b3){return _0x18a2dc!==_0x5d75b3;},'yKJMc':function(_0x519c5d,_0x17ce04){return _0x519c5d-_0x17ce04;},'sJiqW':'no\x20gr'+'oup\x20o'+'f\x20','tGqWV':'\x20Obsc'+'uredF'+_0xc654b5(0x724)+'\x20agre'+'ed','fIfUV':function(_0x3bbbac,_0x11c98e){return _0x3bbbac*_0x11c98e;},'pniUU':function(_0x1ba0f4,_0x1617de){return _0x1ba0f4<_0x1617de;},'CDGxI':function(_0x2e5d55,_0x2b2bf9){return _0x2e5d55!==_0x2b2bf9;},'eqkoW':_0xc654b5(0x274),'moWhM':function(_0x5433d3,_0x4d65fd){return _0x5433d3<_0x4d65fd;},'SivvK':_0xc654b5(0xb2f)+'\x20floo'+'r\x20','luuAa':function(_0xaace7a,_0x3c3b82){return _0xaace7a+_0x3c3b82;},'Lhqvd':_0xc654b5(0x290),'ZSDBa':function(_0x49ce54,_0x322e6c){return _0x49ce54===_0x322e6c;},'CNAyN':_0xc654b5(0x6b2)+_0xc654b5(0xad7)+_0xc654b5(0x4d7),'oYIDY':function(_0x34e2c1,_0x29f414){return _0x34e2c1!==_0x29f414;},'hYpth':_0xc654b5(0x6f7),'YxkmV':function(_0x3e3441,_0x217165){return _0x3e3441<_0x217165;},'tUNyL':_0xc654b5(0x932)+'e','WtrBG':function(_0x45ff46,_0x2e2052){return _0x45ff46>_0x2e2052;},'pSlzf':function(_0xc9713f,_0x59505f){return _0xc9713f===_0x59505f;},'WoaaC':function(_0x548c64,_0x5dff1d){return _0x548c64===_0x5dff1d;},'rSHxP':function(_0x41b6b1,_0x57f4f5){return _0x41b6b1===_0x57f4f5;},'BGMOj':_0xc654b5(0x1ee)+'g','muqJQ':function(_0x1e436e,_0x483fc3){return _0x1e436e!==_0x483fc3;},'fwDQp':function(_0x1c7411,_0x396eed){return _0x1c7411<_0x396eed;},'cdjDr':_0xc654b5(0x358),'hlVWK':_0xc654b5(0x3d9),'XeacN':function(_0x30f7ec,_0x1ced45){return _0x30f7ec+_0x1ced45;},'xxamW':'captu'+_0xc654b5(0x44b),'qAgOw':_0xc654b5(0x5af)+'ct(s)'+'\x20but\x20'+_0xc654b5(0x3a2)+_0xc654b5(0x689)+_0xc654b5(0x6cc),'UhfDp':function(_0x432531,_0x192ef7){return _0x432531(_0x192ef7);},'DkdxS':function(_0x338b23,_0x27dda3){return _0x338b23>_0x27dda3;},'fdWdp':function(_0x463b17,_0x46b93b){return _0x463b17===_0x46b93b;},'srPJp':function(_0x136490,_0xe045e8){return _0x136490(_0xe045e8);},'eTlfP':function(_0x4a5ada,_0x212b1c){return _0x4a5ada===_0x212b1c;},'lrRTJ':'LGxRJ','qoidh':function(_0x181b6d,_0x3595df){return _0x181b6d>=_0x3595df;},'dfFfk':_0xc654b5(0xa78),'UuctG':_0xc654b5(0x415)+'er\x20bo'+'unded','oMBBW':function(_0x222b1f,_0xc1b6e8){return _0x222b1f<_0xc1b6e8;},'BIvJt':_0xc654b5(0x142)+_0xc654b5(0x755)+_0xc654b5(0xae3)+'xport'+_0xc654b5(0x8d6)+'ory','Ddcch':function(_0x3dc36d,_0xd19b4f){return _0x3dc36d<_0xd19b4f;},'DENOr':_0xc654b5(0x61c),'CuJvY':function(_0x2903ef,_0x535af6){return _0x2903ef===_0x535af6;},'sygAW':_0xc654b5(0x85a),'wMdPo':'1|0|2'+_0xc654b5(0x1d0)+_0xc654b5(0x5e3),'ePeCb':function(_0x4bb6a0,_0x55bf4e){return _0x4bb6a0<_0x55bf4e;},'IXyDX':'DiOtJ','kXazJ':function(_0x4838d5,_0x547e93,_0x3dd8e5){return _0x4838d5(_0x547e93,_0x3dd8e5);},'BQATa':function(_0x2a0d90,_0x27092f){return _0x2a0d90<_0x27092f;},'lMxop':function(_0x4ee513,_0x141e17){return _0x4ee513+_0x141e17;},'tJRjF':function(_0x43c797,_0x4d6892){return _0x43c797!==_0x4d6892;},'hfOWM':function(_0x3b0a06,_0x51dd0d){return _0x3b0a06<_0x51dd0d;},'OOJPn':_0xc654b5(0x72f)+'a-sw','sDQHz':function(_0x32700d,_0x2fe6b1){return _0x32700d-_0x2fe6b1;},'cnYbH':function(_0x1d0c55,_0x294695){return _0x1d0c55+_0x294695;},'nkgzl':'Healt'+_0xc654b5(0x479)+'pt','GbAGP':function(_0x592704,_0x6a707e){return _0x592704-_0x6a707e;},'lKNhP':'No\x20Ph'+_0xc654b5(0xccb)+_0xc654b5(0xc09)+_0xc654b5(0x36d)+',\x20no\x20'+_0xc654b5(0x6db)+'otrol'+'ler\x20a'+_0xc654b5(0x1e7)+'\x20game'+_0xc654b5(0x17d)+'ger.\x20'+_0xc654b5(0x758)+_0xc654b5(0xb6e)+_0xc654b5(0x592),'RicPZ':'the\x20l'+'obby\x20'+'looks'+_0xc654b5(0x4bd)+_0xc654b5(0x81f)+'n\x20the'+_0xc654b5(0x25e)+_0xc654b5(0xbb4)+'IDE\x20a'+'\x20live'+'\x20roun'+_0xc654b5(0x939)+_0xc654b5(0x428)+_0xc654b5(0x23b)+'.','vHyTn':_0xc654b5(0x766),'KNPbw':function(_0x1045df,_0x34df3d){return _0x1045df<_0x34df3d;},'YzRGn':function(_0x10f444,_0x1d1afe){return _0x10f444+_0x1d1afe;},'egxXV':function(_0x418b4,_0x1eb6e6){return _0x418b4+_0x1eb6e6;},'VPeYZ':_0xc654b5(0x1cb),'uXOjE':_0xc654b5(0x321)+_0xc654b5(0xa25),'ttmsz':'ESP\x20m'+'ap','voIji':_0xc654b5(0xbe1)+'paren'+'t','UkWYh':'kXnKN','SBAaK':function(_0x4b2a12,_0x1ba977){return _0x4b2a12<_0x1ba977;},'DDVPE':_0xc654b5(0x3d5),'EcJRA':function(_0x405d30,_0xf211e3){return _0x405d30+_0xf211e3;},'TSZTq':function(_0x278f90,_0x1c5080){return _0x278f90+_0x1c5080;},'wYzQW':_0xc654b5(0x243),'QDrdh':function(_0x52fc38,_0xa3b28b){return _0x52fc38+_0xa3b28b;},'jnYTt':function(_0x85dd58,_0x143099){return _0x85dd58===_0x143099;},'eKgLQ':function(_0x345190,_0x40c72a){return _0x345190===_0x40c72a;},'gdgou':_0xc654b5(0x90c),'Sznes':_0xc654b5(0x784),'ojztp':'IyzzO','EHkqF':function(_0x5d1531,_0x4b3919){return _0x5d1531<_0x4b3919;},'Eqzuh':_0xc654b5(0x4ed),'LIKrv':function(_0x23fb9a,_0x49226b,_0x35fc72,_0x5a1978){return _0x23fb9a(_0x49226b,_0x35fc72,_0x5a1978);},'AVPMH':function(_0x204d8a,_0x991a6d){return _0x204d8a+_0x991a6d;},'wrqdc':_0xc654b5(0x3c0),'kRrvm':_0xc654b5(0x446),'cieQX':function(_0x253c35,_0x52e86f){return _0x253c35===_0x52e86f;},'AFjPA':function(_0x36033a,_0x271b68){return _0x36033a<_0x271b68;},'cJoWu':function(_0x20bf7e,_0xf984a0){return _0x20bf7e!==_0xf984a0;},'LfxLG':function(_0x173eb4,_0x3bf7b9){return _0x173eb4===_0x3bf7b9;},'mVGtd':'fxZOu','qnBLv':function(_0x2c8028,_0x32068d){return _0x2c8028<_0x32068d;},'QGQYw':function(_0x401222,_0xb5ab2){return _0x401222<=_0xb5ab2;},'tdtYY':function(_0xeb4359,_0x515c41){return _0xeb4359-_0x515c41;},'kBlpQ':_0xc654b5(0x2dc),'uEDJv':function(_0x2c6f3e,_0x5aedb1){return _0x2c6f3e===_0x5aedb1;},'UQlXQ':_0xc654b5(0x4d3),'UQPCB':function(_0x662f59,_0x43bd31){return _0x662f59===_0x43bd31;},'MIRUf':_0xc654b5(0x6fc)+_0xc654b5(0x997)+_0xc654b5(0xa09),'HKKUX':_0xc654b5(0x6fc)+_0xc654b5(0xc58),'owYfa':function(_0x1ba026){return _0x1ba026();},'fKbLD':'Mouse'+'Look@'+'ptr','DfkJJ':_0xc654b5(0xa88)+'Look+','uOyMC':_0xc654b5(0xa7a)+'e','cGZVD':function(_0xc612f1,_0x5a30a6){return _0xc612f1!==_0x5a30a6;},'Lgity':_0xc654b5(0x254),'oxlze':function(_0x223f7c,_0x758e22){return _0x223f7c+_0x758e22;},'cyDNe':function(_0x47cd6d,_0x253a21){return _0x47cd6d+_0x253a21;},'AKHPx':'canva'+'s','lPudi':_0xc654b5(0x72f)+_0xc654b5(0x2d6)+'es','nYCVC':_0xc654b5(0x90e),'TbYKE':_0xc654b5(0x699),'DdHcQ':_0xc654b5(0x293)+'an','KaIkJ':'snaps'+'hot','qipyd':function(_0x5c15da,_0x572c6a,_0x4f16b4){return _0x5c15da(_0x572c6a,_0x4f16b4);},'WZqST':_0xc654b5(0x30f)+'t','saxSN':function(_0x13929d,_0x3f6412){return _0x13929d+_0x3f6412;},'POjcU':_0xc654b5(0x19c),'fawri':_0xc654b5(0x360),'ueZPZ':function(_0x2b0a3c,_0x38779b){return _0x2b0a3c+_0x38779b;},'kgKEB':'AUABF','goCfc':function(_0x5c77d1,_0x51196f,_0x7dde82){return _0x5c77d1(_0x51196f,_0x7dde82);},'LjZlx':'QqQVx','JWMup':function(_0x2a03f6,_0x1bcfb0){return _0x2a03f6!==_0x1bcfb0;},'sYkHk':_0xc654b5(0xa71),'wWThC':'sakur'+_0xc654b5(0x6d9)+_0xc654b5(0x7a2)+'ss','IVvxu':_0xc654b5(0x72f)+'a-sw-'+'hud','wCvdJ':function(_0x2c14a4,_0x1ecce0){return _0x2c14a4+_0x1ecce0;},'bNTdO':'posit'+_0xc654b5(0x626)+_0xc654b5(0x7da)+'left:'+'8px;b'+_0xc654b5(0xc32)+':8px;'+_0xc654b5(0x78c)+'ex:21'+_0xc654b5(0x65d)+_0xc654b5(0x499)+'ispla'+_0xc654b5(0x8d2)+'x;fle'+'x-dir'+_0xc654b5(0xb81)+'n:col'+_0xc654b5(0x5aa)+'ap:4p'+'x;','ZmGPZ':_0xc654b5(0x3ce)+_0xc654b5(0x1b5)+_0xc654b5(0xccc)+'(21,1'+_0xc654b5(0x585)+'.92);'+_0xc654b5(0xac4)+'r:1px'+_0xc654b5(0x4da)+_0xc654b5(0x1f7)+_0xc654b5(0x931)+_0xc654b5(0x566)+_0xc654b5(0xb09)+'45);b'+_0xc654b5(0x603)+'-radi'+_0xc654b5(0x716)+_0xc654b5(0xcab),'qJuqA':function(_0x360f05,_0xa2c41a){return _0x360f05+_0xa2c41a;},'hmZCW':function(_0x268132,_0x3075d2){return _0x268132+_0x3075d2;},'KpNOU':function(_0x46d808,_0x5815ec){return _0x46d808+_0x5815ec;},'vggne':function(_0x5643ca,_0x1f6ce2){return _0x5643ca+_0x1f6ce2;},'QIbQI':_0xc654b5(0x8c9)+_0xc654b5(0x944)+'a=\x22ba'+_0xc654b5(0x525)+_0xc654b5(0x3ae)+_0xc654b5(0x305)+_0xc654b5(0x692)+'ex;ga'+_0xc654b5(0xb16)+';alig'+_0xc654b5(0x8f8)+'ms:ce'+'nter;'+_0xc654b5(0x1fa)+'wrap:'+_0xc654b5(0x55a)+_0xc654b5(0x72e)+'idth:'+_0xc654b5(0x301)+';\x22>','WdIGQ':_0xc654b5(0xa48)+_0xc654b5(0xb5b)+_0xc654b5(0x155)+'\x22sp\x22\x20'+'style'+_0xc654b5(0xa00)+_0xc654b5(0xbb1)+_0xc654b5(0x220)+_0xc654b5(0xc89)+'rent;'+_0xc654b5(0xac4)+_0xc654b5(0x94a)+_0xc654b5(0x4da)+'d\x20rgb'+_0xc654b5(0x931)+',143,'+'177,.'+'45);','CLvXb':'color'+':#f7e'+_0xc654b5(0x1ff)+_0xc654b5(0x603)+'-radi'+_0xc654b5(0x4c4)+_0xc654b5(0xbd4)+'ding:'+'2px\x208'+_0xc654b5(0xa35)+'rsor:'+'point'+'er;fo'+_0xc654b5(0x57b)+_0xc654b5(0xcc6)+';\x22>Sp'+_0xc654b5(0x1b8)+_0xc654b5(0x5cb)+_0xc654b5(0x9bd)+'>','CflEW':';\x22>','gfzqL':'<span'+_0xc654b5(0xb70)+_0xc654b5(0x221)+'v\x22\x20st'+_0xc654b5(0x3ae)+'color'+':#bda'+_0xc654b5(0x29a)+_0xc654b5(0x1b7)+'dth:3'+'0px;\x22'+_0xc654b5(0xc9c)+'</spa'+'n>','RWCQe':_0xc654b5(0xa48)+_0xc654b5(0xb5b)+'ta-a='+'\x22esp\x22'+_0xc654b5(0xb32)+'e=\x22ba'+'ckgro'+'und:t'+'ransp'+_0xc654b5(0x97f)+_0xc654b5(0x937)+'er:1p'+_0xc654b5(0x6ba)+_0xc654b5(0x26b)+'ba(25'+_0xc654b5(0x250)+',177,'+'.45);','zNWeS':'<butt'+_0xc654b5(0xb5b)+_0xc654b5(0x155)+_0xc654b5(0x5db)+_0xc654b5(0xb9d)+_0xc654b5(0x639)+'ackgr'+_0xc654b5(0x3e4)+_0xc654b5(0xbe1)+_0xc654b5(0x256)+_0xc654b5(0xcce)+'der:1'+_0xc654b5(0xb9c)+_0xc654b5(0x884)+'gba(2'+_0xc654b5(0x7a0)+_0xc654b5(0xbbd)+',.45)'+';','CGppy':_0xc654b5(0x1cc)+':#f7e'+'ef5;b'+_0xc654b5(0x603)+_0xc654b5(0x8e5)+_0xc654b5(0x4c4)+_0xc654b5(0xbd4)+'ding:'+_0xc654b5(0x2f6)+_0xc654b5(0xa35)+_0xc654b5(0x188)+_0xc654b5(0x964)+_0xc654b5(0xaa1)+_0xc654b5(0x57b)+_0xc654b5(0xcc6)+_0xc654b5(0x4f9)+_0xc654b5(0x1cd)+'utton'+'>','vutmL':'<div\x20'+'data-'+_0xc654b5(0x3bd)+_0xc654b5(0xb9d)+_0xc654b5(0xb92)+_0xc654b5(0x920)+'#8d7a'+_0xc654b5(0x4a9)+_0xc654b5(0x7ae)+'th:29'+_0xc654b5(0x295)+'></di'+'v>','NefVO':function(_0x175352,_0xc4301d){return _0x175352(_0xc4301d);},'DAOGP':_0xc654b5(0x5a3),'CHkBo':_0xc654b5(0x184)+'kura]'+'\x20in-f'+_0xc654b5(0xca7)+_0xc654b5(0xa22)+'isabl'+'ed','gcRGa':function(_0x1c36ae,_0x2d3861){return _0x1c36ae===_0x2d3861;},'DbLwi':_0xc654b5(0xb57),'czbjj':function(_0x40c1e5,_0x30b62d){return _0x40c1e5-_0x30b62d;},'ZpnwP':function(_0x5cc825,_0x249365){return _0x5cc825===_0x249365;},'bqNmO':_0xc654b5(0x762),'Uwgmw':_0xc654b5(0x6c5),'QOGuB':_0xc654b5(0xc47)+'|3|5|'+'0|4','QUZDc':'ESP\x20o'+'ff','ajhRI':'hsflp','FVOHz':_0xc654b5(0x4f8)+_0xc654b5(0xcbb)+_0xc654b5(0x991),'YBCCR':function(_0x1040c1,_0x6d1681){return _0x1040c1===_0x6d1681;},'rlzUL':_0xc654b5(0x281),'bfcga':function(_0x29d4f3,_0x28b8d1){return _0x29d4f3/_0x28b8d1;},'DRUBr':function(_0x1307cc,_0x3060f0){return _0x1307cc+_0x3060f0;},'CmOVM':function(_0x24eb5f,_0x29927e){return _0x24eb5f+_0x29927e;},'elLHa':function(_0xdb4a75,_0x2624d2){return _0xdb4a75+_0x2624d2;},'USXHF':_0xc654b5(0x4e3)+'ks\x20','vwQTH':'\x20\x20obj'+'s\x20','BlVxZ':_0xc654b5(0x584)+'tes\x20','CXoEv':function(_0x26f374,_0x2d9bb6){return _0x26f374>_0x2d9bb6;},'RuTYk':function(_0x2c6a2d,_0x4d9e52){return _0x2c6a2d+_0x4d9e52;},'hjanT':_0xc654b5(0xc74),'RpHZu':'\x20\x20cam'+'\x20-','OlArb':'no\x20en'+_0xc654b5(0x697)+_0xc654b5(0x60f)+_0xc654b5(0x798)+'y?)\x20\x20'+'cam\x20','acaYC':function(_0x38b590,_0xb7a59b,_0x33edca){return _0x38b590(_0xb7a59b,_0x33edca);},'XllMe':function(_0x321fc8,_0x426664){return _0x321fc8!==_0x426664;},'jBbHu':_0xc654b5(0xc50),'TVrnd':function(_0x267f4b,_0x340b98){return _0x267f4b+_0x340b98;},'hYDQg':'Inser'+'t','OxaLu':_0xc654b5(0xaa2)+'etRig'+'ht','wbtUr':function(_0x34a5cf,_0xbdd887){return _0x34a5cf+_0xbdd887;},'mMsal':'Brack'+_0xc654b5(0x168)+'t','zsXKW':function(_0x5a1e66,_0x20a186){return _0x5a1e66<_0x20a186;},'nPCRH':function(_0x526bb6,_0x17a7e6){return _0x526bb6<_0x17a7e6;},'ymify':function(_0x34a6aa,_0x18b952,_0x3cc230){return _0x34a6aa(_0x18b952,_0x3cc230);},'UBtUJ':function(_0x446a5c,_0xd93d1b){return _0x446a5c>>>_0xd93d1b;},'MpnMO':function(_0x140594){return _0x140594();},'nzGbY':function(_0x2ae94a,_0x8f7595,_0x406c79){return _0x2ae94a(_0x8f7595,_0x406c79);},'NWbKs':function(_0x580db9,_0x5e0a6a){return _0x580db9<_0x5e0a6a;},'GYqGJ':'fSeuJ','lLTyb':function(_0x428c71,_0x3aaf1a){return _0x428c71<_0x3aaf1a;},'RCTSl':_0xc654b5(0xb4f),'bNwQc':function(_0x54e010,_0x334c09){return _0x54e010===_0x334c09;},'ZBtxl':'VixWh','kwunH':function(_0x268403,_0x58fdbe){return _0x268403!==_0x58fdbe;},'oSrbz':function(_0xa1ac73,_0x1e2c17){return _0xa1ac73===_0x1e2c17;},'WHQgJ':function(_0x48045e,_0x29eacb){return _0x48045e!==_0x29eacb;},'rezte':_0xc654b5(0xb75)+_0xc654b5(0x4cd)+_0xc654b5(0x3fb),'wFnuq':_0xc654b5(0xb58)+'r','XyXQc':_0xc654b5(0x9a7),'NrLiT':_0xc654b5(0x8bf),'pUomr':_0xc654b5(0xba5)+'float'+'s\x20unr'+'eadab'+'le','hkCHr':'17|14'+_0xc654b5(0x288)+_0xc654b5(0xbc9)+'|8|4|'+'15|0|'+'12|1|'+_0xc654b5(0x725)+'2|5|1'+_0xc654b5(0x9e7),'kFVHx':function(_0x1ad66e,_0x4f6db2){return _0x1ad66e+_0x4f6db2;},'BHbyT':function(_0x9a86,_0x591ede){return _0x9a86/_0x591ede;},'bTXVX':function(_0x233740,_0x5ddfb9){return _0x233740/_0x5ddfb9;},'sbhUY':function(_0x3e1b02,_0x2c6405){return _0x3e1b02/_0x2c6405;},'DbpEN':function(_0x2b674f,_0x2a9327){return _0x2b674f*_0x2a9327;},'RQKzC':function(_0x3cfb0c,_0x10e692){return _0x3cfb0c-_0x10e692;},'vKRiO':function(_0x5683cc,_0x374d71){return _0x5683cc*_0x374d71;},'xEvfo':function(_0x32c8ed,_0x392fae){return _0x32c8ed*_0x392fae;},'XUUfB':function(_0xe90d4c,_0x5b3b83){return _0xe90d4c-_0x5b3b83;},'CWyzW':function(_0x2a9c29,_0x4bc427){return _0x2a9c29*_0x4bc427;},'rwXgI':function(_0x13103b,_0x542086){return _0x13103b*_0x542086;},'fKHGV':_0xc654b5(0xa02)+'rd','jXEJU':'sk-ca'+'rd-he'+'ad','kJBFU':function(_0x30630d,_0x502b29,_0x277d2c,_0xcfe78d){return _0x30630d(_0x502b29,_0x277d2c,_0xcfe78d);},'PoemV':_0xc654b5(0x7f5)+_0xc654b5(0x532),'YAQDX':'aria-'+_0xc654b5(0x5dc)+'ed','FCqlw':'true','RPlgc':'false','DFksa':'yRoaS','CXOFd':function(_0x48c27f,_0x1a7064){return _0x48c27f+_0x1a7064;},'gMfuw':_0xc654b5(0x1af),'jOoMC':function(_0x17af84,_0x477e6f,_0x496366){return _0x17af84(_0x477e6f,_0x496366);},'QRdfr':'sk-ra'+'nge','FbMpV':_0xc654b5(0xc2e)+'l','iQwUT':_0xc654b5(0x7df)+'l','LvnxZ':function(_0x509daa,_0x498d8e){return _0x509daa/_0x498d8e;},'TWEXL':'range','nCsxL':'span','ELEkd':function(_0x365305,_0x445316){return _0x365305!==_0x445316;},'NAVWw':_0xc654b5(0x318),'hKaJx':'SZgqC','WkLdb':'WVAwn','btghH':_0xc654b5(0x151),'vMrvI':function(_0x403e6e,_0x22b852){return _0x403e6e+_0x22b852;},'XPPeP':function(_0x25cf85,_0x1e132d){return _0x25cf85<_0x1e132d;},'VieuH':function(_0x1b46ee,_0x5cfc5f){return _0x1b46ee(_0x5cfc5f);},'fewHo':function(_0x365637,_0x9d17af){return _0x365637===_0x9d17af;},'mjlCd':'wmYCL','NrJFH':'jskRP','GqjUj':function(_0x7668c,_0x395f4e){return _0x7668c+_0x395f4e;},'vPpLg':function(_0x1fefb9,_0x5eff71){return _0x1fefb9+_0x5eff71;},'YXGIx':'Copy\x20'+_0xc654b5(0x147)+'d','hdVER':'ufNuD','mEVIe':function(_0x1031ef,_0x429baf){return _0x1031ef+_0x429baf;},'YOtTo':_0xc654b5(0x427)+_0xc654b5(0x322),'HUwuH':'\x20writ'+'es','uinlR':'Multi'+'plies'+_0xc654b5(0x1b0)+'ment-'+_0xc654b5(0x560)+_0xc654b5(0x427)+_0xc654b5(0x2ad)+_0xc654b5(0x846)+_0xc654b5(0x6cf)+_0xc654b5(0x31f)+'p\x20and'+'\x20jump'+_0xc654b5(0x482)+_0xc654b5(0x2ab)+_0xc654b5(0x722),'rGMRa':'\x20->\x20','gwmcG':function(_0x1c89d9,_0x3d9031){return _0x1c89d9!==_0x3d9031;},'UNoIV':function(_0x45bfe9,_0x4aef7b){return _0x45bfe9*_0x4aef7b;},'zAwOk':function(_0x4c1a7f,_0x3bbc05){return _0x4c1a7f+_0x3bbc05;},'ZrqiY':function(_0x13b287,_0x43ffb1){return _0x13b287+_0x43ffb1;},'GqbFC':function(_0x30381e,_0x44237d){return _0x30381e+_0x44237d;},'PUVxn':'\x20on\x20','WmPJH':'Enabl'+'ed','GBcYR':_0xc654b5(0x7e9)+_0xc654b5(0x92c),'JuWKO':'sk-no'+'te','dFsXZ':_0xc654b5(0x713)+'ngs','aqdRB':_0xc654b5(0x783)+'n','LIHoN':function(_0x4b60ea,_0x324694,_0x24d012,_0xb0f68){return _0x4b60ea(_0x324694,_0x24d012,_0xb0f68);},'EzsmA':_0xc654b5(0x71c)+_0xc654b5(0x690)+_0xc654b5(0xbf2)+'\x20F7\x20\x20'+_0xc654b5(0x560)+'\x20on/o'+_0xc654b5(0x4f0)+'\x20/\x20F6'+_0xc654b5(0x97c)+'tor\x20+'+_0xc654b5(0xa5e)+'\x0a[\x20\x20]'+_0xc654b5(0x3a3)+_0xc654b5(0x9e0)+_0xc654b5(0x161)+_0xc654b5(0x684)+'rt\x20\x20t'+_0xc654b5(0xbea)+_0xc654b5(0x8e7),'CzOsD':function(_0x6b34ed,_0x2064b5,_0x256096){return _0x6b34ed(_0x2064b5,_0x256096);},'bjEQy':_0xc654b5(0x850)+'esc','hiIPL':function(_0x192a3d,_0x4d6195,_0x2877e7,_0x1f94b9,_0xb85973,_0x4e4292){return _0x192a3d(_0x4d6195,_0x2877e7,_0x1f94b9,_0xb85973,_0x4e4292);},'FGgCG':'Range','Afqbs':_0xc654b5(0x927),'aZodA':function(_0x11fb02,_0x32066c){return _0x11fb02+_0x32066c;},'cKVGv':_0xc654b5(0xba5)+_0xc654b5(0x81e)+_0xc654b5(0xa2f)+_0xc654b5(0x935)+'fied','Ejixe':_0xc654b5(0x5d6)+_0xc654b5(0x6b1)+'wo\x20fl'+_0xc654b5(0x2cc)+'are\x20n'+_0xc654b5(0xc8e)+_0xc654b5(0xb8f)+_0xc654b5(0x675)+_0xc654b5(0x44d)+'ess\x20F'+'9,\x20tu'+_0xc654b5(0xcd8)+_0xc654b5(0x294)+_0xc654b5(0x78b)+'ress\x20'+_0xc654b5(0x652),'apXnm':function(_0x35b7c4,_0x115ce7){return _0x35b7c4+_0x115ce7;},'DkXKc':function(_0xa6fcaf,_0xe66291,_0x65ce0f){return _0xa6fcaf(_0xe66291,_0x65ce0f);},'vTRgF':_0xc654b5(0x2d0)+_0xc654b5(0x7a8)+_0xc654b5(0xa24),'bmpUA':'fov\x20b'+_0xc654b5(0x6ad)+'o\x2075,'+_0xc654b5(0x93f)+_0xc654b5(0x48c)+_0xc654b5(0x280),'FiobN':_0xc654b5(0x445)+'\x20','vOlfX':_0xc654b5(0x824)+_0xc654b5(0xc1d)+'ok\x20ye'+'t','DMtWP':_0xc654b5(0xb75)+'r\x20pai'+'r','kcaxw':function(_0x3359a1,_0x5d8111){return _0x3359a1+_0x5d8111;},'rDccO':function(_0x4e629c,_0x546b87){return _0x4e629c+_0x546b87;},'tEwyi':'from\x20'+_0xc654b5(0x8c2)+_0xc654b5(0xcd2)+'les','SfIjO':'\x0ayaw\x20'+'\x20\x20','yNhHs':'\x0apitc'+'h\x20','ckLfB':function(_0x4c4566,_0x3f8eb4){return _0x4c4566+_0x3f8eb4;},'feChX':function(_0x2f7b9b,_0x1896f0){return _0x2f7b9b+_0x1896f0;},'FINCY':function(_0x1d0490,_0x348b40){return _0x1d0490+_0x348b40;},'HTRwk':_0xc654b5(0x860),'MqeJb':_0xc654b5(0x66d)+_0xc654b5(0x3c3)+'rom\x20s'+'truct'+_0xc654b5(0x93f)+'ets\x20+'+'0x28\x20'+_0xc654b5(0x57e)+_0xc654b5(0x83f)+'the\x20a'+'ngle\x20'+_0xc654b5(0x4f7)+'\x20have'+'\x20not\x20'+'fired'+_0xc654b5(0x822),'yVSvt':_0xc654b5(0x64a),'wzpQQ':'Hooks','nlSTq':'appli'+_0xc654b5(0xa2d)+_0xc654b5(0xa98)+_0xc654b5(0x8ee),'eJjPA':function(_0x34958c,_0x3f0573){return _0x34958c+_0x3f0573;},'LhoSI':'off\x20t'+_0xc654b5(0x702)+'ve\x20ma'+'nager','AufdA':function(_0x27d886,_0x377e7f){return _0x27d886+_0x377e7f;},'CFapF':_0xc654b5(0x7dc),'ujqCN':function(_0xc25d8e,_0x101613){return _0xc25d8e(_0x101613);},'JEucU':function(_0x22202d,_0x37c07a){return _0x22202d(_0x37c07a);},'iMZJf':_0xc654b5(0x6a2)+'r','YuwvL':'Walk\x20'+'speed','fYRYK':_0xc654b5(0x6ef),'vXbpW':_0xc654b5(0x677)+_0xc654b5(0x719)+'t','IzuBl':'Healt'+_0xc654b5(0x479)+_0xc654b5(0x4c6)+'C0','pOljA':function(_0x14def4,_0x116199,_0x3a355b,_0x4bd362){return _0x14def4(_0x116199,_0x3a355b,_0x4bd362);},'jqGbH':function(_0x179392,_0x596030){return _0x179392<_0x596030;},'JiamN':function(_0x20766c,_0x35d158){return _0x20766c(_0x35d158);},'JLaLR':_0xc654b5(0x617)+_0xc654b5(0x212)+'s','JANhI':_0xc654b5(0xb66)+'n','MURBL':function(_0x1a21bc,_0x27ecbb,_0x322730,_0x293b6f){return _0x1a21bc(_0x27ecbb,_0x322730,_0x293b6f);},'KYRtx':function(_0x489742,_0x3d779a){return _0x489742(_0x3d779a);},'vJZiY':_0xc654b5(0xbe6),'FugDO':function(_0x233cf8,_0x25bfd3){return _0x233cf8===_0x25bfd3;},'lhHAW':'wHQmV','OWKVC':_0xc654b5(0x5ce),'gPour':function(_0x42cb04,_0x1373b8){return _0x42cb04-_0x1373b8;},'QhWre':function(_0x55526d,_0x4da0de){return _0x55526d-_0x4da0de;},'jHjda':'no-me'+'m','OnPvy':'ArOXL','kPteQ':function(_0x238914){return _0x238914();},'YSdqe':function(_0x155fd4,_0x5ada5d){return _0x155fd4===_0x5ada5d;},'svipa':'4|3|1'+'|2|7|'+'9|6|8'+_0xc654b5(0xa23),'MHCKL':_0xc654b5(0xcbe),'chaVq':'grab','ZSjbB':_0xc654b5(0x7e6)+_0xc654b5(0x56f),'hSuZK':'touch'+_0xc654b5(0x5e2),'uPmVc':function(_0x75cc5d,_0x179cb4){return _0x75cc5d(_0x179cb4);},'DUmzV':function(_0x226161,_0x162a02){return _0x226161+_0x162a02;},'kjJaO':_0xc654b5(0x526)+_0xc654b5(0x823)+_0xc654b5(0x7b5)+'ved=','SdutQ':'BnzEp','GcRoV':function(_0x2c3021){return _0x2c3021();},'PQlDS':_0xc654b5(0x2fa)+_0xc654b5(0x137)+_0xc654b5(0x647)+'z\x20(In'+_0xc654b5(0x22d),'SkRwg':'Sakur'+_0xc654b5(0x137)+_0xc654b5(0x647)+'z\x20-\x20w'+_0xc654b5(0x1eb)+_0xc654b5(0x61f)+_0xc654b5(0x802)+_0xc654b5(0x823)+'(Inse'+_0xc654b5(0xb0d),'Qcjuj':'dtvde','jeSos':function(_0x5ab32c,_0xbf6110){return _0x5ab32c!==_0xbf6110;},'Jltkc':function(_0x4e63bc,_0x4559c1){return _0x4e63bc===_0x4559c1;},'zaYsY':'woNjH','fWWcX':_0xc654b5(0x6e4)+'go','RKvXs':function(_0x239d99,_0x3f4c65,_0x36ac2e){return _0x239d99(_0x3f4c65,_0x36ac2e);},'oQvrS':'mn-ti'+'tles','thvZK':_0xc654b5(0x2f0),'SwoXC':_0xc654b5(0x5e2)+'ing…','NWdBD':'mn-cl'+'ose','TIbfg':_0xc654b5(0x98d)+_0xc654b5(0x945)+_0xc654b5(0x3ec)+'\x200\x2024'+'\x2024\x22>'+_0xc654b5(0xb22)+_0xc654b5(0x174)+_0xc654b5(0x170)+_0xc654b5(0xb0b)+'18\x206\x20'+'6\x2018\x22'+_0xc654b5(0x5be)+_0xc654b5(0x571),'bwnyz':function(_0x26dd29,_0x5b9244){return _0x26dd29<_0x5b9244;},'PVisG':_0xc654b5(0x682)+_0xc654b5(0x268),'IXRHN':_0xc654b5(0x72f)+'a-pet'+'al','cyqYR':function(_0x17f889,_0x48707e){return _0x17f889===_0x48707e;},'hHnoH':_0xc654b5(0x184)+'kura]'+'\x20menu'+_0xc654b5(0x8d1)+_0xc654b5(0xc54)+'le','gkqHx':function(_0x367b81,_0x5eb775){return _0x367b81+_0x5eb775;},'yDArC':'0|7|5'+'|3|8|'+_0xc654b5(0x9e5)+_0xc654b5(0xb0e)+'|6','AdaDp':function(_0x4f9480,_0x4e186d){return _0x4f9480===_0x4e186d;},'hEIHY':function(_0x42d9cc,_0x23247d){return _0x42d9cc<_0x23247d;},'inXQi':function(_0x1e81d9,_0x234652){return _0x1e81d9+_0x234652;},'pGPri':'mn-pa'+'nel','hjDvF':function(_0x4ac807,_0x5b0007){return _0x4ac807(_0x5b0007);},'jTlXo':function(_0x1be06c,_0x1cd081){return _0x1be06c/_0x1cd081;},'jCXRh':function(_0x29d525,_0x5570e6){return _0x29d525*_0x5570e6;},'BeErb':function(_0x5a5990,_0xe0eaca){return _0x5a5990+_0xe0eaca;},'nxiLe':function(_0x1388e5,_0x2fdbb9){return _0x1388e5<_0x2fdbb9;},'pnvAT':function(_0x15a47f,_0x3e67c5){return _0x15a47f+_0x3e67c5;},'BOWIw':function(_0x1b8e4a,_0x5a4773){return _0x1b8e4a+_0x5a4773;},'WYYnw':_0xc654b5(0x3be)+_0xc654b5(0xb25),'ZTFYB':_0xc654b5(0x58b)+_0xc654b5(0x808)+_0xc654b5(0x34c)+_0xc654b5(0x444)+'t\x20rep'+'ort…','PMPDp':'VERSI'+'ON','yuFMB':function(_0x5e5b2f,_0x59533b){return _0x5e5b2f+_0x59533b;},'YORrU':'Photo'+_0xc654b5(0x750)+_0xc654b5(0xbe8)+'nc','GrCJE':'every'+'one\x20b'+_0xc654b5(0xb8b)+'u','KhMaq':function(_0x2954d0,_0x421a33){return _0x2954d0+_0x421a33;},'LOhYX':_0xc654b5(0x3d1),'nFiyR':'Healt'+'h','WKRDv':function(_0x44cd93,_0x20e9ff){return _0x44cd93(_0x20e9ff);},'LpxFb':function(_0x16171f,_0x4e2f99){return _0x16171f===_0x4e2f99;},'Fseew':function(_0x278d4b,_0x17482c){return _0x278d4b===_0x17482c;},'ucZfj':function(_0x289e92,_0x5a1804){return _0x289e92===_0x5a1804;},'HBJiQ':_0xc654b5(0x533),'iDDag':function(_0x51f788,_0x11ccee){return _0x51f788-_0x11ccee;},'yrXVG':function(_0x2eb0be,_0x5cc3d6){return _0x2eb0be*_0x5cc3d6;},'BDnFn':function(_0x4db955,_0x1a94ad){return _0x4db955>_0x1a94ad;},'CzjwS':function(_0x54edc3,_0x408676){return _0x54edc3<_0x408676;},'CAcPw':function(_0x19a43b,_0x8a65d){return _0x19a43b*_0x8a65d;},'vmVxg':function(_0x184c57,_0x217c94){return _0x184c57===_0x217c94;},'SXIGz':function(_0x232d3e,_0x36f979){return _0x232d3e<_0x36f979;},'dTOYL':_0xc654b5(0x3d7),'oURAQ':function(_0xbbe38b,_0x4e5824){return _0xbbe38b===_0x4e5824;},'aAqIs':function(_0x2cb783,_0x52b043,_0x11edd2){return _0x2cb783(_0x52b043,_0x11edd2);},'INiXB':function(_0x506d18,_0xcee050){return _0x506d18>>>_0xcee050;},'fuCZQ':_0xc654b5(0xbaf),'BHIed':function(_0x4d4b51,_0x20e591){return _0x4d4b51<_0x20e591;},'Enjqr':function(_0x25e95e,_0x277d60){return _0x25e95e===_0x277d60;},'OVzLd':function(_0x377b8b,_0x1dd9ad,_0x59caa6){return _0x377b8b(_0x1dd9ad,_0x59caa6);},'gTuyz':function(_0x151800,_0x2a8304,_0x413300){return _0x151800(_0x2a8304,_0x413300);},'OWYPo':function(_0x1f7b35,_0x336d27){return _0x1f7b35/_0x336d27;},'FezVO':function(_0x27518a){return _0x27518a();},'YjMAs':function(_0x2eb513,_0x5a7de0,_0x1c1617){return _0x2eb513(_0x5a7de0,_0x1c1617);},'vmRoM':function(_0x4d89a3,_0x14ce60){return _0x4d89a3!==_0x14ce60;},'XTXsn':'posit'+_0xc654b5(0x626)+_0xc654b5(0x7da)+'right'+_0xc654b5(0x401)+_0xc654b5(0xac3)+'46px;'+_0xc654b5(0x78c)+_0xc654b5(0x581)+_0xc654b5(0x65d)+'646;p'+_0xc654b5(0x2eb)+_0xc654b5(0x818)+_0xc654b5(0x6e7)+'one;','UviSz':_0xc654b5(0x5c5)+_0xc654b5(0x308)+_0xc654b5(0x27b)+_0xc654b5(0xc53)+'bkit-'+_0xc654b5(0x5c5)+_0xc654b5(0x308)+'t:non'+'e;','tLpLB':'<canv'+'as\x20id'+_0xc654b5(0x467)+_0xc654b5(0xac9)+_0xc654b5(0xc8f)+_0xc654b5(0x2fd)+'th=\x221'+_0xc654b5(0xa57)+'eight'+'=\x22160'+'\x22\x20sty'+_0xc654b5(0xb67)+_0xc654b5(0x605)+'y:blo'+'ck\x22><'+_0xc654b5(0x67d)+_0xc654b5(0xc86),'QewsZ':'#saku'+'ra-es'+'p-lg','FmMKs':_0xc654b5(0xc1a),'dnBTv':_0xc654b5(0x864)+_0xc654b5(0x7cf)+_0xc654b5(0xaf5),'fMHYs':function(_0x453df2,_0x3ab746){return _0x453df2+_0x3ab746;},'iYRSR':'Mouse'+_0xc654b5(0xb18)+'camer'+'a','cOahG':'HAjuy','MCDOV':'plugi'+'n._ru'+'ntime'+'.reso'+_0xc654b5(0x4dd)+_0xc654b5(0xb1e),'XLTDn':'HDjzp','WssZe':function(_0x4c0430,_0x26fc63){return _0x4c0430===_0x26fc63;},'AgbGX':function(_0x3fa360,_0xc7d9bb,_0x1c66a5){return _0x3fa360(_0xc7d9bb,_0x1c66a5);},'DCntf':function(_0x2f1865,_0x1c906f){return _0x2f1865-_0x1c906f;},'Wubgd':function(_0x4f18d0,_0x10b57c){return _0x4f18d0/_0x10b57c;},'Lhiyr':_0xc654b5(0x534)+_0xc654b5(0x633)+_0xc654b5(0x76a)+_0xc654b5(0xbcc),'RXbdB':function(_0x505284,_0x389422){return _0x505284/_0x389422;},'qgsRv':'wqVZb','sITvq':'rgba('+_0xc654b5(0xc88)+_0xc654b5(0x4f2)+_0xc654b5(0x3ea)+')','OupiK':function(_0x507ae5,_0x103b0c){return _0x507ae5-_0x103b0c;},'TlmHS':function(_0x22da67,_0xf56960){return _0x22da67===_0xf56960;},'wWyox':'rgba('+_0xc654b5(0xc88)+_0xc654b5(0x966)+_0xc654b5(0x3a9)+')','jRIKO':function(_0x3c77cd,_0x368359){return _0x3c77cd*_0x368359;},'dpXyu':function(_0x4d4c22,_0x775fae){return _0x4d4c22-_0x775fae;},'UAqkR':function(_0x557783,_0x4b1ad3,_0x1eb176,_0x276044){return _0x557783(_0x4b1ad3,_0x1eb176,_0x276044);},'dRAEs':function(_0x2f6405,_0x53c0f1,_0x4c2aab){return _0x2f6405(_0x53c0f1,_0x4c2aab);},'ATOtA':function(_0x40abca,_0x32e7d5){return _0x40abca+_0x32e7d5;},'GvcWj':function(_0x105922,_0x7e8f3d){return _0x105922-_0x7e8f3d;},'QdtVc':function(_0x1b3d6e,_0x3f7f67){return _0x1b3d6e*_0x3f7f67;},'FtAeX':function(_0x55be06,_0x3ae8b2){return _0x55be06+_0x3ae8b2;},'jdMzs':function(_0x4930f6,_0x17bb01){return _0x4930f6*_0x17bb01;},'gPwaX':function(_0x4b5f61,_0x115eae){return _0x4b5f61+_0x115eae;},'GfYsm':function(_0x393195,_0x501eab){return _0x393195+_0x501eab;},'adFIo':function(_0x5162df,_0x9c42ce){return _0x5162df*_0x9c42ce;},'oVPmX':function(_0x2b4aec,_0x5660d3){return _0x2b4aec*_0x5660d3;},'XJvsN':function(_0x10c664,_0x49a8e1){return _0x10c664===_0x49a8e1;},'cBLXA':_0xc654b5(0x17c),'GdFFK':function(_0x109689,_0x12f695){return _0x109689+_0x12f695;},'Xalae':function(_0x28403b,_0x2607fb){return _0x28403b+_0x2607fb;},'Woqgw':_0xc654b5(0x76f),'AzdOg':function(_0x4f48d8,_0x41ed5c){return _0x4f48d8+_0x41ed5c;},'XTqZE':function(_0x2bb4ea,_0x397ff4){return _0x2bb4ea+_0x397ff4;},'scBDH':function(_0x42fa06){return _0x42fa06();},'mYFdR':function(_0x235b0a,_0x11d89e){return _0x235b0a===_0x11d89e;},'qFLdq':_0xc654b5(0x3b7),'TaWgL':'dKeSk','ZMcFg':function(_0x53235e){return _0x53235e();},'RqbFM':function(_0x4a6f35){return _0x4a6f35();},'LPqEG':_0xc654b5(0x72f)+_0xc654b5(0x91e)+'llwar'+'z','avxZU':function(_0x6b5895){return _0x6b5895();},'lshVP':_0xc654b5(0x1bb)+_0xc654b5(0x99d),'QXMyk':function(_0xeac71a,_0x49a4a5){return _0xeac71a+_0x49a4a5;},'zbLNv':'CjWQJ','wbiGU':function(_0x1fb462){return _0x1fb462();},'gewds':function(_0x21b418,_0x168578){return _0x21b418+_0x168578;},'IUdBJ':function(_0x45ee2f,_0x21d5aa,_0x3fc263,_0x30c9cc,_0x12ac4e){return _0x45ee2f(_0x21d5aa,_0x3fc263,_0x30c9cc,_0x12ac4e);},'ABlIQ':'0x28\x20'+'(gues'+'s)','JNOQa':function(_0x30efa1,_0x5066b2){return _0x30efa1/_0x5066b2;},'NuXym':function(_0x411727,_0x45dd9a){return _0x411727!==_0x45dd9a;},'qvRdr':'xwxjx','aJJZR':function(_0x19623c){return _0x19623c();},'zfddE':_0xc654b5(0x949),'fXrrF':'BxekW','sHons':function(_0x47eb9c,_0x275764){return _0x47eb9c+_0x275764;},'cEbiX':'surve'+_0xc654b5(0x502)+_0xc654b5(0x359),'cxHDa':function(_0x379513,_0x5062ad){return _0x379513+_0x5062ad;},'sxHgr':_0xc654b5(0x616)+_0xc654b5(0x936)+'g\x20fai'+_0xc654b5(0x359),'JrftZ':function(_0x45cb9c,_0xd539da){return _0x45cb9c===_0xd539da;},'EfkMd':function(_0x32fbd2,_0x289689){return _0x32fbd2+_0x289689;},'Rrbhl':'Reaso'+_0xc654b5(0xa3f),'LmQic':'ANOTH'+_0xc654b5(0x88d)+_0xc654b5(0x3ee)+_0xc654b5(0x483)+'OK\x20OV'+'ER\x20wi'+_0xc654b5(0xbd6)+_0xc654b5(0x2f5)+_0xc654b5(0x5ee)+'dkit.'+_0xc654b5(0xa16)+_0xc654b5(0x4e0)+_0xc654b5(0x878)+_0xc654b5(0x678)+'d\x20was'+'\x20','OQaOs':_0xc654b5(0x2fa)+'a/UWM'+_0xc654b5(0xa92)+'ipt\x20i'+'n\x20Tam'+_0xc654b5(0x50d)+'nkey\x20'+'and\x20h'+_0xc654b5(0xb94)+'eload'+'.','SkoLy':function(_0x1d004e,_0x30ca13){return _0x1d004e===_0x30ca13;},'OJCAX':'plugi'+'n._ru'+'ntime'+'\x20is\x20n'+'ot\x20wi'+_0xc654b5(0xbd6)+_0xc654b5(0x2f5)+'WebMo'+'dkit.'+_0xc654b5(0x4e0)+'me\x20-\x20'+_0xc654b5(0x79f)+'lugin'+'\x20was\x20'+'built'+'\x20','vUqkw':_0xc654b5(0x1d3)+_0xc654b5(0x226)+'diffe'+'rent\x20'+_0xc654b5(0x4e0)+_0xc654b5(0x606)+_0xc654b5(0x64d)+_0xc654b5(0x63a)+'n\x20the'+'\x20glob'+_0xc654b5(0x68a)+_0xc654b5(0x374)+_0xc654b5(0x244),'pTgid':_0xc654b5(0xcbc),'EYMIh':function(_0x34fc9a,_0xe0ea53){return _0x34fc9a===_0xe0ea53;},'wYirO':function(_0x5ab4b2,_0x2b07e3){return _0x5ab4b2+_0x2b07e3;},'RnCHR':'ms\x20wi'+_0xc654b5(0x845)+'igina'+_0xc654b5(0xc77)+'=','UdgRo':'\x20(sou'+'rce:\x20','lDcfA':_0xc654b5(0x69d)+_0xc654b5(0x802)+_0xc654b5(0x5df)+'ence\x20'+'exist'+_0xc654b5(0xa81)+'en\x20an'+'d\x20is\x20'+_0xc654b5(0x680)+'eacha'+'ble\x20n'+_0xc654b5(0x4b2),'qkZep':function(_0x4d50cf,_0x2d7167){return _0x4d50cf+_0x2d7167;},'XTPUm':_0xc654b5(0x2f5)+_0xc654b5(0x562)+'ance\x20'+'not\x20r'+'esolv'+_0xc654b5(0x2df)+_0xc654b5(0x369)+'urce:'+'\x20','gfnCc':function(_0x6d86eb,_0x183080){return _0x6d86eb===_0x183080;},'RbAkT':'windo'+'w.Uni'+_0xc654b5(0x9ad)+'Modki'+'t.Val'+_0xc654b5(0x6c6)+_0xc654b5(0x15d)+_0xc654b5(0x414)+_0xc654b5(0x50f)+'\x20-\x20ca'+'pture'+_0xc654b5(0x77b)+'unnin'+'g\x20bli'+_0xc654b5(0x13b),'DHZdQ':_0xc654b5(0xa9b)+'s\x20wer'+'e\x20eve'+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+'\x20The\x20'+_0xc654b5(0xc72)+_0xc654b5(0x7cc)+'\x20','kdddT':_0xc654b5(0x616)+'resol'+'ved\x20','mcfgr':_0xc654b5(0x228)+',\x20Met'+'hodIn'+_0xc654b5(0x4b0)+_0xc654b5(0x47b)+_0xc654b5(0xc2b)+_0xc654b5(0xb20)+_0xc654b5(0x2ca)+_0xc654b5(0xbca)+_0xc654b5(0xc2c)+_0xc654b5(0xc7e),'YehBk':function(_0x4d28ad,_0x30106b){return _0x4d28ad+_0x30106b;},'XUiyZ':_0xc654b5(0xcb9),'biaKW':function(_0x294dbe,_0x1beebb){return _0x294dbe(_0x1beebb);},'KrFbW':function(_0x103c26){return _0x103c26();},'JJZvH':function(_0x3fb120){return _0x3fb120();},'mDukL':function(_0x1a1b37,_0xc8b562){return _0x1a1b37===_0xc8b562;},'WDEHC':function(_0x4d4f14){return _0x4d4f14();},'kXiZh':_0xc654b5(0x79d)+'r','ZDmmC':function(_0xfd585c,_0x4aec86){return _0xfd585c&&_0x4aec86;},'olYzr':'===SA'+'KURA-'+'SKILL'+'WARZ-'+_0xc654b5(0x86b)+'=','sJIEN':_0xc654b5(0x5ea)+'2','hyuKX':_0xc654b5(0x85f),'rvkSa':_0xc654b5(0x72f)+_0xc654b5(0x6d9)+_0xc654b5(0x635)+'-hidd'+'en','UZyYW':'messa'+'ge','hBhqi':_0xc654b5(0x4d4)+_0xc654b5(0xcd1)+_0xc654b5(0x94e)+_0xc654b5(0x516)+'t-siz'+_0xc654b5(0x82e)+'x','vXaJQ':function(_0x33c03c,_0x104dc1,_0x109b02){return _0x33c03c(_0x104dc1,_0x109b02);},'nNDcM':_0xc654b5(0x1e0),'CtExk':'\u0094\u0090\u0089\u008f\u0089'+_0xc654b5(0x9f4)+'\u008e','agGcW':'\u008d\u0091\u008e\u008a\u008a'+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','mxQrs':_0xc654b5(0x402)+_0xc654b5(0x506)+'\u0095','WcNwk':_0xc654b5(0xa94)+_0xc654b5(0xadc)+'\u0094','YNGwb':_0xc654b5(0x3c7)+_0xc654b5(0x788)+'\u008f','Nkgkt':_0xc654b5(0xbc4)+_0xc654b5(0xa68)+'\u0090','pdIXN':_0xc654b5(0xc12)+_0xc654b5(0xc07)+'\u0088','loSND':_0xc654b5(0xa40)+'\u0089\u008d\u008f\u0087\u0091'+'\u0093','SnPBN':_0xc654b5(0xa9d)+_0xc654b5(0x387)+'\u008a','suDPU':_0xc654b5(0x909)+'\u0087\u0092\u0088\u0088\u008c'+'\u0088','tXYpX':'\u008f\u0091\u0092\u0094\u008a'+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','XfdRK':_0xc654b5(0xa7c)+_0xc654b5(0x886)+'\u008c','nOezu':_0xc654b5(0x191)+_0xc654b5(0x448)+'\u0093','JalgW':_0xc654b5(0x601)+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','lnbKk':'bool','FjKFN':_0xc654b5(0x4bc)+'\u0086\u008b\u0091\u0087\u008a'+'\u008b','mVlUM':'\u008a\u008c\u0086\u0095\u0087'+_0xc654b5(0x9da)+'\u008a','WbusN':_0xc654b5(0x84e)+_0xc654b5(0x877)+'\u008a','kizGJ':_0xc654b5(0x82d)+_0xc654b5(0x791)+'\u008b','DkQPh':_0xc654b5(0x99b)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','XrFSM':'\u0091\u0088\u0095\u0088\u0088'+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','BZltd':_0xc654b5(0x645)+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','kiVFe':_0xc654b5(0x46b)+_0xc654b5(0x5e8)+'\u0089','GpXEw':_0xc654b5(0xba9)+_0xc654b5(0x2db)+'\u0094','dTbFr':_0xc654b5(0x52c)+_0xc654b5(0x481)+'\u0090','bTtdj':_0xc654b5(0xc24)+'\u008a\u0089\u008e\u008d\u008d'+'\u0086','pnrrF':'\u008d\u0095\u0087\u0093\u0092'+'\u0092\u0094\u0087\u008d\u008c'+'\u008b','Aqgwq':'\u008c\u0089\u008b\u0092\u0093'+_0xc654b5(0x186)+'\u008a','APBSj':'\u0093\u0086\u0088\u008d\u008f'+'\u0094\u0087\u008c\u0091\u008a'+'\u0094','jstPj':'\u0094\u0094\u008e\u0091\u0090'+_0xc654b5(0xbf9)+'\u0095','PpsDK':_0xc654b5(0xa10)+_0xc654b5(0xaa9)+'\u0091','PXefQ':_0xc654b5(0x711)+_0xc654b5(0x9f6)+'\u0094','dYzHV':_0xc654b5(0x394)+'\u0089\u008e\u0086\u0095\u008c'+'\u0092','jxefd':_0xc654b5(0x409)+'\u008e\u0095\u0095\u008c\u008c'+'\u0087','vGxbF':'\u0090\u0090\u008f\u008d\u008a'+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','iuHJT':_0xc654b5(0xad9)+_0xc654b5(0x563)+'\u008c','OevNS':_0xc654b5(0x9ec)+_0xc654b5(0x735)+'\u0087','aWdsO':_0xc654b5(0x76c)+'\u0095\u008e\u008f\u0088\u008d'+'\u008f','qjAOq':'\u008d\u0094\u0092\u0093\u0092'+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','zPAtS':'\u0095\u0088\u0090\u0092\u0090'+_0xc654b5(0x95e)+'\u0095','GHzGu':'\u008e\u0091\u0092\u0087\u0089'+_0xc654b5(0x81a)+'\u0090','HzBcl':'\u008f\u0086\u0090\u0094\u0089'+'\u0095\u0088\u0093\u0087\u0089'+'\u008a','ZuNxy':'\u0094\u0090\u0089\u008c\u008e'+'\u008c\u008b\u008f\u008d\u0088'+'\u0089','MRCHs':_0xc654b5(0xc92),'ntebL':_0xc654b5(0xb77)+_0xc654b5(0xa87)+'\u008c','ZlknQ':_0xc654b5(0x7b3)+_0xc654b5(0x923)+'\u008c','WAqGP':_0xc654b5(0xc5e),'UKvkh':_0xc654b5(0x200)+'\u008a\u008a\u0090\u0088\u008c'+'\u0088','KbkQt':_0xc654b5(0x7f9)+_0xc654b5(0x438)+'\u0093','NOAAu':_0xc654b5(0x669)+'\u008e\u008c\u0090\u008a\u008c'+'\u0094','kOGCm':'\u0093\u0087\u008f\u008f\u0093'+'\u0091\u0091\u0089\u0091\u0092'+'\u008c','vdlsu':'\u0089\u008d\u008a\u008a\u0090'+_0xc654b5(0xc31)+'\u008a','fPHCX':'\u0093\u0093\u008d\u008e\u008b'+_0xc654b5(0x6c9)+'\u0086','GHfyq':'\u0088\u0091\u0095\u0093\u0087'+_0xc654b5(0x651)+'\u008c','MOEvs':'\u0087\u0087\u0089\u0092\u008d'+_0xc654b5(0x97d)+'\u0092','NkTLp':_0xc654b5(0xb88)+_0xc654b5(0x219)+'\u008c','OJjRC':_0xc654b5(0x337)+_0xc654b5(0x1ac)+'ionFo'+'cus','jZLZK':_0xc654b5(0x73f)+'\u0088\u0094\u008e\u008d\u0093'+'\u008a','vabUs':_0xc654b5(0x793)+_0xc654b5(0x5bc)+'\u0094','siRAC':_0xc654b5(0x15f)+'\u008e\u008d\u0089\u008b\u0093'+'\u008e','zsovL':_0xc654b5(0x79a)+_0xc654b5(0x5eb)+'\u008c','HjGHV':'Awake','WWqgo':_0xc654b5(0x264)+_0xc654b5(0xbe5)+'\u0088','mcIYu':_0xc654b5(0x7ad)+_0xc654b5(0xb87)+'\u008e','nMcrs':'\u0089\u008a\u0086\u0092\u0089'+_0xc654b5(0x37a)+'\u0092','VELxG':_0xc654b5(0x3c1)+_0xc654b5(0xc98)+'\u008e','qbCmv':'\u0094\u0088\u008a\u0094\u0092'+_0xc654b5(0x236)+'\u0092','nYLEY':'\u0090\u008d\u008b\u0093\u008a'+'\u008d\u0089\u0090\u0093\u008a'+'\u008a','sQunV':_0xc654b5(0x582)+_0xc654b5(0x992)+'\u0095','sEPmP':_0xc654b5(0xc17)+_0xc654b5(0x7d2)+'ger','AQCSw':_0xc654b5(0xc1b)+'ameMa'+_0xc654b5(0xb72),'WXpPU':_0xc654b5(0x6db)+_0xc654b5(0x153)+_0xc654b5(0x4d7),'cPnSt':_0xc654b5(0x43e)+'Bot','arYug':'cInpu'+'t.dll','iRtOd':'obfB','jTzdM':_0xc654b5(0xc6f)+'h','WMLZb':_0xc654b5(0x881),'ylPnj':_0xc654b5(0xc99)+'le','UqCXW':'0x18','Febzj':'targe'+_0xc654b5(0x2e4)+_0xc654b5(0x6e9),'QCdcN':_0xc654b5(0xbff),'uNuSb':'0x58','eGiLC':_0xc654b5(0x70c),'dWdTH':_0xc654b5(0x715)+'wn','Vkjfb':_0xc654b5(0x72f)+_0xc654b5(0x6d9)+'fov','FnjOM':function(_0x45da60,_0x1a618e){return _0x45da60(_0x1a618e);},'wCSPy':_0xc654b5(0x72f)+_0xc654b5(0x6d9)+_0xc654b5(0x16d)+_0xc654b5(0x29c),'WDNCq':function(_0x36b4d2,_0x3657ce){return _0x36b4d2!==_0x3657ce;},'EQtnA':'CMB','LWpuQ':'VAL','weMob':function(_0x37092f,_0x4471fe){return _0x37092f+_0x4471fe;},'qJCqy':function(_0x1172ec,_0x2bf51f){return _0x1172ec+_0x2bf51f;},'QRAwJ':function(_0xcd9d00,_0x1057e7){return _0xcd9d00+_0x1057e7;},'JxkRR':function(_0x14f685,_0x3b97b9){return _0x14f685+_0x3b97b9;},'HbnTq':function(_0x5b58e5,_0xcc3176){return _0x5b58e5+_0xcc3176;},'qzOkO':function(_0x574a61,_0x3df8da){return _0x574a61+_0x3df8da;},'gJbvl':function(_0x3e746b,_0x1b1964){return _0x3e746b+_0x1b1964;},'keRwK':function(_0x40f295,_0x93b3ee){return _0x40f295+_0x93b3ee;},'ZLfIu':function(_0x230986,_0x414785){return _0x230986+_0x414785;},'BvJho':function(_0x30505d,_0x1c8332){return _0x30505d+_0x1c8332;},'tYOrU':function(_0x2832fb,_0x4e5bff){return _0x2832fb+_0x4e5bff;},'SKVDn':'#saku'+'ra-me'+_0xc654b5(0x325)+'ot{al'+_0xc654b5(0x8b9)+'tial}','ZUZbh':_0xc654b5(0x305)+_0xc654b5(0x692)+_0xc654b5(0xbdf)+'p:10p'+_0xc654b5(0xbd4)+_0xc654b5(0x9d8)+_0xc654b5(0x867)+_0xc654b5(0xac4)+_0xc654b5(0x775)+'ius:2'+_0xc654b5(0x37f)+_0xc654b5(0x2eb)+_0xc654b5(0x818)+_0xc654b5(0x141)+'uto;z'+_0xc654b5(0x962)+_0xc654b5(0x7d0)+'74836'+_0xc654b5(0x2cd),'TJjiQ':_0xc654b5(0x3ce)+'round'+_0xc654b5(0xccc)+'(24,1'+_0xc654b5(0x638)+'.82);'+'backd'+'rop-f'+'ilter'+_0xc654b5(0x5c3)+_0xc654b5(0xb3f)+')\x20sat'+'urate'+_0xc654b5(0xb26)+_0xc654b5(0x2c2)+_0xc654b5(0x91d)+_0xc654b5(0x5a9)+_0xc654b5(0x828)+_0xc654b5(0x795)+_0xc654b5(0x5c3)+'(22px'+_0xc654b5(0x8a7)+'urate'+_0xc654b5(0xb26)+');','IVJUv':_0xc654b5(0x197)+'ty:0;'+_0xc654b5(0xbe1)+'form:'+_0xc654b5(0xbe1)+_0xc654b5(0x53e)+'(18px'+_0xc654b5(0x34d)+'nter-'+_0xc654b5(0x773)+'s:non'+_0xc654b5(0x232)+'nsiti'+'on:op'+_0xc654b5(0x492)+_0xc654b5(0x6ce)+'\x20ease'+',tran'+_0xc654b5(0x6a4)+_0xc654b5(0x68e)+'\x20cubi'+'c-bez'+_0xc654b5(0xc79)+_0xc654b5(0xcc2)+'.36,1'+');','fgHnc':'#saku'+'ra-me'+_0xc654b5(0x325)+_0xc654b5(0x934)+_0xc654b5(0x969)+_0xc654b5(0xc7f)+'wn{op'+_0xc654b5(0x492)+_0xc654b5(0x6bf)+'ansfo'+_0xc654b5(0x397)+_0xc654b5(0x9c2)+_0xc654b5(0x7ea)+_0xc654b5(0x550)+_0xc654b5(0x683)+_0xc654b5(0xc46),'jZTNM':_0xc654b5(0xac4)+_0xc654b5(0x775)+_0xc654b5(0x925)+_0xc654b5(0x5e5)+_0xc654b5(0x441)+'ound:'+'rgba('+_0xc654b5(0x377)+_0xc654b5(0x247)+'5,.02'+'5);bo'+_0xc654b5(0x9bc)+'dow:i'+_0xc654b5(0x146)+'0\x200\x200'+'\x201px\x20'+_0xc654b5(0x534)+'255,2'+_0xc654b5(0x247)+_0xc654b5(0x574)+');}','VXIdz':'.mn-t'+_0xc654b5(0x23d)+'splay'+_0xc654b5(0x9ea)+';alig'+_0xc654b5(0x8f8)+'ms:ce'+'nter;'+'justi'+_0xc654b5(0x9be)+_0xc654b5(0x829)+':cent'+_0xc654b5(0x8f6)+_0xc654b5(0x813)+_0xc654b5(0x8c5)+_0xc654b5(0x6cf)+_0xc654b5(0x299)+';bord'+_0xc654b5(0xb47)+'borde'+_0xc654b5(0x775)+_0xc654b5(0x925)+_0xc654b5(0xbad),'jSGNg':_0xc654b5(0x3ce)+_0xc654b5(0x1b5)+_0xc654b5(0x1ae)+'spare'+_0xc654b5(0xa83)+_0xc654b5(0x17a)+_0xc654b5(0x551)+_0xc654b5(0x36c)+'8,242'+',.4);'+_0xc654b5(0x7a1)+_0xc654b5(0x432)+'nter;'+'font-'+_0xc654b5(0xa65)+'10px;'+'font-'+_0xc654b5(0x70b)+_0xc654b5(0xc19)+_0xc654b5(0x4d4)+_0xc654b5(0x518)+'ly:in'+_0xc654b5(0xcc6)+';}','nIxXj':_0xc654b5(0x6d1)+_0xc654b5(0x6ed)+_0xc654b5(0xbf8)+_0xc654b5(0x8ed)+'width'+_0xc654b5(0xcb8)+'splay'+_0xc654b5(0x9ea)+_0xc654b5(0xb45)+_0xc654b5(0x327)+'ction'+_0xc654b5(0x6a0)+'mn;}','OAHUR':'.mn-t'+'op{di'+'splay'+':flex'+_0xc654b5(0xb3d)+'n-ite'+_0xc654b5(0x546)+_0xc654b5(0x1f3)+_0xc654b5(0x42d)+'2px;p'+_0xc654b5(0x619)+_0xc654b5(0xb12)+_0xc654b5(0x1ab)+'12px;'+_0xc654b5(0x5c5)+'selec'+_0xc654b5(0x27b)+'e;}','xfiQy':_0xc654b5(0x4d9)+_0xc654b5(0x929)+_0xc654b5(0x980)+_0xc654b5(0x249)+_0xc654b5(0x7c3)+'th:0;'+'}','TceYN':_0xc654b5(0x1c5)+_0xc654b5(0x5d4)+'nt-si'+_0xc654b5(0x48d)+'px;op'+_0xc654b5(0x492)+_0xc654b5(0xc66),'AiGDa':'color'+':inhe'+_0xc654b5(0x984)+'pacit'+'y:.45'+_0xc654b5(0x4b6)+_0xc654b5(0x145)+_0xc654b5(0x7ea)+';}','tluvx':_0xc654b5(0xc45)+'lose:'+_0xc654b5(0xc4d)+'{opac'+'ity:1'+_0xc654b5(0xcdc)+'groun'+'d:rgb'+_0xc654b5(0x931)+',255,'+_0xc654b5(0xa90)+_0xc654b5(0xa12),'VVwXw':_0xc654b5(0xc45)+_0xc654b5(0x4c0)+_0xc654b5(0x74f)+_0xc654b5(0x4e7)+_0xc654b5(0x1fd)+_0xc654b5(0x719)+'t:14p'+'x;fil'+'l:non'+'e;str'+_0xc654b5(0x27e)+'urren'+'tColo'+_0xc654b5(0x224)+'oke-w'+_0xc654b5(0x4e7)+_0xc654b5(0xbf3)+_0xc654b5(0xa3b)+_0xc654b5(0xb02)+_0xc654b5(0xb2e)+'nd;}','uFaby':'.mn-c'+_0xc654b5(0xb6a)+'-webk'+_0xc654b5(0x218)+_0xc654b5(0x6d6)+'ar{wi'+_0xc654b5(0x8ea)+'px;}','RXXtt':_0xc654b5(0xc45)+_0xc654b5(0xb6a)+_0xc654b5(0x888)+'it-sc'+'rollb'+_0xc654b5(0x74a)+_0xc654b5(0x629)+_0xc654b5(0x441)+'ound:'+'rgba('+_0xc654b5(0x377)+'55,25'+_0xc654b5(0x8ae)+_0xc654b5(0x623)+_0xc654b5(0x693)+_0xc654b5(0xa37)+':4px;'+'}','mTNlu':_0xc654b5(0x18a)+_0xc654b5(0xb35)+'ead{d'+'ispla'+'y:fle'+_0xc654b5(0xbb5)+_0xc654b5(0x136)+'ems:c'+_0xc654b5(0x882)+';gap:'+'8px;p'+'addin'+_0xc654b5(0x434)+'x\x2012p'+_0xc654b5(0xa0d),'Ibdgo':_0xc654b5(0x203)+_0xc654b5(0x7be)+_0xc654b5(0xaf2)+'ng:0\x20'+_0xc654b5(0x3af)+'10px;'+'}','VpUrp':_0xc654b5(0x2b2)+_0xc654b5(0x2f4)+'flex:'+_0xc654b5(0x270)+_0xc654b5(0x235)+'ba(24'+_0xc654b5(0x20e)+_0xc654b5(0xbf1)+_0xc654b5(0x1b1)+'}','VQmgM':_0xc654b5(0x87e)+'witch'+_0xc654b5(0x25d)+'-chec'+_0xc654b5(0x858)+'true\x22'+']{bac'+'kgrou'+'nd:rg'+_0xc654b5(0x3b3)+'5,107'+_0xc654b5(0x386)+_0xc654b5(0x5d7)+'}','YUChI':_0xc654b5(0x87e)+'witch'+_0xc654b5(0x25d)+'-chec'+_0xc654b5(0x858)+_0xc654b5(0x1ec)+_0xc654b5(0x40a)+_0xc654b5(0x241)+_0xc654b5(0xbf0)+'5px;b'+'ackgr'+'ound:'+_0xc654b5(0x158)+'9d;}','wRVgc':_0xc654b5(0x87e)+_0xc654b5(0xb56)+'::-we'+_0xc654b5(0x91d)+_0xc654b5(0x42e)+_0xc654b5(0xb4e)+_0xc654b5(0x2bd)+_0xc654b5(0x8e2)+'k{hei'+'ght:2'+_0xc654b5(0x8e4)+'rder-'+_0xc654b5(0xbec)+'s:2px'+';','wHljx':_0xc654b5(0x431)+_0xc654b5(0x642)+_0xc654b5(0x69b)+_0xc654b5(0x48d)+_0xc654b5(0x622)+_0xc654b5(0xaed)+'ight:'+_0xc654b5(0x2a3)+'in-wi'+'dth:3'+'4px;t'+_0xc654b5(0x6fb)+'lign:'+'right'+_0xc654b5(0x38c)+_0xc654b5(0x72b)+_0xc654b5(0x541)+',238,'+'242,.'+_0xc654b5(0xb61),'tOMRh':_0xc654b5(0xace)+_0xc654b5(0xa65)+'11.5p'+'x;fon'+_0xc654b5(0x95c)+_0xc654b5(0x65b)+_0xc654b5(0x967)+_0xc654b5(0x188)+_0xc654b5(0x964)+'er;fo'+_0xc654b5(0x6c2)+'mily:'+_0xc654b5(0xc84)+'it;}','bjNiA':_0xc654b5(0x14d)+_0xc654b5(0x439)+_0xc654b5(0x1a7)+_0xc654b5(0x795)+_0xc654b5(0x4e6)+_0xc654b5(0x5b5)+_0xc654b5(0x8a0)+_0xc654b5(0x90f),'nJjph':_0xc654b5(0x9f0)+_0xc654b5(0x2de)+'nt:11'+_0xc654b5(0x4fc)+_0xc654b5(0x163)+'monos'+'pace,'+_0xc654b5(0xa99)+'las,m'+_0xc654b5(0x347)+_0xc654b5(0x749)+_0xc654b5(0xc43)+_0xc654b5(0xaf3)+_0xc654b5(0x485)+'wrap;'+_0xc654b5(0x27d)+_0xc654b5(0x5c8)+':brea'+_0xc654b5(0x23f)+'d;mar'+_0xc654b5(0x914)+_0xc654b5(0x786)+_0xc654b5(0xbfe)+_0xc654b5(0x278)+_0xc654b5(0x6e5)+_0xc654b5(0x81b)+'80px;'+'overf'+_0xc654b5(0x2f3)+_0xc654b5(0xbd1),'znEYs':_0xc654b5(0xbe1)+'ition'+_0xc654b5(0xbcb)+_0xc654b5(0x720)+_0xc654b5(0xaa7)+'inter'+_0xc654b5(0x550)+_0xc654b5(0x683)+_0xc654b5(0xc61)+_0xc654b5(0x71b)+_0xc654b5(0x1dc)+_0xc654b5(0xc78)+'w(0\x200'+_0xc654b5(0xae6)+_0xc654b5(0x534)+_0xc654b5(0xc88)+'07,15'+_0xc654b5(0x135)+_0xc654b5(0x90f),'sUNMq':_0xc654b5(0x903)};var _0x44a57f=location[_0xc654b5(0x5d5)+_0xc654b5(0x7aa)]||'',_0x46dc4a=/(^|\.)www\.crazygames\.com$/[_0xc654b5(0x58a)](_0x44a57f),_0x45dd35=/(^|\.)games\.crazygames\.com$/['test'](_0x44a57f),_0x802c21=/(^|\.)crazygames\.com$/['test'](_0x44a57f)&&!_0x46dc4a&&!_0x45dd35,_0x23662e=_0x46dc4a?_0xc654b5(0x454)+'l':_0x45dd35?'wrapp'+'er':_0x2c575e['kXiZh'];if(_0x2c575e['ZDmmC'](!_0x46dc4a,!_0x45dd35)&&!_0x802c21)return;var _0x24f5d1=_0xc654b5(0x8de)+'b1',_0x44c084='__sak'+_0xc654b5(0x242)+_0xc654b5(0x44f),_0x241738=_0xc654b5(0x612)+_0xc654b5(0x71f)+'SKILL'+'WARZ-'+_0xc654b5(0x63d)+'===',_0x911c44=_0x2c575e['olYzr'],_0x24ba5f=_0x2c575e[_0xc654b5(0x5bb)];if(_0x45dd35){if(_0x2c575e['hyuKX']!==_0xc654b5(0x58c)){window[_0xc654b5(0x9b3)+'entLi'+_0xc654b5(0xa30)+'r']('messa'+'ge',function(_0x4f3b8a){var _0x2b2e51=_0xc654b5,_0x1d190d=_0x4f3b8a['data'];if(!_0x1d190d||_0x1d190d['__sak'+_0x2b2e51(0xc01)]!==_0x44c084)return;try{if(_0x2b2e51(0x429)===_0x2b2e51(0x747))_0x2c575e[_0x2b2e51(0x5b0)](_0x27bf05,![]);else{if(window[_0x2b2e51(0x256)+'t']&&_0x2c575e[_0x2b2e51(0x4f3)](window['paren'+'t'],window))window[_0x2b2e51(0x256)+'t'][_0x2b2e51(0x667)+_0x2b2e51(0x769)+'e'](_0x1d190d,'*');if(window['top']&&_0x2c575e[_0x2b2e51(0x4f3)](window['top'],window))window[_0x2b2e51(0xc3e)]['postM'+_0x2b2e51(0x769)+'e'](_0x1d190d,'*');}}catch(_0x590bd5){}if(_0x1d190d&&_0x2c575e['hTIaS'](_0x1d190d['kind'],'cmd')){if(_0x2b2e51(0xcb4)===_0x2b2e51(0xcb4))try{if(_0x2c575e[_0x2b2e51(0x4be)]==='XHbWO'){var _0x2bb572=document[_0x2b2e51(0x5ef)+_0x2b2e51(0x952)+'torAl'+'l'](_0x2b2e51(0xa7a)+'e');for(var _0x42c399=0x2531+0xd*0x28a+0x4633*-0x1;_0x2c575e['lIBPT'](_0x42c399,_0x2bb572[_0x2b2e51(0xb90)+'h']);_0x42c399++){try{if(_0x2bb572[_0x42c399][_0x2b2e51(0x491)+_0x2b2e51(0x6cb)+_0x2b2e51(0x922)])_0x2bb572[_0x42c399]['conte'+_0x2b2e51(0x6cb)+'dow']['postM'+_0x2b2e51(0x769)+'e'](_0x1d190d,'*');}catch(_0xdec959){}}}else{var _0x43fb04=_0x56e39b[_0x2b2e51(0x3b2)+'em'](_0x158d54);if(_0x43fb04)_0x2ec1a0['fov']=_0x4b190d['min'](0x164a+-0xc9e+-0x920,_0x58fd89['max'](0x215e+-0x1005*-0x2+-0x414a,_0x4e665d(_0x43fb04)||-0x2663+-0x10ff*-0x1+-0x2*-0xadf));}}catch(_0x2fbb0f){}else{var _0x565f43=new _0x2f41a9(_0x58a3dc);for(var _0x4742cb=0x13ff+0x2d*0xb2+-0x3349;_0x4742cb<_0x8f3e6;_0x4742cb++)_0x565f43[_0x4742cb]=_0x541bfd['getUi'+'nt8'](_0x2c575e[_0x2b2e51(0x49e)](_0x13be7c+_0x2f97af,_0x4742cb));return _0x4a8fb7['ok']++,_0x565f43;}}}),console['log']('%c[sa'+_0xc654b5(0xaff)+_0xc654b5(0x861)+'RAPPE'+'R\x20ACT'+_0xc654b5(0x600)+'relay'+'\x20up+d'+_0xc654b5(0x49c),_0x2c575e['yuFMB']('color'+':',_0x24f5d1));return;}else{var _0xe5341d=_0x2c575e[_0xc654b5(0x583)]['split']('|'),_0x56c34e=0x5*0x59c+0x13ab+-0x2fb7;while(!![]){switch(_0xe5341d[_0x56c34e++]){case'0':if(_0x4339ef){_0x4339ef['sp']&&(_0x4339ef['sp'][_0xc654b5(0xb42)+_0xc654b5(0x19b)+'t']=_0x5d95e6['on']?_0x2c575e['GRdcC']:_0xc654b5(0x422)+'\x20off',_0x4339ef['sp']['style']['backg'+_0xc654b5(0x1b5)]=_0x19167a['on']?_0x1884ce:'trans'+_0xc654b5(0x256)+'t',_0x4339ef['sp'][_0xc654b5(0x7fb)]['color']=_0x3eb8fc['on']?_0x2c575e[_0xc654b5(0x712)]:_0x2c575e['ypJNX']);if(_0x4339ef['fx'])_0x4339ef['fx']['value']=_0x246c7d(_0x347355[_0xc654b5(0x7b7)+'r']);if(_0x4339ef['fv'])_0x4339ef['fv'][_0xc654b5(0xb42)+_0xc654b5(0x19b)+'t']=_0x2c575e[_0xc654b5(0x71d)](_0x44040d['facto'+'r'][_0xc654b5(0x297)+'ed'](-0x16fe+-0xfd9*0x1+0x26d8),'x');}continue;case'1':_0x239f99['on']=!!_0x2e79f1;continue;case'2':_0x1b19e2['on']&&!_0x3cdb6d&&(_0x2c575e['hTIaS'](_0x17b18b,_0x1e543b)||_0x2c575e[_0xc654b5(0xa97)](_0x13f19e,null)||_0xeba652(_0x2c9edc)===0x165e+0x113d*0x1+-0x279a)&&(_0x5a526f=_0x38f4c9);continue;case'3':var _0x3cdb6d=_0x3a7619['on'];continue;case'4':if(!_0x203259['on'])_0x330be7={};continue;case'5':_0xc00442[_0xc654b5(0x7b7)+'r']=_0x16921b['min'](_0x5b00cb['max'],_0xf268de[_0xc654b5(0x54c)](_0x2068d2['min'],_0x1c53aa(_0x32b7d0)||-0x32*-0xc5+-0x2228+-0x451));continue;case'6':var _0x4339ef=_0x1366d4();continue;}break;}}}if(_0x46dc4a){console[_0xc654b5(0xa54)](_0xc654b5(0x184)+'kura]'+_0xc654b5(0x815)+_0xc654b5(0x5f9)+'TIVE',_0xc654b5(0x1cc)+':'+_0x24f5d1+(_0xc654b5(0x4d4)+'-weig'+_0xc654b5(0x94e)+'0'),{'host':_0x44a57f});var _0x36fbcd={'set':function(){},'command':function(){}};function _0x44c34f(_0x406f5e,_0x3edfd7){var _0x213f7b=_0xc654b5,_0x56c47b={'GYZoi':_0x213f7b(0x9f2)+'hot','MDweP':function(_0x560af0,_0x3c01a3){var _0x4d8dc1=_0x213f7b;return _0x2c575e[_0x4d8dc1(0x49e)](_0x560af0,_0x3c01a3);}};if(_0x213f7b(0x457)!=='LkNrI')_0x4a73fc(_0x56c47b[_0x213f7b(0x9c9)]);else{var _0x48d55e={'__sakura':_0x44c084,'kind':_0x213f7b(0xc60),'cmd':_0x406f5e,'arg':_0x3edfd7};try{var _0x14551d=document['query'+'Selec'+_0x213f7b(0xae5)+'l'](_0x213f7b(0xa7a)+'e');for(var _0x164909=0x1*-0x1092+-0x12d4+0xc5*0x2e;_0x164909<_0x14551d[_0x213f7b(0xb90)+'h'];_0x164909++){try{if(_0x14551d[_0x164909][_0x213f7b(0x491)+'ntWin'+'dow'])_0x14551d[_0x164909][_0x213f7b(0x491)+_0x213f7b(0x6cb)+_0x213f7b(0x922)][_0x213f7b(0x667)+'essag'+'e'](_0x48d55e,'*');}catch(_0x170d27){}}}catch(_0x28689e){}try{if(_0x2c575e[_0x213f7b(0x4f3)](_0x2c575e[_0x213f7b(0x9ae)],_0x2c575e['oLoVY'])){var _0x2a0e4f=new BroadcastChannel(_0x213f7b(0x72f)+_0x213f7b(0x1de));_0x2a0e4f[_0x213f7b(0x667)+'essag'+'e'](_0x48d55e),_0x2c575e[_0x213f7b(0x5cf)](setTimeout,function(){try{_0x2a0e4f['close']();}catch(_0x4508d7){}},-0x1dd9+-0x6f8*0x3+0x30b*0x11);}else{_0x4e3741[_0x213f7b(0x1e1)]({'o':-(-0x322+-0x224f+-0x1*-0x2572),'v':0x0,'why':_0x56c47b['MDweP'](_0x56c47b['MDweP']('no\x20gr'+_0x213f7b(0x1f9)+'f\x20',_0x16b541),_0x213f7b(0x6c4)+'uredF'+'loats'+_0x213f7b(0xba4)+'ed')});return;}}catch(_0x415366){}}}var _0x4a9de4=_0x2c575e[_0xc654b5(0x9c6)];function _0x2cbc87(){var _0x39c254=_0xc654b5;if(_0x2c575e[_0x39c254(0xc7a)](_0x39c254(0xadd),_0x2c575e['ANeiv']))_0x196db4[_0x39c254(0x460)+'em'](_0x538e33,_0x5b1c0b(_0x42107a[_0x39c254(0x8bd)]));else try{return localStorage[_0x39c254(0x3b2)+'em'](_0x4a9de4)==='1';}catch(_0x1a2ade){return![];}}function _0x56a3b8(_0x29141e){var _0x66d6f8=_0xc654b5;try{if(_0x2c575e[_0x66d6f8(0x4f3)](_0x66d6f8(0xb04),_0x66d6f8(0x96f)))_0x29141e?localStorage[_0x66d6f8(0x460)+'em'](_0x4a9de4,'1'):localStorage[_0x66d6f8(0x424)+'eItem'](_0x4a9de4);else{if(_0x5bd013&&_0x5952b3[_0x66d6f8(0xb23)+'ropag'+'ation'])_0x28e357['stopP'+'ropag'+_0x66d6f8(0x9ca)]();_0x3b3304(!_0x6b4e42['open']);}}catch(_0x46d845){}try{var _0x20675d=document[_0x66d6f8(0x95b)+'ement'+_0x66d6f8(0x466)](_0x66d6f8(0x72f)+_0x66d6f8(0x6d9)+'v2');if(_0x20675d)_0x20675d[_0x66d6f8(0x424)+'e']();}catch(_0x662d91){}try{var _0x40dc69=document['getEl'+'ement'+_0x66d6f8(0x466)](_0x66d6f8(0x72f)+_0x66d6f8(0x6d9)+_0x66d6f8(0x767)+'b');if(_0x29141e&&!_0x40dc69&&document[_0x66d6f8(0x44e)]){var _0x1a76e7=document[_0x66d6f8(0x7ec)+'eElem'+'ent'](_0x66d6f8(0x624));_0x1a76e7['id']=_0x2c575e[_0x66d6f8(0x2ef)],_0x1a76e7['style'][_0x66d6f8(0x4af)+'xt']=_0x2c575e[_0x66d6f8(0x694)]+('backg'+'round'+':rgba'+_0x66d6f8(0xb36)+'2,29,'+_0x66d6f8(0x472)+'order'+_0x66d6f8(0xc39)+'solid'+_0x66d6f8(0x789)+'(255,'+_0x66d6f8(0x287)+_0x66d6f8(0x71e)+');col'+'or:')+_0x24f5d1+';'+_0x2c575e[_0x66d6f8(0x6b3)],_0x1a76e7['textC'+'onten'+'t']=_0x2c575e['qjozJ'],_0x1a76e7['oncli'+'ck']=function(){var _0x55f9f0=_0x66d6f8;_0x2c575e[_0x55f9f0(0x35d)](_0x56a3b8,![]),_0x2c575e[_0x55f9f0(0x36a)](_0x362d5f);},document['body'][_0x66d6f8(0x658)+'dChil'+'d'](_0x1a76e7);}else _0x2c575e['vSWcK'](!_0x29141e,_0x40dc69)&&_0x40dc69[_0x66d6f8(0x424)+'e']();}catch(_0x44780a){}}function _0x1dad39(){var _0x3d46ac=_0xc654b5;if(_0x2c575e[_0x3d46ac(0x539)](_0x3d46ac(0x3e9),_0x2c575e[_0x3d46ac(0x902)])){var _0x7ed4e=_0x141914[0x1f6c+-0x16ca+-0x8a1*0x1][_0x3d46ac(0xad4)]();if(_0x7ed4e)_0xf01341=_0x7ed4e;}else{if(_0x2cbc87())return null;var _0x198b56=document[_0x3d46ac(0x95b)+_0x3d46ac(0x740)+'ById']('sakur'+'a-sw-'+'v2');if(_0x198b56)return _0x198b56;if(!document[_0x3d46ac(0x44e)]||!document[_0x3d46ac(0x44e)][_0x3d46ac(0x658)+_0x3d46ac(0x61d)+'d'])return null;try{if('wdfjM'!==_0x3d46ac(0x1a5))try{var _0x5c2e24=_0x2c575e[_0x3d46ac(0x36a)](_0x1bc141);return _0x5c2e24&&_0x5c2e24[_0x3d46ac(0xa0c)]?_0x5c2e24[_0x3d46ac(0xa0c)][-0x314*0x8+0x1*-0x25a9+0x3e4a]:null;}catch(_0x5f5596){return null;}else{if(!document['getEl'+_0x3d46ac(0x740)+_0x3d46ac(0x466)](_0x3d46ac(0x72f)+_0x3d46ac(0x6d9)+_0x3d46ac(0x393)+'s')){var _0x29c0d5=document[_0x3d46ac(0x7ec)+'eElem'+_0x3d46ac(0x614)](_0x3d46ac(0x7fb));_0x29c0d5['id']=_0x3d46ac(0x72f)+'a-sw-'+_0x3d46ac(0x393)+'s',_0x29c0d5[_0x3d46ac(0xb42)+_0x3d46ac(0x19b)+'t']='#saku'+_0x3d46ac(0x1ba)+_0x3d46ac(0x573)+_0x3d46ac(0x6f2)+'itial'+'}',(document['head']||document['docum'+_0x3d46ac(0x97b)+_0x3d46ac(0x740)])[_0x3d46ac(0x658)+'dChil'+'d'](_0x29c0d5);}return _0x198b56=document[_0x3d46ac(0x7ec)+_0x3d46ac(0x83e)+_0x3d46ac(0x614)](_0x3d46ac(0x624)),_0x198b56['id']=_0x2c575e['dGykh'],document[_0x3d46ac(0x44e)][_0x3d46ac(0x658)+'dChil'+'d'](_0x198b56),_0x198b56;}}catch(_0x4c526e){return null;}}}function _0x362d5f(){var _0x514678=_0xc654b5,_0x578e52=_0x2c575e[_0x514678(0x36a)](_0x1dad39);if(!_0x578e52)return _0x36fbcd;if(_0x578e52[_0x514678(0x43c)+'et']['api'])return _0x578e52['api'];try{return _0x4431a1(_0x578e52);}catch(_0x35c1cf){return _0x578e52['datas'+'et'][_0x514678(0x26f)]='1',_0x578e52['api']=_0x36fbcd,console[_0x514678(0x3fe)](_0x2c575e['AVqcF'],_0x2c575e[_0x514678(0x71d)]('color'+':',_0x24f5d1),_0x35c1cf),_0x36fbcd;}}function _0x4431a1(_0x7dcfa7){var _0x1d2437=_0xc654b5,_0x59907e={'zOnjR':_0x2c575e['GRdcC'],'aDfSW':'trans'+_0x1d2437(0x256)+'t','dSaoD':_0x1d2437(0xca2)+'1b','gDMOS':_0x1d2437(0x40b)+'f5','kKrki':'ibLVF','RZIQL':function(_0x336115){return _0x336115();},'WKvPi':'insta'+_0x1d2437(0x755)+'e().e'+_0x1d2437(0x13e)+_0x1d2437(0x8d6)+_0x1d2437(0x73e),'KaDGb':function(_0x75b40b,_0x169808,_0x11b95b){return _0x75b40b(_0x169808,_0x11b95b);}};_0x7dcfa7['style'][_0x1d2437(0x4af)+'xt']=_0x2c575e[_0x1d2437(0x3f4)]('posit'+_0x1d2437(0x626)+_0x1d2437(0x7da)+'left:'+'12px;'+'top:1'+_0x1d2437(0xc0c)+_0x1d2437(0x962)+_0x1d2437(0x7d0)+'74830'+_0x1d2437(0x332)+_0x1d2437(0x7ae)+_0x1d2437(0x9b7)+'n(52v'+'w,620'+_0x1d2437(0x4b1)+_0x1d2437(0x362)+'ight:'+_0x1d2437(0x545)+(_0x1d2437(0x3ce)+_0x1d2437(0x1b5)+_0x1d2437(0x51c)+_0x1d2437(0x302)+_0x1d2437(0x920)+_0x1d2437(0x40b)+_0x1d2437(0x660)+_0x1d2437(0xb82)+'1px\x20s'+_0x1d2437(0x324)+'rgba('+'255,1'+'43,17'+'7,.5)'+_0x1d2437(0x937)+_0x1d2437(0x6fe)+'dius:'+'14px;')+(_0x1d2437(0x6ea)+'12px/'+'1.5\x20u'+_0x1d2437(0xa66)+_0x1d2437(0xc76)+_0x1d2437(0x8a2)+_0x1d2437(0x3c4)+',mono'+_0x1d2437(0xaf3)+_0x1d2437(0x9dd)+'shado'+_0x1d2437(0x1a6)+'0px\x205'+'0px\x20-'+'20px\x20'+'#000;'),'displ'+'ay:fl'+_0x1d2437(0x180)+_0x1d2437(0xb80)+'recti'+'on:co'+'lumn;'+_0x1d2437(0x91a)+'low:h'+'idden'+';'),_0x7dcfa7[_0x1d2437(0xbc8)+'HTML']=_0x2c575e['JSsuD'](_0x2c575e[_0x1d2437(0x49e)](_0x2c575e[_0x1d2437(0x49e)](_0x2c575e[_0x1d2437(0x8e1)](_0x2c575e['FDWrG'](_0x2c575e[_0x1d2437(0x4aa)](_0x2c575e['SJdyS']+_0x2c575e['xMTMF']+_0x24f5d1+('\x22>sak'+_0x1d2437(0x5b8)+_0x1d2437(0x578)+_0x1d2437(0x5de)+_0x1d2437(0x5a6)),_0x1d2437(0xc91)+_0x1d2437(0x653)+_0x1d2437(0xcc1)+_0x1d2437(0x6c0)+_0x1d2437(0xb32)+'e=\x22co'+'lor:#'+'7a658'+_0x1d2437(0x8f1)+'t-siz'+'e:11p'+_0x1d2437(0xbd4)+_0x1d2437(0x9d8)+_0x1d2437(0xbe9)+'px;bo'+_0x1d2437(0xb82)+_0x1d2437(0x7e7)+'olid\x20'+_0x1d2437(0x534)+'255,1'+'43,17'+_0x1d2437(0x593)+_0x1d2437(0x623)+_0x1d2437(0x693)+_0x1d2437(0xa37)+_0x1d2437(0x89c)+_0x1d2437(0x237)+'?</sp'+_0x1d2437(0x4de))+('<span'+'\x20id=\x22'+_0x1d2437(0x657)+'tatus'+_0x1d2437(0xb9d)+'le=\x22c'+'olor:'+_0x1d2437(0x8a6)+_0x1d2437(0x778)+'aitin'+'g\x20for'+'\x20game'+'\x20fram'+_0x1d2437(0x5ca)+_0x1d2437(0x92b))+_0x2c575e[_0x1d2437(0xa1f)]+_0x24f5d1+_0x2c575e[_0x1d2437(0x5f4)]+(_0x1d2437(0xa48)+_0x1d2437(0x60a)+_0x1d2437(0x133)+_0x1d2437(0x695)+_0x1d2437(0x227)+'tyle='+_0x1d2437(0xc8b)+_0x1d2437(0x451)+_0x1d2437(0x94b)+_0x1d2437(0x182)+'ent;b'+_0x1d2437(0x603)+_0x1d2437(0xc39)+_0x1d2437(0xca9)+_0x1d2437(0x789)+_0x1d2437(0x1ed)+'143,1'+_0x1d2437(0x2c0)+');col'+_0x1d2437(0xa53)+_0x1d2437(0x60b)+';bord'+_0x1d2437(0x6fe)+'dius:'+_0x1d2437(0xbd5)+_0x1d2437(0x619)+'g:4px'+'\x208px;'+_0x1d2437(0x7a1)+_0x1d2437(0x432)+_0x1d2437(0x1f3)+_0x1d2437(0x918)+'n</bu'+'tton>')+(_0x1d2437(0xa48)+_0x1d2437(0x60a)+'=\x22sw2'+_0x1d2437(0x67c)+_0x1d2437(0xb63)+'\x22back'+_0x1d2437(0x451)+_0x1d2437(0x94b)+'nspar'+'ent;b'+_0x1d2437(0x603)+':1px\x20'+'solid'+_0x1d2437(0x789)+'(255,'+_0x1d2437(0x287)+'77,.4'+_0x1d2437(0x4e4)+'or:#f'+_0x1d2437(0x60b)+_0x1d2437(0x937)+_0x1d2437(0x6fe)+_0x1d2437(0xc23)+'7px;p'+_0x1d2437(0x619)+_0x1d2437(0x8fb)+_0x1d2437(0x486)+'curso'+'r:poi'+_0x1d2437(0x1f3)+'\x22>x</'+_0x1d2437(0xb66)+'n>')+_0x2c575e[_0x1d2437(0x25a)]+_0x2c575e[_0x1d2437(0x357)],_0x2c575e[_0x1d2437(0x7d3)])+(_0x1d2437(0xa48)+_0x1d2437(0x60a)+_0x1d2437(0x133)+'-spee'+_0x1d2437(0x552)+'yle=\x22'+_0x1d2437(0x3ce)+'round'+':tran'+_0x1d2437(0xb9a)+_0x1d2437(0x1a3)+_0x1d2437(0xb82)+'1px\x20s'+_0x1d2437(0x324)+_0x1d2437(0x534)+_0x1d2437(0xc88)+_0x1d2437(0x966)+_0x1d2437(0x2f1)+_0x1d2437(0x38c)+_0x1d2437(0x3e5)+_0x1d2437(0xacd)+_0x1d2437(0xac4)+'r-rad'+'ius:7'+'px;pa'+_0x1d2437(0x9fc)+':4px\x20'+_0x1d2437(0x867)+'curso'+'r:poi'+'nter;'+_0x1d2437(0x44a)+'ed\x20of'+_0x1d2437(0x8aa)+_0x1d2437(0x19a)),'<inpu'+'t\x20id='+'\x22sw2-'+_0x1d2437(0x7b7)+'r\x22\x20ty'+'pe=\x22r'+_0x1d2437(0x646)+'\x20min='+'\x221\x22\x20m'+_0x1d2437(0x979)+'\x22\x20ste'+_0x1d2437(0x403)+_0x1d2437(0xa52)+_0x1d2437(0x8fa)+_0x1d2437(0xa93)+_0x1d2437(0x3ae)+_0x1d2437(0x1b3)+_0x1d2437(0x9b8)+'x;acc'+_0x1d2437(0x91f)+_0x1d2437(0x920))+_0x24f5d1,_0x1d2437(0xb1c))+('<span'+'\x20id=\x22'+_0x1d2437(0xcc9)+_0x1d2437(0x5b6)+'label'+_0x1d2437(0xb9d)+_0x1d2437(0xb92)+_0x1d2437(0x920)+_0x1d2437(0x8a6)+'c9;mi'+'n-wid'+'th:34'+_0x1d2437(0xa1c)+'1.0x<'+'/span'+'>')+(_0x1d2437(0xa48)+_0x1d2437(0x60a)+'=\x22sw2'+_0x1d2437(0x6f0)+'\x22\x20sty'+_0x1d2437(0x639)+_0x1d2437(0x441)+_0x1d2437(0x3e4)+_0x1d2437(0xbe1)+_0x1d2437(0x256)+_0x1d2437(0xcce)+'der:1'+'px\x20so'+_0x1d2437(0x884)+'gba(2'+_0x1d2437(0x7a0)+'3,177'+_0x1d2437(0x2d8)+_0x1d2437(0x1cc)+':#f7e'+'ef5;b'+'order'+'-radi'+_0x1d2437(0x6f3)+'x;pad'+_0x1d2437(0x9d8)+'4px\x209'+'px;cu'+_0x1d2437(0x188)+_0x1d2437(0x964)+_0x1d2437(0xc6d)+_0x1d2437(0x3aa)+_0x1d2437(0x6ae)+'F9)</'+'butto'+'n>'),'<span'+'\x20id=\x22'+_0x1d2437(0x8d9)+_0x1d2437(0xa96)+'style'+_0x1d2437(0x963)+'or:#8'+_0x1d2437(0x8fc)+_0x1d2437(0x74b)+_0x1d2437(0x880)+_0x1d2437(0x928)+'e\x20wal'+'king\x20'+_0x1d2437(0x558)+_0x1d2437(0x8a4)+_0x1d2437(0x993)+'umpin'+_0x1d2437(0x2d5)+_0x1d2437(0xc4f)+_0x1d2437(0x89b)+_0x1d2437(0x771)+'is\x20wh'+_0x1d2437(0x31c)+_0x1d2437(0x392)+'>')+(_0x1d2437(0x169)+'>')+_0x2c575e['BnbKI']+('max-h'+_0x1d2437(0x6cf)+_0x1d2437(0xa7d)+';\x22>No'+_0x1d2437(0xa0f)+'rt\x20ye'+_0x1d2437(0x58d)+'his\x20p'+_0x1d2437(0x42c)+_0x1d2437(0x408)+'es\x20it'+'self\x20'+_0x1d2437(0xce4)+_0x1d2437(0xb17)+'ame\x20f'+_0x1d2437(0xca7)+'loads'+_0x1d2437(0xa8e)+'\x20cons'+'ole\x20n'+'eeded'+_0x1d2437(0x1a4)+_0x1d2437(0x4fd)+'tays\x20'+'empty'+_0x1d2437(0xcae)+'permo'+'nkey\x20'+_0x1d2437(0x3f5)+_0x1d2437(0xcd7)+'ectin'+'g\x20int'+_0x1d2437(0x659)+_0x1d2437(0x2e9)+_0x1d2437(0x70d)+_0x1d2437(0x90a)+_0x1d2437(0x2a4)+_0x1d2437(0x780)+_0x1d2437(0x36e)+'>'),_0x1d2437(0x169)+'>');var _0xf5dcd6=_0x7dcfa7['query'+'Selec'+_0x1d2437(0x3b5)]('#sw2-'+_0x1d2437(0xa50)+'s'),_0x29c0e6=_0x7dcfa7['query'+'Selec'+_0x1d2437(0x3b5)](_0x2c575e[_0x1d2437(0x54f)]),_0x11423a=_0x7dcfa7['query'+_0x1d2437(0x952)+_0x1d2437(0x3b5)](_0x1d2437(0x995)+_0x1d2437(0x49a)),_0x4b810a=_0x7dcfa7[_0x1d2437(0x5ef)+_0x1d2437(0x952)+'tor'](_0x2c575e['KlAKv']),_0x1c75b6=_0x7dcfa7[_0x1d2437(0x5ef)+_0x1d2437(0x952)+'tor'](_0x1d2437(0x995)+'x'),_0x13ff49=_0x7dcfa7[_0x1d2437(0x5ef)+_0x1d2437(0x952)+_0x1d2437(0x3b5)](_0x2c575e[_0x1d2437(0x833)]),_0x55d2bc=_0x7dcfa7['query'+_0x1d2437(0x952)+_0x1d2437(0x3b5)](_0x1d2437(0x995)+'body'),_0xd8ecb6=_0x7dcfa7[_0x1d2437(0x5ef)+_0x1d2437(0x952)+_0x1d2437(0x3b5)](_0x2c575e['PpYZk']),_0x498d5f=_0x7dcfa7[_0x1d2437(0x5ef)+'Selec'+_0x1d2437(0x3b5)]('#sw2-'+_0x1d2437(0x560)),_0x2e20d1=_0x7dcfa7[_0x1d2437(0x5ef)+'Selec'+_0x1d2437(0x3b5)](_0x2c575e[_0x1d2437(0x51a)]),_0x17a47e=_0x7dcfa7[_0x1d2437(0x5ef)+_0x1d2437(0x952)+_0x1d2437(0x3b5)](_0x1d2437(0x995)+_0x1d2437(0x7b7)+_0x1d2437(0xbc0)+'l'),_0x1cc1f2=_0x7dcfa7['query'+_0x1d2437(0x952)+_0x1d2437(0x3b5)](_0x2c575e[_0x1d2437(0xc59)]),_0x5c21c6=null,_0x28dc89=![];function _0x34875c(){var _0x3fa785=_0x1d2437;if(_0x55d2bc)_0x55d2bc['style']['displ'+'ay']=_0x28dc89?'':'none';if(_0x13ff49)_0x13ff49['textC'+_0x3fa785(0x19b)+'t']=_0x28dc89?'close':_0x2c575e['EcyKm'];_0x7dcfa7[_0x3fa785(0x7fb)]['width']=_0x28dc89?_0x3fa785(0x873)+_0x3fa785(0x632)+'20px)':'auto',_0x7dcfa7[_0x3fa785(0x7fb)][_0x3fa785(0x3ce)+_0x3fa785(0x1b5)]=_0x28dc89?_0x2c575e['EvLLQ']:_0x3fa785(0x534)+_0x3fa785(0xaf1)+_0x3fa785(0xb4d)+'9)';}if(_0x13ff49)_0x13ff49[_0x1d2437(0x5f0)+'ck']=function(){_0x28dc89=!_0x28dc89,_0x34875c();};_0x2c575e['HadTG'](_0x34875c);if(_0x1c75b6)_0x1c75b6[_0x1d2437(0x5f0)+'ck']=function(){_0x56a3b8(!![]);};if(_0xd8ecb6)_0xd8ecb6['oncli'+'ck']=function(){var _0x1b3894=_0x1d2437;_0x1b3894(0xcb7)===_0x1b3894(0xcb7)?_0x44c34f('snaps'+_0x1b3894(0x7d7)):_0x955e14();};var _0x22edca=![];function _0x138c2b(){var _0x3a714a=_0x1d2437;_0x44c34f(_0x3a714a(0x560),{'on':_0x22edca,'factor':_0x2c575e[_0x3a714a(0xa01)](parseFloat,_0x2e20d1[_0x3a714a(0x240)])||-0xce*0x3+0xe5*0x3+-0x44});}if(_0x498d5f)_0x498d5f['oncli'+'ck']=function(){var _0x28f4a0=_0x1d2437;_0x22edca=!_0x22edca,_0x498d5f['textC'+_0x28f4a0(0x19b)+'t']=_0x22edca?_0x59907e[_0x28f4a0(0x234)]:'Speed'+_0x28f4a0(0x6e2),_0x498d5f[_0x28f4a0(0x7fb)][_0x28f4a0(0x3ce)+_0x28f4a0(0x1b5)]=_0x22edca?_0x24f5d1:_0x59907e[_0x28f4a0(0xafd)],_0x498d5f[_0x28f4a0(0x7fb)][_0x28f4a0(0x1cc)]=_0x22edca?_0x59907e['dSaoD']:_0x59907e[_0x28f4a0(0x1b4)],_0x138c2b();};if(_0x2e20d1)_0x2e20d1[_0x1d2437(0x8d3)+'ut']=function(){var _0x16d9f8=_0x1d2437;if(_0x17a47e)_0x17a47e[_0x16d9f8(0xb42)+'onten'+'t']=_0x2c575e[_0x16d9f8(0x71d)]((parseFloat(_0x2e20d1['value'])||-0x1*0x24a1+0x1*-0x1b6e+0x4010)[_0x16d9f8(0x297)+'ed'](-0x1c62+-0xbc6+-0x17*-0x1bf),'x');_0x2c575e['HadTG'](_0x138c2b);};if(_0x4b810a)_0x4b810a['oncli'+'ck']=function(){var _0x44f06f=_0x1d2437,_0x1ac1d3={'mpUlb':_0x59907e[_0x44f06f(0x6e3)],'opDhH':function(_0x4b861b,_0x1e0a1f){return _0x4b861b===_0x1e0a1f;},'HcvnC':_0x44f06f(0xc05),'eJfza':function(_0x4f537c,_0x222490){return _0x4f537c+_0x222490;}},_0x464411=_0x241738+'\x0a'+(_0x5c21c6?JSON[_0x44f06f(0x1ee)+_0x44f06f(0x1bf)](_0x5c21c6,null,0x1*-0xc29+0x1*0xe7c+0x36*-0xb):'')+'\x0a'+_0x911c44,_0x2e102c=function(){var _0x515903=_0x44f06f;if(_0x1ac1d3[_0x515903(0x134)](_0x515903(0x39b),_0x1ac1d3[_0x515903(0xbd0)]))return _0x110828[_0x515903(0x764)+'e']=_0x51d9b7[_0x515903(0x764)+'e']||_0x1ac1d3[_0x515903(0x4c1)],new _0x149756(_0x5dd823['buffe'+'r']);else{if(_0x4b810a)_0x4b810a[_0x515903(0xb42)+'onten'+'t']=_0x515903(0x23e)+'d';}};if(navigator[_0x44f06f(0x528)+_0x44f06f(0x3e6)]&&navigator[_0x44f06f(0x528)+'oard'][_0x44f06f(0x579)+'Text'])navigator[_0x44f06f(0x528)+_0x44f06f(0x3e6)]['write'+_0x44f06f(0x4cb)](_0x464411)[_0x44f06f(0x2e7)](_0x2e102c,function(){_0x1f891b();});else _0x59907e['RZIQL'](_0x1f891b);function _0x1f891b(){var _0x1d792e=_0x44f06f;if('ibLVF'!==_0x59907e[_0x1d792e(0xb9e)])return _0x1ac1d3['eJfza']('0x'+(_0x52c116['o']<-0x226c+-0x1*0x19f+0x240b?'?':_0x4dab8d['o'][_0x1d792e(0x265)+_0x1d792e(0xb19)](-0x1f98+-0x14b0+0x3458)),'\x20(')+_0x3d2425[_0x1d792e(0xabd)]+')';else{var _0xaf5116=document['creat'+_0x1d792e(0x83e)+'ent'](_0x1d792e(0x1bb)+_0x1d792e(0x99d));_0xaf5116['value']=_0x464411;if(!document[_0x1d792e(0x44e)])return;document[_0x1d792e(0x44e)]['appen'+_0x1d792e(0x61d)+'d'](_0xaf5116),_0xaf5116['selec'+'t']();try{document['execC'+_0x1d792e(0x7c4)+'d'](_0x1d792e(0xa4d)),_0x59907e[_0x1d792e(0x865)](_0x2e102c);}catch(_0x309695){}_0xaf5116[_0x1d792e(0x424)+'e']();}}};_0x2c575e['oGqJX'](setTimeout,function(){var _0x1f3597=_0x1d2437,_0x359326=('3|4|0'+_0x1f3597(0x883))['split']('|'),_0x40c93c=0x4d9*-0x4+-0x1b8f+0x2ef3;while(!![]){switch(_0x359326[_0x40c93c++]){case'0':_0xf5dcd6['textC'+_0x1f3597(0x19b)+'t']=_0x1f3597(0x9b0)+_0x1f3597(0x994)+_0x1f3597(0x2e2)+_0x1f3597(0x16b)+_0x1f3597(0x996)+'me\x20no'+'t\x20inj'+_0x1f3597(0x13c)+'?';continue;case'1':_0xf5dcd6[_0x1f3597(0x7fb)][_0x1f3597(0x1cc)]='#ffb3'+'c7';continue;case'2':_0x11423a[_0x1f3597(0xb42)+'onten'+'t']=_0x2c575e[_0x1f3597(0x193)](_0x2c575e['fIaCc'](_0x1f3597(0x60d)+'ame\x20f'+_0x1f3597(0xca7)+'never'+_0x1f3597(0x8ab)+_0x1f3597(0xa4a)+_0x1f3597(0x5e9)+_0x1f3597(0x63f)+'ort.\x0a'+'\x0a'+('This\x20'+'panel'+'\x20prov'+_0x1f3597(0x836)+_0x1f3597(0x5dd)+_0x1f3597(0x514)+_0x1f3597(0xa15)+_0x1f3597(0x562)+'alled'+_0x1f3597(0x526)+'runni'+_0x1f3597(0x209)+'\x20the\x20'+_0x1f3597(0x454)+_0x1f3597(0x77e)),_0x1f3597(0x599)+'e\x20rem'+'ainin'+'g\x20sus'+_0x1f3597(0xc82)+'\x20are:'+'\x0a\x0a')+_0x2c575e[_0x1f3597(0x6a5)]+(_0x1f3597(0x38a)+_0x1f3597(0x52b)+'age\x20h'+_0x1f3597(0xb29)+'t\x20bee'+_0x1f3597(0xacb)+_0x1f3597(0x32a)+_0x1f3597(0x8c7)+'e\x20ins'+'talli'+_0x1f3597(0x998))+_0x2c575e[_0x1f3597(0x1b6)],_0x1f3597(0x480)+_0x1f3597(0x142)+_0x1f3597(0xb3e)+'—\x20two'+_0x1f3597(0x1c6)+_0x1f3597(0x529)+'\x20UWMK'+'\x20both'+'\x20patc'+'h\x20Web'+_0x1f3597(0xa8f)+_0x1f3597(0x307)+'nstan'+_0x1f3597(0x598)+'.\x0a\x0a')+('Reloa'+'d\x20the'+'\x20game'+'\x20page'+_0x1f3597(0xc11)+'\x20and\x20'+_0x1f3597(0xa45)+'\x20this'+_0x1f3597(0x924)+_0x1f3597(0xb60)+'in.');continue;case'3':if(_0x5c21c6)return;continue;case'4':if(!_0xf5dcd6||!_0x11423a)return;continue;}break;}},-0x115*-0x89+0x5635*-0x1+0xac58);var _0x2d0474={'set':function(_0xf083de){var _0x4c3d7e=_0x1d2437,_0x349889={'loVpn':function(_0x38acb6,_0x3a3376){var _0x3c5a9b=_0x3c88;return _0x2c575e[_0x3c5a9b(0xc6e)](_0x38acb6,_0x3a3376);}};_0x5c21c6=_0xf083de;if(_0x4b810a)_0x4b810a[_0x4c3d7e(0x7fb)]['displ'+'ay']='';if(_0x29c0e6){if(_0x4c3d7e(0x926)!==_0x4c3d7e(0x926)){var _0x1c4ad1=_0x57698e['max'](0xa*0x37d+0x43*0x91+-0x246a*0x2,_0x305a0b['inner'+'Width']||_0x359539['docum'+'entEl'+'ement']['clien'+_0x4c3d7e(0x5cd)+'h']||-0x23*-0x4d+-0x1*0x1849+0xdc2),_0x148aa9=_0x1171bb[_0x4c3d7e(0x54c)](0x21d5*0x1+-0x1239+-0xf9b,_0x19a39f[_0x4c3d7e(0xbc8)+_0x4c3d7e(0x8f5)+'t']||_0x391edf['docum'+_0x4c3d7e(0x97b)+_0x4c3d7e(0x740)]['clien'+_0x4c3d7e(0x32c)+'ht']||0x16dc+0x19*-0xb3+-0x561);return(_0x5c3840['cv'][_0x4c3d7e(0x1b3)]!==_0x1c4ad1||_0x349889[_0x4c3d7e(0x5cc)](_0x3c56cc['cv']['heigh'+'t'],_0x148aa9))&&(_0x54d2f2['cv'][_0x4c3d7e(0x1b3)]=_0x1c4ad1,_0x31366e['cv']['heigh'+'t']=_0x148aa9),{'w':_0x1c4ad1,'h':_0x148aa9};}else{_0x29c0e6['textC'+'onten'+'t']='v'+(_0xf083de[_0x4c3d7e(0x7ed)+'on']||'?');var _0x5f3225=_0x24ba5f,_0x56e7f6=_0xf083de[_0x4c3d7e(0x7ed)+'on']||'';_0x29c0e6[_0x4c3d7e(0x7fb)][_0x4c3d7e(0x1cc)]=_0x56e7f6===_0x5f3225?_0x24f5d1:_0x2c575e[_0x4c3d7e(0x449)],_0x29c0e6[_0x4c3d7e(0x7fb)][_0x4c3d7e(0xac4)+'rColo'+'r']=_0x56e7f6===_0x5f3225?_0x2c575e[_0x4c3d7e(0x216)]:'#ff6e'+'74';}}var _0x3dfa2f=_0xf083de['insta'+'nces']&&_0xf083de[_0x4c3d7e(0x142)+_0x4c3d7e(0x143)][_0x4c3d7e(0x6b2)+_0x4c3d7e(0xad7)+_0x4c3d7e(0x4d7)],_0x1079f6=Math[_0x4c3d7e(0x1b5)]((_0xf083de[_0x4c3d7e(0x493)+_0x4c3d7e(0x56b)]||-0x157*-0x15+-0x3*-0x289+-0x23be)/(0x63b+-0x1bf1+0x6*0x445));if(_0xf5dcd6){var _0x5436cc,_0xb054cf;if(_0x3dfa2f&&_0xf083de[_0x4c3d7e(0x981)+'y']&&_0xf083de[_0x4c3d7e(0x981)+'y']['FPSco'+_0x4c3d7e(0xad7)+_0x4c3d7e(0x4d7)])_0x5436cc=_0x2c575e[_0x4c3d7e(0x1ad)](_0x2c575e[_0x4c3d7e(0xad0)](_0x4c3d7e(0x9f1)+'·\x20'+Object['keys'](_0xf083de[_0x4c3d7e(0x142)+_0x4c3d7e(0x143)])[_0x4c3d7e(0xb90)+'h'],_0x2c575e[_0x4c3d7e(0x636)]),_0x1079f6)+'s',_0xb054cf=_0x2c575e[_0x4c3d7e(0xa73)];else{if(_0x2c575e[_0x4c3d7e(0x9ba)](_0xf083de['hooks'+'Appli'+'ed'],-0x2e2*-0x7+0x3*-0x5b+-0x15*0xe9)){if(_0x2c575e[_0x4c3d7e(0xc7a)](_0x4c3d7e(0x92e),_0x2c575e[_0x4c3d7e(0x75a)]))return _0xf47a2d['fov'];else _0x5436cc=_0x2c575e[_0x4c3d7e(0xad0)](_0x4c3d7e(0x4f7)+'\x20arme'+'d\x20·\x20',_0x1079f6)+'s',_0xb054cf=_0x2c575e['OjXgT'];}else _0xf083de['scrip'+'tData']?(_0x5436cc=_0x2c575e[_0x4c3d7e(0xcb2)](_0x2c575e[_0x4c3d7e(0x1ad)](_0x2c575e[_0x4c3d7e(0x4bb)],_0x1079f6),'s'),_0xb054cf=_0x2c575e['OjXgT']):(_0x5436cc=(_0xf083de[_0x4c3d7e(0x6dc)]&&_0xf083de[_0x4c3d7e(0x6dc)]['ok']?_0x4c3d7e(0x314)+_0x4c3d7e(0x21c):_0x4c3d7e(0x936)+'g\x20·\x20')+_0x1079f6+'s',_0xb054cf='#ffd4'+'8a');}_0xf5dcd6['textC'+_0x4c3d7e(0x19b)+'t']=_0x5436cc,_0xf5dcd6[_0x4c3d7e(0x7fb)][_0x4c3d7e(0x1cc)]=_0xb054cf;}_0x1cc1f2&&(_0x1cc1f2['textC'+_0x4c3d7e(0x19b)+'t']=_0xf083de['diff']&&_0xf083de['diff']['lengt'+'h']?'Diff\x20'+'vs\x20sn'+_0x4c3d7e(0x2f7)+_0x4c3d7e(0x729)+_0xf083de[_0x4c3d7e(0xc2f)][_0x4c3d7e(0xcb1)](',\x20'):_0x4c3d7e(0x6c1)+'ice\x20w'+'hile\x20'+'walki'+_0x4c3d7e(0x260)+'sprin'+'ting\x20'+_0x4c3d7e(0x32e)+'ping\x20'+_0x4c3d7e(0xb48)+_0x4c3d7e(0xc63)+_0x4c3d7e(0x985)+_0x4c3d7e(0x45e)+_0x4c3d7e(0xc63)+'h.');_0xf083de[_0x4c3d7e(0x560)]&&_0x498d5f&&(_0x22edca=!!_0xf083de[_0x4c3d7e(0x560)]['on'],_0x498d5f['textC'+_0x4c3d7e(0x19b)+'t']=_0x22edca?_0x2c575e[_0x4c3d7e(0x1b9)]:'Speed'+_0x4c3d7e(0x6e2),_0x498d5f[_0x4c3d7e(0x7fb)][_0x4c3d7e(0x3ce)+'round']=_0x22edca?_0x24f5d1:'trans'+_0x4c3d7e(0x256)+'t',_0x498d5f['style'][_0x4c3d7e(0x1cc)]=_0x22edca?_0x4c3d7e(0xca2)+'1b':_0x2c575e[_0x4c3d7e(0x5ec)],_0x17a47e&&_0xf083de['speed']['facto'+'r']&&(_0x17a47e['textC'+'onten'+'t']=Number(_0xf083de['speed'][_0x4c3d7e(0x7b7)+'r'])['toFix'+'ed'](0x2385+-0x18*-0xb2+-0x3434)+'x'));if(_0x11423a)try{_0x2c575e['KguEX']===_0x4c3d7e(0xb51)?_0x59907e[_0x4c3d7e(0x4c3)](_0x377b92,_0xb2e20a['on'],_0x476897):_0x11423a[_0x4c3d7e(0xb42)+_0x4c3d7e(0x19b)+'t']=_0x56be10(_0xf083de);}catch(_0x8c920c){_0x11423a[_0x4c3d7e(0xb42)+_0x4c3d7e(0x19b)+'t']=JSON['strin'+'gify'](_0xf083de,null,-0xa49+0x1f4e*-0x1+-0x2*-0x14cc);}console[_0x4c3d7e(0xa54)](_0x4c3d7e(0x184)+_0x4c3d7e(0xaff)+'\x20Skil'+_0x4c3d7e(0xa34)+'\x20repo'+'rt',_0x2c575e['UvRNg'](_0x4c3d7e(0x1cc)+':'+_0x24f5d1,_0x2c575e['xBPVZ']),_0xf083de),console['log'](_0x2c575e[_0x4c3d7e(0x7d8)](_0x2c575e[_0x4c3d7e(0x587)](_0x2c575e[_0x4c3d7e(0x49e)](_0x241738+'\x0a',JSON['strin'+'gify'](_0xf083de,null,0xa31*-0x3+-0x1*0x1b47+0x39db)),'\x0a'),_0x911c44));}};return _0x7dcfa7['datas'+'et']['api']='1',_0x7dcfa7[_0x1d2437(0x26f)]=_0x2d0474,_0x2d0474;}function _0x56be10(_0x254b06){var _0x4bc10c=_0xc654b5,_0x4c0211=[];_0x4c0211[_0x4bc10c(0x1e1)](_0x2c575e['pZkLc'](_0x2c575e[_0x4bc10c(0x9e8)](_0x4bc10c(0x96c)+_0x4bc10c(0xb6b)+(_0x254b06[_0x4bc10c(0x138)]||'?'),'\x20\x20(')+Math['round'](_0x2c575e[_0x4bc10c(0x2bf)](_0x254b06['elaps'+_0x4bc10c(0x56b)]||-0x48c*-0x7+0x2*-0x8ba+-0xe60,-0x7d*-0x4d+0xf*0x65+-0x279c)),'s)')),_0x4c0211[_0x4bc10c(0x1e1)](_0x2c575e[_0x4bc10c(0x1d9)](_0x4bc10c(0xaab)+'\x20\x20\x20\x20',_0x254b06[_0x4bc10c(0x701)]?_0x2c575e[_0x4bc10c(0x417)]:'no')+_0x2c575e[_0x4bc10c(0x396)]+(_0x254b06['il2Cp'+'pCont'+'ext']?_0x4bc10c(0x2b3):'no')+('\x20\x20\x20ty'+'pes\x20')+(_0x2c575e[_0x4bc10c(0xcca)](_0x254b06[_0x4bc10c(0x5d0)+'ount'],null)?_0x254b06[_0x4bc10c(0x5d0)+_0x4bc10c(0x941)]:'?')),_0x4c0211['push'](_0x2c575e[_0x4bc10c(0x5ba)](_0x2c575e[_0x4bc10c(0x381)]+_0x254b06['hooks'+'Appli'+'ed']+'/',_0x254b06['hooks'+_0x4bc10c(0x797)])+_0x2c575e[_0x4bc10c(0x907)]),_0x4c0211[_0x4bc10c(0x1e1)]('');var _0x2747ee=_0x254b06['insta'+'nces']||{},_0x3791b5=Object[_0x4bc10c(0xbd7)](_0x2747ee);!_0x3791b5[_0x4bc10c(0xb90)+'h']&&(_0x4c0211[_0x4bc10c(0x1e1)](_0x4bc10c(0xb7a)+_0x4bc10c(0xc20)+_0x4bc10c(0x437)+'\x20capt'+'ured\x20'+'yet.'),_0x4c0211[_0x4bc10c(0x1e1)](''),_0x4c0211[_0x4bc10c(0x1e1)](_0x4bc10c(0x30c)+'ooks\x20'+_0x4bc10c(0x3e2)+_0x4bc10c(0x9a5)+_0x4bc10c(0x80c)+'e\x27s\x20o'+'wn\x20Up'+'date('+_0x4bc10c(0x8d0)+_0x4bc10c(0x18b)+_0x4bc10c(0x5f8)+'ured\x20'+'means'),_0x4c0211['push'](_0x2c575e['GWXMz']));for(var _0x1ff48e=-0x1*0xddf+0x3ec+0x9f3;_0x1ff48e<_0x3791b5['lengt'+'h'];_0x1ff48e++){var _0x1eb45d=_0x3791b5[_0x1ff48e];_0x4c0211['push'](_0x2c575e[_0x4bc10c(0xcb2)](_0x1eb45d,'\x20@\x20')+_0x2747ee[_0x1eb45d]);}_0x4c0211['push']('');var _0x14a58b=_0x254b06[_0x4bc10c(0x981)+'y']||{},_0xda5fa1=Object[_0x4bc10c(0xbd7)](_0x14a58b);for(var _0x1f27a1=0x1a3*0x1+-0x71*-0x25+-0x11f8;_0x1f27a1<_0xda5fa1['lengt'+'h'];_0x1f27a1++){var _0x2f9e55=_0xda5fa1[_0x1f27a1],_0x25c6e0=_0x14a58b[_0x2f9e55];if(!_0x25c6e0||!_0x25c6e0[_0x4bc10c(0xb90)+'h'])continue;_0x4c0211[_0x4bc10c(0x1e1)](_0x4bc10c(0x8a5)+_0x2f9e55+'\x20'+new Array(Math[_0x4bc10c(0x54c)](-0xc5b*-0x3+0x560*-0x1+-0x1fb0,0x35d+-0x269f+0x8d9*0x4-_0x2f9e55[_0x4bc10c(0xb90)+'h']))[_0x4bc10c(0xcb1)]('─')),_0x4c0211['push']('\x20\x20off'+_0x4bc10c(0x522)+'\x20kind'+_0x4bc10c(0x480)+_0x4bc10c(0x24d)+'lue\x20\x20'+'\x20\x20\x20\x20\x20'+_0x4bc10c(0x480)+'raw');for(var _0x198c25=-0x209*0x11+0x135d+-0xd*-0x12c;_0x2c575e[_0x4bc10c(0x89e)](_0x198c25,_0x25c6e0[_0x4bc10c(0xb90)+'h']);_0x198c25++){var _0x114520=_0x25c6e0[_0x198c25],_0x355f21=typeof _0x114520['v']===_0x2c575e[_0x4bc10c(0x9df)]?_0x2c575e[_0x4bc10c(0x33d)](Math[_0x4bc10c(0x1b5)](_0x2c575e[_0x4bc10c(0x2c6)](_0x114520['v'],-0x1ba1*-0x1+-0x1c79+-0x2*-0x260)),0x445*0x9+-0x166*-0x1a+-0x5*0xe2d):_0x114520['v'];_0x4c0211['push'](_0x2c575e['soGra'](_0x2c575e[_0x4bc10c(0xb21)]('\x20\x20',('0x'+_0x114520['o']['toStr'+'ing'](0x4*0x5c9+0x1*0xa4d+-0x2161))['padEn'+'d'](0x1b69+0x314*0x7+-0x4b*0xa7))+'\x20',_0x114520['k'][_0x4bc10c(0x896)+'d'](0x1*-0x1619+-0x161*0xb+-0x1*-0x254f))+'\x20'+String(_0x355f21)[_0x4bc10c(0x896)+'d'](0xd71+0x7*-0x3f9+-0x1*-0xe6e)+'\x20'+(_0x114520['raw']||''));}_0x4c0211['push']('');}if(_0x254b06[_0x4bc10c(0xafb)+_0x4bc10c(0xa67)]&&_0x254b06[_0x4bc10c(0xafb)+_0x4bc10c(0xa67)]['lengt'+'h']){_0x4c0211['push'](_0x2c575e[_0x4bc10c(0x194)]);for(var _0xd3dd80=-0x2593+0xca7+0x18ec;_0xd3dd80<_0x254b06[_0x4bc10c(0xafb)+_0x4bc10c(0xa67)]['lengt'+'h'];_0xd3dd80++)_0x4c0211[_0x4bc10c(0x1e1)](_0x2c575e[_0x4bc10c(0x13d)]+_0x254b06[_0x4bc10c(0xafb)+_0x4bc10c(0xa67)][_0xd3dd80]);}return _0x4c0211[_0x4bc10c(0xcb1)]('\x0a');}window['addEv'+_0xc654b5(0x986)+_0xc654b5(0xa30)+'r'](_0x2c575e['UZyYW'],function(_0x14421a){var _0x2435e9=_0xc654b5,_0x421a24=_0x14421a[_0x2435e9(0x48e)];if(!_0x421a24||_0x421a24['__sak'+'ura']!==_0x44c084)return;try{if(_0x421a24['kind']===_0x2c575e[_0x2435e9(0x899)]){_0x2c575e[_0x2435e9(0x64e)](_0x362d5f)[_0x2435e9(0xa2b)]({'host':_0x421a24['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2c575e[_0x2435e9(0x869)](_0x421a24[_0x2435e9(0x74d)],'repor'+'t'))_0x362d5f()[_0x2435e9(0xa2b)](_0x421a24[_0x2435e9(0x30f)+'t']);}catch(_0x4587ef){console[_0x2435e9(0x3fe)](_0x2c575e[_0x2435e9(0x330)],_0x2c575e['uclHX']+_0x24f5d1,_0x4587ef);}});function _0x1d0b4c(){var _0x366e9e=_0xc654b5;if(_0x2c575e[_0x366e9e(0x539)]('jZZQd',_0x2c575e['eXbar'])){if(_0x4babe2[_0x366e9e(0x62d)])_0x2c30ad(!![]);}else _0x56a3b8(!![]);}if(document[_0xc654b5(0x44e)])_0x1d0b4c();else document[_0xc654b5(0x9b3)+_0xc654b5(0x986)+_0xc654b5(0xa30)+'r'](_0xc654b5(0x476)+'ntent'+_0xc654b5(0x94d)+'d',_0x1d0b4c,{'once':!![]});return;}window[_0xc654b5(0xcd4)+'URA_S'+_0xc654b5(0x9c7)]=window[_0xc654b5(0xcd4)+'URA_S'+_0xc654b5(0x9c7)]||{'at':Date['now']()};function _0x566477(_0x30ed4e,_0x14bf20){var _0xb729a2=_0xc654b5,_0x418bd5={'__sakura':_0x44c084,'kind':_0x30ed4e};if(_0x14bf20){for(var _0x40154a in _0x14bf20)_0x418bd5[_0x40154a]=_0x14bf20[_0x40154a];}try{if(window['paren'+'t']&&window[_0xb729a2(0x256)+'t']!==window)window['paren'+'t']['postM'+_0xb729a2(0x769)+'e'](_0x418bd5,'*');}catch(_0x516ff9){}try{if(window[_0xb729a2(0xc3e)]&&_0x2c575e[_0xb729a2(0x4ea)](window['top'],window))window[_0xb729a2(0xc3e)]['postM'+_0xb729a2(0x769)+'e'](_0x418bd5,'*');}catch(_0x228d14){}}console['log'](_0xc654b5(0x184)+'kura]'+_0xc654b5(0x561)+'LAYER'+_0xc654b5(0xab9)+'VE\x20v'+_0x24ba5f,_0x2c575e[_0xc654b5(0x9e8)](_0x2c575e['kKoFC'](_0x2c575e[_0xc654b5(0x425)],_0x24f5d1),_0x2c575e['hBhqi']),{'host':_0x44a57f,'href':location['href'],'version':_0x24ba5f}),_0x2c575e[_0xc654b5(0xc15)](_0x566477,_0x2c575e[_0xc654b5(0x899)],{'host':_0x44a57f,'role':_0x23662e});var _0x3b0a0e=window['__SAK'+_0xc654b5(0xc0b)+_0xc654b5(0x9c7)]&&window['__SAK'+'URA_S'+_0xc654b5(0x9c7)]['at']||Date[_0xc654b5(0x53a)]();window['addEv'+'entLi'+_0xc654b5(0xa30)+'r'](_0x2c575e['UZyYW'],function(_0x340d54){var _0x2bbea3=_0xc654b5;try{var _0x2f8a20=_0x340d54&&_0x340d54[_0x2bbea3(0x48e)];if(!_0x2f8a20||_0x2f8a20[_0x2bbea3(0x951)+_0x2bbea3(0xc01)]!==_0x44c084||_0x2c575e['QQqkZ'](_0x2f8a20['kind'],'cmd'))return;_0x315fa9(_0x2f8a20[_0x2bbea3(0xc60)],_0x2f8a20[_0x2bbea3(0x4a8)]);}catch(_0x3cd2bf){}});try{if(_0x2c575e[_0xc654b5(0xc6e)](_0x2c575e[_0xc654b5(0x96e)],_0x2c575e[_0xc654b5(0x96e)])){var _0x290171=_0x596cea[_0x7174e4];for(var _0x2fc02f=0x807+-0x1742+0xf3b;_0x2c575e['lIBPT'](_0x2fc02f,_0x290171[_0xc654b5(0xb90)+'h']);_0x2fc02f++){_0x4cae14[_0x2c575e[_0xc654b5(0x193)](_0x36e85f+_0xc654b5(0xb4b),_0x290171[_0x2fc02f]['o'][_0xc654b5(0x265)+_0xc654b5(0xb19)](-0x2b*0x34+0x1c56+-0x138a))]=_0x290171[_0x2fc02f]['v'];}}else{var _0x3314e7=new BroadcastChannel(_0x2c575e['OOJPn']);_0x3314e7['onmes'+_0xc654b5(0x505)]=function(_0x204a7c){var _0x51732c=_0xc654b5,_0x1e5e91=_0x204a7c['data'];if(_0x1e5e91&&_0x2c575e['hTIaS'](_0x1e5e91['__sak'+_0x51732c(0xc01)],_0x44c084)&&_0x1e5e91['kind']===_0x2c575e['LkZpH'])_0x2c575e[_0x51732c(0x714)](_0x315fa9,_0x1e5e91['cmd'],_0x1e5e91['arg']);};}}catch(_0x104375){}var _0x4e837a=[];(function _0x23c27c(){var _0x282272=_0xc654b5,_0x248c3b={'xcOXO':function(_0x5b9456,_0x1802b4){return _0x5b9456!==_0x1802b4;},'Wbbfh':_0x2c575e['DjeUj']},_0x50325b=[_0x2c575e[_0x282272(0xbdb)],_0x282272(0x3fe),_0x282272(0x384),_0x282272(0x5ae),_0x282272(0x16c)];for(var _0x177bab=0x95*0x42+0xf65*-0x2+-0x7a0;_0x177bab<_0x50325b[_0x282272(0xb90)+'h'];_0x177bab++){(function(_0x5c083e){var _0x1c6a87=_0x282272,_0x4e4029=console[_0x5c083e];if(typeof _0x4e4029!==_0x1c6a87(0x24b)+_0x1c6a87(0x664))return;console[_0x5c083e]=function(){var _0x2bd766=_0x1c6a87;try{var _0x221895='';for(var _0x267dba=0x1f2d+0x261c+-0x4549;_0x267dba<arguments['lengt'+'h'];_0x267dba++){var _0x3c7a38=arguments[_0x267dba];if(typeof _0x3c7a38===_0x2bd766(0x1ee)+'g')_0x221895+=_0x3c7a38;else{if(_0x3c7a38&&_0x3c7a38[_0x2bd766(0xa26)+'ge'])_0x221895+=_0x3c7a38['messa'+'ge'];}}if(_0x221895['index'+'Of'](_0x241738)!==-(-0x11f+0x595*-0x3+-0xf*-0x131))return _0x4e4029['apply'](console,arguments);if(_0x248c3b['xcOXO'](_0x221895[_0x2bd766(0x208)+'Of'](_0x248c3b[_0x2bd766(0xc0a)]),-(0x9de+0x248d+-0x1a*0x1c9))){var _0x15dfff=_0x221895['slice'](0x253d*-0x1+-0x564+0x2aa1,0x6f5*-0x3+-0x7bf+0x4f7*0x6);if(_0x4e837a[_0x2bd766(0x208)+'Of'](_0x15dfff)===-(-0x22ab+0x2c3*-0x9+0x3b87)&&_0x4e837a[_0x2bd766(0xb90)+'h']<-0x1*0x3ee+-0x130d+0x1737)_0x4e837a[_0x2bd766(0x1e1)](_0x15dfff);}}catch(_0x5e8cfb){}return _0x4e4029['apply'](console,arguments);};}(_0x50325b[_0x177bab]));}}());var _0x5aad2a={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x3c4e89=null,_0x14884d=null,_0x5cc048=-(-0x131b+0x79+0x12a3),_0x1cbec3=null;function _0x20ebd2(_0x146316){var _0x2d504f=_0xc654b5,_0x1795b6={'EDyHB':_0x2d504f(0x597)+'ion:f'+'ixed;'+_0x2d504f(0xac6)+_0x2d504f(0x82b)+':0;z-'+_0x2d504f(0x208)+':2147'+'48364'+'5;poi'+_0x2d504f(0x5c7)+'event'+_0x2d504f(0x835)+'e;'};try{if(_0x2c575e[_0x2d504f(0x4db)](_0x2d504f(0x9dc),_0x2c575e[_0x2d504f(0xc52)])){var _0x14591d=(_0x2d504f(0x57f)+'|6|0|'+_0x2d504f(0xae1))[_0x2d504f(0x889)]('|'),_0x47f733=-0x20a2+0x1ac2+-0x5e0*-0x1;while(!![]){switch(_0x14591d[_0x47f733++]){case'0':_0x589281['body'][_0x2d504f(0x658)+'dChil'+'d'](_0x3d7a00);continue;case'1':var _0x3d7a00=_0x4e9f0c[_0x2d504f(0x7ec)+_0x2d504f(0x83e)+_0x2d504f(0x614)](_0x2d504f(0x1db)+'s');continue;case'2':return _0x7eb8b;case'3':if(!_0x30ea19['body']||!_0x199ccd[_0x2d504f(0x44e)][_0x2d504f(0x658)+_0x2d504f(0x61d)+'d'])return null;continue;case'4':_0x3b0b0d={'cv':_0x3d7a00};continue;case'5':_0x3d7a00['id']=_0x2d504f(0x72f)+_0x2d504f(0x2d6)+'es';continue;case'6':_0x3d7a00[_0x2d504f(0x7fb)][_0x2d504f(0x4af)+'xt']=_0x1795b6[_0x2d504f(0x9af)];continue;}break;}}else{if(!_0x146316)return;var _0x44cc67=_0x146316[_0x2d504f(0x142)+'nce']?_0x146316['insta'+_0x2d504f(0xa09)][_0x2d504f(0x7cd)+'ts']:_0x146316[_0x2d504f(0x7cd)+'ts']||null;if(!_0x44cc67)return;if(!_0x1cbec3)try{_0x1cbec3=Object['keys'](_0x44cc67)[_0x2d504f(0x8c4)](-0xb36+-0x2a*0x82+0x1045*0x2,-0x506+0x1*-0x1dd4+0x22f2);}catch(_0xc353c){}var _0x568e92=_0x44cc67['memor'+'y'];_0x568e92&&_0x568e92[_0x2d504f(0xaba)+'r']&&_0x2c575e['yBJEe'](_0x568e92[_0x2d504f(0xaba)+'r'][_0x2d504f(0x2a0)+_0x2d504f(0x662)],0x268c*-0x1+-0x1441+0x3acd*0x1)&&(_0x2c575e['JxrdO'](_0x2c575e['nsJUb'],_0x2d504f(0x17f))?(_0x14884d=_0x568e92,_0x5cc048=_0x2c575e['zBlfD'](Date[_0x2d504f(0x53a)](),_0x3b0a0e)):_0x52341d[_0x2d504f(0xafb)+'ngs'][_0x2d504f(0x1e1)](_0x2c575e[_0x2d504f(0x989)](_0x2c575e[_0x2d504f(0xa74)](_0x2c575e[_0x2d504f(0xc5c)](_0x2d504f(0x616)+_0x2d504f(0x7b5)+_0x2d504f(0xaf4),_0xff7d2c[_0x2d504f(0x4f7)+'Resol'+_0x2d504f(0xb69)])+'\x20of\x20',_0x20d2a0[_0x2d504f(0x4f7)+_0x2d504f(0x797)]),_0x2c575e[_0x2d504f(0x3dd)])+('(this'+',\x20Met'+'hodIn'+_0x2d504f(0x4b0)+'->\x20vo'+_0x2d504f(0xc2b)+'es\x20no'+_0x2d504f(0x2ca)+_0x2d504f(0xbca)+_0x2d504f(0xc2c)+'ild.')));}}catch(_0x220fa5){}}function _0x5c7cbc(){var _0x235023=_0xc654b5,_0x53b9a6={'aEOXc':'XlEle','octUw':_0x2c575e[_0x235023(0x901)],'VGJvt':function(_0x1a5241,_0x178234){return _0x1a5241(_0x178234);},'OAipf':function(_0x3ff449,_0x53e0d6){var _0x126701=_0x235023;return _0x2c575e[_0x126701(0xc7a)](_0x3ff449,_0x53e0d6);},'CjoPj':function(_0x57a0aa,_0x27b153){var _0x1e49e6=_0x235023;return _0x2c575e[_0x1e49e6(0x4ea)](_0x57a0aa,_0x27b153);},'aXAVN':_0x2c575e['OBFxH'],'DMjph':'AMoNj'};if(_0x235023(0x463)===_0x2c575e['tedsz']){if(!_0x27c55e['on'])_0x4ada6f(!![],![]);else{if(_0x3587d6['boxes'])_0x7aa0c6(![],![]);else{if(_0x171964())_0x21db65(!![],!![]);else _0x2c575e['oGqJX'](_0x3e16eb,![],![]);}}}else try{if(typeof WebAssembly==='undef'+_0x235023(0x42f))return;var _0x3d03ae=['insta'+'ntiat'+'e',_0x235023(0x142)+'ntiat'+'eStre'+'aming'];for(var _0x13032d=-0x4*0x1c2+-0x1b82+0x228a;_0x13032d<_0x3d03ae[_0x235023(0xb90)+'h'];_0x13032d++){(function(_0x354976){var _0x208319=_0x235023,_0x56605d={'kGPqk':function(_0x461708,_0x44da5a){var _0x12be3e=_0x3c88;return _0x53b9a6[_0x12be3e(0xb31)](_0x461708,_0x44da5a);},'aLfKC':function(_0x515157){return _0x515157();},'hrlNo':'repor'+'t'};if(_0x53b9a6[_0x208319(0x5d3)](_0x53b9a6[_0x208319(0x774)],_0x53b9a6[_0x208319(0x774)]))try{if(!_0x32633e||!_0x51ed02)return null;var _0x984695=new _0xc134ee(_0xd0c976)[_0x208319(0x8b0)+_0x208319(0x3b6)+'me']();return _0x984695===_0x4a37e2?null:_0x984695;}catch(_0x340e14){return null;}else{var _0x4f9b07=WebAssembly[_0x354976];if(typeof _0x4f9b07!=='funct'+'ion'||_0x4f9b07[_0x208319(0x951)+'uraMe'+'moryT'+'ap'])return;var _0x77dacb=function(){var _0x42982b=_0x208319,_0x46b1c0=_0x4f9b07[_0x42982b(0xc72)](this,arguments);try{if(_0x53b9a6['aEOXc']==='XlEle'){if(_0x46b1c0&&typeof _0x46b1c0[_0x42982b(0x2e7)]===_0x53b9a6[_0x42982b(0x87d)])_0x46b1c0['then'](_0x20ebd2,function(){});else _0x53b9a6[_0x42982b(0xa46)](_0x20ebd2,_0x46b1c0);}else{var _0x277ef6=_0x84e9de['data'];if(!_0x277ef6||_0x277ef6['__sak'+_0x42982b(0xc01)]!==_0xf54456)return;try{if(_0x56605d['kGPqk'](_0x277ef6[_0x42982b(0x74d)],_0x42982b(0x86d))){_0x56605d[_0x42982b(0xb93)](_0x3b3c9d)['set']({'host':_0x277ef6['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x277ef6[_0x42982b(0x74d)]===_0x56605d[_0x42982b(0x74c)])_0x2b61c5()['set'](_0x277ef6[_0x42982b(0x30f)+'t']);}catch(_0x1e0963){_0x9cabff['warn']('%c[sa'+'kura]'+_0x42982b(0x924)+'l\x20upd'+'ate\x20f'+_0x42982b(0x91c),_0x42982b(0x1cc)+':'+_0x5d6077,_0x1e0963);}}}catch(_0x467ccb){}return _0x46b1c0;};_0x77dacb[_0x208319(0x951)+_0x208319(0x806)+_0x208319(0x9cb)+'ap']=!![];try{if(_0x53b9a6[_0x208319(0x5ff)]===_0x53b9a6[_0x208319(0x5ff)])Object[_0x208319(0x348)+_0x208319(0x66c)+'erty'](_0x77dacb,_0x208319(0x1cb),{'value':_0x4f9b07[_0x208319(0x1cb)],'configurable':!![]});else return null;}catch(_0x13da5b){}WebAssembly[_0x354976]=_0x77dacb;}}(_0x3d03ae[_0x13032d]));}}catch(_0x53bf16){}}var _0x5ddcb3=null,_0xdea9ac=null,_0xee751={},_0x4ee912={'MouseLook':[{'name':_0xc654b5(0xbb8)+_0xc654b5(0x433)+'\u0094','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x9d7)],'ret':_0xc654b5(0x358),'params':[_0x2c575e['hlVWK']],'wasmParams':[_0xc654b5(0x72c),_0x2c575e['GnIXc']]},{'name':_0x2c575e[_0xc654b5(0x263)],'ret':_0xc654b5(0x358),'params':[_0xc654b5(0x3d9)],'wasmParams':[_0xc654b5(0x72c),'f32']},{'name':_0x2c575e[_0xc654b5(0xc00)],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[_0x2c575e['hlVWK']],'wasmParams':[_0xc654b5(0x72c),'f32']},{'name':'\u0089\u0088\u0091\u0090\u008a'+_0xc654b5(0x736)+'\u0091','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x672)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0x2c575e['YNGwb'],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':'LateU'+_0xc654b5(0xcda),'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':'\u0088\u0091\u008b\u0087\u0087'+_0xc654b5(0x1e3)+'\u0095','ret':'void','params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0xc654b5(0x3f0)+_0xc654b5(0x3ac)+'\u0095','ret':'float','params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':_0xc654b5(0x983)},{'name':_0x2c575e[_0xc654b5(0xa6b)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0x6af)],'ret':'void','params':['float'],'wasmParams':[_0x2c575e['EMaDW'],_0x2c575e[_0xc654b5(0xac1)]]},{'name':'\u0093\u0089\u0095\u0092\u0090'+'\u0092\u008b\u0093\u008b\u0092'+'\u008d','ret':_0x2c575e['hlVWK'],'params':[],'wasmParams':['i32'],'wasmRet':_0xc654b5(0x983)},{'name':'\u008d\u0095\u0088\u0092\u008c'+'\u008c\u0090\u0089\u0086\u0092'+'\u0092','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':'\u008f\u008c\u0086\u008e\u008f'+_0xc654b5(0x8f3)+'\u0091','ret':'void','params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0xc654b5(0xc21)+'\u0093\u0091\u0089\u0088\u008d'+'\u008a','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0x8ef)],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x53d)],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':['float',_0x2c575e[_0xc654b5(0xb00)]],'wasmParams':[_0xc654b5(0x72c),_0x2c575e[_0xc654b5(0xac1)],_0x2c575e['GnIXc']]},{'name':_0xc654b5(0x890)+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','ret':_0xc654b5(0x3d9),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':'f32'},{'name':'\u008b\u0092\u0089\u0090\u008d'+'\u0093\u0089\u008e\u0086\u0093'+'\u0088','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0xc5e),'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':'\u0093\u008c\u0091\u0091\u0093'+_0xc654b5(0xc55)+'\u008e','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[_0x2c575e['hlVWK']],'wasmParams':['i32','f32']},{'name':_0x2c575e[_0xc654b5(0x9f5)],'ret':_0x2c575e['hlVWK'],'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':_0xc654b5(0x983)},{'name':'\u0094\u008d\u0091\u0091\u0090'+_0xc654b5(0x913)+'\u008a','ret':_0x2c575e['cdjDr'],'params':['float',_0x2c575e[_0xc654b5(0xb00)]],'wasmParams':['i32','f32','f32']},{'name':'\u0089\u0091\u0086\u0093\u008f'+_0xc654b5(0x14f)+'\u008d','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x710)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':'\u008e\u0092\u0091\u0088\u0092'+_0xc654b5(0x8f9)+'\u008b','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[_0x2c575e[_0xc654b5(0xb00)]],'wasmParams':[_0xc654b5(0x72c),_0x2c575e['GnIXc']]},{'name':'\u0090\u008e\u0095\u0093\u008d'+_0xc654b5(0x9d0)+'\u0093','ret':_0x2c575e[_0xc654b5(0xb00)],'params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':_0xc654b5(0x983)},{'name':_0xc654b5(0x1e4)+_0xc654b5(0x99a)+'\u008a','ret':_0xc654b5(0x3d9),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':_0xc654b5(0x983)},{'name':_0x2c575e['tXYpX'],'ret':_0x2c575e['cdjDr'],'params':[_0xc654b5(0x3d9)],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0xc654b5(0x983)]},{'name':_0x2c575e['XfdRK'],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0x292)],'ret':'void','params':[_0xc654b5(0x3d9)],'wasmParams':['i32',_0x2c575e[_0xc654b5(0xac1)]]},{'name':'\u008c\u0089\u008e\u0086\u0086'+'\u0087\u008d\u008a\u008a\u0089'+'\u0089','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':_0x2c575e['JalgW'],'ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0xc654b5(0xce0)+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','ret':_0xc654b5(0x358),'params':[_0xc654b5(0x3d9)],'wasmParams':['i32','f32']}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+_0xc654b5(0x6ec)+'\u008e','ret':'float','params':[],'wasmParams':[_0x2c575e['EMaDW']],'wasmRet':_0x2c575e[_0xc654b5(0xac1)]},{'name':_0xc654b5(0xa4e)+_0xc654b5(0xb07)+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0089\u008c\u0095\u0088\u008a'+_0xc654b5(0x96a)+'\u0094','ret':_0x2c575e[_0xc654b5(0x2b5)],'params':[],'wasmParams':[_0x2c575e['EMaDW']],'wasmRet':_0xc654b5(0x72c)},{'name':_0x2c575e['FjKFN'],'ret':_0x2c575e['cdjDr'],'params':[_0x2c575e[_0xc654b5(0x2b5)]],'wasmParams':['i32',_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0095\u0092\u0088\u0087\u0092'+_0xc654b5(0x38e)+'\u0092','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0092\u0088\u008b\u0095\u0089'+_0xc654b5(0x2c3)+'\u008a','ret':'void','params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0x607)],'ret':'void','params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0xc654b5(0x7ef)+_0xc654b5(0x339)+'\u0087','ret':_0xc654b5(0x654),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':_0x2c575e[_0xc654b5(0xb15)]},{'name':'\u0094\u008d\u0087\u0087\u008a'+'\u008c\u0088\u008a\u0089\u0092'+'\u0087','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x510)+_0xc654b5(0xa31)+'\u0093','ret':_0x2c575e[_0xc654b5(0x2b5)],'params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':_0xc654b5(0x72c)},{'name':_0x2c575e[_0xc654b5(0x65e)],'ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0xc654b5(0x72c)},{'name':_0xc654b5(0x9ab)+_0xc654b5(0xcaa)+'\u0094','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':'\u0095\u0087\u0089\u008c\u008e'+_0xc654b5(0x177)+'\u0095','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0xbfb)],'ret':_0x2c575e['lnbKk'],'params':[_0xc654b5(0x654),_0xc654b5(0x654)],'wasmParams':[_0xc654b5(0x72c),_0x2c575e['EMaDW'],_0x2c575e['EMaDW']],'wasmRet':'i32'},{'name':'\u0088\u0089\u008f\u0091\u0094'+_0xc654b5(0x760)+'\u0090','ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e['DkQPh'],'ret':_0xc654b5(0x654),'params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':'i32'},{'name':_0xc654b5(0x7f2)+_0xc654b5(0xcd3)+'\u008f','ret':_0xc654b5(0x358),'params':[_0xc654b5(0x654)],'wasmParams':['i32','i32']},{'name':_0xc654b5(0x2d3)+_0xc654b5(0x4b4)+'\u008e','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x910)],'ret':_0x2c575e[_0xc654b5(0x2b5)],'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':'i32'},{'name':_0x2c575e['BZltd'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0xc654b5(0x379)+_0xc654b5(0xb9b)+'\u0094','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x5e7)],'ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x229)+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e['GpXEw'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0x59d)],'ret':'void','params':[_0xc654b5(0x654)],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0xb98)],'ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e['pnrrF'],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':'\u0086\u0090\u0092\u0091\u0090'+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0xc654b5(0xb84)+_0xc654b5(0x7bf)+'\u0091','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e['Aqgwq'],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0xc654b5(0x7b6)+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0xc654b5(0x2a7)+_0xc654b5(0x366)+'\u0091','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x1d5)],'ret':_0xc654b5(0x358),'params':[_0xc654b5(0x654)],'wasmParams':[_0xc654b5(0x72c),'i32']},{'name':'\u0094\u0087\u008b\u008d\u0089'+'\u0095\u008a\u0091\u0095\u0092'+'\u0090','ret':'void','params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0x3c8)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x613)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0xc654b5(0xa6e)+_0xc654b5(0x69c)+'\u0087','ret':'void','params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':'\u008c\u0089\u0091\u0095\u0090'+'\u008b\u008e\u008e\u0091\u0086'+'\u0087','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':_0xc654b5(0xab7)+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','ret':'void','params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':'\u0094\u008d\u0087\u0094\u008d'+_0xc654b5(0x900)+'\u0094','ret':_0x2c575e['cdjDr'],'params':[_0xc654b5(0x654)],'wasmParams':[_0x2c575e['EMaDW'],_0xc654b5(0x72c)]},{'name':'\u008b\u0092\u008b\u008f\u0095'+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','ret':_0x2c575e['lnbKk'],'params':[],'wasmParams':['i32'],'wasmRet':_0xc654b5(0x72c)},{'name':'\u008e\u008b\u0095\u0092\u008e'+_0xc654b5(0x503)+'\u0086','ret':_0xc654b5(0x654),'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0xc654b5(0x804)+_0xc654b5(0x7c8)+'\u008d','ret':'bool','params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':'i32'},{'name':'\u008e\u0093\u0093\u008b\u008a'+_0xc654b5(0x517)+'\u0094','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0xc5e),'ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':'\u0088\u0091\u0095\u008a\u0087'+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0xb41)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':'\u0089\u0086\u0090\u0088\u008c'+_0xc654b5(0x549)+'\u008b','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0091\u0093\u0091\u008f\u008c'+_0xc654b5(0x7bd)+'\u008f','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0x198)],'ret':_0xc654b5(0x358),'params':[_0xc654b5(0x3d9)],'wasmParams':[_0x2c575e['EMaDW'],'f32']},{'name':_0x2c575e['dYzHV'],'ret':'bool','params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':_0xc654b5(0x72c)},{'name':_0x2c575e[_0xc654b5(0x17e)],'ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x765)+_0xc654b5(0x5c0)+'\u0094','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e[_0xc654b5(0x47f)],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0xbdd)],'ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0x2c575e[_0xc654b5(0xb15)]},{'name':_0x2c575e[_0xc654b5(0x4d0)],'ret':'bool','params':[_0xc654b5(0x654),'bool'],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0xc654b5(0x72c),_0xc654b5(0x72c)],'wasmRet':_0x2c575e['EMaDW']},{'name':_0x2c575e['tUNyL'],'ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0094\u008e\u0091\u008d\u0095'+_0xc654b5(0x911)+'\u008e','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0xb38)+_0xc654b5(0x656)+'\u0091','ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':'\u0095\u0090\u0093\u0093\u008a'+_0xc654b5(0x6d4)+'\u0086','ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0x2d1)],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':['float'],'wasmParams':[_0xc654b5(0x72c),'f32']},{'name':_0xc654b5(0xb5e)+_0xc654b5(0xc97)+'\u008b','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':'\u008e\u008b\u0093\u0091\u008e'+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','ret':_0x2c575e[_0xc654b5(0x2b5)],'params':[_0x2c575e[_0xc654b5(0x2b5)],_0x2c575e[_0xc654b5(0x2b5)]],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],'i32',_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':'i32'},{'name':_0x2c575e[_0xc654b5(0x22a)],'ret':_0xc654b5(0x358),'params':['float',_0xc654b5(0x654)],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0x2c575e[_0xc654b5(0xac1)],_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0094\u0090\u0095\u0092\u008e'+_0xc654b5(0x87b)+'\u008f','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x3e8)+'\u0091\u0095\u0088\u008f\u0088'+'\u008c','ret':'void','params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e['zPAtS'],'ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]}],'TDM_GameManager':[{'name':_0x2c575e[_0xc654b5(0x670)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0x2c575e['HzBcl'],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e[_0xc654b5(0x380)],'ret':_0xc654b5(0x654),'params':[_0x2c575e[_0xc654b5(0x45d)]],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':_0xc654b5(0x72c)},{'name':_0xc654b5(0xbc3)+'\u0094\u008b\u0086\u008a\u008e'+'\u0086','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0xafa)],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[_0x2c575e['lnbKk']],'wasmParams':[_0x2c575e['EMaDW'],_0xc654b5(0x72c)]},{'name':_0xc654b5(0x8c8)+_0xc654b5(0x30a)+'\u0094','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e['ZlknQ'],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008d\u008f\u0086\u0092\u008c'+'\u0086\u0095\u0095\u0091\u0089'+'\u0087','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2c575e['WAqGP'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2c575e['UKvkh'],'ret':'void','params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0x55e)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0x3b0)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e[_0xc654b5(0xa5b)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0xc654b5(0x2ac)+'\u008a\u008e\u0092\u0095\u008b'+'\u0088','ret':'void','params':[],'wasmParams':['i32']},{'name':_0xc654b5(0x847)+_0xc654b5(0xb0f),'ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0x2c575e['vdlsu'],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008e\u0095\u008e\u0087\u0086'+'\u008c\u008e\u0095\u0088\u008e'+'\u0091','ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0xc654b5(0x9aa)+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':_0xc654b5(0x20d)+_0xc654b5(0x4ab)+_0xc654b5(0x66f)+_0xc654b5(0x8eb)+_0xc654b5(0xaf6),'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0xc654b5(0xa27)+'\u0090\u0091\u008a\u008f\u008c'+'\u0093','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':['bool'],'wasmParams':[_0xc654b5(0x72c),'i32']},{'name':_0x2c575e['fPHCX'],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[_0x2c575e[_0xc654b5(0x45d)],'int',_0xc654b5(0xc92)],'wasmParams':[_0xc654b5(0x72c),_0x2c575e[_0xc654b5(0xb15)],'i32',_0x2c575e['EMaDW']]},{'name':_0xc654b5(0x1f5)+'\u0094\u0089\u0093\u0088\u0093'+'\u0089','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e['GHfyq'],'ret':_0x2c575e['cdjDr'],'params':[_0x2c575e[_0xc654b5(0x45d)],_0xc654b5(0xc92),_0xc654b5(0xc92)],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0x2c575e['EMaDW'],_0x2c575e['EMaDW'],_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0xc654b5(0x3c5)+_0xc654b5(0xa1b)+'\u0092','ret':_0x2c575e['lnbKk'],'params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':'i32'},{'name':_0xc654b5(0x932)+'e','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0xc654b5(0x5f3)+_0xc654b5(0x3fa)+'\u0087','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x535)+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e['MOEvs'],'ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':['i32']},{'name':'\u0088\u0090\u0095\u008e\u0094'+_0xc654b5(0x4ff)+'\u008e','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':_0xc654b5(0x732)+_0xc654b5(0x418)+'\u008c','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0088\u008c\u0089\u008e\u0095'+_0xc654b5(0x7d6)+'\u008e','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[_0x2c575e[_0xc654b5(0x2b5)]],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0xc654b5(0x72c)]},{'name':_0xc654b5(0x316)+_0xc654b5(0x489)+'\u0094','ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0xa0a)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':'\u0086\u008a\u008e\u008b\u0088'+_0xc654b5(0x61a)+'\u0091','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0xb28)],'ret':_0xc654b5(0x358),'params':['bool'],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0xc654b5(0x72c)]},{'name':'\u008f\u008c\u0086\u0087\u008e'+_0xc654b5(0xa08)+'\u0095','ret':'bool','params':[],'wasmParams':[_0xc654b5(0x72c)],'wasmRet':_0x2c575e['EMaDW']},{'name':'\u0086\u0086\u008c\u0094\u008b'+_0xc654b5(0x300)+'\u008f','ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e['jZLZK'],'ret':_0xc654b5(0x654),'params':[_0x2c575e[_0xc654b5(0x45d)]],'wasmParams':[_0xc654b5(0x72c),_0x2c575e[_0xc654b5(0xb15)]],'wasmRet':_0x2c575e['EMaDW']},{'name':_0xc654b5(0x2b4)+_0xc654b5(0x5d2)+'\u008e','ret':_0xc654b5(0x358),'params':[_0xc654b5(0x654)],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x58f)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0x6fd)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2c575e['zsovL'],'ret':_0xc654b5(0x358),'params':[_0x2c575e['MRCHs'],_0x2c575e[_0xc654b5(0x45d)],_0xc654b5(0xc92)],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)],_0x2c575e[_0xc654b5(0xb15)],_0x2c575e[_0xc654b5(0xb15)],_0xc654b5(0x72c)]},{'name':'\u0089\u0086\u0094\u0092\u0092'+'\u0093\u008b\u0094\u0094\u0094'+'\u008e','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e[_0xc654b5(0x6e0)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e['WWqgo'],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':_0x2c575e[_0xc654b5(0x7bc)],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0xc654b5(0x1ce)+'\u0090\u0087\u0086\u0088\u008e'+'\u0094','ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0xc654b5(0x650)+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':['bool'],'wasmParams':[_0x2c575e['EMaDW'],_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0088\u008f\u0094\u0095\u008a'+_0xc654b5(0xb79)+'\u0095','ret':'void','params':[],'wasmParams':[_0xc654b5(0x72c)]},{'name':_0x2c575e['nMcrs'],'ret':_0xc654b5(0x358),'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0x2c575e['VELxG'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0xc654b5(0xa8b)+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','ret':_0xc654b5(0x358),'params':['int',_0xc654b5(0xc92)],'wasmParams':[_0x2c575e['EMaDW'],'i32',_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0088\u0094\u008e\u0086\u0090'+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','ret':'void','params':[],'wasmParams':[_0x2c575e[_0xc654b5(0xb15)]]},{'name':'\u0093\u0094\u0087\u008b\u0086'+'\u0093\u008b\u008c\u0094\u0095'+'\u008e','ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':['i32']},{'name':_0x2c575e['qbCmv'],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[_0xc654b5(0x654)],'wasmParams':[_0xc654b5(0x72c),_0xc654b5(0x72c)]},{'name':_0x2c575e[_0xc654b5(0x781)],'ret':_0x2c575e['cdjDr'],'params':[],'wasmParams':['i32']},{'name':_0x2c575e[_0xc654b5(0xa63)],'ret':_0x2c575e[_0xc654b5(0xb8c)],'params':[],'wasmParams':[_0x2c575e['EMaDW']]},{'name':_0xc654b5(0xb06)+_0xc654b5(0x512)+'\u0089','ret':_0xc654b5(0x358),'params':[],'wasmParams':['i32']}]},_0x32ffa3=[],_0x4d0530=[],_0x4b5013={},_0x109959=0x1b4d+0xa*-0x12e+0x1b9*-0x9,_0x2cf971=![],_0x2803d8=[],_0x17d022=[{'type':_0x2c575e[_0xc654b5(0xc75)],'keep':!![]},{'type':_0x2c575e[_0xc654b5(0xb0a)],'keep':!![]},{'type':_0x2c575e[_0xc654b5(0x872)],'keep':![]},{'type':_0x2c575e[_0xc654b5(0x54b)],'keep':!![]},{'type':_0xc654b5(0x508)+_0xc654b5(0x2ce)+_0xc654b5(0xa6d),'keep':!![]},{'type':_0x2c575e[_0xc654b5(0xb6f)],'keep':!![],'many':!![]},{'type':'Netwo'+'rkPla'+_0xc654b5(0xae8)+'imati'+_0xc654b5(0x63c),'keep':!![],'many':!![]},{'type':_0x2c575e[_0xc654b5(0x866)],'keep':!![],'many':!![]},{'type':_0x2c575e[_0xc654b5(0x78f)],'keep':!![],'many':!![]}],_0xeca0ad=['Assem'+_0xc654b5(0x696)+_0xc654b5(0x6d2)+'.dll','Assem'+_0xc654b5(0x696)+'Sharp'+_0xc654b5(0xc4a)+_0xc654b5(0x373)+'.dll','ch.sy'+_0xc654b5(0x416)+'ge.De'+'cal.d'+'ll',_0x2c575e['arYug'],_0xc654b5(0x42a)+'loCha'+_0xc654b5(0xc62)+'rCont'+'rolle'+'r.dll',_0xc654b5(0x261)+_0xc654b5(0xabe)+'d'];(function _0x15ad1c(){var _0x23042a=_0xc654b5;try{var _0x2cb1df=window[_0x23042a(0x2f5)+_0x23042a(0x5ee)+'dkit']&&window[_0x23042a(0x2f5)+_0x23042a(0x5ee)+'dkit'][_0x23042a(0x4e0)+'me'];if(!_0x2cb1df||typeof _0x2cb1df['creat'+'ePlug'+'in']!=='funct'+_0x23042a(0x664)){_0x5aad2a[_0x23042a(0x384)]=_0x2c575e['JmTun'];return;}_0x5aad2a['attem'+_0x23042a(0x751)]=!![],_0xdea9ac=_0x2cb1df[_0x23042a(0x7ec)+_0x23042a(0x165)+'in']({'name':_0x23042a(0x72f)+_0x23042a(0x91e)+'llwar'+'z','version':_0x24ba5f,'referencedAssemblies':_0xeca0ad[_0x23042a(0x8c4)]()}),_0x5aad2a['ok']=!![];try{if(_0x2c575e[_0x23042a(0x4ea)]('AnLQG',_0x2c575e[_0x23042a(0x2e5)])){var _0x1b5fc8=_0x2c295c(_0x31fe9b);_0x1e10c6[_0x597680]=_0x1b5fc8[_0x23042a(0xa29)],_0x32d050[_0x477a38]={'key':_0x1b5fc8['key'],'sane':_0x1b5fc8['sane'],'checked':_0x1b5fc8['check'+'ed'],'keyConsistent':_0x1b5fc8['keyCo'+'nsist'+_0x23042a(0x614)],'keySource':_0x1b5fc8[_0x23042a(0x4ad)+'urce']};}else{var _0x4cc389=window['Unity'+'WebMo'+'dkit']['Runti'+'me'];_0x4cc389[_0x23042a(0x951)+'uraTa'+'g']=_0x2c575e[_0x23042a(0xad0)](_0x24ba5f+':',Math[_0x23042a(0x4df)+'m']()[_0x23042a(0x265)+'ing'](0x353*0x5+0x22fb+0xe*-0x3ad)['slice'](0xe09+-0x1cfd+-0x5*-0x2fe,0x44*-0x3e+0x1a1*-0x6+-0x692*-0x4)),_0x3c4e89=_0x4cc389[_0x23042a(0x951)+_0x23042a(0x496)+'g'];}}catch(_0x26a745){}_0x2c575e['YWKTo'](_0x2e99d7),_0x2c575e[_0x23042a(0x782)](_0x1a48fd),_0x5aad2a[_0x23042a(0x4f7)+'Regis'+_0x23042a(0x8ee)]=_0x32ffa3['lengt'+'h'],_0x5c7cbc(),_0x5aad2a['memor'+_0x23042a(0x8d7)]=!![];}catch(_0x1a4ac1){_0x5aad2a['error']=_0x2c575e['IfiQk'](String,_0x1a4ac1&&_0x1a4ac1[_0x23042a(0xa26)+'ge']||_0x1a4ac1);}}());var _0x13f703=new Float32Array(-0x743+0xa57*-0x2+0x1bf2),_0x43f8fd=new Int32Array(_0x13f703['buffe'+'r']);function _0x458c71(_0x5415d9){return _0x13f703[0x25*0x65+0x133*0x11+0x22fc*-0x1]=_0x5415d9,_0x43f8fd[-0x1*-0x1e3c+0x188+-0x1fc4];}function _0x2caa4b(_0x1d3018){var _0x48152e=_0xc654b5;return _0x43f8fd[0x35*0x13+0x1f*-0x136+0x219b]=_0x2c575e[_0x48152e(0x9fb)](_0x1d3018,-0xd83+0x5*0x665+-0x1276),_0x13f703[0x1*-0xac7+0x1212+-0x1*0x74b];}var _0x39ad13={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x1e751b(){var _0x1e2b76=_0xc654b5,_0x55cb63={'OxVWD':function(_0x1bbcb3,_0x47bfc5){var _0x49c226=_0x3c88;return _0x2c575e[_0x49c226(0x88f)](_0x1bbcb3,_0x47bfc5);},'LYWDc':'\x20@\x20'};if(_0x2c575e[_0x1e2b76(0x355)]===_0x1e2b76(0x13f))return _0x2be904[_0x1e2b76(0xb8a)+_0x1e2b76(0x252)]=![],_0x9a3ea7[_0x1e2b76(0xabd)]='view\x20'+'float'+_0x1e2b76(0x2b0)+_0x1e2b76(0x7a7)+'le',null;else{try{if('QBQgO'===_0x1e2b76(0xc65)){if(_0xdea9ac&&_0xdea9ac[_0x1e2b76(0x637)+_0x1e2b76(0x1f6)]){var _0x27f6e2=_0xdea9ac['_runt'+'ime'];if(typeof _0x27f6e2[_0x1e2b76(0x7b5)+_0x1e2b76(0x29e)+'e']===_0x1e2b76(0x24b)+'ion'){var _0x12597c=_0x27f6e2[_0x1e2b76(0x7b5)+'veGam'+'e']();if(_0x12597c)return _0x39ad13[_0x1e2b76(0x764)+'e']=_0x1e2b76(0x84b)+'n._ru'+_0x1e2b76(0xcb3)+_0x1e2b76(0x2e6)+_0x1e2b76(0x4dd)+_0x1e2b76(0xb1e),_0x12597c;}if(_0x27f6e2[_0x1e2b76(0x187)])return _0x39ad13['sourc'+'e']=_0x1e2b76(0x84b)+_0x1e2b76(0x728)+'ntime'+_0x1e2b76(0x34e)+'e',_0x27f6e2[_0x1e2b76(0x187)];}}else try{_0x3313b0=_0x4ce699['keys'](_0x94044b)['slice'](0x2*0xa1a+0x7*-0x1d3+0x1*-0x76f,-0x106*0x11+0x3*-0x65+-0x2ab*-0x7);}catch(_0x151400){}}catch(_0x57eb83){}try{if(_0x2c575e['TPkam'](_0x1e2b76(0x857),_0x2c575e['SmSLL'])){var _0x410c08=window['Unity'+_0x1e2b76(0x5ee)+_0x1e2b76(0xa19)]&&window[_0x1e2b76(0x2f5)+'WebMo'+_0x1e2b76(0xa19)][_0x1e2b76(0x4e0)+'me'];if(_0x410c08&&typeof _0x410c08[_0x1e2b76(0x7b5)+'veGam'+'e']===_0x1e2b76(0x24b)+'ion'){var _0x1419a7=_0x410c08['resol'+'veGam'+'e']();if(_0x1419a7)return _0x39ad13['sourc'+'e']='Runti'+_0x1e2b76(0x6f6)+'solve'+_0x1e2b76(0x4f6)+')',_0x1419a7;}if(_0x410c08&&_0x410c08['_game'])return _0x39ad13[_0x1e2b76(0x764)+'e']=_0x2c575e[_0x1e2b76(0x183)],_0x410c08;}else{var _0x44fc1f=_0x4de5e9(_0x2c575e[_0x1e2b76(0xab5)],_0x2c575e['kKoFC'](_0x1e2b76(0xa02)+'rd',_0x427041?'\x20on':'')),_0xf1fd79=_0x2c575e[_0x1e2b76(0x5cf)](_0x1b2589,_0x2c575e['lqwMP'],_0x1e2b76(0xa02)+_0x1e2b76(0x892)+'ad'),_0x36cde0=_0x8985c5(_0x1e2b76(0x624),'sk-ca'+_0x1e2b76(0x19f)+_0x1e2b76(0x523),_0x2c575e['REjqx'](_0x2c575e['CRnYb'],_0x2a73d4)+(_0x1e2b76(0x7f5)+_0x1e2b76(0x532)));_0xf1fd79[_0x1e2b76(0x658)+_0x1e2b76(0x61d)+'d'](_0x36cde0);var _0x519e60=_0x2c575e[_0x1e2b76(0x9ed)](_0x2d9ff4,'div',_0x2c575e[_0x1e2b76(0x879)]);return _0x44fc1f[_0x1e2b76(0x658)+_0x1e2b76(0x61d)+'d'](_0xf1fd79),_0x44fc1f[_0x1e2b76(0x658)+'dChil'+'d'](_0x519e60),_0x44fc1f[_0x1e2b76(0x44e)]=_0x519e60,_0x44fc1f[_0x1e2b76(0x196)]=_0x36cde0,_0x44fc1f;}}catch(_0x20fd84){}try{var _0x59b94e=window['unity'+'Insta'+'nce']||window['unity'+_0x1e2b76(0xc58)]||window['game'];if(_0x59b94e)return _0x39ad13[_0x1e2b76(0x764)+'e']='windo'+'w\x20glo'+_0x1e2b76(0x1be),_0x59b94e;}catch(_0x4d4f16){}try{if(typeof game!==_0x2c575e[_0x1e2b76(0x253)]&&game){if(_0x2c575e[_0x1e2b76(0xbb9)]==='HYiTU')return _0x39ad13[_0x1e2b76(0x764)+'e']=_0x2c575e['ZyAgI'],game;else{var _0x41f061=_0x2215c4[_0x261c99];_0x5548cc[_0x1e2b76(0x1e1)](_0x55cb63[_0x1e2b76(0x855)](_0x41f061+_0x55cb63['LYWDc'],_0x129e34[_0x41f061]));}}}catch(_0x1a0fd4){}try{var _0x4180fd=Object['keys'](window);for(var _0xd35c8d=-0x97c+-0x2587+0x1d*0x19f;_0xd35c8d<_0x4180fd[_0x1e2b76(0xb90)+'h']&&_0xd35c8d<-0x2e*-0xb1+-0x21ba+0x444;_0xd35c8d++){if(_0x2c575e[_0x1e2b76(0xae7)](_0x1e2b76(0x9d9),'HcMtT')){var _0x9b740d=window[_0x4180fd[_0xd35c8d]];if(_0x9b740d&&_0x2c575e[_0x1e2b76(0xae7)](typeof _0x9b740d,_0x2c575e[_0x1e2b76(0x59f)])&&_0x9b740d[_0x1e2b76(0x6e8)+'e']&&_0x9b740d[_0x1e2b76(0x6e8)+'e']['HEAPU'+'8']&&_0x9b740d['Modul'+'e']['HEAPU'+'8'][_0x1e2b76(0xaba)+'r'])return _0x39ad13[_0x1e2b76(0x764)+'e']=_0x2c575e[_0x1e2b76(0x673)]+_0x4180fd[_0xd35c8d]+(_0x1e2b76(0x6d3)+'le'),_0x9b740d;}else _0x476462['push'](_0x2c575e['IfiQk'](_0x5484de,_0x314e5a&&_0x5a58c1['messa'+'ge']||_0x547feb)['slice'](0x1278+-0x2*0x12a9+0x12da,0xb6*0x17+0x6ee*0x5+-0x1ce*0x1c));}}catch(_0x2d98fb){}return _0x39ad13['sourc'+'e']=null,null;}}function _0x1a4cab(){var _0x6e30b2=_0xc654b5,_0x7bb025={'NRopx':function(_0x1b3fa9){return _0x2c575e['YWKTo'](_0x1b3fa9);}};if(_0x2c575e[_0x6e30b2(0xae7)](_0x2c575e[_0x6e30b2(0x342)],'HrGoV'))_0x5aab11=_0x597c96['x']/(-0x93*0x36+-0x1fea+0x42d4),_0x1b5a80=_0x2bf913['y']/(-0x25c*-0x1+0x7b6*-0x3+0x36*0x75);else{try{if(_0x2c575e['TPkam'](_0x2c575e['KuIlb'],'LODIa'))try{_0x7bb025['NRopx'](_0x363788);}catch(_0x1a8d12){}else{if(_0x14884d&&_0x14884d['buffe'+'r']&&_0x14884d['buffe'+'r']['byteL'+_0x6e30b2(0x662)])return _0x39ad13['sourc'+'e']=_0x39ad13['sourc'+'e']||_0x6e30b2(0x142)+_0x6e30b2(0x755)+_0x6e30b2(0xae3)+_0x6e30b2(0x13e)+'s.mem'+'ory',new Uint8Array(_0x14884d['buffe'+'r']);}}catch(_0x3ad6aa){}try{if(_0x2c575e['MilMS'](_0x2c575e['mFmpr'],_0x6e30b2(0xc1e))){if(!_0x45d94a[_0x6e30b2(0x95b)+'ement'+'ById'](_0x2c575e['MBcic'])){var _0x9a32b7=_0xeafe7[_0x6e30b2(0x7ec)+'eElem'+'ent'](_0x6e30b2(0x7fb));_0x9a32b7['id']=_0x2c575e['MBcic'],_0x9a32b7['textC'+'onten'+'t']=_0x2c575e[_0x6e30b2(0xc67)],(_0x5652df[_0x6e30b2(0x196)]||_0x579833['docum'+_0x6e30b2(0x97b)+_0x6e30b2(0x740)])['appen'+_0x6e30b2(0x61d)+'d'](_0x9a32b7);}return _0x3df077=_0x46d9ed[_0x6e30b2(0x7ec)+'eElem'+_0x6e30b2(0x614)](_0x6e30b2(0x624)),_0x5aaea8['id']='sakur'+'a-sw-'+'v2',_0x165faa[_0x6e30b2(0x44e)]['appen'+'dChil'+'d'](_0x49f1b3),_0x3d8fc7;}else{var _0x36ba63=_0x1e751b();if(_0x36ba63&&_0x36ba63['Modul'+'e']&&_0x36ba63[_0x6e30b2(0x6e8)+'e']['HEAPU'+'8']&&_0x36ba63['Modul'+'e']['HEAPU'+'8'][_0x6e30b2(0xaba)+'r'])return _0x36ba63[_0x6e30b2(0x6e8)+'e'][_0x6e30b2(0xa14)+'8'];}}catch(_0x4d8341){}return null;}}function _0xce867(){var _0x5ce933=_0xc654b5,_0x40ed41=_0x1a4cab();if(!_0x40ed41)return null;try{if('QUjkU'===_0x5ce933(0x8ca))return new DataView(_0x40ed41[_0x5ce933(0xaba)+'r'],_0x40ed41[_0x5ce933(0x4b9)+_0x5ce933(0x538)],_0x40ed41['byteL'+_0x5ce933(0x662)]);else _0x9e7dfe=_0x2e7c17,_0x13ad32=_0x4c5777[_0x5ce933(0x43b)];}catch(_0x552e80){return null;}}function _0x155fdf(_0x231914,_0x3702cf){var _0x3f5060=_0xc654b5,_0x339388=_0xce867();if(!_0x339388)return _0x39ad13[_0x3f5060(0x147)+'d']++,_0x39ad13[_0x3f5060(0x2c9)+_0x3f5060(0x7c2)]=_0x39ad13['lastE'+_0x3f5060(0x7c2)]||_0x3f5060(0x71a)+'APU8\x20'+_0x3f5060(0xb03)+_0x3f5060(0xcad)+_0x3f5060(0x64d)+'e\x20not'+_0x3f5060(0x943)+_0x3f5060(0x179)+_0x3f5060(0x953)+_0x3f5060(0x4e0)+'me.re'+_0x3f5060(0xc7c)+'Game('+_0x3f5060(0x96b)+_0x3f5060(0x8af)+'indow'+_0x3f5060(0x5e6)+'al',undefined;if(_0x231914<0xaf2+-0x11*0xdf+-0x2b*-0x17||_0x231914+(0x9*-0x170+-0xe*-0x21+0xb26)>_0x339388[_0x3f5060(0x2a0)+'ength'])return _0x39ad13[_0x3f5060(0x147)+'d']++,_0x39ad13['lastE'+_0x3f5060(0x7c2)]=_0x39ad13[_0x3f5060(0x2c9)+'rror']||_0x2c575e['Ncjrk'](_0x3f5060(0x97a)+_0x3f5060(0x717)+_0x231914[_0x3f5060(0x265)+_0x3f5060(0xb19)](0xa7*-0x33+0x129c*-0x1+0x1*0x33f1),'\x20past'+'\x20heap'+'\x20end\x20'+'0x')+_0x339388[_0x3f5060(0x2a0)+_0x3f5060(0x662)][_0x3f5060(0x265)+'ing'](0x93*0x31+-0x1de6*-0x1+-0x39f9),undefined;try{_0x39ad13['ok']++;switch(_0x3702cf){case'u8':return _0x339388['getUi'+_0x3f5060(0x79e)](_0x231914);case'i8':return _0x339388[_0x3f5060(0x199)+'t8'](_0x231914);case'i16':return _0x339388[_0x3f5060(0x199)+'t16'](_0x231914,!![]);case'u16':return _0x339388['getUi'+'nt16'](_0x231914,!![]);case _0x2c575e[_0x3f5060(0xb15)]:return _0x339388['getIn'+_0x3f5060(0x2a2)](_0x231914,!![]);case _0x3f5060(0xb44):return _0x339388['getUi'+_0x3f5060(0x7fc)](_0x231914,!![]);case _0x2c575e[_0x3f5060(0xac1)]:return _0x339388['getFl'+'oat32'](_0x231914,!![]);case'f64':return _0x339388['getFl'+_0x3f5060(0xab4)](_0x231914,!![]);case'v2':case'v3':case'v4':return _0x339388['getFl'+_0x3f5060(0x44c)](_0x231914,!![]);default:return _0x339388[_0x3f5060(0x199)+_0x3f5060(0x2a2)](_0x231914,!![]);}}catch(_0xa7b393){return _0x39ad13[_0x3f5060(0x147)+'d']++,_0x39ad13[_0x3f5060(0x2c9)+'rror']=_0x39ad13['lastE'+'rror']||_0x2c575e[_0x3f5060(0x5b0)](String,_0xa7b393&&_0xa7b393['messa'+'ge']||_0xa7b393)[_0x3f5060(0x8c4)](-0xd15*0x1+-0x21e1+0x2ef6,-0x686+0xc4*0x1a+-0xcea),undefined;}}function _0x3dfe6f(_0xd85d6f,_0x171213,_0x22b956){var _0x598ca0=_0xc654b5,_0x393598={'XFXHJ':function(_0x303599,_0x31f74c){return _0x303599===_0x31f74c;},'CYIPF':function(_0x43effd,_0x30a2ad){return _0x43effd===_0x30a2ad;}},_0x1707ea=_0xce867();if(!_0x1707ea||_0xd85d6f<0x1e4a*-0x1+-0x1932+0x377c||_0xd85d6f+(0x1d64+0x1*-0x2221+-0x1*-0x4c1)>_0x1707ea[_0x598ca0(0x2a0)+_0x598ca0(0x662)])return![];try{if(_0x598ca0(0xa39)===_0x598ca0(0xa39)){switch(_0x171213){case'u8':case'i8':_0x1707ea['setUi'+_0x598ca0(0x79e)](_0xd85d6f,_0x22b956&0x603+-0x476*-0x8+-0x28b4);break;case _0x2c575e['BUXlH']:case _0x598ca0(0x507):_0x1707ea[_0x598ca0(0x8f2)+_0x598ca0(0x3d4)](_0xd85d6f,_0x2c575e['lIvvm'](_0x22b956,0x1*-0x188f+0xaab+0xde4),!![]);break;case _0x598ca0(0x72c):case _0x2c575e[_0x598ca0(0x5f7)]:_0x1707ea['setIn'+_0x598ca0(0x2a2)](_0xd85d6f,_0x22b956|0x1*0x836+0x23ed+-0x2c23,!![]);break;case _0x2c575e['GnIXc']:_0x1707ea['setFl'+_0x598ca0(0x44c)](_0xd85d6f,_0x22b956,!![]);break;default:_0x1707ea[_0x598ca0(0x8f2)+_0x598ca0(0x2a2)](_0xd85d6f,_0x2c575e['cLsvs'](_0x22b956,-0x2*-0x270+-0x20e6+0x1c06),!![]);}return!![];}else{_0x637853[-0x11d8+-0xa36+0x28d*0xb]&&_0x393598['XFXHJ'](typeof _0xbbdb3d[0x2131+-0x1dad+-0x383][_0x598ca0(0xad4)],_0x598ca0(0x24b)+'ion')&&(_0x4e1daf['setLa'+'st']=_0x432e37[-0x1de+-0x2*0xc5+0x369]['val'](),_0xcaeed6[_0x598ca0(0x3ed)+'ts']++);_0x2e07b8[0xd9*0x26+0x2099+-0x40cd]&&_0x393598[_0x598ca0(0x2e0)](typeof _0x24c151[-0x5e2*-0x2+-0x11b*0x1b+0x1217*0x1][_0x598ca0(0xad4)],_0x598ca0(0x24b)+_0x598ca0(0x664))&&(_0x2239a6['setB']=_0x2b6a4c[-0x24*-0xc+-0x1072+0xec4][_0x598ca0(0xad4)](),_0x5e0901['pairH'+_0x598ca0(0x45f)]++);if(_0x593c0e[-0x8cb*-0x2+0x1d*0x3+-0xd*0x161]&&_0x393598['CYIPF'](typeof _0x3d6be7[-0x152+0x129b*-0x1+0x13ed*0x1][_0x598ca0(0xad4)],'funct'+'ion')){var _0x2c6d5a=_0x263275[-0x4c*-0x3d+-0x3*-0x887+-0x2bb1][_0x598ca0(0xad4)]();if(_0x2c6d5a)_0x4ca9c7=_0x2c6d5a;}}}catch(_0xddc943){return![];}}var _0x371b89={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x2c575e[_0xc654b5(0xb15)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x24fd74(_0x3c1e05){var _0x15b865=_0xc654b5,_0x3514a9='';for(var _0x1ce35f=-0x3ee+0xd90+-0x9a2;_0x1ce35f<_0x3c1e05['lengt'+'h'];_0x1ce35f++){if(_0x15b865(0xa6c)===_0x15b865(0x905)){if(_0x28f1bd[_0x53729b]['conte'+_0x15b865(0x6cb)+'dow'])_0x4218c0[_0x3bc867][_0x15b865(0x491)+_0x15b865(0x6cb)+_0x15b865(0x922)][_0x15b865(0x667)+_0x15b865(0x769)+'e'](_0x14dabc,'*');}else{var _0x151ae2=_0x3c1e05[_0x1ce35f][_0x15b865(0x265)+'ing'](-0x1363+-0x448+-0x7e9*-0x3);_0x3514a9+=(_0x151ae2['lengt'+'h']<-0x4cc*0x2+-0x1580+-0xa5e*-0x3?'0':'')+_0x151ae2;}}return _0x3514a9;}function _0x426907(_0x608f51,_0x31554c,_0x20229b){var _0x3b0c65=_0xc654b5,_0x236513={'XKYhi':'rgba('+_0x3b0c65(0xc88)+_0x3b0c65(0x4f2)+'6,.95'+')','utIht':'10px\x20'+_0x3b0c65(0xcb5)+'nospa'+_0x3b0c65(0x6f5)+_0x3b0c65(0x630)+_0x3b0c65(0x55d)+_0x3b0c65(0xc76)+'e','CoxMG':function(_0x557966,_0x1f53e9){return _0x557966-_0x1f53e9;}},_0x4496dd=_0xce867();if(!_0x4496dd){if(_0x3b0c65(0xb68)===_0x2c575e['vBXcd'])return _0x39ad13['faile'+'d']++,_0x39ad13['lastE'+_0x3b0c65(0x7c2)]=_0x39ad13[_0x3b0c65(0x2c9)+'rror']||'no\x20HE'+_0x3b0c65(0x27f)+'-\x20Uni'+_0x3b0c65(0xcad)+_0x3b0c65(0x64d)+_0x3b0c65(0x5a8)+_0x3b0c65(0x943)+'hable'+_0x3b0c65(0x953)+_0x3b0c65(0x4e0)+_0x3b0c65(0x6f6)+_0x3b0c65(0xc7c)+'Game('+')\x20or\x20'+_0x3b0c65(0x8af)+'indow'+_0x3b0c65(0x5e6)+'al',null;else{var _0x276819=_0x2c575e[_0x3b0c65(0x687)](_0x2c75eb,_0x39680d[_0x2932ef][0x1*0x38b+0xa*-0x232+0x1269]),_0x1b82d7=_0x52c8f4(_0x3b0c65(0x383),_0x3b0c65(0xc2e)+'l');_0x1b82d7[_0x3b0c65(0x7fb)][_0x3b0c65(0xa04)+'dth']='0',_0x1b82d7['style']['flex']='1',_0x1b82d7[_0x3b0c65(0x7fb)][_0x3b0c65(0xc96)+_0x3b0c65(0x6b4)]=_0x2c575e[_0x3b0c65(0x52f)],_0x1b82d7[_0x3b0c65(0xb42)+'onten'+'t']=_0x2c575e[_0x3b0c65(0x98a)](_0x8924ac,_0x47c631[_0x1128f7][-0x5*0x15b+0xa1*-0x38+0x2a01]),_0x1b82d7[_0x3b0c65(0x43c)+'et']['k']=_0x184855[_0x4075db][0x686*0x5+-0xc+-0x1*0x2091],_0x276819[_0x3b0c65(0x658)+_0x3b0c65(0x61d)+'d'](_0x1b82d7);var _0x2be9e1=_0x113284[_0x3b0c65(0xb90)+'h']?_0x55c7fb[_0x2c575e['HnIwz'](_0x49d728[_0x3b0c65(0xb90)+'h'],0x24ad+-0x1fa5+-0x507)]:null;!_0x2be9e1&&(_0x2be9e1=_0x2abf8f(_0x2c575e['ejtVF'],![]),_0x270745[_0x3b0c65(0x1e1)](_0x2be9e1)),_0x2be9e1['body'][_0x3b0c65(0x658)+_0x3b0c65(0x61d)+'d'](_0x276819),_0x2be9e1['body']['lastC'+_0x3b0c65(0xa47)]['sp']=_0x1b82d7;}}if(_0x31554c<-0x2*0x47b+0x210e*-0x1+0x4*0xa81||_0x31554c+_0x20229b>_0x4496dd[_0x3b0c65(0x2a0)+_0x3b0c65(0x662)]){if(_0x2c575e['ecqTj']===_0x2c575e['ecqTj'])return _0x39ad13['faile'+'d']++,_0x39ad13['lastE'+'rror']=_0x39ad13[_0x3b0c65(0x2c9)+_0x3b0c65(0x7c2)]||_0x2c575e[_0x3b0c65(0xa74)](_0x2c575e[_0x3b0c65(0x89f)],(_0x608f51+_0x31554c)['toStr'+_0x3b0c65(0xb19)](-0x1*0x188f+0xcc5+0xbda))+('\x20past'+_0x3b0c65(0x458)+_0x3b0c65(0x351)+'0x')+_0x4496dd[_0x3b0c65(0x2a0)+_0x3b0c65(0x662)][_0x3b0c65(0x265)+'ing'](0x58b+-0x2420+0x1ea5),null;else _0x12ab89[_0x3b0c65(0x723)+_0x3b0c65(0xbe7)]=_0x236513[_0x3b0c65(0xba6)],_0x589827['font']=_0x236513[_0x3b0c65(0x286)],_0x16e7bd[_0x3b0c65(0xbb7)+_0x3b0c65(0x311)](_0x11e4c7[_0x3b0c65(0x1b5)](_0x3bf35e['d']||-0x35*0x3b+-0x25*-0x36+0x469)+'m',_0x236513[_0x3b0c65(0x7db)](_0x4cf1f0,_0x4ce18c/(0xf30+0x1936+-0x2864)),_0x236513[_0x3b0c65(0x7db)](_0x159abe-_0x3077ce/(-0x1c14+0x12de+-0x1*-0x938),0x1c31+0x59*0x44+-0x33d2));}try{if('cntWE'!==_0x3b0c65(0x704)){var _0x4b0a71=new Uint8Array(_0x20229b);for(var _0x170549=0x1*-0x26e9+0xf2b*0x1+0x17be;_0x170549<_0x20229b;_0x170549++)_0x4b0a71[_0x170549]=_0x4496dd['getUi'+_0x3b0c65(0x79e)](_0x608f51+_0x31554c+_0x170549);return _0x39ad13['ok']++,_0x4b0a71;}else{_0x439199[_0x3b0c65(0x5f5)+'ntDef'+'ault'](),_0x3cd69e[_0x3b0c65(0x8bd)]=_0x1b9496[_0x3b0c65(0x54c)](0x1*0xab7+-0x6*0x3b9+0xbbd,_0x236513[_0x3b0c65(0x7db)](_0x20034b[_0x3b0c65(0x8bd)],-0x4db*0x5+-0x26e1+-0x31*-0x14a)),_0x9c9f02();return;}}catch(_0x4a3d2d){if('lmGYy'!=='dTOLt')return _0x39ad13['faile'+'d']++,_0x39ad13['lastE'+_0x3b0c65(0x7c2)]=_0x39ad13[_0x3b0c65(0x2c9)+_0x3b0c65(0x7c2)]||_0x2c575e['qfkJX'](String,_0x4a3d2d&&_0x4a3d2d[_0x3b0c65(0xa26)+'ge']||_0x4a3d2d)['slice'](-0x1328+-0x1b05*-0x1+0x21*-0x3d,-0x2a2*-0x4+-0x1*-0x62d+-0x1*0x103d),null;else{_0x588635['preve'+_0x3b0c65(0x9f9)+_0x3b0c65(0x6e1)](),_0x10d3aa[_0x3b0c65(0x8bd)]=_0x51c9a4['min'](0x1982+0x770+-0x2066,_0x2f0b34['fov']+(-0x1ddb+0xa32+0x13ab)),_0x45073c();return;}}}function _0x550b03(_0x48cf15,_0xd33365,_0xa6dcca){var _0x1d2c9b=_0xc654b5,_0x55d576=_0x371b89[_0xa6dcca],_0x2be284=_0x426907(_0x48cf15,_0xd33365,_0x55d576['size']);if(!_0x2be284)return null;var _0x364c3c=new DataView(_0x2be284[_0x1d2c9b(0xaba)+'r'],_0x2be284[_0x1d2c9b(0x4b9)+_0x1d2c9b(0x538)],_0x2be284[_0x1d2c9b(0x2a0)+_0x1d2c9b(0x662)]),_0x3f1ffa=_0x364c3c[_0x1d2c9b(0x199)+_0x1d2c9b(0x2a2)](_0x55d576[_0x1d2c9b(0x1d1)],!![]),_0x519186=_0x364c3c['getIn'+_0x1d2c9b(0x2a2)](_0x55d576[_0x1d2c9b(0x56c)+'n'],!![]),_0x3b1134=_0x2c575e['pOTqE'](_0x364c3c['getUi'+_0x1d2c9b(0x79e)](_0x55d576[_0x1d2c9b(0x509)+'d']),0x1*0x1ba7+-0xe1a+-0xd8c),_0xb2985a=_0xa6dcca===_0x1d2c9b(0x6c8)?_0x364c3c[_0x1d2c9b(0x40d)+'oat32'](_0x55d576[_0x1d2c9b(0x334)],!![]):_0x2c575e[_0x1d2c9b(0xae7)](_0xa6dcca,_0x1d2c9b(0x473))?_0x364c3c[_0x1d2c9b(0x199)+_0x1d2c9b(0x2a2)](_0x55d576[_0x1d2c9b(0x334)],!![]):_0x364c3c[_0x1d2c9b(0x568)+'nt8'](_0x55d576['fake']),_0x2dd2c6=_0x2c575e[_0x1d2c9b(0x8ac)](_0x364c3c[_0x1d2c9b(0x568)+_0x1d2c9b(0x79e)](_0x55d576[_0x1d2c9b(0x885)+'e']),-0x6d1*-0x1+0x869*-0x2+-0x3d*-0x2a);return{'keyAtOffset0':_0x3f1ffa,'hidden':_0x519186,'inited':_0x3b1134,'fake':_0xb2985a,'act':_0x2dd2c6,'hex':_0x2c575e[_0x1d2c9b(0x7ce)](_0x24fd74,_0x2be284),'alt':_0xa6dcca==='obfI'?_0x2c575e[_0x1d2c9b(0x2bc)](_0x519186,_0xb2985a|-0x1758+0x2*0x9b+-0x1622*-0x1):null};}function _0x4d4ddb(_0x38c871,_0x380557,_0x433b7d){var _0x40e7d1=_0xc654b5;if(_0x2c575e[_0x40e7d1(0x955)](_0x38c871,_0x40e7d1(0x6c8)))return _0x2caa4b(_0x380557^_0x433b7d);if(_0x38c871==='obfI')return _0x2c575e['FTjJb'](_0x380557,_0x433b7d)|0x207e*-0x1+0x4ba+0x4*0x6f1;return(_0x2c575e[_0x40e7d1(0x2bc)](_0x380557,_0x433b7d)&-0x1*0x1bfb+0xa*0x33d+-0x368)!==-0xaa1+0x242b+-0x198a?0x1fb2+0x141e+-0x3*0x1145:-0x706+0xc7*-0x16+0xc10*0x2;}function _0x464628(_0x5ea392,_0x27a71f,_0x81e4a7){var _0x2b7f97=_0xc654b5,_0xea5d1b=('8|7|1'+_0x2b7f97(0x67e)+_0x2b7f97(0x915)+_0x2b7f97(0x89d)+_0x2b7f97(0xa49)+_0x2b7f97(0x3ca)+_0x2b7f97(0xcd6))['split']('|'),_0x2059d2=0x1*-0xef9+-0xcb6+0x1*0x1baf;while(!![]){switch(_0xea5d1b[_0x2059d2++]){case'0':_0x18fd2d&=-0xb86+-0xd*-0x91+0x528;continue;case'1':_0x12cf43&=-0x1323+0x1c26+-0x902;continue;case'2':_0x5dba00|=0x5*-0x3dd+-0x265+0x15b6;continue;case'3':var _0x5a2fad;continue;case'4':var _0x4f824b=_0x2c575e[_0x2b7f97(0x5cf)](_0x155fdf,_0x5ea392+_0x27a71f+_0xb1099['inite'+'d'],'u8');continue;case'5':_0x4f824b=(_0x4f824b||0x1293+0x15*-0x1d3+0x13bc)&0x14ec+0x27f+0x3*-0x7ce;continue;case'6':return{'real':_0x5a2fad,'fake':_0x566523,'act':_0x12cf43,'init':_0x4f824b,'key':_0x18fd2d,'hidden':_0x5dba00};case'7':if(!_0xb1099)return null;continue;case'8':var _0xb1099=_0x371b89[_0x81e4a7];continue;case'9':var _0x566523=_0x155fdf(_0x2c575e[_0x2b7f97(0xbfd)](_0x2c575e['YgTRt'](_0x5ea392,_0x27a71f),_0xb1099[_0x2b7f97(0x334)]),_0x2c575e[_0x2b7f97(0x4db)](_0x81e4a7,_0x2b7f97(0x6c8))?_0x2c575e[_0x2b7f97(0xac1)]:_0x81e4a7==='obfI'?_0x2c575e['EMaDW']:'u8');continue;case'10':var _0x12cf43=_0x155fdf(_0x2c575e[_0x2b7f97(0xc38)](_0x5ea392+_0x27a71f,_0xb1099[_0x2b7f97(0x885)+'e']),'u8');continue;case'11':var _0x5dba00=_0x155fdf(_0x5ea392+_0x27a71f+_0xb1099[_0x2b7f97(0x56c)+'n'],_0x2b7f97(0x72c));continue;case'12':if(_0x2c575e['UbviY'](_0x81e4a7,'obfF'))_0x5a2fad=_0x2caa4b(_0x2c575e[_0x2b7f97(0x2bc)](_0x5dba00,_0x18fd2d));else{if(_0x2c575e[_0x2b7f97(0x3c9)](_0x81e4a7,_0x2b7f97(0x473)))_0x5a2fad=_0x5dba00^_0x18fd2d|0x35b*-0x3+-0x6*0x27f+0x190b;else _0x5a2fad=_0x2c575e[_0x2b7f97(0xc3c)](_0x5dba00^_0x18fd2d,0x17b9+-0x8df*-0x2+-0x2878)!==0x1434+0x4*0x1e2+-0x58c*0x5?-0x443+-0x3c*-0x71+-0x1*0x1638:-0x1c1*0x1+0xb3f+-0x97e;}continue;case'13':if(_0x2c575e[_0x2b7f97(0x99f)](_0x18fd2d,undefined)||_0x2c575e[_0x2b7f97(0xae7)](_0x5dba00,undefined)||_0x2c575e[_0x2b7f97(0xc40)](_0x566523,undefined)||_0x2c575e[_0x2b7f97(0x7a4)](_0x12cf43,undefined))return null;continue;case'14':var _0x18fd2d=_0x155fdf(_0x2c575e[_0x2b7f97(0x95f)](_0x5ea392+_0x27a71f,_0xb1099[_0x2b7f97(0x1d1)]),'u8');continue;}break;}}function _0x3f76b7(_0x916faa,_0x3b281b,_0x58b861,_0x72b11d){var _0x53e58c=_0xc654b5,_0x123eaa=_0x371b89[_0x58b861],_0x4c154c=_0x2c575e[_0x53e58c(0xb40)](_0x426907,_0x916faa,_0x3b281b,_0x123eaa[_0x53e58c(0x8b7)]);if(!_0x4c154c)return![];var _0x43b249=new DataView(_0x4c154c['buffe'+'r'],_0x4c154c[_0x53e58c(0x4b9)+'ffset'],_0x4c154c[_0x53e58c(0x2a0)+_0x53e58c(0x662)]),_0xdecf70=_0x123eaa[_0x53e58c(0x267)+'pe']==='u8'?_0x43b249[_0x53e58c(0x568)+_0x53e58c(0x79e)](_0x123eaa[_0x53e58c(0x1d1)]):_0x43b249[_0x53e58c(0x199)+_0x53e58c(0x2a2)](_0x123eaa[_0x53e58c(0x1d1)],!![]),_0x123e54;if(_0x2c575e['OLPXm'](_0x58b861,_0x53e58c(0x6c8)))_0x123e54=_0x458c71(_0x72b11d);else{if(_0x2c575e[_0x53e58c(0x4db)](_0x58b861,'obfI'))_0x123e54=_0x72b11d|-0xdcd*-0x2+-0x1f96+0x1fe*0x2;else _0x123e54=_0x2c575e[_0x53e58c(0x8ac)](_0x72b11d?0x48a*-0x8+-0x2653+-0x1*-0x4aa4:-0x6d7+0x2*-0x16f+0x7*0x163,0x2452+-0x101*0x1f+-0x10d*0x4);}return _0x3dfe6f(_0x2c575e[_0x53e58c(0x7de)](_0x916faa,_0x3b281b)+_0x123eaa['hidde'+'n'],_0x53e58c(0x72c),_0x123e54^_0xdecf70)&&_0x3dfe6f(_0x2c575e[_0x53e58c(0x989)](_0x916faa+_0x3b281b,_0x123eaa['fake']),_0x58b861===_0x2c575e['HnYdn']?_0x2c575e[_0x53e58c(0xac1)]:_0x2c575e[_0x53e58c(0x955)](_0x58b861,_0x53e58c(0x473))?_0x53e58c(0x72c):'u8',_0x2c575e[_0x53e58c(0x411)](_0x58b861,_0x2c575e[_0x53e58c(0xc7b)])?_0x72b11d:_0x58b861===_0x2c575e[_0x53e58c(0x172)]?_0x2c575e[_0x53e58c(0xbfc)](_0x72b11d,-0x2345+0x13*-0xb5+0x3*0x103c):_0x72b11d?-0x1d82+-0xbef+0x2972:0x4d+-0x93d+0x2c*0x34)&&_0x3dfe6f(_0x2c575e[_0x53e58c(0x95f)](_0x916faa,_0x3b281b)+_0x123eaa[_0x53e58c(0x885)+'e'],'u8',-0x1b88*0x1+-0x2ba*0x4+-0x8*-0x4ce);}var _0x4f804c={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x3e94dc=0x1*0x115+-0x18df+0x23*0xae+0.03,_0x1c0c91=0x1ef6+0xe2f+-0x2d23,_0x30d473={},_0x42255=-0x6eb+0x1*-0x1825+0x1f10,_0x214f1e=[],_0x1915ae=[];function _0x523939(_0xea83d){var _0x54a7ed=_0xc654b5,_0x19f522={'blsPR':function(_0x2f6a79,_0x1057be){return _0x2f6a79<_0x1057be;},'YOgkM':function(_0x2ab0ab,_0xd1f6d2){return _0x2c575e['MsgpC'](_0x2ab0ab,_0xd1f6d2);}},_0x5afdaa=_0x5a4af7[_0x54a7ed(0x6b2)+'ntrol'+'ler']||[],_0x2988a4=[];_0x1915ae=[],_0x214f1e=[];for(var _0x18f537=0x195+-0x2*0x12b7+0x23d9;_0x2c575e[_0x54a7ed(0x89e)](_0x18f537,_0x5afdaa[_0x54a7ed(0xb90)+'h']);_0x18f537++){var _0x19612c=_0x5afdaa[_0x18f537][0x1224+-0x14a7+-0x1*-0x283];if(_0x5afdaa[_0x18f537][-0x257*-0x5+-0x2169*-0x1+0x9*-0x503]!==_0x2c575e[_0x54a7ed(0xc7b)])continue;var _0x306235=_0x550b03(_0xea83d,_0x19612c,_0x54a7ed(0x6c8));if(!_0x306235||_0x306235[_0x54a7ed(0x509)+'d']!==0x1c23*0x1+0x137*-0x8+-0x126a)continue;var _0x383594=_0x4d4ddb(_0x54a7ed(0x6c8),_0x306235[_0x54a7ed(0x56c)+'n'],_0x306235[_0x54a7ed(0xa85)+_0x54a7ed(0x18f)+'t0']);if(typeof _0x383594!==_0x54a7ed(0x973)+'r'||!_0x2c575e['RqstT'](isFinite,_0x383594))continue;var _0x856fb2=_0x2c575e['oDYop'](_0xea83d+':',_0x19612c),_0x338ded=_0x30d473[_0x856fb2];if(!_0x338ded||_0x383594!==_0x338ded[_0x54a7ed(0x3cd)+_0x54a7ed(0x504)+'n'])_0x338ded=_0x30d473[_0x856fb2]={'base':_0x383594,'lastWritten':null};var _0x139e1b=_0x338ded[_0x54a7ed(0x317)],_0x5872fa=Math['abs'](_0x139e1b);if(_0x2c575e['lIBPT'](_0x5872fa,0x23d2*-0x1+-0x2276+0x4648+0.0001)||_0x5872fa>0xa38c+0x783*-0x5f+-0x359*-0x119){if(_0x54a7ed(0xa82)!=='ryIpb'){_0x1915ae['push']({'o':_0x19612c,'v':_0x383594,'why':_0x54a7ed(0x809)+_0x54a7ed(0x33b)+'e'});continue;}else{var _0x4330b9=0x1421+-0x16c3+0x2a2;for(var _0x1b2934=0x253c+-0x179+-0x1*0x23c3;_0x19f522[_0x54a7ed(0xa77)](_0x1b2934,_0x508620[_0x54a7ed(0xb90)+'h']);_0x1b2934++){if(_0x192cc3[_0x1b2934]['hook']&&_0x19f522[_0x54a7ed(0x7d5)](_0x3391aa[_0x1b2934]['hook'][_0x54a7ed(0x609)+'Index'],_0x16f8b5))_0x4330b9++;}return _0x4330b9;}}_0x2988a4[_0x54a7ed(0x1e1)]({'o':_0x19612c,'v':_0x383594,'a':_0x5872fa,'base':_0x139e1b,'key':_0x856fb2,'st':_0x338ded});}var _0x4cb337=[];for(var _0x44f607=0x22ca+0x1aba*-0x1+0x2*-0x408;_0x44f607<_0x2988a4[_0x54a7ed(0xb90)+'h'];_0x44f607++){var _0x12cd94=_0x2988a4[_0x44f607]['a'],_0xe853c0=null;for(var _0x3ecc7b=-0x1bec*0x1+-0x2*0xc19+0x341e;_0x2c575e[_0x54a7ed(0x367)](_0x3ecc7b,_0x4cb337['lengt'+'h']);_0x3ecc7b++){if(_0x2c575e['TwJNl'](_0x54a7ed(0x368),'KJrXZ')){var _0x4ffec3=_0x2c575e['RgZBT'](_0x5678e1,'v2')?-0x1*0x2627+-0x1ec3+0x44ec:_0x2c575e['Brveu'](_0x478014,'v3')?0x2387+0x1*0xcc7+-0x304b:-0x3*-0x8f+-0xe31+0xc88*0x1,_0x84c60=_0x5e47ff(_0x2a7992[_0x54a7ed(0xb52)],_0x17c86e,_0x4ffec3);_0x84c60&&(_0x5f1a4e[_0x54a7ed(0x154)]=_0x84c60,_0xe5e0bb['v']=_0x84c60[0x3*-0x13c+-0x4*0x628+0xe*0x206]);}else{var _0x467d97=_0x2c575e[_0x54a7ed(0x2bf)](_0x4cb337[_0x3ecc7b][_0x54a7ed(0xcb0)],_0x12cd94);if(_0x467d97>_0x2c575e['yKJMc'](-0x63b*-0x3+0x5*-0x583+0x8df,_0x3e94dc)&&_0x2c575e['lIBPT'](_0x467d97,0x1ba3+0x2364+-0x1f83*0x2+_0x3e94dc)){_0xe853c0=_0x4cb337[_0x3ecc7b];break;}}}!_0xe853c0&&(_0xe853c0={'mean':_0x12cd94,'members':[]},_0x4cb337[_0x54a7ed(0x1e1)](_0xe853c0));_0xe853c0['membe'+'rs'][_0x54a7ed(0x1e1)](_0x2988a4[_0x44f607]),_0xe853c0[_0x54a7ed(0xcb0)]=-0xf*0x163+-0x69d+0x1b6a;for(var _0x43849f=-0x1b1a+-0x3dd+0x1ef7;_0x2c575e[_0x54a7ed(0x367)](_0x43849f,_0xe853c0[_0x54a7ed(0x8e9)+'rs'][_0x54a7ed(0xb90)+'h']);_0x43849f++)_0xe853c0['mean']+=_0xe853c0[_0x54a7ed(0x8e9)+'rs'][_0x43849f]['a'];_0xe853c0[_0x54a7ed(0xcb0)]/=_0xe853c0[_0x54a7ed(0x8e9)+'rs']['lengt'+'h'];}var _0x21d1d0=[];for(var _0x34ab27=0x1*0x1831+-0x1bc3+0x392;_0x34ab27<_0x4cb337[_0x54a7ed(0xb90)+'h'];_0x34ab27++){if(_0x4cb337[_0x34ab27]['membe'+'rs']['lengt'+'h']>=_0x1c0c91)_0x21d1d0['push'](_0x4cb337[_0x34ab27]);}if(!_0x21d1d0[_0x54a7ed(0xb90)+'h']){_0x1915ae[_0x54a7ed(0x1e1)]({'o':-(-0x219e+-0x2478+-0x4617*-0x1),'v':0x0,'why':_0x2c575e['sJiqW']+_0x1c0c91+_0x2c575e['tGqWV']});return;}var _0x47809b=_0x21d1d0[0x2699+0x8a9+-0x107*0x2e]['mean'];for(var _0x572cb5=0x1119+-0x2*0x1f1+0xc7*-0x11;_0x572cb5<_0x21d1d0['lengt'+'h'];_0x572cb5++)if(_0x2c575e[_0x54a7ed(0x367)](_0x21d1d0[_0x572cb5][_0x54a7ed(0xcb0)],_0x47809b))_0x47809b=_0x21d1d0[_0x572cb5][_0x54a7ed(0xcb0)];var _0x9b2114=_0x2c575e['fIfUV'](_0x47809b,0x1de5*-0x1+0x809+0x15dc+0.5);for(var _0x56dae0=-0x34*-0x4d+0x1880+0x1*-0x2824;_0x2c575e[_0x54a7ed(0x202)](_0x56dae0,_0x4cb337['lengt'+'h']);_0x56dae0++){if(_0x4cb337[_0x56dae0]['membe'+'rs'][_0x54a7ed(0xb90)+'h']>=_0x1c0c91)continue;for(var _0x395d41=-0x86d+-0x2*0xf1a+0x26a1;_0x395d41<_0x4cb337[_0x56dae0][_0x54a7ed(0x8e9)+'rs'][_0x54a7ed(0xb90)+'h'];_0x395d41++){_0x1915ae[_0x54a7ed(0x1e1)]({'o':_0x4cb337[_0x56dae0][_0x54a7ed(0x8e9)+'rs'][_0x395d41]['o'],'v':_0x4cb337[_0x56dae0]['membe'+'rs'][_0x395d41]['v'],'why':_0x54a7ed(0x5e9)+'eton'});}}for(var _0x463c92=-0x26cc+-0x8de*0x2+0x3888;_0x463c92<_0x21d1d0[_0x54a7ed(0xb90)+'h'];_0x463c92++){if(_0x2c575e[_0x54a7ed(0xc16)](_0x54a7ed(0x274),_0x2c575e['eqkoW']))try{_0x581756[_0x54a7ed(0x3a4)][_0x54a7ed(0x15a)+'ed']=![];}catch(_0x1170bf){}else{var _0x39b761=_0x21d1d0[_0x463c92][_0x54a7ed(0x8e9)+'rs'];for(var _0x9db134=-0x15ac+0xb89*0x2+-0x166;_0x9db134<_0x39b761['lengt'+'h'];_0x9db134++){var _0x29f813=_0x39b761[_0x9db134];if(_0x2c575e[_0x54a7ed(0x6b7)](_0x29f813['a'],_0x9b2114)){_0x1915ae[_0x54a7ed(0x1e1)]({'o':_0x29f813['o'],'v':_0x29f813['v'],'why':_0x2c575e[_0x54a7ed(0x6be)]+_0x9b2114['toFix'+'ed'](0x31*0x2c+0x1*0x751+-0xfbb)});continue;}var _0x510caf=_0x29f813[_0x54a7ed(0x317)]*_0x4f804c['facto'+'r'];_0x3f76b7(_0xea83d,_0x29f813['o'],_0x54a7ed(0x6c8),_0x510caf)&&(_0x29f813['st'][_0x54a7ed(0x3cd)+'ritte'+'n']=Math['froun'+'d'](_0x510caf),_0x42255++,_0x214f1e[_0x54a7ed(0x1e1)](_0x2c575e[_0x54a7ed(0x9ac)]('0x',_0x29f813['o'][_0x54a7ed(0x265)+_0x54a7ed(0xb19)](-0x1*-0xe84+-0x2*0xae+-0x8*0x1a3))));}}}}var _0x5a4af7={'FPScontroller':[[0x1732+-0xd00+-0xa22*0x1,_0xc654b5(0x6c8)],[-0x95f+0x22*-0x22+0xe0b,_0xc654b5(0x6c8)],[0xfe7+-0x1*-0x2683+-0x362a,_0x2c575e[_0xc654b5(0xc7b)]],[0x243*0x1+0xb6a+0xd55*-0x1,_0xc654b5(0x6c8)],[-0x1a6d+-0x1d87+0x3864,_0x2c575e['HnYdn']],[0xf8a+0x251b+-0x341d,_0xc654b5(0x6c8)],[0x2*-0x815+0x817+-0x8b3*-0x1,_0x2c575e[_0xc654b5(0xc7b)]],[0x1*0x69d+-0x78*-0x32+0x1*-0x1d55,_0x2c575e[_0xc654b5(0x565)]],[-0x1b9+0x7f8+-0x57b,_0xc654b5(0x6c8)],[0x26*0x3d+-0x8d9+-0xa7*-0x1,_0x2c575e['EMaDW']],[-0x1326+-0x5*-0xf4+-0xf42*-0x1,'v3'],[-0xc*0xa3+-0x21*-0x81+-0x811,'u8'],[0x1097+-0x56*-0x2+-0x1053,_0x2c575e[_0xc654b5(0xc7b)]],[0x1d*-0x11f+-0x1db9+0x3f44,_0x2c575e['EMaDW']],[0x4*0xd+0x11e1+-0x1109*0x1,'u8'],[0xd68+0x1429+0x2081*-0x1,_0x2c575e['EMaDW']],[0x11a1*0x1+0x914+-0xf3*0x1b,'u8'],[0x26ed+-0x1246+-0x1392,'u8'],[-0xe2*0x17+-0x230+0x179a,_0x2c575e[_0xc654b5(0xc7b)]],[-0x2710+-0x7b9*0x1+0x2ffd,_0xc654b5(0x6c8)],[0x3*0x639+0x7*-0x1cd+-0x4c4*0x1,'f32'],[-0xc5*0x9+0x4*0x4eb+-0xb6f,_0xc654b5(0x983)],[-0x5*0x1b5+-0x11ab+0x1b88,'v3'],[-0x1add+-0x1ea0+0x3*0x139f,'v3'],[0x53*0xa+0x1167+-0x1339,'f32'],[0x11d6+-0x1c7f+0xc19,_0xc654b5(0x983)],[0xe83*-0x2+-0xec2*0x2+0x3c12,'u8'],[-0x48*0x3b+-0x17de+0x26*0x11b,_0xc654b5(0x983)],[0x56c*0x1+-0x2*0x1b7+-0x1*0x66,'v3'],[-0x1f3b+-0xdaa+-0xd1*-0x39,'u8'],[-0x27b*-0xe+0x1a46+-0x159*0x2c,'f32'],[-0x1*0x168b+-0x28f*-0x3+0x1096,'f32'],[0x7a0+-0x119a*-0x1+-0x2*0xbbf,'u8'],[-0x4a*0x1a+-0x631*-0x6+-0x1*0x1be5,'u8'],[-0x2409*0x1+-0x25d6+0x9*0x867,_0xc654b5(0x6c8)],[0x199e+-0x1e35*0x1+0x66f,_0x2c575e[_0xc654b5(0xac1)]],[0x2*-0xa39+-0x1f04+0x3552,'u8'],[-0x1969+-0xc*0x172+0x2ca1,_0xc654b5(0x6c8)],[0x189+0xcf5+-0xc86,'v3'],[0x13e4+-0x267+-0xf75,_0x2c575e[_0xc654b5(0x565)]],[-0x10b*0x1+-0x153e+-0x1861*-0x1,_0xc654b5(0x983)],[0x1*0x2581+-0xed*-0x1f+0x494*-0xe,_0x2c575e[_0xc654b5(0xac1)]],[0x144c+0x3*0x9e1+-0x32d*0xf,_0x2c575e[_0xc654b5(0xac1)]],[0x95*-0x1+0x223b+-0x1f56,'f32'],[0x1501+0x2567+-0xc2*0x4a,_0xc654b5(0x983)],[0x93e+-0x1*0x17a5+0x595*0x3,'f32'],[-0x2583+0x2056+0x789,'u8'],[-0x58*0x3c+-0x3*-0xabb+-0x934,'u8'],[-0x227e+0x28+0x24b4,'u8'],[0x44b+-0x7*0x301+0x131c,_0xc654b5(0x983)],[-0x22e3+0x1b71+0x9d6,'u8'],[-0x21e7+0x63f+0x1e0d,'u8'],[-0x265f+0x65d+0x226a,_0xc654b5(0x983)],[-0x24b5*-0x1+-0x9e8+-0x1*0x1861,_0x2c575e['GnIXc']],[0xf04+-0x1a34+0xda0*0x1,'f32'],[0x1404+-0x2da*0xd+0x1382,_0xc654b5(0x983)],[-0xff1+-0xc5f+0x1ec8,_0x2c575e['GnIXc']],[-0x17f8+-0x1*0x95c+0x23d0*0x1,_0xc654b5(0x983)],[-0x1*0x833+0xd6*-0x13+0x5*0x551,_0xc654b5(0x983)],[0xfa5+0x22e0+0x3001*-0x1,'v3'],[0x1699+0x3c2+-0x17c7,'u8'],[-0x1*-0x1271+0x1d98+0x2d71*-0x1,'v3'],[-0x8*-0x370+0xb9b+-0x1*0x2477,'f32'],[-0x138c+-0x280*-0x2+0x1138,'v3'],[0xd27*-0x1+0x1*0xbd1+0x40e,_0x2c575e[_0xc654b5(0xac1)]],[-0x1440+-0x1e78+0x4*0xd5d,'f32'],[-0xa6f*0x2+0x1a68+-0x2ca,_0x2c575e['GnIXc']],[-0x1*-0x512+0x709+0x1*-0x957,'u8'],[-0x2f0*-0xb+-0xa*-0x2cd+-0x1*0x398d,'u8'],[-0x15d4*0x1+-0x5*-0xbd+0x14eb,_0xc654b5(0x983)],[0x15ba+0x9*-0xd7+-0xb4f,_0x2c575e[_0xc654b5(0xac1)]],[0x1165+0x231+-0x10b2,'v3'],[-0x5db+0x43a+0x491,'v3'],[0xdb*-0x15+0x1f*-0x51+0x1ec2,_0x2c575e['GnIXc']],[0xe6*-0x12+0x16e5+0x1*-0x3b9,_0xc654b5(0x983)],[0x23d7+-0x2b1*0x9+0x2de*-0x3,_0x2c575e['GnIXc']],[0x1*0xaf3+0x250a+-0x2cf5,'f32'],[-0x1070+-0x115*0x1+-0x15f*-0xf,'v3'],[-0x1*-0x1d4b+-0x2e5+-0x13a*0x13,'u8'],[-0x5a*-0x47+0x5*0x397+-0x27cd,'v3'],[-0x18d*0x1+-0x1601+0x1a*0x107,_0x2c575e[_0xc654b5(0xb15)]],[0x2eb*-0x5+0x1b35*0x1+0x1f*-0x4e,_0x2c575e['GnIXc']],[0x2275+-0x63b+-0x190a,_0xc654b5(0x983)],[-0x26a1*-0x1+-0xa1*-0x4+-0x25f1,'f32'],[-0x1632+-0x137f+0x35*0xd9,_0xc654b5(0x983)],[-0x1e7e+-0x1afc+0x1*0x3cba,'u8'],[0x1*0x5d5+0x4c1+-0x755,'u8'],[-0x1*-0x13+0x5aa+-0x271,'u8'],[0x16d4+-0x1*-0x2205+-0x358c,'u8'],[-0x22ba+0x228f+0x379,'u8'],[0x65*-0x2+0x182d+-0x1413,_0xc654b5(0x983)],[-0x1e59+-0x1*0x1093+-0x1920*-0x2,_0x2c575e[_0xc654b5(0xac1)]],[-0x1bf8+-0x2*-0xfd4+-0xb*0x8,'f32'],[-0x144d+0x7*-0x443+0xa7*0x52,_0xc654b5(0x983)],[-0x1*-0x5cf+0x25df+-0x284e,_0xc654b5(0x983)],[0x11ed+0x154f+0x8f6*-0x4,'u8'],[-0x353*-0x7+-0x1175*-0x1+0x119*-0x22,_0x2c575e[_0xc654b5(0xac1)]],[0x11ec+-0x1abf+0xc3f,_0xc654b5(0x983)],[0x25*0x1a+-0x1002+-0x2*-0x7d8,'u8'],[-0x15ca+-0xa02+0x2344,'v3'],[-0x243e+-0x931+0x1051*0x3,'v3'],[0x5*0x6fe+-0x233e*0x1+0x3d8,'v3'],[-0xb3*0x1a+-0x1*-0x1b47+-0x1*0x57d,'f32'],[-0x3*-0xb11+0x4b*0x3+-0x1e74,_0xc654b5(0x983)],[0x5d*-0x3b+-0x149e+0x2db1,_0xc654b5(0x983)],[-0x24bf+0xbdd+0x1c8a,'v3'],[-0x11*-0x1a3+0x2e3*-0xb+0x7a2,_0x2c575e['EMaDW']],[0x8*0x4b+0x20dd+-0x1f7d,'u8'],[0x73e+-0x750*-0x4+-0x20c2,_0xc654b5(0x72c)],[0x125*-0xa+-0x3*0x737+0x24d7,_0x2c575e['GnIXc']],[0xf*0x285+0x1a15+-0x3c1c,_0xc654b5(0x983)],[-0x2c*-0xc8+-0x1e*-0x7f+-0x2d7a,_0x2c575e[_0xc654b5(0xac1)]],[0x65*0x5e+0x9eb+-0x2b35,_0x2c575e['GnIXc']],[0x8*0x422+-0x6b6*-0x1+0x1*-0x23f6,'v3'],[-0x529*0x2+-0x69*0x3f+0x2ab*0xf,_0xc654b5(0x72c)],[-0xff6+0x47*0x1+0x3*0x685,'u8'],[0x1*-0x245f+-0x13bd+-0x1*-0x3bfd,'u8'],[-0x7ec+0x67b+0x553,'u8'],[-0x1ed3+-0xac4+-0x2d7b*-0x1,_0xc654b5(0x983)],[-0x1c2+-0x33*-0x21+-0xe9,_0xc654b5(0x72c)]],'HealthScript':[[-0x2*-0x13d+-0x1*-0x22cd+-0x24ef,'u8'],[-0x159+-0x161f+-0x19*-0xf4,_0x2c575e['EMaDW']],[-0x1371+0x7ef*0x3+0x3dc*-0x1,_0xc654b5(0x983)],[0x3d8+0x11f1*-0x1+0xe9d,'f32'],[-0x9*-0x42e+0x346*0x5+-0x26e*0x16,_0xc654b5(0x983)],[0x1352+-0x20b4+0xdee,_0x2c575e[_0xc654b5(0xac1)]],[-0x2346+0x1b4d+-0x5*-0x1b5,_0x2c575e[_0xc654b5(0xac1)]],[0x1*-0x3b3+0x437+0x8*0x2,_0xc654b5(0x983)],[0x5bc*0x4+-0x1475+-0x1db,_0xc654b5(0x72c)],[-0x15d7+-0x2*0xc5+0x1805,_0xc654b5(0x72c)],[-0x1*0x805+0xde5+0x4*-0x14e,'u8'],[-0x78b+-0x49f+0xcd3,'u8'],[0x128a+-0x258d+0x13ad,'u8'],[-0xd4f+-0x10de+-0x1ed8*-0x1,'u8'],[0xeeb+0x17*0x4c+-0x14ff,_0xc654b5(0x473)],[0x25e3+-0xeac+-0x1663*0x1,_0xc654b5(0x473)],[0x4c9+-0xc56+0x875,_0x2c575e[_0xc654b5(0x172)]],[0x2*-0x647+-0x16de+-0x2*-0x1234,_0xc654b5(0x473)],[0x71e+-0x297*-0x2+-0xb3c,_0xc654b5(0x473)],[0x3*0x68c+-0x1f6*-0xb+0x2812*-0x1,'obfB'],[-0x49a*0x3+0x26f4*0x1+-0x17f6,_0x2c575e[_0xc654b5(0xc7b)]],[0x1*-0x2666+0x1814+-0xf9a*-0x1,'f32'],[-0x3*0x4ef+0x5*-0x727+0x33dc,_0x2c575e['GnIXc']],[0x7*-0x547+-0xb2c+0x316d,_0xc654b5(0x983)],[-0x1be+-0x7f9*0x1+0xb0b,'f32'],[0x1*0x33+-0x10bb+0x2*0x8f2,_0xc654b5(0x983)],[0x1*-0xb25+0x15e9*-0x1+-0x27*-0xe2,'v3'],[-0x26a9+0x1d6e+0xaab,_0xc654b5(0x983)],[0x94e+0x51*-0xc+-0x40a,_0xc654b5(0x983)],[-0x1c97+-0xae8+0x28ff,'u8'],[0x5*-0x145+-0xada*-0x3+-0x18a9,'u8'],[0x17b*-0xf+0x1440+0x385,_0x2c575e[_0xc654b5(0xb15)]]],'PlayerConfig':[],'WeaponManager':[[0x1b45+-0x1301+-0x82c,'i32'],[-0x961+-0x513*0x1+0xe90,_0xc654b5(0x72c)],[0x2*0xbf1+0x3+0x17c5*-0x1,'u8'],[-0x2b*-0xf+-0xc5d+0x9fc,'i32'],[0xc82+-0x91*0x3d+0x1*0x166f,_0x2c575e[_0xc654b5(0xc7b)]],[0x6d1+-0x232a+-0x29f*-0xb,_0xc654b5(0x983)],[-0x1d96*-0x1+-0x10c0+-0x13*0xa6,_0xc654b5(0x72c)],[-0x624+-0xef0+0x159c,'u8'],[0x1*0x89+-0x1f21+-0x1f21*-0x1,'u8'],[0xbdf+0x8a8*-0x1+-0x2ab,_0xc654b5(0x72c)],[-0x1025+-0x1e28+-0x535*-0x9,_0x2c575e[_0xc654b5(0xac1)]],[0x344+0x46d*0x1+-0x719,_0xc654b5(0x983)],[0xdbd*0x2+-0xc1e+-0xeb0,_0xc654b5(0x72c)],[-0x1*-0x16b8+0xb9*0x2c+0x6b9*-0x8,'u8'],[0xe1d*0x2+-0x1438+-0x726,_0xc654b5(0x473)],[0xd*-0x97+0x8ee+0x1*-0x53,_0xc654b5(0x473)],[0x1207+-0x11c6+0x3*0x41,'f32'],[-0xc1a+0x5*0x700+0x9*-0x26e,'f32'],[-0x2344+0x498*-0x1+0x44*0x9a,_0x2c575e['GnIXc']],[-0x51b+-0x10ae+0x16e1,_0xc654b5(0x983)],[-0x1001*-0x2+-0x1d2*-0x5+-0x27fc,_0xc654b5(0x983)],[0x2*0x71+0xa91*0x3+-0x5*0x649,'u8'],[0x5*-0x4f9+0x67f+0x138a,'obfI'],[-0x127c+0x2210+-0xe54,_0xc654b5(0x473)],[0x1757+0xd7a+-0x237d,'obfI'],[-0x1e1*0x4+0x23*-0x17+0xc11,_0xc654b5(0x4f5)],[-0x1c6*0x5+0x215a+0x4*-0x5c2,_0x2c575e['iRtOd']],[0x38*-0x6f+-0x24d+0x1*0x1c15,_0xc654b5(0x4f5)],[-0xff3*-0x2+-0x16*-0xa9+-0x2ce0,_0x2c575e['iRtOd']],[-0x39*-0xa9+-0x7*0x126+-0xf*0x1dd,_0x2c575e[_0xc654b5(0x565)]],[0x18d0+-0x4*-0x90b+0x6e*-0x8a,_0xc654b5(0x473)],[-0x1f5f+0x1*-0xe62+0x2f8d,_0xc654b5(0x72c)],[-0xa27+0xec8+-0x2d1,'u8'],[0x1*-0x267+0xcb*-0x7+0x9c8,_0x2c575e[_0xc654b5(0xb15)]],[0x1b98+0x1535+0xfa7*-0x3,_0xc654b5(0x72c)],[-0x236f+-0x1e23+-0x4392*-0x1,_0x2c575e[_0xc654b5(0xb15)]],[-0x459+-0x928*0x1+0xf95,'u8'],[-0xca5+-0x1a6*-0x1+-0x1*-0xd1b,'u8'],[0x1124+-0x4a*0x3d+0x29b,'u8'],[0x66e*0x3+0x1*0xffb+-0x2127,'u8'],[-0x239d+0x7bb*-0x1+-0x71*-0x67,'u8'],[0x936+-0x2*-0x11+-0x168*0x5,_0x2c575e[_0xc654b5(0xb15)]],[-0x23*0x9d+-0xcba*-0x1+0xb15*0x1,'u8']],'GG_GameManager':[[-0x1*-0x229+0x8*-0x3d6+0x1cab,'u8'],[-0x3b3+-0x103b+0xa6*0x1f,_0x2c575e[_0xc654b5(0xac1)]],[-0x472*0x3+0xfc2+-0x45*0x8,'u8'],[0x64d*-0x1+-0x11e3*-0x1+-0xb51,'u8'],[0x13*0x1a2+0x42d+0x4fd*-0x7,_0xc654b5(0x983)],[-0x2cf+-0x51*-0x43+-0x1218,_0x2c575e[_0xc654b5(0xac1)]],[-0xc*0x2f7+0xe7c+0x1568,'i32'],[0x5c*-0xa+0x944*-0x4+0xa3f*0x4,_0x2c575e[_0xc654b5(0xb15)]],[-0xe59*-0x1+0x4e*-0x59+0xd1d,'u8'],[-0x995*0x2+0x21c+-0x1182*-0x1,'u8'],[0x7e9+0x1ee5+-0x2656,'f32'],[0x1*0x8d2+0xeae+-0x1704,_0xc654b5(0x983)],[-0x1a28*0x1+-0x21c7+0x1*0x3c7f,_0x2c575e['EMaDW']],[-0x1bb8+0x20*0xf6+-0x13a*0x2,'u8'],[0x1b8f*-0x1+-0x2435+0x4078,'i32'],[-0x19*-0x11b+0x1*0xf28+-0xe05*0x3,_0xc654b5(0x72c)],[0xbd7*0x1+0x146c+0x1*-0x1f83,_0xc654b5(0x72c)],[0x5*0x65+0x12ee*-0x1+0x11dd,_0xc654b5(0x473)],[-0x13*-0x56+0x3*0xc5+0x1*-0x7b5,_0xc654b5(0x473)],[0xca1*-0x1+-0x1375+-0x1*-0x2126,_0x2c575e[_0xc654b5(0x172)]],[-0x2a6+-0xb51*0x3+0x25c5*0x1,'u8'],[0x3c7*0x4+0x6*-0xd1+-0x906,'i32'],[0x26c1+0x1*-0x13a2+0x3*-0x5e9,'u8'],[0x246+-0xe2f+0x473*0x3,_0xc654b5(0x983)],[0x1*-0x21d7+0x3*-0xcbb+-0x8*-0x931,'u8'],[0x1*-0x1963+-0x2529+0x4014,'u8'],[0x2*0xbee+-0x3e0+0x2*-0x92c,'u8'],[-0x42d*-0x8+-0x1ca+-0x1df6,_0xc654b5(0x72c)],[0x8b*-0x42+0x25f3+-0x71,_0xc654b5(0x983)],[-0x12b5+0x1a+0x40f*0x5,'u8'],[0x1c55+0xd33+-0x27d7,'u8'],[-0x68b+-0x7*0x3df+0x235c,_0x2c575e[_0xc654b5(0xb15)]],[0x115a+0x226f+-0x320d,_0xc654b5(0x72c)],[-0x185e+-0x1444+0x2e62,'f32'],[-0x24a6+0x1f*-0xd+0x1d*0x161,_0xc654b5(0x72c)],[-0x2*-0x19c+-0xccd+0xb5d*0x1,_0x2c575e[_0xc654b5(0xac1)]],[-0x2*-0x783+-0x1*-0x2033+-0x2d6d,_0xc654b5(0x72c)],[0x2153+0x1005+-0x1a*0x1d4,_0xc654b5(0x72c)]],'TDM_GameManager':[[-0xe59+-0x12fc+-0x2b*-0xc7,'u8'],[-0xd00*0x2+-0x126e*0x1+-0x2*-0x1647,'u8'],[0x1356*0x1+0x49*-0x83+0x1226,'u8'],[0x21a4+-0x1d97+-0x3e9,_0xc654b5(0x983)],[0x868+-0x1c84+0x44*0x4d,'u8'],[0x303+-0x138d+0x10e6,_0xc654b5(0x983)],[-0x322+0x59*0x67+-0x204d,_0x2c575e[_0xc654b5(0xac1)]],[0x393*0x1+-0x1*-0x233c+0x266b*-0x1,'i32'],[-0x4*0x1e7+-0x93b*0x2+0x1a7a,_0x2c575e[_0xc654b5(0xb15)]],[0x1d*-0xba+-0x2373+0x38f1,'u8'],[-0x7*0x3e+0x9*-0x3a1+0x22c8,'u8'],[0x1a93+0x3*-0xc57+0xae2,'f32'],[0x1a30+-0x1*-0x188f+0x203*-0x19,_0x2c575e['GnIXc']],[-0x209c*0x1+0x160d+0xb07,_0x2c575e[_0xc654b5(0xb15)]],[-0x19ae+0x2f*0x5+0x194f,'u8'],[-0x2*0x314+-0x1*-0x752+-0x9a,_0x2c575e[_0xc654b5(0x172)]],[-0x33*0x52+-0x718*-0x1+-0x1*-0xa16,'obfI'],[0x8e9+-0x243c+-0x1*-0x1c3f,_0x2c575e['qwgqt']],[0x219b+0x244+-0x22df,'obfI'],[-0x5*0xd2+-0x1871+0x1d9f,'u8'],[0x4*-0x4e8+-0x1633*0x1+0x2b2f*0x1,'u8'],[0x17*0xfb+-0x1b4b+0x61e,_0x2c575e[_0xc654b5(0xb15)]],[0x1a3*-0x7+-0xbe1+0xc61*0x2,'u8'],[-0x23*0xf1+-0x10fa+-0x3371*-0x1,'u8'],[-0x158a+-0x1*0x1a33+0x3145,_0x2c575e[_0xc654b5(0xac1)]],[-0x123d+0x1828+-0x45f,'i32'],[0x153c+-0x68f*0x2+-0x68e,_0x2c575e['EMaDW']],[0x15b0+0x2229+-0x3645,'f32'],[0xb5a*0x1+-0x19*0x111+0x10e7*0x1,_0xc654b5(0x72c)],[-0x2*-0xa10+0x1f*0x139+-0x521*0xb,_0xc654b5(0x72c)],[-0x659+0x11d7+-0x9de,_0xc654b5(0x983)],[-0x54c+0x32*0x9d+-0x17ba,'f32'],[-0xfed+-0x2293+0x3428,_0xc654b5(0x72c)],[-0x2*-0x922+0x7d*-0x35+0x94d,'u8'],[0x10*0x218+-0x265*-0x7+-0x3092,'u8'],[-0x2478+-0x1*0x2fe+0x2a*0xfb,_0xc654b5(0x983)]],'PhotonNetworkSync':[[-0x5*-0x6e6+-0x23b+-0x200f,'v3'],[0x2150+0xf26+-0x462*0xb,_0x2c575e[_0xc654b5(0xb15)]],[0x1f78+-0xe74+0x860*-0x2,'u8'],[0x71d+-0x17ab*-0x1+0x1*-0x1e83,'u8'],[0xa*0x1+-0x281+0x2bf,'v3'],[-0x53f*0x2+0x8*-0x4c3+0x30ea,'u8'],[0x9a5*0x1+-0x1434+0xae7,_0xc654b5(0x72c)],[0x5*0x664+-0x151e+-0xa7a,_0x2c575e[_0xc654b5(0xb15)]],[0x7ed*0x1+-0x1d65+0x15d8,_0x2c575e[_0xc654b5(0xac1)]],[0x1317+0x22e7+-0x359a,'f32'],[0x1*-0x26b4+0xd34+0x19e8,_0x2c575e[_0xc654b5(0xac1)]],[-0x1*-0xa5b+0x2*-0x377+0x1*-0x301,'v3'],[0x25*-0x3+-0x4*-0x994+-0x2569,_0xc654b5(0x983)],[-0x1*0x359+-0x1576+0x194b,'f32'],[0x1bc3+0x19*-0xfd+0xda*-0x3,'i32'],[-0xc5b*-0x1+-0x2160+0x158d,_0xc654b5(0x983)]],'MouseLook':[[0x2416+0x404*0x3+-0x300e,_0xc654b5(0x983)],[0x1c2b+-0xb0f*0x3+-0x28d*-0x2,_0xc654b5(0x983)],[0x6f4+-0x1*-0x767+-0xe3f,_0xc654b5(0x983)],[-0x22c7*-0x1+0x201a+-0x42c1,'f32'],[0x49*-0x17+0x20cb+-0x1*0x1a18,_0x2c575e[_0xc654b5(0xac1)]],[-0x12e+0x19*0x185+-0x24a7,_0x2c575e['GnIXc']],[-0x65*-0xc+0x18c9+-0x1d55*0x1,_0xc654b5(0x983)],[0x74b+-0xf47*-0x1+0x332*-0x7,'u8'],[0x2619+0x1d3+-0x27b4,_0x2c575e[_0xc654b5(0xac1)]],[0x1*0x3fb+-0xe7a+0xabb,'f32'],[-0x581*0x2+0x842+0xc*0x40,_0xc654b5(0x72c)],[0xef6+-0x1196+0xb9*0x4,'u8'],[0x23e0+0x13f6+-0xd*0x446,'v2']],'NetworkPlayerAnimations':[[0x8ae+-0x233a+0xd9a*0x2,'v3'],[-0x3*0x346+-0x252+0xcd8,'v3'],[0x1bde+0x1a5*0x13+-0x3a5d,'u8'],[-0x36*0x25+-0x5d8+-0x2e2*-0x5,_0xc654b5(0x72c)],[-0x553*0x5+-0x77b+-0x26*-0xeb,'i32'],[0x1*-0x111a+-0x137e+0x2*0x12b2,_0xc654b5(0x983)],[0x9f8+-0x13*-0x42+-0x1*0xe0e,'f32'],[-0x16b4+0x2*-0x4d0+0x2130,_0xc654b5(0x983)],[0x2*-0x78c+0x101*-0x3+-0x12fb*-0x1,_0x2c575e['GnIXc']],[-0xad+-0xb*0x1ad+0x1404,'f32'],[-0x1a12+-0x1*0x2105+0x9*0x6ab,_0xc654b5(0x983)],[-0x3a5*-0x3+0x1a5*-0x14+0x16e5,'f32'],[0x1386*0x1+0x1257+0x24e9*-0x1,'f32'],[0x1*-0xe2b+0x1*-0xbaf+-0x1ad2*-0x1,'f32'],[-0xb+-0x1f14+-0x1*-0x201b,_0x2c575e[_0xc654b5(0xac1)]],[-0xf9+-0x149f+0x6*0x3c4,_0xc654b5(0x983)],[0x215d+0xbe5+-0x161f*0x2,_0xc654b5(0x983)],[0x1242+0x1*0x10e8+-0x2222,_0xc654b5(0x72c)],[0x20df+-0x32d*0x7+-0x4*0x266,'u8'],[0x1a53+0xa*0x3e5+-0x4035,_0xc654b5(0x72c)],[-0x24cd+-0x24e0+-0x3*-0x18eb,_0x2c575e['EMaDW']],[-0xb05*-0x1+0x71d+-0x110a,'u8'],[0x451+-0x8ba+0x9*0x9d,_0xc654b5(0x983)],[-0x269*0x7+0x1*0x3da+0xe25,_0x2c575e['GnIXc']],[0x2*0x4d6+0x16d9*0x1+0x115*-0x1d,_0xc654b5(0x983)],[0x1*0x1d23+-0x4*-0x3a+-0x1ce3,_0xc654b5(0x983)],[0x1*0x58f+-0x1*-0xa31+0xc*-0x137,'u8'],[-0x12c+-0x1330+0x1594,'u8'],[-0x425+-0x7*-0x3b3+-0x1484,'v3'],[0x1*0x1f0a+0xb*0x14e+-0x2c1c,'v3'],[0x98e+-0x188f+0x1095,'u8']],'NPC_Cotroller':[[-0x1034*0x1+0x1*-0xdb7+0x1dff,'v3'],[0x1*0xd55+-0x16e3+0x9ae,_0x2c575e[_0xc654b5(0xac1)]],[-0x1*-0x173b+-0x25e+0x1*-0x14b9,'f32'],[-0x1*-0xd69+-0x1*0x7ce+-0x545,'u8'],[-0xa*0x23e+0xcf*0x1+0x15f4,'u8'],[-0x1c08+-0xac3+0x2727,'v3'],[0x1f8a+-0x15fe+-0x58*0x1a,'u8'],[0x100d+-0x1*0x10e8+-0x17b*-0x1,_0x2c575e['GnIXc']],[0x7d7*0x3+-0x51*-0x24+-0x2245,_0x2c575e[_0xc654b5(0xac1)]],[-0x24ab+-0x1000+0x3563,_0xc654b5(0x983)],[0x26b5+0x1794+-0x3d8d,_0xc654b5(0x983)],[-0x4*-0x8d2+0x57*0x19+-0x9*0x4c7,'u8'],[-0xcf+0x178a+-0x15ef,_0xc654b5(0x983)],[0x14b*0x3+0xc*0x2d+-0x525,_0xc654b5(0x983)],[-0xefe*0x1+0xa88*0x2+-0x536,_0xc654b5(0x983)],[0x8b3+-0x1*-0x35a+0x1*-0xb2d,_0x2c575e['GnIXc']],[0x5*-0x1cf+0x6da+0x315,'u8'],[-0xa*0x11b+0x1146+-0x2a6*0x2,_0xc654b5(0x983)],[0x27d+0x1849+-0x19d6,'v3'],[0x1d0+0x16d2+-0x2*0xbd3,'f32'],[-0x5a2+-0x1f3d+-0x7*-0x569,_0xc654b5(0x72c)],[0x23*0x106+0x17dc+-0x1d55*0x2,_0xc654b5(0x983)],[0x2f5*-0x5+-0x3ec*0x4+-0x1f81*-0x1,_0x2c575e['GnIXc']],[-0x6cf*0x4+-0x97*-0x1a+0x1*0xcf2,_0x2c575e[_0xc654b5(0xac1)]],[-0x226*0x11+0x2000+0x59a,'v3'],[-0x645+-0x2*-0x231+0x101*0x3,_0x2c575e[_0xc654b5(0xac1)]],[-0x22c*-0x3+-0x1a7*0x16+0x1efa,_0x2c575e[_0xc654b5(0xac1)]],[0x1dc5+-0x4*0x892+-0x5b7*-0x1,'v3'],[-0x10*-0x242+-0x1*0x217+-0x1*0x20c5,'u8'],[-0x4db+-0x19ab*0x1+-0xfe7*-0x2,_0x2c575e[_0xc654b5(0xac1)]],[0x8e6+-0x16*0x107+0xf04,'v3'],[0x1*0x17b1+-0x24fd*0x1+0xeac,_0x2c575e[_0xc654b5(0xb15)]],[-0x656+0xa38+-0x23*0x12,_0x2c575e[_0xc654b5(0xb15)]],[-0x15*-0x149+-0x17f*0xa+-0xa97*0x1,_0xc654b5(0x983)],[-0xefd+-0x122f+0x22a0,'u8'],[0x3*-0xaff+0x1ed5+0x3a0,'v4'],[0x20c*-0xa+-0x4*0x699+0x3064,'f32'],[0x9a*0x8+-0x1*0x9b+-0x2a9,_0xc654b5(0x983)],[0x145a+0x1f05+-0x31cf,_0xc654b5(0x983)],[-0x3f*-0x56+-0x1e34+0xaa2,'u8'],[-0x29e*-0xe+0x1cd2*0x1+-0x3fd6,_0x2c575e[_0xc654b5(0xb15)]]],'TargetHealth':[[-0x11*0x4c+0x772*0x2+-0x9c8,'i32'],[0x5*0x28+0x12*0x1e9+-0x2316,_0x2c575e[_0xc654b5(0xb15)]],[0x2e3+-0x3*0x868+0x1689,'u8'],[-0xc97*-0x1+0x2187+0x2*-0x16ed,_0xc654b5(0x72c)],[-0x189f*0x1+-0x1fc6+0x38ad,_0xc654b5(0x72c)],[-0x49c+0x1*0x23ec+-0x1f04,_0xc654b5(0x72c)],[0x18d6+0x2*-0xde5+-0x2c*-0x13,'i32'],[0x1*0x2d7+0x1*0x6df+0x1*-0x932,_0x2c575e['GnIXc']],[0x93*-0x23+0x1f67*-0x1+0x340c,'f32'],[0xb5c+-0x1633+0xb67,'u8'],[0xc*0x19d+-0x4ee+0x12*-0xc5,_0x2c575e[_0xc654b5(0xac1)]],[0xd1c+0x407+-0x107f*0x1,'u8'],[-0x50d+0x562+0x53,_0x2c575e[_0xc654b5(0xb15)]],[0x1*0x773+-0xfd*-0x3+-0x9be,_0xc654b5(0x72c)],[-0x1365+0x1b16+-0x6f1,_0x2c575e[_0xc654b5(0xac1)]],[-0x2a7*0x1+-0x1bc3+0x1f36,'u8']],'SectatorCamera':[[-0x3*0x74e+-0x16d2+0x2cd0,_0x2c575e[_0xc654b5(0xac1)]],[0x7bf*-0x2+0x2b4+-0x2*-0x671,_0xc654b5(0x983)],[0x2116+-0x9e9+-0x5*0x49d,_0xc654b5(0x983)],[-0x1*-0x135+0xd46*0x1+-0xe5b,'v3'],[0x577*0x1+-0x54d+-0x2*-0x1,'v3'],[-0x5*0x35b+0x356*0xa+0x141*-0xd,_0x2c575e[_0xc654b5(0xb15)]],[-0xcd+0x6*0x224+-0xbbf,_0xc654b5(0x72c)],[-0x1*-0x2496+0xb*0x233+-0x3c77,_0x2c575e[_0xc654b5(0xac1)]],[-0x1e06+-0x350+-0x3e*-0x8b,_0xc654b5(0x72c)],[-0xf10+0x11*0x24b+-0x1793,_0xc654b5(0x983)],[-0x145*-0x7+-0x1*-0x171f+0x1fa6*-0x1,'u8'],[0x1897+0x1102+-0x2939,'v3'],[0x5*0x38d+-0x6f8+-0xa5d,'v4'],[0x1*0x1d14+0xff1+0xd*-0x36d,'u8'],[0x1256+-0x1870+0x41*0x1a,'i32']],'UISettings':[[0x1542+-0x1*0x1009+0x2d*-0x1d,_0xc654b5(0x72c)],[0x4*-0x6aa+0x1a5b+0x1*0x75,_0x2c575e['GnIXc']],[0x311*0x8+-0x2183+-0x2b*-0x3d,'u8'],[0xff*0xf+0x1e57*0x1+-0x2c00,_0x2c575e['EMaDW']],[0xd8b*0x2+0x1251*0x1+0x3*-0xeb1,_0xc654b5(0x72c)],[-0x2556+0xd05+0x19a9,'i32'],[0x3b5*-0x5+0x23e9+0x14*-0xcd,'u8'],[0xbde+-0x1*-0x2477+-0x9*0x538,'u8'],[-0xb58+-0x1*-0x21f+0xa97,'u8'],[0x2a*0xb9+0x278*0xc+-0x3a9b,'u8'],[0x1*-0x10f1+0x941+0x910,'u8'],[0x1*-0xb38+-0x9*-0x15b+0x66,'u8'],[-0x6c5+-0x1ba4*-0x1+-0x137d,'u8'],[-0x2c*-0x85+-0x1*-0x1877+0x1*-0x2d97,_0x2c575e[_0xc654b5(0xac1)]],[-0x167*0x8+-0x77d+0x1479,_0xc654b5(0x983)],[-0xdf*-0x13+-0x1*-0x1585+-0x23fa,'u8'],[0xf71+0x2171+-0x2*0x1731,_0x2c575e['GnIXc']],[-0x11d1*-0x2+0x4*0x493+-0x334e,_0xc654b5(0x72c)],[-0x1*-0x13fe+-0x1*-0x10d+-0x295*0x7,'u8'],[-0x1e36+-0xd3b+0x2f0d,'u8'],[-0x1*-0x2392+0x14ca+-0x34bc,'v2'],[0x85+-0x1*-0x16b5+-0x1392,'v2'],[-0x204f+0x2*-0x1082+0x9*0x7ab,'u8'],[0xb*-0x11b+0x1*-0x829+0xc05*0x2,'u8'],[0x4*-0x329+0x32*-0x9+0x919*0x2,_0xc654b5(0x983)],[-0x1*0x2452+0x1ab9+0xd69,'v3'],[-0xdd*-0x2a+-0x2687+0x8f*0xb,'f32'],[-0x2b0*0x2+0x1f*0x4a+0x27*0x2,_0x2c575e['GnIXc']],[-0x1ffd+0xc07+-0x5*-0x4c6,_0x2c575e[_0xc654b5(0xac1)]],[0x24f6+-0xcd+0x1*-0x2039,'u8'],[-0x1ae0+0x1690+0x841,'u8'],[-0x1e44+-0x235b+-0x7bb*-0x9,_0xc654b5(0x72c)],[0x570+0xbac+0x2*-0x68e,_0x2c575e[_0xc654b5(0xb15)]],[-0x1d74+-0x170a+0x2*0x1c41,'i32'],[0x25*-0xb6+-0x1b*-0x101+0x1*0x33b,_0x2c575e['EMaDW']],[-0x1e2b+0x5bd+0x1c7a,_0x2c575e[_0xc654b5(0xb15)]],[0x1*-0x1ce1+0x7*-0x29d+-0x2*-0x199e,_0x2c575e[_0xc654b5(0xb15)]],[-0x1b64+-0x21c9+0x4141*0x1,'i32'],[-0x1b90+-0x131f*0x1+0x26b*0x15,_0xc654b5(0x72c)],[-0xa1*-0xb+0x1708+0xf*-0x1b9,_0xc654b5(0x72c)],[0x26a*-0xb+0x8cb*0x1+-0xd*-0x1af,_0x2c575e[_0xc654b5(0xb15)]],[-0x13*-0x57+0x2117*0x1+0x284*-0xe,'u8'],[-0x59*-0x4a+-0x15c8+-0x63*-0x1,'u8'],[0xef6+-0x13b8+0x184*0x6,'u8'],[0x15de+0x1794+-0x291b,'u8'],[0x1a3*-0x17+-0x1*-0x19f+-0x9*-0x482,_0x2c575e[_0xc654b5(0xac1)]]]},_0x248f05={},_0x48ecac={};function _0xb571bb(_0x44ccbe,_0x4da1f9,_0x3d2101){var _0x10cd6a=_0xc654b5,_0x52ff61={'sJWRj':function(_0x410f3c,_0x2a4e4e){return _0x2c575e['oYIDY'](_0x410f3c,_0x2a4e4e);},'zfOpz':_0x2c575e[_0x10cd6a(0x478)],'atTtk':function(_0x360a34,_0x174f4e){return _0x360a34===_0x174f4e;}};return function(_0x1acc00){var _0x4af44b=_0x10cd6a,_0x8e8a53={'vasFy':function(_0x25b6cd,_0x3cc370){return _0x2c575e['MsgpC'](_0x25b6cd,_0x3cc370);},'ycHfh':_0x2c575e['Lhqvd'],'MSFnj':function(_0x140e2f,_0x209e32){return _0x140e2f===_0x209e32;}};try{var _0x2cc762=_0x1acc00&&_0x1acc00[_0x4af44b(0xad4)]?_0x1acc00[_0x4af44b(0xad4)]():0x1*-0x1751+-0x13f*-0x13+-0x2e*0x2;if(!_0x2cc762)return;var _0x500789=_0x48ecac[_0x44ccbe]||(_0x48ecac[_0x44ccbe]={}),_0x27fff0=_0x500789[_0x2cc762];if(!_0x27fff0)_0x27fff0=_0x500789[_0x2cc762]={'ptr':_0x2cc762,'firstSeen':Date['now'](),'hits':0x0};_0x27fff0['hits']++;if(_0x3d2101){if(!_0x248f05[_0x2cc762])_0x248f05[_0x2cc762]={'ptr':_0x2cc762,'kind':_0x44ccbe,'firstSeen':Date['now'](),'hits':0x0};_0x248f05[_0x2cc762][_0x4af44b(0x43b)]++;}else{var _0x58cd37=_0xee751[_0x44ccbe];if(!_0x58cd37||_0x58cd37['ptr']!==_0x2cc762){_0xee751[_0x44ccbe]={'ptr':_0x2cc762,'firstSeen':Date[_0x4af44b(0x53a)](),'hits':0x0,'replaced':!!_0x58cd37};try{var _0x1d55d5=_0x32ffa3[_0x4af44b(0xa42)+'r'](function(_0x43a38e){var _0x8e4f5f=_0x4af44b,_0x85a09c={'pEesF':_0x8e4f5f(0xb4b)};if(_0x8e8a53[_0x8e4f5f(0x759)](_0x8e8a53['ycHfh'],'AQXVu'))return _0x8e8a53[_0x8e4f5f(0x3cc)](_0x43a38e[_0x8e4f5f(0x86f)],_0x44ccbe);else{var _0x2c972c={};for(var _0x1bdb85 in _0x328d2d){var _0x3ce6e4=_0x5a819d[_0x1bdb85];for(var _0xdc85d=-0x13f7+0x17*0x85+0x4c*0x1b;_0xdc85d<_0x3ce6e4[_0x8e4f5f(0xb90)+'h'];_0xdc85d++){_0x2c972c[_0x1bdb85+_0x85a09c['pEesF']+_0x3ce6e4[_0xdc85d]['o']['toStr'+'ing'](0x2a*0xc5+-0x19a3+-0x69f)]=_0x3ce6e4[_0xdc85d]['v'];}}return _0x2c972c;}})[-0x1ce2+0x1*-0x2ce+0x1fb0];_0x192f0d={'type':_0x44ccbe,'atMs':Date[_0x4af44b(0x53a)]()-_0x3b0a0e,'originalFunc':!!(_0x1d55d5&&_0x1d55d5[_0x4af44b(0x3a4)]&&_0x2c575e[_0x4af44b(0x5b3)](typeof _0x1d55d5[_0x4af44b(0x3a4)][_0x4af44b(0x22e)+'nalFu'+'nc'],'funct'+_0x4af44b(0x664))),'resolveGameAtFire':!!_0x2c575e['HadTG'](_0x1e751b),'gameSourceAtFire':_0x39ad13['sourc'+'e']};}catch(_0x5e2298){}}}if(_0x44ccbe===_0x2c575e['CNAyN']&&_0x4f804c['on'])try{_0x523939(_0x2cc762);}catch(_0x396e66){}if(!_0x4da1f9){var _0x1d55d5=_0x32ffa3[_0x4af44b(0xa42)+'r'](function(_0x597ec2){var _0x12f674=_0x4af44b,_0x382214={'otqwS':'none','CSQNV':'open','XCSqN':_0x12f674(0x873)+_0x12f674(0x632)+_0x12f674(0x94c),'bCnCj':'auto'};if(_0x52ff61['sJWRj']('LIJzp',_0x52ff61[_0x12f674(0x8b5)]))return _0x52ff61['atTtk'](_0x597ec2[_0x12f674(0x86f)],_0x44ccbe);else{if(_0x1f5836)_0x1f0fb2[_0x12f674(0x7fb)][_0x12f674(0x305)+'ay']=_0x57bd6a?'':_0x382214[_0x12f674(0x856)];if(_0x135921)_0x5f3178['textC'+'onten'+'t']=_0x5c933c?_0x12f674(0x207):_0x382214['CSQNV'];_0x2b00a8['style'][_0x12f674(0x1b3)]=_0x3e0186?_0x382214[_0x12f674(0x465)]:_0x382214['bCnCj'],_0x560e28[_0x12f674(0x7fb)][_0x12f674(0x3ce)+'round']=_0x337793?_0x12f674(0x4a3)+'1d':_0x12f674(0x534)+'21,12'+',29,.'+'9)';}})[-0xcd2+0x5*-0x63a+0x2bf4];if(_0x1d55d5&&_0x1d55d5[_0x4af44b(0x3a4)])try{_0x1d55d5['hook'][_0x4af44b(0x15a)+'ed']=![];}catch(_0x3c2f36){}}}catch(_0x4cfd67){}};}function _0x2e99d7(){var _0x1c4afc=_0xc654b5;if(_0x32ffa3[_0x1c4afc(0xb90)+'h'])return!![];if(!window['Unity'+'WebMo'+'dkit']||!window[_0x1c4afc(0x2f5)+'WebMo'+_0x1c4afc(0xa19)][_0x1c4afc(0x4e0)+'me'])return![];var _0x39117f=window['Unity'+'WebMo'+_0x1c4afc(0xa19)][_0x1c4afc(0x4e0)+'me'];if(!_0x39117f[_0x1c4afc(0x84b)+'ns']||!_0x39117f[_0x1c4afc(0x84b)+'ns'][_0x1c4afc(0xb90)+'h'])return![];_0x5ddcb3=window[_0x1c4afc(0x2f5)+_0x1c4afc(0x5ee)+_0x1c4afc(0xa19)][_0x1c4afc(0x62c)+'Wrapp'+'er'],_0xdea9ac=_0xdea9ac||_0x39117f[_0x1c4afc(0x84b)+'ns'][_0x39117f['plugi'+'ns'][_0x1c4afc(0xb90)+'h']-(-0xf83+-0x249d+0x3421)];if(!_0xdea9ac||typeof _0xdea9ac[_0x1c4afc(0x887)+_0x1c4afc(0xb1b)]!==_0x1c4afc(0x24b)+_0x1c4afc(0x664))return![];for(var _0x3d5426=-0x1661+-0x266e+0x3ccf;_0x2c575e[_0x1c4afc(0xc22)](_0x3d5426,_0x17d022['lengt'+'h']);_0x3d5426++){var _0x5be292=_0x17d022[_0x3d5426];try{var _0x243088=_0xdea9ac[_0x1c4afc(0x887)+_0x1c4afc(0xb1b)]({'typeName':_0x5be292['type'],'methodName':_0x2c575e['tUNyL'],'params':['i32','i32'],'returnType':undefined},_0xb571bb(_0x5be292[_0x1c4afc(0x86f)],_0x5be292['keep'],_0x5be292['many']));_0x32ffa3[_0x1c4afc(0x1e1)]({'type':_0x5be292[_0x1c4afc(0x86f)],'hook':_0x243088,'keep':_0x5be292['keep']});}catch(_0x11bd61){_0x4d0530[_0x1c4afc(0x1e1)](_0x2c575e[_0x1c4afc(0x9e8)](_0x5be292[_0x1c4afc(0x86f)],':\x20')+String(_0x11bd61&&_0x11bd61['messa'+'ge']||_0x11bd61)[_0x1c4afc(0x8c4)](-0x1395*-0x1+0x1b*0x93+-0x2316,-0x43*0x2+0x157*-0x7+0xa87));}}return _0x2c575e['WtrBG'](_0x32ffa3[_0x1c4afc(0xb90)+'h'],0x22a*-0x12+-0x2460+0x4b54);}function _0x194430(_0x33d65d,_0x50d1ef){return function(){var _0x4422b4=_0x3c88;try{if(_0x4422b4(0xc2d)===_0x4422b4(0xc2d)){var _0x23bbcb=_0x4b5013[_0x50d1ef]||(_0x4b5013[_0x50d1ef]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0}),_0x4da8a0=arguments;if(_0x33d65d==='get'){var _0x1a39b0=_0x4da8a0[-0x2ab*0x1+-0x1eb*0x5+-0x416*-0x3];if(_0x1a39b0&&typeof _0x1a39b0[_0x4422b4(0xad4)]===_0x2c575e[_0x4422b4(0x901)]){_0x23bbcb['last']=_0x1a39b0['val'](),_0x23bbcb[_0x4422b4(0x43b)]++;if(_0x4da8a0[0x11cc+-0x773+-0x14b*0x8]&&_0x2c575e[_0x4422b4(0x7a9)](typeof _0x4da8a0[-0x46+-0x3*0x389+-0xc7*-0xe]['val'],_0x2c575e['OouUS'])){var _0x43873a=_0x4da8a0[-0x162*0x3+-0x1b06+-0x17*-0x15b]['val']();if(_0x43873a)_0x109959=_0x43873a;}}}else{_0x4da8a0[0x1*0xabd+-0x1135+0x679*0x1]&&_0x2c575e['WoaaC'](typeof _0x4da8a0[0x24f8*-0x1+0xc78+-0x1*-0x1881][_0x4422b4(0xad4)],_0x4422b4(0x24b)+'ion')&&(_0x23bbcb[_0x4422b4(0xb27)+'st']=_0x4da8a0[-0x123*0x3+0x25a1+-0x2237][_0x4422b4(0xad4)](),_0x23bbcb['setHi'+'ts']++);_0x4da8a0[-0x59c+-0x26a5+0x2c43]&&_0x2c575e['rSHxP'](typeof _0x4da8a0[0x7*-0xb2+-0x255d+0x2a3d]['val'],_0x4422b4(0x24b)+_0x4422b4(0x664))&&(_0x23bbcb['setB']=_0x4da8a0[-0x498+-0x2*-0x866+-0xc32][_0x4422b4(0xad4)](),_0x23bbcb[_0x4422b4(0x6c3)+_0x4422b4(0x45f)]++);if(_0x4da8a0[0x92e+-0x65*-0x1c+-0x143a]&&typeof _0x4da8a0[0x12d9*0x1+-0x4*-0x1fc+0x1ac9*-0x1]['val']===_0x2c575e[_0x4422b4(0x901)]){var _0x1abe26=_0x4da8a0[0x118e+0x1a5*0x7+0x1d11*-0x1][_0x4422b4(0xad4)]();if(_0x1abe26)_0x109959=_0x1abe26;}}}else return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};}catch(_0x2e523c){}};}function _0x1a48fd(){var _0x2181af=_0xc654b5,_0x152bf6={'LzskP':function(_0x257a61,_0x22e037){return _0x257a61===_0x22e037;},'abFnG':_0x2c575e['BGMOj']};if(_0x2cf971)return!![];if(!_0xdea9ac||_0x2c575e[_0x2181af(0x3f1)](typeof _0xdea9ac['hookP'+'ostfi'+'x'],'funct'+_0x2181af(0x664)))return![];var _0x5cc273=_0x4ee912[_0x2181af(0xa88)+_0x2181af(0xb1a)]||[];for(var _0x1d4934=-0xbbf+-0x169*-0x2+0x8ed*0x1;_0x2c575e['fwDQp'](_0x1d4934,_0x5cc273[_0x2181af(0xb90)+'h']);_0x1d4934++){if(_0x2c575e['QQqkZ'](_0x2181af(0x26a),_0x2181af(0xc6a))){var _0x49c044=_0x5cc273[_0x1d4934];try{if(_0x49c044[_0x2181af(0x346)]===_0x2181af(0x3d9))_0xdea9ac['hookP'+_0x2181af(0x31e)+'x']({'typeName':_0x2181af(0xa88)+_0x2181af(0xb1a),'methodName':_0x49c044['name'],'params':_0x49c044[_0x2181af(0x4eb)+_0x2181af(0x45c)],'returnType':_0x49c044[_0x2181af(0x7b4)+'et']},_0x194430(_0x2181af(0x9d5),_0x49c044['name']));else _0x49c044['ret']===_0x2c575e[_0x2181af(0xb8c)]&&_0x49c044['param'+'s'][_0x2181af(0xb90)+'h']===-0xe3*0x2a+0xe8d+0x16b2&&_0x2c575e[_0x2181af(0x640)](_0x49c044['param'+'s'][-0x1*-0x1837+0x242f+-0x3c66],_0x2c575e[_0x2181af(0xb00)])&&_0xdea9ac[_0x2181af(0x887)+'refix']({'typeName':_0x2181af(0xa88)+_0x2181af(0xb1a),'methodName':_0x49c044[_0x2181af(0x1cb)],'params':_0x49c044['wasmP'+'arams'],'returnType':undefined},_0x2c575e['KbLHh'](_0x194430,_0x2181af(0xa2b),_0x49c044['name']));}catch(_0x3fe772){_0x2803d8['push'](String(_0x3fe772&&_0x3fe772[_0x2181af(0xa26)+'ge']||_0x3fe772)['slice'](0x24c0+-0xa41+0x39*-0x77,-0x1e33+-0x1066+-0x2f11*-0x1));}}else{var _0xe383f6=arguments[_0x3d7213];if(_0x152bf6[_0x2181af(0xbe2)](typeof _0xe383f6,_0x152bf6[_0x2181af(0x41e)]))_0x326965+=_0xe383f6;else{if(_0xe383f6&&_0xe383f6['messa'+'ge'])_0x54bb02+=_0xe383f6[_0x2181af(0xa26)+'ge'];}}}return _0x2cf971=!![],!![];}function _0x1164df(){var _0x135079=_0xc654b5,_0x3c58d3=null,_0x570625=-0x1*0x135d+-0x150e+0x286b;for(var _0x3a0e7c in _0x4b5013){if(_0x2c575e[_0x135079(0x411)]('yCStF','WFcpJ'))_0x1a0bab[_0x135079(0xafb)+_0x135079(0xa67)]['push'](_0x2c575e['XeacN'](_0x2c575e['xxamW'],_0x39c540['keys'](_0x248f5c['insta'+_0x135079(0x143)])['lengt'+'h'])+_0x2c575e[_0x135079(0x826)]+(_0x1a5d11[_0x135079(0x2c9)+'rror']?_0x135079(0xae4)+'n:\x20'+_0xc93128[_0x135079(0x2c9)+'rror']:'No\x20re'+_0x135079(0x6a7)+'iled,'+_0x135079(0xbdc)+_0x135079(0xaad)+'offse'+'t\x20was'+'\x20skip'+'ped\x20b'+_0x135079(0xaa3)+'e.'));else{var _0x1b0e6e=_0x4b5013[_0x3a0e7c];if(_0x1b0e6e[_0x135079(0x6c3)+'its']&&_0x2c575e[_0x135079(0x772)](_0x1b0e6e[_0x135079(0x6c3)+_0x135079(0x45f)],_0x570625)&&_0x2c575e[_0x135079(0x81c)](typeof _0x1b0e6e[_0x135079(0xb27)+'st'],_0x135079(0x973)+'r')&&_0x2c575e['MilMS'](typeof _0x1b0e6e[_0x135079(0x3c2)],'numbe'+'r')&&_0x2c575e['srPJp'](isFinite,_0x1b0e6e[_0x135079(0xb27)+'st'])&&isFinite(_0x1b0e6e[_0x135079(0x3c2)])){if(_0x2c575e['eTlfP'](_0x2c575e[_0x135079(0x65a)],'LGxRJ'))_0x3c58d3={'rawA':_0x1b0e6e[_0x135079(0xb27)+'st'],'rawB':_0x1b0e6e[_0x135079(0x3c2)],'hits':_0x1b0e6e['pairH'+'its'],'name':_0x3a0e7c},_0x570625=_0x1b0e6e[_0x135079(0x6c3)+_0x135079(0x45f)];else{_0x26f31a(_0x202fa5['cat']);try{var _0x43142c=_0x57d828['inner'+_0x135079(0x8f5)+'t']||-0xd*0xd7+-0x79*0x4d+0x3270;if(_0x43142c<-0x15*0x11+0x10*-0x22d+0x26a1)_0x2c575e[_0x135079(0xa4b)](_0x629d1e,![]);}catch(_0x45428e){}}}}}if(!_0x3c58d3)return null;var _0x317a01=_0x3c58d3['rawA']>=-(-0x577*-0x3+-0x12a*0x17+0xabb)&&_0x3c58d3[_0x135079(0xb73)]<=-0x5e*-0x57+-0x696+-0x123*0x16,_0x419e6c=_0x2c575e[_0x135079(0xaea)](_0x3c58d3[_0x135079(0x4ee)],-(0x1*-0x1ee2+0x5*0x10d+0x19fb))&&_0x3c58d3[_0x135079(0x4ee)]<=0x44c+0x1011*-0x2+0x1c30;return _0x317a01!==_0x419e6c?(_0x3c58d3[_0x135079(0xa7f)]=_0x317a01?_0x3c58d3[_0x135079(0xb73)]:_0x3c58d3[_0x135079(0x4ee)],_0x3c58d3['yaw']=_0x317a01?_0x3c58d3['rawB']:_0x3c58d3['rawA'],_0x3c58d3['order']=_0x317a01?_0x135079(0x2ee):_0x2c575e[_0x135079(0x48f)]):(_0x3c58d3[_0x135079(0xa7f)]=null,_0x3c58d3[_0x135079(0x94f)]=null,_0x3c58d3[_0x135079(0x603)]=_0x2c575e[_0x135079(0x595)](_0x135079(0x283)+'olved'+'\x20(',_0x317a01?_0x135079(0x570)+_0x135079(0xadb)+'ed':_0x2c575e[_0x135079(0x1dd)])+')'),_0x3c58d3;}function _0x2cb4f2(){var _0x154076=_0xc654b5,_0x15f57c=-0xd*0x1fb+-0x6f6*-0x2+-0x3f1*-0x3;for(var _0xfb87a5=-0xa9e+-0x1*-0x1567+0xfb*-0xb;_0x2c575e['oMBBW'](_0xfb87a5,_0x32ffa3[_0x154076(0xb90)+'h']);_0xfb87a5++){if(_0x32ffa3[_0xfb87a5][_0x154076(0x3a4)]&&_0x2c575e[_0x154076(0x4ea)](_0x32ffa3[_0xfb87a5][_0x154076(0x3a4)][_0x154076(0x609)+_0x154076(0xcdf)],undefined))_0x15f57c++;}return _0x15f57c;}function _0x4fdf02(){var _0x48740a=_0xc654b5,_0x1b1b12=0x871+-0x1af3*0x1+-0x2e*-0x67;for(var _0x5a1718=-0x1*0x1d3+0x4d9*-0x2+0xb85;_0x2c575e[_0x48740a(0x825)](_0x5a1718,_0x32ffa3[_0x48740a(0xb90)+'h']);_0x5a1718++){if(_0x2c575e[_0x48740a(0x4c9)](_0x48740a(0x61c),_0x2c575e[_0x48740a(0x88b)])){if(_0x13b47f&&_0x82a37d['buffe'+'r']&&_0x27eebe[_0x48740a(0xaba)+'r']['byteL'+'ength'])return _0x175829['sourc'+'e']=_0x2cc823[_0x48740a(0x764)+'e']||_0x2c575e[_0x48740a(0xc0e)],new _0x21f613(_0x35fef6['buffe'+'r']);}else{if(_0x32ffa3[_0x5a1718]['hook']&&_0x32ffa3[_0x5a1718]['hook']['appli'+'ed'])_0x1b1b12++;}}return _0x1b1b12;}var _0x342964=null,_0x25ee8c=[],_0x2c088c={},_0x192f0d=null;function _0x1d8d63(_0x1ac200){var _0x5d56d7=_0xc654b5;try{if(!_0x5ddcb3||!_0x1ac200)return null;var _0x30fe3=new _0x5ddcb3(_0x1ac200)[_0x5d56d7(0x8b0)+_0x5d56d7(0x3b6)+'me']();return _0x30fe3===undefined?null:_0x30fe3;}catch(_0x956149){return _0x2c575e[_0x5d56d7(0xa41)](_0x5d56d7(0x85a),_0x2c575e[_0x5d56d7(0x2e3)])?null:_0x1a7385['on'];}}function _0x578fb7(_0x2b952a,_0x5b989d,_0xe0ea3d){var _0xe7d76f=_0xc654b5,_0x53cb35=_0x2c575e[_0xe7d76f(0x245)][_0xe7d76f(0x889)]('|'),_0x51f614=0x1*-0x244d+0x2*-0x5d5+0x2ff7;while(!![]){switch(_0x53cb35[_0x51f614++]){case'0':if(!_0x439a76)return null;continue;case'1':var _0x439a76=_0xce867();continue;case'2':if(_0x5b989d<0x1*-0x2567+0x2081+0x4e6||_0x2c575e[_0xe7d76f(0xad0)](_0x5b989d,_0xe0ea3d*(-0x241*-0x5+0x1124+-0x3*0x977))>_0x439a76[_0xe7d76f(0x2a0)+_0xe7d76f(0x662)])return null;continue;case'3':_0x39ad13['ok']+=_0xe0ea3d;continue;case'4':var _0x5dba52=[];continue;case'5':for(var _0x2e14b4=0x173*-0xa+0xd9*0x1+0x1*0xda5;_0x2c575e['ePeCb'](_0x2e14b4,_0xe0ea3d);_0x2e14b4++)_0x5dba52['push'](_0x439a76[_0xe7d76f(0x40d)+'oat32'](_0x2c575e[_0xe7d76f(0x7d8)](_0x2b952a,_0x5b989d)+_0x2e14b4*(0x13f0+0x190+-0x157c*0x1),!![]));continue;case'6':return _0x5dba52;}break;}}var _0x42df66={'PhotonNetworkSync':[[_0x2c575e[_0xc654b5(0xbe4)],_0xc654b5(0xa5d)+_0xc654b5(0x770)],['0x20',_0x2c575e['jTzdM']],['0x24',_0xc654b5(0xbe1)+'form'],[_0xc654b5(0x1ea),_0x2c575e[_0xc654b5(0x233)]],[_0xc654b5(0x2fc),_0xc654b5(0x7e6)+'Look']],'NetworkPlayerAnimations':[[_0x2c575e['fYRYK'],_0x2c575e['ylPnj']],[_0x2c575e[_0xc654b5(0x7c5)],_0xc654b5(0x9b5)]],'NPC_Cotroller':[[_0xc654b5(0xc28),_0xc654b5(0xc99)+'le'],['0xb4',_0xc654b5(0x948)+'tHeal'+'th'],['0xd0','healt'+'h'],[_0xc654b5(0x7d1),_0x2c575e['Febzj']],[_0xc654b5(0xac8),'trans'+_0xc654b5(0x88e)]],'EnemyBot':[[_0x2c575e['QCdcN'],_0xc654b5(0xbe1)+_0xc654b5(0x88e)]]},_0x48bd2f={'PhotonNetworkSync':[[_0x2c575e['uNuSb'],_0x2c575e[_0xc654b5(0xb34)]],['0x7c',_0xc654b5(0x349)+'Flag'],[_0xc654b5(0xc36),'id']]};function _0x3e86e0(_0x2d2cf9,_0x832851){var _0x3422a2=_0xc654b5,_0x3cbe8c={'cxQbh':function(_0x4bfecf,_0x23e417){return _0x2c575e['FiabX'](_0x4bfecf,_0x23e417);},'iGdAp':function(_0x3031f4,_0x1ed4de){var _0x99008=_0x3c88;return _0x2c575e[_0x99008(0xa01)](_0x3031f4,_0x1ed4de);}},_0x3a6555=_0x5a4af7[_0x2d2cf9]||[],_0x1386e9={'kind':_0x2d2cf9,'ptr':'0x'+_0x832851['toStr'+_0x3422a2(0xb19)](0x71*-0xb+-0xbfa+0x10e5),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x3d0f66=-0xc83*0x2+-0x6c7+0x1fcd;_0x3d0f66<_0x3a6555[_0x3422a2(0xb90)+'h'];_0x3d0f66++){if(_0x2c575e[_0x3422a2(0x634)]===_0x2c575e['IXyDX']){if(_0x3a6555[_0x3d0f66][0xfe9+-0x1fb9+0xfd1*0x1]!=='v3')continue;var _0x293e45=_0x578fb7(_0x832851,_0x3a6555[_0x3d0f66][0x31b+0x1a41+0xeae*-0x2],0x707+-0x1bac+0x14a8);if(!_0x293e45)continue;_0x1386e9[_0x3422a2(0x49b)+'cs'][_0x3422a2(0x1e1)]({'o':'0x'+_0x3a6555[_0x3d0f66][-0x1*0x1fde+-0xe45+-0xf61*-0x3][_0x3422a2(0x265)+_0x3422a2(0xb19)](0x1*-0x449+0x1dbe+-0x1965),'v':_0x293e45});}else _0x1c1e6c=[];}var _0x267233=0x150+0x3a9*0x1+-0x4f9,_0x5d4253=_0x2c575e['kXazJ'](_0x1017b2,_0x1386e9[_0x3422a2(0x49b)+'cs'],_0x1f048a());_0x1386e9[_0x3422a2(0xb24)]=_0x5d4253[_0x3422a2(0xb24)],_0x1386e9['posAt']=_0x5d4253['posAt'],_0x1386e9[_0x3422a2(0xc33)+'d']=_0x5d4253[_0x3422a2(0xc33)+'d'],_0x1386e9[_0x3422a2(0xbda)+'er']=_0x5d4253['clust'+'er'],_0x1386e9[_0x3422a2(0x30d)]=_0x5d4253[_0x3422a2(0x30d)],void _0x267233;var _0x4bc4e=_0x42df66[_0x2d2cf9],_0x4ed5e1=_0x48bd2f[_0x2d2cf9];if(_0x4ed5e1){_0x1386e9['tag']={};for(var _0x1adb20=0xcb*-0xe+0x35f*-0x9+0x67*0x67;_0x2c575e[_0x3422a2(0xc04)](_0x1adb20,_0x4ed5e1[_0x3422a2(0xb90)+'h']);_0x1adb20++){var _0x1e6f99=_0x155fdf(_0x2c575e[_0x3422a2(0xa36)](_0x832851,parseInt(_0x4ed5e1[_0x1adb20][-0x7c4+-0x4cd+-0x1*-0xc91],0x35b*0x5+0x148c+-0x2543)),_0x3422a2(0x72c));if(_0x2c575e[_0x3422a2(0x390)](_0x1e6f99,undefined))_0x1386e9[_0x3422a2(0x9f8)][_0x4ed5e1[_0x1adb20][0x5ec+-0x45e*-0x8+-0x28db]]=_0x1e6f99;}}if(_0x4bc4e)for(var _0x2b707c=-0x1*-0x97d+0x1ab8+-0x2435;_0x2c575e['hfOWM'](_0x2b707c,_0x4bc4e[_0x3422a2(0xb90)+'h']);_0x2b707c++){var _0x4f2652=_0x2c575e[_0x3422a2(0x714)](_0x155fdf,_0x832851+parseInt(_0x4bc4e[_0x2b707c][-0x33+0x2580+-0x254d],-0x16*-0xb5+0x9d0+-0x29*0x9e),_0x3422a2(0xb44));if(_0x4f2652)_0x1386e9['refs'][_0x4bc4e[_0x2b707c][-0x1*0x716+0xa51+-0xe*0x3b]]='0x'+(_0x4f2652>>>0x1a79+-0x2*0xd2e+-0x1d)[_0x3422a2(0x265)+_0x3422a2(0xb19)](-0x10a+0x3fd*0x6+-0x16d4);}return _0x1386e9[_0x3422a2(0x60c)+'rs']=_0x3a6555[_0x3422a2(0xa42)+'r'](function(_0x2dd84c){var _0x3b3439=_0x3422a2;return _0x2dd84c[0x1c8b+0x10af+-0xf13*0x3]===_0x3b3439(0x983)||_0x2dd84c[-0x71*-0x31+0x1db+-0x177b*0x1]===_0x2c575e[_0x3b3439(0xb15)];})['map'](function(_0x1ff504){var _0x524b83=_0x3422a2;if(_0x524b83(0x978)!==_0x524b83(0x978)){if(_0x335737)_0x1a65d7['textC'+_0x524b83(0x19b)+'t']=(_0x35d9ef(_0x4fbdaa['value'])||0x30*-0x27+0x79*0x2a+-0xc89*0x1)['toFix'+'ed'](0x30a+-0x1f9*-0x4+-0xaed)+'x';_0x195100();}else return{'o':'0x'+_0x1ff504[-0x17*0xa6+-0xe4d+0x1d37][_0x524b83(0x265)+_0x524b83(0xb19)](0x268e+0xbcf*0x3+-0x49eb),'v':_0x155fdf(_0x832851+_0x1ff504[0xcd8+-0x1be1+0xf09],_0x1ff504[-0xaf*0x7+-0x2631+0x2afb])};})[_0x3422a2(0xa42)+'r'](function(_0x3e7030){return _0x3cbe8c['cxQbh'](_0x3e7030['v'],undefined)&&_0x3cbe8c['iGdAp'](isFinite,_0x3e7030['v']);})[_0x3422a2(0x8c4)](-0x2521+-0x3*-0xc46+0x4f,-0x9b*-0x3b+0x280*0xa+-0x3cad),_0x1386e9;}function _0x1fd236(){var _0x3b8880=_0xc654b5,_0x2e1ca4={'kmjJH':function(_0x2efc7d,_0x29a581){return _0x2efc7d===_0x29a581;}},_0x44eb16={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x233fc9=_0xee751[_0x3b8880(0x6b2)+'ntrol'+_0x3b8880(0x4d7)]&&_0xee751[_0x3b8880(0x6b2)+_0x3b8880(0xad7)+'ler'][_0x3b8880(0xb52)]||-0x8e0+0x1c81+0xf*-0x14f,_0x439b4c=_0x48ecac[_0x3b8880(0x3bb)+'nNetw'+_0x3b8880(0xbe8)+'nc']||{},_0x1328cf=Object['keys'](_0x439b4c);for(var _0x96a788=-0x1103+-0x8bf+0x1d7*0xe;_0x2c575e['pniUU'](_0x96a788,_0x1328cf['lengt'+'h'])&&_0x2c575e['YxkmV'](_0x96a788,0x5*0x2f1+0x1f75+-0x2e12);_0x96a788++){var _0x5e6066=_0x439b4c[_0x1328cf[_0x96a788]],_0x38b06c=_0x3e86e0('Photo'+_0x3b8880(0x750)+'orkSy'+'nc',_0x5e6066[_0x3b8880(0xb52)]);_0x38b06c['hits']=_0x5e6066['hits'],_0x38b06c['first'+_0x3b8880(0xbd2)+'s']=_0x2c575e['sDQHz'](_0x5e6066['first'+_0x3b8880(0x977)],_0x3b0a0e),_0x38b06c['isLoc'+'al']=!!_0x233fc9&&_0x38b06c['refs'][_0x3b8880(0x881)]===_0x2c575e['cnYbH']('0x',_0x233fc9[_0x3b8880(0x265)+'ing'](0x10bf+0x44b*-0x2+0x1*-0x819));if(_0x38b06c['refs']['healt'+'h']){var _0x18064b=parseInt(_0x38b06c['refs'][_0x3b8880(0xc6f)+'h'],-0x38d*0x3+-0xa*-0x206+0x1*-0x985);_0x38b06c[_0x3b8880(0xc6f)+'h']=_0xfabcfb(_0x18064b,_0x2c575e[_0x3b8880(0xb0a)],'obfI');}_0x44eb16[_0x3b8880(0x79d)+'rs'][_0x3b8880(0x1e1)](_0x38b06c);}_0x44eb16[_0x3b8880(0x79d)+_0x3b8880(0x31b)+'t']=_0x1328cf[_0x3b8880(0xb90)+'h'];var _0x427e7d=_0x48ecac[_0x3b8880(0x6db)+_0x3b8880(0x153)+'ler']||{},_0x1176cb=Object[_0x3b8880(0xbd7)](_0x427e7d);for(var _0x58a8d2=-0x1e97+-0x14cf+-0x3366*-0x1;_0x58a8d2<_0x1176cb[_0x3b8880(0xb90)+'h']&&_0x58a8d2<-0x1886+0x1d7*0x9+0x80f;_0x58a8d2++){var _0x33a88b=_0x2c575e['DmoWq'](_0x3e86e0,_0x3b8880(0x6db)+'otrol'+'ler',_0x427e7d[_0x1176cb[_0x58a8d2]]['ptr']);_0x33a88b[_0x3b8880(0x43b)]=_0x427e7d[_0x1176cb[_0x58a8d2]]['hits'],_0x33a88b['first'+_0x3b8880(0xbd2)+'s']=_0x2c575e[_0x3b8880(0xa56)](_0x427e7d[_0x1176cb[_0x58a8d2]][_0x3b8880(0x1ca)+_0x3b8880(0x977)],_0x3b0a0e);if(_0x33a88b[_0x3b8880(0x320)]['healt'+'h'])_0x33a88b['healt'+'h']=_0xfabcfb(_0x2c575e[_0x3b8880(0xa7b)](parseInt,_0x33a88b[_0x3b8880(0x320)][_0x3b8880(0xc6f)+'h'],0x4d9*0x6+0xe5*-0x1f+0x1*-0x14b),_0x3b8880(0x474)+_0x3b8880(0x479)+'pt',_0x3b8880(0x473));_0x44eb16[_0x3b8880(0x5e1)]['push'](_0x33a88b);}_0x44eb16[_0x3b8880(0x748)+'unt']=_0x1176cb[_0x3b8880(0xb90)+'h'];var _0x155ddf=_0x48ecac['FPSco'+_0x3b8880(0xad7)+_0x3b8880(0x4d7)]||{},_0x893c57=Object[_0x3b8880(0xbd7)](_0x155ddf);for(var _0x2eaffb=-0x33*-0xe+-0x95*-0xc+-0x9*0x116;_0x2eaffb<_0x893c57[_0x3b8880(0xb90)+'h']&&_0x2eaffb<-0x1fea+-0x261e+0x4620;_0x2eaffb++){var _0x10d7c1=_0x3e86e0(_0x2c575e['CNAyN'],_0x155ddf[_0x893c57[_0x2eaffb]]['ptr']);_0x10d7c1[_0x3b8880(0x43b)]=_0x155ddf[_0x893c57[_0x2eaffb]][_0x3b8880(0x43b)],_0x10d7c1[_0x3b8880(0xaca)+'al']=_0x155ddf[_0x893c57[_0x2eaffb]]['ptr']===_0x233fc9,_0x44eb16[_0x3b8880(0xbed)+'oller'+'s'][_0x3b8880(0x1e1)](_0x10d7c1);}_0x44eb16[_0x3b8880(0xbed)+_0x3b8880(0x3f2)+_0x3b8880(0x853)]=_0x893c57[_0x3b8880(0xb90)+'h'];var _0x23b398=_0x44eb16[_0x3b8880(0x79d)+'rs']['conca'+'t'](_0x44eb16[_0x3b8880(0x5e1)]);for(var _0x2a00b0=0x1041+0x6c*0x1+-0x10ad;_0x2c575e['oMBBW'](_0x2a00b0,_0x23b398['lengt'+'h']);_0x2a00b0++){if(_0x23b398[_0x2a00b0][_0x3b8880(0xaca)+'al'])continue;_0x44eb16[_0x3b8880(0x5fb)+'es'][_0x3b8880(0x1e1)](_0x23b398[_0x2a00b0]);}_0x44eb16['enemy'+_0x3b8880(0x853)]=_0x44eb16[_0x3b8880(0x5fb)+'es'][_0x3b8880(0xb90)+'h'];var _0x2ddece={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x4b9141={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x36a74c in _0xee751){var _0x1ea62a=_0xee751[_0x36a74c];if(!_0x1ea62a||!_0x1ea62a['ptr'])continue;if(!(_0x36a74c in _0x2ddece))continue;_0x44eb16[_0x3b8880(0x531)+'ers'][_0x36a74c]='0x'+_0x1ea62a[_0x3b8880(0xb52)]['toStr'+_0x3b8880(0xb19)](-0x7*-0x30b+0xb00*-0x2+0xc3);var _0x1234cc=_0x155fdf(_0x1ea62a[_0x3b8880(0xb52)]+_0x2ddece[_0x36a74c],'u32'),_0x29e3f3=_0x155fdf(_0x2c575e[_0x3b8880(0x989)](_0x1ea62a[_0x3b8880(0xb52)],_0x4b9141[_0x36a74c]),_0x2c575e[_0x3b8880(0x5f7)]);_0x1234cc&&_0x44eb16[_0x3b8880(0xa5c)+'a']===null&&(_0x44eb16[_0x3b8880(0xa5c)+'a']=_0x2c575e['gPshT']('0x',(_0x1234cc>>>0x11de*0x1+0x7*0x3a+0x6*-0x33e)['toStr'+_0x3b8880(0xb19)](-0x103*-0x22+-0xe04+-0x1*0x1452)),_0x44eb16['camer'+'aFrom']=_0x36a74c);if(_0x29e3f3&&_0x44eb16['playe'+'rList']===null)_0x44eb16[_0x3b8880(0x79d)+_0x3b8880(0x3ef)]=_0x2c575e[_0x3b8880(0x9e8)]('0x',(_0x29e3f3>>>0x318+-0x2396+0x2*0x103f)[_0x3b8880(0x265)+'ing'](0x1d4f+-0x1*0x171a+-0x625));}if(!_0x44eb16[_0x3b8880(0x79d)+_0x3b8880(0x31b)+'t']&&!_0x44eb16[_0x3b8880(0x748)+'unt']&&!_0x44eb16['camer'+'a'])_0x44eb16[_0x3b8880(0x5ab)]=_0x2c575e['Ityrq'](_0x2c575e[_0x3b8880(0x388)],_0x2c575e[_0x3b8880(0x50c)]);else{if(!_0x44eb16['enemy'+_0x3b8880(0x853)]){if(_0x2c575e[_0x3b8880(0x162)]===_0x3b8880(0x766))_0x44eb16['note']='Playe'+'rs\x20ar'+_0x3b8880(0x4a2)+_0x3b8880(0x38f)+_0x3b8880(0x536)+_0x3b8880(0x540)+_0x3b8880(0x313)+'assif'+_0x3b8880(0xc4b)+_0x3b8880(0x354)+_0x3b8880(0x1c7)+_0x3b8880(0xb7c)+_0x3b8880(0x2a6)+'k\x20'+('isLoc'+_0x3b8880(0x35c)+'\x20each'+_0x3b8880(0x891)+'y\x20in\x20'+_0x3b8880(0x3e7)+_0x3b8880(0xb30));else{var _0x5aaf9b=new _0x3253e9(_0x2c575e[_0x3b8880(0x2a9)]);_0x5aaf9b[_0x3b8880(0x306)+_0x3b8880(0x505)]=function(_0x529ebb){var _0x5aeb51=_0x3b8880,_0x2c54c6=_0x529ebb['data'];if(_0x2c54c6&&_0x2e1ca4[_0x5aeb51(0x590)](_0x2c54c6[_0x5aeb51(0x951)+_0x5aeb51(0xc01)],_0x3238a0)&&_0x2c54c6[_0x5aeb51(0x74d)]==='cmd')_0x54a72f(_0x2c54c6[_0x5aeb51(0xc60)],_0x2c54c6[_0x5aeb51(0x4a8)]);};}}}try{var _0x1761fe=('2|4|3'+_0x3b8880(0x9b1))['split']('|'),_0x1a4ef4=-0x2*0x2f+-0x1ab1+0x1b0f*0x1;while(!![]){switch(_0x1761fe[_0x1a4ef4++]){case'0':_0x44eb16[_0x3b8880(0x3e3)+_0x3b8880(0x4d5)]=_0x31c48e;continue;case'1':for(var _0x5d26f6=-0x5c+0x987+-0x92b*0x1;_0x5d26f6<_0x1a8c09['lengt'+'h']&&_0x2c575e['KNPbw'](_0x5d26f6,-0xe*-0x139+0x15b4+-0x1*0x1732);_0x5d26f6++){var _0x470297=_0x2c575e['YzRGn'](_0x2c575e['egxXV'](_0x1a8c09[_0x5d26f6]['param'+'s']['join'](','),'\x20->\x20'),_0x1a8c09[_0x5d26f6][_0x3b8880(0x33c)+'nType']||'void');_0x31c48e[_0x470297]=(_0x31c48e[_0x470297]||0x3f+-0x77*0x2e+0x1523)+(0x24e3+0x1572+-0x3a54);}continue;case'2':var _0x1d5c84=window[_0x3b8880(0x2f5)+_0x3b8880(0x5ee)+_0x3b8880(0xa19)]&&window[_0x3b8880(0x2f5)+_0x3b8880(0x5ee)+_0x3b8880(0xa19)][_0x3b8880(0x4e0)+'me'];continue;case'3':var _0x31c48e={};continue;case'4':var _0x1a8c09=_0x1d5c84&&_0x1d5c84['inter'+_0x3b8880(0xc49)+_0x3b8880(0x43f)+'es']||[];continue;}break;}}catch(_0x124d54){}return _0x44eb16;}function _0xfabcfb(_0x499517,_0x5111bb,_0x53d625){var _0x25cf9c=_0xc654b5,_0x1ea99f={'ygtGF':function(_0x3ccaaa){return _0x3ccaaa();},'lgHyg':_0x2c575e['uXOjE'],'GSLpt':_0x2c575e[_0x25cf9c(0x468)],'LPuiZ':_0x2c575e['voIji'],'rLOaP':_0x25cf9c(0xca2)+'1b'};if(_0x2c575e['UkWYh']===_0x2c575e[_0x25cf9c(0x231)]){try{var _0x41f198=_0x5a4af7[_0x5111bb]||[];for(var _0x3db618=0x1d4b+-0x32e*0xb+0x1*0x5af;_0x2c575e['SBAaK'](_0x3db618,_0x41f198['lengt'+'h']);_0x3db618++){if(_0x41f198[_0x3db618][0x17a4+-0xa*-0x2ce+-0x33af]!==_0x53d625)continue;var _0x9c3a4e=_0x41f198[_0x3db618][-0x37*0x38+0x4*0x2af+0x53*0x4];if(_0x2c575e['bsUaz'](_0x53d625[_0x25cf9c(0x208)+'Of']('obf'),-0x890+-0x1787+0x2017)){if(_0x25cf9c(0xc51)===_0x2c575e[_0x25cf9c(0x173)]){var _0x3a28de=_0x67f995&&_0x28fcc1[_0x25cf9c(0x410)];if(!_0x3a28de)return;if(_0x22d1c6['boxes']&&!_0x1ea99f[_0x25cf9c(0x9d1)](_0x8b6b04))_0xed4b38[_0x25cf9c(0x671)]=![];var _0x5d7c6b=!_0x401c03['on']?_0x25cf9c(0x495)+'ff':_0x5dd029[_0x25cf9c(0x671)]?_0x1ea99f['lgHyg']:_0x1ea99f[_0x25cf9c(0x356)];if(_0x5d7c6b!==_0x3a28de[_0x25cf9c(0xb42)+'onten'+'t'])_0x3a28de['textC'+_0x25cf9c(0x19b)+'t']=_0x5d7c6b;_0x3a28de['style']['backg'+'round']=_0x52826c['on']?_0x12fa31:_0x1ea99f['LPuiZ'],_0x3a28de['style']['color']=_0x1ed086['on']?_0x1ea99f[_0x25cf9c(0x246)]:'#f7ee'+'f5';}else{var _0x5b262c=_0x2c575e['fVRGL'](_0x550b03,_0x499517,_0x9c3a4e,_0x53d625);if(!_0x5b262c)return null;_0x5b262c['o']=_0x9c3a4e,_0x5b262c['k']=_0x53d625;var _0x5e4339=_0x2c575e[_0x25cf9c(0xbcd)](_0x36e916,[_0x5b262c]);if(!_0x5e4339['rows'][_0x25cf9c(0xb90)+'h'])return null;return _0x5e4339['rows'][-0x1*0x111e+0x5a4+-0x1*-0xb7a];}}var _0x167023=_0x2c575e[_0x25cf9c(0xa7b)](_0x155fdf,_0x2c575e[_0x25cf9c(0x990)](_0x499517,_0x9c3a4e),_0x53d625);if(_0x167023===undefined)return null;return{'o':_0x2c575e['TSZTq']('0x',_0x9c3a4e[_0x25cf9c(0x265)+_0x25cf9c(0xb19)](-0x1d4d+-0x8ba*0x2+-0x5*-0x95d)),'v':_0x167023};}}catch(_0x570164){}return null;}else _0x1ce75e[_0x25cf9c(0x348)+_0x25cf9c(0x66c)+_0x25cf9c(0xba0)](_0x103808,_0x2c575e[_0x25cf9c(0x9f7)],{'value':_0x116319[_0x25cf9c(0x1cb)],'configurable':!![]});}function _0x9041fd(){var _0x175ed8=_0xc654b5,_0x20e652={};_0x39ad13['ok']=-0x1d38+-0x2*-0x2c9+0x17a6,_0x39ad13['faile'+'d']=0x8f7+0xf05*0x1+-0x14*0x133,_0x39ad13[_0x175ed8(0x2c9)+'rror']=null;var _0x12236b=Object[_0x175ed8(0xbd7)](_0x5a4af7);for(var _0x246ad2=-0x24*0xf+0xe7d*0x2+-0x2*0xd6f;_0x2c575e['ePeCb'](_0x246ad2,_0x12236b['lengt'+'h']);_0x246ad2++){var _0x4f6ecc=_0x12236b[_0x246ad2],_0x407f59=_0xee751[_0x4f6ecc];if(!_0x407f59||!_0x407f59[_0x175ed8(0xb52)])continue;var _0x5a20e9=_0x5a4af7[_0x4f6ecc]||[],_0x4f9c1b=[];for(var _0x56affc=0x19e2+0x49*0x55+-0x5b*0x8d;_0x56affc<_0x5a20e9[_0x175ed8(0xb90)+'h'];_0x56affc++){var _0x3d51eb=_0x5a20e9[_0x56affc][-0x87e+0x1b60+-0x12e2],_0xac4bd4=_0x5a20e9[_0x56affc][-0x2*-0x425+-0x3*-0x6df+-0x1ce6];if(_0xac4bd4[_0x175ed8(0x208)+'Of'](_0x2c575e[_0x175ed8(0x53f)])===-0x1b02*-0x1+0x10da+-0x2bdc){var _0xa7c789=_0x550b03(_0x407f59[_0x175ed8(0xb52)],_0x3d51eb,_0xac4bd4);if(!_0xa7c789)continue;_0xa7c789['o']=_0x3d51eb,_0xa7c789['k']=_0xac4bd4,_0x4f9c1b['push'](_0xa7c789);}else{var _0x5d2e9c=_0x2c575e['oGqJX'](_0x155fdf,_0x2c575e[_0x175ed8(0x257)](_0x407f59[_0x175ed8(0xb52)],_0x3d51eb),_0xac4bd4);if(_0x2c575e[_0x175ed8(0x5b3)](_0x5d2e9c,undefined))continue;var _0x3bb0e3={'o':_0x3d51eb,'k':_0xac4bd4,'v':_0x5d2e9c};if(_0xac4bd4==='v2'||_0x2c575e[_0x175ed8(0x32f)](_0xac4bd4,'v3')||_0x2c575e['eKgLQ'](_0xac4bd4,'v4')){var _0x85358=_0x2c575e['WOfEC'](_0xac4bd4,'v2')?-0xf90+0x5*-0x35+0x109b:_0xac4bd4==='v3'?0x2375+-0x136*0x19+0x296*-0x2:0x20e5+-0x142c+-0xcb5,_0x39463d=_0x578fb7(_0x407f59[_0x175ed8(0xb52)],_0x3d51eb,_0x85358);if(_0x39463d){if(_0x2c575e[_0x175ed8(0x819)]!=='ejOcL')_0x3bb0e3['xyz']=_0x39463d,_0x3bb0e3['v']=_0x39463d[-0x1*-0x36a+-0x1530+0x11c6];else try{_0x408528['close']();}catch(_0x5ae85a){}}}_0x4f9c1b['push'](_0x3bb0e3);}}if(_0x4f9c1b[_0x175ed8(0xb90)+'h']){if(_0x2c575e[_0x175ed8(0x572)](_0x2c575e['Sznes'],_0x2c575e['ojztp'])){var _0x6f8e1=_0x36e916(_0x4f9c1b);_0x20e652[_0x4f6ecc]=_0x6f8e1['rows'],_0x2c088c[_0x4f6ecc]={'key':_0x6f8e1[_0x175ed8(0x1d1)],'sane':_0x6f8e1[_0x175ed8(0x6a9)],'checked':_0x6f8e1[_0x175ed8(0x5dc)+'ed'],'keyConsistent':_0x6f8e1['keyCo'+_0x175ed8(0x45a)+'ent'],'keySource':_0x6f8e1['keySo'+_0x175ed8(0x511)]};}else _0xf9b39d?_0x2be47e[_0x175ed8(0x460)+'em'](_0x4cefdf,'1'):_0x3aef35[_0x175ed8(0x424)+_0x175ed8(0x7a5)](_0x4fb13e);}}return _0x20e652;}function _0x36e916(_0x26ddec){var _0x19398a=_0xc654b5;if(_0x2c575e['Eqzuh']===_0x2c575e[_0x19398a(0x957)]){var _0x3e0ad8=-0x12e5+-0x27+0x4*0x4c3,_0x466eb8=0xe16+-0x1f42+0x112c,_0x4b96ad=null;for(var _0xddb16d=0x3*0x13c+-0x15d6+0x1222;_0xddb16d<_0x26ddec[_0x19398a(0xb90)+'h'];_0xddb16d++){var _0x843ba5=_0x26ddec[_0xddb16d];if(_0x843ba5['k'][_0x19398a(0x208)+'Of']('obf')!==-0x9*0x17b+0x696+0x6bd)continue;_0x843ba5['v']=_0x2c575e[_0x19398a(0x3a0)](_0x4d4ddb,_0x843ba5['k'],_0x843ba5['hidde'+'n'],_0x843ba5['keyAt'+_0x19398a(0x18f)+'t0']),_0x843ba5[_0x19398a(0x4e1)+'ed']=_0x843ba5[_0x19398a(0xa85)+'Offse'+'t0'],_0x843ba5[_0x19398a(0xc27)]=_0x2c575e[_0x19398a(0xb50)](_0x2c575e[_0x19398a(0x139)],_0x843ba5['hidde'+'n'])+('\x20fake'+'=')+_0x843ba5[_0x19398a(0x334)]+(_0x843ba5[_0x19398a(0xc02)]?_0x19398a(0xab9)+'VE':'')+_0x19398a(0x471)+_0x843ba5[_0x19398a(0xa85)+_0x19398a(0x18f)+'t0']+_0x2c575e[_0x19398a(0xac7)]+_0x843ba5[_0x19398a(0xafc)];if(_0x2c575e[_0x19398a(0x7fe)](_0x4b96ad,null))_0x4b96ad=_0x843ba5[_0x19398a(0xa85)+'Offse'+'t0'];_0x466eb8++,_0x2c575e[_0x19398a(0x7ce)](_0x5db1ab,_0x843ba5)?(_0x3e0ad8++,_0x843ba5['sane']=!![]):_0x843ba5[_0x19398a(0x6a9)]=![],delete _0x843ba5['alt'];}return{'rows':_0x26ddec,'key':_0x4b96ad,'sane':_0x3e0ad8,'checked':_0x466eb8,'keyConsistent':_0x2d91ff(_0x26ddec),'keySource':'offse'+_0x19398a(0xa33)+_0x19398a(0xae9)+_0x19398a(0x974)};}else{var _0x131402=0xbe9+0x43a*-0x3+0xc5;for(var _0x3c2e95=-0x1557+0x593*0x3+0x1*0x49e;_0x2c575e['EHkqF'](_0x3c2e95,_0x48e867[_0x19398a(0xb90)+'h']);_0x3c2e95++){if(_0x13d8da[_0x3c2e95][_0x19398a(0x3a4)]&&_0x5ea631[_0x3c2e95][_0x19398a(0x3a4)]['appli'+'ed'])_0x131402++;}return _0x131402;}}function _0x2d91ff(_0x3a417c){var _0x294b3e=_0xc654b5,_0x4a6eae={};for(var _0x215972=-0x2387+-0xab*0x2e+0x4241;_0x2c575e['AFjPA'](_0x215972,_0x3a417c[_0x294b3e(0xb90)+'h']);_0x215972++){var _0x1cba35=_0x3a417c[_0x215972];if(_0x2c575e[_0x294b3e(0x843)](_0x1cba35['k']['index'+'Of'](_0x2c575e[_0x294b3e(0x53f)]),0xa*0x6b+0x1421*0x1+0x31*-0x7f))continue;if(_0x2c575e[_0x294b3e(0xb4c)](_0x4a6eae[_0x1cba35['k']],undefined))_0x4a6eae[_0x1cba35['k']]=_0x1cba35[_0x294b3e(0x4e1)+'ed'];else{if(_0x2c575e[_0x294b3e(0x390)](_0x4a6eae[_0x1cba35['k']],_0x1cba35[_0x294b3e(0x4e1)+'ed']))return![];}}return!![];}function _0x5db1ab(_0x33e1e1){var _0x4bc6a3=_0xc654b5;if(_0x2c575e[_0x4bc6a3(0x7fe)]('fxZOu',_0x2c575e['mVGtd'])){var _0x1313e7=(_0x4bc6a3(0x8e8)+_0x4bc6a3(0x2c4)+_0x4bc6a3(0xb2c))[_0x4bc6a3(0x889)]('|'),_0x5b208a=0x1383+-0x6df+-0xca4;while(!![]){switch(_0x1313e7[_0x5b208a++]){case'0':var _0x10f077=_0x33e1e1[_0x4bc6a3(0x334)];continue;case'1':if(_0x2c575e['CDGxI'](typeof _0x27ffcb,'numbe'+'r')||!_0x2c575e[_0x4bc6a3(0x35d)](isFinite,_0x27ffcb))return![];continue;case'2':if(typeof _0x10f077!==_0x2c575e['jSAUu']||!isFinite(_0x10f077))return!![];continue;case'3':if(_0x33e1e1['k']==='obfB')return _0x27ffcb===0x1862+0x1*-0x2644+-0x6f1*-0x2||_0x27ffcb===0x2686+0x7*-0x53b+-0x1*0x1e8;continue;case'4':var _0x27ffcb=_0x33e1e1['v'];continue;case'5':return _0x2c575e[_0x4bc6a3(0x68f)](Math[_0x4bc6a3(0x419)](_0x27ffcb),-0x1*0x36e51909+-0x43d9cec4+0xb659b1cd);case'6':if(_0x33e1e1['act']===-0xdcb+-0x1d3*-0xf+-0x17*0x97)return _0x2c575e['QGQYw'](Math[_0x4bc6a3(0x419)](_0x2c575e[_0x4bc6a3(0x9c4)](_0x27ffcb,_0x10f077)),Math[_0x4bc6a3(0x54c)](0x2a*0xbb+0x2449+0x1*-0x42f6,_0x2c575e[_0x4bc6a3(0x296)](Math[_0x4bc6a3(0x419)](_0x10f077),-0xd06*-0x1+0xb0e*0x3+0x2e30*-0x1+0.6)));continue;}break;}}else return _0x51916f();}function _0x482c5c(){var _0x52aa6f=_0xc654b5;if(_0x2c575e['tJRjF'](_0x2c575e[_0x52aa6f(0x456)],_0x52aa6f(0x3de))){var _0x35fae4={};try{var _0x101c45=window[_0x52aa6f(0x2f5)+'WebMo'+_0x52aa6f(0xa19)]&&window[_0x52aa6f(0x2f5)+_0x52aa6f(0x5ee)+_0x52aa6f(0xa19)]['Runti'+'me'];_0x35fae4[_0x52aa6f(0x9f8)]=_0x101c45&&_0x101c45[_0x52aa6f(0x951)+'uraTa'+'g']||null,_0x35fae4[_0x52aa6f(0x9b2)+_0x52aa6f(0x61b)]=!!(_0x101c45&&_0x3c4e89&&_0x2c575e[_0x52aa6f(0xcbd)](_0x101c45[_0x52aa6f(0x951)+'uraTa'+'g'],_0x3c4e89)),_0x35fae4[_0x52aa6f(0x9fa)+_0x52aa6f(0xa03)+'e']=_0x101c45&&_0x101c45['_game']?typeof _0x101c45[_0x52aa6f(0x187)]:_0x2c575e['UQlXQ'],_0x35fae4[_0x52aa6f(0x84b)+_0x52aa6f(0x2ff)+_0x52aa6f(0x6a3)+_0x52aa6f(0x930)+_0x52aa6f(0x56a)]=!!(_0xdea9ac&&_0xdea9ac['_runt'+'ime']&&_0x2c575e['UQPCB'](_0xdea9ac[_0x52aa6f(0x637)+'ime'],_0x101c45)),_0x35fae4[_0x52aa6f(0x84b)+_0x52aa6f(0x2ff)+_0x52aa6f(0x54a)+'me']=_0xdea9ac&&_0xdea9ac[_0x52aa6f(0x637)+_0x52aa6f(0x1f6)]&&_0xdea9ac[_0x52aa6f(0x637)+_0x52aa6f(0x1f6)]['_game']?typeof _0xdea9ac[_0x52aa6f(0x637)+_0x52aa6f(0x1f6)][_0x52aa6f(0x187)]:_0x2c575e['UQlXQ'];}catch(_0x468c45){_0x35fae4['error']=_0x2c575e[_0x52aa6f(0xa01)](String,_0x468c45&&_0x468c45['messa'+'ge']||_0x468c45);}return _0x35fae4;}else return _0x2d6e08['o'];}function _0x2c30c9(){var _0x43d016=_0xc654b5,_0x5d1710=[_0x2c575e[_0x43d016(0x3d6)],_0x2c575e['HKKUX'],_0x43d016(0xb11),'unity'+_0x43d016(0x997)+_0x43d016(0x32b)+_0x43d016(0xa3d)],_0x87ddcb={};for(var _0x4236ee=0x257+0x22*-0x7+0x13*-0x13;_0x2c575e['pniUU'](_0x4236ee,_0x5d1710[_0x43d016(0xb90)+'h']);_0x4236ee++){var _0x34fcd9=_0x5d1710[_0x4236ee],_0x2426e4=typeof window[_0x34fcd9];_0x87ddcb[_0x34fcd9]=_0x2426e4===_0x43d016(0xc7d)+_0x43d016(0x42f)?_0x2c575e['Tubef']:_0x2426e4;}var _0x28245b=_0x2c575e[_0x43d016(0x90b)](_0x1e751b);_0x87ddcb['gameS'+'ource']=_0x39ad13[_0x43d016(0x764)+'e'];try{_0x87ddcb[_0x43d016(0x51d)+'dule']=!!(_0x28245b&&_0x28245b[_0x43d016(0x6e8)+'e']),_0x87ddcb[_0x43d016(0x86c)+'8']=!!(_0x28245b&&_0x28245b['Modul'+'e']&&_0x28245b[_0x43d016(0x6e8)+'e'][_0x43d016(0xa14)+'8']),_0x87ddcb['heapB'+'ytes']=_0x87ddcb['heapU'+'8']?_0x28245b['Modul'+'e'][_0x43d016(0xa14)+'8']['lengt'+'h']:-0x3be+-0xeaa+0x1268;}catch(_0x426755){_0x87ddcb['hasMo'+_0x43d016(0x214)]=![],_0x87ddcb['heapU'+'8']=![],_0x87ddcb[_0x43d016(0x4a7)+_0x43d016(0x5c2)]=-0x1*0xde9+-0xb1e+0x1907;}return _0x87ddcb[_0x43d016(0x240)+_0x43d016(0x8f4)+'er']=typeof _0x5ddcb3,_0x87ddcb;}function _0x12a0ce(){var _0x3bbb61=_0xc654b5,_0x36a41e={},_0x134435=_0x216ea1();if(!_0x134435)return _0x36a41e;_0x36a41e[_0x2c575e['fKbLD']]=_0x134435[_0x3bbb61(0x7e6)+'Look'];for(var _0x15dd1e in _0x134435[_0x3bbb61(0x3d9)+'s'])_0x36a41e[_0x2c575e[_0x3bbb61(0x982)]+_0x15dd1e]=_0x134435[_0x3bbb61(0x3d9)+'s'][_0x15dd1e];if(_0x134435[_0x3bbb61(0xa5c)+'a'])_0x36a41e[_0x3bbb61(0xa88)+_0x3bbb61(0xb18)+'camer'+'a']=_0x134435[_0x3bbb61(0xa5c)+'a'];return _0x36a41e;}function _0x2af09c(_0x1f2d82){var _0x5711f1=_0xc654b5,_0x10ae67={'Somuk':function(_0x4c4e35,_0x28a772){return _0x4c4e35-_0x28a772;},'GDCiC':_0x2c575e[_0x5711f1(0x840)],'UWjtT':function(_0x46db25,_0x441755){return _0x46db25<_0x441755;}};if(_0x2c575e['cGZVD'](_0x2c575e[_0x5711f1(0x68c)],_0x5711f1(0x254)))_0x252f5a=_0x20818a,_0x5120ed=_0x10ae67['Somuk'](_0xa27edb[_0x5711f1(0x53a)](),_0x192b38);else{var _0x45fdd7={};for(var _0xaf918a in _0x1f2d82){var _0x39a84d=_0x1f2d82[_0xaf918a];for(var _0x355276=0x4a*-0x37+0x176b+-0x785;_0x355276<_0x39a84d[_0x5711f1(0xb90)+'h'];_0x355276++){if(_0x2c575e['UbviY']('ZFxcm','jVivG')){var _0x393bc4=_0x1654ec[_0x5711f1(0x5ef)+'Selec'+'torAl'+'l'](_0x10ae67['GDCiC']);for(var _0x4057d8=-0x7df+0x3*-0x7b5+-0x1*-0x1efe;_0x10ae67['UWjtT'](_0x4057d8,_0x393bc4['lengt'+'h']);_0x4057d8++){try{if(_0x393bc4[_0x4057d8]['conte'+'ntWin'+_0x5711f1(0x922)])_0x393bc4[_0x4057d8][_0x5711f1(0x491)+_0x5711f1(0x6cb)+_0x5711f1(0x922)]['postM'+_0x5711f1(0x769)+'e'](_0xcc8b,'*');}catch(_0x2de382){}}}else _0x45fdd7[_0x2c575e[_0x5711f1(0xc9e)](_0x2c575e[_0x5711f1(0x15b)](_0xaf918a,'+0x'),_0x39a84d[_0x355276]['o']['toStr'+'ing'](-0x1c5d+-0x136+-0x3*-0x9e1))]=_0x39a84d[_0x355276]['v'];}}return _0x45fdd7;}}function _0x315fa9(_0xf54093,_0x5c1cca){var _0x13f87e=_0xc654b5;if(_0xf54093==='speed'){if(_0x2c575e['WoaaC'](_0x2c575e[_0x13f87e(0xce1)],_0x2c575e['TbYKE'])){if(_0x4f985c)return _0x4a2e45;try{var _0x48252d=(_0x13f87e(0xaf8)+_0x13f87e(0x9f3)+_0x13f87e(0x148))[_0x13f87e(0x889)]('|'),_0x19b150=-0x221b+-0x7*0x523+-0x26*-0x1d8;while(!![]){switch(_0x48252d[_0x19b150++]){case'0':if(!_0x30e155['body']||!_0x2f29f3[_0x13f87e(0x44e)]['appen'+_0x13f87e(0x61d)+'d'])return null;continue;case'1':return _0x469ae7;case'2':_0x3fb12b['body'][_0x13f87e(0x658)+_0x13f87e(0x61d)+'d'](_0x32e80e);continue;case'3':_0x3186f6={'cv':_0x32e80e};continue;case'4':var _0x32e80e=_0x4de590[_0x13f87e(0x7ec)+_0x13f87e(0x83e)+'ent'](_0x2c575e['AKHPx']);continue;case'5':_0x32e80e['style']['cssTe'+'xt']=_0x13f87e(0x597)+_0x13f87e(0x626)+_0x13f87e(0x7da)+_0x13f87e(0xac6)+'0;top'+':0;z-'+_0x13f87e(0x208)+_0x13f87e(0x4f1)+_0x13f87e(0x450)+_0x13f87e(0x2d4)+_0x13f87e(0x5c7)+_0x13f87e(0x773)+_0x13f87e(0x835)+'e;';continue;case'6':_0x32e80e['id']=_0x2c575e[_0x13f87e(0x28f)];continue;}break;}}catch(_0x4aeb34){return null;}}else{_0x5b68a7(_0x5c1cca&&typeof _0x5c1cca['on']===_0x2c575e['DdHcQ']?_0x5c1cca['on']:_0x4f804c['on'],_0x5c1cca&&typeof _0x5c1cca['facto'+'r']==='numbe'+'r'?_0x5c1cca['facto'+'r']:_0x4f804c[_0x13f87e(0x7b7)+'r']);return;}}if(_0xf54093!==_0x2c575e[_0x13f87e(0x3d3)])return;var _0x4594dd=_0x2c575e['YWKTo'](_0x9041fd),_0x2914c9=_0x2af09c(_0x4594dd),_0x433d31=_0x12a0ce();for(var _0x49282d in _0x433d31)_0x2914c9[_0x49282d]=_0x433d31[_0x49282d];if(!_0x342964){_0x342964=_0x2914c9,_0x25ee8c=[],_0x2c575e['qipyd'](_0x566477,_0x2c575e['WZqST'],{'report':_0x421c0f()});return;}_0x25ee8c=[];for(var _0x272809 in _0x2914c9){var _0x280a3b=_0x342964[_0x272809],_0x323e54=_0x2914c9[_0x272809];if(_0x2c575e[_0x13f87e(0x572)](_0x280a3b,_0x323e54))_0x25ee8c[_0x13f87e(0x1e1)](_0x2c575e['KRcCG'](_0x272809+':\x20',_0x280a3b)+_0x13f87e(0xc90)+_0x323e54);}_0x342964=_0x2914c9,_0x566477(_0x13f87e(0x30f)+'t',{'report':_0x421c0f()});}var _0xb998a5=null;function _0x44ded3(){var _0x2d1dd2=_0xc654b5,_0x300799={'NBoKN':function(_0x375e22,_0x58bf23){var _0x4ebf33=_0x3c88;return _0x2c575e[_0x4ebf33(0x35d)](_0x375e22,_0x58bf23);},'GFItx':_0x2c575e[_0x2d1dd2(0x3d3)],'YXIcG':_0x2d1dd2(0x19c),'ssQvF':function(_0xec7ca8,_0x29980f){return _0xec7ca8!==_0x29980f;},'faGFz':_0x2d1dd2(0xc85),'mitoI':function(_0x5627b7,_0x469ceb,_0x20ae52){var _0x3dd2c1=_0x2d1dd2;return _0x2c575e[_0x3dd2c1(0x210)](_0x5627b7,_0x469ceb,_0x20ae52);},'ShpFH':function(_0x4cc7b6,_0x35a701,_0x4151d3){return _0x4cc7b6(_0x35a701,_0x4151d3);}};if(_0x2c575e[_0x2d1dd2(0xcbd)](_0x2d1dd2(0x80d),_0x2c575e['LjZlx']))_0x808b2d['setLa'+'st']=_0x202ad1[0x5*-0x743+-0x12a*-0x3+0x20d2]['val'](),_0x29cbea['setHi'+'ts']++;else{if(_0xb998a5)return _0xb998a5;try{if(_0x2c575e[_0x2d1dd2(0x3f8)](_0x2c575e[_0x2d1dd2(0xb5c)],_0x2c575e[_0x2d1dd2(0xb5c)])){var _0x633b38=_0x2af4dc['root'];if(!_0x633b38||!_0x633b38[_0x2d1dd2(0x7fb)])return;_0x3ca183[_0x2d1dd2(0xb24)]?(_0x633b38['style']['left']=_0x14d0ec['pos']['x']+'px',_0x633b38['style'][_0x2d1dd2(0xc3e)]=_0x2c575e[_0x2d1dd2(0x93c)](_0x7333c6[_0x2d1dd2(0xb24)]['y'],'px'),_0x633b38[_0x2d1dd2(0x7fb)][_0x2d1dd2(0x90d)]=_0x2c575e['POjcU'],_0x633b38[_0x2d1dd2(0x7fb)]['botto'+'m']='auto'):(_0x633b38['style']['left']='auto',_0x633b38[_0x2d1dd2(0x7fb)][_0x2d1dd2(0xc3e)]=_0x2c575e[_0x2d1dd2(0x9fd)],_0x633b38[_0x2d1dd2(0x7fb)][_0x2d1dd2(0x90d)]=_0x2d1dd2(0xbe6),_0x633b38[_0x2d1dd2(0x7fb)]['botto'+'m']=_0x2d1dd2(0xbe6));}else{if(!document[_0x2d1dd2(0x44e)]||!document['body']['appen'+_0x2d1dd2(0x61d)+'d'])return null;if(!document[_0x2d1dd2(0x95b)+_0x2d1dd2(0x740)+_0x2d1dd2(0x466)]('sakur'+_0x2d1dd2(0x6d9)+'hud-c'+'ss')){var _0x2365a3=document[_0x2d1dd2(0x7ec)+'eElem'+_0x2d1dd2(0x614)](_0x2d1dd2(0x7fb));_0x2365a3['id']=_0x2c575e[_0x2d1dd2(0x7f8)],_0x2365a3[_0x2d1dd2(0xb42)+_0x2d1dd2(0x19b)+'t']=_0x2d1dd2(0xb7e)+'ra-sw'+_0x2d1dd2(0x9a6)+'all:i'+'nitia'+'l}',(document[_0x2d1dd2(0x196)]||document['docum'+'entEl'+_0x2d1dd2(0x740)])[_0x2d1dd2(0x658)+_0x2d1dd2(0x61d)+'d'](_0x2365a3);}var _0x365da0=document['creat'+'eElem'+_0x2d1dd2(0x614)]('div');_0x365da0['id']=_0x2c575e[_0x2d1dd2(0x940)],_0x365da0[_0x2d1dd2(0x7fb)][_0x2d1dd2(0x4af)+'xt']=_0x2c575e[_0x2d1dd2(0x62f)](_0x2c575e['bNTdO']+_0x2c575e[_0x2d1dd2(0x906)],'paddi'+_0x2d1dd2(0x912)+_0x2d1dd2(0x400)+_0x2d1dd2(0x4d4)+_0x2d1dd2(0x6ff)+_0x2d1dd2(0xbe0)+'\x20ui-m'+_0x2d1dd2(0x347)+_0x2d1dd2(0xab1)+_0x2d1dd2(0xc69)+_0x2d1dd2(0x779)+'nospa'+_0x2d1dd2(0xbaa)+_0x2d1dd2(0x3f7)+_0x2d1dd2(0x372)+'5;')+(_0x2d1dd2(0x70a)+_0x2d1dd2(0x569)+_0x2d1dd2(0x259)+'px\x2030'+'px\x20-1'+'2px\x20#'+_0x2d1dd2(0x426)+_0x2d1dd2(0xc03)+'elect'+_0x2d1dd2(0x1aa)+_0x2d1dd2(0xad3)+_0x2d1dd2(0x6bc)+'ser-s'+_0x2d1dd2(0x5f1)+_0x2d1dd2(0x1aa)+';');var _0x1893d6=_0x2d1dd2(0x8c9)+'data-'+_0x2d1dd2(0x3bd)+_0x2d1dd2(0x335)+'yle=\x22'+'color'+':#8d7'+'a99;m'+_0x2d1dd2(0xa9e)+_0x2d1dd2(0x894)+'90px;'+_0x2d1dd2(0x26c)+_0x2d1dd2(0x223);_0x365da0[_0x2d1dd2(0xbc8)+_0x2d1dd2(0x41f)]=_0x2c575e[_0x2d1dd2(0xb50)](_0x2c575e['soGra'](_0x2c575e[_0x2d1dd2(0x559)](_0x2c575e[_0x2d1dd2(0x51f)](_0x2c575e['KpNOU'](_0x2c575e['vggne'](_0x2c575e[_0x2d1dd2(0xa74)](_0x2c575e['QIbQI']+('<b\x20st'+_0x2d1dd2(0x3ae)+_0x2d1dd2(0x1cc)+':')+_0x24f5d1+(_0x2d1dd2(0xc57)+_0x2d1dd2(0x78e)+'b>')+_0x2c575e[_0x2d1dd2(0xc06)],_0x2c575e['CLvXb']),'<inpu'+'t\x20dat'+'a-a=\x22'+'fx\x22\x20t'+_0x2d1dd2(0x42b)+'range'+_0x2d1dd2(0x976)+_0x2d1dd2(0x68b)+'max=\x22'+_0x2d1dd2(0x893)+_0x2d1dd2(0x3eb)+'.5\x22\x20v'+_0x2d1dd2(0x319)+'\x222\x22\x20s'+_0x2d1dd2(0xb63)+_0x2d1dd2(0x80a)+_0x2d1dd2(0xccf)+_0x2d1dd2(0x5e4)+'ent-c'+_0x2d1dd2(0x920)),_0x24f5d1),_0x2c575e['CflEW'])+_0x2c575e[_0x2d1dd2(0x580)],_0x2c575e['RWCQe'])+('color'+':#f7e'+_0x2d1dd2(0x1ff)+'order'+'-radi'+'us:6p'+_0x2d1dd2(0xbd4)+'ding:'+_0x2d1dd2(0x2f6)+_0x2d1dd2(0xa35)+_0x2d1dd2(0x188)+_0x2d1dd2(0x964)+_0x2d1dd2(0xaa1)+'nt:in'+_0x2d1dd2(0xcc6)+';\x22>ES'+'P\x20on<'+_0x2d1dd2(0x395)+_0x2d1dd2(0x3a5))+_0x2c575e['zNWeS']+_0x2c575e['CGppy'],'<butt'+_0x2d1dd2(0xb5b)+_0x2d1dd2(0x155)+_0x2d1dd2(0xc29)+_0x2d1dd2(0xb9d)+'le=\x22m'+'argin'+_0x2d1dd2(0x718)+_0x2d1dd2(0xbb0)+_0x2d1dd2(0xcdc)+_0x2d1dd2(0x451)+_0x2d1dd2(0x94b)+'nspar'+'ent;b'+_0x2d1dd2(0x603)+':1px\x20'+_0x2d1dd2(0xca9)+_0x2d1dd2(0x789)+_0x2d1dd2(0x1ed)+_0x2d1dd2(0x287)+_0x2d1dd2(0x2c0)+_0x2d1dd2(0xa4c))+(_0x2d1dd2(0x1cc)+':#f7e'+'ef5;b'+'order'+'-radi'+'us:6p'+_0x2d1dd2(0xbd4)+_0x2d1dd2(0x9d8)+_0x2d1dd2(0xbe9)+'px;cu'+_0x2d1dd2(0x188)+_0x2d1dd2(0x964)+'er;fo'+_0x2d1dd2(0x57b)+'herit'+_0x2d1dd2(0xab2)+'/butt'+_0x2d1dd2(0x3a5)),_0x2c575e[_0x2d1dd2(0x25a)])+_0x2c575e[_0x2d1dd2(0x494)]+(_0x2d1dd2(0x8c9)+_0x2d1dd2(0x944)+_0x2d1dd2(0x3bd)+'2\x22\x20st'+_0x2d1dd2(0x3ae)+_0x2d1dd2(0x1cc)+':#8d7'+'a99;m'+_0x2d1dd2(0xa9e)+_0x2d1dd2(0x894)+_0x2d1dd2(0xca6)+_0x2d1dd2(0x26c)+_0x2d1dd2(0x223)),_0x365da0['inner'+_0x2d1dd2(0x41f)]=_0x1893d6;var _0x2be842=function(_0x5019b1){var _0x17ad94=_0x2d1dd2;return _0x2c575e[_0x17ad94(0x6b0)](_0x2c575e[_0x17ad94(0x3a7)],_0x17ad94(0x2f9))?_0x365da0['query'+'Selec'+_0x17ad94(0x3b5)](_0x2c575e[_0x17ad94(0x698)](_0x17ad94(0xb0c)+_0x17ad94(0x8dc)+_0x5019b1,'\x22]')):null;},_0x3fd839=_0x2c575e[_0x2d1dd2(0x84d)](_0x2be842,'st'),_0x23969b=_0x2c575e[_0x2d1dd2(0x7ce)](_0x2be842,_0x2d1dd2(0x544)),_0x255f0c=_0x2be842('sp'),_0x4b75ab=_0x2be842('fx'),_0xb68af2=_0x2be842('fv'),_0x439f35=_0x2be842('bar');if(_0x255f0c)_0x255f0c['oncli'+'ck']=function(){var _0x331f22=_0x2d1dd2;_0x2c575e[_0x331f22(0xc18)]===_0x331f22(0x62a)?(_0x1d718a['cv']['width']=_0x416832,_0x4c50b4['cv'][_0x331f22(0x719)+'t']=_0x39042e):_0x2c575e['DmoWq'](_0x5b68a7,!_0x4f804c['on'],_0x4f804c[_0x331f22(0x7b7)+'r']);};if(_0x4b75ab)_0x4b75ab['oninp'+'ut']=function(){_0x5b68a7(_0x4f804c['on'],_0x300799['NBoKN'](parseFloat,_0x4b75ab['value'])||0xdfa+0x2*-0x411+-0x41*0x17);};if(_0x2be842(_0x2d1dd2(0x5a3)))_0x2be842(_0x2c575e[_0x2d1dd2(0x22c)])['oncli'+'ck']=function(){var _0x220a24=_0x2d1dd2;_0x315fa9(_0x300799[_0x220a24(0x3e1)]);};var _0x208483=_0x2be842(_0x2d1dd2(0x410));if(_0x208483)_0x208483['oncli'+'ck']=function(){var _0x1d5f4f=_0x2d1dd2,_0x439745={'EoJKn':_0x300799['YXIcG']};if(_0x300799[_0x1d5f4f(0x73c)](_0x300799['faGFz'],_0x300799['faGFz']))_0x299d7d['style']['left']=_0x439745[_0x1d5f4f(0x5ad)],_0x2754f0['style'][_0x1d5f4f(0xc3e)]=_0x1d5f4f(0x19c),_0x11c82f['style'][_0x1d5f4f(0x90d)]='24px',_0x49eb61[_0x1d5f4f(0x7fb)]['botto'+'m']='24px';else{if(!_0x5b3c46['on'])_0x300799['mitoI'](_0x263e6c,!![],![]);else{if(_0x5b3c46[_0x1d5f4f(0x671)])_0x300799[_0x1d5f4f(0x9a4)](_0x263e6c,![],![]);else{if(_0x4e8782())_0x263e6c(!![],!![]);else _0x300799[_0x1d5f4f(0x9a4)](_0x263e6c,![],![]);}}}};if(_0x2c575e[_0x2d1dd2(0x5b0)](_0x2be842,_0x2d1dd2(0x59a)))_0x2be842(_0x2d1dd2(0x59a))['oncli'+'ck']=function(){var _0x5d840d=_0x2d1dd2;if(!_0x439f35)return;var _0x4a36e5=_0x2c575e['WoaaC'](_0x439f35[_0x5d840d(0x7fb)]['displ'+'ay'],_0x2c575e[_0x5d840d(0x688)]);_0x439f35['style'][_0x5d840d(0x305)+'ay']=_0x4a36e5?'':_0x2c575e[_0x5d840d(0x688)],_0x2c575e[_0x5d840d(0x98a)](_0x2be842,'fold')[_0x5d840d(0xb42)+_0x5d840d(0x19b)+'t']=_0x4a36e5?'-':'+';};return document[_0x2d1dd2(0x44e)][_0x2d1dd2(0x658)+_0x2d1dd2(0x61d)+'d'](_0x365da0),_0xb998a5={'el':_0x365da0,'st':_0x3fd839,'st2':_0x23969b,'sp':_0x255f0c,'fx':_0x4b75ab,'fv':_0xb68af2,'esp':_0x208483},_0xb998a5;}}catch(_0x3a8b8d){return console[_0x2d1dd2(0x3fe)](_0x2c575e['CHkBo'],_0x2d1dd2(0x1cc)+':'+_0x24f5d1,_0x3a8b8d),null;}}}function _0x4e8782(){var _0x23d15e=_0xc654b5;if(_0x2c575e[_0x23d15e(0x542)](_0x2c575e[_0x23d15e(0x586)],'xgotN'))try{var _0x1a753c=_0x183507();return!!(_0x1a753c&&_0x22fe88[_0x23d15e(0xb8a)+'ified']);}catch(_0x18380a){return![];}else try{_0x1e2926(_0x1aa213);}catch(_0xed9714){}}function _0x252d53(){var _0xc9289c=_0xc654b5,_0x3ad709={'bCzRO':function(_0x214c5b,_0x4df484){return _0x2c575e['czbjj'](_0x214c5b,_0x4df484);}};if(_0xc9289c(0x799)!=='OvihM')try{if(_0x2c575e['ZpnwP'](_0x2c575e['bqNmO'],_0x2c575e[_0xc9289c(0xc81)]))return{'version':_0x3ecaaa,'when':new _0x48f423()['toISO'+_0xc9289c(0x3bc)+'g'](),'elapsedMs':_0x3ad709['bCzRO'](_0x2c3249[_0xc9289c(0x53a)](),_0xc4d230),'host':_0x3dc38c,'uwmk':!!(_0x5027a8[_0xc9289c(0x2f5)+_0xc9289c(0x5ee)+'dkit']&&_0x3963e5['Unity'+_0xc9289c(0x5ee)+_0xc9289c(0xa19)]['Runti'+'me']),'il2CppContext':![],'arm':_0x218f75,'hooksTotal':_0x230ef0[_0xc9289c(0xb90)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x5eff31(_0x12e9f6&&_0x137f84[_0xc9289c(0xa26)+'ge']||_0x46ff41)};else{var _0x107718=_0x2c575e['QOGuB']['split']('|'),_0x2f4e33=0xb51+-0x77c+-0x3d5;while(!![]){switch(_0x107718[_0x2f4e33++]){case'0':_0x35ece6[_0xc9289c(0x7fb)][_0xc9289c(0x3ce)+'round']=_0x5b3c46['on']?_0x24f5d1:'trans'+'paren'+'t';continue;case'1':if(!_0x35ece6)return;continue;case'2':var _0x35ece6=_0xb998a5&&_0xb998a5['esp'];continue;case'3':var _0x109862=!_0x5b3c46['on']?_0x2c575e[_0xc9289c(0xc70)]:_0x5b3c46[_0xc9289c(0x671)]?_0x2c575e[_0xc9289c(0xb10)]:_0x2c575e[_0xc9289c(0x468)];continue;case'4':_0x35ece6['style'][_0xc9289c(0x1cc)]=_0x5b3c46['on']?_0x2c575e[_0xc9289c(0x712)]:_0xc9289c(0x40b)+'f5';continue;case'5':if(_0x109862!==_0x35ece6[_0xc9289c(0xb42)+_0xc9289c(0x19b)+'t'])_0x35ece6['textC'+_0xc9289c(0x19b)+'t']=_0x109862;continue;case'6':if(_0x5b3c46[_0xc9289c(0x671)]&&!_0x4e8782())_0x5b3c46['boxes']=![];continue;}break;}}}catch(_0x546b70){}else return _0x2e4717[_0xc9289c(0x764)+'e']=_0xc9289c(0x4e0)+'me.re'+_0xc9289c(0xc7c)+'Game('+')',_0x4299c9;}function _0x263e6c(_0x22cdb0,_0x1d706a){var _0x585a0e=_0xc654b5,_0x4885a5={'xmlLX':function(_0x40cba4,_0x2dc13f){return _0x40cba4+_0x2dc13f;}};_0x5b3c46['on']=!!_0x22cdb0,_0x5b3c46[_0x585a0e(0x671)]=!!_0x1d706a,_0x252d53();try{if(_0x585a0e(0x754)!==_0x2c575e[_0x585a0e(0x18e)])_0x4b3399=_0x1808d6+_0x1b8d36,_0x3a1437=_0x4885a5[_0x585a0e(0x329)](_0x475bbb,_0x2730ae);else{var _0x6d3629=_0x3bb67a();if(_0x6d3629&&_0x6d3629['el'])_0x6d3629['el']['style'][_0x585a0e(0x305)+'ay']=_0x5b3c46['on']?'':_0x585a0e(0x4d3);var _0x27dbb9=_0x436d83;if(_0x27dbb9&&_0x27dbb9['cv'])_0x27dbb9['cv'][_0x585a0e(0x7fb)]['displ'+'ay']=_0x5b3c46['on']&&_0x5b3c46[_0x585a0e(0x671)]?'':_0x585a0e(0x4d3);}}catch(_0x48160c){}}var _0x4f6ade=0x1*-0x1679+-0x2155+-0x26*-0x178;function _0x5b68a7(_0x48108f,_0x196e58){var _0x1a2d9a=_0xc654b5,_0x5f3e6c=_0x2c575e[_0x1a2d9a(0x741)][_0x1a2d9a(0x889)]('|'),_0x2236c1=-0x1d19+0x1425+0x8f4;while(!![]){switch(_0x5f3e6c[_0x2236c1++]){case'0':if(_0x49a747){_0x49a747['sp']&&(_0x49a747['sp']['textC'+_0x1a2d9a(0x19b)+'t']=_0x4f804c['on']?_0x2c575e[_0x1a2d9a(0x1b9)]:'Speed'+_0x1a2d9a(0x6e2),_0x49a747['sp'][_0x1a2d9a(0x7fb)][_0x1a2d9a(0x3ce)+'round']=_0x4f804c['on']?_0x24f5d1:'trans'+_0x1a2d9a(0x256)+'t',_0x49a747['sp']['style'][_0x1a2d9a(0x1cc)]=_0x4f804c['on']?'#2a0f'+'1b':'#f7ee'+'f5');if(_0x49a747['fx'])_0x49a747['fx'][_0x1a2d9a(0x240)]=String(_0x4f804c[_0x1a2d9a(0x7b7)+'r']);if(_0x49a747['fv'])_0x49a747['fv']['textC'+'onten'+'t']=_0x4f804c[_0x1a2d9a(0x7b7)+'r'][_0x1a2d9a(0x297)+'ed'](-0xa*0x279+0x3*0x453+-0x1ae*-0x7)+'x';}continue;case'1':var _0x49a747=_0x2c575e[_0x1a2d9a(0x64e)](_0x44ded3);continue;case'2':var _0x51d0c9=_0x4f804c['on'];continue;case'3':if(!_0x4f804c['on'])_0x30d473={};continue;case'4':_0x4f804c['facto'+'r']=Math['min'](_0x4f804c['max'],Math[_0x1a2d9a(0x54c)](_0x4f804c[_0x1a2d9a(0xbc2)],_0x2c575e[_0x1a2d9a(0x4ce)](Number,_0x196e58)||0x24d9+-0x6*-0x3b9+-0x3b2e));continue;case'5':_0x4f804c['on']=!!_0x48108f;continue;case'6':_0x4f804c['on']&&!_0x51d0c9&&(_0x196e58===undefined||_0x2c575e['YBCCR'](_0x196e58,null)||_0x2c575e['eKgLQ'](Number(_0x196e58),0x17*-0x17f+0x89b*0x4+-0x2))&&(_0x196e58=_0x4f6ade);continue;}break;}}function _0x559eec(_0x4caf09){var _0x28fc85=_0xc654b5,_0x4b3cca=_0x44ded3();if(!_0x4b3cca||!_0x4b3cca['st'])return;try{if(!_0x4759e7()&&!_0xdc40bb){if(_0x2c575e[_0x28fc85(0xc6e)]('pvCiz',_0x2c575e[_0x28fc85(0x7c6)])){if(_0x4b3cca['el'])_0x4b3cca['el']['style'][_0x28fc85(0x305)+'ay']=_0x28fc85(0x4d3);return;}else{var _0x2df75c=(_0x28fc85(0x303)+'|0|4|'+_0x28fc85(0x24c))['split']('|'),_0x166dae=-0x1*-0x1e6+0xe*-0x2f+0xac;while(!![]){switch(_0x2df75c[_0x166dae++]){case'0':var _0xc4345d=[];continue;case'1':var _0x55037f=_0x33102d();continue;case'2':_0x1c943f['ok']+=_0x12ca21;continue;case'3':return _0xc4345d;case'4':for(var _0x41bacb=0x1*0x17d1+-0x1dc*0x11+0x7cb;_0x41bacb<_0x44d9e6;_0x41bacb++)_0xc4345d['push'](_0x55037f[_0x28fc85(0x40d)+_0x28fc85(0x44c)](_0x2c575e[_0x28fc85(0x1ad)](_0x2c575e[_0x28fc85(0xa74)](_0x5d66f5,_0x31053c),_0x41bacb*(0x18*-0x151+-0x2007*-0x1+-0x6b)),!![]));continue;case'5':if(!_0x55037f)return null;continue;case'6':if(_0x345c64<-0xa06+0x1*0x16b5+-0x11*0xbf||_0x2c575e['soGra'](_0xfdf211,_0x2c575e[_0x28fc85(0x296)](_0x417655,-0xd23+-0x452+0x1179))>_0x55037f[_0x28fc85(0x2a0)+'ength'])return null;continue;}break;}}}if(_0x4b3cca['el'])_0x4b3cca['el'][_0x28fc85(0x7fb)][_0x28fc85(0x305)+'ay']='';var _0x2d88ab=Object[_0x28fc85(0xbd7)](_0x4caf09&&_0x4caf09[_0x28fc85(0x142)+_0x28fc85(0x143)]||{})[_0x28fc85(0xb90)+'h'],_0x3fd504=_0x4caf09&&_0x4caf09[_0x28fc85(0x410)]||null,_0x42da6a=_0x3fd504?_0x3fd504[_0x28fc85(0x2fe)+_0x28fc85(0x853)]||0x23a9+0xcb1*0x1+0x101e*-0x3:0x25f2+0x2257+-0x5*0xe75,_0x9e412d=_0x3fd504?_0x3fd504['botCo'+_0x28fc85(0x326)]||-0x214c+0x1d5d*-0x1+0x3ea9:0x1a89+-0x1*-0x39d+0x11*-0x1c6,_0x3f206c=_0x14884d?_0x2c575e[_0x28fc85(0x7e2)](_0x14884d[_0x28fc85(0xaba)+'r'][_0x28fc85(0x2a0)+_0x28fc85(0x662)],0xdc1f3+0x38c9*-0x7c+-0x1699*-0x151)[_0x28fc85(0x297)+'ed'](-0x1493+0x812+-0x61*-0x21)+'MB':'no-me'+'m',_0x2da687=_0x2c575e[_0x28fc85(0x989)](_0x2c575e['TSZTq'](_0x2c575e['DRUBr'](_0x2c575e[_0x28fc85(0xb74)](_0x2c575e[_0x28fc85(0x193)](_0x2c575e[_0x28fc85(0x67b)]('v'+(_0x4caf09&&_0x4caf09['versi'+'on']||_0x24ba5f)+_0x2c575e['USXHF'],_0x4caf09&&_0x4caf09[_0x28fc85(0x4f7)+'Appli'+'ed']||-0x13f*-0xd+0xbe9*0x3+-0x33ee)+'/',_0x4caf09&&_0x4caf09['hooks'+_0x28fc85(0x797)]||0x8d1+-0x1140+0x7f*0x11),_0x2c575e[_0x28fc85(0x4e9)])+_0x2d88ab,'\x20\x20mem'+'\x20'),_0x3f206c),_0x2c575e['BlVxZ'])+_0x42255;_0x4b3cca['st']['textC'+_0x28fc85(0x19b)+'t']=_0x2da687;var _0x73e145=_0x4b3cca[_0x28fc85(0x544)];_0x73e145&&(_0x73e145[_0x28fc85(0xb42)+'onten'+'t']=_0x2c575e['CXoEv'](_0x42da6a,0x6a1+-0x2*-0xfc+0x899*-0x1)?_0x2c575e[_0x28fc85(0x157)](_0x2c575e[_0x28fc85(0x595)](_0x28fc85(0x874)+'RS\x20'+_0x42da6a,_0x9e412d?_0x2c575e[_0x28fc85(0x1d9)](_0x2c575e['hjanT']+_0x9e412d,'\x20bots'):''),_0x3fd504&&_0x3fd504['camer'+'a']?_0x28fc85(0xcac)+'\x20'+_0x3fd504[_0x28fc85(0xa5c)+_0x28fc85(0xb14)]:_0x2c575e[_0x28fc85(0xa58)]):_0x2c575e['OlArb']+(_0x3fd504&&_0x3fd504[_0x28fc85(0xa5c)+'a']?_0x3fd504['camer'+_0x28fc85(0xb14)]:'-'),_0x73e145[_0x28fc85(0x7fb)]['color']=_0x42da6a>0x14a4+0x1ed*0x13+-0x393b?_0x28fc85(0x2aa)+'a8':_0x28fc85(0x7d4)+'99');}catch(_0x47bbee){}}window[_0xc654b5(0x9b3)+_0xc654b5(0x986)+'stene'+'r'](_0x2c575e['dWdTH'],function(_0x583dd3){var _0x5475b3=_0xc654b5,_0x1a9da3={'PswzW':function(_0x16b9b0,_0x44a21c){var _0x474313=_0x3c88;return _0x2c575e[_0x474313(0x9c4)](_0x16b9b0,_0x44a21c);}};if(!_0x583dd3)return;try{if(_0x583dd3[_0x5475b3(0x543)]==='F9'){_0x583dd3[_0x5475b3(0x5f5)+_0x5475b3(0x9f9)+_0x5475b3(0x6e1)](),_0x315fa9('snaps'+'hot');return;}if(_0x583dd3['code']==='F7'){if(_0x5475b3(0x513)===_0x5475b3(0x513)){_0x583dd3['preve'+_0x5475b3(0x9f9)+_0x5475b3(0x6e1)](),_0x2c575e[_0x5475b3(0xaf7)](_0x5b68a7,!_0x4f804c['on'],_0x4f804c[_0x5475b3(0x7b7)+'r']);return;}else _0xce067f['textC'+'onten'+'t']=_0x5475b3(0x23e)+'d';}if(_0x583dd3[_0x5475b3(0x543)]==='F8'){if(_0x2c575e['XllMe'](_0x2c575e['jBbHu'],'EmmPe')){_0x583dd3['preve'+_0x5475b3(0x9f9)+'ault'](),_0x5b68a7(_0x4f804c['on'],_0x2c575e[_0x5475b3(0x1fb)](_0x4f804c['facto'+'r'],-0x25b+-0xcd2*0x2+0x1bff+0.5));return;}else _0x1f94bd[_0x5475b3(0x594)]=_0x1a9da3[_0x5475b3(0x222)]((_0x180e40['inner'+'Width']||0x2627*0x1+-0x1f7c+0x3*-0x239)-(_0x3dbddf[_0x5475b3(0x7dd)+'tWidt'+'h']||0x1*-0x248c+0x1fd+0x24fb),-0x1ba1+-0x10a6*-0x1+0x2d*0x3f);}if(_0x583dd3[_0x5475b3(0x543)]==='F6'){_0x583dd3[_0x5475b3(0x5f5)+'ntDef'+'ault'](),_0x5b68a7(_0x4f804c['on'],_0x4f804c[_0x5475b3(0x7b7)+'r']-(-0x21e*0xb+0x213+-0x1537*-0x1+0.5));return;}if(_0x583dd3[_0x5475b3(0x543)]===_0x2c575e[_0x5475b3(0x98c)]){_0x583dd3['preve'+'ntDef'+_0x5475b3(0x6e1)](),_0x8e02c9(!_0x3e52ff['open']);return;}if(_0x583dd3['code']===_0x2c575e['OxaLu']){_0x583dd3[_0x5475b3(0x5f5)+'ntDef'+'ault'](),_0x521593['fov']=Math[_0x5475b3(0xbc2)](0x1aac+-0x133*-0x1d+0x3ce7*-0x1,_0x2c575e['wbtUr'](_0x521593['fov'],-0x1a6e+0x1626+0x3*0x16e)),_0xedec9c();return;}if(_0x583dd3['code']===_0x2c575e['mMsal']){_0x583dd3[_0x5475b3(0x5f5)+'ntDef'+_0x5475b3(0x6e1)](),_0x521593[_0x5475b3(0x8bd)]=Math['max'](-0xf*-0x18b+-0x1c92+-0x3*-0x1d9,_0x521593[_0x5475b3(0x8bd)]-(-0x96*-0x7+-0x167*-0xb+-0x1385)),_0x2c575e[_0x5475b3(0x36a)](_0xedec9c);return;}}catch(_0x43f85d){}},!![]);var _0x5b3c46={'on':!![],'span':0x50,'boxes':![]};function _0x216ea1(){var _0x3eed6e=_0xc654b5,_0x4d37cf=_0x48ecac[_0x3eed6e(0x3bb)+_0x3eed6e(0x750)+_0x3eed6e(0xbe8)+'nc']||{},_0x4c5a49=Object[_0x3eed6e(0xbd7)](_0x4d37cf);for(var _0x248b62=0x1*0x14d1+-0x3c*0x7b+0x1*0x803;_0x2c575e['zsXKW'](_0x248b62,_0x4c5a49['lengt'+'h']);_0x248b62++){var _0x5d4af0=_0x4d37cf[_0x4c5a49[_0x248b62]]['ptr'],_0x3255d9=_0x155fdf(_0x5d4af0+(-0x1b20+0x2357+-0x807),'u32');if(!_0x3255d9)continue;var _0x274f85=_0x5a4af7['Mouse'+'Look']||[],_0xd9177f={'mouseLook':'0x'+(_0x3255d9>>>-0x12ac+0x2*-0x883+-0x5f3*-0x6)['toStr'+_0x3eed6e(0xb19)](-0x1*0x1169+-0x1*0xaaf+-0x1c28*-0x1),'floats':{},'camera':null,'vec2':null};for(var _0x49668c=0x57*0x5+-0x353+0x1a0;_0x2c575e['nPCRH'](_0x49668c,_0x274f85[_0x3eed6e(0xb90)+'h']);_0x49668c++){if(_0x2c575e[_0x3eed6e(0x7a4)]('keCIy','IbQOV'))_0x1a8a47(_0x3523d5(_0x5e6a80['value'])||_0x510531),_0x5a19e6();else{if(_0x2c575e['muqJQ'](_0x274f85[_0x49668c][0x21c+-0x2672+0x2457],_0x2c575e[_0x3eed6e(0xac1)]))continue;_0xd9177f['float'+'s']['0x'+_0x274f85[_0x49668c][-0x5*-0x6e6+-0x17c2*0x1+-0x2af*0x4][_0x3eed6e(0x265)+_0x3eed6e(0xb19)](-0x1f9d+0xfc8+0xfe5)]=_0x2c575e['ymify'](_0x155fdf,_0x3255d9+_0x274f85[_0x49668c][0x64+0xe7e+-0xee2],'f32');}}var _0x5cc2d0=_0x155fdf(_0x3255d9+(0x1f65+-0xac1*-0x1+-0x29fa),_0x2c575e[_0x3eed6e(0x5f7)]);if(_0x5cc2d0)_0xd9177f[_0x3eed6e(0xa5c)+'a']='0x'+_0x2c575e['UBtUJ'](_0x5cc2d0,-0xf*-0x11+-0x1f*-0xd1+0xb6*-0x25)['toStr'+_0x3eed6e(0xb19)](0x482+-0x1a64+-0x1*-0x15f2);var _0x1f778e=_0x578fb7(_0x3255d9,0x284*0x1+-0x9b*-0x11+-0xc87,-0x4c*-0x1e+0x25d0+-0x2eb6);if(_0x1f778e)_0xd9177f[_0x3eed6e(0x51b)]=_0x1f778e;return _0xd9177f;}return null;}var _0x5c94a7=_0x2c575e['Vkjfb'],_0x521593={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x20db37=localStorage['getIt'+'em'](_0x5c94a7);if(_0x20db37)_0x521593['fov']=Math[_0xc654b5(0xbc2)](-0x3d9+-0x1*-0x1fd2+-0x1b6d,Math[_0xc654b5(0x54c)](0x2*0x1c1+-0x4*-0x7e9+-0x4*0x8c2,_0x2c575e['FnjOM'](parseFloat,_0x20db37)||-0x24cf*-0x1+0x224e+0x1*-0x46c3));}catch(_0x1f77a4){}function _0xedec9c(){var _0x82383f=_0xc654b5;try{localStorage['setIt'+'em'](_0x5c94a7,String(_0x521593[_0x82383f(0x8bd)]));}catch(_0x37e7a9){}}var _0x33ea31=_0x2c575e['wCSPy'],_0x11b805=![];try{if(_0x2c575e[_0xc654b5(0x572)](localStorage['getIt'+'em'](_0x33ea31),null)){if(_0x2c575e[_0xc654b5(0xbba)](_0xc654b5(0xc5b),'YsRhO'))localStorage[_0xc654b5(0x424)+_0xc654b5(0x7a5)](_0x33ea31),_0x11b805=!![];else{var _0xc9dc2a=_0x2c575e['MpnMO'](_0x23a1b0);if(!_0xc9dc2a)return _0x201dd3;if(_0xc9dc2a[_0xc654b5(0x43c)+'et'][_0xc654b5(0x26f)])return _0xc9dc2a[_0xc654b5(0x26f)];try{return _0x189292(_0xc9dc2a);}catch(_0x4b6652){return _0xc9dc2a[_0xc654b5(0x43c)+'et']['api']='1',_0xc9dc2a[_0xc654b5(0x26f)]=_0x42bb00,_0x31f064[_0xc654b5(0x3fe)](_0x2c575e[_0xc654b5(0x4a6)],_0xc654b5(0x1cc)+':'+_0x30d1be,_0x4b6652),_0x117968;}}}}catch(_0x286ad3){}var _0x2f7d63=0xed3+-0x98*0x1e+0x325,_0x8e199c=0x23bb+0x330+-0x26cf,_0x2f7d63=0x243*-0x4+0xbda+-0x3*0xe2,_0x8e199c=0x253a+-0x1d90+-0x78e,_0x22fe88={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+_0xc654b5(0xc1d)+'ok\x20ye'+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x3eb9e0(_0x486afd){var _0x373dbd=_0xc654b5,_0x19308f={'cVZFN':function(_0x2fb1b4,_0x44500c){return _0x2fb1b4+_0x44500c;},'kHWKD':_0x373dbd(0x841)+'b','LnDVK':function(_0x351d7a,_0x4f1bd5){return _0x351d7a===_0x4f1bd5;}};if('IyPkv'!=='IyPkv'){if(_0x43f93a[_0x373dbd(0xb66)+'ns'][_0x5c9239]['class'+'List'])_0x1bf78a['butto'+'ns'][_0x461963][_0x373dbd(0x52d)+_0x373dbd(0xcd0)]=_0x19308f[_0x373dbd(0x33e)](_0x19308f['kHWKD'],_0x19308f[_0x373dbd(0xa6f)](_0x3e5694,_0x3843fd)?_0x373dbd(0xb4a)+'ve':'');}else{var _0x199785=null,_0x12e39a=-0x1f64+-0x189a+0x37fe;for(var _0x5bdb70 in _0x4b5013){var _0x2a8476=_0x4b5013[_0x5bdb70];if(!_0x2a8476[_0x373dbd(0x43b)]||_0x2a8476['last']===null)continue;var _0x24fa01=_0x2c575e['nzGbY'](_0x155fdf,_0x2c575e['oxlze'](_0x109959,_0x486afd),_0x2c575e['GnIXc']);if(typeof _0x24fa01!==_0x2c575e[_0x373dbd(0x9df)])continue;if(_0x2c575e['fwDQp'](Math['abs'](_0x2a8476[_0x373dbd(0x870)]-_0x24fa01),0x1*0x1bcd+-0xe0e+-0xdbf+0.001)&&_0x2a8476[_0x373dbd(0x43b)]>_0x12e39a){if(_0x373dbd(0x6d8)===_0x373dbd(0xc8a)){var _0x334068=_0x49e50f['unity'+_0x373dbd(0x997)+_0x373dbd(0xa09)]||_0x7fed3d[_0x373dbd(0x6fc)+'Game']||_0x5639a7[_0x373dbd(0xb11)];if(_0x334068)return _0x210a25['sourc'+'e']=_0x373dbd(0x3b8)+_0x373dbd(0xa32)+'bal',_0x334068;}else _0x199785=_0x5bdb70,_0x12e39a=_0x2a8476['hits'];}}return _0x199785;}}function _0x3a881f(_0x4f478b){var _0x3f4f21=_0xc654b5,_0x330d42={'fePBu':function(_0x45d7fc,_0x18e780){return _0x45d7fc>=_0x18e780;}},_0x3c636f=[],_0x259c39=_0x5a4af7[_0x3f4f21(0xa88)+_0x3f4f21(0xb1a)]||[];for(var _0x16570c in _0x4b5013){var _0x50033a=_0x4b5013[_0x16570c];if(!_0x50033a[_0x3f4f21(0x43b)])continue;var _0x1ce2ed=null;for(var _0x508405=0x3*-0x827+0x128*0xa+0xce5;_0x2c575e['NWbKs'](_0x508405,_0x259c39['lengt'+'h']);_0x508405++){if(_0x2c575e[_0x3f4f21(0x3f1)](_0x2c575e[_0x3f4f21(0x753)],_0x3f4f21(0x7ac))){if(_0x330d42[_0x3f4f21(0x47e)](_0x512a85[_0x1fb34a]['membe'+'rs'][_0x3f4f21(0xb90)+'h'],_0x2fab98))_0x3a9be0[_0x3f4f21(0x1e1)](_0x3c4912[_0x1dfdea]);}else{if(_0x259c39[_0x508405][0x61*0x44+-0x37*0x1f+-0x131a]!=='f32')continue;var _0x5256d5=_0x155fdf(_0x4f478b+_0x259c39[_0x508405][-0x4*0x7f6+0x1dbe+0x21a],_0x3f4f21(0x983));if(_0x2c575e['cieQX'](typeof _0x5256d5,_0x3f4f21(0x973)+'r')&&_0x2c575e[_0x3f4f21(0x1fe)](Math[_0x3f4f21(0x419)](_0x2c575e[_0x3f4f21(0x28e)](_0x5256d5,_0x50033a[_0x3f4f21(0x870)])),-0x449*-0x1+-0x164f+0x1206+0.001)){if(_0x3f4f21(0x205)==='odMcK'){_0x1ce2ed=_0x2c575e[_0x3f4f21(0x157)]('0x',_0x259c39[_0x508405][-0x1fd*-0x2+-0x12b9*-0x1+-0x95*0x27][_0x3f4f21(0x265)+'ing'](-0x1623+0x9e1+0x13*0xa6));break;}else return null;}}}_0x3c636f[_0x3f4f21(0x1e1)]({'name':_0x16570c,'value':_0x50033a['last'],'matches':_0x1ce2ed,'hits':_0x50033a[_0x3f4f21(0x43b)],'set':_0x50033a['setHi'+'ts']?_0x50033a['setLa'+'st']:null});}return _0x3c636f;}function _0x183507(){var _0x109817=_0xc654b5,_0x23573c={'sRnFr':function(_0x5405ad,_0x344147){return _0x5405ad(_0x344147);}},_0x10a7c7=_0x216ea1();if(!_0x10a7c7||!_0x10a7c7[_0x109817(0x7e6)+_0x109817(0xb1a)]){if('VixWh'===_0x2c575e[_0x109817(0x67f)])return _0x22fe88['ident'+'ified']=![],_0x22fe88['why']=_0x109817(0x824)+_0x109817(0xc1d)+_0x109817(0x35a)+'t',null;else{var _0xc85db4=_0x5b0924[_0x109817(0xbc8)+'Heigh'+'t']||-0x50*0x30+-0x2e6*0x1+0x12b*0x12;if(_0xc85db4<0x1*-0x907+-0x1629+0x12*0x1de)_0x2c575e['IfiQk'](_0x4ed2c3,![]);}}var _0x486ddc=_0x2c575e[_0x109817(0x714)](parseInt,_0x10a7c7['mouse'+_0x109817(0xb1a)],-0x2*-0x2e9+0x2f*0xb0+-0x2612);if(_0x2c575e['kwunH'](_0x109959,_0x486ddc))_0x109959=_0x486ddc;_0x22fe88['gette'+'rs']=_0x3a881f(_0x486ddc);var _0x5a45fa=_0x1164df(),_0x3910d4=_0x2c575e[_0x109817(0x4ce)](_0x3eb9e0,_0x2f7d63),_0xc77a88=null;for(var _0x2b3ac6 in _0x4b5013){if(_0x2c575e[_0x109817(0x76e)](_0x2b3ac6,_0x3910d4))continue;var _0x156cc6=_0x4b5013[_0x2b3ac6];if(!_0x156cc6[_0x109817(0x43b)]||_0x156cc6['last']===null)continue;if(_0x156cc6['last']>=-(0x1eb3+0x807*-0x1+0x2*-0xb29)&&_0x156cc6['last']<=0x2499+-0x2aa+0x2195*-0x1){if(_0x2c575e['WHQgJ'](_0x109817(0x805),'SSezw')){_0xc77a88=_0x2b3ac6;break;}else try{if(!_0x280abf[_0x109817(0x649)])return;var _0x3087fc=_0x2c575e['YWKTo'](_0x4f5d75);_0x4dd5d2[_0x109817(0x649)][_0x109817(0x7fb)]['opaci'+'ty']=_0x39e33f[_0x109817(0x62d)]?'1':_0x3087fc?'.8':_0x2c575e[_0x109817(0xba2)],_0x1da7ad['petal'][_0x109817(0x7c1)]=_0x3087fc?'Sakur'+_0x109817(0x137)+'llWar'+'z\x20(In'+_0x109817(0x22d):'Sakur'+_0x109817(0x137)+_0x109817(0x647)+_0x109817(0x5bd)+_0x109817(0x1eb)+_0x109817(0x61f)+_0x109817(0x802)+'game\x20'+_0x109817(0x8fd)+_0x109817(0xb0d);}catch(_0x539139){}}}_0x22fe88[_0x109817(0x5b4)+'tter']=_0x3910d4,_0x22fe88[_0x109817(0xa7f)+_0x109817(0x691)+'r']=_0xc77a88;var _0x5942f5,_0x14b667;if(_0x5a45fa&&_0x5a45fa['pitch']!==null)_0x2c575e['TPkam'](_0x109817(0x38b),_0x109817(0x38b))?_0x33905d['preve'+'ntDef'+_0x109817(0x6e1)]():(_0x14b667=_0x5a45fa[_0x109817(0xa7f)],_0x5942f5=_0x5a45fa['yaw'],_0x22fe88['sourc'+'e']=_0x2c575e['KRcCG'](_0x2c575e[_0x109817(0x527)]+_0x5a45fa[_0x109817(0x603)],')'));else{if(_0x3910d4)_0x5942f5=_0x4b5013[_0x3910d4][_0x109817(0x870)],_0x22fe88[_0x109817(0x764)+'e']=_0x2c575e['wFnuq'],_0x14b667=_0xc77a88?_0x4b5013[_0xc77a88]['last']:_0x155fdf(_0x2c575e[_0x109817(0x9e8)](_0x486ddc,_0x8e199c),_0x109817(0x983));else{if(_0x109817(0x9a7)!==_0x2c575e[_0x109817(0x26e)]){if(_0x247a65[_0x109817(0x74d)]===_0x109817(0x86d)){_0x532e80()['set']({'host':_0x39ec03[_0x109817(0x138)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2c575e['bNwQc'](_0x37ecb6['kind'],_0x109817(0x30f)+'t'))_0x3b9c18()[_0x109817(0xa2b)](_0x53228a['repor'+'t']);}else _0x5942f5=_0x2c575e[_0x109817(0x210)](_0x155fdf,_0x2c575e[_0x109817(0xb21)](_0x486ddc,_0x2f7d63),_0x109817(0x983)),_0x14b667=_0x155fdf(_0x2c575e['JSsuD'](_0x486ddc,_0x8e199c),'f32'),_0x22fe88[_0x109817(0x764)+'e']='field'+'\x200x28'+_0x109817(0xb83)+'ss)';}}_0x22fe88['rawYa'+'w']=_0x5942f5,_0x22fe88['rawPi'+'tch']=_0x14b667;if(_0x2c575e[_0x109817(0x898)](typeof _0x5942f5,_0x109817(0x973)+'r')||!isFinite(_0x5942f5)||_0x2c575e['TwJNl'](typeof _0x14b667,_0x2c575e[_0x109817(0x9df)])||!_0x2c575e['jPtoi'](isFinite,_0x14b667))return _0x2c575e['WOfEC'](_0x109817(0x3b1),_0x2c575e['NrLiT'])?(_0x130782[_0x109817(0x147)+'d']++,_0x54eba0['lastE'+'rror']=_0x1d48dc[_0x109817(0x2c9)+_0x109817(0x7c2)]||_0x23573c[_0x109817(0x56d)](_0x5795a9,_0x3bcbce&&_0x1f1228['messa'+'ge']||_0x25dc38)[_0x109817(0x8c4)](-0x409*0x2+0x5ec*-0x2+0x13ea,-0xd5b+0xb14+0x2bf),_0x1c9f0e):(_0x22fe88[_0x109817(0xb8a)+_0x109817(0x252)]=![],_0x22fe88[_0x109817(0xabd)]=_0x2c575e[_0x109817(0x6f1)],null);if(_0x14b667<-(0x195f+-0xc24+0xce1*-0x1)||_0x2c575e[_0x109817(0x9ba)](_0x14b667,-0x211e+-0x1e1+-0x1*-0x2359))return _0x22fe88[_0x109817(0xb8a)+'ified']=![],_0x22fe88[_0x109817(0xabd)]='pitch'+'\x20'+Math[_0x109817(0x1b5)](_0x14b667)+(_0x109817(0x3a8)+'of\x20ra'+'nge'),null;return _0x22fe88[_0x109817(0xabd)]='',_0x22fe88['ident'+_0x109817(0x252)]=!![],_0x22fe88['pitch']=_0x14b667,_0x22fe88['yaw']=_0x5942f5,_0x22fe88;}function _0xbde371(_0x3e67c4,_0x534ac8,_0x4df204,_0x44e5d4){var _0x1d3dde=_0xc654b5,_0x5ed0b1=_0x2c575e['hkCHr']['split']('|'),_0x3d359f=-0x26ee+-0x141a+0x3b08;while(!![]){switch(_0x5ed0b1[_0x3d359f++]){case'0':var _0x232c50=_0x2c575e['kFVHx'](_0x2c575e['fIfUV'](_0x2be6a6,_0x5744f2)+_0x37ee57*_0x18a55c,_0x3398ce*_0x127d66);continue;case'1':var _0x3485f4=_0x2c575e['BHbyT'](_0x4df204,_0x44e5d4);continue;case'2':var _0x4d46ac=_0x2c575e[_0x1d3dde(0x87f)](_0x232c50,_0x2478da)/(_0x6472ad*_0x3485f4);continue;case'3':var _0x232fe1=_0x2c575e[_0x1d3dde(0x33d)](_0xf9cc4[_0x1d3dde(0xa7f)]*Math['PI'],0xf87+0x3*-0xa19+0x58*0x2d),_0x5bdabc=_0x2c575e['bTXVX'](_0x2c575e['fIfUV'](_0xf9cc4['yaw'],Math['PI']),-0xe39+-0x73*0xc+-0x1451*-0x1);continue;case'4':var _0x2478da=_0x2c575e['soGra'](_0x2c575e[_0x1d3dde(0x378)](_0x2be6a6*_0x13bfaf,_0x37ee57*_0x14aa35),_0x3398ce*_0x3853ed);continue;case'5':var _0x58c44e=_0x2c575e['sbhUY'](_0x3c29cc/_0x2478da,_0x6472ad);continue;case'6':var _0x4b8ebd=Math[_0x1d3dde(0x524)](_0x232fe1);continue;case'7':return{'x':_0x2c575e[_0x1d3dde(0x193)](_0x4d46ac*(0xce1+-0x232b+-0xb25*-0x2+0.5),0x94d+0x1ba3+-0x24f0+0.5)*_0x4df204,'y':(0x12ec+0x15b*0xf+-0x2741*0x1+0.5-_0x2c575e['DbpEN'](_0x58c44e,-0xb2a+-0x798+0x2*0x961+0.5))*_0x44e5d4,'z':_0x2478da};case'8':var _0x2be6a6=_0x2c575e['yKJMc'](_0x534ac8[0x4cd*-0x1+-0x1*-0x25c7+-0x20fa],_0x3e67c4[0x1*-0x1751+0x8e6*0x1+0x1*0xe6b]),_0x37ee57=_0x534ac8[0x35b*0xb+-0x1b*-0x93+-0x3469]-_0x3e67c4[-0x2430+-0x324+0x2755],_0x3398ce=_0x2c575e['zBlfD'](_0x534ac8[-0x1*-0x141b+0x524+-0x1f1*0xd],_0x3e67c4[0x1323*0x2+-0xf2*0xc+-0x1aec]);continue;case'9':var _0x23468a=_0x521593[_0x1d3dde(0x8bd)]*Math['PI']/(0x116*-0x13+0x1f9b+-0xa45);continue;case'10':var _0x6472ad=Math['tan'](_0x23468a/(-0x1a44+0x24cf+-0xa89));continue;case'11':var _0x5744f2=_0x3853ed,_0x18a55c=-0x10a*-0x1a+0x1ce1+0x37e5*-0x1,_0x127d66=-_0x13bfaf;continue;case'12':var _0x3c29cc=_0x2c575e['XeacN'](_0x2c575e[_0x1d3dde(0x9ac)](_0x2be6a6*_0x2c575e['RQKzC'](_0x2c575e['vKRiO'](_0x14aa35,_0x127d66),_0x2c575e[_0x1d3dde(0x59c)](_0x3853ed,_0x18a55c)),_0x2c575e[_0x1d3dde(0x9ce)](_0x37ee57,_0x3853ed*_0x5744f2-_0x13bfaf*_0x127d66)),_0x3398ce*_0x2c575e[_0x1d3dde(0x59b)](_0x13bfaf*_0x18a55c,_0x2c575e[_0x1d3dde(0x738)](_0x14aa35,_0x5744f2)));continue;case'13':if(_0x4d46ac<-(0x20c9+-0x1381+0x67*-0x21+0.6000000000000001)||_0x4d46ac>0x224b+0x19ea+0x1*-0x3c34+0.6000000000000001||_0x2c575e[_0x1d3dde(0x27c)](_0x58c44e,-(-0xe3f+0x4b8*0x1+0x988+0.6000000000000001))||_0x58c44e>0x2d*0xb3+0x1838+0x37ae*-0x1+0.6000000000000001)return null;continue;case'14':if(!_0xf9cc4)return null;continue;case'15':if(_0x2478da<=-0x76d+-0x1066+0x7f1*0x3+0.05)return null;continue;case'16':var _0x13bfaf=Math[_0x1d3dde(0x588)](_0x5bdabc)*_0x4b8ebd,_0x14aa35=-Math[_0x1d3dde(0x588)](_0x232fe1),_0x3853ed=_0x2c575e['rwXgI'](Math[_0x1d3dde(0x524)](_0x5bdabc),_0x4b8ebd);continue;case'17':var _0xf9cc4=_0x183507();continue;}break;}}var _0x3e52ff={'open':![],'cat':_0xc654b5(0x1bc)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x25dce3='sakur'+'a-sw-'+_0xc654b5(0x20c)+'pos',_0xdc40bb=null,_0x4b7d25=[{'id':'comba'+'t','label':_0x2c575e['EQtnA']},{'id':_0xc654b5(0x1f4)+'ls','label':'VIS'},{'id':_0xc654b5(0x240)+'s','label':_0x2c575e[_0xc654b5(0xb6c)]},{'id':'log','label':_0xc654b5(0x3cf)}],_0x2e3701=_0x2c575e[_0xc654b5(0x7ba)](_0x2c575e['qJCqy'](_0x2c575e['qJuqA'](_0x2c575e['qJuqA'](_0x2c575e['cyDNe'](_0x2c575e['QRAwJ'](_0x2c575e[_0xc654b5(0xafe)](_0x2c575e[_0xc654b5(0xad0)](_0x2c575e[_0xc654b5(0x3f6)](_0x2c575e['RuTYk'](_0x2c575e[_0xc654b5(0x9e8)](_0x2c575e['lMxop'](_0x2c575e[_0xc654b5(0xaa0)](_0x2c575e['qzOkO'](_0x2c575e[_0xc654b5(0xaa0)](_0x2c575e[_0xc654b5(0x7d8)](_0x2c575e[_0xc654b5(0xa17)](_0x2c575e['rDccO'](_0x2c575e[_0xc654b5(0x2a5)](_0x2c575e[_0xc654b5(0x8ff)](_0x2c575e[_0xc654b5(0xc3d)](_0x2c575e['FtAeX'](_0x2c575e[_0xc654b5(0x5f6)](_0x2c575e[_0xc654b5(0x9ff)](_0x2c575e['ZLfIu'](_0x2c575e['BvJho'](_0x2c575e['tYOrU'](_0x2c575e['SKVDn']+(_0xc654b5(0xb7e)+_0xc654b5(0x8be)+_0xc654b5(0x325)+'ot.mn'+'-pane'+_0xc654b5(0x591)+'ition'+':fixe'+'d;rig'+'ht:24'+'px;bo'+_0xc654b5(0x435)+_0xc654b5(0x72d)+_0xc654b5(0x1b3)+':min('+_0xc654b5(0x9ef)+_0xc654b5(0x602)+'(100v'+'w\x20-\x204'+_0xc654b5(0x211)+';max-'+'heigh'+'t:min'+_0xc654b5(0x40c)+_0xc654b5(0x453)+_0xc654b5(0xba8)+_0xc654b5(0x916)+_0xc654b5(0x1e2)+');')+_0x2c575e[_0xc654b5(0xb54)],_0x2c575e[_0xc654b5(0x706)]),_0xc654b5(0x70a)+'hadow'+_0xc654b5(0xb6d)+'0\x201px'+'\x20rgba'+'(255,'+_0xc654b5(0x377)+_0xc654b5(0x6bd)+_0xc654b5(0x868)+'set\x200'+_0xc654b5(0x852)+'0\x20rgb'+'a(255'+',255,'+_0xc654b5(0xa90)+_0xc654b5(0x350)+'\x2030px'+'\x2080px'+_0xc654b5(0x789)+_0xc654b5(0xb43)+'0,.55'+');'),_0x2c575e[_0xc654b5(0x78d)])+(_0xc654b5(0x1cc)+':#f6e'+_0xc654b5(0x6de)+'ont-s'+_0xc654b5(0xc3a)+'3px;f'+_0xc654b5(0x21f)+_0xc654b5(0x548)+':\x22Int'+_0xc654b5(0x2b9)+_0xc654b5(0x77c)+_0xc654b5(0x17b)+_0xc654b5(0x950)+'m-ui,'+_0xc654b5(0x15c)+_0xc654b5(0x2c5)+';}'),_0x2c575e['fgHnc'])+('.mn-s'+'ide{d'+_0xc654b5(0x605)+'y:fle'+_0xc654b5(0x3dc)+'x-dir'+'ectio'+_0xc654b5(0xa8c)+'umn;a'+_0xc654b5(0x5fa)+'items'+':cent'+_0xc654b5(0x490)+'p:4px'+_0xc654b5(0x56e)+'h:62p'+'x;fle'+'x:non'+_0xc654b5(0x5d1)+_0xc654b5(0x9d8)+'12px\x20'+'0;')+_0x2c575e[_0xc654b5(0x721)]+('.mn-l'+_0xc654b5(0x4ba)+'ispla'+'y:gri'+'d;pla'+'ce-it'+'ems:c'+'enter'+_0xc654b5(0x56e)+'h:32p'+_0xc654b5(0xb7d)+'ght:3'+'2px;m'+_0xc654b5(0x38d)+_0xc654b5(0x975)+_0xc654b5(0x5a5)+'x;}')+(_0xc654b5(0x999)+'ogo-s'+'vg{wi'+_0xc654b5(0x894)+_0xc654b5(0x48a)+'eight'+_0xc654b5(0x9d3)+';over'+_0xc654b5(0xaef)+_0xc654b5(0x1d4)+_0xc654b5(0xc64)+'lter:'+_0xc654b5(0x1dc)+_0xc654b5(0xc78)+_0xc654b5(0xbc5)+'\x204px\x20'+'rgba('+_0xc654b5(0xc88)+'07,15'+_0xc654b5(0x40e)+_0xc654b5(0x90f)),_0x2c575e['VXIdz']),_0x2c575e[_0xc654b5(0x18c)])+(_0xc654b5(0x4d9)+_0xc654b5(0xa61)+_0xc654b5(0x21e)+'olor:'+_0xc654b5(0x534)+_0xc654b5(0xa5f)+_0xc654b5(0xb59)+'2,.8)'+';}')+(_0xc654b5(0x4d9)+_0xc654b5(0x50e)+_0xc654b5(0x24e)+'color'+_0xc654b5(0xa3c)+'b9d;b'+_0xc654b5(0x441)+_0xc654b5(0x3e4)+'rgba('+_0xc654b5(0xc88)+_0xc654b5(0x5a4)+_0xc654b5(0x30e)+';}')+_0x2c575e[_0xc654b5(0x97e)]+_0x2c575e[_0xc654b5(0xc6b)]+_0x2c575e[_0xc654b5(0x620)]+(_0xc654b5(0x63e)+'{font'+'-size'+':17px'+_0xc654b5(0x4d4)+_0xc654b5(0xcd1)+_0xc654b5(0x279)+'0;}')+_0x2c575e[_0xc654b5(0x82f)],'.mn-c'+_0xc654b5(0xc3f)+'displ'+_0xc654b5(0xc9d)+_0xc654b5(0x18d)+'ace-i'+'tems:'+_0xc654b5(0x596)+'r;wid'+'th:28'+'px;he'+_0xc654b5(0x46f)+_0xc654b5(0x49d)+'borde'+_0xc654b5(0x988)+'order'+'-radi'+_0xc654b5(0xb53)+'x;bac'+_0xc654b5(0xbb1)+_0xc654b5(0x220)+'anspa'+_0xc654b5(0xa38))+_0x2c575e['AiGDa']+_0x2c575e[_0xc654b5(0x15e)]+_0x2c575e['VVwXw']+(_0xc654b5(0xc45)+_0xc654b5(0x26d)+_0xc654b5(0xbf8)+';min-'+'heigh'+'t:0;o'+_0xc654b5(0x3cb)+'ow-y:'+'auto;'+_0xc654b5(0x305)+_0xc654b5(0xc9d)+'id;gr'+'id-te'+_0xc654b5(0x2b6)+'e-col'+'umns:'+'repea'+_0xc654b5(0xbc1)+_0xc654b5(0x958)+_0xc654b5(0xa75)+'max(2'+'50px,'+_0xc654b5(0x96d)+';'),_0xc654b5(0x61e)+'-item'+_0xc654b5(0x6da)+'rt;al'+_0xc654b5(0x668)+'onten'+_0xc654b5(0x47c)+_0xc654b5(0x4e5)+'p:10p'+_0xc654b5(0xbd4)+_0xc654b5(0x9d8)+_0xc654b5(0x8bb)+'\x206px\x20'+_0xc654b5(0x47d))+_0x2c575e[_0xc654b5(0x25b)]+_0x2c575e['RXXtt'],_0xc654b5(0x18a)+'ard{b'+'order'+_0xc654b5(0x8e5)+_0xc654b5(0xc08)+_0xc654b5(0x9a0)+_0xc654b5(0x5b2)+_0xc654b5(0x8e0)+'gba(2'+_0xc654b5(0x247)+_0xc654b5(0x734)+_0xc654b5(0x269)+');box'+_0xc654b5(0xaae)+_0xc654b5(0xbc7)+_0xc654b5(0xbbc)+'\x200\x200\x20'+_0xc654b5(0x707)+_0xc654b5(0x551)+_0xc654b5(0x247)+_0xc654b5(0x734)+_0xc654b5(0xad6)+';}')+(_0xc654b5(0x18a)+_0xc654b5(0x700)+'n{bac'+_0xc654b5(0xbb1)+'nd:rg'+_0xc654b5(0x3b3)+'5,255'+_0xc654b5(0x66a)+_0xc654b5(0xcba)+_0xc654b5(0x70a)+_0xc654b5(0x569)+':inse'+_0xc654b5(0x2e8)+_0xc654b5(0xcaf)+'x\x20rgb'+'a(255'+_0xc654b5(0x39d)+_0xc654b5(0x5c4)+_0xc654b5(0x811))+_0x2c575e['mTNlu'],'.sk-c'+'ard-t'+_0xc654b5(0x4ca)+_0xc654b5(0x608)+_0xc654b5(0x854)+'-widt'+_0xc654b5(0xac5)),_0xc654b5(0x18a)+_0xc654b5(0x520)+_0xc654b5(0xa76)+_0xc654b5(0xa06)+'g{fon'+_0xc654b5(0x376)+'e:13p'+_0xc654b5(0x98b)+_0xc654b5(0x95c)+_0xc654b5(0x36b)+_0xc654b5(0x794)+'lor:r'+'gba(2'+_0xc654b5(0x36c)+_0xc654b5(0x64b)+_0xc654b5(0xa21)+';}'),_0xc654b5(0x18a)+'ard.o'+_0xc654b5(0x9cc)+'-card'+_0xc654b5(0xacc)+'e\x20str'+_0xc654b5(0x838)+'olor:'+_0xc654b5(0xc42)+'f5;}'),_0x2c575e[_0xc654b5(0x1c0)])+('.sk-m'+'desc{'+'font-'+_0xc654b5(0xa65)+_0xc654b5(0x8ba)+_0xc654b5(0x197)+'ty:.4'+';marg'+_0xc654b5(0x757)+'ttom:'+_0xc654b5(0x501)+_0xc654b5(0xc43)+_0xc654b5(0xaf3)+':pre-'+_0xc654b5(0x55a)+'}'),_0xc654b5(0x18a)+'tl{di'+'splay'+_0xc654b5(0x9ea)+';alig'+_0xc654b5(0x8f8)+'ms:ce'+_0xc654b5(0x1f3)+'gap:8'+'px;pa'+_0xc654b5(0x9fc)+':4px\x20'+'0;fon'+_0xc654b5(0x376)+'e:11.'+_0xc654b5(0xb08)),_0x2c575e['VpUrp']),_0xc654b5(0x776)+'int{d'+'ispla'+'y:blo'+'ck;fo'+_0xc654b5(0x69b)+'ze:10'+'px;op'+'acity'+_0xc654b5(0xc66)),'.sk-s'+_0xc654b5(0x69e)+'{posi'+_0xc654b5(0x53b)+_0xc654b5(0x24a)+'ive;w'+_0xc654b5(0x4e7)+_0xc654b5(0x16e)+'heigh'+_0xc654b5(0xa72)+'x;bor'+'der:0'+';bord'+'er-ra'+_0xc654b5(0xc23)+_0xc654b5(0x6f4)+'backg'+_0xc654b5(0x1b5)+_0xc654b5(0xccc)+'(255,'+_0xc654b5(0x377)+'55,.0'+'7);cu'+_0xc654b5(0x188)+'point'+'er;fl'+'ex:no'+_0xc654b5(0x86e))+('.sk-s'+_0xc654b5(0x69e)+_0xc654b5(0x6dd)+_0xc654b5(0x77a)+_0xc654b5(0x829)+_0xc654b5(0xcb6)+_0xc654b5(0xbce)+'on:ab'+'solut'+_0xc654b5(0x28a)+_0xc654b5(0x464)+_0xc654b5(0xac6)+_0xc654b5(0x4cf)+'idth:'+_0xc654b5(0x413)+'eight'+_0xc654b5(0xc35)+_0xc654b5(0xac4)+_0xc654b5(0x775)+_0xc654b5(0x60e)+'0%;')+(_0xc654b5(0x3ce)+'round'+_0xc654b5(0xccc)+_0xc654b5(0x1ed)+_0xc654b5(0x377)+'55,.2'+'5);tr'+'ansit'+_0xc654b5(0x733)+'eft\x20.'+'2s,ba'+_0xc654b5(0x5b2)+_0xc654b5(0xacf)+_0xc654b5(0x3d0))+_0x2c575e[_0xc654b5(0xc9b)]+_0x2c575e['YUChI'],_0xc654b5(0x3f9)+_0xc654b5(0x181)+_0xc654b5(0x305)+_0xc654b5(0x692)+_0xc654b5(0x5fd)+_0xc654b5(0x3d8)+'tems:'+'cente'+'r;gap'+':8px;'+'}')+(_0xc654b5(0x87e)+_0xc654b5(0xb56)+_0xc654b5(0xc25)+_0xc654b5(0x29f)+_0xc654b5(0x9d2)+_0xc654b5(0x837)+_0xc654b5(0x4d2)+_0xc654b5(0xc93)+_0xc654b5(0x304)+':none'+_0xc654b5(0x56e)+'h:96p'+_0xc654b5(0xb7d)+_0xc654b5(0x35e)+_0xc654b5(0x9a0)+'ckgro'+'und:t'+_0xc654b5(0x2ec)+'arent'+';}'),_0x2c575e[_0xc654b5(0xbd3)]),_0xc654b5(0x3ce)+'round'+':line'+_0xc654b5(0x251)+'adien'+_0xc654b5(0xc95)+'6b9d,'+_0xc654b5(0x158)+_0xc654b5(0x727)+_0xc654b5(0x763)+_0xc654b5(0x801)+_0xc654b5(0x987)+'%)\x2010'+_0xc654b5(0x6ee)+_0xc654b5(0x2ba)+'at,rg'+_0xc654b5(0x3b3)+_0xc654b5(0x734)+',255,'+_0xc654b5(0x2ed)+'}'),_0xc654b5(0x87e)+_0xc654b5(0xb56)+_0xc654b5(0x88c)+'bkit-'+'slide'+'r-thu'+'mb{-w'+'ebkit'+_0xc654b5(0xbf6)+_0xc654b5(0x152)+_0xc654b5(0x1df)+_0xc654b5(0x1c9)+_0xc654b5(0x16f)+_0xc654b5(0xb7d)+_0xc654b5(0x36b)+'px;ma'+'rgin-'+'top:-'+_0xc654b5(0x3fd)+'order'+_0xc654b5(0x8e5)+_0xc654b5(0x631)+_0xc654b5(0x88a)+_0xc654b5(0xbb1)+'nd:#f'+_0xc654b5(0x63b)+';}'),_0x2c575e[_0xc654b5(0x48b)])+(_0xc654b5(0x391)+'ote{f'+_0xc654b5(0xa20)+_0xc654b5(0xc3a)+_0xc654b5(0x555)+_0xc654b5(0x920)+'rgba('+_0xc654b5(0xa5f)+_0xc654b5(0xb59)+_0xc654b5(0x37b)+';padd'+_0xc654b5(0x75f)+'px\x200;'+'white'+_0xc654b5(0x37e)+'e:pre'+'-wrap'+';}'),'.sk-n'+_0xc654b5(0x1bd)+_0xc654b5(0xa05)+'lor:#'+_0xc654b5(0xa89)+_0xc654b5(0x49f)),'.sk-b'+'tn{al'+_0xc654b5(0xca0)+_0xc654b5(0x6a6)+_0xc654b5(0x86a)+_0xc654b5(0xa62)+'borde'+'r:0;b'+'order'+_0xc654b5(0x8e5)+_0xc654b5(0xb53)+_0xc654b5(0xbd4)+'ding:'+_0xc654b5(0x204)+'6px;b'+'ackgr'+_0xc654b5(0x3e4)+_0xc654b5(0x158)+'9d;co'+'lor:#'+_0xc654b5(0x674))+_0x2c575e['tOMRh'],_0x2c575e[_0xc654b5(0x537)])+_0x2c575e[_0xc654b5(0x69f)],_0xc654b5(0xb7e)+_0xc654b5(0x938)+'tal{p'+'ositi'+_0xc654b5(0x968)+_0xc654b5(0x2d9)+_0xc654b5(0x53c)+'px;ri'+_0xc654b5(0x344)+_0xc654b5(0xc0c)+_0xc654b5(0x962)+'x:214'+_0xc654b5(0x4ac)+'46;cu'+'rsor:'+'point'+_0xc654b5(0x8f6)+_0xc654b5(0x894)+'6px;h'+_0xc654b5(0x6cf)+_0xc654b5(0x7fa)+_0xc654b5(0x786)+_0xc654b5(0xbfe)+'28;'),_0x2c575e[_0xc654b5(0xc1f)]),_0x4bc81c=_0x2c575e['DRUBr'](_0xc654b5(0x98d)+_0xc654b5(0x945)+_0xc654b5(0x3ec)+'\x200\x2024'+_0xc654b5(0x258)+_0xc654b5(0xb22)+_0xc654b5(0x174)+'12\x2021'+'c-1.5'+_0xc654b5(0x343)+'4-4.5'+'-4-7.'+_0xc654b5(0x792)+_0xc654b5(0x7e4)+'8-4.5'+'\x204-4.'+_0xc654b5(0xb01)+'\x204\x204.'+_0xc654b5(0x79b)+_0xc654b5(0x4fa)+'5-4\x207'+'.5z\x22\x20',_0xc654b5(0x309)+_0xc654b5(0x5c1)+_0xc654b5(0x787)+'oke=\x22'+_0xc654b5(0x158)+'9d\x22\x20s'+_0xc654b5(0x20b)+'-widt'+_0xc654b5(0x8cb)+_0xc654b5(0x8b8)+_0xc654b5(0x1d8)+'necap'+_0xc654b5(0x39c)+_0xc654b5(0x3a1)+'troke'+'-line'+_0xc654b5(0xcde)+'\x22roun'+_0xc654b5(0x851))+('<circ'+_0xc654b5(0x22f)+'=\x2212\x22'+'\x20cy=\x22'+_0xc654b5(0xbfa)+_0xc654b5(0x8ec)+_0xc654b5(0xa9f)+_0xc654b5(0x9a2)+_0xc654b5(0x63b)+_0xc654b5(0xb8e)+_0xc654b5(0x1a0)),_0x47c1ac=_0xc654b5(0x98d)+_0xc654b5(0x52d)+_0xc654b5(0x73d)+_0xc654b5(0x164)+'svg\x22\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+_0xc654b5(0xb22)+_0xc654b5(0x174)+'12\x2021'+_0xc654b5(0xb7f)+'-2.5-'+_0xc654b5(0x9c0)+_0xc654b5(0x3a6)+_0xc654b5(0x792)+_0xc654b5(0x7e4)+'8-4.5'+_0xc654b5(0x942)+'5s4\x202'+_0xc654b5(0x1b2)+'5c0\x203'+'-2.5\x20'+_0xc654b5(0x848)+'.5z\x22\x20'+('fill='+'\x22none'+_0xc654b5(0x787)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0xc654b5(0x20b)+_0xc654b5(0x743)+'h=\x221.'+'6\x22\x20st'+_0xc654b5(0x3ba)+'linec'+_0xc654b5(0x84a)+'ound\x22'+'\x20stro'+'ke-li'+_0xc654b5(0x859)+'n=\x22ro'+_0xc654b5(0xa5a)+'>')+('<circ'+_0xc654b5(0x22f)+_0xc654b5(0x75d)+_0xc654b5(0x310)+'10\x22\x20r'+_0xc654b5(0x790)+'\x22\x20fil'+_0xc654b5(0x9a2)+_0xc654b5(0x63b)+'\x22/></'+'svg>');function _0xc19fa4(_0x38e7b5,_0x3afd89,_0x38dce5){var _0x21d6c9=_0xc654b5,_0x4c8f38=document[_0x21d6c9(0x7ec)+_0x21d6c9(0x83e)+_0x21d6c9(0x614)](_0x38e7b5);if(_0x3afd89)_0x4c8f38[_0x21d6c9(0x52d)+_0x21d6c9(0xcd0)]=_0x3afd89;if(_0x2c575e[_0x21d6c9(0xcca)](_0x38dce5,null))_0x4c8f38[_0x21d6c9(0xbc8)+_0x21d6c9(0x41f)]=_0x38dce5;return _0x4c8f38;}function _0x30c6bb(_0x31d95f,_0x502305){var _0x3472b5=_0xc654b5,_0x2f9c90=_0x2c575e[_0x3472b5(0xaf7)](_0xc19fa4,_0x2c575e[_0x3472b5(0xab5)],_0x2c575e['EcJRA'](_0x2c575e['fKHGV'],_0x502305?'\x20on':'')),_0x5e6b2a=_0xc19fa4(_0x3472b5(0x624),_0x2c575e[_0x3472b5(0xbde)]),_0x2eae38=_0x2c575e['kJBFU'](_0xc19fa4,_0x3472b5(0x624),'sk-ca'+_0x3472b5(0x19f)+_0x3472b5(0x523),_0x2c575e['CRnYb']+_0x31d95f+_0x2c575e[_0x3472b5(0xc83)]);_0x5e6b2a[_0x3472b5(0x658)+'dChil'+'d'](_0x2eae38);var _0x684c03=_0x2c575e[_0x3472b5(0x9ed)](_0xc19fa4,'div','sk-mb'+_0x3472b5(0x46c));return _0x2f9c90['appen'+_0x3472b5(0x61d)+'d'](_0x5e6b2a),_0x2f9c90[_0x3472b5(0x658)+_0x3472b5(0x61d)+'d'](_0x684c03),_0x2f9c90['body']=_0x684c03,_0x2f9c90['head']=_0x2eae38,_0x2f9c90;}function _0x1a28d9(_0x2848fa,_0x586324){var _0x476b92=_0xc654b5,_0x53a305={'ifWgf':_0x2c575e[_0x476b92(0x8e6)]};if(_0x476b92(0x440)===_0x476b92(0xa44))_0x2e60ab();else{var _0x399799=_0xc19fa4('butto'+'n','sk-sw'+'itch');_0x399799[_0x476b92(0x86f)]=_0x476b92(0xb66)+'n';var _0x1543bb=function(){var _0x97d4ec=_0x476b92;_0x399799['setAt'+_0x97d4ec(0x6f9)+'te'](_0x2c575e['YAQDX'],_0x2848fa()?_0x2c575e['FCqlw']:_0x2c575e[_0x97d4ec(0x7ff)]);};return _0x399799[_0x476b92(0x5f0)+'ck']=function(){var _0x687bee=_0x476b92;_0x687bee(0x455)!==_0x53a305[_0x687bee(0x276)]?(_0x586324(!_0x2848fa()),_0x1543bb()):(_0x3dcd2f={'rawA':_0xe295aa['setLa'+'st'],'rawB':_0x576a96['setB'],'hits':_0x353cff[_0x687bee(0x6c3)+_0x687bee(0x45f)],'name':_0x43e7f6},_0x1fa6ff=_0x499526[_0x687bee(0x6c3)+_0x687bee(0x45f)]);},_0x1543bb(),_0x399799['sync']=_0x1543bb,_0x3e52ff[_0x476b92(0x708)]['push'](_0x1543bb),_0x399799;}}function _0x5ccee1(_0x811aeb,_0x5a2186,_0xaccd12,_0xba41c,_0x4d8fb5){var _0x56413a=_0xc654b5,_0x6fa08b=(_0x56413a(0xca5)+'0|14|'+_0x56413a(0x5b1)+_0x56413a(0xbcf)+'2|16|'+'5|9|8'+'|10|1'+'1|1|1'+_0x56413a(0x5e3))['split']('|'),_0x16467e=0x30b*0x4+-0x1af1+0x13*0xc7;while(!![]){switch(_0x6fa08b[_0x16467e++]){case'0':var _0x1b3df1=document['creat'+_0x56413a(0x83e)+_0x56413a(0x614)](_0x2c575e['gMfuw']);continue;case'1':_0x2fc5cd();continue;case'2':_0x1b3df1[_0x56413a(0x54c)]=_0x2c575e[_0x56413a(0x687)](String,_0x5a2186);continue;case'3':_0x1b3df1[_0x56413a(0x52d)+_0x56413a(0xcd0)]=_0x56413a(0x9ee)+_0x56413a(0x557);continue;case'4':var _0x1c11d9=_0x2c575e[_0x56413a(0x5b7)](_0xc19fa4,'div',_0x2c575e['QRdfr']);continue;case'5':_0x1b3df1['oninp'+'ut']=function(){var _0x463125=_0x56413a;_0x44766b['juNjE'](_0x4d8fb5,_0x44766b[_0x463125(0x1d2)](parseFloat,_0x1b3df1[_0x463125(0x240)])||_0x811aeb),_0x2fc5cd();};continue;case'6':return _0x1c11d9;case'7':_0x1b3df1[_0x56413a(0xbc2)]=String(_0x811aeb);continue;case'8':_0x1c11d9[_0x56413a(0x658)+_0x56413a(0x61d)+'d'](_0x3bdccf);continue;case'9':_0x1c11d9[_0x56413a(0x658)+_0x56413a(0x61d)+'d'](_0x1b3df1);continue;case'10':_0x1c11d9[_0x56413a(0x9b5)]=_0x2fc5cd;continue;case'11':_0x1c11d9[_0x56413a(0x1af)]=_0x1b3df1;continue;case'12':var _0x3bdccf=_0xc19fa4('span',_0x2c575e['FbMpV']);continue;case'13':_0x3e52ff[_0x56413a(0x708)][_0x56413a(0x1e1)](_0x2fc5cd);continue;case'14':_0x1b3df1['type']='range';continue;case'15':var _0x44766b={'juNjE':function(_0x4777f3,_0x1f1031){return _0x4777f3(_0x1f1031);},'dugNd':function(_0x5b06c8,_0x4fbab7){return _0x5b06c8(_0x4fbab7);}};continue;case'16':var _0x2fc5cd=function(){var _0xf9bff8=_0x56413a,_0x5dc137=_0xba41c();_0x1b3df1[_0xf9bff8(0x240)]=String(_0x5dc137),_0x3bdccf['textC'+_0xf9bff8(0x19b)+'t']=_0x2c575e['vggne'](_0xaccd12<-0x2b6*-0x6+0x5*0x464+-0x43f*0x9?_0x5dc137[_0xf9bff8(0x297)+'ed'](-0x30f*-0x5+-0x2ea*-0x1+-0x1d2*0xa):_0x2c575e[_0xf9bff8(0x687)](String,Math[_0xf9bff8(0x1b5)](_0x5dc137)),_0x1b3df1[_0xf9bff8(0x43c)+'et']['unit']||'');var _0x15823e=_0x2c575e['CWyzW'](_0x2c575e['uoxeK'](_0x5dc137-_0x811aeb,_0x2c575e[_0xf9bff8(0xcc5)](_0x5a2186,_0x811aeb)),0x2304+-0x1b25+0x5*-0x17f);_0x1b3df1[_0xf9bff8(0x7fb)][_0xf9bff8(0x31a)+'opert'+'y']('--p',_0x2c575e[_0xf9bff8(0x8cf)](_0x15823e,'%'));};continue;case'17':_0x1b3df1[_0x56413a(0x730)]=String(_0xaccd12);continue;}break;}}function _0xeea745(_0x162677,_0x3432e6){var _0x30edbd=_0xc654b5,_0x55412d=_0xc19fa4(_0x2c575e['lqwMP'],_0x2c575e[_0x30edbd(0xc8d)]),_0x42add3=_0xc19fa4('div',_0x30edbd(0x7e5)+_0x30edbd(0x1f2),_0x2c575e[_0x30edbd(0x15b)](_0x162677,_0x3432e6?_0x2c575e['RuTYk']('<span'+_0x30edbd(0x4e2)+_0x30edbd(0x423)+_0x30edbd(0x87c)+'\x27>'+_0x3432e6,_0x30edbd(0x908)+'n>'):''));return _0x55412d[_0x30edbd(0x658)+_0x30edbd(0x61d)+'d'](_0x42add3),_0x55412d;}function _0xc4bd95(_0x5a12be,_0x4fe1d9,_0x5a53f3,_0x4b3121){var _0x34b833=_0xc654b5,_0x3b196d={'LpXwy':function(_0x2199c2,_0x24281f){return _0x2199c2(_0x24281f);},'VKqkc':function(_0x18c62d){var _0xe8201d=_0x3c88;return _0x2c575e[_0xe8201d(0x36a)](_0x18c62d);},'CAAAL':function(_0x27a14e,_0x1d9991,_0x452e31){var _0x507ed9=_0x3c88;return _0x2c575e[_0x507ed9(0xa7b)](_0x27a14e,_0x1d9991,_0x452e31);},'CUNJL':_0x34b833(0x1af),'ZpgJD':_0x2c575e[_0x34b833(0x178)],'kIclO':_0x2c575e['nCsxL']},_0xfc5ed9=_0x5a12be&&_0x5a12be[_0x34b833(0x981)+'y']&&_0x5a12be[_0x34b833(0x981)+'y'][_0x4fe1d9];if(!_0xfc5ed9)return'-';for(var _0x193691=-0xd79*-0x2+-0x1*0x840+-0x12b2;_0x2c575e[_0x34b833(0x871)](_0x193691,_0xfc5ed9['lengt'+'h']);_0x193691++){if(_0x2c575e[_0x34b833(0x341)](_0x2c575e['NAVWw'],_0x2c575e[_0x34b833(0x681)])){if(_0xfc5ed9[_0x193691]['o']===_0x5a53f3){if(_0x4b3121==='v3'){var _0x2e90c2=_0xfc5ed9[_0x193691]['xyz']||[_0xfc5ed9[_0x193691]['v'],-0xcd3+-0x2*-0x12b5+-0x1897,0x263*-0x9+-0x1*0x23f4+0x396f*0x1];return _0x2e90c2['map'](function(_0x2abdd5){var _0x352581=_0x34b833;return _0x2c575e['LvnxZ'](Math[_0x352581(0x1b5)](_0x2abdd5*(0x1afb+-0x101b+0xa7c*-0x1)),0x2c0*-0x8+0x154d+0x117);})[_0x34b833(0xcb1)]('\x20\x20');}var _0x210090=_0xfc5ed9[_0x193691]['v'];return _0x2c575e[_0x34b833(0x99f)](typeof _0x210090,_0x2c575e[_0x34b833(0x9df)])?Math['round'](_0x210090*(-0x3*-0x4e9+-0x121e+0x74b))/(-0x1d0b+0x52*-0x14+-0x9b*-0x41):String(_0x210090);}}else{var _0x416924={'bVwsj':function(_0x1a7454){var _0x1d11d5=_0x34b833;return _0x3b196d[_0x1d11d5(0xadf)](_0x1a7454);},'wDbWq':function(_0x10941b,_0x5c548f){return _0x10941b<_0x5c548f;},'lPwin':function(_0x4b6790,_0x2951e4){return _0x4b6790/_0x2951e4;},'oCbFJ':function(_0x441303,_0x138bc9){return _0x441303+_0x138bc9;}},_0x5c8fb5=_0x3b196d[_0x34b833(0xcc0)](_0xce857c,_0x34b833(0x624),_0x34b833(0x93d)+'nge'),_0x315294=_0x390f56['creat'+_0x34b833(0x83e)+_0x34b833(0x614)](_0x3b196d['CUNJL']);_0x315294[_0x34b833(0x86f)]=_0x3b196d[_0x34b833(0x238)],_0x315294[_0x34b833(0x52d)+_0x34b833(0xcd0)]=_0x34b833(0x9ee)+'ider',_0x315294['min']=_0x3b196d[_0x34b833(0x75b)](_0x454904,_0x5edd65),_0x315294[_0x34b833(0x54c)]=_0x8d0fa6(_0x305216),_0x315294[_0x34b833(0x730)]=_0x399a1e(_0x4b8045);var _0x424e4b=_0x119a1f(_0x3b196d[_0x34b833(0x9d4)],_0x34b833(0xc2e)+'l'),_0xd3d852=function(){var _0x4fd87b=_0x34b833,_0x5acefb=_0x416924[_0x4fd87b(0xb96)](_0x32ed1b);_0x315294[_0x4fd87b(0x240)]=_0x4e77c7(_0x5acefb),_0x424e4b[_0x4fd87b(0xb42)+'onten'+'t']=(_0x416924['wDbWq'](_0x3501cd,0x16de+0x2150+-0x382d)?_0x5acefb[_0x4fd87b(0x297)+'ed'](0x20c5*-0x1+0x4f4+0x1bd2):_0x488c90(_0x2c79a7[_0x4fd87b(0x1b5)](_0x5acefb)))+(_0x315294[_0x4fd87b(0x43c)+'et'][_0x4fd87b(0x89a)]||'');var _0x24c383=_0x416924['lPwin'](_0x5acefb-_0x300737,_0x386018-_0x236f17)*(-0x18e2+-0x15d5*0x1+0x2f1b);_0x315294['style'][_0x4fd87b(0x31a)+_0x4fd87b(0x862)+'y'](_0x4fd87b(0x4e8),_0x416924['oCbFJ'](_0x24c383,'%'));};return _0x315294[_0x34b833(0x8d3)+'ut']=function(){var _0x556bb2=_0x34b833;_0x3b196d['LpXwy'](_0x404e22,_0x3b196d[_0x556bb2(0x75b)](_0xc0a045,_0x315294[_0x556bb2(0x240)])||_0x59bd79),_0x3b196d[_0x556bb2(0xadf)](_0xd3d852);},_0x5c8fb5[_0x34b833(0x658)+'dChil'+'d'](_0x315294),_0x5c8fb5[_0x34b833(0x658)+_0x34b833(0x61d)+'d'](_0x424e4b),_0x5c8fb5[_0x34b833(0x9b5)]=_0xd3d852,_0x5c8fb5['input']=_0x315294,_0xd3d852(),_0xf9ce73[_0x34b833(0x708)][_0x34b833(0x1e1)](_0xd3d852),_0x5c8fb5;}}return'-';}function _0x442b3a(_0x1e656e){var _0x10e540=_0xc654b5,_0xb7276b={'CVZsY':function(_0x277b9c,_0x46ccfd){return _0x277b9c!==_0x46ccfd;},'YISPa':_0x2c575e['hdVER'],'NwkUI':_0x2c575e['LkZpH'],'ipCvv':function(_0x352385,_0x2c6ab7,_0x12bcdf){return _0x352385(_0x2c6ab7,_0x12bcdf);},'dDhzv':function(_0x29e4f6,_0x53b5b4){var _0x7e9412=_0x3c88;return _0x2c575e[_0x7e9412(0x1fc)](_0x29e4f6,_0x53b5b4);},'edxkt':_0x10e540(0xb95),'URiZU':_0x2c575e[_0x10e540(0xce2)],'yugmb':_0x2c575e[_0x10e540(0xc44)],'pvzNM':_0x2c575e['uinlR'],'qLHHV':function(_0x3b4c5d,_0x37f9ef){return _0x3b4c5d(_0x37f9ef);},'kSGlN':_0x10e540(0x655),'EBfXR':_0x10e540(0x9eb),'tKejg':_0x2c575e['rGMRa'],'sbyEY':_0x10e540(0x30f)+'t','wGiUx':'speed','hwfCw':function(_0x514b50,_0x3fa7c3){var _0xdf0571=_0x10e540;return _0x2c575e[_0xdf0571(0xc87)](_0x514b50,_0x3fa7c3);},'beGvH':_0x10e540(0xa2a),'wWgDh':'#saku'+_0x10e540(0x1ba)+'-v2{a'+'ll:in'+_0x10e540(0x21d)+'}','BTTBf':'nsEzz','dJYlD':function(_0x2b0381){var _0x9036c9=_0x10e540;return _0x2c575e[_0x9036c9(0x615)](_0x2b0381);},'MRAvY':function(_0xd26749){var _0x525f4e=_0x10e540;return _0x2c575e[_0x525f4e(0x782)](_0xd26749);},'tYCLC':function(_0xe71d6a,_0x89c296){return _0x2c575e['fmIgP'](_0xe71d6a,_0x89c296);},'MPvpq':_0x2c575e[_0x10e540(0x9df)],'JiTFI':function(_0x5dd4f0,_0x2a734a){var _0x30cabb=_0x10e540;return _0x2c575e[_0x30cabb(0xa64)](_0x5dd4f0,_0x2a734a);},'ebYdE':function(_0x36ee2c,_0x498e44){return _0x36ee2c!==_0x498e44;},'CxDLX':function(_0x11d7d4,_0x3f4447){return _0x11d7d4/_0x3f4447;}},_0x5a21dd=_0xdc40bb,_0x45ca81=[],_0x4d1e5e;if(_0x1e656e===_0x10e540(0x1bc)+'t'){var _0x35bacf=_0x30c6bb(_0x10e540(0x422)+_0x10e540(0x820),_0x4f804c['on']),_0xbbd231=_0xc19fa4(_0x2c575e[_0x10e540(0xab5)],_0x10e540(0x850)+'esc',_0x4f804c['on']?_0x2c575e['zAwOk'](_0x2c575e[_0x10e540(0xa1d)](_0x2c575e[_0x10e540(0xaaa)]('x',_0x4f804c[_0x10e540(0x7b7)+'r'][_0x10e540(0x297)+'ed'](0x12b3*-0x2+0x247c+0x1*0xeb))+_0x2c575e[_0x10e540(0x92d)],_0x214f1e['lengt'+'h']),_0x10e540(0x427)+_0x10e540(0x322))+_0x42255+(_0x10e540(0x8b1)+'es'):_0x10e540(0x7e9)+'plies'+_0x10e540(0x1b0)+_0x10e540(0x2da)+'speed'+_0x10e540(0x427)+_0x10e540(0x2ad)+_0x10e540(0x846)+_0x10e540(0x6cf)+_0x10e540(0x31f)+_0x10e540(0x27a)+'\x20jump'+_0x10e540(0x482)+'refus'+_0x10e540(0x722)),_0x5c8bed=_0xeea745(_0x2c575e[_0x10e540(0x4bf)]);_0x5c8bed[_0x10e540(0x658)+'dChil'+'d'](_0x1a28d9(function(){var _0x479ed1=_0x10e540;return _0xb7276b['CVZsY'](_0xb7276b[_0x479ed1(0x83c)],'wBdtC')?_0x4f804c['on']:_0x456eb2['on'];},function(_0x40ad3e){var _0x42464b=_0x10e540;if(_0x42464b(0x4cc)!=='hYUKe')_0xb7276b[_0x42464b(0x3ff)](_0x5b68a7,_0x40ad3e,_0x4f804c[_0x42464b(0x7b7)+'r']),_0xbbd231[_0x42464b(0xb42)+_0x42464b(0x19b)+'t']=_0x40ad3e?_0xb7276b[_0x42464b(0x810)](_0xb7276b['dDhzv']('x'+_0x4f804c[_0x42464b(0x7b7)+'r'][_0x42464b(0x297)+'ed'](0xceb*-0x1+-0x1907+-0x797*-0x5)+_0xb7276b['edxkt']+_0x214f1e['lengt'+'h'],_0xb7276b['URiZU']),_0x42255)+_0xb7276b[_0x42464b(0x34a)]:_0xb7276b[_0x42464b(0x519)];else{var _0x40279f=_0xc9068d&&_0x2a05c6['data'];if(!_0x40279f||_0x40279f['__sak'+'ura']!==_0x3eac69||_0x40279f[_0x42464b(0x74d)]!==_0xb7276b[_0x42464b(0x20f)])return;_0xb7276b[_0x42464b(0x3ff)](_0x4850ff,_0x40279f['cmd'],_0x40279f[_0x42464b(0x4a8)]);}})),_0x35bacf['body']['appen'+'dChil'+'d'](_0xbbd231),_0x35bacf[_0x10e540(0x44e)]['appen'+_0x10e540(0x61d)+'d'](_0x5c8bed);var _0x16305e=_0x5ccee1(-0x382+-0x13d*-0x3+0x4*-0xd,0x8ab+0x1ac9+-0xc1*0x2f,-0xa*-0x211+-0x10be+-0x3ec+0.5,function(){var _0x38b3c4=_0x10e540;return _0x4f804c[_0x38b3c4(0x7b7)+'r'];},function(_0x5b9033){var _0x2d64fd=_0x10e540;if(_0xb7276b[_0x2d64fd(0x4d1)]!==_0xb7276b['EBfXR'])_0x5b68a7(_0x4f804c['on'],_0x5b9033);else{_0xb7276b[_0x2d64fd(0x643)](_0xebac9d,![]),_0x4407ce(_0x339022,0xabe+0x22a*-0xc+0x1066*0x1);return;}});_0x16305e['input']['datas'+'et'][_0x10e540(0x89a)]='x';var _0x11063b=_0xeea745(_0x2c575e[_0x10e540(0x946)],'F8\x20/\x20'+_0x10e540(0x6ca)+'so\x20st'+'ep\x20th'+'is');_0x11063b['appen'+_0x10e540(0x61d)+'d'](_0x16305e),_0x35bacf[_0x10e540(0x44e)]['appen'+_0x10e540(0x61d)+'d'](_0x11063b);if(_0x1915ae[_0x10e540(0xb90)+'h']){var _0x3fe981=_0x2c575e[_0x10e540(0xb40)](_0xc19fa4,_0x2c575e['lqwMP'],_0x2c575e['JuWKO'],'Refus'+_0x10e540(0x3b9)+_0x1915ae['slice'](-0x6*-0x222+0x290*0x1+-0xf5c,0xa5c+-0x1*-0xa9+0x3ab*-0x3)[_0x10e540(0x7e0)](function(_0x433710){var _0x5aef56=_0x10e540;if(_0x2c575e[_0x5aef56(0x8cc)]===_0x2c575e[_0x5aef56(0x469)])try{_0x5c4c50[_0x5aef56(0xb42)+_0x5aef56(0x19b)+'t']=_0xb7276b['qLHHV'](_0x2694e8,_0xf64df8);}catch(_0x453357){_0x29ceea[_0x5aef56(0xb42)+_0x5aef56(0x19b)+'t']=_0x1e60d2[_0x5aef56(0x1ee)+_0x5aef56(0x1bf)](_0x59bf8b,null,-0xbd2+-0x166d+0x2240);}else return _0x2c575e[_0x5aef56(0x484)]('0x',_0x2c575e[_0x5aef56(0xbf7)](_0x433710['o'],-0x1*0x14c9+-0x1*-0x13bf+-0x26*-0x7)?'?':_0x433710['o']['toStr'+_0x5aef56(0xb19)](0x2693*-0x1+0x270*-0xc+0x43e3))+'\x20('+_0x433710['why']+')';})[_0x10e540(0xcb1)]('\x20\x20'));_0x35bacf['body'][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x3fe981);}_0x45ca81[_0x10e540(0x1e1)](_0x35bacf);var _0x2242b1=_0x30c6bb(_0x2c575e[_0x10e540(0x176)]),_0x3d561c=_0xc19fa4('butto'+'n',_0x2c575e['aqdRB'],'Snaps'+_0x10e540(0x777)+_0x10e540(0x1e8)+'9)');_0x3d561c['type']='butto'+'n',_0x3d561c[_0x10e540(0x5f0)+'ck']=function(){var _0x5ba6cb=_0x10e540,_0xe2f740={'ZuMEX':_0x5ba6cb(0x9cf)+'|1|8|'+'0|7|5'+_0x5ba6cb(0x705)+'10','XBJuO':function(_0x247d49,_0x342e4e){return _0x247d49(_0x342e4e);},'EIucT':function(_0x235331,_0x58d156){var _0x532f4e=_0x5ba6cb;return _0xb7276b[_0x532f4e(0x810)](_0x235331,_0x58d156);},'yMeHG':function(_0x3f839e,_0x8c7c5d){return _0x3f839e+_0x8c7c5d;},'BriZA':_0xb7276b['tKejg'],'FSsNz':function(_0x202537,_0x16a778,_0x35a927){return _0x202537(_0x16a778,_0x35a927);},'UfmKt':_0xb7276b[_0x5ba6cb(0x1cf)],'kHXcw':function(_0x5a9981,_0x36577c){return _0x5a9981===_0x36577c;},'UseQH':_0xb7276b['wGiUx']};if(_0xb7276b['hwfCw'](_0x5ba6cb(0x6b8),_0xb7276b[_0x5ba6cb(0x7a6)]))_0x315fa9('snaps'+'hot');else{var _0x3e7ded=_0xe2f740[_0x5ba6cb(0xb86)]['split']('|'),_0x53c76c=-0x70b*-0x1+-0xc*0x327+-0x25*-0xd5;while(!![]){switch(_0x3e7ded[_0x53c76c++]){case'0':for(var _0x255e6e in _0x26928b)_0x15698b[_0x255e6e]=_0x26928b[_0x255e6e];continue;case'1':var _0x15698b=_0xe2f740['XBJuO'](_0x3adad8,_0x725b4);continue;case'2':if(_0x47cd12!==_0x5ba6cb(0x9f2)+_0x5ba6cb(0x7d7))return;continue;case'3':_0x371988=_0x15698b;continue;case'4':var _0x725b4=_0x12946b();continue;case'5':_0x20e9ce=[];continue;case'6':for(var _0x576755 in _0x15698b){var _0x240ee1=_0x189fb8[_0x576755],_0x143cae=_0x15698b[_0x576755];if(_0x240ee1!==_0x143cae)_0x2501cb['push'](_0xe2f740[_0x5ba6cb(0xc0f)](_0xe2f740['yMeHG'](_0x576755,':\x20')+_0x240ee1,_0xe2f740[_0x5ba6cb(0x7f0)])+_0x143cae);}continue;case'7':if(!_0x2b577b){_0x5a4b7d=_0x15698b,_0x2111f8=[],_0xe2f740[_0x5ba6cb(0x33a)](_0x49590a,_0xe2f740[_0x5ba6cb(0x7f4)],{'report':_0x4cb828()});return;}continue;case'8':var _0x26928b=_0x420ddd();continue;case'9':if(_0xe2f740[_0x5ba6cb(0x709)](_0x1a6936,_0xe2f740[_0x5ba6cb(0xac2)])){_0xb340c6(_0x2565c0&&typeof _0x461fcf['on']==='boole'+'an'?_0x545451['on']:_0x5af8d7['on'],_0x4c0727&&typeof _0x3afd81['facto'+'r']===_0x5ba6cb(0x973)+'r'?_0x12e31a[_0x5ba6cb(0x7b7)+'r']:_0x144c86[_0x5ba6cb(0x7b7)+'r']);return;}continue;case'10':_0xe2f740['FSsNz'](_0x2fc8bd,'repor'+'t',{'report':_0x2b32a0()});continue;}break;}}},_0x2242b1['body'][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x2c575e[_0x10e540(0x618)](_0xc19fa4,_0x10e540(0x624),_0x10e540(0x850)+_0x10e540(0x6b6),_0x2c575e[_0x10e540(0x8bc)])),_0x2242b1[_0x10e540(0x44e)]['appen'+'dChil'+'d'](_0x3d561c),_0x45ca81['push'](_0x2242b1);}if(_0x1e656e==='visua'+'ls'){var _0x5e824b=_0x2c575e[_0x10e540(0x956)](_0x30c6bb,'Radar',_0x5b3c46['on']),_0x4735f7=_0xeea745('Enabl'+'ed');_0x4735f7[_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x1a28d9(function(){return _0x5b3c46['on'];},function(_0x25262f){var _0x3ca4c5=_0x10e540;if(_0xb7276b['hwfCw'](_0x3ca4c5(0x31d),'OpnkR'))_0xb7276b[_0x3ca4c5(0x3ff)](_0x263e6c,_0x25262f,_0x5b3c46['boxes']);else try{_0x49af30['syncs'][_0x545719]();}catch(_0x5c2ed3){}})),_0x5e824b['body'][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x2c575e[_0x10e540(0x3a0)](_0xc19fa4,'div',_0x2c575e['bjEQy'],_0x10e540(0x9b4)+'-spac'+_0x10e540(0xc1c)+'imap,'+'\x20top-'+'right'+'.\x20Nee'+_0x10e540(0x2ad)+'ly\x20po'+_0x10e540(0x827)+_0x10e540(0x685))),_0x5e824b['body'][_0x10e540(0x658)+'dChil'+'d'](_0x4735f7);var _0x35cdb0=_0x2c575e['hiIPL'](_0x5ccee1,0x460*0x2+-0x2600+-0x8*-0x3ad,-0x1*-0xc61+0x1baa+-0x276b,0x4f9*-0x5+0x1*0x11b6+0x731*0x1,function(){var _0x2b5ef0=_0x10e540,_0x121c02={'fZkGA':'style','LBSOd':_0xb7276b[_0x2b5ef0(0x627)]};if('BYRMv'==='NhTUM'){var _0x914aab=_0x494b8c['creat'+_0x2b5ef0(0x83e)+'ent'](_0x121c02['fZkGA']);_0x914aab['id']=_0x2b5ef0(0x72f)+_0x2b5ef0(0x6d9)+'v2-cs'+'s',_0x914aab['textC'+_0x2b5ef0(0x19b)+'t']=_0x121c02[_0x2b5ef0(0x54d)],(_0x217f54[_0x2b5ef0(0x196)]||_0x100364[_0x2b5ef0(0x70f)+_0x2b5ef0(0x97b)+'ement'])[_0x2b5ef0(0x658)+_0x2b5ef0(0x61d)+'d'](_0x914aab);}else return _0x5b3c46['span'];},function(_0x3efdb8){var _0x31dc01=_0x10e540,_0x141795={'zYCBt':_0x31dc01(0x973)+'r'};if(_0xb7276b[_0x31dc01(0x6e6)]==='nsEzz')_0x5b3c46[_0x31dc01(0x383)]=_0x3efdb8;else{var _0x49b7b4=_0x2dea63[_0x31dc01(0x3b2)+'em'](_0x4e289e);if(!_0x49b7b4)return;var _0x261c58=_0x3aab80[_0x31dc01(0x1a8)](_0x49b7b4);if(_0x261c58&&typeof _0x261c58['x']===_0x141795['zYCBt']&&typeof _0x261c58['y']===_0x31dc01(0x973)+'r')_0x2b1137[_0x31dc01(0xb24)]=_0x261c58;}});_0x35cdb0[_0x10e540(0x1af)][_0x10e540(0x43c)+'et']['unit']='m';var _0x2376e9=_0xeea745(_0x2c575e[_0x10e540(0x213)],'world'+'\x20unit'+'s\x20acr'+'oss\x20t'+_0x10e540(0x52e)+_0x10e540(0xad5));_0x2376e9['appen'+_0x10e540(0x61d)+'d'](_0x35cdb0),_0x5e824b[_0x10e540(0x44e)][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x2376e9),_0x45ca81[_0x10e540(0x1e1)](_0x5e824b);var _0x57a9b5=_0x30c6bb(_0x2c575e['Afqbs'],_0x5b3c46['boxes']),_0x863bc4=_0x2c575e['uecBh'](_0xeea745,_0x2c575e[_0x10e540(0x4bf)]);_0x863bc4[_0x10e540(0x658)+'dChil'+'d'](_0x1a28d9(function(){var _0xebd5c=_0x10e540;return _0x5b3c46[_0xebd5c(0x671)];},function(_0x42ab4c){var _0x4b88fe=_0x10e540;if(_0x42ab4c&&!_0xb7276b[_0x4b88fe(0x7c9)](_0x4e8782)){_0xb7276b['MRAvY'](_0x252d53);return;}_0x263e6c(!![],_0x42ab4c);}));var _0x4cf0dc=_0x5a21dd&&_0x5a21dd['angle'+'s'];_0x57a9b5['body']['appen'+_0x10e540(0x61d)+'d'](_0x2c575e['fVRGL'](_0xc19fa4,_0x10e540(0x624),_0x10e540(0x850)+'esc',_0x4cf0dc&&!_0x4cf0dc[_0x10e540(0xb8a)+'ified']?_0x2c575e[_0x10e540(0x849)]('Not\x20d'+_0x10e540(0x4b3)+_0x10e540(0xca4)+(_0x4cf0dc[_0x10e540(0xabd)]||_0x2c575e['cKVGv']),_0x2c575e[_0x10e540(0xb05)]):_0x4cf0dc&&!_0x4cf0dc[_0x10e540(0x80f)+'ne']?_0x2c575e['apXnm']('Field'+'\x20of\x20v'+_0x10e540(0xade)+'s\x20',Math['round'](_0x4cf0dc[_0x10e540(0x8bd)]))+(_0x10e540(0x5a7)+'tside'+_0x10e540(0x802)+'sane\x20'+'band.'+_0x10e540(0x3d2)+_0x10e540(0x217)+_0x10e540(0xb2f)+'.'):_0x10e540(0x497)+'n-spa'+'ce\x20bo'+'xes.\x20'+'The\x20f'+_0x10e540(0x771)+_0x10e540(0x14c)+_0x10e540(0x93a)+_0x10e540(0x8d4)+_0x10e540(0x4c5)+'ad\x20fr'+'om\x20th'+'is\x20bu'+'ild,\x20'+_0x10e540(0x361)+'\x20is\x20f'+_0x10e540(0xb71)+'\x20by\x20e'+_0x10e540(0x5d8))),_0x57a9b5[_0x10e540(0x44e)]['appen'+_0x10e540(0x61d)+'d'](_0x863bc4);var _0x42779a=_0x2c575e[_0x10e540(0x16a)](_0x5ccee1,-0xb09+-0x86*-0x2b+-0x89*0x15,0x1cd*-0x13+0x386+0x1f33,-0x1528+0x93b+-0x263*-0x5,function(){var _0x3d1139=_0x10e540;return _0x521593[_0x3d1139(0x8bd)];},function(_0x58e54d){var _0x3754d5=_0x10e540;_0x521593[_0x3754d5(0x8bd)]=_0x58e54d,_0xedec9c();});_0x42779a['input']['datas'+'et']['unit']='°';var _0x61a2cd=_0x2c575e[_0x10e540(0x239)](_0xeea745,_0x2c575e[_0x10e540(0x961)],_0x10e540(0x41b)+'\x20]\x20al'+_0x10e540(0xa0b)+_0x10e540(0x9c1)+'is');_0x61a2cd['appen'+'dChil'+'d'](_0x42779a);var _0x4d4506=_0x2c575e[_0x10e540(0x5cf)](_0xeea745,'Reset'+_0x10e540(0x161),_0x2c575e['bmpUA']),_0x4c8d41=_0xc19fa4('butto'+'n',_0x2c575e[_0x10e540(0x192)],'Reset');_0x4c8d41[_0x10e540(0x9b3)+_0x10e540(0x986)+_0x10e540(0xa30)+'r'](_0x10e540(0x954),function(){var _0x3ef771=_0x10e540;_0x521593['fov']=-0x21df+0x1d99+0x491,_0x2c575e[_0x3ef771(0x615)](_0xedec9c),_0x2c575e[_0x3ef771(0xa8a)](_0x444ad7,_0x3e52ff[_0x3ef771(0x363)]);}),_0x4d4506[_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x4c8d41),_0x57a9b5[_0x10e540(0x44e)][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x61a2cd),_0x57a9b5[_0x10e540(0x44e)][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x4d4506);var _0x2004a2=_0x5a21dd&&_0x5a21dd[_0x10e540(0x36f)];_0x57a9b5[_0x10e540(0x44e)][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0xc19fa4(_0x10e540(0x624),'sk-no'+'te',_0x2c575e[_0x10e540(0x51f)](_0x2c575e['zAwOk'](_0x2c575e[_0x10e540(0x919)],_0x2004a2?_0x2004a2['mouse'+_0x10e540(0xb1a)]?_0x2c575e[_0x10e540(0x62f)](_0x10e540(0xa88)+_0x10e540(0xbbf)+_0x2004a2['mouse'+'Look'],_0x2004a2['camer'+'a']?'\x20\x20cam'+'era\x20'+_0x2004a2['camer'+'a']:''):_0x10e540(0x824)+'useLo'+_0x10e540(0x35a)+'t':_0x2c575e[_0x10e540(0x648)])+(_0x4cf0dc?_0x2c575e[_0x10e540(0xaaa)]('\x0a',_0x4cf0dc['sourc'+'e']&&_0x4cf0dc[_0x10e540(0x764)+'e'][_0x10e540(0x208)+'Of'](_0x2c575e['DMtWP'])===-0x95*0x18+-0x1c65+0x2a5d?_0x2c575e[_0x10e540(0x628)](_0x2c575e['YzRGn'](_0x2c575e[_0x10e540(0xa1d)](_0x2c575e[_0x10e540(0x8ff)](_0x2c575e[_0x10e540(0x9a3)],_0x4cf0dc['sourc'+'e']['slice'](0x52f+-0x1748+0x1224)),_0x2c575e[_0x10e540(0x947)])+Math['round'](_0x4cf0dc[_0x10e540(0x498)+'w']),_0x2c575e['yNhHs']),Math[_0x10e540(0x1b5)](_0x4cf0dc[_0x10e540(0x84f)+'tch'])):_0x2c575e['CuJvY'](_0x4cf0dc['sourc'+'e'],_0x10e540(0xb58)+'r')?_0x2c575e[_0x10e540(0x7b0)](_0x2c575e['feChX'](_0x2c575e[_0x10e540(0x1ad)](_0x2c575e[_0x10e540(0x98e)](_0x10e540(0x3a2)+_0x10e540(0x731)+_0x10e540(0xa88)+'Look\x20'+_0x10e540(0xb58)+'rs\x0aya'+_0x10e540(0x23c),_0x4cf0dc[_0x10e540(0xb13)]),_0x2c575e['HTRwk'])+Math['round'](_0x4cf0dc[_0x10e540(0x498)+'w']),_0x10e540(0x43d)+'h\x20')+_0x4cf0dc[_0x10e540(0xa7f)+'At']+_0x10e540(0x860),Math['round'](_0x4cf0dc[_0x10e540(0x84f)+_0x10e540(0xa70)])):_0x2c575e['MqeJb']):''),_0x11b805?_0x10e540(0xa84)+_0x10e540(0x9c3)+'a\x20sta'+_0x10e540(0xbf5)+_0x10e540(0x839)+_0x10e540(0x3b4)+'tion)':''))),_0x45ca81['push'](_0x57a9b5);}if(_0x1e656e==='value'+'s'){var _0x462148=[[_0x2c575e[_0x10e540(0x1e9)],_0x10e540(0x1f1)+'ON',_0x5a21dd?_0x5a21dd[_0x10e540(0x7ed)+'on']:'-'],[_0x2c575e['wzpQQ'],_0x2c575e['nlSTq'],_0x5a21dd?_0x2c575e[_0x10e540(0x9cd)](_0x2c575e[_0x10e540(0xbfd)](_0x5a21dd[_0x10e540(0x4f7)+_0x10e540(0x3f3)+'ed'],'\x20/\x20'),_0x5a21dd['hooks'+'Regis'+'tered'+_0x10e540(0xca8)]):'-'],[_0x10e540(0xbae),_0x10e540(0x731)+'insta'+'ntiat'+_0x10e540(0x904),_0x5a21dd&&_0x5a21dd[_0x10e540(0xccd)+_0x10e540(0x2f2)]&&_0x5a21dd[_0x10e540(0xccd)+_0x10e540(0x2f2)][_0x10e540(0x663)+_0x10e540(0x43a)]?_0x2c575e[_0x10e540(0x595)](_0x2c575e['vggne'](Math['round'](_0x5a21dd['wasmM'+_0x10e540(0x2f2)][_0x10e540(0x399)]/(-0xe*-0x1e52d+-0x4c*-0x41ff+-0x52*0x5e0d)),_0x10e540(0xaee)+'\x20'),_0x5a21dd[_0x10e540(0xccd)+_0x10e540(0x2f2)]['atMs'])+'ms':'-'],['Playe'+'rs','Photo'+_0x10e540(0x750)+'orkSy'+'nc',_0x5a21dd&&_0x5a21dd['esp']?String(_0x5a21dd['esp'][_0x10e540(0x79d)+_0x10e540(0x31b)+'t']):'-'],[_0x10e540(0xa28)+'es',_0x10e540(0x189)+'one\x20b'+'ut\x20yo'+'u',_0x5a21dd&&_0x5a21dd['esp']?String(_0x5a21dd[_0x10e540(0x410)][_0x10e540(0x2fe)+_0x10e540(0x853)]):'-'],[_0x10e540(0xbd8)+'a',_0x2c575e[_0x10e540(0x4ae)],_0x5a21dd&&_0x5a21dd['esp']&&_0x5a21dd['esp']['camer'+'a']?_0x2c575e['AufdA'](_0x5a21dd[_0x10e540(0x410)][_0x10e540(0xa5c)+'a'],'\x20(')+_0x5a21dd['esp']['camer'+_0x10e540(0xb14)]+')':'-']];for(_0x4d1e5e=0x1ae9+0xc*-0xeb+-0xfe5;_0x4d1e5e<_0x462148['lengt'+'h'];_0x4d1e5e++){if(_0x2c575e['QQqkZ'](_0x2c575e['CFapF'],_0x2c575e['CFapF'])){var _0x24172f={'aDTza':function(_0x630e0f,_0x2dea40){return _0x630e0f/_0x2dea40;}};if(_0xb7276b[_0x10e540(0x371)](_0x23ef54,'v3')){var _0x4b4b1d=_0x580948[_0x32d94d]['xyz']||[_0x19cf2a[_0x1e3aa2]['v'],0x6cf+-0x1904+0x1235,0x431*-0x8+0x15+0x2173];return _0x4b4b1d[_0x10e540(0x7e0)](function(_0x3cb506){var _0x34f2e1=_0x10e540;return _0x24172f[_0x34f2e1(0xbac)](_0x400a5c[_0x34f2e1(0x1b5)](_0x3cb506*(0x478+-0x189*0x17+0x5*0x63f)),0x1*-0x1f0f+-0x4b5*-0x7+-0x8*0x30);})[_0x10e540(0xcb1)]('\x20\x20');}var _0x2756d9=_0x3094c7[_0x5e05a8]['v'];return typeof _0x2756d9===_0xb7276b[_0x10e540(0xce3)]?_0x11384c[_0x10e540(0x1b5)](_0xb7276b['JiTFI'](_0x2756d9,-0x37f+0x4*-0x761+0x24eb*0x1))/(-0x22*0xd0+-0x1f69+0x3ef1):_0x5e7ef2(_0x2756d9);}else{var _0x57778c=_0x2c575e[_0x10e540(0x25c)](_0xeea745,_0x462148[_0x4d1e5e][-0x21c0+0x17fe+0x9c2]),_0x5858b1=_0xc19fa4(_0x2c575e['nCsxL'],_0x10e540(0xc2e)+'l');_0x5858b1[_0x10e540(0x7fb)]['minWi'+'dth']='0',_0x5858b1[_0x10e540(0x7fb)]['flex']='1',_0x5858b1[_0x10e540(0x7fb)][_0x10e540(0xc96)+'lign']=_0x2c575e[_0x10e540(0x52f)],_0x5858b1[_0x10e540(0xb42)+'onten'+'t']=_0x2c575e[_0x10e540(0x9a8)](String,_0x462148[_0x4d1e5e][0x531+-0x14b3+-0x296*-0x6]),_0x5858b1[_0x10e540(0x43c)+'et']['k']=_0x462148[_0x4d1e5e][-0x41*0x1+0xe3*-0xc+0x3e*0x2d],_0x57778c[_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x5858b1);var _0x45a7f8=_0x45ca81[_0x10e540(0xb90)+'h']?_0x45ca81[_0x45ca81['lengt'+'h']-(0x6*-0x5aa+0x2f9*0x7+0xd2e)]:null;!_0x45a7f8&&(_0x45a7f8=_0x2c575e[_0x10e540(0x7c0)](_0x30c6bb,'Sessi'+'on',![]),_0x45ca81[_0x10e540(0x1e1)](_0x45a7f8)),_0x45a7f8[_0x10e540(0x44e)][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x57778c),_0x45a7f8[_0x10e540(0x44e)]['lastC'+_0x10e540(0xa47)]['sp']=_0x5858b1;}}var _0x25e173=_0x2c575e[_0x10e540(0xa7b)](_0x30c6bb,_0x2c575e[_0x10e540(0x83a)],![]),_0x4ec713=[[_0x10e540(0xabf)+'ion',_0x5a21dd&&_0x5a21dd[_0x10e540(0x349)]&&_0x5a21dd[_0x10e540(0x349)][_0x10e540(0x9e3)]?_0x10e540(0x6b2)+'ntrol'+_0x10e540(0xa43)+_0x5a21dd['local']['posAt']:_0x2c575e['CNAyN'],_0x5a21dd&&_0x5a21dd[_0x10e540(0x349)]&&_0x5a21dd[_0x10e540(0x349)]['feet']?_0x5a21dd[_0x10e540(0x349)]['feet'][_0x10e540(0x7e0)](function(_0x2761b3){var _0x4445a7=_0x10e540;if(_0x2c575e[_0x4445a7(0x897)](_0x2c575e['mjlCd'],_0x2c575e['NrJFH']))try{var _0x577225=_0x10f3ca[_0x4445a7(0x54c)](0x22e3+-0x871*-0x1+0x3*-0xe71,_0x2c62e3[_0x4445a7(0xbc8)+'Width']||_0x246b17['docum'+_0x4445a7(0x97b)+_0x4445a7(0x740)][_0x4445a7(0x8c3)+'tWidt'+'h']||-0x101a+0x60*-0x4+0x2ef*0x6),_0x224bfb=_0xbf6525[_0x4445a7(0x54c)](0x25c2+-0x1*0x64f+-0x1f72,_0x5c7a18[_0x4445a7(0xbc8)+_0x4445a7(0x8f5)+'t']||_0x3f5ae2[_0x4445a7(0x70f)+_0x4445a7(0x97b)+_0x4445a7(0x740)][_0x4445a7(0x8c3)+_0x4445a7(0x32c)+'ht']||-0xb20+0xb9a+-0x7a);return(_0x2288a9['cv']['width']!==_0x577225||_0xb7276b[_0x4445a7(0x255)](_0x126678['cv'][_0x4445a7(0x719)+'t'],_0x224bfb))&&(_0x5811ff['cv']['width']=_0x577225,_0x33f8e1['cv'][_0x4445a7(0x719)+'t']=_0x224bfb),{'w':_0x577225,'h':_0x224bfb};}catch(_0x5a56ef){return{'w':0x0,'h':0x0};}else return Math['round'](_0x2761b3*(-0x1*0x1b5c+0x58e*0x4+0x588))/(-0x5*-0x44c+-0xf1f+-0xb*0x8b);})['join']('\x20\x20'):'-'],[_0x10e540(0x8db),_0x2c575e[_0x10e540(0x2ea)]('+'+_0x240a80,'m'),_0x5a21dd&&_0x5a21dd[_0x10e540(0x349)]&&_0x5a21dd[_0x10e540(0x349)][_0x10e540(0x8b6)]?_0x5a21dd['local']['eye']['map'](function(_0x455553){var _0x2a92c5=_0x10e540;return _0xb7276b[_0x2a92c5(0x65f)](Math[_0x2a92c5(0x1b5)](_0x455553*(0x14f6+0x1a5+-0x1637*0x1)),-0x993*-0x3+-0x1066*-0x2+0x3d21*-0x1);})[_0x10e540(0xcb1)]('\x20\x20'):'-'],[_0x2c575e['YuwvL'],_0x2c575e[_0x10e540(0xbe4)],_0x2c575e['LIKrv'](_0xc4bd95,_0x5a21dd,_0x10e540(0x6b2)+'ntrol'+_0x10e540(0x4d7),0x1455*-0x1+0x1614+-0x1af*0x1)],['Sprin'+_0x10e540(0x73b)+'ed','0x40',_0xc4bd95(_0x5a21dd,_0x10e540(0x6b2)+_0x10e540(0xad7)+'ler',-0x256c+-0x3*0xc15+0x7f*0x95)],[_0x2c575e['vXbpW'],'0x11C',_0x2c575e[_0x10e540(0x618)](_0xc4bd95,_0x5a21dd,_0x10e540(0x6b2)+_0x10e540(0xad7)+_0x10e540(0x4d7),0x1*-0x183b+-0xe*-0x7+-0x18f5*-0x1)],[_0x10e540(0x474)+'h',_0x2c575e['IzuBl'],_0x2c575e[_0x10e540(0x7f6)](_0xc4bd95,_0x5a21dd,'Healt'+_0x10e540(0x479)+'pt',-0x1804+-0x7*-0x4e1+-0x963)]];for(_0x4d1e5e=-0x1243*0x1+0x17ea+-0x5a7;_0x2c575e[_0x10e540(0x554)](_0x4d1e5e,_0x4ec713[_0x10e540(0xb90)+'h']);_0x4d1e5e++){var _0xe1ea87=_0xeea745(_0x4ec713[_0x4d1e5e][0xf*-0x91+0x18a2+-0x1023]),_0x11e059=_0xc19fa4(_0x10e540(0x383),_0x2c575e[_0x10e540(0x2a8)]);_0x11e059['style'][_0x10e540(0xa04)+_0x10e540(0x2cf)]='0',_0x11e059['style']['flex']='1',_0x11e059[_0x10e540(0x7fb)]['textA'+'lign']=_0x2c575e[_0x10e540(0x52f)],_0x11e059[_0x10e540(0xb42)+_0x10e540(0x19b)+'t']=_0x2c575e[_0x10e540(0x9bb)](String,_0x4ec713[_0x4d1e5e][-0x227a+0xc6f+-0x1*-0x160d]),_0x11e059[_0x10e540(0x43c)+'et']['k']=_0x4ec713[_0x4d1e5e][0x543*-0x6+0x254+0x1d3f],_0xe1ea87[_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x11e059),_0x25e173['body'][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0xe1ea87),_0x25e173[_0x10e540(0x44e)][_0x10e540(0x475)+'hild']['sp']=_0x11e059;}_0x45ca81[_0x10e540(0x1e1)](_0x25e173);}if(_0x2c575e['fdWdp'](_0x1e656e,'log')){var _0x3cfd0b=_0x30c6bb(_0x2c575e['JLaLR'],![]),_0x3ca7c0=_0x5a21dd&&_0x5a21dd[_0x10e540(0xafb)+_0x10e540(0xa67)]&&_0x5a21dd[_0x10e540(0xafb)+_0x10e540(0xa67)][_0x10e540(0xb90)+'h']?_0x5a21dd['warni'+_0x10e540(0xa67)]['join']('\x0a'):_0x10e540(0x817)+'rning'+'s';_0x3cfd0b['body'][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0xc19fa4('div','sk-pr'+'e',_0x3ca7c0)),_0x45ca81['push'](_0x3cfd0b);var _0x5d3158=_0x30c6bb(_0x10e540(0xb9f)+'t',![]),_0x5dbfd6=_0xc19fa4(_0x2c575e[_0x10e540(0x7b2)],_0x10e540(0x783)+'n',_0x10e540(0x7c7)+'JSON\x20'+'to\x20cl'+_0x10e540(0xaec)+'rd');_0x5dbfd6['type']=_0x10e540(0xb66)+'n',_0x5dbfd6[_0x10e540(0x5f0)+'ck']=function(){var _0x31fd2e=_0x10e540;try{var _0x5b32e7=_0x2c575e[_0x31fd2e(0x3f6)](_0x2c575e['vPpLg'](_0x241738+'\x0a',JSON['strin'+'gify'](_0x5a21dd,null,0x1365*-0x1+0x1*0x18c3+-0x55d)),'\x0a')+_0x911c44;if(navigator[_0x31fd2e(0x528)+'oard']&&navigator[_0x31fd2e(0x528)+_0x31fd2e(0x3e6)][_0x31fd2e(0x579)+_0x31fd2e(0x4cb)])navigator[_0x31fd2e(0x528)+'oard'][_0x31fd2e(0x579)+_0x31fd2e(0x4cb)](_0x5b32e7)[_0x31fd2e(0x2e7)](function(){var _0x445250=_0x31fd2e;_0x5dbfd6['textC'+_0x445250(0x19b)+'t']=_0x445250(0x23e)+'d';});else _0x5dbfd6[_0x31fd2e(0xb42)+_0x31fd2e(0x19b)+'t']=_0x31fd2e(0x385)+_0x31fd2e(0x5fc)+_0x31fd2e(0x9e9)+_0x31fd2e(0x665)+'open\x20'+_0x31fd2e(0x79f)+_0x31fd2e(0x42c)+'inste'+'ad';}catch(_0x40f952){_0x5dbfd6[_0x31fd2e(0xb42)+'onten'+'t']=_0x2c575e[_0x31fd2e(0x547)];}},_0x5d3158['body'][_0x10e540(0x658)+_0x10e540(0x61d)+'d'](_0x2c575e[_0x10e540(0x2af)](_0xc19fa4,_0x2c575e['lqwMP'],_0x2c575e[_0x10e540(0x46e)],'Paste'+_0x10e540(0x802)+'whole'+_0x10e540(0x30b)+_0x10e540(0xc2a)+'n\x20som'+_0x10e540(0xa11)+'g\x20loo'+'ks\x20wr'+_0x10e540(0x3da))),_0x5d3158[_0x10e540(0x44e)][_0x10e540(0x658)+'dChil'+'d'](_0x5dbfd6),_0x45ca81['push'](_0x5d3158);}return _0x45ca81;}function _0xd1de2f(){var _0x33cd50=_0xc654b5,_0x36bb53={'RftCB':function(_0x4910cd){return _0x4910cd();}};if(_0x2c575e[_0x33cd50(0x921)]('wVluN',_0x33cd50(0x75e))){if(_0x3e52ff[_0x33cd50(0x62d)])_0x2c575e[_0x33cd50(0x149)](_0x8e02c9,!![]);}else _0x1b32e6[_0x33cd50(0xc9a)+'omman'+'d'](_0x33cd50(0xa4d)),_0x36bb53[_0x33cd50(0x7ca)](_0x3c614b);}function _0xb21fe0(){var _0x1fbc4c=_0xc654b5;if(_0x2c575e['RgZBT'](_0x1fbc4c(0x50b),'Blzpl'))try{var _0x415c26=localStorage[_0x1fbc4c(0x3b2)+'em'](_0x25dce3);if(!_0x415c26)return;var _0x506061=JSON[_0x1fbc4c(0x1a8)](_0x415c26);if(_0x506061&&typeof _0x506061['x']==='numbe'+'r'&&typeof _0x506061['y']===_0x1fbc4c(0x973)+'r')_0x3e52ff[_0x1fbc4c(0xb24)]=_0x506061;}catch(_0xf9c764){}else _0x468a9f[_0x1fbc4c(0x424)+'eItem'](_0x3ab5c3),_0x1965db=!![];}function _0x392d13(){var _0x26c97a=_0xc654b5;try{localStorage[_0x26c97a(0x460)+'em'](_0x25dce3,JSON[_0x26c97a(0x1ee)+_0x26c97a(0x1bf)](_0x3e52ff[_0x26c97a(0xb24)]));}catch(_0xd5c611){}}function _0x24594e(){var _0x440244=_0xc654b5,_0x1be6d4=_0x3e52ff[_0x440244(0xba1)];if(!_0x1be6d4||!_0x1be6d4[_0x440244(0x7fb)])return;_0x3e52ff[_0x440244(0xb24)]?(_0x1be6d4[_0x440244(0x7fb)]['left']=_0x3e52ff['pos']['x']+'px',_0x1be6d4[_0x440244(0x7fb)]['top']=_0x2c575e[_0x440244(0x442)](_0x3e52ff['pos']['y'],'px'),_0x1be6d4['style'][_0x440244(0x90d)]=_0x2c575e['POjcU'],_0x1be6d4['style'][_0x440244(0xcd5)+'m']=_0x440244(0x19c)):(_0x1be6d4['style'][_0x440244(0x594)]='auto',_0x1be6d4['style'][_0x440244(0xc3e)]=_0x440244(0x19c),_0x1be6d4[_0x440244(0x7fb)]['right']=_0x2c575e['vJZiY'],_0x1be6d4['style']['botto'+'m']=_0x440244(0xbe6));}function _0x1511b8(_0x407e49,_0x318a12){var _0x9e574d=_0xc654b5,_0x182a7e={'csHKf':function(_0x47c809,_0x5a267f){var _0xf3bf44=_0x3c88;return _0x2c575e[_0xf3bf44(0x1d7)](_0x47c809,_0x5a267f);},'tadiK':_0x2c575e['nkgzl'],'qYqZN':_0x2c575e[_0x9e574d(0xb3a)],'fMYKQ':_0x2c575e[_0x9e574d(0x9fd)],'HsRFY':function(_0x3f8c16,_0x5d681e){return _0x2c575e['zBlfD'](_0x3f8c16,_0x5d681e);},'jQXPK':function(_0x553f67,_0x472cf3){return _0x553f67-_0x472cf3;},'mJvTS':function(_0x532f02,_0x377ce7){return _0x532f02+_0x377ce7;}};if(_0x9e574d(0xcbe)!==_0x2c575e[_0x9e574d(0x610)]){var _0x508af6=_0x5ace0a[_0x9e574d(0x889)]('+');_0x82dbc9=_0x4228f1(_0x46212e,_0x182a7e['csHKf'](_0x508af6[0x15*-0xec+-0x1d49+0x1037*0x3][_0x9e574d(0x208)+'Of'](_0x9e574d(0x474)+'h'),-0x1908+-0x1*0x358+0x1c60)?_0x182a7e[_0x9e574d(0x4d8)]:_0x9e574d(0x6b2)+'ntrol'+'ler',_0x4de4b1(_0x508af6[0xf4*-0xb+0x1300+-0x883],0x266a+-0x35e*-0x6+-0x3a8e));}else try{var _0x5cb330=![],_0x465f7d=0x15fc+0xbe8+-0x3c4*0x9,_0x31db21=0x5*0x503+0x1a5a*-0x1+0x14b;_0x318a12[_0x9e574d(0x7fb)]['curso'+'r']=_0x2c575e[_0x9e574d(0xa59)],_0x318a12[_0x9e574d(0x7fb)][_0x9e574d(0x28c)+_0x9e574d(0x8da)+'n']='none';var _0x411483=function(_0x399a69){var _0x2b19ec=_0x9e574d;if(_0x2c575e[_0x2b19ec(0x1f0)](_0x2b19ec(0x40f),_0x2b19ec(0xb39)))_0x1bf94d['hasMo'+'dule']=!!(_0xd5d75e&&_0x16a646[_0x2b19ec(0x6e8)+'e']),_0x369696['heapU'+'8']=!!(_0x67852&&_0x712612[_0x2b19ec(0x6e8)+'e']&&_0x1d9e5e['Modul'+'e'][_0x2b19ec(0xa14)+'8']),_0x806ea6['heapB'+'ytes']=_0xa52b7f['heapU'+'8']?_0x4e2b84[_0x2b19ec(0x6e8)+'e'][_0x2b19ec(0xa14)+'8']['lengt'+'h']:-0x2*-0xad9+0xcb7*0x2+-0x2f20;else{_0x5cb330=!![],_0x318a12['style'][_0x2b19ec(0x7a1)+'r']=_0x2b19ec(0x800)+'ing';var _0x13533e={'left':_0x2c575e[_0x2b19ec(0xa8a)](parseFloat,_0x407e49[_0x2b19ec(0x7fb)][_0x2b19ec(0x594)])||-0x17c5+0x1*-0x1f49+0x370e,'top':parseFloat(_0x407e49[_0x2b19ec(0x7fb)]['top'])||0x4a9*-0x2+-0x1197+0x1*0x1ae9};(!_0x407e49['style']['left']||_0x407e49[_0x2b19ec(0x7fb)][_0x2b19ec(0x594)]===_0x2c575e[_0x2b19ec(0x9fd)])&&(_0x13533e['left']=(window[_0x2b19ec(0xbc8)+'Width']||-0x25*-0x82+-0x13de+0x1*0x114)-(_0x407e49['offse'+_0x2b19ec(0x5cd)+'h']||-0x105d*0x1+-0x26dd+0x39a6)-(0x283*0x1+0xe3+-0x34e));(!_0x407e49[_0x2b19ec(0x7fb)][_0x2b19ec(0xc3e)]||_0x407e49['style'][_0x2b19ec(0xc3e)]===_0x2b19ec(0x19c))&&(_0x2c575e['lhHAW']!==_0x2c575e['OWKVC']?_0x13533e[_0x2b19ec(0xc3e)]=_0x2c575e[_0x2b19ec(0x80b)]((window[_0x2b19ec(0xbc8)+_0x2b19ec(0x8f5)+'t']||-0x1c8b+-0x13aa+0x3035)-(_0x407e49[_0x2b19ec(0x7dd)+_0x2b19ec(0x32c)+'ht']||0x5ad+0x39*0xd+-0x702),0x73e+0x1*-0xe6d+0x747):_0x1af861[_0x2b19ec(0x207)]());_0x465f7d=_0x2c575e['QhWre'](_0x399a69['clien'+'tX']||-0x2e3*-0x1+0x9d*-0x26+0x146b*0x1,_0x13533e[_0x2b19ec(0x594)]),_0x31db21=_0x2c575e[_0x2b19ec(0x436)](_0x399a69[_0x2b19ec(0x8c3)+'tY']||0x2023+0x7e1+0xa01*-0x4,_0x13533e['top']);try{_0x399a69[_0x2b19ec(0x5f5)+_0x2b19ec(0x9f9)+'ault']();}catch(_0x3c30ff){}}},_0x4a1508=function(_0x42037d){var _0x378c01=_0x9e574d,_0x582214=_0x182a7e[_0x378c01(0xa1e)][_0x378c01(0x889)]('|'),_0x4db842=0x1ad+-0x216b+0x1fbe;while(!![]){switch(_0x582214[_0x4db842++]){case'0':_0x407e49[_0x378c01(0x7fb)]['botto'+'m']=_0x182a7e[_0x378c01(0x2cb)];continue;case'1':var _0x234387=_0x182a7e['HsRFY'](_0x42037d['clien'+'tX']||-0x167*-0x1b+-0x1954*0x1+-0xc89,_0x465f7d),_0x2458f6=(_0x42037d['clien'+'tY']||-0x1a3c+-0x293*0xa+-0x1*-0x33fa)-_0x31db21;continue;case'2':_0x234387=Math[_0x378c01(0x54c)](-0x3*-0x737+-0xc82*-0x1+-0x221f,Math[_0x378c01(0xbc2)]((window['inner'+_0x378c01(0xb8d)]||0xe25+-0x1e12+0xfed)-_0x75fccc-(0xd9e+0x11f0+-0xfc3*0x2),_0x234387));continue;case'3':var _0x75fccc=_0x407e49[_0x378c01(0x7dd)+_0x378c01(0x5cd)+'h']||-0x19a8+0x2421*-0x1+0x4035,_0x3a4ed2=_0x407e49['offse'+_0x378c01(0x32c)+'ht']||0x281+0x1802+-0x18f3;continue;case'4':if(!_0x5cb330)return;continue;case'5':_0x3e52ff[_0x378c01(0xb24)]={'x':_0x234387,'y':_0x2458f6};continue;case'6':_0x407e49['style']['top']=_0x2458f6+'px';continue;case'7':_0x2458f6=Math[_0x378c01(0x54c)](0x1def+0x8db*-0x4+0x3*0x1d7,Math['min'](_0x182a7e[_0x378c01(0x93b)](_0x182a7e[_0x378c01(0x271)](window['inner'+_0x378c01(0x8f5)+'t']||-0xca5+-0x105f*-0x1+-0x3ba,_0x3a4ed2),-0x204c+-0xf*-0xcb+0x146f*0x1),_0x2458f6));continue;case'8':_0x407e49['style']['right']=_0x378c01(0x19c);continue;case'9':_0x407e49['style'][_0x378c01(0x594)]=_0x182a7e[_0x378c01(0x14e)](_0x234387,'px');continue;}break;}},_0x3e5665=function(){var _0x394a94=_0x9e574d,_0x176d57={'doSJU':function(_0x132d0b,_0x48bff7){return _0x132d0b+_0x48bff7;},'TkIPv':_0x2c575e['jHjda'],'WkdfC':function(_0x2f5d81,_0x28b893){var _0x32b4ad=_0x3c88;return _0x2c575e[_0x32b4ad(0xb2b)](_0x2f5d81,_0x28b893);},'RMLJO':_0x394a94(0x4e3)+'ks\x20','NEYjW':function(_0x4b4d40,_0x34ffc2){return _0x4b4d40>_0x34ffc2;},'sbERy':function(_0x42fdbe,_0x3ac84f){var _0x3211c5=_0x394a94;return _0x2c575e[_0x3211c5(0x3bf)](_0x42fdbe,_0x3ac84f);},'HWeEM':function(_0x28a3a3,_0x12e76f){return _0x2c575e['FINCY'](_0x28a3a3,_0x12e76f);},'JNOjr':_0x394a94(0xcac)+'\x20-','kVIYB':function(_0x43019a,_0x3b5df7){return _0x43019a+_0x3b5df7;},'KxttN':'no\x20en'+'emies'+_0x394a94(0x60f)+_0x394a94(0x798)+_0x394a94(0x6fa)+_0x394a94(0x7d9),'SmUYn':function(_0x52a4c,_0x4580a5){return _0x52a4c>_0x4580a5;},'lPfcw':'#7ee0'+'a8'};if(_0x2c575e[_0x394a94(0x917)]===_0x2c575e[_0x394a94(0x917)]){if(!_0x5cb330)return;_0x5cb330=![],_0x318a12[_0x394a94(0x7fb)][_0x394a94(0x7a1)+'r']='grab',_0x2c575e[_0x394a94(0xc34)](_0x392d13);}else{if(!_0x476f3c()&&!_0x6367e8){if(_0x52ee18['el'])_0x10d916['el']['style']['displ'+'ay']='none';return;}if(_0x561f78['el'])_0x57b911['el'][_0x394a94(0x7fb)][_0x394a94(0x305)+'ay']='';var _0x5a94f3=_0x37a8b2['keys'](_0xe1bb78&&_0x488b98['insta'+_0x394a94(0x143)]||{})['lengt'+'h'],_0x163c1a=_0x480ce2&&_0x1eb0af[_0x394a94(0x410)]||null,_0x2560c3=_0x163c1a?_0x163c1a[_0x394a94(0x2fe)+_0x394a94(0x853)]||0x1125+-0x7c+0x1*-0x10a9:0x115e+0x96f+-0x8ef*0x3,_0x1f283f=_0x163c1a?_0x163c1a[_0x394a94(0x748)+'unt']||0x469*0x5+-0x89*-0x5+-0x18ba:-0xa64+-0x732*0x1+0x1196,_0x15f926=_0x5fea85?_0x176d57['doSJU']((_0xff75df[_0x394a94(0xaba)+'r'][_0x394a94(0x2a0)+_0x394a94(0x662)]/(0x9c7*0x1a8+-0x7027*-0x8+-0x3b2d0))[_0x394a94(0x297)+'ed'](0x10*0x49+0xb2d*-0x3+0x1cf7),'MB'):_0x176d57[_0x394a94(0x37c)],_0x18a3c9=_0x176d57['doSJU'](_0x176d57[_0x394a94(0x25f)]('v'+(_0x1830f6&&_0x576459[_0x394a94(0x7ed)+'on']||_0x26bdff)+_0x176d57[_0x394a94(0x57d)]+(_0x1fb5ca&&_0x47c0dc[_0x394a94(0x4f7)+_0x394a94(0x3f3)+'ed']||-0x10ab*-0x1+-0x170e*0x1+0x5*0x147)+'/',_0x5e8102&&_0xaf1ed6[_0x394a94(0x4f7)+_0x394a94(0x797)]||-0xc5*0x26+-0xc03*-0x1+0x113b)+('\x20\x20obj'+'s\x20')+_0x5a94f3+('\x20\x20mem'+'\x20'),_0x15f926)+(_0x394a94(0x584)+_0x394a94(0xb78))+_0x91f35f;_0x186444['st'][_0x394a94(0xb42)+_0x394a94(0x19b)+'t']=_0x18a3c9;var _0x273193=_0x57a07c[_0x394a94(0x544)];_0x273193&&(_0x273193['textC'+_0x394a94(0x19b)+'t']=_0x176d57[_0x394a94(0xab8)](_0x2560c3,-0x1*-0x19b7+0x1*0x241b+-0x3dd2)?_0x176d57[_0x394a94(0x312)]('PLAYE'+'RS\x20',_0x2560c3)+(_0x1f283f?_0x176d57[_0x394a94(0xb33)](_0x176d57[_0x394a94(0x312)](_0x394a94(0xc74),_0x1f283f),_0x394a94(0x1a2)):'')+(_0x163c1a&&_0x163c1a[_0x394a94(0xa5c)+'a']?'\x20\x20cam'+'\x20'+_0x163c1a['camer'+'aFrom']:_0x176d57['JNOjr']):_0x176d57['kVIYB'](_0x176d57[_0x394a94(0x5c9)],_0x163c1a&&_0x163c1a[_0x394a94(0xa5c)+'a']?_0x163c1a['camer'+_0x394a94(0xb14)]:'-'),_0x273193['style']['color']=_0x176d57['SmUYn'](_0x2560c3,-0x1553+-0x1349+0x289c)?_0x176d57['lPfcw']:'#8d7a'+'99');}};_0x318a12[_0x9e574d(0x9b3)+_0x9e574d(0x986)+'stene'+'r']('mouse'+_0x9e574d(0x1c4),_0x411483),window[_0x9e574d(0x9b3)+'entLi'+_0x9e574d(0xa30)+'r'](_0x2c575e[_0x9e574d(0x3db)],_0x4a1508),window[_0x9e574d(0x9b3)+_0x9e574d(0x986)+'stene'+'r']('mouse'+'up',_0x3e5665),_0x318a12[_0x9e574d(0x9b3)+'entLi'+'stene'+'r'](_0x2c575e[_0x9e574d(0xb1d)],_0x411483,{'passive':![]}),window[_0x9e574d(0x9b3)+_0x9e574d(0x986)+'stene'+'r'](_0x9e574d(0x28c)+_0x9e574d(0x56f),_0x4a1508,{'passive':![]}),window[_0x9e574d(0x9b3)+_0x9e574d(0x986)+'stene'+'r'](_0x9e574d(0x28c)+'end',_0x3e5665);}catch(_0x5db595){}}function _0x3533b6(){var _0x45814e=_0xc654b5,_0xfdd9f3={'Yrzca':function(_0x5dc2f6,_0x3087c0){return _0x5dc2f6<_0x3087c0;},'wRHZM':function(_0xfee816,_0x31d134){return _0xfee816*_0x31d134;},'BfALD':function(_0x2ab893,_0x129b67){return _0x2ab893===_0x129b67;},'rBGxm':_0x2c575e['Qcjuj'],'VAKYG':function(_0x25b8ec,_0x495909){var _0x20317e=_0x3c88;return _0x2c575e[_0x20317e(0x35d)](_0x25b8ec,_0x495909);}};if(_0x3e52ff[_0x45814e(0x1c1)])return _0x3e52ff[_0x45814e(0xba1)];try{if(_0x2c575e['jeSos'](_0x45814e(0x744),'vLENx')){_0x4f18e3();return;}else{if(!document[_0x45814e(0x44e)]||!document[_0x45814e(0x44e)]['appen'+'dChil'+'d'])return null;if(!document[_0x45814e(0x95b)+'ement'+_0x45814e(0x466)](_0x45814e(0x72f)+_0x45814e(0x2f8)+'u-css')){if(_0x2c575e[_0x45814e(0xa6a)](_0x2c575e['zaYsY'],_0x45814e(0x76b)))_0x1e9948();else{var _0x419846=document[_0x45814e(0x7ec)+'eElem'+'ent'](_0x45814e(0x7fb));_0x419846['id']='sakur'+_0x45814e(0x2f8)+_0x45814e(0x66b),_0x419846[_0x45814e(0xb42)+_0x45814e(0x19b)+'t']=_0x2e3701,(document[_0x45814e(0x196)]||document['docum'+_0x45814e(0x97b)+'ement'])[_0x45814e(0x658)+_0x45814e(0x61d)+'d'](_0x419846);}}var _0x5be758=_0xc19fa4(_0x45814e(0x624),_0x45814e(0xa07)+'nel');_0x5be758['id']='sakur'+_0x45814e(0x2f8)+_0x45814e(0x2e1)+'t';var _0x522451=_0xc19fa4(_0x2c575e['lqwMP'],_0x45814e(0x51e)+'de'),_0x165870=_0xc19fa4(_0x45814e(0x624),_0x2c575e['fWWcX'],_0x47c1ac);_0x522451[_0x45814e(0x658)+_0x45814e(0x61d)+'d'](_0x165870);var _0x295995=_0x2c575e[_0x45814e(0x8df)](_0xc19fa4,_0x2c575e['lqwMP'],'mn-ma'+'in'),_0x289c4d=_0xc19fa4('div',_0x45814e(0x7e1)+'p'),_0x4b32e8=_0xc19fa4(_0x2c575e[_0x45814e(0xab5)],_0x2c575e[_0x45814e(0x64c)]),_0x25b1e0=_0xc19fa4('div',_0x2c575e['thvZK'],_0x45814e(0x2fa)+_0x45814e(0x137)+'llWar'+'z'),_0x3daf0f=_0xc19fa4('div','mn-su'+'b',_0x2c575e['SwoXC']);_0x4b32e8[_0x45814e(0x658)+_0x45814e(0x61d)+'d'](_0x25b1e0),_0x4b32e8[_0x45814e(0x658)+'dChil'+'d'](_0x3daf0f);var _0x364f60=_0xc19fa4(_0x2c575e[_0x45814e(0xab5)],_0x2c575e[_0x45814e(0x4a0)],_0x2c575e[_0x45814e(0x5a1)]);_0x364f60['oncli'+'ck']=function(){_0x2c575e['uPmVc'](_0x8e02c9,![]);},_0x289c4d[_0x45814e(0x658)+'dChil'+'d'](_0x4b32e8),_0x289c4d['appen'+_0x45814e(0x61d)+'d'](_0x364f60);var _0xc0f555=_0x2c575e[_0x45814e(0x8df)](_0xc19fa4,'div',_0x45814e(0x81d)+'ls');_0x295995[_0x45814e(0x658)+'dChil'+'d'](_0x289c4d),_0x295995[_0x45814e(0x658)+_0x45814e(0x61d)+'d'](_0xc0f555),_0x5be758['appen'+_0x45814e(0x61d)+'d'](_0x522451),_0x5be758['appen'+_0x45814e(0x61d)+'d'](_0x295995),document['body'][_0x45814e(0x658)+_0x45814e(0x61d)+'d'](_0x5be758),_0x3e52ff[_0x45814e(0xba1)]=_0x5be758,_0x3e52ff['cols']=_0xc0f555,_0x3e52ff[_0x45814e(0x196)]=_0x25b1e0,_0x3e52ff[_0x45814e(0x39a)]=_0x3daf0f,_0xb21fe0(),_0x24594e(),_0x1511b8(_0x5be758,_0x289c4d);var _0x445777={};for(var _0x5d1e0b=0x7b4+0x4e0*-0x8+0x1f4c;_0x2c575e[_0x45814e(0x150)](_0x5d1e0b,_0x4b7d25[_0x45814e(0xb90)+'h']);_0x5d1e0b++){var _0x481807=_0x4b7d25[_0x5d1e0b],_0xdfef36=_0xc19fa4(_0x2c575e[_0x45814e(0x7b2)],'mn-ta'+'b',_0x2c575e['DRUBr']('<smal'+'l>',_0x481807[_0x45814e(0x761)])+_0x2c575e['PVisG']);_0xdfef36[_0x45814e(0x86f)]=_0x2c575e['JANhI'],_0xdfef36[_0x45814e(0x7c1)]=_0x481807[_0x45814e(0x761)],function(_0xe17c8){var _0x165103=_0x45814e,_0x14027c={'FCDCV':function(_0x3458ff,_0x7b45ae){return _0x2c575e['HRGkK'](_0x3458ff,_0x7b45ae);},'dNNHk':function(_0x1a8cef,_0x5a6c67){var _0x5e4884=_0x3c88;return _0x2c575e[_0x5e4884(0x842)](_0x1a8cef,_0x5a6c67);},'KKLwv':_0x2c575e['kjJaO'],'hAsoV':'none','sgXVn':'),\x20so'+_0x165103(0x802)+_0x165103(0x5df)+_0x165103(0x285)+_0x165103(0x933)+_0x165103(0xa81)+_0x165103(0xc5a)+'d\x20is\x20'+_0x165103(0x680)+_0x165103(0xc5f)+_0x165103(0x406)+_0x165103(0x4b2)};_0x2c575e[_0x165103(0x4c9)](_0x2c575e[_0x165103(0x6cd)],_0x2c575e[_0x165103(0x6cd)])?_0x41a6d1=_0x14027c[_0x165103(0x4ec)](_0x14027c['FCDCV'](_0x14027c[_0x165103(0xbc6)](_0x14027c['dNNHk']('\x20A\x20ho'+_0x165103(0xa7e)+_0x165103(0x75c)+'t\x20'+_0x351b91['hookF'+_0x165103(0xb5d)+'oof'][_0x165103(0x9b6)],'ms\x20wi'+'th\x20or'+_0x165103(0x9e1)+_0x165103(0xc77)+'=')+_0x4c9f4e[_0x165103(0x50a)+'irePr'+'oof']['origi'+_0x165103(0xc37)+'nc']+_0x14027c[_0x165103(0x166)],_0x144a2b[_0x165103(0x50a)+'irePr'+_0x165103(0xab3)]['resol'+'veGam'+'eAtFi'+'re']),'\x20(sou'+_0x165103(0xb46))+(_0x27a546['hookF'+'irePr'+_0x165103(0xab3)][_0x165103(0x8d8)+_0x165103(0x7cb)+_0x165103(0x960)+'e']||_0x14027c[_0x165103(0xad1)]),_0x14027c[_0x165103(0xcd9)]):_0xdfef36[_0x165103(0x5f0)+'ck']=function(){_0x444ad7(_0xe17c8);};}(_0x481807['id']),_0x445777[_0x481807['id']]=_0xdfef36,_0x522451['appen'+_0x45814e(0x61d)+'d'](_0xdfef36);}_0x3e52ff['butto'+'ns']=_0x445777;var _0x918702=_0xc19fa4(_0x45814e(0x624),null,_0x4bc81c);return _0x918702['id']=_0x2c575e[_0x45814e(0x29b)],_0x918702[_0x45814e(0x7c1)]=_0x45814e(0x2fa)+_0x45814e(0x137)+_0x45814e(0x647)+'z\x20(In'+_0x45814e(0x22d),_0x918702[_0x45814e(0x816)+_0x45814e(0x32d)+'er']=function(){var _0x4dbea6=_0x45814e;_0x918702[_0x4dbea6(0x7fb)]['opaci'+'ty']='1';},_0x918702['onmou'+'selea'+'ve']=function(){var _0x21b8d7=_0x45814e;_0x918702['style'][_0x21b8d7(0x197)+'ty']=_0x3e52ff[_0x21b8d7(0x62d)]?'1':'.5';},_0x918702['oncli'+'ck']=function(_0x4ccd9b){var _0x3a9f48=_0x45814e,_0xed0dc5={'yMqGk':function(_0x23db7e,_0x30ea7d){return _0x23db7e(_0x30ea7d);},'FVLrd':function(_0x49b009,_0x5da497){return _0xfdd9f3['Yrzca'](_0x49b009,_0x5da497);},'kghpI':function(_0x2699c0,_0x4c05ad){return _0x2699c0===_0x4c05ad;},'tPMQj':function(_0x2a0a16,_0xd83aa2){return _0x2a0a16<=_0xd83aa2;},'WiZLX':function(_0x59d100,_0x2a4402){return _0xfdd9f3['wRHZM'](_0x59d100,_0x2a4402);}};if(_0xfdd9f3[_0x3a9f48(0x171)](_0xfdd9f3[_0x3a9f48(0xc0d)],_0x3a9f48(0x93e))){if(_0x4ccd9b&&_0x4ccd9b['stopP'+_0x3a9f48(0x604)+_0x3a9f48(0x9ca)])_0x4ccd9b['stopP'+'ropag'+_0x3a9f48(0x9ca)]();_0xfdd9f3[_0x3a9f48(0xca3)](_0x8e02c9,!_0x3e52ff[_0x3a9f48(0x62d)]);}else{var _0x3afcd7=(_0x3a9f48(0x6ac)+_0x3a9f48(0x7a3)+_0x3a9f48(0x7bb))[_0x3a9f48(0x889)]('|'),_0x4c8b73=0x1*0xb4f+0x1*-0x1731+0xbe2;while(!![]){switch(_0x3afcd7[_0x4c8b73++]){case'0':if(typeof _0x1a8638!=='numbe'+'r'||!_0xed0dc5['yMqGk'](_0xefce6e,_0x1a8638))return!![];continue;case'1':if(typeof _0x5cbf81!=='numbe'+'r'||!_0x102e07(_0x5cbf81))return![];continue;case'2':var _0x5cbf81=_0x5da72c['v'];continue;case'3':return _0xed0dc5[_0x3a9f48(0xc26)](_0x4f1437['abs'](_0x5cbf81),-0x15*0x47889d7+-0x3b*-0x5e0348+0x1a5d77cf*0x5);case'4':if(_0x42d293['k']==='obfB')return _0x5cbf81===-0x26ff+0x1*-0x1733+-0x13*-0x346||_0x5cbf81===-0x15b6+0x6*0x2ab+0x1*0x5b5;continue;case'5':if(_0xed0dc5[_0x3a9f48(0x275)](_0x28eae0['act'],0x137e+-0x5*0x503+-0x2c9*-0x2))return _0xed0dc5['tPMQj'](_0xff7c49['abs'](_0x5cbf81-_0x1a8638),_0x2a1a45[_0x3a9f48(0x54c)](0x92b*-0x1+-0x2481+0x2dad,_0xed0dc5[_0x3a9f48(0x7af)](_0x5011ce[_0x3a9f48(0x419)](_0x1a8638),0x1*-0x12fb+-0x1*0x2077+0x19b9*0x2+0.6)));continue;case'6':var _0x1a8638=_0x3d1e6e[_0x3a9f48(0x334)];continue;}break;}}},document[_0x45814e(0x44e)][_0x45814e(0x658)+_0x45814e(0x61d)+'d'](_0x918702),_0x3e52ff[_0x45814e(0x649)]=_0x918702,setInterval(function(){var _0x591c68=_0x45814e;try{if(!_0x3e52ff['petal'])return;var _0x4f39b6=_0x2c575e['GcRoV'](_0x4759e7);_0x3e52ff['petal']['style']['opaci'+'ty']=_0x3e52ff[_0x591c68(0x62d)]?'1':_0x4f39b6?'.8':_0x2c575e[_0x591c68(0xba2)],_0x3e52ff['petal']['title']=_0x4f39b6?_0x2c575e['PQlDS']:_0x2c575e[_0x591c68(0xbee)];}catch(_0x117540){}},0xc50+-0x22de+0x194a),_0x3e52ff[_0x45814e(0x1c1)]=!![],_0x444ad7(_0x3e52ff['cat']),_0x5be758;}}catch(_0x5f202b){if(_0x2c575e['cyqYR']('ExIYV','DQZVs'))_0x27ce11=_0x12e01d(_0x30c9cd);else return console[_0x45814e(0x3fe)](_0x2c575e[_0x45814e(0x175)],_0x2c575e[_0x45814e(0x959)]('color'+':',_0x24f5d1),_0x5f202b),null;}}function _0x444ad7(_0x415583){var _0x58ebaa=_0xc654b5,_0x2ad5bf={'mqaGN':'funct'+_0x58ebaa(0x664),'cgysx':_0x58ebaa(0x4e0)+'me.re'+'solve'+_0x58ebaa(0x4f6)+')','FtyKG':_0x2c575e[_0x58ebaa(0x183)]};if('smIQi'!=='AFjfN'){var _0x3a25c2=_0x2c575e['yDArC'][_0x58ebaa(0x889)]('|'),_0x2fa479=-0x1*-0x158b+0x1*0x1f03+-0x348e;while(!![]){switch(_0x3a25c2[_0x2fa479++]){case'0':_0x3e52ff[_0x58ebaa(0x363)]=_0x415583;continue;case'1':try{_0x3908d7=_0x2c575e[_0x58ebaa(0x84d)](_0x442b3a,_0x415583);}catch(_0x596125){_0x3908d7=[];}continue;case'2':for(var _0x4efd02 in _0x3e52ff[_0x58ebaa(0xb66)+'ns']){if(_0x3e52ff[_0x58ebaa(0xb66)+'ns'][_0x4efd02][_0x58ebaa(0x52d)+'List'])_0x3e52ff['butto'+'ns'][_0x4efd02]['class'+'Name']=_0x58ebaa(0x841)+'b'+(_0x2c575e[_0x58ebaa(0xb55)](_0x4efd02,_0x415583)?'\x20acti'+'ve':'');}continue;case'3':var _0x4bf335=null;continue;case'4':var _0x3908d7=[];continue;case'5':if(!_0x3e52ff[_0x58ebaa(0x85e)])return;continue;case'6':for(var _0x30feb0=0xa6*-0x22+0x111*-0x7+-0x1*-0x1d83;_0x30feb0<_0x3908d7[_0x58ebaa(0xb90)+'h'];_0x30feb0++)_0x3e52ff[_0x58ebaa(0x85e)][_0x58ebaa(0x658)+_0x58ebaa(0x61d)+'d'](_0x3908d7[_0x30feb0]);continue;case'7':_0x3e52ff[_0x58ebaa(0x708)]=[];continue;case'8':for(var _0x4d370c=0x1e80+-0x5b4+-0x18cc;_0x2c575e['hEIHY'](_0x4d370c,_0x4b7d25['lengt'+'h']);_0x4d370c++)if(_0x4b7d25[_0x4d370c]['id']===_0x415583)_0x4bf335=_0x4b7d25[_0x4d370c];continue;case'9':while(_0x3e52ff[_0x58ebaa(0x85e)][_0x58ebaa(0x1ca)+_0x58ebaa(0x2be)])_0x3e52ff[_0x58ebaa(0x85e)][_0x58ebaa(0x424)+_0x58ebaa(0x477)+'d'](_0x3e52ff[_0x58ebaa(0x85e)][_0x58ebaa(0x1ca)+'Child']);continue;case'10':_0x3e52ff[_0x58ebaa(0x196)][_0x58ebaa(0xb42)+_0x58ebaa(0x19b)+'t']='Sakur'+_0x58ebaa(0x137)+_0x58ebaa(0x647)+'z\x20—\x20'+(_0x4bf335&&_0x4bf335[_0x58ebaa(0x761)]||'?');continue;}break;}}else{var _0x4364c1=_0x1a0c9f['Unity'+_0x58ebaa(0x5ee)+_0x58ebaa(0xa19)]&&_0xd41a72['Unity'+_0x58ebaa(0x5ee)+'dkit']['Runti'+'me'];if(_0x4364c1&&typeof _0x4364c1['resol'+_0x58ebaa(0x29e)+'e']===_0x2ad5bf[_0x58ebaa(0x2c7)]){var _0x160516=_0x4364c1[_0x58ebaa(0x7b5)+'veGam'+'e']();if(_0x160516)return _0x56f7fb[_0x58ebaa(0x764)+'e']=_0x2ad5bf[_0x58ebaa(0x2bb)],_0x160516;}if(_0x4364c1&&_0x4364c1[_0x58ebaa(0x187)])return _0x4c7384[_0x58ebaa(0x764)+'e']=_0x2ad5bf[_0x58ebaa(0xab6)],_0x4364c1;}}function _0x8e02c9(_0x30d747){var _0x228a98=_0xc654b5;_0x3e52ff['open']=!!_0x30d747;var _0x4196fc=_0x2c575e['owYfa'](_0x3533b6);if(!_0x4196fc)return;_0x4196fc[_0x228a98(0x52d)+_0x228a98(0xcd0)]=_0x2c575e['inXQi'](_0x2c575e['pGPri'],_0x3e52ff['open']?'\x20show'+'n':'');if(_0x3e52ff[_0x228a98(0x649)])_0x3e52ff['petal'][_0x228a98(0x7fb)][_0x228a98(0x197)+'ty']=_0x3e52ff['open']?'1':'.5';if(_0x3e52ff[_0x228a98(0x62d)]){_0x2c575e[_0x228a98(0xc13)](_0x444ad7,_0x3e52ff[_0x228a98(0x363)]);try{var _0x589bfe=window['inner'+_0x228a98(0x8f5)+'t']||0x23f3*-0x1+0xbc0+-0x1*-0x1b53;if(_0x589bfe<-0x3*0x62b+-0x3*0x585+-0x2*-0x12be)_0x342983(![]);}catch(_0x3710bd){}}}function _0x43eab5(){var _0x4939c9=_0xc654b5;if(!_0x3e52ff[_0x4939c9(0x62d)]||!_0x3e52ff['built'])return;try{for(var _0x5557ed=-0x1b7*-0xf+-0xd80+-0xc39;_0x2c575e['nxiLe'](_0x5557ed,_0x3e52ff['syncs']['lengt'+'h']);_0x5557ed++){try{_0x3e52ff[_0x4939c9(0x708)][_0x5557ed]();}catch(_0x392f35){}}var _0x3f0467=_0xdc40bb;_0x3e52ff['sub'][_0x4939c9(0xb42)+_0x4939c9(0x19b)+'t']=_0x3f0467?_0x2c575e[_0x4939c9(0xc3d)](_0x2c575e[_0x4939c9(0x289)](_0x2c575e[_0x4939c9(0x559)](_0x2c575e['gkqHx']('v'+_0x3f0467[_0x4939c9(0x7ed)+'on']+('\x20\x20·\x20\x20'+_0x4939c9(0x4f7)+'\x20'),_0x3f0467[_0x4939c9(0x4f7)+_0x4939c9(0x3f3)+'ed']),'/'),_0x3f0467[_0x4939c9(0x4f7)+_0x4939c9(0x797)]),_0x4939c9(0x3be)+_0x4939c9(0x79d)+'rs\x20')+(_0x3f0467[_0x4939c9(0x410)]&&_0x3f0467[_0x4939c9(0x410)][_0x4939c9(0x79d)+_0x4939c9(0x31b)+'t']||0x9bd+0x4b1+0xe6e*-0x1)+_0x2c575e['WYYnw']+(_0x3f0467['wasmM'+_0x4939c9(0x2f2)]&&_0x3f0467['wasmM'+_0x4939c9(0x2f2)]['captu'+'red']?Math[_0x4939c9(0x1b5)](_0x3f0467['wasmM'+_0x4939c9(0x2f2)][_0x4939c9(0x399)]/(-0xe9ab+-0x48549+0xab77a*0x2))+'MB':'-'):_0x2c575e[_0x4939c9(0x2c8)];var _0x575099=_0x3e52ff['cols']['query'+'Selec'+_0x4939c9(0xae5)+'l']?_0x3e52ff[_0x4939c9(0x85e)][_0x4939c9(0x5ef)+'Selec'+_0x4939c9(0xae5)+'l'](_0x4939c9(0xb0c)+_0x4939c9(0x99c)):[];for(var _0x44650b=0x49*0x25+-0x17ea+0x1*0xd5d;_0x2c575e['YxkmV'](_0x44650b,_0x575099[_0x4939c9(0xb90)+'h']);_0x44650b++){var _0x2f183d=_0x575099[_0x44650b]['datas'+'et']['k'],_0x46d54b='';if(_0x2f183d===_0x2c575e['PMPDp'])_0x46d54b=_0x3f0467?_0x3f0467[_0x4939c9(0x7ed)+'on']:'-';else{if(_0x2f183d==='appli'+'ed\x20/\x20'+'regis'+_0x4939c9(0x8ee))_0x46d54b=_0x3f0467?_0x3f0467[_0x4939c9(0x4f7)+_0x4939c9(0x3f3)+'ed']+_0x4939c9(0x45b)+_0x3f0467['hooks'+_0x4939c9(0x9e2)+_0x4939c9(0x8ee)+'AtArm']:'-';else{if(_0x2c575e['LfxLG'](_0x2f183d,_0x4939c9(0x731)+_0x4939c9(0x142)+'ntiat'+_0x4939c9(0x904)))_0x46d54b=_0x3f0467&&_0x3f0467['wasmM'+_0x4939c9(0x2f2)]&&_0x3f0467['wasmM'+'emory'][_0x4939c9(0x663)+_0x4939c9(0x43a)]?_0x2c575e[_0x4939c9(0x6a8)](_0x2c575e[_0x4939c9(0x88f)](Math['round'](_0x3f0467[_0x4939c9(0xccd)+'emory'][_0x4939c9(0x399)]/(-0xf3096+-0x1f812+-0x8*-0x42515)),_0x4939c9(0xaee)+'\x20'),_0x3f0467[_0x4939c9(0xccd)+_0x4939c9(0x2f2)][_0x4939c9(0x9b6)])+'ms':'-';else{if(_0x2f183d===_0x2c575e['YORrU'])_0x46d54b=_0x3f0467&&_0x3f0467[_0x4939c9(0x410)]?_0x2c575e[_0x4939c9(0x5b0)](String,_0x3f0467[_0x4939c9(0x410)]['playe'+_0x4939c9(0x31b)+'t']):'-';else{if(_0x2f183d===_0x2c575e['GrCJE'])_0x46d54b=_0x3f0467&&_0x3f0467[_0x4939c9(0x410)]?String(_0x3f0467['esp'][_0x4939c9(0x2fe)+_0x4939c9(0x853)]):'-';else{if(_0x2f183d===_0x4939c9(0x405)+_0x4939c9(0x702)+_0x4939c9(0x7fd)+_0x4939c9(0xb72))_0x46d54b=_0x3f0467&&_0x3f0467['esp']&&_0x3f0467[_0x4939c9(0x410)][_0x4939c9(0xa5c)+'a']?_0x2c575e[_0x4939c9(0xae2)](_0x3f0467[_0x4939c9(0x410)][_0x4939c9(0xa5c)+'a']+'\x20('+_0x3f0467[_0x4939c9(0x410)][_0x4939c9(0xa5c)+'aFrom'],')'):'-';else{if(_0x2c575e['uEDJv'](_0x2f183d,'FPSco'+'ntrol'+_0x4939c9(0x4b8)+_0x4939c9(0x284)))_0x46d54b=_0x3f0467&&_0x3f0467[_0x4939c9(0x349)]&&_0x3f0467['local'][_0x4939c9(0xa0c)]?_0x3f0467[_0x4939c9(0x349)][_0x4939c9(0xa0c)][_0x4939c9(0x7e0)](function(_0x1cda61){return Math['round'](_0x1cda61*(-0x233*0x1+0x33*-0x67+-0x7b4*-0x3))/(-0x1409*0x1+0x45d*-0x1+-0x2*-0xc65);})['join']('\x20\x20'):'-';else{if(_0x2c575e[_0x4939c9(0xc40)](_0x2f183d,_0x4939c9(0x752)+'8'))_0x46d54b=_0x3f0467&&_0x3f0467['local']&&_0x3f0467['local']['eye']?_0x3f0467[_0x4939c9(0x349)][_0x4939c9(0x8b6)][_0x4939c9(0x7e0)](function(_0x214ace){var _0x1dcefd=_0x4939c9;return _0x2c575e[_0x1dcefd(0x1e6)](Math[_0x1dcefd(0x1b5)](_0x2c575e[_0x1dcefd(0x6d5)](_0x214ace,-0x407*-0x8+-0x2622+-0x2*-0x327)),0x1*0x1327+0x1*-0x1fb7+0xcf4);})['join']('\x20\x20'):'-';else{if(_0x2c575e[_0x4939c9(0x542)](_0x2c575e[_0x4939c9(0x79c)],_0x4939c9(0x3d1))){var _0x143cd7=_0x2f183d[_0x4939c9(0x889)]('+');_0x46d54b=_0xc4bd95(_0x3f0467,_0x143cd7[-0x1*-0x224f+-0x1d83+-0x4cc][_0x4939c9(0x208)+'Of'](_0x2c575e['nFiyR'])===0x65*-0x19+0x1375+0x8*-0x133?_0x2c575e[_0x4939c9(0xb0a)]:_0x2c575e[_0x4939c9(0xc75)],_0x2c575e[_0x4939c9(0x7c0)](parseInt,_0x143cd7[-0x1*-0x80f+-0x8*0x2ba+0x24b*0x6],0x1ab3+0x1*0x189b+-0x333e));}else _0x88e743=_0x1822bc['pitch'],_0x12ae90=_0x2d2185[_0x4939c9(0x94f)],_0x2c715a[_0x4939c9(0x764)+'e']=_0x2c575e[_0x4939c9(0x49e)](_0x2c575e['BeErb']('sette'+'r\x20pai'+'r\x20(',_0x1ea438[_0x4939c9(0x603)]),')');}}}}}}}}if(_0x46d54b!==_0x575099[_0x44650b][_0x4939c9(0xb42)+_0x4939c9(0x19b)+'t'])_0x575099[_0x44650b]['textC'+_0x4939c9(0x19b)+'t']=_0x46d54b;}}catch(_0x373798){}}function _0x1f048a(){var _0x172dd4=_0xc654b5;try{var _0xae8805=_0x49ada2();return _0xae8805&&_0xae8805['feet']?_0xae8805[_0x172dd4(0xa0c)][-0x87e*0x1+0x2*-0x998+0x1baf*0x1]:null;}catch(_0x1a6163){return null;}}var _0x40dcf9=0x1*0x1e2e+0x1*-0x220f+-0x1*-0x3e3+0.5,_0x3a0ef6=0x19be+-0x412*-0x1+-0x1dca+0.25,_0x240a80=0x1f4d+-0xe+-0x1f3e+0.8;function _0x1017b2(_0x382f75,_0x20abe1){var _0xb09103=_0xc654b5,_0x3279c4={'roUeW':'numbe'+'r'},_0x143fc8=[],_0x58d555,_0x276526,_0x239611=_0x20abe1!==null&&_0x20abe1!==undefined&&_0x2c575e['WKRDv'](isFinite,_0x20abe1);for(_0x58d555=0x1047+0xb*-0x323+0x123a;_0x58d555<_0x382f75[_0xb09103(0xb90)+'h'];_0x58d555++){var _0x1034ce=_0x382f75[_0x58d555]['v'];if(!_0x1034ce)continue;if(_0x1034ce[0x1*-0x9ef+-0x16*-0xb5+-0x59f]===-0xfb*0x2+-0x2*-0xb26+-0x1456&&_0x1034ce[0x29*0x6b+-0xdef+-0x333*0x1]===-0x4*0x665+0xa71+0x1*0xf23&&_0x2c575e[_0xb09103(0x73a)](_0x1034ce[0xed3+0x7c3+-0x1694],-0xd4a+-0x7*-0x45a+-0x112c))continue;if(_0x239611&&Math['abs'](_0x2c575e[_0xb09103(0x95d)](_0x1034ce[0x1b*0x119+0x7*0xc7+-0x1*0x2313],_0x20abe1))>_0x40dcf9)continue;_0x143fc8[_0xb09103(0x1e1)](_0x382f75[_0x58d555]);}if(!_0x143fc8[_0xb09103(0xb90)+'h'])for(_0x58d555=0xf62+0x8d*0x3f+-0x3215*0x1;_0x2c575e['AFjPA'](_0x58d555,_0x382f75['lengt'+'h']);_0x58d555++){var _0x39d475=_0x382f75[_0x58d555]['v'];if(!_0x39d475)continue;if(_0x39d475[-0x3*-0x2f7+-0x18af+0xfca]===-0x60c+-0x1*-0xf83+-0x977&&_0x2c575e[_0xb09103(0x553)](_0x39d475[0x2b*0x21+0x63d+-0xc9*0xf],-0x2014+0x1994+0x680)&&_0x2c575e['ucZfj'](_0x39d475[-0x23*0x46+-0x1*0x1c1b+0x25af],0xb*-0x171+-0x639+0x1614))continue;_0x143fc8['push'](_0x382f75[_0x58d555]);}if(!_0x143fc8['lengt'+'h']){if(_0x2c575e['HBJiQ']!=='IJknb')return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};else{_0x464436(_0x5ff234&&typeof _0x1d9429['on']==='boole'+'an'?_0x34fb7d['on']:_0x22a967['on'],_0x272c9d&&typeof _0x3b8118['facto'+'r']===_0x3279c4[_0xb09103(0xcdb)]?_0x133574[_0xb09103(0x7b7)+'r']:_0x14e9d2[_0xb09103(0x7b7)+'r']);return;}}var _0x330d93=[];for(_0x58d555=0x2*-0x1058+-0x2701+0x47b1;_0x58d555<_0x143fc8['lengt'+'h'];_0x58d555++){var _0x6d54d7=_0x143fc8[_0x58d555]['v'],_0x2f450c=-(-0x1a1c+-0xcf*0x2e+-0x3f4f*-0x1);for(_0x276526=-0x373+0x434*0x5+-0x1191;_0x276526<_0x330d93[_0xb09103(0xb90)+'h'];_0x276526++){var _0x23931e=_0x330d93[_0x276526]['c'][-0x26*-0x5e+-0x270a+0x1916]['v'],_0x417ba8=_0x6d54d7[-0x1e6f*0x1+0x2630+-0x7c1]-_0x23931e[0x131b+0x76e+-0x1a89],_0x1c30c7=_0x2c575e[_0xb09103(0x803)](_0x6d54d7[0x1*0x1abd+0x477*0x1+-0x475*0x7],_0x23931e[-0x1e9a+-0x59f*0x3+0xbde*0x4]),_0x481d88=_0x6d54d7[0x973+-0x2420+-0x3*-0x8e5]-_0x23931e[-0xb52+0x1dbf+0x73*-0x29];if(_0x2c575e['RuTYk'](_0x2c575e['yrXVG'](_0x417ba8,_0x417ba8),_0x1c30c7*_0x1c30c7)+_0x481d88*_0x481d88<=_0x3a0ef6){_0x2f450c=_0x276526;break;}}if(_0x2f450c===-(0xaee+0x1545+-0x2032))_0x330d93[_0xb09103(0x1e1)]({'c':[_0x143fc8[_0x58d555]]});else _0x330d93[_0x2f450c]['c']['push'](_0x143fc8[_0x58d555]);}var _0x272164=_0x330d93[0x1e58+-0x139d+-0xabb];for(_0x276526=0x951+-0x99+-0x8b7;_0x276526<_0x330d93['lengt'+'h'];_0x276526++)if(_0x2c575e[_0xb09103(0x3df)](_0x330d93[_0x276526]['c']['lengt'+'h'],_0x272164['c'][_0xb09103(0xb90)+'h']))_0x272164=_0x330d93[_0x276526];var _0x2ba97e=_0x272164['c'][0x182f+-0xb*-0x355+-0x3cd6],_0x783fdb=-(0xfe8*0x1+0x6da+0x19*-0xe9);for(_0x276526=-0x72*-0x40+0x84a*-0x2+0x6d*-0x1c;_0x2c575e[_0xb09103(0x567)](_0x276526,_0x272164['c'][_0xb09103(0xb90)+'h']);_0x276526++){if(_0xb09103(0x2b1)!=='wQOnN')return _0x1b0c22[_0xb09103(0x764)+'e']='plugi'+_0xb09103(0x728)+_0xb09103(0xcb3)+_0xb09103(0x2e6)+_0xb09103(0x4dd)+'me()',_0x1f8034;else{var _0x189e3=_0x272164['c'][_0x276526]['v'],_0x19bc95=_0x2c575e['CAcPw'](_0x189e3[-0x4bd+0x21f+-0x86*-0x5],_0x189e3[0x1a53+0x1644+-0x3097])+_0x189e3[-0x5*0x776+0x224d+0x303]*_0x189e3[0x17c*-0x6+-0x22d8+-0x2bc2*-0x1];if(_0x2c575e[_0xb09103(0x9ba)](_0x19bc95,_0x783fdb)||_0x2c575e[_0xb09103(0x91b)](_0x19bc95,_0x783fdb)&&_0x2c575e[_0xb09103(0x55f)](_0x189e3[-0xff1*-0x1+-0x1*-0xfbb+0x1*-0x1fab],_0x2ba97e['v'][-0x129e+0x1970+0x15d*-0x5])){if('UtEPe'===_0x2c575e[_0xb09103(0x875)])_0x783fdb=_0x19bc95,_0x2ba97e=_0x272164['c'][_0x276526];else return{'w':0x0,'h':0x0};}}}return{'pos':_0x2ba97e['v'],'posAt':_0x2ba97e['o'],'inBand':_0x239611?_0x143fc8['lengt'+'h']:-0xd73+-0x1e6e+0x2be1,'cluster':_0x272164['c'][_0xb09103(0xb90)+'h'],'groups':_0x330d93[_0xb09103(0xb90)+'h'],'reach':Math['sqrt'](_0x783fdb)};}function _0x49ada2(){var _0x51bb85=_0xc654b5,_0x3361bc={'nvHnu':function(_0x1b9731,_0x583f29){var _0x57d2aa=_0x3c88;return _0x2c575e[_0x57d2aa(0x76e)](_0x1b9731,_0x583f29);},'meyMu':function(_0x3fa6b5,_0x67b188){var _0x45ec2d=_0x3c88;return _0x2c575e[_0x45ec2d(0x7a9)](_0x3fa6b5,_0x67b188);}},_0x1972e5=_0xee751[_0x51bb85(0x6b2)+_0x51bb85(0xad7)+'ler'];if(!_0x1972e5||!_0x1972e5['ptr'])return null;var _0xf4e8b2=_0x5a4af7[_0x51bb85(0x6b2)+'ntrol'+_0x51bb85(0x4d7)]||[],_0x39924a=[];for(var _0x2d54da=-0x2673+-0x7d*0x44+0x47a7;_0x2d54da<_0xf4e8b2[_0x51bb85(0xb90)+'h'];_0x2d54da++){if(_0x2c575e['oURAQ'](_0x51bb85(0xc9f),'pznFW'))_0x398449(_0x52fc24);else{if(_0xf4e8b2[_0x2d54da][0x1*-0x255b+0x6c0+-0x51a*-0x6]!=='v3')continue;var _0x8188d=_0x578fb7(_0x1972e5[_0x51bb85(0xb52)],_0xf4e8b2[_0x2d54da][0x1*-0x115b+0x3fa*-0x2+0x194f],0x1bad+0x60f*0x2+-0x27c8);if(_0x8188d)_0x39924a['push']({'o':'0x'+_0xf4e8b2[_0x2d54da][-0x9fb+0x6f7*0x3+-0xfe*0xb]['toStr'+_0x51bb85(0xb19)](0x1012+0x6a9+0x33d*-0x7),'v':_0x8188d});}}var _0x107bb7=_0x1017b2(_0x39924a,null);if(!_0x107bb7['pos'])return null;var _0x33a6ae=_0x107bb7[_0x51bb85(0xb24)];return{'ptr':_0x1972e5['ptr'],'feet':_0x33a6ae,'posAt':_0x107bb7[_0x51bb85(0x9e3)],'inBand':_0x107bb7['inBan'+'d'],'cluster':_0x107bb7[_0x51bb85(0xbda)+'er'],'copies':_0x39924a[_0x51bb85(0xa42)+'r'](function(_0x454be7){var _0x5c841a=_0x51bb85;return _0x454be7['v'][0x1179+0x24b2+-0x362b]===_0x33a6ae[-0x1*0x22c6+-0x3dd+0x26a3]&&_0x3361bc['nvHnu'](_0x454be7['v'][-0x443*0x1+0x13ef*0x1+0xbf*-0x15],_0x33a6ae[-0x243*-0xb+-0xf9c+-0x944])&&_0x3361bc[_0x5c841a(0x830)](_0x454be7['v'][-0x1d9c+0xaae*0x1+0x12f0],_0x33a6ae[0x110b+-0x673+0x5*-0x21e]);})['map'](function(_0x43dea4){return _0x43dea4['o'];}),'eye':[_0x33a6ae[-0x5*-0x52+0x1ee3+-0x207d],_0x33a6ae[0x21b4+-0xe32+-0x1381]+_0x240a80,_0x33a6ae[0xb25*0x3+-0x1991+-0x1*0x7dc]],'reach':_0x107bb7[_0x51bb85(0x30d)],'pitch':_0x2c575e[_0x51bb85(0x24f)](_0x155fdf,_0x1972e5['ptr']+(0xe9b*-0x1+-0x2f*0x7a+0x266d),'f32'),'yaw':_0x155fdf(_0x1972e5[_0x51bb85(0xb52)]+(-0x15fd+0x307+-0xe*-0x175),_0x2c575e['GnIXc'])};}function _0x41694d(){var _0x52fcaa=_0xc654b5;if(_0x2c575e[_0x52fcaa(0x6b5)]==='bqFpo')for(var _0x416f54=-0x1c52+0xb78*0x1+-0x2cf*-0x6;_0x416f54<_0x46911f[_0x52fcaa(0xb90)+'h'];_0x416f54++){var _0x2b7513=_0x5c97f0(_0x532662+_0x2c575e[_0x52fcaa(0x7c0)](_0x5de894,_0xe1bdfc[_0x416f54][-0xd1e+-0x1d6b+0x2a89],0x178e+0x4*-0x342+0xa76*-0x1),_0x2c575e[_0x52fcaa(0x5f7)]);if(_0x2b7513)_0xed2088[_0x52fcaa(0x320)][_0x309ade[_0x416f54][0x1085+-0x2*0x11fd+-0x2f*-0x6a]]=_0x2c575e[_0x52fcaa(0x628)]('0x',_0x2c575e['INiXB'](_0x2b7513,0xd*-0x20b+-0x3*-0xabb+0xce*-0x7)['toStr'+'ing'](0x18cf*0x1+-0x5e*0x2+-0x1*0x1803));}else{var _0x450e45=_0x49ada2(),_0x3af46f=[],_0x3cea80=_0x48ecac[_0x52fcaa(0x3bb)+'nNetw'+_0x52fcaa(0xbe8)+'nc']||{},_0x44d8ee=Object[_0x52fcaa(0xbd7)](_0x3cea80);for(var _0x290b6e=0x4*-0x131+0x647*-0x5+0x2427;_0x290b6e<_0x44d8ee['lengt'+'h']&&_0x2c575e[_0x52fcaa(0x266)](_0x290b6e,0x1d*0x135+-0x1cbf+-0x622);_0x290b6e++){if(_0x2c575e['Enjqr'](_0x52fcaa(0xbe3),'JzLBc')){_0x245be9[_0x2e5d67]='0x'+_0x140829[_0x3aa374]['ptr'][_0x52fcaa(0x265)+'ing'](0x1a2+0x2135+-0x1*0x22c7);if(_0xb9894a[_0x3cc79d]['repla'+'ced'])_0x1bd343[_0x52fcaa(0x1e1)](_0x2b2397);}else{var _0x361cb0=_0x3cea80[_0x44d8ee[_0x290b6e]],_0x17e834=[],_0x2718b7=_0x5a4af7[_0x52fcaa(0x3bb)+_0x52fcaa(0x750)+_0x52fcaa(0xbe8)+'nc']||[];for(var _0x380c6f=0x315*-0x2+0xb1+-0x1d3*-0x3;_0x2c575e['CzjwS'](_0x380c6f,_0x2718b7['lengt'+'h']);_0x380c6f++){if(_0x2718b7[_0x380c6f][0x2*-0x1246+0x213b+0x352]!=='v3')continue;var _0x58f076=_0x578fb7(_0x361cb0[_0x52fcaa(0xb52)],_0x2718b7[_0x380c6f][-0x223a*-0x1+-0x630+-0x1c0a],-0x3*0x8ed+-0x22ac+0x3d76*0x1);if(_0x58f076)_0x17e834['push']({'o':'0x'+_0x2718b7[_0x380c6f][-0x25f*0xb+0x176c*-0x1+0x3181][_0x52fcaa(0x265)+'ing'](0x6b8*-0x2+0x76e*-0x2+0x5*0x5ac),'v':_0x58f076});}var _0x4abbf1=_0x1017b2(_0x17e834,_0x450e45?_0x450e45[_0x52fcaa(0xa0c)][-0x15ef+0x6bf+0xf31]:null),_0x1e719d=_0x4abbf1[_0x52fcaa(0xb24)];if(!_0x1e719d)continue;var _0x22738b={'ptr':_0x361cb0['ptr'],'x':_0x1e719d[-0xca4+0x1d30+-0x2c2*0x6],'y':_0x1e719d[0x2647*-0x1+-0x1374*0x1+0x14*0x2e3],'z':_0x1e719d[-0x349*0x7+-0xd27+-0x485*-0x8],'posAt':_0x4abbf1[_0x52fcaa(0x9e3)],'inBand':_0x4abbf1['inBan'+'d'],'cluster':_0x4abbf1[_0x52fcaa(0xbda)+'er'],'team':_0x2c575e[_0x52fcaa(0x488)](_0x155fdf,_0x2c575e[_0x52fcaa(0x62f)](_0x361cb0['ptr'],-0xed4+0x4*0x493+-0x320),_0x2c575e[_0x52fcaa(0xb15)]),'localFlag':_0x2c575e[_0x52fcaa(0xad2)](_0x155fdf,_0x361cb0[_0x52fcaa(0xb52)]+(-0x1029+0xa61*-0x2+0x1*0x2567),_0x52fcaa(0x72c))};if(_0x450e45){var _0x56e4c5=_0x1e719d[-0x4*-0x137+0x5*0x273+-0x111b]-_0x450e45['feet'][0x152d*0x1+-0x7*-0x2f2+-0x29cb],_0x52ae72=_0x2c575e['RQKzC'](_0x1e719d[0x19d8+0xd5f+0x1*-0x2735],_0x450e45['feet'][0x19f9+-0x1818+-0x1df]);_0x22738b['d']=Math['sqrt'](_0x2c575e[_0x52fcaa(0x6d5)](_0x56e4c5,_0x56e4c5)+_0x52ae72*_0x52ae72),_0x22738b[_0x52fcaa(0x5fe)+'ng']=_0x2c575e['OWYPo'](Math['atan2'](_0x56e4c5,_0x52ae72)*(0x26a9+-0x155e+-0x1097),Math['PI']);}_0x3af46f['push'](_0x22738b);}}return{'me':_0x450e45,'list':_0x3af46f};}}var _0x4d0575=null;function _0x3bb67a(){var _0x54e44f=_0xc654b5;if(_0x4d0575)return _0x4d0575;try{if(!document[_0x54e44f(0x44e)]||!document['body'][_0x54e44f(0x658)+_0x54e44f(0x61d)+'d'])return null;var _0x2496d2=document[_0x54e44f(0x7ec)+_0x54e44f(0x83e)+_0x54e44f(0x614)](_0x54e44f(0x624));_0x2496d2['id']=_0x54e44f(0x72f)+_0x54e44f(0x76d),_0x2496d2[_0x54e44f(0x7fb)]['cssTe'+'xt']=_0x2c575e['XTXsn']+(_0x54e44f(0x3ce)+_0x54e44f(0x1b5)+':rgba'+_0x54e44f(0xb36)+_0x54e44f(0x585)+_0x54e44f(0xc10)+_0x54e44f(0xac4)+'r:1px'+_0x54e44f(0x4da)+'d\x20rgb'+_0x54e44f(0x931)+_0x54e44f(0x566)+'177,.'+'4);bo'+_0x54e44f(0xaf9)+'radiu'+_0x54e44f(0x336)+'x;')+(_0x54e44f(0xaf2)+'ng:4p'+'x;fon'+'t:10p'+_0x54e44f(0x746)+_0x54e44f(0x39f)+_0x54e44f(0x347)+_0x54e44f(0xab1)+_0x54e44f(0xc69)+_0x54e44f(0x779)+_0x54e44f(0x262)+_0x54e44f(0xbaa)+'lor:#'+_0x54e44f(0xaf0)+'9;')+_0x2c575e[_0x54e44f(0x29d)],_0x2496d2[_0x54e44f(0xbc8)+_0x54e44f(0x41f)]=_0x2c575e[_0x54e44f(0xbeb)]+('<div\x20'+_0x54e44f(0x370)+_0x54e44f(0x9de)+_0x54e44f(0x156)+_0x54e44f(0x3e0)+'tyle='+_0x54e44f(0x515)+_0x54e44f(0xc73)+_0x54e44f(0xc14)+_0x54e44f(0x70e)+_0x54e44f(0x169)+'>');var _0x5ca48d={'cv':{'getContext':function(){var _0x54fb0b=_0x54e44f,_0x38f5ee={'DMkBu':function(_0x8f2777){var _0x1e6c48=_0x3c88;return _0x2c575e[_0x1e6c48(0x785)](_0x8f2777);},'VSUMJ':function(_0x509d07){return _0x509d07();},'OPhmA':function(_0x28419c,_0x38a37a,_0x4b5530){var _0x4b2d56=_0x3c88;return _0x2c575e[_0x4b2d56(0x470)](_0x28419c,_0x38a37a,_0x4b5530);}};if(_0x2c575e[_0x54fb0b(0x1da)](_0x54fb0b(0x2d7),_0x54fb0b(0x2d7))){if(_0x684531&&!_0x38f5ee['DMkBu'](_0x16e3dd)){_0x38f5ee['VSUMJ'](_0x1f7fd1);return;}_0x38f5ee[_0x54fb0b(0x666)](_0xdd49b1,!![],_0x42c8f6);}else return null;}},'el':_0x2496d2};document[_0x54e44f(0x44e)][_0x54e44f(0x658)+_0x54e44f(0x61d)+'d'](_0x2496d2),_0x4d0575={'el':_0x2496d2,'cv':_0x2496d2[_0x54e44f(0x5ef)+_0x54e44f(0x952)+_0x54e44f(0x3b5)](_0x54e44f(0xb7e)+'ra-es'+_0x54e44f(0x57c)),'lg':_0x2496d2[_0x54e44f(0x5ef)+_0x54e44f(0x952)+_0x54e44f(0x3b5)](_0x2c575e[_0x54e44f(0x140)])};if(!_0x4d0575['cv']||!_0x4d0575['cv'][_0x54e44f(0x742)+'ntext'])_0x4d0575=_0x5ca48d;return _0x4d0575;}catch(_0x12e02b){if(_0x2c575e[_0x54e44f(0x76e)](_0x2c575e['FmMKs'],'lKvoU'))return null;else{if(_0x5ce4cc[_0x25e62f][_0x54e44f(0x3a4)]&&_0x48df2e[_0x4b4792][_0x54e44f(0x3a4)]['appli'+'ed'])_0x4785b5++;}}}var _0x436d83=null;function _0x2ce1fe(){var _0x10f18e=_0xc654b5;if(_0x436d83)return _0x436d83;try{var _0x55a514=_0x2c575e[_0x10f18e(0x5a2)]['split']('|'),_0x709998=0x8a7+0x125d+-0x1b04;while(!![]){switch(_0x55a514[_0x709998++]){case'0':_0x4fbc6e['id']=_0x2c575e[_0x10f18e(0x28f)];continue;case'1':_0x4fbc6e['style']['cssTe'+'xt']='posit'+_0x10f18e(0x626)+_0x10f18e(0x7da)+'left:'+'0;top'+':0;z-'+'index'+_0x10f18e(0x4f1)+'48364'+_0x10f18e(0x2d4)+_0x10f18e(0x5c7)+_0x10f18e(0x773)+'s:non'+'e;';continue;case'2':if(!document[_0x10f18e(0x44e)]||!document[_0x10f18e(0x44e)]['appen'+_0x10f18e(0x61d)+'d'])return null;continue;case'3':_0x436d83={'cv':_0x4fbc6e};continue;case'4':return _0x436d83;case'5':document[_0x10f18e(0x44e)][_0x10f18e(0x658)+'dChil'+'d'](_0x4fbc6e);continue;case'6':var _0x4fbc6e=document['creat'+'eElem'+_0x10f18e(0x614)]('canva'+'s');continue;}break;}}catch(_0x21bced){if(_0x10f18e(0x9bf)!==_0x10f18e(0x589))return null;else{if(!_0x41cb85)return;_0x40bbf2=![],_0x4e05fa['style']['curso'+'r']=_0x10f18e(0x66e),_0x5a1cdb();}}}function _0x3b5896(_0x288ada){var _0x348e99=_0xc654b5;if(_0x348e99(0xc56)!=='nnQEe')try{var _0x392883=Math['max'](0xcfb+0x1efe+-0x4*0xafe,window[_0x348e99(0xbc8)+_0x348e99(0xb8d)]||document[_0x348e99(0x70f)+'entEl'+_0x348e99(0x740)][_0x348e99(0x8c3)+'tWidt'+'h']||0x1562+-0x10*0x1bf+-0x2*-0x347),_0xa6d94=Math['max'](0x20d7+0x87e*0x3+-0x3a50,window['inner'+_0x348e99(0x8f5)+'t']||document['docum'+_0x348e99(0x97b)+'ement'][_0x348e99(0x8c3)+_0x348e99(0x32c)+'ht']||-0x146b+0x1f87+-0x13c*0x9);if(_0x2c575e[_0x348e99(0x4c9)](_0x288ada['cv']['width'],_0x392883)||_0x288ada['cv']['heigh'+'t']!==_0xa6d94){if(_0x2c575e['XllMe']('HAjuy',_0x2c575e['cOahG'])){var _0x5464a2=(_0x348e99(0x33f)+_0x348e99(0x2dd)+'6|1')[_0x348e99(0x889)]('|'),_0x28de86=0x2427+0xa15*0x3+-0x4266;while(!![]){switch(_0x5464a2[_0x28de86++]){case'0':if(!_0x4429fa)return _0x2f19a7;continue;case'1':return _0x2f19a7;case'2':var _0x2f19a7={};continue;case'3':for(var _0x430bbf in _0x4429fa[_0x348e99(0x3d9)+'s'])_0x2f19a7[_0x2c575e['fMHYs'](_0x348e99(0xa88)+_0x348e99(0xb18),_0x430bbf)]=_0x4429fa[_0x348e99(0x3d9)+'s'][_0x430bbf];continue;case'4':var _0x4429fa=_0x2c575e[_0x348e99(0xc34)](_0x1c4bc8);continue;case'5':_0x2f19a7['Mouse'+_0x348e99(0xa95)+'ptr']=_0x4429fa[_0x348e99(0x7e6)+_0x348e99(0xb1a)];continue;case'6':if(_0x4429fa['camer'+'a'])_0x2f19a7[_0x2c575e[_0x348e99(0x185)]]=_0x4429fa[_0x348e99(0xa5c)+'a'];continue;}break;}}else _0x288ada['cv']['width']=_0x392883,_0x288ada['cv'][_0x348e99(0x719)+'t']=_0xa6d94;}return{'w':_0x392883,'h':_0xa6d94};}catch(_0x1e8bfc){if(_0x348e99(0x5a0)!==_0x348e99(0x5a0))_0xd6a276++,_0xc1e4f4[_0x348e99(0x6a9)]=!![];else return{'w':0x0,'h':0x0};}else return _0x2e2bd3(_0x2687d0);}function _0x247f3d(_0x24c7b6){var _0x4e4a48=_0xc654b5;if(_0x2c575e[_0x4e4a48(0x85b)]===_0x2c575e[_0x4e4a48(0x85b)]){var _0x33ea6d=_0x436d83;if(!_0x33ea6d)return;var _0x50fcd4=_0x33ea6d['cv']['getCo'+'ntext']&&_0x33ea6d['cv']['getCo'+_0x4e4a48(0x6bb)]('2d');if(!_0x50fcd4)return;var _0x167286=_0x3b5896(_0x33ea6d);_0x50fcd4[_0x4e4a48(0x844)+_0x4e4a48(0xc41)](-0x32e*-0x5+0x239*0x9+0x5b*-0x65,0x1341+-0x1*-0x10cb+-0x240c,_0x167286['w'],_0x167286['h']);if(!_0x5b3c46['boxes']||!_0x24c7b6||!_0x24c7b6['me'])return;var _0x5e5ba4=_0x24c7b6['me'],_0x52225a=null,_0x86254=_0x48ecac[_0x4e4a48(0x3bb)+'nNetw'+'orkSy'+'nc']||{},_0x40c484=Object[_0x4e4a48(0xbd7)](_0x86254);for(var _0x47e491=-0xfd6+0x4*0x709+-0x1*0xc4e;_0x47e491<_0x40c484[_0x4e4a48(0xb90)+'h'];_0x47e491++){var _0x24b5d0=_0x578fb7(_0x86254[_0x40c484[_0x47e491]][_0x4e4a48(0xb52)],-0x1*-0x1f97+-0x5f*0x37+-0xafa,-0xeb+0x23e+-0x150);if(_0x24b5d0&&_0x2c575e['WssZe'](_0x24b5d0[-0xf*0x1e2+0xf3a*0x1+0xd04],-0xce5+0xe12+-0x12d)&&_0x24b5d0[0xdc1+-0x260e+-0x16e*-0x11]===0x1e7e+0xd4f+-0x2bcd&&_0x24b5d0[0x1715*0x1+0x7*-0x11e+-0xf41]===-0x1ea+-0xb*-0x8a+0x202*-0x2){_0x52225a=_0x2c575e[_0x4e4a48(0xaa4)](_0x155fdf,_0x86254[_0x40c484[_0x47e491]]['ptr']+(-0x1d10+0xf73*-0x1+0x2cdb),_0x4e4a48(0x72c));break;}}for(var _0x346088=-0x10d6+-0x1ecf+0x2fa5;_0x346088<_0x24c7b6['list'][_0x4e4a48(0xb90)+'h'];_0x346088++){var _0xfcecde=_0x24c7b6[_0x4e4a48(0x46a)][_0x346088],_0x59763e=_0x52225a!==null&&_0xfcecde[_0x4e4a48(0x70c)]===_0x52225a,_0x331883=_0xbde371(_0x5e5ba4['eye'],[_0xfcecde['x'],_0xfcecde['y']-(0x1c19+-0x63*-0x4+-0x1da4),_0xfcecde['z']],_0x167286['w'],_0x167286['h']),_0x276ad2=_0xbde371(_0x5e5ba4[_0x4e4a48(0x8b6)],[_0xfcecde['x'],_0xfcecde['y']+(0x351*0x1+0x26db+-0x1516*0x2+0.8),_0xfcecde['z']],_0x167286['w'],_0x167286['h']);if(!_0x331883||!_0x276ad2)continue;var _0x11e8be=Math['min'](_0x331883['x'],_0x276ad2['x']),_0x52c07a=Math['max'](_0x331883['x'],_0x276ad2['x']),_0x23fa4d=Math[_0x4e4a48(0xbc2)](_0x331883['y'],_0x276ad2['y']),_0x2a2485=Math['max'](_0x331883['y'],_0x276ad2['y']),_0x4e4958=Math['max'](0xcfd+-0x3*-0x1e5+-0x12a9,Math['min'](0x1*-0x24c3+0x144c+0x10b3,_0x2c575e[_0x4e4a48(0x4c7)](_0x52c07a,_0x11e8be))),_0x899eb7=Math[_0x4e4a48(0x54c)](0xf0+0xb*0x160+-0x100a,Math[_0x4e4a48(0xbc2)](-0xa10+0x29*-0xa7+0x49*0x83,_0x2a2485-_0x23fa4d)),_0x225da9=_0x2c575e[_0x4e4a48(0x3f4)](_0x11e8be,_0x52c07a)/(-0x6ed+0x1*0xf53+-0x864),_0x1824fa=_0x2c575e[_0x4e4a48(0x167)](_0x2c575e[_0x4e4a48(0xa36)](_0x23fa4d,_0x2a2485),-0x3f7+0x3e4+0x15);_0x50fcd4[_0x4e4a48(0xa60)+_0x4e4a48(0x4dc)+'e']=_0x59763e?_0x2c575e['Lhiyr']:_0x4e4a48(0x534)+'255,1'+'10,11'+_0x4e4a48(0x3ea)+')',_0x50fcd4['lineW'+_0x4e4a48(0xc71)]=_0x59763e?0x1139+0xec*0x21+-0x1*0x2fa4:0x2669+-0x21*0x8d+-0x143a*0x1,_0x50fcd4['strok'+_0x4e4a48(0x78a)](_0x2c575e[_0x4e4a48(0x796)](_0x225da9,_0x2c575e[_0x4e4a48(0x87f)](_0x4e4958,-0x5*-0x689+-0x959*-0x1+-0x2a04)),_0x1824fa-_0x2c575e['RXbdB'](_0x899eb7,0x176c+0x3aa+-0xd8a*0x2),_0x4e4958,_0x899eb7);if(!_0x59763e){if(_0x2c575e[_0x4e4a48(0x5b9)](_0x4e4a48(0xa80),_0x2c575e[_0x4e4a48(0x277)]))return _0x4b8847[0x1*-0x18e1+-0x484*0x4+0x2af1]=_0x5f2cab,_0x36eb3d[0x2*-0x166+-0x260e+-0x2*-0x146d];else _0x50fcd4[_0x4e4a48(0x723)+'tyle']=_0x2c575e[_0x4e4a48(0xc80)],_0x50fcd4['font']=_0x4e4a48(0x340)+_0x4e4a48(0xcb5)+_0x4e4a48(0x262)+_0x4e4a48(0x6f5)+_0x4e4a48(0x630)+'s,mon'+_0x4e4a48(0xc76)+'e',_0x50fcd4['fillT'+_0x4e4a48(0x311)](Math['round'](_0xfcecde['d']||0x1bfa+-0x1b07+0x1*-0xf3)+'m',_0x2c575e['OupiK'](_0x225da9,_0x4e4958/(0x1bd4+0x8a4+-0x2476)),_0x2c575e['czbjj'](_0x1824fa,_0x899eb7/(0x2052+-0x2*0x983+-0xd4a))-(0xa*0x5+0x19b*-0x6+-0x29*-0x3b));}}}else{var _0x1ae934=_0x3306c8[_0x4e4a48(0x637)+'ime'];if(typeof _0x1ae934[_0x4e4a48(0x7b5)+'veGam'+'e']===_0x2c575e['OouUS']){var _0x29c23c=_0x1ae934[_0x4e4a48(0x7b5)+_0x4e4a48(0x29e)+'e']();if(_0x29c23c)return _0x3efb31['sourc'+'e']=_0x2c575e[_0x4e4a48(0x338)],_0x29c23c;}if(_0x1ae934[_0x4e4a48(0x187)])return _0x5c8310['sourc'+'e']='plugi'+'n._ru'+_0x4e4a48(0xcb3)+'._gam'+'e',_0x1ae934[_0x4e4a48(0x187)];}}function _0x8b00a(){var _0x26e80=_0xc654b5;if('vbuiM'!==_0x26e80(0xb3b))return _0x2c575e['TlmHS'](_0x4529d8['getIt'+'em'](_0x2415d4),'1');else{var _0x18eb70=_0x3bb67a();if(!_0x18eb70||!_0x18eb70['cv'])return;try{var _0x4cbfd1=_0x18eb70['cv']['getCo'+_0x26e80(0x6bb)]&&_0x18eb70['cv']['getCo'+_0x26e80(0x6bb)]('2d');if(!_0x4cbfd1)return;var _0x1da3f3=_0x18eb70['cv'][_0x26e80(0x1b3)],_0x53236f=_0x2c575e['RXbdB'](_0x1da3f3,-0xb*0x1f3+-0x1e15+0x3388),_0x5c8dc7=_0x41694d(),_0x347219=_0x5c8dc7['me'];_0x4cbfd1['clear'+_0x26e80(0xc41)](-0x1f0e+0x170a+0x804,-0x9e8+-0xb*0x1d6+0x1e1a,_0x1da3f3,_0x1da3f3),_0x4cbfd1[_0x26e80(0xa60)+'eStyl'+'e']=_0x2c575e['wWyox'],_0x4cbfd1[_0x26e80(0x225)+'idth']=0x3d8+-0x215a+0x1d83;for(var _0x27e3c3=0xeab*0x1+0xec8+-0x1d72;_0x27e3c3<=-0x2333+0x2123+0x213;_0x27e3c3++){_0x4cbfd1[_0x26e80(0x8a3)+'Path'](),_0x4cbfd1[_0x26e80(0x575)](_0x53236f,_0x53236f,_0x2c575e[_0x26e80(0xbbe)](_0x53236f-(0x16c5+-0xad8+-0xbe9),_0x27e3c3)/(0x25ac+0x221*-0x7+0x16c2*-0x1),-0x2cf*-0x4+0x2367+-0x2ea3,Math['PI']*(0xb*-0xa7+0x7c4+0x95*-0x1)),_0x4cbfd1['strok'+'e']();}_0x4cbfd1[_0x26e80(0x8a3)+_0x26e80(0x6eb)](),_0x4cbfd1[_0x26e80(0xc5d)+'o'](0x261e+-0x3ec+-0x222e,_0x53236f),_0x4cbfd1[_0x26e80(0xaaf)+'o'](_0x1da3f3-(-0x1*0x69d+0x2*0x91d+-0xb99),_0x53236f),_0x4cbfd1[_0x26e80(0xc5d)+'o'](_0x53236f,-0xc93*-0x2+0x4*-0x469+-0x77e),_0x4cbfd1[_0x26e80(0xaaf)+'o'](_0x53236f,_0x1da3f3-(0x7*-0x115+0xeb5+-0x38f*0x2)),_0x4cbfd1['strok'+'e']();if(!_0x347219){if(_0x18eb70['lg'])_0x18eb70['lg']['textC'+_0x26e80(0x19b)+'t']='';return;}var _0x22d451=_0x2c575e[_0x26e80(0x19d)](_0x53236f,-0x554+-0x5*0x314+-0xf*-0x162)/_0x5b3c46['span'],_0x19fcb2=null,_0x3a2b71=_0x48ecac['Photo'+_0x26e80(0x750)+_0x26e80(0xbe8)+'nc']||{},_0x3bafd9=Object['keys'](_0x3a2b71);for(var _0x4c7d74=-0x1bef*-0x1+-0xd0+0x35*-0x83;_0x4c7d74<_0x3bafd9[_0x26e80(0xb90)+'h'];_0x4c7d74++){var _0x5b1622=_0x2c575e[_0x26e80(0x703)](_0x578fb7,_0x3a2b71[_0x3bafd9[_0x4c7d74]][_0x26e80(0xb52)],-0x1e4b+0x2*0xe3e+0x203,0x10d5*-0x2+0xd3*-0x4+0x24f9*0x1);if(_0x5b1622&&_0x5b1622[0x4c+0x1cd2+-0x1*0x1d1e]===-0x1a9*-0x13+0x24e9+-0x2a2*0x1a&&_0x5b1622[0x8df+0x6ec*0x2+0x99*-0x26]===0x193f*0x1+-0x5*-0x376+0x1*-0x2a8d&&_0x5b1622[-0x17*-0xc1+0x4a2*0x6+-0x2d21]===-0xa*0x3ce+-0x151d+-0xbd5*-0x5){_0x19fcb2=_0x2c575e[_0x26e80(0xa69)](_0x155fdf,_0x2c575e[_0x26e80(0x625)](_0x3a2b71[_0x3bafd9[_0x4c7d74]]['ptr'],-0x23de+0x2261+0x1d5),'i32');break;}}var _0x3435da=-0x1a12+-0x512+0x1f24;for(var _0x403797=0x215e*-0x1+0x1fb0+0x1ae;_0x403797<_0x5c8dc7['list']['lengt'+'h'];_0x403797++){var _0x2c11c8=(_0x26e80(0x82c)+_0x26e80(0xaf8)+_0x26e80(0x46d)+_0x26e80(0xa3e)+'|9')['split']('|'),_0x23ae41=-0x1f95+0x11*0x1cf+0xd6*0x1;while(!![]){switch(_0x2c11c8[_0x23ae41++]){case'0':var _0x5e28d9=(_0x3662bc['x']-_0x347219[_0x26e80(0xa0c)][0x1*0x1b1a+0xe33+0x1*-0x294d])*_0x22d451,_0x4633ef=_0x2c575e[_0x26e80(0x2ae)](_0x2c575e['GvcWj'](_0x3662bc['z'],_0x347219['feet'][0x2146+0x1581*0x1+-0x36c5]),_0x22d451);continue;case'1':_0x4cbfd1[_0x26e80(0x8a3)+_0x26e80(0x6eb)]();continue;case'2':_0x4cbfd1['fill']();continue;case'3':var _0x3ab7a4=_0x19fcb2!==null&&_0x3662bc[_0x26e80(0x70c)]===_0x19fcb2;continue;case'4':var _0x5a5d0b=_0x53236f,_0x53fd4d=_0x53236f;continue;case'5':_0x4cbfd1[_0x26e80(0x723)+_0x26e80(0xbe7)]=_0x3ab7a4?_0x26e80(0x447)+'6a':'#ff6e'+'74';continue;case'6':_0x34a5db>_0x53236f-(-0xdb4+-0x1a2d+-0x27e7*-0x1)?(_0x5a5d0b=_0x53236f+_0x2c575e['QdtVc'](_0x2c575e[_0x26e80(0x2bf)](_0x5e28d9,_0x34a5db),_0x53236f-(-0x1566+0x1b30+-0x5c4)),_0x53fd4d=_0x2c575e[_0x26e80(0x315)](_0x53236f,_0x2c575e[_0x26e80(0x8fe)](_0x4633ef/_0x34a5db,_0x53236f-(-0x1*0x2641+-0x1e9e+0x44e5*0x1)))):(_0x5a5d0b=_0x2c575e['gPwaX'](_0x53236f,_0x5e28d9),_0x53fd4d=_0x53236f+_0x4633ef);continue;case'7':var _0x3662bc=_0x5c8dc7[_0x26e80(0x46a)][_0x403797];continue;case'8':_0x4cbfd1[_0x26e80(0x575)](_0x5a5d0b,_0x53fd4d,_0x3ab7a4?-0x11be+0x1e62*-0x1+0x65*0x7a:0x172a+0x2*0x5b9+-0x2299+0.20000000000000018,-0x3cf+0x1190+-0x7*0x1f7,Math['PI']*(0x11c0+0x231b+-0x34d9));continue;case'9':_0x3435da++;continue;case'10':var _0x34a5db=Math['sqrt'](_0x2c575e['GfYsm'](_0x2c575e[_0x26e80(0x641)](_0x5e28d9,_0x5e28d9),_0x4633ef*_0x4633ef));continue;}break;}}_0x4cbfd1['fillS'+'tyle']=_0x26e80(0x2aa)+'a8',_0x4cbfd1[_0x26e80(0x8a3)+'Path'](),_0x4cbfd1['arc'](_0x53236f,_0x53236f,-0x83e+0x2*0x84b+-0x855,-0x7a4+0x213c+0x9c*-0x2a,_0x2c575e[_0x26e80(0xb89)](Math['PI'],0x1*-0x16f7+-0x1b*-0xa4+0x5ad*0x1)),_0x4cbfd1[_0x26e80(0x7ab)](),_0x18eb70['lg']&&(_0x2c575e['XJvsN'](_0x2c575e[_0x26e80(0x8cd)],'rqbmM')?_0x18eb70['lg'][_0x26e80(0xb42)+'onten'+'t']=_0x2c575e[_0x26e80(0x92a)](_0x2c575e[_0x26e80(0x92a)](_0x2c575e[_0x26e80(0x21a)](_0x2c575e[_0x26e80(0x4a1)]+_0x3435da+_0x26e80(0x21c)+Math[_0x26e80(0x1b5)](_0x5b3c46['span']),'m'),_0x5b3c46[_0x26e80(0x671)]?_0x2c575e[_0x26e80(0x4b5)](_0x26e80(0x7ee)+'v\x20',Math[_0x26e80(0x1b5)](_0x521593[_0x26e80(0x8bd)]))+'°':''),_0x2c575e['cGZVD'](_0x19fcb2,null)?_0x2c575e[_0x26e80(0xbb6)](_0x26e80(0x9fe)+'am',_0x19fcb2):''):_0x38cf60[_0x26e80(0xafb)+_0x26e80(0xa67)][_0x26e80(0x1e1)](_0x26e80(0x3b8)+_0x26e80(0x352)+_0x26e80(0x9ad)+_0x26e80(0x8e3)+_0x26e80(0xa91)+_0x26e80(0x6c6)+_0x26e80(0x15d)+_0x26e80(0x414)+_0x26e80(0x50f)+_0x26e80(0x67a)+_0x26e80(0x54e)+'\x20is\x20r'+_0x26e80(0x420)+_0x26e80(0x461)+_0x26e80(0x13b)));}catch(_0xfb1729){}}}function _0x4759e7(){var _0x91cdd6=_0xc654b5,_0x407fea=_0x48ecac['Photo'+_0x91cdd6(0x750)+'orkSy'+'nc']||{};if(!Object[_0x91cdd6(0xbd7)](_0x407fea)['lengt'+'h'])return![];return!!_0x2c575e[_0x91cdd6(0x35f)](_0x49ada2);}function _0x342983(_0x1a4f9b){var _0x374be6=_0xc654b5;try{if(_0x2c575e[_0x374be6(0x47a)](_0x2c575e[_0x374be6(0xa55)],_0x374be6(0xa51))){if(!_0x58c545[_0x496efe])_0x54acc3[_0x1f4309]={'ptr':_0xb8b720,'kind':_0x489b5a,'firstSeen':_0x44c1be[_0x374be6(0x53a)](),'hits':0x0};_0x9ecc2f[_0x56b8b1]['hits']++;}else{var _0x4b9e2a=_0x4d0575;if(_0x4b9e2a&&_0x4b9e2a['el'])_0x4b9e2a['el'][_0x374be6(0x7fb)][_0x374be6(0x305)+'ay']=_0x1a4f9b?'':_0x2c575e[_0x374be6(0x688)];var _0x25e1ef=_0x436d83;if(_0x25e1ef&&_0x25e1ef['cv'])_0x25e1ef['cv']['style'][_0x374be6(0x305)+'ay']=_0x1a4f9b?'':_0x2c575e[_0x374be6(0x688)];}}catch(_0x4d3f37){}}function _0x41cbb1(){var _0xc7f883=_0xc654b5;if(_0x2c575e[_0xc7f883(0x539)](_0x2c575e[_0xc7f883(0x190)],_0xc7f883(0x5ac))){var _0x1e5d76=_0x176d97[_0xc7f883(0x8c4)](-0x63*-0x6+-0x2051*-0x1+-0x1*0x22a3,0x159f+-0x12*-0x15b+-0x1*0x2cd9);if(_0x258baf[_0xc7f883(0x208)+'Of'](_0x1e5d76)===-(-0x1*0x12f9+-0x946+0x1c40)&&_0x41b65b['lengt'+'h']<-0x259f*0x1+0x774*0x1+0x1e67)_0x3a9737[_0xc7f883(0x1e1)](_0x1e5d76);}else{if(!_0x5b3c46['on']||!_0x2c575e['ZMcFg'](_0x4759e7)){_0x342983(![]),setTimeout(_0x41cbb1,-0x22a7+0xb02+-0x18d1*-0x1);return;}_0x342983(!![]),_0x2c575e[_0xc7f883(0xb5a)](_0x252d53),_0x3bb67a();if(_0x5b3c46['boxes'])_0x2c575e[_0xc7f883(0x782)](_0x2ce1fe);var _0x60108e=null;try{_0x60108e=_0x41694d();}catch(_0xcbb385){}try{_0x8b00a();}catch(_0x27b7a3){}try{_0x2c575e[_0xc7f883(0x9bb)](_0x247f3d,_0x60108e);}catch(_0x350aab){}setTimeout(_0x41cbb1,0x90a+-0x1*-0x21f+-0xaf7);}}function _0x421c0f(){var _0x4eb071=_0xc654b5,_0x12c4dd={'qZttl':function(_0x2ffdbd,_0x51827f){var _0x3ca97c=_0x3c88;return _0x2c575e[_0x3ca97c(0x149)](_0x2ffdbd,_0x51827f);},'zYZKt':'wJssm','jbWNf':function(_0xec188b){return _0xec188b();},'CZhGs':function(_0x46977e,_0x3d3836,_0x1a9172,_0x478a90,_0x157083){var _0xabc45f=_0x3c88;return _0x2c575e[_0xabc45f(0xbd9)](_0x46977e,_0x3d3836,_0x1a9172,_0x478a90,_0x157083);},'ipzOa':function(_0x553f8f,_0x5a9b64){return _0x553f8f+_0x5a9b64;},'nqxny':_0x4eb071(0xa4f),'TwXyh':function(_0x1a7d5d,_0x5d6252){var _0x252b84=_0x4eb071;return _0x2c575e[_0x252b84(0x8b4)](_0x1a7d5d,_0x5d6252);},'jKNAa':function(_0x1e77d2,_0x14ea4c){var _0x506f3b=_0x4eb071;return _0x2c575e[_0x506f3b(0x7e2)](_0x1e77d2,_0x14ea4c);},'PnPgj':function(_0x3026f0,_0x5f0037){return _0x3026f0+_0x5f0037;},'BeFuB':_0x2c575e[_0x4eb071(0xb2a)],'xkjzr':function(_0x5341e6,_0x1f46b6){return _0x5341e6(_0x1f46b6);},'QBKkR':function(_0x5c68fa,_0x40ff1a){return _0x5c68fa<_0x40ff1a;},'GhjTK':_0x4eb071(0x2fa)+_0x4eb071(0x137)+_0x4eb071(0x647)+'z\x20—\x20','UDvJq':function(_0x283e47,_0x3cfed9){return _0x283e47===_0x3cfed9;},'IWYKE':'\x20acti'+'ve','Qhoad':function(_0x136b59,_0x38fc87){var _0x21c6a7=_0x4eb071;return _0x2c575e[_0x21c6a7(0x8c0)](_0x136b59,_0x38fc87);},'CGgMT':function(_0x19fcf2,_0x5bd16e){return _0x19fcf2-_0x5bd16e;},'rsHLS':function(_0x3a87a8,_0x789e4){return _0x3a87a8-_0x789e4;},'ODJgS':function(_0x4409b6,_0x2e0cf5){return _0x4409b6*_0x2e0cf5;}};if(_0x2c575e[_0x4eb071(0x85d)](_0x2c575e['qvRdr'],_0x2c575e['qvRdr'])){var _0x1b1c24=('2|6|7'+'|0|1|'+_0x4eb071(0xb91)+'0|8|4'+'|5')[_0x4eb071(0x889)]('|'),_0x49ec0d=0x1b21+0x21bf+-0xf38*0x4;while(!![]){switch(_0x1b1c24[_0x49ec0d++]){case'0':_0x446fe1=_0x15f0d1['creat'+_0x4eb071(0x165)+'in']({'name':_0x2c575e['LPqEG'],'version':_0xb67945,'referencedAssemblies':_0x5dbeb2['slice']()});continue;case'1':_0x102103['ok']=!![];continue;case'2':var _0x15f0d1=_0x2f11e9[_0x4eb071(0x2f5)+_0x4eb071(0x5ee)+_0x4eb071(0xa19)]&&_0x103de4['Unity'+'WebMo'+_0x4eb071(0xa19)][_0x4eb071(0x4e0)+'me'];continue;case'3':_0xe344f1();continue;case'4':_0x2c575e['YWKTo'](_0x1da4fd);continue;case'5':_0x457ebc[_0x4eb071(0x556)+_0x4eb071(0x8d7)]=!![];continue;case'6':if(!_0x15f0d1||typeof _0x15f0d1[_0x4eb071(0x7ec)+'ePlug'+'in']!==_0x4eb071(0x24b)+'ion'){_0x54316c[_0x4eb071(0x384)]=_0x2c575e[_0x4eb071(0xc30)];return;}continue;case'7':_0x2ae200[_0x4eb071(0xaeb)+_0x4eb071(0x751)]=!![];continue;case'8':_0x8eec19[_0x4eb071(0x4f7)+_0x4eb071(0x9e2)+'tered']=_0xbbab['lengt'+'h'];continue;case'9':try{var _0x306982=_0x3006aa[_0x4eb071(0x2f5)+_0x4eb071(0x5ee)+'dkit'][_0x4eb071(0x4e0)+'me'];_0x306982[_0x4eb071(0x951)+_0x4eb071(0x496)+'g']=_0x2f6b5c+':'+_0xff4c5c[_0x4eb071(0x4df)+'m']()[_0x4eb071(0x265)+'ing'](0x1bca+-0xfc5+-0xbe1*0x1)['slice'](0x40d*0x7+0x1*-0x179+0x5*-0x560,0x180a+0xc08+0x1*-0x2408),_0x3308d8=_0x306982['__sak'+_0x4eb071(0x496)+'g'];}catch(_0x85b9d0){}continue;case'10':_0x2c575e[_0x4eb071(0x35b)](_0x103206);continue;}break;}}else{var _0xa5fb4d=window['Unity'+_0x4eb071(0x5ee)+_0x4eb071(0xa19)]&&window['Unity'+_0x4eb071(0x5ee)+_0x4eb071(0xa19)]['Runti'+'me']||null,_0x1ac8db=_0xa5fb4d&&_0xa5fb4d['il2Cp'+_0x4eb071(0xaa5)+_0x4eb071(0x311)],_0x261d1f=_0x1ac8db&&_0x1ac8db['scrip'+_0x4eb071(0x21b)],_0x410d20={},_0x5e871c=[];for(var _0x504d70 in _0xee751){_0x410d20[_0x504d70]='0x'+_0xee751[_0x504d70][_0x4eb071(0xb52)][_0x4eb071(0x265)+_0x4eb071(0xb19)](-0x1*0x139+0x96*-0x29+-0x13*-0x155);if(_0xee751[_0x504d70]['repla'+_0x4eb071(0x3fc)])_0x5e871c['push'](_0x504d70);}var _0x424fce={};for(var _0x43d783 in _0xee751)_0x424fce[_0x43d783]=_0x2c575e[_0x4eb071(0xa01)](_0x1d8d63,_0xee751[_0x43d783][_0x4eb071(0xb52)]);var _0x449bfe={},_0xbed2fa=null;try{_0x449bfe=_0x2c575e[_0x4eb071(0x8f0)](_0x9041fd);}catch(_0x5e2494){if(_0x2c575e['zfddE']===_0x2c575e[_0x4eb071(0x895)])try{var _0x224bf3=_0x2eb1ca['getIt'+'em'](_0x3834fa);if(!_0x224bf3)return;var _0x19bd2e=_0x106e20[_0x4eb071(0x1a8)](_0x224bf3);if(_0x19bd2e&&typeof _0x19bd2e['x']===_0x4eb071(0x973)+'r'&&typeof _0x19bd2e['y']==='numbe'+'r')_0x537492[_0x4eb071(0xb24)]=_0x19bd2e;}catch(_0xed5f75){}else _0xbed2fa=String(_0x5e2494&&_0x5e2494[_0x4eb071(0xa26)+'ge']||_0x5e2494);}var _0x522d8b={'version':_0x24ba5f,'when':new Date()[_0x4eb071(0x65c)+_0x4eb071(0x3bc)+'g'](),'elapsedMs':_0x2c575e['yKJMc'](Date[_0x4eb071(0x53a)](),_0x3b0a0e),'frame':location[_0x4eb071(0x92f)][_0x4eb071(0x8c4)](-0x1ce1+0x7*-0x4e9+0xfd0*0x4,0x121*0x5+0x25e7+-0x397*0xc),'host':_0x44a57f,'frameRole':_0x23662e,'uwmk':!!_0xa5fb4d,'il2CppContext':!!_0x1ac8db,'typeCount':_0x261d1f?Object['keys'](_0x261d1f)['lengt'+'h']:null,'arm':_0x5aad2a,'assemblies':_0xeca0ad,'hooksTotal':_0x32ffa3['lengt'+'h'],'hooksApplied':_0x4fdf02(),'hooksResolved':_0x2c575e['FezVO'](_0x2cb4f2),'hooksRegisteredAtArm':_0x5aad2a[_0x4eb071(0x4f7)+_0x4eb071(0x9e2)+_0x4eb071(0x8ee)]||-0x191*-0x1+-0x1*0x439+-0x154*-0x2,'hookErrors':_0x4d0530['slice'](-0x1c85+-0x6*-0x3f5+0x4c7,-0x2*-0x115d+0x206c+-0x47*0xf2),'instances':_0x410d20,'classNames':_0x424fce,'instancesReplaced':_0x5e871c,'hookFireProof':_0x192f0d,'survey':_0x449bfe,'actkKeys':_0x2c088c,'surveyRows':Object[_0x4eb071(0xbd7)](_0x449bfe)[_0x4eb071(0x404)+'e'](function(_0x28f8f2,_0x5cd057){var _0x4b90a1=_0x4eb071,_0x2b94aa={'xoOHD':_0x2c575e[_0x4b90a1(0x4f4)]};if(_0x4b90a1(0xbf4)==='xAfoA'){var _0x41f38a=_0x238ca7['creat'+_0x4b90a1(0x83e)+'ent'](_0x2b94aa['xoOHD']);_0x41f38a[_0x4b90a1(0x240)]=_0x1a00a8;if(!_0x5221d6['body'])return;_0x36eabb['body']['appen'+'dChil'+'d'](_0x41f38a),_0x41f38a['selec'+'t']();try{_0x2555de[_0x4b90a1(0xc9a)+_0x4b90a1(0x7c4)+'d']('copy'),_0x151560();}catch(_0x52d5ff){}_0x41f38a['remov'+'e']();}else return _0x2c575e['QXMyk'](_0x28f8f2,_0x449bfe[_0x5cd057]['lengt'+'h']);},-0x2*-0x895+0xb4d+0x15*-0x15b),'reads':{'ok':_0x39ad13['ok'],'failed':_0x39ad13['faile'+'d'],'lastError':_0x39ad13[_0x4eb071(0x2c9)+_0x4eb071(0x7c2)],'source':_0x39ad13[_0x4eb071(0x764)+'e']},'identity':_0x482c5c(),'globals':_0x2c30c9(),'wasmMemory':{'captured':!!_0x14884d,'atMs':_0x5cc048,'bytes':(function(){var _0x5d04ac=_0x4eb071,_0x2daac4={'DIWrn':function(_0x53a332){return _0x53a332();},'VuHJl':function(_0x7ddbe7,_0x2b7f83){var _0x2eb353=_0x3c88;return _0x12c4dd[_0x2eb353(0x345)](_0x7ddbe7,_0x2b7f83);},'bkIWj':function(_0x504190,_0x5a8e71,_0x3824e2){return _0x504190(_0x5a8e71,_0x3824e2);}};if('NxXap'!==_0x12c4dd[_0x5d04ac(0x375)])try{return _0x14884d&&_0x14884d['buffe'+'r']?_0x14884d[_0x5d04ac(0xaba)+'r'][_0x5d04ac(0x2a0)+_0x5d04ac(0x662)]:-0x1285+-0x1*-0x1e29+-0x14*0x95;}catch(_0x30c73f){return 0x10b*0x1a+-0x3*-0x481+-0x3*0xd8b;}else{if(!_0x3dc840[_0x5d04ac(0xb90)+'h'])try{_0x2daac4[_0x5d04ac(0xbab)](_0x2658b3);}catch(_0x5ba0f1){}_0x2ba493++,_0x2daac4[_0x5d04ac(0xc4c)](_0x1ac636,_0x1570c4());if(!_0x3d6a8a['lengt'+'h']&&_0x39eaff<-0x13b1*-0x1+0x238b*0x1+-0xd84*0x4)_0x135fbf(_0x54da5e,-0x723+0xebf+0x2*0x1a);else{if(!_0x5f509[_0x5d04ac(0xbd7)](_0x2ba39c)[_0x5d04ac(0xb90)+'h']&&_0x280e60<0x19b6+-0xfcd+-0x1*0x8bd)_0x5474ad(_0x155a66,-0x7c2+0x1*0x18d+-0x1*-0xe05);else _0x2daac4[_0x5d04ac(0x686)](_0x3c4424,_0x3fc1a2,-0x1*0x17d6+-0x25b*-0xc+0x42);}}}()),'exportKeys':_0x1cbec3},'diff':_0x25ee8c['slice'](0x1*0x7+-0xc5b*0x1+0x3*0x41c,0x36*0x2a+0x64b+-0xeff),'speed':{'on':_0x4f804c['on'],'factor':_0x4f804c[_0x4eb071(0x7b7)+'r'],'writes':_0x42255,'scaled':_0x214f1e[_0x4eb071(0x8c4)](0x212*0xe+-0x9e1+-0x1*0x131b,-0xc*-0x3+-0x5b2+0x59e),'skipped':_0x1915ae[_0x4eb071(0x8c4)](-0xb59+0x16ed+-0xb94,0x2*0xb29+-0x12+-0x8e*0x28)},'esp':_0x1fd236(),'view':_0x216ea1(),'angles':(function(){var _0x2ca913=_0x4eb071,_0x291bd2={'IioeN':function(_0x49843c){return _0x12c4dd['jbWNf'](_0x49843c);}},_0x257983=_0x183507(),_0x3ea9c1=null,_0x31d9a4=null,_0x4e6c70=_0x12c4dd[_0x2ca913(0x83d)](_0x49ada2);if(_0x4e6c70){var _0x9f5005=_0x12c4dd[_0x2ca913(0x41d)](_0xbde371,_0x4e6c70['eye'],[_0x4e6c70[_0x2ca913(0x8b6)][-0x1b95+0xeb3+0xce2],_0x4e6c70['eye'][-0x174c+0x86a+0xee3],_0x12c4dd[_0x2ca913(0x611)](_0x4e6c70['eye'][0x127d+0xa92+0x9af*-0x3],-0x4*0x164+-0x241*-0x1+-0x1a8*-0x2)],-0x176*-0x1+0x45*-0x35+0x10bb,-0x25e1+-0x10aa+-0xd*-0x47f);_0x9f5005&&(_0x12c4dd[_0x2ca913(0xcbf)]!==_0x12c4dd[_0x2ca913(0xcbf)]?_0x43872b[_0x2ca913(0xb42)+_0x2ca913(0x19b)+'t']=_0x25bee5(_0x3a438e[_0x2ca913(0x560)]['facto'+'r'])['toFix'+'ed'](-0x29*-0xe3+0xc33*0x1+-0x308d)+'x':(_0x3ea9c1=_0x12c4dd[_0x2ca913(0x745)](_0x9f5005['x'],0x194e+0x199*0x3+-0x8bb*0x3),_0x31d9a4=_0x12c4dd['TwXyh'](_0x9f5005['y'],0x12cb+0x1*-0x188a+-0x9a7*-0x1)));}var _0x4ce50c=null,_0xf8596c=null;if(_0x4e6c70){var _0x376bc3=_0xbde371(_0x4e6c70[_0x2ca913(0x8b6)],[_0x4e6c70[_0x2ca913(0x8b6)][0xf80+0x3*0x13+-0x73*0x23],_0x12c4dd[_0x2ca913(0x611)](_0x4e6c70['eye'][0x1*0x20da+0x1264+0x333d*-0x1],0xf6f+0x1*0x1b16+-0x2a7b),_0x12c4dd[_0x2ca913(0x611)](_0x4e6c70[_0x2ca913(0x8b6)][0xb41*-0x3+-0x1*-0xa52+-0x1773*-0x1],0x4cf+0x32c*-0x8+0x149b)],0x1556+-0x2*0x31b+-0x59c*0x2,0xc54+-0x6*0x2a5+0x772);if(_0x376bc3)_0x4ce50c=_0x12c4dd[_0x2ca913(0x87a)](_0x376bc3['y'],-0x1*0x217+0xd*-0x2c5+0x38*0xc0);var _0x175a33=_0xbde371(_0x4e6c70[_0x2ca913(0x8b6)],[_0x4e6c70[_0x2ca913(0x8b6)][-0x1919+-0x1642+0x2f5b],_0x4e6c70['eye'][-0xd*0x3+-0x3*0x902+-0x62*-0x47]-(-0xf*0x119+0x24a8+-0x1427),_0x12c4dd[_0x2ca913(0x6c7)](_0x4e6c70[_0x2ca913(0x8b6)][-0x15ef+0x1eb1+-0x8c0],0x154+-0xe6c+0xd22)],0xa55+0x2*0xcfb+-0x2063,-0x1805*0x1+-0x22*-0xa3+0x647);if(_0x175a33)_0xf8596c=_0x175a33['y']/(0x711+-0x108b+-0x3*-0x476);}return{'identified':_0x22fe88[_0x2ca913(0xb8a)+'ified'],'why':_0x22fe88['why'],'source':_0x22fe88[_0x2ca913(0x764)+'e'],'setterPair':(function(){var _0x540515=_0x2ca913,_0x31dd51=_0x291bd2[_0x540515(0xb97)](_0x1164df);return _0x31dd51?{'a':_0x31dd51[_0x540515(0xb73)],'b':_0x31dd51[_0x540515(0x4ee)],'hits':_0x31dd51['hits'],'order':_0x31dd51[_0x540515(0x603)]}:null;}()),'yawAt':_0x22fe88['yawGe'+_0x2ca913(0xbb2)]||_0x12c4dd[_0x2ca913(0x7e8)],'pitchAt':_0x22fe88[_0x2ca913(0xa7f)+_0x2ca913(0x691)+'r']||_0x2ca913(0x58e)+_0x2ca913(0x1a9)+'s)','getters':_0x22fe88['gette'+'rs'],'rawPitch':_0x22fe88[_0x2ca913(0x84f)+'tch'],'rawYaw':_0x22fe88[_0x2ca913(0x498)+'w'],'pitch':_0x22fe88['pitch'],'yaw':_0x22fe88[_0x2ca913(0x94f)],'legacyOffsetsCleared':_0x11b805,'fov':_0x521593['fov'],'fovSane':_0x521593['fov']>=-0x2*-0x4e7+0xb*0x12a+-0x166*0x10&&_0x521593[_0x2ca913(0x8bd)]<=-0x282+-0x1ea2+0x2192,'centreX':_0x3ea9c1,'centreY':_0x31d9a4,'aboveY':_0x4ce50c,'belowY':_0xf8596c};}()),'fov':_0x521593[_0x4eb071(0x8bd)],'espView':{'on':_0x5b3c46['on'],'boxes':_0x5b3c46['boxes'],'span':_0x5b3c46[_0x4eb071(0x383)]},'local':(function(){var _0x4d3238=_0x4eb071;if(_0x2c575e[_0x4d3238(0x9db)]!=='tvHzy'){var _0x437685=_0x2c575e['wbiGU'](_0x49ada2);if(!_0x437685)return null;return{'ptr':_0x2c575e['gewds']('0x',_0x437685[_0x4d3238(0xb52)][_0x4d3238(0x265)+_0x4d3238(0xb19)](0x1*0x4cc+0xc97+-0x1153)),'feet':_0x437685[_0x4d3238(0xa0c)],'eye':_0x437685[_0x4d3238(0x8b6)],'posAt':_0x437685[_0x4d3238(0x9e3)],'copies':_0x437685['copie'+'s'],'cluster':_0x437685[_0x4d3238(0xbda)+'er'],'eyeHeight':_0x240a80,'pitch':_0x437685[_0x4d3238(0xa7f)],'yaw':_0x437685[_0x4d3238(0x94f)],'reach':_0x437685['reach']};}else{var _0x5c9159=(_0x4d3238(0xa9c)+_0x4d3238(0x8ce)+_0x4d3238(0x4a5)+'|2|10'+'|5')[_0x4d3238(0x889)]('|'),_0x38b64d=-0x8*0x29+-0x26a8+0x27f0;while(!![]){switch(_0x5c9159[_0x38b64d++]){case'0':_0x58d20d[_0x4d3238(0x708)]=[];continue;case'1':var _0x2a01d6=[];continue;case'2':try{_0x2a01d6=_0x12c4dd['xkjzr'](_0x1f0b8f,_0x1a7ebb);}catch(_0x47ceb8){_0x2a01d6=[];}continue;case'3':for(var _0x3763b4=0x2700+-0x615+-0x9f*0x35;_0x3763b4<_0x27ffa7['lengt'+'h'];_0x3763b4++)if(_0x23fb28[_0x3763b4]['id']===_0xcb72f2)_0x1e858e=_0x21371f[_0x3763b4];continue;case'4':_0x460c63['cat']=_0x8a69df;continue;case'5':for(var _0x5e14b7=-0x903+-0x3*-0xc0f+-0x3d*0x72;_0x12c4dd['QBKkR'](_0x5e14b7,_0x2a01d6[_0x4d3238(0xb90)+'h']);_0x5e14b7++)_0x5447e9['cols']['appen'+'dChil'+'d'](_0x2a01d6[_0x5e14b7]);continue;case'6':_0x23752d['head'][_0x4d3238(0xb42)+_0x4d3238(0x19b)+'t']=_0x12c4dd[_0x4d3238(0x6c7)](_0x12c4dd['GhjTK'],_0x1e858e&&_0x1e858e[_0x4d3238(0x761)]||'?');continue;case'7':for(var _0x258c08 in _0x4059b0[_0x4d3238(0xb66)+'ns']){if(_0x318968[_0x4d3238(0xb66)+'ns'][_0x258c08]['class'+'List'])_0x1cf48f[_0x4d3238(0xb66)+'ns'][_0x258c08]['class'+'Name']='mn-ta'+'b'+(_0x12c4dd[_0x4d3238(0x39e)](_0x258c08,_0x5e5bb0)?_0x12c4dd[_0x4d3238(0x621)]:'');}continue;case'8':if(!_0x208b71[_0x4d3238(0x85e)])return;continue;case'9':var _0x1e858e=null;continue;case'10':while(_0x5c05d0['cols'][_0x4d3238(0x1ca)+'Child'])_0x9804db[_0x4d3238(0x85e)]['remov'+_0x4d3238(0x477)+'d'](_0x7650f9[_0x4d3238(0x85e)][_0x4d3238(0x1ca)+_0x4d3238(0x2be)]);continue;}break;}}}()),'uwmkLog':_0x4e837a[_0x4eb071(0x8c4)](0x1110+-0x92f*-0x3+-0x9*0x4f5,0x1c61+0x1d*0x131+-0x3eda),'warnings':[]};if(_0xbed2fa)_0x522d8b['warni'+_0x4eb071(0xa67)][_0x4eb071(0x1e1)](_0x2c575e['sHons'](_0x2c575e[_0x4eb071(0x34f)],_0xbed2fa));if(_0x5aad2a['error'])_0x522d8b['warni'+_0x4eb071(0xa67)][_0x4eb071(0x1e1)](_0x2c575e['cxHDa'](_0x2c575e[_0x4eb071(0x4fb)],_0x5aad2a['error']));_0x2c575e[_0x4eb071(0x5ed)](_0x522d8b[_0x4eb071(0x981)+'yRows'],-0x67e*0x1+0x2464+0x1*-0x1de6)&&Object['keys'](_0x522d8b[_0x4eb071(0x142)+'nces'])['lengt'+'h']>0xa36+0x156*0x2+-0xce2&&_0x522d8b[_0x4eb071(0xafb)+_0x4eb071(0xa67)]['push'](_0x2c575e[_0x4eb071(0x71d)](_0x2c575e[_0x4eb071(0xb64)](_0x2c575e[_0x4eb071(0x5f2)],Object[_0x4eb071(0xbd7)](_0x522d8b['insta'+_0x4eb071(0x143)])[_0x4eb071(0xb90)+'h']),_0x4eb071(0x5af)+_0x4eb071(0xa9a)+'\x20but\x20'+_0x4eb071(0x3a2)+_0x4eb071(0x689)+'lds.\x20')+(_0x39ad13['lastE'+_0x4eb071(0x7c2)]?_0x2c575e[_0x4eb071(0xcc4)]+_0x39ad13[_0x4eb071(0x2c9)+'rror']:'No\x20re'+'ad\x20fa'+'iled,'+_0x4eb071(0xbdc)+_0x4eb071(0xaad)+_0x4eb071(0x7dd)+'t\x20was'+_0x4eb071(0xa86)+'ped\x20b'+'y\x20typ'+'e.'));_0x522d8b[_0x4eb071(0xb8a)+'ity']&&_0x522d8b['ident'+_0x4eb071(0x20a)][_0x4eb071(0x9b2)+_0x4eb071(0x61b)]===![]&&(_0x4eb071(0x7f3)==='dgxUk'?(_0x50f2bd=_0x2c80e8+_0x12c4dd[_0x4eb071(0xa2c)](_0x4dda18,_0x1190f6)*_0x12c4dd[_0x4eb071(0x98f)](_0x156b7d,0x3*0xa67+-0x2*-0xe5+-0x20f9),_0x569901=_0x12c4dd['ipzOa'](_0x48fb7d,_0x12c4dd['TwXyh'](_0x4affd3,_0x528778)*_0x12c4dd[_0x4eb071(0x328)](_0x4f24a6,0x52*0x59+-0x2*0xb1b+0xb*-0x92))):_0x522d8b[_0x4eb071(0xafb)+'ngs']['push'](_0x2c575e['gPwaX'](_0x2c575e[_0x4eb071(0x6df)],_0x4eb071(0x7b1)+'ced\x20b'+'y\x20a\x20d'+'iffer'+'ent\x20i'+_0x4eb071(0x99e)+'ce,\x20s'+'o\x20we\x20'+_0x4eb071(0x4d6)+'sking'+'\x20the\x20'+_0x4eb071(0x215)+_0x4eb071(0x5af)+'ct\x20fo'+'r\x20')+('the\x20g'+_0x4eb071(0x8ad)+_0x4eb071(0x3c6)+_0x4eb071(0x965)+'ne\x20ho'+_0x4eb071(0x4c2)+'\x20it\x20i'+_0x4eb071(0xabc)+'haned'+_0x4eb071(0x1f8)+'able\x20'+_0x4eb071(0x189)+_0x4eb071(0x8c6)+'r\x20')+_0x2c575e['OQaOs']));_0x522d8b['ident'+_0x4eb071(0x20a)]&&_0x2c575e['SkoLy'](_0x522d8b['ident'+_0x4eb071(0x20a)][_0x4eb071(0x84b)+'nRunt'+_0x4eb071(0x6a3)+_0x4eb071(0x930)+_0x4eb071(0x56a)],![])&&_0x522d8b[_0x4eb071(0xafb)+'ngs'][_0x4eb071(0x1e1)](_0x2c575e['OJCAX']+_0x2c575e['vUqkw']);if(_0x522d8b[_0x4eb071(0x410)]&&_0x522d8b[_0x4eb071(0x410)][_0x4eb071(0x5ab)])_0x522d8b[_0x4eb071(0xafb)+_0x4eb071(0xa67)][_0x4eb071(0x1e1)](_0x4eb071(0x487)+_0x522d8b[_0x4eb071(0x410)][_0x4eb071(0x5ab)]);if(_0x522d8b[_0x4eb071(0xcc8)+'ls']&&!_0x522d8b[_0x4eb071(0xcc8)+'ls'][_0x4eb071(0x86c)+'8']){if(_0x4eb071(0xcbc)!==_0x2c575e[_0x4eb071(0x59e)])return _0x148066[_0x4eb071(0x1b5)](_0x12c4dd['ODJgS'](_0x39c91b,0x3*-0xab+0x7*-0x245+0x1248))/(-0x1*0x1269+0x15e8+-0x31b);else{var _0x333085='';if(_0x522d8b['hookF'+'irePr'+_0x4eb071(0xab3)]){if(_0x2c575e[_0x4eb071(0x57a)](_0x4eb071(0x72a),_0x4eb071(0x72a)))_0x333085=_0x2c575e[_0x4eb071(0x55b)](_0x2c575e[_0x4eb071(0x62e)](_0x2c575e[_0x4eb071(0x8e1)](_0x4eb071(0x160)+'ok\x20fi'+'red\x20a'+'t\x20',_0x522d8b[_0x4eb071(0x50a)+_0x4eb071(0xb5d)+_0x4eb071(0xab3)][_0x4eb071(0x9b6)])+_0x2c575e[_0x4eb071(0xc4e)],_0x522d8b['hookF'+'irePr'+_0x4eb071(0xab3)][_0x4eb071(0x22e)+_0x4eb071(0xc37)+'nc']),_0x2c575e['kjJaO'])+_0x522d8b['hookF'+_0x4eb071(0xb5d)+'oof']['resol'+_0x4eb071(0x29e)+_0x4eb071(0x4fe)+'re']+_0x2c575e[_0x4eb071(0x28b)]+(_0x522d8b['hookF'+_0x4eb071(0xb5d)+_0x4eb071(0xab3)][_0x4eb071(0x8d8)+'ource'+_0x4eb071(0x960)+'e']||_0x4eb071(0x4d3))+_0x2c575e[_0x4eb071(0x644)];else{_0x489c8a[_0x4eb071(0x5f5)+'ntDef'+_0x4eb071(0x6e1)](),_0x78d6b9(_0x4eb071(0x9f2)+'hot');return;}}_0x522d8b[_0x4eb071(0xafb)+'ngs'][_0x4eb071(0x1e1)](_0x2c575e[_0x4eb071(0x206)](_0x2c575e[_0x4eb071(0x3f6)](_0x2c575e[_0x4eb071(0xad0)](_0x2c575e['XTPUm'],_0x522d8b['globa'+'ls'][_0x4eb071(0x8d8)+_0x4eb071(0x7cb)]||_0x4eb071(0x4d3))+_0x4eb071(0x6d7),_0x4eb071(0x452)+'reads'+_0x4eb071(0xa79)+_0x4eb071(0x8f7)+'ked\x20u'+_0x4eb071(0x2c1)+_0x4eb071(0xc68)+'e\x20obj'+'ect\x20w'+_0x4eb071(0x831)+_0x4eb071(0x19e)+_0x4eb071(0x737)+'U8\x20is'+_0x4eb071(0x943)+_0x4eb071(0x179)+'.'),_0x333085));}}return(_0x522d8b[_0x4eb071(0xcc8)+'ls']&&!_0x522d8b['globa'+'ls'][_0x4eb071(0x240)+_0x4eb071(0x8f4)+'er']||_0x2c575e[_0x4eb071(0x1ef)](_0x522d8b[_0x4eb071(0xcc8)+'ls'][_0x4eb071(0x240)+_0x4eb071(0x8f4)+'er'],_0x4eb071(0xc7d)+_0x4eb071(0x42f)))&&_0x522d8b['warni'+'ngs'][_0x4eb071(0x1e1)](_0x2c575e[_0x4eb071(0xc3b)]),_0x522d8b[_0x4eb071(0x4f7)+_0x4eb071(0x797)]>0x2365+-0x41*-0x43+-0x3468&&_0x2c575e[_0x4eb071(0x1a1)](_0x522d8b[_0x4eb071(0x4f7)+_0x4eb071(0x3f3)+'ed'],0x548+0x1*-0x25e3+-0x1eb*-0x11)&&_0x261d1f&&(_0x522d8b[_0x4eb071(0x4f7)+'Resol'+'ved']===-0x45d*-0x1+0x1231*0x1+-0x168e?_0x522d8b['warni'+'ngs'][_0x4eb071(0x1e1)](_0x2c575e['kFVHx'](_0x2c575e['sHons'](_0x2c575e[_0x4eb071(0xa36)]('0\x20of\x20'+_0x522d8b['hooks'+_0x4eb071(0x797)],_0x2c575e[_0x4eb071(0xaa6)]),_0x4eb071(0x6ab)+'once\x20'+'durin'+'g\x20Web'+_0x4eb071(0xa8f)+_0x4eb071(0x307)+_0x4eb071(0x99e)+'tiate'+_0x4eb071(0x526)+_0x4eb071(0x9f2)+'hots\x20'+_0x4eb071(0x84b)+'n.hoo'+'ks.le'+_0x4eb071(0xa1a)+'\x20')+(_0x4eb071(0x8dd)+_0x4eb071(0x6aa)+'egist'+'ered\x20'+_0x4eb071(0x2e2)+_0x4eb071(0x430)+'re\x20ig'+'nored'+_0x4eb071(0xad8)+_0x4eb071(0x9b9)+'ife\x20o'+_0x4eb071(0x9c5)+'\x20page'+'.\x20')+(_0x4eb071(0x9e2)+'tered'+'\x20')+_0x522d8b['hooks'+_0x4eb071(0x9e2)+_0x4eb071(0x8ee)+_0x4eb071(0xca8)],_0x4eb071(0xa9b)+_0x4eb071(0x6f8)+'uring'+_0x4eb071(0x8a1)+_0x4eb071(0xaa8)+_0x4eb071(0xada)+_0x4eb071(0x2da)+'start'+'.')):_0x522d8b[_0x4eb071(0xafb)+_0x4eb071(0xa67)][_0x4eb071(0x1e1)](_0x2c575e[_0x4eb071(0x1fb)](_0x2c575e[_0x4eb071(0xae2)](_0x2c575e[_0x4eb071(0xbb6)](_0x2c575e[_0x4eb071(0x576)],_0x522d8b[_0x4eb071(0x4f7)+_0x4eb071(0x577)+_0x4eb071(0xb69)])+_0x4eb071(0x22b),_0x522d8b[_0x4eb071(0x4f7)+_0x4eb071(0x797)])+('\x20hook'+_0x4eb071(0x9d6)+'o\x20a\x20t'+_0x4eb071(0x291)+_0x4eb071(0x208)+'\x20but\x20'+'appli'+_0x4eb071(0x273)+_0x4eb071(0x726)+_0x4eb071(0x812)+_0x4eb071(0xac0)+_0x4eb071(0xc48)),_0x2c575e['mcfgr']))),_0x522d8b[_0x4eb071(0x4f7)+_0x4eb071(0x3f3)+'ed']>-0x1143+-0x9c7*-0x1+0x77c&&!_0x522d8b['insta'+_0x4eb071(0x143)]['FPSco'+_0x4eb071(0xad7)+'ler']&&_0x522d8b[_0x4eb071(0xafb)+'ngs']['push'](_0x2c575e[_0x4eb071(0xb62)](_0x4eb071(0x8d5)+_0x4eb071(0x482)+_0x4eb071(0xba7)+_0x4eb071(0x7eb)+_0x4eb071(0x821)+_0x4eb071(0x6b2)+_0x4eb071(0xad7)+_0x4eb071(0xba3)+_0x4eb071(0x832)+'red\x20y'+_0x4eb071(0xce5),'Eithe'+_0x4eb071(0x201)+_0x4eb071(0x482)+'not\x20i'+_0x4eb071(0x834)+_0x4eb071(0x41c)+_0x4eb071(0x2a1)+_0x4eb071(0x5e0)+'ok\x20is'+_0x4eb071(0x5d9)+_0x4eb071(0x972)+_0x4eb071(0x421)+_0x4eb071(0x52a)+'ad.')),_0x522d8b[_0x4eb071(0x142)+_0x4eb071(0x69a)+_0x4eb071(0xb99)+'ed']['lengt'+'h']&&_0x522d8b[_0x4eb071(0xafb)+'ngs']['push'](_0x2c575e[_0x4eb071(0xc8c)]('rebui'+_0x4eb071(0xbef)+'nce\x20f'+'irst\x20'+_0x4eb071(0x663)+'re\x20(r'+'espaw'+'n?):\x20',_0x522d8b[_0x4eb071(0x142)+_0x4eb071(0x69a)+'eplac'+'ed'][_0x4eb071(0xcb1)](',\x20'))),_0x522d8b;}}function _0x42e4db(_0x31de94){var _0xff37c5=_0xc654b5,_0x426b58={'NCMUq':function(_0x4e5a28,_0x1cb61a){return _0x4e5a28<_0x1cb61a;},'FhyOK':function(_0x542efa,_0x2e1790,_0x3970de){return _0x542efa(_0x2e1790,_0x3970de);},'Zxmgr':function(_0x47da10,_0x396072,_0x4c34dd){return _0x47da10(_0x396072,_0x4c34dd);},'srCTo':_0x2c575e['EMaDW']};console[_0xff37c5(0xa54)](_0xff37c5(0x184)+_0xff37c5(0xaff)+'\x20Skil'+'lWarz'+'\x20repo'+'rt',_0x2c575e[_0xff37c5(0xb74)](_0xff37c5(0x1cc)+':'+_0x24f5d1,_0x2c575e[_0xff37c5(0x82a)]),_0x31de94),console[_0xff37c5(0xa54)](_0x2c575e[_0xff37c5(0x442)](_0x241738+'\x0a'+JSON[_0xff37c5(0x1ee)+_0xff37c5(0x1bf)](_0x31de94,null,0x1*0x2011+0x15*-0x1c6+0x66*0xd),'\x0a')+_0x911c44),_0xdc40bb=_0x31de94;try{if(_0x2c575e[_0xff37c5(0x353)]!==_0xff37c5(0xcb9)){_0x17c079['tag']={};for(var _0x1fe29d=0xed*0x16+0xc8+-0x1526;_0x426b58['NCMUq'](_0x1fe29d,_0x2f2bb0[_0xff37c5(0xb90)+'h']);_0x1fe29d++){var _0x460e8e=_0x426b58[_0xff37c5(0x3ab)](_0x548d49,_0x1ca996+_0x426b58['Zxmgr'](_0x312dba,_0x4d21b6[_0x1fe29d][-0x1*0x1ab5+0x1*-0x144f+0x11*0x2c4],-0x1*-0x1ab+-0x1979+-0xa*-0x263),_0x426b58['srCTo']);if(_0x460e8e!==_0x32c7f1)_0x5ed4b6[_0xff37c5(0x9f8)][_0x1d67f5[_0x1fe29d][-0x130c*-0x1+0x1cd4+-0x2fdf]]=_0x460e8e;}}else _0x2c575e[_0xff37c5(0x28d)](_0x559eec,_0x31de94);}catch(_0x4fbc28){}_0x2c575e[_0xff37c5(0xa7b)](_0x566477,_0xff37c5(0x30f)+'t',{'report':_0x31de94});}function _0x381d60(){var _0x2da88d=_0xc654b5;try{return _0x421c0f();}catch(_0x1796cb){return{'version':_0x24ba5f,'when':new Date()[_0x2da88d(0x65c)+_0x2da88d(0x3bc)+'g'](),'elapsedMs':_0x2c575e[_0x2da88d(0x4c8)](Date['now'](),_0x3b0a0e),'host':_0x44a57f,'uwmk':!!(window['Unity'+'WebMo'+_0x2da88d(0xa19)]&&window[_0x2da88d(0x2f5)+_0x2da88d(0x5ee)+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x5aad2a,'hooksTotal':_0x32ffa3[_0x2da88d(0xb90)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x2c575e[_0x2da88d(0xc13)](String,_0x1796cb&&_0x1796cb[_0x2da88d(0xa26)+'ge']||_0x1796cb)};}}function _0x3e9cc3(){var _0x27ffde=_0xc654b5,_0x55a62b=0x149e+0x7bd*0x3+-0x2bd5;try{_0x41cbb1();}catch(_0x4e8f12){}try{_0x3533b6();}catch(_0x17006d){}setInterval(_0x43eab5,-0xeab+-0x1c77+0x1*0x2ea6),_0x42e4db(_0x2c575e[_0x27ffde(0x398)](_0x381d60)),function _0x1a0e94(){var _0x53b58b=_0x27ffde,_0x3f01c6={'Cwbjo':function(_0x5ad2a4,_0x48007b){return _0x5ad2a4/_0x48007b;}};if(!_0x32ffa3[_0x53b58b(0xb90)+'h'])try{if(_0x53b58b(0x970)!=='FXkyn')_0x2e99d7();else return _0x3f01c6[_0x53b58b(0x365)](_0x2e7826['round'](_0x80e0ea*(-0x8*-0x36c+-0x415+0x16e7*-0x1)),-0x19f7+0xb2f*0x1+0xf2c);}catch(_0x78d9d8){}_0x55a62b++,_0x42e4db(_0x2c575e[_0x53b58b(0xab0)](_0x381d60));if(!_0x32ffa3[_0x53b58b(0xb90)+'h']&&_0x55a62b<-0xd8*-0x1a+0x20a*-0x8+-0x474)setTimeout(_0x1a0e94,0x1*0x1639+0x1dd2*0x1+-0x2c3b);else{if(!Object[_0x53b58b(0xbd7)](_0xee751)[_0x53b58b(0xb90)+'h']&&_0x55a62b<0x1*0x2087+0x1c55+-0x3bb0)setTimeout(_0x1a0e94,0x4*0x598+-0x7*0x196+0x2*-0x1bb);else setTimeout(_0x1a0e94,-0x13*0x53+0x4*0x452+-0x1*0x66f);}}();}if(document['body'])_0x3e9cc3();else document[_0xc654b5(0x9b3)+'entLi'+_0xc654b5(0xa30)+'r'](_0xc654b5(0x476)+_0xc654b5(0x829)+_0xc654b5(0x94d)+'d',_0x3e9cc3,{'once':!![]});if(document[_0xc654b5(0x44e)]){if(_0x2c575e['uEDJv']('VgMOT',_0x2c575e[_0xc654b5(0x4b7)]))try{_0x44ded3();}catch(_0x2b556a){}else{var _0x1aa4c4=_0xd896cf[_0x261c32],_0x386b42=typeof _0x5b4ce3[_0x1aa4c4];_0x4802d1[_0x1aa4c4]=_0x2c575e['mDukL'](_0x386b42,_0x2c575e['Tubef'])?_0x2c575e['Tubef']:_0x386b42;}}else document[_0xc654b5(0x9b3)+_0xc654b5(0x986)+_0xc654b5(0xa30)+'r']('DOMCo'+'ntent'+'Loade'+'d',function(){var _0x5c2ab3=_0xc654b5;try{_0x2c575e[_0x5c2ab3(0x768)](_0x44ded3);}catch(_0x5597a2){}},{'once':!![]});})()));function _0x2c90(){var _0x13bea9=['uhbZreS','Dgv4Dem','kdaSmcW','DtmY','o2zSzxG','CMnLoIa','zxi6mdS','BwfYA3m','thb1rw4','igfJDgK','kZb4','tgz4teC','ldi5lc4','CI1YDw4','lJi4','qvzqtuG','yLjtvw0','ChrY','Dxm6oha','wLvAyMG','qwrHrha','BgLKzxi','EgDVDe4','z2v0Dgu','mZGSmJq','uNfIrK0','B24Gzge','C1LRsgS','AxjLuhi','WOBcH8khWO7cLa','BwuUy3i','BcbHz2e','ocK7Fq','wwvOqMS','DhLSzt0','rwzRtwq','yxrLigy','yNv0Dg8','Bgu9iMq','AezRz3O','DMvK','B2XZoJO','icaGia','tfDWDve','oJaGmca','AxmGD2G','wu9sCLu','igrHDge','Axr0zwq','BMfNzxi','CMf3qq','q21pvK0','C2v0Dgu','mty5otqYEfPfqKHH','WOFcLmktWO/cJq','DgvZia','WPhcI8kjWPtcKG','BM8GBgK','yMfYzsa','Ewv0ic0','EdTOzwK','i3nHA3u','yY0XlJu','zxGTzgK','zwn0Aw8','CMrLCJO','icHNDwu','WOVcLCkkWOZcHG','Ec8XlJq','wNvnrvG','WOZcHSkpWPhcJW','WO7cLmklWPdcJG','B1zqBvG','AwrLBNq','DxqGEw8','y2rQrhi','v2LKDgG','iI8+pc8','DgnOige','BgvUz3q','oxWZFde','Bgu9iMm','yuXMs0m','yxjKlxi','ig9Uia','yLz3C2O','swLVzu4','yLr0zgO','zxbSywm','C3bHCMu','WPhcImksWO3cHW','ChGGC28','iIbZDhK','A0TYA2K','uMvWB3i','zxj0Eq','CM9VDa','uKnuu2W','BgvYigG','igfNCMu','DMLLDYa','weTzAgK','yxbWBgK','yYGXmda','WOFcICkjWPdcHW','y2u7y28','reLxCM4','yuruEMe','mhb4oW','sgvHCa','zfbMsxa','oMf1Dg8','A2DYB3u','DhrLCG','BMrTDLu','BIbjtLm','EdTHBgK','wfrXwKu','zMLSBfq','WOVcH8khWPlcKa','CenVuei','v0roq3e','zYbZy3i','C2v0ida','mYWXnZC','ALjjs08','tg9VAYa','CMXHyMu','DcHHDxq','BwLU','WOFcKCkrWPdcKq','WPhcJ8kiWOBcKq','DYGWida','ze5osgS','B3C6Aw4','Aw5Uzxi','mtz8mte','y2GGDgG','oM9Wywm','lc45kq','C3jqsNa','B3nPDgK','Fde3Fde','sgn2BKm','DxrVo30','u2vLBK0','D1jwz2m','EdTWywq','n3b4o3a','BMrVDY4','A2v5CW','q2fTzxi','svvKqKO','y2X1C3q','C3PYC1y','ihnVigu','AxvisLq','ALHfsLu','zxG7z2e','lZeUndu','DhjHBNm','thPZA1a','B21muvG','zLLswuS','WOBcICkgWOVcIW','mJrWEa','DhLSzq','B3jRu3K','mxb4idy','AgLZig0','DeXWtei','CMfKAxu','y29UDhi','u2TsD2C','BhqGC2K','zwz0oJe','ldi0mIW','B3qGica','mJTZDhi','suPqELe','BguGC2e','lwfWCgu','wfbqzva','Bgv4oJe','WOZcKCkmWORcJW','mtaIihi','A2L6r0O','y0XZDNm','B0rzB3a','Axr5oI4','mhGXna','BxHrCNm','DxjH','ywn0','C2vYlxm','qLfbvge','BvfVuMW','v2rjr1e','WPhcH8koWORcJq','Dxm6mti','zxr3B3i','v2jIzMG','vvjbx1m','mNb4o3O','CKjhEg0','qKL2sNq','ruL1y1q','lJCYktS','ig9Uy2u','WOFcJSkjWO7cKq','AgPeDKy','BJPJzw4','DLHHsLe','q0rhEeK','v2vHCg8','A2Dlrui','DdO3mda','BeT2B1u','vernx0C','zsbTAw4','DxnLtg8','DwfVvva','EM5fwxm','DMuGB2i','WPdcKCkvWOZcJG','wxHRBvy','zgL1CZO','WO/cKSknWO3cIq','EY13zwi','rLzmCMq','CMf3','mhG5oa','iMzVBgq','zYb3Agu','AwqGzg8','AxmGyNu','rMT0De0','C2STDMe','zgLMzG','sM1uDw4','WOZcJ8kgWPxcLa','B3r0B20','Aw5cyw4','A1b0zve','oJHWEdS','mhG1yW','BMfSrNu','z1bZAfq','oJfWEca','AxPLoJe','uMjbA1q','AxjIwwS','Cg52qvq','Dg9W','Bg9ZzxS','zM1jz1a','uMvJDa','i2zMzJa','AgL0zs0','sfv3DuG','lM1Ulwm','Dg87Fq','mNWXFdy','CMuG','BMfSv2e','lwzPCNm','AwvKige','vNvisMW','Ag92zxi','uM5dsfi','A3mGD2G','CMDgtvK','u0z3zvq','wM1QrMm','ztSTD2u','ywLSywi','WPdcKCkoWO/cIq','qLDnCeC','iJ5ZywS','r2fTzq','r29zueq','zw4Gyw4','t2DxBuK','BgjHD0i','Bw92zvq','lMn0B3i','zwfJAge','y21K','Dg87zMK','CMfJDgu','ihDOAwm','Bgu7zMK','uujrz08','oI40o30','svDnB1a','ysbNyw0','B25ZB2W','r2Xlvhm','t0fivvi','mtjWEdS','zxi7iJ4','qxnwvfu','AgvHBhq','uvvArgm','Awr0Aa','yxbWBhK','lwfSAwC','icSG','q05bEu4','B3nWywm','Bez1BMm','C2HHzg8','AwvYkc4','s3rSBMW','sg5zzg4','C29SDMu','Dw5Kzwy','AwXKlG','Bc5ZAg8','C0LuDNe','vxDNBxC','CgvJDhm','ug9LBvy','Aw5Ozxi','u1LzDLK','yxm+','z3DTy0C','mJu1lde','yw5ZCge','q3jJEKq','iMjHy2S','y3Hirge','Avf3vvq','B3qGCgK','C3aTy3y','ic0+ia','phnWyw4','Aw50','yxbWzwe','B2jQzwm','DcGJzMy','Dgv4Dee','WORcK8kqWOBcJa','WOVcKCknWORcIW','y2fWC3u','zxHLy0m','vLfTz00','pJiUmhG','yxK6z3i','B3HSEMu','uhjtyNa','AwDUlxm','AgLUDa','iZjHmgy','vKflwuC','zY4G','mtv8nhW','otbWEdS','CMfTzsa','qxrbCM0','C29SAwq','WOZcH8kvWPpcIW','ChG7','icbJyw0','DhKGAw4','lcbuyw0','idaGmxa','BwvHBG','AM9PBG','vxzstMC','BNrPBwu','rwznB0m','DwKTBw8','oIiIo3a','zMzcwvm','oJa7zgK','qvDiuvy','lJa0ktS','Fdr8m3W','r1n5Aha','DuvesNy','uNDmtuq','BNf4BNK','q0fbquW','C3CYlwi','mJiSmsW','qu5eihq','uNjIAgW','uLflEKm','AgvYAxq','oImYyta','z2XVyMe','C3CYlwy','vMHQA3y','B3rVBK4','oNjNyMe','D2fZBu0','DdTIB3i','AdO5mNa','tMfTzq','lxDLAwC','B2TbBMC','WOVcJmkhWO3cLq','x19tquS','yM90Dg8','mtj8nG','DcbPBMO','CM4Gywi','C2DyvM4','CgrHDgu','CM9vzvC','o2jHy2S','EdTVDMu','AM9PBJ0','sw5KzxG','WORcHSkkWOVcHG','BLLdvKm','wu90vg8','tvb2Che','D2HLBIa','zxqUia','psjZDZi','B3beAeG','nYWUnYK','z24TAxq','ysbtA2K','Ag9ZDa','D3jXzgm','u2vZC2K','BMqU','zwn0zwq','twXIq0O','EhbVCNq','v25sweu','uwv3C1O','BNrZoMe','Aw5ZDge','BMnLCW','CMzSB3C','B3i6Cg8','BNnLDca','zMfPBgu','m3WX','s1LsDhG','lJmPo2q','lwjYzwe','B2yGDMK','lNnRlwi','BuP2vfm','WOZcH8kgWOZcKG','yNDUExO','ALnksxO','yxjHBMm','B3rYB2W','EhL6','DgeTyt0','lwvZCc0','uNvuwwS','i2zMnMi','m3WXFdi','zw5HyMW','y3LetMu','C2fUCY0','ChbLCIa','DgX1DNG','WOBcISkpWO/cIq','ieeGAg8','ihzPzxC','DKH5vg4','nsb1As0','Bg9NBY0','zvbSDwC','s0TmD3y','v3vIz2q','zxrmzwy','pc9KAxy','AgLjueW','idyWCYa','zgvIDwC','DMLLDY0','mJzWEdS','DgG6nNa','nIa2Bde','qMzbteq','CxDNCxq','rerwueu','igq9iK0','AeHUB0G','zezZwfO','WOVcICksWONcIW','vfDfweW','AgfIBgu','Bg9YoNi','ifvjiIW','CNfIBu0','ig1HBMe','ANHLzMq','twHmzK8','zxG7zMW','yw5NzxS','BNnWyxi','qLPewMK','jwnBC2e','AvLsu1i','WONcJSkvWPxcHW','x2DHBwu','CNnVCJO','zxzLCNK','lNnRlwm','DgHPBMC','ALnhtMC','Awq7CgW','ywPOuKK','t2zMC2u','vgfxz0W','WOZcKCktWPxcHW','yxfKuKi','zKLHq2m','vKnosgu','icaZlIa','AgvHza','B3bHy2K','ufHLzLe','z2v0sw4','DhrVBJ4','B250zw4','yxv0BW','zhbyExu','B2r1Bgu','CMqTDgK','C3zNpG','wNbUD1a','igjVDhm','BNq7yM8','lGOkswy','D2rMAK0','DZOWidi','DMvYE2y','CgfYC2u','kgD1zxm','oM5VBMu','idzWEca','BgLJyxq','sLnZDuq','oNrYyw4','Aw5WDxq','ig1VDMu','lJC1ktS','idqGnc4','D2LKDgG','z0rnt1m','CM91BMq','BwnwyuC','Aw4TD2K','zwvKig8','r1jKy0m','CMeTC3C','Dgv4Dge','y29TyMe','B3rLlMu','yMfS','z2LMEq','swjKz28','yNvPBhq','qM90Aca','Bwv0ywq','zg93BG','lM1Ulxm','ignVCgK','BwLLCYa','DciGC3q','ztT3Awq','zMLYC3q','BMfTzq','y29SB3i','yxa8l2i','WPxcJ8kgWOJcKq','C2j5rvK','Fdr8nxW','A2v5','zhvNtMq','ywDHAw4','DMLZAwi','qvbcu2O','ie9o','wvnKCwu','A2uTBgK','uKvQCxG','DM1sB00','y2fUDMe','zhjVCc0','vxvJDeC','ys1ZDW','ztPUB24','B2D2txe','ChvZAa','ndHWEcK','WO7cJ8krWOJcJa','WO7cK8kpWO3cIa','zJfIo2i','ALrSwg8','BMqGBM8','B3CGkey','EvztDNq','mhGYoa','ywL0Aw4','Dhj1zsi','kdi1nsW','C3rYAw4','z2zUq2m','rNvNre8','vKvsu0K','yMvS','BNrLCJS','DMLZDwe','WOVcJ8kjWPpcLa','Aw1L','zcbYz2i','lIbeAxm','B3vWig8','zMXLEc0','vfzYBMq','Buvwswu','mtrWEdS','BeXuEwi','zwy1o2i','WOBcJmkoWPtcKa','CIb5B3u','Cg5Pvvu','lNnRlw0','ohb4ide','B2rny0S','CwTAzxa','y2XVC2u','Aw5KzxG','BMCGB24','Axr5','DhjVA2u','BwvUDs0','y29TBwu','nIWYmZG','tNDRvuK','z29dzMm','ohb4ksK','B3n0Awm','rKDNq0C','zhvSzq','D3jVBMC','zM9rBNu','DcbPDca','AxqTC2m','WPxcKSkgWORcJG','wgfSywu','DerHDge','imk3ia','AxrPywW','DMvYE2m','B250lwy','BMq6Dhi','lwe9iMy','uhn3ELC','Axy+','CJTZDhi','BgLUzvC','C3qGysa','BguIihm','khrOAxm','WORcImkhWPdcJW','CwPbt3e','ig9Mia','refpr1a','C2vYDcK','B3jPz2K','BguGy3G','B206mxa','vwTxwwG','ztT0CMe','v01mwMi','EK9UALi','B3i6CMC','WONcLmkoWPpcJW','EdSIpNy','wNbNsKq','rgTys2m','EdTNyxa','ig1LBNu','DYaGia','ywj7zgK','q29WAwu','AY13B3i','DMfSDwu','DgvYE2W','DxjHx3m','B2jM','B3nLCY4','D01Kug8','CKXpyva','ntuSmJu','DgHLigm','oJe7BwK','CMvSyxq','zNvUy3q','mNWZ','icaGDMe','DgL2zxS','yufXsxm','nsWXndm','yxiTz3i','AwzPzwq','vhvIzwy','DKHoD0S','zwjzzeu','CgfYzw4','uurYzgG','idi0iJ4','oJaGmta','zxrjzgG','DuzHyNK','DwPXq04','w2fYAwe','ihjLy28','v2TKzKm','BMCGlYa','x19hzw4','BM9ZCge','ywDhy1C','WOBcImkvWPlcLa','Dg9tDhi','qKHjzwq','A2v5vhK','BgW+','lc4WmJu','zhfQyLi','AwqGCMC','iJ48l2q','B2XZE2y','whLyuwm','yxbP','mtTJB2W','ALfyueS','wg9esvi','zwqGBM8','yKD1Exu','A2DOCeK','Awzxz2y','CwDZuNy','nZu7Bwe','Ahq6nJu','CcbHBMq','DdPUB24','u0jbyuS','D29Yzc0','B2TLoMm','qvbvoca','BgvHCG','A0LHBgm','yNvPBgq','Dw5Yzxm','Edjfna','zw5Jzsa','DxrjAhq','mtqZlde','Fdn8nNW','qK9xsxC','ztT0B3a','vwrNuM8','Dg91y2G','yMLHs1C','EKjSzKq','Bfb1zgK','ugj1BMC','ywjSzsa','BK9LENu','yM9VBgu','B3v0idK','mhb4oYi','zKLMvvy','Dg9gAxG','nZq4mJK','oJm0ChG','owm5o20','svHsse4','B2zM','vxzPu3O','DMvhyw0','A2L0lwe','yNL0zuW','ig9Yihq','DdmY','nJaWo20','yw1Ligy','A2vsD0S','ignOzwm','WOJcI8kpWORcJG','rMjnCfy','t09kug4','iZDLzta','CMvMDxm','WPpcI8kmWO7cIq','zhmGB24','rgjWru4','tvvsqKW','CYb1BNi','D1fpBK4','lNnRlwW','EwvZ','WOFcJCkiWOBcIG','Bg5Is2S','BxbSyxq','CMq7zM8','BIbPzNi','zxiIlci','lxjLCgu','y2D5C3G','rLrQsMi','BMfIBgu','q2HPBgq','Dw94zuS','nZCSlJq','BNrPBca','ktSTD2u','WPxcImkiWONcLa','Fdb8mNW','C2vYAwy','q0jOz1i','BxfHr04','wLrgwui','BgfZDeu','DcbTyxq','zK1zs1e','B2f0CYa','ndC7','Bwvnyw4','zhrO','rMLLBgq','yvDKC08','A21Uu2S','WPxcJSkvWOFcHG','ntTWB2K','zYbTyxi','ys1IB3G','whP5t3C','lc40ktS','EgvKo3q','BwvUDc0','WO/cI8koWO3cJW','t2DxvNy','Fdv8m3W','CMv7zM8','zwqGEwu','wezyseO','Ds1YB28','ywz0zxi','C3LNqvC','DeHLywW','tergvw4','lNjLC28','DgHLBG','DcaWida','ignYB3m','yxbyBM0','B2LUDgu','CMfUC3a','lJa4ktS','ysXI','t2DpC2C','Bw4TAa','nYWUncK','zw1VCNK','Bg93oMe','ywjLBhS','vw5PDhK','mNb4idC','yxbZAg8','ys1Tzw4','ALf6zwq','u2fRDxi','yMLUzgK','mhGZma','iIb3Awq','zw5LBxK','BLj1BNq','WOBcISkvWPtcJG','mJKWChG','yZfKo2m','mxW1Fdy','CMfUy2u','zgLZCgW','B25Tzxm','yMX5lMK','C2vSzwm','zMLSBd0','WPdcJCkuWOFcKq','ihrOAw4','vgHLigG','CMvHy2G','nYWUmsK','CMvWB3i','ign5psi','zxH0','C2jfuNK','CMuGy2W','yxjTzwq','rNrbzvG','WOBcJ8kvWOBcHW','yMfZzq','y2Pque0','ywX1zt0','C2v0uhi','CKnVDw4','AwnOlJW','rNLnAKG','B3n0zMK','lcbZDgu','CMvMCW','rvnqigi','zhmGWRCG','BgX3yxi','B2XPzca','BNuTCM8','Dw50','lwrPCMu','CNnitfm','Eg1StfG','B2fKzwq','BMnLv3i','DeHLAwC','C2vLBNq','lYbQDw0','AM5zvhq','vMT3uMS','C2STBwi','mda7Bwe','ywjSzwq','zMfRzq','mIiGC3q','CZOXmha','t25bCha','tunet1y','WO/cI8kiWOFcHG','rLnZtNO','DxnPyMW','CMv0Dxi','zunRzee','y1zArK4','mNW0Fda','mtbWEca','ruXfA2q','we9VuNm','ltiUns0','z2H0oJe','CvP0DgW','CMv0','B25VC3a','zgvMAw4','Bg9JywW','ExvNBwi','AxvZoJK','CIb0Agu','ktTWB2K','lL9Nyw0','y0vIAvG','mduPlda','igvUzca','DY5vBMK','wfvPEvO','CYbLBMu','s3zrsNu','r1nmChq','BfvVAwi','DM9Pza','BgvKoIa','B2SGEwu','yxz4wLu','ywWGB24','CwzRsLG','z2H0oJG','C2ncreG','vKHJBKS','C28GAxq','yxGTAgu','y2f0','iMrPC3a','q3DIAM8','WPxcJSkmWOZcKG','DxrlyMW','s0PYwfO','DcaOC28','r1LnEfy','z2H0oJy','ndySmJm','A1n5BMm','pc9WCMu','DMLLDW','Awq9iNm','DfLdtem','zJDLzwy','DhbHC3m','DYbLEha','ELLAs3q','Dc1ZAxO','mJu1ldi','rfjvqNi','WOJcH8ktWOZcLa','WPpcHSkiWO7cKa','mIWUnsK','vgTjuhy','yw12z2O','lxnWywm','mNb4o3a','wNvoEhK','zxfxt2S','ywSTD28','C3bHBG','zxjYB3i','q2XPCgi','lde1nYW','WORcKSksWORcKW','BeToAfa','tJWVyNu','icaYlIa','zu9hEeq','o2nVBg8','yxjNAw4','WPlcLCkqWONcIa','C2vUDca','DePsAKy','lNnRlw4','l3nWyw4','DJiTy3m','WOZcJCkvWONcIG','l2j1Dhq','ugXHDhG','CM06BM8','sKPADKG','yNL0zxm','C3vI','r1nuAeO','psjYB3u','ldeWnYW','vur2sNe','ihvPlw0','teLlCNy','BMqIihm','CMvHzca','icbMAwu','Ag9VAW','B24+','ltqTnY4','zMf3CMK','ig91Dca','nYWUmty','u25HChm','rMH5t0S','WPxcISksWPhcIW','BJOWo3a','EwXLpsi','mtjWEca','tK9bqxu','sxLczfq','z2v0sxq','yMeOmJu','B3jYzwm','Dg9Y','yxnZtMe','yuT2qwW','D2LUzg8','zwq6ia','CM9Rzs0','ugHVDg8','u3rYAw4','yt0IC3q','icdcTYaG','zwD4wfy','AgLKpq','WOJcISkiWPdcLa','C2v0qG','su5higy','C29Syxm','WPtcHSkkWO/cJG','AgLSzsa','WOBcH8ktWOJcJW','ANn0ugO','uMDAqLq','Fdf8m3W','DMvYzMW','tvngBMO','BgfZDfC','yMfJA2C','te9h','mNm7Fq','rLDetu8','ifjLC2u','s2fjA0O','Dde2','zfLyqKK','tuLsvwy','vxrfugu','AwDUlwK','zMXVyxq','B25NlG','wLnQyKi','EdTMBgu','CgzoEM8','ELHWy2S','qKrUrM4','BgCIihm','r0zjDhG','zMLYzsa','D2fZBvq','B3vUzdO','CJOJzJC','B2fYza','yhbSyxK','WO3cJmkgWPtcJq','zhDswfC','nIWUotu','zxa9iJa','B3G9iJa','C2v0sgK','tuSGq08','CKXPC3q','WOZcKCkiWPxcJa','BxvXsLe','B2XSzxi','qxbWBgK','sfjhA0S','AxmGBM8','r3fQvwO','Bg9YoIm','sLDnDxa','lNnRlxi','WO7cLmktWPpcJq','CIaO','y2vK','mNb4o2i','D2fYBG','AxbdDNy','Eca4ChG','oJeYChG','WOBcK8kuWOVcKG','Cd0Imc4','CMvKDwm','B2zMihq','yMXLig4','otK7y3u','DxbKyxq','WOBcKSksWORcJG','xtO6ywy','i2y3zwu','kduWmha','z2v0rMW','nYWUocK','tNLbt1u','zxnW','v09Mrum','nJyZnZeYr3jsEhrQ','ohb4o2G','AxmGBwK','BMvPDgG','y29MB3i','BezozfK','WPpcJ8kvWOFcJG','ywjZ','te9eswe','wYbHBMq','B3vUzcW','q1POr3m','ywjgBKC','sfrnta','Dw5UAw4','B25Nig8','u3bLzwq','CZ0NC2S','CMvTB3y','DwnSsfG','mdaWo3u','igzPzwW','Dcb0Agu','zeTPue0','u2nPDM8','ExbLpsi','yw5LBca','z2fWoJe','C2XPzgu','Aw5Lza','igL0ige','lNnRlxy','CJPWB2K','WOBcJ8kjWPxcKa','zZOXmxa','DhrVBtO','C0rrshO','AMvJDhm','WONcJmknWOVcJW','Dg46Ag8','CMvK','AgL0CW','zgf0yxm','cNbPDgm','rw5LBxK','C21uExa','CwXlEMO','ywnRz3i','s3bot1u','yxv0BZS','igzPCNm','DMLLDZO','igHLEd0','iZrMogy','WOZcISkgWPdcHW','ENj5Bfu','iJ5tCgu','CMvKia','B2f0mZi','DY4Guhi','yM9KEq','D192mG','ndGZnJq','z3jVDw4','sgvHCca','EcXJywW','Cg9YDge','t3jjDeW','A0jSCfe','tgToCKK','igHLyxa','Bcb1Cgq','BNnPC3q','ic8G','yxjHBxm','tvjdshm','BgqGAxm','AxrZ','C2v0sxq','zYbIBgK','zxqSig8','uhzNsvO','oJnWEdS','wentCu4','qNLjza','psjZywS','DhrTC3O','yNrNAeG','BgLZDa','WORcJmksWPlcLa','B2r5','Fdn8nxW','yMPfuxK','AwDODdO','wwPnqxm','igSWpq','lJKPo2i','B2jMsq','sgvHBhq','BgfZDem','re9nq28','zunOAwW','AfLWDgG','AfnJCMK','BvLgzfi','lt4GDM8','DdPZDge','mdT9','zMvqqNu','DKD4yKy','icaGica','WOVcKCknWOBcKW','igfYzsa','ufKGve8','DK1YDKK','oNbYzs0','idHWEdS','rvnqoIa','t1z6tgq','WOVcH8kpWO3cJW','nxb4o2G','D0HSANG','zxrZigm','EMu6mte','zgf0yq','zgzgzMS','zxi7z2e','y29UDgu','ywnPDhK','zwXHChm','DNv0BuW','rvnqig8','DxjHvge','u2nYzwu','CMf3wwe','nJq3o2q','B3v0','ywXSvMu','B3DUkq','mJHWEdS','u1LZvha','mZT9','tLDKqKq','v29Xz3C','zsbWCMu','iZe1mgm','oJCWmdS','nNW3Fde','qvzXy0y','AgvHCei','yxjN','otK7Bwe','whbrr2m','CMnPywW','nZq4mZy','A2v5u28','tgHVu0K','y3nZvgu','zM8Qksa','ChGPo20','B3CU','CMf3Aw4','WPdcICkpWO7cKW','qxPKt2C','o2n1CNm','C1votxe','BgvYkZa','yNL0zu8','B2DVE2q','BgX0ALm','WPdcH8kjWOJcJG','igXPA2u','DuzNEfm','v21qsKG','Bg9Zzsa','BxbvBgi','BgrPBMC','s2fer2i','Dxm6nNa','yMuGCMu','ChqRmhG','renUDgy','t3vWAuS','txnNCem','AxrSzxS','vgv4Da','BKDpvgW','CIbWywK','uNfZDfq','m3b4o3C','t2v2tLm','A1nhBe4','BM9UztS','BM9Uzq','o2zVBNq','ExbLCW','yxjLige','BgvY','DgfKAuS','lM1Ulxq','ihnVBgK','twLStvm','zvn0EwW','BhzLr2e','yw4+','CMfUzg8','uNvUDgK','A2v5vxm','ignSyxm','icbOB28','ktTJB2W','CNq7z2e','oMjYAwC','Awr0AdO','ls1W','DNDrveG','rMLHyLG','D2fZBva','rKneq1y','C3Pmr0O','CMf3qG','qw5muuC','zMykrJG','oJiXndC','mtaSmte','sNHYze8','BhnOvLa','B2jMqG','r2fTzsG','Ag9VA3m','mNW1Fdy','oYi+u24','ltiUnsa','C3Hiz3i','ChGVms4','igL0ihm','zuf0rMK','WO7cKmkhWOFcKG','Axb0ige','nNb4o3C','EsbMywK','WOZcJ8kmWORcKq','CML0Dgu','C2fNzq','WO7cKmkrWPtcJG','Dte2','r0DFr2e','Aw5PDgu','Ag9VA0y','qMX6CgW','uMLJufO','CgvYBw8','ywiUywm','C3nPBMC','WPdcKSkoWO7cHW','DxjJzq','WOZcI8kmWOBcJW','DwndDwu','CNnJCMK','iNrLEhq','mdTMB24','WO/cJCkgWONcJq','lwzHBwK','Chz6tK0','rffjz3O','DMvJmG','oImXnta','AgfZtw8','Bw4TC2K','Ag1Aq1C','yxjKlxq','CMfWoYi','C2v0ica','DgXL','y29Z','CIiGC3q','igfUzca','CMv6Dgu','y2XPCgi','zxmGB2y','DMvYBg8','vgHLiha','WOVcKmkiWO3cHW','y2XHC3m','AguGCMe','EKXiyxq','nZjfvg1lDxa','BwfUywC','B25NpG','vxn3CgK','CMDIysG','WOBcKmkgWOZcKa','yNv0ig4','yMPoAue','zMzZzxq','vK1UD0m','BM93','DgLVBJO','B3a6mti','u25qqK4','Bgf0zvK','D1L6uvC','B25Lige','ysGYndy','z2nsr2e','y29Kzq','C3qY','nZH2AdS','Bxm6y2u','wvHhsxG','yw1PBhK','WOJcJSkiWOVcKa','Aw1Lr2e','qvfdu3C','Bwf4','tejtt2q','Chr1CMu','wKjyvLe','lwv2zw4','z2jHkdi','zciGC3q','rNnLzxC','ANfhyKG','mxb4o2m','BwvTB3i','AwrLCG','lYbZChi','CuP1Cue','D3jHCdS','D1LPCK8','vgfTCgu','CYXTB24','s2jRuxq','u1Hjr3O','C3bLzwq','ifnxlva','igLUC3q','WO/cLCkqWOFcJq','CZPJzw4','Avj0t2q','lde0mYW','q3PQD1m','z2v0vwK','AgfKB3C','DgvK','zwrnCW','AgLKzgu','C1jUrNi','o3DPzhq','Bw92zq','yM90Aca','DMC+','B1LjrfK','lxyYE2e','nsWUmdu','yxjJ','A2rKzfq','uMvZB2W','ihnRAwW','D3jPDgu','rvLnswG','BNq6Aw4','Cc1JDG','uK1msK8','yw5KicS','m3WXFdu','z2z6CuW','zxG6mJe','WOBcJSkhWONcIG','zLLVAMy','icb3CMK','mIWYosW','rgjmD2K','s2ftEMG','C2LU','B1P2seW','DgvZDa','D2fPDgK','zxfbufe','Dc4kcLq','mhGXyYa','DMfIvxm','A21QsKG','BhTWB3m','yxqG','nYWUmZu','BgvMDa','rKrxCKC','y2vUDgu','Cg9ZAxq','DgLHDgu','C28GDgG','zM9Sza','wfvvzKi','DKTsAu8','zfrIrNi','CfrNAwq','DK1XD3m','CxjKy08','veLIzMC','zg5cvhy','C25HCa','mdCSmtu','B206nNa','pc9IpG','WRaSig91','zsbUB3q','yMfJA2q','Dw1Uo2C','BM90zq','zeTLu2S','rw9ks24','Aw5MBW','ig9IAMu','swzPuwS','m3W3Fdi','y2TNCM8','wLneqMe','Ewf3r2u','AhrUzxm','ywn0B3i','AK9Vtum','DxjHimk3','vfbRyw0','C29hCMe','C0Pjru4','WO/cLCkjWO7cIW','EIaTihC','lZ48l3m','lJe4ktS','WO7cICktWPxcLa','iM5VBMu','ExrLCW','oMjSDxi','mtu3lc4','DxnLCI0','EcaXmNa','BNrLCI0','yNjLywS','s3H0De4','zEkaPJWVCW','zMy8l2i','Bg9wCg4','DfDPzhq','s211t08','B0DXsLG','DhLWzum','ztTWywq','WPdcImkpWONcIG','q2PVugO','Dwj7zM8','Ag9ZDg4','ic0GDgG','lJi1ktS','EwuU','ig9Uihq','BM8Gvxa','iNnUyxa','y2HLy2S','zsb1C2u','BhDHCNO','CMvMzxi','AguGAg8','yM90CW','C3rHCNq','m3W2','EdTHy2m','nNb4o2i','igDSB2i','A2LwrMu','WPhcICkuWORcKG','C2LUz2W','mI45lJe','WOJcJmkhWO7cHW','ExbktLG','sNjMDfO','v2vItw8','CxvLCNK','B25JBgK','zwXLy3q','EhHHBvC','WO/cImkpWONcIq','qvLfvgS','ChjLDMu','CfPRtgm','sLPLDum','ignHChq','quWGqum','BgLNBI0','zw5LBwK','B2fYzca','zxG7ywW','yMvHCMK','re1QCgG','svzficG','WPlcJmkiWOFcIa','lgnHBgm','B3jKzxi','CM9WywC','AxnWBge','BwuGAw4','BvzSvu0','zMXLEdO','DgfIBgu','B24GAwq','n2vLzJu','C2nHBge','vgHLigC','AxvZoJu','ihLLDca','tuHds0W','Axb6t2e','pt09u0e','WORcI8knWPtcJG','zw50','wvDlvg8','vvDnsYa','rgLHz24','teLiB04','ywrKAw4','WO7cJ8kmWOJcHG','DgnOzxm','yKfMqLi','zenOAwW','ywXPz24','zYbMB3i','EgzPuxK','svDzs0u','ChG7zM8','ktTIB3i','zgL2','qvrpDee','Aw9UoMy','D1DNrgG','A2nHEhC','Dw1IE2i','zNLMtMW','psjWywq','vMfSDwu','B3bLBG','zMvdAfG','D0n2zeO','BNnVBge','Dxm6nta','mNz3ldy','nZKSmtq','svH5rfG','CgfUzwW','EhvHqLm','x3j1BNq','nYWYmsW','Bgu9iMi','zsb0Age','zJzIowq','B25Z','qKvhsu4','lM1UlwG','zsbYzxa','v29Hyum','ywrgsw8','ywX7zM8','CuXisfy','BerJzKe','WOFcJCkvWO3cHW','yw5Nzsi','BgXxyxi','DK9SzLG','Cgv0ywW','qNvPBgq','ocWYndi','B1f2CLm','C3rHBMm','sgfKveC','CM1VBMS','WOFcICkpWORcLq','WPhcICktWONcIq','rJKU','igLKpsi','yM9VBa','D1L3BwO','WPhcKSkpWPdcJG','C3CYlxm','yxbWzw4','BYb0Agu','BhjsveO','z2H0oJC','Dg9ju08','ndC0odm','v2j1C04','q3HetfG','zJu7yM8','lxDYyxa','zw5NDgG','y2fWDhu','Aw9U','zwqGlsa','t1bOBue','Cg9ZDe0','AwDUlwm','WOVcImknWOFcKa','ldi1nsW','Ds1JC3m','zvbYB3a','r1vfu1m','z3jHyG','qNjLywS','r0H6r3u','yM94zxm','v2noD2S','qvnwD20','zMzMoW','BMqGEwe','Bgf5oM4','sNvTCca','igfYBwu','igfWCgW','ic0Gy2e','zwXmsge','lxGIihm','l2nHBNy','nhWXmxW','wKj0EgW','BM90ihi','AeTHsNG','pc9ZBwe','Dhm6yxu','cKLUC2u','BNmU','yMTjv2O','A3vxB0W','vvfSwfe','mcbMAwu','ywWGBM8','psiXiIa','tgDPDhK','icaXlIa','ic40nxm','Cw5cthy','BMfWC2G','r2v0Dgu','yxK6zMW','zgvYlxi','yw9yswq','lxrVz2C','yMX5lum','zw1Pzxm','DwvAufO','q3jRA2C','BMnLC1i','BNqTC2K','WOZcKmkhWOZcHG','ksWGC28','D2L0y2G','BKPQCgG','oMnVBhu','Aw50BYa','ugXHEwu','Aw1Lsxm','C2zVCM0','DwrUDvq','zwXMoMy','ywqGzMe','Exvgtui','C2fUzq','B2TZihi','CNvUCYa','mNWXFdq','ywnRihq','Ag90icG','Cgrjwe4','y0DAvKq','zxnLihq','rLbty28','DvnNruC','BgLNBG','zNvdwLe','zxnJ','Bw9xAe0','D1fyANe','ALPAuwq','EcbZB2W','BNrLEhq','A2L0lxu','ntuSlJa','u2L2DKS','oJe7Dhi','DwLSzci','rJKGDhC','BNqTzMe','CgfPCKG','ie9IC2m','zffTvKW','DwvxCMe','ug5qz2O','B2jMrG','WORcImksWPxcLa','rJyGywW','BNrxAw4','BgrZlIa','u2r1Dfe','ic4Znxm','zwLNAhq','BM90ig0','lM1Ulw0','u2HHCNa','lK1Vzhu','WPtcISksWOFcKG','AKnyuMG','CM9SBgi','ks4G','yuf1q1a','ys1ZDY0','CZPZDge','tLbdx0m','yxjT','oJPHzNq','zwyYo2y','tg1rAwm','sgPhsfy','yxvSDa','ig9MzG','v0T2ugK','Bw4TBg8','Ec1OzwK','qLruqMy','BNrZoM4','tw9KDwW','DgGY','zM9UDdO','ugf0Aa','WPdcI8knWO3cKW','ywLUE2y','mcuGBM8','mhGXma','lxnUyxa','CfvVBxi','BgW6Aw4','Dxm6n3a','otLWEdS','y2uSq28','BwuUCMu','quXUs2q','khmPigq','DhjPyNu','Et8Pica','zxH0lwe','Dw5PDhK','C2Lsqum','zxiTCMe','oJeXChG','yxjKlM8','DxDTAW','AguGBgK','vufXA1i','wKPKrwq','Fdz8m3W','vePQAve','mxb4ihi','C3LUy3m','A0Hyy3C','yM94lxm','D2vPz2G','DgvHBq','CY1VCMK','DgvYiJ4','zg9JDw0','WORcJmkgWPxcHW','WO3cLmkvWOVcIG','EfrZtK4','qMLUzgK','s2jmsgG','A2v5zg8','Dxm6mta','C3mGmhG','lwXLzNq','AgvPz2G','BM8Gseu','BhrLCJO','rJKGihm','A0TVrKm','nZCSlJu','s1vsqs0','Axr5ic4','ALPutK0','zwqU','zMLSBfm','Bg9HDhm','oxWXmhW','BMuUifq','owqPida','BI5FCNu','DdOG','t2Dsq1u','CJPYz2i','AtmY','mJrWEdS','Bwf4lxC','C2fRDxi','C3rLCa','zNjVBsa','WO7cKSkqWOJcKq','Aw9UoMW','nsWYntu','WOFcJCkpWO3cLq','WPpcKmkiWPlcKa','lKHfqva','q1D5ELC','Esbku08','thb4rMi','DcbZCgu','C3nrDKy','psjTBI0','B3j5','WOZcHSkvWPhcIG','zw1LBNq','rLzpshO','z2v0q28','lxDPzhq','DKXftNG','vhDyEwG','Ec8XlJm','zKDRy1q','yM90q28','ywnLo3C','yxiTDgG','iJ5gosa','AhjStM8','A2LUza','mMjRvMTkEG','C3zNE3C','BK5LDhC','ChrLza','kZb4mJK','r1LXr0O','AhnMBha','BNrPyxq','i2zMnMu','Aw4TyM8','vgHHDca','DMfZrNK','Bvb6v08','thbyD3K','CMvKige','psiXmIi','D1zSDu4','Aw5NoJi','WPlcI8kmWOJcIq','BgfIzwW','sLPtAgK','idaGlYa','C291CMm','WOFcK8ktWOFcHW','t0XIBLi','DJiTDge','v0rfsem','zxnZywC','mYWXmdy','EgjpAwu','WPdcK8kqWO/cIa','ys1LC3a','B1nYyNO','zxnWia','BLzPzxC','AwvSzca','rgTKEfm','zxzLBNq','yvHbvK4','CI1Yywq','lNnRlwG','Ag90ig4','yZKIpNC','yxmSBw8','zxj7y28','igLZihi','u2vNB2u','ntK1mJaZy2PJy1rf','BcWk','ztTTyxi','CMfTzs4','BLLmrvK','wujlELq','C2STyNq','vvvAEe0','rMv6vK8','o29Wywm','iIbZDhi','WOVcISkhWONcKq','ihjNyMe','zvjLy3q','mmkWlcbW','EI1PBMq','svzkvxy','DxjHpc8','y1bUu3q','psiXlJi','WPxcICklWO3cIG','nsaWlti','WPxcJSkpWOVcJq','mda7y28','AwX0zxi','uwHxCMu','vg90ywW','kgXVyMi','q0HeBwm','WORcISklWO/cKG','nwmWidm','te9OwvG','CgXHEwu','BNq4','DgHLiha','ntuSmtq','y3vYC28','AhvKlwm','Fdz8mhW','t0Xqwg0','zuL0zw0','yMvhDKG','zwfKywi','ig9Mihy','CfnSEMy','yw1L','zMLSBa','zLnLDuO','WPtcKSkgWPlcKG','Ec13Awq','v2LAtfG','y2TmzKi','CMvWBge','sKfoAeK','WO7cHSknWOBcIq','D2fZBvi','CMvZB2W','WOFcI8kiWPdcJG','zMfJDg8','yxrHihi','zxiTC2u','D2vnB2i','nxWZ','Bwnjwxu','WPxcLmklWPpcIG','yM9KExS','WO3cLCktWPtcIW','CwLWEwq','DgL0Bgu','CNjVCG','BI13Awq','B21Tyw4','vxfdwfC','CMX6vuW','q29WEsa','WPpcHSkhWOZcIG','zePzBeq','uMz0q0i','B3vYy2u','ihbHC3m','zxHWB3i','zM1uDNq','Fdf8nxW','EdOYmtq','mhHKna','BK1HBMe','EK5lufq','iZHKn2e','wu9NA00','WORcH8ksWPxcHG','Ag90','wwDuuNq','y2fTia','AxHLzdS','q294tuC','yKfbAxy','B2zMC2u','C0nqAKe','C2STy3q','BwfW','Bw4TDg8','yMzJz2e','B25LoYi','lJuGms4','C2STBge','Bw91C2u','mxb4ihm','qMvgDui','txvSDgK','Aw50zxi','zwqGyNu','y3jLyxq','DMvYC2K','imk3igzV','WOJcK8kiWPxcIW','qNjPwKe','DxrVo2i','WORcKSkkWPhcLa','s1LHtgO','vwzTs3q','pc9ZDhi','Ce9SAKe','lwnVChK','D1DuAem','WPxcISkmWO/cLa','oJi2ChG','C3r5Bgu','BNqZmG','DMuGBwe','y2LLuvG','uLbSz2m','z3jHyMi','DMfYkc0','ihrOzsa','AureywC','WONcLCksWPdcHG','rhfYC20','DxjHtwu','mte4nJi1s1LkDvry','BMCGzM8','Aw1WBge','iNDPzhq','z1bVDxi','zsbNyw0','zeHjDuG','mtyYwxfeCejX','zM92u2e','zerOENy','mJGPo30','AguGC2K','zhrOoJu','ntb1tK1TqKO','ifbpuLq','B25TB3u','BM8GD2e','CI1LDMu','z2rNB3u','WOBcLmkuWO7cJq','z2H0oJi','zMrxzha','Bw4Ty28','yw5NBgu','ic0GCNu','igHHy2S','DcbUBYa','ihLLDa','z2fTzsa','BM8Gtw8','rgrJy2G','CufNt3C','C2L0Aw8','CM9Wlwy','BNrLBNq','EejqvLO','mdT0B3a','n3WWFde','WOBcLCklWOBcKq','ztOXnha','vgnLwu4','Bwv5txu','AxrOie0','yxmGzMK','sgX5CuK','BIbHihi','CZPUB24','zxmGDgG','yw5JztO','B25NE2m','DMvKigm','Au1AsMy','DdOXmxa','wuLtuge','AMjxtMy','zuvSzw0','mhGXqWO','Du95tum','Bw4TDge','rfvTELy','y0PVv3u','y2XLyxi','DgGGB3i','BhKUieG','t25ezxm','ns00idC','yvPVzee','yxa9iNi','CgX1z2K','DgvYo2y','tMvMvK8','WO7cI8koWPhcJa','CMf3ugK','C2STBwq','zciVpG','idfWEca','q291BNq','mtTTAw4','t3Hwv0q','B3rXD1m','DhHVshu','A2vKpsi','BMvQB2K','r3PMAxy','weXurg4','nda4mti3ognND0vbBW','tNvyEw0','y29SCW','A21Mr1y','id0G','ifnxlvC','B3bLCNq','oteYoda3mfvIzhfJrG','mNW2Fda','uLPjuuW','v1HWufu','mtbWEdS','nIKSAw4','Afrjyvm','Bgv4lxm','ru5ept0','AgvHCfu','AgvSBg8','BMu7Fq','DhLWzq','BgfZDa','zNDeuxa','C0vqBva','BwLUkdu','ueXbwuu','zfrpwuW','ig5VDca','WOVcLmkiWPdcIa','BwuGD2u','EujduNK','AKToqwe','WPpcImktWOJcLq','lwHPBNq','B2n0vxC','lNnRlxm','yLryvLG','DhDPy2u','zNbZ','zw50zxi','Fdf8mG','BgLKihi','ywn0Axy','WONcKmkhWOBcHW','Ag9VA1a','lxDLyMS','C3bSAxq','jtTIywm','revot3i','oJOTD2u','rviGvvC','zM9YBq','sxr5CNe','WOFcJmkgWONcKa','igvUDhi','CMqTAgu','nsiGC3q','zhrOoJi','zLHYCKy','CgfKrw4','zMv3sg8','wgXStwu','wKniAg8','Dw5PDa','AwnOigy','oJK5oxa','mhWXm3W','BeLcufq','zwTTDwK','CYGXlJe','igfYBwK','zsXdB24','yMvNAw4','Aw50Aw4','4Psa4Psaia','i2jKytK','ksbZyxq','mJi1nZmYmxruvNLosG','BcbKAxm','zJWVyNu','ihbVC3q','Ce9uCuu','yw1LihC','nsWUmdG','yw55ihC','z2v0q2W','ihDYAxq','y3rZimk3','zZOXmha','thzUEfO','EMzpChO','zxLL','C2L6zq','ihn0CM8','BdPPBMK','mtfWEdS','mca0ChG','rxPZBue','zM92','CMeTBwu','sMfoseO','sK5puwe','AwvK','u2v0tg8','y2XPzw4','C2XPy2u','mNb4o2G','ig90Agu','ihnPBMm','WOVcHSkoWPxcKq','pgrPDIa','uvvQA1u','Ad0ImIi','v2Tmzgi','y0jmwee','FdL8m3W','q1HprMq','ktSGBM8','ihvUyxy','EtPMBgu','B25PBNa','BM5VDca','sg9VA3m','CY5Tzw0','EvrHCa','z2fTzvm','C3CYlwG','qwn0Aw8','rxLL','lwe9iG','C28GAg8','i2zMogy','uKT2whm','Dw5KoNi','uLP3y1G','lxrYywm','tw9KA2K','ChG7yM8','lxjHzgK','rezRC2e','zw51','nhWXFdm','BwvTyMu','zhrOoJG','q29TCgW','psiXlJu','o21PBI0','DgvYzwq','Bg9ttKq','yuPkwLi','nJTMB24','C2v0sw4','WOFcH8kmWOBcHG','v3jHCha','sgvPz2G','zxi7D2K','igjSB2m','BI1PDgu','WPdcLCknWPdcIa','BhvLpsi','zZO0ChG','zdDHotK','keLUC2u','AMrnENm','CKrJy08','WORcKSklWO3cKq','t291vvm','rwXwq2O','vMDnt1q','zsGP','sw5Jyuq','wM1hufO','v3fXA2y','pc9ZCge','WOZcK8krWORcIq','z2LUigC','B3DzzMe','Cuf5t2C','CMLNAhq','rNHhtNO','ktT9','whjgu00','WO/cK8kgWOVcJG','BMC6nNa','WOVcLmktWOBcJa','z2LUoJa','nhW5Fde','DMGGlsa','t25qDNK','iJ5VCgu','rMLVyK4','B3zLCMy','DM1wEgC','ywLSzwq','yMTPDc0','ys1ZA2K','zw50lwm','B2XVCJO','wujdq1i','zg93','WPpcKSktWPlcIq','ihbHBMu','AxvZoJe','zhfdDxC','qM94zxm','ihDOAwW','AxrSzxm','r2rgrKS','CgfUpG','CgXPzxi','ufvwEg4','q0Dky3e','AhjLzG','rxHWB3i','ysGYntu','vxbKyxq','zxHPC3q','B3qUBw4','zgvUDgK','yxjTAw4','o2jVCMq','CMeTCgu','zcWGBM8','zxCGy2e','shnsrLK','C2f4u04','C2STCMe','zhr2zgu','ig9MzNm','svz2Ehu','B3vUDa','idqTnc4','ihjLywm','zgf0ys0','DMLLD0i','r0jJwvi','u2zjAK8','DgfYz2u','y2LXuha','CJOXChG','zdP0CMe','mJbWEcK','tg9Hzgu','Ahq6nZa','Ewf3','C3LZDgu','x19ZywS','u2vSzwm','ihzPysa','y2XPy2S','qNj2zxu','q3PpC0q','rxf6DwG','BY1MAwW','z2TXshG','pgiGC3q','z2v0rwW','Dc13zwK','sg5jD3O','WONcK8kuWO7cJa','rKz0wLq','qxrgAxi','DLrsz0y','lwLUzgu','psjJB2W','Cg9PBNq','DgHLig8','ndmSmtC','mda7y3u','B246zMK','lxbHBMu','WPtcKmkuWOZcLa','ksbVCIa','zNjHBwu','mwzYksK','BK5ey00','CwvgAMi','uw1ewKy','Dg9WoJe','AguGD3i','BNvTyMu','Awr0AcK','lwjVDhq','iIbTAw4','u2vLBG','v1H6Evi','yxG9iJu','ywrKCMu','zw50rwW','icbMywm','WO/cJSkpWOBcKW','BKL4wgO','yxjLBNq','E2zSzxG','C3vYDMu','rgzRsKO','zJmY','CML0o28','AcbMAwu','zw50tgK','lxaSnta','CJOWo2i','u1nODNK','DwvJqMG','EdTMB24','AfLeuwC','phn2zYa','rKLoq1K','q0DNtvq','rwnkuKe','mxWW','WO7cJSkuWO/cLq','zYaVigO','Cg9YDca','i3n3mI0','4OcuigzYyq','sw5ZDge','BMCUcG','lM1UlwW','WOJcKmkvWONcJq','WONcICkoWPlcIq','lwTD','CMvH','BNn0yw4','vwj2AvK','ChG7yMe','zgf0zsa','Bd0Ii2y','Dev3EwK','u2HWrKG','B24GDgG','lwH1zhS','CfDqAhO','sKv1y1u','DxrVo2y','WPhcLCkhWOJcKq','WONcImktWOVcIW','Bhv1qwe','DhLxzwi','zg1SDe0','rur5sei','BM8GCMu','Fdf8ma','DgfNtwe','ywrKrxy','v29YBgq','C3LUyW','yxrnCW','DgG6BwK','oJeYmha','DgHLigW','Eujkrwu','sMLHBu4','Ec1ZAge','Dxr0B24','zNKTy28','sKLMD3e','nc00lJu','zxaGDgG','BMu7Cg8','yxjLzca','Dgr0wvK','zIb0Agu','CNzRu2e','v19F','zhKIihm','r1LAB2K','yxrPB24','Bw9YEvq','BIaUC2S','zuPQuee','Eev2zM8','oxWYFdq','WONcLmkmWOVcIq','EwD0r0y','ChbLyxi','oJi1ChG','A0LJBe8','z2v0','khmPihq','q3rfEgS','zgLUzZO','sgnnDfq','WONcKCkgWORcKq','EMjmtNy','AeT2yNm','o2jVEc0','ywT1CMe','ALnbvxu','BgqGB2y','AwDPBMe','uMvNAxm','Cg9Zqxq','Aw5Qzwm','mtb8mNW','AguGB2W','m3W3','qvjcrNe','yMXVy2S','oMzSzxG','EMTyA0C','WPtcJmkpWO7cIW','rg1Vv3e','C2STC2W','nJiWChG','lNnRlxa','teLwrsa','C25HChm','Fdv8mNW','WPxcKSkjWPlcHW','C3veufu','WPpcLCkvWPpcIG','vLbLwvO','DgfN','BNrezwy','CNvUDgK','BeL2DM0','zgrPBMC','ue9Qy1u','imk3ihrL','z1b3yvG','psjIywm','ALb0B2K','C2STy2e','Bwvhyw0','BwLUv2K','CNj7y28','C3rYB24','Bw4TCge','WOVcImktWOJcKq','BMnL','tMTutha','C28GC3q','zMvLDa','EdT9','BwfYz2K','ihjLCg8','WOFcLCkpWO3cJG','zxrOAw4','mduPo30','oxb4ide','sevbufu','ChqGsvm','ifrOzsa','z0PIDMW','Dg87iJ4','zgTPDa','BMD0AcW','WOBcJ8kvWPlcKG','ChG7iJ4','wNjXAvK','CvLXwK4','zgnswvK','B250lxm','lc40nsK','sfveigq','Fdb8nq','Awv3','B3rO','BwvZC2e','WOVcHSkuWPtcKq','rw5LBwK','CM93CW','q2nuzgG','C2v0','uwHVywq','zwqGlYa','B250lxC','CYb1BMK','C3rLBMu','WO/cJmkgWPhcIq','DYbNBg8','DcaWicG','BfDHCNO','ChG7y3u','Be14B3a','ywrPDxm','CMvUDdS','r0vZzMS','mcaWige','B2TLlwW','oInMzJy','yxbWzxi','mxW4Fdi','BJOG','WPdcKCkrWOBcIW','q3vkDLK','zMLSDgu','BgvYkW','zNfiqMe','D2f0y2G','vKDkDNq','AgLSza','pgj1Dhq','mhWYFdu','zwqGysa','vwHMrha','nsK7','y29WEq','WPdcK8krWPhcIW','tfP6tuC','C3rHDhu','A3PLr20','msiGDMe','B3i6i2y','Bg9N','Cuzmzhe','r2jbr1a','nJaIigG','uNbiwNu','y2HHvNe','Dw5KiI8','A09hq20','y2fTzxi','CgHVDg8','lY0WlJu','mJq2ldi','C3rYB2S','ywi6Ag8','DgfYDdS','C1f1BLy','vu5Vsvy','C2L6ztO','As1TB24','BMDZ','WPlcImkqWOZcIa','zfjbrxm','sMX0A2m','tMTNA3q','sfDHCfO','ywDLCG','WOFcLmkrWPxcJW','tg5evKS','DgnO','Be5fAuC','DdOXnha','r05dzhG','s1jJq0C','BcXTAw4','AxrSzsa','yMXZufi','yIXH','ihn0yxK','AwzYyw0','A1HHEKO','WOFcJ8knWOVcKG','oJyYDMG','B2SGzMK','CgL0y2G','D3fwwMi','zwqGDgG','Bu90twy','BNq7y28','cIHJBgu','A2v5qxq','ihnRAxa','WOJcLmknWO3cJa','tw91C2u','zMy3ytK','vMLLDuG','WORcJSknWORcKq','BJPJB2W','BhvNAw4','iokaLcbUBW','qxnZzw0','mJu1lc4','Dc5wywW','sYbZy3i','msiGC3q','WO3cKCksWPpcIa','tg9VA0a','Aw50iIa','yNnvyxO','CMvNAxm','q29UC28','y3qOCYK','igHVB2S','nhWWFdG','WO3cK8kvWORcIa','yxGTD2K','iIbMAwW','sgjUvhe','zxi7zM8','qNjHy2S','Esb0Exa','qwDIr1G','CenVBNq','reHAzfe','mNm7Cg8','BMCGyxq','WONcH8kpWPlcLq','r3fIrKm','DxDTAYa','igrPzca','DMvYEsa','lxnOywq','BgLUzvq','s3jgyLC','ywnLlem','oYi+ltW','B29M','B2f0nJq','Bhf3tva','rNr5s0C','WPlcJmkjWORcKW','tKvzALC','iefdveK','yNvMzMu','CMuk','CYbVCNa','D2H5','zxjHDgu','ug9ZAxq','z25HDhu','r25jwgm','vxnLuuG','o3rVCdO','yM9Yzgu','AdOWo30','BgvMDdO','A1jYDM0','mhHLoa','DxjHlwu','AxnmB2m','BIbYzwW','lxrPDgW','zwvMntS','zM9UDc0','Dw5Kic4','zvLTtwi','AefZB1y','z1r1ExO','oY13zwi','DMfS','zgfY','lc4WnsK','BNrYB2W','igzVCIa','WOVcKmknWPxcHG','igrVy3u','yM91BMq','WOZcKSksWPpcIG','BeHyv3q','Awv3igK','vKTXA2m','sMPyu00','nhWY','s2Hnyxe','zsGPlMu','uMvHC28','Dg9YqwW','idrWEca','C0XkvNi','EwvYqw4','Aw50lxC','Cw9PzgG','yxr0zw0','AxbIB2e','BNqTD2u','ie1ciea','zMXVDZO','yMrHowm','mJeSmti','CgfKzgK','C3bHy2u','DMvKia','m3W0','zxrL','ywnHwum','mhW0Fdy','CMrLCI0','BNrLyKW','D2fYBMK','Agv4','yurMu1C','sNHRuLi','A3vYyv0','AgXwv0S','nxm0idi','Aw5Ly2e','lsbvBMK','EwPOB3i','rwPPEgu','WO7cLmktWPtcJq','WPlcKCkiWOZcKa','nxb4o30','mtC3lc4','BMTNEMW','mIaXmK0','w2rHDge','CNqP','nhWXFdK','DhjVEq','DvHpAKu','z2fTzq','zZO2ChG','Ewf3qxq','yuzYB20','ru1HrfC','CdO2ChG','DgHLigC','tg9VAYS','Aw5N','tg9VAW','CMvMAxG','oYi+','Afn1wKS','BwuOkq','zwfKEsa','zxmGBM8','DevKzLe','phbHDgG','C3rVCfa','Cg9Z','AgvHCca','kde1mcu','C2v0tge','t0PQuKm','yxmGBM8','qujSsve','EKf3t2S','nNW1','yw1LlGO','CdPYB3u','yMvSB3C','zxjZyc4','t0fPCgy','ihn0EwW','sfDLru0','zuDPtem','yxjKlwG','kdiXlde','Dg9Nz2W','WPdcJmkkWORcKa','u2j2DKW','C3zPCge','DMj1Au0','zxKGAxm','o2fSAwC','BgXLzca','kdiYChG','zLzsr0W'];_0x2c90=function(){return _0x13bea9;};return _0x2c90();}
