// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.10.1
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

(function(_0x132cf1,_0x36e9a0){var _0x22a331=_0xbe61,_0x4fdf62=_0x132cf1();while(!![]){try{var _0x43bcc7=-parseInt(_0x22a331(0x98e))/(-0x892+0x1415+0x1eb*-0x6)*(-parseInt(_0x22a331(0x337))/(-0x407*-0x5+-0xba3+-0x87e))+parseInt(_0x22a331(0x75e))/(0x4*0x83+-0xad5*-0x1+-0x2*0x66f)+-parseInt(_0x22a331(0xa7d))/(0x67*0x1d+-0x9f8+-0x1af)+-parseInt(_0x22a331(0x5fa))/(0x2e*-0x3e+-0xc48+0x1771)*(-parseInt(_0x22a331(0xc9e))/(0x1*0x1639+-0x4*0x812+0xa15*0x1))+-parseInt(_0x22a331(0xad8))/(0x3*-0x3b5+-0x242c+0x2f52)+-parseInt(_0x22a331(0xd78))/(-0xc5*-0x1d+0x1*-0x18c5+0x27c)*(-parseInt(_0x22a331(0x47e))/(0xbb6+0x695+0x52*-0x39))+-parseInt(_0x22a331(0x381))/(-0x1*0xfdf+0x1900+-0xd*0xb3)*(-parseInt(_0x22a331(0x38f))/(-0x2*-0xc86+0x2657*0x1+-0x3f58));if(_0x43bcc7===_0x36e9a0)break;else _0x4fdf62['push'](_0x4fdf62['shift']());}catch(_0x4da426){_0x4fdf62['push'](_0x4fdf62['shift']());}}}(_0x2d2e,-0xe175+-0x21ba9+-0x31546*-0x2),((()=>{'use strict';var _0x57da09=_0xbe61,_0x2e21ac={'cOSaW':function(_0x38edb4,_0x844ebc){return _0x38edb4!==_0x844ebc;},'rBcMX':function(_0x22f5da,_0x58949c){return _0x22f5da!==_0x58949c;},'cYJPQ':function(_0x49f775,_0x35bfa6){return _0x49f775!==_0x35bfa6;},'TPulD':function(_0x4bee78,_0xd553b9){return _0x4bee78<_0xd553b9;},'lMtTz':_0x57da09(0x6f3),'IlGHS':function(_0x3badbb,_0x5af137){return _0x3badbb+_0x5af137;},'OLKSv':function(_0x53211f,_0x1e8d95){return _0x53211f+_0x1e8d95;},'CNTWo':_0x57da09(0x31c)+_0x57da09(0x7a7),'XoQZS':_0x57da09(0x3c2)+_0x57da09(0xc88)+_0x57da09(0xb31)+'0x','hxpBx':'cmd','fkEzy':'ifram'+'e','oskAG':function(_0x25db98,_0x3392ae){return _0x25db98<_0x3392ae;},'Xoned':'sakur'+'a-sw','fHQps':function(_0x2ae307,_0x40c70a){return _0x2ae307===_0x40c70a;},'AXSoN':function(_0x15b663){return _0x15b663();},'hGXvH':_0x57da09(0xa26),'WPYGn':_0x57da09(0x781)+_0x57da09(0x5d1)+'v2','wryKH':_0x57da09(0x302)+'round'+_0x57da09(0xd1d)+_0x57da09(0xe14)+'2,29,'+'.9);b'+_0x57da09(0xcd3)+_0x57da09(0xd6c)+_0x57da09(0x5fb)+_0x57da09(0x5e5)+_0x57da09(0xdc1)+_0x57da09(0x67b)+'77,.5'+_0x57da09(0xc4d)+'or:','kWwod':_0x57da09(0x30b)+'r-rad'+'ius:9'+_0x57da09(0x63b)+_0x57da09(0xaac)+'ng:4p'+'x\x2012p'+_0x57da09(0x5af)+_0x57da09(0xe54)+'x/1.4'+_0x57da09(0xb2e)+_0x57da09(0xcc7)+'ace,C'+_0x57da09(0x24c)+'as,mo'+_0x57da09(0x5f7)+'ce;','dgkIO':_0x57da09(0x781)+'a','xAHbx':function(_0x2d3f2a,_0x4e7e8c){return _0x2d3f2a&&_0x4e7e8c;},'FdJrx':function(_0x2c4185){return _0x2c4185();},'bkaAK':function(_0x59a7da,_0x259071){return _0x59a7da===_0x259071;},'fCDpX':'ERWem','DgKWt':_0x57da09(0xadf)+_0x57da09(0x69b)+_0x57da09(0x907)+_0x57da09(0x4a9)+_0x57da09(0xd32)+'}','gOJgX':function(_0x341f7e,_0x1552ca){return _0x341f7e(_0x1552ca);},'MAVnE':_0x57da09(0x5e9)+'kura]'+'\x20pane'+_0x57da09(0x557)+'abled','VGEsQ':function(_0x439315,_0x47ee19){return _0x439315+_0x47ee19;},'wWbJt':_0x57da09(0x7e4),'eAGqN':_0x57da09(0x78e),'ePQcM':_0x57da09(0x8ed)+'1b','zmywX':_0x57da09(0x8cb)+'paren'+'t','qhYzU':_0x57da09(0x2a7),'dBRtw':'wTHun','NfrOT':function(_0x45a8bc){return _0x45a8bc();},'JurEf':_0x57da09(0x46c),'XnJWH':_0x57da09(0x6ae),'ESaHA':_0x57da09(0x3c1)+'1d','LHPfQ':function(_0x20dbab,_0x1fa0d1){return _0x20dbab<_0x1fa0d1;},'FkfqX':_0x57da09(0x214),'tWQmv':function(_0x54c440,_0x3d4968){return _0x54c440(_0x3d4968);},'xruwy':'Sakur'+_0x57da09(0x982)+_0x57da09(0xc09)+_0x57da09(0x579)+_0x57da09(0xcb5),'NbrIi':'Reloa'+'d\x20the'+'\x20game'+_0x57da09(0xd55)+_0x57da09(0xbed)+'\x20and\x20'+_0x57da09(0x8bf)+_0x57da09(0x756)+_0x57da09(0x208)+_0x57da09(0x671)+'in.','CGZmz':function(_0x35666f,_0x2e6f4b){return _0x35666f/_0x2e6f4b;},'OgrPz':function(_0x1fc041,_0x54b047){return _0x1fc041+_0x54b047;},'YYgGb':'icGHo','qlhqG':function(_0x3301f7,_0x19d6d3){return _0x3301f7(_0x19d6d3);},'lhgjF':function(_0x245a6e,_0x50dad1){return _0x245a6e+_0x50dad1;},'tRxeQ':_0x57da09(0x55d)+'ion:f'+'ixed;'+_0x57da09(0x545)+_0x57da09(0x474)+'top:1'+'2px;z'+_0x57da09(0x6b2)+_0x57da09(0x851)+'74830'+_0x57da09(0xce8)+'x-wid'+_0x57da09(0xdad)+_0x57da09(0x92c)+'w,620'+'px);m'+'ax-he'+'ight:'+_0x57da09(0x97b),'dHmae':_0x57da09(0xdb6)+_0x57da09(0xc41)+_0x57da09(0x3f8)+_0x57da09(0xc0a)+'ospac'+_0x57da09(0x22b)+'solas'+_0x57da09(0x69d)+_0x57da09(0xc2b)+';box-'+'shado'+'w:0\x202'+_0x57da09(0x7aa)+'0px\x20-'+_0x57da09(0x1ed)+_0x57da09(0x659),'RvoUI':function(_0x4479e4,_0x3ef216){return _0x4479e4+_0x3ef216;},'Pwrca':function(_0x1024e5,_0x2508a3){return _0x1024e5+_0x2508a3;},'KuYbK':function(_0x3727a0,_0x5bb841){return _0x3727a0+_0x5bb841;},'CoLnv':function(_0x5981f8,_0x569329){return _0x5981f8+_0x569329;},'LRfXz':function(_0x284413,_0x45f242){return _0x284413+_0x45f242;},'CIOBF':_0x57da09(0x5a4)+_0x57da09(0xbae)+'\x20skil'+_0x57da09(0xc5a)+_0x57da09(0xdf3),'udiEr':'<span'+_0x57da09(0x379)+_0x57da09(0xd8c)+_0x57da09(0x3f6)+'\x22\x20sty'+_0x57da09(0xcb6)+'olor:'+_0x57da09(0x446)+_0x57da09(0x666)+'aitin'+'g\x20for'+'\x20game'+'\x20fram'+_0x57da09(0xce3)+'pan>','qbMJB':';bord'+'er:0;'+_0x57da09(0x34d)+_0x57da09(0x4f1)+'f1b;b'+_0x57da09(0xcd3)+_0x57da09(0x619)+_0x57da09(0x304)+_0x57da09(0x4e6)+'ding:'+_0x57da09(0xbb6)+_0x57da09(0x886)+_0x57da09(0x7ce)+_0x57da09(0xc10)+_0x57da09(0x464)+'curso'+'r:poi'+_0x57da09(0xab7)+_0x57da09(0xcbb)+'y\x20JSO'+'N</bu'+'tton>','YxkUQ':_0x57da09(0x626)+'>','luuvG':_0x57da09(0x951)+_0x57da09(0x21d)+'=\x22pad'+_0x57da09(0xb8f)+'8px\x201'+'2px;b'+'order'+_0x57da09(0x734)+_0x57da09(0x5cb)+'x\x20sol'+'id\x20rg'+_0x57da09(0x74e)+_0x57da09(0x2db)+',177,'+'.18);'+'displ'+'ay:fl'+_0x57da09(0x866)+_0x57da09(0xd10)+_0x57da09(0x737)+_0x57da09(0xa0f)+_0x57da09(0x59c)+_0x57da09(0xab7)+_0x57da09(0x3a6)+_0x57da09(0xb53)+_0x57da09(0xa5f)+'lex-w'+'rap:w'+_0x57da09(0x9cb)+'>','pZRyk':'<butt'+_0x57da09(0xa6b)+_0x57da09(0x33c)+'-spee'+_0x57da09(0xe4c)+_0x57da09(0xa0b)+_0x57da09(0x302)+'round'+_0x57da09(0xba7)+'spare'+_0x57da09(0xb07)+'rder:'+'1px\x20s'+_0x57da09(0x53d)+'rgba('+'255,1'+'43,17'+_0x57da09(0xa29)+_0x57da09(0xabc)+'r:#f7'+_0x57da09(0x491)+'borde'+_0x57da09(0x340)+'ius:7'+_0x57da09(0x929)+_0x57da09(0x217)+_0x57da09(0x7a8)+_0x57da09(0xc2e)+'curso'+_0x57da09(0xd47)+'nter;'+_0x57da09(0x362)+'ed\x20of'+'f</bu'+'tton>','gRyKa':'<inpu'+_0x57da09(0xd0d)+_0x57da09(0x2f1)+'facto'+'r\x22\x20ty'+_0x57da09(0xb88)+'ange\x22'+'\x20min='+_0x57da09(0x973)+_0x57da09(0x2cd)+'\x22\x20ste'+_0x57da09(0xa64)+_0x57da09(0x629)+'lue=\x22'+_0x57da09(0x521)+_0x57da09(0xa0b)+'width'+':120p'+_0x57da09(0x9c0)+_0x57da09(0x238)+_0x57da09(0x66c),'tPKWT':'<span'+'\x20id=\x22'+'sw2-f'+'actor'+'label'+_0x57da09(0x4d4)+'le=\x22c'+_0x57da09(0x66c)+_0x57da09(0x446)+'c9;mi'+_0x57da09(0x879)+_0x57da09(0xd5d)+_0x57da09(0x548)+_0x57da09(0xae1)+'/span'+'>','LMzPJ':_0x57da09(0x5ea)+'statu'+'s','JLNNs':_0x57da09(0x5ea)+'build','QCPWF':'#sw2-'+'out','QLYGq':_0x57da09(0x5ea)+'speed','JgIdg':'#sw2-'+_0x57da09(0xdbd)+'rlabe'+'l','JTnme':'\x20\x20(','WceSH':function(_0x1f8557,_0x4be648){return _0x1f8557+_0x4be648;},'VreDd':function(_0xb197df,_0x2695d1){return _0xb197df+_0x2695d1;},'LmOSA':_0x57da09(0x3fd)+_0x57da09(0x86f),'UJjeh':function(_0xaf714,_0x197bc8){return _0xaf714+_0x197bc8;},'lmCUs':function(_0x3e7f22,_0x5bf364){return _0x3e7f22<_0x5bf364;},'IVFSU':function(_0x391a3d,_0x408dc5){return _0x391a3d+_0x408dc5;},'vgVkV':'intCB','DXZzy':_0x57da09(0x389),'GfhvP':'──\x20','dimMZ':'\x20\x20off'+'set\x20\x20'+_0x57da09(0xaa2)+_0x57da09(0x794)+_0x57da09(0x270)+_0x57da09(0x71f)+'\x20\x20\x20\x20\x20'+_0x57da09(0x794)+_0x57da09(0x7f8),'xXuOP':function(_0x3a9f6f,_0x4e3ffa){return _0x3a9f6f<_0x4e3ffa;},'OaWkV':'numbe'+'r','hVhJQ':function(_0x27c339,_0x517c3b){return _0x27c339+_0x517c3b;},'iPlQy':function(_0x18d1bb,_0x5ec955){return _0x18d1bb+_0x5ec955;},'EdQZA':function(_0x2b27c7,_0x1f5dbd){return _0x2b27c7===_0x1f5dbd;},'daSmg':function(_0x2c7d8d,_0x51b767){return _0x2c7d8d+_0x51b767;},'sMIZe':'hello','OuFae':function(_0x10fa8c,_0x217a05){return _0x10fa8c!==_0x217a05;},'OLHir':'%c[sa'+'kura]'+'\x20pane'+_0x57da09(0xc4e)+_0x57da09(0x5bd)+_0x57da09(0x533),'jbqXv':'color'+':','JFJrP':_0x57da09(0x259),'gXoPi':'fYffd','DteBD':_0x57da09(0xaea),'ymgTm':function(_0x3013c1,_0x191a68){return _0x3013c1===_0x191a68;},'ZghAp':_0x57da09(0xe0a)+_0x57da09(0x8fd)+_0x57da09(0xa7e),'RtJZo':function(_0x5ad4b5,_0x5512c1){return _0x5ad4b5!==_0x5512c1;},'fiWkb':function(_0x49d75f,_0x90112e){return _0x49d75f!==_0x90112e;},'RWAzu':_0x57da09(0xc82),'yfGlv':function(_0x5b9276,_0x1d484c){return _0x5b9276>_0x1d484c;},'inkJY':function(_0x8831d2,_0x4496dd){return _0x8831d2-_0x4496dd;},'QEwpW':_0x57da09(0x827)+_0x57da09(0xb69),'gakac':'undef'+_0x57da09(0x310),'WaRLx':'unity'+_0x57da09(0x466)+'nce','VUJHB':_0x57da09(0xdc4),'usCjt':_0x57da09(0x6b1)+_0x57da09(0x466)+_0x57da09(0x8da)+_0x57da09(0x5be),'MrXYA':function(_0x12d3b4,_0x2adbc9){return _0x12d3b4===_0x2adbc9;},'Azkub':function(_0x334e85){return _0x334e85();},'KMcSM':function(_0x968c84,_0x178edc){return _0x968c84(_0x178edc);},'UdajW':_0x57da09(0xc7d),'TowDC':'sakur'+_0x57da09(0xb72)+_0x57da09(0x483)+'z','Msgjx':function(_0x3e7194){return _0x3e7194();},'xHFFS':function(_0x1875ed){return _0x1875ed();},'sJGac':function(_0x2ae5ce,_0x51b320){return _0x2ae5ce(_0x51b320);},'tOPcz':function(_0x28b93a){return _0x28b93a();},'KsfIw':function(_0x1d92d1,_0x50fe0f){return _0x1d92d1===_0x50fe0f;},'YObeZ':'pQSCw','dNlVm':'wQuZs','XsOMC':_0x57da09(0x7d0)+_0x57da09(0x65b)+_0x57da09(0x51a)+_0x57da09(0x977)+'e','sqhUN':function(_0x37133f,_0x5493c1){return _0x37133f===_0x5493c1;},'LbXmr':_0x57da09(0x27c),'wUbWu':'Runti'+_0x57da09(0x4b0)+'ame','pmHMv':_0x57da09(0xe05),'GtcOW':'bare\x20'+_0x57da09(0xd15)+'bindi'+'ng','ogNbY':function(_0x283595,_0x5492a8){return _0x283595<_0x5492a8;},'RdepP':_0x57da09(0x911)+'t','OikCC':'windo'+'w.','ZSTyF':_0x57da09(0x781)+_0x57da09(0x5d1)+'v2-ta'+'b','PdNdI':_0x57da09(0xda1),'jqQWg':function(_0x3cbbb8,_0x5a08c7){return _0x3cbbb8+_0x5a08c7;},'zQpTV':'posit'+_0x57da09(0x2f7)+_0x57da09(0x6cd)+_0x57da09(0x545)+'12px;'+'top:1'+_0x57da09(0x830)+'-inde'+'x:214'+_0x57da09(0xc4c)+'99;cu'+'rsor:'+'point'+_0x57da09(0x520)+_0x57da09(0xb98)+_0x57da09(0x4f6)+_0x57da09(0x997),'VgoLm':_0x57da09(0x29b),'TKiwU':'GVPwE','JLNIB':function(_0xb3db8,_0x2b4167){return _0xb3db8!==_0x2b4167;},'XRBwr':_0x57da09(0x461),'eqkso':function(_0x608fc7,_0x3164fc){return _0x608fc7!==_0x3164fc;},'sSyDM':function(_0x2f56c7,_0x5b80bb){return _0x2f56c7===_0x5b80bb;},'JiasR':_0x57da09(0x74b),'UFikR':_0x57da09(0x234)+'APU8\x20'+'-\x20Uni'+_0x57da09(0xcdb)+'stanc'+_0x57da09(0xa03)+'\x20reac'+'hable'+'\x20via\x20'+'Runti'+'me.re'+_0x57da09(0x747)+_0x57da09(0x4f7)+_0x57da09(0x3dd)+_0x57da09(0xc38)+_0x57da09(0xb6c)+'\x20glob'+'al','rZMvR':'SOcGe','IAhFN':'i16','zlNpW':_0x57da09(0x3a4),'JeeQp':_0x57da09(0x25a),'ujdek':'IFhvu','CfXWR':function(_0x1d9758,_0x498d15){return _0x1d9758(_0x498d15);},'CQIkP':function(_0x1dc336,_0xb78ece){return _0x1dc336&_0xb78ece;},'qQVIN':function(_0x338d99,_0x52bb72){return _0x338d99|_0x52bb72;},'SKlFP':function(_0x5742e6,_0x54c8d8){return _0x5742e6<_0x54c8d8;},'iPSCi':'aWEGP','FGeBD':_0x57da09(0x47b),'YknLx':function(_0x51fcf6,_0xcf01d5){return _0x51fcf6+_0xcf01d5;},'SXKjE':function(_0x465a2c,_0x211702){return _0x465a2c<_0x211702;},'VItYU':_0x57da09(0x4fb)+_0x57da09(0x355)+_0x57da09(0xa44),'ZZMKg':function(_0xfa9dbe,_0x53577b){return _0xfa9dbe>_0x53577b;},'EoHJf':function(_0x1f45b4,_0x5eaf7f){return _0x1f45b4+_0x5eaf7f;},'qnuCA':function(_0x43d6e5,_0x594c90){return _0x43d6e5===_0x594c90;},'YBktQ':'obfF','wrhXO':_0x57da09(0xc15),'uSLPJ':function(_0x23e2c6,_0x137142){return _0x23e2c6!==_0x137142;},'WLqqA':'VSxHw','OFIrE':function(_0x2e9863,_0x88c71a){return _0x2e9863(_0x88c71a);},'KrNwl':function(_0x3f95fc,_0x5d252c){return _0x3f95fc^_0x5d252c;},'OPHUZ':function(_0x3abfc9,_0x6b353e){return _0x3abfc9^_0x6b353e;},'HwfqF':_0x57da09(0xa17)+_0x57da09(0xd3e)+'7|9|3'+'|14|0'+'|10|8'+_0x57da09(0xe4a)+'|4|5','nDpWE':function(_0xd1ac9d,_0x4b0255,_0x56865b){return _0xd1ac9d(_0x4b0255,_0x56865b);},'LknGW':function(_0x15dd87,_0x550489){return _0x15dd87!==_0x550489;},'qarQs':function(_0x27896c,_0x14f6d4){return _0x27896c&_0x14f6d4;},'aMeDR':function(_0x2bdecb,_0x101a1d,_0x62624){return _0x2bdecb(_0x101a1d,_0x62624);},'mAaEv':function(_0x1cd8c2,_0x28570b){return _0x1cd8c2||_0x28570b;},'OaHAp':function(_0x2de50f,_0xf6d975){return _0x2de50f+_0xf6d975;},'nlVRQ':_0x57da09(0x550),'GsrOd':function(_0xa668cd,_0xf627e2){return _0xa668cd+_0xf627e2;},'OQonb':function(_0x24c469,_0x49329d){return _0x24c469^_0x49329d;},'HKiWM':function(_0x4e60be,_0x5760b1){return _0x4e60be+_0x5760b1;},'ZnFae':function(_0xc18907,_0x139176){return _0xc18907|_0x139176;},'Tfalb':function(_0x2179ef,_0x3dc4cb,_0x386973,_0x22478b){return _0x2179ef(_0x3dc4cb,_0x386973,_0x22478b);},'xZqZa':function(_0x642abf,_0x5b6aad,_0x2e3de5,_0x3753e1){return _0x642abf(_0x5b6aad,_0x2e3de5,_0x3753e1);},'JTqgG':function(_0x110b71,_0x35faaa){return _0x110b71&_0x35faaa;},'gadQC':_0x57da09(0x62e)+_0x57da09(0xa1f),'zlsct':function(_0x4f8a16,_0x558786){return _0x4f8a16(_0x558786);},'RJNvy':function(_0x6f76c3,_0x30d913){return _0x6f76c3<_0x30d913;},'pexKC':_0x57da09(0x9fe),'bMKjn':function(_0xa71bdb,_0x379f3f){return _0xa71bdb(_0x379f3f);},'bnnmY':function(_0x21e2d8,_0x2b0f8e){return _0x21e2d8+_0x2b0f8e;},'LhSOn':function(_0x1e1b27,_0x3ae460){return _0x1e1b27<_0x3ae460;},'fBgIF':'impla'+'usibl'+'e','YNLOf':function(_0x5e5353,_0x481840){return _0x5e5353>_0x481840;},'wYPRU':function(_0x4b452a,_0x42192f){return _0x4b452a!==_0x42192f;},'NUaay':'wqdEr','Gkmml':function(_0x50d996,_0x3cb78b){return _0x50d996>=_0x3cb78b;},'zQWAV':function(_0x4aedc4,_0xff64a2){return _0x4aedc4*_0xff64a2;},'LwzhP':function(_0x1066a2,_0x26c74e){return _0x1066a2===_0x26c74e;},'WGMEa':function(_0x55d564,_0x375344){return _0x55d564!==_0x375344;},'mgJwH':'XTsFp','hpJeM':'below'+_0x57da09(0x2d9)+'r\x20','JytGQ':function(_0x2b2cc7,_0x5a2786){return _0x2b2cc7*_0x5a2786;},'aWPeF':function(_0x4ce0d5,_0x5b8b1f){return _0x4ce0d5-_0x5b8b1f;},'SfknA':function(_0x56baee,_0x28d83a){return _0x56baee===_0x28d83a;},'EJcfe':_0x57da09(0x844)+_0x57da09(0xb9f)+'ler','xrtFz':_0x57da09(0x4ca),'wwEGR':function(_0x498551,_0x107f1a){return _0x498551!==_0x107f1a;},'KxlML':'WTfKU','amzOI':_0x57da09(0xb63),'tfcDU':'wGZAW','BRvoy':'get','xZoir':function(_0x16a58d,_0x254bad){return _0x16a58d===_0x254bad;},'ZWFEF':function(_0x5c3c11,_0x20cde5){return _0x5c3c11<_0x20cde5;},'szEDQ':function(_0xb4c492,_0x2b7bbd){return _0xb4c492===_0x2b7bbd;},'baLXK':function(_0x1e387f,_0x54b763){return _0x1e387f>_0x54b763;},'gjDqC':_0x57da09(0x842),'TxsTZ':function(_0xa8e70a,_0x5170a2){return _0xa8e70a===_0x5170a2;},'VlskK':_0x57da09(0x43e),'ysHHK':function(_0xa88a5e,_0x3c20b5){return _0xa88a5e===_0x3c20b5;},'iMgby':_0x57da09(0x23d),'gLltB':_0x57da09(0x8c7),'JBaph':_0x57da09(0xc68)+'74','OQoBC':'WkEWF','zWDOv':_0x57da09(0x87a),'mUOvW':'WWuiM','vsplE':_0x57da09(0x7a2),'OsNbb':_0x57da09(0x749)+_0x57da09(0xcf9),'RXMlN':function(_0x2177ae,_0x5f30e1){return _0x2177ae+_0x5f30e1;},'gfihd':function(_0x27cf1a,_0x5586b1){return _0x27cf1a/_0x5586b1;},'jMWmC':function(_0x2eb606,_0x5ca1f2){return _0x2eb606(_0x5ca1f2);},'ibwoM':function(_0x4efa2c,_0x55d49c){return _0x4efa2c>=_0x55d49c;},'xeZhr':function(_0x50298b,_0x306a05){return _0x50298b<=_0x306a05;},'mSaMu':'b,a','ljVCJ':function(_0x4a6da8,_0x3e07ef){return _0x4a6da8+_0x3e07ef;},'YfDZC':_0x57da09(0xe50)+_0x57da09(0xc0b)+'ed','kmRYj':_0x57da09(0x6a4)+'er\x20bo'+_0x57da09(0x4be),'ICCeM':function(_0xd4f70d,_0x46ebc4){return _0xd4f70d||_0x46ebc4;},'yceyB':function(_0x5eaccb,_0x1e7815){return _0x5eaccb<_0x1e7815;},'zEfgF':function(_0x216eac,_0x14fc7b){return _0x216eac*_0x14fc7b;},'BhkQf':function(_0x1709a3){return _0x1709a3();},'fWLhW':function(_0x1d5d87,_0x282b37){return _0x1d5d87+_0x282b37;},'FdclM':_0x57da09(0x592)+'ve\x20ob'+'jects'+_0x57da09(0xac3)+'ured\x20'+'yet.','SEygd':'XKUgI','OmGjM':'zwpie','suXkD':function(_0x21da7c,_0x2cb544,_0x2f5691){return _0x21da7c(_0x2cb544,_0x2f5691);},'mWGgq':function(_0x250d52,_0x23da4e){return _0x250d52+_0x23da4e;},'dpgJG':function(_0x3b4a62,_0x426ad6){return _0x3b4a62>>>_0x426ad6;},'hcaUl':_0x57da09(0x992)+'hScri'+'pt','FrYIT':_0x57da09(0x552)+'|3|4','hTPMu':'NPC_C'+_0x57da09(0x785)+_0x57da09(0x38c),'EkxvI':function(_0x43deda,_0x2154e7,_0x40bba6){return _0x43deda(_0x2154e7,_0x40bba6);},'YHRoS':function(_0x2af487,_0x252e47){return _0x2af487+_0x252e47;},'uigJP':_0x57da09(0xbaa)+_0x57da09(0xe24)+'etwor'+_0x57da09(0x262)+_0x57da09(0x600)+_0x57da09(0x6eb)+'otrol'+_0x57da09(0x8f0)+'nd\x20no'+'\x20game'+_0x57da09(0xe20)+_0x57da09(0x260)+'That\x20'+'is\x20wh'+_0x57da09(0x741),'FMUtE':'the\x20l'+_0x57da09(0x6c5)+'looks'+_0x57da09(0x632)+'\x20-\x20ru'+_0x57da09(0x444)+'\x20reco'+_0x57da09(0xd4d)+'IDE\x20a'+'\x20live'+'\x20roun'+_0x57da09(0xb38)+'t\x20the'+_0x57da09(0x837)+'.','kpexO':function(_0x6d0402,_0x36d79b){return _0x6d0402+_0x36d79b;},'ROggh':_0x57da09(0x45c)+'rs\x20ar'+'e\x20pre'+'sent\x20'+_0x57da09(0xb48)+_0x57da09(0xb5d)+_0x57da09(0xde8)+_0x57da09(0x496)+'ied\x20a'+_0x57da09(0x55f)+_0x57da09(0x758)+_0x57da09(0x314)+_0x57da09(0x65a)+'k\x20','XHfrb':'isLoc'+'al\x20on'+_0x57da09(0x2d6)+_0x57da09(0x48f)+'y\x20in\x20'+_0x57da09(0xd38)+_0x57da09(0x7a5),'tLnaV':function(_0x17c19f,_0x14d172){return _0x17c19f!==_0x14d172;},'dhwjy':_0x57da09(0xba6),'pYBHs':function(_0x283b93,_0x50cb36){return _0x283b93<_0x50cb36;},'zKhdN':function(_0x398ef3,_0x488717){return _0x398ef3===_0x488717;},'RjvfV':_0x57da09(0xd37),'OSftf':function(_0x30a150,_0x141c01){return _0x30a150!==_0x141c01;},'mLtpe':_0x57da09(0x228),'rWOYr':'obf','yzzcG':function(_0x34bd43,_0xee8033){return _0x34bd43(_0xee8033);},'ViDNx':function(_0x18e9bb,_0x3f4053,_0xcb6ca4){return _0x18e9bb(_0x3f4053,_0xcb6ca4);},'FPalX':function(_0x4f6f34,_0x3164c4){return _0x4f6f34+_0x3164c4;},'xiDml':_0x57da09(0x69a),'ynxHh':function(_0x34e773,_0x882168){return _0x34e773-_0x882168;},'KuhTj':function(_0x31bca8,_0xf17847){return _0x31bca8+_0xf17847;},'SJzvr':function(_0x31f7ce,_0xbba5d8){return _0x31f7ce+_0xbba5d8;},'CBGPg':function(_0x21a7a4,_0x5f4c41){return _0x21a7a4+_0x5f4c41;},'sTCgi':_0x57da09(0x26b)+'=','VSKyQ':function(_0x498855,_0x430ab9){return _0x498855(_0x430ab9);},'hMqRL':function(_0x23e4b8,_0x5dca77){return _0x23e4b8(_0x5dca77);},'RVdnW':function(_0x6f59de,_0x39de23,_0x46ca77){return _0x6f59de(_0x39de23,_0x46ca77);},'xQSwh':_0x57da09(0x698),'isFgL':function(_0x46ec6e,_0x258824){return _0x46ec6e(_0x258824);},'hbBzK':_0x57da09(0xd13),'FzNED':function(_0x59bd9b,_0x52520e){return _0x59bd9b&&_0x52520e;},'mCuTe':function(_0x23ebdd,_0x71707c){return _0x23ebdd===_0x71707c;},'yoxIT':_0x57da09(0x97c),'RuCrw':_0x57da09(0x3a3)+'nent.'+_0x57da09(0xcb8)+_0x57da09(0x651)+_0x57da09(0xd42)+_0x57da09(0xd58)+_0x57da09(0x9e4),'KdnkI':function(_0x1cf193,_0x5677a4){return _0x1cf193||_0x5677a4;},'BMMUI':_0x57da09(0x421),'tMHWQ':_0x57da09(0x849),'mIyDz':_0x57da09(0x692)+'|6|2|'+_0x57da09(0x66e),'OoBVa':'Mouse'+'Look+','WlcfI':_0x57da09(0xe4f)+'e','eCprU':_0x57da09(0x5ce),'DubgD':function(_0xbdbe08,_0x4773e8){return _0xbdbe08===_0x4773e8;},'arsUx':function(_0x38cf20,_0x21efb5){return _0x38cf20!==_0x21efb5;},'oOCIB':function(_0x508923){return _0x508923();},'PBqXe':_0x57da09(0x717)+'t','veKXg':function(_0x4b11c8){return _0x4b11c8();},'XGBkt':function(_0x43a797,_0x37bdca){return _0x43a797+_0x37bdca;},'GlNvO':function(_0x95cc49,_0x203e2a,_0x268882){return _0x95cc49(_0x203e2a,_0x268882);},'mALur':function(_0x15b2f3,_0x5b54f4){return _0x15b2f3===_0x5b54f4;},'xlCOY':function(_0x2d609b,_0x891d0b){return _0x2d609b(_0x891d0b);},'SKWgY':'22|5|'+'7|12|'+'18|2|'+'19|16'+_0x57da09(0x95e)+_0x57da09(0x5e6)+_0x57da09(0x91a)+'7|9|1'+'5|13|'+_0x57da09(0x37f)+_0x57da09(0x5e7)+_0x57da09(0x8d3)+'0','fzQXq':_0x57da09(0x951)+_0x57da09(0x2d7)+_0x57da09(0xde2)+'2\x22\x20st'+'yle=\x22'+_0x57da09(0x34d)+':#8d7'+_0x57da09(0x539)+'ax-wi'+_0x57da09(0xcdd)+'90px;'+_0x57da09(0x1e4)+'iv>','pucqA':'sakur'+_0x57da09(0x5d1)+_0x57da09(0xb68)+'ss','EYBRI':'#saku'+_0x57da09(0x69b)+_0x57da09(0x662)+_0x57da09(0x97e)+'nitia'+'l}','FHRyC':function(_0x1d29ea,_0x4efb8c){return _0x1d29ea+_0x4efb8c;},'NumWn':function(_0x41864c,_0x3866ef){return _0x41864c+_0x3866ef;},'liyNr':_0x57da09(0x302)+'round'+_0x57da09(0xd1d)+_0x57da09(0xe14)+_0x57da09(0xaa4)+_0x57da09(0xcd6)+'borde'+'r:1px'+_0x57da09(0x87f)+_0x57da09(0x31b)+_0x57da09(0xbc5)+_0x57da09(0x618)+'177,.'+'45);b'+_0x57da09(0xcd3)+_0x57da09(0x619)+'us:10'+_0x57da09(0x9a0),'wzsIw':function(_0x1de2c8,_0x11c843){return _0x1de2c8+_0x11c843;},'FmTqv':function(_0x4a1858,_0x5c330c){return _0x4a1858+_0x5c330c;},'aQHiM':function(_0x25c8fa,_0x4f812d){return _0x25c8fa+_0x4f812d;},'cPzuy':function(_0x44d9a8,_0x2cbc81){return _0x44d9a8+_0x2cbc81;},'LGpzC':function(_0x3c458f,_0x187189){return _0x3c458f+_0x187189;},'QBXNp':'<div\x20'+'data-'+'a=\x22ba'+'r\x22\x20st'+_0x57da09(0xa0b)+'displ'+_0x57da09(0x350)+'ex;ga'+'p:6px'+_0x57da09(0x737)+'n-ite'+'ms:ce'+'nter;'+_0x57da09(0xa46)+'wrap:'+'wrap;'+_0x57da09(0x2fd)+_0x57da09(0x435)+_0x57da09(0xc69)+';\x22>','RIgQF':_0x57da09(0x5a4)+'ura</'+'b>','XGYib':_0x57da09(0x3e3)+_0x57da09(0xc67)+'a-a=\x22'+_0x57da09(0x773)+_0x57da09(0x500)+'range'+_0x57da09(0xc87)+_0x57da09(0x2c7)+'max=\x22'+_0x57da09(0x463)+_0x57da09(0xaf2)+'.5\x22\x20v'+'alue='+_0x57da09(0x880)+_0x57da09(0xa2c)+_0x57da09(0x2b6)+'h:92p'+_0x57da09(0x9c0)+_0x57da09(0x238)+_0x57da09(0x66c),'NjlEs':'<butt'+_0x57da09(0xbf0)+_0x57da09(0x5c6)+_0x57da09(0x3f4)+_0x57da09(0xd9b)+_0x57da09(0x393)+_0x57da09(0x4c6)+'und:t'+'ransp'+_0x57da09(0x541)+';bord'+'er:1p'+_0x57da09(0x2fc)+_0x57da09(0x8a7)+'ba(25'+_0x57da09(0x2db)+',177,'+'.45);','VpAvf':'color'+':#f7e'+_0x57da09(0x88a)+'order'+'-radi'+'us:6p'+'x;pad'+_0x57da09(0xb8f)+_0x57da09(0xb15)+'px;cu'+'rsor:'+'point'+'er;fo'+_0x57da09(0xc18)+'herit'+_0x57da09(0x258)+_0x57da09(0x4b3)+_0x57da09(0xbe9)+'on>','QRXKL':'<div\x20'+'data-'+_0x57da09(0xde2)+_0x57da09(0x4d4)+'le=\x22c'+_0x57da09(0x66c)+_0x57da09(0x71b)+'99;ma'+'x-wid'+'th:29'+_0x57da09(0x810)+_0x57da09(0x961)+'v>','yCADl':_0x57da09(0x4c7),'XvGOD':_0x57da09(0x5e9)+_0x57da09(0x7f9)+_0x57da09(0x770)+'rame\x20'+_0x57da09(0x9b1)+_0x57da09(0xb0a)+'ed','THpYK':function(_0xbb273e,_0x39d268){return _0xbb273e+_0x39d268;},'Lemoc':function(_0x92aca1,_0x3d978e){return _0x92aca1+_0x3d978e;},'sLSdK':_0x57da09(0x3a9)+_0x57da09(0x691)+_0x57da09(0x7c9)+'t\x20','jaxgs':'),\x20so'+_0x57da09(0x290)+'refer'+'ence\x20'+'exist'+'ed\x20th'+'en\x20an'+'d\x20is\x20'+_0x57da09(0x21e)+_0x57da09(0x4ce)+_0x57da09(0xb87)+'ow.','QYkLw':'Heap\x20'+'reads'+_0x57da09(0xafa)+'\x20bloc'+'ked\x20u'+'ntil\x20'+'a\x20gam'+'e\x20obj'+_0x57da09(0x72b)+'ith\x20M'+_0x57da09(0x6ee)+_0x57da09(0x4f9)+_0x57da09(0xa5b)+_0x57da09(0xd3d)+_0x57da09(0x83f)+'.','laqWe':_0x57da09(0x7ea),'OgnyE':'iphce','rzsMl':'ESP\x20b'+'oth','VzgaL':function(_0x1951ed,_0x3b4f19){return _0x1951ed+_0x3b4f19;},'XfURT':function(_0x4de1ce){return _0x4de1ce();},'fQxqL':_0x57da09(0x3b4)+_0x57da09(0x78a)+'0|1','hVmCY':function(_0x173811){return _0x173811();},'hBIJM':_0x57da09(0x9e5)+_0x57da09(0x519),'jXsHo':function(_0x42c5ab,_0xa260c5){return _0x42c5ab===_0xa260c5;},'ClCoz':function(_0x52cc8c){return _0x52cc8c();},'LwQmt':_0x57da09(0x8d4),'uFIbt':function(_0xb1f2af,_0x4caf6b){return _0xb1f2af+_0x4caf6b;},'UCdch':_0x57da09(0xc55)+'m','Fsptx':function(_0x2ae911,_0x2427ce){return _0x2ae911+_0x2427ce;},'KhTDR':_0x57da09(0x9c4)+_0x57da09(0x614),'vjUvF':function(_0x1b3ae3,_0x3624db){return _0x1b3ae3>_0x3624db;},'ucgfI':'\x20+\x20','khNWD':_0x57da09(0x92e),'nZWVx':function(_0x1ecf09,_0x5d4d42){return _0x1ecf09+_0x5d4d42;},'uWCQZ':function(_0x5f3345,_0x2e05ad){return _0x5f3345+_0x2e05ad;},'NHGGd':_0x57da09(0xaa8)+'a8','uqqzr':_0x57da09(0x71b)+'99','LPVkf':function(_0x19106b,_0x1e4683){return _0x19106b===_0x1e4683;},'EaWNU':function(_0x3a7a36,_0x95f1d6){return _0x3a7a36(_0x95f1d6);},'qcNNM':_0x57da09(0xdc5)+_0x57da09(0xcf3),'WNfZW':function(_0x1f20dc,_0x4b410a){return _0x1f20dc!==_0x4b410a;},'KBtvr':'BsFwA','QiTRy':function(_0xa88c8b,_0x2d44cc,_0x592966){return _0xa88c8b(_0x2d44cc,_0x592966);},'VDZJN':function(_0x18dff3,_0x21e318){return _0x18dff3+_0x21e318;},'UdDUS':_0x57da09(0x1f1)+'t','cbAYR':_0x57da09(0x658)+'etRig'+'ht','wIrCL':'tBZbV','dvmXT':function(_0x4107f0,_0x28feb1){return _0x4107f0<_0x28feb1;},'iQsHk':function(_0x1ddd4e,_0x2ce9c2){return _0x1ddd4e+_0x2ce9c2;},'RvLfj':function(_0xe8134f,_0xc9e37){return _0xe8134f>>>_0xc9e37;},'peBlv':function(_0x467cad,_0xe8b770){return _0x467cad+_0xe8b770;},'bCONa':function(_0x3dce5d,_0x19da9d){return _0x3dce5d+_0x19da9d;},'zyiPK':function(_0x48f365,_0x319064){return _0x48f365+_0x319064;},'AmiNY':function(_0x4ec0b5,_0x52863b){return _0x4ec0b5+_0x52863b;},'IYQNj':_0x57da09(0x732)+_0x57da09(0x42e),'zPlxw':function(_0x44cde4,_0x18fbb6){return _0x44cde4!==_0x18fbb6;},'oaroM':_0x57da09(0xa41),'tGtUj':function(_0x2edbf4,_0x1d2bfb){return _0x2edbf4(_0x1d2bfb);},'ksScV':function(_0xa28395,_0x20fd2c){return _0xa28395===_0x20fd2c;},'TvxCj':_0x57da09(0x50e)+_0x57da09(0x982)+'llWar'+'z\x20—\x20','Unlql':_0x57da09(0x60c)+'b','shIxB':function(_0x4c024d,_0x2e3f74){return _0x4c024d===_0x2e3f74;},'chIxB':_0x57da09(0x55c),'QIyEm':function(_0x424f2b,_0x31318c){return _0x424f2b===_0x31318c;},'USjoS':function(_0x44d832,_0x465234){return _0x44d832!==_0x465234;},'WCTPq':function(_0x264115,_0x2a6be2){return _0x264115<_0x2a6be2;},'sFCNL':_0x57da09(0x867)+'f5','MJxBR':function(_0x1a805b,_0x21ef44){return _0x1a805b-_0x21ef44;},'hHxGw':function(_0x2f29bb,_0x26c9fd){return _0x2f29bb>_0x26c9fd;},'yhvTT':_0x57da09(0x5ef)+'c:\x20','OHmvN':function(_0x4c365a,_0x4f3298){return _0x4c365a(_0x4f3298);},'WAWmv':'\x20hook'+'(s)\x20d'+'uring'+_0x57da09(0x512)+'ng\x20at'+_0x57da09(0x39c)+'ment-'+_0x57da09(0x8f5)+'.','Fyesq':_0x57da09(0x5a1),'TGXuu':function(_0xbb5f1a,_0xad4cc5){return _0xbb5f1a+_0xad4cc5;},'iIuhw':function(_0x19a348,_0x3371f5){return _0x19a348*_0x3371f5;},'tHmAZ':function(_0x34705b,_0x5290ed){return _0x34705b*_0x5290ed;},'fFmoD':function(_0x52a5c8,_0x10a382){return _0x52a5c8*_0x10a382;},'slboH':function(_0x35e59f,_0x4ce953){return _0x35e59f+_0x4ce953;},'RCykZ':function(_0xeb9cb7,_0x438a7e){return _0xeb9cb7*_0x438a7e;},'HgjVw':function(_0x105cb3,_0x1bf9d4){return _0x105cb3+_0x1bf9d4;},'MfVph':function(_0xb3b004,_0x1603c9){return _0xb3b004+_0x1603c9;},'APnLN':_0x57da09(0x9a8)+'n=','Uofar':_0x57da09(0x2d9)+'r=','qpQCn':function(_0x4b349c,_0x27b4d8){return _0x4b349c>_0x27b4d8;},'rnkbj':'CjeOw','FPhLE':_0x57da09(0xcd5)+_0x57da09(0x3ce)+_0x57da09(0xa4d)+'PY\x20TO'+'OK\x20OV'+_0x57da09(0xb3d)+_0x57da09(0x804)+_0x57da09(0xe0a)+'WebMo'+_0x57da09(0x88c)+_0x57da09(0x6c4)+'Runti'+_0x57da09(0xbd3)+'\x20arme'+_0x57da09(0x3f0)+'\x20','SHFWm':function(_0x506caa){return _0x506caa();},'KQvWg':function(_0x5a128a,_0x36090c){return _0x5a128a!==_0x36090c;},'XmfKK':_0x57da09(0x749)+'Look+'+_0x57da09(0xce1)+'is\x20no'+_0x57da09(0x35d)+_0x57da09(0x911)+_0x57da09(0x563)+_0x57da09(0x7b1)+'e','QXmcf':'Compo'+_0x57da09(0x824),'OUspq':function(_0x2f093e,_0x5d50cc){return _0x2f093e!==_0x5d50cc;},'Jlbfp':'no\x20sc'+'ratch'+_0x57da09(0x8b3)+'er','iZBRr':'get_f'+_0x57da09(0xac8)+'fView','hbAbX':function(_0x32a363,_0x55c309){return _0x32a363===_0x55c309;},'pvGLz':function(_0x2028e7,_0x533586){return _0x2028e7(_0x533586);},'IAXVP':_0x57da09(0xdf8)+_0x57da09(0xb10)+'on','XCaiE':function(_0x19b751,_0x4c973f,_0x1a26d4){return _0x19b751(_0x4c973f,_0x1a26d4);},'iYGvX':function(_0xe264df,_0x55eb22,_0x43cf3c){return _0xe264df(_0x55eb22,_0x43cf3c);},'cYFRK':_0x57da09(0xb56)+_0x57da09(0x699),'QcXOl':function(_0x1df87e,_0x163ae8){return _0x1df87e<_0x163ae8;},'aAuJa':_0x57da09(0x986)+'a\x20tra'+_0x57da09(0xabe)+'m','YPZCH':'HudOC','lYyhT':function(_0x4a2bf1,_0x30e361){return _0x4a2bf1+_0x30e361;},'thVvo':'rotat'+'ion\x20u'+'nusab'+'le\x20(|'+_0x57da09(0x96c),'JtbZU':function(_0x2feb60,_0x386a1e){return _0x2feb60*_0x386a1e;},'EZggq':_0x57da09(0x2ca)+'ov\x20on'+'ly','KzfUn':')\x20and'+_0x57da09(0x673)+'ov','WLtdJ':_0x57da09(0xa00),'rZiWY':_0x57da09(0x661),'pNUOy':function(_0x3e8f1e,_0x4db49b,_0x554dba){return _0x3e8f1e(_0x4db49b,_0x554dba);},'GJngh':function(_0x20c924,_0x443511){return _0x20c924<_0x443511;},'USdFF':function(_0x11f07a,_0x4329b4){return _0x11f07a===_0x4329b4;},'EgEPX':function(_0x1179fa,_0x5404ec){return _0x1179fa+_0x5404ec;},'aNspn':'bnLkO','oguXT':function(_0x55d95f,_0x1a3c0b){return _0x55d95f===_0x1a3c0b;},'hmfwt':'kbcCH','LORMV':function(_0x18b765,_0x964ce8){return _0x18b765===_0x964ce8;},'tGAXk':_0x57da09(0x990),'MZbOf':function(_0x502672,_0x3dff69){return _0x502672===_0x3dff69;},'ARheA':function(_0x1ff81f,_0x10e23b){return _0x1ff81f-_0x10e23b;},'hOpWY':function(_0x370b97,_0x235751){return _0x370b97===_0x235751;},'kCdYm':function(_0x4039ca,_0x1d5266){return _0x4039ca>_0x1d5266;},'RqwPA':function(_0x45b75c,_0xa8ab35,_0x5491d4){return _0x45b75c(_0xa8ab35,_0x5491d4);},'WDzds':function(_0x22f28d,_0x3d08b1){return _0x22f28d+_0x3d08b1;},'QtgZz':function(_0x8772f1,_0x964759){return _0x8772f1+_0x964759;},'SYuRL':function(_0x37747a,_0x31b810,_0x3a2556){return _0x37747a(_0x31b810,_0x3a2556);},'hFsXA':function(_0x29c9f4,_0x1a9baf){return _0x29c9f4!==_0x1a9baf;},'fpjIi':function(_0x4a755d,_0x2a1db5){return _0x4a755d(_0x2a1db5);},'YBquD':_0x57da09(0x574)+'float'+'s\x20unr'+_0x57da09(0xda5)+'le','Siguk':_0x57da09(0x8a3)+'\x20','oWihn':'\x20out\x20'+'of\x20ra'+_0x57da09(0xe3a),'wfqVB':_0x57da09(0x8ad)+_0x57da09(0xd2e)+_0x57da09(0x9bd)+'ura-e'+'sp-cv'+'\x22\x20wid'+_0x57da09(0x76d)+_0x57da09(0x576)+_0x57da09(0xc10)+_0x57da09(0xe4b)+'\x22\x20sty'+'le=\x22d'+_0x57da09(0xc19)+'y:blo'+_0x57da09(0x365)+_0x57da09(0x400)+_0x57da09(0x204),'faBxM':function(_0x2e51dc,_0x2fdb81){return _0x2e51dc+_0x2fdb81;},'jgrNZ':'backg'+'round'+':rgba'+'(21,1'+'2,29,'+_0x57da09(0x424)+_0x57da09(0x30b)+'r:1px'+_0x57da09(0x87f)+'d\x20rgb'+_0x57da09(0xbc5)+_0x57da09(0x618)+_0x57da09(0x6cc)+_0x57da09(0xe16)+_0x57da09(0x8c0)+_0x57da09(0x1f7)+_0x57da09(0x3aa)+'x;','znFMg':_0x57da09(0xaac)+'ng:4p'+_0x57da09(0x5af)+'t:10p'+_0x57da09(0x291)+_0x57da09(0xb2e)+_0x57da09(0xcc7)+'ace,C'+_0x57da09(0x24c)+_0x57da09(0x508)+'nospa'+_0x57da09(0x35f)+_0x57da09(0x366)+_0x57da09(0x7cf)+'9;','nRSHB':_0x57da09(0xadf)+_0x57da09(0xc30)+'p-cv','aiNqE':_0x57da09(0xadf)+_0x57da09(0xc30)+_0x57da09(0x402),'HdUsv':_0x57da09(0x35a),'gzPKw':_0x57da09(0x739),'JpHXO':function(_0x3d228f,_0x1a199f){return _0x3d228f/_0x1a199f;},'bccOZ':function(_0x8e531e,_0x2c88c6){return _0x8e531e*_0x2c88c6;},'routL':function(_0x39da37,_0x354770){return _0x39da37*_0x354770;},'gjcxR':function(_0x315d81,_0x13d7b5){return _0x315d81-_0x13d7b5;},'WZLRF':function(_0x34c002,_0x27817a){return _0x34c002-_0x27817a;},'qFdsL':function(_0x18d433,_0x19f49d){return _0x18d433<=_0x19f49d;},'cDLex':function(_0x34ab9b,_0x104015){return _0x34ab9b*_0x104015;},'ahSsu':function(_0x922ff4,_0x2db18f){return _0x922ff4*_0x2db18f;},'Ykmcu':function(_0x37f5cd,_0x462150){return _0x37f5cd/_0x462150;},'HoqPh':function(_0x14ebbb,_0x479b9c){return _0x14ebbb>_0x479b9c;},'DEnJF':function(_0x5ab3e4,_0x599e57){return _0x5ab3e4<_0x599e57;},'EQGUY':function(_0x3eb8ce,_0x14fab5){return _0x3eb8ce*_0x14fab5;},'tFXyr':function(_0x333f00,_0x3a31bf){return _0x333f00-_0x3a31bf;},'xVbRu':'ITTdQ','IfLZC':_0x57da09(0x6ca)+_0x57da09(0x56a),'KUHQj':function(_0x2a3322,_0x78aa82){return _0x2a3322+_0x78aa82;},'gCNIs':function(_0x548695,_0x395eac,_0xd03d1){return _0x548695(_0x395eac,_0xd03d1);},'FOrBA':_0x57da09(0x9c7)+_0x57da09(0x876),'EpclD':function(_0x375fa6,_0x5f35ba){return _0x375fa6/_0x5f35ba;},'BqOmh':function(_0x4c4bd,_0x3350e1){return _0x4c4bd*_0x3350e1;},'RNMQh':_0x57da09(0x729),'mkCbX':_0x57da09(0x78c)+'check'+'ed','bmNvW':function(_0x3d4734,_0x17a1d9){return _0x3d4734(_0x17a1d9);},'xgoii':function(_0xcd4e60){return _0xcd4e60();},'oGSZJ':'butto'+'n','kYJYt':'sk-sw'+'itch','oBiCr':function(_0x48ecca){return _0x48ecca();},'oSWyP':function(_0xd83303,_0x26f983){return _0xd83303(_0x26f983);},'rCyyi':'sk-ra'+_0x57da09(0xe3a),'IOeFW':_0x57da09(0xb30),'jQuEl':function(_0x5cac98,_0x45406){return _0x5cac98(_0x45406);},'gxSob':function(_0x293f04,_0x8b1a73,_0x5d3e18){return _0x293f04(_0x8b1a73,_0x5d3e18);},'qsMlJ':function(_0x24a068,_0x13a979){return _0x24a068+_0x13a979;},'ecNPq':'<span'+'\x20clas'+_0x57da09(0x803)+_0x57da09(0x84e)+'\x27>','IZNRz':_0x57da09(0x8e5)+_0x57da09(0x3a5)+_0x57da09(0x956)+_0x57da09(0x423)+_0x57da09(0x75d)+'\x20but\x20'+_0x57da09(0x485)+_0x57da09(0x8f4)+_0x57da09(0xaf3)+_0x57da09(0x98c)+_0x57da09(0x723)+_0x57da09(0x32c),'zYUTN':function(_0x4d7060,_0x151fb2){return _0x4d7060/_0x151fb2;},'AhKlG':function(_0x27b76f,_0x4a3094){return _0x27b76f===_0x4a3094;},'SIuIn':_0x57da09(0xa3e),'pccxH':function(_0x14c06e,_0x3c2a58,_0x30884c){return _0x14c06e(_0x3c2a58,_0x30884c);},'eGCux':'ajrZT','GXtyk':function(_0x4d05d7,_0x152cf1){return _0x4d05d7*_0x152cf1;},'hZUEW':function(_0x4624f8,_0x4092fb){return _0x4624f8!==_0x4092fb;},'eqFzP':'Clfjl','TdcNJ':'mnHJP','MYsUy':_0x57da09(0x7d0)+_0x57da09(0x65b)+_0x57da09(0x51a)+_0x57da09(0x232)+_0x57da09(0x70a)+_0x57da09(0x804)+'Unity'+'WebMo'+'dkit.'+_0x57da09(0xa36)+_0x57da09(0xd23)+'the\x20p'+_0x57da09(0x269)+_0x57da09(0x950)+'built'+'\x20','LWCxq':function(_0xefbf1,_0x1e3602){return _0xefbf1+_0x1e3602;},'ALBPa':_0x57da09(0xdce),'fSlOg':'jttNs','vJbhO':'true','zRhXE':_0x57da09(0x4a8),'SNyiI':function(_0x86dd4c,_0x336e1e){return _0x86dd4c===_0x336e1e;},'yQIDJ':_0x57da09(0xd5a)+'esc','qcLsY':function(_0x262109,_0x492917){return _0x262109+_0x492917;},'JdbXm':function(_0x4a8ab9,_0xf9363c){return _0x4a8ab9+_0xf9363c;},'uLwWu':function(_0x46e881,_0x1061b4){return _0x46e881+_0x1061b4;},'aJKTv':function(_0x80a36,_0x4b5d0b,_0x412b18){return _0x80a36(_0x4b5d0b,_0x412b18);},'iLrAF':_0x57da09(0xb24)+_0x57da09(0x3f1),'TPYjQ':'sk-no'+'te','aodXk':_0x57da09(0xa68)+_0x57da09(0x695),'Jtjjz':_0x57da09(0x88b)+_0x57da09(0xaa0),'zRiny':function(_0x145200,_0x13c756,_0x1c8877){return _0x145200(_0x13c756,_0x1c8877);},'Lbqmm':_0x57da09(0x374),'MLDdM':_0x57da09(0x9b7),'ezaWM':_0x57da09(0xac6),'rSJfJ':function(_0x57ba2b,_0x54fa41){return _0x57ba2b+_0x54fa41;},'ikYpA':_0x57da09(0xe1e)+'rawin'+_0x57da09(0x847),'AEqeh':_0x57da09(0x75a)+'ese\x20t'+'wo\x20fl'+_0x57da09(0x712)+'are\x20n'+_0x57da09(0x790)+_0x57da09(0x49c)+_0x57da09(0x220)+_0x57da09(0x84f)+_0x57da09(0x69f)+_0x57da09(0x780)+_0x57da09(0x7d9)+'out\x209'+_0x57da09(0x6b7)+_0x57da09(0x3bf)+_0x57da09(0xb76),'MSSAP':_0x57da09(0x4aa)+'\x20of\x20v'+_0x57da09(0x252)+'s\x20','tjibN':'°,\x20ou'+'tside'+_0x57da09(0x290)+_0x57da09(0x67a)+'band.'+_0x57da09(0xc3d)+'t\x20it\x20'+'below'+'.','hAKfy':'Scree'+'n-spa'+'ce\x20bo'+_0x57da09(0x518)+_0x57da09(0x5f0)+_0x57da09(0x6dd)+_0x57da09(0x253)+_0x57da09(0x59e)+'nnot\x20'+_0x57da09(0x4a0)+_0x57da09(0x551)+_0x57da09(0xcc3)+_0x57da09(0xdca)+_0x57da09(0xb18)+'so\x20it'+'\x20is\x20f'+'itted'+_0x57da09(0xd04)+_0x57da09(0x891),'OdDaO':function(_0x108c0e,_0x3c82de,_0x67f78a,_0x3dfcb0,_0x142dba,_0x249fe0){return _0x108c0e(_0x3c82de,_0x67f78a,_0x3dfcb0,_0x142dba,_0x249fe0);},'AxizU':function(_0x184302,_0x7f5b8,_0x1e55be){return _0x184302(_0x7f5b8,_0x1e55be);},'vhfvT':_0x57da09(0x4aa)+'\x20of\x20v'+_0x57da09(0xd3c),'AfcDG':function(_0x1c290a,_0x4ce78f,_0x53c90d){return _0x1c290a(_0x4ce78f,_0x53c90d);},'iDJZr':_0x57da09(0x4db)+'n','nTFTB':function(_0x5e69c5,_0x20b7ad){return _0x5e69c5+_0x20b7ad;},'qQrgw':function(_0xef8019,_0x349deb){return _0xef8019+_0x349deb;},'wKYlg':'no\x20Mo'+_0x57da09(0x6e9)+_0x57da09(0xce5)+'t','nOWjj':function(_0x3d0ed2,_0x21f83a){return _0x3d0ed2+_0x21f83a;},'AHNKu':_0x57da09(0x8e1)+_0x57da09(0x2bb)+'okAng'+_0x57da09(0x7e3),'yxgOi':function(_0x89cd35,_0x2851f4){return _0x89cd35+_0x2851f4;},'OMekU':'\x0apitc'+'h\x20','DNpai':_0x57da09(0x41c)+_0x57da09(0xd9f)+_0x57da09(0x490)+_0x57da09(0x7eb)+'\x20offs'+_0x57da09(0x3cd)+'0x28\x20'+'and\x20+'+'0x1C\x0a'+'the\x20a'+'ngle\x20'+'hooks'+_0x57da09(0xb6f)+'\x20not\x20'+'fired'+_0x57da09(0xa8a),'fDYNa':function(_0x49c781,_0x13131e){return _0x49c781>_0x13131e;},'KfgEU':_0x57da09(0x373)+'s\x20reg'+_0x57da09(0x4c9)+_0x57da09(0xd87)+'t\x20non'+_0x57da09(0xda3)+_0x57da09(0x2c6)+'(','bjBGF':_0x57da09(0x295)+_0x57da09(0x525),'REAyM':function(_0x4177c9,_0x56a61e){return _0x4177c9===_0x56a61e;},'RMFNh':function(_0x5e4b88,_0x1542d0){return _0x5e4b88+_0x1542d0;},'lYuKr':_0x57da09(0xdd6),'wtyrk':_0x57da09(0x637)+'ON','EzMlv':'Hooks','jyCYr':_0x57da09(0xd52),'ULURp':'Camer'+'a','FiqWP':_0x57da09(0xd9d),'bhlTT':'right','nvqGr':_0x57da09(0x89d)+'on','kHhMc':_0x57da09(0x45c)+'r','BhQgs':function(_0x294964,_0x423825){return _0x294964+_0x423825;},'iDGfc':_0x57da09(0x844)+_0x57da09(0xb9f)+_0x57da09(0x481),'qSLxB':_0x57da09(0x6d0)+'heigh'+'t','VtnwI':'0x11C','psfxI':'Healt'+'h','rZqgm':function(_0x493796,_0x28cef7,_0x477df2){return _0x493796(_0x28cef7,_0x477df2);},'jvnJB':_0x57da09(0x76c),'JEcnR':_0x57da09(0x37c)+'e','RWydx':function(_0x393f07,_0x231316,_0x25b0ae){return _0x393f07(_0x231316,_0x25b0ae);},'PtbLs':'Paste'+_0x57da09(0x290)+'whole'+_0x57da09(0x7b4)+_0x57da09(0x91f)+'n\x20som'+_0x57da09(0xb02)+_0x57da09(0x450)+'ks\x20wr'+'ong.','kaCsg':function(_0x2a7d62,_0x15d3bc){return _0x2a7d62===_0x15d3bc;},'YTwzA':'qIdKZ','jTCHR':'VzsLZ','nvKzu':function(_0x24dffa,_0x56db88){return _0x24dffa+_0x56db88;},'HNKvF':'24px','BWUPV':'8|4|2'+_0x57da09(0x979)+'7|6|3'+_0x57da09(0x237),'eDsLG':function(_0x5c52e8,_0x11cf83){return _0x5c52e8-_0x11cf83;},'iJmQR':function(_0x3966ce,_0x3a0bf0){return _0x3966ce-_0x3a0bf0;},'mQEYJ':function(_0x47ffad,_0xa58fde){return _0x47ffad+_0xa58fde;},'oCKpq':_0x57da09(0x453)+'d','HxUgs':_0x57da09(0xd2a),'RMUuy':function(_0x1bd8d5){return _0x1bd8d5();},'WCSqy':function(_0x4a24b9,_0x57fba8){return _0x4a24b9+_0x57fba8;},'ihGtG':_0x57da09(0x73c)+'down','bjHni':_0x57da09(0x73c)+_0x57da09(0xa84),'xlHAT':_0x57da09(0x9e3)+_0x57da09(0x8f5),'EsWyM':_0x57da09(0x9e3)+_0x57da09(0xa84),'qYLsv':_0x57da09(0x877),'wGTde':function(_0x3faebb,_0x24739e){return _0x3faebb(_0x24739e);},'ccQnv':function(_0x38da49,_0x1fee7b){return _0x38da49===_0x1fee7b;},'bkGMN':_0x57da09(0x21d),'KViOc':'sakur'+_0x57da09(0x85e)+_0x57da09(0x78f)+'t','bbezl':_0x57da09(0x34a)+_0x57da09(0xd03),'TEnjo':function(_0x5e1f4c,_0x1778cd,_0x527d8c,_0x211d79){return _0x5e1f4c(_0x1778cd,_0x527d8c,_0x211d79);},'WeLak':_0x57da09(0x3e7)+'ose','SmMIs':_0x57da09(0x83c)+_0x57da09(0x42c)+'ox=\x220'+_0x57da09(0xb49)+'\x2024\x22>'+_0x57da09(0x396)+_0x57da09(0x41b)+_0x57da09(0x704)+'2\x2012M'+_0x57da09(0xd2f)+_0x57da09(0xdae)+_0x57da09(0x72e)+'vg>','OyAbL':function(_0x1d8836){return _0x1d8836();},'lPvfz':function(_0x2590c5,_0x4b193c){return _0x2590c5!==_0x4b193c;},'LwJhy':'wPaqK','qagVl':_0x57da09(0xb29),'EyJgd':function(_0x482f37,_0x3ab494){return _0x482f37===_0x3ab494;},'tOQzm':_0x57da09(0x56d),'DkrIt':_0x57da09(0x8cd),'pjWgC':'souRx','YmrXQ':function(_0x31ce0b,_0x25dede){return _0x31ce0b<_0x25dede;},'oWXgf':function(_0x33f871,_0x16b92c){return _0x33f871+_0x16b92c;},'eBrvT':function(_0x25efc6,_0x11b713,_0x6ece05){return _0x25efc6(_0x11b713,_0x6ece05);},'iXemi':_0x57da09(0x6d7),'MqAuC':function(_0x3beea2,_0x45a02a){return _0x3beea2+_0x45a02a;},'UpiFi':function(_0xbcae5b,_0x5d0b2b){return _0xbcae5b+_0x5d0b2b;},'YIwou':'\x20\x20·\x20\x20'+'hooks'+'\x20','OJTlP':_0x57da09(0xa32)+'heap\x20','KMzzj':function(_0x30356c,_0x5c4c1f){return _0x30356c/_0x5c4c1f;},'ORBln':_0x57da09(0xa0d)+_0x57da09(0x8be),'SSpGo':_0x57da09(0x9f0)+'\x20','nJOMK':_0x57da09(0xc53)+_0x57da09(0x73f)+_0x57da09(0xa69)+'nc','mBLOt':function(_0x4d3992,_0x20eeea){return _0x4d3992+_0x20eeea;},'ZVQGc':function(_0x5104d1,_0x1d0d12){return _0x5104d1===_0x1d0d12;},'YgfQY':'gfglT','yRgaf':_0x57da09(0xd01)+'l','HkFDe':function(_0x22421a,_0x792d52,_0x351d21){return _0x22421a(_0x792d52,_0x351d21);},'exxHK':function(_0x4fdf8e,_0x599d32,_0x15c880){return _0x4fdf8e(_0x599d32,_0x15c880);},'UVCDV':function(_0x35c8df,_0x30d9b0){return _0x35c8df+_0x30d9b0;},'mtjWa':function(_0x331ff0,_0x2faec7,_0x3e3893){return _0x331ff0(_0x2faec7,_0x3e3893);},'hvtTo':function(_0x539dcd){return _0x539dcd();},'FSwyC':function(_0x4f4e77){return _0x4f4e77();},'YlFaB':_0x57da09(0x781)+_0x57da09(0xd7b)+'es','BsVPU':function(_0x364f59,_0xfe519a){return _0x364f59!==_0xfe519a;},'stGHv':function(_0x11faa0,_0x478dea){return _0x11faa0!==_0x478dea;},'APmzm':function(_0x3383c4,_0x1c3990){return _0x3383c4<_0x1c3990;},'gsIRN':'jIdEz','JmUDJ':function(_0x4a9d98,_0x503ba4){return _0x4a9d98+_0x503ba4;},'YctEM':function(_0x613ab2,_0x47275c){return _0x613ab2+_0x47275c;},'QqQtR':function(_0x5b50b6,_0x4d5fbe){return _0x5b50b6+_0x4d5fbe;},'ugavA':function(_0x47593b,_0x261895){return _0x47593b<_0x261895;},'ECnQv':function(_0x139de2,_0xf7a3cb){return _0x139de2+_0xf7a3cb;},'qaBqr':function(_0xc430f3,_0x32842e){return _0xc430f3*_0x32842e;},'VZHOH':function(_0x3095cb,_0x4e3ea5){return _0x3095cb*_0x4e3ea5;},'VyJoE':function(_0x5411f1,_0x3127e5){return _0x5411f1<_0x3127e5;},'EErKn':function(_0x3e4688,_0x44f8ed){return _0x3e4688!==_0x44f8ed;},'tGULq':'yxMcH','poKQA':function(_0x4457f0,_0x2f5b4e){return _0x4457f0*_0x2f5b4e;},'mpSxw':function(_0x539159,_0x23e114){return _0x539159*_0x23e114;},'EypdE':_0x57da09(0x8d0),'SskiJ':'tqDll','bWHuG':function(_0x18f346,_0x53a3fa){return _0x18f346!==_0x53a3fa;},'RApoG':'xIysb','RKmIb':'EcWYr','eYFrj':function(_0x22fb03,_0x2ad067){return _0x22fb03-_0x2ad067;},'gbUcx':function(_0x4d1d70,_0x4fbaa1){return _0x4d1d70+_0x4fbaa1;},'RKzUu':_0x57da09(0x6bc),'OTSzy':'\x20|\x20','uDTLs':function(_0x27c121,_0xb9dd9f,_0xb186fa){return _0x27c121(_0xb9dd9f,_0xb186fa);},'tvmmq':function(_0x2d6f26,_0x1b4328,_0x1eea79,_0x421623){return _0x2d6f26(_0x1b4328,_0x1eea79,_0x421623);},'ipfft':function(_0x572d70,_0x417b03){return _0x572d70+_0x417b03;},'whSSS':function(_0x9cdaea,_0x229bc9){return _0x9cdaea+_0x229bc9;},'Tdfon':function(_0x531319,_0x308bfc){return _0x531319<_0x308bfc;},'Rucfm':function(_0x255034,_0x444121,_0x927204,_0x3f48e5){return _0x255034(_0x444121,_0x927204,_0x3f48e5);},'JALiA':function(_0x5a6769,_0x207ff2){return _0x5a6769+_0x207ff2;},'tvSgt':function(_0x32b60a,_0x4cfd3b){return _0x32b60a*_0x4cfd3b;},'GZOIQ':function(_0x592439,_0x55824d){return _0x592439+_0x55824d;},'ttgCJ':'void','kinBr':function(_0xf278ee,_0x2b375e){return _0xf278ee!==_0x2b375e;},'webzW':_0x57da09(0xaf0),'vrGRn':'jHAGZ','kfnGV':function(_0x4fd94d,_0x120880){return _0x4fd94d+_0x120880;},'ZgNHI':'posit'+_0x57da09(0x2f7)+_0x57da09(0x6cd)+'left:'+'0;top'+':0;z-'+_0x57da09(0x75d)+_0x57da09(0xafc)+_0x57da09(0x3c9)+_0x57da09(0x3dc)+'nter-'+_0x57da09(0x547)+_0x57da09(0x1f4)+'e;','havtp':'JgRqS','WXjPY':function(_0x2d4ff0){return _0x2d4ff0();},'YtBpG':function(_0x53ba89,_0x410c30){return _0x53ba89!==_0x410c30;},'CBYjx':function(_0xfffab1,_0x480419){return _0xfffab1/_0x480419;},'hMwml':function(_0x1eb838,_0x52b734){return _0x1eb838!==_0x52b734;},'GtfTu':function(_0x21a3a7,_0x5216f6){return _0x21a3a7*_0x5216f6;},'lqinD':_0x57da09(0x6d1),'fGiGa':function(_0x2d494b,_0x5f1a94){return _0x2d494b*_0x5f1a94;},'qdMNu':function(_0x15d322,_0x29f251){return _0x15d322*_0x29f251;},'HexAs':function(_0x1899a1,_0x51fb8d){return _0x1899a1/_0x51fb8d;},'fBheT':function(_0x3c654a,_0x25c080){return _0x3c654a*_0x25c080;},'RlwSq':function(_0x35dab9,_0x3f188d){return _0x35dab9===_0x3f188d;},'HqcNg':function(_0x18accf,_0x1ffa2b){return _0x18accf/_0x1ffa2b;},'SaGyD':_0x57da09(0x854),'oglBU':function(_0x464ac2,_0x44efef){return _0x464ac2/_0x44efef;},'NvZvG':function(_0xb8234f,_0x2d9e4e){return _0xb8234f*_0x2d9e4e;},'lbXhz':function(_0x315dbd,_0x3ca0d9){return _0x315dbd*_0x3ca0d9;},'tpSwE':function(_0x2d09b8,_0x2f2c48){return _0x2d09b8*_0x2f2c48;},'EQLVz':function(_0x2a87ab,_0x2e2bdb){return _0x2a87ab!==_0x2e2bdb;},'fDfRx':_0x57da09(0xba5),'ZMNhj':function(_0x47d382,_0x50b981,_0x43d9ed,_0xf673d1){return _0x47d382(_0x50b981,_0x43d9ed,_0xf673d1);},'asRth':function(_0x44cee1,_0x5292fb){return _0x44cee1===_0x5292fb;},'zzDyX':function(_0x313e29,_0x3206b1){return _0x313e29===_0x3206b1;},'kRlOv':function(_0x3a9c58,_0x6989f6){return _0x3a9c58+_0x6989f6;},'lXEqQ':function(_0x23f731,_0x154a14){return _0x23f731!==_0x154a14;},'nOFLL':function(_0x51d1c2,_0x167b3b,_0x78c08d,_0xee3270,_0x344827){return _0x51d1c2(_0x167b3b,_0x78c08d,_0xee3270,_0x344827);},'BgdmI':function(_0x1a5a5e,_0x110c37){return _0x1a5a5e>_0x110c37;},'OdbUI':_0x57da09(0xe46)+_0x57da09(0x6b9)+_0x57da09(0xa6a)+_0x57da09(0x84c),'vCnGo':function(_0x176da5,_0x5f2614){return _0x176da5/_0x5f2614;},'twLpD':function(_0x24a629,_0x2d4e8f){return _0x24a629-_0x2d4e8f;},'dxSwc':_0x57da09(0x3cf)+'ui-mo'+'nospa'+'ce,Co'+_0x57da09(0xe35)+_0x57da09(0x8a1)+_0x57da09(0x8cf)+'e','jCEFu':function(_0x382249,_0x24b85a){return _0x382249/_0x24b85a;},'kyZpB':function(_0x4678bd,_0x44eb02){return _0x4678bd-_0x44eb02;},'FeYqx':_0x57da09(0xd4a)+_0x57da09(0x227)+_0x57da09(0x3c5),'lNCDP':function(_0x2fa4ff,_0x1fe08e){return _0x2fa4ff(_0x1fe08e);},'YUqxk':function(_0x155366){return _0x155366();},'vXLHJ':'pXalW','voGdw':function(_0x598643,_0x46d37c){return _0x598643/_0x46d37c;},'UgUJb':_0x57da09(0xe46)+'255,1'+_0x57da09(0xa47)+_0x57da09(0xc5b)+')','MNVfI':_0x57da09(0x9ae),'dIJDN':function(_0x16d7b9,_0xf25bea){return _0x16d7b9+_0xf25bea;},'AsIfz':function(_0x2b08c0,_0x31ecc3){return _0x2b08c0*_0x31ecc3;},'WjuAC':function(_0x3da05a,_0x6472fb){return _0x3da05a-_0x6472fb;},'kdBMr':function(_0xddafd4,_0x4d7ec7){return _0xddafd4!==_0x4d7ec7;},'UNnoA':'jQJts','jdQBY':function(_0x4eb537,_0x3bee00){return _0x4eb537*_0x3bee00;},'iaqUl':function(_0x26149a,_0x277275){return _0x26149a*_0x277275;},'GwmMR':function(_0xfb3828,_0x47a02e){return _0xfb3828+_0x47a02e;},'HlcIu':'#4f8f'+'6a','AQXru':_0x57da09(0x50b),'ChmRb':function(_0x34be88,_0x352877){return _0x34be88+_0x352877;},'RYFCo':function(_0x64c191,_0x36205b){return _0x64c191===_0x36205b;},'HyVec':'MmfLO','yNSOW':function(_0x2c2212,_0x32f792){return _0x2c2212||_0x32f792;},'wktPi':function(_0x51b7ac,_0x5b89dc){return _0x51b7ac!==_0x5b89dc;},'VEVPe':_0x57da09(0x57c),'CnRbs':function(_0x3f2326,_0x1cf566){return _0x3f2326===_0x1cf566;},'wBRyO':function(_0x29591e,_0x5d60fe){return _0x29591e(_0x5d60fe);},'AExsJ':function(_0x4403df){return _0x4403df();},'FXrDy':function(_0x19a50f){return _0x19a50f();},'dYcBz':function(_0x564bc9,_0x5ab5b7){return _0x564bc9<_0x5ab5b7;},'FbgrD':function(_0x461780,_0x493a45){return _0x461780===_0x493a45;},'Fhypf':'gvpff','HDLdF':function(_0x53d0a3,_0x34f4dd){return _0x53d0a3*_0x34f4dd;},'GEVtS':function(_0x357931,_0x844c1e){return _0x357931+_0x844c1e;},'vPVUS':function(_0x322066,_0x15d6de){return _0x322066===_0x15d6de;},'AEqXq':_0x57da09(0x4bd),'RoIdK':function(_0x56621e,_0x419405){return _0x56621e+_0x419405;},'NrAlx':function(_0x2b774f,_0x45c6e8){return _0x2b774f/_0x45c6e8;},'goPhZ':_0x57da09(0xc47)+_0x57da09(0x7ad)+'s)','ElpcP':function(_0x18f5b2){return _0x18f5b2();},'iwgoE':function(_0x41d048,_0x4efb78){return _0x41d048+_0x4efb78;},'LFZFS':function(_0x34702c,_0x32aa3){return _0x34702c(_0x32aa3);},'aFxwB':function(_0x621201){return _0x621201();},'FjIfF':'SyWBM','XyLRS':function(_0x327ad3){return _0x327ad3();},'JogYA':_0x57da09(0x88d)+_0x57da09(0x5bb)+'led:\x20','rqQcN':function(_0x14b947,_0x24cfa4){return _0x14b947+_0x24cfa4;},'tfvCN':_0x57da09(0x562)+'ct(s)'+_0x57da09(0x6a3)+'read\x20'+'0\x20fie'+'lds.\x20','NqWFU':_0x57da09(0x841)+'ad\x20fa'+'iled,'+'\x20so\x20e'+'very\x20'+'offse'+_0x57da09(0x6f4)+'\x20skip'+_0x57da09(0x7c5)+_0x57da09(0x4b4)+'e.','xXLGs':function(_0x3fc69c,_0x8296c7){return _0x3fc69c+_0x8296c7;},'MHNwO':function(_0x47b684,_0xe3cc74){return _0x47b684+_0xe3cc74;},'tnEqt':_0x57da09(0xe58)+_0x57da09(0x999),'jwCcB':function(_0x5832b8,_0x79a9fb){return _0x5832b8+_0x79a9fb;},'MPILQ':_0x57da09(0x4fb)+_0x57da09(0xb28)+'tyWeb'+_0x57da09(0x3bb)+_0x57da09(0x82f)+_0x57da09(0xb2f)+_0x57da09(0x380)+'is\x20mi'+'ssing'+_0x57da09(0x922)+'pture'+'\x20is\x20r'+'unnin'+_0x57da09(0x3b2)+'nd.','ahsFz':function(_0x4a125c,_0x5d22c4){return _0x4a125c>_0x5d22c4;},'ojLff':_0x57da09(0x8aa),'kpiQu':function(_0x4ed34a,_0x3146ce){return _0x4ed34a+_0x3146ce;},'byjsW':function(_0x234a59,_0x432e65){return _0x234a59+_0x432e65;},'RkkPx':'\x20hook'+'s\x20wer'+'e\x20eve'+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+'\x20The\x20'+_0x57da09(0x8ea)+'\x20pass'+'\x20','MMUom':_0x57da09(0xc33)+_0x57da09(0x2e1)+_0x57da09(0x278)+_0x57da09(0x24b)+_0x57da09(0xafb)+_0x57da09(0xc14)+_0x57da09(0x640)+_0x57da09(0x9aa)+_0x57da09(0x3e5)+_0x57da09(0xdc5)+_0x57da09(0x623)+'plugi'+_0x57da09(0x7dd)+_0x57da09(0x8ae)+'ngth,'+'\x20','jhBmN':'so\x20ho'+_0x57da09(0x836)+_0x57da09(0x748)+'ered\x20'+_0x57da09(0xab6)+'\x20it\x20a'+_0x57da09(0x624)+_0x57da09(0x765)+'\x20for\x20'+_0x57da09(0xdf7)+_0x57da09(0x293)+'f\x20the'+_0x57da09(0xd55)+'.\x20','ETIbA':'Regis'+'tered'+'\x20','YviYf':_0x57da09(0x996)+'resol'+'ved\x20','uuKOZ':_0x57da09(0xab5),'aLOhy':'Eithe'+'r\x20you'+'\x20are\x20'+_0x57da09(0x43f)+_0x57da09(0x4a6)+_0x57da09(0x5d9)+_0x57da09(0x556)+_0x57da09(0xce4)+'ok\x20is'+'\x20on\x20t'+'he\x20wr'+'ong\x20o'+_0x57da09(0x8af)+_0x57da09(0x2c1),'PKWLT':function(_0x1622c6,_0xc00bf4){return _0x1622c6+_0xc00bf4;},'svXIW':'rebui'+_0x57da09(0x71e)+'nce\x20f'+_0x57da09(0x1e9)+_0x57da09(0xd25)+'re\x20(r'+_0x57da09(0x971)+_0x57da09(0xb1b),'Bqdmg':function(_0x2a4660,_0x264dfc){return _0x2a4660+_0x264dfc;},'NPbjp':function(_0x268c18,_0x35641c){return _0x268c18===_0x35641c;},'hCxdg':function(_0x177002,_0x1a9712){return _0x177002!==_0x1a9712;},'PjzyC':_0x57da09(0x862),'JEQxl':function(_0x58fc1b){return _0x58fc1b();},'IqzNe':_0x57da09(0x615),'yjXFW':_0x57da09(0x80c),'LUxaD':_0x57da09(0x3a1),'hfVzw':function(_0x328365,_0x35a398,_0x27fca4){return _0x328365(_0x35a398,_0x27fca4);},'slIuv':function(_0x22a27c){return _0x22a27c();},'kBirA':'porta'+'l','dXXoT':'wrapp'+'er','rCTZN':_0x57da09(0xe07)+'r','hIeuP':_0x57da09(0x8c8)+_0x57da09(0x549)+_0x57da09(0x3cb)+_0x57da09(0xba8)+'END=='+'=','IpBKs':';font'+'-weig'+_0x57da09(0x219)+'0','nvZII':'sakur'+_0x57da09(0x5d1)+_0x57da09(0x834)+_0x57da09(0xd3f)+'en','vYdke':_0x57da09(0x2e3)+'ge','qcuSK':function(_0x140056,_0x445c06){return _0x140056+_0x445c06;},'ffKGR':_0x57da09(0xcf8)+'\u0086\u008f\u0089\u0095\u0090'+'\u0094','itPuA':'\u0094\u0090\u0089\u008f\u0089'+_0x57da09(0xd29)+'\u008e','GNjsc':_0x57da09(0x8c4)+_0x57da09(0xd2b)+'\u0092','cLylT':_0x57da09(0xd88)+_0x57da09(0xcdf)+'\u0095','zBjrm':_0x57da09(0xb44)+_0x57da09(0xb74)+'\u0095','xywsA':'\u0091\u008f\u0088\u0086\u0091'+_0x57da09(0x47f)+'\u0090','IZLJu':_0x57da09(0x2e8)+_0x57da09(0x537)+'\u008a','XBERt':_0x57da09(0x58b)+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','OEDvn':_0x57da09(0x458),'spOCD':_0x57da09(0x523)+'\u0087\u0092\u0088\u0088\u008c'+'\u0088','mqrLO':_0x57da09(0x993)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','dMbCl':_0x57da09(0xbb7)+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','qHExq':'\u0090\u0093\u0091\u0091\u008b'+_0x57da09(0x516)+'\u0092','dIVaX':_0x57da09(0x819),'jQnoA':'\u0095\u0092\u0088\u0087\u0092'+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','TIjxY':_0x57da09(0x94c)+_0x57da09(0x90e)+'\u008a','LUhqW':_0x57da09(0x330)+_0x57da09(0x642)+'\u0087','BTUQn':_0x57da09(0x43c)+_0x57da09(0xc62)+'\u0093','WYUng':_0x57da09(0x5da)+_0x57da09(0xd34)+'\u008a','dPwqF':_0x57da09(0x44b)+_0x57da09(0x24d)+'\u0094','IsuNG':_0x57da09(0xc72)+_0x57da09(0x39d)+'\u0095','uDVpJ':'\u0086\u0095\u008b\u0086\u0091'+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','KvXzN':_0x57da09(0xa08)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','VTBxc':_0x57da09(0x55b)+_0x57da09(0xa35)+'\u0089','CBLwK':_0x57da09(0x9a6)+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','odNxt':_0x57da09(0x828)+'\u0091\u0088\u0092\u008d\u0087'+'\u0094','zxLHc':'\u008f\u0092\u008d\u008d\u0089'+'\u008a\u0089\u008e\u008d\u008d'+'\u0086','EfKtP':_0x57da09(0xdcc)+_0x57da09(0x212)+'\u008b','Czofm':_0x57da09(0x26c)+_0x57da09(0x514)+'\u008c','CeAOE':_0x57da09(0x2aa)+_0x57da09(0x59a)+'\u0091','mfkIp':'\u0087\u008b\u0088\u0090\u008e'+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','wXERD':'\u0093\u0086\u0088\u008d\u008f'+'\u0094\u0087\u008c\u0091\u008a'+'\u0094','ABJKl':_0x57da09(0xc1e)+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','ZXxTj':'\u0092\u008c\u0089\u008a\u0093'+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','Dijhr':'\u0094\u008d\u0087\u0094\u008d'+_0x57da09(0x4d9)+'\u0094','uhxZc':'\u008e\u008b\u0095\u0092\u008e'+_0x57da09(0x5a7)+'\u0086','ZEXMZ':'\u0088\u0091\u0095\u008a\u0087'+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','UvLib':_0x57da09(0xd90)+_0x57da09(0xb62)+'\u008b','ZtSxo':_0x57da09(0x72c)+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','AlwJC':'\u0086\u0092\u0092\u008a\u008e'+_0x57da09(0x2b3)+'\u0087','ZzJmW':_0x57da09(0xb43)+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','GjXpc':_0x57da09(0xc3a)+'\u0094\u008a\u0092\u0087\u0092'+'\u0086','cuUxU':_0x57da09(0x581)+'\u008a\u0093\u0090\u0086\u008c'+'\u008b','WlcIl':_0x57da09(0x2f6)+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','LFYvu':'\u0094\u0090\u0095\u0092\u008e'+'\u0093\u0088\u0093\u0088\u0095'+'\u008f','ekJMT':'\u008d\u008c\u0086\u0094\u008d'+_0x57da09(0x775)+'\u008c','rNFsi':_0x57da09(0x569)+_0x57da09(0x83d)+'\u008a','owjWt':'\u0094\u0090\u0089\u008c\u008e'+_0x57da09(0x20c)+'\u0089','eyzrJ':_0x57da09(0x643),'eIyIZ':_0x57da09(0x7ed)+'\u0094\u008b\u0086\u008a\u008e'+'\u0086','rdCQE':'\u008d\u008f\u0086\u0092\u008c'+_0x57da09(0x77b)+'\u0087','JFdij':_0x57da09(0x955)+'\u0089\u008c\u008d\u008b\u008f'+'\u0093','LTlYK':_0x57da09(0x76b)+_0x57da09(0x2dc),'igdUh':_0x57da09(0x558)+_0x57da09(0xb08)+'\u0091','wbRHz':_0x57da09(0xd48)+_0x57da09(0xcca)+'\u0089','osKgT':'\u0086\u0090\u0086\u008c\u0090'+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','orNyo':_0x57da09(0x6f8)+_0x57da09(0x7e7)+'\u008e','MaZqE':_0x57da09(0xe02)+_0x57da09(0xb41)+'\u008c','QDPrS':_0x57da09(0xc06)+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','dTxsD':_0x57da09(0x321)+'licat'+_0x57da09(0xc0c)+'cus','AAhyI':'\u008f\u008c\u0086\u0087\u008e'+_0x57da09(0x33b)+'\u0095','snbEk':_0x57da09(0x4d7)+_0x57da09(0x4ae)+'\u008f','bUSvR':'\u0095\u008e\u008f\u008b\u008d'+'\u008f\u0095\u0089\u008e\u008b'+'\u0094','FGQVU':'Awake','ZIvrh':_0x57da09(0x883)+_0x57da09(0x465)+'\u0088','GMgaM':_0x57da09(0xc84)+_0x57da09(0xb52)+'\u0095','BWawF':_0x57da09(0xb54)+_0x57da09(0x69c)+'\u0086','woyPS':_0x57da09(0x813)+_0x57da09(0x72d)+'\u008e','vdwOG':_0x57da09(0xd41)+'nMana'+_0x57da09(0x542),'VoUAP':'TDM_G'+'ameMa'+_0x57da09(0x266),'CAshi':_0x57da09(0x3f2)+'rkPla'+_0x57da09(0x3c6)+_0x57da09(0x4e3)+_0x57da09(0xced),'tYPFO':'Enemy'+_0x57da09(0xd17),'UICaM':_0x57da09(0xafb)+_0x57da09(0x53f)+_0x57da09(0xd45)+'-firs'+_0x57da09(0x41a)+_0x57da09(0x429),'ECPZv':_0x57da09(0xdcf)+'loCha'+'racte'+_0x57da09(0xc25)+'rolle'+'r.dll','lKsiB':'0x10','aWYNk':'0x24','FxrnJ':'0x28','AvZrt':_0x57da09(0x4c5),'ochGo':_0x57da09(0x73c)+_0x57da09(0xcf9),'aRkvE':_0x57da09(0x7f1)+'le','xHFwL':_0x57da09(0xa97),'fVVFl':_0x57da09(0x267),'vWKSJ':'0xd0','YIFuR':_0x57da09(0x2ad)+'h','DcVoj':_0x57da09(0xb83)+_0x57da09(0xb5a)+_0x57da09(0x601),'TliQq':_0x57da09(0x8cb)+_0x57da09(0x699),'ZrEtb':_0x57da09(0x93f),'rOQou':_0x57da09(0xd9a),'lHJND':_0x57da09(0x9e1)+'Flag','hywOB':function(_0x3e5f88,_0x54fff5){return _0x3e5f88(_0x54fff5);},'CamyH':'sakur'+'a-sw-'+'view-'+_0x57da09(0x28b),'UgIyT':'sakur'+'a-sw-'+_0x57da09(0xcb1)+_0x57da09(0x218),'TqGiE':'CMB','uSjZY':'value'+'s','cYFjl':function(_0x884f02,_0x567bfc){return _0x884f02+_0x567bfc;},'iPWWK':function(_0xa2725c,_0x3e8dd3){return _0xa2725c+_0x3e8dd3;},'NYRcu':function(_0x3edb4a,_0x39d453){return _0x3edb4a+_0x39d453;},'yCxGA':function(_0x20e587,_0x3c5b72){return _0x20e587+_0x3c5b72;},'QKbAl':function(_0xa97758,_0x3d834a){return _0xa97758+_0x3d834a;},'KGAyz':function(_0x2caece,_0x4b0579){return _0x2caece+_0x4b0579;},'PEIFW':function(_0x5c0c4d,_0x3f5a79){return _0x5c0c4d+_0x3f5a79;},'cimrk':function(_0x24c962,_0x217274){return _0x24c962+_0x217274;},'ZmVBl':function(_0x46948f,_0x174339){return _0x46948f+_0x174339;},'puwJI':function(_0x2c52b8,_0x2a0af0){return _0x2c52b8+_0x2a0af0;},'dghSv':function(_0x9f6fd6,_0xdb431e){return _0x9f6fd6+_0xdb431e;},'RQUne':function(_0x2f5264,_0x2646fa){return _0x2f5264+_0x2646fa;},'TnvRJ':function(_0x521d43,_0x89bae0){return _0x521d43+_0x89bae0;},'sStWd':_0x57da09(0xadf)+'ra-me'+_0x57da09(0x64f)+_0x57da09(0x306)+_0x57da09(0x7f3)+_0x57da09(0x288)+_0x57da09(0x750)+':fixe'+_0x57da09(0x7dc)+_0x57da09(0x9c8)+'px;bo'+_0x57da09(0xc2d)+_0x57da09(0x874)+'width'+_0x57da09(0x74a)+_0x57da09(0x58f)+',calc'+'(100v'+'w\x20-\x204'+_0x57da09(0x823)+_0x57da09(0x3d0)+'heigh'+_0x57da09(0x39f)+'(500p'+'x,cal'+_0x57da09(0xe06)+'vh\x20-\x20'+_0x57da09(0x522)+');','vgAPt':_0x57da09(0xc74)+'ay:fl'+_0x57da09(0x866)+'p:10p'+'x;pad'+_0x57da09(0xb8f)+'10px;'+'borde'+_0x57da09(0x340)+_0x57da09(0x9af)+_0x57da09(0xd8f)+_0x57da09(0x33e)+_0x57da09(0x2fe)+'nts:a'+_0x57da09(0x81c)+'-inde'+'x:214'+_0x57da09(0x816)+_0x57da09(0xb5e),'BBAWv':_0x57da09(0x302)+'round'+_0x57da09(0xd1d)+'(24,1'+_0x57da09(0x2a1)+_0x57da09(0xcc1)+'backd'+_0x57da09(0x223)+'ilter'+':blur'+'(22px'+_0x57da09(0xb2a)+_0x57da09(0xae5)+_0x57da09(0x73a)+_0x57da09(0x91e)+'bkit-'+_0x57da09(0xbbf)+_0x57da09(0x223)+_0x57da09(0x998)+_0x57da09(0xb7b)+_0x57da09(0xc80)+_0x57da09(0xb2a)+'urate'+'(150%'+');','LJVGZ':'.mn-s'+_0x57da09(0x3eb)+_0x57da09(0xc19)+'y:fle'+'x;fle'+'x-dir'+'ectio'+_0x57da09(0x414)+_0x57da09(0x244)+_0x57da09(0xd02)+'items'+_0x57da09(0x3b1)+'er;ga'+_0x57da09(0xaf9)+';widt'+_0x57da09(0x974)+'x;fle'+_0x57da09(0xdba)+_0x57da09(0x299)+_0x57da09(0xb8f)+_0x57da09(0x583)+'0;','fgDxk':_0x57da09(0x7f0)+_0x57da09(0x689)+_0x57da09(0xc19)+'y:gri'+_0x57da09(0xbaf)+_0x57da09(0x7fd)+'ems:c'+_0x57da09(0x480)+_0x57da09(0x5a2)+_0x57da09(0x869)+'x;hei'+_0x57da09(0xd53)+_0x57da09(0x8bc)+'argin'+_0x57da09(0x734)+'om:6p'+_0x57da09(0xa0c),'ymUWw':_0x57da09(0x7f0)+_0x57da09(0x570)+'vg{wi'+_0x57da09(0xcdd)+_0x57da09(0x50c)+'eight'+_0x57da09(0x917)+_0x57da09(0xabd)+_0x57da09(0x4c0)+'visib'+_0x57da09(0x694)+_0x57da09(0xe28)+_0x57da09(0xddc)+'shado'+'w(0\x200'+_0x57da09(0xbf3)+_0x57da09(0xe46)+_0x57da09(0x1fd)+_0x57da09(0x53c)+_0x57da09(0x9d6)+');}','BjIsp':_0x57da09(0x302)+'round'+':tran'+'spare'+_0x57da09(0x7d1)+'lor:r'+_0x57da09(0x89a)+_0x57da09(0xd43)+_0x57da09(0x4d1)+_0x57da09(0xbdc)+_0x57da09(0xe37)+_0x57da09(0xd47)+_0x57da09(0xab7)+_0x57da09(0xad5)+'size:'+'10px;'+'font-'+_0x57da09(0xafd)+_0x57da09(0xae8)+';font'+'-fami'+_0x57da09(0x8b0)+'herit'+';}','FtFpO':_0x57da09(0x6c6)+'ain{f'+_0x57da09(0xa62)+_0x57da09(0x7e9)+_0x57da09(0x99f)+':0;di'+'splay'+_0x57da09(0x1fe)+_0x57da09(0x5ab)+_0x57da09(0x6a6)+'ction'+':colu'+_0x57da09(0x6aa),'oAgGa':_0x57da09(0x771)+'{font'+_0x57da09(0x8a2)+_0x57da09(0x25c)+';font'+_0x57da09(0x2a0)+'ht:65'+'0;}','wNmxE':_0x57da09(0x438)+_0x57da09(0x30f)+_0x57da09(0x6ec)+_0x57da09(0x435)+'14px;'+'heigh'+_0x57da09(0x7d3)+_0x57da09(0xa76)+_0x57da09(0xd44)+'e;str'+'oke:c'+_0x57da09(0xbf9)+_0x57da09(0x7c3)+_0x57da09(0xd08)+_0x57da09(0x85d)+'idth:'+_0x57da09(0xddf)+_0x57da09(0xdb5)+_0x57da09(0xcb4)+_0x57da09(0x90d)+'nd;}','tMXCt':_0x57da09(0x82d)+'-item'+_0x57da09(0x249)+_0x57da09(0x2be)+'ign-c'+'onten'+_0x57da09(0x9b8)+_0x57da09(0xbea)+_0x57da09(0xb21)+_0x57da09(0x4e6)+_0x57da09(0xb8f)+_0x57da09(0x341)+_0x57da09(0x674)+_0x57da09(0x5b5),'ZNCir':'.mn-c'+_0x57da09(0x287)+'-webk'+_0x57da09(0x7ef)+'rollb'+'ar-th'+_0x57da09(0xc45)+'ackgr'+_0x57da09(0x855)+_0x57da09(0xe46)+_0x57da09(0xccc)+'55,25'+_0x57da09(0x892)+');bor'+'der-r'+'adius'+_0x57da09(0xa42)+'}','jSWzT':_0x57da09(0xb8c)+'ard{b'+_0x57da09(0xcd3)+_0x57da09(0x619)+'us:12'+_0x57da09(0xa52)+_0x57da09(0x4c6)+_0x57da09(0xc58)+'gba(2'+_0x57da09(0x5ed)+'5,255'+',.025'+_0x57da09(0x49b)+_0x57da09(0x682)+'ow:in'+_0x57da09(0xc8c)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+'55,25'+'5,255'+_0x57da09(0x99e)+';}','VZHBn':'.sk-c'+_0x57da09(0x831)+'ead{d'+_0x57da09(0xc19)+'y:fle'+_0x57da09(0x6e7)+'gn-it'+'ems:c'+_0x57da09(0x480)+_0x57da09(0xc17)+'8px;p'+_0x57da09(0x4ea)+_0x57da09(0x360)+_0x57da09(0x4fa)+'x;}','EBtxh':'.sk-c'+'ard-t'+_0x57da09(0xd4e)+_0x57da09(0x3a6)+_0x57da09(0x604)+_0x57da09(0xad4)+_0x57da09(0xd4b),'oeRGV':_0x57da09(0xb8c)+_0x57da09(0xbf2)+_0x57da09(0x86b)+_0x57da09(0x44f)+'g{fon'+'t-siz'+_0x57da09(0xb99)+_0x57da09(0x5af)+'t-wei'+'ght:6'+'00;co'+'lor:r'+'gba(2'+_0x57da09(0xd43)+_0x57da09(0x4d1)+_0x57da09(0x28a)+';}','edyts':_0x57da09(0x292)+_0x57da09(0x649)+_0x57da09(0xaac)+_0x57da09(0x744)+'12px\x20'+_0x57da09(0xc2e)+'}','PQGTM':'.sk-m'+'desc{'+'font-'+'size:'+_0x57da09(0xb7e)+'opaci'+'ty:.4'+';marg'+_0x57da09(0xa0a)+'ttom:'+_0x57da09(0x1ec)+'hite-'+_0x57da09(0xc2b)+':pre-'+_0x57da09(0x7f5)+'}','pnuPQ':'.sk-h'+_0x57da09(0xcee)+_0x57da09(0xc19)+'y:blo'+_0x57da09(0x5de)+'nt-si'+_0x57da09(0x79b)+'px;op'+'acity'+':.4;}','ICCMO':_0x57da09(0xc8a)+_0x57da09(0xe0d)+_0x57da09(0xb89)+_0x57da09(0xe31)+_0x57da09(0xd63)+_0x57da09(0x431)+']{bac'+_0x57da09(0xa10)+_0x57da09(0xdc9)+_0x57da09(0x74e)+_0x57da09(0xdde)+_0x57da09(0x7fc)+_0x57da09(0x5c0)+'}','wQVvs':'.sk-r'+_0x57da09(0xc3b)+_0x57da09(0xc74)+_0x57da09(0x350)+'ex;al'+_0x57da09(0xce0)+_0x57da09(0x953)+'cente'+_0x57da09(0x8f9)+_0x57da09(0x4b6)+'}','JfyMO':'.sk-s'+_0x57da09(0x861)+'{-web'+'kit-a'+'ppear'+'ance:'+'none;'+'appea'+'rance'+':none'+_0x57da09(0x5a2)+'h:96p'+'x;hei'+_0x57da09(0xb4b)+'px;ba'+_0x57da09(0x4c6)+_0x57da09(0x2a3)+'ransp'+_0x57da09(0x541)+';}','ywaCd':'.sk-s'+_0x57da09(0x861)+'::-we'+_0x57da09(0xc9f)+'slide'+_0x57da09(0x394)+'nable'+'-trac'+'k{hei'+'ght:2'+_0x57da09(0x4ab)+_0x57da09(0x8c0)+_0x57da09(0x1f7)+_0x57da09(0x788)+';','RWAfR':'.sk-s'+'lider'+_0x57da09(0x3e2)+_0x57da09(0xc9f)+_0x57da09(0xb42)+_0x57da09(0x99c)+_0x57da09(0x248)+'ebkit'+_0x57da09(0xb93)+'aranc'+_0x57da09(0xc3c)+_0x57da09(0x36a)+_0x57da09(0x52a)+'x;hei'+'ght:6'+_0x57da09(0x89c)+_0x57da09(0x5dd)+_0x57da09(0x78d)+_0x57da09(0x2ff)+_0x57da09(0xcd3)+_0x57da09(0x619)+_0x57da09(0xb13)+'%;bac'+'kgrou'+_0x57da09(0xac7)+'f6b9d'+';}','xuseB':'.sk-v'+_0x57da09(0xa01)+_0x57da09(0xd97)+'ze:11'+_0x57da09(0x850)+_0x57da09(0x61b)+_0x57da09(0xdb7)+_0x57da09(0x89b)+'in-wi'+'dth:3'+_0x57da09(0x83a)+'ext-a'+'lign:'+'right'+';colo'+'r:rgb'+_0x57da09(0x5c5)+',238,'+_0x57da09(0xa60)+_0x57da09(0x678),'hmaUt':_0x57da09(0x86d)+_0x57da09(0x757)+_0x57da09(0xb8e)+'ize:1'+_0x57da09(0x487)+'olor:'+'rgba('+'246,2'+'38,24'+_0x57da09(0x568)+';padd'+'ing:2'+_0x57da09(0x91c)+_0x57da09(0x4f4)+'-spac'+_0x57da09(0x6e3)+_0x57da09(0xdb8)+';}','ALFXF':'.sk-b'+'tn{al'+_0x57da09(0x449)+_0x57da09(0x995)+'lex-s'+_0x57da09(0xba0)+'borde'+_0x57da09(0x909)+_0x57da09(0xcd3)+'-radi'+_0x57da09(0xac4)+'x;pad'+'ding:'+_0x57da09(0x309)+'6px;b'+'ackgr'+_0x57da09(0x855)+_0x57da09(0x896)+_0x57da09(0x584)+'lor:#'+_0x57da09(0x488),'dGSwN':'#saku'+'ra-pe'+_0x57da09(0xd51)+_0x57da09(0x787)+_0x57da09(0xb57)+'xed;t'+_0x57da09(0x207)+_0x57da09(0xd79)+_0x57da09(0x915)+_0x57da09(0x830)+_0x57da09(0x6b2)+'x:214'+_0x57da09(0x816)+'46;cu'+'rsor:'+_0x57da09(0xd91)+'er;wi'+'dth:2'+_0x57da09(0x60f)+_0x57da09(0xc10)+_0x57da09(0x1fb)+_0x57da09(0x5c1)+'ity:.'+'28;','aNFVz':_0x57da09(0x8cb)+'ition'+_0x57da09(0x6de)+_0x57da09(0x3b6)+'2s;po'+_0x57da09(0xd6d)+_0x57da09(0x2e5)+'ts:au'+_0x57da09(0xe10)+'lter:'+'drop-'+'shado'+_0x57da09(0xdc8)+_0x57da09(0xbf3)+_0x57da09(0xe46)+'255,1'+_0x57da09(0x53c)+'7,.7)'+');}','ecFUr':_0x57da09(0x83c)+'viewB'+_0x57da09(0x57a)+_0x57da09(0xb49)+_0x57da09(0x800)+'<path'+'\x20d=\x22M'+_0x57da09(0x715)+'c-1.5'+'-2.5-'+'4-4.5'+_0x57da09(0xc99)+_0x57da09(0x9cd)+'.5\x201.'+'8-4.5'+_0x57da09(0x8f8)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+_0x57da09(0x2ce)+'5-4\x207'+_0x57da09(0x41e),'lINKK':'fill='+_0x57da09(0x35e)+'\x22\x20str'+'oke=\x22'+_0x57da09(0x896)+_0x57da09(0x364)+_0x57da09(0xe12)+_0x57da09(0xad4)+_0x57da09(0xe48)+'\x20stro'+'ke-li'+_0x57da09(0xa65)+_0x57da09(0xe1f)+_0x57da09(0x9fd)+_0x57da09(0xe12)+'-line'+_0x57da09(0x4fd)+'\x22roun'+_0x57da09(0x2c5),'vFcNC':'<circ'+_0x57da09(0x9cf)+_0x57da09(0x952)+'\x20cy=\x22'+'10\x22\x20r'+'=\x221.5'+_0x57da09(0x23b)+_0x57da09(0x791)+'f6b9d'+_0x57da09(0x5b4)+_0x57da09(0x275),'TFPvr':function(_0x39472e,_0x5909ee){return _0x39472e+_0x5909ee;},'LlgGC':_0x57da09(0x591)+_0x57da09(0x9cf)+_0x57da09(0x952)+_0x57da09(0xb65)+'10\x22\x20r'+_0x57da09(0x7c1)+_0x57da09(0x23b)+_0x57da09(0x791)+_0x57da09(0x59d)+_0x57da09(0x5b4)+_0x57da09(0x275),'boInc':function(_0x114005){return _0x114005();},'CQwrn':function(_0xe389f){return _0xe389f();}};var _0x2ba949=location['hostn'+_0x57da09(0xc7a)]||'',_0x21766d=/(^|\.)www\.crazygames\.com$/['test'](_0x2ba949),_0x5e6dc=/(^|\.)games\.crazygames\.com$/[_0x57da09(0x82a)](_0x2ba949),_0x2c9e9e=/(^|\.)crazygames\.com$/[_0x57da09(0x82a)](_0x2ba949)&&!_0x21766d&&!_0x5e6dc,_0x5b6a2a=_0x21766d?_0x2e21ac[_0x57da09(0xa3a)]:_0x5e6dc?_0x2e21ac['dXXoT']:_0x2e21ac[_0x57da09(0xaa7)];if(!_0x21766d&&!_0x5e6dc&&!_0x2c9e9e)return;var _0x243c0c='#ff8f'+'b1',_0x37944b=_0x57da09(0xa48)+_0x57da09(0x2f2)+_0x57da09(0xdfc),_0x33c6f5=_0x57da09(0x8c8)+'KURA-'+_0x57da09(0x3cb)+_0x57da09(0xba8)+_0x57da09(0x766)+_0x57da09(0xa39),_0x4c0449=_0x2e21ac[_0x57da09(0x334)],_0x150f3f=_0x57da09(0x675)+'1';if(_0x5e6dc){if('WYwQN'!=='OSnwh'){window[_0x57da09(0x62c)+'entLi'+_0x57da09(0x80e)+'r']('messa'+'ge',function(_0x446ad0){var _0x31b3dd=_0x57da09,_0x55fbfb=_0x446ad0[_0x31b3dd(0x87d)];if(!_0x55fbfb||_0x2e21ac['cOSaW'](_0x55fbfb[_0x31b3dd(0xa48)+_0x31b3dd(0x5a5)],_0x37944b))return;try{if(window[_0x31b3dd(0x4dc)+'t']&&_0x2e21ac[_0x31b3dd(0x2ed)](window['paren'+'t'],window))window[_0x31b3dd(0x4dc)+'t']['postM'+_0x31b3dd(0xbfd)+'e'](_0x55fbfb,'*');if(window['top']&&_0x2e21ac[_0x31b3dd(0x697)](window['top'],window))window[_0x31b3dd(0x4cf)]['postM'+_0x31b3dd(0xbfd)+'e'](_0x55fbfb,'*');}catch(_0x55d84f){}if(_0x55fbfb&&_0x55fbfb[_0x31b3dd(0x40b)]==='cmd')try{var _0x47b0e2=document[_0x31b3dd(0x594)+_0x31b3dd(0xd85)+'torAl'+'l']('ifram'+'e');for(var _0x236635=0x2*0xf33+0x1*-0x83e+-0x1628;_0x2e21ac['TPulD'](_0x236635,_0x47b0e2['lengt'+'h']);_0x236635++){if(_0x31b3dd(0xb01)!==_0x2e21ac[_0x31b3dd(0x8e6)])try{if(_0x47b0e2[_0x236635][_0x31b3dd(0x898)+'ntWin'+_0x31b3dd(0xb36)])_0x47b0e2[_0x236635][_0x31b3dd(0x898)+'ntWin'+'dow']['postM'+'essag'+'e'](_0x55fbfb,'*');}catch(_0x50dcc3){}else return null;}}catch(_0x219af6){}}),console[_0x57da09(0x76c)](_0x57da09(0x5e9)+'kura]'+'\x20SW-W'+'RAPPE'+_0x57da09(0xaef)+'IVE\x20('+_0x57da09(0x935)+'\x20up+d'+'own)','color'+':'+_0x243c0c);return;}else{_0x1ce968(![]),_0x2b5380(-0xac6+-0x40f+-0x1001*-0x1);return;}}if(_0x21766d){console[_0x57da09(0x76c)](_0x57da09(0x5e9)+'kura]'+'\x20PORT'+'AL\x20AC'+_0x57da09(0x59f),'color'+':'+_0x243c0c+_0x2e21ac[_0x57da09(0x37e)],{'host':_0x2ba949});var _0x1b3d8a={'set':function(){},'command':function(){}};function _0x5d7ece(_0x34ed71,_0x405d7e){var _0x2119c1=_0x57da09,_0x2de878={'__sakura':_0x37944b,'kind':_0x2e21ac[_0x2119c1(0xd5c)],'cmd':_0x34ed71,'arg':_0x405d7e};try{var _0x21e190=document[_0x2119c1(0x594)+_0x2119c1(0xd85)+'torAl'+'l'](_0x2e21ac['fkEzy']);for(var _0x48df8e=-0x1ca9+0x18d2+0x3d7;_0x2e21ac['oskAG'](_0x48df8e,_0x21e190[_0x2119c1(0x875)+'h']);_0x48df8e++){if(_0x2119c1(0x62b)==='ypLTW'){if(_0x2435df['lg'])_0x1ccb16['lg']['textC'+_0x2119c1(0x1f5)+'t']='';return;}else try{if(_0x21e190[_0x48df8e][_0x2119c1(0x898)+_0x2119c1(0xe19)+_0x2119c1(0xb36)])_0x21e190[_0x48df8e][_0x2119c1(0x898)+_0x2119c1(0xe19)+_0x2119c1(0xb36)]['postM'+_0x2119c1(0xbfd)+'e'](_0x2de878,'*');}catch(_0x375dca){}}}catch(_0x1be2b8){}try{if(_0x2119c1(0xcce)!=='pTmpa')return _0x2f14dc[_0x2119c1(0xb71)+'d']++,_0x44751b['lastE'+_0x2119c1(0xbc6)]=_0x5a2c3a[_0x2119c1(0x57b)+_0x2119c1(0xbc6)]||_0x2e21ac[_0x2119c1(0x670)](_0x2e21ac['OLKSv'](_0x2e21ac['CNTWo'],(_0x58ece1+_0x2bbcfb)[_0x2119c1(0x69e)+'ing'](0x0+-0x26*-0xe3+0xa*-0x35d))+_0x2e21ac['XoQZS'],_0x34cb8f[_0x2119c1(0x46b)+_0x2119c1(0xcb3)][_0x2119c1(0x69e)+_0x2119c1(0x710)](0xf6b*0x2+-0x2e7*0x5+-0x1*0x1043)),null;else{var _0x1bcf73=new BroadcastChannel(_0x2e21ac['Xoned']);_0x1bcf73[_0x2119c1(0xb59)+_0x2119c1(0xbfd)+'e'](_0x2de878),setTimeout(function(){var _0x2f2a29=_0x2119c1;try{_0x1bcf73[_0x2f2a29(0xd12)]();}catch(_0x2d4de2){}},-0x1a33+-0x91a+-0x2447*-0x1);}}catch(_0x282cd3){}}var _0xbbee81=_0x2e21ac[_0x57da09(0x9d0)];function _0x72baa4(){try{return _0x2e21ac['fHQps'](localStorage['getIt'+'em'](_0xbbee81),'1');}catch(_0x1ee34c){return![];}}function _0x2937b0(_0x410d1d){var _0x323e5c=_0x57da09;try{_0x2e21ac[_0x323e5c(0x2ed)]('qOoLv',_0x2e21ac['hGXvH'])?_0x410d1d?localStorage['setIt'+'em'](_0xbbee81,'1'):localStorage[_0x323e5c(0x7b7)+'eItem'](_0xbbee81):_0x20ec99[_0x323e5c(0x21a)+_0x323e5c(0x1f5)+'t']=_0x46ed15(_0x4f769d);}catch(_0x2e4b91){}try{var _0x56f4c6=document[_0x323e5c(0xa38)+_0x323e5c(0x6df)+_0x323e5c(0x245)](_0x2e21ac['WPYGn']);if(_0x56f4c6)_0x56f4c6['remov'+'e']();}catch(_0x2d8b14){}try{var _0x43209d=document[_0x323e5c(0xa38)+'ement'+_0x323e5c(0x245)]('sakur'+_0x323e5c(0x5d1)+'v2-ta'+'b');if(_0x410d1d&&!_0x43209d&&document[_0x323e5c(0xd40)]){var _0x992b7a=document['creat'+_0x323e5c(0x2b5)+'ent']('div');_0x992b7a['id']=_0x323e5c(0x781)+_0x323e5c(0x5d1)+'v2-ta'+'b',_0x992b7a['style'][_0x323e5c(0x2fb)+'xt']='posit'+_0x323e5c(0x2f7)+'ixed;'+'left:'+_0x323e5c(0x474)+'top:1'+_0x323e5c(0x830)+'-inde'+_0x323e5c(0x851)+_0x323e5c(0xc4c)+'99;cu'+_0x323e5c(0xd18)+_0x323e5c(0xd91)+'er;us'+'er-se'+_0x323e5c(0x4f6)+_0x323e5c(0x997)+_0x2e21ac['wryKH']+_0x243c0c+';'+_0x2e21ac['kWwod'],_0x992b7a['textC'+'onten'+'t']=_0x2e21ac['dgkIO'],_0x992b7a[_0x323e5c(0xd1a)+'ck']=function(){_0x2937b0(![]),_0x2e21ac['AXSoN'](_0x498c32);},document[_0x323e5c(0xd40)]['appen'+_0x323e5c(0xd84)+'d'](_0x992b7a);}else _0x2e21ac[_0x323e5c(0xa45)](!_0x410d1d,_0x43209d)&&_0x43209d['remov'+'e']();}catch(_0x313a31){}}function _0x530aab(){var _0x1d2c79=_0x57da09,_0x131cfd={'ujZYw':function(_0x41dbb7,_0x3d3b8d){return _0x41dbb7/_0x3d3b8d;},'AvTuL':function(_0x360e1d,_0x17ec1a){return _0x360e1d*_0x17ec1a;}};if(_0x2e21ac[_0x1d2c79(0x271)](_0x72baa4))return null;var _0x1f3707=document[_0x1d2c79(0xa38)+_0x1d2c79(0x6df)+_0x1d2c79(0x245)](_0x1d2c79(0x781)+_0x1d2c79(0x5d1)+'v2');if(_0x1f3707)return _0x1f3707;if(!document[_0x1d2c79(0xd40)]||!document['body'][_0x1d2c79(0xac2)+_0x1d2c79(0xd84)+'d'])return null;try{if(_0x2e21ac[_0x1d2c79(0x3c7)](_0x2e21ac[_0x1d2c79(0xbb1)],_0x2e21ac[_0x1d2c79(0xbb1)])){if(!document['getEl'+'ement'+'ById'](_0x1d2c79(0x781)+_0x1d2c79(0x5d1)+_0x1d2c79(0x6d3)+'s')){var _0x37482c=document[_0x1d2c79(0x843)+'eElem'+_0x1d2c79(0xbe3)](_0x1d2c79(0x21d));_0x37482c['id']=_0x1d2c79(0x781)+'a-sw-'+_0x1d2c79(0x6d3)+'s',_0x37482c['textC'+_0x1d2c79(0x1f5)+'t']=_0x2e21ac[_0x1d2c79(0x257)],(document['head']||document[_0x1d2c79(0xcc6)+_0x1d2c79(0x2e4)+'ement'])[_0x1d2c79(0xac2)+_0x1d2c79(0xd84)+'d'](_0x37482c);}return _0x1f3707=document[_0x1d2c79(0x843)+_0x1d2c79(0x2b5)+'ent'](_0x1d2c79(0xda1)),_0x1f3707['id']=_0x1d2c79(0x781)+_0x1d2c79(0x5d1)+'v2',document[_0x1d2c79(0xd40)]['appen'+_0x1d2c79(0xd84)+'d'](_0x1f3707),_0x1f3707;}else{var _0x329089=(-0x10a3+-0x1013+0x20b6+0.5-_0x131cfd[_0x1d2c79(0xdaa)](_0x4e42cb['y'],_0x402bec['canva'+'s']['h']))*(-0x6b*0x3d+0x1de6+0xf*-0x4b),_0x2da9ac=_0x26faa3/_0x22971c/_0x14aa14;_0x1da3d4[_0x1d2c79(0x26f)+'cal']={'got':_0x365869[_0x1d2c79(0x3c3)](_0x329089*(0x9be*-0x4+0xcb7+-0x44f*-0x7))/(0x1*-0x1bf6+-0x195+-0x1*-0x2173),'want':_0x33cac5[_0x1d2c79(0x3c3)](_0x2da9ac*(-0x1*0x1891+0x2*-0xfc5+-0x239*-0x1b))/(0xda*-0x25+0x1a81+0x8e9),'off':_0x3d0aa0[_0x1d2c79(0x3c3)](_0x131cfd['AvTuL'](_0x329089-_0x2da9ac,-0x1*-0xddf+0x1*-0x116d+0x776))/(-0x2458+0x34e+0x24f2)};}}catch(_0x40ff8a){return null;}}function _0x498c32(){var _0x16cf38=_0x57da09,_0x73f5f5=_0x2e21ac[_0x16cf38(0x57d)](_0x530aab);if(!_0x73f5f5)return _0x1b3d8a;if(_0x73f5f5[_0x16cf38(0xe3d)+'et'][_0x16cf38(0xaf1)])return _0x73f5f5[_0x16cf38(0xaf1)];try{return _0x2e21ac[_0x16cf38(0x7de)](_0x28737b,_0x73f5f5);}catch(_0x12c80d){return _0x73f5f5['datas'+'et']['api']='1',_0x73f5f5[_0x16cf38(0xaf1)]=_0x1b3d8a,console['warn'](_0x2e21ac[_0x16cf38(0xe1d)],_0x2e21ac[_0x16cf38(0xbbb)](_0x16cf38(0x34d)+':',_0x243c0c),_0x12c80d),_0x1b3d8a;}}function _0x28737b(_0x28537c){var _0x4ab132=_0x57da09,_0x3694ca={'fdngu':_0x4ab132(0x97c),'CyDoM':_0x4ab132(0xd12),'jWPBx':_0x2e21ac[_0x4ab132(0xb06)],'vZoOT':_0x2e21ac['XnJWH'],'Qwyfz':_0x2e21ac[_0x4ab132(0x6f9)],'HVsdR':function(_0x3d1116,_0x1b9d8b,_0x2df283){return _0x3d1116(_0x1b9d8b,_0x2df283);},'UOcdw':_0x4ab132(0x6ad)+'|0|4|'+'8|2|5'+'|3','QqGdU':'funct'+'ion','iaiPe':function(_0xc6a035,_0x29e52a){var _0x2211fe=_0x4ab132;return _0x2e21ac[_0x2211fe(0x1fa)](_0xc6a035,_0x29e52a);},'EFgXg':'Updat'+'e','aHpJu':_0x2e21ac['FkfqX'],'lvJyH':_0x4ab132(0xdc5)+'hot','yjeGy':function(_0x314b3b,_0x23d55c){return _0x2e21ac['tWQmv'](_0x314b3b,_0x23d55c);},'iFIuR':function(_0xe6db7c){return _0xe6db7c();},'QQhhP':'.28','Fejsh':_0x2e21ac['xruwy'],'bzwzr':'copy','kvQiX':function(_0x65c644,_0xcfc775){var _0x52bf8c=_0x4ab132;return _0x2e21ac[_0x52bf8c(0x670)](_0x65c644,_0xcfc775);},'mnocB':function(_0xf2eab8){return _0xf2eab8();},'aSYSX':function(_0x224a8a,_0x92488b){return _0x224a8a||_0x92488b;},'MWWlN':'#ffb3'+'c7','PllCk':function(_0x7ece26,_0x40906a){var _0x29efaf=_0x4ab132;return _0x2e21ac[_0x29efaf(0xb0e)](_0x7ece26,_0x40906a);},'sUxCt':function(_0x12cf8d,_0x2957f5){return _0x12cf8d+_0x2957f5;},'mnZQG':'This\x20'+'panel'+_0x4ab132(0x68b)+'es\x20th'+'e\x20use'+_0x4ab132(0x210)+'pt\x20IS'+'\x20inst'+_0x4ab132(0xb9a)+_0x4ab132(0x3e5)+_0x4ab132(0xe2c)+_0x4ab132(0x46d)+_0x4ab132(0x290)+'porta'+'l,\x0a','lGBHX':'\x20\x203.\x20'+'Both\x20'+'sakur'+_0x4ab132(0x768)+'llwar'+_0x4ab132(0xa85)+'r.js\x20'+_0x4ab132(0x303)+_0x4ab132(0x45e)+_0x4ab132(0xdfe)+_0x4ab132(0x5ba)+_0x4ab132(0x9c5)+_0x4ab132(0xd05),'bBmgD':_0x2e21ac['NbrIi'],'MmdvQ':function(_0x3cb8be,_0x22d0d6){return _0x3cb8be===_0x22d0d6;},'AFgOp':function(_0x31ecf1,_0x5b63a4){return _0x31ecf1+_0x5b63a4;},'zMaTa':_0x4ab132(0x31c)+'ss\x200x','eMVHQ':'rgba('+'255,1'+'43,17'+_0x4ab132(0x743)+')','soEqt':_0x4ab132(0xc68)+'74','dApNB':function(_0x83e24b,_0x2402ec){return _0x2e21ac['CGZmz'](_0x83e24b,_0x2402ec);},'VCWSL':function(_0xe0f0d,_0x564aca){var _0x267c41=_0x4ab132;return _0x2e21ac[_0x267c41(0xd07)](_0xe0f0d,_0x564aca);},'xmjwp':'FnRzE','yiPxC':function(_0x551989,_0x19b323){return _0x551989+_0x19b323;},'aSbys':function(_0xa52f04,_0x34e60c){return _0xa52f04+_0x34e60c;},'BNNTY':'\x20obje'+_0x4ab132(0xb77)+'\x20','xbpSS':'#ffd4'+'8a','ZJzsN':function(_0x4693c4,_0x15e63c){return _0x4693c4+_0x15e63c;},'fkdua':function(_0x5b7c88,_0x246bcc){return _0x5b7c88===_0x246bcc;},'wEydr':_0x4ab132(0xa9e)+'g\x20·\x20','RfQVb':function(_0x4053ef,_0x8aed7){var _0xc5544c=_0x4ab132;return _0x2e21ac[_0xc5544c(0x8b2)](_0x4053ef,_0x8aed7);},'AylDp':_0x4ab132(0x7b6),'kXxHI':_0x4ab132(0x9e5)+'\x20ON','Fpuge':_0x2e21ac['YYgGb'],'khbKy':'kFsnS','Oydma':function(_0x124e77,_0x22debf){return _0x124e77!==_0x22debf;},'cvERY':function(_0x1caf81,_0x34256a){return _0x2e21ac['qlhqG'](_0x1caf81,_0x34256a);},'TWurk':_0x4ab132(0x34d)+':','hNjzT':';font'+_0x4ab132(0x2a0)+'ht:70'+'0'};_0x28537c[_0x4ab132(0x21d)][_0x4ab132(0x2fb)+'xt']=_0x2e21ac[_0x4ab132(0x53b)](_0x2e21ac[_0x4ab132(0x9de)],'backg'+_0x4ab132(0x3c3)+_0x4ab132(0xc95)+_0x4ab132(0x29e)+_0x4ab132(0x66c)+'#f7ee'+'f5;bo'+_0x4ab132(0x3d1)+'1px\x20s'+_0x4ab132(0x53d)+_0x4ab132(0xe46)+_0x4ab132(0x1fd)+_0x4ab132(0xa47)+'7,.5)'+';bord'+_0x4ab132(0xe43)+_0x4ab132(0x975)+'14px;')+_0x2e21ac['dHmae']+('displ'+_0x4ab132(0x350)+_0x4ab132(0x9df)+'ex-di'+'recti'+_0x4ab132(0x4ed)+_0x4ab132(0x46e)+'overf'+_0x4ab132(0xbb5)+_0x4ab132(0x2d1)+';'),_0x28537c['inner'+'HTML']=_0x2e21ac['RvoUI'](_0x2e21ac[_0x4ab132(0xda7)](_0x2e21ac[_0x4ab132(0xda7)](_0x2e21ac[_0x4ab132(0xb0e)](_0x2e21ac[_0x4ab132(0xe5d)](_0x2e21ac[_0x4ab132(0xdd7)](_0x2e21ac[_0x4ab132(0x8b2)](_0x2e21ac[_0x4ab132(0x74c)](_0x2e21ac['LRfXz'](_0x4ab132(0x951)+'style'+_0x4ab132(0x7e2)+'ding:'+'9px\x201'+'2px;b'+'order'+_0x4ab132(0x734)+_0x4ab132(0x5cb)+_0x4ab132(0x2fc)+'id\x20rg'+'ba(25'+_0x4ab132(0x2db)+_0x4ab132(0x7ac)+_0x4ab132(0x840)+_0x4ab132(0xc19)+'y:fle'+_0x4ab132(0xa1b)+':8px;'+'align'+'-item'+_0x4ab132(0x881)+_0x4ab132(0x50d)+_0x4ab132(0x616)+'\x200\x20au'+'to;\x22>',_0x4ab132(0x65e)+'yle=\x22'+_0x4ab132(0x34d)+':')+_0x243c0c+_0x2e21ac[_0x4ab132(0x856)],'<span'+'\x20id=\x22'+_0x4ab132(0x86a)+_0x4ab132(0x472)+_0x4ab132(0xd9b)+'e=\x22co'+_0x4ab132(0x366)+_0x4ab132(0x4fc)+_0x4ab132(0xbd0)+_0x4ab132(0x3c8)+_0x4ab132(0x9bf)+_0x4ab132(0x4e6)+_0x4ab132(0xb8f)+_0x4ab132(0xd56)+_0x4ab132(0x4ab)+'rder:'+'1px\x20s'+'olid\x20'+'rgba('+'255,1'+'43,17'+_0x4ab132(0x743)+');bor'+_0x4ab132(0x893)+_0x4ab132(0x972)+_0x4ab132(0x57f)+_0x4ab132(0x246)+_0x4ab132(0x3d2)+_0x4ab132(0x759))+_0x2e21ac[_0x4ab132(0xe04)]+('<butt'+_0x4ab132(0xa6b)+'=\x22sw2'+_0x4ab132(0xd1b)+_0x4ab132(0x4d4)+_0x4ab132(0xb03)+_0x4ab132(0xc19)+_0x4ab132(0x48b)+'e;mar'+_0x4ab132(0x7f2)+'eft:a'+'uto;b'+'ackgr'+'ound:')+_0x243c0c,_0x2e21ac['qbMJB'])+('<butt'+_0x4ab132(0xa6b)+_0x4ab132(0x33c)+_0x4ab132(0x801)+_0x4ab132(0xc1c)+_0x4ab132(0xa2c)+'\x22back'+_0x4ab132(0xcc2)+'d:tra'+_0x4ab132(0xcf2)+_0x4ab132(0xc50)+_0x4ab132(0xcd3)+_0x4ab132(0xd6c)+_0x4ab132(0x5fb)+_0x4ab132(0x5e5)+'(255,'+_0x4ab132(0x67b)+'77,.4'+_0x4ab132(0xc4d)+'or:#f'+_0x4ab132(0x61a)+_0x4ab132(0x8fe)+'er-ra'+_0x4ab132(0x975)+_0x4ab132(0xacb)+_0x4ab132(0x4ea)+'g:4px'+_0x4ab132(0x2f9)+'curso'+'r:poi'+_0x4ab132(0xab7)+_0x4ab132(0x540)+'n</bu'+_0x4ab132(0x8c2))+(_0x4ab132(0x5a3)+'on\x20id'+_0x4ab132(0x33c)+'-x\x22\x20s'+_0x4ab132(0xa2c)+'\x22back'+_0x4ab132(0xcc2)+_0x4ab132(0x809)+_0x4ab132(0xcf2)+'ent;b'+'order'+':1px\x20'+_0x4ab132(0x5fb)+_0x4ab132(0x5e5)+'(255,'+_0x4ab132(0x67b)+_0x4ab132(0x342)+');col'+_0x4ab132(0x6a7)+_0x4ab132(0x61a)+_0x4ab132(0x8fe)+_0x4ab132(0xe43)+'dius:'+'7px;p'+_0x4ab132(0x4ea)+_0x4ab132(0x56b)+_0x4ab132(0x2f9)+'curso'+_0x4ab132(0xd47)+_0x4ab132(0xab7)+_0x4ab132(0x395)+'butto'+'n>'),_0x2e21ac['YxkUQ']),'<div\x20'+_0x4ab132(0xa82)+_0x4ab132(0x54a)+_0x4ab132(0xc44)+_0x4ab132(0xa2c)+_0x4ab132(0x9c9)+'lay:n'+'one;\x22'+'>'),_0x2e21ac[_0x4ab132(0xceb)])+_0x2e21ac[_0x4ab132(0x32d)]+_0x2e21ac[_0x4ab132(0x81a)]+_0x243c0c+';\x22>'+_0x2e21ac[_0x4ab132(0xc31)],_0x4ab132(0x5a3)+'on\x20id'+'=\x22sw2'+_0x4ab132(0xd80)+'\x22\x20sty'+_0x4ab132(0x9eb)+'ackgr'+_0x4ab132(0x855)+_0x4ab132(0x8cb)+_0x4ab132(0x4dc)+_0x4ab132(0x6f0)+'der:1'+_0x4ab132(0x79c)+'lid\x20r'+_0x4ab132(0x89a)+_0x4ab132(0xd66)+'3,177'+',.4);'+'color'+_0x4ab132(0x931)+'ef5;b'+'order'+'-radi'+'us:7p'+_0x4ab132(0x4e6)+_0x4ab132(0xb8f)+_0x4ab132(0x5b0)+'px;cu'+_0x4ab132(0xd18)+_0x4ab132(0xd91)+'er;\x22>'+'Snaps'+'hot\x20('+'F9)</'+_0x4ab132(0x4eb)+'n>')+('<span'+'\x20id=\x22'+_0x4ab132(0x802)+_0x4ab132(0x21b)+_0x4ab132(0x21d)+'=\x22col'+_0x4ab132(0x1f3)+_0x4ab132(0x860)+'\x22>F9\x20'+_0x4ab132(0x628)+_0x4ab132(0x82c)+'e\x20wal'+_0x4ab132(0xbee)+'/\x20spr'+_0x4ab132(0x44a)+_0x4ab132(0x81d)+'umpin'+_0x4ab132(0x832)+_0x4ab132(0x6a0)+'ich\x20f'+_0x4ab132(0x6dd)+'is\x20wh'+'ich.<'+'/span'+'>'),_0x4ab132(0x626)+'>'),_0x4ab132(0x93e)+'id=\x22s'+_0x4ab132(0xe2d)+_0x4ab132(0xda2)+_0x4ab132(0xa0b)+'margi'+_0x4ab132(0xa05)+'addin'+'g:10p'+_0x4ab132(0x4fa)+'x;ove'+_0x4ab132(0x475)+_0x4ab132(0x71a)+';flex'+':1\x201\x20'+'auto;'+_0x4ab132(0x4f4)+_0x4ab132(0xdd2)+_0x4ab132(0x6e3)+'-wrap'+_0x4ab132(0x731)+'-brea'+'k:bre'+_0x4ab132(0xb3a)+_0x4ab132(0x2ea)+'nt:in'+_0x4ab132(0xb0f)+';')+('max-h'+_0x4ab132(0xc10)+':62vh'+_0x4ab132(0x301)+_0x4ab132(0x87e)+_0x4ab132(0x544)+_0x4ab132(0xad2)+_0x4ab132(0x904)+_0x4ab132(0xbe0)+'updat'+'es\x20it'+'self\x20'+_0x4ab132(0x468)+_0x4ab132(0xdee)+_0x4ab132(0xc8f)+'rame\x20'+_0x4ab132(0xc42)+'\x20—\x20no'+_0x4ab132(0xa14)+_0x4ab132(0x5ad)+'eeded'+_0x4ab132(0x451)+_0x4ab132(0x357)+'tays\x20'+_0x4ab132(0x6b6)+_0x4ab132(0x5a9)+_0x4ab132(0x9ea)+_0x4ab132(0xdff)+_0x4ab132(0x85c)+'t\x20inj'+_0x4ab132(0xb7a)+'g\x20int'+_0x4ab132(0x2cc)+_0x4ab132(0xcc5)+'s-ori'+'gin\x20g'+'ame\x20f'+'rame.'+_0x4ab132(0xd28)+'>')+_0x2e21ac[_0x4ab132(0x654)];var _0x4fab90=_0x28537c['query'+'Selec'+'tor'](_0x2e21ac['LMzPJ']),_0x7465ea=_0x28537c[_0x4ab132(0x594)+_0x4ab132(0xd85)+_0x4ab132(0xaa1)](_0x2e21ac['JLNNs']),_0x4c395f=_0x28537c[_0x4ab132(0x594)+'Selec'+'tor'](_0x2e21ac[_0x4ab132(0xa81)]),_0x3886b1=_0x28537c['query'+_0x4ab132(0xd85)+_0x4ab132(0xaa1)]('#sw2-'+_0x4ab132(0xdce)),_0x9a1f60=_0x28537c['query'+'Selec'+'tor'](_0x4ab132(0x5ea)+'x'),_0x251150=_0x28537c['query'+'Selec'+'tor'](_0x4ab132(0x5ea)+'toggl'+'e'),_0x5a02fd=_0x28537c['query'+_0x4ab132(0xd85)+_0x4ab132(0xaa1)]('#sw2-'+'body'),_0x2a4306=_0x28537c[_0x4ab132(0x594)+_0x4ab132(0xd85)+_0x4ab132(0xaa1)](_0x4ab132(0x5ea)+_0x4ab132(0x838)),_0x232b26=_0x28537c['query'+_0x4ab132(0xd85)+_0x4ab132(0xaa1)](_0x2e21ac[_0x4ab132(0x56c)]),_0x45caf4=_0x28537c[_0x4ab132(0x594)+_0x4ab132(0xd85)+_0x4ab132(0xaa1)]('#sw2-'+'facto'+'r'),_0x22f249=_0x28537c['query'+_0x4ab132(0xd85)+'tor'](_0x2e21ac[_0x4ab132(0xdd3)]),_0x57406e=_0x28537c['query'+'Selec'+'tor'](_0x4ab132(0x5ea)+_0x4ab132(0x783)),_0x27bf73=null,_0x3af249=![];function _0x3f13a4(){var _0x1bfa48=_0x4ab132;if(_0x5a02fd)_0x5a02fd['style']['displ'+'ay']=_0x3af249?'':_0x3694ca[_0x1bfa48(0x644)];if(_0x251150)_0x251150['textC'+_0x1bfa48(0x1f5)+'t']=_0x3af249?_0x3694ca[_0x1bfa48(0x39a)]:_0x3694ca['jWPBx'];_0x28537c[_0x1bfa48(0x21d)][_0x1bfa48(0x99f)]=_0x3af249?_0x1bfa48(0x3e1)+'2vw,6'+'20px)':_0x3694ca['vZoOT'],_0x28537c['style'][_0x1bfa48(0x302)+_0x1bfa48(0x3c3)]=_0x3af249?_0x3694ca[_0x1bfa48(0x9d7)]:_0x1bfa48(0xe46)+_0x1bfa48(0x947)+_0x1bfa48(0x912)+'9)';}if(_0x251150)_0x251150[_0x4ab132(0xd1a)+'ck']=function(){var _0x366023=_0x4ab132;if(_0x2e21ac['wWbJt']===_0x2e21ac[_0x366023(0xa79)])_0x3af249=!_0x3af249,_0x2e21ac[_0x366023(0x57d)](_0x3f13a4);else{_0x1bc10a[_0x366023(0x9bc)+_0x366023(0x901)+'ault'](),_0x3694ca[_0x366023(0xe47)](_0x3a04d7,!_0x5a402d['on'],_0x15889[_0x366023(0xdbd)+'r']);return;}};_0x3f13a4();if(_0x9a1f60)_0x9a1f60[_0x4ab132(0xd1a)+'ck']=function(){var _0x2f9209=_0x4ab132;if(_0x2f9209(0x9d2)!==_0x2f9209(0x9d2)){var _0x2d0eaa=_0x3694ca[_0x2f9209(0xd00)]['split']('|'),_0x3663d7=-0x21f7+0x3*-0xa12+-0x7*-0x92b;while(!![]){switch(_0x2d0eaa[_0x3663d7++]){case'0':if(!_0x5edeee[_0x2f9209(0x7d0)+'ns']||!_0x5edeee['plugi'+'ns'][_0x2f9209(0x875)+'h'])return![];continue;case'1':var _0x5edeee=_0x100c1f['Unity'+_0x2f9209(0x8fd)+'dkit'][_0x2f9209(0xa36)+'me'];continue;case'2':if(!_0x2c3c60||typeof _0x4a1fe1[_0x2f9209(0x6e6)+'refix']!==_0x3694ca['QqGdU'])return![];continue;case'3':return _0x2d4bbd['lengt'+'h']>-0xd3d*-0x2+-0x1*0x8c3+-0x11b7;case'4':_0x5c1cb7=_0x1c4ea[_0x2f9209(0xe0a)+_0x2f9209(0x8fd)+_0x2f9209(0xa7e)][_0x2f9209(0xc9d)+_0x2f9209(0x938)+'er'];continue;case'5':for(var _0x50f66e=-0x1328+0x7ff+0xb29;_0x3694ca['iaiPe'](_0x50f66e,_0x5ec8bf[_0x2f9209(0x875)+'h']);_0x50f66e++){var _0x5de9a1=_0x571e88[_0x50f66e];try{var _0xfb5d1e=_0x360fb4[_0x2f9209(0x6e6)+_0x2f9209(0x9b9)]({'typeName':_0x5de9a1['type'],'methodName':_0x3694ca['EFgXg'],'params':[_0x2f9209(0x25a),_0x2f9209(0x25a)],'returnType':_0x14c6d8},_0x2faccc(_0x5de9a1[_0x2f9209(0xaeb)],_0x5de9a1[_0x2f9209(0x34f)],_0x5de9a1[_0x2f9209(0x34e)]));_0x32107a[_0x2f9209(0xc27)]({'type':_0x5de9a1['type'],'hook':_0xfb5d1e,'keep':_0x5de9a1[_0x2f9209(0x34f)]});}catch(_0x7892f6){_0x2dfabb[_0x2f9209(0xc27)](_0x5de9a1[_0x2f9209(0xaeb)]+':\x20'+_0x3384dd(_0x7892f6&&_0x7892f6['messa'+'ge']||_0x7892f6)['slice'](0x1dc7+0x32+-0x1*0x1df9,-0x57*-0x6a+-0xd1f+-0x1647));}}continue;case'6':if(!_0x22b06f[_0x2f9209(0xe0a)+_0x2f9209(0x8fd)+'dkit']||!_0x451278['Unity'+_0x2f9209(0x8fd)+_0x2f9209(0xa7e)][_0x2f9209(0xa36)+'me'])return![];continue;case'7':if(_0x39ac17[_0x2f9209(0x875)+'h'])return!![];continue;case'8':_0x227dff=_0x3cdada||_0x5edeee['plugi'+'ns'][_0x5edeee[_0x2f9209(0x7d0)+'ns']['lengt'+'h']-(-0xd*-0x13f+0x22d5+-0x3307)];continue;}break;}}else _0x2937b0(!![]);};if(_0x2a4306)_0x2a4306['oncli'+'ck']=function(){var _0x18d6dd=_0x4ab132;if('MhAzq'!==_0x3694ca['aHpJu'])_0x5d7ece(_0x3694ca[_0x18d6dd(0x5e4)]);else{_0xdfcf17['ok']=![],_0xa805f4['why']=_0x57d621,_0x28b530[_0x18d6dd(0x5e1)+'s']++;if(_0x4aa75c[_0x18d6dd(0x5e1)+'s']>_0x45246a)return _0xdcc080['quat']=null,_0x421c81[_0x18d6dd(0x561)]=null,_0xbf3c51['pos']=null,_0x5b5a9c;return _0x2716c2[_0x18d6dd(0x7b8)]++,_0x2d4db5;}};var _0xf27d0d=![];function _0x1a9f25(){var _0x25bdfc=_0x4ab132;_0x5d7ece(_0x25bdfc(0x6f7),{'on':_0xf27d0d,'factor':_0x3694ca['yjeGy'](parseFloat,_0x45caf4[_0x25bdfc(0x5f5)])||-0x776+0x20d+0x56a});}if(_0x232b26)_0x232b26['oncli'+'ck']=function(){var _0x106bac=_0x4ab132,_0x9f0c4e={'JgEpR':function(_0x3a9759,_0x4760bb){return _0x3a9759+_0x4760bb;},'GCBQE':function(_0x4cbe01,_0x58093b){return _0x4cbe01(_0x58093b);}};if('AXWBM'===_0x2e21ac[_0x106bac(0x706)]){var _0x16cc7c=(_0x106bac(0xd71)+'|0|3')[_0x106bac(0xb4c)]('|'),_0x51d522=0x1*0x18ca+-0xf*-0x1b9+-0x32a1;while(!![]){switch(_0x16cc7c[_0x51d522++]){case'0':_0x232b26['style']['color']=_0xf27d0d?_0x2e21ac['ePQcM']:_0x106bac(0x867)+'f5';continue;case'1':_0xf27d0d=!_0xf27d0d;continue;case'2':_0x232b26['style'][_0x106bac(0x302)+'round']=_0xf27d0d?_0x243c0c:_0x2e21ac['zmywX'];continue;case'3':_0x2e21ac[_0x106bac(0x271)](_0x1a9f25);continue;case'4':_0x232b26[_0x106bac(0x21a)+'onten'+'t']=_0xf27d0d?_0x106bac(0x9e5)+'\x20ON':'Speed'+'\x20off';continue;}break;}}else{_0x5aa157[_0x106bac(0x46c)]=!!_0xd5647d;var _0x2c6985=_0x8e2bd6();if(!_0x2c6985)return;_0x2c6985['class'+'Name']=_0x9f0c4e['JgEpR'](_0x106bac(0xc5c)+'nel',_0x4ddd9e['open']?'\x20show'+'n':'');if(_0x2c89c1[_0x106bac(0xd6e)])_0x55b74d[_0x106bac(0xd6e)]['style']['opaci'+'ty']=_0x7556c3[_0x106bac(0x46c)]?'1':'.5';if(_0x128c7f[_0x106bac(0x46c)]){_0x4512c8(_0x3e09b5['cat']);try{var _0x521cea=_0x3f467c[_0x106bac(0xb3b)+'Heigh'+'t']||-0x1cc9+-0x116c+0x1*0x3155;if(_0x521cea<0x6c7*0x1+-0x1*0xf3d+-0xae2*-0x1)_0x9f0c4e[_0x106bac(0x796)](_0x2265f8,![]);}catch(_0x26c361){}}}};if(_0x45caf4)_0x45caf4['oninp'+'ut']=function(){var _0x5e9fec=_0x4ab132;if(_0x2e21ac['qhYzU']!==_0x2e21ac[_0x5e9fec(0x811)]){if(_0x22f249)_0x22f249['textC'+_0x5e9fec(0x1f5)+'t']=(parseFloat(_0x45caf4['value'])||-0x1826+0xb13+0x3*0x45c)['toFix'+'ed'](-0x2371*-0x1+-0x925+-0x1a4b)+'x';_0x2e21ac['NfrOT'](_0x1a9f25);}else{if(!_0x56bcd8[_0x5e9fec(0xd6e)])return;var _0x5b26db=_0x3694ca[_0x5e9fec(0xaf7)](_0x221102);_0x37bc8c['petal']['style'][_0x5e9fec(0x9fb)+'ty']=_0x319d25['open']?'1':_0x5b26db?'.8':_0x3694ca[_0x5e9fec(0x705)],_0x85b499[_0x5e9fec(0xd6e)][_0x5e9fec(0x289)]=_0x5b26db?_0x3694ca['Fejsh']:_0x5e9fec(0x50e)+'a\x20Ski'+'llWar'+'z\x20-\x20w'+'aitin'+_0x5e9fec(0x489)+_0x5e9fec(0x290)+_0x5e9fec(0xd15)+_0x5e9fec(0xe5a)+_0x5e9fec(0xa43);}};if(_0x3886b1)_0x3886b1[_0x4ab132(0xd1a)+'ck']=function(){var _0x2c2be1=_0x4ab132,_0x23e062=_0x3694ca['kvQiX'](_0x33c6f5+'\x0a'+(_0x27bf73?JSON[_0x2c2be1(0xc35)+'gify'](_0x27bf73,null,-0x15a3+-0x1137+0x26db):'')+'\x0a',_0x4c0449),_0x38fc22=function(){if(_0x3886b1)_0x3886b1['textC'+'onten'+'t']='Copie'+'d';};if(navigator['clipb'+'oard']&&navigator[_0x2c2be1(0xaec)+_0x2c2be1(0x2e2)]['write'+'Text'])navigator[_0x2c2be1(0xaec)+_0x2c2be1(0x2e2)][_0x2c2be1(0x236)+'Text'](_0x23e062)[_0x2c2be1(0x2a8)](_0x38fc22,function(){_0x301952();});else _0x3694ca['mnocB'](_0x301952);function _0x301952(){var _0x4aae6f=_0x2c2be1,_0x18fe2f=document[_0x4aae6f(0x843)+_0x4aae6f(0x2b5)+'ent']('texta'+'rea');_0x18fe2f[_0x4aae6f(0x5f5)]=_0x23e062;if(!document[_0x4aae6f(0xd40)])return;document[_0x4aae6f(0xd40)][_0x4aae6f(0xac2)+_0x4aae6f(0xd84)+'d'](_0x18fe2f),_0x18fe2f[_0x4aae6f(0x9c3)+'t']();try{document[_0x4aae6f(0x9dd)+_0x4aae6f(0xab0)+'d'](_0x3694ca['bzwzr']),_0x3694ca[_0x4aae6f(0xaf7)](_0x38fc22);}catch(_0x655e50){}_0x18fe2f['remov'+'e']();}};setTimeout(function(){var _0x16154a=_0x4ab132;if(_0x27bf73)return;if(_0x3694ca[_0x16154a(0x7cc)](!_0x4fab90,!_0x4c395f))return;_0x4fab90[_0x16154a(0x21a)+_0x16154a(0x1f5)+'t']=_0x16154a(0x924)+'port\x20'+_0x16154a(0xab6)+'\x2060s\x20'+_0x16154a(0xb6e)+_0x16154a(0xd94)+'t\x20inj'+_0x16154a(0xb23)+'?',_0x4fab90[_0x16154a(0x21d)][_0x16154a(0x34d)]=_0x3694ca[_0x16154a(0x9b3)],_0x4c395f['textC'+'onten'+'t']=_0x3694ca[_0x16154a(0x6b8)](_0x3694ca[_0x16154a(0x99b)](_0x3694ca[_0x16154a(0x6a9)](_0x3694ca[_0x16154a(0x6a9)](_0x3694ca['sUxCt']('The\x20g'+_0x16154a(0xc8f)+_0x16154a(0x61e)+_0x16154a(0xd9c)+_0x16154a(0x36e)+'ed\x20a\x20'+'singl'+_0x16154a(0x936)+'ort.\x0a'+'\x0a'+_0x3694ca[_0x16154a(0x8db)],'so\x20th'+'e\x20rem'+_0x16154a(0x34b)+'g\x20sus'+_0x16154a(0x6c1)+_0x16154a(0x3bc)+'\x0a\x0a'),'\x20\x201.\x20'+_0x16154a(0x534)+_0x16154a(0x6a5)+_0x16154a(0x349)+_0x16154a(0x294)+_0x16154a(0x68a)+'ting\x20'+_0x16154a(0x298)+'the\x20c'+_0x16154a(0xad9)+_0x16154a(0x825)+_0x16154a(0x799)+_0x16154a(0x83b)),_0x16154a(0xcab)+_0x16154a(0xbd2)+_0x16154a(0xc7f)+_0x16154a(0x71c)+_0x16154a(0x4a7)+'n\x20rel'+_0x16154a(0xe33)+_0x16154a(0x467)+_0x16154a(0x41f)+_0x16154a(0x2b7)+_0x16154a(0x86c)),_0x3694ca['lGBHX'])+(_0x16154a(0x794)+_0x16154a(0xb5b)+'lled\x20'+_0x16154a(0x958)+'\x20copi'+_0x16154a(0xaf5)+_0x16154a(0x503)+'\x20both'+_0x16154a(0xadd)+'h\x20Web'+_0x16154a(0xafb)+_0x16154a(0xc14)+_0x16154a(0x640)+'tiate'+_0x16154a(0xd73)),_0x3694ca[_0x16154a(0xd0b)]);},-0x15190+-0x12cca+0x4322*0xd);var _0x4de400={'set':function(_0xc50023){var _0x5b20c6=_0x4ab132,_0xd5c8d0={'NhXoH':function(_0x42a010,_0x239ab2){return _0x42a010(_0x239ab2);},'JGlDI':function(_0x8ef1e0,_0x4665ad){var _0x27f912=_0xbe61;return _0x3694ca[_0x27f912(0x67f)](_0x8ef1e0,_0x4665ad);}};_0x27bf73=_0xc50023;if(_0x3886b1)_0x3886b1['style'][_0x5b20c6(0xc74)+'ay']='';if(_0x7465ea){_0x7465ea['textC'+'onten'+'t']='v'+(_0xc50023[_0x5b20c6(0x899)+'on']||'?');var _0x3419dc=_0x150f3f,_0x83d52c=_0xc50023[_0x5b20c6(0x899)+'on']||'';_0x7465ea[_0x5b20c6(0x21d)]['color']=_0x3694ca[_0x5b20c6(0xe42)](_0x83d52c,_0x3419dc)?_0x243c0c:_0x5b20c6(0xc68)+'74',_0x7465ea['style'][_0x5b20c6(0x30b)+_0x5b20c6(0x3bd)+'r']=_0x83d52c===_0x3419dc?_0x3694ca[_0x5b20c6(0x607)]:_0x3694ca[_0x5b20c6(0x31d)];}var _0x3093d6=_0xc50023['insta'+'nces']&&_0xc50023[_0x5b20c6(0xb5b)+_0x5b20c6(0x251)][_0x5b20c6(0x844)+'ntrol'+'ler'],_0x2d3781=Math['round'](_0x3694ca[_0x5b20c6(0xa93)](_0xc50023[_0x5b20c6(0xe39)+'edMs']||-0x1*-0xfc5+-0xf*0x19+-0xe4e,-0x582*0x1+-0x73*-0x4c+0xc5d*-0x2));if(_0x4fab90){if(_0x3694ca[_0x5b20c6(0x5c7)]('FnRzE',_0x3694ca[_0x5b20c6(0xdef)])){var _0x1226f3,_0xf3fa82;if(_0x3093d6&&_0xc50023[_0x5b20c6(0x88d)+'y']&&_0xc50023[_0x5b20c6(0x88d)+'y']['FPSco'+'ntrol'+'ler'])_0x1226f3=_0x3694ca['AFgOp'](_0x3694ca['yiPxC'](_0x3694ca[_0x5b20c6(0x908)]('LIVE\x20'+'·\x20',Object['keys'](_0xc50023[_0x5b20c6(0xb5b)+_0x5b20c6(0x251)])['lengt'+'h']),_0x3694ca['BNNTY'])+_0x2d3781,'s'),_0xf3fa82=_0x5b20c6(0xaa8)+'a8';else{if(_0xc50023[_0x5b20c6(0x655)+_0x5b20c6(0x229)+'ed']>0x1*-0x1253+-0x82c+0x18f*0x11)_0x1226f3=_0x5b20c6(0x655)+_0x5b20c6(0x3b9)+_0x5b20c6(0xd50)+_0x2d3781+'s',_0xf3fa82=_0x3694ca['xbpSS'];else{if(_0xc50023[_0x5b20c6(0x8df)+_0x5b20c6(0x54f)])_0x1226f3=_0x3694ca[_0x5b20c6(0x9f8)]('metad'+_0x5b20c6(0xcf6)+_0x5b20c6(0xdfa)+'·\x20',_0x2d3781)+'s',_0xf3fa82=_0x3694ca['xbpSS'];else{if(_0x3694ca['fkdua'](_0x5b20c6(0xc65),_0x5b20c6(0xc65)))_0x1226f3=(_0xc50023[_0x5b20c6(0x9ad)]&&_0xc50023[_0x5b20c6(0x9ad)]['ok']?_0x5b20c6(0xa23)+_0x5b20c6(0x50b):_0x3694ca['wEydr'])+_0x2d3781+'s',_0xf3fa82=_0x3694ca[_0x5b20c6(0xb4f)];else{if(!_0x4dc231||!_0x422ae2)return null;var _0x5c256e=new _0x176f2f(_0x4fd60d)['getCl'+'assNa'+'me']();return _0x3694ca['MmdvQ'](_0x5c256e,_0x30ccbc)?null:_0x5c256e;}}}}_0x4fab90['textC'+_0x5b20c6(0x1f5)+'t']=_0x1226f3,_0x4fab90['style']['color']=_0xf3fa82;}else try{_0x241a43['textC'+'onten'+'t']=_0xd5c8d0[_0x5b20c6(0x43d)](_0x23b098,_0x2243f7);}catch(_0x5d75f4){_0x3fd3c0[_0x5b20c6(0x21a)+'onten'+'t']=_0x22ff68[_0x5b20c6(0xc35)+_0x5b20c6(0x593)](_0x3e5cd6,null,-0x82d+0x53*0x33+-0x85b);}}_0x57406e&&(_0x57406e[_0x5b20c6(0x21a)+'onten'+'t']=_0xc50023['diff']&&_0xc50023['diff']['lengt'+'h']?_0x3694ca['RfQVb'](_0x5b20c6(0x679)+_0x5b20c6(0x1eb)+'apsho'+_0x5b20c6(0x27a),_0xc50023['diff'][_0x5b20c6(0xc59)](',\x20')):'F9\x20tw'+_0x5b20c6(0x2de)+'hile\x20'+'walki'+_0x5b20c6(0xc85)+_0x5b20c6(0xc28)+_0x5b20c6(0xbe5)+'/\x20jum'+_0x5b20c6(0xde0)+'marks'+_0x5b20c6(0x96f)+_0x5b20c6(0x5d3)+_0x5b20c6(0x668)+'\x20whic'+'h.');if(_0xc50023[_0x5b20c6(0x6f7)]&&_0x232b26){if(_0x3694ca['VCWSL'](_0x3694ca['AylDp'],_0x5b20c6(0xb79)))_0x45115e=_0x2a15e3(_0x3a85bb&&_0x3d1a5c[_0x5b20c6(0x2e3)+'ge']||_0x28f9c2);else{_0xf27d0d=!!_0xc50023[_0x5b20c6(0x6f7)]['on'],_0x232b26[_0x5b20c6(0x21a)+_0x5b20c6(0x1f5)+'t']=_0xf27d0d?_0x3694ca[_0x5b20c6(0xb27)]:'Speed'+'\x20off',_0x232b26['style']['backg'+_0x5b20c6(0x3c3)]=_0xf27d0d?_0x243c0c:_0x5b20c6(0x8cb)+'paren'+'t',_0x232b26[_0x5b20c6(0x21d)][_0x5b20c6(0x34d)]=_0xf27d0d?_0x5b20c6(0x8ed)+'1b':_0x5b20c6(0x867)+'f5';if(_0x22f249&&_0xc50023[_0x5b20c6(0x6f7)][_0x5b20c6(0xdbd)+'r']){if(_0x3694ca[_0x5b20c6(0x7b3)]!==_0x3694ca[_0x5b20c6(0x9ff)])_0x22f249[_0x5b20c6(0x21a)+'onten'+'t']=Number(_0xc50023['speed'][_0x5b20c6(0xdbd)+'r'])[_0x5b20c6(0x45b)+'ed'](0x1be5+-0x1c6d+0x89)+'x';else try{var _0x1b1d48=_0xec866f();return{'ok':_0x1b1d48['ok'],'source':_0x1b1d48['sourc'+'e'],'why':_0x1b1d48[_0x5b20c6(0x4e1)],'tried':_0x1b1d48['tried'],'camPtr':_0xd5c8d0[_0x5b20c6(0x51b)]('0x',_0x1b1d48[_0x5b20c6(0xcbd)+'r'][_0x5b20c6(0x69e)+_0x5b20c6(0x710)](-0x38d+0x2*-0xa79+-0x188f*-0x1)),'tfPtr':_0xd5c8d0['JGlDI']('0x',_0x1b1d48['tfPtr']['toStr'+'ing'](-0x13f5+0x268d+-0x2*0x944)),'fov':_0x1b1d48['fov'],'quat':_0x1b1d48[_0x5b20c6(0xdc6)],'pos':_0x1b1d48[_0x5b20c6(0x218)],'basis':_0x1b1d48['basis'],'errors':_0x1b1d48[_0x5b20c6(0xdc3)+'s'][_0x5b20c6(0xd92)](0x7*0x36e+0x1e0c+-0x360e,-0x61f+-0x1*-0x1c4f+-0x162c)};}catch(_0x5065c2){return{'ok':![],'error':_0x7f2287(_0x5065c2&&_0x5065c2[_0x5b20c6(0x2e3)+'ge']||_0x5065c2)[_0x5b20c6(0xd92)](0x25df*-0x1+-0x145c*0x1+0x3a3b,-0x885*-0x2+0x130d+-0x239f)};}}}}if(_0x4c395f){if(_0x3694ca[_0x5b20c6(0x413)](_0x5b20c6(0x5b3),_0x5b20c6(0x5b3)))return _0x23f778['faile'+'d']++,_0x3fa293[_0x5b20c6(0x57b)+_0x5b20c6(0xbc6)]=_0x40a078['lastE'+_0x5b20c6(0xbc6)]||_0x3694ca['sUxCt'](_0x3694ca['AFgOp'](_0x3694ca['zMaTa'],_0x6707c6['toStr'+_0x5b20c6(0x710)](-0x107d+0x14af+-0x2e*0x17)),_0x5b20c6(0x3c2)+_0x5b20c6(0xc88)+_0x5b20c6(0xb31)+'0x')+_0xa8aadb[_0x5b20c6(0x46b)+_0x5b20c6(0xcb3)][_0x5b20c6(0x69e)+'ing'](-0x10d8+0x4a5*-0x8+0x3610),_0x43bfdf;else try{_0x4c395f[_0x5b20c6(0x21a)+_0x5b20c6(0x1f5)+'t']=_0x3694ca[_0x5b20c6(0x8dd)](_0x28ac2e,_0xc50023);}catch(_0x5c8208){_0x4c395f[_0x5b20c6(0x21a)+_0x5b20c6(0x1f5)+'t']=JSON[_0x5b20c6(0xc35)+_0x5b20c6(0x593)](_0xc50023,null,-0x1621+-0x1273+0x2895);}}console[_0x5b20c6(0x76c)]('%c[sa'+_0x5b20c6(0x7f9)+'\x20Skil'+'lWarz'+_0x5b20c6(0x87e)+'rt',_0x3694ca['TWurk']+_0x243c0c+_0x3694ca[_0x5b20c6(0x6fa)],_0xc50023),console['log'](_0x3694ca['yiPxC'](_0x33c6f5+'\x0a'+JSON[_0x5b20c6(0xc35)+_0x5b20c6(0x593)](_0xc50023,null,-0xcf*0x1f+-0x175d+-0x306f*-0x1)+'\x0a',_0x4c0449));}};return _0x28537c[_0x4ab132(0xe3d)+'et'][_0x4ab132(0xaf1)]='1',_0x28537c[_0x4ab132(0xaf1)]=_0x4de400,_0x4de400;}function _0x28ac2e(_0x58be6){var _0x19263f=_0x57da09,_0x34b085=[];_0x34b085[_0x19263f(0xc27)](_0x2e21ac['VGEsQ'](_0x19263f(0x4c8)+_0x19263f(0x86f)+(_0x58be6['host']||'?'),_0x2e21ac['JTnme'])+Math[_0x19263f(0x3c3)]((_0x58be6['elaps'+'edMs']||-0x5*-0x624+0x2476+-0x432a)/(0x1*-0x2482+0x66b+0x21ff))+'s)'),_0x34b085[_0x19263f(0xc27)](_0x2e21ac['WceSH'](_0x2e21ac[_0x19263f(0x8f1)](_0x2e21ac['LmOSA']+(_0x58be6[_0x19263f(0x9c2)]?_0x19263f(0x432):'no'),'\x20\x20\x20co'+_0x19263f(0xc93)+'\x20')+(_0x58be6[_0x19263f(0x8e2)+_0x19263f(0x30e)+'ext']?_0x19263f(0x432):'no'),_0x19263f(0xda4)+_0x19263f(0x870))+(_0x58be6[_0x19263f(0x263)+'ount']!=null?_0x58be6[_0x19263f(0x263)+_0x19263f(0x927)]:'?')),_0x34b085['push'](_0x2e21ac['OLKSv'](_0x2e21ac[_0x19263f(0x52c)](_0x19263f(0x655)+_0x19263f(0x86f),_0x58be6[_0x19263f(0x655)+_0x19263f(0x229)+'ed'])+'/'+_0x58be6['hooks'+'Total'],_0x19263f(0xd5e)+_0x19263f(0xd6f))),_0x34b085['push']('');var _0xb0878f=_0x58be6['insta'+_0x19263f(0x251)]||{},_0xbaa748=Object['keys'](_0xb0878f);!_0xbaa748['lengt'+'h']&&(_0x34b085[_0x19263f(0xc27)](_0x19263f(0x592)+_0x19263f(0xc97)+_0x19263f(0x7ab)+_0x19263f(0xac3)+_0x19263f(0x700)+_0x19263f(0x4fe)),_0x34b085[_0x19263f(0xc27)](''),_0x34b085[_0x19263f(0xc27)](_0x19263f(0x746)+_0x19263f(0xcb9)+_0x19263f(0xcd2)+'on\x20th'+_0x19263f(0xa5d)+'e\x27s\x20o'+_0x19263f(0x954)+'date('+');\x20no'+'thing'+_0x19263f(0xac3)+'ured\x20'+_0x19263f(0x313)),_0x34b085[_0x19263f(0xc27)](_0x19263f(0x9ed)+'date\x20'+'ran\x20y'+'et,\x20o'+'r\x20the'+'\x20sign'+_0x19263f(0x63a)+_0x19263f(0x769)+_0x19263f(0x4b2)+_0x19263f(0x26e)));for(var _0x144078=-0xa*-0x13+0x12ca+0x32*-0x64;_0x2e21ac['lmCUs'](_0x144078,_0xbaa748[_0x19263f(0x875)+'h']);_0x144078++){var _0x45708a=_0xbaa748[_0x144078];_0x34b085[_0x19263f(0xc27)](_0x2e21ac[_0x19263f(0x2a9)](_0x45708a,_0x19263f(0xc48))+_0xb0878f[_0x45708a]);}_0x34b085[_0x19263f(0xc27)]('');var _0x5543db=_0x58be6['surve'+'y']||{},_0x222040=Object[_0x19263f(0x82e)](_0x5543db);for(var _0xbf0047=-0x201*0x9+-0x1b75+0x2d7e;_0x2e21ac[_0x19263f(0x873)](_0xbf0047,_0x222040[_0x19263f(0x875)+'h']);_0xbf0047++){if(_0x2e21ac['cYJPQ'](_0x2e21ac[_0x19263f(0x90c)],_0x2e21ac['DXZzy'])){var _0xc5d07c=_0x222040[_0xbf0047],_0x94223c=_0x5543db[_0xc5d07c];if(!_0x94223c||!_0x94223c[_0x19263f(0x875)+'h'])continue;_0x34b085['push'](_0x2e21ac['GfhvP']+_0xc5d07c+'\x20'+new Array(Math[_0x19263f(0x417)](-0x6*0x5fb+-0xaab+0x2e8e,0x838+0x118c+0x22*-0xc1-_0xc5d07c[_0x19263f(0x875)+'h']))['join']('─')),_0x34b085[_0x19263f(0xc27)](_0x2e21ac[_0x19263f(0xc6b)]);for(var _0x7695f1=-0xf3*-0x3+-0x16e1*-0x1+-0x19ba;_0x2e21ac['xXuOP'](_0x7695f1,_0x94223c[_0x19263f(0x875)+'h']);_0x7695f1++){var _0x3db849=_0x94223c[_0x7695f1],_0x506cf1=typeof _0x3db849['v']===_0x2e21ac[_0x19263f(0xae3)]?_0x2e21ac[_0x19263f(0xe00)](Math['round'](_0x3db849['v']*(0x6*-0x453+-0x11b7+-0x171*-0x21)),0x12dd*0x1+-0x11*-0x208+-0x107f*0x3):_0x3db849['v'];_0x34b085[_0x19263f(0xc27)](_0x2e21ac[_0x19263f(0xc77)](_0x2e21ac[_0x19263f(0x3f7)]('\x20\x20'+_0x2e21ac[_0x19263f(0x8f1)]('0x',_0x3db849['o'][_0x19263f(0x69e)+_0x19263f(0x710)](0xae7*-0x3+0x2*-0xae6+0x3691))[_0x19263f(0xa59)+'d'](-0x3ed*-0x3+-0x198a+0x499*0x3)+'\x20'+_0x3db849['k']['padEn'+'d'](0x2652+-0x3d5*-0x6+-0x3d45),'\x20'),String(_0x506cf1)[_0x19263f(0xa59)+'d'](-0x1d7b+-0x4f7+0x2282))+'\x20'+(_0x3db849['raw']||''));}_0x34b085[_0x19263f(0xc27)]('');}else _0x334d86=_0x4ed364['pitch'],_0x5d295c=_0x3f2dbe[_0x19263f(0xb17)],_0x540a62['sourc'+'e']=_0x2e21ac[_0x19263f(0x53b)](_0x19263f(0xcd9)+_0x19263f(0x454)+'r\x20('+_0x2826e8['order'],')');}if(_0x58be6[_0x19263f(0xa70)+_0x19263f(0xaa0)]&&_0x58be6['warni'+'ngs']['lengt'+'h']){if(_0x2e21ac['EdQZA'](_0x19263f(0x33d),_0x19263f(0x33d))){_0x34b085['push'](_0x19263f(0xa70)+'ngs');for(var _0x24dd50=0x2137+-0x14bc*-0x1+-0x1*0x35f3;_0x24dd50<_0x58be6[_0x19263f(0xa70)+_0x19263f(0xaa0)][_0x19263f(0x875)+'h'];_0x24dd50++)_0x34b085[_0x19263f(0xc27)](_0x2e21ac['daSmg'](_0x19263f(0xd20),_0x58be6['warni'+'ngs'][_0x24dd50]));}else _0x1cccfc['st']['lastW'+'ritte'+'n']=_0x38ae99['froun'+'d'](_0x2d53e7),_0x308c05++,_0x1c91eb['push']('0x'+_0x2f18b1['o']['toStr'+_0x19263f(0x710)](0x1*-0x460+0x8e9*-0x4+0x5*0x804));}return _0x34b085[_0x19263f(0xc59)]('\x0a');}window[_0x57da09(0x62c)+'entLi'+_0x57da09(0x80e)+'r'](_0x2e21ac[_0x57da09(0x586)],function(_0x421fb3){var _0xb6452d=_0x57da09,_0x5557a4=_0x421fb3[_0xb6452d(0x87d)];if(!_0x5557a4||_0x2e21ac[_0xb6452d(0x697)](_0x5557a4[_0xb6452d(0xa48)+_0xb6452d(0x5a5)],_0x37944b))return;try{if(_0x5557a4['kind']===_0x2e21ac['sMIZe']){if(_0x2e21ac[_0xb6452d(0xc66)]('LArvk','LArvk'))return new _0x15e26b(_0x5e6c81[_0xb6452d(0x3df)+'r'],_0x457c8d['byteO'+_0xb6452d(0x471)],_0x46999f[_0xb6452d(0x46b)+'ength']);else{_0x498c32()['set']({'host':_0x5557a4['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}}if(_0x5557a4['kind']==='repor'+'t')_0x2e21ac['FdJrx'](_0x498c32)[_0xb6452d(0xbd1)](_0x5557a4[_0xb6452d(0x717)+'t']);}catch(_0x3d1adc){console['warn'](_0x2e21ac['OLHir'],_0x2e21ac['VreDd'](_0x2e21ac[_0xb6452d(0xc8e)],_0x243c0c),_0x3d1adc);}});function _0x1fa50e(){_0x2937b0(!![]);}if(document['body'])_0x1fa50e();else document[_0x57da09(0x62c)+_0x57da09(0x754)+_0x57da09(0x80e)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x1fa50e,{'once':!![]});return;}window['__SAK'+_0x57da09(0xe22)+_0x57da09(0x505)]=window['__SAK'+_0x57da09(0xe22)+'W__']||{'at':Date['now']()};function _0x540114(_0x3a0102,_0x527ef7){var _0x34775b=_0x57da09,_0x3c0453={'lIOLw':_0x34775b(0x97c)};if('TwbMP'!=='PLhJX'){var _0x59a015={'__sakura':_0x37944b,'kind':_0x3a0102};if(_0x527ef7){for(var _0x2af267 in _0x527ef7)_0x59a015[_0x2af267]=_0x527ef7[_0x2af267];}try{if(window[_0x34775b(0x4dc)+'t']&&window['paren'+'t']!==window)window['paren'+'t'][_0x34775b(0xb59)+_0x34775b(0xbfd)+'e'](_0x59a015,'*');}catch(_0x125a08){}try{if(window[_0x34775b(0x4cf)]&&window['top']!==window)window[_0x34775b(0x4cf)]['postM'+'essag'+'e'](_0x59a015,'*');}catch(_0x40e7e2){}}else try{var _0x65e192=_0x15e645;if(_0x65e192&&_0x65e192['el'])_0x65e192['el']['style']['displ'+'ay']=_0x38e4cc?'':_0x34775b(0x97c);var _0x493ee4=_0x325af3;if(_0x493ee4&&_0x493ee4['cv'])_0x493ee4['cv'][_0x34775b(0x21d)]['displ'+'ay']=_0x2e8712?'':_0x3c0453['lIOLw'];}catch(_0x41b037){}}console[_0x57da09(0x76c)]('%c[sa'+'kura]'+_0x57da09(0x8b5)+_0x57da09(0x4bb)+'\x20ACTI'+'VE\x20v'+_0x150f3f,_0x2e21ac[_0x57da09(0xbbe)](_0x2e21ac[_0x57da09(0x392)](_0x2e21ac['jbqXv'],_0x243c0c),_0x57da09(0x4a1)+_0x57da09(0x2a0)+'ht:70'+'0;fon'+_0x57da09(0x3c8)+_0x57da09(0x566)+'x'),{'host':_0x2ba949,'href':location[_0x57da09(0xc71)],'version':_0x150f3f}),_0x2e21ac[_0x57da09(0xa13)](_0x540114,_0x2e21ac['sMIZe'],{'host':_0x2ba949,'role':_0x5b6a2a});var _0x3de6c1=window[_0x57da09(0x8ef)+'URA_S'+'W__']&&window['__SAK'+'URA_S'+_0x57da09(0x505)]['at']||Date['now']();window['addEv'+_0x57da09(0x754)+_0x57da09(0x80e)+'r'](_0x57da09(0x2e3)+'ge',function(_0x593826){var _0x192e82=_0x57da09;try{if(_0x2e21ac[_0x192e82(0x941)]===_0x2e21ac['gXoPi'])try{_0x1f9948=_0x527bd5['keys'](_0x9c9141)[_0x192e82(0xd92)](0x3b+-0x1*-0x1f13+0x2*-0xfa7,-0x6fc+0x273+0x4a1);}catch(_0x13fa32){}else{var _0x2ade45=_0x593826&&_0x593826[_0x192e82(0x87d)];if(!_0x2ade45||_0x2ade45[_0x192e82(0xa48)+_0x192e82(0x5a5)]!==_0x37944b||_0x2e21ac['rBcMX'](_0x2ade45[_0x192e82(0x40b)],_0x192e82(0x77e)))return;_0x425963(_0x2ade45[_0x192e82(0x77e)],_0x2ade45[_0x192e82(0x727)]);}}catch(_0x23ea5e){}});try{var _0x2f65bd=new BroadcastChannel(_0x2e21ac[_0x57da09(0x20e)]);_0x2f65bd[_0x57da09(0x2c8)+_0x57da09(0xb64)]=function(_0x29e24c){var _0x1fb47c=_0x57da09;if(_0x2e21ac[_0x1fb47c(0x27b)]==='eurkS'){var _0x1d5ef9=_0x29e24c[_0x1fb47c(0x87d)];if(_0x1d5ef9&&_0x2e21ac['ymgTm'](_0x1d5ef9['__sak'+_0x1fb47c(0x5a5)],_0x37944b)&&_0x1d5ef9[_0x1fb47c(0x40b)]===_0x2e21ac['hxpBx'])_0x425963(_0x1d5ef9[_0x1fb47c(0x77e)],_0x1d5ef9['arg']);}else _0x3079e1++,_0x111265[_0x1fb47c(0xdb0)]=!![];};}catch(_0x4af472){}var _0x216f69=[];(function _0x1a6069(){var _0x28d8f2=_0x57da09,_0x513eae={'FWXcH':function(_0xfc86cb,_0x21b517){return _0xfc86cb===_0x21b517;}};if(_0x2e21ac['fiWkb']('FqSKc','eSQSH')){var _0x3e85b0=['log','warn',_0x28d8f2(0xdc3),'info',_0x28d8f2(0x1e2)];for(var _0x3a1bd3=-0x29*0xaf+-0x14dc+-0x9c7*-0x5;_0x3a1bd3<_0x3e85b0[_0x28d8f2(0x875)+'h'];_0x3a1bd3++){(function(_0x50c7f9){var _0x373c7f=_0x28d8f2,_0x22d42e={'eLwiq':function(_0x4a287d,_0x25efba){return _0x4a287d!==_0x25efba;},'ZwgGG':function(_0x11bfcf,_0x48b7cf){return _0x11bfcf<_0x48b7cf;},'Zwwuv':function(_0x5b4d17,_0x50606c){return _0x5b4d17!==_0x50606c;},'ChWUS':_0x2e21ac[_0x373c7f(0xbe1)],'OhYqk':function(_0x38a3d3,_0x4d05e6){return _0x38a3d3===_0x4d05e6;},'iZnfT':function(_0x6236a4,_0x7fd2e3){return _0x6236a4<_0x7fd2e3;}},_0x15b1f2=console[_0x50c7f9];if(_0x2e21ac[_0x373c7f(0xbff)](typeof _0x15b1f2,_0x373c7f(0x827)+_0x373c7f(0xb69)))return;console[_0x50c7f9]=function(){var _0x479104=_0x373c7f;if('SlRSc'!==_0x479104(0x473)){try{if(_0x22d42e['eLwiq']('rEBOM',_0x479104(0x1e8)))try{if(_0x58ba88[_0x2005b4]['conte'+_0x479104(0xe19)+_0x479104(0xb36)])_0xdc6251[_0x3025cb]['conte'+'ntWin'+_0x479104(0xb36)][_0x479104(0xb59)+_0x479104(0xbfd)+'e'](_0x25d3bf,'*');}catch(_0xd66b7b){}else{var _0x18b74d='';for(var _0x60cb09=0x2f*-0x67+-0xd6*-0x1+0x1*0x1213;_0x22d42e['ZwgGG'](_0x60cb09,arguments['lengt'+'h']);_0x60cb09++){var _0x39549a=arguments[_0x60cb09];if(typeof _0x39549a==='strin'+'g')_0x18b74d+=_0x39549a;else{if(_0x39549a&&_0x39549a[_0x479104(0x2e3)+'ge'])_0x18b74d+=_0x39549a['messa'+'ge'];}}if(_0x22d42e[_0x479104(0x319)](_0x18b74d['index'+'Of'](_0x33c6f5),-(-0xa5+-0x1*-0x957+0x1*-0x8b1)))return _0x15b1f2['apply'](console,arguments);if(_0x18b74d[_0x479104(0x75d)+'Of'](_0x22d42e['ChWUS'])!==-(-0xdd7+-0x4*0x1ab+0x1484)){var _0x3b5f0b=_0x18b74d[_0x479104(0xd92)](-0x44*0x82+0x44*-0x84+0x88*0x83,0x1*0xf26+-0x1*0x26e+-0xb8c);if(_0x22d42e['OhYqk'](_0x216f69['index'+'Of'](_0x3b5f0b),-(0x1caa+0x1*-0x24cd+-0x412*-0x2))&&_0x22d42e[_0x479104(0x7b5)](_0x216f69[_0x479104(0x875)+'h'],-0xa3*0x8+-0x115*0x8+-0xb3*-0x14))_0x216f69[_0x479104(0xc27)](_0x3b5f0b);}}}catch(_0x8e6e0b){}return _0x15b1f2[_0x479104(0x8ea)](console,arguments);}else return null;};}(_0x3e85b0[_0x3a1bd3]));}}else{var _0x13fee5=_0x3e94ce[_0x28d8f2(0xde4)+'r'](function(_0x209f56){return _0x209f56['type']===_0x5f51df;})[-0x8a9+0x22*-0x53+0x13af];_0x59448a={'type':_0x87e776,'atMs':_0x553f75[_0x28d8f2(0x858)]()-_0xd6d10e,'originalFunc':!!(_0x13fee5&&_0x13fee5[_0x28d8f2(0xa7a)]&&_0x513eae[_0x28d8f2(0xcf5)](typeof _0x13fee5[_0x28d8f2(0xa7a)]['origi'+_0x28d8f2(0xa86)+'nc'],_0x28d8f2(0x827)+_0x28d8f2(0xb69))),'resolveGameAtFire':!!_0x35ed83(),'gameSourceAtFire':_0x4d8d87[_0x28d8f2(0x968)+'e']};}}());var _0x46990d={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x37956c=null,_0x1ee8e3=null,_0x28292c=-(-0x4bb+-0xa66+0x12a*0xd),_0x159e36=null;function _0xe2a364(_0x4fb4ac){var _0x2710ca=_0x57da09,_0x4c4efa={'IeTfM':function(_0x38b6ca,_0x45696e){return _0x38b6ca<_0x45696e;}};try{if(!_0x4fb4ac)return;var _0x545e88=_0x4fb4ac[_0x2710ca(0xb5b)+_0x2710ca(0xac5)]?_0x4fb4ac['insta'+_0x2710ca(0xac5)]['expor'+'ts']:_0x4fb4ac[_0x2710ca(0xe4e)+'ts']||null;if(!_0x545e88)return;if(!_0x159e36){if(_0x2e21ac['RWAzu']!=='WvuNm')try{_0x159e36=Object[_0x2710ca(0x82e)](_0x545e88)['slice'](0x1e4b*0x1+-0x1c9c+-0x1af,-0x1*-0x178b+-0x41b*0x9+-0x12*-0xc0);}catch(_0x2714a0){}else{var _0x312a16=-0x7*-0x45+0x2180+0x2363*-0x1;for(var _0x2bbff2=-0x2299+-0x12de+0x3577;_0x4c4efa[_0x2710ca(0xa1e)](_0x2bbff2,_0x1751ff[_0x2710ca(0x875)+'h']);_0x2bbff2++){if(_0x575876[_0x2bbff2][_0x2710ca(0xa7a)]&&_0x297de3[_0x2bbff2]['hook']['appli'+'ed'])_0x312a16++;}return _0x312a16;}}var _0x58044d=_0x545e88['memor'+'y'];_0x58044d&&_0x58044d['buffe'+'r']&&_0x2e21ac['yfGlv'](_0x58044d['buffe'+'r'][_0x2710ca(0x46b)+_0x2710ca(0xcb3)],-0x24cc+-0x33f*0x4+0x31c8)&&(_0x1ee8e3=_0x58044d,_0x28292c=_0x2e21ac[_0x2710ca(0x42b)](Date[_0x2710ca(0x858)](),_0x3de6c1));}catch(_0x570db0){}}function _0x1d2a9d(){var _0x3ea896=_0x57da09,_0x14bc31={'JsfCY':function(_0x1002e8,_0x276dbe){return _0x2e21ac['bkaAK'](_0x1002e8,_0x276dbe);}};try{if(typeof WebAssembly===_0x2e21ac['gakac'])return;var _0x2e8585=[_0x3ea896(0xb5b)+'ntiat'+'e',_0x3ea896(0xb5b)+_0x3ea896(0x1ee)+'eStre'+_0x3ea896(0xb9d)];for(var _0x1ed327=-0x2663*0x1+-0x1b6b+0x41ce;_0x2e21ac['xXuOP'](_0x1ed327,_0x2e8585[_0x3ea896(0x875)+'h']);_0x1ed327++){(function(_0x4cbf02){var _0x5d4219=_0x3ea896,_0x580e62=WebAssembly[_0x4cbf02];if(typeof _0x580e62!==_0x2e21ac[_0x5d4219(0xc13)]||_0x580e62[_0x5d4219(0xa48)+'uraMe'+'moryT'+'ap'])return;var _0x29ca1e=function(){var _0x2f4015=_0x5d4219,_0x48af61=_0x580e62[_0x2f4015(0x8ea)](this,arguments);try{if(_0x48af61&&_0x14bc31[_0x2f4015(0xd0e)](typeof _0x48af61['then'],'funct'+_0x2f4015(0xb69)))_0x48af61['then'](_0xe2a364,function(){});else _0xe2a364(_0x48af61);}catch(_0x5c5fe0){}return _0x48af61;};_0x29ca1e[_0x5d4219(0xa48)+_0x5d4219(0xa3f)+_0x5d4219(0xa94)+'ap']=!![];try{if(_0x2e21ac[_0x5d4219(0x939)]('VziuT',_0x5d4219(0x31a)))return _0x165fd3[_0x5d4219(0x28c)+'em'](_0x5e2990)==='1';else Object['defin'+_0x5d4219(0xbcf)+_0x5d4219(0x231)](_0x29ca1e,'name',{'value':_0x580e62['name'],'configurable':!![]});}catch(_0x5e6c97){}WebAssembly[_0x4cbf02]=_0x29ca1e;}(_0x2e8585[_0x1ed327]));}}catch(_0x8354b9){}}var _0x3408e4=null,_0x202852=null,_0x384a49={},_0x50452b={'MouseLook':[{'name':_0x2e21ac[_0x57da09(0x959)],'ret':'void','params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['itPuA'],'ret':_0x57da09(0x6d4),'params':[_0x2e21ac[_0x57da09(0xaae)]],'wasmParams':[_0x57da09(0x25a),_0x2e21ac[_0x57da09(0x99a)]]},{'name':_0x2e21ac['GNjsc'],'ret':_0x57da09(0x6d4),'params':['float'],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x57da09(0x550)]},{'name':_0x2e21ac['cLylT'],'ret':_0x57da09(0x6d4),'params':[_0x57da09(0x23d)],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x2e21ac['nlVRQ']]},{'name':_0x57da09(0x3ec)+'\u0093\u0090\u0088\u0092\u0090'+'\u0091','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x57da09(0x88f)+_0x57da09(0x66f)+'\u0094','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0xd7e)+_0x57da09(0xc6d)+'\u008f','ret':_0x57da09(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x57da09(0xa55)+_0x57da09(0x7bf),'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac[_0x57da09(0x477)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x57da09(0xada)+_0x57da09(0x409)+'\u0095','ret':_0x57da09(0x23d),'params':[],'wasmParams':['i32'],'wasmRet':_0x57da09(0x550)},{'name':_0x2e21ac['xywsA'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u0087\u008e\u0089\u008e\u0091'+_0x57da09(0x650)+'\u0088','ret':'void','params':[_0x57da09(0x23d)],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x57da09(0x550)]},{'name':_0x57da09(0xbcd)+_0x57da09(0x345)+'\u008d','ret':_0x57da09(0x23d),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]],'wasmRet':_0x2e21ac[_0x57da09(0x99a)]},{'name':'\u008d\u0095\u0088\u0092\u008c'+'\u008c\u0090\u0089\u0086\u0092'+'\u0092','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u008f\u008c\u0086\u008e\u008f'+'\u0087\u0087\u008c\u0086\u0086'+'\u0091','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0x852)+'\u0093\u0091\u0089\u0088\u008d'+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x57da09(0x495)+'\u0089\u008d\u008f\u0087\u0091'+'\u0093','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['IZLJu'],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[_0x2e21ac[_0x57da09(0xaae)],'float'],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x2e21ac[_0x57da09(0x99a)],'f32']},{'name':_0x2e21ac['XBERt'],'ret':_0x2e21ac['iMgby'],'params':[],'wasmParams':[_0x57da09(0x25a)],'wasmRet':_0x2e21ac['nlVRQ']},{'name':'\u008b\u0092\u0089\u0090\u008d'+_0x57da09(0x486)+'\u0088','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac['OEDvn'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':'\u0093\u008c\u0091\u0091\u0093'+_0x57da09(0x346)+'\u008e','ret':_0x57da09(0x6d4),'params':['float'],'wasmParams':[_0x57da09(0x25a),_0x2e21ac['nlVRQ']]},{'name':_0x2e21ac[_0x57da09(0x3e9)],'ret':_0x2e21ac[_0x57da09(0xaae)],'params':[],'wasmParams':[_0x57da09(0x25a)],'wasmRet':_0x57da09(0x550)},{'name':'\u0094\u008d\u0091\u0091\u0090'+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':_0x57da09(0x6d4),'params':[_0x2e21ac[_0x57da09(0xaae)],_0x2e21ac[_0x57da09(0xaae)]],'wasmParams':['i32',_0x2e21ac[_0x57da09(0x99a)],'f32']},{'name':_0x57da09(0x3d5)+_0x57da09(0xe0e)+'\u008d','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':['i32']},{'name':_0x2e21ac[_0x57da09(0x40e)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u008e\u0092\u0091\u0088\u0092'+_0x57da09(0xc5e)+'\u008b','ret':_0x2e21ac['ttgCJ'],'params':[_0x57da09(0x23d)],'wasmParams':['i32',_0x57da09(0x550)]},{'name':'\u0090\u008e\u0095\u0093\u008d'+'\u0089\u0094\u008c\u008b\u0089'+'\u0093','ret':_0x57da09(0x23d),'params':[],'wasmParams':['i32'],'wasmRet':_0x57da09(0x550)},{'name':_0x57da09(0x784)+'\u0088\u0090\u0095\u0089\u008d'+'\u008a','ret':'float','params':[],'wasmParams':[_0x57da09(0x25a)],'wasmRet':_0x57da09(0x550)},{'name':_0x57da09(0x273)+_0x57da09(0xd7f)+'\u0088','ret':_0x57da09(0x6d4),'params':[_0x57da09(0x23d)],'wasmParams':[_0x2e21ac['JeeQp'],'f32']},{'name':_0x57da09(0xbfa)+_0x57da09(0xd68)+'\u008c','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x61d)+'\u008c\u008a\u0086\u0090\u0087'+'\u0093','ret':'void','params':[_0x2e21ac[_0x57da09(0xaae)]],'wasmParams':['i32',_0x57da09(0x550)]},{'name':_0x57da09(0x376)+_0x57da09(0x502)+'\u0089','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0x68e)+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','ret':'void','params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['dMbCl'],'ret':'void','params':['float'],'wasmParams':[_0x57da09(0x25a),_0x57da09(0x550)]}],'FPScontroller':[{'name':_0x57da09(0x5fd)+_0x57da09(0x4c4)+'\u008e','ret':_0x2e21ac[_0x57da09(0xaae)],'params':[],'wasmParams':['i32'],'wasmRet':_0x57da09(0x550)},{'name':_0x2e21ac['qHExq'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x57da09(0xbb9)+'\u0094\u0090\u0094\u008c\u0094'+'\u0094','ret':_0x2e21ac[_0x57da09(0x351)],'params':[],'wasmParams':['i32'],'wasmRet':_0x57da09(0x25a)},{'name':'\u0090\u0087\u0089\u0088\u008e'+_0x57da09(0xa67)+'\u008b','ret':'void','params':['bool'],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],'i32']},{'name':_0x2e21ac[_0x57da09(0x4b7)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':['i32']},{'name':_0x2e21ac[_0x57da09(0xa4a)],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x993)+_0x57da09(0x2da)+'\u008a','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac['LUhqW'],'ret':_0x2e21ac[_0x57da09(0x351)],'params':[],'wasmParams':['i32'],'wasmRet':_0x2e21ac[_0x57da09(0x859)]},{'name':_0x57da09(0xb1d)+_0x57da09(0x653)+'\u0087','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac[_0x57da09(0x6c3)],'ret':_0x57da09(0x819),'params':[],'wasmParams':['i32'],'wasmRet':_0x57da09(0x25a)},{'name':_0x2e21ac[_0x57da09(0xc22)],'ret':_0x57da09(0x819),'params':[],'wasmParams':[_0x57da09(0x25a)],'wasmRet':'i32'},{'name':_0x2e21ac[_0x57da09(0x5dc)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0x774)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':['i32']},{'name':_0x2e21ac['uDVpJ'],'ret':_0x2e21ac[_0x57da09(0x351)],'params':[_0x2e21ac['dIVaX'],_0x57da09(0x819)],'wasmParams':[_0x57da09(0x25a),_0x2e21ac[_0x57da09(0x859)],_0x2e21ac['JeeQp']],'wasmRet':_0x57da09(0x25a)},{'name':_0x57da09(0xb2d)+_0x57da09(0x8c3)+'\u0090','ret':'void','params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0x934)],'ret':_0x57da09(0x819),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]],'wasmRet':_0x57da09(0x25a)},{'name':_0x57da09(0x888)+'\u008b\u008c\u0087\u008d\u0095'+'\u008f','ret':_0x57da09(0x6d4),'params':[_0x2e21ac['dIVaX']],'wasmParams':[_0x57da09(0x25a),_0x2e21ac[_0x57da09(0x859)]]},{'name':'\u0095\u008e\u0095\u0087\u0086'+'\u0090\u0089\u008f\u008e\u0093'+'\u008e','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0x2d5)],'ret':'bool','params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]],'wasmRet':_0x2e21ac[_0x57da09(0x859)]},{'name':_0x2e21ac[_0x57da09(0x605)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['odNxt'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x57da09(0x4ad)+_0x57da09(0x9a3)+'\u0089','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':'\u008a\u0088\u0087\u0090\u008f'+_0x57da09(0x4e7)+'\u008b','ret':'void','params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0xa74)+'\u008f\u008b\u008e\u008d\u008f'+'\u0094','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0xcda)+_0x57da09(0x283)+'\u0090','ret':_0x2e21ac['ttgCJ'],'params':[_0x2e21ac[_0x57da09(0x351)]],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x57da09(0x25a)]},{'name':_0x2e21ac['zxLHc'],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['EfKtP'],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':['i32']},{'name':_0x2e21ac['Czofm'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0x276)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x515)+'\u0089\u008e\u0095\u0095\u0087'+'\u008a','ret':'void','params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x2e21ac[_0x57da09(0x5a6)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0x38d)+_0x57da09(0x9fc)+'\u0091','ret':'void','params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0x848)],'ret':_0x2e21ac['ttgCJ'],'params':['bool'],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],'i32']},{'name':_0x57da09(0x84b)+_0x57da09(0xbd8)+'\u0090','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['ABJKl'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0x8bb)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':'\u0087\u0094\u0091\u0095\u008f'+'\u008c\u0090\u0087\u008c\u0086'+'\u0087','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x807)+_0x57da09(0xcfd)+'\u0087','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':['i32']},{'name':_0x2e21ac['ZXxTj'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['Dijhr'],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':['bool'],'wasmParams':[_0x2e21ac['JeeQp'],'i32']},{'name':'\u008b\u0092\u008b\u008f\u0095'+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','ret':'bool','params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]],'wasmRet':'i32'},{'name':_0x2e21ac['uhxZc'],'ret':'bool','params':[],'wasmParams':[_0x57da09(0x25a)],'wasmRet':_0x57da09(0x25a)},{'name':_0x57da09(0xa87)+_0x57da09(0x54b)+'\u008d','ret':'bool','params':[],'wasmParams':[_0x2e21ac['JeeQp']],'wasmRet':_0x57da09(0x25a)},{'name':_0x57da09(0x371)+_0x57da09(0x5cf)+'\u0094','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x458),'ret':_0x57da09(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x2e21ac[_0x57da09(0xcd0)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':'\u0087\u0095\u008f\u008d\u008e'+'\u0089\u0087\u008f\u0092\u0095'+'\u0091','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x2e21ac['UvLib'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x2e21ac[_0x57da09(0x897)],'ret':'void','params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x57da09(0xb7d)+'\u0093\u0095\u0095\u0093\u008a'+'\u0094','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[_0x2e21ac[_0x57da09(0xaae)]],'wasmParams':[_0x57da09(0x25a),'f32']},{'name':_0x57da09(0x3e4)+_0x57da09(0xb46)+'\u0092','ret':_0x57da09(0x819),'params':[],'wasmParams':[_0x57da09(0x25a)],'wasmRet':_0x2e21ac[_0x57da09(0x859)]},{'name':_0x2e21ac[_0x57da09(0x459)],'ret':'void','params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x57da09(0x7ba)+_0x57da09(0xbd4)+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0090\u0090\u008f\u008d\u008a'+_0x57da09(0xdfb)+'\u0092','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u008b\u0090\u008d\u0095\u0086'+_0x57da09(0x2a4)+'\u008c','ret':_0x2e21ac[_0x57da09(0x351)],'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x57da09(0x67e)+'\u0087\u008d\u008f\u008d\u0095'+'\u0087','ret':_0x57da09(0x819),'params':['bool',_0x57da09(0x819)],'wasmParams':[_0x2e21ac['JeeQp'],_0x2e21ac[_0x57da09(0x859)],_0x2e21ac['JeeQp']],'wasmRet':_0x2e21ac[_0x57da09(0x859)]},{'name':'Updat'+'e','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac['ZzJmW'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':'\u0090\u008c\u008a\u008a\u0090'+'\u0091\u0092\u008f\u0090\u008e'+'\u0091','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0xa6c)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':['i32']},{'name':'\u0090\u0093\u0090\u008f\u0088'+_0x57da09(0x320)+'\u008f','ret':_0x57da09(0x6d4),'params':[_0x2e21ac[_0x57da09(0xaae)]],'wasmParams':['i32',_0x2e21ac['nlVRQ']]},{'name':_0x2e21ac[_0x57da09(0xbc8)],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0xbb3)],'ret':'bool','params':[_0x57da09(0x819),_0x57da09(0x819)],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x57da09(0x25a),_0x2e21ac['JeeQp']],'wasmRet':'i32'},{'name':'\u008d\u0094\u0092\u0093\u0092'+_0x57da09(0x7b2)+'\u0095','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[_0x2e21ac['iMgby'],'bool'],'wasmParams':[_0x57da09(0x25a),'f32',_0x2e21ac['JeeQp']]},{'name':_0x2e21ac[_0x57da09(0x903)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0xe29)],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':'\u0095\u0088\u0090\u0092\u0090'+'\u0089\u0093\u0094\u008e\u008c'+'\u0095','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]}],'TDM_GameManager':[{'name':'\u008e\u0091\u0092\u0087\u0089'+'\u0086\u0094\u0094\u008e\u008d'+'\u0090','ret':'void','params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac['rNFsi'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0x60a)],'ret':_0x2e21ac['dIVaX'],'params':[_0x2e21ac[_0x57da09(0xbba)]],'wasmParams':[_0x2e21ac['JeeQp'],_0x57da09(0x25a)],'wasmRet':_0x2e21ac[_0x57da09(0x859)]},{'name':_0x2e21ac['eIyIZ'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x57da09(0x27d)+'\u0088\u0094\u008d\u008d\u008c'+'\u008c','ret':'void','params':['bool'],'wasmParams':[_0x57da09(0x25a),_0x57da09(0x25a)]},{'name':'\u008b\u0086\u008e\u0095\u0091'+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x57da09(0x36c)+_0x57da09(0xc29)+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2e21ac['rdCQE'],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x458),'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x984)+_0x57da09(0x7fa)+'\u0088','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':['i32']},{'name':_0x2e21ac[_0x57da09(0xcf7)],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u008b\u0088\u008d\u0087\u0090'+'\u008e\u008c\u0090\u008a\u008c'+'\u0094','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x29f)+_0x57da09(0xa98)+'\u008c','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x5e0)+'\u008a\u008e\u0092\u0095\u008b'+'\u0088','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2e21ac[_0x57da09(0x56f)],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0xbf6)+'\u008c\u008f\u0086\u0095\u0094'+'\u008a','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x2e21ac[_0x57da09(0x9e7)],'ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':['i32']},{'name':_0x57da09(0x887)+_0x57da09(0x94e)+'\u008a','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0xe44)+_0x57da09(0xc9b)+_0x57da09(0x3a7)+_0x57da09(0x2d2)+_0x57da09(0x5fe),'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0x4d3)+_0x57da09(0x97a)+'\u0093','ret':'void','params':[_0x2e21ac[_0x57da09(0x351)]],'wasmParams':[_0x57da09(0x25a),_0x57da09(0x25a)]},{'name':_0x57da09(0x225)+'\u008a\u0088\u0092\u0095\u0094'+'\u0086','ret':'void','params':['int',_0x2e21ac[_0x57da09(0xbba)],_0x57da09(0x643)],'wasmParams':[_0x2e21ac['JeeQp'],_0x2e21ac['JeeQp'],_0x57da09(0x25a),_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac[_0x57da09(0xcfa)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':'\u0088\u0091\u0095\u0093\u0087'+_0x57da09(0xbbc)+'\u008c','ret':_0x57da09(0x6d4),'params':[_0x57da09(0x643),_0x57da09(0x643),_0x2e21ac[_0x57da09(0xbba)]],'wasmParams':[_0x57da09(0x25a),_0x2e21ac['JeeQp'],_0x2e21ac[_0x57da09(0x859)],_0x57da09(0x25a)]},{'name':'\u0094\u0086\u008a\u008f\u008e'+_0x57da09(0x635)+'\u0092','ret':'bool','params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]],'wasmRet':_0x57da09(0x25a)},{'name':'Updat'+'e','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u008f\u0088\u008f\u0089\u0089'+_0x57da09(0x963)+'\u0087','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac['osKgT'],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x57da09(0xbfb)+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':_0x2e21ac['orNyo'],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x499)+_0x57da09(0x826)+'\u008c','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u0088\u008c\u0089\u008e\u0095'+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','ret':'void','params':[_0x57da09(0x819)],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x57da09(0x25a)]},{'name':_0x57da09(0x677)+'\u008b\u0087\u008f\u008d\u008f'+'\u0094','ret':'void','params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac[_0x57da09(0x5ac)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2e21ac[_0x57da09(0xade)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0x67d)],'ret':_0x2e21ac[_0x57da09(0x3c4)],'params':[_0x57da09(0x819)],'wasmParams':[_0x57da09(0x25a),'i32']},{'name':_0x2e21ac[_0x57da09(0xa8b)],'ret':_0x57da09(0x819),'params':[],'wasmParams':[_0x57da09(0x25a)],'wasmRet':_0x57da09(0x25a)},{'name':_0x2e21ac[_0x57da09(0x48e)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0xa5c)+_0x57da09(0x4cd)+'\u008a','ret':_0x57da09(0x819),'params':[_0x57da09(0x643)],'wasmParams':[_0x57da09(0x25a),_0x2e21ac['JeeQp']],'wasmRet':_0x2e21ac[_0x57da09(0x859)]},{'name':'\u0087\u008d\u0088\u0086\u008a'+_0x57da09(0x401)+'\u008e','ret':_0x57da09(0x6d4),'params':['bool'],'wasmParams':[_0x57da09(0x25a),_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac[_0x57da09(0xd14)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x57da09(0xc11)+_0x57da09(0x387)+'\u008e','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0x24a)+'\u0088\u008c\u0087\u008e\u0087'+'\u008c','ret':_0x57da09(0x6d4),'params':[_0x57da09(0x643),'int',_0x57da09(0x643)],'wasmParams':[_0x57da09(0x25a),_0x2e21ac[_0x57da09(0x859)],_0x2e21ac['JeeQp'],_0x2e21ac['JeeQp']]},{'name':_0x57da09(0xb61)+_0x57da09(0xaaa)+'\u008e','ret':'void','params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac['FGQVU'],'ret':'void','params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x2e21ac[_0x57da09(0x6ff)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0xe52)+'\u008c\u0086\u008f\u0091\u008f'+'\u008e','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0xbeb)+'\u0090\u0087\u0086\u0088\u008e'+'\u0094','ret':'void','params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x3d6)+_0x57da09(0xc61)+'\u0086','ret':_0x57da09(0x6d4),'params':[_0x2e21ac[_0x57da09(0x351)]],'wasmParams':['i32','i32']},{'name':_0x2e21ac[_0x57da09(0x5c8)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':'\u0089\u008a\u0086\u0092\u0089'+_0x57da09(0x8f2)+'\u0092','ret':_0x57da09(0x6d4),'params':[],'wasmParams':['i32']},{'name':'\u0088\u008a\u0088\u0090\u0094'+_0x57da09(0xc51)+'\u008e','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x2e21ac[_0x57da09(0x859)]]},{'name':_0x57da09(0x613)+_0x57da09(0xd74)+'\u0092','ret':_0x57da09(0x6d4),'params':['int','int'],'wasmParams':[_0x2e21ac[_0x57da09(0x859)],_0x57da09(0x25a),'i32']},{'name':_0x2e21ac[_0x57da09(0x7af)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x2e21ac[_0x57da09(0xdbc)],'ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x6e0)+'\u0089\u0094\u008e\u0093\u008f'+'\u0092','ret':_0x57da09(0x6d4),'params':[_0x2e21ac['dIVaX']],'wasmParams':[_0x57da09(0x25a),'i32']},{'name':_0x57da09(0x707)+_0x57da09(0x7ff)+'\u008a','ret':'void','params':[],'wasmParams':[_0x57da09(0x25a)]},{'name':_0x57da09(0x391)+_0x57da09(0x7e5)+'\u0095','ret':_0x2e21ac['ttgCJ'],'params':[],'wasmParams':[_0x2e21ac['JeeQp']]},{'name':'\u008e\u0094\u0093\u0094\u008d'+_0x57da09(0x8b6)+'\u0089','ret':_0x57da09(0x6d4),'params':[],'wasmParams':[_0x57da09(0x25a)]}]},_0x1cdd40=[],_0x2d2622=[],_0x4ebfc2={},_0xada6b2=-0x186*0x12+0xd7e+-0x1*-0xdee,_0x562ee0=![],_0x7ae708=[],_0x10ea0f=[{'type':_0x57da09(0x844)+_0x57da09(0xb9f)+_0x57da09(0x38c),'keep':!![]},{'type':_0x2e21ac['hcaUl'],'keep':!![]},{'type':_0x2e21ac[_0x57da09(0x31e)],'keep':![]},{'type':_0x2e21ac['VoUAP'],'keep':!![]},{'type':_0x57da09(0xd8d)+'meMan'+_0x57da09(0xc98),'keep':!![]},{'type':_0x2e21ac[_0x57da09(0xb04)],'keep':!![],'many':!![]},{'type':_0x2e21ac['CAshi'],'keep':!![],'many':!![]},{'type':_0x2e21ac['hTPMu'],'keep':!![],'many':!![]},{'type':_0x2e21ac[_0x57da09(0x923)],'keep':!![],'many':!![]}],_0x451309=[_0x57da09(0xafb)+_0x57da09(0x53f)+'Sharp'+_0x57da09(0x429),_0x2e21ac['UICaM'],'ch.sy'+_0x57da09(0x265)+'ge.De'+_0x57da09(0xa9b)+'ll',_0x57da09(0x8ba)+_0x57da09(0x61f),_0x2e21ac[_0x57da09(0xc24)],'__Gen'+'erate'+'d'];(function _0x5958e1(){var _0x4c463c=_0x57da09;if(_0x2e21ac[_0x4c463c(0x697)](_0x4c463c(0xc7d),_0x2e21ac['UdajW'])){var _0x11af60=[_0x2e21ac[_0x4c463c(0x962)],'unity'+_0x4c463c(0x31f),_0x2e21ac[_0x4c463c(0x776)],_0x2e21ac['usCjt']],_0x1e5ad7={};for(var _0x7d2fd4=0xf1*0x13+0x1*0x1cab+-0x2e8e;_0x7d2fd4<_0x11af60[_0x4c463c(0x875)+'h'];_0x7d2fd4++){var _0x4f7b45=_0x11af60[_0x7d2fd4],_0x9ec50c=typeof _0x5ae00c[_0x4f7b45];_0x1e5ad7[_0x4f7b45]=_0x2e21ac[_0x4c463c(0x1e1)](_0x9ec50c,_0x2e21ac['gakac'])?_0x2e21ac['gakac']:_0x9ec50c;}var _0x1b45e2=_0x2e21ac[_0x4c463c(0x3e8)](_0x2caba5);_0x1e5ad7['gameS'+_0x4c463c(0xdb9)]=_0x1179a1[_0x4c463c(0x968)+'e'];try{_0x1e5ad7[_0x4c463c(0xcac)+'dule']=!!(_0x1b45e2&&_0x1b45e2['Modul'+'e']),_0x1e5ad7['heapU'+'8']=!!(_0x1b45e2&&_0x1b45e2[_0x4c463c(0xa02)+'e']&&_0x1b45e2[_0x4c463c(0xa02)+'e'][_0x4c463c(0xc76)+'8']),_0x1e5ad7[_0x4c463c(0x889)+_0x4c463c(0x948)]=_0x1e5ad7['heapU'+'8']?_0x1b45e2['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:0xd5*0x3+-0x3b3+0x134;}catch(_0x2460cb){_0x1e5ad7['hasMo'+_0x4c463c(0x70f)]=![],_0x1e5ad7[_0x4c463c(0xa63)+'8']=![],_0x1e5ad7['heapB'+_0x4c463c(0x948)]=-0x974+-0xcaf+0x1623;}return _0x1e5ad7['value'+_0x4c463c(0x938)+'er']=typeof _0x10fa9d,_0x1e5ad7;}else try{var _0x459d80=window[_0x4c463c(0xe0a)+_0x4c463c(0x8fd)+_0x4c463c(0xa7e)]&&window['Unity'+_0x4c463c(0x8fd)+_0x4c463c(0xa7e)]['Runti'+'me'];if(!_0x459d80||typeof _0x459d80['creat'+_0x4c463c(0x24e)+'in']!=='funct'+'ion'){_0x46990d[_0x4c463c(0xdc3)]=_0x4c463c(0xa36)+_0x4c463c(0x47a)+_0x4c463c(0x9a9)+'lugin'+'\x20unav'+_0x4c463c(0xcaa)+'le';return;}_0x46990d['attem'+'pted']=!![],_0x202852=_0x459d80[_0x4c463c(0x843)+_0x4c463c(0x24e)+'in']({'name':_0x2e21ac['TowDC'],'version':_0x150f3f,'referencedAssemblies':_0x451309[_0x4c463c(0xd92)]()}),_0x46990d['ok']=!![];try{var _0x56eb22=window[_0x4c463c(0xe0a)+_0x4c463c(0x8fd)+_0x4c463c(0xa7e)][_0x4c463c(0xa36)+'me'];_0x56eb22['__sak'+'uraTa'+'g']=_0x2e21ac[_0x4c463c(0x53b)](_0x2e21ac['hVhJQ'](_0x150f3f,':'),Math[_0x4c463c(0x735)+'m']()['toStr'+_0x4c463c(0x710)](-0x9cc+-0xb*-0x30b+-0x1789)[_0x4c463c(0xd92)](0x1*0x24c9+0x23a2+-0x4869,0x14ef+0xd20+-0x2205)),_0x37956c=_0x56eb22['__sak'+'uraTa'+'g'];}catch(_0xdcb1ff){}_0x1d43df(),_0x2e21ac['Msgjx'](_0x22d331),_0x46990d['hooks'+_0x4c463c(0xc90)+'tered']=_0x1cdd40[_0x4c463c(0x875)+'h'],_0x2e21ac[_0x4c463c(0x2b4)](_0x1d2a9d),_0x46990d[_0x4c463c(0x23c)+'yTap']=!![];}catch(_0x49f7e8){if(_0x2e21ac[_0x4c463c(0x939)]('LSyMy','dqSDN'))try{_0x2e21ac['KMcSM'](_0x467f56,_0x500e5b);}catch(_0x1610c7){}else _0x46990d[_0x4c463c(0xdc3)]=_0x2e21ac['sJGac'](String,_0x49f7e8&&_0x49f7e8[_0x4c463c(0x2e3)+'ge']||_0x49f7e8);}}());var _0x535d7a=new Float32Array(-0x1*0x1dd7+-0x9*-0x6d+0x1*0x1a03),_0xe4fb1a=new Int32Array(_0x535d7a['buffe'+'r']);function _0x5b76ad(_0x594b2f){return _0x535d7a[0x1152+0x991+-0x1ae3]=_0x594b2f,_0xe4fb1a[0x17d*-0x7+0x36*-0xab+0x2e7d];}function _0x36f8b7(_0xd8f3df){return _0xe4fb1a[-0x18ea+0x124f+0x69b]=_0xd8f3df|0x185*-0x6+-0xcc9+0x10b*0x15,_0x535d7a[-0x101*0x25+0x1f*-0x4+0x25a1];}var _0x11deda={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x242d96(){var _0xb0ae24=_0x57da09,_0x2c2c26={'ILhdc':_0xb0ae24(0x867)+'f5'};if(_0x2e21ac['KsfIw'](_0x2e21ac['YObeZ'],_0x2e21ac['dNlVm']))try{return _0x2e21ac[_0xb0ae24(0x77d)](_0x1425a0);}catch(_0x4cac9e){return{'version':_0x104984,'when':new _0x5a6615()[_0xb0ae24(0x631)+'Strin'+'g'](),'elapsedMs':_0x2ae972[_0xb0ae24(0x858)]()-_0x41b3dd,'host':_0x59d33c,'uwmk':!!(_0x5a1708['Unity'+_0xb0ae24(0x8fd)+'dkit']&&_0x54f78e['Unity'+_0xb0ae24(0x8fd)+_0xb0ae24(0xa7e)][_0xb0ae24(0xa36)+'me']),'il2CppContext':![],'arm':_0x201bc1,'hooksTotal':_0x4b5cc1[_0xb0ae24(0x875)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3924c6(_0x4cac9e&&_0x4cac9e['messa'+'ge']||_0x4cac9e)};}else{try{if(_0x202852&&_0x202852['_runt'+'ime']){var _0x13ca78=_0x202852[_0xb0ae24(0x978)+_0xb0ae24(0x9f3)];if(typeof _0x13ca78[_0xb0ae24(0x2bf)+'veGam'+'e']==='funct'+_0xb0ae24(0xb69)){var _0x195290=_0x13ca78[_0xb0ae24(0x2bf)+'veGam'+'e']();if(_0x195290)return _0x11deda[_0xb0ae24(0x968)+'e']='plugi'+_0xb0ae24(0x65b)+'ntime'+_0xb0ae24(0x660)+'lveGa'+_0xb0ae24(0x25f),_0x195290;}if(_0x13ca78['_game'])return _0x11deda[_0xb0ae24(0x968)+'e']=_0x2e21ac[_0xb0ae24(0x399)],_0x13ca78['_game'];}}catch(_0x290f17){}try{if(_0x2e21ac['sqhUN']('LSYWZ',_0x2e21ac['LbXmr'])){var _0x5d6e77=window[_0xb0ae24(0xe0a)+'WebMo'+_0xb0ae24(0xa7e)]&&window['Unity'+'WebMo'+_0xb0ae24(0xa7e)][_0xb0ae24(0xa36)+'me'];if(_0x5d6e77&&typeof _0x5d6e77[_0xb0ae24(0x2bf)+'veGam'+'e']==='funct'+_0xb0ae24(0xb69)){var _0x322095=_0x5d6e77['resol'+_0xb0ae24(0xcfe)+'e']();if(_0x322095)return _0x11deda[_0xb0ae24(0x968)+'e']=_0xb0ae24(0xa36)+_0xb0ae24(0x27e)+_0xb0ae24(0x747)+_0xb0ae24(0x4f7)+')',_0x322095;}if(_0x5d6e77&&_0x5d6e77['_game'])return _0x11deda[_0xb0ae24(0x968)+'e']=_0x2e21ac['wUbWu'],_0x5d6e77;}else try{var _0xd4627=('5|3|0'+'|1|4|'+_0xb0ae24(0x64b))[_0xb0ae24(0xb4c)]('|'),_0x4e35ca=0x5*0x7ab+-0x9*0x30a+-0xafd*0x1;while(!![]){switch(_0xd4627[_0x4e35ca++]){case'0':if(_0x37dfb5['boxes']&&!_0x409b9e())_0x4da28a[_0xb0ae24(0xbc1)]=![];continue;case'1':var _0x17f163=!_0x58fb95['on']?'ESP\x20o'+'ff':_0x3c5c7d[_0xb0ae24(0xbc1)]?'ESP\x20b'+_0xb0ae24(0x51c):_0xb0ae24(0xa6f)+'ap';continue;case'2':_0x57bc37[_0xb0ae24(0x21d)][_0xb0ae24(0x302)+_0xb0ae24(0x3c3)]=_0x5d60a9['on']?_0x5b18c7:_0xb0ae24(0x8cb)+_0xb0ae24(0x4dc)+'t';continue;case'3':if(!_0x57bc37)return;continue;case'4':if(_0x17f163!==_0x57bc37['textC'+_0xb0ae24(0x1f5)+'t'])_0x57bc37[_0xb0ae24(0x21a)+'onten'+'t']=_0x17f163;continue;case'5':var _0x57bc37=_0x1b977f&&_0x3073e3[_0xb0ae24(0xc3f)];continue;case'6':_0x57bc37[_0xb0ae24(0x21d)][_0xb0ae24(0x34d)]=_0x169905['on']?_0xb0ae24(0x8ed)+'1b':_0x2c2c26[_0xb0ae24(0xca7)];continue;}break;}}catch(_0x50b4cb){}}catch(_0x547161){}try{var _0x2a3738=window[_0xb0ae24(0x6b1)+_0xb0ae24(0x466)+_0xb0ae24(0xac5)]||window['unity'+'Game']||window[_0xb0ae24(0xdc4)];if(_0x2a3738)return _0x11deda[_0xb0ae24(0x968)+'e']=_0xb0ae24(0x4fb)+_0xb0ae24(0x355)+_0xb0ae24(0xa44),_0x2a3738;}catch(_0x2fddf8){}try{if(typeof game!==_0xb0ae24(0x2bd)+'ined'&&game){if(_0x2e21ac['pmHMv']==='hxush')_0x39e618(!![]);else return _0x11deda['sourc'+'e']=_0x2e21ac[_0xb0ae24(0x354)],game;}}catch(_0x3c5730){}try{if('KcNso'!==_0xb0ae24(0x608)){var _0x1f65a6=Object['keys'](window);for(var _0x1cb46d=0x109e+-0x2*-0xcb6+-0x2a0a;_0x2e21ac['ogNbY'](_0x1cb46d,_0x1f65a6['lengt'+'h'])&&_0x1cb46d<0xfeb+0x16fc+-0x1*0x248f;_0x1cb46d++){var _0x3e590d=window[_0x1f65a6[_0x1cb46d]];if(_0x3e590d&&_0x2e21ac['bkaAK'](typeof _0x3e590d,_0x2e21ac['RdepP'])&&_0x3e590d[_0xb0ae24(0xa02)+'e']&&_0x3e590d['Modul'+'e']['HEAPU'+'8']&&_0x3e590d['Modul'+'e'][_0xb0ae24(0xc76)+'8']['buffe'+'r'])return _0x11deda[_0xb0ae24(0x968)+'e']=_0x2e21ac[_0xb0ae24(0x74c)](_0x2e21ac[_0xb0ae24(0x722)]+_0x1f65a6[_0x1cb46d],_0xb0ae24(0x4f2)+'le'),_0x3e590d;}}else _0xee1328[_0xb0ae24(0x6c2)]=_0x30ec99[-0x14b*-0x2+-0x254c+-0xb*-0x328][_0xb0ae24(0x285)](),_0x21db15[_0xb0ae24(0x240)+_0xb0ae24(0xb8b)]++;}catch(_0x4cfbcb){}return _0x11deda[_0xb0ae24(0x968)+'e']=null,null;}}function _0x4f2d4a(){var _0x5c7d51=_0x57da09;if(_0x5c7d51(0x76e)!==_0x2e21ac[_0x5c7d51(0x546)]){try{if(_0x1ee8e3&&_0x1ee8e3['buffe'+'r']&&_0x1ee8e3[_0x5c7d51(0x3df)+'r']['byteL'+'ength'])return _0x11deda[_0x5c7d51(0x968)+'e']=_0x11deda[_0x5c7d51(0x968)+'e']||_0x5c7d51(0xb5b)+_0x5c7d51(0x1ee)+_0x5c7d51(0x5b8)+_0x5c7d51(0x49e)+_0x5c7d51(0x6bf)+'ory',new Uint8Array(_0x1ee8e3[_0x5c7d51(0x3df)+'r']);}catch(_0x4b0be6){}try{if(_0x5c7d51(0x81b)===_0x5c7d51(0x344))_0x5e88ee[_0x5c7d51(0xa70)+_0x5c7d51(0xaa0)][_0x5c7d51(0xc27)](_0x5c7d51(0x68f)+_0x5c7d51(0x8a5)+_0x5c7d51(0x485)+_0x5c7d51(0xd87)+_0x5c7d51(0x970)+_0x5c7d51(0x844)+_0x5c7d51(0xb9f)+'ler\x20h'+_0x5c7d51(0x5a0)+_0x5c7d51(0xb73)+_0x5c7d51(0xe55)+('Eithe'+'r\x20you'+'\x20are\x20'+'not\x20i'+_0x5c7d51(0x4a6)+'ound,'+'\x20or\x20t'+'he\x20ho'+'ok\x20is'+_0x5c7d51(0x52e)+_0x5c7d51(0x447)+_0x5c7d51(0x372)+_0x5c7d51(0x8af)+'ad.'));else{var _0x263ff7=_0x242d96();if(_0x263ff7&&_0x263ff7[_0x5c7d51(0xa02)+'e']&&_0x263ff7['Modul'+'e'][_0x5c7d51(0xc76)+'8']&&_0x263ff7['Modul'+'e']['HEAPU'+'8']['buffe'+'r'])return _0x263ff7[_0x5c7d51(0xa02)+'e']['HEAPU'+'8'];}}catch(_0x1d6885){}return null;}else{var _0xea5891=_0x3f80b0['getEl'+_0x5c7d51(0x6df)+'ById'](_0x2e21ac['ZSTyF']);if(_0x2e21ac[_0x5c7d51(0xa45)](_0x547072,!_0xea5891)&&_0x412a9b[_0x5c7d51(0xd40)]){var _0x1867d1=_0x15d365['creat'+_0x5c7d51(0x2b5)+'ent'](_0x2e21ac[_0x5c7d51(0xa73)]);_0x1867d1['id']=_0x2e21ac['ZSTyF'],_0x1867d1[_0x5c7d51(0x21d)][_0x5c7d51(0x2fb)+'xt']=_0x2e21ac[_0x5c7d51(0x53b)](_0x2e21ac[_0x5c7d51(0x7d7)](_0x2e21ac[_0x5c7d51(0xb6d)],_0x2e21ac['wryKH'])+_0xb3db68+';','borde'+'r-rad'+'ius:9'+_0x5c7d51(0x63b)+'paddi'+_0x5c7d51(0x92f)+_0x5c7d51(0x4fa)+'x;fon'+_0x5c7d51(0xe54)+_0x5c7d51(0xb32)+'\x20ui-m'+'onosp'+_0x5c7d51(0x3b5)+'onsol'+'as,mo'+_0x5c7d51(0x5f7)+_0x5c7d51(0x3e6)),_0x1867d1['textC'+'onten'+'t']=_0x2e21ac['dgkIO'],_0x1867d1[_0x5c7d51(0xd1a)+'ck']=function(){_0x202fd9(![]),_0x23438e();},_0x1cb354[_0x5c7d51(0xd40)][_0x5c7d51(0xac2)+'dChil'+'d'](_0x1867d1);}else!_0x489cf6&&_0xea5891&&_0xea5891['remov'+'e']();}}function _0x2a0a54(){var _0xddf837=_0x57da09;if(_0x2e21ac[_0xddf837(0x5db)]===_0x2e21ac[_0xddf837(0x5db)]){var _0x152b71=_0x4f2d4a();if(!_0x152b71)return null;try{if(_0x2e21ac[_0xddf837(0x9ef)](_0x2e21ac[_0xddf837(0x6da)],_0xddf837(0x461)))try{_0x156767[_0xddf837(0x648)][_0x527a72]();}catch(_0x2d83d4){}else return new DataView(_0x152b71['buffe'+'r'],_0x152b71['byteO'+_0xddf837(0x471)],_0x152b71[_0xddf837(0x46b)+'ength']);}catch(_0x31522d){return _0x2e21ac['eqkso']('vurdz',_0xddf837(0x864))?_0x1f9f90&&_0x5e97be[_0xddf837(0x3df)+'r']?_0x5779d7[_0xddf837(0x3df)+'r'][_0xddf837(0x46b)+'ength']:0x1*0x125b+-0x14fc+0x2a1:null;}}else try{if(!_0x35cc33||!_0x67a887)return null;var _0xb31e4a=new _0x1af340(_0x12e588)['getCl'+'assNa'+'me']();return _0xb31e4a===_0x5a0ff6?null:_0xb31e4a;}catch(_0x22cccd){return null;}}function _0x2352d3(_0xc90875,_0x110251){var _0x3ac6f9=_0x57da09;if(_0x2e21ac['sSyDM'](_0x2e21ac[_0x3ac6f9(0xcb2)],_0x3ac6f9(0x74b))){var _0x5e3d8a=_0x2e21ac['Azkub'](_0x2a0a54);if(!_0x5e3d8a)return _0x11deda['faile'+'d']++,_0x11deda[_0x3ac6f9(0x57b)+_0x3ac6f9(0xbc6)]=_0x11deda[_0x3ac6f9(0x57b)+'rror']||_0x2e21ac['UFikR'],undefined;if(_0xc90875<-0x2f*-0x45+-0x1817+0x2b*0x44||_0x2e21ac['yfGlv'](_0x2e21ac[_0x3ac6f9(0x53b)](_0xc90875,0x1d18+-0xbe5+0x53*-0x35),_0x5e3d8a['byteL'+'ength'])){if(_0x2e21ac[_0x3ac6f9(0x939)](_0x3ac6f9(0xa77),_0x2e21ac[_0x3ac6f9(0x282)]))_0x1f7a15['push'](_0x2a1245(_0x1756b4&&_0x2aa4b8[_0x3ac6f9(0x2e3)+'ge']||_0x186c92)[_0x3ac6f9(0xd92)](-0xb*0x4a+0x8e*0x25+0xb9*-0x18,0xc70+-0x1ad7*0x1+-0x1b*-0x8d));else return _0x11deda[_0x3ac6f9(0xb71)+'d']++,_0x11deda[_0x3ac6f9(0x57b)+'rror']=_0x11deda['lastE'+_0x3ac6f9(0xbc6)]||_0x2e21ac['lhgjF'](_0x2e21ac['UJjeh']('addre'+'ss\x200x',_0xc90875[_0x3ac6f9(0x69e)+_0x3ac6f9(0x710)](-0x2*-0xc92+-0x43*0x3a+-0x16a*0x7))+_0x2e21ac[_0x3ac6f9(0xe49)],_0x5e3d8a[_0x3ac6f9(0x46b)+_0x3ac6f9(0xcb3)]['toStr'+_0x3ac6f9(0x710)](-0x1*-0x18d+-0xfb0+-0xe33*-0x1)),undefined;}try{_0x11deda['ok']++;switch(_0x110251){case'u8':return _0x5e3d8a[_0x3ac6f9(0xcea)+'nt8'](_0xc90875);case'i8':return _0x5e3d8a[_0x3ac6f9(0x419)+'t8'](_0xc90875);case _0x2e21ac[_0x3ac6f9(0xd95)]:return _0x5e3d8a[_0x3ac6f9(0x419)+_0x3ac6f9(0x6c7)](_0xc90875,!![]);case _0x2e21ac['zlNpW']:return _0x5e3d8a[_0x3ac6f9(0xcea)+_0x3ac6f9(0xcff)](_0xc90875,!![]);case _0x2e21ac['JeeQp']:return _0x5e3d8a[_0x3ac6f9(0x419)+'t32'](_0xc90875,!![]);case _0x3ac6f9(0x43e):return _0x5e3d8a['getUi'+_0x3ac6f9(0x445)](_0xc90875,!![]);case'f32':return _0x5e3d8a[_0x3ac6f9(0xe09)+'oat32'](_0xc90875,!![]);case'f64':return _0x5e3d8a['getFl'+'oat64'](_0xc90875,!![]);case'v2':case'v3':case'v4':return _0x5e3d8a[_0x3ac6f9(0xe09)+'oat32'](_0xc90875,!![]);default:return _0x5e3d8a[_0x3ac6f9(0x419)+_0x3ac6f9(0x66b)](_0xc90875,!![]);}}catch(_0x386ba2){return _0x2e21ac[_0x3ac6f9(0x9ab)]!==_0x3ac6f9(0xbc0)?_0x3efdec['on']:(_0x11deda['faile'+'d']++,_0x11deda[_0x3ac6f9(0x57b)+_0x3ac6f9(0xbc6)]=_0x11deda[_0x3ac6f9(0x57b)+_0x3ac6f9(0xbc6)]||_0x2e21ac[_0x3ac6f9(0x6d5)](String,_0x386ba2&&_0x386ba2[_0x3ac6f9(0x2e3)+'ge']||_0x386ba2)['slice'](-0x3*0x7e1+-0x1f3a+0x1*0x36dd,-0x3*0x805+0x6b6*-0x2+-0x91*-0x43),undefined);}}else _0x4ade20=[];}function _0xbd3349(_0x172a1f,_0x1bfb85,_0x5815d1){var _0x270c84=_0x57da09,_0x63470e=_0x2a0a54();if(!_0x63470e||_0x172a1f<0x55*-0x45+0x9f3+0x15*0x9e||_0x2e21ac['IVFSU'](_0x172a1f,0x1523+0x819*0x4+0x85*-0x67)>_0x63470e['byteL'+_0x270c84(0xcb3)])return![];try{switch(_0x1bfb85){case'u8':case'i8':_0x63470e[_0x270c84(0x713)+'nt8'](_0x172a1f,_0x2e21ac['CQIkP'](_0x5815d1,0x2*-0x913+0x25dc+0x1*-0x12b7));break;case _0x2e21ac[_0x270c84(0xd95)]:case _0x270c84(0x3a4):_0x63470e[_0x270c84(0xd81)+_0x270c84(0x6c7)](_0x172a1f,_0x5815d1|-0x72e*0x2+-0x3d3+0x122f,!![]);break;case'i32':case _0x270c84(0x43e):_0x63470e[_0x270c84(0xd81)+_0x270c84(0x66b)](_0x172a1f,_0x2e21ac['qQVIN'](_0x5815d1,0x13db+0x14*0x96+-0x1f93),!![]);break;case _0x270c84(0x550):_0x63470e[_0x270c84(0xc7e)+_0x270c84(0x36f)](_0x172a1f,_0x5815d1,!![]);break;default:_0x63470e[_0x270c84(0xd81)+_0x270c84(0x66b)](_0x172a1f,_0x2e21ac['qQVIN'](_0x5815d1,0x10b4+-0x1a77*-0x1+-0x2b2b),!![]);}return!![];}catch(_0x35ac52){return![];}}var _0x42d181={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x2e21ac[_0x57da09(0x859)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x4b3b6d(_0x3c368e){var _0x5db7ae=_0x57da09,_0x3691fa={'HknXG':function(_0x15e7ff,_0x5e5a5c){return _0x15e7ff(_0x5e5a5c);}},_0x4e5cd4='';for(var _0x3a1fbb=-0x17d+0x1a00+-0x1883;_0x2e21ac['SKlFP'](_0x3a1fbb,_0x3c368e[_0x5db7ae(0x875)+'h']);_0x3a1fbb++){if(_0x2e21ac['sSyDM'](_0x2e21ac[_0x5db7ae(0x815)],_0x2e21ac[_0x5db7ae(0x76f)]))_0x3691fa[_0x5db7ae(0x822)](_0x2a718a,![]);else{var _0x548fc3=_0x3c368e[_0x3a1fbb]['toStr'+_0x5db7ae(0x710)](-0x118d*-0x1+-0x1774+-0x5f7*-0x1);_0x4e5cd4+=_0x2e21ac['YknLx'](_0x2e21ac[_0x5db7ae(0xbdb)](_0x548fc3['lengt'+'h'],0x322+0x13b7+-0x1*0x16d7)?'0':'',_0x548fc3);}}return _0x4e5cd4;}function _0x51f734(_0x32e9ea,_0x19bf69,_0xd2e202){var _0x522532=_0x57da09,_0x2ccca5=_0x2a0a54();if(!_0x2ccca5)return _0x11deda[_0x522532(0xb71)+'d']++,_0x11deda['lastE'+_0x522532(0xbc6)]=_0x11deda[_0x522532(0x57b)+_0x522532(0xbc6)]||'no\x20HE'+'APU8\x20'+_0x522532(0x6c9)+_0x522532(0xcdb)+'stanc'+_0x522532(0xa03)+'\x20reac'+'hable'+_0x522532(0xacc)+_0x522532(0xa36)+'me.re'+'solve'+_0x522532(0x4f7)+_0x522532(0x3dd)+_0x522532(0xc38)+_0x522532(0xb6c)+_0x522532(0xb19)+'al',null;if(_0x2e21ac['SKlFP'](_0x19bf69,0xcb1+0x2*-0x69+-0xbdf)||_0x2e21ac[_0x522532(0x930)](_0x2e21ac[_0x522532(0x667)](_0x19bf69,_0xd2e202),_0x2ccca5[_0x522532(0x46b)+'ength'])){if(_0x522532(0xcd1)===_0x522532(0x422)){var _0x11ce1c=_0x4d7212[_0x522532(0x6b1)+_0x522532(0x466)+'nce']||_0x2a4604[_0x522532(0x6b1)+_0x522532(0x31f)]||_0xcf74c2['game'];if(_0x11ce1c)return _0x547aad[_0x522532(0x968)+'e']=_0x2e21ac[_0x522532(0xad3)],_0x11ce1c;}else return _0x11deda['faile'+'d']++,_0x11deda[_0x522532(0x57b)+_0x522532(0xbc6)]=_0x11deda[_0x522532(0x57b)+_0x522532(0xbc6)]||_0x2e21ac[_0x522532(0x8f1)](_0x2e21ac['CNTWo']+_0x2e21ac['daSmg'](_0x32e9ea,_0x19bf69)['toStr'+_0x522532(0x710)](-0x637*-0x5+0x224d+-0x4150)+(_0x522532(0x3c2)+_0x522532(0xc88)+_0x522532(0xb31)+'0x'),_0x2ccca5[_0x522532(0x46b)+_0x522532(0xcb3)][_0x522532(0x69e)+'ing'](0x1a4c+0x43d+-0x10d*0x1d)),null;}try{var _0x385ab2=new Uint8Array(_0xd2e202);for(var _0x519cf3=0xcd*-0x23+0x22e2+0x9*-0xc3;_0x519cf3<_0xd2e202;_0x519cf3++)_0x385ab2[_0x519cf3]=_0x2ccca5[_0x522532(0xcea)+'nt8'](_0x2e21ac['EoHJf'](_0x32e9ea+_0x19bf69,_0x519cf3));return _0x11deda['ok']++,_0x385ab2;}catch(_0x5db2d1){return _0x11deda[_0x522532(0xb71)+'d']++,_0x11deda['lastE'+'rror']=_0x11deda[_0x522532(0x57b)+_0x522532(0xbc6)]||String(_0x5db2d1&&_0x5db2d1[_0x522532(0x2e3)+'ge']||_0x5db2d1)['slice'](0x1f4*-0x1+-0x7*-0x396+0x1726*-0x1,0x2473+-0x6a*-0xd+-0x295d),null;}}function _0x43354b(_0x250090,_0x3f04d8,_0x3160fd){var _0x2eff8b=_0x57da09,_0x7abe96=('5|2|1'+_0x2eff8b(0x436)+'9|6|0'+'|7|8')[_0x2eff8b(0xb4c)]('|'),_0x17e46e=-0x1805+0x4*-0x64c+-0x3c9*-0xd;while(!![]){switch(_0x7abe96[_0x17e46e++]){case'0':var _0x35e38e=_0x2e21ac[_0x2eff8b(0x4f8)](_0x3160fd,_0x2e21ac['YBktQ'])?_0x50bc8[_0x2eff8b(0xe09)+_0x2eff8b(0x36f)](_0x552f4d[_0x2eff8b(0x8ce)],!![]):_0x3160fd==='obfI'?_0x50bc8[_0x2eff8b(0x419)+_0x2eff8b(0x66b)](_0x552f4d['fake'],!![]):_0x50bc8[_0x2eff8b(0xcea)+'nt8'](_0x552f4d['fake']);continue;case'1':if(!_0x102ca8)return null;continue;case'2':var _0x102ca8=_0x51f734(_0x250090,_0x3f04d8,_0x552f4d[_0x2eff8b(0x33a)]);continue;case'3':var _0x50bc8=new DataView(_0x102ca8[_0x2eff8b(0x3df)+'r'],_0x102ca8[_0x2eff8b(0xb94)+'ffset'],_0x102ca8[_0x2eff8b(0x46b)+'ength']);continue;case'4':var _0x5ba235=_0x50bc8[_0x2eff8b(0x419)+_0x2eff8b(0x66b)](_0x552f4d['key'],!![]);continue;case'5':var _0x552f4d=_0x42d181[_0x3160fd];continue;case'6':var _0x3a1ae8=_0x50bc8['getUi'+_0x2eff8b(0x3ed)](_0x552f4d[_0x2eff8b(0xa1c)+'d'])&-0xb83*-0x3+-0x2681*0x1+0x3*0x153;continue;case'7':var _0x2141b3=_0x50bc8[_0x2eff8b(0xcea)+_0x2eff8b(0x3ed)](_0x552f4d['activ'+'e'])&0x354+-0x2504+0x21b1;continue;case'8':return{'keyAtOffset0':_0x5ba235,'hidden':_0xcda99b,'inited':_0x3a1ae8,'fake':_0x35e38e,'act':_0x2141b3,'hex':_0x4b3b6d(_0x102ca8),'alt':_0x3160fd===_0x2e21ac[_0x2eff8b(0x325)]?_0xcda99b^(_0x35e38e|0x12b*-0x13+0x13d*-0xc+0x250d*0x1):null};case'9':var _0xcda99b=_0x50bc8[_0x2eff8b(0x419)+_0x2eff8b(0x66b)](_0x552f4d['hidde'+'n'],!![]);continue;}break;}}function _0x363d3e(_0x138ebb,_0x4bcef5,_0x1c73d6){var _0x16067b=_0x57da09;if(_0x2e21ac['uSLPJ'](_0x2e21ac['WLqqA'],_0x16067b(0xb90))){if(_0x138ebb==='obfF')return _0x2e21ac['OFIrE'](_0x36f8b7,_0x2e21ac[_0x16067b(0x6b0)](_0x4bcef5,_0x1c73d6));if(_0x138ebb===_0x16067b(0xc15))return _0x2e21ac[_0x16067b(0x6ce)](_0x4bcef5,_0x1c73d6)|0x164c*0x1+-0x1*-0x17b3+-0x2dff;return _0x2e21ac[_0x16067b(0xc66)](_0x2e21ac['CQIkP'](_0x2e21ac['OPHUZ'](_0x4bcef5,_0x1c73d6),-0x165a+-0x1e9e*0x1+0x35f7*0x1),0xd45+-0x9fe+-0x347*0x1)?0xc3*-0x4+0x1a97+-0x178a:0x2*0xb0f+-0xc0a+-0x35c*0x3;}else _0x22de32['cv'][_0x16067b(0x99f)]=_0x3bdb47,_0x2a557c['cv'][_0x16067b(0xd86)+'t']=_0x2630bc;}function _0x39b6e3(_0x5d1c07,_0x1c9ee7,_0x371ce9){var _0x741d79=_0x57da09,_0xda1b70=_0x2e21ac[_0x741d79(0x588)]['split']('|'),_0x171f0a=0xa3*-0x2b+-0x2411+0x6*0xa93;while(!![]){switch(_0xda1b70[_0x171f0a++]){case'0':_0xbf698d&=0x22fd+0x17eb+0x1*-0x39e9;continue;case'1':var _0x523d98=_0x42d181[_0x371ce9];continue;case'2':if(!_0x523d98)return null;continue;case'3':var _0x75e1b2=_0x2e21ac[_0x741d79(0xba3)](_0x2352d3,_0x5d1c07+_0x1c9ee7+_0x523d98[_0x741d79(0x6fb)+'e'],'u8');continue;case'4':if(_0x2e21ac[_0x741d79(0x4f8)](_0x371ce9,_0x2e21ac[_0x741d79(0xbad)]))_0x392f75=_0x36f8b7(_0x4025eb^_0xbf698d);else{if(_0x371ce9===_0x2e21ac['wrhXO'])_0x392f75=_0x2e21ac['qQVIN'](_0x4025eb^_0xbf698d,0x1*-0x3ec+0x2401+-0x2015);else _0x392f75=_0x2e21ac[_0x741d79(0x536)](_0x2e21ac[_0x741d79(0x89e)](_0x4025eb^_0xbf698d,-0x189*-0x5+-0xce5+0x637),-0x2176*-0x1+0x20a8*-0x1+-0xce)?0x1ab7+0x5*-0x349+0x1*-0xa49:-0x5*-0x470+0x67*-0x32+-0x35*0xa;}continue;case'5':return{'real':_0x392f75,'fake':_0x1e2e20,'act':_0x75e1b2,'init':_0x42e4ff,'key':_0xbf698d,'hidden':_0x4025eb};case'6':var _0x392f75;continue;case'7':var _0x42e4ff=_0x2e21ac[_0x741d79(0xae7)](_0x2352d3,_0x5d1c07+_0x1c9ee7+_0x523d98[_0x741d79(0xa1c)+'d'],'u8');continue;case'8':_0x42e4ff=_0x2e21ac[_0x741d79(0xa1a)](_0x42e4ff,-0x228f+-0x5e*0x3a+0x37db)&0x1f*0x1+-0x26f7+0x26d9;continue;case'9':var _0x1e2e20=_0x2352d3(_0x2e21ac[_0x741d79(0xa8f)](_0x5d1c07+_0x1c9ee7,_0x523d98['fake']),_0x371ce9===_0x2e21ac[_0x741d79(0xbad)]?_0x2e21ac[_0x741d79(0x99a)]:_0x371ce9===_0x741d79(0xc15)?_0x741d79(0x25a):'u8');continue;case'10':_0x4025eb|=-0x18a9+-0x20f0+-0x3999*-0x1;continue;case'11':var _0xbf698d=_0x2352d3(_0x2e21ac[_0x741d79(0x9a7)](_0x5d1c07+_0x1c9ee7,_0x523d98[_0x741d79(0xb6b)]),'u8');continue;case'12':var _0x4025eb=_0x2e21ac['aMeDR'](_0x2352d3,_0x5d1c07+_0x1c9ee7+_0x523d98['hidde'+'n'],_0x741d79(0x25a));continue;case'13':_0x75e1b2&=-0x182*0x3+0x1*0x1bbf+-0x1738;continue;case'14':if(_0xbf698d===undefined||_0x4025eb===undefined||_0x2e21ac[_0x741d79(0x281)](_0x1e2e20,undefined)||_0x75e1b2===undefined)return null;continue;}break;}}function _0x345fb6(_0x12b849,_0x1dc640,_0x4f50a7,_0xfd30cf){var _0x5a8c93=_0x57da09,_0x36f956=('5|3|1'+_0x5a8c93(0x3de)+'0|7|2')[_0x5a8c93(0xb4c)]('|'),_0x2ad288=-0x18c*0x8+0x97*-0x41+0x32b7;while(!![]){switch(_0x36f956[_0x2ad288++]){case'0':var _0x365bae;continue;case'1':if(!_0x1b95ac)return![];continue;case'2':return _0xbd3349(_0x2e21ac[_0x5a8c93(0xda7)](_0x12b849,_0x1dc640)+_0x213a04['hidde'+'n'],_0x2e21ac[_0x5a8c93(0x859)],_0x2e21ac[_0x5a8c93(0x6f6)](_0x365bae,_0x4d81ac))&&_0xbd3349(_0x2e21ac['HKiWM'](_0x12b849,_0x1dc640)+_0x213a04[_0x5a8c93(0x8ce)],_0x4f50a7==='obfF'?_0x5a8c93(0x550):_0x4f50a7===_0x5a8c93(0xc15)?_0x5a8c93(0x25a):'u8',_0x2e21ac['bkaAK'](_0x4f50a7,_0x2e21ac[_0x5a8c93(0xbad)])?_0xfd30cf:_0x4f50a7==='obfI'?_0x2e21ac[_0x5a8c93(0x6bb)](_0xfd30cf,-0x965*0x3+0x1*-0xb59+0xdc*0x2e):_0xfd30cf?0x3*0x86a+-0x1073*0x1+-0x8ca:-0x3*-0x751+0x10c8+-0x5*0x7bf)&&_0x2e21ac[_0x5a8c93(0x573)](_0xbd3349,_0x12b849+_0x1dc640+_0x213a04['activ'+'e'],'u8',0x492+0x1*0x247f+0x1*-0x2911);case'3':var _0x1b95ac=_0x2e21ac[_0x5a8c93(0x740)](_0x51f734,_0x12b849,_0x1dc640,_0x213a04['size']);continue;case'4':var _0x49a20e=new DataView(_0x1b95ac[_0x5a8c93(0x3df)+'r'],_0x1b95ac[_0x5a8c93(0xb94)+'ffset'],_0x1b95ac['byteL'+_0x5a8c93(0xcb3)]);continue;case'5':var _0x213a04=_0x42d181[_0x4f50a7];continue;case'6':var _0x4d81ac=_0x2e21ac[_0x5a8c93(0x95c)](_0x213a04['keyTy'+'pe'],'u8')?_0x49a20e[_0x5a8c93(0xcea)+'nt8'](_0x213a04['key']):_0x49a20e['getIn'+_0x5a8c93(0x66b)](_0x213a04['key'],!![]);continue;case'7':if(_0x4f50a7===_0x2e21ac['YBktQ'])_0x365bae=_0x5b76ad(_0xfd30cf);else{if(_0x4f50a7===_0x5a8c93(0xc15))_0x365bae=_0x2e21ac[_0x5a8c93(0x6bb)](_0xfd30cf,0xa27+-0xa1*0xe+-0x17*0xf);else _0x365bae=_0x2e21ac['JTqgG'](_0xfd30cf?0x1*-0xfda+-0x5b*0xd+0x147a:0x1aaf+0x3*0x89f+0x72*-0x76,0x2*-0x5e9+0x16f*-0x13+0x280e);}continue;}break;}}var _0x43d8b1={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x261ce8=0x1*0x2066+0x1*0x18da+-0xe50*0x4+0.03,_0x46a752=0xbf4+0x23b5+-0x2fa7,_0x384f17={},_0x4592a4=-0x12e9+0x1f72+-0xc89,_0x1e2c5b=[],_0x5634b4=[];function _0x4b9b51(_0x2e7bfb){var _0xf1bd37=_0x57da09,_0x54ea91={'LyRVf':function(_0x2c82f1,_0x2c7ef9){return _0x2e21ac['WceSH'](_0x2c82f1,_0x2c7ef9);},'hyrNi':_0x2e21ac['gadQC'],'PMYNy':function(_0x1463e7,_0x87e8e8){var _0x5a2757=_0xbe61;return _0x2e21ac[_0x5a2757(0x8a9)](_0x1463e7,_0x87e8e8);},'gOKPs':function(_0x595c4d){return _0x595c4d();}},_0x1fe530=_0xe29e80[_0xf1bd37(0x844)+_0xf1bd37(0xb9f)+'ler']||[],_0x3152bd=[];_0x5634b4=[],_0x1e2c5b=[];for(var _0x1bacf7=-0x145d+0xc*0x33e+-0x128b;_0x2e21ac[_0xf1bd37(0x4c2)](_0x1bacf7,_0x1fe530['lengt'+'h']);_0x1bacf7++){if(_0x2e21ac[_0xf1bd37(0x9ef)]('xLNTD',_0x2e21ac['pexKC'])){var _0x501c64=_0x1fe530[_0x1bacf7][-0x376*0x1+0x6*-0x679+-0x1526*-0x2];if(_0x1fe530[_0x1bacf7][0x261b+-0x15b*0x1+-0x24bf]!==_0x2e21ac[_0xf1bd37(0xbad)])continue;var _0x8fd7af=_0x43354b(_0x2e7bfb,_0x501c64,_0xf1bd37(0x633));if(!_0x8fd7af||_0x8fd7af[_0xf1bd37(0xa1c)+'d']!==0x193d+0xea0+-0x9f7*0x4)continue;var _0x38c15f=_0x363d3e('obfF',_0x8fd7af[_0xf1bd37(0xc73)+'n'],_0x8fd7af[_0xf1bd37(0x28f)+_0xf1bd37(0x359)+'t0']);if(typeof _0x38c15f!==_0xf1bd37(0x6e4)+'r'||!_0x2e21ac['bMKjn'](isFinite,_0x38c15f))continue;var _0x58f983=_0x2e21ac['bnnmY'](_0x2e7bfb+':',_0x501c64),_0x33b687=_0x384f17[_0x58f983];if(!_0x33b687||_0x2e21ac[_0xf1bd37(0x697)](_0x38c15f,_0x33b687[_0xf1bd37(0xdac)+'ritte'+'n']))_0x33b687=_0x384f17[_0x58f983]={'base':_0x38c15f,'lastWritten':null};var _0x4171b7=_0x33b687['base'],_0x522acb=Math['abs'](_0x4171b7);if(_0x2e21ac['LhSOn'](_0x522acb,0x1d42+-0x2*0x31d+-0x1708+0.0001)||_0x522acb>0x50f1+0x67f6+0x5*0x2925){_0x5634b4[_0xf1bd37(0xc27)]({'o':_0x501c64,'v':_0x38c15f,'why':_0x2e21ac['fBgIF']});continue;}_0x3152bd[_0xf1bd37(0xc27)]({'o':_0x501c64,'v':_0x38c15f,'a':_0x522acb,'base':_0x4171b7,'key':_0x58f983,'st':_0x33b687});}else{var _0x2cea25=_0xf7269a[_0x3f474f],_0x4f7542=_0x792fb5(_0xf1bd37(0x4eb)+'n',_0xf1bd37(0x60c)+'b',_0x54ea91['LyRVf'](_0xf1bd37(0x967)+'l>'+_0x2cea25['label'],_0x54ea91[_0xf1bd37(0x730)]));_0x4f7542[_0xf1bd37(0xaeb)]='butto'+'n',_0x4f7542[_0xf1bd37(0x289)]=_0x2cea25[_0xf1bd37(0x406)],function(_0x124f46){var _0x718754=_0xf1bd37;_0x4f7542[_0x718754(0xd1a)+'ck']=function(){_0x246d30(_0x124f46);};}(_0x2cea25['id']),_0xd4cba0[_0x2cea25['id']]=_0x4f7542,_0x254fc7['appen'+'dChil'+'d'](_0x4f7542);}}var _0x395329=[];for(var _0x415bf3=-0x17c7+-0x228e+0x3a55;_0x415bf3<_0x3152bd[_0xf1bd37(0x875)+'h'];_0x415bf3++){var _0x7b2df3=_0x3152bd[_0x415bf3]['a'],_0x523dae=null;for(var _0x1f2ca3=-0xe09*-0x1+0x2*0xea7+0x631*-0x7;_0x1f2ca3<_0x395329['lengt'+'h'];_0x1f2ca3++){var _0x36aa2c=_0x395329[_0x1f2ca3][_0xf1bd37(0x4f3)]/_0x7b2df3;if(_0x2e21ac[_0xf1bd37(0xdc7)](_0x36aa2c,0x2281+-0x6e5+-0x1b9b-_0x261ce8)&&_0x2e21ac['ogNbY'](_0x36aa2c,_0x2e21ac['WceSH'](0x1973+0x173f+-0x30b1,_0x261ce8))){if(_0x2e21ac['wYPRU'](_0x2e21ac[_0xf1bd37(0x4d2)],_0x2e21ac['NUaay']))_0x4e2537[_0xf1bd37(0x7b7)+'eItem'](_0x314f41),_0x330189=!![];else{_0x523dae=_0x395329[_0x1f2ca3];break;}}}!_0x523dae&&(_0x523dae={'mean':_0x7b2df3,'members':[]},_0x395329['push'](_0x523dae));_0x523dae['membe'+'rs'][_0xf1bd37(0xc27)](_0x3152bd[_0x415bf3]),_0x523dae['mean']=-0xabc+0x9ce+0xee;for(var _0x1d3b66=0x319*-0x9+0x4d2+-0x170f*-0x1;_0x2e21ac[_0xf1bd37(0x4c2)](_0x1d3b66,_0x523dae[_0xf1bd37(0x98a)+'rs'][_0xf1bd37(0x875)+'h']);_0x1d3b66++)_0x523dae['mean']+=_0x523dae[_0xf1bd37(0x98a)+'rs'][_0x1d3b66]['a'];_0x523dae[_0xf1bd37(0x4f3)]/=_0x523dae['membe'+'rs']['lengt'+'h'];}var _0x2c1893=[];for(var _0x1adcc9=-0xb4e+-0x2*0x1366+0x321a;_0x1adcc9<_0x395329[_0xf1bd37(0x875)+'h'];_0x1adcc9++){if(_0x2e21ac[_0xf1bd37(0x28d)](_0x395329[_0x1adcc9]['membe'+'rs'][_0xf1bd37(0x875)+'h'],_0x46a752))_0x2c1893[_0xf1bd37(0xc27)](_0x395329[_0x1adcc9]);}if(!_0x2c1893['lengt'+'h']){_0x5634b4[_0xf1bd37(0xc27)]({'o':-(0x1d0f+-0x229b*-0x1+0x1*-0x3fa9),'v':0x0,'why':_0xf1bd37(0xb78)+'oup\x20o'+'f\x20'+_0x46a752+('\x20Obsc'+'uredF'+'loats'+_0xf1bd37(0xc92)+'ed')});return;}var _0x1fff9a=_0x2c1893[-0x768*-0x2+0x21f1+-0x1*0x30c1]['mean'];for(var _0x29b444=0x3bf*0x3+-0x1481+0x944;_0x29b444<_0x2c1893['lengt'+'h'];_0x29b444++)if(_0x2c1893[_0x29b444]['mean']<_0x1fff9a)_0x1fff9a=_0x2c1893[_0x29b444]['mean'];var _0x37d884=_0x2e21ac[_0xf1bd37(0x2cb)](_0x1fff9a,-0x1fc3+-0x7*-0x499+0x2*-0x36+0.5);for(var _0x24397d=0x255f+-0x411*-0x3+-0x10e*0x2f;_0x2e21ac[_0xf1bd37(0xb82)](_0x24397d,_0x395329[_0xf1bd37(0x875)+'h']);_0x24397d++){if(_0x395329[_0x24397d][_0xf1bd37(0x98a)+'rs'][_0xf1bd37(0x875)+'h']>=_0x46a752)continue;for(var _0x5607fb=0x18fe+-0x1893+-0x6b;_0x5607fb<_0x395329[_0x24397d][_0xf1bd37(0x98a)+'rs'][_0xf1bd37(0x875)+'h'];_0x5607fb++){if(_0x2e21ac[_0xf1bd37(0xaa9)]('qsByJ','nNYAn')){if(_0x380ad6)_0x2c9e5a[_0xf1bd37(0x21a)+'onten'+'t']=(_0x54ea91[_0xf1bd37(0xd96)](_0x57801d,_0x2e6ad1[_0xf1bd37(0x5f5)])||-0xa2*-0x1e+0x191*0x11+0xf34*-0x3)[_0xf1bd37(0x45b)+'ed'](0x181a+-0x1776+-0x1*0xa3)+'x';_0x54ea91[_0xf1bd37(0xbce)](_0x2bdd42);}else _0x5634b4[_0xf1bd37(0xc27)]({'o':_0x395329[_0x24397d][_0xf1bd37(0x98a)+'rs'][_0x5607fb]['o'],'v':_0x395329[_0x24397d][_0xf1bd37(0x98a)+'rs'][_0x5607fb]['v'],'why':'singl'+'eton'});}}for(var _0x23961a=0x1d9+0x248e+-0x2667*0x1;_0x23961a<_0x2c1893[_0xf1bd37(0x875)+'h'];_0x23961a++){var _0x52155f=_0x2c1893[_0x23961a]['membe'+'rs'];for(var _0x934340=0x29*0x95+-0x972+-0x1*0xe6b;_0x934340<_0x52155f[_0xf1bd37(0x875)+'h'];_0x934340++){var _0x4d1ce0=_0x52155f[_0x934340];if(_0x4d1ce0['a']<_0x37d884){if(_0x2e21ac[_0xf1bd37(0xcf4)](_0x2e21ac[_0xf1bd37(0xa5a)],'QFxOu')){_0x5634b4['push']({'o':_0x4d1ce0['o'],'v':_0x4d1ce0['v'],'why':_0x2e21ac['WceSH'](_0x2e21ac['hpJeM'],_0x37d884[_0xf1bd37(0x45b)+'ed'](0xf3*0x6+-0x21bb*-0x1+-0x1*0x276b))});continue;}else{var _0x13b72c=_0x28d393[_0x4d4e2c];_0x5282fb[_0xf1bd37(0xc27)](_0x2e21ac[_0xf1bd37(0x53b)](_0x13b72c,_0xf1bd37(0xc48))+_0x12ea4b[_0x13b72c]);}}var _0xa046bb=_0x2e21ac[_0xf1bd37(0x8a6)](_0x4d1ce0['base'],_0x43d8b1[_0xf1bd37(0xdbd)+'r']);if(_0x345fb6(_0x2e7bfb,_0x4d1ce0['o'],_0xf1bd37(0x633),_0xa046bb)){if(_0xf1bd37(0x80f)!==_0xf1bd37(0xab1))_0x4d1ce0['st']['lastW'+_0xf1bd37(0x761)+'n']=Math[_0xf1bd37(0x29c)+'d'](_0xa046bb),_0x4592a4++,_0x1e2c5b[_0xf1bd37(0xc27)]('0x'+_0x4d1ce0['o'][_0xf1bd37(0x69e)+'ing'](-0x128*0x3+-0x5b*-0x1+0x32d));else{if(_0x22522e[_0xf1bd37(0x46c)])_0x2338cd(!![]);}}}}}var _0xe29e80={'FPScontroller':[[-0x13ad+0x1*-0x12aa+0x2667,_0x57da09(0x633)],[0x1*0xa39+0x11ae+-0x1bbf,_0x2e21ac[_0x57da09(0xbad)]],[0x773*-0x5+0x14b*0x3+0x10cf*0x2,_0x2e21ac[_0x57da09(0xbad)]],[-0x2014+-0x1ec2*0x1+0x3f2e,_0x2e21ac[_0x57da09(0xbad)]],[0x1*0x1d41+0x5*0xeb+-0x2168,_0x2e21ac[_0x57da09(0xbad)]],[0x3d*-0x26+-0x13*0x14f+0x2273,_0x2e21ac['YBktQ']],[-0x1228+-0x6d7+0x199f,'obfF'],[-0x1*-0x185e+-0x26ab*-0x1+-0x3e51,_0x2e21ac[_0x57da09(0x4b8)]],[0x2e9*-0xd+-0x1*-0x4ef+0x21aa,'obfF'],[0x797*-0x3+-0x2374+0x3b15,'i32'],[0x1b7*0x7+0x1741*-0x1+0xc20,'v3'],[-0x2c8+0x172e+-0x6*0x33f,'u8'],[0x62*-0x3e+0x16ef+0x1bd,_0x57da09(0x633)],[0x48d*-0x1+0xa0d*0x3+-0x1892,_0x2e21ac[_0x57da09(0x859)]],[0x1*-0x2603+0x1182+0x158d,'u8'],[0x1*0x1dd8+0x1435+-0x30fd,'i32'],[0x3*0xa85+-0x7*-0x4e9+-0x159e*0x3,'u8'],[0x1*-0x13b2+-0x1a43+0x2f0a,'u8'],[0x1ec+0x31*0x20+-0x2*0x378,_0x57da09(0x633)],[-0xc5b*-0x2+-0x10fe+-0x6*0x116,_0x57da09(0x633)],[0x1fd0*0x1+0x1*0xbe1+0x1*-0x2a65,_0x2e21ac['nlVRQ']],[0x1*-0x267b+-0x25cc+0x4d97,_0x2e21ac[_0x57da09(0x99a)]],[0x1e9a*-0x1+-0x13e4*0x1+-0x86*-0x63,'v3'],[-0x120c+-0x12*-0x158+-0x4c4,'v3'],[0x1fcf+-0x4e9*0x1+-0x197a,_0x57da09(0x550)],[0x15d5+0x93*0x1+-0x16*0xf4,_0x2e21ac['nlVRQ']],[0x1*-0x38f+0x118d*-0x1+0x16a4,'u8'],[-0x14e5+0x228d+-0xc1c,_0x2e21ac[_0x57da09(0x99a)]],[0x251f+0x2207+-0x2*0x22c7,'v3'],[-0x1d20+0x2121+-0x25d,'u8'],[-0x40*-0x11+0x2*0xbc+-0x404,'f32'],[-0x586+0x2253+-0x1*0x1b15,_0x2e21ac[_0x57da09(0x99a)]],[-0x3a5*0x7+-0x1e1+0x1d20,'u8'],[0xe32+0x4f2+-0xb*0x195,'u8'],[-0x3*-0x40c+0x4be+-0xf22,_0x2e21ac[_0x57da09(0xbad)]],[0x24e3+-0x10d*0x21+-0x5e,_0x2e21ac[_0x57da09(0x99a)]],[-0x10f8+-0x16c7+0x299b,'u8'],[0xd*0x1e1+-0x1761+0xd4,'obfF'],[0x41*-0x1+-0x2109+0x2342,'v3'],[0x1f54+-0x37a*-0x1+-0x20c6,_0x2e21ac[_0x57da09(0x4b8)]],[0xe71*-0x1+-0xe5*0x11+-0x11*-0x1de,_0x2e21ac[_0x57da09(0x99a)]],[-0x39c+-0x2559+-0x7*-0x627,_0x2e21ac[_0x57da09(0x99a)]],[-0x22fb*0x1+-0x11bb+0x1*0x3702,'f32'],[-0x13d3+-0x7f*-0x1+0x22a*0xa,'f32'],[0x52a*0x7+-0x9*0xe3+-0x19d7,_0x57da09(0x550)],[-0x26f5*0x1+-0x12af*0x1+0x1*0x3bfc,_0x57da09(0x550)],[-0x1e8f*-0x1+0x1321+-0x4*0xbd5,'u8'],[0x1*0x22b5+0x61*0x10+-0x2668,'u8'],[0x1*-0x181d+0x24c2+-0xa47,'u8'],[0x1340+-0x86*0x3a+0x1*0xd7c,_0x2e21ac[_0x57da09(0x99a)]],[0xe*0x11+-0x200c+-0x2*-0x10c1,'u8'],[-0x23e7+0x1ba2+0xaaa,'u8'],[-0x2*-0x935+-0x79a*-0x1+-0x179c,'f32'],[0xbc5+-0x1b7d+0x1224,'f32'],[0x1f9e+-0x1ab0+0xb*-0x3a,_0x57da09(0x550)],[0x172c+-0x25f6*-0x1+0x1d57*-0x2,_0x57da09(0x550)],[-0x10*0x68+0x1513+-0x1*0xc1b,_0x2e21ac[_0x57da09(0x99a)]],[-0x17*-0x1b1+0x703+-0x2*0x15b7,_0x57da09(0x550)],[0x1763+0xcf+-0x15b2,_0x57da09(0x550)],[0x63+-0x108e+0x1*0x12af,'v3'],[-0x2*-0x11b9+-0x1*-0x1e7d+-0x1*0x3f5b,'u8'],[0xda3*-0x1+0x1*0x21dd+0x25*-0x7a,'v3'],[-0x3*0x55a+-0x22db*0x1+0x358d,_0x57da09(0x550)],[-0x239*-0xb+-0x15eb+-0x1*-0x24,'v3'],[0xc00+-0xa77+0x12f,_0x2e21ac[_0x57da09(0x99a)]],[-0x238a*-0x1+0x1349*-0x1+0x1*-0xd85,_0x57da09(0x550)],[0x960+0xbac+-0x124c,_0x2e21ac['nlVRQ']],[0x180d*0x1+-0x1373+-0x1d6,'u8'],[0x155b+0xeba+-0x2150,'u8'],[0x149f+-0x3*-0x407+-0x1dec,_0x2e21ac[_0x57da09(0x99a)]],[0x41*-0xd+-0x3*-0xe5+0x59*0xa,_0x2e21ac['nlVRQ']],[0xa58+0xdf1*0x1+-0x1565,'v3'],[0x2402+-0x9a7+0x4af*-0x5,'v3'],[-0x834+0x1859+-0xd29,_0x2e21ac['nlVRQ']],[0x1*0x496+-0x7*-0x27b+-0x63*0x31,_0x57da09(0x550)],[-0x1c1*-0x16+0x22ba+-0x464c,_0x2e21ac['nlVRQ']],[0x1e1*-0x1+-0x1*-0x1575+-0x108c,_0x2e21ac[_0x57da09(0x99a)]],[0x1225*0x2+0x3*-0x275+0x1*-0x19df,'v3'],[0x5e4+0x5*0x2d+0x1*-0x3ad,'u8'],[-0x2414*-0x1+-0x1885+-0x873,'v3'],[0xa4*-0x20+0x1584+0x1*0x224,_0x57da09(0x25a)],[0x160a+0x694+-0x1972,_0x2e21ac[_0x57da09(0x99a)]],[-0x657*-0x3+0x1*-0x174+0xe61*-0x1,'f32'],[-0xa64+-0x14f9+0x2291,_0x57da09(0x550)],[-0x1d63+0x1fda+-0x1*-0xc5,_0x2e21ac[_0x57da09(0x99a)]],[0x1b2c+-0x2441*0x1+-0x29*-0x4d,'u8'],[0x2567+-0x226b+0x45,'u8'],[-0x25*0xf9+-0x59*0x52+0x43cb,'u8'],[-0x269b*0x1+0x9a3*-0x2+0x3d2e,'u8'],[0x26c9+-0xf7c+0x1*-0x13ff,'u8'],[-0x7*-0x7b+-0x395*0x1+0x71*0x8,'f32'],[-0x1fbe+-0x52*-0x43+0x6ce*0x2,_0x2e21ac['nlVRQ']],[0x15b3+0x15*-0x17d+0x1*0xce6,_0x2e21ac[_0x57da09(0x99a)]],[-0x230b+-0x6ab+0x2d12,'f32'],[0xe37+0x21be+-0x2c95,_0x2e21ac['nlVRQ']],[0x949+0x177e+-0x1d63*0x1,'u8'],[-0x25a6+0x2*0x3e8+0x213e,'f32'],[-0x12e2+0x5*-0x655+0x35f7,'f32'],[0x1b39+-0x8ea+-0xedf,'u8'],[-0xd09+0xfda*0x1+-0x1*-0xa7,'v3'],[-0xb69+0x1455+0x568*-0x1,'v3'],[-0x1*-0x14c3+0xf*-0x81+0x9a4*-0x1,'v3'],[0x1ed0+0x25b7+-0x40eb*0x1,_0x57da09(0x550)],[-0x1*-0x14b7+-0x266c+0x7f*0x2b,_0x2e21ac['nlVRQ']],[0x205*0x8+-0xd*-0xfd+0x2b*-0x97,_0x57da09(0x550)],[0x33b*-0x1+0x1203*-0x1+0xc73*0x2,'v3'],[-0x20*-0xf5+-0xd43+-0xda9,'i32'],[-0x68c+-0x315+0x3*0x473,'u8'],[-0x17a4+-0x1792+-0x1979*-0x2,_0x57da09(0x25a)],[0x4eb+0x3*-0x16f+0x322,'f32'],[0x902+-0x1bcd+0x168f,_0x57da09(0x550)],[-0x29*0x11+0x120e+0xb8d*-0x1,_0x57da09(0x550)],[-0x7*0x3ec+-0x2*-0x67f+0x1242,_0x2e21ac[_0x57da09(0x99a)]],[-0x7a9*0x4+-0x1*0x1a39+-0x1*-0x3cad,'v3'],[-0x15d5+-0xd*0x259+-0x59f*-0xa,_0x2e21ac[_0x57da09(0x859)]],[0x2585+0x152c+0x36d1*-0x1,'u8'],[0x2553+-0xea6+0x4b3*-0x4,'u8'],[0xb*-0x2+0x1*-0x1763+0x1b5b,'u8'],[0x2103+0x1*0x2f3+-0x2012,_0x2e21ac[_0x57da09(0x99a)]],[0xb9*0x9+0x1*0x1345+-0x15de,_0x57da09(0x25a)]],'HealthScript':[[-0x975*-0x3+0x48e*-0x8+-0x1*-0x869,'u8'],[0x1c68+0x4df+0xaf9*-0x3,_0x57da09(0x25a)],[0x1149+-0x2cf*0x9+-0x43f*-0x2,_0x2e21ac[_0x57da09(0x99a)]],[0xc43+-0x27*0x77+0x56*0x13,_0x2e21ac[_0x57da09(0x99a)]],[-0xe0e*0x1+0x12d0+-0x2*0x21d,_0x57da09(0x550)],[0x79a+-0xabc+0x3ae,_0x2e21ac['nlVRQ']],[-0x12f8+0x2526+-0x119e,_0x2e21ac[_0x57da09(0x99a)]],[0x9*0x5a+-0x1da5+0x1b0f,_0x2e21ac['nlVRQ']],[0xe30+0x14c*-0x19+0x12dc,_0x57da09(0x25a)],[-0x1*0x2011+0x2a1*0xb+0x3ca,'i32'],[0x461+0x2*0xdeb+-0x1f8f,'u8'],[-0x1*-0xffb+-0x2a2+-0xcb0,'u8'],[-0x22cb+0x1609*-0x1+0xdf*0x42,'u8'],[0xe00+0x12f*-0x1d+0x14fe,'u8'],[-0x6b2+0x167b+-0x503*0x3,_0x2e21ac['wrhXO']],[-0xde7*0x1+0x731+0x182*0x5,'obfI'],[-0x2c0*0xb+0x1*0x959+0x15cf,'obfI'],[-0x16af+0x3*0x836+-0x1*0xf7,'obfI'],[-0xa11*-0x3+0x3*-0x397+0x1*-0x125e,_0x57da09(0xc15)],[0x1bef+0x25*-0x20+-0xe3*0x19,_0x57da09(0xd13)],[0xd*0x10c+0x42a*-0x8+-0x7*-0x2fc,'obfF'],[0x9ad*-0x2+-0x259*0x5+0x205f*0x1,_0x2e21ac[_0x57da09(0x99a)]],[0xb4c+0xc04+-0x1604,_0x2e21ac[_0x57da09(0x99a)]],[-0x1f0b+0x4f*0x3d+0xd88,_0x57da09(0x550)],[0x557+-0x1efb+0x1af8,_0x57da09(0x550)],[-0x157b+0x1a8+0x152f,_0x2e21ac['nlVRQ']],[-0x14e7+0x2b7*0xb+-0x796,'v3'],[-0x9f0+-0xd2f+0x188f*0x1,_0x57da09(0x550)],[0x118e*0x2+0x2*0x679+-0x2e96,'f32'],[0x234d+-0x593*-0x1+-0x2760,'u8'],[0x14e4+-0x26c1+0x1369,'u8'],[-0xdef+-0x1970+0x28ef,'i32']],'PlayerConfig':[],'WeaponManager':[[-0x10ec+-0x49b*0x2+-0x1*-0x1a3a,'i32'],[-0x7e+0x22dc+-0x6da*0x5,_0x57da09(0x25a)],[0x8*-0x9d+-0xf6+-0x2*-0x2ff,'u8'],[-0x3*-0x95f+0xe6e+0xd*-0x343,'i32'],[0x184*-0x2+0x18d*0xd+0x10bd*-0x1,_0x57da09(0x633)],[-0x2304+0xdec+-0x565*-0x4,_0x2e21ac['nlVRQ']],[0xfa*0x22+-0xf3*0x1d+0x1*-0x529,'i32'],[0x974+0x56c+-0xd8*0x11,'u8'],[0xb*0x89+0xc2*0x14+0x19*-0xd2,'u8'],[0x763*0x3+0x2589+-0x71*0x86,'i32'],[0x61*-0x38+-0x24b*0x1+0x1813,_0x2e21ac['nlVRQ']],[0x71*-0x4f+0x1dba+0x5bd*0x1,_0x2e21ac[_0x57da09(0x99a)]],[0x89a+0x2ea*0xd+0x8*-0x5ba,_0x57da09(0x25a)],[0x5b*0x3f+0x2e*0x98+-0x30f9,'u8'],[-0x141*-0x11+0x5*-0x4a6+0x2c9*0x1,_0x2e21ac['wrhXO']],[0x1*-0x451+0x170b+-0x11ca,_0x2e21ac[_0x57da09(0x325)]],[-0x1459+-0x6eb*-0x4+0x1*-0x64f,'f32'],[0x45e*-0x2+-0x12f*0x15+0x229f,_0x57da09(0x550)],[-0x23ae+-0x81c+0x2cd6,_0x2e21ac['nlVRQ']],[-0xdee+0x12ee+-0x3e8,_0x57da09(0x550)],[0x1473+0x5c9*-0x5+0x99a,_0x2e21ac[_0x57da09(0x99a)]],[-0x1d80+0x4db*-0x7+-0xd*-0x4f9,'u8'],[-0x25*0xca+0x1afc+0x362,_0x2e21ac['wrhXO']],[-0x985*0x1+0x2ea+0x1*0x7db,'obfI'],[0x19af+-0x24d7*-0x1+0x3*-0x1466,_0x2e21ac[_0x57da09(0x325)]],[0x9c7+-0x168f+0xe30,_0x57da09(0xd13)],[0x13*-0x157+0x203*0xa+-0x2f*-0x25,_0x2e21ac['hbBzK']],[-0x1ae5+0x1*0x18ad+-0x7*-0x88,_0x57da09(0xd13)],[0xc94+-0x17b6+-0x3*-0x43a,_0x2e21ac['hbBzK']],[0x1b1*-0x1+-0x62*0x1f+-0x511*-0x3,_0x57da09(0xd13)],[0x7b8+0x4bd*0x1+-0xac5,_0x2e21ac[_0x57da09(0x325)]],[-0x4*-0x1a2+0x1244*-0x2+-0x65c*-0x5,_0x2e21ac[_0x57da09(0x859)]],[-0x1*0xb78+-0x5a1*-0x5+-0x5*0x2f9,'u8'],[0x17c8*0x1+0x9aa*-0x2+-0x2a0,_0x57da09(0x25a)],[-0x1*-0x22a0+-0x1*0x407+-0x1b1*0x11,'i32'],[-0x1dca+-0x1a09*0x1+0x39d3,_0x57da09(0x25a)],[-0x1*0x1459+0x4*0x70+-0x4f*-0x43,'u8'],[0x2126+0x241*0x1+-0x3*0xb19,'u8'],[-0x2*0x99a+-0x6ca+-0x5*-0x59f,'u8'],[-0x24a4+0x234c+0x376,'u8'],[-0x78d*-0x1+-0xdb5+0x847,'u8'],[-0x103c*-0x2+0x19c3*0x1+-0x37eb,_0x57da09(0x25a)],[0x2*0xdbd+-0x461+-0x4d*0x45,'u8']],'GG_GameManager':[[0x2239+0x6c9*0x2+-0x2fa7,'u8'],[-0x2429+-0x255a+0x49af*0x1,_0x57da09(0x550)],[-0xa96+-0x1*-0x1e86+0x4*-0x4eb,'u8'],[-0x468+-0x1ba7*-0x1+-0x2*0xb7d,'u8'],[-0x1120+0xda+0x108e,_0x2e21ac[_0x57da09(0x99a)]],[-0xc*-0x1c6+0x1*-0x25c3+0x10c7,'f32'],[-0x452*0x1+-0xe7d*0x2+0x219c,'i32'],[-0x1*-0x2709+0x4b*-0x25+-0x1bde,_0x2e21ac[_0x57da09(0x859)]],[-0x21*-0x6e+-0x1b7*0xe+0xa2c,'u8'],[-0x379*-0x3+0x69b+0x25e*-0x7,'u8'],[0x1*-0x1f35+-0x3*0x42+0x2073,_0x2e21ac[_0x57da09(0x99a)]],[0x1ff8+-0x1e1f+-0x1*0x15d,'f32'],[-0x1*0x74f+-0x4*0x61b+0x204b*0x1,_0x57da09(0x25a)],[0x2226+0x6d8*0x2+0x2e*-0x107,'u8'],[-0x2567+0x2494*-0x1+0x4aaf,'i32'],[0x1fe+0x64f+0xd*-0x95,_0x2e21ac[_0x57da09(0x859)]],[-0x15c0+0x1*0xb5d+-0x1*-0xb23,'i32'],[-0x1*0xf9f+0x1*-0x2515+0x359c,_0x2e21ac[_0x57da09(0x325)]],[0x1fd2+-0x20c6+0x1f0,_0x2e21ac[_0x57da09(0x325)]],[-0x1007+-0x3*0x102+-0x10f*-0x13,_0x2e21ac['wrhXO']],[-0x7e*0x39+0x1b47+0x1f3,'u8'],[-0x1774+-0x295*0x4+0x22f8,_0x57da09(0x25a)],[0xe5*0x19+0x1a32*-0x1+0x539,'u8'],[-0x58f+-0xb*-0x302+-0x1a17,_0x2e21ac[_0x57da09(0x99a)]],[0x1588+0x81*-0x35+-0x6ad*-0x1,'u8'],[0x6*0x193+0x14d5+0x1*-0x1cbf,'u8'],[0x1b*0x1d+0x4*-0x3d5+0xde9,'u8'],[-0x709*-0x3+0x8f3+-0x1c66,_0x57da09(0x25a)],[0x2100+0x21f0+-0x4144,_0x57da09(0x550)],[-0x5b*0x11+0x10ee+0xf*-0x9d,'u8'],[0x39f+0x16a1+-0x188f,'u8'],[-0x20cc+0xa37+0x184d*0x1,'i32'],[0x1*0x2286+-0x169f+-0xa2b,'i32'],[-0x12ba+0xc*-0x14b+-0x11*-0x21e,_0x57da09(0x550)],[-0x1fd6+-0x5c2+0x394*0xb,_0x57da09(0x25a)],[0x1824+0x21b3+-0x1*0x380f,_0x57da09(0x550)],[0x3*0x6d9+-0x156b+0x2ac,_0x57da09(0x25a)],[-0x1935+0x1a29+0xdc,_0x57da09(0x25a)]],'TDM_GameManager':[[-0x13b5+-0x2*0x935+0xcbd*0x3,'u8'],[0xde0+0x227*-0x10+0x14b0,'u8'],[-0xb1*-0x1b+-0xef4+-0x396,'u8'],[-0x4*-0x788+-0x446*0x4+-0xce4,_0x57da09(0x550)],[-0x1183+-0x1*-0x1b27+-0x94c,'u8'],[0x23a+0x258d*-0x1+0xbe5*0x3,_0x2e21ac[_0x57da09(0x99a)]],[-0x9c2+-0x92f*-0x3+0x116b*-0x1,_0x57da09(0x550)],[0x7*0x539+0xc28+-0x3053,_0x2e21ac[_0x57da09(0x859)]],[0x1678+0x17ee*0x1+-0x2dfe,_0x2e21ac[_0x57da09(0x859)]],[0x1e81*-0x1+-0x47*0x1f+0x13c3*0x2,'u8'],[0x1dbc+-0x1f83+0x234,'u8'],[-0x5e+-0x1*0x259f+-0x445*-0x9,_0x2e21ac['nlVRQ']],[-0x1a1e+-0x5*0x50+0x2*0xe11,_0x2e21ac['nlVRQ']],[-0x1a*0x12+0x800+0x14*-0x49,'i32'],[0xa53*0x3+-0x7*-0x577+0x1*-0x44ae,'u8'],[0x940+0x260e+0x1f*-0x182,_0x2e21ac[_0x57da09(0x325)]],[-0x1f2b+0x5*0xf6+-0x1b35*-0x1,'obfI'],[0x1f2f+-0x17a0*0x1+-0x6a3,'obfI'],[0x972+-0x259d+0x1d2b,_0x57da09(0xc15)],[0x13e0+-0x98b*-0x1+-0x1c57,'u8'],[-0x1*-0x1cda+-0xc*-0x303+-0x6*0xa9b,'u8'],[0x12ee+-0xa45+-0x749,'i32'],[0x51e+0x24d5+-0x7d*0x53,'u8'],[0x1d41+0x1*-0xbc6+-0xff7,'u8'],[-0x195e+-0x817*-0x1+0x12cf,'f32'],[0x5b7+0x273*0x4+-0xdf7,_0x2e21ac[_0x57da09(0x859)]],[0xcb9*-0x3+-0x1*-0x519+0x22a2,_0x57da09(0x25a)],[0x1*0x414+0x140a+-0x168a,_0x2e21ac[_0x57da09(0x99a)]],[0x1884+-0x7*0x1a1+-0x3*0x3d7,_0x57da09(0x25a)],[-0x911+-0x2*-0x40b+0x297,_0x57da09(0x25a)],[-0x34*-0x3b+-0x169*-0xd+0x235*-0xd,_0x57da09(0x550)],[-0xb4c+-0xef3+0x1*0x1be3,'f32'],[0x44e*-0x9+0x14c3+0x13a3,'i32'],[0x1f67+0x128+-0x1edf,'u8'],[0x7*0x387+-0x1f71+0x871,'u8'],[0xf70+-0x79f+-0x619,_0x2e21ac[_0x57da09(0x99a)]]],'PhotonNetworkSync':[[-0x2*-0xddb+0x17*0x199+-0x4041,'v3'],[-0x16c7*0x1+-0x4c*-0x2a+-0x385*-0x3,_0x2e21ac[_0x57da09(0x859)]],[-0x1*-0x217b+0xbd6+-0x2d0d,'u8'],[0x4*-0x3d1+-0x8a1*-0x1+0x6e8,'u8'],[0x1*-0x3bb+-0x221b+0x261e*0x1,'v3'],[-0x1516+-0xe4e+0x17d*0x18,'u8'],[0x25b*0x1+-0x5*-0x116+-0x771,'i32'],[0x2269+0x19*-0x13d+-0x318,'i32'],[-0x6*0x255+-0x1d*-0x39+0x7e9,_0x2e21ac['nlVRQ']],[-0xc8*-0xb+-0xd10+0x4dc,_0x2e21ac['nlVRQ']],[-0x8ee+-0x1*-0x557+0x3ff*0x1,_0x2e21ac[_0x57da09(0x99a)]],[0x1931+-0x1*-0x20b3+-0x3978,'v3'],[-0x4*-0x85d+-0x528+0xdea*-0x2,_0x57da09(0x550)],[-0x1b50+-0x1*-0x5ea+0x15e2,_0x2e21ac['nlVRQ']],[-0x1294+0x97b+-0x333*-0x3,_0x2e21ac[_0x57da09(0x859)]],[0x1*-0x409+0x106b+-0xbda,'f32']],'MouseLook':[[0x2162+0x19ff+-0x3b4d,_0x57da09(0x550)],[0x2a+0xc1b+-0x40f*0x3,_0x2e21ac[_0x57da09(0x99a)]],[-0x93*0x1+-0x9fb+0xaaa,_0x2e21ac['nlVRQ']],[0x10e3+-0x1e80+0xdbd,_0x57da09(0x550)],[0x53*-0x57+-0x1807+0x3460,'f32'],[0xda3+-0x1*0x19cd+0xc52,'f32'],[-0x1f9d+-0x624*0x3+0x3239,_0x2e21ac['nlVRQ']],[0x1*-0x1c8d+0x2*0x1045+-0x3c9,'u8'],[0x1*0x1122+0x42*-0x66+0x962,_0x57da09(0x550)],[0x1c23+0x22*0xec+-0x1d*0x20b,_0x57da09(0x550)],[-0x3*0x267+-0x1d4f+0x24c4,_0x2e21ac[_0x57da09(0x859)]],[0x2527+-0x1*0x34a+-0x2199,'u8'],[-0x1*-0x73d+-0x1066*0x2+0x19d7,'v2']],'NetworkPlayerAnimations':[[-0x5*-0x423+0x71*-0x56+0x11ef,'v3'],[-0xe58+-0x1a1d*0x1+-0x101*-0x29,'v3'],[-0xa50+0x1*0x1118+-0x608,'u8'],[-0x1eee+-0x2537+0x44e9,'i32'],[-0x1a9*-0x5+0x160*-0x8+-0x3*-0x129,_0x57da09(0x25a)],[0x1*0x1872+-0x2*-0xca1+0x30e8*-0x1,'f32'],[-0xa0+0x161*0x3+-0x2b3,'f32'],[-0x13b6+-0x17ee+0x590*0x8,_0x57da09(0x550)],[-0x2*-0xe1+0xc61+-0xd43,_0x57da09(0x550)],[-0x3*0x405+0x4*-0x231+0x15bb,_0x2e21ac['nlVRQ']],[0x3*0xbd6+0x4*0x8de+-0x460e,_0x57da09(0x550)],[-0x15*0x3d+-0x1*-0x6ad+0xbc*-0x1,_0x2e21ac[_0x57da09(0x99a)]],[0xf8+0x122+0x15*-0xe,_0x2e21ac[_0x57da09(0x99a)]],[0x2b9*-0xa+0x347*-0x7+0x35*0xf7,_0x2e21ac[_0x57da09(0x99a)]],[-0x2*-0x56c+-0x417*-0x4+-0x347*0x8,_0x57da09(0x550)],[0x5f0+0x1*0xb81+-0x3d*0x45,_0x2e21ac['nlVRQ']],[-0x1*0x24da+0x6b*0x7+-0x6fd*-0x5,_0x57da09(0x550)],[0x6a*-0x3e+0x687*-0x2+0x27c2,'i32'],[0x219d*0x1+0xa38+-0x3*0xe43,'u8'],[0x9dc*-0x3+-0x63*0x13+0x25fd,_0x2e21ac[_0x57da09(0x859)]],[-0x1a*-0x19+-0x1*0x2497+-0x2321*-0x1,_0x2e21ac[_0x57da09(0x859)]],[0xf76+0x1*-0x2327+0x14c9,'u8'],[-0x5*0x321+-0x2*0xbc4+0x2849,_0x57da09(0x550)],[-0x18ee+-0x1*0x1ec5+0x38d3,_0x57da09(0x550)],[0x705+0xc36+-0x1217,'f32'],[0x1895+-0x1ade+0x371,_0x57da09(0x550)],[-0x1b14+-0x19f6+0x3636,'u8'],[-0x1133+0xc66+0x605,'u8'],[0x12c2+0x1b3+-0x1339,'v3'],[-0x216d+0x9f5+0x21*0xc0,'v3'],[0x991*0x1+0x8fe*-0x1+0x1*0x101,'u8']],'NPC_Cotroller':[[0x86*0xa+0x16d+-0x695,'v3'],[-0x1*-0x252e+0x51c*-0x2+-0x3*0x8f2,_0x57da09(0x550)],[0x12f5+-0x7ae*0x1+0x1*-0xb23,_0x57da09(0x550)],[-0x1*0xf5f+0x6*0x2cd+0x1*-0x119,'u8'],[-0xff+-0x1ef2+0x2048,'u8'],[-0x1*-0x7eb+0x15fb+-0x1d8a,'v3'],[0x1e28+-0xf03+-0xe89,'u8'],[-0x30f+-0x2471+0x2820,'f32'],[0x1de7+0x26ba*0x1+-0x127*0x3b,_0x57da09(0x550)],[-0x161*0x9+-0xc9*-0x24+-0xf23,_0x57da09(0x550)],[-0x3d*-0x7d+0x5*0x757+-0x20*0x20e,'f32'],[-0x4*0x17d+-0xb2*0x1a+0x1*0x18d0,'u8'],[-0x9d*-0xd+-0x51b+-0x212,_0x57da09(0x550)],[0xaec*0x2+-0x2288+-0xd88*-0x1,'f32'],[0x3*-0x2b5+-0x2173+-0x2a6e*-0x1,_0x2e21ac[_0x57da09(0x99a)]],[0x1*0x13c3+0x4*0x44f+-0x241f,_0x2e21ac['nlVRQ']],[0x829+-0x9a*0x19+0xd*0x99,'u8'],[-0xa1c*0x1+0x134b*-0x1+-0x455*-0x7,_0x2e21ac['nlVRQ']],[-0x1df5*-0x1+-0x1951+-0x3*0x13c,'v3'],[-0x1d86+-0x15ad+0x342f,'f32'],[-0x110b*-0x1+0x2*0xee2+0xf45*-0x3,_0x57da09(0x25a)],[-0x1*-0x1861+-0x7ca*-0x1+-0x63b*0x5,'f32'],[-0x1236+-0x987+0x5c1*0x5,_0x57da09(0x550)],[0x87*0x36+-0x1*0x2383+-0x1*-0x815,_0x2e21ac[_0x57da09(0x99a)]],[0x1*-0x18a6+0x451+0x1569,'v3'],[0x64d+-0xb46+0x619,_0x2e21ac[_0x57da09(0x99a)]],[-0x1b6b+-0x452+-0x1bb*-0x13,_0x57da09(0x550)],[0x1a7e+0x20ba+0x13c*-0x2f,'v3'],[-0xa9*0x18+-0xc6a+0x1d86,'u8'],[-0x34f*0x1+0x9*-0x2f9+-0x8*-0x3eb,'f32'],[0x156+-0x2*0xb33+0x1660,'v3'],[0x1*0x1813+0x4cc+-0x1*0x1b7f,'i32'],[-0xebb+-0x1488+-0x1*-0x24af,_0x57da09(0x25a)],[-0x1*-0xfc6+0x1*-0x1966+0xb10,_0x2e21ac[_0x57da09(0x99a)]],[-0x13c*0x18+-0x2*-0xe94+0x3*0xa4,'u8'],[-0x103*0x5+0xe96+-0x80f,'v4'],[-0x1d89*-0x1+-0x133*0x9+-0x1136,_0x2e21ac[_0x57da09(0x99a)]],[0xa*-0xb5+0xc0e+-0x370,_0x57da09(0x550)],[-0xd*0x26e+-0x228b+-0x43b1*-0x1,_0x2e21ac[_0x57da09(0x99a)]],[-0x4f1+0x665+0x4*0x9,'u8'],[0xa*-0x211+-0xaac+-0x1*-0x20f6,_0x2e21ac[_0x57da09(0x859)]]],'TargetHealth':[[0x2*0xfeb+-0x6d8+-0x18ee,_0x2e21ac[_0x57da09(0x859)]],[-0x1*-0x163d+-0x17*0x1a0+0x13*0xcd,'i32'],[-0x3f3+0x9d0+0x1*-0x5a9,'u8'],[-0x11e9+-0x8ae*-0x1+0x8f*0x11,_0x57da09(0x25a)],[0x1419+0x104c*0x2+-0x3469,_0x2e21ac['JeeQp']],[0x1*-0xafb+-0x1feb+0x2b32,_0x2e21ac['JeeQp']],[0x1*0x1876+-0x1c87+0x461,_0x2e21ac['JeeQp']],[0xc86+-0xf0+-0xb12,'f32'],[0x13da+-0x7c2*-0x2+-0x22d2,'f32'],[-0x7d6+0x35d+0x509,'u8'],[-0x1a8*-0x2+-0x78*-0x34+0x6c7*-0x4,_0x2e21ac[_0x57da09(0x99a)]],[0x1efb+-0x180a+-0x64d,'u8'],[-0x3*-0x281+-0x1*-0x675+-0xc*0x11c,_0x2e21ac['JeeQp']],[0x11d9*-0x2+0x26*0x2c+0x1dd6,_0x57da09(0x25a)],[0x1*0x71b+-0x194b+0x12f0,'f32'],[-0x1*-0x26a1+-0x2*-0x5b4+0x9d9*-0x5,'u8']],'SectatorCamera':[[0x1*-0x19ba+-0x1094*-0x1+0x93a*0x1,_0x2e21ac[_0x57da09(0x99a)]],[-0x1*0x18b3+-0x25f6+0x165*0x2d,'f32'],[0xb3*-0x4+0x9*0x4d+0x33,_0x57da09(0x550)],[-0x2552+0x1d09+0x869,'v3'],[0x3*-0xf1+-0xabb*-0x1+-0x7bc,'v3'],[-0x1*-0x5cb+-0x23fc+-0x1d*-0x10d,'i32'],[-0x553*0x5+-0x7a8+0x2293,_0x2e21ac[_0x57da09(0x859)]],[-0x8b*0x2f+0x24a8+-0xad3,'f32'],[0x1e1c+0xa2*0x2+-0x1f0c,'i32'],[0x3d+0x31*-0x89+0x1a54,_0x57da09(0x550)],[-0x2e*0xb3+0x1*-0xeb6+0x2f3c,'u8'],[-0x23c4+0x56b*-0x3+0x3465,'v3'],[0x23ab*-0x1+-0x6d5+0x2aec,'v4'],[-0x101*-0x9+0x1*-0x2333+-0x9*-0x2f6,'u8'],[-0x1*0x1bb9+0x17b0+0x489,_0x2e21ac[_0x57da09(0x859)]]],'UISettings':[[0x1*-0x18e1+0x9d6*0x2+0x555,'i32'],[-0x672+0x1f6e+0x635*-0x4,_0x2e21ac[_0x57da09(0x99a)]],[0x1602*-0x1+0x16ec+-0x3*-0x1e,'u8'],[-0x157*0x5+-0xab6+0x12b1,_0x57da09(0x25a)],[-0x1878+0x272*-0x7+0x2aea,'i32'],[-0x269b+-0xdaa+0x3d*0xe1,_0x2e21ac['JeeQp']],[-0x1*0x1d89+-0x4f1+-0x5f9*-0x6,'u8'],[-0x78b*-0x3+-0x1e9c+-0x2e*-0x34,'u8'],[0x2a6*0x6+-0x2*0x1ca+-0xaf2,'u8'],[0x25d6+0x893+0x1685*-0x2,'u8'],[0x1af4+-0x18f7+-0x9d,'u8'],[0x2f3*0xd+-0x7*-0x4f3+-0x479b,'u8'],[-0x2508+-0x1*0x925+0x1*0x2f8f,'u8'],[-0xdf*0x2+0x143b+-0x1*0x10c1,'f32'],[0x1aad*-0x1+0x6bc+0x15b5,_0x2e21ac['nlVRQ']],[0x1057+0x1*0x1063+-0x1ea2,'u8'],[-0xa7d+0x12c6+-0x5c9,_0x2e21ac['nlVRQ']],[0x8a1*0x1+-0x80e+0x20d,_0x57da09(0x25a)],[-0x18c+0x22e5+-0x4d*0x65,'u8'],[-0x1c7c+0x178c+0x223*0x4,'u8'],[-0x67*0x45+0x204e+-0xeb,'v2'],[0xfb*-0x1+0x483+0x20,'v2'],[-0x15*0xfd+0x741*-0x4+0x3575,'u8'],[0xeb9+-0x1183*0x1+0x2*0x341,'u8'],[0xd*0x93+-0x1*-0x145b+-0x5*0x4ce,_0x2e21ac['nlVRQ']],[0x17f1+0x1db+-0x15fc,'v3'],[0x234d*0x1+0x11ce+-0x313b,_0x2e21ac['nlVRQ']],[-0x1*-0x207d+0x3cd+-0x2066,'f32'],[-0x68b+-0x17*0x59+0x313*0x6,'f32'],[0x5*0x773+0x2*-0xfa3+-0x209,'u8'],[-0x1548*-0x1+-0xf33*-0x1+0x253*-0xe,'u8'],[0x1ed*0x5+-0x144f+0xea2*0x1,_0x2e21ac['JeeQp']],[-0x2*0x104a+0x64*0xb+0x2048,_0x2e21ac[_0x57da09(0x859)]],[-0x1ab*0xd+0x34*0x78+0x153,'i32'],[-0x1*0xa7f+-0x859+0x16e0,_0x2e21ac[_0x57da09(0x859)]],[0x61*-0x15+0x17*0x8b+-0x7c,_0x57da09(0x25a)],[-0xb*0x174+0x869*0x1+0xba3,'i32'],[0x53*0x7+-0x103*-0x1d+-0x1b88,_0x2e21ac[_0x57da09(0x859)]],[-0xf9d+0xaea+-0x1*-0x8cb,_0x57da09(0x25a)],[0x1*0xfa1+-0x985+0x40*-0x8,_0x57da09(0x25a)],[0xe24*-0x2+0x15*0x193+-0xa7,_0x57da09(0x25a)],[-0x93e+-0x1a54+0x1*0x27e6,'u8'],[-0x1560+-0xda9*0x1+0x275e,'u8'],[0x2380*0x1+-0x1*0x58f+-0x73*0x39,'u8'],[0xe4d+-0xe43+0x44d,'u8'],[-0x1ab4+0xef*0x25+0x34b*-0x1,_0x57da09(0x550)]]},_0x33c557={},_0x2893ac={};function _0x2a6ef4(_0x138eed,_0x21fbd9,_0x471368){var _0x1af3cf={'uFrbS':function(_0x3b27a2,_0x287b0e){return _0x3b27a2+_0x287b0e;},'VguPd':'auto','LKwFl':function(_0x45de04,_0x526ae9){return _0x45de04===_0x526ae9;}};return function(_0x463d3f){var _0x373d71=_0xbe61,_0x5f2cf5={'cymBm':function(_0x451b91,_0xdab7ba){return _0x451b91(_0xdab7ba);}};try{var _0x4c3854=_0x463d3f&&_0x463d3f[_0x373d71(0x285)]?_0x463d3f[_0x373d71(0x285)]():-0x452+-0x17*-0x5b+0x15*-0x2f;if(!_0x4c3854)return;var _0x1a0529=_0x2893ac[_0x138eed]||(_0x2893ac[_0x138eed]={}),_0x3b1386=_0x1a0529[_0x4c3854];if(!_0x3b1386)_0x3b1386=_0x1a0529[_0x4c3854]={'ptr':_0x4c3854,'firstSeen':Date['now'](),'hits':0x0};_0x3b1386[_0x373d71(0x4df)]++;if(_0x471368){if(!_0x33c557[_0x4c3854])_0x33c557[_0x4c3854]={'ptr':_0x4c3854,'kind':_0x138eed,'firstSeen':Date['now'](),'hits':0x0};_0x33c557[_0x4c3854][_0x373d71(0x4df)]++;}else{var _0xfb0e9d=_0x384a49[_0x138eed];if(!_0xfb0e9d||_0xfb0e9d['ptr']!==_0x4c3854){if('UplOz'===_0x373d71(0x3ca))_0x5f2cf5[_0x373d71(0x89f)](_0x2aea69,_0x56f05b(_0x32d1b8[_0x373d71(0x5f5)])||_0x5b9709),_0x1bcc4c();else{_0x384a49[_0x138eed]={'ptr':_0x4c3854,'firstSeen':Date[_0x373d71(0x858)](),'hits':0x0,'replaced':!!_0xfb0e9d};try{var _0x4b0a26=_0x1cdd40[_0x373d71(0xde4)+'r'](function(_0x4f41da){return _0x4f41da['type']===_0x138eed;})[-0x9c3+0x65*0x2b+-0x734];_0x170097={'type':_0x138eed,'atMs':_0x2e21ac['aWPeF'](Date[_0x373d71(0x858)](),_0x3de6c1),'originalFunc':!!(_0x4b0a26&&_0x4b0a26['hook']&&typeof _0x4b0a26[_0x373d71(0xa7a)][_0x373d71(0x825)+_0x373d71(0xa86)+'nc']===_0x2e21ac[_0x373d71(0xc13)]),'resolveGameAtFire':!!_0x242d96(),'gameSourceAtFire':_0x11deda['sourc'+'e']};}catch(_0x1547e6){}}}}if(_0x2e21ac[_0x373d71(0x764)](_0x138eed,_0x2e21ac['EJcfe'])&&_0x43d8b1['on']){if(_0x2e21ac[_0x373d71(0x4ec)]==='EgIxV'){var _0x5a74cb=_0x4084ae[_0x373d71(0xadc)];if(!_0x5a74cb||!_0x5a74cb[_0x373d71(0x21d)])return;_0xcda67e[_0x373d71(0x218)]?(_0x5a74cb['style']['left']=_0x1af3cf[_0x373d71(0x493)](_0x4cd6c3[_0x373d71(0x218)]['x'],'px'),_0x5a74cb[_0x373d71(0x21d)][_0x373d71(0x4cf)]=_0x242a4e['pos']['y']+'px',_0x5a74cb[_0x373d71(0x21d)]['right']=_0x1af3cf[_0x373d71(0xc01)],_0x5a74cb[_0x373d71(0x21d)]['botto'+'m']=_0x373d71(0x6ae)):(_0x5a74cb[_0x373d71(0x21d)]['left']=_0x373d71(0x6ae),_0x5a74cb[_0x373d71(0x21d)][_0x373d71(0x4cf)]=_0x1af3cf['VguPd'],_0x5a74cb['style']['right']='24px',_0x5a74cb[_0x373d71(0x21d)]['botto'+'m']='24px');}else try{_0x4b9b51(_0x4c3854);}catch(_0x5f2828){}}if(!_0x21fbd9){var _0x4b0a26=_0x1cdd40[_0x373d71(0xde4)+'r'](function(_0x17c0c1){var _0x13d0c3=_0x373d71;return _0x1af3cf['LKwFl'](_0x17c0c1[_0x13d0c3(0xaeb)],_0x138eed);})[-0x17*0x179+-0x1*0x270a+0x5*0xe95];if(_0x4b0a26&&_0x4b0a26['hook'])try{_0x2e21ac[_0x373d71(0xa21)](_0x2e21ac['KxlML'],'WTfKU')?_0x3acb86():_0x4b0a26['hook']['enabl'+'ed']=![];}catch(_0xdf8708){}}}catch(_0x2927a1){}};}function _0x1d43df(){var _0x5bec91=_0x57da09,_0x3b55e4={'pWWPj':function(_0x29e744,_0x59d433){var _0x3b301f=_0xbe61;return _0x2e21ac[_0x3b301f(0x670)](_0x29e744,_0x59d433);},'hnVfz':function(_0x344164,_0x4ded9e){var _0x356bd0=_0xbe61;return _0x2e21ac[_0x356bd0(0xbbb)](_0x344164,_0x4ded9e);},'vjlsW':_0x2e21ac['amzOI']};if(_0x1cdd40['lengt'+'h'])return!![];if(!window[_0x5bec91(0xe0a)+_0x5bec91(0x8fd)+_0x5bec91(0xa7e)]||!window[_0x5bec91(0xe0a)+_0x5bec91(0x8fd)+_0x5bec91(0xa7e)][_0x5bec91(0xa36)+'me'])return![];var _0x44b6d6=window[_0x5bec91(0xe0a)+'WebMo'+_0x5bec91(0xa7e)][_0x5bec91(0xa36)+'me'];if(!_0x44b6d6['plugi'+'ns']||!_0x44b6d6['plugi'+'ns']['lengt'+'h'])return![];_0x3408e4=window[_0x5bec91(0xe0a)+_0x5bec91(0x8fd)+_0x5bec91(0xa7e)]['Value'+'Wrapp'+'er'],_0x202852=_0x202852||_0x44b6d6[_0x5bec91(0x7d0)+'ns'][_0x2e21ac[_0x5bec91(0x5f9)](_0x44b6d6['plugi'+'ns']['lengt'+'h'],-0x2e4+0x425+0x1*-0x140)];if(!_0x202852||typeof _0x202852[_0x5bec91(0x6e6)+_0x5bec91(0x9b9)]!==_0x2e21ac['QEwpW'])return![];for(var _0x53095a=0x1*-0x12e5+-0x1de*-0x5+-0x98f*-0x1;_0x53095a<_0x10ea0f[_0x5bec91(0x875)+'h'];_0x53095a++){var _0x5989fc=_0x10ea0f[_0x53095a];try{if(_0x2e21ac[_0x5bec91(0xc66)](_0x5bec91(0x504),_0x2e21ac[_0x5bec91(0xa4c)])){var _0x2522e1=_0x5b541e[_0x1aa54c],_0x2fa01e=_0x5c9f9d[_0x2e669a];if(_0x2522e1!==_0x2fa01e)_0x560da8[_0x5bec91(0xc27)](_0x3b55e4['pWWPj'](_0x3b55e4[_0x5bec91(0x22e)](_0x447633+':\x20',_0x2522e1)+_0x3b55e4[_0x5bec91(0xc32)],_0x2fa01e));}else{var _0x1f8fba=_0x202852['hookP'+'refix']({'typeName':_0x5989fc['type'],'methodName':_0x5bec91(0xe4f)+'e','params':[_0x5bec91(0x25a),_0x2e21ac[_0x5bec91(0x859)]],'returnType':undefined},_0x2a6ef4(_0x5989fc[_0x5bec91(0xaeb)],_0x5989fc[_0x5bec91(0x34f)],_0x5989fc[_0x5bec91(0x34e)]));_0x1cdd40['push']({'type':_0x5989fc[_0x5bec91(0xaeb)],'hook':_0x1f8fba,'keep':_0x5989fc[_0x5bec91(0x34f)]});}}catch(_0x3b6c12){_0x2d2622[_0x5bec91(0xc27)](_0x5989fc[_0x5bec91(0xaeb)]+':\x20'+String(_0x3b6c12&&_0x3b6c12['messa'+'ge']||_0x3b6c12)[_0x5bec91(0xd92)](0x551*0x5+-0x25c2+0xb2d,0x24d9+-0x13e+-0x255*0xf));}}return _0x1cdd40['lengt'+'h']>0x9*0x175+-0x1*0x25df+0x18c2;}function _0x17011b(_0x26a3f9,_0x31f093){var _0x41225a=_0x57da09;return _0x2e21ac[_0x41225a(0xde1)](_0x41225a(0xdcb),'wGLpY')?(_0x2b2a04[_0x41225a(0xb71)+'d']++,_0x2979e1[_0x41225a(0x57b)+_0x41225a(0xbc6)]=_0x50c77f[_0x41225a(0x57b)+_0x41225a(0xbc6)]||_0x31b0ed(_0x1c34e8&&_0x5e3c97[_0x41225a(0x2e3)+'ge']||_0x19dd53)['slice'](-0x3*-0x996+0x2672+0xb*-0x61c,-0x1*0xf51+-0x1*0xe57+0x1e20),_0x5b2967):function(){var _0x12da3b=_0x41225a;try{var _0x269f0d=_0x4ebfc2[_0x31f093]||(_0x4ebfc2[_0x31f093]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x552b81=arguments;if(_0x2e21ac[_0x12da3b(0x3af)](_0x26a3f9,_0x2e21ac[_0x12da3b(0x4ba)])){var _0xa1e9b9=_0x552b81[-0x1*0x2608+-0x11cc+0x37d4];if(_0xa1e9b9&&_0x2e21ac[_0x12da3b(0xbc7)](typeof _0xa1e9b9['val'],'funct'+_0x12da3b(0xb69))){var _0x27fd7a=_0xa1e9b9[_0x12da3b(0x285)]();if(typeof _0x27fd7a==='numbe'+'r'&&isFinite(_0x27fd7a)){if(_0x2e21ac[_0x12da3b(0x95c)](_0x269f0d['lo'],null)||_0x2e21ac['ZWFEF'](_0x27fd7a,_0x269f0d['lo']))_0x269f0d['lo']=_0x27fd7a;if(_0x2e21ac[_0x12da3b(0x4c3)](_0x269f0d['hi'],null)||_0x2e21ac[_0x12da3b(0xb14)](_0x27fd7a,_0x269f0d['hi']))_0x269f0d['hi']=_0x27fd7a;if(_0x2e21ac[_0x12da3b(0xbff)](_0x269f0d['last'],null)){var _0x508911=Math['abs'](_0x27fd7a-_0x269f0d['last']);if(_0x508911>_0x269f0d['jump'])_0x269f0d['jump']=_0x508911;}_0x269f0d['last']=_0x27fd7a;}_0x269f0d['hits']++;if(_0x552b81[-0x5b9+-0x1df2*-0x1+0x9b*-0x28]&&_0x2e21ac['ymgTm'](typeof _0x552b81[-0x1d*0x31+-0x2285+0x2813][_0x12da3b(0x285)],_0x2e21ac['QEwpW'])){var _0x12a87a=_0x552b81[0x7b5+-0x63b+-0x1*0x179]['val']();if(_0x12a87a)_0xada6b2=_0x12a87a;}}}else{if(_0x2e21ac['gjDqC']!==_0x12da3b(0x842))_0xe9573[_0x12da3b(0x21a)+'onten'+'t']=_0x490ab9(_0x3e440c[_0x12da3b(0x6f7)][_0x12da3b(0xdbd)+'r'])['toFix'+'ed'](0x1*-0x109b+0x213e+-0x851*0x2)+'x';else{_0x552b81[-0x1*-0x13c8+0x1*0x56b+-0x1932]&&typeof _0x552b81[-0x5*0xf1+0x3*0x389+0x1*-0x5e5][_0x12da3b(0x285)]==='funct'+_0x12da3b(0xb69)&&(_0x269f0d['setLa'+'st']=_0x552b81[0x18aa+-0x9a9+0x10*-0xf0]['val'](),_0x269f0d['setHi'+'ts']++);_0x552b81[0x952+-0x203f*0x1+0x135*0x13]&&_0x2e21ac['qnuCA'](typeof _0x552b81[-0x1*-0x368+0xa62+-0x372*0x4][_0x12da3b(0x285)],_0x12da3b(0x827)+_0x12da3b(0xb69))&&(_0x269f0d['setB']=_0x552b81[0x1e9f+-0xfb2+-0xeeb][_0x12da3b(0x285)](),_0x269f0d['pairH'+'its']++);if(_0x552b81[0x157a*0x1+0x9a4+-0x1f1e]&&_0x2e21ac['MrXYA'](typeof _0x552b81[-0xe*-0x22d+0x5*-0x296+-0x1188]['val'],'funct'+_0x12da3b(0xb69))){var _0x3d85c4=_0x552b81[0x5*-0x436+-0x17f3*0x1+0x2d01][_0x12da3b(0x285)]();if(_0x3d85c4)_0xada6b2=_0x3d85c4;}}}}catch(_0x241f39){}};}function _0x22d331(){var _0x3cd51a=_0x57da09,_0x4481dd={'HvgwI':function(_0x139028,_0x4a0335){return _0x139028<_0x4a0335;},'LZIwr':_0x2e21ac[_0x3cd51a(0x6c8)],'icbZp':_0x3cd51a(0x93c)+_0x3cd51a(0xa37),'YUZip':_0x3cd51a(0x781)+'a-sw-'+_0x3cd51a(0x6d3)+'s','KjNtP':_0x3cd51a(0xadf)+_0x3cd51a(0x69b)+_0x3cd51a(0x907)+'ll:in'+_0x3cd51a(0xd32)+'}','Jcnrg':_0x3cd51a(0xda1)};if(_0x562ee0)return!![];if(!_0x202852||typeof _0x202852[_0x3cd51a(0x6e6)+_0x3cd51a(0x226)+'x']!==_0x2e21ac[_0x3cd51a(0xc13)])return![];var _0x31258f=_0x50452b[_0x3cd51a(0x749)+'Look']||[];for(var _0x102f2a=0x59*0x53+-0x7*0xe9+-0x1*0x167c;_0x102f2a<_0x31258f['lengt'+'h'];_0x102f2a++){var _0x55c553=_0x31258f[_0x102f2a];try{if(_0x55c553[_0x3cd51a(0x8eb)]===_0x3cd51a(0x23d))_0x202852[_0x3cd51a(0x6e6)+_0x3cd51a(0x226)+'x']({'typeName':_0x3cd51a(0x749)+'Look','methodName':_0x55c553[_0x3cd51a(0xa9c)],'params':_0x55c553[_0x3cd51a(0x507)+_0x3cd51a(0x989)],'returnType':_0x55c553['wasmR'+'et']},_0x17011b(_0x2e21ac[_0x3cd51a(0x4ba)],_0x55c553[_0x3cd51a(0xa9c)]));else{if(_0x55c553[_0x3cd51a(0x8eb)]===_0x3cd51a(0x6d4)&&_0x2e21ac['ysHHK'](_0x55c553[_0x3cd51a(0xb5c)+'s']['lengt'+'h'],0x1d73+-0x112b+0xc47*-0x1)&&_0x2e21ac[_0x3cd51a(0xd07)](_0x55c553['param'+'s'][0x1d59+0x704+-0xc1f*0x3],_0x2e21ac[_0x3cd51a(0xaae)])){if('goCed'!=='Hhoky')_0x202852['hookP'+_0x3cd51a(0x9b9)]({'typeName':'Mouse'+_0x3cd51a(0xcf9),'methodName':_0x55c553['name'],'params':_0x55c553[_0x3cd51a(0x507)+_0x3cd51a(0x989)],'returnType':undefined},_0x17011b(_0x3cd51a(0xbd1),_0x55c553[_0x3cd51a(0xa9c)]));else for(var _0x13669b=-0x26e1+0x19ec+0xcf5;_0x4481dd[_0x3cd51a(0x60d)](_0x13669b,_0x3ba59a['lengt'+'h']);_0x13669b++){var _0x475c0a=_0x4934ff(_0x70c455+_0x593462(_0xa659eb[_0x13669b][0xfb3*0x1+0x26e0+-0x1*0x3693],-0x791+0x87*0x1f+0xc*-0xba),_0x4481dd[_0x3cd51a(0xc89)]);if(_0x475c0a)_0x5cfd7a[_0x3cd51a(0xa7f)][_0x4ffe72[_0x13669b][0x26b+0x1*-0x1ce7+0x1a7d]]='0x'+(_0x475c0a>>>0x232b+0x181b+-0x3b46)['toStr'+_0x3cd51a(0x710)](0x1e2a+0x156e+0x44*-0xc2);}}}}catch(_0x480f87){if(_0x2e21ac['gLltB']!==_0x3cd51a(0x528))_0x7ae708['push'](String(_0x480f87&&_0x480f87[_0x3cd51a(0x2e3)+'ge']||_0x480f87)[_0x3cd51a(0xd92)](0x4f3+-0x13c4+0xed1,0xb*-0x56+-0x196d+0x1d97));else{var _0x52f5cb=_0x4481dd[_0x3cd51a(0x6ea)]['split']('|'),_0xec71c4=-0x1c0a+-0x757*-0x4+-0x152;while(!![]){switch(_0x52f5cb[_0xec71c4++]){case'0':if(!_0x2740c6[_0x3cd51a(0xa38)+_0x3cd51a(0x6df)+'ById'](_0x3cd51a(0x781)+_0x3cd51a(0x5d1)+'v2-cs'+'s')){var _0x447bc1=_0x1f6de4['creat'+'eElem'+_0x3cd51a(0xbe3)]('style');_0x447bc1['id']=_0x4481dd['YUZip'],_0x447bc1['textC'+_0x3cd51a(0x1f5)+'t']=_0x4481dd[_0x3cd51a(0x9d9)],(_0x4284db[_0x3cd51a(0x9d8)]||_0x26994c[_0x3cd51a(0xcc6)+'entEl'+'ement'])[_0x3cd51a(0xac2)+_0x3cd51a(0xd84)+'d'](_0x447bc1);}continue;case'1':_0x5a0386=_0x4e6a64[_0x3cd51a(0x843)+_0x3cd51a(0x2b5)+_0x3cd51a(0xbe3)](_0x4481dd[_0x3cd51a(0x4e9)]);continue;case'2':return _0x48ca84;case'3':_0x5ac36e['id']=_0x3cd51a(0x781)+_0x3cd51a(0x5d1)+'v2';continue;case'4':_0x58fcfc['body']['appen'+_0x3cd51a(0xd84)+'d'](_0x26d9a9);continue;}break;}}}}return _0x562ee0=!![],!![];}function _0x59c42f(){var _0xd1f32e=_0x57da09,_0x4512b8={'XZGdq':function(_0x10d023,_0x5790ad){return _0x10d023(_0x5790ad);},'wvjHU':_0x2e21ac['MAVnE'],'CYCyI':function(_0x347fed,_0x27888c){return _0x347fed+_0x27888c;},'WXZbE':_0x2e21ac['jbqXv'],'pYmsF':_0xd1f32e(0x25a),'YcBml':'f32','ELGcN':function(_0x5f3873,_0x4f2847,_0x3e5f9f){return _0x5f3873(_0x4f2847,_0x3e5f9f);},'hVkgc':function(_0x1cc24c,_0x125d8a){return _0x1cc24c===_0x125d8a;},'WJpnT':_0xd1f32e(0x633),'ZdpkR':function(_0x34c5e4,_0x3fd3ec){return _0x2e21ac['OQonb'](_0x34c5e4,_0x3fd3ec);},'tOHyH':_0x2e21ac['JBaph']};if(_0x2e21ac[_0xd1f32e(0xc07)]==='AzEvU'){var _0x1576df=_0x13744f();if(!_0x1576df)return _0x4497b4;if(_0x1576df['datas'+'et']['api'])return _0x1576df[_0xd1f32e(0xaf1)];try{return _0x4512b8['XZGdq'](_0x342b1b,_0x1576df);}catch(_0xd9632c){return _0x1576df['datas'+'et'][_0xd1f32e(0xaf1)]='1',_0x1576df[_0xd1f32e(0xaf1)]=_0x5ead6f,_0x2905b9[_0xd1f32e(0x80d)](_0x4512b8[_0xd1f32e(0x9e6)],_0x4512b8['CYCyI'](_0x4512b8['WXZbE'],_0x5d30f5),_0xd9632c),_0x4e2afd;}}else{var _0x37d8ae=-0x175+0xfe5+-0xc*0x134,_0x3b4bc2=0xab0+-0x2*-0x1181+0x16d9*-0x2,_0x235ccc=0x2349+-0x1*-0x2512+-0x485b*0x1,_0xef6f1d=-0x22f*-0xc+-0x133*-0x1f+-0x3f61,_0x2153d8=0x28*0x8+0x2505+-0x2645;try{var _0x5c5b7b=window['Unity'+_0xd1f32e(0x8fd)+'dkit']&&window[_0xd1f32e(0xe0a)+'WebMo'+_0xd1f32e(0xa7e)][_0xd1f32e(0xa36)+'me'],_0x1ba108=_0x202852||_0x5c5b7b&&_0x5c5b7b['plugi'+'ns']&&_0x5c5b7b[_0xd1f32e(0x7d0)+'ns'][_0x5c5b7b[_0xd1f32e(0x7d0)+'ns']['lengt'+'h']-(0x130d*0x1+-0x792+0x71*-0x1a)];if(_0x1ba108&&_0x1ba108[_0xd1f32e(0x655)]){if(_0x2e21ac[_0xd1f32e(0x9f2)]===_0x2e21ac[_0xd1f32e(0xb95)]){var _0x512e3d=_0x33f393[_0x2af42c];if(!_0x512e3d)return null;var _0x38dd54=_0x58bc6c(_0x2db49a+_0x4fef41+_0x512e3d[_0xd1f32e(0xb6b)],'u8'),_0x4a926a=_0x71d3bf(_0x4512b8['CYCyI'](_0x16c956,_0x3bc18d)+_0x512e3d[_0xd1f32e(0xc73)+'n'],_0x4512b8['pYmsF']),_0x747ebc=_0x57d800(_0x26ecbe+_0x434bb7+_0x512e3d['inite'+'d'],'u8'),_0x28c522=_0x4ab361(_0x5d3a27+_0x14df4f+_0x512e3d['fake'],_0x32f1d1===_0xd1f32e(0x633)?_0x4512b8['YcBml']:_0x20f594==='obfI'?'i32':'u8'),_0x19187b=_0x4512b8['ELGcN'](_0x3638aa,_0x5655a1+_0x2c268d+_0x512e3d[_0xd1f32e(0x6fb)+'e'],'u8');if(_0x38dd54===_0x1b31cb||_0x4a926a===_0x56bd5e||_0x28c522===_0x455b9f||_0x19187b===_0x9102d2)return null;_0x38dd54&=0x24b8+-0x20af*0x1+0x185*-0x2,_0x4a926a|=0x1fc4+-0x157d+0x36d*-0x3,_0x747ebc=(_0x747ebc||0x1*-0x8f3+0x133*-0x2+0xb59)&-0x5a5*-0x5+0x8f2+-0x252a,_0x19187b&=0x25b5+0x55d*0x1+-0x4c9*0x9;var _0x50c8e9;if(_0x4512b8[_0xd1f32e(0x833)](_0x32fd10,_0x4512b8[_0xd1f32e(0x1ea)]))_0x50c8e9=_0x4fc005(_0x4512b8[_0xd1f32e(0xbdf)](_0x4a926a,_0x38dd54));else{if(_0x1344d4===_0xd1f32e(0xc15))_0x50c8e9=_0x4a926a^_0x38dd54|0x195+-0x549+0x3b4;else _0x50c8e9=((_0x4a926a^_0x38dd54)&0x1665+0x1c54+-0x31ba)!==0x13de+-0x2092+0xcb4?0x3*0xc7d+0xde3*0x2+-0x413c:-0x50b*0x3+-0xb1*0x31+-0x99*-0x52;}return{'real':_0x50c8e9,'fake':_0x28c522,'act':_0x19187b,'init':_0x747ebc,'key':_0x38dd54,'hidden':_0x4a926a};}else for(var _0x3885f4=-0x2539+-0xe46+0x337f;_0x3885f4<_0x1ba108[_0xd1f32e(0x655)][_0xd1f32e(0x875)+'h'];_0x3885f4++){if(_0x2e21ac['EdQZA'](_0xd1f32e(0x7a2),_0x2e21ac['vsplE'])){var _0x2a8f29=_0x1ba108[_0xd1f32e(0x655)][_0x3885f4];if(!_0x2a8f29||_0x2a8f29['typeN'+_0xd1f32e(0xc7a)]!==_0x2e21ac[_0xd1f32e(0x9f7)])continue;_0x37d8ae++;if(_0x2a8f29[_0xd1f32e(0x2af)+_0xd1f32e(0x90a)]!==undefined)_0x3b4bc2++;if(_0x2a8f29[_0xd1f32e(0x485)+'ed'])_0x235ccc++;}else{_0x442189[_0xd1f32e(0x21a)+'onten'+'t']='v'+(_0x7e999[_0xd1f32e(0x899)+'on']||'?');var _0x5e7ffd=_0x179085,_0x38d42f=_0x1fe8ba['versi'+'on']||'';_0xbbb88b['style']['color']=_0x4512b8[_0xd1f32e(0x833)](_0x38d42f,_0x5e7ffd)?_0x5681a3:_0xd1f32e(0xc68)+'74',_0x256803['style'][_0xd1f32e(0x30b)+_0xd1f32e(0x3bd)+'r']=_0x38d42f===_0x5e7ffd?'rgba('+'255,1'+'43,17'+_0xd1f32e(0x743)+')':_0x4512b8['tOHyH'];}}}}catch(_0xd837b){}for(var _0x338fbc in _0x4ebfc2){var _0x498b29=_0x4ebfc2[_0x338fbc];_0xef6f1d+=_0x498b29[_0xd1f32e(0x4df)]||-0x22d*-0x6+-0x7*-0x284+0x5*-0x622,_0x2153d8+=_0x2e21ac['RXMlN'](_0x498b29[_0xd1f32e(0x2e0)+'ts']||-0x2*-0xa9a+-0x26b0+0x117c,_0x498b29[_0xd1f32e(0x240)+'its']||-0xa1*0x12+-0x14e*0x8+-0x45a*-0x5);}return{'registered':_0x562ee0,'total':_0x37d8ae,'resolved':_0x3b4bc2,'applied':_0x235ccc,'getterHits':_0xef6f1d,'setterHits':_0x2153d8,'distinct':Object[_0xd1f32e(0x82e)](_0x4ebfc2)[_0xd1f32e(0x875)+'h'],'errorCount':_0x7ae708[_0xd1f32e(0x875)+'h'],'errors':_0x7ae708[_0xd1f32e(0xd92)](0x1c5b+0x10ed*-0x1+-0xb6e,-0x2632+0x103a+0x15fc)};}}function _0x2b23f1(){var _0x43428a=_0x57da09,_0x2cae20=null,_0x143a14=-0x254e+-0x2123+-0x177b*-0x3;for(var _0xd13bcd in _0x4ebfc2){var _0x4ff9a5=_0x4ebfc2[_0xd13bcd];_0x4ff9a5[_0x43428a(0x240)+'its']&&_0x2e21ac['YNLOf'](_0x4ff9a5['pairH'+'its'],_0x143a14)&&typeof _0x4ff9a5['setLa'+'st']==='numbe'+'r'&&typeof _0x4ff9a5['setB']===_0x2e21ac[_0x43428a(0xae3)]&&_0x2e21ac['jMWmC'](isFinite,_0x4ff9a5[_0x43428a(0x9ce)+'st'])&&isFinite(_0x4ff9a5[_0x43428a(0x6c2)])&&(_0x2cae20={'rawA':_0x4ff9a5[_0x43428a(0x9ce)+'st'],'rawB':_0x4ff9a5[_0x43428a(0x6c2)],'hits':_0x4ff9a5['pairH'+'its'],'name':_0xd13bcd},_0x143a14=_0x4ff9a5[_0x43428a(0x240)+_0x43428a(0xb8b)]);}if(!_0x2cae20)return null;var _0x2ebc59=_0x2e21ac['ibwoM'](_0x2cae20[_0x43428a(0xd98)],-(0x2085*-0x1+-0x1*0x17ad+0x388c))&&_0x2e21ac[_0x43428a(0xa51)](_0x2cae20[_0x43428a(0xd98)],-0x1c03*0x1+0x1819+-0x34*-0x15),_0x567a2f=_0x2cae20[_0x43428a(0x332)]>=-(-0x1*0x1b79+0x1766+-0x1*-0x46d)&&_0x2cae20['rawB']<=0x1*0x19ab+-0x14d4+-0x47d*0x1;if(_0x2ebc59!==_0x567a2f)_0x2cae20['pitch']=_0x2ebc59?_0x2cae20['rawA']:_0x2cae20[_0x43428a(0x332)],_0x2cae20[_0x43428a(0xb17)]=_0x2ebc59?_0x2cae20['rawB']:_0x2cae20['rawA'],_0x2cae20[_0x43428a(0xcd3)]=_0x2ebc59?_0x43428a(0x702):_0x2e21ac[_0x43428a(0xb47)];else{if('bEoOv'==='bEoOv')_0x2cae20[_0x43428a(0x8a3)]=null,_0x2cae20['yaw']=null,_0x2cae20['order']=_0x2e21ac[_0x43428a(0xc7c)](_0x43428a(0x2c9)+'olved'+'\x20('+(_0x2ebc59?_0x2e21ac['YfDZC']:_0x2e21ac[_0x43428a(0x7a4)]),')');else return _0x2e21ac['gfihd'](_0x591633[_0x43428a(0x3c3)](_0x278f51*(0x2*-0x565+0x1965+0x3*-0x4bd)),0x1f*0x17+0xb42+-0xda7);}return _0x2cae20;}function _0x16c308(){var _0x52846f=_0x57da09,_0x2d1c7d={'fVwTU':_0x2e21ac['OsNbb']};if(_0x2e21ac['LwzhP'](_0x52846f(0x5f8),_0x52846f(0xb2c)))_0x21a5ce['hookP'+'refix']({'typeName':_0x2d1c7d[_0x52846f(0x38e)],'methodName':_0xbdbc6f[_0x52846f(0xa9c)],'params':_0x52eed3[_0x52846f(0x507)+'arams'],'returnType':_0x1119f7},_0x223932(_0x52846f(0xbd1),_0x5c801c[_0x52846f(0xa9c)]));else{var _0x4469b5=-0x3c2+0xea*0x1d+0x10*-0x16c;for(var _0x476e51=-0x225*-0xd+0x232d*-0x1+0x74c*0x1;_0x476e51<_0x1cdd40['lengt'+'h'];_0x476e51++){if(_0x1cdd40[_0x476e51]['hook']&&_0x1cdd40[_0x476e51][_0x52846f(0xa7a)]['table'+'Index']!==undefined)_0x4469b5++;}return _0x4469b5;}}function _0x1057b3(){var _0x42800c=_0x57da09,_0x5b5529=-0x1*0x1b5c+0x2271*-0x1+0x1*0x3dcd;for(var _0x29641d=-0x177f+0xb08+-0x1*-0xc77;_0x2e21ac[_0x42800c(0x7ae)](_0x29641d,_0x1cdd40['lengt'+'h']);_0x29641d++){if(_0x1cdd40[_0x29641d]['hook']&&_0x1cdd40[_0x29641d][_0x42800c(0xa7a)][_0x42800c(0x485)+'ed'])_0x5b5529++;}return _0x5b5529;}var _0x3194fb=null,_0x727362=[],_0x52e046={},_0x170097=null;function _0x49cfef(_0x21b226){var _0x47d56e=_0x57da09;try{if(_0x2e21ac[_0x47d56e(0x54e)](!_0x3408e4,!_0x21b226))return null;var _0x577449=new _0x3408e4(_0x21b226)[_0x47d56e(0xd69)+_0x47d56e(0xd7d)+'me']();return _0x2e21ac['fHQps'](_0x577449,undefined)?null:_0x577449;}catch(_0x208b25){return null;}}function _0x1f676f(_0x5c7a66,_0x4c3b2e,_0x5d5f53){var _0x4eda31=_0x57da09,_0xf56f1c=(_0x4eda31(0x7cb)+'|4|6|'+_0x4eda31(0x25d))['split']('|'),_0x1a795b=0x1961+0x260c+-0x1*0x3f6d;while(!![]){switch(_0xf56f1c[_0x1a795b++]){case'0':if(_0x2e21ac['yceyB'](_0x4c3b2e,-0xd1*-0x1d+0x1178+-0x2925)||_0x2e21ac['LRfXz'](_0x4c3b2e,_0x2e21ac[_0x4eda31(0xa4b)](_0x5d5f53,0xd3*0xb+0x1*0xb15+-0x1422))>_0x21a7c3['byteL'+'ength'])return null;continue;case'1':_0x11deda['ok']+=_0x5d5f53;continue;case'2':var _0x21a7c3=_0x2e21ac[_0x4eda31(0x3f3)](_0x2a0a54);continue;case'3':if(!_0x21a7c3)return null;continue;case'4':var _0xb7f344=[];continue;case'5':return _0xb7f344;case'6':for(var _0x4cc2ff=0x17ea+-0x1987+0x19d*0x1;_0x2e21ac[_0x4eda31(0xa28)](_0x4cc2ff,_0x5d5f53);_0x4cc2ff++)_0xb7f344[_0x4eda31(0xc27)](_0x21a7c3[_0x4eda31(0xe09)+'oat32'](_0x2e21ac[_0x4eda31(0xc4a)](_0x5c7a66,_0x4c3b2e)+_0x4cc2ff*(0x12e1+0x1891+-0x2b6e),!![]));continue;}break;}}var _0xc8a30={'PhotonNetworkSync':[[_0x2e21ac[_0x57da09(0x4ef)],'photo'+_0x57da09(0x201)],[_0x57da09(0x98f),_0x57da09(0x2ad)+'h'],[_0x2e21ac[_0x57da09(0x7c8)],_0x57da09(0x8cb)+'form'],[_0x2e21ac[_0x57da09(0x96e)],_0x2e21ac['AvZrt']],[_0x57da09(0x981),_0x2e21ac[_0x57da09(0x524)]]],'NetworkPlayerAnimations':[[_0x2e21ac['lKsiB'],_0x2e21ac['aRkvE']],[_0x57da09(0x587),_0x57da09(0x352)]],'NPC_Cotroller':[[_0x2e21ac[_0x57da09(0xae9)],_0x57da09(0x7f1)+'le'],[_0x2e21ac[_0x57da09(0xba9)],_0x57da09(0xb83)+'tHeal'+'th'],[_0x2e21ac[_0x57da09(0xa0e)],_0x2e21ac[_0x57da09(0xe3c)]],['0xd4',_0x2e21ac[_0x57da09(0x4cc)]],[_0x57da09(0x91d),_0x2e21ac[_0x57da09(0xa15)]]],'EnemyBot':[[_0x57da09(0x323),'trans'+_0x57da09(0x699)]]},_0x1fb109={'PhotonNetworkSync':[[_0x2e21ac['ZrEtb'],_0x2e21ac[_0x57da09(0xa8d)]],[_0x57da09(0x94b),_0x2e21ac['lHJND']],[_0x57da09(0xca5),'id']]};function _0x226528(_0x418e28,_0xa955e9){var _0x1a39ab=_0x57da09;if(_0x2e21ac['TxsTZ'](_0x2e21ac['OmGjM'],_0x1a39ab(0xa2b)))_0x2228bb[_0x1a39ab(0xc27)](_0x2e21ac[_0x1a39ab(0x2a5)]),_0x1dd94c['push'](''),_0x24174a['push'](_0x1a39ab(0x746)+_0x1a39ab(0xcb9)+_0x1a39ab(0xcd2)+_0x1a39ab(0xcdc)+_0x1a39ab(0xa5d)+'e\x27s\x20o'+'wn\x20Up'+_0x1a39ab(0xc5d)+');\x20no'+_0x1a39ab(0x2dd)+_0x1a39ab(0xac3)+_0x1a39ab(0x700)+'means'),_0x254bb2[_0x1a39ab(0xc27)](_0x1a39ab(0x9ed)+'date\x20'+_0x1a39ab(0x578)+'et,\x20o'+_0x1a39ab(0xb4e)+'\x20sign'+'ature'+_0x1a39ab(0x769)+_0x1a39ab(0x4b2)+_0x1a39ab(0x26e));else{var _0x24be39=_0xe29e80[_0x418e28]||[],_0x5993e6={'kind':_0x418e28,'ptr':'0x'+_0xa955e9[_0x1a39ab(0x69e)+_0x1a39ab(0x710)](0x6*-0xee+0x1*-0x4d5+0xa79*0x1),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x36d1ce=-0x2c*-0xdc+-0x20eb+-0x4e5;_0x2e21ac[_0x1a39ab(0xc12)](_0x36d1ce,_0x24be39[_0x1a39ab(0x875)+'h']);_0x36d1ce++){if(_0x24be39[_0x36d1ce][0xf*-0x28c+-0x1e0a+0x443f]!=='v3')continue;var _0x54f939=_0x2e21ac[_0x1a39ab(0x740)](_0x1f676f,_0xa955e9,_0x24be39[_0x36d1ce][-0xecf+-0x1*-0x25bb+-0x16ec],-0x765*0x2+-0x12d5+0x21a2);if(!_0x54f939)continue;_0x5993e6['allVe'+'cs']['push']({'o':'0x'+_0x24be39[_0x36d1ce][0x89*-0x1+0x1*-0xa1f+0xaa8][_0x1a39ab(0x69e)+'ing'](-0x1129*-0x2+-0x83*0x29+-0xd47),'v':_0x54f939});}var _0x213467=-0x15d6+0x175*-0x17+-0x3*-0x1273,_0x4f6fd4=_0x2e21ac[_0x1a39ab(0xc77)](_0x418e28,'@')+_0xa955e9,_0x4247b4=_0x1e2253(_0x5993e6['allVe'+'cs'],_0x2e21ac[_0x1a39ab(0x65c)](_0x188d23),_0x4de106[_0x4f6fd4]);_0x4de106[_0x4f6fd4]=_0x4247b4['posAt']?{'o':_0x4247b4[_0x1a39ab(0xad7)]}:null,_0x5993e6[_0x1a39ab(0x218)]=_0x4247b4['pos'],_0x5993e6[_0x1a39ab(0xad7)]=_0x4247b4[_0x1a39ab(0xad7)],_0x5993e6[_0x1a39ab(0x6d9)]=_0x4247b4['held'],_0x5993e6[_0x1a39ab(0x709)+_0x1a39ab(0x9d1)]=_0x4247b4[_0x1a39ab(0x709)+'dates'],_0x5993e6[_0x1a39ab(0x559)+'er']=_0x4247b4['clust'+'er'],_0x5993e6[_0x1a39ab(0x44d)]=_0x4247b4[_0x1a39ab(0x44d)],void _0x213467;var _0x33f4ce=_0xc8a30[_0x418e28],_0x27ec4e=_0x1fb109[_0x418e28];if(_0x27ec4e){_0x5993e6[_0x1a39ab(0x646)]={};for(var _0x3b68e9=-0x14bd*-0x1+-0x1*-0x1681+0x3*-0xe6a;_0x3b68e9<_0x27ec4e[_0x1a39ab(0x875)+'h'];_0x3b68e9++){var _0x1d0627=_0x2352d3(_0x2e21ac[_0x1a39ab(0xa8f)](_0xa955e9,parseInt(_0x27ec4e[_0x3b68e9][-0x128d*-0x1+0x17b*0xd+-0x12e6*0x2],-0xb*0x53+0x1679+-0x12d8)),_0x2e21ac['JeeQp']);if(_0x1d0627!==undefined)_0x5993e6[_0x1a39ab(0x646)][_0x27ec4e[_0x3b68e9][-0x23a1+-0x3c*0x4b+-0x3536*-0x1]]=_0x1d0627;}}if(_0x33f4ce)for(var _0x4eb3e9=0x775*-0x3+-0x22c1+0x10*0x392;_0x4eb3e9<_0x33f4ce['lengt'+'h'];_0x4eb3e9++){var _0x424086=_0x2e21ac[_0x1a39ab(0x59b)](_0x2352d3,_0x2e21ac[_0x1a39ab(0x48c)](_0xa955e9,_0x2e21ac[_0x1a39ab(0xba3)](parseInt,_0x33f4ce[_0x4eb3e9][0xc5+0xf*0x203+0xf79*-0x2],0x24f2*-0x1+-0x199e+-0x3ea0*-0x1)),_0x1a39ab(0x43e));if(_0x424086)_0x5993e6['refs'][_0x33f4ce[_0x4eb3e9][0x1*0xdf1+-0x736+-0x52*0x15]]='0x'+_0x2e21ac[_0x1a39ab(0xc0f)](_0x424086,0xb41+0x313*0x3+-0x147a)['toStr'+_0x1a39ab(0x710)](-0xfe0+0x2*0xacb+-0x2d3*0x2);}return _0x5993e6['scala'+'rs']=_0x24be39[_0x1a39ab(0xde4)+'r'](function(_0x8037ba){return _0x8037ba[0xb*0x1de+-0x1*-0x121d+-0x26a6]==='f32'||_0x8037ba[0xccd+-0x1a5b+0x27*0x59]===_0x2e21ac['JeeQp'];})['map'](function(_0x6284d8){var _0x4b3308=_0x1a39ab,_0xfa1e76={'xHDAV':function(_0x45686d,_0x3b32b4){return _0x45686d!==_0x3b32b4;},'HJYVo':function(_0x4b587d){return _0x4b587d();},'oOJhw':_0x2e21ac[_0x4b3308(0xda0)]};if(_0x4b3308(0x66d)===_0x2e21ac['SEygd'])return{'o':'0x'+_0x6284d8[-0x1037+-0x127d*0x2+0x3531]['toStr'+'ing'](-0x1501+0x1*-0x6cf+0x1be0),'v':_0x2352d3(_0xa955e9+_0x6284d8[-0x7eb*-0x1+-0xa11+0x226],_0x6284d8[0x392*0x6+-0x2c*0xdb+0x1039])};else{var _0x35cdc9=_0x102692['data'];if(!_0x35cdc9||_0xfa1e76['xHDAV'](_0x35cdc9['__sak'+_0x4b3308(0x5a5)],_0x513c4a))return;try{if(_0x35cdc9['kind']==='hello'){_0xfa1e76['HJYVo'](_0x105915)['set']({'host':_0x35cdc9['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x35cdc9['kind']==='repor'+'t')_0xfa1e76['HJYVo'](_0x6ebb5c)['set'](_0x35cdc9[_0x4b3308(0x717)+'t']);}catch(_0x23207c){_0x4131b6[_0x4b3308(0x80d)](_0xfa1e76['oOJhw'],_0x4b3308(0x34d)+':'+_0x3265e3,_0x23207c);}}})['filte'+'r'](function(_0xb5387b){return _0xb5387b['v']!==undefined&&isFinite(_0xb5387b['v']);})['slice'](-0x1e*-0xf1+0xd2e+-0x296c,-0x23d*-0x3+0x131d+-0x19c8),_0x5993e6;}}function _0xd3def8(){var _0x360f78=_0x57da09,_0x257002={'ITCtj':function(_0x308fb2){return _0x308fb2();},'LwlpV':function(_0x51f965,_0x4643b3){return _0x51f965===_0x4643b3;}},_0x250ac7={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x1a84a1=_0x384a49[_0x360f78(0x844)+_0x360f78(0xb9f)+_0x360f78(0x38c)]&&_0x384a49[_0x360f78(0x844)+_0x360f78(0xb9f)+_0x360f78(0x38c)][_0x360f78(0xa33)]||0x1b28+0x25f6+-0x411e,_0x66738f=_0x2893ac['Photo'+_0x360f78(0x73f)+'orkSy'+'nc']||{},_0x875d2a=Object[_0x360f78(0x82e)](_0x66738f);for(var _0x3a7efc=0x11d9+-0x13*0x163+-0x22*-0x40;_0x3a7efc<_0x875d2a[_0x360f78(0x875)+'h']&&_0x3a7efc<-0xb*-0x1a1+0x548*0x4+-0x26f3;_0x3a7efc++){var _0x312e63=_0x66738f[_0x875d2a[_0x3a7efc]],_0x56552f=_0x2e21ac[_0x360f78(0xae7)](_0x226528,'Photo'+'nNetw'+'orkSy'+'nc',_0x312e63[_0x360f78(0xa33)]);_0x56552f['hits']=_0x312e63[_0x360f78(0x4df)],_0x56552f['first'+_0x360f78(0x9ac)+'s']=_0x312e63['first'+'Seen']-_0x3de6c1,_0x56552f[_0x360f78(0xde7)+'al']=!!_0x1a84a1&&_0x2e21ac['ysHHK'](_0x56552f[_0x360f78(0xa7f)][_0x360f78(0x4c5)],'0x'+_0x1a84a1['toStr'+_0x360f78(0x710)](-0x190c+0x800+-0x447*-0x4));if(_0x56552f[_0x360f78(0xa7f)]['healt'+'h']){var _0x419851=_0x2e21ac[_0x360f78(0x59b)](parseInt,_0x56552f[_0x360f78(0xa7f)][_0x360f78(0x2ad)+'h'],-0x266c+-0x151*-0x13+0xd79);_0x56552f['healt'+'h']=_0x4daa31(_0x419851,_0x2e21ac['hcaUl'],'obfI');}_0x250ac7[_0x360f78(0xe07)+'rs']['push'](_0x56552f);}_0x250ac7['playe'+_0x360f78(0x437)+'t']=_0x875d2a[_0x360f78(0x875)+'h'];var _0x262ccf=_0x2893ac['NPC_C'+_0x360f78(0x785)+_0x360f78(0x38c)]||{},_0xf85db7=Object[_0x360f78(0x82e)](_0x262ccf);for(var _0x2b028b=-0x2*-0xd62+-0x1cd4+0x210;_0x2e21ac[_0x360f78(0x7ae)](_0x2b028b,_0xf85db7['lengt'+'h'])&&_0x2e21ac[_0x360f78(0xc12)](_0x2b028b,-0x13fd+-0x1*-0x1e13+0x1*-0x9fe);_0x2b028b++){var _0x5e3a0b=_0x2e21ac['FrYIT'][_0x360f78(0xb4c)]('|'),_0x26dedb=0x4c5+-0xc11*-0x2+-0x1ce7;while(!![]){switch(_0x5e3a0b[_0x26dedb++]){case'0':_0x50fa84[_0x360f78(0x4df)]=_0x262ccf[_0xf85db7[_0x2b028b]][_0x360f78(0x4df)];continue;case'1':var _0x50fa84=_0x2e21ac['suXkD'](_0x226528,_0x2e21ac[_0x360f78(0x921)],_0x262ccf[_0xf85db7[_0x2b028b]]['ptr']);continue;case'2':_0x50fa84['first'+_0x360f78(0x9ac)+'s']=_0x262ccf[_0xf85db7[_0x2b028b]]['first'+'Seen']-_0x3de6c1;continue;case'3':if(_0x50fa84['refs']['healt'+'h'])_0x50fa84['healt'+'h']=_0x4daa31(parseInt(_0x50fa84[_0x360f78(0xa7f)]['healt'+'h'],0x607*0x4+0x11b0+-0x29bc),'Healt'+_0x360f78(0x328)+'pt',_0x360f78(0xc15));continue;case'4':_0x250ac7['bots'][_0x360f78(0xc27)](_0x50fa84);continue;}break;}}_0x250ac7['botCo'+_0x360f78(0xc8d)]=_0xf85db7[_0x360f78(0x875)+'h'];var _0x4700b9=_0x2893ac[_0x360f78(0x844)+_0x360f78(0xb9f)+'ler']||{},_0x14ef8f=Object['keys'](_0x4700b9);for(var _0x401128=0x265*0xe+0x5*0x45f+0x1*-0x3761;_0x401128<_0x14ef8f[_0x360f78(0x875)+'h']&&_0x401128<-0x8ed+0x1be*-0xb+-0x1e1*-0xf;_0x401128++){var _0x42c439=_0x226528(_0x2e21ac[_0x360f78(0x4a3)],_0x4700b9[_0x14ef8f[_0x401128]]['ptr']);_0x42c439[_0x360f78(0x4df)]=_0x4700b9[_0x14ef8f[_0x401128]][_0x360f78(0x4df)],_0x42c439[_0x360f78(0xde7)+'al']=_0x4700b9[_0x14ef8f[_0x401128]][_0x360f78(0xa33)]===_0x1a84a1,_0x250ac7[_0x360f78(0xbf7)+_0x360f78(0xccd)+'s'][_0x360f78(0xc27)](_0x42c439);}_0x250ac7['contr'+'oller'+_0x360f78(0xaa6)]=_0x14ef8f['lengt'+'h'];var _0x5a3ee3=_0x250ac7[_0x360f78(0xe07)+'rs'][_0x360f78(0x28e)+'t'](_0x250ac7['bots']);for(var _0x4b1b07=0x2595+0xa99+0xe*-0x371;_0x2e21ac[_0x360f78(0x1fa)](_0x4b1b07,_0x5a3ee3['lengt'+'h']);_0x4b1b07++){if(_0x5a3ee3[_0x4b1b07][_0x360f78(0xde7)+'al'])continue;_0x250ac7[_0x360f78(0xbdd)+'es']['push'](_0x5a3ee3[_0x4b1b07]);}_0x250ac7['enemy'+'Count']=_0x250ac7['enemi'+'es'][_0x360f78(0x875)+'h'];var _0x1a47e2={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x511ae9={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x190564 in _0x384a49){var _0xab1e93=_0x384a49[_0x190564];if(!_0xab1e93||!_0xab1e93['ptr'])continue;if(!(_0x190564 in _0x1a47e2))continue;_0x250ac7['manag'+'ers'][_0x190564]='0x'+_0xab1e93['ptr'][_0x360f78(0x69e)+_0x360f78(0x710)](-0xff5+0x4*-0x54b+-0x1*-0x2531);var _0x385550=_0x2e21ac[_0x360f78(0x384)](_0x2352d3,_0x2e21ac[_0x360f78(0x5b9)](_0xab1e93[_0x360f78(0xa33)],_0x1a47e2[_0x190564]),_0x360f78(0x43e)),_0x34781b=_0x2352d3(_0xab1e93['ptr']+_0x511ae9[_0x190564],'u32');_0x385550&&_0x2e21ac[_0x360f78(0x4f8)](_0x250ac7[_0x360f78(0x986)+'a'],null)&&(_0x2e21ac[_0x360f78(0xaa9)](_0x360f78(0x620),_0x360f78(0x620))?(_0x250ac7['camer'+'a']='0x'+(_0x385550>>>-0x93b+0x173*0x9+-0x7a*0x8)['toStr'+'ing'](0x745*0x2+-0x6c*-0x47+-0x2*0x1637),_0x250ac7[_0x360f78(0x986)+_0x360f78(0x572)]=_0x190564):_0x27f202=_0x257002['ITCtj'](_0x19d18a));if(_0x34781b&&_0x250ac7['playe'+_0x360f78(0x882)]===null)_0x250ac7[_0x360f78(0xe07)+'rList']='0x'+_0x2e21ac[_0x360f78(0xc0f)](_0x34781b,0x14be+0x1094+-0x2552)[_0x360f78(0x69e)+'ing'](-0x253b+-0x1f*0x5f+0x30cc);}if(!_0x250ac7['playe'+_0x360f78(0x437)+'t']&&!_0x250ac7[_0x360f78(0xbac)+_0x360f78(0xc8d)]&&!_0x250ac7[_0x360f78(0x986)+'a'])_0x250ac7[_0x360f78(0xdeb)]=_0x2e21ac[_0x360f78(0xdd7)](_0x2e21ac[_0x360f78(0xc16)],_0x2e21ac[_0x360f78(0x6d6)]);else!_0x250ac7['enemy'+_0x360f78(0xaa6)]&&(_0x250ac7[_0x360f78(0xdeb)]=_0x2e21ac[_0x360f78(0x965)](_0x2e21ac[_0x360f78(0x51f)],_0x2e21ac[_0x360f78(0xbf8)]));try{if(_0x2e21ac['tLnaV']('krmwY',_0x2e21ac[_0x360f78(0x93d)])){var _0x7f697c=_0x4188b9[_0x227663][_0x360f78(0xb4a)]||[_0x161f2b[_0x31788b]['v'],-0x1d81+-0x221a+0x3f9b,-0xdb4+-0x179a+0x254e];return _0x7f697c['map'](function(_0x5087cb){var _0x174be2=_0x360f78;return _0x340cb0[_0x174be2(0x3c3)](_0x5087cb*(-0x175b+-0x14b*-0x1+0x1674))/(-0x1fb5+-0x1a87+-0xea8*-0x4);})['join']('\x20\x20');}else{var _0x531fd7=window[_0x360f78(0xe0a)+'WebMo'+_0x360f78(0xa7e)]&&window[_0x360f78(0xe0a)+'WebMo'+_0x360f78(0xa7e)][_0x360f78(0xa36)+'me'],_0x197510=_0x531fd7&&_0x531fd7[_0x360f78(0xd6d)+_0x360f78(0xc2a)+'smTyp'+'es']||[],_0x8b5ae0={};for(var _0x2fcc68=0xdc6+0x617*0x3+-0x200b*0x1;_0x2fcc68<_0x197510[_0x360f78(0x875)+'h']&&_0x2e21ac['pYBHs'](_0x2fcc68,0x177a+-0x45*-0x68+0x11f1*-0x2);_0x2fcc68++){if(_0x2e21ac[_0x360f78(0x733)](_0x2e21ac['RjvfV'],'pVbmJ')){var _0x18e039=_0x2e21ac[_0x360f78(0xe5d)](_0x2e21ac['Pwrca'](_0x197510[_0x2fcc68][_0x360f78(0xb5c)+'s']['join'](','),_0x2e21ac['amzOI']),_0x197510[_0x2fcc68][_0x360f78(0x2b2)+_0x360f78(0x906)]||_0x360f78(0x6d4));_0x8b5ae0[_0x18e039]=(_0x8b5ae0[_0x18e039]||0x119f+-0xd96+0x409*-0x1)+(0x57*0x1+-0x70+0x1a*0x1);}else{var _0x376612=_0x2cb3a2(_0x360f78(0x844)+_0x360f78(0xb9f)+'ler',_0x1a4716[_0x5df91e[_0x14617e]][_0x360f78(0xa33)]);_0x376612[_0x360f78(0x4df)]=_0x4b5d4d[_0xc4cd6e[_0x413db1]][_0x360f78(0x4df)],_0x376612[_0x360f78(0xde7)+'al']=_0x257002['LwlpV'](_0x3f8979[_0x14c383[_0x1c826e]]['ptr'],_0x4b6441),_0x2c0ba4['contr'+_0x360f78(0xccd)+'s'][_0x360f78(0xc27)](_0x376612);}}_0x250ac7['wasmT'+'ypes']=_0x8b5ae0;}}catch(_0x2c0d09){}return _0x250ac7;}function _0x4daa31(_0x418d65,_0x69dc49,_0x5dc4a){var _0x1c41f0=_0x57da09;try{var _0x58fb6f=_0xe29e80[_0x69dc49]||[];for(var _0x33dda5=-0x2c2+0x32*0x6b+-0x1224;_0x33dda5<_0x58fb6f[_0x1c41f0(0x875)+'h'];_0x33dda5++){if(_0x2e21ac[_0x1c41f0(0xa04)](_0x1c41f0(0x228),_0x2e21ac[_0x1c41f0(0xb58)])){var _0x48e8ff=_0x4412db();if(!_0x48e8ff)return null;return{'ptr':'0x'+_0x48e8ff['ptr']['toStr'+_0x1c41f0(0x710)](-0x502+0x260c+-0x20fa),'feet':_0x48e8ff[_0x1c41f0(0xc40)],'eye':_0x48e8ff['eye'],'posAt':_0x48e8ff[_0x1c41f0(0xad7)],'copies':_0x48e8ff['copie'+'s'],'cluster':_0x48e8ff[_0x1c41f0(0x559)+'er'],'eyeHeight':_0x43f937,'pitch':_0x48e8ff[_0x1c41f0(0x8a3)],'yaw':_0x48e8ff['yaw'],'reach':_0x48e8ff['reach']};}else{if(_0x58fb6f[_0x33dda5][0x1*-0xa84+0x7*-0x5+0xaa8]!==_0x5dc4a)continue;var _0x25fd1a=_0x58fb6f[_0x33dda5][-0x1*0x1b31+-0x1b98+0x36c9];if(_0x5dc4a[_0x1c41f0(0x75d)+'Of'](_0x2e21ac['rWOYr'])===-0x1768+0x9e1+0x1*0xd87){var _0x1bf9cc=(_0x1c41f0(0xdbe)+_0x1c41f0(0x64a)+_0x1c41f0(0x8b1))[_0x1c41f0(0xb4c)]('|'),_0x54da99=-0x1*-0x4fd+0x2*-0x24+-0x4b5;while(!![]){switch(_0x1bf9cc[_0x54da99++]){case'0':_0x460f06['k']=_0x5dc4a;continue;case'1':return _0x228be1['rows'][0x907*-0x3+0x1179+0x29*0x3c];case'2':var _0x228be1=_0x2e21ac[_0x1c41f0(0xbcc)](_0x445f4d,[_0x460f06]);continue;case'3':var _0x460f06=_0x43354b(_0x418d65,_0x25fd1a,_0x5dc4a);continue;case'4':_0x460f06['o']=_0x25fd1a;continue;case'5':if(!_0x460f06)return null;continue;case'6':if(!_0x228be1[_0x1c41f0(0x29d)]['lengt'+'h'])return null;continue;}break;}}var _0x3f2848=_0x2e21ac[_0x1c41f0(0x928)](_0x2352d3,_0x2e21ac['FPalX'](_0x418d65,_0x25fd1a),_0x5dc4a);if(_0x3f2848===undefined)return null;return{'o':'0x'+_0x25fd1a[_0x1c41f0(0x69e)+'ing'](-0xba1*-0x2+0xe90+-0x25c2),'v':_0x3f2848};}}}catch(_0x34eac8){}return null;}function _0x21db7e(){var _0x346bed=_0x57da09,_0x317db8={};_0x11deda['ok']=-0x1d0*-0x10+-0x21e3+0x1a1*0x3,_0x11deda['faile'+'d']=-0x1*-0x781+-0x178+-0x609,_0x11deda['lastE'+_0x346bed(0xbc6)]=null;var _0x23f943=Object['keys'](_0xe29e80);for(var _0x4c5462=0x33*0x77+-0x23ba+0x1*0xc05;_0x4c5462<_0x23f943[_0x346bed(0x875)+'h'];_0x4c5462++){var _0x1c1935=_0x23f943[_0x4c5462],_0x586ab5=_0x384a49[_0x1c1935];if(!_0x586ab5||!_0x586ab5[_0x346bed(0xa33)])continue;var _0x500564=_0xe29e80[_0x1c1935]||[],_0x312ee7=[];for(var _0x12b1e6=0x1a7a+-0x939*0x2+-0x808;_0x2e21ac['ZWFEF'](_0x12b1e6,_0x500564[_0x346bed(0x875)+'h']);_0x12b1e6++){var _0x2feaa1=_0x500564[_0x12b1e6][0x229e+0x27f*-0x6+-0x13a4],_0x2bdf3e=_0x500564[_0x12b1e6][-0x121a+-0x44a+0x1665];if(_0x2e21ac[_0x346bed(0x95c)](_0x2bdf3e['index'+'Of']('obf'),0x76a+-0x5*-0x421+-0x1c0f)){var _0x39ddc9=_0x43354b(_0x586ab5['ptr'],_0x2feaa1,_0x2bdf3e);if(!_0x39ddc9)continue;_0x39ddc9['o']=_0x2feaa1,_0x39ddc9['k']=_0x2bdf3e,_0x312ee7['push'](_0x39ddc9);}else{if(_0x2e21ac[_0x346bed(0xcf4)](_0x2e21ac['xiDml'],_0x346bed(0xd16))){var _0x44a1b9=_0x2352d3(_0x586ab5[_0x346bed(0xa33)]+_0x2feaa1,_0x2bdf3e);if(_0x44a1b9===undefined)continue;var _0x5c6d51={'o':_0x2feaa1,'k':_0x2bdf3e,'v':_0x44a1b9};if(_0x2bdf3e==='v2'||_0x2e21ac[_0x346bed(0x939)](_0x2bdf3e,'v3')||_0x2bdf3e==='v4'){if(_0x346bed(0x5a8)!==_0x346bed(0x5a8)){var _0x218f68=_0x53e7b6['getIt'+'em'](_0x44f68a);if(_0x218f68)_0xb9937f[_0x346bed(0x554)]=_0x106e19['min'](-0x112b+-0x1*0xa59+-0x382*-0x8,_0x551000[_0x346bed(0x417)](0x690*-0x2+-0x33*0xae+-0xe*-0x36c,_0x139fac(_0x218f68)||-0x2394+0xa55+0x1999));}else{var _0x1b10bf=_0x2e21ac[_0x346bed(0xaa9)](_0x2bdf3e,'v2')?0x6bd+0x2*-0xe03+0x4f*0x45:_0x2bdf3e==='v3'?0x12a4+-0x3*0x9ab+0x2*0x530:-0x8a1+-0xb0b*-0x3+-0x187c,_0x43bf33=_0x1f676f(_0x586ab5['ptr'],_0x2feaa1,_0x1b10bf);_0x43bf33&&(_0x5c6d51[_0x346bed(0xb4a)]=_0x43bf33,_0x5c6d51['v']=_0x43bf33[-0x2*-0x3ab+-0x1*-0x211a+-0x2870]);}}_0x312ee7[_0x346bed(0xc27)](_0x5c6d51);}else return _0x87a209[0x24d8+-0x16f*0x1b+-0x3*-0x9f]=_0x30e10c,_0x36cec4[-0x1*-0x263b+-0x1961*-0x1+-0x3f9c];}}if(_0x312ee7[_0x346bed(0x875)+'h']){var _0x1df7f2=_0x445f4d(_0x312ee7);_0x317db8[_0x1c1935]=_0x1df7f2[_0x346bed(0x29d)],_0x52e046[_0x1c1935]={'key':_0x1df7f2['key'],'sane':_0x1df7f2[_0x346bed(0xdb0)],'checked':_0x1df7f2['check'+'ed'],'keyConsistent':_0x1df7f2['keyCo'+_0x346bed(0x7bc)+_0x346bed(0xbe3)],'keySource':_0x1df7f2['keySo'+_0x346bed(0xc49)]};}}return _0x317db8;}function _0x445f4d(_0xa9fe5){var _0xc4bca5=_0x57da09,_0x32226c=-0x67*0x35+0x7fc+-0xd57*-0x1,_0x294044=-0xf*0xae+0x8c*-0x2b+0x21b6,_0x53cddc=null;for(var _0x27688a=0x3ad*-0x3+-0x1e41+0x1*0x2948;_0x27688a<_0xa9fe5['lengt'+'h'];_0x27688a++){var _0xb3d9c0=_0xa9fe5[_0x27688a];if(_0xb3d9c0['k'][_0xc4bca5(0x75d)+'Of']('obf')!==-0x7*0x2a8+-0x1129+0x23c1)continue;_0xb3d9c0['v']=_0x363d3e(_0xb3d9c0['k'],_0xb3d9c0[_0xc4bca5(0xc73)+'n'],_0xb3d9c0['keyAt'+_0xc4bca5(0x359)+'t0']),_0xb3d9c0[_0xc4bca5(0x829)+'ed']=_0xb3d9c0[_0xc4bca5(0x28f)+_0xc4bca5(0x359)+'t0'],_0xb3d9c0[_0xc4bca5(0x7f8)]=_0x2e21ac[_0xc4bca5(0x8b2)](_0x2e21ac[_0xc4bca5(0xded)](_0x2e21ac[_0xc4bca5(0x53b)](_0x2e21ac['CBGPg'](_0x2e21ac['OLKSv'](_0xc4bca5(0x724),_0xb3d9c0['hidde'+'n'])+_0x2e21ac[_0xc4bca5(0x327)],_0xb3d9c0[_0xc4bca5(0x8ce)]),_0xb3d9c0[_0xc4bca5(0xbe2)]?_0xc4bca5(0x35c)+'VE':''),'\x20k0=')+_0xb3d9c0[_0xc4bca5(0x28f)+'Offse'+'t0']+'\x20hex=',_0xb3d9c0[_0xc4bca5(0x853)]);if(_0x53cddc===null)_0x53cddc=_0xb3d9c0[_0xc4bca5(0x28f)+_0xc4bca5(0x359)+'t0'];_0x294044++;if(_0x2e21ac['VSKyQ'](_0x1f82f,_0xb3d9c0)){if(_0xc4bca5(0xd26)==='nMQjx'){if(!_0x3ff202)return;var _0x14bbba=_0x21092c[_0xc4bca5(0x241)+_0xc4bca5(0x2e7)+'h']||0xe*-0x45+0x18c1*-0x1+-0x1a1*-0x13,_0x318b82=_0x2aedb3['offse'+'tHeig'+'ht']||-0x1203+0x877*0x3+0x2e9*-0x2,_0x3aa175=(_0x394155[_0xc4bca5(0xc43)+'tX']||0x4f2+0xb*-0x47+0x1*-0x1e5)-_0x4d1b51,_0x281078=(_0x5d6a00[_0xc4bca5(0xc43)+'tY']||-0x19*0xe5+0x340+0x131d)-_0x168714;_0x3aa175=_0x533c06[_0xc4bca5(0x417)](-0x5*-0x411+0x210a+0x5*-0xaab,_0xe07f5b['min']((_0x4875ec['inner'+'Width']||-0x1cff+-0x1*-0x1b56+0x1a9)-_0x14bbba-(-0x174b+-0x11f2+0x2945),_0x3aa175)),_0x281078=_0x2d1fb3[_0xc4bca5(0x417)](-0x2185*0x1+-0x856+-0x29e3*-0x1,_0x3cfdfe[_0xc4bca5(0xae4)](_0x2e21ac[_0xc4bca5(0xbec)](_0x2e21ac[_0xc4bca5(0x42b)](_0x1af95c['inner'+'Heigh'+'t']||-0x1c9f+-0xa31+0x26d0,_0x318b82),-0xc8b+0x2040+-0x68f*0x3),_0x281078)),_0x3682a5[_0xc4bca5(0x21d)]['left']=_0x2e21ac['KuhTj'](_0x3aa175,'px'),_0x57a7a3['style'][_0xc4bca5(0x4cf)]=_0x281078+'px',_0x224cf7[_0xc4bca5(0x21d)][_0xc4bca5(0xcef)]=_0xc4bca5(0x6ae),_0x391933['style'][_0xc4bca5(0xda9)+'m']=_0x2e21ac['XnJWH'],_0x36ecec[_0xc4bca5(0x218)]={'x':_0x3aa175,'y':_0x281078};}else _0x32226c++,_0xb3d9c0[_0xc4bca5(0xdb0)]=!![];}else _0xb3d9c0[_0xc4bca5(0xdb0)]=![];delete _0xb3d9c0[_0xc4bca5(0x535)];}return{'rows':_0xa9fe5,'key':_0x53cddc,'sane':_0x32226c,'checked':_0x294044,'keyConsistent':_0x2e21ac['hMqRL'](_0x8bf450,_0xa9fe5),'keySource':'offse'+'t\x200\x20('+'int-w'+'idth)'};}function _0x8bf450(_0x3e5401){var _0x199e5d=_0x57da09,_0x2a8b0d={};for(var _0xbe0eb2=0x568+0x5b2+0xb1a*-0x1;_0xbe0eb2<_0x3e5401[_0x199e5d(0x875)+'h'];_0xbe0eb2++){var _0x96075d=_0x3e5401[_0xbe0eb2];if(_0x96075d['k']['index'+'Of']('obf')!==0x228f+-0x2*-0xf0d+-0x40a9*0x1)continue;if(_0x2a8b0d[_0x96075d['k']]===undefined)_0x2a8b0d[_0x96075d['k']]=_0x96075d['keyUs'+'ed'];else{if(_0x2a8b0d[_0x96075d['k']]!==_0x96075d[_0x199e5d(0x829)+'ed'])return![];}}return!![];}function _0x1f82f(_0x5d12e9){var _0x54113f=_0x57da09,_0x15d5ff={'lkrGV':function(_0xd65d11,_0x55ca0){return _0xd65d11(_0x55ca0);},'FjIqQ':function(_0x1b4140,_0x54e044,_0x254081){return _0x2e21ac['RVdnW'](_0x1b4140,_0x54e044,_0x254081);},'YFeEd':function(_0xa1cf64,_0x25196c){var _0x50de0b=_0xbe61;return _0x2e21ac[_0x50de0b(0x9d5)](_0xa1cf64,_0x25196c);},'BDadS':function(_0x131719,_0x38d2bb){var _0x2f20fd=_0xbe61;return _0x2e21ac[_0x2f20fd(0x667)](_0x131719,_0x38d2bb);},'ezVbp':function(_0x1494a0,_0x1e3560){return _0x1494a0===_0x1e3560;},'lvrCS':function(_0x3834c3,_0x4ee5c8){return _0x3834c3!==_0x4ee5c8;}};if(_0x2e21ac[_0x54113f(0x9ef)]('YIEGn',_0x2e21ac['xQSwh']))_0x167dc9[_0x54113f(0x6ab)+'em'](_0x35bd8f,_0x15d5ff['lkrGV'](_0x165512,_0x2cbafe[_0x54113f(0x554)]));else{var _0x16dafd=_0x5d12e9['v'];if(typeof _0x16dafd!=='numbe'+'r'||!_0x2e21ac[_0x54113f(0x8ac)](isFinite,_0x16dafd))return![];if(_0x2e21ac[_0x54113f(0xd4c)](_0x5d12e9['k'],_0x2e21ac[_0x54113f(0x4b8)]))return _0x2e21ac['szEDQ'](_0x16dafd,0x6c3*0x3+-0x485*0x5+0x250)||_0x16dafd===-0x1bf*-0xb+0x148*-0xe+-0x144;var _0x454bc2=_0x5d12e9['fake'];if(typeof _0x454bc2!==_0x2e21ac[_0x54113f(0xae3)]||!isFinite(_0x454bc2))return!![];if(_0x5d12e9['act']===-0x975+0xfe8*-0x2+0x2946){if(_0x2e21ac['ymgTm']('JaMqT','JaMqT'))return _0x2e21ac[_0x54113f(0xa51)](Math[_0x54113f(0xa75)](_0x16dafd-_0x454bc2),Math['max'](-0x376+0x1*0x1331+0x16*-0xb7,_0x2e21ac[_0x54113f(0x8a6)](Math[_0x54113f(0xa75)](_0x454bc2),-0x1126+0x870+0x8b6+0.6)));else{var _0x4d4662=(_0x54113f(0xa3d)+_0x54113f(0xcbc)+_0x54113f(0x68c)+'|6|10'+'|4')[_0x54113f(0xb4c)]('|'),_0x414b60=-0x1fc9+-0x15e9+0x11e6*0x3;while(!![]){switch(_0x4d4662[_0x414b60++]){case'0':var _0x58859e=_0x188316();continue;case'1':_0x736f0d=[];continue;case'2':var _0x3bf26e=_0x14d3eb(_0x41c464);continue;case'3':for(var _0x380721 in _0x58859e)_0x3bf26e[_0x380721]=_0x58859e[_0x380721];continue;case'4':_0x15d5ff['FjIqQ'](_0x3a417d,'repor'+'t',{'report':_0x73c2d2()});continue;case'5':if(!_0x439788){_0x24961b=_0x3bf26e,_0x2fa09b=[],_0x15d5ff[_0x54113f(0x85a)](_0xbba9b5,_0x54113f(0x717)+'t',{'report':_0xb5a075()});return;}continue;case'6':for(var _0x547f50 in _0x3bf26e){var _0x2e4caa=_0x57084e[_0x547f50],_0x3211e3=_0x3bf26e[_0x547f50];if(_0x15d5ff['YFeEd'](_0x2e4caa,_0x3211e3))_0xee8042[_0x54113f(0xc27)](_0x15d5ff[_0x54113f(0x348)](_0x547f50,':\x20')+_0x2e4caa+'\x20->\x20'+_0x3211e3);}continue;case'7':var _0x41c464=_0x524b26();continue;case'8':if(_0x15d5ff[_0x54113f(0xbc3)](_0x54dd6a,_0x54113f(0x6f7))){_0x20d87c(_0x4cab98&&typeof _0x47e362['on']===_0x54113f(0xa18)+'an'?_0x305089['on']:_0x368f96['on'],_0x127496&&typeof _0x44317b[_0x54113f(0xdbd)+'r']===_0x54113f(0x6e4)+'r'?_0x39ffbd['facto'+'r']:_0x1b4754['facto'+'r']);return;}continue;case'9':if(_0x15d5ff[_0x54113f(0x3b0)](_0x16871b,'snaps'+_0x54113f(0xcf3)))return;continue;case'10':_0x28ff49=_0x3bf26e;continue;}break;}}}return _0x2e21ac['RJNvy'](Math['abs'](_0x16dafd),-0x1c5f3547*0x3+-0x2c3203ae+0xbcea6d83);}}function _0x140c83(){var _0x2294fb=_0x57da09,_0x113f6b={};try{var _0xd3d493=window['Unity'+'WebMo'+_0x2294fb(0xa7e)]&&window['Unity'+_0x2294fb(0x8fd)+_0x2294fb(0xa7e)]['Runti'+'me'];_0x113f6b['tag']=_0xd3d493&&_0xd3d493['__sak'+'uraTa'+'g']||null,_0x113f6b[_0x2294fb(0x7b0)+'tches']=!!(_0x2e21ac[_0x2294fb(0x5c9)](_0xd3d493,_0x37956c)&&_0xd3d493[_0x2294fb(0xa48)+_0x2294fb(0xaa3)+'g']===_0x37956c),_0x113f6b[_0x2294fb(0xb39)+_0x2294fb(0x46a)+'e']=_0xd3d493&&_0xd3d493[_0x2294fb(0xa40)]?typeof _0xd3d493[_0x2294fb(0xa40)]:'none',_0x113f6b[_0x2294fb(0x7d0)+'nRunt'+_0x2294fb(0x203)+_0x2294fb(0x6bd)+'ted']=!!(_0x202852&&_0x202852[_0x2294fb(0x978)+_0x2294fb(0x9f3)]&&_0x2e21ac[_0x2294fb(0x742)](_0x202852['_runt'+_0x2294fb(0x9f3)],_0xd3d493)),_0x113f6b['plugi'+_0x2294fb(0x8fc)+_0x2294fb(0x3fc)+'me']=_0x202852&&_0x202852['_runt'+_0x2294fb(0x9f3)]&&_0x202852['_runt'+'ime']['_game']?typeof _0x202852[_0x2294fb(0x978)+_0x2294fb(0x9f3)][_0x2294fb(0xa40)]:_0x2e21ac[_0x2294fb(0x8ab)];}catch(_0x2dee3a){_0x113f6b[_0x2294fb(0xdc3)]=String(_0x2dee3a&&_0x2dee3a['messa'+'ge']||_0x2dee3a);}return _0x113f6b;}function _0x5aac19(){var _0x11005d=_0x57da09,_0x5574ab=[_0x11005d(0x6b1)+'Insta'+_0x11005d(0xac5),_0x11005d(0x6b1)+_0x11005d(0x31f),'game',_0x2e21ac[_0x11005d(0x316)]],_0x312195={};for(var _0x418ffa=0x4f*-0x53+0x135e+0x63f;_0x418ffa<_0x5574ab[_0x11005d(0x875)+'h'];_0x418ffa++){if(_0x2e21ac['qnuCA'](_0x2e21ac[_0x11005d(0x398)],_0x11005d(0x421))){var _0x55d802=_0x5574ab[_0x418ffa],_0x1ab561=typeof window[_0x55d802];_0x312195[_0x55d802]=_0x2e21ac[_0x11005d(0x95c)](_0x1ab561,'undef'+'ined')?'undef'+_0x11005d(0x310):_0x1ab561;}else return _0x100437['tfPtr']=-0x1*-0x247b+0x2e6+0x1*-0x2761,_0x224141(_0x2e21ac['CBGPg'](_0x2e21ac[_0x11005d(0x76a)],_0x90dd78));}var _0x404b3e=_0x242d96();_0x312195[_0x11005d(0xca3)+_0x11005d(0xdb9)]=_0x11deda['sourc'+'e'];try{_0x312195[_0x11005d(0xcac)+_0x11005d(0x70f)]=!!(_0x404b3e&&_0x404b3e[_0x11005d(0xa02)+'e']),_0x312195['heapU'+'8']=!!(_0x404b3e&&_0x404b3e[_0x11005d(0xa02)+'e']&&_0x404b3e['Modul'+'e'][_0x11005d(0xc76)+'8']),_0x312195[_0x11005d(0x889)+_0x11005d(0x948)]=_0x312195['heapU'+'8']?_0x404b3e[_0x11005d(0xa02)+'e'][_0x11005d(0xc76)+'8'][_0x11005d(0x875)+'h']:-0xa01*-0x1+-0x70*0x3b+0xfcf;}catch(_0x21028e){_0x2e21ac['zKhdN'](_0x2e21ac[_0x11005d(0x311)],_0x2e21ac['tMHWQ'])?(_0x312195[_0x11005d(0xcac)+'dule']=![],_0x312195[_0x11005d(0xa63)+'8']=![],_0x312195['heapB'+'ytes']=0x240d+-0x13*0x6b+0x1c*-0x101):_0x3975cd=_0x1055e0(_0x372f3c,_0x2e21ac['KdnkI'](_0x29d4b8,0x1b0d*-0x1+0x410*0x1+0x172f));}return _0x312195[_0x11005d(0x5f5)+'Wrapp'+'er']=typeof _0x3408e4,_0x312195;}function _0x3db1dd(){var _0x370863=_0x57da09,_0x11855d=_0x2e21ac[_0x370863(0x7e8)][_0x370863(0xb4c)]('|'),_0x137a81=-0xe99+0x5b7*0x6+0x1*-0x13b1;while(!![]){switch(_0x11855d[_0x137a81++]){case'0':return _0x33c7bc;case'1':var _0x2b83ed=_0xc38dd6();continue;case'2':for(var _0x45f07c in _0x2b83ed[_0x370863(0x23d)+'s'])_0x33c7bc[_0x2e21ac[_0x370863(0xe1c)]+_0x45f07c]=_0x2b83ed[_0x370863(0x23d)+'s'][_0x45f07c];continue;case'3':if(!_0x2b83ed)return _0x33c7bc;continue;case'4':if(_0x2b83ed[_0x370863(0x986)+'a'])_0x33c7bc[_0x370863(0x749)+'Look+'+_0x370863(0x986)+'a']=_0x2b83ed['camer'+'a'];continue;case'5':var _0x33c7bc={};continue;case'6':_0x33c7bc['Mouse'+_0x370863(0x5bf)+_0x370863(0xa33)]=_0x2b83ed['mouse'+'Look'];continue;}break;}}function _0x100445(_0x333a2f){var _0x2909cd=_0x57da09,_0x381ea4={};for(var _0x2f9bd0 in _0x333a2f){var _0x28b424=_0x333a2f[_0x2f9bd0];for(var _0xab3f1d=0x11d9*0x1+0x11bc+0x2395*-0x1;_0x2e21ac['pYBHs'](_0xab3f1d,_0x28b424[_0x2909cd(0x875)+'h']);_0xab3f1d++){if(_0x2e21ac[_0x2909cd(0xd07)](_0x2909cd(0x5ce),_0x2e21ac['eCprU']))_0x381ea4[_0x2e21ac[_0x2909cd(0x670)](_0x2f9bd0+'+0x',_0x28b424[_0xab3f1d]['o']['toStr'+_0x2909cd(0x710)](0x64*-0x5d+-0x13e*0x5+0x2a9a))]=_0x28b424[_0xab3f1d]['v'];else{var _0x114d17=_0x3efb02['hookP'+_0x2909cd(0x9b9)]({'typeName':_0x27c534[_0x2909cd(0xaeb)],'methodName':_0x2e21ac[_0x2909cd(0x8c6)],'params':['i32',_0x2909cd(0x25a)],'returnType':_0x42d4d5},_0x2e21ac[_0x2909cd(0x740)](_0x16f291,_0x5cba4f['type'],_0x524d82[_0x2909cd(0x34f)],_0x3c0529['many']));_0x3650df[_0x2909cd(0xc27)]({'type':_0x40ba87[_0x2909cd(0xaeb)],'hook':_0x114d17,'keep':_0x810450[_0x2909cd(0x34f)]});}}}return _0x381ea4;}function _0x425963(_0x4edd57,_0x503fa2){var _0x2bb437=_0x57da09;if(_0x2e21ac[_0x2bb437(0x7a1)](_0x4edd57,_0x2bb437(0x6f7))){_0x2e21ac['aMeDR'](_0xd01c8a,_0x503fa2&&_0x2e21ac[_0x2bb437(0xdf6)](typeof _0x503fa2['on'],'boole'+'an')?_0x503fa2['on']:_0x43d8b1['on'],_0x503fa2&&typeof _0x503fa2['facto'+'r']===_0x2bb437(0x6e4)+'r'?_0x503fa2[_0x2bb437(0xdbd)+'r']:_0x43d8b1[_0x2bb437(0xdbd)+'r']);return;}if(_0x2e21ac[_0x2bb437(0x681)](_0x4edd57,_0x2bb437(0xdc5)+'hot'))return;var _0xe815c7=_0x2e21ac['oOCIB'](_0x21db7e),_0x543e65=_0x100445(_0xe815c7),_0x18c1a9=_0x3db1dd();for(var _0x12e74c in _0x18c1a9)_0x543e65[_0x12e74c]=_0x18c1a9[_0x12e74c];if(!_0x3194fb){_0x3194fb=_0x543e65,_0x727362=[],_0x540114(_0x2e21ac['PBqXe'],{'report':_0x2e21ac[_0x2bb437(0x2a2)](_0x281778)});return;}_0x727362=[];for(var _0x4b22b2 in _0x543e65){var _0x55af41=_0x3194fb[_0x4b22b2],_0x222868=_0x543e65[_0x4b22b2];if(_0x55af41!==_0x222868)_0x727362['push'](_0x2e21ac[_0x2bb437(0x738)](_0x2e21ac['daSmg'](_0x4b22b2+':\x20'+_0x55af41,_0x2bb437(0xb63)),_0x222868));}_0x3194fb=_0x543e65,_0x2e21ac['RVdnW'](_0x540114,_0x2bb437(0x717)+'t',{'report':_0x281778()});}var _0x1cd8dd=null;function _0xdfd4be(){var _0x191028=_0x57da09,_0x549fe3={'CVtcR':'[data'+_0x191028(0xb51),'mZTvL':function(_0x42c591,_0x484bd2){var _0x68f99e=_0x191028;return _0x2e21ac[_0x68f99e(0x441)](_0x42c591,_0x484bd2);},'ApVzX':_0x191028(0x9f9)+'|4|6|'+'0|3','uERLc':function(_0x5ab813,_0x315fec,_0x42e375,_0x27057e){return _0x5ab813(_0x315fec,_0x42e375,_0x27057e);},'iCCqL':function(_0x2a3383,_0x509e2b){return _0x2e21ac['xlCOY'](_0x2a3383,_0x509e2b);}};if(_0x1cd8dd)return _0x1cd8dd;try{var _0xce8a5=_0x2e21ac['SKWgY'][_0x191028(0xb4c)]('|'),_0x39c745=-0x1a87+0x1b01*0x1+-0x7a;while(!![]){switch(_0xce8a5[_0x39c745++]){case'0':var _0x1b193a=_0xd396b4('esp');continue;case'1':var _0xd396b4=function(_0x5bf33c){var _0x3bdf59=_0x191028;return _0x12e825[_0x3bdf59(0x594)+_0x3bdf59(0xd85)+'tor'](_0x549fe3[_0x3bdf59(0xb12)]+_0x5bf33c+'\x22]');};continue;case'2':var _0x22e546=_0x2e21ac[_0x191028(0x66a)];continue;case'3':var _0x222fa3=_0xd396b4('fx');continue;case'4':var _0x125220=_0xd396b4(_0x191028(0xb91));continue;case'5':if(!document['getEl'+'ement'+'ById'](_0x2e21ac[_0x191028(0xe0b)])){var _0x157ec9=document[_0x191028(0x843)+_0x191028(0x2b5)+_0x191028(0xbe3)]('style');_0x157ec9['id']=_0x2e21ac[_0x191028(0xe0b)],_0x157ec9[_0x191028(0x21a)+_0x191028(0x1f5)+'t']=_0x2e21ac[_0x191028(0x388)],(document['head']||document[_0x191028(0xcc6)+_0x191028(0x2e4)+_0x191028(0x6df)])[_0x191028(0xac2)+_0x191028(0xd84)+'d'](_0x157ec9);}continue;case'6':var _0xf969a4=_0x2e21ac[_0x191028(0x8a9)](_0xd396b4,'fv');continue;case'7':var _0x12e825=document[_0x191028(0x843)+'eElem'+'ent']('div');continue;case'8':var _0x414290=_0x2e21ac['bMKjn'](_0xd396b4,'st');continue;case'9':if(_0x11b5e3)_0x11b5e3[_0x191028(0xd1a)+'ck']=function(){var _0x4f732f=_0x191028;_0x2e21ac[_0x4f732f(0x59b)](_0xd01c8a,!_0x43d8b1['on'],_0x43d8b1[_0x4f732f(0xdbd)+'r']);};continue;case'10':_0x1cd8dd={'el':_0x12e825,'st':_0x414290,'st2':_0x125220,'sp':_0x11b5e3,'fx':_0x222fa3,'fv':_0xf969a4,'esp':_0x1b193a};continue;case'11':document[_0x191028(0xd40)][_0x191028(0xac2)+'dChil'+'d'](_0x12e825);continue;case'12':_0x12e825['id']='sakur'+'a-sw-'+_0x191028(0xe1a);continue;case'13':if(_0x2e21ac[_0x191028(0xa78)](_0xd396b4,'snap'))_0x2e21ac[_0x191028(0x728)](_0xd396b4,'snap')['oncli'+'ck']=function(){var _0x16c218=_0x191028;_0x549fe3['mZTvL'](_0x425963,_0x16c218(0xdc5)+'hot');};continue;case'14':var _0x11b5e3=_0xd396b4('sp');continue;case'15':if(_0x222fa3)_0x222fa3['oninp'+'ut']=function(){var _0x5ba4fd=_0x191028;_0x2e21ac['GlNvO'](_0xd01c8a,_0x43d8b1['on'],_0x2e21ac[_0x5ba4fd(0x441)](parseFloat,_0x222fa3[_0x5ba4fd(0x5f5)])||0x257+0x9*0x1f3+0x13e1*-0x1);};continue;case'16':_0x12e825[_0x191028(0xb3b)+'HTML']=_0x22e546;continue;case'17':var _0x594c10=_0xd396b4('bar');continue;case'18':_0x12e825[_0x191028(0x21d)]['cssTe'+'xt']=_0x2e21ac[_0x191028(0x7d2)](_0x2e21ac[_0x191028(0x9b6)](_0x2e21ac['NumWn'](_0x191028(0x55d)+_0x191028(0x2f7)+_0x191028(0x6cd)+_0x191028(0x545)+_0x191028(0x94a)+'ottom'+_0x191028(0x4b6)+_0x191028(0x38a)+_0x191028(0x280)+_0x191028(0x97d)+_0x191028(0x32a)+'ispla'+'y:fle'+_0x191028(0x817)+'x-dir'+_0x191028(0xc78)+_0x191028(0x414)+'umn;g'+_0x191028(0xa6e)+'x;',_0x2e21ac[_0x191028(0xdec)]),_0x191028(0xaac)+'ng:6p'+_0x191028(0x284)+';font'+_0x191028(0x9da)+'/1.45'+_0x191028(0xb2e)+'onosp'+_0x191028(0x3b5)+_0x191028(0x24c)+_0x191028(0x508)+_0x191028(0x5f7)+_0x191028(0x35f)+_0x191028(0x366)+_0x191028(0x3a2)+'5;'),'box-s'+'hadow'+_0x191028(0xadb)+'px\x2030'+_0x191028(0x718)+'2px\x20#'+'000;u'+_0x191028(0x7f6)+_0x191028(0x23e)+_0x191028(0x456)+';-web'+_0x191028(0xc91)+_0x191028(0x7f6)+_0x191028(0x23e)+_0x191028(0x456)+';');continue;case'19':_0x12e825[_0x191028(0xb3b)+_0x191028(0x250)]=_0x2e21ac['wzsIw'](_0x2e21ac[_0x191028(0xdd5)](_0x2e21ac['aQHiM'](_0x2e21ac[_0x191028(0x517)](_0x2e21ac[_0x191028(0x8b2)](_0x2e21ac['LGpzC'](_0x2e21ac['RXMlN'](_0x2e21ac['QBXNp']+('<b\x20st'+'yle=\x22'+'color'+':')+_0x243c0c+_0x2e21ac[_0x191028(0x2b9)],'<butt'+'on\x20da'+'ta-a='+'\x22sp\x22\x20'+'style'+_0x191028(0x611)+_0x191028(0xa10)+'nd:tr'+_0x191028(0xb9e)+_0x191028(0xd77)+_0x191028(0x30b)+_0x191028(0x4f5)+'\x20soli'+_0x191028(0x31b)+_0x191028(0xbc5)+_0x191028(0x618)+'177,.'+'45);'),_0x191028(0x34d)+':#f7e'+_0x191028(0x88a)+_0x191028(0xcd3)+_0x191028(0x619)+_0x191028(0xc60)+_0x191028(0x4e6)+_0x191028(0xb8f)+'2px\x208'+_0x191028(0x9dc)+_0x191028(0xd18)+'point'+_0x191028(0xc34)+_0x191028(0xc18)+_0x191028(0xb0f)+_0x191028(0xaff)+_0x191028(0x64e)+_0x191028(0x54c)+_0x191028(0x5d0)+'>'),_0x2e21ac['XGYib']),_0x243c0c)+_0x191028(0x6f5)+(_0x191028(0xe59)+'\x20data'+_0x191028(0x26a)+_0x191028(0x247)+'yle=\x22'+_0x191028(0x34d)+':#bda'+'9c9;m'+'in-wi'+_0x191028(0x20a)+'0px;\x22'+'>2.0x'+'</spa'+'n>')+_0x2e21ac['NjlEs']+_0x2e21ac[_0x191028(0x88e)],_0x191028(0x5a3)+_0x191028(0xbf0)+_0x191028(0x5c6)+_0x191028(0xe36)+_0x191028(0x4d4)+'le=\x22b'+'ackgr'+_0x191028(0x855)+_0x191028(0x8cb)+_0x191028(0x4dc)+'t;bor'+_0x191028(0x2b0)+'px\x20so'+_0x191028(0x944)+'gba(2'+_0x191028(0xd66)+'3,177'+',.45)'+';')+(_0x191028(0x34d)+_0x191028(0x931)+'ef5;b'+'order'+'-radi'+'us:6p'+_0x191028(0x4e6)+_0x191028(0xb8f)+_0x191028(0xb15)+_0x191028(0x9dc)+_0x191028(0xd18)+'point'+'er;fo'+_0x191028(0xc18)+_0x191028(0xb0f)+_0x191028(0x884)+'ap</b'+_0x191028(0x5d0)+'>'),'<butt'+_0x191028(0xbf0)+'ta-a='+_0x191028(0x84a)+_0x191028(0x4d4)+_0x191028(0x708)+_0x191028(0x75f)+_0x191028(0x497)+_0x191028(0x71a)+_0x191028(0x6c0)+'groun'+'d:tra'+_0x191028(0xcf2)+'ent;b'+_0x191028(0xcd3)+_0x191028(0xd6c)+_0x191028(0x5fb)+_0x191028(0x5e5)+'(255,'+'143,1'+'77,.4'+'5);')+(_0x191028(0x34d)+':#f7e'+_0x191028(0x88a)+_0x191028(0xcd3)+'-radi'+_0x191028(0xc60)+'x;pad'+_0x191028(0xb8f)+_0x191028(0xd56)+_0x191028(0x9dc)+'rsor:'+_0x191028(0xd91)+_0x191028(0xc34)+'nt:in'+_0x191028(0xb0f)+_0x191028(0xd36)+_0x191028(0xbe9)+_0x191028(0x5ae)),'</div'+'>')+_0x2e21ac['QRXKL']+('<div\x20'+_0x191028(0x2d7)+_0x191028(0xde2)+'2\x22\x20st'+'yle=\x22'+_0x191028(0x34d)+_0x191028(0xe4d)+_0x191028(0x539)+_0x191028(0xcfb)+_0x191028(0xcdd)+_0x191028(0x688)+'\x22></d'+_0x191028(0xe56));continue;case'20':return _0x1cd8dd;case'21':if(_0x2e21ac[_0x191028(0xc6a)](_0xd396b4,_0x2e21ac['yCADl']))_0xd396b4('fold')[_0x191028(0xd1a)+'ck']=function(){var _0x22621b=_0x191028;if(!_0x594c10)return;var _0x5ec894=_0x2e21ac['mALur'](_0x594c10['style'][_0x22621b(0xc74)+'ay'],_0x2e21ac[_0x22621b(0x8ab)]);_0x594c10[_0x22621b(0x21d)][_0x22621b(0xc74)+'ay']=_0x5ec894?'':'none',_0xd396b4(_0x22621b(0x4c7))[_0x22621b(0x21a)+_0x22621b(0x1f5)+'t']=_0x5ec894?'-':'+';};continue;case'22':if(!document[_0x191028(0xd40)]||!document[_0x191028(0xd40)][_0x191028(0xac2)+'dChil'+'d'])return null;continue;case'23':if(_0x1b193a)_0x1b193a['oncli'+'ck']=function(){var _0x53af55=_0x191028;if(!_0x1feaeb['on'])_0x30d21f(!![],![]);else{if(_0x1feaeb['boxes'])_0x30d21f(![],![]);else{if(_0x4141c7())_0x30d21f(!![],!![]);else _0x2e21ac[_0x53af55(0xba3)](_0x30d21f,![],![]);}}};continue;}break;}}catch(_0x2eff5b){if(_0x191028(0x3c0)==='ItXFN'){var _0x5656f4=_0x549fe3[_0x191028(0xa99)][_0x191028(0xb4c)]('|'),_0x4010c2=0x13c8+-0xddf+-0x5e9;while(!![]){switch(_0x5656f4[_0x4010c2++]){case'0':if(!_0x16caab['rows']['lengt'+'h'])return null;continue;case'1':var _0x3f9041=_0x549fe3['uERLc'](_0x15c98c,_0x49a927,_0x471836,_0x3794d3);continue;case'2':_0x3f9041['o']=_0x3aff24;continue;case'3':return _0x16caab['rows'][0x7cb+0x2064+-0x282f];case'4':_0x3f9041['k']=_0x410324;continue;case'5':if(!_0x3f9041)return null;continue;case'6':var _0x16caab=_0x549fe3[_0x191028(0x5d7)](_0x4db349,[_0x3f9041]);continue;}break;}}else return console[_0x191028(0x80d)](_0x2e21ac[_0x191028(0x60b)],_0x191028(0x34d)+':'+_0x243c0c,_0x2eff5b),null;}}function _0x4141c7(){var _0x47a304=_0x57da09;if(_0x2e21ac[_0x47a304(0xb1e)](_0x2e21ac[_0x47a304(0x307)],'YnmXj'))try{var _0x5d2347=_0x540ec0();if(_0x5d2347['basis'])return!![];var _0x385d70=_0x2e21ac[_0x47a304(0x271)](_0x51e211);return!!(_0x385d70&&_0xfbef9f['ident'+_0x47a304(0x4a5)]);}catch(_0x4eeeb4){if('iphce'!==_0x2e21ac['OgnyE']){var _0x260988='';_0x367893['hookF'+'irePr'+_0x47a304(0x6ed)]&&(_0x260988=_0x2e21ac[_0x47a304(0x738)](_0x2e21ac[_0x47a304(0x8f6)](_0x2e21ac[_0x47a304(0xc77)](_0x2e21ac[_0x47a304(0xddb)](_0x2e21ac[_0x47a304(0x9f4)]+_0x4964db[_0x47a304(0xa3c)+_0x47a304(0x21c)+_0x47a304(0x6ed)][_0x47a304(0x3d9)],_0x47a304(0xa53)+_0x47a304(0xb55)+'igina'+_0x47a304(0xbd7)+'='),_0x2efd07[_0x47a304(0xa3c)+_0x47a304(0x21c)+'oof']['origi'+'nalFu'+'nc'])+(_0x47a304(0x3e5)+_0x47a304(0xd15)+_0x47a304(0x2bf)+_0x47a304(0x590)),_0x247809[_0x47a304(0xa3c)+'irePr'+_0x47a304(0x6ed)][_0x47a304(0x2bf)+_0x47a304(0xcfe)+_0x47a304(0x7db)+'re'])+('\x20(sou'+_0x47a304(0x999))+(_0x25c02e['hookF'+_0x47a304(0x21c)+_0x47a304(0x6ed)][_0x47a304(0xca3)+_0x47a304(0xdb9)+'AtFir'+'e']||_0x47a304(0x97c)),_0x2e21ac['jaxgs'])),_0xa78d5f[_0x47a304(0xa70)+_0x47a304(0xaa0)]['push'](_0x47a304(0xe0a)+'\x20inst'+_0x47a304(0x991)+_0x47a304(0x21e)+'esolv'+_0x47a304(0x411)+_0x47a304(0x8e7)+_0x47a304(0x821)+'\x20'+(_0x43665b[_0x47a304(0x711)+'ls']['gameS'+'ource']||_0x2e21ac['yoxIT'])+_0x47a304(0x9ee)+_0x2e21ac['QYkLw']+_0x260988);}else return![];}else{var _0x5213b9={};for(var _0x50c1fa in _0x54660b){var _0x12fc3a=_0x26ccd2[_0x50c1fa];for(var _0x51963e=-0x3*-0x45d+0x1460+-0x2177;_0x51963e<_0x12fc3a[_0x47a304(0x875)+'h'];_0x51963e++){_0x5213b9[_0x2e21ac[_0x47a304(0xc77)](_0x50c1fa,'+0x')+_0x12fc3a[_0x51963e]['o'][_0x47a304(0x69e)+_0x47a304(0x710)](0x34*0x2e+0x25b3+-0x279*0x13)]=_0x12fc3a[_0x51963e]['v'];}}return _0x5213b9;}}function _0x48e4f3(){var _0x4fcbf0=_0x57da09;try{var _0x20ec5c=_0x1cd8dd&&_0x1cd8dd[_0x4fcbf0(0xc3f)];if(!_0x20ec5c)return;if(_0x1feaeb[_0x4fcbf0(0xbc1)]&&!_0x4141c7())_0x1feaeb[_0x4fcbf0(0xbc1)]=![];var _0x578fe7=!_0x1feaeb['on']?_0x4fcbf0(0x3ea)+'ff':_0x1feaeb['boxes']?_0x2e21ac[_0x4fcbf0(0x7ee)]:'ESP\x20m'+'ap';if(_0x578fe7!==_0x20ec5c['textC'+'onten'+'t'])_0x20ec5c['textC'+_0x4fcbf0(0x1f5)+'t']=_0x578fe7;_0x20ec5c[_0x4fcbf0(0x21d)][_0x4fcbf0(0x302)+_0x4fcbf0(0x3c3)]=_0x1feaeb['on']?_0x243c0c:_0x2e21ac['zmywX'],_0x20ec5c['style'][_0x4fcbf0(0x34d)]=_0x1feaeb['on']?_0x2e21ac['ePQcM']:_0x4fcbf0(0x867)+'f5';}catch(_0x19ca75){}}function _0x30d21f(_0x1e45b0,_0x34d57e){var _0x18517a=_0x57da09;if('FtuvS'===_0x18517a(0x62d)){_0x1feaeb['on']=!!_0x1e45b0,_0x1feaeb[_0x18517a(0xbc1)]=!!_0x34d57e,_0x2e21ac[_0x18517a(0xd35)](_0x48e4f3);try{var _0x510919=_0x1530f0();if(_0x510919&&_0x510919['el'])_0x510919['el'][_0x18517a(0x21d)]['displ'+'ay']=_0x1feaeb['on']?'':_0x2e21ac[_0x18517a(0x8ab)];var _0x5a10e9=_0x167abc;if(_0x5a10e9&&_0x5a10e9['cv'])_0x5a10e9['cv'][_0x18517a(0x21d)]['displ'+'ay']=_0x1feaeb['on']&&_0x1feaeb[_0x18517a(0xbc1)]?'':'none';}catch(_0x21fa31){}}else{_0x317b50[_0x18517a(0x9bc)+_0x18517a(0x901)+_0x18517a(0x4af)](),_0x6c85f5(_0xb9ffc9['on'],_0x2e21ac[_0x18517a(0x95f)](_0x223d98['facto'+'r'],-0x61a*0x1+0x63e+-0x24+0.5));return;}}var _0x254dae=-0x609+-0x5a*0x2a+-0x2f9*-0x7;function _0xd01c8a(_0x1f658e,_0x2ef367){var _0x4eefd9=_0x57da09,_0x2e28cc=_0x2e21ac[_0x4eefd9(0xbe6)][_0x4eefd9(0xb4c)]('|'),_0x3dd2a7=0x1190+0x1307+0x143*-0x1d;while(!![]){switch(_0x2e28cc[_0x3dd2a7++]){case'0':var _0xb7438a=_0x2e21ac['hVmCY'](_0xdfd4be);continue;case'1':if(_0xb7438a){_0xb7438a['sp']&&(_0xb7438a['sp']['textC'+_0x4eefd9(0x1f5)+'t']=_0x43d8b1['on']?'Speed'+_0x4eefd9(0x595):_0x2e21ac[_0x4eefd9(0xcbe)],_0xb7438a['sp']['style']['backg'+_0x4eefd9(0x3c3)]=_0x43d8b1['on']?_0x243c0c:_0x2e21ac[_0x4eefd9(0x482)],_0xb7438a['sp']['style']['color']=_0x43d8b1['on']?_0x2e21ac['ePQcM']:'#f7ee'+'f5');if(_0xb7438a['fx'])_0xb7438a['fx'][_0x4eefd9(0x5f5)]=String(_0x43d8b1['facto'+'r']);if(_0xb7438a['fv'])_0xb7438a['fv'][_0x4eefd9(0x21a)+_0x4eefd9(0x1f5)+'t']=_0x43d8b1['facto'+'r']['toFix'+'ed'](0x6b*-0x17+0x705+0x299)+'x';}continue;case'2':_0x43d8b1['on']=!!_0x1f658e;continue;case'3':_0x43d8b1[_0x4eefd9(0xdbd)+'r']=Math[_0x4eefd9(0xae4)](_0x43d8b1[_0x4eefd9(0x417)],Math[_0x4eefd9(0x417)](_0x43d8b1[_0x4eefd9(0xae4)],_0x2e21ac['VSKyQ'](Number,_0x2ef367)||-0x13bc*-0x1+-0xd*0x4e+-0xfc5));continue;case'4':var _0x255550=_0x43d8b1['on'];continue;case'5':_0x43d8b1['on']&&!_0x255550&&(_0x2ef367===undefined||_0x2ef367===null||_0x2e21ac['jXsHo'](_0x2e21ac[_0x4eefd9(0x8a9)](Number,_0x2ef367),-0xf40+0x1*0x22af+-0x136e))&&(_0x2ef367=_0x254dae);continue;case'6':if(!_0x43d8b1['on'])_0x384f17={};continue;}break;}}function _0x457c60(_0xaefb50){var _0x29d28b=_0x57da09,_0x259dc6=_0x2e21ac[_0x29d28b(0x9c1)](_0xdfd4be);if(!_0x259dc6||!_0x259dc6['st'])return;try{if(_0x2e21ac[_0x29d28b(0xb1e)](_0x2e21ac['LwQmt'],_0x2e21ac[_0x29d28b(0xb84)]))return _0x115c33['sourc'+'e']=_0x29d28b(0xbd9)+_0x29d28b(0xd15)+_0x29d28b(0x77f)+'ng',_0x3957bd;else{if(!_0x25652d()&&!_0x462ba1){if(_0x259dc6['el'])_0x259dc6['el'][_0x29d28b(0x21d)][_0x29d28b(0xc74)+'ay']=_0x2e21ac['yoxIT'];return;}if(_0x259dc6['el'])_0x259dc6['el'][_0x29d28b(0x21d)][_0x29d28b(0xc74)+'ay']='';var _0x538501=Object[_0x29d28b(0x82e)](_0xaefb50&&_0xaefb50['insta'+_0x29d28b(0x251)]||{})[_0x29d28b(0x875)+'h'],_0x32af89=_0xaefb50&&_0xaefb50[_0x29d28b(0xc3f)]||null,_0x4ba7e8=_0x32af89?_0x32af89[_0x29d28b(0x7da)+'Count']||0x24b5+0x3b+-0x3*0xc50:0x4*0x714+0x7*0x365+-0x3413,_0x272154=_0x32af89?_0x32af89['botCo'+_0x29d28b(0xc8d)]||0x423+-0x1*-0x26c7+-0x2aea:0x167*0x2+0x1*0x1b49+-0x1e17,_0x170797=_0x1ee8e3?_0x2e21ac['uFIbt']((_0x1ee8e3[_0x29d28b(0x3df)+'r'][_0x29d28b(0x46b)+'ength']/(-0x9d31c+0x281*-0xd7+-0x1df*-0xeed))['toFix'+'ed'](0x6*0x33c+0xec9+-0x2231),'MB'):_0x2e21ac[_0x29d28b(0x383)],_0x471411=_0x2e21ac[_0x29d28b(0x32b)](_0x2e21ac[_0x29d28b(0xda7)](_0x2e21ac['VreDd'](_0x2e21ac[_0x29d28b(0x965)](_0x2e21ac[_0x29d28b(0x667)]('v'+(_0xaefb50&&_0xaefb50[_0x29d28b(0x899)+'on']||_0x150f3f)+(_0x29d28b(0x732)+'ks\x20')+(_0xaefb50&&_0xaefb50['hooks'+'Appli'+'ed']||0x646*0x2+0x840+-0x14cc)+'/',_0xaefb50&&_0xaefb50['hooks'+_0x29d28b(0x665)]||-0x649*0x4+-0x614+0x4a*0x6c),_0x29d28b(0x211)+'s\x20')+_0x538501,'\x20\x20mem'+'\x20')+_0x170797,_0x2e21ac[_0x29d28b(0xa8c)]),_0x4592a4);_0x259dc6['st']['textC'+_0x29d28b(0x1f5)+'t']=_0x471411;var _0x45e157=_0x259dc6['st2'];_0x45e157&&(_0x45e157['textC'+'onten'+'t']=_0x2e21ac[_0x29d28b(0x2d0)](_0x4ba7e8,-0x40a*0x3+-0x1ecc+-0x6*-0x727)?_0x29d28b(0xde5)+_0x29d28b(0x814)+_0x4ba7e8+(_0x272154?_0x2e21ac['ucgfI']+_0x272154+_0x2e21ac[_0x29d28b(0xe27)]:'')+(_0x32af89&&_0x32af89[_0x29d28b(0x986)+'a']?_0x2e21ac['nZWVx'](_0x29d28b(0x49a)+'\x20',_0x32af89[_0x29d28b(0x986)+_0x29d28b(0x572)]):_0x29d28b(0x49a)+'\x20-'):_0x2e21ac['uWCQZ'](_0x29d28b(0x93a)+'emies'+_0x29d28b(0x81e)+'(lobb'+_0x29d28b(0xdf5)+'cam\x20',_0x32af89&&_0x32af89['camer'+'a']?_0x32af89[_0x29d28b(0x986)+_0x29d28b(0x572)]:'-'),_0x45e157['style']['color']=_0x4ba7e8>0xfb3+-0x21bc+-0x1*-0x1209?_0x2e21ac[_0x29d28b(0x75b)]:_0x2e21ac[_0x29d28b(0x378)]);}}catch(_0x346a33){}}window[_0x57da09(0x62c)+'entLi'+_0x57da09(0x80e)+'r']('keydo'+'wn',function(_0x2f4dcc){var _0x3f7caf=_0x57da09,_0x44d351={'ScuOt':'void','iNecW':function(_0x43d735,_0x107786){return _0x43d735+_0x107786;}};if(!_0x2f4dcc)return;try{if(_0x2e21ac[_0x3f7caf(0x386)](_0x2f4dcc['code'],'F9')){_0x2f4dcc['preve'+'ntDef'+'ault'](),_0x2e21ac['EaWNU'](_0x425963,_0x2e21ac[_0x3f7caf(0x553)]);return;}if(_0x2f4dcc[_0x3f7caf(0x964)]==='F7'){if(_0x2e21ac[_0x3f7caf(0xdbb)](_0x2e21ac[_0x3f7caf(0x7c4)],_0x2e21ac[_0x3f7caf(0x7c4)])){var _0x386fc7=_0xb09f47[_0x256d3e]['param'+'s']['join'](',')+'\x20->\x20'+(_0x493e03[_0x2d60f3][_0x3f7caf(0x2b2)+_0x3f7caf(0x906)]||_0x44d351['ScuOt']);_0x2fafdd[_0x386fc7]=(_0xa4e65e[_0x386fc7]||0xdd5+-0x1853+0xa7e)+(0x205a+0x493*0x2+0x297f*-0x1);}else{_0x2f4dcc['preve'+_0x3f7caf(0x901)+_0x3f7caf(0x4af)](),_0x2e21ac['QiTRy'](_0xd01c8a,!_0x43d8b1['on'],_0x43d8b1['facto'+'r']);return;}}if(_0x2e21ac[_0x3f7caf(0x742)](_0x2f4dcc[_0x3f7caf(0x964)],'F8')){_0x2f4dcc[_0x3f7caf(0x9bc)+'ntDef'+_0x3f7caf(0x4af)](),_0xd01c8a(_0x43d8b1['on'],_0x2e21ac['VDZJN'](_0x43d8b1[_0x3f7caf(0xdbd)+'r'],0x1c64+-0x8b*0x7+-0x1897+0.5));return;}if(_0x2f4dcc['code']==='F6'){_0x2f4dcc[_0x3f7caf(0x9bc)+_0x3f7caf(0x901)+_0x3f7caf(0x4af)](),_0xd01c8a(_0x43d8b1['on'],_0x43d8b1[_0x3f7caf(0xdbd)+'r']-(0x1c1f+0xeed+-0x2b0c+0.5));return;}if(_0x2f4dcc[_0x3f7caf(0x964)]===_0x2e21ac['UdDUS']){_0x2f4dcc[_0x3f7caf(0x9bc)+_0x3f7caf(0x901)+'ault'](),_0x284d30(!_0x5734bd['open']);return;}if(_0x2f4dcc[_0x3f7caf(0x964)]===_0x2e21ac[_0x3f7caf(0x492)]){_0x2f4dcc[_0x3f7caf(0x9bc)+_0x3f7caf(0x901)+_0x3f7caf(0x4af)](),_0x3c71ff['fov']=Math[_0x3f7caf(0xae4)](0x118+0xb35*-0x1+0xaa9,_0x3c71ff['fov']+(-0x11f4+-0x327+0x151d)),_0x54ad0c();return;}if(_0x2e21ac['LPVkf'](_0x2f4dcc[_0x3f7caf(0x964)],'Brack'+'etLef'+'t')){if(_0x2e21ac['wIrCL']!=='cSWou'){_0x2f4dcc[_0x3f7caf(0x9bc)+_0x3f7caf(0x901)+_0x3f7caf(0x4af)](),_0x3c71ff[_0x3f7caf(0x554)]=Math[_0x3f7caf(0x417)](0xdf*0x26+-0x26*-0x43+-0x2aee,_0x3c71ff[_0x3f7caf(0x554)]-(0x13b0+0xd98+-0x1*0x2146)),_0x54ad0c();return;}else return{'o':'0x'+_0x4cfae8[0x214b*-0x1+-0x2de*-0x2+0x1b8f]['toStr'+_0x3f7caf(0x710)](0xd09+-0x4*-0xab+0x10b*-0xf),'v':_0x380006(_0x44d351['iNecW'](_0x1bfd6a,_0x143d96[-0x716*0x1+0xaa9+-0x393]),_0x40fda6[0x137b+-0x220e+0xe94])};}}catch(_0x54a1a6){}},!![]);var _0x1feaeb={'on':!![],'span':0x50,'boxes':![]};function _0xc38dd6(){var _0xe43233=_0x57da09,_0x460a6f=_0x2893ac['Photo'+'nNetw'+_0xe43233(0xa69)+'nc']||{},_0x557623=Object[_0xe43233(0x82e)](_0x460a6f);for(var _0x405cb8=-0x2039+0x12c3+-0x1*-0xd76;_0x2e21ac['dvmXT'](_0x405cb8,_0x557623[_0xe43233(0x875)+'h']);_0x405cb8++){var _0x55e38a=_0x460a6f[_0x557623[_0x405cb8]][_0xe43233(0xa33)],_0x4b83bb=_0x2e21ac['aMeDR'](_0x2352d3,_0x2e21ac[_0xe43233(0xb45)](_0x55e38a,0x1*-0x2337+-0x1c1e+-0x17*-0x2c3),'u32');if(!_0x4b83bb)continue;var _0x3df686=_0xe29e80[_0xe43233(0x749)+'Look']||[],_0x485127={'mouseLook':'0x'+_0x2e21ac['RvLfj'](_0x4b83bb,-0x1c53+-0x1d*-0x149+0xe5*-0xa)['toStr'+_0xe43233(0x710)](0x1*-0x49f+0x1ed7+-0xc*0x22e),'floats':{},'camera':null,'vec2':null};for(var _0x3733a5=0x1f*-0x1f+-0x38d+0xb*0xaa;_0x3733a5<_0x3df686[_0xe43233(0x875)+'h'];_0x3733a5++){if(_0x3df686[_0x3733a5][0x1*0x5b5+-0xdb2*0x2+0x56c*0x4]!==_0xe43233(0x550))continue;_0x485127[_0xe43233(0x23d)+'s'][_0x2e21ac['FmTqv']('0x',_0x3df686[_0x3733a5][-0x1*-0x18c1+-0x1*0x2501+0x188*0x8][_0xe43233(0x69e)+'ing'](-0x1bf4*-0x1+0x2f8+0x4*-0x7b7))]=_0x2e21ac['RVdnW'](_0x2352d3,_0x2e21ac['peBlv'](_0x4b83bb,_0x3df686[_0x3733a5][0x1ef5+-0x3*0x5de+-0xd5b*0x1]),'f32');}var _0x317d3d=_0x2352d3(_0x2e21ac[_0xe43233(0x667)](_0x4b83bb,0x3*0x9eb+0x557*-0x5+-0x2e2),'u32');if(_0x317d3d)_0x485127[_0xe43233(0x986)+'a']=_0x2e21ac[_0xe43233(0xa2f)]('0x',(_0x317d3d>>>-0x119b*0x1+0x1*0x11d2+-0x5*0xb)[_0xe43233(0x69e)+'ing'](0xb21+0xfdc+-0x1aed*0x1));var _0x27265a=_0x1f676f(_0x4b83bb,-0x49b+0x1ad3+-0x3*0x750,0x516+0x1abc+0x8*-0x3fa);if(_0x27265a)_0x485127[_0xe43233(0x3ba)]=_0x27265a;return _0x485127;}return null;}var _0x120ae3='sakur'+'a-sw-'+_0x57da09(0x554),_0x3c71ff={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x5175a7=localStorage[_0x57da09(0x28c)+'em'](_0x120ae3);if(_0x5175a7)_0x3c71ff['fov']=Math['min'](0x2574+0xb9e*-0x3+-0x20e,Math['max'](-0x16b2+0xf7e+0x752,_0x2e21ac[_0x57da09(0x8fb)](parseFloat,_0x5175a7)||-0x1*-0x268c+-0x317*-0x5+0x35a5*-0x1));}catch(_0x319999){}function _0x54ad0c(){var _0x5da3f8=_0x57da09;if(_0x2e21ac[_0x5da3f8(0xd5b)]('QwjoA',_0x2e21ac['oaroM']))_0x213dae[_0x5da3f8(0x8a3)]=_0x56fab2?_0x59f518[_0x5da3f8(0xd98)]:_0x65825f[_0x5da3f8(0x332)],_0x267173['yaw']=_0x1a7278?_0x21de0f[_0x5da3f8(0x332)]:_0x2ab2db[_0x5da3f8(0xd98)],_0x2d7a0c[_0x5da3f8(0xcd3)]=_0x47212c?'a,b':_0x5da3f8(0x90b);else try{if(_0x5da3f8(0x786)===_0x5da3f8(0xda8)){if(!_0x1ac055()&&!_0x4ce588){if(_0x308cbf['el'])_0x5680d5['el']['style']['displ'+'ay']=_0x2e21ac['yoxIT'];return;}if(_0x51240b['el'])_0x51b409['el']['style']['displ'+'ay']='';var _0x48fd1a=_0x57e088[_0x5da3f8(0x82e)](_0x48110e&&_0x382592[_0x5da3f8(0xb5b)+_0x5da3f8(0x251)]||{})[_0x5da3f8(0x875)+'h'],_0x317a97=_0x29b634&&_0x461c80['esp']||null,_0x22514e=_0x317a97?_0x317a97[_0x5da3f8(0x7da)+'Count']||-0xce8+-0x7f9+0x14e1:0x26ca+0x2344+-0x4a0e,_0x3c8942=_0x317a97?_0x317a97[_0x5da3f8(0xbac)+'unt']||-0x61+0x1*0x22b5+-0x1*0x2254:0x113+0x2596+-0xce3*0x3,_0x39b042=_0x8520ad?_0x2e21ac['wzsIw']((_0x2d6902[_0x5da3f8(0x3df)+'r']['byteL'+_0x5da3f8(0xcb3)]/(-0x6*-0x16a95+0x5edb*0x16+-0x2994*0x4))['toFix'+'ed'](-0x4b*0x67+0x1*-0xb23+0x2950),'MB'):_0x5da3f8(0xc55)+'m',_0x4ba0ec=_0x2e21ac[_0x5da3f8(0x8b2)](_0x2e21ac['wzsIw'](_0x2e21ac[_0x5da3f8(0x2cf)](_0x2e21ac['RXMlN'](_0x2e21ac[_0x5da3f8(0x857)](_0x2e21ac['AmiNY']('v'+(_0x22e40b&&_0x2d3d14['versi'+'on']||_0x3b8af2),_0x2e21ac[_0x5da3f8(0xda6)])+(_0x2588c9&&_0x35ccda['hooks'+'Appli'+'ed']||-0x2095+0xc64+0x1431),'/')+(_0x5779c2&&_0x26b1d7[_0x5da3f8(0x655)+_0x5da3f8(0x665)]||0x33b*0x1+-0xa35*0x3+-0x2*-0xdb2),_0x5da3f8(0x211)+'s\x20'),_0x48fd1a)+('\x20\x20mem'+'\x20'),_0x39b042),_0x5da3f8(0x9c4)+_0x5da3f8(0x614))+_0x4cfab1;_0x5335ed['st'][_0x5da3f8(0x21a)+_0x5da3f8(0x1f5)+'t']=_0x4ba0ec;var _0x111ca9=_0x2c3af2['st2'];_0x111ca9&&(_0x111ca9[_0x5da3f8(0x21a)+_0x5da3f8(0x1f5)+'t']=_0x22514e>0x2*-0xee3+0x2091*-0x1+-0x1*-0x3e57?_0x5da3f8(0xde5)+_0x5da3f8(0x814)+_0x22514e+(_0x3c8942?_0x5da3f8(0xd6a)+_0x3c8942+_0x5da3f8(0x92e):'')+(_0x317a97&&_0x317a97['camer'+'a']?'\x20\x20cam'+'\x20'+_0x317a97['camer'+'aFrom']:_0x5da3f8(0x49a)+'\x20-'):'no\x20en'+_0x5da3f8(0x599)+_0x5da3f8(0x81e)+_0x5da3f8(0xbfe)+'y?)\x20\x20'+_0x5da3f8(0xca4)+(_0x317a97&&_0x317a97[_0x5da3f8(0x986)+'a']?_0x317a97[_0x5da3f8(0x986)+_0x5da3f8(0x572)]:'-'),_0x111ca9['style'][_0x5da3f8(0x34d)]=_0x22514e>-0x31*0x7+-0x1f31+0x2088?_0x5da3f8(0xaa8)+'a8':_0x2e21ac['uqqzr']);}else localStorage['setIt'+'em'](_0x120ae3,_0x2e21ac[_0x5da3f8(0xc23)](String,_0x3c71ff['fov']));}catch(_0x468803){}}var _0x1b111c=_0x2e21ac['CamyH'],_0x224d08=![];try{_0x2e21ac['WGMEa'](localStorage[_0x57da09(0x28c)+'em'](_0x1b111c),null)&&(localStorage[_0x57da09(0x7b7)+_0x57da09(0xba4)](_0x1b111c),_0x224d08=!![]);}catch(_0x5b6010){}var _0x429c43=0x169f+0x18a*0x14+0x353f*-0x1,_0x20d510=0x1*-0x2469+-0x19a4+0x3e29*0x1,_0x429c43=-0x1fad+0xb00+-0x1*-0x14d5,_0x20d510=0x1*-0x1153+-0x3a3+0x1512,_0x45f30f=-0xe17*0x1+0x13*-0x13d+-0x7*-0x566,_0x334d47={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0x33a4e8(_0x4d52f0){var _0x44bd63=_0x57da09;if(_0x2e21ac['chIxB']!=='BYBKm'){if(_0x2e21ac[_0x44bd63(0x95c)](_0x4d52f0,undefined)||_0x2e21ac[_0x44bd63(0xb7f)](_0x4d52f0,null))return undefined;if(_0x2e21ac[_0x44bd63(0x1e1)](typeof _0x4d52f0['val'],'funct'+'ion'))try{if(_0x2e21ac['LPVkf'](_0x44bd63(0x58c),'bXNjO')){_0x5c4f1b['cat']=_0x19a4f1,_0x2df229['syncs']=[];if(!_0x321275[_0x44bd63(0x720)])return;var _0x45073e=null;for(var _0x235d8d=0x5e9*0x5+-0x1ce4+-0xa9;_0x2e21ac[_0x44bd63(0x1fa)](_0x235d8d,_0x41bd23[_0x44bd63(0x875)+'h']);_0x235d8d++)if(_0x2e21ac['ksScV'](_0xa25db4[_0x235d8d]['id'],_0xc8450))_0x45073e=_0x42071f[_0x235d8d];_0x55efd5[_0x44bd63(0x9d8)]['textC'+'onten'+'t']=_0x2e21ac[_0x44bd63(0x87c)]+(_0x45073e&&_0x45073e['label']||'?');for(var _0x21d25d in _0x1df2e0[_0x44bd63(0x4eb)+'ns']){if(_0x185468[_0x44bd63(0x4eb)+'ns'][_0x21d25d]['class'+'List'])_0x1f162c['butto'+'ns'][_0x21d25d][_0x44bd63(0x8ca)+_0x44bd63(0x67c)]=_0x2e21ac['Unlql']+(_0x2e21ac[_0x44bd63(0x511)](_0x21d25d,_0x3efb47)?_0x44bd63(0x433)+'ve':'');}var _0x35b868=[];try{_0x35b868=_0x2e21ac['tGtUj'](_0x1a141c,_0x63a52d);}catch(_0x526100){_0x35b868=[];}while(_0x3cd65[_0x44bd63(0x720)]['first'+_0x44bd63(0xb50)])_0x2ae88e['cols'][_0x44bd63(0x7b7)+_0x44bd63(0x24f)+'d'](_0x4e5979['cols']['first'+_0x44bd63(0xb50)]);for(var _0x365c77=-0x7*0x524+0x25d6+-0xed*0x2;_0x365c77<_0x35b868[_0x44bd63(0x875)+'h'];_0x365c77++)_0x292185['cols']['appen'+_0x44bd63(0xd84)+'d'](_0x35b868[_0x365c77]);}else return _0x4d52f0['val']();}catch(_0x21d447){}if(typeof _0x4d52f0==='objec'+'t')return undefined;return _0x4d52f0;}else _0x786daf[_0x44bd63(0x554)]=_0x49be98,_0x20c85d();}function _0x3892aa(_0x1c4b41,_0x4e1307,_0x150dbc){var _0x2fb3fd=_0x57da09,_0x2f514b={'ZqrcF':function(_0x8b78ba,_0x56dd51){return _0x8b78ba+_0x56dd51;}};try{if(_0x2fb3fd(0x426)!==_0x2fb3fd(0x789)){var _0x250cf2=window['Unity'+_0x2fb3fd(0x8fd)+_0x2fb3fd(0xa7e)]&&window['Unity'+_0x2fb3fd(0x8fd)+'dkit'][_0x2fb3fd(0xa36)+'me'],_0x1cf2be=_0x202852||_0x250cf2&&_0x250cf2[_0x2fb3fd(0x7d0)+'ns']&&_0x250cf2[_0x2fb3fd(0x7d0)+'ns'][_0x2e21ac[_0x2fb3fd(0x5f9)](_0x250cf2[_0x2fb3fd(0x7d0)+'ns']['lengt'+'h'],0x707+-0x1*0x6d9+-0x9*0x5)];if(!_0x1cf2be||_0x2e21ac[_0x2fb3fd(0x703)](typeof _0x1cf2be['call'],_0x2fb3fd(0x827)+_0x2fb3fd(0xb69)))return _0x334d47['error'+'s'][_0x2fb3fd(0xc27)](_0x2fb3fd(0xd4a)+'ugin.'+_0x2fb3fd(0x3c5)),undefined;return _0x33a4e8(_0x1cf2be[_0x2fb3fd(0x3c5)](_0x1c4b41,_0x4e1307,_0x150dbc||[]));}else return _0x377d85[_0x2fb3fd(0xa6d)+_0x2fb3fd(0x4a5)]=![],_0x423eca[_0x2fb3fd(0x4e1)]=_0x2f514b[_0x2fb3fd(0xb00)]('pitch'+'\x20',_0x488131[_0x2fb3fd(0x3c3)](_0x21fff9))+(_0x2fb3fd(0xc9a)+_0x2fb3fd(0x690)+_0x2fb3fd(0xe3a)),null;}catch(_0x26fd9f){if(_0x2e21ac['WCTPq'](_0x334d47[_0x2fb3fd(0xdc3)+'s'][_0x2fb3fd(0x875)+'h'],-0x4e2*-0x7+-0x5*-0x34b+0x329f*-0x1))_0x334d47['error'+'s'][_0x2fb3fd(0xc27)](_0x2e21ac['IVFSU'](_0x2e21ac['daSmg'](_0x1c4b41+'.',_0x4e1307),':\x20')+_0x2e21ac[_0x2fb3fd(0x8a9)](String,_0x26fd9f&&_0x26fd9f[_0x2fb3fd(0x2e3)+'ge']||_0x26fd9f)[_0x2fb3fd(0xd92)](0x1c*0xd1+0x2540+-0x3c1c,-0x22c+-0x15*0x75+-0x6b*-0x1d));return undefined;}}function _0x32af5d(){var _0x6ca9c1=_0x57da09;if(_0x334d47[_0x6ca9c1(0x719)+'ch'])return _0x334d47[_0x6ca9c1(0x719)+'ch'];try{if('yCrYh'!==_0x6ca9c1(0x2fa))_0x45e085['sp']['textC'+'onten'+'t']=_0x2fb4d5['on']?_0x6ca9c1(0x9e5)+_0x6ca9c1(0x595):_0x2e21ac[_0x6ca9c1(0xcbe)],_0x37c936['sp'][_0x6ca9c1(0x21d)][_0x6ca9c1(0x302)+_0x6ca9c1(0x3c3)]=_0x38b71f['on']?_0xdabe47:_0x2e21ac[_0x6ca9c1(0x482)],_0x1c087d['sp']['style']['color']=_0x5b22dc['on']?'#2a0f'+'1b':_0x2e21ac[_0x6ca9c1(0x5c4)];else{var _0x4ed97f=window['Unity'+'WebMo'+_0x6ca9c1(0xa7e)]&&window[_0x6ca9c1(0xe0a)+'WebMo'+_0x6ca9c1(0xa7e)][_0x6ca9c1(0xa36)+'me'],_0x54f320=_0x202852||_0x4ed97f&&_0x4ed97f['plugi'+'ns']&&_0x4ed97f['plugi'+'ns'][_0x2e21ac[_0x6ca9c1(0x5e8)](_0x4ed97f[_0x6ca9c1(0x7d0)+'ns'][_0x6ca9c1(0x875)+'h'],-0x15c7+-0x9*-0xd9+0x1*0xe27)];if(!_0x54f320||typeof _0x54f320['mallo'+'c']!=='funct'+'ion')return _0x334d47[_0x6ca9c1(0xdc3)+'s'][_0x6ca9c1(0xc27)](_0x6ca9c1(0xd4a)+_0x6ca9c1(0x227)+_0x6ca9c1(0x5ef)+'c'),0xb4+-0x1c9+-0x1*-0x115;var _0x118a2b=_0x33a4e8(_0x54f320[_0x6ca9c1(0x5ef)+'c'](-0x7c*0xe+-0x49a+0x1*0xb82));if(typeof _0x118a2b!==_0x2e21ac[_0x6ca9c1(0xae3)]||!_0x2e21ac[_0x6ca9c1(0xb4d)](_0x118a2b,-0x1bfe+0x15cd*0x1+0x631))return _0x334d47[_0x6ca9c1(0xdc3)+'s'][_0x6ca9c1(0xc27)]('mallo'+_0x6ca9c1(0x494)+_0x6ca9c1(0xb3e)+'\x20'+_0x118a2b),-0x16e8*0x1+-0x1*0x1af6+0x31de;_0x334d47[_0x6ca9c1(0x719)+'ch']=_0x118a2b;}}catch(_0x1b4ec4){if(_0x334d47['error'+'s'][_0x6ca9c1(0x875)+'h']<0x7eb*0x1+-0x11ef*0x1+0xa0a)_0x334d47[_0x6ca9c1(0xdc3)+'s']['push'](_0x2e21ac[_0x6ca9c1(0xa8f)](_0x2e21ac['yhvTT'],_0x2e21ac[_0x6ca9c1(0x696)](String,_0x1b4ec4&&_0x1b4ec4[_0x6ca9c1(0x2e3)+'ge']||_0x1b4ec4)['slice'](-0x522+0x6b*0x19+-0x551,0x19a2*0x1+-0xadb*-0x2+-0x2efe)));return 0x71*0x1+0x2e8+-0x359;}return _0x334d47[_0x6ca9c1(0x719)+'ch'];}function _0x7102df(_0x487100){var _0x28ea20=_0x57da09,_0x2a0d11={'eeRWN':function(_0x3f1ab8,_0x17cd19){var _0x47f89f=_0xbe61;return _0x2e21ac[_0x47f89f(0xe5d)](_0x3f1ab8,_0x17cd19);},'RjDMg':_0x28ea20(0xc90)+_0x28ea20(0xca9)+'\x20','KaWEy':_0x2e21ac['WAWmv']};if(_0x2e21ac[_0x28ea20(0x4c3)](_0x28ea20(0x805),_0x2e21ac['Fyesq']))_0x2c1cf5['hooks'+'Resol'+'ved']===0x13b2+-0x2645*-0x1+0xd1*-0x47?_0xf5f509['warni'+_0x28ea20(0xaa0)]['push'](_0x2a0d11[_0x28ea20(0x2c2)](_0x2a0d11['eeRWN']('0\x20of\x20'+_0x2bd4e8['hooks'+_0x28ea20(0x665)]+('\x20hook'+_0x28ea20(0x8d9)+_0x28ea20(0xdd0)+_0x28ea20(0xaca)+_0x28ea20(0x2d8)+'UWMK.'+'\x20The\x20'+_0x28ea20(0x8ea)+'\x20pass'+'\x20')+(_0x28ea20(0xc33)+'once\x20'+_0x28ea20(0x278)+'g\x20Web'+_0x28ea20(0xafb)+'bly.i'+_0x28ea20(0x640)+_0x28ea20(0x9aa)+_0x28ea20(0x3e5)+_0x28ea20(0xdc5)+_0x28ea20(0x623)+_0x28ea20(0x7d0)+_0x28ea20(0x7dd)+_0x28ea20(0x8ae)+_0x28ea20(0x6ba)+'\x20'),'so\x20ho'+_0x28ea20(0x836)+_0x28ea20(0x748)+_0x28ea20(0x2ae)+_0x28ea20(0xab6)+'\x20it\x20a'+_0x28ea20(0x624)+'nored'+_0x28ea20(0xa71)+_0x28ea20(0xdf7)+_0x28ea20(0x293)+'f\x20the'+_0x28ea20(0xd55)+'.\x20'),_0x2a0d11[_0x28ea20(0x622)])+_0x7ad01b['hooks'+'Regis'+_0x28ea20(0xca9)+'AtArm']+_0x2a0d11[_0x28ea20(0x5fc)]):_0x55b051[_0x28ea20(0xa70)+'ngs'][_0x28ea20(0xc27)](_0x2a0d11[_0x28ea20(0x2c2)](_0x2a0d11['eeRWN'](_0x28ea20(0x996)+_0x28ea20(0x2bf)+'ved\x20',_0x48a69b[_0x28ea20(0x655)+_0x28ea20(0x52f)+_0x28ea20(0xabb)])+_0x28ea20(0x4c1),_0x462d43[_0x28ea20(0x655)+_0x28ea20(0x665)])+('\x20hook'+_0x28ea20(0x3a5)+_0x28ea20(0x956)+'able\x20'+'index'+_0x28ea20(0x6a3)+_0x28ea20(0x485)+_0x28ea20(0x8f4)+_0x28ea20(0xaf3)+_0x28ea20(0x98c)+'gnatu'+'re\x20')+(_0x28ea20(0xb3c)+',\x20Met'+_0x28ea20(0xd67)+_0x28ea20(0xddd)+'->\x20vo'+'id\x20do'+_0x28ea20(0x403)+_0x28ea20(0x9ca)+_0x28ea20(0x397)+_0x28ea20(0xdca)+_0x28ea20(0x7d8)));else{var _0x23fdbb=_0x487100[-0x7f9*0x4+0xbb*0x2+-0x52*-0x5f],_0x216186=_0x487100[-0x17a7+-0x62f*-0x2+-0x55*-0x22],_0x5633bb=_0x487100[0x1*-0xd52+-0xbad+0x25*0xad],_0x48832d=_0x487100[-0x80c*0x1+-0x24f9+0x2d08],_0xaa8964=_0x23fdbb*_0x23fdbb,_0x239480=_0x216186*_0x216186,_0xe209e8=_0x5633bb*_0x5633bb,_0x541e7e=_0x23fdbb*_0x216186,_0x74cf11=_0x23fdbb*_0x5633bb,_0x5a26df=_0x216186*_0x5633bb,_0x13e2e1=_0x48832d*_0x23fdbb,_0x50b28d=_0x2e21ac[_0x28ea20(0x2cb)](_0x48832d,_0x216186),_0x1e5b57=_0x2e21ac[_0x28ea20(0xa4b)](_0x48832d,_0x5633bb);return{'right':[0x1532+0x17a0+-0x2cd1-(0x1b9e+0x1*0x14cb+0x1*-0x3067)*_0x2e21ac[_0x28ea20(0xb16)](_0x239480,_0xe209e8),(-0x26cb*-0x1+0x1*0x23ab+-0x253a*0x2)*(_0x541e7e+_0x1e5b57),(-0x1157+0x19cf+-0x2*0x43b)*(_0x74cf11-_0x50b28d)],'up':[_0x2e21ac[_0x28ea20(0x34c)](-0xd06*0x2+-0x1724+-0x2*-0x1899,_0x541e7e-_0x1e5b57),-0x1*-0x1673+0x86d+-0x1edf-_0x2e21ac['tHmAZ'](0x1*-0x653+0xc3b+-0x5e6,_0xaa8964+_0xe209e8),_0x2e21ac[_0x28ea20(0x416)](-0x136a*0x1+-0x1033+0x239f,_0x5a26df+_0x13e2e1)],'fwd':[(0x12ee+-0x146f*-0x1+-0x193*0x19)*_0x2e21ac[_0x28ea20(0xca0)](_0x74cf11,_0x50b28d),_0x2e21ac[_0x28ea20(0x202)](-0x1*0x23b1+0x5*-0xe5+0x282c,_0x5a26df-_0x13e2e1),0x13e8+-0x1*0x146+-0x12a1-_0x2e21ac[_0x28ea20(0x202)](0x193d+-0x24c4+0xb89,_0x2e21ac[_0x28ea20(0x612)](_0xaa8964,_0x239480))]};}}var _0x174ae1=0x479*-0x4+0x15d5+-0x3d3;function _0xa58afc(_0x49f5be){var _0x725520=_0x57da09;_0x334d47['ok']=![],_0x334d47['why']=_0x49f5be,_0x334d47[_0x725520(0x5e1)+'s']++;if(_0x2e21ac['qpQCn'](_0x334d47[_0x725520(0x5e1)+'s'],_0x174ae1)){if(_0x725520(0x318)===_0x2e21ac['rnkbj'])_0x3303db['__ppL'+'ogged']=-0x130d*0x2+0x30*0xb7+0x3cb,_0x164f6d['log'](_0x2e21ac['mWGgq'](_0x2e21ac[_0x725520(0xe5d)](_0x2e21ac[_0x725520(0xb2b)](_0x2e21ac['APnLN'],_0x490edc[_0x725520(0x875)+'h'])+(_0x725520(0xd3d)+'h=')+_0x9803e4[_0x725520(0x45b)+'ed'](-0x1b70+-0xb77*-0x2+0x484*0x1)+_0x2e21ac[_0x725520(0xb8a)]+_0x128d6d[_0x725520(0x45b)+'ed'](0xb2f*-0x1+0x2291+-0x58*0x44),_0x725520(0xa80)+'n=')+_0x324676,'\x20samp'+_0x725520(0x308))+_0x3130d2['strin'+'gify'](_0x2d18af['slice'](0x2a1*0xd+-0x125*-0x11+-0x1ad1*0x2,-0x1f*0x8b+-0x1c*0xa2+0x1*0x228f)));else return _0x334d47['quat']=null,_0x334d47[_0x725520(0x561)]=null,_0x334d47[_0x725520(0x218)]=null,_0x334d47;}return _0x334d47['stale']++,_0x334d47;}function _0x4dcb6b(){var _0x39777a=_0x57da09;_0x334d47[_0x39777a(0xd06)]++,_0x334d47[_0x39777a(0x5e1)+'s']=0xc7*-0x1d+-0x1ef3+0x1*0x357e;var _0x4c5c2c=_0x2e21ac[_0x39777a(0x779)](_0xc38dd6),_0x3e0a17=_0x4c5c2c&&_0x4c5c2c['mouse'+'Look']?parseInt(_0x4c5c2c['mouse'+'Look'],0x2640+-0xad9*-0x2+-0x3be2):_0xada6b2;if(!_0x3e0a17)return _0x2e21ac[_0x39777a(0xc23)](_0xa58afc,_0x39777a(0xb09)+_0x39777a(0x6e9)+'ok\x20in'+_0x39777a(0x589)+'e');if(_0xada6b2!==_0x3e0a17)_0xada6b2=_0x3e0a17;var _0x37cec8=_0x2352d3(_0x3e0a17+_0x45f30f,_0x39777a(0x25a));if(_0x2e21ac[_0x39777a(0xb75)](typeof _0x37cec8,_0x39777a(0x6e4)+'r')||!_0x2e21ac[_0x39777a(0xdc7)](_0x37cec8,-0x183b+0x1*-0x1959+-0x29c*-0x13))return _0xa58afc(_0x2e21ac['XmfKK']);_0x334d47[_0x39777a(0xcbd)+'r']=_0x37cec8;var _0x499417=_0x3892aa(_0x2e21ac['QXmcf'],_0x39777a(0xcb8)+_0x39777a(0x651)+_0x39777a(0x48d),[_0x37cec8]);if(_0x2e21ac[_0x39777a(0xdd9)](typeof _0x499417,_0x39777a(0x6e4)+'r')||!(_0x499417>0x4*-0x574+-0x1e05+0x1147*0x3))return _0x334d47[_0x39777a(0xb22)]=-0x7*0x389+-0xe4d*-0x1+0xa72,_0xa58afc(_0x2e21ac[_0x39777a(0x76a)]+_0x499417);_0x334d47['tfPtr']=_0x499417;var _0x475c42=_0x32af5d();if(!_0x475c42)return _0xa58afc(_0x2e21ac[_0x39777a(0xd49)]);var _0x37cc17=_0x3892aa(_0x39777a(0x448)+'a',_0x2e21ac[_0x39777a(0xe32)],[_0x37cec8]);if(_0x2e21ac[_0x39777a(0x239)](typeof _0x37cc17,_0x39777a(0x6e4)+'r')&&_0x2e21ac[_0x39777a(0xabf)](isFinite,_0x37cc17)&&_0x2e21ac[_0x39777a(0xdc7)](_0x37cc17,0x581+-0x239d+0x1e1d)&&_0x37cc17<0x6*0x43f+-0x2*0x1192+0xa5d)_0x334d47[_0x39777a(0x554)]=_0x37cc17;_0x3892aa(_0x39777a(0xb56)+_0x39777a(0x699),_0x2e21ac[_0x39777a(0xb67)],[_0x475c42,_0x499417]);var _0x3d5260=[_0x2352d3(_0x475c42,_0x39777a(0x550)),_0x2e21ac[_0x39777a(0x47d)](_0x2352d3,_0x475c42+(-0x12f6+-0xe2*0x8+0x25e*0xb),'f32'),_0x2e21ac['iYGvX'](_0x2352d3,_0x475c42+(-0x12d2+0x52c*0x1+-0x11*-0xce),_0x39777a(0x550)),_0x2352d3(_0x475c42+(-0x13d0+0x32*0x4c+0x504),_0x2e21ac[_0x39777a(0x99a)])],_0x2f0ad0=0x25af+0x8*0xbf+-0x2ba7;for(var _0x468ec9=0x1*0xa76+0x3*-0x23f+0x3b9*-0x1;_0x468ec9<-0x121*-0x3+-0xaef+-0xb*-0xb0;_0x468ec9++)_0x2f0ad0+=_0x2e21ac[_0x39777a(0xa4b)](_0x3d5260[_0x468ec9],_0x3d5260[_0x468ec9]);_0x2f0ad0=Math[_0x39777a(0x215)](_0x2f0ad0);var _0x363dcc=isFinite(_0x2f0ad0)&&Math[_0x39777a(0xa75)](_0x2f0ad0-(-0x170e*-0x1+0x1ea0+-0x97*0x5b))<-0x966+-0x26a0+0x3006+0.02;_0x3892aa(_0x2e21ac[_0x39777a(0xb25)],_0x39777a(0x617)+_0x39777a(0x787)+'on',[_0x475c42,_0x499417]);var _0x53c23a=_0x2352d3(_0x475c42,_0x2e21ac[_0x39777a(0x99a)]),_0x2d4b78=_0x2352d3(_0x475c42+(0x1*0x1f20+0x67a+-0x2596),_0x2e21ac['nlVRQ']),_0x2118a8=_0x2e21ac[_0x39777a(0xa13)](_0x2352d3,_0x475c42+(0x1ba7+-0x2433*0x1+0x894),_0x39777a(0x550));_0x334d47['pos']=_0x2e21ac['ysHHK'](typeof _0x53c23a,_0x39777a(0x6e4)+'r')&&typeof _0x2d4b78===_0x39777a(0x6e4)+'r'&&typeof _0x2118a8==='numbe'+'r'&&isFinite(_0x53c23a)&&isFinite(_0x2d4b78)&&isFinite(_0x2118a8)&&Math[_0x39777a(0xa75)](_0x53c23a)<0x87e4+-0xb*-0xad+0xf74d&&_0x2e21ac['QcXOl'](Math[_0x39777a(0xa75)](_0x2d4b78),0x1ed55+0x140ae+-0x2f0b*0x9)&&Math[_0x39777a(0xa75)](_0x2118a8)<0x8e*-0x259+-0x3b22+0x30f20?[_0x53c23a,_0x2d4b78,_0x2118a8]:null,_0x334d47[_0x39777a(0x485)+'ed']++;if(_0x363dcc)return _0x334d47[_0x39777a(0xdc6)]=_0x3d5260,_0x334d47[_0x39777a(0x561)]=_0x7102df(_0x3d5260),_0x334d47['ok']=!![],_0x334d47['why']='',_0x334d47['sourc'+'e']=_0x2e21ac['aAuJa'],_0x334d47;_0x334d47[_0x39777a(0xdc6)]=null,_0x334d47[_0x39777a(0x561)]=null;if(_0x334d47['fov']!==null){if(_0x2e21ac[_0x39777a(0x536)]('HudOC',_0x2e21ac[_0x39777a(0xab3)]))_0x281577['warni'+'ngs']['push'](_0x2e21ac['NumWn'](_0x2e21ac[_0x39777a(0xdb3)]+('repla'+'ced\x20b'+_0x39777a(0x8b8)+'iffer'+_0x39777a(0xa66)+'nstan'+_0x39777a(0x242)+_0x39777a(0x5b7)+'are\x20a'+'sking'+_0x39777a(0x290)+'wrong'+'\x20obje'+'ct\x20fo'+'r\x20')+('the\x20g'+'ame\x20w'+'hile\x20'+_0x39777a(0x9fa)+_0x39777a(0xa56)+_0x39777a(0x2eb)+'\x20it\x20i'+_0x39777a(0xe15)+_0x39777a(0x369)+_0x39777a(0xe2f)+_0x39777a(0x423)+_0x39777a(0x5f1)+'\x20othe'+'r\x20'),_0x39777a(0x50e)+'a/UWM'+_0x39777a(0x64c)+_0x39777a(0xe51)+'n\x20Tam'+_0x39777a(0x9ea)+_0x39777a(0xdff)+_0x39777a(0x4b1)+_0x39777a(0x404)+_0x39777a(0x7a0)+'.'));else return _0x334d47['ok']=!![],_0x334d47['sourc'+'e']='camer'+'a\x20fov'+'\x20only',_0x334d47[_0x39777a(0x4e1)]=_0x2e21ac[_0x39777a(0x530)](_0x2e21ac['thVvo']+Math[_0x39777a(0x3c3)](_0x2e21ac['JtbZU'](_0x2f0ad0,-0x15c8+0x1a7b+-0xcb))/(0x26e*0x6+0x1*-0x15a6+-0x232*-0x5),_0x2e21ac[_0x39777a(0xb85)]),_0x334d47;}return _0x334d47['ok']=![],_0x334d47['sourc'+'e']=null,_0x334d47['why']=_0x2e21ac[_0x39777a(0x7d7)](_0x2e21ac[_0x39777a(0x612)](_0x2e21ac['thVvo'],Math['round'](_0x2f0ad0*(0x6f0+0x17ca+-0x1ad2))/(-0x10c0+0x5*-0x3f3+0x2867)),_0x2e21ac[_0x39777a(0x56e)]),_0x334d47;}function _0x540ec0(){var _0x355c2c=_0x57da09,_0x2ab292={'gcedi':function(_0x141073,_0x15aaac){return _0x2e21ac['jXsHo'](_0x141073,_0x15aaac);}};if('tSuzU'!==_0x355c2c(0x470)){var _0x5cd97e=arguments[_0x5217dd];if(_0x2ab292['gcedi'](typeof _0x5cd97e,'strin'+'g'))_0x4560fe+=_0x5cd97e;else{if(_0x5cd97e&&_0x5cd97e[_0x355c2c(0x2e3)+'ge'])_0x1eb471+=_0x5cd97e[_0x355c2c(0x2e3)+'ge'];}}else{if(_0x334d47[_0x355c2c(0xd06)])return _0x334d47;return _0x4dcb6b();}}var _0xfbef9f={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+_0x57da09(0x6e9)+_0x57da09(0xce5)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x37f275(_0x276ea9){var _0x134238=_0x57da09,_0x56d296=null,_0x9aceef=0xd*-0x191+-0x1*0xa6d+0x1eca;for(var _0x20f026 in _0x4ebfc2){if(_0x2e21ac['WLtdJ']!==_0x2e21ac[_0x134238(0x597)]){var _0x2b1d95=_0x4ebfc2[_0x20f026];if(!_0x2b1d95[_0x134238(0x4df)]||_0x2b1d95['last']===null)continue;var _0x2691ef=_0x2e21ac['pNUOy'](_0x2352d3,_0x2e21ac[_0x134238(0xa7b)](_0xada6b2,_0x276ea9),_0x134238(0x550));if(typeof _0x2691ef!==_0x2e21ac['OaWkV'])continue;_0x2e21ac[_0x134238(0xa95)](Math[_0x134238(0xa75)](_0x2b1d95['last']-_0x2691ef),-0x89a*-0x3+0x1*0x1f9d+-0x396b+0.001)&&_0x2b1d95[_0x134238(0x4df)]>_0x9aceef&&(_0x56d296=_0x20f026,_0x9aceef=_0x2b1d95['hits']);}else _0x1ea007();}return _0x56d296;}function _0x13da02(_0x40c4a6){var _0x1a80dc=_0x57da09,_0x419d11={'MiZNP':function(_0x36eabc,_0x45dc45){var _0x392fdb=_0xbe61;return _0x2e21ac[_0x392fdb(0x994)](_0x36eabc,_0x45dc45);},'XXiKb':function(_0x3eb4db,_0x3c23be){return _0x3eb4db!==_0x3c23be;},'GkwpU':function(_0x2d07fa,_0x28a7e7){return _0x2d07fa-_0x28a7e7;},'HqsRz':function(_0x491a84,_0x493d45,_0x1014ef,_0x3c897a){var _0x2d483e=_0xbe61;return _0x2e21ac[_0x2d483e(0x740)](_0x491a84,_0x493d45,_0x1014ef,_0x3c897a);},'hxKIW':function(_0x191c2f,_0x8eaf97){return _0x191c2f===_0x8eaf97;},'CrGry':_0x1a80dc(0xc15),'kNvRs':function(_0x1547dd,_0x49d7bc){var _0xa8ec65=_0x1a80dc;return _0x2e21ac[_0xa8ec65(0x7ec)](_0x1547dd,_0x49d7bc);},'DhbHS':function(_0x489bb9,_0x255e26){return _0x489bb9^_0x255e26;},'xKAGk':'obfF','zGEpZ':function(_0x46657e,_0x1cbaea){return _0x46657e|_0x1cbaea;}};if(_0x1a80dc(0x9e8)!==_0x2e21ac[_0x1a80dc(0xe53)]){var _0x434c61=[],_0xed41e6=_0xe29e80[_0x1a80dc(0x749)+'Look']||[];for(var _0x86903c in _0x4ebfc2){if(_0x2e21ac[_0x1a80dc(0x6a2)](_0x2e21ac['hmfwt'],_0x1a80dc(0x200))){var _0x570ebe=_0x4ebfc2[_0x86903c];if(!_0x570ebe[_0x1a80dc(0x4df)])continue;var _0x44f074=null;for(var _0x39fa82=-0x1*0x94f+0x1*-0xaf1+-0x1b*-0xc0;_0x2e21ac['lmCUs'](_0x39fa82,_0xed41e6[_0x1a80dc(0x875)+'h']);_0x39fa82++){if(_0x1a80dc(0x4e8)===_0x1a80dc(0x4e8)){if(_0xed41e6[_0x39fa82][-0x21f1+-0xe91+0x3083]!==_0x1a80dc(0x550))continue;var _0x5b6220=_0x2352d3(_0x40c4a6+_0xed41e6[_0x39fa82][0x23a+0x9a*0x4+0x1*-0x4a2],_0x2e21ac[_0x1a80dc(0x99a)]);if(_0x2e21ac['LORMV'](typeof _0x5b6220,'numbe'+'r')&&_0x2e21ac['SXKjE'](Math['abs'](_0x5b6220-_0x570ebe['last']),-0xb*-0x33d+0xfb*0x19+0xb3*-0x56+0.001)){if(_0x2e21ac[_0x1a80dc(0x95c)](_0x2e21ac['tGAXk'],_0x1a80dc(0x990))){_0x44f074='0x'+_0xed41e6[_0x39fa82][0xc65+-0x1*-0xbe0+0x13*-0x147]['toStr'+_0x1a80dc(0x710)](0x1bc7+0x21b*-0xe+-0xb*-0x29);break;}else{var _0x4242ee=_0xcaf376[_0x1a80dc(0x285)]();if(_0x419d11[_0x1a80dc(0x4ee)](typeof _0x4242ee,_0x1a80dc(0x6e4)+'r')&&_0x3b6532(_0x4242ee)){if(_0x388823['lo']===null||_0x4242ee<_0x8af052['lo'])_0x2998ee['lo']=_0x4242ee;if(_0x419d11[_0x1a80dc(0x4ee)](_0x358c3b['hi'],null)||_0x4242ee>_0x7ee631['hi'])_0x557bd9['hi']=_0x4242ee;if(_0x419d11['XXiKb'](_0x555938['last'],null)){var _0x4737bd=_0x110b31['abs'](_0x419d11[_0x1a80dc(0xd3b)](_0x4242ee,_0xfec95f['last']));if(_0x4737bd>_0x59a4ce[_0x1a80dc(0x40c)])_0x12e228[_0x1a80dc(0x40c)]=_0x4737bd;}_0x172e59[_0x1a80dc(0x98b)]=_0x4242ee;}_0x2593a2[_0x1a80dc(0x4df)]++;if(_0x661a1e[0x3*-0x926+-0x26f4+-0x4267*-0x1]&&typeof _0x1d6906[-0x2411+0x147+0x22cb]['val']===_0x1a80dc(0x827)+_0x1a80dc(0xb69)){var _0x2d5bf7=_0x201fd9[-0x1dce+0x240+0x11*0x19f][_0x1a80dc(0x285)]();if(_0x2d5bf7)_0x168bc5=_0x2d5bf7;}}}}else _0x12e2c7=_0x3a1caa,_0x16ad9b=_0x5d4d25['c'][_0x397127];}_0x434c61[_0x1a80dc(0xc27)]({'name':_0x86903c,'value':_0x570ebe['last'],'matches':_0x44f074,'hits':_0x570ebe['hits'],'lo':_0x570ebe['lo'],'hi':_0x570ebe['hi'],'travel':_0x2e21ac[_0x1a80dc(0xafe)](_0x570ebe['lo'],null)?-0xd*0x60+0x1*-0x1f5c+0x243c*0x1:Math[_0x1a80dc(0x3c3)]((_0x570ebe['hi']-_0x570ebe['lo'])*(-0x17b3+-0x179b+0xb*0x456))/(-0x11d*-0x23+-0x486+-0x220d),'jump':Math[_0x1a80dc(0x3c3)](_0x570ebe[_0x1a80dc(0x40c)]*(-0x2412+-0x2295+0x470b))/(-0xa7a+-0x6c9+0x11a7*0x1),'set':_0x570ebe['setHi'+'ts']?_0x570ebe[_0x1a80dc(0x9ce)+'st']:null});}else{var _0x328f78=_0x25655f[_0x2376fa],_0x23801c=_0x419d11['HqsRz'](_0x2dad3b,_0x233046,_0x248ab7,_0x328f78[_0x1a80dc(0x33a)]);if(!_0x23801c)return![];var _0x4c0f22=new _0x2d4066(_0x23801c[_0x1a80dc(0x3df)+'r'],_0x23801c[_0x1a80dc(0xb94)+'ffset'],_0x23801c[_0x1a80dc(0x46b)+_0x1a80dc(0xcb3)]),_0x24b705=_0x328f78[_0x1a80dc(0x22f)+'pe']==='u8'?_0x4c0f22['getUi'+'nt8'](_0x328f78[_0x1a80dc(0xb6b)]):_0x4c0f22['getIn'+_0x1a80dc(0x66b)](_0x328f78['key'],!![]),_0x4eec2d;if(_0x419d11[_0x1a80dc(0xd0f)](_0x10c913,_0x1a80dc(0x633)))_0x4eec2d=_0x47e6e6(_0x4e31b7);else{if(_0x45e7ec===_0x419d11[_0x1a80dc(0x338)])_0x4eec2d=_0x59bdc0|-0x171c+-0x13f9+0x2b15*0x1;else _0x4eec2d=(_0x210356?0x1af*0x9+-0x966+-0x5c0*0x1:-0x1b05+-0xcab*-0x1+-0xa7*-0x16)&0x195d+-0x192b+0xcd;}return _0x5b17a2(_0x419d11['kNvRs'](_0x5b3330,_0x1f45d6)+_0x328f78[_0x1a80dc(0xc73)+'n'],_0x1a80dc(0x25a),_0x419d11['DhbHS'](_0x4eec2d,_0x24b705))&&_0x32f621(_0x524523+_0x6e79e1+_0x328f78[_0x1a80dc(0x8ce)],_0x1c8ffb==='obfF'?'f32':_0x1d7c39==='obfI'?_0x1a80dc(0x25a):'u8',_0x352ff4===_0x419d11['xKAGk']?_0x1f2868:_0x12a92e===_0x1a80dc(0xc15)?_0x419d11[_0x1a80dc(0x808)](_0x3c4802,-0x1fee+0xccc+0x1322):_0x1a5db0?0x12*-0x1fb+0x1425+0xf82:0x13e8+-0x3d9*0x7+-0x1*-0x707)&&_0x5c89e5(_0x419d11['kNvRs'](_0x5f3efe+_0x24397a,_0x328f78[_0x1a80dc(0x6fb)+'e']),'u8',0xb1e*-0x3+0x222a+0x1*-0xd0);}}return _0x434c61;}else return _0x1a2aac();}function _0x51e211(){var _0x280b3e=_0x57da09,_0x2f8d14=_0xc38dd6();if(!_0x2f8d14||!_0x2f8d14[_0x280b3e(0x73c)+'Look'])return _0xfbef9f['ident'+'ified']=![],_0xfbef9f[_0x280b3e(0x4e1)]=_0x280b3e(0xb09)+_0x280b3e(0x6e9)+'ok\x20ye'+'t',null;var _0x3c201f=_0x2e21ac[_0x280b3e(0xcd8)](parseInt,_0x2f8d14[_0x280b3e(0x73c)+'Look'],-0x16dc+0x2018+0x92c*-0x1);if(_0xada6b2!==_0x3c201f)_0xada6b2=_0x3c201f;_0xfbef9f['gette'+'rs']=_0x2e21ac[_0x280b3e(0xabf)](_0x13da02,_0x3c201f);var _0x31a5b5=_0x2e21ac[_0x280b3e(0xab9)](_0x2b23f1),_0x4af38b=-0x98e+0x114a+-0x7bb,_0x563d04=0x237a+0x1*0x34b+-0x7*0x57d;function _0x15059b(_0x578bf5){var _0x1b8036=_0x280b3e;return _0x2e21ac['QIyEm'](_0x578bf5['lo'],null)||_0x2e21ac[_0x1b8036(0xbc7)](_0x578bf5['hi'],null)?0x1*0xc75+0xb8*-0xe+-0x265*0x1:_0x2e21ac[_0x1b8036(0xdf0)](_0x578bf5['hi'],_0x578bf5['lo']);}var _0x439ad7=null;for(var _0x11b9b in _0x4ebfc2){var _0x3e6e54=_0x4ebfc2[_0x11b9b];if(!_0x3e6e54['hits']||_0x2e21ac[_0x280b3e(0x9a1)](_0x3e6e54['last'],null))continue;if(_0x15059b(_0x3e6e54)<_0x4af38b)continue;if(_0x2e21ac[_0x280b3e(0xa96)](_0x3e6e54[_0x280b3e(0x40c)],_0x563d04))continue;var _0x1be71f=_0x2e21ac[_0x280b3e(0xe57)](_0x2352d3,_0x2e21ac[_0x280b3e(0xd83)](_0xada6b2,_0x429c43),_0x280b3e(0x550));if(_0x2e21ac[_0x280b3e(0xdd9)](typeof _0x1be71f,_0x280b3e(0x6e4)+'r')||Math[_0x280b3e(0xa75)](_0x2e21ac[_0x280b3e(0xdf0)](_0x3e6e54[_0x280b3e(0x98b)],_0x1be71f))>=0x4fa*-0x7+0x8c1+0x1*0x1a15+0.001)continue;if(!_0x439ad7||_0x3e6e54['hits']>_0x4ebfc2[_0x439ad7][_0x280b3e(0x4df)])_0x439ad7=_0x11b9b;}var _0x1b90bc=null;for(var _0x435100 in _0x4ebfc2){if(_0x435100===_0x439ad7)continue;var _0x58fbab=_0x4ebfc2[_0x435100];if(!_0x58fbab['hits']||_0x58fbab['last']===null)continue;if(_0x2e21ac[_0x280b3e(0x1fa)](_0x15059b(_0x58fbab),_0x4af38b))continue;if(_0x58fbab[_0x280b3e(0x40c)]>_0x563d04)continue;if(_0x58fbab['last']>=-(0x1951+0x2064+-0x395b)&&_0x58fbab['last']<=-0x13c9+0x208d+-0x7*0x1c6){if(_0x280b3e(0x54d)==='KyqCX'){if(_0x33cdab[_0x2a12c9][_0x280b3e(0x898)+_0x280b3e(0xe19)+'dow'])_0x21d10d[_0x36f3e9][_0x280b3e(0x898)+_0x280b3e(0xe19)+'dow'][_0x280b3e(0xb59)+_0x280b3e(0xbfd)+'e'](_0x220c64,'*');}else{_0x1b90bc=_0x435100;break;}}}_0xfbef9f[_0x280b3e(0x20d)+_0x280b3e(0x795)]=_0x439ad7,_0xfbef9f[_0x280b3e(0x8a3)+'Gette'+'r']=_0x1b90bc;var _0x4cb6d3,_0x2adda3;if(_0x31a5b5&&_0x31a5b5[_0x280b3e(0x8a3)]!==null)_0x2adda3=_0x31a5b5['pitch'],_0x4cb6d3=_0x31a5b5[_0x280b3e(0xb17)],_0xfbef9f[_0x280b3e(0x968)+'e']=_0x280b3e(0xcd9)+_0x280b3e(0x454)+_0x280b3e(0x1e3)+_0x31a5b5[_0x280b3e(0xcd3)]+')';else _0x439ad7?(_0x4cb6d3=_0x4ebfc2[_0x439ad7][_0x280b3e(0x98b)],_0xfbef9f['sourc'+'e']=_0x280b3e(0x527)+'r',_0x2adda3=_0x1b90bc?_0x4ebfc2[_0x1b90bc][_0x280b3e(0x98b)]:_0x2352d3(_0x3c201f+_0x20d510,'f32')):(_0x4cb6d3=_0x2352d3(_0x2e21ac[_0x280b3e(0x868)](_0x3c201f,_0x429c43),'f32'),_0x2adda3=_0x2e21ac[_0x280b3e(0x73e)](_0x2352d3,_0x3c201f+_0x20d510,_0x2e21ac[_0x280b3e(0x99a)]),_0xfbef9f['sourc'+'e']=_0x280b3e(0x575)+'\x200x28'+_0x280b3e(0xb1a)+_0x280b3e(0x80a));_0xfbef9f['rawYa'+'w']=_0x4cb6d3,_0xfbef9f['rawPi'+_0x280b3e(0xcb0)]=_0x2adda3;if(_0x2e21ac[_0x280b3e(0x42f)](typeof _0x4cb6d3,'numbe'+'r')||!_0x2e21ac['KMcSM'](isFinite,_0x4cb6d3)||_0x2e21ac[_0x280b3e(0x536)](typeof _0x2adda3,_0x280b3e(0x6e4)+'r')||!_0x2e21ac['fpjIi'](isFinite,_0x2adda3))return _0xfbef9f[_0x280b3e(0xa6d)+_0x280b3e(0x4a5)]=![],_0xfbef9f[_0x280b3e(0x4e1)]=_0x2e21ac['YBquD'],null;if(_0x2adda3<-(-0xe12+0x1*-0x3d+0xea9)||_0x2adda3>0x1*0x268f+0x2c3*0x2+-0x2bbb)return _0xfbef9f[_0x280b3e(0xa6d)+_0x280b3e(0x4a5)]=![],_0xfbef9f[_0x280b3e(0x4e1)]=_0x2e21ac[_0x280b3e(0x9db)]+Math['round'](_0x2adda3)+_0x2e21ac['oWihn'],null;return _0xfbef9f['why']='',_0xfbef9f[_0x280b3e(0xa6d)+_0x280b3e(0x4a5)]=!![],_0xfbef9f['pitch']=_0x2adda3,_0xfbef9f['yaw']=_0x4cb6d3,_0xfbef9f;}function _0x11e3e1(_0x3b8da1,_0x29ac44,_0x532330,_0x11d7da){var _0xc58e20=_0x57da09,_0x249c29=_0x540ec0(),_0x59cd61=null,_0x4f7ec3=_0x3b8da1,_0x6dea96=_0x3c71ff[_0xc58e20(0x554)];if(_0x249c29[_0xc58e20(0x561)]){if('jSDlA'==='jSDlA'){_0x59cd61=_0x249c29[_0xc58e20(0x561)];if(_0x249c29[_0xc58e20(0x218)])_0x4f7ec3=_0x249c29['pos'];if(_0x2e21ac['uSLPJ'](_0x249c29['fov'],null))_0x6dea96=_0x249c29['fov'];}else{var _0x416f68=(_0xc58e20(0x806)+_0xc58e20(0xd31)+_0xc58e20(0xd72)+_0xc58e20(0xd62))['split']('|'),_0x47c969=0x1cc+0x205a+-0x2226;while(!![]){switch(_0x416f68[_0x47c969++]){case'0':_0x1f13b9['body']['appen'+_0xc58e20(0xd84)+'d'](_0x566192);continue;case'1':if(!_0x544261[_0xc58e20(0xd40)]||!_0x193c70[_0xc58e20(0xd40)][_0xc58e20(0xac2)+_0xc58e20(0xd84)+'d'])return null;continue;case'2':return _0x3b9143;case'3':_0x566192['id']=_0xc58e20(0x781)+'a-esp';continue;case'4':var _0x566192=_0xf1d045[_0xc58e20(0x843)+'eElem'+_0xc58e20(0xbe3)](_0xc58e20(0xda1));continue;case'5':_0x566192['inner'+'HTML']=_0x2e21ac[_0xc58e20(0xb0c)]+(_0xc58e20(0x951)+_0xc58e20(0xa82)+_0xc58e20(0x8ff)+'-esp-'+_0xc58e20(0x7d4)+'tyle='+'\x22text'+'-alig'+'n:cen'+'ter\x22>'+_0xc58e20(0x626)+'>');continue;case'6':_0x566192[_0xc58e20(0x21d)][_0xc58e20(0x2fb)+'xt']=_0x2e21ac[_0xc58e20(0x980)]('posit'+_0xc58e20(0x2f7)+_0xc58e20(0x6cd)+'right'+':12px'+';top:'+_0xc58e20(0x7be)+_0xc58e20(0x38a)+_0xc58e20(0x280)+'47483'+_0xc58e20(0x82b)+_0xc58e20(0x33e)+'r-eve'+_0xc58e20(0xd2d)+'one;'+_0x2e21ac[_0xc58e20(0x33f)]+_0x2e21ac[_0xc58e20(0xdf2)],'user-'+_0xc58e20(0x9c3)+'t:non'+'e;-we'+_0xc58e20(0xc9f)+_0xc58e20(0x7f7)+_0xc58e20(0x9c3)+'t:non'+'e;');continue;case'7':if(!_0x21ec01['cv']||!_0x37c298['cv']['getCo'+_0xc58e20(0xc93)])_0x47a1d6=_0x1edc18;continue;case'8':var _0x1edc18={'cv':{'getContext':function(){return null;}},'el':_0x566192};continue;case'9':_0x31d1f9={'el':_0x566192,'cv':_0x566192[_0xc58e20(0x594)+_0xc58e20(0xd85)+'tor'](_0x2e21ac[_0xc58e20(0xb97)]),'lg':_0x566192[_0xc58e20(0x594)+_0xc58e20(0xd85)+_0xc58e20(0xaa1)](_0x2e21ac[_0xc58e20(0x70e)])};continue;}break;}}}var _0x517367,_0x1401a6,_0x537a23,_0x28ec22,_0xc74d31,_0x5c89b8,_0xfc62d9,_0x2b8543,_0x254221;if(_0x59cd61){if(_0x2e21ac[_0xc58e20(0xd5b)](_0x2e21ac[_0xc58e20(0xa50)],_0x2e21ac[_0xc58e20(0x2ec)])){var _0x6f185b=(_0xc58e20(0x23f)+_0xc58e20(0x7c7)+_0xc58e20(0x83e)+'|3')['split']('|'),_0x506faa=-0x1*-0x1e9a+-0x489+0x1a11*-0x1;while(!![]){switch(_0x6f185b[_0x506faa++]){case'0':_0x28ec22=_0x59cd61[_0xc58e20(0xcef)][0x44*0x8+0x1e9f+-0x1*0x20bf];continue;case'1':_0xfc62d9=_0x59cd61['up'][0x372+0xd1*0x19+-0x17db*0x1];continue;case'2':_0x5c89b8=_0x59cd61[_0xc58e20(0xcef)][0x3*0x409+-0x1*-0x1357+-0x1f70];continue;case'3':_0x254221=_0x59cd61['up'][0x1828+-0x1*0x221d+-0x9f7*-0x1];continue;case'4':_0x517367=_0x59cd61[_0xc58e20(0x9d3)][0x11e1*0x1+0x1*0x1eb8+-0x3099];continue;case'5':_0xc74d31=_0x59cd61[_0xc58e20(0xcef)][0x2664+0xc1a*-0x1+0x8c3*-0x3];continue;case'6':_0x537a23=_0x59cd61['fwd'][0x34e*-0x5+0x541*0x4+-0x47c];continue;case'7':_0x1401a6=_0x59cd61[_0xc58e20(0x9d3)][-0x6d*-0x2a+0x1cd2+0xf91*-0x3];continue;case'8':_0x2b8543=_0x59cd61['up'][0x1d6b*0x1+0x2c5*0x1+-0x1*0x202f];continue;}break;}}else _0x1ceae8=_0x5795ed+_0x5485bd,_0x1f732b=_0xed8973+_0x4cbb33;}else{var _0x16902b=_0x51e211();if(!_0x16902b)return null;var _0x30b627=_0x2e21ac['JpHXO'](_0x2e21ac['zQWAV'](_0x16902b[_0xc58e20(0x8a3)],Math['PI']),-0x2276+-0x1b4b*-0x1+0x7df),_0x3125cd=_0x2e21ac[_0xc58e20(0xd57)](_0x16902b[_0xc58e20(0xb17)],Math['PI'])/(0x17b6+0x48f+-0x1b91),_0x2f720b=Math['cos'](_0x30b627);_0x517367=Math[_0xc58e20(0xc96)](_0x3125cd)*_0x2f720b,_0x1401a6=-Math[_0xc58e20(0xc96)](_0x30b627),_0x537a23=Math[_0xc58e20(0x6b4)](_0x3125cd)*_0x2f720b,_0x28ec22=_0x537a23,_0xc74d31=-0x11c7+0x1*-0x9c7+0x1b8e,_0x5c89b8=-_0x517367,_0xfc62d9=_0x2e21ac[_0xc58e20(0xdf0)](_0x2e21ac[_0xc58e20(0x416)](_0x1401a6,_0x5c89b8),_0x2e21ac[_0xc58e20(0x6b3)](_0x537a23,_0xc74d31)),_0x2b8543=_0x2e21ac[_0xc58e20(0x5e8)](_0x2e21ac[_0xc58e20(0x9f1)](_0x537a23,_0x28ec22),_0x2e21ac[_0xc58e20(0x6b3)](_0x517367,_0x5c89b8)),_0x254221=_0x517367*_0xc74d31-_0x1401a6*_0x28ec22;}var _0x36c11d=_0x2e21ac[_0xc58e20(0xac9)](_0x29ac44[-0x1e*-0x82+-0x10c4+0x188],_0x4f7ec3[0x97*0x11+0x43*0x7f+0x47*-0x9c]),_0x1026c8=_0x2e21ac['WZLRF'](_0x29ac44[0x1*-0x472+0x2071+-0x1bfe*0x1],_0x4f7ec3[-0x5*0x36d+0x17*-0x107+-0x5*-0x827]),_0x16acb3=_0x29ac44[0x1*0x1c26+0x35*-0x9e+0x492]-_0x4f7ec3[-0xb2f+-0x192d+0x31*0xbe],_0x35d2bf=_0x2e21ac['fWLhW'](_0x2e21ac[_0xc58e20(0x8a6)](_0x36c11d,_0x517367),_0x1026c8*_0x1401a6)+_0x2e21ac[_0xc58e20(0x2cb)](_0x16acb3,_0x537a23);if(_0x2e21ac['qFdsL'](_0x35d2bf,0x448*-0x5+0x1fdc+-0x1*0xa74+0.05))return null;var _0x28bf07=_0x2e21ac['cDLex'](_0x36c11d,_0x28ec22)+_0x2e21ac['ahSsu'](_0x1026c8,_0xc74d31)+_0x16acb3*_0x5c89b8,_0x7f5beb=_0x2e21ac[_0xc58e20(0x202)](_0x36c11d,_0xfc62d9)+_0x1026c8*_0x2b8543+_0x16acb3*_0x254221,_0x4be8a0=_0x2e21ac['gfihd'](_0x532330,_0x11d7da),_0x3ec75a=_0x2e21ac['JpHXO'](_0x2e21ac[_0xc58e20(0x8a6)](_0x6dea96,Math['PI']),0x91*-0x16+0x18*-0x146+0x2bba),_0x24d88c=Math[_0xc58e20(0x621)](_0x3ec75a/(-0x42*0x97+0x1*0x407+0x22e9)),_0x12d77c=_0x2e21ac[_0xc58e20(0xe00)](_0x28bf07/_0x35d2bf,_0x2e21ac['JytGQ'](_0x24d88c,_0x4be8a0)),_0x3d82a1=_0x2e21ac[_0xc58e20(0x8a8)](_0x7f5beb/_0x35d2bf,_0x24d88c);if(_0x12d77c<-(-0x244b+-0x743+0x2b8f+0.6000000000000001)||_0x2e21ac[_0xc58e20(0x277)](_0x12d77c,-0x59f*0x5+-0x111*0xd+-0x1*-0x29f9+0.6000000000000001)||_0x2e21ac[_0xc58e20(0x639)](_0x3d82a1,-(0x1c4b*0x1+0x1619+-0x3263*0x1+0.6000000000000001))||_0x2e21ac[_0xc58e20(0x930)](_0x3d82a1,0x10*-0x154+-0x2*0x10a1+0x3683+0.6000000000000001))return null;return{'x':(_0x2e21ac[_0xc58e20(0x693)](_0x12d77c,0x11*-0x15d+-0x9*0x35f+0x3584+0.5)+(-0x11d2+0x119b*0x1+0x37+0.5))*_0x532330,'y':_0x2e21ac[_0xc58e20(0x6ac)](-0x11a5*-0x1+-0x966+-0x83f+0.5,_0x3d82a1*(0x15b7+-0x22c8+0x45b*0x3+0.5))*_0x11d7da,'z':_0x35d2bf};}var _0x5734bd={'open':![],'cat':_0x57da09(0x538)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x423556=_0x2e21ac['UgIyT'],_0x462ba1=null,_0x3f1e86=[{'id':_0x57da09(0x538)+'t','label':_0x2e21ac['TqGiE']},{'id':'visua'+'ls','label':_0x57da09(0xde6)},{'id':_0x2e21ac['uSjZY'],'label':_0x57da09(0x2ab)},{'id':_0x2e21ac[_0x57da09(0xc94)],'label':_0x57da09(0xa8e)}],_0x11c2b1=_0x2e21ac['cYFjl'](_0x2e21ac[_0x57da09(0x57e)](_0x2e21ac[_0x57da09(0xa11)](_0x2e21ac[_0x57da09(0xc54)](_0x2e21ac['BhQgs'](_0x2e21ac[_0x57da09(0xb40)](_0x2e21ac[_0x57da09(0x343)](_0x2e21ac['ChmRb'](_0x2e21ac['QKbAl'](_0x2e21ac['KGAyz'](_0x2e21ac['PEIFW'](_0x2e21ac[_0x57da09(0xddb)](_0x2e21ac['MHNwO'](_0x2e21ac[_0x57da09(0x6fd)](_0x2e21ac[_0x57da09(0x78b)](_0x2e21ac[_0x57da09(0x42a)](_0x2e21ac[_0x57da09(0x478)](_0x2e21ac['OgrPz'](_0x2e21ac['iQsHk'](_0x2e21ac['RQUne'](_0x2e21ac[_0x57da09(0x530)](_0x2e21ac['puwJI'](_0x2e21ac['TnvRJ'](_0x57da09(0xadf)+_0x57da09(0xbde)+'nu-ro'+_0x57da09(0xab8)+'l:ini'+_0x57da09(0xd46)+_0x2e21ac[_0x57da09(0x93b)]+_0x2e21ac[_0x57da09(0x70b)]+_0x2e21ac[_0x57da09(0x2ba)]+(_0x57da09(0xd82)+'hadow'+':0\x200\x20'+'0\x201px'+_0x57da09(0x5e5)+_0x57da09(0xdc1)+'255,2'+_0x57da09(0xcec)+_0x57da09(0x755)+_0x57da09(0xc8c)+_0x57da09(0xc26)+'0\x20rgb'+_0x57da09(0xbc5)+',255,'+'255,.'+'05),0'+'\x2030px'+_0x57da09(0x6fe)+'\x20rgba'+_0x57da09(0x988)+'0,.55'+');'),_0x57da09(0x9fb)+_0x57da09(0xbe7)+_0x57da09(0x8cb)+_0x57da09(0xbb8)+'trans'+'lateY'+'(18px'+_0x57da09(0x603)+'nter-'+_0x57da09(0x547)+_0x57da09(0x1f4)+'e;tra'+_0x57da09(0x636)+_0x57da09(0x95a)+'acity'+_0x57da09(0x74d)+'\x20ease'+',tran'+_0x57da09(0x5e3)+_0x57da09(0xdd1)+'\x20cubi'+_0x57da09(0x933)+_0x57da09(0x261)+'22,1,'+'.36,1'+');'),_0x57da09(0x34d)+':#f6e'+_0x57da09(0xab2)+'ont-s'+'ize:1'+_0x57da09(0x7a9)+'ont-f'+'amily'+_0x57da09(0x296)+_0x57da09(0xd59)+'Segoe'+_0x57da09(0xcc0)+'syste'+'m-ui,'+_0x57da09(0x716)+'serif'+';}')+(_0x57da09(0xadf)+'ra-me'+'nu-ro'+_0x57da09(0x306)+_0x57da09(0x7f3)+_0x57da09(0xa27)+_0x57da09(0xe34)+_0x57da09(0x5f3)+_0x57da09(0x5e2)+'ansfo'+_0x57da09(0xd60)+'ne;po'+'inter'+'-even'+_0x57da09(0xc46)+_0x57da09(0x97f)),_0x2e21ac['LJVGZ'])+(_0x57da09(0x30b)+'r-rad'+'ius:1'+_0x57da09(0xa16)+'ackgr'+'ound:'+_0x57da09(0xe46)+_0x57da09(0xccc)+'55,25'+_0x57da09(0xa3b)+'5);bo'+_0x57da09(0x509)+_0x57da09(0x663)+_0x57da09(0xa49)+_0x57da09(0x68d)+_0x57da09(0xc26)+_0x57da09(0xe46)+_0x57da09(0xccc)+_0x57da09(0x5ed)+_0x57da09(0x753)+_0x57da09(0x9b0)),_0x2e21ac[_0x57da09(0xce2)]),_0x2e21ac['ymUWw'])+('.mn-t'+_0x57da09(0x5d2)+_0x57da09(0x48a)+':flex'+_0x57da09(0x737)+_0x57da09(0xa0f)+'ms:ce'+_0x57da09(0xab7)+_0x57da09(0x6ef)+'fy-co'+_0x57da09(0x77a)+_0x57da09(0x3b1)+_0x57da09(0xe2e)+'dth:5'+_0x57da09(0x92d)+_0x57da09(0xc10)+_0x57da09(0x479)+_0x57da09(0x8fe)+_0x57da09(0xa24)+'borde'+_0x57da09(0x340)+'ius:1'+'0px;'),_0x2e21ac['BjIsp']),_0x57da09(0x5ff)+_0x57da09(0x5f6)+_0x57da09(0xe1b)+_0x57da09(0x66c)+_0x57da09(0xe46)+_0x57da09(0x647)+'38,24'+_0x57da09(0x6f1)+';}'),_0x57da09(0x5ff)+_0x57da09(0xc6f)+_0x57da09(0x1ff)+_0x57da09(0x34d)+':#ff6'+_0x57da09(0x26d)+_0x57da09(0x5b2)+_0x57da09(0x855)+_0x57da09(0xe46)+'255,1'+'07,15'+_0x57da09(0x370)+';}'),_0x2e21ac['FtFpO']),_0x57da09(0x5ff)+'op{di'+_0x57da09(0x48a)+_0x57da09(0x1fe)+_0x57da09(0x737)+'n-ite'+_0x57da09(0x59c)+_0x57da09(0xab7)+_0x57da09(0x4dd)+_0x57da09(0xd8f)+'addin'+'g:6px'+_0x57da09(0x674)+_0x57da09(0x474)+_0x57da09(0x7f7)+_0x57da09(0x9c3)+'t:non'+'e;}')+('.mn-t'+_0x57da09(0xa06)+_0x57da09(0x2ac)+_0x57da09(0x645)+_0x57da09(0x879)+'th:0;'+'}')+_0x2e21ac[_0x57da09(0x3a0)]+('.mn-s'+_0x57da09(0xcf1)+_0x57da09(0xd97)+_0x57da09(0x6dc)+'px;op'+'acity'+_0x57da09(0x256))+(_0x57da09(0x438)+'lose{'+'displ'+'ay:gr'+_0x57da09(0x428)+'ace-i'+'tems:'+'cente'+'r;wid'+'th:28'+'px;he'+_0x57da09(0xdb7)+_0x57da09(0xd22)+'borde'+'r:0;b'+_0x57da09(0xcd3)+_0x57da09(0x619)+_0x57da09(0xac4)+_0x57da09(0x714)+'kgrou'+_0x57da09(0x926)+_0x57da09(0xb9e)+'rent;')+('color'+_0x57da09(0x9bb)+'rit;o'+_0x57da09(0xbca)+'y:.45'+';curs'+'or:po'+_0x57da09(0xd6d)+';}')+('.mn-c'+_0x57da09(0x564)+_0x57da09(0x305)+_0x57da09(0x634)+_0x57da09(0x4bf)+';back'+'groun'+_0x57da09(0x36d)+'a(255'+_0x57da09(0x40f)+_0x57da09(0x4d6)+'05);}')+_0x2e21ac['wNmxE'],_0x57da09(0x438)+_0x57da09(0x30a)+_0x57da09(0xa62)+';min-'+'heigh'+'t:0;o'+'verfl'+_0x57da09(0x434)+_0x57da09(0x6fc)+_0x57da09(0xc74)+_0x57da09(0xb37)+_0x57da09(0x916)+_0x57da09(0xe30)+_0x57da09(0xa72)+'e-col'+'umns:'+_0x57da09(0x598)+_0x57da09(0xc0d)+_0x57da09(0x60e)+'l,min'+_0x57da09(0x7e1)+_0x57da09(0xaab)+_0x57da09(0x439)+';')+_0x2e21ac['tMXCt']+('.mn-c'+'ols::'+'-webk'+_0x57da09(0x7ef)+_0x57da09(0xc02)+'ar{wi'+_0x57da09(0x532)+_0x57da09(0x812))+_0x2e21ac[_0x57da09(0xdcd)],_0x2e21ac[_0x57da09(0x863)])+(_0x57da09(0xb8c)+_0x57da09(0x221)+'n{bac'+_0x57da09(0xa10)+_0x57da09(0xdc9)+_0x57da09(0x74e)+_0x57da09(0x3fa)+_0x57da09(0x40f)+_0x57da09(0x2f3)+_0x57da09(0xd82)+'hadow'+_0x57da09(0x890)+'t\x200\x200'+'\x200\x201p'+'x\x20rgb'+_0x57da09(0xbc5)+_0x57da09(0x9f6)+'157,.'+_0x57da09(0xba1))+_0x2e21ac['VZHBn']+_0x2e21ac[_0x57da09(0x5c3)]+_0x2e21ac['oeRGV'],_0x57da09(0xb8c)+'ard.o'+_0x57da09(0x79a)+'-card'+_0x57da09(0xdd4)+_0x57da09(0xb80)+'ong{c'+'olor:'+_0x57da09(0xc70)+_0x57da09(0x871)),_0x2e21ac[_0x57da09(0x206)])+_0x2e21ac[_0x57da09(0x736)],'.sk-c'+'tl{di'+_0x57da09(0x48a)+':flex'+';alig'+'n-ite'+_0x57da09(0x59c)+_0x57da09(0xab7)+'gap:8'+'px;pa'+_0x57da09(0x217)+_0x57da09(0x7a8)+_0x57da09(0x484)+_0x57da09(0x3c8)+'e:11.'+'5px;}'),_0x57da09(0xc9c)+_0x57da09(0x37d)+_0x57da09(0x3a6)+'1;col'+_0x57da09(0xb35)+_0x57da09(0x672)+_0x57da09(0xd24)+',242,'+_0x57da09(0x7e0)+'}')+_0x2e21ac[_0x57da09(0xcad)],_0x57da09(0xc8a)+'witch'+'{posi'+'tion:'+_0x57da09(0x919)+_0x57da09(0xd33)+_0x57da09(0x435)+_0x57da09(0xc7b)+'heigh'+'t:14p'+_0x57da09(0xd5f)+'der:0'+_0x57da09(0x8fe)+_0x57da09(0xe43)+'dius:'+'99px;'+_0x57da09(0x302)+_0x57da09(0x3c3)+_0x57da09(0xd1d)+'(255,'+'255,2'+_0x57da09(0xcec)+_0x57da09(0x5eb)+_0x57da09(0xd18)+'point'+_0x57da09(0x43a)+'ex:no'+_0x57da09(0x966))+(_0x57da09(0xc8a)+_0x57da09(0xe0d)+'::aft'+_0x57da09(0x94d)+_0x57da09(0x77a)+_0x57da09(0xc08)+'ositi'+'on:ab'+_0x57da09(0xc63)+'e;top'+':3px;'+_0x57da09(0x545)+_0x57da09(0xc75)+_0x57da09(0x435)+'8px;h'+'eight'+_0x57da09(0x4b6)+_0x57da09(0x30b)+_0x57da09(0x340)+_0x57da09(0x315)+'0%;'),_0x57da09(0x302)+_0x57da09(0x3c3)+_0x57da09(0xd1d)+_0x57da09(0xdc1)+'255,2'+'55,.2'+_0x57da09(0xad6)+_0x57da09(0x3ff)+_0x57da09(0x9d4)+_0x57da09(0xbf4)+_0x57da09(0xc1a)+'ckgro'+'und\x20.'+_0x57da09(0x8c9)),_0x2e21ac[_0x57da09(0xe21)]),_0x57da09(0xc8a)+_0x57da09(0xe0d)+'[aria'+_0x57da09(0xe31)+_0x57da09(0xd63)+_0x57da09(0x431)+_0x57da09(0xd3a)+'ter{l'+'eft:1'+_0x57da09(0xd93)+_0x57da09(0x5b2)+'ound:'+'#ff6b'+'9d;}')+_0x2e21ac[_0x57da09(0x8b4)]+_0x2e21ac[_0x57da09(0x96a)]+_0x2e21ac['ywaCd'],'backg'+_0x57da09(0x3c3)+_0x57da09(0x1f6)+_0x57da09(0x91b)+_0x57da09(0xb60)+_0x57da09(0x945)+'6b9d,'+_0x57da09(0x896)+_0x57da09(0x4d0)+_0x57da09(0x7bb)+'var(-'+_0x57da09(0x4da)+'%)\x2010'+_0x57da09(0xce6)+_0x57da09(0x5ee)+_0x57da09(0xccf)+_0x57da09(0x74e)+_0x57da09(0x3fa)+',255,'+_0x57da09(0xd54)+'}')+_0x2e21ac[_0x57da09(0x55e)],_0x2e21ac[_0x57da09(0xcc9)])+_0x2e21ac['hmaUt']+(_0x57da09(0x86d)+_0x57da09(0x21f)+_0x57da09(0x4a2)+_0x57da09(0x366)+_0x57da09(0xa25)+'3;}')+_0x2e21ac[_0x57da09(0xb96)]+('font-'+'size:'+_0x57da09(0xa91)+'x;fon'+_0x57da09(0xb86)+_0x57da09(0x90f)+'00;cu'+_0x57da09(0xd18)+_0x57da09(0xd91)+'er;fo'+_0x57da09(0x8e8)+'mily:'+_0x57da09(0x9a5)+'it;}')+(_0x57da09(0xd7a)+'tn:ho'+_0x57da09(0x94f)+'ilter'+_0x57da09(0x405)+'htnes'+'s(1.1'+');}')+(_0x57da09(0x767)+_0x57da09(0x652)+_0x57da09(0x37a)+'px/1.'+_0x57da09(0x3b3)+_0x57da09(0xd0c)+_0x57da09(0x751)+'Conso'+_0x57da09(0x96d)+'onosp'+_0x57da09(0x7fb)+_0x57da09(0x356)+_0x57da09(0xc2b)+_0x57da09(0xa54)+'wrap;'+'word-'+_0x57da09(0x7b9)+_0x57da09(0x685)+_0x57da09(0xc2f)+_0x57da09(0x6cf)+_0x57da09(0x878)+';opac'+'ity:.'+'75;ma'+_0x57da09(0xe0f)+_0x57da09(0x2f0)+_0x57da09(0x300)+'overf'+_0x57da09(0x5f2)+_0x57da09(0x43b)),_0x2e21ac['dGSwN'])+_0x2e21ac[_0x57da09(0x37b)],_0x4a75b0=_0x2e21ac['ecFUr']+_0x2e21ac['lINKK']+_0x2e21ac['vFcNC'],_0x1261a0=_0x2e21ac['TFPvr'](_0x57da09(0x83c)+_0x57da09(0x8ca)+_0x57da09(0x7d6)+_0x57da09(0x543)+_0x57da09(0x58a)+'viewB'+_0x57da09(0x57a)+'\x200\x2024'+'\x2024\x22>'+_0x57da09(0x396)+_0x57da09(0x41b)+_0x57da09(0x715)+'c-1.5'+_0x57da09(0xe17)+_0x57da09(0x333)+_0x57da09(0xc99)+'5\x200-2'+_0x57da09(0x9c6)+_0x57da09(0x8e4)+'\x204-4.'+'5s4\x202'+_0x57da09(0xd65)+_0x57da09(0xbab)+'-2.5\x20'+'5-4\x207'+_0x57da09(0x41e),_0x57da09(0x610)+_0x57da09(0x35e)+_0x57da09(0x638)+_0x57da09(0xc79)+'#ff6b'+_0x57da09(0x364)+_0x57da09(0xe12)+_0x57da09(0xad4)+_0x57da09(0x3f5)+'6\x22\x20st'+'roke-'+'linec'+_0x57da09(0x498)+'ound\x22'+_0x57da09(0x8d2)+'ke-li'+_0x57da09(0x20b)+'n=\x22ro'+'und\x22/'+'>')+_0x2e21ac[_0x57da09(0x368)];function _0x3347ed(_0x3f172c,_0x158290,_0x2e2a35){var _0x548a21=_0x57da09;if(_0x2e21ac['wYPRU'](_0x2e21ac[_0x548a21(0x2e6)],_0x548a21(0x8e3))){var _0x4354c1=document[_0x548a21(0x843)+_0x548a21(0x2b5)+_0x548a21(0xbe3)](_0x3f172c);if(_0x158290)_0x4354c1[_0x548a21(0x8ca)+_0x548a21(0x67c)]=_0x158290;if(_0x2e2a35!=null)_0x4354c1[_0x548a21(0xb3b)+_0x548a21(0x250)]=_0x2e2a35;return _0x4354c1;}else return _0x5b4f53['quat']=_0x36ebdd,_0x114d5f['basis']=_0x2fea34(_0x38f1c5),_0x4af730['ok']=!![],_0x1d74cf[_0x548a21(0x4e1)]='',_0x2adf85['sourc'+'e']=_0x548a21(0x986)+'a\x20tra'+'nsfor'+'m',_0x4b9fa8;}function _0x477462(_0x5101d5,_0x1073ad){var _0xc2cb34=_0x57da09,_0x44cfc8=(_0xc2cb34(0xe2b)+'|3|8|'+'0|1|6'+'|9|4')[_0xc2cb34(0xb4c)]('|'),_0x9d515a=-0x2221*0x1+0x80c+0x1a15;while(!![]){switch(_0x44cfc8[_0x9d515a++]){case'0':_0x4422e4['appen'+_0xc2cb34(0xd84)+'d'](_0x1fd23a);continue;case'1':_0x4422e4['appen'+_0xc2cb34(0xd84)+'d'](_0x3bffe3);continue;case'2':var _0x1fd23a=_0x3347ed(_0x2e21ac['PdNdI'],'sk-ca'+_0xc2cb34(0xcd4)+'ad');continue;case'3':_0x1fd23a[_0xc2cb34(0xac2)+_0xc2cb34(0xd84)+'d'](_0x16db18);continue;case'4':return _0x4422e4;case'5':var _0x16db18=_0x2e21ac[_0xc2cb34(0x740)](_0x3347ed,'div',_0xc2cb34(0x30c)+'rd-ti'+'tle',_0x2e21ac[_0xc2cb34(0x530)]('<stro'+_0xc2cb34(0x1fc)+_0x5101d5,_0x2e21ac['IfLZC']));continue;case'6':_0x4422e4['body']=_0x3bffe3;continue;case'7':var _0x4422e4=_0x3347ed('div',_0x2e21ac[_0xc2cb34(0x4e4)](_0xc2cb34(0x30c)+'rd',_0x1073ad?_0xc2cb34(0xa90):''));continue;case'8':var _0x3bffe3=_0x2e21ac['gCNIs'](_0x3347ed,_0xc2cb34(0xda1),_0x2e21ac[_0xc2cb34(0xcb7)]);continue;case'9':_0x4422e4['head']=_0x16db18;continue;}break;}}function _0x23033b(_0x4d843f,_0xd5239a){var _0x49dd2d=_0x57da09,_0x2fe5fc={'wgSUw':function(_0x3ec510,_0x3ab8a7){return _0x2e21ac['bccOZ'](_0x3ec510,_0x3ab8a7);}};if(_0x49dd2d(0x946)!==_0x49dd2d(0x946))_0x5aaa28[_0x49dd2d(0x440)+_0x49dd2d(0x254)]=_0x2e21ac['EpclD'](_0x569fc1['round'](_0x2e21ac['BqOmh'](_0x2fc98f,0x1*0x9f5+0x701+-0xd0e)),-0xe1f+0x18b*-0x1+-0x686*-0x3),_0xf874f7[_0x49dd2d(0x440)+_0x49dd2d(0xbcb)+'ng']=_0x506543[_0x49dd2d(0x3c3)](_0x534b4c['beari'+'ng']);else{var _0x195d70=_0x3347ed(_0x2e21ac['oGSZJ'],_0x2e21ac[_0x49dd2d(0x6be)]);_0x195d70[_0x49dd2d(0xaeb)]=_0x49dd2d(0x4eb)+'n';var _0x80bd3=function(){var _0x3b720e=_0x49dd2d;_0x2e21ac['RNMQh']!==_0x2e21ac['RNMQh']?(_0x135bf2[_0x3b720e(0xaf8)+'Path'](),_0x299369['arc'](_0xfac423,_0x4933ad,(_0x1e4173-(0x9f1+0x1a*0x47+0x1123*-0x1))*_0x25a3c6/(-0x241*0xb+0x4a4*0x1+0x2*0xa15),-0x2543+0x1649+-0xefa*-0x1,_0x2fe5fc['wgSUw'](_0x35f5a7['PI'],-0x185*-0x17+0x1*-0x10d9+-0xc*0x182)),_0x461c32['strok'+'e']()):_0x195d70[_0x3b720e(0x949)+_0x3b720e(0x50a)+'te'](_0x2e21ac[_0x3b720e(0xc20)],_0x4d843f()?_0x3b720e(0x272):'false');};return _0x195d70['oncli'+'ck']=function(){var _0x189c11=_0x49dd2d;_0x2e21ac[_0x189c11(0x8d7)](_0xd5239a,!_0x2e21ac['xgoii'](_0x4d843f)),_0x2e21ac['xgoii'](_0x80bd3);},_0x2e21ac[_0x49dd2d(0xaaf)](_0x80bd3),_0x195d70['sync']=_0x80bd3,_0x5734bd['syncs'][_0x49dd2d(0xc27)](_0x80bd3),_0x195d70;}}function _0x11243e(_0xf23de5,_0x4b72c0,_0x467b8c,_0x563425,_0x40d4c2){var _0x6918e4=_0x57da09,_0x57cb7e=_0x3347ed(_0x2e21ac['PdNdI'],_0x2e21ac[_0x6918e4(0xc04)]),_0x140bc1=document['creat'+'eElem'+_0x6918e4(0xbe3)](_0x2e21ac['IOeFW']);_0x140bc1[_0x6918e4(0xaeb)]='range',_0x140bc1['class'+_0x6918e4(0x67c)]=_0x6918e4(0xe3b)+'ider',_0x140bc1[_0x6918e4(0xae4)]=String(_0xf23de5),_0x140bc1['max']=_0x2e21ac[_0x6918e4(0xc52)](String,_0x4b72c0),_0x140bc1[_0x6918e4(0xcfc)]=String(_0x467b8c);var _0x343d3e=_0x3347ed('span',_0x6918e4(0xd01)+'l'),_0x29c776=function(){var _0x223ec6=_0x6918e4,_0x3efb0c=_0x563425();_0x140bc1[_0x223ec6(0x5f5)]=String(_0x3efb0c),_0x343d3e['textC'+_0x223ec6(0x1f5)+'t']=(_0x467b8c<-0xe10+0x3b*0x53+0x8*-0xa2?_0x3efb0c[_0x223ec6(0x45b)+'ed'](-0x2176*0x1+0x495+0x1ce2):String(Math['round'](_0x3efb0c)))+(_0x140bc1[_0x223ec6(0xe3d)+'et'][_0x223ec6(0x3fe)]||'');var _0x3fedc2=_0x2e21ac['ynxHh'](_0x3efb0c,_0xf23de5)/(_0x4b72c0-_0xf23de5)*(0x49*-0x7+0xb*-0x18b+-0x3*-0x674);_0x140bc1['style']['setPr'+'opert'+'y']('--p',_0x3fedc2+'%');};return _0x140bc1[_0x6918e4(0x925)+'ut']=function(){var _0x3d59df=_0x6918e4,_0x5a3b74={'XHRRv':function(_0x371783,_0x2127be){return _0x371783<_0x2127be;}};if(_0x2e21ac[_0x3d59df(0x3c7)]('wpAqx','wpAqx'))_0x2e21ac[_0x3d59df(0x72f)](_0x40d4c2,_0x2e21ac['oSWyP'](parseFloat,_0x140bc1['value'])||_0xf23de5),_0x29c776();else{var _0x3aa646=_0xe8eac1[_0x3d59df(0xa75)](_0x521c73[_0x216612]['v'][0x26c9+-0xada+-0x596*0x5]-_0x16c913);if(_0x5a3b74['XHRRv'](_0x3aa646,_0x2f4e48))_0x4ed157=_0x3aa646;}},_0x57cb7e[_0x6918e4(0xac2)+_0x6918e4(0xd84)+'d'](_0x140bc1),_0x57cb7e['appen'+'dChil'+'d'](_0x343d3e),_0x57cb7e[_0x6918e4(0x352)]=_0x29c776,_0x57cb7e['input']=_0x140bc1,_0x29c776(),_0x5734bd[_0x6918e4(0x648)][_0x6918e4(0xc27)](_0x29c776),_0x57cb7e;}function _0x1c107c(_0x4caee1,_0x37178a){var _0x4605ec=_0x57da09,_0x1e8174=_0x2e21ac['gxSob'](_0x3347ed,_0x4605ec(0xda1),_0x4605ec(0x84d)+'l'),_0x48dd03=_0x3347ed(_0x4605ec(0xda1),'sk-la'+_0x4605ec(0x74f),_0x4caee1+(_0x37178a?_0x2e21ac[_0x4605ec(0x95b)](_0x2e21ac[_0x4605ec(0x3a8)],_0x37178a)+(_0x4605ec(0xb70)+'n>'):''));return _0x1e8174['appen'+_0x4605ec(0xd84)+'d'](_0x48dd03),_0x1e8174;}function _0x1f1dfe(_0x56311b,_0x1fb958,_0x31e6fb,_0x4fa10a){var _0x1e5c09=_0x57da09,_0x230770={'wiQnh':function(_0x51da7e,_0xf77a74){return _0x51da7e+_0xf77a74;},'TQSZL':'UWMK\x20'+_0x1e5c09(0x2bf)+_0x1e5c09(0x818),'yoQEP':_0x2e21ac['IZNRz'],'nQMxr':'(this'+',\x20Met'+'hodIn'+_0x1e5c09(0xddd)+_0x1e5c09(0x51e)+_0x1e5c09(0x412)+_0x1e5c09(0x403)+'t\x20mat'+'ch\x20th'+'is\x20bu'+_0x1e5c09(0x7d8),'ZiZSe':function(_0x5b12b6,_0x47463f){return _0x5b12b6!==_0x47463f;},'WbteW':'eokNC','CAhKq':function(_0x107fd6,_0xf4eb2c){return _0x2e21ac['zYUTN'](_0x107fd6,_0xf4eb2c);}},_0x110b4e=_0x56311b&&_0x56311b[_0x1e5c09(0x88d)+'y']&&_0x56311b['surve'+'y'][_0x1fb958];if(!_0x110b4e)return'-';for(var _0x393d96=0x6ec+-0x194+0x3*-0x1c8;_0x393d96<_0x110b4e['lengt'+'h'];_0x393d96++){if(_0x110b4e[_0x393d96]['o']===_0x31e6fb){if(_0x2e21ac['AhKlG'](_0x4fa10a,'v3')){var _0x494afc=_0x110b4e[_0x393d96][_0x1e5c09(0xb4a)]||[_0x110b4e[_0x393d96]['v'],0x1*0x2245+-0x1*-0x1b80+0x7*-0x8d3,-0x133*-0x3+-0x1a17+0x167e*0x1];return _0x494afc[_0x1e5c09(0xa88)](function(_0x30c540){var _0x9ba5fe=_0x1e5c09;if(_0x230770[_0x9ba5fe(0x8d1)](_0x230770[_0x9ba5fe(0x27f)],'eokNC'))_0x5e896b[_0x9ba5fe(0xa70)+'ngs']['push'](_0x230770['wiQnh'](_0x230770['wiQnh'](_0x230770[_0x9ba5fe(0xae0)](_0x230770[_0x9ba5fe(0x683)],_0x33194b['hooks'+_0x9ba5fe(0x52f)+'ved']),'\x20of\x20')+_0x1c7cfc[_0x9ba5fe(0x655)+_0x9ba5fe(0x665)],_0x230770[_0x9ba5fe(0x32e)])+_0x230770['nQMxr']);else return _0x230770['CAhKq'](Math[_0x9ba5fe(0x3c3)](_0x30c540*(-0x13b2*-0x1+0xd92+-0x4*0x838)),0x6c7+-0x20c2+0x1a5f);})[_0x1e5c09(0xc59)]('\x20\x20');}var _0x11f1f2=_0x110b4e[_0x393d96]['v'];return _0x2e21ac['LwzhP'](typeof _0x11f1f2,_0x1e5c09(0x6e4)+'r')?Math[_0x1e5c09(0x3c3)](_0x11f1f2*(0x1*-0x52f+-0x35*-0x73+0x9d*-0x18))/(-0x1827+-0xfb1*0x1+0x38*0xc8):String(_0x11f1f2);}}return'-';}function _0x347ae2(_0x59f833){var _0x394cf6=_0x57da09,_0x316308={'PSGnj':function(_0x5c4145,_0x7adc04){var _0x1f0984=_0xbe61;return _0x2e21ac[_0x1f0984(0xdb4)](_0x5c4145,_0x7adc04);},'jaCUD':_0x2e21ac[_0x394cf6(0x4f0)],'Gnaby':_0x2e21ac[_0x394cf6(0x609)],'URXSk':function(_0x48d5c0,_0x1b2cc2){var _0x8880fe=_0x394cf6;return _0x2e21ac[_0x8880fe(0xb45)](_0x48d5c0,_0x1b2cc2);},'zWbKx':function(_0x1d0cf0,_0xd35142){var _0x11037c=_0x394cf6;return _0x2e21ac[_0x11037c(0xded)](_0x1d0cf0,_0xd35142);},'uClUm':_0x2e21ac['MYsUy'],'jqmYd':function(_0x20c711,_0x7e9c72){return _0x20c711===_0x7e9c72;},'HjCrW':_0x394cf6(0x65d),'optbH':function(_0x37df34,_0x20f9a6,_0x43a89f){return _0x37df34(_0x20f9a6,_0x43a89f);},'rfKKM':function(_0x30d4af,_0x15f1d3){return _0x2e21ac['LWCxq'](_0x30d4af,_0x15f1d3);},'HQTXZ':_0x394cf6(0x45d)+_0x394cf6(0xac1)+_0x394cf6(0xc37),'fcHTT':_0x2e21ac['ALBPa'],'ptspU':_0x394cf6(0x2f5)+_0x394cf6(0x52b),'kbbfM':function(_0x216b27,_0x40770e){return _0x216b27(_0x40770e);},'uwVlW':_0x2e21ac[_0x394cf6(0xa9f)],'yeeQq':function(_0x5c3a51,_0x4b1a6d){var _0x134938=_0x394cf6;return _0x2e21ac[_0x134938(0xe00)](_0x5c3a51,_0x4b1a6d);},'hWXhN':_0x2e21ac['vJbhO'],'bEcmS':_0x394cf6(0xbfc),'LZBDt':function(_0x518c02,_0x4aaecb){return _0x518c02+_0x4aaecb;}};if(_0x2e21ac[_0x394cf6(0x85b)]===_0x394cf6(0x4a8)){var _0x3a316c=_0x462ba1,_0x19a453=[],_0x25ebd6;if(_0x2e21ac[_0x394cf6(0xc05)](_0x59f833,_0x394cf6(0x538)+'t')){var _0x492ac1=_0x477462('Speed'+_0x394cf6(0xb7c),_0x43d8b1['on']),_0x18482b=_0x2e21ac[_0x394cf6(0x740)](_0x3347ed,_0x2e21ac[_0x394cf6(0xa73)],_0x2e21ac[_0x394cf6(0x9a4)],_0x43d8b1['on']?_0x2e21ac['aQHiM'](_0x2e21ac[_0x394cf6(0x415)](_0x2e21ac['JdbXm'](_0x2e21ac[_0x394cf6(0xcd7)]('x',_0x43d8b1['facto'+'r'][_0x394cf6(0x45b)+'ed'](0xaff+-0x5*-0x4cd+0x1f*-0x121))+_0x394cf6(0x79e),_0x1e2c5b[_0x394cf6(0x875)+'h']),_0x394cf6(0x6db)+_0x394cf6(0x3ab))+_0x4592a4,_0x394cf6(0x782)+'es'):'Multi'+_0x394cf6(0x9ba)+_0x394cf6(0x8ec)+_0x394cf6(0x55a)+'speed'+_0x394cf6(0x6db)+_0x394cf6(0x385)+_0x394cf6(0x410)+'eight'+',\x20ste'+_0x394cf6(0x96b)+'\x20jump'+_0x394cf6(0x8a5)+'refus'+_0x394cf6(0x8cc)),_0x1e2f77=_0x2e21ac[_0x394cf6(0xc6a)](_0x1c107c,_0x394cf6(0x2bc)+'ed');_0x1e2f77[_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x2e21ac[_0x394cf6(0xa20)](_0x23033b,function(){var _0x415737=_0x394cf6,_0x330d03={'HFQig':_0x415737(0xdce)};if(_0x316308[_0x415737(0x6cb)](_0x415737(0x324),_0x316308['jaCUD']))return _0x43d8b1['on'];else _0x57b2fd[_0x415737(0x9dd)+_0x415737(0xab0)+'d'](_0x330d03['HFQig']),_0x43fdc6();},function(_0x2ca270){var _0x74d4c2=_0x394cf6;if(_0x316308[_0x74d4c2(0x6cb)](_0x316308['Gnaby'],_0x74d4c2(0x6d8)))_0xd01c8a(_0x2ca270,_0x43d8b1['facto'+'r']),_0x18482b[_0x74d4c2(0x21a)+_0x74d4c2(0x1f5)+'t']=_0x2ca270?_0x316308['URXSk'](_0x316308[_0x74d4c2(0x942)](_0x316308['URXSk']('x'+_0x43d8b1['facto'+'r'][_0x74d4c2(0x45b)+'ed'](-0x29*0x9+0x24ad*-0x1+0x1*0x261f),'\x20on\x20')+_0x1e2c5b[_0x74d4c2(0x875)+'h']+('\x20fiel'+'ds\x20·\x20'),_0x4592a4),'\x20writ'+'es'):_0x74d4c2(0xb24)+_0x74d4c2(0x9ba)+_0x74d4c2(0x8ec)+'ment-'+'speed'+_0x74d4c2(0x6db)+'ds\x20on'+'ly.\x20H'+'eight'+_0x74d4c2(0x2e9)+'p\x20and'+_0x74d4c2(0x30d)+_0x74d4c2(0x8a5)+'refus'+'ed.';else return _0x146dd4['lo']===null||_0x5a215['hi']===null?0xb85+0x2627+-0x31ac:_0x4218d6['hi']-_0x176905['lo'];})),_0x492ac1['body']['appen'+'dChil'+'d'](_0x18482b),_0x492ac1['body']['appen'+'dChil'+'d'](_0x1e2f77);var _0x1d8e41=_0x11243e(0x1f*-0xef+-0x1944+0x3636,0xd21+-0x2635*0x1+0x1919,-0xadc+-0x23*-0x22+0x1*0x636+0.5,function(){var _0x46cf4e=_0x394cf6,_0x1da41b={'XOKVA':function(_0x47a69a,_0xb20d61){return _0x316308['zWbKx'](_0x47a69a,_0xb20d61);},'SWvpz':_0x316308['uClUm'],'vbDSx':'again'+_0x46cf4e(0xb92)+'diffe'+_0x46cf4e(0x797)+_0x46cf4e(0xa36)+_0x46cf4e(0x4b5)+'stanc'+_0x46cf4e(0x3da)+'n\x20the'+'\x20glob'+_0x46cf4e(0x425)+'w\x20exp'+_0x46cf4e(0xae2)};if(_0x316308['jqmYd']('GbWIZ',_0x316308[_0x46cf4e(0xcae)]))return _0x43d8b1['facto'+'r'];else _0x29428c['warni'+_0x46cf4e(0xaa0)]['push'](_0x1da41b['XOKVA'](_0x1da41b[_0x46cf4e(0xacd)],_0x1da41b[_0x46cf4e(0xaee)]));},function(_0x5e0ee0){_0x316308['optbH'](_0xd01c8a,_0x43d8b1['on'],_0x5e0ee0);});_0x1d8e41[_0x394cf6(0xb30)]['datas'+'et']['unit']='x';var _0x42c678=_0x1c107c(_0x2e21ac['iLrAF'],'F8\x20/\x20'+_0x394cf6(0x99d)+_0x394cf6(0x7fe)+'ep\x20th'+'is');_0x42c678['appen'+'dChil'+'d'](_0x1d8e41),_0x492ac1['body']['appen'+_0x394cf6(0xd84)+'d'](_0x42c678);if(_0x5634b4[_0x394cf6(0x875)+'h']){var _0x28a574=_0x3347ed(_0x394cf6(0xda1),_0x2e21ac['TPYjQ'],_0x2e21ac['FHRyC'](_0x2e21ac[_0x394cf6(0xc86)],_0x5634b4[_0x394cf6(0xd92)](0x33*-0x13+-0x25*-0xce+0x19fd*-0x1,0x1b1d+0x19ed+0xb*-0x4d2)[_0x394cf6(0xa88)](function(_0xcbbf89){var _0x6650d6=_0x394cf6;return _0x316308['zWbKx'](_0x316308[_0x6650d6(0x942)](_0x316308[_0x6650d6(0x73d)]('0x',_0xcbbf89['o']<-0x72+0x223c+0x32*-0xad?'?':_0xcbbf89['o']['toStr'+'ing'](-0x61c*0x1+-0x242e+0x2a5a)),'\x20(')+_0xcbbf89[_0x6650d6(0x4e1)],')');})[_0x394cf6(0xc59)]('\x20\x20')));_0x492ac1['body'][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x28a574);}_0x19a453['push'](_0x492ac1);var _0x56819e=_0x477462(_0x2e21ac['Jtjjz']),_0x37ac28=_0x3347ed(_0x394cf6(0x4eb)+'n',_0x394cf6(0x4db)+'n',_0x394cf6(0xcf0)+_0x394cf6(0x9be)+'ow\x20(F'+'9)');_0x37ac28[_0x394cf6(0xaeb)]=_0x394cf6(0x4eb)+'n',_0x37ac28[_0x394cf6(0xd1a)+'ck']=function(){var _0x4eb73c=_0x394cf6;if(_0x2e21ac[_0x4eb73c(0x9d5)]('hkrFR',_0x2e21ac[_0x4eb73c(0xb66)])){var _0xaee0e0=_0x316308['HQTXZ'][_0x4eb73c(0xb4c)]('|'),_0x230b0c=-0x3*0x28c+0xe6c+-0x6c8;while(!![]){switch(_0xaee0e0[_0x230b0c++]){case'0':try{_0x4421b7[_0x4eb73c(0x9dd)+_0x4eb73c(0xab0)+'d'](_0x316308[_0x4eb73c(0xd8a)]),_0x348e2e();}catch(_0x240c7b){}continue;case'1':if(!_0x377633[_0x4eb73c(0xd40)])return;continue;case'2':var _0x34c935=_0x4218b2[_0x4eb73c(0x843)+'eElem'+_0x4eb73c(0xbe3)](_0x4eb73c(0x25b)+'rea');continue;case'3':_0x34c935[_0x4eb73c(0x5f5)]=_0x5821ed;continue;case'4':_0x34c935[_0x4eb73c(0x9c3)+'t']();continue;case'5':_0x16f60a[_0x4eb73c(0xd40)][_0x4eb73c(0xac2)+_0x4eb73c(0xd84)+'d'](_0x34c935);continue;case'6':_0x34c935[_0x4eb73c(0x7b7)+'e']();continue;}break;}}else _0x425963(_0x2e21ac[_0x4eb73c(0x553)]);},_0x56819e[_0x394cf6(0xd40)][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x3347ed(_0x2e21ac['PdNdI'],_0x394cf6(0xd5a)+'esc',_0x394cf6(0x510)+_0x394cf6(0x2ef)+_0x394cf6(0xd64)+_0x394cf6(0x63e)+_0x394cf6(0x6f7)+_0x394cf6(0x560)+'ff\x0aF8'+_0x394cf6(0x390)+'\x20\x20fac'+_0x394cf6(0x9b5)+_0x394cf6(0x81f)+'\x0a[\x20\x20]'+'\x20\x20fie'+_0x394cf6(0x92b)+_0x394cf6(0x937)+'\x0aInse'+_0x394cf6(0xace)+'his\x20m'+_0x394cf6(0x9e2))),_0x56819e[_0x394cf6(0xd40)]['appen'+'dChil'+'d'](_0x37ac28),_0x19a453['push'](_0x56819e);}if(_0x59f833===_0x394cf6(0x577)+'ls'){var _0x30ba79=_0x2e21ac[_0x394cf6(0x5bc)](_0x477462,_0x2e21ac[_0x394cf6(0x8dc)],_0x1feaeb['on']),_0xc6c0b2=_0x2e21ac[_0x394cf6(0xc23)](_0x1c107c,_0x394cf6(0x2bc)+'ed');_0xc6c0b2['appen'+_0x394cf6(0xd84)+'d'](_0x23033b(function(){var _0x35f4fb=_0x394cf6;return _0x35f4fb(0x335)===_0x316308[_0x35f4fb(0x4ac)]?_0x1feaeb['on']:(_0x22d141[_0x35f4fb(0x76c)](_0x316308[_0x35f4fb(0x8d8)],_0x58533['messa'+'ge'],_0x316308[_0x35f4fb(0x506)](_0x57abc5,_0x50ed9d[_0x35f4fb(0x3ac)]||'')[_0x35f4fb(0xb4c)]('\x0a')['slice'](0x58f+0x170d+-0x1c9c,0x1b2b+-0x1bbd*0x1+0x96)['join'](_0x35f4fb(0xd89))),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0});},function(_0x1f42fd){_0x30d21f(_0x1f42fd,_0x1feaeb['boxes']);})),_0x30ba79['body'][_0x394cf6(0xac2)+'dChil'+'d'](_0x2e21ac['Tfalb'](_0x3347ed,'div',_0x394cf6(0xd5a)+_0x394cf6(0x529),'World'+'-spac'+_0x394cf6(0x6e5)+_0x394cf6(0x361)+'\x20top-'+'right'+_0x394cf6(0x70c)+'ds\x20on'+'ly\x20po'+_0x394cf6(0x418)+'ns.')),_0x30ba79['body'][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0xc6c0b2);var _0x36490d=_0x11243e(-0x11f7+-0x6a3*0x4+0x8ef*0x5,-0x229c+-0x24e9+0x4825,-0x14be+0x5*0x1bc+0xc1c,function(){return _0x1feaeb['span'];},function(_0x2a56b3){_0x1feaeb['span']=_0x2a56b3;});_0x36490d['input'][_0x394cf6(0xe3d)+'et']['unit']='m';var _0xb5c4f0=_0x2e21ac['GlNvO'](_0x1c107c,_0x2e21ac[_0x394cf6(0xdab)],'world'+_0x394cf6(0xa92)+'s\x20acr'+_0x394cf6(0xe03)+'he\x20ra'+_0x394cf6(0x79f));_0xb5c4f0[_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x36490d),_0x30ba79[_0x394cf6(0xd40)][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0xb5c4f0),_0x19a453[_0x394cf6(0xc27)](_0x30ba79);var _0x4d3cb4=_0x477462(_0x2e21ac[_0x394cf6(0x4ff)],_0x1feaeb['boxes']),_0x48edd3=_0x2e21ac['yzzcG'](_0x1c107c,'Enabl'+'ed');_0x48edd3[_0x394cf6(0xac2)+'dChil'+'d'](_0x2e21ac['RVdnW'](_0x23033b,function(){return _0x1feaeb['boxes'];},function(_0x292934){var _0x322d9e=_0x394cf6;if(_0x292934&&!_0x2e21ac[_0x322d9e(0x57d)](_0x4141c7)){_0x48e4f3();return;}_0x2e21ac[_0x322d9e(0x701)](_0x30d21f,!![],_0x292934);}));var _0x4afd24=_0x3a316c&&_0x3a316c['angle'+'s'];_0x4d3cb4[_0x394cf6(0xd40)][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x3347ed(_0x2e21ac[_0x394cf6(0xa73)],_0x2e21ac[_0x394cf6(0x9a4)],_0x4afd24&&!_0x4afd24[_0x394cf6(0xa6d)+_0x394cf6(0x4a5)]?_0x2e21ac[_0x394cf6(0xa19)](_0x2e21ac[_0x394cf6(0xd8b)],_0x4afd24['why']||'view\x20'+_0x394cf6(0x839)+_0x394cf6(0x2c0)+_0x394cf6(0x5c2)+'fied')+_0x2e21ac['AEqeh']:_0x4afd24&&!_0x4afd24[_0x394cf6(0x2a6)+'ne']?_0x2e21ac[_0x394cf6(0xa7b)](_0x2e21ac['MSSAP']+Math[_0x394cf6(0x3c3)](_0x4afd24['fov']),_0x2e21ac[_0x394cf6(0xa4f)]):_0x2e21ac[_0x394cf6(0x2c4)])),_0x4d3cb4[_0x394cf6(0xd40)][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x48edd3);var _0x54b9e6=_0x2e21ac[_0x394cf6(0xd11)](_0x11243e,0x9e*0x2d+0x410+-0x1f9a,0xb03+0x11*-0x24+0x1f*-0x43,-0x10d5+0xb5*0x33+0xc*-0x19a,function(){var _0x3caf11=_0x394cf6;return _0x3c71ff[_0x3caf11(0x554)];},function(_0x385374){var _0x4eb7f9=_0x394cf6;_0x3c71ff[_0x4eb7f9(0x554)]=_0x385374,_0x2e21ac[_0x4eb7f9(0x6d2)](_0x54ad0c);});_0x54b9e6['input'][_0x394cf6(0xe3d)+'et']['unit']='°';var _0x409f25=_0x2e21ac['AxizU'](_0x1c107c,_0x2e21ac[_0x394cf6(0x792)],_0x394cf6(0xb0d)+'\x20]\x20al'+_0x394cf6(0x7fe)+'ep\x20th'+'is');_0x409f25[_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x54b9e6);var _0x158c77=_0x2e21ac[_0x394cf6(0x8e9)](_0x1c107c,_0x394cf6(0xa9a)+'\x20view',_0x394cf6(0xc03)+'ack\x20t'+_0x394cf6(0x567)+_0x394cf6(0x669)+_0x394cf6(0x268)+_0x394cf6(0xc0e)),_0xe4d9b9=_0x2e21ac['xZqZa'](_0x3347ed,'butto'+'n',_0x2e21ac['iDJZr'],'Reset');_0xe4d9b9[_0x394cf6(0x62c)+_0x394cf6(0x754)+'stene'+'r'](_0x394cf6(0x2f4),function(){var _0x4b627e=_0x394cf6;'avTzt'==='avTzt'?(_0x3c71ff[_0x4b627e(0x554)]=-0x1*0xa7c+0xc7c+-0x1b5,_0x54ad0c(),_0x130d79(_0x5734bd['cat'])):(_0x10a88d={'mean':_0x343cdf,'members':[]},_0x5b7be7['push'](_0xf45f3a));}),_0x158c77[_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0xe4d9b9),_0x4d3cb4['body'][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x409f25),_0x4d3cb4[_0x394cf6(0xd40)]['appen'+_0x394cf6(0xd84)+'d'](_0x158c77);var _0x337a35=_0x3a316c&&_0x3a316c[_0x394cf6(0x9b2)];_0x4d3cb4[_0x394cf6(0xd40)][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x3347ed(_0x2e21ac[_0x394cf6(0xa73)],_0x394cf6(0x4cb)+'te',_0x2e21ac[_0x394cf6(0xbb2)](_0x2e21ac[_0x394cf6(0x501)]('view:'+'\x20',_0x337a35?_0x337a35[_0x394cf6(0x73c)+'Look']?_0x2e21ac['qQrgw'](_0x394cf6(0x749)+'Look\x20'+_0x337a35['mouse'+_0x394cf6(0xcf9)],_0x337a35['camer'+'a']?_0x2e21ac[_0x394cf6(0xca0)](_0x394cf6(0x49a)+_0x394cf6(0xb3f),_0x337a35[_0x394cf6(0x986)+'a']):''):_0x2e21ac[_0x394cf6(0x555)]:_0x2e21ac[_0x394cf6(0x555)])+(_0x4afd24?'\x0a'+(_0x4afd24[_0x394cf6(0x968)+'e']&&_0x4afd24[_0x394cf6(0x968)+'e'][_0x394cf6(0x75d)+'Of'](_0x394cf6(0xcd9)+_0x394cf6(0x454)+'r')===-0x14*-0x59+-0x77*-0x37+-0x2085?_0x2e21ac['uFIbt'](_0x2e21ac['nOWjj'](_0x2e21ac[_0x394cf6(0x868)](_0x2e21ac[_0x394cf6(0x9e0)]+_0x4afd24[_0x394cf6(0x968)+'e']['slice'](-0x1*-0x92c+0x4*-0x8ee+0x3*0x8dd)+(_0x394cf6(0x1e6)+'\x20\x20'),Math[_0x394cf6(0x3c3)](_0x4afd24['rawYa'+'w'])),'\x0apitc'+'h\x20'),Math[_0x394cf6(0x3c3)](_0x4afd24[_0x394cf6(0x9cc)+_0x394cf6(0xcb0)])):_0x2e21ac['oguXT'](_0x4afd24['sourc'+'e'],_0x394cf6(0x527)+'r')?_0x2e21ac['LGpzC'](_0x2e21ac['yxgOi']('read\x20'+_0x394cf6(0x8e1)+'Mouse'+_0x394cf6(0xd9e)+_0x394cf6(0x527)+'rs\x0aya'+_0x394cf6(0x983)+_0x4afd24[_0x394cf6(0x7f4)]+_0x394cf6(0x274),Math[_0x394cf6(0x3c3)](_0x4afd24[_0x394cf6(0xcde)+'w'])),_0x2e21ac[_0x394cf6(0xcc8)])+_0x4afd24['pitch'+'At']+'\x20=\x20'+Math[_0x394cf6(0x3c3)](_0x4afd24[_0x394cf6(0x9cc)+_0x394cf6(0xcb0)]):_0x2e21ac[_0x394cf6(0x213)]):'')+(_0x4afd24&&_0x4afd24['viewH'+'ooks']&&_0x4afd24[_0x394cf6(0xd39)+'ooks'][_0x394cf6(0x485)+'ed']===-0x32*-0x88+0xb*0xce+-0x236a&&_0x2e21ac[_0x394cf6(0xcc4)](_0x4afd24['viewH'+_0x394cf6(0x40d)]['total'],0x8*-0x1ab+-0xc71*0x1+-0x11f*-0x17)?_0x2e21ac['KfgEU']+_0x4afd24[_0x394cf6(0xd39)+_0x394cf6(0x40d)][_0x394cf6(0x2bf)+_0x394cf6(0xabb)]+'/'+_0x4afd24['viewH'+'ooks']['total']+_0x2e21ac['bjBGF']:_0x4afd24&&_0x4afd24['viewH'+'ooks']&&_0x2e21ac['REAyM'](_0x4afd24[_0x394cf6(0xd39)+'ooks']['total'],-0x1efc+-0x2064+0x3f60)?_0x2e21ac['RMFNh'](_0x394cf6(0x2df)+'\x20hook'+_0x394cf6(0x8d9)+'e\x20nev'+_0x394cf6(0xdda)+_0x394cf6(0x460)+_0x394cf6(0x8d5),_0x4afd24[_0x394cf6(0xd39)+_0x394cf6(0x40d)][_0x394cf6(0xdc3)+_0x394cf6(0xaa6)])+(_0x394cf6(0x1e7)+'rs)'):''),_0x224d08?'\x0a(cle'+'ared\x20'+_0x394cf6(0xb0b)+'le\x20sa'+_0x394cf6(0x763)+'orrec'+_0x394cf6(0xdf1):''))),_0x19a453['push'](_0x4d3cb4);}if(_0x59f833===_0x394cf6(0x5f5)+'s'){if(_0x2e21ac['lYuKr']!==_0x394cf6(0xe40)){var _0x5e6109=[[_0x394cf6(0xca2),_0x2e21ac[_0x394cf6(0xa2e)],_0x3a316c?_0x3a316c[_0x394cf6(0x899)+'on']:'-'],[_0x2e21ac[_0x394cf6(0x4bc)],'appli'+_0x394cf6(0x7c6)+'regis'+_0x394cf6(0xca9),_0x3a316c?_0x2e21ac[_0x394cf6(0x32b)](_0x3a316c[_0x394cf6(0x655)+'Appli'+'ed']+'\x20/\x20',_0x3a316c['hooks'+_0x394cf6(0xc90)+_0x394cf6(0xca9)+_0x394cf6(0xa89)]):'-'],[_0x2e21ac['jyCYr'],'from\x20'+_0x394cf6(0xb5b)+_0x394cf6(0x1ee)+'e()',_0x3a316c&&_0x3a316c[_0x394cf6(0x5d6)+_0x394cf6(0xb11)]&&_0x3a316c[_0x394cf6(0x5d6)+'emory'][_0x394cf6(0xd25)+'red']?Math[_0x394cf6(0x3c3)](_0x3a316c[_0x394cf6(0x5d6)+'emory']['bytes']/(0xbf6dd+-0x18a2*0xa3+0x13b849))+(_0x394cf6(0x9f0)+'\x20')+_0x3a316c['wasmM'+_0x394cf6(0xb11)]['atMs']+'ms':'-'],['Playe'+'rs','Photo'+_0x394cf6(0x73f)+_0x394cf6(0xa69)+'nc',_0x3a316c&&_0x3a316c['esp']?String(_0x3a316c['esp'][_0x394cf6(0xe07)+_0x394cf6(0x437)+'t']):'-'],[_0x394cf6(0xb20)+'es','every'+_0x394cf6(0xad1)+_0x394cf6(0x4e5)+'u',_0x3a316c&&_0x3a316c['esp']?String(_0x3a316c[_0x394cf6(0xc3f)]['enemy'+'Count']):'-'],[_0x2e21ac[_0x394cf6(0xb6a)],'off\x20t'+_0x394cf6(0xde9)+_0x394cf6(0x798)+'nager',_0x3a316c&&_0x3a316c[_0x394cf6(0xc3f)]&&_0x3a316c[_0x394cf6(0xc3f)]['camer'+'a']?_0x3a316c[_0x394cf6(0xc3f)]['camer'+'a']+'\x20('+_0x3a316c['esp']['camer'+_0x394cf6(0x572)]+')':'-']];for(_0x25ebd6=0x269f*0x1+-0x23e7+0x57*-0x8;_0x25ebd6<_0x5e6109['lengt'+'h'];_0x25ebd6++){var _0x3366c3=_0x1c107c(_0x5e6109[_0x25ebd6][0x9*-0xe9+0x4*0x823+-0x185b]),_0x159af0=_0x3347ed(_0x2e21ac['FiqWP'],_0x394cf6(0xd01)+'l');_0x159af0['style']['minWi'+'dth']='0',_0x159af0['style'][_0x394cf6(0x22d)]='1',_0x159af0[_0x394cf6(0x21d)]['textA'+_0x394cf6(0x87b)]=_0x2e21ac[_0x394cf6(0xc4b)],_0x159af0[_0x394cf6(0x21a)+'onten'+'t']=String(_0x5e6109[_0x25ebd6][-0x2e*-0x53+0x12cc+-0x21b4]),_0x159af0[_0x394cf6(0xe3d)+'et']['k']=_0x5e6109[_0x25ebd6][0x1e*-0x1e+-0x1b31*-0x1+-0x17ac],_0x3366c3[_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x159af0);var _0xf594c5=_0x19a453['lengt'+'h']?_0x19a453[_0x19a453[_0x394cf6(0x875)+'h']-(-0x26f7+-0x2*-0xd7c+-0x10*-0xc0)]:null;if(!_0xf594c5){if(_0x394cf6(0x297)!=='ruiyt')return{'ok':![],'error':_0x8b73e6(_0x1d503d&&_0x3374f1[_0x394cf6(0x2e3)+'ge']||_0x273108)[_0x394cf6(0xd92)](0x2482+-0x11*0x1d6+0x54c*-0x1,-0x1*0x178f+-0xc7d+0x2484)};else _0xf594c5=_0x477462(_0x2e21ac['nvqGr'],![]),_0x19a453[_0x394cf6(0xc27)](_0xf594c5);}_0xf594c5['body'][_0x394cf6(0xac2)+'dChil'+'d'](_0x3366c3),_0xf594c5[_0x394cf6(0xd40)][_0x394cf6(0xd76)+_0x394cf6(0x312)]['sp']=_0x159af0;}var _0x405489=_0x477462(_0x2e21ac[_0x394cf6(0xbb4)],![]),_0x6870f7=[[_0x394cf6(0xc5f)+_0x394cf6(0xb69),_0x3a316c&&_0x3a316c['local']&&_0x3a316c[_0x394cf6(0x9e1)][_0x394cf6(0xad7)]?_0x2e21ac[_0x394cf6(0x392)](_0x2e21ac[_0x394cf6(0x3ad)],_0x3a316c[_0x394cf6(0x9e1)][_0x394cf6(0xad7)]):_0x2e21ac[_0x394cf6(0x4a3)],_0x3a316c&&_0x3a316c[_0x394cf6(0x9e1)]&&_0x3a316c[_0x394cf6(0x9e1)]['feet']?_0x3a316c['local'][_0x394cf6(0xc40)]['map'](function(_0x18b3f1){var _0x16c75d=_0x394cf6,_0x5f50d9={'bzUFz':function(_0x238708,_0x10dc8b){return _0x238708+_0x10dc8b;},'UXUMf':'auto'};if(_0x2e21ac['zPlxw'](_0x16c75d(0x914),_0x2e21ac[_0x16c75d(0x3d4)]))_0x4bbcf5['style'][_0x16c75d(0xb9c)]=_0x5f50d9[_0x16c75d(0xa58)](_0xcf00a1['pos']['x'],'px'),_0x396fd4[_0x16c75d(0x21d)][_0x16c75d(0x4cf)]=_0x3c920a[_0x16c75d(0x218)]['y']+'px',_0x3fbcfe['style']['right']=_0x5f50d9[_0x16c75d(0x367)],_0x5e4551[_0x16c75d(0x21d)][_0x16c75d(0xda9)+'m']=_0x16c75d(0x6ae);else return Math[_0x16c75d(0x3c3)](_0x2e21ac['GXtyk'](_0x18b3f1,0x24a9+-0x28*0xad+-0x2b*0x37))/(0x1ffa+0x1a2e+0x1*-0x39c4);})[_0x394cf6(0xc59)]('\x20\x20'):'-'],[_0x394cf6(0xca8),'+'+_0xca7fc2+'m',_0x3a316c&&_0x3a316c[_0x394cf6(0x9e1)]&&_0x3a316c[_0x394cf6(0x9e1)]['eye']?_0x3a316c['local']['eye']['map'](function(_0x1747c9){var _0x28d271=_0x394cf6;return _0x316308['yeeQq'](Math[_0x28d271(0x3c3)](_0x1747c9*(0x1*0x228a+0x131*-0xe+-0x1178)),-0xcc4+-0x2092*0x1+0x2dba);})[_0x394cf6(0xc59)]('\x20\x20'):'-'],['Walk\x20'+_0x394cf6(0x6f7),_0x394cf6(0x5cd),_0x1f1dfe(_0x3a316c,'FPSco'+_0x394cf6(0xb9f)+'ler',-0x35*0x76+0x255+0x1629)],[_0x394cf6(0x79d)+_0x394cf6(0x8ee)+'ed',_0x394cf6(0xa34),_0x1f1dfe(_0x3a316c,_0x2e21ac[_0x394cf6(0x4a3)],-0x796*0x2+0x10*0xbe+0x38c)],[_0x2e21ac[_0x394cf6(0xe5b)],_0x2e21ac['VtnwI'],_0x1f1dfe(_0x3a316c,'FPSco'+_0x394cf6(0xb9f)+'ler',-0x2258+0x4*-0x3b+0x2*0x1230)],[_0x2e21ac['psfxI'],'Healt'+'hScri'+_0x394cf6(0x976)+'C0',_0x1f1dfe(_0x3a316c,_0x2e21ac['hcaUl'],0x5*-0x6a7+-0x1ce9+0x3eec)]];for(_0x25ebd6=0x2532+-0x1f9e+-0x594;_0x25ebd6<_0x6870f7[_0x394cf6(0x875)+'h'];_0x25ebd6++){var _0x36c691=('7|2|3'+'|0|6|'+'9|8|4'+'|1|5')['split']('|'),_0x345224=0x4e2+-0x33a*0x8+0x14ee;while(!![]){switch(_0x36c691[_0x345224++]){case'0':_0x529ee8[_0x394cf6(0x21d)][_0x394cf6(0x22d)]='1';continue;case'1':_0x405489[_0x394cf6(0xd40)][_0x394cf6(0xac2)+'dChil'+'d'](_0x1200ec);continue;case'2':var _0x529ee8=_0x2e21ac['rZqgm'](_0x3347ed,_0x394cf6(0xd9d),_0x394cf6(0xd01)+'l');continue;case'3':_0x529ee8[_0x394cf6(0x21d)][_0x394cf6(0x358)+_0x394cf6(0x63d)]='0';continue;case'4':_0x1200ec['appen'+'dChil'+'d'](_0x529ee8);continue;case'5':_0x405489['body'][_0x394cf6(0xd76)+_0x394cf6(0x312)]['sp']=_0x529ee8;continue;case'6':_0x529ee8['style'][_0x394cf6(0xb1c)+'lign']='right';continue;case'7':var _0x1200ec=_0x2e21ac['EaWNU'](_0x1c107c,_0x6870f7[_0x25ebd6][0x1e12+-0x1a9c+-0x376]);continue;case'8':_0x529ee8[_0x394cf6(0xe3d)+'et']['k']=_0x6870f7[_0x25ebd6][0x135b+0x1*-0x22eb+-0x5*-0x31d];continue;case'9':_0x529ee8['textC'+'onten'+'t']=String(_0x6870f7[_0x25ebd6][-0x18c1+-0x79b+0x205e]);continue;}break;}}_0x19a453['push'](_0x405489);}else _0x331e35[_0x394cf6(0x949)+_0x394cf6(0x50a)+'te']('aria-'+'check'+'ed',_0x1e0115()?_0x316308[_0x394cf6(0x630)]:'false');}if(_0x2e21ac['EdQZA'](_0x59f833,_0x2e21ac[_0x394cf6(0xc94)])){var _0x381ac0=_0x477462('Diagn'+_0x394cf6(0x3d3)+'s',![]),_0x38c2e5=_0x3a316c&&_0x3a316c['warni'+_0x394cf6(0xaa0)]&&_0x3a316c[_0x394cf6(0xa70)+_0x394cf6(0xaa0)][_0x394cf6(0x875)+'h']?_0x3a316c[_0x394cf6(0xa70)+_0x394cf6(0xaa0)]['join']('\x0a'):_0x394cf6(0xd7c)+'rning'+'s';_0x381ac0[_0x394cf6(0xd40)][_0x394cf6(0xac2)+_0x394cf6(0xd84)+'d'](_0x2e21ac[_0x394cf6(0x573)](_0x3347ed,_0x394cf6(0xda1),_0x2e21ac[_0x394cf6(0x3d8)],_0x38c2e5)),_0x19a453[_0x394cf6(0xc27)](_0x381ac0);var _0x271a2d=_0x2e21ac[_0x394cf6(0xdbf)](_0x477462,'Repor'+'t',![]),_0x9c0bce=_0x2e21ac[_0x394cf6(0x573)](_0x3347ed,'butto'+'n',_0x2e21ac[_0x394cf6(0xc3e)],'Copy\x20'+'JSON\x20'+'to\x20cl'+_0x394cf6(0xc4f)+'rd');_0x9c0bce[_0x394cf6(0xaeb)]='butto'+'n',_0x9c0bce['oncli'+'ck']=function(){var _0x2d51c7=_0x394cf6,_0x34a908={'azjgP':'Copie'+'d'};if(_0x2d51c7(0xa7c)!==_0x316308[_0x2d51c7(0x29a)])try{var _0x2a6ad5=_0x316308[_0x2d51c7(0x985)](_0x316308[_0x2d51c7(0x985)](_0x33c6f5+'\x0a',JSON[_0x2d51c7(0xc35)+_0x2d51c7(0x593)](_0x3a316c,null,-0x7bd+-0xc23+0x7*0x2d7))+'\x0a',_0x4c0449);if(navigator[_0x2d51c7(0xaec)+_0x2d51c7(0x2e2)]&&navigator['clipb'+'oard'][_0x2d51c7(0x236)+'Text'])navigator[_0x2d51c7(0xaec)+_0x2d51c7(0x2e2)]['write'+'Text'](_0x2a6ad5)['then'](function(){var _0x5deae0=_0x2d51c7;_0x9c0bce[_0x5deae0(0x21a)+_0x5deae0(0x1f5)+'t']=_0x34a908[_0x5deae0(0x42d)];});else _0x9c0bce[_0x2d51c7(0x21a)+'onten'+'t']=_0x2d51c7(0x5ec)+'oard\x20'+'block'+_0x2d51c7(0x230)+'open\x20'+_0x2d51c7(0xb5f)+'anel\x20'+_0x2d51c7(0x235)+'ad';}catch(_0x4ce2c1){_0x316308['jqmYd'](_0x2d51c7(0x684),_0x2d51c7(0xae6))?_0x594005['oncli'+'ck']=function(){_0x7b0801(_0x334cee);}:_0x9c0bce[_0x2d51c7(0x21a)+_0x2d51c7(0x1f5)+'t']=_0x2d51c7(0xb1f)+_0x2d51c7(0xb71)+'d';}else{_0x137fa9[_0x2d51c7(0x9bc)+_0x2d51c7(0x901)+_0x2d51c7(0x4af)](),_0xf710ec(_0x2d51c7(0xdc5)+_0x2d51c7(0xcf3));return;}},_0x271a2d[_0x394cf6(0xd40)]['appen'+'dChil'+'d'](_0x3347ed(_0x394cf6(0xda1),_0x2e21ac['yQIDJ'],_0x2e21ac[_0x394cf6(0xd1f)])),_0x271a2d['body']['appen'+'dChil'+'d'](_0x9c0bce),_0x19a453['push'](_0x271a2d);}return _0x19a453;}else _0x293cae[_0x394cf6(0xa70)+_0x394cf6(0xaa0)]['push']('rebui'+_0x394cf6(0x71e)+_0x394cf6(0xc6e)+_0x394cf6(0x1e9)+_0x394cf6(0xd25)+_0x394cf6(0x322)+_0x394cf6(0x971)+_0x394cf6(0xb1b)+_0x332003[_0x394cf6(0xb5b)+'ncesR'+_0x394cf6(0xaba)+'ed']['join'](',\x20'));}function _0x3707b2(){var _0x5800c8=_0x57da09;if(_0x5734bd[_0x5800c8(0x46c)])_0x284d30(!![]);}function _0x2cf769(){var _0x54e029=_0x57da09;try{var _0x35de13=localStorage[_0x54e029(0x28c)+'em'](_0x423556);if(!_0x35de13)return;var _0x11ef3f=JSON['parse'](_0x35de13);if(_0x11ef3f&&typeof _0x11ef3f['x']===_0x2e21ac[_0x54e029(0xae3)]&&typeof _0x11ef3f['y']===_0x2e21ac['OaWkV'])_0x5734bd[_0x54e029(0x218)]=_0x11ef3f;}catch(_0x548c01){}}function _0x43de45(){var _0x562f8f=_0x57da09;if(_0x2e21ac['kaCsg'](_0x2e21ac['YTwzA'],_0x2e21ac[_0x562f8f(0x430)])){var _0x14840b=_0x2dcb12['getEl'+_0x562f8f(0x6df)+'ById'](_0x2e21ac[_0x562f8f(0x7ca)]);if(_0x14840b)_0x14840b['remov'+'e']();}else try{localStorage['setIt'+'em'](_0x423556,JSON[_0x562f8f(0xc35)+'gify'](_0x5734bd[_0x562f8f(0x218)]));}catch(_0x293987){}}function _0x8dc76d(){var _0x53ea18=_0x57da09,_0x77ea9c=_0x5734bd['root'];if(!_0x77ea9c||!_0x77ea9c[_0x53ea18(0x21d)])return;_0x5734bd[_0x53ea18(0x218)]?(_0x77ea9c['style'][_0x53ea18(0xb9c)]=_0x5734bd['pos']['x']+'px',_0x77ea9c[_0x53ea18(0x21d)][_0x53ea18(0x4cf)]=_0x2e21ac[_0x53ea18(0xbf1)](_0x5734bd['pos']['y'],'px'),_0x77ea9c[_0x53ea18(0x21d)][_0x53ea18(0xcef)]=_0x2e21ac[_0x53ea18(0xd75)],_0x77ea9c[_0x53ea18(0x21d)][_0x53ea18(0xda9)+'m']='auto'):(_0x77ea9c[_0x53ea18(0x21d)]['left']=_0x53ea18(0x6ae),_0x77ea9c['style'][_0x53ea18(0x4cf)]=_0x53ea18(0x6ae),_0x77ea9c[_0x53ea18(0x21d)][_0x53ea18(0xcef)]=_0x53ea18(0xe23),_0x77ea9c['style'][_0x53ea18(0xda9)+'m']=_0x2e21ac['HNKvF']);}function _0x3ad78a(_0x2652a1,_0x2299a0){var _0x33edde=_0x57da09,_0x1df33f={'hiNfl':_0x33edde(0x6af)+'|0|2|'+_0x33edde(0x243),'tnOeP':function(_0x1caf64,_0x37410a){return _0x1caf64===_0x37410a;},'gmkwZ':function(_0x676b78,_0xa92873){var _0x27c414=_0x33edde;return _0x2e21ac[_0x27c414(0xac9)](_0x676b78,_0xa92873);},'Ifvjp':'grabb'+_0x33edde(0x710),'uPKxt':function(_0x412752,_0x4fc9db){return _0x2e21ac['CfXWR'](_0x412752,_0x4fc9db);},'cTbVY':function(_0x2e6ccf,_0x550ec0){return _0x2e6ccf(_0x550ec0);},'kSrbL':function(_0x4fbf3a,_0x5cd443){return _0x4fbf3a+_0x5cd443;},'fdMUf':function(_0x1ad77c,_0x2da246){var _0x41b305=_0x33edde;return _0x2e21ac[_0x41b305(0x47c)](_0x1ad77c,_0x2da246);},'ulmUQ':function(_0x3f837b,_0x1c7f90,_0xa3604f,_0x2747d9){return _0x3f837b(_0x1c7f90,_0xa3604f,_0x2747d9);}};try{if(_0x2e21ac[_0x33edde(0x42f)]('OZPlJ',_0x33edde(0xd4f))){var _0x1ff950=![],_0x18a554=-0x1f*-0xe3+-0x877+-0x1306,_0x2558cf=0xf47*-0x1+0x192+0xdb5;_0x2299a0['style']['curso'+'r']='grab',_0x2299a0[_0x33edde(0x21d)][_0x33edde(0x9e3)+_0x33edde(0x63f)+'n']=_0x2e21ac[_0x33edde(0x8ab)];var _0x2dda48=function(_0x36a0fa){var _0x34264b=_0x33edde,_0x1aa8fa=_0x1df33f['hiNfl'][_0x34264b(0xb4c)]('|'),_0x205610=0xa1f+-0x1*0x12d6+-0x61*-0x17;while(!![]){switch(_0x1aa8fa[_0x205610++]){case'0':(!_0x2652a1[_0x34264b(0x21d)][_0x34264b(0xb9c)]||_0x2652a1['style'][_0x34264b(0xb9c)]===_0x34264b(0x6ae))&&(_0x44fc06['left']=(window[_0x34264b(0xb3b)+_0x34264b(0xdaf)]||0xe71+-0x3f9+-0xa78)-(_0x2652a1[_0x34264b(0x241)+_0x34264b(0x2e7)+'h']||0x166c+-0x5*-0x7d+0x1*-0x1671)-(0x18b*-0x4+-0x418+-0x297*-0x4));continue;case'1':_0x18a554=(_0x36a0fa[_0x34264b(0xc43)+'tX']||-0x997+0x1509+-0xb72)-_0x44fc06[_0x34264b(0xb9c)];continue;case'2':(!_0x2652a1[_0x34264b(0x21d)]['top']||_0x1df33f[_0x34264b(0x7c0)](_0x2652a1['style']['top'],_0x34264b(0x6ae)))&&(_0x44fc06['top']=(window['inner'+_0x34264b(0x7cd)+'t']||-0x1fb7+-0xbe+0x2075)-(_0x2652a1['offse'+'tHeig'+'ht']||0x3b*0x9b+0xf14+-0x313d)-(-0x44*-0x87+0xd6*0x5+-0x13f9*0x2));continue;case'3':_0x1ff950=!![];continue;case'4':try{_0x36a0fa['preve'+_0x34264b(0x901)+'ault']();}catch(_0x576af9){}continue;case'5':_0x2558cf=_0x1df33f['gmkwZ'](_0x36a0fa['clien'+'tY']||-0x1609+-0x20c2+0x36cb,_0x44fc06[_0x34264b(0x4cf)]);continue;case'6':_0x2299a0[_0x34264b(0x21d)][_0x34264b(0xe37)+'r']=_0x1df33f[_0x34264b(0x1f0)];continue;case'7':var _0x44fc06={'left':_0x1df33f[_0x34264b(0xb34)](parseFloat,_0x2652a1[_0x34264b(0x21d)][_0x34264b(0xb9c)])||-0x127e*-0x2+-0xb*-0x368+-0x4a74,'top':_0x1df33f[_0x34264b(0x7d5)](parseFloat,_0x2652a1[_0x34264b(0x21d)]['top'])||-0x1f87+0x1b52*0x1+0x435};continue;}break;}},_0x4f3303=function(_0x59881c){var _0x1298d1=_0x33edde,_0x3b7469=_0x2e21ac['BWUPV']['split']('|'),_0x403a60=0x1f40+-0xa1c+-0x1524;while(!![]){switch(_0x3b7469[_0x403a60++]){case'0':_0x10c1d2=Math['max'](-0x24b9+0xa3*0x2+0x237b,Math[_0x1298d1(0xae4)](_0x2e21ac['eDsLG']((window['inner'+_0x1298d1(0xdaf)]||0x1dcf+-0xbb5+-0xe*0x14b)-_0x13f87c,0x2533+-0x2cc*0x5+-0x172f),_0x10c1d2));continue;case'1':_0x5734bd['pos']={'x':_0x10c1d2,'y':_0x177706};continue;case'2':var _0x10c1d2=_0x2e21ac[_0x1298d1(0x42b)](_0x59881c['clien'+'tX']||-0x8c7*-0x3+-0x1*-0x3a+-0x1a8f,_0x18a554),_0x177706=_0x2e21ac['iJmQR'](_0x59881c[_0x1298d1(0xc43)+'tY']||0x7e8+-0x2da*0x6+0x934,_0x2558cf);continue;case'3':_0x2652a1['style'][_0x1298d1(0xcef)]=_0x2e21ac['XnJWH'];continue;case'4':var _0x13f87c=_0x2652a1[_0x1298d1(0x241)+_0x1298d1(0x2e7)+'h']||0xa9b+0x5f7+-0x1*0xe26,_0x5319f8=_0x2652a1['offse'+'tHeig'+'ht']||-0x16f4+-0x583+0x1e07;continue;case'5':_0x2652a1[_0x1298d1(0x21d)][_0x1298d1(0xda9)+'m']=_0x1298d1(0x6ae);continue;case'6':_0x2652a1['style'][_0x1298d1(0x4cf)]=_0x177706+'px';continue;case'7':_0x2652a1['style'][_0x1298d1(0xb9c)]=_0x2e21ac[_0x1298d1(0x932)](_0x10c1d2,'px');continue;case'8':if(!_0x1ff950)return;continue;case'9':_0x177706=Math['max'](0x2416+-0x1180+-0x128e,Math['min'](_0x2e21ac['tFXyr']((window['inner'+_0x1298d1(0x7cd)+'t']||-0xb35+-0x6ef*0x4+0x26f1)-_0x5319f8,-0x20b*0x1+-0x1afb*0x1+0xe87*0x2),_0x177706));continue;}break;}},_0xde6345=function(){var _0x28fee4=_0x33edde,_0x5cabe0={'DvuOz':_0x2e21ac[_0x28fee4(0xacf)]};if(_0x2e21ac[_0x28fee4(0x9d5)]('BeFcg',_0x28fee4(0x5b6))){if(!_0x1ff950)return;_0x1ff950=![],_0x2299a0['style'][_0x28fee4(0xe37)+'r']=_0x2e21ac['HxUgs'],_0x2e21ac[_0x28fee4(0x455)](_0x43de45);}else{var _0x1083db=_0x1df33f[_0x28fee4(0x8e0)](_0x1df33f[_0x28fee4(0xc36)](_0x28268a,'\x0a')+_0x44a589[_0x28fee4(0xc35)+'gify'](_0x3808d5,null,-0x1960+-0x1039*-0x1+0x928)+'\x0a',_0xdb0cca);if(_0x1e9dc5['clipb'+_0x28fee4(0x2e2)]&&_0x12cc96['clipb'+'oard'][_0x28fee4(0x236)+_0x28fee4(0x452)])_0x458b28[_0x28fee4(0xaec)+_0x28fee4(0x2e2)][_0x28fee4(0x236)+'Text'](_0x1083db)[_0x28fee4(0x2a8)](function(){var _0x217b44=_0x28fee4;_0x2cf54a[_0x217b44(0x21a)+_0x217b44(0x1f5)+'t']=_0x5cabe0['DvuOz'];});else _0x4f514c[_0x28fee4(0x21a)+'onten'+'t']=_0x28fee4(0x5ec)+_0x28fee4(0xa57)+_0x28fee4(0xc57)+'ed\x20-\x20'+'open\x20'+'the\x20p'+_0x28fee4(0xbe0)+_0x28fee4(0x235)+'ad';}};_0x2299a0['addEv'+'entLi'+_0x33edde(0x80e)+'r'](_0x2e21ac[_0x33edde(0x95d)],_0x2dda48),window['addEv'+_0x33edde(0x754)+_0x33edde(0x80e)+'r'](_0x2e21ac[_0x33edde(0x8d6)],_0x4f3303),window[_0x33edde(0x62c)+_0x33edde(0x754)+'stene'+'r'](_0x33edde(0x73c)+'up',_0xde6345),_0x2299a0[_0x33edde(0x62c)+_0x33edde(0x754)+'stene'+'r'](_0x2e21ac[_0x33edde(0x98d)],_0x2dda48,{'passive':![]}),window['addEv'+_0x33edde(0x754)+_0x33edde(0x80e)+'r'](_0x2e21ac[_0x33edde(0x49d)],_0x4f3303,{'passive':![]}),window[_0x33edde(0x62c)+_0x33edde(0x754)+'stene'+'r'](_0x33edde(0x9e3)+_0x33edde(0x772),_0xde6345);}else{var _0x67014e=_0x39c537(_0x3f3fd6['refs'][_0x33edde(0x2ad)+'h'],-0x1de3+0x24ff+-0x70c);_0xb8ab07['healt'+'h']=_0x1df33f[_0x33edde(0x777)](_0x529705,_0x67014e,_0x33edde(0x992)+_0x33edde(0x328)+'pt',_0x33edde(0xc15));}}catch(_0x3c5657){}}function _0x56787b(){var _0x4424e0=_0x57da09,_0x2cd71d={'MLeVS':function(_0x32bcdf,_0x2a013c){return _0x2e21ac['ccQnv'](_0x32bcdf,_0x2a013c);},'htqrS':'windo'+'w.','VUvTq':function(_0x34cb26,_0x57bd70){return _0x34cb26(_0x57bd70);},'UoDIi':function(_0x2c6baf){return _0x2c6baf();},'Jrcvk':_0x4424e0(0x233)};if(_0x5734bd[_0x4424e0(0xde3)])return _0x5734bd[_0x4424e0(0xadc)];try{if(!document['body']||!document[_0x4424e0(0xd40)]['appen'+_0x4424e0(0xd84)+'d'])return null;if(!document[_0x4424e0(0xa38)+_0x4424e0(0x6df)+'ById'](_0x4424e0(0x781)+_0x4424e0(0x85e)+_0x4424e0(0x462))){var _0x5d27ee=document[_0x4424e0(0x843)+_0x4424e0(0x2b5)+_0x4424e0(0xbe3)](_0x2e21ac[_0x4424e0(0xd99)]);_0x5d27ee['id']='sakur'+'a-men'+'u-css',_0x5d27ee['textC'+_0x4424e0(0x1f5)+'t']=_0x11c2b1,(document['head']||document[_0x4424e0(0xcc6)+_0x4424e0(0x2e4)+_0x4424e0(0x6df)])['appen'+_0x4424e0(0xd84)+'d'](_0x5d27ee);}var _0x4741af=_0x3347ed(_0x4424e0(0xda1),'mn-pa'+_0x4424e0(0x7c2));_0x4741af['id']=_0x2e21ac[_0x4424e0(0x957)];var _0x29fd21=_0x2e21ac[_0x4424e0(0x384)](_0x3347ed,_0x2e21ac['PdNdI'],'mn-si'+'de'),_0x410312=_0x3347ed(_0x4424e0(0xda1),_0x4424e0(0xc81)+'go',_0x1261a0);_0x29fd21['appen'+'dChil'+'d'](_0x410312);var _0x291eff=_0x3347ed(_0x4424e0(0xda1),'mn-ma'+'in'),_0x3c9ba3=_0x3347ed(_0x2e21ac[_0x4424e0(0xa73)],'mn-to'+'p'),_0x4a9cb6=_0x3347ed('div',_0x2e21ac[_0x4424e0(0x45f)]),_0x72573b=_0x2e21ac['TEnjo'](_0x3347ed,_0x2e21ac[_0x4424e0(0xa73)],'mn-h',_0x4424e0(0x50e)+_0x4424e0(0x982)+'llWar'+'z'),_0x532145=_0x3347ed(_0x2e21ac[_0x4424e0(0xa73)],_0x4424e0(0x872)+'b',_0x4424e0(0x8f5)+_0x4424e0(0xa1d));_0x4a9cb6[_0x4424e0(0xac2)+'dChil'+'d'](_0x72573b),_0x4a9cb6[_0x4424e0(0xac2)+_0x4424e0(0xd84)+'d'](_0x532145);var _0x38f438=_0x3347ed(_0x2e21ac['PdNdI'],_0x2e21ac[_0x4424e0(0xe08)],_0x2e21ac[_0x4424e0(0xdc0)]);_0x38f438[_0x4424e0(0xd1a)+'ck']=function(){var _0x88c5fd=_0x4424e0;if(_0x88c5fd(0x877)!==_0x2e21ac[_0x88c5fd(0xcbf)])try{_0x581842[_0x88c5fd(0xd12)]();}catch(_0x1fe92d){}else _0x2e21ac[_0x88c5fd(0x9a2)](_0x284d30,![]);},_0x3c9ba3['appen'+_0x4424e0(0xd84)+'d'](_0x4a9cb6),_0x3c9ba3['appen'+_0x4424e0(0xd84)+'d'](_0x38f438);var _0x524e3f=_0x3347ed(_0x2e21ac['PdNdI'],'mn-co'+'ls');_0x291eff['appen'+'dChil'+'d'](_0x3c9ba3),_0x291eff[_0x4424e0(0xac2)+_0x4424e0(0xd84)+'d'](_0x524e3f),_0x4741af['appen'+_0x4424e0(0xd84)+'d'](_0x29fd21),_0x4741af[_0x4424e0(0xac2)+'dChil'+'d'](_0x291eff),document[_0x4424e0(0xd40)]['appen'+_0x4424e0(0xd84)+'d'](_0x4741af),_0x5734bd['root']=_0x4741af,_0x5734bd['cols']=_0x524e3f,_0x5734bd[_0x4424e0(0x9d8)]=_0x72573b,_0x5734bd['sub']=_0x532145,_0x2cf769(),_0x2e21ac['OyAbL'](_0x8dc76d),_0x2e21ac[_0x4424e0(0xa13)](_0x3ad78a,_0x4741af,_0x3c9ba3);var _0x3d7bdf={};for(var _0x3252d8=0x7e*0x3a+0x7*0x69+-0x1f6b;_0x3252d8<_0x3f1e86['lengt'+'h'];_0x3252d8++){var _0x4ac3a0=_0x3f1e86[_0x3252d8],_0x5d52d1=_0x3347ed(_0x2e21ac[_0x4424e0(0x565)],_0x4424e0(0x60c)+'b',_0x4424e0(0x967)+'l>'+_0x4ac3a0['label']+_0x2e21ac[_0x4424e0(0x3b7)]);_0x5d52d1[_0x4424e0(0xaeb)]='butto'+'n',_0x5d52d1['title']=_0x4ac3a0[_0x4424e0(0x406)],function(_0x5c94df){_0x5d52d1['oncli'+'ck']=function(){var _0x3d453a=_0xbe61,_0x4bbde7={'OyuzO':function(_0x1fffb3,_0x501615){return _0x2cd71d['MLeVS'](_0x1fffb3,_0x501615);},'yHaIp':function(_0x236ec9,_0x583ff5){return _0x236ec9+_0x583ff5;},'lUbmw':_0x2cd71d[_0x3d453a(0x885)]};if('wImQW'===_0x3d453a(0xbbd)){var _0x469092=_0x1337b0['keys'](_0x571342);for(var _0x3bb533=-0xc*0x17f+0x1*-0x13d2+0x25c6;_0x3bb533<_0x469092[_0x3d453a(0x875)+'h']&&_0x3bb533<-0x6ab*0x5+-0x3*-0x2b4+0x3*0x931;_0x3bb533++){var _0x4c9a93=_0xee7fe5[_0x469092[_0x3bb533]];if(_0x4c9a93&&_0x4bbde7[_0x3d453a(0x3cc)](typeof _0x4c9a93,'objec'+'t')&&_0x4c9a93[_0x3d453a(0xa02)+'e']&&_0x4c9a93[_0x3d453a(0xa02)+'e'][_0x3d453a(0xc76)+'8']&&_0x4c9a93[_0x3d453a(0xa02)+'e'][_0x3d453a(0xc76)+'8']['buffe'+'r'])return _0xfaaa66[_0x3d453a(0x968)+'e']=_0x4bbde7[_0x3d453a(0x224)](_0x4bbde7[_0x3d453a(0x224)](_0x4bbde7[_0x3d453a(0x38b)],_0x469092[_0x3bb533]),'.Modu'+'le'),_0x4c9a93;}}else _0x2cd71d[_0x3d453a(0x1f8)](_0x130d79,_0x5c94df);};}(_0x4ac3a0['id']),_0x3d7bdf[_0x4ac3a0['id']]=_0x5d52d1,_0x29fd21['appen'+_0x4424e0(0xd84)+'d'](_0x5d52d1);}_0x5734bd[_0x4424e0(0x4eb)+'ns']=_0x3d7bdf;var _0x1295c3=_0x3347ed('div',null,_0x4a75b0);return _0x1295c3['id']='sakur'+_0x4424e0(0x1f9)+'al',_0x1295c3['title']=_0x2e21ac[_0x4424e0(0x7e6)],_0x1295c3[_0x4424e0(0xbd6)+_0x4424e0(0x70d)+'er']=function(){var _0xa3b3be=_0x4424e0;_0x1295c3[_0xa3b3be(0x21d)][_0xa3b3be(0x9fb)+'ty']='1';},_0x1295c3['onmou'+_0x4424e0(0x377)+'ve']=function(){var _0x69e36b=_0x4424e0;_0x1295c3['style'][_0x69e36b(0x9fb)+'ty']=_0x5734bd[_0x69e36b(0x46c)]?'1':'.5';},_0x1295c3[_0x4424e0(0xd1a)+'ck']=function(_0xc0338c){var _0x4dee39=_0x4424e0;if(_0xc0338c&&_0xc0338c[_0x4dee39(0x469)+_0x4dee39(0xdea)+_0x4dee39(0xc8b)])_0xc0338c[_0x4dee39(0x469)+'ropag'+_0x4dee39(0xc8b)]();_0x284d30(!_0x5734bd['open']);},document[_0x4424e0(0xd40)][_0x4424e0(0xac2)+_0x4424e0(0xd84)+'d'](_0x1295c3),_0x5734bd[_0x4424e0(0xd6e)]=_0x1295c3,setInterval(function(){var _0x92eb5f=_0x4424e0;try{if(!_0x5734bd['petal'])return;var _0x5df09d=_0x2cd71d[_0x92eb5f(0x606)](_0x25652d);_0x5734bd[_0x92eb5f(0xd6e)][_0x92eb5f(0x21d)][_0x92eb5f(0x9fb)+'ty']=_0x5734bd[_0x92eb5f(0x46c)]?'1':_0x5df09d?'.8':_0x2cd71d[_0x92eb5f(0xccb)],_0x5734bd[_0x92eb5f(0xd6e)][_0x92eb5f(0x289)]=_0x5df09d?_0x92eb5f(0x50e)+_0x92eb5f(0x982)+_0x92eb5f(0xc09)+'z\x20(In'+_0x92eb5f(0xcb5):'Sakur'+_0x92eb5f(0x982)+'llWar'+_0x92eb5f(0xd19)+_0x92eb5f(0x913)+'g\x20for'+'\x20the\x20'+_0x92eb5f(0xd15)+_0x92eb5f(0xe5a)+_0x92eb5f(0xa43);}catch(_0xf9b594){}},0x7f1*-0x3+-0xc1f+0x26ae),_0x5734bd['built']=!![],_0x130d79(_0x5734bd[_0x4424e0(0x7bd)]),_0x4741af;}catch(_0x992b3f){if(_0x2e21ac[_0x4424e0(0x943)](_0x4424e0(0x9b4),_0x2e21ac['LwJhy']))return console[_0x4424e0(0x80d)](_0x4424e0(0x5e9)+_0x4424e0(0x7f9)+'\x20menu'+_0x4424e0(0xbb0)+'ailab'+'le',_0x2e21ac[_0x4424e0(0x868)](_0x4424e0(0x34d)+':',_0x243c0c),_0x992b3f),null;else _0xc53b8a=_0x2e21ac[_0x4424e0(0xabf)](_0x35bc0e,_0x293dab);}}function _0x130d79(_0x34a141){var _0x30138d=_0x57da09,_0x4e0bf1={'AOulF':function(_0x478730){var _0x12b984=_0xbe61;return _0x2e21ac[_0x12b984(0x3e8)](_0x478730);}};if(_0x2e21ac[_0x30138d(0x64d)]==='iPLKC'){_0x5734bd[_0x30138d(0x7bd)]=_0x34a141,_0x5734bd[_0x30138d(0x648)]=[];if(!_0x5734bd[_0x30138d(0x720)])return;var _0x4b9ace=null;for(var _0x3f40ab=0xa79*0x1+-0xc3d+0x1c4*0x1;_0x3f40ab<_0x3f1e86['lengt'+'h'];_0x3f40ab++)if(_0x2e21ac[_0x30138d(0x72a)](_0x3f1e86[_0x3f40ab]['id'],_0x34a141))_0x4b9ace=_0x3f1e86[_0x3f40ab];_0x5734bd[_0x30138d(0x9d8)]['textC'+_0x30138d(0x1f5)+'t']=_0x2e21ac[_0x30138d(0xd83)]('Sakur'+'a\x20Ski'+_0x30138d(0xc09)+_0x30138d(0xd09),_0x4b9ace&&_0x4b9ace[_0x30138d(0x406)]||'?');for(var _0x51bc17 in _0x5734bd[_0x30138d(0x4eb)+'ns']){if(_0x5734bd['butto'+'ns'][_0x51bc17][_0x30138d(0x8ca)+'List'])_0x5734bd[_0x30138d(0x4eb)+'ns'][_0x51bc17]['class'+'Name']=_0x2e21ac['BhQgs'](_0x2e21ac[_0x30138d(0x725)],_0x51bc17===_0x34a141?'\x20acti'+'ve':'');}var _0x35c04f=[];try{_0x35c04f=_0x2e21ac['qlhqG'](_0x347ae2,_0x34a141);}catch(_0x19b9df){if(_0x2e21ac[_0x30138d(0x216)]===_0x2e21ac[_0x30138d(0x408)]){var _0xee14d2=_0x4e0bf1[_0x30138d(0xaad)](_0x3546bc);if(_0xee14d2&&_0xee14d2[_0x30138d(0xa02)+'e']&&_0xee14d2[_0x30138d(0xa02)+'e']['HEAPU'+'8']&&_0xee14d2[_0x30138d(0xa02)+'e']['HEAPU'+'8'][_0x30138d(0x3df)+'r'])return _0xee14d2[_0x30138d(0xa02)+'e']['HEAPU'+'8'];}else _0x35c04f=[];}while(_0x5734bd['cols']['first'+'Child'])_0x5734bd[_0x30138d(0x720)]['remov'+'eChil'+'d'](_0x5734bd[_0x30138d(0x720)]['first'+_0x30138d(0xb50)]);for(var _0x1db91b=-0x153d+0xa1*0x7+-0x1af*-0xa;_0x1db91b<_0x35c04f['lengt'+'h'];_0x1db91b++)_0x5734bd[_0x30138d(0x720)][_0x30138d(0xac2)+_0x30138d(0xd84)+'d'](_0x35c04f[_0x1db91b]);}else return _0x2227b7[_0x30138d(0x968)+'e']=_0x30138d(0x4fb)+_0x30138d(0x355)+'bal',_0x1facde;}function _0x284d30(_0x2d773e){var _0x568d25=_0x57da09;_0x5734bd[_0x568d25(0x46c)]=!!_0x2d773e;var _0x2ea493=_0x56787b();if(!_0x2ea493)return;_0x2ea493[_0x568d25(0x8ca)+'Name']=_0x2e21ac[_0x568d25(0x865)]('mn-pa'+_0x568d25(0x7c2),_0x5734bd['open']?'\x20show'+'n':'');if(_0x5734bd[_0x568d25(0xd6e)])_0x5734bd[_0x568d25(0xd6e)]['style'][_0x568d25(0x9fb)+'ty']=_0x5734bd['open']?'1':'.5';if(_0x5734bd['open']){if(_0x568d25(0x940)===_0x2e21ac['pjWgC']){_0x26c9bb();return;}else{_0x2e21ac[_0x568d25(0x9a2)](_0x130d79,_0x5734bd[_0x568d25(0x7bd)]);try{var _0xe883d=window['inner'+_0x568d25(0x7cd)+'t']||0x129a*-0x2+0x1a1e*0x1+0x2*0x71b;if(_0x2e21ac['YmrXQ'](_0xe883d,-0x1bdb+0x1*0x1875+0x5d2))_0x575463(![]);}catch(_0x3132bb){}}}}function _0x183b7b(){var _0x2fed10=_0x57da09,_0x481f8b={'iRbFW':function(_0x470651,_0x3e9d83,_0x18b49e){return _0x2e21ac['eBrvT'](_0x470651,_0x3e9d83,_0x18b49e);},'ZcHpo':function(_0x2bcb32,_0xf09564){return _0x2bcb32/_0xf09564;},'IdHdZ':function(_0x50d4b1,_0x6a1927){return _0x50d4b1*_0x6a1927;}};if(!_0x5734bd[_0x2fed10(0x46c)]||!_0x5734bd[_0x2fed10(0xde3)])return;try{if('gEMqR'!=='gEMqR'){var _0x42210f=_0xf45858[_0x2fed10(0xb4c)]('+');_0x7e6af0=_0x4b5308(_0x28c8,_0x42210f[-0xca8+-0x115*-0x7+0x515][_0x2fed10(0x75d)+'Of'](_0x2fed10(0x992)+'h')===0x1711+-0xaaf*-0x1+-0x21c0?'Healt'+_0x2fed10(0x328)+'pt':'FPSco'+_0x2fed10(0xb9f)+_0x2fed10(0x38c),_0x481f8b['iRbFW'](_0x51ede8,_0x42210f[-0x29*0x29+0xb13+-0x481*0x1],0x35*0x2+0x1*-0xcd1+0xc77*0x1));}else{for(var _0xd82f9f=0x3e5*0x2+-0x2*-0x4bd+-0x2*0x8a2;_0xd82f9f<_0x5734bd[_0x2fed10(0x648)]['lengt'+'h'];_0xd82f9f++){try{_0x2e21ac['USdFF'](_0x2fed10(0x6d7),_0x2e21ac[_0x2fed10(0x9e9)])?_0x5734bd['syncs'][_0xd82f9f]():_0x20625c[_0x2fed10(0xdeb)]=_0x2e21ac[_0x2fed10(0x1f2)](_0x2fed10(0xbaa)+'otonN'+'etwor'+'kSync'+_0x2fed10(0x600)+'NPC_C'+_0x2fed10(0x785)+_0x2fed10(0x8f0)+'nd\x20no'+'\x20game'+_0x2fed10(0xe20)+_0x2fed10(0x260)+'That\x20'+'is\x20wh'+'at\x20',_0x2e21ac['FMUtE']);}catch(_0x5c3ddc){}}var _0xbff8a3=_0x462ba1;_0x5734bd['sub'][_0x2fed10(0x21a)+'onten'+'t']=_0xbff8a3?_0x2e21ac[_0x2fed10(0x3fb)](_0x2e21ac[_0x2fed10(0xdb1)](_0x2e21ac['cPzuy'](_0x2e21ac[_0x2fed10(0x641)](_0x2e21ac[_0x2fed10(0x53b)]('v',_0xbff8a3[_0x2fed10(0x899)+'on'])+_0x2e21ac[_0x2fed10(0x7a3)],_0xbff8a3[_0x2fed10(0x655)+'Appli'+'ed'])+'/'+_0xbff8a3[_0x2fed10(0x655)+'Total'],_0x2fed10(0xa32)+'playe'+'rs\x20'),_0xbff8a3[_0x2fed10(0xc3f)]&&_0xbff8a3[_0x2fed10(0xc3f)][_0x2fed10(0xe07)+_0x2fed10(0x437)+'t']||-0x7*0x407+0xac1*0x1+0x5d*0x30),_0x2e21ac['OJTlP'])+(_0xbff8a3[_0x2fed10(0x5d6)+_0x2fed10(0xb11)]&&_0xbff8a3['wasmM'+_0x2fed10(0xb11)]['captu'+'red']?Math['round'](_0x2e21ac[_0x2fed10(0xc83)](_0xbff8a3[_0x2fed10(0x5d6)+'emory'][_0x2fed10(0xa31)],0x173464+0xb0768+-0x29ad4*0x7))+'MB':'-'):_0x2fed10(0xad0)+_0x2fed10(0x513)+'r\x20the'+'\x20firs'+'t\x20rep'+'ort…';var _0x4f8682=_0x5734bd['cols'][_0x2fed10(0x594)+_0x2fed10(0xd85)+'torAl'+'l']?_0x5734bd[_0x2fed10(0x720)][_0x2fed10(0x594)+_0x2fed10(0xd85)+'torAl'+'l'](_0x2e21ac['ORBln']):[];for(var _0x119eba=-0x9f1+-0x1c36+-0x2627*-0x1;_0x119eba<_0x4f8682['lengt'+'h'];_0x119eba++){var _0x31b8eb=_0x4f8682[_0x119eba][_0x2fed10(0xe3d)+'et']['k'],_0xa5328a='';if(_0x31b8eb===_0x2e21ac[_0x2fed10(0xa2e)])_0xa5328a=_0xbff8a3?_0xbff8a3[_0x2fed10(0x899)+'on']:'-';else{if(_0x31b8eb===_0x2fed10(0x485)+'ed\x20/\x20'+_0x2fed10(0x745)+'tered')_0xa5328a=_0xbff8a3?_0xbff8a3['hooks'+_0x2fed10(0x229)+'ed']+'\x20/\x20'+_0xbff8a3[_0x2fed10(0x655)+_0x2fed10(0xc90)+_0x2fed10(0xca9)+'AtArm']:'-';else{if(_0x31b8eb===_0x2fed10(0x8e1)+'insta'+_0x2fed10(0x1ee)+_0x2fed10(0x375))_0xa5328a=_0xbff8a3&&_0xbff8a3[_0x2fed10(0x5d6)+'emory']&&_0xbff8a3[_0x2fed10(0x5d6)+_0x2fed10(0xb11)]['captu'+_0x2fed10(0x36b)]?_0x2e21ac[_0x2fed10(0x965)](Math[_0x2fed10(0x3c3)](_0xbff8a3[_0x2fed10(0x5d6)+_0x2fed10(0xb11)]['bytes']/(-0xddf9f+0x1*-0x14b261+0x329200))+_0x2e21ac[_0x2fed10(0xdfd)]+_0xbff8a3['wasmM'+_0x2fed10(0xb11)]['atMs'],'ms'):'-';else{if(_0x2e21ac[_0x2fed10(0x1e1)](_0x31b8eb,_0x2e21ac[_0x2fed10(0xb04)]))_0xa5328a=_0xbff8a3&&_0xbff8a3['esp']?String(_0xbff8a3[_0x2fed10(0xc3f)][_0x2fed10(0xe07)+_0x2fed10(0x437)+'t']):'-';else{if(_0x2e21ac[_0x2fed10(0x7a1)](_0x31b8eb,_0x2fed10(0x5f1)+'one\x20b'+_0x2fed10(0x4e5)+'u'))_0xa5328a=_0xbff8a3&&_0xbff8a3[_0x2fed10(0xc3f)]?String(_0xbff8a3['esp'][_0x2fed10(0x7da)+_0x2fed10(0xaa6)]):'-';else{if(_0x31b8eb===_0x2fed10(0xa09)+'he\x20li'+'ve\x20ma'+_0x2fed10(0x266))_0xa5328a=_0xbff8a3&&_0xbff8a3[_0x2fed10(0xc3f)]&&_0xbff8a3['esp'][_0x2fed10(0x986)+'a']?_0x2e21ac[_0x2fed10(0x51d)](_0xbff8a3[_0x2fed10(0xc3f)]['camer'+'a']+'\x20(',_0xbff8a3[_0x2fed10(0xc3f)]['camer'+_0x2fed10(0x572)])+')':'-';else{if(_0x31b8eb==='FPSco'+_0x2fed10(0xb9f)+_0x2fed10(0xd70)+'x2E4')_0xa5328a=_0xbff8a3&&_0xbff8a3[_0x2fed10(0x9e1)]&&_0xbff8a3['local'][_0x2fed10(0xc40)]?_0xbff8a3[_0x2fed10(0x9e1)][_0x2fed10(0xc40)][_0x2fed10(0xa88)](function(_0x578674){var _0x50c595=_0x2fed10;return _0x481f8b[_0x50c595(0x264)](Math['round'](_0x481f8b['IdHdZ'](_0x578674,0x11*-0x125+0xf7+0x12e2)),0x131b+-0x2d6*-0xd+0x117*-0x33);})[_0x2fed10(0xc59)]('\x20\x20'):'-';else{if(_0x2e21ac[_0x2fed10(0x2d4)](_0x31b8eb,_0x2fed10(0xce9)+'8'))_0xa5328a=_0xbff8a3&&_0xbff8a3[_0x2fed10(0x9e1)]&&_0xbff8a3['local']['eye']?_0xbff8a3['local'][_0x2fed10(0xc00)][_0x2fed10(0xa88)](function(_0x2cc29e){return _0x481f8b['ZcHpo'](Math['round'](_0x2cc29e*(0x6fe*-0x2+-0xa*-0x5f+0xaaa)),0x1*0x14e0+-0x113*-0x9+-0x1e27);})[_0x2fed10(0xc59)]('\x20\x20'):'-';else{var _0x2917c9=_0x31b8eb[_0x2fed10(0xb4c)]('+');_0xa5328a=_0x1f1dfe(_0xbff8a3,_0x2917c9[-0xa2+0xda+-0x1*0x38]['index'+'Of'](_0x2fed10(0x992)+'h')===-0x31b+0x1842+0x11d*-0x13?_0x2fed10(0x992)+_0x2fed10(0x328)+'pt':_0x2fed10(0x844)+_0x2fed10(0xb9f)+'ler',parseInt(_0x2917c9[-0x1418+0x25b7*-0x1+0x39d0],-0x125*0x1d+-0x2b*-0x79+0xcee));}}}}}}}}if(_0xa5328a!==_0x4f8682[_0x119eba][_0x2fed10(0x21a)+_0x2fed10(0x1f5)+'t'])_0x4f8682[_0x119eba][_0x2fed10(0x21a)+_0x2fed10(0x1f5)+'t']=_0xa5328a;}}}catch(_0x348d45){}}function _0x188d23(){var _0x298f08=_0x57da09;try{var _0x27e399=_0x2f34ad();return _0x27e399&&_0x27e399[_0x298f08(0xc40)]?_0x27e399['feet'][0xed5*0x2+0x1*-0x182b+0x57e*-0x1]:null;}catch(_0x12d1cf){if(_0x298f08(0x63c)!==_0x2e21ac['YgfQY']){var _0x111802=-0x1*0x15e5+-0x10b0*-0x1+-0x535*-0x1;for(var _0x2ced0b=-0xd*0x12c+-0x7cb+-0x83*-0x2d;_0x2ced0b<_0xf625e4[_0x298f08(0x875)+'h'];_0x2ced0b++){if(_0xc65568[_0x2ced0b][_0x298f08(0xa7a)]&&_0x9e59e4[_0x2ced0b][_0x298f08(0xa7a)][_0x298f08(0x2af)+'Index']!==_0x219f24)_0x111802++;}return _0x111802;}else return null;}}var _0x5d645b=-0x524+-0x746+0xc6c+0.5,_0x15ff96=-0x2b*-0x29+0x1bc5+-0x22a2*0x1+0.25,_0x4de106={},_0x38ea5a=null,_0xca7fc2=-0x11*0xac+0x9f*-0xe+0x141f+0.8;function _0x1e2253(_0x3206b8,_0x3f69f0,_0x4bfe81){var _0x44ed51=_0x57da09,_0x1e58be={'FunKF':_0x2e21ac[_0x44ed51(0xbe8)]};try{if('OaQut'==='OaQut'){var _0x337811=[],_0x835bd0,_0x320bb1,_0x49be5b=_0x2e21ac['BsVPU'](_0x3f69f0,null)&&_0x2e21ac[_0x44ed51(0xd30)](_0x3f69f0,undefined)&&isFinite(_0x3f69f0),_0x22b1f0=0xc30+0x185b+-0x1*0x248b;for(_0x835bd0=-0x102c+-0x15f7+0x2623;_0x2e21ac[_0x44ed51(0x5d4)](_0x835bd0,_0x3206b8[_0x44ed51(0x875)+'h']);_0x835bd0++){if(_0x44ed51(0xa4e)===_0x2e21ac[_0x44ed51(0xe45)]){var _0x324ca0=_0x157f20(_0x44ed51(0x6eb)+'otrol'+_0x44ed51(0x38c),_0xe08df5[_0x56a013[_0x23c85d]][_0x44ed51(0xa33)]);_0x324ca0[_0x44ed51(0x4df)]=_0x366ca5[_0x5448f3[_0x3b927e]][_0x44ed51(0x4df)],_0x324ca0[_0x44ed51(0x3d7)+_0x44ed51(0x9ac)+'s']=_0x450d91[_0x4369c3[_0x13add]]['first'+_0x44ed51(0xb05)]-_0x51271d;if(_0x324ca0[_0x44ed51(0xa7f)][_0x44ed51(0x2ad)+'h'])_0x324ca0[_0x44ed51(0x2ad)+'h']=_0x25fb72(_0xb0a2c1(_0x324ca0[_0x44ed51(0xa7f)][_0x44ed51(0x2ad)+'h'],0x22b8+-0x3*0x2bf+-0x1a6b),_0x44ed51(0x992)+_0x44ed51(0x328)+'pt',_0x44ed51(0xc15));_0x1de0f9['bots']['push'](_0x324ca0);}else{var _0xefcb56=_0x3206b8[_0x835bd0]['v'];if(!_0xefcb56)continue;var _0x34ed25=Math['sqrt'](_0x2e21ac['VreDd'](_0xefcb56[0x2685+-0x12bf+-0x13c6]*_0xefcb56[-0x1*-0x1d0f+0x15a6+-0x32b5*0x1],_0x2e21ac[_0x44ed51(0xc6c)](_0xefcb56[-0x2f*-0x53+-0x230a+0xb*0x1cd],_0xefcb56[-0x21c7*0x1+0x1*-0x1b3b+0x3d04])));if(_0x34ed25>_0x22b1f0)_0x22b1f0=_0x34ed25;}}var _0x59d1ce=_0x22b1f0*(-0x6*-0x5e0+0x2bd+-0x25fd+0.25),_0x213dd7=0xef*0x1f+0x1a*0xb1+-0x2eeb;typeof console!==_0x44ed51(0x2bd)+_0x44ed51(0x310)&&console['log']&&!globalThis[_0x44ed51(0xe38)+'ogged']&&(globalThis['__ppL'+_0x44ed51(0x457)]=0xcb4+-0x1665+0x9b2,console['log'](_0x2e21ac[_0x44ed51(0x363)](_0x2e21ac['YctEM'](_0x2e21ac[_0x44ed51(0xdd8)]+_0x3206b8[_0x44ed51(0x875)+'h']+(_0x44ed51(0xd3d)+'h=')+_0x22b1f0[_0x44ed51(0x45b)+'ed'](0x2*0x1182+-0x1202+0x100*-0x11),_0x2e21ac[_0x44ed51(0xb8a)])+_0x59d1ce['toFix'+'ed'](-0x3*0x622+-0x5*0x199+0x1a65)+(_0x44ed51(0xa80)+'n=')+_0x49be5b+('\x20samp'+_0x44ed51(0x308)),JSON[_0x44ed51(0xc35)+'gify'](_0x3206b8['slice'](-0x869+0x119a+-0xd*0xb5,-0xe3*-0x5+-0x1a53+0x15e6)))));for(_0x835bd0=0x1*-0x2653+0xb*-0x71+-0x1*-0x2b2e;_0x835bd0<_0x3206b8[_0x44ed51(0x875)+'h'];_0x835bd0++){var _0x2c6a18=_0x3206b8[_0x835bd0]['v'];if(!_0x2c6a18)continue;if(_0x2c6a18[-0x1b4+0x251*-0x8+-0x4*-0x50f]===-0x5c9+0x26a9+-0x838*0x4&&_0x2c6a18[0xb7*0x13+-0x19*0x6c+-0x308]===-0xf6f+-0x1d4a+0x2cb9&&_0x2c6a18[-0x882+-0xced*0x1+-0x1*-0x1571]===0x8*-0x289+0x23b*0x5+0x39*0x29)continue;var _0x1b85d1=Math[_0x44ed51(0x215)](_0x2e21ac['QqQtR'](_0x2e21ac['EQGUY'](_0x2c6a18[-0x14aa+-0x145e+0xa42*0x4],_0x2c6a18[0x1*0xd5d+0x4*0x20e+-0x1595]),_0x2c6a18[-0x53*0x53+-0x1fed+0x3ad8]*_0x2c6a18[0xa78+-0x27*0x76+0xd*0x94]));if(_0x1b85d1<_0x59d1ce){_0x213dd7++;continue;}_0x337811[_0x44ed51(0xc27)](_0x3206b8[_0x835bd0]);}if(!_0x337811[_0x44ed51(0x875)+'h'])return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x213dd7,'ambiguous':![],'reach':0x0,'held':![]};var _0x4a8a32=[];for(_0x835bd0=-0x2342+0x2047*-0x1+-0x4389*-0x1;_0x2e21ac[_0x44ed51(0xb82)](_0x835bd0,_0x337811[_0x44ed51(0x875)+'h']);_0x835bd0++){var _0xa0851c=_0x337811[_0x835bd0]['v'],_0x4c76b9=-(-0xbd3+-0x261+0x1*0xe35);for(_0x320bb1=0xa65*-0x3+0x371*0x1+-0x86*-0x35;_0x2e21ac['ugavA'](_0x320bb1,_0x4a8a32[_0x44ed51(0x875)+'h']);_0x320bb1++){var _0x14db8c=_0x4a8a32[_0x320bb1]['c'][-0x2621*0x1+0x1b21+0xb00]['v'],_0x526d6f=_0xa0851c[0x1223+-0x2639+-0x1416*-0x1]-_0x14db8c[0x116f*-0x1+-0xab*-0x5+0xe18],_0x4a222a=_0xa0851c[0x303*0xa+0x1461+-0x2e*0x119]-_0x14db8c[-0x29*0x35+0x1f6*0x11+-0x18d8],_0x3084a5=_0xa0851c[0x2*-0xcb9+0xc14+0xd60]-_0x14db8c[0x809+-0x1523+0x2*0x68e];if(_0x2e21ac[_0x44ed51(0x85f)](_0x526d6f*_0x526d6f+_0x2e21ac[_0x44ed51(0x4a4)](_0x4a222a,_0x4a222a),_0x2e21ac[_0x44ed51(0xdb2)](_0x3084a5,_0x3084a5))<=_0x15ff96){_0x4c76b9=_0x320bb1;break;}}if(_0x4c76b9===-(0x1*0x553+0x10fa+-0xb26*0x2))_0x4a8a32['push']({'c':[_0x337811[_0x835bd0]]});else _0x4a8a32[_0x4c76b9]['c'][_0x44ed51(0xc27)](_0x337811[_0x835bd0]);}var _0x2c925d=_0x4a8a32[-0x1688+-0xfb7+0x263f],_0x57af36=-Infinity;for(_0x320bb1=-0x1534+-0x97*-0x5+0x1241;_0x320bb1<_0x4a8a32[_0x44ed51(0x875)+'h'];_0x320bb1++){if(_0x44ed51(0x58e)===_0x44ed51(0x41d)){var _0x3aac06=(_0x44ed51(0xbf5)+'6|2|4'+_0x44ed51(0x382)+'5|11|'+_0x44ed51(0x39e))[_0x44ed51(0xb4c)]('|'),_0x849895=-0x502+-0x2f5*-0x6+0x2*-0x65e;while(!![]){switch(_0x3aac06[_0x849895++]){case'0':_0x2541e5[_0x44ed51(0xd40)]['lastC'+'hild']['sp']=_0x2300d0;continue;case'1':var _0x2300d0=_0x4b9d7c(_0x44ed51(0xd9d),_0x2e21ac[_0x44ed51(0x721)]);continue;case'2':_0x2300d0[_0x44ed51(0x21d)]['flex']='1';continue;case'3':_0x2300d0[_0x44ed51(0x21a)+_0x44ed51(0x1f5)+'t']=_0x1fb174(_0x2cb435[_0x120fb0][-0x12d+-0x2069*-0x1+0x2*-0xf9d]);continue;case'4':_0x2300d0[_0x44ed51(0x21d)][_0x44ed51(0xb1c)+_0x44ed51(0x87b)]=_0x2e21ac[_0x44ed51(0xc4b)];continue;case'5':_0x3891e6['appen'+_0x44ed51(0xd84)+'d'](_0x2300d0);continue;case'6':_0x2300d0[_0x44ed51(0x21d)][_0x44ed51(0x358)+'dth']='0';continue;case'7':_0x2300d0[_0x44ed51(0xe3d)+'et']['k']=_0x30796c[_0x578ceb][-0x1dec+0x987+0x1466];continue;case'8':_0x2541e5['body'][_0x44ed51(0xac2)+'dChil'+'d'](_0x3891e6);continue;case'9':!_0x2541e5&&(_0x2541e5=_0x2e21ac['HkFDe'](_0xbffcde,_0x44ed51(0x89d)+'on',![]),_0x25aed5[_0x44ed51(0xc27)](_0x2541e5));continue;case'10':var _0x3891e6=_0x2743f3(_0x4129c6[_0x292630][0x1535+-0x1*0x14bb+-0x7a]);continue;case'11':var _0x2541e5=_0x307ad2['lengt'+'h']?_0x105219[_0x47abd1['lengt'+'h']-(0x5ae*0x3+-0x176d+0x4*0x199)]:null;continue;}break;}}else{var _0x1ef68c=_0x4a8a32[_0x320bb1]['c'],_0x44aa34=_0x1ef68c[_0x44ed51(0x875)+'h']*(0x41d+-0x3*-0x3be+-0xb6f);if(_0x49be5b){var _0xdc0bcc=Infinity;for(var _0x462c73=-0x4*0x59b+-0x188d+0x2ef9;_0x2e21ac['VyJoE'](_0x462c73,_0x1ef68c['lengt'+'h']);_0x462c73++){var _0x107677=Math[_0x44ed51(0xa75)](_0x1ef68c[_0x462c73]['v'][-0xbd6*0x1+-0x1561+0x1*0x2138]-_0x3f69f0);if(_0x107677<_0xdc0bcc)_0xdc0bcc=_0x107677;}_0x44aa34-=_0xdc0bcc;}else{if(_0x2e21ac['EErKn'](_0x44ed51(0x656),_0x2e21ac[_0x44ed51(0x894)])){var _0xaa10f9=0x10*0x1d8+-0x2665+0x2f7*0x3;for(var _0x127817=-0x9b7*0x4+0x1ac3+0x13*0xa3;_0x127817<_0x1ef68c[_0x44ed51(0x875)+'h'];_0x127817++){var _0x1f105f=Math[_0x44ed51(0x215)](_0x2e21ac[_0x44ed51(0x2ee)](_0x1ef68c[_0x127817]['v'][-0x17da+0x2*-0x4d6+0x2186],_0x1ef68c[_0x127817]['v'][-0x132d*0x1+-0x1*-0x3e9+0xf44])+_0x2e21ac['mpSxw'](_0x1ef68c[_0x127817]['v'][0x246b*-0x1+0x4e6*0x2+0x1aa1],_0x1ef68c[_0x127817]['v'][0x6*0xce+0x9*0x4a+-0x76c]));if(_0x1f105f>_0xaa10f9)_0xaa10f9=_0x1f105f;}_0x44aa34+=_0xaa10f9;}else return _0xbcc13d();}_0x44aa34>_0x57af36&&(_0x57af36=_0x44aa34,_0x2c925d=_0x4a8a32[_0x320bb1]);}}var _0x5c7bdd=_0x2c925d['c'][-0x1*-0x13a5+-0x5*-0x58f+0x2e*-0x108],_0xc2e3c6=-(-0x18df+-0x10a+-0x3e*-0x6b);for(_0x320bb1=-0x235a+0x1b94+-0x1*-0x7c6;_0x320bb1<_0x2c925d['c'][_0x44ed51(0x875)+'h'];_0x320bb1++){var _0x28866e=_0x2c925d['c'][_0x320bb1]['v'],_0x2d00c7=Math['sqrt'](_0x28866e[0x5f3+-0x751+0x15e]*_0x28866e[-0x8c3*0x1+-0x2a2*0x8+0x1dd3]+_0x28866e[0x95*-0x43+0x164d+0x10b4]*_0x28866e[0x13*-0x100+0x7*-0x4c+0x2*0xa8b]);(_0x2d00c7>_0xc2e3c6||_0x2d00c7===_0xc2e3c6&&_0x28866e[-0x26dc*0x1+0x10f1*-0x1+-0x1*-0x37ce]<_0x5c7bdd['v'][0x16b0+0x2*0x345+0x1*-0x1d39])&&(_0xc2e3c6=_0x2d00c7,_0x5c7bdd=_0x2c925d['c'][_0x320bb1]);}var _0x7e2a53=![];if(_0x4bfe81&&_0x4bfe81['o']){if(_0x2e21ac['EypdE']!=='tqRly'){if(!_0x527c96['on'])_0x231335(!![],![]);else{if(_0x47b63a[_0x44ed51(0xbc1)])_0x55612f(![],![]);else{if(_0x521ea2())_0x2e21ac[_0x44ed51(0x71d)](_0xffe9a9,!![],!![]);else _0x2e21ac['exxHK'](_0x1ae18e,![],![]);}}}else for(_0x320bb1=-0x58*0x2b+0x1667+0x79f*-0x1;_0x2e21ac[_0x44ed51(0x4c2)](_0x320bb1,_0x2c925d['c'][_0x44ed51(0x875)+'h']);_0x320bb1++){if(_0x44ed51(0x531)!==_0x2e21ac['SskiJ']){if(_0x2e21ac[_0x44ed51(0x92a)](_0x2c925d['c'][_0x320bb1]['o'],_0x4bfe81['o']))continue;if(_0x49be5b){if(_0x2e21ac['RApoG']===_0x2e21ac[_0x44ed51(0x1ef)]){var _0x4a7083=Math[_0x44ed51(0xa75)](_0x2c925d['c'][_0x320bb1]['v'][0x23b+-0x5cb+0x391]-_0x3f69f0),_0x44bccb=Infinity;for(var _0x40be70=-0x1ba5+-0x23e0+0x3f85;_0x40be70<_0x2c925d['c'][_0x44ed51(0x875)+'h'];_0x40be70++){if(_0x44ed51(0xd6b)!==_0x2e21ac['RKmIb']){var _0x13baaf=_0x41a8f2[_0xce54d6[_0x409431]],_0x453a9c=_0x2e21ac[_0x44ed51(0x49f)](_0x1a8ccb,_0x2e21ac[_0x44ed51(0xb04)],_0x13baaf[_0x44ed51(0xa33)]);_0x453a9c[_0x44ed51(0x4df)]=_0x13baaf[_0x44ed51(0x4df)],_0x453a9c[_0x44ed51(0x3d7)+'SeenM'+'s']=_0x13baaf[_0x44ed51(0x3d7)+_0x44ed51(0xb05)]-_0x2f6b62,_0x453a9c['isLoc'+'al']=!!_0x557da3&&_0x453a9c['refs'][_0x44ed51(0x4c5)]===_0x2e21ac['UVCDV']('0x',_0xfabd52[_0x44ed51(0x69e)+_0x44ed51(0x710)](-0xf86*-0x2+0xa*0x71+-0x2366));if(_0x453a9c[_0x44ed51(0xa7f)][_0x44ed51(0x2ad)+'h']){var _0x5ed7bb=_0x2e21ac[_0x44ed51(0x4b9)](_0x52c83a,_0x453a9c['refs'][_0x44ed51(0x2ad)+'h'],0x2*-0x1e1+0xb7b+-0x7a9);_0x453a9c['healt'+'h']=_0x2e21ac[_0x44ed51(0x740)](_0x342711,_0x5ed7bb,_0x2e21ac['hcaUl'],_0x44ed51(0xc15));}_0xa1e13c[_0x44ed51(0xe07)+'rs']['push'](_0x453a9c);}else{var _0x1de3ba=Math['abs'](_0x2e21ac['eYFrj'](_0x2c925d['c'][_0x40be70]['v'][0x119*0x12+0x62f*-0x5+0x2*0x595],_0x3f69f0));if(_0x2e21ac[_0x44ed51(0xb8d)](_0x1de3ba,_0x44bccb))_0x44bccb=_0x1de3ba;}}if(_0x4a7083>_0x2e21ac[_0x44ed51(0x4e2)](_0x44bccb,-0x1606+-0x2089+-0x368f*-0x1+0.35))break;}else{_0x53db72['on']=!!_0x23e5ef,_0x1f9eff[_0x44ed51(0xbc1)]=!!_0x468daa,_0x2e21ac['hvtTo'](_0x1624f2);try{var _0x4acb42=_0x2e21ac[_0x44ed51(0x987)](_0x2d33ff);if(_0x4acb42&&_0x4acb42['el'])_0x4acb42['el'][_0x44ed51(0x21d)][_0x44ed51(0xc74)+'ay']=_0x2d0bc9['on']?'':_0x44ed51(0x97c);var _0x37df66=_0x2f2677;if(_0x37df66&&_0x37df66['cv'])_0x37df66['cv'][_0x44ed51(0x21d)]['displ'+'ay']=_0x2037df['on']&&_0x2f0695[_0x44ed51(0xbc1)]?'':_0x44ed51(0x97c);}catch(_0x36e651){}}}_0x5c7bdd=_0x2c925d['c'][_0x320bb1],_0xc2e3c6=Math[_0x44ed51(0x215)](_0x2e21ac[_0x44ed51(0x52c)](_0x5c7bdd['v'][-0x238d+-0x123*-0x17+0x968]*_0x5c7bdd['v'][-0x1805+-0xfe0+0x27e5],_0x5c7bdd['v'][0x153+-0x1*-0x233b+-0x248c]*_0x5c7bdd['v'][-0x1801+-0x1b00+-0x1101*-0x3])),_0x7e2a53=!![];break;}else return _0x52b5ad['quat']=null,_0x219c56[_0x44ed51(0x561)]=null,_0x2d81ce['pos']=null,_0x14022d;}}return{'pos':_0x5c7bdd['v'],'posAt':_0x5c7bdd['o'],'candidates':_0x337811[_0x44ed51(0x875)+'h'],'cluster':_0x2c925d['c'][_0x44ed51(0x875)+'h'],'groups':_0x4a8a32['lengt'+'h'],'held':_0x7e2a53,'discarded':_0x213dd7,'ambiguous':_0x4a8a32[_0x44ed51(0x875)+'h']>0x25b5+0x24f5+0x45*-0x115,'reach':_0xc2e3c6};}else{if(_0x47244d)return _0xf966d3;try{if(!_0x3e456b[_0x44ed51(0xd40)]||!_0x5d7137[_0x44ed51(0xd40)][_0x44ed51(0xac2)+'dChil'+'d'])return null;var _0x4eae75=_0x2be14f[_0x44ed51(0x843)+'eElem'+'ent'](_0x44ed51(0x5b1)+'s');return _0x4eae75['id']=_0x1e58be[_0x44ed51(0x61c)],_0x4eae75['style']['cssTe'+'xt']=_0x44ed51(0x55d)+_0x44ed51(0x2f7)+_0x44ed51(0x6cd)+_0x44ed51(0x545)+'0;top'+_0x44ed51(0xe25)+'index'+_0x44ed51(0xafc)+'48364'+_0x44ed51(0x3dc)+_0x44ed51(0x3f9)+_0x44ed51(0x547)+_0x44ed51(0x1f4)+'e;',_0x5beb11['body'][_0x44ed51(0xac2)+'dChil'+'d'](_0x4eae75),_0x16722e={'cv':_0x4eae75},_0x2a31c0;}catch(_0x1dca25){return null;}}}catch(_0x594c6e){if(_0x2e21ac[_0x44ed51(0x900)]===_0x44ed51(0x9ec))_0x2e21ac['FdJrx'](_0x44a8f6);else return console['log']('PICKP'+'OS>>',_0x594c6e[_0x44ed51(0x2e3)+'ge'],String(_0x594c6e[_0x44ed51(0x3ac)]||'')[_0x44ed51(0xb4c)]('\x0a')['slice'](0x2*-0x65f+0xbf*-0x6+0x1138,0x957+0x1b11+-0x2464)['join'](_0x2e21ac['OTSzy'])),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x2f34ad(){var _0x5cfc0c=_0x57da09,_0x161456={'hcKMD':function(_0x92fbaa,_0x3f1d80,_0x2df1af){var _0x1bdaba=_0xbe61;return _0x2e21ac[_0x1bdaba(0xbc4)](_0x92fbaa,_0x3f1d80,_0x2df1af);},'olrjy':_0x5cfc0c(0x39b),'Nahil':function(_0x477a7f,_0x1f810f){return _0x477a7f===_0x1f810f;},'kNIAe':_0x5cfc0c(0x6e4)+'r'},_0x4d81a4=_0x384a49[_0x5cfc0c(0x844)+'ntrol'+'ler'];if(!_0x4d81a4||!_0x4d81a4[_0x5cfc0c(0xa33)])return null;var _0x44c4d7=_0xe29e80[_0x5cfc0c(0x844)+'ntrol'+_0x5cfc0c(0x38c)]||[],_0x4a2b8f=[];for(var _0x516ccb=-0x1dc4+0x5*0x1b5+-0x5*-0x43f;_0x516ccb<_0x44c4d7[_0x5cfc0c(0x875)+'h'];_0x516ccb++){if(_0x44c4d7[_0x516ccb][-0xa10+0x123*0x11+0x1da*-0x5]!=='v3')continue;var _0x38a1a5=_0x2e21ac['xZqZa'](_0x1f676f,_0x4d81a4[_0x5cfc0c(0xa33)],_0x44c4d7[_0x516ccb][0x1*0x7e3+0x1828+-0x200b],-0x1d23+-0x7*0x269+-0x4d*-0x99);if(_0x38a1a5)_0x4a2b8f[_0x5cfc0c(0xc27)]({'o':'0x'+_0x44c4d7[_0x516ccb][-0xed+-0x2593*0x1+0x2*0x1340][_0x5cfc0c(0x69e)+_0x5cfc0c(0x710)](0x181c*0x1+0x1faa+-0x37b6),'v':_0x38a1a5});}var _0x3b8587=_0x2e21ac['tvmmq'](_0x1e2253,_0x4a2b8f,null,_0x38ea5a);if(!_0x3b8587[_0x5cfc0c(0x218)])return null;_0x38ea5a=_0x3b8587[_0x5cfc0c(0xad7)]?{'o':_0x3b8587[_0x5cfc0c(0xad7)]}:null;var _0x2d70ba=_0x3b8587['pos'];return{'ptr':_0x4d81a4[_0x5cfc0c(0xa33)],'feet':_0x2d70ba,'posAt':_0x3b8587['posAt'],'candidates':_0x3b8587[_0x5cfc0c(0x709)+'dates'],'cluster':_0x3b8587[_0x5cfc0c(0x559)+'er'],'copies':_0x4a2b8f[_0x5cfc0c(0xde4)+'r'](function(_0x3cb5fa){var _0xc165bc=_0x5cfc0c;if(_0xc165bc(0x427)===_0x161456['olrjy']){_0x1f048f=_0xd81d1a,_0x1a556c=[],_0x161456['hcKMD'](_0x52f740,_0xc165bc(0x717)+'t',{'report':_0x314fb2()});return;}else return _0x3cb5fa['v'][-0x9*0x173+0x1842+-0x57*0x21]===_0x2d70ba[-0x136d*0x2+0x7e4*-0x4+0x466a]&&_0x3cb5fa['v'][0xe1a+-0x29*0x93+0x1f*0x4e]===_0x2d70ba[-0x2131+0x144e+0xce4]&&_0x161456['Nahil'](_0x3cb5fa['v'][0x301*-0x5+0x5c4*-0x3+0x2053*0x1],_0x2d70ba[-0x17c9+0x2*0x21e+0x1*0x138f]);})[_0x5cfc0c(0xa88)](function(_0x2f3892){var _0x266d8e=_0x5cfc0c,_0x3d383c={'ntKQL':function(_0x373bda,_0x4673a8){return _0x373bda===_0x4673a8;},'bttxS':_0x161456['kNIAe'],'FjQYu':function(_0x3d5246,_0x316d41){return _0x3d5246+_0x316d41;},'PUQun':function(_0x48ce8e,_0x4e54b9){return _0x48ce8e(_0x4e54b9);}};if(_0x266d8e(0xe11)===_0x266d8e(0x86e)){var _0x3b59ca=_0x58ede9[_0x3476a0],_0xbbf2b2=_0x3d383c[_0x266d8e(0x62f)](typeof _0x3b59ca['v'],_0x3d383c[_0x266d8e(0x46f)])?_0x3d0ca5['round'](_0x3b59ca['v']*(-0x3*-0xb96+0x8d*0x15+-0x2a6b))/(0x1597*0x1+0xd90*-0x1+0x5*-0xd3):_0x3b59ca['v'];_0x24c2f6['push'](_0x3d383c[_0x266d8e(0x835)](_0x3d383c['FjQYu'](_0x3d383c[_0x266d8e(0x835)]('\x20\x20',_0x3d383c['FjQYu']('0x',_0x3b59ca['o']['toStr'+_0x266d8e(0x710)](0x28*0x63+0xb13*0x3+0xd3*-0x3b))[_0x266d8e(0xa59)+'d'](-0xa*0x34a+-0x1b8d+-0x89*-0x71)),'\x20'),_0x3b59ca['k'][_0x266d8e(0xa59)+'d'](-0x92*-0x5+0x1072+-0x5d*0x35))+'\x20'+_0x3d383c['PUQun'](_0x133237,_0xbbf2b2)['padEn'+'d'](0xb*0x217+0x9*0x12f+-0x2194)+'\x20'+(_0x3b59ca[_0x266d8e(0x7f8)]||''));}else return _0x2f3892['o'];}),'eye':[_0x2d70ba[-0xb97+0x208c+-0x14f5],_0x2e21ac[_0x5cfc0c(0xd1e)](_0x2d70ba[-0x1*-0x12fe+-0xae7*-0x1+0x1*-0x1de4],_0xca7fc2),_0x2d70ba[-0x144+-0x4e7+0x62d]],'reach':_0x3b8587['reach'],'pitch':_0x2352d3(_0x2e21ac['whSSS'](_0x4d81a4[_0x5cfc0c(0xa33)],-0x1*-0x1b73+0x847*-0x1+-0x11c0),_0x5cfc0c(0x550)),'yaw':_0x2352d3(_0x4d81a4[_0x5cfc0c(0xa33)]+(-0x49b+-0x1ad6+-0x1bb*-0x13),_0x5cfc0c(0x550))};}function _0xab1a68(){var _0xd9d782=_0x57da09,_0x234fb6=_0x2f34ad(),_0x81e481=[],_0x12bb72=_0x2893ac['Photo'+_0xd9d782(0x73f)+_0xd9d782(0xa69)+'nc']||{},_0x292b28=Object[_0xd9d782(0x82e)](_0x12bb72);for(var _0x5e2232=0x2f3+-0x1f9*-0x7+-0x10c2;_0x5e2232<_0x292b28[_0xd9d782(0x875)+'h']&&_0x2e21ac[_0xd9d782(0xbd5)](_0x5e2232,0x1*-0x1519+-0x12a1*0x1+0x27da);_0x5e2232++){var _0x10dc23=_0x12bb72[_0x292b28[_0x5e2232]],_0x202578=[],_0x5327b2=_0xe29e80['Photo'+'nNetw'+_0xd9d782(0xa69)+'nc']||[];for(var _0x4ee1c3=-0xc4b+-0x389*0x6+-0x2181*-0x1;_0x4ee1c3<_0x5327b2['lengt'+'h'];_0x4ee1c3++){if(_0x5327b2[_0x4ee1c3][-0xf22+-0x29*-0x9+0xdb2]!=='v3')continue;var _0x43c363=_0x2e21ac[_0xd9d782(0x2b8)](_0x1f676f,_0x10dc23['ptr'],_0x5327b2[_0x4ee1c3][-0x2004+0x5f9+-0x71*-0x3b],-0x6*0x199+-0x17d*-0x2+0x69f);if(_0x43c363)_0x202578[_0xd9d782(0xc27)]({'o':'0x'+_0x5327b2[_0x4ee1c3][-0x11*0x3+-0x1f5c+0x1f8f][_0xd9d782(0x69e)+_0xd9d782(0x710)](-0x59*-0x57+-0x355*0x5+-0xd86),'v':_0x43c363});}var _0x4103ca=_0x2e21ac['TEnjo'](_0x1e2253,_0x202578,_0x234fb6?_0x234fb6[_0xd9d782(0xc40)][0x239*0xa+-0x2*-0x78a+0x9*-0x425]:null,_0x4de106[_0x292b28[_0x5e2232]]);_0x4de106[_0x292b28[_0x5e2232]]=_0x4103ca['posAt']?{'o':_0x4103ca['posAt']}:null;var _0x2d804b=_0x4103ca['pos'];if(!_0x2d804b)continue;var _0x24efe6={'ptr':_0x10dc23[_0xd9d782(0xa33)],'x':_0x2d804b[-0x256d+0x2113*-0x1+0x4680],'y':_0x2d804b[-0x2348+-0x2*-0x54c+0x18b1],'z':_0x2d804b[-0x1061*0x2+-0xf7*-0x1b+0x1*0x6b7],'posAt':_0x4103ca['posAt'],'candidates':_0x4103ca['candi'+_0xd9d782(0x9d1)],'cluster':_0x4103ca['clust'+'er'],'team':_0x2352d3(_0x10dc23[_0xd9d782(0xa33)]+(-0x1f67+-0x1db6+0x3d75),_0xd9d782(0x25a)),'localFlag':_0x2352d3(_0x2e21ac[_0xd9d782(0xa9d)](_0x10dc23[_0xd9d782(0xa33)],-0xa92+0x24b*-0xe+0x565*0x8),_0xd9d782(0x25a))};if(_0x234fb6){var _0x5d8a3a=_0x2e21ac[_0xd9d782(0x42b)](_0x2d804b[-0x120b+-0x5b7+0x17c2],_0x234fb6[_0xd9d782(0xc40)][0x6b*-0x17+-0x57*-0xa+0x2b*0x25]),_0x5485a7=_0x2e21ac[_0xd9d782(0xbec)](_0x2d804b[-0x2*-0xeee+0x14f3*-0x1+-0x8e7],_0x234fb6[_0xd9d782(0xc40)][0xf48+0x67+-0x1*0xfad]);_0x24efe6['d']=Math[_0xd9d782(0x215)](_0x2e21ac[_0xd9d782(0xdb2)](_0x5d8a3a,_0x5d8a3a)+_0x5485a7*_0x5485a7),_0x24efe6[_0xd9d782(0x845)+'ng']=_0x2e21ac['zYUTN'](_0x2e21ac[_0xd9d782(0x22c)](Math[_0xd9d782(0x687)](_0x5d8a3a,_0x5485a7),-0x1ee3+-0x266*0xd+0x3ec5),Math['PI']);}_0x81e481[_0xd9d782(0xc27)](_0x24efe6);}return{'me':_0x234fb6,'list':_0x81e481};}var _0xc87340=null;function _0x1530f0(){var _0x393da6=_0x57da09,_0x9f57e9={'GRFCP':'ZOAHu'};if(_0x2e21ac['kinBr'](_0x393da6(0xaf0),_0x2e21ac['webzW'])){var _0x3e8f66=_0xe0dd0[_0x277f94[_0x3429ec]];if(_0x3e8f66&&typeof _0x3e8f66===_0x2e21ac[_0x393da6(0xdc2)]&&_0x3e8f66[_0x393da6(0xa02)+'e']&&_0x3e8f66[_0x393da6(0xa02)+'e'][_0x393da6(0xc76)+'8']&&_0x3e8f66[_0x393da6(0xa02)+'e']['HEAPU'+'8'][_0x393da6(0x3df)+'r'])return _0x1ed4ee[_0x393da6(0x968)+'e']=_0x2e21ac['GZOIQ'](_0x2e21ac['OikCC'],_0xffbd93[_0x5df11e])+(_0x393da6(0x4f2)+'le'),_0x3e8f66;}else{if(_0xc87340)return _0xc87340;try{if(_0x393da6(0xe2a)===_0x2e21ac[_0x393da6(0x778)]){if(_0x47516f[_0x393da6(0x8eb)]===_0x393da6(0x23d))_0x406f73[_0x393da6(0x6e6)+'ostfi'+'x']({'typeName':_0x2e21ac['OsNbb'],'methodName':_0x3fe0a1[_0x393da6(0xa9c)],'params':_0x55bd3c[_0x393da6(0x507)+'arams'],'returnType':_0x9c0910[_0x393da6(0x4e0)+'et']},_0x5d8ace(_0x393da6(0x676),_0x2aca46[_0x393da6(0xa9c)]));else _0x2e21ac[_0x393da6(0x255)](_0x51a36e['ret'],_0x2e21ac[_0x393da6(0x3c4)])&&_0x2e21ac[_0x393da6(0x72a)](_0x68f7e9[_0x393da6(0xb5c)+'s'][_0x393da6(0x875)+'h'],0x2bb*0x9+0x10d2+-0x2964)&&_0x26c1e4[_0x393da6(0xb5c)+'s'][0x2*-0xa03+0x130d+0xf9]==='float'&&_0x37eaf6[_0x393da6(0x6e6)+'refix']({'typeName':_0x393da6(0x749)+'Look','methodName':_0x2b51b5[_0x393da6(0xa9c)],'params':_0x4292b8['wasmP'+'arams'],'returnType':_0x30924a},_0x33eab1('set',_0x5ee117[_0x393da6(0xa9c)]));}else{if(!document[_0x393da6(0xd40)]||!document[_0x393da6(0xd40)][_0x393da6(0xac2)+_0x393da6(0xd84)+'d'])return null;var _0x1bf28a=document[_0x393da6(0x843)+_0x393da6(0x2b5)+_0x393da6(0xbe3)](_0x2e21ac[_0x393da6(0xa73)]);_0x1bf28a['id']='sakur'+_0x393da6(0x1e5),_0x1bf28a[_0x393da6(0x21d)]['cssTe'+'xt']=_0x2e21ac[_0x393da6(0x5d8)]('posit'+_0x393da6(0x2f7)+_0x393da6(0x6cd)+_0x393da6(0xcef)+':12px'+_0x393da6(0xbef)+_0x393da6(0x7be)+'z-ind'+_0x393da6(0x280)+'47483'+_0x393da6(0x82b)+'ointe'+_0x393da6(0x2fe)+_0x393da6(0xd2d)+'one;'+('backg'+_0x393da6(0x3c3)+_0x393da6(0xd1d)+_0x393da6(0xe14)+'2,29,'+'.72);'+'borde'+_0x393da6(0x4f5)+_0x393da6(0x87f)+_0x393da6(0x31b)+'a(255'+_0x393da6(0x618)+_0x393da6(0x6cc)+_0x393da6(0xe16)+'rder-'+'radiu'+'s:10p'+'x;')+_0x2e21ac[_0x393da6(0xdf2)],'user-'+'selec'+'t:non'+_0x393da6(0xaf6)+_0x393da6(0xc9f)+_0x393da6(0x7f7)+'selec'+'t:non'+'e;'),_0x1bf28a[_0x393da6(0xb3b)+_0x393da6(0x250)]=_0x2e21ac[_0x393da6(0xb0c)]+('<div\x20'+_0x393da6(0xa82)+_0x393da6(0x8ff)+'-esp-'+'lg\x22\x20s'+_0x393da6(0xa2c)+'\x22text'+_0x393da6(0x680)+'n:cen'+'ter\x22>'+'</div'+'>');var _0x20e4d6={'cv':{'getContext':function(){var _0x4c69b3=_0x393da6;if(_0x4c69b3(0xac0)===_0x9f57e9['GRFCP'])return null;else try{_0x3792a6[_0x4c69b3(0x6ab)+'em'](_0x53289e,_0x441917(_0x172106[_0x4c69b3(0x554)]));}catch(_0x501642){}}},'el':_0x1bf28a};document[_0x393da6(0xd40)]['appen'+'dChil'+'d'](_0x1bf28a),_0xc87340={'el':_0x1bf28a,'cv':_0x1bf28a['query'+'Selec'+'tor']('#saku'+_0x393da6(0xc30)+'p-cv'),'lg':_0x1bf28a[_0x393da6(0x594)+_0x393da6(0xd85)+_0x393da6(0xaa1)](_0x393da6(0xadf)+_0x393da6(0xc30)+_0x393da6(0x402))};if(!_0xc87340['cv']||!_0xc87340['cv']['getCo'+_0x393da6(0xc93)])_0xc87340=_0x20e4d6;return _0xc87340;}}catch(_0x351da5){return null;}}}var _0x167abc=null;function _0x2c1739(){var _0x18f775=_0x57da09;if(_0x167abc)return _0x167abc;try{if(!document['body']||!document[_0x18f775(0xd40)][_0x18f775(0xac2)+'dChil'+'d'])return null;var _0x3d16bb=document[_0x18f775(0x843)+_0x18f775(0x2b5)+_0x18f775(0xbe3)]('canva'+'s');return _0x3d16bb['id']='sakur'+'a-box'+'es',_0x3d16bb[_0x18f775(0x21d)][_0x18f775(0x2fb)+'xt']=_0x2e21ac['ZgNHI'],document[_0x18f775(0xd40)]['appen'+'dChil'+'d'](_0x3d16bb),_0x167abc={'cv':_0x3d16bb},_0x167abc;}catch(_0x1e3488){return null;}}function _0x2dd180(_0x37f73f){var _0x5ddd31=_0x57da09;try{var _0xa25964=Math['max'](-0x2*-0xe59+-0x554+-0x175d,window[_0x5ddd31(0xb3b)+_0x5ddd31(0xdaf)]||document['docum'+'entEl'+_0x5ddd31(0x6df)][_0x5ddd31(0xc43)+_0x5ddd31(0x2e7)+'h']||-0x89+0x861+-0x7d8),_0x31298a=Math[_0x5ddd31(0x417)](0x7*0x34a+0x46*0x8e+-0x3dd9,window['inner'+'Heigh'+'t']||document['docum'+_0x5ddd31(0x2e4)+_0x5ddd31(0x6df)]['clien'+_0x5ddd31(0x209)+'ht']||0x15c+-0x1598+-0x206*-0xa);if(_0x37f73f['cv']['width']!==_0xa25964||_0x37f73f['cv']['heigh'+'t']!==_0x31298a){if(_0x2e21ac['havtp']===_0x5ddd31(0x2f8))_0x37f73f['cv']['width']=_0xa25964,_0x37f73f['cv'][_0x5ddd31(0xd86)+'t']=_0x31298a;else try{_0x21a79e[_0x5ddd31(0x6ab)+'em'](_0x18557e,_0x147200[_0x5ddd31(0xc35)+_0x5ddd31(0x593)](_0x50a126['pos']));}catch(_0x385d12){}}return{'w':_0xa25964,'h':_0x31298a};}catch(_0x57d1a1){return{'w':0x0,'h':0x0};}}function _0xeda4d4(){var _0x5bb69c=_0x57da09;if(_0x2e21ac['YtBpG'](_0x5bb69c(0x3be),'WSqKx'))try{var _0x487031=_0x2e21ac['WXjPY'](_0x596743);return _0x487031&&_0x487031[_0x5bb69c(0xc40)]?_0x487031[_0x5bb69c(0xc40)][0x18ce+0xf2*0x7+0x15*-0x17f]:null;}catch(_0x541457){return null;}else{var _0x3cc0ce={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0x3cc0ce[_0x5bb69c(0x5b1)+'s']={'w':_0x167abc&&_0x167abc['cv']?_0x167abc['cv'][_0x5bb69c(0x99f)]:0x1*0x8cd+-0x1773+0x1e*0x7d,'h':_0x167abc&&_0x167abc['cv']?_0x167abc['cv'][_0x5bb69c(0xd86)+'t']:0x2*-0xcac+0x1f97*0x1+-0x63f,'innerW':window['inner'+'Width'],'innerH':window['inner'+_0x5bb69c(0x7cd)+'t'],'dpr':window['devic'+_0x5bb69c(0xaed)+'lRati'+'o']||-0x85e+0xaf5+-0x296*0x1};}catch(_0x1e4787){}var _0x2a4c01=_0x2e21ac['NfrOT'](_0xab1a68);if(!_0x2a4c01||!_0x2a4c01['me'])return _0x3cc0ce;var _0x349260=_0x3cc0ce[_0x5bb69c(0x5b1)+'s']['w']||-0x1e53*-0x1+-0x13c5*0x1+-0x6a6,_0x3b7a08=_0x3cc0ce['canva'+'s']['h']||0x1afc+0x30*0x38+-0x2194,_0x2279f2=_0x349260/_0x3b7a08,_0x38a78a=Math[_0x5bb69c(0x621)](_0x2e21ac[_0x5bb69c(0xe00)](_0x2e21ac['CBYjx'](_0x2e21ac['EQGUY'](_0x3c71ff['fov'],Math['PI']),-0x18c5+-0x1f7a+0x38f3),0x1*-0x258d+-0x2*0xcf4+0x5c5*0xb)),_0x537580=_0x540ec0(),_0x127532=_0x537580['basis'];for(var _0x2d2b66=-0x912+-0x1b*-0xf+0xd5*0x9;_0x2e21ac[_0x5bb69c(0x639)](_0x2d2b66,_0x2a4c01[_0x5bb69c(0x960)]['lengt'+'h'])&&_0x2d2b66<0x1*-0x21fd+-0xafd*0x1+0x2d02;_0x2d2b66++){var _0x19ba26=_0x2a4c01['list'][_0x2d2b66];if(_0x2e21ac[_0x5bb69c(0xbc9)](typeof _0x19ba26['d'],_0x5bb69c(0x6e4)+'r')||_0x19ba26['d']<0x2639+-0x3*-0x303+-0x17a1*0x2+0.5)continue;var _0x3eed46=_0x11e3e1(_0x2a4c01['me']['eye'],[_0x19ba26['x'],_0x19ba26['y'],_0x19ba26['z']],_0x349260,_0x3b7a08);if(!_0x3eed46)continue;var _0x9f4057=_0x2e21ac[_0x5bb69c(0xdf4)](_0x2e21ac[_0x5bb69c(0x6a1)](_0x2e21ac[_0x5bb69c(0x329)](_0x3eed46['x'],_0x349260),0xc53+-0x8db*0x3+0xe3e+0.5),0x26*-0x35+0x2435+0x1c55*-0x1),_0x3b6de7=null;if(_0x127532&&_0x537580[_0x5bb69c(0x218)]){if(_0x2e21ac['lqinD']!==_0x2e21ac[_0x5bb69c(0xd0a)]){var _0x2d52a2='';for(var _0x10cc6e=-0x2282+-0x4*0x97d+0x4876;_0x10cc6e<_0x119ea9[_0x5bb69c(0x875)+'h'];_0x10cc6e++){var _0x586903=_0x5ecc1f[_0x10cc6e][_0x5bb69c(0x69e)+'ing'](-0xb*0x361+-0x1*0xf1f+-0x1*-0x345a);_0x2d52a2+=(_0x586903[_0x5bb69c(0x875)+'h']<-0x152a+0x520+0x100c?'0':'')+_0x586903;}return _0x2d52a2;}else{var _0x22d84e=_0x127532['fwd'],_0x1fa626=_0x127532[_0x5bb69c(0xcef)],_0x22b9c5=_0x19ba26['x']-_0x537580['pos'][0xdd5*0x2+-0x2659+0xaaf],_0x4cb0d9=_0x19ba26['y']-_0x537580['pos'][0xb5c+0xc*0x161+0x1be7*-0x1],_0x436f3a=_0x19ba26['z']-_0x537580[_0x5bb69c(0x218)][0x977*0x1+-0x7f4+-0xb*0x23],_0x44b579=_0x22b9c5*_0x22d84e[0x2328+0x47*0x4+-0x2444]+_0x4cb0d9*_0x22d84e[-0x2639+-0x1dc1+0x16a9*0x3]+_0x436f3a*_0x22d84e[-0x1*-0x1a41+0x141b+0x2*-0x172d],_0x22df3d=_0x2e21ac[_0x5bb69c(0x2c3)](_0x2e21ac[_0x5bb69c(0x3e0)](_0x22b9c5,_0x1fa626[-0x45f*-0x3+-0x1679+0x95c]),_0x4cb0d9*_0x1fa626[-0x1*0x247f+-0x326*0x8+0x3db0])+_0x2e21ac['qdMNu'](_0x436f3a,_0x1fa626[-0x1*0x6ea+-0x598+-0x642*-0x2]);if(_0x44b579>-0x12f*0x12+-0x2*0xd79+0x3040+0.5)_0x3b6de7=_0x2e21ac[_0x5bb69c(0x286)](_0x2e21ac[_0x5bb69c(0x3ee)](_0x22df3d,_0x44b579),_0x2e21ac[_0x5bb69c(0x6e8)](_0x38a78a,_0x2279f2));}}else _0x2e21ac[_0x5bb69c(0xa83)](typeof _0x19ba26[_0x5bb69c(0x845)+'ng'],_0x5bb69c(0x6e4)+'r')&&(_0x3b6de7=Math[_0x5bb69c(0x621)](_0x19ba26['beari'+'ng']*Math['PI']/(0x71f+-0x4*0x45d+0xb09))/(_0x38a78a*_0x2279f2));if(_0x3b6de7===null)continue;if(Math[_0x5bb69c(0xa75)](_0x3b6de7)>0x2b3*0x4+-0x239f+-0x1*-0x18d3+0.8)continue;var _0x3905ce=_0x9f4057-_0x3b6de7;_0x3cc0ce[_0x5bb69c(0x29d)][_0x5bb69c(0xc27)]({'d':Math[_0x5bb69c(0x3c3)](_0x19ba26['d']),'bearing':Math[_0x5bb69c(0x3c3)](_0x19ba26[_0x5bb69c(0x845)+'ng']),'at':_0x2e21ac['HexAs'](Math[_0x5bb69c(0x3c3)](_0x9f4057*(0x1a0e+-0xae6*0x2+-0x1e*0x3)),0x94a*-0x1+-0x1*0xd36+-0x208*-0xd),'want':_0x2e21ac[_0x5bb69c(0x52d)](Math[_0x5bb69c(0x3c3)](_0x3b6de7*(0x841+0x175*0x13+-0x2008)),-0x1*-0x10e1+0x5*-0x52a+-0xcd9*-0x1),'off':_0x2e21ac[_0x5bb69c(0xb33)](Math['round'](_0x3905ce*(-0x1152+-0x241b+0x3955)),0x1844+-0x1d3*0x1+-0x41*0x49)}),Math[_0x5bb69c(0xa75)](_0x3905ce)>Math[_0x5bb69c(0xa75)](_0x3cc0ce[_0x5bb69c(0x440)+'Delta'])&&(_0x3cc0ce[_0x5bb69c(0x440)+_0x5bb69c(0x254)]=Math[_0x5bb69c(0x3c3)](_0x3905ce*(0x25dd+-0x2192+-0x63))/(-0x3bd+-0xac2+0x1267),_0x3cc0ce[_0x5bb69c(0x440)+_0x5bb69c(0xbcb)+'ng']=Math[_0x5bb69c(0x3c3)](_0x19ba26['beari'+'ng']));}if(_0x537580[_0x5bb69c(0x218)]&&_0x537580['basis']&&_0x537580[_0x5bb69c(0x554)]){var _0x1b38d6=_0x537580['basis'][_0x5bb69c(0x9d3)];if(_0x2e21ac['ogNbY'](Math['abs'](_0x1b38d6[-0x181e+-0x1*-0x4cb+0x2*0x9aa]),-0x264e*0x1+0x9f7+0x1c57+0.01)){if('QrgVu'!==_0x2e21ac[_0x5bb69c(0x4de)])_0x3d7ef7(_0x5bb69c(0xdc5)+_0x5bb69c(0xcf3));else{var _0x470fb1=Math[_0x5bb69c(0x621)](_0x2e21ac[_0x5bb69c(0xd21)](_0x537580[_0x5bb69c(0x554)]*Math['PI'],0x10*0x124+-0x10b8*-0x1+-0x2244)/(0x1b7b+0x7*-0x50f+0x7f0)),_0x4080ba=-0x1e*0xc9+-0xf1c+0x26b4,_0x5d020b=-0x1*0x47b+0x466*0x3+-0x45b*0x2,_0x53b662=[_0x537580['pos'][-0x21c6+-0x5ce*-0x1+0x1bf8]+_0x2e21ac[_0x5bb69c(0x75c)](_0x1b38d6[0x1*0xe68+0xe30+0x5*-0x5b8],_0x4080ba),_0x2e21ac['bCONa'](_0x537580[_0x5bb69c(0x218)][-0xae7+0x536+-0x1b*-0x36]+_0x1b38d6[-0xbf9+0x197c+-0xb6*0x13]*_0x4080ba,_0x5d020b),_0x537580[_0x5bb69c(0x218)][0x15b6+0x3e2+-0x19*0x106]+_0x2e21ac[_0x5bb69c(0x657)](_0x1b38d6[-0x23ad+0x34*-0x27+0x3*0xe89],_0x4080ba)],_0x34a4d2=_0x11e3e1(_0x537580[_0x5bb69c(0x218)],_0x53b662,_0x349260,_0x3cc0ce[_0x5bb69c(0x5b1)+'s']['h']);if(_0x34a4d2){var _0x181d58=(-0x154*-0x1+-0x1*-0x222b+-0x237f+0.5-_0x34a4d2['y']/_0x3cc0ce[_0x5bb69c(0x5b1)+'s']['h'])*(-0x1ba2+-0x1*0x188f+0x3433*0x1),_0x31e90d=_0x5d020b/_0x4080ba/_0x470fb1;_0x3cc0ce['verti'+'cal']={'got':_0x2e21ac[_0x5bb69c(0xa22)](Math[_0x5bb69c(0x3c3)](_0x2e21ac[_0x5bb69c(0x4d5)](_0x181d58,-0x17b5+0x1796+0x407)),0x162b*0x1+0x132d*-0x1+0x27*0x6),'want':Math['round'](_0x31e90d*(-0x1717+-0x9de*0x1+0x24dd))/(-0xcb3+0xcb9*-0x1+0x1d54),'off':Math[_0x5bb69c(0x3c3)](_0x2e21ac[_0x5bb69c(0xbec)](_0x181d58,_0x31e90d)*(-0x211*-0x12+-0xa5*-0xb+-0x1*0x2861))/(-0x1*-0x148c+0xd2a*-0x2+0x9b0)};}}}}return _0x3cc0ce;}}var _0x32de35=-0x2cf+0x2*0xa36+0x142*-0xe+0.75,_0x33478f=0x205*-0x5+0x1*0x10b0+-0x697+0.25,_0x2e185f=0x1*0x15dd+-0xa*-0x27e+-0x19d*0x1d+0.42;function _0x33a898(_0x407f38){var _0x53cc63=_0x57da09,_0x12820b={'wSEFq':function(_0x38fe19,_0x2f19d4){return _0x38fe19+_0x2f19d4;},'wLUru':function(_0x58b8f4,_0x1e9344){var _0x1f1335=_0xbe61;return _0x2e21ac[_0x1f1335(0x902)](_0x58b8f4,_0x1e9344);},'eyVlY':function(_0x1e643e){return _0x1e643e();}},_0x1020d5=_0x167abc;if(!_0x1020d5)return;var _0x5a109e=_0x1020d5['cv'][_0x53cc63(0x2b1)+_0x53cc63(0xc93)]&&_0x1020d5['cv'][_0x53cc63(0x2b1)+_0x53cc63(0xc93)]('2d');if(!_0x5a109e)return;var _0x19307b=_0x2e21ac[_0x53cc63(0x7de)](_0x2dd180,_0x1020d5);_0x5a109e['clear'+'Rect'](0x58*-0x67+0x1*0xfe5+0x1383,0x1ec+0x1bac+-0x1d98,_0x19307b['w'],_0x19307b['h']);if(!_0x1feaeb[_0x53cc63(0xbc1)]||!_0x407f38||!_0x407f38['me'])return;var _0x1fdefb=_0x407f38['me'],_0xf0102=null,_0x3f9c1d=_0x2893ac['Photo'+_0x53cc63(0x73f)+'orkSy'+'nc']||{},_0x1fa23f=Object[_0x53cc63(0x82e)](_0x3f9c1d);for(var _0x300a63=0x6a1*-0x3+-0x1*0x210e+0x1*0x34f1;_0x300a63<_0x1fa23f['lengt'+'h'];_0x300a63++){if('jaNNp'===_0x2e21ac[_0x53cc63(0xe5c)]){var _0x455c16=_0x2e21ac[_0x53cc63(0xbe4)](_0x1f676f,_0x3f9c1d[_0x1fa23f[_0x300a63]][_0x53cc63(0xa33)],0x1*0x2552+0x1631+0x3*-0x13c5,-0x1*-0xc6b+-0x22c6*0x1+0x165e);if(_0x455c16&&_0x2e21ac[_0x53cc63(0x255)](_0x455c16[-0x1e5e+-0x1744+0xaba*0x5],0x19*0xf4+-0xa*-0x1df+-0x2a8a)&&_0x2e21ac['asRth'](_0x455c16[-0x16ba+0x4*-0x824+-0x1*-0x374b],-0x89*-0x29+-0x773+0xe7e*-0x1)&&_0x2e21ac[_0x53cc63(0xe3f)](_0x455c16[-0xc*0x1eb+0x1aea+-0x3e4],0x4f1+-0x27*0x18+-0x149)){_0xf0102=_0x2352d3(_0x2e21ac['kRlOv'](_0x3f9c1d[_0x1fa23f[_0x300a63]][_0x53cc63(0xa33)],0x1b70+-0x16b7+-0x13*0x3b),_0x2e21ac[_0x53cc63(0x859)]);break;}}else{var _0x50029f=_0x4cc24e(_0x12820b[_0x53cc63(0xd8e)](_0x3abb73,_0x571dd3(_0x37204a[_0x28304a][0x1cf2+-0xb45+-0x11ad],-0x47a*-0x8+-0x7*0x4bd+0x295*-0x1)),'i32');if(_0x12820b[_0x53cc63(0xc64)](_0x50029f,_0x287508))_0x494522[_0x53cc63(0x646)][_0x1424db[_0x2d32f2][0xdb6+-0x1767+-0x92*-0x11]]=_0x50029f;}}for(var _0x16db50=-0x2674+-0x9e2+-0x21a*-0x17;_0x16db50<_0x407f38[_0x53cc63(0x960)]['lengt'+'h'];_0x16db50++){if('wtYaG'!=='FqOYn'){var _0x4b9845=_0x407f38[_0x53cc63(0x960)][_0x16db50],_0x2cc037=_0x2e21ac['lXEqQ'](_0xf0102,null)&&_0x4b9845['team']===_0xf0102,_0x3f6db9=_0x2e21ac['nOFLL'](_0x11e3e1,_0x1fdefb['eye'],[_0x4b9845['x'],_0x4b9845['y']-_0x33478f,_0x4b9845['z']],_0x19307b['w'],_0x19307b['h']),_0x19ed5a=_0x2e21ac[_0x53cc63(0x53e)](_0x11e3e1,_0x1fdefb['eye'],[_0x4b9845['x'],_0x2e21ac[_0x53cc63(0x4e2)](_0x4b9845['y'],_0x32de35),_0x4b9845['z']],_0x19307b['w'],_0x19307b['h']);if(!_0x3f6db9||!_0x19ed5a)continue;var _0x6bc562=Math['abs'](_0x2e21ac[_0x53cc63(0x6a1)](_0x19ed5a['y'],_0x3f6db9['y']));if(!_0x2e21ac['BgdmI'](_0x6bc562,-0x6c4+0x941*0x2+-0xbbe))continue;var _0x2b4208=Math[_0x53cc63(0x417)](0x1087+0x1664+-0x1*0x26e9,Math['min'](0x1ed7+0x265f+-0x44dc,_0x6bc562*_0x2e185f));if(_0x2e21ac['qpQCn'](_0x6bc562,0x1733+0xcf7+-0x2286))continue;var _0x443683=_0x2e21ac[_0x53cc63(0x8a8)](_0x3f6db9['x']+_0x19ed5a['x'],-0x1f56+-0x1*-0x2626+-0x6ce),_0x2cec89=(_0x3f6db9['y']+_0x19ed5a['y'])/(-0xe3*0x29+-0xa2e*-0x1+0x1a2f);_0x5a109e[_0x53cc63(0xc1b)+'eStyl'+'e']=_0x2cc037?_0x2e21ac['OdbUI']:'rgba('+'255,1'+'10,11'+'6,.95'+')',_0x5a109e[_0x53cc63(0x752)+'idth']=_0x2cc037?-0x23db+0x2e6+-0x2*-0x107b:-0x7*-0x389+0x2*-0xaef+-0x2df,_0x5a109e[_0x53cc63(0xc1b)+'eRect'](_0x2e21ac[_0x53cc63(0x42b)](_0x443683,_0x2e21ac[_0x53cc63(0x5aa)](_0x2b4208,0x1bf0+-0xe1f*-0x2+-0x382c)),_0x2e21ac['twLpD'](_0x2cec89,_0x6bc562/(-0x197c+0x18*0x4b+0x1276)),_0x2b4208,_0x6bc562),!_0x2cc037&&(_0x5a109e['fillS'+_0x53cc63(0xcaf)]=_0x53cc63(0xe46)+'255,1'+_0x53cc63(0x6e1)+_0x53cc63(0x585)+')',_0x5a109e[_0x53cc63(0x40a)]=_0x2e21ac['dxSwc'],_0x5a109e[_0x53cc63(0x8b7)+'ext'](Math[_0x53cc63(0x3c3)](_0x4b9845['d']||0x2*0xa0b+0x200+-0x1616)+'m',_0x443683-_0x2e21ac[_0x53cc63(0x582)](_0x2b4208,-0x3cb*0x5+0x1*-0x11fb+-0x16*-0x1ae),_0x2e21ac['kyZpB'](_0x2e21ac['ARheA'](_0x2cec89,_0x6bc562/(-0x4*-0x566+-0x1*0x2561+0xfcb)),-0x2e3*-0x1+0x16*0x48+-0x910)));}else{var _0x413701=_0x12820b['eyVlY'](_0x46bc58);return{'ok':_0x413701['ok'],'source':_0x413701[_0x53cc63(0x968)+'e'],'why':_0x413701['why'],'tried':_0x413701[_0x53cc63(0xd06)],'camPtr':'0x'+_0x413701[_0x53cc63(0xcbd)+'r']['toStr'+_0x53cc63(0x710)](-0xdf7+-0x1*0xa27+0x182e),'tfPtr':'0x'+_0x413701[_0x53cc63(0xb22)][_0x53cc63(0x69e)+_0x53cc63(0x710)](0x5*0x2ed+-0x1d21+0xe90),'fov':_0x413701[_0x53cc63(0x554)],'quat':_0x413701['quat'],'pos':_0x413701['pos'],'basis':_0x413701['basis'],'errors':_0x413701[_0x53cc63(0xdc3)+'s']['slice'](-0x2f*-0xa1+0x7a0+0xa7*-0x39,0x61*-0x60+-0x1*-0x1cb5+0x7*0x119)};}}}function _0x2cc8eb(){var _0xf1f710=_0x57da09,_0x4c2d99={'wrBQH':_0xf1f710(0xa36)+'me.re'+_0xf1f710(0x747)+'Game('+')','PLWaZ':function(_0x44d41e){return _0x44d41e();},'zHCnk':_0x2e21ac[_0xf1f710(0x339)],'MAHfK':function(_0x5f2be3,_0x199bdd){var _0x5d1b2b=_0xf1f710;return _0x2e21ac[_0x5d1b2b(0x526)](_0x5f2be3,_0x199bdd);}},_0x1ed96f=_0x2e21ac['YUqxk'](_0x1530f0);if(!_0x1ed96f||!_0x1ed96f['cv'])return;try{if(_0x2e21ac[_0xf1f710(0x7a6)]===_0x2e21ac[_0xf1f710(0x7a6)]){var _0x5d0b64=_0x1ed96f['cv'][_0xf1f710(0x2b1)+_0xf1f710(0xc93)]&&_0x1ed96f['cv'][_0xf1f710(0x2b1)+_0xf1f710(0xc93)]('2d');if(!_0x5d0b64)return;var _0x5ccc77=_0x1ed96f['cv'][_0xf1f710(0x99f)],_0x26734b=_0x2e21ac[_0xf1f710(0x6f2)](_0x5ccc77,-0x5fb*-0x1+0xf81+-0x157a),_0x7aee32=_0xab1a68(),_0x4201d5=_0x7aee32['me'];_0x5d0b64[_0xf1f710(0x3ae)+'Rect'](0x4ae*0x1+0xfb4+-0x1462,0x16d2+-0x47e+0x6*-0x30e,_0x5ccc77,_0x5ccc77),_0x5d0b64[_0xf1f710(0xc1b)+_0xf1f710(0x53a)+'e']=_0x2e21ac[_0xf1f710(0x3b8)],_0x5d0b64[_0xf1f710(0x752)+_0xf1f710(0x5df)]=-0x89d+-0x701+-0x2b*-0x5d;for(var _0x1f0150=0x15c0+-0x1d41+0x782;_0x1f0150<=-0x155a+0xb*0x1c1+0x109*0x2;_0x1f0150++){_0x5d0b64[_0xf1f710(0xaf8)+_0xf1f710(0x476)](),_0x5d0b64[_0xf1f710(0x918)](_0x26734b,_0x26734b,_0x2e21ac[_0xf1f710(0xbec)](_0x26734b,-0x2af*0x1+-0x300+0x5b3)*_0x1f0150/(-0x2483*-0x1+0x1176+-0x35f6),0xa61*-0x1+-0x2b*-0x7b+-0x149*0x8,Math['PI']*(0x649*-0x1+-0x5*0x133+0xc4a)),_0x5d0b64['strok'+'e']();}_0x5d0b64[_0xf1f710(0xaf8)+_0xf1f710(0x476)](),_0x5d0b64[_0xf1f710(0x347)+'o'](-0x183b+0x1760+0xdf,_0x26734b),_0x5d0b64[_0xf1f710(0xa07)+'o'](_0x5ccc77-(0x149b+-0x1ae4*-0x1+-0xb*0x451),_0x26734b),_0x5d0b64[_0xf1f710(0x347)+'o'](_0x26734b,-0x4*-0x202+-0x1470+0xc6c),_0x5d0b64['lineT'+'o'](_0x26734b,_0x5ccc77-(0x4aa*0x6+0x19d0+-0x1*0x35c8)),_0x5d0b64[_0xf1f710(0xc1b)+'e']();if(!_0x4201d5){if(_0x1ed96f['lg'])_0x1ed96f['lg'][_0xf1f710(0x21a)+'onten'+'t']='';return;}var _0x5338b8=_0x2e21ac['kyZpB'](_0x26734b,-0x73+0x13a8+0x132f*-0x1)/_0x1feaeb[_0xf1f710(0xd9d)],_0x358a0c=null,_0x1a3a14=_0x2893ac['Photo'+_0xf1f710(0x73f)+'orkSy'+'nc']||{},_0x283ec3=Object[_0xf1f710(0x82e)](_0x1a3a14);for(var _0x46c036=0x22b+0x9b9+-0xbe4;_0x46c036<_0x283ec3[_0xf1f710(0x875)+'h'];_0x46c036++){if('UJCGl'!==_0x2e21ac[_0xf1f710(0x407)]){var _0x313cd4=_0x43dbea[_0xf1f710(0x2bf)+_0xf1f710(0xcfe)+'e']();if(_0x313cd4)return _0x15be60['sourc'+'e']=_0x4c2d99['wrBQH'],_0x313cd4;}else{var _0x225b82=_0x2e21ac[_0xf1f710(0x573)](_0x1f676f,_0x1a3a14[_0x283ec3[_0x46c036]][_0xf1f710(0xa33)],0x704*0x1+-0x2*0xa02+0xd34,-0x1*0x254f+0x3a*0xd+-0x20*-0x113);if(_0x225b82&&_0x225b82[0x1*-0x1f00+-0xb*0xed+0x292f]===-0x57*0x11+0x3*-0x2f0+0xe97&&_0x225b82[-0x1*0x30f+-0x16bb+-0x1*-0x19cb]===0x61*0x3+0xb75+-0x8*0x193&&_0x225b82[0x11f4+-0x1a28*-0x1+0x8d2*-0x5]===0xf2*-0x22+-0xda+-0x20fe*-0x1){_0x358a0c=_0x2e21ac[_0xf1f710(0x22a)](_0x2352d3,_0x2e21ac[_0xf1f710(0x910)](_0x1a3a14[_0x283ec3[_0x46c036]][_0xf1f710(0xa33)],0x3d*0x4f+0x1db+0x26*-0x89),_0x2e21ac[_0xf1f710(0x859)]);break;}}}var _0x362d62=0x1410+-0x1b83*0x1+0x773;for(var _0x35b09f=-0xcbb+-0x15b2+-0x4eb*-0x7;_0x35b09f<_0x7aee32['list']['lengt'+'h'];_0x35b09f++){if('TTidJ'===_0xf1f710(0x62a))_0x4c2d99['PLWaZ'](_0x2cf91f);else{var _0x1a988f=_0x7aee32['list'][_0x35b09f],_0x23cc5c=_0x2e21ac['AsIfz'](_0x2e21ac[_0xf1f710(0x5ca)](_0x1a988f['x'],_0x4201d5['feet'][-0x445*0x6+0x1*0x1649+0x355]),_0x5338b8),_0x28bfda=(_0x1a988f['z']-_0x4201d5[_0xf1f710(0xc40)][0x1db*-0xf+0x1ac0+0x117])*_0x5338b8,_0x5a5024=Math[_0xf1f710(0x215)](_0x2e21ac['UJjeh'](_0x2e21ac['poKQA'](_0x23cc5c,_0x23cc5c),_0x28bfda*_0x28bfda)),_0x3f1e06=_0x26734b,_0x56a2df=_0x26734b;if(_0x5a5024>_0x26734b-(-0x4b+0x271*-0x1+0x1*0x2c2)){if(_0x2e21ac[_0xf1f710(0x442)](_0xf1f710(0xb9b),_0x2e21ac[_0xf1f710(0xc1d)])){var _0x3de7c6=_0x5c9803[_0xf1f710(0xe0a)+'WebMo'+'dkit']&&_0x1c4c44[_0xf1f710(0xe0a)+_0xf1f710(0x8fd)+_0xf1f710(0xa7e)][_0xf1f710(0xa36)+'me'],_0x2e0551=_0x5766ef||_0x3de7c6&&_0x3de7c6['plugi'+'ns']&&_0x3de7c6['plugi'+'ns'][_0x3de7c6[_0xf1f710(0x7d0)+'ns']['lengt'+'h']-(0x88a+0xc*0x10d+-0x1525)];if(!_0x2e0551||typeof _0x2e0551[_0xf1f710(0x3c5)]!=='funct'+'ion')return _0x38bf15[_0xf1f710(0xdc3)+'s']['push'](_0x4c2d99[_0xf1f710(0xc39)]),_0x27c055;return _0x5766ae(_0x2e0551['call'](_0x388266,_0x20c509,_0x123677||[]));}else _0x3f1e06=_0x26734b+_0x2e21ac[_0xf1f710(0x9f5)](_0x23cc5c/_0x5a5024,_0x26734b-(-0x1384+-0x1*-0xfe5+0x3a5)),_0x56a2df=_0x26734b+_0x2e21ac['iaqUl'](_0x28bfda/_0x5a5024,_0x2e21ac[_0xf1f710(0xdf0)](_0x26734b,-0xcee*0x1+-0x24b4+0x31a8));}else _0x3f1e06=_0x2e21ac['GwmMR'](_0x26734b,_0x23cc5c),_0x56a2df=_0x26734b+_0x28bfda;var _0x53a689=_0x2e21ac[_0xf1f710(0xe41)](_0x358a0c,null)&&_0x2e21ac[_0xf1f710(0xaa9)](_0x1a988f[_0xf1f710(0xd9a)],_0x358a0c);_0x5d0b64[_0xf1f710(0x73b)+'tyle']=_0x53a689?_0x2e21ac['HlcIu']:_0x2e21ac['JBaph'],_0x5d0b64[_0xf1f710(0xaf8)+_0xf1f710(0x476)](),_0x5d0b64['arc'](_0x3f1e06,_0x56a2df,_0x53a689?-0x1d08+-0x1fe5+0x3cef:-0x23b1+-0xa06+0x16dd*0x2+0.20000000000000018,-0x2*0x81a+0x1338+0x2*-0x182,Math['PI']*(0x19*-0x53+0x10e4+-0x8c7)),_0x5d0b64['fill'](),_0x362d62++;}}_0x5d0b64[_0xf1f710(0x73b)+_0xf1f710(0xcaf)]=_0x2e21ac[_0xf1f710(0x75b)],_0x5d0b64['begin'+'Path'](),_0x5d0b64[_0xf1f710(0x918)](_0x26734b,_0x26734b,0x9*0x2d3+-0x834+-0x1134,0x7*-0x572+-0x28a+0xa2a*0x4,Math['PI']*(0x150b+0x29*0xdf+-0x38c0)),_0x5d0b64['fill'](),_0x1ed96f['lg']&&(_0x1ed96f['lg'][_0xf1f710(0x21a)+_0xf1f710(0x1f5)+'t']=_0x2e21ac[_0xf1f710(0x53b)](_0xf1f710(0xa12)+_0x362d62+_0x2e21ac[_0xf1f710(0x6e2)]+Math[_0xf1f710(0x3c3)](_0x1feaeb[_0xf1f710(0xd9d)])+'m',_0x1feaeb[_0xf1f710(0xbc1)]?_0xf1f710(0x44e)+'v\x20'+Math[_0xf1f710(0x3c3)](_0x3c71ff[_0xf1f710(0x554)])+'°':'')+(_0x358a0c!==null?_0x2e21ac[_0xf1f710(0xab4)]('\x20·\x20te'+'am',_0x358a0c):''));}else{if(_0x49b345&&_0x24d443[_0xf1f710(0x469)+_0xf1f710(0xdea)+'ation'])_0x445648[_0xf1f710(0x469)+'ropag'+_0xf1f710(0xc8b)]();_0x4c2d99[_0xf1f710(0xd61)](_0x49fefa,!_0x5c3632['open']);}}catch(_0x239db5){}}function _0x25652d(){var _0x28554c=_0x57da09,_0x3c59dd=_0x2893ac[_0x28554c(0xc53)+_0x28554c(0x73f)+'orkSy'+'nc']||{};if(!Object[_0x28554c(0x82e)](_0x3c59dd)['lengt'+'h'])return![];return!!_0x2f34ad();}function _0x575463(_0x461625){var _0x17ee69=_0x57da09;if(_0x2e21ac['RYFCo'](_0x17ee69(0xc2c),_0x2e21ac['HyVec']))try{var _0x4449fd=_0xc87340;if(_0x4449fd&&_0x4449fd['el'])_0x4449fd['el']['style'][_0x17ee69(0xc74)+'ay']=_0x461625?'':_0x2e21ac['yoxIT'];var _0x3ee4e8=_0x167abc;if(_0x3ee4e8&&_0x3ee4e8['cv'])_0x3ee4e8['cv']['style'][_0x17ee69(0xc74)+'ay']=_0x461625?'':'none';}catch(_0x59042f){}else try{return _0x3ca791&&_0x3a791c[_0x17ee69(0x3df)+'r']?_0x5d909f[_0x17ee69(0x3df)+'r'][_0x17ee69(0x46b)+_0x17ee69(0xcb3)]:0xc61*0x1+-0x683*-0x5+-0x2cf0*0x1;}catch(_0x2e22a8){return 0x1b7*-0xd+-0xb*0x96+-0x1cbd*-0x1;}}var _0x5d43b0=0xf*0x71+-0x13aa+0xd0b,_0x1aa645=-0xf0a+-0x113a+0x2044;function _0x3526aa(_0x5b210a){var _0x5e4b5c=_0x57da09;_0x2e21ac[_0x5e4b5c(0x386)](typeof requestAnimationFrame,_0x2e21ac[_0x5e4b5c(0xc13)])?_0x5d43b0=requestAnimationFrame(_0x38b773):_0x1aa645=setTimeout(_0x38b773,_0x2e21ac[_0x5e4b5c(0x50f)](_0x5b210a,-0x24f4+-0x277+0x279d));}var _0x34b61f=0x20cd+-0xe*-0x3+-0x1d*0x123,_0x57d334=0x3ef*0x1+0x36*-0x89+0x2e*0x8b;function _0x38b773(){var _0x177e26=_0x57da09,_0x4ba775={'ORCYm':function(_0x119a61,_0xec1a20){return _0x119a61(_0xec1a20);},'veCsU':function(_0x3d0f44,_0x44a5da){var _0x11c331=_0xbe61;return _0x2e21ac[_0x11c331(0xa9d)](_0x3d0f44,_0x44a5da);},'bneHt':function(_0x4a678a,_0x496d36){return _0x4a678a-_0x496d36;},'eebhG':function(_0x1bfae5,_0x388276){var _0x154819=_0xbe61;return _0x2e21ac[_0x154819(0xd83)](_0x1bfae5,_0x388276);}};if(_0x2e21ac['wktPi'](_0x2e21ac['VEVPe'],_0x177e26(0x7df))){_0x5d43b0=0x1*-0x23f9+-0x1*-0x1fe1+0x418;if(!_0x1feaeb['on']||!_0x2e21ac['NfrOT'](_0x25652d)){if(_0x2e21ac['CnRbs']('WtuZg',_0x177e26(0x205))){_0x5926b2=_0x32bab7[_0x177e26(0x561)];if(_0x1fee15['pos'])_0x1f0fde=_0x44d859['pos'];if(_0x2e21ac[_0x177e26(0x681)](_0x1552c3['fov'],null))_0x574048=_0x3a5e78['fov'];}else{_0x2e21ac[_0x177e26(0xa30)](_0x575463,![]),_0x3526aa(0xfd1+-0x1*-0x2fa+-0x119f);return;}}_0x575463(!![]),_0x48e4f3(),_0x2e21ac[_0x177e26(0xe3e)](_0x1530f0);if(_0x1feaeb[_0x177e26(0xbc1)])_0x2c1739();var _0x45a520=null;try{_0x4dcb6b();}catch(_0x339ecf){}try{_0x45a520=_0x2e21ac['FXrDy'](_0xab1a68);}catch(_0x1cf453){}try{_0x2cc8eb();}catch(_0x388c52){}try{_0x33a898(_0x45a520);}catch(_0x2b0e02){}_0x34b61f++;if(_0x2e21ac['dYcBz'](_0x34b61f,_0x57d334))_0x3526aa(0x19a1+-0x1146+-0x829);}else{var _0x4798fd=_0x4f5d65();_0xdfe4cd[_0x177e26(0x5f5)]=_0x4ba775['ORCYm'](_0x12c9c6,_0x4798fd),_0x3dc831[_0x177e26(0x21a)+'onten'+'t']=_0x4ba775['veCsU'](_0x107bc4<-0x5b*-0x4c+-0x21c3+0x6c0?_0x4798fd[_0x177e26(0x45b)+'ed'](-0x4f*-0x76+-0x39f*0x3+0x1e*-0xda):_0x346047(_0x5f1c75[_0x177e26(0x3c3)](_0x4798fd)),_0x3867e9['datas'+'et'][_0x177e26(0x3fe)]||'');var _0x44660d=(_0x4798fd-_0x100bf5)/_0x4ba775['bneHt'](_0x2f3464,_0x5ee9fe)*(-0x15d*0x1c+-0xa6d+0x30fd);_0x2066ca[_0x177e26(0x21d)][_0x177e26(0x627)+_0x177e26(0xaf4)+'y']('--p',_0x4ba775[_0x177e26(0x5f4)](_0x44660d,'%'));}}function _0x281778(){var _0x3126f2=_0x57da09,_0xce371e={'DIyOF':function(_0x4e24bd,_0x2dfb19){return _0x4e24bd+_0x2dfb19;}},_0x63a0db=window[_0x3126f2(0xe0a)+_0x3126f2(0x8fd)+'dkit']&&window[_0x3126f2(0xe0a)+_0x3126f2(0x8fd)+_0x3126f2(0xa7e)][_0x3126f2(0xa36)+'me']||null,_0x1b3ce6=_0x63a0db&&_0x63a0db[_0x3126f2(0x8e2)+_0x3126f2(0x30e)+_0x3126f2(0xb81)],_0x1ff811=_0x1b3ce6&&_0x1b3ce6['scrip'+_0x3126f2(0x54f)],_0x5b4ffe={},_0x3353ec=[];for(var _0x3ec383 in _0x384a49){if('fXjDk'!==_0x2e21ac[_0x3126f2(0xe0c)]){_0x5b4ffe[_0x3ec383]='0x'+_0x384a49[_0x3ec383][_0x3126f2(0xa33)]['toStr'+_0x3126f2(0x710)](0x251f+0xa*0x3ad+-0x49d1);if(_0x384a49[_0x3ec383]['repla'+_0x3126f2(0x443)])_0x3353ec[_0x3126f2(0xc27)](_0x3ec383);}else return _0x1ab5cf['v'][0x151f*0x1+-0x1263+-0x2bc]===_0x550136[0x1*-0x1b50+0x7*-0x6+0x1*0x1b7a]&&_0x161dbd['v'][0x5e2+0x24e6+-0x1*0x2ac7]===_0x394c26[-0xd09+-0x5fc+-0x1e7*-0xa]&&_0x17f516['v'][0x56b+0x107e+-0x3*0x74d]===_0x584746[-0x1f7e+-0x2*0x73b+0x2df6];}var _0x4d460d={};for(var _0x24cd3b in _0x384a49)_0x4d460d[_0x24cd3b]=_0x49cfef(_0x384a49[_0x24cd3b]['ptr']);var _0x2ef33e={},_0x572397=null;try{_0x2ef33e=_0x21db7e();}catch(_0x147822){_0x572397=String(_0x147822&&_0x147822[_0x3126f2(0x2e3)+'ge']||_0x147822);}var _0x36de57={'version':_0x150f3f,'when':new Date()['toISO'+_0x3126f2(0x969)+'g'](),'elapsedMs':Date['now']()-_0x3de6c1,'frame':location['href']['slice'](-0xc9f+-0x251+-0x3bc*-0x4,0x327*0x8+-0xf54+-0x96c),'host':_0x2ba949,'frameRole':_0x5b6a2a,'uwmk':!!_0x63a0db,'il2CppContext':!!_0x1b3ce6,'typeCount':_0x1ff811?Object['keys'](_0x1ff811)[_0x3126f2(0x875)+'h']:null,'arm':_0x46990d,'assemblies':_0x451309,'hooksTotal':_0x1cdd40['lengt'+'h'],'hooksApplied':_0x1057b3(),'hooksResolved':_0x16c308(),'hooksRegisteredAtArm':_0x46990d[_0x3126f2(0x655)+'Regis'+_0x3126f2(0xca9)]||0x139*-0xa+0x59*0x31+-0x4cf*0x1,'hookErrors':_0x2d2622[_0x3126f2(0xd92)](-0x9a9*-0x2+0x5*0x406+0x10*-0x277,-0xa1*0x3+-0x1*0x55+-0x60*-0x6),'instances':_0x5b4ffe,'classNames':_0x4d460d,'instancesReplaced':_0x3353ec,'hookFireProof':_0x170097,'survey':_0x2ef33e,'actkKeys':_0x52e046,'surveyRows':Object[_0x3126f2(0x82e)](_0x2ef33e)[_0x3126f2(0x8c5)+'e'](function(_0x451989,_0x492146){var _0x57e2cf=_0x3126f2;return _0xce371e[_0x57e2cf(0xa2d)](_0x451989,_0x2ef33e[_0x492146][_0x57e2cf(0x875)+'h']);},-0x1e2e+-0x3*0xb56+-0x13c*-0x34),'reads':{'ok':_0x11deda['ok'],'failed':_0x11deda[_0x3126f2(0xb71)+'d'],'lastError':_0x11deda['lastE'+_0x3126f2(0xbc6)],'source':_0x11deda[_0x3126f2(0x968)+'e']},'identity':_0x2e21ac['XyLRS'](_0x140c83),'globals':_0x5aac19(),'wasmMemory':{'captured':!!_0x1ee8e3,'atMs':_0x28292c,'bytes':(function(){var _0xa4d4eb=_0x3126f2;try{return _0x1ee8e3&&_0x1ee8e3['buffe'+'r']?_0x1ee8e3[_0xa4d4eb(0x3df)+'r']['byteL'+_0xa4d4eb(0xcb3)]:0xb+0x1de*0x6+0x1*-0xb3f;}catch(_0x439fa8){return 0x46+-0x54c+-0x283*-0x2;}}()),'exportKeys':_0x159e36},'diff':_0x727362['slice'](-0x5*0x6b5+-0x2*-0xb15+-0x1*-0xb5f,0x413*0x7+-0x21a3+0x546),'speed':{'on':_0x43d8b1['on'],'factor':_0x43d8b1['facto'+'r'],'writes':_0x4592a4,'scaled':_0x1e2c5b[_0x3126f2(0xd92)](0xc31+-0xb5*-0x17+-0x1c74,0x7b7+-0x7f*-0x2+0x1*-0x8a5),'skipped':_0x5634b4[_0x3126f2(0xd92)](-0x10cc+0x1679+0x5ad*-0x1,0xa9*-0x22+-0x95a+0x1fdc*0x1)},'esp':_0x2e21ac[_0x3126f2(0x65c)](_0xd3def8),'view':_0xc38dd6(),'camera':(function(){var _0x2f8074=_0x3126f2,_0x305f6c={'CrwTL':function(_0x1144aa,_0x52d8e5){return _0x1144aa(_0x52d8e5);}};if(_0x2e21ac['FbgrD'](_0x2e21ac['Fhypf'],_0x2f8074(0x580)))try{var _0x3bc595=_0x4dcb6b();return{'ok':_0x3bc595['ok'],'source':_0x3bc595['sourc'+'e'],'why':_0x3bc595[_0x2f8074(0x4e1)],'tried':_0x3bc595['tried'],'camPtr':'0x'+_0x3bc595['camPt'+'r'][_0x2f8074(0x69e)+_0x2f8074(0x710)](-0x19af+0x130a+0x6b5),'tfPtr':'0x'+_0x3bc595[_0x2f8074(0xb22)]['toStr'+_0x2f8074(0x710)](0x5e6*0x4+-0x982+-0xe06),'fov':_0x3bc595['fov'],'quat':_0x3bc595[_0x2f8074(0xdc6)],'pos':_0x3bc595[_0x2f8074(0x218)],'basis':_0x3bc595['basis'],'errors':_0x3bc595[_0x2f8074(0xdc3)+'s'][_0x2f8074(0xd92)](-0x20*0x61+-0x1*-0x1fb4+-0x166*0xe,0x1350+0x1*-0x195b+0x60f)};}catch(_0x4552c5){return{'ok':![],'error':String(_0x4552c5&&_0x4552c5[_0x2f8074(0x2e3)+'ge']||_0x4552c5)[_0x2f8074(0xd92)](0x1*0x962+-0xd*0x1f+0x1*-0x7cf,0x130c+0x1e5*0x6+-0x1df2)};}else{var _0x3ea4a8=_0x14306b[_0x2f8074(0x8ea)](this,arguments);try{if(_0x3ea4a8&&typeof _0x3ea4a8['then']===_0x2f8074(0x827)+'ion')_0x3ea4a8[_0x2f8074(0x2a8)](_0x3476b0,function(){});else _0x305f6c['CrwTL'](_0x913da9,_0x3ea4a8);}catch(_0x3b17a6){}return _0x3ea4a8;}}()),'angles':(function(){var _0x44e699=_0x3126f2,_0x395a8b={'McCrc':function(_0x558303,_0x4a8fc){return _0x558303!==_0x4a8fc;},'aAwiU':function(_0x33a89d,_0x35ef4a){return _0x33a89d+_0x35ef4a;},'dXxOQ':function(_0x3c269f,_0x5b1d46){return _0x2e21ac['HDLdF'](_0x3c269f,_0x5b1d46);},'zlDII':_0x44e699(0x686)},_0x29e621=_0x51e211(),_0x21ccd9=null,_0x18f456=null,_0x5bbc79=_0x2f34ad();if(_0x5bbc79){var _0x19009d=_0x11e3e1(_0x5bbc79['eye'],[_0x5bbc79[_0x44e699(0xc00)][-0x1*-0x1124+0x10c+-0x1230],_0x5bbc79[_0x44e699(0xc00)][0x1e36*0x1+-0x505+-0x1930],_0x2e21ac[_0x44e699(0xca1)](_0x5bbc79[_0x44e699(0xc00)][0x26e6+-0x1*-0x32b+-0x123*0x25],-0xdc+-0x1ebe+-0x5d*-0x57)],0x1770+-0x905+-0xa83,-0x3*-0x5e7+-0x56c+-0x861);_0x19009d&&(_0x21ccd9=_0x19009d['x']/(0x1*-0x1175+0x11e+0x143f*0x1),_0x18f456=_0x2e21ac['CBYjx'](_0x19009d['y'],0xdc0+-0xe43+0x57*0xd));}var _0x4c869e=null,_0x3d5231=null;if(_0x5bbc79){if(_0x2e21ac[_0x44e699(0x8a4)](_0x2e21ac[_0x44e699(0x45a)],_0x44e699(0x8de))){if(_0x2212e3[_0x44e699(0x4dc)+'t']&&_0x395a8b['McCrc'](_0x550a3c[_0x44e699(0x4dc)+'t'],_0x48830e))_0x184c07[_0x44e699(0x4dc)+'t'][_0x44e699(0xb59)+_0x44e699(0xbfd)+'e'](_0xe110a1,'*');}else{var _0x201439=_0x11e3e1(_0x5bbc79[_0x44e699(0xc00)],[_0x5bbc79[_0x44e699(0xc00)][-0xdf*-0x3+0x73*-0x4f+0x20e0],_0x2e21ac['RoIdK'](_0x5bbc79[_0x44e699(0xc00)][-0x8c9*-0x4+-0x3*0x78a+-0xc85],0x18*0xef+0xaac+-0x210a),_0x5bbc79[_0x44e699(0xc00)][0x161e+0x1d7d*0x1+-0x3399]+(0x891+0x21d3+-0x2a5a)],-0x941+-0xfef*0x1+0x1d18,-0x1508+0x1510+0x4*0xf8);if(_0x201439)_0x4c869e=_0x201439['y']/(0x2*-0x113f+0xc3d+0x1a29);var _0x578599=_0x2e21ac[_0x44e699(0x53e)](_0x11e3e1,_0x5bbc79['eye'],[_0x5bbc79[_0x44e699(0xc00)][0x15b9+-0xaa9+-0xb10],_0x5bbc79[_0x44e699(0xc00)][0x2044+0xda*0x1e+-0x39cf]-(-0x121a+0x5*0x2d2+0x1*0x40a),_0x5bbc79[_0x44e699(0xc00)][0x15b8+-0xbd7+-0x85*0x13]+(0x172+0x1b9b+-0x1d03)],0x4f1+-0x26*-0x91+0xe7*-0x19,-0x1*-0x242f+-0x2fe*-0xb+0x4131*-0x1);if(_0x578599)_0x3d5231=_0x2e21ac['NrAlx'](_0x578599['y'],0x11ea+0x255d*-0x1+0x175b);}}return{'identified':_0xfbef9f[_0x44e699(0xa6d)+_0x44e699(0x4a5)],'why':_0xfbef9f['why'],'source':_0xfbef9f['sourc'+'e'],'viewHooks':(function(){var _0x11da37=_0x44e699,_0x5dab7d={'HFsKK':function(_0x7f5d6a,_0x4c79f3){return _0x7f5d6a-_0x4c79f3;},'XeeZh':function(_0x457429,_0x4391b3){return _0x395a8b['aAwiU'](_0x457429,_0x4391b3);},'YfpFn':function(_0x35f941,_0x30a32a){return _0x395a8b['dXxOQ'](_0x35f941,_0x30a32a);}};try{if('XQtTC'!==_0x395a8b['zlDII'])return _0x59c42f();else{var _0x1eeb22=_0x1e72e3[-0x1*-0x1526+0x20b2+-0x35d8]-_0x457b8d[_0x11da37(0xc40)][-0x1d2*0x5+-0x236*-0x11+-0x1c7c],_0x462be0=_0x5dab7d['HFsKK'](_0xd8635e[-0xe48+0x13c9+-0x57f],_0x17d4f1[_0x11da37(0xc40)][0xedc+-0x38e+0xf1*-0xc]);_0x82ecad['d']=_0x2e6bfd[_0x11da37(0x215)](_0x5dab7d['XeeZh'](_0x5dab7d[_0x11da37(0x58d)](_0x1eeb22,_0x1eeb22),_0x5dab7d[_0x11da37(0x58d)](_0x462be0,_0x462be0))),_0x287f23[_0x11da37(0x845)+'ng']=_0x4c9ea0['atan2'](_0x1eeb22,_0x462be0)*(0x3*-0x653+0x1a+0x1393)/_0x5b7438['PI'];}}catch(_0x1bae1a){return{'err':String(_0x1bae1a&&_0x1bae1a['messa'+'ge']),'stack':String(_0x1bae1a&&_0x1bae1a[_0x11da37(0x3ac)])};}}()),'setterPair':(function(){var _0x473b28=_0x44e699,_0x3aac83=_0x2b23f1();return _0x3aac83?{'a':_0x3aac83['rawA'],'b':_0x3aac83[_0x473b28(0x332)],'hits':_0x3aac83['hits'],'order':_0x3aac83['order']}:null;}()),'yawAt':_0xfbef9f[_0x44e699(0x20d)+'tter']||_0x2e21ac[_0x44e699(0xe18)],'pitchAt':_0xfbef9f['pitch'+_0x44e699(0x317)+'r']||_0x44e699(0x32f)+'(gues'+'s)','getters':_0xfbef9f['gette'+'rs'],'rawPitch':_0xfbef9f['rawPi'+_0x44e699(0xcb0)],'rawYaw':_0xfbef9f[_0x44e699(0xcde)+'w'],'pitch':_0xfbef9f['pitch'],'yaw':_0xfbef9f[_0x44e699(0xb17)],'legacyOffsetsCleared':_0x224d08,'fov':_0x3c71ff[_0x44e699(0x554)],'fovSane':_0x3c71ff[_0x44e699(0x554)]>=-0xf6+-0xb62+-0x5c*-0x23&&_0x2e21ac['qFdsL'](_0x3c71ff[_0x44e699(0x554)],-0x88*0x5+-0x1*-0x17d3+-0x1*0x14bd),'centreX':_0x21ccd9,'centreY':_0x18f456,'aboveY':_0x4c869e,'belowY':_0x3d5231,'projection':_0xeda4d4()};}()),'fov':_0x3c71ff[_0x3126f2(0x554)],'espView':{'on':_0x1feaeb['on'],'boxes':_0x1feaeb[_0x3126f2(0xbc1)],'span':_0x1feaeb['span']},'local':(function(){var _0xd737ed=_0x3126f2,_0x2e6f06=_0x2e21ac[_0xd737ed(0x23a)](_0x2f34ad);if(!_0x2e6f06)return null;return{'ptr':_0x2e21ac['iwgoE']('0x',_0x2e6f06['ptr'][_0xd737ed(0x69e)+'ing'](-0x168e*0x1+0x1a1c+-0x37e)),'feet':_0x2e6f06['feet'],'eye':_0x2e6f06[_0xd737ed(0xc00)],'posAt':_0x2e6f06[_0xd737ed(0xad7)],'copies':_0x2e6f06[_0xd737ed(0x65f)+'s'],'cluster':_0x2e6f06[_0xd737ed(0x559)+'er'],'eyeHeight':_0xca7fc2,'pitch':_0x2e6f06['pitch'],'yaw':_0x2e6f06[_0xd737ed(0xb17)],'reach':_0x2e6f06[_0xd737ed(0x44d)]};}()),'uwmkLog':_0x216f69[_0x3126f2(0xd92)](0x1*0x178f+-0x6d9*0x3+-0x304,0x14bf+0x67c*0x1+0x3e1*-0x7),'warnings':[]};if(_0x572397)_0x36de57[_0x3126f2(0xa70)+'ngs'][_0x3126f2(0xc27)](_0x2e21ac['ChmRb'](_0x2e21ac[_0x3126f2(0x571)],_0x572397));if(_0x46990d['error'])_0x36de57[_0x3126f2(0xa70)+'ngs'][_0x3126f2(0xc27)](_0x2e21ac['rqQcN'](_0x3126f2(0x996)+_0x3126f2(0xa9e)+'g\x20fai'+'led:\x20',_0x46990d[_0x3126f2(0xdc3)]));_0x36de57['surve'+'yRows']===-0x2670+0x1*-0x3f6+0x2a66&&Object[_0x3126f2(0x82e)](_0x36de57['insta'+_0x3126f2(0x251)])['lengt'+'h']>0x1350+-0x143d+-0xed*-0x1&&(_0x3126f2(0x35b)!==_0x3126f2(0x35b)?_0x2ca064(!_0x1d4247['on'],_0x522b89['facto'+'r']):_0x36de57[_0x3126f2(0xa70)+'ngs']['push']('captu'+_0x3126f2(0x420)+Object[_0x3126f2(0x82e)](_0x36de57[_0x3126f2(0xb5b)+'nces'])['lengt'+'h']+_0x2e21ac['tfvCN']+(_0x11deda[_0x3126f2(0x57b)+_0x3126f2(0xbc6)]?_0x2e21ac['Lemoc'](_0x3126f2(0x279)+'n:\x20',_0x11deda[_0x3126f2(0x57b)+_0x3126f2(0xbc6)]):_0x2e21ac[_0x3126f2(0xca6)])));_0x36de57[_0x3126f2(0xa6d)+'ity']&&_0x36de57[_0x3126f2(0xa6d)+_0x3126f2(0x25e)][_0x3126f2(0x7b0)+'tches']===![]&&_0x36de57[_0x3126f2(0xa70)+'ngs'][_0x3126f2(0xc27)](_0x2e21ac['HKiWM']('ANOTH'+_0x3126f2(0x3ce)+_0x3126f2(0xa4d)+_0x3126f2(0x8bd)+_0x3126f2(0x726)+'ER\x20wi'+'ndow.'+_0x3126f2(0xe0a)+_0x3126f2(0x8fd)+_0x3126f2(0x88c)+_0x3126f2(0x6c4)+_0x3126f2(0xa36)+_0x3126f2(0xbd3)+'\x20arme'+_0x3126f2(0x3f0)+'\x20'+(_0x3126f2(0xe13)+_0x3126f2(0x331)+_0x3126f2(0x8b8)+_0x3126f2(0x8f3)+'ent\x20i'+'nstan'+_0x3126f2(0x242)+_0x3126f2(0x5b7)+'are\x20a'+_0x3126f2(0xb26)+_0x3126f2(0x290)+_0x3126f2(0x905)+_0x3126f2(0x562)+_0x3126f2(0x625)+'r\x20')+(_0x3126f2(0xdee)+_0x3126f2(0x820)+_0x3126f2(0xaa5)+'the\x20o'+_0x3126f2(0xa56)+_0x3126f2(0x2eb)+_0x3126f2(0x353)+_0x3126f2(0xe15)+_0x3126f2(0x369)+'.\x20Dis'+'able\x20'+_0x3126f2(0x5f1)+'\x20othe'+'r\x20'),_0x3126f2(0x50e)+_0x3126f2(0xce7)+_0x3126f2(0x64c)+_0x3126f2(0xe51)+_0x3126f2(0x664)+_0x3126f2(0x9ea)+'nkey\x20'+_0x3126f2(0x4b1)+_0x3126f2(0x404)+'eload'+'.'));_0x36de57['ident'+_0x3126f2(0x25e)]&&_0x36de57['ident'+_0x3126f2(0x25e)][_0x3126f2(0x7d0)+'nRunt'+_0x3126f2(0x203)+_0x3126f2(0x6bd)+'ted']===![]&&_0x36de57['warni'+_0x3126f2(0xaa0)][_0x3126f2(0xc27)](_0x2e21ac['xXLGs'](_0x2e21ac[_0x3126f2(0x920)],_0x3126f2(0x6a8)+_0x3126f2(0xb92)+_0x3126f2(0xcba)+_0x3126f2(0x797)+_0x3126f2(0xa36)+_0x3126f2(0x4b5)+_0x3126f2(0x589)+_0x3126f2(0x3da)+'n\x20the'+_0x3126f2(0xb19)+'al\x20no'+'w\x20exp'+_0x3126f2(0xae2)));if(_0x36de57[_0x3126f2(0xc3f)]&&_0x36de57[_0x3126f2(0xc3f)][_0x3126f2(0xdeb)])_0x36de57[_0x3126f2(0xa70)+'ngs']['push']('ESP:\x20'+_0x36de57[_0x3126f2(0xc3f)]['note']);if(_0x36de57['globa'+'ls']&&!_0x36de57[_0x3126f2(0x711)+'ls']['heapU'+'8']){if(_0x3126f2(0x8b9)==='FojgT')_0x18f947=_0x5e905d[_0x3126f2(0x9d3)][-0x766*-0x2+-0x8*-0x10e+-0x173c*0x1],_0x73dd5c=_0x2aaafd[_0x3126f2(0x9d3)][0x255d+0x65b*-0x2+-0x1*0x18a6],_0x45c5a7=_0x48fb31[_0x3126f2(0x9d3)][-0x230f+-0x1*-0xeba+-0x1*-0x1457],_0x4226dc=_0x564896[_0x3126f2(0xcef)][-0x724+-0xf63+0x49*0x4f],_0x5a0e11=_0x11a834['right'][0xc*-0x1cf+0x1fd*-0xb+-0x1*-0x2b94],_0x19554e=_0x19b652[_0x3126f2(0xcef)][0x2*0x117f+0x1*0x2447+0x3*-0x17c1],_0x26c80c=_0x1937cf['up'][-0x232+-0xa5e*-0x2+-0xe*0x153],_0x84cd90=_0x39c165['up'][-0x1d19*-0x1+-0x681+-0x1697*0x1],_0x5beb13=_0x58704d['up'][-0x918+0xad*-0x18+0x1952];else{var _0x10b65a='';_0x36de57[_0x3126f2(0xa3c)+_0x3126f2(0x21c)+_0x3126f2(0x6ed)]&&(_0x10b65a=_0x2e21ac['MHNwO'](_0x3126f2(0x3a9)+_0x3126f2(0x691)+'red\x20a'+'t\x20'+_0x36de57[_0x3126f2(0xa3c)+'irePr'+'oof']['atMs']+(_0x3126f2(0xa53)+'th\x20or'+'igina'+'lFunc'+'='),_0x36de57[_0x3126f2(0xa3c)+_0x3126f2(0x21c)+_0x3126f2(0x6ed)][_0x3126f2(0x825)+_0x3126f2(0xa86)+'nc'])+(_0x3126f2(0x3e5)+_0x3126f2(0xd15)+_0x3126f2(0x2bf)+'ved=')+_0x36de57[_0x3126f2(0xa3c)+_0x3126f2(0x21c)+_0x3126f2(0x6ed)]['resol'+'veGam'+_0x3126f2(0x7db)+'re']+_0x2e21ac['tnEqt']+(_0x36de57[_0x3126f2(0xa3c)+'irePr'+_0x3126f2(0x6ed)][_0x3126f2(0xca3)+_0x3126f2(0xdb9)+'AtFir'+'e']||'none')+('),\x20so'+_0x3126f2(0x290)+_0x3126f2(0x5d5)+'ence\x20'+'exist'+_0x3126f2(0xbc2)+'en\x20an'+'d\x20is\x20'+_0x3126f2(0x21e)+'eacha'+_0x3126f2(0xb87)+_0x3126f2(0x602))),_0x36de57[_0x3126f2(0xa70)+_0x3126f2(0xaa0)][_0x3126f2(0xc27)](_0x2e21ac[_0x3126f2(0x326)]('Unity'+_0x3126f2(0x846)+_0x3126f2(0x991)+'not\x20r'+'esolv'+_0x3126f2(0x411)+_0x3126f2(0x8e7)+'urce:'+'\x20',_0x36de57[_0x3126f2(0x711)+'ls'][_0x3126f2(0xca3)+'ource']||'none')+_0x3126f2(0x9ee)+(_0x3126f2(0xc1f)+_0x3126f2(0x760)+_0x3126f2(0xafa)+'\x20bloc'+'ked\x20u'+_0x3126f2(0xbda)+'a\x20gam'+_0x3126f2(0x5cc)+_0x3126f2(0x72b)+'ith\x20M'+_0x3126f2(0x6ee)+'.HEAP'+_0x3126f2(0xa5b)+_0x3126f2(0xd3d)+'hable'+'.')+_0x10b65a);}}(_0x36de57['globa'+'ls']&&!_0x36de57[_0x3126f2(0x711)+'ls']['value'+'Wrapp'+'er']||_0x36de57[_0x3126f2(0x711)+'ls']['value'+_0x3126f2(0x938)+'er']===_0x3126f2(0x2bd)+'ined')&&_0x36de57['warni'+'ngs'][_0x3126f2(0xc27)](_0x2e21ac['MPILQ']);if(_0x2e21ac[_0x3126f2(0x222)](_0x36de57[_0x3126f2(0x655)+_0x3126f2(0x665)],0xe3b*0x1+0x1*0xb29+-0xd*0x1f4)&&_0x36de57[_0x3126f2(0x655)+'Appli'+'ed']===-0x2*-0x602+-0x3*0x29+0xb89*-0x1&&_0x1ff811){if(_0x2e21ac[_0x3126f2(0x9d5)](_0x2e21ac['ojLff'],_0x3126f2(0xa61))){if(_0x36de57[_0x3126f2(0x655)+'Resol'+'ved']===0x1d5*-0x11+-0x6a*-0x58+-0x5*0x10f){if(_0x3126f2(0xd2c)!==_0x3126f2(0xd2c)){var _0x212d99=_0x20b01c[_0x225960];_0x212d99[_0x3126f2(0x240)+'its']&&_0x2e21ac[_0x3126f2(0xb14)](_0x212d99['pairH'+'its'],_0x36b233)&&typeof _0x212d99[_0x3126f2(0x9ce)+'st']==='numbe'+'r'&&typeof _0x212d99['setB']===_0x2e21ac['OaWkV']&&_0x322fa5(_0x212d99['setLa'+'st'])&&_0x2e21ac['LFZFS'](_0x20409c,_0x212d99[_0x3126f2(0x6c2)])&&(_0x4eb6b2={'rawA':_0x212d99[_0x3126f2(0x9ce)+'st'],'rawB':_0x212d99[_0x3126f2(0x6c2)],'hits':_0x212d99['pairH'+'its'],'name':_0x32d0fa},_0x56e7a9=_0x212d99[_0x3126f2(0x240)+_0x3126f2(0xb8b)]);}else _0x36de57[_0x3126f2(0xa70)+_0x3126f2(0xaa0)][_0x3126f2(0xc27)](_0x2e21ac['kpiQu'](_0x2e21ac[_0x3126f2(0x965)](_0x2e21ac['byjsW']('0\x20of\x20'+_0x36de57[_0x3126f2(0x655)+_0x3126f2(0x665)],_0x2e21ac['RkkPx']),_0x2e21ac['MMUom']),_0x2e21ac[_0x3126f2(0xba2)])+_0x2e21ac['ETIbA']+_0x36de57['hooks'+'Regis'+_0x3126f2(0xca9)+_0x3126f2(0xa89)]+(_0x3126f2(0x8e5)+'(s)\x20d'+_0x3126f2(0x77c)+_0x3126f2(0x512)+_0x3126f2(0x793)+'\x20docu'+_0x3126f2(0x55a)+'start'+'.'));}else{if(_0x3126f2(0x6b5)!==_0x3126f2(0x6b5)){var _0x129c05=_0x2e21ac[_0x3126f2(0x23a)](_0xd3b340);if(_0x129c05[_0x3126f2(0x561)])return!![];var _0x5e337b=_0x2e21ac[_0x3126f2(0x3ef)](_0x496e71);return!!(_0x5e337b&&_0x419a3f[_0x3126f2(0xa6d)+_0x3126f2(0x4a5)]);}else _0x36de57['warni'+'ngs'][_0x3126f2(0xc27)](_0x2e21ac['YviYf']+_0x36de57[_0x3126f2(0x655)+'Resol'+_0x3126f2(0xabb)]+_0x3126f2(0x4c1)+_0x36de57[_0x3126f2(0x655)+_0x3126f2(0x665)]+(_0x3126f2(0x8e5)+'(s)\x20t'+'o\x20a\x20t'+_0x3126f2(0x423)+_0x3126f2(0x75d)+_0x3126f2(0x6a3)+'appli'+'ed\x20no'+_0x3126f2(0xaf3)+_0x3126f2(0x98c)+_0x3126f2(0x723)+'re\x20')+('(this'+',\x20Met'+_0x3126f2(0xd67)+_0x3126f2(0xddd)+'->\x20vo'+_0x3126f2(0x412)+'es\x20no'+'t\x20mat'+_0x3126f2(0x397)+'is\x20bu'+'ild.'));}}else _0x3ec353(_0x359696);}if(_0x36de57[_0x3126f2(0x655)+_0x3126f2(0x229)+'ed']>-0x1*-0xdaa+0x845+-0x463*0x5&&!_0x36de57[_0x3126f2(0xb5b)+'nces'][_0x3126f2(0x844)+'ntrol'+'ler']){if(_0x2e21ac[_0x3126f2(0xd4c)](_0x2e21ac['uuKOZ'],_0x3126f2(0xe01)))return null;else _0x36de57['warni'+'ngs']['push'](_0x2e21ac[_0x3126f2(0xd83)]('Hooks'+'\x20are\x20'+_0x3126f2(0x485)+'ed\x20bu'+_0x3126f2(0x970)+_0x3126f2(0x844)+'ntrol'+'ler\x20h'+_0x3126f2(0x5a0)+_0x3126f2(0xb73)+_0x3126f2(0xe55),_0x2e21ac['aLOhy']));}return _0x36de57[_0x3126f2(0xb5b)+_0x3126f2(0x2d3)+_0x3126f2(0xaba)+'ed'][_0x3126f2(0x875)+'h']&&_0x36de57['warni'+'ngs'][_0x3126f2(0xc27)](_0x2e21ac['PKWLT'](_0x2e21ac[_0x3126f2(0x20f)],_0x36de57[_0x3126f2(0xb5b)+_0x3126f2(0x2d3)+_0x3126f2(0xaba)+'ed'][_0x3126f2(0xc59)](',\x20'))),_0x36de57;}function _0x7ea58d(_0x5aa047){var _0x59fb84=_0x57da09;console[_0x59fb84(0x76c)](_0x59fb84(0x5e9)+_0x59fb84(0x7f9)+_0x59fb84(0x8f7)+_0x59fb84(0x4d8)+_0x59fb84(0x87e)+'rt',_0x2e21ac[_0x59fb84(0xe26)](_0x2e21ac['jbqXv'],_0x243c0c)+(_0x59fb84(0x4a1)+_0x59fb84(0x2a0)+'ht:70'+'0'),_0x5aa047),console['log'](_0x2e21ac['bnnmY'](_0x2e21ac[_0x59fb84(0xb40)](_0x33c6f5+'\x0a'+JSON[_0x59fb84(0xc35)+'gify'](_0x5aa047,null,-0x3d*-0x7d+0x7*0x2d7+-0x31a9),'\x0a'),_0x4c0449)),_0x462ba1=_0x5aa047;try{if(_0x2e21ac[_0x59fb84(0xc21)](_0x59fb84(0x336),_0x59fb84(0x8fa)))try{var _0x5ac6ae=_0x22fe99&&_0x3c5c59[_0x59fb84(0x87d)];if(!_0x5ac6ae||_0x5ac6ae[_0x59fb84(0xa48)+_0x59fb84(0x5a5)]!==_0x8d3464||_0x2e21ac[_0x59fb84(0xbc9)](_0x5ac6ae['kind'],_0x2e21ac[_0x59fb84(0xd5c)]))return;_0x2e21ac['rZqgm'](_0x4bdd9d,_0x5ac6ae[_0x59fb84(0x77e)],_0x5ac6ae[_0x59fb84(0x727)]);}catch(_0x1cc17f){}else _0x457c60(_0x5aa047);}catch(_0x48954d){}_0x540114(_0x59fb84(0x717)+'t',{'report':_0x5aa047});}function _0x4cf864(){var _0x43518b=_0x57da09,_0x5a97e6={'esGYV':_0x2e21ac['OaWkV']};try{if(_0x2e21ac['hCxdg'](_0x43518b(0xdf9),_0x2e21ac['PjzyC']))return _0x2e21ac[_0x43518b(0x80b)](_0x281778);else try{var _0x1ab609=_0x40c47f['getIt'+'em'](_0x3c91e7);if(!_0x1ab609)return;var _0x2195b8=_0x3eef18[_0x43518b(0xc56)](_0x1ab609);if(_0x2195b8&&typeof _0x2195b8['x']==='numbe'+'r'&&typeof _0x2195b8['y']===_0x5a97e6[_0x43518b(0xd1c)])_0x45bd1d['pos']=_0x2195b8;}catch(_0x511d64){}}catch(_0x5ee449){if(_0x2e21ac[_0x43518b(0x442)](_0x2e21ac[_0x43518b(0x8c1)],_0x2e21ac[_0x43518b(0x44c)]))return{'version':_0x150f3f,'when':new Date()[_0x43518b(0x631)+_0x43518b(0x969)+'g'](),'elapsedMs':Date[_0x43518b(0x858)]()-_0x3de6c1,'host':_0x2ba949,'uwmk':!!(window['Unity'+'WebMo'+_0x43518b(0xa7e)]&&window[_0x43518b(0xe0a)+'WebMo'+'dkit'][_0x43518b(0xa36)+'me']),'il2CppContext':![],'arm':_0x46990d,'hooksTotal':_0x1cdd40[_0x43518b(0x875)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x2e21ac['EaWNU'](String,_0x5ee449&&_0x5ee449['messa'+'ge']||_0x5ee449)};else{var _0x4a887b=_0x2f8467[_0x43518b(0xc53)+'nNetw'+'orkSy'+'nc']||{};if(!_0x1875de[_0x43518b(0x82e)](_0x4a887b)[_0x43518b(0x875)+'h'])return![];return!!_0x46e6ab();}}}function _0x36d37d(){var _0x5c63c6=_0x57da09,_0x31339d={'tBxuV':_0x2e21ac[_0x5c63c6(0x596)],'iBOEN':function(_0x27d668,_0x3c54d1){return _0x27d668<_0x3c54d1;},'tAIDF':function(_0x813a72,_0x2ed230,_0x2cbc97){return _0x813a72(_0x2ed230,_0x2cbc97);},'PLXqv':function(_0x56433e,_0x1a5160,_0x28efc0){return _0x2e21ac['hfVzw'](_0x56433e,_0x1a5160,_0x28efc0);}},_0x34dc34=0x1*0x1509+-0x1882+0x1*0x379;try{_0x2e21ac['WXjPY'](_0x38b773);}catch(_0x11e175){}try{_0x2e21ac[_0x5c63c6(0x895)](_0x56787b);}catch(_0x44ade1){}setInterval(_0x183b7b,-0x1a22+0x2690+-0xe*0xa3),_0x7ea58d(_0x2e21ac[_0x5c63c6(0x57d)](_0x4cf864)),function _0x500e6d(){var _0x57d7a7=_0x5c63c6;if(!_0x1cdd40['lengt'+'h']){if('dzrGR'!==_0x31339d[_0x57d7a7(0xa5e)])_0x10fba2['textC'+_0x57d7a7(0x1f5)+'t']='Copie'+'d';else try{_0x1d43df();}catch(_0x466c6f){}}_0x34dc34++,_0x7ea58d(_0x4cf864());if(!_0x1cdd40['lengt'+'h']&&_0x31339d[_0x57d7a7(0x3db)](_0x34dc34,0x3*-0x86b+-0x52*0x3e+0x2e49))setTimeout(_0x500e6d,0xbf3+-0x2*0xd52+0x1681);else{if(!Object[_0x57d7a7(0x82e)](_0x384a49)['lengt'+'h']&&_0x34dc34<-0x1*-0x9aa+-0x22d0+0x1a52)_0x31339d[_0x57d7a7(0x762)](setTimeout,_0x500e6d,0x9*-0x35b+0x1*-0x5c9+0x2bcc);else _0x31339d[_0x57d7a7(0xa2a)](setTimeout,_0x500e6d,-0x1220+-0x27b*-0x3+0xf5f);}}();}if(document[_0x57da09(0xd40)])_0x2e21ac['boInc'](_0x36d37d);else document[_0x57da09(0x62c)+_0x57da09(0x754)+_0x57da09(0x80e)+'r']('DOMCo'+_0x57da09(0x77a)+_0x57da09(0xd27)+'d',_0x36d37d,{'once':!![]});if(document[_0x57da09(0xd40)])try{_0x2e21ac['CQwrn'](_0xdfd4be);}catch(_0x11b944){}else document['addEv'+_0x57da09(0x754)+_0x57da09(0x80e)+'r'](_0x57da09(0x8a0)+_0x57da09(0x77a)+_0x57da09(0xd27)+'d',function(){try{_0xdfd4be();}catch(_0x1e5fa4){}},{'once':!![]});})()));function _0xbe61(_0x58ba88,_0x2005b4){_0x58ba88=_0x58ba88-(-0x2e7+0x238+-0x10*-0x29);var _0xdc6251=_0x2d2e();var _0x3025cb=_0xdc6251[_0x58ba88];if(_0xbe61['TlPGKx']===undefined){var _0x25d3bf=function(_0x4cc9e0){var _0x3309ca='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x19e8c6='',_0x33cdab='';for(var _0x2a12c9=0xab1+-0x522+-0x58f*0x1,_0x21d10d,_0x36f3e9,_0x220c64=-0xc87+0x1003+-0x37c;_0x36f3e9=_0x4cc9e0['charAt'](_0x220c64++);~_0x36f3e9&&(_0x21d10d=_0x2a12c9%(-0xdd3+0x1a9*-0x16+-0x325d*-0x1)?_0x21d10d*(0x19af+0x1bba+-0x3529)+_0x36f3e9:_0x36f3e9,_0x2a12c9++%(0x13d7+0x1d71+0x18a2*-0x2))?_0x19e8c6+=String['fromCharCode'](-0x6e6+-0x1*-0x17ff+-0x101a&_0x21d10d>>(-(0x1936+-0x1a3a*0x1+-0x1*-0x106)*_0x2a12c9&-0x20ab+0xa8b*-0x3+0x2029*0x2)):0x159e+-0x1c81*-0x1+-0x321f){_0x36f3e9=_0x3309ca['indexOf'](_0x36f3e9);}for(var _0x2dd4f3=0xbb8+-0x8*-0x17+-0xc70,_0x566340=_0x19e8c6['length'];_0x2dd4f3<_0x566340;_0x2dd4f3++){_0x33cdab+='%'+('00'+_0x19e8c6['charCodeAt'](_0x2dd4f3)['toString'](0x973+0x1a01+-0x2364))['slice'](-(-0x3a5*-0x7+0x655+-0x1fd6));}return decodeURIComponent(_0x33cdab);};_0xbe61['xkecGR']=_0x25d3bf,_0xbe61['ggbBdm']={},_0xbe61['TlPGKx']=!![];}var _0x3dd6f4=_0xdc6251[-0x92a+-0xd85+-0x16af*-0x1],_0x9f1c85=_0x58ba88+_0x3dd6f4,_0x2854a9=_0xbe61['ggbBdm'][_0x9f1c85];return!_0x2854a9?(_0x3025cb=_0xbe61['xkecGR'](_0x3025cb),_0xbe61['ggbBdm'][_0x9f1c85]=_0x3025cb):_0x3025cb=_0x2854a9,_0x3025cb;}function _0x2d2e(){var _0xcf83d6=['yhbSyxK','DMLLD0G','xtO6ywy','r2T3Cfu','Awv3','ihjLywm','mxWXmNW','lwHPzgq','yM9KEq','v2vHCg8','B3jTihi','ndySmJm','BdPUB24','u2HHCNa','DgLHBh0','CJPWB2K','WOVcJ8kjWPpcLa','sMXIzNa','BM8GCgW','AdOWo30','s3nMsxC','BIbjtLm','AxrSzxS','t3nlsxG','zcdcTYa','DgfSE3a','sgvHCa','z2H0oJm','lJa4ktS','ihbHz2u','mxb4idy','sNrIwLu','zxr1CM4','zxiIlci','C2STBwq','ELbSEhC','AhHWqNG','DgG6mZq','igfWCgW','EdTIB3i','CM06BM8','tufizKS','FdD8mG','A2vKpsi','B3qGica','idqGnc4','ntuSmtq','Ag9Ksw4','WONcKmkhWOBcHW','z2v0q2W','icSG','rwnxwxi','oJfWEca','Aw50zxi','Cgv0ywW','AwvK','BgvYkZa','mxW0Fdi','ohWWFdK','lGOk','WORcJmkvWPpcJq','wg5kv0G','BgfZDem','CMvUDdS','ogjTyw1Qvq','ChG7CMK','lNnRlwi','ys1IB3G','BM8GD2e','yxnZtMe','WOBcH8ktWOJcJW','WONcISktWPdcLq','lxnUyxa','C2v0sw4','yM94lxm','v0r6zhm','zenOAwW','u2vSzwm','AgvPz2G','zwqGyNu','WOBcK8kuWOVcKG','ihWG','zMnivfq','AwTzCee','C3CYlxm','r0DFr2e','D1nfrNe','mNb4o3a','WONcHSkqWOJcJa','Cg9PBNq','C2XPy2u','nxb4o2i','BwuGBM8','sufOrK4','ue1ztNK','BNqTC2K','CMf3qq','yMThtu4','DgvHBq','ihn0EwW','BMv2zxi','C3bHBG','tg9VAYa','su5higy','t0XiAxi','zgL2','DciGC3q','zsbHCha','icaGDhK','zwfKywi','svLrtMO','uNzVvuK','Cxbwwwu','yM90Dg8','DwPAwxC','tuXeze0','BgfZDfC','DgG6BwK','nIaXoci','v2LKDgG','C2fUzq','txfbDum','vLPit0G','rLbOteu','AfPvrvC','B2TLlwW','zM9UDdO','AwDODdO','lxDYyxa','B3vYy2u','EdPUB24','v05MwLC','D295ufm','zMfJDg8','m3W1Fdq','uLD5zhG','u21nsxm','kdi1nsW','uMrLCfa','zxjYB3i','z2fTzq','C25HChm','CxvHDa','wu5mt2y','DYGWida','BMq6CMC','AxmGyNu','re9Lsxq','WO3cLCkhWPpcKG','wK5dAxi','y29WEq','u2nPDM8','zsbLDMu','ic40nxm','lxnWywm','sMDjzgC','lxrPDgW','rM1uCxy','DgDHtK4','s3vzyKS','qvbUte4','t1vZChe','zxiGCMu','tgvTB2m','zhjVCc0','zM8Qksa','nsWXmdC','mJTZDhi','CgLUzYa','vhHZvfO','yt0IC3q','yNvPBhq','zMLSDgu','ueXbwuu','vKLt','AxnmB2m','CMuGy2W','AguGBgK','CM9WywC','BM90zq','BgL5tNi','u0P6DNi','DgHLigC','Eg1QD3a','qvjOzue','DgLVBIK','EM5gtwC','pc9IpG','r3rMvhu','Et8Pica','ExniseS','DgHLigW','z2v0x3i','B1fozuO','zwfKEsa','WPtcK8kiWOJcKW','D192mG','u1nWr28','zcbKAwe','BMTLEsa','q0DABxO','Buz6tgG','WO7cLmklWPdcJG','B3nZihq','DwrPrxi','AxLACuC','yYGXmda','CgXHEwu','v2vmywS','z2v0rMW','vw5PDhK','ChvJCue','rMPjzKy','D2L0y2G','WOZcH8kgWOZcKG','Ec1OzwK','Dg87zMK','BunktK8','DhjVA2u','CMvWBge','kdiXlde','CYbVCNa','ncK7yM8','ltiUns0','z29qAfO','BNrxAw4','AhvK','DMvYE2m','t29cvMe','tufwBKu','tM90igq','psjYB3u','ig1HBMe','sundtu8','vvjbx1m','mJrWEa','B3rVBK4','oJa7EI0','qNfKBwC','A2Hov0q','BhrLCJO','zwTktvq','uvfYCe4','n3WYFdu','CNvUBMK','DZiTB3u','zxi7D2K','lIbeAxm','AwqTDgu','lwnOzwm','AvPcuNi','B2fKzwq','D257B3a','BNnVBge','iNnUyxa','y3vYC28','x19WCeW','zwXHChm','BMDL','C2STC2W','wuLgDvi','zgf0yxm','quv4C0O','ENPeEvG','ChbMDey','A2LUqNi','tw1KDLe','zxiTCMe','y29TBwu','z3njuK4','CMDIysG','sfzZzfi','Ad0ImIi','wg9rwLm','FdeZFdy','psiXnJa','zciGC3q','oIm4zdC','zxHWB3i','vxbKyxq','yM90Aca','Axb0igK','WPtcKSkgWPlcKG','yu5ZCg4','DdOXmxa','zxqUia','Axy+','uNf3uee','icHZB3u','phnWyw4','keLUC2u','CvnmEei','zKrMuNG','uhDYy2e','txjywue','zgvIDwC','CIaO','iJ48l2q','ys1LC3a','cNLHDYa','igvYCM8','CKvct00','AxjZDca','v0PWBLq','DNmGC24','nNb4o3C','mJbWEca','BNrPyxq','uKfWB0C','swz2ANa','sw5Zzxi','B1Dyz2y','B3i6iZG','CZPUB24','B250zw4','oMXPBMu','CMfKAxu','vLv2vhe','ys1Wzxq','teHqzLe','oJi2ChG','BMC+','mJu1lde','oMzSzxG','DgL2zxS','A2jJq0G','BLzPzxC','uKn5A1O','Aw1Lsxm','yxm+','Exzgwwy','zwr5Dhm','B3a6mti','ihbHBMu','DeHLAwC','zhrOoJm','BMvQB2K','WOZcI8kpWO3cIa','Ewf3r2u','wg9Uzwq','C3zysvC','CNnJCMK','icbVyMO','WPlcLmkhWO3cJa','re5WywK','yvrrsKy','C3fYDa','De9rEM0','zgrPBMC','Cg9Z','Ahq6nZa','Dgv4Dem','Aw50iIa','AxjLuhi','C3r5Bgu','BM90ihi','B3rLlMu','BMqGEwe','yxjKlM8','ywHZrNO','CM9Wlwy','EuHHsxa','WPpcK8knWO7cIW','B3n0zMK','DwDPBI4','uvPtB2C','qxbWBgK','z3HtB2i','zsXdB24','Dhztz3q','zMXLEa','Ag5wzNO','A2v5vhK','zwqGlsa','zxj0Eq','igLZig4','lJi4','BM8Gseu','Aw5ZDgu','D3jPDgu','Fdv8mq','zw50lwm','AgjbyLG','rwXWy1a','iIbMAwW','BwvTB3i','zMXVyxq','zwXLy3q','nhW3Fdy','CgfPCKG','B2zMC2u','y2uSihm','mxW1Fdq','Dw1Uo2e','qNLjza','EdSIpNy','DIiGC3q','Bwj7lxC','CZPZDge','WORcISklWO/cKG','zYbxzwi','B25ZB2W','WOZcH8kvWPpcIW','zvbSDwC','zunOAwW','sfrnta','BMnLCW','Awv3igK','B2yGDMK','rgvSDge','uKvbEu0','oI40o30','rgDlv3q','oYi+rvm','wwzpy1K','AtmY','Dgv4Dge','oJe3ChG','mxW1','Axr5','BwuOkq','z2vYlIa','AwvYkc4','A1n5BMm','DhLWzum','wMniCg8','y29MB3i','BMfNzxi','mhHIna','zxrZigm','BhvNAw4','lwe9iMy','igzHA2u','WOBcKmksWPhcKa','yJLKo2i','yxrJAc4','DMvYDgK','icaGDMe','rMrkCNG','Dhj1zq','WO/cKCksWPtcIG','id0G','C3zNpG','q2vbt0u','sg9XugG','zhvYAw4','uMvHC28','DdOG','rhrLqKq','tfnzv1O','WOFcLmktWO/cJq','BwuUCMu','v2j0zvC','zxG6mJe','C1n5re0','CLPnDLi','WOVcKCknWOBcKW','Eca4ChG','DMfS','rxbJBeq','B2XZoJO','BhTWB3m','DgL0Bgu','lc40nsK','B2zM','z2v0sxq','r2TTBwW','y29Uy2e','A2v5qxq','ihrOzsa','Ec8XlJm','lNnRlw0','AwzLig8','ig5VDca','ihjLC28','oIjjBNq','CNvPExq','Aw50BYa','ztTWywq','yKvJBvm','weP3s1i','zNjVDw4','CM93CW','yZfKo2m','WPpcH8kpWO/cKW','lxDLAwC','nYWYmsW','DMvlwgC','Dw5KoNq','WO/cLCkqWOFcJq','rMrJBe0','zM92u2e','ywfLELe','DgHLBG','svzgu1u','WOVcLCkkWOZcHG','vKfm','E2zSzxG','AgvHBhq','zxjLzca','DgfIBgu','zgvYoJe','z2v0q28','CMv0Dxi','WO7cLCkvWOZcJa','EeHgrLm','zuvSzw0','iNDPzhq','DgfSBgK','uNvJzM0','uKLNuuy','qKjbv3y','u2v0tg8','rw5HyMW','Dw5Kzwy','CNq7ywW','CMvZB2W','CYb1BMK','ywqU','zwvsv04','BK9xAMO','AeflzNK','zciVpG','BgLLzca','psiXiIa','B25Tzxm','Dw5Yzxm','ksaTigy','ELfxqvy','BYb0Agu','yxG9iJu','ltiUnsa','seTPv00','DMPvDKy','AwrKzw4','q29TCgW','BMnLC1i','wLzrr2m','vLrcEgm','igvHy2G','zgf0ys0','tIbIEsa','igzSB28','WONcKCkgWORcKq','nsWXndm','DhjVEq','DgHPBMC','AwnLihC','cNzPzxC','C2v0sgK','B25Jzsa','B2fYza','BwvZC2e','zw50rwW','lwv2zw4','EfzIuNu','DfDPzhq','WO3cK8kvWORcIa','lcbZDgu','CMq7zM8','BgrPBMC','z3Pqs3C','CKjJtvG','Cg9luue','BMfWC2G','z2H0oJi','iNn3mI0','DxjHx3m','lJa0ktS','y2XPy2S','ueLds1a','WO7cI8ktWPhcJG','Aw9UoMy','sMDsCvm','idHWEdS','EunYwwG','y3nZvgu','EcbZB2W','Bwf4lxC','CI1LDMu','mNb4o2i','odbWEdS','oYi+tM8','yMfJA2C','qu5eihq','Dxm6n3a','Ag92zxi','B3qUBw4','BgfXv2u','Bgu9','ohb4ide','B2XZE2y','yM9Yzgu','C2STy2e','igP1Bxa','CenVBNq','Bg9Zzsa','Aw5Lza','De1iv1e','AgLSza','BwvHBNm','Ewv0ic0','AxvZoJu','DxndANq','r2v0Dgu','txjxr2S','wND3Dxy','DKzwuLa','zcbYz2i','ywrKCMu','C29fCxq','DMr3t0C','r2fTzq','WPxcJSkpWOJcJq','t25bCha','CMuGkhi','mhGXna','rhvfCKq','D3jOwe8','ANDdy0i','C1rdz2K','AfnJCMK','sNbiwe8','nJq3o2q','rNnWDhG','CMuG','CfPsEwS','Ew9rrva','mhGXyYa','WOJcK8kiWPxcIW','y2vKigi','CMf3qG','nc00lJu','AeLLDva','ANr0tNm','rejoBvK','mZa5mda2sMfgr1Ld','q3jhCNK','rMvzCxG','C2L6zq','WOVcImktWOJcKq','psjZDZi','v2XSEM0','B2LUDgu','AMDYtLO','CI1Yywq','mca0ChG','nZCSlJq','Eun4r0e','weHrz2e','WPlcI8ktWOVcKG','WPdcKCkoWO/cIq','Bw92zvq','qKrHzfm','zxKGAxm','Bw4TDgK','ywLUAw4','AuL1AhC','y29SB3i','BwfUEq','A2vLCa','yxK6zMW','zeLwyvG','C3LUyW','igL0igK','r3rJt1C','DYbNBg8','AgL0zs0','igL0ihm','BwLUv2K','t2zMC2u','vNf5Cwq','EKXnAKK','iefdveK','DcbHBIa','iM5VBMu','y2u7y28','zZOXmxa','Aw1HCcW','iJ5tCgu','sM1vreO','owqIihm','y2SIpJW','Bg9YoIm','vvHvtwy','tgXNr0m','AgfUzwq','ztT3Awq','CMvK','WO7cHSknWOBcIq','zdPYz2i','ihbVC3q','B2f0mZi','nYWUmsK','WO7cK8ktWOVcIG','B25Nig8','cMHVB2S','uMfKyxi','zsGP','WOZcICkoWOBcHG','C2vSzwe','DxfXENi','igLKpsi','BNq6mte','yu5gvNO','C2STChi','ywjLBhS','sxbcs3m','mhWYm3W','ChbLCIa','otb1sfHTvfa','Fdn8n3W','vunKy2G','rwT4DKK','zhmGB24','tfbwA2y','WO7cJCkjWOVcKW','rvLcuKK','ChbkEKe','EI1PBMq','BfvIBxC','BgvY','WOJcI8kpWORcJG','zLz3vfu','mJy2otDlBgvMvvC','ic8GrJy','WOBcJSkhWONcIG','qMHrz3m','zt0IyMe','CI1YDw4','iJ54pc8','phbHDgG','y2GGDgG','qK1nvuK','whnptum','q3LeB00','sLvKwKO','igrVy3u','WOVcICksWONcIW','oxW4Fda','DdPTAw4','B0fNr2e','zhPYr1i','zJDLzwy','q29TCg8','Dte2','khmPihq','zMXLEdO','qNjLywS','zwnouhe','ieeGAg8','CZOXmha','zhmGWRCG','C3rHy2S','AurhzMm','y2XLyxi','Ew1Nvg0','BhzYq1m','oMnLBNq','zYbIBgK','nsb1As0','nhWYFdu','ywnLlem','Axr5ic4','z2fKuum','vwDvsMi','igfYBwu','DMvJmG','tw9KA2K','igfYztO','CKnVBg8','v1nXs3G','CMvZCYa','r0zysMS','iZe1mgm','ihbHC3q','CM91BMq','DhrNq0O','y2fSBa','EwvYqw4','yMTHquS','Dc1ZAxO','ndGZnJq','vwDTveC','u0TjteW','t3L1EK8','zxrZicS','rviGvvC','mtbWEca','o21HEc0','CMrLCJO','pZWVC3a','B3n0Awm','zuDdDxG','WONcKCkgWPpcJW','WOFcICkpWORcLq','zMLYC3q','sKvJBLi','yxrnCW','zsb0Age','Aujpru4','ntTWB2K','ksbVCIa','Fdr8nNW','yNvMzMu','zKDPr2e','BwLUkdu','oJOTD2u','pgLUChu','WOZcJCkvWONcIG','igfUzca','y2u7','Bw4Ty2W','qxPRDwi','C3bpq0q','rvnqig8','AwrLE2q','WONcImkrWPdcIG','BNq4','sgv4qxm','yuz4D0i','zcb3yxm','CgXPzxi','tMv0D28','qMHRuwy','iMvZCci','Ad0Ims4','Dgf0Dxm','AvbSuxK','ms41ihu','BNrLCI0','nsWYntu','q0jhugC','Aw1Lr2e','DxDTAYa','Dw5PDa','yw5ZAxq','l2nHBNy','WPdcImkpWONcIG','Cc1SzW','zxmGBM8','yxjKlxi','oMjYAwC','BgfIzwW','tu5wzKK','rgTYsxq','WPxcISksWPhcIW','zM9UDa','A2LUza','ANvTCa','B29RCW','BxfYte8','ldi1nsW','BhKUieG','zwqGEwu','AwqGzg8','t3LKBwe','BJPJB2W','CwnmC1K','zKzTB0q','Bwf4','C2L0Aw8','z2v0sw4','DhbHC3m','igq9iK0','r1vfu1m','tuzgt1m','lJv6iIa','zsbPBNm','CMvKia','vgTnCfq','tu1sAeq','ywjSzsa','lJCYktS','ywWGBM8','uMHYs3G','EMP2uMS','Awq7CgW','lMrSBa','Chv3sKK','Aw5RsLK','DMLLD0i','yxPQz1a','A3mG','AezZwee','ALrdsfi','Dhj1zsi','EwvZ','igfJDgK','B3CTEtO','Awr0AdO','Fdn8nhW','CKnVDw4','lM1Ulwm','mwzYksK','zxi7zMW','DxrVo30','WPdcKSkoWO7cHW','tMHyB0G','DtmY','BM90igK','D29YC3q','vLnlEve','A2rctxi','y2vK','BIb0Agu','BNqZmG','i2jKytK','AguGD3i','q2fTzxi','AwDUlxm','Aw50Aw4','WONcImktWOVcIW','EwPyrLC','CMvHy2G','imk3igzV','C3rYB24','zYbSB28','lGOkswy','vgv4Da','q29WAwu','CIbWywK','uK1vDxK','oM5VBMu','B2DNzwq','lMn0B3i','qwX3sKm','quvXwhe','Dg9gAxG','ugXHEwu','mNWZFde','AguGB2W','yMjLEMW','z2LZDgu','yLbAqvy','Ds1JC3m','nsiGC3q','oJCWmdS','WOBcICkgWOVcIW','sw5ZDge','ihnPBMm','D2HLBIa','C3rVCfa','Bwvhyw0','yNL0zuW','B3bLBG','BMCGB24','BhvTBJS','yNr0Efm','Dfn1ELu','zMzZzxq','DwLSzci','D3DouNq','mtjWEdS','CMzSB3C','ugf0Aa','EKjQCM0','zgDOu3y','oJm0ChG','BwuUy3i','zvres3i','v0ntCxK','wenHAuu','otmZmJe5vhLmwvzt','WPlcImkqWOZcIa','zw50zxi','BgvYkW','EM15D1G','BgX3yxi','mdTMB24','yxbWBgK','WPpcICkoWOBcKW','mxb4o2m','zMzMoW','zYbMB3i','C3bSyxK','EtPUB24','BvDhz3e','B3jT','C25IrwS','igvUDhi','CM9Tihm','zwvMntS','y2jbwvi','DuzYyLm','yYbYzxq','WPdcKCkrWOBcIW','yxnZAwy','lwXLzNq','yxa9iNi','WO7cKSkqWOJcKq','icbJyw0','ktTIB3G','DgnOige','rxnxEu0','EhbVCNq','zxH4seS','yMuGCMu','o2zVBNq','CNj7y28','ruPJzMu','CwfcCxi','AwzPzwq','BIbHihi','DcbIzwu','AfDpzwi','BgW6Aw4','rMLLBgq','ChG7yM8','DxDwBfC','WORcJmksWPlcLa','WOBcISkvWPtcJG','yxvSDa','BwuUx2C','yw5KigG','BM90ig0','ucbVBJW','Esb0Exa','BwuGAw4','oJHWEdS','ALfUB0e','AgjcEKS','BxrQv2e','qLj2B3K','tefzrvi','rxPnBhy','yMjZyKi','Dw5Kzwq','Axr5oJe','zMXVDZO','ig9Mia','uKPoDNK','C3Pfrfe','WPdcI8knWO3cKW','zNbZ','y2TNCM8','zM9Sza','zNjHBwu','Axn0zxi','r0jdAM0','C2STBM8','rgnwB2O','WOJcLmkoWO3cKW','zwfJAge','Dg9W','owqPida','ocWYndi','tLvHyxK','WOVcHSkuWPtcKq','iIbZDhK','DhbtD0u','mJu1lc4','WOBcHSkmWPtcIW','BfDHCNO','WORcKSklWO3cKq','lxaSnta','C2STyNq','CgfYzw4','z2fWoJe','u2fhEuq','AgL0CW','D2fZBvi','D2H5','z2jvy3G','Aw1HDgK','s1viuwO','DxqGEw8','EdTWywq','WOBcI8koWORcIq','tvD4zuK','sMnUCMC','ywrKAw4','yNv0Dg8','Ehj0rNO','B246y28','twLAtLa','BeTZAui','zxfgELa','oImYyta','lK1Vzhu','BwvHBG','D2HPDgu','CJOXChG','BgvJDdO','r2fTzsG','Cw51q0e','lKHfqva','EcaXmNa','D2LUzg8','n2e2ntG','AM9PBJ0','Ewv0lG','zxPHv00','ExbLpsi','yvfiAu0','WOFcJCkkWORcIq','ifvxtuS','D0DAqvC','v19F','A2jIzK0','D2fZBva','yxmSBw8','Ec1ZAge','DhjPyNu','imk3ia','nxb4o2G','DgvYo2y','u2fRDxi','Eu5tt1C','rJKGihm','C2HjEei','igfYBwK','BMCGzM8','WOVcKCkrWONcKq','WOZcICklWPlcKW','WPlcKCkiWOZcKa','y1b6DxK','EgvZlIa','ig9MzG','BNrPBwu','sKDSreK','B3rO','Bujmt3q','lt4GDM8','uK9Nz2G','zxi7Dxm','msiGC3q','ndHWEcK','WOZcK8krWORcIq','B2nOr28','BhzLzcK','Be5drfa','z2v0Dgu','vgDZBMi','zxnJ','DgG6nNa','t1m+pG','vuPQzwG','z2zPAgq','ig9Uihq','uMvZB2W','BfL5Afq','Cfnetvq','zhrOoJG','ywLSzwq','vgfTCgu','ywX0','tgTUr1C','WORcKSksWORcKW','y29TyMe','ytK5o20','zvn0EwW','BgHNAKy','mdCSmtu','B2XPzca','BK9gteW','yMX5lum','iJ5VCgu','yxjLBNq','z2vY','Bg9NBY0','CNqGEwu','BgvMDdO','vMDVtg0','zxzLBNq','ChG7iJ4','s1vsqs0','DZiTyM8','WPpcHSkhWOZcIG','zMy8l2i','CuneC28','sundzu0','DerHDge','zJmY','ywqGzNi','mxWWFdi','CwnotK0','zM92','D0TzBgC','ig9Yihq','BcbKAxm','WO7cLCkoWOFcHG','y2X1C3q','BwvUDc0','WPhcImkvWOJcIa','qLj2v0y','Cg9ZAxq','uLDbzLi','CYbLBMu','ig9Ul28','yMfZAxm','ig9IAMu','DcbYzwy','Bg9ZztO','B0DtwKO','ztOXnha','BYa3nsW','mIWUnsK','WO/cHSkqWPtcIq','B25NpG','zZO0ChG','uuXzr3e','D2LQwKG','s3PMvw4','tfrSwuS','B2DVlxm','sM9Nwue','yuzYB20','vgzHBgi','DMLLDYa','zMLLBgq','nJaIigG','DMLZDwe','CMfUihK','EIaOsw4','B3G9iJa','BgfZDeu','AKTTEwy','qvHtB04','y1LgAMW','oJK5oxa','z3zWzMy','WOBcH8khWO7cLa','AKnfrNu','mtjWEca','owq7y28','nIWUotu','DLLKA2u','mhGXoa','shDMCuy','C3rHBMm','C3zNiIa','WOFcJmkgWONcKa','uwrizeu','wwzWrM4','zwLnuvG','nJiWChG','DMvKpq','pgnPCMm','BM8GBgK','z2LMEq','CxvLCNK','ie9o','tfv4yuq','CLPPv1K','CMvWzwe','zw1Pzxm','WO3cLCktWPtcIW','C3vyA0q','Bxm6y2u','zJzIowq','zxCGy2e','veLwrq','yxmGzMK','CNHABvu','o3DPzhq','pgj1Dhq','iJ5ZywS','DxjH','BwzRsxa','WOZcJ8kmWORcKq','DKLNvxe','lcbuyw0','DKnUr28','o2zSzxG','twfACuu','B2XLig4','B24+','EdTMB24','nhb4idK','y2fUDMe','ywnRz3i','DxzqB0y','iI8+pc8','mdT9','q2fYuxu','BYb3zsa','zsGPlMu','wuHsB1m','zYbZy3i','EsbMywK','ELjPBNK','yxrLigy','yxbWzxi','tg9VA0a','lJi1ktS','o29Wywm','zgvUDgK','ruj0EgG','C0zdtKW','ysGYndy','DgeTyt0','vKnxu0W','r01Nyu0','rNPoruq','v2P1qum','B206mxa','zsbVyMO','mhGXma','y1LcwLC','WO/cJCkgWONcJq','Dxr0B24','ys1ZDY0','ywj7zgK','AcbMAwu','qvbTEM0','CMvMzxi','D2fZBu0','AundCuW','A2zUr1y','B3vUzcW','WO7cI8koWPhcJa','veTPD1u','zfb3Cuy','CMDPBI0','y2S7zM8','Awr0Aa','WPpcI8kmWO7cIq','BwLZC2u','oJe7Dhi','C2zVCM0','BhzkEuG','ihjNyMe','nhWXnhW','mJf8mte','tuP4qLi','jwnBC2e','i3n3mI0','nYK7y3u','q2XPCgi','ntuSmJu','lxjLCgu','BwfSBg8','vgHLigy','zxzLCNK','Bg93oMe','ywnPDhK','zwvIAeC','DMfSDwu','ywi6Ag8','BM9ZCge','EKD6DLa','yvDqzuy','nti4nvbmCeLvAW','C29SAwq','s2fxrxK','WPlcKCkoWPxcKG','zxrL','lM1Ulxq','lcbUBYa','DgGY','B3CU','ktTWB2K','mtTTAw4','q0jmD0S','vw9eswK','zu1wsfe','tM9pEva','vgrJtKO','B3DQv3q','whzht0q','Bw4TDge','shzND0K','BY1MAwW','nNb4o2G','zMLSBd0','psjIywm','sgDQvNC','WORcJSknWORcKq','DgvZia','zu14t1q','Bgv4oJa','z2v0x3a','lde0mYW','lxjHzgK','n2vLzJu','BNqTD2u','rNvUs0y','WOZcKCktWPxcHW','CMfTzsa','Dc5KBgW','CNLhExe','DgfU','uMPetwC','Ag90CYa','CMuGAwC','y3qGzM8','pc9KAxy','C2v0uhi','DhDPy2u','msiGDMe','AxDsCxi','EM1VA0y','ywrKrxy','rNr1DLm','pc9ZBwe','BNrluuW','AfDyAe4','Dg9ju08','igXPA2u','B2jMrG','E29Wywm','WOBcJ8kvWPlcKG','BNnPDgK','vKvsu0K','iIbZDhi','revUsKy','yxr1CMu','otLWEdS','z2zNBfq','zhrO','iey3ica','qwn0Aw8','BNn0yw4','vxbPrMK','WO/cI8kiWOFcHG','Aw50','zMrUz3u','oJe7BwK','DgfN','mJq2ldi','C3LUy3m','yM9KExS','Fdb8mNW','mNW2','sYbZy3i','CwfNvMW','zwvKig8','BNuTCM8','WPhcH8koWORcJq','CMfUC2y','CMv7zM8','WOZcImkkWONcKG','wxHRvve','Ag9VA3m','Cg1rzLm','BgjyAhO','qNjHy2S','iZaWmdS','ignOzwm','BI5FCNu','txnNANG','r2jxsvO','pgiGC3q','y29WAwu','lNjLC28','uLvjwvu','lwH1zhS','zg93oMK','BIbuyw0','vg90ywW','yZKIpNC','zgftBwC','BgqGAxm','ig9MzNm','zNPrwhe','DdmY','B2XVCJO','weTvz0K','nhWW','WOZcKSksWPpcIG','swXhsfm','BcbHz2e','yMeOmJq','ig5Vigy','idzWEca','mI4Xmc4','z2v0','WOBcJ8kvWOBcHW','ocK7Fq','rgLMzIa','C2fUzsa','mtqZlde','tMfTzq','zfr4C0q','WPtcJmkpWO7cIW','quzNt3a','lwfSAwC','yxjZvxG','lxnOywq','vfftwKW','uhfIyNe','oMjYzwe','vLb4rNG','yxrHBJi','otbWEdS','B2DVE2q','Aw5Qzwm','ihbYB3y','m3W1Fde','mcaWida','WPlcJmkiWOFcIa','sg9VA3m','B2yGCMe','B2SGzMK','nxWXFdm','rvfhvvK','Bgu7zMK','zwq6ia','t0HTDK4','y1Lkufe','wuLfr24','zM9YBq','BNvZvxi','CMeTC3C','WPlcKCkuWO3cKW','lg1VBM8','Dg9tDhi','zxnZiey','A3mGD2G','zvLgCMO','B2D1wfq','igj1Dca','BMvPDgG','CM1VBMS','lwrPCMu','B3i6i2y','ywDHAw4','C1v4q3q','Bw47Fq','C2v0sxq','DezyExi','n3W2Fde','yxv0BW','m3W2FdC','s3joD2W','Dw5PDhK','lwLUzgu','yMnJt1O','y29Z','Cgfrt24','zw1WDhK','mmkWlcbW','A3zrAvG','nZKSmtq','BMD0AcW','wM5gywu','vffPDgi','rxHWB3i','A1Lkwxq','CY5Tzw0','o2jHy2S','CgvJDhm','C2v0qG','qLrvuw4','ifrOzsa','B2jIEsa','lM1Ulw0','Dde2','vMXZA0S','lsbvBMK','pc9ZDhi','ufnhBMO','mtC3lc4','AxHLzdS','t1bivvO','zdTTyxi','sNvTCca','zxrIENG','AfzTq1K','DJiTy3m','DM9Pza','q2zyv1i','rK1vDeu','D1zez3G','z0TeDNO','AgvSza','wfjcD3i','igzPzwW','EMu6mte','AwvSzca','oM9Wywm','zw1LBNq','WPtcImkkWPtcKG','mtaSmte','qvfyCNu','ztPWCMu','BNvTyMu','zsbTAw4','Ag9VA1a','EdTHBgK','zKjOzvq','DxnLtg8','AwnIwNa','tLbdx0m','C3zNE3C','B29M','B2r1Bgu','ANvZDgK','DdTIB3i','mIWUocK','DM9hzhC','sLnNtKy','Dcb3yxm','oYi+','t1fVBMi','C3bLzwq','WOJcKmkvWO7cLa','rvnHsee','Ae5QELq','ywn0Axy','yxv0BZS','y2LTCMS','idGWChG','wKL2CMG','DxjLzca','CgnJEeG','ysXI','vvnQB1m','nIa2Bde','uvfOAfa','zufhCu4','WPdcJCklWPpcIG','Bgu9iM0','y2fUzgK','B3qGD2K','DMDbuhq','lIbozwu','C2vLBNq','ywLoCuu','zhvSzq','Aw5N','z2XVyMe','B2f0CYa','C2v0vwK','EdTIywm','mtiGmJe','C2fUCY0','CMvWB3i','ChGGlte','C2nYyxq','oMf1Dg8','iZHKn2e','yxmGBM8','qxHPELu','BhqGC2K','BhvLica','y29SCW','EvjNywy','t2LRq0m','z25HDhu','AgLKpq','vw5SCwW','t0SGt1y','yxjN','yK1lAM4','u09qwxm','rxLkz2q','zwn0ihC','WPhcK8krWO/cJa','WPpcI8kmWPtcLq','lZ48l3m','DfDrBxy','AhLYtMK','o3DVCMq','icbOB28','EKTOze4','lwjVDhq','CMfUzg8','uffhve0','o2fSAwC','weDcA3q','uxrkExu','kde1mcu','zMLSBfm','Bw91C2u','CMzls00','u1L1uKW','BK5LDhC','EfPXwMe','yxqG','Bun1vgu','nYWUmZu','BMC6mca','CMvNAxm','vgHLigG','C29SDMu','zwDPC3q','tw91C2u','oM1PBIG','rMzTrwy','q29mBNy','ic4Znxm','yMeOmJu','yMvS','AxrPB24','CgfJzsW','BgLUzvC','nsWUmdu','zw50tgK','nIKSAw4','ihrOAxm','B3rLE2y','BwLLCYa','yw4+','ic0GDgG','tKHhr2q','tNzADKC','Aw5KzxG','mta1nZi2m1Pgyvbhva','yxjNAw4','CMvHzhm','CML0Dgu','Defjrey','DMvKigm','u2zRBKe','BM9Yzwq','qKvhsu4','lNnRlxa','ys5ZA2K','igrPzca','uNvdCNC','t25ezxm','Bg9N','DgG9iJe','tw5bteG','rKDLqKq','igLUlwy','lM1UlwG','zw5K','zNGIihq','sxn1tKC','WPhcLCkiWO/cIa','vLvksei','DwXTvve','DNjhuM4','u0Hgv20','BNrLBNq','WOBcLCkvWPhcIq','DxjPBMC','De9qy3O','y21K','yMLUzgK','osWGDhu','C2fRDxi','ihDYAxq','AgLUDa','WO7cK8kpWO3cIa','B3rYB2W','B1jQq2y','B3nPDgK','CZOYChG','sgzWuue','Fdn8nNW','wM1wqMW','yxjPys0','Dg9WoI0','qvHxqK0','Ds1YB28','B3qGCgK','Bd0Ii2y','DMHMDLq','BMCGyxq','icaGica','DhrLCG','r0ncuuu','CMvUDca','DMuGBwe','BIbPzNi','BIaUC2S','EMu6mta','ChGGC28','u3bYAw4','ig9Uia','zgfY','zwXVywq','rhvIz0q','Eu5Lqve','wuL3B3u','A21swwO','zxjZyc4','DLHmseO','C3mGmhG','oJrWEca','m3b4o2y','mhb4idu','AMvJDhm','lde3nYW','kgD1zxm','wLDgruy','qLDHD0y','DgfNtwe','zxjLBMm','WOBcJmkkWOFcIq','rNb1z2u','ihrOAw4','AvPUzLq','Ew92A2G','CMvTB3y','C3rHBgu','yNjLywS','WOFcK8ktWOFcHW','idaGlYa','BNnPC3q','y2f0','ndzWEdS','CgrHDgu','Dg5pzva','psiXlJi','BMvS','DenVBg8','s0j0DNi','CgvKigi','zwqGlYa','Fdb8nxW','yvDztMS','CMvKige','v1bzr24','mNWZFda','yvnzu1G','sgvPz2G','B250lxC','yMrHowm','CgX1z2K','BNq7y28','rKHsEum','DdOXnha','BgCIihm','y1rIvLK','psjTBI0','ANfrv2C','AwXKlG','CM4Gywi','zw5LBxK','zuf0rMK','zdTYAwC','BI5OB28','z09kz1G','v2rbDNK','lJC1ktS','Bwf4kdi','psjWywq','BgvZ','CMrJsKe','WO7cJSkuWO/cLq','Ehj1D3K','WO7cKmkhWOFcKG','BuL5rhO','o21PBI0','uMjRzNm','Dhj1y3q','rwDfufG','WOFcKCkrWPdcKq','CNPZtwW','AxqTC2m','lM1UlwW','y2fWC3u','z2LUlwW','lxbHBMu','Ewf3qxq','D3jHCdS','C2vYlxm','DxnLCI0','CMf3','A3vYyv0','WORcISkqWOJcJa','ywnLo3C','lde1nYW','y2uTAxq','C28GC3q','WO3cICkqWPpcIG','idi0iJ4','lxrVz2C','C3CYlwG','CZ0NC2S','BMrVDY4','vvjxuuq','mxW0Fdm','WOZcICkrWPxcKa','EKDfCfO','zdP0CMe','C3mP','sKvrEgW','zxPxuuy','D2fYBG','C3rLBMu','BLDqq1K','mhb4oYi','zejsDhC','ChG7Fq','WPpcLmkhWOVcHG','uLmG','Avbtq2K','nZq4mZy','EdTMBgu','DMvKia','yM9VBa','z1j5s2e','Dw5gB3m','DxrVo3O','zYaVigO','ihLLDca','lY0WlJu','yw1LihC','DxjJztO','sgTUweC','ohb4ksK','BMvUDa','B3jPz2K','WPpcJ8kvWOFcJG','zNvUy3q','WOJcH8ktWOZcLa','A2v5vxm','DgvZDa','nJq2o3a','ihDOAwW','ywXPz24','A2v5CW','Dc5wywW','mNb4o3O','yxjKlwG','zYbTyxi','AfzRz2m','CgfUzwW','rMPrwxu','B2TZihi','ig1LBNu','C25HCa','yw5NBgu','nhb4o3q','yw1LlGO','phn2zYa','WPxcImktWOFcIq','mNWXFdG','AgfIBgu','lJmPo2q','tM8GCMu','vNv5uw0','y3jLyxq','rLbty28','yMvHCMK','igLUC3q','zY4G','D1HfuKq','DhveBxi','iMzVBgq','WPtcH8klWO3cIq','lc45kq','C2STy3q','lwHPBNq','DY4Guhi','ChG7zM8','EdOYmtq','WPdcKCkvWOZcJG','Agv4','uxjNvNu','B3vUzdO','q0LpqKy','ENLPueS','BM93','sMvLuxa','rMPjCve','ELjOweu','AxmGBM8','B2TLlxC','ys1Tzw4','runUuxy','zdDHotK','BgLKzxi','vxLvq2W','ALnxELq','DNvYzhO','ExHNt2K','zxG7z2e','i2y3zwu','uxrNwNO','AdOZmNa','C3CYlwi','AxrSzsa','BMCUcG','lNnRlw4','rg5Wsxe','icaGia','CgvZia','zJu7Fq','Bw4TC3u','B3nRquC','mJrWEdS','BgvUz3q','B2r5','rhzKChC','z2LUoJa','BI13Awq','re5hEei','BgLNBG','vhz4q2O','zgf0yq','ihjLCg8','ihnVBgK','iJiIihm','CZPJzw4','CKXPC3q','WOBcImkvWPlcLa','oYi+u24','AhrXCLm','mhb4o2y','WPhcLCkhWOJcKq','WORcKSkkWPhcLa','AgvHCei','zwy1o2i','qMLUzgK','zgTPDc4','C3vYDMu','vNbbDMy','WO3cKCksWPpcIa','oMLUC2u','EwuU','nsWUmdG','zgvYlxi','DeDvthe','C2XjDxy','i2zMnMi','wNrtEg8','y29UDgu','DMvYC2K','z2jHkdi','nJaWo20','ChG7Bwe','u2vZC2K','CwfYuxm','y3LTqM0','re9nq28','CYXTB24','lxnPEMu','CgL0y2G','DLbwvvm','igfYzsa','sNL0r1e','AwqGCMC','wwTTy3u','EMXZy3q','s3Lms04','Ew94svq','Axngz0W','pgnHBNy','A3mUBgu','DMvYBg8','BhK6Aw4','nNWX','t2DYuhO','igj1zMy','D1fwDNm','ifnxlva','WOZcI8kmWOBcJW','zMLSBfq','EsbHigq','EgHhs20','y0LUChu','WORcI8knWPtcJG','mNb4o20','ufKGve8','lwTD','D2f0y2G','CMrLCI0','sxf6tMu','DhrVBJ4','WPlcI8kmWOJcIq','WO3cKCkoWORcIG','CMvKDwm','v2XJzKK','uM5nCfu','pt09u0e','mNm7Fq','y2XHC3m','DhjHBNm','zwqU','yMjZy2K','zMfRzq','B3nWywm','DhfsBhK','wMLAu2u','ihn0CM8','FdeWFdi','zeD6vwS','CMvKicG','yMPiBMK','yM1oDLC','ChrZCfu','CYb3zxi','BMnLv3i','Bw5AuuC','tgjXBw0','y3zfuLK','uKjUEhe','C2nYAxa','A1nYyKW','zNjVBsa','AwWYq3a','CNvxu0W','oc00lJu','igHVB2S','Be10vhO','DcaOC28','BNqTzMe','qwzJreC','yxbWBhK','CMv0','ig1VDMu','iZjHmgy','DcbZCgu','x19tquS','BgvYige','vNjLrgq','WPpcHSkiWO7cKa','AwzMzxi','zwqGBM8','C3rHCNq','veHWwuS','ifnRAwW','idqTnc4','CJTNyxa','AhLbvg0','AhL3t0i','BLj1BNq','v2vItw8','o2jVCMq','ywT1CMe','uKT6vxu','BNrezwy','rvfmvNO','tezzDNu','AgLZiha','D3jVBMC','BLr5Cgu','lxyYE2e','yvnIExm','CJOWo2i','sw5KzxG','yIXH','DMDwA1y','CdPYB3u','WPxcImkiWONcLa','z2H0oJC','zeLkre4','B2jQzwm','ldi5lc4','ywL0Aw4','ywPYwLq','z2H0oJe','Awq7z3i','oJi1ChG','yxjJ','CMvSyxq','m3W2Fde','yxiTz3i','ChGGmdS','mhHLoa','ktSTD2u','zYb3Agu','tvLZvxK','Afrqtxu','ic0Gy2e','DfLqrK8','BM8GCMu','B25PBNa','BMq6Dhi','B3vUDa','vMLetNG','ChG7Cge','yLDiDuC','BgqGB2y','BIG1mNy','mNb4o2G','igjVDhm','BMC6nha','wLPns2C','oInMn2u','BvffwuO','yY1IzxO','s3zyEK4','CMvSyxK','zsbYzxa','ihzPzxC','v3jHCha','rwrrwKe','BM8Gzw4','C1n0v2q','mhWXFdm','zgH3ANK','phbYzsa','mhG1oa','BKvbvMq','sKzkCLa','vvjyu2S','Bfb2zNO','BgLKihi','DcGJzMy','B2ffrfG','mJeSmti','ExrLCW','C2v0qxq','ohb4o2i','mhG3yW','WPlcImklWPxcIq','zxj7y28','WOJcLmkuWO7cJG','DMvYE2y','ihDHCYa','pgrPDIa','psiXmIi','DgvTCZO','D24Gvxa','WPxcISkmWO/cLa','BYbHihq','s1zPt2m','4Ocuihr3BW','zMzlr1i','B246B3a','CxnnBeO','C3fOvu4','AwHhDeC','Fdf8ohW','vNPNyuW','BgLZDa','pJWVzgK','v2fsthG','WO7cLmktWPpcJq','y29Kzq','A3bLEe8','BMu7Fq','phnTywW','C291CMm','u3rYAw4','sMz5tu8','CcbHBMq','CxW9','BgfZlg0','rNHYBKO','ihDOAwm','DcbUBYa','zxnWyxC','ywrPDxm','iJeIig0','AdO2mNa','zgL1CZO','ChqRmhG','lL9Nyw0','x3j1BNq','Fdb8oxW','WPdcKCkkWO/cJa','nZH2AdS','BM9Uzq','ndC0odm','ywXSoMK','Dg87Fq','zMfcEe0','mhGZma','ysbtA2K','DYaGia','WOBcJmkoWPtcKa','tfPcrhq','y2fTzxi','rLn3Eum','kdaSmcW','yxjHBxm','BwvTyMu','BgfZDa','AguGC2K','EgXiqvq','mxvxBLLTyG','mhGYma','CNb5Bha','yw5Jzsa','sgvHBhq','WORcJmkgWPxcHW','vvnKrKy','zwXMoMy','vvDnsYa','BM9UztS','AwX0zxi','CMnLoIa','BMXwuLe','ugXSq2S','CI10Ahu','rJyGywW','lc4WnsK','D2LKDgG','ChG7','Ae9Wv1K','D0Duzgu','WPhcICkuWORcKG','EvfjreO','Aw5Ozxi','WOFcJCkvWO3cHW','r3nYt2q','ufa+pIa','zwf0zva','DgLHDgu','DwPKzwS','u2vLBK0','yxjT','vuPdr2W','AxvZoJi','ktT9','sfveigq','DMLLDW','tvDxBe4','DwHnvhG','Dg9YicS','rw9isMy','uMfUz2u','DdPZDge','CMvMAxG','CgXPzxm','oMLUAgu','ChjLDMu','psjZywS','Ag90ig4','ztOXmxa','EdTHy2m','q2XdB3O','DxDTAW','C2vSzwm','icb3CMK','Axb0ige','lJuGms4','C2STBwi','Ahq6mJq','iMrPC3a','DcbTyxq','CMfWoYi','CMf3ugK','nsaWlti','C2v0tge','BguGy3G','BNzAsuK','zgf0zxm','r2f0se0','zNDK','Aw9UoMW','DeXUyvy','nYWUocK','uxD5zNO','AgvHza','s2PoDfa','oJeXChG','u2LNDwS','ChG7y3u','zxHLy0m','Dfj4zve','zxG7zMW','quHos3u','Bg9JywW','zw51','Dg91y2G','zwqG','u3bLzwq','D3zQsfu','AwDKvwG','zgP0ywi','AvHLBwK','CgvYBw8','Bgu9iMi','rg5wAfe','BM8Gvxa','ks4G','sKXosui','ie1ciea','CM91DeW','ELDet3y','Aw1L','C0XtzeS','AMrrqLK','ldeWnYW','t3noyMi','wKP6C04','mxW1Fdi','DgHLig8','B3bHy2K','WPxcJSkmWOZcKG','BMqIihm','t1zJqKm','A2HIs3K','EMXYrhO','ywX7zM8','tw9KDwW','zsbUB3q','t1nMDgy','BJOWo3a','AxrSzxm','BgLUzvq','WONcICkoWPlcIq','B2zMihq','Aw4TyM8','EwXLpsi','EdT9','w2rHDge','DLDlu0O','BI1PDgu','A2DYB3u','Avbxv0S','zxnWia','uwLuuNK','ignVBNm','vgXPuxe','nNb4o2i','mxWYFde','yM9VBgu','CLnkzKO','BufHrxy','EdTNyxa','Aw5PDgu','Aw5N4OcM','swvuzK0','BgW+','yuPlvhy','D3Dfr1i','q0jzANG','yxjTzwq','zxi6mdS','zMy3ytK','EK1Nwxu','Bc5ZAg8','tgHtt24','nYWUncK','ueXyCxy','AvrewuK','DhLSzt0','reL5t0y','D3r5CMS','yKnptMe','D0jsEu8','yNL0zxm','icdcTYaG','ChrY','mhG0ma','WOBcJmkkWOVcHG','uNvUDgK','Fdr8mG','z2v0rwW','pt09','A0jPCKe','nsWUmdi','Ag9VA0y','ohW5FdC','AgTYrLi','DxjHtwu','x2DHBwu','uxDQB0e','oJrWEdS','CNqP','yMfS','EefiyNG','zMXLEc0','ndmSmtC','x19ZywS','BNnLDca','veLQEfK','EKvMz0y','DgzJrfu','tuSGq08','whfUCNu','DgPPyK4','sgrvC3y','EgvAAhi','ChG7yMe','BxmGD2K','oNbYzs0','tgf0zvu','BMuGAg8','B2fYzca','yNPvrNO','CgfKrw4','BwDkD0G','vtGGAxm','WOZcHSkvWPhcIG','zsbNyw0','Dej4Dvy','DxrVo2y','mJqYlc4','uwznC0C','Bgv4oJe','AgvHCfu','Cd0Imc4','BMvJyxa','zw50igK','WOBcI8krWOFcIG','uMvMDxm','B3jRu3K','mYWXmdy','B24GAwq','r2PyCgm','AwrLBNq','yxa6nha','rvnqig0','D2fYBMK','igzVCIa','BxbSyxq','ugrozeK','WOFcICkjWPdcHW','ywjZ','EdTMAwW','wK9KEgC','CwXOCuC','D1DIsNq','Ag9VAW','DvDduvO','CLfACM8','mte3odm0ohHRsxPLBG','zgTPDa','CMvMCW','igTUB3C','uunqv0y','Awq9iNm','uMX3u3e','Bw92zq','EI51C2u','BMfSrNu','WONcLCksWPdcHG','BwfW','qxrbCM0','ihLLDa','qufOEuK','s2Hurfi','CK9rB3u','te9h','t2fiqxa','ig9U','mteUnxa','ihvUAxq','zefWtKi','Bw9YEvq','r0PUz2G','A0nKww0','mhG5oa','WPhcKCkjWPhcKG','qxbwELG','uMvZzxq','y2fSlMq','BMfTzq','sKfmAue','yxjTAw4','zLnSt2C','BMDZ','Dg9Y','igTPBMq','DxjHvge','mIWYosW','AgLSzsa','q291BNq','CKnuwK4','iZDLzta','thD6Afa','WPpcI8kuWPtcLa','ntbWEcW','CgfKzgK','qu91Bey','Au1NyNK','B0jPq3i','B21Tyw4','DLf3zha','zwyYo2y','wvbAq0G','q2HTuMi','rLvfCLq','ywz0zxi','BNrLCJS','B3r7ywW','tMzYt1q','zxbSywm','DMvK','o2nVBg8','o292zxi','BNnMB3i','ChzhthO','wK9bshu','Fdv8nhW','yxbWzw4','ignHChq','Dxm6oha','BMnL','qM94zxm','BMq6i2y','AwvSze8','z2PJEfi','BIbtruu','n3b4o3a','ihzPysa','u1D2ChO','CNqGihq','B0nlChe','D2fPDgK','B25Ligi','Dc4kcLq','vKL0wvu','lxDPzhq','zM9UDc0','nsK7Dhi','Cg9Zqxq','mtK1mdy5mfjvuKf1sW','CM9ZCY0','WOZcKCkiWPxcJa','oJaGmta','CM9VDa','ihbHDgm','uurqCLm','i3nHA3u','D2LrBMG','ms4WEdW','B3nLCY4','t2fxA1y','BwLU','DxjHDgu','C09yAMe','yu1Lrfi','DdO3mda','EeHgD0W','zxvYA1m','DhLWzq','y2XPCgi','zvbPEgu','DMjeu3G','uIbbq1q','Cg9jwei','yxbP','zxa9iJa','BMuUifq','B3bLCNq','zxmGB2y','ztSTD2u','AuzjDvi','yMvNAw4','CdO0ChG','ihn0yxK','qxnZzw0','oJiXndC','D2vPz2G','tvPIt2y','oYi+u3a','wNfYy0y','rhDtBfm','zxrOAw4','Bgu9iMq','BKPptuS','u2vLBG','sNvYrwy','BNq7yM8','WOZcJSkvWOJcJG','BM8Gtw8','AxnHyMW','ysbZDge','D2zXvKi','wYbHBMq','t0Xlu3y','AgvYAxq','B3rHDgK','zw1VCNK','q1z0y1i','Dxm6nta','yMfmweS','mNb4idC','veDyDxu','Ewf3','AwXKlca','igDSB2i','icHNDwu','BJ8PoIa','Dgv4Dee','WPtcJCkhWOFcIG','zxfRC28','q29WEsa','rw5LBwK','CdOXmha','DgzqDhi','zwn0zwq','txvSDgK','y1LguKS','C2TPBMC','A1H4seK','DY5vBMK','Avbms0m','ksbZyxq','twzwCgG','qvbNwg4','WOJcICkpWPhcLa','ihvPlw0','DwvxCMe','Aw5WDxq','igvUzca','Ec8XlJq','shfJtMC','DvblEhq','B3i6CMC','zg93','yxK6z3i','zcWGBM8','CNvUDgK','ywSTD28','Aw5Uzxi','khrOAxm','rviGD2K','DxjUzwq','zxjHia','tfDdEhe','WPxcKSkgWORcJG','C2XPzgu','WPtcJSkrWO3cLq','WOJcKCklWOFcHW','AvfZsgS','WONcJSkgWPxcJa','BvnHtxu','yNv0ig4','idaGmJq','EhL6','z2H0oJG','C3bSAxq','AeH4r3C','CIb0Agu','EgjWu1m','q2HPBgq','lwe9iG','WPhcI8kjWPtcKG','mcaWige','WOJcLmkoWOBcKa','DgGGB3i','vhjHBNm','B246zMK','BuX0Cgu','Cg9ZDe0','DeHLywW','Aw5ZDge','CgfYyw0','B25Lige','ndC7','DgHLiha','ywrPzw4','WONcHSkuWPlcKG','WOJcJSkiWOVcKa','ic0+ia','C2fNzq','ign5psi','u0L1sw4','sufyvLa','AhvKlwm','Aw9U','vuXvuNa','A2v5','Aw5KB3C','ELfWvfy','4OcuigzYyq','igHHDMu','pc9ZCge','zMfPBgu','ys1ZA2K','CMvKihK','WO7cJ8krWOJcJa','s1f2v2C','rJKU','y3rZimk3','BM8Gz3i','yuzTBKS','zwn0Aw4','oMjSDxi','igHHy2S','WO3cLmkvWOVcIG','mtfWEdS','uuL5rw0','zsbZDhi','zxH0','u0TSrLa','DgfYz2u','thDrBxq','rvPNz3e','Dc13zwK','yMXLig4','Cgu9iNi','w2fYAwe','vw9Myxi','AxrZ','lNnRlwm','B2DoyLK','B250lxm','zgLUzZO','rejhs1C','C3qY','C3qGysa','lwfWCgu','yNL0zu8','BvvpDLC','quXgwey','BLjtsei','zxiTC2u','ztOXm3a','ywXSzwq','ALfkDhm','BgvMDa','yw1PBMC','yw5ZCge','BNrYB2W','DgfYDdS','mJGPo30','AMHcBu4','BKrWv0u','zuL0zw0','AMfotNa','A3jTD1K','oNrYyw4','v0fswI0','zLzwrMW','tM8GugG','nwmWidm','yM90q28','wujRDfe','DxjHimk3','zdTWBge','ihvUyxy','zKneCfG','BLrgvei','v2XJswW','A0HOtwm','Bg93oMG','nhb4ide','WORcHSkkWOVcHG','zM9YBtO','WONcJmkvWOJcIG','zxL6CKO','vKDfC1e','WPhcICktWONcIq','BMT2tvK','Cwn1u0S','yMfJA2q','suzODNu','yM94zxm','zwqGDgG','zxPwyNa','Duruthm','ysGYntu','CNjVCG','EfPVAxi','y3vvEfu','Ae13BwW','CgfJAxq','qMvHCMK','ExP6y0C','WPpcICkvWPlcKa','z09luhm','zvbYB3a','nJTMB24','C2v0','vgHLiha','BwuGD2u','WO7cICktWPxcLa','vgrMB24','B25TB3u','Bez1BMm','WPxcISkrWPxcKG','yMfYzsa','BNrPBca','u1HlAKu','lc40ktS','zw5LBwK','CMeTBwu','wMrWA1i','yw5LBca','wMDOqxa','ywn0','zw50','wK1oAgO','DgLUzYa','zLf4CuW','DhK6mdS','wwXgyui','l2j1Dhq','CNq7z2e','WPxcJ8kgWOJcKq','Ew54sgG','ig9Uy2u','A2LUzYa','o3rVCdO','B24Gzge','BNzlENu','yxjKlxq','idrWEca','zwz0ic4','mtb8mxW','WONcJCkkWORcKa','y29UDhi','weHMCMi','DxjYzw4','WOFcJ8knWOVcKG','WOFcH8kjWPlcJq','v0f6uKK','zxnZywC','kgXVyMi','uNrkwM8','zxLL','vMD1ugq','CM9SBgi','zM92igi','CKn5EwK','u055AuK','WOBcISkoWOVcIa','t1fVqKm','oIiIo3a','BgXxyxi','As1TB24','yM91BMq','Aw9UrM8','DcHHDxq','BgvHCG','zhbNsKC','zwLNAhq','WOBcISkpWO/cIq','Bg1dvxm','uuv3CfC','yMX5lMK','B2jMsq','DwLNsLa','o2DHCdO','BNq6Aw4','AxnWBge','mNmSyMe','C3rYB2S','BguIihm','vu5UB0e','WPtcLmkoWPhcKa','sgvHCca','BwTdyLG','tLbIANa','v1LvBMC','DeD0vwO','runqwNy','CKnVBNq','idfWEca','ChvZAa','C3bYAw4','WPpcKSktWPlcIq','BMfSv2e','C3bHy2u','tw1Mte8','DhrVBtO','mtbWEdS','AY13B3i','CMeTzxm','Dfblv1q','DMPSC1C','CNvUCYa','zxi7zM8','C3rYAw4','zMrnvwy','mhW2','yw55ihC','EKHdBMS','WPxcKmktWPpcIG','yw5NzxS','ztPUB24','ifjLC2u','AurkwNi','zxnW','zMvLDa','mtjWEc8','Bg9Hzhm','y2XPzw4','zhKIihm','Dw1IE2i','Dhm6yxu','mhGYoca','ieaG','DxjJzq','zLDmAfC','yMHSvfq','nZq4mJK','ktTJB2W','Bcb1Cgq','AxbIB2e','zw50o2i','WOVcKCknWORcIW','ALf1rwW','ugHVDg8','tLLsy3u','BM8TBwu','CgfYC2u','yMXVy2S','Dw5KoNi','AM9PBG','BhDHCNO','nYWUmty','Bw4TCge','zgf0zsG','WPdcLCknWPdcIa','ug9ZAxq','Dxm6nNa','WONcLmkrWOFcHW','WO/cJmkgWPhcIq','C29SDxq','D0XvCNu','rgT3s1O','t3vgywu','DcbKyxq','i2zMnMu','mJKWChG','t0zjCKu','zgLTtvO','DeHTqvO','WOVcISkhWONcKq','BMnLigy','ywiUywm','i2zMzJa','AhjLzG','WPxcH8kjWOZcJG','AgLKzgu','zgLZCgW','m3b4o3C','sevbufu','AfzOsLe','zwn0Aw8','B2TLpsi','yw1L','mJzWEdS','BgPwq0O','u1HisK0','C2v0rMW','ywDLigG','kdiYChG','Bw4TBg8','zwnUAee','s016EMO','WOJcJ8kuWPxcIG','BMCGlYa','yw9KwgS','iIbTAw4','igHLyxa','tfPjD3i','lNnRlxm','yxrPB24','C2v0ida','Dw50','AMjXwhy','yw1Ligy','uMvNAxm','A2L0lxu','igfNCMu','BNrLEhq','ANzUsKi','oImXnta','C2LU','DMuGB2i','ywDLCG','ltqTnY4','ig91Dca','CMnPywW','lNnRlwW','vMfSDwu','odq2BePKz2Py','yMTPDc0','C2XIB0G','r0vwDfm','qNvPBgq','z2fTzvm','y2fTia','mhG1yW','tNfxrLu','suXOzgm','rxLL','DgvYzwq','ywLSywi','icaYlIa','AgfZtw8','Cg51ufe','sgPdCLC','DhLSzq','DgnO','BwvUDs0','sMLHC1i','zw5NDgG','Aw5Ly2e','C2vYDcK','Bgu9iMm','rK9YqKe','z2v0x3q','B29RCYa','zgLMzMu','iJ5dB3a','Fdj8mhW','y2fTuhq','AejjsK0','CvLmC3y','ifvjiIW','lJGYktS','z3jVDw4','B20GDgG','zKrztMe','ignYB3m','zg9JDw0','B25VC3a','t01LA1u','EhvZzui','WPtcICktWOJcKW','sNjJDMS','mJu1ldi','B2XSzxi','CfrTCge','yxqSCMC','wKvytvO','yKPUBuu','zMLYzsa','B3jKzxi','CMqTAgu','qu5pveG','lJKYktS','DuX3v3u','Ce5vt3K','C2v0Dgu','WOVcKmkiWO3cHW','DhKGAw4','B24GDgG','zhrOoJi','CMf3wwe','WO7cKmkrWPtcJG','AwDUlwK','mhGYyYa','zMDeEgS','zEkaPJWVCW','AguGAg8','B2SGEwu','mcuGBM8','ys9vv00','mda7Bwe','kZb4mJK','z2v0vwK','Bhv1DKC','ntuSlJa','B25Z','Aw50E2q','CMLNAhq','u25HChm','Dwj7zM8','BNnWyxi','Ag90','v0Dnrwe','rLDyy0G','yxrHihi','sKzKAwO','WOVcH8khWPlcKa','tg9VAW','D2jsshO','yxGTD2K','C3rLCa','WOVcJSkoWPhcHG','DMvhyw0','BNqXnG','vu9JzhC','C2STDMe','BgLNBI0','DgXLCW','igj5igu','CMuk','DhjPzwq','zKHrChm','CJTZDhi','EIdIGjqG','BhfPBKq','yKjTz0q','Bw9UB3m','DcbPzd0','sNnMq1K','AhHlsvC','CdO4ChG','t2reyu8','y2XVC2u','B2jMqG','yLvtDLi','z2fTzsa','re11rgC','qM90','CNnVCJO','EIaTihC','B25JBgK','lwnVChK','zxnhwvy','oNjNyMe','AxbMzNq','uhrIthm','icaHia','B2DSqLu','mJHWEdS','BwuGlsa','nIWYmZG','y2fWDhu','AenoAha','tg9Hzgu','pc9WCMu','WPxcKSkjWPlcHW','z3jHyG','WPdcKCkjWOBcKq','Ahn3EfK','BNrZoM4','yxmGAwq','mtGGnIa','C3rhshy','Fdz8nxW','AxrPywW','AxzLo3C','WOVcLmkiWPdcIa','wgzvuLq','oYi+ltW','CfzIBuO'];_0x2d2e=function(){return _0xcf83d6;};return _0x2d2e();}
