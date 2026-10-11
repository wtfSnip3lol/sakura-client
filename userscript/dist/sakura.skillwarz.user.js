// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.10.2
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

function _0x2334(){var _0x40f6da=['zxKGAxm','u0rnvxe','pc9KAxy','AK5YBKK','Chjsvu0','BwXdswS','oInMnMu','A2v5','BNrPBca','mI4Xmc4','AgvHCca','BxflBvq','wgnvAxm','EdTHy2m','rurUCgu','ls1W','y2u7','ChG7yM8','mhb4oW','WOZcKSksWPpcIG','BYb3zsa','mwzYksK','DuDgr3e','oJrWEca','uMvJDa','psiXlJi','DgvTCZO','v3vMzxi','DhLSzt0','lwTD','mtrWEdS','swjXueW','ihjLC28','DcbKyxq','WPtcKmkuWOZcLa','C2LUz2W','ig9Mia','C0zpueC','DgvHBq','ie1ciea','y2uTAxq','Dwv6wwS','AwzMzxi','pc9IpG','Bw9YEvq','BNrezwy','kdi1nsW','zxjLBMm','yMfJA2q','zYbIBgK','A0LNDgC','serQsKy','CY1VCMK','v2vHCg8','twj0vxu','WOBcLCklWOBcKq','DMfS','AgfIBgu','DhzrDgG','WOFcJCkiWOBcIG','t3D6Exm','ugX2qMm','B25VC3a','B1vVqNO','DMvK','zxCGy2e','DMuGB2i','s0XWweC','AZPICMu','ChrJu3m','yxjTAw4','AgLKzgu','nxb4o2i','mcaWida','vgjwzNi','WPlcI8ktWOVcKG','A2nktei','Aw5WDxq','BNrPyxq','sfzoDvm','ywjZ','BhfeChC','oYi+u3a','uMvSB2e','AgfKB3C','khmPigq','rw5HyMW','zMLSBfm','Bwvhyw0','Bg9YoIm','zYaVigO','ndq2mtq5mfLrwwXzwq','rgzTvxC','ChbLyxi','ihDHCYa','EdTOzwK','yNvMzMu','C0HYuLu','AxmGBwK','wfrqCxa','ig90Agu','t0rSv1O','oYi+','WOZcH8kvWPpcIW','B3j5','DNrwA2m','yM94lxm','mNW1Fda','CJTNyxa','DwvyA0m','u2vNB2u','tMfSB1K','DdmY','B3G9iJa','oJK5oxa','zvjtC1O','DhjPzwq','lxDPzhq','t2zMC2u','CML0o28','zJmY','DMLXAxG','su5higy','oJPHzNq','BNqTD2u','tMXIt0i','AgvSza','BwfSBg8','CePkueG','s21cAvO','s3jZwK4','yuzYB20','u2vZC2K','Chr1CMu','ysGYntu','zNn0sMm','BwLZC2u','C2v0sxq','D29YC3q','lGOk','tNLoD1m','BhKUieG','B3qGD2K','C3mP','DePnENC','wgfvvhG','Fdn8n3W','yw1Ltwe','WOZcJSkvWOJcJG','zMXLEa','z2LUigC','lJC1ktS','Beniv2y','zhrOoJi','kgD1zxm','WO3cKCksWPpcIa','vuvqt2e','qNDeCxa','CYbHy3i','iIbZDhK','uNzJvge','Eca4ChG','vgv4Da','mhW0FdK','n3b4o3a','r3vuvMG','zMfPBgu','o2jVCMq','zwqGlYa','C2v0rMW','BfzxAKe','BNn0yw4','yxbWzw4','s2Xiuwi','BMC6nNa','B3r7ywW','zxbSywm','yxrPB24','uMvWB3i','ic0+ia','Dg9W','AK5Uruu','yxHXvum','CJOJzJC','B2jM','tLDdvu0','CI5QCYa','CgXPzxi','DgL0Bgu','Ds1JC3m','ywiUywm','zKDrvLu','sMHNAK0','vevQDK4','AvHbB1y','mJu1lc4','Dw5PDhK','q29WAwu','EvnSAvq','BIbuyw0','Dg5hCLC','BMDL','C2fzvgm','BeHdEgK','CZOXmha','zw9cwhm','tw91C2u','B3i6Cg8','CKDiDwS','C3vnDKy','Efrpu0y','yw1PBhK','ywSTD28','o3bHzgq','ue9btxC','C3zNiIa','ENjWvfu','Dxr0B24','B2TLlwW','CMvHzhm','B3jKzxi','ys1ZA2K','Aw5Ly2e','idHWEdS','E3bVC2K','ze1yBeK','ugDlwg0','C011C2S','yxbP','swLUsu0','ownqq3Dkva','re5Tt1q','uMvHC28','CKr6ze8','D2H2Dhe','CMvMDxm','zezrEM4','zgTPDc4','zNbMsKK','C2fUzq','sgvHCca','vgfTCgu','CMf3wwe','WONcJmkvWOJcIG','CMfUihK','WPdcJmkkWORcKa','CMvSyxq','ANfSvwy','uLbdugG','z2v0x3q','oYi+tM8','DxjUzwq','mJu1lde','B29RCW','rKj2ug8','oJCWmdS','AfzMC04','ywrPDxm','Fdn8na','Dg9ju08','ihjLywm','rhHXtKO','WOBcH8ktWOJcJW','Cg9Z','AKLwrve','CMuk','lwzHBwK','EdTNyxa','A1n5BMm','rfDbwMi','ihDYAxq','DMnLwLe','sevbufu','zwP6yNm','WPxcImkiWONcLa','q3Hotum','CLzZC3q','C29SDxq','u2vLBG','CgfYyw0','CML0Dgu','BM8GBgK','igDSB2i','BM90ig0','BM8GCMu','nhb4ide','vgHHDca','s2XzEvq','AxrSzsa','A2v5vhK','mhGYoca','CNzjENu','oNbYzs0','Ec8XlJq','BNmU','C0Thqva','Du1Mq2K','AhvK','B2TZihi','BwLU','WPlcImkqWOZcIa','WPxcJSkvWOFcHG','lwHPBNq','WOZcKCkmWORcJW','Cc1JDG','u0D1yM0','WOVcJ8kjWPpcLa','zxnW','WOJcKCkvWPlcKG','AxqTC2m','rvbtqxe','BwvTB3i','zgLMzMu','sw5Zzxi','zxHWB3i','Cg9ZAxq','idzWEca','sfrnta','ChG7y3u','rgvSDge','EvrHCa','sNHIsgC','zwXeqve','Dhm6yxu','Axr5','CePVEve','uK1ywNu','AeDisKm','AxmGyNu','y2XHC3m','WORcImkhWPdcJW','AhrUzxm','ndy7y3u','BgfZDa','lL9Nyw0','mxW0Fdm','A1DfwwW','AguGCMe','v3PArKO','BMC6mca','iefdveK','kde1mcu','zMzSyvK','AvfAAgC','CMTqtMW','zNGIihq','mtbWEdS','CYb1BMK','sNLNvgW','tfz2yve','z3jHyG','CxzgA2K','o2n1CNm','BgqGB2y','vLnKr24','ohb4ide','B3nLCY4','B3z5D28','BNnVBge','B3jmrhi','ExbLCW','AfnJCMK','u3PYDei','BwfYA3m','B3rHDgK','zxi7zMW','zwXHChm','yMeOmJu','qxDgseq','ywL0Aw4','DgHLBG','Dgv4Dem','zhrO','BMDZ','Fdr8mNW','BwLUkdu','quv4AgG','zxmGBM8','vtGGAxm','DvPztKO','wuvVz3O','zvbYB3a','EwrtC0W','EvLbveO','ztT3Awq','CM90yxq','y1zzz2O','nNb4o2i','WO/cKCkoWO3cHG','WPpcICkoWOBcKW','nsaWlti','yxvSDa','yMfYzsa','Be1lBM0','WPpcLCkvWPpcIG','AwDPBMe','AMngwgC','lNnRlw4','EcbZB2W','C2fNzq','zg1qu3e','zwfwDNa','DdOXmha','B2jMrG','C2v0tge','Bg9JywW','WPhcKSkpWPdcJG','q2HuuM8','ywn0Axy','yxjT','tgf2CLq','zM9UDdO','BgvKoIa','AvjSCeq','ocWYndi','lxrVz2C','tuSGq08','weLeBxe','zw5HyMW','DgvK','zxvsExi','y2X1C3q','BK9uEgy','EM5gqvy','C2v0vwK','B2DVlxm','y3vYC28','yw1LlGO','WPxcJmkhWOBcHW','zsbVyMO','ENnqEwy','WONcImkrWPdcIG','r1fcBva','qvvAEe0','lxnWywm','BJPJB2W','zM9YBq','mJrWEa','Fdj8m3W','zxnVBhy','t1fwr0O','ywWGB24','zciGC3q','q1LyvMq','z2v0vwK','rvjLrKq','u0jOtK0','Bw4TDge','CMv0','AgvLzuy','DMLWzeW','EvjVD3m','s1HmDhC','rKf3vg0','t1j3DKS','AgLSza','DxvguNq','vhfLDwu','uKnozuq','lJuIihy','B296rMW','CNbPEeO','mxb4ihi','BfDysgm','zhmGWRCG','AMvYqKm','yxG9iJu','B2SGEwu','DcGJzMy','yYbYzxq','BgPIzu4','qxjvDwm','mhGXoa','nYWUmsK','qK1Vuhe','zM9UDc0','4Ocuihr3BW','BMCUcG','ANrgy1C','D2LKDgG','C25HChm','WO7cJ8kmWOJcHG','rw5LBwK','Dg9WoJe','Fdb8mW','AgL0zs0','BfDHCNO','oJiXndC','wffAv20','EKjPv0i','yvzmywq','A2vLCa','B24GAwq','AM5cwhe','zMLYzsa','DfjYs1O','BMv2zxi','BMqGBM8','zxiTCMe','ChDgC1q','ldeWnYW','uhb4z0O','wvfQDhy','idaGmca','Bg9HDhm','BNq7y28','WOFcJSkjWO7cKq','B3bHy2K','D2HLBIa','rxHWB3i','qM94zxm','oJfWEca','B25Nig8','C2nYyxq','BLz0CwC','lwLUzgu','zgvMAw4','B2fYza','AgL0CW','twzlzKO','ChbLCIa','zMzMoW','ndGZnJq','AeDWvhC','ChvZAa','AdO2mNa','zgTPDa','zwfKEsa','B250lxC','vvv5v3u','B3jPz2K','zKPoyMu','D28GzMW','vw5QCxq','WPpcH8kpWO/cKW','uxHZvMe','BIaUC2S','AxvZoJi','rhHfEKy','qKTdvw4','uwDdqwi','yLLvsM8','BfLNseK','yLbAufq','msiGC3q','Fdn8mxW','C3vYDMu','mxb4idy','rw5LBxK','CgfYzw4','C2zVCM0','ohb4o2i','WPxcISksWPhcIW','CMuGkhi','icbMywm','BMnLv3i','AwXKlG','ysbNyw0','BIbHihi','zwz0oJe','EtPNCMK','rJKGDhC','DY5vBMK','psjYB3u','v0zdBeu','AuvVtge','B1DJA0q','Aw50BYa','WPhcLCkhWOJcKq','DgeTyt0','zMLYC3q','s2HpC0O','B25PBNa','uMvNAxm','zsXdB24','Fdb8nW','s0rjwvy','DgfU','AuHSu3q','CgrYrxi','CIb0Agu','Denwtvi','CMvKihK','zcWGBM8','ugHVDg8','iJ5tCgu','sufbuLO','BM8Gseu','sezrqMW','Ag9VA0y','zgvYoJa','WO7cLCkvWOZcJa','zvrpuwq','y0LUChu','zvn0EwW','tfLiwMC','uw1HsvG','mdCSmtu','DeTNu0G','zxG7z2e','sunjDvm','EsbMywK','AhvKlwm','Aw9Uihu','DgnO','igHHDMu','BwuOkq','y21K','yuXLz3e','Dde2','BgvYige','o2nVBg8','rxjnB2y','EhL3r20','DMfSDwu','oMnLBNq','sgPeqxq','DxnTvfG','ruPUwuO','DgnOige','ohb4ksK','ltqTnY4','tMv0D28','Bg9ZzxS','v2vfs1e','Bw4TBwe','nNW4Fde','ywLUAw4','BK1HBMe','zMDPrgS','ztPWCMu','t3fAq1u','B29M','C2XPy2u','weXqsuy','B25Ligi','CgfYC2u','BNnLDca','BNvZywi','WO/cImkpWONcIq','BI5FCNu','AM9PBJ0','lNnRlxm','WPpcICkvWPlcKa','WPtcH8kmWPhcIG','zgvYlxi','ys9vv00','Awj3uMS','mNW1Fdy','rNrItMy','yLbbr0W','ys1IB3G','WPdcLCknWPdcIa','WPhcH8koWORcJq','tuz4vKq','vKjSuKS','ugLJquO','tNf4qMG','tg1itgy','ufa+pIa','sMjmEfy','mNm7Fq','zhvSzq','cIHJBgu','q29TCg8','FdD8mhW','icbOB28','Dhj1zsi','DgfN','igL0ihm','C28GDgG','CYb1BNi','CMfcAKe','CMvUDdS','WOZcKCktWPxcHW','zxi7z2e','shbtr1y','igjSB2m','EhHsqvu','Ag9ZDa','psjJB2W','sgvHBhq','DM9Pza','vg9ivui','zw5LBxK','DgX7zgK','i3n3mI0','B3nPDgK','AgvYAxq','CNmP','DMLLDZO','DhHuwLi','qu5Iwei','AwrLBNq','r0nAsK4','ugjUBgq','EdT9','zcbYz2i','sezMA1u','Dg9gAxG','AxfdwKK','q2fTzxi','vwTiu2G','z2fzzwK','CgXHEwu','B3bLCNq','ihbHC3m','DcbTyxq','mJeSmti','t1bzBe8','WPhcK8krWO/cJa','C2vSzwm','z1LjEvG','vgHLigG','Afvxt1u','Eu9hAvK','qNLjza','s29cvvy','BYb0Agu','Esbku08','CM9VDa','WPlcKCkuWO3cKW','zgf0yq','A2LUzYa','Dw5Kzwy','zgLZCgW','rNb2ruK','ExvUzhy','zsb3ywW','r2rlANa','icHZB3u','AwXKlca','shrZDNa','rw1KC1G','o21HEc0','qxrgAxi','ztOXms4','lIbeAxm','zt0IyMe','Aw5PDgu','zwTtBvq','yxv0BW','C3bSyxK','WPxcJSkmWOZcKG','CKnyqNy','BMq6i2y','ywnRz3i','zgf0zsa','tLD1qKK','whfHsLa','sgzzww4','DxDNuuu','sMHjDeK','lc4WnsK','w2fYAwe','q3nwCK4','t3Pdshm','uxPgsuu','DgHLiha','y2fUzgK','uKfqueu','lg1VBM8','yMfZAxm','n2vLzJu','AhjLzG','qKjfAKC','BxffteG','A1nTEM8','vvvkywy','mIWYosW','Axr5oI4','wM9wtKq','r0fPEeS','C3vtrK0','A3mGD2G','ywDmzM0','ys1ZDY0','z2H0oJC','BLbire8','iZDLzta','y29Kzq','oJa7zgK','ufzdtw0','oJaGmca','qwn0Aw8','CZ0NC2S','t0vAELi','zw50','rvnqig8','WOBcJ8kjWPxcKa','psjWywq','qMvHCMK','BMqU','BLr5Cgu','ug1NyM8','zxzLCNK','qxrbCM0','AMDOvKq','r2rHDfK','WOJcLmknWO3cJa','DxjHDgu','BMuGAg8','Axq7Fq','zxjHDgu','EgvZlIa','zuP1BNG','BM8GD2e','wwDntgG','BMvPDgG','ihzPysa','WORcKSksWORcKW','z2v0','WOZcKmkhWOZcHG','lM1Ulwm','vg90ywW','CMvKige','uuzpDMG','ntbWEcW','mhW0Fdy','t0H6seG','iJ48l2q','ALfmEhK','DLrMCxe','Aw5Uzxi','C0Dvq1q','iNnWiIa','nIaXoci','nhb4o3q','ugPit3G','Bw4TDgK','Cuj3ww0','yuXNquq','Bgu9iM0','vMXvCee','CxvLCNK','idqGnc4','BNqXnG','BNHYzwq','t2TLtuq','khmPihq','ywj7zgK','Awjuwvm','C2v0Dgu','BI5OB28','z3jVDw4','BgfZDem','rJGGlYa','lJv6iIa','iM5VBMu','vhbqt0G','swf5zgm','ktTIB3i','CNvUCYa','ihjLCg8','BM8Gvxa','u25HChm','BJOG','A1PRCve','tg9VAYS','z2v0sw4','BIbYzwW','ELbft2K','z2v0q2W','tNjmDwe','EI51C2u','WONcJmknWOVcJW','zsGP','BNnMB3i','Bw4TCge','wMzQCeC','C3fYDa','yMvS','uwLhAwy','icaXlIa','iIbZDgu','Dxm6n3a','ntTWB2K','lxyYE2e','DcbPzd0','DMDxy2y','lM1Ulxq','Ec13Awq','CIbWywK','qKD5Axi','oJrWEdS','CJOWo2i','D3jHCdS','CMeTBwu','wxnmwfy','B3vYy2u','zgLUzZO','D2rMD0i','BgvUz3q','BxrICKy','oInMn2u','odaZnde3mfPuC2ndEq','BM9kANa','WOZcISkgWPdcHW','AgD2veG','z25eBwm','WOBcKmkgWPhcIG','y2u7y28','zMvLDa','qxbWBgK','s1jvvMG','y2TNCM8','o3DPzhq','WOVcLCkkWOZcHG','A2L0lwe','r0Pkr2u','zxvAv2G','BffHBKm','u2vSzwm','Bu9grNC','mNb4idC','B3rLE2y','AwvYkc4','B2X2zwq','igP1Bxa','l2nHBNy','sKXJsvq','i2zMyJm','DgfYz2u','B3vUDa','CM9ZCY0','qMLUzgK','ihbHz2u','AcbMAwu','z09uDNa','qvDRqMu','o21HCMC','WOFcJCkkWORcIq','u1zhsvC','DMjbwMq','D3jVBMC','BwvTyMu','CM9Tihm','zwqGBM8','AgnvyxO','mNm7Cg8','WORcJSknWORcKq','C2v0sgK','D2fZBva','zg9JDw0','B3vUzcW','qNjHy2S','BwuUy3i','ihjLy28','Ahq6mJq','Dw1UCZO','A0XbtLq','Bg9N','zwqGEwu','CMXHyMu','z2Pnq2i','igvHC2u','iIbZDhi','igjVDgG','rNzKrKy','lNnRlwi','BNuTCM8','Fdv8oa','ANHMswu','rMLjrxK','y21cA3G','y2fTzxi','rwv3qvm','z2H0oJe','wffmrvu','Bg1uD0K','z2vY','BgvYkZa','tuvzrNy','CNvUDgK','BLj1BNq','ug9ZAxq','r0XNwMS','zxmGDgG','CMfUz2u','otCZndy0v1nzEMLL','v0vVugy','zxmGB2y','yMrHowm','zcbPCYa','mhHKna','mtb8oxW','AxvZoJK','AwqTDgu','DgHLige','DgzqDhi','t25ezxm','qNjLywS','ywLSzwq','ru9RwMe','Ag90ig4','BNrLEhq','ncK7yM8','y3vZ','mtfWEdS','yxj7D2K','BM9ZCge','lc45kq','r2zYAxq','ihnRAxa','ANvTCa','CKnVBg8','yvvtAeK','lt4GDM8','Dgv4Dge','zsbUB3q','uKnwtey','ntuSmJu','ihvUyxy','yur4AMu','Bgv4lxm','EMu6mte','A3mG','B2jMqG','zNvUy3q','Bw4TC2K','mhG1yW','tgnwq0i','zwvKzwq','zxnJ','igHVB2S','lJa4ktS','C3rHBMm','BxHLwxy','Aw1WBge','CMvH','CNmkEwe','zxfntw8','BMfNzxi','B2r5','r3Dzzfe','CJOXChG','DhK6mdS','WPtcHSkkWO/cJG','yw5Jzsa','ieeGAg8','DuTgrKy','CgfPCKG','owqIihm','ldi5lc4','r09lruO','AguGBgK','CMLNAhq','WOVcKCknWORcIW','BwfUEq','CMeTC3C','B2XSzxi','C28GAg8','zgLzD1a','ChGGC28','tvjovey','sKHrBxG','Ahjhy24','z2v0x3i','DMrkuvK','txvitMq','BMvJyxa','oY13zwi','D0f4Ewy','ywWGBM8','ic0Gy2e','Fdn8mq','quWGqum','v2LKDgG','EwvZ','o2fSAwC','rNvZuwC','B246B3a','D0HOB0u','BhKGCg8','BhqGC2K','o2zSzxG','iokaLcbUBW','ywXSvMu','ns00idC','BMnLC1i','pc9WCMu','zNjVBsa','mtaIihi','CKnVDw4','zgvqtwe','ChqRmhG','zMLLza','nYWUnYK','BgLNBG','CLfZAMO','Bw52rLi','zw5K','WOBcJ8kvWPlcKG','igzHA2u','zuzpzLG','oMLUAgu','Ewv0ic0','DxqGEw8','yM90Aca','ChG7yMe','BNrxAw4','DvfYBLK','s2PtB2e','yLPgAgW','WORcJmksWPlcLa','z2XVyMe','thDxt2m','i2y3zwu','CMfJDgu','AgvSBg8','q0LTB04','BMDSzsa','sfH6BKe','BwvZC2e','Fdf8na','ywrPzw4','seHru1C','D2vPz2G','DhjHBNm','r3jzAfm','mxWZFda','zsGPlMu','s1jYqM8','Fdz8m3W','igLZig4','z2fTzq','DfDPzhq','ywDLigG','CgfUzwW','AM9Uvwq','vgHLiha','AfjnELq','ru5tCwe','zxr1CM4','tM8GugG','cNzPzxC','r3LVtNu','zNjVDw4','zw50lwm','CxW9','mtjWEc8','iMrPC3a','oInIzge','idqTnc4','WORcISkqWOJcJa','AgvHBhq','mhGZma','vKHmzMi','wwHTufK','uKPNzM8','ihrOzsa','DMvYC2K','Aw9UoMy','yxjN','tefzrvi','z2v0sxq','uu9YBe8','zcdcTYa','qNf0sNa','C21uExa','Ewf3r2u','CgfJzsW','WOBcI8krWOFcIG','zw1VCNK','zhnMDg4','igXPDMu','C2v0','zM9nu00','Axr1DwS','EuLtB2u','zxaGDgG','Een0CeC','iJ5gosa','wMjuvgG','BejHA0G','WPtcJCkrWPhcKa','BYa3nsW','DcbYzxa','sYbZy3i','DNvVv0W','mNW0Fde','iJ5ZywS','Aw4TyM8','ufP3vMy','kdeWmhy','BhDHCNO','yMuGCMu','tMHHCu0','icaGDMe','EIaTihC','lwjYzwe','nhWWFdi','uMTnA3a','ihbHBMu','qw1Luvy','Cvblr3G','BKnsquO','z3H4teS','t2vKBxm','rwXzA24','C3rHy2S','zhjVCc0','ndC7','uxvtDxi','zwn0ihC','ANPewLy','DgfSBgK','mJa1odeYm1nwsMLOta','zsbYzxa','DgG6BwK','WPhcICkuWORcKG','BgLUzvC','wgn3z2G','uLDvANC','zvzTq2i','CxbOrvG','C2STyNq','wxPeAwO','igjVDhm','rvnfCu8','yw5Nzsi','zMy8l2i','ExLPCgK','Ee5Msfi','CMvHy2G','i3nHA3u','ltiUns0','mtu3lc4','DYbNBg8','whrhuuK','BJ0ICM8','oM9Wywm','zK1xBwS','y29WEq','s0Losxa','yxqG','uvfNvM4','yw1Ligy','CMf0y2G','y29SCW','vvDnsYa','ve50Ceq','wfnsqKq','sNrJwKG','DhrVBJ4','psiXmIi','ihvPlw0','B2SGAw4','ANDuugW','ksWGC28','wxbrqKG','AKvfExO','oc00lJu','yM9VBgu','CuPAuK8','WOJcLmkuWO7cJG','BfjHDgK','DhjPyNu','AxmGD2G','mNb4idG','wMLQruC','uLLZwK0','C2vYlxm','AwvKige','zfvxsuC','C1DLwMW','x3j1BNq','yxbWBgK','WO/cJCkgWONcJq','DffqwMS','zZOXmxa','r2XfsLO','CgfKzgK','ywnPDhK','y29UDhi','if0GywW','Egrrr04','vLfmwMu','t016yxa','WOJcKCklWOFcHW','tgfcBve','CM06BM8','AvbVrg0','vKHfCu4','mYWXnZC','pgiGC3q','B2jQzwm','wfHXv0e','v2vItw8','y2SIpJW','oNjNyMe','B25Tzxm','phbYzsa','nYWUmZu','Aw9UoMW','uuDkCMO','DYaGia','wNjZzxu','sKzeCNG','nxWWFde','rev5yva','otLWEdS','BM8GC2m','ug9kA1a','tvz3s3y','CuXIDLm','ChG7zM8','zwyYo2y','zIb0Agu','BMq7Fq','zxnZywC','Dg9Y','CI1Yywq','zwvcuxK','mhHKma','AwqGzg8','lNnRlwm','t3jwDMK','WPxcICklWO3cIG','y2XVC2u','igLZihi','AxrPB24','oMnVBhu','BhzLzcK','swLIu0q','DMGGlsa','WOFcJ8knWOVcKG','yxiTDgG','C0n1qMm','BY1MAwW','BgTIEwW','AgvHza','tKXRCLG','DeXSs1e','sgLIzM8','ChjLDMu','DcbPBMO','D2HVBgu','vw5PDhK','nxm0idi','mhGXyYa','zwfMzMO','Bg9NBY0','mduPlda','CvHcB1G','ys1Tzw4','zJu7Fq','WPdcKCkoWO/cIq','ifnRAwW','FdL8mq','ihnPBMm','B246y28','CNH4rxy','mtqZlde','rwrgruq','A2v5q28','BMTLEsa','zxG7ywW','oJe7BwK','sNDou3K','CgX1z2K','A1nPtNi','pgrPDIa','Bw9yrxy','yxrnCW','DhPSvvG','mhG5oa','Dxm6nNa','sLj2B2G','Aw9UrM8','D3jHCdO','y2vK','ktTIB3G','B2f0mZi','rJyGywW','wvvwrLO','t3f2Awe','zYbMB3i','C3rHBgu','wwLfywu','AwzYyw0','uIbbq1q','yw1LihC','iNDPzhq','lKHfqva','igSWpq','WO/cKCksWPtcIG','mZT9','CNHbAhu','tg9VAW','icaHia','B3n0zMK','CI1LDMu','vujdA0m','Dg87iJ4','vvfYzw4','lcbZDgu','mtr8nxW','AfPiuMC','re5Hrxy','v1rqqvy','EM1gEu0','WOJcK8kiWPxcIW','sgvPz2G','y2fS','lcbnzxq','Cd0Imc4','ChqGsvm','wxv5Cxi','yMLUzgK','u2nYzwu','kdiYChG','Bcb1Cgq','DgfNtwe','vvPqz0C','s0vZtxG','C2fRDxi','ueDTqNy','WONcLmkoWPpcJW','zwLNAhq','uhjvrxm','A3vYyv0','t0Xyvfy','zxj0Eq','yxiTz3i','Et8Pica','WORcImksWPxcLa','zdTYAwC','B2XPzca','DgvYE2W','ig9MzNm','lNnRlxi','CMuG','z25Jwe4','WO7cJmkqWORcJa','D2L0y2G','AxnmB2m','tujcCMS','AxrZ','shvRtgS','D0zfsKi','lJGYktS','CI1YDw4','BMnLCW','WOBcK8kuWOVcKG','AwDUlwm','yw5ZCge','q2XPCgi','idyWCYa','q3LJv1y','Afjlrhq','t0v0ywe','xxTIywm','BKfdsg8','yM9KEq','Dg9WoI0','DMvbBLy','WOJcKCkvWPpcHW','zZO2ChG','nwmWidm','iZe1mgm','WPhcKCkjWPhcKG','CgvYBw8','ENPWruW','ntuSmtq','BNrLCJS','zMzNywy','WOBcISkoWOVcIa','uMzWzuW','ig5VDca','BMCGlYa','DeHStNq','uLvWDxm','ywrKAw4','sK5HCNq','BgvMDdO','mcuGBM8','sM1usu8','zs1JB2W','qLLwtNe','lY0WlJu','zxi7Dxm','DLHWuvy','WO7cLmktWPtcJq','D2fZBvi','BNTIywm','zvnythe','yxjNAw4','CNvUBMK','qvHws1G','tM90igq','zxG6mJe','AxnWBge','vw12Bfu','lc40ktS','BgXLzca','yxbWzwe','B3jTihi','qujcyvy','vhnrtNu','s0XNBgO','yKTWrNK','wxbZwgK','AxrOie0','BM9Yzwq','BMuUifq','B1LvqM8','ig9Yihq','zwjKENC','wfnsC2S','ALfqqKS','oMzPEgu','thfhA20','oJa7EI0','4OcuigzYyq','EuHHCLu','rwr5CuS','BIb0Agu','qKvhsu4','DYbLEha','AhbvwKm','WPtcKmkjWOZcJG','BKTSB1u','q29TCgW','zvfds2G','z2LUlwW','ihDOAwm','CIiGC3q','WO7cKmkrWPtcJG','y2uSihm','ndzWEdS','B2zMC2u','s2LTBMG','phn2zYa','Fdj8nNW','Eg1xtgO','CMzSB3C','AtmY','AwqGCMC','zJDLzwy','B3vUzdO','WOVcHSkuWPtcKq','nhW3Fdm','EfzhBvC','WOFcICkjWPdcHW','zMDyvKC','WO3cLCkiWPlcJa','B250lxm','sMDgr1u','zw1Pzxm','rMLLBgq','icHNDwu','uwPfEM0','BM5VDca','qu54rLy','zJfIo2i','D3PLvuq','ywrKCMu','igzPzwW','u2nAtLK','mhGYoa','Bw92zvq','CNDcuwO','ywnLlwK','B25Z','Agv4','BwfYz2K','zxjZ','BI1PDgu','DfbotwS','DgLVBJO','mdTMB24','BwLUv2K','CNfbvKG','uLPhBuW','BwuGlsa','A2uTBgK','vKvsu0K','BgLUzvq','qNL2rwq','yxjHBMm','DgHLigC','txHYqKy','ysbZDge','igDHBwu','WOBcImkvWPlcLa','uxLStwG','WOVcJmkhWO3cLq','thDREhe','vhjXzeS','ltiUnsa','C29SAwq','DgnOzxm','CM9SBgi','B2TLlxC','mJzWEdS','Dw5KiI8','Awq7CgW','BfDHs0G','AM9LAfa','AgfZtw8','u1LTzhC','twHQu1y','y29SB3i','C2vUDca','weTlseC','CKLiyKm','r1PXBg8','tM8GCMu','AxrSzxm','rhvfzhK','CIaO','oJeYmha','DgvZia','zw1LBNq','BgvY','BKrhBe8','C3bYAw4','zgf0ys0','CMqTAgu','CM91BMq','DgG9iJe','qMvvrxO','r05jsNm','qMfuz3G','Aw4TD2K','tvn0rMe','vvP1suu','Dwnhrui','EgTnC08','AuLAuuy','CeLvv3O','id0G','mxW2','y2fTuhq','u0nVChG','zwDPC3q','B3LJv0O','DgHLig8','WOBcICkgWOVcIW','zMXVDZO','yxK6z3i','C2DOz0O','ic0GCNu','ywT1CMe','v0fswI0','vK9QzMi','CMf3qG','WOVcLmkiWPdcIa','t0r3A0G','lwHPzgq','z2fTzsa','yvj5CwO','vg5Uzuu','s3HJthe','C291CMm','BMfSv2e','zsbWCMu','CM5PBMC','uu1XBgi','B3bLBG','BMfWC2G','WONcHSkqWOJcJa','WOVcH8kpWO3cJW','nYWUnsK','ktT9','ocK7Fq','Aw5Ozxi','uhrUu3G','WOZcJ8kmWORcKq','yM94zxm','tfbpCxe','zwvKig8','yMX5lum','nIWYmZG','zsbPBNm','BNq6Aw4','Bgu9iMm','ndC0odm','C3mGmhG','yxbZAg8','C2L6zq','zgL1CZO','u3z0D2S','uNvyveW','A2v5zg8','CMvKia','AxmGBM8','nxb4o2G','vujgEeG','yxrJAc4','zfDPwui','ifvxtuS','vvjbx1m','r2fTzq','C3LUyW','zMLSBd0','BgLZDa','qvrJtvG','zMXLEc0','rxD6C2e','ExrLCW','BIG1mNy','B05Xv3a','DhLSzq','WPpcI8kmWPtcLq','uLv3Du0','wM1wteW','zuPkrvu','yMvSB3C','zg93','EfzjwLe','t1jnshC','tuDgzNG','DhKGAw4','Fdj8nG','i2zMnMi','CMrLCJO','w2rHDge','DgfSE3a','iNnUyxa','ueXbwuu','zhjUwNO','DgLUzYa','r2fqzxK','zvzquKS','y093uKq','z2H0oJi','rvnqoIa','C0vWzhu','Cg9YDca','C3DyB1i','CMf3','DMLLD0G','yxGTD2K','BLL5AKm','CMfKAxu','icaGica','WOBcJSkhWONcIG','i2zMzdq','igvUDhi','CYXTB24','z2H0oJm','WOFcLCkpWO3cJG','zwq6ia','ngXqv1nuBG','zwqGlsa','DwvxCMe','AKvfqMq','u2f5z2e','ChG7CMK','vNrJuu4','DhLWzq','B3v0idK','C2HHzg8','y2XPCgi','ig9Mihy','Dw5KoNq','ig9IAMu','WPdcKCkkWO/cJa','q3DSCwS','EcaXmNa','rfnmzKi','zuPzBfq','s3vbAwy','WPtcKmkvWPlcJG','B2XZE2y','C0DrDfi','q09NCw8','ihnHBxa','svLTue4','BNnPC3q','AwnOigy','uMDXAha','WPtcICktWOJcKW','t3jmBw4','ign1yMK','r1bfAva','Bgu9iMi','BNqTC2K','ywnLo3C','vhjHBNm','yMXVy2S','CMq7zM8','mda7Bwe','y2fWDhu','B24Gzge','rw16D04','nZi2s0vlDunY','l2j1Dhq','EeLIsKW','AxPLoJe','uvbuuKi','WRaSig91','D2fZBu0','ChrY','AY13B3i','vg9VCvi','DhLxzwi','y3nZvgu','BM9UztS','mhWX','BLL3te8','Aw5swxe','txvyCxu','rw1bANu','thHpwg8','WO7cLCkoWOFcHG','ifnxlva','BgLKzxi','igvUzca','ywn0','DcbUBYa','Bw91C2u','EvDqB2C','BwfW','CJPYz2i','ihjNyMe','DKnIt3O','mhHIna','WO/cJmkgWOFcJG','CMfUy2u','t1b6A1q','lMrSBa','B3rO','pJiUmhG','lJmPo2q','yNL0zuW','DxrVo30','y2GGDgG','igfYzsa','BKvireW','vu52y3e','y1zXvu4','CMvMAxG','ndmXoufYD3PpAG','nIWUotu','ywrKrxy','yMfZzq','D3DLteC','mhb4oYi','z2LZDgu','vezYwMu','y2fSBa','uxHOANO','ywqGzMe','C2v0sw4','mNb4o2i','u0vhufe','qMX3Ahe','Ec1OzwK','tgLmwfa','BgXxyxi','kdaSmcW','ChGGmZa','q25sAui','z2vYlIa','B3rAu2i','lwe9iG','DxnPyMW','DgLVBIK','ztT0B3a','Bufiq2q','wK1UyNq','z2zlDLa','CdO4ChG','CMnLoIa','yw1L','ruDbwLK','A3nNDey','nxWZFdy','AuvUre8','DxLHAgu','vfzdyMC','CvLfyNO','Axzmr0u','y2vLuLm','q3zyCuq','ieaG','DcaWida','zJu7yM8','rK9iEhi','B246ywi','BxvUy1i','txvSDgK','cNLHDYa','AgHtC0C','rviGvvC','Axn0zxi','igrVy3u','B3zLCMy','tfn6B00','wvj0txi','kZb4','uePPDM0','B2nYzw4','WOVcKSkjWPdcJq','ywX0','igvYCM8','BMqGEwe','ExjmD0S','u0TjteW','vufotLe','Aw50zxi','lxjHzgK','CxvHDa','icdcTYaG','DxjH','zw50rwW','igHLyxa','yMTPDc0','lNnRlw0','lNjLC28','yxjHBxm','WOZcJ8kgWPxcLa','Dc5wywW','Bez1BMm','tMnJCMe','Evzfwxa','qMftvei','CMfTzsa','ueXQALy','EtPMBgu','BM9Uzq','Bg9Zzsa','yxm+','x2DHBwu','ANHis3m','BhvLica','AwfMv3a','C2fUzsa','mhG3yW','ve1Pvva','yM9VBa','C3r5Bgu','AKzws2G','rg1ivLG','ihn0CM8','z2v0Dgu','mhGYma','WPlcI8kmWOJcIq','zciVpG','Bwf4lxC','Bg9Hzhm','y3zzvgy','BcbKAxm','WPdcKCkjWOBcKq','AgvPz2G','Fdr8oxW','BgrUzfy','WOFcLmkrWPxcJW','oImYyta','zwy1o2i','zxLL','CdOXmha','ktSTD2u','mNb4icm','ktTWB2K','t0T4r2C','DcaOC28','BM8GCgW','txfRuNG','wLvXEe8','DgvYiJ4','qKfpDwO','B3rVBK4','AMv3BMi','ufKGve8','q3ncsLO','zgv1t3m','yZOG','BgvYigG','BcXTAw4','BwfUywC','phn0CM8','B3i6iZG','WPdcK8krWPhcIW','tNbhrKy','WORcKSkkWPhcLa','zwqU','r3fRwxm','Ad0ImIi','ztT9','DwLSzci','msiGDMe','yY1IzxO','q291BNq','EffdBxC','r1PTrxu','BxbSyxq','qNDRu0C','lJm2lde','CMfWoYi','ztOXnha','BgnLrvy','Bg9ZztO','AuHmCLC','WOJcKmkvWONcJq','x19WCeW','B2SGzMK','Fdf8mG','jwnBC2e','mxW0Fdy','oJaGmta','EsbHigq','vxbKyxq','WOVcKCknWOBcKW','AwX0zxi','tgTeCey','z1HStg8','zw50tgK','igLUlwy','AMjjDg0','DMjVu0W','r3jgAem','BMC6nha','vLvvBfy','pt09u0e','AwrLE2q','ignVBNm','te9qwwu','yw5KigG','Dc4kcLq','nhWZFdu','ywjSzsa','BguIihm','sw5ZDge','ugXHEwu','s2PTwhK','ueHjExC','Ewf3','ufjsExi','ChbkreG','sLHrrMK','Aw5ZDgu','u3bYAw4','WPlcJmkjWORcKW','s1vsqs0','ig91Dca','DJiTy3m','B25NE2m','zxi7zM8','D24Gvxa','iZHKn2e','ihbHDgm','Dcb3yxm','qwPXqLG','zKLYy1q','oYi+rvm','EdTVDMu','tgf0zvu','zxG7zMW','y29WAwu','ie9o','wunwy3a','mNb4o3a','uLHRr2m','Dg9tDhi','zxi6mdS','yM90Dg8','C28GAxq','AwrLCG','zxHLy0m','lwnOzwm','ywDLCG','Aw50zwO','DgvYzwq','B3Hcuhm','q3jTEMq','nsWYntu','shHpBKK','tK93CfG','zwqGB2y','r3DlBKK','sufZBLO','zwXLy3q','DxfSwhe','qKrerhq','CNmG','C2TPBMC','mtTJB2W','igrHDge','AwzLig8','nsWXndm','zxzLBNq','zvv6sK4','igq9iK0','oMzSzxG','zw1AALe','CNqGihq','rvnqig0','qxnZzw0','mIWUnsK','CMvMzxi','u2nPDM8','C3LZDgu','y2HLy2S','zxH0','zxi7iJ4','zgv2Awm','zdP0CMe','zhKIihm','ign5psi','BNrZoM4','BhrLCJO','DxnLtg8','Dg9YsNO','CMDPBI0','sxPYtvm','z0jKBwm','EsbPBIa','Bwf4','lJKPo2i','y2S7zM8','ig5Vigy','WO7cHSknWOBcIq','zxGTzgK','Bw92zq','r2jXvvK','vM9KtvO','y2uGyM8','s1bVEei','veXwAfy','y1zAvha','Ee5NvLa','DgG6nNa','CMf3ugK','idGWChG','BfvvDKi','CNq7ywW','Aw50','zMykrJG','oM5VBMu','vuTTvuy','yuXIs1u','ztOXmxa','mhW1Fdi','WOBcI8koWORcIq','ufrtzwC','BvrLq0u','Cg9PBNq','A3vnBNy','mhb4ic0','z2v0x3a','C3rYAw4','zxmGAxq','wgDouey','BNrZoMe','AgLKpq','qKnsvMq','BNrLBNq','BwvHBNm','ChzJENG','WO7cLmklWPdcJG','C2STy2e','kdiXlde','ifrOzsa','z2jHkdi','Bc5ZAg8','BguGy3G','DhrLCG','rMfpDhm','EvzIqKK','Ag9Ksw4','oIiIo3a','A3vMufC','WONcJSkgWPxcJa','oM1PBIG','ihbHC3q','oYi+ltW','phnWyw4','A2v5CW','Ec8XlJm','BdPUB24','igvHy2G','BNrPBwu','rgr5veq','Dfjps2C','s3LWz3i','AxvZoJe','AwHTuue','WOVcKCkrWONcKq','A0LNCvm','q01c','r1vtru8','DcHHDxq','WPdcI8knWO3cKW','ksbVCIa','DMD7D2K','Bg9YoNi','D3jPDgu','lcbuyw0','tMTmBwO','lJa0ktS','yuvKvNa','uxDzu1m','shfwrKW','Ahvkte8','A2zsEvC','DhrVBtO','lM1Ulw0','t0zsrfa','Aw1Lsxm','y29Z','zdTWBge','iI8+pc8','WO7cK8ktWOVcIG','ywXPz24','AguGB2W','iNjVDw4','B246zMK','ihLLDa','BMnL','WO/cI8kiWOFcHG','rfPvA2e','DhLWzu4','AwDXzuC','ic4Znxm','tuPLy0S','lde0mYW','sNvTCca','lwvZCc0','z2rHzhu','lMn0B3i','BK5vEfK','D192mG','o21PBI0','zMfJDg8','C2LtyMe','icaYlIa','vNfuz0q','BIbPzNi','lIbozwu','DuLtCuW','uuPbugq','zw50igK','C3bHy2u','DJiTDge','nxWXFdi','v0rWq2S','o29Wywm','qu1HDuW','z2Hjree','zuL0zw0','i2jKytK','Cgv0ywW','Dw50','rxfJq28','Cg1HCge','ywz0zxi','wgzLqNG','y2vUDgu','iMvZCci','BM8Gzw4','r2v0Dgu','C3rLCa','ig9UBhK','C2XPzgu','sKTms0W','y3jLyxq','EgPjtMe','zxiGyM8','v3LSteK','EdTMBgu','A2LUza','WOJcJSkiWOVcKa','BM8Gtw8','Ag9VA3m','C29SDMu','zxrmzwy','lwjVDhq','oJyYDMG','zwn0zwq','D2TwCgC','BgvJDdO','BhvLpsi','DMLLD0i','CMvWBge','lJi4','Chzdqxa','rvbWvuG','DgLHDgu','WO7cJCkjWOVcKW','mZGSmJq','CMf3Aw4','B2XZoJO','DgTLDKG','ywv2zxC','WOBcJ8kvWOBcHW','AxjLuhi','cNbPDgm','lJuGms4','DgHMD1C','v1DwqKW','teTftu0','EMndCwi','zw50o2i','DhK6lJq','rePKq3a','rMTgAwy','tNPpruG','ic8G','WOVcICksWONcIW','D3jHCha','WPhcICktWONcIq','DfPdCKO','C3rLBMu','Dw5PDa','BwuGBM8','ELbqt0K','BMH4z2m','EtOUndu','CI10Ahu','B3CU','Aw5ZDge','B3i6i2y','z2v0x2y','CM9Rzs0','WORcK8kqWOBcJa','wLb5u1G','x19ZywS','zgf0zxm','DMuGBwe','yxblA3y','WPpcJmkrWPhcKW','Bg93oMG','BIbjtLm','yMfHwvK','ohb4o3a','AwDUlxm','zxrsAwC','ig1VDMu','WPtcISksWOFcKG','vernx0C','CZPZDge','mcu7','sNjztgG','Dg9Nz2W','BMPKrfi','ntuSlJa','DKX1A1u','B3rLlMu','DNPVB3q','Dw5Kzwq','yMvHCMK','WOFcJmkgWONcKa','AfDJBei','WOVcLmktWOBcJa','tMziAem','C3fMuue','Awr0AdO','r1nJyxu','CMvZCYa','WPdcH8kgWOJcJG','Bgf5oM4','u3bLzwq','WPpcHSkiWO3cJW','WOZcH8kgWOZcKG','yNjos1i','B3yGB24','zYbTyxi','z3PUB3i','D2vcvfi','AxHLzdS','igfYBwu','psjZDZi','DMLLDYa','WPpcKCkjWOJcJq','zhrOoJm','pgj1Dhq','AwvSze8','Axr5oJe','nsWXmdC','zxDUDw0','D2roqMG','lNnRlxa','BNnPDgK','q09bAfy','ihWG','re5Uzgy','ihnVBgK','z3zvrLq','rgXRDKS','AefkC2S','zgLMzG','Dgv4Dee','B3i6','uMvZB2W','DMC+','Bw9UB3m','CLnWzLG','BMqIihm','suTqqNq','z2v0q28','Ee5tAMK','mcbVzIa','nZq4mZy','uMvZzxq','DenVBg8','B250lwy','qu5Zqwi','sK5NrNq','D2fYBG','WOBcLmkuWO7cJq','re9nq28','qLLWwee','Aw1Lr2e','D2LUzg8','vLDUD2O','yxmSBw8','FdeZFdK','zLfPrvi','CJTZDhi','E29Wywm','CNfiv1K','oJOTD2u','yNL0zxm','zY4G','B25Lige','igzPCNm','CMTqBge','DdOG','zwrnCW','rKHrCNq','WOBcJmkkWOFcIq','t1jTueO','AM9PBG','WPtcJCkhWOFcIG','AgLZiha','BhH3Bgq','C2P4yu4','q0zprve','WPtcH8klWO3cIq','EtPIBg8','twf1y1C','mJGPo30','zwn0Aw4','zw1ZoMm','WOZcHSkpWPhcJW','CvbdD0O','psiXnJa','imk3ihrL','yvnXDe4','igL0ige','zuDNvwm','Dte2','igL0igK','BMCGB24','DwztzNa','CNj7y28','Cg9ZDe0','idi0iJ4','AwrKzw4','nduXmZu0nuL0wgXvtG','r1fOzLC','EhbVCNq','ruXkrKS','WOVcKSklWO/cLq','ysbtA2K','WORcI8knWPtcJG','verirM8','yxjTzwq','vfzJrKW','AwPmr0m','zwqGysa','zhrOoJu','wNvRtwe','idaGyxu','v3HgqLy','EKz3v3m','tKHeC08','yM91BMq','y3qOCYK','rxLxrfu','v3jHCha','lxbHBMu','Aw9U','Ag9VA1a','z1Hjsu8','rwHTr0C','CgfKrw4','Ate2','WOFcK8ktWOFcHW','vxjVCLa','s1fcB3u','uw12sLa','CZOYChG','yLzqBxK','zgvYoJe','zM92igi','te9h','C2STy3q','AgXxug8','ig9U','quLkDLG','BenstuG','CMvKicG','lM1UlwW','CM9Wlwy','WONcH8kpWPlcLq','zgvZy3S','igfUzca','rMXHzW','BvPgDxa','CMrLCI0','WOJcKmkvWO7cLa','WPlcI8kkWOFcJG','D2fYBMK','tg9VA0a','oJnWEdS','EeLit3u','pgnPCMm','yxbWBhK','teLwrsa','qLzkuu8','yNvNyMK','A2v5qxq','CY5Tzw0','BM90zq','DgXL','Exf1Dxm','ihzPzxC','BgX3yxi','ysb0CMe','ywqU','B25JBgK','tu1cDKi','Axy+','u2fRDxi','y3qGzM8','t3zlr0S','owq7Fq','zfDXwwS','DgH2qvm','pgLUChu','sg9VA3m','icbVzMy','BfL5Bey','DMvJmG','CfrwA0i','rvrWyva','BgW+','C2STDMe','mJKWChG','C2STC3C','zvbSDwC','oIjjBNq','vw5Ttvi','tJWVyNu','Aw5Lza','lNnRlxy','AvbLruO','DdPTAw4','oMf1Dg8','s2nuAfm','WPtcI8kgWORcJG','yxnZAwy','CMvWB3i','A255zvK','cLSGif0','ztTTyxi','yLDOA1K','C3bLzwq','y29UDgu','y29MB3i','ywX1zt0','t2fIzey','mJq2ldi','ysbMB3y','q0vmrgW','WPpcI8kmWO7cIq','zw1WDhK','CdPYB3u','icbVyMO','z2fTzvm','ksbZyxq','uxv2sw4','zZOXmha','ktSGBM8','zwn0Aw8','tgDPzeS','ys1ZDW','mNb4o3O','Dhj1zq','v19F','WO3cICkqWPpcIG','lxDLAwC','ys1LC3a','B3b7zgK','wvznEKq','Dcb0Agu','WOVcImktWOJcKq','yKL5z00','zgrPBMC','Aw5N','EvvNtfq','tw9Kq1m','Bw4TDg8','wuvrvw4','rvrduNO','BM93','WORcISklWO/cKG','r2PhquG','B21Mzee','WPhcLCkiWO/cIa','wunWuu0','zxi7D2K','iZjHmgy','mtjWEca','Dez1tuG','nJiWChG','qwngrLq','C3rVCfa','CgDdsLe','zxnWia','AdOZmNa','CwPywuG','r2DtD3K','yJLKo2i','yhbSyxK','rLbty28','yxDtwwu','Dc13zwK','CZPUB24','tffuq28','WOBcLCkvWPhcIq','vePpCuq','wvjeuNC','yxnZtMe','yxjJ','CMvK','BNvTyMu','B2LUDgu','BgCIihm','EdTWywq','B2XVCJO','uhvmq2O','WOZcICkrWPxcKa','lcbUBYa','mNWWFdm','WOVcKmkiWO3cHW','mxWYFdq','WPtcJmkpWO7cIW','kdi0lde','Dxm6oha','CM93CW','tw9KDwW','AwDODdO','rg9mr3O','rLbsrKu','tLbdx0m','zNDK','C2fUCY0','CYb3zxi','idfWEca','CMvUDca','DMLZDwe','ywDHAw4','yxK6zMW','B25ZB2W','WO7cKmkhWOFcKG','BMvUDc4','lxDYyxa','CvnHvKm','iIbMAwW','wgD3yKu','CMvTB3y','zMzovMC','ifvjiIW','AxrODwW','DwKTBw8','ChG7B3a','AgLSzsa','wgfdB20','B2T1shu','A2v5vxm','D0LfrKK','yw5LBca','yNv6DNq','zcb0Agu','B3jRu3K','Bd0Ii2y','wwf4AwC','zw5NDgG','iNrLEhq','DcbZCgu','z3bky3m','DgGGB3i','BuTRwhO','lNnRlwW','zgL2','t2vkzKG','C3nPBMC','WOJcH8ktWOZcLa','C3rYB2S','B2DyqxG','B1P6Cuu','DNDxzuu','AMDWEuW','ruLeBe8','Dc1ZAxO','imk3ia','Cg9YDge','ywLSywi','ve5bENC','suDtrhC','ALHWBLm','mtaSmte','nYWUmty','zxjYB3i','Fdn8nNW','CYbLBMu','DxjYzw4','BurVrui','Dg90ywW','igfJDgK','mdT9','yMngAfO','v2HgEem','yM90CW','uM9du2e','zMXVyxq','ChGGmdS','r2fTzsG','z2LMEq','yxjLige','t1DnqwO','zYdcTYa','WOVcKmknWPxcHG','AMziu1C','ChG7Fq','DeHLAwC','igXPA2u','B3nL','zJzIowq','y2XPzw4','ndySmJm','rLHptuu','WPxcKSkiWOFcKG','C3LUy3m','A2DYB3u','igrPzca','zg93oMK','zuf0rMK','zwz0ic4','u2jhyvG','BMq6CMC','CNHNzNK','reHNu2K','zhmGB24','DLHkzee','WPtcJSkrWO3cLq','uvndwvC','Bwvnyw4','lwv2zw4','BM90ihi','WPdcH8kjWOJcJG','lde1nYW','C2v0qG','nZCSlJq','WONcKCkgWORcKq','q09Zy0u','CMuGy2W','Aw5KzxG','v1jkz0e','AgreBwW','cKLUC2u','sKrHCMG','DfPxveS','sxviD1u','lgnHBgm','ANP6zuu','BKXYAgS','ywXSzwq','quvItgC','rgPQBKO','WOVcICkjWOJcKW','iey3ica','BhDMtuO','y2nxsMC','Aw1L','s2vHreG','B21Tyw4','tevgAeC','A2Hdzwq','DtmY','B3CTEtO','DdO3mda','yw1PBMC','tfjdzgi','tfj2BeO','mYWXmdy','otK7y3u','ru91u00','nsK7Dhi','DgvZDa','ChrgyMG','cMHVB2S','zdPYz2i','tKnRvvG','WPtcImkkWPtcKG','Ew1pr0y','C2STBwq','WOBcJmkoWPtcKa','qxDHA2u','u2vLBK0','CMvMCW','lc40nsK','rhLdu2W','C3CYlwi','BgLUzwm','ytK5o20','CMv0Dxi','uNHHyNi','y3bbBhG','EhHyCfe','otbWEdS','BMfSrNu','yM90q28','yw5JztO','Bw4TC3u','C3bSAxq','wK14wfy','BxmGD2K','CMfUC3a','v2Livwy','A2vKihu','WPxcISkmWO/cLa','DMvYzMW','WO3cKCkoWORcIG','v1bXEKS','EdTIywm','EKrIsxq','CNnVCJO','y1vtAeO','zxHPC3q','lde3nYW','q2HPBgq','Aw5Qzwm','C3CYlxm','whfTBwG','D2fPDgK','zuvSzw0','FdeXFdG','ldi0mIW','BM8Gz3i','yMvNAw4','Dg8Gy2W','t0SGt1y','u1nTD20','pc9ZDhi','yw5KicS','rxLL','wYbHBMq','quL5u3O','icbTzw0','zxr3B3i','ChG7Cge','ELLQyK8','B250zw4','lwL0zw0','Axb0ige','tun1rwe','AwDUlwK','C2v0ida','z2v0rwW','CMvNAxm','C3zNE3C','B25NpG','DwzeAKm','CfLRCKi','ChGGlte','BvHfuNO','zNbZ','s3zRtNC','z3jHyMi','A2z1Bu0','ztTWywq','WOVcJSkoWPhcHG','DMvKpq','rgnXvMC','mxW2Fdm','C3vI','mJbWEca','zNKTy28','DdPUB24','idaGmJq','C2STBge','mhG1oa','rw1WuKO','BgvHCG','ysGYndy','Aw4U','igfWCgW','CcbHBMq','icSG','DwDPBI4','B3rYB2W','mteUnxa','Fdn8mNW','AMzpCwq','CNqP','nduPo2i','svzficG','BNrLCI0','CMfUzg8','DeHLywW','C2v0qxq','yNvPBgq','yM9Yzgu','B2jMsq','CMv7zM8','zMXLEdO','phnTywW','CgL0y2G','ufb5wMS','uMvMDxm','zwnwuuq','D0fYzNi','tMfTzq','CuniAe0','yxzgrMq','x19tquS','Bg93oMe','DxjHtwu','mtC3lc4','igj1zMy','Acbxzwi','iIbTAw4','Awv3igK','psjZywS','AwzPzwq','zxiTC2u','Dg57ywW','WONcKmkhWOBcHW','mJu1ldi','nhb4idK','CgfJAxq','DxDMz1m','yMfJA2C','B3nWywm','C3CYlwy','C3zNpG','ChGPo20','yMfUzc4','ueLirKu','u3rYAw4','DMLbsKm','Dg9YqwW','zMLSDgu','yxjKlxi','C0DHveK','su9rrwG','CNqGEwu','BNnWyxi','BwLLCYa','yM9eC3a','CIiGDhK','AgDzA0C','WOBcHSkmWPtcIW','y2fTia','ihnVigu','zZO0ChG','tMTkwvG','uNvRzxy','AgvHCei','z3nkt3e','C2L0Aw8','ywX7zM8','BM5qzue','q0v2wuO','owm5o20','BMCGzM8','WPhcJ8kiWOBcKq','uNvUDgK','WPpcHSkiWO7cKa','zhvYAw4','EgfIzNC','ys5ZA2K','yxr0zw0','v0PgBfi','ifnxlvC','zxjLzca','WORcJSksWPxcIW','s1nwvMy','yxmGAwq','D2f0y2G','ignOzwm','rNHQEva','iJ54pc8','EKv0zgy','tMTgzwW','we1wreS','nc00lJu','mteZmKzYCMzLAW','Be15zhu','ignVCgK','rJKPpc8','B3qUBw4','t3Hwtvu','ksaTigy','CMvSyxK','mxb4ihm','DLf2Aei','C2STChi','BNq4','WPpcJ8kvWOFcJG','AwXLzcW','DxrVo3O','BwvHBG','v2nABNG','CNmGyxi','DxjHvge','zMLSBa','vhzMDgW','CMeTzxm','zMfRzq','CgvKigi','AMvJDhm','B2zMihq','DhLWzum','ChG7Bwe','lwXPBMu','C3rYB24','o3rVCdO','WO7cLmktWPpcJq','m3b4o2y','DMvhyw0','Bw47Fq','CYbVCNa','Ag1nwfu','B3fYtxe','DgXLCW','DdTIB3i','WONcJCkpWOFcKq','CKXPC3q','BJPJzw4','q0zZvwu','EwzZyxe','iMzVBgq','WOZcJCkvWONcIG','ntK5CNrhtune','BxzPtwm','DxnLCI0','Ec1KAxi','BgLKihi','wwHvEMW','DNHfseq','v2rHEvy','zsbLDMu','C2vYDcK','ywLUE2y','WOFcH8kjWPlcJq','BNrYB2W','B3CGkey','WONcICkoWPlcIq','wwPmExG','q3PIAhy','BwDuwxC','DxjPBMC','zufIBhy','CMvHzca','yxjKE2i','CNnJCMK','r1j3rvC','ru5ept0','BwvUDc0','BeHvD1u','vhbJzg4','u1fdzuq','oI40o30','WOZcICklWPlcKW','zcbKAwe','CNjVCG','i2zMogy','yNvPBhq','EIaOsw4','Eu1XqMi','x19hzw4','DcaWicG','zgfY','BJWVyNu','CMf3qq','igTPBMq','zwqG','yvjls0W','D2H5','iJ5dB3a','ldi1nsW','z2fWoJe','C2STBwi','vMn1wwC','DhbHC3m','y2HOBM0','yvDWr2q','zxfMDxG','DZOWidi','C3rHCNq','CI5KBgW','WOBcH8khWO7cLa','owqPida','tg9Hzgu','icaGia','zYb3Agu','mJHWEdS','qwvbDNm','B206mxa','zMn6EKe','Aw5NoJi','y1PdDwG','y2f0','B3bLBIa','BgvMDa','sgvHCa','B25LoYi','DfbkzgO','veLwrq','qKTKu0i','WONcISktWPdcLq','AMPNz0K','CgvZia','yY0XlJu','ywjLBhS','zevlBui','A1bwAey','B3a6mti','y2fUDMe','DYGWida','rxb1v0K','DMHlwhq','y29TyMe','WOJcJmkhWO7cHW','nxb4o30','DMvYE2y','oYi+u24','u3bsAgO','o2jHy2S','ywnRihq','ruXjBMG','Esb0Exa','WONcJSkvWPxcHW','zgf0yxm','zxiGCMu','igj1Dca','zfH1v3i','B2r1Bgu','qu5sDKi','yxjKlxq','C3aTy3y','owq7y28','vKLwEwK','DdOXnha','EdTMB24','lxDLyMS','Ag9VAW','zhrwANi','yKPVAwW','B2DNzwq','WO3cJmkgWPtcJq','zg1xswm','Durxzuu','BgrZlIa','oMLUC2u','CMDIysG','r3LHCMu','sw5KzxG','C0PNrw4','s3jHzM0','BgW6Aw4','y2GUC3K','C2STCMe','ChGVms4','psjTBI0','ihLLDca','ENbSD2K','WPtcJCkhWPtcJq','Bgu9iMq','CenVBNq','EI1PBMq','CJT3Awq','B206nNa','qKjAr0G','zw5Jzsa','C0zzz2O','rvnqigi','WO7cI8ktWPhcJG','BMvS','qvzSz2i','quzVCKW','tMXZEvK','yNv0Dg8','Bgv4oJe','ktTJB2W','nJaWo20','BMfTzq','DerHDge','o2zVBNq','mtbWEca','u3jUChu','AeHiEgK','BgfZDeu','Cg9Zqxq','BMrVDY4','DxPtDxK','BMD0AcW','DxrVo2i','mtjWEdS','n2e2ntG','mdaWo3u','zM9Sza','tev6zeC','Dc5KBgW','igj5igu','yt0IC3q','lxrPDgW','zwPPuMC','Awq9iNm','ks4G','i2zMnMu','zM92','BMC+','zM5yCNO','CMHjv0C','BgrPBMC','yw5ZzM8','z2H0oJy','mhb4o2y','DfjQrvq','DciGC3q','icaO','yNL0zu8','lM1Ulxm','yxa9iNi','ndmSmtC','Ahq6nZa','ALv2yKq','D2HPDgu','ChG7Agu','m3W4Fdy','ztSTD2u','yw5NBgu','EcXJywW','Axr5ic4','lJCYktS','zt0Iy28','CMfUC2y','AgvHCfu','A09XuKK','mhGXma','ywnLlem','DcbIzwu','icbJyw0','C25HCa','CMvZB2W','ihvUAxq','Dg91y2G','wxnrsgm','yxv0BZS','Bg9mELq','surfige','C3HqANC','zxrL','zhrOoJG','CJPWB2K','ztOXm3a','zvrLzKe','sKXdu0u','lJq1ktS','Bu5Vt24','idrWEca','BIbtruu','y29TBwu','AMTLENi','oJi2ChG','thPvEw4','y3nZveK','ic0GDgG','Bs11AsW','EdTHBgK','ugf0Aa','Dw9OCxu','y2XLyxi','qKHXrgW','B2DVE2q','s3Lgrhq','WOFcH8kmWOBcHG','zMzZzxq','y1Dvtfm','v1PhChe','keLUC2u','B25LoW','EdOYmtq','zM9iDNm','lsbvBMK','EwXLpsi','Cxfbtum','zwfJAge','mhG0ma','y3jwwu4','DuvJzhy','zw51','zenOAwW','vKnHA1C','sgjqthC','B2TLpsi','C3bHBG','BK5LDhC','Ag90','ueLds1a','AvPPAK4','y2fWC3u','C2L6ztO','WORcJmkgWPxcHW','vM9duNC','mda7y28','B2DfBva'];_0x2334=function(){return _0x40f6da;};return _0x2334();}function _0x59a2(_0x1dd86d,_0x13872c){_0x1dd86d=_0x1dd86d-(0x11e6+-0x1*-0x9df+-0x1a3f);var _0x271f09=_0x2334();var _0x57c0a0=_0x271f09[_0x1dd86d];if(_0x59a2['CVMlJD']===undefined){var _0x3fca87=function(_0x2516d2){var _0x205006='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5e8c17='',_0x33d53d='';for(var _0x2af25c=0x2*-0x1b+0x7ea+-0x7b4,_0xe3877d,_0x35d7db,_0x2ed33d=-0xcd7+-0x7a7+0x147e;_0x35d7db=_0x2516d2['charAt'](_0x2ed33d++);~_0x35d7db&&(_0xe3877d=_0x2af25c%(0x26f1+-0x8fe+-0x1def)?_0xe3877d*(-0xa5*-0x27+-0x7c*-0x11+-0x211f)+_0x35d7db:_0x35d7db,_0x2af25c++%(-0x7*-0x2ed+0xb32+0x1*-0x1fa9))?_0x5e8c17+=String['fromCharCode'](-0xe7*-0x17+-0x2b*0x97+-0x5*-0x11f&_0xe3877d>>(-(-0xeca+0x21b+0x39*0x39)*_0x2af25c&-0x9*-0x3cb+0x1*-0x21da+-0x43)):0x336+-0x7e4+-0x2*-0x257){_0x35d7db=_0x205006['indexOf'](_0x35d7db);}for(var _0x234b2e=0x687+0x1412*0x1+-0x1a99,_0x52cf29=_0x5e8c17['length'];_0x234b2e<_0x52cf29;_0x234b2e++){_0x33d53d+='%'+('00'+_0x5e8c17['charCodeAt'](_0x234b2e)['toString'](0x14f4+0x874+-0x9c8*0x3))['slice'](-(0x2*-0xa91+0x215a+-0x61b*0x2));}return decodeURIComponent(_0x33d53d);};_0x59a2['fjBvHM']=_0x3fca87,_0x59a2['ZCWGRH']={},_0x59a2['CVMlJD']=!![];}var _0x4d40ac=_0x271f09[0x18be+-0x25*0xc7+0x405],_0x3058d9=_0x1dd86d+_0x4d40ac,_0x230e27=_0x59a2['ZCWGRH'][_0x3058d9];return!_0x230e27?(_0x57c0a0=_0x59a2['fjBvHM'](_0x57c0a0),_0x59a2['ZCWGRH'][_0x3058d9]=_0x57c0a0):_0x57c0a0=_0x230e27,_0x57c0a0;}(function(_0x385bcf,_0x22aa10){var _0xd5a889=_0x59a2,_0xdceee2=_0x385bcf();while(!![]){try{var _0x3f4922=-parseInt(_0xd5a889(0xbbf))/(0x5*-0x650+-0x2*-0xbad+-0x837*-0x1)*(parseInt(_0xd5a889(0xb90))/(-0x5*-0x1c9+0x4*-0x481+0x11*0x89))+parseInt(_0xd5a889(0x495))/(0x1710+-0x359*0x1+0x4ed*-0x4)*(parseInt(_0xd5a889(0x6af))/(0x968+-0x254a+0x1be6*0x1))+-parseInt(_0xd5a889(0x973))/(0x1*-0xb56+0x3*-0x8b1+0x256e)+-parseInt(_0xd5a889(0x6da))/(-0x1b29+0xf89*-0x2+-0x679*-0x9)*(-parseInt(_0xd5a889(0x709))/(-0x12a3*0x1+-0x1*-0x2c2+0x1*0xfe8))+-parseInt(_0xd5a889(0x3b1))/(0x332*-0x4+-0x250d*0x1+-0xb9*-0x45)+-parseInt(_0xd5a889(0xdb8))/(0x207d+0x11*-0x55+-0x1acf)*(-parseInt(_0xd5a889(0x35d))/(0x9c7*0x3+-0x10db+-0x4*0x31c))+parseInt(_0xd5a889(0xd2d))/(-0x37*0x81+0x2b3+-0x503*-0x5);if(_0x3f4922===_0x22aa10)break;else _0xdceee2['push'](_0xdceee2['shift']());}catch(_0x1e6eca){_0xdceee2['push'](_0xdceee2['shift']());}}}(_0x2334,0x9e80+0x4f769+-0x2*-0x1d52f),((()=>{'use strict';var _0x3f0b99=_0x59a2,_0x2fd94f={'DNaEv':function(_0x5d8cf0,_0x21b34e){return _0x5d8cf0!==_0x21b34e;},'uezYk':function(_0x74b27e,_0x39722e){return _0x74b27e+_0x39722e;},'nultU':'both\x20'+'bound'+'ed','MaucW':_0x3f0b99(0x306)+_0x3f0b99(0x8b3)+_0x3f0b99(0x905),'ufDjC':_0x3f0b99(0xbf0)+_0x3f0b99(0x3e7),'sbbuI':_0x3f0b99(0x258),'RzoYU':_0x3f0b99(0xe76),'KrsZN':_0x3f0b99(0xd21),'OxVMU':_0x3f0b99(0x566)+_0x3f0b99(0x9f3),'kOqRI':function(_0x2b17c8,_0x44db51){return _0x2b17c8(_0x44db51);},'UrorP':'trans'+'paren'+'t','WhFxC':function(_0x31c83e,_0xddd9a0){return _0x31c83e===_0xddd9a0;},'mTeCE':'i32','mXERz':'obfI','LYHZg':function(_0x3808cd,_0x39c089){return _0x3808cd+_0x39c089;},'jEEBd':_0x3f0b99(0x2bb),'WPLjP':'sakur'+_0x3f0b99(0x2e6)+_0x3f0b99(0x89b)+'b','YhUzl':function(_0xfaa99f,_0x5bbac0){return _0xfaa99f&&_0x5bbac0;},'tZWTK':'div','QzFIE':'posit'+'ion:f'+'ixed;'+_0x3f0b99(0x5a1)+_0x3f0b99(0xc64)+'top:1'+_0x3f0b99(0x9f4)+_0x3f0b99(0x1e1)+'x:214'+'74829'+'99;cu'+_0x3f0b99(0xaef)+_0x3f0b99(0x83a)+'er;us'+'er-se'+_0x3f0b99(0x8c0)+'none;','tLlKQ':function(_0x547c7f,_0x340455){return _0x547c7f+_0x340455;},'ebdzw':_0x3f0b99(0x4b6)+'resol'+'ved\x20','ODlWZ':_0x3f0b99(0x3de)+_0x3f0b99(0x325)+'o\x20a\x20t'+_0x3f0b99(0x7c6)+_0x3f0b99(0xaa9)+'\x20but\x20'+_0x3f0b99(0x4d1)+_0x3f0b99(0x387)+_0x3f0b99(0x5bf)+'he\x20si'+'gnatu'+_0x3f0b99(0x576),'tPJdj':_0x3f0b99(0x566)+'a-sw-'+'v2','XtGQI':_0x3f0b99(0x76c),'zXTna':'sakur'+'a-sw-'+_0x3f0b99(0x7d5)+'s','EPSAq':_0x3f0b99(0x761),'Oedms':'close','PGmBv':_0x3f0b99(0x65a),'ENSqa':'min(5'+'2vw,6'+'20px)','EOkZa':'auto','NkLmj':'vDEmU','ySliT':_0x3f0b99(0x9e0),'NOwpX':function(_0x448667,_0xf0f1ea){return _0x448667(_0xf0f1ea);},'NpGFF':'0|1|3'+'|4|2','HDTgf':_0x3f0b99(0x911)+'\x20off','EhmGG':function(_0x474390){return _0x474390();},'xmWLj':function(_0x2acebe,_0xeebb80){return _0x2acebe*_0xeebb80;},'PVCMm':function(_0x317071,_0x461970){return _0x317071/_0x461970;},'LwWOc':function(_0x413992,_0x517463){return _0x413992*_0x517463;},'HBQZC':function(_0xcba1bc,_0x4a6b18){return _0xcba1bc+_0x4a6b18;},'YCpQM':_0x3f0b99(0x4af),'emZjQ':function(_0x144143,_0x1dc29f){return _0x144143+_0x1dc29f;},'tHlNt':function(_0x72529a,_0x3a8c83){return _0x72529a(_0x3a8c83);},'HdrhP':'no\x20re'+'port\x20'+'after'+_0x3f0b99(0x586)+_0x3f0b99(0x5c8)+_0x3f0b99(0x8e2)+'t\x20inj'+_0x3f0b99(0x8be)+'?','jcFXg':function(_0x5cd2b5,_0x49b908){return _0x5cd2b5+_0x49b908;},'ORwvK':'This\x20'+_0x3f0b99(0x446)+'\x20prov'+_0x3f0b99(0x3af)+'e\x20use'+_0x3f0b99(0xbd5)+_0x3f0b99(0x55d)+'\x20inst'+_0x3f0b99(0xab3)+'\x20and\x20'+_0x3f0b99(0x5ae)+_0x3f0b99(0x96d)+_0x3f0b99(0x45c)+'porta'+'l,\x0a','WylLI':_0x3f0b99(0xd25)+_0x3f0b99(0xa55)+_0x3f0b99(0x60e)+'\x20page'+'\x20once'+_0x3f0b99(0x9a3)+_0x3f0b99(0xb88)+'\x20this'+_0x3f0b99(0x487)+'l\x20aga'+_0x3f0b99(0xb2a),'gaYei':'the\x20l'+'obby\x20'+'looks'+_0x3f0b99(0xa8a)+_0x3f0b99(0x649)+_0x3f0b99(0x5cb)+_0x3f0b99(0x391)+_0x3f0b99(0x8f4)+_0x3f0b99(0xc99)+_0x3f0b99(0x46b)+'\x20roun'+_0x3f0b99(0x225)+_0x3f0b99(0x9fc)+'\x20menu'+'.','lHUwU':'rgba('+'255,1'+'43,17'+'7,.35'+')','MJLax':'hooks'+_0x3f0b99(0x91a)+_0x3f0b99(0x463),'kmEos':_0x3f0b99(0xda8),'oozFl':'pUprj','kREbV':_0x3f0b99(0xa0d)+'1b','hHHxi':function(_0x4d011b,_0x261fae){return _0x4d011b+_0x261fae;},'QSWym':_0x3f0b99(0xe0d)+'ion:f'+_0x3f0b99(0x919)+'left:'+_0x3f0b99(0xc64)+'top:1'+_0x3f0b99(0x9f4)+_0x3f0b99(0x1e1)+'x:214'+'74830'+_0x3f0b99(0x6d6)+_0x3f0b99(0x34f)+_0x3f0b99(0x497)+_0x3f0b99(0x684)+'w,620'+_0x3f0b99(0xb5d)+'ax-he'+'ight:'+'78vh;','OabdF':_0x3f0b99(0xe6d)+_0x3f0b99(0x452)+'1.5\x20u'+'i-mon'+_0x3f0b99(0xb5a)+_0x3f0b99(0x21c)+'solas'+_0x3f0b99(0x2d7)+_0x3f0b99(0x89a)+';box-'+_0x3f0b99(0x6b8)+_0x3f0b99(0xbf6)+'0px\x205'+_0x3f0b99(0x83c)+_0x3f0b99(0xb21)+'#000;','bYUJo':function(_0x2f76ab,_0x471671){return _0x2f76ab+_0x471671;},'uGFGq':function(_0x4eaea4,_0x49a764){return _0x4eaea4+_0x49a764;},'loLzT':function(_0x55ecda,_0x51ed81){return _0x55ecda+_0x51ed81;},'zYjbO':function(_0x25c8d7,_0x5b01c7){return _0x25c8d7+_0x5b01c7;},'iQZhg':function(_0x504783,_0x85905d){return _0x504783+_0x85905d;},'rqfwI':_0x3f0b99(0x4e3)+'yle=\x22'+'color'+':','DZUka':'<span'+'\x20id=\x22'+_0x3f0b99(0xad7)+_0x3f0b99(0x79d)+'\x20styl'+_0x3f0b99(0xc8a)+_0x3f0b99(0xd2b)+_0x3f0b99(0xc65)+'6;fon'+'t-siz'+_0x3f0b99(0x835)+_0x3f0b99(0xa28)+_0x3f0b99(0x358)+_0x3f0b99(0x201)+'px;bo'+_0x3f0b99(0x693)+_0x3f0b99(0xb98)+_0x3f0b99(0x572)+_0x3f0b99(0xc39)+_0x3f0b99(0xdce)+_0x3f0b99(0xc7f)+_0x3f0b99(0x4eb)+');bor'+_0x3f0b99(0x263)+_0x3f0b99(0xdd3)+_0x3f0b99(0xd44)+'x;\x22>v'+'?</sp'+'an>','whvtq':_0x3f0b99(0x91f)+'on\x20id'+_0x3f0b99(0x91b)+'-copy'+'\x22\x20sty'+'le=\x22d'+_0x3f0b99(0x5b2)+'y:non'+_0x3f0b99(0x9de)+_0x3f0b99(0x5d3)+'eft:a'+_0x3f0b99(0xc63)+'ackgr'+'ound:','EuVGA':';bord'+_0x3f0b99(0x7e8)+'color'+_0x3f0b99(0x77d)+_0x3f0b99(0x5f1)+_0x3f0b99(0xdae)+'-radi'+_0x3f0b99(0x349)+'x;pad'+_0x3f0b99(0x358)+_0x3f0b99(0xdef)+_0x3f0b99(0xc78)+_0x3f0b99(0x1ee)+_0x3f0b99(0x569)+_0x3f0b99(0xdd1)+_0x3f0b99(0x188)+'r:poi'+_0x3f0b99(0x597)+_0x3f0b99(0xbed)+_0x3f0b99(0x2ad)+_0x3f0b99(0x9d2)+_0x3f0b99(0x4ba),'oZzqE':_0x3f0b99(0x91f)+_0x3f0b99(0x1ca)+_0x3f0b99(0x91b)+'-x\x22\x20s'+_0x3f0b99(0xcee)+'\x22back'+_0x3f0b99(0x32a)+'d:tra'+'nspar'+_0x3f0b99(0x8d6)+'order'+':1px\x20'+'solid'+'\x20rgba'+_0x3f0b99(0xd00)+_0x3f0b99(0x527)+'77,.4'+');col'+_0x3f0b99(0x8e9)+_0x3f0b99(0x2d9)+_0x3f0b99(0xd79)+'er-ra'+_0x3f0b99(0x670)+_0x3f0b99(0xd76)+_0x3f0b99(0x59f)+_0x3f0b99(0xb70)+_0x3f0b99(0xdb1)+'curso'+_0x3f0b99(0xc9d)+_0x3f0b99(0x597)+_0x3f0b99(0xb8b)+'butto'+'n>','brNKR':_0x3f0b99(0x91f)+'on\x20id'+_0x3f0b99(0x91b)+'-snap'+_0x3f0b99(0xd71)+_0x3f0b99(0x6d0)+_0x3f0b99(0x2c8)+'ound:'+'trans'+_0x3f0b99(0x203)+_0x3f0b99(0xbb7)+'der:1'+_0x3f0b99(0x3fb)+_0x3f0b99(0xbc3)+_0x3f0b99(0x84b)+_0x3f0b99(0x596)+'3,177'+_0x3f0b99(0x5b4)+_0x3f0b99(0x621)+':#f7e'+'ef5;b'+'order'+_0x3f0b99(0x74e)+'us:7p'+_0x3f0b99(0xa28)+'ding:'+_0x3f0b99(0xb56)+'px;cu'+_0x3f0b99(0xaef)+'point'+_0x3f0b99(0x810)+_0x3f0b99(0x335)+'hot\x20('+_0x3f0b99(0xb93)+_0x3f0b99(0xc54)+'n>','qQvTD':'max-h'+'eight'+_0x3f0b99(0x8bd)+_0x3f0b99(0xdcc)+_0x3f0b99(0x333)+_0x3f0b99(0xb67)+_0x3f0b99(0x7c4)+_0x3f0b99(0x95a)+_0x3f0b99(0xa53)+'updat'+_0x3f0b99(0x83f)+'self\x20'+_0x3f0b99(0x1da)+'the\x20g'+'ame\x20f'+_0x3f0b99(0x75e)+_0x3f0b99(0x775)+_0x3f0b99(0x412)+_0x3f0b99(0x7c1)+'ole\x20n'+_0x3f0b99(0x3dc)+'.\x0a\x0aIf'+_0x3f0b99(0x27b)+'tays\x20'+_0x3f0b99(0x9e9)+_0x3f0b99(0x86d)+_0x3f0b99(0x594)+'nkey\x20'+_0x3f0b99(0x675)+_0x3f0b99(0x516)+_0x3f0b99(0x962)+'g\x20int'+_0x3f0b99(0x2ac)+'\x20cros'+_0x3f0b99(0xd06)+_0x3f0b99(0xd68)+_0x3f0b99(0x4b3)+'rame.'+_0x3f0b99(0x416)+'>','qONNf':'#sw2-'+'statu'+'s','JNgFt':_0x3f0b99(0x28c)+_0x3f0b99(0xb3a),'MeMcL':_0x3f0b99(0x28c)+'out','MCmWb':_0x3f0b99(0x28c)+_0x3f0b99(0x4af),'JDarh':_0x3f0b99(0x28c)+'x','CSYNw':_0x3f0b99(0x28c)+_0x3f0b99(0x8ff)+'e','nhxgc':_0x3f0b99(0x28c)+_0x3f0b99(0xc92),'bpkJO':_0x3f0b99(0x28c)+'facto'+_0x3f0b99(0x397)+'l','UNvcq':function(_0x3b0109,_0x4e244a,_0x35cbdf){return _0x3b0109(_0x4e244a,_0x35cbdf);},'lWaKH':function(_0x5a6a1c,_0x5b2375){return _0x5a6a1c+_0x5b2375;},'wAxyf':function(_0x1b05cb,_0x452cca){return _0x1b05cb/_0x452cca;},'DdyTD':'\x20\x20\x20co'+'ntext'+'\x20','kAkyK':_0x3f0b99(0x40a),'uEcdv':function(_0xbc124f,_0x3795f6){return _0xbc124f+_0x3795f6;},'SbGaX':function(_0x3a741a,_0x281fbf){return _0x3a741a+_0x281fbf;},'yfsaq':_0x3f0b99(0x8b9)+_0x3f0b99(0xbfc),'XYiTq':_0x3f0b99(0x2a7)+'ooks\x20'+_0x3f0b99(0x1cc)+'on\x20th'+'e\x20gam'+'e\x27s\x20o'+_0x3f0b99(0x7d8)+'date('+_0x3f0b99(0x9f0)+'thing'+'\x20capt'+'ured\x20'+_0x3f0b99(0x845),'uwfgS':function(_0x4403b0,_0x81102f){return _0x4403b0<_0x81102f;},'sEpdu':function(_0x27242c,_0x23c74e){return _0x27242c+_0x23c74e;},'KMpHo':_0x3f0b99(0x734),'IGSDw':function(_0x5e07df,_0x288fae){return _0x5e07df<_0x288fae;},'KLpXG':function(_0x2c3b19,_0x52ab4f){return _0x2c3b19<_0x52ab4f;},'VSdGn':_0x3f0b99(0xa25)+'r','aLbKU':function(_0x4499b9,_0x315ff3){return _0x4499b9*_0x315ff3;},'MNGRq':function(_0x567952,_0x45f6da){return _0x567952+_0x45f6da;},'iHLrW':function(_0x5cd9fe,_0x1a095c){return _0x5cd9fe+_0x1a095c;},'mKkXz':_0x3f0b99(0x9a9)+'ngs','nEHDL':function(_0x462c56){return _0x462c56();},'AcFFT':_0x3f0b99(0x9db)+'t','ljbeN':'qSPGL','DsOQh':_0x3f0b99(0x7af)+'kura]'+_0x3f0b99(0x487)+'l\x20upd'+'ate\x20f'+'ailed','cssTI':function(_0x3c47b3,_0xaa99f6){return _0x3c47b3!==_0xaa99f6;},'AForL':function(_0x56abe1,_0x3ca53f){return _0x56abe1===_0x3ca53f;},'MniZV':function(_0x9fdf0,_0x1ad0c4){return _0x9fdf0<_0x1ad0c4;},'fnXrz':'whLvA','XSRsk':function(_0x32db9f,_0x7ca27a){return _0x32db9f!==_0x7ca27a;},'PJivm':_0x3f0b99(0x23d),'MhjSV':function(_0xe52a1c,_0x2ea4fe,_0x5e46ca){return _0xe52a1c(_0x2ea4fe,_0x5e46ca);},'EqcCo':_0x3f0b99(0xb43),'hRKDt':'funct'+_0x3f0b99(0x98a),'GZmEu':function(_0x104084,_0x3ad0ef){return _0x104084-_0x3ad0ef;},'IOQEh':'ANOTH'+_0x3f0b99(0x73d)+_0x3f0b99(0xe72)+_0x3f0b99(0x78d)+_0x3f0b99(0xafe)+'ER\x20wi'+_0x3f0b99(0xc60)+_0x3f0b99(0x518)+_0x3f0b99(0x4e6)+_0x3f0b99(0xdbf)+_0x3f0b99(0x84a)+_0x3f0b99(0xb7c)+'me\x20we'+'\x20arme'+'d\x20was'+'\x20','HzpgB':'wZVWU','xkMsO':'rvDqz','RANPB':'eVoul','uDWeE':'KhZXN','dmWIc':function(_0x22e605,_0x2be595){return _0x22e605===_0x2be595;},'inRYq':_0x3f0b99(0xc58),'sBSzI':'insta'+'ntiat'+'e','IgPTK':_0x3f0b99(0x8e8)+_0x3f0b99(0xd20)+'eStre'+_0x3f0b99(0xac2),'ZfFXq':_0x3f0b99(0xb7c)+_0x3f0b99(0x390)+'eateP'+'lugin'+'\x20unav'+_0x3f0b99(0xa6d)+'le','wxPQp':function(_0x9bc3bc,_0x40f631){return _0x9bc3bc+_0x40f631;},'NCkUX':function(_0x4d45af,_0x4a8a49){return _0x4d45af|_0x4a8a49;},'gOTvp':_0x3f0b99(0x4f1)+_0x3f0b99(0x194)+'4','LQTCo':function(_0x365935,_0x5c71bf){return _0x365935===_0x5c71bf;},'MNfiT':_0x3f0b99(0xc26),'hAJsk':function(_0x3a944f,_0x18eb41){return _0x3a944f===_0x18eb41;},'PTSeg':_0x3f0b99(0x52e)+'n._ru'+'ntime'+_0x3f0b99(0x756)+'lveGa'+_0x3f0b99(0x23c),'Xcwgh':'crUfC','UEPOa':_0x3f0b99(0x712),'FkFif':'QOjRZ','UZuIE':_0x3f0b99(0xe5a)+_0x3f0b99(0x651)+_0x3f0b99(0x55f)+'ng','boDsp':function(_0x16854c,_0x14b6f2){return _0x16854c+_0x14b6f2;},'cpAlx':'windo'+'w.','LVvaQ':'.Modu'+'le','TMiUP':'insta'+_0x3f0b99(0xd20)+'e().e'+_0x3f0b99(0x975)+'s.mem'+_0x3f0b99(0xd3a),'mNoOn':_0x3f0b99(0x877),'foMSM':_0x3f0b99(0x911)+'\x20ON','bZFhl':_0x3f0b99(0xd1f),'bYDeh':'span','WeEKQ':_0x3f0b99(0x229)+'APU8\x20'+_0x3f0b99(0xcbb)+_0x3f0b99(0x690)+_0x3f0b99(0x3e0)+_0x3f0b99(0x3cf)+'\x20reac'+_0x3f0b99(0xd0b)+_0x3f0b99(0x307)+'Runti'+'me.re'+_0x3f0b99(0x8ba)+_0x3f0b99(0xa81)+')\x20or\x20'+'any\x20w'+'indow'+_0x3f0b99(0xdec)+'al','IibSD':_0x3f0b99(0x26d),'vTfqq':function(_0x410e96,_0x44c8b9){return _0x410e96!==_0x44c8b9;},'qixZn':'ohuEO','ZukMa':_0x3f0b99(0xe4d),'PdKTV':'u16','AeAvs':_0x3f0b99(0xabf),'eaffj':'f32','ituuk':function(_0x152a63,_0xe4aa19){return _0x152a63(_0xe4aa19);},'suSFM':_0x3f0b99(0xab4),'GjGAH':'i16','QJAPd':function(_0x49073e,_0x4738a1){return _0x49073e===_0x4738a1;},'nKloU':_0x3f0b99(0xb8d),'zzpEL':function(_0x248aff,_0x4ece8f){return _0x248aff<_0x4ece8f;},'iwpmm':function(_0x108b44){return _0x108b44();},'BeUEz':function(_0x5baac2,_0x1a8498){return _0x5baac2>_0x1a8498;},'EpuWI':function(_0x534c09,_0x661b91){return _0x534c09+_0x661b91;},'BKCUn':_0x3f0b99(0x856)+_0x3f0b99(0x753)+_0x3f0b99(0x6f0)+'0x','tKgSH':function(_0x42fe81,_0x456772){return _0x42fe81===_0x456772;},'qPKGx':'QThih','PHIyw':function(_0x41a5c7,_0x3ce5eb){return _0x41a5c7===_0x3ce5eb;},'eZCAV':function(_0x23c7cb,_0x2753d8){return _0x23c7cb|_0x2753d8;},'xVIZQ':function(_0x59a099,_0x58b756){return _0x59a099&_0x58b756;},'mlCIk':'UeeDA','JKLKL':'obfF','AWkBe':function(_0x29b7f7,_0x533e26){return _0x29b7f7|_0x533e26;},'VQLZe':function(_0xb47fb8,_0x3e87a8){return _0xb47fb8^_0x3e87a8;},'iZijN':function(_0x4933ec,_0x6ce509,_0x5601e0){return _0x4933ec(_0x6ce509,_0x5601e0);},'UUyWu':function(_0x59eae0,_0x36d448){return _0x59eae0+_0x36d448;},'BOQSs':function(_0x9f06e0,_0x468bdc){return _0x9f06e0+_0x468bdc;},'QmaIX':function(_0x15fcb9,_0x3c4928){return _0x15fcb9+_0x3c4928;},'ErMof':function(_0x469f51,_0x4cbddd,_0x5e9848){return _0x469f51(_0x4cbddd,_0x5e9848);},'ScZNY':function(_0x2ca075,_0x52f078){return _0x2ca075+_0x52f078;},'qjXYH':function(_0x25f1eb,_0x2873ea,_0x4b9707){return _0x25f1eb(_0x2873ea,_0x4b9707);},'AIJvX':function(_0x49f8b2,_0x1ddced){return _0x49f8b2+_0x1ddced;},'hGHJC':function(_0x3d7b7e,_0x44d30e){return _0x3d7b7e+_0x44d30e;},'ZijEG':function(_0x14c326,_0x26633e){return _0x14c326&_0x26633e;},'fQiER':function(_0x12039f,_0x1abd49){return _0x12039f!==_0x1abd49;},'xxRAU':_0x3f0b99(0xbf1),'JPyMT':function(_0x3ef752,_0x3806bf){return _0x3ef752+_0x3806bf;},'vkOVC':function(_0x37eeab,_0x245d5f){return _0x37eeab===_0x245d5f;},'rkPNl':function(_0x2c8973,_0x215759){return _0x2c8973(_0x215759);},'Tvftl':function(_0xf2a815,_0x22ed63){return _0xf2a815===_0x22ed63;},'LEvnG':'plugi'+_0x3f0b99(0x25e)+'ntime'+'._gam'+'e','xHnnW':function(_0x5dc784,_0x1a69d2){return _0x5dc784+_0x1a69d2;},'txTZR':_0x3f0b99(0x3ed)+_0x3f0b99(0x7ad)+_0x3f0b99(0x30d)+'t\x20','LyLzU':'ms\x20wi'+_0x3f0b99(0xa5d)+_0x3f0b99(0xe5d)+_0x3f0b99(0x75a)+'=','NrLua':_0x3f0b99(0x4bf)+_0x3f0b99(0x45c)+_0x3f0b99(0x80b)+_0x3f0b99(0xc4c)+_0x3f0b99(0xaf1)+'ed\x20th'+'en\x20an'+_0x3f0b99(0x3b5)+_0x3f0b99(0xaa1)+_0x3f0b99(0xcbe)+'ble\x20n'+_0x3f0b99(0x8e7),'GAixK':_0x3f0b99(0xc6f),'RvcTa':_0x3f0b99(0xdc2)+'reads'+'\x20stay'+'\x20bloc'+_0x3f0b99(0xae8)+_0x3f0b99(0xcda)+_0x3f0b99(0x20b)+_0x3f0b99(0x18b)+'ect\x20w'+_0x3f0b99(0x5bd)+_0x3f0b99(0xc27)+_0x3f0b99(0x546)+'U8\x20is'+_0x3f0b99(0xdd6)+_0x3f0b99(0xd0b)+'.','dRZyg':_0x3f0b99(0xdb7),'ksgtF':function(_0x3cad21,_0x438ada){return _0x3cad21<_0x438ada;},'zBiWB':function(_0x3a7241,_0x356bc9,_0x77b7,_0x597c86){return _0x3a7241(_0x356bc9,_0x77b7,_0x597c86);},'vXpQV':function(_0x4e4d75,_0x3ca190){return _0x4e4d75!==_0x3ca190;},'jNnEE':function(_0x4d87a8,_0x193a33){return _0x4d87a8<_0x193a33;},'wkVpg':_0x3f0b99(0x57b),'Nrfly':function(_0x4b6308,_0xac6269){return _0x4b6308>_0xac6269;},'Rukev':_0x3f0b99(0x514),'DcqVg':function(_0x377420,_0x3c6b00){return _0x377420<_0x3c6b00;},'gmnYz':_0x3f0b99(0xa4f),'nYwLO':function(_0x188e3f,_0x5b29a3){return _0x188e3f===_0x5b29a3;},'aSqtN':function(_0x58b7f8,_0x37c3c7){return _0x58b7f8*_0x37c3c7;},'NlsyY':'OIiMZ','Rgqhp':function(_0xdf1cbf,_0x770a6){return _0xdf1cbf-_0x770a6;},'GZqlo':'bhNiZ','ekSmT':function(_0x85459d,_0x5b562c){return _0x85459d===_0x5b562c;},'xzZwA':function(_0x14ec51,_0x1c78ed){return _0x14ec51-_0x1c78ed;},'OHzHH':_0x3f0b99(0x5bb),'YvyFT':_0x3f0b99(0x7b3)+'e','crVYN':function(_0x1c8f63,_0x2cc12d){return _0x1c8f63+_0x2cc12d;},'gfKvP':function(_0x219a59,_0x130851){return _0x219a59(_0x130851);},'uhfEL':function(_0x4dd6b6,_0x28674a){return _0x4dd6b6>_0x28674a;},'eVPRK':function(_0x3ec162,_0x27325f){return _0x3ec162===_0x27325f;},'gdadu':'yzXRr','HfYYn':function(_0x541914,_0x28d38b){return _0x541914+_0x28d38b;},'gUNgi':'get','weBTR':function(_0x172990,_0xd34aec){return _0x172990===_0xd34aec;},'COscE':_0x3f0b99(0xa7f),'YCVcp':_0x3f0b99(0x46c),'WEoPf':function(_0xbf79d5,_0x2ef868){return _0xbf79d5(_0x2ef868);},'eqfux':function(_0x5ebef3,_0x426dd5){return _0x5ebef3+_0x426dd5;},'sizJC':function(_0x589ad0,_0x26bbc0){return _0x589ad0-_0x26bbc0;},'GCZJN':'mYIWC','PjHOx':'Mouse'+'Look','TCHRu':_0x3f0b99(0x934),'veAnV':'ckrlR','CvXqD':function(_0x227d4e,_0x3a203c){return _0x227d4e+_0x3a203c;},'uyahe':function(_0x1444e1,_0x3c44bb,_0x4709ab){return _0x1444e1(_0x3c44bb,_0x4709ab);},'swdYS':function(_0x197f70,_0x5205a6){return _0x197f70<=_0x5205a6;},'BYVNq':'a,b','QiGif':'b,a','rhIWG':function(_0x37be61,_0x5ee826){return _0x37be61!==_0x5ee826;},'gYIyX':'dmPSq','mnvFR':_0x3f0b99(0xa9e),'iRlpD':function(_0x43dcea,_0x3e53a4){return _0x43dcea||_0x3e53a4;},'VIVyi':function(_0x5e2b37,_0xe91504){return _0x5e2b37<_0xe91504;},'eqMMo':function(_0x4c4bb5,_0x57c0ab){return _0x4c4bb5*_0x57c0ab;},'WTPAV':function(_0x3e9f98,_0x444f1d){return _0x3e9f98*_0x444f1d;},'JygTl':function(_0xb8324d,_0x5c9620){return _0xb8324d(_0x5c9620);},'vxEHD':function(_0x799c05,_0x29d19d){return _0x799c05+_0x29d19d;},'yMqBb':function(_0x25cd10,_0x234398){return _0x25cd10+_0x234398;},'SGubm':function(_0x26deb3,_0x4cf1a7,_0x452cd5,_0x34f738){return _0x26deb3(_0x4cf1a7,_0x452cd5,_0x34f738);},'gBdmc':function(_0x334e0a){return _0x334e0a();},'QylMh':function(_0x126b67,_0x37aa34,_0x509627){return _0x126b67(_0x37aa34,_0x509627);},'dWiYB':function(_0x229881,_0x74921b){return _0x229881*_0x74921b;},'kLANT':function(_0x5b9a93,_0x52609b){return _0x5b9a93<_0x52609b;},'COgqo':function(_0xa9f154,_0x210aea){return _0xa9f154===_0x210aea;},'hhSsG':function(_0x6b33d5,_0x5448ff,_0x3eefef){return _0x6b33d5(_0x5448ff,_0x3eefef);},'kfumM':_0x3f0b99(0x287)+'hScri'+'pt','OQVGJ':function(_0x182f32,_0x3a55f7,_0x478ba0){return _0x182f32(_0x3a55f7,_0x478ba0);},'WWVBL':'FPSco'+_0x3f0b99(0xbcb)+'ler','pYkrB':function(_0x36907c,_0x4dd244){return _0x36907c===_0x4dd244;},'YqlBD':function(_0xd43856,_0x343325){return _0xd43856 in _0x343325;},'NLkrX':_0x3f0b99(0x641),'lYylF':function(_0x2d01a0,_0xb3984e){return _0x2d01a0+_0xb3984e;},'Czbhv':function(_0x240651,_0x5739af){return _0x240651>>>_0x5739af;},'DNmOT':function(_0x4e64b4,_0x527e48){return _0x4e64b4+_0x527e48;},'rwBQj':function(_0x42e2ed,_0x212757){return _0x42e2ed+_0x212757;},'lwjgN':'isLoc'+'al\x20on'+_0x3f0b99(0x85c)+_0x3f0b99(0x6aa)+_0x3f0b99(0x81c)+_0x3f0b99(0xa19)+'ers`.','PpqtU':'xsTdi','AUZxM':function(_0x402f5a,_0x36b099){return _0x402f5a<_0x36b099;},'YsLXV':function(_0x442728,_0x532b6a){return _0x442728<_0x532b6a;},'jerBC':_0x3f0b99(0x288),'vdJQY':_0x3f0b99(0xa45),'jTnqk':function(_0x76665b,_0x2bc9a0){return _0x76665b===_0x2bc9a0;},'DxEzF':'obf','BDVEN':function(_0x1fbd4b,_0x10ca67){return _0x1fbd4b===_0x10ca67;},'jUvbD':_0x3f0b99(0xc3d),'kSmzo':_0x3f0b99(0x8e3),'cVYgj':_0x3f0b99(0xb99),'jlbsY':function(_0x423912,_0x205d4f){return _0x423912+_0x205d4f;},'pNEem':_0x3f0b99(0x842),'GPEiP':_0x3f0b99(0x423)+'=','eTefA':_0x3f0b99(0x547),'GLgZk':_0x3f0b99(0x5d9)+_0x3f0b99(0xbe5)+'int-w'+'idth)','jwTPl':_0x3f0b99(0xd52),'HFfkU':function(_0x5e0929,_0x3b5dda){return _0x5e0929<_0x3b5dda;},'jxHKs':function(_0x21b672,_0xe5163d){return _0x21b672!==_0xe5163d;},'jfOqd':_0x3f0b99(0x360),'elDAQ':_0x3f0b99(0x7af)+_0x3f0b99(0x56b)+_0x3f0b99(0x522)+_0x3f0b99(0x1c4)+_0x3f0b99(0x333)+'rt','zEtdf':function(_0x5df4e9,_0x7b0e7f){return _0x5df4e9===_0x7b0e7f;},'uFQTO':function(_0x225681,_0x1d5cc2){return _0x225681<=_0x1d5cc2;},'SEGPQ':'<canv'+_0x3f0b99(0xb87)+_0x3f0b99(0xb50)+'ura-e'+_0x3f0b99(0xc2a)+'\x22\x20wid'+_0x3f0b99(0x633)+'60\x22\x20h'+_0x3f0b99(0x569)+_0x3f0b99(0x966)+_0x3f0b99(0xd71)+_0x3f0b99(0xc46)+'ispla'+_0x3f0b99(0x95f)+_0x3f0b99(0x4e7)+_0x3f0b99(0x375)+_0x3f0b99(0x763),'nACHo':_0x3f0b99(0x4b7),'FtbNf':function(_0x28e4bb,_0x1828d3){return _0x28e4bb===_0x1828d3;},'KuAif':function(_0x4b1437,_0x2ed9f4){return _0x4b1437===_0x2ed9f4;},'ffgaf':function(_0xbe315a,_0x2862b8){return _0xbe315a===_0x2862b8;},'mgTYw':_0x3f0b99(0xd96)+_0x3f0b99(0x67c),'ulUON':'undef'+_0x3f0b99(0x9d3),'qYEbz':function(_0x371d8f,_0x972446){return _0x371d8f!==_0x972446;},'ETCRz':_0x3f0b99(0x936),'jewnb':'YpEDs','MdnTc':_0x3f0b99(0xda0)+_0x3f0b99(0x9aa)+_0x3f0b99(0x6e1),'OTKxw':_0x3f0b99(0xda0)+_0x3f0b99(0x338),'pXPBQ':'Mouse'+_0x3f0b99(0x338)+_0x3f0b99(0x3a3)+'a','RbdbI':function(_0x3cb221,_0x11c73f){return _0x3cb221+_0x11c73f;},'CHGOR':'rpixJ','XgNPF':_0x3f0b99(0x289),'PrUEs':_0x3f0b99(0xc39)+_0x3f0b99(0xdce)+_0x3f0b99(0xa71)+'6,.95'+')','baaYY':function(_0xd9382f,_0x132985){return _0xd9382f+_0x132985;},'axqUC':function(_0x2c6ae8,_0x49335b){return _0x2c6ae8/_0x49335b;},'KNqcS':_0x3f0b99(0xc44),'MCuEa':function(_0x56f740,_0x12a532){return _0x56f740!==_0x12a532;},'LoTyp':'Unjqt','JtcZH':_0x3f0b99(0x4c3)+'an','MGFfx':function(_0x3601c7,_0x3e79a0){return _0x3601c7+_0x3e79a0;},'YFsDd':'[data'+_0x3f0b99(0x720),'pvczx':function(_0x4ab20b,_0x51d5bb){return _0x4ab20b(_0x51d5bb);},'OqZCU':function(_0x545467,_0x4a0db8,_0x1eb4db){return _0x545467(_0x4a0db8,_0x1eb4db);},'kuMnv':function(_0x32bd5d,_0x21279e){return _0x32bd5d+_0x21279e;},'mDhCX':_0x3f0b99(0x566)+_0x3f0b99(0x2e6)+_0x3f0b99(0x238)+'ss','FAwTm':function(_0x1c71f7,_0x342b63){return _0x1c71f7+_0x342b63;},'YgMLh':_0x3f0b99(0xe0d)+'ion:f'+_0x3f0b99(0x919)+_0x3f0b99(0x5a1)+_0x3f0b99(0x205)+'ottom'+':8px;'+'z-ind'+_0x3f0b99(0x5b1)+_0x3f0b99(0x66c)+'647;d'+'ispla'+_0x3f0b99(0x760)+_0x3f0b99(0x8b5)+'x-dir'+_0x3f0b99(0x9f1)+_0x3f0b99(0x191)+'umn;g'+'ap:4p'+'x;','jQLxy':_0x3f0b99(0xd3c)+'hadow'+_0x3f0b99(0x7b1)+_0x3f0b99(0x71c)+_0x3f0b99(0xb15)+_0x3f0b99(0x782)+_0x3f0b99(0xc66)+_0x3f0b99(0x4cc)+_0x3f0b99(0x7f9)+_0x3f0b99(0x832)+_0x3f0b99(0x403)+'kit-u'+_0x3f0b99(0x4cc)+_0x3f0b99(0x7f9)+':none'+';','VHLfb':function(_0x383d2f,_0x524605){return _0x383d2f+_0x524605;},'woTMm':function(_0x45c0f1,_0x30f662){return _0x45c0f1+_0x30f662;},'uwgQE':function(_0x3dcfe3,_0x4eb96f){return _0x3dcfe3+_0x4eb96f;},'UANNQ':function(_0x367e44,_0x4f7e56){return _0x367e44+_0x4f7e56;},'Essvq':_0x3f0b99(0x9c4)+_0x3f0b99(0xcf3)+'a-a=\x22'+_0x3f0b99(0xe2b)+'ype=\x22'+_0x3f0b99(0x3b0)+_0x3f0b99(0xb4e)+'=\x221\x22\x20'+'max=\x22'+'5\x22\x20st'+'ep=\x220'+_0x3f0b99(0x1a9)+_0x3f0b99(0x9e3)+'\x222\x22\x20s'+_0x3f0b99(0xcee)+_0x3f0b99(0x545)+'h:92p'+'x;acc'+'ent-c'+_0x3f0b99(0xa29),'EewAS':';\x22>','yJdvf':_0x3f0b99(0x621)+_0x3f0b99(0x35c)+_0x3f0b99(0x77e)+_0x3f0b99(0xdae)+_0x3f0b99(0x74e)+_0x3f0b99(0x535)+_0x3f0b99(0xa28)+'ding:'+_0x3f0b99(0x370)+'px;cu'+'rsor:'+_0x3f0b99(0x83a)+_0x3f0b99(0x7d7)+_0x3f0b99(0x66a)+_0x3f0b99(0x28e)+_0x3f0b99(0x7de)+'P\x20on<'+_0x3f0b99(0x6db)+'on>','aevew':_0x3f0b99(0x621)+':#f7e'+'ef5;b'+_0x3f0b99(0xdae)+'-radi'+'us:6p'+_0x3f0b99(0xa28)+_0x3f0b99(0x358)+_0x3f0b99(0x370)+_0x3f0b99(0xe10)+'rsor:'+'point'+'er;fo'+_0x3f0b99(0x66a)+'herit'+_0x3f0b99(0xc1c)+'ap</b'+'utton'+'>','BDDDt':_0x3f0b99(0x530)+'data-'+'a=\x22st'+'2\x22\x20st'+'yle=\x22'+_0x3f0b99(0x621)+':#8d7'+_0x3f0b99(0xad9)+'ax-wi'+_0x3f0b99(0xd6b)+_0x3f0b99(0xade)+_0x3f0b99(0x312)+_0x3f0b99(0x9bd),'AXVKX':function(_0x41bdcb,_0x3cf373){return _0x41bdcb(_0x3cf373);},'GaPey':function(_0x518343,_0x553f01){return _0x518343(_0x553f01);},'jvBpP':'st2','GJKcI':'bar','LcVCB':function(_0xb4ac26,_0x282a99){return _0xb4ac26(_0x282a99);},'BBEjG':function(_0xdd5cc4,_0x3f9817){return _0xdd5cc4(_0x3f9817);},'gXlLo':function(_0x35b941,_0x1e60f1){return _0x35b941(_0x1e60f1);},'jQPBK':_0x3f0b99(0x7af)+_0x3f0b99(0x56b)+_0x3f0b99(0x7b9)+_0x3f0b99(0x75e)+'HUD\x20d'+'isabl'+'ed','lKYyi':function(_0x15995a,_0x468ee7){return _0x15995a+_0x468ee7;},'kfRyW':function(_0x145765,_0xfb1e19,_0x11bf58){return _0x145765(_0xfb1e19,_0x11bf58);},'WRJgA':_0x3f0b99(0x5ca),'bvDmP':_0x3f0b99(0xe5b),'jphCo':'ojdkN','ELInh':'#f7ee'+'f5','GToyP':_0x3f0b99(0x808)+'ap','DuEdy':function(_0x1138e3,_0x125504){return _0x1138e3===_0x125504;},'eRSsZ':function(_0x565499,_0x4f1aff){return _0x565499===_0x4f1aff;},'BGyir':function(_0x182517,_0x36ec80){return _0x182517+_0x36ec80;},'bJoil':function(_0x3b61be){return _0x3b61be();},'nRSMO':function(_0xccbd3b){return _0xccbd3b();},'OvKGK':_0x3f0b99(0x7f8),'BYpXA':'\x20\x20wri'+_0x3f0b99(0x62b),'uISqL':function(_0x7b4d37,_0x4e8d50){return _0x7b4d37>_0x4e8d50;},'Oqvia':function(_0xb6ee01,_0x5ccbcc){return _0xb6ee01+_0x5ccbcc;},'CYXVd':_0x3f0b99(0x697)+'RS\x20','rDzdO':function(_0x45a115,_0x33e6a2){return _0x45a115+_0x33e6a2;},'JdMrH':_0x3f0b99(0xb2d),'TnneE':_0x3f0b99(0x8ab)+_0x3f0b99(0x5eb)+_0x3f0b99(0xc43)+'(lobb'+_0x3f0b99(0x56f)+_0x3f0b99(0xb6e),'EmAju':function(_0x333319,_0xe9c0f6){return _0x333319>_0xe9c0f6;},'dtVjr':_0x3f0b99(0x2e9)+'a8','EIDlO':function(_0x3d4205){return _0x3d4205();},'uWJTh':function(_0x545fd8,_0x10e3d3){return _0x545fd8*_0x10e3d3;},'TNAzw':_0x3f0b99(0x287)+'h','JJpOD':'WrVBc','GrFhC':'RbbCG','XSRBD':'otiBK','QFOvh':'snaps'+_0x3f0b99(0xcc9),'jfHSW':function(_0x52f025,_0x3db192){return _0x52f025===_0x3db192;},'FiIEy':function(_0x293382,_0xe1795,_0x150503){return _0x293382(_0xe1795,_0x150503);},'lwfMJ':function(_0x4950d6,_0x5057d5){return _0x4950d6===_0x5057d5;},'zPEOi':'cqqXA','ptcSs':function(_0x4f0e8f,_0x94aab6){return _0x4f0e8f===_0x94aab6;},'RYsZM':function(_0x385e23,_0x23c4f3){return _0x385e23===_0x23c4f3;},'OPYlO':'Brack'+_0x3f0b99(0x8f8)+'ht','GqkYs':function(_0x463d61,_0x22cac6){return _0x463d61+_0x22cac6;},'GwYdQ':_0x3f0b99(0xabe),'nYyjC':function(_0x4b8720,_0x25ec7f){return _0x4b8720!==_0x25ec7f;},'GdKjp':function(_0xf0867e,_0x2a13bf){return _0xf0867e+_0x2a13bf;},'OWMAj':_0x3f0b99(0xab5),'DbnjM':function(_0x20665c,_0x413101){return _0x20665c===_0x413101;},'znFAV':_0x3f0b99(0x401),'sGUCT':'no\x20pl'+_0x3f0b99(0xb2e)+_0x3f0b99(0x711),'Yyhdv':function(_0x594771,_0x3e6113){return _0x594771+_0x3e6113;},'RDuAG':function(_0x4ecab6,_0x30e922){return _0x4ecab6+_0x30e922;},'btvmw':_0x3f0b99(0x272),'wUExG':function(_0x31ac70,_0xf0f287){return _0x31ac70!==_0xf0f287;},'ogEmP':function(_0x36b4a5,_0x13eef8){return _0x36b4a5===_0x13eef8;},'QVUgy':_0x3f0b99(0xaff),'KSVVf':function(_0x1d9692,_0x1bc1b4){return _0x1d9692<_0x1bc1b4;},'usmTX':function(_0x33e61e,_0x486e58){return _0x33e61e*_0x486e58;},'aRyqj':function(_0x225cac,_0x18c5d0){return _0x225cac*_0x18c5d0;},'moXEv':function(_0x515280,_0x45b23b){return _0x515280-_0x45b23b;},'UNJaT':function(_0x27a995,_0x4600f9){return _0x27a995(_0x4600f9);},'RoCSa':_0x3f0b99(0x8b8)+_0x3f0b99(0x817)+_0x3f0b99(0x4bd)+_0x3f0b99(0x3e0)+'e','TGaGo':function(_0x155e4b,_0x2daa23){return _0x155e4b>_0x2daa23;},'Xqmmh':function(_0x51a8c7,_0x271bfb){return _0x51a8c7(_0x271bfb);},'KxPAf':_0x3f0b99(0xda0)+_0x3f0b99(0x338)+'0x2c\x20'+'is\x20no'+'t\x20an\x20'+_0x3f0b99(0x4e4)+'t\x20ref'+_0x3f0b99(0xd01)+'e','Lwkxq':function(_0x3fa071,_0x146461,_0x146e2b,_0x17296a){return _0x3fa071(_0x146461,_0x146e2b,_0x17296a);},'vceZQ':_0x3f0b99(0x276)+_0x3f0b99(0xa43)+_0x3f0b99(0xdcb)+_0x3f0b99(0xc8b)+_0x3f0b99(0x5b7)+_0x3f0b99(0x44b)+_0x3f0b99(0xbea),'hrGcn':function(_0x41d9d5,_0xbf326a){return _0x41d9d5===_0xbf326a;},'LhCPa':function(_0x52bc60,_0x4e222b){return _0x52bc60(_0x4e222b);},'QQgVn':function(_0x551eb5,_0x435a19){return _0x551eb5<_0x435a19;},'ChTRo':function(_0x2c8b40,_0x2fde75,_0x42f908){return _0x2c8b40(_0x2fde75,_0x42f908);},'JFDrx':function(_0x20ebdc,_0x4f6cc4){return _0x20ebdc+_0x4f6cc4;},'VwGeu':function(_0x1be293,_0x546ba2,_0x258ed7){return _0x1be293(_0x546ba2,_0x258ed7);},'nPHDO':_0x3f0b99(0xdd0),'ogQmn':_0x3f0b99(0xd59),'lMydu':_0x3f0b99(0x3a3)+_0x3f0b99(0x9e6)+_0x3f0b99(0x8ae),'wpMPe':function(_0x49b800,_0x2db37d){return _0x49b800+_0x2db37d;},'tJMzw':')\x20and'+_0x3f0b99(0x820)+'ov','lCHWf':_0x3f0b99(0x44e),'igqeG':'eGgUc','AkKwB':function(_0x54c0a2,_0x12710d,_0x2c2d5a,_0xbd4580){return _0x54c0a2(_0x12710d,_0x2c2d5a,_0xbd4580);},'RqkDo':function(_0x4a9f12,_0x1e1fd1){return _0x4a9f12===_0x1e1fd1;},'KhOsJ':function(_0x4601e7,_0x5c6e13,_0x3b1be4,_0x40ae29){return _0x4601e7(_0x5c6e13,_0x3b1be4,_0x40ae29);},'qSfZM':function(_0x55d22c,_0x484451){return _0x55d22c+_0x484451;},'lBakH':function(_0x4c2270,_0xf62de0){return _0x4c2270===_0xf62de0;},'xIbJL':function(_0x172b50,_0x20f154){return _0x172b50===_0x20f154;},'WoXSw':function(_0x4fb628,_0x36c43b){return _0x4fb628|_0x36c43b;},'XgSGD':function(_0x1e8a33,_0x372a04,_0x46c504,_0x29422b){return _0x1e8a33(_0x372a04,_0x46c504,_0x29422b);},'bsEBQ':'4|1|3'+'|2|0','KXLtw':'from\x20'+_0x3f0b99(0x8e8)+'ntiat'+_0x3f0b99(0x340),'ktRGQ':function(_0x25112a,_0x502cd7){return _0x25112a===_0x502cd7;},'ZNMkm':function(_0x3cee75,_0x4b6bc0){return _0x3cee75(_0x4b6bc0);},'abUSd':'FPSco'+_0x3f0b99(0xbcb)+_0x3f0b99(0x3a9)+'x2E4','gYeZM':_0x3f0b99(0x8d2),'nZBLs':function(_0x131be2,_0x174680){return _0x131be2!==_0x174680;},'GwRbv':function(_0x4408b8,_0x137c40,_0x436898){return _0x4408b8(_0x137c40,_0x436898);},'KDIYV':function(_0x70fba3,_0x4dc783){return _0x70fba3===_0x4dc783;},'GrYhS':'FfuJa','VodMZ':'eiKUU','xQCmw':_0x3f0b99(0xa61),'COAhV':function(_0x28f602,_0x110fa4){return _0x28f602===_0x110fa4;},'PhVNh':function(_0x186ab7,_0x1c509f,_0x61e5ca){return _0x186ab7(_0x1c509f,_0x61e5ca);},'xNSji':function(_0x269f7a,_0x32c2b5){return _0x269f7a===_0x32c2b5;},'EndeB':'no\x20Mo'+_0x3f0b99(0x817)+_0x3f0b99(0x1b1)+'t','jgpyL':function(_0x75d783){return _0x75d783();},'sKGAP':function(_0x15d19b,_0x4b96ea){return _0x15d19b===_0x4b96ea;},'xfNwn':function(_0x434da1,_0x3bbfaf){return _0x434da1(_0x3bbfaf);},'VIGzy':_0x3f0b99(0x900),'OEZzR':_0x3f0b99(0x4c4),'BGnIa':_0x3f0b99(0x770)+'r','Yaxig':function(_0x23811c,_0x4ab9c8){return _0x23811c+_0x4ab9c8;},'qXBoX':function(_0x1a9e4e,_0x5a41d9,_0x2f9f41){return _0x1a9e4e(_0x5a41d9,_0x2f9f41);},'fMWmk':function(_0x549b1a,_0x190010){return _0x549b1a+_0x190010;},'mwuwB':function(_0x599380,_0x286e36){return _0x599380+_0x286e36;},'ElYkn':function(_0x2bdbac,_0x3cbea5){return _0x2bdbac!==_0x3cbea5;},'EiBFy':function(_0x5ccf43,_0x5e1507){return _0x5ccf43!==_0x5e1507;},'anLKq':_0x3f0b99(0xc03),'SQCeD':function(_0x21d0af){return _0x21d0af();},'ufSfp':function(_0x56e65b,_0x165791){return _0x56e65b*_0x165791;},'hDSbE':function(_0x612e2d,_0x4698b7){return _0x612e2d-_0x4698b7;},'MJecK':function(_0x115df4,_0x1c89c1){return _0x115df4-_0x1c89c1;},'OMJyy':function(_0x2f7b44,_0x457507){return _0x2f7b44*_0x457507;},'Hkelr':function(_0x29b571,_0x105dc2){return _0x29b571-_0x105dc2;},'tnGrW':function(_0x2283b8,_0x527706){return _0x2283b8+_0x527706;},'CxNMC':function(_0x36e929,_0x51d2bc){return _0x36e929*_0x51d2bc;},'Wufer':function(_0x1831b2,_0x4f4856){return _0x1831b2+_0x4f4856;},'LSzoM':'<stro'+_0x3f0b99(0xc72),'LqGkm':_0x3f0b99(0xb00)+_0x3f0b99(0xb12),'qqAMC':'kSiNr','OLXTV':function(_0x2915e4){return _0x2915e4();},'DWAZb':function(_0x2277d9,_0x42c198,_0x4231fa){return _0x2277d9(_0x42c198,_0x4231fa);},'jFjhE':_0x3f0b99(0x26e),'saYTc':function(_0x1193b9,_0x53389b){return _0x1193b9+_0x53389b;},'sLdpf':function(_0x4a0673,_0x11784d){return _0x4a0673<_0x11784d;},'KMbmr':function(_0x4fa7ab,_0x192672){return _0x4fa7ab(_0x192672);},'JLCSE':'--p','hGpTw':function(_0x167177,_0x478c5b){return _0x167177+_0x478c5b;},'fpfJI':'sk-sl'+_0x3f0b99(0x7eb),'awSYe':function(_0x1d8205,_0x5827fe){return _0x1d8205(_0x5827fe);},'KlYyT':function(_0x1f4951,_0xdd252b,_0x38f8a0){return _0x1f4951(_0xdd252b,_0x38f8a0);},'QQWoc':_0x3f0b99(0x9cc)+'l','LkDpF':function(_0x4fec3a,_0x3b3639){return _0x4fec3a+_0x3b3639;},'wRixq':function(_0x77af91,_0x503d49){return _0x77af91&_0x503d49;},'KQBou':function(_0x4c35fa,_0x4dbe4c){return _0x4c35fa===_0x4dbe4c;},'wArfr':function(_0xe5968,_0x5569e1){return _0xe5968^_0x5569e1;},'viAJC':_0x3f0b99(0x7cf),'GpEfk':function(_0x3fe729,_0x444351){return _0x3fe729<_0x444351;},'zDbIt':function(_0x2d3367,_0x4a85da){return _0x2d3367===_0x4a85da;},'hdvkk':function(_0x40379f,_0x503de6){return _0x40379f<_0x503de6;},'DtmMj':'FObWZ','LiLXP':function(_0x5b3575,_0x425337){return _0x5b3575!==_0x425337;},'drFKy':_0x3f0b99(0x6fc),'vCbOz':_0x3f0b99(0x585)+'oard\x20'+'block'+_0x3f0b99(0x6b0)+'open\x20'+_0x3f0b99(0x2d4)+_0x3f0b99(0xa53)+_0x3f0b99(0x7d0)+'ad','zMbgj':'Copy\x20'+_0x3f0b99(0xd78)+'d','zmFyM':function(_0x1b5fbb,_0x25287b){return _0x1b5fbb+_0x25287b;},'tzlUX':function(_0x2b16ed,_0x4496c3){return _0x2b16ed===_0x4496c3;},'WxFBV':_0x3f0b99(0x8cc),'KmBiZ':_0x3f0b99(0xc18)+'t','ZoVND':function(_0x24a2e3,_0x2e909f,_0x407305){return _0x24a2e3(_0x2e909f,_0x407305);},'FxjyP':_0x3f0b99(0x911)+'\x20hack','DfmUw':function(_0x49d5f0,_0x533e31){return _0x49d5f0+_0x533e31;},'DSLfB':function(_0x498adf,_0xf6a5e1){return _0x498adf+_0xf6a5e1;},'ICIuS':'\x20on\x20','lqlYW':_0x3f0b99(0xde0)+'es','VcLfp':_0x3f0b99(0x73a)+'plies'+'\x20move'+_0x3f0b99(0xbd8)+'speed'+_0x3f0b99(0x5f4)+_0x3f0b99(0xa9b)+'ly.\x20H'+_0x3f0b99(0x569)+',\x20ste'+'p\x20and'+'\x20jump'+_0x3f0b99(0x704)+'refus'+'ed.','tvmnP':function(_0x361343,_0x36cbb7,_0x570ed9,_0x209a1a){return _0x361343(_0x36cbb7,_0x570ed9,_0x209a1a);},'AzRwo':'sk-no'+'te','wIEFI':'butto'+'n','nLrhk':'Snaps'+_0x3f0b99(0x3c0)+_0x3f0b99(0xbcc)+'9)','cUShJ':function(_0x19cec6,_0x4d0990,_0x3a1ba6,_0x568624){return _0x19cec6(_0x4d0990,_0x3a1ba6,_0x568624);},'apKkv':'sk-md'+_0x3f0b99(0x3dd),'QjZIC':'F9\x20\x20s'+_0x3f0b99(0x65b)+'ot\x20\x20\x20'+_0x3f0b99(0xab7)+'speed'+'\x20on/o'+_0x3f0b99(0x831)+'\x20/\x20F6'+_0x3f0b99(0x208)+'tor\x20+'+_0x3f0b99(0x5a6)+_0x3f0b99(0x9dd)+'\x20\x20fie'+_0x3f0b99(0xe33)+_0x3f0b99(0x9b7)+_0x3f0b99(0xaac)+_0x3f0b99(0x807)+'his\x20m'+_0x3f0b99(0xcc2),'rQsjj':_0x3f0b99(0xa3e)+'ls','IFUjD':_0x3f0b99(0xd28)+'ed','lceEV':'World'+_0x3f0b99(0x190)+'e\x20min'+'imap,'+'\x20top-'+_0x3f0b99(0x3f4)+_0x3f0b99(0x896)+_0x3f0b99(0xa9b)+_0x3f0b99(0x40f)+_0x3f0b99(0xb75)+_0x3f0b99(0xdf8),'PGaSP':function(_0x3764a7,_0x39d25a,_0x265279,_0x37f57b,_0x145a00,_0x3fe5a6){return _0x3764a7(_0x39d25a,_0x265279,_0x37f57b,_0x145a00,_0x3fe5a6);},'EJnYJ':function(_0x12a581,_0x4cdf63,_0x2ccc22){return _0x12a581(_0x4cdf63,_0x2ccc22);},'XcUis':function(_0xbe62c,_0x3d5c86){return _0xbe62c+_0x3d5c86;},'VkYQu':_0x3f0b99(0x5ec)+_0x3f0b99(0x6ba)+_0x3f0b99(0xb4f)+'s\x20','MFxVD':function(_0x5dc4af,_0x4f10f0,_0x12ea84,_0x5c5288,_0x426ca7,_0x5e7f49){return _0x5dc4af(_0x4f10f0,_0x12ea84,_0x5c5288,_0x426ca7,_0x5e7f49);},'GlEJZ':_0x3f0b99(0xb03)+_0x3f0b99(0x4d9)+'so\x20st'+_0x3f0b99(0x470)+'is','dkhkL':'Reset'+_0x3f0b99(0x9b7),'GOKEJ':_0x3f0b99(0x997)+_0x3f0b99(0xc1f)+_0x3f0b99(0x476)+_0x3f0b99(0x574)+'ets\x20c'+_0x3f0b99(0xb28),'BMoPq':_0x3f0b99(0x49e)+'n','aEdVp':'click','viqix':_0x3f0b99(0x290)+'\x20','MVwKv':function(_0x18967a,_0x1d3fc3){return _0x18967a+_0x1d3fc3;},'yVbBI':function(_0x1f6ae7,_0x141d53){return _0x1f6ae7+_0x141d53;},'Fetqq':function(_0x44f09a,_0x50b3d6){return _0x44f09a+_0x50b3d6;},'oBITi':_0x3f0b99(0x417)+'SetLo'+'okAng'+'les','xNfHR':function(_0x4c689b,_0x3c65f8){return _0x4c689b+_0x3c65f8;},'UQren':_0x3f0b99(0x8d0)+'h\x20','yquus':function(_0x82315e,_0x504d13){return _0x82315e+_0x504d13;},'VlUpA':function(_0x33e6b4,_0x103ee5){return _0x33e6b4+_0x103ee5;},'AMauL':function(_0x1ae1ea,_0x5f4cd2){return _0x1ae1ea+_0x5f4cd2;},'QHMDV':function(_0x182281,_0x82ebe6){return _0x182281===_0x82ebe6;},'TrqdK':function(_0x45de0e,_0x56ad4a){return _0x45de0e===_0x56ad4a;},'DEyaP':_0x3f0b99(0x5ba),'vwuzE':_0x3f0b99(0x3ad)+_0x3f0b99(0x98a),'KjSoa':_0x3f0b99(0xb02),'UBFxH':'Walk\x20'+_0x3f0b99(0x9e0),'WuaVB':_0x3f0b99(0xcbf),'ghIDA':_0x3f0b99(0x88a)+_0x3f0b99(0x779)+'t','zsPyf':_0x3f0b99(0x287)+_0x3f0b99(0xe3b)+_0x3f0b99(0x41b)+'C0','GwnRC':'appli'+_0x3f0b99(0xd7a)+'regis'+_0x3f0b99(0x7f0),'sGaTI':function(_0x293153,_0x582cd2){return _0x293153+_0x582cd2;},'xIHOu':_0x3f0b99(0xcf9)+'\x20','OzCHs':_0x3f0b99(0x7c9)+'rs','fflaY':_0x3f0b99(0x226)+'nNetw'+'orkSy'+'nc','OrVvi':function(_0x44e454,_0x171c81,_0x2b7e15){return _0x44e454(_0x171c81,_0x2b7e15);},'ELAbJ':function(_0xab007d,_0x473863,_0x4318d0){return _0xab007d(_0x473863,_0x4318d0);},'uqlXq':'right','zJRht':_0x3f0b99(0xb9a)+'e','kPVhF':'Copy\x20'+'JSON\x20'+_0x3f0b99(0xafd)+'ipboa'+'rd','aLegq':_0x3f0b99(0xd18)+_0x3f0b99(0xa85),'vtVkc':_0x3f0b99(0x6a9)+'8a','BrBMW':'xRRrE','vboSL':'captu'+_0x3f0b99(0x674),'VoCRw':_0x3f0b99(0xdba)+_0x3f0b99(0x336),'dFQzn':function(_0x57f879,_0x25cc30){return _0x57f879+_0x25cc30;},'QjEzm':function(_0x4d1db9,_0x43f949){return _0x4d1db9!==_0x43f949;},'sxPjw':function(_0x47589e,_0x111859){return _0x47589e===_0x111859;},'wweLG':'SDawf','FaOts':function(_0x3da35a,_0xfe6d0e){return _0x3da35a+_0xfe6d0e;},'rqHWY':_0x3f0b99(0xe30),'lWXHc':'touch'+'start','mCGzG':_0x3f0b99(0x564),'xabfw':_0x3f0b99(0x6ea),'XuYig':function(_0x239d0a){return _0x239d0a();},'omfdA':_0x3f0b99(0x8c4),'ZbTTh':_0x3f0b99(0x9be)+'a\x20Ski'+'llWar'+_0x3f0b99(0x483)+'aitin'+_0x3f0b99(0x53f)+'\x20the\x20'+'game\x20'+_0x3f0b99(0xcb7)+'rt)','MStFa':'nCRAJ','mviMc':_0x3f0b99(0x566)+_0x3f0b99(0x51f)+_0x3f0b99(0xd8f),'QuSur':_0x3f0b99(0x566)+_0x3f0b99(0x51f)+'u-roo'+'t','FOIGb':_0x3f0b99(0xa03)+'p','ArUuc':function(_0xcb9b33,_0x1bd28e,_0x527338,_0x573860){return _0xcb9b33(_0x1bd28e,_0x527338,_0x573860);},'xGDEW':_0x3f0b99(0x9be)+_0x3f0b99(0x978)+_0x3f0b99(0x71a)+'z','oNqWp':_0x3f0b99(0xae2)+'b','hTVYD':'mn-co'+'ls','Yuyqr':'lNiDv','LjJey':function(_0x239191,_0x157915,_0x4b41bd,_0x4cb953){return _0x239191(_0x157915,_0x4b41bd,_0x4cb953);},'sWeZl':_0x3f0b99(0xb3f)+'l>','tQPZk':'sakur'+'a-pet'+'al','qLbvS':function(_0x366cec,_0x8746a8,_0x33756e){return _0x366cec(_0x8746a8,_0x33756e);},'buVPO':'%c[sa'+'kura]'+'\x20menu'+_0x3f0b99(0x3d2)+_0x3f0b99(0xa6d)+'le','UuktZ':_0x3f0b99(0x7ef),'PZwVf':'JqhDl','xLDPX':_0x3f0b99(0x9fe),'CycWV':function(_0x38c4cf,_0x368f89){return _0x38c4cf===_0x368f89;},'RUwuM':_0x3f0b99(0x624),'ejzbs':'AfZUa','dePMa':'enGhw','iEoLa':function(_0x210f57,_0x43e726){return _0x210f57+_0x43e726;},'HXznA':function(_0x4a25bf,_0x2dd2ff){return _0x4a25bf+_0x2dd2ff;},'HdeCZ':_0x3f0b99(0x750)+_0x3f0b99(0x29e)+_0x3f0b99(0x7fc),'IvTZR':'VERSI'+'ON','OEtaa':function(_0x281336,_0x3b8d38){return _0x281336===_0x3b8d38;},'RCNeD':function(_0x47c017,_0x7a8434){return _0x47c017/_0x7a8434;},'KRrBo':_0x3f0b99(0x2f9)+_0x3f0b99(0x259)+'ut\x20yo'+'u','rGHuk':_0x3f0b99(0xba9)+_0x3f0b99(0x3f3)+_0x3f0b99(0x8f0)+_0x3f0b99(0x3e6),'PlvBc':function(_0x4f03dd,_0x4f2eec){return _0x4f03dd+_0x4f2eec;},'LxOXo':'+0x29'+'8','YBLpi':function(_0x3d29c5,_0x18b91e){return _0x3d29c5===_0x18b91e;},'MRNTF':function(_0x3fea76,_0x5034ee){return _0x3fea76!==_0x5034ee;},'zQhIM':function(_0x51d7af,_0x5c5f46){return _0x51d7af-_0x5c5f46;},'EdFED':function(_0x2de63e,_0x39225c){return _0x2de63e+_0x39225c;},'mAHCd':function(_0x2abbd7,_0x546558){return _0x2abbd7!==_0x546558;},'lUUvB':function(_0x9cf2fc,_0x39afe4){return _0x9cf2fc-_0x39afe4;},'UKmUF':function(_0x7c8ba2,_0x39a955){return _0x7c8ba2/_0x39a955;},'PsOWx':function(_0x3937f5,_0x54e19f){return _0x3937f5<_0x54e19f;},'NqxBh':function(_0x323f67,_0x362997){return _0x323f67!==_0x362997;},'ocren':function(_0x54db90,_0x3b7c9a){return _0x54db90+_0x3b7c9a;},'EYMSr':function(_0x5d2783,_0x231f96){return _0x5d2783+_0x231f96;},'ivLGE':function(_0x43e97b,_0x48e67d){return _0x43e97b+_0x48e67d;},'yYATJ':function(_0x41805d,_0x3a7a55){return _0x41805d+_0x3a7a55;},'PtnSx':_0x3f0b99(0x271)+'n=','pTVkB':_0x3f0b99(0x6c7)+'le=','CsBJZ':'gpjcM','WeyLf':_0x3f0b99(0x99a),'iEnDO':function(_0x24376a,_0x1d8326){return _0x24376a-_0x1d8326;},'uuFRt':function(_0x3e0c2c,_0x25d21b){return _0x3e0c2c-_0x25d21b;},'qdAsr':function(_0x598590,_0x57be57){return _0x598590+_0x57be57;},'LPOqq':function(_0xe54890,_0x32020f){return _0xe54890<_0x32020f;},'fgiDk':_0x3f0b99(0xca8),'owIQa':'Iaydc','nOTxf':function(_0x4332e8,_0x57f62f){return _0x4332e8*_0x57f62f;},'dWqYk':function(_0x422af0,_0x4c5ed0){return _0x422af0>_0x4c5ed0;},'BKdSB':function(_0x4bcc67,_0x8b3386){return _0x4bcc67+_0x8b3386;},'FHQrt':function(_0xc6fc9,_0x364a91){return _0xc6fc9===_0x364a91;},'BBZGH':function(_0x19cc7a,_0x5cae13){return _0x19cc7a<_0x5cae13;},'lmTwI':_0x3f0b99(0x282),'tPNMk':function(_0x3dd394,_0x56e715){return _0x3dd394-_0x56e715;},'gjMCb':function(_0x45f0fe,_0x3253bd){return _0x45f0fe===_0x3253bd;},'BwDqp':function(_0xe843d,_0x376cb0){return _0xe843d+_0x376cb0;},'pVWxY':function(_0x19a509,_0x57b21a){return _0x19a509===_0x57b21a;},'bSujG':function(_0x45162e,_0x14eead){return _0x45162e===_0x14eead;},'KRzbR':_0x3f0b99(0x788),'lqDpw':_0x3f0b99(0x2b5),'mymZE':function(_0x2a2a89,_0x3867a4){return _0x2a2a89!==_0x3867a4;},'khmXX':function(_0x2c3795,_0x2e4e36,_0x54c546,_0x304b9b){return _0x2c3795(_0x2e4e36,_0x54c546,_0x304b9b);},'AmeQV':function(_0x60a7cc,_0xd7e105){return _0x60a7cc+_0xd7e105;},'tFuMH':function(_0x40ed5b,_0x12f5e,_0x2550ab){return _0x40ed5b(_0x12f5e,_0x2550ab);},'fvCWJ':function(_0x192b00,_0x23946b,_0x3104e6,_0x2de1c7){return _0x192b00(_0x23946b,_0x3104e6,_0x2de1c7);},'NWCUM':function(_0x4f9b96,_0x53565d){return _0x4f9b96<_0x53565d;},'nqaNJ':_0x3f0b99(0x9d5),'BwkSG':function(_0x4c0a64,_0x4480d9,_0x5129be,_0x426460){return _0x4c0a64(_0x4480d9,_0x5129be,_0x426460);},'DmHVX':function(_0x51268b,_0x241f0b){return _0x51268b+_0x241f0b;},'QwYSS':function(_0x1923f6,_0x55432b){return _0x1923f6-_0x55432b;},'KEsMx':_0x3f0b99(0xc3c),'gnDmc':function(_0x3e9e41,_0x5d4d6b){return _0x3e9e41+_0x5d4d6b;},'sGQtR':_0x3f0b99(0xb59)+_0x3f0b99(0x632)+_0x3f0b99(0x4e8)+_0x3f0b99(0x849)+'2,29,'+_0x3f0b99(0xc89)+'borde'+_0x3f0b99(0x3e9)+_0x3f0b99(0x92a)+_0x3f0b99(0x297)+'a(255'+_0x3f0b99(0x889)+'177,.'+_0x3f0b99(0x3c2)+'rder-'+_0x3f0b99(0x6a6)+_0x3f0b99(0xd9e)+'x;','zcCqb':'paddi'+'ng:4p'+'x;fon'+_0x3f0b99(0xe64)+_0x3f0b99(0x85a)+_0x3f0b99(0x4bc)+_0x3f0b99(0xd10)+_0x3f0b99(0xc8f)+_0x3f0b99(0xa41)+'as,mo'+'nospa'+_0x3f0b99(0x363)+'lor:#'+_0x3f0b99(0x3b4)+'9;','TJOqD':'<div\x20'+'id=\x22s'+_0x3f0b99(0x64a)+'-esp-'+'lg\x22\x20s'+'tyle='+_0x3f0b99(0xa5a)+'-alig'+_0x3f0b99(0xbba)+'ter\x22>'+'</div'+'>','fczzA':_0x3f0b99(0x4a7)+_0x3f0b99(0xba5)+'p-cv','foHvs':function(_0x5c36ef,_0x1239e2){return _0x5c36ef===_0x1239e2;},'JRvoh':_0x3f0b99(0xa65),'tXOul':'canva'+'s','tlOSS':function(_0x2bc6a7,_0x5d6689,_0x3cfa78){return _0x2bc6a7(_0x5d6689,_0x3cfa78);},'BRlRj':function(_0x836647,_0x4eda53){return _0x836647===_0x4eda53;},'BaTgx':'zmofC','SVGIW':function(_0x5b7ef3,_0x5e0498){return _0x5b7ef3/_0x5e0498;},'iqkHn':function(_0x12fdab,_0x1a9a70){return _0x12fdab*_0x1a9a70;},'TEjvN':_0x3f0b99(0xc6d),'qphEX':function(_0x23bcda,_0x45f1a6,_0x31f7e8,_0x313908,_0xc702d0){return _0x23bcda(_0x45f1a6,_0x31f7e8,_0x313908,_0xc702d0);},'KINIp':'4|0|2'+_0x3f0b99(0x407),'lUBtX':function(_0x4eb1f0,_0x5f1a3e){return _0x4eb1f0-_0x5f1a3e;},'nVtqg':function(_0x4b4cd9,_0x31e4ef){return _0x4b4cd9/_0x31e4ef;},'HbPLw':function(_0x1326c9,_0x718510){return _0x1326c9+_0x718510;},'JHQmx':function(_0x5e6c73,_0x452518){return _0x5e6c73+_0x452518;},'wTxcR':function(_0xab65b9,_0x55a8e1){return _0xab65b9*_0x55a8e1;},'PRRyr':function(_0x5e3996,_0x304b93){return _0x5e3996/_0x304b93;},'tRjET':function(_0x22bca0,_0xa8d048){return _0x22bca0*_0xa8d048;},'PoJkP':function(_0x418e3a,_0x144e39){return _0x418e3a-_0x144e39;},'hVfsN':function(_0x154cb8,_0x57432b){return _0x154cb8/_0x57432b;},'VqTgD':function(_0x10e106,_0x3c4e63){return _0x10e106*_0x3c4e63;},'woEfs':function(_0x9466e5,_0x52a298){return _0x9466e5/_0x52a298;},'LEzdG':function(_0x2fedfe,_0x5ba8a6){return _0x2fedfe*_0x5ba8a6;},'Ldecs':function(_0x38255a,_0x4239fe){return _0x38255a+_0x4239fe;},'qvFki':function(_0x2fc4ed,_0x44a73e){return _0x2fc4ed*_0x44a73e;},'rvIzu':'ANbXB','eRZvt':function(_0x41cb5d,_0x1ead74){return _0x41cb5d!==_0x1ead74;},'hpUZC':function(_0xdf028a,_0x3c48f1){return _0xdf028a+_0x3c48f1;},'ewnum':function(_0x446808,_0x41e1af){return _0x446808*_0x41e1af;},'GQhfW':function(_0xa1c3da,_0x544535){return _0xa1c3da/_0x544535;},'UBCkC':_0x3f0b99(0xadd),'nDTmq':'10px\x20'+_0x3f0b99(0xa4c)+_0x3f0b99(0x3c6)+'ce,Co'+_0x3f0b99(0xe38)+_0x3f0b99(0x6ab)+_0x3f0b99(0xb5a)+'e','KjmXy':function(_0x17e058,_0x69ff7){return _0x17e058/_0x69ff7;},'ihmQA':function(_0xb6ba96,_0xa2e79,_0x5c8719){return _0xb6ba96(_0xa2e79,_0x5c8719);},'rluQq':function(_0x4c703e){return _0x4c703e();},'bPZPT':function(_0x9fe58c,_0x3a9db2,_0x443839){return _0x9fe58c(_0x3a9db2,_0x443839);},'hgYkG':function(_0x7e5810,_0x5d71a6){return _0x7e5810===_0x5d71a6;},'xdQGN':function(_0x301a11,_0x2c66e1){return _0x301a11<=_0x2c66e1;},'HaPey':function(_0x3d2d7e,_0x7152a0){return _0x3d2d7e/_0x7152a0;},'KAzbF':function(_0x131f0b,_0xae493d){return _0x131f0b<_0xae493d;},'ucGEB':function(_0x57920c,_0x30ae5f,_0x362077){return _0x57920c(_0x30ae5f,_0x362077);},'uDgTG':function(_0x5385f0,_0x3b1bf5){return _0x5385f0<_0x3b1bf5;},'vQJKD':_0x3f0b99(0xbbb),'JwNSy':function(_0x1119ee,_0x4c8172){return _0x1119ee*_0x4c8172;},'SBhNM':function(_0x1defa9,_0x5e7d3c){return _0x1defa9-_0x5e7d3c;},'XTPqp':function(_0x10c857,_0xafbc){return _0x10c857!==_0xafbc;},'lVWjA':function(_0x1488aa,_0x3250b8){return _0x1488aa/_0x3250b8;},'eUzJN':function(_0x14f16f,_0xcdb956){return _0x14f16f-_0xcdb956;},'MMBvB':'#4f8f'+'6a','ORMHw':_0x3f0b99(0xc70)+'74','VUUlV':_0x3f0b99(0xa6b),'LgidK':function(_0x2f0a8f,_0x445f3e){return _0x2f0a8f+_0x445f3e;},'ModCS':function(_0x418436,_0xd0f8c7){return _0x418436!==_0xd0f8c7;},'BVJQO':_0x3f0b99(0x967)+'am','EmpRJ':function(_0x10b458){return _0x10b458();},'MeCEF':'QgVFo','HukLk':function(_0x9c6415,_0x2c4531,_0x117384){return _0x9c6415(_0x2c4531,_0x117384);},'Gfrit':_0x3f0b99(0x22e),'QaLYu':_0x3f0b99(0xbd2),'ORmPJ':_0x3f0b99(0xbc6),'VtcQN':function(_0x1a50fb){return _0x1a50fb();},'gELUv':_0x3f0b99(0x43e)+'|2|5|'+'4','sUDdn':function(_0x24278d){return _0x24278d();},'EmeIW':function(_0x5863eb,_0x39e539){return _0x5863eb!==_0x39e539;},'CImoN':'ChMPV','IdxRy':function(_0x100faa,_0x1be0b6){return _0x100faa+_0x1be0b6;},'yHLUf':function(_0x250322,_0x3b0456){return _0x250322/_0x3b0456;},'IuHwU':function(_0x200dd5,_0x34567c){return _0x200dd5===_0x34567c;},'HFQBl':'JhgjM','eiCCs':function(_0x20635d,_0x587cf0){return _0x20635d-_0x587cf0;},'zFwWs':function(_0x136c72,_0x3f378a){return _0x136c72+_0x3f378a;},'DfuWr':'surve'+_0x3f0b99(0x237)+_0x3f0b99(0xe6e),'WJFlR':function(_0x2330e7,_0x1b41d5){return _0x2330e7===_0x1b41d5;},'sqfQA':function(_0x5f024d,_0x287241){return _0x5f024d+_0x287241;},'OYPDd':_0x3f0b99(0x60b)+_0x3f0b99(0x544)+'hile\x20'+_0x3f0b99(0x644)+'ne\x20ho'+_0x3f0b99(0xc75)+_0x3f0b99(0x96c)+_0x3f0b99(0xbb3)+'haned'+_0x3f0b99(0x2bf)+'able\x20'+_0x3f0b99(0x2f9)+_0x3f0b99(0xd36)+'r\x20','kZkqQ':function(_0x1e378c,_0x3ff0b5){return _0x1e378c!==_0x3ff0b5;},'KRUVh':_0x3f0b99(0x52e)+'n._ru'+_0x3f0b99(0x85d)+_0x3f0b99(0x442)+_0x3f0b99(0xd60)+_0x3f0b99(0xc60)+_0x3f0b99(0x518)+_0x3f0b99(0x4e6)+'dkit.'+'Runti'+_0x3f0b99(0x605)+'the\x20p'+'lugin'+_0x3f0b99(0xd30)+_0x3f0b99(0xbe1)+'\x20','mqELH':_0x3f0b99(0x69e),'GRDyg':function(_0x3e6b18,_0x5e97f7){return _0x3e6b18+_0x5e97f7;},'sPacz':_0x3f0b99(0x2b8)+'rce:\x20','RUpus':function(_0x11c79d,_0x4da201){return _0x11c79d+_0x4da201;},'sMusk':function(_0x56f036,_0x491b33){return _0x56f036+_0x491b33;},'zqUNW':function(_0x42b15a,_0x136cb9){return _0x42b15a+_0x136cb9;},'XaUTx':_0x3f0b99(0x332)+'once\x20'+_0x3f0b99(0xb7e)+'g\x20Web'+'Assem'+'bly.i'+_0x3f0b99(0xd7d)+_0x3f0b99(0x8c7)+_0x3f0b99(0x9a3)+_0x3f0b99(0x1be)+'hots\x20'+'plugi'+_0x3f0b99(0x329)+'ks.le'+_0x3f0b99(0xc62)+'\x20','RCVLF':function(_0xf64789,_0xd151b3){return _0xf64789+_0xd151b3;},'oghHj':'(this'+_0x3f0b99(0x55b)+_0x3f0b99(0x851)+'fo*)\x20'+_0x3f0b99(0x3cd)+_0x3f0b99(0x501)+_0x3f0b99(0xe4b)+_0x3f0b99(0x2a1)+_0x3f0b99(0x703)+'is\x20bu'+'ild.','fyjgx':_0x3f0b99(0x9c5)+_0x3f0b99(0x704)+_0x3f0b99(0x4d1)+'ed\x20bu'+_0x3f0b99(0x6f2)+'FPSco'+'ntrol'+_0x3f0b99(0x791)+'as\x20fi'+_0x3f0b99(0x224)+'et.\x20','TpPOH':'Eithe'+'r\x20you'+'\x20are\x20'+'not\x20i'+_0x3f0b99(0x20c)+_0x3f0b99(0x38e)+_0x3f0b99(0x5c1)+'he\x20ho'+'ok\x20is'+'\x20on\x20t'+'he\x20wr'+_0x3f0b99(0x1de)+'verlo'+_0x3f0b99(0x9ba),'lHCxi':'color'+':','hRMzT':';font'+_0x3f0b99(0x9f8)+_0x3f0b99(0xc80)+'0','ATcMX':function(_0x243cb6,_0x33b9f8,_0x2c90fd){return _0x243cb6(_0x33b9f8,_0x2c90fd);},'zZWLr':_0x3f0b99(0x6c1),'GdatY':function(_0x218798,_0x3e3e5f){return _0x218798+_0x3e3e5f;},'KaXON':function(_0x8f1534,_0x21ca86){return _0x8f1534/_0x21ca86;},'aobBu':function(_0x4e20ce,_0x456387){return _0x4e20ce!==_0x456387;},'TVCbg':'oLUJL','hZHRg':function(_0x63aecf){return _0x63aecf();},'pYkmU':function(_0x1659a7){return _0x1659a7();},'dUWIG':_0x3f0b99(0x7bf)+_0x3f0b99(0x7d3)+'SKILL'+_0x3f0b99(0x64b)+_0x3f0b99(0x5cc)+'===','CELDl':_0x3f0b99(0xcdb)+'2','cvYTf':_0x3f0b99(0x7af)+'kura]'+_0x3f0b99(0xb83)+_0x3f0b99(0x2d6)+_0x3f0b99(0x543)+_0x3f0b99(0xb35)+_0x3f0b99(0xb97)+'\x20up+d'+'own)','GRwEW':'%c[sa'+_0x3f0b99(0x56b)+'\x20PORT'+_0x3f0b99(0x408)+_0x3f0b99(0xc0a),'vXJdA':function(_0x1e2df4,_0x2fd51c){return _0x1e2df4+_0x2fd51c;},'zOSNc':_0x3f0b99(0x566)+'a-sw-'+_0x3f0b99(0x446)+_0x3f0b99(0x650)+'en','huJLO':'messa'+'ge','MbtUu':'%c[sa'+'kura]'+_0x3f0b99(0x6ee)+_0x3f0b99(0x460)+'\x20ACTI'+'VE\x20v','vhKXt':';font'+_0x3f0b99(0x9f8)+_0x3f0b99(0xc80)+'0;fon'+'t-siz'+_0x3f0b99(0x7a7)+'x','lwpbn':'\u0094\u0090\u0089\u008f\u0089'+'\u0095\u0092\u0089\u0092\u0087'+'\u008e','Xmrgc':_0x3f0b99(0x18d)+'\u0093\u0090\u0088\u0092\u0090'+'\u0091','rfphy':_0x3f0b99(0x4dd)+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','hVVKx':'\u008c\u0091\u0088\u0095\u008c'+_0x3f0b99(0x206)+'\u0095','ELJFK':_0x3f0b99(0xb7b)+_0x3f0b99(0xdfe)+'\u0090','jonUd':_0x3f0b99(0x261)+_0x3f0b99(0xd1d)+'\u008d','Pbnld':'\u008f\u008c\u0086\u008e\u008f'+_0x3f0b99(0xcb3)+'\u0091','heeeF':'\u008d\u0093\u0095\u008a\u0088'+_0x3f0b99(0x308)+'\u008a','wdfwB':_0x3f0b99(0x907)+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','RWUjw':_0x3f0b99(0x746)+_0x3f0b99(0xe57)+'\u0088','MjJLD':'\u008c\u0093\u0091\u008a\u0089'+'\u0087\u0092\u0088\u0088\u008c'+'\u0088','FXOME':_0x3f0b99(0x475)+_0x3f0b99(0x909)+'\u008a','ldndV':'\u0089\u0091\u0086\u0093\u008f'+_0x3f0b99(0x913)+'\u008d','YeMLA':'\u008e\u0092\u0091\u0088\u0092'+_0x3f0b99(0x26a)+'\u008b','FBfoz':'\u0092\u008c\u0088\u0087\u0088'+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','CZzcd':'\u008a\u0086\u008a\u008b\u0086'+_0x3f0b99(0xe56)+'\u008d','kcJLB':_0x3f0b99(0x796)+'\u0092\u0091\u0088\u008c\u0090'+'\u0092','JxbHg':'bool','MqkRx':'\u0090\u0092\u008e\u008e\u0087'+'\u008f\u008c\u0086\u0091\u0089'+'\u0093','JUFhw':'\u008e\u008b\u008e\u0091\u008c'+_0x3f0b99(0x64e)+'\u008a','rqAVH':'\u0089\u0088\u0093\u008b\u008b'+_0x3f0b99(0xd39)+'\u0094','EReFD':_0x3f0b99(0xd09)+_0x3f0b99(0x504)+'\u008b','hkSkz':'\u0088\u0089\u008f\u0091\u0094'+_0x3f0b99(0x772)+'\u0090','ppJDH':_0x3f0b99(0xbcd)+_0x3f0b99(0x362)+'\u0092','FUbYX':_0x3f0b99(0xdff)+'\u0090\u0089\u008f\u008e\u0093'+'\u008e','CzHWz':'\u0091\u0088\u0095\u0088\u0088'+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','SqKwh':'\u0087\u008d\u0095\u008d\u0087'+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','QEwJf':_0x3f0b99(0xa63)+'\u0091\u0088\u0092\u008d\u0087'+'\u0094','YVMzD':_0x3f0b99(0x5e6)+'\u008f\u008b\u008e\u008d\u008f'+'\u0094','QqwxN':'\u008f\u0092\u008d\u008d\u0089'+'\u008a\u0089\u008e\u008d\u008d'+'\u0086','vrUfI':'\u0086\u0090\u0092\u0091\u0090'+_0x3f0b99(0x863)+'\u008c','aRKKL':_0x3f0b99(0x95e)+'\u0095\u008a\u0091\u0095\u0092'+'\u0090','ScwAw':'\u0094\u0094\u008e\u0091\u0090'+_0x3f0b99(0xe01)+'\u0095','qCHhM':_0x3f0b99(0x979)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','VCakW':_0x3f0b99(0x77c)+_0x3f0b99(0x30a)+'\u0087','raBjA':_0x3f0b99(0x7d2)+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','pIUWz':_0x3f0b99(0xc45)+'\u008a\u0092\u008b\u008d\u0091'+'\u0094','KeaDH':_0x3f0b99(0x87c)+_0x3f0b99(0x4d2)+'\u0094','iHlSt':_0x3f0b99(0x88d),'zqOcM':_0x3f0b99(0x65c)+_0x3f0b99(0x8b7)+'\u008b','EOuSM':_0x3f0b99(0x2a4)+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','wHhoE':'\u0086\u0092\u0092\u008a\u008e'+_0x3f0b99(0x22d)+'\u0087','CsVrN':'\u0090\u0090\u008f\u008d\u008a'+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','TVcFL':_0x3f0b99(0xa86)+'\u008f\u0095\u0090\u0087\u008d'+'\u008c','frQkF':_0x3f0b99(0xa30)+'\u0087\u008d\u008f\u008d\u0095'+'\u0087','nhcTg':_0x3f0b99(0xa9d)+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','tLQNl':_0x3f0b99(0xdc7)+_0x3f0b99(0xe68)+'\u0091','XfhTk':_0x3f0b99(0xbf9)+_0x3f0b99(0x8ec)+'\u008b','TsQNu':'\u008d\u0094\u0092\u0093\u0092'+_0x3f0b99(0x956)+'\u0095','QMqlb':_0x3f0b99(0x6c3)+'\u0093\u0088\u0093\u0088\u0095'+'\u008f','ydSsL':_0x3f0b99(0xc34)+_0x3f0b99(0xa0a)+'\u008c','RPCPh':'\u008e\u0091\u0092\u0087\u0089'+_0x3f0b99(0x941)+'\u0090','LByHP':'\u008f\u0086\u0090\u0094\u0089'+'\u0095\u0088\u0093\u0087\u0089'+'\u008a','tROKg':'int','kWEYl':'\u0087\u0091\u0091\u0090\u0091'+_0x3f0b99(0x9d9)+'\u0086','TfMJH':'\u008b\u0086\u008e\u0095\u0091'+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','XMVDK':_0x3f0b99(0xae9)+_0x3f0b99(0x33f)+'\u0093','pobca':_0x3f0b99(0x6ed)+_0x3f0b99(0xd66)+'\u0091','ijLGC':_0x3f0b99(0xca5)+'rcial'+_0x3f0b99(0x3bd)+_0x3f0b99(0x5d1)+_0x3f0b99(0xc9b),'DlkvK':'\u0093\u0093\u008d\u008e\u008b'+_0x3f0b99(0x570)+'\u0086','ibTYS':_0x3f0b99(0x58f)+_0x3f0b99(0x8de)+'\u008c','FGOeE':'\u0086\u0090\u0086\u008c\u0090'+_0x3f0b99(0x18a)+'\u008b','ZcTGW':_0x3f0b99(0xbca)+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','KIMGE':'\u008e\u0092\u0090\u0088\u0091'+_0x3f0b99(0xb9c)+'\u008c','jFVKh':_0x3f0b99(0x8ce)+_0x3f0b99(0x65d)+'\u0094','Aoqnp':_0x3f0b99(0x599)+_0x3f0b99(0x1bf)+'\u0091','SYmdw':'OnApp'+'licat'+_0x3f0b99(0x537)+_0x3f0b99(0x3c3),'VOjfb':_0x3f0b99(0xb6d)+'\u0086\u008a\u0095\u0094\u008e'+'\u008f','UmvlU':_0x3f0b99(0xd0d)+'\u0090\u0088\u008f\u0089\u008a'+'\u008e','MpRve':'\u0095\u008e\u008f\u008b\u008d'+'\u008f\u0095\u0089\u008e\u008b'+'\u0094','fJNbe':'\u0086\u008a\u008f\u008f\u0089'+_0x3f0b99(0x8c8)+'\u008e','gsJOq':_0x3f0b99(0x60f)+_0x3f0b99(0x645)+'\u0088','eSXLq':'\u0095\u008f\u0086\u0088\u0091'+_0x3f0b99(0x90f)+'\u0094','LIShm':'\u0087\u0089\u008f\u008a\u0095'+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','Htsvp':'\u0089\u008a\u0086\u0092\u0089'+_0x3f0b99(0xb7d)+'\u0092','tMeYi':'\u0088\u008a\u0088\u0090\u0094'+_0x3f0b99(0x3f5)+'\u008e','eeBQy':'\u0088\u0094\u008e\u0086\u0090'+_0x3f0b99(0x2af)+'\u0086','wvkZW':'\u0093\u0094\u0087\u008b\u0086'+_0x3f0b99(0x687)+'\u008e','cVZTp':'\u0090\u008d\u008b\u0093\u008a'+_0x3f0b99(0x9f7)+'\u008a','EGAZY':_0x3f0b99(0x6a8)+'\u008e\u008e\u0094\u008f\u0095'+'\u0095','XXqWA':_0x3f0b99(0x5a9)+'\u008c\u008b\u008c\u0086\u008f'+'\u0089','cuPkl':_0x3f0b99(0xd07)+_0x3f0b99(0x252)+_0x3f0b99(0x3a8),'tOKqD':_0x3f0b99(0x24c)+_0x3f0b99(0x952)+'yerAn'+'imati'+_0x3f0b99(0x5fa),'gdXOn':_0x3f0b99(0x809)+_0x3f0b99(0x667)+'Sharp'+'.dll','yWPog':_0x3f0b99(0xc3f)+_0x3f0b99(0x9e2)+'ge.De'+'cal.d'+'ll','mqKmT':_0x3f0b99(0x3d7),'vGOmT':_0x3f0b99(0xc8e),'FpvEI':_0x3f0b99(0x457)+'h','dfnCG':_0x3f0b99(0x5f6),'FusQg':_0x3f0b99(0x458),'LhFto':_0x3f0b99(0x1b6),'iafWp':_0x3f0b99(0xccc)+'le','vZqJF':_0x3f0b99(0x378)+_0x3f0b99(0xb38)+'th','JgFGU':_0x3f0b99(0x500),'XQLEU':_0x3f0b99(0x3b6),'dJFIE':_0x3f0b99(0x43c)+'form','NAyMG':'local'+_0x3f0b99(0x9a4),'ABBaV':_0x3f0b99(0x673)+'wn','ScYsc':'TgrBC','HHQSW':'sakur'+'a-sw-'+'view-'+'off','Tdpas':'VIS','CloKi':_0x3f0b99(0x244)+'s','UudnX':'VAL','yyipi':function(_0x41d1ed,_0x3469be){return _0x41d1ed+_0x3469be;},'QOrlO':function(_0x5271f3,_0x4dc80b){return _0x5271f3+_0x4dc80b;},'PLjjV':function(_0x1044e9,_0xb2746){return _0x1044e9+_0xb2746;},'wjODd':function(_0x1fd573,_0x450796){return _0x1fd573+_0x450796;},'joehP':function(_0x232e3f,_0x9dbdcc){return _0x232e3f+_0x9dbdcc;},'CPIqj':function(_0x38c2aa,_0x21ae56){return _0x38c2aa+_0x21ae56;},'EobDP':function(_0x3a5a25,_0x120d2d){return _0x3a5a25+_0x120d2d;},'jrKyS':function(_0x585afb,_0x47e256){return _0x585afb+_0x47e256;},'RJgfo':function(_0x1c28ab,_0x25310a){return _0x1c28ab+_0x25310a;},'mZPhD':function(_0x465713,_0x35e078){return _0x465713+_0x35e078;},'Tqeue':function(_0x55dc38,_0xb3a326){return _0x55dc38+_0xb3a326;},'aVcZG':function(_0x5f091b,_0x31715d){return _0x5f091b+_0x31715d;},'jIVEQ':'#saku'+'ra-me'+_0x3f0b99(0x39e)+_0x3f0b99(0xd81)+'l:ini'+'tial}','JjPZF':'#saku'+_0x3f0b99(0x355)+_0x3f0b99(0x39e)+_0x3f0b99(0xb94)+_0x3f0b99(0x989)+'l{pos'+_0x3f0b99(0x507)+_0x3f0b99(0x5c5)+_0x3f0b99(0x571)+_0x3f0b99(0x392)+_0x3f0b99(0xce3)+_0x3f0b99(0x875)+'24px;'+_0x3f0b99(0x1bd)+_0x3f0b99(0x855)+_0x3f0b99(0xa10)+_0x3f0b99(0xab0)+_0x3f0b99(0x47e)+'w\x20-\x204'+_0x3f0b99(0x24a)+_0x3f0b99(0x2bc)+_0x3f0b99(0x779)+_0x3f0b99(0x9d6)+'(500p'+_0x3f0b99(0xc87)+'c(100'+_0x3f0b99(0x50b)+'48px)'+');','CFOEQ':'box-s'+_0x3f0b99(0xd26)+_0x3f0b99(0x2ed)+'0\x201px'+_0x3f0b99(0x6f7)+'(255,'+_0x3f0b99(0xb55)+'55,.0'+'6),in'+'set\x200'+_0x3f0b99(0xa3c)+'0\x20rgb'+_0x3f0b99(0xd58)+_0x3f0b99(0xbee)+'255,.'+_0x3f0b99(0x51d)+'\x2030px'+_0x3f0b99(0x82d)+_0x3f0b99(0x6f7)+_0x3f0b99(0x71b)+'0,.55'+');','YQjtv':_0x3f0b99(0x4a7)+_0x3f0b99(0x355)+_0x3f0b99(0x39e)+_0x3f0b99(0xb94)+_0x3f0b99(0x989)+_0x3f0b99(0x84c)+'wn{op'+_0x3f0b99(0x4d7)+':1;tr'+_0x3f0b99(0xc76)+_0x3f0b99(0x4df)+'ne;po'+_0x3f0b99(0x74d)+'-even'+_0x3f0b99(0xe15)+'to;}','yOZtt':'borde'+'r-rad'+'ius:1'+_0x3f0b99(0xe55)+_0x3f0b99(0x2c8)+_0x3f0b99(0x5e2)+_0x3f0b99(0xc39)+'255,2'+'55,25'+'5,.02'+'5);bo'+'x-sha'+_0x3f0b99(0xa94)+_0x3f0b99(0x25b)+_0x3f0b99(0xd1b)+'\x201px\x20'+'rgba('+_0x3f0b99(0xb55)+'55,25'+'5,.05'+_0x3f0b99(0x65f),'NhaqM':_0x3f0b99(0x99f)+_0x3f0b99(0xcb1)+'ispla'+_0x3f0b99(0x20e)+_0x3f0b99(0x87a)+_0x3f0b99(0xcfa)+'ems:c'+'enter'+_0x3f0b99(0x368)+_0x3f0b99(0xa15)+_0x3f0b99(0xd31)+_0x3f0b99(0x6ac)+'2px;m'+'argin'+_0x3f0b99(0x8bc)+_0x3f0b99(0xc4a)+_0x3f0b99(0x296),'orLDr':'.mn-t'+'ab:ho'+'ver{c'+_0x3f0b99(0xa29)+'rgba('+_0x3f0b99(0x9e5)+_0x3f0b99(0x8c9)+'2,.8)'+';}','SMmhs':_0x3f0b99(0x34e)+_0x3f0b99(0xd90)+'tive{'+'color'+':#ff6'+_0x3f0b99(0xa18)+_0x3f0b99(0x2c8)+_0x3f0b99(0x5e2)+_0x3f0b99(0xc39)+'255,1'+_0x3f0b99(0x233)+_0x3f0b99(0x1b7)+';}','LNWlC':_0x3f0b99(0x34e)+_0x3f0b99(0x9fa)+_0x3f0b99(0x2c4)+':flex'+';alig'+_0x3f0b99(0x5fe)+'ms:ce'+'nter;'+_0x3f0b99(0xbef)+'2px;p'+_0x3f0b99(0x59f)+_0x3f0b99(0x590)+'\x206px\x20'+_0x3f0b99(0xc64)+_0x3f0b99(0xbc1)+'selec'+'t:non'+_0x3f0b99(0x79c),'LRYZF':'.mn-h'+'{font'+'-size'+':17px'+';font'+_0x3f0b99(0x9f8)+'ht:65'+_0x3f0b99(0xa7a),'WmRSt':'.mn-s'+'ub{fo'+_0x3f0b99(0x6d1)+_0x3f0b99(0x3d5)+_0x3f0b99(0xa4d)+_0x3f0b99(0x4d7)+':.4;}','xrPkC':_0x3f0b99(0x30b)+_0x3f0b99(0x24d)+'displ'+'ay:gr'+_0x3f0b99(0x61b)+_0x3f0b99(0x5f9)+'tems:'+_0x3f0b99(0x8a9)+_0x3f0b99(0xc49)+'th:28'+_0x3f0b99(0xc83)+'ight:'+_0x3f0b99(0xbfe)+_0x3f0b99(0xb3b)+_0x3f0b99(0x353)+'order'+'-radi'+'us:8p'+_0x3f0b99(0xaed)+_0x3f0b99(0xa92)+'nd:tr'+_0x3f0b99(0x584)+_0x3f0b99(0x27f),'qXTEr':_0x3f0b99(0x30b)+_0x3f0b99(0x7a9)+'hover'+_0x3f0b99(0x94b)+_0x3f0b99(0x921)+_0x3f0b99(0xc1e)+_0x3f0b99(0x32a)+_0x3f0b99(0xacc)+_0x3f0b99(0xd58)+',255,'+_0x3f0b99(0xd95)+'05);}','wGxxs':_0x3f0b99(0x87d)+'-item'+_0x3f0b99(0x8fc)+_0x3f0b99(0x82f)+_0x3f0b99(0x583)+'onten'+'t:sta'+'rt;ga'+'p:10p'+'x;pad'+'ding:'+'0\x204px'+_0x3f0b99(0xe0e)+_0x3f0b99(0xa7a),'RXkGc':_0x3f0b99(0x30b)+_0x3f0b99(0x8cb)+_0x3f0b99(0xc2f)+_0x3f0b99(0xe07)+_0x3f0b99(0x617)+_0x3f0b99(0x3c5)+_0x3f0b99(0xc9c)+_0x3f0b99(0xa88),'sdxIP':_0x3f0b99(0x30b)+'ols::'+_0x3f0b99(0xc2f)+_0x3f0b99(0xe07)+_0x3f0b99(0x617)+_0x3f0b99(0x50d)+'umb{b'+_0x3f0b99(0x2c8)+_0x3f0b99(0x5e2)+_0x3f0b99(0xc39)+'255,2'+_0x3f0b99(0x3d1)+'5,.08'+_0x3f0b99(0x331)+_0x3f0b99(0x263)+'adius'+_0x3f0b99(0x352)+'}','kSXEe':_0x3f0b99(0x502)+_0x3f0b99(0xbd4)+'order'+'-radi'+'us:12'+_0x3f0b99(0x429)+'ckgro'+'und:r'+_0x3f0b99(0x84b)+'55,25'+'5,255'+',.025'+_0x3f0b99(0x53a)+'-shad'+'ow:in'+_0x3f0b99(0xb0e)+_0x3f0b99(0x1d5)+_0x3f0b99(0x1ac)+_0x3f0b99(0x84b)+_0x3f0b99(0x3d1)+'5,255'+_0x3f0b99(0x2cf)+';}','XkXsG':'.sk-c'+'ard.o'+_0x3f0b99(0x5ab)+_0x3f0b99(0xa92)+_0x3f0b99(0xa98)+_0x3f0b99(0xe41)+_0x3f0b99(0x7f3)+_0x3f0b99(0xbee)+_0x3f0b99(0x86f)+_0x3f0b99(0xd3c)+_0x3f0b99(0xd26)+_0x3f0b99(0xc38)+_0x3f0b99(0x735)+'\x200\x201p'+'x\x20rgb'+_0x3f0b99(0xd58)+_0x3f0b99(0x1d2)+_0x3f0b99(0x4a9)+_0x3f0b99(0x961),'rCXBv':_0x3f0b99(0x502)+_0x3f0b99(0xc29)+_0x3f0b99(0xdf2)+_0x3f0b99(0xbad)+'g{fon'+'t-siz'+_0x3f0b99(0xc9e)+'x;fon'+_0x3f0b99(0xa1c)+'ght:6'+_0x3f0b99(0xcd0)+_0x3f0b99(0x86b)+_0x3f0b99(0x84b)+_0x3f0b99(0xa8e)+_0x3f0b99(0xe70)+_0x3f0b99(0xad5)+';}','rxgfy':'.sk-m'+'body{'+_0x3f0b99(0x4d6)+_0x3f0b99(0xe25)+_0x3f0b99(0xa0e)+_0x3f0b99(0xe2c)+'}','PpxgJ':_0x3f0b99(0x755)+_0x3f0b99(0x9a2)+_0x3f0b99(0x1b9)+_0x3f0b99(0xccd)+_0x3f0b99(0x3c4)+_0x3f0b99(0x1d9)+_0x3f0b99(0x8d7)+_0x3f0b99(0x380)+_0x3f0b99(0x47c)+_0x3f0b99(0x875)+'6px;w'+_0x3f0b99(0x1c3)+_0x3f0b99(0x89a)+_0x3f0b99(0xdf6)+_0x3f0b99(0x354)+'}','DkFGM':'.sk-h'+'int{d'+_0x3f0b99(0x5b2)+'y:blo'+_0x3f0b99(0x81f)+_0x3f0b99(0x6d1)+'ze:10'+_0x3f0b99(0xa4d)+_0x3f0b99(0x4d7)+_0x3f0b99(0xbdc),'mOFFw':'.sk-s'+_0x3f0b99(0x579)+_0x3f0b99(0xdb2)+_0x3f0b99(0x600)+_0x3f0b99(0xdc8)+'ive;w'+'idth:'+_0x3f0b99(0x619)+_0x3f0b99(0x779)+_0x3f0b99(0xc2d)+'x;bor'+_0x3f0b99(0x22c)+';bord'+_0x3f0b99(0x1d0)+_0x3f0b99(0x670)+_0x3f0b99(0x4f3)+_0x3f0b99(0xb59)+_0x3f0b99(0x632)+_0x3f0b99(0x4e8)+'(255,'+_0x3f0b99(0xb55)+_0x3f0b99(0x901)+'7);cu'+_0x3f0b99(0xaef)+'point'+_0x3f0b99(0xe3f)+'ex:no'+'ne;}','XPsiA':'backg'+_0x3f0b99(0x632)+_0x3f0b99(0x4e8)+_0x3f0b99(0xd00)+_0x3f0b99(0xb55)+'55,.2'+_0x3f0b99(0xac8)+'ansit'+_0x3f0b99(0x4ec)+_0x3f0b99(0xa96)+'2s,ba'+_0x3f0b99(0x367)+'und\x20.'+_0x3f0b99(0x273),'prRUM':'.sk-s'+_0x3f0b99(0x579)+_0x3f0b99(0x2d0)+'-chec'+'ked=\x22'+_0x3f0b99(0x279)+_0x3f0b99(0x58a)+'kgrou'+'nd:rg'+_0x3f0b99(0xe41)+_0x3f0b99(0x922)+_0x3f0b99(0xaa3)+'.25);'+'}','pwFsT':'.sk-s'+'witch'+'[aria'+_0x3f0b99(0x7ed)+'ked=\x22'+_0x3f0b99(0x279)+']::af'+_0x3f0b99(0x573)+_0x3f0b99(0x20d)+_0x3f0b99(0xd1a)+'ackgr'+'ound:'+_0x3f0b99(0x692)+_0x3f0b99(0x9c1),'NkJYX':_0x3f0b99(0x260)+'lider'+_0x3f0b99(0x94d)+_0x3f0b99(0x754)+_0x3f0b99(0x8af)+_0x3f0b99(0x580)+'nable'+'-trac'+'k{hei'+_0x3f0b99(0x69d)+'px;bo'+_0x3f0b99(0x9a6)+'radiu'+_0x3f0b99(0x994)+';','Crmzd':'backg'+_0x3f0b99(0x632)+':line'+_0x3f0b99(0x56e)+_0x3f0b99(0x439)+_0x3f0b99(0x1b2)+'6b9d,'+'#ff6b'+_0x3f0b99(0xbfa)+'\x200\x20/\x20'+'var(-'+'-p,50'+'%)\x2010'+_0x3f0b99(0x5a2)+'-repe'+'at,rg'+_0x3f0b99(0xe41)+_0x3f0b99(0x7f3)+_0x3f0b99(0xbee)+_0x3f0b99(0x3df)+'}','uXCYi':_0x3f0b99(0x39d)+_0x3f0b99(0xb53)+_0x3f0b99(0x8f7)+'elf:f'+_0x3f0b99(0x3d4)+'tart;'+'borde'+_0x3f0b99(0x353)+_0x3f0b99(0xdae)+_0x3f0b99(0x74e)+_0x3f0b99(0xa32)+_0x3f0b99(0xa28)+_0x3f0b99(0x358)+_0x3f0b99(0xe35)+'6px;b'+_0x3f0b99(0x2c8)+'ound:'+'#ff6b'+_0x3f0b99(0xc2b)+_0x3f0b99(0xd2b)+_0x3f0b99(0x1e7),'rVsst':_0x3f0b99(0x925)+_0x3f0b99(0xb3d)+'nt:11'+_0x3f0b99(0xc41)+'5\x20ui-'+_0x3f0b99(0x933)+_0x3f0b99(0x467)+'Conso'+'las,m'+_0x3f0b99(0xd10)+_0x3f0b99(0x6d2)+_0x3f0b99(0x1c3)+_0x3f0b99(0x89a)+':pre-'+_0x3f0b99(0x354)+'word-'+'break'+':brea'+_0x3f0b99(0x6e2)+'d;mar'+'gin:0'+_0x3f0b99(0x89e)+_0x3f0b99(0x2e0)+'75;ma'+_0x3f0b99(0x718)+_0x3f0b99(0x69d)+'80px;'+_0x3f0b99(0x740)+_0x3f0b99(0xb49)+_0x3f0b99(0x702),'JwhSs':_0x3f0b99(0x5db)+'viewB'+_0x3f0b99(0xd43)+_0x3f0b99(0xb24)+'\x2024\x22>'+'<path'+_0x3f0b99(0x804)+'12\x2021'+'c-1.5'+'-2.5-'+_0x3f0b99(0xb8f)+'-4-7.'+_0x3f0b99(0xe58)+'.5\x201.'+_0x3f0b99(0x4c2)+_0x3f0b99(0x455)+_0x3f0b99(0x519)+_0x3f0b99(0x321)+_0x3f0b99(0x591)+_0x3f0b99(0x614)+_0x3f0b99(0x414)+_0x3f0b99(0x32d),'YWTpO':_0x3f0b99(0x5db)+'class'+_0x3f0b99(0xc42)+_0x3f0b99(0x51c)+_0x3f0b99(0xda9)+_0x3f0b99(0x8c2)+'ox=\x220'+_0x3f0b99(0xb24)+_0x3f0b99(0x971)+'<path'+'\x20d=\x22M'+'12\x2021'+_0x3f0b99(0xc0f)+_0x3f0b99(0x4a8)+_0x3f0b99(0xb8f)+_0x3f0b99(0x24b)+'5\x200-2'+_0x3f0b99(0x8d1)+'8-4.5'+'\x204-4.'+_0x3f0b99(0x519)+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+'5-4\x207'+_0x3f0b99(0x32d),'BqtJp':function(_0x8e1e16){return _0x8e1e16();}};var _0xadb686=location['hostn'+_0x3f0b99(0x729)]||'',_0x4ba677=/(^|\.)www\.crazygames\.com$/[_0x3f0b99(0xac9)](_0xadb686),_0x3ac5b0=/(^|\.)games\.crazygames\.com$/['test'](_0xadb686),_0x2d4aa4=/(^|\.)crazygames\.com$/[_0x3f0b99(0xac9)](_0xadb686)&&!_0x4ba677&&!_0x3ac5b0,_0x253423=_0x4ba677?_0x3f0b99(0xa6c)+'l':_0x3ac5b0?_0x3f0b99(0x8dd)+'er':_0x3f0b99(0x29e)+'r';if(!_0x4ba677&&!_0x3ac5b0&&!_0x2d4aa4)return;var _0x22ca32=_0x3f0b99(0xbe0)+'b1',_0x2bad0b=_0x3f0b99(0x8ee)+'ura_s'+_0x3f0b99(0x88f),_0x592969=_0x2fd94f[_0x3f0b99(0x4ce)],_0x41a85d=_0x3f0b99(0x7bf)+'KURA-'+_0x3f0b99(0x74b)+_0x3f0b99(0x64b)+_0x3f0b99(0xbd7)+'=',_0x25c943=_0x2fd94f[_0x3f0b99(0x9e7)];if(_0x3ac5b0){window[_0x3f0b99(0x70b)+_0x3f0b99(0x7b8)+_0x3f0b99(0x8e0)+'r'](_0x3f0b99(0x437)+'ge',function(_0x5b5e1b){var _0x4f622f=_0x3f0b99,_0x33e4e7={'vgUnR':function(_0x1c98e5,_0x515fd7){return _0x1c98e5(_0x515fd7);}},_0x4e16a1=_0x5b5e1b[_0x4f622f(0x2b0)];if(!_0x4e16a1||_0x4e16a1[_0x4f622f(0x8ee)+'ura']!==_0x2bad0b)return;try{if(window['paren'+'t']&&window['paren'+'t']!==window)window[_0x4f622f(0x203)+'t']['postM'+_0x4f622f(0x4fc)+'e'](_0x4e16a1,'*');if(window['top']&&_0x2fd94f[_0x4f622f(0x555)](window[_0x4f622f(0xd86)],window))window[_0x4f622f(0xd86)][_0x4f622f(0x970)+'essag'+'e'](_0x4e16a1,'*');}catch(_0x22bac0){}if(_0x4e16a1&&_0x4e16a1['kind']===_0x4f622f(0x23d))try{var _0x391ad5=document[_0x4f622f(0x320)+'Selec'+_0x4f622f(0xb62)+'l'](_0x4f622f(0x542)+'e');for(var _0xcffd9=-0x23a9+-0x1398+-0x17*-0x267;_0xcffd9<_0x391ad5[_0x4f622f(0x35a)+'h'];_0xcffd9++){if(_0x4f622f(0xe6c)==='CqLks')try{_0x33e4e7['vgUnR'](_0x4852d4,_0x372a1d);}catch(_0x332cda){}else try{if(_0x391ad5[_0xcffd9][_0x4f622f(0x9e1)+_0x4f622f(0x42a)+_0x4f622f(0x68c)])_0x391ad5[_0xcffd9][_0x4f622f(0x9e1)+_0x4f622f(0x42a)+'dow'][_0x4f622f(0x970)+_0x4f622f(0x4fc)+'e'](_0x4e16a1,'*');}catch(_0x112c55){}}}catch(_0x3ee4b2){}}),console['log'](_0x2fd94f[_0x3f0b99(0x776)],_0x3f0b99(0x621)+':'+_0x22ca32);return;}if(_0x4ba677){console[_0x3f0b99(0x395)](_0x2fd94f[_0x3f0b99(0xbd6)],_0x2fd94f[_0x3f0b99(0xa9c)](_0x3f0b99(0x621)+':'+_0x22ca32,_0x2fd94f[_0x3f0b99(0x449)]),{'host':_0xadb686});var _0x1b157f={'set':function(){},'command':function(){}};function _0x41e6ff(_0x2dd174,_0x5b18da){var _0x126ff1=_0x3f0b99,_0x12ef26={'NHmHi':function(_0xe21193,_0x1793cd,_0x3ee61d){return _0xe21193(_0x1793cd,_0x3ee61d);},'FdUXg':'div','VWnwj':_0x2fd94f[_0x126ff1(0xb13)],'lPzCH':function(_0x4a4ff2,_0x26cecc){return _0x4a4ff2===_0x26cecc;},'LRCdb':_0x2fd94f['sbbuI']},_0x2616b0={'__sakura':_0x2bad0b,'kind':_0x126ff1(0x23d),'cmd':_0x2dd174,'arg':_0x5b18da};try{if(_0x2fd94f['RzoYU']!==_0x126ff1(0x34d)){var _0x2138dc=document['query'+_0x126ff1(0x36e)+_0x126ff1(0xb62)+'l'](_0x126ff1(0x542)+'e');for(var _0x234db1=0x1*0xf14+-0xa48+-0x266*0x2;_0x234db1<_0x2138dc[_0x126ff1(0x35a)+'h'];_0x234db1++){try{if(_0x2fd94f[_0x126ff1(0xd54)]==='mwUUl')_0x31bdf4[_0x126ff1(0xb40)]=null,_0x404b5a[_0x126ff1(0x7cc)]=null,_0x32de4e[_0x126ff1(0xdae)]=_0x2fd94f[_0x126ff1(0xcfb)]('unres'+_0x126ff1(0x373)+'\x20(',_0x3365f4?_0x2fd94f['nultU']:_0x2fd94f[_0x126ff1(0x960)])+')';else{if(_0x2138dc[_0x234db1][_0x126ff1(0x9e1)+'ntWin'+_0x126ff1(0x68c)])_0x2138dc[_0x234db1]['conte'+'ntWin'+_0x126ff1(0x68c)][_0x126ff1(0x970)+_0x126ff1(0x4fc)+'e'](_0x2616b0,'*');}}catch(_0x481207){}}}else return _0x378941[_0x126ff1(0x655)+'e']=_0x306f7e['sourc'+'e']||'insta'+'ntiat'+_0x126ff1(0x43f)+'xport'+_0x126ff1(0x9b3)+'ory',new _0x45da87(_0xff44a5[_0x126ff1(0xd32)+'r']);}catch(_0x5982f0){}try{var _0x5570e9=new BroadcastChannel(_0x2fd94f[_0x126ff1(0xb95)]);_0x5570e9[_0x126ff1(0x970)+_0x126ff1(0x4fc)+'e'](_0x2616b0),setTimeout(function(){var _0x447e51=_0x126ff1,_0x222146={'QgCAb':function(_0x1a330e,_0x1249d7,_0x6b6525){return _0x12ef26['NHmHi'](_0x1a330e,_0x1249d7,_0x6b6525);},'vuoWL':_0x12ef26['FdUXg'],'GafgA':'sk-ca'+'rd','NlbOB':function(_0x22640e,_0x45c229,_0x49866d){return _0x22640e(_0x45c229,_0x49866d);},'owJaw':_0x12ef26[_0x447e51(0x946)],'LgaMC':'</str'+_0x447e51(0xb12)};try{if(_0x12ef26['lPzCH']('XLPIF',_0x12ef26[_0x447e51(0xac3)]))_0x5570e9[_0x447e51(0x505)]();else{var _0x3af1fe=('5|0|9'+'|8|6|'+_0x447e51(0x5e4)+_0x447e51(0x7ae))[_0x447e51(0xae3)]('|'),_0x4f1694=0x45b+0x2558+0x857*-0x5;while(!![]){switch(_0x3af1fe[_0x4f1694++]){case'0':var _0x27d817=_0x222146[_0x447e51(0x1fa)](_0x401cc6,'div','sk-ca'+_0x447e51(0x631)+'ad');continue;case'1':_0x397e6a['head']=_0x15b011;continue;case'2':return _0x397e6a;case'3':_0x397e6a[_0x447e51(0x58c)]=_0x1e85a7;continue;case'4':_0x397e6a[_0x447e51(0xd7e)+'dChil'+'d'](_0x27d817);continue;case'5':var _0x397e6a=_0x5c9597(_0x222146[_0x447e51(0x479)],_0x222146['GafgA']+(_0x5410ee?_0x447e51(0x99b):''));continue;case'6':var _0x1e85a7=_0x222146[_0x447e51(0xd4f)](_0x3e203c,_0x222146['vuoWL'],_0x222146['owJaw']);continue;case'7':_0x397e6a[_0x447e51(0xd7e)+_0x447e51(0xcc3)+'d'](_0x1e85a7);continue;case'8':_0x27d817[_0x447e51(0xd7e)+_0x447e51(0xcc3)+'d'](_0x15b011);continue;case'9':var _0x15b011=_0x7c85a4('div',_0x447e51(0x848)+'rd-ti'+_0x447e51(0x9b5),_0x447e51(0x794)+_0x447e51(0xc72)+_0x383910+_0x222146['LgaMC']);continue;}break;}}}catch(_0x3d800a){}},0x2d3+0x24e8+-0x26c1);}catch(_0x42fb3d){}}var _0x7bcb8e=_0x2fd94f['zOSNc'];function _0x52bea3(){try{return localStorage['getIt'+'em'](_0x7bcb8e)==='1';}catch(_0x59deb4){return![];}}function _0x41963e(_0x3b9c24){var _0x16b73e=_0x3f0b99,_0xf84349={'RMXZu':function(_0xbe2c4a){return _0xbe2c4a();},'ZaZPZ':_0x2fd94f[_0x16b73e(0x991)],'mFiyW':'ESP\x20o'+'ff','nNUxY':_0x16b73e(0x808)+'ap','OOHgo':function(_0x18f3a4,_0x3dc202){return _0x18f3a4+_0x3dc202;},'HqNOV':function(_0x1a19b8,_0x2be3ab,_0x2b577f){return _0x1a19b8(_0x2be3ab,_0x2b577f);},'QuAtI':function(_0x3a7a5e,_0x1db0cb){return _0x3a7a5e+_0x1db0cb;},'eJunx':function(_0x392862,_0x16fb88){return _0x2fd94f['WhFxC'](_0x392862,_0x16fb88);},'uXwLk':_0x2fd94f[_0x16b73e(0x839)],'TiKKE':function(_0x327bf0,_0x1a7cfd){return _0x327bf0&_0x1a7cfd;},'vipdL':_0x16b73e(0xe65),'FPRFE':_0x2fd94f[_0x16b73e(0xb16)],'WAujn':function(_0x2d93d0,_0x3001bb){return _0x2d93d0^_0x3001bb;},'foteL':function(_0x49b0dd,_0xc0e8ef){var _0x51d8dd=_0x16b73e;return _0x2fd94f[_0x51d8dd(0x555)](_0x49b0dd,_0xc0e8ef);},'RHIsW':function(_0x3caf0b,_0x542116,_0x433b02){return _0x3caf0b(_0x542116,_0x433b02);},'Gyare':function(_0x1cbe5b,_0x47e87d){return _0x1cbe5b+_0x47e87d;},'mZFup':'f32','dEKmB':function(_0x2cb87a,_0x44dbf8){return _0x2fd94f['LYHZg'](_0x2cb87a,_0x44dbf8);}};try{_0x3b9c24?localStorage['setIt'+'em'](_0x7bcb8e,'1'):localStorage[_0x16b73e(0xa48)+'eItem'](_0x7bcb8e);}catch(_0x322695){}try{if(_0x16b73e(0xbb5)!==_0x16b73e(0xbb5))try{var _0x1e3cee=(_0x16b73e(0xd3d)+'|4|3|'+_0x16b73e(0x63f))['split']('|'),_0x1f8c4a=0x9*-0x1+-0x1*-0x7f9+0x7f0*-0x1;while(!![]){switch(_0x1e3cee[_0x1f8c4a++]){case'0':if(_0xfb5be4['boxes']&&!_0xf84349[_0x16b73e(0xe18)](_0x15f5c1))_0x5e361f[_0x16b73e(0x664)]=![];continue;case'1':_0x5efff1[_0x16b73e(0x76c)]['backg'+'round']=_0x44541d['on']?_0x3f3f55:_0xf84349['ZaZPZ'];continue;case'2':var _0x5efff1=_0xea8310&&_0x401303['esp'];continue;case'3':if(_0x18e503!==_0x5efff1[_0x16b73e(0xe45)+_0x16b73e(0xb09)+'t'])_0x5efff1[_0x16b73e(0xe45)+'onten'+'t']=_0x18e503;continue;case'4':var _0x18e503=!_0x29a407['on']?_0xf84349['mFiyW']:_0x52ecd3['boxes']?_0x16b73e(0xc4e)+_0x16b73e(0x6fe):_0xf84349[_0x16b73e(0x88e)];continue;case'5':if(!_0x5efff1)return;continue;case'6':_0x5efff1['style'][_0x16b73e(0x621)]=_0x441401['on']?'#2a0f'+'1b':_0x16b73e(0x431)+'f5';continue;}break;}}catch(_0x41f3b6){}else{var _0xb75c7d=document[_0x16b73e(0xb0f)+'ement'+'ById'](_0x16b73e(0x566)+_0x16b73e(0x2e6)+'v2');if(_0xb75c7d)_0xb75c7d[_0x16b73e(0xa48)+'e']();}}catch(_0xc9ae3d){}try{if(_0x2fd94f[_0x16b73e(0x6b2)]!==_0x16b73e(0x2e5)){var _0x194ed3=document[_0x16b73e(0xb0f)+'ement'+'ById'](_0x2fd94f['WPLjP']);if(_0x2fd94f[_0x16b73e(0xbc4)](_0x3b9c24,!_0x194ed3)&&document[_0x16b73e(0x58c)]){var _0x3713d2=document[_0x16b73e(0x8b1)+_0x16b73e(0xaf8)+'ent'](_0x2fd94f[_0x16b73e(0xaae)]);_0x3713d2['id']='sakur'+'a-sw-'+'v2-ta'+'b',_0x3713d2[_0x16b73e(0x76c)][_0x16b73e(0x6e5)+'xt']=_0x2fd94f[_0x16b73e(0x2d3)]+('backg'+_0x16b73e(0x632)+_0x16b73e(0x4e8)+_0x16b73e(0x849)+_0x16b73e(0x2df)+_0x16b73e(0x81e)+_0x16b73e(0xdae)+':1px\x20'+_0x16b73e(0x615)+'\x20rgba'+_0x16b73e(0xd00)+'143,1'+'77,.5'+_0x16b73e(0xc56)+_0x16b73e(0x930))+_0x22ca32+';'+(_0x16b73e(0xb3b)+'r-rad'+'ius:9'+_0x16b73e(0x4f3)+_0x16b73e(0x4d6)+'ng:4p'+'x\x2012p'+_0x16b73e(0xc2e)+'t:11p'+'x/1.4'+'\x20ui-m'+'onosp'+_0x16b73e(0xc8f)+'onsol'+_0x16b73e(0x947)+'nospa'+_0x16b73e(0xce2)),_0x3713d2[_0x16b73e(0xe45)+_0x16b73e(0xb09)+'t']='sakur'+'a',_0x3713d2[_0x16b73e(0x9bb)+'ck']=function(){var _0x404495=_0x16b73e;_0x2fd94f[_0x404495(0xc8d)](_0x41963e,![]),_0x519e21();},document[_0x16b73e(0x58c)]['appen'+'dChil'+'d'](_0x3713d2);}else!_0x3b9c24&&_0x194ed3&&_0x194ed3['remov'+'e']();}else{var _0x3a1a84=('10|6|'+_0x16b73e(0x553)+'0|12|'+'3|4|7'+_0x16b73e(0xaf9)+'|13|2'+_0x16b73e(0x523))[_0x16b73e(0xae3)]('|'),_0x32be19=-0x7cb+0x1b*-0xd7+0x1e78;while(!![]){switch(_0x3a1a84[_0x32be19++]){case'0':var _0x38d134=_0x841acd(_0xf84349['OOHgo'](_0x166c4d,_0x4bf7b6)+_0x413655['inite'+'d'],'u8');continue;case'1':return{'real':_0x5bfe4c,'fake':_0x4d6454,'act':_0x6f885a,'init':_0x38d134,'key':_0x2a1a2d,'hidden':_0x30cbd2};case'2':var _0x5bfe4c;continue;case'3':var _0x6f885a=_0xf84349['HqNOV'](_0x15dd48,_0xf84349['QuAtI'](_0x5caa44,_0x2c4693)+_0x413655['activ'+'e'],'u8');continue;case'4':if(_0x2a1a2d===_0x28dad9||_0x30cbd2===_0x35fd10||_0xf84349[_0x16b73e(0x303)](_0x4d6454,_0x52b9a0)||_0xf84349[_0x16b73e(0x303)](_0x6f885a,_0x53f2ad))return null;continue;case'5':var _0x30cbd2=_0x1abfb4(_0xef1ae2+_0x3526a0+_0x413655[_0x16b73e(0xd19)+'n'],_0xf84349['uXwLk']);continue;case'6':if(!_0x413655)return null;continue;case'7':_0x2a1a2d&=-0xfb+0x11d9+-0xfdf;continue;case'8':_0x38d134=_0xf84349['TiKKE'](_0x38d134||-0x21ea*0x1+0x1b96+0x654,-0x1306+0x42a+0xedd);continue;case'9':if(_0xf84349['eJunx'](_0x4a4b0f,_0xf84349[_0x16b73e(0x1a0)]))_0x5bfe4c=_0x54b836(_0x30cbd2^_0x2a1a2d);else{if(_0x3ed538===_0xf84349[_0x16b73e(0xa37)])_0x5bfe4c=_0xf84349['WAujn'](_0x30cbd2,_0x2a1a2d)|-0x399+0x14ec+-0x1153;else _0x5bfe4c=_0xf84349['foteL']((_0x30cbd2^_0x2a1a2d)&-0xabd+0x127e+0x15a*-0x5,0x7e0+-0x11*-0x145+-0x1d75*0x1)?-0xaea+0x616*0x1+0x4d5:0x7ac+0x1c*-0x55+0x2*0xd0;}continue;case'10':var _0x413655=_0x166b26[_0x4f4976];continue;case'11':_0x30cbd2|=0x644+0x1d1f+0x1*-0x2363;continue;case'12':var _0x4d6454=_0xf84349['RHIsW'](_0x103be6,_0xf84349[_0x16b73e(0xc3a)](_0x32bb38,_0x1b3063)+_0x413655[_0x16b73e(0xba6)],_0x1d361a===_0x16b73e(0xe65)?_0xf84349[_0x16b73e(0x9a5)]:_0x50d1cf===_0xf84349[_0x16b73e(0xa37)]?_0xf84349['uXwLk']:'u8');continue;case'13':_0x6f885a&=-0x7c0+0x3b*-0xa4+-0x45*-0xa9;continue;case'14':var _0x2a1a2d=_0xcbc756(_0xf84349[_0x16b73e(0xc11)](_0x52474b+_0x5194ed,_0x413655[_0x16b73e(0xcd9)]),'u8');continue;}break;}}}catch(_0x5acc66){}}function _0x2f0832(){var _0x47a391=_0x3f0b99;if(_0x52bea3())return null;var _0x5c1e16=document['getEl'+'ement'+_0x47a391(0x2aa)](_0x2fd94f[_0x47a391(0xc09)]);if(_0x5c1e16)return _0x5c1e16;if(!document[_0x47a391(0x58c)]||!document[_0x47a391(0x58c)][_0x47a391(0xd7e)+_0x47a391(0xcc3)+'d'])return null;try{if(!document[_0x47a391(0xb0f)+_0x47a391(0x62c)+'ById'](_0x47a391(0x566)+_0x47a391(0x2e6)+_0x47a391(0x7d5)+'s')){if(_0x47a391(0x63c)!==_0x47a391(0x63c))_0x8a63ed[_0x47a391(0x9a9)+_0x47a391(0xe47)]['push'](_0x2fd94f['uezYk'](_0x2fd94f[_0x47a391(0x513)](_0x2fd94f[_0x47a391(0x5c2)]+_0x2fab61['hooks'+_0x47a391(0x931)+_0x47a391(0xd12)],_0x47a391(0xcf6))+_0x30703a['hooks'+_0x47a391(0x30c)],_0x2fd94f[_0x47a391(0xd37)])+('(this'+',\x20Met'+_0x47a391(0x851)+'fo*)\x20'+'->\x20vo'+_0x47a391(0x501)+_0x47a391(0xe4b)+_0x47a391(0x2a1)+'ch\x20th'+'is\x20bu'+_0x47a391(0x20a)));else{var _0x380ce7=document[_0x47a391(0x8b1)+'eElem'+'ent'](_0x2fd94f[_0x47a391(0x4ab)]);_0x380ce7['id']=_0x2fd94f['zXTna'],_0x380ce7[_0x47a391(0xe45)+'onten'+'t']=_0x47a391(0x4a7)+_0x47a391(0x3f7)+_0x47a391(0x34b)+_0x47a391(0xc3e)+'itial'+'}',(document['head']||document[_0x47a391(0x38d)+'entEl'+_0x47a391(0x62c)])[_0x47a391(0xd7e)+'dChil'+'d'](_0x380ce7);}}return _0x5c1e16=document[_0x47a391(0x8b1)+'eElem'+_0x47a391(0x2f1)](_0x47a391(0xa60)),_0x5c1e16['id']=_0x47a391(0x566)+_0x47a391(0x2e6)+'v2',document['body']['appen'+_0x47a391(0xcc3)+'d'](_0x5c1e16),_0x5c1e16;}catch(_0x2168de){return null;}}function _0x519e21(){var _0x1135c8=_0x3f0b99,_0x4a5e44=_0x2f0832();if(!_0x4a5e44)return _0x1b157f;if(_0x4a5e44['datas'+'et']['api'])return _0x4a5e44['api'];try{return _0x1316a1(_0x4a5e44);}catch(_0x366061){return _0x4a5e44['datas'+'et'][_0x1135c8(0xdb6)]='1',_0x4a5e44[_0x1135c8(0xdb6)]=_0x1b157f,console['warn']('%c[sa'+'kura]'+'\x20pane'+_0x1135c8(0x777)+'abled','color'+':'+_0x22ca32,_0x366061),_0x1b157f;}}function _0x1316a1(_0x3ca8c6){var _0x53f997=_0x3f0b99,_0x1a845d={'yUgLT':function(_0x25d730,_0x87645a){return _0x2fd94f['tHlNt'](_0x25d730,_0x87645a);},'WFClE':_0x2fd94f['HdrhP'],'bugbi':function(_0x29bd7e,_0x83d2ac){return _0x29bd7e+_0x83d2ac;},'uKFFF':function(_0x5646c0,_0x16007f){var _0x1b9771=_0x59a2;return _0x2fd94f[_0x1b9771(0xe5e)](_0x5646c0,_0x16007f);},'TXDKI':_0x2fd94f[_0x53f997(0x1a4)],'QmvJP':_0x53f997(0x27c)+'e\x20rem'+'ainin'+'g\x20sus'+'pects'+'\x20are:'+'\x0a\x0a','IetHr':'\x20\x203.\x20'+'Both\x20'+'sakur'+_0x53f997(0xb80)+_0x53f997(0x9b8)+_0x53f997(0x33e)+_0x53f997(0xd8c)+'AND\x20t'+_0x53f997(0x87e)+_0x53f997(0xbde)+'g\x20scr'+_0x53f997(0xb0b)+'re\x0a','IjyNV':_0x2fd94f[_0x53f997(0x8b4)],'FvdFF':function(_0x3657e,_0x42dea4){return _0x3657e+_0x42dea4;},'DKOsU':_0x2fd94f['gaYei'],'aUShI':function(_0x390070,_0x345c2e,_0x3ac930){return _0x390070(_0x345c2e,_0x3ac930);},'gXIIO':_0x53f997(0x7b0)+'|5|3|'+'0|2','rxxEv':function(_0x472b36,_0xa02740){return _0x472b36===_0xa02740;},'Pmgbo':_0x2fd94f[_0x53f997(0xbd9)],'vbAZd':_0x53f997(0x9af)+'·\x20','HxOnI':function(_0x2d9849,_0x4f9147){var _0x2b897f=_0x53f997;return _0x2fd94f[_0x2b897f(0x806)](_0x2d9849,_0x4f9147);},'GyLJI':_0x2fd94f['MJLax'],'xYlre':'#ffd4'+'8a','lxwld':function(_0x2b6b3a,_0x23227c){return _0x2fd94f['DNaEv'](_0x2b6b3a,_0x23227c);},'RIlRk':_0x2fd94f['kmEos'],'xTOSF':function(_0x275540,_0x239bec){return _0x275540+_0x239bec;},'yrLwK':function(_0x54d5f5,_0x185ac3){return _0x2fd94f['tLlKQ'](_0x54d5f5,_0x185ac3);},'GScau':'armin'+'g\x20·\x20','OrLmn':_0x2fd94f[_0x53f997(0x1aa)],'MxrBF':_0x53f997(0x911)+_0x53f997(0x7e3),'UOanG':'Speed'+'\x20off','aiFHH':_0x2fd94f['kREbV'],'UnEJW':function(_0x226dc6,_0x2eef79){return _0x226dc6===_0x2eef79;},'GUSEO':_0x53f997(0x621)+':','cDMjB':function(_0x53ba3f,_0x178c17){return _0x53ba3f+_0x178c17;}};_0x3ca8c6['style'][_0x53f997(0x6e5)+'xt']=_0x2fd94f[_0x53f997(0xc5d)](_0x2fd94f['QSWym']+(_0x53f997(0xb59)+_0x53f997(0x632)+':#150'+'c1d;c'+_0x53f997(0xa29)+_0x53f997(0x431)+_0x53f997(0x736)+_0x53f997(0x693)+'1px\x20s'+_0x53f997(0x572)+'rgba('+'255,1'+_0x53f997(0xc7f)+_0x53f997(0x65e)+';bord'+_0x53f997(0x1d0)+_0x53f997(0x670)+_0x53f997(0xcf0))+_0x2fd94f[_0x53f997(0x9e4)],_0x53f997(0x2b3)+_0x53f997(0xa40)+_0x53f997(0x7e1)+_0x53f997(0x822)+'recti'+_0x53f997(0x525)+'lumn;'+'overf'+_0x53f997(0x8f3)+_0x53f997(0x972)+';'),_0x3ca8c6['inner'+'HTML']=_0x2fd94f['LYHZg'](_0x2fd94f[_0x53f997(0x1fb)](_0x2fd94f[_0x53f997(0xce8)](_0x2fd94f['loLzT'](_0x2fd94f[_0x53f997(0xb08)](_0x2fd94f['LYHZg'](_0x2fd94f[_0x53f997(0x513)](_0x2fd94f[_0x53f997(0xc98)](_0x2fd94f[_0x53f997(0xe29)](_0x2fd94f['hHHxi'](_0x2fd94f['HBQZC'](_0x53f997(0x530)+_0x53f997(0x76c)+_0x53f997(0x2f4)+_0x53f997(0x358)+'9px\x201'+_0x53f997(0x715)+_0x53f997(0xdae)+_0x53f997(0x8bc)+_0x53f997(0xc00)+_0x53f997(0xe60)+_0x53f997(0x5e0)+_0x53f997(0xe41)+_0x53f997(0x801)+_0x53f997(0xaf2)+_0x53f997(0x700)+'ispla'+'y:fle'+_0x53f997(0xddd)+':8px;'+_0x53f997(0x87d)+_0x53f997(0xb0a)+'s:cen'+'ter;f'+'lex:0'+_0x53f997(0x981)+_0x53f997(0x550)+_0x2fd94f['rqfwI']+_0x22ca32,_0x53f997(0x47b)+'ura\x20·'+'\x20skil'+_0x53f997(0x47f)+_0x53f997(0xcfd)),_0x2fd94f[_0x53f997(0x884)])+('<span'+'\x20id=\x22'+_0x53f997(0xaf5)+'tatus'+'\x22\x20sty'+'le=\x22c'+_0x53f997(0xa29)+_0x53f997(0x8a2)+'c9\x22>w'+_0x53f997(0xe43)+_0x53f997(0x53f)+_0x53f997(0x60e)+'\x20fram'+'e…</s'+'pan>'),_0x2fd94f[_0x53f997(0xdbc)]),_0x22ca32)+_0x2fd94f['EuVGA'],_0x53f997(0x91f)+'on\x20id'+'=\x22sw2'+_0x53f997(0xe71)+_0x53f997(0x7c7)+_0x53f997(0xcee)+'\x22back'+_0x53f997(0x32a)+_0x53f997(0x812)+_0x53f997(0xb68)+'ent;b'+'order'+_0x53f997(0x1dd)+'solid'+_0x53f997(0x6f7)+'(255,'+_0x53f997(0x527)+'77,.4'+_0x53f997(0xc56)+'or:#f'+_0x53f997(0x2d9)+';bord'+_0x53f997(0x1d0)+_0x53f997(0x670)+'7px;p'+'addin'+'g:4px'+'\x208px;'+_0x53f997(0x188)+_0x53f997(0xc9d)+_0x53f997(0x597)+'\x22>ope'+_0x53f997(0xbe7)+_0x53f997(0x4ba)),_0x2fd94f[_0x53f997(0xa66)])+('</div'+'>')+(_0x53f997(0x530)+'id=\x22s'+'w2-bo'+_0x53f997(0x813)+_0x53f997(0xcee)+_0x53f997(0x453)+_0x53f997(0x910)+_0x53f997(0xc08)+'>')+('<div\x20'+'style'+_0x53f997(0x2f4)+_0x53f997(0x358)+_0x53f997(0xe35)+'2px;b'+'order'+_0x53f997(0x8bc)+'om:1p'+_0x53f997(0xe60)+_0x53f997(0x5e0)+_0x53f997(0xe41)+_0x53f997(0x801)+_0x53f997(0xaf2)+'.18);'+'displ'+_0x53f997(0xa40)+_0x53f997(0x235)+_0x53f997(0x727)+_0x53f997(0x40b)+_0x53f997(0x5fe)+'ms:ce'+'nter;'+_0x53f997(0xb3e)+'0\x200\x20a'+'uto;f'+'lex-w'+'rap:w'+_0x53f997(0x7a6)+'>'),_0x53f997(0x91f)+_0x53f997(0x1ca)+'=\x22sw2'+'-spee'+_0x53f997(0x198)+_0x53f997(0xcbc)+'backg'+_0x53f997(0x632)+':tran'+'spare'+'nt;bo'+'rder:'+'1px\x20s'+'olid\x20'+_0x53f997(0xc39)+'255,1'+_0x53f997(0xc7f)+'7,.4)'+_0x53f997(0x241)+_0x53f997(0xd89)+'eef5;'+'borde'+'r-rad'+'ius:7'+_0x53f997(0xb07)+_0x53f997(0x9ff)+_0x53f997(0xce9)+'10px;'+_0x53f997(0x188)+'r:poi'+'nter;'+_0x53f997(0x227)+_0x53f997(0x7f6)+'f</bu'+_0x53f997(0x4ba))+('<inpu'+_0x53f997(0x34c)+'\x22sw2-'+_0x53f997(0x891)+_0x53f997(0xb6b)+'pe=\x22r'+_0x53f997(0x4a2)+'\x20min='+'\x221\x22\x20m'+_0x53f997(0x1b0)+_0x53f997(0x348)+_0x53f997(0x55c)+_0x53f997(0x79e)+_0x53f997(0x8c1)+_0x53f997(0x1fe)+_0x53f997(0xcbc)+'width'+_0x53f997(0x62a)+_0x53f997(0xcdf)+_0x53f997(0x450)+_0x53f997(0xa29))+_0x22ca32,_0x53f997(0xd38))+('<span'+'\x20id=\x22'+_0x53f997(0xb5b)+'actor'+'label'+'\x22\x20sty'+_0x53f997(0x66b)+_0x53f997(0xa29)+'#bda9'+'c9;mi'+'n-wid'+'th:34'+'px;\x22>'+'1.0x<'+'/span'+'>'),_0x2fd94f[_0x53f997(0x914)])+(_0x53f997(0x858)+'\x20id=\x22'+'sw2-h'+'int\x22\x20'+_0x53f997(0x76c)+_0x53f997(0x286)+_0x53f997(0x795)+'d7a99'+_0x53f997(0x472)+'twice'+'\x20whil'+_0x53f997(0x2b6)+_0x53f997(0x2b1)+'/\x20spr'+'intin'+_0x53f997(0xd2c)+'umpin'+_0x53f997(0x916)+_0x53f997(0x2e4)+_0x53f997(0x6ca)+'ield\x20'+'is\x20wh'+'ich.<'+'/span'+'>')+(_0x53f997(0xcd4)+'>'),_0x53f997(0x4ea)+_0x53f997(0xc6e)+'w2-ou'+_0x53f997(0xc7a)+_0x53f997(0xcbc)+_0x53f997(0x5fc)+'n:0;p'+'addin'+_0x53f997(0x9ef)+_0x53f997(0x6bf)+_0x53f997(0x7df)+_0x53f997(0x5de)+_0x53f997(0x9d7)+_0x53f997(0x411)+':1\x201\x20'+_0x53f997(0xc97)+'white'+_0x53f997(0x190)+'e:pre'+_0x53f997(0xa44)+';word'+_0x53f997(0x484)+_0x53f997(0xd16)+_0x53f997(0xda6)+_0x53f997(0x6d5)+_0x53f997(0x66a)+_0x53f997(0x28e)+';')+_0x2fd94f['qQvTD'],'</div'+'>');var _0xb5df3d=_0x3ca8c6[_0x53f997(0x320)+_0x53f997(0x36e)+'tor'](_0x2fd94f['qONNf']),_0x403432=_0x3ca8c6[_0x53f997(0x320)+'Selec'+'tor'](_0x2fd94f[_0x53f997(0x93f)]),_0x69f36a=_0x3ca8c6[_0x53f997(0x320)+_0x53f997(0x36e)+_0x53f997(0x4fd)](_0x2fd94f['MeMcL']),_0x17d115=_0x3ca8c6[_0x53f997(0x320)+_0x53f997(0x36e)+'tor'](_0x2fd94f['MCmWb']),_0x280485=_0x3ca8c6['query'+'Selec'+_0x53f997(0x4fd)](_0x2fd94f[_0x53f997(0xaad)]),_0x4114a9=_0x3ca8c6[_0x53f997(0x320)+_0x53f997(0x36e)+_0x53f997(0x4fd)](_0x2fd94f['CSYNw']),_0x472837=_0x3ca8c6[_0x53f997(0x320)+'Selec'+_0x53f997(0x4fd)](_0x53f997(0x28c)+_0x53f997(0x58c)),_0xe0154c=_0x3ca8c6[_0x53f997(0x320)+'Selec'+'tor'](_0x2fd94f[_0x53f997(0x8e4)]),_0x1b16af=_0x3ca8c6[_0x53f997(0x320)+'Selec'+'tor'](_0x53f997(0x28c)+_0x53f997(0x9e0)),_0x47325=_0x3ca8c6[_0x53f997(0x320)+_0x53f997(0x36e)+'tor']('#sw2-'+_0x53f997(0x891)+'r'),_0x17452d=_0x3ca8c6['query'+'Selec'+_0x53f997(0x4fd)](_0x2fd94f['bpkJO']),_0x146ea6=_0x3ca8c6[_0x53f997(0x320)+_0x53f997(0x36e)+_0x53f997(0x4fd)]('#sw2-'+'hint'),_0x33309e=null,_0x3fe82b=![];function _0x575a7f(){var _0x22589c=_0x53f997;if(_0x472837)_0x472837[_0x22589c(0x76c)]['displ'+'ay']=_0x3fe82b?'':_0x2fd94f['EPSAq'];if(_0x4114a9)_0x4114a9['textC'+'onten'+'t']=_0x3fe82b?_0x2fd94f[_0x22589c(0x48c)]:_0x2fd94f[_0x22589c(0x567)];_0x3ca8c6[_0x22589c(0x76c)][_0x22589c(0x1bd)]=_0x3fe82b?_0x2fd94f[_0x22589c(0x44a)]:_0x2fd94f[_0x22589c(0x3bf)],_0x3ca8c6[_0x22589c(0x76c)]['backg'+_0x22589c(0x632)]=_0x3fe82b?_0x22589c(0x592)+'1d':'rgba('+_0x22589c(0x2a2)+_0x22589c(0x3f1)+'9)';}if(_0x4114a9)_0x4114a9['oncli'+'ck']=function(){_0x3fe82b=!_0x3fe82b,_0x575a7f();};_0x2fd94f['EhmGG'](_0x575a7f);if(_0x280485)_0x280485[_0x53f997(0x9bb)+'ck']=function(){_0x1a845d['yUgLT'](_0x41963e,!![]);};if(_0xe0154c)_0xe0154c[_0x53f997(0x9bb)+'ck']=function(){var _0x53e22b=_0x53f997;_0x41e6ff(_0x53e22b(0x1be)+_0x53e22b(0xcc9));};var _0xe295b6=![];function _0x2d8e9a(){var _0x57f2cc=_0x53f997;if('vDEmU'===_0x2fd94f[_0x57f2cc(0x86e)])_0x41e6ff(_0x2fd94f[_0x57f2cc(0xd98)],{'on':_0xe295b6,'factor':_0x2fd94f[_0x57f2cc(0x7f5)](parseFloat,_0x47325[_0x57f2cc(0x244)])||-0x5e3*-0x1+0x1009*0x1+-0x1f*0xb5});else return null;}if(_0x1b16af)_0x1b16af[_0x53f997(0x9bb)+'ck']=function(){var _0x3dbb4a=_0x53f997,_0x395d51=_0x2fd94f[_0x3dbb4a(0x797)][_0x3dbb4a(0xae3)]('|'),_0x3e3e25=-0x7a1+0xd5*0x16+-0xaad;while(!![]){switch(_0x395d51[_0x3e3e25++]){case'0':_0xe295b6=!_0xe295b6;continue;case'1':_0x1b16af[_0x3dbb4a(0xe45)+_0x3dbb4a(0xb09)+'t']=_0xe295b6?'Speed'+_0x3dbb4a(0x7e3):_0x2fd94f['HDTgf'];continue;case'2':_0x2d8e9a();continue;case'3':_0x1b16af[_0x3dbb4a(0x76c)][_0x3dbb4a(0xb59)+'round']=_0xe295b6?_0x22ca32:_0x3dbb4a(0x43c)+_0x3dbb4a(0x203)+'t';continue;case'4':_0x1b16af[_0x3dbb4a(0x76c)][_0x3dbb4a(0x621)]=_0xe295b6?_0x3dbb4a(0xa0d)+'1b':'#f7ee'+'f5';continue;}break;}};if(_0x47325)_0x47325[_0x53f997(0x21a)+'ut']=function(){var _0x580b0=_0x53f997;if(_0x17452d)_0x17452d[_0x580b0(0xe45)+'onten'+'t']=(parseFloat(_0x47325['value'])||0xe*-0xc7+-0x623*0x6+0x3b*0xcf)[_0x580b0(0x299)+'ed'](-0x1b7*-0x12+-0x461+-0x1a7c)+'x';_0x2d8e9a();};if(_0x17d115)_0x17d115['oncli'+'ck']=function(){var _0xc6254b=_0x53f997,_0x8c85ee={'ESEqO':function(_0x292adb){var _0x5a3960=_0x59a2;return _0x2fd94f[_0x5a3960(0x98d)](_0x292adb);},'nDGlO':function(_0x3a29ad,_0x3270d9){var _0x2336bb=_0x59a2;return _0x2fd94f[_0x2336bb(0x5dd)](_0x3a29ad,_0x3270d9);},'fIrcT':function(_0x4dd15a,_0x1bc1c3){var _0x31a55c=_0x59a2;return _0x2fd94f[_0x31a55c(0x2ec)](_0x4dd15a,_0x1bc1c3);},'sjxaN':function(_0x331426,_0x111f8b){var _0x2e68c5=_0x59a2;return _0x2fd94f[_0x2e68c5(0x430)](_0x331426,_0x111f8b);},'jtFcW':function(_0x4ef6ce,_0x4201d4){return _0x2fd94f['HBQZC'](_0x4ef6ce,_0x4201d4);},'xjINa':function(_0x3f9e18,_0x31ef58){return _0x2fd94f['xmWLj'](_0x3f9e18,_0x31ef58);},'yTypt':_0xc6254b(0xb3b)+'r-rad'+_0xc6254b(0x3b8)+'99px;'+'paddi'+_0xc6254b(0x7bd)+'x\x2012p'+_0xc6254b(0xc2e)+'t:11p'+_0xc6254b(0xdf7)+'\x20ui-m'+_0xc6254b(0xd10)+_0xc6254b(0xc8f)+_0xc6254b(0xa41)+_0xc6254b(0x947)+'nospa'+'ce;','PAaNY':'leIiV','sYgYD':_0x2fd94f[_0xc6254b(0xa0b)]},_0x41ac87=_0x2fd94f['emZjQ'](_0x592969+'\x0a'+(_0x33309e?JSON['strin'+'gify'](_0x33309e,null,0x1*0x16ff+-0x10d*-0x5+-0x409*0x7):'')+'\x0a',_0x41a85d),_0x3fd9ca=function(){var _0x341318=_0xc6254b;if(_0x341318(0x1c8)==='aVLad'){if(_0x17d115)_0x17d115[_0x341318(0xe45)+'onten'+'t']='Copie'+'d';}else{var _0x214410=_0x2c3cc3();if(_0x214410[_0x341318(0x2d8)])return!![];var _0x28aa1d=_0xcca529();return!!(_0x28aa1d&&_0x3debbf[_0x341318(0x293)+_0x341318(0xb51)]);}};if(navigator[_0xc6254b(0x6b9)+'oard']&&navigator['clipb'+_0xc6254b(0x1e3)][_0xc6254b(0x86c)+'Text'])navigator[_0xc6254b(0x6b9)+_0xc6254b(0x1e3)][_0xc6254b(0x86c)+_0xc6254b(0xd74)](_0x41ac87)[_0xc6254b(0xe44)](_0x3fd9ca,function(){var _0x3b6682=_0xc6254b;_0x8c85ee[_0x3b6682(0x4a1)](_0x436962);});else _0x2fd94f[_0xc6254b(0x98d)](_0x436962);function _0x436962(){var _0x261bcd=_0xc6254b,_0x191bd0={'jciqq':'2|1|1'+'5|0|3'+'|10|1'+'6|14|'+'12|6|'+'8|11|'+'4|7|5'+_0x261bcd(0x948),'wdNBh':function(_0x5723d1){return _0x5723d1();},'Tpcdn':function(_0x430627,_0x5d9bf7){var _0x1549aa=_0x261bcd;return _0x8c85ee[_0x1549aa(0x62e)](_0x430627,_0x5d9bf7);},'knyeY':function(_0xb567bd,_0x3a3ec8){return _0xb567bd-_0x3a3ec8;},'Nccra':function(_0x574478,_0xf29f4b){return _0x8c85ee['nDGlO'](_0x574478,_0xf29f4b);},'yRDnI':function(_0x582d82,_0x428cc7){var _0x47d5b3=_0x261bcd;return _0x8c85ee[_0x47d5b3(0x7dd)](_0x582d82,_0x428cc7);},'ANsAb':function(_0xb2f418,_0x48cb9f){return _0xb2f418+_0x48cb9f;},'YlIUz':function(_0x45f574,_0x71de35){return _0x45f574*_0x71de35;},'qLUDa':function(_0xe7f85c,_0x10265b){var _0x4dceaa=_0x261bcd;return _0x8c85ee[_0x4dceaa(0x95c)](_0xe7f85c,_0x10265b);},'ldytk':function(_0x3c10ed,_0x400b07){var _0x29332b=_0x261bcd;return _0x8c85ee[_0x29332b(0x1bc)](_0x3c10ed,_0x400b07);},'siSba':function(_0x1e2730,_0x16548f){return _0x8c85ee['nDGlO'](_0x1e2730,_0x16548f);},'OMzap':function(_0xab06cb,_0x48f163){return _0xab06cb*_0x48f163;},'muncR':function(_0x153c9a,_0x2a1cfa){return _0x153c9a+_0x2a1cfa;},'FVkAU':function(_0x4ca65a,_0x1b89b8){var _0x2860e0=_0x261bcd;return _0x8c85ee[_0x2860e0(0x8b2)](_0x4ca65a,_0x1b89b8);},'iMMYU':function(_0xeec807,_0x68429e){return _0xeec807*_0x68429e;},'PuLCj':function(_0x27d75d,_0x2be733){return _0x8c85ee['jtFcW'](_0x27d75d,_0x2be733);},'Ewzsa':function(_0x1ff9db,_0x6dbcaa){return _0x1ff9db*_0x6dbcaa;},'gIbED':function(_0x12dd64,_0x34cb0d){return _0x12dd64(_0x34cb0d);},'Ogzil':_0x261bcd(0x566)+'a-sw-'+'v2-ta'+'b','yVEYp':_0x8c85ee['yTypt']};if(_0x8c85ee['PAaNY']!=='leIiV'){var _0xec7f63=_0x191bd0['jciqq']['split']('|'),_0x4eb222=0x1*0x25c7+0x692+-0x2c59;while(!![]){switch(_0xec7f63[_0x4eb222++]){case'0':var _0x4c2098,_0x43b6f5,_0x2e530d,_0x5d6d65,_0x4fc22d,_0x364f0d,_0x37b51d,_0x2e1b7f,_0x1c299d;continue;case'1':var _0x5b3ef7=null,_0x5b6d30=_0x5e06ef,_0x3abb5e=_0x130f1c[_0x261bcd(0xc71)];continue;case'2':var _0xc649d9=_0x191bd0[_0x261bcd(0x924)](_0x2b3663);continue;case'3':if(_0x5b3ef7)_0x4c2098=_0x5b3ef7[_0x261bcd(0xa39)][0x1443+0xa*-0x29c+-0x5d5*-0x1],_0x43b6f5=_0x5b3ef7['fwd'][-0x2109+-0x3ff+0x2509],_0x2e530d=_0x5b3ef7['fwd'][0x1017*-0x2+0x173d+0x1*0x8f3],_0x5d6d65=_0x5b3ef7['right'][-0x619*-0x4+-0xf73+0x8f1*-0x1],_0x4fc22d=_0x5b3ef7[_0x261bcd(0x3f4)][-0x157*0x18+0x1111+0xf18],_0x364f0d=_0x5b3ef7['right'][-0x743+0x1553*0x1+0x101*-0xe],_0x37b51d=_0x5b3ef7['up'][-0x1705+0x8e5+-0x2*-0x710],_0x2e1b7f=_0x5b3ef7['up'][0x1*0x1e09+-0x521+-0x18e7],_0x1c299d=_0x5b3ef7['up'][-0x20a1+-0x6aa*-0x3+0xca5];else{var _0x36c460=_0x4b8177();if(!_0x36c460)return null;var _0x56ba67=_0x191bd0['Tpcdn'](_0x36c460[_0x261bcd(0xb40)],_0x4fe8dc['PI'])/(-0x1c27+0xa4e+-0x3*-0x62f),_0x146229=_0x36c460[_0x261bcd(0x7cc)]*_0x588bd8['PI']/(0x1630+-0xfcc+-0x5b0),_0x4333b4=_0x26e268['cos'](_0x56ba67);_0x4c2098=_0x1eb404['sin'](_0x146229)*_0x4333b4,_0x43b6f5=-_0x12531f['sin'](_0x56ba67),_0x2e530d=_0x300e1b[_0x261bcd(0x879)](_0x146229)*_0x4333b4,_0x5d6d65=_0x2e530d,_0x4fc22d=0x2*0x128f+-0xca5+-0x1879,_0x364f0d=-_0x4c2098,_0x37b51d=_0x191bd0[_0x261bcd(0x9dc)](_0x43b6f5*_0x364f0d,_0x2e530d*_0x4fc22d),_0x2e1b7f=_0x2e530d*_0x5d6d65-_0x191bd0[_0x261bcd(0xbda)](_0x4c2098,_0x364f0d),_0x1c299d=_0x191bd0[_0x261bcd(0x75b)](_0x4c2098,_0x4fc22d)-_0x43b6f5*_0x5d6d65;}continue;case'4':var _0x189393=_0x281cba[_0x261bcd(0x21f)](_0x2aba60/(-0x12d5+-0xcac+0x1f83));continue;case'5':var _0x3b75a9=_0x191bd0['yRDnI'](_0x7097af/_0x2a9620,_0x189393);continue;case'6':var _0x7097af=_0x191bd0[_0x261bcd(0x93e)](_0x5f2d04*_0x37b51d+_0x2354ff*_0x2e1b7f,_0x54ca54*_0x1c299d);continue;case'7':var _0x214c40=_0x2ea8e5/_0x2a9620/_0x191bd0['YlIUz'](_0x189393,_0x278914);continue;case'8':var _0x278914=_0x838baf/_0x96187a;continue;case'9':return{'x':_0x191bd0['qLUDa'](_0x191bd0['ldytk'](_0x214c40*(0x3*-0x167+0x9*-0x255+-0x5*-0x50a+0.5),0xde*0xd+0x2b2*-0x6+0x13*0x42+0.5),_0x564c3f),'y':_0x191bd0[_0x261bcd(0x892)](-0x2*-0x606+-0x208f+0x1483+0.5-_0x3b75a9*(0x5*-0x36e+0xb22+-0xb*-0x8c+0.5),_0x361225),'z':_0x2a9620};case'10':var _0x5f2d04=_0x3ec53b[0xa5*0x3+-0xac0+0x8d1]-_0x5b6d30[0x12d*0x1+0xd20+-0xe4d*0x1],_0x2354ff=_0x4532c9[0xd0f*-0x1+0x1*-0x14ef+0x21ff]-_0x5b6d30[-0x25d8+0xb53*-0x1+0x312c],_0x54ca54=_0x3ed39a[0x499+-0x2213+0x1d7c]-_0x5b6d30[-0x1078+0x828+0x852];continue;case'11':var _0x2aba60=_0x191bd0[_0x261bcd(0x4dc)](_0x3abb5e,_0x5df27d['PI'])/(0xc87+-0x606*-0x2+-0x17df);continue;case'12':var _0x2ea8e5=_0x191bd0[_0x261bcd(0x739)](_0x5f2d04*_0x5d6d65+_0x191bd0['FVkAU'](_0x2354ff,_0x4fc22d),_0x191bd0['iMMYU'](_0x54ca54,_0x364f0d));continue;case'13':if(_0x214c40<-(-0x22c9+-0x2b*-0x47+0x16dd+0.6000000000000001)||_0x214c40>0x1c21+0x6*0x2dd+-0xf1a*0x3+0.6000000000000001||_0x3b75a9<-(-0x1*0xbaf+-0x1f9b+0x2b4b+0.6000000000000001)||_0x3b75a9>0x81*-0x47+0x14f2+0xed6+0.6000000000000001)return null;continue;case'14':if(_0x2a9620<=-0x1e92+-0xbd4*-0x1+0x95f*0x2+0.05)return null;continue;case'15':if(_0xc649d9['basis']){_0x5b3ef7=_0xc649d9['basis'];if(_0xc649d9['pos'])_0x5b6d30=_0xc649d9[_0x261bcd(0xdd9)];if(_0xc649d9[_0x261bcd(0xc71)]!==null)_0x3abb5e=_0xc649d9[_0x261bcd(0xc71)];}continue;case'16':var _0x2a9620=_0x191bd0[_0x261bcd(0xa2a)](_0x5f2d04*_0x4c2098,_0x2354ff*_0x43b6f5)+_0x191bd0[_0x261bcd(0x682)](_0x54ca54,_0x2e530d);continue;}break;}}else{var _0x4afd2b=document['creat'+_0x261bcd(0xaf8)+'ent'](_0x261bcd(0x3ce)+_0x261bcd(0x3e3));_0x4afd2b['value']=_0x41ac87;if(!document[_0x261bcd(0x58c)])return;document[_0x261bcd(0x58c)]['appen'+_0x261bcd(0xcc3)+'d'](_0x4afd2b),_0x4afd2b[_0x261bcd(0x2a5)+'t']();try{if('MwSRj'!==_0x261bcd(0x4e1))document[_0x261bcd(0x7ec)+_0x261bcd(0xabc)+'d'](_0x8c85ee['sYgYD']),_0x3fd9ca();else{var _0x40d9d5={'ceeRS':function(_0x58fc8f,_0x14c951){return _0x191bd0['gIbED'](_0x58fc8f,_0x14c951);}},_0x356d48=_0x5268cd[_0x261bcd(0x8b1)+'eElem'+'ent']('div');_0x356d48['id']=_0x191bd0['Ogzil'],_0x356d48[_0x261bcd(0x76c)]['cssTe'+'xt']=_0x191bd0[_0x261bcd(0xa2a)](_0x261bcd(0xe0d)+_0x261bcd(0x45e)+'ixed;'+'left:'+'12px;'+_0x261bcd(0x1c1)+'2px;z'+'-inde'+'x:214'+'74829'+_0x261bcd(0xac6)+'rsor:'+_0x261bcd(0x83a)+_0x261bcd(0x5a7)+_0x261bcd(0xb52)+_0x261bcd(0x8c0)+_0x261bcd(0x6e6)+('backg'+'round'+':rgba'+_0x261bcd(0x849)+'2,29,'+'.9);b'+'order'+_0x261bcd(0x1dd)+'solid'+_0x261bcd(0x6f7)+_0x261bcd(0xd00)+'143,1'+'77,.5'+');col'+_0x261bcd(0x930))+_0x13d338,';')+_0x191bd0[_0x261bcd(0x75c)],_0x356d48[_0x261bcd(0xe45)+_0x261bcd(0xb09)+'t']=_0x261bcd(0x566)+'a',_0x356d48['oncli'+'ck']=function(){var _0x58fdaa=_0x261bcd;_0x40d9d5[_0x58fdaa(0x732)](_0x25ff82,![]),_0x24ed6c();},_0x1a4a29[_0x261bcd(0x58c)][_0x261bcd(0xd7e)+'dChil'+'d'](_0x356d48);}}catch(_0xdf32cc){}_0x4afd2b[_0x261bcd(0xa48)+'e']();}}};_0x2fd94f[_0x53f997(0x706)](setTimeout,function(){var _0x201362=_0x53f997;if('yyiyB'===_0x201362(0x46f))_0x276905(_0xc63d6f);else{if(_0x33309e)return;if(!_0xb5df3d||!_0x69f36a)return;_0xb5df3d[_0x201362(0xe45)+_0x201362(0xb09)+'t']=_0x1a845d[_0x201362(0x212)],_0xb5df3d['style']['color']=_0x201362(0x377)+'c7',_0x69f36a[_0x201362(0xe45)+'onten'+'t']=_0x1a845d[_0x201362(0x9b1)](_0x1a845d[_0x201362(0x9b1)](_0x1a845d[_0x201362(0x3ee)]('The\x20g'+'ame\x20f'+_0x201362(0x75e)+'never'+'\x20post'+'ed\x20a\x20'+_0x201362(0xcf5)+_0x201362(0x496)+'ort.\x0a'+'\x0a'+_0x1a845d['TXDKI']+_0x1a845d[_0x201362(0x993)]+('\x20\x201.\x20'+_0x201362(0xdc3)+'rmonk'+'ey\x20is'+_0x201362(0x59b)+_0x201362(0xaf4)+_0x201362(0x699)+_0x201362(0x215)+'the\x20c'+'ross-'+'origi'+_0x201362(0x895)+'ame.\x0a'),_0x201362(0x893)+_0x201362(0x448)+_0x201362(0x445)+'as\x20no'+_0x201362(0xc90)+_0x201362(0x33a)+'oaded'+_0x201362(0x524)+_0x201362(0x669)+'talli'+_0x201362(0x1bb)),_0x1a845d['IetHr']),'\x20\x20\x20\x20\x20'+'insta'+'lled\x20'+_0x201362(0x1ba)+_0x201362(0xb92)+_0x201362(0x3b3)+'\x20UWMK'+'\x20both'+_0x201362(0x7da)+_0x201362(0xb4d)+'Assem'+'bly.i'+_0x201362(0xd7d)+_0x201362(0x8c7)+_0x201362(0xd5d))+_0x1a845d['IjyNV'];}},0x2f*-0x60d+-0x11f*0x12d+0x3b9*0xe6);var _0x3be5dd={'set':function(_0x6206c7){var _0x1eee5a=_0x53f997,_0x3cdf27={'JhItI':function(_0x207cc4,_0x195f30){var _0x25ce7c=_0x59a2;return _0x1a845d[_0x25ce7c(0x9b1)](_0x207cc4,_0x195f30);},'IzrMS':'hooks'+'\x20arme'+'d\x20·\x20','NWuBI':_0x1a845d[_0x1eee5a(0x98c)],'PSQco':_0x1eee5a(0x2f2)+'ff','XKKHG':_0x1eee5a(0xc39)+_0x1eee5a(0x2a2)+',29,.'+'9)'};if('VhusG'===_0x1eee5a(0x9ee))_0x54dc9c=_0x3cdf27[_0x1eee5a(0x2ce)](_0x3cdf27[_0x1eee5a(0x2ce)](_0x3cdf27[_0x1eee5a(0x81a)],_0x102e63),'s'),_0x2aab39='#ffd4'+'8a';else{_0x33309e=_0x6206c7;if(_0x17d115)_0x17d115[_0x1eee5a(0x76c)][_0x1eee5a(0x2b3)+'ay']='';if(_0x403432){var _0x5ee509=(_0x1eee5a(0xa2d)+_0x1eee5a(0x438))['split']('|'),_0x2757ef=-0x264e+-0x2*-0x9c+0x2516;while(!![]){switch(_0x5ee509[_0x2757ef++]){case'0':var _0x38b18d=_0x25c943;continue;case'1':_0x403432['style'][_0x1eee5a(0x621)]=_0x1a845d[_0x1eee5a(0x526)](_0x7b4062,_0x38b18d)?_0x22ca32:_0x1eee5a(0xc70)+'74';continue;case'2':_0x403432[_0x1eee5a(0xe45)+_0x1eee5a(0xb09)+'t']=_0x1a845d[_0x1eee5a(0x3ee)]('v',_0x6206c7[_0x1eee5a(0x45d)+'on']||'?');continue;case'3':var _0x7b4062=_0x6206c7[_0x1eee5a(0x45d)+'on']||'';continue;case'4':_0x403432['style']['borde'+_0x1eee5a(0x3cb)+'r']=_0x7b4062===_0x38b18d?_0x1a845d[_0x1eee5a(0x2f8)]:_0x1eee5a(0xc70)+'74';continue;}break;}}var _0x515058=_0x6206c7['insta'+'nces']&&_0x6206c7[_0x1eee5a(0x8e8)+'nces']['FPSco'+'ntrol'+_0x1eee5a(0x62d)],_0x2dfa94=Math['round']((_0x6206c7[_0x1eee5a(0xe40)+_0x1eee5a(0x954)]||-0x4c1+0x1*0x89+0x438)/(-0x2*-0xb20+-0x3b4+-0xea4));if(_0xb5df3d){var _0x2b763b,_0x1c206c;if(_0x515058&&_0x6206c7['surve'+'y']&&_0x6206c7['surve'+'y']['FPSco'+_0x1eee5a(0xbcb)+_0x1eee5a(0x62d)])_0x2b763b=_0x1a845d[_0x1eee5a(0x383)]+Object['keys'](_0x6206c7[_0x1eee5a(0x8e8)+_0x1eee5a(0x581)])[_0x1eee5a(0x35a)+'h']+('\x20obje'+'cts\x20·'+'\x20')+_0x2dfa94+'s',_0x1c206c=_0x1eee5a(0x2e9)+'a8';else{if(_0x6206c7[_0x1eee5a(0x8b9)+'Appli'+'ed']>0x38f*-0x2+-0xb7e+-0x31a*-0x6)_0x2b763b=_0x1a845d['uKFFF'](_0x1a845d[_0x1eee5a(0x7f4)](_0x1a845d['GyLJI'],_0x2dfa94),'s'),_0x1c206c=_0x1a845d['xYlre'];else _0x6206c7['scrip'+_0x1eee5a(0xc59)]?_0x1a845d['lxwld'](_0x1a845d['RIlRk'],'POAMw')?_0x524fb8[_0x1eee5a(0x9b4)]=_0x1a845d[_0x1eee5a(0x39c)](_0x1eee5a(0x44c)+_0x1eee5a(0x78b)+_0x1eee5a(0xb06)+'kSync'+_0x1eee5a(0xa2c)+_0x1eee5a(0xa38)+_0x1eee5a(0xb2f)+_0x1eee5a(0x240)+'nd\x20no'+_0x1eee5a(0x60e)+'\x20mana'+_0x1eee5a(0x71e)+'That\x20'+'is\x20wh'+_0x1eee5a(0x4b1),_0x1a845d['DKOsU']):(_0x2b763b=_0x1a845d[_0x1eee5a(0xda4)]('metad'+'ata\x20r'+_0x1eee5a(0x1ed)+'·\x20'+_0x2dfa94,'s'),_0x1c206c=_0x1eee5a(0x6a9)+'8a'):(_0x2b763b=_0x1a845d[_0x1eee5a(0x74a)]((_0x6206c7['arm']&&_0x6206c7['arm']['ok']?'armed'+_0x1eee5a(0xa6b):_0x1a845d[_0x1eee5a(0x90d)])+_0x2dfa94,'s'),_0x1c206c=_0x1eee5a(0x6a9)+'8a');}_0xb5df3d[_0x1eee5a(0xe45)+_0x1eee5a(0xb09)+'t']=_0x2b763b,_0xb5df3d['style'][_0x1eee5a(0x621)]=_0x1c206c;}if(_0x146ea6){if(_0x1a845d[_0x1eee5a(0x6cd)]!==_0x1a845d[_0x1eee5a(0x6cd)]){var _0x54ed30=new _0x2ed33d(_0x1eee5a(0x566)+'a-sw');_0x54ed30[_0x1eee5a(0x970)+'essag'+'e'](_0x234b2e),_0x52cf29(function(){var _0x2b2aeb=_0x1eee5a;try{_0x54ed30[_0x2b2aeb(0x505)]();}catch(_0x477f09){}},-0x13d*0x1+-0xb64+-0x81*-0x1b);}else _0x146ea6[_0x1eee5a(0xe45)+_0x1eee5a(0xb09)+'t']=_0x6206c7[_0x1eee5a(0x92e)]&&_0x6206c7[_0x1eee5a(0x92e)][_0x1eee5a(0x35a)+'h']?'Diff\x20'+'vs\x20sn'+_0x1eee5a(0x66e)+_0x1eee5a(0x953)+_0x6206c7['diff']['join'](',\x20'):_0x1eee5a(0x20f)+'ice\x20w'+_0x1eee5a(0xa4e)+'walki'+_0x1eee5a(0x59c)+_0x1eee5a(0x62f)+_0x1eee5a(0x699)+'/\x20jum'+'ping\x20'+_0x1eee5a(0xe3d)+_0x1eee5a(0x5d4)+_0x1eee5a(0x37d)+'ld\x20is'+'\x20whic'+'h.';}_0x6206c7[_0x1eee5a(0x9e0)]&&_0x1b16af&&(_0xe295b6=!!_0x6206c7[_0x1eee5a(0x9e0)]['on'],_0x1b16af[_0x1eee5a(0xe45)+_0x1eee5a(0xb09)+'t']=_0xe295b6?_0x1a845d[_0x1eee5a(0x60c)]:_0x1a845d['UOanG'],_0x1b16af['style'][_0x1eee5a(0xb59)+_0x1eee5a(0x632)]=_0xe295b6?_0x22ca32:'trans'+_0x1eee5a(0x203)+'t',_0x1b16af[_0x1eee5a(0x76c)][_0x1eee5a(0x621)]=_0xe295b6?_0x1a845d['aiFHH']:_0x1eee5a(0x431)+'f5',_0x17452d&&_0x6206c7[_0x1eee5a(0x9e0)]['facto'+'r']&&(_0x17452d[_0x1eee5a(0xe45)+_0x1eee5a(0xb09)+'t']=_0x1a845d[_0x1eee5a(0xa01)](Number,_0x6206c7['speed'][_0x1eee5a(0x891)+'r'])['toFix'+'ed'](-0x1*-0x22ce+-0xd*-0x1a1+0x2*-0x1bfd)+'x'));if(_0x69f36a){if(_0x1a845d['UnEJW'](_0x1eee5a(0x89d),_0x1eee5a(0x223))){var _0xaa258d=_0x3cdf27[_0x1eee5a(0x2ca)]['split']('|'),_0x30a35f=0xa91*0x2+0x5*-0x79d+0x11*0xff;while(!![]){switch(_0xaa258d[_0x30a35f++]){case'0':_0x551181[_0x1eee5a(0x76c)]['backg'+'round']=_0x4836c2['on']?_0x2fd9ae:'trans'+_0x1eee5a(0x203)+'t';continue;case'1':var _0x551181=_0x2191bc&&_0x594c90[_0x1eee5a(0xe05)];continue;case'2':_0x551181[_0x1eee5a(0x76c)][_0x1eee5a(0x621)]=_0x5f50d3['on']?_0x1eee5a(0xa0d)+'1b':_0x1eee5a(0x431)+'f5';continue;case'3':if(_0x2d3b1b!==_0x551181[_0x1eee5a(0xe45)+_0x1eee5a(0xb09)+'t'])_0x551181[_0x1eee5a(0xe45)+'onten'+'t']=_0x2d3b1b;continue;case'4':if(!_0x551181)return;continue;case'5':var _0x2d3b1b=!_0x4b13ce['on']?_0x3cdf27['PSQco']:_0x42959b['boxes']?'ESP\x20b'+_0x1eee5a(0x6fe):_0x1eee5a(0x808)+'ap';continue;case'6':if(_0x40301f[_0x1eee5a(0x664)]&&!_0x4a7999())_0x5357e6[_0x1eee5a(0x664)]=![];continue;}break;}}else try{if('QNrDv'!==_0x1eee5a(0xaab))_0x69f36a[_0x1eee5a(0xe45)+'onten'+'t']=_0x1a845d[_0x1eee5a(0xa01)](_0x25c2ad,_0x6206c7);else{if(_0x204d70)_0x40f371['style'][_0x1eee5a(0x2b3)+'ay']=_0x523ef2?'':_0x1eee5a(0x761);if(_0x3dbf07)_0x8dc338[_0x1eee5a(0xe45)+'onten'+'t']=_0x5432cb?'close':'open';_0x3a8fdf[_0x1eee5a(0x76c)]['width']=_0x403043?_0x1eee5a(0xe49)+'2vw,6'+'20px)':_0x1eee5a(0x2c3),_0x584572[_0x1eee5a(0x76c)]['backg'+'round']=_0x2557ab?'#150c'+'1d':_0x3cdf27[_0x1eee5a(0x623)];}}catch(_0x5e964b){_0x1a845d[_0x1eee5a(0x95b)]('DHgSi',_0x1eee5a(0xa9a))?_0x403384=_0x1a845d[_0x1eee5a(0x3cc)](_0x2ad78c,_0x198f6a,_0x44390f||-0x41*-0x8b+0x72f+-0x2a48):_0x69f36a[_0x1eee5a(0xe45)+'onten'+'t']=JSON[_0x1eee5a(0x83e)+_0x1eee5a(0xa82)](_0x6206c7,null,-0x147b+-0x7f9*-0x4+0xa*-0x124);}}console['log'](_0x1eee5a(0x7af)+'kura]'+'\x20Skil'+'lWarz'+_0x1eee5a(0x333)+'rt',_0x1a845d['xTOSF'](_0x1a845d[_0x1eee5a(0x866)]+_0x22ca32,';font'+'-weig'+_0x1eee5a(0xc80)+'0'),_0x6206c7),console[_0x1eee5a(0x395)](_0x1a845d['yrLwK'](_0x1a845d['cDMjB'](_0x1a845d['HxOnI'](_0x592969,'\x0a'),JSON[_0x1eee5a(0x83e)+'gify'](_0x6206c7,null,-0xa7f*-0x1+-0xdf6*0x2+-0xc2*-0x17)),'\x0a')+_0x41a85d);}}};return _0x3ca8c6[_0x53f997(0xc23)+'et'][_0x53f997(0xdb6)]='1',_0x3ca8c6['api']=_0x3be5dd,_0x3be5dd;}function _0x25c2ad(_0x110291){var _0x71937b=_0x3f0b99,_0x20a8d0=[];_0x20a8d0[_0x71937b(0x1ea)](_0x2fd94f[_0x71937b(0x806)](_0x2fd94f['lWaKH'](_0x2fd94f[_0x71937b(0xe29)]('frame'+'\x20\x20\x20\x20'+(_0x110291['host']||'?'),_0x71937b(0xc7b)),Math['round'](_0x2fd94f[_0x71937b(0x404)](_0x110291[_0x71937b(0xe40)+_0x71937b(0x954)]||0x1af*-0xd+0x25*-0x8d+0x1522*0x2,-0x1ec6+-0xad*0x19+0x3393))),'s)')),_0x20a8d0[_0x71937b(0x1ea)](_0x2fd94f[_0x71937b(0x61c)]('uwmk\x20'+'\x20\x20\x20\x20'+(_0x110291['uwmk']?_0x71937b(0x40a):'no'),_0x2fd94f[_0x71937b(0x85e)])+(_0x110291['il2Cp'+'pCont'+_0x71937b(0x80f)]?_0x2fd94f['kAkyK']:'no')+('\x20\x20\x20ty'+_0x71937b(0xc0e))+(_0x110291[_0x71937b(0xbaa)+_0x71937b(0x379)]!=null?_0x110291[_0x71937b(0xbaa)+'ount']:'?')),_0x20a8d0['push'](_0x2fd94f[_0x71937b(0xcc1)](_0x2fd94f['SbGaX'](_0x2fd94f[_0x71937b(0xbbc)]+_0x110291[_0x71937b(0x8b9)+_0x71937b(0x365)+'ed'],'/')+_0x110291[_0x71937b(0x8b9)+'Total'],_0x71937b(0xb2b)+'ied')),_0x20a8d0[_0x71937b(0x1ea)]('');var _0x58d3a3=_0x110291[_0x71937b(0x8e8)+_0x71937b(0x581)]||{},_0x324b65=Object[_0x71937b(0x859)](_0x58d3a3);!_0x324b65['lengt'+'h']&&(_0x20a8d0[_0x71937b(0x1ea)](_0x71937b(0xdeb)+_0x71937b(0xd14)+_0x71937b(0xba8)+'\x20capt'+'ured\x20'+'yet.'),_0x20a8d0[_0x71937b(0x1ea)](''),_0x20a8d0[_0x71937b(0x1ea)](_0x2fd94f['XYiTq']),_0x20a8d0[_0x71937b(0x1ea)](_0x71937b(0x334)+_0x71937b(0x2c9)+_0x71937b(0xdc6)+'et,\x20o'+_0x71937b(0x222)+'\x20sign'+'ature'+_0x71937b(0xa93)+_0x71937b(0xded)+_0x71937b(0x678)));for(var _0x3a1830=0x213*0x2+0x12e4+-0x170a;_0x2fd94f['uwfgS'](_0x3a1830,_0x324b65['lengt'+'h']);_0x3a1830++){var _0x556277=_0x324b65[_0x3a1830];_0x20a8d0[_0x71937b(0x1ea)](_0x2fd94f['sEpdu'](_0x2fd94f['uGFGq'](_0x556277,_0x2fd94f['KMpHo']),_0x58d3a3[_0x556277]));}_0x20a8d0['push']('');var _0x3d3780=_0x110291['surve'+'y']||{},_0x2d4c4c=Object['keys'](_0x3d3780);for(var _0x4d4b78=0x662+0x1046+-0x16a8;_0x2fd94f['IGSDw'](_0x4d4b78,_0x2d4c4c['lengt'+'h']);_0x4d4b78++){var _0x7867d8=_0x2d4c4c[_0x4d4b78],_0x341e39=_0x3d3780[_0x7867d8];if(!_0x341e39||!_0x341e39['lengt'+'h'])continue;_0x20a8d0['push'](_0x2fd94f[_0x71937b(0x1fb)]('──\x20'+_0x7867d8+'\x20',new Array(Math[_0x71937b(0x81d)](-0x1*-0x24f1+-0x3*-0xc83+-0x1f*0x267,0x9d4+-0x45f*0x3+0x36b-_0x7867d8['lengt'+'h']))[_0x71937b(0x958)]('─'))),_0x20a8d0[_0x71937b(0x1ea)](_0x71937b(0x9c6)+'set\x20\x20'+_0x71937b(0xbe9)+'\x20\x20\x20\x20\x20'+_0x71937b(0x482)+_0x71937b(0x766)+'\x20\x20\x20\x20\x20'+_0x71937b(0x6a7)+_0x71937b(0x6a2));for(var _0x31e51f=0x3*-0x95+0x2014+-0x1e55;_0x2fd94f[_0x71937b(0xd15)](_0x31e51f,_0x341e39[_0x71937b(0x35a)+'h']);_0x31e51f++){var _0x3aa0fa=_0x341e39[_0x31e51f],_0x31c06e=typeof _0x3aa0fa['v']===_0x2fd94f['VSdGn']?_0x2fd94f[_0x71937b(0x2ec)](Math['round'](_0x2fd94f['aLbKU'](_0x3aa0fa['v'],-0x69e+0x3db*0x7+-0x1077)),0x18a9+0x1ad+0x21*-0xae):_0x3aa0fa['v'];_0x20a8d0[_0x71937b(0x1ea)](_0x2fd94f['MNGRq']('\x20\x20'+_0x2fd94f[_0x71937b(0x7aa)]('0x',_0x3aa0fa['o']['toStr'+_0x71937b(0xa00)](0x25ab+0xc38+-0x31d3))[_0x71937b(0x98e)+'d'](0x3*-0x2e6+-0x3*0x3b5+0x13d9*0x1)+'\x20'+_0x3aa0fa['k']['padEn'+'d'](0x16a1+0xe91+0x1*-0x2527)+'\x20',String(_0x31c06e)[_0x71937b(0x98e)+'d'](0x1*0x296+-0x1c63+0x1*0x19dd))+'\x20'+(_0x3aa0fa['raw']||''));}_0x20a8d0[_0x71937b(0x1ea)]('');}if(_0x110291[_0x71937b(0x9a9)+_0x71937b(0xe47)]&&_0x110291[_0x71937b(0x9a9)+'ngs']['lengt'+'h']){_0x20a8d0[_0x71937b(0x1ea)](_0x2fd94f['mKkXz']);for(var _0x3a4cd7=0x276+-0x99a+-0x1*-0x724;_0x3a4cd7<_0x110291[_0x71937b(0x9a9)+'ngs']['lengt'+'h'];_0x3a4cd7++)_0x20a8d0[_0x71937b(0x1ea)](_0x2fd94f[_0x71937b(0xb08)](_0x71937b(0x54c),_0x110291[_0x71937b(0x9a9)+'ngs'][_0x3a4cd7]));}return _0x20a8d0['join']('\x0a');}window['addEv'+_0x3f0b99(0x7b8)+'stene'+'r'](_0x2fd94f[_0x3f0b99(0x873)],function(_0xe28788){var _0x401d70=_0x3f0b99,_0x186352=_0xe28788['data'];if(!_0x186352||_0x186352['__sak'+_0x401d70(0x751)]!==_0x2bad0b)return;try{if(_0x186352[_0x401d70(0x8b6)]==='hello'){_0x2fd94f[_0x401d70(0x705)](_0x519e21)['set']({'host':_0x186352[_0x401d70(0x285)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x186352[_0x401d70(0x8b6)]===_0x2fd94f[_0x401d70(0xa11)])_0x519e21()['set'](_0x186352['repor'+'t']);}catch(_0x2fb3d3){_0x2fd94f[_0x401d70(0x1b4)]==='hNWGq'?_0x4e86b9=_0x5009dc(_0x5bd7e3):console[_0x401d70(0x940)](_0x2fd94f['DsOQh'],_0x401d70(0x621)+':'+_0x22ca32,_0x2fb3d3);}});function _0x9f6463(){_0x41963e(!![]);}if(document['body'])_0x9f6463();else document['addEv'+'entLi'+_0x3f0b99(0x8e0)+'r'](_0x3f0b99(0x942)+_0x3f0b99(0x844)+_0x3f0b99(0xbfb)+'d',_0x9f6463,{'once':!![]});return;}window['__SAK'+'URA_S'+_0x3f0b99(0x9f6)]=window['__SAK'+_0x3f0b99(0x67b)+'W__']||{'at':Date['now']()};function _0x264f10(_0x131666,_0x2f7bfa){var _0x33042d=_0x3f0b99,_0x175f53={'qBwYm':'name'};if(_0x2fd94f[_0x33042d(0xc73)]===_0x2fd94f['fnXrz']){var _0x136d72={'__sakura':_0x2bad0b,'kind':_0x131666};if(_0x2f7bfa){for(var _0xb3da0a in _0x2f7bfa)_0x136d72[_0xb3da0a]=_0x2f7bfa[_0xb3da0a];}try{if(window[_0x33042d(0x203)+'t']&&_0x2fd94f[_0x33042d(0xca9)](window[_0x33042d(0x203)+'t'],window))window[_0x33042d(0x203)+'t'][_0x33042d(0x970)+_0x33042d(0x4fc)+'e'](_0x136d72,'*');}catch(_0x5ee60d){}try{if(_0x2fd94f[_0x33042d(0x5c3)](_0x33042d(0x214),_0x33042d(0x2a8))){if(window[_0x33042d(0xd86)]&&window[_0x33042d(0xd86)]!==window)window[_0x33042d(0xd86)]['postM'+_0x33042d(0x4fc)+'e'](_0x136d72,'*');}else _0x1eae6f[_0x33042d(0x1e2)+_0x33042d(0xe4f)+_0x33042d(0x56d)](_0x53bb81,_0x175f53[_0x33042d(0x31c)],{'value':_0x2ccbd5[_0x33042d(0xc58)],'configurable':!![]});}catch(_0x280535){}}else{var _0x1b60b4=_0x35f41a['v'];if(_0x2fd94f[_0x33042d(0xca9)](typeof _0x1b60b4,'numbe'+'r')||!_0x2fd94f['kOqRI'](_0x16f430,_0x1b60b4))return![];if(_0x2fd94f[_0x33042d(0xc52)](_0x10836d['k'],'obfB'))return _0x1b60b4===0x2700+-0x159b+-0x3d*0x49||_0x1b60b4===0x1f5*-0xb+0x2380*-0x1+0x3908;var _0x3162ce=_0x30c871['fake'];if(typeof _0x3162ce!==_0x2fd94f[_0x33042d(0xe34)]||!_0x2e8880(_0x3162ce))return!![];if(_0x3c4251[_0x33042d(0x6f1)]===0x3da+-0x2449+-0x18*-0x15a)return _0x17db61['abs'](_0x1b60b4-_0x3162ce)<=_0x1be7f6['max'](-0x2*0x11d8+0xd5*-0x3+0x2630,_0x16021f[_0x33042d(0xd22)](_0x3162ce)*(0x1b9b+-0xb1e*-0x2+-0x31d7+0.6));return _0x2fd94f['MniZV'](_0x580dfa['abs'](_0x1b60b4),0x19b4ae1+-0x36b44e46+-0x92f*-0xc45ab);}}console[_0x3f0b99(0x395)](_0x2fd94f[_0x3f0b99(0xd08)]+_0x25c943,_0x2fd94f[_0x3f0b99(0xd9d)]+_0x22ca32+_0x2fd94f[_0x3f0b99(0xc17)],{'host':_0xadb686,'href':location['href'],'version':_0x25c943}),_0x2fd94f['ZoVND'](_0x264f10,_0x3f0b99(0x433),{'host':_0xadb686,'role':_0x253423});var _0x13f4db=window[_0x3f0b99(0xb48)+'URA_S'+_0x3f0b99(0x9f6)]&&window[_0x3f0b99(0xb48)+'URA_S'+'W__']['at']||Date['now']();window['addEv'+'entLi'+_0x3f0b99(0x8e0)+'r'](_0x2fd94f['huJLO'],function(_0x437c5c){var _0x23470f=_0x3f0b99;try{var _0x70f844=_0x437c5c&&_0x437c5c[_0x23470f(0x2b0)];if(!_0x70f844||_0x70f844[_0x23470f(0x8ee)+'ura']!==_0x2bad0b||_0x70f844[_0x23470f(0x8b6)]!==_0x2fd94f[_0x23470f(0x744)])return;_0x2fd94f[_0x23470f(0x620)](_0xb64e92,_0x70f844[_0x23470f(0x23d)],_0x70f844[_0x23470f(0x45f)]);}catch(_0x3ad307){}});try{var _0x21b690=new BroadcastChannel(_0x2fd94f['OxVMU']);_0x21b690[_0x3f0b99(0x4e9)+_0x3f0b99(0xe61)]=function(_0x238e7b){var _0x4c69d5=_0x3f0b99,_0x45851d=_0x238e7b[_0x4c69d5(0x2b0)];if(_0x45851d&&_0x2fd94f[_0x4c69d5(0xc52)](_0x45851d['__sak'+_0x4c69d5(0x751)],_0x2bad0b)&&_0x2fd94f['WhFxC'](_0x45851d[_0x4c69d5(0x8b6)],_0x2fd94f[_0x4c69d5(0x744)]))_0xb64e92(_0x45851d[_0x4c69d5(0x23d)],_0x45851d['arg']);};}catch(_0x988095){}var _0x58afc5=[];(function _0x5a051f(){var _0x208e33=_0x3f0b99,_0xfcf447=[_0x208e33(0x395),_0x208e33(0x940),_0x208e33(0xa73),'info','debug'];for(var _0x3338b8=0x1799+-0x8+-0x1791*0x1;_0x3338b8<_0xfcf447['lengt'+'h'];_0x3338b8++){(function(_0x2f064f){var _0x447d7f=_0x208e33,_0x48a7c8={'Sayga':function(_0x351fcf){var _0x5af7a7=_0x59a2;return _0x2fd94f[_0x5af7a7(0x98d)](_0x351fcf);},'iqCZI':function(_0x50f05b,_0x29a83b){return _0x50f05b!==_0x29a83b;},'eoBXs':function(_0x4d9718,_0x5bff06){var _0x495d39=_0x59a2;return _0x2fd94f[_0x495d39(0x5c3)](_0x4d9718,_0x5bff06);}};if(_0x2fd94f[_0x447d7f(0xa7c)](_0x447d7f(0xb43),_0x2fd94f[_0x447d7f(0x8a5)])){var _0x462ba6=console[_0x2f064f];if(typeof _0x462ba6!==_0x2fd94f[_0x447d7f(0x588)])return;console[_0x2f064f]=function(){var _0x17be55=_0x447d7f,_0x1dd625={'nxred':function(_0x4a8a36){var _0x4e947f=_0x59a2;return _0x48a7c8[_0x4e947f(0x6b3)](_0x4a8a36);}};try{if(_0x48a7c8[_0x17be55(0x29a)](_0x17be55(0x689),_0x17be55(0x689))){var _0x132913=_0x2efb20[_0x17be55(0x226)+_0x17be55(0xcc8)+'orkSy'+'nc']||{};if(!_0x29f7b9['keys'](_0x132913)['lengt'+'h'])return![];return!!_0x1dd625[_0x17be55(0x323)](_0x202990);}else{var _0x4b3df0='';for(var _0x18874e=0x2eb+-0x110b+0xe20;_0x18874e<arguments['lengt'+'h'];_0x18874e++){var _0x598223=arguments[_0x18874e];if(typeof _0x598223===_0x17be55(0x83e)+'g')_0x4b3df0+=_0x598223;else{if(_0x598223&&_0x598223['messa'+'ge'])_0x4b3df0+=_0x598223[_0x17be55(0x437)+'ge'];}}if(_0x48a7c8[_0x17be55(0xd9f)](_0x4b3df0[_0x17be55(0xaa9)+'Of'](_0x592969),-(0x1*-0x10cc+-0x1e18+0x2ee5)))return _0x462ba6[_0x17be55(0x9ae)](console,arguments);if(_0x4b3df0['index'+'Of'](_0x17be55(0x518)+_0x17be55(0x4e6)+_0x17be55(0x1ec))!==-(-0x321*0xb+-0x1c9f+0x3f0b)){var _0x37c29e=_0x4b3df0['slice'](-0x26c*-0x9+0x128d+0x3*-0xd73,-0x247+-0x10d*-0xa+-0xd*0x8b);if(_0x58afc5['index'+'Of'](_0x37c29e)===-(0x1d*-0xd3+0x1*0xa39+-0x1*-0xdaf)&&_0x58afc5[_0x17be55(0x35a)+'h']<-0x1258+0x194+0x8*0x220)_0x58afc5[_0x17be55(0x1ea)](_0x37c29e);}}}catch(_0x4ab20c){}return _0x462ba6[_0x17be55(0x9ae)](console,arguments);};}else return _0x55566c[_0x447d7f(0x655)+'e']='plugi'+'n._ru'+_0x447d7f(0x85d)+'.reso'+'lveGa'+_0x447d7f(0x23c),_0x52dc34;}(_0xfcf447[_0x3338b8]));}}());var _0x1912a1={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x56cb5b=null,_0x25a62b=null,_0x172bd8=-(0x466*-0x2+-0xd*0x2d7+0x2db8),_0x4000a5=null;function _0xa35646(_0x128c0a){var _0x18f48a=_0x3f0b99,_0x388bc3={'NkNfV':function(_0x2114e6,_0x36e681){var _0x5ebae4=_0x59a2;return _0x2fd94f[_0x5ebae4(0x7a2)](_0x2114e6,_0x36e681);},'AhEKL':function(_0x181354,_0x1d46e7){return _0x181354+_0x1d46e7;},'IevBp':function(_0x1d10ef,_0x173dd4){return _0x1d10ef*_0x173dd4;},'KPoxB':function(_0x4d4b92,_0x375b1f){return _0x4d4b92+_0x375b1f;},'cWULS':_0x2fd94f['IOQEh'],'buzvt':_0x18f48a(0x9be)+_0x18f48a(0x264)+_0x18f48a(0x478)+'ipt\x20i'+_0x18f48a(0xd99)+_0x18f48a(0x594)+_0x18f48a(0x52a)+_0x18f48a(0x7c3)+_0x18f48a(0xb64)+'eload'+'.'};if(_0x2fd94f['HzpgB']!==_0x2fd94f['HzpgB'])_0x255688={'mean':_0x2d1546,'members':[]},_0x21ad29['push'](_0x12577e);else try{if(!_0x128c0a)return;var _0xab4788=_0x128c0a['insta'+_0x18f48a(0x882)]?_0x128c0a['insta'+_0x18f48a(0x882)]['expor'+'ts']:_0x128c0a[_0x18f48a(0xe0c)+'ts']||null;if(!_0xab4788)return;if(!_0x4000a5){if(_0x18f48a(0xa4b)!=='ithul')_0x479bc8=_0x408282+_0x237900/_0x2ed693*_0x388bc3['NkNfV'](_0x348e10,-0x1*-0x132d+-0x241*0x3+-0xc64),_0x456098=_0x388bc3['AhEKL'](_0x43d468,_0x388bc3['IevBp'](_0x400197/_0x3c7b8c,_0x344814-(-0x20*-0xd9+-0x1cd6+-0x1*-0x1bc)));else try{_0x18f48a(0x671)===_0x2fd94f[_0x18f48a(0x63b)]?_0x62dcb5[_0x18f48a(0x9a9)+'ngs']['push'](_0x388bc3[_0x18f48a(0x827)](_0x388bc3[_0x18f48a(0xcb5)]+(_0x18f48a(0x8c3)+'ced\x20b'+_0x18f48a(0x7b2)+_0x18f48a(0xcfc)+_0x18f48a(0x899)+'nstan'+_0x18f48a(0x5d7)+_0x18f48a(0xce6)+_0x18f48a(0xa83)+_0x18f48a(0x7fd)+'\x20the\x20'+_0x18f48a(0x384)+'\x20obje'+_0x18f48a(0x9bf)+'r\x20'),'the\x20g'+'ame\x20w'+_0x18f48a(0xa4e)+'the\x20o'+_0x18f48a(0x2ff)+'lding'+'\x20it\x20i'+_0x18f48a(0xbb3)+'haned'+_0x18f48a(0x2bf)+'able\x20'+_0x18f48a(0x2f9)+_0x18f48a(0xd36)+'r\x20')+_0x388bc3[_0x18f48a(0xa54)]):_0x4000a5=Object[_0x18f48a(0x859)](_0xab4788)[_0x18f48a(0x257)](-0x165e+0x2c1+0x139d*0x1,-0x1370+0x1dd2*-0x1+-0x315a*-0x1);}catch(_0x2b5cda){}}var _0x1dd7ab=_0xab4788[_0x18f48a(0xe09)+'y'];_0x1dd7ab&&_0x1dd7ab[_0x18f48a(0xd32)+'r']&&_0x1dd7ab['buffe'+'r']['byteL'+'ength']>0x9*0x3e3+-0x26be+0x3c3&&(_0x2fd94f['RANPB']!==_0x18f48a(0x541)?(_0x25a62b=_0x1dd7ab,_0x172bd8=Date[_0x18f48a(0xa06)]()-_0x13f4db):_0x2fd94f[_0x18f48a(0x7f5)](_0x239294,![]));}catch(_0x409b32){}}function _0x18775c(){var _0x5d67fa=_0x3f0b99,_0x608467={'ZfjpG':'funct'+'ion','vtMPk':_0x2fd94f[_0x5d67fa(0xc36)],'ymOGF':'yhRQt','IYmPN':function(_0x3133d3,_0x238894){return _0x2fd94f['dmWIc'](_0x3133d3,_0x238894);},'RfpeL':_0x2fd94f[_0x5d67fa(0x6e9)]};try{if(typeof WebAssembly===_0x5d67fa(0x2b2)+'ined')return;var _0x8615fd=[_0x2fd94f['sBSzI'],_0x2fd94f['IgPTK']];for(var _0x202175=0x1d38+0x3*-0x36e+-0x12ee;_0x202175<_0x8615fd['lengt'+'h'];_0x202175++){if('JmTIO'!==_0x5d67fa(0x5a3)){if(!_0x480b31)return;var _0x2fde5a=_0x27d2fd['style'][_0x5d67fa(0x2b3)+'ay']==='none';_0x1fa4bc[_0x5d67fa(0x76c)][_0x5d67fa(0x2b3)+'ay']=_0x2fde5a?'':_0x5d67fa(0x761),_0x3e54e8(_0x5d67fa(0xc67))[_0x5d67fa(0xe45)+'onten'+'t']=_0x2fde5a?'-':'+';}else(function(_0x5adadd){var _0x9c7ece=_0x5d67fa;if(_0x608467[_0x9c7ece(0x6c8)](_0x9c7ece(0x97a),'MGqEH'))_0x3fb3bd['style'][_0x9c7ece(0x1d9)+'ty']='1';else{var _0x1cb5a9=WebAssembly[_0x5adadd];if(typeof _0x1cb5a9!==_0x608467['ZfjpG']||_0x1cb5a9[_0x9c7ece(0x8ee)+_0x9c7ece(0xb4a)+_0x9c7ece(0xcfe)+'ap'])return;var _0x5ac8dc=function(){var _0xc034e8=_0x9c7ece,_0x5d039d={'fUeKK':_0x608467['ZfjpG']};if(_0x608467['vtMPk']!==_0x608467[_0xc034e8(0xacf)]){var _0x1c9b14=_0x1cb5a9[_0xc034e8(0x9ae)](this,arguments);try{if(_0x1c9b14&&typeof _0x1c9b14[_0xc034e8(0xe44)]===_0x608467[_0xc034e8(0x343)])_0x1c9b14[_0xc034e8(0xe44)](_0xa35646,function(){});else _0xa35646(_0x1c9b14);}catch(_0x319d64){}return _0x1c9b14;}else{_0x2315e4[-0xb*0xd1+-0x1ba4*-0x1+0x6*-0x31c]&&typeof _0x5a6bfb[-0x5*-0x411+-0x4cb+0x1*-0xf89][_0xc034e8(0xd0a)]===_0x5d039d['fUeKK']&&(_0x307ad7['setLa'+'st']=_0x1d05d3[-0x239b+0x1789*0x1+-0x1*-0xc13][_0xc034e8(0xd0a)](),_0x3a883d[_0xc034e8(0x38b)+'ts']++);_0x58b6e6[0x2*-0x131a+-0x14a9+0x3adf]&&typeof _0x2fd5cb[-0xd1*0x5+0x2*-0x1145+0x26a1][_0xc034e8(0xd0a)]===_0x5d039d['fUeKK']&&(_0x4416b5[_0xc034e8(0xaa4)]=_0x41a424[-0xd6a+-0x157b+0x6fb*0x5][_0xc034e8(0xd0a)](),_0x2a5e4d[_0xc034e8(0x3ef)+'its']++);if(_0x5ecd82[-0x1a1+-0x20d+0x6*0x9d]&&typeof _0x399c24[0x227d+-0x1c0c+-0x671]['val']==='funct'+_0xc034e8(0x98a)){var _0x44e634=_0x3a55b8[0x1*-0x1ec7+0x1490+0xa37][_0xc034e8(0xd0a)]();if(_0x44e634)_0x4ccf75=_0x44e634;}}};_0x5ac8dc['__sak'+_0x9c7ece(0xb4a)+'moryT'+'ap']=!![];try{Object[_0x9c7ece(0x1e2)+_0x9c7ece(0xe4f)+'erty'](_0x5ac8dc,_0x608467[_0x9c7ece(0x59a)],{'value':_0x1cb5a9[_0x9c7ece(0xc58)],'configurable':!![]});}catch(_0x364c85){}WebAssembly[_0x5adadd]=_0x5ac8dc;}}(_0x8615fd[_0x202175]));}}catch(_0x581876){}}var _0xeba036=null,_0x1e3fad=null,_0x48cc1a={},_0xb4806b={'MouseLook':[{'name':'\u008b\u0087\u0087\u0092\u0090'+_0x3f0b99(0x2f3)+'\u0094','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f['lwpbn'],'ret':_0x3f0b99(0x288),'params':[_0x3f0b99(0xa7f)],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)],_0x2fd94f[_0x3f0b99(0x51b)]]},{'name':_0x3f0b99(0xaeb)+_0x3f0b99(0x778)+'\u0092','ret':'void','params':['float'],'wasmParams':[_0x3f0b99(0x5df),_0x3f0b99(0xd4a)]},{'name':_0x3f0b99(0x582)+_0x3f0b99(0x5d6)+'\u0095','ret':_0x3f0b99(0x288),'params':[_0x3f0b99(0xa7f)],'wasmParams':[_0x3f0b99(0x5df),_0x2fd94f[_0x3f0b99(0x51b)]]},{'name':_0x2fd94f['Xmrgc'],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xd6d)+_0x3f0b99(0xce5)+'\u0094','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0xdd8)+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0x7e0)+'pdate','ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f['rfphy'],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['hVVKx'],'ret':_0x3f0b99(0xa7f),'params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':_0x2fd94f[_0x3f0b99(0x51b)]},{'name':_0x2fd94f[_0x3f0b99(0x976)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0x1d8)+_0x3f0b99(0x26b)+'\u0088','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':['float'],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)],'f32']},{'name':_0x2fd94f[_0x3f0b99(0x447)],'ret':_0x2fd94f[_0x3f0b99(0xaa7)],'params':[],'wasmParams':['i32'],'wasmRet':'f32'},{'name':_0x3f0b99(0x5e8)+'\u008c\u0090\u0089\u0086\u0092'+'\u0092','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x295)],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':'\u0090\u0091\u0095\u008c\u008e'+_0x3f0b99(0x91d)+'\u008a','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':['i32']},{'name':'\u0090\u0091\u0091\u0086\u008b'+_0x3f0b99(0xbb8)+'\u0093','ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':_0x2fd94f[_0x3f0b99(0x19f)],'ret':_0x3f0b99(0x288),'params':[_0x3f0b99(0xa7f),'float'],'wasmParams':[_0x3f0b99(0x5df),_0x3f0b99(0xd4a),_0x3f0b99(0xd4a)]},{'name':_0x2fd94f[_0x3f0b99(0x359)],'ret':'float','params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':'f32'},{'name':_0x2fd94f[_0x3f0b99(0x49b)],'ret':'void','params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0x88d),'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x8f2)+_0x3f0b99(0x521)+'\u008e','ret':_0x3f0b99(0x288),'params':['float'],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)],_0x2fd94f['eaffj']]},{'name':_0x2fd94f['MjJLD'],'ret':_0x2fd94f[_0x3f0b99(0xaa7)],'params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':_0x2fd94f[_0x3f0b99(0x51b)]},{'name':_0x2fd94f[_0x3f0b99(0xa8f)],'ret':_0x2fd94f['jerBC'],'params':[_0x2fd94f[_0x3f0b99(0xaa7)],_0x2fd94f[_0x3f0b99(0xaa7)]],'wasmParams':[_0x2fd94f['mTeCE'],_0x2fd94f[_0x3f0b99(0x51b)],_0x2fd94f[_0x3f0b99(0x51b)]]},{'name':_0x2fd94f[_0x3f0b99(0x77b)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0xcce)+_0x3f0b99(0xaa6)+'\u008a','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['YeMLA'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':['float'],'wasmParams':['i32',_0x2fd94f['eaffj']]},{'name':'\u0090\u008e\u0095\u0093\u008d'+'\u0089\u0094\u008c\u008b\u0089'+'\u0093','ret':'float','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]],'wasmRet':_0x3f0b99(0xd4a)},{'name':'\u008e\u0093\u008f\u008d\u0088'+_0x3f0b99(0x7ab)+'\u008a','ret':_0x2fd94f['COscE'],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]],'wasmRet':_0x2fd94f[_0x3f0b99(0x51b)]},{'name':_0x3f0b99(0x548)+_0x3f0b99(0xc0c)+'\u0088','ret':_0x3f0b99(0x288),'params':['float'],'wasmParams':[_0x3f0b99(0x5df),'f32']},{'name':_0x3f0b99(0x50c)+_0x3f0b99(0xb54)+'\u008c','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0x280)+_0x3f0b99(0x35f)+'\u0093','ret':'void','params':[_0x3f0b99(0xa7f)],'wasmParams':[_0x3f0b99(0x5df),_0x2fd94f['eaffj']]},{'name':'\u008c\u0089\u008e\u0086\u0086'+_0x3f0b99(0x381)+'\u0089','ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f['FBfoz'],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['CZzcd'],'ret':'void','params':[_0x2fd94f[_0x3f0b99(0xaa7)]],'wasmParams':[_0x2fd94f['mTeCE'],'f32']}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+_0x3f0b99(0x868)+'\u008e','ret':'float','params':[],'wasmParams':['i32'],'wasmRet':_0x2fd94f[_0x3f0b99(0x51b)]},{'name':_0x2fd94f[_0x3f0b99(0xd1e)],'ret':'void','params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xdc5)+_0x3f0b99(0xcf4)+'\u0094','ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[],'wasmParams':['i32'],'wasmRet':_0x2fd94f[_0x3f0b99(0x839)]},{'name':_0x3f0b99(0xaa2)+_0x3f0b99(0x468)+'\u008b','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':['bool'],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)],_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xa90)+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','ret':'void','params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':'\u0092\u0088\u008b\u0095\u0089'+_0x3f0b99(0xde4)+'\u008a','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0xcce)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0x558)+_0x3f0b99(0x883)+'\u0087','ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[],'wasmParams':[_0x2fd94f['mTeCE']],'wasmRet':_0x2fd94f['mTeCE']},{'name':_0x3f0b99(0x959)+'\u008c\u0088\u008a\u0089\u0092'+'\u0087','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x787)],'ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':'i32'},{'name':_0x2fd94f['JUFhw'],'ret':'bool','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]],'wasmRet':'i32'},{'name':_0x2fd94f[_0x3f0b99(0x603)],'ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':'\u0095\u0087\u0089\u008c\u008e'+_0x3f0b99(0x8dc)+'\u0095','ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x19b)],'ret':'bool','params':[_0x2fd94f[_0x3f0b99(0xe13)],_0x2fd94f[_0x3f0b99(0xe13)]],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)],_0x2fd94f['mTeCE'],_0x3f0b99(0x5df)],'wasmRet':_0x2fd94f['mTeCE']},{'name':_0x2fd94f['hkSkz'],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x7ce)],'ret':_0x2fd94f['JxbHg'],'params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':'i32'},{'name':_0x3f0b99(0x798)+_0x3f0b99(0x611)+'\u008f','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[_0x3f0b99(0x76b)],'wasmParams':['i32',_0x2fd94f['mTeCE']]},{'name':_0x2fd94f['FUbYX'],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x2fd94f['CzHWz'],'ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':'i32'},{'name':_0x2fd94f['SqKwh'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['QEwJf'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0x42e)+_0x3f0b99(0x498)+'\u0089','ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0xe1c)+_0x3f0b99(0x837)+'\u008b','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x9fb)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xa2e)+_0x3f0b99(0x7b4)+'\u0090','ret':_0x2fd94f['jerBC'],'params':[_0x2fd94f[_0x3f0b99(0xe13)]],'wasmParams':[_0x3f0b99(0x5df),_0x3f0b99(0x5df)]},{'name':_0x2fd94f['QqwxN'],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':'\u008d\u0095\u0087\u0093\u0092'+'\u0092\u0094\u0087\u008d\u008c'+'\u008b','ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f['vrUfI'],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':_0x3f0b99(0x369)+'\u008d\u0095\u0093\u0094\u008b'+'\u0091','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xbdd)+_0x3f0b99(0xc22)+'\u008a','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':'\u0087\u008b\u0088\u0090\u008e'+_0x3f0b99(0xab6)+'\u0092','ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':'\u0088\u008b\u008f\u008a\u008e'+_0x3f0b99(0x2c5)+'\u0091','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0x912)+_0x3f0b99(0x262)+'\u0094','ret':_0x3f0b99(0x288),'params':['bool'],'wasmParams':['i32','i32']},{'name':_0x2fd94f[_0x3f0b99(0xbeb)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f['ScwAw'],'ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0xb46)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0xcc4)],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xa2b)+_0x3f0b99(0xb1c)+'\u0087','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x27e)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x63d)],'ret':_0x3f0b99(0x288),'params':[_0x3f0b99(0x76b)],'wasmParams':[_0x2fd94f['mTeCE'],'i32']},{'name':_0x3f0b99(0x977)+_0x3f0b99(0xe06)+'\u008f','ret':'bool','params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':'i32'},{'name':'\u008e\u008b\u0095\u0092\u008e'+_0x3f0b99(0x663)+'\u0086','ret':_0x3f0b99(0x76b),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]],'wasmRet':_0x2fd94f['mTeCE']},{'name':'\u0089\u0095\u0092\u0090\u0086'+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]],'wasmRet':_0x2fd94f['mTeCE']},{'name':_0x2fd94f[_0x3f0b99(0xabb)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x220)],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':'\u0088\u0091\u0095\u008a\u0087'+_0x3f0b99(0x9a8)+'\u008b','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x6ad)+_0x3f0b99(0x9a1)+'\u0091','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':['i32']},{'name':_0x2fd94f['zqOcM'],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x2fd94f[_0x3f0b99(0xac7)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':'\u008d\u0094\u0095\u008b\u008a'+_0x3f0b99(0xe5c)+'\u0094','ret':_0x3f0b99(0x288),'params':[_0x3f0b99(0xa7f)],'wasmParams':[_0x3f0b99(0x5df),_0x2fd94f['eaffj']]},{'name':_0x3f0b99(0xbbe)+_0x3f0b99(0x854)+'\u0092','ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':_0x3f0b99(0x5df)},{'name':_0x2fd94f[_0x3f0b99(0x40e)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':['i32']},{'name':_0x3f0b99(0x990)+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':['i32']},{'name':_0x2fd94f[_0x3f0b99(0x2d1)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x97c)],'ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[],'wasmParams':['i32'],'wasmRet':_0x3f0b99(0x5df)},{'name':_0x2fd94f['frQkF'],'ret':_0x3f0b99(0x76b),'params':[_0x3f0b99(0x76b),_0x3f0b99(0x76b)],'wasmParams':[_0x3f0b99(0x5df),_0x3f0b99(0x5df),_0x3f0b99(0x5df)],'wasmRet':'i32'},{'name':_0x3f0b99(0x7b3)+'e','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['nhcTg'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':['i32']},{'name':_0x2fd94f['tLQNl'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':'\u0095\u0090\u0093\u0093\u008a'+_0x3f0b99(0x8fa)+'\u0086','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':'\u0090\u0093\u0090\u008f\u0088'+'\u0095\u008e\u008f\u0088\u008d'+'\u008f','ret':_0x3f0b99(0x288),'params':[_0x3f0b99(0xa7f)],'wasmParams':[_0x3f0b99(0x5df),_0x3f0b99(0xd4a)]},{'name':_0x2fd94f['XfhTk'],'ret':'void','params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xc4f)+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','ret':_0x3f0b99(0x76b),'params':[_0x3f0b99(0x76b),'bool'],'wasmParams':[_0x3f0b99(0x5df),_0x3f0b99(0x5df),_0x2fd94f['mTeCE']],'wasmRet':_0x2fd94f[_0x3f0b99(0x839)]},{'name':_0x2fd94f[_0x3f0b99(0x5b9)],'ret':'void','params':[_0x3f0b99(0xa7f),'bool'],'wasmParams':['i32',_0x3f0b99(0xd4a),'i32']},{'name':_0x2fd94f[_0x3f0b99(0x659)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0xe50)],'ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':'\u0095\u0088\u0090\u0092\u0090'+'\u0089\u0093\u0094\u008e\u008c'+'\u0095','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]}],'TDM_GameManager':[{'name':_0x2fd94f[_0x3f0b99(0xdca)],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x2fd94f['LByHP'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':['i32']},{'name':_0x3f0b99(0x5cf)+'\u008c\u008b\u008f\u008d\u0088'+'\u0089','ret':_0x2fd94f[_0x3f0b99(0xe13)],'params':[_0x2fd94f[_0x3f0b99(0x85f)]],'wasmParams':[_0x3f0b99(0x5df),_0x2fd94f['mTeCE']],'wasmRet':'i32'},{'name':_0x2fd94f[_0x3f0b99(0xe22)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':'\u0087\u0094\u0093\u008f\u008d'+_0x3f0b99(0x2fd)+'\u008c','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[_0x3f0b99(0x76b)],'wasmParams':['i32',_0x3f0b99(0x5df)]},{'name':_0x2fd94f['TfMJH'],'ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0x821)+'\u0093\u0092\u0093\u0092\u0089'+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008d\u008f\u0086\u0092\u008c'+_0x3f0b99(0xa1f)+'\u0087','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x88d),'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0xad1)+_0x3f0b99(0x456)+'\u0088','ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0xb8e)],'ret':'void','params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':'\u008b\u0088\u008d\u0087\u0090'+_0x3f0b99(0x578)+'\u0094','ret':'void','params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0x1f4)+_0x3f0b99(0x593)+'\u008c','ret':'void','params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x9e8)+_0x3f0b99(0xb85)+'\u0088','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x3bc)+'troy','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':'\u0089\u008d\u008a\u008a\u0090'+_0x3f0b99(0x758)+'\u008a','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['pobca'],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x216)+_0x3f0b99(0x4c5)+'\u008a','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x97d)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':_0x3f0b99(0x5e3)+_0x3f0b99(0x6bd)+'\u0093','ret':_0x3f0b99(0x288),'params':[_0x3f0b99(0x76b)],'wasmParams':[_0x3f0b99(0x5df),'i32']},{'name':_0x2fd94f[_0x3f0b99(0x92c)],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':['int',_0x3f0b99(0x830),_0x2fd94f[_0x3f0b99(0x85f)]],'wasmParams':[_0x3f0b99(0x5df),'i32','i32',_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xe04)+_0x3f0b99(0x6cc)+'\u0089','ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':_0x2fd94f[_0x3f0b99(0x327)],'ret':'void','params':[_0x2fd94f[_0x3f0b99(0x85f)],_0x2fd94f['tROKg'],_0x2fd94f[_0x3f0b99(0x85f)]],'wasmParams':['i32','i32',_0x3f0b99(0x5df),_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x3eb)+_0x3f0b99(0x422)+'\u0092','ret':_0x3f0b99(0x76b),'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x3f0b99(0x7b3)+'e','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x3f0b99(0x25d)+_0x3f0b99(0xbaf)+'\u0087','ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':_0x2fd94f['FGOeE'],'ret':'void','params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x2fd94f['ZcTGW'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3f0b99(0x9a7)+_0x3f0b99(0xa42)+'\u008e','ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['KIMGE'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':'\u0088\u008c\u0089\u008e\u0095'+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[_0x2fd94f[_0x3f0b99(0xe13)]],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)],_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x76d)],'ret':'void','params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x847)+'\u0095\u0092\u0086\u008a\u008e'+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2fd94f['Aoqnp'],'ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x61f)],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':['bool'],'wasmParams':['i32',_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0x6fa)+_0x3f0b99(0x9fd)+'\u0095','ret':_0x3f0b99(0x76b),'params':[],'wasmParams':[_0x3f0b99(0x5df)],'wasmRet':'i32'},{'name':_0x2fd94f[_0x3f0b99(0x64c)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':'\u008c\u0086\u0095\u0091\u008a'+'\u0088\u0094\u008e\u008d\u0093'+'\u008a','ret':_0x3f0b99(0x76b),'params':['int'],'wasmParams':[_0x2fd94f['mTeCE'],_0x2fd94f['mTeCE']],'wasmRet':'i32'},{'name':_0x2fd94f[_0x3f0b99(0x5b3)],'ret':'void','params':[_0x2fd94f['JxbHg']],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)],_0x3f0b99(0x5df)]},{'name':_0x2fd94f['MpRve'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x1f1)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x3f0b99(0xa07)+_0x3f0b99(0xc19)+'\u008c','ret':_0x3f0b99(0x288),'params':['int','int',_0x2fd94f['tROKg']],'wasmParams':['i32',_0x2fd94f[_0x3f0b99(0x839)],_0x3f0b99(0x5df),_0x3f0b99(0x5df)]},{'name':'\u0089\u0086\u0094\u0092\u0092'+'\u0093\u008b\u0094\u0094\u0094'+'\u008e','ret':_0x3f0b99(0x288),'params':[],'wasmParams':['i32']},{'name':_0x3f0b99(0xad2),'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0xb74)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':'\u0094\u0092\u0086\u0092\u0092'+_0x3f0b99(0x964)+'\u008e','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2fd94f[_0x3f0b99(0x5ac)],'ret':_0x3f0b99(0x288),'params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f['LIShm'],'ret':_0x3f0b99(0x288),'params':[_0x2fd94f['JxbHg']],'wasmParams':[_0x3f0b99(0x5df),_0x3f0b99(0x5df)]},{'name':'\u0088\u008f\u0094\u0095\u008a'+'\u0091\u008b\u0089\u0094\u0092'+'\u0095','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f[_0x3f0b99(0x2ba)],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['tMeYi'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0x38a)+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[_0x3f0b99(0x830),_0x3f0b99(0x830)],'wasmParams':[_0x2fd94f['mTeCE'],_0x2fd94f['mTeCE'],_0x2fd94f['mTeCE']]},{'name':_0x2fd94f[_0x3f0b99(0x4ff)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x3f0b99(0x5df)]},{'name':_0x2fd94f['wvkZW'],'ret':_0x2fd94f[_0x3f0b99(0x1af)],'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x3f0b99(0xace)+_0x3f0b99(0x568)+'\u0092','ret':'void','params':['bool'],'wasmParams':['i32',_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x829)],'ret':'void','params':[],'wasmParams':[_0x2fd94f[_0x3f0b99(0x839)]]},{'name':_0x2fd94f[_0x3f0b99(0x72a)],'ret':_0x2fd94f['jerBC'],'params':[],'wasmParams':[_0x2fd94f['mTeCE']]},{'name':_0x2fd94f[_0x3f0b99(0x4e5)],'ret':'void','params':[],'wasmParams':[_0x3f0b99(0x5df)]}]},_0x57a7b3=[],_0x12802f=[],_0x57d539={},_0x528ba4=0x1b99+-0x11c4+-0x9d5,_0x4fadc2=![],_0xf98529=[],_0x2e3346=[{'type':_0x2fd94f[_0x3f0b99(0x8d3)],'keep':!![]},{'type':_0x2fd94f[_0x3f0b99(0xb1a)],'keep':!![]},{'type':_0x2fd94f['cuPkl'],'keep':![]},{'type':_0x3f0b99(0x8fb)+_0x3f0b99(0xd65)+_0x3f0b99(0x3e6),'keep':!![]},{'type':'GG_Ga'+_0x3f0b99(0xa9f)+_0x3f0b99(0x7ee),'keep':!![]},{'type':_0x3f0b99(0x226)+_0x3f0b99(0xcc8)+_0x3f0b99(0xa56)+'nc','keep':!![],'many':!![]},{'type':_0x2fd94f['tOKqD'],'keep':!![],'many':!![]},{'type':'NPC_C'+'otrol'+_0x3f0b99(0x62d),'keep':!![],'many':!![]},{'type':_0x3f0b99(0x202)+'Bot','keep':!![],'many':!![]}],_0x28276f=[_0x2fd94f['gdXOn'],'Assem'+'bly-C'+'Sharp'+'-firs'+_0x3f0b99(0xbf2)+_0x3f0b99(0x6fd),_0x2fd94f[_0x3f0b99(0x6f4)],_0x3f0b99(0x22f)+_0x3f0b99(0xc69),_0x3f0b99(0x80c)+'loCha'+_0x3f0b99(0x432)+'rCont'+'rolle'+_0x3f0b99(0xbf8),_0x3f0b99(0xbe4)+_0x3f0b99(0x301)+'d'];(function _0x4aa53e(){var _0x3f9b08=_0x3f0b99;try{var _0x43e95d=('0|4|8'+_0x3f9b08(0x1ff)+_0x3f9b08(0x3b7)+_0x3f9b08(0x266)+'|7')[_0x3f9b08(0xae3)]('|'),_0x34ce72=0x1e98+-0x33e+-0x1b5a;while(!![]){switch(_0x43e95d[_0x34ce72++]){case'0':var _0x41d788=window[_0x3f9b08(0x518)+_0x3f9b08(0x4e6)+_0x3f9b08(0x1ec)]&&window['Unity'+_0x3f9b08(0x4e6)+'dkit'][_0x3f9b08(0xb7c)+'me'];continue;case'1':_0x1912a1['ok']=!![];continue;case'2':_0x48a2d9();continue;case'3':_0x1e3fad=_0x41d788[_0x3f9b08(0x8b1)+'ePlug'+'in']({'name':_0x3f9b08(0x566)+_0x3f9b08(0xdaf)+_0x3f9b08(0x9b8)+'z','version':_0x25c943,'referencedAssemblies':_0x28276f[_0x3f9b08(0x257)]()});continue;case'4':if(!_0x41d788||typeof _0x41d788[_0x3f9b08(0x8b1)+_0x3f9b08(0x9cf)+'in']!==_0x2fd94f[_0x3f9b08(0x588)]){_0x1912a1['error']=_0x2fd94f['ZfFXq'];return;}continue;case'5':_0x1912a1['hooks'+'Regis'+'tered']=_0x57a7b3[_0x3f9b08(0x35a)+'h'];continue;case'6':_0x2fd94f[_0x3f9b08(0x705)](_0x18775c);continue;case'7':_0x1912a1['memor'+_0x3f9b08(0xe12)]=!![];continue;case'8':_0x1912a1[_0x3f9b08(0xb81)+'pted']=!![];continue;case'9':_0x8144e5();continue;case'10':try{var _0x39cfac=window[_0x3f9b08(0x518)+'WebMo'+'dkit']['Runti'+'me'];_0x39cfac[_0x3f9b08(0x8ee)+_0x3f9b08(0xba2)+'g']=_0x2fd94f['wxPQp'](_0x25c943,':')+Math[_0x3f9b08(0xb37)+'m']()[_0x3f9b08(0x7e7)+_0x3f9b08(0xa00)](0x2349+-0x15d*-0xb+-0x3224)[_0x3f9b08(0x257)](-0x22*0x123+-0x358*-0xa+0x8*0xa7,0x22f+-0x659+-0x434*-0x1),_0x56cb5b=_0x39cfac[_0x3f9b08(0x8ee)+'uraTa'+'g'];}catch(_0x4fd691){}continue;}break;}}catch(_0x509d08){_0x1912a1[_0x3f9b08(0xa73)]=String(_0x509d08&&_0x509d08[_0x3f9b08(0x437)+'ge']||_0x509d08);}}());var _0x5529de=new Float32Array(0x8*-0x19d+0x454+-0x895*-0x1),_0x584e7d=new Int32Array(_0x5529de['buffe'+'r']);function _0x2484b1(_0x54785c){return _0x5529de[-0xf5*0xb+0x9*0xb7+0x418]=_0x54785c,_0x584e7d[0x9*-0x3d+-0x1*-0x1a7f+-0x185a];}function _0x4c2b27(_0x4be6c6){return _0x584e7d[0x1*0x6e3+0xd6a+-0x1*0x144d]=_0x2fd94f['NCkUX'](_0x4be6c6,0x435+-0x2664+0x222f),_0x5529de[-0x265e+0x2057*-0x1+0x46b5*0x1];}var _0x15e079={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x99c993(){var _0x47544c=_0x3f0b99,_0x42a25e={'yPxQp':function(_0xecf6f,_0x21d386){return _0xecf6f(_0x21d386);},'uDBvp':function(_0x3e3291,_0x1597d2,_0x187e09){return _0x3e3291(_0x1597d2,_0x187e09);},'WiHUf':function(_0x3389ca,_0x1fec1a){return _0x3389ca-_0x1fec1a;},'BVeiZ':_0x47544c(0xd56)+'on'};if(_0x47544c(0xc26)===_0x2fd94f['MNfiT']){try{if(_0x1e3fad&&_0x1e3fad[_0x47544c(0x4d0)+_0x47544c(0xaba)]){var _0x4402a5=_0x1e3fad[_0x47544c(0x4d0)+_0x47544c(0xaba)];if(_0x2fd94f['hAJsk'](typeof _0x4402a5['resol'+_0x47544c(0xbb1)+'e'],_0x2fd94f[_0x47544c(0x588)])){var _0x564d90=_0x4402a5[_0x47544c(0xc93)+'veGam'+'e']();if(_0x564d90)return _0x15e079[_0x47544c(0x655)+'e']=_0x2fd94f[_0x47544c(0x838)],_0x564d90;}if(_0x4402a5[_0x47544c(0x764)]){if(_0x2fd94f[_0x47544c(0x49a)]!==_0x2fd94f[_0x47544c(0xd6e)])return _0x15e079[_0x47544c(0x655)+'e']='plugi'+_0x47544c(0x25e)+_0x47544c(0x85d)+_0x47544c(0xe20)+'e',_0x4402a5['_game'];else{var _0x280bb4=_0x370884(_0x48bdf5,_0xb3f67a,_0x56bb76);if(!_0x280bb4)return null;_0x280bb4['o']=_0x10f35e,_0x280bb4['k']=_0x30c4fd;var _0x1a018e=_0x580649([_0x280bb4]);if(!_0x1a018e[_0x47544c(0xa33)][_0x47544c(0x35a)+'h'])return null;return _0x1a018e['rows'][0x1*0x1ac4+-0x92+-0x1a32];}}}}catch(_0x49316f){}try{if('zfIoY'!=='zfIoY'){if(_0x407ed8&&_0x422fb1[_0x47544c(0xa12)+'ropag'+'ation'])_0x4f755c['stopP'+'ropag'+_0x47544c(0xd83)]();_0x42a25e['yPxQp'](_0x5133f1,!_0x5714a1['open']);}else{var _0x4d8700=window['Unity'+_0x47544c(0x4e6)+'dkit']&&window[_0x47544c(0x518)+'WebMo'+_0x47544c(0x1ec)][_0x47544c(0xb7c)+'me'];if(_0x4d8700&&_0x2fd94f['dmWIc'](typeof _0x4d8700[_0x47544c(0xc93)+'veGam'+'e'],_0x2fd94f[_0x47544c(0x588)])){var _0xe447c3=_0x4d8700[_0x47544c(0xc93)+_0x47544c(0xbb1)+'e']();if(_0xe447c3)return _0x15e079[_0x47544c(0x655)+'e']=_0x47544c(0xb7c)+'me.re'+'solve'+'Game('+')',_0xe447c3;}if(_0x4d8700&&_0x4d8700[_0x47544c(0x764)])return _0x15e079['sourc'+'e']=_0x47544c(0xb7c)+'me._g'+'ame',_0x4d8700;}}catch(_0x50ccb3){}try{var _0x2edfb4=window['unity'+_0x47544c(0x7c8)+'nce']||window[_0x47544c(0xd96)+'Game']||window[_0x47544c(0x443)];if(_0x2edfb4)return _0x15e079[_0x47544c(0x655)+'e']=_0x47544c(0x945)+_0x47544c(0x4aa)+'bal',_0x2edfb4;}catch(_0x4779b9){}try{if(typeof game!=='undef'+_0x47544c(0x9d3)&&game){if(_0x2fd94f['FkFif']!==_0x2fd94f[_0x47544c(0x8d9)]){if(_0x2cc439[_0x3ef312][_0x47544c(0x385)+'rs']['lengt'+'h']>=_0x43aadb)_0x1c89e4['push'](_0x19997c[_0x24ab9a]);}else return _0x15e079[_0x47544c(0x655)+'e']=_0x2fd94f[_0x47544c(0x639)],game;}}catch(_0x36a17c){}try{if('UXerj'==='UXerj'){var _0x300219=Object[_0x47544c(0x859)](window);for(var _0x358d29=0x2137+0x50*-0x42+0xb*-0x125;_0x358d29<_0x300219['lengt'+'h']&&_0x2fd94f[_0x47544c(0xb58)](_0x358d29,0x9fc+0xd*0x2fb+0x13*-0x271);_0x358d29++){var _0x399270=window[_0x300219[_0x358d29]];if(_0x399270&&typeof _0x399270==='objec'+'t'&&_0x399270['Modul'+'e']&&_0x399270[_0x47544c(0xa34)+'e']['HEAPU'+'8']&&_0x399270[_0x47544c(0xa34)+'e']['HEAPU'+'8'][_0x47544c(0xd32)+'r'])return _0x15e079[_0x47544c(0x655)+'e']=_0x2fd94f['boDsp'](_0x2fd94f['SbGaX'](_0x2fd94f[_0x47544c(0xadc)],_0x300219[_0x358d29]),_0x2fd94f[_0x47544c(0xe2f)]),_0x399270;}}else{var _0x211080=_0x2e970d(_0x330700[_0x8e0777][0x1*0x113f+0x7*0xa7+0x10*-0x15d]),_0x483063=_0x42a25e['uDBvp'](_0x4994dc,_0x47544c(0xcc7),'sk-va'+'l');_0x483063['style']['minWi'+'dth']='0',_0x483063['style'][_0x47544c(0xd67)]='1',_0x483063[_0x47544c(0x76c)][_0x47544c(0x92f)+_0x47544c(0x41e)]=_0x47544c(0x3f4),_0x483063['textC'+_0x47544c(0xb09)+'t']=_0x49136e(_0x29cf16[_0x59f268][-0x6*-0x186+0x195d+-0x227f]),_0x483063[_0x47544c(0xc23)+'et']['k']=_0x591dbe[_0x4f5add][0x1ff9+0x1*0xedb+-0x2ed3],_0x211080[_0x47544c(0xd7e)+_0x47544c(0xcc3)+'d'](_0x483063);var _0x5b1e9c=_0xfa9bd4[_0x47544c(0x35a)+'h']?_0x72295f[_0x42a25e[_0x47544c(0xae7)](_0xa3bd60[_0x47544c(0x35a)+'h'],-0x115a+-0x1451*-0x1+-0x2f6)]:null;!_0x5b1e9c&&(_0x5b1e9c=_0x37a162(_0x42a25e['BVeiZ'],![]),_0x43095c['push'](_0x5b1e9c)),_0x5b1e9c[_0x47544c(0x58c)]['appen'+_0x47544c(0xcc3)+'d'](_0x211080),_0x5b1e9c[_0x47544c(0x58c)][_0x47544c(0x32b)+'hild']['sp']=_0x483063;}}catch(_0x5cd49a){}return _0x15e079[_0x47544c(0x655)+'e']=null,null;}else{var _0x36c5f4=_0x2fd94f[_0x47544c(0x37e)][_0x47544c(0xae3)]('|'),_0x484d19=0x569+-0x29*-0xbf+-0x2400;while(!![]){switch(_0x36c5f4[_0x484d19++]){case'0':_0x35c5cf['tag']=_0xc419be&&_0xc419be[_0x47544c(0x8ee)+_0x47544c(0xba2)+'g']||null;continue;case'1':_0x1f0d22['tagMa'+'tches']=!!(_0xc419be&&_0x476056&&_0x2fd94f[_0x47544c(0xc52)](_0xc419be[_0x47544c(0x8ee)+'uraTa'+'g'],_0xf2ae3));continue;case'2':_0x4d4004['runti'+_0x47544c(0xd2a)+'e']=_0xc419be&&_0xc419be['_game']?typeof _0xc419be[_0x47544c(0x764)]:_0x2fd94f[_0x47544c(0xe08)];continue;case'3':_0x1f5ba4[_0x47544c(0x52e)+_0x47544c(0x3ac)+_0x47544c(0x878)+_0x47544c(0x1db)+'ted']=!!(_0x52bd0e&&_0x3cea10[_0x47544c(0x4d0)+_0x47544c(0xaba)]&&_0x2fd94f[_0x47544c(0xa1e)](_0x12a78f[_0x47544c(0x4d0)+_0x47544c(0xaba)],_0xc419be));continue;case'4':_0x10bddd[_0x47544c(0x52e)+_0x47544c(0x3ac)+'imeGa'+'me']=_0xf36c0d&&_0x18d513[_0x47544c(0x4d0)+_0x47544c(0xaba)]&&_0x1fd2ad[_0x47544c(0x4d0)+'ime']['_game']?typeof _0x30f72e[_0x47544c(0x4d0)+'ime']['_game']:'none';continue;case'5':var _0xc419be=_0x544192[_0x47544c(0x518)+_0x47544c(0x4e6)+'dkit']&&_0xcfb57[_0x47544c(0x518)+_0x47544c(0x4e6)+_0x47544c(0x1ec)]['Runti'+'me'];continue;}break;}}}function _0x58d2b5(){var _0x171a83=_0x3f0b99;try{if(_0x25a62b&&_0x25a62b[_0x171a83(0xd32)+'r']&&_0x25a62b[_0x171a83(0xd32)+'r'][_0x171a83(0x701)+_0x171a83(0xa59)])return _0x15e079[_0x171a83(0x655)+'e']=_0x15e079[_0x171a83(0x655)+'e']||_0x2fd94f[_0x171a83(0x76a)],new Uint8Array(_0x25a62b['buffe'+'r']);}catch(_0xb7b827){}try{var _0x151b16=_0x2fd94f[_0x171a83(0x98d)](_0x99c993);if(_0x151b16&&_0x151b16['Modul'+'e']&&_0x151b16[_0x171a83(0xa34)+'e'][_0x171a83(0xde2)+'8']&&_0x151b16[_0x171a83(0xa34)+'e'][_0x171a83(0xde2)+'8'][_0x171a83(0xd32)+'r'])return _0x151b16['Modul'+'e']['HEAPU'+'8'];}catch(_0x303f3f){}return null;}function _0x220aeb(){var _0x546079=_0x3f0b99,_0x2ffa33={'Bcfnf':'isLoc'+_0x546079(0x197)+_0x546079(0x85c)+_0x546079(0x6aa)+_0x546079(0x81c)+'`play'+'ers`.'},_0x835373=_0x58d2b5();if(!_0x835373)return null;try{if(_0x2fd94f[_0x546079(0xca2)]===_0x2fd94f[_0x546079(0xca2)])return new DataView(_0x835373['buffe'+'r'],_0x835373[_0x546079(0xc7c)+_0x546079(0xcb4)],_0x835373[_0x546079(0x701)+_0x546079(0xa59)]);else _0x583011[_0x546079(0x9b4)]='Playe'+_0x546079(0xba1)+'e\x20pre'+_0x546079(0x622)+'but\x20n'+'one\x20a'+_0x546079(0xaa8)+_0x546079(0x9da)+'ied\x20a'+'s\x20ene'+'mies\x20'+_0x546079(0x426)+_0x546079(0xb89)+'k\x20'+_0x2ffa33['Bcfnf'];}catch(_0x29dd1a){return null;}}function _0x55b637(_0x1fad6c,_0x499223){var _0x47e295=_0x3f0b99,_0x54a589={'XihUV':function(_0x30115a){return _0x30115a();},'BbIsJ':_0x2fd94f[_0x47e295(0x46d)],'IAARZ':'#f7ee'+'f5','HTKvt':function(_0x5d316e,_0x2ce244){return _0x5d316e<_0x2ce244;},'axKjo':function(_0x3922cb,_0x593bbd){return _0x2fd94f['GZmEu'](_0x3922cb,_0x593bbd);},'zDHXb':function(_0x3f1081,_0x1c8bd3,_0x761d55){return _0x2fd94f['MhjSV'](_0x3f1081,_0x1c8bd3,_0x761d55);},'NzOEH':_0x47e295(0xc40)+_0x47e295(0xd9b),'WZGpq':_0x2fd94f[_0x47e295(0x42d)],'jkezr':'sk-sl'+'ider','ZPySX':function(_0x2b3a01,_0x2596c3){return _0x2b3a01(_0x2596c3);},'rxAhu':_0x2fd94f['bYDeh'],'XqaJP':_0x47e295(0x9cc)+'l','GfrXY':function(_0x43c647){return _0x43c647();}},_0x3d1082=_0x220aeb();if(!_0x3d1082)return _0x15e079[_0x47e295(0xd78)+'d']++,_0x15e079[_0x47e295(0xc5e)+'rror']=_0x15e079[_0x47e295(0xc5e)+'rror']||_0x2fd94f[_0x47e295(0x24e)],undefined;if(_0x1fad6c<0x5c3*-0x5+-0xf51*-0x1+0x9d*0x16||_0x1fad6c+(0x13d0+-0x1dc+-0x11f0)>_0x3d1082[_0x47e295(0x701)+'ength']){if(_0x47e295(0x46a)!==_0x2fd94f[_0x47e295(0x50a)])return _0x15e079['faile'+'d']++,_0x15e079['lastE'+_0x47e295(0xbdf)]=_0x15e079[_0x47e295(0xc5e)+_0x47e295(0xbdf)]||_0x2fd94f['uGFGq'](_0x47e295(0x5f3)+'ss\x200x',_0x1fad6c[_0x47e295(0x7e7)+_0x47e295(0xa00)](-0xccf+-0x73a+0x1419))+(_0x47e295(0x856)+'\x20heap'+'\x20end\x20'+'0x')+_0x3d1082['byteL'+_0x47e295(0xa59)][_0x47e295(0x7e7)+_0x47e295(0xa00)](0x2001+0xab*-0x25+-0x73a),undefined;else _0x2a47c3[_0x47e295(0x7ec)+'omman'+'d'](_0x47e295(0x4af)),_0x54a589['XihUV'](_0x1f0067);}try{if(_0x2fd94f[_0x47e295(0x314)](_0x2fd94f['qixZn'],_0x2fd94f[_0x47e295(0x980)])){_0x15e079['ok']++;switch(_0x499223){case'u8':return _0x3d1082[_0x47e295(0x19a)+_0x47e295(0xb9b)](_0x1fad6c);case'i8':return _0x3d1082['getIn'+'t8'](_0x1fad6c);case _0x47e295(0x98f):return _0x3d1082[_0x47e295(0x339)+_0x47e295(0x23f)](_0x1fad6c,!![]);case _0x2fd94f['PdKTV']:return _0x3d1082[_0x47e295(0x19a)+_0x47e295(0x322)](_0x1fad6c,!![]);case'i32':return _0x3d1082['getIn'+_0x47e295(0xd42)](_0x1fad6c,!![]);case _0x2fd94f[_0x47e295(0xbff)]:return _0x3d1082[_0x47e295(0x19a)+'nt32'](_0x1fad6c,!![]);case _0x2fd94f[_0x47e295(0x51b)]:return _0x3d1082['getFl'+_0x47e295(0x53b)](_0x1fad6c,!![]);case'f64':return _0x3d1082['getFl'+'oat64'](_0x1fad6c,!![]);case'v2':case'v3':case'v4':return _0x3d1082['getFl'+_0x47e295(0x53b)](_0x1fad6c,!![]);default:return _0x3d1082['getIn'+'t32'](_0x1fad6c,!![]);}}else _0x4ddeeb['sp'][_0x47e295(0xe45)+_0x47e295(0xb09)+'t']=_0x25bd19['on']?_0x54a589['BbIsJ']:_0x47e295(0x911)+'\x20off',_0x4080cd['sp'][_0x47e295(0x76c)]['backg'+'round']=_0x2f6bd6['on']?_0x973226:_0x47e295(0x43c)+_0x47e295(0x203)+'t',_0x2b9979['sp']['style']['color']=_0xfb800b['on']?_0x47e295(0xa0d)+'1b':_0x54a589[_0x47e295(0x228)];}catch(_0x262bba){if(_0x2fd94f['dmWIc'](_0x47e295(0xae4),'ZMxXV'))return _0x15e079['faile'+'d']++,_0x15e079['lastE'+_0x47e295(0xbdf)]=_0x15e079['lastE'+_0x47e295(0xbdf)]||_0x2fd94f[_0x47e295(0x46e)](String,_0x262bba&&_0x262bba[_0x47e295(0x437)+'ge']||_0x262bba)[_0x47e295(0x257)](0x1*-0x2024+-0x5fb*0x1+0x261f,-0x2405+-0x50c*-0x4+0x104d),undefined;else{var _0x1e9a72={'YUVFZ':function(_0x276734,_0x4cdd7c){return _0x276734+_0x4cdd7c;},'DJdCp':function(_0x1bde9b,_0x294b66){return _0x54a589['HTKvt'](_0x1bde9b,_0x294b66);},'CnRiB':function(_0x3982a5,_0x4d0698){return _0x3982a5*_0x4d0698;},'xeFsG':function(_0x47bbcb,_0x33a0fc){return _0x54a589['axKjo'](_0x47bbcb,_0x33a0fc);},'ODwkH':function(_0x5d5ebc){return _0x5d5ebc();}},_0x48342b=_0x54a589['zDHXb'](_0x22640d,_0x47e295(0xa60),_0x54a589[_0x47e295(0x8da)]),_0x59cb7b=_0x2d208c[_0x47e295(0x8b1)+_0x47e295(0xaf8)+_0x47e295(0x2f1)](_0x54a589[_0x47e295(0xcb6)]);_0x59cb7b[_0x47e295(0x6b6)]=_0x47e295(0x3b0),_0x59cb7b[_0x47e295(0xe1b)+_0x47e295(0xb45)]=_0x54a589[_0x47e295(0xca6)],_0x59cb7b['min']=_0x54a589[_0x47e295(0x8ed)](_0x24a941,_0xff7819),_0x59cb7b['max']=_0x11a234(_0x1d0a2d),_0x59cb7b['step']=_0x33d64f(_0x5662e8);var _0x2b1934=_0x99127(_0x54a589[_0x47e295(0x54a)],_0x54a589[_0x47e295(0x2cb)]),_0x5ed99e=function(){var _0x43329c=_0x47e295,_0x3f898f=(_0x43329c(0x47a)+'|3|0')[_0x43329c(0xae3)]('|'),_0x24a743=-0x22a6+0x21dd+-0x3*-0x43;while(!![]){switch(_0x3f898f[_0x24a743++]){case'0':_0x59cb7b[_0x43329c(0x76c)]['setPr'+_0x43329c(0x29f)+'y'](_0x43329c(0xce1),_0x1e9a72[_0x43329c(0x53d)](_0x57bbc0,'%'));continue;case'1':_0x2b1934['textC'+'onten'+'t']=(_0x1e9a72[_0x43329c(0x8d8)](_0x7bbdeb,-0x1c6b*0x1+-0x729+0x2395*0x1)?_0x5db42b[_0x43329c(0x299)+'ed'](0x704+-0x3*-0x164+-0x199*0x7):_0x497bab(_0xec0511['round'](_0x5db42b)))+(_0x59cb7b['datas'+'et'][_0x43329c(0x8e1)]||'');continue;case'2':var _0x5db42b=_0x510908();continue;case'3':var _0x57bbc0=_0x1e9a72[_0x43329c(0x71d)](_0x1e9a72['xeFsG'](_0x5db42b,_0x1f29d4)/_0x1e9a72['xeFsG'](_0x4f3f58,_0x4c7f47),-0x1d1*0x11+-0x2632+0x4577);continue;case'4':_0x59cb7b['value']=_0x5687ca(_0x5db42b);continue;}break;}};return _0x59cb7b[_0x47e295(0x21a)+'ut']=function(){var _0x12be4e=_0x47e295;_0x5cbb44(_0x46b9e7(_0x59cb7b['value'])||_0x426a27),_0x1e9a72[_0x12be4e(0x64f)](_0x5ed99e);},_0x48342b[_0x47e295(0xd7e)+_0x47e295(0xcc3)+'d'](_0x59cb7b),_0x48342b['appen'+_0x47e295(0xcc3)+'d'](_0x2b1934),_0x48342b[_0x47e295(0x67d)]=_0x5ed99e,_0x48342b[_0x47e295(0xd1f)]=_0x59cb7b,_0x54a589['GfrXY'](_0x5ed99e),_0x211f51[_0x47e295(0xa91)][_0x47e295(0x1ea)](_0x5ed99e),_0x48342b;}}}function _0x1dc2a9(_0x457fbc,_0x97a85b,_0x2400b3){var _0x3e3f3d=_0x3f0b99,_0x243597=_0x220aeb();if(!_0x243597||_0x2fd94f['KLpXG'](_0x457fbc,-0x12f2+-0x2378+0x366a)||_0x457fbc+(-0x378+0x1a7e+-0x13*0x136)>_0x243597[_0x3e3f3d(0x701)+'ength'])return![];try{if(_0x2fd94f[_0x3e3f3d(0xca9)](_0x2fd94f[_0x3e3f3d(0x2e3)],_0x2fd94f[_0x3e3f3d(0x2e3)]))_0x293f2d=_0x8b5dd6(_0x1cc224);else{switch(_0x97a85b){case'u8':case'i8':_0x243597[_0x3e3f3d(0x186)+_0x3e3f3d(0xb9b)](_0x457fbc,_0x2400b3&0x13d+-0x1*0x130d+0x12cf);break;case _0x2fd94f[_0x3e3f3d(0xa08)]:case _0x3e3f3d(0x96b):_0x243597[_0x3e3f3d(0x714)+'t16'](_0x457fbc,_0x2fd94f[_0x3e3f3d(0xacd)](_0x2400b3,0x47*-0x57+-0xb*0x376+-0x3e33*-0x1),!![]);break;case _0x2fd94f[_0x3e3f3d(0x839)]:case _0x3e3f3d(0xabf):_0x243597['setIn'+_0x3e3f3d(0xd42)](_0x457fbc,_0x2400b3|-0x57d+0x1*0x469+0x114,!![]);break;case _0x3e3f3d(0xd4a):_0x243597[_0x3e3f3d(0xd7b)+_0x3e3f3d(0x53b)](_0x457fbc,_0x2400b3,!![]);break;default:_0x243597['setIn'+_0x3e3f3d(0xd42)](_0x457fbc,_0x2400b3|-0x1*0x139d+-0x20c+0x15a9,!![]);}return!![];}}catch(_0x5b89bd){return![];}}var _0x57c9cb={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x2fd94f[_0x3f0b99(0x839)]},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x2fd94f['mTeCE']},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x4c3f81(_0x2789f9){var _0x2afff5=_0x3f0b99,_0x35014c={'xNTSQ':'insta'+_0x2afff5(0xd20)+_0x2afff5(0x43f)+_0x2afff5(0x975)+'s.mem'+_0x2afff5(0xd3a)};if(_0x2fd94f[_0x2afff5(0x898)](_0x2fd94f[_0x2afff5(0x5d0)],_0x2afff5(0x18e))){if(_0x333770&&_0x227dc9[_0x2afff5(0xd32)+'r']&&_0x4207ec['buffe'+'r']['byteL'+_0x2afff5(0xa59)])return _0x85f05d[_0x2afff5(0x655)+'e']=_0x211779['sourc'+'e']||_0x35014c['xNTSQ'],new _0x4e9d0c(_0x1bacd2['buffe'+'r']);}else{var _0x38c462='';for(var _0x529d27=0x21ed+-0x2606+-0x1*-0x419;_0x2fd94f[_0x2afff5(0xb58)](_0x529d27,_0x2789f9[_0x2afff5(0x35a)+'h']);_0x529d27++){var _0x164882=_0x2789f9[_0x529d27][_0x2afff5(0x7e7)+_0x2afff5(0xa00)](-0x7*0x51e+-0x353*0x2+-0x2*-0x1544);_0x38c462+=(_0x2fd94f['zzpEL'](_0x164882[_0x2afff5(0x35a)+'h'],-0x2167+0x15ec+0xb7d*0x1)?'0':'')+_0x164882;}return _0x38c462;}}function _0x11292e(_0x42ca10,_0x1d9601,_0x245709){var _0x4da59d=_0x3f0b99,_0x2eea2f=_0x2fd94f['iwpmm'](_0x220aeb);if(!_0x2eea2f)return _0x15e079['faile'+'d']++,_0x15e079[_0x4da59d(0xc5e)+_0x4da59d(0xbdf)]=_0x15e079[_0x4da59d(0xc5e)+_0x4da59d(0xbdf)]||_0x4da59d(0x229)+'APU8\x20'+_0x4da59d(0xcbb)+'ty\x20in'+_0x4da59d(0x3e0)+'e\x20not'+_0x4da59d(0xdd6)+_0x4da59d(0xd0b)+'\x20via\x20'+_0x4da59d(0xb7c)+'me.re'+_0x4da59d(0x8ba)+_0x4da59d(0xa81)+_0x4da59d(0x869)+'any\x20w'+'indow'+_0x4da59d(0xdec)+'al',null;if(_0x1d9601<0x1*0xec9+0x102e+-0x1ef7||_0x2fd94f[_0x4da59d(0x634)](_0x2fd94f[_0x4da59d(0xc16)](_0x1d9601,_0x245709),_0x2eea2f[_0x4da59d(0x701)+_0x4da59d(0xa59)]))return _0x15e079[_0x4da59d(0xd78)+'d']++,_0x15e079['lastE'+_0x4da59d(0xbdf)]=_0x15e079[_0x4da59d(0xc5e)+_0x4da59d(0xbdf)]||'addre'+_0x4da59d(0x66d)+(_0x42ca10+_0x1d9601)['toStr'+_0x4da59d(0xa00)](0x66a*-0x1+-0x1e7a+0x24f4)+_0x2fd94f[_0x4da59d(0x1f9)]+_0x2eea2f[_0x4da59d(0x701)+_0x4da59d(0xa59)]['toStr'+_0x4da59d(0xa00)](-0x2656+0x13cc+-0x1*-0x129a),null;try{if(_0x2fd94f[_0x4da59d(0x234)](_0x2fd94f['qPKGx'],_0x2fd94f[_0x4da59d(0x489)])){var _0x2507e1=new Uint8Array(_0x245709);for(var _0x59a5f0=0x997+0x1*-0x22f6+0x195f;_0x59a5f0<_0x245709;_0x59a5f0++)_0x2507e1[_0x59a5f0]=_0x2eea2f[_0x4da59d(0x19a)+_0x4da59d(0xb9b)](_0x42ca10+_0x1d9601+_0x59a5f0);return _0x15e079['ok']++,_0x2507e1;}else _0x3e0dab[_0x4da59d(0x61e)+_0x4da59d(0x274)]=!!(_0xed90ac&&_0x4fd791['Modul'+'e']),_0x2faabc['heapU'+'8']=!!(_0x15f35c&&_0x44a374[_0x4da59d(0xa34)+'e']&&_0x3947b0['Modul'+'e'][_0x4da59d(0xde2)+'8']),_0x3f81b8[_0x4da59d(0xb73)+'ytes']=_0x3a5c22['heapU'+'8']?_0x2ace6e['Modul'+'e'][_0x4da59d(0xde2)+'8']['lengt'+'h']:0x36+0x1cfd+0x5d7*-0x5;}catch(_0x1d3900){return _0x15e079[_0x4da59d(0xd78)+'d']++,_0x15e079[_0x4da59d(0xc5e)+'rror']=_0x15e079['lastE'+_0x4da59d(0xbdf)]||String(_0x1d3900&&_0x1d3900[_0x4da59d(0x437)+'ge']||_0x1d3900)[_0x4da59d(0x257)](-0x1fae+-0x1*0x251+0x3c7*0x9,-0x1b79+-0x41a*-0x8+-0x4df),null;}}function _0xa87e07(_0x545a30,_0xdb3ef3,_0x2323ba){var _0x3eb02f=_0x3f0b99,_0x3b2c3b=('8|4|5'+'|9|3|'+'1|7|0'+_0x3eb02f(0x691))[_0x3eb02f(0xae3)]('|'),_0x93843b=-0x88*-0x44+0x183*-0x17+-0x1*0x15b;while(!![]){switch(_0x3b2c3b[_0x93843b++]){case'0':var _0xffdee1=_0x2fd94f['QJAPd'](_0x2323ba,_0x3eb02f(0xe65))?_0x550d3f['getFl'+_0x3eb02f(0x53b)](_0x4acb9f[_0x3eb02f(0xba6)],!![]):_0x2fd94f[_0x3eb02f(0xa7c)](_0x2323ba,_0x2fd94f[_0x3eb02f(0xb16)])?_0x550d3f[_0x3eb02f(0x339)+'t32'](_0x4acb9f[_0x3eb02f(0xba6)],!![]):_0x550d3f['getUi'+_0x3eb02f(0xb9b)](_0x4acb9f['fake']);continue;case'1':var _0x3ba685=_0x550d3f['getIn'+'t32'](_0x4acb9f[_0x3eb02f(0xd19)+'n'],!![]);continue;case'2':var _0x2a3bd4=_0x550d3f[_0x3eb02f(0x19a)+'nt8'](_0x4acb9f[_0x3eb02f(0xe6a)+'e'])&0x1187*0x2+0xab1+-0x2dbe;continue;case'3':var _0x371ee5=_0x550d3f[_0x3eb02f(0x339)+'t32'](_0x4acb9f[_0x3eb02f(0xcd9)],!![]);continue;case'4':var _0x1b88cc=_0x11292e(_0x545a30,_0xdb3ef3,_0x4acb9f[_0x3eb02f(0x66f)]);continue;case'5':if(!_0x1b88cc)return null;continue;case'6':return{'keyAtOffset0':_0x371ee5,'hidden':_0x3ba685,'inited':_0x444388,'fake':_0xffdee1,'act':_0x2a3bd4,'hex':_0x4c3f81(_0x1b88cc),'alt':_0x2fd94f['PHIyw'](_0x2323ba,_0x3eb02f(0xb3c))?_0x3ba685^_0x2fd94f['eZCAV'](_0xffdee1,0x74*0x1+-0xe41*-0x1+-0x5*0x2f1):null};case'7':var _0x444388=_0x2fd94f[_0x3eb02f(0x68d)](_0x550d3f[_0x3eb02f(0x19a)+'nt8'](_0x4acb9f[_0x3eb02f(0x2c1)+'d']),-0x1286*-0x2+0x7a*0x41+-0xb*0x62f);continue;case'8':var _0x4acb9f=_0x57c9cb[_0x2323ba];continue;case'9':var _0x550d3f=new DataView(_0x1b88cc[_0x3eb02f(0xd32)+'r'],_0x1b88cc['byteO'+'ffset'],_0x1b88cc[_0x3eb02f(0x701)+_0x3eb02f(0xa59)]);continue;}break;}}function _0x1f1a15(_0x7c7abd,_0x5d9128,_0x602715){var _0x5d3410=_0x3f0b99;if(_0x2fd94f[_0x5d3410(0xcd7)]==='UeeDA'){if(_0x2fd94f['LQTCo'](_0x7c7abd,_0x2fd94f[_0x5d3410(0x8b0)]))return _0x4c2b27(_0x5d9128^_0x602715);if(_0x7c7abd===_0x5d3410(0xb3c))return _0x2fd94f[_0x5d3410(0x37f)](_0x5d9128^_0x602715,0x172d+0x23*0xd+-0x18f4);return(_0x2fd94f['VQLZe'](_0x5d9128,_0x602715)&0x201e*0x1+0x51f*-0x7+0x4ba)!==-0x69e+0x1cfd+-0x775*0x3?0x647+0x259c+0x1*-0x2be2:0xa82+-0x10c9+-0x647*-0x1;}else{var _0x46918b=_0x52ab0d;for(var _0x3d65c5=-0xe7d*0x1+-0x8b*0x2a+0x254b;_0x3d65c5<_0x452788['lengt'+'h'];_0x3d65c5++){var _0xac0a42=_0x1ad1b0[_0x5d3410(0xd22)](_0x22d666[_0x3d65c5]['v'][-0xe90+0xd99+0xf8]-_0x368da7);if(_0x2fd94f['uwfgS'](_0xac0a42,_0x46918b))_0x46918b=_0xac0a42;}_0x424405-=_0x46918b;}}function _0x2f55c3(_0x5771ac,_0xca58bb,_0x1fc23f){var _0x75e3ab=_0x3f0b99,_0x1c69c3=_0x57c9cb[_0x1fc23f];if(!_0x1c69c3)return null;var _0x1402d7=_0x2fd94f['iZijN'](_0x55b637,_0x2fd94f[_0x75e3ab(0x1ef)](_0x5771ac,_0xca58bb)+_0x1c69c3[_0x75e3ab(0xcd9)],'u8'),_0x222663=_0x55b637(_0x2fd94f['BOQSs'](_0x5771ac,_0xca58bb)+_0x1c69c3[_0x75e3ab(0xd19)+'n'],'i32'),_0x1cb589=_0x2fd94f['MhjSV'](_0x55b637,_0x2fd94f[_0x75e3ab(0x232)](_0x5771ac+_0xca58bb,_0x1c69c3['inite'+'d']),'u8'),_0x23172f=_0x2fd94f['ErMof'](_0x55b637,_0x2fd94f[_0x75e3ab(0x5f5)](_0x5771ac,_0xca58bb)+_0x1c69c3['fake'],_0x1fc23f===_0x75e3ab(0xe65)?_0x75e3ab(0xd4a):_0x1fc23f===_0x2fd94f[_0x75e3ab(0xb16)]?_0x75e3ab(0x5df):'u8'),_0x59093d=_0x2fd94f[_0x75e3ab(0xa16)](_0x55b637,_0x2fd94f[_0x75e3ab(0x99c)](_0x2fd94f[_0x75e3ab(0xe19)](_0x5771ac,_0xca58bb),_0x1c69c3[_0x75e3ab(0xe6a)+'e']),'u8');if(_0x2fd94f['hAJsk'](_0x1402d7,undefined)||_0x222663===undefined||_0x2fd94f[_0x75e3ab(0xc35)](_0x23172f,undefined)||_0x2fd94f[_0x75e3ab(0x7cb)](_0x59093d,undefined))return null;_0x1402d7&=0x35*0xb0+0x1ad9+-0x3e4a,_0x222663|=0x53f*0x1+0x5*-0x316+0xa2f,_0x1cb589=_0x2fd94f[_0x75e3ab(0x4ca)](_0x1cb589||0x986+0x996+-0x131c,-0x1586+-0xc34+0x21bb),_0x59093d&=0x15c5+0x1cc*-0x14+0xe2c;var _0x41f92d;if(_0x2fd94f['QJAPd'](_0x1fc23f,_0x2fd94f['JKLKL']))_0x41f92d=_0x4c2b27(_0x222663^_0x1402d7);else{if(_0x1fc23f==='obfI')_0x41f92d=_0x222663^_0x1402d7|-0x1d18+-0xdd8*0x2+0x38c8;else _0x41f92d=_0x2fd94f[_0x75e3ab(0x949)](_0x2fd94f[_0x75e3ab(0x68d)](_0x222663^_0x1402d7,-0x765*0x1+0x98e+-0x12a),-0x192*0x5+-0xefa*-0x2+-0x161a)?0x216d*0x1+-0x7c1+0x1*-0x19ab:0x230+-0xd6c*0x1+0xb3c;}return{'real':_0x41f92d,'fake':_0x23172f,'act':_0x59093d,'init':_0x1cb589,'key':_0x1402d7,'hidden':_0x222663};}function _0xffe78e(_0x8cc979,_0x4304a3,_0x5e155a,_0x4e988b){var _0xa605d3=_0x3f0b99;if(_0xa605d3(0x5e5)!==_0x2fd94f[_0xa605d3(0x284)]){var _0x3ac5b3=_0x57c9cb[_0x5e155a],_0x140703=_0x11292e(_0x8cc979,_0x4304a3,_0x3ac5b3[_0xa605d3(0x66f)]);if(!_0x140703)return![];var _0x3e6918=new DataView(_0x140703['buffe'+'r'],_0x140703[_0xa605d3(0xc7c)+_0xa605d3(0xcb4)],_0x140703['byteL'+_0xa605d3(0xa59)]),_0x21055b=_0x2fd94f[_0xa605d3(0x92d)](_0x3ac5b3['keyTy'+'pe'],'u8')?_0x3e6918['getUi'+_0xa605d3(0xb9b)](_0x3ac5b3['key']):_0x3e6918[_0xa605d3(0x339)+_0xa605d3(0xd42)](_0x3ac5b3['key'],!![]),_0x5d7734;if(_0x2fd94f['LQTCo'](_0x5e155a,_0x2fd94f[_0xa605d3(0x8b0)]))_0x5d7734=_0x2fd94f[_0xa605d3(0x59d)](_0x2484b1,_0x4e988b);else{if(_0x5e155a===_0xa605d3(0xb3c))_0x5d7734=_0x4e988b|-0xee*0x3+-0x814+-0x56f*-0x2;else _0x5d7734=(_0x4e988b?0xc7*0x17+-0x132b+0x14b:-0x7b+0x1*-0x1fff+0x103d*0x2)&0xe8*-0x1a+-0x3*-0x727+0x31a;}return _0x1dc2a9(_0x2fd94f['JPyMT'](_0x8cc979,_0x4304a3)+_0x3ac5b3['hidde'+'n'],_0xa605d3(0x5df),_0x2fd94f['VQLZe'](_0x5d7734,_0x21055b))&&_0x1dc2a9(_0x2fd94f['bYUJo'](_0x8cc979,_0x4304a3)+_0x3ac5b3['fake'],_0x5e155a===_0x2fd94f[_0xa605d3(0x8b0)]?_0xa605d3(0xd4a):_0x5e155a===_0xa605d3(0xb3c)?_0xa605d3(0x5df):'u8',_0x2fd94f[_0xa605d3(0xa1e)](_0x5e155a,_0x2fd94f[_0xa605d3(0x8b0)])?_0x4e988b:_0x2fd94f['vkOVC'](_0x5e155a,'obfI')?_0x4e988b|0xc9+-0x3*0x76+0x99:_0x4e988b?0x63*-0x21+0x3*-0x5c5+0x1e13:0x7e1+0x219*-0x3+-0x196)&&_0x1dc2a9(_0x8cc979+_0x4304a3+_0x3ac5b3['activ'+'e'],'u8',-0xeb6+-0x22d*0x2+0x1310);}else _0xb59507['style'][_0xa605d3(0x1d9)+'ty']=_0xdb95cd['open']?'1':'.5';}var _0x30cca2={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x52859c=-0x1ea8+-0x2567+0x440f+0.03,_0x56fd21=-0x13ed*-0x1+0x2570+-0x395b*0x1,_0x37909f={},_0x578a3b=-0x21ff+0x88f*-0x1+0x1a*0x1a3,_0x34cdf0=[],_0x4f19c5=[];function _0x3898ba(_0x22bea1){var _0x11723f=_0x3f0b99,_0x4dba9b={'kufPW':function(_0x5b884e){return _0x5b884e();}};if(_0x2fd94f['XSRsk'](_0x2fd94f['dRZyg'],_0x11723f(0xdb7)))_0xdc2a05=!_0x4a549b,_0x4dba9b[_0x11723f(0x853)](_0x4d277b);else{var _0xd55f1d=_0x2404cb[_0x11723f(0xa1a)+'ntrol'+'ler']||[],_0x250b14=[];_0x4f19c5=[],_0x34cdf0=[];for(var _0x51ea96=-0x1d3b+-0x1*-0xd88+0xfb3;_0x2fd94f[_0x11723f(0x72b)](_0x51ea96,_0xd55f1d['lengt'+'h']);_0x51ea96++){var _0x226435=_0xd55f1d[_0x51ea96][0x10e5*0x1+-0x13*-0xb4+-0x5*0x60d];if(_0xd55f1d[_0x51ea96][-0x107b*-0x1+0x561+-0x15db]!==_0x11723f(0xe65))continue;var _0x1e0928=_0x2fd94f[_0x11723f(0x1c7)](_0xa87e07,_0x22bea1,_0x226435,_0x11723f(0xe65));if(!_0x1e0928||_0x2fd94f[_0x11723f(0x5a8)](_0x1e0928['inite'+'d'],0x12f2+0x5b4+-0x18a5))continue;var _0x4e2553=_0x1f1a15(_0x2fd94f['JKLKL'],_0x1e0928[_0x11723f(0xd19)+'n'],_0x1e0928[_0x11723f(0x9b2)+_0x11723f(0xd48)+'t0']);if(typeof _0x4e2553!=='numbe'+'r'||!isFinite(_0x4e2553))continue;var _0x5e7270=_0x22bea1+':'+_0x226435,_0x127e29=_0x37909f[_0x5e7270];if(!_0x127e29||_0x4e2553!==_0x127e29['lastW'+_0x11723f(0xdea)+'n'])_0x127e29=_0x37909f[_0x5e7270]={'base':_0x4e2553,'lastWritten':null};var _0x374139=_0x127e29[_0x11723f(0x70c)],_0x3d3edb=Math[_0x11723f(0xd22)](_0x374139);if(_0x3d3edb<0x9b2*0x3+-0x11*0x146+-0x770+0.0001||_0x3d3edb>0xdcf*0xc+0x55b0+0x8b3c){_0x4f19c5['push']({'o':_0x226435,'v':_0x4e2553,'why':_0x11723f(0x3e2)+_0x11723f(0x721)+'e'});continue;}_0x250b14[_0x11723f(0x1ea)]({'o':_0x226435,'v':_0x4e2553,'a':_0x3d3edb,'base':_0x374139,'key':_0x5e7270,'st':_0x127e29});}var _0x380946=[];for(var _0x27adc8=0x16*0x92+0xcff+0x1f7*-0xd;_0x27adc8<_0x250b14[_0x11723f(0x35a)+'h'];_0x27adc8++){if(_0x11723f(0xe3c)!==_0x11723f(0xe3c))_0x2fd94f['rkPNl'](_0x298665,!![]);else{var _0x25e6bb=_0x250b14[_0x27adc8]['a'],_0x97fb07=null;for(var _0x21a698=0x8d6+0xb3a+-0xc*0x1ac;_0x2fd94f[_0x11723f(0xd87)](_0x21a698,_0x380946[_0x11723f(0x35a)+'h']);_0x21a698++){if(_0x2fd94f['XSRsk'](_0x2fd94f[_0x11723f(0x8bf)],_0x2fd94f[_0x11723f(0x8bf)]))_0x5ae4f6['warni'+'ngs']['push']('windo'+'w.Uni'+'tyWeb'+'Modki'+_0x11723f(0x759)+_0x11723f(0x6b1)+_0x11723f(0x1e6)+_0x11723f(0xd34)+_0x11723f(0xa62)+_0x11723f(0x406)+_0x11723f(0xd57)+_0x11723f(0x506)+'unnin'+'g\x20bli'+_0x11723f(0x2f6));else{var _0x933cd5=_0x2fd94f['PVCMm'](_0x380946[_0x21a698][_0x11723f(0xb9f)],_0x25e6bb);if(_0x2fd94f['Nrfly'](_0x933cd5,-0x2c7*0xb+0x1*0x24e5+0x657*-0x1-_0x52859c)&&_0x933cd5<0x1c8d*-0x1+0x9e*0x3f+0x52a*-0x2+_0x52859c){if(_0x2fd94f[_0x11723f(0xb72)]===_0x11723f(0x514)){_0x97fb07=_0x380946[_0x21a698];break;}else{var _0x4683c3=_0x29f3ad['_runt'+_0x11723f(0xaba)];if(_0x2fd94f['Tvftl'](typeof _0x4683c3[_0x11723f(0xc93)+'veGam'+'e'],_0x11723f(0x3d8)+_0x11723f(0x98a))){var _0x6e0416=_0x4683c3[_0x11723f(0xc93)+_0x11723f(0xbb1)+'e']();if(_0x6e0416)return _0x4cbd9b[_0x11723f(0x655)+'e']=_0x2fd94f[_0x11723f(0x838)],_0x6e0416;}if(_0x4683c3[_0x11723f(0x764)])return _0x3c9dcf['sourc'+'e']=_0x2fd94f['LEvnG'],_0x4683c3['_game'];}}}}!_0x97fb07&&(_0x97fb07={'mean':_0x25e6bb,'members':[]},_0x380946[_0x11723f(0x1ea)](_0x97fb07));_0x97fb07[_0x11723f(0x385)+'rs']['push'](_0x250b14[_0x27adc8]),_0x97fb07[_0x11723f(0xb9f)]=0x2*0x1079+-0xfac+0x2*-0x8a3;for(var _0x604020=-0x1723+0x31f*-0xb+-0x3*-0x1328;_0x2fd94f[_0x11723f(0xa6f)](_0x604020,_0x97fb07[_0x11723f(0x385)+'rs'][_0x11723f(0x35a)+'h']);_0x604020++)_0x97fb07[_0x11723f(0xb9f)]+=_0x97fb07['membe'+'rs'][_0x604020]['a'];_0x97fb07[_0x11723f(0xb9f)]/=_0x97fb07['membe'+'rs'][_0x11723f(0x35a)+'h'];}}var _0x431b7c=[];for(var _0x498d44=-0x1d92*0x1+-0xc77*-0x1+0x97*0x1d;_0x498d44<_0x380946[_0x11723f(0x35a)+'h'];_0x498d44++){if(_0x380946[_0x498d44][_0x11723f(0x385)+'rs'][_0x11723f(0x35a)+'h']>=_0x56fd21)_0x431b7c[_0x11723f(0x1ea)](_0x380946[_0x498d44]);}if(!_0x431b7c['lengt'+'h']){_0x4f19c5[_0x11723f(0x1ea)]({'o':-(-0x25*-0xdf+0x38*-0xc+-0x1d9a),'v':0x0,'why':_0x2fd94f['emZjQ'](_0x2fd94f[_0x11723f(0x69f)](_0x11723f(0xafb)+'oup\x20o'+'f\x20',_0x56fd21),'\x20Obsc'+'uredF'+_0x11723f(0x1d6)+'\x20agre'+'ed')});return;}var _0x4b7768=_0x431b7c[-0x209*-0x1+-0x4*0x2b7+0x1*0x8d3]['mean'];for(var _0x329913=-0x5*0x5c1+-0x13e8+-0x1*-0x30ad;_0x2fd94f['KLpXG'](_0x329913,_0x431b7c[_0x11723f(0x35a)+'h']);_0x329913++)if(_0x431b7c[_0x329913]['mean']<_0x4b7768)_0x4b7768=_0x431b7c[_0x329913][_0x11723f(0xb9f)];var _0x4d3556=_0x2fd94f[_0x11723f(0x834)](_0x4b7768,-0x4a*-0x28+-0xe32+-0x1*-0x2a2+0.5);for(var _0x6d5aef=0xe*0xdc+-0x2601+-0x3d*-0x6d;_0x2fd94f[_0x11723f(0x595)](_0x6d5aef,_0x380946[_0x11723f(0x35a)+'h']);_0x6d5aef++){if(_0x380946[_0x6d5aef]['membe'+'rs']['lengt'+'h']>=_0x56fd21)continue;for(var _0x4812b3=-0x80f+0x1bcb+-0x4ef*0x4;_0x2fd94f[_0x11723f(0xb1e)](_0x4812b3,_0x380946[_0x6d5aef][_0x11723f(0x385)+'rs'][_0x11723f(0x35a)+'h']);_0x4812b3++){_0x4f19c5['push']({'o':_0x380946[_0x6d5aef]['membe'+'rs'][_0x4812b3]['o'],'v':_0x380946[_0x6d5aef]['membe'+'rs'][_0x4812b3]['v'],'why':_0x11723f(0xcf5)+'eton'});}}for(var _0x2860b6=0x233f+0x4c1+-0x2800;_0x2fd94f[_0x11723f(0xd87)](_0x2860b6,_0x431b7c[_0x11723f(0x35a)+'h']);_0x2860b6++){var _0x49d9c5=_0x431b7c[_0x2860b6]['membe'+'rs'];for(var _0x127fa2=-0x24d3+-0x1cd1*0x1+0x2*0x20d2;_0x127fa2<_0x49d9c5[_0x11723f(0x35a)+'h'];_0x127fa2++){if(_0x2fd94f['gmnYz']===_0x11723f(0xc61))_0x2fd94f['rkPNl'](_0x4237de,![]),_0x2fd94f[_0x11723f(0x98d)](_0xd17c51);else{var _0x54741d=_0x49d9c5[_0x127fa2];if(_0x54741d['a']<_0x4d3556){if(_0x2fd94f[_0x11723f(0x6e8)](_0x11723f(0xa13),_0x11723f(0x99d))){var _0x17f3f4=_0x2fd94f[_0x11723f(0x5f5)](_0xb026f7+'\x0a'+_0x3ecbfa['strin'+_0x11723f(0xa82)](_0x3979cb,null,-0x4d1+-0x2537+0x2a09)+'\x0a',_0x39399f);if(_0x3bb10e[_0x11723f(0x6b9)+_0x11723f(0x1e3)]&&_0x2951b3[_0x11723f(0x6b9)+'oard'][_0x11723f(0x86c)+'Text'])_0x5e22cf[_0x11723f(0x6b9)+_0x11723f(0x1e3)][_0x11723f(0x86c)+'Text'](_0x17f3f4)[_0x11723f(0xe44)](function(){var _0x276406=_0x11723f;_0x4ac528['textC'+'onten'+'t']=_0x276406(0xd97)+'d';});else _0x18aa10[_0x11723f(0xe45)+_0x11723f(0xb09)+'t']='Clipb'+'oard\x20'+_0x11723f(0x6d4)+_0x11723f(0x6b0)+_0x11723f(0xc05)+'the\x20p'+'anel\x20'+_0x11723f(0x7d0)+'ad';}else{_0x4f19c5[_0x11723f(0x1ea)]({'o':_0x54741d['o'],'v':_0x54741d['v'],'why':_0x2fd94f['hHHxi'](_0x11723f(0x68b)+'\x20floo'+'r\x20',_0x4d3556['toFix'+'ed'](0x4*0x1a1+-0x21*0x117+0x1d75*0x1))});continue;}}var _0x10f19e=_0x2fd94f[_0x11723f(0x968)](_0x54741d['base'],_0x30cca2[_0x11723f(0x891)+'r']);if(_0xffe78e(_0x22bea1,_0x54741d['o'],_0x2fd94f[_0x11723f(0x8b0)],_0x10f19e)){if(_0x11723f(0xa77)!==_0x2fd94f[_0x11723f(0xc53)])_0x54741d['st']['lastW'+'ritte'+'n']=Math[_0x11723f(0x44f)+'d'](_0x10f19e),_0x578a3b++,_0x34cdf0['push']('0x'+_0x54741d['o']['toStr'+_0x11723f(0xa00)](0x1*-0x1a3e+0x4b1*0x4+-0x78a*-0x1));else{var _0xbfbe18='';_0xf3a168[_0x11723f(0x22b)+'irePr'+'oof']&&(_0xbfbe18=_0x2fd94f[_0x11723f(0xe5e)](_0x2fd94f['xHnnW'](_0x2fd94f['ScZNY'](_0x2fd94f[_0x11723f(0x291)],_0x4b5023['hookF'+'irePr'+'oof'][_0x11723f(0x532)])+_0x2fd94f['LyLzU']+_0x2cdae7[_0x11723f(0x22b)+_0x11723f(0x8cf)+'oof']['origi'+_0x11723f(0xadf)+'nc'],'\x20and\x20'+_0x11723f(0x651)+_0x11723f(0xc93)+'ved=')+_0x477551['hookF'+'irePr'+'oof'][_0x11723f(0xc93)+'veGam'+'eAtFi'+'re']+(_0x11723f(0x2b8)+_0x11723f(0x728)),_0xb5c076[_0x11723f(0x22b)+'irePr'+_0x11723f(0x256)][_0x11723f(0x9ec)+_0x11723f(0x357)+'AtFir'+'e']||_0x11723f(0x761))+_0x2fd94f['NrLua']),_0xb060d3['warni'+_0x11723f(0xe47)]['push'](_0x11723f(0x518)+'\x20inst'+'ance\x20'+'not\x20r'+_0x11723f(0x195)+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20'+(_0x1cebfd[_0x11723f(0x42f)+'ls'][_0x11723f(0x9ec)+'ource']||_0x11723f(0x761))+_0x2fd94f[_0x11723f(0x2e2)]+_0x2fd94f[_0x11723f(0xd72)]+_0xbfbe18);}}}}}}}var _0x2404cb={'FPScontroller':[[-0x17b1+-0x2*0xcdc+0x3179,'obfF'],[0x1*0x1471+-0x1*0x216b+-0x52*-0x29,_0x3f0b99(0xe65)],[0x1c1c+0xe6a*-0x1+-0x6b9*0x2,_0x3f0b99(0xe65)],[-0x1e63*-0x1+0x12bf+0x2*-0x1865,_0x2fd94f['JKLKL']],[0x68*-0x15+-0x375+-0x1*-0xc6d,_0x3f0b99(0xe65)],[0x2666+-0x1e71+-0x1*0x76d,_0x3f0b99(0xe65)],[0x1412+0x742+0x4*-0x6ad,_0x3f0b99(0xe65)],[-0x12c1+-0x21b6*-0x1+-0x9*0x195,_0x2fd94f[_0x3f0b99(0xcdd)]],[-0xd*0xa3+0x2563+0x1*-0x1c58,'obfF'],[-0x674*0x1+0x1d87*0x1+-0x205*0xb,'i32'],[0x1145+0x29*0x95+-0x2*0x1421,'v3'],[0x1205+-0x51*0x3b+-0x2*-0xc9,'u8'],[-0x1a*0x119+0x865+0x1515,_0x2fd94f['JKLKL']],[0x474+0x6*0x198+-0x33f*0x4,'i32'],[0x171f+-0x2*-0x115e+-0x38cf,'u8'],[-0x3*0x697+0x2*0x125f+-0xfe9,_0x2fd94f['mTeCE']],[0x1cd+0xbc*-0xd+-0x9*-0xfb,'u8'],[0x13*-0x1e5+0x15*-0x185+0x3*0x16ff,'u8'],[-0xec*-0x20+-0x10f2+-0xb72,_0x2fd94f['JKLKL']],[0x11e*0x14+0x1b6f+-0x3093,_0x3f0b99(0xe65)],[-0x1760*-0x1+-0x14b*-0xa+0x2302*-0x1,_0x3f0b99(0xd4a)],[0xc*-0xdf+0xc5*-0x2c+0x2da0,'f32'],[0x734+0x1554+0x1b34*-0x1,'v3'],[0x1c0f*0x1+-0x12df+-0x8*0xfa,'v3'],[-0xadf+0xb3*-0xb+0x13fc,_0x2fd94f[_0x3f0b99(0x51b)]],[0x853+0x1dd9+-0x24bc,_0x2fd94f[_0x3f0b99(0x51b)]],[0x2de*-0xc+-0x17af+-0x3b9f*-0x1,'u8'],[-0x3*0x8c9+0x343*-0x8+0x35ff,_0x3f0b99(0xd4a)],[0x17cb+-0x1*-0x38f+-0x19c2,'v3'],[0x2685+-0x1ca5+-0x83c,'u8'],[0xb*-0xd4+0xfc1*-0x1+-0x1*-0x1a91,'f32'],[-0x22c3+-0x2225*-0x1+0x12b*0x2,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x1e41+0x1*-0x11f+0x108e*0x2,'u8'],[-0x1642+0xb7d+0xc82,'u8'],[0x1*-0x2543+0x8c5*0x1+0x1e3e,'obfF'],[-0x2*0x9a9+-0x952*-0x4+-0x101e,'f32'],[-0x2*0x5cf+-0x5*0xad+0x5*0x35f,'u8'],[-0x3*-0xae7+-0xd*0xa+0x1*-0x1e53,_0x2fd94f['JKLKL']],[0x1e5d+-0x1e4f+0x1*0x1ea,'v3'],[0x1344+0x157e+-0x26ba,_0x2fd94f['mqKmT']],[0x58*0x54+-0x2b0*0x5+-0x3d*0x38,_0x2fd94f['eaffj']],[-0x1adf+-0x12*0x135+0x32b5,_0x3f0b99(0xd4a)],[0x4*-0xe8+-0x3*-0x9f9+-0x17ff,_0x2fd94f['eaffj']],[-0x1ea7+-0x1697+0x378e,_0x3f0b99(0xd4a)],[-0x21*0xb7+0x903+0x8*0x21d,_0x2fd94f[_0x3f0b99(0x51b)]],[0x162a*-0x1+-0x28*0x27+0x1e9a,_0x3f0b99(0xd4a)],[0x12a8+-0x2303+0x12b7,'u8'],[-0x560+-0xad*-0x10+-0x313,'u8'],[0x31*0x61+-0x1*0x36b+0xcc8*-0x1,'u8'],[0x2207+-0x1656+-0x35*0x2d,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x27c+-0x2*0xd7+0x68e,'u8'],[-0x164*-0x2+0x641+0xa*-0xaa,'u8'],[-0x1*-0x4a+0xdfe*-0x1+0x407*0x4,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x8ce+-0x26*0x46+0x159e,_0x2fd94f[_0x3f0b99(0x51b)]],[0x15ab+0xd3*0x2a+-0x35d9,_0x2fd94f['eaffj']],[-0x1b39+0x2f*0xce+-0x1a1*0x5,_0x2fd94f['eaffj']],[0x1*0x1b42+0x1110*0x1+0xb*-0x3ce,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x2358+0x24bf*0x1+0x115,_0x3f0b99(0xd4a)],[0x14cb+-0x1ed8+0xc8d,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1721+0x1d5f+-0x1*0x31fc,'v3'],[-0xe3+0xf16+-0xb9f,'u8'],[-0xa97*-0x2+0x713+-0x1*0x19a9,'v3'],[0x1eb1+-0x779*0x1+0x3*-0x6dc,'f32'],[0x1a65+0x11b4+-0x65*0x69,'v3'],[0x109d*0x2+-0x145e+-0xa24,'f32'],[-0x13*-0x194+0x1f8b+-0x3acb,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1*-0x237a+-0x6*-0x3f5+0xe7c,_0x3f0b99(0xd4a)],[0x249+0x15*-0x197+0x55*0x66,'u8'],[-0x1*-0x145d+0x8e3+-0x1a7b*0x1,'u8'],[-0x13*0x18c+0xe5*0x19+0x1f*0x51,_0x3f0b99(0xd4a)],[-0x1f1*0xd+0x1687+0x1*0x592,_0x3f0b99(0xd4a)],[0x243c+0x4*0x65c+-0x3ac8,'v3'],[-0x1d0a+0x6*-0x30d+0x3248,'v3'],[-0x1b0c+-0x1711+-0x11b3*-0x3,'f32'],[0x45*-0x13+-0x10b9*-0x1+0x2de*-0x3,_0x3f0b99(0xd4a)],[-0xa7+-0x455+-0x100*-0x8,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x3*-0x79f+0x88f*-0x3+0x5d8,_0x2fd94f[_0x3f0b99(0x51b)]],[-0xcfb+0x9*0x2a9+-0x7ea,'v3'],[-0x21cf+0x2*-0x1203+0x48ed,'u8'],[0xfc9+-0x23f3+0x1746,'v3'],[-0x41*-0xd+0xd4d*0x1+-0x2*0x6b9,_0x2fd94f[_0x3f0b99(0x839)]],[-0x136*0x7+-0x1ee3+-0x2a89*-0x1,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x10*0x16f+-0x811+0x1*0x2231,_0x3f0b99(0xd4a)],[-0xd42+-0x3*0xa21+0xb3*0x43,'f32'],[-0xe*0x1ed+-0x268f*0x1+0x44c1,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x1*0x245f+-0xa50+-0x1*-0x31ef,'u8'],[0x22b0+0xbc1*0x1+-0x2b30,'u8'],[0x547*-0x3+0x1b05*0x1+-0x7e4,'u8'],[0x87*0x1+0x1*0x267e+-0x23b8,'u8'],[0x2*-0xd62+-0x3*-0x871+0x4bf,'u8'],[0xcd*-0x2b+-0x1ff6+-0xdf1*-0x5,_0x2fd94f['eaffj']],[-0x1457+-0xed7*-0x2+-0x603,_0x3f0b99(0xd4a)],[-0x362*0xa+0x10b8+0x1c*0xbb,_0x2fd94f['eaffj']],[-0x1aff+-0x1*-0x1031+-0xe*-0x103,_0x2fd94f['eaffj']],[0x12ad+0x2414+-0x3361,_0x3f0b99(0xd4a)],[-0x3*0x925+-0x53b*-0x1+0x1998,'u8'],[-0x19fb+0x370+0x19f3,'f32'],[0x1136+-0x15b2+0x7e8*0x1,_0x2fd94f['eaffj']],[-0x1*0x2384+0x7f*-0x2+-0x2*-0x13f9,'u8'],[-0xb*-0x186+-0xfb9+0x26f,'v3'],[0x4*0x4ec+-0x2*0x653+-0x386,'v3'],[0x665+-0x1*-0x1a93+-0x1d68,'v3'],[0x1e3f+0x20ed+-0x2*0x1dc8,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1301+0x10*-0x14b+0x54f,_0x3f0b99(0xd4a)],[-0xae9+-0x3*0x58f+0x1f3a,_0x2fd94f['eaffj']],[-0xf53*-0x1+0x183e+-0x23e9,'v3'],[-0x9b7*0x1+-0x3*-0x49d+0x6c*-0x1,'i32'],[0x3*0x79f+0xd5*0x27+-0x1*0x3398,'u8'],[0x5*0x2e6+-0x19f3+0xf31,'i32'],[0x9*-0x3f5+0x25c1+0x19c,_0x3f0b99(0xd4a)],[0x55*0x67+0x267*-0x1+-0x1c08,_0x3f0b99(0xd4a)],[0x2317+0x2*0x10a1+0x4091*-0x1,_0x2fd94f['eaffj']],[0x53d+0x1b48+-0x13*0x183,_0x2fd94f['eaffj']],[0x9e+0x2*-0xbfe+-0xe*-0x1f1,'v3'],[0x1afc+0xe6f+-0x258f,_0x3f0b99(0x5df)],[-0x5*0x463+-0xad*0x17+0x14ad*0x2,'u8'],[0xd1f+0x1ed4+-0x2812,'u8'],[-0x1fa1+-0x2*-0xf0d+-0x5*-0x115,'u8'],[0x26f0+0xf12+-0x321e,_0x3f0b99(0xd4a)],[-0x231+-0x3b*0x19+0xbdc,_0x3f0b99(0x5df)]],'HealthScript':[[0x1*-0x8b6+-0x98a+0x28*0x77,'u8'],[-0x80f+-0x2b*-0x30+0x5b*0x1,_0x2fd94f['mTeCE']],[0xb*0xc2+0x1365+-0x1b3b,_0x3f0b99(0xd4a)],[0x25a1+-0x8*-0xfa+-0x173*0x1f,_0x2fd94f[_0x3f0b99(0x51b)]],[0x3a9*0x3+-0x1c4e+0x11db,'f32'],[-0xce8+0x2*0x517+-0x346*-0x1,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x5d1*0x2+-0x1*-0x142d+-0xe3*0x9,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x1087+-0x1df3*0x1+-0x1*-0x2f0e,_0x3f0b99(0xd4a)],[0xd*-0x1fb+0x1780+0x2df,_0x3f0b99(0x5df)],[-0x16c1*0x1+0xfaa+0x7bb*0x1,_0x2fd94f['mTeCE']],[0x7*-0x95+-0xce4+-0x15b*-0xd,'u8'],[-0xa3e+0x12d1+-0x7ea,'u8'],[0x1a*-0x41+-0x190d+0x2051,'u8'],[-0x96b*0x2+0x107*0x3+0x106c,'u8'],[0x7db*0x2+0x1443+-0x2339*0x1,_0x2fd94f[_0x3f0b99(0xb16)]],[0x1c1e*-0x1+0xc89*-0x1+0x25*0x11f,_0x2fd94f['mXERz']],[0x103d+-0x1dfb+-0xfa*-0xf,_0x3f0b99(0xb3c)],[0x71d*-0x4+0x181c+0x554,'obfI'],[-0x2*0x77c+-0x6dc+-0x16e4*-0x1,_0x3f0b99(0xb3c)],[-0x1954+0x1e2c+-0x3b4,_0x3f0b99(0x3d7)],[-0x1d*0xdd+-0x742+-0x217b*-0x1,'obfF'],[0xed4+-0x33b*-0x1+-0x10c7*0x1,_0x2fd94f[_0x3f0b99(0x51b)]],[-0xfb5+-0x13c2+0x1*0x24c3,'f32'],[0x6ae+0x1d33+-0x2291,_0x2fd94f['eaffj']],[-0x1c1+0x19ff+-0x1*0x16ea,_0x3f0b99(0xd4a)],[-0x300*0x3+0x6b2*0x1+0x3aa,_0x3f0b99(0xd4a)],[0x258f+-0x3*0x61+-0x230c,'v3'],[0x662*-0x2+-0x1a2f+0x2863*0x1,'f32'],[0x737*0x5+-0x265a+0x3bf,_0x2fd94f[_0x3f0b99(0x51b)]],[0x675+-0x135d*0x1+-0x39a*-0x4,'u8'],[0x606*-0x6+-0xb68+0x3118,'u8'],[0x3b*0x77+-0x18f*0x2+-0x287*0x9,_0x2fd94f[_0x3f0b99(0x839)]]],'PlayerConfig':[],'WeaponManager':[[0x1075+0x5ec*0x6+-0x33e5*0x1,_0x2fd94f[_0x3f0b99(0x839)]],[-0x1729+-0x161f+0x2d64,_0x2fd94f['mTeCE']],[-0x2e1+-0x3f6+-0x6f7*-0x1,'u8'],[0x558+-0x1*-0x77c+-0xcb0,'i32'],[-0x6b0*0x5+0x1418+0xdbc,_0x2fd94f[_0x3f0b99(0x8b0)]],[-0x1f9+-0x1*-0x25be+0x3*-0xbc3,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1*-0x1ecf+0x18b1+-0x1*-0x6a2,'i32'],[-0x1294+0x3*0x307+0xa07,'u8'],[0x5*-0x772+0x13f9+0x63*0x2e,'u8'],[0x33d*-0x9+0x2*-0xfba+0x3d25*0x1,'i32'],[0x2153+-0xe82*-0x2+-0x3dc7,'f32'],[0x3*-0x113+0x1fc5+-0x1bf4,_0x2fd94f['eaffj']],[0x31*0x27+-0x1a86+0x13bb,'i32'],[-0x61*-0x4b+-0x2660+0xab1,'u8'],[0x2664+0x1*0x116f+-0x1*0x36f7,_0x3f0b99(0xb3c)],[-0x1143+0x1da7*0x1+-0xb74,_0x2fd94f['mXERz']],[-0x17*0xdb+0x464*0x3+-0x5*-0x181,'f32'],[-0x1858+0x25d1+0xf5*-0xd,_0x3f0b99(0xd4a)],[0xbfb+0x16b5+-0x21a4,_0x2fd94f[_0x3f0b99(0x51b)]],[0x9c5*0x2+-0x25c4+0x1352,_0x3f0b99(0xd4a)],[-0x24a4+-0x10c*-0x17+0x92*0x18,_0x3f0b99(0xd4a)],[0x66c+-0x1*0x20f6+0x1bb2,'u8'],[-0x1e6*-0xc+0x20a5+-0x143*0x2b,_0x2fd94f['mXERz']],[-0x156d+-0x1982*-0x1+-0x2d5,_0x3f0b99(0xb3c)],[-0x2*-0x10a9+0x184*0x5+-0x2792,_0x2fd94f[_0x3f0b99(0xb16)]],[0x23a3+0x1cb9+0x1f7a*-0x2,_0x3f0b99(0x3d7)],[0xfe0+0x1a37+-0x28a3,'obfB'],[0x1e2*-0xd+-0x412*-0x2+0x11d6*0x1,_0x3f0b99(0x3d7)],[-0x242+0x2016+0x8*-0x389,'obfB'],[0x502+-0x10*0xa6+0x702*0x1,_0x2fd94f['mqKmT']],[0x1cc7*0x1+-0x10b1+-0xa66,_0x3f0b99(0xb3c)],[-0x1704+0x92c*0x2+0x678,_0x2fd94f[_0x3f0b99(0x839)]],[0x109b+0xcf5+-0x25*0xc0,'u8'],[-0x24f5*0x1+-0xd*-0x2ae+-0x1*-0x3f3,_0x2fd94f[_0x3f0b99(0x839)]],[-0x1*0xe11+0x1*-0x2f1+0x2*0x96d,_0x3f0b99(0x5df)],[-0xb3f*0x1+0x1058+-0x319,'i32'],[0x3*0x241+-0x26ba+0x15*0x19f,'u8'],[0x1*-0x1b4b+-0x2247+0x4e6*0xd,'u8'],[-0x1*0x1bc5+0x72e*0x1+0x16b4,'u8'],[0x19ee+-0x132e+-0x4a2,'u8'],[-0x20e5+0x2f6*0x5+-0x1a*-0xc7,'u8'],[0x92*0xd+-0x9aa*-0x2+-0x186e,'i32'],[0x1*0x90f+0x6b*-0x1e+0x5d3,'u8']],'GG_GameManager':[[0x187*-0x3+0x1*0x1799+-0x12e0,'u8'],[0x1f7d+0x4c*-0xe+-0x1b29,'f32'],[0x1*0x823+0x1*0xb5c+-0x133b,'u8'],[0xc79*0x1+-0x9b*0xb+0x58b*-0x1,'u8'],[-0x16f3+-0x109f+0x27da*0x1,_0x3f0b99(0xd4a)],[-0x136d+0x672+-0x67*-0x21,_0x3f0b99(0xd4a)],[-0x7bf*-0x3+0x2*-0xb8d+0x9*0x5,_0x3f0b99(0x5df)],[0x1316+-0x5f*0x42+0x2de*0x2,_0x3f0b99(0x5df)],[-0x1bb*0x2+-0x14e2+0x18b0,'u8'],[0x1cbf+-0x27*0x80+-0x8cb,'u8'],[-0xe5*-0x2b+-0x1a8+-0x2457,'f32'],[0x1854+-0x1e35+0x65d,'f32'],[0xaa6+0xf0f+-0x9d*0x29,_0x2fd94f[_0x3f0b99(0x839)]],[0x2487+0x14d4+-0x2d*0x143,'u8'],[-0x1*-0xf0b+-0x4c3+-0x994,_0x3f0b99(0x5df)],[-0x14ed+0x2*-0x1245+0x13d*0x2f,_0x2fd94f['mTeCE']],[0x1*-0x20f9+-0x697+0x2850,_0x2fd94f[_0x3f0b99(0x839)]],[0x284*0x4+-0xba8*-0x1+-0x30*0x6f,'obfI'],[-0x1553+0x11c3+0x48c,_0x2fd94f[_0x3f0b99(0xb16)]],[-0x1106*-0x2+0x43*-0x7b+-0xcb,_0x3f0b99(0xb3c)],[-0xb1*0xa+-0xb2b+0x1341,'u8'],[-0x1c*-0xcb+-0xe*-0x28c+-0x38ac,_0x3f0b99(0x5df)],[-0x6fd*0x2+0x199+-0xeb*-0xf,'u8'],[0x9*-0x19d+0x1df*-0x6+0x1*0x1b2f,_0x2fd94f['eaffj']],[0x180*-0x3+0x560*-0x2+0x10c0,'u8'],[-0x1617+-0x3ca+0x3*0x923,'u8'],[-0x1aff+0x1*0x65+0x2*0xe1f,'u8'],[-0x21f9+0x46c+0x1f35,_0x2fd94f[_0x3f0b99(0x839)]],[0xe*0x1f4+-0x206+-0x2*0xbd3,_0x2fd94f[_0x3f0b99(0x51b)]],[0x26b0+0x4*0x61+-0x55*0x74,'u8'],[-0x4d*-0x65+0x5e5*0x2+-0x287a,'u8'],[0x2455*0x1+-0x51*-0x1+-0x22*0x107,_0x2fd94f['mTeCE']],[-0x115*-0x1+-0x67a+0x721,_0x3f0b99(0x5df)],[0x1*0xd12+0xd25+-0x1877,_0x3f0b99(0xd4a)],[0x201*-0xf+0x209+0x1dca,_0x2fd94f[_0x3f0b99(0x839)]],[0x29*0x26+0x1*0x241c+-0x1435*0x2,_0x2fd94f[_0x3f0b99(0x51b)]],[0x741*-0x3+-0x5e9+0x2e*0xa4,_0x2fd94f['mTeCE']],[0x21d+-0x1ad*-0x3+0x2aa*-0x2,_0x3f0b99(0x5df)]],'TDM_GameManager':[[-0x1*0x225d+0x3*0x161+0x1*0x1e52,'u8'],[0x10a7+0x1844+0xb1*-0x3b,'u8'],[-0x12dd+-0x214d+-0xb*-0x4c1,'u8'],[0x1*-0x48e+-0x1*0x1a21+0x1ed3,_0x2fd94f['eaffj']],[0x591*-0x3+0x1ee3+-0x2*0x6ec,'u8'],[0xe*0x2a1+0x2524+-0x4996,'f32'],[0x14c+0x253c+-0x2628,_0x2fd94f['eaffj']],[0x13b8+0x2b*-0x94+-0x76*-0xc,_0x2fd94f[_0x3f0b99(0x839)]],[0x433*-0x4+-0x2050+-0x2*-0x18c2,'i32'],[-0xc5*0x2c+0xfef+0x1259,'u8'],[0x122c+-0x334+-0xe8b,'u8'],[0x830+-0x1632+0x2*0x739,'f32'],[-0x3a5*0x3+0x178*0xe+0x1*-0x92d,_0x2fd94f['eaffj']],[0xd04+0x13ee+-0x2*0x103d,_0x3f0b99(0x5df)],[-0x1759+0xaf9*-0x1+-0x116f*-0x2,'u8'],[0x1*0x6fa+0x52*-0x79+0x2058,'obfI'],[0x1e8*-0x1+-0x2*-0x2de+-0xbf*0x4,'obfI'],[0x24af+0x1f83+-0x4346,_0x3f0b99(0xb3c)],[0x26e1+0x858+-0x2e39,'obfI'],[-0xe35*-0x1+-0x11d5+0x4b4,'u8'],[0x1be+-0xb3f*0x1+0x3*0x39f,'u8'],[0x16dc+-0x1aed+-0xc7*-0x7,_0x2fd94f[_0x3f0b99(0x839)]],[-0xa93+-0x1374+0x1f73,'u8'],[-0xcb1*0x3+0x151*0xc+0x1*0x17cb,'u8'],[-0x164*-0xa+0x1*-0x1b91+0xf31,'f32'],[-0x29*-0x8b+0x125*0x1d+-0x35e8,_0x2fd94f[_0x3f0b99(0x839)]],[-0x160d+0x232f+-0xb92,_0x3f0b99(0x5df)],[0x6c8+0x1dcc+-0x2300,_0x3f0b99(0xd4a)],[-0x2b*-0xb3+-0x333+-0x1946,_0x2fd94f['mTeCE']],[-0x2235+-0x2db+0x26ac,_0x2fd94f[_0x3f0b99(0x839)]],[-0xc5d+-0x969+0x1766,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1da3+-0x1*0x3ab+-0x1854,'f32'],[-0x1987+0x26a5+-0xb76,_0x2fd94f[_0x3f0b99(0x839)]],[0x6*-0x64a+0x15a8+-0x4*-0x471,'u8'],[-0x24b8+0x2*0xf85+0x1*0x75f,'u8'],[-0x1830+0x443*-0x4+0x2af4,_0x3f0b99(0xd4a)]],'PhotonNetworkSync':[[-0x133b*0x1+0x2509+-0x119a*0x1,'v3'],[-0x1f39*-0x1+-0x29*0xbc+-0x1*0xdd,'i32'],[0x1c18+0x202f+-0x3c03,'u8'],[0xefa+0x4*-0x6df+0xcc7*0x1,'u8'],[0x1*0x23b+-0x6a0+0x4ad,'v3'],[-0x1499*0x1+0x1*0x8d2+0xc1b,'u8'],[-0x231a*-0x1+0xfb5*0x2+0x5*-0xd3c,_0x3f0b99(0x5df)],[0x2*0x1174+0xa3b+-0x2cc7*0x1,_0x3f0b99(0x5df)],[-0x9*-0x22d+-0xd25+-0x610,_0x2fd94f['eaffj']],[-0xb44+-0x1898+0x2440,_0x3f0b99(0xd4a)],[-0x1d9*0x10+0x4*-0x1a0+0x2478,_0x3f0b99(0xd4a)],[0x1fd0+0x1f29+0xef*-0x43,'v3'],[0xbe4+-0x12cb+0x3*0x275,_0x3f0b99(0xd4a)],[-0x5*0x418+-0x1d54+0x1*0x3248,_0x3f0b99(0xd4a)],[0x61d*-0x1+-0x1933+0xfe8*0x2,_0x2fd94f[_0x3f0b99(0x839)]],[-0x1*0x1079+0xa36+0x6cb,_0x3f0b99(0xd4a)]],'MouseLook':[[-0x584*0x1+0x6d*-0x35+-0x10b*-0x1b,_0x2fd94f[_0x3f0b99(0x51b)]],[0x193c+0xe3e+-0x2762,_0x2fd94f['eaffj']],[-0x2619+-0xfac+0x35e1,_0x3f0b99(0xd4a)],[0x2c*-0x49+-0x49*0x31+0x1aa5,_0x2fd94f['eaffj']],[0x717+-0x125b+0xb68,_0x2fd94f[_0x3f0b99(0x51b)]],[0x456+-0x26b3*0x1+0x1*0x2285,'f32'],[0x4b*0x17+0x1621+-0x1cae,_0x2fd94f[_0x3f0b99(0x51b)]],[0xf1*-0x23+0xdf0+0x1*0x1337,'u8'],[0x1*0x1aef+0x1*0xd01+-0xf8*0x29,_0x2fd94f['eaffj']],[0x676*-0x6+0x3*0x52d+-0x1*-0x1779,_0x3f0b99(0xd4a)],[-0x7d2+-0xc3+-0x1*-0x8d5,_0x3f0b99(0x5df)],[0x122f+-0x1*0x1efe+0xd13*0x1,'u8'],[0x12b3+-0x143e+-0x1*-0x1d3,'v2']],'NetworkPlayerAnimations':[[-0x1045+0x1400+-0x313,'v3'],[-0x1a1a+-0x1*0x176+0x192*0x12,'v3'],[-0x30d+-0x575*-0x5+-0x14e*0x12,'u8'],[0x175*0x1a+0x1a*-0xcd+0x254*-0x7,_0x2fd94f[_0x3f0b99(0x839)]],[-0x6+-0x7f4*0x2+0x10b6,'i32'],[-0x231a+0x1e28+0x5be,'f32'],[0xdb5+0xe3*0x7+-0x131a,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1c88+0x1f4+-0x1da0,'f32'],[0x13f9+-0x520+-0xdf9,'f32'],[-0x7a5*-0x5+-0x1ce9*0x1+0x434*-0x2,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x1770+0x5*0x57d+-0x315,_0x2fd94f['eaffj']],[-0x236+-0x2*0x419+-0xf2*-0xc,_0x2fd94f[_0x3f0b99(0x51b)]],[0x74*0x24+0x2151+-0x11*0x2dd,_0x3f0b99(0xd4a)],[-0x181a+0x9a4+0xf6e,_0x3f0b99(0xd4a)],[-0x1*0x10b+0x813+0x6*-0x102,_0x3f0b99(0xd4a)],[-0x4cd*-0x2+0x480+-0x2b*0x4e,'f32'],[-0x231f+-0x1bfa*-0x1+-0x1*-0x829,_0x3f0b99(0xd4a)],[-0x12dd+-0x1bf2+0x2fd7,'i32'],[0x17be*-0x1+-0x1564+0x2*0x1717,'u8'],[-0x5*-0x665+-0x1d84+0x77*-0x3,_0x2fd94f[_0x3f0b99(0x839)]],[0xe9*0x1d+-0x544*0x2+-0xec9,_0x2fd94f[_0x3f0b99(0x839)]],[0x1e34+0x7d*-0x15+-0x12db,'u8'],[0x13a1+-0x8db+-0x9aa,'f32'],[-0x22c0+0x232d+-0xb3*-0x1,_0x3f0b99(0xd4a)],[0x1a93+0x2159*-0x1+0x7ea,_0x3f0b99(0xd4a)],[0x1418+0x15a2+0x3*-0xd86,'f32'],[0x1052+-0x359+-0xbcd,'u8'],[-0x832*-0x2+0x15ce+-0x24fa,'u8'],[-0x23a5*0x1+0x1*-0x2669+0x4b4a,'v3'],[-0xc9d*-0x1+0x235b+-0x2eb0,'v3'],[-0x9a3*0x3+0x717+0x2*0xbb3,'u8']],'NPC_Cotroller':[[0x82e+-0x1d34+-0x4a*-0x49,'v3'],[0x124c+-0x37e+-0xeae*0x1,_0x3f0b99(0xd4a)],[-0x105*0x21+-0x2e*-0xce+0x33b*-0x1,_0x3f0b99(0xd4a)],[0xbe2+0x689+-0x1215,'u8'],[-0x2*-0x709+0xd5a+-0x3*0x907,'u8'],[-0x1b*0x7f+0x2*-0xdee+0x299d,'v3'],[-0x5*-0x299+-0x2343+0x16e2,'u8'],[0xac+-0x1c37+0x1c2b,'f32'],[0x106+-0xa6a+0xa08,_0x2fd94f['eaffj']],[-0xee+-0xecb+-0x1*-0x1071,'f32'],[-0x16c0+0x1*-0x1f21+0x369d,_0x2fd94f[_0x3f0b99(0x51b)]],[0x553*0x3+-0xb02+0x1*-0x42f,'u8'],[-0xd39+0x940*0x1+-0x25*-0x21,'f32'],[0x14b3+0x2409+-0x37e4,_0x3f0b99(0xd4a)],[0x125*-0x1f+0x1*-0x2294+0x46eb,_0x3f0b99(0xd4a)],[-0x1d97+0x2507*-0x1+0x437e,_0x2fd94f['eaffj']],[0x1804+0x1d3*0xb+-0x2b31,'u8'],[-0x41a+0x122a+-0x74*0x1d,_0x2fd94f['eaffj']],[-0x2f6+0x6d*-0x1e+-0x2*-0x856,'v3'],[0x10be*0x2+0x1bad+-0x3c2d,_0x2fd94f['eaffj']],[0x4*0x7f7+0x1*0xb41+-0x1*0x2a1d,_0x2fd94f[_0x3f0b99(0x839)]],[0x1352*-0x1+0x32b*-0x3+0x1*0x1dd7,_0x2fd94f['eaffj']],[-0x67f*0x3+0xe80+0x605,'f32'],[0x2*-0x146+-0x2124*-0x1+0xf4*-0x1f,_0x2fd94f['eaffj']],[-0x1dc3+0x56*-0x4f+-0x25*-0x18d,'v3'],[-0x1169*0x1+0x13a9+-0x90*0x2,_0x2fd94f['eaffj']],[0x407*0x2+0x194*0xc+0x6*-0x44f,'f32'],[-0xaf5*-0x3+0x2*0x652+-0x2c4f*0x1,'v3'],[0x7e*-0x35+0x1f3e+-0x2*0x1f2,'u8'],[-0x1463*0x1+-0x3*0xa4e+0x1187*0x3,_0x3f0b99(0xd4a)],[0x17c4+0x8*-0x1a3+-0x95c,'v3'],[0x25*0x107+-0x189*-0x1+-0x262c,_0x2fd94f[_0x3f0b99(0x839)]],[0x2*0x448+-0x1a4b+-0x1*-0x1327,_0x2fd94f[_0x3f0b99(0x839)]],[-0x25bf+0x1e3a+0x8f5,'f32'],[-0x693*0x2+0x878+0x622,'u8'],[0x2*-0x87c+-0x1*-0x665+0xc0b,'v4'],[0x1801+-0x1*0x18fb+-0x282*-0x1,_0x3f0b99(0xd4a)],[0x1*0x18e8+-0x1*-0x1517+-0x2c73,'f32'],[0xfb1+0x123*-0x9+0x1*-0x3e6,_0x2fd94f[_0x3f0b99(0x51b)]],[0x4*0x5c6+-0x792+0x1*-0xdee,'u8'],[0x1cb7*0x1+0x137*0x17+0xdc2*-0x4,_0x2fd94f[_0x3f0b99(0x839)]]],'TargetHealth':[[-0x1*0x8e9+-0x822+0x111b,_0x2fd94f[_0x3f0b99(0x839)]],[-0xee0+-0x907+0x36d*0x7,_0x3f0b99(0x5df)],[0x1162+-0x17c+0x11f*-0xe,'u8'],[0x1b*-0x139+-0x1*-0x26ff+-0x5b8,_0x2fd94f[_0x3f0b99(0x839)]],[-0x6*0x424+0x75b*0x2+0xa6a,_0x2fd94f[_0x3f0b99(0x839)]],[0x130e+0xa*-0x2b1+0x828,_0x3f0b99(0x5df)],[0x1eef+0x2211+-0x40b0,_0x3f0b99(0x5df)],[-0x1c2e+0x1f*0x94+0xac6,_0x3f0b99(0xd4a)],[-0x29*-0xdf+0x7*0x8b+-0x9be*0x4,_0x3f0b99(0xd4a)],[-0x2b7*0x4+0xc71+-0x3*0x57,'u8'],[0x2114+-0xe39+-0x1247,_0x3f0b99(0xd4a)],[-0x2ca+-0xa07+0xd75,'u8'],[-0x21+-0x1*-0x1553+0x1*-0x148a,'i32'],[0x1*-0x15a3+-0x1fea+0x3639,_0x2fd94f[_0x3f0b99(0x839)]],[0x1*-0x1d24+0x1*-0x1b47+0xb6f*0x5,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x21c9+-0x1e25+-0x40ba*-0x1,'u8']],'SectatorCamera':[[0xdbe+0x11*0x179+-0x26b3,_0x2fd94f['eaffj']],[0x233+-0xc42+0xa27,'f32'],[0x1837+-0x6*-0x15a+0x3*-0xabd,_0x2fd94f['eaffj']],[-0x15ca*0x1+0x219e+-0xbb4,'v3'],[-0x24d2+0x166e+0xe90*0x1,'v3'],[-0x1*0x1a17+0x1bf7+-0x66*0x4,'i32'],[-0x59*-0x1e+0x17*0x17a+-0x2c18,'i32'],[-0x1*0x125b+-0x2*-0x496+0xd*0xbb,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1388+0x2f+0x1*-0x1363,_0x2fd94f['mTeCE']],[0x127*-0x18+-0x27*-0x9d+0x415,_0x3f0b99(0xd4a)],[0x1b81*-0x1+-0xe2b+0xa82*0x4,'u8'],[0x15*-0x129+0x12*0x1e5+-0x8d*0x11,'v3'],[-0x2028+0xda4+0x12f0,'v4'],[0x1010+0x24c3+-0x3457,'u8'],[0xf85*0x1+0x9a+0x2b*-0x5d,_0x3f0b99(0x5df)]],'UISettings':[[-0x19db+0x1ad5*-0x1+0x34d0,_0x2fd94f[_0x3f0b99(0x839)]],[-0x406*-0x7+-0xd4b+-0xeb7*0x1,_0x2fd94f[_0x3f0b99(0x51b)]],[0xf9+-0x1a1*-0x10+-0x2dd*0x9,'u8'],[-0xa*-0x358+0x1ecf+-0x3ef7,_0x3f0b99(0x5df)],[-0x9*-0x6a+0x13a1+-0x1607,'i32'],[-0x2281+0xa95+0x1944*0x1,_0x3f0b99(0x5df)],[-0x142f+0x1213+0x378,'u8'],[0xd65*0x1+-0x2ee*-0xa+-0x2954,'u8'],[0x2e*-0x1+-0x89+0xd*0x29,'u8'],[0x1*0x105e+-0x1d28+0x1*0xe29,'u8'],[0x1a2*-0x1+0x510+-0x20e,'u8'],[0xd73+-0x205+-0xa0d,'u8'],[0x117b*-0x2+0x1572+-0x773*-0x2,'u8'],[0x1312+0x8*0x472+0x34e6*-0x1,_0x3f0b99(0xd4a)],[-0xa94+-0x1*-0x20e7+0x115*-0x13,'f32'],[0x1b06+0xd78+-0x2666,'u8'],[-0x1a5*0xd+0xeb2+0x1*0x92f,_0x2fd94f['eaffj']],[0x2*0x101b+-0xffb+-0xd9b,_0x2fd94f['mTeCE']],[0x20e0*0x1+-0x1807*-0x1+-0x35ef,'u8'],[0x1e93+0x69d*0x5+-0x3c08,'u8'],[0x89b+-0x181*0x13+0x5*0x4b8,'v2'],[-0xd11+0x2591+-0x3a*0x5c,'v2'],[-0x1*0x511+0x186e+-0xfad,'u8'],[-0x1058+-0x1bf7+0x3007,'u8'],[-0x1e3c+-0x6*0x5e2+0x4554,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x1cc7+0x1*-0x1001+0x26e*0x14,'v3'],[-0x117a+-0x5b*-0x39+0x117*0x1,_0x3f0b99(0xd4a)],[0x140d+-0x3*-0xadf+-0x1*0x30c6,_0x2fd94f[_0x3f0b99(0x51b)]],[-0x1*0x26cf+-0x10*0x106+0x3b17,_0x2fd94f[_0x3f0b99(0x51b)]],[0x1*0x1733+-0x516+-0xe2d,'u8'],[-0x1983+-0x21*-0x115+-0x641*0x1,'u8'],[0xeea+0x4a0+-0xf96,'i32'],[0xb5c+0x94*-0x25+0xe08,_0x2fd94f[_0x3f0b99(0x839)]],[0x17bb+0x23db+-0x1*0x3792,_0x2fd94f['mTeCE']],[-0xe5d+0xc9a+0x5cb,_0x3f0b99(0x5df)],[-0x1*0xe5+0x991+-0x4a0,'i32'],[0x34*0x12+0x4*-0x969+0x260c,_0x2fd94f['mTeCE']],[0x14da+-0x4b7*0x1+-0x31*0x3f,_0x3f0b99(0x5df)],[-0x3*-0x829+0x402+0x1*-0x1865,_0x3f0b99(0x5df)],[-0x1d74+0x51f*0x7+-0x249,'i32'],[-0x1*0xf3b+0x55*0x21+-0x56*-0x19,_0x2fd94f['mTeCE']],[0x1*-0x1ac4+-0x1d19+0x3c31,'u8'],[0x1*-0x823+-0x1b*-0xf8+0xdb0*-0x1,'u8'],[0x9*0xc6+0xd68+-0x1008,'u8'],[0x1*-0x7e+-0x1798+0x17f*0x13,'u8'],[0x25f2+-0xb2+-0x20b4,_0x3f0b99(0xd4a)]]},_0x219df1={},_0x66b4c0={};function _0x51ed08(_0x47ec25,_0x1d7b56,_0x12184d){var _0x3ce05c=_0x3f0b99,_0x40be69={'XnBoQ':function(_0x27aac7,_0x524289){return _0x2fd94f['Rgqhp'](_0x27aac7,_0x524289);},'lnqWP':_0x3ce05c(0xa1a)+'ntrol'+'ler','SpRhj':_0x2fd94f[_0x3ce05c(0x625)]};return function(_0x157c84){var _0x1834f6=_0x3ce05c;try{var _0x1cfc18=_0x157c84&&_0x157c84[_0x1834f6(0xd0a)]?_0x157c84[_0x1834f6(0xd0a)]():0x2341+0xa19+-0x2d5a;if(!_0x1cfc18)return;var _0x1b9261=_0x66b4c0[_0x47ec25]||(_0x66b4c0[_0x47ec25]={}),_0x404775=_0x1b9261[_0x1cfc18];if(!_0x404775)_0x404775=_0x1b9261[_0x1cfc18]={'ptr':_0x1cfc18,'firstSeen':Date[_0x1834f6(0xa06)](),'hits':0x0};_0x404775['hits']++;if(_0x12184d){if(!_0x219df1[_0x1cfc18])_0x219df1[_0x1cfc18]={'ptr':_0x1cfc18,'kind':_0x47ec25,'firstSeen':Date[_0x1834f6(0xa06)](),'hits':0x0};_0x219df1[_0x1cfc18]['hits']++;}else{var _0x135699=_0x48cc1a[_0x47ec25];if(!_0x135699||_0x135699[_0x1834f6(0x6e1)]!==_0x1cfc18){_0x48cc1a[_0x47ec25]={'ptr':_0x1cfc18,'firstSeen':Date[_0x1834f6(0xa06)](),'hits':0x0,'replaced':!!_0x135699};try{var _0x5b1332=_0x57a7b3[_0x1834f6(0xb63)+'r'](function(_0x1843d8){var _0x3f86d8=_0x1834f6;return _0x1843d8[_0x3f86d8(0x6b6)]===_0x47ec25;})[0x1207+0x592+-0x1799];_0x17dc5c={'type':_0x47ec25,'atMs':_0x40be69['XnBoQ'](Date[_0x1834f6(0xa06)](),_0x13f4db),'originalFunc':!!(_0x5b1332&&_0x5b1332['hook']&&typeof _0x5b1332[_0x1834f6(0xc30)][_0x1834f6(0x1f0)+_0x1834f6(0xadf)+'nc']===_0x1834f6(0x3d8)+_0x1834f6(0x98a)),'resolveGameAtFire':!!_0x99c993(),'gameSourceAtFire':_0x15e079['sourc'+'e']};}catch(_0x5a3039){}}}if(_0x47ec25===_0x40be69['lnqWP']&&_0x30cca2['on'])try{_0x3898ba(_0x1cfc18);}catch(_0x4df7d2){}if(!_0x1d7b56){if(_0x40be69[_0x1834f6(0xc1d)]===_0x1834f6(0x902))return _0x5b7fe9[_0x1834f6(0x461)+'em'](_0x3a6384)==='1';else{var _0x5b1332=_0x57a7b3['filte'+'r'](function(_0x4f0170){var _0x2efb25=_0x1834f6;return _0x4f0170[_0x2efb25(0x6b6)]===_0x47ec25;})[0x64a+0x26a4+-0x2cee];if(_0x5b1332&&_0x5b1332[_0x1834f6(0xc30)])try{_0x5b1332[_0x1834f6(0xc30)][_0x1834f6(0xe74)+'ed']=![];}catch(_0x2efd46){}}}}catch(_0x57ed3c){}};}function _0x8144e5(){var _0x251242=_0x3f0b99,_0x38ebd9={'tRrKZ':function(_0x543aeb,_0x417472){var _0x1d4eaa=_0x59a2;return _0x2fd94f[_0x1d4eaa(0x2c2)](_0x543aeb,_0x417472);},'GJJGe':_0x2fd94f[_0x251242(0xe34)],'GwKnI':function(_0x17e037,_0x1fd104){var _0x3928b8=_0x251242;return _0x2fd94f[_0x3928b8(0x404)](_0x17e037,_0x1fd104);},'PPyZk':function(_0x5c52ed,_0x2e7e2d){return _0x5c52ed+_0x2e7e2d;},'oYUBo':function(_0xa42594,_0x24108d){return _0xa42594+_0x24108d;},'KcThS':function(_0x3d2077,_0x2b4e71){return _0x3d2077+_0x2b4e71;},'CpFfF':function(_0x783ab0,_0x1637bd){return _0x783ab0(_0x1637bd);}};if(_0x57a7b3['lengt'+'h'])return!![];if(!window[_0x251242(0x518)+'WebMo'+'dkit']||!window[_0x251242(0x518)+_0x251242(0x4e6)+_0x251242(0x1ec)][_0x251242(0xb7c)+'me'])return![];var _0x540561=window[_0x251242(0x518)+_0x251242(0x4e6)+'dkit']['Runti'+'me'];if(!_0x540561[_0x251242(0x52e)+'ns']||!_0x540561[_0x251242(0x52e)+'ns'][_0x251242(0x35a)+'h'])return![];_0xeba036=window['Unity'+'WebMo'+'dkit']['Value'+'Wrapp'+'er'],_0x1e3fad=_0x1e3fad||_0x540561[_0x251242(0x52e)+'ns'][_0x2fd94f['xzZwA'](_0x540561[_0x251242(0x52e)+'ns']['lengt'+'h'],0x15c0+-0x1be4+-0x8f*-0xb)];if(!_0x1e3fad||_0x2fd94f['cssTI'](typeof _0x1e3fad[_0x251242(0x98b)+'refix'],_0x251242(0x3d8)+_0x251242(0x98a)))return![];for(var _0x3a67e2=0xcd+-0x149+0x7c;_0x3a67e2<_0x2e3346['lengt'+'h'];_0x3a67e2++){if(_0x2fd94f[_0x251242(0x311)]===_0x2fd94f[_0x251242(0x311)]){var _0x120cee=_0x2e3346[_0x3a67e2];try{var _0x384333=_0x1e3fad['hookP'+_0x251242(0x708)]({'typeName':_0x120cee[_0x251242(0x6b6)],'methodName':_0x2fd94f['YvyFT'],'params':[_0x2fd94f['mTeCE'],_0x251242(0x5df)],'returnType':undefined},_0x51ed08(_0x120cee['type'],_0x120cee['keep'],_0x120cee[_0x251242(0x3f6)]));_0x57a7b3['push']({'type':_0x120cee['type'],'hook':_0x384333,'keep':_0x120cee[_0x251242(0x1c9)]});}catch(_0x4151b0){_0x12802f[_0x251242(0x1ea)](_0x2fd94f['crVYN'](_0x120cee[_0x251242(0x6b6)],':\x20')+String(_0x4151b0&&_0x4151b0[_0x251242(0x437)+'ge']||_0x4151b0)['slice'](0x418*-0x3+-0x55*0x55+0x1*0x2881,0x12f9+-0x3*0x2b+-0x23b*0x8));}}else{var _0x362a8f=_0x4b95b2[_0x29cf7a],_0x299065=_0x38ebd9[_0x251242(0x1cd)](typeof _0x362a8f['v'],_0x38ebd9[_0x251242(0x36b)])?_0x38ebd9[_0x251242(0x7f7)](_0x5a9572[_0x251242(0x632)](_0x362a8f['v']*(-0x875+-0x41*0x35+0x19d2)),-0x32a+0x2407+-0x423*0x7):_0x362a8f['v'];_0x387517[_0x251242(0x1ea)](_0x38ebd9[_0x251242(0xb41)](_0x38ebd9[_0x251242(0xb41)](_0x38ebd9[_0x251242(0x5c0)]('\x20\x20',_0x38ebd9[_0x251242(0x9d8)]('0x',_0x362a8f['o']['toStr'+_0x251242(0xa00)](-0xfc1*-0x1+-0xaa4+-0x1*0x50d))['padEn'+'d'](0x18c*-0x3+-0x31*-0x15+0xa7*0x1))+'\x20',_0x362a8f['k']['padEn'+'d'](-0x1cd5+0x12ff+-0x119*-0x9))+'\x20'+_0x38ebd9['CpFfF'](_0x3c4c2f,_0x299065)['padEn'+'d'](0x4cf+-0x2a*0x6b+-0xccf*-0x1)+'\x20',_0x362a8f['raw']||''));}}return _0x57a7b3[_0x251242(0x35a)+'h']>0xe3c+-0x1a94+-0x8*-0x18b;}function _0x3f3f42(_0x44a0ff,_0x43e25e){var _0x2b6195=_0x3f0b99,_0x3ad49b={'luZUk':function(_0xbe8177,_0x314f6){var _0x5b9c26=_0x59a2;return _0x2fd94f[_0x5b9c26(0x726)](_0xbe8177,_0x314f6);},'crTlv':function(_0x1d813f,_0x15cd26){return _0x1d813f===_0x15cd26;},'UkHSh':function(_0x318927,_0x158ce4){var _0x3c7c10=_0x59a2;return _0x2fd94f[_0x3c7c10(0xc52)](_0x318927,_0x158ce4);},'zrpTU':function(_0x225fe7,_0x27691d){return _0x2fd94f['uhfEL'](_0x225fe7,_0x27691d);},'LOPYe':function(_0xa1afc1,_0x14a53b){var _0x45ea89=_0x59a2;return _0x2fd94f[_0x45ea89(0x314)](_0xa1afc1,_0x14a53b);},'AExhh':'pvKjl','XgwbE':function(_0x3f5f6b,_0x171814){var _0x465bd7=_0x59a2;return _0x2fd94f[_0x465bd7(0x69b)](_0x3f5f6b,_0x171814);},'QxsVa':_0x2b6195(0xd04),'JrYLh':function(_0x223e05,_0x1bc7fd){return _0x2fd94f['hAJsk'](_0x223e05,_0x1bc7fd);},'dMLUm':function(_0x36a20d,_0x20abea){var _0x159632=_0x2b6195;return _0x2fd94f[_0x159632(0xba4)](_0x36a20d,_0x20abea);},'EmzwN':_0x2fd94f['hRKDt'],'RfyNf':function(_0x2f7c78,_0x18ddb9){return _0x2f7c78*_0x18ddb9;}};if(_0x2fd94f['AForL'](_0x2fd94f[_0x2b6195(0x88c)],_0x2fd94f['gdadu']))return function(){var _0x45e029=_0x2b6195,_0xef54ff={'MEYFv':function(_0x3b796e,_0x4b2770){return _0x3ad49b['luZUk'](_0x3b796e,_0x4b2770);},'aLgAD':function(_0x5eb5f9,_0x1bd270,_0x599ac2){return _0x5eb5f9(_0x1bd270,_0x599ac2);},'ByvEd':function(_0x4e847d,_0x54a77b,_0x22e9fd){return _0x4e847d(_0x54a77b,_0x22e9fd);}};try{var _0x216a39=_0x57d539[_0x43e25e]||(_0x57d539[_0x43e25e]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x198afa=arguments;if(_0x44a0ff===_0x45e029(0x309)){var _0x2cc576=_0x198afa[0xe57*-0x1+0xa71+0x3e6];if(_0x2cc576&&_0x3ad49b['crTlv'](typeof _0x2cc576['val'],'funct'+'ion')){if('jWQLr'!==_0x45e029(0x50e)){var _0x580ba8=_0x2cc576['val']();if(_0x3ad49b['UkHSh'](typeof _0x580ba8,_0x45e029(0xa25)+'r')&&isFinite(_0x580ba8)){if(_0x216a39['lo']===null||_0x580ba8<_0x216a39['lo'])_0x216a39['lo']=_0x580ba8;if(_0x216a39['hi']===null||_0x3ad49b['zrpTU'](_0x580ba8,_0x216a39['hi']))_0x216a39['hi']=_0x580ba8;if(_0x216a39['last']!==null){if(_0x3ad49b[_0x45e029(0x7c2)]('OpOkF',_0x3ad49b[_0x45e029(0xe4a)])){var _0x53ef4a=Math['abs'](_0x580ba8-_0x216a39['last']);if(_0x3ad49b[_0x45e029(0xdaa)](_0x53ef4a,_0x216a39['jump']))_0x216a39[_0x45e029(0x3ca)]=_0x53ef4a;}else _0x12052b[_0x45e029(0xd5b)+'em'](_0x1ad528,_0xbd6442[_0x45e029(0x83e)+'gify'](_0x5771df[_0x45e029(0xdd9)]));}_0x216a39[_0x45e029(0xe1f)]=_0x580ba8;}_0x216a39['hits']++;if(_0x198afa[-0x1514+-0x90a+0x1e1f]&&_0x3ad49b[_0x45e029(0xa47)](typeof _0x198afa[-0x1*0x165e+-0x2*-0xb2b+0x9][_0x45e029(0xd0a)],'funct'+_0x45e029(0x98a))){var _0x166206=_0x198afa[-0x1*0x2033+-0x833*0x4+0x4100*0x1][_0x45e029(0xd0a)]();if(_0x166206)_0x528ba4=_0x166206;}}else{if(!_0x256798[_0x45e029(0x35a)+'h'])try{_0x24f738();}catch(_0x17a201){}_0x391596++,_0xef54ff[_0x45e029(0x3aa)](_0x40d204,_0x41de03());if(!_0x5d18d7['lengt'+'h']&&_0x36037c<-0xee7+-0x6*0x22d+-0x1*-0x1d21)_0xef54ff[_0x45e029(0x31d)](_0x5f1b7d,_0x537c53,-0x2003+-0x19ea+0x41bd);else{if(!_0xb24f40[_0x45e029(0x859)](_0x245898)['lengt'+'h']&&_0x6ac45c<0xa8*-0x26+0x1a64+0x2*-0x24)_0x3afbf3(_0x54bdd1,-0x1193*-0x2+-0x235c+0x806);else _0xef54ff[_0x45e029(0x609)](_0x2de401,_0x33a81c,0xebe+-0xd99+0x1*0x38b);}}}}else{if(_0x3ad49b['QxsVa']!==_0x3ad49b[_0x45e029(0x1f5)])_0x4926ae=_0x234ae1[_0x45e029(0x859)](_0x17e3d0)['slice'](0x1*0x250c+0x2*0xe8d+-0x4226,0x2a9+0x8*-0x35+-0xe9);else{_0x198afa[-0x7*0x24f+0xc0+0xf6a]&&_0x3ad49b[_0x45e029(0x8fe)](typeof _0x198afa[-0x4b9+-0x96+0x550][_0x45e029(0xd0a)],'funct'+_0x45e029(0x98a))&&(_0x216a39[_0x45e029(0xe66)+'st']=_0x198afa[-0x74f+0x159*-0x3+-0x39*-0x33][_0x45e029(0xd0a)](),_0x216a39['setHi'+'ts']++);_0x198afa[0xff4*0x2+-0x3*-0x715+-0x3525]&&_0x3ad49b[_0x45e029(0x29c)](typeof _0x198afa[-0x162a+-0x18e*0x17+0x39ee][_0x45e029(0xd0a)],'funct'+_0x45e029(0x98a))&&(_0x216a39[_0x45e029(0xaa4)]=_0x198afa[-0xd*0x7d+0x3de+0x27d][_0x45e029(0xd0a)](),_0x216a39['pairH'+_0x45e029(0x57c)]++);if(_0x198afa[0x40*-0x13+0x19c1+-0x1*0x1501]&&_0x3ad49b['dMLUm'](typeof _0x198afa[0x23ec+-0x5e*-0x2c+-0x3414][_0x45e029(0xd0a)],_0x3ad49b[_0x45e029(0x6d9)])){var _0x544405=_0x198afa[0x1e97+-0xe7+-0x1db0][_0x45e029(0xd0a)]();if(_0x544405)_0x528ba4=_0x544405;}}}}catch(_0x12a64b){}};else{var _0x3dc35e=_0x43abe3['c'][_0x1dcc23]['v'],_0x9e98be=_0x1a1258[_0x2b6195(0x344)](_0x3ad49b['RfyNf'](_0x3dc35e[0x2358+-0x9*-0x2a2+-0x3b0a],_0x3dc35e[-0x12a+-0x1*-0x104f+0x1*-0xf25])+_0x3dc35e[-0x18d1+0x73e*-0x2+0x274f]*_0x3dc35e[0x1*0x2279+0xc89+-0x2f00]);(_0x3ad49b[_0x2b6195(0xdaa)](_0x9e98be,_0x5a3b3e)||_0x3ad49b[_0x2b6195(0x29c)](_0x9e98be,_0x318877)&&_0x3dc35e[0x269*-0x1+0x4dc+-0x272]<_0x38f2f2['v'][-0x1*0x103a+-0xbe5+0x1c20])&&(_0x19f5c9=_0x9e98be,_0x319b9c=_0x299bd3['c'][_0x40ae60]);}}function _0x48a2d9(){var _0x2bcb23=_0x3f0b99,_0xb4af73={'VZtzT':function(_0x39e910,_0x559a7,_0x187778,_0x1ea666,_0x206306){return _0x39e910(_0x559a7,_0x187778,_0x1ea666,_0x206306);},'nGDRH':function(_0x19bcae,_0x1557e7){return _0x2fd94f['HfYYn'](_0x19bcae,_0x1557e7);},'euZWh':function(_0x268f23,_0x5030c0){return _0x268f23/_0x5030c0;}};if(_0x4fadc2)return!![];if(!_0x1e3fad||typeof _0x1e3fad['hookP'+'ostfi'+'x']!==_0x2bcb23(0x3d8)+'ion')return![];var _0x1c6186=_0xb4806b['Mouse'+_0x2bcb23(0x54b)]||[];for(var _0x6bd78a=-0x159+-0x871+0x9ca;_0x6bd78a<_0x1c6186['lengt'+'h'];_0x6bd78a++){var _0x4e6b96=_0x1c6186[_0x6bd78a];try{if('COsmW'!=='COsmW'){var _0x38c19b=_0xb4af73['VZtzT'](_0xc8fcba,_0x50e704[_0x2bcb23(0x77f)],[_0x475655['eye'][0x645+0x957+-0xf9c],_0xe9de54[_0x2bcb23(0x77f)][-0x6c2+-0x1e86+0x2549],_0xb4af73['nGDRH'](_0x566f85[_0x2bcb23(0x77f)][0x255f+-0x2586+-0x1*-0x29],-0x1*-0x9c5+0x1c36+0x1*-0x25fa)],-0x171*-0x1b+-0xa74+-0x188f,0x964+0x143f*-0x1+0xec3);_0x38c19b&&(_0x360b6a=_0xb4af73[_0x2bcb23(0x36c)](_0x38c19b['x'],0x29*0xf1+0x50*-0x4b+-0xb41),_0x3dda0a=_0xb4af73['euZWh'](_0x38c19b['y'],0x3d*-0x3d+0x4e6+-0xd8b*-0x1));}else{if(_0x2fd94f[_0x2bcb23(0xa7c)](_0x4e6b96['ret'],'float'))_0x1e3fad[_0x2bcb23(0x98b)+_0x2bcb23(0x54d)+'x']({'typeName':'Mouse'+'Look','methodName':_0x4e6b96['name'],'params':_0x4e6b96[_0x2bcb23(0x38c)+_0x2bcb23(0x757)],'returnType':_0x4e6b96[_0x2bcb23(0x5aa)+'et']},_0x2fd94f[_0x2bcb23(0xa16)](_0x3f3f42,_0x2fd94f['gUNgi'],_0x4e6b96['name']));else _0x4e6b96[_0x2bcb23(0x19e)]===_0x2bcb23(0x288)&&_0x4e6b96[_0x2bcb23(0xde9)+'s']['lengt'+'h']===0x9e+-0x1f5b+0x1ebe&&_0x2fd94f[_0x2bcb23(0x918)](_0x4e6b96['param'+'s'][-0x1*0x157d+0xc*-0x18d+0x2819],_0x2fd94f[_0x2bcb23(0xaa7)])&&_0x1e3fad['hookP'+_0x2bcb23(0x708)]({'typeName':_0x2bcb23(0xda0)+_0x2bcb23(0x54b),'methodName':_0x4e6b96[_0x2bcb23(0xc58)],'params':_0x4e6b96[_0x2bcb23(0x38c)+'arams'],'returnType':undefined},_0x3f3f42(_0x2fd94f[_0x2bcb23(0x7e4)],_0x4e6b96[_0x2bcb23(0xc58)]));}}catch(_0x1ca5b8){_0xf98529[_0x2bcb23(0x1ea)](_0x2fd94f[_0x2bcb23(0x3b2)](String,_0x1ca5b8&&_0x1ca5b8['messa'+'ge']||_0x1ca5b8)['slice'](0x37*-0x13+0x427+-0x12,-0xda9*0x2+-0x3a*0x51+0x2e24));}}return _0x4fadc2=!![],!![];}function _0x3d7929(){var _0x44329d=_0x3f0b99,_0x4d8023={'GuTVh':function(_0x510f19,_0x46dcee){return _0x2fd94f['aSqtN'](_0x510f19,_0x46dcee);},'eaVvp':function(_0x2d2b46,_0x9a5387){return _0x2d2b46-_0x9a5387;},'qPCwJ':function(_0x5ef080,_0x2d09a7){return _0x5ef080+_0x2d09a7;},'boZpo':function(_0x82739a,_0xabdccf){var _0x14cc7c=_0x59a2;return _0x2fd94f[_0x14cc7c(0xbf5)](_0x82739a,_0xabdccf);},'jXpnS':function(_0x3cf7ec,_0x3936dd){return _0x3cf7ec*_0x3936dd;},'YRtMr':function(_0x16eba3,_0x442c17){return _0x16eba3-_0x442c17;},'UUJaf':function(_0x284d26,_0x212d0d){return _0x2fd94f['xmWLj'](_0x284d26,_0x212d0d);},'xCtpG':function(_0x552991,_0x43038f){return _0x552991*_0x43038f;}};if(_0x44329d(0x5d2)===_0x44329d(0x5e7)){var _0x4c71f4=_0x42b935();if(_0x4c71f4&&_0x4c71f4[_0x44329d(0xa34)+'e']&&_0x4c71f4[_0x44329d(0xa34)+'e']['HEAPU'+'8']&&_0x4c71f4[_0x44329d(0xa34)+'e'][_0x44329d(0xde2)+'8'][_0x44329d(0xd32)+'r'])return _0x4c71f4['Modul'+'e'][_0x44329d(0xde2)+'8'];}else{var _0x17c2d2=0x195f+-0x9*-0x195+-0x9c*0x41,_0x43c6b1=0x24de+-0xa*-0xc2+-0x2c72,_0x14d9f5=-0x1080+0x7ed*-0x2+0x205a,_0x31a938=0x571*-0x2+0xf67+0x59*-0xd,_0x16aba2=-0x1f7b*-0x1+-0x24*0xcb+-0x2ef;try{var _0x4e7981=window[_0x44329d(0x518)+_0x44329d(0x4e6)+'dkit']&&window[_0x44329d(0x518)+_0x44329d(0x4e6)+'dkit'][_0x44329d(0xb7c)+'me'],_0x379c13=_0x1e3fad||_0x4e7981&&_0x4e7981[_0x44329d(0x52e)+'ns']&&_0x4e7981[_0x44329d(0x52e)+'ns'][_0x2fd94f['sizJC'](_0x4e7981[_0x44329d(0x52e)+'ns']['lengt'+'h'],0x582+-0x20c9+0x1b48)];if(_0x379c13&&_0x379c13['hooks'])for(var _0x5daa8d=-0x98b*-0x1+-0x9d*0x18+0x52d*0x1;_0x5daa8d<_0x379c13['hooks'][_0x44329d(0x35a)+'h'];_0x5daa8d++){if(_0x2fd94f[_0x44329d(0x294)]==='mYIWC'){var _0x4cb347=_0x379c13[_0x44329d(0x8b9)][_0x5daa8d];if(!_0x4cb347||_0x4cb347[_0x44329d(0x885)+_0x44329d(0x729)]!==_0x2fd94f[_0x44329d(0x31a)])continue;_0x17c2d2++;if(_0x4cb347['table'+'Index']!==undefined)_0x43c6b1++;if(_0x4cb347[_0x44329d(0x4d1)+'ed'])_0x14d9f5++;}else{var _0x16b736=(_0x44329d(0xa2f)+_0x44329d(0x1c2))['split']('|'),_0x37b0bd=-0x11fa+0x22b9*0x1+-0x10bf;while(!![]){switch(_0x16b736[_0x37b0bd++]){case'0':var _0x37e8d4=_0x4d8023['GuTVh'](_0x4f66ad,_0x2afe53),_0x25d8b4=_0x4f66ad*_0x22028c,_0x499029=_0x4f66ad*_0x2035e6;continue;case'1':var _0x2afe53=_0x34213e[-0xf23+0xa*-0x238+0x2553],_0x22028c=_0x4c2749[-0x1*0x7d9+-0x5e*-0x1e+-0x32a],_0x2035e6=_0xdf6acf[-0x7c*-0x3c+-0x1fa5+0x297],_0x4f66ad=_0x5497ac[0x140c+-0x9ef+-0xa1a];continue;case'2':var _0x2836d3=_0x4d8023[_0x44329d(0xd77)](_0x2afe53,_0x2afe53),_0x19902d=_0x22028c*_0x22028c,_0x25fa12=_0x4d8023[_0x44329d(0xd77)](_0x2035e6,_0x2035e6);continue;case'3':return{'right':[_0x4d8023['eaVvp'](-0x12eb*-0x1+0x262a+0xe45*-0x4,(0x3*-0xcc8+-0x540+0x15cd*0x2)*(_0x19902d+_0x25fa12)),_0x4d8023['GuTVh'](-0xa4c+0xaed*-0x3+0x2b15,_0x2c9331+_0x499029),(-0x2371+-0x2257+0x45ca)*(_0x1c9538-_0x25d8b4)],'up':[(0x167f*0x1+0x1b20+-0x319d*0x1)*_0x4d8023[_0x44329d(0xe63)](_0x2c9331,_0x499029),-0x15*0xa1+-0x71*0x3b+-0xd*-0x305-(0x2327+-0x1*0x10a3+-0x1282)*_0x4d8023[_0x44329d(0x965)](_0x2836d3,_0x25fa12),(0xc59+-0x2701+0x1aaa)*_0x4d8023['boZpo'](_0x1124c2,_0x37e8d4)],'fwd':[(-0x1d0+0x1*0x105b+-0xe89)*(_0x1c9538+_0x25d8b4),_0x4d8023[_0x44329d(0xa70)](-0x1579+-0x1*-0x55+0x2*0xa93,_0x1124c2-_0x37e8d4),_0x4d8023[_0x44329d(0x742)](-0x17e0+-0x1*-0x21e2+-0xa01,_0x4d8023[_0x44329d(0x2de)](-0xabb+-0x7*-0x4df+-0x175c,_0x2836d3+_0x19902d))]};case'4':var _0x2c9331=_0x4d8023[_0x44329d(0x471)](_0x2afe53,_0x22028c),_0x1c9538=_0x2afe53*_0x2035e6,_0x1124c2=_0x22028c*_0x2035e6;continue;}break;}}}}catch(_0x5492dd){}for(var _0x575f3e in _0x57d539){if(_0x2fd94f['TCHRu']!==_0x2fd94f[_0x44329d(0x58e)]){var _0x12d5f8=_0x57d539[_0x575f3e];_0x31a938+=_0x12d5f8['hits']||0x1a8e*0x1+0x222a+-0x3cb8,_0x16aba2+=(_0x12d5f8['setHi'+'ts']||-0x1*0xd7+-0xde1*0x2+0x1c99)+(_0x12d5f8[_0x44329d(0x3ef)+_0x44329d(0x57c)]||-0x23de+0x1c57+-0x1*-0x787);}else{if(_0x1a5c9f['error'+'s'][_0x44329d(0x35a)+'h']<0x1*0x1f7+0x4*0x6f5+-0x1*0x1dc5)_0x5e3aa1[_0x44329d(0xa73)+'s']['push'](_0x44329d(0xd51)+_0x44329d(0x790)+_0x5c8c59(_0x2a7364&&_0x3b9957[_0x44329d(0x437)+'ge']||_0x36427f)[_0x44329d(0x257)](-0x24ea+-0x1df+-0x1*-0x26c9,-0x9a9+0x63b+-0x3c8*-0x1));return 0xd*0x13a+0xeb7+-0xa7*0x2f;}}return{'registered':_0x4fadc2,'total':_0x17c2d2,'resolved':_0x43c6b1,'applied':_0x14d9f5,'getterHits':_0x31a938,'setterHits':_0x16aba2,'distinct':Object['keys'](_0x57d539)['lengt'+'h'],'errorCount':_0xf98529[_0x44329d(0x35a)+'h'],'errors':_0xf98529[_0x44329d(0x257)](0x1*-0x151+0xcd*-0x3+0x3b8,-0x1*-0x10a4+0xf*0x26b+0xb*-0x4cf)};}}function _0x54e610(){var _0x3dfdcd=_0x3f0b99;if('XIDmq'===_0x3dfdcd(0xe73)){var _0xa60247=null,_0xcecc7=-0x1f*0x15+-0x21ab+0x2436;for(var _0x3968fb in _0x57d539){var _0x53bf03=_0x57d539[_0x3968fb];_0x53bf03[_0x3dfdcd(0x3ef)+'its']&&_0x2fd94f[_0x3dfdcd(0x634)](_0x53bf03[_0x3dfdcd(0x3ef)+'its'],_0xcecc7)&&typeof _0x53bf03[_0x3dfdcd(0xe66)+'st']==='numbe'+'r'&&_0x2fd94f[_0x3dfdcd(0x6e8)](typeof _0x53bf03['setB'],_0x2fd94f[_0x3dfdcd(0xe34)])&&isFinite(_0x53bf03['setLa'+'st'])&&isFinite(_0x53bf03['setB'])&&(_0xa60247={'rawA':_0x53bf03[_0x3dfdcd(0xe66)+'st'],'rawB':_0x53bf03[_0x3dfdcd(0xaa4)],'hits':_0x53bf03[_0x3dfdcd(0x3ef)+'its'],'name':_0x3968fb},_0xcecc7=_0x53bf03[_0x3dfdcd(0x3ef)+_0x3dfdcd(0x57c)]);}if(!_0xa60247)return null;var _0x3e92b6=_0xa60247['rawA']>=-(-0xb2f*-0x3+-0x296*0x5+-0x1445)&&_0x2fd94f['swdYS'](_0xa60247['rawA'],-0x24cf+-0x687*-0x5+-0x182*-0x3),_0x1b0b0c=_0xa60247['rawB']>=-(0x474+0xc8f+-0x5*0x355)&&_0xa60247[_0x3dfdcd(0x64d)]<=-0x1d13+-0x165+0x6*0x523;if(_0x3e92b6!==_0x1b0b0c)_0xa60247[_0x3dfdcd(0xb40)]=_0x3e92b6?_0xa60247[_0x3dfdcd(0xbe8)]:_0xa60247['rawB'],_0xa60247[_0x3dfdcd(0x7cc)]=_0x3e92b6?_0xa60247['rawB']:_0xa60247[_0x3dfdcd(0xbe8)],_0xa60247['order']=_0x3e92b6?_0x2fd94f[_0x3dfdcd(0x5a5)]:_0x2fd94f[_0x3dfdcd(0x346)];else{if(_0x2fd94f[_0x3dfdcd(0xc74)](_0x3dfdcd(0xe62),_0x2fd94f[_0x3dfdcd(0x2a6)])){var _0x142a05=_0x2fd94f['ErMof'](_0x2f24d1,_0x2fd94f[_0x3dfdcd(0x733)](_0x159932,_0x2fd94f['uyahe'](_0x19943f,_0x20fbbd[_0x1a0e6][0x8*-0x15d+-0x127f+0x1d67],0xb72+0x13fc+-0x1f5e)),_0x3dfdcd(0x5df));if(_0x2fd94f[_0x3dfdcd(0x5c3)](_0x142a05,_0x29f235))_0x43b4ec[_0x3dfdcd(0x27a)][_0xae3307[_0x39bebd][-0x25f4*0x1+0xbb*-0x19+0x3838]]=_0x142a05;}else _0xa60247[_0x3dfdcd(0xb40)]=null,_0xa60247['yaw']=null,_0xa60247[_0x3dfdcd(0xdae)]='unres'+_0x3dfdcd(0x373)+'\x20('+(_0x3e92b6?_0x3dfdcd(0x428)+_0x3dfdcd(0x985)+'ed':_0x2fd94f[_0x3dfdcd(0x960)])+')';}return _0xa60247;}else return _0x5326c4['on'];}function _0x4999eb(){var _0x4e1787=_0x3f0b99,_0x4f99ba=0x1e8f*0x1+-0x13dd+0x559*-0x2;for(var _0x5ac560=0x3*0xa7d+-0x15d*0x3+-0x1b60;_0x2fd94f[_0x4e1787(0xb58)](_0x5ac560,_0x57a7b3[_0x4e1787(0x35a)+'h']);_0x5ac560++){if(_0x57a7b3[_0x5ac560][_0x4e1787(0xc30)]&&_0x57a7b3[_0x5ac560][_0x4e1787(0xc30)]['table'+_0x4e1787(0xc3b)]!==undefined)_0x4f99ba++;}return _0x4f99ba;}function _0x15b85f(){var _0x245798=_0x3f0b99,_0x10223e=0x56*0x61+0x1*-0xdd3+-0x12c3;for(var _0x1498d0=0x3*0x59e+0x1c83+-0x2d5d;_0x1498d0<_0x57a7b3['lengt'+'h'];_0x1498d0++){if(_0x57a7b3[_0x1498d0]['hook']&&_0x57a7b3[_0x1498d0][_0x245798(0xc30)][_0x245798(0x4d1)+'ed'])_0x10223e++;}return _0x10223e;}var _0xf83ef5=null,_0x216ae6=[],_0x17ecfd={},_0x17dc5c=null;function _0x5d5e6b(_0x2c3cdf){var _0xa9833e=_0x3f0b99;if(_0x2fd94f['mnvFR']===_0x2fd94f[_0xa9833e(0x420)])try{if(_0x2fd94f[_0xa9833e(0xe6f)](!_0xeba036,!_0x2c3cdf))return null;var _0x2df2d4=new _0xeba036(_0x2c3cdf)[_0xa9833e(0x33c)+_0xa9833e(0xa22)+'me']();return _0x2fd94f[_0xa9833e(0x7cb)](_0x2df2d4,undefined)?null:_0x2df2d4;}catch(_0x544c93){return null;}else try{_0x5da6d8();}catch(_0x3a703f){}}function _0x284134(_0x920b2a,_0x3b8462,_0x2d66ef){var _0x320dd0=_0x3f0b99,_0x21e384=_0x220aeb();if(!_0x21e384)return null;if(_0x2fd94f[_0x320dd0(0xc2c)](_0x3b8462,0x13f6+-0x4c5+-0xf31)||_0x2fd94f[_0x320dd0(0x5f5)](_0x3b8462,_0x2fd94f[_0x320dd0(0x3e5)](_0x2d66ef,0x2383*0x1+0x1*-0x17b9+-0xbc6))>_0x21e384['byteL'+_0x320dd0(0xa59)])return null;var _0x5757a2=[];for(var _0x4b715=0xb*-0xc5+0x1*0x23d7+0xdb0*-0x2;_0x4b715<_0x2d66ef;_0x4b715++)_0x5757a2[_0x320dd0(0x1ea)](_0x21e384['getFl'+_0x320dd0(0x53b)](_0x920b2a+_0x3b8462+_0x2fd94f[_0x320dd0(0x556)](_0x4b715,0x9*-0x3be+0x1427+0x1*0xd8b),!![]));return _0x15e079['ok']+=_0x2d66ef,_0x5757a2;}var _0x5a1e34={'PhotonNetworkSync':[[_0x2fd94f['vGOmT'],'photo'+'nView'],[_0x3f0b99(0x771),_0x2fd94f[_0x3f0b99(0x2b4)]],['0x24',_0x3f0b99(0x43c)+'form'],[_0x2fd94f['dfnCG'],_0x3f0b99(0xb17)],[_0x2fd94f[_0x3f0b99(0x40c)],_0x3f0b99(0x6f3)+'Look']],'NetworkPlayerAnimations':[[_0x2fd94f['vGOmT'],_0x3f0b99(0xccc)+'le'],[_0x2fd94f['LhFto'],_0x3f0b99(0x67d)]],'NPC_Cotroller':[[_0x3f0b99(0x534),_0x2fd94f[_0x3f0b99(0x767)]],[_0x3f0b99(0x6f9),_0x2fd94f['vZqJF']],[_0x2fd94f[_0x3f0b99(0x5ea)],_0x3f0b99(0x457)+'h'],[_0x2fd94f[_0x3f0b99(0x3a6)],'targe'+_0x3f0b99(0xb38)+'th2'],['0xe8',_0x3f0b99(0x43c)+'form']],'EnemyBot':[['0x14',_0x2fd94f['dJFIE']]]},_0x41e30d={'PhotonNetworkSync':[[_0x3f0b99(0xb26),_0x3f0b99(0xcf8)],[_0x3f0b99(0x769),_0x2fd94f['NAyMG']],[_0x3f0b99(0x3da),'id']]};function _0xcc22e4(_0x229a3d,_0x3f7c62){var _0x2c614f=_0x3f0b99,_0x238095={'DNndf':function(_0x56a616,_0x2e9894){var _0x2bef82=_0x59a2;return _0x2fd94f[_0x2bef82(0xe2e)](_0x56a616,_0x2e9894);},'jghVD':function(_0x5005db,_0x5e28f0,_0x20d529){var _0x5c667e=_0x59a2;return _0x2fd94f[_0x5c667e(0xccb)](_0x5005db,_0x5e28f0,_0x20d529);}},_0x2fbc76=_0x2404cb[_0x229a3d]||[],_0x53503d={'kind':_0x229a3d,'ptr':'0x'+_0x3f7c62[_0x2c614f(0x7e7)+_0x2c614f(0xa00)](-0x123c+0x1d33+-0xae7),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x2b7919=0x2637+0x5a*0x21+0x589*-0x9;_0x2fd94f[_0x2c614f(0x595)](_0x2b7919,_0x2fbc76['lengt'+'h']);_0x2b7919++){if(_0x2fbc76[_0x2b7919][0x127d+-0x1c70+0x9f4]!=='v3')continue;var _0x4add65=_0x284134(_0x3f7c62,_0x2fbc76[_0x2b7919][0x2*0x42d+-0x4*-0x51+0x2*-0x4cf],0x19e8+-0x2*0x3f2+-0x1*0x1201);if(!_0x4add65)continue;_0x53503d[_0x2c614f(0x413)+'cs'][_0x2c614f(0x1ea)]({'o':_0x2fd94f[_0x2c614f(0xbc5)]('0x',_0x2fbc76[_0x2b7919][0x190*-0x4+0xb31*-0x1+0x1171][_0x2c614f(0x7e7)+_0x2c614f(0xa00)](-0x6b7+0x1f6a+-0x18a3)),'v':_0x4add65});}var _0x23a1de=-0x1424+0x1beb+0x1*-0x7c7,_0x4c1d60=_0x2fd94f[_0x2c614f(0xbe3)](_0x229a3d+'@',_0x3f7c62),_0xd3fc65=_0x2fd94f['SGubm'](_0x3709fd,_0x53503d[_0x2c614f(0x413)+'cs'],_0x2fd94f[_0x2c614f(0x81b)](_0x5966f5),_0x5970e2[_0x4c1d60]);_0x5970e2[_0x4c1d60]=_0xd3fc65['posAt']?{'o':_0xd3fc65[_0x2c614f(0xc5f)]}:null,_0x53503d['pos']=_0xd3fc65['pos'],_0x53503d[_0x2c614f(0xc5f)]=_0xd3fc65[_0x2c614f(0xc5f)],_0x53503d[_0x2c614f(0xd50)]=_0xd3fc65['held'],_0x53503d['candi'+_0x2c614f(0x8ef)]=_0xd3fc65[_0x2c614f(0x2d5)+_0x2c614f(0x8ef)],_0x53503d['clust'+'er']=_0xd3fc65['clust'+'er'],_0x53503d[_0x2c614f(0x4a6)]=_0xd3fc65[_0x2c614f(0x4a6)],void _0x23a1de;var _0x3c97c7=_0x5a1e34[_0x229a3d],_0xa15391=_0x41e30d[_0x229a3d];if(_0xa15391){_0x53503d['tag']={};for(var _0x2ae1ef=0x18*-0x124+0x1*-0x60d+0x1*0x216d;_0x2fd94f[_0x2c614f(0xd15)](_0x2ae1ef,_0xa15391['lengt'+'h']);_0x2ae1ef++){var _0x1245f1=_0x55b637(_0x3f7c62+parseInt(_0xa15391[_0x2ae1ef][0x2f*0x8d+0x22c+0x1*-0x1c0f],-0x135b*-0x1+-0x1ea9+0xb5e),_0x2c614f(0x5df));if(_0x1245f1!==undefined)_0x53503d[_0x2c614f(0x27a)][_0xa15391[_0x2ae1ef][-0x11ad+0x327*-0x2+0x17fc]]=_0x1245f1;}}if(_0x3c97c7)for(var _0x2ebfe3=-0x139c+0x1a1d+0x3*-0x22b;_0x2ebfe3<_0x3c97c7[_0x2c614f(0x35a)+'h'];_0x2ebfe3++){var _0x28d351=_0x55b637(_0x3f7c62+_0x2fd94f[_0x2c614f(0x610)](parseInt,_0x3c97c7[_0x2ebfe3][-0x8c3+-0xd3*-0x26+0x20d*-0xb],-0xbc3+0x1*0x1dbf+-0x11ec),_0x2fd94f['AeAvs']);if(_0x28d351)_0x53503d[_0x2c614f(0xad4)][_0x3c97c7[_0x2ebfe3][0x31b+-0x5*0x303+0xbf5]]='0x'+(_0x28d351>>>0x2*0x3ba+0x1*-0x1119+-0x337*-0x3)['toStr'+'ing'](0x331*0x1+-0x266e+0x234d);}return _0x53503d['scala'+'rs']=_0x2fbc76['filte'+'r'](function(_0x794a7c){var _0xb37ab4=_0x2c614f;return _0x794a7c[0x1d44+-0x1dfc+0xb9]===_0x2fd94f[_0xb37ab4(0x51b)]||_0x794a7c[-0xd*0x1ad+-0xb23*-0x2+-0x7c]===_0x2fd94f[_0xb37ab4(0x839)];})['map'](function(_0x8ec326){var _0x1a7b9a=_0x2c614f;if(_0x1a7b9a(0x6a1)===_0x1a7b9a(0x6a1))return{'o':'0x'+_0x8ec326[-0x81*0x4a+-0x149a+-0x3dc*-0xf]['toStr'+'ing'](-0x18*0xa7+0x1577+-0x5bf),'v':_0x238095[_0x1a7b9a(0x2fb)](_0x55b637,_0x3f7c62+_0x8ec326[-0x1345+0x1d83+-0x13*0x8a],_0x8ec326[-0xcd4+-0x32*-0xb0+-0x158b*0x1])};else try{return _0x452c8e();}catch(_0x5696cb){return{'err':_0x238095[_0x1a7b9a(0x929)](_0x2c93e1,_0x5696cb&&_0x5696cb['messa'+'ge']),'stack':_0x37bb85(_0x5696cb&&_0x5696cb[_0x1a7b9a(0x48e)])};}})[_0x2c614f(0xb63)+'r'](function(_0x5bec9b){return _0x5bec9b['v']!==undefined&&isFinite(_0x5bec9b['v']);})['slice'](0x158*-0x1+-0x1037+0x118f,0x19b+0x1109+-0x253*0x8),_0x53503d;}function _0x4e6ac2(){var _0x25ebc7=_0x3f0b99,_0x177f08={'vzoot':function(_0x187bb7,_0x533cc1){var _0x11717e=_0x59a2;return _0x2fd94f[_0x11717e(0x679)](_0x187bb7,_0x533cc1);},'GbqUY':function(_0x372fad,_0x3a9c04){return _0x372fad-_0x3a9c04;},'pmapa':function(_0x81ca6a,_0x3bb86b){return _0x81ca6a/_0x3bb86b;},'sSlZR':function(_0x1b0093,_0x329e17){return _0x1b0093*_0x329e17;}},_0x4a99bd={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x27f43c=_0x48cc1a[_0x25ebc7(0xa1a)+_0x25ebc7(0xbcb)+'ler']&&_0x48cc1a[_0x25ebc7(0xa1a)+_0x25ebc7(0xbcb)+_0x25ebc7(0x62d)][_0x25ebc7(0x6e1)]||-0x329*0xa+0x2*0x935+0xd30,_0x4c942e=_0x66b4c0['Photo'+_0x25ebc7(0xcc8)+_0x25ebc7(0xa56)+'nc']||{},_0x1a0d09=Object[_0x25ebc7(0x859)](_0x4c942e);for(var _0xd3e8e3=0xf25+0x120b+-0x2130;_0xd3e8e3<_0x1a0d09[_0x25ebc7(0x35a)+'h']&&_0x2fd94f['kLANT'](_0xd3e8e3,0x1f9d+0x16fa+0x7*-0x7c9);_0xd3e8e3++){var _0x82c2b5=_0x4c942e[_0x1a0d09[_0xd3e8e3]],_0x283d21=_0xcc22e4('Photo'+_0x25ebc7(0xcc8)+'orkSy'+'nc',_0x82c2b5[_0x25ebc7(0x6e1)]);_0x283d21[_0x25ebc7(0x1e4)]=_0x82c2b5[_0x25ebc7(0x1e4)],_0x283d21[_0x25ebc7(0x218)+_0x25ebc7(0xad3)+'s']=_0x82c2b5[_0x25ebc7(0x218)+'Seen']-_0x13f4db,_0x283d21[_0x25ebc7(0x57a)+'al']=!!_0x27f43c&&_0x2fd94f['COgqo'](_0x283d21['refs'][_0x25ebc7(0xb17)],'0x'+_0x27f43c['toStr'+'ing'](-0x934+0x19*-0x137+0x27a3));if(_0x283d21[_0x25ebc7(0xad4)][_0x25ebc7(0x457)+'h']){var _0xfaa7a=_0x2fd94f['hhSsG'](parseInt,_0x283d21[_0x25ebc7(0xad4)][_0x25ebc7(0x457)+'h'],-0x3a7+-0x9*0x209+0x1608);_0x283d21['healt'+'h']=_0x58de0b(_0xfaa7a,_0x25ebc7(0x287)+'hScri'+'pt',_0x25ebc7(0xb3c));}_0x4a99bd[_0x25ebc7(0x29e)+'rs']['push'](_0x283d21);}_0x4a99bd[_0x25ebc7(0x29e)+'rCoun'+'t']=_0x1a0d09[_0x25ebc7(0x35a)+'h'];var _0x5d12b7=_0x66b4c0[_0x25ebc7(0xa38)+_0x25ebc7(0xb2f)+_0x25ebc7(0x62d)]||{},_0x4ed02f=Object['keys'](_0x5d12b7);for(var _0x574db4=0x1*-0x15e4+0x4d9+0x1*0x110b;_0x574db4<_0x4ed02f['lengt'+'h']&&_0x574db4<-0x1*-0x7d+0x129e+-0x1303;_0x574db4++){var _0x1e6f04=_0xcc22e4(_0x25ebc7(0xa38)+_0x25ebc7(0xb2f)+'ler',_0x5d12b7[_0x4ed02f[_0x574db4]][_0x25ebc7(0x6e1)]);_0x1e6f04[_0x25ebc7(0x1e4)]=_0x5d12b7[_0x4ed02f[_0x574db4]]['hits'],_0x1e6f04[_0x25ebc7(0x218)+'SeenM'+'s']=_0x2fd94f[_0x25ebc7(0x7a2)](_0x5d12b7[_0x4ed02f[_0x574db4]]['first'+_0x25ebc7(0xde8)],_0x13f4db);if(_0x1e6f04['refs']['healt'+'h'])_0x1e6f04[_0x25ebc7(0x457)+'h']=_0x2fd94f[_0x25ebc7(0xe03)](_0x58de0b,_0x2fd94f[_0x25ebc7(0xa16)](parseInt,_0x1e6f04['refs']['healt'+'h'],-0x335*-0x3+0x84*0x3f+0x1*-0x2a0b),_0x2fd94f[_0x25ebc7(0xb1a)],_0x25ebc7(0xb3c));_0x4a99bd[_0x25ebc7(0xa7d)][_0x25ebc7(0x1ea)](_0x1e6f04);}_0x4a99bd[_0x25ebc7(0xae0)+_0x25ebc7(0x8a4)]=_0x4ed02f[_0x25ebc7(0x35a)+'h'];var _0x38adff=_0x66b4c0['FPSco'+'ntrol'+_0x25ebc7(0x62d)]||{},_0x48cdb6=Object[_0x25ebc7(0x859)](_0x38adff);for(var _0x48606d=0x73c+0xd*-0xe5+0x465;_0x48606d<_0x48cdb6[_0x25ebc7(0x35a)+'h']&&_0x2fd94f[_0x25ebc7(0xb1e)](_0x48606d,0x6b7*0x1+0x7bc+0x2df*-0x5);_0x48606d++){var _0x3ce8ab=_0x2fd94f[_0x25ebc7(0x196)](_0xcc22e4,_0x2fd94f['WWVBL'],_0x38adff[_0x48cdb6[_0x48606d]]['ptr']);_0x3ce8ab['hits']=_0x38adff[_0x48cdb6[_0x48606d]][_0x25ebc7(0x1e4)],_0x3ce8ab['isLoc'+'al']=_0x2fd94f[_0x25ebc7(0xb14)](_0x38adff[_0x48cdb6[_0x48606d]]['ptr'],_0x27f43c),_0x4a99bd['contr'+'oller'+'s']['push'](_0x3ce8ab);}_0x4a99bd['contr'+_0x25ebc7(0x3f8)+_0x25ebc7(0x7a0)]=_0x48cdb6[_0x25ebc7(0x35a)+'h'];var _0x2d7188=_0x4a99bd[_0x25ebc7(0x29e)+'rs']['conca'+'t'](_0x4a99bd[_0x25ebc7(0xa7d)]);for(var _0x4f8f5c=-0x1*0x1150+-0x5*0x53f+-0x47*-0x9d;_0x2fd94f[_0x25ebc7(0x394)](_0x4f8f5c,_0x2d7188['lengt'+'h']);_0x4f8f5c++){if(_0x2d7188[_0x4f8f5c]['isLoc'+'al'])continue;_0x4a99bd['enemi'+'es'][_0x25ebc7(0x1ea)](_0x2d7188[_0x4f8f5c]);}_0x4a99bd['enemy'+'Count']=_0x4a99bd['enemi'+'es'][_0x25ebc7(0x35a)+'h'];var _0xb0cd80={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x433623={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x1a580d in _0x48cc1a){var _0x52bde2=_0x48cc1a[_0x1a580d];if(!_0x52bde2||!_0x52bde2[_0x25ebc7(0x6e1)])continue;if(!_0x2fd94f['YqlBD'](_0x1a580d,_0xb0cd80))continue;_0x4a99bd[_0x25ebc7(0x793)+_0x25ebc7(0x5fd)][_0x1a580d]=_0x2fd94f['iHLrW']('0x',_0x52bde2[_0x25ebc7(0x6e1)][_0x25ebc7(0x7e7)+'ing'](0x5a3+0x1b53*-0x1+0x15c0));var _0xfb7202=_0x55b637(_0x52bde2[_0x25ebc7(0x6e1)]+_0xb0cd80[_0x1a580d],_0x2fd94f[_0x25ebc7(0xbff)]),_0x144011=_0x2fd94f[_0x25ebc7(0x610)](_0x55b637,_0x52bde2[_0x25ebc7(0x6e1)]+_0x433623[_0x1a580d],_0x2fd94f[_0x25ebc7(0xbff)]);if(_0xfb7202&&_0x4a99bd[_0x25ebc7(0x3a3)+'a']===null){if('UOWVo'===_0x2fd94f[_0x25ebc7(0x512)]){var _0x505b9c=_0x177f08[_0x25ebc7(0x904)](_0x177f08['GbqUY'](-0xbcb*0x3+-0x246d+0x47ce+0.5,_0x3abe04['y']/_0x8fed16[_0x25ebc7(0xc14)+'s']['h']),-0x1731+-0x2374+-0x181*-0x27),_0x5a134c=_0x177f08['pmapa'](_0x1b4781/_0x5a98a8,_0xdc0ce4);_0x4b2168['verti'+_0x25ebc7(0x55a)]={'got':_0xe6f860[_0x25ebc7(0x632)](_0x505b9c*(-0x144f*0x1+0x1e18+-0x5e1))/(-0x3ca*0x1+-0x1*0xc47+0x13f9),'want':_0x177f08['pmapa'](_0x13cafc['round'](_0x177f08[_0x25ebc7(0x904)](_0x5a134c,-0x1b0a+0x1187+0xd6b)),0x9db+0x25f*-0x1+-0x394),'off':_0x177f08[_0x25ebc7(0x8a6)](_0x5cdd01[_0x25ebc7(0x632)](_0x177f08['sSlZR'](_0x177f08[_0x25ebc7(0x824)](_0x505b9c,_0x5a134c),-0x218f+0x36e*0x4+0x17bf)),0x1*-0x4e9+0x231b+-0x1a4a)};}else _0x4a99bd['camer'+'a']=_0x2fd94f[_0x25ebc7(0x9c7)]('0x',(_0xfb7202>>>0x1*0x2e8+0x219b*0x1+-0x2483*0x1)[_0x25ebc7(0x7e7)+_0x25ebc7(0xa00)](0x1*0xc7+0xcc9+-0xd80)),_0x4a99bd[_0x25ebc7(0x3a3)+_0x25ebc7(0xd55)]=_0x1a580d;}if(_0x144011&&_0x2fd94f[_0x25ebc7(0xc52)](_0x4a99bd[_0x25ebc7(0x29e)+_0x25ebc7(0xbb9)],null))_0x4a99bd[_0x25ebc7(0x29e)+'rList']='0x'+_0x2fd94f['Czbhv'](_0x144011,-0x1*0x2596+-0x81*-0x24+0x1372)[_0x25ebc7(0x7e7)+'ing'](0x421*0x2+0x1f5+-0x17*0x71);}if(!_0x4a99bd['playe'+_0x25ebc7(0x419)+'t']&&!_0x4a99bd[_0x25ebc7(0xae0)+_0x25ebc7(0x8a4)]&&!_0x4a99bd[_0x25ebc7(0x3a3)+'a'])_0x4a99bd[_0x25ebc7(0x9b4)]=_0x2fd94f['DNmOT']('No\x20Ph'+_0x25ebc7(0x78b)+_0x25ebc7(0xb06)+_0x25ebc7(0xdde)+_0x25ebc7(0xa2c)+_0x25ebc7(0xa38)+_0x25ebc7(0xb2f)+'ler\x20a'+_0x25ebc7(0x1cf)+'\x20game'+'\x20mana'+'ger.\x20'+_0x25ebc7(0xdf0)+_0x25ebc7(0x4c8)+_0x25ebc7(0x4b1),_0x2fd94f[_0x25ebc7(0x29d)]);else!_0x4a99bd[_0x25ebc7(0x28a)+_0x25ebc7(0x7a0)]&&(_0x25ebc7(0xa7b)!=='hIHGv'?_0x4a99bd[_0x25ebc7(0x9b4)]=_0x2fd94f['rwBQj'](_0x25ebc7(0x7c9)+_0x25ebc7(0xba1)+_0x25ebc7(0x657)+'sent\x20'+'but\x20n'+_0x25ebc7(0x950)+'re\x20cl'+_0x25ebc7(0x9da)+_0x25ebc7(0x4cd)+_0x25ebc7(0xa75)+_0x25ebc7(0xb69)+'yet\x20-'+_0x25ebc7(0xb89)+'k\x20',_0x2fd94f['lwjgN']):(_0x51977d['fov']=_0x4bc5cf,_0x3a7bfd()));try{if(_0x2fd94f['fQiER']('SiLRb',_0x2fd94f['PpqtU'])){var _0x181665=window[_0x25ebc7(0x518)+'WebMo'+_0x25ebc7(0x1ec)]&&window['Unity'+'WebMo'+_0x25ebc7(0x1ec)]['Runti'+'me'],_0xd074d7=_0x181665&&_0x181665['inter'+'nalWa'+_0x25ebc7(0x465)+'es']||[],_0x1ee3af={};for(var _0x205be9=0x1675+-0x99e*-0x2+-0x29b1;_0x2fd94f[_0x25ebc7(0x18f)](_0x205be9,_0xd074d7[_0x25ebc7(0x35a)+'h'])&&_0x2fd94f[_0x25ebc7(0x356)](_0x205be9,-0x2*-0xd25+-0x7*-0x3e9+-0x2609*0x1);_0x205be9++){var _0xe15a0b=_0xd074d7[_0x205be9][_0x25ebc7(0xde9)+'s']['join'](',')+'\x20->\x20'+(_0xd074d7[_0x205be9]['retur'+_0x25ebc7(0x2f7)]||_0x2fd94f['jerBC']);_0x1ee3af[_0xe15a0b]=(_0x1ee3af[_0xe15a0b]||0x2*0x10a6+0x7*-0x2+0x5*-0x6a6)+(0x1f3*0x9+0xa7b+-0x1c05);}_0x4a99bd['wasmT'+_0x25ebc7(0xe3a)]=_0x1ee3af;}else{_0x22d02e=_0x31be01['basis'];if(_0x265a53['pos'])_0xb2c5a1=_0x1dfee3['pos'];if(_0x1d8b46[_0x25ebc7(0xc71)]!==null)_0x352184=_0x2fa558[_0x25ebc7(0xc71)];}}catch(_0x1c40a1){}return _0x4a99bd;}function _0x58de0b(_0x455d67,_0x5c706d,_0x1491a0){var _0x131e9b=_0x3f0b99;try{var _0x49c344=_0x2404cb[_0x5c706d]||[];for(var _0x4170a5=-0x247f+0xa0+0x23df;_0x4170a5<_0x49c344[_0x131e9b(0x35a)+'h'];_0x4170a5++){if(_0x2fd94f[_0x131e9b(0x314)](_0x49c344[_0x4170a5][-0x8b*-0x30+-0x1b6c+0x1*0x15d],_0x1491a0))continue;var _0xc379c=_0x49c344[_0x4170a5][-0x8b0+0x11*-0x1b2+0x2582];if(_0x1491a0[_0x131e9b(0xaa9)+'Of']('obf')===0x1143+-0x21b9+0x1076){if('uSZre'===_0x2fd94f[_0x131e9b(0x400)])try{_0x100a3a[_0x131e9b(0x505)]();}catch(_0x161e56){}else{var _0x716c69=('5|4|0'+_0x131e9b(0x441)+'1|2')[_0x131e9b(0xae3)]('|'),_0x4e9740=0x4*-0x1c6+-0x534+0xc4c;while(!![]){switch(_0x716c69[_0x4e9740++]){case'0':_0xf84cdd['o']=_0xc379c;continue;case'1':if(!_0x31ad1c['rows']['lengt'+'h'])return null;continue;case'2':return _0x31ad1c[_0x131e9b(0xa33)][-0x29*-0x1d+0xbf6+-0x109b];case'3':var _0x31ad1c=_0x247924([_0xf84cdd]);continue;case'4':if(!_0xf84cdd)return null;continue;case'5':var _0xf84cdd=_0xa87e07(_0x455d67,_0xc379c,_0x1491a0);continue;case'6':_0xf84cdd['k']=_0x1491a0;continue;}break;}}}var _0x221600=_0x2fd94f[_0x131e9b(0x73c)](_0x55b637,_0x455d67+_0xc379c,_0x1491a0);if(_0x2fd94f['jTnqk'](_0x221600,undefined))return null;return{'o':_0x2fd94f[_0x131e9b(0x1fb)]('0x',_0xc379c[_0x131e9b(0x7e7)+'ing'](-0x1341+0x1450+-0x33*0x5)),'v':_0x221600};}}catch(_0x15cfbb){}return null;}function _0x4e1b9f(){var _0x304135=_0x3f0b99,_0x2b868a={'BCRVd':_0x304135(0xcf5)+'eton'},_0x3cd5c3={};_0x15e079['ok']=0x170a+0x286*-0x3+-0x84*0x1e,_0x15e079['faile'+'d']=-0x13e*-0x11+0x5*-0x5bf+0x79d,_0x15e079['lastE'+_0x304135(0xbdf)]=null;var _0x441c51=Object['keys'](_0x2404cb);for(var _0x1e248b=-0x10c*0x22+0x1*0x95+-0x1*-0x2303;_0x1e248b<_0x441c51['lengt'+'h'];_0x1e248b++){if('yYfOS'!=='AfeSv'){var _0x23d1b3=_0x441c51[_0x1e248b],_0x2d7e16=_0x48cc1a[_0x23d1b3];if(!_0x2d7e16||!_0x2d7e16[_0x304135(0x6e1)])continue;var _0x8c5500=_0x2404cb[_0x23d1b3]||[],_0x49210e=[];for(var _0x51a8ef=-0xf0c+-0xa8b*-0x1+0x1*0x481;_0x51a8ef<_0x8c5500['lengt'+'h'];_0x51a8ef++){var _0x16ce15=_0x8c5500[_0x51a8ef][-0xe91+-0x8e4+0x1775*0x1],_0x1155a6=_0x8c5500[_0x51a8ef][0x6a*-0x2f+-0xdee+0x2165];if(_0x1155a6[_0x304135(0xaa9)+'Of'](_0x2fd94f['DxEzF'])===0x1594+-0xb74+-0xa20){var _0x2a5bad=_0x2fd94f['SGubm'](_0xa87e07,_0x2d7e16['ptr'],_0x16ce15,_0x1155a6);if(!_0x2a5bad)continue;_0x2a5bad['o']=_0x16ce15,_0x2a5bad['k']=_0x1155a6,_0x49210e['push'](_0x2a5bad);}else{if(_0x304135(0x1c6)!==_0x304135(0x1c6))_0x17b90a['push']({'o':_0x58cc3a[_0x3cd752][_0x304135(0x385)+'rs'][_0x733a0a]['o'],'v':_0x5415ca[_0x2bc015]['membe'+'rs'][_0x291669]['v'],'why':_0x2b868a[_0x304135(0x843)]});else{var _0x5ea0e3=_0x2fd94f[_0x304135(0x242)](_0x55b637,_0x2d7e16[_0x304135(0x6e1)]+_0x16ce15,_0x1155a6);if(_0x5ea0e3===undefined)continue;var _0x3e4527={'o':_0x16ce15,'k':_0x1155a6,'v':_0x5ea0e3};if(_0x1155a6==='v2'||_0x1155a6==='v3'||_0x2fd94f['BDVEN'](_0x1155a6,'v4')){var _0x565d45=_0x1155a6==='v2'?-0x2*-0xa61+0x45*0x29+-0x1fcd:_0x2fd94f['AForL'](_0x1155a6,'v3')?-0xb03*-0x3+0xde*-0x15+-0xed0:0x7*-0x55a+-0x1f2c+-0xca*-0x57,_0x107941=_0x284134(_0x2d7e16['ptr'],_0x16ce15,_0x565d45);_0x107941&&(_0x3e4527['xyz']=_0x107941,_0x3e4527['v']=_0x107941[-0x3*0xae7+0x7*-0xb+0x2102]);}_0x49210e[_0x304135(0x1ea)](_0x3e4527);}}}if(_0x49210e[_0x304135(0x35a)+'h']){if(_0x2fd94f[_0x304135(0x2c2)](_0x2fd94f[_0x304135(0xc81)],'Krafm')){var _0x435a77=_0x247924(_0x49210e);_0x3cd5c3[_0x23d1b3]=_0x435a77['rows'],_0x17ecfd[_0x23d1b3]={'key':_0x435a77[_0x304135(0xcd9)],'sane':_0x435a77[_0x304135(0xdc1)],'checked':_0x435a77[_0x304135(0x80e)+'ed'],'keyConsistent':_0x435a77[_0x304135(0x529)+_0x304135(0x6c9)+_0x304135(0x2f1)],'keySource':_0x435a77['keySo'+'urce']};}else{var _0x428d15=_0x1bad5a['abs'](_0x5e7989-_0x1e8890['last']);if(_0x428d15>_0x4f0210[_0x304135(0x3ca)])_0x225ba9[_0x304135(0x3ca)]=_0x428d15;}}}else return _0x28ccc5['sourc'+'e']='windo'+'w\x20glo'+'bal',_0x462ba0;}return _0x3cd5c3;}function _0x247924(_0x4c3eb6){var _0x358ae6=_0x3f0b99,_0x489ed8=0x577*-0x2+-0x1*0x19a6+-0x124a*-0x2,_0xd8337b=-0xf80+-0x215e+0x30de,_0x41575a=null;for(var _0x13493d=0x3*-0x3af+0x3*-0x3ff+0xb85*0x2;_0x13493d<_0x4c3eb6[_0x358ae6(0x35a)+'h'];_0x13493d++){if(_0x2fd94f[_0x358ae6(0x2dd)]!==_0x2fd94f[_0x358ae6(0xe54)]){var _0x301196=_0x4c3eb6[_0x13493d];if(_0x301196['k']['index'+'Of'](_0x2fd94f[_0x358ae6(0x1f8)])!==-0x3f*-0x66+-0x1*-0x1972+-0x328c)continue;_0x301196['v']=_0x2fd94f[_0x358ae6(0xe03)](_0x1f1a15,_0x301196['k'],_0x301196[_0x358ae6(0xd19)+'n'],_0x301196['keyAt'+_0x358ae6(0xd48)+'t0']),_0x301196['keyUs'+'ed']=_0x301196[_0x358ae6(0x9b2)+_0x358ae6(0xd48)+'t0'],_0x301196[_0x358ae6(0x6a2)]=_0x2fd94f['hHHxi'](_0x2fd94f['jlbsY'](_0x2fd94f['rwBQj'](_0x2fd94f['pNEem']+_0x301196['hidde'+'n']+_0x2fd94f[_0x358ae6(0x6cf)]+_0x301196['fake'],_0x301196[_0x358ae6(0x6f1)]?_0x358ae6(0xe26)+'VE':'')+_0x2fd94f[_0x358ae6(0xc9f)],_0x301196[_0x358ae6(0x9b2)+_0x358ae6(0xd48)+'t0']),'\x20hex=')+_0x301196[_0x358ae6(0x5fb)];if(_0x41575a===null)_0x41575a=_0x301196['keyAt'+_0x358ae6(0xd48)+'t0'];_0xd8337b++,_0xca5818(_0x301196)?(_0x489ed8++,_0x301196['sane']=!![]):_0x301196['sane']=![],delete _0x301196[_0x358ae6(0x747)];}else _0x1623ad[_0x358ae6(0x3a3)+'a']='0x'+(_0x26a005>>>0x1*-0x18a+-0x2078+0x2202)['toStr'+'ing'](-0x3*-0x71d+0x1936+-0x2e7d),_0x4f0f31[_0x358ae6(0x3a3)+'aFrom']=_0x1650fc;}return{'rows':_0x4c3eb6,'key':_0x41575a,'sane':_0x489ed8,'checked':_0xd8337b,'keyConsistent':_0x5dbf26(_0x4c3eb6),'keySource':_0x2fd94f[_0x358ae6(0x3ae)]};}function _0x5dbf26(_0xc52706){var _0xb99349=_0x3f0b99,_0xbb72d5={'YpDdN':function(_0x5dd6eb,_0x43f474){return _0x5dd6eb(_0x43f474);}};if(_0x2fd94f[_0xb99349(0x5a8)]('KakOo',_0x2fd94f[_0xb99349(0x4be)])){var _0x116d95={};for(var _0x10345b=-0x1*-0x12ab+-0x51f+-0xd8c;_0x2fd94f[_0xb99349(0x298)](_0x10345b,_0xc52706[_0xb99349(0x35a)+'h']);_0x10345b++){if(_0x2fd94f[_0xb99349(0x765)](_0x2fd94f[_0xb99349(0xb32)],_0x2fd94f[_0xb99349(0xb32)]))_0x32159a[_0xb99349(0x9bb)+'ck']=function(){_0xbb72d5['YpDdN'](_0x6ed0d2,_0x55b9b3);};else{var _0x1e6334=_0xc52706[_0x10345b];if(_0x2fd94f[_0xb99349(0x765)](_0x1e6334['k']['index'+'Of'](_0xb99349(0xd8a)),-0x1*0x2531+-0x11ea+-0x1*-0x371b))continue;if(_0x116d95[_0x1e6334['k']]===undefined)_0x116d95[_0x1e6334['k']]=_0x1e6334[_0xb99349(0xa51)+'ed'];else{if(_0x116d95[_0x1e6334['k']]!==_0x1e6334[_0xb99349(0xa51)+'ed'])return![];}}}return!![];}else{_0x46d3d6=_0x45167f,_0x2f010d=[],_0x131d6b(_0xb99349(0x9db)+'t',{'report':_0xa672f5()});return;}}function _0xca5818(_0x34ff65){var _0x4f7259=_0x3f0b99,_0x4f5bd0=_0x34ff65['v'];if(_0x2fd94f[_0x4f7259(0x765)](typeof _0x4f5bd0,_0x4f7259(0xa25)+'r')||!isFinite(_0x4f5bd0))return![];if(_0x34ff65['k']===_0x4f7259(0x3d7))return _0x2fd94f['zEtdf'](_0x4f5bd0,0x3*-0x1d5+-0xa*-0x205+-0xeb3)||_0x2fd94f['pYkrB'](_0x4f5bd0,-0x2fc+0x1a28+-0x172b*0x1);var _0x3ecc4d=_0x34ff65[_0x4f7259(0xba6)];if(typeof _0x3ecc4d!==_0x2fd94f['VSdGn']||!isFinite(_0x3ecc4d))return!![];if(_0x34ff65[_0x4f7259(0x6f1)]===-0x15*-0x16d+0x1*0x1d87+-0x3b77){if(_0x4f7259(0xdb4)===_0x4f7259(0xdc9)){_0x230e14[_0x4f7259(0x395)](_0x2fd94f[_0x4f7259(0xe14)],'color'+':'+_0x4c1546+(';font'+'-weig'+_0x4f7259(0xc80)+'0'),_0x5d07c5),_0x467ed4[_0x4f7259(0x395)](_0x502dee+'\x0a'+_0x2401bd['strin'+_0x4f7259(0xa82)](_0x347885,null,-0xd83+-0x1a30+0x27b4)+'\x0a'+_0x4b2d93),_0x4ee3a7=_0x2d5674;try{_0x2fd94f[_0x4f7259(0xe2e)](_0x252dbb,_0x4d7004);}catch(_0x9f24a8){}_0x1645e9(_0x2fd94f[_0x4f7259(0xa11)],{'report':_0x56f816});}else return _0x2fd94f['uFQTO'](Math[_0x4f7259(0xd22)](_0x4f5bd0-_0x3ecc4d),Math[_0x4f7259(0x81d)](0x14e*-0x3+0x1ddc+-0x19f1,Math[_0x4f7259(0xd22)](_0x3ecc4d)*(0x15ee+0x20a1+-0x368f+0.6)));}return _0x2fd94f[_0x4f7259(0x18f)](Math[_0x4f7259(0xd22)](_0x4f5bd0),-0x957f304*0x2+-0x9*-0x87c2cff+0x81*0x3d291);}function _0x1296f4(){var _0x3b5048=_0x3f0b99,_0x5dda00={'lQanC':_0x2fd94f[_0x3b5048(0x716)],'RoVnF':'#saku'+'ra-es'+'p-lg','oxBPs':_0x3b5048(0xa60),'MfKfJ':function(_0x259c27,_0x1a3124){return _0x259c27+_0x1a3124;},'YEogz':_0x3b5048(0xe0d)+_0x3b5048(0x45e)+_0x3b5048(0x919)+_0x3b5048(0x3f4)+':12px'+_0x3b5048(0xbae)+_0x3b5048(0x5d8)+_0x3b5048(0xc48)+'ex:21'+_0x3b5048(0x66c)+'646;p'+_0x3b5048(0xa26)+_0x3b5048(0x54e)+_0x3b5048(0x815)+_0x3b5048(0xcb8),'BcQKT':'paddi'+'ng:4p'+_0x3b5048(0xc2e)+_0x3b5048(0xe64)+_0x3b5048(0x85a)+_0x3b5048(0x4bc)+'onosp'+'ace,C'+_0x3b5048(0xa41)+'as,mo'+'nospa'+'ce;co'+_0x3b5048(0xd2b)+'bda9c'+'9;'};if(_0x2fd94f[_0x3b5048(0xa1e)](_0x2fd94f[_0x3b5048(0x58b)],_0x3b5048(0x4b7))){var _0x45b536={};try{var _0xc46790=window['Unity'+_0x3b5048(0x4e6)+_0x3b5048(0x1ec)]&&window[_0x3b5048(0x518)+'WebMo'+'dkit'][_0x3b5048(0xb7c)+'me'];_0x45b536['tag']=_0xc46790&&_0xc46790[_0x3b5048(0x8ee)+_0x3b5048(0xba2)+'g']||null,_0x45b536[_0x3b5048(0x563)+_0x3b5048(0x616)]=!!(_0xc46790&&_0x56cb5b&&_0x2fd94f[_0x3b5048(0x267)](_0xc46790[_0x3b5048(0x8ee)+'uraTa'+'g'],_0x56cb5b)),_0x45b536[_0x3b5048(0x3ab)+_0x3b5048(0xd2a)+'e']=_0xc46790&&_0xc46790['_game']?typeof _0xc46790[_0x3b5048(0x764)]:_0x3b5048(0x761),_0x45b536[_0x3b5048(0x52e)+'nRunt'+'imeIs'+_0x3b5048(0x1db)+_0x3b5048(0xe75)]=!!(_0x1e3fad&&_0x1e3fad[_0x3b5048(0x4d0)+_0x3b5048(0xaba)]&&_0x2fd94f[_0x3b5048(0x6c2)](_0x1e3fad[_0x3b5048(0x4d0)+_0x3b5048(0xaba)],_0xc46790)),_0x45b536['plugi'+_0x3b5048(0x3ac)+_0x3b5048(0x944)+'me']=_0x1e3fad&&_0x1e3fad[_0x3b5048(0x4d0)+_0x3b5048(0xaba)]&&_0x1e3fad[_0x3b5048(0x4d0)+_0x3b5048(0xaba)][_0x3b5048(0x764)]?typeof _0x1e3fad[_0x3b5048(0x4d0)+_0x3b5048(0xaba)]['_game']:_0x3b5048(0x761);}catch(_0x5a83d0){_0x45b536['error']=String(_0x5a83d0&&_0x5a83d0['messa'+'ge']||_0x5a83d0);}return _0x45b536;}else{var _0x104767=('2|4|9'+_0x3b5048(0x277)+_0x3b5048(0xb1f)+_0x3b5048(0x39f))[_0x3b5048(0xae3)]('|'),_0x80141a=0xe35*0x1+-0x1b8b*0x1+0xd56;while(!![]){switch(_0x104767[_0x80141a++]){case'0':_0x44e9d8['inner'+'HTML']=_0x5dda00[_0x3b5048(0x36d)]+(_0x3b5048(0x530)+'id=\x22s'+'akura'+_0x3b5048(0x88b)+_0x3b5048(0xa27)+_0x3b5048(0xcee)+_0x3b5048(0xa5a)+'-alig'+'n:cen'+_0x3b5048(0x789)+_0x3b5048(0xcd4)+'>');continue;case'1':var _0xd4a2f6={'cv':{'getContext':function(){return null;}},'el':_0x44e9d8};continue;case'2':if(!_0x146650['body']||!_0x58b03d['body'][_0x3b5048(0xd7e)+_0x3b5048(0xcc3)+'d'])return null;continue;case'3':_0xba1900={'el':_0x44e9d8,'cv':_0x44e9d8[_0x3b5048(0x320)+_0x3b5048(0x36e)+'tor'](_0x3b5048(0x4a7)+'ra-es'+_0x3b5048(0xe02)),'lg':_0x44e9d8[_0x3b5048(0x320)+_0x3b5048(0x36e)+_0x3b5048(0x4fd)](_0x5dda00['RoVnF'])};continue;case'4':var _0x44e9d8=_0x1b41c4['creat'+_0x3b5048(0xaf8)+_0x3b5048(0x2f1)](_0x5dda00[_0x3b5048(0x7f1)]);continue;case'5':if(!_0x46c3c1['cv']||!_0x44d793['cv']['getCo'+'ntext'])_0x45408e=_0xd4a2f6;continue;case'6':_0x5f14ea['body']['appen'+'dChil'+'d'](_0x44e9d8);continue;case'7':_0x44e9d8[_0x3b5048(0x76c)][_0x3b5048(0x6e5)+'xt']=_0x5dda00[_0x3b5048(0x1e5)](_0x5dda00[_0x3b5048(0xe4e)]+('backg'+_0x3b5048(0x632)+_0x3b5048(0x4e8)+_0x3b5048(0x849)+_0x3b5048(0x2df)+'.72);'+_0x3b5048(0xb3b)+_0x3b5048(0x3e9)+_0x3b5048(0x92a)+'d\x20rgb'+'a(255'+',143,'+'177,.'+_0x3b5048(0x3c2)+_0x3b5048(0x9a6)+'radiu'+_0x3b5048(0xd9e)+'x;')+_0x5dda00['BcQKT'],'user-'+'selec'+'t:non'+_0x3b5048(0xc85)+_0x3b5048(0x754)+'user-'+_0x3b5048(0x2a5)+_0x3b5048(0xb23)+'e;');continue;case'8':return _0x3b6c6e;case'9':_0x44e9d8['id']='sakur'+_0x3b5048(0x9f9);continue;}break;}}}function _0x66f5bd(){var _0x5511ee=_0x3f0b99,_0x1b9eb1={'oUoBz':function(_0x15ddcb,_0xb0694e){return _0x15ddcb+_0xb0694e;},'pvCAp':'4|1|5'+_0x5511ee(0xa74)+'0|2','mnbQD':'Speed'+'\x20off','cDYLF':'#2a0f'+'1b','LEFhG':'#f7ee'+'f5','LRvlJ':function(_0xb17dc,_0x340166){var _0x1d99cf=_0x5511ee;return _0x2fd94f[_0x1d99cf(0x598)](_0xb17dc,_0x340166);}};if('xULSD'!=='xULSD'){var _0x879c55=_0x3a72c3[_0x5511ee(0x518)+_0x5511ee(0x4e6)+_0x5511ee(0x1ec)]&&_0x32d443[_0x5511ee(0x518)+_0x5511ee(0x4e6)+_0x5511ee(0x1ec)][_0x5511ee(0xb7c)+'me'],_0x47b3ad=_0x879c55&&_0x879c55['inter'+_0x5511ee(0x656)+'smTyp'+'es']||[],_0xb4c90e={};for(var _0x148f03=-0x73b*0x1+0x4f6*0x2+-0xd*0x35;_0x148f03<_0x47b3ad[_0x5511ee(0x35a)+'h']&&_0x148f03<-0x265+-0x59*0x43+0x2950;_0x148f03++){var _0x2abb03=_0x47b3ad[_0x148f03][_0x5511ee(0xde9)+'s'][_0x5511ee(0x958)](',')+'\x20->\x20'+(_0x47b3ad[_0x148f03][_0x5511ee(0xada)+_0x5511ee(0x2f7)]||'void');_0xb4c90e[_0x2abb03]=_0x1b9eb1[_0x5511ee(0xd11)](_0xb4c90e[_0x2abb03]||0x2670+-0x14e2+-0x282*0x7,-0x1*0x1a54+0x12e2+0x773);}_0x4a7b33['wasmT'+'ypes']=_0xb4c90e;}else{var _0x53095b=[_0x5511ee(0xd96)+'Insta'+_0x5511ee(0x882),_0x2fd94f[_0x5511ee(0xbd0)],'game','unity'+_0x5511ee(0x7c8)+_0x5511ee(0x209)+'apper'],_0x2f9fce={};for(var _0x3e7b30=-0xff9+0x27*-0xc5+-0x7aa*-0x6;_0x3e7b30<_0x53095b[_0x5511ee(0x35a)+'h'];_0x3e7b30++){var _0xa4f714=_0x53095b[_0x3e7b30],_0x1879cd=typeof window[_0xa4f714];_0x2f9fce[_0xa4f714]=_0x1879cd===_0x2fd94f['ulUON']?_0x5511ee(0x2b2)+'ined':_0x1879cd;}var _0x1e847f=_0x99c993();_0x2f9fce['gameS'+'ource']=_0x15e079['sourc'+'e'];try{if(_0x2fd94f[_0x5511ee(0x730)]('xywGm',_0x5511ee(0x243))){var _0x5c6fb5=_0x1b9eb1[_0x5511ee(0x8c5)][_0x5511ee(0xae3)]('|'),_0xe24c3=0x2169+0x876+-0x29df;while(!![]){switch(_0x5c6fb5[_0xe24c3++]){case'0':var _0x28b555=_0x398f6d();continue;case'1':_0x145507['on']=!!_0x5a3f42;continue;case'2':if(_0x28b555){_0x28b555['sp']&&(_0x28b555['sp'][_0x5511ee(0xe45)+'onten'+'t']=_0x2930c2['on']?_0x5511ee(0x911)+'\x20ON':_0x1b9eb1['mnbQD'],_0x28b555['sp'][_0x5511ee(0x76c)][_0x5511ee(0xb59)+_0x5511ee(0x632)]=_0x3fd452['on']?_0x52065c:'trans'+'paren'+'t',_0x28b555['sp'][_0x5511ee(0x76c)][_0x5511ee(0x621)]=_0x3c4890['on']?_0x1b9eb1['cDYLF']:_0x1b9eb1[_0x5511ee(0xabd)]);if(_0x28b555['fx'])_0x28b555['fx'][_0x5511ee(0x244)]=_0x26a0a2(_0x1041e9[_0x5511ee(0x891)+'r']);if(_0x28b555['fv'])_0x28b555['fv'][_0x5511ee(0xe45)+'onten'+'t']=_0xc3be4c[_0x5511ee(0x891)+'r']['toFix'+'ed'](-0x2505+-0x155d+-0x1*-0x3a63)+'x';}continue;case'3':_0x135ee0[_0x5511ee(0x891)+'r']=_0x57eaf1[_0x5511ee(0xdfd)](_0x4d42e7['max'],_0x16dcee[_0x5511ee(0x81d)](_0x4c1f32[_0x5511ee(0xdfd)],_0x57a5c5(_0x21c384)||0x409*-0x3+-0x3b*-0x57+-0x7f1));continue;case'4':var _0x2606b6=_0x378866['on'];continue;case'5':_0x4bbaaf['on']&&!_0x2606b6&&(_0x1c5774===_0xdf70ea||_0x339801===null||_0x1b9eb1[_0x5511ee(0xac4)](_0x3ded4c(_0x415010),-0x1f*-0x3d+0x17de+-0x1f40))&&(_0xfe5ec8=_0x1031e4);continue;case'6':if(!_0x5ed2d8['on'])_0x4e148a={};continue;}break;}}else _0x2f9fce[_0x5511ee(0x61e)+_0x5511ee(0x274)]=!!(_0x1e847f&&_0x1e847f['Modul'+'e']),_0x2f9fce[_0x5511ee(0xc8c)+'8']=!!(_0x1e847f&&_0x1e847f['Modul'+'e']&&_0x1e847f['Modul'+'e']['HEAPU'+'8']),_0x2f9fce[_0x5511ee(0xb73)+'ytes']=_0x2f9fce['heapU'+'8']?_0x1e847f[_0x5511ee(0xa34)+'e'][_0x5511ee(0xde2)+'8'][_0x5511ee(0x35a)+'h']:0xf*-0x245+-0x25ea+0x589*0xd;}catch(_0xc4dbd2){if(_0x2fd94f[_0x5511ee(0x314)](_0x2fd94f[_0x5511ee(0xa05)],_0x2fd94f[_0x5511ee(0x78c)]))_0x2f9fce[_0x5511ee(0x61e)+_0x5511ee(0x274)]=![],_0x2f9fce[_0x5511ee(0xc8c)+'8']=![],_0x2f9fce['heapB'+_0x5511ee(0x683)]=-0x2a*0xb3+-0x1*0x2257+0x3fb5;else{_0x5734d3[_0x5511ee(0x1ea)](_0x2fd94f[_0x5511ee(0xa5e)]);for(var _0xab6da3=0x48f*0x3+-0xc1*0x1f+0x9b2;_0xab6da3<_0x4cef6d['warni'+_0x5511ee(0xe47)]['lengt'+'h'];_0xab6da3++)_0x2352ce['push'](_0x5511ee(0x54c)+_0x716947['warni'+'ngs'][_0xab6da3]);}}return _0x2f9fce[_0x5511ee(0x244)+_0x5511ee(0x988)+'er']=typeof _0xeba036,_0x2f9fce;}}function _0x2986ab(){var _0x4c704e=_0x3f0b99,_0x20e0d4={},_0x912f3d=_0x23e849();if(!_0x912f3d)return _0x20e0d4;_0x20e0d4[_0x2fd94f['MdnTc']]=_0x912f3d[_0x4c704e(0x6f3)+_0x4c704e(0x54b)];for(var _0x305ee7 in _0x912f3d['float'+'s'])_0x20e0d4[_0x2fd94f['OTKxw']+_0x305ee7]=_0x912f3d[_0x4c704e(0xa7f)+'s'][_0x305ee7];if(_0x912f3d[_0x4c704e(0x3a3)+'a'])_0x20e0d4[_0x2fd94f['pXPBQ']]=_0x912f3d['camer'+'a'];return _0x20e0d4;}function _0x56413d(_0x13d6c6){var _0x1c2aae=_0x3f0b99;if(_0x1c2aae(0x1ab)!==_0x2fd94f['CHGOR']){var _0x30a217=_0x227933[_0x1c2aae(0x518)+'WebMo'+'dkit']['Runti'+'me'];_0x30a217[_0x1c2aae(0x8ee)+'uraTa'+'g']=_0x2fd94f['RbdbI'](_0x24c380,':')+_0x2e32ec['rando'+'m']()['toStr'+_0x1c2aae(0xa00)](0x1*-0xe84+-0x26f5+0x359d)[_0x1c2aae(0x257)](-0x1*-0x24df+0x9b*-0x3a+-0x1bf,-0x16b5*0x1+0xb55+-0x1*-0xb6a),_0x12a1a9=_0x30a217[_0x1c2aae(0x8ee)+'uraTa'+'g'];}else{var _0x3b8747={};for(var _0x5497bb in _0x13d6c6){if(_0x2fd94f['XgNPF']!==_0x2fd94f[_0x1c2aae(0x840)])try{_0x533337[_0x1c2aae(0xd5b)+'em'](_0x4a2351,_0x4f6c23(_0x510242['fov']));}catch(_0x2be8fc){}else{var _0x1fb9e9=_0x13d6c6[_0x5497bb];for(var _0x544233=0x2*-0x8c2+-0x1*-0x89f+0x8e5;_0x2fd94f['MniZV'](_0x544233,_0x1fb9e9[_0x1c2aae(0x35a)+'h']);_0x544233++){_0x3b8747[_0x2fd94f['lWaKH'](_0x5497bb+_0x1c2aae(0x743),_0x1fb9e9[_0x544233]['o'][_0x1c2aae(0x7e7)+'ing'](-0x26d5+0xa7d+-0x4bc*-0x6))]=_0x1fb9e9[_0x544233]['v'];}}}return _0x3b8747;}}function _0xb64e92(_0xe8823c,_0x22eb12){var _0x471252=_0x3f0b99;if(_0x2fd94f['KNqcS']!==_0x2fd94f['KNqcS'])_0x2ce097[_0x471252(0xd29)+'tyle']=_0x2fd94f[_0x471252(0x56a)],_0x363bea['font']=_0x471252(0xc5b)+_0x471252(0xa4c)+_0x471252(0x3c6)+'ce,Co'+_0x471252(0xe38)+_0x471252(0x6ab)+'ospac'+'e',_0x119a1f['fillT'+_0x471252(0x80f)](_0x2fd94f[_0x471252(0x8f5)](_0x215c9e['round'](_0x3ae65d['d']||-0xebb+-0x6*0x2f9+0x2091),'m'),_0x5f1add-_0x1c7129/(0x3a*-0x9e+0x15a0+-0x2d6*-0x5),_0x370718-_0x2fd94f[_0x471252(0xd88)](_0x5ddb29,0x5f*-0x16+-0x2689*-0x1+-0x1e5d)-(0x2455+-0x207f+-0x3d3));else{if(_0x2fd94f['COgqo'](_0xe8823c,_0x2fd94f['ySliT'])){if(_0x2fd94f['MCuEa'](_0x2fd94f['LoTyp'],_0x471252(0x1f3))){var _0x4769db={'Srnpu':_0x471252(0xd97)+'d'};_0x20e103['clipb'+_0x471252(0x1e3)]['write'+'Text'](_0x484776)['then'](function(){var _0x145ea8=_0x471252;_0x4bf7e0['textC'+_0x145ea8(0xb09)+'t']=_0x4769db[_0x145ea8(0xc5c)];});}else{_0x2fd94f['iZijN'](_0x453f04,_0x22eb12&&typeof _0x22eb12['on']===_0x2fd94f['JtcZH']?_0x22eb12['on']:_0x30cca2['on'],_0x22eb12&&_0x2fd94f[_0x471252(0x92d)](typeof _0x22eb12[_0x471252(0x891)+'r'],_0x471252(0xa25)+'r')?_0x22eb12['facto'+'r']:_0x30cca2['facto'+'r']);return;}}if(_0xe8823c!==_0x471252(0x1be)+_0x471252(0xcc9))return;var _0x5adc7d=_0x4e1b9f(),_0x1a5657=_0x2fd94f[_0x471252(0x726)](_0x56413d,_0x5adc7d),_0x269366=_0x2986ab();for(var _0x32e098 in _0x269366)_0x1a5657[_0x32e098]=_0x269366[_0x32e098];if(!_0xf83ef5){if('jzzeE'!==_0x471252(0xab1))_0x2e3965=_0xb7a7e5(_0x575f48&&_0x551f2a[_0x471252(0x437)+'ge']||_0x350702);else{_0xf83ef5=_0x1a5657,_0x216ae6=[],_0x264f10(_0x471252(0x9db)+'t',{'report':_0x4b6f4f()});return;}}_0x216ae6=[];for(var _0x5bf464 in _0x1a5657){var _0x115fba=_0xf83ef5[_0x5bf464],_0x52a6eb=_0x1a5657[_0x5bf464];if(_0x115fba!==_0x52a6eb)_0x216ae6['push'](_0x2fd94f['QmaIX'](_0x2fd94f[_0x471252(0x5f5)](_0x5bf464,':\x20'),_0x115fba)+_0x471252(0xd85)+_0x52a6eb);}_0xf83ef5=_0x1a5657,_0x264f10(_0x2fd94f['AcFFT'],{'report':_0x2fd94f['gBdmc'](_0x4b6f4f)});}}var _0x2c7415=null;function _0x3c48ac(){var _0x1949db=_0x3f0b99,_0x5cfd1b={'sFOPG':function(_0x3e51df,_0x28960e,_0x4d248d){return _0x3e51df(_0x28960e,_0x4d248d);},'exokj':_0x2fd94f['EPSAq'],'oFBDl':function(_0x4eed58,_0x3b5441){var _0x39e9dc=_0x59a2;return _0x2fd94f[_0x39e9dc(0x83b)](_0x4eed58,_0x3b5441);},'sghgJ':'f32'};if(_0x2fd94f['rhIWG'](_0x1949db(0xcd3),'nqqey')){if(_0x2c7415)return _0x2c7415;try{if(!document[_0x1949db(0x58c)]||!document['body'][_0x1949db(0xd7e)+_0x1949db(0xcc3)+'d'])return null;if(!document[_0x1949db(0xb0f)+'ement'+_0x1949db(0x2aa)](_0x1949db(0x566)+_0x1949db(0x2e6)+_0x1949db(0x238)+'ss')){var _0x43c6cc=document['creat'+_0x1949db(0xaf8)+_0x1949db(0x2f1)](_0x1949db(0x76c));_0x43c6cc['id']=_0x2fd94f['mDhCX'],_0x43c6cc[_0x1949db(0xe45)+_0x1949db(0xb09)+'t']=_0x1949db(0x4a7)+_0x1949db(0x3f7)+'-hud{'+'all:i'+'nitia'+'l}',(document[_0x1949db(0x511)]||document[_0x1949db(0x38d)+'entEl'+_0x1949db(0x62c)])[_0x1949db(0xd7e)+_0x1949db(0xcc3)+'d'](_0x43c6cc);}var _0x5e7eb3=document[_0x1949db(0x8b1)+'eElem'+'ent']('div');_0x5e7eb3['id']=_0x1949db(0x566)+_0x1949db(0x2e6)+_0x1949db(0xdfb),_0x5e7eb3['style'][_0x1949db(0x6e5)+'xt']=_0x2fd94f[_0x1949db(0x1a3)](_0x2fd94f[_0x1949db(0x305)]+('backg'+'round'+':rgba'+_0x1949db(0x849)+'2,29,'+'.92);'+_0x1949db(0xb3b)+_0x1949db(0x3e9)+_0x1949db(0x92a)+'d\x20rgb'+_0x1949db(0xd58)+_0x1949db(0x889)+'177,.'+_0x1949db(0xb34)+'order'+_0x1949db(0x74e)+'us:10'+'px;'),_0x1949db(0x4d6)+_0x1949db(0xd80)+_0x1949db(0xd73)+_0x1949db(0xc5a)+':11px'+'/1.45'+_0x1949db(0x4bc)+'onosp'+_0x1949db(0xc8f)+'onsol'+_0x1949db(0x947)+_0x1949db(0x3c6)+'ce;co'+_0x1949db(0xd2b)+_0x1949db(0x5e1)+'5;')+_0x2fd94f[_0x1949db(0x313)];var _0x56032c='<div\x20'+_0x1949db(0x630)+_0x1949db(0xc6b)+'2\x22\x20st'+_0x1949db(0xcbc)+'color'+':#8d7'+_0x1949db(0xad9)+_0x1949db(0x6a4)+_0x1949db(0xd6b)+'90px;'+_0x1949db(0x312)+'iv>';_0x5e7eb3['inner'+_0x1949db(0xe0f)]=_0x2fd94f[_0x1949db(0x9c7)](_0x2fd94f[_0x1949db(0x69f)](_0x2fd94f[_0x1949db(0x61c)](_0x2fd94f['VHLfb'](_0x2fd94f['woTMm'](_0x2fd94f['uwgQE'](_0x2fd94f[_0x1949db(0x74c)](_0x1949db(0x530)+'data-'+'a=\x22ba'+_0x1949db(0x5d5)+_0x1949db(0xcbc)+'displ'+'ay:fl'+_0x1949db(0x235)+'p:6px'+';alig'+_0x1949db(0x5fe)+'ms:ce'+_0x1949db(0x597)+_0x1949db(0x681)+_0x1949db(0x538)+'wrap;'+_0x1949db(0x774)+'idth:'+_0x1949db(0x9cd)+_0x1949db(0xd38),_0x1949db(0x4e3)+_0x1949db(0xcbc)+_0x1949db(0x621)+':')+_0x22ca32,_0x1949db(0x47b)+'ura</'+'b>')+(_0x1949db(0x91f)+'on\x20da'+_0x1949db(0x217)+_0x1949db(0x317)+_0x1949db(0x76c)+'=\x22bac'+_0x1949db(0xa92)+'nd:tr'+_0x1949db(0x584)+_0x1949db(0x27f)+_0x1949db(0xb3b)+'r:1px'+'\x20soli'+'d\x20rgb'+'a(255'+_0x1949db(0x889)+_0x1949db(0xb4b)+'45);'),'color'+':#f7e'+_0x1949db(0x77e)+'order'+_0x1949db(0x74e)+_0x1949db(0x535)+'x;pad'+'ding:'+_0x1949db(0x4c9)+_0x1949db(0xe10)+_0x1949db(0xaef)+'point'+_0x1949db(0x7d7)+_0x1949db(0x66a)+_0x1949db(0x28e)+_0x1949db(0xd24)+_0x1949db(0x666)+_0x1949db(0x4a3)+_0x1949db(0xdab)+'>'),_0x2fd94f['Essvq'])+_0x22ca32+_0x2fd94f[_0x1949db(0x3a4)],'<span'+_0x1949db(0x7ff)+'-a=\x22f'+'v\x22\x20st'+'yle=\x22'+'color'+_0x1949db(0x454)+_0x1949db(0xb79)+_0x1949db(0x637)+'dth:3'+_0x1949db(0x70e)+_0x1949db(0x6ff)+'</spa'+'n>')+('<butt'+'on\x20da'+_0x1949db(0x217)+_0x1949db(0x8aa)+'\x20styl'+_0x1949db(0x2c0)+_0x1949db(0x367)+_0x1949db(0x6bb)+_0x1949db(0xae6)+'arent'+_0x1949db(0xd79)+'er:1p'+'x\x20sol'+_0x1949db(0x5e0)+_0x1949db(0xe41)+_0x1949db(0x801)+_0x1949db(0xaf2)+_0x1949db(0xca1))+_0x2fd94f['yJdvf']+(_0x1949db(0x91f)+'on\x20da'+_0x1949db(0x217)+_0x1949db(0x696)+_0x1949db(0xd71)+'le=\x22b'+'ackgr'+'ound:'+_0x1949db(0x43c)+'paren'+'t;bor'+_0x1949db(0x996)+_0x1949db(0x3fb)+'lid\x20r'+_0x1949db(0x84b)+_0x1949db(0x596)+_0x1949db(0x4e2)+_0x1949db(0xad5)+';')+_0x2fd94f[_0x1949db(0x8cd)]+(_0x1949db(0x91f)+_0x1949db(0x6d8)+'ta-a='+_0x1949db(0xbbd)+_0x1949db(0xd71)+_0x1949db(0x31e)+_0x1949db(0x5ad)+'-left'+_0x1949db(0x9d7)+_0x1949db(0xc1e)+'groun'+'d:tra'+'nspar'+'ent;b'+'order'+_0x1949db(0x1dd)+'solid'+'\x20rgba'+_0x1949db(0xd00)+_0x1949db(0x527)+_0x1949db(0xaa5)+'5);'),'color'+':#f7e'+'ef5;b'+_0x1949db(0xdae)+_0x1949db(0x74e)+'us:6p'+_0x1949db(0xa28)+_0x1949db(0x358)+_0x1949db(0x201)+'px;cu'+_0x1949db(0xaef)+'point'+_0x1949db(0x7d7)+'nt:in'+'herit'+_0x1949db(0x857)+'/butt'+'on>')+(_0x1949db(0xcd4)+'>'),'<div\x20'+'data-'+'a=\x22st'+_0x1949db(0xd71)+_0x1949db(0x66b)+_0x1949db(0xa29)+'#8d7a'+'99;ma'+_0x1949db(0x34f)+'th:29'+_0x1949db(0x70e)+'></di'+'v>')+_0x2fd94f[_0x1949db(0x7fb)],_0x5e7eb3[_0x1949db(0x315)+_0x1949db(0xe0f)]=_0x56032c;var _0x20b050=function(_0xf7d437){var _0x2a095f=_0x1949db;return _0x5e7eb3[_0x2a095f(0x320)+_0x2a095f(0x36e)+_0x2a095f(0x4fd)](_0x2fd94f[_0x2a095f(0xe29)](_0x2fd94f[_0x2a095f(0x68f)](_0x2fd94f['YFsDd'],_0xf7d437),'\x22]'));},_0x3e9cb4=_0x2fd94f['AXVKX'](_0x20b050,'st'),_0x187a59=_0x2fd94f[_0x1949db(0x69a)](_0x20b050,_0x2fd94f['jvBpP']),_0x1edfb4=_0x2fd94f[_0x1949db(0x846)](_0x20b050,'sp'),_0x48bc2a=_0x2fd94f['gfKvP'](_0x20b050,'fx'),_0x3d37a2=_0x2fd94f['kOqRI'](_0x20b050,'fv'),_0xfb268c=_0x2fd94f[_0x1949db(0x59d)](_0x20b050,_0x2fd94f['GJKcI']);if(_0x1edfb4)_0x1edfb4[_0x1949db(0x9bb)+'ck']=function(){var _0x27af7a=_0x1949db;_0x5cfd1b[_0x27af7a(0xcf7)](_0x453f04,!_0x30cca2['on'],_0x30cca2['facto'+'r']);};if(_0x48bc2a)_0x48bc2a[_0x1949db(0x21a)+'ut']=function(){var _0x1afedb=_0x1949db;_0x453f04(_0x30cca2['on'],_0x2fd94f[_0x1afedb(0x846)](parseFloat,_0x48bc2a[_0x1afedb(0x244)])||0x1e7*-0x1+0x1391+-0x19b*0xb);};if(_0x2fd94f[_0x1949db(0xe2a)](_0x20b050,_0x1949db(0xc92)))_0x2fd94f[_0x1949db(0x3db)](_0x20b050,'snap')[_0x1949db(0x9bb)+'ck']=function(){var _0x827124=_0x1949db;_0xb64e92(_0x827124(0x1be)+_0x827124(0xcc9));};var _0xf81d04=_0x20b050(_0x1949db(0xe05));if(_0xf81d04)_0xf81d04[_0x1949db(0x9bb)+'ck']=function(){var _0x451392=_0x1949db;if(!_0x23df0c['on'])_0x2fd94f['OqZCU'](_0x4dfd03,!![],![]);else{if(_0x23df0c['boxes'])_0x2fd94f['ErMof'](_0x4dfd03,![],![]);else{if(_0x59c957())_0x4dfd03(!![],!![]);else _0x2fd94f[_0x451392(0x242)](_0x4dfd03,![],![]);}}};if(_0x2fd94f['BBEjG'](_0x20b050,'fold'))_0x2fd94f[_0x1949db(0x7b7)](_0x20b050,'fold')['oncli'+'ck']=function(){var _0x5d42cd=_0x1949db;if(!_0xfb268c)return;var _0x2e2510=_0xfb268c['style'][_0x5d42cd(0x2b3)+'ay']==='none';_0xfb268c[_0x5d42cd(0x76c)][_0x5d42cd(0x2b3)+'ay']=_0x2e2510?'':_0x5cfd1b['exokj'],_0x20b050(_0x5d42cd(0xc67))[_0x5d42cd(0xe45)+'onten'+'t']=_0x2e2510?'-':'+';};return document[_0x1949db(0x58c)][_0x1949db(0xd7e)+_0x1949db(0xcc3)+'d'](_0x5e7eb3),_0x2c7415={'el':_0x5e7eb3,'st':_0x3e9cb4,'st2':_0x187a59,'sp':_0x1edfb4,'fx':_0x48bc2a,'fv':_0x3d37a2,'esp':_0xf81d04},_0x2c7415;}catch(_0x5536ef){return console['warn'](_0x2fd94f[_0x1949db(0x5c4)],_0x2fd94f['lKYyi']('color'+':',_0x22ca32),_0x5536ef),null;}}else _0x4be6e9=_0x3a0dd7[_0x214be3]['last'],_0x317690[_0x1949db(0x655)+'e']=_0x1949db(0x770)+'r',_0x388581=_0x1dbb30?_0x17245a[_0x3d596][_0x1949db(0xe1f)]:_0x5cfd1b[_0x1949db(0xcf7)](_0x23421d,_0x5cfd1b['oFBDl'](_0x494542,_0x216ac9),_0x5cfd1b[_0x1949db(0x648)]);}function _0x59c957(){var _0x5566cf=_0x3f0b99;if(_0x2fd94f['qYEbz'](_0x5566cf(0x49f),_0x2fd94f[_0x5566cf(0xaaa)]))try{if(_0x5566cf(0xa5c)===_0x2fd94f['bvDmP'])typeof _0x47dce6===_0x2fd94f['hRKDt']?_0x19c421=_0x59721d(_0x5f3817):_0x254270=_0x2fd94f[_0x5566cf(0x874)](_0x454de9,_0xd53451,_0x67c191||0x214f+-0xef4+-0x1229);else{var _0x155efe=_0x2fd94f['gBdmc'](_0x1dccf0);if(_0x155efe[_0x5566cf(0x2d8)])return!![];var _0x38cdcf=_0x171da1();return!!(_0x38cdcf&&_0x437a6e['ident'+_0x5566cf(0xb51)]);}}catch(_0x13d1bb){return![];}else return _0x39c5d9[_0x5566cf(0x6b6)]===_0x2bf081;}function _0x31a9f9(){var _0x211dbd=_0x3f0b99;try{if(_0x2fd94f['jphCo']==='ojdkN'){var _0x42e463=(_0x211dbd(0x72c)+_0x211dbd(0xe48)+_0x211dbd(0x6e7))[_0x211dbd(0xae3)]('|'),_0x40f979=0x125*-0xc+0x1a3*0x1+0xc19*0x1;while(!![]){switch(_0x42e463[_0x40f979++]){case'0':_0x397843['style'][_0x211dbd(0xb59)+_0x211dbd(0x632)]=_0x23df0c['on']?_0x22ca32:_0x2fd94f[_0x211dbd(0x991)];continue;case'1':_0x397843[_0x211dbd(0x76c)]['color']=_0x23df0c['on']?_0x211dbd(0xa0d)+'1b':_0x2fd94f[_0x211dbd(0xc20)];continue;case'2':if(_0x28e45a!==_0x397843['textC'+_0x211dbd(0xb09)+'t'])_0x397843[_0x211dbd(0xe45)+_0x211dbd(0xb09)+'t']=_0x28e45a;continue;case'3':if(!_0x397843)return;continue;case'4':var _0x28e45a=!_0x23df0c['on']?'ESP\x20o'+'ff':_0x23df0c[_0x211dbd(0x664)]?'ESP\x20b'+_0x211dbd(0x6fe):_0x2fd94f['GToyP'];continue;case'5':var _0x397843=_0x2c7415&&_0x2c7415['esp'];continue;case'6':if(_0x23df0c[_0x211dbd(0x664)]&&!_0x59c957())_0x23df0c[_0x211dbd(0x664)]=![];continue;}break;}}else{var _0xc79c64=_0x2fd94f['tKgSH'](_0x3a0256,'v2')?0x2019*-0x1+-0x310*-0x8+0x79b:_0x33ce72==='v3'?-0x1*-0x605+-0x869*0x3+0x1*0x1339:0xeb9*0x1+0x59*0x6a+-0x338f,_0x29c2fe=_0x267928(_0x182d50[_0x211dbd(0x6e1)],_0x10866c,_0xc79c64);_0x29c2fe&&(_0x2aa215['xyz']=_0x29c2fe,_0x595715['v']=_0x29c2fe[0x91b+0x3e*-0x8d+0x190b]);}}catch(_0xd1ff6a){}}function _0x4dfd03(_0x24f7ee,_0x318796){var _0x5c9072=_0x3f0b99;_0x23df0c['on']=!!_0x24f7ee,_0x23df0c[_0x5c9072(0x664)]=!!_0x318796,_0x2fd94f[_0x5c9072(0x98d)](_0x31a9f9);try{var _0xde48c1=_0x3aa50a();if(_0xde48c1&&_0xde48c1['el'])_0xde48c1['el']['style'][_0x5c9072(0x2b3)+'ay']=_0x23df0c['on']?'':'none';var _0x280eb9=_0x182f73;if(_0x280eb9&&_0x280eb9['cv'])_0x280eb9['cv'][_0x5c9072(0x76c)]['displ'+'ay']=_0x23df0c['on']&&_0x23df0c['boxes']?'':_0x5c9072(0x761);}catch(_0x295e97){}}var _0x3b8f70=0x13a1+0x3*-0x85f+0x2*0x2bf;function _0x453f04(_0x24757d,_0x3f2057){var _0x597b7b=_0x3f0b99,_0x458078=_0x30cca2['on'];_0x30cca2['on']=!!_0x24757d;_0x30cca2['on']&&!_0x458078&&(_0x2fd94f[_0x597b7b(0x628)](_0x3f2057,undefined)||_0x3f2057===null||Number(_0x3f2057)===-0x2*-0x295+0x21d*-0x5+0x4*0x15a)&&(_0x3f2057=_0x3b8f70);_0x30cca2['facto'+'r']=Math[_0x597b7b(0xdfd)](_0x30cca2['max'],Math['max'](_0x30cca2[_0x597b7b(0xdfd)],Number(_0x3f2057)||-0x195*-0x3+0x4b9*-0x3+0x96d));if(!_0x30cca2['on'])_0x37909f={};var _0x2ee300=_0x3c48ac();if(_0x2ee300){if(_0x2fd94f[_0x597b7b(0xd45)]('ibwRk',_0x597b7b(0x265))){_0x2ee300['sp']&&(_0x2ee300['sp']['textC'+_0x597b7b(0xb09)+'t']=_0x30cca2['on']?_0x597b7b(0x911)+'\x20ON':_0x2fd94f['HDTgf'],_0x2ee300['sp']['style']['backg'+_0x597b7b(0x632)]=_0x30cca2['on']?_0x22ca32:'trans'+'paren'+'t',_0x2ee300['sp'][_0x597b7b(0x76c)][_0x597b7b(0x621)]=_0x30cca2['on']?_0x597b7b(0xa0d)+'1b':_0x2fd94f['ELInh']);if(_0x2ee300['fx'])_0x2ee300['fx'][_0x597b7b(0x244)]=_0x2fd94f['GaPey'](String,_0x30cca2['facto'+'r']);if(_0x2ee300['fv'])_0x2ee300['fv']['textC'+_0x597b7b(0xb09)+'t']=_0x2fd94f[_0x597b7b(0x351)](_0x30cca2['facto'+'r'][_0x597b7b(0x299)+'ed'](-0x1*0x261a+0x1*0x12d+0x24ee),'x');}else return _0x4083b2['ident'+_0x597b7b(0xb51)]=![],_0x42fceb[_0x597b7b(0xbec)]=_0x597b7b(0x8b8)+_0x597b7b(0x817)+'ok\x20ye'+'t',null;}}function _0x172b91(_0x33bbef){var _0x5ec19c=_0x3f0b99,_0x7a0551={'npDBm':function(_0x4139d3){var _0x3fed7b=_0x59a2;return _0x2fd94f[_0x3fed7b(0xc32)](_0x4139d3);}};if(_0x2fd94f['cssTI'](_0x5ec19c(0x8d4),_0x5ec19c(0x8d4)))return null;else{var _0x52d70c=_0x2fd94f['nRSMO'](_0x3c48ac);if(!_0x52d70c||!_0x52d70c['st'])return;try{if(_0x5ec19c(0xba0)===_0x2fd94f[_0x5ec19c(0x9c0)])try{if(!_0x247b5d['petal'])return;var _0x28c447=_0x7a0551['npDBm'](_0x1ebaab);_0x354ee3['petal'][_0x5ec19c(0x76c)]['opaci'+'ty']=_0x5da6a2['open']?'1':_0x28c447?'.8':_0x5ec19c(0x8c4),_0x356a17['petal'][_0x5ec19c(0xd8e)]=_0x28c447?_0x5ec19c(0x9be)+'a\x20Ski'+_0x5ec19c(0x71a)+_0x5ec19c(0xbe2)+_0x5ec19c(0xbc8):_0x5ec19c(0x9be)+_0x5ec19c(0x978)+_0x5ec19c(0x71a)+'z\x20-\x20w'+'aitin'+_0x5ec19c(0x53f)+'\x20the\x20'+_0x5ec19c(0x651)+'(Inse'+_0x5ec19c(0xb33);}catch(_0x4195db){}else{if(!_0x297343()&&!_0x7f8463){if(_0x52d70c['el'])_0x52d70c['el'][_0x5ec19c(0x76c)][_0x5ec19c(0x2b3)+'ay']=_0x5ec19c(0x761);return;}if(_0x52d70c['el'])_0x52d70c['el'][_0x5ec19c(0x76c)]['displ'+'ay']='';var _0x11a5e7=Object['keys'](_0x33bbef&&_0x33bbef[_0x5ec19c(0x8e8)+_0x5ec19c(0x581)]||{})[_0x5ec19c(0x35a)+'h'],_0x22a3c1=_0x33bbef&&_0x33bbef[_0x5ec19c(0xe05)]||null,_0x3e7be5=_0x22a3c1?_0x22a3c1['enemy'+_0x5ec19c(0x7a0)]||0x1ad1*0x1+-0xcd*-0x29+-0x1dd3*0x2:0x1f23*0x1+0x46e+-0x2391,_0x596514=_0x22a3c1?_0x22a3c1[_0x5ec19c(0xae0)+_0x5ec19c(0x8a4)]||0x1d4e+0x1d67+-0x863*0x7:-0x1*0x1c85+-0x10e8+-0x191*-0x1d,_0x430ab4=_0x25a62b?(_0x25a62b['buffe'+'r']['byteL'+_0x5ec19c(0xa59)]/(-0x1e*-0x62bf+0x5*0x2d3d7+-0x1142d*0x9))[_0x5ec19c(0x299)+'ed'](0x1f*-0x4c+-0x144+0xa78)+'MB':'no-me'+'m',_0x189efb=_0x2fd94f[_0x5ec19c(0x99c)](_0x2fd94f[_0x5ec19c(0xcc0)](_0x2fd94f['ScZNY'](_0x2fd94f[_0x5ec19c(0x2cc)](_0x2fd94f[_0x5ec19c(0xb6a)]('v'+(_0x33bbef&&_0x33bbef[_0x5ec19c(0x45d)+'on']||_0x25c943),_0x5ec19c(0x278)+_0x5ec19c(0x3d6))+(_0x33bbef&&_0x33bbef[_0x5ec19c(0x8b9)+'Appli'+'ed']||0x1dcf+0xa22+-0x27f1)+'/'+(_0x33bbef&&_0x33bbef[_0x5ec19c(0x8b9)+'Total']||0x12c2*-0x2+0x25ac*0x1+-0xa*0x4),_0x5ec19c(0x9eb)+'s\x20'),_0x11a5e7),_0x5ec19c(0xb05)+'\x20')+_0x430ab4,_0x2fd94f[_0x5ec19c(0x943)])+_0x578a3b;_0x52d70c['st']['textC'+_0x5ec19c(0xb09)+'t']=_0x189efb;var _0x501390=_0x52d70c['st2'];_0x501390&&(_0x501390['textC'+'onten'+'t']=_0x2fd94f[_0x5ec19c(0x897)](_0x3e7be5,0x1aa8+0x74*-0xf+-0x13dc)?_0x2fd94f['Oqvia'](_0x2fd94f[_0x5ec19c(0x199)]+_0x3e7be5,_0x596514?_0x2fd94f[_0x5ec19c(0xdbb)](_0x2fd94f['JdMrH'],_0x596514)+_0x5ec19c(0x4a0):'')+(_0x22a3c1&&_0x22a3c1[_0x5ec19c(0x3a3)+'a']?_0x5ec19c(0xc91)+'\x20'+_0x22a3c1[_0x5ec19c(0x3a3)+_0x5ec19c(0xd55)]:'\x20\x20cam'+'\x20-'):_0x2fd94f[_0x5ec19c(0x653)]+(_0x22a3c1&&_0x22a3c1['camer'+'a']?_0x22a3c1[_0x5ec19c(0x3a3)+_0x5ec19c(0xd55)]:'-'),_0x501390[_0x5ec19c(0x76c)][_0x5ec19c(0x621)]=_0x2fd94f['EmAju'](_0x3e7be5,0x39b*-0x1+0x53*0x43+0x60a*-0x3)?_0x2fd94f[_0x5ec19c(0xc31)]:_0x5ec19c(0x7d9)+'99');}}catch(_0x181ff2){}}}window[_0x3f0b99(0x70b)+'entLi'+_0x3f0b99(0x8e0)+'r'](_0x2fd94f[_0x3f0b99(0x5b8)],function(_0x44c066){var _0x3f830c=_0x3f0b99,_0x5de181={'YsQHc':function(_0x4cac24,_0x1a3f87){return _0x4cac24-_0x1a3f87;},'bWhkY':function(_0xa9b1b2,_0xb6f035){return _0x2fd94f['uWJTh'](_0xa9b1b2,_0xb6f035);},'AjqBX':_0x2fd94f[_0x3f830c(0xa6e)],'BHqDl':_0x3f830c(0x287)+_0x3f830c(0xe3b)+'pt','OkeMD':_0x2fd94f[_0x3f830c(0x8d3)],'sFYgj':function(_0x412244,_0x950b0d){return _0x412244===_0x950b0d;},'wzeUD':_0x3f830c(0x3d8)+'ion','xNgVP':function(_0x692d4c,_0x3132aa){return _0x692d4c===_0x3132aa;},'TzIMC':function(_0x1bc7e5,_0x2dfe5d){return _0x1bc7e5+_0x2dfe5d;},'TooqR':function(_0x3c0759,_0x1852db){return _0x3c0759*_0x1852db;},'eFOfX':function(_0x1f780b,_0x22840a){return _0x2fd94f['PVCMm'](_0x1f780b,_0x22840a);},'ANRvB':function(_0x111dc,_0x42946d){return _0x111dc/_0x42946d;},'Kypgr':function(_0x2ea856,_0x99e9d7){return _0x2ea856*_0x99e9d7;},'TFrZe':function(_0x31cb99,_0x135887){return _0x31cb99*_0x135887;}};if(_0x2fd94f['JJpOD']!==_0x2fd94f[_0x3f830c(0x7bc)]){if(!_0x44c066)return;try{if(_0x2fd94f['qYEbz'](_0x2fd94f[_0x3f830c(0x4b8)],_0x2fd94f[_0x3f830c(0x4b8)]))return _0x238851[_0x3f830c(0xd22)](_0x5de181['YsQHc'](_0x15a591,_0x4bc255))<=_0x4404c3[_0x3f830c(0x81d)](0xe+-0xd6f*-0x1+-0x6be*0x2,_0x5de181[_0x3f830c(0x9df)](_0x12fed4['abs'](_0x283258),0x169e+0x1b72+-0x3210+0.6));else{if(_0x44c066[_0x3f830c(0x2ea)]==='F9'){_0x44c066[_0x3f830c(0x515)+_0x3f830c(0xcff)+_0x3f830c(0xe59)](),_0xb64e92(_0x2fd94f[_0x3f830c(0x30e)]);return;}if(_0x44c066['code']==='F7'){if(_0x2fd94f[_0x3f830c(0xc74)](_0x3f830c(0x4c1),'ZIucf')){_0x44c066[_0x3f830c(0x515)+'ntDef'+_0x3f830c(0xe59)](),_0x2fd94f[_0x3f830c(0x706)](_0x453f04,!_0x30cca2['on'],_0x30cca2['facto'+'r']);return;}else{var _0x1d5757=_0x1b1a79[_0x3f830c(0xae3)]('+');_0x30d8e8=_0x1d9a16(_0x11252d,_0x1d5757[-0x1e*-0xb0+-0x6f0+-0x8*0x1b6]['index'+'Of'](_0x5de181[_0x3f830c(0x7dc)])===0x1df5*-0x1+-0xef*-0xd+0x11d2?_0x5de181[_0x3f830c(0xcb0)]:_0x5de181[_0x3f830c(0x324)],_0x20aa25(_0x1d5757[-0x1c6d+0x12c0+0x9ae],-0x16be+-0x1445+0x2b13));}}if(_0x2fd94f['jfHSW'](_0x44c066['code'],'F8')){if(_0x2fd94f[_0x3f830c(0xb0c)](_0x3f830c(0xd3f),_0x3f830c(0xd3f))){if(_0x1c4f3a===_0x27af5a||_0x56c870===null)return _0x1d364b;if(_0x5de181[_0x3f830c(0xc4d)](typeof _0x44b2db['val'],_0x5de181[_0x3f830c(0x5f2)]))try{return _0x34c00a[_0x3f830c(0xd0a)]();}catch(_0x2b8814){}if(_0x5de181[_0x3f830c(0x82a)](typeof _0x1542ac,'objec'+'t'))return _0x585efc;return _0x52d96;}else{_0x44c066['preve'+_0x3f830c(0xcff)+'ault'](),_0x2fd94f[_0x3f830c(0x3a1)](_0x453f04,_0x30cca2['on'],_0x2fd94f[_0x3f830c(0x5f8)](_0x30cca2['facto'+'r'],-0x2416+0xac1+-0x511*-0x5+0.5));return;}}if(_0x2fd94f[_0x3f830c(0xab8)](_0x44c066['code'],'F6')){if(_0x2fd94f[_0x3f830c(0x33b)]==='cqqXA'){_0x44c066['preve'+'ntDef'+'ault'](),_0x2fd94f[_0x3f830c(0x255)](_0x453f04,_0x30cca2['on'],_0x30cca2[_0x3f830c(0x891)+'r']-(-0x17*0x1e+-0x65*-0xe+0x16a*-0x2+0.5));return;}else{var _0x567a35=_0x401f58[_0x3f830c(0x2d8)][_0x3f830c(0xa39)];if(_0x381ee3[_0x3f830c(0xd22)](_0x567a35[0x73*0x37+0x1f*-0x4f+-0x307*0x5])<-0x1*0x554+0x766+-0x6a*0x5+0.01){var _0x1cca84=('2|1|0'+_0x3f830c(0xdd4))[_0x3f830c(0xae3)]('|'),_0x53332b=-0x24bd+-0x13dc*-0x1+0x95*0x1d;while(!![]){switch(_0x1cca84[_0x53332b++]){case'0':var _0x10a799=[_0x4ae84e[_0x3f830c(0xdd9)][0x7ff+0x70f+-0xf0e]+_0x567a35[-0x1401+-0x1ee*0xb+0x293b]*_0x229286,_0x5de181['TzIMC'](_0xd53ee0['pos'][0x1aba+-0x8*0x4be+0xb37]+_0x5de181[_0x3f830c(0x6e3)](_0x567a35[-0xe2*-0x5+0xae1+0x2*-0x7a5],_0x229286),_0x274bba),_0x4423da[_0x3f830c(0xdd9)][-0x29*0xd+-0x18a3+-0x16*-0x137]+_0x5de181[_0x3f830c(0x9df)](_0x567a35[-0x1719+-0xa69+0x2184],_0x229286)];continue;case'1':var _0x229286=-0x4c*0x50+0x2b*0x5+0x16f3,_0x274bba=0x7*0x91+0x108*0x1c+-0x20d6;continue;case'2':var _0x5818b4=_0x1a44d2[_0x3f830c(0x21f)](_0x5de181[_0x3f830c(0x424)](_0x5de181[_0x3f830c(0xc28)](_0x3dd6c0[_0x3f830c(0xc71)]*_0x4665d3['PI'],0x1e0+0x23fa+-0x2526),0x900+0xf91+-0x188f*0x1));continue;case'3':var _0x2f5d8b=_0x1698fe(_0x3198ba[_0x3f830c(0xdd9)],_0x10a799,_0xd65af3,_0x3a06ca[_0x3f830c(0xc14)+'s']['h']);continue;case'4':if(_0x2f5d8b){var _0x35ce1a=(0x10a2+0x9e*0x25+-0x2778+0.5-_0x2f5d8b['y']/_0x32c1ed['canva'+'s']['h'])*(0x512*0x2+0x45e*0x2+0x64a*-0x3),_0x407206=_0x274bba/_0x229286/_0x5818b4;_0x134dda['verti'+'cal']={'got':_0x5d04e5['round'](_0x35ce1a*(0x22ff+-0x22f3+0x26*0x1a))/(-0x1472+0x1*0x869+0xff1),'want':_0x2fb2a7[_0x3f830c(0x632)](_0x5de181[_0x3f830c(0x860)](_0x407206,0x7c8+0x2af+0x1*-0x68f))/(-0x2*-0xef+-0x5*0x581+0x1d8f),'off':_0x425bce[_0x3f830c(0x632)](_0x5de181[_0x3f830c(0x710)](_0x5de181[_0x3f830c(0xc96)](_0x35ce1a,_0x407206),0x185e*0x1+0x1*-0xc62+0x40a*-0x2))/(0x1*0x1b85+0x1485+-0x2c22)};}continue;}break;}}}}if(_0x2fd94f[_0x3f830c(0xd17)](_0x44c066['code'],_0x3f830c(0xe0b)+'t')){_0x44c066['preve'+_0x3f830c(0xcff)+'ault'](),_0x2fd94f[_0x3f830c(0xe2e)](_0x1546e1,!_0x58443a[_0x3f830c(0x65a)]);return;}if(_0x2fd94f[_0x3f830c(0x4cb)](_0x44c066['code'],_0x2fd94f[_0x3f830c(0x2a3)])){_0x44c066[_0x3f830c(0x515)+'ntDef'+_0x3f830c(0xe59)](),_0xabaa41[_0x3f830c(0xc71)]=Math[_0x3f830c(0xdfd)](0xe87+-0xeef+0xf4,_0x2fd94f['GqkYs'](_0xabaa41['fov'],-0x9*-0x1c1+-0x10d*-0x1d+-0x10*0x2e4)),_0x2fd94f[_0x3f830c(0x81b)](_0x53d9a8);return;}if(_0x44c066['code']===_0x3f830c(0x38f)+_0x3f830c(0x8bb)+'t'){_0x44c066['preve'+'ntDef'+_0x3f830c(0xe59)](),_0xabaa41['fov']=Math[_0x3f830c(0x81d)](0x7f*0x2+0x491*0x1+-0x7*0xc7,_0x2fd94f['sizJC'](_0xabaa41['fov'],-0x1f5d+0xf32+0x1*0x102d)),_0x53d9a8();return;}}}catch(_0x244b59){}}else{var _0x5529bc=_0x2fd94f[_0x3f830c(0xa69)](_0x37c7da);return _0x5529bc&&_0x5529bc['feet']?_0x5529bc[_0x3f830c(0x364)][0x339+-0x1b6e*-0x1+-0x1ea6]:null;}},!![]);var _0x23df0c={'on':!![],'span':0x50,'boxes':![]};function _0x23e849(){var _0x1ea85d=_0x3f0b99;if(_0x1ea85d(0xabe)===_0x2fd94f[_0x1ea85d(0x3e8)]){var _0x40b84a=_0x66b4c0[_0x1ea85d(0x226)+'nNetw'+_0x1ea85d(0xa56)+'nc']||{},_0x3604c3=Object[_0x1ea85d(0x859)](_0x40b84a);for(var _0x420999=-0x2322+-0xba8+-0xe2*-0x35;_0x420999<_0x3604c3['lengt'+'h'];_0x420999++){if(_0x1ea85d(0xda3)!=='uLKyX'){var _0x311df2=_0x40b84a[_0x3604c3[_0x420999]][_0x1ea85d(0x6e1)],_0x34be1d=_0x55b637(_0x2fd94f[_0x1ea85d(0x79a)](_0x311df2,-0x121f*0x1+0xc52+-0x3*-0x1ff),'u32');if(!_0x34be1d)continue;var _0x4770a9=_0x2404cb[_0x1ea85d(0xda0)+'Look']||[],_0x5f1e01={'mouseLook':_0x2fd94f['uwgQE']('0x',_0x2fd94f[_0x1ea85d(0xbcf)](_0x34be1d,0x3*0x5e3+0x9b6+-0x27d*0xb)[_0x1ea85d(0x7e7)+_0x1ea85d(0xa00)](-0x13ce+0xf73+0xd*0x57)),'floats':{},'camera':null,'vec2':null};for(var _0x5db0e3=-0x777*0x1+-0x26c4+0x2e3b;_0x5db0e3<_0x4770a9['lengt'+'h'];_0x5db0e3++){if(_0x2fd94f[_0x1ea85d(0x6a5)](_0x4770a9[_0x5db0e3][-0x1*0x19f7+-0x234f+-0x15*-0x2eb],'f32'))continue;_0x5f1e01['float'+'s']['0x'+_0x4770a9[_0x5db0e3][-0xe27+0x21+0xe06]['toStr'+'ing'](-0x7b3+0x16e1+-0xf1e)]=_0x55b637(_0x34be1d+_0x4770a9[_0x5db0e3][-0x5*0x12e+0x4af+0x137],_0x2fd94f[_0x1ea85d(0x51b)]);}var _0x35f763=_0x55b637(_0x34be1d+(0x13a*-0x7+0x17d2+-0xf10),_0x2fd94f[_0x1ea85d(0xbff)]);if(_0x35f763)_0x5f1e01[_0x1ea85d(0x3a3)+'a']=_0x2fd94f[_0x1ea85d(0x7aa)]('0x',_0x2fd94f['Czbhv'](_0x35f763,-0x1f91+-0x95b+0x28ec)[_0x1ea85d(0x7e7)+'ing'](0xb61*-0x2+-0xd*0x237+0x339d));var _0x439169=_0x284134(_0x34be1d,-0x167*0x17+0x6*-0x47c+0x3b71,-0x15*-0xd6+-0x22*0x29+-0xc1a);if(_0x439169)_0x5f1e01[_0x1ea85d(0x9c8)]=_0x439169;return _0x5f1e01;}else _0x2fd94f[_0x1ea85d(0x98d)](_0x58e56e);}return null;}else{var _0x46390f=_0x52e0b5[_0x1ea85d(0xd22)](_0x750605[_0x4fddc1]['v'][0xa1c+-0x176*0xe+-0x373*-0x3]-_0x2927ec);if(_0x46390f<_0x50e19f)_0x852fa4=_0x46390f;}}var _0x2404ff=_0x3f0b99(0x566)+_0x3f0b99(0x2e6)+'fov',_0xabaa41={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{if('TgrBC'!==_0x2fd94f['ScYsc']){var _0x2c65a2=_0x24d1fd();return{'ok':_0x2c65a2['ok'],'source':_0x2c65a2[_0x3f0b99(0x655)+'e'],'why':_0x2c65a2['why'],'tried':_0x2c65a2['tried'],'camPtr':'0x'+_0x2c65a2[_0x3f0b99(0x640)+'r']['toStr'+'ing'](0x8*-0x150+-0x2*-0xa21+-0x9b2),'tfPtr':_0x2fd94f[_0x3f0b99(0x2b7)]('0x',_0x2c65a2[_0x3f0b99(0x3bb)][_0x3f0b99(0x7e7)+'ing'](0xcc5*0x2+0x24fe+-0x3e78)),'fov':_0x2c65a2[_0x3f0b99(0xc71)],'quat':_0x2c65a2[_0x3f0b99(0x74f)],'pos':_0x2c65a2[_0x3f0b99(0xdd9)],'basis':_0x2c65a2[_0x3f0b99(0x2d8)],'errors':_0x2c65a2['error'+'s']['slice'](-0x1*-0x841+-0xc8f*-0x3+-0x1*0x2dee,0x9a9+0x5eb+-0xf90)};}else{var _0x3216b9=localStorage[_0x3f0b99(0x461)+'em'](_0x2404ff);if(_0x3216b9)_0xabaa41[_0x3f0b99(0xc71)]=Math['min'](0xac*-0x10+0x2a8+0x8a4,Math[_0x3f0b99(0x81d)](0x3f7+0x21e8+0x25c1*-0x1,_0x2fd94f['AXVKX'](parseFloat,_0x3216b9)||-0x68d+0x66*0x55+0x9*-0x2ff));}}catch(_0x511692){}function _0x53d9a8(){var _0x343b18=_0x3f0b99;try{localStorage[_0x343b18(0xd5b)+'em'](_0x2404ff,String(_0xabaa41['fov']));}catch(_0x1ad60d){}}var _0x2550aa=_0x2fd94f[_0x3f0b99(0x43a)],_0x2a3afb=![];try{if(_0x2fd94f['MRNTF'](localStorage[_0x3f0b99(0x461)+'em'](_0x2550aa),null)){if(_0x3f0b99(0xd7f)!==_0x3f0b99(0x725))localStorage['remov'+_0x3f0b99(0x8a1)](_0x2550aa),_0x2a3afb=!![];else{if(_0x4313c4['lg'])_0x484ce8['lg']['textC'+'onten'+'t']='';return;}}}catch(_0x5124ad){}var _0x18bf7b=0x8*0x314+0x1a*-0x10d+0x2da,_0x189e1a=-0x6e+-0x18*-0x7f+-0x246*0x5,_0x18bf7b=-0x2c*-0xce+-0x2b*-0xa3+-0x3ea1*0x1,_0x189e1a=-0x5b6+0x69+0x569,_0xa9e5f0=0x1445+0x387+0x36*-0x70,_0x254c12={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0x5ab206(_0xf49c20){var _0x57e941=_0x3f0b99;if(_0x2fd94f[_0x57e941(0xd17)](_0xf49c20,undefined)||_0xf49c20===null)return undefined;if(typeof _0xf49c20[_0x57e941(0xd0a)]===_0x57e941(0x3d8)+'ion')try{if(_0x2fd94f['tKgSH'](_0x2fd94f[_0x57e941(0xa84)],_0x57e941(0x8c6))){var _0x26aa2e=_0x2f6eeb['getIt'+'em'](_0x380837);if(!_0x26aa2e)return;var _0x5ae275=_0x406a3d[_0x57e941(0x25a)](_0x26aa2e);if(_0x5ae275&&typeof _0x5ae275['x']==='numbe'+'r'&&typeof _0x5ae275['y']===_0x57e941(0xa25)+'r')_0x13603c['pos']=_0x5ae275;}else return _0xf49c20['val']();}catch(_0x44edba){}if(_0x2fd94f['DbnjM'](typeof _0xf49c20,'objec'+'t'))return undefined;return _0xf49c20;}function _0x397d46(_0x3edafe,_0x4af6ab,_0x249154){var _0x4efafc=_0x3f0b99;try{if(_0x2fd94f[_0x4efafc(0xe79)]==='qsvjp'){if(_0x2ed863&&typeof _0x5eee55['then']===_0x4efafc(0x3d8)+'ion')_0x1372ed['then'](_0x4c7819,function(){});else _0x4a9e28(_0x3a8690);}else{var _0x25d330=window[_0x4efafc(0x518)+'WebMo'+_0x4efafc(0x1ec)]&&window[_0x4efafc(0x518)+_0x4efafc(0x4e6)+_0x4efafc(0x1ec)][_0x4efafc(0xb7c)+'me'],_0x565ac4=_0x1e3fad||_0x25d330&&_0x25d330['plugi'+'ns']&&_0x25d330['plugi'+'ns'][_0x25d330['plugi'+'ns'][_0x4efafc(0x35a)+'h']-(-0x15b*0x1a+0x1e14+0x52b)];if(!_0x565ac4||typeof _0x565ac4[_0x4efafc(0x711)]!=='funct'+'ion')return _0x254c12[_0x4efafc(0xa73)+'s']['push'](_0x2fd94f[_0x4efafc(0x316)]),undefined;return _0x5ab206(_0x565ac4[_0x4efafc(0x711)](_0x3edafe,_0x4af6ab,_0x249154||[]));}}catch(_0x40d940){if(_0x2fd94f[_0x4efafc(0x18f)](_0x254c12[_0x4efafc(0xa73)+'s'][_0x4efafc(0x35a)+'h'],0x8*0x25f+-0x18f*0xe+0x20*0x17))_0x254c12['error'+'s'][_0x4efafc(0x1ea)](_0x2fd94f['Yyhdv'](_0x2fd94f['ScZNY'](_0x2fd94f['RDuAG'](_0x3edafe,'.'),_0x4af6ab)+':\x20',_0x2fd94f['gfKvP'](String,_0x40d940&&_0x40d940[_0x4efafc(0x437)+'ge']||_0x40d940)[_0x4efafc(0x257)](0xe90+0xc*0x291+-0x2d5c,-0x56a+0xecc*-0x1+0x1490)));return undefined;}}function _0x32a76b(){var _0x352230=_0x3f0b99;if(_0x2fd94f['btvmw']===_0x352230(0x272)){if(_0x254c12[_0x352230(0x1df)+'ch'])return _0x254c12[_0x352230(0x1df)+'ch'];try{var _0x5993df=window[_0x352230(0x518)+_0x352230(0x4e6)+_0x352230(0x1ec)]&&window[_0x352230(0x518)+'WebMo'+'dkit'][_0x352230(0xb7c)+'me'],_0x1aae2d=_0x1e3fad||_0x5993df&&_0x5993df[_0x352230(0x52e)+'ns']&&_0x5993df[_0x352230(0x52e)+'ns'][_0x5993df[_0x352230(0x52e)+'ns']['lengt'+'h']-(0x189f+-0x1*-0x85f+-0x20fd)];if(!_0x1aae2d||_0x2fd94f['wUExG'](typeof _0x1aae2d[_0x352230(0xd51)+'c'],_0x352230(0x3d8)+'ion')){if(_0x2fd94f[_0x352230(0xcd1)]('hzLSd','hzLSd'))return _0x254c12[_0x352230(0xa73)+'s']['push'](_0x352230(0x786)+_0x352230(0xb2e)+_0x352230(0xd51)+'c'),0xcdd*0x2+-0x1b*0x72+0x2*-0x6da;else _0x1a1a6b[_0x352230(0xa73)]=_0x23ce47(_0x3f7eee&&_0x38d4b5[_0x352230(0x437)+'ge']||_0xc9e44f);}var _0x50717d=_0x2fd94f[_0x352230(0x2db)](_0x5ab206,_0x1aae2d['mallo'+'c'](-0x1*-0xa9d+-0x1f47+0x14ca));if(typeof _0x50717d!==_0x2fd94f['VSdGn']||!_0x2fd94f[_0x352230(0x6eb)](_0x50717d,0xd68+0x1*-0x155+-0xb*0x119))return _0x254c12['error'+'s']['push'](_0x352230(0xd51)+_0x352230(0x1b3)+_0x352230(0xdcd)+'\x20'+_0x50717d),-0x1*-0x9eb+0x14*-0x59+-0xfd*0x3;_0x254c12[_0x352230(0x1df)+'ch']=_0x50717d;}catch(_0x4f4a15){if(_0x2fd94f[_0x352230(0x314)](_0x2fd94f['QVUgy'],_0x352230(0x5da))){if(_0x2fd94f[_0x352230(0xb86)](_0x254c12[_0x352230(0xa73)+'s'][_0x352230(0x35a)+'h'],0x16b1+-0x217e+0x11*0xa3))_0x254c12[_0x352230(0xa73)+'s']['push'](_0x2fd94f['baaYY'](_0x352230(0xd51)+'c:\x20',String(_0x4f4a15&&_0x4f4a15['messa'+'ge']||_0x4f4a15)['slice'](0x3*0x523+-0x243e+-0x14d5*-0x1,-0x164c+-0x2488+-0x6*-0x9dd)));return 0x1882+-0x15cb*-0x1+-0x2e4d;}else{var _0x464035=_0x5e05f3();if(_0x464035&&_0x464035['el'])_0x464035['el']['style']['displ'+'ay']=_0x4753a0['on']?'':_0x2fd94f[_0x352230(0xe08)];var _0x3c1a55=_0x48780b;if(_0x3c1a55&&_0x3c1a55['cv'])_0x3c1a55['cv']['style']['displ'+'ay']=_0x2d3dbc['on']&&_0x5421e4[_0x352230(0x664)]?'':_0x352230(0x761);}}return _0x254c12['scrat'+'ch'];}else _0x6b4aa(_0x220ec5);}function _0x4e7258(_0x44e57e){var _0x246686=_0x3f0b99,_0x3a85b4=_0x44e57e[0x11c7+-0x72d+-0xa9a],_0x48c15c=_0x44e57e[-0x1*0x25f7+0x2163+-0x495*-0x1],_0x2f31c=_0x44e57e[0x25d6*0x1+-0x25*0x57+-0x3*0x86b],_0x538c14=_0x44e57e[-0x562*-0x6+0x5*-0x641+0x34*-0x5],_0x226ef6=_0x3a85b4*_0x3a85b4,_0x780ca7=_0x2fd94f['usmTX'](_0x48c15c,_0x48c15c),_0x5c5aba=_0x2f31c*_0x2f31c,_0x59fedd=_0x3a85b4*_0x48c15c,_0x4f59e8=_0x3a85b4*_0x2f31c,_0x5ab1a9=_0x48c15c*_0x2f31c,_0x489680=_0x538c14*_0x3a85b4,_0x3ee303=_0x2fd94f[_0x246686(0x430)](_0x538c14,_0x48c15c),_0x1df86e=_0x538c14*_0x2f31c;return{'right':[-0x1a11+-0x5*-0x745+-0xa47-_0x2fd94f[_0x246686(0x652)](0x118b+-0x4*0x13d+0xc95*-0x1,_0x2fd94f[_0x246686(0x231)](_0x780ca7,_0x5c5aba)),(0x1*-0xbed+-0x20d2*0x1+0x2cc1)*(_0x59fedd+_0x1df86e),(-0x1cad+0x2*-0xef2+0x5*0xbb7)*_0x2fd94f['sizJC'](_0x4f59e8,_0x3ee303)],'up':[_0x2fd94f['dWiYB'](-0xd15+0x26ca+-0x19b3,_0x59fedd-_0x1df86e),_0x2fd94f[_0x246686(0x531)](0x1*0xbde+0x582+-0x115f,(0x16*0x1bd+0x40*-0x5e+0x1*-0xebc)*(_0x226ef6+_0x5c5aba)),(0x15a9+0x1f19+0x4*-0xd30)*(_0x5ab1a9+_0x489680)],'fwd':[_0x2fd94f['aRyqj'](0x7*-0x17+0x655+-0x5b2,_0x4f59e8+_0x3ee303),(-0x2520+0x8*0x330+0xba2)*(_0x5ab1a9-_0x489680),-0x2380+0x1d18+-0x223*-0x3-(-0x9b*0x7+0x4*-0x745+-0x1c1*-0x13)*(_0x226ef6+_0x780ca7)]};}var _0x4750f4=0x15*-0x16d+-0xae6+-0x9*-0x48d;function _0x16c9d6(_0xf612ff){var _0x2a29aa=_0x3f0b99;_0x254c12['ok']=![],_0x254c12['why']=_0xf612ff,_0x254c12[_0x2a29aa(0xd5a)+'s']++;if(_0x2fd94f['Nrfly'](_0x254c12['misse'+'s'],_0x4750f4))return _0x254c12[_0x2a29aa(0x74f)]=null,_0x254c12['basis']=null,_0x254c12[_0x2a29aa(0xdd9)]=null,_0x254c12;return _0x254c12[_0x2a29aa(0x540)]++,_0x254c12;}function _0x2d4e1c(){var _0x1e32e2=_0x3f0b99;_0x254c12[_0x1e32e2(0xd46)]++,_0x254c12[_0x1e32e2(0xd5a)+'s']=-0x1*-0x2165+-0x12ef+-0xe76;var _0x10f26d=_0x23e849(),_0x1e7420=_0x10f26d&&_0x10f26d['mouse'+'Look']?_0x2fd94f[_0x1e32e2(0xccb)](parseInt,_0x10f26d[_0x1e32e2(0x6f3)+'Look'],-0x253*0x8+-0x84*-0x23+0x1a*0x6):_0x528ba4;if(!_0x1e7420)return _0x2fd94f['UNJaT'](_0x16c9d6,_0x2fd94f[_0x1e32e2(0xa7e)]);if(_0x528ba4!==_0x1e7420)_0x528ba4=_0x1e7420;var _0x4815b4=_0x55b637(_0x2fd94f['boDsp'](_0x1e7420,_0xa9e5f0),_0x1e32e2(0x5df));if(typeof _0x4815b4!==_0x1e32e2(0xa25)+'r'||!_0x2fd94f['TGaGo'](_0x4815b4,0xf3d+-0xac1+-0x47c))return _0x2fd94f[_0x1e32e2(0xaf6)](_0x16c9d6,_0x2fd94f['KxPAf']);_0x254c12[_0x1e32e2(0x640)+'r']=_0x4815b4;var _0x5dde0a=_0x2fd94f[_0x1e32e2(0x612)](_0x397d46,_0x1e32e2(0x276)+'nent',_0x1e32e2(0xdcb)+_0x1e32e2(0xc8b)+'orm',[_0x4815b4]);if(typeof _0x5dde0a!==_0x2fd94f[_0x1e32e2(0xe34)]||!_0x2fd94f[_0x1e32e2(0x634)](_0x5dde0a,0x2*0x130e+0x1fe3+-0x21f*0x21))return _0x254c12[_0x1e32e2(0x3bb)]=0x7*0x21d+0x1*-0x15dc+-0x9*-0xc9,_0x16c9d6(_0x2fd94f[_0x1e32e2(0xde1)]+_0x5dde0a);_0x254c12['tfPtr']=_0x5dde0a;var _0xb39541=_0x2fd94f[_0x1e32e2(0x98d)](_0x32a76b);if(!_0xb39541)return _0x16c9d6(_0x1e32e2(0x4f4)+_0x1e32e2(0x4b4)+_0x1e32e2(0xb4c)+'er');var _0xa7d0d5=_0x2fd94f[_0x1e32e2(0x1c7)](_0x397d46,_0x1e32e2(0x29b)+'a',_0x1e32e2(0x8ea)+_0x1e32e2(0x920)+'fView',[_0x4815b4]);if(_0x2fd94f[_0x1e32e2(0x3fe)](typeof _0xa7d0d5,_0x1e32e2(0xa25)+'r')&&_0x2fd94f['LhCPa'](isFinite,_0xa7d0d5)&&_0xa7d0d5>0x22f4*0x1+-0x9d8+-0x191b&&_0x2fd94f[_0x1e32e2(0x4b2)](_0xa7d0d5,0x15*-0x104+0xfc2+-0x645*-0x1))_0x254c12['fov']=_0xa7d0d5;_0x397d46(_0x1e32e2(0x6d3)+_0x1e32e2(0x192),_0x1e32e2(0x3ff)+_0x1e32e2(0xe3e)+'on',[_0xb39541,_0x5dde0a]);var _0x572a7e=[_0x55b637(_0xb39541,_0x2fd94f[_0x1e32e2(0x51b)]),_0x55b637(_0xb39541+(-0x2483+0x20be+-0x1*-0x3c9),_0x1e32e2(0xd4a)),_0x55b637(_0xb39541+(0x1*0x2572+-0x1*-0xeb1+-0x341b),_0x2fd94f[_0x1e32e2(0x51b)]),_0x2fd94f[_0x1e32e2(0xe69)](_0x55b637,_0x2fd94f[_0x1e32e2(0x4f0)](_0xb39541,-0x15ba+0x2c0*0xd+0x2*-0x6fd),_0x1e32e2(0xd4a))],_0x10c1d7=-0x17fe+-0x26c1+0x3ebf;for(var _0x2cd118=0x1035+0xf8f+-0x7f1*0x4;_0x2cd118<-0xbcb+-0x21c8+0x2d97;_0x2cd118++)_0x10c1d7+=_0x572a7e[_0x2cd118]*_0x572a7e[_0x2cd118];_0x10c1d7=Math[_0x1e32e2(0x344)](_0x10c1d7);var _0x59c241=isFinite(_0x10c1d7)&&Math[_0x1e32e2(0xd22)](_0x2fd94f[_0x1e32e2(0x7a2)](_0x10c1d7,-0x8df+0x376*0x3+-0x182))<-0x1ae2+0x15bd+0x525+0.02;_0x2fd94f['SGubm'](_0x397d46,_0x1e32e2(0x6d3)+'form',_0x1e32e2(0x83d)+_0x1e32e2(0x28d)+'on',[_0xb39541,_0x5dde0a]);var _0x431ab5=_0x55b637(_0xb39541,_0x2fd94f[_0x1e32e2(0x51b)]),_0x44ba97=_0x55b637(_0xb39541+(-0x3d9*0x6+0x783+0xf97),_0x1e32e2(0xd4a)),_0x3af45b=_0x2fd94f['VwGeu'](_0x55b637,_0xb39541+(-0x1eff+-0xf9b*0x1+0x2ea2),_0x1e32e2(0xd4a));_0x254c12[_0x1e32e2(0xdd9)]=typeof _0x431ab5===_0x2fd94f['VSdGn']&&typeof _0x44ba97==='numbe'+'r'&&_0x2fd94f[_0x1e32e2(0xa87)](typeof _0x3af45b,'numbe'+'r')&&_0x2fd94f[_0x1e32e2(0x46e)](isFinite,_0x431ab5)&&isFinite(_0x44ba97)&&isFinite(_0x3af45b)&&Math[_0x1e32e2(0xd22)](_0x431ab5)<0x110c5+-0x11a5*0x6+-0x3*-0x4a93&&Math[_0x1e32e2(0xd22)](_0x44ba97)<-0x1bb03+-0x1e6ab+0x5284e&&Math['abs'](_0x3af45b)<-0x2743*0xe+-0x1*-0x19fe4+0x20c66?[_0x431ab5,_0x44ba97,_0x3af45b]:null,_0x254c12['appli'+'ed']++;if(_0x59c241){if(_0x2fd94f[_0x1e32e2(0x2e8)]===_0x2fd94f['ogQmn'])try{_0xaddcb1=_0x1cccdc['keys'](_0x3380dd)['slice'](0x365+0xb*-0x213+0x136c,-0x151*-0x1d+0xc22+-0x3237);}catch(_0x20576d){}else return _0x254c12['quat']=_0x572a7e,_0x254c12[_0x1e32e2(0x2d8)]=_0x4e7258(_0x572a7e),_0x254c12['ok']=!![],_0x254c12[_0x1e32e2(0xbec)]='',_0x254c12['sourc'+'e']='camer'+'a\x20tra'+_0x1e32e2(0x341)+'m',_0x254c12;}_0x254c12['quat']=null,_0x254c12['basis']=null;if(_0x254c12['fov']!==null)return _0x254c12['ok']=!![],_0x254c12[_0x1e32e2(0x655)+'e']=_0x2fd94f[_0x1e32e2(0xb91)],_0x254c12['why']=_0x2fd94f['wpMPe'](_0x1e32e2(0xe53)+'ion\x20u'+_0x1e32e2(0x25c)+'le\x20(|'+_0x1e32e2(0x451),Math[_0x1e32e2(0x632)](_0x10c1d7*(-0x712+-0x4b1*-0x1+-0x649*-0x1))/(0x246*0x8+0x21b0+-0x2ff8))+(_0x1e32e2(0xb96)+'ov\x20on'+'ly'),_0x254c12;return _0x254c12['ok']=![],_0x254c12['sourc'+'e']=null,_0x254c12[_0x1e32e2(0xbec)]=_0x1e32e2(0xe53)+_0x1e32e2(0x239)+_0x1e32e2(0x25c)+'le\x20(|'+'q|='+Math[_0x1e32e2(0x632)](_0x10c1d7*(-0x422*-0x1+0x25ad+-0x25e7*0x1))/(-0x162d+0x1*-0x11a1+0x2bb6)+_0x2fd94f[_0x1e32e2(0xd62)],_0x254c12;}function _0x1dccf0(){var _0x525911=_0x3f0b99;if(_0x525911(0x44e)!==_0x2fd94f[_0x525911(0xd6a)])_0x5c40a6[_0x525911(0xcc7)]=_0x3776a0;else{if(_0x254c12['tried'])return _0x254c12;return _0x2d4e1c();}}var _0x437a6e={'pitch':null,'yaw':null,'identified':![],'why':_0x3f0b99(0x8b8)+_0x3f0b99(0x817)+_0x3f0b99(0x1b1)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x56b479(_0x19cf50){var _0x421dad=_0x3f0b99;if(_0x2fd94f[_0x421dad(0x886)]!==_0x421dad(0x96a))_0x173744=_0x411302();else{var _0x5a1fde=null,_0x25ec61=0x4e9+0xb0+-0x599;for(var _0xa0af9c in _0x57d539){var _0x3a0590=_0x57d539[_0xa0af9c];if(!_0x3a0590['hits']||_0x3a0590[_0x421dad(0xe1f)]===null)continue;var _0x37340b=_0x2fd94f['MhjSV'](_0x55b637,_0x528ba4+_0x19cf50,_0x421dad(0xd4a));if(_0x2fd94f['wUExG'](typeof _0x37340b,'numbe'+'r'))continue;Math['abs'](_0x3a0590[_0x421dad(0xe1f)]-_0x37340b)<-0x174b+0x1*0x779+0x32a*0x5+0.001&&_0x3a0590[_0x421dad(0x1e4)]>_0x25ec61&&(_0x5a1fde=_0xa0af9c,_0x25ec61=_0x3a0590[_0x421dad(0x1e4)]);}return _0x5a1fde;}}function _0x3a01b8(_0x3d938e){var _0x183f97=_0x3f0b99,_0x448404={'thvAS':function(_0x3bf207,_0x35d883){return _0x3bf207*_0x35d883;},'YpsXi':_0x2fd94f['bsEBQ'],'wPGte':function(_0x5e173d,_0x31559b){var _0x507740=_0x59a2;return _0x2fd94f[_0x507740(0x6c6)](_0x5e173d,_0x31559b);},'wFEJB':function(_0x5d3436,_0x161357){var _0x2b1105=_0x59a2;return _0x2fd94f[_0x2b1105(0xcc0)](_0x5d3436,_0x161357);},'tKDIu':_0x183f97(0x8db),'Srwjx':function(_0x5d33c1,_0x55e89b){return _0x5d33c1===_0x55e89b;},'UPqhD':_0x2fd94f[_0x183f97(0x1a2)],'AyDlC':function(_0xe4e959,_0x341a3a){return _0x2fd94f['qSfZM'](_0xe4e959,_0x341a3a);},'uQrnY':function(_0x37e761,_0x48eea6){return _0x37e761+_0x48eea6;},'noJjp':function(_0x3aa7f9,_0x365f27){return _0x3aa7f9+_0x365f27;},'ZABmV':function(_0x589925,_0x32c13d){return _0x2fd94f['ktRGQ'](_0x589925,_0x32c13d);},'okuHu':function(_0x1c29d3,_0xfa0a53){return _0x2fd94f['ZNMkm'](_0x1c29d3,_0xfa0a53);},'iWcJI':_0x183f97(0xba9)+'he\x20li'+'ve\x20ma'+'nager','rgHsu':function(_0x20a445,_0x33bbac){return _0x20a445+_0x33bbac;},'Blwhq':function(_0x5e62af,_0x227e62){return _0x2fd94f['crVYN'](_0x5e62af,_0x227e62);},'sQJPU':_0x2fd94f['abUSd'],'VvJFa':'+0x29'+'8','AVlgb':function(_0x5829ca,_0x36b291,_0x1b6bae,_0x5d5180){return _0x5829ca(_0x36b291,_0x1b6bae,_0x5d5180);},'WzZFJ':_0x2fd94f['TNAzw'],'DyCSl':_0x2fd94f[_0x183f97(0x8d3)],'KQCqO':function(_0x584de6,_0x26167e,_0x4f2228){return _0x584de6(_0x26167e,_0x4f2228);},'uohqu':function(_0x510d97,_0x41f0f6){return _0x510d97/_0x41f0f6;}},_0x110872=[],_0x30d07d=_0x2404cb[_0x183f97(0xda0)+_0x183f97(0x54b)]||[];for(var _0x5860ab in _0x57d539){if('thfwW'!==_0x2fd94f['gYeZM']){var _0x47894a=_0x448404[_0x183f97(0x5bc)][_0x183f97(0xae3)]('|'),_0x2b22ce=0x209+0x1b13+-0x33c*0x9;while(!![]){switch(_0x47894a[_0x2b22ce++]){case'0':if(_0x2cdb77!==_0x1addd1[_0x515a61][_0x183f97(0xe45)+_0x183f97(0xb09)+'t'])_0x48198f[_0x1f8f7f][_0x183f97(0xe45)+'onten'+'t']=_0x2cdb77;continue;case'1':var _0x25addb=_0x31c569[_0x1e7bc7][_0x183f97(0xc23)+'et']['k'];continue;case'2':if(_0x448404['wPGte'](_0x25addb,_0x183f97(0x607)+'ON'))_0x2cdb77=_0x39e688?_0x12db4a[_0x183f97(0x45d)+'on']:'-';else{if(_0x25addb==='appli'+_0x183f97(0xd7a)+_0x183f97(0xb10)+_0x183f97(0x7f0))_0x2cdb77=_0x19d51a?_0x448404[_0x183f97(0x57e)](_0x50d31e[_0x183f97(0x8b9)+_0x183f97(0x365)+'ed']+_0x448404['tKDIu'],_0x218e9d[_0x183f97(0x8b9)+_0x183f97(0x21b)+_0x183f97(0x7f0)+_0x183f97(0x2fa)]):'-';else{if(_0x448404['Srwjx'](_0x25addb,_0x448404['UPqhD']))_0x2cdb77=_0x36d419&&_0x3025f7[_0x183f97(0x6e0)+_0x183f97(0x469)]&&_0x14b5ad[_0x183f97(0x6e0)+_0x183f97(0x469)][_0x183f97(0x6d7)+'red']?_0x448404['AyDlC'](_0x448404[_0x183f97(0x42b)](_0x448404[_0x183f97(0x35e)](_0xefd3cc['round'](_0x48916e[_0x183f97(0x6e0)+_0x183f97(0x469)]['bytes']/(-0xdd9f5+0xe4397+0xf965e)),'\x20MB\x20@'+'\x20'),_0x361dc0[_0x183f97(0x6e0)+_0x183f97(0x469)][_0x183f97(0x532)]),'ms'):'-';else{if(_0x25addb==='Photo'+'nNetw'+_0x183f97(0xa56)+'nc')_0x2cdb77=_0xb9d593&&_0x42fd85['esp']?_0x448787(_0x48694e[_0x183f97(0xe05)][_0x183f97(0x29e)+_0x183f97(0x419)+'t']):'-';else{if(_0x448404['ZABmV'](_0x25addb,'every'+'one\x20b'+_0x183f97(0x427)+'u'))_0x2cdb77=_0x1e960e&&_0x120d11[_0x183f97(0xe05)]?_0x448404[_0x183f97(0xa50)](_0x21b680,_0x51aa6d[_0x183f97(0xe05)][_0x183f97(0x28a)+_0x183f97(0x7a0)]):'-';else{if(_0x25addb===_0x448404['iWcJI'])_0x2cdb77=_0x2cc235&&_0x562e7a[_0x183f97(0xe05)]&&_0x14c746[_0x183f97(0xe05)]['camer'+'a']?_0x448404['rgHsu'](_0x448404[_0x183f97(0x717)](_0x1af5e3['esp']['camer'+'a'],'\x20(')+_0x5142bb[_0x183f97(0xe05)][_0x183f97(0x3a3)+'aFrom'],')'):'-';else{if(_0x25addb===_0x448404['sQJPU'])_0x2cdb77=_0x38ebcf&&_0x27baa7[_0x183f97(0xe67)]&&_0x17a7d4['local']['feet']?_0x591ddc[_0x183f97(0xe67)][_0x183f97(0x364)][_0x183f97(0x6f5)](function(_0x3fdb24){var _0x40d499=_0x183f97;return _0x1eb372[_0x40d499(0x872)](_0x3802a2[_0x40d499(0x632)](_0x1eb372[_0x40d499(0x90a)](_0x3fdb24,-0x369*-0x7+-0x1*-0x25de+0x6d1*-0x9)),-0x1670+-0x1bf7+0x32cb);})[_0x183f97(0x958)]('\x20\x20'):'-';else{if(_0x25addb===_0x448404['VvJFa'])_0x2cdb77=_0x5e908d&&_0x545d80['local']&&_0x113a3b[_0x183f97(0xe67)][_0x183f97(0x77f)]?_0x7b4554[_0x183f97(0xe67)][_0x183f97(0x77f)]['map'](function(_0x551fbc){var _0x46932b=_0x183f97;return _0x4fc20c['round'](_0x448404[_0x46932b(0x9c3)](_0x551fbc,-0x10ab*-0x1+0x1f*0x65+-0x1c82))/(-0x1947+-0xbc*-0x16+-0x1e7*-0x5);})['join']('\x20\x20'):'-';else{var _0x30409f=_0x25addb[_0x183f97(0xae3)]('+');_0x2cdb77=_0x448404[_0x183f97(0xc51)](_0x56246c,_0x3af367,_0x30409f[0x1511+-0x107*0x17+0x290][_0x183f97(0xaa9)+'Of'](_0x448404[_0x183f97(0xe24)])===-0x1*-0x2449+0x531*-0x7+0xe?'Healt'+'hScri'+'pt':_0x448404[_0x183f97(0xad6)],_0x448404['KQCqO'](_0x5e6eff,_0x30409f[0x1*-0x12c3+-0x1f13+0x31d7],-0x1*-0x1ce1+0x1914+-0x9*0x5fd));}}}}}}}}continue;case'3':var _0x2cdb77='';continue;case'4':var _0x1eb372={'HqVFL':function(_0x2e4424,_0x22ce5c){var _0x30ce4c=_0x183f97;return _0x448404[_0x30ce4c(0xcae)](_0x2e4424,_0x22ce5c);},'NfHhC':function(_0x3a6135,_0x25bf50){var _0x4a9817=_0x183f97;return _0x448404[_0x4a9817(0x9c3)](_0x3a6135,_0x25bf50);}};continue;}break;}}else{var _0xb16a7c=_0x57d539[_0x5860ab];if(!_0xb16a7c[_0x183f97(0x1e4)])continue;var _0x2e4845=null;for(var _0x4a06ce=0x12e5*0x1+-0x457*-0x5+-0x2898;_0x2fd94f[_0x183f97(0xb58)](_0x4a06ce,_0x30d07d['lengt'+'h']);_0x4a06ce++){if(_0x2fd94f['nZBLs'](_0x30d07d[_0x4a06ce][-0x1*0x1136+0x1061+0xd6],_0x183f97(0xd4a)))continue;var _0x2afb9b=_0x2fd94f['GwRbv'](_0x55b637,_0x3d938e+_0x30d07d[_0x4a06ce][0x219+-0x2313+0x20fa],'f32');if(_0x2fd94f['hrGcn'](typeof _0x2afb9b,'numbe'+'r')&&Math[_0x183f97(0xd22)](_0x2fd94f[_0x183f97(0x6cb)](_0x2afb9b,_0xb16a7c[_0x183f97(0xe1f)]))<0x167a+0x1*-0x996+-0x14*0xa5+0.001){if(_0x2fd94f[_0x183f97(0x21e)](_0x2fd94f[_0x183f97(0x43d)],_0x2fd94f[_0x183f97(0x825)])){var _0x47b57d=_0x10de78[_0x2dcc8a],_0x2e723a=_0x2fd94f['AkKwB'](_0x3cd849,_0x30f742,_0x533e68,_0x47b57d[_0x183f97(0x66f)]);if(!_0x2e723a)return![];var _0x384997=new _0x664b7f(_0x2e723a['buffe'+'r'],_0x2e723a[_0x183f97(0xc7c)+_0x183f97(0xcb4)],_0x2e723a[_0x183f97(0x701)+_0x183f97(0xa59)]),_0x262139=_0x47b57d[_0x183f97(0xdf3)+'pe']==='u8'?_0x384997[_0x183f97(0x19a)+_0x183f97(0xb9b)](_0x47b57d[_0x183f97(0xcd9)]):_0x384997[_0x183f97(0x339)+_0x183f97(0xd42)](_0x47b57d['key'],!![]),_0x508ef1;if(_0x2e4e4e===_0x183f97(0xe65))_0x508ef1=_0x50a286(_0x42d857);else{if(_0x2fd94f['RqkDo'](_0x41f31e,_0x2fd94f['mXERz']))_0x508ef1=_0x4f2d56|0xebd+-0xa99+-0x424;else _0x508ef1=_0x2fd94f['ZijEG'](_0x3bd2ed?-0x1553+-0xf25+0x2479:0x2*-0x597+0x1f38+0x1e*-0xab,0x1*-0x148e+0x15e7*-0x1+0x2b74);}return _0x2fd94f[_0x183f97(0x219)](_0x30daef,_0x2fd94f['qSfZM'](_0x4f2e98+_0x23bcbf,_0x47b57d[_0x183f97(0xd19)+'n']),'i32',_0x2fd94f[_0x183f97(0x4db)](_0x508ef1,_0x262139))&&_0x222181(_0x3aa4a3+_0xf43eab+_0x47b57d['fake'],_0x2fd94f[_0x183f97(0x474)](_0x586b14,_0x183f97(0xe65))?_0x2fd94f['eaffj']:_0x2fd94f['hrGcn'](_0x4830ab,_0x2fd94f[_0x183f97(0xb16)])?_0x2fd94f[_0x183f97(0x839)]:'u8',_0x2b9064===_0x183f97(0xe65)?_0x74f96c:_0x2fd94f[_0x183f97(0x6dc)](_0xcaa0d1,'obfI')?_0x2fd94f['WoXSw'](_0x5e3f64,0x25a2+-0x344+-0x53*0x6a):_0x5cc894?0x19dc+-0x193c+-0x9f:0x1*-0x7a2+0x208d+-0x18eb)&&_0x2fd94f['XgSGD'](_0x16b1a3,_0x2fd94f[_0x183f97(0x99c)](_0x2fd94f[_0x183f97(0x69f)](_0x13f31c,_0x272e5d),_0x47b57d[_0x183f97(0xe6a)+'e']),'u8',0x552+0x11*-0x17b+0x13d9);}else{_0x2e4845='0x'+_0x30d07d[_0x4a06ce][-0xb03*-0x1+-0x3*0xbcb+0x185e][_0x183f97(0x7e7)+_0x183f97(0xa00)](-0x27*-0x9d+-0x95c*0x2+-0x523);break;}}}_0x110872['push']({'name':_0x5860ab,'value':_0xb16a7c['last'],'matches':_0x2e4845,'hits':_0xb16a7c[_0x183f97(0x1e4)],'lo':_0xb16a7c['lo'],'hi':_0xb16a7c['hi'],'travel':_0xb16a7c['lo']===null?-0x197f+-0xfdf+0x2*0x14af:_0x2fd94f[_0x183f97(0x2ec)](Math['round']((_0xb16a7c['hi']-_0xb16a7c['lo'])*(0x1*0x69d+-0x1a1a+0x13e1)),0xea6+0xa6c+-0x18ae),'jump':Math['round'](_0xb16a7c['jump']*(-0x1*-0xaf1+0x297+-0x349*0x4))/(-0xd*-0x2b3+0x2*0x107+0x24c1*-0x1),'set':_0xb16a7c[_0x183f97(0x38b)+'ts']?_0xb16a7c[_0x183f97(0xe66)+'st']:null});}}return _0x110872;}function _0x171da1(){var _0x35158f=_0x3f0b99,_0x24d6e6={'jbItm':function(_0x524f0d,_0x5078cf){var _0x4cb563=_0x59a2;return _0x2fd94f[_0x4cb563(0xca9)](_0x524f0d,_0x5078cf);},'oycWJ':function(_0x287704,_0x54d1f7,_0x20b1cd){return _0x287704(_0x54d1f7,_0x20b1cd);},'GNIJs':function(_0x56881d,_0x5b4e6f){return _0x56881d!==_0x5b4e6f;},'TLVhV':function(_0x12ddc1,_0x31ce12){var _0xde3cd1=_0x59a2;return _0x2fd94f[_0xde3cd1(0x927)](_0x12ddc1,_0x31ce12);},'HjDAt':_0x35158f(0x9db)+'t','vMVFE':_0x35158f(0x7af)+_0x35158f(0x56b)+_0x35158f(0x487)+_0x35158f(0x562)+'ate\x20f'+_0x35158f(0x3be),'SXood':function(_0x3894a7,_0x315dcb){var _0x25209a=_0x35158f;return _0x2fd94f[_0x25209a(0x83b)](_0x3894a7,_0x315dcb);},'LybPm':function(_0x3e42a1,_0x47aa6e){return _0x3e42a1===_0x47aa6e;},'hjgSR':function(_0x255219,_0x183e18){return _0x255219===_0x183e18;},'iPoDm':_0x2fd94f[_0x35158f(0x588)]};if(_0x2fd94f['DbnjM']('ccWJg',_0x35158f(0xab9))){var _0x29eea2=_0x23e849();if(!_0x29eea2||!_0x29eea2[_0x35158f(0x6f3)+'Look'])return _0x2fd94f['xNSji'](_0x35158f(0x6de),'QPTRB')?(_0x437a6e['ident'+_0x35158f(0xb51)]=![],_0x437a6e[_0x35158f(0xbec)]=_0x2fd94f['EndeB'],null):(_0x291584['error'+'s'][_0x35158f(0x1ea)](_0x35158f(0x786)+_0x35158f(0xb2e)+_0x35158f(0x711)),_0x4fdb93);var _0x10132d=parseInt(_0x29eea2[_0x35158f(0x6f3)+_0x35158f(0x54b)],0xc44+-0x17c0+0xb8c*0x1);if(_0x528ba4!==_0x10132d)_0x528ba4=_0x10132d;_0x437a6e[_0x35158f(0x770)+'rs']=_0x2fd94f['GaPey'](_0x3a01b8,_0x10132d);var _0x1b42f6=_0x2fd94f['jgpyL'](_0x54e610),_0xb52049=0x8*-0x18+0x22db+0x5a*-0x61,_0x224979=0x746+0x39*-0x75+0x1321;function _0x1ae477(_0x1ad8ad){var _0x28b58d=_0x35158f;if(_0x2fd94f[_0x28b58d(0x7a1)]!==_0x28b58d(0x5f0))return _0x2fd94f[_0x28b58d(0x927)](_0x1ad8ad['lo'],null)||_0x2fd94f[_0x28b58d(0x918)](_0x1ad8ad['hi'],null)?0x9*0x22+-0x1*-0x1e63+-0x1f95:_0x1ad8ad['hi']-_0x1ad8ad['lo'];else _0x2360dc[_0x28b58d(0x505)]();}var _0x3669d7=null;for(var _0x224644 in _0x57d539){if(_0x2fd94f[_0x35158f(0x5c3)](_0x35158f(0x8a8),_0x35158f(0xa04))){var _0x3e6fc1=_0x57d539[_0x224644];if(!_0x3e6fc1['hits']||_0x3e6fc1[_0x35158f(0xe1f)]===null)continue;if(_0x2fd94f[_0x35158f(0x846)](_0x1ae477,_0x3e6fc1)<_0xb52049)continue;if(_0x3e6fc1['jump']>_0x224979)continue;var _0x1a32e0=_0x55b637(_0x528ba4+_0x18bf7b,_0x2fd94f['eaffj']);if(typeof _0x1a32e0!==_0x2fd94f[_0x35158f(0xe34)]||Math[_0x35158f(0xd22)](_0x3e6fc1['last']-_0x1a32e0)>=0x1c*0x115+-0xaf3+-0x17d*0xd+0.001)continue;if(!_0x3669d7||_0x3e6fc1['hits']>_0x57d539[_0x3669d7][_0x35158f(0x1e4)])_0x3669d7=_0x224644;}else try{var _0x269b49=_0x4eca16&&_0x215a4b['data'];if(!_0x269b49||_0x269b49['__sak'+_0x35158f(0x751)]!==_0x4aff4c||_0x24d6e6[_0x35158f(0x7ba)](_0x269b49['kind'],'cmd'))return;_0x24d6e6[_0x35158f(0x643)](_0x458c1c,_0x269b49[_0x35158f(0x23d)],_0x269b49['arg']);}catch(_0x4e73e4){}}var _0x10b59d=null;for(var _0x5ad07b in _0x57d539){if(_0x2fd94f['sKGAP'](_0x5ad07b,_0x3669d7))continue;var _0x3e4588=_0x57d539[_0x5ad07b];if(!_0x3e4588[_0x35158f(0x1e4)]||_0x2fd94f['DbnjM'](_0x3e4588[_0x35158f(0xe1f)],null))continue;if(_0x2fd94f['xfNwn'](_0x1ae477,_0x3e4588)<_0xb52049)continue;if(_0x3e4588['jump']>_0x224979)continue;if(_0x3e4588[_0x35158f(0xe1f)]>=-(0x1f9d*-0x1+-0x1dce+0x3dc5)&&_0x3e4588['last']<=0x1*0x212b+0x34d*-0x1+0x4*-0x761){if(_0x35158f(0x987)===_0x35158f(0x987)){_0x10b59d=_0x5ad07b;break;}else{var _0x3879e6=_0x1158ff[_0x35158f(0x2b0)];if(!_0x3879e6||_0x24d6e6[_0x35158f(0x635)](_0x3879e6[_0x35158f(0x8ee)+'ura'],_0x1e1589))return;try{if(_0x3879e6[_0x35158f(0x8b6)]===_0x35158f(0x433)){_0x1dfb35()['set']({'host':_0x3879e6['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x24d6e6[_0x35158f(0x828)](_0x3879e6['kind'],_0x24d6e6[_0x35158f(0x246)]))_0x25185f()[_0x35158f(0x46c)](_0x3879e6[_0x35158f(0x9db)+'t']);}catch(_0x287b8a){_0xd81db3[_0x35158f(0x940)](_0x24d6e6['vMVFE'],_0x24d6e6['SXood']('color'+':',_0x2bddb2),_0x287b8a);}}}}_0x437a6e['yawGe'+'tter']=_0x3669d7,_0x437a6e[_0x35158f(0xb40)+_0x35158f(0x8ac)+'r']=_0x10b59d;var _0x2471b5,_0x415d9e;if(_0x1b42f6&&_0x2fd94f['jxHKs'](_0x1b42f6[_0x35158f(0xb40)],null)){if(_0x35158f(0x900)===_0x2fd94f['VIGzy'])_0x415d9e=_0x1b42f6[_0x35158f(0xb40)],_0x2471b5=_0x1b42f6['yaw'],_0x437a6e[_0x35158f(0x655)+'e']=_0x35158f(0x328)+'r\x20pai'+'r\x20('+_0x1b42f6['order']+')';else{_0x41c105[_0x35849a]={'ptr':_0x4383e6,'firstSeen':_0x13e307[_0x35158f(0xa06)](),'hits':0x0,'replaced':!!_0x458b62};try{var _0x1e26aa=_0x104523[_0x35158f(0xb63)+'r'](function(_0x18f638){var _0x3cf4dc=_0x35158f;return _0x24d6e6['LybPm'](_0x18f638[_0x3cf4dc(0x6b6)],_0x235d8f);})[-0x229d*-0x1+0x6a9*-0x1+-0x4*0x6fd];_0x38bd38={'type':_0x5c31ea,'atMs':_0x3c71af[_0x35158f(0xa06)]()-_0x399e28,'originalFunc':!!(_0x1e26aa&&_0x1e26aa[_0x35158f(0xc30)]&&_0x24d6e6['hjgSR'](typeof _0x1e26aa[_0x35158f(0xc30)][_0x35158f(0x1f0)+_0x35158f(0xadf)+'nc'],_0x24d6e6[_0x35158f(0x4e0)])),'resolveGameAtFire':!!_0x9a0756(),'gameSourceAtFire':_0x1d4e8e['sourc'+'e']};}catch(_0xe9072){}}}else _0x3669d7?_0x2fd94f[_0x35158f(0x2f0)]!==_0x2fd94f[_0x35158f(0x2f0)]?(_0x56639d['xyz']=_0xb70356,_0x2fd1b3['v']=_0x25357c[0x67c+-0x1*0x231+0x44b*-0x1]):(_0x2471b5=_0x57d539[_0x3669d7][_0x35158f(0xe1f)],_0x437a6e[_0x35158f(0x655)+'e']=_0x2fd94f['BGnIa'],_0x415d9e=_0x10b59d?_0x57d539[_0x10b59d]['last']:_0x55b637(_0x2fd94f[_0x35158f(0xa58)](_0x10132d,_0x189e1a),_0x35158f(0xd4a))):(_0x2471b5=_0x2fd94f[_0x35158f(0x51e)](_0x55b637,_0x2fd94f[_0x35158f(0x4ae)](_0x10132d,_0x18bf7b),_0x2fd94f[_0x35158f(0x51b)]),_0x415d9e=_0x55b637(_0x2fd94f['mwuwB'](_0x10132d,_0x189e1a),_0x2fd94f['eaffj']),_0x437a6e[_0x35158f(0x655)+'e']='field'+'\x200x28'+_0x35158f(0x5ed)+_0x35158f(0xd61));_0x437a6e[_0x35158f(0xdc4)+'w']=_0x2471b5,_0x437a6e[_0x35158f(0x82c)+_0x35158f(0x23a)]=_0x415d9e;if(_0x2fd94f[_0x35158f(0x48d)](typeof _0x2471b5,'numbe'+'r')||!isFinite(_0x2471b5)||_0x2fd94f['EiBFy'](typeof _0x415d9e,'numbe'+'r')||!_0x2fd94f[_0x35158f(0x5af)](isFinite,_0x415d9e))return _0x437a6e['ident'+'ified']=![],_0x437a6e['why']='view\x20'+'float'+_0x35158f(0x27d)+'eadab'+'le',null;if(_0x415d9e<-(0x144f+0x12ee*0x1+-0x26e3)||_0x415d9e>-0x1978+0x1566+0x46c)return _0x2fd94f['anLKq']!==_0x35158f(0xc03)?null:(_0x437a6e[_0x35158f(0x293)+'ified']=![],_0x437a6e['why']=_0x35158f(0xb40)+'\x20'+Math[_0x35158f(0x632)](_0x415d9e)+(_0x35158f(0x7d4)+'of\x20ra'+_0x35158f(0xd9b)),null);return _0x437a6e['why']='',_0x437a6e[_0x35158f(0x293)+_0x35158f(0xb51)]=!![],_0x437a6e[_0x35158f(0xb40)]=_0x415d9e,_0x437a6e[_0x35158f(0x7cc)]=_0x2471b5,_0x437a6e;}else{_0x59c6c3[_0x35158f(0x515)+'ntDef'+_0x35158f(0xe59)](),_0x2fd94f['PhVNh'](_0x169d50,!_0x24cc89['on'],_0x4b4b96[_0x35158f(0x891)+'r']);return;}}function _0x165b3a(_0x37025a,_0x20aada,_0xc987c8,_0x4784f9){var _0x32dbfb=_0x3f0b99,_0x45d038=_0x2fd94f['SQCeD'](_0x1dccf0),_0x7ee0e=null,_0x5b435f=_0x37025a,_0x182fbd=_0xabaa41[_0x32dbfb(0xc71)];if(_0x45d038['basis']){_0x7ee0e=_0x45d038[_0x32dbfb(0x2d8)];if(_0x45d038[_0x32dbfb(0xdd9)])_0x5b435f=_0x45d038[_0x32dbfb(0xdd9)];if(_0x2fd94f[_0x32dbfb(0xca9)](_0x45d038[_0x32dbfb(0xc71)],null))_0x182fbd=_0x45d038['fov'];}var _0x1a949a,_0x1b3bff,_0x5eb3a9,_0x3c3a32,_0x34e97b,_0x4d8ae5,_0x23cea2,_0x129c79,_0x2c60b6;if(_0x7ee0e)_0x1a949a=_0x7ee0e['fwd'][-0x1029+-0x4*0x90f+0x3465],_0x1b3bff=_0x7ee0e[_0x32dbfb(0xa39)][0x1*-0x24d+0x8b7+-0x669],_0x5eb3a9=_0x7ee0e['fwd'][-0x168a+-0x1*0xf54+0x25e0],_0x3c3a32=_0x7ee0e[_0x32dbfb(0x3f4)][0x1*0x13c6+0x1*0xe8d+0x57*-0x65],_0x34e97b=_0x7ee0e[_0x32dbfb(0x3f4)][-0x2*-0x32+-0x3cb*-0xa+-0x2651],_0x4d8ae5=_0x7ee0e['right'][-0x5b0+0x2710+-0x215e],_0x23cea2=_0x7ee0e['up'][-0x83*-0x23+-0x6b1+-0x59c*0x2],_0x129c79=_0x7ee0e['up'][0x13cb+0xb2*-0x17+-0x3cc],_0x2c60b6=_0x7ee0e['up'][-0x21e0+0x266c+-0x48a];else{var _0x7beb7=_0x171da1();if(!_0x7beb7)return null;var _0x20069d=_0x2fd94f['ufSfp'](_0x7beb7[_0x32dbfb(0xb40)],Math['PI'])/(0x6cd*-0x5+0x44f+0x1e66),_0x4af6e3=_0x7beb7[_0x32dbfb(0x7cc)]*Math['PI']/(0xeb*0x1+-0x88f*-0x4+0x2273*-0x1),_0xa7d45=Math[_0x32dbfb(0x879)](_0x20069d);_0x1a949a=_0x2fd94f['dWiYB'](Math['sin'](_0x4af6e3),_0xa7d45),_0x1b3bff=-Math['sin'](_0x20069d),_0x5eb3a9=Math[_0x32dbfb(0x879)](_0x4af6e3)*_0xa7d45,_0x3c3a32=_0x5eb3a9,_0x34e97b=0x2579+0x2*0x38a+-0x2c8d,_0x4d8ae5=-_0x1a949a,_0x23cea2=_0x2fd94f['hDSbE'](_0x1b3bff*_0x4d8ae5,_0x5eb3a9*_0x34e97b),_0x129c79=_0x2fd94f['MJecK'](_0x5eb3a9*_0x3c3a32,_0x1a949a*_0x4d8ae5),_0x2c60b6=_0x2fd94f['usmTX'](_0x1a949a,_0x34e97b)-_0x2fd94f['OMJyy'](_0x1b3bff,_0x3c3a32);}var _0x17e113=_0x2fd94f['Hkelr'](_0x20aada[-0xaae+-0x1*-0x24f3+-0x1a45],_0x5b435f[0x234d+0x1*0xdc2+-0x310f*0x1]),_0x4cde6b=_0x20aada[-0x1ece*0x1+-0x2*0x685+0x8c5*0x5]-_0x5b435f[0x101e+0x64e+-0x166b],_0x16605f=_0x20aada[0x1963+0x26d2+-0x4033]-_0x5b435f[-0x58f*0x3+-0xb*-0xd3+-0x6*-0x145],_0x32c2cd=_0x2fd94f[_0x32dbfb(0xbc5)](_0x17e113*_0x1a949a,_0x4cde6b*_0x1b3bff)+_0x2fd94f[_0x32dbfb(0x556)](_0x16605f,_0x5eb3a9);if(_0x2fd94f['uFQTO'](_0x32c2cd,0x1*-0x21e5+-0x136a*-0x2+-0x4ef+0.05))return null;var _0x3d6fbe=_0x2fd94f[_0x32dbfb(0xd9a)](_0x17e113*_0x3c3a32,_0x4cde6b*_0x34e97b)+_0x16605f*_0x4d8ae5,_0x50bfa7=_0x2fd94f[_0x32dbfb(0xcc1)](_0x2fd94f[_0x32dbfb(0xde5)](_0x17e113,_0x23cea2)+_0x2fd94f['aSqtN'](_0x4cde6b,_0x129c79),_0x2fd94f[_0x32dbfb(0x96e)](_0x16605f,_0x2c60b6)),_0xe39f3e=_0xc987c8/_0x4784f9,_0x282f13=_0x2fd94f[_0x32dbfb(0xd88)](_0x182fbd*Math['PI'],-0x1cf3+-0x1*0x1dac+0x3b53),_0x3ce2b8=Math[_0x32dbfb(0x21f)](_0x2fd94f[_0x32dbfb(0xd88)](_0x282f13,0x7c7+-0x6*-0x57d+-0x3*0xd91)),_0x2b10fe=_0x2fd94f[_0x32dbfb(0x404)](_0x3d6fbe,_0x32c2cd)/(_0x3ce2b8*_0xe39f3e),_0x22b874=_0x50bfa7/_0x32c2cd/_0x3ce2b8;if(_0x2b10fe<-(0x2d*0xb5+0x9*0x348+-0x3d58+0.6000000000000001)||_0x2fd94f[_0x32dbfb(0x634)](_0x2b10fe,0xd*0x81+-0x2*-0x42b+-0xee2+0.6000000000000001)||_0x22b874<-(0x17a2+0x1*0xa52+-0x21f3+0.6000000000000001)||_0x22b874>0x1*0xa79+0x1*0x2483+-0xfa9*0x3+0.6000000000000001)return null;return{'x':_0x2fd94f[_0x32dbfb(0xb08)](_0x2b10fe*(-0x11c*-0x6+-0x39*-0x13+-0x1*0xae3+0.5),0x3f*0x4f+-0x1*0x10e7+-0x28a+0.5)*_0xc987c8,'y':_0x2fd94f[_0x32dbfb(0xde5)](0x1a7c+-0x49*0x7f+0x9bb*0x1+0.5-_0x22b874*(0x11d6*0x1+-0x17db+0x17*0x43+0.5),_0x4784f9),'z':_0x32c2cd};}var _0x58443a={'open':![],'cat':_0x3f0b99(0xc18)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x493fdd=_0x3f0b99(0x566)+_0x3f0b99(0x2e6)+'menu-'+_0x3f0b99(0xdd9),_0x7f8463=null,_0x1d4a74=[{'id':_0x2fd94f[_0x3f0b99(0xd53)],'label':_0x3f0b99(0x865)},{'id':_0x3f0b99(0xa3e)+'ls','label':_0x2fd94f['Tdpas']},{'id':_0x2fd94f['CloKi'],'label':_0x2fd94f['UudnX']},{'id':_0x3f0b99(0x395),'label':_0x3f0b99(0x998)}],_0x429dd5=_0x2fd94f[_0x3f0b99(0x4a4)](_0x2fd94f[_0x3f0b99(0x462)](_0x2fd94f[_0x3f0b99(0x75f)](_0x2fd94f['lYylF'](_0x2fd94f['wjODd'](_0x2fd94f[_0x3f0b99(0x462)](_0x2fd94f['yyipi'](_0x2fd94f['CvXqD'](_0x2fd94f['baaYY'](_0x2fd94f[_0x3f0b99(0x76e)](_0x2fd94f[_0x3f0b99(0x462)](_0x2fd94f[_0x3f0b99(0xd9c)](_0x2fd94f[_0x3f0b99(0x61d)](_0x2fd94f['CPIqj'](_0x2fd94f['wjODd'](_0x2fd94f[_0x3f0b99(0xa97)](_0x2fd94f['EobDP'](_0x2fd94f['jrKyS'](_0x2fd94f[_0x3f0b99(0x45b)](_0x2fd94f['hpUZC'](_0x2fd94f[_0x3f0b99(0x68f)](_0x2fd94f[_0x3f0b99(0x850)](_0x2fd94f['mZPhD'](_0x2fd94f[_0x3f0b99(0x1a7)](_0x2fd94f[_0x3f0b99(0x557)](_0x2fd94f[_0x3f0b99(0xdb9)](_0x2fd94f['aVcZG'](_0x2fd94f['hGHJC'](_0x2fd94f[_0x3f0b99(0x232)](_0x2fd94f[_0x3f0b99(0xdda)]+_0x2fd94f['JjPZF']+('displ'+_0x3f0b99(0xa40)+_0x3f0b99(0x235)+_0x3f0b99(0x780)+'x;pad'+'ding:'+_0x3f0b99(0xe2c)+'borde'+'r-rad'+_0x3f0b99(0x1f7)+_0x3f0b99(0x7e5)+'ointe'+_0x3f0b99(0x54e)+_0x3f0b99(0x841)+_0x3f0b99(0xb9e)+_0x3f0b99(0x1e1)+'x:214'+'74836'+_0x3f0b99(0x490)),_0x3f0b99(0xb59)+_0x3f0b99(0x632)+':rgba'+_0x3f0b99(0xa31)+'7,21,'+_0x3f0b99(0x57f)+_0x3f0b99(0xd02)+_0x3f0b99(0x9a0)+_0x3f0b99(0x7b5)+':blur'+'(22px'+_0x3f0b99(0x9ed)+_0x3f0b99(0x2fe)+_0x3f0b99(0xe27)+_0x3f0b99(0x781)+'bkit-'+'backd'+_0x3f0b99(0x9a0)+'ilter'+':blur'+_0x3f0b99(0x561)+')\x20sat'+'urate'+'(150%'+');')+_0x2fd94f[_0x3f0b99(0x95d)]+(_0x3f0b99(0x1d9)+_0x3f0b99(0x3ea)+'trans'+'form:'+'trans'+'lateY'+'(18px'+_0x3f0b99(0x783)+_0x3f0b99(0xb36)+'event'+_0x3f0b99(0xa1d)+'e;tra'+_0x3f0b99(0x926)+_0x3f0b99(0x40d)+_0x3f0b99(0x4d7)+_0x3f0b99(0x887)+_0x3f0b99(0x399)+',tran'+_0x3f0b99(0x204)+'\x20.45s'+_0x3f0b99(0x6ce)+_0x3f0b99(0x79f)+_0x3f0b99(0x372)+'22,1,'+_0x3f0b99(0x7a5)+');')+(_0x3f0b99(0x621)+_0x3f0b99(0xcd8)+_0x3f0b99(0x4f9)+_0x3f0b99(0x5e9)+_0x3f0b99(0x6dd)+_0x3f0b99(0xbb0)+_0x3f0b99(0x93d)+_0x3f0b99(0xda5)+_0x3f0b99(0x9d0)+'er\x22,\x22'+_0x3f0b99(0xd40)+_0x3f0b99(0xa4a)+_0x3f0b99(0x80d)+_0x3f0b99(0xcab)+_0x3f0b99(0xa3a)+'serif'+';}'),_0x2fd94f[_0x3f0b99(0x1d4)])+(_0x3f0b99(0xc7d)+_0x3f0b99(0x7c0)+_0x3f0b99(0x5b2)+'y:fle'+_0x3f0b99(0x8b5)+_0x3f0b99(0xbc2)+_0x3f0b99(0x9f1)+_0x3f0b99(0x191)+'umn;a'+'lign-'+'items'+':cent'+_0x3f0b99(0x281)+'p:4px'+_0x3f0b99(0x368)+_0x3f0b99(0x1eb)+_0x3f0b99(0x8b5)+'x:non'+_0x3f0b99(0xb1b)+'ding:'+_0x3f0b99(0xa0e)+'0;'),_0x2fd94f['yOZtt'])+_0x2fd94f[_0x3f0b99(0x481)],_0x3f0b99(0x99f)+_0x3f0b99(0x187)+_0x3f0b99(0x86a)+'dth:2'+_0x3f0b99(0x676)+'eight'+':25px'+';over'+_0x3f0b99(0x646)+'visib'+'le;fi'+'lter:'+_0x3f0b99(0x48f)+'shado'+'w(0\x200'+_0x3f0b99(0xca3)+_0x3f0b99(0xc39)+'255,1'+_0x3f0b99(0x233)+'7,.8)'+');}')+(_0x3f0b99(0x34e)+_0x3f0b99(0x326)+'splay'+':flex'+';alig'+_0x3f0b99(0x5fe)+'ms:ce'+'nter;'+'justi'+_0x3f0b99(0xb22)+_0x3f0b99(0x844)+_0x3f0b99(0x245)+_0x3f0b99(0xa0c)+_0x3f0b99(0x97f)+'2px;h'+_0x3f0b99(0x569)+':34px'+_0x3f0b99(0xd79)+_0x3f0b99(0x7e8)+_0x3f0b99(0xb3b)+_0x3f0b99(0x4fe)+_0x3f0b99(0x861)+_0x3f0b99(0xce4)),'backg'+_0x3f0b99(0x632)+':tran'+'spare'+_0x3f0b99(0x1d7)+_0x3f0b99(0x86b)+'gba(2'+'46,23'+_0x3f0b99(0xe70)+',.4);'+_0x3f0b99(0x188)+_0x3f0b99(0xc9d)+_0x3f0b99(0x597)+_0x3f0b99(0x1b9)+_0x3f0b99(0xccd)+_0x3f0b99(0xe2c)+'font-'+_0x3f0b99(0x43b)+_0x3f0b99(0xac1)+';font'+_0x3f0b99(0xddc)+'ly:in'+_0x3f0b99(0x28e)+';}'),_0x2fd94f[_0x3f0b99(0xe39)]),_0x2fd94f['SMmhs']),_0x3f0b99(0x876)+_0x3f0b99(0xbc9)+_0x3f0b99(0xc55)+_0x3f0b99(0x890)+'width'+_0x3f0b99(0x2eb)+_0x3f0b99(0x2c4)+_0x3f0b99(0x805)+';flex'+'-dire'+'ction'+_0x3f0b99(0x508)+_0x3f0b99(0xbb2)),_0x2fd94f['LNWlC']),'.mn-t'+_0x3f0b99(0x627)+'{flex'+_0x3f0b99(0x52c)+'n-wid'+'th:0;'+'}')+_0x2fd94f['LRYZF'],_0x2fd94f['WmRSt'])+_0x2fd94f['xrPkC']+(_0x3f0b99(0x621)+_0x3f0b99(0x425)+_0x3f0b99(0xd49)+_0x3f0b99(0xb57)+_0x3f0b99(0x8e5)+_0x3f0b99(0xe32)+_0x3f0b99(0xda1)+_0x3f0b99(0x74d)+';}')+_0x2fd94f['qXTEr'],_0x3f0b99(0x30b)+_0x3f0b99(0x762)+_0x3f0b99(0xb11)+'idth:'+'14px;'+'heigh'+_0x3f0b99(0xc2d)+'x;fil'+_0x3f0b99(0x85b)+'e;str'+'oke:c'+_0x3f0b99(0xa76)+_0x3f0b99(0x93c)+_0x3f0b99(0x94a)+_0x3f0b99(0x618)+'idth:'+'2;str'+_0x3f0b99(0xdac)+_0x3f0b99(0xdb0)+_0x3f0b99(0x9ea)+_0x3f0b99(0x4fb))+(_0x3f0b99(0x30b)+_0x3f0b99(0x6c4)+_0x3f0b99(0xc55)+';min-'+_0x3f0b99(0x779)+'t:0;o'+_0x3f0b99(0xaea)+_0x3f0b99(0xac0)+_0x3f0b99(0xc97)+'displ'+_0x3f0b99(0x647)+'id;gr'+_0x3f0b99(0x3b9)+_0x3f0b99(0x7a3)+_0x3f0b99(0x5a4)+_0x3f0b99(0x393)+'repea'+_0x3f0b99(0x867)+_0x3f0b99(0x50f)+_0x3f0b99(0x792)+'max(2'+_0x3f0b99(0x30f)+_0x3f0b99(0xce7)+';')+_0x2fd94f['wGxxs'],_0x2fd94f[_0x3f0b99(0x7e6)])+_0x2fd94f['sdxIP'],_0x2fd94f['kSXEe']),_0x2fd94f['XkXsG'])+('.sk-c'+'ard-h'+'ead{d'+'ispla'+_0x3f0b99(0x760)+_0x3f0b99(0xcac)+'gn-it'+_0x3f0b99(0x963)+'enter'+';gap:'+_0x3f0b99(0x8f6)+_0x3f0b99(0x59f)+_0x3f0b99(0x4d4)+'x\x2012p'+'x;}')+(_0x3f0b99(0x502)+'ard-t'+'itle{'+'flex:'+'1;min'+_0x3f0b99(0xd47)+'h:0;}'),_0x2fd94f[_0x3f0b99(0x2c6)])+('.sk-c'+'ard.o'+_0x3f0b99(0x1f6)+'-card'+_0x3f0b99(0xc6c)+'e\x20str'+_0x3f0b99(0x7d6)+_0x3f0b99(0xa29)+'#fff0'+_0x3f0b99(0x520))+_0x2fd94f[_0x3f0b99(0xa99)]+_0x2fd94f[_0x3f0b99(0x1d3)],'.sk-c'+_0x3f0b99(0x28b)+'splay'+_0x3f0b99(0x805)+';alig'+_0x3f0b99(0x5fe)+'ms:ce'+_0x3f0b99(0x597)+'gap:8'+_0x3f0b99(0xb07)+'dding'+_0x3f0b99(0xce9)+_0x3f0b99(0x601)+_0x3f0b99(0xa6a)+_0x3f0b99(0x2be)+_0x3f0b99(0xc1a))+(_0x3f0b99(0xa5f)+_0x3f0b99(0xc10)+'flex:'+_0x3f0b99(0x7fe)+'or:rg'+'ba(24'+_0x3f0b99(0x668)+_0x3f0b99(0xafa)+_0x3f0b99(0xd69)+'}'),_0x2fd94f['DkFGM'])+_0x2fd94f[_0x3f0b99(0x36f)],'.sk-s'+'witch'+_0x3f0b99(0xd4d)+'er{co'+_0x3f0b99(0x844)+_0x3f0b99(0x852)+_0x3f0b99(0x28d)+_0x3f0b99(0x738)+_0x3f0b99(0xde7)+_0x3f0b99(0x723)+_0x3f0b99(0x9ab)+_0x3f0b99(0x5a1)+'3px;w'+_0x3f0b99(0x90c)+'8px;h'+_0x3f0b99(0x569)+':8px;'+_0x3f0b99(0xb3b)+'r-rad'+'ius:5'+_0x3f0b99(0x8fd)),_0x2fd94f['XPsiA']),_0x2fd94f[_0x3f0b99(0xcd6)])+_0x2fd94f[_0x3f0b99(0x1d1)],_0x3f0b99(0x575)+'ange{'+_0x3f0b99(0x2b3)+_0x3f0b99(0xa40)+_0x3f0b99(0x52b)+_0x3f0b99(0xb0d)+_0x3f0b99(0xcec)+_0x3f0b99(0x8a9)+_0x3f0b99(0xd3e)+':8px;'+'}'),_0x3f0b99(0x260)+_0x3f0b99(0x6ef)+'{-web'+_0x3f0b99(0x36a)+_0x3f0b99(0xd2f)+_0x3f0b99(0xae1)+_0x3f0b99(0x6e6)+_0x3f0b99(0x5b6)+_0x3f0b99(0x6fb)+':none'+_0x3f0b99(0x368)+'h:96p'+_0x3f0b99(0xd31)+'ght:8'+'px;ba'+_0x3f0b99(0x367)+'und:t'+'ransp'+'arent'+';}')+_0x2fd94f[_0x3f0b99(0xb71)],_0x2fd94f[_0x3f0b99(0x7f2)])+('.sk-s'+'lider'+_0x3f0b99(0x94d)+_0x3f0b99(0x754)+'slide'+_0x3f0b99(0x8e6)+'mb{-w'+'ebkit'+'-appe'+_0x3f0b99(0x60a)+'e:non'+_0x3f0b99(0xe52)+_0x3f0b99(0x82b)+_0x3f0b99(0xd31)+_0x3f0b99(0xc77)+_0x3f0b99(0xbab)+_0x3f0b99(0x819)+_0x3f0b99(0x58d)+'2px;b'+'order'+_0x3f0b99(0x74e)+'us:50'+'%;bac'+_0x3f0b99(0xa92)+_0x3f0b99(0x2c7)+_0x3f0b99(0xa8c)+';}')+(_0x3f0b99(0x9d4)+_0x3f0b99(0xb76)+_0x3f0b99(0x6d1)+_0x3f0b99(0x3d5)+_0x3f0b99(0x4f8)+_0x3f0b99(0xd4e)+_0x3f0b99(0xa35)+_0x3f0b99(0xc57)+_0x3f0b99(0x637)+_0x3f0b99(0x91e)+_0x3f0b99(0x319)+'ext-a'+'lign:'+_0x3f0b99(0x3f4)+';colo'+_0x3f0b99(0x6f6)+_0x3f0b99(0xb29)+',238,'+'242,.'+_0x3f0b99(0x660)),_0x3f0b99(0xe5f)+_0x3f0b99(0x371)+'ont-s'+_0x3f0b99(0x6dd)+'1px;c'+_0x3f0b99(0xa29)+'rgba('+_0x3f0b99(0x9e5)+'38,24'+_0x3f0b99(0x80a)+_0x3f0b99(0xda7)+_0x3f0b99(0xc02)+_0x3f0b99(0xa80)+_0x3f0b99(0xc82)+_0x3f0b99(0x190)+_0x3f0b99(0x254)+'-wrap'+';}')+(_0x3f0b99(0xe5f)+_0x3f0b99(0x903)+_0x3f0b99(0x96f)+_0x3f0b99(0xd2b)+'ff7a9'+_0x3f0b99(0x549)),_0x2fd94f['uXCYi'])+(_0x3f0b99(0x1b9)+'size:'+_0x3f0b99(0xb30)+_0x3f0b99(0xc2e)+_0x3f0b99(0xa1c)+_0x3f0b99(0x2e7)+'00;cu'+_0x3f0b99(0xaef)+'point'+_0x3f0b99(0x7d7)+'nt-fa'+'mily:'+_0x3f0b99(0x661)+_0x3f0b99(0x300)),_0x3f0b99(0x39d)+'tn:ho'+_0x3f0b99(0xc1b)+_0x3f0b99(0x7b5)+':brig'+_0x3f0b99(0xe1d)+'s(1.1'+');}'),_0x2fd94f[_0x3f0b99(0xde6)]),_0x3f0b99(0x4a7)+'ra-pe'+_0x3f0b99(0x695)+'ositi'+_0x3f0b99(0x880)+'xed;t'+_0x3f0b99(0xc13)+_0x3f0b99(0x6b4)+_0x3f0b99(0x3a5)+_0x3f0b99(0x9f4)+_0x3f0b99(0x1e1)+_0x3f0b99(0xcb9)+_0x3f0b99(0x93a)+_0x3f0b99(0xe1e)+_0x3f0b99(0xaef)+'point'+_0x3f0b99(0xa0c)+'dth:2'+'6px;h'+_0x3f0b99(0x569)+_0x3f0b99(0xca7)+_0x3f0b99(0x89e)+_0x3f0b99(0x2e0)+'28;')+('trans'+_0x3f0b99(0x507)+_0x3f0b99(0x4ad)+_0x3f0b99(0xc88)+_0x3f0b99(0x389)+_0x3f0b99(0x74d)+_0x3f0b99(0xaa0)+'ts:au'+'to;fi'+_0x3f0b99(0x816)+_0x3f0b99(0x48f)+_0x3f0b99(0x6b8)+_0x3f0b99(0xc15)+'\x204px\x20'+_0x3f0b99(0xc39)+_0x3f0b99(0xdce)+'07,15'+_0x3f0b99(0x41d)+_0x3f0b99(0x65f)),_0x304a25=_0x2fd94f['CPIqj'](_0x2fd94f['QmaIX'](_0x2fd94f['JwhSs'],_0x3f0b99(0x67e)+'\x22none'+'\x22\x20str'+'oke=\x22'+'#ff6b'+_0x3f0b99(0x3f0)+'troke'+'-widt'+_0x3f0b99(0x79b)+_0x3f0b99(0x76f)+'ke-li'+_0x3f0b99(0x402)+_0x3f0b99(0x211)+_0x3f0b99(0x935)+'troke'+_0x3f0b99(0xbac)+_0x3f0b99(0x25f)+_0x3f0b99(0x87f)+_0x3f0b99(0x773)),_0x3f0b99(0x9ad)+_0x3f0b99(0x84d)+_0x3f0b99(0x4bb)+_0x3f0b99(0x814)+'10\x22\x20r'+'=\x221.5'+_0x3f0b99(0xa46)+'l=\x22#f'+_0x3f0b99(0xa8c)+_0x3f0b99(0x87b)+_0x3f0b99(0xb5c)),_0x1a66a6=_0x2fd94f['RJgfo'](_0x2fd94f['YWTpO']+(_0x3f0b99(0x67e)+_0x3f0b99(0x32e)+_0x3f0b99(0x39a)+_0x3f0b99(0xcc6)+'#ff6b'+'9d\x22\x20s'+'troke'+'-widt'+'h=\x221.'+'6\x22\x20st'+_0x3f0b99(0x8eb)+_0x3f0b99(0xad8)+_0x3f0b99(0xc7e)+'ound\x22'+_0x3f0b99(0x76f)+_0x3f0b99(0x606)+'nejoi'+_0x3f0b99(0x4ac)+_0x3f0b99(0x61a)+'>'),'<circ'+'le\x20cx'+'=\x2212\x22'+_0x3f0b99(0x814)+_0x3f0b99(0x418)+_0x3f0b99(0xceb)+_0x3f0b99(0xa46)+_0x3f0b99(0xa57)+_0x3f0b99(0xa8c)+_0x3f0b99(0x87b)+_0x3f0b99(0xb5c));function _0xcb9baa(_0x32d56d,_0x5bdb0c,_0x50b689){var _0x2dd93e=_0x3f0b99,_0x3c0042=document[_0x2dd93e(0x8b1)+_0x2dd93e(0xaf8)+'ent'](_0x32d56d);if(_0x5bdb0c)_0x3c0042[_0x2dd93e(0xe1b)+'Name']=_0x5bdb0c;if(_0x50b689!=null)_0x3c0042['inner'+_0x2dd93e(0xe0f)]=_0x50b689;return _0x3c0042;}function _0x478086(_0x35fe83,_0x2ad5aa){var _0x305fb2=_0x3f0b99,_0x380603=_0xcb9baa(_0x2fd94f[_0x305fb2(0xaae)],'sk-ca'+'rd'+(_0x2ad5aa?_0x305fb2(0x99b):'')),_0x18e7f3=_0x2fd94f[_0x305fb2(0x72e)](_0xcb9baa,'div',_0x305fb2(0x848)+_0x305fb2(0x631)+'ad'),_0x561b4a=_0xcb9baa(_0x305fb2(0xa60),_0x305fb2(0x848)+'rd-ti'+_0x305fb2(0x9b5),_0x2fd94f[_0x305fb2(0xced)](_0x2fd94f['GqkYs'](_0x2fd94f[_0x305fb2(0x741)],_0x35fe83),_0x2fd94f[_0x305fb2(0x5c6)]));_0x18e7f3['appen'+_0x305fb2(0xcc3)+'d'](_0x561b4a);var _0x47b877=_0x2fd94f[_0x305fb2(0xa16)](_0xcb9baa,_0x2fd94f[_0x305fb2(0xaae)],_0x2fd94f[_0x305fb2(0xb13)]);return _0x380603[_0x305fb2(0xd7e)+_0x305fb2(0xcc3)+'d'](_0x18e7f3),_0x380603[_0x305fb2(0xd7e)+'dChil'+'d'](_0x47b877),_0x380603['body']=_0x47b877,_0x380603['head']=_0x561b4a,_0x380603;}function _0x13cc82(_0x5319aa,_0x107e4a){var _0x188ac8=_0x3f0b99,_0x202d7d={'hcUaz':function(_0x5c4ce7,_0x3fa412){var _0x23ebef=_0x59a2;return _0x2fd94f[_0x23ebef(0xe6f)](_0x5c4ce7,_0x3fa412);},'QGJrj':'#ffb3'+'c7','NyNwS':function(_0x5465e3,_0x42b549){return _0x2fd94f['UUyWu'](_0x5465e3,_0x42b549);},'Zrseu':function(_0x29e0ff,_0x360071){return _0x29e0ff+_0x360071;},'yHarU':_0x2fd94f[_0x188ac8(0x1a4)],'gznor':_0x188ac8(0x347)+'Tampe'+'rmonk'+_0x188ac8(0xcd2)+'\x20not\x20'+_0x188ac8(0xaf4)+_0x188ac8(0x699)+_0x188ac8(0x215)+'the\x20c'+_0x188ac8(0x37a)+'origi'+_0x188ac8(0x895)+_0x188ac8(0x189),'KUnaV':'\x20\x203.\x20'+'Both\x20'+'sakur'+_0x188ac8(0xb80)+_0x188ac8(0x9b8)+'z.use'+'r.js\x20'+'AND\x20t'+_0x188ac8(0x87e)+_0x188ac8(0xbde)+'g\x20scr'+'ipt\x20a'+_0x188ac8(0xddb),'LaBmQ':_0x2fd94f[_0x188ac8(0x8b4)],'tvQth':function(_0x1f74ad,_0x5a3609){return _0x1f74ad!==_0x5a3609;},'WnhSP':function(_0x21896f){return _0x21896f();}},_0x477eec=_0x2fd94f[_0x188ac8(0xddf)](_0xcb9baa,'butto'+'n',_0x188ac8(0x9ce)+'itch');_0x477eec[_0x188ac8(0x6b6)]='butto'+'n';var _0x43cdf2=function(){var _0x1763b0=_0x188ac8,_0x2096d6={'TnBkM':'none'};if(_0x1763b0(0x52f)!==_0x2fd94f[_0x1763b0(0xcbd)]){var _0x5666f3=_0x427c5e;if(_0x5666f3&&_0x5666f3['el'])_0x5666f3['el'][_0x1763b0(0x76c)]['displ'+'ay']=_0x1caf0f?'':_0x2096d6['TnBkM'];var _0x3dfb93=_0x27bbac;if(_0x3dfb93&&_0x3dfb93['cv'])_0x3dfb93['cv'][_0x1763b0(0x76c)][_0x1763b0(0x2b3)+'ay']=_0x1d8e4d?'':'none';}else _0x477eec['setAt'+_0x1763b0(0x4c7)+'te']('aria-'+'check'+'ed',_0x2fd94f[_0x1763b0(0x56c)](_0x5319aa)?_0x1763b0(0x9f5):'false');};return _0x477eec[_0x188ac8(0x9bb)+'ck']=function(){var _0x22d862=_0x188ac8;if(_0x202d7d[_0x22d862(0xd0c)](_0x22d862(0x92b),_0x22d862(0x92b))){if(_0x2a554c)return;if(_0x202d7d[_0x22d862(0x388)](!_0x14998b,!_0xd5e316))return;_0x2b92b2['textC'+_0x22d862(0xb09)+'t']=_0x22d862(0xdee)+_0x22d862(0x6a0)+_0x22d862(0x8a7)+_0x22d862(0x586)+_0x22d862(0x5c8)+'me\x20no'+_0x22d862(0x516)+_0x22d862(0x8be)+'?',_0x215d02[_0x22d862(0x76c)]['color']=_0x202d7d[_0x22d862(0x4ed)],_0x4a3335[_0x22d862(0xe45)+'onten'+'t']=_0x202d7d['NyNwS'](_0x202d7d[_0x22d862(0xd5e)](_0x202d7d[_0x22d862(0x4ef)](_0x202d7d['Zrseu']('The\x20g'+'ame\x20f'+_0x22d862(0x75e)+_0x22d862(0x1ce)+'\x20post'+_0x22d862(0x97e)+_0x22d862(0xcf5)+'e\x20rep'+'ort.\x0a'+'\x0a'+_0x202d7d[_0x22d862(0x5c9)]+(_0x22d862(0x27c)+'e\x20rem'+_0x22d862(0x251)+'g\x20sus'+'pects'+'\x20are:'+'\x0a\x0a'),_0x202d7d[_0x22d862(0x917)]),'\x20\x202.\x20'+_0x22d862(0x448)+'age\x20h'+'as\x20no'+_0x22d862(0xc90)+_0x22d862(0x33a)+'oaded'+'\x20sinc'+'e\x20ins'+_0x22d862(0x494)+'ng.\x0a'),_0x202d7d['KUnaV'])+(_0x22d862(0x6a7)+_0x22d862(0x8e8)+_0x22d862(0x5b5)+'—\x20two'+_0x22d862(0xb92)+_0x22d862(0x3b3)+_0x22d862(0x67a)+_0x22d862(0x39b)+'\x20patc'+_0x22d862(0xb4d)+_0x22d862(0x809)+'bly.i'+'nstan'+_0x22d862(0x8c7)+'.\x0a\x0a'),_0x202d7d[_0x22d862(0x4de)]);}else _0x107e4a(!_0x5319aa()),_0x202d7d['WnhSP'](_0x43cdf2);},_0x43cdf2(),_0x477eec['sync']=_0x43cdf2,_0x58443a[_0x188ac8(0xa91)]['push'](_0x43cdf2),_0x477eec;}function _0x18231f(_0x18b17b,_0x299791,_0x28a452,_0x16d140,_0x3e9341){var _0x28fbbd=_0x3f0b99,_0x56d7b0=_0x2fd94f['ChTRo'](_0xcb9baa,'div','sk-ra'+_0x28fbbd(0xd9b)),_0x3af7aa=document['creat'+_0x28fbbd(0xaf8)+'ent']('input');_0x3af7aa['type']=_0x28fbbd(0x3b0),_0x3af7aa[_0x28fbbd(0xe1b)+'Name']=_0x2fd94f[_0x28fbbd(0xdc0)],_0x3af7aa[_0x28fbbd(0xdfd)]=String(_0x18b17b),_0x3af7aa[_0x28fbbd(0x81d)]=String(_0x299791),_0x3af7aa[_0x28fbbd(0x8ad)]=_0x2fd94f[_0x28fbbd(0xa1b)](String,_0x28a452);var _0x30cb5e=_0x2fd94f[_0x28fbbd(0xdf1)](_0xcb9baa,_0x28fbbd(0xcc7),_0x2fd94f['QQWoc']),_0x119bff=function(){var _0x48d2e7=_0x28fbbd;if(_0x2fd94f['jFjhE']===_0x48d2e7(0x26e)){var _0x246e33=_0x2fd94f[_0x48d2e7(0x98d)](_0x16d140);_0x3af7aa['value']=_0x2fd94f['Xqmmh'](String,_0x246e33),_0x30cb5e['textC'+'onten'+'t']=_0x2fd94f['saYTc'](_0x2fd94f['sLdpf'](_0x28a452,-0x1a8b+-0x852+-0x22de*-0x1)?_0x246e33[_0x48d2e7(0x299)+'ed'](0x805+0x9*0x39f+0xbd*-0x37):_0x2fd94f['KMbmr'](String,Math[_0x48d2e7(0x632)](_0x246e33)),_0x3af7aa['datas'+'et']['unit']||'');var _0x571873=_0x2fd94f['usmTX']((_0x246e33-_0x18b17b)/(_0x299791-_0x18b17b),0x7f*0x4d+-0xb*0xcd+-0x1d00);_0x3af7aa[_0x48d2e7(0x76c)]['setPr'+_0x48d2e7(0x29f)+'y'](_0x2fd94f[_0x48d2e7(0xca0)],_0x2fd94f[_0x48d2e7(0x1e9)](_0x571873,'%'));}else return _0x2aba64(_0x4eceb9);};return _0x3af7aa[_0x28fbbd(0x21a)+'ut']=function(){_0x3e9341(parseFloat(_0x3af7aa['value'])||_0x18b17b),_0x119bff();},_0x56d7b0[_0x28fbbd(0xd7e)+_0x28fbbd(0xcc3)+'d'](_0x3af7aa),_0x56d7b0['appen'+'dChil'+'d'](_0x30cb5e),_0x56d7b0[_0x28fbbd(0x67d)]=_0x119bff,_0x56d7b0['input']=_0x3af7aa,_0x2fd94f[_0x28fbbd(0xbdb)](_0x119bff),_0x58443a[_0x28fbbd(0xa91)][_0x28fbbd(0x1ea)](_0x119bff),_0x56d7b0;}function _0x409134(_0x5e8841,_0x213066){var _0x5ea916=_0x3f0b99;if(_0x5ea916(0xadb)===_0x5ea916(0xd41)){var _0x2d7a2a=_0x35d360[_0x11f529],_0x4cbbd6=typeof _0xdde588[_0x2d7a2a];_0x561f4f[_0x2d7a2a]=_0x4cbbd6==='undef'+_0x5ea916(0x9d3)?'undef'+'ined':_0x4cbbd6;}else{var _0x19b66b=_0xcb9baa('div','sk-ct'+'l'),_0x52c4c4=_0xcb9baa('div',_0x5ea916(0xb25)+_0x5ea916(0x345),_0x2fd94f[_0x5ea916(0x7b6)](_0x5e8841,_0x213066?_0x2fd94f['sEpdu'](_0x2fd94f[_0x5ea916(0x2cd)](_0x5ea916(0x858)+'\x20clas'+_0x5ea916(0x2ef)+_0x5ea916(0xe00)+'\x27>',_0x213066),'</spa'+'n>'):''));return _0x19b66b[_0x5ea916(0xd7e)+'dChil'+'d'](_0x52c4c4),_0x19b66b;}}function _0x3b0a41(_0x14237f,_0x11dc1d,_0x1cda01,_0x5b5174){var _0x1d00eb=_0x3f0b99,_0x275e2c={'pYiqP':function(_0x32f270,_0xb09b33){var _0x34be0c=_0x59a2;return _0x2fd94f[_0x34be0c(0x2ec)](_0x32f270,_0xb09b33);}};if(_0x1d00eb(0x68a)===_0x2fd94f[_0x1d00eb(0xb61)]){var _0x39642c=_0x3a9841[_0xa105f9],_0x320e6d=_0x2b83e7(_0x9db7aa,_0x29ff87,_0x39642c[_0x1d00eb(0x66f)]);if(!_0x320e6d)return null;var _0x464665=new _0x386b61(_0x320e6d['buffe'+'r'],_0x320e6d[_0x1d00eb(0xc7c)+'ffset'],_0x320e6d[_0x1d00eb(0x701)+_0x1d00eb(0xa59)]),_0x5a2f26=_0x464665[_0x1d00eb(0x339)+_0x1d00eb(0xd42)](_0x39642c['key'],!![]),_0x5143fc=_0x464665[_0x1d00eb(0x339)+_0x1d00eb(0xd42)](_0x39642c['hidde'+'n'],!![]),_0x3bf37c=_0x2fd94f['wRixq'](_0x464665[_0x1d00eb(0x19a)+_0x1d00eb(0xb9b)](_0x39642c['inite'+'d']),0xdd3*-0x1+0x2517+-0x1743),_0x177d2c=_0x2fd94f[_0x1d00eb(0x992)](_0x204cb6,_0x1d00eb(0xe65))?_0x464665['getFl'+_0x1d00eb(0x53b)](_0x39642c['fake'],!![]):_0x7ddfd7===_0x2fd94f[_0x1d00eb(0xb16)]?_0x464665[_0x1d00eb(0x339)+_0x1d00eb(0xd42)](_0x39642c['fake'],!![]):_0x464665['getUi'+_0x1d00eb(0xb9b)](_0x39642c['fake']),_0x29c64e=_0x464665[_0x1d00eb(0x19a)+_0x1d00eb(0xb9b)](_0x39642c[_0x1d00eb(0xe6a)+'e'])&-0xd76+-0x7f*0x1a+0x1a5d;return{'keyAtOffset0':_0x5a2f26,'hidden':_0x5143fc,'inited':_0x3bf37c,'fake':_0x177d2c,'act':_0x29c64e,'hex':_0x2fd94f[_0x1d00eb(0x46e)](_0x479b2f,_0x320e6d),'alt':_0x40115c==='obfI'?_0x2fd94f[_0x1d00eb(0xb44)](_0x5143fc,_0x177d2c|-0x1011+-0x22d*0x6+0x1d1f*0x1):null};}else{var _0x59febf=_0x14237f&&_0x14237f[_0x1d00eb(0x200)+'y']&&_0x14237f['surve'+'y'][_0x11dc1d];if(!_0x59febf)return'-';for(var _0x453a87=-0x1a23+0x26be+-0xc9b*0x1;_0x2fd94f['GpEfk'](_0x453a87,_0x59febf['lengt'+'h']);_0x453a87++){if(_0x2fd94f['WhFxC'](_0x1d00eb(0x707),'cVqUN')){if(_0x2fd94f[_0x1d00eb(0xaee)](_0x59febf[_0x453a87]['o'],_0x1cda01)){if(_0x2fd94f[_0x1d00eb(0x628)](_0x5b5174,'v3')){var _0x4301e3=_0x59febf[_0x453a87]['xyz']||[_0x59febf[_0x453a87]['v'],0x5*-0x114+0x22*0x22+-0xe*-0x10,-0x16c*0xd+-0xc*-0x268+-0xa64];return _0x4301e3[_0x1d00eb(0x6f5)](function(_0x758c44){var _0x526d62=_0x1d00eb;return _0x275e2c['pYiqP'](Math[_0x526d62(0x632)](_0x758c44*(0x1*0x209c+-0x19*-0x6b+-0x3*0xe39)),0x1*-0xc86+0xcf5+-0xb*0x1);})['join']('\x20\x20');}var _0x300a91=_0x59febf[_0x453a87]['v'];return typeof _0x300a91===_0x2fd94f[_0x1d00eb(0xe34)]?Math[_0x1d00eb(0x632)](_0x300a91*(-0xca6+-0x1*0xaf1+0x1b7f))/(0x1*-0x1295+-0x1cad+0x332a):String(_0x300a91);}}else{var _0x4da561=new _0xa30d69(_0x533b59);for(var _0xb2d45a=0x4*0x49c+0x1*0x391+0x1601*-0x1;_0xb2d45a<_0x27593a;_0xb2d45a++)_0x4da561[_0xb2d45a]=_0x2fd519['getUi'+'nt8'](_0x3293dc+_0x177fb3+_0xb2d45a);return _0x5908e5['ok']++,_0x4da561;}}return'-';}}function _0x4ae862(_0x124a05){var _0x43437a=_0x3f0b99,_0x922e10={'hVapB':function(_0x57f5d6,_0x3d410a,_0x1c5ffc){return _0x2fd94f['hhSsG'](_0x57f5d6,_0x3d410a,_0x1c5ffc);},'jjggI':function(_0xaa1361,_0x8ac78c){return _0xaa1361+_0x8ac78c;},'vtMeM':function(_0x2e4dac,_0x34d5c8){return _0x2fd94f['zmFyM'](_0x2e4dac,_0x34d5c8);},'bcJeW':'\x20fiel'+'ds\x20·\x20','aWpGd':'Elfyx','KoBUV':function(_0x56aea9,_0x3e3e99){var _0x3e8401=_0x59a2;return _0x2fd94f[_0x3e8401(0x5af)](_0x56aea9,_0x3e3e99);},'BuChk':_0x2fd94f[_0x43437a(0x30e)],'IbqPL':_0x43437a(0x761),'jNrnI':function(_0xed041f,_0x3f85ef){var _0x14c6a2=_0x43437a;return _0x2fd94f[_0x14c6a2(0x533)](_0xed041f,_0x3f85ef);},'ptFbh':_0x43437a(0x35b),'nnPeA':_0x43437a(0x3fa),'BAOuj':function(_0x58d8c5,_0x45e9b3,_0x1c00f7){var _0x42d8bf=_0x43437a;return _0x2fd94f[_0x42d8bf(0x3a1)](_0x58d8c5,_0x45e9b3,_0x1c00f7);},'HDjJF':_0x2fd94f[_0x43437a(0x4b9)],'UnmMR':function(_0x1d62ac,_0x4eeef9){return _0x1d62ac!==_0x4eeef9;},'ebnJl':function(_0x492318){var _0x45ce7e=_0x43437a;return _0x2fd94f[_0x45ce7e(0x56c)](_0x492318);},'GgSwy':function(_0x36c899,_0xa77692,_0x383cce){return _0x2fd94f['uyahe'](_0x36c899,_0xa77692,_0x383cce);},'ovywo':_0x2fd94f['AcFFT']};if(_0x43437a(0x8cc)!==_0x2fd94f[_0x43437a(0x982)])_0x5d9f7c=[];else{var _0x5912bc=_0x7f8463,_0x419439=[],_0xce264c;if(_0x124a05===_0x2fd94f['KmBiZ']){var _0x357ebc=_0x2fd94f[_0x43437a(0x2e1)](_0x478086,_0x2fd94f[_0x43437a(0xb8a)],_0x30cca2['on']),_0x450149=_0xcb9baa('div',_0x43437a(0xad0)+_0x43437a(0x3dd),_0x30cca2['on']?_0x2fd94f[_0x43437a(0xd2e)](_0x2fd94f[_0x43437a(0xc16)](_0x2fd94f['DSLfB']('x',_0x30cca2[_0x43437a(0x891)+'r'][_0x43437a(0x299)+'ed'](-0x86*0x47+-0x11ac+0x8b*0x65)),_0x2fd94f[_0x43437a(0x236)])+_0x34cdf0['lengt'+'h'],'\x20fiel'+_0x43437a(0x1ae))+_0x578a3b+_0x2fd94f['lqlYW']:_0x2fd94f['VcLfp']),_0x2e2822=_0x2fd94f[_0x43437a(0xaf6)](_0x409134,_0x43437a(0xd28)+'ed');_0x2e2822['appen'+_0x43437a(0xcc3)+'d'](_0x13cc82(function(){return _0x30cca2['on'];},function(_0x15cd71){var _0xc23f27=_0x43437a;_0x922e10['hVapB'](_0x453f04,_0x15cd71,_0x30cca2[_0xc23f27(0x891)+'r']),_0x450149['textC'+'onten'+'t']=_0x15cd71?_0x922e10[_0xc23f27(0xc0d)](_0x922e10['vtMeM']('x',_0x30cca2[_0xc23f27(0x891)+'r']['toFix'+'ed'](0x25ad+0x1*-0x121f+0x2cb*-0x7)),'\x20on\x20')+_0x34cdf0[_0xc23f27(0x35a)+'h']+_0x922e10['bcJeW']+_0x578a3b+(_0xc23f27(0xde0)+'es'):'Multi'+'plies'+_0xc23f27(0x8f9)+'ment-'+_0xc23f27(0x9e0)+_0xc23f27(0x5f4)+_0xc23f27(0xa9b)+_0xc23f27(0xd5f)+'eight'+_0xc23f27(0x552)+_0xc23f27(0xb2c)+_0xc23f27(0x374)+_0xc23f27(0x704)+_0xc23f27(0xdbd)+_0xc23f27(0x799);})),_0x357ebc[_0x43437a(0x58c)][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x450149),_0x357ebc['body'][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x2e2822);var _0xa28bcf=_0x18231f(-0x2*-0xdc7+-0xbee+-0xf9f*0x1,0x3*-0x8ee+-0x6*-0x4c5+0x1*-0x1cf,-0x2*-0x1ea+0x24d0*-0x1+0x107e*0x2+0.5,function(){var _0xb0c709=_0x43437a;return _0x30cca2[_0xb0c709(0x891)+'r'];},function(_0x5e0625){var _0x260057=_0x43437a;if('mQwXw'!==_0x922e10[_0x260057(0xbf4)])_0x453f04(_0x30cca2['on'],_0x5e0625);else{var _0x250905='';for(var _0x3231ac=-0x1867+-0x5*0x24e+-0x23ed*-0x1;_0x3231ac<_0x297d86[_0x260057(0x35a)+'h'];_0x3231ac++){var _0x3b43e8=_0x9750d3[_0x3231ac][_0x260057(0x7e7)+_0x260057(0xa00)](0x1713+0x6d*0x1+-0x1770);_0x250905+=(_0x3b43e8['lengt'+'h']<-0xe7c+0x23*-0xf2+0x2f94?'0':'')+_0x3b43e8;}return _0x250905;}});_0xa28bcf['input'][_0x43437a(0xc23)+'et']['unit']='x';var _0x4c71c0=_0x2fd94f['VwGeu'](_0x409134,_0x43437a(0x73a)+_0x43437a(0xd8d),_0x43437a(0x32c)+_0x43437a(0x53c)+'so\x20st'+'ep\x20th'+'is');_0x4c71c0[_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0xa28bcf),_0x357ebc[_0x43437a(0x58c)][_0x43437a(0xd7e)+'dChil'+'d'](_0x4c71c0);if(_0x4f19c5[_0x43437a(0x35a)+'h']){var _0x57a82c=_0x2fd94f['tvmnP'](_0xcb9baa,_0x2fd94f['tZWTK'],_0x2fd94f['AzRwo'],_0x43437a(0xb42)+_0x43437a(0x6ae)+_0x4f19c5[_0x43437a(0x257)](-0x1055+-0xdb7+0x4*0x783,-0x32*0x2c+0x1cc6+-0x142a)[_0x43437a(0x6f5)](function(_0x4067d1){var _0x118c36=_0x43437a;return _0x2fd94f['lKYyi']('0x'+(_0x2fd94f['hdvkk'](_0x4067d1['o'],0xc1*0x25+0x1*-0x587+-0x165e)?'?':_0x4067d1['o'][_0x118c36(0x7e7)+'ing'](-0x2596+0x1fde+0x5c8))+'\x20('+_0x4067d1[_0x118c36(0xbec)],')');})[_0x43437a(0x958)]('\x20\x20'));_0x357ebc[_0x43437a(0x58c)]['appen'+_0x43437a(0xcc3)+'d'](_0x57a82c);}_0x419439[_0x43437a(0x1ea)](_0x357ebc);var _0x382180=_0x2fd94f[_0x43437a(0x69a)](_0x478086,_0x43437a(0x37b)+_0x43437a(0xe47)),_0x23fdbe=_0xcb9baa(_0x2fd94f[_0x43437a(0xa52)],_0x43437a(0x49e)+'n',_0x2fd94f[_0x43437a(0xab2)]);_0x23fdbe['type']=_0x2fd94f['wIEFI'],_0x23fdbe[_0x43437a(0x9bb)+'ck']=function(){_0x922e10['KoBUV'](_0xb64e92,_0x922e10['BuChk']);},_0x382180['body'][_0x43437a(0xd7e)+'dChil'+'d'](_0x2fd94f[_0x43437a(0xaf0)](_0xcb9baa,_0x43437a(0xa60),_0x2fd94f['apKkv'],_0x2fd94f['QjZIC'])),_0x382180['body']['appen'+_0x43437a(0xcc3)+'d'](_0x23fdbe),_0x419439['push'](_0x382180);}if(_0x124a05===_0x2fd94f[_0x43437a(0x41f)]){var _0x9a59ae=_0x478086('Radar',_0x23df0c['on']),_0x60bbbd=_0x409134(_0x2fd94f['IFUjD']);_0x60bbbd[_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x13cc82(function(){return _0x23df0c['on'];},function(_0x147e3e){var _0xe76f9f=_0x43437a,_0x1ccb76={'BpNxh':_0x922e10[_0xe76f9f(0xcf1)]};if('wqzao'==='Yawyg'){_0x211dbf['on']=!!_0x50bc3d,_0x3860fe[_0xe76f9f(0x664)]=!!_0x34b6ff,_0x35f677();try{var _0x5ce448=_0x362efe();if(_0x5ce448&&_0x5ce448['el'])_0x5ce448['el'][_0xe76f9f(0x76c)]['displ'+'ay']=_0xcd712a['on']?'':_0xe76f9f(0x761);var _0x157c02=_0x5b9009;if(_0x157c02&&_0x157c02['cv'])_0x157c02['cv']['style'][_0xe76f9f(0x2b3)+'ay']=_0x53f5b9['on']&&_0x1ae6e6[_0xe76f9f(0x664)]?'':_0x1ccb76['BpNxh'];}catch(_0x225030){}}else _0x4dfd03(_0x147e3e,_0x23df0c[_0xe76f9f(0x664)]);})),_0x9a59ae['body'][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x2fd94f['Lwkxq'](_0xcb9baa,_0x2fd94f['tZWTK'],_0x43437a(0xad0)+_0x43437a(0x3dd),_0x2fd94f[_0x43437a(0x7a8)])),_0x9a59ae[_0x43437a(0x58c)][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x60bbbd);var _0x50ef44=_0x2fd94f['PGaSP'](_0x18231f,0x1565+0x1*0x96a+-0x7*0x461,0x1299+0xdd*-0x16+0x1*0x105,-0x1e2c+-0xc19+0x1*0x2a4f,function(){var _0xde0de0=_0x43437a;return _0x23df0c[_0xde0de0(0xcc7)];},function(_0x435462){var _0x1d4afa=_0x43437a;_0x23df0c[_0x1d4afa(0xcc7)]=_0x435462;});_0x50ef44[_0x43437a(0xd1f)]['datas'+'et']['unit']='m';var _0xca5e3c=_0x409134('Range','world'+_0x43437a(0xc94)+_0x43437a(0xd70)+'oss\x20t'+_0x43437a(0xe23)+_0x43437a(0xbe6));_0xca5e3c['appen'+'dChil'+'d'](_0x50ef44),_0x9a59ae[_0x43437a(0x58c)][_0x43437a(0xd7e)+'dChil'+'d'](_0xca5e3c),_0x419439[_0x43437a(0x1ea)](_0x9a59ae);var _0x5675ea=_0x2fd94f[_0x43437a(0x248)](_0x478086,_0x43437a(0x1dc),_0x23df0c[_0x43437a(0x664)]),_0x29f34f=_0x2fd94f[_0x43437a(0x5af)](_0x409134,'Enabl'+'ed');_0x29f34f['appen'+'dChil'+'d'](_0x13cc82(function(){var _0x20223f=_0x43437a;return _0x23df0c[_0x20223f(0x664)];},function(_0x1202ce){var _0x5b538a=_0x43437a,_0x3e450b={'chhnm':_0x5b538a(0x3a3)+_0x5b538a(0x9b9)+_0x5b538a(0x341)+'m','aFfyv':function(_0x234efc,_0x3a7ba6){return _0x234efc(_0x3a7ba6);}};if(_0x922e10[_0x5b538a(0xcd5)](_0x922e10[_0x5b538a(0xaca)],_0x922e10[_0x5b538a(0xb77)])){var _0x4ebcd8=('1|5|0'+_0x5b538a(0xb31)+'4')[_0x5b538a(0xae3)]('|'),_0x3c7aee=-0x174a+-0x2302*-0x1+-0xbb8;while(!![]){switch(_0x4ebcd8[_0x3c7aee++]){case'0':_0x1adc23['ok']=!![];continue;case'1':_0x3d7883['quat']=_0x31aac2;continue;case'2':_0x56181c[_0x5b538a(0x655)+'e']=_0x3e450b[_0x5b538a(0xbf3)];continue;case'3':_0x309398[_0x5b538a(0xbec)]='';continue;case'4':return _0x166501;case'5':_0x556633[_0x5b538a(0x2d8)]=_0x3e450b['aFfyv'](_0x44a2a8,_0x4c3497);continue;}break;}}else{if(_0x1202ce&&!_0x59c957()){_0x31a9f9();return;}_0x922e10[_0x5b538a(0x78a)](_0x4dfd03,!![],_0x1202ce);}}));var _0x338b4a=_0x5912bc&&_0x5912bc[_0x43437a(0xc86)+'s'];_0x5675ea['body'][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0xcb9baa(_0x43437a(0xa60),_0x2fd94f['apKkv'],_0x338b4a&&!_0x338b4a[_0x43437a(0x293)+_0x43437a(0xb51)]?_0x2fd94f[_0x43437a(0xcde)](_0x2fd94f[_0x43437a(0xbf5)](_0x43437a(0x5b0)+_0x43437a(0x8ca)+_0x43437a(0x94f),_0x338b4a[_0x43437a(0xbec)]||_0x43437a(0x91c)+'angle'+_0x43437a(0xe2d)+'denti'+_0x43437a(0x41c)),_0x43437a(0xcaa)+'ese\x20t'+_0x43437a(0x1f2)+'oats\x20'+'are\x20n'+'ot\x20pi'+_0x43437a(0x249)+_0x43437a(0x749)+'w.\x20Pr'+'ess\x20F'+'9,\x20tu'+'rn\x20ab'+_0x43437a(0x6b7)+'0°,\x20p'+_0x43437a(0x90e)+'F9.'):_0x338b4a&&!_0x338b4a['fovSa'+'ne']?_0x2fd94f['VkYQu']+Math[_0x43437a(0x632)](_0x338b4a[_0x43437a(0xc71)])+(_0x43437a(0x6df)+'tside'+_0x43437a(0x45c)+_0x43437a(0x768)+_0x43437a(0xb5e)+'\x20Rese'+'t\x20it\x20'+_0x43437a(0x68b)+'.'):_0x43437a(0x560)+'n-spa'+_0x43437a(0x826)+_0x43437a(0x302)+'The\x20f'+'ield\x20'+'of\x20vi'+_0x43437a(0xd13)+_0x43437a(0x5ef)+_0x43437a(0x480)+'ad\x20fr'+'om\x20th'+_0x43437a(0xe1a)+_0x43437a(0x2b9)+_0x43437a(0x7ea)+'\x20is\x20f'+'itted'+_0x43437a(0xc6a)+'ye.')),_0x5675ea[_0x43437a(0x58c)][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x29f34f);var _0x7293ba=_0x2fd94f[_0x43437a(0x26c)](_0x18231f,-0xc35+0xfdd+-0x36c,0x2537+-0xdde+-0x16d7,-0x21b3*-0x1+-0x1*-0x1767+-0x3918,function(){var _0xd4c2f0=_0x43437a;if(_0x2fd94f['DtmMj']!==_0xd4c2f0(0x486))return _0xabaa41[_0xd4c2f0(0xc71)];else{if(_0x2c0696===_0xd4c2f0(0x9e0)){_0x922e10['BAOuj'](_0x471eb7,_0x452152&&typeof _0x51cab5['on']===_0x922e10[_0xd4c2f0(0xd05)]?_0x487d01['on']:_0x2384c5['on'],_0x3f46f3&&_0x922e10['jNrnI'](typeof _0xbba75['facto'+'r'],_0xd4c2f0(0xa25)+'r')?_0x2a10be[_0xd4c2f0(0x891)+'r']:_0x168f7b[_0xd4c2f0(0x891)+'r']);return;}if(_0x922e10[_0xd4c2f0(0x9d1)](_0x2ba56e,_0xd4c2f0(0x1be)+_0xd4c2f0(0xcc9)))return;var _0x4965c1=_0x922e10['ebnJl'](_0x3868a2),_0x10e9c1=_0x922e10[_0xd4c2f0(0x2ab)](_0x553101,_0x4965c1),_0x461e4a=_0x338a43();for(var _0x32e122 in _0x461e4a)_0x10e9c1[_0x32e122]=_0x461e4a[_0x32e122];if(!_0x2ed509){_0x3d49f7=_0x10e9c1,_0x150ac8=[],_0x922e10[_0xd4c2f0(0xa17)](_0x1c4b2d,'repor'+'t',{'report':_0x3338e7()});return;}_0x3f146c=[];for(var _0x16d72c in _0x10e9c1){var _0xf71e83=_0x33f7bd[_0x16d72c],_0x155e65=_0x10e9c1[_0x16d72c];if(_0xf71e83!==_0x155e65)_0x431bf6[_0xd4c2f0(0x1ea)](_0x16d72c+':\x20'+_0xf71e83+_0xd4c2f0(0xd85)+_0x155e65);}_0x295600=_0x10e9c1,_0x351e8c(_0x922e10[_0xd4c2f0(0xe37)],{'report':_0x475382()});}},function(_0x59dffd){var _0x308a0a=_0x43437a;_0xabaa41[_0x308a0a(0xc71)]=_0x59dffd,_0x53d9a8();});_0x7293ba[_0x43437a(0xd1f)][_0x43437a(0xc23)+'et']['unit']='°';var _0x1fe215=_0x2fd94f[_0x43437a(0xddf)](_0x409134,_0x43437a(0x5ec)+'\x20of\x20v'+'iew',_0x2fd94f[_0x43437a(0x4d5)]);_0x1fe215['appen'+_0x43437a(0xcc3)+'d'](_0x7293ba);var _0x2ed67a=_0x409134(_0x2fd94f['dkhkL'],_0x2fd94f[_0x43437a(0x3f2)]),_0x33411c=_0xcb9baa('butto'+'n',_0x2fd94f[_0x43437a(0x1b8)],_0x43437a(0x93b));_0x33411c['addEv'+_0x43437a(0x7b8)+'stene'+'r'](_0x2fd94f[_0x43437a(0x870)],function(){var _0x56771c=_0x43437a;_0xabaa41['fov']=0x26b*-0xb+0xf02*0x2+-0x320,_0x53d9a8(),_0x59e071(_0x58443a[_0x56771c(0xc04)]);}),_0x2ed67a['appen'+'dChil'+'d'](_0x33411c),_0x5675ea['body'][_0x43437a(0xd7e)+'dChil'+'d'](_0x1fe215),_0x5675ea[_0x43437a(0x58c)][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x2ed67a);var _0x1e8704=_0x5912bc&&_0x5912bc['view'];_0x5675ea[_0x43437a(0x58c)][_0x43437a(0xd7e)+'dChil'+'d'](_0xcb9baa('div',_0x2fd94f['AzRwo'],_0x2fd94f[_0x43437a(0xd4b)]+(_0x1e8704?_0x1e8704[_0x43437a(0x6f3)+_0x43437a(0x54b)]?'Mouse'+'Look\x20'+_0x1e8704[_0x43437a(0x6f3)+'Look']+(_0x1e8704[_0x43437a(0x3a3)+'a']?_0x2fd94f[_0x43437a(0x4f6)]('\x20\x20cam'+'era\x20',_0x1e8704['camer'+'a']):''):_0x43437a(0x8b8)+_0x43437a(0x817)+'ok\x20ye'+'t':_0x43437a(0x8b8)+_0x43437a(0x817)+'ok\x20ye'+'t')+(_0x338b4a?_0x2fd94f['yVbBI']('\x0a',_0x338b4a[_0x43437a(0x655)+'e']&&_0x338b4a['sourc'+'e'][_0x43437a(0xaa9)+'Of'](_0x43437a(0x328)+_0x43437a(0x350)+'r')===0xb21+-0x24b3+0x1992?_0x2fd94f[_0x43437a(0x232)](_0x2fd94f['Fetqq'](_0x2fd94f[_0x43437a(0x6c0)](_0x2fd94f['oBITi'],_0x338b4a[_0x43437a(0x655)+'e'][_0x43437a(0x257)](0x158f+0x1386+-0x290a)),_0x43437a(0x73b)+'\x20\x20')+Math[_0x43437a(0x632)](_0x338b4a[_0x43437a(0xdc4)+'w']),_0x43437a(0x8d0)+'h\x20')+Math[_0x43437a(0x632)](_0x338b4a[_0x43437a(0x82c)+'tch']):_0x338b4a[_0x43437a(0x655)+'e']===_0x43437a(0x770)+'r'?_0x2fd94f['xNfHR'](_0x2fd94f['crVYN'](_0x2fd94f[_0x43437a(0x2b7)](_0x2fd94f[_0x43437a(0x99c)](_0x2fd94f[_0x43437a(0x2b7)](_0x43437a(0xbd3)+_0x43437a(0x417)+_0x43437a(0xda0)+'Look\x20'+_0x43437a(0x770)+_0x43437a(0x3e4)+_0x43437a(0x4ee)+_0x338b4a['yawAt']+'\x20=\x20',Math['round'](_0x338b4a[_0x43437a(0xdc4)+'w'])),_0x2fd94f[_0x43437a(0x551)]),_0x338b4a[_0x43437a(0xb40)+'At']),_0x43437a(0x63e)),Math[_0x43437a(0x632)](_0x338b4a['rawPi'+'tch'])):'GUESS'+_0x43437a(0xd4c)+_0x43437a(0x386)+'truct'+_0x43437a(0x574)+'ets\x20+'+_0x43437a(0xdf4)+_0x43437a(0xb01)+'0x1C\x0a'+_0x43437a(0x3ba)+_0x43437a(0x435)+_0x43437a(0x8b9)+_0x43437a(0x23b)+_0x43437a(0x59b)+'fired'+_0x43437a(0x881)):'')+(_0x338b4a&&_0x338b4a['viewH'+_0x43437a(0xdcf)]&&_0x338b4a[_0x43437a(0x6a3)+_0x43437a(0xdcf)][_0x43437a(0x4d1)+'ed']===0x4*-0x58d+0x13ba+0x27a&&_0x2fd94f['uISqL'](_0x338b4a['viewH'+_0x43437a(0xdcf)][_0x43437a(0xa78)],0x9a+0x261f+-0x26b9)?_0x2fd94f[_0x43437a(0xced)](_0x2fd94f['yquus'](_0x2fd94f[_0x43437a(0x31f)](_0x43437a(0xacb)+'s\x20reg'+_0x43437a(0x73e)+'ed\x20bu'+'t\x20non'+'e\x20app'+'lied\x20'+'(',_0x338b4a['viewH'+'ooks']['resol'+'ved']),'/')+_0x338b4a['viewH'+_0x43437a(0xdcf)][_0x43437a(0xa78)],_0x43437a(0xcf2)+_0x43437a(0x509)):_0x338b4a&&_0x338b4a['viewH'+_0x43437a(0xdcf)]&&_0x338b4a['viewH'+_0x43437a(0xdcf)][_0x43437a(0xa78)]===0x23f1+0x4c*-0x72+-0x219?_0x2fd94f[_0x43437a(0x89f)](_0x43437a(0x44d)+'\x20hook'+'s\x20wer'+'e\x20nev'+_0x43437a(0xc24)+_0x43437a(0x70f)+_0x43437a(0x99e)+_0x338b4a['viewH'+_0x43437a(0xdcf)]['error'+'Count'],_0x43437a(0x748)+_0x43437a(0x28f)):'')+(_0x2a3afb?_0x43437a(0x275)+'ared\x20'+_0x43437a(0x60d)+'le\x20sa'+'ved\x20c'+'orrec'+_0x43437a(0x722):''))),_0x419439['push'](_0x5675ea);}if(_0x2fd94f['QHMDV'](_0x124a05,'value'+'s')){if(_0x2fd94f[_0x43437a(0x613)](_0x2fd94f[_0x43437a(0x4f2)],_0x43437a(0x3a0))){if(_0xe2ae0a['el'])_0x111651['el']['style']['displ'+'ay']='none';return;}else{var _0x2fc4d2=(_0x43437a(0xe21)+'|0|5|'+'2')[_0x43437a(0xae3)]('|'),_0x505d88=-0x1553+-0x2567+0x3aba;while(!![]){switch(_0x2fc4d2[_0x505d88++]){case'0':var _0x289c20=[[_0x2fd94f['vwuzE'],_0x5912bc&&_0x5912bc[_0x43437a(0xe67)]&&_0x5912bc[_0x43437a(0xe67)]['posAt']?'FPSco'+'ntrol'+'ler+'+_0x5912bc[_0x43437a(0xe67)][_0x43437a(0xc5f)]:'FPSco'+'ntrol'+_0x43437a(0x62d),_0x5912bc&&_0x5912bc[_0x43437a(0xe67)]&&_0x5912bc[_0x43437a(0xe67)][_0x43437a(0x364)]?_0x5912bc['local']['feet'][_0x43437a(0x6f5)](function(_0xc021ba){var _0x3570c9=_0x43437a;return _0x2fd94f[_0x3570c9(0x2ec)](Math['round'](_0xc021ba*(-0x57a*-0x1+0x836*-0x4+0x1bc2)),0x1b7f+-0x7*0x1c5+-0xeb8);})[_0x43437a(0x958)]('\x20\x20'):'-'],[_0x2fd94f[_0x43437a(0x42c)],'+'+_0x589469+'m',_0x5912bc&&_0x5912bc['local']&&_0x5912bc[_0x43437a(0xe67)]['eye']?_0x5912bc[_0x43437a(0xe67)][_0x43437a(0x77f)]['map'](function(_0x17257d){return Math['round'](_0x17257d*(-0x2548+-0x6dd*-0x5+0x35b))/(0x703*-0x5+-0x24a8+0x481b);})['join']('\x20\x20'):'-'],[_0x2fd94f[_0x43437a(0x677)],'0x10',_0x3b0a41(_0x5912bc,'FPSco'+'ntrol'+'ler',-0x1*-0x469+-0x1d15+0x18bc)],[_0x43437a(0x7d1)+_0x43437a(0xa5b)+'ed',_0x2fd94f['WuaVB'],_0x3b0a41(_0x5912bc,'FPSco'+_0x43437a(0xbcb)+_0x43437a(0x62d),-0x8f1+-0x26b8+0x5*0x995)],[_0x2fd94f[_0x43437a(0x8a0)],'0x11C',_0x3b0a41(_0x5912bc,_0x2fd94f[_0x43437a(0x8d3)],0x2344+-0x22b2+0x8a)],['Healt'+'h',_0x2fd94f[_0x43437a(0x18c)],_0x3b0a41(_0x5912bc,'Healt'+'hScri'+'pt',0x14a*-0x17+0x2443+-0x1*0x5dd)]];continue;case'1':var _0x23b65f=[['Build',_0x43437a(0x607)+'ON',_0x5912bc?_0x5912bc['versi'+'on']:'-'],['Hooks',_0x2fd94f['GwnRC'],_0x5912bc?_0x2fd94f[_0x43437a(0xb65)](_0x5912bc['hooks'+_0x43437a(0x365)+'ed']+_0x43437a(0x8db),_0x5912bc[_0x43437a(0x8b9)+'Regis'+'tered'+_0x43437a(0x2fa)]):'-'],[_0x43437a(0xc07),_0x2fd94f['KXLtw'],_0x5912bc&&_0x5912bc[_0x43437a(0x6e0)+_0x43437a(0x469)]&&_0x5912bc[_0x43437a(0x6e0)+_0x43437a(0x469)]['captu'+_0x43437a(0xa24)]?Math['round'](_0x5912bc['wasmM'+_0x43437a(0x469)]['bytes']/(-0x7c6b8+0x189b63+-0xd4ab))+_0x2fd94f[_0x43437a(0x9ac)]+_0x5912bc[_0x43437a(0x6e0)+_0x43437a(0x469)][_0x43437a(0x532)]+'ms':'-'],[_0x2fd94f[_0x43437a(0x2d2)],_0x2fd94f[_0x43437a(0xe28)],_0x5912bc&&_0x5912bc['esp']?_0x2fd94f[_0x43437a(0x3b2)](String,_0x5912bc['esp'][_0x43437a(0x29e)+_0x43437a(0x419)+'t']):'-'],[_0x43437a(0x1c0)+'es','every'+'one\x20b'+'ut\x20yo'+'u',_0x5912bc&&_0x5912bc[_0x43437a(0xe05)]?_0x2fd94f[_0x43437a(0x69a)](String,_0x5912bc[_0x43437a(0xe05)][_0x43437a(0x28a)+_0x43437a(0x7a0)]):'-'],[_0x43437a(0x29b)+'a',_0x43437a(0xba9)+_0x43437a(0x3f3)+_0x43437a(0x8f0)+'nager',_0x5912bc&&_0x5912bc['esp']&&_0x5912bc['esp']['camer'+'a']?_0x5912bc[_0x43437a(0xe05)]['camer'+'a']+'\x20('+_0x5912bc[_0x43437a(0xe05)][_0x43437a(0x3a3)+_0x43437a(0xd55)]+')':'-']];continue;case'2':_0x419439[_0x43437a(0x1ea)](_0x3eaba2);continue;case'3':var _0x3eaba2=_0x2fd94f[_0x43437a(0x503)](_0x478086,'Playe'+'r',![]);continue;case'4':for(_0xce264c=0x250*-0xf+-0x6*-0x2c5+0x1212;_0x2fd94f[_0x43437a(0xc2c)](_0xce264c,_0x23b65f[_0x43437a(0x35a)+'h']);_0xce264c++){var _0x3ad072=(_0x43437a(0x250)+_0x43437a(0xd75)+_0x43437a(0xd64)+_0x43437a(0x836)+'|11|1')[_0x43437a(0xae3)]('|'),_0x340c01=0x6b+-0xa83+0x11*0x98;while(!![]){switch(_0x3ad072[_0x340c01++]){case'0':_0x6b1aa9[_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0x538ca6);continue;case'1':_0x919adc[_0x43437a(0x58c)]['lastC'+_0x43437a(0x1a5)]['sp']=_0x538ca6;continue;case'2':!_0x919adc&&(_0x919adc=_0x478086('Sessi'+'on',![]),_0x419439['push'](_0x919adc));continue;case'3':_0x538ca6[_0x43437a(0xe45)+_0x43437a(0xb09)+'t']=String(_0x23b65f[_0xce264c][0x3b4+-0x1*-0x20f2+-0x8c*0x43]);continue;case'4':_0x538ca6[_0x43437a(0x76c)]['flex']='1';continue;case'5':var _0x919adc=_0x419439[_0x43437a(0x35a)+'h']?_0x419439[_0x419439['lengt'+'h']-(0x172f+-0x224e+-0x4*-0x2c8)]:null;continue;case'6':var _0x6b1aa9=_0x409134(_0x23b65f[_0xce264c][-0x69b+-0x95*0x22+-0xe9*-0x1d]);continue;case'7':_0x538ca6['datas'+'et']['k']=_0x23b65f[_0xce264c][-0x1bc2*0x1+-0x162e*-0x1+-0x595*-0x1];continue;case'8':var _0x538ca6=_0x2fd94f['ELAbJ'](_0xcb9baa,_0x43437a(0xcc7),_0x43437a(0x9cc)+'l');continue;case'9':_0x538ca6[_0x43437a(0x76c)][_0x43437a(0x92f)+'lign']=_0x43437a(0x3f4);continue;case'10':_0x538ca6[_0x43437a(0x76c)]['minWi'+'dth']='0';continue;case'11':_0x919adc['body'][_0x43437a(0xd7e)+'dChil'+'d'](_0x6b1aa9);continue;}break;}}continue;case'5':for(_0xce264c=0x2*-0x1225+0x179*-0x2+0x36*0xba;_0xce264c<_0x289c20[_0x43437a(0x35a)+'h'];_0xce264c++){var _0x21a3c0=_0x2fd94f['GaPey'](_0x409134,_0x289c20[_0xce264c][-0x64d+-0xe84+0x14d1]),_0x2d8a26=_0xcb9baa('span',_0x43437a(0x9cc)+'l');_0x2d8a26['style']['minWi'+'dth']='0',_0x2d8a26['style'][_0x43437a(0xd67)]='1',_0x2d8a26[_0x43437a(0x76c)][_0x43437a(0x92f)+'lign']=_0x2fd94f[_0x43437a(0x7fa)],_0x2d8a26['textC'+'onten'+'t']=String(_0x289c20[_0xce264c][0x645+0x2*-0x1a6+0xfd*-0x3]),_0x2d8a26[_0x43437a(0xc23)+'et']['k']=_0x289c20[_0xce264c][-0x1cda+-0x138f+0x306a],_0x21a3c0[_0x43437a(0xd7e)+'dChil'+'d'](_0x2d8a26),_0x3eaba2[_0x43437a(0x58c)]['appen'+_0x43437a(0xcc3)+'d'](_0x21a3c0),_0x3eaba2[_0x43437a(0x58c)][_0x43437a(0x32b)+'hild']['sp']=_0x2d8a26;}continue;}break;}}}if(_0x124a05===_0x43437a(0x395)){var _0x32e65e=_0x478086('Diagn'+'ostic'+'s',![]),_0x57790b=_0x5912bc&&_0x5912bc[_0x43437a(0x9a9)+_0x43437a(0xe47)]&&_0x5912bc['warni'+_0x43437a(0xe47)][_0x43437a(0x35a)+'h']?_0x5912bc[_0x43437a(0x9a9)+'ngs'][_0x43437a(0x958)]('\x0a'):_0x43437a(0x304)+_0x43437a(0x658)+'s';_0x32e65e[_0x43437a(0x58c)]['appen'+'dChil'+'d'](_0x2fd94f[_0x43437a(0xe03)](_0xcb9baa,_0x43437a(0xa60),_0x2fd94f['zJRht'],_0x57790b)),_0x419439[_0x43437a(0x1ea)](_0x32e65e);var _0x180b9c=_0x2fd94f[_0x43437a(0xa16)](_0x478086,_0x43437a(0xd84)+'t',![]),_0x4f7916=_0xcb9baa(_0x2fd94f[_0x43437a(0xa52)],_0x2fd94f[_0x43437a(0x1b8)],_0x2fd94f[_0x43437a(0xc12)]);_0x4f7916['type']=_0x43437a(0xc54)+'n',_0x4f7916['oncli'+'ck']=function(){var _0x484793=_0x43437a;if(_0x2fd94f['LiLXP'](_0x484793(0x3d3),_0x2fd94f['drFKy']))try{var _0x834b71=_0x2fd94f['rDzdO'](_0x592969,'\x0a')+JSON[_0x484793(0x83e)+'gify'](_0x5912bc,null,-0xce1+0x19*-0x17+0x3*0x50b)+'\x0a'+_0x41a85d;if(navigator[_0x484793(0x6b9)+'oard']&&navigator[_0x484793(0x6b9)+'oard'][_0x484793(0x86c)+_0x484793(0xd74)])navigator['clipb'+_0x484793(0x1e3)][_0x484793(0x86c)+_0x484793(0xd74)](_0x834b71)[_0x484793(0xe44)](function(){var _0x3e403c=_0x484793;_0x4f7916[_0x3e403c(0xe45)+'onten'+'t']=_0x3e403c(0xd97)+'d';});else _0x4f7916['textC'+_0x484793(0xb09)+'t']=_0x2fd94f[_0x484793(0x6f8)];}catch(_0x300e83){_0x4f7916[_0x484793(0xe45)+_0x484793(0xb09)+'t']=_0x2fd94f['zMbgj'];}else return _0x372232['quat']=null,_0x42c584[_0x484793(0x2d8)]=null,_0x3e9fb0[_0x484793(0xdd9)]=null,_0x564110;},_0x180b9c[_0x43437a(0x58c)][_0x43437a(0xd7e)+_0x43437a(0xcc3)+'d'](_0xcb9baa('div',_0x2fd94f[_0x43437a(0x8f1)],'Paste'+_0x43437a(0x45c)+_0x43437a(0x517)+'\x20thin'+_0x43437a(0xbfd)+'n\x20som'+'ethin'+'g\x20loo'+'ks\x20wr'+'ong.')),_0x180b9c[_0x43437a(0x58c)]['appen'+_0x43437a(0xcc3)+'d'](_0x4f7916),_0x419439[_0x43437a(0x1ea)](_0x180b9c);}return _0x419439;}}function _0x1b3b27(){var _0x4a7e13=_0x3f0b99;if(_0x58443a['open'])_0x2fd94f[_0x4a7e13(0xc8d)](_0x1546e1,!![]);}function _0xf8e4d7(){var _0x25e74f=_0x3f0b99;try{if(_0x2fd94f['BrBMW']==='xRRrE'){var _0x4c5a63=localStorage['getIt'+'em'](_0x493fdd);if(!_0x4c5a63)return;var _0x15fcca=JSON['parse'](_0x4c5a63);if(_0x15fcca&&typeof _0x15fcca['x']===_0x2fd94f['VSdGn']&&typeof _0x15fcca['y']===_0x2fd94f['VSdGn'])_0x58443a[_0x25e74f(0xdd9)]=_0x15fcca;}else _0x5e8f06=(_0x5a6a34[_0x25e74f(0xe6b)]&&_0x13745c[_0x25e74f(0xe6b)]['ok']?_0x25e74f(0x97b)+_0x25e74f(0xa6b):_0x2fd94f[_0x25e74f(0x23e)])+_0x4c6b1b+'s',_0x235760=_0x2fd94f[_0x25e74f(0xd3b)];}catch(_0xc341c5){}}function _0x4dce75(){var _0xc636ce=_0x3f0b99;try{localStorage[_0xc636ce(0xd5b)+'em'](_0x493fdd,JSON['strin'+_0xc636ce(0xa82)](_0x58443a['pos']));}catch(_0x124cbf){}}function _0x51bac5(){var _0x5c4402=_0x3f0b99,_0x5d289c={'dMXlI':function(_0x3ecce8,_0x5dafe5){return _0x3ecce8+_0x5dafe5;},'jnBXq':_0x2fd94f[_0x5c4402(0x7bb)],'AEkMe':_0x2fd94f[_0x5c4402(0xccf)],'tZCrJ':_0x5c4402(0x626)+_0x5c4402(0x713)+_0x5c4402(0xb9d)+_0x5c4402(0xb6f)+'very\x20'+_0x5c4402(0x5d9)+_0x5c4402(0x7db)+_0x5c4402(0x3c9)+_0x5c4402(0xba7)+_0x5c4402(0xc21)+'e.'},_0x4e76b5=_0x58443a['root'];if(!_0x4e76b5||!_0x4e76b5[_0x5c4402(0x76c)])return;_0x58443a['pos']?(_0x4e76b5[_0x5c4402(0x76c)][_0x5c4402(0xc06)]=_0x2fd94f[_0x5c4402(0x231)](_0x58443a[_0x5c4402(0xdd9)]['x'],'px'),_0x4e76b5['style']['top']=_0x2fd94f[_0x5c4402(0xdbe)](_0x58443a[_0x5c4402(0xdd9)]['y'],'px'),_0x4e76b5[_0x5c4402(0x76c)]['right']=_0x5c4402(0x2c3),_0x4e76b5[_0x5c4402(0x76c)]['botto'+'m']=_0x5c4402(0x2c3)):_0x2fd94f[_0x5c4402(0x5ee)](_0x5c4402(0x995),'uapgk')?(_0x4e76b5[_0x5c4402(0x76c)]['left']=_0x2fd94f[_0x5c4402(0x3bf)],_0x4e76b5['style'][_0x5c4402(0xd86)]=_0x5c4402(0x2c3),_0x4e76b5[_0x5c4402(0x76c)][_0x5c4402(0x3f4)]=_0x5c4402(0x193),_0x4e76b5['style'][_0x5c4402(0x7e9)+'m']=_0x5c4402(0x193)):_0x401c56[_0x5c4402(0x9a9)+'ngs'][_0x5c4402(0x1ea)](_0x5d289c[_0x5c4402(0xdb3)](_0x5d289c[_0x5c4402(0x1cb)]+_0xb0899[_0x5c4402(0x859)](_0x5761ce[_0x5c4402(0x8e8)+_0x5c4402(0x581)])[_0x5c4402(0x35a)+'h']+(_0x5c4402(0x6bc)+_0x5c4402(0x986)+'\x20but\x20'+_0x5c4402(0xbd3)+'0\x20fie'+_0x5c4402(0xc37)),_0x311d23['lastE'+_0x5c4402(0xbdf)]?_0x5d289c[_0x5c4402(0xdb3)](_0x5d289c['AEkMe'],_0x5ab858[_0x5c4402(0xc5e)+'rror']):_0x5d289c[_0x5c4402(0x8df)]));}function _0x392806(_0xc11c7b,_0x305d21){var _0x20bcb0=_0x3f0b99,_0x1548b6={'mIYMz':function(_0x555cc4,_0x1f6efe){return _0x2fd94f['FaOts'](_0x555cc4,_0x1f6efe);},'fGQVU':_0x20bcb0(0x984),'lYgHI':function(_0x3e647d,_0x1091e4){return _0x3e647d===_0x1091e4;},'gKzZS':_0x2fd94f[_0x20bcb0(0x3bf)]};try{var _0x4beb0a=![],_0x401f0b=-0x1270+-0x1*0xf6a+0x21da,_0x190669=-0x15d7+0xdaa+0x1*0x82d;_0x305d21['style']['curso'+'r']=_0x2fd94f[_0x20bcb0(0x94c)],_0x305d21[_0x20bcb0(0x76c)][_0x20bcb0(0xc95)+_0x20bcb0(0x2ee)+'n']='none';var _0x3e843e=function(_0x180d7a){var _0x285138=_0x20bcb0,_0x2ec3d2={'sHGjD':function(_0x12b20f,_0x34a4a1){return _0x1548b6['mIYMz'](_0x12b20f,_0x34a4a1);}};if(_0x1548b6[_0x285138(0xd91)]!=='ZAuES'){_0x4beb0a=!![],_0x305d21['style']['curso'+'r']=_0x285138(0xb19)+'ing';var _0x23f1fb={'left':parseFloat(_0xc11c7b[_0x285138(0x76c)][_0x285138(0xc06)])||-0x2385+0x1536+-0x3*-0x4c5,'top':parseFloat(_0xc11c7b['style']['top'])||0x1497+-0x1bf7+0x760};(!_0xc11c7b[_0x285138(0x76c)]['left']||_0x1548b6[_0x285138(0x1fc)](_0xc11c7b[_0x285138(0x76c)]['left'],'auto'))&&(_0x23f1fb['left']=(window[_0x285138(0x315)+'Width']||-0x1341+0x39a*0x7+-0x5f5)-(_0xc11c7b[_0x285138(0x5d9)+_0x285138(0x444)+'h']||0x2141+0x1*-0x1359+-0x3c*0x31)-(-0x8c7+-0x1*0x26f0+0x2fcf));(!_0xc11c7b[_0x285138(0x76c)][_0x285138(0xd86)]||_0xc11c7b['style'][_0x285138(0xd86)]===_0x1548b6['gKzZS'])&&(_0x23f1fb[_0x285138(0xd86)]=(window['inner'+_0x285138(0x559)+'t']||0xb49+-0x32*0x3c+-0x1*-0x6f)-(_0xc11c7b[_0x285138(0x5d9)+_0x285138(0xa89)+'ht']||0x20e9+0x1f9d*0x1+-0x3ef6)-(-0x13*0x83+-0x6e5*0x5+0x2c4a));_0x401f0b=(_0x180d7a[_0x285138(0xa8d)+'tX']||0x25d6+0x13d*0x7+-0x2e81)-_0x23f1fb['left'],_0x190669=(_0x180d7a[_0x285138(0xa8d)+'tY']||-0x1a74*0x1+-0x1a1c+-0x1d*-0x1d0)-_0x23f1fb['top'];try{_0x180d7a[_0x285138(0x515)+_0x285138(0xcff)+_0x285138(0xe59)]();}catch(_0x3ae8ee){}}else _0x5bd42a[_0x285138(0x76c)][_0x285138(0xc06)]=_0x2cbf08['pos']['x']+'px',_0x457509[_0x285138(0x76c)]['top']=_0x2ec3d2['sHGjD'](_0x350641['pos']['y'],'px'),_0x3a657d[_0x285138(0x76c)][_0x285138(0x3f4)]=_0x285138(0x2c3),_0x3254ba[_0x285138(0x76c)][_0x285138(0x7e9)+'m']='auto';},_0x4b7e5f=function(_0x34e295){var _0x86a465=_0x20bcb0,_0x32b5e5=(_0x86a465(0xc84)+_0x86a465(0x77a)+_0x86a465(0x89c)+_0x86a465(0x21d))['split']('|'),_0x25797e=-0x8ee+-0x1487*-0x1+-0xb99;while(!![]){switch(_0x32b5e5[_0x25797e++]){case'0':_0xc11c7b['style']['botto'+'m']=_0x2fd94f[_0x86a465(0x3bf)];continue;case'1':_0xc11c7b[_0x86a465(0x76c)][_0x86a465(0xd86)]=_0x2fd94f[_0x86a465(0x53e)](_0x8d39a0,'px');continue;case'2':_0xc11c7b['style'][_0x86a465(0x3f4)]='auto';continue;case'3':if(!_0x4beb0a)return;continue;case'4':_0xa4cb8d=Math[_0x86a465(0x81d)](-0x679*-0x2+0x1f52+-0x1*0x2c3c,Math['min']((window[_0x86a465(0x315)+'Width']||-0x223*-0x1+-0x201d+-0x4ff*-0x6)-_0x24aca5-(0x18d+0xb8a*0x1+-0xd0f),_0xa4cb8d));continue;case'5':_0xc11c7b[_0x86a465(0x76c)][_0x86a465(0xc06)]=_0x2fd94f['qSfZM'](_0xa4cb8d,'px');continue;case'6':var _0xa4cb8d=(_0x34e295[_0x86a465(0xa8d)+'tX']||-0x1*-0x734+0x1*0x2309+-0xb*0x3d7)-_0x401f0b,_0x8d39a0=_0x2fd94f['GZmEu'](_0x34e295['clien'+'tY']||-0x9f8+0x78b+0x26d,_0x190669);continue;case'7':_0x58443a[_0x86a465(0xdd9)]={'x':_0xa4cb8d,'y':_0x8d39a0};continue;case'8':var _0x24aca5=_0xc11c7b[_0x86a465(0x5d9)+_0x86a465(0x444)+'h']||0x1*0x1fcb+-0x2018+0x2b9,_0x4179b6=_0xc11c7b['offse'+'tHeig'+'ht']||0x2497+-0x111+0x8a*-0x3f;continue;case'9':_0x8d39a0=Math[_0x86a465(0x81d)](0x873+0x1b4f+-0x23ba,Math['min']((window[_0x86a465(0x315)+_0x86a465(0x559)+'t']||0x1823*-0x1+-0x353*-0x8+-0x275*0x1)-_0x4179b6-(0x25*0xa1+-0x24c*-0x9+-0x3*0xea3),_0x8d39a0));continue;}break;}},_0xd056a8=function(){var _0x4ce771=_0x20bcb0;if(_0x2fd94f[_0x4ce771(0xc9a)]('mPCGS',_0x2fd94f[_0x4ce771(0x70d)]))_0x5744d4[_0x4ce771(0x1ea)](_0x2f4d9e(_0xe77181&&_0x35198c['messa'+'ge']||_0x4ebd4a)[_0x4ce771(0x257)](-0x22*-0x82+0x3a*0x9a+-0x3428,-0x2df*-0x7+0x2325+0x1b63*-0x2));else{if(!_0x4beb0a)return;_0x4beb0a=![],_0x305d21['style'][_0x4ce771(0x188)+'r']='grab',_0x4dce75();}};_0x305d21[_0x20bcb0(0x70b)+_0x20bcb0(0x7b8)+_0x20bcb0(0x8e0)+'r'](_0x20bcb0(0x6f3)+'down',_0x3e843e),window['addEv'+'entLi'+_0x20bcb0(0x8e0)+'r']('mouse'+'move',_0x4b7e5f),window['addEv'+_0x20bcb0(0x7b8)+_0x20bcb0(0x8e0)+'r'](_0x20bcb0(0x6f3)+'up',_0xd056a8),_0x305d21[_0x20bcb0(0x70b)+_0x20bcb0(0x7b8)+_0x20bcb0(0x8e0)+'r'](_0x2fd94f[_0x20bcb0(0x1ad)],_0x3e843e,{'passive':![]}),window['addEv'+_0x20bcb0(0x7b8)+_0x20bcb0(0x8e0)+'r']('touch'+_0x20bcb0(0x823),_0x4b7e5f,{'passive':![]}),window['addEv'+_0x20bcb0(0x7b8)+_0x20bcb0(0x8e0)+'r'](_0x20bcb0(0xc95)+_0x20bcb0(0x421),_0xd056a8);}catch(_0x3fff56){}}function _0x19301e(){var _0x37b507=_0x3f0b99,_0x4264b6={'WPqzK':_0x37b507(0x9db)+'t','TbVfr':function(_0x363462,_0x5e7adf){return _0x363462(_0x5e7adf);}};if(_0x37b507(0x48a)===_0x2fd94f[_0x37b507(0x638)]){if(_0x58443a[_0x37b507(0xbe1)])return _0x58443a[_0x37b507(0x2ae)];try{if(!document[_0x37b507(0x58c)]||!document['body'][_0x37b507(0xd7e)+'dChil'+'d'])return null;if(!document['getEl'+_0x37b507(0x62c)+'ById'](_0x2fd94f[_0x37b507(0xbc0)])){var _0x115b18=document[_0x37b507(0x8b1)+'eElem'+_0x37b507(0x2f1)](_0x37b507(0x76c));_0x115b18['id']='sakur'+'a-men'+_0x37b507(0xd8f),_0x115b18['textC'+'onten'+'t']=_0x429dd5,(document['head']||document['docum'+'entEl'+'ement'])[_0x37b507(0xd7e)+_0x37b507(0xcc3)+'d'](_0x115b18);}var _0xcf07ae=_0xcb9baa(_0x2fd94f[_0x37b507(0xaae)],_0x37b507(0x342)+_0x37b507(0xc50));_0xcf07ae['id']=_0x2fd94f[_0x37b507(0x491)];var _0x16f64a=_0xcb9baa(_0x2fd94f[_0x37b507(0xaae)],_0x37b507(0x3d9)+'de'),_0x3d3427=_0xcb9baa(_0x2fd94f['tZWTK'],'mn-lo'+'go',_0x1a66a6);_0x16f64a[_0x37b507(0xd7e)+'dChil'+'d'](_0x3d3427);var _0x5e2432=_0x2fd94f['UNvcq'](_0xcb9baa,_0x37b507(0xa60),_0x37b507(0x24f)+'in'),_0x228e16=_0xcb9baa(_0x2fd94f[_0x37b507(0xaae)],_0x2fd94f['FOIGb']),_0x1e7c4c=_0xcb9baa(_0x37b507(0xa60),_0x37b507(0x31b)+_0x37b507(0xbb6)),_0x11e6a3=_0x2fd94f[_0x37b507(0x1b5)](_0xcb9baa,_0x37b507(0xa60),'mn-h',_0x2fd94f['xGDEW']),_0xdd6bc1=_0x2fd94f[_0x37b507(0x1c7)](_0xcb9baa,_0x2fd94f[_0x37b507(0xaae)],_0x2fd94f[_0x37b507(0x685)],'start'+'ing…');_0x1e7c4c['appen'+_0x37b507(0xcc3)+'d'](_0x11e6a3),_0x1e7c4c['appen'+_0x37b507(0xcc3)+'d'](_0xdd6bc1);var _0x72b1cc=_0xcb9baa(_0x2fd94f[_0x37b507(0xaae)],'mn-cl'+_0x37b507(0xa8b),'<svg\x20'+'viewB'+'ox=\x220'+_0x37b507(0xb24)+_0x37b507(0x971)+'<path'+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+'18\x206\x20'+_0x37b507(0x318)+'/></s'+_0x37b507(0x932));_0x72b1cc['oncli'+'ck']=function(){var _0xfa730e=_0x37b507;if(_0xfa730e(0x564)!==_0x2fd94f['mCGzG']){if(_0x566bd4['kind']===_0xfa730e(0x433)){_0x5c1ae6()[_0xfa730e(0x46c)]({'host':_0x4dc3fe['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x144ec2['kind']===_0x4264b6[_0xfa730e(0xaec)])_0x4cc8b9()['set'](_0x55a557[_0xfa730e(0x9db)+'t']);}else _0x2fd94f['Xqmmh'](_0x1546e1,![]);},_0x228e16['appen'+'dChil'+'d'](_0x1e7c4c),_0x228e16[_0x37b507(0xd7e)+'dChil'+'d'](_0x72b1cc);var _0x48cb91=_0x2fd94f[_0x37b507(0x706)](_0xcb9baa,_0x2fd94f[_0x37b507(0xaae)],_0x2fd94f['hTVYD']);_0x5e2432['appen'+_0x37b507(0xcc3)+'d'](_0x228e16),_0x5e2432[_0x37b507(0xd7e)+'dChil'+'d'](_0x48cb91),_0xcf07ae[_0x37b507(0xd7e)+'dChil'+'d'](_0x16f64a),_0xcf07ae['appen'+_0x37b507(0xcc3)+'d'](_0x5e2432),document[_0x37b507(0x58c)][_0x37b507(0xd7e)+_0x37b507(0xcc3)+'d'](_0xcf07ae),_0x58443a['root']=_0xcf07ae,_0x58443a['cols']=_0x48cb91,_0x58443a[_0x37b507(0x511)]=_0x11e6a3,_0x58443a[_0x37b507(0xb20)]=_0xdd6bc1,_0xf8e4d7(),_0x51bac5(),_0x2fd94f[_0x37b507(0x874)](_0x392806,_0xcf07ae,_0x228e16);var _0x4d5b60={};for(var _0x4cad3e=0x155*0x14+-0x1*-0x14ba+-0x56*0x8d;_0x2fd94f[_0x37b507(0x298)](_0x4cad3e,_0x1d4a74[_0x37b507(0x35a)+'h']);_0x4cad3e++){if(_0x2fd94f[_0x37b507(0x48d)]('lNiDv',_0x2fd94f[_0x37b507(0x55e)]))return{'version':_0x3e1575,'when':new _0x3ff25e()[_0x37b507(0xdd5)+'Strin'+'g'](),'elapsedMs':_0x3c2726[_0x37b507(0xa06)]()-_0x1ec884,'host':_0x76c645,'uwmk':!!(_0x531082[_0x37b507(0x518)+'WebMo'+_0x37b507(0x1ec)]&&_0x402ce6['Unity'+'WebMo'+'dkit']['Runti'+'me']),'il2CppContext':![],'arm':_0x2f0560,'hooksTotal':_0x53791a['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x3f1505(_0x24ff4e&&_0x140f38['messa'+'ge']||_0x55e06f)};else{var _0x5c33d3=(_0x37b507(0x7c5)+_0x37b507(0x5dc)+_0x37b507(0x6e7))['split']('|'),_0x64840c=-0x1431+0x1*-0x1069+0x249a;while(!![]){switch(_0x5c33d3[_0x64840c++]){case'0':_0x4d5b60[_0x2ef6bb['id']]=_0x51e44e;continue;case'1':_0x16f64a['appen'+'dChil'+'d'](_0x51e44e);continue;case'2':_0x51e44e[_0x37b507(0xd8e)]=_0x2ef6bb['label'];continue;case'3':var _0x51e44e=_0x2fd94f['LjJey'](_0xcb9baa,_0x37b507(0xc54)+'n',_0x37b507(0x19d)+'b',_0x2fd94f[_0x37b507(0x459)](_0x2fd94f[_0x37b507(0x4cf)],_0x2ef6bb['label'])+('</sma'+_0x37b507(0x9cb)));continue;case'4':var _0x2ef6bb=_0x1d4a74[_0x4cad3e];continue;case'5':_0x51e44e[_0x37b507(0x6b6)]='butto'+'n';continue;case'6':(function(_0x4e9073){var _0x201118=_0x37b507,_0x5b3994={'YRDRw':function(_0x132534,_0x3aa159){var _0x4afdf4=_0x59a2;return _0x4264b6[_0x4afdf4(0xd1c)](_0x132534,_0x3aa159);}};_0x51e44e[_0x201118(0x9bb)+'ck']=function(){var _0x5af49a=_0x201118;_0x5b3994[_0x5af49a(0xa21)](_0x59e071,_0x4e9073);};}(_0x2ef6bb['id']));continue;}break;}}}_0x58443a[_0x37b507(0xc54)+'ns']=_0x4d5b60;var _0x35a06b=_0xcb9baa(_0x37b507(0xa60),null,_0x304a25);return _0x35a06b['id']=_0x2fd94f[_0x37b507(0x4d3)],_0x35a06b[_0x37b507(0xd8e)]=_0x37b507(0x9be)+_0x37b507(0x978)+_0x37b507(0x71a)+'z\x20(In'+_0x37b507(0xbc8),_0x35a06b['onmou'+'seent'+'er']=function(){_0x35a06b['style']['opaci'+'ty']='1';},_0x35a06b['onmou'+'selea'+'ve']=function(){var _0x3a625d=_0x37b507;_0x3a625d(0x3e1)==='mxeYv'?_0x35a06b[_0x3a625d(0x76c)]['opaci'+'ty']=_0x58443a[_0x3a625d(0x65a)]?'1':'.5':(_0x2baaf7=_0x374477[_0x3a625d(0xb40)],_0x6577d9=_0x41f4b4['yaw'],_0x2fa2e7[_0x3a625d(0x655)+'e']=_0x3a625d(0x328)+'r\x20pai'+_0x3a625d(0x629)+_0x16b423['order']+')');},_0x35a06b['oncli'+'ck']=function(_0x10a5bd){var _0x1667f9=_0x37b507;if(_0x10a5bd&&_0x10a5bd['stopP'+'ropag'+_0x1667f9(0xd83)])_0x10a5bd[_0x1667f9(0xa12)+'ropag'+_0x1667f9(0xd83)]();_0x4264b6['TbVfr'](_0x1546e1,!_0x58443a['open']);},document[_0x37b507(0x58c)][_0x37b507(0xd7e)+_0x37b507(0xcc3)+'d'](_0x35a06b),_0x58443a[_0x37b507(0x8a3)]=_0x35a06b,_0x2fd94f[_0x37b507(0x4f7)](setInterval,function(){var _0x205f2a=_0x37b507;try{if('MuXqu'!==_0x2fd94f[_0x205f2a(0xb7f)])return _0x4d99ea['on'];else{if(!_0x58443a[_0x205f2a(0x8a3)])return;var _0x2fa6b6=_0x2fd94f['XuYig'](_0x297343);_0x58443a['petal']['style'][_0x205f2a(0x1d9)+'ty']=_0x58443a[_0x205f2a(0x65a)]?'1':_0x2fa6b6?'.8':_0x2fd94f[_0x205f2a(0xa09)],_0x58443a['petal']['title']=_0x2fa6b6?'Sakur'+'a\x20Ski'+_0x205f2a(0x71a)+_0x205f2a(0xbe2)+'sert)':_0x2fd94f[_0x205f2a(0x473)];}}catch(_0x54fd0a){}},0x1886+-0x1a2f+0x465),_0x58443a['built']=!![],_0x59e071(_0x58443a[_0x37b507(0xc04)]),_0xcf07ae;}catch(_0x32f91d){return console[_0x37b507(0x940)](_0x2fd94f['buVPO'],_0x2fd94f[_0x37b507(0x69f)]('color'+':',_0x22ca32),_0x32f91d),null;}}else _0x47b1bd[_0x37b507(0x61e)+'dule']=![],_0x3e4199['heapU'+'8']=![],_0x258bcc[_0x37b507(0xb73)+_0x37b507(0x683)]=0x1e3b+0x65*-0x1+-0x1dd6;}function _0x59e071(_0x39e9ff){var _0x85fb1b=_0x3f0b99,_0x267201={'cpAYZ':_0x85fb1b(0x9f5)};if(_0x2fd94f['UuktZ']!==_0x85fb1b(0x7ef))_0x1ca368['remov'+'e']();else{_0x58443a[_0x85fb1b(0xc04)]=_0x39e9ff,_0x58443a['syncs']=[];if(!_0x58443a['cols'])return;var _0x5c8322=null;for(var _0x249016=-0x897+0x9ba+-0x123;_0x249016<_0x1d4a74[_0x85fb1b(0x35a)+'h'];_0x249016++)if(_0x1d4a74[_0x249016]['id']===_0x39e9ff)_0x5c8322=_0x1d4a74[_0x249016];_0x58443a[_0x85fb1b(0x511)][_0x85fb1b(0xe45)+_0x85fb1b(0xb09)+'t']=_0x85fb1b(0x9be)+_0x85fb1b(0x978)+_0x85fb1b(0x71a)+'z\x20—\x20'+(_0x5c8322&&_0x5c8322['label']||'?');for(var _0x15f273 in _0x58443a['butto'+'ns']){if(_0x85fb1b(0x510)!==_0x2fd94f[_0x85fb1b(0x47d)]){if(_0x58443a[_0x85fb1b(0xc54)+'ns'][_0x15f273]['class'+'List'])_0x58443a['butto'+'ns'][_0x15f273]['class'+_0x85fb1b(0xb45)]='mn-ta'+'b'+(_0x15f273===_0x39e9ff?_0x85fb1b(0xa79)+'ve':'');}else{var _0xd1cd5b={'nOVSv':function(_0x3b5669,_0x435047){return _0x3b5669(_0x435047);}},_0x5b5274=_0x32d80b('butto'+'n','sk-sw'+'itch');_0x5b5274[_0x85fb1b(0x6b6)]='butto'+'n';var _0x4ba2d1=function(){var _0x5e342b=_0x85fb1b;_0x5b5274[_0x5e342b(0xb39)+_0x5e342b(0x4c7)+'te']('aria-'+_0x5e342b(0x80e)+'ed',_0x16639d()?_0x267201['cpAYZ']:'false');};return _0x5b5274[_0x85fb1b(0x9bb)+'ck']=function(){_0xd1cd5b['nOVSv'](_0x58c3be,!_0x515975()),_0x4ba2d1();},_0x4ba2d1(),_0x5b5274[_0x85fb1b(0x67d)]=_0x4ba2d1,_0x38abaf[_0x85fb1b(0xa91)]['push'](_0x4ba2d1),_0x5b5274;}}var _0x1bbbce=[];try{if(_0x85fb1b(0xdfa)===_0x2fd94f['xLDPX'])try{_0x26da3d['hook']['enabl'+'ed']=![];}catch(_0x50559b){}else _0x1bbbce=_0x4ae862(_0x39e9ff);}catch(_0x536b47){_0x1bbbce=[];}while(_0x58443a[_0x85fb1b(0x4b5)]['first'+_0x85fb1b(0xaf3)])_0x58443a[_0x85fb1b(0x4b5)]['remov'+'eChil'+'d'](_0x58443a[_0x85fb1b(0x4b5)][_0x85fb1b(0x218)+_0x85fb1b(0xaf3)]);for(var _0x1ad665=0x198e*-0x1+-0x301*-0x1+-0x168d*-0x1;_0x1ad665<_0x1bbbce['lengt'+'h'];_0x1ad665++)_0x58443a[_0x85fb1b(0x4b5)]['appen'+_0x85fb1b(0xcc3)+'d'](_0x1bbbce[_0x1ad665]);}}function _0x1546e1(_0x7c115d){var _0x2f7eb3=_0x3f0b99;_0x58443a[_0x2f7eb3(0x65a)]=!!_0x7c115d;var _0x1a5a25=_0x19301e();if(!_0x1a5a25)return;_0x1a5a25['class'+'Name']=_0x2f7eb3(0x342)+_0x2f7eb3(0xc50)+(_0x58443a['open']?'\x20show'+'n':'');if(_0x58443a[_0x2f7eb3(0x8a3)])_0x58443a[_0x2f7eb3(0x8a3)]['style'][_0x2f7eb3(0x1d9)+'ty']=_0x58443a[_0x2f7eb3(0x65a)]?'1':'.5';if(_0x58443a['open']){_0x59e071(_0x58443a['cat']);try{if(_0x2fd94f[_0x2f7eb3(0x587)](_0x2fd94f[_0x2f7eb3(0x688)],'rIHbC')){var _0x3ca992=window[_0x2f7eb3(0x315)+_0x2f7eb3(0x559)+'t']||-0xdab+0x20a1+-0x1*0xfd6;if(_0x3ca992<0x1*0x4f9+-0x13ec+0x115f)_0x529079(![]);}else _0xf22307=_0x3a30fe+_0x36f505,_0x90835b=_0x33f400+_0x13d2f6;}catch(_0x468e4c){}}}function _0x4c844d(){var _0x2e58ed=_0x3f0b99,_0x284459={'Ojyco':function(_0x567a26,_0x155ce8){return _0x567a26+_0x155ce8;}};if(!_0x58443a['open']||!_0x58443a[_0x2e58ed(0xbe1)])return;try{for(var _0x480e25=0x1*0xbc5+-0x14a5+0x11c*0x8;_0x480e25<_0x58443a['syncs']['lengt'+'h'];_0x480e25++){if(_0x2fd94f['xNSji'](_0x2fd94f['dePMa'],_0x2fd94f[_0x2e58ed(0x41a)]))try{_0x58443a['syncs'][_0x480e25]();}catch(_0x20e167){}else{var _0x427348={'pdrEr':function(_0x38ba6a,_0x4363d8){return _0x284459['Ojyco'](_0x38ba6a,_0x4363d8);},'ZQoWq':function(_0x583b12,_0xda90e5){return _0x583b12+_0xda90e5;}},_0x3630fb=_0x361610(_0x2e58ed(0xa60),'sk-no'+'te',_0x2e58ed(0xb42)+_0x2e58ed(0x6ae)+_0x5ab2cd['slice'](-0xa8c*0x2+-0x646+0x1b5e,-0x6*0x47d+0xffd+0xaf5)[_0x2e58ed(0x6f5)](function(_0x384c41){var _0x46d2d7=_0x2e58ed;return _0x427348[_0x46d2d7(0x221)](_0x427348['ZQoWq']('0x',_0x384c41['o']<0x1e16+-0x2f7*-0x2+-0xa*0x39a?'?':_0x384c41['o'][_0x46d2d7(0x7e7)+_0x46d2d7(0xa00)](-0x19*0x154+-0x1*-0x1f01+0x243))+'\x20('+_0x384c41[_0x46d2d7(0xbec)],')');})[_0x2e58ed(0x958)]('\x20\x20'));_0x41b238[_0x2e58ed(0x58c)]['appen'+'dChil'+'d'](_0x3630fb);}}var _0x384c96=_0x7f8463;_0x58443a[_0x2e58ed(0xb20)][_0x2e58ed(0xe45)+'onten'+'t']=_0x384c96?_0x2fd94f[_0x2e58ed(0x213)](_0x2fd94f[_0x2e58ed(0x436)]('v',_0x384c96[_0x2e58ed(0x45d)+'on']),'\x20\x20·\x20\x20'+'hooks'+'\x20')+_0x384c96['hooks'+'Appli'+'ed']+'/'+_0x384c96['hooks'+'Total']+_0x2fd94f['HdeCZ']+(_0x384c96[_0x2e58ed(0xe05)]&&_0x384c96[_0x2e58ed(0xe05)]['playe'+_0x2e58ed(0x419)+'t']||0x494+-0x25e3+-0x1*-0x214f)+('\x20\x20·\x20\x20'+_0x2e58ed(0xcdc))+(_0x384c96[_0x2e58ed(0x6e0)+'emory']&&_0x384c96['wasmM'+_0x2e58ed(0x469)][_0x2e58ed(0x6d7)+_0x2e58ed(0xa24)]?Math[_0x2e58ed(0x632)](_0x384c96[_0x2e58ed(0x6e0)+_0x2e58ed(0x469)][_0x2e58ed(0x94e)]/(0x2f6f3*-0x5+0x11d4c8+-0x29*-0x511f))+'MB':'-'):_0x2e58ed(0xaf7)+_0x2e58ed(0xb7a)+'r\x20the'+_0x2e58ed(0x951)+_0x2e58ed(0x477)+'ort…';var _0x286283=_0x58443a[_0x2e58ed(0x4b5)][_0x2e58ed(0x320)+'Selec'+_0x2e58ed(0xb62)+'l']?_0x58443a[_0x2e58ed(0x4b5)][_0x2e58ed(0x320)+_0x2e58ed(0x36e)+'torAl'+'l'](_0x2e58ed(0x694)+_0x2e58ed(0xcef)):[];for(var _0x2c3aaf=-0x1716+-0x20cd+-0xfb*-0x39;_0x2c3aaf<_0x286283[_0x2e58ed(0x35a)+'h'];_0x2c3aaf++){var _0x4de997=_0x286283[_0x2c3aaf][_0x2e58ed(0xc23)+'et']['k'],_0x5d3a08='';if(_0x4de997===_0x2fd94f['IvTZR'])_0x5d3a08=_0x384c96?_0x384c96['versi'+'on']:'-';else{if(_0x2fd94f[_0x2e58ed(0x589)](_0x4de997,_0x2e58ed(0x4d1)+_0x2e58ed(0xd7a)+_0x2e58ed(0xb10)+_0x2e58ed(0x7f0)))_0x5d3a08=_0x384c96?_0x384c96['hooks'+'Appli'+'ed']+_0x2e58ed(0x8db)+_0x384c96[_0x2e58ed(0x8b9)+_0x2e58ed(0x21b)+_0x2e58ed(0x7f0)+_0x2e58ed(0x2fa)]:'-';else{if(_0x4de997===_0x2e58ed(0x417)+'insta'+_0x2e58ed(0xd20)+_0x2e58ed(0x340))_0x5d3a08=_0x384c96&&_0x384c96[_0x2e58ed(0x6e0)+'emory']&&_0x384c96[_0x2e58ed(0x6e0)+_0x2e58ed(0x469)][_0x2e58ed(0x6d7)+_0x2e58ed(0xa24)]?_0x2fd94f[_0x2e58ed(0x4a5)](Math[_0x2e58ed(0x632)](_0x2fd94f[_0x2e58ed(0x1a8)](_0x384c96['wasmM'+_0x2e58ed(0x469)][_0x2e58ed(0x94e)],-0x188c29+0xed154+0x19bad5))+('\x20MB\x20@'+'\x20'),_0x384c96['wasmM'+'emory']['atMs'])+'ms':'-';else{if(_0x2fd94f[_0x2e58ed(0x6dc)](_0x4de997,_0x2e58ed(0x226)+_0x2e58ed(0xcc8)+_0x2e58ed(0xa56)+'nc'))_0x5d3a08=_0x384c96&&_0x384c96['esp']?_0x2fd94f['JygTl'](String,_0x384c96[_0x2e58ed(0xe05)]['playe'+_0x2e58ed(0x419)+'t']):'-';else{if(_0x4de997===_0x2fd94f[_0x2e58ed(0x440)])_0x5d3a08=_0x384c96&&_0x384c96[_0x2e58ed(0xe05)]?String(_0x384c96[_0x2e58ed(0xe05)]['enemy'+'Count']):'-';else{if(_0x2fd94f['KDIYV'](_0x4de997,_0x2fd94f[_0x2e58ed(0xda2)]))_0x5d3a08=_0x384c96&&_0x384c96[_0x2e58ed(0xe05)]&&_0x384c96[_0x2e58ed(0xe05)][_0x2e58ed(0x3a3)+'a']?_0x2fd94f[_0x2e58ed(0xd0f)](_0x384c96[_0x2e58ed(0xe05)][_0x2e58ed(0x3a3)+'a']+'\x20(',_0x384c96['esp'][_0x2e58ed(0x3a3)+'aFrom'])+')':'-';else{if(_0x4de997===_0x2e58ed(0xa1a)+'ntrol'+_0x2e58ed(0x3a9)+'x2E4')_0x5d3a08=_0x384c96&&_0x384c96['local']&&_0x384c96[_0x2e58ed(0xe67)][_0x2e58ed(0x364)]?_0x384c96[_0x2e58ed(0xe67)]['feet'][_0x2e58ed(0x6f5)](function(_0x448a1e){var _0x2a8376=_0x2e58ed,_0x1232a6={'DoLGz':function(_0x52dbf3,_0x11e3e2){return _0x52dbf3===_0x11e3e2;},'Vlxmi':function(_0x157cda,_0x36d1a0){return _0x157cda<_0x36d1a0;},'KvkNw':function(_0x4a91b4,_0xea3f5c){return _0x4a91b4===_0xea3f5c;},'lJLqt':function(_0x3a9efb,_0x5a526e){return _0x3a9efb-_0x5a526e;},'bPAGL':function(_0x2420bb,_0x1b0d30){return _0x2420bb===_0x1b0d30;},'JLcIT':'funct'+_0x2a8376(0x98a)};if(_0x2fd94f[_0x2a8376(0xde3)]==='KEHiF'){var _0x3b584d=_0x3cf76e['val']();if(_0x1232a6[_0x2a8376(0xa36)](typeof _0x3b584d,_0x2a8376(0xa25)+'r')&&_0x146c4d(_0x3b584d)){if(_0x4df94e['lo']===null||_0x1232a6['Vlxmi'](_0x3b584d,_0x1d8899['lo']))_0x1d76cc['lo']=_0x3b584d;if(_0x1232a6[_0x2a8376(0xb18)](_0x34a0c3['hi'],null)||_0x3b584d>_0x41974f['hi'])_0x4784c8['hi']=_0x3b584d;if(_0x12f71d[_0x2a8376(0xe1f)]!==null){var _0x5bd453=_0x526800[_0x2a8376(0xd22)](_0x1232a6['lJLqt'](_0x3b584d,_0x58590d[_0x2a8376(0xe1f)]));if(_0x5bd453>_0x7d0980[_0x2a8376(0x3ca)])_0x58ed6b[_0x2a8376(0x3ca)]=_0x5bd453;}_0x39d91c['last']=_0x3b584d;}_0x1db81d[_0x2a8376(0x1e4)]++;if(_0x545533[0x164*0x17+-0x114*-0x23+-0x7bf*0x9]&&_0x1232a6[_0x2a8376(0x268)](typeof _0x47bd95[0x2583*-0x1+0x23cc+-0x14*-0x16]['val'],_0x1232a6[_0x2a8376(0x376)])){var _0x4467d3=_0x33bc5f[0x956*-0x1+0x2559+-0x1c02]['val']();if(_0x4467d3)_0x18aafa=_0x4467d3;}}else return _0x2fd94f['PVCMm'](Math['round'](_0x448a1e*(-0x3*0xc62+-0x2024+-0x12*-0x3df)),-0x1f40+0xa1b+0x1589);})['join']('\x20\x20'):'-';else{if(_0x2fd94f[_0x2e58ed(0x4cb)](_0x4de997,_0x2fd94f[_0x2e58ed(0x6ec)]))_0x5d3a08=_0x384c96&&_0x384c96[_0x2e58ed(0xe67)]&&_0x384c96[_0x2e58ed(0xe67)]['eye']?_0x384c96['local'][_0x2e58ed(0x77f)]['map'](function(_0x5cdae0){return Math['round'](_0x5cdae0*(-0x3c5*-0x7+-0x14b*-0x2+-0x1c95))/(-0x10b3+0x4c7*-0x7+0x3288);})[_0x2e58ed(0x958)]('\x20\x20'):'-';else{var _0x1b42ed=_0x4de997[_0x2e58ed(0xae3)]('+');_0x5d3a08=_0x3b0a41(_0x384c96,_0x2fd94f['YBLpi'](_0x1b42ed[0xbd5+0xe39+0x5*-0x536]['index'+'Of'](_0x2e58ed(0x287)+'h'),0x1*-0x1ed6+0xe2b+0x10ab)?'Healt'+_0x2e58ed(0xe3b)+'pt':'FPSco'+_0x2e58ed(0xbcb)+_0x2e58ed(0x62d),parseInt(_0x1b42ed[0x1732+0x1033+-0x2764],0x1a30+0x1*-0x1d39+0xd*0x3d));}}}}}}}}if(_0x2fd94f['MRNTF'](_0x5d3a08,_0x286283[_0x2c3aaf][_0x2e58ed(0xe45)+'onten'+'t']))_0x286283[_0x2c3aaf]['textC'+_0x2e58ed(0xb09)+'t']=_0x5d3a08;}}catch(_0x19b11b){}}function _0x5966f5(){var _0x3aa40a=_0x3f0b99;try{var _0x1d91ec=_0x5ed94d();return _0x1d91ec&&_0x1d91ec[_0x3aa40a(0x364)]?_0x1d91ec[_0x3aa40a(0x364)][0xec*0x18+-0xacd*-0x1+-0x83b*0x4]:null;}catch(_0x362f94){return null;}}var _0xa34ed7=0x12f2+0x323*-0x1+-0x5*0x329+0.5,_0x13567f=0x147e+0x1681+0x39*-0xc1+0.25,_0x5970e2={},_0x3bd65b=null,_0x589469=0x23e8+0x985+0x2ac*-0x11+0.8;function _0x3709fd(_0x46272d,_0x3f912b,_0x1ced48){var _0x13eb7d=_0x3f0b99,_0x54a0f9={'WQvVn':function(_0x2898ae,_0x8f2e36){return _0x2fd94f['PsOWx'](_0x2898ae,_0x8f2e36);},'QhXiZ':_0x13eb7d(0x83e)+'g','RZGmL':function(_0x197c3,_0x1883a1){return _0x197c3!==_0x1883a1;},'sHrRU':function(_0x354b22,_0x276cae){return _0x354b22===_0x276cae;}};try{if(_0x2fd94f[_0x13eb7d(0x719)]('hWclB',_0x13eb7d(0x908))){var _0xdbbed1='';for(var _0x53a3b1=-0x3c*0x52+-0x1*0x43e+-0x222*-0xb;_0x54a0f9['WQvVn'](_0x53a3b1,arguments[_0x13eb7d(0x35a)+'h']);_0x53a3b1++){var _0xec800d=arguments[_0x53a3b1];if(typeof _0xec800d===_0x54a0f9['QhXiZ'])_0xdbbed1+=_0xec800d;else{if(_0xec800d&&_0xec800d[_0x13eb7d(0x437)+'ge'])_0xdbbed1+=_0xec800d[_0x13eb7d(0x437)+'ge'];}}if(_0x54a0f9[_0x13eb7d(0x604)](_0xdbbed1[_0x13eb7d(0xaa9)+'Of'](_0x1c4bcf),-(0x809+0x1ec7+-0x26cf)))return _0x391348['apply'](_0x14ad80,arguments);if(_0xdbbed1[_0x13eb7d(0xaa9)+'Of']('Unity'+'WebMo'+'dkit')!==-(0x2583+0xa6d+-0x2fef)){var _0x17893c=_0xdbbed1['slice'](0x1262+-0x1*0xa61+0x3*-0x2ab,0x1b6a+-0x1*0x1dd8+0x39a);if(_0x54a0f9[_0x13eb7d(0xd33)](_0xdca1b0['index'+'Of'](_0x17893c),-(0x20fb*-0x1+-0x2100+0x41fc))&&_0x114a8f['lengt'+'h']<-0x1*-0x1b1+0xb5*-0x36+0x7*0x53f)_0x18bb85['push'](_0x17893c);}}else{var _0x15b8ed=[],_0x1b794d,_0x47b4ad,_0x4849fd=_0x3f912b!==null&&_0x3f912b!==undefined&&isFinite(_0x3f912b),_0x1e18ec=0x76f+-0x505*0x7+-0x12*-0x18a;for(_0x1b794d=0xf1e+0xc96+-0x1bb4;_0x2fd94f[_0x13eb7d(0xa6f)](_0x1b794d,_0x46272d[_0x13eb7d(0x35a)+'h']);_0x1b794d++){var _0x1525e5=_0x46272d[_0x1b794d]['v'];if(!_0x1525e5)continue;var _0x141bf2=Math[_0x13eb7d(0x344)](_0x2fd94f[_0x13eb7d(0x430)](_0x1525e5[-0xda*-0x2+-0x4*-0x3ec+-0x1164],_0x1525e5[0x4e3+0x1567+-0x1a4a])+_0x2fd94f['xmWLj'](_0x1525e5[-0x2124+0x43*-0x4b+0x34c7],_0x1525e5[-0x192f+-0x8*0x2e4+-0xd9*-0x39]));if(_0x2fd94f['EmAju'](_0x141bf2,_0x1e18ec))_0x1e18ec=_0x141bf2;}var _0x3dc15b=_0x1e18ec*(0x19da+0x895+0x29*-0xd7+0.25),_0x3a5421=-0x187d*0x1+0x2407+-0xb8a;_0x2fd94f[_0x13eb7d(0x26f)](typeof console,_0x2fd94f['ulUON'])&&console[_0x13eb7d(0x395)]&&!globalThis['__ppL'+_0x13eb7d(0xc33)]&&(globalThis[_0x13eb7d(0x7ac)+_0x13eb7d(0xc33)]=0x1231+0x1600+-0x2830,console[_0x13eb7d(0x395)](_0x2fd94f['ocren'](_0x2fd94f['EYMSr'](_0x2fd94f[_0x13eb7d(0x731)](_0x2fd94f[_0x13eb7d(0xe51)](_0x2fd94f[_0x13eb7d(0x662)],_0x46272d['lengt'+'h'])+('\x20reac'+'h='),_0x1e18ec[_0x13eb7d(0x299)+'ed'](0x6e*-0x6+-0x1cf3*0x1+0x1f89)),'\x20floo'+'r=')+_0x3dc15b[_0x13eb7d(0x299)+'ed'](-0x2222+0x15c6+0xc5e),'\x20know'+'n=')+_0x4849fd+_0x2fd94f[_0x13eb7d(0x9c9)]+JSON[_0x13eb7d(0x83e)+_0x13eb7d(0xa82)](_0x46272d[_0x13eb7d(0x257)](-0x1e9f+0x19*-0x15f+0x40e6,0x1*-0x87d+0x1*0x8d1+-0x52))));for(_0x1b794d=0x6*-0x38f+-0x570+0x1aca;_0x1b794d<_0x46272d['lengt'+'h'];_0x1b794d++){var _0x1d790b=_0x46272d[_0x1b794d]['v'];if(!_0x1d790b)continue;if(_0x2fd94f[_0x13eb7d(0x598)](_0x1d790b[-0x2003+0x1a63+0x5a0],0x38+-0x233*0x7+0xf2d)&&_0x1d790b[-0x1*0x154a+0x113+-0x1*-0x1438]===0x1f*-0xbd+-0x196b+-0x1827*-0x2&&_0x2fd94f[_0x13eb7d(0xaee)](_0x1d790b[0x4*-0x186+0x1*0x511+0x5*0x35],0x19e8+0x141*0x12+-0x307a))continue;var _0x566976=Math[_0x13eb7d(0x344)](_0x1d790b[-0x26c8+-0x2258*0x1+0x10*0x492]*_0x1d790b[-0x13b9+0x61*-0x36+-0xd65*-0x3]+_0x1d790b[0x17*0x114+0x29*-0x61+-0x941*0x1]*_0x1d790b[-0x3ce+-0x1d*0x119+0x23a5]);if(_0x2fd94f['sLdpf'](_0x566976,_0x3dc15b)){_0x3a5421++;continue;}_0x15b8ed[_0x13eb7d(0x1ea)](_0x46272d[_0x1b794d]);}if(!_0x15b8ed['lengt'+'h']){if('ExzNJ'===_0x2fd94f[_0x13eb7d(0x78e)]){var _0x5dc064=_0x313398[_0x13eb7d(0x518)+_0x13eb7d(0x4e6)+_0x13eb7d(0x1ec)]&&_0xc4629f['Unity'+'WebMo'+_0x13eb7d(0x1ec)][_0x13eb7d(0xb7c)+'me'],_0x4dd027=_0x14aaee||_0x5dc064&&_0x5dc064[_0x13eb7d(0x52e)+'ns']&&_0x5dc064[_0x13eb7d(0x52e)+'ns'][_0x2fd94f[_0x13eb7d(0x531)](_0x5dc064[_0x13eb7d(0x52e)+'ns']['lengt'+'h'],-0x4f4+-0x4*-0x8e1+-0x1e8f)];if(!_0x4dd027||_0x2fd94f['LiLXP'](typeof _0x4dd027[_0x13eb7d(0x711)],_0x13eb7d(0x3d8)+_0x13eb7d(0x98a)))return _0x509353['error'+'s']['push'](_0x2fd94f['sGUCT']),_0x53397e;return _0x2fd94f['Xqmmh'](_0x2a96fe,_0x4dd027[_0x13eb7d(0x711)](_0x17459e,_0x28f37b,_0x15ffce||[]));}else return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x3a5421,'ambiguous':![],'reach':0x0,'held':![]};}var _0x5e47c5=[];for(_0x1b794d=0x2290+0xeb+-0x1f*0x125;_0x1b794d<_0x15b8ed[_0x13eb7d(0x35a)+'h'];_0x1b794d++){if(_0x2fd94f['WeyLf']===_0x13eb7d(0x99a)){var _0x454a00=_0x15b8ed[_0x1b794d]['v'],_0x5c0c98=-(-0x1cb0+0x3*-0x8e2+0x3757);for(_0x47b4ad=0xd05+0x21f0+-0x2ef5;_0x47b4ad<_0x5e47c5[_0x13eb7d(0x35a)+'h'];_0x47b4ad++){var _0x5c55de=_0x5e47c5[_0x47b4ad]['c'][-0x15f*-0x1b+0x1a*-0x1a+-0x2261]['v'],_0x52df56=_0x2fd94f['xzZwA'](_0x454a00[-0x905+-0x23d5+0x2cda],_0x5c55de[0x1e58+0xb55+-0x29ad]),_0x807369=_0x2fd94f[_0x13eb7d(0x72d)](_0x454a00[0x2*-0xb8d+-0x2*0x4a4+-0x1*-0x2063],_0x5c55de[0x2*0xb9f+-0x1e5*0x9+-0x318*0x2]),_0x5e724c=_0x2fd94f['uuFRt'](_0x454a00[0x2*-0x891+-0x7*0xc5+0x1687],_0x5c55de[-0xb*-0x205+0xd*-0x27e+0xa31]);if(_0x2fd94f['qdAsr'](_0x52df56*_0x52df56,_0x807369*_0x807369)+_0x5e724c*_0x5e724c<=_0x13567f){_0x5c0c98=_0x47b4ad;break;}}if(_0x2fd94f[_0x13eb7d(0xab8)](_0x5c0c98,-(0x16f0+-0x227c+0xb8d)))_0x5e47c5[_0x13eb7d(0x1ea)]({'c':[_0x15b8ed[_0x1b794d]]});else _0x5e47c5[_0x5c0c98]['c'][_0x13eb7d(0x1ea)](_0x15b8ed[_0x1b794d]);}else try{_0x131a23();}catch(_0x545f49){}}var _0x53e0d2=_0x5e47c5[0x6*0x1e5+-0x1*-0x2c6+-0xe24],_0x4dbcdf=-Infinity;for(_0x47b4ad=-0x26*0x3a+0x232d*0x1+-0x1a91;_0x2fd94f[_0x13eb7d(0x665)](_0x47b4ad,_0x5e47c5[_0x13eb7d(0x35a)+'h']);_0x47b4ad++){var _0x22c635=_0x5e47c5[_0x47b4ad]['c'],_0x3d1575=_0x22c635['lengt'+'h']*(-0x152d+-0x8b1+0x21c6);if(_0x4849fd){if(_0x2fd94f[_0x13eb7d(0x253)]!==_0x13eb7d(0x48b)){var _0x298654=Infinity;for(var _0x5d79ea=-0x723*-0x1+-0x90d+0x1ea;_0x5d79ea<_0x22c635[_0x13eb7d(0x35a)+'h'];_0x5d79ea++){if(_0x13eb7d(0x330)===_0x2fd94f['owIQa']){var _0xff6bcd=Math['abs'](_0x2fd94f[_0x13eb7d(0x82e)](_0x22c635[_0x5d79ea]['v'][-0x133*-0x1+0xc12+0x3*-0x46c],_0x3f912b));if(_0xff6bcd<_0x298654)_0x298654=_0xff6bcd;}else{var _0x25f4b4=_0x4405dc(_0x2fd94f[_0x13eb7d(0x8d3)],_0x4a039f[_0x1786ce[_0x27e157]][_0x13eb7d(0x6e1)]);_0x25f4b4['hits']=_0x29ad44[_0x136aaa[_0x1a36c1]]['hits'],_0x25f4b4[_0x13eb7d(0x57a)+'al']=_0x27382d[_0x309874[_0x1d2ceb]]['ptr']===_0x52b911,_0x549e37[_0x13eb7d(0x4d8)+_0x13eb7d(0x3f8)+'s']['push'](_0x25f4b4);}}_0x3d1575-=_0x298654;}else{if(!_0x49eff3)return;var _0x15c5ab=_0x172590['offse'+_0x13eb7d(0x444)+'h']||-0x45*-0x71+-0x1b59+-0xb0,_0x5a532e=_0x58efe9[_0x13eb7d(0x5d9)+'tHeig'+'ht']||-0xbc9*0x2+0x44f*0x7+-0x507,_0x413679=_0x2fd94f[_0x13eb7d(0x6cb)](_0x27fe97[_0x13eb7d(0xa8d)+'tX']||0x1*0xf8d+0x2*0x10b5+-0x1*0x30f7,_0x36aae2),_0x12e012=(_0x474fab['clien'+'tY']||-0x1ecf+0x591+0x193e)-_0xb3ed52;_0x413679=_0x54c5f4[_0x13eb7d(0x81d)](0x3ea+-0x872+0x8*0x92,_0x385bea[_0x13eb7d(0xdfd)](_0x2fd94f[_0x13eb7d(0x531)](_0x367b27['inner'+_0x13eb7d(0x409)]||0x245*0x1+0x3c+0x1*-0x281,_0x15c5ab)-(-0x6*-0x4d6+0x166e+0x19b5*-0x2),_0x413679)),_0x12e012=_0x5ea1e3['max'](0x2b2+-0x2622*-0x1+-0x28cc,_0x12674e['min'](_0x2fd94f['zQhIM']((_0x4833b9[_0x13eb7d(0x315)+_0x13eb7d(0x559)+'t']||-0x2*-0x2b9+-0x81+-0x4f1)-_0x5a532e,-0x1*0x67d+0x1e73+0x3fd*-0x6),_0x12e012)),_0x45684b[_0x13eb7d(0x76c)]['left']=_0x413679+'px',_0x4ad892[_0x13eb7d(0x76c)][_0x13eb7d(0xd86)]=_0x2fd94f[_0x13eb7d(0x528)](_0x12e012,'px'),_0x5003a1[_0x13eb7d(0x76c)]['right']='auto',_0x4459e8['style'][_0x13eb7d(0x7e9)+'m']=_0x2fd94f[_0x13eb7d(0x3bf)],_0x31ad91['pos']={'x':_0x413679,'y':_0x12e012};}}else{if(_0x13eb7d(0x4c0)===_0x13eb7d(0x6be)){if(_0x2b4011['lo']===null||_0xff8f90<_0x3c2591['lo'])_0x36801d['lo']=_0x5cb6a;if(_0x255dc7['hi']===null||_0x346930>_0x3da495['hi'])_0x210f5f['hi']=_0x4d83d6;if(_0x2fd94f[_0x13eb7d(0x724)](_0x2921ca['last'],null)){var _0x4bc57b=_0x20be3c[_0x13eb7d(0xd22)](_0x2fd94f['lUUvB'](_0x52babd,_0x558b48['last']));if(_0x4bc57b>_0xd0f56b[_0x13eb7d(0x3ca)])_0x293531[_0x13eb7d(0x3ca)]=_0x4bc57b;}_0x163765[_0x13eb7d(0xe1f)]=_0x1f368d;}else{var _0x73acfc=0x167e*0x1+0x1333+-0x1*0x29b1;for(var _0xe0105=-0x1*0x1dfa+-0x417+-0x99*-0x39;_0xe0105<_0x22c635[_0x13eb7d(0x35a)+'h'];_0xe0105++){var _0x54f178=Math['sqrt'](_0x2fd94f[_0x13eb7d(0xe78)](_0x22c635[_0xe0105]['v'][0x16*0x66+0x47*0x4f+0x1*-0x1ead],_0x22c635[_0xe0105]['v'][-0xeb4+0x1147*0x1+-0x293*0x1])+_0x22c635[_0xe0105]['v'][0x10*-0x191+0x202a+-0x2*0x38c]*_0x22c635[_0xe0105]['v'][0x26ea+0x1aee+0x41d6*-0x1]);if(_0x2fd94f[_0x13eb7d(0x9c2)](_0x54f178,_0x73acfc))_0x73acfc=_0x54f178;}_0x3d1575+=_0x73acfc;}}_0x2fd94f['TGaGo'](_0x3d1575,_0x4dbcdf)&&(_0x4dbcdf=_0x3d1575,_0x53e0d2=_0x5e47c5[_0x47b4ad]);}var _0x57d71a=_0x53e0d2['c'][0x1*-0x1071+-0x78+-0x3*-0x5a3],_0x3ddf84=-(0x1df2+-0xb33+0x1*-0x12be);for(_0x47b4ad=-0x5*0xd4+0x35f*-0x2+-0xe*-0xc7;_0x47b4ad<_0x53e0d2['c'][_0x13eb7d(0x35a)+'h'];_0x47b4ad++){if(_0x2fd94f[_0x13eb7d(0x587)](_0x13eb7d(0x71f),'ydWiv'))return _0xe81342['facto'+'r'];else{var _0xdd20a2=_0x53e0d2['c'][_0x47b4ad]['v'],_0x58ecb0=Math[_0x13eb7d(0x344)](_0x2fd94f[_0x13eb7d(0xc0b)](_0xdd20a2[0x1177+-0x3*-0x925+-0x2ce6*0x1]*_0xdd20a2[0x1f97+0x135a+-0xcf*0x3f],_0x2fd94f['WTPAV'](_0xdd20a2[-0x21d+-0x447*-0x1+-0x228],_0xdd20a2[0x269a+-0x1649+0x104f*-0x1])));if(_0x58ecb0>_0x3ddf84||_0x2fd94f[_0x13eb7d(0x955)](_0x58ecb0,_0x3ddf84)&&_0x2fd94f[_0x13eb7d(0xc4b)](_0xdd20a2[-0x1*-0x262a+-0xa55+-0x1bd4],_0x57d71a['v'][-0x14bd+-0xbe1*0x2+-0x590*-0x8])){if(_0x2fd94f[_0x13eb7d(0x3a7)]===_0x13eb7d(0xa49))return _0x2fd94f[_0x13eb7d(0x833)](_0xd71206['round'](_0x3d5577*(-0x1ab5+-0x25b+0x1d74)),0x1657+-0x28*-0x38+0x1eb3*-0x1);else _0x3ddf84=_0x58ecb0,_0x57d71a=_0x53e0d2['c'][_0x47b4ad];}}}var _0x53346c=![];if(_0x1ced48&&_0x1ced48['o'])for(_0x47b4ad=-0x97*-0x36+-0x29*-0xdd+-0x5*0xd73;_0x47b4ad<_0x53e0d2['c']['lengt'+'h'];_0x47b4ad++){if(_0x53e0d2['c'][_0x47b4ad]['o']!==_0x1ced48['o'])continue;if(_0x4849fd){var _0x36cda5=Math[_0x13eb7d(0xd22)](_0x2fd94f[_0x13eb7d(0x5ff)](_0x53e0d2['c'][_0x47b4ad]['v'][0x1732*-0x1+-0x1ec8+0xd*0x427],_0x3f912b)),_0x3e61ea=Infinity;for(var _0x561018=0x538+0x143f+-0x1977;_0x561018<_0x53e0d2['c'][_0x13eb7d(0x35a)+'h'];_0x561018++){var _0x152129=Math[_0x13eb7d(0xd22)](_0x2fd94f[_0x13eb7d(0x888)](_0x53e0d2['c'][_0x561018]['v'][0x14df+0xafc+-0x36*0x97],_0x3f912b));if(_0x2fd94f['GpEfk'](_0x152129,_0x3e61ea))_0x3e61ea=_0x152129;}if(_0x36cda5>_0x3e61ea+(-0x17c3+-0x31*-0x89+-0x1*0x276+0.35))break;}_0x57d71a=_0x53e0d2['c'][_0x47b4ad],_0x3ddf84=Math['sqrt'](_0x57d71a['v'][-0x16f5+-0x2452+0x19*0x25f]*_0x57d71a['v'][-0x2536+0x1097*0x2+-0xac*-0x6]+_0x57d71a['v'][-0x8b5+0x29*-0xc9+-0x176*-0x1c]*_0x57d71a['v'][0xbed+-0x1741*0x1+0xb56*0x1]),_0x53346c=!![];break;}return{'pos':_0x57d71a['v'],'posAt':_0x57d71a['o'],'candidates':_0x15b8ed[_0x13eb7d(0x35a)+'h'],'cluster':_0x53e0d2['c'][_0x13eb7d(0x35a)+'h'],'groups':_0x5e47c5[_0x13eb7d(0x35a)+'h'],'held':_0x53346c,'discarded':_0x3a5421,'ambiguous':_0x5e47c5['lengt'+'h']>0x44*0x59+-0x712+-0x1091,'reach':_0x3ddf84};}}catch(_0xe1a4fb){return console[_0x13eb7d(0x395)](_0x13eb7d(0xcca)+'OS>>',_0xe1a4fb[_0x13eb7d(0x437)+'ge'],String(_0xe1a4fb[_0x13eb7d(0x48e)]||'')[_0x13eb7d(0xae3)]('\x0a')[_0x13eb7d(0x257)](-0x2110+-0x2ab+0xbe9*0x3,0x353*0xa+-0x11bf+-0xf7b*0x1)['join'](_0x13eb7d(0x928))),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x5ed94d(){var _0x25bdee=_0x3f0b99,_0x2f4c5c={'yXdyl':function(_0x28a52e,_0x54d7ae){return _0x28a52e+_0x54d7ae;},'NoAkB':function(_0x122f98,_0x2ef2c9){var _0x5b5cf2=_0x59a2;return _0x2fd94f[_0x5b5cf2(0x398)](_0x122f98,_0x2ef2c9);},'torJz':function(_0x405b52){return _0x405b52();},'WsAnF':function(_0x1da01a,_0x4ac85c){var _0x1f2d54=_0x59a2;return _0x2fd94f[_0x1f2d54(0xd6f)](_0x1da01a,_0x4ac85c);},'KxcLq':function(_0x788969,_0x1223dd){return _0x788969(_0x1223dd);},'mvhFq':function(_0xf302f4,_0x21069d){return _0xf302f4!==_0x21069d;},'drnZz':function(_0x174d10,_0x773e59){return _0x2fd94f['pVWxY'](_0x174d10,_0x773e59);},'yOGiY':function(_0x14a217,_0xf247f7){return _0x2fd94f['bSujG'](_0x14a217,_0xf247f7);}};if('ZUqxO'!==_0x2fd94f['KRzbR']){var _0x239371=_0x33d3d8(_0x2729b7+_0x56ea0e(_0x549f7c[_0x1b56bc][0x9a8+-0x1559+0xbb1],-0x955*-0x3+0xeb*-0x2+-0x1a19),'u32');if(_0x239371)_0x2e03e3[_0x25bdee(0xad4)][_0x2cdbcc[_0x26ebfd][0x1*-0x250e+0x255d+-0x2*0x27]]=_0x2f4c5c['yXdyl']('0x',(_0x239371>>>-0x11c3+0x1*0x2507+-0x1344)[_0x25bdee(0x7e7)+_0x25bdee(0xa00)](0xe*0x202+0x214f*-0x1+0x543));}else{var _0xd28180=_0x48cc1a['FPSco'+'ntrol'+'ler'];if(!_0xd28180||!_0xd28180['ptr'])return null;var _0x3a34cd=_0x2404cb['FPSco'+'ntrol'+_0x25bdee(0x62d)]||[],_0x2091ed=[];for(var _0x4b67f8=0x1f73*-0x1+-0xaaf+0x2a22;_0x2fd94f[_0x25bdee(0xd15)](_0x4b67f8,_0x3a34cd[_0x25bdee(0x35a)+'h']);_0x4b67f8++){if('yundv'===_0x2fd94f[_0x25bdee(0xd23)]){if(_0x2fd94f['mymZE'](_0x3a34cd[_0x4b67f8][0x14d6+0x107*-0x22+0xe19],'v3'))continue;var _0x4be849=_0x2fd94f['khmXX'](_0x284134,_0xd28180[_0x25bdee(0x6e1)],_0x3a34cd[_0x4b67f8][-0xa94+-0xff7+0x1a8b],0x1e9d*-0x1+-0x1*0xae5+-0x2985*-0x1);if(_0x4be849)_0x2091ed[_0x25bdee(0x1ea)]({'o':_0x2fd94f['AmeQV']('0x',_0x3a34cd[_0x4b67f8][0x249b*0x1+0x251*0x1+-0x26ec][_0x25bdee(0x7e7)+_0x25bdee(0xa00)](-0x23ac+-0x12fc+-0x44*-0xce)),'v':_0x4be849});}else{var _0x437217=_0x150a01[_0x25bdee(0xb63)+'r'](function(_0x53433e){return _0x53433e['type']===_0x3d16d3;})[-0x2e7*0x5+-0x1*-0x169b+-0x818];_0xc068b6={'type':_0x111189,'atMs':_0x451acd[_0x25bdee(0xa06)]()-_0x4c3f1c,'originalFunc':!!(_0x437217&&_0x437217['hook']&&_0x2f4c5c['NoAkB'](typeof _0x437217[_0x25bdee(0xc30)]['origi'+_0x25bdee(0xadf)+'nc'],'funct'+'ion')),'resolveGameAtFire':!!_0x2f4c5c[_0x25bdee(0x818)](_0x1ae3ca),'gameSourceAtFire':_0x5ba7fb[_0x25bdee(0x655)+'e']};}}var _0x1376b9=_0x2fd94f['cUShJ'](_0x3709fd,_0x2091ed,null,_0x3bd65b);if(!_0x1376b9[_0x25bdee(0xdd9)])return null;_0x3bd65b=_0x1376b9[_0x25bdee(0xc5f)]?{'o':_0x1376b9[_0x25bdee(0xc5f)]}:null;var _0xdaf637=_0x1376b9[_0x25bdee(0xdd9)];return{'ptr':_0xd28180['ptr'],'feet':_0xdaf637,'posAt':_0x1376b9[_0x25bdee(0xc5f)],'candidates':_0x1376b9[_0x25bdee(0x2d5)+'dates'],'cluster':_0x1376b9[_0x25bdee(0xe77)+'er'],'copies':_0x2091ed['filte'+'r'](function(_0x218c8f){var _0x24f28e=_0x25bdee,_0x235cf6={'CEvYJ':function(_0x2b6458,_0x469c27){return _0x2b6458(_0x469c27);},'APmaT':function(_0x246b58,_0x59c410){return _0x2f4c5c['WsAnF'](_0x246b58,_0x59c410);},'FOHxr':function(_0x17834b,_0x26f3d3){var _0x206547=_0x59a2;return _0x2f4c5c[_0x206547(0x654)](_0x17834b,_0x26f3d3);}};if(_0x2f4c5c['mvhFq'](_0x24f28e(0x784),'OKxGg'))try{var _0x545ddc=_0x107f0c[_0x24f28e(0x518)+'WebMo'+_0x24f28e(0x1ec)]&&_0x3289f6[_0x24f28e(0x518)+_0x24f28e(0x4e6)+_0x24f28e(0x1ec)][_0x24f28e(0xb7c)+'me'],_0x1454f5=_0x37aac0||_0x545ddc&&_0x545ddc[_0x24f28e(0x52e)+'ns']&&_0x545ddc[_0x24f28e(0x52e)+'ns'][_0x545ddc['plugi'+'ns'][_0x24f28e(0x35a)+'h']-(-0x1638+-0x6a*-0x1+0x15cf)];if(!_0x1454f5||typeof _0x1454f5[_0x24f28e(0x711)]!==_0x24f28e(0x3d8)+'ion')return _0x2eef7a[_0x24f28e(0xa73)+'s']['push'](_0x24f28e(0x786)+_0x24f28e(0xb2e)+'call'),_0x334365;return _0x235cf6[_0x24f28e(0xb78)](_0x51321e,_0x1454f5['call'](_0x47b761,_0x291673,_0x29a245||[]));}catch(_0x6556b3){if(_0x38a510[_0x24f28e(0xa73)+'s']['lengt'+'h']<-0x192e*-0x1+0xf70+0xa26*-0x4)_0x454811['error'+'s']['push'](_0x235cf6['APmaT'](_0xf0280e,'.')+_0x278975+':\x20'+_0x235cf6[_0x24f28e(0x737)](_0x17aacd,_0x6556b3&&_0x6556b3[_0x24f28e(0x437)+'ge']||_0x6556b3)[_0x24f28e(0x257)](0x1cf9*-0x1+0x449+0x18b0,0xa5b+-0xd34+0x3*0x111));return _0xf29a72;}else return _0x2f4c5c['NoAkB'](_0x218c8f['v'][-0xf6a+0x151c+-0x5b2],_0xdaf637[0xa5*0x9+-0x2ee+-0x1*0x2df])&&_0x2f4c5c[_0x24f28e(0x698)](_0x218c8f['v'][0x49*0xe+-0x1361+-0x14*-0xc5],_0xdaf637[0x24d5+0x25*0xef+-0x475f])&&_0x2f4c5c[_0x24f28e(0x2a9)](_0x218c8f['v'][0x11ff+-0x15*0x4d+-0xbac],_0xdaf637[-0x1*-0x65b+-0x1516*-0x1+-0x1b6f*0x1]);})[_0x25bdee(0x6f5)](function(_0x5909a7){return _0x5909a7['o'];}),'eye':[_0xdaf637[-0x1fa8+-0x1*0x198f+0x3937],_0xdaf637[-0x23c+0x16ce+-0x1491]+_0x589469,_0xdaf637[0x1203+0xb4e+-0x1d4f]],'reach':_0x1376b9['reach'],'pitch':_0x55b637(_0xd28180['ptr']+(0x10*0x1a7+-0x17b6+-0x14e),'f32'),'yaw':_0x2fd94f[_0x25bdee(0xa0f)](_0x55b637,_0xd28180[_0x25bdee(0x6e1)]+(-0x5*-0x1b5+0x11b7*-0x2+-0x1*-0x1c55),'f32')};}}function _0x537d8c(){var _0x2cb81d=_0x3f0b99,_0xd47e49={'BKVzL':function(_0x34225a,_0x179da8,_0x3f49c1){return _0x34225a(_0x179da8,_0x3f49c1);},'cOwRD':_0x2cb81d(0x999)+'l','iXAoV':function(_0x330937,_0x332b7d,_0x37602b,_0x213c21){return _0x2fd94f['fvCWJ'](_0x330937,_0x332b7d,_0x37602b,_0x213c21);},'QWkDz':function(_0x543d27,_0x3e2145){return _0x543d27+_0x3e2145;}},_0x4773e1=_0x2fd94f['OLXTV'](_0x5ed94d),_0x4f3fb5=[],_0x3adb32=_0x66b4c0['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x323f7b=Object['keys'](_0x3adb32);for(var _0x16ded9=0x3*0x31d+-0x1*0x1bce+-0x1*-0x1277;_0x16ded9<_0x323f7b[_0x2cb81d(0x35a)+'h']&&_0x2fd94f[_0x2cb81d(0xd8b)](_0x16ded9,-0x59*-0x5+-0x9f6+0x1*0x859);_0x16ded9++){if(_0x2cb81d(0xbce)!==_0x2fd94f['nqaNJ']){var _0x4bb513=_0x3adb32[_0x323f7b[_0x16ded9]],_0x1a49cb=[],_0x4268d9=_0x2404cb[_0x2cb81d(0x226)+'nNetw'+'orkSy'+'nc']||[];for(var _0x5a4efb=-0x1*0x665+0xab4+-0x44f;_0x5a4efb<_0x4268d9[_0x2cb81d(0x35a)+'h'];_0x5a4efb++){if(_0x4268d9[_0x5a4efb][-0x1e*-0x116+-0x419*-0x2+-0x28c5]!=='v3')continue;var _0x201d02=_0x284134(_0x4bb513[_0x2cb81d(0x6e1)],_0x4268d9[_0x5a4efb][0x292+-0x8*-0x326+0x176*-0x13],-0x1ca*-0x1+-0x368+0x3*0x8b);if(_0x201d02)_0x1a49cb[_0x2cb81d(0x1ea)]({'o':'0x'+_0x4268d9[_0x5a4efb][0xb99*-0x3+-0x3b6+0x2681][_0x2cb81d(0x7e7)+'ing'](-0x17f4+-0xd6+0x18da),'v':_0x201d02});}var _0x459071=_0x2fd94f[_0x2cb81d(0x7a4)](_0x3709fd,_0x1a49cb,_0x4773e1?_0x4773e1[_0x2cb81d(0x364)][0x1a7e+0x2481+-0x3efe]:null,_0x5970e2[_0x323f7b[_0x16ded9]]);_0x5970e2[_0x323f7b[_0x16ded9]]=_0x459071['posAt']?{'o':_0x459071['posAt']}:null;var _0x225377=_0x459071[_0x2cb81d(0xdd9)];if(!_0x225377)continue;var _0xbd6dfa={'ptr':_0x4bb513[_0x2cb81d(0x6e1)],'x':_0x225377[0x79*0x7+-0x9c9*-0x2+-0x16e1],'y':_0x225377[-0x5*0xb2+-0x1283+0x1*0x15fe],'z':_0x225377[0x15bb+0x1312*-0x2+0x106b],'posAt':_0x459071[_0x2cb81d(0xc5f)],'candidates':_0x459071[_0x2cb81d(0x2d5)+'dates'],'cluster':_0x459071[_0x2cb81d(0xe77)+'er'],'team':_0x55b637(_0x2fd94f['QmaIX'](_0x4bb513['ptr'],-0x1*-0x19ec+0x1*0x7f0+-0x104*0x21),'i32'),'localFlag':_0x55b637(_0x2fd94f['DmHVX'](_0x4bb513['ptr'],0xd12+-0x2e*-0x95+-0x275c),_0x2fd94f[_0x2cb81d(0x839)])};if(_0x4773e1){var _0x51b644=_0x225377[-0x3b*0x45+-0x5*-0x23b+0x4c0]-_0x4773e1[_0x2cb81d(0x364)][-0x1cb8+0x1*-0x76e+0x2426],_0x41c1ee=_0x2fd94f[_0x2cb81d(0x871)](_0x225377[0x1bf0+-0x1c8d*0x1+0x3*0x35],_0x4773e1['feet'][-0x100c+-0x1*0x1b65+0x2b73]);_0xbd6dfa['d']=Math['sqrt'](_0x51b644*_0x51b644+_0x41c1ee*_0x41c1ee),_0xbd6dfa[_0x2cb81d(0x906)+'ng']=Math['atan2'](_0x51b644,_0x41c1ee)*(-0x1ff+-0x210d*0x1+0x160*0x1a)/Math['PI'];}_0x4f3fb5[_0x2cb81d(0x1ea)](_0xbd6dfa);}else{var _0x307566=_0xd47e49['BKVzL'](_0x3a2a84,'div',_0xd47e49[_0x2cb81d(0x69c)]),_0x49a1bd=_0xd47e49[_0x2cb81d(0xd94)](_0x4db56c,'div',_0x2cb81d(0xb25)+_0x2cb81d(0x345),_0x2a3970+(_0x2a27ca?_0xd47e49['QWkDz'](_0x2cb81d(0x858)+'\x20clas'+_0x2cb81d(0x2ef)+_0x2cb81d(0xe00)+'\x27>',_0x22a6d1)+('</spa'+'n>'):''));return _0x307566['appen'+_0x2cb81d(0xcc3)+'d'](_0x49a1bd),_0x307566;}}return{'me':_0x4773e1,'list':_0x4f3fb5};}var _0x58f20f=null;function _0x3aa50a(){var _0x12543d=_0x3f0b99;if('sJgEn'===_0x2fd94f[_0x12543d(0x565)]){if(_0x58f20f)return _0x58f20f;try{if(_0x2fd94f[_0x12543d(0xdf9)]('vVpLK',_0x12543d(0xe17))){var _0x2b7a6b=_0x44ca72['apply'](this,arguments);try{if(_0x2b7a6b&&typeof _0x2b7a6b[_0x12543d(0xe44)]===_0x12543d(0x3d8)+'ion')_0x2b7a6b[_0x12543d(0xe44)](_0x448fdb,function(){});else _0x3148cf(_0x2b7a6b);}catch(_0x525bb3){}return _0x2b7a6b;}else{if(!document[_0x12543d(0x58c)]||!document[_0x12543d(0x58c)][_0x12543d(0xd7e)+_0x12543d(0xcc3)+'d'])return null;var _0x1ddd6e=document[_0x12543d(0x8b1)+'eElem'+'ent'](_0x2fd94f['tZWTK']);_0x1ddd6e['id']='sakur'+_0x12543d(0x9f9),_0x1ddd6e['style'][_0x12543d(0x6e5)+'xt']=_0x2fd94f[_0x12543d(0x361)]('posit'+_0x12543d(0x45e)+_0x12543d(0x919)+'right'+':12px'+_0x12543d(0xbae)+_0x12543d(0x5d8)+_0x12543d(0xc48)+_0x12543d(0x5b1)+_0x12543d(0x66c)+'646;p'+'ointe'+_0x12543d(0x54e)+_0x12543d(0x815)+'one;'+_0x2fd94f[_0x12543d(0x6c5)],_0x2fd94f[_0x12543d(0x8d5)])+(_0x12543d(0xbc1)+'selec'+_0x12543d(0xb23)+'e;-we'+'bkit-'+_0x12543d(0xbc1)+_0x12543d(0x2a5)+_0x12543d(0xb23)+'e;'),_0x1ddd6e[_0x12543d(0x315)+_0x12543d(0xe0f)]=_0x2fd94f[_0x12543d(0xe29)](_0x2fd94f['SEGPQ'],_0x2fd94f[_0x12543d(0xa20)]);var _0xdc470a={'cv':{'getContext':function(){return null;}},'el':_0x1ddd6e};document['body'][_0x12543d(0xd7e)+'dChil'+'d'](_0x1ddd6e),_0x58f20f={'el':_0x1ddd6e,'cv':_0x1ddd6e[_0x12543d(0x320)+_0x12543d(0x36e)+_0x12543d(0x4fd)](_0x2fd94f[_0x12543d(0xc01)]),'lg':_0x1ddd6e[_0x12543d(0x320)+_0x12543d(0x36e)+'tor'](_0x12543d(0x4a7)+_0x12543d(0xba5)+'p-lg')};if(!_0x58f20f['cv']||!_0x58f20f['cv'][_0x12543d(0x937)+'ntext'])_0x58f20f=_0xdc470a;return _0x58f20f;}}catch(_0x447252){return null;}}else _0x1010b7['top']=(_0x4734e6[_0x12543d(0x315)+'Heigh'+'t']||0x2553+0x764+-0x2cb7*0x1)-(_0x4f4a9a['offse'+'tHeig'+'ht']||0x1727+0xac0+-0x2057)-(-0x2e3*0x1+-0x1d7b+0x1*0x2076);}var _0x182f73=null;function _0x1cf1ef(){var _0x19ca27=_0x3f0b99,_0x5c024e={'PIHFE':function(_0x98a9df,_0x38031b){return _0x98a9df(_0x38031b);}};if(_0x2fd94f[_0x19ca27(0xcba)](_0x2fd94f[_0x19ca27(0x536)],_0x19ca27(0xa65))){if(_0x182f73)return _0x182f73;try{var _0x8e4cd0=(_0x19ca27(0x310)+'|5|3|'+'1|2')['split']('|'),_0x4b3e85=0x42*0x8e+0x2*-0x5bf+0x2*-0xc8f;while(!![]){switch(_0x8e4cd0[_0x4b3e85++]){case'0':if(!document[_0x19ca27(0x58c)]||!document[_0x19ca27(0x58c)]['appen'+'dChil'+'d'])return null;continue;case'1':_0x182f73={'cv':_0x2db14e};continue;case'2':return _0x182f73;case'3':document['body']['appen'+_0x19ca27(0xcc3)+'d'](_0x2db14e);continue;case'4':var _0x2db14e=document[_0x19ca27(0x8b1)+'eElem'+'ent'](_0x2fd94f['tXOul']);continue;case'5':_0x2db14e['style']['cssTe'+'xt']=_0x19ca27(0xe0d)+_0x19ca27(0x45e)+_0x19ca27(0x919)+'left:'+'0;top'+_0x19ca27(0x5c7)+'index'+_0x19ca27(0x1c5)+_0x19ca27(0x1e8)+_0x19ca27(0x34a)+_0x19ca27(0xb36)+_0x19ca27(0x802)+_0x19ca27(0xa1d)+'e;';continue;case'6':_0x2db14e['id']='sakur'+_0x19ca27(0x269)+'es';continue;}break;}}catch(_0x1ab74d){return null;}}else return{'err':_0x50a775(_0x291c45&&_0x18bf08['messa'+'ge']),'stack':_0x5c024e[_0x19ca27(0xb5f)](_0x481e58,_0x469847&&_0x273b55[_0x19ca27(0x48e)])};}function _0x20c132(_0x38a755){var _0x51b0dd=_0x3f0b99;try{var _0x3cd8bb=Math[_0x51b0dd(0x81d)](-0x1824+0x13bc+0x469,window['inner'+'Width']||document[_0x51b0dd(0x38d)+_0x51b0dd(0x752)+'ement']['clien'+_0x51b0dd(0x444)+'h']||0x1*0x1782+0x26bb+-0x8d*0x71),_0x588bbb=Math['max'](-0x7*-0x1de+-0x3b*0x3d+0xfe,window[_0x51b0dd(0x315)+_0x51b0dd(0x559)+'t']||document[_0x51b0dd(0x38d)+'entEl'+_0x51b0dd(0x62c)]['clien'+'tHeig'+'ht']||-0x19b2+0x115a+0x858);return(_0x38a755['cv'][_0x51b0dd(0x1bd)]!==_0x3cd8bb||_0x2fd94f[_0x51b0dd(0xca9)](_0x38a755['cv'][_0x51b0dd(0x779)+'t'],_0x588bbb))&&(_0x38a755['cv']['width']=_0x3cd8bb,_0x38a755['cv'][_0x51b0dd(0x779)+'t']=_0x588bbb),{'w':_0x3cd8bb,'h':_0x588bbb};}catch(_0x1a6232){return{'w':0x0,'h':0x0};}}function _0x469d76(){var _0x335a32=_0x3f0b99,_0x3420c9={'gncXN':function(_0x56895e,_0x3fcf89,_0x395e50){return _0x2fd94f['tlOSS'](_0x56895e,_0x3fcf89,_0x395e50);}},_0x8d7ac6={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{if(_0x2fd94f['BRlRj'](_0x2fd94f[_0x335a32(0x636)],'pDTkn')){var _0x148a65=_0x2fd94f[_0x335a32(0xaf6)](_0x529811,_0x4d82b7[_0x317025][-0x3e*0x2b+0x1*-0xf8b+0x19f5]),_0x14f269=_0x1d2792(_0x335a32(0xcc7),_0x2fd94f['QQWoc']);_0x14f269['style'][_0x335a32(0x602)+_0x335a32(0xe46)]='0',_0x14f269['style'][_0x335a32(0xd67)]='1',_0x14f269['style']['textA'+_0x335a32(0x41e)]=_0x2fd94f['uqlXq'],_0x14f269[_0x335a32(0xe45)+_0x335a32(0xb09)+'t']=_0x5b07ae(_0x34b4aa[_0x5a352e][0x608*0x1+-0x1dd6+-0x10*-0x17d]),_0x14f269[_0x335a32(0xc23)+'et']['k']=_0x441eaf[_0x4c74f9][0x1*0xa5a+0x1*0x1885+-0x2*0x116f],_0x148a65[_0x335a32(0xd7e)+_0x335a32(0xcc3)+'d'](_0x14f269),_0x268fba['body']['appen'+_0x335a32(0xcc3)+'d'](_0x148a65),_0x552783[_0x335a32(0x58c)][_0x335a32(0x32b)+_0x335a32(0x1a5)]['sp']=_0x14f269;}else _0x8d7ac6[_0x335a32(0xc14)+'s']={'w':_0x182f73&&_0x182f73['cv']?_0x182f73['cv'][_0x335a32(0x1bd)]:-0x4*0x84f+0x47*0x79+-0x53,'h':_0x182f73&&_0x182f73['cv']?_0x182f73['cv']['heigh'+'t']:-0x1*-0x50e+-0x1053+-0x5*-0x241,'innerW':window['inner'+_0x335a32(0x409)],'innerH':window['inner'+_0x335a32(0x559)+'t'],'dpr':window[_0x335a32(0x811)+'ePixe'+_0x335a32(0x4c6)+'o']||0x2aa*0x1+-0x1233+0xf8a*0x1};}catch(_0x3cd0ce){}var _0x2be769=_0x537d8c();if(!_0x2be769||!_0x2be769['me'])return _0x8d7ac6;var _0x6960d7=_0x8d7ac6[_0x335a32(0xc14)+'s']['w']||0x1*0x1057+0x2*-0x118b+0x16a7*0x1,_0x445b7f=_0x8d7ac6['canva'+'s']['h']||-0x1ea1+-0x15a8+0x3831,_0x43f18c=_0x6960d7/_0x445b7f,_0x4d2ceb=Math[_0x335a32(0x21f)](_0x2fd94f[_0x335a32(0x382)](_0x2fd94f['SVGIW'](_0x2fd94f['iqkHn'](_0xabaa41['fov'],Math['PI']),-0xc8*-0xe+0xc4c*0x2+-0x3*0xb9c),-0x7f6+0xde2+-0x5ea)),_0x2a3a5b=_0x2fd94f[_0x335a32(0x705)](_0x1dccf0),_0x4c8833=_0x2a3a5b[_0x335a32(0x2d8)];for(var _0x47a86d=-0x58a*-0x2+0x92c+-0x1440;_0x47a86d<_0x2be769['list']['lengt'+'h']&&_0x47a86d<-0x8ef+0xadc+-0x1e5;_0x47a86d++){if(_0x2fd94f['TEjvN']===_0x2fd94f[_0x335a32(0xd93)]){var _0x1c6654=_0x2be769[_0x335a32(0x67f)][_0x47a86d];if(typeof _0x1c6654['d']!==_0x2fd94f[_0x335a32(0xe34)]||_0x1c6654['d']<-0x4*-0x90+0x1026+-0x1266+0.5)continue;var _0x7d7d87=_0x2fd94f['qphEX'](_0x165b3a,_0x2be769['me']['eye'],[_0x1c6654['x'],_0x1c6654['y'],_0x1c6654['z']],_0x6960d7,_0x445b7f);if(!_0x7d7d87)continue;var _0x231f24=_0x2fd94f[_0x335a32(0x1a6)](_0x2fd94f['UKmUF'](_0x7d7d87['x'],_0x6960d7),0x3*-0x556+0x2161+-0x115f+0.5)*(0x10f*-0x17+-0x1006+-0x2861*-0x1),_0x103b70=null;if(_0x4c8833&&_0x2a3a5b['pos']){var _0x2aa6fc=_0x2fd94f[_0x335a32(0x4b0)]['split']('|'),_0x1f3aea=-0x1464+0x1da4+0x1*-0x940;while(!![]){switch(_0x2aa6fc[_0x1f3aea++]){case'0':var _0x3c3d8e=_0x1c6654['x']-_0x2a3a5b[_0x335a32(0xdd9)][-0x1*-0x20ed+-0xd*-0xb+-0x217c],_0x680c65=_0x2fd94f['lUBtX'](_0x1c6654['y'],_0x2a3a5b['pos'][0x48c+-0x1*0x13e3+-0x7ac*-0x2]),_0x5308e2=_0x1c6654['z']-_0x2a3a5b['pos'][-0x1b25+-0x25*-0xa9+-0x15d*-0x2];continue;case'1':if(_0x2dea04>-0x3*0x2ff+-0x2*0xa31+0x1d5f+0.5)_0x103b70=_0x2fd94f[_0x335a32(0x2ec)](_0x2fd94f[_0x335a32(0x1e0)](_0x4a7bf2,_0x2dea04),_0x4d2ceb*_0x43f18c);continue;case'2':var _0x2dea04=_0x2fd94f[_0x335a32(0xcc5)](_0x2fd94f['gnDmc'](_0x2fd94f['LwWOc'](_0x3c3d8e,_0x16a91d[0xda5+-0x32*0x73+0x25*0x3d]),_0x680c65*_0x16a91d[-0x17c6+0x1e83+-0x6bc]),_0x5308e2*_0x16a91d[-0x1ec8+-0x2*0x1b4+0x2232]);continue;case'3':var _0x4a7bf2=_0x2fd94f[_0x335a32(0x3fd)](_0x2fd94f['wTxcR'](_0x3c3d8e,_0xfcb9b[-0x14*-0x15+0x221*-0xb+0xdf*0x19]),_0x680c65*_0xfcb9b[-0x225d*-0x1+0x2683*-0x1+-0x427*-0x1])+_0x5308e2*_0xfcb9b[-0x11ef+0x1002+0x1ef];continue;case'4':var _0x16a91d=_0x4c8833[_0x335a32(0xa39)],_0xfcb9b=_0x4c8833['right'];continue;}break;}}else _0x2fd94f[_0x335a32(0x2c2)](typeof _0x1c6654[_0x335a32(0x906)+'ng'],_0x335a32(0xa25)+'r')&&(_0x103b70=_0x2fd94f['PRRyr'](Math['tan'](_0x2fd94f[_0x335a32(0x382)](_0x1c6654[_0x335a32(0x906)+'ng']*Math['PI'],0x1cb7+0x106a*-0x1+0x1*-0xb99)),_0x2fd94f['tRjET'](_0x4d2ceb,_0x43f18c)));if(_0x103b70===null)continue;if(Math[_0x335a32(0xd22)](_0x103b70)>0x1513+0x1d4*-0xd+-0x1*-0x2b1+0.8)continue;var _0x25db5c=_0x231f24-_0x103b70;_0x8d7ac6['rows']['push']({'d':Math[_0x335a32(0x632)](_0x1c6654['d']),'bearing':Math['round'](_0x1c6654[_0x335a32(0x906)+'ng']),'at':Math[_0x335a32(0x632)](_0x2fd94f[_0x335a32(0x247)](_0x231f24,-0xa*-0x53+-0x15*0x8f+0xc65))/(-0x1*-0x1b47+0x15*-0x135+0x1fa),'want':Math[_0x335a32(0x632)](_0x103b70*(0x896*-0x3+0xaf3+0x12b7))/(-0x164f*0x1+-0x1*0xd90+0x27c7),'off':Math['round'](_0x25db5c*(-0xa4*0x25+0x63e+-0x223*-0xa))/(0x1546+0x1430+-0x2e*0xd1)}),_0x2fd94f[_0x335a32(0x6eb)](Math[_0x335a32(0xd22)](_0x25db5c),Math[_0x335a32(0xd22)](_0x8d7ac6['worst'+'Delta']))&&(_0x8d7ac6['worst'+_0x335a32(0xe11)]=Math['round'](_0x2fd94f[_0x335a32(0xc79)](_0x25db5c,-0x175*-0x11+-0x773+-0x11*0xca))/(-0x17a7+-0x15f*0x19+-0x2*-0x1eeb),_0x8d7ac6[_0x335a32(0xd5c)+_0x335a32(0x2f5)+'ng']=Math[_0x335a32(0x632)](_0x1c6654[_0x335a32(0x906)+'ng']));}else _0x3420c9[_0x335a32(0x577)](_0x508576,_0x5403b9,_0x1e303f[_0x335a32(0x664)]);}if(_0x2a3a5b[_0x335a32(0xdd9)]&&_0x2a3a5b['basis']&&_0x2a3a5b['fov']){var _0x22e3e6=_0x2a3a5b['basis']['fwd'];if(Math[_0x335a32(0xd22)](_0x22e3e6[0x178*-0x15+0x1735+0x28c*0x3])<0x6a9+0x56*0x47+-0x1e83+0.01){var _0x1f91ab=(_0x335a32(0x485)+'|3|1')['split']('|'),_0x3499c3=0x5*-0x295+-0x1506+0x21ef;while(!![]){switch(_0x1f91ab[_0x3499c3++]){case'0':var _0x40f39c=-0x2428+-0x5d+0x248f,_0x4ff6b9=-0x2555+0x1e00+0x756;continue;case'1':if(_0x521a20){var _0x2dd356=_0x2fd94f['ufSfp'](_0x2fd94f[_0x335a32(0x4f5)](-0x106*-0x5+-0x2f*0x13+-0x1a1+0.5,_0x2fd94f['hVfsN'](_0x521a20['y'],_0x8d7ac6[_0x335a32(0xc14)+'s']['h'])),-0x1d8c+-0xd0*-0xb+0x149e),_0x204f03=_0x4ff6b9/_0x40f39c/_0x179b70;_0x8d7ac6['verti'+_0x335a32(0x55a)]={'got':Math[_0x335a32(0x632)](_0x2fd94f['VqTgD'](_0x2dd356,-0x5*0x781+-0xd29*0x1+0x919*0x6))/(-0x23f9+-0x1cde+0x44bf*0x1),'want':Math[_0x335a32(0x632)](_0x204f03*(-0x3*0x883+-0x1*0x17ff+0x390*0xf))/(-0x583+0xc7a*0x3+-0x65*0x47),'off':_0x2fd94f['woEfs'](Math['round'](_0x2fd94f[_0x335a32(0xc68)](_0x2dd356-_0x204f03,0x1857+-0x1ca1+0x832)),0x379*-0x1+-0x2*-0xd9a+-0x13d3)};}continue;case'2':var _0x4b3e53=[_0x2fd94f[_0x335a32(0x745)](_0x2a3a5b['pos'][0x7fc*-0x3+0x11c1+-0x211*-0x3],_0x2fd94f[_0x335a32(0x556)](_0x22e3e6[0x1*0x218d+-0x14d1+-0x28c*0x5],_0x40f39c)),_0x2fd94f['Ldecs'](_0x2a3a5b[_0x335a32(0xdd9)][0x2bb*-0x2+0x975+-0x3fe]+_0x2fd94f[_0x335a32(0xe31)](_0x22e3e6[0x2*0x175+-0x15*0x2e+0xdd],_0x40f39c),_0x4ff6b9),_0x2a3a5b[_0x335a32(0xdd9)][-0x2*0x7b4+0x251b*0x1+-0x3*0x73b]+_0x22e3e6[-0x1097+-0x1*0x14de+-0x2577*-0x1]*_0x40f39c];continue;case'3':var _0x521a20=_0x165b3a(_0x2a3a5b[_0x335a32(0xdd9)],_0x4b3e53,_0x6960d7,_0x8d7ac6['canva'+'s']['h']);continue;case'4':var _0x179b70=Math[_0x335a32(0x21f)](_0x2fd94f[_0x335a32(0xc79)](_0x2a3a5b[_0x335a32(0xc71)],Math['PI'])/(-0x9e*-0x26+0x1d55+-0x3415)/(-0xbc*-0x17+-0x1209+0x3b*0x5));continue;}break;}}}return _0x8d7ac6;}var _0x46de92=-0x1427+0x190e+-0x4e6+0.75,_0x4e9400=0x3b+0x51*0x17+-0x782+0.25,_0x30f0ec=0x1*-0xb93+-0x20d1*-0x1+-0x153e+0.42;function _0x1873b1(_0x45dccf){var _0x27ab94=_0x3f0b99,_0x28e1ff=_0x182f73;if(!_0x28e1ff)return;var _0x5ba1e0=_0x28e1ff['cv'][_0x27ab94(0x937)+_0x27ab94(0x3c1)]&&_0x28e1ff['cv'][_0x27ab94(0x937)+_0x27ab94(0x3c1)]('2d');if(!_0x5ba1e0)return;var _0x3d94b4=_0x20c132(_0x28e1ff);_0x5ba1e0[_0x27ab94(0xcaf)+_0x27ab94(0xcea)](-0x3b6+-0xc*-0x20b+-0xa67*0x2,-0x8*0x44e+-0x16da+0x394a,_0x3d94b4['w'],_0x3d94b4['h']);if(!_0x23df0c[_0x27ab94(0x664)]||!_0x45dccf||!_0x45dccf['me'])return;var _0x1c1eb7=_0x45dccf['me'],_0x499030=null,_0x4ebbca=_0x66b4c0['Photo'+_0x27ab94(0xcc8)+'orkSy'+'nc']||{},_0x25ff3f=Object[_0x27ab94(0x859)](_0x4ebbca);for(var _0x201ccc=0x7a8+-0x1*0x1ca+-0x2*0x2ef;_0x201ccc<_0x25ff3f['lengt'+'h'];_0x201ccc++){if(_0x2fd94f[_0x27ab94(0xdf5)]===_0x27ab94(0x292)){var _0x2151b8=_0x284134(_0x4ebbca[_0x25ff3f[_0x201ccc]]['ptr'],0x16e+-0x1b5a+0x1a20,0x86d+0x1d*-0x3+0xd*-0x9f);if(_0x2151b8&&_0x2fd94f['COgqo'](_0x2151b8[0x29*-0xda+-0x1*0x152+0x243c],0x3*-0x1ff+0x24e1+-0x1ee4)&&_0x2151b8[0x1cde+0x1ccf*-0x1+-0xe]===0x1455*0x1+0x1fbe+0x3413*-0x1&&_0x2151b8[-0x2d9*0x2+-0x1a48+0xb2*0x2e]===-0x674+-0x1*-0x248+0x59*0xc){_0x499030=_0x55b637(_0x4ebbca[_0x25ff3f[_0x201ccc]][_0x27ab94(0x6e1)]+(-0x41*0x85+-0x2*0x1139+0x448f),_0x2fd94f['mTeCE']);break;}}else{_0xda1e3[_0x27ab94(0x515)+_0x27ab94(0xcff)+'ault'](),_0x3d08b5(_0x27ab94(0x1be)+_0x27ab94(0xcc9));return;}}for(var _0x220355=0x3*-0x6dc+0xdbd*-0x1+0x4e7*0x7;_0x220355<_0x45dccf[_0x27ab94(0x67f)][_0x27ab94(0x35a)+'h'];_0x220355++){var _0x3679af=_0x45dccf['list'][_0x220355],_0xfca4e0=_0x2fd94f['eRZvt'](_0x499030,null)&&_0x3679af['team']===_0x499030,_0x36b128=_0x165b3a(_0x1c1eb7[_0x27ab94(0x77f)],[_0x3679af['x'],_0x3679af['y']-_0x4e9400,_0x3679af['z']],_0x3d94b4['w'],_0x3d94b4['h']),_0xf03ba1=_0x165b3a(_0x1c1eb7['eye'],[_0x3679af['x'],_0x2fd94f[_0x27ab94(0x5ce)](_0x3679af['y'],_0x46de92),_0x3679af['z']],_0x3d94b4['w'],_0x3d94b4['h']);if(!_0x36b128||!_0xf03ba1)continue;var _0x404625=Math['abs'](_0xf03ba1['y']-_0x36b128['y']);if(!(_0x404625>0x2*0xa58+-0x2181+0xc1*0x11))continue;var _0xe043ae=Math[_0x27ab94(0x81d)](0x1*0x607+-0x1*-0x1019+0x161e*-0x1,Math['min'](0x114d+0x1267+-0x11ad*0x2,_0x2fd94f[_0x27ab94(0x923)](_0x404625,_0x30f0ec)));if(_0x404625>-0x43e+0x1*0x1d4a+-0x1768)continue;var _0x246f35=_0x2fd94f[_0x27ab94(0xce8)](_0x36b128['x'],_0xf03ba1['x'])/(-0xeea+-0x1*-0xb43+0x3a9),_0x1f6327=_0x2fd94f[_0x27ab94(0x974)](_0x36b128['y']+_0xf03ba1['y'],-0x4*0xc4+-0x133*0x1b+0xbd1*0x3);_0x5ba1e0['strok'+'eStyl'+'e']=_0xfca4e0?'rgba('+'79,14'+_0x27ab94(0xac5)+_0x27ab94(0x3c7):_0x27ab94(0xc39)+'255,1'+'10,11'+_0x27ab94(0x70a)+')',_0x5ba1e0[_0x27ab94(0x499)+'idth']=_0xfca4e0?0x1bd*0x7+-0x310+0x48d*-0x2:-0xf7f+0x11*0x73+-0x13*-0x6a,_0x5ba1e0[_0x27ab94(0xa64)+'eRect'](_0x2fd94f[_0x27ab94(0x72d)](_0x246f35,_0xe043ae/(-0x1*-0x3a6+-0x8*-0x34f+0x29*-0xbc)),_0x1f6327-_0x404625/(0x89*0x25+-0x34*-0x55+-0x250f),_0xe043ae,_0x404625);if(!_0xfca4e0){if(_0x2fd94f[_0x27ab94(0x54f)]!==_0x27ab94(0x3a2))_0x5ba1e0[_0x27ab94(0xd29)+_0x27ab94(0x686)]=_0x2fd94f[_0x27ab94(0x56a)],_0x5ba1e0['font']=_0x2fd94f['nDTmq'],_0x5ba1e0['fillT'+'ext'](Math['round'](_0x3679af['d']||-0x1a5a+0x2382+0x494*-0x2)+'m',_0x246f35-_0x2fd94f[_0x27ab94(0x7cd)](_0xe043ae,0x1*-0xe2f+-0x1b45+-0x1d*-0x16e),_0x2fd94f['QwYSS'](_0x1f6327-_0x2fd94f[_0x27ab94(0x7ca)](_0x404625,0x7*-0x50e+-0x1*0x19fd+0x33b*0x13),0x1*-0x1057+-0x303*0x1+-0x1*-0x135d));else return _0x435120['val']();}}}function _0xaad226(){var _0x1d29cf=_0x3f0b99,_0x2d7fdd={'EDnpe':function(_0x86bc64,_0x1b5304){var _0x53fc07=_0x59a2;return _0x2fd94f[_0x53fc07(0xb6c)](_0x86bc64,_0x1b5304);},'Efhaz':_0x2fd94f[_0x1d29cf(0xe34)]},_0x593518=_0x3aa50a();if(!_0x593518||!_0x593518['cv'])return;try{var _0x1a02ba=_0x593518['cv']['getCo'+_0x1d29cf(0x3c1)]&&_0x593518['cv'][_0x1d29cf(0x937)+'ntext']('2d');if(!_0x1a02ba)return;var _0x1c682f=_0x593518['cv'][_0x1d29cf(0x1bd)],_0x58fb1f=_0x2fd94f[_0x1d29cf(0xdd2)](_0x1c682f,0x87*-0x33+-0x1*0xd87+-0x96*-0x45),_0x170919=_0x2fd94f[_0x1d29cf(0xa69)](_0x537d8c),_0x46312c=_0x170919['me'];_0x1a02ba[_0x1d29cf(0xcaf)+_0x1d29cf(0xcea)](0x1d53*-0x1+-0x66*0x5d+0x1*0x4261,0x3b*-0x1d+-0x12c5+0x1974,_0x1c682f,_0x1c682f),_0x1a02ba[_0x1d29cf(0xa64)+_0x1d29cf(0x230)+'e']=_0x1d29cf(0xc39)+_0x1d29cf(0xdce)+_0x1d29cf(0xc7f)+_0x1d29cf(0xa72)+')',_0x1a02ba[_0x1d29cf(0x499)+'idth']=0x2*-0xac1+-0x86*0x17+0x218d;for(var _0x335c37=0x394+0x2f*0x83+-0x1ba0;_0x2fd94f[_0x1d29cf(0x4da)](_0x335c37,0x109d+0x1436+-0x24d0);_0x335c37++){_0x1a02ba['begin'+_0x1d29cf(0xcad)](),_0x1a02ba[_0x1d29cf(0xa23)](_0x58fb1f,_0x58fb1f,(_0x58fb1f-(-0x1286+-0xb3*-0x1d+-0x59*0x5))*_0x335c37/(-0x13f4+0x1818+-0x421),-0x1*0x1001+-0x25f9+0x8d*0x62,Math['PI']*(0x8dd*0x4+0x2b*-0x9f+-0x8bd)),_0x1a02ba['strok'+'e']();}_0x1a02ba[_0x1d29cf(0xafc)+_0x1d29cf(0xcad)](),_0x1a02ba[_0x1d29cf(0x5f7)+'o'](0x192f+0x1e3b+-0x3766,_0x58fb1f),_0x1a02ba['lineT'+'o'](_0x1c682f-(-0xf41+0x36d*0x9+0x18*-0xa6),_0x58fb1f),_0x1a02ba['moveT'+'o'](_0x58fb1f,-0xa3f+0x4*0x9c+0x7d3),_0x1a02ba[_0x1d29cf(0x608)+'o'](_0x58fb1f,_0x1c682f-(0x5b*-0x29+0x1f11+0x6f*-0x26)),_0x1a02ba[_0x1d29cf(0xa64)+'e']();if(!_0x46312c){if(_0x593518['lg'])_0x593518['lg'][_0x1d29cf(0xe45)+'onten'+'t']='';return;}var _0x298ff2=_0x2fd94f['HaPey'](_0x58fb1f-(0x1a26+0x5*-0x78f+0xbab),_0x23df0c[_0x1d29cf(0xcc7)]),_0x894010=null,_0x3c5c3a=_0x66b4c0[_0x1d29cf(0x226)+_0x1d29cf(0xcc8)+_0x1d29cf(0xa56)+'nc']||{},_0xda3d78=Object[_0x1d29cf(0x859)](_0x3c5c3a);for(var _0x5b27fd=-0x20b*0x1+0x2477+0x89b*-0x4;_0x2fd94f['KAzbF'](_0x5b27fd,_0xda3d78['lengt'+'h']);_0x5b27fd++){var _0x3b7864=_0x284134(_0x3c5c3a[_0xda3d78[_0x5b27fd]][_0x1d29cf(0x6e1)],-0x10a0+0x19b0+-0x8dc,-0x697+-0x221*-0xd+-0x41*0x53);if(_0x3b7864&&_0x2fd94f[_0x1d29cf(0x938)](_0x3b7864[-0x20d1*-0x1+-0x63a*0x1+-0x1a97],0x1433+-0x4*0x6cf+0x709*0x1)&&_0x3b7864[0x1*-0x448+0x4*-0x5c1+-0x1b4d*-0x1]===-0x20e3+-0xb41+0x2c24&&_0x2fd94f[_0x1d29cf(0xd17)](_0x3b7864[0x1*0x173b+-0x16e0+-0x59],-0x6e2+-0x2687+0x2d69)){if(_0x2fd94f['MRNTF']('FsJGL','FsJGL')){if(!_0xb32551['on'])_0x28903d(!![],![]);else{if(_0x4d98ba['boxes'])_0x2fd94f[_0x1d29cf(0x862)](_0x125cbf,![],![]);else{if(_0x2fd94f['rluQq'](_0x1cdb20))_0x59d9a9(!![],!![]);else _0x2fd94f[_0x1d29cf(0x1fd)](_0x5756a9,![],![]);}}}else{_0x894010=_0x2fd94f[_0x1d29cf(0x63a)](_0x55b637,_0x2fd94f[_0x1d29cf(0x84f)](_0x3c5c3a[_0xda3d78[_0x5b27fd]]['ptr'],0x2461*0x1+-0x5*-0x50d+-0x3d4a),_0x1d29cf(0x5df));break;}}}var _0x5aad86=-0x17c4+-0x1f66+-0x133*-0x2e;for(var _0x10275d=-0x1e16+0x7b*-0x12+0x26bc;_0x2fd94f['uDgTG'](_0x10275d,_0x170919[_0x1d29cf(0x67f)]['lengt'+'h']);_0x10275d++){if('CFsUe'===_0x2fd94f['vQJKD']){var _0x5f0ca8=_0x170919[_0x1d29cf(0x67f)][_0x10275d],_0x57ef46=_0x2fd94f[_0x1d29cf(0x894)](_0x5f0ca8['x']-_0x46312c[_0x1d29cf(0x364)][0x2b*0xa3+-0x1*-0x489+-0x2*0xff5],_0x298ff2),_0xeb06d4=_0x2fd94f[_0x1d29cf(0x52d)](_0x2fd94f['zQhIM'](_0x5f0ca8['z'],_0x46312c[_0x1d29cf(0x364)][0x1*-0x1d3c+-0xcbf+0xdff*0x3]),_0x298ff2),_0x36da0b=Math['sqrt'](_0x2fd94f[_0x1d29cf(0x96e)](_0x57ef46,_0x57ef46)+_0xeb06d4*_0xeb06d4),_0x49aaf8=_0x58fb1f,_0x4d04b7=_0x58fb1f;_0x2fd94f['Nrfly'](_0x36da0b,_0x2fd94f[_0x1d29cf(0x19c)](_0x58fb1f,-0x1b6b+-0x656+0x21c7))?_0x2fd94f[_0x1d29cf(0xd35)]('deuOs',_0x1d29cf(0x78f))?(_0x572b83['begin'+_0x1d29cf(0xcad)](),_0xc5aa95[_0x1d29cf(0xa23)](_0x2cd6cf,_0x436ddc,_0x2fd94f[_0x1d29cf(0x974)](_0x2fd94f['usmTX'](_0x1046a0-(-0x2707+0x6*0x5f4+0x353),_0xc7f91e),0x12b*0x4+0x228f+0x2738*-0x1),-0x1*-0x1edb+0x8*0xfb+-0x1*0x26b3,_0x21700a['PI']*(0x1e4f+-0x1832+0x209*-0x3)),_0xe6245f['strok'+'e']()):(_0x49aaf8=_0x58fb1f+_0x2fd94f[_0x1d29cf(0xd7c)](_0x57ef46,_0x36da0b)*_0x2fd94f[_0x1d29cf(0x803)](_0x58fb1f,0x922+0x148f*-0x1+-0x1*-0xb73),_0x4d04b7=_0x58fb1f+_0xeb06d4/_0x36da0b*(_0x58fb1f-(-0x759+-0xce0+0x49*0x47))):(_0x49aaf8=_0x2fd94f['EpuWI'](_0x58fb1f,_0x57ef46),_0x4d04b7=_0x58fb1f+_0xeb06d4);var _0x4873af=_0x894010!==null&&_0x5f0ca8[_0x1d29cf(0xcf8)]===_0x894010;_0x1a02ba['fillS'+'tyle']=_0x4873af?_0x2fd94f[_0x1d29cf(0x9bc)]:_0x2fd94f[_0x1d29cf(0x68e)],_0x1a02ba[_0x1d29cf(0xafc)+'Path'](),_0x1a02ba[_0x1d29cf(0xa23)](_0x49aaf8,_0x4d04b7,_0x4873af?-0xcb*-0x30+-0x2293+-0x37b:-0x9c*-0xb+-0x1*-0x14f+0x20*-0x40+0.20000000000000018,-0x1*-0x883+-0x1ff1+0x176e,_0x2fd94f[_0x1d29cf(0x247)](Math['PI'],-0x4*-0x6ee+0x2*0x5ae+-0x1389*0x2)),_0x1a02ba[_0x1d29cf(0xba3)](),_0x5aad86++;}else{_0x5212f8(_0xa352d9&&_0x2d7fdd[_0x1d29cf(0xce0)](typeof _0xddb9db['on'],_0x1d29cf(0x4c3)+'an')?_0x924bec['on']:_0x2b1bca['on'],_0x58b0cd&&typeof _0x565bd0['facto'+'r']===_0x2d7fdd['Efhaz']?_0x5a46f4[_0x1d29cf(0x891)+'r']:_0x5dc470['facto'+'r']);return;}}_0x1a02ba['fillS'+'tyle']=_0x2fd94f[_0x1d29cf(0xc31)],_0x1a02ba[_0x1d29cf(0xafc)+'Path'](),_0x1a02ba['arc'](_0x58fb1f,_0x58fb1f,-0x25*-0x55+-0xcb4*0x3+0xceb*0x2,-0x920+-0x8*0x379+-0x8*-0x49d,Math['PI']*(-0x6d6*-0x1+-0x6ad*0x1+-0x27)),_0x1a02ba['fill'](),_0x593518['lg']&&(_0x593518['lg']['textC'+_0x1d29cf(0xb09)+'t']=_0x2fd94f[_0x1d29cf(0x436)](_0x2fd94f['dFQzn'](_0x2fd94f['MNGRq'](_0x1d29cf(0xa14),_0x5aad86)+_0x2fd94f[_0x1d29cf(0x7be)]+Math['round'](_0x23df0c[_0x1d29cf(0xcc7)]),'m'),_0x23df0c[_0x1d29cf(0x664)]?_0x2fd94f[_0x1d29cf(0x9f2)](_0x2fd94f['qSfZM']('\x20·\x20fo'+'v\x20',Math[_0x1d29cf(0x632)](_0xabaa41[_0x1d29cf(0xc71)])),'°'):'')+(_0x2fd94f[_0x1d29cf(0xa02)](_0x894010,null)?_0x2fd94f[_0x1d29cf(0x76e)](_0x2fd94f[_0x1d29cf(0x9b0)],_0x894010):''));}catch(_0x168603){}}function _0x297343(){var _0x4d2e5e=_0x3f0b99,_0x5b58fa=_0x66b4c0['Photo'+'nNetw'+'orkSy'+'nc']||{};if(!Object[_0x4d2e5e(0x859)](_0x5b58fa)[_0x4d2e5e(0x35a)+'h'])return![];return!!_0x2fd94f[_0x4d2e5e(0xb27)](_0x5ed94d);}function _0x529079(_0x214f63){var _0x4ef2b8=_0x3f0b99;if(_0x2fd94f['MeCEF']!=='QgVFo')_0x1b7847(_0x564eaa['on'],_0x428aa6);else try{var _0x2ee685=_0x58f20f;if(_0x2ee685&&_0x2ee685['el'])_0x2ee685['el'][_0x4ef2b8(0x76c)]['displ'+'ay']=_0x214f63?'':'none';var _0x222dd3=_0x182f73;if(_0x222dd3&&_0x222dd3['cv'])_0x222dd3['cv'][_0x4ef2b8(0x76c)]['displ'+'ay']=_0x214f63?'':_0x4ef2b8(0x761);}catch(_0x43ba1f){}}var _0x3aaf51=-0xca7*0x3+-0x13*-0x12e+0xf8b,_0x57a993=-0x22df+0x146b+0xe74;function _0x5a391b(_0x4b86c5){var _0x33434d=_0x3f0b99;if(_0x2fd94f['eRSsZ'](_0x33434d(0x672),'SZrzW'))return _0x2daf9e['tfPtr']=0x2bb+-0x16a9*0x1+-0x1*-0x13ee,_0x49d32d(_0x2fd94f[_0x33434d(0xde1)]+_0x1c5514);else typeof requestAnimationFrame===_0x2fd94f['hRKDt']?_0x3aaf51=_0x2fd94f['kOqRI'](requestAnimationFrame,_0x37271c):_0x57a993=_0x2fd94f[_0x33434d(0x57d)](setTimeout,_0x37271c,_0x2fd94f[_0x33434d(0xe6f)](_0x4b86c5,0x1*-0x11e4+0xc53+0x127*0x5));}function _0x37271c(){var _0x3b0982=_0x3f0b99,_0x4725ed={'YhmPY':function(_0x251daf,_0x40759e){return _0x251daf+_0x40759e;}};_0x3aaf51=-0x7*-0x32d+-0x11*-0x17+0x1*-0x17c2;if(!_0x23df0c['on']||!_0x297343()){if(_0x3b0982(0x864)===_0x2fd94f[_0x3b0982(0x3c8)])_0x165277['setIt'+'em'](_0xa8195d,_0x9f7a73(_0x541271[_0x3b0982(0xc71)]));else{_0x2fd94f[_0x3b0982(0x3db)](_0x529079,![]),_0x2fd94f['rkPNl'](_0x5a391b,-0x713*-0x4+-0x2139+0x619*0x1);return;}}_0x529079(!![]),_0x31a9f9(),_0x3aa50a();if(_0x23df0c['boxes'])_0x1cf1ef();var _0x530577=null;try{_0x2d4e1c();}catch(_0x3d2a3c){}try{_0x530577=_0x2fd94f[_0x3b0982(0x98d)](_0x537d8c);}catch(_0x4fa6c8){}try{if(_0x3b0982(0xbd2)!==_0x2fd94f['QaLYu'])return _0x4725ed['YhmPY'](_0x4725ed[_0x3b0982(0x45a)]('0x',_0x429dab['o']<-0x1f13*-0x1+-0x144+-0x1dcf?'?':_0x29e524['o']['toStr'+'ing'](0x8*0x28b+-0x13e2+-0x66))+'\x20(',_0xa0536['why'])+')';else _0xaad226();}catch(_0x4b6c92){}try{if(_0x2fd94f[_0x3b0982(0x3fc)]('QFjPP',_0x2fd94f[_0x3b0982(0x957)]))_0x1873b1(_0x530577);else try{return _0x530b0b&&_0x2b7d95['buffe'+'r']?_0x3cee23[_0x3b0982(0xd32)+'r'][_0x3b0982(0x701)+_0x3b0982(0xa59)]:-0x285*-0x6+0x13d2+-0x2b*0xd0;}catch(_0x1bf7ff){return 0x1c*-0x12f+0x8c*-0x9+0x2610;}}catch(_0x2638b8){}_0x2fd94f[_0x3b0982(0x69a)](_0x5a391b,0x43b*0x1+-0x11*-0x14c+-0x1a47*0x1);}function _0x4b6f4f(){var _0x19cc3d=_0x3f0b99,_0x27c93d={'mCtCW':function(_0x1a1ed3){return _0x1a1ed3();},'ETpaP':function(_0x3f0115,_0x51b19d){return _0x3f0115+_0x51b19d;}},_0x30e4a1=window[_0x19cc3d(0x518)+_0x19cc3d(0x4e6)+_0x19cc3d(0x1ec)]&&window['Unity'+_0x19cc3d(0x4e6)+_0x19cc3d(0x1ec)][_0x19cc3d(0xb7c)+'me']||null,_0xa42485=_0x30e4a1&&_0x30e4a1['il2Cp'+_0x19cc3d(0xc47)+_0x19cc3d(0x80f)],_0x2957f6=_0xa42485&&_0xa42485['scrip'+'tData'],_0x3bf055={},_0x56f2d1=[];for(var _0x154a53 in _0x48cc1a){_0x3bf055[_0x154a53]='0x'+_0x48cc1a[_0x154a53][_0x19cc3d(0x6e1)][_0x19cc3d(0x7e7)+_0x19cc3d(0xa00)](0x7bd+0x1b1f+-0x22cc);if(_0x48cc1a[_0x154a53][_0x19cc3d(0x8c3)+_0x19cc3d(0x539)])_0x56f2d1['push'](_0x154a53);}var _0x331613={};for(var _0x4cb2e1 in _0x48cc1a)_0x331613[_0x4cb2e1]=_0x5d5e6b(_0x48cc1a[_0x4cb2e1]['ptr']);var _0x416365={},_0x4b9530=null;try{if(_0x2fd94f[_0x19cc3d(0xaaf)](_0x19cc3d(0xd92),_0x2fd94f[_0x19cc3d(0x22a)]))_0x416365=_0x4e1b9f();else try{var _0x33177b=_0x2fd94f[_0x19cc3d(0x6b5)](_0x14295b);return{'ok':_0x33177b['ok'],'source':_0x33177b[_0x19cc3d(0x655)+'e'],'why':_0x33177b[_0x19cc3d(0xbec)],'tried':_0x33177b[_0x19cc3d(0xd46)],'camPtr':_0x2fd94f['gnDmc']('0x',_0x33177b[_0x19cc3d(0x640)+'r']['toStr'+'ing'](-0x2*-0x11a1+-0x1a9e+-0x894)),'tfPtr':'0x'+_0x33177b[_0x19cc3d(0x3bb)][_0x19cc3d(0x7e7)+_0x19cc3d(0xa00)](-0x2*0x8f1+0x1331*-0x1+0x2523),'fov':_0x33177b['fov'],'quat':_0x33177b[_0x19cc3d(0x74f)],'pos':_0x33177b[_0x19cc3d(0xdd9)],'basis':_0x33177b[_0x19cc3d(0x2d8)],'errors':_0x33177b['error'+'s']['slice'](-0x7f+0x447+-0x4*0xf2,-0x1b1*-0x13+-0x1*-0x19d6+-0x39f5)};}catch(_0x26fed2){return{'ok':![],'error':_0x2fd94f['ZNMkm'](_0x44b909,_0x26fed2&&_0x26fed2[_0x19cc3d(0x437)+'ge']||_0x26fed2)['slice'](-0x139d+-0x827+0x1bc4,0xbf5+0x5d6+-0x1153)};}}catch(_0x2239e1){_0x4b9530=String(_0x2239e1&&_0x2239e1[_0x19cc3d(0x437)+'ge']||_0x2239e1);}var _0x3fce92={'version':_0x25c943,'when':new Date()[_0x19cc3d(0xdd5)+'Strin'+'g'](),'elapsedMs':_0x2fd94f['eiCCs'](Date['now'](),_0x13f4db),'frame':location[_0x19cc3d(0x2da)][_0x19cc3d(0x257)](0x1d*0x8e+-0xd0a+-0x30c,0x2*-0x12f4+-0xe3e+0x1*0x349e),'host':_0xadb686,'frameRole':_0x253423,'uwmk':!!_0x30e4a1,'il2CppContext':!!_0xa42485,'typeCount':_0x2957f6?Object[_0x19cc3d(0x859)](_0x2957f6)[_0x19cc3d(0x35a)+'h']:null,'arm':_0x1912a1,'assemblies':_0x28276f,'hooksTotal':_0x57a7b3['lengt'+'h'],'hooksApplied':_0x15b85f(),'hooksResolved':_0x4999eb(),'hooksRegisteredAtArm':_0x1912a1[_0x19cc3d(0x8b9)+'Regis'+_0x19cc3d(0x7f0)]||-0x72*-0x57+0x36*0x61+-0x3b34*0x1,'hookErrors':_0x12802f['slice'](0x1a1d+0x1*-0x20e8+0x1*0x6cb,0x1*0x1b2f+-0x224e+0x727),'instances':_0x3bf055,'classNames':_0x331613,'instancesReplaced':_0x56f2d1,'hookFireProof':_0x17dc5c,'survey':_0x416365,'actkKeys':_0x17ecfd,'surveyRows':Object[_0x19cc3d(0x859)](_0x416365)['reduc'+'e'](function(_0x296d69,_0x30cdbf){var _0x234bab=_0x19cc3d;return _0x296d69+_0x416365[_0x30cdbf][_0x234bab(0x35a)+'h'];},-0x2629*-0x1+-0x5*0x61d+-0xd8*0x9),'reads':{'ok':_0x15e079['ok'],'failed':_0x15e079['faile'+'d'],'lastError':_0x15e079[_0x19cc3d(0xc5e)+'rror'],'source':_0x15e079['sourc'+'e']},'identity':_0x2fd94f['SQCeD'](_0x1296f4),'globals':_0x66f5bd(),'wasmMemory':{'captured':!!_0x25a62b,'atMs':_0x172bd8,'bytes':(function(){var _0x5b2fa7=_0x19cc3d;try{return _0x25a62b&&_0x25a62b[_0x5b2fa7(0xd32)+'r']?_0x25a62b[_0x5b2fa7(0xd32)+'r'][_0x5b2fa7(0x701)+_0x5b2fa7(0xa59)]:-0x60*-0x38+-0x1bef+0x6ef;}catch(_0x7b6029){return-0x3b0*0xa+0x20db*-0x1+0x45bb;}}()),'exportKeys':_0x4000a5},'diff':_0x216ae6[_0x19cc3d(0x257)](0x1019+-0x177*-0x1+-0x1190,-0x1d*-0xf6+-0x2400+-0x2*-0x425),'speed':{'on':_0x30cca2['on'],'factor':_0x30cca2[_0x19cc3d(0x891)+'r'],'writes':_0x578a3b,'scaled':_0x34cdf0['slice'](-0x2279+0x918+-0x49*-0x59,0x55*-0x4c+0x20d*-0x7+0x27a7),'skipped':_0x4f19c5[_0x19cc3d(0x257)](0x1bff+0x226a+-0xd*0x4cd,-0x1*-0x2341+-0x65b+-0x1cd6)},'esp':_0x4e6ac2(),'view':_0x23e849(),'camera':(function(){var _0xfc0db5=_0x19cc3d;try{var _0x29cf23=_0x27c93d['mCtCW'](_0x2d4e1c);return{'ok':_0x29cf23['ok'],'source':_0x29cf23[_0xfc0db5(0x655)+'e'],'why':_0x29cf23[_0xfc0db5(0xbec)],'tried':_0x29cf23['tried'],'camPtr':_0x27c93d[_0xfc0db5(0x9ca)]('0x',_0x29cf23['camPt'+'r']['toStr'+_0xfc0db5(0xa00)](-0x5*-0x4cf+-0x2a*-0x16+-0x1b97)),'tfPtr':'0x'+_0x29cf23['tfPtr']['toStr'+_0xfc0db5(0xa00)](-0x1bca+-0xe3b*-0x1+0xd9f),'fov':_0x29cf23[_0xfc0db5(0xc71)],'quat':_0x29cf23['quat'],'pos':_0x29cf23[_0xfc0db5(0xdd9)],'basis':_0x29cf23[_0xfc0db5(0x2d8)],'errors':_0x29cf23['error'+'s']['slice'](-0x24df*0x1+-0x13*-0x139+0x4*0x369,-0x1*-0x232e+0x1857+-0x3b81)};}catch(_0x426f6a){return{'ok':![],'error':String(_0x426f6a&&_0x426f6a['messa'+'ge']||_0x426f6a)['slice'](-0x103f*0x2+-0x3*-0xaa2+-0x98*-0x1,0x1ef*-0x10+-0xc26+0x2b8e)};}}()),'angles':(function(){var _0x569996=_0x19cc3d,_0x377249={'JNart':function(_0x1d3f82,_0x500c67){return _0x1d3f82===_0x500c67;},'Owzys':_0x2fd94f['gELUv'],'apGgw':function(_0x519ef8,_0x20e734){return _0x519ef8>_0x20e734;}},_0x3acd9d=_0x171da1(),_0x9fd713=null,_0x39a0de=null,_0x238632=_0x2fd94f['sUDdn'](_0x5ed94d);if(_0x238632){var _0x111304=_0x165b3a(_0x238632['eye'],[_0x238632[_0x569996(0x77f)][-0xa82+0x6*-0x214+0x2*0xb7d],_0x238632[_0x569996(0x77f)][0x23dd*-0x1+-0x1421+0x5*0xb33],_0x238632['eye'][-0x69b+0x1f30+0x1*-0x1893]+(0x124e+-0x220+-0x102d)],-0x734*-0x3+-0x9da*0x1+-0x7da,0x191*-0xb+-0xf69+-0x4*-0x923);if(_0x111304){if(_0x2fd94f['EmeIW'](_0x569996(0xdd7),_0x2fd94f[_0x569996(0x434)]))_0x9fd713=_0x111304['x']/(-0x1557*0x1+0x8c1+0x107e),_0x39a0de=_0x2fd94f[_0x569996(0x404)](_0x111304['y'],0x67*-0x1a+0x23b2+0x104*-0x15);else{var _0x2c35e7=_0x1ade1e['getEl'+'ement'+'ById']('sakur'+_0x569996(0x2e6)+'v2');if(_0x2c35e7)_0x2c35e7[_0x569996(0xa48)+'e']();}}}var _0x554e6f=null,_0x47e7a0=null;if(_0x238632){var _0x2f975f=_0x165b3a(_0x238632['eye'],[_0x238632[_0x569996(0x77f)][0x1620+0x75*-0x1d+-0x8df],_0x238632[_0x569996(0x77f)][0x6b*-0x5b+0x29d+0x236d]+(0x905*-0x1+-0x1974+0x2283),_0x2fd94f['IdxRy'](_0x238632[_0x569996(0x77f)][0x11f1+0x38f*-0x5+-0x24],-0x193d+0x18*0xf5+0x3*0xc5)],-0x1882+-0x529*0x2+0x26bc,-0x26ef+-0x22e+0x2d05);if(_0x2f975f)_0x554e6f=_0x2f975f['y']/(0x9*0x213+-0xead*0x1+-0x16);var _0x1bedca=_0x2fd94f[_0x569996(0x49d)](_0x165b3a,_0x238632[_0x569996(0x77f)],[_0x238632[_0x569996(0x77f)][-0x1f7b+0xd*-0xb5+0xa2b*0x4],_0x238632[_0x569996(0x77f)][-0x131a+-0x766*0x2+0xb*0x315]-(-0x4a3+-0x385*0x4+0x12c1),_0x238632[_0x569996(0x77f)][-0xc94+-0x1abe+0x3*0xd1c]+(-0x2*-0x72a+-0x1e*0x86+0x16a*0x1)],-0x1*-0x26d5+-0x148c+0xe61*-0x1,-0x203a+-0x7*0x529+0x4841);if(_0x1bedca)_0x47e7a0=_0x2fd94f['yHLUf'](_0x1bedca['y'],-0xc45+-0x3e6*0x7+0x2b77*0x1);}return{'identified':_0x437a6e[_0x569996(0x293)+'ified'],'why':_0x437a6e['why'],'source':_0x437a6e[_0x569996(0x655)+'e'],'viewHooks':(function(){var _0x4ffeca=_0x569996;try{if(_0x377249[_0x4ffeca(0x5a0)](_0x4ffeca(0xa67),'vwWeE'))return _0x3d7929();else _0x25a60a[_0x4ffeca(0xdc1)]=![];}catch(_0x160d4a){return{'err':String(_0x160d4a&&_0x160d4a[_0x4ffeca(0x437)+'ge']),'stack':String(_0x160d4a&&_0x160d4a[_0x4ffeca(0x48e)])};}}()),'setterPair':(function(){var _0x12adbc=_0x569996,_0x1242fa={'AwFHD':_0x377249[_0x12adbc(0xd0e)],'GPhky':function(_0x5b3d9f,_0x57ae2b){return _0x377249['apGgw'](_0x5b3d9f,_0x57ae2b);}};if('KyFDt'!==_0x12adbc(0xcb2)){var _0x6ed747=_0x1242fa[_0x12adbc(0xe42)][_0x12adbc(0xae3)]('|'),_0x394099=-0x15*-0x22+0x1*-0x13ff+0x1135*0x1;while(!![]){switch(_0x6ed747[_0x394099++]){case'0':_0xc045a6[_0x12adbc(0xd5a)+'s']++;continue;case'1':_0x1ca97c['ok']=![];continue;case'2':if(_0x1242fa['GPhky'](_0xcd9d56[_0x12adbc(0xd5a)+'s'],_0x47f697))return _0x219330[_0x12adbc(0x74f)]=null,_0x2083c3[_0x12adbc(0x2d8)]=null,_0x61433d['pos']=null,_0x581e5b;continue;case'3':_0xcd01dc['why']=_0x581d23;continue;case'4':return _0x3c7ff2;case'5':_0x267e9f['stale']++;continue;}break;}}else{var _0x3e0345=_0x54e610();return _0x3e0345?{'a':_0x3e0345[_0x12adbc(0xbe8)],'b':_0x3e0345['rawB'],'hits':_0x3e0345['hits'],'order':_0x3e0345[_0x12adbc(0xdae)]}:null;}}()),'yawAt':_0x437a6e[_0x569996(0x466)+_0x569996(0x84e)]||_0x569996(0xdf4)+_0x569996(0xd6c)+'s)','pitchAt':_0x437a6e['pitch'+'Gette'+'r']||_0x569996(0x51a)+_0x569996(0xd6c)+'s)','getters':_0x437a6e[_0x569996(0x770)+'rs'],'rawPitch':_0x437a6e[_0x569996(0x82c)+_0x569996(0x23a)],'rawYaw':_0x437a6e['rawYa'+'w'],'pitch':_0x437a6e[_0x569996(0xb40)],'yaw':_0x437a6e['yaw'],'legacyOffsetsCleared':_0x2a3afb,'fov':_0xabaa41['fov'],'fovSane':_0xabaa41[_0x569996(0xc71)]>=0xc12+-0x1*0x1b54+0xf7e&&_0x2fd94f[_0x569996(0x4da)](_0xabaa41[_0x569996(0xc71)],-0x1*-0x93e+0x5*-0x3c7+0xa13),'centreX':_0x9fd713,'centreY':_0x39a0de,'aboveY':_0x554e6f,'belowY':_0x47e7a0,'projection':_0x469d76()};}()),'fov':_0xabaa41[_0x19cc3d(0xc71)],'espView':{'on':_0x23df0c['on'],'boxes':_0x23df0c[_0x19cc3d(0x664)],'span':_0x23df0c['span']},'local':(function(){var _0x436d29=_0x19cc3d,_0x528eee=_0x5ed94d();if(!_0x528eee)return null;return{'ptr':_0x2fd94f[_0x436d29(0x488)]('0x',_0x528eee['ptr']['toStr'+'ing'](-0x5*-0x38f+0x19d+-0x1358)),'feet':_0x528eee[_0x436d29(0x364)],'eye':_0x528eee[_0x436d29(0x77f)],'posAt':_0x528eee['posAt'],'copies':_0x528eee[_0x436d29(0x7e2)+'s'],'cluster':_0x528eee['clust'+'er'],'eyeHeight':_0x589469,'pitch':_0x528eee['pitch'],'yaw':_0x528eee[_0x436d29(0x7cc)],'reach':_0x528eee['reach']};}()),'uwmkLog':_0x58afc5[_0x19cc3d(0x257)](-0x19bb+-0xd*-0x240+-0x1*0x385,0x9*-0xa7+-0x5*0x166+0xcf1),'warnings':[]};if(_0x4b9530)_0x3fce92[_0x19cc3d(0x9a9)+'ngs']['push'](_0x2fd94f[_0x19cc3d(0x983)](_0x2fd94f['DfuWr'],_0x4b9530));if(_0x1912a1[_0x19cc3d(0xa73)])_0x3fce92[_0x19cc3d(0x9a9)+_0x19cc3d(0xe47)][_0x19cc3d(0x1ea)]('UWMK\x20'+_0x19cc3d(0xd18)+'g\x20fai'+'led:\x20'+_0x1912a1[_0x19cc3d(0xa73)]);_0x2fd94f[_0x19cc3d(0xb82)](_0x3fce92[_0x19cc3d(0x200)+_0x19cc3d(0x1a1)],0x22b*0x9+-0x390+-0xff3)&&Object[_0x19cc3d(0x859)](_0x3fce92[_0x19cc3d(0x8e8)+'nces'])[_0x19cc3d(0x35a)+'h']>0xc83*-0x1+-0x5bd+0x1240&&_0x3fce92[_0x19cc3d(0x9a9)+_0x19cc3d(0xe47)]['push'](_0x19cc3d(0x6d7)+_0x19cc3d(0x674)+Object['keys'](_0x3fce92[_0x19cc3d(0x8e8)+_0x19cc3d(0x581)])[_0x19cc3d(0x35a)+'h']+(_0x19cc3d(0x6bc)+'ct(s)'+_0x19cc3d(0xc25)+_0x19cc3d(0xbd3)+'0\x20fie'+_0x19cc3d(0xc37))+(_0x15e079[_0x19cc3d(0xc5e)+_0x19cc3d(0xbdf)]?_0x2fd94f[_0x19cc3d(0x90b)](_0x19cc3d(0xdba)+'n:\x20',_0x15e079['lastE'+_0x19cc3d(0xbdf)]):'No\x20re'+_0x19cc3d(0x713)+_0x19cc3d(0xb9d)+'\x20so\x20e'+'very\x20'+_0x19cc3d(0x5d9)+_0x19cc3d(0x7db)+_0x19cc3d(0x3c9)+'ped\x20b'+'y\x20typ'+'e.'));_0x3fce92['ident'+_0x19cc3d(0xe16)]&&_0x3fce92[_0x19cc3d(0x293)+'ity']['tagMa'+_0x19cc3d(0x616)]===![]&&_0x3fce92[_0x19cc3d(0x9a9)+_0x19cc3d(0xe47)]['push'](_0x2fd94f[_0x19cc3d(0xb66)]+(_0x19cc3d(0x8c3)+'ced\x20b'+'y\x20a\x20d'+'iffer'+_0x19cc3d(0x899)+_0x19cc3d(0xd7d)+_0x19cc3d(0x5d7)+'o\x20we\x20'+'are\x20a'+'sking'+_0x19cc3d(0x45c)+_0x19cc3d(0x384)+'\x20obje'+'ct\x20fo'+'r\x20')+_0x2fd94f['OYPDd']+(_0x19cc3d(0x9be)+_0x19cc3d(0x264)+_0x19cc3d(0x478)+'ipt\x20i'+_0x19cc3d(0xd99)+_0x19cc3d(0x594)+'nkey\x20'+'and\x20h'+_0x19cc3d(0xb64)+'eload'+'.'));if(_0x3fce92[_0x19cc3d(0x293)+_0x19cc3d(0xe16)]&&_0x3fce92[_0x19cc3d(0x293)+_0x19cc3d(0xe16)][_0x19cc3d(0x52e)+_0x19cc3d(0x3ac)+_0x19cc3d(0x878)+_0x19cc3d(0x1db)+_0x19cc3d(0xe75)]===![]){if(_0x2fd94f[_0x19cc3d(0x337)]('GKowY',_0x19cc3d(0xbb4)))_0x3fce92[_0x19cc3d(0x9a9)+_0x19cc3d(0xe47)]['push'](_0x2fd94f[_0x19cc3d(0x366)]+(_0x19cc3d(0xa3f)+'st\x20a\x20'+_0x19cc3d(0xe0a)+_0x19cc3d(0xa3d)+'Runti'+'me\x20in'+'stanc'+'e\x20tha'+'n\x20the'+_0x19cc3d(0xdec)+_0x19cc3d(0x405)+_0x19cc3d(0x5cd)+_0x19cc3d(0xe36)));else return new _0x54260d(_0xf5a1f0['buffe'+'r'],_0x1a974a['byteO'+_0x19cc3d(0xcb4)],_0x5db6bd[_0x19cc3d(0x701)+'ength']);}if(_0x3fce92[_0x19cc3d(0xe05)]&&_0x3fce92['esp']['note'])_0x3fce92[_0x19cc3d(0x9a9)+'ngs'][_0x19cc3d(0x1ea)](_0x2fd94f[_0x19cc3d(0x2dc)]+_0x3fce92['esp'][_0x19cc3d(0x9b4)]);if(_0x3fce92[_0x19cc3d(0x42f)+'ls']&&!_0x3fce92[_0x19cc3d(0x42f)+'ls'][_0x19cc3d(0xc8c)+'8']){var _0x16822f='';_0x3fce92[_0x19cc3d(0x22b)+_0x19cc3d(0x8cf)+_0x19cc3d(0x256)]&&(_0x16822f=_0x2fd94f[_0x19cc3d(0x9b6)](_0x2fd94f['GRDyg'](_0x2fd94f[_0x19cc3d(0x291)],_0x3fce92[_0x19cc3d(0x22b)+_0x19cc3d(0x8cf)+'oof']['atMs'])+(_0x19cc3d(0xae5)+'th\x20or'+_0x19cc3d(0xe5d)+_0x19cc3d(0x75a)+'=')+_0x3fce92['hookF'+_0x19cc3d(0x8cf)+'oof'][_0x19cc3d(0x1f0)+_0x19cc3d(0xadf)+'nc']+('\x20and\x20'+'game\x20'+_0x19cc3d(0xc93)+_0x19cc3d(0xb1d))+_0x3fce92[_0x19cc3d(0x22b)+_0x19cc3d(0x8cf)+'oof'][_0x19cc3d(0xc93)+'veGam'+_0x19cc3d(0xa95)+'re'],_0x2fd94f['sPacz'])+(_0x3fce92['hookF'+_0x19cc3d(0x8cf)+_0x19cc3d(0x256)][_0x19cc3d(0x9ec)+_0x19cc3d(0x357)+_0x19cc3d(0x2bd)+'e']||'none')+_0x2fd94f[_0x19cc3d(0x33d)]),_0x3fce92[_0x19cc3d(0x9a9)+'ngs'][_0x19cc3d(0x1ea)](_0x2fd94f[_0x19cc3d(0x59e)](_0x2fd94f[_0x19cc3d(0xdb5)](_0x19cc3d(0x518)+'\x20inst'+_0x19cc3d(0x3ec)+_0x19cc3d(0xaa1)+_0x19cc3d(0x195)+_0x19cc3d(0x396)+_0x19cc3d(0x785)+'urce:'+'\x20',_0x3fce92[_0x19cc3d(0x42f)+'ls']['gameS'+'ource']||'none'),_0x19cc3d(0xc6f))+('Heap\x20'+_0x19cc3d(0xdad)+'\x20stay'+_0x19cc3d(0x283)+'ked\x20u'+'ntil\x20'+_0x19cc3d(0x20b)+_0x19cc3d(0x18b)+_0x19cc3d(0x492)+_0x19cc3d(0x5bd)+'odule'+'.HEAP'+_0x19cc3d(0xe4c)+'\x20reac'+'hable'+'.')+_0x16822f);}(_0x3fce92[_0x19cc3d(0x42f)+'ls']&&!_0x3fce92[_0x19cc3d(0x42f)+'ls']['value'+_0x19cc3d(0x988)+'er']||_0x2fd94f[_0x19cc3d(0xb8c)](_0x3fce92['globa'+'ls'][_0x19cc3d(0x244)+'Wrapp'+'er'],'undef'+_0x19cc3d(0x9d3)))&&_0x3fce92[_0x19cc3d(0x9a9)+_0x19cc3d(0xe47)]['push']('windo'+_0x19cc3d(0x210)+_0x19cc3d(0x6e4)+'Modki'+_0x19cc3d(0x759)+_0x19cc3d(0x6b1)+_0x19cc3d(0x1e6)+_0x19cc3d(0xd34)+'ssing'+_0x19cc3d(0x406)+_0x19cc3d(0xd57)+_0x19cc3d(0x506)+'unnin'+_0x19cc3d(0xd03)+_0x19cc3d(0x2f6));if(_0x3fce92[_0x19cc3d(0x8b9)+_0x19cc3d(0x30c)]>0x1*-0x78b+-0x1d40+0x24cb*0x1&&_0x3fce92['hooks'+'Appli'+'ed']===-0x1040+-0xc6a+0x1caa&&_0x2957f6){if(_0x3fce92[_0x19cc3d(0x8b9)+_0x19cc3d(0x931)+_0x19cc3d(0xd12)]===0x1867*0x1+0xa95*0x1+-0x22fc){if(_0x19cc3d(0x49c)==='eVmCb')_0x3fce92[_0x19cc3d(0x9a9)+_0x19cc3d(0xe47)][_0x19cc3d(0x1ea)](_0x2fd94f['zqUNW'](_0x2fd94f['Wufer'](_0x19cc3d(0x939),_0x3fce92[_0x19cc3d(0x8b9)+'Total'])+(_0x19cc3d(0x3de)+_0x19cc3d(0xa3b)+_0x19cc3d(0xbc7)+_0x19cc3d(0xca4)+'N\x20by\x20'+'UWMK.'+'\x20The\x20'+_0x19cc3d(0x9ae)+_0x19cc3d(0x2a0)+'\x20')+_0x2fd94f[_0x19cc3d(0xd63)]+(_0x19cc3d(0x3f9)+_0x19cc3d(0xdfc)+_0x19cc3d(0x642)+_0x19cc3d(0xb84)+_0x19cc3d(0x8a7)+_0x19cc3d(0x969)+'re\x20ig'+_0x19cc3d(0x5be)+'\x20for\x20'+'the\x20l'+_0x19cc3d(0x800)+_0x19cc3d(0x4fa)+_0x19cc3d(0x37c)+'.\x20')+('Regis'+_0x19cc3d(0x7f0)+'\x20')+_0x3fce92[_0x19cc3d(0x8b9)+'Regis'+'tered'+_0x19cc3d(0x2fa)],'\x20hook'+_0x19cc3d(0xd27)+_0x19cc3d(0xbd1)+'\x20armi'+'ng\x20at'+_0x19cc3d(0x73f)+'ment-'+_0x19cc3d(0xbf7)+'.'));else return![];}else _0x3fce92['warni'+'ngs'][_0x19cc3d(0x1ea)](_0x2fd94f[_0x19cc3d(0x3d0)](_0x2fd94f[_0x19cc3d(0x7aa)](_0x19cc3d(0x4b6)+'resol'+'ved\x20',_0x3fce92['hooks'+_0x19cc3d(0x931)+_0x19cc3d(0xd12)])+_0x19cc3d(0xcf6)+_0x3fce92['hooks'+'Total'],_0x2fd94f['ODlWZ'])+_0x2fd94f['oghHj']);}return _0x3fce92[_0x19cc3d(0x8b9)+_0x19cc3d(0x365)+'ed']>-0x1592+-0xa92+-0x16*-0x176&&!_0x3fce92[_0x19cc3d(0x8e8)+_0x19cc3d(0x581)][_0x19cc3d(0xa1a)+'ntrol'+_0x19cc3d(0x62d)]&&_0x3fce92['warni'+_0x19cc3d(0xe47)]['push'](_0x2fd94f['fyjgx']+_0x2fd94f[_0x19cc3d(0x32f)]),_0x3fce92[_0x19cc3d(0x8e8)+_0x19cc3d(0x415)+_0x19cc3d(0xd82)+'ed']['lengt'+'h']&&_0x3fce92['warni'+'ngs']['push']('rebui'+_0x19cc3d(0x410)+'nce\x20f'+'irst\x20'+_0x19cc3d(0x6d7)+_0x19cc3d(0x207)+'espaw'+'n?):\x20'+_0x3fce92['insta'+_0x19cc3d(0x415)+_0x19cc3d(0xd82)+'ed']['join'](',\x20')),_0x3fce92;}function _0x152a10(_0x6ed10b){var _0x299eb2=_0x3f0b99;console['log'](_0x299eb2(0x7af)+_0x299eb2(0x56b)+_0x299eb2(0x522)+'lWarz'+'\x20repo'+'rt',_0x2fd94f['lHCxi']+_0x22ca32+_0x2fd94f[_0x299eb2(0x449)],_0x6ed10b),console[_0x299eb2(0x395)](_0x2fd94f['RbdbI'](_0x592969,'\x0a')+JSON[_0x299eb2(0x83e)+'gify'](_0x6ed10b,null,0x4f0+0x2177+0x2666*-0x1)+'\x0a'+_0x41a85d),_0x7f8463=_0x6ed10b;try{_0x172b91(_0x6ed10b);}catch(_0x4eba55){}_0x2fd94f[_0x299eb2(0x680)](_0x264f10,'repor'+'t',{'report':_0x6ed10b});}function _0x2ec710(){var _0xd32cd2=_0x3f0b99,_0x392b19={'HfUNC':function(_0x103508,_0x49ceb7){return _0x103508!==_0x49ceb7;}};if(_0x2fd94f['zZWLr']==='Spmje')_0x392b19['HfUNC'](_0x3894b9['getIt'+'em'](_0x3d7e77),null)&&(_0x3e618d[_0xd32cd2(0xa48)+_0xd32cd2(0x8a1)](_0x1c2c30),_0x12847c=!![]);else try{return _0x4b6f4f();}catch(_0x454fc7){return{'version':_0x25c943,'when':new Date()[_0xd32cd2(0xdd5)+_0xd32cd2(0xb60)+'g'](),'elapsedMs':Date[_0xd32cd2(0xa06)]()-_0x13f4db,'host':_0xadb686,'uwmk':!!(window[_0xd32cd2(0x518)+_0xd32cd2(0x4e6)+'dkit']&&window['Unity'+_0xd32cd2(0x4e6)+'dkit'][_0xd32cd2(0xb7c)+'me']),'il2CppContext':![],'arm':_0x1912a1,'hooksTotal':_0x57a7b3[_0xd32cd2(0x35a)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x454fc7&&_0x454fc7[_0xd32cd2(0x437)+'ge']||_0x454fc7)};}}function _0x4c33e9(){var _0x2a65c2=_0x3f0b99,_0x268afa={'BaSTB':'i32','eqNGv':function(_0x2ab429,_0x505518,_0xdf95af,_0x50b939){return _0x2ab429(_0x505518,_0xdf95af,_0x50b939);}},_0x4b8024=0x10*-0xd9+-0x1ce2+0x2a72;try{_0x2fd94f[_0x2a65c2(0xa68)](_0x37271c);}catch(_0x3304c3){}try{_0x19301e();}catch(_0x2fd445){}setInterval(_0x4c844d,-0x392*-0x9+-0x21f0+-0x1c6*-0x3),_0x2fd94f[_0x2a65c2(0xa1b)](_0x152a10,_0x2ec710()),function _0x20d370(){var _0x4a7863=_0x2a65c2,_0x1d40bd={'lnQIV':function(_0x471b8a,_0x181a47){var _0x470113=_0x59a2;return _0x2fd94f[_0x470113(0x2fc)](_0x471b8a,_0x181a47);},'LmHLf':function(_0x23b38b,_0x2a5f01){return _0x2fd94f['KaXON'](_0x23b38b,_0x2a5f01);},'AIySz':')\x20-\x20f'+_0x4a7863(0x915)+'ly'};if(_0x2fd94f['aobBu']('rwiKY','rwiKY'))return _0x1178ff['ok']=!![],_0x23f579['sourc'+'e']=_0x4a7863(0x3a3)+_0x4a7863(0x9e6)+_0x4a7863(0x8ae),_0x246f77['why']=_0x1d40bd['lnQIV'](_0x4a7863(0xe53)+_0x4a7863(0x239)+'nusab'+'le\x20(|'+'q|=',_0x1d40bd[_0x4a7863(0x270)](_0x472210[_0x4a7863(0x632)](_0x5772ba*(0x6d1+-0x12*-0x58+-0x1*0x919)),-0x9*-0xb+-0x38*0x7f+0x1f4d))+_0x1d40bd[_0x4a7863(0xb04)],_0x35ae6f;else{if(!_0x57a7b3[_0x4a7863(0x35a)+'h']){if(_0x2fd94f[_0x4a7863(0x72f)]!==_0x2fd94f['TVCbg']){var _0x56330d=_0x86c356['hookP'+'refix']({'typeName':_0xf4b164[_0x4a7863(0x6b6)],'methodName':'Updat'+'e','params':[_0x4a7863(0x5df),_0x268afa[_0x4a7863(0x75d)]],'returnType':_0x3e1ded},_0x268afa['eqNGv'](_0x1d1541,_0x1778fc[_0x4a7863(0x6b6)],_0x5e86cb[_0x4a7863(0x1c9)],_0x9214c8[_0x4a7863(0x3f6)]));_0x374730['push']({'type':_0x425943['type'],'hook':_0x56330d,'keep':_0x1c6668[_0x4a7863(0x1c9)]});}else try{_0x8144e5();}catch(_0x54cdc6){}}_0x4b8024++,_0x152a10(_0x2ec710());if(!_0x57a7b3[_0x4a7863(0x35a)+'h']&&_0x2fd94f[_0x4a7863(0xc2c)](_0x4b8024,0x1477+-0x1f*0x7f+0x2*-0x1f5))_0x2fd94f[_0x4a7863(0x242)](setTimeout,_0x20d370,0x816+0x7*0x285+-0x11e9);else{if(!Object[_0x4a7863(0x859)](_0x48cc1a)[_0x4a7863(0x35a)+'h']&&_0x4b8024<0xe82+-0x1df*-0x2+0x1114*-0x1)setTimeout(_0x20d370,0x907*-0x3+-0x20db+0x43c*0x10);else setTimeout(_0x20d370,-0x1*0xcdf+-0x474*0x4+0x235f);}}}();}if(document[_0x3f0b99(0x58c)])_0x2fd94f['XuYig'](_0x4c33e9);else document[_0x3f0b99(0x70b)+_0x3f0b99(0x7b8)+_0x3f0b99(0x8e0)+'r'](_0x3f0b99(0x942)+_0x3f0b99(0x844)+_0x3f0b99(0xbfb)+'d',_0x4c33e9,{'once':!![]});if(document[_0x3f0b99(0x58c)])try{_0x3f0b99(0x493)===_0x3f0b99(0xb47)?_0x2fd94f[_0x3f0b99(0x554)](_0x204b9a):_0x2fd94f[_0x3f0b99(0x464)](_0x3c48ac);}catch(_0x36db84){}else document[_0x3f0b99(0x70b)+'entLi'+_0x3f0b99(0x8e0)+'r'](_0x3f0b99(0x942)+_0x3f0b99(0x844)+_0x3f0b99(0xbfb)+'d',function(){try{_0x2fd94f['pYkmU'](_0x3c48ac);}catch(_0x475e25){}},{'once':!![]});})()));
