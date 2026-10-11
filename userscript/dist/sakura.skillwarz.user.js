// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.2.1
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

function _0x2a3e(){var _0x397fb7=['wgrXwxe','igDSB2i','s0rXtvm','D2fYBMK','BM90zq','zwf0zva','v3v1svC','Dg9WoJe','ztPWCMu','ywrPDxm','oJHWEdS','CePjsg0','AguGC2K','CY5Tzw0','BwuGAw4','zcb0Agu','DgHPBMC','CgHuzhO','oda0mta4vgXouMDb','AgLKzgu','AKDKq2K','zw5NDgG','o2jVCMq','igrPzca','ig9Mia','B3DwCLm','qM90Aca','zwfKEsa','z1LAtxi','yxr0zw0','icaGica','C3rHCNq','zw50igK','nhWWFdi','tw9KDwW','mhb4idu','DMzbz08','y2uSihm','AwzLig8','D2HlAfG','D2HPDgu','CgfYyw0','y2fWDhu','yZfKo2m','vvjqqw8','Bg9YoIm','BhvLpsi','C2fRDxi','tM8GCMu','B3jKzxi','zYdcTYa','B2SGzMK','ihzPysa','Ag9VAW','BMfSv2e','igDHBwu','qxzYq1O','BwuUy3i','ihbHC3m','rviGD2K','u2nPDM8','ignVBNm','ifnxlvC','AwnOlJW','rNfjzwe','AZPICMu','BwuUCMu','iJeIig0','y2XVC2u','igfYztO','o2zVBNq','ChG7y3u','C2fjtwi','AwnLihC','iJ5ZywS','mcbVzIa','DcaWicG','BMnLCW','yxjTzwq','CKn6s2y','AgfZtw8','oInMn2u','C291CMm','igfWCgW','nhb4idK','t2zMC2u','ihDHCYa','uwTmDfe','q1bZAfm','B2f0mZi','q3jWqKO','rhfHueC','Durvv0C','AgLSzsa','q291BNq','oJC4DMG','DLDIruu','u25JA2W','C28GDgG','zxjLzca','t1njsfu','BMuUifq','Axb0igK','odq1mwTmEwnOrq','D2fZBvq','EsbMywK','ExbLCW','qKvhsu4','ug9PDwK','AgLergq','BJ8PoIa','icaGDhK','zgL1CZO','yxr1CMu','ueLLzuG','zgL2','y2GGDgG','zsDZig8','ywLSzwq','D24Gvxa','BwfW','vKDuDLG','B29RCYa','DgfNtwe','AwTLlIa','zgTPDc4','igLKpsi','x2DHBwu','vMLet2y','sg9VA3m','yNv0Dg8','A1HqEeC','A2n5Dve','CxzhzhC','wejgueW','y0DPzuu','Cwn5q2G','ig9Uy2u','yNL0zuW','iIbZDhK','qvrHDNG','zxnVBhy','zhvSzq','Aw50Aw4','ihbHBMu','vfHMqKi','Aw5Qzwm','wgfMsge','iJ5gosa','i2zMogy','zxi7iJ4','CMfWoNC','mhb4ic0','zwn0ihC','BuzeEuy','ru9tvwu','DcbIzwu','zJmY','DdOG','nMTbuwDRzG','CMvUDca','ie9o','Bhj6CLu','u1rSAgq','ugfwDwy','mtrWEdS','DgnOlG','BhvLica','C2TPBMC','zw50tgK','DMvhyw0','yM9xrvG','zxnZywC','CMvWBge','lK1Vzhu','BfHutui','o3DVCMq','CMrLCJO','z2fTzq','BNq6Aw4','ysbNyw0','BNrPyxq','zwvKzwq','mxb4idy','ALLosgu','uNPprfu','ifrOzsa','DxbKyxq','ndb0BefRA0m','r2fTzsG','ihrOAxm','AgL0CW','rwXKAuC','B3i6iZG','CNnVCJO','vgHLigC','yxG9iJu','CNfMtKu','BcbKAxm','BgvMDdO','EhzqqLO','ihnPBMm','AwzMzxi','zsbLDMu','CMv0Dxi','ENjTu1i','ihnRAxa','zxqSig8','CfDnBgG','oJK5oxa','DgHLBG','CuLlDxO','wuHSt0O','rhHADxG','zwqGDgG','CgXHEwu','y3rZimk3','wKLVsg0','BMCGB24','ys1ZDW','CY1VCMK','zwLNAhq','C3bLzwq','mJbWEca','vhfvwK8','z0LzBLG','vw5PDhK','zsbUB3q','BgvUz3q','Bez1BMm','n3b4o3a','zxG7z2e','CMnWs04','BuPTzfu','Bwf4','zwfJAge','Dw5UAw4','ktSGBM8','A29cree','DhrVBJ4','qNLjza','y0j2uvK','AtmY','thv0qKS','CfbNCwu','ChqGsvm','B3b2CgG','DtmY','l3nWyw4','EwHYv3y','CK1msu8','vwvize4','B2jQzwm','vw1Wvfe','DgHLiha','zxzLCNK','vMvXuwO','BI1PDgu','AvnyD0C','zMDiwM0','DhLWzum','Dte2','B206mxa','D2fYBG','yw55ihC','yw1L','sgvHBhq','zxi6mdS','t2P5vMO','Bwv0ywq','igzVCIa','Aw9U','C2fNzq','CMeTC3C','BejqCfa','DYbNBg8','wevjtuK','Dc5KBgW','DgHLigW','zhvYAw4','q2Xdt3a','igL0ihm','AwDPBMe','C25HChm','C2HHzg8','iNn3mI0','z25HDhu','igj1Dca','zgLMzMu','vujABNa','Ate2','BgW6Aw4','t1rAzKK','zsXdB24','A2v6zha','oJeYmha','uNvUihq','qMTpsLO','zgLUzZO','CJPWB2K','CIb0Agu','zuvSzw0','ihjLywm','ic0Gy2e','ywn0B3i','twfNthK','DvD2wMe','zJWVyNu','BhDHCNO','Ag9VA0y','zxiTCMe','D29steO','y29SB3i','BgvKoIa','BwvZC2e','AgLKpq','A2v5vxm','swjJt3e','ru5ept0','q29WAwu','BMfTzq','zZO0ChG','ksbVCIa','pZWVC3a','wenNANa','zLjYs1i','DxrVo2i','EhbVCNq','DgvYo2y','lde3nYW','zw1LBNq','vMPts0q','zgvMAw4','y3nLtfO','BM93','qvbvoca','mtjWEdS','r3HmywO','yxvSDa','AguGAg8','khmPigq','yxbWBhK','ywjZ','tg5oAue','qxrgAxi','D1DHs04','BhzAC2S','D2HLBIa','Cg9Z','seHczKq','khrOAxm','igzHA2u','EcaXmNa','CYb3zxi','AxmGBM8','uMvHC28','uwrQzMO','EhbjtfG','BcbHz2e','EwHlBe0','AK9gsKu','rgLMzIa','txfLr3C','swLAyu0','BgrPBMC','Agv4','BMrVDY4','CwvuDg0','wNPQtKe','wevnzMG','Ewv0lG','CM93CW','pc9KAxy','igfYBwK','ywSTD28','zgf0yq','uMvNAxm','BNrPBca','EuDitw4','yMLUzgK','y1zZELK','B2jMrG','DJiTy3m','A1Hesgy','DMvYEsa','AfPAA2O','zu1owxm','BNnWyxi','AgfUzwq','uKP0rxq','rviGvvC','AcbMAwu','psjWywq','yxjN','zwrnCW','Aw9UoMy','lwnVChK','BNq4','B2jMqG','B3CU','v3nZsLO','EwnTywC','D3jszNK','uxPey1K','BwLU','Bwvhyw0','tLnjreu','BgfZDeu','wgrju3K','BNrYB2W','mJGYzuHjAhDt','Aw5KzxG','uLfKqMC','B2XVCJO','Ag9ZDa','B3vUzcW','y3vYC28','CujOt2u','lxDYyxa','vwniyM4','EeXSq0K','B0T5t2G','B3jYAMG','Fdr8mNW','yMfZzq','DxDTAYa','CenVBNq','4OcuigzYyq','Fdf8m3W','Cg9YDge','thPcr2y','uIbbq1q','nJTMB24','mxb4ihm','u01ptfy','u2vSzwm','yNL0zu8','z1Pptha','BMnLC1i','zMfPBgu','ywn0','ufjoC3C','y25OuLC','DgHLigC','yMX5lum','Aw5MBW','wKDNu2y','C3rHDhu','ys1ZDY0','BePJsvG','igHVB2S','tuSGq08','vfnRAuC','sg5Rsw8','zZOXmha','zw4Gyw4','z29yt0W','BwvTB3i','Ag9VA1a','sKjHyNu','C2L6zq','zxHPC3q','DMvK','B0vAB0m','icaHia','z2XVyMe','B2zMC2u','BM8GCMu','CMvSyxK','uNvUDgK','q0DJqLq','CgX1z2K','Awq9iNm','DNvKzxK','AwrKzw4','svvcDhu','uMvZB2W','nxWWFdy','CMuG','sw5ZDge','EsbHigq','Bgv4lxC','Dg9W','zxG7zMW','vKvdtvK','BwfYz2K','AxvZoJC','CNvUDgK','y2GUC3K','s2rgt2m','tM1XtgS','CML0Dgu','A2LUza','AxrPywW','DwLSzci','y2vKigi','DxjJzq','zg9JDw0','z2vY','B3nWywm','ywjSzwq','psjZDZi','Dc1ZAxO','zYaVigO','BNvTyMu','Cd0Imc4','tKPkBLG','AhjLzG','z2TlDKq','BMCUcG','ufjUtNO','t2TNDM8','mYWXnZC','Cg9WyKO','phbYzsa','oJfWEca','zvbSDwC','mtqWmtu0nuvWvhjyEa','yxbP','vhDuq0W','icaYlIa','BgP4BKC','ihbHDgm','ywqU','BMnL','yxjLige','ksWGC28','AM9PBG','wLrRCuy','zgf0yxm','BfDHCNO','Axr5','yw1LihC','tMDzt1u','Cg9PBNq','Aw5PDgu','igSWpq','DxDTAW','rg9lqLy','Bgu9iMm','Ag9VA3m','lwL0zw0','lxyYE2e','BMCGlYa','D0nyBxa','C3CYlwi','BMfSrNu','De9kA1q','BI5FCNu','vLP6De0','tgfNuLa','nxW0Fdi','yxbWzw4','CMfJDgu','C3rYAw4','ztTTyxi','DMvKpq','yxmGBM8','shv1wMe','BIbtruu','y3qGzM8','Bgu9iMq','z2v0q2W','DefJEfy','zgTPDa','ifnRAwW','y3nZvgu','EcbZB2W','sKDwzgO','DgnOzxm','Cg9ZDe0','DgG6mZq','CNjVCG','BuPpwgu','B0reseC','BIbuyw0','sevbufu','teLwrsa','CgfUzwW','q3jvzfy','lsbvBMK','ifbpuLq','AwqGCMC','BgvYigG','zMLSDgu','Dgv4Dge','u3rYAw4','DZiTB3u','Fdf8mW','Dg9Y','verpDgy','DMuGBwe','C2v0sw4','vfvky2i','tgjxrve','ignHChq','v1vfD3K','oYi+','wfDjENO','CZPJzw4','DgLHDgu','ELLPzve','igHLEd0','zxj0Eq','EwjNDeK','B3j5','C3bSAxq','s3j4qM0','zxH0','uMDvAeq','mcbMAwu','s1vsqs0','Ahf2wve','zuf0rMK','txHACNO','zMLYzsa','CMXHyMu','Dg9ju08','CgvYBw8','rfP0wg0','uMDAu3C','mtjWEc8','jwnBC2e','BLr5Cgu','qxrbCM0','nYWUmZu','DgvZDa','vMfSDwu','ug14CwC','zhrOoM0','igL0igK','BNrLCJS','r2fqwg8','C3qGysa','B2f0nJq','yLDtuuW','m3W0','B3j0lGO','DerHDge','oImXnta','ys5ZA2K','CKnVBg8','C29Syxm','D3jPDgu','Bgv4oJa','ywrKrxy','ig5Vigu','zcbKAwe','igLZig4','pt09u0e','DhLxs1e','CMnLoIa','DgfIBgu','tefHBvO','ig9IAMu','zwy1o2i','ihjLCg8','z2v0sw4','zsbYzw0','DhLSzt0','phnWyw4','i3nHA3u','AgPoB2y','Bw9YEvq','BhP4z1a','zsbYzxa','ugnXvKO','BMqGr0C','BLziseS','Aw5Uzxi','zsb3ywW','terYvwe','Dcb3yxm','ChvZAa','B3vYy2u','vKuGDG','zsbPBNm','ChG7Cge','z2fTzsa','yxbZAg8','igfYBwu','DgfSBgK','A2v5qxq','zxnWyxC','C3rLBMu','BuTWCg4','CMfWoYi','igrVy3u','rwL0Agu','Ag90','rgrlAKm','zw5HyMW','DciGC3q','Bg9N','Aw5KB3C','zdDHotK','DgvYzwq','idHWEdS','DxjH','uwnSrgy','BNrPBwu','BMqU','ysbSB2i','mZKXnty3nuzJy2jsDq','C3vLv0O','rKnNt3C','BMfczMe','msiGDMe','ChrLza','zxjYB3i','Aw5ZDge','ywrKCMu','y21K','DK5VwhK','wNH3wNC','Acbxzwi','Dgf5CYa','zMXLEdO','yMX5lMK','Ehbtu1C','t3z1yve','qNHuyMK','iefdveK','mJHsDu5yCg8','AgvHCfu','BLvpEe8','igjVDgG','AxmGD2G','AxjLuhi','Aw50iIa','idaGyxu','s1P1teS','CMfTzs4','B25Jzsa','mNb4o2i','CMfUzg8','CgvJDhm','Ahbrveq','DgLUzYa','icaGia','y29WEq','C0zdz0O','zwqGB2y','CMvMzxi','vfLPqKG','ww5wtMu','tuvPsxK','C3r5Bgu','Dvn3EhO','nZq4mZa','CK1IEKy','wNvzthO','mJu1lde','AwvK','ywnRz3i','whnUr3G','x3j1BNq','DxjHtwu','BYbHihq','Dgv4Dem','yNnhq2W','A2vKihu','iIbZDgu','zNvUy3q','CMvWB3i','zsb0Age','v2vqyvC','shnUy0u','ms41ihu','B3vUzdO','DhjHBNm','v19F','ELf4vLG','BLfNqwC','CMvZB2W','s3H4AMO','B250zw4','Aw50zxi','C21uExa','EdTHy2m','zKjWwNi','wevire4','Affbv0e','u1PbCMe','zYbMywK','zxPLyNK','yw5Nzsi','v3fvr2K','CMvTB3y','BM9Uzq','z2v0rwW','C2XPy2u','BhqGC2K','Cun2A1u','ihDOAwm','Aw1L','yxfJwK0','ywDLCG','wwLZuhe','CMvH','CMq7zM8','Cxz6CwO','ufKGve8','i2zMyJm','zgLZCgW','zJfIo2i','rg1iq3G','C2vSzwm','AxnWBge','BM90igK','mhb4ktS','yxjKlxi','igLUC3q','v3jHCha','BLj1BNq','C2fUzq','lYbZChi','lxDLAwC','yMeOmJu','BwfYA3m','C1zODNm','Chz3ufa','A2T5v3K','rvnqoIa','t1PRC0C','yK90rhe','rw5LBxK','B2SGAxm','ihbHz2u','lcbuyw0','zujnEfK','i2jKytK','qxnZzw0','nYWUnsK','wLPis24','BxmGD2K','DZOWidi','zgvYlxi','B2fYza','BNqZmG','tvr2uwu','DYbLEha','ANnuuMe','mhWYFdm','tMLvEeq','BMuGAg8','yxnZtMe','AKzJuLK','zgf0zsG','vNPLC1u','yw1PBMC','EMDSwwK','B2jM','DNCSnJi','C2v0rMW','nZCSlJq','A3mUBgu','BIbYzwW','z2fTzvm','zxnW','DxjJztO','qu5pveG','zwqGysa','ze9vuey','DxjLzca','pgj1Dhq','u3zTqNe','yNvMzMu','B2TZigW','zhr1sei','nYWUncK','sfrnta','icaO','rLbty28','Du92BxG','zwqGyNu','DhKGAw4','zxmGBM8','iokaLcbUBW','qxzoExK','ywXSzwq','nhb4ide','lxjHzgK','z2LMEq','D2HHDca','vvfbq0q','yM9KEq','ALztEKC','mtm4mJKZnMPgBvLZwq','BMDZ','CMviuvO','ztOXnha','lwjVDhq','ufH4u3C','BwuGlsa','Fdr8nNW','zgvYoJe','zIb0Agu','Dg9tDhi','AgvYAxq','BvPYqMy','qNrTvLm','AgLUDa','suTWvuO','icaGDMe','igHLyxa','rwPwsKe','DgGGB3i','ntuSmtq','C2nYAxa','BYb3zsa','zJu7yM8','CMuGAwC','nxWZ','AxjZDca','z2v0vwK','A2v5u28','B3qGD2K','z2LUlwW','vgHLigG','BMD0AcW','yvnKD1i','x0DHBwu','o2zSzxG','yMfSzwm','DgvK','DcbPBMO','D05XzK8','Ag90CYa','EgTxEg4','CI5KBgW','y2HLy2S','DcbTyxq','ywLSywi','B2XLig4','vvjbx1m','BJOWo3a','qM1yDeq','Aw1Lr2e','DhDPy2u','Bg93oMG','zJy0','icaXlIa','i2y3zwu','kZb4','CJOJzJC','msiGC3q','A2rWsNy','ztOXmxa','DMvKia','EdTWywq','CM9SBgu','CNvUBMK','rvDiCM0','ywz0zxi','vgHLiha','ihrOzsa','CKnVBNq','ChPJrfO','su1dAw8','B29M','ywWGBM8','tKLkB2y','BNq7yM8','BIbHihi','uKLIEK4','ueztEum','ohb4ide','BMv2zxi','DMvYBg8','y2fTzxi','lJe4ktS','mhWXFdq','tgviqM8','z1neyK0','D0PmyMq','wLjTweG','zwXHChm','zw5Jzsa','zw50rwW','B3vUDa','DfDwCK0','DgHLig8','yMfJA2C','twrMELi','C3bYAw4','C3vYDMu','ihn0yxK','Aw5Lza','BNn0yw4','zsbNyw0','BNnPC3q','lMrSBa','zNnzwK8','C29SDMu','BMnLv3i','zwqGBM8','AgfIBgu','uKndqwu','B3bTsMu','yM9Yzgu','C2LUz2W','rerUqNm','zwXVywq','EezwBuq','EwXLpsi','AgfHvKS','B2XPzca','CI5QCYa','pc9IpG','DY5vBMK','pgrPDIa','B3v0','A3vYyv0','uLjhwfe','BwuOkq','CIiGDhK','r2fTzq','AxmGyNu','lYbQDw0','BM90ig0','ifnxlva','zxPZCNq','AgvHza','zciGC3q','zw50','AwqGzg8','BMnLigy','C3CYlxm','B1PYtKG','BKfpCKC','q1HQEey','B2TZihi','BNrezwy','yxK6zMW','EwnmDva','D3Hjvhq','B21Tyw4','CMDIysG','n2vLzJu','BgqGAxm','tJWVyNu','zwqGEwu','sePcqMK','ENfHBhu','yxDwvfO','ihjNyMe','vgv4Da','DhLWzq','ys9vv00','EfbTzLi','BNqXnG','yxrHihi','z2jHkdi','z1HVqMK','zNjHBwu','D2fSA2K','rMfLvhO','zw5LBwK','yM9VBgu','BffADw4','zwz0oMe','AwXKlG','EhzZquK','BgfZDfC','idyWCYa','ig9Yihq','CMX4uxO','igzYyw0','tIbIEsa','CxvLCNK','ktTIB3i','rJKGDhC','EwvZ','Dde2','ig9UBhK','CvbRtuu','CxfKvfu','B3jPz2K','we1ku1u','iZDLzta','lcbnzxq','D192mG','Dgf0Dxm','u3bLzwq','icHZB3u','Dw1WAw4','ms4WEdW','BI5OB28','zw5LBxK','zNz6vuG','BwfUEq','Dvbmr2G','uKzWBKi','CMuk','rLfAvvC','D09KA0u','v2vItw8','Axb0ige','qNvTDMy','ChHnBw4','ELfnqMO','s095rwK','AxLgB1a','t0SGt1y','swLlAvy','sffmB2S','zsGPlMu','Cg9YDca','CgvOteu','sevkDeu','ihbVC3q','y2T2tfi','ndmSmtC','y2Lqy3O','CMvMAxG','B24GAwq','zMjQtgC','zcdcTYa','ic0+ia','tKfNwhG','ieaG','zNHJDLy','wvL0zvK','BM9Yzwq','q3HvrLe','zcb3yxm','pt09','igL0ige','EdSIpNy','B25JBgK','zMfJDg8','CNnJCMK','tuforvO','CNb4D1e','C2v0vwK','ywLUAw4','ywHJDu8','CgfYzw4','DxjPBMC','ChrY','x19hzw4','zxrjt2e','Dg9gAxG','wfjWteu','CMf3','ig90Agu','z2XoqKu','C3L4yvC','s3zKzNe','igfUzca','AwrLBNq','AgvSBg8','z2v0rMW','CIb5B3u','AxrOie0','BNrLEhq','zM8Qksa','q0zMsge','Cg9Zqxq','BcWk','yKX1uw0','CgLUzYa','Aw5N','lwjYzwe','iJ5tCgu','Ahq6nZa','B2jMsq','igfYzsa','i2zMnMu','CNvUCYa','yxbWBgK','z0PdtvO','ywn0Axy','DdmY','Fdb8mG','zgvIDwC','D3jVBMC','BLnUwNC','ywjSzsa','vg90ywW','EMfsBxG','AeLXB2y','y3jLyxq','B2vdAvu','mZmYnJa0mhjZthLxCa','lL9Nyw0','Ag9ZDg4','Dw5Kzwy','zwndDgi','BM90ihi','oJCWmdS','A2v5CW','i2zMzdq','uwHPwMu','zMfRzq','vMTsuLe','yxPrANq','y0L4r3q','zufgzMK','BI13Awq','zw5TCeq','B0PSr2C','vtGGAxm','uuzeBu4','vKLzA3y','qMzfuK8','C3rHBMm','Dw1dEem','C3nPBMC','sePtC1K','vvDnsY4','re9nq28','ihbYB3y','Ag9Ksw4','y2XPCgi','DNmGC24','otCXnZC2teHwrw15','v2vHCg8','DxjHvge','oMf1Dg8','B2fKzwq','zYbTyxi','BgvY','tw9KA2K','ChjLDMu','B25Tzxm','EgDKBfi','sfDPDvC','u1r1sgO','lwzPCNm','yxjTAw4','zenOAwW','rhvPAeG','x19ZywS','ndCZqvDZD0vS','Dg87iJ4','DMfSDwu','CgfKrw4','Dxm6n3a','A2v5','ywqGzMe','z3ftt3G','4Ocuihr3BW','zwv2Bgi','ywXPz24','BxLTzuq','4Psa4Psaia','zxmGB2y','yMfS','CM91BMq','BwuGD2u','sw5KzxG','BhvNAw4','C3mGmhG','zwvMntS','ig1PBJ0','D2LUzg8','rKDtB1e','uvfMA3y','vxbKyxq','vvDnsYa','zdP0CMe','zxHLy0m','zYbZy3i','yw5Jzsa','r0DFr2e','khmPihq','zuvXuNu','sgnAvwu','wNv0v04','BwvUDc0','DxnpsMG','DMvYBMi','Cg9ZAxq','CI1Yywq','As1TB24','Aezczge','lxnUyxa','CMvJDgK','zYbMB3i','r0HNz1G','BMCGyxq','zwDPC3q','BMTLEsa','A2vLCa','lt4GDM8','o2fSAwC','AwXLzcW','C28GAg8','i3n3mI0'];_0x2a3e=function(){return _0x397fb7;};return _0x2a3e();}function _0x144c(_0x5e549d,_0x13bf53){_0x5e549d=_0x5e549d-(-0x5ea+0x1b2+-0x1*-0x527);var _0x59c7d9=_0x2a3e();var _0x640fd4=_0x59c7d9[_0x5e549d];if(_0x144c['zHzTYu']===undefined){var _0x399a4c=function(_0x145e8c){var _0x5b843e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x27b343='',_0x7e0de1='';for(var _0x45d470=-0x274*0x7+0x14cb*0x1+-0x39f,_0x2ab7dc,_0x3b372f,_0x5a995e=0x3*0x12a+-0x18fb+-0x157d*-0x1;_0x3b372f=_0x145e8c['charAt'](_0x5a995e++);~_0x3b372f&&(_0x2ab7dc=_0x45d470%(-0x1214+0x196b+-0xf*0x7d)?_0x2ab7dc*(0x142b+0xa*0xc7+-0x3*0x93b)+_0x3b372f:_0x3b372f,_0x45d470++%(0x1*0x493+-0x2*0x82e+0xbcd))?_0x27b343+=String['fromCharCode'](-0xe3*-0x27+-0x2*-0x11e3+0x2e*-0x182&_0x2ab7dc>>(-(0x2663+-0xd33+-0x192e)*_0x45d470&0x9f5+0x1527+0x1*-0x1f16)):0x1dc1+-0x1c6d+-0x154*0x1){_0x3b372f=_0x5b843e['indexOf'](_0x3b372f);}for(var _0x5201d1=0x7*-0x191+0x423+0x6d4,_0x5c2564=_0x27b343['length'];_0x5201d1<_0x5c2564;_0x5201d1++){_0x7e0de1+='%'+('00'+_0x27b343['charCodeAt'](_0x5201d1)['toString'](0x139+-0x1679+0xaa8*0x2))['slice'](-(0x1a64+0x1*0x1ff4+0x312*-0x13));}return decodeURIComponent(_0x7e0de1);};_0x144c['kdAkUz']=_0x399a4c,_0x144c['jkUcvd']={},_0x144c['zHzTYu']=!![];}var _0x40e773=_0x59c7d9[0x2b3+-0x1*0xd5d+-0x41*-0x2a],_0x1df2b5=_0x5e549d+_0x40e773,_0x2ab599=_0x144c['jkUcvd'][_0x1df2b5];return!_0x2ab599?(_0x640fd4=_0x144c['kdAkUz'](_0x640fd4),_0x144c['jkUcvd'][_0x1df2b5]=_0x640fd4):_0x640fd4=_0x2ab599,_0x640fd4;}(function(_0x5494e7,_0x5f5602){var _0x25ac0a=_0x144c,_0x47c468=_0x5494e7();while(!![]){try{var _0x31ed8f=-parseInt(_0x25ac0a(0x473))/(-0x6ff+-0x4f6+0xbf6)*(-parseInt(_0x25ac0a(0x5a6))/(-0x7*0x1b1+0x1*0x23ac+-0x3*0x7f1))+parseInt(_0x25ac0a(0x1c0))/(-0x119b+0x1340+-0x1a2)+-parseInt(_0x25ac0a(0x279))/(-0x570+0x23*-0xd1+0x119*0x1f)+parseInt(_0x25ac0a(0x106))/(-0xb*0x35+-0x1*-0x8c+0xe0*0x2)*(-parseInt(_0x25ac0a(0x4ab))/(0x17*-0xbf+-0x208+0x1337))+-parseInt(_0x25ac0a(0x1d4))/(0x3bb*0x5+0x31c*-0x9+-0x1*-0x95c)*(-parseInt(_0x25ac0a(0x3c2))/(0x2a8+-0x1*0xf2b+-0x1*-0xc8b))+-parseInt(_0x25ac0a(0x3a2))/(0x1f86+0x1c90+0x3c0d*-0x1)*(-parseInt(_0x25ac0a(0x4c8))/(0x1448+-0x1*0x2665+0x3*0x60d))+parseInt(_0x25ac0a(0x3d4))/(-0xa92+-0x80f+-0xa*-0x1de)*(-parseInt(_0x25ac0a(0x41e))/(0x1057+0x139*-0x19+0xe46));if(_0x31ed8f===_0x5f5602)break;else _0x47c468['push'](_0x47c468['shift']());}catch(_0x198c2d){_0x47c468['push'](_0x47c468['shift']());}}}(_0x2a3e,0x2*0xdd1e7+-0x135965+0x64241*0x1),((()=>{'use strict';var _0x2deb15=_0x144c,_0x4106a6={'HEJtE':function(_0x220a1b,_0x2b9d61){return _0x220a1b!==_0x2b9d61;},'JgTSP':_0x2deb15(0x43b)+_0x2deb15(0x5cc)+'v2','ZRmXH':_0x2deb15(0x47f),'vernb':'sakur'+'a-sw-'+'v2-cs'+'s','yHKtm':_0x2deb15(0x1ec),'XBFPL':_0x2deb15(0x30c),'oKyOh':'cmd','Fkkwg':'kJTMS','XWIzz':_0x2deb15(0x47e),'FqIea':function(_0x314dbc,_0x46cc00,_0x1a7489){return _0x314dbc(_0x46cc00,_0x1a7489);},'yhrWv':_0x2deb15(0x128)+_0x2deb15(0x5b8)+'6|0','BxTbi':'copy','jYNHe':'hjNof','MqeGw':function(_0x5316bc,_0x117c52){return _0x5316bc+_0x117c52;},'DoKBV':'speed','iSXwG':function(_0x3c18d3,_0x42dbf4){return _0x3c18d3(_0x42dbf4);},'VAemu':_0x2deb15(0x2cd)+'|3|2','xlEky':'Speed'+'\x20ON','CrpBJ':_0x2deb15(0x33d)+'\x20off','usOJh':function(_0x27b4c2){return _0x27b4c2();},'lXTMB':'#2a0f'+'1b','nVHHK':_0x2deb15(0x2b0)+'f5','RQdBg':_0x2deb15(0x54b)+'d','fsYZO':function(_0x3520c7,_0x57e972){return _0x3520c7+_0x57e972;},'fgHZm':function(_0x533535,_0x36c03d){return _0x533535===_0x36c03d;},'ZZHKn':_0x2deb15(0x392)+'74','KDqMS':'eXTgB','CFfHa':function(_0x3a2257,_0x564168){return _0x3a2257+_0x564168;},'wrRfy':'\x20obje'+_0x2deb15(0x4e4)+'\x20','MdfzR':function(_0x7ac015,_0x2de9a2){return _0x7ac015>_0x2de9a2;},'rMLIO':_0x2deb15(0x11d)+_0x2deb15(0x1a9)+_0x2deb15(0x35f),'LAamZ':function(_0x3d0dd3,_0x39439f){return _0x3d0dd3+_0x39439f;},'OZksG':_0x2deb15(0x3d0)+_0x2deb15(0x43e),'xLlCI':'Diff\x20'+'vs\x20sn'+'apsho'+_0x2deb15(0x4aa),'tMYzy':_0x2deb15(0x203)+'paren'+'t','BfERO':'XGlTz','hpQTD':function(_0x2b2d96,_0x4aee54){return _0x2b2d96+_0x4aee54;},'yGHMn':function(_0x35a114,_0x33ebf0){return _0x35a114+_0x33ebf0;},'TqUZO':function(_0xb614da,_0xff0bf3){return _0xb614da+_0xff0bf3;},'CXjxF':'1|4|3'+_0x2deb15(0x398),'kkyWy':_0x2deb15(0x4cf)+'ame\x20f'+'rame\x20'+_0x2deb15(0x2c9)+_0x2deb15(0x358)+_0x2deb15(0x25f)+_0x2deb15(0x2ea)+_0x2deb15(0x19a)+_0x2deb15(0x17e)+'\x0a','alXUf':_0x2deb15(0x46e)+_0x2deb15(0x193)+_0x2deb15(0x371)+'g\x20sus'+_0x2deb15(0x1e1)+_0x2deb15(0x451)+'\x0a\x0a','kcyuQ':'\x20\x203.\x20'+_0x2deb15(0x426)+'sakur'+_0x2deb15(0x181)+'llwar'+'z.use'+_0x2deb15(0x2f1)+'AND\x20t'+'he\x20ol'+_0x2deb15(0x188)+_0x2deb15(0x3f1)+_0x2deb15(0x34b)+_0x2deb15(0x347),'XEMfh':function(_0x2e6916,_0x2fb5f1){return _0x2e6916+_0x2fb5f1;},'ATavx':function(_0x92fbe2,_0x19456c){return _0x92fbe2+_0x19456c;},'OSIHU':function(_0x325ccb,_0x2f330b){return _0x325ccb+_0x2f330b;},'bsGCl':function(_0x3b6a87,_0x139ff4){return _0x3b6a87+_0x139ff4;},'saIMb':function(_0x5bbb9a,_0x33e2c5){return _0x5bbb9a+_0x33e2c5;},'xvsAI':function(_0x37dbbe,_0x27a2ad){return _0x37dbbe+_0x27a2ad;},'pJIHm':function(_0x38b191,_0x36411f){return _0x38b191+_0x36411f;},'WorRQ':'<b\x20st'+_0x2deb15(0x2ee)+_0x2deb15(0x544)+':','TpIYg':'<span'+'\x20id=\x22'+_0x2deb15(0x305)+_0x2deb15(0x33c)+'\x22\x20sty'+_0x2deb15(0x11c)+_0x2deb15(0x5a9)+_0x2deb15(0x240)+'c9\x22>w'+'aitin'+_0x2deb15(0x401)+'\x20game'+_0x2deb15(0x32d)+'e…</s'+'pan>','RzODU':'<butt'+'on\x20id'+'=\x22sw2'+_0x2deb15(0x598)+_0x2deb15(0x497)+_0x2deb15(0x132)+'ispla'+'y:non'+_0x2deb15(0x12c)+_0x2deb15(0x297)+_0x2deb15(0x326)+_0x2deb15(0x552)+_0x2deb15(0x1f3)+'ound:','ZxwZw':'</div'+'>','qcQKo':_0x2deb15(0x262)+_0x2deb15(0x35d)+_0x2deb15(0xf6)+'-spee'+_0x2deb15(0x301)+_0x2deb15(0x2ee)+'backg'+_0x2deb15(0x3e3)+':tran'+'spare'+_0x2deb15(0x2c4)+_0x2deb15(0x4bd)+_0x2deb15(0x5bd)+_0x2deb15(0x2f0)+'rgba('+_0x2deb15(0x1f1)+_0x2deb15(0x35a)+_0x2deb15(0x267)+';colo'+_0x2deb15(0x2b2)+_0x2deb15(0x3e8)+_0x2deb15(0x2e9)+_0x2deb15(0x3fc)+_0x2deb15(0x5f2)+_0x2deb15(0x1a6)+'dding'+':4px\x20'+'10px;'+'curso'+_0x2deb15(0x537)+'nter;'+_0x2deb15(0x38e)+_0x2deb15(0x1e7)+_0x2deb15(0x53f)+'tton>','WssJZ':_0x2deb15(0x195)+_0x2deb15(0x48a)+'sw2-f'+_0x2deb15(0x53c)+'label'+'\x22\x20sty'+_0x2deb15(0x11c)+_0x2deb15(0x5a9)+'#bda9'+'c9;mi'+_0x2deb15(0x3b1)+_0x2deb15(0x13c)+'px;\x22>'+_0x2deb15(0x340)+_0x2deb15(0x504)+'>','MIiyC':_0x2deb15(0x262)+_0x2deb15(0x35d)+_0x2deb15(0xf6)+_0x2deb15(0x3ff)+'\x22\x20sty'+'le=\x22b'+'ackgr'+_0x2deb15(0x202)+_0x2deb15(0x203)+'paren'+'t;bor'+_0x2deb15(0x281)+'px\x20so'+'lid\x20r'+_0x2deb15(0x31e)+_0x2deb15(0x28d)+_0x2deb15(0x101)+',.4);'+'color'+_0x2deb15(0x45d)+_0x2deb15(0x190)+_0x2deb15(0x43d)+_0x2deb15(0x273)+_0x2deb15(0x3d8)+_0x2deb15(0x2b7)+_0x2deb15(0x536)+_0x2deb15(0x460)+_0x2deb15(0x453)+_0x2deb15(0x4ce)+_0x2deb15(0x117)+_0x2deb15(0x4a2)+'Snaps'+'hot\x20('+'F9)</'+_0x2deb15(0x48e)+'n>','qvGdw':'#sw2-'+_0x2deb15(0x2f5),'cAbko':_0x2deb15(0x40b)+'x','etIOa':_0x2deb15(0x40b)+_0x2deb15(0x36c)+_0x2deb15(0x169)+'l','VkRRQ':'\x20past'+_0x2deb15(0x28a)+'\x20end\x20'+'0x','oJlGg':function(_0x282b4e,_0x4d1aab){return _0x282b4e+_0x4d1aab;},'VoMqv':_0x2deb15(0x320)+_0x2deb15(0x1e4),'CAcJH':'\x20\x20\x20co'+_0x2deb15(0x385)+'\x20','xFVmD':'yes','lQZun':function(_0x459625,_0x16453a){return _0x459625!=_0x16453a;},'LagRP':function(_0x51c3dd,_0x3e206c){return _0x51c3dd+_0x3e206c;},'WdTVp':_0x2deb15(0x11d)+'\x20\x20\x20\x20','cGieE':'isOGN','dtuHB':function(_0x6c5beb,_0x3e4f21){return _0x6c5beb!==_0x3e4f21;},'goXOL':function(_0x122a84,_0x5d531d){return _0x122a84+_0x5d531d;},'rpxwQ':_0x2deb15(0x3e0),'FCgOw':function(_0x12b04f,_0x59b66c){return _0x12b04f-_0x59b66c;},'NgYOU':function(_0x3a8885,_0x30d187){return _0x3a8885<_0x30d187;},'nQgAg':function(_0x206dfd,_0x2830df){return _0x206dfd+_0x2830df;},'JeCoL':'warni'+'ngs','azQjt':_0x2deb15(0x5dc),'hZZkj':function(_0x486048,_0x330a7d){return _0x486048!==_0x330a7d;},'Okgvo':function(_0x3ed130){return _0x3ed130();},'sueWJ':function(_0x4f6f61,_0x4bfa6d){return _0x4f6f61+_0x4bfa6d;},'LutBK':'color'+':','XqpcM':_0x2deb15(0x144),'ZGgSf':function(_0x1877dc,_0x5e829f){return _0x1877dc===_0x5e829f;},'WvmCA':_0x2deb15(0x30f)+_0x2deb15(0x1f1)+_0x2deb15(0x35a)+'7,.35'+')','boWEX':'rebui'+_0x2deb15(0x219)+_0x2deb15(0x304)+_0x2deb15(0x293)+'captu'+'re\x20(r'+'espaw'+_0x2deb15(0x47a),'bOtDq':_0x2deb15(0x12b)+'g','Fadyy':'DHYQq','gqWvz':_0x2deb15(0x1b6),'qCvkU':'error','ZIxqh':_0x2deb15(0x399),'WzQaG':_0x2deb15(0x588),'MTvQe':function(_0x1a9f7d,_0x5ad839){return _0x1a9f7d+_0x5ad839;},'dOUPF':function(_0x5d1bbf,_0x450368,_0x37eed5){return _0x5d1bbf(_0x450368,_0x37eed5);},'LbWEQ':function(_0x4e2cc8,_0x51706a){return _0x4e2cc8>>>_0x51706a;},'HHBfD':_0x2deb15(0x438),'KjgHz':function(_0x52496e,_0x5d3ee7){return _0x52496e!==_0x5d3ee7;},'TUJcb':_0x2deb15(0x34d),'qvzqj':function(_0x289e58,_0x22e084){return _0x289e58-_0x22e084;},'ljxnG':function(_0x218d3a,_0x4ecaab){return _0x218d3a===_0x4ecaab;},'HRuWJ':function(_0x1c373e,_0xe6130a){return _0x1c373e!==_0xe6130a;},'EOSUe':'funct'+_0x2deb15(0x51b),'PRNsw':'so\x20ho'+_0x2deb15(0x309)+_0x2deb15(0x404)+_0x2deb15(0x46f)+_0x2deb15(0x2bb)+'\x20it\x20a'+'re\x20ig'+_0x2deb15(0x365)+_0x2deb15(0x51a)+'the\x20l'+'ife\x20o'+'f\x20the'+'\x20page'+'.\x20','ZIoHm':function(_0x3f337d,_0x3984a5){return _0x3f337d!==_0x3984a5;},'hqvYQ':_0x2deb15(0x1ae),'pWMlh':_0x2deb15(0x3f5),'MEiIy':_0x2deb15(0x3ea)+_0x2deb15(0x51f)+_0x2deb15(0x3e2),'alkOB':'tbOZF','CGcBT':function(_0x388a6b,_0x2cdb55){return _0x388a6b+_0x2cdb55;},'VIYkv':_0x2deb15(0x108),'WqUGi':function(_0x22566b,_0x2e8cbc){return _0x22566b===_0x2e8cbc;},'gkKvD':'plugi'+_0x2deb15(0x125)+_0x2deb15(0x1bd)+'.reso'+'lveGa'+_0x2deb15(0x2f8),'qIKuz':function(_0x3e6fd5,_0x1b5617){return _0x3e6fd5===_0x1b5617;},'mJmdU':function(_0xeb1681,_0x3ec7f3){return _0xeb1681<_0x3ec7f3;},'eevlb':_0x2deb15(0x4f4),'balec':_0x2deb15(0x535),'NJJnX':function(_0x30f529,_0x8ddc2c){return _0x30f529===_0x8ddc2c;},'cIxGt':_0x2deb15(0x4ba)+'le','xlQaV':'RkrlG','UmpTQ':'aqlgE','LeHBo':_0x2deb15(0x1c8)+_0x2deb15(0x3e7),'gXoBi':function(_0x162e35,_0x3b908e){return _0x162e35===_0x3b908e;},'XItrQ':'fvzUH','FQZUW':'u16','IMCio':_0x2deb15(0x2ae),'ZutWN':function(_0x406da6,_0x297ff3){return _0x406da6&_0x297ff3;},'opmJe':'i16','HnkIo':function(_0x42c1e0,_0x536ab9){return _0x42c1e0|_0x536ab9;},'UBZnp':function(_0x243bd3,_0x4d2cfc){return _0x243bd3+_0x4d2cfc;},'FaeTz':function(_0x3ea4de,_0x22e2ea){return _0x3ea4de===_0x22e2ea;},'SvmBq':function(_0x3691e8){return _0x3691e8();},'WYRWN':'no\x20HE'+_0x2deb15(0x55b)+'-\x20Uni'+_0x2deb15(0x26d)+'stanc'+_0x2deb15(0x4ef)+_0x2deb15(0x53a)+'hable'+_0x2deb15(0x440)+_0x2deb15(0x5e1)+'me.re'+_0x2deb15(0x2e3)+'Game('+_0x2deb15(0x54e)+_0x2deb15(0x514)+_0x2deb15(0x1b7)+'\x20glob'+'al','reHQZ':function(_0x18d278,_0x2b748a){return _0x18d278+_0x2b748a;},'QFDmN':'zPaPZ','fBpZr':function(_0x460dd3,_0x3bf282,_0x379c1b,_0x2ddddf){return _0x460dd3(_0x3bf282,_0x379c1b,_0x2ddddf);},'LzBGf':'obfF','LHvAQ':function(_0x345dae,_0x28febf){return _0x345dae&_0x28febf;},'orrjh':function(_0x54f1b3,_0x2bd4ee){return _0x54f1b3(_0x2bd4ee);},'ViDOf':_0x2deb15(0x390),'TSkiG':function(_0x28b585,_0xec9c42){return _0x28b585|_0xec9c42;},'CxUFQ':function(_0x16e3c5,_0x4b638c){return _0x16e3c5^_0x4b638c;},'YisPq':function(_0x2175e8,_0x2c9e5b,_0x517bd8){return _0x2175e8(_0x2c9e5b,_0x517bd8);},'ZuYLz':_0x2deb15(0x4fe),'XdqYq':function(_0x2a0abb,_0x48f7ca){return _0x2a0abb|_0x48f7ca;},'zHlWd':function(_0x29109e,_0x4e7f31){return _0x29109e+_0x4e7f31;},'PcqVJ':function(_0xd01731,_0x1f2d8f){return _0xd01731===_0x1f2d8f;},'mlIbK':function(_0x2a872a,_0x218515){return _0x2a872a===_0x218515;},'gIYnX':function(_0x118d6d,_0x4c6078){return _0x118d6d+_0x4c6078;},'xXjQq':function(_0x4df329,_0x4e34d9){return _0x4df329===_0x4e34d9;},'BrLUX':function(_0x25af23,_0x34d2e6){return _0x25af23&_0x34d2e6;},'jGdCi':function(_0x76f501,_0x555662){return _0x76f501===_0x555662;},'wOdkE':function(_0x2cbd47,_0x2920f3){return _0x2cbd47===_0x2920f3;},'lqkkk':function(_0x2b5d55,_0xb0a6db){return _0x2b5d55|_0xb0a6db;},'gqSOx':function(_0x5b9ab0,_0x40d037){return _0x5b9ab0!==_0x40d037;},'DeejE':function(_0x26f686,_0x555220){return _0x26f686!==_0x555220;},'ezeby':'numbe'+'r','cnhRW':function(_0x26a357,_0x4fc545,_0x2a7f6f,_0x326847,_0x4713b7){return _0x26a357(_0x4fc545,_0x2a7f6f,_0x326847,_0x4713b7);},'rCzKf':'obfB','umCxC':_0x2deb15(0x26a)+_0x2deb15(0x5a5)+'ler','uVqdM':'ZTkqF','zglYi':_0x2deb15(0x1dc),'bqtHQ':_0x2deb15(0x316),'WUEwy':function(_0x4ad45c,_0x49a313){return _0x4ad45c===_0x49a313;},'DDnBs':'pHZmS','mJOXe':_0x2deb15(0x1c7)+'ntiat'+_0x2deb15(0x354)+_0x2deb15(0x553)+'s.mem'+_0x2deb15(0x15e),'zQMBj':'Sakur'+_0x2deb15(0x31a)+'K\x20scr'+'ipt\x20i'+_0x2deb15(0x140)+'permo'+_0x2deb15(0x405)+'and\x20h'+_0x2deb15(0x22c)+_0x2deb15(0x2ec)+'.','HuuZa':_0x2deb15(0x15a),'cBvQY':function(_0x581550,_0x2430b8){return _0x581550-_0x2430b8;},'XEHDN':function(_0x5c83f5,_0x37b9c1){return _0x5c83f5+_0x37b9c1;},'zQxVX':function(_0x47641e,_0x263e21){return _0x47641e+_0x263e21;},'ZTtVC':function(_0x9d8663){return _0x9d8663();},'fbjLg':_0x2deb15(0x16f)+'kura]'+'\x20pane'+_0x2deb15(0x4d2)+_0x2deb15(0xf5),'JBabu':_0x2deb15(0x236),'ZjDcH':function(_0x14194f,_0xd589f9){return _0x14194f!==_0xd589f9;},'AvNyy':function(_0x347ac1,_0x2374a3){return _0x347ac1<_0x2374a3;},'OEYMo':function(_0xfd87b3,_0x1b6e92){return _0xfd87b3+_0x1b6e92;},'Kiolp':_0x2deb15(0x527)+_0x2deb15(0x1b2),'tYtpt':function(_0x51e7a9,_0x57598f){return _0x51e7a9<_0x57598f;},'PSayy':function(_0x1df090,_0xf20005){return _0x1df090+_0xf20005;},'UQACD':function(_0x49a805,_0x374ca9){return _0x49a805+_0x374ca9;},'HCwyZ':'ahcuO','TYiBH':'f32','RgZSw':_0x2deb15(0x39b),'MPzSH':function(_0x2fa099,_0x47de08){return _0x2fa099!==_0x47de08;},'fvBxs':function(_0x2d3b55,_0x4033db){return _0x2d3b55+_0x4033db;},'lzxgP':function(_0x14ac28,_0x5e94f4){return _0x14ac28+_0x5e94f4;},'nUOxO':'void','VzesU':function(_0x16559a,_0x545a21){return _0x16559a+_0x545a21;},'vzUUy':'F9\x20tw'+'ice\x20w'+'hile\x20'+'walki'+_0x2deb15(0x120)+_0x2deb15(0x2da)+'ting\x20'+_0x2deb15(0x2fc)+_0x2deb15(0x38b)+'marks'+_0x2deb15(0x21b)+'h\x20fie'+_0x2deb15(0x311)+'\x20whic'+'h.','RRGXQ':'muaKg','XdISy':_0x2deb15(0x5be),'XRpLE':_0x2deb15(0x359),'xgdlR':'LnNiA','QclDf':function(_0x1f2224,_0x3f0dfd){return _0x1f2224===_0x3f0dfd;},'RFpnB':function(_0x3733f8,_0x123201){return _0x3733f8(_0x123201);},'mZrBf':_0x2deb15(0x5de)+_0x2deb15(0x458)+'int-w'+'idth)','wNqfO':_0x2deb15(0x255),'VqVZX':function(_0x52f8d8,_0x34fc1a){return _0x52f8d8===_0x34fc1a;},'aoiSe':function(_0x199a27,_0x1c2efc){return _0x199a27===_0x1c2efc;},'xpILX':function(_0x44ddfe,_0x2e054e){return _0x44ddfe===_0x2e054e;},'SbgST':function(_0x4de966,_0x2ccf28){return _0x4de966===_0x2ccf28;},'PIEwg':function(_0x516f8c,_0x3377df){return _0x516f8c===_0x3377df;},'HWiuW':'whKhX','BtmVS':function(_0x30faa2,_0x18b708){return _0x30faa2&&_0x18b708;},'Necay':function(_0x5cbe5a,_0x307cad){return _0x5cbe5a(_0x307cad);},'owVrS':function(_0x19f52c,_0x36f532){return _0x19f52c!==_0x36f532;},'gZOLp':'unity'+_0x2deb15(0x5eb)+_0x2deb15(0x2e4)+'apper','zaRmx':function(_0x500177,_0x39be76){return _0x500177===_0x39be76;},'kXPxG':_0x2deb15(0x3a5)+_0x2deb15(0x2dd),'xxYrQ':function(_0x4cffa3,_0x447d42){return _0x4cffa3+_0x447d42;},'AvrCZ':_0x2deb15(0x3ce),'jOFJE':function(_0x3f66ce){return _0x3f66ce();},'EDTyo':_0x2deb15(0x1fd)+'t','NiUxD':function(_0x4c127e,_0x4430d5){return _0x4c127e===_0x4430d5;},'UCwRJ':'vuSNP','GWwLI':_0x2deb15(0x50c),'wJLbd':'xpZxL','UcHbn':function(_0x2ca2fb,_0x7f4d64){return _0x2ca2fb(_0x7f4d64);},'IiKiV':_0x2deb15(0x49d),'fxZMP':function(_0x48ab57,_0x5ed2a3){return _0x48ab57-_0x5ed2a3;},'xPmfR':function(_0x5b745e){return _0x5b745e();},'lNCsx':function(_0x332807,_0x552d2f){return _0x332807+_0x552d2f;},'gTjiM':'UWMK\x20'+_0x2deb15(0x3d0)+_0x2deb15(0x211)+_0x2deb15(0x545),'IKpUJ':_0x2deb15(0x56f)+'n:\x20','DxZux':_0x2deb15(0x43c)+_0x2deb15(0x3da)+_0x2deb15(0x409)+'\x20so\x20e'+_0x2deb15(0x58c)+'offse'+_0x2deb15(0x1a1)+_0x2deb15(0x4da)+'ped\x20b'+'y\x20typ'+'e.','Poiui':function(_0x453c0c,_0x455d11){return _0x453c0c+_0x455d11;},'Pmxqg':function(_0x7b61fd,_0x5eeebd){return _0x7b61fd+_0x5eeebd;},'MxZrz':'ANOTH'+_0x2deb15(0x592)+_0x2deb15(0x5cf)+_0x2deb15(0x223)+_0x2deb15(0x351)+_0x2deb15(0x447)+_0x2deb15(0x57a)+_0x2deb15(0x4ee)+'WebMo'+'dkit.'+'\x20The\x20'+'Runti'+'me\x20we'+_0x2deb15(0x1a9)+_0x2deb15(0x367)+'\x20','LDrUa':'repla'+'ced\x20b'+_0x2deb15(0x5ec)+_0x2deb15(0x4d6)+_0x2deb15(0x42c)+_0x2deb15(0x2de)+_0x2deb15(0x431)+_0x2deb15(0x28f)+_0x2deb15(0x10e)+'sking'+_0x2deb15(0x2bd)+_0x2deb15(0x39a)+'\x20obje'+'ct\x20fo'+'r\x20','enmpD':function(_0x4e536d,_0x5cd2e6){return _0x4e536d===_0x5cd2e6;},'CjAVJ':_0x2deb15(0x238),'ybgtI':_0x2deb15(0x2cf),'vWbEE':function(_0x155cfe,_0x6ed2c4){return _0x155cfe+_0x6ed2c4;},'EldiG':function(_0x5f5ce2,_0x34d044){return _0x5f5ce2+_0x34d044;},'uWvZa':'\x20and\x20'+_0x2deb15(0x1a7)+_0x2deb15(0x207)+_0x2deb15(0x12d),'eBMxY':'none','lvZsk':'Heap\x20'+'reads'+_0x2deb15(0x2dc)+'\x20bloc'+_0x2deb15(0x1fa)+_0x2deb15(0x585)+_0x2deb15(0x4c0)+'e\x20obj'+_0x2deb15(0x4a5)+_0x2deb15(0x384)+'odule'+'.HEAP'+_0x2deb15(0x3b4)+_0x2deb15(0x53a)+'hable'+'.','FMOOz':function(_0x116ef8,_0x57e391){return _0x116ef8+_0x57e391;},'EjVJA':function(_0x25657c,_0x14d23e){return _0x25657c+_0x14d23e;},'gYZMr':_0x2deb15(0x457),'kXDHf':'\x20hook'+_0x2deb15(0x560)+_0x2deb15(0x374)+'\x20armi'+_0x2deb15(0x403)+_0x2deb15(0x1b0)+'ment-'+'start'+'.','tAcxV':function(_0x934bc,_0x49f324){return _0x934bc+_0x49f324;},'DqaPG':function(_0x2342b7,_0x4bb743){return _0x2342b7+_0x4bb743;},'GHggX':function(_0x587028,_0x41fdac){return _0x587028+_0x41fdac;},'VGTvX':_0x2deb15(0x3ee)+_0x2deb15(0x207)+_0x2deb15(0x2b6),'VZztM':_0x2deb15(0x56a)+_0x2deb15(0x33a)+_0x2deb15(0x3bf)+'fo*)\x20'+'->\x20vo'+_0x2deb15(0x303)+_0x2deb15(0x26e)+'t\x20mat'+_0x2deb15(0x480)+'is\x20bu'+_0x2deb15(0x327),'opvph':function(_0x2e194f,_0x47fffd){return _0x2e194f+_0x47fffd;},'shskj':_0x2deb15(0x48d)+_0x2deb15(0x391)+_0x2deb15(0x394)+_0x2deb15(0x26c)+'t\x20no\x20'+_0x2deb15(0x26a)+_0x2deb15(0x5a5)+_0x2deb15(0x148)+'as\x20fi'+'red\x20y'+'et.\x20','Snckl':_0x2deb15(0x1b1)+_0x2deb15(0x383)+_0x2deb15(0x391)+_0x2deb15(0x22a)+_0x2deb15(0x2c5)+_0x2deb15(0x5ab)+_0x2deb15(0x32b)+_0x2deb15(0x55f)+_0x2deb15(0x23c)+'\x20on\x20t'+'he\x20wr'+'ong\x20o'+_0x2deb15(0x2ca)+_0x2deb15(0x10c),'PaVuf':_0x2deb15(0x452)+_0x2deb15(0x232)+_0x2deb15(0x38f)+'0','HcZUe':'rvkvu','ZnNDF':_0x2deb15(0x5ce)+_0x2deb15(0x56d)+_0x2deb15(0x4d7)+_0x2deb15(0x130)+_0x2deb15(0x32e)+_0x2deb15(0x3bc)+_0x2deb15(0x4c6)+'apply'+_0x2deb15(0x446)+'\x20','lLbeM':_0x2deb15(0x227),'KlqSQ':function(_0x5f0a2a,_0x5a0fb9){return _0x5f0a2a===_0x5a0fb9;},'hdptj':'wrapp'+'er','crlni':_0x2deb15(0x4e3)+'r','FGSoQ':_0x2deb15(0x4a1)+'b1','TDOtf':'2.2.1','xpSSW':_0x2deb15(0x16f)+'kura]'+_0x2deb15(0x44a)+'RAPPE'+_0x2deb15(0x5bb)+'IVE\x20('+_0x2deb15(0x5e0)+_0x2deb15(0x334)+')','BALLt':function(_0x43b8c1){return _0x43b8c1();},'MVnWy':_0x2deb15(0x3bd)+'ntent'+'Loade'+'d','fxcvV':function(_0x2346df,_0x4761e3){return _0x2346df+_0x4761e3;},'hiDDd':_0x2deb15(0x452)+'-weig'+'ht:70'+'0;fon'+_0x2deb15(0xf7)+_0x2deb15(0x27c)+'x','koBDA':_0x2deb15(0x381),'HRZHj':_0x2deb15(0x468),'HJBBi':'sakur'+_0x2deb15(0x4e7),'rlxQz':_0x2deb15(0x516)+'hScri'+'pt','sVhvs':_0x2deb15(0x23b)+'Bot','PXxSw':_0x2deb15(0x241)+_0x2deb15(0x5c8)+'Sharp'+_0x2deb15(0x3cf)+'tpass'+_0x2deb15(0x2e1),'naBfa':_0x2deb15(0x5f4)+'cofor'+'ge.De'+'cal.d'+'ll','LuneX':'cInpu'+_0x2deb15(0x521),'uBRms':_0x2deb15(0x448)+'loCha'+_0x2deb15(0x12a)+_0x2deb15(0x2be)+_0x2deb15(0x2b8)+_0x2deb15(0x2a3),'phTdz':_0x2deb15(0x376)+'erate'+'d'};var _0x39f627=location[_0x2deb15(0x3a4)+'ame']||'',_0x3be22c=/(^|\.)www\.crazygames\.com$/['test'](_0x39f627),_0x5b2556=/(^|\.)games\.crazygames\.com$/['test'](_0x39f627),_0x4439f1=/(^|\.)crazygames\.com$/[_0x2deb15(0x173)](_0x39f627)&&!_0x3be22c&&!_0x5b2556,_0x543bb5=_0x3be22c?'porta'+'l':_0x5b2556?_0x4106a6['hdptj']:_0x4106a6['crlni'];if(_0x4106a6[_0x2deb15(0x286)](!_0x3be22c,!_0x5b2556)&&!_0x4439f1)return;var _0x3cf7ed=_0x4106a6[_0x2deb15(0x3eb)],_0x5a5ece='__sak'+'ura_s'+_0x2deb15(0x33b),_0x193816=_0x2deb15(0x18a)+_0x2deb15(0x164)+'SKILL'+'WARZ-'+_0x2deb15(0x477)+_0x2deb15(0x368),_0x9391d2=_0x2deb15(0x18a)+'KURA-'+'SKILL'+'WARZ-'+_0x2deb15(0x54a)+'=',_0x3d7312=_0x4106a6[_0x2deb15(0x14f)];if(_0x5b2556){if('lNnoP'!==_0x2deb15(0x463)){window['addEv'+_0x2deb15(0x4b5)+'stene'+'r']('messa'+'ge',function(_0x28b990){var _0x58def6=_0x2deb15,_0x455f10=_0x28b990[_0x58def6(0x583)];if(!_0x455f10||_0x4106a6[_0x58def6(0x357)](_0x455f10['__sak'+_0x58def6(0x1bb)],_0x5a5ece))return;try{if(window['paren'+'t']&&window['paren'+'t']!==window)window[_0x58def6(0x373)+'t']['postM'+_0x58def6(0x4b8)+'e'](_0x455f10,'*');if(window['top']&&window[_0x58def6(0x5ee)]!==window)window[_0x58def6(0x5ee)][_0x58def6(0x13b)+_0x58def6(0x4b8)+'e'](_0x455f10,'*');}catch(_0x44ab21){}}),console['log'](_0x4106a6[_0x2deb15(0x1d0)],_0x4106a6['Poiui']('color'+':',_0x3cf7ed));return;}else return 0x2ed*-0x2+-0xb*-0x139+-0x799*0x1;}if(_0x3be22c){console[_0x2deb15(0x1b6)](_0x2deb15(0x16f)+_0x2deb15(0x2f6)+_0x2deb15(0x146)+'AL\x20AC'+'TIVE',_0x4106a6[_0x2deb15(0x127)](_0x2deb15(0x544)+':'+_0x3cf7ed,_0x4106a6['PaVuf']),{'host':_0x39f627});var _0x427475={'set':function(){},'command':function(){}};function _0x5c4868(_0x2b0ecb,_0x1d257e){var _0x2089b1=_0x2deb15,_0x44751c={'oDDHG':_0x2089b1(0x52e),'cPyCi':_0x2089b1(0x4fe),'hFBda':_0x2089b1(0x4a9),'nFmmE':_0x4106a6[_0x2089b1(0x492)]},_0x58c0b3={'__sakura':_0x5a5ece,'kind':_0x4106a6['oKyOh'],'cmd':_0x2b0ecb,'arg':_0x1d257e};try{if(_0x4106a6['Fkkwg']!==_0x4106a6[_0x2089b1(0x157)]){var _0x8d7d8e=new BroadcastChannel(_0x2089b1(0x43b)+'a-sw');_0x8d7d8e['postM'+'essag'+'e'](_0x58c0b3),_0x4106a6[_0x2089b1(0x44c)](setTimeout,function(){var _0x3d2dc0=_0x2089b1;try{if(_0x44751c['nFmmE']!=='BjZHw')_0x8d7d8e[_0x3d2dc0(0x450)]();else{_0x6dd414['ok']++;switch(_0x78d5a){case'u8':return _0x5893fa[_0x3d2dc0(0x294)+'nt8'](_0x18e7ee);case'i8':return _0x291664[_0x3d2dc0(0x192)+'t8'](_0x4476e7);case _0x44751c[_0x3d2dc0(0x13f)]:return _0x25e7e8['getIn'+'t16'](_0x5d0024,!![]);case _0x3d2dc0(0x511):return _0x14892b['getUi'+_0x3d2dc0(0x31c)](_0x48bdc6,!![]);case _0x44751c['cPyCi']:return _0x19b813['getIn'+_0x3d2dc0(0x397)](_0x5520e5,!![]);case'u32':return _0x4c68d7['getUi'+_0x3d2dc0(0x248)](_0x1dce4c,!![]);case _0x44751c[_0x3d2dc0(0x3fe)]:return _0x4a0c65['getFl'+_0x3d2dc0(0x465)](_0xe9532d,!![]);case _0x3d2dc0(0x2ae):return _0x1feb91['getFl'+_0x3d2dc0(0x17b)](_0x255644,!![]);case'v2':case'v3':case'v4':return _0x59907f['getFl'+'oat32'](_0x1116b2,!![]);default:return _0x5596ac['getIn'+_0x3d2dc0(0x397)](_0x3265e4,!![]);}}}catch(_0x59070d){}},-0x433*-0x4+-0x1bf7+0x1*0xc25);}else{var _0x61a6a3=_0xcbcc13['getEl'+_0x2089b1(0x556)+_0x2089b1(0x4fc)](_0x2089b1(0x43b)+_0x2089b1(0x5cc)+'v2');if(_0x61a6a3)return _0x61a6a3;if(!_0x811085[_0x2089b1(0x277)]||!_0x4cf5b7[_0x2089b1(0x277)][_0x2089b1(0x129)+_0x2089b1(0x3d1)+'d'])return null;try{var _0x287a1b=('3|2|1'+'|0|4')['split']('|'),_0x41c566=0x1*0x24c5+0x1*0x25fa+-0x4abf;while(!![]){switch(_0x287a1b[_0x41c566++]){case'0':_0x1109db[_0x2089b1(0x277)]['appen'+'dChil'+'d'](_0x61a6a3);continue;case'1':_0x61a6a3['id']=_0x4106a6['JgTSP'];continue;case'2':_0x61a6a3=_0x2639bc[_0x2089b1(0x3a0)+_0x2089b1(0x539)+'ent'](_0x4106a6[_0x2089b1(0x2d1)]);continue;case'3':if(!_0x4869ba[_0x2089b1(0x217)+'ement'+_0x2089b1(0x4fc)](_0x4106a6[_0x2089b1(0x3fa)])){var _0x49777d=_0x2001fd[_0x2089b1(0x3a0)+'eElem'+_0x2089b1(0x302)](_0x4106a6['yHKtm']);_0x49777d['id']='sakur'+'a-sw-'+_0x2089b1(0x58a)+'s',_0x49777d[_0x2089b1(0x1f8)+_0x2089b1(0x209)+'t']='#saku'+_0x2089b1(0x51d)+'-v2{a'+'ll:in'+'itial'+'}',(_0xd73e41[_0x2089b1(0x300)]||_0x20464f[_0x2089b1(0xf2)+_0x2089b1(0x2d4)+'ement'])[_0x2089b1(0x129)+_0x2089b1(0x3d1)+'d'](_0x49777d);}continue;case'4':return _0x61a6a3;}break;}}catch(_0x27cdc0){return null;}}}catch(_0x2cbc64){}}function _0x20faf3(){var _0x56455c=_0x2deb15,_0x5f0353={'GDzWK':_0x4106a6[_0x56455c(0x505)],'aSdwR':_0x4106a6[_0x56455c(0x1d2)],'Kvdfq':function(_0x401f9e){return _0x401f9e();}};if(_0x4106a6[_0x56455c(0x4c4)]===_0x56455c(0x197)){var _0x2024bb=document['getEl'+_0x56455c(0x556)+'ById'](_0x56455c(0x43b)+'a-sw-'+'v2');if(_0x2024bb)return _0x2024bb;if(!document[_0x56455c(0x277)]||!document['body'][_0x56455c(0x129)+'dChil'+'d'])return null;try{if(!document['getEl'+'ement'+_0x56455c(0x4fc)](_0x56455c(0x43b)+'a-sw-'+_0x56455c(0x58a)+'s')){var _0x3a279b=document['creat'+_0x56455c(0x539)+_0x56455c(0x302)](_0x56455c(0x1ec));_0x3a279b['id']=_0x4106a6[_0x56455c(0x3fa)],_0x3a279b[_0x56455c(0x1f8)+_0x56455c(0x209)+'t']=_0x56455c(0x196)+_0x56455c(0x51d)+_0x56455c(0x11f)+_0x56455c(0x52f)+_0x56455c(0x5f9)+'}',(document[_0x56455c(0x300)]||document['docum'+_0x56455c(0x2d4)+_0x56455c(0x556)])[_0x56455c(0x129)+_0x56455c(0x3d1)+'d'](_0x3a279b);}return _0x2024bb=document[_0x56455c(0x3a0)+'eElem'+'ent']('div'),_0x2024bb['id']='sakur'+'a-sw-'+'v2',document[_0x56455c(0x277)]['appen'+'dChil'+'d'](_0x2024bb),_0x2024bb;}catch(_0x5bab46){return null;}}else{var _0x52fbe8=_0x5f0353['GDzWK'][_0x56455c(0x15f)]('|'),_0x544892=-0xa3*0x1+0xcb0+0xc0d*-0x1;while(!![]){switch(_0x52fbe8[_0x544892++]){case'0':_0x13fab8['remov'+'e']();continue;case'1':_0x244402['body']['appen'+'dChil'+'d'](_0x13fab8);continue;case'2':if(!_0x3ea2d5['body'])return;continue;case'3':_0x13fab8[_0x56455c(0x228)+'t']();continue;case'4':_0x13fab8['value']=_0x4fa212;continue;case'5':var _0x13fab8=_0x10eb86[_0x56455c(0x3a0)+'eElem'+'ent'](_0x56455c(0x14a)+_0x56455c(0x220));continue;case'6':try{_0x1e4335[_0x56455c(0x3f0)+_0x56455c(0x30e)+'d'](_0x5f0353[_0x56455c(0x29a)]),_0x5f0353[_0x56455c(0x37e)](_0x497fdb);}catch(_0x3b48ce){}continue;}break;}}}function _0x823bae(){var _0x57816e=_0x2deb15,_0x2c4e8a=_0x20faf3();if(!_0x2c4e8a)return _0x427475;if(_0x2c4e8a['datas'+'et'][_0x57816e(0x107)])return _0x2c4e8a[_0x57816e(0x107)];try{return _0x519a08(_0x2c4e8a);}catch(_0x1e5360){return _0x2c4e8a['datas'+'et']['api']='1',_0x2c4e8a[_0x57816e(0x107)]=_0x427475,console['warn'](_0x57816e(0x16f)+'kura]'+'\x20pane'+_0x57816e(0x4d2)+_0x57816e(0xf5),_0x4106a6['MqeGw'](_0x57816e(0x544)+':',_0x3cf7ed),_0x1e5360),_0x427475;}}function _0x519a08(_0x3ea368){var _0x3c7cea=_0x2deb15,_0x154d98={'zrmSR':function(_0x3a16a1,_0x474ecf){var _0x41359a=_0x144c;return _0x4106a6[_0x41359a(0x4ec)](_0x3a16a1,_0x474ecf);},'HyxoT':function(_0x4189eb){return _0x4189eb();},'wApPC':function(_0x557d97){return _0x557d97();},'VjSKD':_0x4106a6[_0x3c7cea(0x1d2)],'jqEUN':function(_0x6da731){var _0x5cf3a7=_0x3c7cea;return _0x4106a6[_0x5cf3a7(0x3f9)](_0x6da731);},'jVSzG':_0x4106a6[_0x3c7cea(0x308)],'wNlxv':function(_0x49c37d,_0x3ee0cd){return _0x49c37d+_0x3ee0cd;},'QhiZe':function(_0x31e81f,_0x23ae2b){var _0x106788=_0x3c7cea;return _0x4106a6[_0x106788(0x576)](_0x31e81f,_0x23ae2b);},'AxDIm':function(_0x4126fc,_0x14f56b){var _0x3c01a7=_0x3c7cea;return _0x4106a6[_0x3c01a7(0x2e2)](_0x4126fc,_0x14f56b);},'hIqof':_0x4106a6[_0x3c7cea(0x237)],'OTZfI':_0x4106a6['alXUf'],'NGpjg':_0x4106a6[_0x3c7cea(0x490)],'GxLaj':'\x20\x20\x20\x20\x20'+'insta'+'lled\x20'+_0x3c7cea(0x3dc)+'\x20copi'+_0x3c7cea(0x3e1)+'\x20UWMK'+_0x3c7cea(0x1d7)+_0x3c7cea(0x10b)+_0x3c7cea(0x1cc)+'Assem'+'bly.i'+_0x3c7cea(0x2de)+_0x3c7cea(0x159)+'.\x0a\x0a','QQfkv':_0x3c7cea(0x5df)+_0x3c7cea(0x355)+'after'+_0x3c7cea(0x32a)+_0x3c7cea(0x5b7)+'me\x20no'+_0x3c7cea(0x29f)+'ected'+'?','qqdTU':function(_0x3494a8,_0x39584a){return _0x3494a8||_0x39584a;},'hRTLj':function(_0x25e366,_0x25602f){return _0x25e366===_0x25602f;},'Fbeuy':function(_0x50c078,_0x4c3e25){var _0x13c326=_0x3c7cea;return _0x4106a6[_0x13c326(0x50e)](_0x50c078,_0x4c3e25);}};_0x3ea368['style'][_0x3c7cea(0x137)+'xt']=_0x4106a6[_0x3c7cea(0x57d)](_0x4106a6[_0x3c7cea(0x498)](_0x3c7cea(0x3fb)+_0x3c7cea(0x597)+'ixed;'+_0x3c7cea(0x4d3)+_0x3c7cea(0x55c)+_0x3c7cea(0x413)+'2px;z'+'-inde'+'x:214'+_0x3c7cea(0x1ee)+'00;wi'+_0x3c7cea(0x176)+'in(52'+_0x3c7cea(0x256)+_0x3c7cea(0x22b)+'max-h'+_0x3c7cea(0x4e9)+_0x3c7cea(0x46b)+';','backg'+'round'+_0x3c7cea(0x180)+_0x3c7cea(0x437)+'olor:'+'#f7ee'+_0x3c7cea(0x290)+_0x3c7cea(0x4bd)+'1px\x20s'+_0x3c7cea(0x2f0)+_0x3c7cea(0x30f)+_0x3c7cea(0x1f1)+'43,17'+_0x3c7cea(0x242)+_0x3c7cea(0x422)+_0x3c7cea(0x542)+_0x3c7cea(0x47c)+_0x3c7cea(0x4b1))+('font:'+_0x3c7cea(0x16e)+_0x3c7cea(0x201)+_0x3c7cea(0x3fd)+_0x3c7cea(0xf4)+_0x3c7cea(0x531)+_0x3c7cea(0x183)+',mono'+'space'+';box-'+_0x3c7cea(0x528)+_0x3c7cea(0x245)+_0x3c7cea(0x42f)+_0x3c7cea(0x4a4)+_0x3c7cea(0x4eb)+'#000;'),'displ'+'ay:fl'+_0x3c7cea(0x5ef)+'ex-di'+_0x3c7cea(0x400)+'on:co'+'lumn;'+'overf'+_0x3c7cea(0x2ad)+_0x3c7cea(0x5e6)+';'),_0x3ea368[_0x3c7cea(0x19e)+_0x3c7cea(0x268)]=_0x4106a6[_0x3c7cea(0x498)](_0x4106a6[_0x3c7cea(0x18e)](_0x4106a6[_0x3c7cea(0x57d)](_0x4106a6[_0x3c7cea(0x4ec)](_0x4106a6[_0x3c7cea(0x470)](_0x4106a6[_0x3c7cea(0x1f9)](_0x4106a6[_0x3c7cea(0x454)](_0x4106a6[_0x3c7cea(0x586)](_0x4106a6[_0x3c7cea(0x328)](_0x4106a6['OSIHU'](_0x4106a6['MqeGw'](_0x4106a6['pJIHm'](_0x3c7cea(0x2f4)+'style'+_0x3c7cea(0x594)+'ding:'+'9px\x201'+_0x3c7cea(0x1df)+'order'+_0x3c7cea(0x27d)+_0x3c7cea(0x512)+_0x3c7cea(0x138)+_0x3c7cea(0x147)+_0x3c7cea(0x233)+'5,143'+',177,'+'.3);d'+_0x3c7cea(0x229)+'y:fle'+'x;gap'+_0x3c7cea(0x416)+_0x3c7cea(0x3de)+_0x3c7cea(0x11e)+_0x3c7cea(0x158)+_0x3c7cea(0x554)+_0x3c7cea(0x185)+_0x3c7cea(0x1db)+_0x3c7cea(0x3d5)+_0x4106a6['WorRQ']+_0x3cf7ed+(_0x3c7cea(0x456)+'ura\x20·'+'\x20skil'+_0x3c7cea(0x540)+_0x3c7cea(0x2f2)),_0x3c7cea(0x195)+_0x3c7cea(0x48a)+_0x3c7cea(0x122)+_0x3c7cea(0xef)+'\x20styl'+'e=\x22co'+_0x3c7cea(0x439)+'7a658'+_0x3c7cea(0x5bc)+_0x3c7cea(0xf7)+_0x3c7cea(0x2b5)+_0x3c7cea(0x2b7)+'ding:'+_0x3c7cea(0x4c3)+'px;bo'+'rder:'+_0x3c7cea(0x5bd)+_0x3c7cea(0x2f0)+'rgba('+'255,1'+_0x3c7cea(0x35a)+_0x3c7cea(0x172)+_0x3c7cea(0x330)+_0x3c7cea(0x246)+_0x3c7cea(0x415)+_0x3c7cea(0x4dd)+_0x3c7cea(0x36a)+_0x3c7cea(0x54f)+'an>'),_0x4106a6['TpIYg']),_0x4106a6[_0x3c7cea(0x4c5)])+_0x3cf7ed,';bord'+_0x3c7cea(0x517)+_0x3c7cea(0x544)+':#2a0'+_0x3c7cea(0x226)+'order'+_0x3c7cea(0x273)+_0x3c7cea(0x3d8)+'x;pad'+_0x3c7cea(0x536)+_0x3c7cea(0x272)+'0px;f'+'ont-w'+'eight'+_0x3c7cea(0x3a8)+_0x3c7cea(0x5ac)+_0x3c7cea(0x537)+'nter;'+'\x22>Cop'+'y\x20JSO'+_0x3c7cea(0x312)+_0x3c7cea(0x4fb))+(_0x3c7cea(0x262)+_0x3c7cea(0x35d)+'=\x22sw2'+'-x\x22\x20s'+_0x3c7cea(0x194)+'\x22back'+'groun'+_0x3c7cea(0x3ef)+_0x3c7cea(0x58f)+'ent;b'+'order'+_0x3c7cea(0x104)+'solid'+_0x3c7cea(0x317)+'(255,'+'143,1'+_0x3c7cea(0x258)+');col'+'or:#f'+_0x3c7cea(0x310)+_0x3c7cea(0x422)+'er-ra'+'dius:'+_0x3c7cea(0x4f2)+'addin'+_0x3c7cea(0x54d)+_0x3c7cea(0x1ba)+_0x3c7cea(0x5ac)+_0x3c7cea(0x537)+_0x3c7cea(0x178)+'\x22>x</'+'butto'+'n>')+_0x4106a6[_0x3c7cea(0x1cb)],_0x3c7cea(0x2f4)+_0x3c7cea(0x1ec)+_0x3c7cea(0x594)+'ding:'+_0x3c7cea(0x2c8)+_0x3c7cea(0x1df)+'order'+'-bott'+_0x3c7cea(0x512)+_0x3c7cea(0x138)+_0x3c7cea(0x147)+'ba(25'+'5,143'+_0x3c7cea(0x555)+_0x3c7cea(0x2cc)+_0x3c7cea(0x225)+_0x3c7cea(0x30b)+_0x3c7cea(0x4f3)+'p:8px'+_0x3c7cea(0x408)+_0x3c7cea(0x50d)+'ms:ce'+'nter;'+_0x3c7cea(0x1ce)+'0\x200\x20a'+'uto;f'+_0x3c7cea(0x5ed)+_0x3c7cea(0x4a3)+_0x3c7cea(0x1af)+'>')+_0x4106a6['qcQKo']+('<inpu'+'t\x20id='+_0x3c7cea(0x529)+'facto'+_0x3c7cea(0x2f9)+'pe=\x22r'+_0x3c7cea(0x213)+_0x3c7cea(0x3e9)+_0x3c7cea(0x44f)+_0x3c7cea(0x4d0)+_0x3c7cea(0x1fb)+_0x3c7cea(0xfa)+_0x3c7cea(0x1c4)+_0x3c7cea(0x43a)+_0x3c7cea(0x2b3)+'yle=\x22'+'width'+_0x3c7cea(0x533)+_0x3c7cea(0x20c)+'ent-c'+_0x3c7cea(0x5a9)),_0x3cf7ed),_0x3c7cea(0x156)),_0x4106a6[_0x3c7cea(0x59c)]),_0x4106a6['MIiyC']),_0x3c7cea(0x195)+_0x3c7cea(0x48a)+'sw2-h'+_0x3c7cea(0x1da)+_0x3c7cea(0x1ec)+'=\x22col'+_0x3c7cea(0x4cd)+_0x3c7cea(0x1b8)+_0x3c7cea(0x4a0)+_0x3c7cea(0x2ac)+'\x20whil'+_0x3c7cea(0x19f)+'king\x20'+_0x3c7cea(0x231)+_0x3c7cea(0x49b)+_0x3c7cea(0xf8)+_0x3c7cea(0x33f)+_0x3c7cea(0x3c7)+'ks\x20wh'+'ich\x20f'+'ield\x20'+_0x3c7cea(0x1d8)+_0x3c7cea(0x44b)+_0x3c7cea(0x504)+'>'),_0x3c7cea(0x580)+'>')+(_0x3c7cea(0x103)+_0x3c7cea(0x5e4)+_0x3c7cea(0x14c)+_0x3c7cea(0x1b5)+_0x3c7cea(0x2ee)+_0x3c7cea(0x5f1)+_0x3c7cea(0x2a9)+'addin'+_0x3c7cea(0x5d2)+_0x3c7cea(0x56c)+'x;ove'+'rflow'+_0x3c7cea(0x3c5)+_0x3c7cea(0x29c)+':1\x201\x20'+'auto;'+_0x3c7cea(0x434)+'-spac'+_0x3c7cea(0x414)+_0x3c7cea(0x5ae)+_0x3c7cea(0x4bc)+_0x3c7cea(0x38d)+_0x3c7cea(0x44d)+_0x3c7cea(0x582)+_0x3c7cea(0x221)+_0x3c7cea(0x4bf)+_0x3c7cea(0x284)+';'),'max-h'+'eight'+':62vh'+';\x22>No'+_0x3c7cea(0x191)+'rt\x20ye'+'t.\x0a\x0aT'+'his\x20p'+'anel\x20'+_0x3c7cea(0x4c7)+'es\x20it'+'self\x20'+_0x3c7cea(0x567)+_0x3c7cea(0x5c7)+'ame\x20f'+'rame\x20'+'loads'+_0x3c7cea(0x26f)+_0x3c7cea(0x449)+_0x3c7cea(0x2a7)+_0x3c7cea(0x4c2)+'.\x0a\x0aIf'+_0x3c7cea(0x525)+_0x3c7cea(0x1cd)+'empty'+_0x3c7cea(0x23e)+'permo'+_0x3c7cea(0x405)+_0x3c7cea(0x56e)+_0x3c7cea(0x29f)+'ectin'+'g\x20int'+'o\x20the'+'\x20cros'+_0x3c7cea(0x4e8)+'gin\x20g'+'ame\x20f'+_0x3c7cea(0x1dd)+'</pre'+'>');var _0x6be178=_0x3ea368[_0x3c7cea(0x32f)+_0x3c7cea(0x5bf)+_0x3c7cea(0x14e)](_0x3c7cea(0x40b)+_0x3c7cea(0x5cb)+'s'),_0x2147a4=_0x3ea368[_0x3c7cea(0x32f)+'Selec'+_0x3c7cea(0x14e)]('#sw2-'+'build'),_0xb39bd4=_0x3ea368[_0x3c7cea(0x32f)+_0x3c7cea(0x5bf)+'tor'](_0x4106a6[_0x3c7cea(0x491)]),_0x2ffd73=_0x3ea368[_0x3c7cea(0x32f)+'Selec'+'tor'](_0x3c7cea(0x40b)+_0x3c7cea(0x1e5)),_0x19d82a=_0x3ea368['query'+_0x3c7cea(0x5bf)+_0x3c7cea(0x14e)](_0x4106a6['cAbko']),_0xbbdbb7=_0x3ea368[_0x3c7cea(0x32f)+'Selec'+'tor'](_0x3c7cea(0x40b)+'snap'),_0x5e941b=_0x3ea368[_0x3c7cea(0x32f)+_0x3c7cea(0x5bf)+_0x3c7cea(0x14e)]('#sw2-'+'speed'),_0x3db1e0=_0x3ea368['query'+_0x3c7cea(0x5bf)+_0x3c7cea(0x14e)](_0x3c7cea(0x40b)+_0x3c7cea(0x36c)+'r'),_0x29fa1e=_0x3ea368['query'+'Selec'+_0x3c7cea(0x14e)](_0x4106a6[_0x3c7cea(0x377)]),_0x26a401=_0x3ea368['query'+_0x3c7cea(0x5bf)+'tor']('#sw2-'+_0x3c7cea(0x287)),_0x5e3fbf=null;if(_0x19d82a)_0x19d82a['oncli'+'ck']=function(){try{_0x3ea368['remov'+'e']();}catch(_0x3ad2d2){}};if(_0xbbdbb7)_0xbbdbb7['oncli'+'ck']=function(){var _0x4c9735=_0x3c7cea;_0x5c4868(_0x4c9735(0x527)+_0x4c9735(0x1b2));};var _0x5174c3=![];function _0x41cef7(){var _0x2de84a=_0x3c7cea;_0x5c4868(_0x4106a6[_0x2de84a(0x11b)],{'on':_0x5174c3,'factor':_0x4106a6['iSXwG'](parseFloat,_0x3db1e0['value'])||0xc27+0x78b+-0x13b1});}if(_0x5e941b)_0x5e941b[_0x3c7cea(0x36b)+'ck']=function(){var _0x598be5=_0x3c7cea,_0x18c934=_0x4106a6['VAemu']['split']('|'),_0x1972e5=-0x1586+0x435*0x1+0x1151;while(!![]){switch(_0x18c934[_0x1972e5++]){case'0':_0x5174c3=!_0x5174c3;continue;case'1':_0x5e941b['textC'+'onten'+'t']=_0x5174c3?_0x4106a6['xlEky']:_0x4106a6['CrpBJ'];continue;case'2':_0x4106a6['usOJh'](_0x41cef7);continue;case'3':_0x5e941b[_0x598be5(0x1ec)][_0x598be5(0x544)]=_0x5174c3?_0x4106a6['lXTMB']:_0x4106a6[_0x598be5(0x19d)];continue;case'4':_0x5e941b[_0x598be5(0x1ec)]['backg'+'round']=_0x5174c3?_0x3cf7ed:'trans'+_0x598be5(0x373)+'t';continue;}break;}};if(_0x3db1e0)_0x3db1e0['oninp'+'ut']=function(){var _0x8e9d91=_0x3c7cea;if(_0x29fa1e)_0x29fa1e['textC'+'onten'+'t']=_0x154d98[_0x8e9d91(0x4d9)]((parseFloat(_0x3db1e0['value'])||-0x1fa4+-0x3f*0x79+0x3d6c)['toFix'+'ed'](-0xfce+0x8c6+0x709*0x1),'x');_0x154d98['HyxoT'](_0x41cef7);};if(_0x2ffd73)_0x2ffd73[_0x3c7cea(0x36b)+'ck']=function(){var _0x269a15=_0x3c7cea,_0x26c7ae={'ZzjNA':_0x4106a6[_0x269a15(0x5a8)]},_0x503ea9=_0x4106a6['fsYZO'](_0x193816+'\x0a'+(_0x5e3fbf?JSON[_0x269a15(0x12b)+_0x269a15(0x274)](_0x5e3fbf,null,0x290+0x514+0x17*-0x55):'')+'\x0a',_0x9391d2),_0xa3e2f=function(){var _0x29fdbe=_0x269a15;if(_0x2ffd73)_0x2ffd73[_0x29fdbe(0x1f8)+'onten'+'t']=_0x26c7ae[_0x29fdbe(0x57c)];};if(navigator['clipb'+'oard']&&navigator[_0x269a15(0x3c0)+'oard'][_0x269a15(0x184)+_0x269a15(0x318)])navigator[_0x269a15(0x3c0)+'oard'][_0x269a15(0x184)+'Text'](_0x503ea9)[_0x269a15(0x4de)](_0xa3e2f,function(){_0x154d98['wApPC'](_0x300498);});else _0x300498();function _0x300498(){var _0x1144df=_0x269a15,_0x2f5365={'ecCtb':'sakur'+_0x1144df(0x5cc)+_0x1144df(0x58a)+'s','KOyEi':_0x1144df(0x1ec)},_0x352658=document[_0x1144df(0x3a0)+_0x1144df(0x539)+_0x1144df(0x302)](_0x1144df(0x14a)+'rea');_0x352658[_0x1144df(0x3d6)]=_0x503ea9;if(!document[_0x1144df(0x277)])return;document[_0x1144df(0x277)][_0x1144df(0x129)+_0x1144df(0x3d1)+'d'](_0x352658),_0x352658[_0x1144df(0x228)+'t']();try{if('lSlnQ'==='lSlnQ')document[_0x1144df(0x3f0)+'omman'+'d'](_0x154d98[_0x1144df(0x557)]),_0x154d98['jqEUN'](_0xa3e2f);else{if(!_0x251eb5[_0x1144df(0x217)+'ement'+'ById'](_0x2f5365['ecCtb'])){var _0x4a1713=_0x2d6c7f[_0x1144df(0x3a0)+_0x1144df(0x539)+'ent'](_0x2f5365[_0x1144df(0x34f)]);_0x4a1713['id']=_0x2f5365[_0x1144df(0x3a6)],_0x4a1713['textC'+_0x1144df(0x209)+'t']='#saku'+'ra-sw'+'-v2{a'+'ll:in'+_0x1144df(0x5f9)+'}',(_0xfab3b2['head']||_0x48593d[_0x1144df(0xf2)+'entEl'+_0x1144df(0x556)])[_0x1144df(0x129)+'dChil'+'d'](_0x4a1713);}return _0x26bff2=_0x513bbc['creat'+'eElem'+_0x1144df(0x302)](_0x1144df(0x47f)),_0x30358e['id']=_0x1144df(0x43b)+_0x1144df(0x5cc)+'v2',_0x1aa9d5[_0x1144df(0x277)]['appen'+_0x1144df(0x3d1)+'d'](_0x28c187),_0x400fa6;}}catch(_0x4a120d){}_0x352658[_0x1144df(0x215)+'e']();}};setTimeout(function(){var _0x4ad052=_0x3c7cea,_0x155688=_0x154d98[_0x4ad052(0x278)]['split']('|'),_0x47ec7a=0x179+-0xdac+0x3*0x411;while(!![]){switch(_0x155688[_0x47ec7a++]){case'0':_0x6be178['style']['color']=_0x4ad052(0x224)+'c7';continue;case'1':if(_0x5e3fbf)return;continue;case'2':_0xb39bd4['textC'+_0x4ad052(0x209)+'t']=_0x154d98['wNlxv'](_0x154d98[_0x4ad052(0x3ab)](_0x154d98['AxDIm'](_0x154d98[_0x4ad052(0x39f)],'This\x20'+_0x4ad052(0x143)+_0x4ad052(0x3be)+'es\x20th'+'e\x20use'+_0x4ad052(0x36d)+_0x4ad052(0x501)+_0x4ad052(0x22d)+_0x4ad052(0x271)+'\x20and\x20'+_0x4ad052(0x2b9)+_0x4ad052(0x4e6)+_0x4ad052(0x2bd)+_0x4ad052(0x5b9)+_0x4ad052(0x389))+_0x154d98[_0x4ad052(0x530)],_0x4ad052(0x2af)+'Tampe'+'rmonk'+'ey\x20is'+'\x20not\x20'+_0x4ad052(0x49e)+_0x4ad052(0x1e3)+'into\x20'+'the\x20c'+'ross-'+_0x4ad052(0x337)+'n\x20ifr'+'ame.\x0a'),_0x4ad052(0x109)+_0x4ad052(0x2bc)+'age\x20h'+_0x4ad052(0x12e)+_0x4ad052(0x4a8)+_0x4ad052(0x25a)+_0x4ad052(0x3c6)+_0x4ad052(0x4d5)+_0x4ad052(0x1a5)+_0x4ad052(0x1aa)+_0x4ad052(0xfe))+_0x154d98['NGpjg']+_0x154d98[_0x4ad052(0x55d)]+('Reloa'+_0x4ad052(0x41b)+_0x4ad052(0x443)+'\x20page'+_0x4ad052(0x495)+'\x20and\x20'+'watch'+_0x4ad052(0x4ca)+'\x20pane'+_0x4ad052(0x572)+'in.');continue;case'3':_0x6be178['textC'+_0x4ad052(0x209)+'t']=_0x154d98[_0x4ad052(0x3ec)];continue;case'4':if(_0x154d98[_0x4ad052(0x336)](!_0x6be178,!_0xb39bd4))return;continue;}break;}},-0x9387+-0x1c20c+-0x1555*-0x27);var _0x12108c={'set':function(_0x137e06){var _0x2ccfb6=_0x3c7cea,_0x2632d0={'jsTRa':function(_0x10b8d4,_0x56edd5){return _0x10b8d4(_0x56edd5);}};_0x5e3fbf=_0x137e06;if(_0x2ffd73)_0x2ffd73['style']['displ'+'ay']='';if(_0x2147a4){var _0x332f38=(_0x2ccfb6(0x42d)+_0x2ccfb6(0x14d))[_0x2ccfb6(0x15f)]('|'),_0x5beeb0=0x14f8+-0x1845+-0x34d*-0x1;while(!![]){switch(_0x332f38[_0x5beeb0++]){case'0':var _0x266c25=_0x3d7312;continue;case'1':_0x2147a4['style'][_0x2ccfb6(0x544)]=_0x4106a6['fgHZm'](_0x3bdcce,_0x266c25)?_0x3cf7ed:_0x4106a6[_0x2ccfb6(0x243)];continue;case'2':var _0x3bdcce=_0x137e06['versi'+'on']||'';continue;case'3':_0x2147a4[_0x2ccfb6(0x1ec)][_0x2ccfb6(0x2e9)+_0x2ccfb6(0x182)+'r']=_0x3bdcce===_0x266c25?'rgba('+_0x2ccfb6(0x1f1)+_0x2ccfb6(0x35a)+_0x2ccfb6(0x172)+')':'#ff6e'+'74';continue;case'4':_0x2147a4[_0x2ccfb6(0x1f8)+_0x2ccfb6(0x209)+'t']='v'+(_0x137e06['versi'+'on']||'?');continue;}break;}}var _0x2eaa19=_0x137e06[_0x2ccfb6(0x1c7)+'nces']&&_0x137e06[_0x2ccfb6(0x1c7)+_0x2ccfb6(0x459)][_0x2ccfb6(0x26a)+'ntrol'+_0x2ccfb6(0x3c8)],_0x5f38e0=Math[_0x2ccfb6(0x3e3)]((_0x137e06['elaps'+'edMs']||-0xbf*-0xd+0x8*0x1bd+-0x179b)/(0x918+0x10ea+-0x17*0xf6));if(_0x6be178){var _0x4b4cb4,_0x5aede4;if(_0x2eaa19&&_0x137e06[_0x2ccfb6(0x2db)+'y']&&_0x137e06[_0x2ccfb6(0x2db)+'y'][_0x2ccfb6(0x26a)+_0x2ccfb6(0x5a5)+'ler']){if(_0x4106a6[_0x2ccfb6(0x40e)]!=='eXTgB')return{'version':_0x56701f,'when':new _0x1eaf99()[_0x2ccfb6(0x16a)+_0x2ccfb6(0x14b)+'g'](),'elapsedMs':_0x2857b5[_0x2ccfb6(0x55a)]()-_0x2f113d,'host':_0x8e45a5,'uwmk':!!(_0x26fc9f['Unity'+_0x2ccfb6(0x34a)+_0x2ccfb6(0x135)]&&_0x608af3['Unity'+_0x2ccfb6(0x34a)+_0x2ccfb6(0x135)][_0x2ccfb6(0x5e1)+'me']),'il2CppContext':![],'arm':_0x5b76ee,'hooksTotal':_0x420954[_0x2ccfb6(0x4f0)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x2632d0[_0x2ccfb6(0x24b)](_0xc600d2,_0x3bbe0b&&_0x26becc[_0x2ccfb6(0x546)+'ge']||_0x4ca7f5)};else _0x4b4cb4=_0x4106a6[_0x2ccfb6(0x387)](_0x2ccfb6(0x142)+'·\x20'+Object[_0x2ccfb6(0x3a9)](_0x137e06[_0x2ccfb6(0x1c7)+'nces'])['lengt'+'h']+_0x4106a6[_0x2ccfb6(0x59e)]+_0x5f38e0,'s'),_0x5aede4=_0x2ccfb6(0x339)+'a8';}else{if(_0x4106a6[_0x2ccfb6(0x2d9)](_0x137e06['hooks'+'Appli'+'ed'],-0x89*0x1c+0x5de+-0x6*-0x185))_0x4b4cb4=_0x4106a6[_0x2ccfb6(0x387)](_0x4106a6[_0x2ccfb6(0x576)](_0x4106a6[_0x2ccfb6(0x506)],_0x5f38e0),'s'),_0x5aede4=_0x2ccfb6(0x3aa)+'8a';else{if(_0x137e06[_0x2ccfb6(0x28e)+_0x2ccfb6(0x17f)]){if(_0x2ccfb6(0x520)!=='XEIMI')return _0x154d98['hRTLj'](_0xc9fa6f[_0x2ccfb6(0x319)],_0x2d3e91);else _0x4b4cb4=_0x4106a6['LAamZ'](_0x2ccfb6(0x519)+_0x2ccfb6(0x31d)+_0x2ccfb6(0x427)+'·\x20',_0x5f38e0)+'s',_0x5aede4=_0x2ccfb6(0x3aa)+'8a';}else _0x4b4cb4=_0x4106a6[_0x2ccfb6(0x387)](_0x137e06['arm']&&_0x137e06['arm']['ok']?_0x2ccfb6(0x45a)+'\x20·\x20':_0x4106a6[_0x2ccfb6(0x239)],_0x5f38e0)+'s',_0x5aede4='#ffd4'+'8a';}}_0x6be178[_0x2ccfb6(0x1f8)+'onten'+'t']=_0x4b4cb4,_0x6be178['style']['color']=_0x5aede4;}_0x26a401&&(_0x26a401[_0x2ccfb6(0x1f8)+_0x2ccfb6(0x209)+'t']=_0x137e06['diff']&&_0x137e06['diff'][_0x2ccfb6(0x4f0)+'h']?_0x4106a6[_0x2ccfb6(0x387)](_0x4106a6[_0x2ccfb6(0x5b0)],_0x137e06['diff'][_0x2ccfb6(0x110)](',\x20')):_0x2ccfb6(0x331)+_0x2ccfb6(0x455)+_0x2ccfb6(0x469)+_0x2ccfb6(0x321)+_0x2ccfb6(0x120)+_0x2ccfb6(0x2da)+_0x2ccfb6(0x1e3)+_0x2ccfb6(0x2fc)+_0x2ccfb6(0x38b)+_0x2ccfb6(0x234)+'\x20whic'+_0x2ccfb6(0x593)+'ld\x20is'+_0x2ccfb6(0x21b)+'h.');_0x137e06[_0x2ccfb6(0x4ea)]&&_0x5e941b&&(_0x5174c3=!!_0x137e06[_0x2ccfb6(0x4ea)]['on'],_0x5e941b['textC'+'onten'+'t']=_0x5174c3?'Speed'+_0x2ccfb6(0x4ad):_0x4106a6['CrpBJ'],_0x5e941b['style'][_0x2ccfb6(0x2d8)+_0x2ccfb6(0x3e3)]=_0x5174c3?_0x3cf7ed:_0x4106a6['tMYzy'],_0x5e941b[_0x2ccfb6(0x1ec)][_0x2ccfb6(0x544)]=_0x5174c3?_0x4106a6[_0x2ccfb6(0x4bb)]:_0x4106a6['nVHHK'],_0x29fa1e&&_0x137e06[_0x2ccfb6(0x4ea)][_0x2ccfb6(0x36c)+'r']&&(_0x29fa1e[_0x2ccfb6(0x1f8)+_0x2ccfb6(0x209)+'t']=Number(_0x137e06[_0x2ccfb6(0x4ea)]['facto'+'r'])[_0x2ccfb6(0x378)+'ed'](0xe*-0x21f+0x1*0xe45+0xf6e)+'x'));if(_0xb39bd4)try{_0xb39bd4[_0x2ccfb6(0x1f8)+_0x2ccfb6(0x209)+'t']=_0x4106a6['iSXwG'](_0x5c6e69,_0x137e06);}catch(_0x4c5085){_0x4106a6[_0x2ccfb6(0x3b7)]==='XGlTz'?_0xb39bd4[_0x2ccfb6(0x1f8)+_0x2ccfb6(0x209)+'t']=JSON[_0x2ccfb6(0x12b)+_0x2ccfb6(0x274)](_0x137e06,null,-0x987+0x877+0x111):_0x324a31('speed',{'on':_0x59019a,'factor':_0x154d98['Fbeuy'](_0x2c9786,_0x44ffd3[_0x2ccfb6(0x3d6)])||0xc08+0x6a*-0x3b+0xc67});}console['log']('%c[sa'+'kura]'+_0x2ccfb6(0x136)+'lWarz'+'\x20repo'+'rt',_0x2ccfb6(0x544)+':'+_0x3cf7ed+(';font'+_0x2ccfb6(0x232)+_0x2ccfb6(0x38f)+'0'),_0x137e06),console['log'](_0x4106a6[_0x2ccfb6(0x1e2)](_0x4106a6['yGHMn'](_0x193816+'\x0a',JSON[_0x2ccfb6(0x12b)+'gify'](_0x137e06,null,-0x546+0x182a*-0x1+0x1d71))+'\x0a',_0x9391d2));}};return _0x3ea368[_0x3c7cea(0x112)+'et'][_0x3c7cea(0x107)]='1',_0x3ea368['api']=_0x12108c,_0x12108c;}function _0x5c6e69(_0x464322){var _0x241f11=_0x2deb15,_0x4cf287={'RgUhD':function(_0x105488,_0x2243b2){return _0x105488+_0x2243b2;},'qBhOe':function(_0x2e09f5,_0x3a8051){return _0x2e09f5+_0x3a8051;},'PFSyC':_0x4106a6[_0x241f11(0x3ad)]},_0x4637df=[];_0x4637df['push'](_0x4106a6[_0x241f11(0x3b3)](_0x4106a6['VoMqv']+(_0x464322[_0x241f11(0x5aa)]||'?')+_0x241f11(0x269),Math[_0x241f11(0x3e3)]((_0x464322[_0x241f11(0x2d2)+_0x241f11(0x596)]||0x1*-0x18a7+0x8ac+-0xffb*-0x1)/(-0x121b+0x220a+0xc07*-0x1)))+'s)'),_0x4637df[_0x241f11(0x1a2)](_0x4106a6[_0x241f11(0x417)](_0x241f11(0x5b5)+'\x20\x20\x20\x20'+(_0x464322[_0x241f11(0x11a)]?_0x241f11(0x332):'no'),_0x4106a6['CAcJH'])+(_0x464322['il2Cp'+_0x241f11(0x5b6)+_0x241f11(0x161)]?_0x4106a6[_0x241f11(0x2ed)]:'no')+(_0x241f11(0x47b)+'pes\x20')+(_0x4106a6[_0x241f11(0x325)](_0x464322['typeC'+'ount'],null)?_0x464322[_0x241f11(0x510)+_0x241f11(0x2d5)]:'?')),_0x4637df[_0x241f11(0x1a2)](_0x4106a6[_0x241f11(0x328)](_0x4106a6[_0x241f11(0x127)](_0x4106a6['WdTVp'],_0x464322[_0x241f11(0x11d)+'Appli'+'ed'])+'/'+_0x464322[_0x241f11(0x11d)+_0x241f11(0x39d)],_0x241f11(0x45f)+_0x241f11(0x1f2))),_0x4637df['push']('');var _0x3bbfaf=_0x464322['insta'+'nces']||{},_0x2b7b84=Object[_0x241f11(0x3a9)](_0x3bbfaf);if(!_0x2b7b84[_0x241f11(0x4f0)+'h']){if(_0x4106a6[_0x241f11(0x50f)](_0x4106a6[_0x241f11(0x493)],'oljAL'))return _0x4b5b47['faile'+'d']++,_0x270b79['lastE'+_0x241f11(0x13d)]=_0x41f171[_0x241f11(0x5a3)+_0x241f11(0x13d)]||_0x4cf287['RgUhD'](_0x4cf287[_0x241f11(0x5ad)](_0x4cf287[_0x241f11(0x162)](_0x241f11(0x1c8)+'ss\x200x',(_0x5a7eeb+_0x43cc9c)[_0x241f11(0x283)+_0x241f11(0x38c)](-0x12*0x2f+-0x8d*-0xf+-0x4e5)),_0x4cf287[_0x241f11(0x2c7)]),_0x55ca85[_0x241f11(0x496)+_0x241f11(0x421)]['toStr'+'ing'](0x46+-0x8*-0x3af+-0x83*0x3a)),null;else _0x4637df[_0x241f11(0x1a2)]('no\x20li'+'ve\x20ob'+'jects'+_0x241f11(0x154)+_0x241f11(0x261)+_0x241f11(0x57e)),_0x4637df[_0x241f11(0x1a2)](''),_0x4637df['push'](_0x241f11(0x298)+_0x241f11(0x486)+_0x241f11(0x168)+'on\x20th'+_0x241f11(0x2df)+_0x241f11(0x481)+_0x241f11(0x483)+_0x241f11(0x251)+_0x241f11(0x4f9)+_0x241f11(0x41c)+_0x241f11(0x154)+_0x241f11(0x261)+'means'),_0x4637df['push']('no\x20Up'+'date\x20'+'ran\x20y'+_0x241f11(0x4db)+_0x241f11(0x538)+'\x20sign'+_0x241f11(0x47d)+_0x241f11(0x423)+_0x241f11(0x2fd)+'atch.');}for(var _0x5032f2=-0x1b6d+-0x3d4+-0x17d*-0x15;_0x5032f2<_0x2b7b84['lengt'+'h'];_0x5032f2++){if(_0x4106a6[_0x241f11(0x266)](_0x241f11(0x2ba),'EWHrm')){var _0x1d0773='';for(var _0x4556c7=0xc25*0x3+0x9bb+0x137*-0x26;_0x4556c7<_0x345cff[_0x241f11(0x4f0)+'h'];_0x4556c7++){var _0x44d480=_0x3ad4a2[_0x4556c7][_0x241f11(0x283)+'ing'](-0xabd*0x2+-0x1422*-0x1+0x168);_0x1d0773+=(_0x44d480['lengt'+'h']<-0x1d*-0x127+0x191b*-0x1+-0x84e?'0':'')+_0x44d480;}return _0x1d0773;}else{var _0x16ab63=_0x2b7b84[_0x5032f2];_0x4637df[_0x241f11(0x1a2)](_0x4106a6[_0x241f11(0x417)](_0x4106a6['goXOL'](_0x16ab63,'\x20@\x20'),_0x3bbfaf[_0x16ab63]));}}_0x4637df['push']('');var _0x320512=_0x464322[_0x241f11(0x2db)+'y']||{},_0x2b5f04=Object[_0x241f11(0x3a9)](_0x320512);for(var _0xcd1e56=-0xc25*0x1+-0x2709+0x2*0x1997;_0xcd1e56<_0x2b5f04['lengt'+'h'];_0xcd1e56++){var _0x26ea97=_0x2b5f04[_0xcd1e56],_0x51a2b9=_0x320512[_0x26ea97];if(!_0x51a2b9||!_0x51a2b9[_0x241f11(0x4f0)+'h'])continue;_0x4637df[_0x241f11(0x1a2)](_0x4106a6['bsGCl'](_0x4106a6[_0x241f11(0x36f)]+_0x26ea97,'\x20')+new Array(Math['max'](0x1*0x1f21+-0x1955+-0x5cb,_0x4106a6[_0x241f11(0x1c2)](0x1edd+0x1*0x53f+-0xa*0x399,_0x26ea97[_0x241f11(0x4f0)+'h'])))[_0x241f11(0x110)]('─')),_0x4637df[_0x241f11(0x1a2)]('\x20\x20off'+'set\x20\x20'+'\x20kind'+_0x241f11(0x42a)+_0x241f11(0x289)+_0x241f11(0x4b3)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'raw');for(var _0x657f7c=0x15d7+0x2*0x8c5+-0x2761;_0x4106a6[_0x241f11(0x116)](_0x657f7c,_0x51a2b9['lengt'+'h']);_0x657f7c++){var _0x24bebf=_0x51a2b9[_0x657f7c],_0x1bbe56=typeof _0x24bebf['v']==='numbe'+'r'?Math['round'](_0x24bebf['v']*(-0xea9+-0x1175+0x2406))/(-0x7*0x247+0x18*0x67+0xa31):_0x24bebf['v'];_0x4637df[_0x241f11(0x1a2)](_0x4106a6[_0x241f11(0x1e2)](_0x4106a6[_0x241f11(0x5d4)](_0x4106a6[_0x241f11(0x206)]('\x20\x20',_0x4106a6[_0x241f11(0x328)]('0x',_0x24bebf['o'][_0x241f11(0x283)+_0x241f11(0x38c)](-0x10bd+0x2a*0x7+-0xfa7*-0x1))[_0x241f11(0x3d7)+'d'](0xca8+-0xba9+-0xd*0x13))+'\x20'+_0x24bebf['k']['padEn'+'d'](-0x1*0x501+0x16*-0x5d+0x685*0x2)+'\x20'+String(_0x1bbe56)['padEn'+'d'](0x2*-0xcd5+0x1b7d+-0x1c3),'\x20'),_0x24bebf['raw']||''));}_0x4637df['push']('');}if(_0x464322[_0x241f11(0x40f)+_0x241f11(0x27a)]&&_0x464322[_0x241f11(0x40f)+'ngs'][_0x241f11(0x4f0)+'h']){_0x4637df[_0x241f11(0x1a2)](_0x4106a6['JeCoL']);for(var _0x2cc7ff=0x111*0x8+0x7f5+0x25b*-0x7;_0x2cc7ff<_0x464322[_0x241f11(0x40f)+'ngs'][_0x241f11(0x4f0)+'h'];_0x2cc7ff++)_0x4637df['push'](_0x4106a6[_0x241f11(0x3ae)]+_0x464322['warni'+'ngs'][_0x2cc7ff]);}return _0x4637df[_0x241f11(0x110)]('\x0a');}window[_0x2deb15(0x186)+_0x2deb15(0x4b5)+_0x2deb15(0x1ad)+'r'](_0x2deb15(0x546)+'ge',function(_0x513348){var _0x380102=_0x2deb15,_0x42173d=_0x513348[_0x380102(0x583)];if(!_0x42173d||_0x4106a6[_0x380102(0x58d)](_0x42173d[_0x380102(0x3d3)+_0x380102(0x1bb)],_0x5a5ece))return;try{if(_0x4106a6[_0x380102(0x50f)](_0x42173d['kind'],_0x380102(0x381))){_0x823bae()['set']({'host':_0x42173d['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x42173d['kind']==='repor'+'t')_0x4106a6[_0x380102(0x100)](_0x823bae)['set'](_0x42173d[_0x380102(0x1fd)+'t']);}catch(_0x3c3306){if(_0x380102(0x353)===_0x380102(0x430))return _0x3de53c&&_0x550882['buffe'+'r']?_0x1eaf9b['buffe'+'r'][_0x380102(0x496)+_0x380102(0x421)]:0xd33+-0x10*0x15a+0x86d;else console['warn']('%c[sa'+'kura]'+_0x380102(0x49c)+'l\x20upd'+'ate\x20f'+_0x380102(0x482),_0x4106a6[_0x380102(0x1c1)](_0x4106a6[_0x380102(0x4ff)],_0x3cf7ed),_0x3c3306);}});if(document[_0x2deb15(0x277)])_0x4106a6['BALLt'](_0x823bae);else document['addEv'+'entLi'+'stene'+'r'](_0x4106a6['MVnWy'],_0x823bae,{'once':!![]});return;}window['__SAK'+'URA_S'+_0x2deb15(0x204)]=window['__SAK'+'URA_S'+'W__']||{'at':Date[_0x2deb15(0x55a)]()};function _0x4b81f0(_0x530e71,_0x4efd63){var _0x1bf440=_0x2deb15,_0x899203={'popbJ':function(_0xfd513a,_0x19bca2){return _0xfd513a|_0x19bca2;}};if(_0x4106a6['dtuHB'](_0x4106a6['XqpcM'],_0x1bf440(0x144)))try{if(!_0x3f6423||!_0x47bf6a)return null;var _0x342d57=new _0x223a2b(_0x1a2e9e)[_0x1bf440(0x133)+_0x1bf440(0x24f)+'me']();return _0x342d57===_0x4054b9?null:_0x342d57;}catch(_0x530b5f){return null;}else{var _0x41339d={'__sakura':_0x5a5ece,'kind':_0x530e71};if(_0x4efd63){for(var _0x431de3 in _0x4efd63)_0x41339d[_0x431de3]=_0x4efd63[_0x431de3];}try{if(window[_0x1bf440(0x373)+'t']&&window[_0x1bf440(0x373)+'t']!==window)window[_0x1bf440(0x373)+'t']['postM'+'essag'+'e'](_0x41339d,'*');}catch(_0x584b0b){}try{if('lTKzU'===_0x1bf440(0x350))return _0x310531[0x1*-0x376+-0x2ed*0x8+0x1ade]=_0x899203[_0x1bf440(0x102)](_0xac93f6,-0x393+-0x1a3d+0x1dd0),_0xcd15c5[-0x112f+0x1f35+0x167*-0xa];else{if(window[_0x1bf440(0x5ee)]&&window['top']!==window)window[_0x1bf440(0x5ee)][_0x1bf440(0x13b)+_0x1bf440(0x4b8)+'e'](_0x41339d,'*');}}catch(_0x5492c4){}}}console[_0x2deb15(0x1b6)](_0x4106a6[_0x2deb15(0x205)](_0x2deb15(0x16f)+'kura]'+_0x2deb15(0x2fe)+'LAYER'+_0x2deb15(0x1d3)+_0x2deb15(0x1a4),_0x3d7312),_0x4106a6[_0x2deb15(0x363)](_0x4106a6[_0x2deb15(0x4ff)],_0x3cf7ed)+_0x4106a6[_0x2deb15(0x479)],{'host':_0x39f627,'href':location[_0x2deb15(0xfc)],'version':_0x3d7312}),_0x4b81f0(_0x4106a6[_0x2deb15(0x4fa)],{'host':_0x39f627,'role':_0x543bb5});var _0x199830=window['__SAK'+_0x2deb15(0x2a8)+'W__']&&window['__SAK'+_0x2deb15(0x2a8)+'W__']['at']||Date['now']();try{if(_0x4106a6['VqVZX'](_0x4106a6['HRZHj'],'IfXBN')){_0xe8a411['textC'+'onten'+'t']='v'+(_0x5f4355['versi'+'on']||'?');var _0x408c2b=_0x4b1256,_0x1df8bc=_0x2df161['versi'+'on']||'';_0x2b50c1[_0x2deb15(0x1ec)][_0x2deb15(0x544)]=_0x4106a6[_0x2deb15(0x5ca)](_0x1df8bc,_0x408c2b)?_0x5d272f:_0x4106a6['ZZHKn'],_0x3ce330['style'][_0x2deb15(0x2e9)+'rColo'+'r']=_0x1df8bc===_0x408c2b?_0x4106a6['WvmCA']:_0x2deb15(0x392)+'74';}else{var _0x543467=new BroadcastChannel(_0x4106a6[_0x2deb15(0x314)]);_0x543467['onmes'+_0x2deb15(0x51c)]=function(_0x351c5e){var _0x5afbac=_0x2deb15,_0x46087f=_0x351c5e[_0x5afbac(0x583)];if(_0x46087f&&_0x46087f[_0x5afbac(0x3d3)+'ura']===_0x5a5ece&&_0x46087f['kind']===_0x4106a6['oKyOh'])_0x47426c(_0x46087f[_0x5afbac(0x1c9)],_0x46087f[_0x5afbac(0x595)]);};}}catch(_0x3b3a14){}var _0x514949=[];(function _0xc960c9(){var _0xd12116=_0x2deb15,_0x113b29={'VECMY':function(_0x19a34c,_0x2c47dc){return _0x19a34c+_0x2c47dc;},'VABMA':_0x4106a6[_0xd12116(0x4b7)],'NmqLk':function(_0x1cc260,_0x1f6953){return _0x1cc260===_0x1f6953;},'WePaW':_0x4106a6[_0xd12116(0x23a)],'vdwOd':function(_0x58d4d5,_0x31595c){return _0x58d4d5!==_0x31595c;}};if(_0x4106a6['Fadyy']===_0xd12116(0x38a))_0x492665[_0xd12116(0x40f)+'ngs'][_0xd12116(0x1a2)](_0x113b29[_0xd12116(0x5f0)](_0x113b29['VABMA'],_0x4a34ec[_0xd12116(0x1c7)+_0xd12116(0x5c2)+'eplac'+'ed']['join'](',\x20')));else{var _0x582483=[_0x4106a6['gqWvz'],_0xd12116(0x513),_0x4106a6[_0xd12116(0x21a)],_0xd12116(0x5c9),_0x4106a6['ZIxqh']];for(var _0x10832f=0x17d0+-0x2f*0x4a+0x1*-0xa3a;_0x10832f<_0x582483[_0xd12116(0x4f0)+'h'];_0x10832f++){_0x4106a6['WzQaG']!==_0xd12116(0x1ea)?function(_0x3bdd4e){var _0x213857=_0xd12116,_0x25d788=console[_0x3bdd4e];if(typeof _0x25d788!=='funct'+_0x213857(0x51b))return;console[_0x3bdd4e]=function(){var _0x192c5f=_0x213857,_0x12da37={'wxITt':function(_0x55e489,_0x68edb5){return _0x55e489+_0x68edb5;},'OvuaQ':function(_0x5cf862,_0x67b892){return _0x5cf862+_0x67b892;},'mCwfm':'LIVE\x20'+'·\x20','DuihH':_0x192c5f(0x18f)+'cts\x20·'+'\x20','ysIbp':'#7ee0'+'a8'};try{var _0x807446='';for(var _0x4e464d=0x1*0x64d+-0x2b*-0x96+-0x1f7f;_0x4e464d<arguments[_0x192c5f(0x4f0)+'h'];_0x4e464d++){var _0x226139=arguments[_0x4e464d];if(_0x113b29['NmqLk'](typeof _0x226139,_0x113b29[_0x192c5f(0x1ff)]))_0x807446+=_0x226139;else{if(_0x226139&&_0x226139['messa'+'ge'])_0x807446+=_0x226139[_0x192c5f(0x546)+'ge'];}}if(_0x807446[_0x192c5f(0x5a7)+'Of'](_0x193816)!==-(0x486+-0x1839+-0xc2*-0x1a))return _0x25d788['apply'](console,arguments);if(_0x113b29['vdwOd'](_0x807446[_0x192c5f(0x5a7)+'Of'](_0x192c5f(0x4ee)+_0x192c5f(0x34a)+_0x192c5f(0x135)),-(-0x1753+0x526+-0x1a*-0xb3))){if('ArwHG'==='ybDSp')_0x524059=_0x12da37[_0x192c5f(0x30d)](_0x12da37[_0x192c5f(0x1d1)](_0x12da37['mCwfm'],_0x427770['keys'](_0xa86558['insta'+_0x192c5f(0x459)])['lengt'+'h'])+_0x12da37[_0x192c5f(0x3d2)]+_0x9a7ade,'s'),_0x2f01f0=_0x12da37['ysIbp'];else{var _0x8cd5f1=_0x807446[_0x192c5f(0x218)](-0xfb*-0x13+-0x35b+-0xf46,-0x1bc0+0x5*0x109+-0x17bf*-0x1);if(_0x113b29[_0x192c5f(0x5f6)](_0x514949['index'+'Of'](_0x8cd5f1),-(0x2d+-0xdee*-0x1+0x1*-0xe1a))&&_0x514949[_0x192c5f(0x4f0)+'h']<0x1b28+-0x2675+0x1*0xb89)_0x514949['push'](_0x8cd5f1);}}}catch(_0x481687){}return _0x25d788['apply'](console,arguments);};}(_0x582483[_0x10832f]):_0x52e12f[_0xd12116(0x1c6)]=_0x161c1b(_0x446dee&&_0x3dc4ba[_0xd12116(0x546)+'ge']||_0x1489f0);}}}());var _0x3a08b4={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x1b734f=null,_0x2ff890=null,_0x343056=-(-0x1903*-0x1+0x5d*-0x2+-0x1848),_0x4757b8=null;function _0x5521cf(_0x340e2e){var _0x22f423=_0x2deb15,_0x4f0966={'Qdjfj':function(_0x4b7b4a,_0x3bf406){var _0x2a18ef=_0x144c;return _0x4106a6[_0x2a18ef(0x18e)](_0x4b7b4a,_0x3bf406);}};if(_0x4106a6[_0x22f423(0x569)]!==_0x22f423(0x438)){var _0x2f2073=_0x3496fb[_0x25dc75][_0x22f423(0x283)+'ing'](-0x11ce+-0x26fd+-0x163*-0x29);_0x2e0803+=_0x4106a6['MTvQe'](_0x4106a6['NgYOU'](_0x2f2073[_0x22f423(0x4f0)+'h'],-0x1608+-0x26b*-0xd+-0x965)?'0':'',_0x2f2073);}else try{if(_0x4106a6['KjgHz'](_0x4106a6[_0x22f423(0x152)],_0x4106a6[_0x22f423(0x152)])){var _0x5510e9=new _0x4075ce(_0x127357);for(var _0x48e5b5=-0x363+-0x21d+0x580;_0x48e5b5<_0x32cb9d;_0x48e5b5++)_0x5510e9[_0x48e5b5]=_0x2213f3[_0x22f423(0x294)+'nt8'](_0x4f0966[_0x22f423(0x570)](_0x163a61+_0x406ea8,_0x48e5b5));return _0x136429['ok']++,_0x5510e9;}else{if(!_0x340e2e)return;var _0x4ecbdf=_0x340e2e['insta'+_0x22f423(0x10d)]?_0x340e2e['insta'+_0x22f423(0x10d)]['expor'+'ts']:_0x340e2e['expor'+'ts']||null;if(!_0x4ecbdf)return;if(!_0x4757b8){if('WuuIW'!==_0x22f423(0x412)){var _0x274502=_0x4106a6[_0x22f423(0x44c)](_0x257483,_0x4106a6[_0x22f423(0x57d)](_0x595878['ptr'],-0x1*0x2586+0x6*0x34a+0x11de),'u32'),_0x94360f=_0x4106a6[_0x22f423(0x260)](_0xae806d,_0x3f014d[_0x22f423(0x375)]+(0x1cc5+0xd1*0xa+-0x2493),'u32');_0xa7d113[_0x22f423(0x2cb)+'a']=_0x274502?'0x'+_0x4106a6[_0x22f423(0x153)](_0x274502,0x2*-0xd35+-0x18dc+0x3346)[_0x22f423(0x283)+_0x22f423(0x38c)](-0x14fa+0x2fe*0x3+0xc10):null,_0x1bb3cb[_0x22f423(0x4e3)+'rList']=_0x94360f?'0x'+(_0x94360f>>>0x1*-0x143f+-0x703+0x6*0x48b)[_0x22f423(0x283)+_0x22f423(0x38c)](-0x7*0x1+0x17c7*-0x1+0x17de):null;}else try{_0x4757b8=Object['keys'](_0x4ecbdf)[_0x22f423(0x218)](0x143*-0xf+-0xfc4*-0x2+-0xc9b,-0x1ccb+0xdb9+0xf2a);}catch(_0x2c7d43){}}var _0x10628e=_0x4ecbdf['memor'+'y'];_0x10628e&&_0x10628e['buffe'+'r']&&_0x4106a6['MdfzR'](_0x10628e[_0x22f423(0x264)+'r']['byteL'+'ength'],-0x55*0x2f+-0x1f8a+0x2f25)&&(_0x2ff890=_0x10628e,_0x343056=_0x4106a6[_0x22f423(0x222)](Date['now'](),_0x199830));}}catch(_0x1b7645){}}function _0x453340(){var _0x277c01=_0x2deb15,_0x4964a8={'XCgjp':function(_0x19c86e,_0x39ec3a){var _0x4213b7=_0x144c;return _0x4106a6[_0x4213b7(0x10a)](_0x19c86e,_0x39ec3a);},'FMvgO':function(_0x1c615b,_0x2dd69a){return _0x4106a6['HRuWJ'](_0x1c615b,_0x2dd69a);},'aRdYA':_0x4106a6[_0x277c01(0x4a7)]};try{if(typeof WebAssembly===_0x277c01(0x3a5)+_0x277c01(0x2dd))return;var _0x29403d=[_0x277c01(0x1c7)+_0x277c01(0x4c1)+'e','insta'+_0x277c01(0x4c1)+'eStre'+_0x277c01(0x253)];for(var _0x51fb67=-0x253b+0x1058+-0x1*-0x14e3;_0x51fb67<_0x29403d['lengt'+'h'];_0x51fb67++){if('JHkrH'==='JDmGL'){var _0x1bcdb8={'ciPcz':function(_0x14ac52){return _0x14ac52();}};_0x597f7b['clipb'+_0x277c01(0x247)]['write'+_0x277c01(0x318)](_0x22b783)[_0x277c01(0x4de)](_0xb8c99,function(){var _0x4da4b4=_0x277c01;_0x1bcdb8[_0x4da4b4(0x35b)](_0x397e8e);});}else(function(_0x7a25e9){var _0xc3a40e=_0x277c01,_0x17addf=(_0xc3a40e(0x5e9)+'|3|1|'+'2|4')[_0xc3a40e(0x15f)]('|'),_0x4fbf83=-0x1de+-0x101f+0xf*0x133;while(!![]){switch(_0x17addf[_0x4fbf83++]){case'0':var _0x33d801=WebAssembly[_0x7a25e9];continue;case'1':_0xd5fe7f[_0xc3a40e(0x3d3)+_0xc3a40e(0x1f6)+_0xc3a40e(0x198)+'ap']=!![];continue;case'2':try{Object[_0xc3a40e(0x558)+'eProp'+_0xc3a40e(0x15c)](_0xd5fe7f,_0xc3a40e(0x54c),{'value':_0x33d801[_0xc3a40e(0x54c)],'configurable':!![]});}catch(_0xff47f7){}continue;case'3':var _0xd5fe7f=function(){var _0x199c49=_0xc3a40e,_0xfd92b3=_0x33d801[_0x199c49(0x561)](this,arguments);try{if(_0xfd92b3&&_0x137d7b[_0x199c49(0x58e)](typeof _0xfd92b3[_0x199c49(0x4de)],_0x199c49(0x1fc)+_0x199c49(0x51b)))_0xfd92b3[_0x199c49(0x4de)](_0x5521cf,function(){});else _0x5521cf(_0xfd92b3);}catch(_0xc80479){}return _0xfd92b3;};continue;case'4':WebAssembly[_0x7a25e9]=_0xd5fe7f;continue;case'5':var _0x137d7b={'eMNYs':function(_0x3297b0,_0x12e547){var _0xad2101=_0xc3a40e;return _0x4964a8[_0xad2101(0x550)](_0x3297b0,_0x12e547);}};continue;case'6':if(_0x4964a8['FMvgO'](typeof _0x33d801,_0x4964a8['aRdYA'])||_0x33d801[_0xc3a40e(0x3d3)+'uraMe'+'moryT'+'ap'])return;continue;}break;}}(_0x29403d[_0x51fb67]));}}catch(_0x2ed8ab){}}var _0x274b73=null,_0x9415a3=null,_0x28ce62={},_0x535b3f=[],_0x2390c6=[],_0xa4a3ad=[{'type':_0x4106a6['umCxC'],'keep':!![]},{'type':_0x4106a6[_0x2deb15(0x32c)],'keep':!![]},{'type':_0x2deb15(0x3c3)+'nMana'+_0x2deb15(0xf3),'keep':![]},{'type':_0x2deb15(0x3f3)+'meMan'+_0x2deb15(0x21e),'keep':!![]},{'type':_0x4106a6[_0x2deb15(0x235)],'keep':!![],'many':!![]}],_0x55a5e1=[_0x2deb15(0x241)+_0x2deb15(0x5c8)+'Sharp'+_0x2deb15(0x2e1),_0x4106a6[_0x2deb15(0x27e)],_0x4106a6[_0x2deb15(0x1c3)],_0x4106a6['LuneX'],_0x4106a6['uBRms'],_0x4106a6[_0x2deb15(0x41d)]];(function _0x2ca93e(){var _0x5c1ff1=_0x2deb15,_0x15dfed={'yhKlM':function(_0x312bc2,_0x227469){return _0x312bc2===_0x227469;},'oEZoC':function(_0x218ed6,_0x13f07a){return _0x218ed6+_0x13f07a;},'oVsSX':function(_0xfac3f7,_0x2137de){return _0xfac3f7+_0x2137de;},'IbcOq':_0x4106a6[_0x5c1ff1(0x5c5)],'oeCiU':_0x5c1ff1(0x5ce)+_0x5c1ff1(0x3f4)+'o\x20a\x20t'+'able\x20'+_0x5c1ff1(0x5a7)+'\x20but\x20'+'appli'+_0x5c1ff1(0x2e5)+_0x5c1ff1(0x471)+_0x5c1ff1(0x418)+_0x5c1ff1(0x52a)+_0x5c1ff1(0x5ea)};try{var _0x33d394=window[_0x5c1ff1(0x4ee)+_0x5c1ff1(0x34a)+'dkit']&&window[_0x5c1ff1(0x4ee)+'WebMo'+_0x5c1ff1(0x135)]['Runti'+'me'];if(!_0x33d394||_0x4106a6[_0x5c1ff1(0x4e5)](typeof _0x33d394[_0x5c1ff1(0x3a0)+_0x5c1ff1(0x105)+'in'],'funct'+_0x5c1ff1(0x51b))){_0x3a08b4[_0x5c1ff1(0x1c6)]='Runti'+'me.cr'+_0x5c1ff1(0x411)+'lugin'+'\x20unav'+'ailab'+'le';return;}_0x3a08b4[_0x5c1ff1(0x429)+_0x5c1ff1(0x1c5)]=!![],_0x9415a3=_0x33d394['creat'+'ePlug'+'in']({'name':'sakur'+'a-ski'+'llwar'+'z','version':_0x3d7312,'referencedAssemblies':_0x55a5e1[_0x5c1ff1(0x218)]()}),_0x3a08b4['ok']=!![];try{var _0x4ec216=window[_0x5c1ff1(0x4ee)+_0x5c1ff1(0x34a)+'dkit'][_0x5c1ff1(0x5e1)+'me'];_0x4ec216[_0x5c1ff1(0x3d3)+'uraTa'+'g']=_0x3d7312+':'+Math['rando'+'m']()[_0x5c1ff1(0x283)+_0x5c1ff1(0x38c)](0x5d+0x1733+0x176c*-0x1)[_0x5c1ff1(0x218)](-0x8fb+-0xbef+0x1*0x14ec,0xd*-0x12a+0x1*-0x8cc+0x17f8),_0x1b734f=_0x4ec216['__sak'+_0x5c1ff1(0x3c4)+'g'];}catch(_0xeaa1d3){}_0x5b8329(),_0x3a08b4['hooks'+_0x5c1ff1(0x584)+'tered']=_0x535b3f[_0x5c1ff1(0x4f0)+'h'],_0x453340(),_0x3a08b4[_0x5c1ff1(0x5d5)+'yTap']=!![];}catch(_0x2c4536){_0x4106a6[_0x5c1ff1(0x4e5)](_0x4106a6[_0x5c1ff1(0x165)],_0x4106a6[_0x5c1ff1(0x4dc)])?_0x3a08b4[_0x5c1ff1(0x1c6)]=String(_0x2c4536&&_0x2c4536[_0x5c1ff1(0x546)+'ge']||_0x2c4536):_0x15dfed[_0x5c1ff1(0x573)](_0x236444[_0x5c1ff1(0x11d)+_0x5c1ff1(0x5e8)+'ved'],-0xcd*0x2f+0x6af+0x1ef4)?_0x4aac78['warni'+_0x5c1ff1(0x27a)][_0x5c1ff1(0x1a2)](_0x15dfed[_0x5c1ff1(0x5db)](_0x15dfed['oVsSX'](_0x15dfed['oVsSX'](_0x5c1ff1(0x457),_0x3e0a1d['hooks'+_0x5c1ff1(0x39d)]),_0x5c1ff1(0x5ce)+_0x5c1ff1(0x56d)+_0x5c1ff1(0x4d7)+_0x5c1ff1(0x130)+_0x5c1ff1(0x32e)+'UWMK.'+_0x5c1ff1(0x4c6)+_0x5c1ff1(0x561)+'\x20pass'+'\x20')+(_0x5c1ff1(0x393)+'once\x20'+'durin'+'g\x20Web'+_0x5c1ff1(0x241)+_0x5c1ff1(0x1cf)+'nstan'+_0x5c1ff1(0x159)+_0x5c1ff1(0x37f)+_0x5c1ff1(0x527)+_0x5c1ff1(0x2a1)+'plugi'+_0x5c1ff1(0x341)+_0x5c1ff1(0x259)+_0x5c1ff1(0x299)+'\x20')+_0x15dfed[_0x5c1ff1(0x549)]+('Regis'+_0x5c1ff1(0x1b9)+'\x20'),_0x236006[_0x5c1ff1(0x11d)+'Regis'+'tered'+_0x5c1ff1(0x171)])+('\x20hook'+_0x5c1ff1(0x560)+_0x5c1ff1(0x374)+_0x5c1ff1(0x581)+'ng\x20at'+_0x5c1ff1(0x1b0)+_0x5c1ff1(0x3f8)+_0x5c1ff1(0x42b)+'.')):_0x592349['warni'+_0x5c1ff1(0x27a)]['push'](_0x15dfed[_0x5c1ff1(0x5db)]('UWMK\x20'+'resol'+_0x5c1ff1(0x2b6),_0x1473c6['hooks'+_0x5c1ff1(0x5e8)+_0x5c1ff1(0x5da)])+_0x5c1ff1(0x424)+_0x4abd5a[_0x5c1ff1(0x11d)+_0x5c1ff1(0x39d)]+_0x15dfed[_0x5c1ff1(0x3a1)]+(_0x5c1ff1(0x56a)+',\x20Met'+_0x5c1ff1(0x3bf)+_0x5c1ff1(0x386)+_0x5c1ff1(0x407)+'id\x20do'+'es\x20no'+_0x5c1ff1(0x2a5)+_0x5c1ff1(0x480)+_0x5c1ff1(0x2fb)+_0x5c1ff1(0x327)));}}());var _0x949f85=new Float32Array(0x2591*0x1+0x23c4+0x2*-0x24aa),_0x40b2c6=new Int32Array(_0x949f85[_0x2deb15(0x264)+'r']);function _0x455788(_0x22b88c){var _0x599636=_0x2deb15;return'PMKHq'!==_0x4106a6['alkOB']?(_0x949f85[0x58d+-0x17*0x13d+-0x2*-0xb77]=_0x22b88c,_0x40b2c6[-0xcf9+-0x62a+-0x1323*-0x1]):(_0x3f4826[_0x599636(0x45e)+'e']=_0x4106a6['MEiIy'],_0x44f35f);}function _0x8da8e(_0x1f5dd5){return _0x40b2c6[0x1*0x1d4d+-0x850+0x1b*-0xc7]=_0x1f5dd5|-0xc23+-0x26f2+0x3315,_0x949f85[0x1e55+-0x134d+-0xb08];}var _0x2d613d={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x48a034(){var _0x50d670=_0x2deb15,_0x26acc5={'zqalu':function(_0x568e49,_0x5ebed8){return _0x4106a6['xvsAI'](_0x568e49,_0x5ebed8);}};try{if(_0x9415a3&&_0x9415a3[_0x50d670(0x1f5)+_0x50d670(0x21c)]){if(_0x50d670(0x139)===_0x4106a6[_0x50d670(0x3b6)])_0x3fb06c=!!_0x311211['speed']['on'],_0x58f78e[_0x50d670(0x1f8)+'onten'+'t']=_0x45ec2b?_0x50d670(0x33d)+'\x20ON':_0x4106a6[_0x50d670(0x466)],_0x406033[_0x50d670(0x1ec)][_0x50d670(0x2d8)+_0x50d670(0x3e3)]=_0xea0fa9?_0x1d7912:_0x50d670(0x203)+'paren'+'t',_0x309747['style']['color']=_0x227d3e?_0x4106a6['lXTMB']:_0x4106a6[_0x50d670(0x19d)],_0x1d2105&&_0x3ff613['speed'][_0x50d670(0x36c)+'r']&&(_0x49f51e[_0x50d670(0x1f8)+'onten'+'t']=_0x4106a6[_0x50d670(0x5e2)](_0x34212c(_0x32df36[_0x50d670(0x4ea)]['facto'+'r'])[_0x50d670(0x378)+'ed'](-0x13*-0x10+0xf3*0x1d+-0xd2*0x23),'x'));else{var _0x5b5a04=_0x9415a3[_0x50d670(0x1f5)+_0x50d670(0x21c)];if(_0x4106a6[_0x50d670(0x214)](typeof _0x5b5a04[_0x50d670(0x207)+_0x50d670(0x4b6)+'e'],_0x50d670(0x1fc)+'ion')){var _0x36fabd=_0x5b5a04['resol'+'veGam'+'e']();if(_0x36fabd)return _0x2d613d['sourc'+'e']=_0x4106a6[_0x50d670(0xfd)],_0x36fabd;}if(_0x5b5a04['_game'])return _0x2d613d['sourc'+'e']=_0x50d670(0x5e3)+'n._ru'+_0x50d670(0x1bd)+'._gam'+'e',_0x5b5a04['_game'];}}}catch(_0x2b93ad){}try{var _0x506de0=window[_0x50d670(0x4ee)+'WebMo'+'dkit']&&window[_0x50d670(0x4ee)+_0x50d670(0x34a)+_0x50d670(0x135)]['Runti'+'me'];if(_0x506de0&&_0x4106a6[_0x50d670(0x4df)](typeof _0x506de0['resol'+'veGam'+'e'],_0x50d670(0x1fc)+'ion')){var _0x56c003=_0x506de0['resol'+_0x50d670(0x4b6)+'e']();if(_0x56c003)return _0x2d613d['sourc'+'e']=_0x50d670(0x5e1)+_0x50d670(0x44e)+_0x50d670(0x2e3)+_0x50d670(0x4c9)+')',_0x56c003;}if(_0x506de0&&_0x506de0[_0x50d670(0x48b)])return _0x2d613d[_0x50d670(0x45e)+'e']=_0x50d670(0x5e1)+'me._g'+_0x50d670(0x515),_0x506de0;}catch(_0x84b563){}try{var _0x44302e=window['unity'+_0x50d670(0x5eb)+_0x50d670(0x10d)]||window['unity'+_0x50d670(0x2fa)]||window['game'];if(_0x44302e)return _0x2d613d[_0x50d670(0x45e)+'e']=_0x4106a6[_0x50d670(0x1eb)],_0x44302e;}catch(_0x5df859){}try{if(typeof game!==_0x50d670(0x3a5)+_0x50d670(0x2dd)&&game)return _0x2d613d['sourc'+'e']='bare\x20'+'game\x20'+_0x50d670(0x587)+'ng',game;}catch(_0x486c4c){}try{var _0x48948e=Object[_0x50d670(0x3a9)](window);for(var _0x208654=-0x270b+0x6c5+0x66*0x51;_0x4106a6[_0x50d670(0x4f5)](_0x208654,_0x48948e[_0x50d670(0x4f0)+'h'])&&_0x208654<-0x493*-0x8+-0x1*-0x119d+-0x33dd;_0x208654++){if(_0x4106a6[_0x50d670(0x3dd)]===_0x4106a6[_0x50d670(0x29d)]){var _0x5c0b59=_0x1f3f60[_0x50d670(0x4ee)+'WebMo'+'dkit']['Runti'+'me'];_0x5c0b59[_0x50d670(0x3d3)+_0x50d670(0x3c4)+'g']=_0x26acc5[_0x50d670(0x315)](_0x3b1b90,':')+_0x5469ba[_0x50d670(0x1e0)+'m']()['toStr'+_0x50d670(0x38c)](0xcf7+-0x179*-0x3+-0x113e)[_0x50d670(0x218)](0x2*-0x895+0xed4+0x4*0x96,0x2a5*-0xd+-0x7d*0x17+0x2da6),_0x350bb8=_0x5c0b59['__sak'+_0x50d670(0x3c4)+'g'];}else{var _0x4ab684=window[_0x48948e[_0x208654]];if(_0x4ab684&&_0x4106a6['NJJnX'](typeof _0x4ab684,_0x50d670(0x508)+'t')&&_0x4ab684[_0x50d670(0x42e)+'e']&&_0x4ab684[_0x50d670(0x42e)+'e'][_0x50d670(0x141)+'8']&&_0x4ab684['Modul'+'e'][_0x50d670(0x141)+'8']['buffe'+'r'])return _0x2d613d['sourc'+'e']=_0x50d670(0x3ea)+'w.'+_0x48948e[_0x208654]+_0x4106a6[_0x50d670(0x3af)],_0x4ab684;}}}catch(_0x8d5866){}return _0x2d613d['sourc'+'e']=null,null;}function _0x39b0e2(){var _0x5f41c8=_0x2deb15;try{if(_0x2ff890&&_0x2ff890['buffe'+'r']&&_0x2ff890[_0x5f41c8(0x264)+'r'][_0x5f41c8(0x496)+'ength'])return _0x2d613d['sourc'+'e']=_0x2d613d[_0x5f41c8(0x45e)+'e']||'insta'+_0x5f41c8(0x4c1)+'e().e'+'xport'+_0x5f41c8(0x419)+_0x5f41c8(0x15e),new Uint8Array(_0x2ff890['buffe'+'r']);}catch(_0xe75885){}try{var _0x24204b=_0x48a034();if(_0x24204b&&_0x24204b[_0x5f41c8(0x42e)+'e']&&_0x24204b[_0x5f41c8(0x42e)+'e']['HEAPU'+'8']&&_0x24204b[_0x5f41c8(0x42e)+'e'][_0x5f41c8(0x141)+'8'][_0x5f41c8(0x264)+'r'])return _0x24204b[_0x5f41c8(0x42e)+'e']['HEAPU'+'8'];}catch(_0x3bc21d){}return null;}function _0x3c2ce4(){var _0x5837f8=_0x2deb15,_0x1b0605=_0x4106a6[_0x5837f8(0x3f9)](_0x39b0e2);if(!_0x1b0605)return null;try{return new DataView(_0x1b0605['buffe'+'r'],_0x1b0605[_0x5837f8(0x5c0)+'ffset'],_0x1b0605['byteL'+'ength']);}catch(_0x44914a){if(_0x4106a6['qIKuz'](_0x4106a6['xlQaV'],_0x4106a6[_0x5837f8(0x509)])){var _0x5aa1bd=arguments[_0x1ee864];if(typeof _0x5aa1bd==='strin'+'g')_0x59f54a+=_0x5aa1bd;else{if(_0x5aa1bd&&_0x5aa1bd['messa'+'ge'])_0x32be63+=_0x5aa1bd[_0x5837f8(0x546)+'ge'];}}else return null;}}function _0x2504e7(_0x1260be,_0x5794de){var _0x285de1=_0x2deb15;if(_0x4106a6['KjgHz'](_0x285de1(0x532),_0x285de1(0x543))){var _0x1aa2df=_0x4106a6[_0x285de1(0x100)](_0x3c2ce4);if(!_0x1aa2df)return _0x2d613d[_0x285de1(0x5c3)+'d']++,_0x2d613d['lastE'+_0x285de1(0x13d)]=_0x2d613d[_0x285de1(0x5a3)+_0x285de1(0x13d)]||'no\x20HE'+_0x285de1(0x55b)+_0x285de1(0x145)+'ty\x20in'+_0x285de1(0x3b8)+_0x285de1(0x4ef)+_0x285de1(0x53a)+_0x285de1(0x2e6)+_0x285de1(0x440)+'Runti'+_0x285de1(0x44e)+_0x285de1(0x2e3)+_0x285de1(0x4c9)+_0x285de1(0x54e)+'any\x20w'+'indow'+'\x20glob'+'al',undefined;if(_0x1260be<0x7f*0x7+-0x43e*0x8+-0x2c5*-0xb||_0x4106a6['MdfzR'](_0x1260be+(0x1*-0x529+-0x7fa*-0x1+-0x2cd),_0x1aa2df[_0x285de1(0x496)+'ength']))return _0x2d613d['faile'+'d']++,_0x2d613d[_0x285de1(0x5a3)+'rror']=_0x2d613d[_0x285de1(0x5a3)+'rror']||_0x4106a6['TqUZO'](_0x4106a6[_0x285de1(0x2ce)]+_0x1260be[_0x285de1(0x283)+'ing'](0x5*-0x12e+0x24e7+-0x1ef1)+_0x4106a6[_0x285de1(0x3ad)],_0x1aa2df[_0x285de1(0x496)+_0x285de1(0x421)][_0x285de1(0x283)+_0x285de1(0x38c)](0x1aa+-0x192c+-0x1*-0x1792)),undefined;try{if(_0x4106a6['gXoBi'](_0x285de1(0x343),_0x4106a6['XItrQ'])){_0x2d613d['ok']++;switch(_0x5794de){case'u8':return _0x1aa2df['getUi'+_0x285de1(0x599)](_0x1260be);case'i8':return _0x1aa2df[_0x285de1(0x192)+'t8'](_0x1260be);case'i16':return _0x1aa2df[_0x285de1(0x192)+_0x285de1(0x333)](_0x1260be,!![]);case _0x4106a6['FQZUW']:return _0x1aa2df['getUi'+_0x285de1(0x31c)](_0x1260be,!![]);case _0x285de1(0x4fe):return _0x1aa2df[_0x285de1(0x192)+_0x285de1(0x397)](_0x1260be,!![]);case _0x285de1(0x503):return _0x1aa2df['getUi'+_0x285de1(0x248)](_0x1260be,!![]);case _0x285de1(0x4a9):return _0x1aa2df['getFl'+_0x285de1(0x465)](_0x1260be,!![]);case _0x4106a6[_0x285de1(0x2c0)]:return _0x1aa2df[_0x285de1(0x382)+_0x285de1(0x17b)](_0x1260be,!![]);case'v2':case'v3':case'v4':return _0x1aa2df[_0x285de1(0x382)+'oat32'](_0x1260be,!![]);default:return _0x1aa2df[_0x285de1(0x192)+_0x285de1(0x397)](_0x1260be,!![]);}}else _0x494aaf[_0x285de1(0x215)+'e']();}catch(_0x392bfd){return _0x2d613d['faile'+'d']++,_0x2d613d['lastE'+_0x285de1(0x13d)]=_0x2d613d[_0x285de1(0x5a3)+'rror']||_0x4106a6[_0x285de1(0x50e)](String,_0x392bfd&&_0x392bfd['messa'+'ge']||_0x392bfd)[_0x285de1(0x218)](0x67*-0x58+0x214a+-0x10f*-0x2,0x13f*-0x1a+0x981+-0x1*-0x175d),undefined;}}else return _0x16a4fd['sourc'+'e']='bare\x20'+_0x285de1(0x1a7)+_0x285de1(0x587)+'ng',_0x4f6c33;}function _0x3f4774(_0x47a614,_0x4c5ac4,_0x55c2f4){var _0x141375=_0x2deb15,_0x280e48=_0x4106a6['Okgvo'](_0x3c2ce4);if(!_0x280e48||_0x47a614<-0x103b+0x8b*-0x1f+0x2110||_0x4106a6[_0x141375(0x3b3)](_0x47a614,-0x1423*0x1+0xcb2+-0x53*-0x17)>_0x280e48['byteL'+_0x141375(0x421)])return![];try{switch(_0x4c5ac4){case'u8':case'i8':_0x280e48[_0x141375(0x370)+'nt8'](_0x47a614,_0x4106a6[_0x141375(0x3f7)](_0x55c2f4,0x26b3+0x25dc+-0x4b90));break;case _0x4106a6[_0x141375(0x2e8)]:case _0x4106a6[_0x141375(0x348)]:_0x280e48['setIn'+_0x141375(0x333)](_0x47a614,_0x55c2f4|-0xb4*0x21+-0x1d1d+0x3b*0xe3,!![]);break;case _0x141375(0x4fe):case'u32':_0x280e48[_0x141375(0x151)+'t32'](_0x47a614,_0x4106a6[_0x141375(0x5d1)](_0x55c2f4,-0x4*-0x98a+0x5b1+-0x19*0x1c1),!![]);break;case'f32':_0x280e48[_0x141375(0x257)+_0x141375(0x465)](_0x47a614,_0x55c2f4,!![]);break;default:_0x280e48['setIn'+_0x141375(0x397)](_0x47a614,_0x55c2f4|0x1*0xbbc+0x5*0x757+-0x306f,!![]);}return!![];}catch(_0x257f92){return'MPHMV'!=='MPHMV'?(_0x4a4cb3[_0x141375(0x5c3)+'d']++,_0x4ba334['lastE'+'rror']=_0xbc187[_0x141375(0x5a3)+_0x141375(0x13d)]||_0x3e73a3(_0x593ded&&_0x581618[_0x141375(0x546)+'ge']||_0x134585)['slice'](-0x1ee3*0x1+-0x15c9+0x34ac,0x181+-0x610+0x1ad*0x3),null):![];}}var _0x3b31d5={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x2deb15(0x4fe)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x2deb15(0x4fe)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x2a3d56(_0x3ab71d){var _0x1eb2ba=_0x2deb15,_0x36054f='';for(var _0x2634f0=0x3c9+0x2187+-0x2550;_0x2634f0<_0x3ab71d[_0x1eb2ba(0x4f0)+'h'];_0x2634f0++){if(_0x4106a6['FaeTz'](_0x1eb2ba(0x5cd),_0x1eb2ba(0x20f))){var _0xb652c3=_0x479ecb[_0x2c36f7];_0x190a17[_0x1eb2ba(0x1a2)](_0x4106a6[_0x1eb2ba(0x1c1)](_0x4106a6[_0x1eb2ba(0x52d)](_0xb652c3,_0x1eb2ba(0x362)),_0x649893[_0xb652c3]));}else{var _0x1a2db3=_0x3ab71d[_0x2634f0][_0x1eb2ba(0x283)+'ing'](0x25fe*0x1+-0x267d+0x8f);_0x36054f+=(_0x1a2db3['lengt'+'h']<-0x24f9+-0x1274+0x376f?'0':'')+_0x1a2db3;}}return _0x36054f;}function _0x4cd80c(_0x15e521,_0x58c745,_0x108c72){var _0x38ce75=_0x2deb15,_0x427175=_0x4106a6['SvmBq'](_0x3c2ce4);if(!_0x427175)return _0x2d613d['faile'+'d']++,_0x2d613d['lastE'+'rror']=_0x2d613d[_0x38ce75(0x5a3)+_0x38ce75(0x13d)]||_0x4106a6['WYRWN'],null;if(_0x58c745<0x161*-0x16+0xd4+0x1d82||_0x58c745+_0x108c72>_0x427175[_0x38ce75(0x496)+'ength'])return _0x2d613d['faile'+'d']++,_0x2d613d['lastE'+'rror']=_0x2d613d[_0x38ce75(0x5a3)+'rror']||_0x4106a6[_0x38ce75(0x586)](_0x4106a6['reHQZ'](_0x38ce75(0x1c8)+_0x38ce75(0x3e7),(_0x15e521+_0x58c745)[_0x38ce75(0x283)+_0x38ce75(0x38c)](0x1bbf+0x2b*0x5e+-0x2b79*0x1)),_0x4106a6['VkRRQ'])+_0x427175['byteL'+_0x38ce75(0x421)][_0x38ce75(0x283)+_0x38ce75(0x38c)](-0x9*0x24c+0x234c+-0x748*0x2),null;try{var _0x407f5d=new Uint8Array(_0x108c72);for(var _0x450abb=0x170c+-0x2a0*-0xa+-0x314c;_0x450abb<_0x108c72;_0x450abb++)_0x407f5d[_0x450abb]=_0x427175[_0x38ce75(0x294)+_0x38ce75(0x599)](_0x4106a6[_0x38ce75(0x5d4)](_0x15e521,_0x58c745)+_0x450abb);return _0x2d613d['ok']++,_0x407f5d;}catch(_0x192843){return _0x2d613d[_0x38ce75(0x5c3)+'d']++,_0x2d613d[_0x38ce75(0x5a3)+_0x38ce75(0x13d)]=_0x2d613d[_0x38ce75(0x5a3)+'rror']||_0x4106a6['iSXwG'](String,_0x192843&&_0x192843['messa'+'ge']||_0x192843)[_0x38ce75(0x218)](0x14*0xd4+0x1*-0xb6e+-0x522,0x1ca7+0x8f*0x2f+0x430*-0xd),null;}}function _0x5e1952(_0x1a0ea5,_0x498c22,_0x152048){var _0xa60308=_0x2deb15;if(_0xa60308(0x2bf)===_0x4106a6[_0xa60308(0x3b5)]){if(_0x34b17d['top']&&_0x4106a6['HRuWJ'](_0x35f472[_0xa60308(0x5ee)],_0x181a7a))_0x45fcfb[_0xa60308(0x5ee)][_0xa60308(0x13b)+'essag'+'e'](_0x312d64,'*');}else{var _0x1ddd17=_0x3b31d5[_0x152048],_0x594103=_0x4106a6[_0xa60308(0x20d)](_0x4cd80c,_0x1a0ea5,_0x498c22,_0x1ddd17['size']);if(!_0x594103)return null;var _0x33c472=new DataView(_0x594103[_0xa60308(0x264)+'r'],_0x594103['byteO'+'ffset'],_0x594103[_0xa60308(0x496)+_0xa60308(0x421)]),_0xb2282a=_0x33c472[_0xa60308(0x192)+'t32'](_0x1ddd17[_0xa60308(0x3d9)],!![]),_0x1bd9a9=_0x33c472['getIn'+_0xa60308(0x397)](_0x1ddd17[_0xa60308(0x41f)+'n'],!![]),_0x4cf409=_0x33c472['getUi'+_0xa60308(0x599)](_0x1ddd17['inite'+'d'])&0xeb6+-0xcfc+-0x1b9,_0x26510e=_0x4106a6[_0xa60308(0x4df)](_0x152048,_0x4106a6[_0xa60308(0x5ba)])?_0x33c472[_0xa60308(0x382)+'oat32'](_0x1ddd17['fake'],!![]):_0x152048===_0xa60308(0x390)?_0x33c472['getIn'+_0xa60308(0x397)](_0x1ddd17[_0xa60308(0x3ac)],!![]):_0x33c472['getUi'+_0xa60308(0x599)](_0x1ddd17[_0xa60308(0x3ac)]),_0x2fc97d=_0x4106a6['LHvAQ'](_0x33c472[_0xa60308(0x294)+'nt8'](_0x1ddd17['activ'+'e']),0x11d9+-0x23*0xa6+0x1b*0x2e);return{'keyAtOffset0':_0xb2282a,'hidden':_0x1bd9a9,'inited':_0x4cf409,'fake':_0x26510e,'act':_0x2fc97d,'hex':_0x4106a6[_0xa60308(0x5b2)](_0x2a3d56,_0x594103),'alt':_0x152048===_0x4106a6[_0xa60308(0x48c)]?_0x1bd9a9^_0x4106a6[_0xa60308(0x5d0)](_0x26510e,-0x1d1*-0x8+0x2*0x6e5+-0x1c52):null};}}function _0x493092(_0x5757e0,_0xd53885,_0x1a0fc5){var _0x18d590=_0x2deb15;if(_0x5757e0===_0x4106a6[_0x18d590(0x5ba)])return _0x8da8e(_0x4106a6[_0x18d590(0x366)](_0xd53885,_0x1a0fc5));if(_0x4106a6[_0x18d590(0x5ca)](_0x5757e0,'obfI'))return _0xd53885^_0x1a0fc5|-0x1399+0x112*-0x1a+-0xfcf*-0x3;return((_0xd53885^_0x1a0fc5)&-0x91*-0x5+0x9*0x30+-0x386)!==-0x1ffd+-0xa39*-0x3+0x1a*0xd?-0x3d2+0xf41+-0x7*0x1a2:0x1469+0x355*0xa+-0x35bb;}function _0x3bf580(_0x1dc9bb,_0x382e2a,_0x4d1a1e){var _0x8c18aa=_0x2deb15,_0x1eba35={'CPshS':function(_0x4632a3,_0x505bf5,_0x125361){var _0xd1d7ee=_0x144c;return _0x4106a6[_0xd1d7ee(0x21f)](_0x4632a3,_0x505bf5,_0x125361);},'XRHAe':function(_0x480e49,_0x36968c){return _0x480e49+_0x36968c;},'mymeD':_0x4106a6[_0x8c18aa(0x1f0)],'NAgXx':function(_0x3d1ead,_0x1de204){return _0x3d1ead+_0x1de204;},'xvPBZ':function(_0x123d06,_0x406feb){return _0x123d06+_0x406feb;},'KaHxM':function(_0xda3883,_0xae9463){return _0xda3883+_0xae9463;},'IUBtu':'f32','XMJSU':function(_0x5e20a9,_0x157dbb){return _0x4106a6['fgHZm'](_0x5e20a9,_0x157dbb);},'YHlOJ':function(_0x53a1ee,_0x3cf222){return _0x53a1ee===_0x3cf222;},'rMbzF':function(_0x1416ff,_0x403f20){return _0x1416ff&_0x403f20;},'bWSQL':function(_0x3c6aee,_0x11fa54){return _0x3c6aee||_0x11fa54;},'uSwxz':_0x8c18aa(0x589),'vudey':'obfI','tOJkT':function(_0x254f8f,_0xaa0b1f){var _0x1dbb52=_0x8c18aa;return _0x4106a6[_0x1dbb52(0x40c)](_0x254f8f,_0xaa0b1f);},'ARXKC':function(_0x2c9383,_0x13761b){return _0x2c9383!==_0x13761b;},'tyWKQ':function(_0x26159a,_0xddacf0){return _0x26159a^_0xddacf0;}};if('MJvCL'===_0x8c18aa(0x591)){var _0x2deb03=_0x1035cd[_0x480691];if(!_0x2deb03)return null;var _0x1c1ef1=_0x1eba35['CPshS'](_0x104863,_0x219905+_0x350127+_0x2deb03['key'],'u8'),_0x461e25=_0x53f958(_0x1eba35['XRHAe'](_0x19ed8f,_0x73ed14)+_0x2deb03['hidde'+'n'],_0x1eba35[_0x8c18aa(0x3df)]),_0x20a669=_0x1eba35['CPshS'](_0x57702d,_0x1eba35[_0x8c18aa(0x361)](_0x1eba35[_0x8c18aa(0x4d4)](_0x218435,_0x55f80f),_0x2deb03[_0x8c18aa(0x118)+'d']),'u8'),_0x49870f=_0x1eba35[_0x8c18aa(0x464)](_0x7425ac,_0x1eba35['KaHxM'](_0x9564ab,_0x6f9a73)+_0x2deb03['fake'],_0x15d40e==='obfF'?_0x1eba35[_0x8c18aa(0x5e7)]:_0x3e7b0c===_0x8c18aa(0x390)?_0x8c18aa(0x4fe):'u8'),_0x27c1ae=_0x245db3(_0xe9376c+_0x483582+_0x2deb03[_0x8c18aa(0x396)+'e'],'u8');if(_0x1eba35['XMJSU'](_0x1c1ef1,_0x5937dd)||_0x1eba35[_0x8c18aa(0x338)](_0x461e25,_0x2f6e9c)||_0x1eba35[_0x8c18aa(0x4e0)](_0x49870f,_0x28767e)||_0x27c1ae===_0x4f5f98)return null;_0x1c1ef1&=0x1e71+-0x1113+-0xc5f,_0x461e25|=-0x154c+-0xf0b+0x531*0x7,_0x20a669=_0x1eba35[_0x8c18aa(0x1ef)](_0x1eba35[_0x8c18aa(0x17c)](_0x20a669,0x1455+-0x15a2+-0x1*-0x14d),-0x2673+0x25bc+-0x5c*-0x2),_0x27c1ae&=0x1fa1+0x43e+-0x23de;var _0xb0d6a9;if(_0x5a869a===_0x1eba35[_0x8c18aa(0x1ed)])_0xb0d6a9=_0x1e9ae2(_0x461e25^_0x1c1ef1);else{if(_0x1eba35['YHlOJ'](_0x1af7bc,_0x1eba35[_0x8c18aa(0x5e5)]))_0xb0d6a9=_0x1eba35[_0x8c18aa(0x124)](_0x461e25^_0x1c1ef1,0x1169*0x1+0xf*-0x19f+-0xd*-0x88);else _0xb0d6a9=_0x1eba35['ARXKC'](_0x1eba35[_0x8c18aa(0x18b)](_0x461e25,_0x1c1ef1)&0xa42+0x1*0x3c7+-0xd0a*0x1,-0x2cb*0xd+0x3*0xe5+0x21a0)?0x610*0x2+0x1*0x2d6+-0xef5:-0x1*-0x16af+0x12*0x192+-0x1*0x32f3;}return{'real':_0xb0d6a9,'fake':_0x49870f,'act':_0x27c1ae,'init':_0x20a669,'key':_0x1c1ef1,'hidden':_0x461e25};}else{var _0x430564=_0x3b31d5[_0x4d1a1e];if(!_0x430564)return null;var _0xf3b1c2=_0x2504e7(_0x1dc9bb+_0x382e2a+_0x430564['key'],'u8'),_0x23be53=_0x4106a6['dOUPF'](_0x2504e7,_0x4106a6[_0x8c18aa(0x470)](_0x1dc9bb,_0x382e2a)+_0x430564['hidde'+'n'],_0x8c18aa(0x4fe)),_0x48446a=_0x2504e7(_0x4106a6['saIMb'](_0x1dc9bb+_0x382e2a,_0x430564['inite'+'d']),'u8'),_0x5c729d=_0x2504e7(_0x4106a6['zHlWd'](_0x1dc9bb+_0x382e2a,_0x430564[_0x8c18aa(0x3ac)]),_0x4106a6[_0x8c18aa(0x19b)](_0x4d1a1e,_0x8c18aa(0x589))?_0x8c18aa(0x4a9):_0x4106a6['mlIbK'](_0x4d1a1e,'obfI')?'i32':'u8'),_0x4f1684=_0x2504e7(_0x4106a6[_0x8c18aa(0x4ed)](_0x1dc9bb+_0x382e2a,_0x430564[_0x8c18aa(0x396)+'e']),'u8');if(_0xf3b1c2===undefined||_0x4106a6['xXjQq'](_0x23be53,undefined)||_0x4106a6[_0x8c18aa(0x322)](_0x5c729d,undefined)||_0x4f1684===undefined)return null;_0xf3b1c2&=-0x89b*-0x1+0x2285*-0x1+0x1ae9,_0x23be53|=0x69b*-0x1+-0x1efc+0x2597,_0x48446a=_0x4106a6[_0x8c18aa(0x3f7)](_0x48446a||0xb*-0xda+-0x1083+0x19e1,0x1654+0x1e28+-0x347b),_0x4f1684&=0x129+-0x2*-0x81a+-0x115c;var _0x5dafc2;if(_0x4106a6[_0x8c18aa(0xfb)](_0x4d1a1e,'obfF'))_0x5dafc2=_0x8da8e(_0x4106a6[_0x8c18aa(0x366)](_0x23be53,_0xf3b1c2));else{if(_0x4106a6[_0x8c18aa(0x322)](_0x4d1a1e,_0x4106a6[_0x8c18aa(0x48c)]))_0x5dafc2=_0x4106a6['XdqYq'](_0x23be53^_0xf3b1c2,0x6*-0x13e+-0x1f91+0x2705);else _0x5dafc2=_0x4106a6['BrLUX'](_0x23be53^_0xf3b1c2,-0xd*-0xb9+-0x7*-0x154+0x97*-0x1e)!==-0x11*-0x167+0x1536+-0x25f*0x13?-0x1*0xc4d+0x61e+-0xb0*-0x9:0x3e5*-0x4+-0x2506+0x349a;}return{'real':_0x5dafc2,'fake':_0x5c729d,'act':_0x4f1684,'init':_0x48446a,'key':_0xf3b1c2,'hidden':_0x23be53};}}function _0x14e8a1(_0x5db9b8,_0x3fd668,_0x2050ab,_0x262f5a){var _0x2bcb10=_0x2deb15,_0x4b174c=_0x3b31d5[_0x2050ab],_0x48edc2=_0x4cd80c(_0x5db9b8,_0x3fd668,_0x4b174c[_0x2bcb10(0x5d8)]);if(!_0x48edc2)return![];var _0x56ab24=new DataView(_0x48edc2['buffe'+'r'],_0x48edc2[_0x2bcb10(0x5c0)+'ffset'],_0x48edc2[_0x2bcb10(0x496)+_0x2bcb10(0x421)]),_0x1a3e31=_0x4b174c['keyTy'+'pe']==='u8'?_0x56ab24[_0x2bcb10(0x294)+_0x2bcb10(0x599)](_0x4b174c[_0x2bcb10(0x3d9)]):_0x56ab24['getIn'+_0x2bcb10(0x397)](_0x4b174c['key'],!![]),_0x2426e9;if(_0x2050ab===_0x4106a6[_0x2bcb10(0x5ba)])_0x2426e9=_0x455788(_0x262f5a);else{if(_0x4106a6[_0x2bcb10(0x4df)](_0x2050ab,_0x4106a6['ViDOf']))_0x2426e9=_0x262f5a|-0x1800+0x2*0xc42+0x2c*-0x3;else _0x2426e9=(_0x262f5a?-0x61*-0x3+-0xb8*0x29+0x1c56:-0x1a5e+-0xe81+0x28df)&0x9d*0x19+-0x265+-0x3*0x3fb;}return _0x3f4774(_0x4106a6[_0x2bcb10(0x27b)](_0x5db9b8+_0x3fd668,_0x4b174c['hidde'+'n']),_0x2bcb10(0x4fe),_0x2426e9^_0x1a3e31)&&_0x4106a6[_0x2bcb10(0x20d)](_0x3f4774,_0x5db9b8+_0x3fd668+_0x4b174c[_0x2bcb10(0x3ac)],_0x4106a6[_0x2bcb10(0x31f)](_0x2050ab,_0x4106a6[_0x2bcb10(0x5ba)])?'f32':_0x4106a6[_0x2bcb10(0x420)](_0x2050ab,_0x4106a6[_0x2bcb10(0x48c)])?_0x2bcb10(0x4fe):'u8',_0x4106a6[_0x2bcb10(0x349)](_0x2050ab,_0x4106a6[_0x2bcb10(0x5ba)])?_0x262f5a:_0x2050ab===_0x2bcb10(0x390)?_0x4106a6['lqkkk'](_0x262f5a,0x5*0x442+0x1*0x1e9d+-0x33e7):_0x262f5a?0x6d6+0x13d5+-0xd55*0x2:0x19*0x5+0x30c+-0xb5*0x5)&&_0x3f4774(_0x4106a6[_0x2bcb10(0x249)](_0x5db9b8,_0x3fd668)+_0x4b174c[_0x2bcb10(0x396)+'e'],'u8',-0x1d64+0x1170+-0xb4*-0x11);}var _0x1c3176={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x1af936={},_0x97bb61=0x1ab1+0x261d+-0x18b*0x2a;function _0x37f4bd(_0x1e18bc){var _0x5b6cd9=_0x2deb15;if(_0x5b6cd9(0x1ca)===_0x5b6cd9(0x59f)){var _0x4f91d7=_0x454dec[_0x5b6cd9(0x561)](this,arguments);try{if(_0x4f91d7&&typeof _0x4f91d7['then']==='funct'+_0x5b6cd9(0x51b))_0x4f91d7[_0x5b6cd9(0x4de)](_0x37bb7a,function(){});else _0x33a74c(_0x4f91d7);}catch(_0x2860c5){}return _0x4f91d7;}else{var _0x147913=_0x11590c[_0x5b6cd9(0x26a)+_0x5b6cd9(0x5a5)+'ler']||[];for(var _0x22a0ba=0x2355+0x1ebf+0x4214*-0x1;_0x4106a6[_0x5b6cd9(0x116)](_0x22a0ba,_0x147913[_0x5b6cd9(0x4f0)+'h']);_0x22a0ba++){var _0x58e292=_0x147913[_0x22a0ba][-0x17da+-0x26*0x3b+0x104e*0x2];if(_0x4106a6[_0x5b6cd9(0x3db)](_0x147913[_0x22a0ba][-0x63f+0x97*0x5+0x34d],_0x5b6cd9(0x589)))continue;var _0x366ec3=_0x4106a6[_0x5b6cd9(0x20d)](_0x5e1952,_0x1e18bc,_0x58e292,_0x4106a6[_0x5b6cd9(0x5ba)]);if(!_0x366ec3||_0x4106a6['ZIoHm'](_0x366ec3[_0x5b6cd9(0x118)+'d'],-0x2498+0x1*0xa81+0x8*0x343))continue;var _0x11c4b1=_0x493092(_0x5b6cd9(0x589),_0x366ec3[_0x5b6cd9(0x41f)+'n'],_0x366ec3['keyAt'+'Offse'+'t0']);if(_0x4106a6['DeejE'](typeof _0x11c4b1,_0x4106a6[_0x5b6cd9(0x212)])||!isFinite(_0x11c4b1))continue;if(Math['abs'](_0x11c4b1)<_0x1c3176['min']||_0x4106a6[_0x5b6cd9(0x2d9)](Math[_0x5b6cd9(0x562)](_0x11c4b1),_0x1c3176['max']))continue;var _0x47a47a=_0x1e18bc+':'+_0x58e292,_0xe3c44b=_0x1af936[_0x47a47a];if(!_0xe3c44b||_0x11c4b1!==_0xe3c44b[_0x5b6cd9(0x329)+'ritte'+'n'])_0xe3c44b=_0x1af936[_0x47a47a]={'base':_0x11c4b1,'lastWritten':null};var _0x1649a3=_0xe3c44b[_0x5b6cd9(0x5b4)]*_0x1c3176['facto'+'r'];_0x4106a6[_0x5b6cd9(0x5c6)](_0x14e8a1,_0x1e18bc,_0x58e292,_0x4106a6[_0x5b6cd9(0x5ba)],_0x1649a3)&&(_0xe3c44b['lastW'+_0x5b6cd9(0x5f7)+'n']=_0x1649a3,_0x97bb61++);}}}var _0x11590c={'FPScontroller':[[-0x10a6+-0x1e76+0x2f2c,_0x4106a6[_0x2deb15(0x5ba)]],[0x1e4f+-0x14fa+-0x92d,_0x2deb15(0x589)],[-0x9*0x21d+-0x7e6+0x1b2b,_0x4106a6['LzBGf']],[0x261c+0x7*0x49e+0x4616*-0x1,_0x2deb15(0x589)],[-0xb57*0x3+0x19fb+0x3e*0x23,_0x4106a6[_0x2deb15(0x5ba)]],[0xb*-0x337+-0x1e5d*-0x1+0xb1*0x8,_0x4106a6['LzBGf']],[-0x1a59*-0x1+0x1a31+0xf*-0x376,_0x2deb15(0x589)],[-0x33*0xbd+-0x4b9+0x8*0x563,_0x4106a6[_0x2deb15(0x45b)]],[-0x28b+-0x1*0x264f+0x299e,_0x2deb15(0x589)],[-0x3a*0x7d+-0x176e+-0x206*-0x1a,_0x2deb15(0x4fe)],[0x1*0x25f7+0x1*0x16cd+-0x3be4*0x1,'v3'],[0x107*0xa+0x529*-0x3+0x621,'u8'],[0x1305+0x3b+-0x1250,_0x4106a6['LzBGf']],[-0x1*-0x1c4f+-0x1*-0xe7e+-0x29c5,_0x4106a6['ZuYLz']],[-0x1*0x99f+-0x5*-0x65b+0x1c*-0xc1,'u8'],[-0x268d*0x1+0x1999*-0x1+-0x2*-0x209b,_0x4106a6[_0x2deb15(0x1f0)]],[0x1343+0x12de+-0x250d,'u8'],[-0x13*-0xa6+0x29*0xd9+-0x2dfe,'u8'],[-0x1f1+-0xc75+-0x7c1*-0x2,_0x4106a6[_0x2deb15(0x5ba)]],[0xd4f*0x1+-0x2023*-0x1+-0x2c3e,_0x4106a6['LzBGf']],[0x1d3a+0xf*-0xf6+-0xd84,_0x4106a6['TYiBH']],[-0x222+-0x22b9+0x262b,_0x4106a6['TYiBH']],[0x2095+0xb77*0x2+-0x362f,'v3'],[-0xf*-0x21c+-0x4ae+0x32*-0x83,'v3'],[0x1f8a+-0x38+-0xef3*0x2,'f32'],[0x1e*-0x95+-0x4f*-0x39+0x43*0x5,'f32'],[0xa*0x1be+0x1c2e+-0x2c12,'u8'],[0xb8*-0x30+-0x33d*0x6+-0x127e*-0x3,_0x4106a6['TYiBH']],[0x9e*0x2c+0x1557+-0x2ee7,'v3'],[0x1040+-0x461+-0x1b*0x61,'u8'],[0x1*-0xef9+0x1*0x2162+-0x10b5,_0x2deb15(0x4a9)],[0x16e0+-0x240b*0x1+0xee3,_0x2deb15(0x4a9)],[-0x2d0+-0x3e*0x7f+0x234e,'u8'],[-0x65e*0x5+0x1*-0xd7b+0x2f0e,'u8'],[-0xf*0x1df+0x4*-0x974+0x43a1,_0x4106a6[_0x2deb15(0x5ba)]],[-0x1ef4+0x5cc+0x1b00,_0x4106a6['TYiBH']],[-0x1ebe+-0x489+0x2523,'u8'],[0xa*0x329+0x26f*0x2+-0xd8*0x29,_0x4106a6[_0x2deb15(0x5ba)]],[0x23b5+-0xd*-0xcc+-0xeb3*0x3,'v3'],[-0x150f+-0x142c+-0x1*-0x2b43,_0x2deb15(0x59a)],[-0x39f*-0x3+0x47*0x35+-0x4*0x5de,_0x4106a6[_0x2deb15(0x1e9)]],[0x6f7+0x566+0xa41*-0x1,_0x4106a6['TYiBH']],[0x718*0x2+-0x108c+0x4a8,_0x4106a6[_0x2deb15(0x1e9)]],[-0x1064+0x2b9*-0xa+-0x1*-0x2dee,_0x4106a6[_0x2deb15(0x1e9)]],[-0x2*-0x121c+-0x96b+-0x1*0x1879,_0x4106a6[_0x2deb15(0x1e9)]],[0x1c50+-0xe13+-0x5*0x261,_0x4106a6['TYiBH']],[-0x1fbb+0x22*-0x3d+-0x1*-0x2a31,'u8'],[0x807*-0x1+-0x35d+0xdc1,'u8'],[-0x112*0xc+-0x193*-0x1+0xda3*0x1,'u8'],[-0x1d81*0x1+0x447+0x1b9a,_0x4106a6[_0x2deb15(0x1e9)]],[-0xf48*0x2+0x1*0x2527+-0x433,'u8'],[0x1aa8+-0x1f83+-0x2*-0x3a0,'u8'],[0x5*-0x4dc+-0x7e1*0x3+-0x1*-0x3257,_0x2deb15(0x4a9)],[-0xa3*0xa+0x729*0x5+-0x1b03,_0x4106a6[_0x2deb15(0x1e9)]],[0x77c+0x159a+-0x2*0xd53,_0x2deb15(0x4a9)],[-0x1*-0x1979+-0x9da+-0xd2b*0x1,_0x2deb15(0x4a9)],[-0x220f+-0x4*0x29f+-0x53*-0x91,_0x2deb15(0x4a9)],[0x278*0x7+-0x1683+0x4f*0x19,'f32'],[-0x256b+0x662+0x2189,_0x4106a6[_0x2deb15(0x1e9)]],[0x215a+0x19a7+-0x387d*0x1,'v3'],[0x1*-0x817+-0x10b*-0x1+0xb0*0xe,'u8'],[-0x9d*-0x18+0x4*0x7f9+0x3ab*-0xc,'v3'],[0x41*0x49+-0x1*0x1b5f+0x5bd*0x2,'f32'],[0xa25+-0x3f2+-0x387,'v3'],[0xe1+0x2b6*0xc+0xa3b*-0x3,'f32'],[0x1f9c+-0x1e*-0x114+-0x4*0xf4e,'f32'],[0x4*0x4a0+0xf*-0x138+0x288,_0x4106a6['TYiBH']],[0x1d53*0x1+-0x3b+-0x1a54,'u8'],[0x1c13*0x1+0x974+-0x22c2*0x1,'u8'],[-0x7*0xa7+0x1*-0x9e+0x7f7*0x1,_0x4106a6['TYiBH']],[0x1*-0x191c+0x357+0x18a1,'f32'],[-0x1502+0x361*-0x1+0x1b47,'v3'],[0x21a3+0x71f+0x25d2*-0x1,'v3'],[-0x241*0x9+-0x10a*-0xe+0x4d*0x1d,_0x2deb15(0x4a9)],[-0x1*0x40+-0x257b+0x28bb,'f32'],[-0xd4e+0x3d*-0x7+0x11fd,_0x2deb15(0x4a9)],[0x1b13+-0x1e8b+0x4*0x1a0,_0x2deb15(0x4a9)],[-0x20e8*-0x1+-0xcd2+-0x110a,'v3'],[-0x4*-0x4f4+0x2300+0xcee*-0x4,'u8'],[-0x9*0x263+0x1*0x2389+0x1*-0xaf2,'v3'],[-0xf0d+-0x1f13+-0x4*-0xc52,_0x2deb15(0x4fe)],[0x625+0xfcb+0x4*-0x4b1,'f32'],[-0x18fa+0x5d9+0x1651,'f32'],[-0xf4d+0x1c63+-0x2*0x4f1,_0x4106a6['TYiBH']],[-0x2d7*0x6+0x109e+0x3a8,_0x2deb15(0x4a9)],[-0xab9+-0x1c*0xb2+-0x2171*-0x1,'u8'],[0x82*0x4a+-0x158d+-0x28e*0x5,'u8'],[-0x102b*-0x1+0x11d7*0x2+-0x308d,'u8'],[-0x35*-0x4f+0x11c4+0x3*-0xa46,'u8'],[0x463*-0x6+-0xb35+0x28d5*0x1,'u8'],[-0x8a8*0x2+0x16*-0x6c+0x1de8,_0x2deb15(0x4a9)],[-0x338*0x2+0xc99+-0x2d5,_0x4106a6['TYiBH']],[0x1beb*0x1+-0xeb7+-0x9dc,_0x4106a6[_0x2deb15(0x1e9)]],[-0x196a+0x47f*0x2+0x13c8,_0x4106a6[_0x2deb15(0x1e9)]],[-0x8d8+-0x3*-0x9b1+-0x1*0x10db,_0x4106a6['TYiBH']],[0x5*0x2e0+0x3*-0x50d+0xb*0x61,'u8'],[-0x2051+0x1344+-0x1075*-0x1,_0x4106a6[_0x2deb15(0x1e9)]],[0x302*-0x1+0x6ff+-0x91,_0x2deb15(0x4a9)],[0x67*0xd+0xb9b+-0xd66,'u8'],[0x1*0x1b09+0x1a1b+0x44*-0xbb,'v3'],[-0x6e2*0x2+-0x6*-0x5d1+-0x52*0x37,'v3'],[0x10be+0x194*-0xb+-0x217*-0x2,'v3'],[-0x2316+0x1ac7+-0x1*-0xbeb,_0x4106a6[_0x2deb15(0x1e9)]],[-0x573+-0x2*-0x86+-0x89*-0xf,_0x4106a6['TYiBH']],[0x160f+-0x10f*0x2+-0x104d,_0x2deb15(0x4a9)],[0x4a*-0x7b+-0xf02*-0x2+-0x932*-0x1,'v3'],[-0x11f9+0xf90+0x5*0x139,'i32'],[-0xaaa+-0x24d3+0x3335,'u8'],[-0x8cc*-0x1+0x186*0x17+0x6*-0x6af,_0x2deb15(0x4fe)],[-0xd76*0x1+0x752+0x9e4,_0x2deb15(0x4a9)],[-0x7cd*0x1+0x210f+-0x157e,'f32'],[0x12bf*0x1+-0x19*0x113+0xbe4,_0x2deb15(0x4a9)],[0xf5+-0x63*-0xe+-0x293,_0x4106a6['TYiBH']],[-0xcbc+0x1bd+0x1*0xecf,'v3'],[-0x2e*-0x33+-0x126b+0x175*0x9,_0x2deb15(0x4fe)],[0x1*0xfda+0x7dc*0x2+-0x1bb2,'u8'],[0x1e9d+0x2*0x1367+-0x20c5*0x2,'u8'],[0x4df+-0x1096+0x21*0x79,'u8'],[0x388*0x4+0x2334+-0x1*0x2d70,_0x2deb15(0x4a9)],[0x1cad*0x1+0x1*-0xb58+0x1eb*-0x7,_0x4106a6[_0x2deb15(0x1f0)]]],'HealthScript':[[0x1991+0x1b9d+-0x34d6,'u8'],[0x4*-0xd4+0x1ae7*-0x1+0x1e93,_0x4106a6[_0x2deb15(0x1f0)]],[0x3*0x59f+-0x1653+0x5f6,_0x2deb15(0x4a9)],[-0x175a+-0x1285+0x2a63,_0x2deb15(0x4a9)],[-0x16d8+-0x2342+0x3aa2*0x1,_0x4106a6['TYiBH']],[-0x13a7*-0x1+-0x777+0x254*-0x5,_0x2deb15(0x4a9)],[-0x13bf+-0x2261+0x36b0,_0x2deb15(0x4a9)],[-0x1*-0x119b+-0x1*0x17b3+0x6ac,_0x4106a6['TYiBH']],[-0x1*0x1349+-0xc85+-0x1037*-0x2,_0x2deb15(0x4fe)],[-0x2d1+-0x25*0x47+0x1*0xdb8,_0x4106a6[_0x2deb15(0x1f0)]],[0x1*0xcfe+-0x1b84+-0x797*-0x2,'u8'],[0x17*0xef+-0xcf5+-0x1*0x7db,'u8'],[0x1387*-0x1+0x34*-0x19+0x1945*0x1,'u8'],[-0x1e8e*0x1+0x15*0xed+0xbc8,'u8'],[0x1628+-0x1369*-0x1+0x9*-0x489,'obfI'],[0xf83+-0xa27+0x2*-0x244,_0x4106a6[_0x2deb15(0x48c)]],[0xd7a*0x1+-0x14e0+0x84e,_0x4106a6[_0x2deb15(0x48c)]],[-0x1edc+-0x1f*-0x31+0x19e9,_0x2deb15(0x390)],[-0x20f3+-0x815*-0x1+0x19ee,_0x2deb15(0x390)],[0x85c+-0x1*0xe66+0x2*0x397,_0x4106a6[_0x2deb15(0x45b)]],[0x1b10+0xca2+-0x2682,'obfF'],[-0x281*-0xd+-0x33*0x1+-0x1f12,_0x4106a6['TYiBH']],[0xcd1+-0x2481+0x18fc,_0x2deb15(0x4a9)],[-0x28b*0x5+0x14e8+-0x3*0x24b,_0x2deb15(0x4a9)],[0xe2f*-0x1+0x10c9+-0x146,'f32'],[-0x21e0+-0x1*0xb75+0x2eb1,'f32'],[-0xb6f*0x1+-0x97*0x8+0x1187*0x1,'v3'],[0x5*-0x359+0x233b+0x76*-0x25,_0x4106a6[_0x2deb15(0x1e9)]],[-0x8b5*0x1+-0x24e3+0x2f10,_0x2deb15(0x4a9)],[0x3e*-0x81+0xee6+0x11d8,'u8'],[0x3*0xc91+0x16be+0x1*-0x3ae5,'u8'],[0x14df+-0xb39+-0x5*0x19e,_0x2deb15(0x4fe)]],'PlayerConfig':[],'WeaponManager':[[-0x35*-0xa1+-0xb14+-0x1629,'i32'],[0x9+0x1*-0xbb2+0xbc5,_0x4106a6['ZuYLz']],[-0x243*-0x11+0x2639+-0x354*0x17,'u8'],[-0x34b+0x1b48+-0x17d9,_0x4106a6[_0x2deb15(0x1f0)]],[0x2*-0xe27+-0xbe4+0x2896,_0x4106a6['LzBGf']],[-0xfdc+0x39*-0x52+0xce*0x2b,'f32'],[-0x7ba+0xe5*-0x2b+0x2eb5,_0x2deb15(0x4fe)],[-0x1*0xddf+0xa78+0x3ef,'u8'],[0x1*0x819+0x8d*-0x25+-0x1*-0xcd1,'u8'],[-0xf5*-0xb+0x14a7+-0x1ea2,_0x2deb15(0x4fe)],[-0x653*-0x3+0xf1*-0x13+-0x86,_0x2deb15(0x4a9)],[-0x12f+-0x1942+0x1*0x1b09,_0x2deb15(0x4a9)],[-0x1ad8+-0xf0+-0x97c*-0x3,_0x4106a6[_0x2deb15(0x1f0)]],[-0x3c4*0x1+0xc6b*0x1+-0x7eb,'u8'],[0x12*0x5d+-0x1*0x9d6+-0xe*-0x4c,'obfI'],[0xd4*-0x1f+-0x8*0x4a2+-0x28c*-0x19,_0x2deb15(0x390)],[-0x1*0x50d+-0x1*0x23d6+0x29e7,_0x2deb15(0x4a9)],[-0x1f9a+0x1fd7+0xcb,_0x2deb15(0x4a9)],[-0xe88+-0x21ff+0x3193,_0x4106a6[_0x2deb15(0x1e9)]],[0x1957+0x1*-0x7ed+0x2*-0x829,_0x2deb15(0x4a9)],[-0xa*0xb7+0x222f+-0x2e1*0x9,_0x2deb15(0x4a9)],[0x7*0x9b+-0xbc3+-0x1*-0x8ae,'u8'],[-0xeb*-0xd+-0x21c5+0x1702,_0x2deb15(0x390)],[0xbdd*-0x3+-0x407*0x1+0x28de*0x1,_0x2deb15(0x390)],[-0x2e1+0x3*0x877+-0xe2*0x18,_0x4106a6[_0x2deb15(0x48c)]],[-0x170*0x5+-0x3ef*0x7+0xc0b*0x3,'obfB'],[0x1*-0xc2+0xa1c*-0x1+-0x53*-0x26,'obfB'],[0xe03*-0x1+-0x47*0x71+-0x3*-0xf9e,_0x2deb15(0x59a)],[0xae*0x1e+-0x23ff+0x1127,_0x2deb15(0x59a)],[-0x8*-0x13a+0x1*-0x1085+-0x859*-0x1,_0x4106a6[_0x2deb15(0x45b)]],[0x3a6+-0x1569+-0x1*-0x1373,'obfI'],[-0x13b4+0xe43+0x73d,_0x2deb15(0x4fe)],[-0x64d+0x1ca6+0x1*-0x1489,'u8'],[-0x110e+0x2321+-0x103f,_0x2deb15(0x4fe)],[0x2*0x72+0xd3e+-0x8f*0x16,'i32'],[-0x24*0xe2+-0xb4a*-0x1+0x167e,'i32'],[0x1*-0xb7a+-0x16a+0xef8,'u8'],[0x163*0xb+0x2b8*-0x6+0x32b,'u8'],[-0x16a0*0x1+-0x1093*0x1+-0x2950*-0x1,'u8'],[0xb*0x191+0x1ea*-0x3+0x1*-0x95f,'u8'],[-0x77*0x3d+-0x16e3+-0x1*-0x355d,'u8'],[-0x70e+-0x1f3e+0x1*0x289c,_0x2deb15(0x4fe)],[0x3*-0x5d8+0x1235+0x1ab,'u8']],'GG_GameManager':[[0x1159*0x1+-0x144d+-0x4*-0xc6,'u8'],[0x4*0x21e+0x141d+0x7*-0x40f,'f32'],[0x1*0x2374+-0x1*-0xea7+0x3*-0x109d,'u8'],[-0x243c+0x1*0x250+0x2231,'u8'],[-0x861+0x1f88+-0x16df,_0x4106a6[_0x2deb15(0x1e9)]],[0x3f3*-0x9+-0x17b1+0x7f*0x78,_0x2deb15(0x4a9)],[0x911+0x1c5f*-0x1+0x139e,_0x4106a6['ZuYLz']],[0x2*-0x135f+0x1dc+0x2536,_0x4106a6['ZuYLz']],[-0x185d+-0x2c4*0x9+-0x1*-0x3199,'u8'],[-0x199*0xb+0x1a*0xc2+-0x1ad,'u8'],[-0x1f26+-0x1*-0x8db+0x16c3,_0x4106a6['TYiBH']],[0x1656+0x2*0xb3c+-0x1f*0x16e,_0x2deb15(0x4a9)],[0x49*-0x49+-0x2b*-0xb2+-0x1*0x885,_0x2deb15(0x4fe)],[-0x1*0x1aaa+-0x15c*0x11+0xa*0x509,'u8'],[-0x5*-0x10f+0x19*0x26+0x55*-0x19,_0x2deb15(0x4fe)],[0xb3f+-0x8*-0x38+-0xc43,_0x4106a6[_0x2deb15(0x1f0)]],[-0x1*0x24e1+-0x61*-0x1+-0x2*-0x12a0,_0x4106a6[_0x2deb15(0x1f0)]],[-0x10d3+0x1*0x48a+0xd31,'obfI'],[0x3a0+0x3b*-0x8+-0x3*0x44,_0x4106a6['ViDOf']],[0xeac+0xf3c+-0x1cd8,'obfI'],[0x1759*-0x1+-0x1*-0x28d+-0xafc*-0x2,'u8'],[0xf*-0x20f+-0x2551+0x4562,_0x2deb15(0x4fe)],[0x904+0x806+-0xfa6,'u8'],[0xf6c+0x1984+-0x4f0*0x8,_0x2deb15(0x4a9)],[-0x1d28+-0x475*-0x5+0x85f,'u8'],[0x13a6+-0xa78+-0x59*0x16,'u8'],[-0x1*0x6c5+-0x1a42*-0x1+-0x11d9,'u8'],[0x25ae+0x153f+-0x3945,_0x4106a6[_0x2deb15(0x1f0)]],[0x78c+0x1af*-0x3+0x1*-0xd3,_0x4106a6['TYiBH']],[0x1af8*-0x1+-0x69b+0x2343,'u8'],[0x1c2a+-0x2e*0x1a+0x15cd*-0x1,'u8'],[-0x144b+-0xcff*0x3+0x3d00,_0x2deb15(0x4fe)],[0x341+-0xc*-0xd5+0xb81*-0x1,'i32'],[-0x125*0x1f+-0xe75+0x33b0,_0x2deb15(0x4a9)],[-0x244+-0xd*0x12b+-0x1*-0x1337,_0x2deb15(0x4fe)],[0x6*0x1ed+-0x1*0x17c7+-0xe01*-0x1,_0x2deb15(0x4a9)],[0x1584+-0x8a1+-0xb17,_0x4106a6[_0x2deb15(0x1f0)]],[-0x18d2+-0x2c*-0x49+0xe16,_0x4106a6[_0x2deb15(0x1f0)]]],'EnemyBot':[[-0xf22*0x1+0x22a9+-0x1367,_0x4106a6[_0x2deb15(0x1e9)]],[0xb3b+-0x3*-0x79c+0x1c9*-0x13,'v3'],[-0xa4e+-0x1a9*0x13+0x2a09,'u8'],[-0x217b+0x11fd+0xfb2,'f32'],[0x18c2+0x1576+-0x1700*0x2,'f32'],[-0x1cd*0x4+-0x1ce5+0x2455*0x1,'u8'],[0x150+0xa5d+0x17*-0x7f,'f32'],[-0x274+-0x1*0x841+0xafd,_0x4106a6['TYiBH']],[-0x4*-0x6ff+-0x8e3+-0x12cd,'u8'],[-0xef8+0x1a6a+-0xb25,'u8']]},_0x4f672a={};function _0x1e742(_0x399f44,_0x2f768b,_0xe6ed94){var _0x18d48e=_0x2deb15,_0x448864={'rqfNE':function(_0x4e6346,_0x487246){var _0x5d22de=_0x144c;return _0x4106a6[_0x5d22de(0x155)](_0x4e6346,_0x487246);},'gIITU':'funct'+'ion','Kxxjj':function(_0x169c32,_0x31e841){return _0x169c32===_0x31e841;}};if(_0x4106a6['ZIoHm'](_0x4106a6[_0x18d48e(0x2eb)],_0x4106a6[_0x18d48e(0x2eb)]))try{return _0x18abdc&&_0x18b84c['buffe'+'r']?_0x1e1225['buffe'+'r'][_0x18d48e(0x496)+'ength']:0xcaa+0x15b4+-0x225e;}catch(_0x297685){return 0x1190+-0x1e8a*0x1+0xcfa;}else return function(_0x221802){var _0x242463=_0x18d48e,_0x3f9d07={'bKquZ':function(_0x580c35,_0x45f481){return _0x4106a6['iSXwG'](_0x580c35,_0x45f481);},'ycmag':function(_0x1162a0,_0x237ec5){return _0x1162a0===_0x237ec5;},'DdKjC':_0x4106a6[_0x242463(0x45b)],'pPgqe':function(_0x497523,_0x55bf5b){return _0x497523===_0x55bf5b;},'kYsxN':_0x4106a6['ezeby'],'HsncE':function(_0x21303b,_0x31e553){var _0x1612ef=_0x242463;return _0x4106a6[_0x1612ef(0x19b)](_0x21303b,_0x31e553);},'pehLE':function(_0x21ce10,_0x411cfa){return _0x21ce10*_0x411cfa;},'xXQSL':_0x4106a6[_0x242463(0x5b1)],'fRrKR':function(_0x49785a,_0x5e3d71,_0x4fe665){return _0x4106a6['dOUPF'](_0x49785a,_0x5e3d71,_0x4fe665);}};try{var _0x1a8676=_0x221802&&_0x221802['val']?_0x221802['val']():-0x18ce+0x1*0x194f+-0x81;if(!_0x1a8676)return;if(_0xe6ed94){if(!_0x4f672a[_0x1a8676])_0x4f672a[_0x1a8676]={'ptr':_0x1a8676,'firstSeen':Date[_0x242463(0x55a)](),'hits':0x0};_0x4f672a[_0x1a8676]['hits']++;}else{if('aqcZM'===_0x242463(0x21d)){var _0x17e659=_0x28ce62[_0x399f44];if(!_0x17e659||_0x17e659[_0x242463(0x375)]!==_0x1a8676){_0x28ce62[_0x399f44]={'ptr':_0x1a8676,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x17e659};try{var _0x2d3f22=_0x535b3f[_0x242463(0x149)+'r'](function(_0x2636fd){var _0x42bc09=_0x242463;return _0x2636fd[_0x42bc09(0x319)]===_0x399f44;})[0x3df*0x8+-0x62c+-0x18cc];_0x26dff1={'type':_0x399f44,'atMs':Date[_0x242463(0x55a)]()-_0x199830,'originalFunc':!!(_0x2d3f22&&_0x2d3f22['hook']&&_0x4106a6['NJJnX'](typeof _0x2d3f22[_0x242463(0x441)][_0x242463(0x337)+_0x242463(0x123)+'nc'],_0x242463(0x1fc)+'ion')),'resolveGameAtFire':!!_0x4106a6[_0x242463(0x263)](_0x48a034),'gameSourceAtFire':_0x2d613d[_0x242463(0x45e)+'e']};}catch(_0x3314ad){}}}else{var _0x5b2af4=_0x2a0efb[_0x242463(0x1f5)+_0x242463(0x21c)];if(_0x448864[_0x242463(0x4d1)](typeof _0x5b2af4['resol'+_0x242463(0x4b6)+'e'],_0x448864['gIITU'])){var _0x1b8d29=_0x5b2af4[_0x242463(0x207)+_0x242463(0x4b6)+'e']();if(_0x1b8d29)return _0x7b043f[_0x242463(0x45e)+'e']=_0x242463(0x5e3)+_0x242463(0x125)+'ntime'+'.reso'+'lveGa'+_0x242463(0x2f8),_0x1b8d29;}if(_0x5b2af4[_0x242463(0x48b)])return _0x4b42fd[_0x242463(0x45e)+'e']=_0x242463(0x5e3)+_0x242463(0x125)+'ntime'+_0x242463(0x3a3)+'e',_0x5b2af4[_0x242463(0x48b)];}}if(_0x399f44===_0x4106a6[_0x242463(0x3b9)]&&_0x1c3176['on']){if(_0x4106a6['gqSOx'](_0x242463(0x111),_0x4106a6['uVqdM']))return _0x152ae9[_0x242463(0x5c3)+'d']++,_0x3dadd5[_0x242463(0x5a3)+'rror']=_0x375215[_0x242463(0x5a3)+_0x242463(0x13d)]||'no\x20HE'+'APU8\x20'+_0x242463(0x145)+'ty\x20in'+_0x242463(0x3b8)+'e\x20not'+'\x20reac'+_0x242463(0x2e6)+'\x20via\x20'+_0x242463(0x5e1)+_0x242463(0x44e)+_0x242463(0x2e3)+_0x242463(0x4c9)+')\x20or\x20'+_0x242463(0x514)+_0x242463(0x1b7)+_0x242463(0x40d)+'al',null;else try{if(_0x4106a6[_0x242463(0x254)]!==_0x4106a6[_0x242463(0x254)]){var _0x264ee2=_0xea20c['v'];if(typeof _0x264ee2!==_0x242463(0xf9)+'r'||!_0x3f9d07['bKquZ'](_0x1a73a8,_0x264ee2))return![];if(_0x3f9d07[_0x242463(0x59d)](_0x3c1922['k'],_0x3f9d07[_0x242463(0x1b3)]))return _0x3f9d07[_0x242463(0x500)](_0x264ee2,0x1*0x832+0x1*-0x1ae3+0x12b1)||_0x264ee2===0x2200+-0x112c+0x49*-0x3b;var _0x37d7ca=_0x3145ae['fake'];if(typeof _0x37d7ca!==_0x3f9d07['kYsxN']||!_0x5260a1(_0x37d7ca))return!![];if(_0x3f9d07[_0x242463(0x200)](_0x2464f5[_0x242463(0x5c4)],0x57*-0x62+-0xb51+-0x2*-0x1650))return _0x2d22ac['abs'](_0x264ee2-_0x37d7ca)<=_0xac4727[_0x242463(0x4f6)](-0x1908+0x386*-0x4+0x2721,_0x3f9d07[_0x242463(0x356)](_0x3c341c[_0x242463(0x562)](_0x37d7ca),-0x5*0x4cf+0x1017+0x7f4+0.6));return _0x10d7ca[_0x242463(0x562)](_0x264ee2)<0x17832e58*-0x2+0x17*0x34b1e3c+0x1ee16f4c;}else _0x4106a6[_0x242463(0x50e)](_0x37f4bd,_0x1a8676);}catch(_0x433d31){}}if(!_0x2f768b){var _0x2d3f22=_0x535b3f['filte'+'r'](function(_0x54ad22){var _0x7d628a=_0x242463;return _0x448864[_0x7d628a(0x4d1)](_0x54ad22[_0x7d628a(0x319)],_0x399f44);})[-0x1*-0xb39+0x2*0x256+-0xfe5];if(_0x2d3f22&&_0x2d3f22['hook']){if(_0x4106a6['bqtHQ']!=='LVQqJ')try{if(_0x242463(0x51e)!==_0x242463(0x2a2))_0x2d3f22[_0x242463(0x441)][_0x242463(0x1b4)+'ed']=![];else{var _0x13e728=_0x2a5ed3[_0x242463(0x583)];if(_0x13e728&&_0x13e728['__sak'+'ura']===_0x1739cc&&_0x13e728[_0x242463(0x5f8)]===_0x3f9d07['xXQSL'])_0x3f9d07[_0x242463(0x551)](_0x23901e,_0x13e728[_0x242463(0x1c9)],_0x13e728[_0x242463(0x595)]);}}catch(_0x322788){}else{if(!_0x1fd004||!_0x358f6c)return null;var _0x8e4947=new _0x58cc4a(_0x4fba41)[_0x242463(0x133)+'assNa'+'me']();return _0x448864[_0x242463(0x208)](_0x8e4947,_0x442a89)?null:_0x8e4947;}}}}catch(_0x5e1ed2){}};}function _0x5b8329(){var _0x63b799=_0x2deb15,_0x4e79ef={'DZtXm':function(_0x529ece,_0x291ca5){return _0x529ece+_0x291ca5;},'wCXmp':function(_0x21f053,_0x4c230d){return _0x21f053+_0x4c230d;},'syxaW':function(_0x36a934,_0x59f478){return _0x36a934+_0x59f478;},'wWaKN':_0x63b799(0x5c7)+'ame\x20w'+_0x63b799(0x469)+_0x63b799(0x2d7)+_0x63b799(0x24e)+'lding'+_0x63b799(0x177)+'s\x20orp'+_0x63b799(0x590)+'.\x20Dis'+_0x63b799(0x39c)+_0x63b799(0x50b)+'\x20othe'+'r\x20','tWVrM':_0x4106a6[_0x63b799(0x34e)]};if(_0x63b799(0x49f)!==_0x4106a6[_0x63b799(0x12f)]){if(_0x535b3f[_0x63b799(0x4f0)+'h'])return!![];if(!window[_0x63b799(0x4ee)+_0x63b799(0x34a)+'dkit']||!window[_0x63b799(0x4ee)+_0x63b799(0x34a)+_0x63b799(0x135)]['Runti'+'me'])return![];var _0x34e9e9=window[_0x63b799(0x4ee)+_0x63b799(0x34a)+_0x63b799(0x135)][_0x63b799(0x5e1)+'me'];if(!_0x34e9e9[_0x63b799(0x5e3)+'ns']||!_0x34e9e9['plugi'+'ns']['lengt'+'h'])return![];_0x274b73=window[_0x63b799(0x4ee)+_0x63b799(0x34a)+_0x63b799(0x135)][_0x63b799(0x174)+'Wrapp'+'er'],_0x9415a3=_0x9415a3||_0x34e9e9[_0x63b799(0x5e3)+'ns'][_0x4106a6[_0x63b799(0x4fd)](_0x34e9e9['plugi'+'ns'][_0x63b799(0x4f0)+'h'],0x2666+-0xf95+0x1*-0x16d0)];if(!_0x9415a3||typeof _0x9415a3[_0x63b799(0x5d6)+'refix']!==_0x63b799(0x1fc)+'ion')return![];for(var _0x2371e1=-0x13ab+-0x1c02*-0x1+-0x857;_0x2371e1<_0xa4a3ad['lengt'+'h'];_0x2371e1++){var _0x429d35=_0xa4a3ad[_0x2371e1];try{if(_0x63b799(0x507)==='UeHdN'){var _0x161631=_0x9415a3['hookP'+'refix']({'typeName':_0x429d35['type'],'methodName':_0x63b799(0x3ed)+'e','params':['i32','i32'],'returnType':undefined},_0x4106a6[_0x63b799(0x20d)](_0x1e742,_0x429d35['type'],_0x429d35[_0x63b799(0x406)],_0x429d35[_0x63b799(0x344)]));_0x535b3f[_0x63b799(0x1a2)]({'type':_0x429d35[_0x63b799(0x319)],'hook':_0x161631,'keep':_0x429d35[_0x63b799(0x406)]});}else{if(_0x5574a1)_0x74ac4d[_0x63b799(0x1f8)+_0x63b799(0x209)+'t']=_0x4106a6['yGHMn']((_0x39129d(_0x3d3087['value'])||0xf71*0x2+-0x204e+-0x5*-0x49)[_0x63b799(0x378)+'ed'](-0x4*-0x215+-0x5*0x3d9+0xaea),'x');_0x55fe7c();}}catch(_0x5b3189){_0x63b799(0x1e6)!=='sFCgJ'?_0x2c7a95['warni'+'ngs']['push'](_0x4e79ef[_0x63b799(0x16c)](_0x4e79ef[_0x63b799(0x121)](_0x4e79ef[_0x63b799(0x37d)](_0x63b799(0x25e)+_0x63b799(0x592)+'MK\x20CO'+'PY\x20TO'+'OK\x20OV'+'ER\x20wi'+'ndow.'+_0x63b799(0x4ee)+_0x63b799(0x34a)+_0x63b799(0x489)+_0x63b799(0x4c6)+_0x63b799(0x5e1)+_0x63b799(0x3e4)+'\x20arme'+_0x63b799(0x367)+'\x20',_0x63b799(0x4b9)+_0x63b799(0xf0)+_0x63b799(0x5ec)+_0x63b799(0x4d6)+'ent\x20i'+'nstan'+'ce,\x20s'+_0x63b799(0x28f)+_0x63b799(0x10e)+_0x63b799(0x4b4)+_0x63b799(0x2bd)+_0x63b799(0x39a)+_0x63b799(0x18f)+_0x63b799(0x131)+'r\x20'),_0x4e79ef[_0x63b799(0x565)]),_0x4e79ef[_0x63b799(0x2d6)])):_0x2390c6['push'](_0x4106a6[_0x63b799(0x20e)](_0x4106a6[_0x63b799(0x205)](_0x429d35['type'],':\x20'),String(_0x5b3189&&_0x5b3189[_0x63b799(0x546)+'ge']||_0x5b3189)[_0x63b799(0x218)](-0x23af+0x1*0x75d+0x1c52,-0xf1e+-0x14e9+0x1*0x24a7)));}}return _0x535b3f[_0x63b799(0x4f0)+'h']>0xd*0x151+-0x1*-0x160f+-0x272c;}else{if(_0x579180&&_0x2f54ac[_0x63b799(0x264)+'r']&&_0x502c6b[_0x63b799(0x264)+'r']['byteL'+_0x63b799(0x421)])return _0x3c980d[_0x63b799(0x45e)+'e']=_0x16aa0b[_0x63b799(0x45e)+'e']||_0x4106a6[_0x63b799(0x13e)],new _0x30eeaa(_0x3985a2['buffe'+'r']);}}function _0x50aaf3(){var _0x154da1=_0x2deb15,_0x3628b4=0x1a99+0x3*0x7b5+-0x158*0x25;for(var _0x890349=0x7*0x1b7+0x2256*-0x1+0x1655;_0x890349<_0x535b3f['lengt'+'h'];_0x890349++){if(_0x4106a6[_0x154da1(0x5d7)]!==_0x154da1(0x4a6)){if(_0x535b3f[_0x890349][_0x154da1(0x441)]&&_0x4106a6['ZjDcH'](_0x535b3f[_0x890349]['hook']['table'+'Index'],undefined))_0x3628b4++;}else{var _0x37766e=_0x4106a6['ZTtVC'](_0x40a4aa);if(!_0x37766e)return _0x531c3d;if(_0x37766e[_0x154da1(0x112)+'et'][_0x154da1(0x107)])return _0x37766e[_0x154da1(0x107)];try{return _0x4106a6[_0x154da1(0x50e)](_0x1cf35e,_0x37766e);}catch(_0x1fbb84){return _0x37766e['datas'+'et']['api']='1',_0x37766e['api']=_0x37675b,_0x383677['warn'](_0x4106a6[_0x154da1(0x35e)],_0x154da1(0x544)+':'+_0xba5121,_0x1fbb84),_0x2236cd;}}}return _0x3628b4;}function _0x23b2df(){var _0x38a1f7=_0x2deb15,_0xc31077={'qcyCh':function(_0x33e3f7,_0x51713e){return _0x33e3f7-_0x51713e;}},_0x597230=0x223a+-0x62a+-0x1c10;for(var _0xf2eca3=0x1*-0x234e+0xe1f+0x152f;_0x4106a6[_0x38a1f7(0x270)](_0xf2eca3,_0x535b3f[_0x38a1f7(0x4f0)+'h']);_0xf2eca3++){if(_0x38a1f7(0x2b4)==='XSUER')_0x303631=_0x3ec181,_0x56b7d1=_0xc31077[_0x38a1f7(0x494)](_0x3c73e2[_0x38a1f7(0x55a)](),_0x4720f1);else{if(_0x535b3f[_0xf2eca3][_0x38a1f7(0x441)]&&_0x535b3f[_0xf2eca3]['hook']['appli'+'ed'])_0x597230++;}}return _0x597230;}var _0x279c20=null,_0x1e1c23=[],_0x5b21b5={},_0x26dff1=null;function _0x10febf(_0x40da13){var _0x508d65=_0x2deb15,_0x41fd18={'SZAra':function(_0x3cc0c5,_0x3bee40){return _0x3cc0c5<_0x3bee40;},'STlhd':_0x508d65(0x508)+'t','MANEZ':function(_0x396de2,_0x5518d7){return _0x4106a6['OEYMo'](_0x396de2,_0x5518d7);},'panrE':'windo'+'w.'};try{if(!_0x274b73||!_0x40da13)return null;var _0x49696f=new _0x274b73(_0x40da13)[_0x508d65(0x133)+_0x508d65(0x24f)+'me']();return _0x49696f===undefined?null:_0x49696f;}catch(_0x476fc5){if('qeTtm'===_0x508d65(0x57b))return null;else{var _0x4bc2d9=_0x3f00b5[_0x508d65(0x3a9)](_0x23ac07);for(var _0x320401=0x1fc9*0x1+0x1*-0x421+-0x938*0x3;_0x320401<_0x4bc2d9[_0x508d65(0x4f0)+'h']&&_0x41fd18[_0x508d65(0x210)](_0x320401,-0x2685+0x57f+0x3*0xbca);_0x320401++){var _0x18859d=_0xde897b[_0x4bc2d9[_0x320401]];if(_0x18859d&&typeof _0x18859d===_0x41fd18[_0x508d65(0x4af)]&&_0x18859d[_0x508d65(0x42e)+'e']&&_0x18859d['Modul'+'e'][_0x508d65(0x141)+'8']&&_0x18859d[_0x508d65(0x42e)+'e'][_0x508d65(0x141)+'8']['buffe'+'r'])return _0x37d95d['sourc'+'e']=_0x41fd18['MANEZ'](_0x41fd18[_0x508d65(0x36e)](_0x41fd18['panrE'],_0x4bc2d9[_0x320401]),_0x508d65(0x4ba)+'le'),_0x18859d;}}}}function _0x28d503(_0x11d4a3,_0x1ecdc1,_0x55e9f8){var _0x459ff7=_0x2deb15;if(_0x459ff7(0x2aa)!=='fYcVU'){var _0x5007e0=('1|0|2'+'|6|5|'+_0x459ff7(0x17d))['split']('|'),_0x467034=-0x1874+0x218d+0x1*-0x919;while(!![]){switch(_0x5007e0[_0x467034++]){case'0':if(!_0x29f0d8)return null;continue;case'1':var _0x29f0d8=_0x3c2ce4();continue;case'2':if(_0x4106a6['tYtpt'](_0x1ecdc1,0x12db+-0x6b6*0x1+-0xc25*0x1)||_0x4106a6['PSayy'](_0x1ecdc1,_0x55e9f8*(-0x677*0x1+-0x198e+-0x3b*-0x8b))>_0x29f0d8['byteL'+_0x459ff7(0x421)])return null;continue;case'3':_0x2d613d['ok']+=_0x55e9f8;continue;case'4':return _0x497b3a;case'5':for(var _0x1d385a=0x1*-0xebf+-0x15*0x9d+0x20*0xdd;_0x1d385a<_0x55e9f8;_0x1d385a++)_0x497b3a[_0x459ff7(0x1a2)](_0x29f0d8[_0x459ff7(0x382)+'oat32'](_0x4106a6[_0x459ff7(0x276)](_0x4106a6[_0x459ff7(0x498)](_0x11d4a3,_0x1ecdc1),_0x1d385a*(-0x1*0x15f9+0x149c+0x161)),!![]));continue;case'6':var _0x497b3a=[];continue;}break;}}else _0x390343[_0x459ff7(0x3ca)+_0x459ff7(0x30a)+_0x459ff7(0x55e)](),_0x4fcfdb(_0x4106a6['Kiolp']);}function _0x259e01(){var _0x1a038e=_0x2deb15,_0x16904d={'uOvmx':function(_0x22cd6d){return _0x22cd6d();},'MagLy':function(_0x304962,_0x1b8cd3){return _0x4106a6['orrjh'](_0x304962,_0x1b8cd3);}},_0x101b9b={'enemies':[],'camera':null,'playerList':null,'wasmTypes':null},_0x254546=Object[_0x1a038e(0x3a9)](_0x4f672a);for(var _0x30e1dd=-0xe*-0x1af+-0x640*-0x4+-0x3092*0x1;_0x30e1dd<_0x254546[_0x1a038e(0x4f0)+'h']&&_0x30e1dd<-0x107a+-0x26a7+0x43*0xd3;_0x30e1dd++){var _0x387a70=_0x4f672a[_0x254546[_0x30e1dd]],_0x558639=_0x11590c['Enemy'+'Bot']||[],_0x3e619a={'ptr':'0x'+_0x387a70[_0x1a038e(0x375)]['toStr'+_0x1a038e(0x38c)](0x1209+0x1*0x18d+-0x1386),'hits':_0x387a70[_0x1a038e(0x4cb)],'pos':null};for(var _0x17d1d4=0x42*-0x6a+0x3e5*0x3+0x1bd*0x9;_0x17d1d4<_0x558639['lengt'+'h'];_0x17d1d4++){if(_0x4106a6[_0x1a038e(0x16d)]!=='nSnZw')try{return _0x16904d[_0x1a038e(0x26b)](_0x5531d2);}catch(_0x51d4f2){return{'version':_0x301a8b,'when':new _0x1c4388()['toISO'+'Strin'+'g'](),'elapsedMs':_0x2f1937[_0x1a038e(0x55a)]()-_0x6ad22,'host':_0x521552,'uwmk':!!(_0x2f9bef[_0x1a038e(0x4ee)+'WebMo'+_0x1a038e(0x135)]&&_0x4a239e[_0x1a038e(0x4ee)+_0x1a038e(0x34a)+_0x1a038e(0x135)]['Runti'+'me']),'il2CppContext':![],'arm':_0x218394,'hooksTotal':_0x30c7e1['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x54bc57(_0x51d4f2&&_0x51d4f2[_0x1a038e(0x546)+'ge']||_0x51d4f2)};}else{if(_0x4106a6['MPzSH'](_0x558639[_0x17d1d4][-0x236e+-0x1142+0x2f*0x11f],'v3'))continue;_0x3e619a[_0x1a038e(0x568)]=_0x4106a6[_0x1a038e(0x20d)](_0x28d503,_0x387a70[_0x1a038e(0x375)],_0x558639[_0x17d1d4][0x2104+0xb30*0x1+-0x114*0x29],-0x232d*-0x1+0x16aa+-0x39d4),_0x3e619a[_0x1a038e(0x388)]=_0x4106a6[_0x1a038e(0x470)]('0x',_0x558639[_0x17d1d4][-0x20d8*-0x1+0x4*-0xf6+-0x1d*0x100]['toStr'+'ing'](0x4*0x455+-0x22e4+0x60*0x2f));break;}}_0x3e619a['scala'+'rs']=_0x558639['filte'+'r'](function(_0x161ed1){var _0x3d662e=_0x1a038e;return _0x161ed1[-0x104e*-0x1+-0x2b*-0xc9+-0x90*0x59]===_0x3d662e(0x4a9);})[_0x1a038e(0x484)](function(_0x4f5abb){var _0x323aa6=_0x1a038e;if(_0x323aa6(0x372)!==_0x4106a6['HCwyZ'])_0x46c390[_0x323aa6(0x329)+'ritte'+'n']=_0x430a60,_0x311452++;else return{'o':_0x4f5abb[-0xe0b*-0x1+-0x1dc5*-0x1+-0x2bd0],'v':_0x2504e7(_0x387a70['ptr']+_0x4f5abb[0x3d7*-0x7+0x8af+0x1232],_0x4106a6[_0x323aa6(0x1e9)])};})['filte'+'r'](function(_0x3680ed){var _0x1d8d58=_0x1a038e;return _0x3680ed['v']!==undefined&&_0x16904d[_0x1d8d58(0x53d)](isFinite,_0x3680ed['v']);})[_0x1a038e(0x218)](-0x7*-0x33b+-0x269e*-0x1+-0x1*0x3d3b,0x1*-0x2547+-0x11a9*0x1+-0xafe*-0x5),_0x101b9b[_0x1a038e(0x323)+'es'][_0x1a038e(0x1a2)](_0x3e619a);}_0x101b9b[_0x1a038e(0x342)+_0x1a038e(0x46a)]=_0x254546[_0x1a038e(0x4f0)+'h'];var _0x3cf8df=_0x28ce62['GG_Ga'+'meMan'+_0x1a038e(0x21e)];if(_0x3cf8df&&_0x3cf8df[_0x1a038e(0x375)]){var _0x442085=_0x2504e7(_0x4106a6['fvBxs'](_0x3cf8df['ptr'],-0x22f*0xf+0x22fa*-0x1+0x1*0x43cf),_0x1a038e(0x503)),_0x23b3e5=_0x2504e7(_0x3cf8df['ptr']+(0x1*-0x1db4+0xa*-0xa+0x2*0xf3a),'u32');_0x101b9b['camer'+'a']=_0x442085?_0x4106a6[_0x1a038e(0x199)]('0x',(_0x442085>>>-0x3*0x9d1+-0x7e2+-0x1f7*-0x13)['toStr'+'ing'](0xa*-0x133+-0x5c*0x1+0xc6a)):null,_0x101b9b['playe'+'rList']=_0x23b3e5?'0x'+(_0x23b3e5>>>-0x2*0x95d+-0x24a*-0x3+0xbdc)[_0x1a038e(0x283)+'ing'](0x1*-0x1a6f+-0x2*0xa4d+0x2f19*0x1):null;}else _0x101b9b[_0x1a038e(0x410)]='Enemy'+'Bot\x20a'+_0x1a038e(0x19c)+_0x1a038e(0x29b)+'Manag'+'er\x20Up'+'date('+')\x20nev'+'er\x20fi'+'red\x20-'+_0x1a038e(0x187)+'nemie'+'s\x20and'+'\x20no\x20'+('GG_Ga'+'meMan'+'ager,'+_0x1a038e(0x21b)+'h\x20is\x20'+_0x1a038e(0x275)+_0x1a038e(0x1bf)+'by\x20lo'+_0x1a038e(0x265)+_0x1a038e(0x488)+_0x1a038e(0x534)+'he\x20re'+'con\x20I'+_0x1a038e(0x5a2)+'\x20a\x20li'+_0x1a038e(0x150)+_0x1a038e(0x4b2));try{var _0x2fbd85=window[_0x1a038e(0x4ee)+'WebMo'+_0x1a038e(0x135)]&&window['Unity'+'WebMo'+_0x1a038e(0x135)][_0x1a038e(0x5e1)+'me'],_0x359ec4=_0x2fbd85&&_0x2fbd85[_0x1a038e(0x20a)+'nalWa'+'smTyp'+'es']||[],_0x59891c={};for(var _0x10dfef=-0x35f+0xf*-0x24d+0x25e2;_0x10dfef<_0x359ec4[_0x1a038e(0x4f0)+'h']&&_0x10dfef<0x17e+-0x17*0x11c+0x91*0x46;_0x10dfef++){var _0x55d8c3=_0x359ec4[_0x10dfef][_0x1a038e(0x435)+'s'][_0x1a038e(0x110)](',')+_0x1a038e(0x360)+(_0x359ec4[_0x10dfef][_0x1a038e(0x4d8)+_0x1a038e(0x170)]||_0x4106a6[_0x1a038e(0x1d6)]);_0x59891c[_0x55d8c3]=(_0x59891c[_0x55d8c3]||0x2114+-0x12c1+-0xe53*0x1)+(0x1*0x149b+0x2197+-0x3631*0x1);}_0x101b9b[_0x1a038e(0x474)+_0x1a038e(0x476)]=_0x59891c;}catch(_0x192364){}return _0x101b9b;}function _0x1902a2(){var _0xaa408d=_0x2deb15;if(_0x4106a6[_0xaa408d(0x2f7)]===_0x4106a6[_0xaa408d(0x5a4)])_0x39e0cf[_0xaa408d(0x1f8)+_0xaa408d(0x209)+'t']=_0x2121fe['diff']&&_0x2cd6ec['diff']['lengt'+'h']?_0x4106a6[_0xaa408d(0x252)](_0xaa408d(0x575)+_0xaa408d(0x3c1)+_0xaa408d(0x1a8)+'t:\x20',_0x2aa3d3['diff']['join'](',\x20')):_0x4106a6['vzUUy'];else{var _0x280951={};_0x2d613d['ok']=-0x1aee+0xd*-0x1c9+0x2f3*0x11,_0x2d613d[_0xaa408d(0x5c3)+'d']=0xc80+0x163c+0x39*-0x9c,_0x2d613d[_0xaa408d(0x5a3)+_0xaa408d(0x13d)]=null;var _0x2e356e=Object['keys'](_0x11590c);for(var _0xa38250=-0x25f4+-0x13*-0x166+0xb62;_0xa38250<_0x2e356e[_0xaa408d(0x4f0)+'h'];_0xa38250++){if(_0xaa408d(0x1f4)===_0x4106a6[_0xaa408d(0x379)]){_0x5d0e66['push'](_0xaa408d(0x40f)+_0xaa408d(0x27a));for(var _0x4214ac=0x185+-0x58*0x19+0x713;_0x4214ac<_0xe116d7[_0xaa408d(0x40f)+_0xaa408d(0x27a)][_0xaa408d(0x4f0)+'h'];_0x4214ac++)_0x45f202['push'](_0x4106a6[_0xaa408d(0x454)]('\x20\x20!\x20',_0x255d20['warni'+_0xaa408d(0x27a)][_0x4214ac]));}else{var _0x2dee68=_0x2e356e[_0xa38250],_0x501ded=_0x28ce62[_0x2dee68];if(!_0x501ded||!_0x501ded[_0xaa408d(0x375)])continue;var _0x4aa354=_0x11590c[_0x2dee68]||[],_0x66232=[];for(var _0x452d13=-0x23db+-0x2624*0x1+0x49ff;_0x452d13<_0x4aa354['lengt'+'h'];_0x452d13++){var _0x3a6902=_0x4aa354[_0x452d13][-0x225c+-0x14f6+0x3752],_0x45067b=_0x4aa354[_0x452d13][0x8b5*-0x2+0x12ef+-0x184];if(_0x45067b[_0xaa408d(0x5a7)+'Of'](_0xaa408d(0x255))===-0x24fd+-0x133+0x2630){var _0x37e265=_0x5e1952(_0x501ded[_0xaa408d(0x375)],_0x3a6902,_0x45067b);if(!_0x37e265)continue;_0x37e265['o']=_0x3a6902,_0x37e265['k']=_0x45067b,_0x66232[_0xaa408d(0x1a2)](_0x37e265);}else{var _0x52a1ae=_0x4106a6[_0xaa408d(0x260)](_0x2504e7,_0x4106a6['xvsAI'](_0x501ded['ptr'],_0x3a6902),_0x45067b);if(_0x4106a6[_0xaa408d(0x10a)](_0x52a1ae,undefined))continue;var _0x220eae={'o':_0x3a6902,'k':_0x45067b,'v':_0x52a1ae};if(_0x45067b==='v2'||_0x4106a6['xXjQq'](_0x45067b,'v3')||_0x4106a6['gXoBi'](_0x45067b,'v4')){var _0x3ebb00=_0x45067b==='v2'?0x79b+0x189*-0x12+0x1409:_0x45067b==='v3'?0x3*-0xc20+0x1*0x5c5+0xf4f*0x2:-0x1*0x1c09+-0x23fb*0x1+-0xaac*-0x6,_0x4686c7=_0x28d503(_0x501ded['ptr'],_0x3a6902,_0x3ebb00);_0x4686c7&&(_0x220eae['xyz']=_0x4686c7,_0x220eae['v']=_0x4686c7[0xe12*0x1+-0xa*-0x31c+0x1*-0x2d2a]);}_0x66232[_0xaa408d(0x1a2)](_0x220eae);}}if(_0x66232['lengt'+'h']){var _0x4d984a=_0x4106a6['orrjh'](_0x1f5582,_0x66232);_0x280951[_0x2dee68]=_0x4d984a[_0xaa408d(0x57f)],_0x5b21b5[_0x2dee68]={'key':_0x4d984a[_0xaa408d(0x3d9)],'sane':_0x4d984a[_0xaa408d(0x230)],'checked':_0x4d984a[_0xaa408d(0x2a4)+'ed'],'keyConsistent':_0x4d984a['keyCo'+_0xaa408d(0x2e0)+'ent'],'keySource':_0x4d984a[_0xaa408d(0x295)+_0xaa408d(0xf1)]};}}}return _0x280951;}}function _0x1f5582(_0x12ecca){var _0x1a8546=_0x2deb15;if(_0x1a8546(0x563)!==_0x4106a6[_0x1a8546(0x3cc)])return _0x1184bf['faile'+'d']++,_0x2efe39[_0x1a8546(0x5a3)+_0x1a8546(0x13d)]=_0x3af99f[_0x1a8546(0x5a3)+_0x1a8546(0x13d)]||_0x56507a(_0x5224fd&&_0x1f0998[_0x1a8546(0x546)+'ge']||_0x17ee18)['slice'](0x1*-0xd15+-0xc70+-0x2f*-0x8b,-0x4*-0x450+-0x5*-0x62d+-0x2fa9),_0x276304;else{var _0x8308ed=-0x1*0x884+0xb*0x43+0x25*0x27,_0x5d4e07=-0x17*0x22+-0x1333+0x1641,_0x3a5af4=null;for(var _0xda91a9=0x154c+-0x258e+0x1042*0x1;_0xda91a9<_0x12ecca['lengt'+'h'];_0xda91a9++){var _0x3530ea=_0x12ecca[_0xda91a9];if(_0x3530ea['k']['index'+'Of']('obf')!==-0x1*-0x3dc+-0x545*0x3+-0x1*-0xbf3)continue;_0x3530ea['v']=_0x493092(_0x3530ea['k'],_0x3530ea['hidde'+'n'],_0x3530ea['keyAt'+'Offse'+'t0']),_0x3530ea['keyUs'+'ed']=_0x3530ea[_0x1a8546(0x1ab)+'Offse'+'t0'],_0x3530ea[_0x1a8546(0x37a)]=_0x4106a6[_0x1a8546(0x1e2)](_0x4106a6[_0x1a8546(0x127)](_0x1a8546(0x547)+_0x3530ea[_0x1a8546(0x41f)+'n']+(_0x1a8546(0x56b)+'='),_0x3530ea[_0x1a8546(0x3ac)])+(_0x3530ea['act']?_0x1a8546(0x1d3)+'VE':'')+_0x1a8546(0x119),_0x3530ea[_0x1a8546(0x1ab)+_0x1a8546(0x461)+'t0'])+_0x1a8546(0x15b)+_0x3530ea[_0x1a8546(0x579)];if(_0x4106a6[_0x1a8546(0x1bc)](_0x3a5af4,null))_0x3a5af4=_0x3530ea[_0x1a8546(0x1ab)+_0x1a8546(0x461)+'t0'];_0x5d4e07++,_0x44c956(_0x3530ea)?(_0x8308ed++,_0x3530ea['sane']=!![]):_0x3530ea['sane']=![],delete _0x3530ea['alt'];}return{'rows':_0x12ecca,'key':_0x3a5af4,'sane':_0x8308ed,'checked':_0x5d4e07,'keyConsistent':_0x4106a6[_0x1a8546(0x346)](_0x220938,_0x12ecca),'keySource':_0x4106a6[_0x1a8546(0x285)]};}}function _0x220938(_0x564cb){var _0x95fa6a=_0x2deb15,_0x1f6bd9={};for(var _0x3b0a02=-0x2080+-0xf99+0x3019;_0x3b0a02<_0x564cb[_0x95fa6a(0x4f0)+'h'];_0x3b0a02++){var _0x3db6c5=_0x564cb[_0x3b0a02];if(_0x4106a6['hZZkj'](_0x3db6c5['k']['index'+'Of'](_0x4106a6[_0x95fa6a(0x2a0)]),-0x1*-0x18f7+-0x442+-0x9*0x24d))continue;if(_0x4106a6['VqVZX'](_0x1f6bd9[_0x3db6c5['k']],undefined))_0x1f6bd9[_0x3db6c5['k']]=_0x3db6c5[_0x95fa6a(0x548)+'ed'];else{if(_0x1f6bd9[_0x3db6c5['k']]!==_0x3db6c5['keyUs'+'ed'])return![];}}return!![];}function _0x44c956(_0x4e89de){var _0x1bc9aa=_0x2deb15,_0x46243d=('0|1|6'+_0x1bc9aa(0x5b3)+_0x1bc9aa(0x292))[_0x1bc9aa(0x15f)]('|'),_0x31caf6=-0x1661*-0x1+-0x2*0xcc3+-0x7*-0x73;while(!![]){switch(_0x46243d[_0x31caf6++]){case'0':var _0x489be0=_0x4e89de['v'];continue;case'1':if(typeof _0x489be0!==_0x1bc9aa(0xf9)+'r'||!_0x4106a6[_0x1bc9aa(0x346)](isFinite,_0x489be0))return![];continue;case'2':if(typeof _0x25c00a!==_0x4106a6[_0x1bc9aa(0x212)]||!isFinite(_0x25c00a))return!![];continue;case'3':return _0x4106a6['tYtpt'](Math[_0x1bc9aa(0x562)](_0x489be0),-0x148462a3+-0x481f3ba1+0x983e6844);case'4':var _0x25c00a=_0x4e89de[_0x1bc9aa(0x3ac)];continue;case'5':if(_0x4106a6['aoiSe'](_0x4e89de[_0x1bc9aa(0x5c4)],0x2f2+-0x187c+0x158b*0x1))return Math[_0x1bc9aa(0x562)](_0x489be0-_0x25c00a)<=Math[_0x1bc9aa(0x4f6)](-0xd14+0xf0d+0xc*-0x2a,Math[_0x1bc9aa(0x562)](_0x25c00a)*(0x854+0x7*-0x434+-0xc8*-0x1b+0.6));continue;case'6':if(_0x4106a6['WUEwy'](_0x4e89de['k'],_0x1bc9aa(0x59a)))return _0x4106a6[_0x1bc9aa(0x571)](_0x489be0,-0xb5*-0x2b+0x1b5*0x5+-0x26f0)||_0x4106a6['SbgST'](_0x489be0,0x138f+-0x7d1+0xbbd*-0x1);continue;}break;}}function _0x4d7569(){var _0x199d45=_0x2deb15,_0x1cfc5d={};try{if(_0x4106a6['PIEwg'](_0x199d45(0x433),_0x4106a6[_0x199d45(0x3cd)])){var _0xc66882=(_0x199d45(0x24c)+'|1|4|'+'5')['split']('|'),_0x52c81a=0x2f*-0x25+-0xa96+-0x5cb*-0x3;while(!![]){switch(_0xc66882[_0x52c81a++]){case'0':var _0x33d4d0=window[_0x199d45(0x4ee)+'WebMo'+_0x199d45(0x135)]&&window[_0x199d45(0x4ee)+'WebMo'+_0x199d45(0x135)]['Runti'+'me'];continue;case'1':_0x1cfc5d[_0x199d45(0x5f3)+_0x199d45(0x5a1)+'e']=_0x33d4d0&&_0x33d4d0['_game']?typeof _0x33d4d0[_0x199d45(0x48b)]:_0x199d45(0x216);continue;case'2':_0x1cfc5d['tag']=_0x33d4d0&&_0x33d4d0[_0x199d45(0x3d3)+'uraTa'+'g']||null;continue;case'3':_0x1cfc5d[_0x199d45(0x487)+_0x199d45(0x13a)]=!!(_0x4106a6['BtmVS'](_0x33d4d0,_0x1b734f)&&_0x33d4d0[_0x199d45(0x3d3)+'uraTa'+'g']===_0x1b734f);continue;case'4':_0x1cfc5d['plugi'+_0x199d45(0x22f)+'imeIs'+'Expor'+_0x199d45(0x29e)]=!!(_0x9415a3&&_0x9415a3[_0x199d45(0x1f5)+_0x199d45(0x21c)]&&_0x9415a3[_0x199d45(0x1f5)+_0x199d45(0x21c)]===_0x33d4d0);continue;case'5':_0x1cfc5d[_0x199d45(0x5e3)+'nRunt'+_0x199d45(0x2ab)+'me']=_0x9415a3&&_0x9415a3['_runt'+_0x199d45(0x21c)]&&_0x9415a3[_0x199d45(0x1f5)+_0x199d45(0x21c)][_0x199d45(0x48b)]?typeof _0x9415a3['_runt'+'ime'][_0x199d45(0x48b)]:'none';continue;}break;}}else _0x13610c[_0x199d45(0x1f8)+'onten'+'t']=_0x5ff87(_0x58563a[_0x199d45(0x4ea)][_0x199d45(0x36c)+'r'])['toFix'+'ed'](0x6*-0x677+0x211a+0x5b1*0x1)+'x';}catch(_0x53fe6d){_0x1cfc5d[_0x199d45(0x1c6)]=_0x4106a6['Necay'](String,_0x53fe6d&&_0x53fe6d['messa'+'ge']||_0x53fe6d);}return _0x1cfc5d;}function _0x14fd0c(){var _0x24cb73=_0x2deb15,_0x18f94a=['unity'+_0x24cb73(0x5eb)+_0x24cb73(0x10d),'unity'+_0x24cb73(0x2fa),_0x24cb73(0x4be),_0x4106a6[_0x24cb73(0x5c1)]],_0x570bc7={};for(var _0x4c099a=0x1da2+-0x1bd*0xc+-0x8c6;_0x4106a6['tYtpt'](_0x4c099a,_0x18f94a['lengt'+'h']);_0x4c099a++){var _0x5d0c0e=_0x18f94a[_0x4c099a],_0x5ef3b1=typeof window[_0x5d0c0e];_0x570bc7[_0x5d0c0e]=_0x4106a6[_0x24cb73(0x39e)](_0x5ef3b1,'undef'+'ined')?_0x4106a6[_0x24cb73(0x48f)]:_0x5ef3b1;}var _0x311bcf=_0x48a034();_0x570bc7[_0x24cb73(0x25b)+_0x24cb73(0x1a3)]=_0x2d613d['sourc'+'e'];try{_0x570bc7['hasMo'+_0x24cb73(0x49a)]=!!(_0x311bcf&&_0x311bcf['Modul'+'e']),_0x570bc7['heapU'+'8']=!!(_0x311bcf&&_0x311bcf[_0x24cb73(0x42e)+'e']&&_0x311bcf[_0x24cb73(0x42e)+'e'][_0x24cb73(0x141)+'8']),_0x570bc7['heapB'+'ytes']=_0x570bc7['heapU'+'8']?_0x311bcf[_0x24cb73(0x42e)+'e'][_0x24cb73(0x141)+'8'][_0x24cb73(0x4f0)+'h']:-0x47*0x11+0x61*-0x4+0x91*0xb;}catch(_0x2ffaf0){if('pGQbM'!=='pGQbM'){var _0x5c2117=('3|1|7'+_0x24cb73(0x280)+'0|8|5'+'|2')[_0x24cb73(0x15f)]('|'),_0x39525f=0x214+-0x7*0xa5+0x7*0x59;while(!![]){switch(_0x5c2117[_0x39525f++]){case'0':_0x2f33b5=_0x335c55||_0x42b77a[_0x24cb73(0x5e3)+'ns'][_0x4106a6[_0x24cb73(0x1c2)](_0x42b77a[_0x24cb73(0x5e3)+'ns'][_0x24cb73(0x4f0)+'h'],0x16e+0xe4*-0x24+0x1ea3)];continue;case'1':if(!_0x57d518[_0x24cb73(0x4ee)+_0x24cb73(0x34a)+_0x24cb73(0x135)]||!_0x40796a[_0x24cb73(0x4ee)+_0x24cb73(0x34a)+_0x24cb73(0x135)][_0x24cb73(0x5e1)+'me'])return![];continue;case'2':return _0x4106a6[_0x24cb73(0x2d9)](_0x533e51['lengt'+'h'],0xe*0x6d+0x1bd1+-0x21c7);case'3':if(_0x4aa8e1[_0x24cb73(0x4f0)+'h'])return!![];continue;case'4':if(!_0x42b77a['plugi'+'ns']||!_0x42b77a[_0x24cb73(0x5e3)+'ns'][_0x24cb73(0x4f0)+'h'])return![];continue;case'5':for(var _0x5034ea=-0x1c93+0x25e2+-0x94f;_0x5034ea<_0x68a50c['lengt'+'h'];_0x5034ea++){var _0x32783c=_0x307422[_0x5034ea];try{var _0x290cf3=_0x29657e['hookP'+_0x24cb73(0x35c)]({'typeName':_0x32783c[_0x24cb73(0x319)],'methodName':_0x24cb73(0x3ed)+'e','params':[_0x4106a6['ZuYLz'],'i32'],'returnType':_0xb1abc5},_0x4106a6['fBpZr'](_0x5d1225,_0x32783c[_0x24cb73(0x319)],_0x32783c['keep'],_0x32783c[_0x24cb73(0x344)]));_0x4a1d36['push']({'type':_0x32783c[_0x24cb73(0x319)],'hook':_0x290cf3,'keep':_0x32783c[_0x24cb73(0x406)]});}catch(_0x104bd8){_0x1826b2['push'](_0x4106a6[_0x24cb73(0x4ec)](_0x4106a6[_0x24cb73(0x576)](_0x32783c[_0x24cb73(0x319)],':\x20'),_0x34157c(_0x104bd8&&_0x104bd8['messa'+'ge']||_0x104bd8)[_0x24cb73(0x218)](-0x17*-0xb5+-0x1354+0x311*0x1,-0x1*0x2+0x2616+-0x2574)));}}continue;case'6':_0x59af18=_0x2a8cae[_0x24cb73(0x4ee)+_0x24cb73(0x34a)+_0x24cb73(0x135)][_0x24cb73(0x174)+_0x24cb73(0x22e)+'er'];continue;case'7':var _0x42b77a=_0x5e95be[_0x24cb73(0x4ee)+_0x24cb73(0x34a)+'dkit']['Runti'+'me'];continue;case'8':if(!_0x455fa5||_0x4106a6[_0x24cb73(0x425)](typeof _0x40b4f2[_0x24cb73(0x5d6)+_0x24cb73(0x35c)],_0x4106a6[_0x24cb73(0x4a7)]))return![];continue;}break;}}else _0x570bc7[_0x24cb73(0x45c)+_0x24cb73(0x49a)]=![],_0x570bc7[_0x24cb73(0x1d5)+'8']=![],_0x570bc7['heapB'+'ytes']=-0x5e4+-0x25ce+0x5e*0x77;}return _0x570bc7[_0x24cb73(0x3d6)+_0x24cb73(0x22e)+'er']=typeof _0x274b73,_0x570bc7;}function _0x30d73b(_0x373ca4){var _0x260f58=_0x2deb15,_0x47a539={'IiZaM':function(_0x1d8ac9,_0x382d31){return _0x4106a6['tYtpt'](_0x1d8ac9,_0x382d31);},'oZrNH':function(_0x2b09c6,_0x24d204){return _0x4106a6['xxYrQ'](_0x2b09c6,_0x24d204);},'GaPXo':_0x4106a6['nUOxO']},_0x20c158={};for(var _0x53ec5e in _0x373ca4){if(_0x4106a6[_0x260f58(0x444)]!==_0x4106a6['AvrCZ']){var _0x358b04=_0x25e0bb['Unity'+_0x260f58(0x34a)+'dkit']&&_0x5e8047[_0x260f58(0x4ee)+'WebMo'+'dkit'][_0x260f58(0x5e1)+'me'],_0x276f71=_0x358b04&&_0x358b04['inter'+_0x260f58(0x442)+_0x260f58(0x20b)+'es']||[],_0x19a9fb={};for(var _0x2331a6=0x1d1e+0x24*0x31+-0x2402;_0x2331a6<_0x276f71[_0x260f58(0x4f0)+'h']&&_0x47a539[_0x260f58(0x577)](_0x2331a6,0x24b5*0x1+-0xe9b+0x1*-0x67a);_0x2331a6++){var _0x4b5963=_0x47a539[_0x260f58(0x306)](_0x276f71[_0x2331a6][_0x260f58(0x435)+'s'][_0x260f58(0x110)](',')+'\x20->\x20',_0x276f71[_0x2331a6]['retur'+_0x260f58(0x170)]||_0x47a539[_0x260f58(0x179)]);_0x19a9fb[_0x4b5963]=_0x47a539['oZrNH'](_0x19a9fb[_0x4b5963]||0x5a*-0x13+-0x10e3+0x1791,-0x5af+0x45*0x1+-0x56b*-0x1);}_0x48513f[_0x260f58(0x474)+_0x260f58(0x476)]=_0x19a9fb;}else{var _0x882596=_0x373ca4[_0x53ec5e];for(var _0x5465d3=-0xd5*-0x29+0x1*0x308+-0x2525;_0x4106a6['NgYOU'](_0x5465d3,_0x882596[_0x260f58(0x4f0)+'h']);_0x5465d3++){_0x20c158[_0x4106a6['MqeGw'](_0x53ec5e,_0x260f58(0x2b1))+_0x882596[_0x5465d3]['o']['toStr'+_0x260f58(0x38c)](0x37e+-0x279+0xf5*-0x1)]=_0x882596[_0x5465d3]['v'];}}}return _0x20c158;}function _0x47426c(_0x3fbdf7,_0x47b9e9){var _0x1c744e=_0x2deb15,_0x259cbc={'fVnsl':function(_0x1630ed,_0x5a929d){return _0x1630ed===_0x5a929d;}};if(_0x4106a6[_0x1c744e(0x50f)](_0x3fbdf7,'speed')){if(_0x47b9e9&&typeof _0x47b9e9['on']===_0x1c744e(0x324)+'an')_0x1c3176['on']=_0x47b9e9['on'];if(_0x47b9e9&&typeof _0x47b9e9[_0x1c744e(0x36c)+'r']===_0x1c744e(0xf9)+'r'){if(_0x1c744e(0x5f5)==='FjBQo')return _0x259cbc['fVnsl'](_0xe791ff[_0x1c744e(0x319)],_0x24ee06);else _0x1c3176['facto'+'r']=Math[_0x1c744e(0x5a0)](-0x4f*0x65+0x1bb*0x7+-0x101*-0x13,Math['max'](-0x22ab+-0xb*-0x17e+0x1242,_0x47b9e9[_0x1c744e(0x36c)+'r']));}if(!_0x1c3176['on'])_0x1af936={};return;}if(_0x3fbdf7!==_0x1c744e(0x527)+_0x1c744e(0x1b2))return;var _0x1e2ab0=_0x4106a6[_0x1c744e(0x574)](_0x1902a2),_0x3294cd=_0x30d73b(_0x1e2ab0);if(!_0x279c20){_0x279c20=_0x3294cd,_0x1e1c23=[],_0x4b81f0(_0x1c744e(0x1fd)+'t',{'report':_0x4106a6[_0x1c744e(0x263)](_0x4c4f25)});return;}_0x1e1c23=[];for(var _0x251ee1 in _0x3294cd){var _0xe27b=_0x279c20[_0x251ee1],_0x305e02=_0x3294cd[_0x251ee1];if(_0xe27b!==_0x305e02)_0x1e1c23['push'](_0x4106a6[_0x1c744e(0x20e)](_0x4106a6['xxYrQ'](_0x4106a6[_0x1c744e(0x199)](_0x251ee1+':\x20',_0xe27b),'\x20->\x20'),_0x305e02));}_0x279c20=_0x3294cd,_0x4b81f0(_0x4106a6['EDTyo'],{'report':_0x4106a6[_0x1c744e(0x3f9)](_0x4c4f25)});}window['addEv'+'entLi'+_0x2deb15(0x1ad)+'r']('keydo'+'wn',function(_0x23d00f){var _0x4c1586=_0x2deb15,_0x3adf94={'HJSsY':function(_0x55eaf9,_0x331ca4){var _0x8f8048=_0x144c;return _0x4106a6[_0x8f8048(0x24d)](_0x55eaf9,_0x331ca4);}};if(_0x4106a6[_0x4c1586(0x266)]('jFcRY',_0x4c1586(0x250))){if(_0xa2dd8d&&_0x3adf94[_0x4c1586(0x3bb)](typeof _0x362b8f['on'],_0x4c1586(0x324)+'an'))_0x10ff95['on']=_0x480785['on'];_0x3c2292&&typeof _0xcb4f83[_0x4c1586(0x36c)+'r']===_0x4c1586(0xf9)+'r'&&(_0x4b7461[_0x4c1586(0x36c)+'r']=_0x2b402a[_0x4c1586(0x5a0)](0x1*-0x12b9+-0x142a+0x26e8,_0x54c84e[_0x4c1586(0x4f6)](0x17f5+-0x753+-0x9*0x1d9,_0x310d2c['facto'+'r'])));if(!_0xc94e81['on'])_0x3c91ab={};return;}else _0x23d00f&&_0x23d00f['code']==='F9'&&(_0x23d00f[_0x4c1586(0x3ca)+'ntDef'+'ault'](),_0x47426c(_0x4c1586(0x527)+'hot'));},!![]);function _0x4c4f25(){var _0x5b8f09=_0x2deb15,_0x153f1d={'gcsHg':function(_0xdbeae5,_0x55aba3){return _0xdbeae5>_0x55aba3;},'cseLZ':function(_0x35c898,_0x12fc48){return _0x35c898<_0x12fc48;},'VHizf':function(_0x5a33dd,_0x49a00){return _0x4106a6['sueWJ'](_0x5a33dd,_0x49a00);},'eAFfi':function(_0x388cca,_0x5c76f8){return _0x388cca*_0x5c76f8;},'gJCMZ':_0x5b8f09(0x5e1)+_0x5b8f09(0x445)+_0x5b8f09(0x411)+_0x5b8f09(0x3e6)+'\x20unav'+_0x5b8f09(0x2a6)+'le'};if(_0x4106a6[_0x5b8f09(0x2d0)]!=='xyCLf'){var _0x1eef04=window[_0x5b8f09(0x4ee)+_0x5b8f09(0x34a)+_0x5b8f09(0x135)]&&window[_0x5b8f09(0x4ee)+'WebMo'+'dkit'][_0x5b8f09(0x5e1)+'me']||null,_0x5c9c48=_0x1eef04&&_0x1eef04['il2Cp'+_0x5b8f09(0x5b6)+'ext'],_0x920a2e=_0x5c9c48&&_0x5c9c48[_0x5b8f09(0x28e)+_0x5b8f09(0x17f)],_0x305dea={},_0x2b8ecf=[];for(var _0x354b96 in _0x28ce62){_0x305dea[_0x354b96]=_0x4106a6[_0x5b8f09(0x1e2)]('0x',_0x28ce62[_0x354b96][_0x5b8f09(0x375)][_0x5b8f09(0x283)+_0x5b8f09(0x38c)](0x1*-0x2206+0x3e0+0x1e36));if(_0x28ce62[_0x354b96]['repla'+'ced'])_0x2b8ecf['push'](_0x354b96);}var _0x1732e4={};for(var _0x337dfa in _0x28ce62)_0x1732e4[_0x337dfa]=_0x4106a6[_0x5b8f09(0x5af)](_0x10febf,_0x28ce62[_0x337dfa][_0x5b8f09(0x375)]);var _0x445f0b={},_0x3b107f=null;try{_0x445f0b=_0x1902a2();}catch(_0x6423c){if(_0x4106a6['IiKiV']!==_0x4106a6[_0x5b8f09(0x352)]){var _0x422864=_0x31c074();if(!_0x422864)return null;if(_0x4747da<0x21e+0x11b0+0x1e*-0xa9||_0x153f1d['gcsHg'](_0x16ee49+_0xe642a0*(0x10*0x9d+-0xea2+0x1*0x4d6),_0x422864['byteL'+_0x5b8f09(0x421)]))return null;var _0x111e4=[];for(var _0x2bf927=-0xb2d*0x1+0x1cb+0x962;_0x153f1d[_0x5b8f09(0x559)](_0x2bf927,_0x1cf2e5);_0x2bf927++)_0x111e4[_0x5b8f09(0x1a2)](_0x422864[_0x5b8f09(0x382)+_0x5b8f09(0x465)](_0x153f1d['VHizf'](_0x153f1d['VHizf'](_0x217595,_0x129019),_0x153f1d[_0x5b8f09(0x3b0)](_0x2bf927,-0x475+-0xe1+0x55a*0x1)),!![]));return _0x3da04b['ok']+=_0x5c9111,_0x111e4;}else _0x3b107f=String(_0x6423c&&_0x6423c['messa'+'ge']||_0x6423c);}var _0x3652e5={'version':_0x3d7312,'when':new Date()[_0x5b8f09(0x16a)+_0x5b8f09(0x14b)+'g'](),'elapsedMs':_0x4106a6['fxZMP'](Date['now'](),_0x199830),'frame':location['href'][_0x5b8f09(0x218)](0x17*-0x11e+-0x3bc+-0x2*-0xeb7,0x10b5+0x129c+-0x22d9),'host':_0x39f627,'frameRole':_0x543bb5,'uwmk':!!_0x1eef04,'il2CppContext':!!_0x5c9c48,'typeCount':_0x920a2e?Object['keys'](_0x920a2e)['lengt'+'h']:null,'arm':_0x3a08b4,'assemblies':_0x55a5e1,'hooksTotal':_0x535b3f['lengt'+'h'],'hooksApplied':_0x4106a6[_0x5b8f09(0x31b)](_0x23b2df),'hooksResolved':_0x50aaf3(),'hooksRegisteredAtArm':_0x3a08b4[_0x5b8f09(0x11d)+_0x5b8f09(0x584)+'tered']||0x79*0x9+0x1bf5+0x1b2*-0x13,'hookErrors':_0x2390c6[_0x5b8f09(0x218)](-0xc77+-0x26*-0x53+0x25,0x4*0x7b+-0x248d+0x22a9),'instances':_0x305dea,'classNames':_0x1732e4,'instancesReplaced':_0x2b8ecf,'hookFireProof':_0x26dff1,'survey':_0x445f0b,'actkKeys':_0x5b21b5,'surveyRows':Object['keys'](_0x445f0b)['reduc'+'e'](function(_0x2068f3,_0xe73c7a){return _0x2068f3+_0x445f0b[_0xe73c7a]['lengt'+'h'];},-0xe82+0x1b5d+0x1*-0xcdb),'reads':{'ok':_0x2d613d['ok'],'failed':_0x2d613d['faile'+'d'],'lastError':_0x2d613d[_0x5b8f09(0x5a3)+_0x5b8f09(0x13d)],'source':_0x2d613d['sourc'+'e']},'identity':_0x4d7569(),'globals':_0x14fd0c(),'wasmMemory':{'captured':!!_0x2ff890,'atMs':_0x343056,'bytes':(function(){var _0x5f4817=_0x5b8f09;try{return _0x2ff890&&_0x2ff890[_0x5f4817(0x264)+'r']?_0x2ff890['buffe'+'r'][_0x5f4817(0x496)+_0x5f4817(0x421)]:0x18*-0x60+0x1d09*0x1+-0x1409;}catch(_0x4d3923){if(_0x4106a6['UCwRJ']===_0x4106a6['GWwLI']){var _0x2cca2f={'RCCAe':function(_0xc6f644,_0x463a1b){return _0xc6f644===_0x463a1b;},'PRnNz':_0x5f4817(0x1c9)},_0x2e1129=new _0x2d060e('sakur'+'a-sw');_0x2e1129[_0x5f4817(0x3cb)+'sage']=function(_0x45dbc7){var _0xee1a51=_0x5f4817,_0x40106d=_0x45dbc7['data'];if(_0x40106d&&_0x2cca2f[_0xee1a51(0x2e7)](_0x40106d['__sak'+_0xee1a51(0x1bb)],_0x474e30)&&_0x2cca2f['RCCAe'](_0x40106d['kind'],_0x2cca2f[_0xee1a51(0xff)]))_0xc833(_0x40106d[_0xee1a51(0x1c9)],_0x40106d[_0xee1a51(0x595)]);};}else return 0x1f9+-0x237f+0x2186;}}()),'exportKeys':_0x4757b8},'diff':_0x1e1c23[_0x5b8f09(0x218)](-0xc26+-0x5ab*0x6+0x2e28,-0x2*-0x1122+0x6dc*-0x2+-0x1464),'speed':{'on':_0x1c3176['on'],'factor':_0x1c3176[_0x5b8f09(0x36c)+'r'],'writes':_0x97bb61},'esp':_0x259e01(),'uwmkLog':_0x514949['slice'](-0x345+-0x9c5+0xd0a*0x1,-0x1*-0x1d5f+0x4*-0x717+0x1*-0xef),'warnings':[]};if(_0x3b107f)_0x3652e5['warni'+_0x5b8f09(0x27a)]['push'](_0x4106a6['lNCsx'](_0x5b8f09(0x2db)+_0x5b8f09(0x475)+_0x5b8f09(0x545),_0x3b107f));if(_0x3a08b4[_0x5b8f09(0x1c6)])_0x3652e5['warni'+'ngs'][_0x5b8f09(0x1a2)](_0x4106a6['UBZnp'](_0x4106a6['gTjiM'],_0x3a08b4[_0x5b8f09(0x1c6)]));_0x3652e5['surve'+'yRows']===0x1856+-0x1554+-0x302&&_0x4106a6[_0x5b8f09(0x2d9)](Object[_0x5b8f09(0x3a9)](_0x3652e5[_0x5b8f09(0x1c7)+_0x5b8f09(0x459)])['lengt'+'h'],-0x1f3e+-0xcc7+0xbf*0x3b)&&_0x3652e5['warni'+_0x5b8f09(0x27a)]['push']('captu'+'red\x20'+Object[_0x5b8f09(0x3a9)](_0x3652e5['insta'+_0x5b8f09(0x459)])[_0x5b8f09(0x4f0)+'h']+(_0x5b8f09(0x18f)+'ct(s)'+_0x5b8f09(0x52b)+'read\x20'+_0x5b8f09(0x163)+'lds.\x20')+(_0x2d613d[_0x5b8f09(0x5a3)+_0x5b8f09(0x13d)]?_0x4106a6[_0x5b8f09(0x288)]+_0x2d613d['lastE'+_0x5b8f09(0x13d)]:_0x4106a6[_0x5b8f09(0x4e1)]));if(_0x3652e5[_0x5b8f09(0x380)+_0x5b8f09(0x114)]&&_0x3652e5[_0x5b8f09(0x380)+'ity'][_0x5b8f09(0x487)+_0x5b8f09(0x13a)]===![]){if(_0x5b8f09(0x4ae)!==_0x5b8f09(0x4ae)){var _0x5e5ccf=-0x1481+0xffa*-0x2+0x3475;for(var _0x4d07dc=-0x5e3+-0x86c+0xe4f;_0x153f1d['cseLZ'](_0x4d07dc,_0xd91208[_0x5b8f09(0x4f0)+'h']);_0x4d07dc++){if(_0x5d3d0f[_0x4d07dc]['hook']&&_0x3c389e[_0x4d07dc][_0x5b8f09(0x441)]['appli'+'ed'])_0x5e5ccf++;}return _0x5e5ccf;}else _0x3652e5['warni'+'ngs'][_0x5b8f09(0x1a2)](_0x4106a6[_0x5b8f09(0x478)](_0x4106a6[_0x5b8f09(0x175)](_0x4106a6[_0x5b8f09(0x167)],_0x4106a6[_0x5b8f09(0x1a0)])+(_0x5b8f09(0x5c7)+_0x5b8f09(0x115)+'hile\x20'+_0x5b8f09(0x2d7)+'ne\x20ho'+_0x5b8f09(0x578)+_0x5b8f09(0x177)+'s\x20orp'+_0x5b8f09(0x590)+'.\x20Dis'+_0x5b8f09(0x39c)+'every'+_0x5b8f09(0x37b)+'r\x20'),'Sakur'+'a/UWM'+'K\x20scr'+_0x5b8f09(0x472)+_0x5b8f09(0x140)+_0x5b8f09(0x16b)+_0x5b8f09(0x405)+'and\x20h'+'ard-r'+'eload'+'.'));}_0x3652e5[_0x5b8f09(0x380)+_0x5b8f09(0x114)]&&_0x4106a6[_0x5b8f09(0x3b2)](_0x3652e5['ident'+_0x5b8f09(0x114)][_0x5b8f09(0x5e3)+_0x5b8f09(0x22f)+'imeIs'+'Expor'+_0x5b8f09(0x29e)],![])&&_0x3652e5['warni'+'ngs']['push']('plugi'+_0x5b8f09(0x125)+_0x5b8f09(0x1bd)+_0x5b8f09(0x189)+_0x5b8f09(0x296)+'ndow.'+'Unity'+_0x5b8f09(0x34a)+_0x5b8f09(0x489)+_0x5b8f09(0x5e1)+_0x5b8f09(0x27f)+_0x5b8f09(0x50a)+_0x5b8f09(0x3e6)+_0x5b8f09(0x462)+'built'+'\x20'+('again'+_0x5b8f09(0x17a)+_0x5b8f09(0x52c)+_0x5b8f09(0x4ac)+_0x5b8f09(0x5e1)+_0x5b8f09(0x41a)+'stanc'+_0x5b8f09(0x1fe)+'n\x20the'+_0x5b8f09(0x40d)+_0x5b8f09(0x2c2)+_0x5b8f09(0x24a)+'oses.'));if(_0x3652e5['esp']&&_0x3652e5[_0x5b8f09(0x25c)][_0x5b8f09(0x410)])_0x3652e5[_0x5b8f09(0x40f)+_0x5b8f09(0x27a)]['push'](_0x4106a6['CjAVJ']+_0x3652e5[_0x5b8f09(0x25c)][_0x5b8f09(0x410)]);if(_0x3652e5[_0x5b8f09(0x5dd)+'ls']&&!_0x3652e5['globa'+'ls'][_0x5b8f09(0x1d5)+'8']){var _0x1dc2f8='';if(_0x3652e5[_0x5b8f09(0x541)+_0x5b8f09(0x1d9)+_0x5b8f09(0x2c1)]){if(_0x5b8f09(0x524)!==_0x4106a6[_0x5b8f09(0x15d)])_0x1dc2f8=_0x4106a6['vWbEE'](_0x4106a6[_0x5b8f09(0x4cc)]('\x20A\x20ho'+_0x5b8f09(0x43f)+'red\x20a'+'t\x20',_0x3652e5['hookF'+_0x5b8f09(0x1d9)+'oof']['atMs']),_0x5b8f09(0x244)+_0x5b8f09(0x28c)+_0x5b8f09(0x526)+_0x5b8f09(0x4f1)+'=')+_0x3652e5[_0x5b8f09(0x541)+'irePr'+_0x5b8f09(0x2c1)][_0x5b8f09(0x337)+_0x5b8f09(0x123)+'nc']+_0x4106a6[_0x5b8f09(0x53e)]+_0x3652e5[_0x5b8f09(0x541)+'irePr'+'oof']['resol'+_0x5b8f09(0x4b6)+_0x5b8f09(0x166)+'re']+(_0x5b8f09(0x33e)+_0x5b8f09(0x18c))+(_0x3652e5[_0x5b8f09(0x541)+_0x5b8f09(0x1d9)+_0x5b8f09(0x2c1)]['gameS'+'ource'+_0x5b8f09(0x564)+'e']||_0x4106a6['eBMxY'])+(_0x5b8f09(0x10f)+_0x5b8f09(0x2bd)+_0x5b8f09(0x1e8)+_0x5b8f09(0x2d3)+_0x5b8f09(0x5d9)+_0x5b8f09(0x4e2)+_0x5b8f09(0x5d3)+'d\x20is\x20'+'not\x20r'+_0x5b8f09(0x4f7)+'ble\x20n'+_0x5b8f09(0x59b));else{_0x27a9b4[_0x5b8f09(0x1c6)]=_0x153f1d[_0x5b8f09(0x395)];return;}}_0x3652e5['warni'+_0x5b8f09(0x27a)]['push']('Unity'+_0x5b8f09(0x22d)+_0x5b8f09(0x3f2)+_0x5b8f09(0x3a7)+_0x5b8f09(0x499)+_0x5b8f09(0x313)+'t\x20(so'+_0x5b8f09(0x25d)+'\x20'+(_0x3652e5[_0x5b8f09(0x5dd)+'ls']['gameS'+_0x5b8f09(0x1a3)]||_0x4106a6[_0x5b8f09(0x23f)])+').\x20'+_0x4106a6[_0x5b8f09(0x566)]+_0x1dc2f8);}return(_0x3652e5['globa'+'ls']&&!_0x3652e5[_0x5b8f09(0x5dd)+'ls'][_0x5b8f09(0x3d6)+'Wrapp'+'er']||_0x3652e5[_0x5b8f09(0x5dd)+'ls'][_0x5b8f09(0x3d6)+_0x5b8f09(0x22e)+'er']==='undef'+_0x5b8f09(0x2dd))&&_0x3652e5[_0x5b8f09(0x40f)+_0x5b8f09(0x27a)]['push'](_0x5b8f09(0x3ea)+_0x5b8f09(0x2f3)+'tyWeb'+_0x5b8f09(0x3c9)+'t.Val'+'ueWra'+'pper\x20'+'is\x20mi'+_0x5b8f09(0x3ba)+_0x5b8f09(0x53b)+'pture'+'\x20is\x20r'+_0x5b8f09(0x4f8)+'g\x20bli'+_0x5b8f09(0x1be)),_0x3652e5[_0x5b8f09(0x11d)+_0x5b8f09(0x39d)]>0x11c0+0x1*-0x1723+0x563&&_0x3652e5['hooks'+'Appli'+'ed']===0x5*-0x69+-0x11*0x15d+0x193a&&_0x920a2e&&(_0x4106a6[_0x5b8f09(0xfb)](_0x3652e5[_0x5b8f09(0x11d)+'Resol'+'ved'],0x16ee+0x25ec+-0x3cda)?_0x3652e5['warni'+_0x5b8f09(0x27a)]['push'](_0x4106a6[_0x5b8f09(0x5d4)](_0x4106a6[_0x5b8f09(0x46c)](_0x4106a6['FMOOz'](_0x4106a6[_0x5b8f09(0x28b)](_0x4106a6[_0x5b8f09(0x428)]+_0x3652e5[_0x5b8f09(0x11d)+'Total']+('\x20hook'+_0x5b8f09(0x56d)+_0x5b8f09(0x4d7)+_0x5b8f09(0x130)+'N\x20by\x20'+_0x5b8f09(0x3bc)+_0x5b8f09(0x4c6)+_0x5b8f09(0x561)+'\x20pass'+'\x20'),_0x5b8f09(0x393)+'once\x20'+_0x5b8f09(0x523)+'g\x20Web'+_0x5b8f09(0x241)+_0x5b8f09(0x1cf)+_0x5b8f09(0x2de)+_0x5b8f09(0x159)+'\x20and\x20'+_0x5b8f09(0x527)+_0x5b8f09(0x2a1)+_0x5b8f09(0x5e3)+_0x5b8f09(0x341)+_0x5b8f09(0x259)+'ngth,'+'\x20'),_0x5b8f09(0x40a)+'oks\x20r'+_0x5b8f09(0x404)+'ered\x20'+_0x5b8f09(0x2bb)+'\x20it\x20a'+'re\x20ig'+'nored'+'\x20for\x20'+'the\x20l'+'ife\x20o'+'f\x20the'+'\x20page'+'.\x20'),'Regis'+'tered'+'\x20'),_0x3652e5[_0x5b8f09(0x11d)+'Regis'+'tered'+'AtArm'])+_0x4106a6[_0x5b8f09(0x58b)]):_0x3652e5[_0x5b8f09(0x40f)+_0x5b8f09(0x27a)]['push'](_0x4106a6[_0x5b8f09(0x134)](_0x4106a6['oJlGg'](_0x4106a6[_0x5b8f09(0x467)](_0x4106a6[_0x5b8f09(0x402)](_0x4106a6[_0x5b8f09(0x485)],_0x3652e5['hooks'+'Resol'+'ved']),'\x20of\x20'),_0x3652e5['hooks'+_0x5b8f09(0x39d)]),'\x20hook'+_0x5b8f09(0x3f4)+_0x5b8f09(0x1f7)+_0x5b8f09(0x39c)+_0x5b8f09(0x5a7)+'\x20but\x20'+_0x5b8f09(0x394)+_0x5b8f09(0x2e5)+'ne.\x20T'+_0x5b8f09(0x418)+_0x5b8f09(0x52a)+_0x5b8f09(0x5ea))+_0x4106a6[_0x5b8f09(0x126)])),_0x4106a6[_0x5b8f09(0x2d9)](_0x3652e5[_0x5b8f09(0x11d)+'Appli'+'ed'],0xfc8+0xdd*0x1f+-0x1*0x2a8b)&&!_0x3652e5['insta'+_0x5b8f09(0x459)][_0x5b8f09(0x26a)+'ntrol'+'ler']&&_0x3652e5['warni'+_0x5b8f09(0x27a)]['push'](_0x4106a6[_0x5b8f09(0x502)](_0x4106a6['shskj'],_0x4106a6[_0x5b8f09(0x46d)])),_0x3652e5[_0x5b8f09(0x1c7)+_0x5b8f09(0x5c2)+'eplac'+'ed'][_0x5b8f09(0x4f0)+'h']&&_0x3652e5[_0x5b8f09(0x40f)+'ngs'][_0x5b8f09(0x1a2)]('rebui'+_0x5b8f09(0x219)+_0x5b8f09(0x304)+'irst\x20'+_0x5b8f09(0x436)+'re\x20(r'+_0x5b8f09(0x1ac)+'n?):\x20'+_0x3652e5[_0x5b8f09(0x1c7)+_0x5b8f09(0x5c2)+'eplac'+'ed']['join'](',\x20')),_0x3652e5;}else{var _0x78cb6d=-0x1*-0x7db+0x7c5+-0xfa0;for(var _0x2e196e=0x10*-0xca+0x1b38+-0xe98;_0x2e196e<_0x5ddcd7[_0x5b8f09(0x4f0)+'h'];_0x2e196e++){if(_0x23d83e[_0x2e196e]['hook']&&_0x4106a6[_0x5b8f09(0x357)](_0x472d75[_0x2e196e][_0x5b8f09(0x441)][_0x5b8f09(0x18d)+_0x5b8f09(0x3e5)],_0x5a69bc))_0x78cb6d++;}return _0x78cb6d;}}function _0x1db4e1(_0x1bc484){var _0x557966=_0x2deb15;console[_0x557966(0x1b6)](_0x557966(0x16f)+'kura]'+'\x20Skil'+_0x557966(0x113)+_0x557966(0x191)+'rt',_0x4106a6['UBZnp'](_0x4106a6[_0x557966(0x4ff)]+_0x3cf7ed,_0x4106a6[_0x557966(0x4b0)]),_0x1bc484),console[_0x557966(0x1b6)](_0x193816+'\x0a'+JSON['strin'+_0x557966(0x274)](_0x1bc484,null,0x61*-0x11+0x75+0xdb*0x7)+'\x0a'+_0x9391d2),_0x4b81f0(_0x557966(0x1fd)+'t',{'report':_0x1bc484});}function _0x370083(){var _0x35df55=_0x2deb15,_0x48d702={'Bumvf':function(_0x455ecc,_0x1411df){return _0x4106a6['xpILX'](_0x455ecc,_0x1411df);}};try{if(_0x35df55(0x2c3)!==_0x4106a6[_0x35df55(0x3f6)])return _0x4106a6[_0x35df55(0x263)](_0x4c4f25);else{var _0x115a18=_0x153aa0['filte'+'r'](function(_0x5d59ee){var _0x53f516=_0x35df55;return _0x48d702[_0x53f516(0x34c)](_0x5d59ee['type'],_0xc05350);})[-0x39b+-0xd*0x15d+-0x111*-0x14];_0x5a1f8f={'type':_0x7f6e7e,'atMs':_0x136bac[_0x35df55(0x55a)]()-_0x44bb18,'originalFunc':!!(_0x115a18&&_0x115a18[_0x35df55(0x441)]&&typeof _0x115a18['hook'][_0x35df55(0x337)+'nalFu'+'nc']===_0x4106a6['EOSUe']),'resolveGameAtFire':!!_0x4106a6[_0x35df55(0x3f9)](_0x51c582),'gameSourceAtFire':_0x20319f[_0x35df55(0x45e)+'e']};}}catch(_0x3c494b){return _0x35df55(0x2ff)===_0x35df55(0x2ff)?{'version':_0x3d7312,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x199830,'host':_0x39f627,'uwmk':!!(window['Unity'+'WebMo'+_0x35df55(0x135)]&&window['Unity'+'WebMo'+_0x35df55(0x135)]['Runti'+'me']),'il2CppContext':![],'arm':_0x3a08b4,'hooksTotal':_0x535b3f[_0x35df55(0x4f0)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x3c494b&&_0x3c494b[_0x35df55(0x546)+'ge']||_0x3c494b)}:(_0x2de4cd[_0x35df55(0x112)+'et'][_0x35df55(0x107)]='1',_0x179351[_0x35df55(0x107)]=_0x39191b,_0xb84a68['warn'](_0x35df55(0x16f)+_0x35df55(0x2f6)+_0x35df55(0x49c)+'l\x20dis'+_0x35df55(0xf5),_0x35df55(0x544)+':'+_0x471d04,_0x2c8929),_0x2d16be);}}function _0x5c47a9(){var _0x36ba72=_0x2deb15,_0x3ddb56={'haaVK':function(_0x170f0f,_0x5b3c99){return _0x4106a6['yGHMn'](_0x170f0f,_0x5b3c99);},'uPLGh':_0x4106a6['ZnNDF'],'bDbAD':function(_0x144eed,_0x29f4cb){return _0x144eed===_0x29f4cb;},'phzFZ':_0x4106a6['lLbeM'],'YYteY':function(_0x3ed8de,_0x45228a){return _0x4106a6['KlqSQ'](_0x3ed8de,_0x45228a);},'ngUkI':'ZDsAk','glNBE':function(_0x2572a4){return _0x4106a6['usOJh'](_0x2572a4);},'nAOrG':function(_0x237f9a,_0x2292b0,_0x223768){return _0x237f9a(_0x2292b0,_0x223768);}},_0x181bfa=0x3d2+0x246c+-0x33*0xca;_0x4106a6['RFpnB'](_0x1db4e1,_0x4106a6[_0x36ba72(0x574)](_0x370083)),function _0x562ce0(){var _0xcbeda3=_0x36ba72,_0xbcf7be={'volYX':function(_0x1c62b4,_0x3f4443){return _0x1c62b4+_0x3f4443;},'KrxBm':function(_0x4b50d0,_0x1c6cc8){var _0x1987e9=_0x144c;return _0x3ddb56[_0x1987e9(0x2ef)](_0x4b50d0,_0x1c6cc8);},'VmIIg':_0x3ddb56[_0xcbeda3(0x345)],'qPkME':_0xcbeda3(0x393)+_0xcbeda3(0x1de)+'durin'+'g\x20Web'+'Assem'+_0xcbeda3(0x1cf)+_0xcbeda3(0x2de)+_0xcbeda3(0x159)+'\x20and\x20'+_0xcbeda3(0x527)+_0xcbeda3(0x2a1)+_0xcbeda3(0x5e3)+_0xcbeda3(0x341)+_0xcbeda3(0x259)+_0xcbeda3(0x299)+'\x20'};if(_0x3ddb56['bDbAD'](_0xcbeda3(0x518),_0x3ddb56['phzFZ']))_0x4395f9['warni'+'ngs'][_0xcbeda3(0x1a2)](_0xbcf7be['volYX'](_0xbcf7be[_0xcbeda3(0x160)](_0xcbeda3(0x457)+_0x4b0ff6['hooks'+_0xcbeda3(0x39d)],_0xbcf7be['VmIIg'])+_0xbcf7be[_0xcbeda3(0x335)]+(_0xcbeda3(0x40a)+'oks\x20r'+_0xcbeda3(0x404)+_0xcbeda3(0x46f)+_0xcbeda3(0x2bb)+_0xcbeda3(0x369)+_0xcbeda3(0x291)+'nored'+_0xcbeda3(0x51a)+_0xcbeda3(0x522)+_0xcbeda3(0x432)+_0xcbeda3(0x282)+_0xcbeda3(0x23d)+'.\x20'),'Regis'+'tered'+'\x20')+_0x179b9f['hooks'+_0xcbeda3(0x584)+'tered'+_0xcbeda3(0x171)]+(_0xcbeda3(0x5ce)+'(s)\x20d'+_0xcbeda3(0x374)+'\x20armi'+_0xcbeda3(0x403)+_0xcbeda3(0x1b0)+_0xcbeda3(0x3f8)+_0xcbeda3(0x42b)+'.'));else{if(!_0x535b3f[_0xcbeda3(0x4f0)+'h'])try{if(_0x3ddb56[_0xcbeda3(0x364)](_0x3ddb56['ngUkI'],_0xcbeda3(0x2c6))){var _0x4bf489=_0x2a218a[_0x49d6f2[_0x127de1]];if(_0x4bf489&&typeof _0x4bf489==='objec'+'t'&&_0x4bf489[_0xcbeda3(0x42e)+'e']&&_0x4bf489[_0xcbeda3(0x42e)+'e'][_0xcbeda3(0x141)+'8']&&_0x4bf489['Modul'+'e'][_0xcbeda3(0x141)+'8'][_0xcbeda3(0x264)+'r'])return _0x189bcb[_0xcbeda3(0x45e)+'e']=_0xcbeda3(0x3ea)+'w.'+_0x10317a[_0x25a528]+(_0xcbeda3(0x4ba)+'le'),_0x4bf489;}else _0x5b8329();}catch(_0x40ae7c){}_0x181bfa++,_0x1db4e1(_0x3ddb56[_0xcbeda3(0x37c)](_0x370083));if(!_0x535b3f[_0xcbeda3(0x4f0)+'h']&&_0x181bfa<0x1*0x12cf+-0xddd+-0x6*0xa1)_0x3ddb56['nAOrG'](setTimeout,_0x562ce0,-0x90c*0x1+0x1edc+-0xe00);else{if(!Object['keys'](_0x28ce62)[_0xcbeda3(0x4f0)+'h']&&_0x181bfa<0x24c8+-0x15cb+-0x1*0xdd1)_0x3ddb56[_0xcbeda3(0x307)](setTimeout,_0x562ce0,-0xbba*0x1+0x17f0+-0x466);else setTimeout(_0x562ce0,-0x1508+-0x1*0x15d+-0x3*-0x907);}}}();}if(document[_0x2deb15(0x277)])_0x4106a6[_0x2deb15(0x263)](_0x5c47a9);else document[_0x2deb15(0x186)+_0x2deb15(0x4b5)+'stene'+'r'](_0x2deb15(0x3bd)+'ntent'+'Loade'+'d',_0x5c47a9,{'once':!![]});})()));
