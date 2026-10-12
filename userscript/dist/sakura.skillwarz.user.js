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

function _0x599b(){var _0x3d5439=['EwnyBNO','wxnSDKm','lYbZChi','BNuTCM8','lNnRlwm','igLZig4','zwq6ia','lxrPDgW','zevJsg0','yLbZzgK','ChG7Fq','EuvksLy','wejpru0','vhzwzKO','mtj8nxW','D28GzMW','kZb4','seLuue0','WO7cLCkvWOZcJa','DM5rrKy','ANjfC0G','nYWUocK','B25Z','Axr5ic4','yun1t24','lxDLAwC','CMnPywW','yvPYwfq','WOJcLmknWO3cJa','y2vKigi','ALrpyu8','kgXVyMi','yMPhB0K','WORcISkqWOJcJa','vu5tEwy','qwj6zNi','mJu1lc4','ohb4o3a','Aw5WDxq','DcGJzMy','kdiXlde','lNnRlwW','Dg9YqwW','rviGD2K','khrOAxm','sMLgEvC','ywLUAw4','ic0+ia','nduPoW','DuTbq2G','yIXH','Dez1suy','Bg9Zzsa','Bgu9','WOJcK8kiWPxcIW','ANrju1K','WOFcICkjWPdcHW','mcbYz2i','BcbHz2e','icaO','B2TZihi','t1LJANq','Axb0ige','wLz0Bum','AxLQqNG','DxnLtg8','AgL0CW','DgnO','A2Xxrhm','WPxcH8kjWOZcJG','lwnVChK','u0f3yuC','CMvUDca','yuDSy00','rK1LBgG','AgfIBgu','DdOXmxa','Cw5erM0','nwmWidm','AM9PBG','y0DQzve','ns00idC','yMuGCMu','oIm4zdC','zdTYAwC','qLDrsvi','Au5UB1e','BwvHBNm','D3rlu2C','yMvSB3C','AKj5u3q','u1LOAKW','lxrYywm','mxb4ihm','BefLCNm','BfLJzha','ALjoruW','Bw92zq','C2fNzq','C3bHBG','z2v0q2W','Du1hrve','DgG6BwK','AguGBgK','BMDZ','zg93oMK','yMfZzq','ys1Hpsi','DtmY','Dw5PDa','CJOJzJC','zMzMoW','u2HHCNa','t3H5ExC','wwLnweq','zgf0zsa','WPpcLmkhWOVcHG','C2L6ztO','swHVtu8','BgfZlg0','WPxcICklWO3cIG','BfDHCNO','y2u7','Ag9Rr0m','uM5MBKS','EdTMBgu','uKT3A24','zxa9iJa','y3rPB24','WPdcKCkkWO/cJa','psjTBI0','WPhcICktWONcIq','tvPJzK8','nsWXndm','pgnHBNy','DxjHDgu','nJaIigG','WOBcH8khWO7cLa','lwLUzgu','Aw1HDgK','mNz3ldy','zuXJBNq','quvAsei','WORcImkhWPdcJW','AgvHCca','yxiTz3i','yM9KEq','nhb4ide','B2TLpsi','WPpcICkqWOZcJa','Aw5Uzxi','ihjLC28','EdTMAwW','mIWUnsK','oMjYzwe','B25JBgK','zciGC3q','mJiSmsW','qu5pveG','CMrLCI0','uKPxu2C','ChrY','mti1nZKZnMfZDuv6sq','qwfqzhK','iNnUyxa','FdH8mxW','wLnODxu','zxnZiey','v19F','DgHLBG','BhLeB1m','mtrWEdS','CMvMDxm','s0XAtNi','ihbYB3y','CKTUsxu','uxvIAvG','rvnqig0','zxHWB3i','z1vSDMG','mteUnxa','rxz0Efy','ohb4o2G','CMvKige','BMfNzxi','s0fnwha','DLn6u2y','zezkAui','z1rsthm','ywi6Ag8','vuPesfe','mNb4icm','EIaTihC','mJzWEdS','AgvHCei','WPtcImkkWPtcKG','Au5TyKG','CgL0y2G','uvLlwLG','WPpcKmkiWPlcKa','rLfWDwe','WOBcISkoWOVcIa','4OcuigzYyq','nNW5Fdm','vhnvvvC','Fdn8mNW','CgX1z2K','y2fWDhu','AwXKlG','q0ryu2W','yMeOmJq','BMq6CMC','zgf0yxm','BNvZywi','lwXLzNq','WO7cKSkrWOJcKG','zxzLCNK','yt0IyMe','y1rzt1O','sgXSDLK','zu9irvy','C0HUDxy','qxn5yM8','DhjHBNm','lxDPzhq','BI1ZCge','C3mGmhG','C2XPy2u','B3nL','zM92','vKfvsg8','uNfoBKy','zMfPBgu','yw55ihC','zxjHDgu','rgLMzIa','u3bLzwq','ihDYAxq','vxbUswW','sKXjsxO','CM1VBMS','swr0zxy','A1Hxsei','zxG7z2e','CKLfAvi','CJTNyxa','C2LJBxm','keLUC2u','DgHLiha','mtjWEdS','uMvJDa','tIbIEsa','B3jKzxi','EIaOsw4','CMfTzsa','yMTPDc0','vwHNquy','swv5vKS','Ag92zxi','BguGC2e','yxjJ','wgvdqxe','zwz0oMe','oNbYzs0','qNH3wMS','o2nVBg8','DgHLigW','yMD6ufG','DgG6mJG','Bgu7zMK','DMLZAwi','yxa8l2i','DgHLigC','r3vXwM8','AgvHCfu','zM9Sza','zgf0yq','zhmGWRCG','CZ0NC2S','ihrOzsa','pgj1Dhq','z2v0sxq','q3DMBKW','y2XPCgi','Cw10y1i','CM06BM8','cKLUC2u','psiXlJu','WPtcH8kmWPhcIG','qKjTuem','ktT9','zhrO','vfbTuxu','C2TfsuC','D3jPDgu','CMvMAxG','B3i6','mZa4mZG4mtLQCgXsvfe','Axr5','y2fTuhq','BMXnzMW','y2HmEvK','zujfBxa','Dxm6oha','zhvYAw4','zxnZywC','rLzfvLG','zM9YBq','EejYEKO','WO3cLmkvWOVcIG','icaYlIa','BfLUuhi','tfHWsum','yxjTzwq','WOVcICksWONcIW','Bxm6y2u','AxmGyNu','WOBcJmkoWPtcKa','BwuOkq','Axy+','zw5NDgG','z2DfDeG','WPxcJSkpWOVcJq','re95zhO','FdD8ma','uwPhC1y','CMzSB3C','A2vKpsi','yvzfsxy','mxW0Fda','WOFcICkpWORcLq','mJKXotLItMfxz2S','y0Tgwxe','CNqP','rNn4B3m','Bgv4lxm','wgPPEgq','C2STBwq','v3jHCha','EvrADuW','ifnxlva','tgXorNK','C2vSzwm','u1nPrKu','uMznrfy','WPpcKSktWPlcIq','B3rVBK4','rhzftNa','iI8+pc8','uePizNa','Dg9tDhi','mtu3lc4','ksbVCIa','WO3cJ8kgWPlcJa','WOZcKSksWPpcIG','BMC+','CMvK','lKHfqva','rfP5wLm','r29qtum','mZjuy0DWENO','CLfOvLK','yLPSvwW','zxr1CM4','vNz1D20','B24+','t2HPsuK','svPqz0S','jsKGmta','Dvzmtgy','v2zirMW','WOJcISkiWPdcLa','vfngwgS','yNvMzMu','DKHrtgi','B3DUkq','ihbVC3q','ChGGmdS','CgXHEwu','WONcJCkkWORcKa','igfYzsa','CNmGyxi','rvjvEMq','zw1LBNq','nZq4mJK','tKjhEgS','zgvMAw4','WO7cJ8kmWOJcHG','AxrPywW','BNrLBNq','phnWyw4','lJm2lde','khmPihq','zMLSBfq','y2uGyM8','DMLLDYa','ywnysg8','yxjLige','CwPsAey','Bg9N','sxrWs1K','DcHHDxq','zhr3DMe','B0DsDNm','rxLoCgi','CMvHy2G','WO3cICkqWPpcIG','u1P5Awe','suXXBNq','ig9U','y29WEq','BNrZoM4','CvjNyw0','tM8GugG','B250lxm','svPJrxO','y2GUC3K','swLnuNG','r25frxy','CMvUDdS','lwjVDhq','WPpcJ8kvWOFcJG','zgLUzZO','zwP2rMO','WOVcKSkjWPdcJq','r0jrBxq','u2nxweG','uKrHy04','yxmSBw8','EuT3t0i','BwLU','mJKWChG','EerYC3i','BwvZC2e','sgvPz2G','r29Hz0e','t2zMC2u','thHOtw0','C3qY','uhPHA0W','zsbUB3q','ndHWEcK','ChG7y3u','zxj0Eq','lJe4ktS','Aurtwee','B3vWig8','BffosNa','Dg87Fq','mhW2FdC','zIb0Agu','DhvTBge','sw5ZDge','zM9YBtO','CI1Yywq','Bw4TC3u','rvPwquq','zvbYB3a','odbWEdS','Aer5C28','nsWYntu','DgvYo2y','Bwf4lwG','vMnjrKq','BK5LDhC','A2v5u28','BgfZDeu','WOZcI8kmWOBcJW','oJi1ChG','zMLSBfm','zcb3yxm','Axrdsgm','icbMywm','CMXHyMu','ufKGve8','ChvWzK0','zJu7Fq','ze1jDw4','nJaWo20','wujbsvu','tg9VAYa','C2v0tge','tvnrCNy','CgfYyw0','Ds1YB28','mJTZDhi','ztPWCMu','yvzgEM4','u3bYAw4','BNnPC3q','B0DZuwu','vvvpCKu','AdO2mNa','rLjxDu0','y2jOr3i','idi0iJ4','CNqGEwu','nc00lJu','ldi1nsW','vvrbzwm','lJi4','AhvKlwm','qxnUD0y','zMXLEdO','DxjHpc8','C2nHBge','Bxzstuy','mtuWnJa2CLLpq1bZ','zJmY','rxvfBeW','icbTzw0','Awr0AdO','ywjZ','BwLSEtO','WOBcJmkkWOVcHG','zMfSC2u','ntuSlJa','Dg9ju08','u09UAgO','ihnOB3C','Bwf4','WPxcJmkhWOBcHW','AuL0s3e','v3PQELq','igHHDMu','sM1sre0','icHZB3u','iNDPzhq','y29SCW','mtfWEdS','AwzPzwq','tMjqyNC','lJuGms4','yxbWzwe','yLLhuvy','Ag9ZDa','BLr4wvC','BMTtshC','BwuGBM8','EuXAELq','lZ48l3m','tg9JCuO','BgLNBI0','oM5VBMu','CJOWo2i','sw5KzxG','rgHjvNO','icbOB28','DYaTidq','AgvHza','ywDLCG','pt09u0e','s2Tgr1K','CgfKzgK','WPtcI8kgWORcJG','yvLct1q','zsb0Age','CYGXlJe','ExnJBuy','CZOYChG','DhHUq2O','oNjNyMe','BM9UztS','zwqGEwu','Fdn8ma','mtaIihi','yMfJA2q','z2fTzvm','cNzPzxC','BwvHBG','CI1YDw4','C3rHBMm','Bwf4kdi','BM8Gtw8','C2v0sgK','WOZcJCkvWONcIG','mNb4o2i','ru93v3q','zxLL','wfbkDvm','A01RDfy','zsbYzxa','Axb0igK','rwvIDNO','WO7cJ8krWOJcJa','pc9WCMu','zw1WDhK','s09evfC','BM90ig0','yZKIpNC','A2v5qxq','B3bLCNq','zwqGB2y','u216uuW','BNPlD3u','zNjVDw4','BMfSrNu','Dc4kcLq','rMrxvwu','CKLNu1G','yxvOqvO','C3bLzwq','CNq7z2e','WPdcLCknWPdcIa','zxmGAxq','zMnQthC','EhL6','u0jOEMu','vgD2sxK','A0nwD0G','ignVBNm','AuvHt2m','WPtcLmkoWPhcKa','BMnL','ww9gBwS','psjWywq','WOZcImkkWONcKG','BIbZB20','A0jVv0m','CMvWBge','CdO0ChG','WPdcJCklWPpcIG','Fdz8mxW','qNbvsKK','yxbP','y1DbzKC','ihWG','AgfADw4','Bwvhyw0','rgves0m','B2HysvO','oInIzge','igLUC3q','ksbHBMq','zxKGAxm','iJeIig0','lwL0zw0','uMvMDxm','Ber3yNi','x2DHBwu','DMvYzMW','uxz5C00','C21lveW','svHVBLC','CNvUCYa','vendqNe','zxnWyxC','ifjLC2u','zxG6mJe','s1HrExG','u2fRDxi','AxjLuhi','igfWCgW','Dgviwxi','vgHLigG','zxi7zM8','s0LuqMS','vgHLiha','Bgf0zvK','t25ezxm','CfLXuNO','mcbMAwu','z3LlD0K','i2y3zwu','t0XIvg8','y2XVC2u','DYbLEha','C3mP','zgn4we0','A01msKO','wMT0tu8','rMD5wKK','swTRy1u','wKTpEhq','rKzUC3O','zNGIihq','q21rvfO','BLj1BNq','4Ocuihr3BW','WPtcK8kiWOJcKW','suPUDgS','yMfY','x3j1BNq','ktSGBM8','zwfKywi','DKfbtu8','reHnEMC','u2vMr3O','wuDqAwe','A3mUBgu','mcbVzIa','ks4G','DeX0s1e','nZH2AdS','ywXSoMK','B2f0nJq','Ec1KAxi','mJeSmti','WOZcKCkiWPxcJa','y2GGDgG','C2v0ica','Bw4TDg8','z2vYlIa','BM93','ztOXms4','B2r1Bgu','Bgu9iMq','AfvJz0i','ug9ZAxq','tvfcuw8','vhjHBNm','C3CYlwi','WOZcJ8kgWPxcLa','B3rO','mJq2ldi','cIHJBgu','uezZANy','WOZcH8kgWOZcKG','lxbHBMu','DgfYDdS','CgvKigi','WPdcKCkvWOZcJG','yxbWzxi','zsDZig8','B3n0zMK','WPdcImkpWONcIG','m3W3','Ag9VAW','EervwM8','DgfU','mcuGBM8','vvjhtwG','v2XRy0i','u2nPDM8','Dg90ywW','WORcICkoWO3cJq','DgfSBgK','WPdcI8knWO3cKW','zZO0ChG','WO7cICktWPxcLa','quHdExi','igvHC2u','Cg9ZAxq','BgLKzxi','Cc1JDG','tLjPExq','Dhf5s0u','rfbQBhG','y2uTAxq','lwnOzwm','ywnRz3i','BwfYz2K','lcbUBYa','WOZcKmkjWOBcKG','icaGica','Aw5ZDgu','lM1Ulxm','iZDLzta','WPpcICkoWOBcKW','qM94zxm','o2n1CNm','EwzjAu8','nZCSlJq','DciGC3q','BMPkuxy','zJu7yM8','jwnBC2e','B3qGD2K','mtj8oxW','oMzPEgu','yw5NBgu','psiXmIi','CfLyBKG','B3rHDgK','mxW0Fdi','qKfksNa','mhHLoa','x19tquS','B25TB3u','kgD1zxm','tMfTzq','yM94zxm','zgf0zsG','yNL0zuW','BNqTzMe','WPhcKSkpWPdcJG','C21uExa','ANvTCa','BhTWB3m','AxvZoJC','su5higy','DcbUBYa','Ahq6nZa','WO7cJCkjWOVcKW','r2v0Dgu','Cxj5t0u','CuXpuvO','zuf0rMK','BezUr2C','Evvuueq','mxW5Fdy','o29Wywm','zu54vwe','Dg87iJ4','mhGYyYa','B3vYy2u','AxvZoJe','DhK6mdS','ihn0CM8','C2v0qG','rwHTBfO','zwjlt24','DcbIzwu','AgLSzsa','DdOXnha','C3rHDhu','zwXHChm','rKDSD2G','CI5QCYa','DLvmrem','WO7cKmkrWPtcJG','mxWYFdq','r0zisg8','nYWUmsK','ys1Tzw4','zMXLEa','Dxnnzfu','CenVBNq','ltiUnsa','lsbvBMK','CdPYB3u','wMHVB0e','ihjLCg8','B3jYzwm','C2vUDca','B0ndvhi','igLZigy','WOBcJ8kvWOBcHW','C2fUzq','mhGXqWO','zwDPC3q','mNWWFdq','rNPQs0O','DxjJzq','Ag9VA0y','ic8GrJy','BgXLzca','uevHExG','DuHUwNO','D29YBgq','AenIzMu','BgLZDa','AguGD3i','ihzPysa','AwnOigy','Cwj6uw8','C2STCMe','rvnqoIa','yMPiwe0','zxmGBM8','C28GDgG','zw50tgK','idmWChG','BgvYige','sNj4zfC','yxjKlM8','Et8Pica','t3Drzuy','nxb4o2G','tvDqDhG','oMzSzxG','WO3cKCkoWORcIG','C2STChi','v2vfyMe','C3bSAxq','seDzB1e','igzVCIa','WOBcI8krWOFcIG','re5LD20','iIbZDhK','qvr4yLa','ywjSzsa','t1buwe8','ktTJB2W','WORcJmkgWPxcHW','C21yzgu','zNKTy28','z3vJDLi','qLbvvMm','swHctxu','o2fSAwC','AwDUlwm','BMqGBM8','zsGP','Bd0Ii2y','vgPtqLK','yw5ZCge','vezrD0K','Aw9UoMy','ys5ZA2K','BKnOC1u','mcaWida','rxbiz3C','ihbHC3q','Bw4TAa','WO/cImkpWONcIq','WONcISktWPdcLq','zwn0ihC','reLzreq','zxiTC2u','vfjYtgO','AxHLzdS','ls1W','ifrOzsa','CM9Wlwy','ocWYndi','BMjtugC','zM92igi','zuvSzw0','yvv6sxu','WPlcImklWPxcIq','CgfPCKG','CxvLCNK','idaGyxu','BJPJzw4','DuDIvwG','uKvKywq','B3jPz2K','BMCGyxq','oJHWEdS','rJKPpc8','wKD5uu0','DgvHBq','uMvNEwm','D2HVBgu','zxrsAwC','WONcLmkoWPpcJW','ihjNyMe','sxLvEgW','D210uu4','BNq4','oJeGmsa','DMfSDwu','vunAuMC','WOJcKCkvWPlcKG','ieaG','A1zKELy','B3bLBIa','EKfNAMG','B2f0mZi','s0nPCNm','AvzsDKe','u0TjteW','lNnRlxm','q2fjAvi','yMTKAui','B2f0CYa','igfYBwK','CMvTB3y','AuPdwfm','D3z6veS','zsbPBNm','WPtcKmkuWOZcLa','BNrPBca','idaGmca','wfnKB0e','C2STyNq','nhWXFda','sfzwv2u','AwXLzcW','zvP6BKK','iIb3Awq','AgfZtw8','AxrJAa','FdL8nW','C3rYAw4','ieeGAg8','CLbqtvK','CfLMrfG','DY5vBMK','WOZcHSkvWPhcIG','Dc1ZAxO','WPhcH8koWORcJq','zsbWCMu','BgvMDdO','ugHVDg8','vKviAMq','BfjHDgK','y2fUzgK','B25PBNa','DxrVo2i','ue13tNe','EdTNyxa','BK1bwNu','AM52Cw4','mtj8mtq','y2fTzxi','Ad0ImIi','mhGYoca','nIKSAw4','yxK6z3i','DgLVBJO','WPxcImktWOFcIq','sMvArvi','lJKPo2i','wK5HuwK','zNjVBsa','D257B3a','tvHiqwO','zgvYlxi','EhHbzfa','A0zlre4','kde4ChG','B2yGCMe','BI5FCNu','ie9IC2m','AwzMzxi','zw50igK','WOJcJmkjWO7cLq','lNnRlw4','y1v2sxa','BM9ZCge','WOVcKmknWPxcHG','A3vRt0C','A2rbuey','Bg9VA3m','lc40nsK','Cg9ZDe0','Bgu9iMm','zwjRAxq','ys1ZDY0','B2XSzxi','svDRsvG','rNfrre4','CNvUDgK','u21RsKK','z25HDhu','AY13B3i','Fdn8nxW','EcXJywW','zMykrJG','WPxcImkiWONcLa','wvzZB1G','BLr5Cgu','CMvNAxm','uujdCNG','DgHLig8','wfrxtNC','WO7cLmklWPdcJG','z2H0oJy','zwqGlsa','mtaSmte','DurczKW','yMvNAw4','yuTHB3C','WOFcI8kiWPdcJG','q29WAwu','vuPWwvy','WPhcICkuWORcKG','qu5eihq','yxrLigy','jtTIywm','ig1PBJ0','CMTtDNC','CgfYC2u','CNmG','r3vwyxG','vvDnsYa','Fdn8mq','CMf3qq','rhnwrNK','zw50lwm','yMP0qwq','D2LKDgG','Dg9ZvwW','B3Hmyvm','re5UtKS','ywnLo3C','q0POBKu','wefKu0C','zg93','AfnkCu8','lcbuyw0','WOZcH8kvWPpcIW','BgLKihi','WOVcH8kpWO3cJW','tgnZweK','uvDss1u','qNLirhK','BwvTyMu','Dgf0Dxm','qwHbCNm','ysbNyw0','rJKGihm','z2fWoJG','CMqTAgu','WONcJSkvWPxcHW','Dw1Uo2C','tu1iDNm','s1vsqs0','z2v4zfq','BgrPBMC','yLnuCgu','EvDLAum','Ad0Ims4','mJbWEca','y0T3zxq','ic40nxm','vxbKsKq','D24Gvxa','zNvUy3q','z2DQEeW','C2XPzgu','rgLHz24','u0T6t1a','DcbYzwy','rwjfuui','svferMi','AgjcuvO','AMvSCfG','x19hzw4','ExH6zee','zsb3ywW','CMjTEM8','yLbtqMC','Fdj8mte','r1z2sw4','wNLesMu','DYW2mJa','WPxcISksWPhcIW','o21PBI0','ktTIB3i','tLbdx0m','WOJcI8kpWORcJG','C2v0rMW','sg9VA3m','EMTwvhe','CML0o28','WOJcLmkuWO7cJG','Awr0Aa','rNLQAw0','oMjSDxi','tM1Qrw0','Aw5ZDge','Aerouwe','igrPzca','WOJcKCkvWPpcHW','surHB2u','vxH5r0C','m3b4o2y','wxDJtfK','mtTTAw4','CMuGAwC','B206mxa','ExPOBee','CNmP','mJu1ldi','BYb3zsa','yuzdDM8','WPlcJmkjWORcKW','zxjZyc4','y2u7y28','ywn0B3i','BNn0yw4','CMfWoNC','qw5TC1G','B3i6Cg8','lGOkswy','ihjVDw4','B3C6Aw4','CJPWB2K','zxiGCMu','BLnrr0q','r2fTzsG','tMPPzMO','CMf3qG','z2v0rwW','sKPkwLa','vhbjvwO','nxb4o30','WO7cI8kvWPlcJG','CZPUB24','BwvUDs0','WO7cHSknWOBcIq','CMqTDgK','Eez4Aw8','Dg9Nz2W','rLzYs2K','lwfSAwC','qxrgAxi','vKuGDG','CfHXBLO','qLjUAeW','v3Pmshi','EdTOzwK','phbYzsa','BMnLC1i','txLNy0i','rMHNsxm','BuD4seG','rKDxB0u','C2vSzIa','imk3igzV','ENjYre0','ihzPzxC','ihDOAwm','vMLkugi','BgLJyxK','CM9SBgu','DgfN','wuf2vgy','CI1LDMu','B24GAwq','y2uSihm','AdOWo30','vvvzt1O','Aw50Aw4','WPlcI8kmWOJcIq','i2zMnMi','WO/cJmkgWPhcIq','igLKpsi','s2H6veK','ihn0yxK','C2LUz2W','CYbYzwC','AxrLBxm','uLvYzuG','ywrKCMu','DcbPBMO','oNrYyw4','EtPIBg8','Aw50iIa','C2fRDxi','u3H2A1u','z3HSB1q','wKXWB2G','r0fSALO','lxnUyxa','v1vND3a','icaGDMe','AevZDuG','DdPZDge','s1fZC3i','lGOk','y3qGzM8','mNb4o3a','qMfdrMe','y29TyMe','oMnLBNq','zgLMzG','rvfiwg4','BMnLCW','y3nZvgu','Awr0AcK','Dw5PDhK','C3bHy2u','BNmU','zwz0ic4','y2XPy2S','rK1wBKe','WPhcLCkiWO/cIa','A0zPwe4','B2SGzMK','lJC1ktS','B3j0lGO','oJe7Dhi','mcaWige','z2vY','WONcH8kpWPlcLq','z2rxA2G','A3rpsLG','Fdf8n3W','Aw4TyM8','AdO5mNa','v1nMsuW','zM9UDc0','q3bnuvC','zvbSDwC','WOFcLCkpWO3cJG','Aw5N','Dw1IE2i','o2DHCdO','Aw5KB3C','Dg87zMK','mhWXFdG','yNL0zu8','DhrVBtO','nZq4mZy','tw1kBwK','CMLNAhq','BNrPBwu','y2fWC3u','DxjUzwq','idrWEca','zMy8l2i','BgvJqMK','phn0CM8','ufz4ExG','nJq2o3a','C2STBM8','BLPwExu','AgLZiha','svPfDxO','idHWEdS','z2fWoJe','ENDOq3m','CwXRvNe','Cg9YDge','WONcLmkrWOFcHW','ywn2rxi','DxLXquW','DdO3mda','icaXlIa','WONcICkoWPlcIq','yM94lxm','y2TNCM8','AxnWBge','rJKGDhC','ztTTyxi','vMr1wKW','AgvYAxq','rMf2Awu','CKzAyMC','zxzLBNq','iNrLEhq','B3bLBG','EwXusuy','DwLSzci','DuzyuMu','BJPJB2W','zw5HyMW','zgLMzMu','twTuyNa','DKXuCxa','twDhDKm','y3jLyxq','v0nMrwW','t1LTD2i','AxqTC2m','zgvUDgK','ltqTnY4','ufLgzMC','CMvHzca','yM90CW','zxr3B3i','ywz0zxi','owq7y28','BMvQB2K','ihvPlw0','ysbtA2K','uMvNAxm','yY0XlJu','zw1ZoMm','svzficG','zK1JDvy','zerAvw4','BIbPzNi','ys1LC3a','Bvzcvhe','WO/cJCkgWONcJq','B20GDgG','shziA2W','q21kCNO','CMvMCW','s2vOtMC','ywDHAw4','ig9Uihq','u2vLBK0','mJG7','DgLUzYa','zgTPDc4','zhvSzq','yxrJAc4','BKL2vNG','zhrOoJG','WO7cKSkqWOJcKq','zgLgzxa','vvjbx1m','DdTIB3i','oJrWEca','rwjmqu8','nJHPrNr5EKW','iefdveK','uMvHC28','B3CTEtO','AfnJCMK','sfveigq','Fdf8mta','kdeWmhy','Dhj1zsi','qvbvoca','DeT0z0G','ihnVBgK','DgLHBh0','DdOXmha','vw5PqwK','lxjHzgK','zYbTyxi','EdTWywq','twn3A3m','yxjPys0','CgfKrw4','A2DXDeC','DYGWida','B2XPzca','zgvYoJa','DuTKvNG','ic0Gy2e','ywrKAw4','t2jtA1C','zxi7iJ4','B3rYB2W','ys1IB3G','BJ8PoIa','ChG7Cge','A2n4D1e','oJeXChG','D3jHCha','lc4WnsK','DhLSzq','EcbYz2i','lxDYyxa','zxH0','C3zNpG','lxnWywm','FdL8ohW','yM9Yzgu','z09ut0G','zw50zxi','WPlcI8kkWOFcJG','C3rHy2S','pgrPDIa','nMi5zcW','vernx0C','EfDXEuq','nYWUmty','vgvurLK','yw5ZzM8','DhjPyNu','A2jWrvG','tuSGq08','oJeYChG','DxjH','o2jVCMq','EMu6mte','txjgzK0','B2TLoMm','suzkAK0','mda7y28','B3j04OcM','DhLSzt0','BgLUzwm','WOBcI8koWORcIq','WPxcJ8kgWOJcKq','DeHLywW','AKj4BKy','WPxcKSkjWPlcHW','ignSyxm','iJ48l2q','sfvqshy','v2DpB2W','CMvKDwm','zgLZCgW','ndySmJm','u2HXwfu','iJiIihm','yNv0Dg8','DxjHvge','yur6BMy','ic0GCNu','A0ncDLi','WOVcJ8kjWPpcLa','z2LUigC','ys1Wzxq','EtPMBgu','ihnRAxa','iZHKn2e','v3b1A0i','BgvMDa','CMH6tgS','ywDtq0W','ywn0Axy','AwqGzg8','vwDNqw4','ENPMBw0','vuLRseG','igXPA2u','igzPzwW','BM8TBwu','DuDvALC','EIdIGjqG','oM9Wywm','if0GywW','CgX2Agm','AxnHyMW','C2STBge','lwv2zw4','ysGYndy','WOVcLmktWOBcJa','B0fysKO','o3bHzgq','zsbYzw0','WPdcH8kjWOJcJG','DxjYzw4','t1r3uve','CKnVDw4','lM1UlwW','qwLfuMy','tw9KA2K','yt0IC3q','B2jIEsa','BNnPDgK','twvjwNa','yvziDva','C2STy3q','sevbufu','BM9Uzq','CJOXChG','BhvNAw4','BMj4wgm','C2v0','BNqXnG','Cgv0ywW','BgLUzvq','ig9Yihq','yMzdEe8','BMvUDc4','BM8Gvxa','CgfYzw4','zhmGB24','EI51C2u','ndmSmtC','AwPHDLC','CIaO','v2LKDgG','BNrLEhq','ihvUyxy','yxrnCW','vMX0sMq','ALzgze0','ksWGC28','u3PArLC','rJGGlYa','DdPTAw4','Dg9Y','BcXTAw4','y2fUDMe','z1j5ufG','WPtcJCkhWPtcJq','sunvwxa','WOVcHSkoWPxcKq','iIbZDgu','su1ku0K','DMvYC2K','DgvK','WOBcLmkuWO7cJq','Ae9zqw0','tuTVv2u','lM1UlwG','Bg1yshq','DhDPy2u','WPpcI8kuWPtcLa','y0TfCKW','ywn0','zxbSywm','C29SDxq','i3n3mI0','u2LXqNy','v3Lkuhq','iM5VBMu','wMPvqvO','BLnNu1e','zw4Gyw4','psiXlJi','BMuGAg8','mNmSyMe','B1bdAfq','oI40o30','CM9Tihm','BguGy3G','EK1oALi','y1n2vMS','AxmGD2G','ihLLDca','BJWVyNu','rwnXwgS','rgnyq0O','t0ziDu0','B3bHy2K','Dw5KoNi','rMPIuNO','CNj7y28','tKTfz1u','z2Lwre0','C3vYDMu','yxfgCK4','igfUzca','C2vYlxm','yxm+','zwqGyNu','BIaUC2S','r3z3zMS','qMv2zKO','WPdcJmkkWORcKa','yu9pq0q','t09TqLm','q3vSDvq','CwDWELC','u0jMC1O','yMvS','r0fLzLa','kdi1nsW','r0rjCNG','WPpcImktWOJcLq','WOZcJSkvWOJcJG','CZPJzw4','EtPUB24','BgXIEwm','AwzLig8','BwfSBg8','zxiTCMe','BguIihm','zw50rwW','zYbxzwi','yM9VBa','AxvZoJi','C2STy2e','y0XbzuO','A3vYyv0','igLZihi','DMvYBg8','rxzOrwC','ig9Uia','A2PfquG','tfjRrey','EfLKrLK','t01fzeS','ic0GDgG','Dxm6nNa','yJLKo2i','Aw9U','yxqSCMC','BIb0Agu','B2THAgC','CMDrCum','ChPUrNu','zxi6mdS','AguGAg8','yxjKlxq','Ewv0lG','rLbty28','oJa7EI0','nNWWFdm','lM1Ulwm','zdPYz2i','t2HzEvC','lNjLC28','zNDK','WO/cJmkgWO7cJW','idqTnc4','wwL3ugy','D3jVBMC','B2jMqG','C2STC3C','De9rDw8','B3yGB24','igrHDge','w2rHDge','ocK7Fq','B2fYza','ztT0B3a','u2vLBG','y1zdqLi','ywXSzwq','WORcHSkkWOVcHG','t2HXsgi','DhKGAw4','Bc5ZAg8','BNnVD1a','ywXPz24','vKzHuMK','DgLPrvG','tLHUAvi','B24GDgG','BMqGEwe','pc9KAxy','CKnODwy','CY5Tzw0','yMfS','ugn3C28','B2SGAxm','BhrLCJO','C2v0qxq','nZKSmtq','AwrLBNq','B3rLE2y','uNvUDgK','idqGnc4','Cvbwuwe','ignHChq','BMDL','vunwy1a','A1rwAei','y2XPzw4','s29XAvO','rwL0Agu','ic4Znxm','BhLWv1y','AxmGBM8','oxWXmhW','qxbWBgK','yxjNAw4','ChGGmZa','vgfVEKm','zhnyquO','WOFcJ8knWOVcKG','igrVy3u','zhjVCc0','sMzWug0','rvvczfm','Ahjcvhe','WOZcICklWPlcKW','z2LNwMi','icbJyw0','CMDuvuu','tuTSr04','qKnvtei','pc9ZDhi','u2v0tg8','BwfW','WONcISkgWPlcIq','Cg9PBNq','EsbHigq','psjIywm','vgHLigC','rfHtvgi','ztOXmxa','ugHrCg4','wwjPthC','WONcK8kuWO7cJa','EwvZ','nYWUncK','AeLhyNe','CdOXmha','WPdcK8krWPhcIW','nhWYFda','ysb0CMe','EdTMB24','mNb4o3O','BMCUcG','xtO6ywy','mtbWEca','BM8Gzw4','AgvHBhq','yxv0BW','u3jLC0K','ru5ept0','BdPPBMK','zuLqzvy','zwqGDgG','s0zUBvC','Bgv4oJe','DxnPyMW','B2zMihq','DcbTyxq','zMLSBd0','q1nwzKK','mZT9','vgzkBwq','Aw5Qzwm','zxnWia','D3ziDNq','mJHWEdS','qLfYBgu','psiXnJa','z2v0','Awj6u0W','Ae9Kque','quTMugS','DMvYDgK','oYi+u3a','uxrIELa','rgvSDge','Du9mAva','BxPxtfi','CLPIwhm','ztPUB24','C2vYDcK','AwzYyw0','yKXfufu','sM5kqva','icaGia','EdOYmtq','Ag9VA1a','CMf3wwe','AwvK','DxnLCI0','BwfYA3m','icaHia','D3jHCdO','s1rJCva','Dhj1y3q','iZjHmgy','t0L2reG','BhDjsgO','lc4WmJu','Dgj0DMW','CgvYBw8','D2fZBu0','lxaSnta','qu5Ys2e','B3zLCMy','tMTrELO','Ec8XlJq','B29M','DgTOEee','AhvK','EdPUB24','rxLPu2i','zJy0','Bwv0ywq','A0XyCgi','mNW3Fdm','WPxcJSkpWOJcJq','igq9iK0','mtqZlde','iIbMAwW','WPhcJ8kiWOBcKq','EcaXmNa','y29UDgu','Awq7z3i','yMvHCMK','DgvYzwq','AwrLCG','CM9ZCY0','C2LU','sfHoB3O','EsbMywK','veLwrq','mtC3lc4','lxyYE2e','yw5LBca','rw5LBwK','zwn0Aw8','q051D2G','u1jOsha','oMf1Dg8','nsb1As0','CYb1BMK','CM9WywC','wuHJzxC','WO7cK8kpWO3cIa','D0PAsw4','Ag9ZDg4','BIbjtLm','lwXPBMu','oJnWEdS','DfDPzhq','lt4GDM8','tg9VAW','ywnLlem','CMvWB3i','WPdcKCkrWOBcIW','tK9nseu','zMjiseK','Aw50BYa','BM9Yzwq','vMfSDwu','B3rLlMu','WPxcKSkiWOFcKG','EKvUwgy','BMv2zxi','DJiTDge','yMfYzsa','BNq7yM8','yw1LihC','t2vOuMO','B25NlG','zYbMywK','Cd0Imc4','Bs11AsW','zwfKE2q','zxG7zMW','t3PdrhC','kdiYChG','CKnJCKW','t2nQvMC','z3jVDw4','DhrLCG','BMD0AcW','zxG6BM8','lK1Vzhu','Bw91C2u','y29Kzq','phbHDgG','Bg9YoIm','EentrgC','CMvIDwK','ywDLigG','iZe1mgm','ztOXm3a','EdTHy2m','lhrYyw4','nIiGC3q','svf2sgq','yM91BMq','zwXVywq','DenIv3C','ze91BMG','zwLNAhq','lcbnzxq','vhDADfC','yufUrKO','B0HsAKu','icSG','C28GAg8','tNbyEeG','D3HNyw4','rMLLBgq','DhjVA2u','B3a6mti','WOVcKCknWORcIW','lwHPzgq','DeHLAwC','ifvjiIW','mhb4idu','z2XVyMe','DYbNBg8','q1Dzt3m','FdL8mW','tg9VAYS','B2zM','EffTCMK','uu9rtNu','AdO5nNa','oIiIo3a','igfNCMu','B1j4u0W','BMu7Fq','rxjbwgm','BgvY','zw5K','WPxcKmktWPpcIG','i2zMzJa','BNrLCJS','DMvhyw0','igzHA2u','vLffueO','B3nWywm','Aw1Lr2e','yMXPu2m','DxjLzca','Ag9VA3m','yY1IzxO','wfb5Dhm','AuPlzwC','DJiTy3m','z2LZDgu','Aw4TD2K','BNq6Aw4','AgvSBg8','BwHdz2S','yxG9iJu','iNn3mI0','Bgu9iMi','CvndAhu','A2L0lxu','BwuUCMu','sgjPvvO','yMXLig4','m3W0FdG','nhb4idK','igfYBwu','mtGGnIa','AwH2De0','mhHKma','DvDAC2C','Aw1Lsxm','Aw50zxi','ExrLCW','BuTvEK0','Bwf4lxC','A2v5','o3rVCdO','yxjHBxm','zxvqv2S','y3vYC28','BvbiAgW','A2v5CW','C2nYyxq','msiGC3q','B2SGEwu','yuzYB20','DwvxCMe','DxDTAW','CcbHBMq','yYbYzxq','BNqTC2K','ohW3Fda','zxi7D2K','WPhcLCkhWOJcKq','DcaWida','CMfJDgu','BMTLEsa','zgvIDwC','y2XHC3m','v0PUtNu','zNbZ','zMzZzxq','u01qzvG','zwy1o2i','rNzwBhu','wKrICfK','B2jM','tgTkA1a','zxjYB3i','uwjKAw8','Bg9ZztO','mwzYksK','y3beC3e','CIiGDhK','ChG7Bwe','Dgf5CYa','BhrVyLi','idaGmxa','yuTUCxy','igTUB3C','BNnVBge','nNb4o2G','zuL0zw0','x19ZywS','BLffthu','ihnPz24','CMeTCgu','wKnpsKK','CvPMq0e','y29Z','EwPpELa','CMnLoIa','zYbZDxm','C291CMm','ihnHBxa','iZrMogy','BhvTBJS','mda7y3u','yw5NzxS','ChvZAa','C2v0uhi','zvn0EwW','q01c','BIbuyw0','CM9VDa','BNnWyxi','z25lEvm','DgfYz2u','qLfmBKi','WPlcKCkoWPxcKG','ENfID3i','WONcLmkmWOVcIq','WOZcKCkmWORcJW','ldiZocW','yKjUAfa','wevpre8','BwvUDc0','q2HPBgq','ufHMuxa','mca0ChG','mduPo30','Cg9Z','idyWCYa','EeTKvxe','EsbPBIa','z3jHyMi','A2vKihu','ywnPDhK','Bg9dAge','uNneEgK','v2vItw8','cLSGif0','tMrKvwS','q25kEwy','wvL2rva','B25LoYi','mduPlda','ysGYntu','nsaWlti','A2v5vhK','y29MB3i','DvbNyxK','Dgv4Dee','zMXVyxq','vgzmthi','s0viBgG','z2v0Dgu','AxmGBwK','Awv3','DgHLigm','DMLLD0i','BgX3yxi','C3aTy3y','AxrPB24','zejdBgi','B3jTihi','oJm0ChG','n3WXFda','WOVcJSkoWPhcHG','WOFcKSkiWOJcJa','rKLLuuG','CM5PBMC','ig1LBNu','ugfZDgu','ExrSC2S','CM93CW','BNvTyMu','l2j1Dhq','BwuGlsa','mNb4idC','AwXKlca','zcbYz2i','BI1PDgu','txj2uMC','rfrZuwy','uLjsqxi','mJGPo30','z2v0q28','B2zMC2u','EwuU','B2XLig4','DhLWzu4','qwDjDfu','zsbUzxy','AufhuNO','tvjly1C','z3zLvfO','nNb4o2i','DdPUB24','icdcTYaG','B3CU','lL9Nyw0','zM9UDdO','ueXbwuu','AgXdBxe','iJ5dB3a','o2zSzxG','CMvKihK','tNvYwMy','WPlcLCkqWONcIa','WONcJSkgWPxcJa','Bgv4oJa','CxW9','C29SAwq','Bw4TDge','iMjHy2S','D3v3qLK','zwqU','DgeTyt0','zfjMr24','wgvrCg0','AwDODdO','oYi+tM8','psjZDZi','z2LdqwW','zJzIowq','Axzguui','sNvdDxC','zhPtAee','q0LJvMK','tw91C2u','C3LUyW','zgL2','ugf0Aa','z0jlA1O','nhWXmhW','C2v0sw4','zxi7zMW','nNWY','zxjLBMm','BwLUkdu','EtOUndu','zxjZ','ihvUAxq','CMuGy2W','Cuvft3a','tw1WDxC','ufDxrMu','AwX0zxi','zvn0CMu','D05MvM4','y2HLy2S','AwvSzca','yxjTAw4','EdTIB3i','CKDnA1y','BMvUDa','y29UDhi','odKYmty0mhbQrwvltq','C3r5Bgu','y2XLyxi','WOJcH8ktWOZcLa','z2v0x3q','v2jgrxy','AfzotLe','EhbVCNq','y29SB3i','C0LgEwK','mhb4oYi','zgf0zxm','zMLSDgu','zM9UDa','iey3ica','y2fSBa','B2X2zwq','vuLLr2G','CgfUzwW','DMfS','vKLt','suXgshC','twnZvNy','zxi7z2e','zYb3Agu','WONcLCksWPdcHG','CvryqKK','rvnqig8','WPpcK8knWO7cIW','A3mGD3i','AhLSyMy','Ag90CYa','zwqGysa','y29WAwu','WOZcKmkhWOZcHG','BgfZDfC','zwXMoMy','DdOWo28','oJPHzNq','igfYztO','yxjLBNq','Bez1BMm','veLQrLe','BM8Gseu','ENztyxC','ELbYAw0','FdD8mxW','BMHhwxG','uKfqueu','Eff2BMi','zenOAwW','vMjmvMC','yMPiqNy','C3fYDa','zw50','ExflrNq','yxr1CMu','y2X1C3q','mhGXyYa','ugXHEwu','ihvWk2q','DdmY','ihDOAwW','lNnRlxy','pt09','ELbzwLO','zxrmzwy','WPpcKCkjWOJcJq','BNrYB2W','q3D1qwi','vgv4Da','zwXLy3q','B3qUBw4','A2v5vxm','AezLyva','D2r0CwW','oInMn2u','teXJCuK','CMeTBwu','D2fSA2K','CZOXmha','zMvLDa','zZOXmha','u3ndzgC','y2SIpJW','DgvTCZO','l3nWyw4','oJOTD2u','yxfkswm','Fdz8mtm','r0DFr2e','wwLsC0m','CNjVCG','t1HOEvm','qu1xALG','s3rPC0e','yM9ssxm','tM9Zzwy','yuXvqvK','A25IywK','DMLLDW','zYbPBNq','AgLSza','wgDev1y','B3i6i2y','ANvZDgK','BcbKAxm','q3Duy2y','yMLUzgK','wxreCfO','BMC6nha','y3rbtfu','zxnVBhy','CdO4ChG','yMX5lum','ue1IzLG','AuvTBu8','CMfUC2y','Ae1RCuK','uKHtzu0','z2Hcr2O','sfrnta','weL0ChK','ywrPzw4','C2vYAwy','Bu5AtKi','CMvWzwe','BNrxAw4','vK5XqwG','zg9JDw0','ChG7B3a','y1zbs20','ChG7yMe','rMn2BeK','sgvHCa','BNnMB3i','B250zw4','AgvSza','Fdj8mq','BNrezwy','Dg9pt3u','B2jMsq','ig9IAMu','qvfsywu','y2f1EKG','t1vwrxm','tgTzvvO','ie1ciea','ztTZDhi','lJCYktS','D3jHCdS','Axq7Fq','qvrpv3G','DMvYEsa','u3rYAw4','DMfYkc0','CMv0','s2TYzvq','s292r2q','t2nuzu0','w2fYAwe','zxHLy0m','D0nnv0e','CMfUC3a','Ce5HCeW','BML0Awe','WONcImkrWPdcIG','t0f0rhG','vgPjEeS','tuTIs1C','t3niCxy','WPlcJmkiWOFcIa','zZO2ChG','s3bAyNi','rLvbwe8','vhboyxy','yLvOC2q','zYbIBgK','CMfUzg8','qNLjza','BMfTzq','C0LwvhO','vuLmvNe','yw1PBMC','WONcKmkhWOBcHW','r3nJr2i','tMTwuKq','uLmG','sM90u1m','kdaSmcW','DMnJswq','zxrMANC','shLZy1K','CMf3Aw4','AgLKzgu','DNDUD1u','y2vK','zsbVyMO','WOFcH8kjWPlcJq','EfrutLK','CMeTC3C','WO7cJmkqWORcJa','DgL0Bgu','CMfUy2u','y3bQrhy','WOBcICkgWOVcIW','zuDiuKO','zKf3rNK','B3jRu3K','WOZcICkrWPxcKa','Fdf8mNW','WORcK8kqWOBcJa','tunHzu4','DgGGB3i','zdTTyxi','otK7Bwe','otbWEdS','reLZEfu','C3rHBgu','EwHftuy','Dw5UAw4','AwvKige','igvUzca','yxbWBgK','ig9MzG','zciVpG','EdSIpNy','WONcJmknWOVcJW','zMLYzsa','CxP2q0W','Aw50','BMrVDY4','A1n5BMm','m3WX','DMvYE2m','yxa9iNi','BfnQuwC','ndzWEdS','BM8Gz3i','wKTuzg8','BI13Awq','DejHwKy','Dw5Kzwq','ywT1CMe','Dw5Yzxm','s1rbz2q','D091q1G','mJrWEa','CMvHzhm','r2fMvLq','BYb0Agu','qLr5DfO','psjZywS','igP1Bxa','EhvOz1a','mhW2Fde','zunOAwW','EMu6mta','mdaWo3u','EgvKo3q','s25iue8','igjSB2m','ihjLywm','WOBcISkpWO/cIq','ChG7','ndC0odm','D2H5','lde0mYW','iJ54pc8','BwuGD2u','CM90yxq','lJi1ktS','q2DSywW','u3PQr3O','Dg57ywW','mdTMB24','WOVcKCknWOBcKW','BhzLzcK','Cg9Zqxq','B1LdtgO','zwqGBM8','zgL1CZO','Cc1SzW','E2zVBNq','BvPPwui','yM90q28','yxrHBJi','Chr1CMu','C2fUzsa','WO3cLCktWPtcIW','wNrWtuS','zxi6mxa','uxDlC2u','B29RCYa','BMCGlYa','Dgv4Dem','CeDoEhu','A2LUzYa','ztOXnha','ALnmshq','whDStgG','BKrHzu0','BgLNBJO','CIbWywK','BenpDgK','CNHYEgq','twv1yMG','u3fAzw0','B3vUzdO','zgfY','B3G9iJa','kde1mcu','BwvTB3i','ltiUns0','zsGPlMu','v0LWqKK','D29YC3q','y0j1rLO','otK7y3u','lcbZDgu','v1PsAxG','WPpcJmkrWPhcKW','lwTD','DxrVo30','EdT9','zcdcTYa','D2vPz2G','i2zMnMu','o21HCMC','uxbrufu','BurSEMy','CxvHDa','y29Uy2e','AxrZ','rfv3yKO','v05ms2W','y0THzva','r0jxquu','qKvhsu4','iJ5ZywS','mtiGmJe','WO7cKmkhWOFcKG','BIbtruu','z01lvfy','m3b4o3C','Dwn3vLm','AKnIreS','qNHLCuC','txvSDgK','C3bSyxK','uwLhBgi','z2v0x3a','qM50EMS','yNL0zxm','BdPUB24','vgfTCgu','D2fYBMK','yM9KExS','WO7cLmktWPpcJq','yvDUsKq','z2nRBMC','z2H0oJe','DMvKpq','B21pAwm','idaGmJq','oJiXndC','rw5JsKi','yNvPBhq','nhWWFdm','WOFcJCkpWO3cLq','zfzbDvO','BhKUieG','ANPlwgu','AwXvyuq','zwrRquS','CKLSrhu','Dc13zwK','wYbHBMq','AwjquwS','ueXUvKe','DMLLDZO','wuHmsfO','sffkDxi','y3vZ','yNfIsgS','BxbSyxq','CNvfwuK','rg1Mywe','igHVB2S','Dg9W','zcb0Agu','igDSB2i','C2Dftxu','C28GC3q','Fdr8nxW','yw4+','BKTqwgq','C2v0sxq','y0Hhyw0','DhnPzgu','AMfLvLm','zxrZigm','CY1VCMK','ruPACeK','ChbLCIa','mte3mdy2thzlwLvq','BM9XCvm','rLHfDgC','WO7cLmktWPtcJq','yhbSyxK','A2jlA0e','C2STDMe','zsbLDMu','ysbMB3y','B25LoW','BwLUv2K','WO3cK8kvWORcIa','idfWEca','DMvK','WPpcHSkhWOZcIG','i3nHA3u','o2jHy2S','tLzvz2G','tM90igq','EcbZB2W','BhHquuy','WPdcJCkuWOFcKq','BM90igK','ywDQBw0','AwrKzw4','Bg9YoNi','zg5pyLe','iJ5VCgu','uvjbD0u','u2vwChm','t3noD00','wKTft2u','oYi+rvm','D2fZBvi','nhWXFdu','rxrRC0q','r0Dzs04','re9nq28','C3bYAw4','ztT9','sw5Zzxi','wvzZDfC','yw1LlGO','AwrLE2q','AKDIq0O','mhG1yW','n3b4o3a','D1bYrgG','zMfJDg8','ELHQtfO','zsXdB24','rxjWtNG','BIbHihi','oMLUC2u','D2L0y2G','rNLKAxi','y2LyEMW','C0zYwKe','B0vfC0e','Ag9Ksw4','yxv0BZS','tgf0zvu','nxW0','zYbMB3i','vNPStfK','CePvA0W','DMvKia','BM8GCgW','yMeOmJu','Fdv8mhW','BguGkhW','WO/cKCkoWO3cHG','WOZcKCktWPxcHW','B3i6CMC','B21Tyw4','te5wvKW','ndGZnJq','u2vZC2K','B3qGica','Bxf2Dwe','DxnJBfa','A2v5q28','AurlEgG','z1HhAxy','msiGDMe','ywrPDxm','igjVDhm','Dw5Kzwy','BhvLica','Aw9Uihu','B3r7ywW','Bw4TC2K','ysbZDge','tvjwyKu','CxrRDvu','zvbPEgu','rKXNs0i','DhjPzwq','EvbbBNC','pgLUChu','uMTrt2m','zcWGBM8','DM9Pza','C3rHCNq','z2HhwKi','yw1PBhK','z2v0rMW','yw1L','ve9gz0e','whbOtgC','BNrPyxq','rMfLs1e','y3DSEvq','lwrPCMu','DKnmvxe','BxmGD2K','CMq7zM8','Ate2','Dg5Ku0S','ys9vv00','B0X1s0S','A2LUza','DgvZDa','lc40ktS','tw9KDwW','WPlcKCkiWOZcKa','r2fTzq','DcbZCgu','z2v0vwK','u2vSzwm','BYbHihq','igvHy2G','Bg93oMe','z2H0oJC','tgvjAgi','zxrRu2O','CgvZia','z2v0sw4','B0nbzMy','refnt3i','ihnRAwW','v0LWwuy','wKDWzhy','ig90Agu','pgnPCMm','r01sr2i','D3Hey2S','zw5LBxK','WOZcISkjWPdcJa','AKvpEKS','uNnswfe','Awv3igK','z2LUoJa','BMC6nNa','WPlcImkqWOZcIa','WOFcJmkgWONcKa','zMLSBa','B25RtgW','zgf0ys0','Aw1L','mhGYoa','tMjzD3G','AgLZig0','AKnSuw0','nxW2Fda','oxWYFde','BKfJBwe','z1zdshu','r2TqqxC','mJbWEcK','DgX7zgK','yKjKBNK','ywX7zM8','BNz1DLa','CMDIysG','ztT3Awq','zw50o2i','tg9Hzgu','yxGTD2K','z3LUqLy','WOJcKCklWOFcHW','Ag90icG','Bu9Mv3q','lde3nYW','o3DVCMq','D2f0y2G','uMvZB2W','zxG7ywW','EY13zwi','Aw5KzxG','B2XVCJO','lwvZCc0','BwuUy3i','i2jKytK','yLbzAvy','CM91BMq','mJqYlc4','CNmkEwe','mhGXma','ChjLDMu','AKLdyxu','Dg9WoJe','q3D1tMC','WORcKSkkWPhcLa','phn2zYa','DMD7D2K','ChG7iJ4','AtmY','BgW+','AxHnq1O','CNfKEfa','ktSTD2u','WO3cJmkgWPtcJq','m3WYFda','DK92DeK','Esbku08','Au5iq1i','mhGZma','A2vLCa','qMLjBeO','sKT0Dxy','ntuSmJu','Aw5Ly2e','ru9yqLO','khmPigq','wvD4qxy','Awq9iNm','CYbLBMu','CMuk','zvjLy3q','A2P6sw8','lde1nYW','t3vZzuK','DLH5zMy','nxftyvz4BW','WO/cLCkjWO7cIW','CwDvsMG','vKXtCxe','wNzutLG','vfvrENa','ALrtrNO','lMn0B3i','nYWUnYK','yxmGAwq','ywL0Aw4','BgfZDa','DMTTuKe','BwLZC2u','uwHjquK','zw5LBwK','oJi2ChG','CwXHDLm','igL0igK','WPdcJSkvWPpcJq','C2v0ida','Ewf3r2u','yxrHihi','zwvKig8','DxbYwha','ywjSzwq','zxi7Dxm','C2HHzg8','CNL4vNa','ywrKrxy','D09ot04','WOZcICkoWOBcHG','Aw5MBW','iMrPC3a','lNnRlwi','rNf2vhq','BgjYs2q','lwe9iG','q29TCg8','WONcHSkuWPlcKG','DxbKyxq','u2vqwvu','C3zNE3C','ysXI','lNnRlxa','Ag90','sMjTB28','DgfNtwe','zMfRzq','DhLWzq','vgT1vxq','sxPlwNe','yxjKlwG','EeHKu24','CNnVCJO','BMXwA1O','Dw5KoNq','yvngqvq','Fdv8mxW','igj1zMy','mNWXnNW','nYWUnsK','Axbpt0y','CLvuvLi','CMeTzxm','WPtcJSkrWO3cLq','Dg9YicS','BgCIihm','DhfXAuu','yLzQsMG','ohb4ide','AxzLo3C','qxnZzw0','C25HChm','B3nPDgK','CYbVCNa','ywLSywi','tNLez2W','AwWYq3a','lJGYktS','EwzkC1q','C2L0Aw8','zxnW','WOBcHSkmWPtcIW','BujZEe0','D0jYDeG','Aw5Lza','zunUv2m','EunqDgG','mIiGC3q','uIbbq1q','surfige','q29TCgW','DxjHtwu','te9h','zwf0zva','EuvQBNm','yLvdrg4','WPtcICktWOJcKW','z09LB0K','C0XSrKG','B25Nig8','ANzzuMq','y0rurM4','ntTWB2K','nsK7Dhi','z3jHyG','rgTVsKe','kZb4mJK','FdL8mta','EfPRu1i','B3vUzcW','ihLLDa','i2zMzdq','BM90zq','nZu7Bwe','BLf3D0i','AgfUzwq','r0zkB1e','DgHLige','q291BNq','Dhm6yxu','EKvcDvG','BgvHCG','BgvYkZa','y1rPwwS','z3f4q3G','seDgsMu','DvnjD3O','zvbTrgi','WOBcJ8kvWPlcKG','yw5ZDLu','DxjLzey','WOVcHSkuWPtcKq','nhWXFdi','C29SDMu','CdO2ChG','t0LUz3y','AgfKB3C','WO7cKCksWOFcIq','CfbWBKG','tfLsuMq','kduWmha','rNDkChi','uLbJzwe','rNbhsMu','y2fS','CMvZB2W','C3LUy3m','EgjOCfO','nNWZ','Ahq6mJq','DgHPBMC','CMfUz2u','mIWYosW','B25Ligi','BMvJyxa','vxbKyxq','zxr1wM0','vwjOs3e','yxqG','ifvxtuS','q29WEsa','oJa7zgK','yMXVy2S','Axr5oI4','DZiTB3u','yMX5lMK','CgfJAxq','tfbSAvK','Bg9JywW','ldeWnYW','AgvPz2G','D2fZBva','tvHlr0i','CMrbB3m','DxrVo3O','A3mGD2G','CLH4AK8','AeLJrK0','BgvUz3q','igj1Dca','BM90ihi','yxr0zw0','BMvS','qxn3yNy','BwLry0m','DhLxzwi','nhWZ','zwTTsfa','ywqU','WOZcJ8kmWORcKq','sgvHBhq','lwHPBNq','Dw5tCLG','zurUAve','yM9VBgu','ywXSvMu','AgL0zs0','Ewv0ic0','WOBcKSksWORcJG','CYb1BNi','lIbeAxm','WOJcLmkoWO3cKW','zxqSig8','nIWYmZG','D2HPDgu','ChG7yM8','B2SGAw4','zgTPDa','zs1JB2W','y2f0','ie9o','Ahq6nJu','EwzbweW','igDHBwu','BvjLrNe','mhb4o2y','DgnOzxm','yxjN','AxnmB2m','CMP3rey','zdTWBge','qxrbCM0','zhHvz1K','Dxm6n3a','zw1VCNK','oJfWEca','CM9SBgi','ihbHBMu','r1rVswq','ztTWywq','o2zVBNq','yNfUELG','CMvSyxK','qLnUrfu','zdP0CMe','zfzIBxe','zxj7y28','qNjHy2S','BgfIzwW','q0r0qMq','rLzWu2y','vMnirMu','ihbHDgm','mdCSmtu','B2LUDgu','mZGSmJq','B0jNAgG','DuDIBNK','C3vI','CNPlvg4','zwn0Aw4','y0fXvfC','CMvKia','DvLfEvu','ywWGB24','DeP0z1u','uxLXB1C','DMLLDY0','B3vUDa','B3bLDgu','BNTIywm','WO/cJSkpWOBcKW','zKHOwgW','BhqGC2K','CIb0Agu','ihbHC3m','Bgu9iM0','BgvYkW','zxv5uu4','q2XPCgi','DMDgBwe','DwDPBI4','qKXwrvC','CgXPzxm','BNrLCI0','y0Pyvei','CfrzrxK','Dde2','mtyXvujezhbN','zgvYoJe','rhfKBMS','CMfKAxu','uhrxwu8','B3j5','zfnVwuS','WPhcKCkjWPhcKG','t0SGt1y','BfLoD3i','B2XZoJO','v0LkrLu','BLz2ugm','Aw5PDgu','EfPLy1e','ihjLy28','z2jHkdi','WO/cJmkgWOFcJG','BgqGB2y','zLrRDxe','z0PgC2m','s0Dcvva','DMLZDwe','BMq7Fq','Bg9ZzxS','AgLKpq','zEkaPJWVCW','rxzyExy','oIjjBNq','s2rrtKC','nsiGC3q','D0nmthi','yw5Nzsi','BK1HBMe','D0vhqLK','qMHdrKK','DvDRCeS','yNv0ig4','rxHWB3i','ign1yMK','WPpcHSkiWO7cKa','EI1PBMq','BI5OB28','A3TOzwK','WPdcKSkoWO7cHW','v2j3uvi','uMvZzxq','qvnhCge','mJu1lde','Bw92zvq','BLzPzxC','yMfJA2C','vvDnsY4','C2vLBNq','B2XZE2y','uerirgK','yMfZAxm','ihrOAw4','DMLLD0G','BhzLr2e','cNbPDgm','mtbWEdS','oMLUAgu','rfPkDLC','DgvYiJ4','B2TLlxC','ytK5o20','yxK6zMW','AMvJDhm','wfzoruy','zg93BG','CMf3','BY1MAwW','nxm0idi','ig1HBMe','B3nLCY4','y1jjy1y','z2fTzsa','ifnRAwW','uKj3Efq','ys1ZDW','AxrSzxS','BwfUEq','zxaGDgG','yKntAKy','q0r5tgq','BNqZmG','Dxm6mta','ve5prKO','B24Gzge','tNPnCxy','AdOZmNa','otLWEdS','WPtcH8klWO3cIq','idaGlYa','EMvzwNm','owqIihm','qMLUzgK','u2nYzwu','yNrou28','vw5PDhK','Bgf5oM4','nxW0Fdm','B25ZB2W','B2vKveq','yMrdBM8','oYi+','EuLJqNu','oY13zwi','lJv6iIa','CKnVBg8','zxCGy2e','z2LMEq','WOFcLmktWO/cJq','yxbWBhK','x19WCeW','AvbIuxq','DgzqDhi','r09JwxC','Dg9gAxG','uuPUrgu','D2fYBG','BwLLCYa','B29RCW','zMLYC3q','Dwj7zM8','wuXpzwW','B0zYzMe','WOZcISkgWPdcHW','AwDPBMe','BezVEgq','y21K','EvLtDvC','C2v0Dgu','zcbPCYa','EwvYqw4','igHLyxa','v1L1uwS','v1HVBeO','vg90ywW','r3r4q3a','lxDLyMS','rw5LBxK','D2LUzg8','nYWUmZu','AxrOie0','lJa4ktS','EwXLpsi','sMTRAfG','zxjHia','zwqGlYa','DhrVBJ4','ksbZyxq','DgG6mZq','DxjHlwu','B2jMrG','B2DVE2q','tvv0svO','tLznrvq','ChG7zM8','yxbWzw4','rwvNzvy','v2vfBNa','yxLYyM8','DgDwrLC','zhrOoJm','q29OEgW','Efz3y2K','B2TLlwW','zsbHCha','Ewf3','B25Tzxm','n2vLzJu','ifnxlvC','BgfZDem','DwLuB2G','mJCWnJK4oe9yAu5Oyq','tMjbB0e','vhnbAge','mxWYFdy','WPtcJCkrWPhcKa','DLztBfC','q0X2BfC','B2jQzwm','D2L3BNy','C3rLBMu','CuzbrNi','lNnRlxi','z29Qwg0','DcbHBIa','B25VC3a','ChGGC28','C3rYB2S','BMfIBgu','yM90Dg8','nduPo2i','lM1Ulxq','CMf3ugK','yxvSDa','CKXPC3q','Bw4TBwe','DgXL','CYb3zxi','CgrHDgu','BgW6Aw4','ig91Dca','nJq3o2q','ignOzwm','sNvTCca','zYaVigO','y2uSq28','qLjJuhC','z2v0x2y','DYaGia','C3LZDgu','nxWWFdi'];_0x599b=function(){return _0x3d5439;};return _0x599b();}function _0x4f94(_0x8f0862,_0x373972){_0x8f0862=_0x8f0862-(0x36*-0x6+-0x173b*0x1+0x1a3d*0x1);var _0x6a0246=_0x599b();var _0x2a4abd=_0x6a0246[_0x8f0862];if(_0x4f94['dASeHv']===undefined){var _0x45d10a=function(_0x22d6ed){var _0x52ea68='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3b908f='',_0x535cb0='';for(var _0x1da3bf=0x691*-0x2+-0x616*-0x6+0x29*-0x92,_0x37fdce,_0x5cb30d,_0x40d9c7=0x2c3*-0x5+-0xb23+-0xc79*-0x2;_0x5cb30d=_0x22d6ed['charAt'](_0x40d9c7++);~_0x5cb30d&&(_0x37fdce=_0x1da3bf%(0x13d+-0x94f+0x816)?_0x37fdce*(0x1*-0xe94+-0x1ed6+-0x5*-0x922)+_0x5cb30d:_0x5cb30d,_0x1da3bf++%(-0x23cc+-0x1*0xa2+0x2472))?_0x3b908f+=String['fromCharCode'](-0x2*0x639+0x1*-0x11bd+0x1f2e&_0x37fdce>>(-(-0x1f8e+-0x8b*0x23+0x3291)*_0x1da3bf&-0x61*0x1+0xa36*0x2+-0x1405)):-0x4a4+0x8c*0x31+-0x1628){_0x5cb30d=_0x52ea68['indexOf'](_0x5cb30d);}for(var _0x37aa2f=0x2*0x934+0x3af+-0x91*0x27,_0x43c33d=_0x3b908f['length'];_0x37aa2f<_0x43c33d;_0x37aa2f++){_0x535cb0+='%'+('00'+_0x3b908f['charCodeAt'](_0x37aa2f)['toString'](-0x1363+0x101a+0x1*0x359))['slice'](-(0x1*-0x1a23+0x25*0x6+-0x86d*-0x3));}return decodeURIComponent(_0x535cb0);};_0x4f94['YsNMPF']=_0x45d10a,_0x4f94['troizX']={},_0x4f94['dASeHv']=!![];}var _0x4e3df2=_0x6a0246[-0x5e+-0x1421+-0x9*-0x247],_0x2c9334=_0x8f0862+_0x4e3df2,_0x5231f9=_0x4f94['troizX'][_0x2c9334];return!_0x5231f9?(_0x2a4abd=_0x4f94['YsNMPF'](_0x2a4abd),_0x4f94['troizX'][_0x2c9334]=_0x2a4abd):_0x2a4abd=_0x5231f9,_0x2a4abd;}(function(_0x25619f,_0x389320){var _0x278afc=_0x4f94,_0x17cfcb=_0x25619f();while(!![]){try{var _0xdcf9f4=-parseInt(_0x278afc(0x245))/(0x1*-0x72d+0xb4*-0x19+0x18c2)*(-parseInt(_0x278afc(0x65f))/(0x1*-0x1137+-0x634+-0x1*-0x176d))+parseInt(_0x278afc(0xe9e))/(0x1869+0x17*-0x124+0x1d6)+parseInt(_0x278afc(0xdd4))/(0x14c9*0x1+-0xe44+0x9*-0xb9)*(parseInt(_0x278afc(0xc0c))/(-0x8*-0x3b3+0x1d57+-0x3aea))+-parseInt(_0x278afc(0xb22))/(-0xe12+0x2*0x6a1+0xd6)*(-parseInt(_0x278afc(0xd24))/(0x2a5*-0x5+0x136*0x19+-0x1106))+-parseInt(_0x278afc(0x262))/(-0x1*-0x2ef+-0x1955+0x166e)*(parseInt(_0x278afc(0x2f5))/(-0x1bf4+0xa00+-0x11fd*-0x1))+parseInt(_0x278afc(0x98d))/(-0x2620+-0x6*-0x510+0x7ca)+-parseInt(_0x278afc(0x223))/(-0xc0b*0x1+0x15*0x1dc+0x2*-0xd7b);if(_0xdcf9f4===_0x389320)break;else _0x17cfcb['push'](_0x17cfcb['shift']());}catch(_0x5bf1f1){_0x17cfcb['push'](_0x17cfcb['shift']());}}}(_0x599b,0x2281a+0x3a765*-0x3+0x1156c2),((()=>{'use strict';var _0x189e9a=_0x4f94,_0x368390={'SOnhj':function(_0x49e08e,_0x2ead48){return _0x49e08e!==_0x2ead48;},'HVVWe':function(_0x820c41,_0x46eb5b){return _0x820c41!==_0x46eb5b;},'vwnwU':function(_0x2480e8,_0x237d3a){return _0x2480e8===_0x237d3a;},'DkoJA':_0x189e9a(0xda7),'WpukB':_0x189e9a(0x7f6)+'e','AKfPk':_0x189e9a(0xdb3)+_0x189e9a(0x4cd)+'tyWeb'+_0x189e9a(0x6de)+'t.Val'+_0x189e9a(0x8c3)+'pper\x20'+_0x189e9a(0x928)+'ssing'+_0x189e9a(0x679)+_0x189e9a(0xaac)+_0x189e9a(0x757)+_0x189e9a(0xa69)+'g\x20bli'+'nd.','FMelh':'camer'+_0x189e9a(0xb2a)+'\x20only','cUvIp':function(_0x400b46,_0x2d686f){return _0x400b46+_0x2d686f;},'mzWLR':function(_0x33cfd2,_0x7826cf){return _0x33cfd2/_0x7826cf;},'gOTOH':')\x20-\x20f'+'ov\x20on'+'ly','KbgyH':_0x189e9a(0x993),'cJXTB':function(_0x272581,_0x5430f9){return _0x272581<_0x5430f9;},'SMspj':_0x189e9a(0x98a),'uDBfL':_0x189e9a(0x86d),'ycXnz':_0x189e9a(0xa1d),'unSrX':function(_0x4c913c){return _0x4c913c();},'rdAos':function(_0x498ffb,_0x7031f2){return _0x498ffb===_0x7031f2;},'XIdhk':_0x189e9a(0x572),'tqyKE':'VHbFU','hrBTq':_0x189e9a(0x66d),'UlWZR':_0x189e9a(0x5ca)+_0x189e9a(0x500)+'v2','WIJFU':_0x189e9a(0x5ca)+_0x189e9a(0x500)+_0x189e9a(0x84a)+'b','LQfDz':function(_0xfbc728,_0x539b00){return _0xfbc728&&_0x539b00;},'OsNwM':function(_0x3be0d4,_0x31dd45){return _0x3be0d4+_0x31dd45;},'NWvLI':_0x189e9a(0x68c)+'r-rad'+'ius:9'+'99px;'+_0x189e9a(0x323)+_0x189e9a(0x9fb)+_0x189e9a(0x81e)+_0x189e9a(0x7cd)+_0x189e9a(0xe48)+_0x189e9a(0x80f)+_0x189e9a(0x63e)+_0x189e9a(0xde2)+_0x189e9a(0x83e)+'onsol'+_0x189e9a(0x2a6)+_0x189e9a(0x4f7)+_0x189e9a(0xe76),'zSibr':function(_0x587d39,_0x1ab75e){return _0x587d39&&_0x1ab75e;},'uKdVx':'sakur'+'a-sw-'+_0x189e9a(0x89e)+'s','gyKwI':'style','ayrbo':function(_0xfb483e,_0x2d400a){return _0xfb483e(_0x2d400a);},'RsDxi':_0x189e9a(0x995)+':','ansvU':_0x189e9a(0x865)+'1d','iNmbH':_0x189e9a(0xbd0)+'21,12'+',29,.'+'9)','KoqiZ':function(_0x559dd6,_0x118e5d){return _0x559dd6(_0x118e5d);},'xHdSn':function(_0x6b649){return _0x6b649();},'IZPgK':'sOUcA','RJWSg':'caCpb','GToId':'1|2|4'+'|3|0','bfCxO':'#2a0f'+'1b','TfLLr':'trans'+'paren'+'t','iVRvA':function(_0x69b63f){return _0x69b63f();},'bYGQV':'texta'+'rea','hFeaP':function(_0xc08b3d,_0x5e1ef9){return _0xc08b3d!==_0x5e1ef9;},'okahg':_0x189e9a(0x7c0)+'ame\x20f'+_0x189e9a(0x1f8)+_0x189e9a(0x849)+_0x189e9a(0x272)+_0x189e9a(0x9ad)+_0x189e9a(0x5c1)+_0x189e9a(0x33f)+_0x189e9a(0x5ea)+'\x0a','hSJqO':function(_0x206f2e){return _0x206f2e();},'FMVnA':function(_0x33a7a1,_0x4ea6b1){return _0x33a7a1-_0x4ea6b1;},'WZRix':function(_0x25324a,_0x331ae6){return _0x25324a*_0x331ae6;},'bBnhP':_0x189e9a(0x3ef)+'a8','vwtHx':'hooks'+_0x189e9a(0x8ae)+_0x189e9a(0xad2),'OehRj':function(_0x3315f4,_0x180f8c){return _0x3315f4+_0x180f8c;},'opete':'Bfvno','VQEPJ':_0x189e9a(0x1e5)+'vs\x20sn'+'apsho'+'t:\x20','gXGiv':';font'+'-weig'+'ht:70'+'0','etkSj':function(_0x5bea1e,_0x1b6d44){return _0x5bea1e+_0x1b6d44;},'aqJIc':function(_0x323745,_0x3482df){return _0x323745+_0x3482df;},'wobGi':'backg'+_0x189e9a(0xbe5)+':#150'+'c1d;c'+_0x189e9a(0xbe0)+_0x189e9a(0x391)+_0x189e9a(0x3f7)+'rder:'+_0x189e9a(0xe59)+_0x189e9a(0x676)+_0x189e9a(0xbd0)+'255,1'+_0x189e9a(0x6f5)+_0x189e9a(0xc49)+_0x189e9a(0x69d)+_0x189e9a(0x74e)+_0x189e9a(0xaa6)+_0x189e9a(0xea7),'iDKxh':_0x189e9a(0x955)+'12px/'+'1.5\x20u'+'i-mon'+'ospac'+_0x189e9a(0xb54)+'solas'+',mono'+'space'+';box-'+_0x189e9a(0xc27)+'w:0\x202'+_0x189e9a(0x87f)+'0px\x20-'+_0x189e9a(0x54b)+'#000;','EuElL':function(_0x2d12c6,_0x5917d9){return _0x2d12c6+_0x5917d9;},'AuKTG':function(_0x29e31e,_0x5c18b7){return _0x29e31e+_0x5c18b7;},'skcot':function(_0x3e6392,_0x10372f){return _0x3e6392+_0x10372f;},'FGWoE':function(_0x21b3a5,_0x5eb67a){return _0x21b3a5+_0x5eb67a;},'TpNav':function(_0x1c48a2,_0x5c1259){return _0x1c48a2+_0x5c1259;},'sFrZA':function(_0x5c5d4f,_0x1a8865){return _0x5c5d4f+_0x1a8865;},'LHkVc':_0x189e9a(0x691)+_0x189e9a(0x98e)+_0x189e9a(0x361)+'ding:'+'9px\x201'+_0x189e9a(0x33a)+_0x189e9a(0x1f6)+_0x189e9a(0x29e)+'om:1p'+_0x189e9a(0xb35)+'id\x20rg'+_0x189e9a(0xb66)+_0x189e9a(0xe81)+',177,'+'.3);d'+_0x189e9a(0x61e)+'y:fle'+_0x189e9a(0x4da)+_0x189e9a(0x49b)+'align'+'-item'+_0x189e9a(0x749)+_0x189e9a(0x2c7)+_0x189e9a(0x95e)+_0x189e9a(0x495)+_0x189e9a(0x41d),'rZbXs':'<span'+_0x189e9a(0x5be)+_0x189e9a(0x3c1)+_0x189e9a(0x629)+'\x20styl'+'e=\x22co'+'lor:#'+'7a658'+'6;fon'+_0x189e9a(0x4cf)+_0x189e9a(0x7c2)+_0x189e9a(0x670)+'ding:'+'1px\x206'+_0x189e9a(0xcdb)+'rder:'+_0x189e9a(0xe59)+_0x189e9a(0x676)+_0x189e9a(0xbd0)+_0x189e9a(0xd54)+_0x189e9a(0x6f5)+'7,.35'+_0x189e9a(0x565)+'der-r'+'adius'+':999p'+_0x189e9a(0xa6f)+'?</sp'+_0x189e9a(0xb18),'eZQuA':_0x189e9a(0x280)+_0x189e9a(0x5be)+'sw2-s'+_0x189e9a(0x53c)+'\x22\x20sty'+_0x189e9a(0x4fe)+'olor:'+_0x189e9a(0xbe3)+_0x189e9a(0x347)+'aitin'+'g\x20for'+_0x189e9a(0xce3)+'\x20fram'+_0x189e9a(0xd3e)+'pan>','ZePGl':_0x189e9a(0x212)+_0x189e9a(0x5b6)+'=\x22sw2'+_0x189e9a(0xe42)+_0x189e9a(0x469)+_0x189e9a(0x3bc)+'ispla'+_0x189e9a(0x74a)+_0x189e9a(0x620)+'gin-l'+_0x189e9a(0x200)+_0x189e9a(0x4d8)+'ackgr'+_0x189e9a(0xac1),'zBRFD':_0x189e9a(0x212)+_0x189e9a(0x5b6)+_0x189e9a(0x96a)+'-x\x22\x20s'+_0x189e9a(0x6a4)+_0x189e9a(0x962)+'groun'+_0x189e9a(0xcf8)+_0x189e9a(0x8fe)+'ent;b'+_0x189e9a(0x1f6)+':1px\x20'+_0x189e9a(0x960)+_0x189e9a(0x4a3)+_0x189e9a(0x745)+'143,1'+_0x189e9a(0x3f4)+_0x189e9a(0x46d)+_0x189e9a(0x9f5)+_0x189e9a(0xdd0)+_0x189e9a(0x69d)+'er-ra'+_0x189e9a(0xaa6)+_0x189e9a(0xb50)+_0x189e9a(0x67a)+'g:4px'+_0x189e9a(0x611)+'curso'+'r:poi'+_0x189e9a(0x892)+_0x189e9a(0xa99)+'butto'+'n>','uHnZz':_0x189e9a(0x691)+_0x189e9a(0xc04)+'w2-bo'+'dy\x22\x20s'+'tyle='+_0x189e9a(0xc2d)+_0x189e9a(0xd89)+_0x189e9a(0x91c)+'>','licay':_0x189e9a(0x212)+_0x189e9a(0x5b6)+'=\x22sw2'+'-spee'+_0x189e9a(0xe98)+'yle=\x22'+'backg'+_0x189e9a(0xbe5)+_0x189e9a(0x5c7)+'spare'+_0x189e9a(0x84c)+'rder:'+'1px\x20s'+_0x189e9a(0x676)+_0x189e9a(0xbd0)+'255,1'+_0x189e9a(0x6f5)+_0x189e9a(0x7c7)+';colo'+_0x189e9a(0xe6a)+'eef5;'+_0x189e9a(0x68c)+_0x189e9a(0x2c0)+_0x189e9a(0x40f)+'px;pa'+'dding'+_0x189e9a(0x65d)+_0x189e9a(0xd61)+'curso'+'r:poi'+'nter;'+'\x22>Spe'+_0x189e9a(0x34a)+'f</bu'+_0x189e9a(0xdbb),'AeFLb':'<inpu'+'t\x20id='+_0x189e9a(0x8a5)+_0x189e9a(0xb52)+_0x189e9a(0x8de)+'pe=\x22r'+_0x189e9a(0xd44)+_0x189e9a(0x520)+_0x189e9a(0x375)+_0x189e9a(0x8a4)+_0x189e9a(0x709)+_0x189e9a(0x851)+_0x189e9a(0xb76)+'lue=\x22'+_0x189e9a(0x8c0)+'yle=\x22'+_0x189e9a(0x52b)+':120p'+_0x189e9a(0x867)+'ent-c'+_0x189e9a(0xbe0),'URGMh':_0x189e9a(0xd8e),'aOOCD':_0x189e9a(0x280)+_0x189e9a(0x5be)+'sw2-f'+_0x189e9a(0x584)+_0x189e9a(0xcfc)+_0x189e9a(0x469)+_0x189e9a(0x4fe)+'olor:'+'#bda9'+'c9;mi'+_0x189e9a(0xa7d)+_0x189e9a(0xdbd)+_0x189e9a(0xbf0)+'1.0x<'+_0x189e9a(0x9e3)+'>','DcXCJ':_0x189e9a(0x280)+'\x20id=\x22'+'sw2-h'+_0x189e9a(0x5c9)+_0x189e9a(0x98e)+'=\x22col'+'or:#8'+'d7a99'+'\x22>F9\x20'+_0x189e9a(0x712)+_0x189e9a(0x9cb)+_0x189e9a(0x55c)+_0x189e9a(0xab6)+_0x189e9a(0xdfe)+_0x189e9a(0x5ba)+_0x189e9a(0xdf5)+'umpin'+_0x189e9a(0x66f)+_0x189e9a(0xcbd)+_0x189e9a(0x450)+_0x189e9a(0x987)+_0x189e9a(0x728)+'ich.<'+'/span'+'>','Gvwfk':_0x189e9a(0x5a5)+'id=\x22s'+_0x189e9a(0xcb2)+_0x189e9a(0x3f5)+_0x189e9a(0xdb7)+_0x189e9a(0x3e9)+'n:0;p'+_0x189e9a(0x67a)+_0x189e9a(0x9df)+'x\x2012p'+'x;ove'+_0x189e9a(0x240)+_0x189e9a(0x830)+';flex'+_0x189e9a(0x4a7)+_0x189e9a(0xb5e)+_0x189e9a(0xcda)+_0x189e9a(0x68a)+'e:pre'+'-wrap'+_0x189e9a(0xbda)+'-brea'+'k:bre'+'ak-wo'+_0x189e9a(0xb96)+_0x189e9a(0x8a1)+_0x189e9a(0x622)+';','MXUnJ':_0x189e9a(0x2c8)+_0x189e9a(0x86f)+':62vh'+_0x189e9a(0x969)+_0x189e9a(0x43a)+_0x189e9a(0x2ea)+_0x189e9a(0x34f)+_0x189e9a(0x60f)+_0x189e9a(0x82b)+_0x189e9a(0xc34)+_0x189e9a(0x356)+_0x189e9a(0x5ab)+'when\x20'+'the\x20g'+'ame\x20f'+'rame\x20'+'loads'+'\x20—\x20no'+_0x189e9a(0x35c)+_0x189e9a(0x949)+'eeded'+_0x189e9a(0x589)+'\x20it\x20s'+_0x189e9a(0x8e0)+_0x189e9a(0x344)+_0x189e9a(0x534)+_0x189e9a(0x809)+'nkey\x20'+_0x189e9a(0x7a6)+'t\x20inj'+_0x189e9a(0xd08)+_0x189e9a(0x9f2)+_0x189e9a(0xa87)+'\x20cros'+_0x189e9a(0xb1f)+_0x189e9a(0x6ba)+'ame\x20f'+'rame.'+_0x189e9a(0x343)+'>','OhYyW':'#sw2-'+_0x189e9a(0x429)+'s','kXWHB':_0x189e9a(0x718)+'x','wONON':_0x189e9a(0x718)+_0x189e9a(0x59c)+'e','qtkuU':_0x189e9a(0x718)+'snap','FqQDN':'#sw2-'+_0x189e9a(0x353),'HllvY':_0x189e9a(0x718)+_0x189e9a(0xb52)+_0x189e9a(0x2d3)+'l','QDzuG':'#sw2-'+'hint','JLIIz':function(_0x11b3e5,_0x2065b8){return _0x11b3e5+_0x2065b8;},'eBdLa':function(_0x190123,_0x31b270){return _0x190123>>>_0x31b270;},'QaxPK':'frame'+'\x20\x20\x20\x20','txnCj':function(_0x8fbc26,_0x10d60d){return _0x8fbc26+_0x10d60d;},'kCVwH':'uwmk\x20'+_0x189e9a(0x7f9),'HvHkl':_0x189e9a(0x7c6),'yABHp':'\x20\x20\x20co'+_0x189e9a(0x6f9)+'\x20','yhEMF':function(_0x188426,_0x11dcb4){return _0x188426!=_0x11dcb4;},'PzakL':_0x189e9a(0x872),'ZLpoh':'nMGwd','zPYZZ':'no\x20li'+'ve\x20ob'+_0x189e9a(0xd68)+'\x20capt'+'ured\x20'+_0x189e9a(0x76b),'vkBLD':'The\x20h'+'ooks\x20'+_0x189e9a(0xa71)+'on\x20th'+'e\x20gam'+'e\x27s\x20o'+_0x189e9a(0x54f)+_0x189e9a(0x408)+');\x20no'+_0x189e9a(0xca4)+_0x189e9a(0x79d)+_0x189e9a(0x899)+'means','vkmRA':_0x189e9a(0x4ab),'jSzTr':'──\x20','cWAfG':function(_0x45ae2e,_0x3b1dce){return _0x45ae2e<_0x3b1dce;},'nhGYx':function(_0x25c71c,_0x326a71){return _0x25c71c===_0x326a71;},'xqUVX':function(_0x1ce5aa,_0x32ed50){return _0x1ce5aa+_0x32ed50;},'OuseI':function(_0x5eaffc,_0x57c333){return _0x5eaffc===_0x57c333;},'tFuIF':_0x189e9a(0x8a2),'bVjJh':'%c[sa'+_0x189e9a(0x756)+'\x20pane'+'l\x20upd'+_0x189e9a(0x51e)+'ailed','pYfDX':function(_0x420764,_0x4e9557){return _0x420764+_0x4e9557;},'rIlDu':_0x189e9a(0x4cb),'GmmJF':'xcZen','nSgSQ':'vXVXw','CDtBd':function(_0x29d02d,_0x124ea2){return _0x29d02d===_0x124ea2;},'gdWkh':_0x189e9a(0xa1a),'HbiUZ':'YbiLw','ViJPb':_0x189e9a(0x550)+_0x189e9a(0x762),'WWCtk':_0x189e9a(0x289),'jEOzK':_0x189e9a(0x8ce),'DPjlx':_0x189e9a(0x51a)+'d','rxrxd':function(_0x3939f4,_0x47f795){return _0x3939f4!==_0x47f795;},'IDaoe':_0x189e9a(0x4b0),'TjSBY':_0x189e9a(0x34c),'YiRsC':_0x189e9a(0xdc6),'NiRDo':'yBjdY','Yfhmo':_0x189e9a(0x264),'sOGZd':_0x189e9a(0x5ca)+'a-ski'+_0x189e9a(0x92c)+'z','ihvtM':function(_0x50fabd,_0x592cb3){return _0x50fabd+_0x592cb3;},'uPgay':function(_0x5cedad,_0x1266b1){return _0x5cedad|_0x1266b1;},'mBsxM':function(_0x17508a,_0x40a630){return _0x17508a+_0x40a630;},'wCLLr':function(_0x5c5dcc,_0x1e2d50){return _0x5c5dcc+_0x1e2d50;},'plvhc':_0x189e9a(0x5c5)+_0x189e9a(0x1dc),'cHGam':function(_0x227d57,_0x29bd61){return _0x227d57+_0x29bd61;},'ZvTNX':'auto','uBoUy':'24px','Lvgup':_0x189e9a(0x1c8)+_0x189e9a(0x4f0)+_0x189e9a(0x604)+_0x189e9a(0x954)+'e','ErpNx':function(_0x4d2d74,_0x5d29fb){return _0x4d2d74===_0x5d29fb;},'BHeBo':_0x189e9a(0x67b),'ggjxL':'Runti'+'me._g'+'ame','rNnsj':_0x189e9a(0x5d4),'TaozC':function(_0x53bbab,_0x2b6f94){return _0x53bbab!==_0x2b6f94;},'KkFGY':function(_0x7bb843,_0x8e9f03){return _0x7bb843<_0x8e9f03;},'pznFu':function(_0x188caf,_0x14e708){return _0x188caf+_0x14e708;},'MrFfM':function(_0x2b1473,_0x3ffc10){return _0x2b1473+_0x3ffc10;},'yjOzP':'windo'+'w.','hOYAm':_0x189e9a(0x85d)+'le','qlkVq':_0x189e9a(0x42f)+'|5|0|'+'6|3','FGlwh':'sakur'+'a','wxDck':'posit'+_0x189e9a(0x47c)+_0x189e9a(0x489)+'left:'+'12px;'+_0x189e9a(0xbeb)+_0x189e9a(0x7ce)+'-inde'+_0x189e9a(0x7fa)+_0x189e9a(0x27a)+_0x189e9a(0xacb)+_0x189e9a(0xc42)+'point'+'er;us'+_0x189e9a(0x487)+'lect:'+_0x189e9a(0x32c),'NzMqv':_0x189e9a(0x569)+'\x20are\x20'+'appli'+'ed\x20bu'+_0x189e9a(0x411)+'FPSco'+'ntrol'+'ler\x20h'+'as\x20fi'+_0x189e9a(0x95a)+'et.\x20','kFKDN':'Eithe'+'r\x20you'+'\x20are\x20'+_0x189e9a(0xb38)+_0x189e9a(0xb56)+_0x189e9a(0xc7b)+_0x189e9a(0x6ee)+'he\x20ho'+'ok\x20is'+'\x20on\x20t'+'he\x20wr'+_0x189e9a(0xc71)+_0x189e9a(0x758)+'ad.','xxAdP':_0x189e9a(0x7b6),'hUcgB':'insta'+'ntiat'+_0x189e9a(0xac7)+'xport'+_0x189e9a(0x791)+'ory','UGRfn':_0x189e9a(0x359),'vAAMO':_0x189e9a(0x294),'PXZAC':_0x189e9a(0x270),'pqKXa':function(_0x4c6c48,_0x46f13e){return _0x4c6c48>_0x46f13e;},'aZusI':function(_0x599138,_0x50cc1a){return _0x599138+_0x50cc1a;},'CsAsS':_0x189e9a(0xb97),'aTgty':_0x189e9a(0x815),'XQjZf':'AAOsh','hrccy':_0x189e9a(0x8a3),'MeIZp':'u16','sgEMu':_0x189e9a(0x2f6),'BWQIR':function(_0x57463a,_0x111081){return _0x57463a^_0x111081;},'ZGyQM':function(_0x27dc9b,_0x50238a){return _0x27dc9b&_0x50238a;},'juAkc':_0x189e9a(0xc2f),'LuoZG':_0x189e9a(0x9b8)+'APU8\x20'+_0x189e9a(0x437)+'ty\x20in'+_0x189e9a(0x335)+_0x189e9a(0x2b2)+'\x20reac'+_0x189e9a(0xe47)+_0x189e9a(0x44f)+_0x189e9a(0x79a)+'me.re'+_0x189e9a(0xc93)+_0x189e9a(0x58f)+_0x189e9a(0x25a)+'any\x20w'+_0x189e9a(0x5fc)+_0x189e9a(0xb14)+'al','usMdU':function(_0x3c4d6c,_0x39bc35){return _0x3c4d6c+_0x39bc35;},'lSjQg':function(_0x280cfe,_0x4b9b67){return _0x280cfe+_0x4b9b67;},'WCfEl':function(_0x5156d2,_0x17a73c){return _0x5156d2+_0x17a73c;},'OcjVg':'ERnQK','UIeGh':function(_0x22deb1,_0x5b2076){return _0x22deb1+_0x5b2076;},'bqbHk':function(_0x400ea2,_0x493d00){return _0x400ea2+_0x493d00;},'rzEkF':function(_0x4ad48b,_0x2dacf3){return _0x4ad48b!==_0x2dacf3;},'FhgIs':'qbzQo','DsVFy':'obfF','itCHc':_0x189e9a(0x4dd)+_0x189e9a(0xb67)+'3|2|1'+_0x189e9a(0x5fe)+_0x189e9a(0x9e6)+'|11|4'+_0x189e9a(0x4c8),'rkSvw':function(_0x384025,_0x436aad){return _0x384025+_0x436aad;},'DhIVz':function(_0x4a36ef,_0x25df78){return _0x4a36ef+_0x25df78;},'gXApk':function(_0x2e4393,_0x30f96c){return _0x2e4393+_0x30f96c;},'rtcTR':function(_0x4bfac3,_0x20e80b){return _0x4bfac3^_0x20e80b;},'qZfCA':function(_0x3ec3c4,_0x4afa7e){return _0x3ec3c4||_0x4afa7e;},'BRnhL':function(_0x1b32bc,_0x557b61){return _0x1b32bc===_0x557b61;},'MCaeN':function(_0x16bf38,_0xfaf175,_0x376dce,_0x518e14){return _0x16bf38(_0xfaf175,_0x376dce,_0x518e14);},'TgvIy':function(_0x2b1e01,_0x44e232){return _0x2b1e01+_0x44e232;},'rFZbg':function(_0x181eb2,_0x1aa114){return _0x181eb2===_0x1aa114;},'KovGd':_0x189e9a(0x41a)+_0x189e9a(0x508)+_0x189e9a(0x7cb)+'|8|7','acvEr':'sakur'+_0x189e9a(0x647),'FwJpr':_0x189e9a(0x973),'yYSuW':_0x189e9a(0x93b)+'r','gfBQz':function(_0xca6bad,_0x2041e7){return _0xca6bad(_0x2041e7);},'pNapL':function(_0x48870a,_0x59faa2,_0x250793,_0x302231){return _0x48870a(_0x59faa2,_0x250793,_0x302231);},'DNnNK':function(_0x430e37,_0x2d8664){return _0x430e37!==_0x2d8664;},'TLmZB':function(_0x3f0e66,_0x3911fe){return _0x3f0e66+_0x3911fe;},'WbwQR':function(_0x196e6e,_0x4c28b1){return _0x196e6e>_0x4c28b1;},'eOHEV':'impla'+_0x189e9a(0x7dc)+'e','gJFsc':function(_0x36dfde,_0x152ea4){return _0x36dfde===_0x152ea4;},'nvuvP':'pOzAK','CDXSl':function(_0x59cc5d,_0x44f811){return _0x59cc5d>_0x44f811;},'nTxYW':function(_0x2adc35,_0x18842c){return _0x2adc35<_0x18842c;},'NkVRD':'QBCrx','GBQmt':function(_0x269d73,_0x5db369){return _0x269d73+_0x5db369;},'qmtcR':function(_0x4c55b9,_0x485423){return _0x4c55b9+_0x485423;},'hOhvT':'zsOqT','LkJkP':function(_0x4ca720,_0x47b07e){return _0x4ca720<_0x47b07e;},'gRyPX':function(_0x3ac256,_0xdfcc25){return _0x3ac256<_0xdfcc25;},'xTTNY':'kEGfO','smKTL':_0x189e9a(0xe55)+'\x20floo'+'r\x20','iPbQt':_0x189e9a(0xe0c),'jMseZ':_0x189e9a(0x9c1),'XftPL':_0x189e9a(0x857),'yKwOB':'float','pHBwV':_0x189e9a(0x7e9),'WWZtd':function(_0x22b5b6,_0x57dd8e){return _0x22b5b6===_0x57dd8e;},'FvVlu':_0x189e9a(0x6ea),'qZHQK':_0x189e9a(0x351),'GFJoQ':function(_0x55b9c7,_0x519de6,_0x1d7aba,_0x37722a){return _0x55b9c7(_0x519de6,_0x1d7aba,_0x37722a);},'mKUzM':function(_0x3b2cd4,_0x4e7ce3){return _0x3b2cd4+_0x4e7ce3;},'tUBQy':function(_0x502572,_0xcec037){return _0x502572(_0xcec037);},'cTiYk':function(_0x16af27,_0xd0e115){return _0x16af27===_0xd0e115;},'DIYDD':function(_0x19ac9f,_0x5c107d){return _0x19ac9f(_0x5c107d);},'IhoMO':function(_0x184482,_0xe1d496){return _0x184482<_0xe1d496;},'YZvyr':'RfITq','YAvTf':function(_0x2c0f39,_0x49f32){return _0x2c0f39>_0x49f32;},'DUwbJ':function(_0x8d28bc,_0x32bc00){return _0x8d28bc===_0x32bc00;},'qSChu':_0x189e9a(0x391)+'f5','ByHDy':function(_0x552314,_0x51bd13){return _0x552314(_0x51bd13);},'etfjw':function(_0xdd95fb,_0x3ac60e){return _0xdd95fb(_0x3ac60e);},'ZZXwU':_0x189e9a(0x452)+'nge','hbBQZ':_0x189e9a(0x875)+_0x189e9a(0xe38)+_0x189e9a(0x442)+'ered\x20'+_0x189e9a(0x63b)+'\x20it\x20a'+_0x189e9a(0x57a)+_0x189e9a(0x844)+_0x189e9a(0x466)+'the\x20l'+'ife\x20o'+_0x189e9a(0x2bc)+'\x20page'+'.\x20','SefGz':function(_0x5944be,_0x4b7ce2){return _0x5944be+_0x4b7ce2;},'ijTYY':_0x189e9a(0x525)+_0x189e9a(0xc9f)+'ved\x20','ANrKa':'void','giCAl':'Mouse'+_0x189e9a(0x83d),'wvRhW':_0x189e9a(0xe1a),'IkkcU':function(_0x42e5a0,_0x5c951c){return _0x42e5a0===_0x5c951c;},'PFsjv':function(_0xb2e01a,_0x56e544){return _0xb2e01a===_0x56e544;},'supEf':'PRVXW','AHCyr':function(_0x4cf57d,_0x4af464){return _0x4cf57d<=_0x4af464;},'uFXRe':function(_0x218008,_0x1a4004){return _0x218008>=_0x1a4004;},'QiGlb':function(_0x508be4,_0x3a4e31){return _0x508be4<=_0x3a4e31;},'FRWuM':'CWlXs','wuwBY':'OTRCm','EsIgE':_0x189e9a(0xc37),'JkkhX':'b,a','haZun':function(_0x49029d,_0x152c51){return _0x49029d===_0x152c51;},'wCMWA':_0x189e9a(0xa35),'GMRGb':function(_0x3e4eb2,_0x4787e7){return _0x3e4eb2+_0x4787e7;},'ytlsk':'both\x20'+_0x189e9a(0x86b)+'ed','ghBGj':function(_0x11e068,_0x26e4c1){return _0x11e068!==_0x26e4c1;},'AnmsX':function(_0xc0e4b9,_0x5e8c70){return _0xc0e4b9<_0x5e8c70;},'EhmlZ':function(_0x10daee,_0x589950){return _0x10daee(_0x589950);},'DZpPa':function(_0x4a1e53,_0xe5c7b6){return _0x4a1e53===_0xe5c7b6;},'ipOOF':_0x189e9a(0x561),'etuZm':function(_0x2fce1d){return _0x2fce1d();},'ItpKY':_0x189e9a(0xa6c)+'ed\x20/\x20'+'regis'+_0x189e9a(0x822),'jRNEL':function(_0x308b1b,_0x4f844e){return _0x308b1b+_0x4f844e;},'KAMXp':_0x189e9a(0xa20)+'\x20','ggEtH':function(_0x58a3e3,_0x3888c5){return _0x58a3e3===_0x3888c5;},'XAjXw':'Photo'+_0x189e9a(0x2ca)+_0x189e9a(0xa5d)+'nc','rAVcN':function(_0x35497a,_0x29d563){return _0x35497a(_0x29d563);},'rzKTn':_0x189e9a(0x1d2)+_0x189e9a(0xca7)+'ut\x20yo'+'u','UCZRg':function(_0x221376,_0x1252ff){return _0x221376+_0x1252ff;},'gqxCx':function(_0x5bcb37,_0x5d2fd9){return _0x5bcb37===_0x5d2fd9;},'KNoQy':_0x189e9a(0xccc)+'h','ibPQk':_0x189e9a(0x8da),'lDwbr':_0x189e9a(0xb39),'cguEC':function(_0x427058,_0x30471c){return _0x427058===_0x30471c;},'kgqtG':_0x189e9a(0xbf1),'acXHo':function(_0x468ed8,_0x181343){return _0x468ed8*_0x181343;},'xKdUq':function(_0x3cd70e,_0x2c3496){return _0x3cd70e===_0x2c3496;},'EZVAD':function(_0x4de0b6){return _0x4de0b6();},'EOntq':_0x189e9a(0xc99),'agSCL':function(_0x5ea125,_0x320009){return _0x5ea125===_0x320009;},'MZcfO':function(_0x5b5e49,_0x2f7d2e){return _0x5b5e49+_0x2f7d2e;},'CWYOs':function(_0x3c2cfb,_0x3a0df0){return _0x3c2cfb===_0x3a0df0;},'QjGsV':'dJIqh','MKoWe':function(_0x480f9f,_0x50f5bd){return _0x480f9f+_0x50f5bd;},'MKbKW':function(_0x1d3da5,_0x1c116c,_0xed6ca2){return _0x1d3da5(_0x1c116c,_0xed6ca2);},'YWxAv':function(_0x3ab6ef,_0x3df652){return _0x3ab6ef===_0x3df652;},'LeIhb':function(_0x492ec6,_0xa54af8,_0x115b77,_0x188546){return _0x492ec6(_0xa54af8,_0x115b77,_0x188546);},'FhZAz':function(_0x171e1e,_0x4e8eef,_0x640d97){return _0x171e1e(_0x4e8eef,_0x640d97);},'EtksD':function(_0x3fabaf,_0x2ec69f){return _0x3fabaf<_0x2ec69f;},'MRVbE':_0x189e9a(0x76c)+'ntrol'+_0x189e9a(0x88e),'WRGOp':'HQJur','KITBk':function(_0x12969e,_0x195e19){return _0x12969e+_0x195e19;},'Meubh':function(_0x2e134b,_0x2fa161){return _0x2e134b+_0x2fa161;},'mNZNB':function(_0x54e856,_0x46abef){return _0x54e856===_0x46abef;},'jBaLr':function(_0x6cfe89,_0x438673){return _0x6cfe89+_0x438673;},'OAtDx':_0x189e9a(0x297)+'otonN'+_0x189e9a(0x63a)+'kSync'+_0x189e9a(0x3ea)+_0x189e9a(0x566)+'otrol'+_0x189e9a(0x459)+_0x189e9a(0x476)+_0x189e9a(0xce3)+_0x189e9a(0xd6e)+'ger.\x20'+'That\x20'+_0x189e9a(0x728)+_0x189e9a(0xcac),'amvpI':_0x189e9a(0x204)+_0x189e9a(0x6e0)+'looks'+_0x189e9a(0x6c8)+_0x189e9a(0x6b7)+_0x189e9a(0x764)+'\x20reco'+_0x189e9a(0x838)+_0x189e9a(0xc67)+'\x20live'+'\x20roun'+'d,\x20no'+'t\x20the'+'\x20menu'+'.','cREBq':'imifS','NRiyt':'MJNNr','rKnIu':function(_0x7fca01,_0x2980b9){return _0x7fca01+_0x2980b9;},'mGxHH':function(_0x407f2e,_0x3d513f){return _0x407f2e+_0x3d513f;},'Nosef':function(_0x369df3,_0x1e4dbc){return _0x369df3===_0x1e4dbc;},'kCBvR':function(_0x48caee,_0xa7f5ad,_0x40eb65,_0x14c8c6){return _0x48caee(_0xa7f5ad,_0x40eb65,_0x14c8c6);},'AilVG':'11|10'+_0x189e9a(0x68b)+'4|12|'+_0x189e9a(0xdd7)+'|0|5|'+_0x189e9a(0x3d0),'UCVcP':function(_0x22bf0c,_0x584fb1){return _0x22bf0c*_0x584fb1;},'aolDV':function(_0x26dfbd,_0x1d006f){return _0x26dfbd*_0x1d006f;},'sicms':function(_0x2e4444,_0x265f6b){return _0x2e4444*_0x265f6b;},'QwKse':function(_0x2b87ce,_0x222d28){return _0x2b87ce*_0x222d28;},'QWRKU':function(_0x47bb87,_0x320ee1){return _0x47bb87*_0x320ee1;},'qgUJh':function(_0x2b6ab2,_0x2dc1b3){return _0x2b6ab2+_0x2dc1b3;},'nlMfl':function(_0x3bbe9f,_0x5b21ba){return _0x3bbe9f*_0x5b21ba;},'ZCOJI':function(_0x31d399,_0x31ba8a){return _0x31d399/_0x31ba8a;},'PCaDe':function(_0x3cc8ab,_0x77756c){return _0x3cc8ab<_0x77756c;},'xVwci':function(_0x2c6a35,_0x247e77){return _0x2c6a35>_0x247e77;},'rUTVR':function(_0x47fa5c,_0x1dd824){return _0x47fa5c===_0x1dd824;},'Abzfr':'FVEVX','WlkcB':function(_0x579d36,_0x1a5614){return _0x579d36+_0x1a5614;},'lmXHt':function(_0xcc7bbf,_0x2cffa2){return _0xcc7bbf===_0x2cffa2;},'ejrvg':function(_0xf19c9b,_0x4eac47,_0x4b423f,_0x1d2b3e){return _0xf19c9b(_0x4eac47,_0x4b423f,_0x1d2b3e);},'OrnAs':function(_0x3ebd2b,_0x15ad4d){return _0x3ebd2b!==_0x15ad4d;},'LkYUZ':_0x189e9a(0x296),'qNUHW':'obf','DcDYi':function(_0x3160e4,_0x4a3ff7){return _0x3160e4+_0x4a3ff7;},'dVAuZ':function(_0x403ea3,_0x47ad6e){return _0x403ea3+_0x47ad6e;},'VltJd':function(_0x34e3e4,_0x3fbfa8){return _0x34e3e4+_0x3fbfa8;},'pLupN':function(_0x351f7a,_0x57a678){return _0x351f7a+_0x57a678;},'rjwDF':function(_0x4f441b,_0x5f198a){return _0x4f441b!==_0x5f198a;},'yUTPD':_0x189e9a(0x227),'JotSS':function(_0xe0ebbc,_0x39ed6d){return _0xe0ebbc(_0x39ed6d);},'TCCBq':_0x189e9a(0xc9d),'Vvuwm':function(_0x4a7c9f,_0x5b3ed7){return _0x4a7c9f!==_0x5b3ed7;},'CwfnL':function(_0x2a8c63,_0x59a144){return _0x2a8c63===_0x59a144;},'oHRjE':function(_0x3e9d58,_0x4dc046){return _0x3e9d58===_0x4dc046;},'ATxbP':function(_0x71a9fe,_0x2aa3d8){return _0x71a9fe!==_0x2aa3d8;},'iNnoQ':_0x189e9a(0x6da),'UXmeV':function(_0x50c05f,_0xbe56a8){return _0x50c05f&&_0xbe56a8;},'aVEIv':'none','lQNJp':function(_0x488b7b,_0x1f3c1c){return _0x488b7b===_0x1f3c1c;},'qiPKq':'VxyyT','EegeV':'game','cpjDv':function(_0x3cd1ef,_0xe6455f){return _0x3cd1ef<_0xe6455f;},'kTVhB':function(_0x5a933b,_0x24089c){return _0x5a933b===_0x24089c;},'mZiYB':_0x189e9a(0xb79)+_0x189e9a(0xc62),'nVvPc':function(_0x57b749){return _0x57b749();},'UtZRp':_0x189e9a(0x45d),'xuhgP':'Mouse'+'Look@'+'ptr','jBySt':function(_0x4270a6,_0x4748fb){return _0x4270a6+_0x4748fb;},'giVDM':'Mouse'+_0x189e9a(0x884)+'camer'+'a','SmtFi':'ruEYI','lYnPr':function(_0x1bea1d,_0x48db19){return _0x1bea1d===_0x48db19;},'oPChT':_0x189e9a(0x83f)+'t','RfMDV':function(_0x10a4c5){return _0x10a4c5();},'CIcVi':function(_0x6e538a,_0xe9c352){return _0x6e538a+_0xe9c352;},'oBghh':function(_0x4ec138,_0x28dd0d){return _0x4ec138(_0x28dd0d);},'TUQzp':function(_0x5eb908,_0xf2ce48){return _0x5eb908===_0xf2ce48;},'gUlvh':function(_0x16eaa2,_0x3b1865,_0x3ed004){return _0x16eaa2(_0x3b1865,_0x3ed004);},'GnEEv':function(_0x11346f,_0x24c56b,_0x4fb473){return _0x11346f(_0x24c56b,_0x4fb473);},'NnJrs':function(_0x57c614,_0x2f799a){return _0x57c614+_0x2f799a;},'itekN':'[data'+_0x189e9a(0xc31),'CwTcf':function(_0x135513,_0x4147e7){return _0x135513(_0x4147e7);},'aWnJD':function(_0x1a38f6,_0xc63ed3,_0x5afcb5){return _0x1a38f6(_0xc63ed3,_0x5afcb5);},'tgVFW':_0x189e9a(0xe5f),'FUAXO':_0x189e9a(0x5ca)+_0x189e9a(0x500)+_0x189e9a(0x2ef)+'ss','knbai':_0x189e9a(0xb31)+_0x189e9a(0xa55)+'-hud{'+_0x189e9a(0x3b0)+_0x189e9a(0xa32)+'l}','HXNoz':function(_0x487618,_0xa13f74){return _0x487618+_0xa13f74;},'uWZsg':function(_0x3a14ab,_0x2e43ee){return _0x3a14ab+_0x2e43ee;},'RQkHW':_0x189e9a(0xd57)+'round'+_0x189e9a(0x32b)+'(21,1'+'2,29,'+'.92);'+'borde'+'r:1px'+_0x189e9a(0x66a)+_0x189e9a(0x940)+_0x189e9a(0x91e)+_0x189e9a(0xa98)+_0x189e9a(0x829)+_0x189e9a(0xde7)+_0x189e9a(0x1f6)+_0x189e9a(0x66e)+_0x189e9a(0xd7b)+_0x189e9a(0xa95),'JbmJO':'box-s'+'hadow'+':0\x2010'+_0x189e9a(0x7aa)+'px\x20-1'+_0x189e9a(0xebb)+_0x189e9a(0xa8f)+_0x189e9a(0x737)+_0x189e9a(0x9d4)+_0x189e9a(0x319)+_0x189e9a(0xd90)+_0x189e9a(0x8a8)+'ser-s'+_0x189e9a(0x9d4)+_0x189e9a(0x319)+';','jGbCJ':function(_0x352b9f,_0x49f727){return _0x352b9f+_0x49f727;},'AaPdy':function(_0x676874,_0xb5d2c9){return _0x676874+_0xb5d2c9;},'yEJJV':function(_0x125ff2,_0x213b2f){return _0x125ff2+_0x213b2f;},'HMrvm':'color'+_0x189e9a(0x9d9)+'ef5;b'+'order'+_0x189e9a(0x66e)+'us:6p'+_0x189e9a(0x670)+'ding:'+_0x189e9a(0x93e)+'px;cu'+'rsor:'+'point'+_0x189e9a(0x389)+_0x189e9a(0x8a1)+'herit'+_0x189e9a(0xb42)+'P\x20on<'+_0x189e9a(0x93c)+'on>','kbpEX':'color'+':#f7e'+_0x189e9a(0x8d4)+_0x189e9a(0x1f6)+'-radi'+'us:6p'+_0x189e9a(0x670)+'ding:'+_0x189e9a(0x93e)+'px;cu'+'rsor:'+_0x189e9a(0x7bd)+'er;fo'+'nt:in'+'herit'+';\x22>Sn'+_0x189e9a(0x209)+'utton'+'>','XTWNw':_0x189e9a(0x691)+'data-'+'a=\x22st'+_0x189e9a(0xc65)+_0x189e9a(0xdb7)+_0x189e9a(0x995)+_0x189e9a(0xe4f)+_0x189e9a(0xd66)+_0x189e9a(0xbd4)+'dth:2'+_0x189e9a(0xa65)+_0x189e9a(0x6ac)+_0x189e9a(0x239),'VbLVg':_0x189e9a(0x2b0),'SMPeX':function(_0x4eabfd,_0x284d7a){return _0x4eabfd(_0x284d7a);},'pYqRz':_0x189e9a(0x3a3),'jtISY':'snap','qTeSm':_0x189e9a(0x20d),'aQbmV':'ESP\x20b'+'oth','eNxUa':'sk-ca'+'rd','XVNEF':function(_0x35ec87,_0x12a122,_0x2e68d9){return _0x35ec87(_0x12a122,_0x2e68d9);},'tCfVq':_0x189e9a(0x7b9)+'ong>','hDyso':function(_0x4e8799,_0x2a04c7){return _0x4e8799===_0x2a04c7;},'lFnGg':function(_0x4094fb){return _0x4094fb();},'dnObQ':_0x189e9a(0xbf7)+_0x189e9a(0xc46)+_0x189e9a(0x7a7)+'8|6|4'+'|7','bPsdi':function(_0x27c562){return _0x27c562();},'FcvlI':function(_0x5a3807,_0xd1f780){return _0x5a3807+_0xd1f780;},'LRkDF':function(_0x4f737c,_0xf3037b){return _0x4f737c+_0xf3037b;},'YXeeZ':_0x189e9a(0x7b5)+'\x20-','NXPWR':_0x189e9a(0x6be)+'99','vOvtI':function(_0x37b375,_0x3e7fc2){return _0x37b375+_0x3e7fc2;},'WfHFl':function(_0x26e3fa,_0xbbe1c5){return _0x26e3fa+_0xbbe1c5;},'aSFAT':'\x20\x20obj'+'s\x20','lxPQF':'\x20\x20wri'+'tes\x20','yDeZX':_0x189e9a(0x6ca)+'m','OYcjt':'0|2|6'+'|5|4|'+_0x189e9a(0xa76),'BgVsW':function(_0x19166d,_0x45f2b2){return _0x19166d===_0x45f2b2;},'auhAZ':function(_0x458f2d,_0x4d850b){return _0x458f2d(_0x4d850b);},'aFCvo':function(_0x5660cb,_0x1293ff){return _0x5660cb===_0x1293ff;},'nKPXd':function(_0x5b1bb4,_0x3fe091,_0xee3943){return _0x5b1bb4(_0x3fe091,_0xee3943);},'BxwZk':_0x189e9a(0x6b4)+'n','UhgAF':_0x189e9a(0x557),'bqnzX':function(_0x425293,_0x4501dc){return _0x425293+_0x4501dc;},'ggjyu':function(_0x440765,_0x2569db){return _0x440765<_0x2569db;},'yxzdA':function(_0x48c497,_0x33c588){return _0x48c497+_0x33c588;},'GzUit':'u32','OskpM':function(_0x3b4b2d,_0x510bda){return _0x3b4b2d>>>_0x510bda;},'cLAeJ':_0x189e9a(0x78a),'NpomO':'oFIBH','iodTW':'LcsXI','WeEba':function(_0x1c2b3a,_0x3b833c){return _0x1c2b3a===_0x3b833c;},'diliu':function(_0x4b341e,_0x4096b5){return _0x4b341e<_0x4096b5;},'kBoWC':function(_0x433609,_0x57400c){return _0x433609+_0x57400c;},'AMWjX':function(_0x2c8392,_0x3dea10){return _0x2c8392/_0x3dea10;},'bkdiB':_0x189e9a(0xad7),'rOhIT':'hIcFM','FQpua':function(_0xfae4ac,_0x98e08c){return _0xfae4ac+_0x98e08c;},'lROBp':function(_0x376dbf,_0x41a50a){return _0x376dbf+_0x41a50a;},'mReFq':function(_0x753e58,_0x477e1f){return _0x753e58*_0x477e1f;},'YHLHZ':function(_0x50c963,_0x333b43){return _0x50c963+_0x333b43;},'zPrim':function(_0x484125,_0x201432){return _0x484125*_0x201432;},'tndSK':function(_0x4cb26f,_0x454a2e){return _0x4cb26f>_0x454a2e;},'LlNFy':function(_0x2e4f1a,_0x5ea4fa){return _0x2e4f1a+_0x5ea4fa;},'PVcEj':function(_0x3ec758,_0xa9454b){return _0x3ec758+_0xa9454b;},'nQELu':function(_0x1fa255,_0x1ad3ff){return _0x1fa255+_0x1ad3ff;},'OUVEs':function(_0x54ae9d,_0x8beba7){return _0x54ae9d!==_0x8beba7;},'kBqku':'#4f8f'+'6a','nAcma':'#ff6e'+'74','KLZNr':_0x189e9a(0xe61),'MQBQo':'mallo'+_0x189e9a(0x8c6)+_0x189e9a(0x606)+'\x20','cBuFZ':function(_0x17a8bb,_0x302e87){return _0x17a8bb+_0x302e87;},'teHYr':'1|2|4'+'|0|3','ghGZB':function(_0x1c39ed,_0xaa19f3){return _0x1c39ed*_0xaa19f3;},'vycIg':function(_0xe11ad5,_0x4d3b2b){return _0xe11ad5*_0x4d3b2b;},'ZhooA':function(_0x4bfc30,_0x1cdd0e){return _0x4bfc30*_0x1cdd0e;},'fwnhV':function(_0x20ba2d,_0x1efd1b){return _0x20ba2d*_0x1efd1b;},'NurZf':function(_0x4b48ce,_0x20adf7){return _0x4b48ce-_0x20adf7;},'ciXzl':function(_0x290ea2,_0x12f8cf){return _0x290ea2*_0x12f8cf;},'AsnwF':function(_0x3e2080,_0x262d82){return _0x3e2080+_0x262d82;},'aCuOn':function(_0x34ab89,_0xf7f097){return _0x34ab89-_0xf7f097;},'hHcog':function(_0x4fda63,_0x557730){return _0x4fda63*_0x557730;},'Mmpuw':function(_0x3bb401,_0x2d4dea){return _0x3bb401+_0x2d4dea;},'jFxAx':function(_0x4a73fa,_0x3061c3){return _0x4a73fa*_0x3061c3;},'pGNxu':function(_0x5423af,_0x108698){return _0x5423af-_0x108698;},'gOeoI':'VHRKQ','dBClb':function(_0x583c8c,_0x402646){return _0x583c8c!==_0x402646;},'pPxXU':function(_0x5dcd69,_0x403b1b){return _0x5dcd69!==_0x403b1b;},'FgyZI':_0x189e9a(0x971)+'Look+'+_0x189e9a(0x41e)+'is\x20no'+_0x189e9a(0xde1)+'objec'+_0x189e9a(0x555)+_0x189e9a(0x97a)+'e','SzZFW':function(_0x24dad9,_0x45a3c7){return _0x24dad9!==_0x45a3c7;},'EyiSb':function(_0x30b102,_0x17b8b5){return _0x30b102(_0x17b8b5);},'axbUG':'no\x20sc'+'ratch'+_0x189e9a(0xc47)+'er','lAers':'Camer'+'a','oEEsA':function(_0x52b08d,_0x58b1d9){return _0x52b08d<_0x58b1d9;},'OOYsy':function(_0x31e69e,_0xadbc61){return _0x31e69e-_0xadbc61;},'kLXpb':_0x189e9a(0x3c0)+'form','wBrtH':function(_0x2a25ba,_0x3dc87c,_0x26e4cf){return _0x2a25ba(_0x3dc87c,_0x26e4cf);},'nSQGD':function(_0x59d9ed,_0xc8e746,_0xc3e09d){return _0x59d9ed(_0xc8e746,_0xc3e09d);},'wjArZ':function(_0x273167,_0x58d68f){return _0x273167(_0x58d68f);},'StukU':_0x189e9a(0x8d0),'WzLHr':function(_0x554b01,_0x986a98){return _0x554b01/_0x986a98;},'EQHXn':_0x189e9a(0x373)+'\x20no\x20f'+'ov','ktOJX':function(_0x406a50,_0x3255f5){return _0x406a50*_0x3255f5;},'osPai':function(_0x329982,_0x70c247){return _0x329982*_0x70c247;},'oYCLj':function(_0xc826de,_0x27085d){return _0xc826de>_0x27085d;},'bBUgY':_0x189e9a(0x2f4),'XPJuS':function(_0x21a145,_0x23df94){return _0x21a145===_0x23df94;},'MbHZz':function(_0x34ddae,_0x38f96f){return _0x34ddae+_0x38f96f;},'wOsKl':function(_0x913edb,_0x2686e9){return _0x913edb<_0x2686e9;},'JfpPm':function(_0x5a1752,_0x30597c){return _0x5a1752-_0x30597c;},'SpOjM':function(_0x9cc978,_0x40cdf2){return _0x9cc978+_0x40cdf2;},'GafVT':function(_0x19d473,_0x4d92c7){return _0x19d473+_0x4d92c7;},'kukOG':function(_0x9a6d1a,_0x1a3bd3){return _0x9a6d1a-_0x1a3bd3;},'boRIs':_0x189e9a(0x337)+_0x189e9a(0xe3d)+_0x189e9a(0x8c1)+'t','aKaow':function(_0x3cd103,_0x45f65c){return _0x3cd103+_0x45f65c;},'BSnDU':function(_0x377baf,_0x31c712){return _0x377baf>=_0x31c712;},'eBbzQ':function(_0x359d78,_0x234dcf){return _0x359d78!==_0x234dcf;},'GBWAE':'sette'+_0x189e9a(0xabc)+_0x189e9a(0x6f7),'QyqoW':_0x189e9a(0xa19),'nQwwB':'field'+'\x200x28'+'\x20(gue'+_0x189e9a(0x395),'UUYOZ':function(_0x1df7e6,_0x1f8a14){return _0x1df7e6(_0x1f8a14);},'Gkwjp':_0x189e9a(0x285)+_0x189e9a(0x924)+_0x189e9a(0xcd5)+_0x189e9a(0x3a6)+'le','CDyLd':function(_0x179847,_0x4963dd){return _0x179847<_0x4963dd;},'FsGSX':_0x189e9a(0xdf1)+_0x189e9a(0x4ef)+'nge','pjSds':_0x189e9a(0x84b)+'game\x20'+'bindi'+'ng','kjEAH':function(_0x5d7c0e,_0x595b2d){return _0x5d7c0e*_0x595b2d;},'DZyZS':function(_0xb9809c,_0x3238e5){return _0xb9809c-_0x3238e5;},'XphLg':function(_0x4710b1,_0x1b1145){return _0x4710b1*_0x1b1145;},'WXFqw':function(_0x478e65,_0x2f8736){return _0x478e65-_0x2f8736;},'CGmpw':function(_0x434655,_0x11a505){return _0x434655+_0x11a505;},'KGBUP':function(_0x4f6cc5,_0x2eb757){return _0x4f6cc5+_0x2eb757;},'hMkqI':function(_0x4e7c18,_0x35da4e){return _0x4e7c18+_0x35da4e;},'xYdFY':function(_0x4f7ad9,_0x3f7318){return _0x4f7ad9+_0x3f7318;},'aYBOT':function(_0x48c5e0,_0x33757d){return _0x48c5e0/_0x33757d;},'EvXyv':function(_0x3f83ee,_0x310a32){return _0x3f83ee/_0x310a32;},'gXfNM':'1|3|0'+'|2|4','skEIG':function(_0xce54b1,_0x1c2aa8){return _0xce54b1*_0x1c2aa8;},'jSLHt':function(_0x15022a,_0x48468e){return _0x15022a-_0x48468e;},'sLlFH':function(_0x5b6240,_0x367e4e){return _0x5b6240-_0x367e4e;},'jCbDK':function(_0x11589d,_0x4f123a){return _0x11589d/_0x4f123a;},'uGUjW':function(_0x5a2bda,_0x926966){return _0x5a2bda*_0x926966;},'DvENp':_0x189e9a(0x1c5)+_0x189e9a(0xea1)+'2|5|4'+_0x189e9a(0x23e),'DeDKC':'sk-mb'+'ody','RqNnF':_0x189e9a(0x754)+'rd-ti'+_0x189e9a(0xded),'RjozZ':_0x189e9a(0x60a)+_0x189e9a(0x25d),'kdAPF':'\x20on','loHFx':function(_0x5044be,_0x10663c){return _0x5044be(_0x10663c);},'OvgpZ':function(_0x2c859c){return _0x2c859c();},'gjKVJ':_0x189e9a(0x2fd),'cAqTW':'DzAEP','aGlcM':'ADSOC','xASCr':_0x189e9a(0x443)+_0x189e9a(0x526),'jFSFn':function(_0xd5bdcf,_0x4da03e){return _0xd5bdcf/_0x4da03e;},'cKFYq':function(_0x51a3f0,_0x59e377,_0x250a43){return _0x51a3f0(_0x59e377,_0x250a43);},'BAJJp':_0x189e9a(0xca5),'KyWHA':'sk-sl'+_0x189e9a(0x823),'kcxwQ':function(_0x4a39c9,_0x10392e){return _0x4a39c9(_0x10392e);},'yovPB':function(_0x3c951a,_0x156f60){return _0x3c951a(_0x156f60);},'SKzOP':function(_0x501bd6){return _0x501bd6();},'zwhCs':_0x189e9a(0x6e4)+'l','UMjoq':function(_0x54d045,_0x38b424){return _0x54d045+_0x38b424;},'rbmzo':'</spa'+'n>','UxyGG':function(_0x13c9e1,_0x2a62f3,_0x53ee88,_0x1477c1){return _0x13c9e1(_0x2a62f3,_0x53ee88,_0x1477c1);},'ZktMO':function(_0x43fe2c,_0x2482bf,_0x31c89e){return _0x43fe2c(_0x2482bf,_0x31c89e);},'GeaXx':_0x189e9a(0x79c),'iJKeg':'hKZJN','SqiZY':_0x189e9a(0xc6c),'Mcwks':'JlyuY','MGnim':function(_0x598a86,_0xc9dafa){return _0x598a86===_0xc9dafa;},'CaIiR':function(_0x588b59,_0x12cc08){return _0x588b59/_0x12cc08;},'EvtxV':function(_0x422c8a,_0x5196ca){return _0x422c8a+_0x5196ca;},'QhIAI':function(_0xf46b9e,_0x4aa15d){return _0xf46b9e+_0x4aa15d;},'xqIty':_0x189e9a(0x75a),'OYmwb':_0x189e9a(0x6c9)+'ds\x20·\x20','zrIkc':_0x189e9a(0x1e7)+'es','sNbvO':function(_0x1504fa,_0x5a681c){return _0x1504fa<_0x5a681c;},'hOdAA':'snaps'+'hot','yWeiC':function(_0x597d1e,_0x312840){return _0x597d1e!==_0x312840;},'vPfmn':_0x189e9a(0x957),'WYuQk':function(_0x255cad,_0x39c975){return _0x255cad===_0x39c975;},'zEnXf':_0x189e9a(0xd1b)+'oard\x20'+_0x189e9a(0xcb0)+_0x189e9a(0x514)+_0x189e9a(0x4ad)+_0x189e9a(0x1f2)+_0x189e9a(0x82b)+_0x189e9a(0x3ed)+'ad','TeTFY':'sk-md'+'esc','aBlck':function(_0x4276fe,_0x3bbfd5){return _0x4276fe+_0x3bbfd5;},'sHnuv':function(_0x6d8aed,_0x1bac98){return _0x6d8aed+_0x1bac98;},'zkVTq':'Enabl'+'ed','RpHPJ':_0x189e9a(0x700)+'F6\x20al'+_0x189e9a(0xb16)+_0x189e9a(0xd77)+'is','cDTFn':'bliSc','UggAn':_0x189e9a(0x60d)+'te','AYkCD':_0x189e9a(0x53f)+'napsh'+_0x189e9a(0xb70)+_0x189e9a(0x99b)+'speed'+'\x20on/o'+_0x189e9a(0x50a)+_0x189e9a(0x447)+_0x189e9a(0x2d2)+_0x189e9a(0xc4e)+'/-0.5'+_0x189e9a(0x918)+'\x20\x20fie'+_0x189e9a(0xd36)+_0x189e9a(0x5ae)+_0x189e9a(0x218)+'rt\x20\x20t'+_0x189e9a(0xbc4)+'enu','awZGB':'visua'+'ls','ZShuu':'Radar','ICUYp':function(_0x56261d,_0x2c7989,_0x4770cd){return _0x56261d(_0x2c7989,_0x4770cd);},'zMNjR':function(_0x58af74,_0x4d7db2,_0x14ff4c,_0x33c688,_0x505407,_0x1ec9a9){return _0x58af74(_0x4d7db2,_0x14ff4c,_0x33c688,_0x505407,_0x1ec9a9);},'LLcqI':'Range','uyqAL':function(_0x145f82,_0x5db2fc,_0x3cfbb9){return _0x145f82(_0x5db2fc,_0x3cfbb9);},'REdad':function(_0x5c5320,_0x383543,_0x522e08,_0x1455dc){return _0x5c5320(_0x383543,_0x522e08,_0x1455dc);},'uuMCO':_0x189e9a(0xb34)+_0x189e9a(0xa4e)+'g.\x20','bgzPX':_0x189e9a(0x878)+'\x20of\x20v'+_0x189e9a(0xbb9)+'s\x20','GscGb':'°,\x20ou'+_0x189e9a(0xb1c)+_0x189e9a(0x211)+_0x189e9a(0xaad)+'band.'+_0x189e9a(0x381)+'t\x20it\x20'+'below'+'.','NRPWW':_0x189e9a(0xd86)+_0x189e9a(0x1db)+_0x189e9a(0x284)+'xes.\x20'+'The\x20f'+_0x189e9a(0x987)+'of\x20vi'+_0x189e9a(0xd93)+'nnot\x20'+_0x189e9a(0xe4e)+'ad\x20fr'+_0x189e9a(0x64a)+'is\x20bu'+_0x189e9a(0x93f)+'so\x20it'+_0x189e9a(0x43e)+'itted'+'\x20by\x20e'+_0x189e9a(0x948),'SmOqy':_0x189e9a(0xb06)+_0x189e9a(0x6ce)+_0x189e9a(0xb16)+_0x189e9a(0xd77)+'is','lmqMl':'sk-bt'+'n','BIncw':_0x189e9a(0x5e4),'jLboL':function(_0xfc8ad1,_0x4b69f5){return _0xfc8ad1+_0x4b69f5;},'VcHFe':'\x20\x20cam'+_0x189e9a(0xdb9),'DNewm':_0x189e9a(0xda9)+'r\x20pai'+'r','JUckK':'from\x20'+_0x189e9a(0x7ba)+'okAng'+'les','XgDWV':function(_0x12e927,_0x22b6c8){return _0x12e927+_0x22b6c8;},'iDSXA':function(_0x37ffc9,_0x33ab25){return _0x37ffc9+_0x33ab25;},'qNYEW':_0x189e9a(0xd60)+'h\x20','Aswbv':function(_0x1b3e8f,_0x52c44d){return _0x1b3e8f+_0x52c44d;},'OIvDH':function(_0x4b4d42,_0x4830db){return _0x4b4d42+_0x4830db;},'nlVkZ':_0x189e9a(0x332)+'\x20hook'+_0x189e9a(0xdee)+_0x189e9a(0x94c)+_0x189e9a(0x58d)+_0x189e9a(0x89f)+'red\x20(','DnWNz':'\x20erro'+_0x189e9a(0x57d),'fWFrs':'VERSI'+'ON','yIcBu':_0x189e9a(0x569),'GGYKN':_0x189e9a(0xa13),'oGRvs':_0x189e9a(0x4e8)+'insta'+_0x189e9a(0xb90)+_0x189e9a(0x477),'dSoYK':_0x189e9a(0x9c8)+'rs','gBKkZ':_0x189e9a(0x82c)+'es','VAUHo':'off\x20t'+_0x189e9a(0xe63)+'ve\x20ma'+_0x189e9a(0xeb4),'XnihA':function(_0x5322cc,_0x426b81){return _0x5322cc+_0x426b81;},'mVBTq':function(_0x5cdfa7,_0x53a863){return _0x5cdfa7+_0x53a863;},'YVYWH':function(_0xabce21,_0x3fa7d0){return _0xabce21<_0x3fa7d0;},'ZjUAZ':'sk-va'+'l','JyOiG':_0x189e9a(0x603),'weMEQ':_0x189e9a(0xb6f)+'on','FdWUe':function(_0xda14f4,_0x2ef755){return _0xda14f4+_0x2ef755;},'aVquv':_0x189e9a(0x76c)+_0x189e9a(0x9d1)+_0x189e9a(0xd19),'miQcC':'Eye','EWYzM':'0x10','zeYZs':function(_0x2741b0,_0x2fae6a,_0x1d98fe,_0x3893fd){return _0x2741b0(_0x2fae6a,_0x1d98fe,_0x3893fd);},'IhBMu':function(_0x304d0b,_0x2f7a5d,_0x2f08f2,_0x58c274){return _0x304d0b(_0x2f7a5d,_0x2f08f2,_0x58c274);},'IGdWP':_0x189e9a(0xccc)+'hScri'+'pt+0x'+'C0','ycMru':function(_0x4966a9,_0x150e81){return _0x4966a9(_0x150e81);},'OsHqv':function(_0x583d39,_0x4fefaf){return _0x583d39===_0x4fefaf;},'bPYiV':function(_0x5bc20b,_0x3f8d49,_0x563204){return _0x5bc20b(_0x3f8d49,_0x563204);},'cyOMU':_0x189e9a(0x462)+'e','lxbEW':'Repor'+'t','KpZbr':function(_0x201971,_0x34baf8,_0x3f6305,_0x3311f2){return _0x201971(_0x34baf8,_0x3f6305,_0x3311f2);},'SARGq':_0x189e9a(0xcae)+'JSON\x20'+'to\x20cl'+'ipboa'+'rd','UJpYV':_0x189e9a(0x938)+_0x189e9a(0x211)+_0x189e9a(0x4a0)+_0x189e9a(0xd5d)+_0x189e9a(0x9a5)+_0x189e9a(0x363)+'ethin'+'g\x20loo'+_0x189e9a(0x9aa)+_0x189e9a(0x84f),'fsgXO':'SEtTv','MgGvC':_0x189e9a(0x35d),'ZKEOe':_0x189e9a(0x91b),'fTkuq':function(_0x22f790,_0x2b8bff){return _0x22f790===_0x2b8bff;},'PLnVA':_0x189e9a(0xae6),'WSfIL':function(_0x45854,_0x3e4134){return _0x45854+_0x3e4134;},'IgZrr':_0x189e9a(0x912)+'ing','OcTeM':function(_0x24b755,_0x188eb1){return _0x24b755(_0x188eb1);},'gxloT':function(_0x5ccc33,_0x46fd06){return _0x5ccc33===_0x46fd06;},'yPAnw':function(_0x157755,_0xdb7d3d){return _0x157755-_0xdb7d3d;},'GAefP':function(_0xa1ed16,_0x144c01){return _0xa1ed16-_0x144c01;},'xBrzJ':function(_0xa25e65,_0x42f821){return _0xa25e65-_0x42f821;},'ATOWx':_0x189e9a(0xc76),'hokGC':function(_0x2aa336){return _0x2aa336();},'uGbny':'Speed'+'\x20off','cKaeP':'lVWGZ','dRfGn':'mouse'+'up','njJQv':'touch'+'start','YTkXf':'touch'+_0x189e9a(0xe5d),'cKErL':'Sakur'+_0x189e9a(0x63f)+'llWar'+'z\x20-\x20w'+'aitin'+_0x189e9a(0xb61)+_0x189e9a(0x211)+'game\x20'+_0x189e9a(0x1f1)+_0x189e9a(0x247),'eZznI':function(_0x49d8ab,_0x279b2e){return _0x49d8ab+_0x279b2e;},'vBReK':function(_0x573284,_0x249a07){return _0x573284===_0x249a07;},'ixMCZ':'sakur'+'a-men'+'u-css','XEyXq':_0x189e9a(0x5ca)+'a-men'+_0x189e9a(0x2de)+'t','ylTIF':function(_0x208233,_0x390396,_0xffdaf2){return _0x208233(_0x390396,_0xffdaf2);},'WgOol':_0x189e9a(0xb7d)+'de','HwMkM':function(_0x57163f,_0x27a880,_0x586ec6,_0x2e5b58){return _0x57163f(_0x27a880,_0x586ec6,_0x2e5b58);},'KXQyx':function(_0x344afd,_0x1b5e35,_0xc815fa){return _0x344afd(_0x1b5e35,_0xc815fa);},'YLOel':'mn-ti'+'tles','DZJvW':function(_0x3db5bc,_0x51a1a8,_0x2edc02,_0x25d0af){return _0x3db5bc(_0x51a1a8,_0x2edc02,_0x25d0af);},'NKEgU':_0x189e9a(0xb89)+'ing…','QAOiL':_0x189e9a(0xbee)+'viewB'+_0x189e9a(0xac3)+_0x189e9a(0xaf9)+_0x189e9a(0x2e9)+_0x189e9a(0x860)+_0x189e9a(0x81a)+'6\x206l1'+'2\x2012M'+_0x189e9a(0x8af)+'6\x2018\x22'+_0x189e9a(0x316)+'vg>','EynDz':function(_0x248d60){return _0x248d60();},'yfAXL':function(_0x4abaa4,_0x2ff28d){return _0x4abaa4+_0x2ff28d;},'KVjdV':function(_0x2ce944,_0x460257,_0x23bf8d,_0x170a6e){return _0x2ce944(_0x460257,_0x23bf8d,_0x170a6e);},'zgtqa':_0x189e9a(0x5ca)+_0x189e9a(0x6bb)+'al','rhzLk':function(_0x40777d,_0x42befb){return _0x40777d===_0x42befb;},'topWI':_0x189e9a(0x6e3),'Cglal':function(_0x3204b4,_0x543380){return _0x3204b4<_0x543380;},'qEEOp':_0x189e9a(0x384)+'a\x20Ski'+'llWar'+_0x189e9a(0x6cc),'PXfQp':_0x189e9a(0x961)+'b','jzKXe':_0x189e9a(0xc63),'shQoz':'mn-pa'+_0x189e9a(0xcc4),'PYFfg':_0x189e9a(0x301)+'n','bjGoI':_0x189e9a(0xa4b),'bCSjF':_0x189e9a(0x1d4),'WJmCf':'ExnSJ','xZecQ':function(_0x51d841,_0x3fe5db){return _0x51d841/_0x3fe5db;},'DXSTb':_0x189e9a(0x268),'MmJmi':function(_0x2587a2,_0x598e1b){return _0x2587a2/_0x598e1b;},'SmkJI':function(_0x13ab3c,_0x40fe8a){return _0x13ab3c===_0x40fe8a;},'XItpy':_0x189e9a(0x6c7),'RkMqc':'ZDbpY','UILVq':function(_0x4c0f45,_0x3b978a){return _0x4c0f45+_0x3b978a;},'TsAha':function(_0x42252a,_0x34cd05){return _0x42252a===_0x34cd05;},'fcjLw':_0x189e9a(0x76c)+_0x189e9a(0x9d1)+_0x189e9a(0xc88)+'x2E4','zEBuX':_0x189e9a(0xc78)+'8','zzfmm':function(_0x2578e,_0x5078b5){return _0x2578e!==_0x5078b5;},'trNjD':function(_0x26e861,_0x21515b){return _0x26e861!==_0x21515b;},'pXqnZ':_0x189e9a(0xe5b),'VcIFD':function(_0x5f1c53,_0xdc3bc3){return _0x5f1c53!==_0xdc3bc3;},'fnyte':function(_0x34c7db,_0x3c25bf){return _0x34c7db+_0x3c25bf;},'ZKOxt':function(_0x124a51,_0x393a41){return _0x124a51*_0x393a41;},'AqeEJ':_0x189e9a(0xa93)+'h=','EreZp':_0x189e9a(0x8f3)+_0x189e9a(0xe31),'UttWL':function(_0x38900f,_0x2b9015){return _0x38900f<_0x2b9015;},'uGbUh':function(_0x40130b,_0x500f0b){return _0x40130b*_0x500f0b;},'wfEmp':function(_0x2a4e18,_0x61a782){return _0x2a4e18<_0x61a782;},'AgItU':function(_0x569541,_0x5915ac){return _0x569541===_0x5915ac;},'NcwYv':function(_0x547cdf,_0x2743fa){return _0x547cdf<_0x2743fa;},'PVxyx':function(_0x4f00ff,_0xbeda2a){return _0x4f00ff<=_0xbeda2a;},'cpDsq':function(_0x457024,_0x575a26){return _0x457024*_0x575a26;},'oQNEi':function(_0x1b8ca5,_0x24c634){return _0x1b8ca5===_0x24c634;},'egfeI':_0x189e9a(0xbb0),'DZHcO':function(_0x31fedb,_0x2a2d30){return _0x31fedb<_0x2a2d30;},'vYDRv':function(_0x463c23,_0x3fc5d1){return _0x463c23+_0x3fc5d1;},'TNOFJ':function(_0x585f02,_0x1aed71){return _0x585f02*_0x1aed71;},'lFoxd':function(_0x29169b,_0x6c24d2){return _0x29169b*_0x6c24d2;},'xbhpZ':function(_0xedebd5,_0x20b587){return _0xedebd5<_0x20b587;},'rQhVY':function(_0x5d365f,_0xf1c6d9){return _0x5d365f===_0xf1c6d9;},'NmjEm':'WIpYF','TkuUt':function(_0x19a468,_0x3aafca){return _0x19a468<_0x3aafca;},'Asybo':'PICKP'+'OS>>','YHcew':function(_0x28128b,_0x55f867){return _0x28128b!==_0x55f867;},'OnLOe':function(_0x4d091b,_0x4ecee5,_0x1a7e09,_0x27a47b){return _0x4d091b(_0x4ecee5,_0x1a7e09,_0x27a47b);},'NOMHE':function(_0x27c606,_0xd5afab){return _0x27c606+_0xd5afab;},'hkidx':function(_0x16a58a,_0x4c4c22){return _0x16a58a===_0x4c4c22;},'wJZIn':_0x189e9a(0xb24),'YiwPf':function(_0x28b282,_0x2d8179){return _0x28b282!==_0x2d8179;},'KODTW':_0x189e9a(0x52d),'mOfWt':'user-'+_0x189e9a(0x250)+_0x189e9a(0x951)+'e;-we'+_0x189e9a(0x1f9)+_0x189e9a(0x7fe)+_0x189e9a(0x250)+_0x189e9a(0x951)+'e;','xQmri':function(_0x1961dc,_0x4e682a){return _0x1961dc+_0x4e682a;},'CmQTZ':_0x189e9a(0xb31)+_0x189e9a(0xc4c)+_0x189e9a(0xaa7),'TvVfJ':function(_0x266d1b,_0x5412b1){return _0x266d1b+_0x5412b1;},'ErAXc':function(_0xf5c90e,_0x187eec){return _0xf5c90e===_0x187eec;},'gckng':_0x189e9a(0x578),'wAimr':'hCbfe','ZtpMK':function(_0x125fda,_0xcd1510){return _0x125fda-_0xcd1510;},'rChuf':function(_0x4d0ebe,_0x2374a5){return _0x4d0ebe+_0x2374a5;},'CoLNp':function(_0x21c9ff,_0x964929){return _0x21c9ff-_0x964929;},'tOQuo':function(_0x19ca74,_0x52ee8d){return _0x19ca74/_0x52ee8d;},'stNCt':function(_0x5b573e,_0x3b4c37){return _0x5b573e/_0x3b4c37;},'pTuFk':function(_0xc482c1,_0x584d34){return _0xc482c1*_0x584d34;},'MMHvs':function(_0xe19031,_0xf200ae){return _0xe19031>_0xf200ae;},'LlhUX':'NtxCF','EOXBZ':function(_0x2ae8e7,_0x3428f8){return _0x2ae8e7*_0x3428f8;},'SePYU':'dDZUn','nChsU':function(_0x6d5b46,_0x59d430){return _0x6d5b46/_0x59d430;},'SRhHp':function(_0x472ba0,_0x4013bd){return _0x472ba0*_0x4013bd;},'WbFEv':function(_0x684e6,_0x4bb2fa){return _0x684e6+_0x4bb2fa;},'uOLiP':function(_0x366f12,_0x448c29){return _0x366f12+_0x448c29;},'OOBOn':function(_0x5d110d,_0x26c651){return _0x5d110d+_0x26c651;},'RkQOc':function(_0x4d2251,_0x189f39){return _0x4d2251*_0x189f39;},'kVdzV':function(_0xd83d21,_0x378947){return _0xd83d21*_0x378947;},'wxgan':function(_0x50dfe3,_0x13c0a5){return _0x50dfe3===_0x13c0a5;},'XeCAq':function(_0x34aecc,_0x480fa9){return _0x34aecc<_0x480fa9;},'VNqAh':function(_0x3f29b6,_0x387f0e){return _0x3f29b6!==_0x387f0e;},'mqdWK':'YxeQL','wiwnv':function(_0x240349,_0x4bf069){return _0x240349!==_0x4bf069;},'ZVtmC':function(_0x19af53,_0x3d29c6,_0x5e24c8,_0x51de3e,_0x125cce){return _0x19af53(_0x3d29c6,_0x5e24c8,_0x51de3e,_0x125cce);},'tumla':function(_0x3f5eb2,_0x3bc9e3){return _0x3f5eb2-_0x3bc9e3;},'RRRAr':function(_0x57ea02,_0x12cdb9){return _0x57ea02/_0x12cdb9;},'uiToh':function(_0x44ae3c,_0x333974){return _0x44ae3c+_0x333974;},'ZNaQi':'rgba('+_0x189e9a(0xd54)+_0x189e9a(0x515)+'6,.95'+')','cbhGr':function(_0x84b990,_0x57bc14){return _0x84b990-_0x57bc14;},'dbOBv':_0x189e9a(0xb65)+'ugin.'+_0x189e9a(0x74d)+'c','omOic':_0x189e9a(0x397),'WIpBI':function(_0x1978b0,_0x20d64c){return _0x1978b0/_0x20d64c;},'PWWFe':'rgba('+_0x189e9a(0xd54)+'43,17'+_0x189e9a(0x695)+')','TFQwI':function(_0x414f02,_0x40d0c4){return _0x414f02*_0x40d0c4;},'dlvCp':function(_0x33d97d,_0x31cbf3){return _0x33d97d+_0x31cbf3;},'QpQPU':function(_0x550491,_0x52d83c){return _0x550491*_0x52d83c;},'jBxnF':function(_0x42efac,_0x35e545){return _0x42efac>_0x35e545;},'BaCFa':function(_0x54b3c2,_0x241eb9){return _0x54b3c2*_0x241eb9;},'sunXl':function(_0x1aa0f1,_0x19a476){return _0x1aa0f1*_0x19a476;},'KLpKz':function(_0x1df490,_0x3e8eea){return _0x1df490+_0x3e8eea;},'yfIiO':function(_0x5c96f8,_0x351647){return _0x5c96f8+_0x351647;},'NXniR':_0x189e9a(0x7e4),'xZkSR':function(_0x4cd9cd,_0x31afb0){return _0x4cd9cd+_0x31afb0;},'QYKZX':function(_0x2fe87c,_0x1dea30){return _0x2fe87c!==_0x1dea30;},'uWkpK':'\x20·\x20te'+'am','Bntzk':_0x189e9a(0xc28),'VLSqq':function(_0x5c582d,_0x5446f7){return _0x5c582d(_0x5446f7);},'cKwet':function(_0x59a806){return _0x59a806();},'BCULB':function(_0x1aaec0,_0x69037d){return _0x1aaec0!==_0x69037d;},'IFJjM':_0x189e9a(0x785),'VzlLY':function(_0x3fcd63,_0x24ffa8){return _0x3fcd63+_0x24ffa8;},'HITPM':_0x189e9a(0xb82),'eyeap':function(_0x3ee59f,_0x259a34){return _0x3ee59f/_0x259a34;},'lwpox':'YXOQd','PWYTe':'MzLXY','PtWYO':_0x189e9a(0xab9),'ohXIZ':function(_0x2c7081,_0x23f7d4){return _0x2c7081(_0x23f7d4);},'KSYBf':_0x189e9a(0x5d2),'nUopU':function(_0x236e3e,_0x583ef2){return _0x236e3e(_0x583ef2);},'GuVax':function(_0x4c4c3f){return _0x4c4c3f();},'BnXqE':function(_0x19cd1b,_0x4de102){return _0x19cd1b>_0x4de102;},'Uhfye':function(_0x509947,_0x578681){return _0x509947+_0x578681;},'yzhlA':'\x20obje'+'ct(s)'+'\x20but\x20'+_0x189e9a(0x638)+_0x189e9a(0x38f)+'lds.\x20','NVMET':_0x189e9a(0x661)+'n:\x20','OfgUc':function(_0x53b756,_0x4901e1){return _0x53b756!==_0x4901e1;},'Vytgl':_0x189e9a(0x37b),'KtisA':function(_0x552eee,_0x55e3a7){return _0x552eee+_0x55e3a7;},'bdCno':'GVxTx','RKwkn':_0x189e9a(0x64f)+'st\x20a\x20'+_0x189e9a(0x62d)+_0x189e9a(0xe44)+_0x189e9a(0x79a)+'me\x20in'+'stanc'+_0x189e9a(0x326)+_0x189e9a(0x764)+'\x20glob'+'al\x20no'+_0x189e9a(0x394)+_0x189e9a(0xd6f),'bBdny':function(_0x225c4d,_0x533baf){return _0x225c4d+_0x533baf;},'oCAff':_0x189e9a(0x453),'KgnhV':function(_0x483aff,_0x2e9828){return _0x483aff+_0x2e9828;},'iOdar':function(_0x135b9e,_0x3d0b13){return _0x135b9e+_0x3d0b13;},'RnfnK':_0x189e9a(0xb95)+_0x189e9a(0xa62)+_0x189e9a(0xda5)+_0x189e9a(0x9b6)+'=','nMBHm':_0x189e9a(0x736)+_0x189e9a(0xd71)+'resol'+_0x189e9a(0xaf7),'SWoJb':_0x189e9a(0x308)+'rce:\x20','LXpIC':function(_0x4018f6,_0x125ae3){return _0x4018f6+_0x125ae3;},'VduZL':_0x189e9a(0x3ad),'spkxw':'Heap\x20'+_0x189e9a(0xa85)+_0x189e9a(0x5c0)+_0x189e9a(0xa92)+_0x189e9a(0x913)+_0x189e9a(0x4bd)+_0x189e9a(0x53e)+_0x189e9a(0xa52)+_0x189e9a(0x485)+_0x189e9a(0xdb5)+_0x189e9a(0x3bb)+_0x189e9a(0x25f)+'U8\x20is'+_0x189e9a(0xa93)+_0x189e9a(0xe47)+'.','Jbmoo':function(_0x502b2d,_0x1f20af){return _0x502b2d===_0x1f20af;},'Eifog':'XsDIv','wBhuS':_0x189e9a(0x3ac),'QubiX':_0x189e9a(0xb11)+'s\x20wer'+'e\x20eve'+_0x189e9a(0xae3)+'N\x20by\x20'+_0x189e9a(0xd58)+'\x20The\x20'+_0x189e9a(0xd96)+'\x20pass'+'\x20','TRrLj':_0x189e9a(0x37e)+'once\x20'+_0x189e9a(0x22a)+_0x189e9a(0x751)+_0x189e9a(0xc54)+'bly.i'+'nstan'+'tiate'+_0x189e9a(0x736)+'snaps'+_0x189e9a(0x9ac)+_0x189e9a(0x1c8)+_0x189e9a(0xd4e)+'ks.le'+'ngth,'+'\x20','FaeKQ':'%c[sa'+_0x189e9a(0x756)+_0x189e9a(0xd72)+_0x189e9a(0xe75)+'\x20repo'+'rt','DGNCr':'zvemD','WpmcL':_0x189e9a(0x669),'DDLHM':function(_0x396f10,_0x832fa1){return _0x396f10===_0x832fa1;},'ebKOn':'NdQSV','pTlqK':_0x189e9a(0x65e),'ilUaD':function(_0x3eff30){return _0x3eff30();},'yscmF':_0x189e9a(0x430),'IQvHd':function(_0x29c597){return _0x29c597();},'CzjFg':_0x189e9a(0x683)+'er','Regyc':'#ff8f'+'b1','wEGBY':'2.10.'+'2','iujQr':'lMCpQ','dFJiB':_0x189e9a(0x2ab)+'ge','LocqJ':'\u008b\u0087\u0087\u0092\u0090'+'\u0086\u008f\u0089\u0095\u0090'+'\u0094','bPSBg':_0x189e9a(0x461)+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','KCnJe':'\u0086\u0087\u0093\u0088\u008f'+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','vlSVI':_0x189e9a(0xbd6)+_0x189e9a(0x342)+'\u0095','TOFgA':'\u0087\u008e\u0089\u008e\u0091'+_0x189e9a(0x4d0)+'\u0088','ivFQB':'\u0093\u0089\u0095\u0092\u0090'+'\u0092\u008b\u0093\u008b\u0092'+'\u008d','pHxeX':_0x189e9a(0x3cb)+_0x189e9a(0x9d0)+'\u008a','xKLzm':'.ctor','dzShA':_0x189e9a(0xdd8)+_0x189e9a(0x6d4)+'\u008a','klWDs':'\u008f\u0091\u0092\u0094\u008a'+_0x189e9a(0x484)+'\u0088','YslvC':_0x189e9a(0xc2b)+'\u0087\u008d\u008a\u008a\u0089'+'\u0089','NayrN':_0x189e9a(0xa38)+_0x189e9a(0xbb6)+'\u0090','RsRXQ':_0x189e9a(0x7ca)+_0x189e9a(0xb9f)+'\u0092','IeyVK':_0x189e9a(0x752),'GVvIn':_0x189e9a(0x492)+_0x189e9a(0x50b)+'\u008a','BTytZ':'\u008e\u008b\u008e\u0091\u008c'+'\u008b\u0094\u0088\u0090\u0088'+'\u008a','QXBOI':'\u0088\u0089\u008f\u0091\u0094'+_0x189e9a(0x5bb)+'\u0090','SiqBv':_0x189e9a(0xbed)+'\u008b\u008c\u0087\u008d\u0095'+'\u008f','eBBdu':_0x189e9a(0x990)+'\u0091\u0088\u0092\u008d\u0087'+'\u0094','kFiXN':_0x189e9a(0xe8b)+_0x189e9a(0x6a6)+'\u008b','hokac':'\u008b\u0090\u0088\u008d\u0087'+_0x189e9a(0xaa1)+'\u0090','aDznf':'\u0086\u0090\u0092\u0091\u0090'+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','EUBdS':'\u008b\u0095\u008a\u008c\u0086'+_0x189e9a(0xaae)+'\u0091','BPUVc':_0x189e9a(0x7b3)+_0x189e9a(0x542)+'\u008a','eZNIH':'\u0093\u0086\u0088\u008d\u008f'+_0x189e9a(0x21a)+'\u0094','Pcwso':'\u008a\u008b\u008d\u0094\u008e'+_0x189e9a(0xe91)+'\u008a','JJJZP':_0x189e9a(0x706)+'\u008a\u0092\u008b\u008d\u0091'+'\u0094','Xfvqe':'\u008b\u0092\u008b\u008f\u0095'+_0x189e9a(0x4aa)+'\u008f','gaDeh':_0x189e9a(0x596)+_0x189e9a(0xccb)+'\u0086','nUFmf':_0x189e9a(0x9a6)+_0x189e9a(0xb30)+'\u008d','EJZpI':'\u008e\u0093\u0093\u008b\u008a'+_0x189e9a(0x649)+'\u0094','wtKSg':'\u0088\u0091\u0095\u008a\u0087'+_0x189e9a(0x68f)+'\u008b','IJntk':'\u0091\u0093\u0091\u008f\u008c'+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','XeQpm':_0x189e9a(0xcd4)+_0x189e9a(0xe0e)+'\u0087','ILFHw':_0x189e9a(0x73d)+_0x189e9a(0x40b)+'\u0091','PhQpn':'\u0090\u0093\u0090\u008f\u0088'+_0x189e9a(0x819)+'\u008f','EncJB':_0x189e9a(0xe85)+_0x189e9a(0xa60)+'\u008b','tTUrK':'\u0095\u0088\u0090\u0092\u0090'+_0x189e9a(0x7c5)+'\u0095','BZYxJ':_0x189e9a(0xc97)+_0x189e9a(0x70d)+'\u0090','ciUKx':'\u008f\u0086\u0090\u0094\u0089'+_0x189e9a(0x4e4)+'\u008a','CmJrz':'\u0087\u0091\u0091\u0090\u0091'+_0x189e9a(0x324)+'\u0086','Idtev':_0x189e9a(0x237)+_0x189e9a(0xe1d)+'\u0088','YtDpZ':_0x189e9a(0x275)+_0x189e9a(0x3c2)+'\u008a','uYEyU':'comme'+_0x189e9a(0xe16)+'Break'+_0x189e9a(0xc68)+'ete','rapJA':_0x189e9a(0xc91)+_0x189e9a(0xe7d)+'\u0093','BevfJ':_0x189e9a(0xa73),'xqRxA':_0x189e9a(0x574)+_0x189e9a(0xe7f)+'\u008c','vLTqp':_0x189e9a(0x1c3)+_0x189e9a(0x27d)+'\u0091','dOunh':_0x189e9a(0x4ce)+_0x189e9a(0xcd7)+'\u008a','eBEmp':_0x189e9a(0x23c)+_0x189e9a(0xc0d)+'\u0094','uSIwz':_0x189e9a(0xa94)+_0x189e9a(0x413)+'\u008e','tJTHg':_0x189e9a(0xc33)+_0x189e9a(0x713)+'\u008e','ZOsTF':_0x189e9a(0x244)+_0x189e9a(0x616)+'\u0086','jICau':_0x189e9a(0x7bc)+_0x189e9a(0xd4c)+'\u0092','klPkB':_0x189e9a(0x26d)+_0x189e9a(0x87b)+'\u008e','QUUxK':'\u008a\u008e\u008d\u008a\u0091'+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','vSzSf':'\u0088\u0094\u008e\u0086\u0090'+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','BRcPw':_0x189e9a(0xb25)+_0x189e9a(0x2cd)+'\u0089','DrXVi':_0x189e9a(0x693)+'ameMa'+'nager','RctPK':_0x189e9a(0xdb2)+'Bot','AiERf':_0x189e9a(0x29a)+_0x189e9a(0x921)+'ge.De'+'cal.d'+'ll','TsUUW':_0x189e9a(0x3d7)+_0x189e9a(0x915)+_0x189e9a(0x8cc)+'rCont'+_0x189e9a(0x5b2)+'r.dll','jrEsH':_0x189e9a(0x55a)+_0x189e9a(0x1e4)+'d','zvSaw':_0x189e9a(0x778),'UUOrE':'photo'+_0x189e9a(0xd56),'BLVEW':_0x189e9a(0xbfb),'lvHvA':_0x189e9a(0x972),'bUCDn':'capsu'+'le','PDHDi':'0xb4','TWLKG':_0x189e9a(0x900)+_0x189e9a(0x6a8)+'th','UrePi':'healt'+'h','uVLLf':'0xd4','oPOTU':'trans'+_0x189e9a(0x22d),'gAbwO':_0x189e9a(0xb4f),'XEODO':function(_0x54c3cd,_0x1ffdfe){return _0x54c3cd!==_0x1ffdfe;},'EbEQB':_0x189e9a(0x5d9)+'t','nODdl':_0x189e9a(0x8fb),'lecBi':'VAL','BBmPC':function(_0x10097d,_0x3bf535){return _0x10097d+_0x3bf535;},'dajhr':function(_0x53bbdf,_0x1c2e83){return _0x53bbdf+_0x1c2e83;},'LLxhd':function(_0x1393f8,_0x3118db){return _0x1393f8+_0x3118db;},'FzjKJ':function(_0x4ce310,_0x35ce72){return _0x4ce310+_0x35ce72;},'toVJe':function(_0x75dfd2,_0x2b0f4b){return _0x75dfd2+_0x2b0f4b;},'tBuBc':function(_0x18caa1,_0x258e1c){return _0x18caa1+_0x258e1c;},'uHuWR':function(_0xf2e76f,_0x17bb28){return _0xf2e76f+_0x17bb28;},'Oxyyw':function(_0x2d25be,_0x4fca14){return _0x2d25be+_0x4fca14;},'IZcEz':function(_0xc64b28,_0x385772){return _0xc64b28+_0x385772;},'QRAwE':function(_0xbfee24,_0x2de974){return _0xbfee24+_0x2de974;},'LPtnp':function(_0x450b42,_0x523774){return _0x450b42+_0x523774;},'epAdi':function(_0xf019c1,_0x558f87){return _0xf019c1+_0x558f87;},'iItKq':function(_0x552c31,_0x15baca){return _0x552c31+_0x15baca;},'CDVIX':function(_0x5482b6,_0x4ca777){return _0x5482b6+_0x4ca777;},'QlSSK':function(_0x33eb1f,_0x11992b){return _0x33eb1f+_0x11992b;},'GoagA':function(_0x2caee9,_0x50a7b2){return _0x2caee9+_0x50a7b2;},'drBrI':'#saku'+'ra-me'+_0x189e9a(0xdff)+_0x189e9a(0xb7c)+_0x189e9a(0x7d7)+_0x189e9a(0x66b),'qovIS':'backg'+'round'+_0x189e9a(0x32b)+'(24,1'+'7,21,'+_0x189e9a(0xc5b)+_0x189e9a(0x330)+_0x189e9a(0x48c)+_0x189e9a(0x983)+_0x189e9a(0x56f)+_0x189e9a(0x856)+_0x189e9a(0xdbc)+'urate'+_0x189e9a(0xac4)+_0x189e9a(0xbf5)+'bkit-'+_0x189e9a(0x330)+'rop-f'+'ilter'+':blur'+_0x189e9a(0x856)+_0x189e9a(0xdbc)+_0x189e9a(0xe83)+'(150%'+');','mqQxq':_0x189e9a(0x995)+':#f6e'+'ef2;f'+_0x189e9a(0x298)+'ize:1'+_0x189e9a(0x577)+'ont-f'+_0x189e9a(0xb8b)+_0x189e9a(0xd40)+'er\x22,\x22'+'Segoe'+_0x189e9a(0x87e)+_0x189e9a(0xdfa)+_0x189e9a(0x852)+'sans-'+_0x189e9a(0xa09)+';}','vZiIL':'.mn-s'+_0x189e9a(0xb4d)+_0x189e9a(0x61e)+'y:fle'+_0x189e9a(0xe79)+_0x189e9a(0x3b2)+_0x189e9a(0x82d)+'n:col'+'umn;a'+_0x189e9a(0x318)+_0x189e9a(0x5c3)+_0x189e9a(0x5da)+_0x189e9a(0x9a4)+_0x189e9a(0x366)+';widt'+_0x189e9a(0x2e6)+'x;fle'+_0x189e9a(0x813)+_0x189e9a(0xcf3)+_0x189e9a(0x2a0)+'12px\x20'+'0;','AqVAF':_0x189e9a(0x68c)+'r-rad'+_0x189e9a(0x420)+'6px;b'+'ackgr'+_0x189e9a(0xac1)+'rgba('+_0x189e9a(0x57e)+'55,25'+'5,.02'+'5);bo'+'x-sha'+_0x189e9a(0xe65)+'nset\x20'+_0x189e9a(0x47f)+_0x189e9a(0xb2e)+_0x189e9a(0xbd0)+_0x189e9a(0x57e)+_0x189e9a(0xbff)+'5,.05'+_0x189e9a(0x21c),'rYSoD':_0x189e9a(0x6dc)+_0x189e9a(0xdc0)+'ispla'+'y:gri'+_0x189e9a(0xcea)+_0x189e9a(0x3e6)+_0x189e9a(0x642)+_0x189e9a(0x68e)+';widt'+_0x189e9a(0xd7f)+'x;hei'+'ght:3'+'2px;m'+'argin'+'-bott'+'om:6p'+_0x189e9a(0xad1),'CJTIX':'.mn-t'+'ab{di'+'splay'+':flex'+_0x189e9a(0x474)+'n-ite'+_0x189e9a(0x235)+_0x189e9a(0x892)+_0x189e9a(0x9f6)+_0x189e9a(0x470)+'ntent'+':cent'+'er;wi'+'dth:5'+'2px;h'+'eight'+_0x189e9a(0x931)+';bord'+'er:0;'+'borde'+_0x189e9a(0x2c0)+_0x189e9a(0x420)+'0px;','CRJUt':_0x189e9a(0xd57)+_0x189e9a(0xbe5)+_0x189e9a(0x5c7)+'spare'+'nt;co'+_0x189e9a(0xb3b)+_0x189e9a(0xd34)+_0x189e9a(0x6b1)+'8,242'+_0x189e9a(0xb9d)+_0x189e9a(0x8bc)+_0x189e9a(0x58c)+'nter;'+'font-'+'size:'+_0x189e9a(0xd61)+'font-'+_0x189e9a(0xad3)+_0x189e9a(0x619)+_0x189e9a(0xcf4)+'-fami'+'ly:in'+'herit'+';}','SmzQL':'.mn-t'+'op{di'+_0x189e9a(0xaea)+':flex'+_0x189e9a(0x474)+_0x189e9a(0x941)+_0x189e9a(0x235)+_0x189e9a(0x892)+_0x189e9a(0x612)+_0x189e9a(0x5d7)+_0x189e9a(0x67a)+_0x189e9a(0xa39)+'\x206px\x20'+'12px;'+_0x189e9a(0x7fe)+'selec'+_0x189e9a(0x951)+_0x189e9a(0xb49),'yLZzT':_0x189e9a(0xde8)+'itles'+'{flex'+':1;mi'+_0x189e9a(0xa7d)+'th:0;'+'}','nkSHw':_0x189e9a(0x995)+_0x189e9a(0xd62)+_0x189e9a(0x56b)+_0x189e9a(0xcb4)+_0x189e9a(0x97c)+_0x189e9a(0x3f2)+_0x189e9a(0x588)+'inter'+';}','wrLnZ':_0x189e9a(0x76f)+_0x189e9a(0xd5a)+_0x189e9a(0x7db)+_0x189e9a(0x564)+_0x189e9a(0xcb8)+_0x189e9a(0x9b2)+_0x189e9a(0x37a)+_0x189e9a(0x662)+'auto;'+_0x189e9a(0x6b0)+'ay:gr'+_0x189e9a(0x820)+'id-te'+_0x189e9a(0xb0e)+_0x189e9a(0xcde)+'umns:'+_0x189e9a(0xa0b)+_0x189e9a(0x28b)+_0x189e9a(0xd6c)+_0x189e9a(0x703)+_0x189e9a(0x336)+'50px,'+_0x189e9a(0x8dc)+';','wNfVn':_0x189e9a(0x76f)+_0x189e9a(0xd2e)+_0x189e9a(0xdb1)+_0x189e9a(0x634)+_0x189e9a(0xcf0)+'ar-th'+_0x189e9a(0x5fa)+_0x189e9a(0x3e8)+'ound:'+'rgba('+_0x189e9a(0x57e)+_0x189e9a(0xbff)+'5,.08'+_0x189e9a(0x565)+_0x189e9a(0x4eb)+_0x189e9a(0xb77)+':4px;'+'}','tiiEX':_0x189e9a(0xe00)+'ard-t'+_0x189e9a(0xd75)+_0x189e9a(0x2f1)+_0x189e9a(0x579)+_0x189e9a(0x1da)+_0x189e9a(0x5b8),'Fsxos':_0x189e9a(0xe00)+'ard.o'+_0x189e9a(0x73a)+'-card'+_0x189e9a(0xe03)+'e\x20str'+'ong{c'+_0x189e9a(0xbe0)+_0x189e9a(0x891)+_0x189e9a(0x2d6),'ltobR':'.sk-m'+'desc{'+'font-'+'size:'+_0x189e9a(0x30b)+_0x189e9a(0x72e)+'ty:.4'+_0x189e9a(0xad5)+_0x189e9a(0x5f2)+_0x189e9a(0x600)+'6px;w'+_0x189e9a(0xcd2)+_0x189e9a(0x5e1)+_0x189e9a(0x201)+'wrap;'+'}','KehNg':'.sk-c'+_0x189e9a(0xbcc)+'splay'+_0x189e9a(0x460)+_0x189e9a(0x474)+_0x189e9a(0x941)+_0x189e9a(0x235)+_0x189e9a(0x892)+_0x189e9a(0x540)+_0x189e9a(0x680)+'dding'+':4px\x20'+_0x189e9a(0xaa0)+'t-siz'+_0x189e9a(0x3ba)+_0x189e9a(0x595),'uprXp':_0x189e9a(0xe25)+'abel{'+_0x189e9a(0x2f1)+'1;col'+_0x189e9a(0xb6b)+_0x189e9a(0x1cc)+_0x189e9a(0xcd9)+',242,'+_0x189e9a(0x5e9)+'}','qFAFr':'.sk-h'+'int{d'+_0x189e9a(0x61e)+'y:blo'+'ck;fo'+'nt-si'+_0x189e9a(0xa8e)+_0x189e9a(0xa0f)+_0x189e9a(0x914)+_0x189e9a(0x723),'plHfu':_0x189e9a(0x4b3)+_0x189e9a(0xb58)+_0x189e9a(0x9b3)+_0x189e9a(0xcfa)+_0x189e9a(0x27f)+_0x189e9a(0x889)+_0x189e9a(0xc56)+'on:ab'+_0x189e9a(0x717)+_0x189e9a(0x780)+_0x189e9a(0x83a)+_0x189e9a(0x4d2)+_0x189e9a(0xae5)+'idth:'+_0x189e9a(0xeb2)+'eight'+':8px;'+_0x189e9a(0x68c)+'r-rad'+'ius:5'+'0%;','KTcqP':_0x189e9a(0x4b3)+_0x189e9a(0xb58)+_0x189e9a(0xa2d)+_0x189e9a(0x3e7)+_0x189e9a(0x241)+_0x189e9a(0x667)+_0x189e9a(0x7d0)+'ter{l'+'eft:1'+'5px;b'+_0x189e9a(0x3e8)+'ound:'+_0x189e9a(0x5bc)+'9d;}','swRhh':_0x189e9a(0xddf)+_0x189e9a(0x8f7)+'displ'+_0x189e9a(0xd67)+_0x189e9a(0xbdd)+'ign-i'+_0x189e9a(0x9e2)+'cente'+_0x189e9a(0x1ef)+_0x189e9a(0x49b)+'}','KEHlh':'.sk-s'+_0x189e9a(0x3e1)+_0x189e9a(0xbde)+'kit-a'+'ppear'+'ance:'+_0x189e9a(0x32c)+_0x189e9a(0x30f)+_0x189e9a(0xa58)+_0x189e9a(0x319)+';widt'+_0x189e9a(0x888)+_0x189e9a(0x5a4)+'ght:8'+_0x189e9a(0xa11)+'ckgro'+'und:t'+'ransp'+'arent'+';}','RHSeM':_0x189e9a(0x4b3)+'lider'+_0x189e9a(0x9e4)+_0x189e9a(0x1f9)+_0x189e9a(0x552)+'r-thu'+'mb{-w'+_0x189e9a(0x4ff)+'-appe'+'aranc'+_0x189e9a(0x7f4)+_0x189e9a(0xbd1)+'th:6p'+'x;hei'+_0x189e9a(0x513)+_0x189e9a(0x8df)+'rgin-'+'top:-'+'2px;b'+'order'+_0x189e9a(0x66e)+'us:50'+_0x189e9a(0x51f)+'kgrou'+'nd:#f'+_0x189e9a(0x96c)+';}','AQRae':_0x189e9a(0x9cc)+_0x189e9a(0xbce)+_0x189e9a(0x8c7)+_0x189e9a(0x69e)+_0x189e9a(0xdc3)+'nt-we'+'ight:'+_0x189e9a(0x2d8)+_0x189e9a(0x8a0)+_0x189e9a(0xdc9)+'4px;t'+'ext-a'+_0x189e9a(0xabb)+_0x189e9a(0x603)+_0x189e9a(0x203)+'r:rgb'+_0x189e9a(0x6d3)+_0x189e9a(0x906)+_0x189e9a(0xbe6)+_0x189e9a(0x77e),'qlavS':_0x189e9a(0x4f5)+_0x189e9a(0x799)+_0x189e9a(0x298)+'ize:1'+'1px;c'+_0x189e9a(0xbe0)+_0x189e9a(0xbd0)+_0x189e9a(0x3c4)+_0x189e9a(0xd03)+_0x189e9a(0xe95)+_0x189e9a(0x6d6)+'ing:2'+_0x189e9a(0x273)+_0x189e9a(0xcda)+_0x189e9a(0x68a)+_0x189e9a(0x2e0)+_0x189e9a(0x687)+';}','lwIHj':_0x189e9a(0x4f5)+_0x189e9a(0x846)+_0x189e9a(0x731)+'lor:#'+'ff7a9'+_0x189e9a(0x7e1),'cRIcV':_0x189e9a(0x5f5)+_0x189e9a(0xe71)+_0x189e9a(0xeb0)+'x;fon'+_0x189e9a(0xb05)+_0x189e9a(0xba7)+_0x189e9a(0x8f6)+_0x189e9a(0xc42)+'point'+'er;fo'+_0x189e9a(0x40a)+_0x189e9a(0x2fb)+'inher'+_0x189e9a(0xa24),'iyjBx':_0x189e9a(0xb31)+_0x189e9a(0x8eb)+'tal{p'+_0x189e9a(0xc56)+'on:fi'+_0x189e9a(0xa90)+_0x189e9a(0x87a)+'px;ri'+_0x189e9a(0xaf6)+_0x189e9a(0x7ce)+_0x189e9a(0xe86)+_0x189e9a(0x7fa)+_0x189e9a(0x601)+'46;cu'+_0x189e9a(0xc42)+_0x189e9a(0x7bd)+_0x189e9a(0x8c9)+'dth:2'+_0x189e9a(0x8e6)+_0x189e9a(0x86f)+_0x189e9a(0xc1c)+_0x189e9a(0x41b)+_0x189e9a(0xcb1)+_0x189e9a(0x652),'BhCFI':function(_0x28b5ee,_0x230df6){return _0x28b5ee+_0x230df6;},'zXjLZ':_0x189e9a(0xbee)+_0x189e9a(0x92b)+_0x189e9a(0xac3)+_0x189e9a(0xaf9)+_0x189e9a(0x2e9)+_0x189e9a(0x860)+'\x20d=\x22M'+'12\x2021'+_0x189e9a(0x641)+_0x189e9a(0xac6)+_0x189e9a(0x2eb)+_0x189e9a(0x636)+_0x189e9a(0x91f)+_0x189e9a(0x30e)+'8-4.5'+_0x189e9a(0x775)+_0x189e9a(0xd6d)+_0x189e9a(0x79b)+'5c0\x203'+_0x189e9a(0x436)+_0x189e9a(0xe4d)+'.5z\x22\x20','DIkOs':_0x189e9a(0xbee)+_0x189e9a(0x8cf)+_0x189e9a(0xe7e)+'logo-'+'svg\x22\x20'+_0x189e9a(0x92b)+_0x189e9a(0xac3)+_0x189e9a(0xaf9)+_0x189e9a(0x2e9)+_0x189e9a(0x860)+'\x20d=\x22M'+_0x189e9a(0xae1)+'c-1.5'+_0x189e9a(0xac6)+_0x189e9a(0x2eb)+'-4-7.'+_0x189e9a(0x91f)+_0x189e9a(0x30e)+'8-4.5'+_0x189e9a(0x775)+_0x189e9a(0xd6d)+_0x189e9a(0x79b)+_0x189e9a(0xe4a)+'-2.5\x20'+_0x189e9a(0xe4d)+_0x189e9a(0xd91),'ZojZg':_0x189e9a(0xbb2)+'le\x20cx'+_0x189e9a(0x3fd)+'\x20cy=\x22'+_0x189e9a(0x32f)+_0x189e9a(0x71f)+'\x22\x20fil'+'l=\x22#f'+_0x189e9a(0x96c)+_0x189e9a(0x256)+_0x189e9a(0x689),'srqSC':function(_0x2639e8,_0x48515d){return _0x2639e8!==_0x48515d;}};var _0x5cac3c=location[_0x189e9a(0x837)+'ame']||'',_0x402109=/(^|\.)www\.crazygames\.com$/[_0x189e9a(0xb9c)](_0x5cac3c),_0x24fe53=/(^|\.)games\.crazygames\.com$/['test'](_0x5cac3c),_0x581c0e=/(^|\.)crazygames\.com$/[_0x189e9a(0xb9c)](_0x5cac3c)&&!_0x402109&&!_0x24fe53,_0x402ddf=_0x402109?_0x189e9a(0x615)+'l':_0x24fe53?_0x368390['CzjFg']:_0x189e9a(0x274)+'r';if(!_0x402109&&!_0x24fe53&&!_0x581c0e)return;var _0x327aec=_0x368390[_0x189e9a(0x49f)],_0x5c5620='__sak'+'ura_s'+'w_v2',_0x175ac7=_0x189e9a(0x321)+_0x189e9a(0x545)+_0x189e9a(0x4b2)+'WARZ-'+_0x189e9a(0xadf)+_0x189e9a(0x9cd),_0x2ebb58='===SA'+_0x189e9a(0x545)+'SKILL'+'WARZ-'+_0x189e9a(0x7d6)+'=',_0x51cafc=_0x368390[_0x189e9a(0xd46)];if(_0x24fe53){if(_0x368390['iujQr']!==_0x189e9a(0xa5b)){window[_0x189e9a(0xc29)+_0x189e9a(0x457)+_0x189e9a(0xddd)+'r'](_0x189e9a(0x2ab)+'ge',function(_0x3f83b4){var _0x48dfc0=_0x189e9a,_0x363f8c=_0x3f83b4['data'];if(!_0x363f8c||_0x368390['SOnhj'](_0x363f8c['__sak'+'ura'],_0x5c5620))return;try{if(window[_0x48dfc0(0x6f2)+'t']&&window[_0x48dfc0(0x6f2)+'t']!==window)window['paren'+'t'][_0x48dfc0(0x4fd)+_0x48dfc0(0x22b)+'e'](_0x363f8c,'*');if(window[_0x48dfc0(0xb12)]&&_0x368390[_0x48dfc0(0x4c2)](window[_0x48dfc0(0xb12)],window))window[_0x48dfc0(0xb12)]['postM'+'essag'+'e'](_0x363f8c,'*');}catch(_0x4aa0c6){}if(_0x363f8c&&_0x368390[_0x48dfc0(0xa50)](_0x363f8c[_0x48dfc0(0xb9b)],_0x368390[_0x48dfc0(0xc77)]))try{var _0xf70d71=document['query'+_0x48dfc0(0xba3)+_0x48dfc0(0xe26)+'l'](_0x368390[_0x48dfc0(0x6bf)]);for(var _0x3d2e7b=0x224a+-0x121c+-0x6d*0x26;_0x3d2e7b<_0xf70d71['lengt'+'h'];_0x3d2e7b++){try{if(_0xf70d71[_0x3d2e7b][_0x48dfc0(0x81f)+'ntWin'+_0x48dfc0(0x532)])_0xf70d71[_0x3d2e7b][_0x48dfc0(0x81f)+'ntWin'+'dow'][_0x48dfc0(0x4fd)+_0x48dfc0(0x22b)+'e'](_0x363f8c,'*');}catch(_0x143b77){}}}catch(_0x16e323){}}),console['log'](_0x189e9a(0x3f8)+'kura]'+_0x189e9a(0xdd1)+_0x189e9a(0x9bd)+_0x189e9a(0xc66)+_0x189e9a(0x643)+_0x189e9a(0xcf6)+_0x189e9a(0x9c9)+_0x189e9a(0x271),_0x368390[_0x189e9a(0x916)]+_0x327aec);return;}else _0x34c2cd['warni'+'ngs'][_0x189e9a(0x8f8)](_0x368390[_0x189e9a(0x7ec)]);}if(_0x402109){console[_0x189e9a(0x289)]('%c[sa'+_0x189e9a(0x756)+'\x20PORT'+'AL\x20AC'+_0x189e9a(0x828),_0x189e9a(0x995)+':'+_0x327aec+_0x368390['gXGiv'],{'host':_0x5cac3c});var _0x3ef175={'set':function(){},'command':function(){}};function _0x249ba8(_0x19daeb,_0x1fa4f3){var _0x50d76d=_0x189e9a,_0x5572cf={'XSlqa':function(_0x5af9ef,_0x1ed986){return _0x5af9ef===_0x1ed986;},'erBrk':_0x368390[_0x50d76d(0xc77)],'IyUxl':function(_0x30f119,_0x4f980d){return _0x30f119(_0x4f980d);},'kMktV':function(_0x364d5d,_0x272875,_0x5ed4bc){return _0x364d5d(_0x272875,_0x5ed4bc);},'yfJsT':function(_0x30950d,_0x3777de){return _0x368390['vwnwU'](_0x30950d,_0x3777de);},'kjzIo':_0x368390['KbgyH']};if('jelpX'!==_0x50d76d(0x559))return _0x113a88['ok']=!![],_0x412bbc['sourc'+'e']=_0x368390[_0x50d76d(0xe46)],_0x3ef9d7[_0x50d76d(0xa97)]=_0x368390[_0x50d76d(0x4f6)](_0x50d76d(0xa9b)+_0x50d76d(0xb7b)+_0x50d76d(0x1cf)+_0x50d76d(0xb68)+'q|='+_0x368390[_0x50d76d(0x7f2)](_0x2a0b80[_0x50d76d(0xbe5)](_0x799be4*(-0x28c+0xe30+-0x21*0x3c)),0x1*-0xffd+-0x264d+0x23d*0x1a),_0x368390[_0x50d76d(0x68d)]),_0x45e16f;else{var _0xe8f705={'__sakura':_0x5c5620,'kind':_0x368390[_0x50d76d(0xc77)],'cmd':_0x19daeb,'arg':_0x1fa4f3};try{var _0x1e92e0=document['query'+_0x50d76d(0xba3)+'torAl'+'l'](_0x50d76d(0x7f6)+'e');for(var _0x149f0a=-0x1*-0x19ed+-0x1442+-0x5ab;_0x368390['cJXTB'](_0x149f0a,_0x1e92e0['lengt'+'h']);_0x149f0a++){if(_0x368390['SMspj']===_0x368390[_0x50d76d(0x516)]){var _0x2a101b=_0xc428b9[_0x50d76d(0x20e)];if(_0x2a101b&&_0x5572cf['XSlqa'](_0x2a101b[_0x50d76d(0x8e8)+_0x50d76d(0x69c)],_0x2375b8)&&_0x2a101b['kind']===_0x5572cf['erBrk'])_0x448455(_0x2a101b['cmd'],_0x2a101b[_0x50d76d(0xce7)]);}else try{if(_0x368390['ycXnz']!==_0x368390[_0x50d76d(0xdfc)]){if(!_0x3407f6['lengt'+'h'])try{_0x2a386d();}catch(_0x1ed703){}_0x59673f++,_0x5572cf[_0x50d76d(0x4a4)](_0x34aaf5,_0x2f9347());if(!_0x5d4957[_0x50d76d(0xcc0)+'h']&&_0x29a2da<0x37f+-0x802+0x5af)_0x298472(_0x5d6e64,0x20e7+0x6eb+-0x2002*0x1);else{if(!_0x31eaaa['keys'](_0x4502a6)['lengt'+'h']&&_0x334fdf<-0x2fb+0x23db+0x1*-0x1fb4)_0x12f7e0(_0x1862f4,0x212c+0x2d4*0x8+-0x2ffc);else _0x5572cf[_0x50d76d(0x33e)](_0xc8e3bc,_0x458a05,0x4ae+-0xe2c+0xe2e);}}else{if(_0x1e92e0[_0x149f0a]['conte'+_0x50d76d(0xa0c)+_0x50d76d(0x532)])_0x1e92e0[_0x149f0a]['conte'+'ntWin'+_0x50d76d(0x532)][_0x50d76d(0x4fd)+'essag'+'e'](_0xe8f705,'*');}}catch(_0x4fe416){}}}catch(_0x3c521e){}try{var _0x14126c=new BroadcastChannel(_0x50d76d(0x5ca)+_0x50d76d(0xd74));_0x14126c[_0x50d76d(0x4fd)+'essag'+'e'](_0xe8f705),setTimeout(function(){var _0xa21d37=_0x50d76d;try{if(_0x5572cf[_0xa21d37(0xc5c)](_0xa21d37(0x2aa),_0x5572cf[_0xa21d37(0xc08)]))return null;else _0x14126c[_0xa21d37(0x393)]();}catch(_0x34efcc){}},0x160b+-0x1fa9+0xa98);}catch(_0x90f310){}}}var _0x13273=_0x189e9a(0x5ca)+_0x189e9a(0x500)+'panel'+_0x189e9a(0x87c)+'en';function _0x37f6f6(){try{return _0x368390['vwnwU'](localStorage['getIt'+'em'](_0x13273),'1');}catch(_0x4a00d2){return![];}}function _0x1f9c4b(_0x274646){var _0xe87603=_0x189e9a;if(_0x368390['rdAos'](_0x368390['XIdhk'],'AHOeL')){if(_0x3708ab['top']&&_0x2d80a1[_0xe87603(0xb12)]!==_0x445971)_0x4eacf4['top'][_0xe87603(0x4fd)+_0xe87603(0x22b)+'e'](_0x4fef13,'*');}else{try{if(_0x368390[_0xe87603(0x3e4)]!==_0x368390[_0xe87603(0x7b2)])_0x274646?localStorage[_0xe87603(0xb1a)+'em'](_0x13273,'1'):localStorage[_0xe87603(0x4b8)+_0xe87603(0x8e7)](_0x13273);else{var _0x4c5b94=_0xf43240[_0x4d9d85]['xyz']||[_0x57d0df[_0x3f0822]['v'],0x271*0x5+-0x1933+0x67f*0x2,0x0+0x15bf*-0x1+0x15bf];return _0x4c5b94[_0xe87603(0x7bb)](function(_0x1fb351){var _0x17ee16=_0xe87603;return _0x4b8d9b[_0x17ee16(0xbe5)](_0x1fb351*(-0x4b1*-0x8+-0x7*0xa2+-0x20b6))/(0xd80+0x1af*-0x17+0x199d);})['join']('\x20\x20');}}catch(_0x4e00f6){}try{var _0xdd2bd5=document[_0xe87603(0x592)+'ement'+_0xe87603(0xa40)](_0x368390['UlWZR']);if(_0xdd2bd5)_0xdd2bd5['remov'+'e']();}catch(_0x20e265){}try{var _0x24f291=document['getEl'+'ement'+'ById'](_0x368390[_0xe87603(0xd2f)]);if(_0x368390['LQfDz'](_0x274646,!_0x24f291)&&document[_0xe87603(0xe8e)]){var _0x2cea33=document[_0xe87603(0x631)+_0xe87603(0x490)+'ent']('div');_0x2cea33['id']=_0xe87603(0x5ca)+'a-sw-'+'v2-ta'+'b',_0x2cea33[_0xe87603(0x98e)]['cssTe'+'xt']=_0x368390[_0xe87603(0x4f6)](_0x368390[_0xe87603(0xb40)]('posit'+'ion:f'+'ixed;'+'left:'+_0xe87603(0x1f3)+_0xe87603(0xbeb)+'2px;z'+'-inde'+'x:214'+_0xe87603(0x27a)+'99;cu'+_0xe87603(0xc42)+'point'+_0xe87603(0xc26)+_0xe87603(0x487)+'lect:'+'none;'+(_0xe87603(0xd57)+'round'+_0xe87603(0x32b)+_0xe87603(0xe24)+_0xe87603(0xca6)+_0xe87603(0x4e6)+'order'+_0xe87603(0xcef)+'solid'+_0xe87603(0x4a3)+'(255,'+_0xe87603(0x81b)+'77,.5'+_0xe87603(0x46d)+'or:')+_0x327aec,';'),_0x368390['NWvLI']),_0x2cea33['textC'+_0xe87603(0xa15)+'t']=_0xe87603(0x5ca)+'a',_0x2cea33[_0xe87603(0xe97)+'ck']=function(){var _0x3bea91=_0xe87603;_0x3bea91(0x48e)===_0x3bea91(0x396)?_0x4c2fe8():(_0x1f9c4b(![]),_0x368390[_0x3bea91(0xcce)](_0x318079));},document[_0xe87603(0xe8e)]['appen'+_0xe87603(0x9bf)+'d'](_0x2cea33);}else _0x368390['zSibr'](!_0x274646,_0x24f291)&&_0x24f291[_0xe87603(0x4b8)+'e']();}catch(_0x30f30d){}}}function _0x787e98(){var _0x3db5b8=_0x189e9a,_0x2940ad=('0|3|4'+_0x3db5b8(0xa17))['split']('|'),_0x331cd4=-0xa91+-0x3fd*0x5+0x61a*0x5;while(!![]){switch(_0x2940ad[_0x331cd4++]){case'0':if(_0x37f6f6())return null;continue;case'1':try{if(!document[_0x3db5b8(0x592)+'ement'+'ById'](_0x368390['uKdVx'])){var _0x43039f=document[_0x3db5b8(0x631)+_0x3db5b8(0x490)+_0x3db5b8(0x9c3)](_0x368390[_0x3db5b8(0x390)]);_0x43039f['id']=_0x3db5b8(0x5ca)+_0x3db5b8(0x500)+'v2-cs'+'s',_0x43039f[_0x3db5b8(0xab4)+'onten'+'t']=_0x3db5b8(0xb31)+'ra-sw'+_0x3db5b8(0x82a)+'ll:in'+_0x3db5b8(0x27e)+'}',(document['head']||document[_0x3db5b8(0xa0e)+'entEl'+_0x3db5b8(0x279)])[_0x3db5b8(0xdc4)+_0x3db5b8(0x9bf)+'d'](_0x43039f);}return _0x1011b2=document['creat'+'eElem'+'ent'](_0x3db5b8(0x973)),_0x1011b2['id']='sakur'+'a-sw-'+'v2',document['body'][_0x3db5b8(0xdc4)+'dChil'+'d'](_0x1011b2),_0x1011b2;}catch(_0x32aaaf){return null;}continue;case'2':if(!document[_0x3db5b8(0xe8e)]||!document['body']['appen'+_0x3db5b8(0x9bf)+'d'])return null;continue;case'3':var _0x1011b2=document[_0x3db5b8(0x592)+'ement'+'ById'](_0x368390['UlWZR']);continue;case'4':if(_0x1011b2)return _0x1011b2;continue;}break;}}function _0x318079(){var _0x296c25=_0x189e9a,_0x16ea84=_0x368390[_0x296c25(0xcce)](_0x787e98);if(!_0x16ea84)return _0x3ef175;if(_0x16ea84[_0x296c25(0x1ce)+'et'][_0x296c25(0x36a)])return _0x16ea84['api'];try{return _0x368390['ayrbo'](_0x3c8fc9,_0x16ea84);}catch(_0x149a26){return _0x16ea84['datas'+'et'][_0x296c25(0x36a)]='1',_0x16ea84[_0x296c25(0x36a)]=_0x3ef175,console[_0x296c25(0xd9d)]('%c[sa'+_0x296c25(0x756)+'\x20pane'+_0x296c25(0x9f7)+_0x296c25(0xc25),_0x368390[_0x296c25(0x916)]+_0x327aec,_0x149a26),_0x3ef175;}}function _0x3c8fc9(_0x35ac73){var _0x129b21=_0x189e9a,_0x287037={'jvYRd':function(_0x4ed0ec,_0x193c63){return _0x4ed0ec+_0x193c63;},'ePmDb':_0x129b21(0x480),'rIEiR':_0x129b21(0x3a8),'jnvqn':function(_0x4a7fd8){var _0x2fa14e=_0x129b21;return _0x368390[_0x2fa14e(0xc41)](_0x4a7fd8);},'jVFdM':function(_0x457bbe,_0x4d652b,_0x36a024){return _0x457bbe(_0x4d652b,_0x36a024);},'btNSo':function(_0x49a436,_0x36a4b5){return _0x49a436(_0x36a4b5);},'NpXxH':'XrCAQ','kNcCw':_0x368390[_0x129b21(0xe9c)],'iQvnA':_0x368390[_0x129b21(0xcf2)],'dVbmq':_0x129b21(0x1e6)+_0x129b21(0xce0),'oedTD':_0x368390[_0x129b21(0x6ef)],'OzCDw':_0x368390[_0x129b21(0x925)],'MqvAZ':'Copie'+'d','gucvR':function(_0x48804f,_0x3b7f66){return _0x368390['rdAos'](_0x48804f,_0x3b7f66);},'rSHQW':function(_0x4ed670){var _0x2a5e3b=_0x129b21;return _0x368390[_0x2a5e3b(0x4b1)](_0x4ed670);},'UXOAB':_0x368390[_0x129b21(0x310)],'KhzTI':function(_0x28a846,_0x2d0de4){var _0x2c9460=_0x129b21;return _0x368390[_0x2c9460(0x9d7)](_0x28a846,_0x2d0de4);},'eqTZI':_0x129b21(0x294),'GOcYw':_0x129b21(0x23d),'nRCgv':'no\x20re'+'port\x20'+_0x129b21(0x63b)+_0x129b21(0x90f)+_0x129b21(0x1c4)+_0x129b21(0x314)+_0x129b21(0x5c6)+'ected'+'?','SBfsZ':'#ffb3'+'c7','MXKGB':_0x368390[_0x129b21(0x765)],'bLEPU':'This\x20'+_0x129b21(0x99f)+_0x129b21(0xeaa)+'es\x20th'+'e\x20use'+'rscri'+'pt\x20IS'+_0x129b21(0x372)+_0x129b21(0x783)+'\x20and\x20'+'runni'+'ng\x20on'+_0x129b21(0x211)+'porta'+'l,\x0a','StfVb':_0x129b21(0x456)+_0x129b21(0x6d7)+_0x129b21(0xe2a)+_0x129b21(0x8f1)+'pects'+_0x129b21(0x9b4)+'\x0a\x0a','LrgTN':_0x129b21(0x61a)+_0x129b21(0xaf0)+_0x129b21(0x1ea)+_0x129b21(0x374)+'\x20not\x20'+_0x129b21(0x7e3)+'ting\x20'+_0x129b21(0x843)+_0x129b21(0x92a)+_0x129b21(0x824)+_0x129b21(0x499)+_0x129b21(0x646)+_0x129b21(0xb4c),'TPmQu':'\x20\x203.\x20'+'Both\x20'+'sakur'+_0x129b21(0x47d)+_0x129b21(0x92c)+_0x129b21(0x6f4)+_0x129b21(0x42c)+_0x129b21(0x51d)+'he\x20ol'+'d\x20dia'+'g\x20scr'+_0x129b21(0xe3a)+_0x129b21(0xc06),'zTcNb':'funct'+'ion','Ynbht':function(_0x5075c8){var _0x4e4347=_0x129b21;return _0x368390[_0x4e4347(0x533)](_0x5075c8);},'noqqS':function(_0x412a55,_0x36f0a4){var _0x22723c=_0x129b21;return _0x368390[_0x22723c(0x5e5)](_0x412a55,_0x36f0a4);},'Xjixd':function(_0x23ab6f,_0x11c66a){var _0x154465=_0x129b21;return _0x368390[_0x154465(0xacd)](_0x23ab6f,_0x11c66a);},'LlSJn':function(_0x212426,_0x43b777){return _0x212426/_0x43b777;},'BgrsM':function(_0x1f694f,_0x17b4f6){return _0x1f694f+_0x17b4f6;},'RUreH':_0x129b21(0xbd0)+_0x129b21(0xd54)+_0x129b21(0x6f5)+_0x129b21(0xdb4)+')','gTRLs':function(_0x27258e,_0xefd9b8){return _0x27258e!==_0xefd9b8;},'CSVfI':_0x129b21(0xd14),'yTZuL':function(_0x5aaf2d,_0x1f8cd5){return _0x5aaf2d+_0x1f8cd5;},'rXxjO':_0x368390[_0x129b21(0x907)],'tqqiE':function(_0x4c7911,_0x41c07e){return _0x368390['OsNwM'](_0x4c7911,_0x41c07e);},'cwlyT':_0x368390['vwtHx'],'nAtKR':function(_0x130d3c,_0x4c8f77){return _0x368390['OehRj'](_0x130d3c,_0x4c8f77);},'PMwNq':_0x129b21(0x816)+_0x129b21(0xc22)+'eady\x20'+'·\x20','YVsoX':function(_0x32a265,_0x1f195a){return _0x32a265!==_0x1f195a;},'oRxSL':_0x129b21(0x7da),'UzmHa':_0x368390[_0x129b21(0xd11)],'jaeVS':_0x129b21(0x233)+'\x20·\x20','KTAgd':_0x368390[_0x129b21(0x895)],'aKnqv':_0x368390[_0x129b21(0xb75)],'ZAdLt':function(_0x2473dc,_0x198f25){return _0x2473dc+_0x198f25;}};_0x35ac73[_0x129b21(0x98e)]['cssTe'+'xt']=_0x368390['OsNwM'](_0x368390[_0x129b21(0xba9)](_0x368390['aqJIc'](_0x129b21(0x3e0)+'ion:f'+'ixed;'+'left:'+_0x129b21(0x1f3)+_0x129b21(0xbeb)+_0x129b21(0x7ce)+'-inde'+_0x129b21(0x7fa)+'74830'+'00;ma'+'x-wid'+_0x129b21(0xe62)+'n(52v'+_0x129b21(0x562)+'px);m'+'ax-he'+_0x129b21(0x968)+_0x129b21(0x3af),_0x368390['wobGi']),_0x368390[_0x129b21(0xb74)]),_0x129b21(0x6b0)+_0x129b21(0xd67)+_0x129b21(0x854)+'ex-di'+'recti'+'on:co'+_0x129b21(0x8f5)+_0x129b21(0x80d)+'low:h'+_0x129b21(0xb3a)+';'),_0x35ac73[_0x129b21(0xe92)+_0x129b21(0xa06)]=_0x368390[_0x129b21(0x9e5)](_0x368390[_0x129b21(0x2f7)](_0x368390['AuKTG'](_0x368390[_0x129b21(0x2f7)](_0x368390['cUvIp'](_0x368390['skcot'](_0x368390['FGWoE'](_0x368390[_0x129b21(0xa3c)](_0x368390[_0x129b21(0x4f6)](_0x368390[_0x129b21(0xa3c)](_0x368390['sFrZA'](_0x368390['OehRj'](_0x368390['LHkVc'],'<b\x20st'+_0x129b21(0xdb7)+'color'+':')+_0x327aec,'\x22>sak'+'ura\x20·'+_0x129b21(0xbae)+'lwarz'+'</b>')+_0x368390[_0x129b21(0x7f3)]+_0x368390['eZQuA']+_0x368390['ZePGl'],_0x327aec),_0x129b21(0x69d)+_0x129b21(0x768)+_0x129b21(0x995)+':#2a0'+'f1b;b'+'order'+_0x129b21(0x66e)+_0x129b21(0xced)+_0x129b21(0x670)+_0x129b21(0x2a0)+_0x129b21(0xe8f)+_0x129b21(0xce5)+'ont-w'+'eight'+':700;'+_0x129b21(0x8bc)+'r:poi'+'nter;'+_0x129b21(0x958)+_0x129b21(0xbf9)+'N</bu'+'tton>')+(_0x129b21(0x212)+_0x129b21(0x5b6)+'=\x22sw2'+'-togg'+_0x129b21(0x74f)+_0x129b21(0x6a4)+_0x129b21(0x962)+_0x129b21(0x859)+_0x129b21(0xcf8)+_0x129b21(0x8fe)+_0x129b21(0xbd2)+_0x129b21(0x1f6)+':1px\x20'+_0x129b21(0x960)+'\x20rgba'+'(255,'+_0x129b21(0x81b)+'77,.4'+_0x129b21(0x46d)+_0x129b21(0x9f5)+'7eef5'+_0x129b21(0x69d)+'er-ra'+_0x129b21(0xaa6)+_0x129b21(0xb50)+'addin'+_0x129b21(0x3dc)+'\x208px;'+'curso'+'r:poi'+_0x129b21(0x892)+_0x129b21(0xb3d)+_0x129b21(0x72a)+_0x129b21(0xdbb)),_0x368390['zBRFD'])+(_0x129b21(0x78f)+'>')+_0x368390[_0x129b21(0x44a)],_0x129b21(0x691)+'style'+'=\x22pad'+_0x129b21(0x2a0)+'8px\x201'+'2px;b'+'order'+'-bott'+_0x129b21(0x57b)+_0x129b21(0xb35)+'id\x20rg'+_0x129b21(0xb66)+_0x129b21(0xe81)+_0x129b21(0xbd9)+_0x129b21(0x2b6)+'displ'+_0x129b21(0xd67)+'ex;ga'+_0x129b21(0x9fe)+_0x129b21(0x474)+_0x129b21(0x941)+_0x129b21(0x235)+_0x129b21(0x892)+'flex:'+_0x129b21(0x5ec)+'uto;f'+'lex-w'+_0x129b21(0x586)+'rap;\x22'+'>'),_0x368390[_0x129b21(0x5b1)])+_0x368390['AeFLb'],_0x327aec),_0x368390[_0x129b21(0x3d5)])+_0x368390[_0x129b21(0x73e)]+('<butt'+_0x129b21(0x5b6)+'=\x22sw2'+_0x129b21(0x5cf)+_0x129b21(0x469)+'le=\x22b'+_0x129b21(0x3e8)+_0x129b21(0xac1)+_0x129b21(0x1d9)+'paren'+_0x129b21(0x65c)+_0x129b21(0xd25)+_0x129b21(0xde3)+_0x129b21(0x536)+_0x129b21(0xd34)+'55,14'+'3,177'+_0x129b21(0xb9d)+'color'+_0x129b21(0x9d9)+_0x129b21(0x8d4)+'order'+_0x129b21(0x66e)+'us:7p'+_0x129b21(0x670)+'ding:'+_0x129b21(0x8ad)+'px;cu'+_0x129b21(0xc42)+_0x129b21(0x7bd)+_0x129b21(0x67c)+'Snaps'+_0x129b21(0xbd7)+_0x129b21(0x49c)+_0x129b21(0x6b4)+'n>')+_0x368390[_0x129b21(0x72c)],_0x129b21(0x78f)+'>')+_0x368390[_0x129b21(0x73b)],_0x368390['MXUnJ']),_0x129b21(0x78f)+'>');var _0x334e7a=_0x35ac73[_0x129b21(0x494)+_0x129b21(0xba3)+'tor'](_0x368390[_0x129b21(0x771)]),_0xdfe2a3=_0x35ac73[_0x129b21(0x494)+_0x129b21(0xba3)+_0x129b21(0x702)](_0x129b21(0x718)+'build'),_0x2839bb=_0x35ac73['query'+_0x129b21(0xba3)+'tor'](_0x129b21(0x718)+'out'),_0x19c65d=_0x35ac73[_0x129b21(0x494)+'Selec'+'tor'](_0x129b21(0x718)+'copy'),_0x24fe50=_0x35ac73[_0x129b21(0x494)+'Selec'+_0x129b21(0x702)](_0x368390[_0x129b21(0x1ec)]),_0x50b07d=_0x35ac73[_0x129b21(0x494)+'Selec'+_0x129b21(0x702)](_0x368390[_0x129b21(0xc2a)]),_0x47eb16=_0x35ac73['query'+_0x129b21(0xba3)+'tor'](_0x129b21(0x718)+'body'),_0x1326fd=_0x35ac73[_0x129b21(0x494)+_0x129b21(0xba3)+_0x129b21(0x702)](_0x368390[_0x129b21(0xb80)]),_0x15c59f=_0x35ac73[_0x129b21(0x494)+'Selec'+_0x129b21(0x702)](_0x368390[_0x129b21(0x503)]),_0x37668c=_0x35ac73[_0x129b21(0x494)+_0x129b21(0xba3)+_0x129b21(0x702)](_0x129b21(0x718)+_0x129b21(0xb52)+'r'),_0x395c60=_0x35ac73[_0x129b21(0x494)+_0x129b21(0xba3)+'tor'](_0x368390[_0x129b21(0x1d5)]),_0x1cc143=_0x35ac73[_0x129b21(0x494)+_0x129b21(0xba3)+_0x129b21(0x702)](_0x368390['QDzuG']),_0x5c09b1=null,_0x2efb83=![];function _0x3da585(){var _0x33c6fd=_0x129b21;if(_0x47eb16)_0x47eb16['style']['displ'+'ay']=_0x2efb83?'':_0x33c6fd(0x6e6);if(_0x50b07d)_0x50b07d[_0x33c6fd(0xab4)+'onten'+'t']=_0x2efb83?_0x33c6fd(0x393):'open';_0x35ac73['style']['width']=_0x2efb83?'min(5'+_0x33c6fd(0xe88)+'20px)':_0x33c6fd(0x7d4),_0x35ac73['style'][_0x33c6fd(0xd57)+'round']=_0x2efb83?_0x368390[_0x33c6fd(0xc8f)]:_0x368390[_0x33c6fd(0x1be)];}if(_0x50b07d)_0x50b07d[_0x129b21(0xe97)+'ck']=function(){var _0x48210c=_0x129b21;_0x287037[_0x48210c(0xc8d)]===_0x287037[_0x48210c(0x1ee)]?(_0x13c50c['style'][_0x48210c(0x6c0)]=_0x287037[_0x48210c(0xc72)](_0x2d5060['pos']['x'],'px'),_0x55af98['style'][_0x48210c(0xb12)]=_0x287037['jvYRd'](_0x5bbf12['pos']['y'],'px'),_0x232c60[_0x48210c(0x98e)][_0x48210c(0x603)]=_0x48210c(0x7d4),_0x5a50ea[_0x48210c(0x98e)]['botto'+'m']='auto'):(_0x2efb83=!_0x2efb83,_0x287037['jnvqn'](_0x3da585));};_0x3da585();if(_0x24fe50)_0x24fe50['oncli'+'ck']=function(){_0x1f9c4b(!![]);};if(_0x1326fd)_0x1326fd['oncli'+'ck']=function(){var _0x30cca2=_0x129b21;_0x368390[_0x30cca2(0xdc7)](_0x249ba8,_0x30cca2(0xc55)+_0x30cca2(0xc39));};var _0xe6ce47=![];function _0x6f2ab4(){var _0x738231=_0x129b21;_0x287037[_0x738231(0x6fd)](_0x249ba8,'speed',{'on':_0xe6ce47,'factor':_0x287037[_0x738231(0xd87)](parseFloat,_0x37668c[_0x738231(0x4a8)])||-0x57d*0x5+-0x1*-0x1147+0xa2b});}if(_0x15c59f)_0x15c59f['oncli'+'ck']=function(){var _0x110dc2=_0x129b21;if(_0x287037[_0x110dc2(0x876)]!==_0x287037['kNcCw']){var _0x5d3fbb=_0x287037['iQvnA']['split']('|'),_0xfcc8d0=-0x4*0x7f6+-0x5d1*-0x3+-0x14f*-0xb;while(!![]){switch(_0x5d3fbb[_0xfcc8d0++]){case'0':_0x6f2ab4();continue;case'1':_0xe6ce47=!_0xe6ce47;continue;case'2':_0x15c59f[_0x110dc2(0xab4)+'onten'+'t']=_0xe6ce47?_0x287037[_0x110dc2(0xcf9)]:_0x110dc2(0x1e6)+'\x20off';continue;case'3':_0x15c59f['style']['color']=_0xe6ce47?_0x287037[_0x110dc2(0xd8c)]:_0x110dc2(0x391)+'f5';continue;case'4':_0x15c59f[_0x110dc2(0x98e)]['backg'+_0x110dc2(0xbe5)]=_0xe6ce47?_0x327aec:_0x287037[_0x110dc2(0x855)];continue;}break;}}else{_0x449beb()[_0x110dc2(0x6ea)]({'host':_0x2a90a3[_0x110dc2(0x311)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}};if(_0x37668c)_0x37668c['oninp'+'ut']=function(){var _0x2168ce=_0x129b21;if(_0x395c60)_0x395c60[_0x2168ce(0xab4)+_0x2168ce(0xa15)+'t']=(_0x368390[_0x2168ce(0x7a2)](parseFloat,_0x37668c[_0x2168ce(0x4a8)])||-0x723+-0xaa8*0x3+0x2*0x138e)[_0x2168ce(0xd9b)+'ed'](0x6*0x401+-0x2bf*-0x9+0x1*-0x30bc)+'x';_0x368390['xHdSn'](_0x6f2ab4);};if(_0x19c65d)_0x19c65d[_0x129b21(0xe97)+'ck']=function(){var _0x3ff7b7=_0x129b21,_0x144c53={'lebiL':'Runti'+'me.cr'+_0x3ff7b7(0xc6b)+_0x3ff7b7(0x6e8)+_0x3ff7b7(0x6fa)+'ailab'+'le'},_0xf419fc=_0x368390[_0x3ff7b7(0xb40)](_0x368390['cUvIp'](_0x175ac7+'\x0a'+(_0x5c09b1?JSON['strin'+'gify'](_0x5c09b1,null,0x935+0x5e3+-0xf17):''),'\x0a'),_0x2ebb58),_0x543f46=function(){var _0x1c7af3=_0x3ff7b7;if(_0x19c65d)_0x19c65d['textC'+_0x1c7af3(0xa15)+'t']=_0x287037['MqvAZ'];};if(navigator['clipb'+'oard']&&navigator['clipb'+'oard'][_0x3ff7b7(0x220)+_0x3ff7b7(0x9d3)]){if(_0x368390[_0x3ff7b7(0x269)]!=='FtlbK')navigator[_0x3ff7b7(0x215)+_0x3ff7b7(0x77f)][_0x3ff7b7(0x220)+_0x3ff7b7(0x9d3)](_0xf419fc)['then'](_0x543f46,function(){var _0x2c0c3d=_0x3ff7b7;if(_0x287037[_0x2c0c3d(0x471)](_0x2c0c3d(0xa00),'pXRoC')){_0x3ddd43[_0x2c0c3d(0x8d9)]=_0x144c53['lebiL'];return;}else _0x287037['rSHQW'](_0x275036);});else{var _0x3baf6e=_0x54797c();if(!_0x3baf6e)return null;try{return new _0x47b8e1(_0x3baf6e[_0x3ff7b7(0x26f)+'r'],_0x3baf6e[_0x3ff7b7(0x5ff)+'ffset'],_0x3baf6e[_0x3ff7b7(0x409)+_0x3ff7b7(0x23a)]);}catch(_0x1b02d6){return null;}}}else _0x275036();function _0x275036(){var _0x7c9c0=_0x3ff7b7,_0x29c142={'iytQI':function(_0x20c702,_0x57beed){return _0x20c702(_0x57beed);}},_0x38ab7e=document['creat'+_0x7c9c0(0x490)+_0x7c9c0(0x9c3)](_0x287037['UXOAB']);_0x38ab7e['value']=_0xf419fc;if(!document['body'])return;document[_0x7c9c0(0xe8e)]['appen'+_0x7c9c0(0x9bf)+'d'](_0x38ab7e),_0x38ab7e[_0x7c9c0(0x250)+'t']();try{if(_0x287037['KhzTI']('IBYDU',_0x7c9c0(0x3ae)))document[_0x7c9c0(0xa2e)+_0x7c9c0(0xb6c)+'d'](_0x287037['eqTZI']),_0x287037[_0x7c9c0(0x4dc)](_0x543f46);else return{'version':_0x26be76,'when':new _0x5bfb84()[_0x7c9c0(0x2ff)+_0x7c9c0(0xa27)+'g'](),'elapsedMs':_0x48e2bf['now']()-_0x11e7be,'host':_0x4df2cc,'uwmk':!!(_0x39270e['Unity'+_0x7c9c0(0x917)+'dkit']&&_0x266702['Unity'+_0x7c9c0(0x917)+'dkit'][_0x7c9c0(0x79a)+'me']),'il2CppContext':![],'arm':_0x489a7d,'hooksTotal':_0x408030['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x29c142['iytQI'](_0x22d19c,_0x11d1c6&&_0x5acc3f['messa'+'ge']||_0xbe0088)};}catch(_0x20cae8){}_0x38ab7e[_0x7c9c0(0x4b8)+'e']();}};setTimeout(function(){var _0x58fc72=_0x129b21;if('DOydz'===_0x287037[_0x58fc72(0xd9a)]){if(_0x5c09b1)return;if(!_0x334e7a||!_0x2839bb)return;_0x334e7a['textC'+'onten'+'t']=_0x287037['nRCgv'],_0x334e7a['style'][_0x58fc72(0x995)]=_0x287037[_0x58fc72(0x742)],_0x2839bb['textC'+_0x58fc72(0xa15)+'t']=_0x287037[_0x58fc72(0xcba)]+_0x287037[_0x58fc72(0x7f7)]+_0x287037['StfVb']+_0x287037['LrgTN']+(_0x58fc72(0x230)+_0x58fc72(0x38b)+_0x58fc72(0x864)+'as\x20no'+_0x58fc72(0x426)+'n\x20rel'+'oaded'+'\x20sinc'+_0x58fc72(0x4bb)+_0x58fc72(0x3da)+_0x58fc72(0x7cf))+_0x287037[_0x58fc72(0x21e)]+('\x20\x20\x20\x20\x20'+_0x58fc72(0x571)+_0x58fc72(0x448)+_0x58fc72(0x3a0)+'\x20copi'+'es\x20of'+_0x58fc72(0xcad)+'\x20both'+_0x58fc72(0xd00)+'h\x20Web'+_0x58fc72(0xc54)+_0x58fc72(0xcb3)+_0x58fc72(0x585)+'tiate'+_0x58fc72(0x5d5))+('Reloa'+_0x58fc72(0xb13)+_0x58fc72(0xce3)+'\x20page'+'\x20once'+'\x20and\x20'+_0x58fc72(0xbdb)+'\x20this'+_0x58fc72(0xcf1)+_0x58fc72(0xe36)+'in.');}else _0x58810c=_0x5548e1,_0xa50a4e=_0x355558['hits'];},0x1ab46+-0xbed+0x3c53*-0x3);var _0x90484c={'set':function(_0x237c2a){var _0x4d245b=_0x129b21,_0x5e9069={'CRnZS':function(_0x13c491,_0x5b54a9){return _0x13c491/_0x5b54a9;},'cVCBR':function(_0x51a80b,_0xb9d01c){return _0x51a80b*_0xb9d01c;},'XdfdT':function(_0x467d37,_0x4b5d99,_0x186851,_0x49d00d,_0x5198e2){return _0x467d37(_0x4b5d99,_0x186851,_0x49d00d,_0x5198e2);},'YwiLV':function(_0x3f41fd,_0x2d7a77){return _0x3f41fd-_0x2d7a77;},'NBGxk':function(_0x2e1488,_0x6018fb){return _0x2e1488/_0x6018fb;},'ithkj':function(_0x228e84,_0x414d85){return _0x228e84/_0x414d85;},'nIvVx':function(_0x52b5b1,_0x29b5a8){return _0x287037['LlSJn'](_0x52b5b1,_0x29b5a8);},'MWPtx':function(_0x2ade5c,_0xc6d5c8){var _0x108db5=_0x4f94;return _0x287037[_0x108db5(0xb23)](_0x2ade5c,_0xc6d5c8);}};_0x5c09b1=_0x237c2a;if(_0x19c65d)_0x19c65d[_0x4d245b(0x98e)][_0x4d245b(0x6b0)+'ay']='';if(_0xdfe2a3){_0xdfe2a3[_0x4d245b(0xab4)+'onten'+'t']=_0x287037['BgrsM']('v',_0x237c2a['versi'+'on']||'?');var _0x32d074=_0x51cafc,_0x45b5fd=_0x237c2a[_0x4d245b(0x70b)+'on']||'';_0xdfe2a3[_0x4d245b(0x98e)][_0x4d245b(0x995)]=_0x287037['gucvR'](_0x45b5fd,_0x32d074)?_0x327aec:_0x4d245b(0xad4)+'74',_0xdfe2a3[_0x4d245b(0x98e)][_0x4d245b(0x68c)+_0x4d245b(0xd92)+'r']=_0x45b5fd===_0x32d074?_0x287037[_0x4d245b(0x5c4)]:'#ff6e'+'74';}var _0x48ca3e=_0x237c2a[_0x4d245b(0x571)+'nces']&&_0x237c2a[_0x4d245b(0x571)+_0x4d245b(0x5dd)]['FPSco'+_0x4d245b(0x9d1)+'ler'],_0x142341=Math[_0x4d245b(0xbe5)]((_0x237c2a[_0x4d245b(0x42a)+'edMs']||0x1350+0xdb6+-0x2106)/(-0x1401*0x1+0x1*-0x1bf9+0x33e2));if(_0x334e7a){var _0x537eae,_0x2a8742;if(_0x48ca3e&&_0x237c2a[_0x4d245b(0x734)+'y']&&_0x237c2a[_0x4d245b(0x734)+'y'][_0x4d245b(0x76c)+_0x4d245b(0x9d1)+_0x4d245b(0x88e)]){if(_0x287037[_0x4d245b(0xeb8)]('jcnfS',_0x287037[_0x4d245b(0x7e0)]))_0x537eae=_0x287037[_0x4d245b(0x24d)]('LIVE\x20'+'·\x20',Object[_0x4d245b(0x8be)](_0x237c2a['insta'+'nces'])[_0x4d245b(0xcc0)+'h'])+(_0x4d245b(0xa1b)+'cts\x20·'+'\x20')+_0x142341+'s',_0x2a8742=_0x287037[_0x4d245b(0xcbe)];else{var _0x2bf516=_0x4e1d61[_0x4d245b(0x3a4)+'ime'];if(_0x287037[_0x4d245b(0x471)](typeof _0x2bf516[_0x4d245b(0xc9f)+_0x4d245b(0x893)+'e'],_0x287037['zTcNb'])){var _0x58d136=_0x2bf516['resol'+'veGam'+'e']();if(_0x58d136)return _0x16abdd[_0x4d245b(0x8f2)+'e']='plugi'+'n._ru'+_0x4d245b(0x604)+_0x4d245b(0x772)+'lveGa'+_0x4d245b(0x238),_0x58d136;}if(_0x2bf516[_0x4d245b(0x379)])return _0x1d7817[_0x4d245b(0x8f2)+'e']=_0x4d245b(0x1c8)+_0x4d245b(0x4f0)+_0x4d245b(0x604)+_0x4d245b(0x954)+'e',_0x2bf516['_game'];}}else{if(_0x237c2a[_0x4d245b(0x89a)+_0x4d245b(0x7a8)+'ed']>0x666+-0x1b86*-0x1+-0x21ec)_0x537eae=_0x287037[_0x4d245b(0xc50)](_0x287037[_0x4d245b(0xb92)]+_0x142341,'s'),_0x2a8742=_0x4d245b(0xc7d)+'8a';else{if(_0x237c2a['scrip'+'tData'])_0x537eae=_0x287037['nAtKR'](_0x287037[_0x4d245b(0x4d9)],_0x142341)+'s',_0x2a8742='#ffd4'+'8a';else{if(_0x287037[_0x4d245b(0x50c)](_0x287037[_0x4d245b(0x88b)],_0x287037['UzmHa']))_0x537eae=(_0x237c2a['arm']&&_0x237c2a['arm']['ok']?_0x287037[_0x4d245b(0xb1d)]:_0x4d245b(0x988)+'g\x20·\x20')+_0x142341+'s',_0x2a8742=_0x4d245b(0xc7d)+'8a';else{var _0x599b47=_0x287037['Ynbht'](_0x4eafaf);_0x37a4d8[_0x4d245b(0x4a8)]=_0x332afc(_0x599b47),_0x43b67e[_0x4d245b(0xab4)+'onten'+'t']=(_0x2f00dd<0x1a36+0x587*0x7+0x9*-0x736?_0x599b47[_0x4d245b(0xd9b)+'ed'](-0x1f*0x137+0x1204+0x13a6):_0x51a2b6(_0x4682d2[_0x4d245b(0xbe5)](_0x599b47)))+(_0x2fffa5[_0x4d245b(0x1ce)+'et'][_0x4d245b(0xe69)]||'');var _0x3601e2=(_0x599b47-_0x54d8f6)/_0x287037[_0x4d245b(0xb23)](_0xb3f28b,_0x505d39)*(-0x5*-0x4af+0x1883+-0x5*0x982);_0x5199f2[_0x4d245b(0x98e)][_0x4d245b(0x8f9)+_0x4d245b(0x349)+'y']('--p',_0x287037['jvYRd'](_0x3601e2,'%'));}}}}_0x334e7a['textC'+'onten'+'t']=_0x537eae,_0x334e7a[_0x4d245b(0x98e)]['color']=_0x2a8742;}_0x1cc143&&(_0x1cc143[_0x4d245b(0xab4)+_0x4d245b(0xa15)+'t']=_0x237c2a['diff']&&_0x237c2a['diff']['lengt'+'h']?_0x287037['tqqiE'](_0x287037[_0x4d245b(0xa82)],_0x237c2a[_0x4d245b(0x5db)]['join'](',\x20')):_0x4d245b(0x61f)+'ice\x20w'+_0x4d245b(0x427)+_0x4d245b(0x9dc)+_0x4d245b(0xab3)+_0x4d245b(0xb48)+_0x4d245b(0x653)+'/\x20jum'+'ping\x20'+_0x4d245b(0x7ff)+_0x4d245b(0x5af)+'h\x20fie'+'ld\x20is'+'\x20whic'+'h.');if(_0x237c2a[_0x4d245b(0x353)]&&_0x15c59f){_0xe6ce47=!!_0x237c2a['speed']['on'],_0x15c59f['textC'+'onten'+'t']=_0xe6ce47?_0x4d245b(0x1e6)+_0x4d245b(0xce0):'Speed'+_0x4d245b(0xa6d),_0x15c59f[_0x4d245b(0x98e)][_0x4d245b(0xd57)+_0x4d245b(0xbe5)]=_0xe6ce47?_0x327aec:'trans'+_0x4d245b(0x6f2)+'t',_0x15c59f[_0x4d245b(0x98e)]['color']=_0xe6ce47?_0x287037[_0x4d245b(0xd8c)]:'#f7ee'+'f5';if(_0x395c60&&_0x237c2a['speed'][_0x4d245b(0xb52)+'r']){if(_0x287037[_0x4d245b(0x5bf)](_0x4d245b(0xa3d),'bUhsd')){var _0x8c5faf=_0x202602[_0x4d245b(0x3d3)](_0x5e9069['CRnZS'](_0x1f8d1b['fov']*_0x111e61['PI'],-0x891*0x3+0xac3+0x134*0xd)/(-0xb03*-0x2+0x60a+0x1*-0x1c0e)),_0x336075=0xba5+-0x43*-0x3d+-0xdc9*0x2,_0x575461=-0x146+0xb57+-0xa10,_0xeffcfa=[_0xd4b1e9['pos'][-0x429+-0xe7+-0x288*-0x2]+_0x5e9069[_0x4d245b(0x782)](_0x21682a[0x12cc*-0x2+0x1b*0x3f+-0x13*-0x1a1],_0x336075),_0x4263df['pos'][0x1e73+0x18+0x2*-0xf45]+_0x36f9be[-0x2160+0x15*-0xe8+0x3469]*_0x336075+_0x575461,_0x1c682c['pos'][-0x9f*0x37+-0x73e*-0x1+0x1aed]+_0x5e9069['cVCBR'](_0x2f5cbd[0x18f4+0x711+-0x2003],_0x336075)],_0x523006=_0x5e9069['XdfdT'](_0x5cd7c1,_0x25bcc7[_0x4d245b(0x90e)],_0xeffcfa,_0x52600a,_0x140f4d['canva'+'s']['h']);if(_0x523006){var _0x4eff92=_0x5e9069['YwiLV'](-0x29f*0x5+-0x1c5a+0x2975+0.5,_0x5e9069[_0x4d245b(0x27b)](_0x523006['y'],_0xa2795b[_0x4d245b(0x704)+'s']['h']))*(0x97e+-0x1a1b+0x109f),_0x16ce42=_0x5e9069['ithkj'](_0x5e9069[_0x4d245b(0x657)](_0x575461,_0x336075),_0x8c5faf);_0x1999eb['verti'+_0x4d245b(0xc9e)]={'got':_0x197b21['round'](_0x5e9069[_0x4d245b(0x782)](_0x4eff92,-0x252d+-0x5c*0x23+0x35a9))/(-0x34*0x6b+-0x1c31+-0x1*-0x35d5),'want':_0x202606[_0x4d245b(0xbe5)](_0x5e9069[_0x4d245b(0x782)](_0x16ce42,0x3*-0xa1d+0x1a9f+0x2*0x3d0))/(-0x6*-0x1e5+0x54b*-0x2+0xa*0x50),'off':_0x5e9069['NBGxk'](_0x29b018[_0x4d245b(0xbe5)](_0x5e9069[_0x4d245b(0x782)](_0x5e9069[_0x4d245b(0x45f)](_0x4eff92,_0x16ce42),0xa*0xc1+-0x8fe+0x55c)),-0x2238+0x9*-0xd1+0x2d79)};}}else _0x395c60[_0x4d245b(0xab4)+_0x4d245b(0xa15)+'t']=Number(_0x237c2a[_0x4d245b(0x353)]['facto'+'r'])['toFix'+'ed'](-0x38e*-0x5+0x3*0x7f3+-0x299e)+'x';}}if(_0x2839bb)try{_0x2839bb['textC'+_0x4d245b(0xa15)+'t']=_0x2d1d66(_0x237c2a);}catch(_0xf9747b){_0x4d245b(0xa01)!=='utLAR'?_0x2839bb[_0x4d245b(0xab4)+'onten'+'t']=JSON[_0x4d245b(0x4c9)+'gify'](_0x237c2a,null,0x144+-0x169f+0x155c):_0x50dbac=_0x1d23a3[_0x4d245b(0x3d3)](_0x287037[_0x4d245b(0x24a)](_0x4230de['beari'+'ng'],_0x22f59b['PI'])/(0x1*0x214+0x1836*0x1+-0x1996))/(_0xf544ab*_0x3828b4);}console[_0x4d245b(0x289)](_0x4d245b(0x3f8)+'kura]'+_0x4d245b(0xd72)+_0x4d245b(0xe75)+'\x20repo'+'rt',_0x287037['jvYRd']('color'+':'+_0x327aec,_0x287037[_0x4d245b(0x8e3)]),_0x237c2a),console[_0x4d245b(0x289)](_0x287037['ZAdLt'](_0x175ac7+'\x0a'+JSON[_0x4d245b(0x4c9)+_0x4d245b(0xd94)](_0x237c2a,null,0x13*0x18a+0x1*-0x1988+-0x3b5),'\x0a')+_0x2ebb58);}};return _0x35ac73[_0x129b21(0x1ce)+'et']['api']='1',_0x35ac73['api']=_0x90484c,_0x90484c;}function _0x2d1d66(_0x46a3b2){var _0x3cae26=_0x189e9a,_0x2f8a4a=[];_0x2f8a4a['push'](_0x368390[_0x3cae26(0x5aa)](_0x368390['QaxPK']+(_0x46a3b2[_0x3cae26(0x311)]||'?')+_0x3cae26(0xe37),Math[_0x3cae26(0xbe5)]((_0x46a3b2['elaps'+'edMs']||0x57b+-0x1fb8+0x1a3d)/(-0x270f+-0x394+0x2e8b)))+'s)'),_0x2f8a4a[_0x3cae26(0x8f8)](_0x368390['cUvIp'](_0x368390[_0x3cae26(0x5aa)](_0x368390['txnCj'](_0x368390[_0x3cae26(0x35b)]+(_0x46a3b2[_0x3cae26(0x8c4)]?_0x368390[_0x3cae26(0x64b)]:'no'),_0x368390['yABHp'])+(_0x46a3b2['il2Cp'+_0x3cae26(0x435)+_0x3cae26(0x688)]?_0x368390['HvHkl']:'no'),'\x20\x20\x20ty'+_0x3cae26(0xbaa)),_0x368390[_0x3cae26(0xa68)](_0x46a3b2['typeC'+'ount'],null)?_0x46a3b2['typeC'+_0x3cae26(0xd10)]:'?')),_0x2f8a4a[_0x3cae26(0x8f8)](_0x368390[_0x3cae26(0xa3c)](_0x368390[_0x3cae26(0x5aa)](_0x3cae26(0x89a)+_0x3cae26(0x7f9),_0x46a3b2['hooks'+'Appli'+'ed']),'/')+_0x46a3b2[_0x3cae26(0x89a)+'Total']+(_0x3cae26(0x386)+_0x3cae26(0x7fd))),_0x2f8a4a['push']('');var _0x384315=_0x46a3b2[_0x3cae26(0x571)+'nces']||{},_0x421ff8=Object[_0x3cae26(0x8be)](_0x384315);if(!_0x421ff8['lengt'+'h']){if(_0x368390[_0x3cae26(0x2b1)]===_0x368390[_0x3cae26(0x5cd)]){var _0x468132=_0xeba1c2(_0x27ca23+_0x2ba82e(_0x35b27a[_0x3b28ed][0x1981+-0x1*0x28d+-0x16f4],0x283*0x7+-0x11a7+0x22*0x1),_0x3cae26(0xe68));if(_0x468132)_0x4924bf[_0x3cae26(0x64d)][_0x44c69b[_0x5eec03][0x216e+0x2c*-0x4+-0x1d*0x121]]=_0x368390[_0x3cae26(0x1e9)]('0x',_0x368390['eBdLa'](_0x468132,0x187e+0x251e+-0x4*0xf67)['toStr'+_0x3cae26(0x5f9)](0x1*0x50b+-0x1*0xce5+0x1*0x7ea));}else _0x2f8a4a[_0x3cae26(0x8f8)](_0x368390[_0x3cae26(0x9ce)]),_0x2f8a4a[_0x3cae26(0x8f8)](''),_0x2f8a4a['push'](_0x368390['vkBLD']),_0x2f8a4a[_0x3cae26(0x8f8)](_0x3cae26(0x6f1)+_0x3cae26(0xe6f)+'ran\x20y'+_0x3cae26(0xcd8)+'r\x20the'+_0x3cae26(0x8ea)+'ature'+'\x20did\x20'+'not\x20m'+_0x3cae26(0x656));}for(var _0x252ff1=-0x1b26+0x5fc*-0x4+0xd*0x3ee;_0x252ff1<_0x421ff8['lengt'+'h'];_0x252ff1++){var _0x3da3a9=_0x421ff8[_0x252ff1];_0x2f8a4a['push'](_0x3da3a9+_0x368390[_0x3cae26(0xc18)]+_0x384315[_0x3da3a9]);}_0x2f8a4a['push']('');var _0x50ac40=_0x46a3b2[_0x3cae26(0x734)+'y']||{},_0x5396df=Object[_0x3cae26(0x8be)](_0x50ac40);for(var _0x43e160=-0x2*-0x43f+-0xc9*0x31+0x1dfb;_0x43e160<_0x5396df[_0x3cae26(0xcc0)+'h'];_0x43e160++){var _0x3f2625=_0x5396df[_0x43e160],_0x5ef7fe=_0x50ac40[_0x3f2625];if(!_0x5ef7fe||!_0x5ef7fe[_0x3cae26(0xcc0)+'h'])continue;_0x2f8a4a['push'](_0x368390[_0x3cae26(0x5aa)](_0x368390[_0x3cae26(0x84e)](_0x368390['jSzTr'],_0x3f2625),'\x20')+new Array(Math['max'](-0x1*-0x1dae+-0xdd7*0x1+-0xfd6,0x349*-0x6+-0x33*0xb7+0x384d-_0x3f2625['lengt'+'h']))[_0x3cae26(0xe4b)]('─')),_0x2f8a4a[_0x3cae26(0x8f8)]('\x20\x20off'+_0x3cae26(0x3b6)+'\x20kind'+_0x3cae26(0x3ec)+_0x3cae26(0x5d1)+_0x3cae26(0xb7a)+_0x3cae26(0x3ec)+'\x20\x20\x20\x20\x20'+'raw');for(var _0x3bc11e=-0x15d5+0x2*-0xa79+-0xe9*-0x2f;_0x368390[_0x3cae26(0x36b)](_0x3bc11e,_0x5ef7fe[_0x3cae26(0xcc0)+'h']);_0x3bc11e++){var _0x525231=_0x5ef7fe[_0x3bc11e],_0x1346d8=_0x368390[_0x3cae26(0x9bc)](typeof _0x525231['v'],_0x3cae26(0x93b)+'r')?Math['round'](_0x525231['v']*(-0xbd4+0xd66+0x256))/(0x3c7*0x3+-0xd*0xd6+-0x1*-0x371):_0x525231['v'];_0x2f8a4a[_0x3cae26(0x8f8)](_0x368390['xqUVX'](_0x368390['etkSj'](_0x368390['TpNav'](_0x368390[_0x3cae26(0x32a)]('\x20\x20',_0x368390['FGWoE']('0x',_0x525231['o'][_0x3cae26(0x258)+_0x3cae26(0x5f9)](0x1180+-0x3b7*-0x1+0x43b*-0x5))[_0x3cae26(0x673)+'d'](-0x12b9+0x1*-0x1298+0x2559*0x1))+'\x20',_0x525231['k'][_0x3cae26(0x673)+'d'](-0x2113*0x1+0xb*-0x336+0x4470)),'\x20')+String(_0x1346d8)['padEn'+'d'](0x1635+-0x456+0x1*-0x11cf),'\x20')+(_0x525231[_0x3cae26(0xd6b)]||''));}_0x2f8a4a[_0x3cae26(0x8f8)]('');}if(_0x46a3b2[_0x3cae26(0xaf1)+'ngs']&&_0x46a3b2[_0x3cae26(0xaf1)+'ngs'][_0x3cae26(0xcc0)+'h']){_0x2f8a4a['push']('warni'+_0x3cae26(0xe64));for(var _0x2e1c1e=0xf16*-0x1+-0x1*0x1426+-0xa*-0x386;_0x2e1c1e<_0x46a3b2[_0x3cae26(0xaf1)+_0x3cae26(0xe64)][_0x3cae26(0xcc0)+'h'];_0x2e1c1e++)_0x2f8a4a['push'](_0x3cae26(0x800)+_0x46a3b2[_0x3cae26(0xaf1)+_0x3cae26(0xe64)][_0x2e1c1e]);}return _0x2f8a4a[_0x3cae26(0xe4b)]('\x0a');}window[_0x189e9a(0xc29)+_0x189e9a(0x457)+_0x189e9a(0xddd)+'r'](_0x368390[_0x189e9a(0xeb7)],function(_0x22d097){var _0x199b7a=_0x189e9a,_0x4b1cc0=_0x22d097[_0x199b7a(0x20e)];if(!_0x4b1cc0||_0x4b1cc0['__sak'+'ura']!==_0x5c5620)return;try{if(_0x368390['OuseI'](_0x4b1cc0[_0x199b7a(0xb9b)],_0x368390[_0x199b7a(0xe2f)])){_0x318079()[_0x199b7a(0x6ea)]({'host':_0x4b1cc0[_0x199b7a(0x311)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x368390['vwnwU'](_0x4b1cc0[_0x199b7a(0xb9b)],_0x199b7a(0x83f)+'t'))_0x318079()['set'](_0x4b1cc0[_0x199b7a(0x83f)+'t']);}catch(_0x287e3d){console[_0x199b7a(0xd9d)](_0x368390[_0x199b7a(0xc51)],_0x368390['pYfDX'](_0x199b7a(0x995)+':',_0x327aec),_0x287e3d);}});function _0x4a4ecf(){var _0x28cf2e=_0x189e9a,_0x378ad3={'tkhxA':_0x28cf2e(0xb97),'qjRhF':'u16','XodIK':'i32','EcqXk':_0x28cf2e(0x815)};if(_0x28cf2e(0xabd)!==_0x368390[_0x28cf2e(0xb04)])_0x1f9c4b(!![]);else{_0x19000c['ok']++;switch(_0x228d31){case'u8':return _0x9fb2b4[_0x28cf2e(0xba2)+_0x28cf2e(0x4a6)](_0x1a883c);case'i8':return _0xc8e796[_0x28cf2e(0xbab)+'t8'](_0x48a03d);case _0x378ad3[_0x28cf2e(0x811)]:return _0x262a54['getIn'+_0x28cf2e(0xd23)](_0x27f934,!![]);case _0x378ad3[_0x28cf2e(0x288)]:return _0x2dd2ca[_0x28cf2e(0xba2)+_0x28cf2e(0x6eb)](_0x5edf54,!![]);case _0x378ad3['XodIK']:return _0x4ca9a4['getIn'+_0x28cf2e(0x9ca)](_0x1f21ed,!![]);case _0x28cf2e(0xe68):return _0x2d1334['getUi'+'nt32'](_0x488554,!![]);case'f32':return _0x5450d5[_0x28cf2e(0xb8c)+'oat32'](_0x41135b,!![]);case _0x378ad3[_0x28cf2e(0x72b)]:return _0x57865e['getFl'+_0x28cf2e(0x3b1)](_0x2bee99,!![]);case'v2':case'v3':case'v4':return _0x1aef88[_0x28cf2e(0xb8c)+_0x28cf2e(0x4af)](_0x49de16,!![]);default:return _0x314cdf['getIn'+'t32'](_0x217030,!![]);}}}if(document[_0x189e9a(0xe8e)])_0x4a4ecf();else document['addEv'+'entLi'+_0x189e9a(0xddd)+'r'](_0x189e9a(0xb47)+'ntent'+'Loade'+'d',_0x4a4ecf,{'once':!![]});return;}window[_0x189e9a(0x403)+_0x189e9a(0x65b)+_0x189e9a(0xea4)]=window[_0x189e9a(0x403)+_0x189e9a(0x65b)+'W__']||{'at':Date[_0x189e9a(0x3b9)]()};function _0xd6ee79(_0x286aa9,_0x4e6340){var _0x2660e9=_0x189e9a,_0x1e0dd2={'__sakura':_0x5c5620,'kind':_0x286aa9};if(_0x4e6340){for(var _0x4e8c74 in _0x4e6340)_0x1e0dd2[_0x4e8c74]=_0x4e6340[_0x4e8c74];}try{if('MVIsK'!==_0x368390['GmmJF']){if(window['paren'+'t']&&window[_0x2660e9(0x6f2)+'t']!==window)window[_0x2660e9(0x6f2)+'t'][_0x2660e9(0x4fd)+_0x2660e9(0x22b)+'e'](_0x1e0dd2,'*');}else _0x29da04=!_0x5747bb,_0x3b9802();}catch(_0x4d6582){}try{if(_0x2660e9(0x39c)!==_0x2660e9(0x39c))_0x5263cb='LIVE\x20'+'·\x20'+_0xb0b6c4[_0x2660e9(0x8be)](_0x93fac0['insta'+_0x2660e9(0x5dd)])[_0x2660e9(0xcc0)+'h']+(_0x2660e9(0xa1b)+'cts\x20·'+'\x20')+_0x28ccdc+'s',_0x3d7aa7=_0x368390['bBnhP'];else{if(window[_0x2660e9(0xb12)]&&window['top']!==window)window[_0x2660e9(0xb12)]['postM'+_0x2660e9(0x22b)+'e'](_0x1e0dd2,'*');}}catch(_0x178c40){}}console['log']('%c[sa'+'kura]'+_0x189e9a(0x24e)+'LAYER'+_0x189e9a(0x660)+_0x189e9a(0x5a0)+_0x51cafc,_0x368390['RsDxi']+_0x327aec+(_0x189e9a(0xcf4)+'-weig'+_0x189e9a(0x412)+_0x189e9a(0xaa0)+'t-siz'+_0x189e9a(0xab7)+'x'),{'host':_0x5cac3c,'href':location['href'],'version':_0x51cafc}),_0xd6ee79(_0x368390[_0x189e9a(0xe2f)],{'host':_0x5cac3c,'role':_0x402ddf});var _0x5ef975=window['__SAK'+'URA_S'+_0x189e9a(0xea4)]&&window['__SAK'+'URA_S'+_0x189e9a(0xea4)]['at']||Date[_0x189e9a(0x3b9)]();window['addEv'+'entLi'+_0x189e9a(0xddd)+'r'](_0x189e9a(0x2ab)+'ge',function(_0x27a271){var _0x2bb0cd=_0x189e9a;try{var _0x4f1781=_0x27a271&&_0x27a271[_0x2bb0cd(0x20e)];if(!_0x4f1781||_0x4f1781[_0x2bb0cd(0x8e8)+'ura']!==_0x5c5620||_0x368390[_0x2bb0cd(0x300)](_0x4f1781[_0x2bb0cd(0xb9b)],_0x2bb0cd(0xda7)))return;_0xf0daa6(_0x4f1781[_0x2bb0cd(0xda7)],_0x4f1781[_0x2bb0cd(0xce7)]);}catch(_0x23dfc2){}});try{var _0x448421=new BroadcastChannel(_0x189e9a(0x5ca)+_0x189e9a(0xd74));_0x448421['onmes'+_0x189e9a(0xe5e)]=function(_0x22c6f7){var _0x51d8bd=_0x189e9a,_0x4fccf6={'SsCdg':function(_0x1f1a95,_0x53eeba){return _0x1f1a95>_0x53eeba;}};if('yUVGv'===_0x368390[_0x51d8bd(0x71d)]){_0x45cd56['ok']=![],_0x23f312[_0x51d8bd(0xa97)]=_0x47ac44,_0x10f3f5['misse'+'s']++;if(_0x4fccf6[_0x51d8bd(0x9e0)](_0xf7386e['misse'+'s'],_0x4cc19f))return _0xe9adfc['quat']=null,_0x5859a4[_0x51d8bd(0xd5c)]=null,_0x506bc4[_0x51d8bd(0x90e)]=null,_0xf05a13;return _0x4e1c89[_0x51d8bd(0xa67)]++,_0x5d9480;}else{var _0x356b51=_0x22c6f7[_0x51d8bd(0x20e)];if(_0x356b51&&_0x356b51[_0x51d8bd(0x8e8)+'ura']===_0x5c5620&&_0x368390[_0x51d8bd(0xcfd)](_0x356b51['kind'],_0x51d8bd(0xda7)))_0xf0daa6(_0x356b51[_0x51d8bd(0xda7)],_0x356b51[_0x51d8bd(0xce7)]);}};}catch(_0x40dcc2){}var _0x47cb91=[];(function _0x510fdd(){var _0x105320=_0x189e9a,_0x4a8815=[_0x368390['WWCtk'],_0x105320(0xd9d),_0x105320(0x8d9),_0x105320(0xc2c),_0x368390[_0x105320(0xbb7)]];for(var _0x5a861d=0xad9+0x766+-0x123f;_0x368390[_0x105320(0x36b)](_0x5a861d,_0x4a8815[_0x105320(0xcc0)+'h']);_0x5a861d++){(function(_0x149484){var _0x541412=_0x105320,_0x58373a={'qgpzW':_0x541412(0x4d3)+_0x541412(0x2ca)+_0x541412(0xa5d)+'nc','IQjpd':_0x368390['gdWkh'],'NddUk':_0x368390[_0x541412(0x8aa)],'EyNpb':function(_0x474143,_0x7a2dcd){return _0x474143<_0x7a2dcd;},'lypWV':'OzLyz','kbKkA':function(_0x3ddb39,_0x5a1c5c){return _0x3ddb39===_0x5a1c5c;},'cVISK':function(_0x57e3ec,_0x4a4ef9){return _0x57e3ec<_0x4a4ef9;}},_0x40248b=console[_0x149484];if(typeof _0x40248b!==_0x368390[_0x541412(0x5b0)])return;console[_0x149484]=function(){var _0x5f1d29=_0x541412,_0x1d300e={'GjLrC':_0x5f1d29(0x5ca)+_0x5f1d29(0xd74),'XSdoA':function(_0x1bdca4,_0x96bd3d){return _0x1bdca4-_0x96bd3d;},'AEZHB':function(_0x2f09eb,_0x37727c){return _0x2f09eb===_0x37727c;},'eDniQ':function(_0x5a53e9,_0xa80ce5){return _0x5a53e9+_0xa80ce5;},'CuluT':_0x58373a[_0x5f1d29(0x741)],'llbyc':function(_0x497632,_0x51c3b3,_0x2fa549){return _0x497632(_0x51c3b3,_0x2fa549);},'CwuAb':function(_0x50d983,_0x38cd98,_0x5de157,_0x2fb49f){return _0x50d983(_0x38cd98,_0x5de157,_0x2fb49f);},'TfJmd':_0x58373a['IQjpd']};try{if(_0x58373a[_0x5f1d29(0x919)]===_0x5f1d29(0x7c4)){var _0x511309='';for(var _0x45bb19=0x172*0xb+-0xd1*-0x29+0x1*-0x315f;_0x58373a[_0x5f1d29(0x28e)](_0x45bb19,arguments['lengt'+'h']);_0x45bb19++){if('Qndvh'===_0x58373a[_0x5f1d29(0x7a5)]){var _0x3282f4=new _0x217095(_0x1d300e['GjLrC']);_0x3282f4[_0x5f1d29(0xdcf)+'sage']=function(_0xcd3053){var _0x32fc55=_0x5f1d29,_0x2dd503=_0xcd3053[_0x32fc55(0x20e)];if(_0x2dd503&&_0x2dd503[_0x32fc55(0x8e8)+_0x32fc55(0x69c)]===_0x302fc7&&_0x2dd503[_0x32fc55(0xb9b)]===_0x32fc55(0xda7))_0x43c6e4(_0x2dd503['cmd'],_0x2dd503[_0x32fc55(0xce7)]);};}else{var _0x4f2b18=arguments[_0x45bb19];if(typeof _0x4f2b18===_0x5f1d29(0x4c9)+'g')_0x511309+=_0x4f2b18;else{if(_0x4f2b18&&_0x4f2b18[_0x5f1d29(0x2ab)+'ge'])_0x511309+=_0x4f2b18[_0x5f1d29(0x2ab)+'ge'];}}}if(_0x511309[_0x5f1d29(0xbdf)+'Of'](_0x175ac7)!==-(0xce0+-0x12d5*0x1+-0x5f6*-0x1))return _0x40248b['apply'](console,arguments);if(_0x511309[_0x5f1d29(0xbdf)+'Of']('Unity'+_0x5f1d29(0x917)+_0x5f1d29(0xcdd))!==-(-0x1afc+-0x2*0x2d1+0x209f)){var _0x196700=_0x511309['slice'](0x9*-0x241+0x787+0x661*0x2,-0x15fc+-0x89*0x1f+0x27bf*0x1);if(_0x58373a[_0x5f1d29(0xb27)](_0x47cb91['index'+'Of'](_0x196700),-(-0x11e7+-0x141*-0x12+-0x4aa))&&_0x58373a['cVISK'](_0x47cb91[_0x5f1d29(0xcc0)+'h'],-0x3d*-0x4a+0x260+-0x13c6))_0x47cb91[_0x5f1d29(0x8f8)](_0x196700);}}else{var _0x40acdb=(_0x5f1d29(0xd8a)+'|0|2|'+'6|1')[_0x5f1d29(0x464)]('|'),_0x2fc2f5=-0x3*-0x8cd+-0x2f5*-0xb+-0x31a*0x13;while(!![]){switch(_0x40acdb[_0x2fc2f5++]){case'0':_0x3461c8[_0x5f1d29(0xda0)+_0x5f1d29(0x651)+'s']=_0x1d300e[_0x5f1d29(0x4bf)](_0x1a394e[_0x5f1d29(0xda0)+_0x5f1d29(0x781)],_0x2b00ac);continue;case'1':_0x30eb3c[_0x5f1d29(0x274)+'rs'][_0x5f1d29(0x8f8)](_0x3461c8);continue;case'2':_0x3461c8[_0x5f1d29(0xce8)+'al']=!!_0x149017&&_0x1d300e[_0x5f1d29(0xe8a)](_0x3461c8['refs']['fps'],_0x1d300e[_0x5f1d29(0xccf)]('0x',_0x1e8a61[_0x5f1d29(0x258)+_0x5f1d29(0x5f9)](0x3d*-0x31+-0x2408+0x2fc5)));continue;case'3':_0x3461c8[_0x5f1d29(0xe3e)]=_0x1a394e[_0x5f1d29(0xe3e)];continue;case'4':var _0x3461c8=_0x679fb9(_0x1d300e[_0x5f1d29(0x740)],_0x1a394e[_0x5f1d29(0xe9d)]);continue;case'5':var _0x1a394e=_0x43ee4d[_0x2ad58f[_0x59eaad]];continue;case'6':if(_0x3461c8['refs']['healt'+'h']){var _0xb18e1e=_0x1d300e[_0x5f1d29(0x74b)](_0x1b7387,_0x3461c8['refs'][_0x5f1d29(0x7d3)+'h'],-0xf1+0xfdb*0x2+-0x1eb5);_0x3461c8[_0x5f1d29(0x7d3)+'h']=_0x1d300e[_0x5f1d29(0x9d2)](_0x5c225e,_0xb18e1e,_0x5f1d29(0xccc)+_0x5f1d29(0x663)+'pt',_0x1d300e[_0x5f1d29(0x7e2)]);}continue;}break;}}}catch(_0x482a5e){}return _0x40248b[_0x5f1d29(0xd96)](console,arguments);};}(_0x4a8815[_0x5a861d]));}}());var _0x55d472={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x207f8e=null,_0x4c258e=null,_0x335ef8=-(0xd6c*0x2+-0x20ba+0x5e3),_0x4e683c=null;function _0x25a8c3(_0xe97c87){var _0x383c9e=_0x189e9a,_0x4a026a={'iAGRz':function(_0x3aede9,_0x52e96a){return _0x3aede9>=_0x52e96a;},'EohNO':_0x368390[_0x383c9e(0x3e5)]};if(_0x368390[_0x383c9e(0xabe)](_0x368390['IDaoe'],_0x368390[_0x383c9e(0x575)]))return _0x5d1c10[_0x383c9e(0x494)+'Selec'+_0x383c9e(0x702)](_0x383c9e(0x77d)+'-a=\x22'+_0x2fb2b1+'\x22]');else try{if(_0x383c9e(0xaba)!==_0x368390[_0x383c9e(0x479)]){if(!_0xe97c87)return;var _0x2e8d64=_0xe97c87[_0x383c9e(0x571)+'nce']?_0xe97c87[_0x383c9e(0x571)+_0x383c9e(0x35f)][_0x383c9e(0xeae)+'ts']:_0xe97c87[_0x383c9e(0xeae)+'ts']||null;if(!_0x2e8d64)return;if(!_0x4e683c)try{if(_0x368390[_0x383c9e(0x9e8)]!==_0x383c9e(0xdc6)){if(_0x4a026a[_0x383c9e(0x94d)](_0x3dd19f[_0x4c9215]['membe'+'rs'][_0x383c9e(0xcc0)+'h'],_0x1dff7b))_0x5e4449[_0x383c9e(0x8f8)](_0x228410[_0x636eae]);}else _0x4e683c=Object['keys'](_0x2e8d64)[_0x383c9e(0x1dd)](-0x40*-0x91+-0x2*-0x1016+0x1d*-0x25c,-0xd19+0x2*-0x10f+0xf4f);}catch(_0x4499a8){}var _0x573a67=_0x2e8d64[_0x383c9e(0xac5)+'y'];_0x573a67&&_0x573a67['buffe'+'r']&&_0x573a67[_0x383c9e(0x26f)+'r'][_0x383c9e(0x409)+_0x383c9e(0x23a)]>0x26f0+0x1610+-0x4*0xf40&&(_0x4c258e=_0x573a67,_0x335ef8=Date['now']()-_0x5ef975);}else{if(_0x4bfb08)_0x262e6d[_0x383c9e(0xab4)+_0x383c9e(0xa15)+'t']=_0x4a026a['EohNO'];}}catch(_0x210733){}}function _0x2b06c2(){var _0x27cae9=_0x189e9a;try{if(typeof WebAssembly==='undef'+_0x27cae9(0xc62))return;var _0x172c51=['insta'+_0x27cae9(0xb90)+'e',_0x27cae9(0x571)+_0x27cae9(0xb90)+_0x27cae9(0x984)+_0x27cae9(0xa44)];for(var _0x4b3f19=-0x1*0x1a2d+0x4*0x178+0x144d;_0x4b3f19<_0x172c51[_0x27cae9(0xcc0)+'h'];_0x4b3f19++){(function(_0x408cce){var _0x4ef639=_0x27cae9,_0x5b6a0e={'ERUzd':_0x368390['NiRDo'],'xHMau':_0x4ef639(0x550)+'ion'},_0x364f0d=WebAssembly[_0x408cce];if(typeof _0x364f0d!==_0x4ef639(0x550)+'ion'||_0x364f0d['__sak'+_0x4ef639(0xc69)+'moryT'+'ap'])return;var _0x13cc2d=function(){var _0x139be3=_0x4ef639;if(_0x5b6a0e[_0x139be3(0x278)]==='aHnKQ')return![];else{var _0x53d930=_0x364f0d[_0x139be3(0xd96)](this,arguments);try{if(_0x53d930&&typeof _0x53d930[_0x139be3(0xea5)]===_0x5b6a0e['xHMau'])_0x53d930[_0x139be3(0xea5)](_0x25a8c3,function(){});else _0x25a8c3(_0x53d930);}catch(_0x44fcec){}return _0x53d930;}};_0x13cc2d[_0x4ef639(0x8e8)+_0x4ef639(0xc69)+'moryT'+'ap']=!![];try{Object[_0x4ef639(0x27c)+_0x4ef639(0x2c3)+'erty'](_0x13cc2d,_0x4ef639(0xa41),{'value':_0x364f0d[_0x4ef639(0xa41)],'configurable':!![]});}catch(_0x5d50b1){}WebAssembly[_0x408cce]=_0x13cc2d;}(_0x172c51[_0x4b3f19]));}}catch(_0x58d5f7){}}var _0x2af87f=null,_0x1c2ae7=null,_0x3bbae7={},_0x4eb568={'MouseLook':[{'name':_0x368390[_0x189e9a(0x317)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u0094\u0090\u0089\u008f\u0089'+_0x189e9a(0x6aa)+'\u008e','ret':_0x189e9a(0xb88),'params':[_0x368390[_0x189e9a(0x2a7)]],'wasmParams':['i32',_0x368390['sgEMu']]},{'name':_0x368390[_0x189e9a(0x55e)],'ret':_0x189e9a(0xb88),'params':[_0x368390['yKwOB']],'wasmParams':[_0x189e9a(0xbf1),'f32']},{'name':'\u0086\u0093\u0094\u008b\u0092'+_0x189e9a(0x42e)+'\u0095','ret':_0x368390['ANrKa'],'params':[_0x368390[_0x189e9a(0x2a7)]],'wasmParams':['i32','f32']},{'name':_0x189e9a(0xa33)+_0x189e9a(0x1c1)+'\u0091','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':'\u008d\u0091\u0092\u0093\u0088'+_0x189e9a(0x25c)+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x368390['KCnJe'],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':['i32']},{'name':_0x189e9a(0xb5f)+_0x189e9a(0xdef),'ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x368390['vlSVI'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x3b4)+_0x189e9a(0x563)+'\u0095','ret':_0x368390[_0x189e9a(0x2a7)],'params':[],'wasmParams':[_0x368390['kgqtG']],'wasmRet':_0x368390['sgEMu']},{'name':_0x189e9a(0x81d)+_0x189e9a(0xbbc)+'\u0090','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390[_0x189e9a(0xb8e)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x368390[_0x189e9a(0x2a7)]],'wasmParams':[_0x189e9a(0xbf1),_0x189e9a(0x2f6)]},{'name':_0x368390[_0x189e9a(0x96d)],'ret':'float','params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x368390[_0x189e9a(0xb15)]},{'name':'\u008d\u0095\u0088\u0092\u008c'+_0x189e9a(0x3eb)+'\u0092','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x189e9a(0x774)+'\u0087\u0087\u008c\u0086\u0086'+'\u0091','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x368390['pHxeX'],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x840)+'\u0089\u008d\u008f\u0087\u0091'+'\u0093','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xb2d)+'\u008a\u0092\u0092\u008a\u0093'+'\u008a','ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x368390[_0x189e9a(0x2a7)],_0x368390['yKwOB']],'wasmParams':[_0x368390[_0x189e9a(0x674)],_0x189e9a(0x2f6),_0x189e9a(0x2f6)]},{'name':_0x189e9a(0xbbd)+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','ret':'float','params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x368390[_0x189e9a(0xb15)]},{'name':_0x189e9a(0x2a2)+_0x189e9a(0x3f0)+'\u0088','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390['xKLzm'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xace)+'\u0090\u0091\u008e\u008f\u0089'+'\u008e','ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x189e9a(0x924)],'wasmParams':['i32',_0x189e9a(0x2f6)]},{'name':'\u008c\u0093\u0091\u008a\u0089'+_0x189e9a(0x934)+'\u0088','ret':_0x368390['yKwOB'],'params':[],'wasmParams':[_0x189e9a(0xbf1)],'wasmRet':_0x189e9a(0x2f6)},{'name':_0x368390[_0x189e9a(0x96f)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x189e9a(0x924),_0x189e9a(0x924)],'wasmParams':[_0x368390['kgqtG'],_0x189e9a(0x2f6),'f32']},{'name':'\u0089\u0091\u0086\u0093\u008f'+_0x189e9a(0x3c7)+'\u008d','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x189e9a(0x46e)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x1d1)+_0x189e9a(0x355)+'\u008b','ret':_0x189e9a(0xb88),'params':['float'],'wasmParams':[_0x189e9a(0xbf1),_0x189e9a(0x2f6)]},{'name':_0x189e9a(0xc1f)+_0x189e9a(0x904)+'\u0093','ret':_0x368390[_0x189e9a(0x2a7)],'params':[],'wasmParams':[_0x189e9a(0xbf1)],'wasmRet':_0x368390['sgEMu']},{'name':_0x189e9a(0x835)+'\u0088\u0090\u0095\u0089\u008d'+'\u008a','ret':_0x189e9a(0x924),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x368390[_0x189e9a(0xb15)]},{'name':_0x368390[_0x189e9a(0xe40)],'ret':'void','params':[_0x189e9a(0x924)],'wasmParams':[_0x189e9a(0xbf1),_0x368390[_0x189e9a(0xb15)]]},{'name':_0x189e9a(0x7ad)+_0x189e9a(0xa45)+'\u008c','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xb6a)+_0x189e9a(0xda4)+'\u0093','ret':_0x189e9a(0xb88),'params':[_0x368390[_0x189e9a(0x2a7)]],'wasmParams':[_0x368390['kgqtG'],_0x189e9a(0x2f6)]},{'name':_0x368390[_0x189e9a(0xdfd)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x368390['NayrN'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x784)+_0x189e9a(0xb69)+'\u008d','ret':_0x189e9a(0xb88),'params':[_0x368390[_0x189e9a(0x2a7)]],'wasmParams':[_0x368390[_0x189e9a(0x674)],_0x189e9a(0x2f6)]}],'FPScontroller':[{'name':_0x189e9a(0x902)+_0x189e9a(0x3db)+'\u008e','ret':_0x189e9a(0x924),'params':[],'wasmParams':[_0x368390['kgqtG']],'wasmRet':'f32'},{'name':_0x368390[_0x189e9a(0xbb8)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u0089\u008c\u0095\u0088\u008a'+_0x189e9a(0x4bc)+'\u0094','ret':_0x368390[_0x189e9a(0x1fb)],'params':[],'wasmParams':['i32'],'wasmRet':_0x189e9a(0xbf1)},{'name':_0x189e9a(0x6d8)+_0x189e9a(0x467)+'\u008b','ret':_0x189e9a(0xb88),'params':[_0x368390['IeyVK']],'wasmParams':['i32',_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x847)+_0x189e9a(0x95c)+'\u0092','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x368390[_0x189e9a(0x560)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x189e9a(0x46e)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x189e9a(0xe32)+'\u008f\u008b\u0088\u0087\u0086'+'\u0087','ret':_0x189e9a(0x752),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x368390[_0x189e9a(0x674)]},{'name':'\u0094\u008d\u0087\u0087\u008a'+_0x189e9a(0x362)+'\u0087','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xd50)+_0x189e9a(0x5bd)+'\u0093','ret':'bool','params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x368390[_0x189e9a(0x674)]},{'name':_0x368390[_0x189e9a(0xa88)],'ret':_0x189e9a(0x752),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x189e9a(0xbf1)},{'name':'\u0089\u0088\u0093\u008b\u008b'+_0x189e9a(0x535)+'\u0094','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x189e9a(0xe41)+_0x189e9a(0x234)+'\u0095','ret':'void','params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':'\u0086\u0095\u008b\u0086\u0091'+_0x189e9a(0xe74)+'\u008b','ret':_0x368390['IeyVK'],'params':[_0x368390['IeyVK'],_0x189e9a(0x752)],'wasmParams':[_0x368390['kgqtG'],'i32','i32'],'wasmRet':_0x189e9a(0xbf1)},{'name':_0x368390['QXBOI'],'ret':'void','params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x61b)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','ret':_0x368390['IeyVK'],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x189e9a(0xbf1)},{'name':_0x368390[_0x189e9a(0x719)],'ret':_0x368390[_0x189e9a(0x80c)],'params':['bool'],'wasmParams':[_0x189e9a(0xbf1),_0x189e9a(0xbf1)]},{'name':'\u0095\u008e\u0095\u0087\u0086'+'\u0090\u0089\u008f\u008e\u0093'+'\u008e','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u0091\u0088\u0095\u0088\u0088'+_0x189e9a(0x2fc)+'\u0089','ret':_0x189e9a(0x752),'params':[],'wasmParams':[_0x368390['kgqtG']],'wasmRet':_0x189e9a(0xbf1)},{'name':'\u0087\u008d\u0095\u008d\u0087'+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390['eBBdu'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':'\u008a\u008c\u0092\u0092\u0094'+_0x189e9a(0x51c)+'\u0089','ret':'void','params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x368390[_0x189e9a(0x5e7)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xe34)+'\u008f\u008b\u008e\u008d\u008f'+'\u0094','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390['hokac'],'ret':_0x189e9a(0xb88),'params':['bool'],'wasmParams':[_0x368390['kgqtG'],_0x368390[_0x189e9a(0x674)]]},{'name':'\u008f\u0092\u008d\u008d\u0089'+_0x189e9a(0x3d9)+'\u0086','ret':'void','params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u008d\u0095\u0087\u0093\u0092'+'\u0092\u0094\u0087\u008d\u008c'+'\u008b','ret':'void','params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x368390[_0x189e9a(0x6b6)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x368390[_0x189e9a(0x7b1)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x368390[_0x189e9a(0x472)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x519)+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x189e9a(0x567)+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390['eZNIH'],'ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x368390['IeyVK']],'wasmParams':[_0x368390['kgqtG'],_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xd81)+'\u0095\u008a\u0091\u0095\u0092'+'\u0090','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':['i32']},{'name':_0x189e9a(0x35e)+_0x189e9a(0x905)+'\u0095','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390[_0x189e9a(0x793)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0087\u0094\u0091\u0095\u008f'+_0x189e9a(0x9af)+'\u0087','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xa5e)+_0x189e9a(0x933)+'\u0087','ret':'void','params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0x581)+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390[_0x189e9a(0x593)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x189e9a(0x752)],'wasmParams':['i32',_0x368390['kgqtG']]},{'name':_0x368390['Xfvqe'],'ret':_0x368390['IeyVK'],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x189e9a(0xbf1)},{'name':_0x368390['gaDeh'],'ret':'bool','params':[],'wasmParams':[_0x189e9a(0xbf1)],'wasmRet':'i32'},{'name':_0x368390['nUFmf'],'ret':_0x368390[_0x189e9a(0x1fb)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':'i32'},{'name':_0x368390[_0x189e9a(0xb20)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xc13),'ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x368390[_0x189e9a(0xe54)],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':['i32']},{'name':_0x189e9a(0x5f8)+_0x189e9a(0x5ee)+'\u0091','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0089\u0086\u0090\u0088\u008c'+'\u0088\u008e\u0088\u008b\u0090'+'\u008b','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390[_0x189e9a(0x3a2)],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0x22f)+'\u0093\u0095\u0095\u0093\u008a'+'\u0094','ret':'void','params':['float'],'wasmParams':[_0x368390['kgqtG'],_0x368390[_0x189e9a(0xb15)]]},{'name':_0x189e9a(0x339)+_0x189e9a(0x95d)+'\u0092','ret':_0x368390[_0x189e9a(0x1fb)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]],'wasmRet':_0x368390['kgqtG']},{'name':_0x368390[_0x189e9a(0x967)],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u0087\u0093\u0093\u0087\u0087'+_0x189e9a(0x3dd)+'\u0094','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u0090\u0090\u008f\u008d\u008a'+_0x189e9a(0x3a1)+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x189e9a(0x4f8)+'\u008f\u0095\u0090\u0087\u008d'+'\u008c','ret':_0x189e9a(0x752),'params':[],'wasmParams':[_0x189e9a(0xbf1)],'wasmRet':'i32'},{'name':'\u0094\u008c\u008f\u008e\u008b'+_0x189e9a(0xafe)+'\u0087','ret':_0x368390['IeyVK'],'params':[_0x189e9a(0x752),_0x189e9a(0x752)],'wasmParams':[_0x368390[_0x189e9a(0x674)],'i32',_0x189e9a(0xbf1)],'wasmRet':_0x189e9a(0xbf1)},{'name':_0x189e9a(0xca9)+'e','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xc4d)+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390[_0x189e9a(0x9a2)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0x890)+'\u0094\u008a\u0092\u0087\u0092'+'\u0086','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x368390[_0x189e9a(0x7c3)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x368390['yKwOB']],'wasmParams':['i32',_0x189e9a(0x2f6)]},{'name':_0x368390[_0x189e9a(0xafb)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u008e\u008b\u0093\u0091\u008e'+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','ret':_0x368390['IeyVK'],'params':['bool',_0x189e9a(0x752)],'wasmParams':['i32',_0x368390['kgqtG'],_0x368390['kgqtG']],'wasmRet':_0x368390['kgqtG']},{'name':'\u008d\u0094\u0092\u0093\u0092'+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x189e9a(0x924),'bool'],'wasmParams':[_0x368390[_0x189e9a(0x674)],_0x189e9a(0x2f6),_0x368390['kgqtG']]},{'name':'\u0094\u0090\u0095\u0092\u008e'+_0x189e9a(0x747)+'\u008f','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xbf6)+_0x189e9a(0x5e6)+'\u008c','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390['tTUrK'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]}],'TDM_GameManager':[{'name':_0x368390['BZYxJ'],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':['i32']},{'name':_0x368390['ciUKx'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0094\u0090\u0089\u008c\u008e'+'\u008c\u008b\u008f\u008d\u0088'+'\u0089','ret':_0x368390[_0x189e9a(0x1fb)],'params':['int'],'wasmParams':['i32',_0x189e9a(0xbf1)],'wasmRet':_0x368390[_0x189e9a(0x674)]},{'name':_0x368390[_0x189e9a(0x64c)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xd95)+_0x189e9a(0xe18)+'\u008c','ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x189e9a(0x752)],'wasmParams':['i32',_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x708)+_0x189e9a(0xb37)+'\u0094','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x599)+_0x189e9a(0x253)+'\u008c','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0x25b)+'\u0086\u0095\u0095\u0091\u0089'+'\u0087','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xc13),'ret':'void','params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390[_0x189e9a(0x1eb)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0095\u008a\u008c\u008f\u0094'+_0x189e9a(0xa70)+'\u0093','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u008b\u0088\u008d\u0087\u0090'+_0x189e9a(0xa56)+'\u0094','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0093\u0087\u008f\u008f\u0093'+_0x189e9a(0xd2b)+'\u008c','ret':'void','params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':'\u0093\u008b\u008c\u008e\u0089'+'\u008a\u008e\u0092\u0095\u008b'+'\u0088','ret':'void','params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x38d)+'troy','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x368390[_0x189e9a(0x9fa)],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u008e\u0095\u008e\u0087\u0086'+_0x189e9a(0x748)+'\u0091','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x8ca)+_0x189e9a(0x56c)+'\u008a','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390[_0x189e9a(0xd0b)],'ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':['i32']},{'name':_0x368390['rapJA'],'ret':_0x368390[_0x189e9a(0x80c)],'params':[_0x189e9a(0x752)],'wasmParams':[_0x189e9a(0xbf1),'i32']},{'name':_0x189e9a(0x9a9)+'\u008a\u0088\u0092\u0095\u0094'+'\u0086','ret':_0x189e9a(0xb88),'params':['int',_0x189e9a(0xa73),_0x368390[_0x189e9a(0x73c)]],'wasmParams':['i32',_0x368390[_0x189e9a(0x674)],_0x189e9a(0xbf1),_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x6b9)+_0x189e9a(0xc6e)+'\u0089','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':['i32']},{'name':_0x368390['xqRxA'],'ret':_0x189e9a(0xb88),'params':[_0x189e9a(0xa73),'int',_0x368390['BevfJ']],'wasmParams':['i32',_0x189e9a(0xbf1),_0x189e9a(0xbf1),_0x368390['kgqtG']]},{'name':'\u0094\u0086\u008a\u008f\u008e'+_0x189e9a(0xc8e)+'\u0092','ret':_0x189e9a(0x752),'params':[],'wasmParams':[_0x368390['kgqtG']],'wasmRet':'i32'},{'name':'Updat'+'e','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0x483)+_0x189e9a(0xaf3)+'\u0087','ret':'void','params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0086\u0090\u0086\u008c\u0090'+_0x189e9a(0x303)+'\u008b','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xa53)+_0x189e9a(0xd13)+'\u0092','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0088\u0090\u0095\u008e\u0094'+_0x189e9a(0xae2)+'\u008e','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0x659)+_0x189e9a(0x29f)+'\u008c','ret':'void','params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0x4f4)+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','ret':_0x368390['ANrKa'],'params':[_0x189e9a(0x752)],'wasmParams':[_0x368390[_0x189e9a(0x674)],_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x43f)+_0x189e9a(0x537)+'\u0094','ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x189e9a(0x512)+'\u0095\u0092\u0086\u008a\u008e'+'\u008c','ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390[_0x189e9a(0x62f)],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'OnApp'+'licat'+'ionFo'+_0x189e9a(0xb0c),'ret':_0x189e9a(0xb88),'params':[_0x368390[_0x189e9a(0x1fb)]],'wasmParams':[_0x368390['kgqtG'],_0x189e9a(0xbf1)]},{'name':_0x189e9a(0xd35)+'\u008b\u0088\u0093\u0088\u0091'+'\u0095','ret':_0x368390['IeyVK'],'params':[],'wasmParams':[_0x189e9a(0xbf1)],'wasmRet':_0x368390['kgqtG']},{'name':_0x189e9a(0xc5f)+'\u0086\u008a\u0095\u0094\u008e'+'\u008f','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x368390[_0x189e9a(0x86e)],'ret':'bool','params':[_0x368390[_0x189e9a(0x73c)]],'wasmParams':[_0x368390[_0x189e9a(0x674)],_0x189e9a(0xbf1)],'wasmRet':'i32'},{'name':'\u0087\u008d\u0088\u0086\u008a'+_0x189e9a(0x3cf)+'\u008e','ret':_0x368390[_0x189e9a(0x80c)],'params':['bool'],'wasmParams':[_0x189e9a(0xbf1),_0x189e9a(0xbf1)]},{'name':_0x368390[_0x189e9a(0x228)],'ret':'void','params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390[_0x189e9a(0xc8c)],'ret':_0x368390['ANrKa'],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u008a\u008a\u008b\u008f\u0092'+'\u0088\u008c\u0087\u008e\u0087'+'\u008c','ret':_0x189e9a(0xb88),'params':[_0x368390[_0x189e9a(0x73c)],'int',_0x189e9a(0xa73)],'wasmParams':[_0x189e9a(0xbf1),_0x368390['kgqtG'],_0x368390['kgqtG'],_0x368390[_0x189e9a(0x674)]]},{'name':_0x368390['tJTHg'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'Awake','ret':'void','params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':'\u0086\u0088\u0095\u0092\u0094'+_0x189e9a(0xa5a)+'\u0088','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0094\u0092\u0086\u0092\u0092'+'\u008c\u0086\u008f\u0091\u008f'+'\u008e','ret':_0x189e9a(0xb88),'params':[],'wasmParams':['i32']},{'name':_0x189e9a(0x6a7)+'\u0090\u0087\u0086\u0088\u008e'+'\u0094','ret':'void','params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x368390['ZOsTF'],'ret':_0x368390['ANrKa'],'params':[_0x368390[_0x189e9a(0x1fb)]],'wasmParams':[_0x368390[_0x189e9a(0x674)],_0x368390['kgqtG']]},{'name':'\u0088\u008f\u0094\u0095\u008a'+'\u0091\u008b\u0089\u0094\u0092'+'\u0095','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390[_0x189e9a(0xbea)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390['klPkB'],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':_0x368390['QUUxK'],'ret':_0x189e9a(0xb88),'params':[_0x189e9a(0xa73),_0x189e9a(0xa73)],'wasmParams':[_0x189e9a(0xbf1),_0x368390[_0x189e9a(0x674)],'i32']},{'name':_0x368390[_0x189e9a(0xeb6)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xe70)+'\u0093\u008b\u008c\u0094\u0095'+'\u008e','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x368390[_0x189e9a(0x674)]]},{'name':_0x189e9a(0xebf)+_0x189e9a(0x4a2)+'\u0092','ret':_0x368390['ANrKa'],'params':[_0x368390[_0x189e9a(0x1fb)]],'wasmParams':[_0x189e9a(0xbf1),'i32']},{'name':_0x189e9a(0x367)+_0x189e9a(0x290)+'\u008a','ret':_0x368390[_0x189e9a(0x80c)],'params':[],'wasmParams':[_0x189e9a(0xbf1)]},{'name':'\u0086\u008e\u0087\u0089\u008a'+'\u008e\u008e\u0094\u008f\u0095'+'\u0095','ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x368390['kgqtG']]},{'name':_0x368390[_0x189e9a(0xdf7)],'ret':_0x189e9a(0xb88),'params':[],'wasmParams':[_0x189e9a(0xbf1)]}]},_0x5dfcca=[],_0x4cf087=[],_0x1b5527={},_0x1eeccf=-0x149f+-0x36*0xac+0x38e7,_0x117f5f=![],_0x27e418=[],_0x472043=[{'type':'FPSco'+'ntrol'+'ler','keep':!![]},{'type':_0x189e9a(0xccc)+_0x189e9a(0x663)+'pt','keep':!![]},{'type':'Weapo'+_0x189e9a(0xd45)+_0x189e9a(0x5ed),'keep':![]},{'type':_0x368390['DrXVi'],'keep':!![]},{'type':_0x189e9a(0x9e7)+'meMan'+_0x189e9a(0x320),'keep':!![]},{'type':_0x189e9a(0x4d3)+_0x189e9a(0x2ca)+_0x189e9a(0xa5d)+'nc','keep':!![],'many':!![]},{'type':'Netwo'+'rkPla'+_0x189e9a(0xdab)+_0x189e9a(0xe87)+_0x189e9a(0xe12),'keep':!![],'many':!![]},{'type':'NPC_C'+_0x189e9a(0x67d)+'ler','keep':!![],'many':!![]},{'type':_0x368390['RctPK'],'keep':!![],'many':!![]}],_0x26be39=['Assem'+_0x189e9a(0x9ff)+'Sharp'+'.dll','Assem'+_0x189e9a(0x9ff)+_0x189e9a(0xe6c)+'-firs'+'tpass'+'.dll',_0x368390[_0x189e9a(0x6dd)],'cInpu'+'t.dll',_0x368390[_0x189e9a(0x1c6)],_0x368390[_0x189e9a(0xe10)]];(function _0xfe4128(){var _0x264355=_0x189e9a;try{if('iqDQl'===_0x368390['Yfhmo'])return _0x35ca12[_0x264355(0xe5f)];else{var _0x5d1c20=window[_0x264355(0xd88)+'WebMo'+_0x264355(0xcdd)]&&window[_0x264355(0xd88)+'WebMo'+'dkit'][_0x264355(0x79a)+'me'];if(!_0x5d1c20||typeof _0x5d1c20[_0x264355(0x631)+_0x264355(0x5f7)+'in']!==_0x368390[_0x264355(0x5b0)]){_0x55d472[_0x264355(0x8d9)]='Runti'+_0x264355(0xbe2)+_0x264355(0xc6b)+_0x264355(0x6e8)+_0x264355(0x6fa)+'ailab'+'le';return;}_0x55d472[_0x264355(0xcc3)+'pted']=!![],_0x1c2ae7=_0x5d1c20[_0x264355(0x631)+_0x264355(0x5f7)+'in']({'name':_0x368390['sOGZd'],'version':_0x51cafc,'referencedAssemblies':_0x26be39[_0x264355(0x1dd)]()}),_0x55d472['ok']=!![];try{var _0x4def5b=window[_0x264355(0xd88)+_0x264355(0x917)+'dkit'][_0x264355(0x79a)+'me'];_0x4def5b['__sak'+_0x264355(0x6b5)+'g']=_0x368390['ihvtM'](_0x51cafc+':',Math[_0x264355(0xa3f)+'m']()[_0x264355(0x258)+'ing'](-0x18db+-0x1*0x1f0d+-0x22*-0x1a6)[_0x264355(0x1dd)](-0x18*-0xf1+0x1a35+-0x30cb,-0x593*-0x3+0x19b1+-0x2a60)),_0x207f8e=_0x4def5b['__sak'+_0x264355(0x6b5)+'g'];}catch(_0x577f1d){}_0x3af691(),_0xd21b1c(),_0x55d472['hooks'+'Regis'+_0x264355(0x822)]=_0x5dfcca['lengt'+'h'],_0x2b06c2(),_0x55d472[_0x264355(0xac5)+'yTap']=!![];}}catch(_0x4d343f){_0x55d472[_0x264355(0x8d9)]=_0x368390[_0x264355(0xdc7)](String,_0x4d343f&&_0x4d343f[_0x264355(0x2ab)+'ge']||_0x4d343f);}}());var _0x3381f7=new Float32Array(0x1b25+0x1ee7+-0x1*0x3a0b),_0x2b96ec=new Int32Array(_0x3381f7[_0x189e9a(0x26f)+'r']);function _0x55798a(_0x2600a0){return _0x3381f7[-0x25f*0xf+0x9d2+0x19bf]=_0x2600a0,_0x2b96ec[0xb2c+-0x1*0x1d83+0x1257*0x1];}function _0x57b42f(_0x11d78d){var _0x4f6b24=_0x189e9a;return _0x2b96ec[-0x17*0x3d+0x12f0+-0x109*0xd]=_0x368390[_0x4f6b24(0x922)](_0x11d78d,0x1825*0x1+-0x1733+-0xf2*0x1),_0x3381f7[-0x1296+-0x1461+0xaf*0x39];}var _0xd13a81={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x318fc9(){var _0x3e39f5=_0x189e9a;try{if(_0x1c2ae7&&_0x1c2ae7['_runt'+_0x3e39f5(0xbc1)]){var _0x15a0bd=_0x1c2ae7['_runt'+'ime'];if(typeof _0x15a0bd[_0x3e39f5(0xc9f)+_0x3e39f5(0x893)+'e']==='funct'+_0x3e39f5(0x762)){var _0x100834=_0x15a0bd['resol'+'veGam'+'e']();if(_0x100834)return _0xd13a81['sourc'+'e']=_0x3e39f5(0x1c8)+_0x3e39f5(0x4f0)+'ntime'+_0x3e39f5(0x772)+'lveGa'+_0x3e39f5(0x238),_0x100834;}if(_0x15a0bd[_0x3e39f5(0x379)])return _0xd13a81['sourc'+'e']=_0x368390['Lvgup'],_0x15a0bd[_0x3e39f5(0x379)];}}catch(_0x433f7b){}try{var _0x83743b=window[_0x3e39f5(0xd88)+'WebMo'+_0x3e39f5(0xcdd)]&&window['Unity'+_0x3e39f5(0x917)+'dkit'][_0x3e39f5(0x79a)+'me'];if(_0x83743b&&_0x368390[_0x3e39f5(0xb55)](typeof _0x83743b[_0x3e39f5(0xc9f)+_0x3e39f5(0x893)+'e'],_0x368390[_0x3e39f5(0x5b0)])){var _0x2ba30e=_0x83743b['resol'+_0x3e39f5(0x893)+'e']();if(_0x2ba30e)return _0x368390['BHeBo']!=='ObSkW'?(_0x323f78['faile'+'d']++,_0x58fb77[_0x3e39f5(0x2cc)+'rror']=_0x2bc16b[_0x3e39f5(0x2cc)+_0x3e39f5(0x9e9)]||_0x368390[_0x3e39f5(0xc60)](_0x368390[_0x3e39f5(0xd43)](_0x368390[_0x3e39f5(0x6cf)],_0x3cd1a3['toStr'+'ing'](-0x1bb*-0x1+0xe*-0x8b+0x5ef))+(_0x3e39f5(0x481)+_0x3e39f5(0xdac)+_0x3e39f5(0xa6b)+'0x'),_0x5286ef[_0x3e39f5(0x409)+'ength'][_0x3e39f5(0x258)+_0x3e39f5(0x5f9)](-0x1*0xe0b+-0x1769*-0x1+-0x94e)),_0x5ac79d):(_0xd13a81[_0x3e39f5(0x8f2)+'e']='Runti'+_0x3e39f5(0x8a9)+_0x3e39f5(0xc93)+'Game('+')',_0x2ba30e);}if(_0x83743b&&_0x83743b['_game'])return _0xd13a81[_0x3e39f5(0x8f2)+'e']=_0x368390[_0x3e39f5(0x551)],_0x83743b;}catch(_0x2d2758){}try{var _0x19f16f=window[_0x3e39f5(0x5e0)+_0x3e39f5(0x2be)+_0x3e39f5(0x35f)]||window[_0x3e39f5(0x5e0)+_0x3e39f5(0xba0)]||window['game'];if(_0x19f16f)return _0xd13a81[_0x3e39f5(0x8f2)+'e']=_0x3e39f5(0xdb3)+'w\x20glo'+'bal',_0x19f16f;}catch(_0x4a7902){}try{if(_0x368390['rNnsj']!=='KQssr'){var _0x25ee0a=_0xa94410['root'];if(!_0x25ee0a||!_0x25ee0a['style'])return;_0x5a8ac7[_0x3e39f5(0x90e)]?(_0x25ee0a[_0x3e39f5(0x98e)][_0x3e39f5(0x6c0)]=_0x368390[_0x3e39f5(0xb1b)](_0x34fe62[_0x3e39f5(0x90e)]['x'],'px'),_0x25ee0a[_0x3e39f5(0x98e)]['top']=_0x522757['pos']['y']+'px',_0x25ee0a[_0x3e39f5(0x98e)][_0x3e39f5(0x603)]='auto',_0x25ee0a['style'][_0x3e39f5(0xde6)+'m']='auto'):(_0x25ee0a[_0x3e39f5(0x98e)][_0x3e39f5(0x6c0)]=_0x3e39f5(0x7d4),_0x25ee0a['style']['top']=_0x368390[_0x3e39f5(0xc10)],_0x25ee0a['style']['right']=_0x368390['uBoUy'],_0x25ee0a['style']['botto'+'m']=_0x3e39f5(0xa84));}else{if(_0x368390['TaozC'](typeof game,_0x3e39f5(0xb79)+_0x3e39f5(0xc62))&&game)return _0xd13a81['sourc'+'e']='bare\x20'+_0x3e39f5(0xd71)+_0x3e39f5(0x9f9)+'ng',game;}}catch(_0x303a15){}try{var _0x3c5b75=Object['keys'](window);for(var _0x52517a=-0xb92+0x8*0x3fb+-0x1446;_0x368390['KkFGY'](_0x52517a,_0x3c5b75[_0x3e39f5(0xcc0)+'h'])&&_0x52517a<0x1023+-0x438+-0x81*0x13;_0x52517a++){var _0x175fcf=window[_0x3c5b75[_0x52517a]];if(_0x175fcf&&typeof _0x175fcf==='objec'+'t'&&_0x175fcf['Modul'+'e']&&_0x175fcf[_0x3e39f5(0xb9e)+'e']['HEAPU'+'8']&&_0x175fcf[_0x3e39f5(0xb9e)+'e'][_0x3e39f5(0x6e5)+'8'][_0x3e39f5(0x26f)+'r'])return _0xd13a81[_0x3e39f5(0x8f2)+'e']=_0x368390['pznFu'](_0x368390[_0x3e39f5(0x69f)](_0x368390[_0x3e39f5(0x8ef)],_0x3c5b75[_0x52517a]),_0x368390[_0x3e39f5(0x70e)]),_0x175fcf;}}catch(_0x51408d){}return _0xd13a81[_0x3e39f5(0x8f2)+'e']=null,null;}function _0x314d48(){var _0x4d5bed=_0x189e9a;if('KIGeU'===_0x4d5bed(0x7d5)){var _0x185623=_0x368390[_0x4d5bed(0x614)]['split']('|'),_0x90148b=0x803+-0xfdf+0x7dc;while(!![]){switch(_0x185623[_0x90148b++]){case'0':_0x1000c2[_0x4d5bed(0xab4)+_0x4d5bed(0xa15)+'t']=_0x368390[_0x4d5bed(0x42b)];continue;case'1':var _0x276f51={'NfFIJ':function(_0x557841,_0x5e8971){return _0x368390['KoqiZ'](_0x557841,_0x5e8971);},'bdnwL':function(_0x29a166){return _0x29a166();}};continue;case'2':var _0x1000c2=_0x522c3c[_0x4d5bed(0x631)+_0x4d5bed(0x490)+'ent'](_0x4d5bed(0x973));continue;case'3':_0x5d78ab['body']['appen'+'dChil'+'d'](_0x1000c2);continue;case'4':_0x1000c2['id']='sakur'+'a-sw-'+_0x4d5bed(0x84a)+'b';continue;case'5':_0x1000c2[_0x4d5bed(0x98e)]['cssTe'+'xt']=_0x368390[_0x4d5bed(0xb1b)](_0x368390[_0x4d5bed(0xbb4)]+(_0x4d5bed(0xd57)+'round'+':rgba'+'(21,1'+_0x4d5bed(0xca6)+_0x4d5bed(0x4e6)+_0x4d5bed(0x1f6)+_0x4d5bed(0xcef)+'solid'+'\x20rgba'+_0x4d5bed(0x745)+_0x4d5bed(0x81b)+'77,.5'+_0x4d5bed(0x46d)+_0x4d5bed(0x222)),_0x107680)+';'+(_0x4d5bed(0x68c)+_0x4d5bed(0x2c0)+'ius:9'+'99px;'+'paddi'+_0x4d5bed(0x9fb)+_0x4d5bed(0x81e)+'x;fon'+_0x4d5bed(0xe48)+'x/1.4'+_0x4d5bed(0x63e)+'onosp'+_0x4d5bed(0x83e)+'onsol'+'as,mo'+_0x4d5bed(0x4f7)+'ce;');continue;case'6':_0x1000c2['oncli'+'ck']=function(){_0x276f51['NfFIJ'](_0x41b9f6,![]),_0x276f51['bdnwL'](_0xa540f4);};continue;}break;}}else{try{if(_0x368390[_0x4d5bed(0x4ec)]===_0x4d5bed(0x546))_0x2b7fdb['setIt'+'em'](_0x11e097,_0x3fd810[_0x4d5bed(0x4c9)+_0x4d5bed(0xd94)](_0x5aab3f['pos']));else{if(_0x4c258e&&_0x4c258e['buffe'+'r']&&_0x4c258e['buffe'+'r']['byteL'+'ength'])return _0xd13a81[_0x4d5bed(0x8f2)+'e']=_0xd13a81[_0x4d5bed(0x8f2)+'e']||_0x368390[_0x4d5bed(0x3bd)],new Uint8Array(_0x4c258e[_0x4d5bed(0x26f)+'r']);}}catch(_0x1207d4){}try{if(_0x4d5bed(0x359)!==_0x368390['UGRfn'])_0x501b32[_0x4d5bed(0xaf1)+'ngs']['push'](_0x368390['NzMqv']+_0x368390[_0x4d5bed(0x4ed)]);else{var _0x346962=_0x318fc9();if(_0x346962&&_0x346962['Modul'+'e']&&_0x346962['Modul'+'e'][_0x4d5bed(0x6e5)+'8']&&_0x346962[_0x4d5bed(0xb9e)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x346962['Modul'+'e']['HEAPU'+'8'];}}catch(_0x319383){}return null;}}function _0x54fc63(){var _0x22724f=_0x189e9a,_0x34c08f=_0x314d48();if(!_0x34c08f)return null;try{return new DataView(_0x34c08f['buffe'+'r'],_0x34c08f[_0x22724f(0x5ff)+_0x22724f(0x8d2)],_0x34c08f['byteL'+_0x22724f(0x23a)]);}catch(_0x7979ce){return null;}}function _0x78d2b7(_0x3469d5,_0x58d157){var _0x1408d2=_0x189e9a,_0x4ee376={'unFqA':_0x368390[_0x1408d2(0x678)],'pyxbK':'#saku'+_0x1408d2(0xa55)+_0x1408d2(0x82a)+_0x1408d2(0xdf0)+'itial'+'}'};if(_0x1408d2(0x270)!==_0x368390['PXZAC'])_0x3ff93e[_0x1408d2(0xa2e)+_0x1408d2(0xb6c)+'d'](_0x368390[_0x1408d2(0x3a7)]),_0x368390['xHdSn'](_0x34f00d);else{var _0x2a94aa=_0x54fc63();if(!_0x2a94aa)return _0xd13a81['faile'+'d']++,_0xd13a81['lastE'+_0x1408d2(0x9e9)]=_0xd13a81[_0x1408d2(0x2cc)+'rror']||_0x1408d2(0x9b8)+'APU8\x20'+'-\x20Uni'+_0x1408d2(0x786)+'stanc'+_0x1408d2(0x2b2)+_0x1408d2(0xa93)+'hable'+_0x1408d2(0x44f)+_0x1408d2(0x79a)+'me.re'+_0x1408d2(0xc93)+'Game('+_0x1408d2(0x25a)+'any\x20w'+_0x1408d2(0x5fc)+'\x20glob'+'al',undefined;if(_0x368390[_0x1408d2(0xd21)](_0x3469d5,-0x15a0+-0x5*-0x5df+-0x1*0x7bb)||_0x368390['pqKXa'](_0x3469d5+(-0xf53*0x1+0x21aa+-0x1*0x1253),_0x2a94aa[_0x1408d2(0x409)+'ength']))return _0xd13a81[_0x1408d2(0x1e2)+'d']++,_0xd13a81['lastE'+_0x1408d2(0x9e9)]=_0xd13a81['lastE'+'rror']||_0x368390['aZusI'](_0x1408d2(0x5c5)+'ss\x200x'+_0x3469d5[_0x1408d2(0x258)+_0x1408d2(0x5f9)](0xb0*0x14+-0xb9c+0x4c*-0x7)+(_0x1408d2(0x481)+_0x1408d2(0xdac)+_0x1408d2(0xa6b)+'0x'),_0x2a94aa[_0x1408d2(0x409)+'ength']['toStr'+'ing'](0xc*0xee+-0x5*-0x197+-0x130b)),undefined;try{_0xd13a81['ok']++;switch(_0x58d157){case'u8':return _0x2a94aa[_0x1408d2(0xba2)+'nt8'](_0x3469d5);case'i8':return _0x2a94aa['getIn'+'t8'](_0x3469d5);case _0x368390['CsAsS']:return _0x2a94aa[_0x1408d2(0xbab)+_0x1408d2(0xd23)](_0x3469d5,!![]);case'u16':return _0x2a94aa[_0x1408d2(0xba2)+'nt16'](_0x3469d5,!![]);case _0x1408d2(0xbf1):return _0x2a94aa[_0x1408d2(0xbab)+'t32'](_0x3469d5,!![]);case'u32':return _0x2a94aa['getUi'+_0x1408d2(0xd7a)](_0x3469d5,!![]);case'f32':return _0x2a94aa['getFl'+'oat32'](_0x3469d5,!![]);case _0x368390['aTgty']:return _0x2a94aa['getFl'+_0x1408d2(0x3b1)](_0x3469d5,!![]);case'v2':case'v3':case'v4':return _0x2a94aa['getFl'+_0x1408d2(0x4af)](_0x3469d5,!![]);default:return _0x2a94aa['getIn'+'t32'](_0x3469d5,!![]);}}catch(_0x504692){if(_0x368390['XQjZf']!=='MLYkE')return _0xd13a81[_0x1408d2(0x1e2)+'d']++,_0xd13a81[_0x1408d2(0x2cc)+_0x1408d2(0x9e9)]=_0xd13a81['lastE'+'rror']||String(_0x504692&&_0x504692['messa'+'ge']||_0x504692)[_0x1408d2(0x1dd)](0x1*-0x1f49+-0xc48+0x2b91,0x67*-0x35+0x1*0xc31+0x99a*0x1),undefined;else{if(!_0x494aec['getEl'+'ement'+_0x1408d2(0xa40)]('sakur'+_0x1408d2(0x500)+_0x1408d2(0x89e)+'s')){var _0x53de05=_0x14ffea[_0x1408d2(0x631)+_0x1408d2(0x490)+'ent']('style');_0x53de05['id']=_0x4ee376['unFqA'],_0x53de05['textC'+'onten'+'t']=_0x4ee376['pyxbK'],(_0x354494[_0x1408d2(0x31f)]||_0x23f341[_0x1408d2(0xa0e)+_0x1408d2(0x750)+_0x1408d2(0x279)])['appen'+'dChil'+'d'](_0x53de05);}return _0x4207d5=_0xa593d4[_0x1408d2(0x631)+_0x1408d2(0x490)+'ent'](_0x1408d2(0x973)),_0x5a0ecc['id']='sakur'+'a-sw-'+'v2',_0x199295['body']['appen'+_0x1408d2(0x9bf)+'d'](_0x320dc7),_0x146382;}}}}function _0x203667(_0x49c6e4,_0x2574ee,_0x2f1c7c){var _0x58ca21=_0x189e9a,_0x317021=_0x368390['xHdSn'](_0x54fc63);if(!_0x317021||_0x49c6e4<-0x219*-0x9+-0x1c48*0x1+-0x1*-0x967||_0x368390['OehRj'](_0x49c6e4,-0x150e+0x1*0x1d5c+-0x84a)>_0x317021[_0x58ca21(0x409)+'ength'])return![];try{if(_0x368390['hrccy']===_0x58ca21(0xa9e))_0x3c08cd=_0x410c7c(_0x77110c,_0x5a3fbc||-0x1b3d+-0x25db+0x414a);else{switch(_0x2574ee){case'u8':case'i8':_0x317021['setUi'+_0x58ca21(0x4a6)](_0x49c6e4,_0x2f1c7c&0x1003+0x3c5*0x2+-0x168e);break;case'i16':case _0x368390[_0x58ca21(0x6e2)]:_0x317021[_0x58ca21(0x977)+_0x58ca21(0xd23)](_0x49c6e4,_0x2f1c7c|-0x2af*-0x2+0x1*-0x1822+0x12c4,!![]);break;case _0x58ca21(0xbf1):case _0x58ca21(0xe68):_0x317021['setIn'+_0x58ca21(0x9ca)](_0x49c6e4,_0x2f1c7c|0x1*-0xe68+-0x65*0x36+0x23b6,!![]);break;case _0x368390[_0x58ca21(0xb15)]:_0x317021[_0x58ca21(0x568)+_0x58ca21(0x4af)](_0x49c6e4,_0x2f1c7c,!![]);break;default:_0x317021[_0x58ca21(0x977)+'t32'](_0x49c6e4,_0x368390[_0x58ca21(0x922)](_0x2f1c7c,0x4d*0x4a+0x1fcc+0x197*-0x22),!![]);}return!![];}}catch(_0x1c1707){return![];}}var _0x182913={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x368390[_0x189e9a(0x674)]},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x368390[_0x189e9a(0x674)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x3d978a(_0x3018bf){var _0x42f4ef=_0x189e9a,_0xaa37e2='';for(var _0x5060af=0xf2+-0x3c*0x7a+0x1ba6;_0x5060af<_0x3018bf[_0x42f4ef(0xcc0)+'h'];_0x5060af++){var _0x73a4ba=_0x3018bf[_0x5060af][_0x42f4ef(0x258)+_0x42f4ef(0x5f9)](0x10*-0x167+-0x6b7*0x1+-0x115*-0x1b);_0xaa37e2+=(_0x368390[_0x42f4ef(0x322)](_0x73a4ba['lengt'+'h'],-0x1afc+0x5*0x424+0x64a)?'0':'')+_0x73a4ba;}return _0xaa37e2;}function _0x5ea838(_0x3b41b7,_0xf4c24c,_0x324922){var _0x17b7b8=_0x189e9a,_0x960ba9={'bjtAd':function(_0x378973,_0x276b84){var _0x653b5a=_0x4f94;return _0x368390[_0x653b5a(0xe51)](_0x378973,_0x276b84);},'JEZhK':function(_0x2a92b2,_0x5d0f6d){return _0x2a92b2===_0x5d0f6d;},'qnDFm':function(_0x36c7ad,_0x53dcc8){var _0x4ec2db=_0x4f94;return _0x368390[_0x4ec2db(0x49d)](_0x36c7ad,_0x53dcc8);},'SxvkU':'Runti'+'me.cr'+_0x17b7b8(0xc6b)+_0x17b7b8(0x6e8)+_0x17b7b8(0x6fa)+'ailab'+'le','YtdXf':function(_0x496286,_0x4c5d5a){return _0x496286+_0x4c5d5a;}},_0x552bb4=_0x368390[_0x17b7b8(0xcce)](_0x54fc63);if(!_0x552bb4){if(_0x17b7b8(0x465)===_0x368390['juAkc']){if(_0x1931f1===_0x17b7b8(0xdbf))return _0x1b75d0(_0x960ba9[_0x17b7b8(0x52a)](_0x4005f8,_0xe75cea));if(_0x960ba9['JEZhK'](_0x2a4a34,'obfI'))return _0x960ba9[_0x17b7b8(0x52a)](_0x21c43a,_0x31df49)|0x4*0x71c+-0x1*0xe59+-0xe17;return _0x960ba9[_0x17b7b8(0xe49)](_0x1f1254^_0x156867,0x6*0x201+-0x1*0xe9e+0x397)!==-0x35f*0x8+-0x123e+0xf12*0x3?-0x9a7+0xe+0x1*0x99a:-0x2271+0x37+-0x111d*-0x2;}else return _0xd13a81[_0x17b7b8(0x1e2)+'d']++,_0xd13a81['lastE'+_0x17b7b8(0x9e9)]=_0xd13a81['lastE'+_0x17b7b8(0x9e9)]||_0x368390['LuoZG'],null;}if(_0xf4c24c<-0x1*-0x854+0x1d2+0x1*-0xa26||_0x368390['pqKXa'](_0xf4c24c+_0x324922,_0x552bb4['byteL'+'ength']))return _0xd13a81[_0x17b7b8(0x1e2)+'d']++,_0xd13a81['lastE'+_0x17b7b8(0x9e9)]=_0xd13a81[_0x17b7b8(0x2cc)+_0x17b7b8(0x9e9)]||_0x368390[_0x17b7b8(0x434)](_0x368390[_0x17b7b8(0xa79)](_0x17b7b8(0x5c5)+_0x17b7b8(0x1dc)+_0x368390[_0x17b7b8(0x632)](_0x3b41b7,_0xf4c24c)[_0x17b7b8(0x258)+'ing'](-0x1*-0x1869+0xc27+0x2480*-0x1),_0x17b7b8(0x481)+_0x17b7b8(0xdac)+'\x20end\x20'+'0x'),_0x552bb4[_0x17b7b8(0x409)+'ength']['toStr'+_0x17b7b8(0x5f9)](-0x6*0x64d+0x1c9*-0x1+-0x27a7*-0x1)),null;try{if(_0x368390['rdAos'](_0x368390[_0x17b7b8(0x858)],'ERnQK')){var _0x24161a=new Uint8Array(_0x324922);for(var _0x55ed7c=-0x563*0x7+-0xb61+0x3116;_0x55ed7c<_0x324922;_0x55ed7c++)_0x24161a[_0x55ed7c]=_0x552bb4['getUi'+_0x17b7b8(0x4a6)](_0x368390['UIeGh'](_0x368390[_0x17b7b8(0xb0d)](_0x3b41b7,_0xf4c24c),_0x55ed7c));return _0xd13a81['ok']++,_0x24161a;}else{var _0x4f4988=_0x11d32f[_0x17b7b8(0xd88)+_0x17b7b8(0x917)+_0x17b7b8(0xcdd)]&&_0x5298e8[_0x17b7b8(0xd88)+'WebMo'+_0x17b7b8(0xcdd)][_0x17b7b8(0x79a)+'me'];if(!_0x4f4988||typeof _0x4f4988['creat'+'ePlug'+'in']!=='funct'+_0x17b7b8(0x762)){_0x4a1a61['error']=_0x960ba9[_0x17b7b8(0x5cb)];return;}_0x51e982['attem'+'pted']=!![],_0x1fcca5=_0x4f4988[_0x17b7b8(0x631)+_0x17b7b8(0x5f7)+'in']({'name':_0x17b7b8(0x5ca)+'a-ski'+_0x17b7b8(0x92c)+'z','version':_0xc30566,'referencedAssemblies':_0x4b64c4[_0x17b7b8(0x1dd)]()}),_0x37c991['ok']=!![];try{var _0x3f4ad8=_0x1ffb99[_0x17b7b8(0xd88)+_0x17b7b8(0x917)+'dkit']['Runti'+'me'];_0x3f4ad8['__sak'+'uraTa'+'g']=_0x960ba9['YtdXf'](_0x32f091+':',_0x1aec3b[_0x17b7b8(0xa3f)+'m']()[_0x17b7b8(0x258)+_0x17b7b8(0x5f9)](-0x2*-0x51a+0x1a38+0xc*-0x306)[_0x17b7b8(0x1dd)](-0x1*-0x607+-0xd93+0x1*0x78e,0xe8e+-0x1f70+0xc*0x169)),_0x493863=_0x3f4ad8['__sak'+_0x17b7b8(0x6b5)+'g'];}catch(_0xef2d5d){}_0x3a426c(),_0x400663(),_0x440dbd[_0x17b7b8(0x89a)+_0x17b7b8(0x640)+_0x17b7b8(0x822)]=_0xde463a[_0x17b7b8(0xcc0)+'h'],_0x28af46(),_0x3aba08[_0x17b7b8(0xac5)+'yTap']=!![];}}catch(_0x3e3a65){return _0xd13a81[_0x17b7b8(0x1e2)+'d']++,_0xd13a81[_0x17b7b8(0x2cc)+_0x17b7b8(0x9e9)]=_0xd13a81[_0x17b7b8(0x2cc)+'rror']||String(_0x3e3a65&&_0x3e3a65['messa'+'ge']||_0x3e3a65)['slice'](0x22d*0x4+-0xd*0x2a9+0x19e1,-0x20f9*0x1+-0x17ff*0x1+0x3970),null;}}function _0x43f237(_0x131c5e,_0x3b3670,_0x14edb8){var _0x185771=_0x189e9a;if(_0x368390['rzEkF'](_0x185771(0x451),_0x368390[_0x185771(0x5a8)]))_0x86fcda[_0x185771(0x358)]=_0x5bbe01,_0x110d55['v']=_0x2c5a4b[-0x2045+0xc88*0x2+0x735];else{var _0x29be9f=_0x182913[_0x14edb8],_0x3617db=_0x5ea838(_0x131c5e,_0x3b3670,_0x29be9f['size']);if(!_0x3617db)return null;var _0x591f18=new DataView(_0x3617db['buffe'+'r'],_0x3617db['byteO'+_0x185771(0x8d2)],_0x3617db['byteL'+'ength']),_0x941846=_0x591f18[_0x185771(0xbab)+_0x185771(0x9ca)](_0x29be9f[_0x185771(0x8b8)],!![]),_0x1c85ed=_0x591f18['getIn'+'t32'](_0x29be9f[_0x185771(0xa4f)+'n'],!![]),_0x36085a=_0x591f18['getUi'+_0x185771(0x4a6)](_0x29be9f['inite'+'d'])&0xb1*-0xb+0x7*-0x18d+0x1277,_0x36bdf4=_0x368390['CDtBd'](_0x14edb8,'obfF')?_0x591f18['getFl'+'oat32'](_0x29be9f['fake'],!![]):_0x14edb8===_0x368390['gdWkh']?_0x591f18[_0x185771(0xbab)+'t32'](_0x29be9f[_0x185771(0xc3c)],!![]):_0x591f18['getUi'+_0x185771(0x4a6)](_0x29be9f[_0x185771(0xc3c)]),_0x32d437=_0x591f18[_0x185771(0xba2)+_0x185771(0x4a6)](_0x29be9f[_0x185771(0x6c3)+'e'])&-0x1*0x156+-0x2119*-0x1+0x32d*-0xa;return{'keyAtOffset0':_0x941846,'hidden':_0x1c85ed,'inited':_0x36085a,'fake':_0x36bdf4,'act':_0x32d437,'hex':_0x3d978a(_0x3617db),'alt':_0x14edb8===_0x368390['gdWkh']?_0x1c85ed^(_0x36bdf4|-0xbf7*0x2+-0x1*0x25e2+0xb8*0x56):null};}}function _0x57fbf5(_0x1dfd70,_0x143e10,_0x531f41){var _0x18a7fa=_0x189e9a;if(_0x1dfd70===_0x368390[_0x18a7fa(0x528)])return _0x57b42f(_0x143e10^_0x531f41);if(_0x1dfd70==='obfI')return _0x143e10^_0x531f41|-0x1db0+0x1*-0x331+0x20e1;return((_0x143e10^_0x531f41)&-0x197*0x4+-0x22e9+0x2a44)!==0x1d37+-0x19d*-0x2+-0xb*0x2f3?-0x178b+-0x13ad+0x5*0x8a5:-0x7f*-0x16+-0x1e0a+0x1320;}function _0x31ccee(_0x542fbf,_0x1cf983,_0x284ffb){var _0x1cce62=_0x189e9a,_0x221263=_0x368390[_0x1cce62(0x2d1)][_0x1cce62(0x464)]('|'),_0x53868a=-0x6b0+-0xb3*0x5+-0x3*-0x365;while(!![]){switch(_0x221263[_0x53868a++]){case'0':var _0x5104e2=_0x78d2b7(_0x368390[_0x1cce62(0x69f)](_0x368390[_0x1cce62(0x521)](_0x542fbf,_0x1cf983),_0x7aecda['hidde'+'n']),'i32');continue;case'1':if(_0x26c6b3===undefined||_0x368390['rdAos'](_0x5104e2,undefined)||_0xe96f09===undefined||_0x1001c7===undefined)return null;continue;case'2':var _0xe96f09=_0x78d2b7(_0x542fbf+_0x1cf983+_0x7aecda[_0x1cce62(0xc3c)],_0x368390[_0x1cce62(0xcbb)](_0x284ffb,_0x1cce62(0xdbf))?_0x368390[_0x1cce62(0xb15)]:_0x284ffb===_0x1cce62(0xa1a)?_0x1cce62(0xbf1):'u8');continue;case'3':var _0x2d667a=_0x78d2b7(_0x368390[_0x1cce62(0x5aa)](_0x368390[_0x1cce62(0x31c)](_0x542fbf,_0x1cf983),_0x7aecda['inite'+'d']),'u8');continue;case'4':var _0x24fae0;continue;case'5':var _0x26c6b3=_0x78d2b7(_0x368390[_0x1cce62(0xb0d)](_0x368390['gXApk'](_0x542fbf,_0x1cf983),_0x7aecda[_0x1cce62(0x8b8)]),'u8');continue;case'6':_0x5104e2|=0xe67+-0x164b+0x7e4;continue;case'7':return{'real':_0x24fae0,'fake':_0xe96f09,'act':_0x1001c7,'init':_0x2d667a,'key':_0x26c6b3,'hidden':_0x5104e2};case'8':_0x26c6b3&=-0x1953+-0x1bb3+-0x1*-0x3605;continue;case'9':if(_0x368390['nhGYx'](_0x284ffb,'obfF'))_0x24fae0=_0x57b42f(_0x5104e2^_0x26c6b3);else{if(_0x284ffb===_0x368390[_0x1cce62(0x5ef)])_0x24fae0=_0x368390[_0x1cce62(0x922)](_0x5104e2^_0x26c6b3,-0x800+0x19f4+-0x47d*0x4);else _0x24fae0=(_0x368390['rtcTR'](_0x5104e2,_0x26c6b3)&-0x23a5+0xd3d+0x1767)!==-0x3*0x907+-0xbd7*0x2+0x32c3?0x1afa+-0x1dd1+0x2d8:0x1*0x1931+-0x2331+-0x8*-0x140;}continue;case'10':var _0x1001c7=_0x78d2b7(_0x542fbf+_0x1cf983+_0x7aecda[_0x1cce62(0x6c3)+'e'],'u8');continue;case'11':_0x1001c7&=0x2*-0x1291+0x17c9*0x1+0xd5a;continue;case'12':var _0x7aecda=_0x182913[_0x284ffb];continue;case'13':_0x2d667a=_0x368390[_0x1cce62(0x8ed)](_0x2d667a,-0x4ed*0x4+-0x98e+0x1d42)&0x5*0xb5+-0xe11+0xa89;continue;case'14':if(!_0x7aecda)return null;continue;}break;}}function _0x452234(_0x3645b2,_0x16e81c,_0x3fe65f,_0x4a8185){var _0x2f1377=_0x189e9a,_0xc520cb=_0x182913[_0x3fe65f],_0x22198d=_0x5ea838(_0x3645b2,_0x16e81c,_0xc520cb['size']);if(!_0x22198d)return![];var _0x1866ad=new DataView(_0x22198d[_0x2f1377(0x26f)+'r'],_0x22198d[_0x2f1377(0x5ff)+'ffset'],_0x22198d[_0x2f1377(0x409)+_0x2f1377(0x23a)]),_0x127f32=_0xc520cb[_0x2f1377(0x920)+'pe']==='u8'?_0x1866ad[_0x2f1377(0xba2)+_0x2f1377(0x4a6)](_0xc520cb[_0x2f1377(0x8b8)]):_0x1866ad[_0x2f1377(0xbab)+'t32'](_0xc520cb['key'],!![]),_0x24b6ca;if(_0x368390[_0x2f1377(0x5a2)](_0x3fe65f,_0x2f1377(0xdbf)))_0x24b6ca=_0x368390[_0x2f1377(0x7a2)](_0x55798a,_0x4a8185);else{if(_0x3fe65f===_0x2f1377(0xa1a))_0x24b6ca=_0x4a8185|0x25c4+0x5*0x74b+-0x4a3b;else _0x24b6ca=(_0x4a8185?0xcfb*-0x1+0x2*0x1196+-0x1630:-0x1*0x2344+0x610+-0x15*-0x164)&-0x973+0x1917+-0xea5;}return _0x368390['MCaeN'](_0x203667,_0x368390['TgvIy'](_0x368390['aqJIc'](_0x3645b2,_0x16e81c),_0xc520cb[_0x2f1377(0xa4f)+'n']),_0x2f1377(0xbf1),_0x24b6ca^_0x127f32)&&_0x203667(_0x3645b2+_0x16e81c+_0xc520cb['fake'],_0x3fe65f===_0x2f1377(0xdbf)?_0x2f1377(0x2f6):_0x3fe65f==='obfI'?_0x2f1377(0xbf1):'u8',_0x368390[_0x2f1377(0xcfd)](_0x3fe65f,_0x368390[_0x2f1377(0x528)])?_0x4a8185:_0x368390[_0x2f1377(0x624)](_0x3fe65f,_0x2f1377(0xa1a))?_0x4a8185|0x1630+-0x1001*0x2+0x2*0x4e9:_0x4a8185?0x1c*-0x33+-0x53e*0x2+0x9*0x1c9:-0xc70+-0x19c9+-0x2639*-0x1)&&_0x368390['MCaeN'](_0x203667,_0x3645b2+_0x16e81c+_0xc520cb[_0x2f1377(0x6c3)+'e'],'u8',0x1*0x6f5+0x14d9+0x2*-0xde7);}var _0x2a77ad={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0xe6380f=-0x1fc*0x3+-0x6*-0x1a8+0x66*-0xa+0.03,_0x3b5830=-0xbbe+0x9ba+-0x25*-0xe,_0xb6665d={},_0x157b2b=-0xd4b+-0x1eb*-0xb+-0x7ce,_0x41dd3f=[],_0x4d63f4=[];function _0x393110(_0x519465){var _0x237ce3=_0x189e9a,_0x25a533={'SYhjL':_0x368390[_0x237ce3(0xda8)],'NUMvV':function(_0xa08b3c,_0x38dd06){return _0xa08b3c(_0x38dd06);},'fbHHI':function(_0x30e588,_0x581141){return _0x368390['gfBQz'](_0x30e588,_0x581141);}},_0x50a2d4=_0x117247[_0x237ce3(0x76c)+_0x237ce3(0x9d1)+'ler']||[],_0x590d4b=[];_0x4d63f4=[],_0x41dd3f=[];for(var _0x2d7bb6=0x1423+-0x1*-0xd81+-0x21a4*0x1;_0x368390[_0x237ce3(0xd21)](_0x2d7bb6,_0x50a2d4['lengt'+'h']);_0x2d7bb6++){var _0x2d3359=_0x50a2d4[_0x2d7bb6][0x114*-0x1b+0x1007+0xd15];if(_0x50a2d4[_0x2d7bb6][-0x1*-0x1a32+0x1*-0x731+-0x130*0x10]!==_0x237ce3(0xdbf))continue;var _0x45578d=_0x43f237(_0x519465,_0x2d3359,_0x368390['DsVFy']);if(!_0x45578d||_0x45578d[_0x237ce3(0xd31)+'d']!==-0x9c2*-0x1+0xcaf*-0x2+0xf9d*0x1)continue;var _0x38e77f=_0x368390['pNapL'](_0x57fbf5,_0x368390[_0x237ce3(0x528)],_0x45578d['hidde'+'n'],_0x45578d[_0x237ce3(0x348)+_0x237ce3(0x2ae)+'t0']);if(_0x368390[_0x237ce3(0x52e)](typeof _0x38e77f,_0x368390[_0x237ce3(0xda8)])||!isFinite(_0x38e77f))continue;var _0x57a508=_0x368390['TLmZB'](_0x519465+':',_0x2d3359),_0x1a4416=_0xb6665d[_0x57a508];if(!_0x1a4416||_0x38e77f!==_0x1a4416[_0x237ce3(0x9b0)+'ritte'+'n'])_0x1a4416=_0xb6665d[_0x57a508]={'base':_0x38e77f,'lastWritten':null};var _0x4a1962=_0x1a4416[_0x237ce3(0xe66)],_0x2db2c7=Math[_0x237ce3(0x2fa)](_0x4a1962);if(_0x2db2c7<0x3*-0xa94+-0x1f2*0x4+0x2784+0.0001||_0x368390[_0x237ce3(0xd51)](_0x2db2c7,-0x1d7cf+0xa34d+0x6d*0x66a)){_0x4d63f4['push']({'o':_0x2d3359,'v':_0x38e77f,'why':_0x368390[_0x237ce3(0x1d6)]});continue;}_0x590d4b[_0x237ce3(0x8f8)]({'o':_0x2d3359,'v':_0x38e77f,'a':_0x2db2c7,'base':_0x4a1962,'key':_0x57a508,'st':_0x1a4416});}var _0x3db07a=[];for(var _0x414291=0x18ab+0x311*-0x1+0x7*-0x316;_0x414291<_0x590d4b[_0x237ce3(0xcc0)+'h'];_0x414291++){if(_0x368390[_0x237ce3(0xd38)](_0x368390[_0x237ce3(0xbcf)],_0x368390[_0x237ce3(0xbcf)])){var _0x9ce6c3=_0x590d4b[_0x414291]['a'],_0x10fa37=null;for(var _0x22dcc5=-0x3*-0xbb7+0x2*0xe9f+0x4063*-0x1;_0x22dcc5<_0x3db07a[_0x237ce3(0xcc0)+'h'];_0x22dcc5++){if('KatCA'===_0x237ce3(0xbfe))return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x5e8346,'ambiguous':![],'reach':0x0,'held':![]};else{var _0x5750e6=_0x3db07a[_0x22dcc5][_0x237ce3(0x333)]/_0x9ce6c3;if(_0x368390[_0x237ce3(0x1cb)](_0x5750e6,0x1f35*0x1+0xc60+-0x2*0x15ca-_0xe6380f)&&_0x368390[_0x237ce3(0x312)](_0x5750e6,-0x1d*0xb3+0x1cfb+-0x8b3+_0xe6380f)){_0x10fa37=_0x3db07a[_0x22dcc5];break;}}}!_0x10fa37&&(_0x10fa37={'mean':_0x9ce6c3,'members':[]},_0x3db07a['push'](_0x10fa37));_0x10fa37['membe'+'rs'][_0x237ce3(0x8f8)](_0x590d4b[_0x414291]),_0x10fa37['mean']=0x180e+-0x1*-0x105b+-0x2869;for(var _0x1c3c10=0x21b9+0xa*0x3b0+-0x35*0x155;_0x1c3c10<_0x10fa37[_0x237ce3(0x53b)+'rs'][_0x237ce3(0xcc0)+'h'];_0x1c3c10++)_0x10fa37[_0x237ce3(0x333)]+=_0x10fa37['membe'+'rs'][_0x1c3c10]['a'];_0x10fa37[_0x237ce3(0x333)]/=_0x10fa37[_0x237ce3(0x53b)+'rs'][_0x237ce3(0xcc0)+'h'];}else{var _0x269be0=_0x27dee6();return _0x269be0?{'a':_0x269be0['rawA'],'b':_0x269be0[_0x237ce3(0x591)],'hits':_0x269be0['hits'],'order':_0x269be0[_0x237ce3(0x1f6)]}:null;}}var _0x1d2d8b=[];for(var _0x2010f7=0x7f*-0x2b+-0x9d*0x1b+0x25e4;_0x2010f7<_0x3db07a[_0x237ce3(0xcc0)+'h'];_0x2010f7++){if('PvTxC'!=='PvTxC')return _0x9b7faa['sourc'+'e']='windo'+_0x237ce3(0x881)+_0x237ce3(0x792),_0x161e5d;else{if(_0x3db07a[_0x2010f7][_0x237ce3(0x53b)+'rs'][_0x237ce3(0xcc0)+'h']>=_0x3b5830)_0x1d2d8b[_0x237ce3(0x8f8)](_0x3db07a[_0x2010f7]);}}if(!_0x1d2d8b[_0x237ce3(0xcc0)+'h']){if(_0x237ce3(0x50f)===_0x368390[_0x237ce3(0xa47)]){_0x4d63f4['push']({'o':-(0x1ea6+0x1d0*0xb+-0x3295),'v':0x0,'why':_0x368390['GBQmt'](_0x368390[_0x237ce3(0x216)](_0x237ce3(0xa7b)+'oup\x20o'+'f\x20',_0x3b5830),_0x237ce3(0x4f1)+'uredF'+'loats'+_0x237ce3(0x88a)+'ed')});return;}else return![];}var _0x4557f5=_0x1d2d8b[-0x98*0x3a+0xeec+0x1384]['mean'];for(var _0xd427ea=-0x2dd+-0x1*0x1931+0x1c0e;_0xd427ea<_0x1d2d8b[_0x237ce3(0xcc0)+'h'];_0xd427ea++)if(_0x1d2d8b[_0xd427ea]['mean']<_0x4557f5)_0x4557f5=_0x1d2d8b[_0xd427ea]['mean'];var _0x5a1c62=_0x4557f5*(0x9e8+0x1*-0x2447+0x1a5f+0.5);for(var _0x3ec109=0x1*0x166c+-0x10a1+-0x5cb;_0x368390['cWAfG'](_0x3ec109,_0x3db07a[_0x237ce3(0xcc0)+'h']);_0x3ec109++){if('zsOqT'!==_0x368390['hOhvT']){var _0xdba605=_0x3d25f9[_0x356723];_0xdba605[_0x237ce3(0x493)+'its']&&_0xdba605['pairH'+'its']>_0x5241e7&&typeof _0xdba605['setLa'+'st']==='numbe'+'r'&&typeof _0xdba605[_0x237ce3(0x423)]===_0x25a533[_0x237ce3(0xe57)]&&_0x25a533['NUMvV'](_0x36d450,_0xdba605[_0x237ce3(0x2db)+'st'])&&_0x25a533[_0x237ce3(0x842)](_0x34d31e,_0xdba605[_0x237ce3(0x423)])&&(_0x37ca72={'rawA':_0xdba605[_0x237ce3(0x2db)+'st'],'rawB':_0xdba605[_0x237ce3(0x423)],'hits':_0xdba605['pairH'+_0x237ce3(0xada)],'name':_0x10874b},_0x48f1ac=_0xdba605[_0x237ce3(0x493)+'its']);}else{if(_0x3db07a[_0x3ec109]['membe'+'rs'][_0x237ce3(0xcc0)+'h']>=_0x3b5830)continue;for(var _0xf39321=0x689+0x2*-0x47+0x1*-0x5fb;_0xf39321<_0x3db07a[_0x3ec109][_0x237ce3(0x53b)+'rs'][_0x237ce3(0xcc0)+'h'];_0xf39321++){_0x4d63f4['push']({'o':_0x3db07a[_0x3ec109][_0x237ce3(0x53b)+'rs'][_0xf39321]['o'],'v':_0x3db07a[_0x3ec109][_0x237ce3(0x53b)+'rs'][_0xf39321]['v'],'why':'singl'+'eton'});}}}for(var _0xda48f6=-0x142*0xe+-0x113b+-0x3*-0xb9d;_0x368390[_0x237ce3(0x8d8)](_0xda48f6,_0x1d2d8b[_0x237ce3(0xcc0)+'h']);_0xda48f6++){var _0x2f1bf9=_0x1d2d8b[_0xda48f6][_0x237ce3(0x53b)+'rs'];for(var _0x2cbba2=0x2*-0xcb2+-0x1*-0x38+0x192c;_0x2cbba2<_0x2f1bf9[_0x237ce3(0xcc0)+'h'];_0x2cbba2++){var _0x11ca4d=_0x2f1bf9[_0x2cbba2];if(_0x368390[_0x237ce3(0x705)](_0x11ca4d['a'],_0x5a1c62)){if(_0x368390[_0x237ce3(0xcfd)](_0x368390[_0x237ce3(0xa54)],'kktbA')){var _0x16cca4=_0x368390[_0x237ce3(0xa2b)][_0x237ce3(0x464)]('|'),_0x3c495e=-0x1264+-0x1b61+-0x1*-0x2dc5;while(!![]){switch(_0x16cca4[_0x3c495e++]){case'0':_0x5901f0={'el':_0x45f3e2,'cv':_0x45f3e2[_0x237ce3(0x494)+_0x237ce3(0xba3)+_0x237ce3(0x702)](_0x237ce3(0xb31)+_0x237ce3(0xc4c)+_0x237ce3(0x3e2)),'lg':_0x45f3e2['query'+'Selec'+_0x237ce3(0x702)](_0x237ce3(0xb31)+_0x237ce3(0xc4c)+_0x237ce3(0xaa7))};continue;case'1':if(!_0x282ebc[_0x237ce3(0xe8e)]||!_0x4e2c46[_0x237ce3(0xe8e)]['appen'+_0x237ce3(0x9bf)+'d'])return null;continue;case'2':_0x157e21[_0x237ce3(0xe8e)]['appen'+'dChil'+'d'](_0x45f3e2);continue;case'3':_0x45f3e2[_0x237ce3(0x98e)]['cssTe'+'xt']=_0x368390[_0x237ce3(0xd43)]('posit'+'ion:f'+_0x237ce3(0x489)+_0x237ce3(0x603)+':12px'+';top:'+'46px;'+_0x237ce3(0xd4d)+_0x237ce3(0x382)+'47483'+_0x237ce3(0x60c)+_0x237ce3(0xd02)+_0x237ce3(0x5b5)+_0x237ce3(0x295)+'one;',_0x237ce3(0xd57)+_0x237ce3(0xbe5)+_0x237ce3(0x32b)+_0x237ce3(0xe24)+'2,29,'+'.72);'+_0x237ce3(0x68c)+_0x237ce3(0x6e7)+'\x20soli'+'d\x20rgb'+'a(255'+_0x237ce3(0xa98)+_0x237ce3(0x829)+'4);bo'+'rder-'+_0x237ce3(0xd27)+'s:10p'+'x;')+(_0x237ce3(0x323)+'ng:4p'+'x;fon'+_0x237ce3(0x66c)+'x/1.3'+_0x237ce3(0x63e)+_0x237ce3(0xde2)+_0x237ce3(0x83e)+_0x237ce3(0xd8b)+'as,mo'+'nospa'+'ce;co'+'lor:#'+'bda9c'+'9;')+('user-'+'selec'+'t:non'+'e;-we'+_0x237ce3(0x1f9)+'user-'+_0x237ce3(0x250)+'t:non'+'e;');continue;case'4':var _0x3493fa={'cv':{'getContext':function(){return null;}},'el':_0x45f3e2};continue;case'5':_0x45f3e2[_0x237ce3(0xe92)+_0x237ce3(0xa06)]=_0x237ce3(0xe82)+_0x237ce3(0xc15)+_0x237ce3(0xa89)+'ura-e'+_0x237ce3(0x92d)+_0x237ce3(0x4c5)+'th=\x221'+_0x237ce3(0xe84)+'eight'+'=\x22160'+'\x22\x20sty'+'le=\x22d'+_0x237ce3(0x61e)+'y:blo'+_0x237ce3(0x9e1)+'/canv'+'as>'+('<div\x20'+_0x237ce3(0xc04)+'akura'+_0x237ce3(0xbe1)+_0x237ce3(0xc4f)+_0x237ce3(0x6a4)+_0x237ce3(0x626)+_0x237ce3(0x59e)+_0x237ce3(0x496)+_0x237ce3(0xd64)+'</div'+'>');continue;case'6':_0x45f3e2['id']=_0x368390[_0x237ce3(0x617)];continue;case'7':return _0x1ceb32;case'8':if(!_0x4a3fef['cv']||!_0x30d3c1['cv'][_0x237ce3(0x946)+'ntext'])_0x1d0375=_0x3493fa;continue;case'9':var _0x45f3e2=_0x11f22a[_0x237ce3(0x631)+_0x237ce3(0x490)+_0x237ce3(0x9c3)](_0x368390[_0x237ce3(0xc9b)]);continue;}break;}}else{_0x4d63f4['push']({'o':_0x11ca4d['o'],'v':_0x11ca4d['v'],'why':_0x368390[_0x237ce3(0x37c)]+_0x5a1c62[_0x237ce3(0xd9b)+'ed'](-0x11a5*0x1+-0x118e+0x1*0x2335)});continue;}}var _0x58764e=_0x11ca4d[_0x237ce3(0xe66)]*_0x2a77ad['facto'+'r'];_0x452234(_0x519465,_0x11ca4d['o'],_0x237ce3(0xdbf),_0x58764e)&&(_0x11ca4d['st']['lastW'+'ritte'+'n']=Math[_0x237ce3(0x34d)+'d'](_0x58764e),_0x157b2b++,_0x41dd3f['push']('0x'+_0x11ca4d['o'][_0x237ce3(0x258)+'ing'](0x1ee7+0x2673+-0x454a)));}}}var _0x117247={'FPScontroller':[[0x1f31*-0x1+-0x5*0x703+0x4250*0x1,_0x189e9a(0xdbf)],[-0x1ee6*0x1+-0x516+0x2424,'obfF'],[-0x2af*0xa+0x1*0xee+0x174*0x12,_0x189e9a(0xdbf)],[0x128d+0x581*0x1+-0x1*0x17b6,_0x189e9a(0xdbf)],[-0x1*-0x117d+-0x27*-0xdd+0x6*-0x874,'obfF'],[0x18*-0x84+0x6ef+-0x8b*-0xb,_0x189e9a(0xdbf)],[0x1f*0x97+-0x22c8+0x111f,'obfF'],[-0x5f9*-0x3+-0x49*0x1+-0xa*0x1b1,_0x368390['zvSaw']],[0x5c*0x12+-0x1209+0x29*0x4d,_0x189e9a(0xdbf)],[0x1a49+-0x1e3b+0x4ce,_0x189e9a(0xbf1)],[-0x480*0x3+-0x17f9+0x2659,'v3'],[-0x522+-0x823*-0x4+-0x1*0x1a7e,'u8'],[0xc7+0x3*0xae7+-0x208c,_0x368390[_0x189e9a(0x528)]],[-0x7cd*-0x2+-0x192b+0xa99,_0x189e9a(0xbf1)],[0x316+0xd9e+0xc*-0x14e,'u8'],[0x11be+-0x56*0x65+0x1140,_0x189e9a(0xbf1)],[0x130d+-0x82*0x2c+-0x45f*-0x1,'u8'],[-0x538*0x3+-0x2b*0x13+0x9f7*0x2,'u8'],[0xd*0x2c4+0xae7+-0x2dbf,_0x189e9a(0xdbf)],[-0x20d6+0x4a*0x4+0x8a*0x3d,_0x368390[_0x189e9a(0x528)]],[0x1e*0xea+0x1*-0x24f+-0x17d1,_0x368390['sgEMu']],[-0xe56+0xb95*0x1+-0x3*-0x15b,_0x189e9a(0x2f6)],[0x12db+-0xf*-0xc1+-0x1cd6,'v3'],[-0x2f2*-0xc+0x1841+-0x3a39,'v3'],[-0x3d*-0x66+-0x4a3+-0x123f,'f32'],[0x2b9+0x7f3+0x1*-0x93c,'f32'],[0x178d+-0x3*-0x722+-0x4d3*0x9,'u8'],[0x231a+-0x46*-0x20+-0x2a4e,_0x368390['sgEMu']],[-0x2*-0xfb5+-0xc92+-0x1140,'v3'],[0x2cc+0x121b+0x1343*-0x1,'u8'],[0x796+0x11d*0x19+0x21b7*-0x1,_0x368390[_0x189e9a(0xb15)]],[-0x26f7+0x3*-0x827+0x4124,_0x368390[_0x189e9a(0xb15)]],[0x1d*-0xaf+-0x2027*0x1+0x35b6,'u8'],[-0x1*0xd58+-0x1*-0x1ec7+-0xfb2,'u8'],[-0x7e1+0xb81+0x50*-0x6,_0x189e9a(0xdbf)],[-0x5*0x3f4+0x3b*0x83+-0xa9*0xd,_0x189e9a(0x2f6)],[0xaf*0x6+-0x2298+0x29*0xca,'u8'],[-0x24fe+-0x11c*-0x2+-0x1*-0x24a6,_0x368390[_0x189e9a(0x528)]],[0x139a+0x21dd+0x1*-0x337f,'v3'],[0x733+0x3d7*-0x3+0x1*0x65a,'obfB'],[0xa0b+0x1d9c+-0x258f,_0x368390[_0x189e9a(0xb15)]],[0x99*-0x1+0x19a5+-0x16f*0x10,_0x368390[_0x189e9a(0xb15)]],[0x48c+0x14*0x9+0x6*-0x7e,_0x189e9a(0x2f6)],[0x1*0x1194+-0x4f3*0x7+-0x1*-0x1361,_0x189e9a(0x2f6)],[-0x2*-0x3df+0x2597+-0x65*0x6d,_0x189e9a(0x2f6)],[-0x1057+-0x2d*0x85+0x2a10,_0x189e9a(0x2f6)],[-0x1f9e+-0x1f7f+-0x97*-0x6f,'u8'],[0x1*0x1fd+-0x294+0x2f4,'u8'],[-0x1*-0x1c4f+-0x2133+0x3a1*0x2,'u8'],[-0x18eb*0x1+0x260b*-0x1+0x4156,_0x368390[_0x189e9a(0xb15)]],[0xdd3+0x174a*-0x1+-0x5*-0x25f,'u8'],[0x1345*0x1+-0x22f+-0xeb1,'u8'],[0x2*0xb1d+0x32a+-0x5bf*0x4,_0x189e9a(0x2f6)],[-0x96e+-0x97*-0x29+0xb*-0x11f,'f32'],[0x20a2+0x135f+-0x3191,_0x189e9a(0x2f6)],[0x1b7*0x1+0x1079*-0x1+-0x1*-0x1136,_0x189e9a(0x2f6)],[-0x2208+0x8*-0x2ca+-0x1*-0x3ad0,_0x189e9a(0x2f6)],[-0x3*-0x1f7+0xdab+-0x4*0x445,_0x368390[_0x189e9a(0xb15)]],[-0x103c*-0x1+-0x1e55+0x1099,_0x368390[_0x189e9a(0xb15)]],[0x134a+-0x408+0x1d2*-0x7,'v3'],[0xdff+0x1c3a+0x255*-0x11,'u8'],[0x1954+-0x1aad*-0x1+0x70f*-0x7,'v3'],[-0x15c4+-0x13*0x1d3+0x3b11,_0x189e9a(0x2f6)],[-0x166d+-0x1*0x1d0+0x1ae9,'v3'],[-0x4f*-0xb+0x7a9+-0x856,'f32'],[0x2093*0x1+-0x1f5d+-0x1e*-0xd,'f32'],[0x13c*0x18+0x2285+0x1fb*-0x1f,_0x189e9a(0x2f6)],[-0x1c9a+0x11*0x2f+0x409*0x7,'u8'],[-0xa7*0x3+0x16d*-0x2+0x794,'u8'],[-0x3*-0x1b5+0x2*-0xc3e+0x1625,_0x189e9a(0x2f6)],[0x5d*0x35+0x4ee+-0x1553,_0x368390[_0x189e9a(0xb15)]],[0x2020+0x7ea+0xc62*-0x3,'v3'],[0x9*0x151+-0x588+-0x361*0x1,'v3'],[-0x15cc+-0x1ca8+0x3570,_0x368390['sgEMu']],[-0x44e*-0x3+0x2446*0x1+-0x2e30,_0x368390[_0x189e9a(0xb15)]],[0x1eb5+-0x50b+-0x16a6,_0x368390['sgEMu']],[0x194d*0x1+-0x2286+0xc41,_0x368390['sgEMu']],[-0x5fc+0xbbc+-0x2b4*0x1,'v3'],[0x1661+0x23bd+-0x3706,'u8'],[0x1ed5+-0xa44+-0x1*0x1175,'v3'],[-0x22ad+-0x4*0x904+0x49e5,_0x368390[_0x189e9a(0x674)]],[0x1962+0x17d+-0x1*0x17b3,'f32'],[0x3*0xb73+0x1185+-0x30ae,'f32'],[0x1f18+-0x1c41*0x1+0x5d,_0x368390[_0x189e9a(0xb15)]],[0x623+0xb*-0x2b6+0x1aeb,'f32'],[0x3b9*-0x1+-0xd89+-0x41a*-0x5,'u8'],[0x26b7+0x16e*-0x2+0x104d*-0x2,'u8'],[0x21e8+0xa1e+-0x2*0x145d,'u8'],[-0x127*-0x1+0x97d+-0x757,'u8'],[-0x299*0x2+0x7d7*-0x3+0x2005,'u8'],[-0xd6f+-0x1*-0x90d+0x7b2,_0x368390['sgEMu']],[0x2cd+0x1*0x2543+-0x24bc*0x1,_0x368390['sgEMu']],[0x35*0xa3+0x89*-0x45+0x686,_0x368390[_0x189e9a(0xb15)]],[-0x1337+-0xdd*-0x3+0x13fc,_0x368390[_0x189e9a(0xb15)]],[0xfbd*0x1+0x26af+-0x252*0x16,_0x189e9a(0x2f6)],[0x7*0x311+0x1eb1+-0x30c4,'u8'],[0x1*-0x23b7+-0x259f*0x1+0x26*0x205,_0x189e9a(0x2f6)],[0x1*-0xa8b+-0x1f46*-0x1+-0x114f,_0x368390['sgEMu']],[-0x4b*-0xb+-0x2*-0x449+-0x5d*0x17,'u8'],[0x21ab+-0x1*0x198d+0x11*-0x46,'v3'],[0x1965+-0x15a1+-0x40,'v3'],[0x186a+0x7*0xc1+-0x1a21*0x1,'v3'],[-0x809+-0x1828*0x1+0x23cd,_0x368390[_0x189e9a(0xb15)]],[-0x1639+-0x2*-0x6bb+-0x97*-0x15,_0x368390['sgEMu']],[-0x2003+0x3a9*0x6+0xdb1,_0x189e9a(0x2f6)],[-0x7*0x2dc+0x25db+0xe2f*-0x1,'v3'],[0x1afe+0xffc+-0xb*0x392,_0x189e9a(0xbf1)],[-0x2531*0x1+0x8*0x13+0x2851,'u8'],[0x264b+0x1639*0x1+-0x38c8,_0x368390['kgqtG']],[0xec6+-0x102b+0x525,_0x189e9a(0x2f6)],[-0x2*-0xb2+0x5e6+-0x386,'f32'],[-0x1dd2+-0xeab*0x1+0x3045,'f32'],[0x6d4+0x13b1+-0x16b9,_0x189e9a(0x2f6)],[0x1d61*-0x1+0x2a1+-0x518*-0x6,'v3'],[-0xa9*0x29+0x1fe6+0x53*-0x3,_0x368390['kgqtG']],[0x21ab*0x1+0x1697+-0x3462,'u8'],[-0xa*-0x3bc+-0x1e96+-0x2e1,'u8'],[0x5a*-0x52+-0x1f93+-0x1*-0x4049,'u8'],[0x1352+0x85f*-0x3+0x1*0x9af,_0x368390[_0x189e9a(0xb15)]],[-0x1bf+-0xc9d*-0x3+-0x4*0x80c,_0x189e9a(0xbf1)]],'HealthScript':[[-0x108b+0x61b*-0x1+0x16fe,'u8'],[-0x2f3+0x3*0x305+-0x5c0,_0x368390['kgqtG']],[0x982+-0x83*0x42+0x18c4,'f32'],[-0x1*0x22d1+-0x11*0xb+0x2410,_0x189e9a(0x2f6)],[0x258f+-0xc7f+-0x1888,_0x368390[_0x189e9a(0xb15)]],[0x1d39+0x2f0*0xc+0xf*-0x443,'f32'],[-0x2515+-0x49*-0x2b+0x1962,_0x189e9a(0x2f6)],[0x1cd6*0x1+-0x2de*-0xb+0x4*-0xef3,'f32'],[0x11d7+-0xa13*-0x1+-0x1f3*0xe,'i32'],[-0xc15*-0x3+0x2706+0x5*-0xeed,_0x189e9a(0xbf1)],[0xa9d+0x2259+0x1627*-0x2,'u8'],[-0x21ee+0x1690+0xc07,'u8'],[0x250b+-0x19bf+-0x2*0x551,'u8'],[-0x1e7*0x2+0x158e+-0x1115,'u8'],[-0x1247+-0x2451+-0x2e*-0x134,_0x368390[_0x189e9a(0x5ef)]],[0x33b*-0x1+-0x217*0xa+-0x1*-0x18f5,_0x189e9a(0xa1a)],[-0x53c+0x1d03+0x5*-0x493,_0x189e9a(0xa1a)],[-0x5d7*-0x4+0xb87+-0x21e7,_0x189e9a(0xa1a)],[-0x1f*0xad+-0xd6*-0x7+0x1029,_0x368390[_0x189e9a(0x5ef)]],[0x2db*0xc+-0xa7f*-0x1+-0x2b9f,'obfB'],[-0x70b*0x1+0x17d5+0x1*-0xf9a,_0x368390[_0x189e9a(0x528)]],[-0x18a9+-0xd6f*0x1+0x8*0x4ec,_0x368390['sgEMu']],[0xa2f+0x1b*-0x7f+0x482,_0x189e9a(0x2f6)],[0x4*0x35c+0x5f0+-0x1210,_0x189e9a(0x2f6)],[0x1*0x40e+-0x1b1*0x5+0x5bb,_0x368390[_0x189e9a(0xb15)]],[0x14cd+-0x1*0x1ec7+0x5ab*0x2,'f32'],[-0x8c6*-0x1+0x1cf7+0x1d*-0x141,'v3'],[0xa9d+0x19d4+0x67*-0x57,_0x189e9a(0x2f6)],[-0x54d*0x4+-0x8*0x260+-0xa6b*-0x4,_0x368390[_0x189e9a(0xb15)]],[0x1ad0+0xbc+-0xd06*0x2,'u8'],[0x217a+0x15f1*0x1+-0x35df,'u8'],[-0x263f+-0x56b+0x169d*0x2,_0x189e9a(0xbf1)]],'PlayerConfig':[],'WeaponManager':[[0x1b97*-0x1+0xcd7*0x1+0x5f*0x28,'i32'],[-0x35e*0xb+0x20b6+-0x11c*-0x4,_0x189e9a(0xbf1)],[0x123b+0x1b35+0x190*-0x1d,'u8'],[-0x491+0x1*-0x1152+0x1607,_0x189e9a(0xbf1)],[0x19b*-0x2+0x13b1+0x1*-0x1017,'obfF'],[-0x1*0x1436+-0xa80*-0x2+-0x1*0x4e,_0x189e9a(0x2f6)],[-0x15cc+-0xf80+0x28*0xf2,_0x368390['kgqtG']],[-0x11*0x1fd+-0x1*-0x152c+0xd29,'u8'],[-0x2457+-0x1e99+-0x17*-0x2ef,'u8'],[0x1574+0x204c+-0x3534,'i32'],[0x53f*-0x2+-0x1ad8+-0xe*-0x2b5,_0x189e9a(0x2f6)],[-0x2f6*-0x8+0x1*0x3ed+-0x1b05,_0x368390[_0x189e9a(0xb15)]],[-0xe8+0x1117+0x13*-0xd1,_0x368390[_0x189e9a(0x674)]],[-0x10e3+0x62+0x3*0x5bf,'u8'],[0x1028+-0xef*0x21+0xf83,_0x189e9a(0xa1a)],[0x1*-0x544+-0x226c+0x50*0x82,'obfI'],[0x1*0x432+0x1c+-0x1*0x34a,'f32'],[0x96f+-0x3*0x354+0x195,'f32'],[0x1681+0x1a91+-0x3006,'f32'],[0x114+0x2651+-0x5*0x7a9,_0x368390[_0x189e9a(0xb15)]],[0x1*-0x10f7+0x10f*-0x17+-0x1c*-0x184,_0x189e9a(0x2f6)],[0x8e1*-0x4+0xb84+0x1928,'u8'],[0xa4d+0x1*-0x14b7+0xb96,_0x189e9a(0xa1a)],[0xd2c+0x11a+0x1*-0xd06,_0x189e9a(0xa1a)],[0x8*-0x164+-0x1608+0x113e*0x2,_0x189e9a(0xa1a)],[-0x518*-0x5+-0x20d2*-0x1+-0x12*0x329,_0x189e9a(0x778)],[-0x1*-0x1cb1+0x29*-0x11+0x416*-0x6,_0x368390['zvSaw']],[-0x1691*-0x1+-0x404*0x3+-0x905,_0x189e9a(0x778)],[0x2*0xb14+-0xa9b*0x2+-0x7*-0x16,_0x368390[_0x189e9a(0x9b9)]],[0x1ed9+-0x1c42+0x1*-0xf3,'obfB'],[-0xba1+0x665+0x6ec,_0x189e9a(0xa1a)],[-0x4c5+-0x5e*-0x32+-0xbcb,_0x368390['kgqtG']],[0x1c6*-0x1+0x858+-0x4c2,'u8'],[0xc7*-0x1+0x134f+-0x42d*0x4,_0x368390['kgqtG']],[-0x14*-0x19+-0x565+-0x1*-0x549,_0x368390[_0x189e9a(0x674)]],[-0x459+-0xad*-0x2b+-0x16b6,_0x189e9a(0xbf1)],[0x89*-0x10+-0xfdb+0x1a7f,'u8'],[0x109a+-0x182*-0xd+-0x8*0x443,'u8'],[0x20ef+0x173f+-0x1*0x3611,'u8'],[-0x1b92+-0x37*0x8e+0x3c32,'u8'],[0x236b+0x185f+0x103*-0x39,'u8'],[0x2a6*0xb+0x690+-0x1*0x2162,_0x189e9a(0xbf1)],[0x1*-0xd3b+0x1*0x1a1f+-0x2*0x546,'u8']],'GG_GameManager':[[0x20c7+-0x692+-0x1a11*0x1,'u8'],[-0x2220+-0x256c+0x47b8,'f32'],[0x1995+-0x2452*0x1+-0x3ab*-0x3,'u8'],[-0xa*0xb6+-0x35b*-0x5+-0x966,'u8'],[0x9c5*-0x1+-0x1*0x166+0xb73,'f32'],[0x139f*0x1+0x1ccd+-0x3020,_0x189e9a(0x2f6)],[-0x1e61+-0x2*0x66+-0x3*-0xa7f,_0x368390['kgqtG']],[-0x1f*-0xd6+-0x5f*0x5e+0x94c,_0x368390['kgqtG']],[-0x64d*0x5+-0x2375+0x434e,'u8'],[-0x4ea+-0x223a+0x9e6*0x4,'u8'],[0x25*-0xd7+-0x1*-0xdfd+0xd6*0x15,_0x368390[_0x189e9a(0xb15)]],[-0x11*-0x1a7+-0x347+-0x1854,_0x368390[_0x189e9a(0xb15)]],[-0x1cd+0x6e8+-0x48b,_0x189e9a(0xbf1)],[-0x1*0xb99+-0xc3d+0x1*0x186a,'u8'],[-0x19d*0xe+-0x3*-0x8af+0x65*-0x7,'i32'],[-0xcf+-0x1*-0x335+-0x2*0xd5,_0x368390[_0x189e9a(0x674)]],[-0xf09+0x1c10+-0xc47,_0x368390[_0x189e9a(0x674)]],[0xad2+0x8b6+-0x12a0,_0x189e9a(0xa1a)],[-0x25*-0xd3+-0x236c+0x59*0x11,_0x189e9a(0xa1a)],[0x22a7+0x4f*-0x72+0x197,_0x368390['gdWkh']],[-0x183f+0x2*0x31d+0x11*0x121,'u8'],[-0x8ee+0x5b1*-0x2+0x1580,_0x189e9a(0xbf1)],[-0x1d8e+-0x13a8+0x329a,'u8'],[0x5b6+-0x51*-0x5d+0x21b3*-0x1,_0x368390[_0x189e9a(0xb15)]],[0x62*0x45+-0x1ab*0xa+-0x1*0x83c,'u8'],[0x1*-0xa0e+0x1bfb+-0x1065,'u8'],[-0x25e7+-0xa*-0x3dc+0x51*0x3,'u8'],[0x1*0xbb6+-0x1db8+0x3*0x68e,_0x368390['kgqtG']],[-0x15d1+-0x1*-0x8e9+-0x74a*-0x2,'f32'],[0x15ee+-0x31*0x7+-0x12e7,'u8'],[-0x56a+0xd0f*0x1+-0x5f4,'u8'],[-0x783+-0x1a*0x152+-0x3b*-0xbd,_0x368390[_0x189e9a(0x674)]],[-0x9c7*0x2+0xac7*-0x3+0x359f,_0x189e9a(0xbf1)],[-0x24ee+0x1d92+0x91c,'f32'],[0x11d7*-0x1+-0x304+0x169f,_0x368390['kgqtG']],[-0x2686*-0x1+0x1*0x14d1+0x23*-0x1a5,_0x189e9a(0x2f6)],[0x23f2+-0xfb1+-0x1275,_0x368390['kgqtG']],[0xcfc+-0x1d71+0x1245*0x1,_0x189e9a(0xbf1)]],'TDM_GameManager':[[0x1*0x10c5+0x12d6+-0x2383,'u8'],[0x14d3+-0x1*-0x35f+-0xc09*0x2,'u8'],[-0x214c*-0x1+0x342+-0x246d,'u8'],[-0xc9a*-0x3+-0x12af+0x1*-0x12fb,_0x189e9a(0x2f6)],[-0x125*0x11+0x7*-0x4c9+0x1*0x354c,'u8'],[-0x43b*0x1+0x7e1*-0x3+0x1c3a,'f32'],[0x13bb+0x2423+-0x377e,_0x368390['sgEMu']],[-0x1*0x83f+-0x16e5+-0x2*-0xfc4,_0x368390[_0x189e9a(0x674)]],[-0x5de*-0x6+-0x10f3+-0x11d9,'i32'],[-0xef2+0x1*0x11e4+-0x286,'u8'],[-0xb2e+-0x21a7+0x2d42,'u8'],[-0x1d3*0x1+0x1*0x128f+-0x104c,_0x368390['sgEMu']],[-0xb8f*-0x1+-0xbdd*-0x3+-0x116*0x2b,_0x189e9a(0x2f6)],[-0x3*0x317+-0x219b+0x248*0x13,'i32'],[0x1d95+0x329+-0x2032,'u8'],[-0x6d*0xb+0x81f+-0x2e0,_0x368390[_0x189e9a(0x5ef)]],[-0x4e2+0xd*0xad+0x57*-0x9,_0x189e9a(0xa1a)],[0x551*0x2+-0xae1+0xd*0x17,_0x368390['gdWkh']],[0x13*0x73+-0x3*0x287+0xc,_0x189e9a(0xa1a)],[-0xd*0xbd+-0x386+0xe33,'u8'],[-0x2679+-0x6*0x61d+0x4c83*0x1,'u8'],[0x8ab+0xcc*-0x2d+0x1c91*0x1,_0x189e9a(0xbf1)],[-0x1*0x8e9+-0x825+-0x56*-0x37,'u8'],[-0x1*-0x20e7+-0xa31+-0x1532,'u8'],[-0xf31+-0x1*0x746+-0x1*-0x17ff,'f32'],[-0xd*0x1e7+0x259f+-0xb58,_0x189e9a(0xbf1)],[0x8fe+-0x5*0x13c+-0x142,_0x368390[_0x189e9a(0x674)]],[0x5d9*-0x5+0x1*-0x80f+0x26e0*0x1,_0x368390[_0x189e9a(0xb15)]],[0x1*-0x1433+-0x26d7+0x3ca2,_0x368390[_0x189e9a(0x674)]],[-0x13d4+0x54*-0x1f+-0x484*-0x7,'i32'],[0x2159*0x1+0x9*-0x151+-0x13e0,_0x189e9a(0x2f6)],[-0x2627+-0x74b+0x2f16,_0x368390['sgEMu']],[0x1fd*0xe+-0x3*0x3a5+-0xf3f*0x1,_0x189e9a(0xbf1)],[0x1ee2+-0x459+-0x1*0x18d9,'u8'],[-0x1d*0x3a+-0xd9c+0x15df*0x1,'u8'],[-0x765+0xdba+-0x49d*0x1,_0x189e9a(0x2f6)]],'PhotonNetworkSync':[[-0xf2c*-0x2+0x2664+-0x3*0x16d8,'v3'],[-0xf92+-0xbbe+0x1b90,_0x368390['kgqtG']],[0x1c36+0x15a2+-0x3194,'u8'],[0x1*0x1a5c+-0xdb9*-0x1+-0x27d0,'u8'],[0x3*-0xa93+-0x11da+0x1*0x31db,'v3'],[0x1e7*0xb+-0x2452+0xfb9,'u8'],[-0xf8*0x1e+0x8*0x1c1+0x1ec*0x8,_0x368390[_0x189e9a(0x674)]],[0x4bb+0xbf1+-0x4*0x414,_0x189e9a(0xbf1)],[-0x7b+0x1da8+-0x1ccd,'f32'],[-0x1838+-0x11a3+0x2a3f,_0x189e9a(0x2f6)],[-0x3e*-0x76+-0x15a0+-0x68c,_0x368390[_0x189e9a(0xb15)]],[-0x849+-0x4*0x9d+0xb29*0x1,'v3'],[0x684+-0x2620+0x2014,_0x368390[_0x189e9a(0xb15)]],[0x2*0x107b+-0x24f*-0x6+-0x944*0x5,_0x368390[_0x189e9a(0xb15)]],[-0x2197*0x1+0x208a+0x18d*0x1,'i32'],[0x2*-0x6b9+0xfb0+0x2*-0xdb,'f32']],'MouseLook':[[0x2*-0x164+-0x178+0x454,'f32'],[0x1e8+-0x99c+0x7cc,_0x189e9a(0x2f6)],[-0x58*-0x50+-0x29f*0x7+-0x1cf*0x5,_0x189e9a(0x2f6)],[0x2*0xa06+-0x145+-0x12a7*0x1,_0x368390['sgEMu']],[0x101+-0x1*-0x397+0x11d*-0x4,'f32'],[-0x24fe+-0x23ad+0x48d3*0x1,_0x189e9a(0x2f6)],[0x1*-0x84f+-0x1*0x17e7+0x2066*0x1,_0x368390[_0x189e9a(0xb15)]],[-0x10a9+-0x1e93*-0x1+-0xdb6,'u8'],[-0x7fb+-0x12*-0x136+0x1*-0xd99,_0x368390['sgEMu']],[0x1cee+-0x1b09+-0x1a9,'f32'],[0x60a+-0x860+0x296,_0x368390[_0x189e9a(0x674)]],[-0x3*-0x60a+-0x2377+0x119d,'u8'],[-0x2633+-0x2220+0x489b*0x1,'v2']],'NetworkPlayerAnimations':[[0x1d84+0x15a1+-0x327d,'v3'],[-0x89+-0x1*-0x2b+0x112,'v3'],[-0x1*-0x65b+0x475*-0x1+-0x126,'u8'],[0x17d8+-0x2497+0x3*0x481,'i32'],[0x1d3c+0x1fd*-0xf+0x15f,_0x189e9a(0xbf1)],[0x1625+-0x1ed7+0x87*0x12,_0x189e9a(0x2f6)],[-0x17c0+0xcbe+0x11*0xb2,_0x189e9a(0x2f6)],[-0x20*-0xbc+-0x17a2+-0x1*-0xfe,'f32'],[0xb74*-0x3+-0x169a+0x39d6,_0x189e9a(0x2f6)],[-0x1*-0x25bd+0x45d*0x5+0x2*-0x1d53,_0x368390[_0x189e9a(0xb15)]],[0x97e+-0x2*-0xee6+-0x265e,'f32'],[0x8de+-0x13c6+0xbd8,_0x368390[_0x189e9a(0xb15)]],[0x10c9+0x26bf+0x1f3*-0x1c,_0x368390[_0x189e9a(0xb15)]],[0xe77+-0x1*0x656+-0x729,_0x368390[_0x189e9a(0xb15)]],[0x407*0x9+0x791*-0x2+0x1421*-0x1,_0x368390[_0x189e9a(0xb15)]],[0x213c+0x154f+-0x5f3*0x9,'f32'],[-0x1f2a+0x5*0x151+0x1999,_0x189e9a(0x2f6)],[-0x1*0x2551+-0x13c3+0x3a1c,_0x368390[_0x189e9a(0x674)]],[-0xfc1*-0x2+-0xd6*-0x1c+-0x35de,'u8'],[-0x15*-0x161+-0x3*0x499+-0xe1a,_0x189e9a(0xbf1)],[0x150+-0x1983+0x1947,_0x189e9a(0xbf1)],[-0x196f+-0x1ca0+-0x3727*-0x1,'u8'],[-0xac*0x17+-0x7c*0x1+0x110c,_0x368390[_0x189e9a(0xb15)]],[-0x80f+-0x1*-0x1857+-0xf28,'f32'],[0x4cb+-0xd*-0x77+-0x92*0x11,_0x189e9a(0x2f6)],[-0xf40+0xd*-0x272+0xc7*0x3e,_0x189e9a(0x2f6)],[0x8*-0x2f0+0x2431+-0xb85,'u8'],[-0x355*-0x3+-0xc9d*0x1+0x3d6,'u8'],[0x3e*0x56+0x16c8+-0x2a60,'v3'],[0x463*0x7+0x7*-0x3ad+0x2*-0x1d9,'v3'],[0xf47*0x1+-0x4f3*-0x7+-0x3058,'u8']],'NPC_Cotroller':[[-0x85e*-0x2+-0x3*0x823+0x7c1,'v3'],[0x166c*-0x1+-0x1c5e+-0x1*-0x32ea,'f32'],[0x3ee*-0x8+0x1555+0xa3f*0x1,_0x368390[_0x189e9a(0xb15)]],[-0x22c2+0x100b+0x130d,'u8'],[0x12e8+0x15ef*0x1+-0x2880,'u8'],[-0x1*-0x47f+0x1*0x1155+-0x1578,'v3'],[0x1*0x258b+0x2d+-0x251c,'u8'],[-0xbb9+0xe58*-0x2+0x2909*0x1,_0x189e9a(0x2f6)],[-0x1635+-0x11*0x163+-0x4*-0xb9b,_0x368390[_0x189e9a(0xb15)]],[0x2*-0x1a7+-0x1f96+0x239c,_0x368390[_0x189e9a(0xb15)]],[0x1097+0x1b0b+0x26*-0x121,'f32'],[0x5*0x6e+0x1f0+-0x34e,'u8'],[0x6f9+0x137*0x10+-0x199d,_0x368390[_0x189e9a(0xb15)]],[-0x1*-0x126b+0x6b6*-0x4+0x945,_0x368390[_0x189e9a(0xb15)]],[0x3*0x30c+0x8*0x2b4+-0x1de8,_0x189e9a(0x2f6)],[-0x1998+0xed3+0xba5*0x1,_0x189e9a(0x2f6)],[-0x9*-0x32b+-0x8d4+-0x11b*0x11,'u8'],[-0xe47*0x2+0x3*0x186+0x18e8,_0x368390[_0x189e9a(0xb15)]],[-0x1954+-0x2*0x2d6+-0x124*-0x1c,'v3'],[0x145f+-0x1bdf*0x1+0x87c,_0x189e9a(0x2f6)],[-0xa8*0xf+0x193e+0x1*-0xe66,_0x189e9a(0xbf1)],[0x5*0x2b6+-0x227f+0x15f5*0x1,_0x368390[_0x189e9a(0xb15)]],[-0x4e7+0x8*0x293+-0xea9*0x1,_0x368390['sgEMu']],[-0x83+0x1ceb+-0x1b5c*0x1,_0x368390[_0x189e9a(0xb15)]],[0x1*0x2187+0xde5+-0x8*0x5cb,'v3'],[0x760+0x5a*-0x6a+0x7c1*0x4,_0x189e9a(0x2f6)],[-0x1ca4+0x40c+0x19bc,_0x189e9a(0x2f6)],[-0xb13+-0xf73+0x1a*0x111,'v3'],[0x20+-0x7d6+0x8fa,'u8'],[-0x15e4+0x77f+-0x1*-0xfad,_0x368390['sgEMu']],[0x1027+0x1*-0x8ab+-0x62c,'v3'],[-0x1175+0x2427+-0x1152,_0x368390['kgqtG']],[-0x1e4a+0x12a9+0xd0d,_0x368390[_0x189e9a(0x674)]],[-0x440+0x16f3+0x9*-0x1eb,_0x189e9a(0x2f6)],[-0x25f5+0x1dc0+-0x9a9*-0x1,'u8'],[-0xfa*-0x10+0x599*0x2+-0x195a,'v4'],[0x1d3b+0x5*-0x23a+-0x1091,_0x368390[_0x189e9a(0xb15)]],[-0x2*0xc9d+-0x16e*-0x18+-0x5*0x182,_0x368390['sgEMu']],[-0x5*0x61c+0x1dc1+0x25b,_0x368390[_0x189e9a(0xb15)]],[0x2676+-0x137d+-0x1161,'u8'],[-0xde1*-0x1+0x21b3*0x1+-0x16fa*0x2,_0x189e9a(0xbf1)]],'TargetHealth':[[-0x40c+-0x3*-0xa81+-0x73*0x3d,_0x368390[_0x189e9a(0x674)]],[0x1c6b+0x1bfb+-0x10b*0x36,_0x189e9a(0xbf1)],[0x22*-0x5d+0x16f+0xb1f,'u8'],[-0x1*-0x755+-0x1*-0x1139+-0x184a,_0x189e9a(0xbf1)],[0x1ae7+-0x8db+0x3*-0x5ec,_0x368390['kgqtG']],[0x1b7e+-0x2*-0x542+-0x3*0xc92,_0x189e9a(0xbf1)],[-0xb78+0x1*-0xe27+-0x1*-0x19ef,_0x189e9a(0xbf1)],[-0x2033+-0x2083+0x413a,_0x189e9a(0x2f6)],[-0x10fa*-0x1+0x22d1+0x1115*-0x3,_0x368390[_0x189e9a(0xb15)]],[0x16dd+-0x5b*0x3b+0x5*-0x44,'u8'],[0x13ec+0xa*-0x7d+-0xe76,_0x189e9a(0x2f6)],[-0x123+-0x1b4+0x37b,'u8'],[0x518+-0x23eb+0x1f7b*0x1,_0x368390[_0x189e9a(0x674)]],[-0x693+-0x4dc+0xc1b,_0x368390[_0x189e9a(0x674)]],[-0xf71+0x272+0xcf*0x11,_0x189e9a(0x2f6)],[-0x18e4+-0x12bf+0x2c6f,'u8']],'SectatorCamera':[[-0xff3+-0x1215*0x1+-0x25*-0xec,_0x189e9a(0x2f6)],[0x2171+-0x19*0xb3+-0x3*0x54a,'f32'],[-0x163*0x5+-0xb*-0x1e5+0x373*-0x4,'f32'],[-0x26c+-0xa20+-0x656*-0x2,'v3'],[0x1c71+0xc04+-0x2849,'v3'],[-0x11*0xc7+0x118c+-0x11*0x3d,_0x189e9a(0xbf1)],[-0x7f6*-0x1+-0x2064+0x18ba,_0x368390[_0x189e9a(0x674)]],[0xd4*0x1+-0x240c+-0x471*-0x8,_0x189e9a(0x2f6)],[-0x17c7+0x542*0x5+-0x2b*0xd,_0x368390[_0x189e9a(0x674)]],[-0x258e+-0x1*-0x1a8d+0xb59,_0x368390[_0x189e9a(0xb15)]],[0x2559+-0xc07+0x429*-0x6,'u8'],[0x1351+-0x23+-0x12ce,'v3'],[0x1*-0x104+0x8*-0x2e1+0x2*0xc3c,'v4'],[0x20f2+0x1d2f+-0x16f*0x2b,'u8'],[0x1*-0x19a3+0x15*0x1cf+-0xbd8,_0x368390['kgqtG']]],'UISettings':[[-0x13*-0x5+-0x71*-0x13+0x11*-0x82,_0x189e9a(0xbf1)],[0x1328+0x2a5*-0x7+-0x7d,'f32'],[-0xf33+0x1efa+-0x2e7*0x5,'u8'],[-0x16f0+0x11f5*0x2+0x3e6*-0x3,_0x368390['kgqtG']],[0x7ff+0x2405*0x1+-0x2ab*0x10,_0x189e9a(0xbf1)],[0x114c+0x1ac3+-0x51*0x87,_0x368390['kgqtG']],[0x20b7+0x987+-0x28e2,'u8'],[-0x1202*-0x1+-0x1*0x139+-0xf6c,'u8'],[-0x1601+0x2*0x37a+0x106b*0x1,'u8'],[-0x2*0x6d+-0x1a64+0x1c9d,'u8'],[-0x21ad+-0x3ad*-0x5+0x10ac,'u8'],[-0x23*-0xad+0x87e+-0x1ec4,'u8'],[0x347*0x3+-0xb1d+0x2aa,'u8'],[-0xd6b+-0x17ef+0x2716,_0x368390[_0x189e9a(0xb15)]],[-0x608+-0x174d+-0x1f19*-0x1,_0x368390['sgEMu']],[0x3*0xaf6+-0x395*-0x9+0x23*-0x1cd,'u8'],[0x9a4+-0x1b11+0x1*0x13ed,_0x368390[_0x189e9a(0xb15)]],[0x701*-0x3+0x2318+0x1a3*-0x7,_0x368390['kgqtG']],[0x1fa*0xb+0xd9+-0x139f,'u8'],[0x40c*0x2+-0xe03+0x987,'u8'],[-0x2f5*0xd+0x138b+0x1686,'v2'],[-0xd*-0x15f+-0x959*-0x3+-0x2a36,'v2'],[0x5*0x405+0x61*0x4a+-0x1*0x2c73,'u8'],[-0x27d+-0x1*-0x36a+0x2cb,'u8'],[-0xff3*0x1+-0xce3+0x20a2,_0x368390[_0x189e9a(0xb15)]],[-0x1*0xc59+-0xd9a+0x1dc3,'v3'],[0x5f*0x43+0x1*0x655+0x1*-0x1b52,'f32'],[-0x1d*0x79+-0x11ec+0x2385,_0x368390[_0x189e9a(0xb15)]],[-0x31*0xc5+0x222b*-0x1+0x5*0xf28,_0x368390[_0x189e9a(0xb15)]],[0xb90+0x22c1+0x2a61*-0x1,'u8'],[0x19bf*-0x1+-0x12ab+0x305b,'u8'],[-0x23a1+0x17f6+0x2b*0x5d,_0x368390['kgqtG']],[-0x1efb+-0x3*-0x1f+0xd3*0x2a,'i32'],[0x25f7*-0x1+-0x7a9+-0x18d2*-0x2,'i32'],[0x23db+-0x1440+-0xb93,_0x368390['kgqtG']],[0x1839+0x2*-0x51+-0x138b,_0x368390[_0x189e9a(0x674)]],[0x1*-0x24a7+0xaf2+0x1dc5,_0x189e9a(0xbf1)],[0x24d1+-0x1671+-0xa4c,'i32'],[-0x8d7+-0x20f6+0x1*0x2de5,_0x189e9a(0xbf1)],[-0x1*-0xc88+0x124b*0x2+-0x2d02,_0x189e9a(0xbf1)],[-0x1479+0x173f+-0x15a*-0x1,_0x189e9a(0xbf1)],[0x3a*-0xac+-0x1785+-0x137*-0x37,'u8'],[-0x2ce*0xc+-0x1bb*0x13+0x46de,'u8'],[0x1*0x1d4b+0xd94+-0x5*0x7b5,'u8'],[-0x2d1*-0x2+0x19a8+-0x1af3,'u8'],[0x1570*-0x1+0x1*0x224b+-0x1*0x84f,_0x368390['sgEMu']]]},_0x505e53={},_0x4326f1={};function _0x168afb(_0x561330,_0x3df7a1,_0x456a47){var _0x109dda=_0x189e9a,_0x284e19={'BQLnB':function(_0x320c08,_0x202caf){var _0x2afb21=_0x4f94;return _0x368390[_0x2afb21(0xc0a)](_0x320c08,_0x202caf);},'ahRcx':function(_0x589fe4,_0x22bf9d){return _0x589fe4===_0x22bf9d;},'MrvRg':function(_0x4913ea,_0x53c49a){return _0x4913ea<_0x53c49a;},'MKlGN':_0x368390[_0x109dda(0xd98)],'IZkiU':function(_0x2f7aba,_0x2c0059){return _0x2f7aba===_0x2c0059;},'bMJfb':function(_0x9409ec,_0x3c9021){return _0x9409ec^_0x3c9021;},'WNLKl':function(_0x470c51,_0x30d609){return _0x470c51===_0x30d609;},'ASGpa':_0x109dda(0x2f6),'hETVe':_0x109dda(0xbf1),'diWTQ':function(_0x327dbc,_0x4bc9ec){return _0x368390['lSjQg'](_0x327dbc,_0x4bc9ec);},'tBaZF':function(_0x433817,_0x62629c,_0x57c05d){return _0x433817(_0x62629c,_0x57c05d);},'GDEyl':_0x368390['jMseZ'],'wdtql':function(_0x5e9a8c,_0x4c3181){var _0x6cecba=_0x109dda;return _0x368390[_0x6cecba(0x7a2)](_0x5e9a8c,_0x4c3181);},'fAwFy':_0x368390['XftPL']};return function(_0x2dccef){var _0x263ad9=_0x109dda,_0x1c6620={'GAljZ':function(_0x10c84d,_0x20f8ca){var _0x1576c6=_0x4f94;return _0x284e19[_0x1576c6(0x942)](_0x10c84d,_0x20f8ca);},'mqvua':_0x284e19[_0x263ad9(0x7b7)],'azDqm':function(_0x5906bc,_0x4f786a){return _0x284e19['IZkiU'](_0x5906bc,_0x4f786a);},'rgQqC':'obfF','onkLl':function(_0x1dca23,_0x5e918c){return _0x284e19['bMJfb'](_0x1dca23,_0x5e918c);},'zjyaJ':_0x263ad9(0xa1a),'fUzHe':function(_0x4da509,_0x1e7ef8){return _0x4da509|_0x1e7ef8;},'McsVv':function(_0x3aad18,_0xb7cdae){return _0x3aad18!==_0xb7cdae;},'ibzSL':function(_0x4dcc66,_0x582768){var _0x181d36=_0x263ad9;return _0x284e19[_0x181d36(0xadc)](_0x4dcc66,_0x582768);},'pTYEy':function(_0x26a8f9,_0x4cccc4,_0x4a6187){return _0x26a8f9(_0x4cccc4,_0x4a6187);},'nXcMN':_0x284e19[_0x263ad9(0xd53)],'WUgwp':function(_0x4f601f,_0x30a04b){return _0x4f601f===_0x30a04b;},'QKxMJ':_0x284e19['hETVe'],'KDmCx':function(_0x54f32a,_0x4733f3){return _0x284e19['diWTQ'](_0x54f32a,_0x4733f3);},'JGNJB':function(_0x51a693,_0x888d1f,_0x3608ec){var _0x2adfd0=_0x263ad9;return _0x284e19[_0x2adfd0(0xa7e)](_0x51a693,_0x888d1f,_0x3608ec);},'wvHvt':function(_0x3c55e1,_0x522694,_0x1496d1){return _0x284e19['tBaZF'](_0x3c55e1,_0x522694,_0x1496d1);},'iliUI':function(_0x3ade42,_0x4f597b){return _0x3ade42+_0x4f597b;},'OXhyS':function(_0x1a185f,_0x225344){return _0x1a185f+_0x225344;}};try{if('bjHBv'!==_0x284e19['GDEyl']){var _0x4d8a29=_0x8a39df[_0x1080e5];for(var _0x30358d=0x14cb*0x1+0x2*-0xe3+0x1*-0x1305;_0x1c6620[_0x263ad9(0x5ce)](_0x30358d,_0x4d8a29['lengt'+'h']);_0x30358d++){_0x89cf5b[_0xa9bc4d+_0x1c6620[_0x263ad9(0xb71)]+_0x4d8a29[_0x30358d]['o']['toStr'+_0x263ad9(0x5f9)](-0x20cf+-0x73*-0x38+0x7b7)]=_0x4d8a29[_0x30358d]['v'];}}else{var _0x41e712=_0x2dccef&&_0x2dccef[_0x263ad9(0x9a0)]?_0x2dccef[_0x263ad9(0x9a0)]():0x1*-0xea1+0x1fa6+-0x1105;if(!_0x41e712)return;var _0x30daec=_0x4326f1[_0x561330]||(_0x4326f1[_0x561330]={}),_0xd7d2d0=_0x30daec[_0x41e712];if(!_0xd7d2d0)_0xd7d2d0=_0x30daec[_0x41e712]={'ptr':_0x41e712,'firstSeen':Date['now'](),'hits':0x0};_0xd7d2d0[_0x263ad9(0xe3e)]++;if(_0x456a47){if(!_0x505e53[_0x41e712])_0x505e53[_0x41e712]={'ptr':_0x41e712,'kind':_0x561330,'firstSeen':Date['now'](),'hits':0x0};_0x505e53[_0x41e712]['hits']++;}else{var _0x27c73d=_0x3bbae7[_0x561330];if(!_0x27c73d||_0x27c73d['ptr']!==_0x41e712){_0x3bbae7[_0x561330]={'ptr':_0x41e712,'firstSeen':Date[_0x263ad9(0x3b9)](),'hits':0x0,'replaced':!!_0x27c73d};try{var _0x2befe2=_0x5dfcca[_0x263ad9(0x999)+'r'](function(_0x2162ae){var _0x2f15d7=_0x263ad9;return _0x1c6620['azDqm'](_0x2162ae[_0x2f15d7(0xc3d)],_0x561330);})[-0x1eaf+-0x4*0x99f+-0x452b*-0x1];_0xf90ee6={'type':_0x561330,'atMs':Date['now']()-_0x5ef975,'originalFunc':!!(_0x2befe2&&_0x2befe2[_0x263ad9(0x3d1)]&&typeof _0x2befe2[_0x263ad9(0x3d1)][_0x263ad9(0x499)+_0x263ad9(0x34e)+'nc']===_0x263ad9(0x550)+'ion'),'resolveGameAtFire':!!_0x318fc9(),'gameSourceAtFire':_0xd13a81[_0x263ad9(0x8f2)+'e']};}catch(_0x3f79b6){}}}if(_0x561330==='FPSco'+'ntrol'+'ler'&&_0x2a77ad['on'])try{_0x284e19[_0x263ad9(0x9d8)](_0x393110,_0x41e712);}catch(_0x210858){}if(!_0x3df7a1){if(_0x284e19[_0x263ad9(0xadc)](_0x284e19['fAwFy'],_0x284e19[_0x263ad9(0xa5c)])){var _0x2befe2=_0x5dfcca['filte'+'r'](function(_0x570465){var _0x1536f0=_0x263ad9;return _0x284e19[_0x1536f0(0x901)]('GoPMC',_0x1536f0(0x261))?_0x284e19['ahRcx'](_0x570465['type'],_0x561330):(_0xf9e2['ident'+'ified']=![],_0x46cb6c[_0x1536f0(0xa97)]=_0x1536f0(0x285)+_0x1536f0(0x924)+'s\x20unr'+_0x1536f0(0x3a6)+'le',null);})[0xb05+-0x1*-0x516+-0x101b];if(_0x2befe2&&_0x2befe2['hook'])try{_0x2befe2[_0x263ad9(0x3d1)][_0x263ad9(0x62c)+'ed']=![];}catch(_0xd7539d){}}else{var _0x36e6db=('6|8|3'+'|13|1'+_0x263ad9(0x976)+_0x263ad9(0x3fa)+'7|5|1'+_0x263ad9(0x243)+_0x263ad9(0xa17))['split']('|'),_0x235f3c=0x1581+-0x6a*-0x22+-0x2395;while(!![]){switch(_0x36e6db[_0x235f3c++]){case'0':var _0x18ba2b;continue;case'1':return{'real':_0x18ba2b,'fake':_0x3c1a45,'act':_0x232798,'init':_0x425252,'key':_0x221b1d,'hidden':_0x3821c7};case'2':if(_0x28b0a4===_0x1c6620[_0x263ad9(0x766)])_0x18ba2b=_0x522805(_0x1c6620[_0x263ad9(0xbbf)](_0x3821c7,_0x221b1d));else{if(_0x3a8015===_0x1c6620['zjyaJ'])_0x18ba2b=_0x1c6620['fUzHe'](_0x3821c7^_0x221b1d,0xa*-0x23d+-0xd5b+0x23bd);else _0x18ba2b=_0x1c6620[_0x263ad9(0x9a3)]((_0x3821c7^_0x221b1d)&-0x160e+-0x1*-0x15b7+0x156,0x4*-0x97+0x1b4d*0x1+-0x18f1*0x1)?-0x1*0xc46+0x1ad*-0x3+0x114e:-0x373*-0x2+0x2373+-0x2a59;}continue;case'3':var _0x221b1d=_0x2cc87f(_0x1e021f+_0x53d2ad+_0x575d63[_0x263ad9(0x8b8)],'u8');continue;case'4':_0x232798&=-0x19d7+0x107*-0xa+0x241e;continue;case'5':_0x3821c7|=-0x2ed+-0x32f+0x61c;continue;case'6':var _0x575d63=_0x11d9ad[_0x307322];continue;case'7':_0x221b1d&=0x63*-0x29+-0x184*0x6+0x19f2;continue;case'8':if(!_0x575d63)return null;continue;case'9':if(_0x1c6620[_0x263ad9(0x7ea)](_0x221b1d,_0x5c0cb2)||_0x3821c7===_0x13f7ef||_0x3c1a45===_0x5c5de0||_0x232798===_0x1a99e2)return null;continue;case'10':var _0x3c1a45=_0x1c6620[_0x263ad9(0xd22)](_0xc57b5d,_0x5b6f1a+_0x239fcb+_0x575d63['fake'],_0x1c6620['ibzSL'](_0x1f6ee4,_0x1c6620['rgQqC'])?_0x1c6620['nXcMN']:_0x1c6620[_0x263ad9(0x5d0)](_0x58ae25,_0x1c6620['zjyaJ'])?_0x1c6620['QKxMJ']:'u8');continue;case'11':_0x425252=(_0x425252||-0x242d+0x13*-0xcc+-0x1d*-0x1c5)&-0x1dd*0x5+0x5*-0x6c3+-0x2b21*-0x1;continue;case'12':var _0x232798=_0x4efd90(_0x1c6620['KDmCx'](_0x4ccef5+_0x3f5efb,_0x575d63[_0x263ad9(0x6c3)+'e']),'u8');continue;case'13':var _0x3821c7=_0x1c6620['JGNJB'](_0x47a099,_0x35e935+_0xbbef8e+_0x575d63[_0x263ad9(0xa4f)+'n'],_0x263ad9(0xbf1));continue;case'14':var _0x425252=_0x1c6620[_0x263ad9(0x7e5)](_0x1066a3,_0x1c6620['iliUI'](_0x1c6620[_0x263ad9(0x9ea)](_0x39a493,_0x3fcc96),_0x575d63[_0x263ad9(0xd31)+'d']),'u8');continue;}break;}}}}}catch(_0x1a2028){}};}function _0x3af691(){var _0x484577=_0x189e9a;if('QRmfc'!=='hQVkP'){if(_0x5dfcca['lengt'+'h'])return!![];if(!window[_0x484577(0xd88)+_0x484577(0x917)+'dkit']||!window[_0x484577(0xd88)+_0x484577(0x917)+'dkit']['Runti'+'me'])return![];var _0x22d412=window[_0x484577(0xd88)+'WebMo'+'dkit']['Runti'+'me'];if(!_0x22d412[_0x484577(0x1c8)+'ns']||!_0x22d412[_0x484577(0x1c8)+'ns'][_0x484577(0xcc0)+'h'])return![];_0x2af87f=window[_0x484577(0xd88)+'WebMo'+_0x484577(0xcdd)]['Value'+'Wrapp'+'er'],_0x1c2ae7=_0x1c2ae7||_0x22d412['plugi'+'ns'][_0x22d412[_0x484577(0x1c8)+'ns'][_0x484577(0xcc0)+'h']-(-0x4d*-0x31+-0x10a*-0xc+-0x1b34)];if(!_0x1c2ae7||typeof _0x1c2ae7[_0x484577(0x7fb)+'refix']!==_0x368390['ViJPb'])return![];for(var _0x1ce109=-0x2013+-0x1c11+0x3c24;_0x368390[_0x484577(0xd21)](_0x1ce109,_0x472043['lengt'+'h']);_0x1ce109++){if(_0x368390[_0x484577(0x300)](_0x368390['qZHQK'],'rIgSX')){if(!_0x2ea5aa)return;_0x221fd0=![],_0xceccfa['style'][_0x484577(0x8bc)+'r']=_0x484577(0xc76),_0x368390['iVRvA'](_0x2721d4);}else{var _0x3bd54e=_0x472043[_0x1ce109];try{var _0xbc54ed=_0x1c2ae7[_0x484577(0x7fb)+'refix']({'typeName':_0x3bd54e['type'],'methodName':_0x484577(0xca9)+'e','params':[_0x484577(0xbf1),_0x484577(0xbf1)],'returnType':undefined},_0x368390['GFJoQ'](_0x168afb,_0x3bd54e[_0x484577(0xc3d)],_0x3bd54e['keep'],_0x3bd54e[_0x484577(0xd76)]));_0x5dfcca['push']({'type':_0x3bd54e[_0x484577(0xc3d)],'hook':_0xbc54ed,'keep':_0x3bd54e['keep']});}catch(_0x5aed7c){_0x4cf087[_0x484577(0x8f8)](_0x368390[_0x484577(0x8b6)](_0x3bd54e['type']+':\x20',_0x368390['tUBQy'](String,_0x5aed7c&&_0x5aed7c[_0x484577(0x2ab)+'ge']||_0x5aed7c)[_0x484577(0x1dd)](-0x7b3+0x1edd+-0x172a,-0x1d7f*-0x1+-0x825+-0x14ba)));}}}return _0x5dfcca[_0x484577(0xcc0)+'h']>0x1b58*-0x1+-0x1*-0x9b+0x25*0xb9;}else{if(_0x368390['nhGYx'](_0x129b36[_0x484577(0xa29)],_0x368390[_0x484577(0x2a7)]))_0x5c121c[_0x484577(0x7fb)+'ostfi'+'x']({'typeName':_0x484577(0x971)+_0x484577(0x83d),'methodName':_0x27ea3b[_0x484577(0xa41)],'params':_0x14b749[_0x484577(0xcb9)+_0x484577(0x8ba)],'returnType':_0x3147f4[_0x484577(0xb43)+'et']},_0x5a06d2(_0x368390['pHBwV'],_0x5bd75b[_0x484577(0xa41)]));else _0x368390['WWZtd'](_0x2dbb9f[_0x484577(0xa29)],_0x484577(0xb88))&&_0x49b724['param'+'s']['lengt'+'h']===0x1*-0x1e12+0x19f+0x1c74&&_0x1095a3[_0x484577(0x2dd)+'s'][-0x13*-0x151+-0xbec+-0x3*0x45d]===_0x368390[_0x484577(0x2a7)]&&_0x56154c['hookP'+_0x484577(0x221)]({'typeName':_0x484577(0x971)+_0x484577(0x83d),'methodName':_0x10489d[_0x484577(0xa41)],'params':_0x8a535b[_0x484577(0xcb9)+_0x484577(0x8ba)],'returnType':_0x34d489},_0x3a8132(_0x368390[_0x484577(0x8d5)],_0x26665b['name']));}}function _0x2fb047(_0x457bd0,_0x18d8e8){var _0x5e025a=_0x189e9a,_0x51c6f6={'RDAly':'Speed'+_0x5e025a(0xa6d),'qTgpx':_0x368390[_0x5e025a(0x8a7)],'CwuNg':function(_0x27dd66,_0x16f1b2){return _0x27dd66(_0x16f1b2);}};return function(){var _0x4057d2=_0x5e025a;try{var _0x546d8a=_0x1b5527[_0x18d8e8]||(_0x1b5527[_0x18d8e8]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x577af0=arguments;if(_0x457bd0==='get'){var _0x43a692=_0x577af0[-0x988*-0x3+0x1654*-0x1+-0x322*0x2];if(_0x43a692&&typeof _0x43a692[_0x4057d2(0x9a0)]===_0x4057d2(0x550)+'ion'){var _0x138729=_0x43a692[_0x4057d2(0x9a0)]();if(_0x368390[_0x4057d2(0xc89)](typeof _0x138729,_0x4057d2(0x93b)+'r')&&_0x368390['DIYDD'](isFinite,_0x138729)){if(_0x546d8a['lo']===null||_0x368390[_0x4057d2(0xe72)](_0x138729,_0x546d8a['lo']))_0x546d8a['lo']=_0x138729;if(_0x546d8a['hi']===null||_0x138729>_0x546d8a['hi'])_0x546d8a['hi']=_0x138729;if(_0x546d8a['last']!==null){if(_0x368390['YZvyr']!=='RfITq'){_0x27b036['sp']&&(_0x12103f['sp']['textC'+_0x4057d2(0xa15)+'t']=_0x334f92['on']?_0x4057d2(0x1e6)+_0x4057d2(0xce0):_0x51c6f6['RDAly'],_0xd7a5bd['sp'][_0x4057d2(0x98e)][_0x4057d2(0xd57)+'round']=_0x3682fb['on']?_0x1eb17c:'trans'+_0x4057d2(0x6f2)+'t',_0x30b749['sp']['style'][_0x4057d2(0x995)]=_0x3db8d0['on']?_0x4057d2(0x804)+'1b':_0x51c6f6['qTgpx']);if(_0x4ca00['fx'])_0x2b50c6['fx'][_0x4057d2(0x4a8)]=_0x51c6f6[_0x4057d2(0xbec)](_0x27baf8,_0xffe5a0[_0x4057d2(0xb52)+'r']);if(_0x25102c['fv'])_0x563521['fv'][_0x4057d2(0xab4)+_0x4057d2(0xa15)+'t']=_0x35acda[_0x4057d2(0xb52)+'r']['toFix'+'ed'](-0x269a+0x187f+0xe1c)+'x';}else{var _0x477794=Math[_0x4057d2(0x2fa)](_0x138729-_0x546d8a['last']);if(_0x368390['YAvTf'](_0x477794,_0x546d8a[_0x4057d2(0x40d)]))_0x546d8a['jump']=_0x477794;}}_0x546d8a[_0x4057d2(0xc17)]=_0x138729;}_0x546d8a['hits']++;if(_0x577af0[0x22*0x69+0x827*0x4+0x2e8d*-0x1]&&typeof _0x577af0[-0x2e7+0x718+-0x430][_0x4057d2(0x9a0)]===_0x368390['ViJPb']){var _0x3517f3=_0x577af0[0x7*0x382+-0x1316+0x1*-0x577]['val']();if(_0x3517f3)_0x1eeccf=_0x3517f3;}}}else{_0x577af0[0xce3+-0x2b3+-0xa2f*0x1]&&typeof _0x577af0[0xd58+0x217f+-0x2ed6][_0x4057d2(0x9a0)]===_0x4057d2(0x550)+'ion'&&(_0x546d8a[_0x4057d2(0x2db)+'st']=_0x577af0[0x3*-0x4f2+-0x2b*0xd5+0x329e]['val'](),_0x546d8a[_0x4057d2(0x338)+'ts']++);_0x577af0[0x174*0xe+0x18*-0x2e+-0x1006]&&typeof _0x577af0[0x71*-0x49+-0x1*0xe6f+0x16a*0x21][_0x4057d2(0x9a0)]===_0x368390['ViJPb']&&(_0x4057d2(0x2e4)===_0x4057d2(0x2e4)?(_0x546d8a[_0x4057d2(0x423)]=_0x577af0[-0x2333*0x1+-0x1e8e*-0x1+-0x18d*-0x3]['val'](),_0x546d8a[_0x4057d2(0x493)+_0x4057d2(0xada)]++):(_0x3f34d0={'rawA':_0x450459[_0x4057d2(0x2db)+'st'],'rawB':_0x418f03['setB'],'hits':_0x3ee1de[_0x4057d2(0x493)+'its'],'name':_0x38b172},_0x15acb7=_0x307982[_0x4057d2(0x493)+_0x4057d2(0xada)]));if(_0x577af0[0x2630+0x6ee*0x5+-0x48d6]&&_0x368390[_0x4057d2(0xadb)](typeof _0x577af0[-0x1a*-0x1b+-0x1f3d*0x1+0x5*0x5b3][_0x4057d2(0x9a0)],_0x368390['ViJPb'])){var _0x5837b8=_0x577af0[-0x1d6e+-0x46e+0x2*0x10ee]['val']();if(_0x5837b8)_0x1eeccf=_0x5837b8;}}}catch(_0x350a98){}};}function _0xd21b1c(){var _0xfcb4fe=_0x189e9a,_0x138435={'EOwWt':function(_0x2a2fc1,_0x5033c4){var _0x318b15=_0x4f94;return _0x368390[_0x318b15(0x2a3)](_0x2a2fc1,_0x5033c4);},'pTgUd':_0xfcb4fe(0xb11)+'s\x20wer'+_0xfcb4fe(0xb29)+'n\x20SEE'+_0xfcb4fe(0x1f5)+_0xfcb4fe(0xd58)+'\x20The\x20'+'apply'+_0xfcb4fe(0xd17)+'\x20','nMAZu':_0xfcb4fe(0x37e)+'once\x20'+'durin'+_0xfcb4fe(0x751)+_0xfcb4fe(0xc54)+_0xfcb4fe(0xcb3)+'nstan'+'tiate'+_0xfcb4fe(0x736)+'snaps'+_0xfcb4fe(0x9ac)+'plugi'+'n.hoo'+_0xfcb4fe(0x3ab)+_0xfcb4fe(0x85b)+'\x20','LJFVm':_0x368390[_0xfcb4fe(0x558)],'tJtgU':function(_0x11c39c,_0x5fc0b3){return _0x11c39c+_0x5fc0b3;},'mdTFS':function(_0x13b3cc,_0x1602f2){var _0x54a92e=_0xfcb4fe;return _0x368390[_0x54a92e(0x3a9)](_0x13b3cc,_0x1602f2);},'gMKTV':_0x368390['ijTYY'],'qPRtC':'\x20of\x20','EoAlB':_0xfcb4fe(0xe28)+_0xfcb4fe(0x870)+_0xfcb4fe(0xb5d)+'fo*)\x20'+_0xfcb4fe(0x83c)+_0xfcb4fe(0x6c4)+_0xfcb4fe(0x455)+_0xfcb4fe(0x7de)+'ch\x20th'+_0xfcb4fe(0x236)+_0xfcb4fe(0x1ca),'IiMRx':_0xfcb4fe(0x400)+_0xfcb4fe(0x32e),'gigZb':'--p','XaOvP':function(_0x760260){return _0x368390['unSrX'](_0x760260);},'JeZER':function(_0x4e2d88,_0x4c3a03){return _0x4e2d88+_0x4c3a03;},'eIPeV':function(_0x3a4548,_0x317cc9){return _0x3a4548(_0x317cc9);},'Eebvz':function(_0x109995,_0x1f8340){return _0x109995/_0x1f8340;},'dtwva':function(_0x1a9e39,_0x20ace0){return _0x1a9e39-_0x20ace0;},'cGjeQ':_0xfcb4fe(0x6e6),'iUrUh':function(_0x643bec,_0x30fe43){return _0x643bec(_0x30fe43);}};if(_0x117f5f)return!![];if(!_0x1c2ae7||typeof _0x1c2ae7['hookP'+_0xfcb4fe(0x3ce)+'x']!==_0xfcb4fe(0x550)+_0xfcb4fe(0x762))return![];var _0x381c53=_0x4eb568['Mouse'+_0xfcb4fe(0x83d)]||[];for(var _0x2170dd=0x41d+-0x1*-0x8d7+-0xcf4;_0x2170dd<_0x381c53[_0xfcb4fe(0xcc0)+'h'];_0x2170dd++){if(_0x368390[_0xfcb4fe(0x9d7)](_0xfcb4fe(0x594),'doAFF')){var _0x1d8a00=_0x381c53[_0x2170dd];try{if(_0x1d8a00['ret']==='float')_0x1c2ae7['hookP'+'ostfi'+'x']({'typeName':'Mouse'+_0xfcb4fe(0x83d),'methodName':_0x1d8a00['name'],'params':_0x1d8a00['wasmP'+'arams'],'returnType':_0x1d8a00[_0xfcb4fe(0xb43)+'et']},_0x2fb047(_0xfcb4fe(0x7e9),_0x1d8a00[_0xfcb4fe(0xa41)]));else _0x1d8a00['ret']===_0x368390['ANrKa']&&_0x368390[_0xfcb4fe(0xb55)](_0x1d8a00[_0xfcb4fe(0x2dd)+'s'][_0xfcb4fe(0xcc0)+'h'],-0xaf3+0x7c9*-0x4+0x18*0x1c1)&&_0x368390[_0xfcb4fe(0xb55)](_0x1d8a00['param'+'s'][-0xbcc+0x1a91+-0xec5],_0x368390[_0xfcb4fe(0x2a7)])&&(_0x368390['rzEkF'](_0xfcb4fe(0xb33),'NVUgh')?_0x36f10b[_0xfcb4fe(0x89a)+'Resol'+_0xfcb4fe(0xb2f)]===0xf*0x293+0x1224+-0x1*0x38c1?_0x192e26['warni'+_0xfcb4fe(0xe64)][_0xfcb4fe(0x8f8)](_0x138435[_0xfcb4fe(0x33b)]('0\x20of\x20'+_0x3ecd33[_0xfcb4fe(0x89a)+_0xfcb4fe(0xdaf)]+_0x138435['pTgUd']+_0x138435[_0xfcb4fe(0x4db)],_0x138435['LJFVm'])+(_0xfcb4fe(0x640)+_0xfcb4fe(0x822)+'\x20')+_0x3fb458[_0xfcb4fe(0x89a)+'Regis'+_0xfcb4fe(0x822)+'AtArm']+(_0xfcb4fe(0xb11)+_0xfcb4fe(0xc02)+'uring'+'\x20armi'+_0xfcb4fe(0x49a)+'\x20docu'+'ment-'+_0xfcb4fe(0xb89)+'.')):_0x3f4259[_0xfcb4fe(0xaf1)+_0xfcb4fe(0xe64)][_0xfcb4fe(0x8f8)](_0x138435[_0xfcb4fe(0xd0d)](_0x138435['mdTFS'](_0x138435[_0xfcb4fe(0xae4)]+_0x1234dc[_0xfcb4fe(0x89a)+'Resol'+'ved']+_0x138435['qPRtC'],_0x1b6cad['hooks'+_0xfcb4fe(0xdaf)])+(_0xfcb4fe(0xb11)+_0xfcb4fe(0x282)+'o\x20a\x20t'+'able\x20'+_0xfcb4fe(0xbdf)+'\x20but\x20'+_0xfcb4fe(0xa6c)+_0xfcb4fe(0xaa5)+'ne.\x20T'+'he\x20si'+'gnatu'+'re\x20'),_0x138435['EoAlB'])):_0x1c2ae7[_0xfcb4fe(0x7fb)+_0xfcb4fe(0x221)]({'typeName':_0x368390['giCAl'],'methodName':_0x1d8a00['name'],'params':_0x1d8a00[_0xfcb4fe(0xcb9)+'arams'],'returnType':undefined},_0x2fb047('set',_0x1d8a00[_0xfcb4fe(0xa41)])));}catch(_0x48fa2d){if(_0x368390['wvRhW']===_0xfcb4fe(0xe1a))_0x27e418['push'](String(_0x48fa2d&&_0x48fa2d[_0xfcb4fe(0x2ab)+'ge']||_0x48fa2d)['slice'](-0xc56+-0x1*0x162a+0x2280,-0x27*0x27+0x9*0xb9+-0x18));else{var _0x2d4601=('15|4|'+_0xfcb4fe(0xa8c)+_0xfcb4fe(0xc48)+'7|10|'+_0xfcb4fe(0xbc7)+_0xfcb4fe(0xb44)+'|11|3'+'|13|8')['split']('|'),_0x4568d8=-0x1*-0x4e1+-0x23d6+0x1ef5;while(!![]){switch(_0x2d4601[_0x4568d8++]){case'0':_0x1ee0b0['type']=_0xfcb4fe(0xca5);continue;case'1':_0x1ba649['appen'+'dChil'+'d'](_0x5cb213);continue;case'2':_0x1ee0b0[_0xfcb4fe(0x4d7)+'ut']=function(){_0x460944(_0x46946c(_0x1ee0b0['value'])||_0x314bec),_0x5d3cee();};continue;case'3':_0x5d3cee();continue;case'4':var _0x1ee0b0=_0x19b8c2['creat'+'eElem'+'ent'](_0xfcb4fe(0xe22));continue;case'5':_0x1ba649['sync']=_0x5d3cee;continue;case'6':_0x1ee0b0[_0xfcb4fe(0x8cf)+'Name']='sk-sl'+'ider';continue;case'7':_0x1ee0b0['step']=_0x368390[_0xfcb4fe(0x53a)](_0x325fca,_0x57f59d);continue;case'8':return _0x1ba649;case'9':var _0x5d3cee=function(){var _0x205ab9=_0xfcb4fe,_0x33fe65=_0x138435[_0x205ab9(0x29b)][_0x205ab9(0x464)]('|'),_0x560d53=-0x7*-0xcb+0xa0*0xd+-0xdad;while(!![]){switch(_0x33fe65[_0x560d53++]){case'0':_0x1ee0b0['style']['setPr'+_0x205ab9(0x349)+'y'](_0x138435[_0x205ab9(0x7b4)],_0x30a476+'%');continue;case'1':var _0x57e995=_0x138435['XaOvP'](_0x385f33);continue;case'2':_0x5cb213['textC'+'onten'+'t']=_0x138435[_0x205ab9(0x4e5)](_0x235d5<-0x731+0x1*0xf19+-0x7e7?_0x57e995['toFix'+'ed'](-0x265e+-0x1*-0x61+-0x1*-0x25fe):_0x138435[_0x205ab9(0x7d8)](_0x507ab7,_0x4e8eb8['round'](_0x57e995)),_0x1ee0b0[_0x205ab9(0x1ce)+'et']['unit']||'');continue;case'3':var _0x30a476=_0x138435[_0x205ab9(0x341)](_0x138435['dtwva'](_0x57e995,_0x1ba40d),_0x138435[_0x205ab9(0x28c)](_0x2d7027,_0x3532bf))*(0x2508+-0x16a6+-0xdfe);continue;case'4':_0x1ee0b0[_0x205ab9(0x4a8)]=_0x138435[_0x205ab9(0x7d8)](_0x3cc5b2,_0x57e995);continue;}break;}};continue;case'10':var _0x5cb213=_0xb7cab1(_0xfcb4fe(0xe5f),'sk-va'+'l');continue;case'11':_0x1ba649['input']=_0x1ee0b0;continue;case'12':_0x1ee0b0['min']=_0x368390[_0xfcb4fe(0xa4c)](_0x56a246,_0x251402);continue;case'13':_0x2d6340[_0xfcb4fe(0xca0)]['push'](_0x5d3cee);continue;case'14':_0x1ba649[_0xfcb4fe(0xdc4)+_0xfcb4fe(0x9bf)+'d'](_0x1ee0b0);continue;case'15':var _0x1ba649=_0x4cab0c(_0xfcb4fe(0x973),_0x368390['ZZXwU']);continue;case'16':_0x1ee0b0['max']=_0x2ad89c(_0x47e143);continue;}break;}}}}else{if(!_0x4b3b3e)return;var _0x15992f=_0x559f64['style']['displ'+'ay']===_0x138435[_0xfcb4fe(0xe4c)];_0x12edaf[_0xfcb4fe(0x98e)]['displ'+'ay']=_0x15992f?'':'none',_0x138435['iUrUh'](_0xc79c5b,'fold')['textC'+_0xfcb4fe(0xa15)+'t']=_0x15992f?'-':'+';}}return _0x117f5f=!![],!![];}function _0x1ca2f3(){var _0x23926c=_0x189e9a,_0x456652={'gGywn':function(_0x18f91f,_0x2693ef){return _0x18f91f+_0x2693ef;},'xQvnb':function(_0x43949e,_0x87560){return _0x43949e+_0x87560;}};if(_0x368390[_0x23926c(0x39a)](_0x23926c(0xcfe),_0x23926c(0xe29))){var _0x176b4c=_0xffe934(_0x58dc74);_0x58ba3f[_0x39fd2b]=_0x176b4c['rows'],_0x52153d[_0x2efaef]={'key':_0x176b4c['key'],'sane':_0x176b4c['sane'],'checked':_0x176b4c[_0x23926c(0x986)+'ed'],'keyConsistent':_0x176b4c['keyCo'+_0x23926c(0x2e3)+'ent'],'keySource':_0x176b4c[_0x23926c(0x2cb)+_0x23926c(0x445)]};}else{var _0x1ae276=-0x196*-0x14+-0x14cd+0x5*-0x22f,_0x245429=-0x66b+0x1db0+-0x1745,_0x11c396=-0xf6c+0x555*-0x3+0x17f*0x15,_0x47710e=-0xdfc+0x1fd0+0x11d4*-0x1,_0x4e6fe7=-0xd61+-0x23b7+0x3118;try{var _0x21c05e=window[_0x23926c(0xd88)+'WebMo'+_0x23926c(0xcdd)]&&window[_0x23926c(0xd88)+'WebMo'+_0x23926c(0xcdd)][_0x23926c(0x79a)+'me'],_0x53dd85=_0x1c2ae7||_0x21c05e&&_0x21c05e['plugi'+'ns']&&_0x21c05e[_0x23926c(0x1c8)+'ns'][_0x21c05e['plugi'+'ns'][_0x23926c(0xcc0)+'h']-(-0x8b*-0x10+0x106*-0xb+0x1*0x293)];if(_0x53dd85&&_0x53dd85[_0x23926c(0x89a)]){if(_0x23926c(0xc64)!==_0x23926c(0xc64))try{var _0x398cc4=_0x13cff8();return{'ok':_0x398cc4['ok'],'source':_0x398cc4[_0x23926c(0x8f2)+'e'],'why':_0x398cc4[_0x23926c(0xa97)],'tried':_0x398cc4['tried'],'camPtr':_0x456652['gGywn']('0x',_0x398cc4[_0x23926c(0x225)+'r'][_0x23926c(0x258)+_0x23926c(0x5f9)](-0x22ff+0x2ab+0x1032*0x2)),'tfPtr':_0x456652[_0x23926c(0x9be)]('0x',_0x398cc4[_0x23926c(0xd99)][_0x23926c(0x258)+'ing'](-0x58c*-0x1+-0x697*-0x4+-0x1fd8)),'fov':_0x398cc4[_0x23926c(0x1df)],'quat':_0x398cc4[_0x23926c(0xad8)],'pos':_0x398cc4[_0x23926c(0x90e)],'basis':_0x398cc4[_0x23926c(0xd5c)],'errors':_0x398cc4['error'+'s']['slice'](-0x1*0x8eb+0x20c1*0x1+-0x17d6,-0x1c3a*-0x1+-0x27d+-0x19b9)};}catch(_0x32eac1){return{'ok':![],'error':_0x4c2373(_0x32eac1&&_0x32eac1[_0x23926c(0x2ab)+'ge']||_0x32eac1)['slice'](-0xa9*-0x3+-0x2*0x120e+0x2221,-0x40e+-0x1dbd*0x1+-0x7*-0x4e5)};}else for(var _0x2a7ab5=-0x1*0x4f5+0x188a+-0x1395;_0x368390['KkFGY'](_0x2a7ab5,_0x53dd85['hooks'][_0x23926c(0xcc0)+'h']);_0x2a7ab5++){if('GFsMm'!==_0x23926c(0x291)){var _0x424228=_0x53dd85[_0x23926c(0x89a)][_0x2a7ab5];if(!_0x424228||_0x368390[_0x23926c(0x7ab)](_0x424228[_0x23926c(0x94a)+_0x23926c(0xb8d)],_0x23926c(0x971)+_0x23926c(0x83d)))continue;_0x1ae276++;if(_0x424228['table'+_0x23926c(0x31b)]!==undefined)_0x245429++;if(_0x424228['appli'+'ed'])_0x11c396++;}else _0xd0c5e4=_0x4fd9b0[_0x23926c(0x8be)](_0x597b96)['slice'](0x25bd+-0x58a+0x2033*-0x1,0x24d2+-0x13*-0x1a3+-0x43d3);}}}catch(_0x469703){}for(var _0x3c8606 in _0x1b5527){var _0x2d9db4=_0x1b5527[_0x3c8606];_0x47710e+=_0x2d9db4['hits']||0x1be6+-0x3b5*0x5+-0x95d,_0x4e6fe7+=(_0x2d9db4[_0x23926c(0x338)+'ts']||-0xac*0x1c+-0x1e*-0xc7+0x2*-0x241)+(_0x2d9db4['pairH'+'its']||0x15fa+0x922+0x16*-0x16a);}return{'registered':_0x117f5f,'total':_0x1ae276,'resolved':_0x245429,'applied':_0x11c396,'getterHits':_0x47710e,'setterHits':_0x4e6fe7,'distinct':Object['keys'](_0x1b5527)['lengt'+'h'],'errorCount':_0x27e418['lengt'+'h'],'errors':_0x27e418[_0x23926c(0x1dd)](-0x26c3+0xa4*0x3b+-0xf7*-0x1,-0x2180+-0x42*-0x6b+0x5ee)};}}function _0x474b46(){var _0x103ec7=_0x189e9a,_0x9db956={'GDIrx':_0x368390[_0x103ec7(0xda8)]};if(_0x368390[_0x103ec7(0x3c6)](_0x368390['supEf'],'PRVXW')){var _0x441238=null,_0x3a8dbc=0xa8d*0x2+-0xd9c+-0x77e;for(var _0x6c2b57 in _0x1b5527){var _0x5a79b7=_0x1b5527[_0x6c2b57];_0x5a79b7[_0x103ec7(0x493)+_0x103ec7(0xada)]&&_0x5a79b7['pairH'+_0x103ec7(0xada)]>_0x3a8dbc&&typeof _0x5a79b7[_0x103ec7(0x2db)+'st']===_0x368390[_0x103ec7(0xda8)]&&_0x368390[_0x103ec7(0xa50)](typeof _0x5a79b7[_0x103ec7(0x423)],_0x103ec7(0x93b)+'r')&&isFinite(_0x5a79b7['setLa'+'st'])&&isFinite(_0x5a79b7[_0x103ec7(0x423)])&&(_0x441238={'rawA':_0x5a79b7[_0x103ec7(0x2db)+'st'],'rawB':_0x5a79b7['setB'],'hits':_0x5a79b7['pairH'+_0x103ec7(0xada)],'name':_0x6c2b57},_0x3a8dbc=_0x5a79b7[_0x103ec7(0x493)+'its']);}if(!_0x441238)return null;var _0x430adb=_0x441238[_0x103ec7(0x527)]>=-(-0x21e6+0x24e5+0x2a5*-0x1)&&_0x368390[_0x103ec7(0x3de)](_0x441238[_0x103ec7(0x527)],0x24d0+-0x1065*-0x2+-0x10*0x454),_0x4312a7=_0x368390[_0x103ec7(0x62a)](_0x441238['rawB'],-(0xbf7+-0x2644+0x1aa7*0x1))&&_0x368390[_0x103ec7(0xaeb)](_0x441238['rawB'],0x22f*0x2+-0x626+0x222);if(_0x430adb!==_0x4312a7)_0x368390[_0x103ec7(0x2e7)]!==_0x368390[_0x103ec7(0x963)]?(_0x441238[_0x103ec7(0x1bf)]=_0x430adb?_0x441238[_0x103ec7(0x527)]:_0x441238['rawB'],_0x441238[_0x103ec7(0xdce)]=_0x430adb?_0x441238[_0x103ec7(0x591)]:_0x441238[_0x103ec7(0x527)],_0x441238[_0x103ec7(0x1f6)]=_0x430adb?_0x368390['EsIgE']:_0x368390[_0x103ec7(0xdb8)]):_0x2cd79c['error']=_0xb9562b(_0x438b77&&_0x569c44['messa'+'ge']||_0x4abdbe);else{if(_0x368390[_0x103ec7(0x36d)](_0x368390[_0x103ec7(0xa2f)],_0x103ec7(0xbfd))){var _0x19669c=_0x873fa9[_0x568e92];try{var _0x293720=_0x20baa0['hookP'+_0x103ec7(0x221)]({'typeName':_0x19669c[_0x103ec7(0xc3d)],'methodName':_0x103ec7(0xca9)+'e','params':[_0x103ec7(0xbf1),_0x103ec7(0xbf1)],'returnType':_0x3552b4},_0x1deabe(_0x19669c[_0x103ec7(0xc3d)],_0x19669c[_0x103ec7(0xbfc)],_0x19669c[_0x103ec7(0xd76)]));_0x51b5a7['push']({'type':_0x19669c['type'],'hook':_0x293720,'keep':_0x19669c['keep']});}catch(_0x15f48a){_0x1f1359[_0x103ec7(0x8f8)](_0x19669c['type']+':\x20'+_0x4456c7(_0x15f48a&&_0x15f48a[_0x103ec7(0x2ab)+'ge']||_0x15f48a)[_0x103ec7(0x1dd)](0x4aa+0x2*0x11c3+-0x2830,-0x5e7*-0x4+-0xfe9+-0x713));}}else _0x441238['pitch']=null,_0x441238['yaw']=null,_0x441238['order']=_0x368390['OsNwM'](_0x368390[_0x103ec7(0xbb3)](_0x103ec7(0xa81)+_0x103ec7(0x99d)+'\x20(',_0x430adb?_0x368390[_0x103ec7(0x939)]:'neith'+'er\x20bo'+_0x103ec7(0xa7f)),')');}return _0x441238;}else try{var _0x288987=_0x189c20[_0x103ec7(0x213)+'em'](_0x320e94);if(!_0x288987)return;var _0x112424=_0x784f6a[_0x103ec7(0x522)](_0x288987);if(_0x112424&&typeof _0x112424['x']===_0x9db956[_0x103ec7(0x746)]&&typeof _0x112424['y']===_0x9db956[_0x103ec7(0x746)])_0x171d4d['pos']=_0x112424;}catch(_0x3dc796){}}function _0x24b1a2(){var _0x58cae4=_0x189e9a,_0x103d71=-0x512*0x5+0x17c9+0x191;for(var _0x4d825f=-0x52e+-0xbd3+-0x5ab*-0x3;_0x4d825f<_0x5dfcca['lengt'+'h'];_0x4d825f++){if(_0x5dfcca[_0x4d825f][_0x58cae4(0x3d1)]&&_0x368390[_0x58cae4(0xa05)](_0x5dfcca[_0x4d825f][_0x58cae4(0x3d1)]['table'+_0x58cae4(0x31b)],undefined))_0x103d71++;}return _0x103d71;}function _0x17ff9c(){var _0x37f63e=_0x189e9a,_0x24c846=0x191*-0x7+-0x14c1+0x1c*0x122;for(var _0x1706f0=0x8db*0x1+-0x2f*0x4f+0x5a6;_0x368390['AnmsX'](_0x1706f0,_0x5dfcca[_0x37f63e(0xcc0)+'h']);_0x1706f0++){if(_0x5dfcca[_0x1706f0][_0x37f63e(0x3d1)]&&_0x5dfcca[_0x1706f0]['hook'][_0x37f63e(0xa6c)+'ed'])_0x24c846++;}return _0x24c846;}var _0x243879=null,_0x4d4871=[],_0x4f37b9={},_0xf90ee6=null;function _0x1932ca(_0x266d3f){var _0x2c91bd=_0x189e9a,_0x18b0bd={'zOjmA':'ESP\x20o'+'ff','WXolJ':'ESP\x20b'+_0x2c91bd(0x3c3),'pYXnH':'trans'+'paren'+'t'};try{if(_0x2c91bd(0xb10)===_0x2c91bd(0xb10)){if(_0x368390[_0x2c91bd(0x8ed)](!_0x2af87f,!_0x266d3f))return null;var _0x268c30=new _0x2af87f(_0x266d3f)[_0x2c91bd(0xe60)+'assNa'+'me']();return _0x368390['DZpPa'](_0x268c30,undefined)?null:_0x268c30;}else _0x368390[_0x2c91bd(0x424)](_0x393a20,_0x4408fc);}catch(_0x619831){if(_0x368390[_0x2c91bd(0xc4a)]==='ZyDJe')return null;else{var _0x19cd5e=_0x1b28fc&&_0x3900d1['esp'];if(!_0x19cd5e)return;if(_0x423768['boxes']&&!_0x5377a3())_0xe8340f[_0x2c91bd(0x407)]=![];var _0x320573=!_0x4019d5['on']?_0x18b0bd['zOjmA']:_0x6cfdd5['boxes']?_0x18b0bd[_0x2c91bd(0xdae)]:_0x2c91bd(0xead)+'ap';if(_0x320573!==_0x19cd5e[_0x2c91bd(0xab4)+'onten'+'t'])_0x19cd5e[_0x2c91bd(0xab4)+_0x2c91bd(0xa15)+'t']=_0x320573;_0x19cd5e['style']['backg'+_0x2c91bd(0xbe5)]=_0x302c7e['on']?_0x327184:_0x18b0bd[_0x2c91bd(0x3fe)],_0x19cd5e[_0x2c91bd(0x98e)]['color']=_0x33a8a9['on']?_0x2c91bd(0x804)+'1b':_0x2c91bd(0x391)+'f5';}}}function _0x5244f7(_0x5d807f,_0x2d8961,_0xcd7da2){var _0x1ae30c=_0x189e9a,_0x3978f3=_0x368390[_0x1ae30c(0xcaa)](_0x54fc63);if(!_0x3978f3)return null;if(_0x2d8961<0x2ae*-0x2+0x4e*0x1f+-0x416||_0x368390['WbwQR'](_0x2d8961+_0xcd7da2*(0x263b+-0x8ef+-0x4*0x752),_0x3978f3['byteL'+'ength']))return null;var _0x2fc402=[];for(var _0x5b9166=0x88b+0x87d*0x4+-0x2a7f;_0x5b9166<_0xcd7da2;_0x5b9166++)_0x2fc402['push'](_0x3978f3['getFl'+_0x1ae30c(0x4af)](_0x368390['cHGam'](_0x5d807f,_0x2d8961)+_0x5b9166*(-0x1*0x24bf+-0x1*-0x1bd3+0x8f0),!![]));return _0xd13a81['ok']+=_0xcd7da2,_0x2fc402;}var _0x1a9ae8={'PhotonNetworkSync':[[_0x189e9a(0xbe8),_0x368390[_0x189e9a(0x2e5)]],['0x20',_0x189e9a(0x7d3)+'h'],['0x24',_0x189e9a(0x1d9)+_0x189e9a(0x22d)],[_0x189e9a(0xbc2),_0x189e9a(0x8d1)],[_0x368390[_0x189e9a(0xd1e)],_0x189e9a(0x85e)+_0x189e9a(0x83d)]],'NetworkPlayerAnimations':[[_0x189e9a(0xbe8),_0x189e9a(0x605)+'le'],['0x18',_0x368390['lvHvA']]],'NPC_Cotroller':[['0x98',_0x368390[_0x189e9a(0xc6d)]],[_0x368390[_0x189e9a(0xd5b)],_0x368390['TWLKG']],[_0x189e9a(0x8b1),_0x368390['UrePi']],[_0x368390[_0x189e9a(0x26b)],_0x189e9a(0x900)+'tHeal'+'th2'],[_0x189e9a(0x402),'trans'+_0x189e9a(0x22d)]],'EnemyBot':[['0x14',_0x368390['oPOTU']]]},_0x540a6b={'PhotonNetworkSync':[['0x58','team'],['0x7c','local'+'Flag'],[_0x368390['gAbwO'],'id']]};function _0x4b1abd(_0x4fa5e6,_0x1fdcae){var _0x2588b9=_0x189e9a,_0x2a6fac={'HUPHv':function(_0x3243bb,_0x198cfa){return _0x368390['acXHo'](_0x3243bb,_0x198cfa);},'fMcuV':function(_0x2370fb,_0x8d1a3a){var _0x30996d=_0x4f94;return _0x368390[_0x30996d(0x910)](_0x2370fb,_0x8d1a3a);},'OPTXO':'funct'+_0x2588b9(0x762),'Favie':function(_0x2b20c0,_0x236dc6){return _0x368390['xqUVX'](_0x2b20c0,_0x236dc6);},'Cohxl':function(_0x1d52d5){return _0x368390['EZVAD'](_0x1d52d5);},'ILqnt':_0x368390['EOntq'],'RipcO':function(_0x72d5f7,_0x1b0ebb){return _0x72d5f7(_0x1b0ebb);}},_0xa56fd7=_0x117247[_0x4fa5e6]||[],_0x5dd1f6={'kind':_0x4fa5e6,'ptr':'0x'+_0x1fdcae[_0x2588b9(0x258)+'ing'](0x76*0x53+-0x1*-0xeff+0x11bb*-0x3),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x22cd0=-0x1*-0x15c5+0x1a99*0x1+0x12e*-0x29;_0x22cd0<_0xa56fd7['lengt'+'h'];_0x22cd0++){if(_0x368390[_0x2588b9(0x6c2)](_0x2588b9(0xbf4),_0x2588b9(0xa83))){var _0x34d205=_0x3f25f2[_0x4d82cc][_0x2588b9(0x1ce)+'et']['k'],_0x45305b='';if(_0x368390[_0x2588b9(0xb55)](_0x34d205,'VERSI'+'ON'))_0x45305b=_0x2b2cef?_0x282ad5[_0x2588b9(0x70b)+'on']:'-';else{if(_0x34d205===_0x368390[_0x2588b9(0x28a)])_0x45305b=_0x5f4358?_0x2278c8[_0x2588b9(0x89a)+'Appli'+'ed']+'\x20/\x20'+_0xee02d2['hooks'+_0x2588b9(0x640)+_0x2588b9(0x822)+_0x2588b9(0xceb)]:'-';else{if(_0x34d205===_0x2588b9(0x4e8)+'insta'+'ntiat'+'e()')_0x45305b=_0x479d18&&_0x572d73['wasmM'+_0x2588b9(0xcee)]&&_0x5487bb[_0x2588b9(0x80a)+_0x2588b9(0xcee)]['captu'+_0x2588b9(0x25e)]?_0x368390[_0x2588b9(0x32a)](_0x368390[_0x2588b9(0xe5c)](_0x387c69[_0x2588b9(0xbe5)](_0xa63fd7['wasmM'+_0x2588b9(0xcee)][_0x2588b9(0xaee)]/(0xb6*-0x985+-0x1*-0x32b3c+0x2*0x9cca9)),_0x368390['KAMXp']),_0x572a85[_0x2588b9(0x80a)+_0x2588b9(0xcee)][_0x2588b9(0x6fb)])+'ms':'-';else{if(_0x368390[_0x2588b9(0x23b)](_0x34d205,_0x368390['XAjXw']))_0x45305b=_0x475eb0&&_0x44035b[_0x2588b9(0xc5e)]?_0x368390['rAVcN'](_0x268c0a,_0x54b6e9['esp'][_0x2588b9(0x274)+_0x2588b9(0x6db)+'t']):'-';else{if(_0x34d205===_0x368390['rzKTn'])_0x45305b=_0x3d989a&&_0x513205[_0x2588b9(0xc5e)]?_0x18654f(_0x14b7ef['esp']['enemy'+_0x2588b9(0xc84)]):'-';else{if(_0x368390['PFsjv'](_0x34d205,_0x2588b9(0x7dd)+_0x2588b9(0xe63)+'ve\x20ma'+'nager'))_0x45305b=_0x3e0f8f&&_0x209e98[_0x2588b9(0xc5e)]&&_0x416624[_0x2588b9(0xc5e)]['camer'+'a']?_0x368390['UCZRg'](_0x570bc2[_0x2588b9(0xc5e)][_0x2588b9(0x4de)+'a']+'\x20('+_0x346160['esp'][_0x2588b9(0x4de)+_0x2588b9(0x8c2)],')'):'-';else{if(_0x34d205===_0x2588b9(0x76c)+_0x2588b9(0x9d1)+_0x2588b9(0xc88)+'x2E4')_0x45305b=_0x113b00&&_0x274a3b['local']&&_0x49e867['local'][_0x2588b9(0x9de)]?_0x55bff2[_0x2588b9(0xcb6)][_0x2588b9(0x9de)][_0x2588b9(0x7bb)](function(_0x2fd852){var _0xd34993=_0x2588b9;return _0x540e82[_0xd34993(0xbe5)](_0x2a6fac[_0xd34993(0x6ad)](_0x2fd852,-0x115*0x1f+0x107e*0x1+0x1171))/(-0x1e7b+-0x1c63+0x3b42);})['join']('\x20\x20'):'-';else{if(_0x368390[_0x2588b9(0xc8a)](_0x34d205,'+0x29'+'8'))_0x45305b=_0x374c65&&_0x251c07[_0x2588b9(0xcb6)]&&_0x4d1d1b['local'][_0x2588b9(0x33c)]?_0x20e640[_0x2588b9(0xcb6)]['eye'][_0x2588b9(0x7bb)](function(_0x314af3){var _0x215731=_0x2588b9;return _0x3d2ddd[_0x215731(0xbe5)](_0x314af3*(0x733*0x5+-0x1768+-0xc33*0x1))/(0x7*0x2ed+-0x250d+-0x87b*-0x2);})[_0x2588b9(0xe4b)]('\x20\x20'):'-';else{var _0x163d9d=_0x34d205[_0x2588b9(0x464)]('+');_0x45305b=_0x36dd88(_0x2c8966,_0x163d9d[0x2*0x1041+-0x3d*0x56+-0x301*0x4][_0x2588b9(0xbdf)+'Of'](_0x368390['KNoQy'])===0x1dcc+0xdcf+0xe89*-0x3?'Healt'+'hScri'+'pt':_0x2588b9(0x76c)+'ntrol'+'ler',_0x2515f9(_0x163d9d[-0xacf*-0x2+0xb32+0x20cf*-0x1],-0x25cf+0x1f1c*0x1+-0x6c3*-0x1));}}}}}}}}if(_0x368390[_0x2588b9(0x4c2)](_0x45305b,_0x377d82[_0x506d60]['textC'+'onten'+'t']))_0xc2ce47[_0x2ceb08]['textC'+'onten'+'t']=_0x45305b;}else{if(_0xa56fd7[_0x22cd0][-0x139d*0x1+0xebe+0x4e0]!=='v3')continue;var _0x250500=_0x5244f7(_0x1fdcae,_0xa56fd7[_0x22cd0][0x1*-0x131b+0x2549+-0x122e],0x374+-0x1e6e+0x149*0x15);if(!_0x250500)continue;_0x5dd1f6[_0x2588b9(0xcd1)+'cs'][_0x2588b9(0x8f8)]({'o':'0x'+_0xa56fd7[_0x22cd0][-0x1bc8+0xc75+0x1*0xf53][_0x2588b9(0x258)+'ing'](0x234f*0x1+0x698+0x1*-0x29d7),'v':_0x250500});}}var _0xd96074=-0x250f+-0x220*0xa+-0x3b*-0xfd,_0x4951e2=_0x368390[_0x2588b9(0xe80)](_0x368390[_0x2588b9(0xbb3)](_0x4fa5e6,'@'),_0x1fdcae),_0x24b6cb=_0x368390['GFJoQ'](_0x1d4944,_0x5dd1f6[_0x2588b9(0xcd1)+'cs'],_0x368390[_0x2588b9(0x2c2)](_0x44f38d),_0xd09501[_0x4951e2]);_0xd09501[_0x4951e2]=_0x24b6cb[_0x2588b9(0xaa3)]?{'o':_0x24b6cb['posAt']}:null,_0x5dd1f6[_0x2588b9(0x90e)]=_0x24b6cb['pos'],_0x5dd1f6[_0x2588b9(0xaa3)]=_0x24b6cb[_0x2588b9(0xaa3)],_0x5dd1f6[_0x2588b9(0xa16)]=_0x24b6cb[_0x2588b9(0xa16)],_0x5dd1f6['candi'+_0x2588b9(0x998)]=_0x24b6cb['candi'+_0x2588b9(0x998)],_0x5dd1f6['clust'+'er']=_0x24b6cb['clust'+'er'],_0x5dd1f6[_0x2588b9(0x28f)]=_0x24b6cb[_0x2588b9(0x28f)],void _0xd96074;var _0x2e9d17=_0x1a9ae8[_0x4fa5e6],_0x5aff1e=_0x540a6b[_0x4fa5e6];if(_0x5aff1e){if(_0x368390['CWYOs'](_0x368390[_0x2588b9(0x23f)],_0x368390[_0x2588b9(0x23f)])){_0x5dd1f6['tag']={};for(var _0x35f741=-0x6cc*0x1+-0xa09+0x10d5;_0x35f741<_0x5aff1e['lengt'+'h'];_0x35f741++){var _0x24234c=_0x78d2b7(_0x368390[_0x2588b9(0x70f)](_0x1fdcae,parseInt(_0x5aff1e[_0x35f741][0x1407+-0x76e+-0x433*0x3],0x1e31+-0x5b0+0x1871*-0x1)),'i32');if(_0x24234c!==undefined)_0x5dd1f6[_0x2588b9(0x5b3)][_0x5aff1e[_0x35f741][0x219f+0x1*0x16b6+-0x3854]]=_0x24234c;}}else{_0x5d864d[0x264d+-0x2654+0x4*0x2]&&_0x2a6fac[_0x2588b9(0x644)](typeof _0x106f26[-0x1c5e+-0xaf1*0x1+0x2750]['val'],'funct'+'ion')&&(_0x1387e3[_0x2588b9(0x2db)+'st']=_0x1808ba[-0x1*-0x252b+0x2517+-0x4a41]['val'](),_0x1b5618[_0x2588b9(0x338)+'ts']++);_0x1f8371[0x1*-0xaa+0x11a1+0x1*-0x10f5]&&_0x2a6fac['fMcuV'](typeof _0xfe10b2[-0x3b*0x86+-0x135a+0x323e]['val'],_0x2a6fac['OPTXO'])&&(_0x2c11f0['setB']=_0x7e70f9[-0x1d*0x115+0x3b*-0x4+0xac5*0x3][_0x2588b9(0x9a0)](),_0x53f4a6['pairH'+_0x2588b9(0xada)]++);if(_0x2cc0bc[-0x1*0x226d+-0x2*-0x41b+0x1a37]&&typeof _0x48b69b[0x15ba+0x240d+-0x39c7][_0x2588b9(0x9a0)]===_0x2a6fac[_0x2588b9(0x46c)]){var _0x47bbe1=_0x12dfe8[0x2*-0x406+0x219a+-0x198e]['val']();if(_0x47bbe1)_0x113c47=_0x47bbe1;}}}if(_0x2e9d17)for(var _0x2839c0=-0xd5a+-0x768+-0x14c2*-0x1;_0x2839c0<_0x2e9d17[_0x2588b9(0xcc0)+'h'];_0x2839c0++){var _0x4c1669=_0x78d2b7(_0x368390['ihvtM'](_0x1fdcae,_0x368390[_0x2588b9(0xa36)](parseInt,_0x2e9d17[_0x2839c0][-0x2028+0x1722+0xd2*0xb],0xe7+0xe*-0x1b1+-0x1*-0x16d7)),_0x2588b9(0xe68));if(_0x4c1669)_0x5dd1f6['refs'][_0x2e9d17[_0x2839c0][-0x2225+0x2e*0xb0+0x286]]=_0x368390[_0x2588b9(0x32a)]('0x',(_0x4c1669>>>0x194e+0x1*-0x1a05+-0xb7*-0x1)[_0x2588b9(0x258)+_0x2588b9(0x5f9)](0x6fb+-0x167a+0x7*0x239));}return _0x5dd1f6[_0x2588b9(0x2f3)+'rs']=_0xa56fd7[_0x2588b9(0x999)+'r'](function(_0x491054){var _0x1efae1=_0x2588b9;if(_0x368390[_0x1efae1(0xb07)]!==_0x368390[_0x1efae1(0x378)])return _0x368390['cguEC'](_0x491054[-0x1574+-0x1*0xa99+0x1*0x200e],_0x368390['sgEMu'])||_0x491054[0x95d+-0xa+-0x952]===_0x368390['kgqtG'];else{var _0x11c7ab=_0x12b619[_0x19e2eb];_0x540504[_0x1efae1(0x8f8)](_0x2a6fac[_0x1efae1(0x623)](_0x11c7ab+'\x20@\x20',_0x1cd4e2[_0x11c7ab]));}})['map'](function(_0x3ef96a){var _0xbe6711=_0x2588b9;return{'o':_0x2a6fac['Favie']('0x',_0x3ef96a[0x20b3+-0x20b5+0x2]['toStr'+_0xbe6711(0x5f9)](0x231e+-0x1*0x3ab+-0x1f63)),'v':_0x78d2b7(_0x1fdcae+_0x3ef96a[0x1b34+0x864*-0x2+0x3a*-0x2e],_0x3ef96a[-0x257d+0x1786+0xdf8])};})[_0x2588b9(0x999)+'r'](function(_0x563808){var _0x405946=_0x2588b9;if(_0x405946(0x54e)!==_0x2a6fac[_0x405946(0x292)])return _0x563808['v']!==undefined&&_0x2a6fac['RipcO'](isFinite,_0x563808['v']);else try{_0x2a6fac[_0x405946(0xdca)](_0x256e55);}catch(_0x596604){}})[_0x2588b9(0x1dd)](-0x201a+0x194c+0x6ce,0x28f+-0x215b*0x1+-0x524*-0x6),_0x5dd1f6;}function _0x3a212e(){var _0x1e8b9a=_0x189e9a,_0x5a1a7c={'OFHuM':function(_0x3073c3,_0x2238dc){var _0xc1e381=_0x4f94;return _0x368390[_0xc1e381(0x5e5)](_0x3073c3,_0x2238dc);},'NkQzZ':function(_0x27793e,_0x442174){return _0x27793e-_0x442174;},'loAkj':function(_0x4e8db2,_0x46e9af){return _0x4e8db2*_0x46e9af;},'wPrDh':function(_0x49c28c,_0x5e53c4){return _0x49c28c/_0x5e53c4;},'jClQm':function(_0x10f481,_0x46fc17){return _0x10f481*_0x46fc17;},'yYtcG':function(_0x54f2fa,_0x34c5bc){return _0x54f2fa(_0x34c5bc);},'ekmHP':function(_0x2571c1,_0x4dd51f){return _0x2571c1===_0x4dd51f;}};if(_0x368390[_0x1e8b9a(0xcbb)]('olvFU',_0x1e8b9a(0xa4d))){if(_0xe28120&&_0x38c456['buffe'+'r']&&_0x35b5f6[_0x1e8b9a(0x26f)+'r'][_0x1e8b9a(0x409)+'ength'])return _0xbcf12c['sourc'+'e']=_0x12b405['sourc'+'e']||_0x1e8b9a(0x571)+_0x1e8b9a(0xb90)+'e().e'+_0x1e8b9a(0x994)+'s.mem'+_0x1e8b9a(0xd29),new _0x2aac3f(_0xaeff65['buffe'+'r']);}else{var _0x4db72f={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x4eb3d8=_0x3bbae7['FPSco'+'ntrol'+'ler']&&_0x3bbae7['FPSco'+'ntrol'+_0x1e8b9a(0x88e)]['ptr']||0x23f+0x613+-0x852,_0xe1096a=_0x4326f1['Photo'+_0x1e8b9a(0x2ca)+_0x1e8b9a(0xa5d)+'nc']||{},_0x453573=Object[_0x1e8b9a(0x8be)](_0xe1096a);for(var _0xaff539=0xdee*-0x1+-0x1fce+0x2dbc;_0xaff539<_0x453573['lengt'+'h']&&_0x368390['LkJkP'](_0xaff539,-0x1a74+-0x1*0x757+0x21e3);_0xaff539++){var _0x5a9adf=_0xe1096a[_0x453573[_0xaff539]],_0x5bcdee=_0x4b1abd(_0x1e8b9a(0x4d3)+'nNetw'+'orkSy'+'nc',_0x5a9adf[_0x1e8b9a(0xe9d)]);_0x5bcdee[_0x1e8b9a(0xe3e)]=_0x5a9adf[_0x1e8b9a(0xe3e)],_0x5bcdee['first'+_0x1e8b9a(0x651)+'s']=_0x5a9adf['first'+_0x1e8b9a(0x781)]-_0x5ef975,_0x5bcdee[_0x1e8b9a(0xce8)+'al']=!!_0x4eb3d8&&_0x368390[_0x1e8b9a(0xc03)](_0x5bcdee['refs'][_0x1e8b9a(0x8d1)],'0x'+_0x4eb3d8[_0x1e8b9a(0x258)+_0x1e8b9a(0x5f9)](0xc2b+0x2c*0x8f+-0x24af));if(_0x5bcdee[_0x1e8b9a(0x64d)][_0x1e8b9a(0x7d3)+'h']){var _0x11ccd4=parseInt(_0x5bcdee[_0x1e8b9a(0x64d)][_0x1e8b9a(0x7d3)+'h'],0x1a0b+0x189b*-0x1+-0x160);_0x5bcdee[_0x1e8b9a(0x7d3)+'h']=_0x368390[_0x1e8b9a(0xa31)](_0x17ec89,_0x11ccd4,_0x1e8b9a(0xccc)+'hScri'+'pt',_0x1e8b9a(0xa1a));}_0x4db72f['playe'+'rs'][_0x1e8b9a(0x8f8)](_0x5bcdee);}_0x4db72f[_0x1e8b9a(0x274)+'rCoun'+'t']=_0x453573[_0x1e8b9a(0xcc0)+'h'];var _0x3c4fdf=_0x4326f1[_0x1e8b9a(0x566)+'otrol'+_0x1e8b9a(0x88e)]||{},_0x3e2ba0=Object['keys'](_0x3c4fdf);for(var _0x2066f9=0x202a+-0x23d0+0x3a6;_0x368390[_0x1e8b9a(0x36b)](_0x2066f9,_0x3e2ba0['lengt'+'h'])&&_0x2066f9<0x649*0x2+-0x1c8d*-0x1+-0x2907;_0x2066f9++){var _0x4cf24d=_0x4b1abd(_0x1e8b9a(0x566)+'otrol'+_0x1e8b9a(0x88e),_0x3c4fdf[_0x3e2ba0[_0x2066f9]][_0x1e8b9a(0xe9d)]);_0x4cf24d['hits']=_0x3c4fdf[_0x3e2ba0[_0x2066f9]]['hits'],_0x4cf24d[_0x1e8b9a(0xda0)+_0x1e8b9a(0x651)+'s']=_0x368390[_0x1e8b9a(0x5e5)](_0x3c4fdf[_0x3e2ba0[_0x2066f9]][_0x1e8b9a(0xda0)+'Seen'],_0x5ef975);if(_0x4cf24d[_0x1e8b9a(0x64d)]['healt'+'h'])_0x4cf24d[_0x1e8b9a(0x7d3)+'h']=_0x368390[_0x1e8b9a(0xba8)](_0x17ec89,_0x368390['FhZAz'](parseInt,_0x4cf24d['refs']['healt'+'h'],-0x163b*-0x1+-0x1344+0x1*-0x2e7),_0x1e8b9a(0xccc)+'hScri'+'pt','obfI');_0x4db72f[_0x1e8b9a(0x639)]['push'](_0x4cf24d);}_0x4db72f['botCo'+'unt']=_0x3e2ba0[_0x1e8b9a(0xcc0)+'h'];var _0x459a79=_0x4326f1[_0x1e8b9a(0x76c)+_0x1e8b9a(0x9d1)+'ler']||{},_0x225932=Object['keys'](_0x459a79);for(var _0x1fd924=-0x1c42+0x1482+0x7c0;_0x1fd924<_0x225932[_0x1e8b9a(0xcc0)+'h']&&_0x368390[_0x1e8b9a(0xb45)](_0x1fd924,-0x846+-0x1cfe+-0x2*-0x12ae);_0x1fd924++){var _0x397265=_0x368390[_0x1e8b9a(0xa36)](_0x4b1abd,_0x368390[_0x1e8b9a(0xb7f)],_0x459a79[_0x225932[_0x1fd924]]['ptr']);_0x397265[_0x1e8b9a(0xe3e)]=_0x459a79[_0x225932[_0x1fd924]][_0x1e8b9a(0xe3e)],_0x397265['isLoc'+'al']=_0x459a79[_0x225932[_0x1fd924]]['ptr']===_0x4eb3d8,_0x4db72f[_0x1e8b9a(0x98c)+'oller'+'s']['push'](_0x397265);}_0x4db72f['contr'+_0x1e8b9a(0x501)+_0x1e8b9a(0xc84)]=_0x225932['lengt'+'h'];var _0xfb6671=_0x4db72f['playe'+'rs'][_0x1e8b9a(0xad9)+'t'](_0x4db72f['bots']);for(var _0x4b537b=-0xfc3+-0x2227+-0x31ea*-0x1;_0x4b537b<_0xfb6671[_0x1e8b9a(0xcc0)+'h'];_0x4b537b++){if(_0x368390['WRGOp']!==_0x1e8b9a(0xb0b)){var _0x4cd092=_0x5a1a7c[_0x1e8b9a(0x72d)](_0x150f46[-0x24cf+-0x1*-0x1db5+0x71a],_0x2ee987['feet'][0x213b+0x164f*0x1+-0x378a]),_0x4cd4f2=_0x5a1a7c[_0x1e8b9a(0x80e)](_0x4863d3[-0x2*0xd27+0x1c35+-0x5*0x61],_0x3d7108[_0x1e8b9a(0x9de)][0x2d*0x6f+-0xf5+0x1*-0x128c]);_0x5bf7fc['d']=_0x1a7bc9['sqrt'](_0x5a1a7c['loAkj'](_0x4cd092,_0x4cd092)+_0x4cd4f2*_0x4cd4f2),_0x138995[_0x1e8b9a(0x821)+'ng']=_0x5a1a7c[_0x1e8b9a(0xb51)](_0x5a1a7c[_0x1e8b9a(0xbc5)](_0x4fc360[_0x1e8b9a(0xaab)](_0x4cd092,_0x4cd4f2),-0x1d*0x97+-0x12e9*-0x1+-0x3*0x5e),_0x1cd6ec['PI']);}else{if(_0xfb6671[_0x4b537b][_0x1e8b9a(0xce8)+'al'])continue;_0x4db72f[_0x1e8b9a(0xc1b)+'es']['push'](_0xfb6671[_0x4b537b]);}}_0x4db72f[_0x1e8b9a(0xbb5)+'Count']=_0x4db72f['enemi'+'es']['lengt'+'h'];var _0x2e6f39={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x20a481={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x8dd37a in _0x3bbae7){var _0x2dd0a2=_0x3bbae7[_0x8dd37a];if(!_0x2dd0a2||!_0x2dd0a2['ptr'])continue;if(!(_0x8dd37a in _0x2e6f39))continue;_0x4db72f['manag'+_0x1e8b9a(0x97d)][_0x8dd37a]='0x'+_0x2dd0a2['ptr'][_0x1e8b9a(0x258)+'ing'](0x8a9+0x19*-0x11f+0x136e);var _0x2b2a4e=_0x78d2b7(_0x2dd0a2[_0x1e8b9a(0xe9d)]+_0x2e6f39[_0x8dd37a],_0x1e8b9a(0xe68)),_0x48afbf=_0x368390['FhZAz'](_0x78d2b7,_0x368390[_0x1e8b9a(0x38a)](_0x2dd0a2[_0x1e8b9a(0xe9d)],_0x20a481[_0x8dd37a]),'u32');_0x2b2a4e&&_0x4db72f[_0x1e8b9a(0x4de)+'a']===null&&(_0x4db72f[_0x1e8b9a(0x4de)+'a']=_0x368390[_0x1e8b9a(0xabf)]('0x',(_0x2b2a4e>>>-0x565*-0x4+-0x8b*-0x7+-0x1961)['toStr'+'ing'](-0x1cb7+0x571+0x1756)),_0x4db72f[_0x1e8b9a(0x4de)+_0x1e8b9a(0x8c2)]=_0x8dd37a);if(_0x48afbf&&_0x368390[_0x1e8b9a(0xa0a)](_0x4db72f['playe'+_0x1e8b9a(0xdeb)],null))_0x4db72f['playe'+_0x1e8b9a(0xdeb)]=_0x368390['jBaLr']('0x',(_0x48afbf>>>-0x19d2+0x2b*0x5+0x18fb)[_0x1e8b9a(0x258)+'ing'](0x2141+-0x12af*-0x1+-0x19f*0x20));}if(!_0x4db72f[_0x1e8b9a(0x274)+'rCoun'+'t']&&!_0x4db72f[_0x1e8b9a(0xaaa)+'unt']&&!_0x4db72f[_0x1e8b9a(0x4de)+'a'])_0x4db72f[_0x1e8b9a(0xc7e)]=_0x368390[_0x1e8b9a(0xa34)]+_0x368390['amvpI'];else{if(!_0x4db72f['enemy'+'Count']){if(_0x368390['cREBq']!==_0x368390[_0x1e8b9a(0x3e3)])_0x4db72f[_0x1e8b9a(0xc7e)]=_0x1e8b9a(0x9c8)+_0x1e8b9a(0x277)+_0x1e8b9a(0x4d1)+_0x1e8b9a(0x43c)+'but\x20n'+'one\x20a'+_0x1e8b9a(0x97f)+'assif'+'ied\x20a'+_0x1e8b9a(0xc05)+'mies\x20'+_0x1e8b9a(0xcd3)+_0x1e8b9a(0xdf3)+'k\x20'+(_0x1e8b9a(0xce8)+_0x1e8b9a(0xd0c)+_0x1e8b9a(0xba5)+'\x20entr'+_0x1e8b9a(0x911)+'`play'+_0x1e8b9a(0x582));else return{'err':_0x5a1a7c['yYtcG'](_0x383f26,_0x245da1&&_0x4204a0['messa'+'ge']),'stack':_0x2ffb2f(_0x5612d6&&_0x27063a[_0x1e8b9a(0x690)])};}}try{var _0x548162=window[_0x1e8b9a(0xd88)+'WebMo'+'dkit']&&window[_0x1e8b9a(0xd88)+_0x1e8b9a(0x917)+_0x1e8b9a(0xcdd)][_0x1e8b9a(0x79a)+'me'],_0x181565=_0x548162&&_0x548162['inter'+'nalWa'+_0x1e8b9a(0x40c)+'es']||[],_0x337be8={};for(var _0x2add11=-0x8*-0x1d6+0x112e+-0x2*0xfef;_0x2add11<_0x181565[_0x1e8b9a(0xcc0)+'h']&&_0x2add11<-0x1*-0x2122+0xe3c+-0x1fbe;_0x2add11++){if(_0x368390[_0x1e8b9a(0x9d7)](_0x1e8b9a(0x808),'SOeRb')){var _0x2e76cb=_0x368390['rKnIu'](_0x368390[_0x1e8b9a(0xb5b)](_0x181565[_0x2add11][_0x1e8b9a(0x2dd)+'s'][_0x1e8b9a(0xe4b)](','),'\x20->\x20'),_0x181565[_0x2add11]['retur'+_0x1e8b9a(0x50d)]||_0x1e8b9a(0xb88));_0x337be8[_0x2e76cb]=_0x368390[_0x1e8b9a(0x5a9)](_0x337be8[_0x2e76cb]||-0xb*-0x1c1+-0x1211+0x2*-0x9d,0x1f83+-0x6f0+-0x1892);}else return _0x5a1a7c[_0x1e8b9a(0xcc9)](_0x8bb6a0[_0x1e8b9a(0xc3d)],_0x4da1f2);}_0x4db72f['wasmT'+'ypes']=_0x337be8;}catch(_0x97d081){}return _0x4db72f;}}function _0x17ec89(_0x9dbc0b,_0x15fcdd,_0x256636){var _0x51174a=_0x189e9a;try{var _0x46983e=_0x117247[_0x15fcdd]||[];for(var _0x2d0b7d=-0x31*0x3e+-0x1954+0x211*0x12;_0x2d0b7d<_0x46983e['lengt'+'h'];_0x2d0b7d++){if(_0x46983e[_0x2d0b7d][0x3dd*0x9+0x112c+-0x33f0]!==_0x256636)continue;var _0x222081=_0x46983e[_0x2d0b7d][-0x1*0x1f51+-0x121a+0x1079*0x3];if(_0x368390['Nosef'](_0x256636[_0x51174a(0xbdf)+'Of'](_0x51174a(0x8d7)),0xb6*0xd+0x1f1e*0x1+-0x35d*0xc)){var _0x411477=_0x368390[_0x51174a(0x6b8)](_0x43f237,_0x9dbc0b,_0x222081,_0x256636);if(!_0x411477)return null;_0x411477['o']=_0x222081,_0x411477['k']=_0x256636;var _0x5e63fe=_0x1ee20e([_0x411477]);if(!_0x5e63fe[_0x51174a(0x93a)][_0x51174a(0xcc0)+'h'])return null;return _0x5e63fe[_0x51174a(0x93a)][0xf5c*0x1+-0x2658+0x16fc];}var _0x2708b3=_0x78d2b7(_0x9dbc0b+_0x222081,_0x256636);if(_0x2708b3===undefined)return null;return{'o':'0x'+_0x222081['toStr'+_0x51174a(0x5f9)](-0xd81*-0x1+0x1*0x2401+0x18b9*-0x2),'v':_0x2708b3};}}catch(_0x212c2f){}return null;}function _0x176937(){var _0x7bd680=_0x189e9a,_0xd0de83={};_0xd13a81['ok']=0x69*0x46+0x11aa*0x1+-0x2e60,_0xd13a81['faile'+'d']=-0x21db+0x1*-0x1085+0x3260,_0xd13a81[_0x7bd680(0x2cc)+_0x7bd680(0x9e9)]=null;var _0xe668e=Object[_0x7bd680(0x8be)](_0x117247);for(var _0x44640a=-0xc*0xac+-0xf5b+0x176b;_0x44640a<_0xe668e['lengt'+'h'];_0x44640a++){var _0xc20f3f=_0xe668e[_0x44640a],_0x2ab721=_0x3bbae7[_0xc20f3f];if(!_0x2ab721||!_0x2ab721[_0x7bd680(0xe9d)])continue;var _0x136d22=_0x117247[_0xc20f3f]||[],_0x31bdf9=[];for(var _0x4906e2=-0x99*0x1e+-0x35*-0x89+-0xa6f;_0x4906e2<_0x136d22[_0x7bd680(0xcc0)+'h'];_0x4906e2++){if(_0x368390['rUTVR']('NikPX',_0x7bd680(0x4ae))){_0x15292b=_0x1545ab,_0x24f82f=[],_0x368390[_0x7bd680(0xa36)](_0x1e5421,_0x7bd680(0x83f)+'t',{'report':_0x2f49bc()});return;}else{var _0x24ba08=_0x136d22[_0x4906e2][0x1bc4+-0x259f+0x9db],_0x40287d=_0x136d22[_0x4906e2][0x52*0xa+0x1eae+0xb4b*-0x3];if(_0x368390['CDtBd'](_0x40287d[_0x7bd680(0xbdf)+'Of']('obf'),0x1*-0x1d45+-0x1157*-0x1+0xbee)){var _0x5f5a78=_0x43f237(_0x2ab721['ptr'],_0x24ba08,_0x40287d);if(!_0x5f5a78)continue;_0x5f5a78['o']=_0x24ba08,_0x5f5a78['k']=_0x40287d,_0x31bdf9['push'](_0x5f5a78);}else{if(_0x368390[_0x7bd680(0xe1f)]!==_0x7bd680(0x22c)){var _0x1e205a=_0x368390['hSJqO'](_0x20393e),_0x57ef17=null,_0x59c744=_0x4cf352,_0xc1ed4a=_0x250d35[_0x7bd680(0x1df)];if(_0x1e205a['basis']){_0x57ef17=_0x1e205a['basis'];if(_0x1e205a['pos'])_0x59c744=_0x1e205a[_0x7bd680(0x90e)];if(_0x368390['hFeaP'](_0x1e205a['fov'],null))_0xc1ed4a=_0x1e205a[_0x7bd680(0x1df)];}var _0x17fd36,_0xa851aa,_0x1bf24e,_0x3dc696,_0x496ddc,_0xa860fe,_0x4452b6,_0x3aeddf,_0x2c452c;if(_0x57ef17){var _0x1e3328=('4|5|6'+_0x7bd680(0x1c7)+_0x7bd680(0x932)+'|8')['split']('|'),_0x46fcbe=-0x1df3+-0x1cc9+0x2a*0x166;while(!![]){switch(_0x1e3328[_0x46fcbe++]){case'0':_0x3aeddf=_0x57ef17['up'][-0x1048+-0x39+0x1082*0x1];continue;case'1':_0x4452b6=_0x57ef17['up'][0x1748+-0x3f0+-0x1*0x1358];continue;case'2':_0x496ddc=_0x57ef17[_0x7bd680(0x603)][-0x24d4+-0x1*0x26c3+0x4b98];continue;case'3':_0x3dc696=_0x57ef17[_0x7bd680(0x603)][-0xc8c+-0x24ca+0x5*0x9de];continue;case'4':_0x17fd36=_0x57ef17[_0x7bd680(0x773)][-0x2*0xaad+-0x8*0x133+0x1*0x1ef2];continue;case'5':_0xa851aa=_0x57ef17[_0x7bd680(0x773)][-0xdc4+0x1ebe+-0x10f9];continue;case'6':_0x1bf24e=_0x57ef17['fwd'][0xa12+0x3f6+0x1*-0xe06];continue;case'7':_0xa860fe=_0x57ef17[_0x7bd680(0x603)][0x859*-0x1+0x1*0x2537+-0x1*0x1cdc];continue;case'8':_0x2c452c=_0x57ef17['up'][0x11a6+0xc9a*-0x1+0x56*-0xf];continue;}break;}}else{var _0xa5b0e9=_0x368390['AilVG']['split']('|'),_0x1f63c4=0x3*-0x757+-0x1cce*0x1+-0x3*-0x10f1;while(!![]){switch(_0xa5b0e9[_0x1f63c4++]){case'0':_0xa860fe=-_0x17fd36;continue;case'1':_0x1bf24e=_0x228fee['cos'](_0x4bc97c)*_0x4cb984;continue;case'2':_0x3dc696=_0x1bf24e;continue;case'3':_0x3aeddf=_0x1bf24e*_0x3dc696-_0x17fd36*_0xa860fe;continue;case'4':_0x17fd36=_0x368390[_0x7bd680(0x79f)](_0x545afc['sin'](_0x4bc97c),_0x4cb984);continue;case'5':_0x4452b6=_0xa851aa*_0xa860fe-_0x1bf24e*_0x496ddc;continue;case'6':_0x496ddc=0x102*0x1b+-0x1dce+-0xa6*-0x4;continue;case'7':_0x2c452c=_0x368390['aolDV'](_0x17fd36,_0x496ddc)-_0x368390[_0x7bd680(0x1f0)](_0xa851aa,_0x3dc696);continue;case'8':var _0x4cb984=_0x1a17ef['cos'](_0x10302f);continue;case'9':var _0x10302f=_0x368390['QwKse'](_0x6f79a6['pitch'],_0x3a9fcc['PI'])/(-0x23d2+0x1f3c+0x54a),_0x4bc97c=_0x368390[_0x7bd680(0x539)](_0x6f79a6['yaw'],_0x18c334['PI'])/(-0x1d*0x133+0xb20*0x3+0x21b);continue;case'10':if(!_0x6f79a6)return null;continue;case'11':var _0x6f79a6=_0x3478ea();continue;case'12':_0xa851aa=-_0x3e9205['sin'](_0x10302f);continue;}break;}}var _0x5e44f0=_0x368390[_0x7bd680(0x5e5)](_0x1db33e[0x1*0x24b1+0x390+0xd6b*-0x3],_0x59c744[0x7*0x49e+-0x102*0x19+-0x720]),_0x523732=_0x259e27[-0x23fb+-0x2606+0x2*0x2501]-_0x59c744[-0x3*-0x2bb+-0x7*-0x98+-0xc58],_0x5a5132=_0x109164[0x71b*0x4+0x3*0x781+-0x32ed]-_0x59c744[-0xa84*-0x1+0x57*0x25+0x1715*-0x1],_0x95e589=_0x368390[_0x7bd680(0xe5c)](_0x368390[_0x7bd680(0x79f)](_0x5e44f0,_0x17fd36),_0x523732*_0xa851aa)+_0x5a5132*_0x1bf24e;if(_0x368390[_0x7bd680(0xaeb)](_0x95e589,0x23b7+0xc*-0x1fd+0x25f*-0x5+0.05))return null;var _0x3de708=_0x368390['SefGz'](_0x5e44f0*_0x3dc696,_0x523732*_0x496ddc)+_0x5a5132*_0xa860fe,_0x48e35d=_0x368390[_0x7bd680(0xc0e)](_0x5e44f0*_0x4452b6+_0x523732*_0x3aeddf,_0x368390[_0x7bd680(0x226)](_0x5a5132,_0x2c452c)),_0x418a83=_0x4c6079/_0x366fe6,_0x450143=_0xc1ed4a*_0x5f407d['PI']/(0x1d23+0x10a5+-0x2d14),_0x18b8c2=_0x293b65['tan'](_0x368390[_0x7bd680(0x7f2)](_0x450143,0x2*-0x1231+0x206*-0x4+-0x2*-0x163e)),_0x12953b=_0x368390['ZCOJI'](_0x368390[_0x7bd680(0x7f2)](_0x3de708,_0x95e589),_0x18b8c2*_0x418a83),_0xc08bd=_0x368390[_0x7bd680(0x8ec)](_0x48e35d/_0x95e589,_0x18b8c2);if(_0x368390[_0x7bd680(0xd21)](_0x12953b,-(-0xba5+-0x214f+0x2cf5+0.6000000000000001))||_0x12953b>0xb5*-0x14+-0xdcb+0x1bf0+0.6000000000000001||_0x368390['PCaDe'](_0xc08bd,-(0x1f01+-0x12fe+-0xc02+0.6000000000000001))||_0x368390[_0x7bd680(0xdcb)](_0xc08bd,0x3*-0x4c3+-0x1*-0x268c+0x87*-0x2e+0.6000000000000001))return null;return{'x':(_0x12953b*(-0x1f99+0x2f8+0x1ca1+0.5)+(0x1*0x627+-0x2495+-0xbe*-0x29+0.5))*_0x35e0ea,'y':(0x80d+-0x2*-0xdc9+-0x239f+0.5-_0xc08bd*(-0x4f8+0x1faa+-0x33*0x86+0.5))*_0x16ebde,'z':_0x95e589};}else{var _0xab842d=_0x78d2b7(_0x368390[_0x7bd680(0x3d6)](_0x2ab721[_0x7bd680(0xe9d)],_0x24ba08),_0x40287d);if(_0xab842d===undefined)continue;var _0x2562bd={'o':_0x24ba08,'k':_0x40287d,'v':_0xab842d};if(_0x40287d==='v2'||_0x40287d==='v3'||_0x368390[_0x7bd680(0x39a)](_0x40287d,'v4')){var _0x40fba1=_0x40287d==='v2'?-0x24f2+-0x1090*0x2+0x702*0xa:_0x368390[_0x7bd680(0x711)](_0x40287d,'v3')?-0x6e5*-0x4+0x1*0x144b+0x3fd*-0xc:0x1*0x9d7+0x14c4+-0x1e97,_0x3fb4ab=_0x368390['ejrvg'](_0x5244f7,_0x2ab721[_0x7bd680(0xe9d)],_0x24ba08,_0x40fba1);_0x3fb4ab&&(_0x2562bd[_0x7bd680(0x358)]=_0x3fb4ab,_0x2562bd['v']=_0x3fb4ab[-0x13f5+-0x24b*0x7+0x2402]);}_0x31bdf9['push'](_0x2562bd);}}}}if(_0x31bdf9['lengt'+'h']){if(_0x7bd680(0x590)!==_0x7bd680(0x590))return _0x970715['getIt'+'em'](_0x520f7d)==='1';else{var _0xefdbf4=_0x1ee20e(_0x31bdf9);_0xd0de83[_0xc20f3f]=_0xefdbf4[_0x7bd680(0x93a)],_0x4f37b9[_0xc20f3f]={'key':_0xefdbf4[_0x7bd680(0x8b8)],'sane':_0xefdbf4[_0x7bd680(0x440)],'checked':_0xefdbf4[_0x7bd680(0x986)+'ed'],'keyConsistent':_0xefdbf4[_0x7bd680(0xb73)+_0x7bd680(0x2e3)+'ent'],'keySource':_0xefdbf4[_0x7bd680(0x2cb)+_0x7bd680(0x445)]};}}}return _0xd0de83;}function _0x1ee20e(_0x10323c){var _0x3b42e2=_0x189e9a;if(_0x368390['nhGYx'](_0x3b42e2(0x59d),'FVrKi')){var _0x4bb049=-0xaf*0x2+0x1c6*0x3+-0x3f4,_0x45ee91=-0x2263+-0x1e6f+0x2*0x2069,_0x209bf4=null;for(var _0x12a435=0x4f*0x42+-0x4dd*-0x1+-0x3*0x869;_0x12a435<_0x10323c[_0x3b42e2(0xcc0)+'h'];_0x12a435++){if(_0x368390['OrnAs'](_0x3b42e2(0xc3f),_0x368390[_0x3b42e2(0xa1f)])){var _0x48085a=_0x10323c[_0x12a435];if(_0x368390['DNnNK'](_0x48085a['k'][_0x3b42e2(0xbdf)+'Of'](_0x368390['qNUHW']),-0x6b5+-0xf75*-0x2+-0x1835))continue;_0x48085a['v']=_0x368390[_0x3b42e2(0xa61)](_0x57fbf5,_0x48085a['k'],_0x48085a['hidde'+'n'],_0x48085a[_0x3b42e2(0x348)+_0x3b42e2(0x2ae)+'t0']),_0x48085a[_0x3b42e2(0x9d6)+'ed']=_0x48085a['keyAt'+_0x3b42e2(0x2ae)+'t0'],_0x48085a['raw']=_0x368390['DcDYi'](_0x368390[_0x3b42e2(0x5aa)](_0x368390[_0x3b42e2(0xaff)](_0x368390[_0x3b42e2(0x6fc)](_0x368390['pLupN'](_0x3b42e2(0xd3d),_0x48085a[_0x3b42e2(0xa4f)+'n'])+(_0x3b42e2(0x894)+'=')+_0x48085a[_0x3b42e2(0xc3c)],_0x48085a['act']?_0x3b42e2(0x660)+'VE':'')+'\x20k0=',_0x48085a['keyAt'+_0x3b42e2(0x2ae)+'t0']),'\x20hex='),_0x48085a['hex']);if(_0x209bf4===null)_0x209bf4=_0x48085a[_0x3b42e2(0x348)+_0x3b42e2(0x2ae)+'t0'];_0x45ee91++;if(_0x38031c(_0x48085a)){if(_0x368390[_0x3b42e2(0xce9)](_0x3b42e2(0x227),_0x368390[_0x3b42e2(0x419)]))return _0x368390[_0x3b42e2(0x7f2)](_0x5eb2be[_0x3b42e2(0xbe5)](_0x32d702*(-0x95*-0x31+-0xaa8+-0x1179)),0xd*0x2c0+-0x7e1+0x1d5*-0xf);else _0x4bb049++,_0x48085a[_0x3b42e2(0x440)]=!![];}else _0x48085a[_0x3b42e2(0x440)]=![];delete _0x48085a['alt'];}else try{if(_0x187e14[_0x15977c][_0x3b42e2(0x81f)+_0x3b42e2(0xa0c)+_0x3b42e2(0x532)])_0x51beeb[_0x149597][_0x3b42e2(0x81f)+_0x3b42e2(0xa0c)+'dow'][_0x3b42e2(0x4fd)+'essag'+'e'](_0xd86ddc,'*');}catch(_0x13eeee){}}return{'rows':_0x10323c,'key':_0x209bf4,'sane':_0x4bb049,'checked':_0x45ee91,'keyConsistent':_0x368390[_0x3b42e2(0xa49)](_0x4ec846,_0x10323c),'keySource':_0x3b42e2(0x947)+'t\x200\x20('+'int-w'+_0x3b42e2(0x5df)};}else{if(_0x36742e[_0x3b42e2(0x627)])_0x368390['ByHDy'](_0x4a5174,!![]);}}function _0x4ec846(_0x1bb69f){var _0x1d0748=_0x189e9a,_0x594d76={};for(var _0x378b17=-0x1*-0x311+-0x14fb+0x11ea;_0x378b17<_0x1bb69f[_0x1d0748(0xcc0)+'h'];_0x378b17++){if(_0x368390[_0x1d0748(0xa05)](_0x368390['TCCBq'],_0x368390[_0x1d0748(0x37f)])){_0x1d6799[_0x1409ad]='0x'+_0x7e6567[_0x4dc83a][_0x1d0748(0xe9d)][_0x1d0748(0x258)+'ing'](-0x1b79+-0x1719+0x32a2);if(_0x3d9091[_0x34d125]['repla'+'ced'])_0x3b68c6[_0x1d0748(0x8f8)](_0x3efadd);}else{var _0x1c6374=_0x1bb69f[_0x378b17];if(_0x368390[_0x1d0748(0x266)](_0x1c6374['k'][_0x1d0748(0xbdf)+'Of'](_0x1d0748(0x8d7)),0x33b+0x1bf*0x2+0x6b9*-0x1))continue;if(_0x368390[_0x1d0748(0x214)](_0x594d76[_0x1c6374['k']],undefined))_0x594d76[_0x1c6374['k']]=_0x1c6374[_0x1d0748(0x9d6)+'ed'];else{if(_0x594d76[_0x1c6374['k']]!==_0x1c6374[_0x1d0748(0x9d6)+'ed'])return![];}}}return!![];}function _0x38031c(_0x257d0f){var _0xeeebe3=_0x189e9a,_0x5658be=_0x257d0f['v'];if(typeof _0x5658be!=='numbe'+'r'||!isFinite(_0x5658be))return![];if(_0x368390['CwfnL'](_0x257d0f['k'],_0xeeebe3(0x778)))return _0x368390[_0xeeebe3(0x873)](_0x5658be,0x4*0x4b3+-0x1*0x42b+-0xea1)||_0x5658be===-0x120e+-0x9a3*-0x4+0x147d*-0x1;var _0x4944d4=_0x257d0f['fake'];if(_0x368390[_0xeeebe3(0x46a)](typeof _0x4944d4,_0xeeebe3(0x93b)+'r')||!_0x368390['ByHDy'](isFinite,_0x4944d4))return!![];if(_0x257d0f['act']===0x217d+-0x102a+-0x1152){if(_0xeeebe3(0x6da)===_0x368390[_0xeeebe3(0xe52)])return _0x368390['AHCyr'](Math['abs'](_0x5658be-_0x4944d4),Math[_0xeeebe3(0x302)](-0x1*0x25dd+-0x38*0x8b+0x2*0x2223,_0x368390[_0xeeebe3(0xab1)](Math[_0xeeebe3(0x2fa)](_0x4944d4),-0x1710+-0x2*0xefa+0x4*0xd41+0.6)));else _0x5d91ee['pitch']=_0x5118eb?_0x33fa55[_0xeeebe3(0x527)]:_0x4c2bfc['rawB'],_0xfdf6f[_0xeeebe3(0xdce)]=_0x3bc024?_0x14a09b[_0xeeebe3(0x591)]:_0x435fba['rawA'],_0x3be692['order']=_0x1f9307?'a,b':_0xeeebe3(0xe2e);}return Math[_0xeeebe3(0x2fa)](_0x5658be)<0x43b825d5+-0x3*0xd6e4b37+-0x10*-0x202d85d;}function _0x4708c7(){var _0x5088f4=_0x189e9a,_0xe1d99f={'bEEZW':function(_0x495e2d,_0x206945){return _0x368390['rkSvw'](_0x495e2d,_0x206945);}},_0xd71c2={};try{var _0xce21d5=('1|5|2'+'|3|4|'+'0')['split']('|'),_0x33bcf1=-0x12*-0x22a+-0x2083+0x671*-0x1;while(!![]){switch(_0xce21d5[_0x33bcf1++]){case'0':_0xd71c2[_0x5088f4(0x1c8)+'nRunt'+_0x5088f4(0x897)+'me']=_0x1c2ae7&&_0x1c2ae7['_runt'+_0x5088f4(0xbc1)]&&_0x1c2ae7[_0x5088f4(0x3a4)+_0x5088f4(0xbc1)][_0x5088f4(0x379)]?typeof _0x1c2ae7[_0x5088f4(0x3a4)+_0x5088f4(0xbc1)][_0x5088f4(0x379)]:'none';continue;case'1':var _0x15bc94=window['Unity'+_0x5088f4(0x917)+_0x5088f4(0xcdd)]&&window['Unity'+'WebMo'+_0x5088f4(0xcdd)][_0x5088f4(0x79a)+'me'];continue;case'2':_0xd71c2[_0x5088f4(0xc3b)+'tches']=!!(_0x368390['UXmeV'](_0x15bc94,_0x207f8e)&&_0x368390['cTiYk'](_0x15bc94['__sak'+_0x5088f4(0x6b5)+'g'],_0x207f8e));continue;case'3':_0xd71c2[_0x5088f4(0x504)+'meGam'+'e']=_0x15bc94&&_0x15bc94[_0x5088f4(0x379)]?typeof _0x15bc94['_game']:_0x368390[_0x5088f4(0x242)];continue;case'4':_0xd71c2[_0x5088f4(0x1c8)+'nRunt'+'imeIs'+_0x5088f4(0xd4a)+_0x5088f4(0x70c)]=!!(_0x1c2ae7&&_0x1c2ae7['_runt'+_0x5088f4(0xbc1)]&&_0x1c2ae7[_0x5088f4(0x3a4)+_0x5088f4(0xbc1)]===_0x15bc94);continue;case'5':_0xd71c2[_0x5088f4(0x5b3)]=_0x15bc94&&_0x15bc94[_0x5088f4(0x8e8)+'uraTa'+'g']||null;continue;}break;}}catch(_0x1b70c1){_0x368390[_0x5088f4(0x2b9)](_0x5088f4(0x2d5),_0x368390['qiPKq'])?_0x4422f1[_0x5088f4(0xd9d)]('%c[sa'+'kura]'+_0x5088f4(0xcf1)+'l\x20upd'+'ate\x20f'+'ailed',_0xe1d99f['bEEZW']('color'+':',_0x325e14),_0xeb5d6d):_0xd71c2[_0x5088f4(0x8d9)]=String(_0x1b70c1&&_0x1b70c1['messa'+'ge']||_0x1b70c1);}return _0xd71c2;}function _0x5e9bb3(){var _0x5cc507=_0x189e9a,_0x1f16cc=[_0x5cc507(0x5e0)+_0x5cc507(0x2be)+'nce','unity'+_0x5cc507(0xba0),_0x368390[_0x5cc507(0xdc5)],'unity'+_0x5cc507(0x2be)+'nceWr'+_0x5cc507(0x3cc)],_0x5ec137={};for(var _0x4bbb3=0x9ff*0x3+0x1175+-0x2f72*0x1;_0x368390[_0x5cc507(0xa59)](_0x4bbb3,_0x1f16cc[_0x5cc507(0xcc0)+'h']);_0x4bbb3++){var _0x18f369=_0x1f16cc[_0x4bbb3],_0x2164b0=typeof window[_0x18f369];_0x5ec137[_0x18f369]=_0x368390[_0x5cc507(0x7a0)](_0x2164b0,_0x368390['mZiYB'])?_0x368390[_0x5cc507(0xaa9)]:_0x2164b0;}var _0x5c0421=_0x368390['nVvPc'](_0x318fc9);_0x5ec137[_0x5cc507(0x331)+_0x5cc507(0x41f)]=_0xd13a81[_0x5cc507(0x8f2)+'e'];try{_0x5ec137[_0x5cc507(0x4c6)+_0x5cc507(0x655)]=!!(_0x5c0421&&_0x5c0421[_0x5cc507(0xb9e)+'e']),_0x5ec137['heapU'+'8']=!!(_0x5c0421&&_0x5c0421['Modul'+'e']&&_0x5c0421[_0x5cc507(0xb9e)+'e']['HEAPU'+'8']),_0x5ec137[_0x5cc507(0xebe)+_0x5cc507(0x8b5)]=_0x5ec137['heapU'+'8']?_0x5c0421[_0x5cc507(0xb9e)+'e']['HEAPU'+'8'][_0x5cc507(0xcc0)+'h']:0x9e7+0xce3+-0x16ca;}catch(_0xe11131){_0x368390['rjwDF'](_0x5cc507(0x45d),_0x368390['UtZRp'])?(_0x3b4d04['style'][_0x5cc507(0x6c0)]='auto',_0x416a1b[_0x5cc507(0x98e)]['top']=_0x5cc507(0x7d4),_0x38f2a5[_0x5cc507(0x98e)][_0x5cc507(0x603)]=_0x368390['uBoUy'],_0x28d5c0['style'][_0x5cc507(0xde6)+'m']='24px'):(_0x5ec137[_0x5cc507(0x4c6)+'dule']=![],_0x5ec137['heapU'+'8']=![],_0x5ec137[_0x5cc507(0xebe)+_0x5cc507(0x8b5)]=-0x20ac+-0x1e3d+0x1*0x3ee9);}return _0x5ec137['value'+_0x5cc507(0x24c)+'er']=typeof _0x2af87f,_0x5ec137;}function _0x3b7c9b(){var _0x71e310=_0x189e9a,_0x7bfc83={},_0x24785d=_0x3bc1c6();if(!_0x24785d)return _0x7bfc83;_0x7bfc83[_0x368390[_0x71e310(0xa8b)]]=_0x24785d[_0x71e310(0x85e)+'Look'];for(var _0x35ad23 in _0x24785d['float'+'s'])_0x7bfc83[_0x368390[_0x71e310(0xe56)](_0x71e310(0x971)+'Look+',_0x35ad23)]=_0x24785d['float'+'s'][_0x35ad23];if(_0x24785d[_0x71e310(0x4de)+'a'])_0x7bfc83[_0x368390[_0x71e310(0x733)]]=_0x24785d['camer'+'a'];return _0x7bfc83;}function _0x251700(_0x3329aa){var _0xc5cbbf=_0x189e9a,_0x37a654={};for(var _0x4e9f6b in _0x3329aa){var _0x3b3844=_0x3329aa[_0x4e9f6b];for(var _0x2b74e5=-0x2280+0x2*0x8f+-0x2162*-0x1;_0x368390['IhoMO'](_0x2b74e5,_0x3b3844['lengt'+'h']);_0x2b74e5++){_0x37a654[_0x368390[_0xc5cbbf(0x69f)](_0x4e9f6b+'+0x',_0x3b3844[_0x2b74e5]['o'][_0xc5cbbf(0x258)+'ing'](-0x252*0x1+-0x1*-0x24dd+-0x227b))]=_0x3b3844[_0x2b74e5]['v'];}}return _0x37a654;}function _0xf0daa6(_0x200536,_0x5d5c4d){var _0x4184cc=_0x189e9a;if(_0x200536==='speed'){if(_0x368390['SmtFi']!==_0x4184cc(0xb0f)){if(!_0x46f60f)return;var _0x1432be=_0x3b3a96['offse'+'tWidt'+'h']||0x3e*-0x2e+-0x1*0x15a1+0x2331,_0x12c7ab=_0x3b535b[_0x4184cc(0x947)+_0x4184cc(0x87d)+'ht']||0x851+0x7dd+-0x74f*0x2,_0xdd5686=_0x368390['FMVnA'](_0x248f66[_0x4184cc(0x7a1)+'tX']||-0x231c+0x812*-0x4+-0x4364*-0x1,_0x5e37dd),_0x2f7688=(_0x42d45a[_0x4184cc(0x7a1)+'tY']||-0x2577+-0x87f+0x9f*0x4a)-_0x723d5a;_0xdd5686=_0x720e16[_0x4184cc(0x302)](-0xa*0x74+-0x127*-0x1d+-0x59*0x53,_0x359880['min']((_0x639581[_0x4184cc(0xe92)+_0x4184cc(0x6f8)]||-0xcb*-0x1f+-0x1397+-0x4fe)-_0x1432be-(-0x16*0x105+-0x477+0x1aed),_0xdd5686)),_0x2f7688=_0x5c1530[_0x4184cc(0x302)](-0xa93*0x1+-0x202f+0x2aca,_0x4cb8d1['min'](_0x368390[_0x4184cc(0x5e5)]((_0x579a03[_0x4184cc(0xe92)+_0x4184cc(0x2ac)+'t']||-0x146*0x16+0x24bc+-0x8b8)-_0x12c7ab,-0x2703+0x169e*0x1+-0x91*-0x1d),_0x2f7688)),_0x49d097[_0x4184cc(0x98e)]['left']=_0xdd5686+'px',_0x59d7d8[_0x4184cc(0x98e)][_0x4184cc(0xb12)]=_0x368390[_0x4184cc(0xba9)](_0x2f7688,'px'),_0x1fabc5[_0x4184cc(0x98e)]['right']=_0x368390[_0x4184cc(0xc10)],_0x3c4a77['style'][_0x4184cc(0xde6)+'m']='auto',_0x2231e9[_0x4184cc(0x90e)]={'x':_0xdd5686,'y':_0x2f7688};}else{_0x2a496a(_0x5d5c4d&&typeof _0x5d5c4d['on']===_0x4184cc(0xcd0)+'an'?_0x5d5c4d['on']:_0x2a77ad['on'],_0x5d5c4d&&_0x368390[_0x4184cc(0x231)](typeof _0x5d5c4d['facto'+'r'],_0x368390['yYSuW'])?_0x5d5c4d[_0x4184cc(0xb52)+'r']:_0x2a77ad[_0x4184cc(0xb52)+'r']);return;}}if(_0x200536!=='snaps'+_0x4184cc(0xc39))return;var _0x45e1fc=_0x176937(),_0x32b16a=_0x251700(_0x45e1fc),_0x48dd8d=_0x3b7c9b();for(var _0xfbfcd in _0x48dd8d)_0x32b16a[_0xfbfcd]=_0x48dd8d[_0xfbfcd];if(!_0x243879){_0x243879=_0x32b16a,_0x4d4871=[],_0xd6ee79(_0x368390[_0x4184cc(0x722)],{'report':_0x368390[_0x4184cc(0x252)](_0x43078a)});return;}_0x4d4871=[];for(var _0x37616b in _0x32b16a){var _0x227e75=_0x243879[_0x37616b],_0xcbb90f=_0x32b16a[_0x37616b];if(_0x227e75!==_0xcbb90f)_0x4d4871['push'](_0x368390[_0x4184cc(0x970)](_0x368390[_0x4184cc(0x84e)](_0x368390[_0x4184cc(0xe56)](_0x37616b,':\x20')+_0x227e75,_0x4184cc(0xe2b)),_0xcbb90f));}_0x243879=_0x32b16a,_0xd6ee79(_0x368390[_0x4184cc(0x722)],{'report':_0x368390[_0x4184cc(0xcce)](_0x43078a)});}var _0x1c9e23=null;function _0x4fc0d9(){var _0x44df5f=_0x189e9a,_0x5d23b0={'UMTII':function(_0x49003b,_0x2e77aa){return _0x368390['NnJrs'](_0x49003b,_0x2e77aa);},'ScWXH':_0x368390['itekN'],'LjDva':function(_0x16577d,_0x2371c4){return _0x368390['cTiYk'](_0x16577d,_0x2371c4);},'IMJSI':'EbPwi','NdFkh':function(_0x4aa591,_0x5056f2){return _0x368390['CwTcf'](_0x4aa591,_0x5056f2);},'iVfSM':'snaps'+'hot','OMEdK':function(_0x551a4a,_0x28ed1b,_0x39dea2){var _0x3f71e1=_0x4f94;return _0x368390[_0x3f71e1(0xaf4)](_0x551a4a,_0x28ed1b,_0x39dea2);},'xDUZo':_0x368390[_0x44df5f(0xdc8)],'xWqyD':_0x44df5f(0x603),'FcERA':_0x44df5f(0x415),'dMIun':_0x44df5f(0xd73),'Mhdpy':_0x368390['aVEIv'],'UDvom':_0x44df5f(0x20d)};if(_0x1c9e23)return _0x1c9e23;try{if(!document['body']||!document['body'][_0x44df5f(0xdc4)+_0x44df5f(0x9bf)+'d'])return null;if(!document[_0x44df5f(0x592)+_0x44df5f(0x279)+_0x44df5f(0xa40)](_0x368390[_0x44df5f(0xa3b)])){if(_0x368390[_0x44df5f(0x214)](_0x44df5f(0x3aa),_0x44df5f(0x3aa))){var _0x4243af=document[_0x44df5f(0x631)+'eElem'+'ent']('style');_0x4243af['id']=_0x44df5f(0x5ca)+'a-sw-'+_0x44df5f(0x2ef)+'ss',_0x4243af[_0x44df5f(0xab4)+'onten'+'t']=_0x368390['knbai'],(document[_0x44df5f(0x31f)]||document['docum'+_0x44df5f(0x750)+'ement'])[_0x44df5f(0xdc4)+'dChil'+'d'](_0x4243af);}else _0x394b5f['note']=_0x44df5f(0x297)+_0x44df5f(0x254)+'etwor'+_0x44df5f(0xa75)+',\x20no\x20'+_0x44df5f(0x566)+'otrol'+'ler\x20a'+_0x44df5f(0x476)+_0x44df5f(0xce3)+_0x44df5f(0xd6e)+_0x44df5f(0x3b8)+'That\x20'+_0x44df5f(0x728)+'at\x20'+(_0x44df5f(0x204)+_0x44df5f(0x6e0)+_0x44df5f(0x4fb)+'\x20like'+'\x20-\x20ru'+_0x44df5f(0x764)+_0x44df5f(0xd33)+'n\x20INS'+_0x44df5f(0xc67)+'\x20live'+_0x44df5f(0x58a)+_0x44df5f(0xb87)+'t\x20the'+'\x20menu'+'.');}var _0x24c0e0=document['creat'+_0x44df5f(0x490)+'ent']('div');_0x24c0e0['id']=_0x44df5f(0x5ca)+_0x44df5f(0x500)+_0x44df5f(0x812),_0x24c0e0[_0x44df5f(0x98e)][_0x44df5f(0x5de)+'xt']=_0x368390[_0x44df5f(0x826)](_0x368390[_0x44df5f(0x8b2)](_0x44df5f(0x3e0)+_0x44df5f(0x47c)+_0x44df5f(0x489)+'left:'+'8px;b'+'ottom'+_0x44df5f(0x49b)+'z-ind'+_0x44df5f(0x382)+'47483'+_0x44df5f(0xdf2)+_0x44df5f(0x61e)+_0x44df5f(0x6bc)+_0x44df5f(0xe79)+_0x44df5f(0x3b2)+'ectio'+_0x44df5f(0x62b)+_0x44df5f(0x543)+'ap:4p'+'x;'+_0x368390['RQkHW'],_0x44df5f(0x323)+_0x44df5f(0xbbb)+'x\x208px'+';font'+_0x44df5f(0x682)+'/1.45'+'\x20ui-m'+'onosp'+'ace,C'+_0x44df5f(0xd8b)+'as,mo'+_0x44df5f(0x4f7)+_0x44df5f(0x583)+'lor:#'+'f7eef'+'5;'),_0x368390['JbmJO']);var _0xcb0620=_0x44df5f(0x691)+_0x44df5f(0xbc0)+_0x44df5f(0x6df)+_0x44df5f(0xc65)+_0x44df5f(0xdb7)+_0x44df5f(0x995)+':#8d7'+_0x44df5f(0xd66)+_0x44df5f(0xbd4)+'dth:2'+_0x44df5f(0xa65)+_0x44df5f(0x6ac)+_0x44df5f(0x239);_0x24c0e0[_0x44df5f(0xe92)+'HTML']=_0x368390[_0x44df5f(0x2f7)](_0x368390[_0x44df5f(0xb4e)](_0x368390[_0x44df5f(0xe9f)](_0x368390['aZusI'](_0x368390[_0x44df5f(0x8b2)](_0x368390[_0x44df5f(0xe07)](_0x44df5f(0x691)+_0x44df5f(0xbc0)+_0x44df5f(0x1d3)+'r\x22\x20st'+_0x44df5f(0xdb7)+_0x44df5f(0x6b0)+'ay:fl'+_0x44df5f(0x1ed)+_0x44df5f(0xc94)+_0x44df5f(0x474)+_0x44df5f(0x941)+'ms:ce'+'nter;'+'flex-'+_0x44df5f(0x801)+_0x44df5f(0xa23)+_0x44df5f(0x8b7)+'idth:'+_0x44df5f(0x2a9)+_0x44df5f(0xd8e)+('<b\x20st'+_0x44df5f(0xdb7)+'color'+':'),_0x327aec)+(_0x44df5f(0xae0)+_0x44df5f(0x2f2)+'b>'),_0x44df5f(0x212)+'on\x20da'+'ta-a='+'\x22sp\x22\x20'+_0x44df5f(0x98e)+_0x44df5f(0x7bf)+'kgrou'+'nd:tr'+'anspa'+_0x44df5f(0x29d)+_0x44df5f(0x68c)+_0x44df5f(0x6e7)+'\x20soli'+_0x44df5f(0x940)+'a(255'+_0x44df5f(0xa98)+_0x44df5f(0x829)+_0x44df5f(0xe2c)),_0x44df5f(0x995)+':#f7e'+'ef5;b'+_0x44df5f(0x1f6)+'-radi'+_0x44df5f(0x760)+'x;pad'+_0x44df5f(0x2a0)+'2px\x208'+'px;cu'+_0x44df5f(0xc42)+_0x44df5f(0x7bd)+'er;fo'+'nt:in'+'herit'+_0x44df5f(0x7ee)+_0x44df5f(0xc23)+_0x44df5f(0x608)+'utton'+'>'),_0x44df5f(0xb85)+'t\x20dat'+_0x44df5f(0xe67)+_0x44df5f(0x39d)+'ype=\x22'+_0x44df5f(0xca5)+'\x22\x20min'+'=\x221\x22\x20'+'max=\x22'+_0x44df5f(0xd42)+_0x44df5f(0xe7b)+'.5\x22\x20v'+'alue='+_0x44df5f(0x6b3)+_0x44df5f(0x6a4)+_0x44df5f(0x309)+_0x44df5f(0x5f3)+'x;acc'+_0x44df5f(0x529)+'olor:')+_0x327aec+_0x44df5f(0xd8e)+('<span'+_0x44df5f(0x77c)+'-a=\x22f'+'v\x22\x20st'+'yle=\x22'+_0x44df5f(0x995)+_0x44df5f(0x371)+'9c9;m'+'in-wi'+_0x44df5f(0xdc9)+_0x44df5f(0x997)+'>2.0x'+'</spa'+'n>')+(_0x44df5f(0x212)+'on\x20da'+_0x44df5f(0x965)+'\x22esp\x22'+'\x20styl'+'e=\x22ba'+'ckgro'+_0x44df5f(0xc44)+_0x44df5f(0xa30)+_0x44df5f(0x9b5)+';bord'+_0x44df5f(0xab0)+_0x44df5f(0xb35)+'id\x20rg'+_0x44df5f(0xb66)+'5,143'+_0x44df5f(0xbd9)+'.45);')+_0x368390['HMrvm']+('<butt'+_0x44df5f(0xd7d)+_0x44df5f(0x965)+_0x44df5f(0xea0)+'\x22\x20sty'+_0x44df5f(0x8a6)+_0x44df5f(0x3e8)+_0x44df5f(0xac1)+'trans'+_0x44df5f(0x6f2)+_0x44df5f(0x65c)+_0x44df5f(0xd25)+'px\x20so'+'lid\x20r'+'gba(2'+'55,14'+'3,177'+',.45)'+';')+_0x368390[_0x44df5f(0x699)]+(_0x44df5f(0x212)+_0x44df5f(0xd7d)+_0x44df5f(0x965)+'\x22fold'+_0x44df5f(0x469)+_0x44df5f(0xd18)+_0x44df5f(0x7a9)+_0x44df5f(0x1d0)+':auto'+_0x44df5f(0xb32)+_0x44df5f(0x859)+'d:tra'+_0x44df5f(0x8fe)+_0x44df5f(0xbd2)+_0x44df5f(0x1f6)+':1px\x20'+'solid'+_0x44df5f(0x4a3)+_0x44df5f(0x745)+_0x44df5f(0x81b)+'77,.4'+'5);'),_0x44df5f(0x995)+_0x44df5f(0x9d9)+_0x44df5f(0x8d4)+_0x44df5f(0x1f6)+'-radi'+_0x44df5f(0x760)+'x;pad'+_0x44df5f(0x2a0)+'1px\x206'+_0x44df5f(0x2b4)+'rsor:'+_0x44df5f(0x7bd)+'er;fo'+'nt:in'+'herit'+';\x22>-<'+_0x44df5f(0x93c)+_0x44df5f(0x267)),_0x44df5f(0x78f)+'>')+(_0x44df5f(0x691)+_0x44df5f(0xbc0)+'a=\x22st'+_0x44df5f(0x469)+_0x44df5f(0x4fe)+'olor:'+_0x44df5f(0x6be)+_0x44df5f(0xa64)+'x-wid'+'th:29'+_0x44df5f(0x997)+'></di'+'v>')+_0x368390[_0x44df5f(0x511)],_0x24c0e0[_0x44df5f(0xe92)+'HTML']=_0xcb0620;var _0x3433fb=function(_0x5bf18){var _0x2a886c=_0x44df5f;return _0x24c0e0['query'+'Selec'+'tor'](_0x5d23b0['UMTII'](_0x5d23b0[_0x2a886c(0x2a4)]+_0x5bf18,'\x22]'));},_0x45fb3d=_0x3433fb('st'),_0x1ff07b=_0x3433fb(_0x368390[_0x44df5f(0x9c0)]),_0x63c4b5=_0x3433fb('sp'),_0x450a48=_0x368390[_0x44df5f(0x8d3)](_0x3433fb,'fx'),_0x364bc7=_0x3433fb('fv'),_0x4cad92=_0x368390['DIYDD'](_0x3433fb,_0x368390[_0x44df5f(0x38e)]);if(_0x63c4b5)_0x63c4b5[_0x44df5f(0xe97)+'ck']=function(){_0x2a496a(!_0x2a77ad['on'],_0x2a77ad['facto'+'r']);};if(_0x450a48)_0x450a48[_0x44df5f(0x4d7)+'ut']=function(){var _0x1ad5c8=_0x44df5f;_0x2a496a(_0x2a77ad['on'],_0x368390['oBghh'](parseFloat,_0x450a48[_0x1ad5c8(0x4a8)])||-0x14c5*-0x1+-0xd85*0x1+-0x73f);};if(_0x3433fb(_0x368390[_0x44df5f(0xe33)]))_0x3433fb(_0x368390['jtISY'])[_0x44df5f(0xe97)+'ck']=function(){var _0x2c588a=_0x44df5f;if(_0x5d23b0['LjDva'](_0x5d23b0[_0x2c588a(0x70a)],_0x2c588a(0x360)))return null;else _0x5d23b0['NdFkh'](_0xf0daa6,_0x5d23b0['iVfSM']);};var _0x544415=_0x368390[_0x44df5f(0xd04)](_0x3433fb,'esp');if(_0x544415)_0x544415[_0x44df5f(0xe97)+'ck']=function(){var _0x30cc29=_0x44df5f;if(_0x368390[_0x30cc29(0xc11)]('qaSWU','qaSWU')){if(!_0x2730c7['on'])_0x368390['gUlvh'](_0xeb39bd,!![],![]);else{if(_0x2730c7[_0x30cc29(0x407)])_0x368390['GnEEv'](_0xeb39bd,![],![]);else{if(_0x35d742())_0xeb39bd(!![],!![]);else _0xeb39bd(![],![]);}}}else{var _0x34a2bd=_0x10ac72(_0x46ae87[_0xdd94fe][-0x8fd+0x49*-0x36+0x1863]),_0x21c40c=_0x5d23b0[_0x30cc29(0x75e)](_0x457ded,_0x5d23b0[_0x30cc29(0x3d2)],_0x30cc29(0xb28)+'l');_0x21c40c['style'][_0x30cc29(0xb2c)+_0x30cc29(0x21d)]='0',_0x21c40c['style'][_0x30cc29(0x433)]='1',_0x21c40c[_0x30cc29(0x98e)]['textA'+'lign']=_0x5d23b0[_0x30cc29(0x694)],_0x21c40c[_0x30cc29(0xab4)+_0x30cc29(0xa15)+'t']=_0x240779(_0x22e1df[_0x454990][0x5*0x4d6+0x1820+-0x2*0x1826]),_0x21c40c[_0x30cc29(0x1ce)+'et']['k']=_0x26bb15[_0xd56b2e][-0x1dbc+-0x680+0x243d],_0x34a2bd[_0x30cc29(0xdc4)+'dChil'+'d'](_0x21c40c),_0x46d807['body'][_0x30cc29(0xdc4)+'dChil'+'d'](_0x34a2bd),_0x5a8fa1['body']['lastC'+_0x30cc29(0x9f3)]['sp']=_0x21c40c;}};if(_0x3433fb(_0x368390['qTeSm']))_0x3433fb(_0x44df5f(0x20d))['oncli'+'ck']=function(){var _0x4f2f15=_0x44df5f,_0x1e9425={'XPyts':function(_0x4c2fcc,_0xabebdb){return _0x4c2fcc+_0xabebdb;},'GuqZo':function(_0x892173,_0x3d3517){return _0x892173>>>_0x3d3517;}};if(_0x5d23b0['FcERA']===_0x5d23b0[_0x4f2f15(0x2d7)])_0xdecf80[_0x4f2f15(0x4de)+'a']=_0x1e9425[_0x4f2f15(0x89c)]('0x',_0x1e9425[_0x4f2f15(0x20b)](_0x331b58,0x1b3c+-0x7bc+0x1a0*-0xc)[_0x4f2f15(0x258)+_0x4f2f15(0x5f9)](0x1f85+-0x1d4a+-0x22b)),_0x4ddf86['camer'+_0x4f2f15(0x8c2)]=_0x10c38f;else{if(!_0x4cad92)return;var _0x5574fb=_0x4cad92[_0x4f2f15(0x98e)][_0x4f2f15(0x6b0)+'ay']===_0x5d23b0['Mhdpy'];_0x4cad92[_0x4f2f15(0x98e)]['displ'+'ay']=_0x5574fb?'':_0x4f2f15(0x6e6),_0x3433fb(_0x5d23b0['UDvom'])['textC'+'onten'+'t']=_0x5574fb?'-':'+';}};return document['body']['appen'+_0x44df5f(0x9bf)+'d'](_0x24c0e0),_0x1c9e23={'el':_0x24c0e0,'st':_0x45fb3d,'st2':_0x1ff07b,'sp':_0x63c4b5,'fx':_0x450a48,'fv':_0x364bc7,'esp':_0x544415},_0x1c9e23;}catch(_0x3bb90f){return console['warn']('%c[sa'+_0x44df5f(0x756)+'\x20in-f'+_0x44df5f(0x1f8)+_0x44df5f(0x664)+_0x44df5f(0x6d0)+'ed','color'+':'+_0x327aec,_0x3bb90f),null;}}function _0x35d742(){var _0x1a223f=_0x189e9a;try{var _0xc1d24d=_0xb89445();if(_0xc1d24d[_0x1a223f(0xd5c)])return!![];var _0x57a1d4=_0x2d8b65();return!!(_0x57a1d4&&_0x5b0cfc[_0x1a223f(0x798)+_0x1a223f(0x30c)]);}catch(_0x43777c){return![];}}function _0x228c6f(){var _0x46759b=_0x189e9a;try{var _0x2566e9=(_0x46759b(0xdfb)+_0x46759b(0x368)+_0x46759b(0xcc8))['split']('|'),_0x18f0d0=0x1*0xc53+-0x50*0x15+-0x5c3;while(!![]){switch(_0x2566e9[_0x18f0d0++]){case'0':if(!_0x1e22f5)return;continue;case'1':if(_0x1dbc77!==_0x1e22f5[_0x46759b(0xab4)+_0x46759b(0xa15)+'t'])_0x1e22f5[_0x46759b(0xab4)+_0x46759b(0xa15)+'t']=_0x1dbc77;continue;case'2':if(_0x2730c7['boxes']&&!_0x368390[_0x46759b(0xcce)](_0x35d742))_0x2730c7[_0x46759b(0x407)]=![];continue;case'3':_0x1e22f5[_0x46759b(0x98e)]['color']=_0x2730c7['on']?'#2a0f'+'1b':_0x46759b(0x391)+'f5';continue;case'4':_0x1e22f5[_0x46759b(0x98e)][_0x46759b(0xd57)+_0x46759b(0xbe5)]=_0x2730c7['on']?_0x327aec:_0x46759b(0x1d9)+'paren'+'t';continue;case'5':var _0x1e22f5=_0x1c9e23&&_0x1c9e23['esp'];continue;case'6':var _0x1dbc77=!_0x2730c7['on']?_0x46759b(0x9a8)+'ff':_0x2730c7[_0x46759b(0x407)]?_0x368390['aQbmV']:_0x46759b(0xead)+'ap';continue;}break;}}catch(_0x356fdf){}}function _0xeb39bd(_0x55a321,_0x7321da){var _0xf83641=_0x189e9a;if(_0xf83641(0xe43)!==_0xf83641(0xe43)){var _0x49da3b=_0x3ee8e8(_0x368390['FwJpr'],_0x368390[_0xf83641(0x41c)]+(_0x7a4038?_0xf83641(0x293):'')),_0x400f43=_0x368390[_0xf83641(0xd69)](_0x25c663,'div',_0xf83641(0x754)+_0xf83641(0x541)+'ad'),_0x58949f=_0x3836aa(_0xf83641(0x973),_0xf83641(0x754)+_0xf83641(0x59a)+'tle',_0x368390[_0xf83641(0xeab)](_0x368390[_0xf83641(0x4f6)](_0xf83641(0x60a)+'ng>',_0x21131d),_0x368390['tCfVq']));_0x400f43['appen'+_0xf83641(0x9bf)+'d'](_0x58949f);var _0x195d7e=_0x1fd104(_0xf83641(0x973),'sk-mb'+'ody');return _0x49da3b[_0xf83641(0xdc4)+_0xf83641(0x9bf)+'d'](_0x400f43),_0x49da3b[_0xf83641(0xdc4)+_0xf83641(0x9bf)+'d'](_0x195d7e),_0x49da3b[_0xf83641(0xe8e)]=_0x195d7e,_0x49da3b[_0xf83641(0x31f)]=_0x58949f,_0x49da3b;}else{_0x2730c7['on']=!!_0x55a321,_0x2730c7[_0xf83641(0x407)]=!!_0x7321da,_0x228c6f();try{var _0x419773=_0x13041c();if(_0x419773&&_0x419773['el'])_0x419773['el'][_0xf83641(0x98e)]['displ'+'ay']=_0x2730c7['on']?'':_0x368390[_0xf83641(0x242)];var _0x496f6f=_0x4dc121;if(_0x496f6f&&_0x496f6f['cv'])_0x496f6f['cv']['style'][_0xf83641(0x6b0)+'ay']=_0x2730c7['on']&&_0x2730c7[_0xf83641(0x407)]?'':'none';}catch(_0x58adee){}}}var _0x2ea19d=0x9*0x7d+0x17d6+0x1c39*-0x1;function _0x2a496a(_0x30748b,_0x3fc232){var _0x3965fe=_0x189e9a,_0x1062ae=(_0x3965fe(0x76e)+_0x3965fe(0xa5f)+_0x3965fe(0xb60))[_0x3965fe(0x464)]('|'),_0xfeb14=0x2*0x44f+0x195c+0x21fa*-0x1;while(!![]){switch(_0x1062ae[_0xfeb14++]){case'0':_0x2a77ad['on']=!!_0x30748b;continue;case'1':_0x2a77ad['facto'+'r']=Math[_0x3965fe(0x2a8)](_0x2a77ad[_0x3965fe(0x302)],Math['max'](_0x2a77ad['min'],_0x368390['oBghh'](Number,_0x3fc232)||-0x1*-0x2638+-0x6af+-0x1f88));continue;case'2':if(!_0x2a77ad['on'])_0xb6665d={};continue;case'3':_0x2a77ad['on']&&!_0x64e575&&(_0x368390[_0x3965fe(0x2c5)](_0x3fc232,undefined)||_0x3fc232===null||Number(_0x3fc232)===0x1940+0x13dc+-0x1*0x2d1b)&&(_0x3fc232=_0x2ea19d);continue;case'4':if(_0x3b2b50){_0x3b2b50['sp']&&(_0x3b2b50['sp'][_0x3965fe(0xab4)+_0x3965fe(0xa15)+'t']=_0x2a77ad['on']?'Speed'+'\x20ON':_0x3965fe(0x1e6)+'\x20off',_0x3b2b50['sp']['style']['backg'+_0x3965fe(0xbe5)]=_0x2a77ad['on']?_0x327aec:_0x368390['TfLLr'],_0x3b2b50['sp'][_0x3965fe(0x98e)][_0x3965fe(0x995)]=_0x2a77ad['on']?'#2a0f'+'1b':_0x368390['qSChu']);if(_0x3b2b50['fx'])_0x3b2b50['fx'][_0x3965fe(0x4a8)]=String(_0x2a77ad[_0x3965fe(0xb52)+'r']);if(_0x3b2b50['fv'])_0x3b2b50['fv'][_0x3965fe(0xab4)+'onten'+'t']=_0x2a77ad['facto'+'r'][_0x3965fe(0xd9b)+'ed'](0x1*0x1dda+0x250c+-0x42e5)+'x';}continue;case'5':var _0x3b2b50=_0x368390[_0x3965fe(0x418)](_0x4fc0d9);continue;case'6':var _0x64e575=_0x2a77ad['on'];continue;}break;}}function _0x4cab8e(_0x2ee527){var _0x4eef0c=_0x189e9a,_0x4c891d=_0x368390['hSJqO'](_0x4fc0d9);if(!_0x4c891d||!_0x4c891d['st'])return;try{var _0x4f17f3=_0x368390[_0x4eef0c(0xb3c)]['split']('|'),_0x3b5fb3=-0x10a5*-0x2+0x7ae+-0x28f8;while(!![]){switch(_0x4f17f3[_0x3b5fb3++]){case'0':var _0x5a893e=Object['keys'](_0x2ee527&&_0x2ee527[_0x4eef0c(0x571)+_0x4eef0c(0x5dd)]||{})['lengt'+'h'];continue;case'1':var _0x25ef75=_0x259bc9?_0x259bc9['enemy'+_0x4eef0c(0xc84)]||-0x6e6*-0x1+-0x1a8c+0x13a6:0x6*-0x460+-0x1*-0x18a7+0x1*0x199;continue;case'2':if(_0x4c891d['el'])_0x4c891d['el']['style'][_0x4eef0c(0x6b0)+'ay']='';continue;case'3':if(!_0x368390[_0x4eef0c(0xe05)](_0x25e8ee)&&!_0x31c788){if(_0x4c891d['el'])_0x4c891d['el'][_0x4eef0c(0x98e)]['displ'+'ay']='none';return;}continue;case'4':var _0x256d49=_0x4c891d[_0x4eef0c(0x2b0)];continue;case'5':var _0x259bc9=_0x2ee527&&_0x2ee527[_0x4eef0c(0xc5e)]||null;continue;case'6':_0x4c891d['st']['textC'+_0x4eef0c(0xa15)+'t']=_0x32c9a2;continue;case'7':_0x256d49&&(_0x256d49[_0x4eef0c(0xab4)+'onten'+'t']=_0x25ef75>-0xb*-0xca+0x1944+0x316*-0xb?_0x4eef0c(0x956)+_0x4eef0c(0xa48)+_0x25ef75+(_0x369c3b?_0x368390[_0x4eef0c(0xa12)](_0x368390[_0x4eef0c(0x75c)](_0x4eef0c(0x874),_0x369c3b),_0x4eef0c(0xb78)):'')+(_0x259bc9&&_0x259bc9[_0x4eef0c(0x4de)+'a']?_0x4eef0c(0x7b5)+'\x20'+_0x259bc9[_0x4eef0c(0x4de)+'aFrom']:_0x368390['YXeeZ']):_0x4eef0c(0x7d2)+'emies'+_0x4eef0c(0x729)+_0x4eef0c(0xe1b)+_0x4eef0c(0x45c)+'cam\x20'+(_0x259bc9&&_0x259bc9['camer'+'a']?_0x259bc9[_0x4eef0c(0x4de)+_0x4eef0c(0x8c2)]:'-'),_0x256d49['style'][_0x4eef0c(0x995)]=_0x25ef75>-0x5*-0x125+0x7a*-0x3e+-0x1*-0x17d3?_0x4eef0c(0x3ef)+'a8':_0x368390['NXPWR']);continue;case'8':var _0x32c9a2=_0x368390['vOvtI'](_0x368390[_0x4eef0c(0xeab)](_0x368390['rKnIu'](_0x368390[_0x4eef0c(0x4cc)](_0x368390[_0x4eef0c(0x26c)]('v'+(_0x2ee527&&_0x2ee527['versi'+'on']||_0x51cafc),_0x4eef0c(0x31d)+'ks\x20')+(_0x2ee527&&_0x2ee527['hooks'+'Appli'+'ed']||-0x21c0+0x1968+0x4*0x216),'/'),_0x2ee527&&_0x2ee527['hooks'+'Total']||-0x2*0x69f+-0x252f+0x326d)+_0x368390[_0x4eef0c(0xc45)]+_0x5a893e+(_0x4eef0c(0x2f8)+'\x20'),_0x2928b3)+_0x368390[_0x4eef0c(0xb36)],_0x157b2b);continue;case'9':var _0x369c3b=_0x259bc9?_0x259bc9[_0x4eef0c(0xaaa)+'unt']||0x31*-0x34+-0xd7*0x26+-0x29de*-0x1:-0x24f6+0xd15+0x17e1;continue;case'10':var _0x2928b3=_0x4c258e?(_0x4c258e[_0x4eef0c(0x26f)+'r']['byteL'+'ength']/(0x9845c+-0x17780c+-0x1*-0x1df3b0))['toFix'+'ed'](-0x2ef*0x1+-0x2051+0x2340)+'MB':_0x368390['yDeZX'];continue;}break;}}catch(_0x574d63){}}window[_0x189e9a(0xc29)+'entLi'+_0x189e9a(0xddd)+'r']('keydo'+'wn',function(_0x3ddfda){var _0x161cba=_0x189e9a;if(!_0x3ddfda)return;try{var _0x585f14=_0x368390[_0x161cba(0xe39)][_0x161cba(0x464)]('|'),_0x60560e=-0x5e7+-0x2440+0x2a27;while(!![]){switch(_0x585f14[_0x60560e++]){case'0':if(_0x3ddfda['code']==='F9'){_0x3ddfda['preve'+_0x161cba(0xa18)+_0x161cba(0xdea)](),_0x368390[_0x161cba(0x9f8)](_0xf0daa6,_0x161cba(0xc55)+_0x161cba(0xc39));return;}continue;case'1':if(_0x368390['WWZtd'](_0x3ddfda[_0x161cba(0x85f)],_0x161cba(0xcfb)+_0x161cba(0x9cf)+'t')){_0x3ddfda['preve'+'ntDef'+'ault'](),_0x56dd19[_0x161cba(0x1df)]=Math[_0x161cba(0x302)](0x3b*-0x71+0x696+0x1*0x1393,_0x56dd19['fov']-(-0x1*0x1ce9+0x35*0x5a+0xa49)),_0x58ad62();return;}continue;case'2':if(_0x368390['BgVsW'](_0x3ddfda[_0x161cba(0x85f)],'F7')){_0x3ddfda['preve'+_0x161cba(0xa18)+_0x161cba(0xdea)](),_0x2a496a(!_0x2a77ad['on'],_0x2a77ad[_0x161cba(0xb52)+'r']);return;}continue;case'3':if(_0x3ddfda[_0x161cba(0x85f)]==='Brack'+_0x161cba(0x4a1)+'ht'){_0x3ddfda['preve'+'ntDef'+_0x161cba(0xdea)](),_0x56dd19[_0x161cba(0x1df)]=Math['min'](-0xd3f*-0x1+-0x2*-0x32b+-0x1bb*0xb,_0x56dd19[_0x161cba(0x1df)]+(-0x13*0x17+-0xde7+-0xf9e*-0x1)),_0x368390[_0x161cba(0x2c2)](_0x58ad62);return;}continue;case'4':if(_0x368390[_0x161cba(0x882)](_0x3ddfda[_0x161cba(0x85f)],_0x161cba(0xb4a)+'t')){_0x3ddfda[_0x161cba(0xbe9)+_0x161cba(0xa18)+'ault'](),_0x368390[_0x161cba(0x352)](_0xfda9d8,!_0x109cd4['open']);return;}continue;case'5':if(_0x368390[_0x161cba(0x580)](_0x3ddfda[_0x161cba(0x85f)],'F6')){_0x3ddfda[_0x161cba(0xbe9)+_0x161cba(0xa18)+_0x161cba(0xdea)](),_0x368390[_0x161cba(0xaf4)](_0x2a496a,_0x2a77ad['on'],_0x368390[_0x161cba(0x5e5)](_0x2a77ad[_0x161cba(0xb52)+'r'],-0x1*0x1a49+-0x1*0x335+0x1d7e+0.5));return;}continue;case'6':if(_0x3ddfda[_0x161cba(0x85f)]==='F8'){_0x3ddfda[_0x161cba(0xbe9)+_0x161cba(0xa18)+_0x161cba(0xdea)](),_0x2a496a(_0x2a77ad['on'],_0x2a77ad[_0x161cba(0xb52)+'r']+(-0x807+-0x412+0x13*0xa3+0.5));return;}continue;}break;}}catch(_0x4fefcc){}},!![]);var _0x2730c7={'on':!![],'span':0x50,'boxes':![]};function _0x3bc1c6(){var _0x42d635=_0x189e9a,_0x227564={'xCSDg':function(_0x435359,_0x5756f0){return _0x368390['gfBQz'](_0x435359,_0x5756f0);},'LRJtk':_0x42d635(0x672)+_0x42d635(0x986)+'ed','MSQrv':function(_0x192520,_0x2c6ddd,_0x35d572){return _0x368390['nKPXd'](_0x192520,_0x2c6ddd,_0x35d572);},'uKACh':_0x368390[_0x42d635(0x202)]},_0x1531fa=_0x4326f1[_0x42d635(0x4d3)+'nNetw'+_0x42d635(0xa5d)+'nc']||{},_0x125706=Object[_0x42d635(0x8be)](_0x1531fa);for(var _0x1cc369=0x267b+0x652+-0x3*0xeef;_0x1cc369<_0x125706[_0x42d635(0xcc0)+'h'];_0x1cc369++){if(_0x42d635(0x557)===_0x368390[_0x42d635(0x1fa)]){var _0x4a2fb0=_0x1531fa[_0x125706[_0x1cc369]][_0x42d635(0xe9d)],_0x29038a=_0x78d2b7(_0x368390['bqnzX'](_0x4a2fb0,0x1b74+0x9db*0x1+-0x251f),_0x42d635(0xe68));if(!_0x29038a)continue;var _0x400438=_0x117247[_0x42d635(0x971)+'Look']||[],_0x1069d4={'mouseLook':'0x'+(_0x29038a>>>-0x1827+-0x38e*-0x6+-0xf1*-0x3)['toStr'+_0x42d635(0x5f9)](-0x1*0xf69+0x7*-0x125+-0x4*-0x5df),'floats':{},'camera':null,'vec2':null};for(var _0x4e17ba=0xaa4+-0x1c*-0xe3+0x8de*-0x4;_0x368390['ggjyu'](_0x4e17ba,_0x400438[_0x42d635(0xcc0)+'h']);_0x4e17ba++){if(_0x400438[_0x4e17ba][-0x2048+0x1b48+0x501]!=='f32')continue;_0x1069d4['float'+'s']['0x'+_0x400438[_0x4e17ba][-0x23f6*-0x1+-0x8ec+0xd85*-0x2]['toStr'+_0x42d635(0x5f9)](0x1*0x2509+-0x45*-0x6d+0x2*-0x212d)]=_0x368390['XVNEF'](_0x78d2b7,_0x368390[_0x42d635(0x55b)](_0x29038a,_0x400438[_0x4e17ba][-0x1dab+-0x6e5*-0x1+0xb*0x212]),_0x42d635(0x2f6));}var _0x1ec9b8=_0x78d2b7(_0x368390['cHGam'](_0x29038a,0xb8f*0x1+-0x2218+-0x16b5*-0x1),_0x368390['GzUit']);if(_0x1ec9b8)_0x1069d4[_0x42d635(0x4de)+'a']=_0x368390[_0x42d635(0x55b)]('0x',_0x368390['OskpM'](_0x1ec9b8,0xb*0x28b+0x3e8*0x2+-0x23c9*0x1)[_0x42d635(0x258)+_0x42d635(0x5f9)](-0xb91*-0x2+0x1*0x17ed+-0x2eff*0x1));var _0x23e971=_0x368390['GFJoQ'](_0x5244f7,_0x29038a,0x233*-0x6+0x42b+-0x1*-0x94f,-0xb*0xa+-0x1*-0xd43+0x7*-0x1d5);if(_0x23e971)_0x1069d4['vec2']=_0x23e971;return _0x1069d4;}else{var _0x4f8ccf={'oCCTr':_0x227564['LRJtk'],'EvhEg':_0x42d635(0x2fd)},_0x4e8c25=_0x227564[_0x42d635(0x2dc)](_0x3493ca,_0x227564['uKACh'],_0x42d635(0x779)+'itch');_0x4e8c25[_0x42d635(0xc3d)]=_0x227564[_0x42d635(0xe2d)];var _0x241870=function(){var _0x581d6f=_0x42d635;_0x4e8c25[_0x581d6f(0x796)+_0x581d6f(0x698)+'te'](_0x4f8ccf[_0x581d6f(0x43d)],_0x56c555()?'true':_0x4f8ccf[_0x581d6f(0x759)]);};return _0x4e8c25[_0x42d635(0xe97)+'ck']=function(){var _0x29d5b8=_0x42d635;_0x227564[_0x29d5b8(0x862)](_0x1f7b58,!_0x431650()),_0x241870();},_0x241870(),_0x4e8c25[_0x42d635(0x972)]=_0x241870,_0x80d034['syncs'][_0x42d635(0x8f8)](_0x241870),_0x4e8c25;}}return null;}var _0x13d711=_0x189e9a(0x5ca)+_0x189e9a(0x500)+_0x189e9a(0x1df),_0x56dd19={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x47a408=localStorage[_0x189e9a(0x213)+'em'](_0x13d711);if(_0x47a408)_0x56dd19['fov']=Math[_0x189e9a(0x2a8)](-0x7e0+0x2451+0xc1*-0x25,Math['max'](0x3*0x96b+0xd69+-0x298c,parseFloat(_0x47a408)||0x7*-0x6d+-0x8a*-0x7+-0x71));}catch(_0x382e9a){}function _0x58ad62(){var _0xbb63f=_0x189e9a;try{if(_0x368390['SOnhj'](_0x368390[_0xbb63f(0x755)],_0x368390['NpomO']))localStorage[_0xbb63f(0xb1a)+'em'](_0x13d711,String(_0x56dd19['fov']));else return _0x44c3f3[_0xbb63f(0x8d9)+'s'][_0xbb63f(0x8f8)](_0xbb63f(0x74d)+_0xbb63f(0x8c6)+_0xbb63f(0x606)+'\x20'+_0x5b30f5),0x1*-0x1502+0xaf*0xd+-0xc1f*-0x1;}catch(_0xa97046){}}var _0x376c35=_0x189e9a(0x5ca)+_0x189e9a(0x500)+_0x189e9a(0xd0f)+_0x189e9a(0x885),_0x53de1f=![];try{_0x368390[_0x189e9a(0x908)](localStorage[_0x189e9a(0x213)+'em'](_0x376c35),null)&&(localStorage[_0x189e9a(0x4b8)+_0x189e9a(0x8e7)](_0x376c35),_0x53de1f=!![]);}catch(_0x2ed5a9){}var _0x456b17=-0x304+-0x2405*-0x1+-0x20d9,_0x30d346=-0x1*-0xa39+0x12cd*-0x2+0xe3*0x1f,_0x456b17=-0x7f*0x8+-0x20d4+0x24f4,_0x30d346=0x3d*0x71+-0x1*-0x448+0x1*-0x1f19,_0x4ff7cd=0x229d+-0x950+0x397*-0x7,_0x3c97b8={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0xfbbacc(_0x3ff525){var _0x16ab52=_0x189e9a,_0x1a3cf6={'LvlTl':function(_0x32db50,_0x25afc7){return _0x32db50+_0x25afc7;},'mPHhl':function(_0xc8da7,_0x5df6dd){return _0xc8da7(_0x5df6dd);}};if(_0x3ff525===undefined||_0x368390[_0x16ab52(0x231)](_0x3ff525,null))return undefined;if(typeof _0x3ff525['val']==='funct'+'ion'){if(_0x16ab52(0x538)!==_0x368390['iodTW']){if(_0x22cc26)_0x357425['textC'+_0x16ab52(0xa15)+'t']=_0x1a3cf6['LvlTl']((_0x1a3cf6[_0x16ab52(0x8bd)](_0x7e7c52,_0x283b43[_0x16ab52(0x4a8)])||-0xc04+-0x16f8+0x1*0x22fd)[_0x16ab52(0xd9b)+'ed'](0x6b0*-0x2+0x459+0x121*0x8),'x');_0x5edf42();}else try{if(_0x16ab52(0xe04)!==_0x16ab52(0xe04)){_0x3982ef['push']({'o':-(0x1*0xd03+0x797+-0x1499*0x1),'v':0x0,'why':_0x368390['mBsxM'](_0x16ab52(0xa7b)+_0x16ab52(0x2b8)+'f\x20',_0x443c8e)+('\x20Obsc'+_0x16ab52(0xc90)+'loats'+'\x20agre'+'ed')});return;}else return _0x3ff525[_0x16ab52(0x9a0)]();}catch(_0x4254cc){}}if(_0x368390[_0x16ab52(0x463)](typeof _0x3ff525,'objec'+'t'))return undefined;return _0x3ff525;}function _0x298272(_0x213c0a,_0x54d462,_0x480385){var _0x1efae6=_0x189e9a;try{if(_0x368390[_0x1efae6(0x4b5)]!=='mDlzf'){var _0x115489=new _0x3c77a1(_0x5a956b);for(var _0x165c79=0x22d5+0x1eb1+-0x4186*0x1;_0x368390['diliu'](_0x165c79,_0x6af33a);_0x165c79++)_0x115489[_0x165c79]=_0x27beae['getUi'+_0x1efae6(0x4a6)](_0x368390['MZcfO'](_0x368390['aqJIc'](_0x5e89e7,_0x3ddee3),_0x165c79));return _0x451242['ok']++,_0x115489;}else{var _0x7a5da9=window['Unity'+_0x1efae6(0x917)+'dkit']&&window[_0x1efae6(0xd88)+'WebMo'+'dkit'][_0x1efae6(0x79a)+'me'],_0x3ca687=_0x1c2ae7||_0x7a5da9&&_0x7a5da9[_0x1efae6(0x1c8)+'ns']&&_0x7a5da9[_0x1efae6(0x1c8)+'ns'][_0x7a5da9[_0x1efae6(0x1c8)+'ns']['lengt'+'h']-(-0x18e3+0x4*-0x103+-0x1cf*-0x10)];if(!_0x3ca687||typeof _0x3ca687[_0x1efae6(0x99c)]!==_0x1efae6(0x550)+'ion'){if(_0x1efae6(0xcbf)===_0x368390['rOhIT'])return _0x3c97b8[_0x1efae6(0x8d9)+'s'][_0x1efae6(0x8f8)](_0x1efae6(0xb65)+_0x1efae6(0xd1d)+_0x1efae6(0x99c)),undefined;else{var _0x339f83=_0x5cdb62(_0x534122[_0x1efae6(0x33c)],[_0x1b5399['eye'][-0x172*0x1a+-0x2559*-0x1+0x3b],_0x4fb82c[_0x1efae6(0x33c)][0x1417+0x16c2*0x1+-0x2ad8],_0x368390[_0x1efae6(0x364)](_0x3131b5[_0x1efae6(0x33c)][0x2*0x269+0x1e4b+-0x331*0xb],-0x6ba+-0x1a9c+0x2157)],0xc5a+0x3*-0x7f+-0x6f5,0xe01+-0x941+-0xd8);_0x339f83&&(_0x192762=_0x339f83['x']/(0x1834+0x2060+-0x34ac),_0x44ff96=_0x368390['AMWjX'](_0x339f83['y'],0x4*0x943+-0x1757*-0x1+-0x387b));}}return _0xfbbacc(_0x3ca687[_0x1efae6(0x99c)](_0x213c0a,_0x54d462,_0x480385||[]));}}catch(_0x3f48e3){if(_0x368390['PCaDe'](_0x3c97b8['error'+'s'][_0x1efae6(0xcc0)+'h'],-0x45a+-0xd*-0x1e4+-0x2*0xa1a))_0x3c97b8['error'+'s']['push'](_0x368390[_0x1efae6(0x1c2)](_0x368390['lROBp'](_0x213c0a,'.')+_0x54d462+':\x20',String(_0x3f48e3&&_0x3f48e3['messa'+'ge']||_0x3f48e3)[_0x1efae6(0x1dd)](-0x1515+-0x135e+0x2873,-0x24bb+0x358+0xb3f*0x3)));return undefined;}}function _0x4dc255(){var _0x2dcee0=_0x189e9a,_0xf2d321={'lQCJp':function(_0xa677d6,_0x5a24fd){return _0xa677d6(_0x5a24fd);},'xFxio':_0x2dcee0(0xc55)+_0x2dcee0(0xc39)};if(_0x3c97b8['scrat'+'ch'])return _0x3c97b8[_0x2dcee0(0x8bf)+'ch'];try{if('uMGEQ'!==_0x368390[_0x2dcee0(0xea9)]){_0x40bbe5[_0x2dcee0(0xbe9)+_0x2dcee0(0xa18)+_0x2dcee0(0xdea)](),_0xf2d321['lQCJp'](_0x142b95,_0xf2d321[_0x2dcee0(0x59b)]);return;}else{var _0x133e6d=window[_0x2dcee0(0xd88)+_0x2dcee0(0x917)+_0x2dcee0(0xcdd)]&&window[_0x2dcee0(0xd88)+'WebMo'+_0x2dcee0(0xcdd)][_0x2dcee0(0x79a)+'me'],_0x44d03b=_0x1c2ae7||_0x133e6d&&_0x133e6d[_0x2dcee0(0x1c8)+'ns']&&_0x133e6d['plugi'+'ns'][_0x133e6d[_0x2dcee0(0x1c8)+'ns'][_0x2dcee0(0xcc0)+'h']-(-0x2048+0x2153+-0x10a)];if(!_0x44d03b||typeof _0x44d03b[_0x2dcee0(0x74d)+'c']!==_0x2dcee0(0x550)+_0x2dcee0(0x762)){if(_0x2dcee0(0x8bb)!==_0x2dcee0(0x8bb)){var _0x20cb33=_0x568d99[_0x2dcee0(0x44d)][_0x17a767],_0x284db6=_0x368390['mReFq'](_0x20cb33['x']-_0x32c495['feet'][-0xb22+0x2c9*0x7+-0x85d],_0x3beebb),_0x187d73=_0x368390['FMVnA'](_0x20cb33['z'],_0x40f0a6[_0x2dcee0(0x9de)][-0x20c2*-0x1+-0x237d+0x2bd])*_0x50e975,_0x95b872=_0x303934[_0x2dcee0(0x9c2)](_0x368390['YHLHZ'](_0x368390[_0x2dcee0(0x286)](_0x284db6,_0x284db6),_0x368390['zPrim'](_0x187d73,_0x187d73))),_0x3d1f7d=_0x5da7f3,_0xab1f02=_0x42d5ac;_0x368390[_0x2dcee0(0xb98)](_0x95b872,_0x368390[_0x2dcee0(0x5e5)](_0x21e52f,0x2fe*0x6+-0xcae+-0x540))?(_0x3d1f7d=_0x368390[_0x2dcee0(0x24f)](_0x56f675,_0x284db6/_0x95b872*(_0x2d5f51-(-0x1efe+-0x13d8*-0x1+0xd*0xdc))),_0xab1f02=_0x368390['PVcEj'](_0xefe029,_0x187d73/_0x95b872*(_0x5e73a8-(0x10f*-0x10+0x10f1+0x5)))):(_0x3d1f7d=_0x368390['nQELu'](_0x38ee7a,_0x284db6),_0xab1f02=_0x259145+_0x187d73);var _0x55461e=_0x368390[_0x2dcee0(0xa1e)](_0x596016,null)&&_0x20cb33[_0x2dcee0(0x49e)]===_0x16ac16;_0x2c7650[_0x2dcee0(0x2cf)+_0x2dcee0(0x685)]=_0x55461e?_0x368390['kBqku']:_0x368390[_0x2dcee0(0xbc8)],_0x564cfa[_0x2dcee0(0x517)+'Path'](),_0x2055e7['arc'](_0x3d1f7d,_0xab1f02,_0x55461e?0x1507+0x22*0x1d+-0x18df:-0x1*0xe0f+-0x1*0x4c2+-0x12d4*-0x1+0.20000000000000018,-0x1*-0xb1c+0x1*-0x1e5+0x1*-0x937,_0x368390[_0x2dcee0(0x286)](_0x409a27['PI'],0x741*-0x2+-0x487*0x3+-0x1c19*-0x1)),_0x54eb17['fill'](),_0x24e2e9++;}else return _0x3c97b8['error'+'s']['push'](_0x2dcee0(0xb65)+'ugin.'+_0x2dcee0(0x74d)+'c'),0x1*-0x24bd+0x834+0x1c89;}var _0x54b410=_0x368390[_0x2dcee0(0x486)](_0xfbbacc,_0x44d03b['mallo'+'c'](0x1dac+-0x22*0x7f+0x657*-0x2));if(typeof _0x54b410!=='numbe'+'r'||!_0x368390['CDXSl'](_0x54b410,-0x2525+0x2*-0x1333+0x1*0x4b8b))return _0x3c97b8['error'+'s'][_0x2dcee0(0x8f8)](_0x368390[_0x2dcee0(0x3bf)]+_0x54b410),-0x2087+0x1*-0x1dd9+-0x8*-0x7cc;_0x3c97b8['scrat'+'ch']=_0x54b410;}}catch(_0x222372){if(_0x3c97b8[_0x2dcee0(0x8d9)+'s'][_0x2dcee0(0xcc0)+'h']<-0x9e1+0x3d1+0x616)_0x3c97b8[_0x2dcee0(0x8d9)+'s'][_0x2dcee0(0x8f8)](_0x368390[_0x2dcee0(0xaca)](_0x2dcee0(0x74d)+'c:\x20',String(_0x222372&&_0x222372['messa'+'ge']||_0x222372)[_0x2dcee0(0x1dd)](0x7*0x335+0x3ef+-0x1a62,0xb*0x32e+-0x1*-0x1079+-0x3319)));return 0x1*0x2c5+0x988+-0xc4d;}return _0x3c97b8['scrat'+'ch'];}function _0x153c64(_0x3ca355){var _0x48a745=_0x189e9a,_0x107f35=_0x368390[_0x48a745(0x387)][_0x48a745(0x464)]('|'),_0x4d2686=-0x13d2+0xe19*-0x2+0x1*0x3004;while(!![]){switch(_0x107f35[_0x4d2686++]){case'0':var _0x43a837=_0x368390[_0x48a745(0xb8a)](_0x6d4077,_0x25f5dd),_0x1cc331=_0x6d4077*_0x48ff1f,_0x33fb52=_0x6d4077*_0x2fd78f;continue;case'1':var _0x25f5dd=_0x3ca355[-0x15b*-0x1a+0x15fb+-0x3939],_0x48ff1f=_0x3ca355[0x25ba+-0xf6f+0x164a*-0x1],_0x2fd78f=_0x3ca355[0x16be+-0x157d+-0x13f*0x1],_0x6d4077=_0x3ca355[-0xcf4*0x2+0x13*0x14f+0x10e*0x1];continue;case'2':var _0x423f2c=_0x25f5dd*_0x25f5dd,_0x49c62d=_0x368390[_0x48a745(0xce4)](_0x48ff1f,_0x48ff1f),_0x4a1b49=_0x368390['vycIg'](_0x2fd78f,_0x2fd78f);continue;case'3':return{'right':[-0x11ef+0xd1f+0x4d1-_0x368390[_0x48a745(0x439)](0x42d*-0x1+0x161*0x3+0xc,_0x49c62d+_0x4a1b49),(-0x243d*0x1+0x1a8f+0x9b0)*(_0x56519f+_0x33fb52),_0x368390['fwnhV'](-0xeae+-0x1bb4+0x1532*0x2,_0x2d289e-_0x1cc331)],'up':[(-0x1fe1+0xe5*-0x1+0x20c8)*_0x368390['FMVnA'](_0x56519f,_0x33fb52),_0x368390[_0x48a745(0x95b)](-0x1*-0xfa7+0x1*-0xc02+-0x3a4,_0x368390['ciXzl'](-0x553+0xe93+-0x93e,_0x423f2c+_0x4a1b49)),(-0x1e51+0xb95+0x12be)*_0x368390[_0x48a745(0x2f0)](_0x4c4bc5,_0x43a837)],'fwd':[(-0x3*-0xac5+-0xc21+0x2*-0xa16)*(_0x2d289e+_0x1cc331),(0x3b*0x2f+0x1084+-0x1b57)*_0x368390[_0x48a745(0x95b)](_0x4c4bc5,_0x43a837),_0x368390['aCuOn'](0x1*-0x1c6d+-0x7d0+-0x1*-0x243e,_0x368390['hHcog'](0x1308*-0x1+0xd*-0xdf+0x1e5d,_0x368390[_0x48a745(0x981)](_0x423f2c,_0x49c62d)))]};case'4':var _0x56519f=_0x368390['jFxAx'](_0x25f5dd,_0x48ff1f),_0x2d289e=_0x368390[_0x48a745(0x9ba)](_0x25f5dd,_0x2fd78f),_0x4c4bc5=_0x48ff1f*_0x2fd78f;continue;}break;}}var _0xdcd745=-0x184a+0x17e8+0x80;function _0x2e8e1a(_0x4bebe5){var _0x1c9722=_0x189e9a,_0x521313={'TIjFQ':function(_0x5ea720,_0x5053fa){return _0x5ea720(_0x5053fa);},'gynBV':function(_0x16c965,_0x41b31b){return _0x16c965===_0x41b31b;},'PIgxd':_0x1c9722(0x778),'sfLFw':function(_0x2fb070,_0xdfbfe3){return _0x2fb070<=_0xdfbfe3;},'hIGbq':function(_0x3a9d48,_0x38c64d){var _0x254360=_0x1c9722;return _0x368390[_0x254360(0xab5)](_0x3a9d48,_0x38c64d);},'ueHIu':function(_0x1621fd,_0xff462e){return _0x1621fd*_0xff462e;}};if(_0x368390[_0x1c9722(0x3c6)](_0x368390[_0x1c9722(0xc6f)],'VHRKQ')){_0x3c97b8['ok']=![],_0x3c97b8[_0x1c9722(0xa97)]=_0x4bebe5,_0x3c97b8[_0x1c9722(0xc19)+'s']++;if(_0x3c97b8[_0x1c9722(0xc19)+'s']>_0xdcd745)return _0x3c97b8[_0x1c9722(0xad8)]=null,_0x3c97b8['basis']=null,_0x3c97b8['pos']=null,_0x3c97b8;return _0x3c97b8[_0x1c9722(0xa67)]++,_0x3c97b8;}else{var _0x4671dd=_0x299973['v'];if(typeof _0x4671dd!==_0x1c9722(0x93b)+'r'||!_0x521313[_0x1c9722(0x9b7)](_0x248992,_0x4671dd))return![];if(_0x521313[_0x1c9722(0xbd5)](_0x53e02d['k'],_0x521313['PIgxd']))return _0x4671dd===0x1068+-0x4f*0x7b+0x158d||_0x4671dd===0x20b8+-0xffc+-0x1*0x10bb;var _0xfd98a3=_0x6b9e10[_0x1c9722(0xc3c)];if(typeof _0xfd98a3!=='numbe'+'r'||!_0x163747(_0xfd98a3))return!![];if(_0x5956c9[_0x1c9722(0x715)]===0x419*-0x9+0xb1+0x6d*0x55)return _0x521313['sfLFw'](_0x2c63cb['abs'](_0x521313[_0x1c9722(0x7c8)](_0x4671dd,_0xfd98a3)),_0x3d4d25[_0x1c9722(0x302)](0x26b*-0x9+0x1faf+0x1*-0x9eb,_0x521313['ueHIu'](_0x3b5b13[_0x1c9722(0x2fa)](_0xfd98a3),0x4*0x20f+-0x1*0x67a+-0x1c2+0.6)));return _0x2cbf30[_0x1c9722(0x2fa)](_0x4671dd)<0x277*-0x6b0b3+-0x271b159e+0x733368d3;}}function _0xdc26e(){var _0x47f6cb=_0x189e9a;_0x3c97b8[_0x47f6cb(0xb83)]++,_0x3c97b8[_0x47f6cb(0xc19)+'s']=-0x5*-0x119+-0x2c7+0x15b*-0x2;var _0xa74a08=_0x3bc1c6(),_0x3e9f48=_0xa74a08&&_0xa74a08['mouse'+_0x47f6cb(0x83d)]?parseInt(_0xa74a08['mouse'+'Look'],0x1*-0xb66+-0x1*0x14ed+0x2063):_0x1eeccf;if(!_0x3e9f48)return _0x2e8e1a('no\x20Mo'+'useLo'+_0x47f6cb(0xcdc)+_0x47f6cb(0x335)+'e');if(_0x368390[_0x47f6cb(0x92f)](_0x1eeccf,_0x3e9f48))_0x1eeccf=_0x3e9f48;var _0x250fdd=_0x368390[_0x47f6cb(0xb19)](_0x78d2b7,_0x3e9f48+_0x4ff7cd,_0x368390[_0x47f6cb(0x674)]);if(_0x368390['pPxXU'](typeof _0x250fdd,'numbe'+'r')||!_0x368390[_0x47f6cb(0x5b4)](_0x250fdd,0x1*-0x1089+0x26b7+0x1*-0x162e))return _0x2e8e1a(_0x368390[_0x47f6cb(0x399)]);_0x3c97b8['camPt'+'r']=_0x250fdd;var _0x4828b1=_0x298272(_0x47f6cb(0xc32)+_0x47f6cb(0x98b),'get_t'+'ransf'+'orm',[_0x250fdd]);if(_0x368390[_0x47f6cb(0x6ff)](typeof _0x4828b1,_0x47f6cb(0x93b)+'r')||!(_0x4828b1>-0x13a2+-0x24a*-0x9+-0x4*0x3e))return _0x3c97b8[_0x47f6cb(0xd99)]=-0x1b*0xf6+-0x939+0x232b,_0x2e8e1a('Compo'+'nent.'+_0x47f6cb(0x991)+'ransf'+'orm\x20r'+_0x47f6cb(0x265)+'ed\x20'+_0x4828b1);_0x3c97b8[_0x47f6cb(0xd99)]=_0x4828b1;var _0x2bc2e8=_0x4dc255();if(!_0x2bc2e8)return _0x368390[_0x47f6cb(0x814)](_0x2e8e1a,_0x368390['axbUG']);var _0x24b27d=_0x368390[_0x47f6cb(0xc82)](_0x298272,_0x368390[_0x47f6cb(0xe5a)],_0x47f6cb(0xdf8)+'ieldO'+'fView',[_0x250fdd]);if(typeof _0x24b27d==='numbe'+'r'&&isFinite(_0x24b27d)&&_0x24b27d>0x20b6+-0x82d+-0x1888&&_0x368390[_0x47f6cb(0x8d8)](_0x24b27d,-0x1849+-0x142b+0x2d27))_0x3c97b8[_0x47f6cb(0x1df)]=_0x24b27d;_0x298272('Trans'+_0x47f6cb(0x22d),'get_r'+_0x47f6cb(0x3ff)+'on',[_0x2bc2e8,_0x4828b1]);var _0x4f88ba=[_0x78d2b7(_0x2bc2e8,'f32'),_0x368390['FhZAz'](_0x78d2b7,_0x2bc2e8+(-0x1*0x469+-0x73e+-0x67*-0x1d),'f32'),_0x368390['FhZAz'](_0x78d2b7,_0x368390[_0x47f6cb(0xaff)](_0x2bc2e8,0xa*0x22f+-0x1ae6+-0x146*-0x4),_0x47f6cb(0x2f6)),_0x78d2b7(_0x2bc2e8+(-0x24ee+0x1bdd+0x91d),_0x368390['sgEMu'])],_0x5032df=0x490+0x69a+-0xb2a;for(var _0x40155b=0xa72+0x67*-0x2d+0x35*0x25;_0x368390[_0x47f6cb(0xb5c)](_0x40155b,-0x2*0x5af+-0x1*0x1229+0x1*0x1d8b);_0x40155b++)_0x5032df+=_0x4f88ba[_0x40155b]*_0x4f88ba[_0x40155b];_0x5032df=Math[_0x47f6cb(0x9c2)](_0x5032df);var _0x9c6c2f=isFinite(_0x5032df)&&Math['abs'](_0x368390['OOYsy'](_0x5032df,-0x1014+0x69d*-0x3+0x23ec))<-0x911+0x19b*-0x12+-0x25f7*-0x1+0.02;_0x298272(_0x368390[_0x47f6cb(0x817)],_0x47f6cb(0xaec)+'ositi'+'on',[_0x2bc2e8,_0x4828b1]);var _0x26bb9d=_0x368390[_0x47f6cb(0xc61)](_0x78d2b7,_0x2bc2e8,'f32'),_0x41b38e=_0x78d2b7(_0x2bc2e8+(0x518+-0x463+-0xb1),'f32'),_0x382d24=_0x368390['nSQGD'](_0x78d2b7,_0x2bc2e8+(0xf9a+-0x1*-0x2225+-0x1*0x31b7),'f32');_0x3c97b8['pos']=typeof _0x26bb9d===_0x368390[_0x47f6cb(0xda8)]&&_0x368390[_0x47f6cb(0x9ee)](typeof _0x41b38e,_0x368390[_0x47f6cb(0xda8)])&&typeof _0x382d24===_0x368390[_0x47f6cb(0xda8)]&&_0x368390['wjArZ'](isFinite,_0x26bb9d)&&isFinite(_0x41b38e)&&isFinite(_0x382d24)&&Math['abs'](_0x26bb9d)<0x102b8+-0x5344+0xd72c&&Math['abs'](_0x41b38e)<0x637e+0x2581e+-0x317*0x64&&_0x368390[_0x47f6cb(0x36b)](Math[_0x47f6cb(0x2fa)](_0x382d24),-0x1*-0x2d321+-0xfa77+0x1*-0x520a)?[_0x26bb9d,_0x41b38e,_0x382d24]:null,_0x3c97b8['appli'+'ed']++;if(_0x9c6c2f)return _0x3c97b8['quat']=_0x4f88ba,_0x3c97b8[_0x47f6cb(0xd5c)]=_0x153c64(_0x4f88ba),_0x3c97b8['ok']=!![],_0x3c97b8['why']='',_0x3c97b8[_0x47f6cb(0x8f2)+'e']=_0x47f6cb(0x4de)+'a\x20tra'+_0x47f6cb(0xa14)+'m',_0x3c97b8;_0x3c97b8[_0x47f6cb(0xad8)]=null,_0x3c97b8[_0x47f6cb(0xd5c)]=null;if(_0x3c97b8[_0x47f6cb(0x1df)]!==null){if(_0x368390[_0x47f6cb(0x5a2)]('WJnNu',_0x368390['StukU']))return _0x3c97b8['ok']=!![],_0x3c97b8[_0x47f6cb(0x8f2)+'e']='camer'+'a\x20fov'+'\x20only',_0x3c97b8[_0x47f6cb(0xa97)]=_0x368390['YHLHZ'](_0x47f6cb(0xa9b)+'ion\x20u'+_0x47f6cb(0x1cf)+_0x47f6cb(0xb68)+_0x47f6cb(0x95f)+Math[_0x47f6cb(0xbe5)](_0x5032df*(0x1*0x21ec+-0x1d21*-0x1+0x1*-0x3b25))/(0x5*-0x466+0x1e5+0x1801),')\x20-\x20f'+_0x47f6cb(0x77b)+'ly'),_0x3c97b8;else _0x516f23[_0x47f6cb(0x4c6)+_0x47f6cb(0x655)]=![],_0xa26638['heapU'+'8']=![],_0x49034b['heapB'+_0x47f6cb(0x8b5)]=0x7*0xdf+-0x4*0x3bd+0x8db;}return _0x3c97b8['ok']=![],_0x3c97b8[_0x47f6cb(0x8f2)+'e']=null,_0x3c97b8[_0x47f6cb(0xa97)]=_0x368390[_0x47f6cb(0xa3c)](_0x47f6cb(0xa9b)+_0x47f6cb(0xb7b)+_0x47f6cb(0x1cf)+'le\x20(|'+'q|='+_0x368390[_0x47f6cb(0x5a3)](Math[_0x47f6cb(0xbe5)](_0x5032df*(0x2d1+0x25b8+0x1*-0x24a1)),0xa5*0x1f+-0x1*-0x16dd+0x590*-0x7),_0x368390[_0x47f6cb(0x5dc)]),_0x3c97b8;}function _0xb89445(){var _0x569969=_0x189e9a;if(_0x3c97b8[_0x569969(0xb83)])return _0x3c97b8;return _0xdc26e();}var _0x5b0cfc={'pitch':null,'yaw':null,'identified':![],'why':_0x368390['boRIs'],'source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x69c256(_0x188766){var _0x14bf5d=_0x189e9a,_0x20c81f=null,_0x3b6118=-0x3a*0x69+0x2*0x1df+0x140c;for(var _0x56e32c in _0x1b5527){if(_0x368390['bBUgY']===_0x368390['bBUgY']){var _0x532e7d=_0x1b5527[_0x56e32c];if(!_0x532e7d['hits']||_0x368390[_0x14bf5d(0x33d)](_0x532e7d[_0x14bf5d(0xc17)],null))continue;var _0x4077a3=_0x78d2b7(_0x368390['MbHZz'](_0x1eeccf,_0x188766),_0x368390[_0x14bf5d(0xb15)]);if(typeof _0x4077a3!==_0x368390['yYSuW'])continue;if(_0x368390['wOsKl'](Math[_0x14bf5d(0x2fa)](_0x368390['JfpPm'](_0x532e7d[_0x14bf5d(0xc17)],_0x4077a3)),-0x20ed+-0x17fb*-0x1+0x8f2+0.001)&&_0x532e7d['hits']>_0x3b6118){if(_0x14bf5d(0x727)==='cSvVk')_0x20c81f=_0x56e32c,_0x3b6118=_0x532e7d[_0x14bf5d(0xe3e)];else{var _0x9a4c6=0x1ddb*-0x1+-0x2002+0x3ddd;for(var _0x152f4d=-0x1849+0x1*-0x1eb+0x1a34;_0x152f4d<_0x584b99['lengt'+'h'];_0x152f4d++){var _0x1d0fe8=_0x17087c[_0x14bf5d(0x9c2)](_0x368390[_0x14bf5d(0x8b0)](_0x368390[_0x14bf5d(0x5f0)](_0x197153[_0x152f4d]['v'][0x16a2*-0x1+0x73*0x19+0x8b*0x15],_0x5dc2b4[_0x152f4d]['v'][0xc04+0xbc4+-0x17c8]),_0x368390[_0x14bf5d(0x5f0)](_0x527185[_0x152f4d]['v'][-0xc1+0x303*0x6+0x7*-0x279],_0x4a41ad[_0x152f4d]['v'][0x651+-0x1*-0x13d5+-0x2*0xd12])));if(_0x368390[_0x14bf5d(0x1cb)](_0x1d0fe8,_0x9a4c6))_0x9a4c6=_0x1d0fe8;}_0x141abf+=_0x9a4c6;}}}else{var _0x223da2=_0x3583cc['c'][_0x19bf3c]['v'],_0x153a16=_0x323797['sqrt'](_0x223da2[0x8*-0x16e+-0xec2+0x1df*0xe]*_0x223da2[0x1133+0x615+-0x1748]+_0x368390['osPai'](_0x223da2[-0x1*-0x24dd+0x24c9+-0x49a4],_0x223da2[-0x1*-0x63+0x1*-0x166a+0x1*0x1609]));(_0x368390[_0x14bf5d(0xaa4)](_0x153a16,_0x1cbe68)||_0x153a16===_0x2bc509&&_0x223da2[-0xb27*0x1+0x1c60*-0x1+0x1*0x2788]<_0x46be17['v'][0x57+0xa40+-0xa96])&&(_0x486e39=_0x153a16,_0x1f448d=_0x5ac1d0['c'][_0x227139]);}}return _0x20c81f;}function _0x53c004(_0x144fd1){var _0x518168=_0x189e9a,_0x2c75e7=[],_0x54977e=_0x117247[_0x518168(0x971)+_0x518168(0x83d)]||[];for(var _0x4c3a0c in _0x1b5527){var _0x4636ca=_0x1b5527[_0x4c3a0c];if(!_0x4636ca[_0x518168(0xe3e)])continue;var _0x36a0cb=null;for(var _0xa2471d=0x42f*-0x8+-0x45*-0x1d+0x1*0x19a7;_0xa2471d<_0x54977e['lengt'+'h'];_0xa2471d++){if(_0x54977e[_0xa2471d][-0x236b*0x1+0x1c3a+0x732]!==_0x518168(0x2f6))continue;var _0x5b2ca8=_0x78d2b7(_0x368390['SpOjM'](_0x144fd1,_0x54977e[_0xa2471d][0x175e+0x99f+-0x1*0x20fd]),_0x518168(0x2f6));if(_0x368390[_0x518168(0xc4b)](typeof _0x5b2ca8,_0x368390[_0x518168(0xda8)])&&Math[_0x518168(0x2fa)](_0x5b2ca8-_0x4636ca[_0x518168(0xc17)])<-0x6b*-0x21+0x1347+-0x66*0x53+0.001){_0x36a0cb=_0x368390['GafVT']('0x',_0x54977e[_0xa2471d][-0x50*-0x68+-0x2502+0x482][_0x518168(0x258)+_0x518168(0x5f9)](0x1a08+-0x3fd+-0x14b*0x11));break;}}_0x2c75e7['push']({'name':_0x4c3a0c,'value':_0x4636ca[_0x518168(0xc17)],'matches':_0x36a0cb,'hits':_0x4636ca['hits'],'lo':_0x4636ca['lo'],'hi':_0x4636ca['hi'],'travel':_0x4636ca['lo']===null?-0x3da+0x308*-0x9+0x1f22:_0x368390[_0x518168(0x5a3)](Math[_0x518168(0xbe5)](_0x368390[_0x518168(0x4f9)](_0x4636ca['hi'],_0x4636ca['lo'])*(-0x6*-0x1f3+0x5*-0x269+-0xbf*-0x1)),-0xf79+0x1*0x54a+0xa93),'jump':Math[_0x518168(0xbe5)](_0x4636ca['jump']*(-0x2693+0xabb+0x8b*0x34))/(0x34a*-0x1+-0x3e9+0x1*0x797),'set':_0x4636ca['setHi'+'ts']?_0x4636ca['setLa'+'st']:null});}return _0x2c75e7;}function _0x2d8b65(){var _0x27db1f=_0x189e9a,_0x3ab1bd=_0x368390[_0x27db1f(0xcaa)](_0x3bc1c6);if(!_0x3ab1bd||!_0x3ab1bd['mouse'+_0x27db1f(0x83d)])return _0x5b0cfc[_0x27db1f(0x798)+'ified']=![],_0x5b0cfc['why']=_0x368390[_0x27db1f(0x9ed)],null;var _0x2a0219=parseInt(_0x3ab1bd[_0x27db1f(0x85e)+_0x27db1f(0x83d)],0x1911+0x6f0+0x11*-0x1e1);if(_0x368390['ghBGj'](_0x1eeccf,_0x2a0219))_0x1eeccf=_0x2a0219;_0x5b0cfc['gette'+'rs']=_0x53c004(_0x2a0219);var _0xc75056=_0x474b46(),_0x51439e=-0x194a*-0x1+0x7f*-0x26+-0x1*0x66f,_0x392140=-0x1d07+0x2585*-0x1+0x2173*0x2;function _0x404331(_0x2f491d){return _0x2f491d['lo']===null||_0x2f491d['hi']===null?-0x1*-0xb55+-0x5ca+-0x58b:_0x2f491d['hi']-_0x2f491d['lo'];}var _0x568498=null;for(var _0x4de23d in _0x1b5527){var _0x29b3dd=_0x1b5527[_0x4de23d];if(!_0x29b3dd[_0x27db1f(0xe3e)]||_0x29b3dd['last']===null)continue;if(_0x368390[_0x27db1f(0xa49)](_0x404331,_0x29b3dd)<_0x51439e)continue;if(_0x29b3dd['jump']>_0x392140)continue;var _0xc6cd70=_0x78d2b7(_0x368390['aKaow'](_0x1eeccf,_0x456b17),_0x27db1f(0x2f6));if(_0x368390[_0x27db1f(0x52e)](typeof _0xc6cd70,_0x368390[_0x27db1f(0xda8)])||Math['abs'](_0x29b3dd[_0x27db1f(0xc17)]-_0xc6cd70)>=-0x14a6*0x1+-0x187*0x13+-0x31ab*-0x1+0.001)continue;if(!_0x568498||_0x29b3dd[_0x27db1f(0xe3e)]>_0x1b5527[_0x568498]['hits'])_0x568498=_0x4de23d;}var _0x244a91=null;for(var _0x343cb6 in _0x1b5527){if(_0x368390['mNZNB'](_0x343cb6,_0x568498))continue;var _0x1f033e=_0x1b5527[_0x343cb6];if(!_0x1f033e[_0x27db1f(0xe3e)]||_0x368390['TUQzp'](_0x1f033e['last'],null))continue;if(_0x404331(_0x1f033e)<_0x51439e)continue;if(_0x368390['pqKXa'](_0x1f033e[_0x27db1f(0x40d)],_0x392140))continue;if(_0x368390[_0x27db1f(0xcf7)](_0x1f033e['last'],-(0x20e3+0x1f48+0x1f*-0x20f))&&_0x1f033e['last']<=-0x11b9*0x1+-0x155b+0x276e){_0x244a91=_0x343cb6;break;}}_0x5b0cfc[_0x27db1f(0xc21)+_0x27db1f(0x85a)]=_0x568498,_0x5b0cfc[_0x27db1f(0x1bf)+_0x27db1f(0x414)+'r']=_0x244a91;var _0x4c3485,_0x1b8eec;if(_0xc75056&&_0x368390['eBbzQ'](_0xc75056['pitch'],null))_0x1b8eec=_0xc75056[_0x27db1f(0x1bf)],_0x4c3485=_0xc75056['yaw'],_0x5b0cfc[_0x27db1f(0x8f2)+'e']=_0x368390[_0x27db1f(0xade)]+_0xc75056[_0x27db1f(0x1f6)]+')';else{if(_0x568498)_0x4c3485=_0x1b5527[_0x568498]['last'],_0x5b0cfc['sourc'+'e']=_0x27db1f(0x927)+'r',_0x1b8eec=_0x244a91?_0x1b5527[_0x244a91][_0x27db1f(0xc17)]:_0x78d2b7(_0x2a0219+_0x30d346,_0x368390[_0x27db1f(0xb15)]);else{if('ieaZP'===_0x368390[_0x27db1f(0xd0e)])return![];else _0x4c3485=_0x78d2b7(_0x2a0219+_0x456b17,_0x27db1f(0x2f6)),_0x1b8eec=_0x78d2b7(_0x2a0219+_0x30d346,_0x368390[_0x27db1f(0xb15)]),_0x5b0cfc[_0x27db1f(0x8f2)+'e']=_0x368390[_0x27db1f(0xc80)];}}_0x5b0cfc['rawYa'+'w']=_0x4c3485,_0x5b0cfc['rawPi'+_0x27db1f(0xe3f)]=_0x1b8eec;if(typeof _0x4c3485!==_0x368390[_0x27db1f(0xda8)]||!_0x368390[_0x27db1f(0x5b9)](isFinite,_0x4c3485)||typeof _0x1b8eec!==_0x27db1f(0x93b)+'r'||!_0x368390['tUBQy'](isFinite,_0x1b8eec))return _0x5b0cfc['ident'+_0x27db1f(0x30c)]=![],_0x5b0cfc['why']=_0x368390['Gkwjp'],null;if(_0x368390['CDyLd'](_0x1b8eec,-(-0x17*0x4e+-0x4aa*0x1+0xc06))||_0x368390[_0x27db1f(0xdcb)](_0x1b8eec,0x1*0x25bb+-0x1d65+-0x7fc))return _0x5b0cfc[_0x27db1f(0x798)+'ified']=![],_0x5b0cfc[_0x27db1f(0xa97)]=_0x27db1f(0x1bf)+'\x20'+Math['round'](_0x1b8eec)+_0x368390['FsGSX'],null;return _0x5b0cfc['why']='',_0x5b0cfc[_0x27db1f(0x798)+_0x27db1f(0x30c)]=!![],_0x5b0cfc[_0x27db1f(0x1bf)]=_0x1b8eec,_0x5b0cfc[_0x27db1f(0xdce)]=_0x4c3485,_0x5b0cfc;}function _0x3542a2(_0x3c8088,_0x239778,_0x2a98ae,_0x4e6c40){var _0x2af3b7=_0x189e9a,_0x1a1b02=_0xb89445(),_0x4f4738=null,_0x28bb49=_0x3c8088,_0xc89dc0=_0x56dd19['fov'];if(_0x1a1b02['basis']){_0x4f4738=_0x1a1b02['basis'];if(_0x1a1b02[_0x2af3b7(0x90e)])_0x28bb49=_0x1a1b02['pos'];if(_0x1a1b02[_0x2af3b7(0x1df)]!==null)_0xc89dc0=_0x1a1b02[_0x2af3b7(0x1df)];}var _0x4ffd8e,_0x471c9e,_0x4ecee0,_0x431aaf,_0x446dec,_0x237f7b,_0x5eae74,_0x5adeed,_0x49f7d3;if(_0x4f4738){if(_0x2af3b7(0x60e)!=='nZVyu')return _0x3eb0e0[_0x2af3b7(0x8f2)+'e']=_0x368390['pjSds'],_0x14e022;else{var _0x4815fb=('0|5|3'+_0x2af3b7(0x5f1)+'6|8|4'+'|2')['split']('|'),_0x5f3749=0x935*0x2+0x1*-0x8ef+-0x97b;while(!![]){switch(_0x4815fb[_0x5f3749++]){case'0':_0x4ffd8e=_0x4f4738[_0x2af3b7(0x773)][0x1f1b+0x8de*-0x1+-0x163d];continue;case'1':_0x431aaf=_0x4f4738['right'][-0x6*0x29a+-0x1487+0x2423];continue;case'2':_0x49f7d3=_0x4f4738['up'][0x2b*0x94+0x22d2+-0x3bac];continue;case'3':_0x4ecee0=_0x4f4738[_0x2af3b7(0x773)][0x2206+-0xd5*-0x1+0x22d9*-0x1];continue;case'4':_0x5adeed=_0x4f4738['up'][-0x1957*-0x1+0x5*-0xf8+-0x147e];continue;case'5':_0x471c9e=_0x4f4738['fwd'][-0x2605+0x4f7+0x210f];continue;case'6':_0x237f7b=_0x4f4738[_0x2af3b7(0x603)][0x2389*-0x1+-0x1c9b+-0x11*-0x3c6];continue;case'7':_0x446dec=_0x4f4738[_0x2af3b7(0x603)][-0x156c+0xc17+0x956];continue;case'8':_0x5eae74=_0x4f4738['up'][0xa*-0xb9+0x3d9+0x361];continue;}break;}}}else{var _0x47d541=(_0x2af3b7(0xe0a)+_0x2af3b7(0x8c8)+_0x2af3b7(0x55f)+_0x2af3b7(0xc79)+'|4|1|'+_0x2af3b7(0xca2))[_0x2af3b7(0x464)]('|'),_0x572d35=-0xcd7*0x1+-0x76c+0x6c1*0x3;while(!![]){switch(_0x47d541[_0x572d35++]){case'0':_0x4ffd8e=Math[_0x2af3b7(0x825)](_0x3a820e)*_0x2479bd;continue;case'1':_0x5eae74=_0x368390['aCuOn'](_0x368390[_0x2af3b7(0x539)](_0x471c9e,_0x237f7b),_0x368390[_0x2af3b7(0x75b)](_0x4ecee0,_0x446dec));continue;case'2':_0x471c9e=-Math['sin'](_0x24ccdd);continue;case'3':_0x49f7d3=_0x368390[_0x2af3b7(0x260)](_0x4ffd8e*_0x446dec,_0x471c9e*_0x431aaf);continue;case'4':_0x237f7b=-_0x4ffd8e;continue;case'5':if(!_0x4a8fb5)return null;continue;case'6':_0x5adeed=_0x368390[_0x2af3b7(0xb8f)](_0x4ecee0,_0x431aaf)-_0x4ffd8e*_0x237f7b;continue;case'7':var _0x2479bd=Math[_0x2af3b7(0x8ee)](_0x24ccdd);continue;case'8':var _0x24ccdd=_0x368390['ciXzl'](_0x4a8fb5[_0x2af3b7(0x1bf)],Math['PI'])/(0x26*0x84+-0x456+0x19e*-0x9),_0x3a820e=_0x4a8fb5['yaw']*Math['PI']/(-0x1209+0x1*-0xb75+0x1e32);continue;case'9':_0x431aaf=_0x4ecee0;continue;case'10':_0x446dec=-0x1f5a+-0x2597*0x1+-0x1dd*-0x25;continue;case'11':_0x4ecee0=Math['cos'](_0x3a820e)*_0x2479bd;continue;case'12':var _0x4a8fb5=_0x2d8b65();continue;}break;}}var _0x434922=_0x239778[-0xbad+0x1551+-0x9a4]-_0x28bb49[-0x2461+0x24b*0x11+0x29a*-0x1],_0x1f3b56=_0x368390['WXFqw'](_0x239778[0x21a8+-0x8*-0x41b+-0x427f],_0x28bb49[0x1ecb+0x1619+-0x34e3]),_0x456d08=_0x239778[-0x1145*0x1+0x9fa+0x74d]-_0x28bb49[-0xddf*-0x1+0x2000+-0x2ddd],_0x174964=_0x368390['EuElL'](_0x368390['CGmpw'](_0x434922*_0x4ffd8e,_0x1f3b56*_0x471c9e),_0x456d08*_0x4ecee0);if(_0x174964<=0x4b4+0x1*-0x1c42+0x4b6*0x5+0.05)return null;var _0x52cf80=_0x368390[_0x2af3b7(0xd39)](_0x434922*_0x431aaf+_0x1f3b56*_0x446dec,_0x368390[_0x2af3b7(0xb8f)](_0x456d08,_0x237f7b)),_0x32c9ca=_0x368390[_0x2af3b7(0xa03)](_0x368390[_0x2af3b7(0x75d)](_0x368390['zPrim'](_0x434922,_0x5eae74),_0x1f3b56*_0x5adeed),_0x456d08*_0x49f7d3),_0x5b25de=_0x2a98ae/_0x4e6c40,_0x14b808=_0x368390['QwKse'](_0xc89dc0,Math['PI'])/(-0x14b*-0x1b+0x17d8+-0x3a0d),_0x4d68a6=Math[_0x2af3b7(0x3d3)](_0x368390[_0x2af3b7(0x325)](_0x14b808,-0xb5*0x2c+0x141b+0xb03*0x1)),_0x354bcd=_0x368390[_0x2af3b7(0x7f2)](_0x368390['AMWjX'](_0x52cf80,_0x174964),_0x4d68a6*_0x5b25de),_0x5b2d9f=_0x368390[_0x2af3b7(0xd3f)](_0x368390['mzWLR'](_0x32c9ca,_0x174964),_0x4d68a6);if(_0x368390['oEEsA'](_0x354bcd,-(-0x1833+-0x5*-0x166+0x1136+0.6000000000000001))||_0x354bcd>0x173f+0xe41+0x14b*-0x1d+0.6000000000000001||_0x5b2d9f<-(0x1c3d*0x1+0xd1*0x2d+0x40f9*-0x1+0.6000000000000001)||_0x5b2d9f>0x12e8+0x154d+-0x2834+0.6000000000000001)return null;return{'x':(_0x354bcd*(-0x1e*-0x147+-0x73*0x50+-0x262+0.5)+(0x186b+0x1e42+-0x1*0x36ad+0.5))*_0x2a98ae,'y':(0xd*0x1e7+0xf6*-0x11+-0x865+0.5-_0x5b2d9f*(-0x1e3f+-0x1*-0xcd7+0x1168*0x1+0.5))*_0x4e6c40,'z':_0x174964};}var _0x109cd4={'open':![],'cat':_0x189e9a(0x5d9)+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x597996=_0x189e9a(0x5ca)+_0x189e9a(0x500)+_0x189e9a(0x598)+_0x189e9a(0x90e),_0x31c788=null,_0x1e63dc=[{'id':_0x368390[_0x189e9a(0x556)],'label':_0x368390['nODdl']},{'id':_0x189e9a(0xd3a)+'ls','label':_0x189e9a(0x9a1)},{'id':'value'+'s','label':_0x368390[_0x189e9a(0x609)]},{'id':_0x189e9a(0x289),'label':_0x189e9a(0xc6a)}],_0x321149=_0x368390[_0x189e9a(0xeb1)](_0x368390[_0x189e9a(0x21b)](_0x368390['dajhr'](_0x368390['LLxhd'](_0x368390[_0x189e9a(0x444)](_0x368390[_0x189e9a(0xa3c)](_0x368390['toVJe'](_0x368390['HXNoz'](_0x368390['tBuBc'](_0x368390[_0x189e9a(0x70f)](_0x368390['uHuWR'](_0x368390[_0x189e9a(0xaca)](_0x368390[_0x189e9a(0xdd3)](_0x368390[_0x189e9a(0xe6d)](_0x368390[_0x189e9a(0x9f4)](_0x368390[_0x189e9a(0x31c)](_0x368390[_0x189e9a(0x299)](_0x368390['FcvlI'](_0x368390[_0x189e9a(0x518)](_0x368390[_0x189e9a(0xb3e)](_0x368390['LPtnp'](_0x368390[_0x189e9a(0xbf8)](_0x368390['epAdi'](_0x368390[_0x189e9a(0x304)](_0x368390[_0x189e9a(0x648)](_0x368390['CDVIX'](_0x368390['QlSSK'](_0x368390[_0x189e9a(0x2ad)](_0x368390['drBrI']+(_0x189e9a(0xb31)+_0x189e9a(0x9db)+_0x189e9a(0xdff)+_0x189e9a(0x9d5)+_0x189e9a(0x3c8)+_0x189e9a(0x40e)+'ition'+_0x189e9a(0x3fb)+_0x189e9a(0xe50)+_0x189e9a(0xca3)+'px;bo'+'ttom:'+'24px;'+_0x189e9a(0x52b)+':min('+'620px'+',calc'+_0x189e9a(0x666)+_0x189e9a(0x31e)+'8px))'+';max-'+_0x189e9a(0xcb8)+_0x189e9a(0x701)+_0x189e9a(0xc9a)+_0x189e9a(0x509)+'c(100'+'vh\x20-\x20'+_0x189e9a(0x2b3)+');'),_0x189e9a(0x6b0)+'ay:fl'+_0x189e9a(0x1ed)+_0x189e9a(0x7c9)+_0x189e9a(0x670)+'ding:'+'10px;'+'borde'+_0x189e9a(0x2c0)+_0x189e9a(0x753)+_0x189e9a(0x5d7)+'ointe'+_0x189e9a(0x5b5)+'nts:a'+_0x189e9a(0xcbc)+'-inde'+_0x189e9a(0x7fa)+'74836'+'47;')+_0x368390['qovIS']+('box-s'+_0x189e9a(0xc96)+':0\x200\x20'+'0\x201px'+'\x20rgba'+_0x189e9a(0x745)+_0x189e9a(0x57e)+'55,.0'+_0x189e9a(0x4e1)+'set\x200'+'\x201px\x20'+_0x189e9a(0xe35)+_0x189e9a(0x91e)+_0x189e9a(0x2ec)+_0x189e9a(0xe20)+_0x189e9a(0x91d)+_0x189e9a(0x458)+'\x2080px'+_0x189e9a(0x4a3)+_0x189e9a(0xa4a)+'0,.55'+');'),_0x189e9a(0x72e)+_0x189e9a(0x421)+'trans'+_0x189e9a(0x2bf)+_0x189e9a(0x1d9)+_0x189e9a(0x38c)+_0x189e9a(0x4ee)+');poi'+_0x189e9a(0xd20)+_0x189e9a(0x625)+_0x189e9a(0x597)+'e;tra'+_0x189e9a(0x6e1)+'on:op'+_0x189e9a(0x914)+_0x189e9a(0x7a4)+_0x189e9a(0x3df)+_0x189e9a(0x868)+'sform'+_0x189e9a(0x54d)+_0x189e9a(0xd4b)+_0x189e9a(0x89b)+'ier(.'+_0x189e9a(0xe99)+_0x189e9a(0x281)+');'),_0x368390['mqQxq']),_0x189e9a(0xb31)+_0x189e9a(0x9db)+'nu-ro'+_0x189e9a(0x9d5)+_0x189e9a(0x3c8)+_0x189e9a(0x787)+_0x189e9a(0x4e9)+'acity'+_0x189e9a(0x5eb)+_0x189e9a(0x697)+_0x189e9a(0x217)+'ne;po'+_0x189e9a(0x8b4)+'-even'+_0x189e9a(0xc85)+_0x189e9a(0x2ba)),_0x368390['vZiIL'])+_0x368390['AqVAF']+_0x368390['rYSoD']+(_0x189e9a(0x6dc)+'ogo-s'+_0x189e9a(0xbef)+'dth:2'+_0x189e9a(0x45e)+'eight'+_0x189e9a(0x2ce)+';over'+'flow:'+_0x189e9a(0x208)+_0x189e9a(0x207)+'lter:'+'drop-'+'shado'+_0x189e9a(0x675)+_0x189e9a(0x607)+'rgba('+_0x189e9a(0xd54)+_0x189e9a(0xd01)+_0x189e9a(0xe11)+_0x189e9a(0x21c))+_0x368390['CJTIX']+_0x368390['CRJUt'],_0x189e9a(0xde8)+_0x189e9a(0xeb9)+_0x189e9a(0xa77)+_0x189e9a(0xbe0)+'rgba('+_0x189e9a(0x3c4)+'38,24'+'2,.8)'+';}'),'.mn-t'+'ab.ac'+'tive{'+_0x189e9a(0x995)+':#ff6'+_0x189e9a(0x761)+_0x189e9a(0x3e8)+'ound:'+'rgba('+'255,1'+_0x189e9a(0xd01)+_0x189e9a(0x431)+';}')+('.mn-m'+'ain{f'+'lex:1'+_0x189e9a(0x564)+_0x189e9a(0x52b)+_0x189e9a(0xcaf)+_0x189e9a(0xaea)+_0x189e9a(0x460)+_0x189e9a(0x959)+_0x189e9a(0xb93)+_0x189e9a(0xe7c)+':colu'+'mn;}'),_0x368390[_0x189e9a(0x34b)]),_0x368390[_0x189e9a(0x315)])+(_0x189e9a(0x710)+_0x189e9a(0xaa8)+'-size'+':17px'+';font'+_0x189e9a(0xe15)+_0x189e9a(0xce1)+'0;}')+(_0x189e9a(0x3ee)+_0x189e9a(0xda1)+_0x189e9a(0x8c7)+_0x189e9a(0x69e)+'px;op'+'acity'+_0x189e9a(0x723))+(_0x189e9a(0x76f)+_0x189e9a(0xd3c)+_0x189e9a(0x6b0)+_0x189e9a(0x4e2)+'id;pl'+'ace-i'+_0x189e9a(0x9e2)+'cente'+'r;wid'+_0x189e9a(0x206)+'px;he'+_0x189e9a(0x968)+_0x189e9a(0x7e6)+_0x189e9a(0x68c)+_0x189e9a(0x31a)+_0x189e9a(0x1f6)+_0x189e9a(0x66e)+_0x189e9a(0x229)+'x;bac'+'kgrou'+'nd:tr'+_0x189e9a(0x47a)+_0x189e9a(0x29d))+_0x368390[_0x189e9a(0x313)]+(_0x189e9a(0x76f)+_0x189e9a(0x8db)+_0x189e9a(0x1fc)+'{opac'+'ity:1'+_0x189e9a(0xb32)+_0x189e9a(0x859)+_0x189e9a(0x770)+'a(255'+',255,'+'255,.'+_0x189e9a(0x90d)),_0x189e9a(0x76f)+_0x189e9a(0xe30)+_0x189e9a(0xc36)+_0x189e9a(0x2f9)+'14px;'+_0x189e9a(0xcb8)+_0x189e9a(0x428)+_0x189e9a(0xe94)+_0x189e9a(0xaef)+_0x189e9a(0xa21)+_0x189e9a(0x6a0)+_0x189e9a(0x6d9)+'tColo'+'r;str'+_0x189e9a(0xd65)+_0x189e9a(0x2f9)+_0x189e9a(0x2df)+_0x189e9a(0xdcc)+_0x189e9a(0xc00)+_0x189e9a(0x438)+_0x189e9a(0xd3b)),_0x368390['wrLnZ'])+(_0x189e9a(0x789)+_0x189e9a(0x376)+'s:sta'+'rt;al'+_0x189e9a(0x475)+_0x189e9a(0xa15)+_0x189e9a(0x5d3)+_0x189e9a(0x354)+_0x189e9a(0x7c9)+_0x189e9a(0x670)+'ding:'+_0x189e9a(0x90c)+'\x206px\x20'+'0;}'),'.mn-c'+_0x189e9a(0xd2e)+_0x189e9a(0xdb1)+'it-sc'+'rollb'+'ar{wi'+_0x189e9a(0x658)+_0x189e9a(0xe06))+_0x368390[_0x189e9a(0x985)],'.sk-c'+'ard{b'+'order'+'-radi'+'us:12'+'px;ba'+'ckgro'+_0x189e9a(0x72f)+_0x189e9a(0xd34)+'55,25'+_0x189e9a(0x2c6)+_0x189e9a(0x807)+');box'+'-shad'+_0x189e9a(0x58b)+_0x189e9a(0xc20)+_0x189e9a(0x4be)+'1px\x20r'+'gba(2'+_0x189e9a(0xbff)+'5,255'+_0x189e9a(0x684)+';}'),'.sk-c'+_0x189e9a(0x45b)+_0x189e9a(0xd12)+'kgrou'+_0x189e9a(0x1cd)+_0x189e9a(0xb66)+'5,255'+_0x189e9a(0x2ec)+'.04);'+_0x189e9a(0x61c)+_0x189e9a(0xc96)+_0x189e9a(0xb57)+_0x189e9a(0x8cb)+_0x189e9a(0x8e2)+_0x189e9a(0x686)+_0x189e9a(0x91e)+_0x189e9a(0xcb7)+_0x189e9a(0x259)+_0x189e9a(0x945)),'.sk-c'+_0x189e9a(0xc40)+_0x189e9a(0x853)+'ispla'+_0x189e9a(0x6bc)+'x;ali'+'gn-it'+_0x189e9a(0x642)+_0x189e9a(0x68e)+_0x189e9a(0x5fb)+_0x189e9a(0xe21)+'addin'+'g:11p'+_0x189e9a(0x81e)+_0x189e9a(0xad1))+_0x368390[_0x189e9a(0x78b)]+('.sk-c'+_0x189e9a(0x76a)+'itle\x20'+'stron'+'g{fon'+'t-siz'+_0x189e9a(0x866)+_0x189e9a(0x7cd)+'t-wei'+_0x189e9a(0x513)+_0x189e9a(0x6a2)+_0x189e9a(0xb3b)+'gba(2'+'46,23'+_0x189e9a(0x48d)+_0x189e9a(0x4fc)+';}'),_0x368390[_0x189e9a(0x248)]),'.sk-m'+_0x189e9a(0xaf2)+'paddi'+'ng:0\x20'+'12px\x20'+_0x189e9a(0xd61)+'}'),_0x368390[_0x189e9a(0x8e1)]),_0x368390[_0x189e9a(0x64e)])+_0x368390[_0x189e9a(0xc24)]+_0x368390[_0x189e9a(0xdde)],_0x189e9a(0x4b3)+_0x189e9a(0xb58)+'{posi'+_0x189e9a(0x4e3)+'relat'+_0x189e9a(0xc53)+_0x189e9a(0x2f9)+_0x189e9a(0xebd)+'heigh'+_0x189e9a(0x428)+_0x189e9a(0x989)+_0x189e9a(0x677)+_0x189e9a(0x69d)+'er-ra'+_0x189e9a(0xaa6)+_0x189e9a(0xd80)+'backg'+_0x189e9a(0xbe5)+':rgba'+_0x189e9a(0x745)+_0x189e9a(0x57e)+_0x189e9a(0x2fe)+'7);cu'+_0x189e9a(0xc42)+_0x189e9a(0x7bd)+_0x189e9a(0x978)+_0x189e9a(0x85c)+_0x189e9a(0x88c)),_0x368390['plHfu']),_0x189e9a(0xd57)+'round'+_0x189e9a(0x32b)+_0x189e9a(0x745)+_0x189e9a(0x57e)+'55,.2'+_0x189e9a(0xc75)+'ansit'+'ion:l'+_0x189e9a(0x5e3)+_0x189e9a(0x721)+_0x189e9a(0x61d)+'und\x20.'+'2s;}'),_0x189e9a(0x4b3)+_0x189e9a(0xb58)+'[aria'+_0x189e9a(0x3e7)+_0x189e9a(0x241)+_0x189e9a(0x667)+']{bac'+'kgrou'+'nd:rg'+_0x189e9a(0xb66)+'5,107'+_0x189e9a(0xc09)+_0x189e9a(0xa9c)+'}'),_0x368390[_0x189e9a(0x802)])+_0x368390['swRhh']+_0x368390[_0x189e9a(0x926)]+(_0x189e9a(0x4b3)+_0x189e9a(0x3e1)+_0x189e9a(0x9e4)+'bkit-'+_0x189e9a(0x552)+_0x189e9a(0x334)+_0x189e9a(0xde5)+_0x189e9a(0xe58)+_0x189e9a(0xd4f)+'ght:2'+_0x189e9a(0xcdb)+_0x189e9a(0xe9b)+_0x189e9a(0xd27)+_0x189e9a(0x329)+';'),'backg'+_0x189e9a(0xbe5)+':line'+_0x189e9a(0xe8d)+_0x189e9a(0xa08)+_0x189e9a(0xe23)+_0x189e9a(0x692)+'#ff6b'+'9d)\x200'+_0x189e9a(0xd82)+_0x189e9a(0xa28)+_0x189e9a(0x80b)+_0x189e9a(0x26a)+_0x189e9a(0x3d4)+'-repe'+_0x189e9a(0x763)+_0x189e9a(0xb66)+_0x189e9a(0x2c6)+_0x189e9a(0x2ec)+_0x189e9a(0xdb6)+'}')+_0x368390[_0x189e9a(0xa04)]+_0x368390[_0x189e9a(0xa1c)]+_0x368390[_0x189e9a(0xc1d)],_0x368390[_0x189e9a(0x806)]),'.sk-b'+_0x189e9a(0xa9f)+'ign-s'+_0x189e9a(0x9b1)+_0x189e9a(0x249)+_0x189e9a(0x3c9)+'borde'+_0x189e9a(0x31a)+_0x189e9a(0x1f6)+'-radi'+'us:8p'+'x;pad'+_0x189e9a(0x2a0)+_0x189e9a(0xc52)+_0x189e9a(0x950)+'ackgr'+_0x189e9a(0xac1)+'#ff6b'+_0x189e9a(0x63c)+_0x189e9a(0x861)+_0x189e9a(0xe6b)),_0x368390[_0x189e9a(0xd70)])+(_0x189e9a(0xc2e)+'tn:ho'+'ver{f'+_0x189e9a(0x983)+':brig'+'htnes'+_0x189e9a(0x327)+_0x189e9a(0x21c))+(_0x189e9a(0xc38)+'re{fo'+'nt:11'+'px/1.'+_0x189e9a(0x831)+'monos'+'pace,'+'Conso'+_0x189e9a(0xe73)+_0x189e9a(0xde2)+_0x189e9a(0x52f)+'hite-'+_0x189e9a(0x5e1)+_0x189e9a(0x201)+_0x189e9a(0xa23)+'word-'+'break'+_0x189e9a(0xe96)+_0x189e9a(0x507)+_0x189e9a(0xa63)+_0x189e9a(0xbba)+_0x189e9a(0x41b)+'ity:.'+_0x189e9a(0xc7f)+'x-hei'+'ght:2'+_0x189e9a(0x2c4)+_0x189e9a(0x80d)+_0x189e9a(0xba6)+_0x189e9a(0xad0))+_0x368390[_0x189e9a(0xe3c)]+(_0x189e9a(0x1d9)+_0x189e9a(0x92e)+_0x189e9a(0x6cd)+_0x189e9a(0xe13)+'2s;po'+_0x189e9a(0x8b4)+_0x189e9a(0x6d2)+_0x189e9a(0xc85)+_0x189e9a(0x5fd)+_0x189e9a(0x795)+_0x189e9a(0x7af)+_0x189e9a(0xc27)+'w(0\x200'+_0x189e9a(0x607)+_0x189e9a(0xbd0)+_0x189e9a(0xd54)+'07,15'+_0x189e9a(0xc14)+');}'),_0x37a9f1=_0x368390[_0x189e9a(0xd47)](_0x368390[_0x189e9a(0xb53)]+('fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+_0x189e9a(0x5bc)+_0x189e9a(0xd84)+'troke'+_0x189e9a(0x1da)+_0x189e9a(0x4df)+_0x189e9a(0x422)+'ke-li'+_0x189e9a(0xca8)+'=\x22rou'+'nd\x22\x20s'+'troke'+_0x189e9a(0x839)+'join='+'\x22roun'+_0x189e9a(0xa6e)),'<circ'+_0x189e9a(0x725)+'=\x2212\x22'+'\x20cy=\x22'+'10\x22\x20r'+_0x189e9a(0x219)+_0x189e9a(0x81c)+_0x189e9a(0x478)+_0x189e9a(0x96c)+'\x22/></'+'svg>'),_0x2447f5=_0x368390['DIkOs']+(_0x189e9a(0x7df)+_0x189e9a(0x71b)+'\x22\x20str'+_0x189e9a(0xe90)+'#ff6b'+_0x189e9a(0xd84)+_0x189e9a(0x879)+'-widt'+_0x189e9a(0x54a)+_0x189e9a(0x869)+'roke-'+_0x189e9a(0x6a5)+_0x189e9a(0xa78)+'ound\x22'+'\x20stro'+'ke-li'+_0x189e9a(0x63d)+'n=\x22ro'+'und\x22/'+'>')+_0x368390['ZojZg'];function _0x3c90dd(_0x215dd7,_0x2d5bd0,_0x4a8bbb){var _0x3e9e08=_0x189e9a;if('gZoAr'!=='IwlhJ'){var _0x467022=document[_0x3e9e08(0x631)+'eElem'+_0x3e9e08(0x9c3)](_0x215dd7);if(_0x2d5bd0)_0x467022[_0x3e9e08(0x8cf)+_0x3e9e08(0x406)]=_0x2d5bd0;if(_0x4a8bbb!=null)_0x467022['inner'+_0x3e9e08(0xa06)]=_0x4a8bbb;return _0x467022;}else{var _0x3555a8=_0x368390['gXfNM'][_0x3e9e08(0x464)]('|'),_0x5da5fe=-0xa34+0x15bc+-0x24*0x52;while(!![]){switch(_0x3555a8[_0x5da5fe++]){case'0':var _0x31acba=_0x368390['AaPdy'](_0x5da758*_0xfd0b72[0x2e*-0x97+-0x989*-0x3+-0x179]+_0x459c24*_0xfd0b72[-0x1*-0x3e1+-0x26e6+0x1*0x2306],_0x368390[_0x3e9e08(0x21f)](_0x9bc11c,_0xfd0b72[-0x3b*-0x4+-0xe3*0x3+0x1bf]));continue;case'1':var _0xfd0b72=_0xe25285['fwd'],_0x235244=_0x46686b[_0x3e9e08(0x603)];continue;case'2':var _0x21d4ae=_0x5da758*_0x235244[-0x124f+-0x5*0x37e+0x23c5]+_0x459c24*_0x235244[0x59e+0x20a3+-0x2640]+_0x368390['WZRix'](_0x9bc11c,_0x235244[0xfb6+-0x6b7+0xb1*-0xd]);continue;case'3':var _0x5da758=_0x4dabc9['x']-_0x282e63['pos'][0x17e3+-0x9d1*0x3+0x1*0x590],_0x459c24=_0x368390[_0x3e9e08(0xab8)](_0xfe43f['y'],_0x30e749['pos'][0xac3+-0x75d*0x4+0x959*0x2]),_0x9bc11c=_0x368390[_0x3e9e08(0xc70)](_0xa7b40d['z'],_0x77b8fd['pos'][-0x74*-0xb+0xa*-0x4c+-0x202*0x1]);continue;case'4':if(_0x31acba>0x491+0x16eb+0x1b7c*-0x1+0.5)_0x58668e=_0x368390['jCbDK'](_0x21d4ae/_0x31acba,_0x368390['uGUjW'](_0x138716,_0x3e66e8));continue;}break;}}}function _0x1aa24c(_0x45b06d,_0x117dd7){var _0x2d181c=_0x189e9a,_0x55f0e5=_0x368390[_0x2d181c(0x255)][_0x2d181c(0x464)]('|'),_0x18f14b=0xca5+0x3*0x94d+-0xa23*0x4;while(!![]){switch(_0x55f0e5[_0x18f14b++]){case'0':return _0x25df31;case'1':var _0x2a921e=_0x368390[_0x2d181c(0xb19)](_0x3c90dd,'div',_0x368390[_0x2d181c(0x36f)]);continue;case'2':_0x25df31[_0x2d181c(0xdc4)+_0x2d181c(0x9bf)+'d'](_0x4ca5f1);continue;case'3':var _0x356a55=_0x3c90dd(_0x368390['FwJpr'],_0x368390[_0x2d181c(0x1e1)],_0x368390['RjozZ']+_0x45b06d+('</str'+'ong>'));continue;case'4':_0x25df31['body']=_0x2a921e;continue;case'5':_0x25df31[_0x2d181c(0xdc4)+_0x2d181c(0x9bf)+'d'](_0x2a921e);continue;case'6':var _0x25df31=_0x3c90dd(_0x368390['FwJpr'],_0x2d181c(0x754)+'rd'+(_0x117dd7?_0x368390[_0x2d181c(0x4fa)]:''));continue;case'7':_0x25df31['head']=_0x356a55;continue;case'8':_0x4ca5f1['appen'+_0x2d181c(0x9bf)+'d'](_0x356a55);continue;case'9':var _0x4ca5f1=_0x368390['nSQGD'](_0x3c90dd,_0x368390['FwJpr'],_0x2d181c(0x754)+'rd-he'+'ad');continue;}break;}}function _0x38419f(_0xc01059,_0x9eb4ba){var _0x44c3dc=_0x189e9a,_0x55804b={'zqbwr':function(_0x4cc340){return _0x4cc340();},'cVAKm':_0x368390['gjKVJ']};if(_0x368390[_0x44c3dc(0xd09)]===_0x368390[_0x44c3dc(0xd09)]){var _0x1e70ad=_0x368390['GnEEv'](_0x3c90dd,_0x44c3dc(0x6b4)+'n','sk-sw'+_0x44c3dc(0x4c7));_0x1e70ad[_0x44c3dc(0xc3d)]='butto'+'n';var _0x42a656=function(){var _0x254da3=_0x44c3dc;_0x1e70ad['setAt'+'tribu'+'te'](_0x254da3(0x672)+_0x254da3(0x986)+'ed',_0x55804b[_0x254da3(0x903)](_0xc01059)?'true':_0x55804b[_0x254da3(0xa10)]);};return _0x1e70ad['oncli'+'ck']=function(){_0x368390['loHFx'](_0x9eb4ba,!_0x368390['lFnGg'](_0xc01059)),_0x368390['OvgpZ'](_0x42a656);},_0x42a656(),_0x1e70ad[_0x44c3dc(0x972)]=_0x42a656,_0x109cd4[_0x44c3dc(0xca0)][_0x44c3dc(0x8f8)](_0x42a656),_0x1e70ad;}else return _0x5577de[_0x44c3dc(0x798)+_0x44c3dc(0x30c)]=![],_0x62c6d0[_0x44c3dc(0xa97)]=_0x44c3dc(0x337)+_0x44c3dc(0xe3d)+_0x44c3dc(0x8c1)+'t',null;}function _0x3be1f2(_0x356be6,_0x4c0d26,_0x961bf8,_0x42f4f8,_0x20165f){var _0xcc8ca5=_0x189e9a,_0x3c1ab0={'VAYkF':_0x368390[_0xcc8ca5(0xe45)],'TSFXk':_0x368390['xASCr'],'vXyff':function(_0x2c65d0,_0x45ff33){return _0x2c65d0+_0x45ff33;},'Fyjim':function(_0x1e190b,_0x1e29ac){return _0x368390['jFSFn'](_0x1e190b,_0x1e29ac);},'gaMnO':function(_0x273261,_0x3d62b4){var _0x470845=_0xcc8ca5;return _0x368390[_0x470845(0x814)](_0x273261,_0x3d62b4);},'LdorU':function(_0x2bc793){return _0x2bc793();},'IWkIX':'Playe'+'rs\x20ar'+_0xcc8ca5(0x4d1)+_0xcc8ca5(0x43c)+_0xcc8ca5(0xd49)+'one\x20a'+_0xcc8ca5(0x97f)+'assif'+_0xcc8ca5(0xa6a)+_0xcc8ca5(0xc05)+_0xcc8ca5(0xd9e)+_0xcc8ca5(0xcd3)+_0xcc8ca5(0xdf3)+'k\x20','LYSMK':_0xcc8ca5(0xce8)+_0xcc8ca5(0xd0c)+'\x20each'+'\x20entr'+_0xcc8ca5(0x911)+_0xcc8ca5(0xb26)+'ers`.'};if(_0x368390['eBbzQ'](_0xcc8ca5(0x7ac),_0xcc8ca5(0xdc1))){var _0x185b37=_0x368390['cKFYq'](_0x3c90dd,_0xcc8ca5(0x973),_0xcc8ca5(0x452)+_0xcc8ca5(0x79e)),_0x4efcd3=document['creat'+_0xcc8ca5(0x490)+_0xcc8ca5(0x9c3)](_0xcc8ca5(0xe22));_0x4efcd3['type']=_0x368390[_0xcc8ca5(0x401)],_0x4efcd3['class'+'Name']=_0x368390['KyWHA'],_0x4efcd3[_0xcc8ca5(0x2a8)]=String(_0x356be6),_0x4efcd3['max']=_0x368390[_0xcc8ca5(0x681)](String,_0x4c0d26),_0x4efcd3['step']=_0x368390['yovPB'](String,_0x961bf8);var _0xfe3460=_0x3c90dd(_0xcc8ca5(0xe5f),_0xcc8ca5(0xb28)+'l'),_0x14e7d5=function(){var _0x1c5b4a=_0xcc8ca5;if(_0x1c5b4a(0x9ef)===_0x3c1ab0['VAYkF'])_0x4cc111['begin'+_0x1c5b4a(0x974)](),_0x16b162[_0x1c5b4a(0x1fe)](_0xa713f9,_0x127abb,(_0xe8a41e-(0xc0d*-0x2+0x26b5+-0x1*0xe97))*_0x2464ba/(0x22d*0x4+-0x3*0x37b+0x1c0),0x57*-0x65+-0x1915+0x3b68*0x1,_0x3b3cf0['PI']*(-0x14c*0x16+-0x71d+-0x1*-0x23a7)),_0x23a31a[_0x1c5b4a(0xde4)+'e']();else{var _0xb2788a=_0x3c1ab0[_0x1c5b4a(0x26e)][_0x1c5b4a(0x464)]('|'),_0x5de580=0x1*-0x1da6+0x2597+0x13*-0x6b;while(!![]){switch(_0xb2788a[_0x5de580++]){case'0':_0x4efcd3['value']=String(_0x229bdf);continue;case'1':_0x4efcd3['style'][_0x1c5b4a(0x8f9)+_0x1c5b4a(0x349)+'y'](_0x1c5b4a(0x48a),_0x3c1ab0[_0x1c5b4a(0xc0b)](_0x18f50b,'%'));continue;case'2':var _0x229bdf=_0x42f4f8();continue;case'3':var _0x18f50b=_0x3c1ab0[_0x1c5b4a(0x56e)](_0x229bdf-_0x356be6,_0x4c0d26-_0x356be6)*(-0x29*0xb2+-0x21f7+0xd1*0x4d);continue;case'4':_0xfe3460['textC'+_0x1c5b4a(0xa15)+'t']=_0x3c1ab0['vXyff'](_0x961bf8<0xe0*0xe+-0x10aa+-0x1d*-0x27?_0x229bdf[_0x1c5b4a(0xd9b)+'ed'](0x72*-0x10+0x20ec+0x1*-0x19cb):String(Math[_0x1c5b4a(0xbe5)](_0x229bdf)),_0x4efcd3[_0x1c5b4a(0x1ce)+'et'][_0x1c5b4a(0xe69)]||'');continue;}break;}}};return _0x4efcd3[_0xcc8ca5(0x4d7)+'ut']=function(){_0x20165f(_0x3c1ab0['gaMnO'](parseFloat,_0x4efcd3['value'])||_0x356be6),_0x3c1ab0['LdorU'](_0x14e7d5);},_0x185b37[_0xcc8ca5(0xdc4)+_0xcc8ca5(0x9bf)+'d'](_0x4efcd3),_0x185b37[_0xcc8ca5(0xdc4)+'dChil'+'d'](_0xfe3460),_0x185b37[_0xcc8ca5(0x972)]=_0x14e7d5,_0x185b37[_0xcc8ca5(0xe22)]=_0x4efcd3,_0x368390[_0xcc8ca5(0x554)](_0x14e7d5),_0x109cd4[_0xcc8ca5(0xca0)]['push'](_0x14e7d5),_0x185b37;}else _0x81beab['note']=_0x3c1ab0[_0xcc8ca5(0x502)]+_0x3c1ab0['LYSMK'];}function _0x2d274a(_0x197dbc,_0x2e5f13){var _0x524eab=_0x189e9a,_0x2e5a1a=_0x3c90dd(_0x524eab(0x973),_0x368390[_0x524eab(0x613)]),_0x569903=_0x3c90dd(_0x368390['FwJpr'],_0x524eab(0x6d1)+_0x524eab(0x743),_0x368390['UMjoq'](_0x197dbc,_0x2e5f13?_0x368390[_0x524eab(0xabf)](_0x524eab(0x280)+_0x524eab(0x6ab)+_0x524eab(0x210)+_0x524eab(0xccd)+'\x27>'+_0x2e5f13,_0x368390[_0x524eab(0x55d)]):''));return _0x2e5a1a[_0x524eab(0xdc4)+'dChil'+'d'](_0x569903),_0x2e5a1a;}function _0x167d4f(_0x37bce4,_0x26f478,_0x39502c,_0x26419a){var _0x301c59=_0x189e9a;if(_0x368390['OUVEs'](_0x368390[_0x301c59(0x89d)],'hKZJN')){var _0x3c24c8=_0x414292[_0x301c59(0x464)]('+');_0xed14e2=_0x368390[_0x301c59(0x576)](_0x36e160,_0x1feb1c,_0x3c24c8[-0xf3+0x2*-0x981+-0x6a7*-0x3][_0x301c59(0xbdf)+'Of']('Healt'+'h')===0x1ac6*-0x1+-0x1e0d+0x38d3?_0x301c59(0xccc)+_0x301c59(0x663)+'pt':_0x301c59(0x76c)+_0x301c59(0x9d1)+_0x301c59(0x88e),_0x368390[_0x301c59(0x398)](_0x40aae4,_0x3c24c8[0x44d*0x8+0xaf*0x1d+-0x363a],0x16e2+0x5e*-0x35+-0x35c));}else{var _0x211cfa=_0x37bce4&&_0x37bce4[_0x301c59(0x734)+'y']&&_0x37bce4['surve'+'y'][_0x26f478];if(!_0x211cfa)return'-';for(var _0x5e8fc4=0x1*-0xaa3+-0x38c*-0x2+0x38b;_0x5e8fc4<_0x211cfa[_0x301c59(0xcc0)+'h'];_0x5e8fc4++){if(_0x368390[_0x301c59(0xa1e)](_0x368390['SqiZY'],'yEjns'))return _0x4f8f7d['on'];else{if(_0x368390[_0x301c59(0xc4b)](_0x211cfa[_0x5e8fc4]['o'],_0x39502c)){if(_0x26419a==='v3'){if(_0x368390[_0x301c59(0x671)]!==_0x368390['Mcwks']){var _0x5a3fdf=_0x28a0d8(_0xc9c251['refs']['healt'+'h'],0x80*0x2c+0xd*-0x72+-0x3*0x562);_0x502e40[_0x301c59(0x7d3)+'h']=_0x368390[_0x301c59(0xa31)](_0x587883,_0x5a3fdf,_0x301c59(0xccc)+_0x301c59(0x663)+'pt','obfI');}else{var _0x4dc3dc=_0x211cfa[_0x5e8fc4][_0x301c59(0x358)]||[_0x211cfa[_0x5e8fc4]['v'],-0x3*-0xb29+0x2*-0x11b2+0x1e9,0x12*0x133+-0x10b6+-0x4e0];return _0x4dc3dc[_0x301c59(0x7bb)](function(_0x1e38a6){var _0x2c730c=_0x301c59,_0x5d1bca={'PEayx':function(_0xe6fff3,_0x26cedd){var _0x32d523=_0x4f94;return _0x368390[_0x32d523(0xaca)](_0xe6fff3,_0x26cedd);}};if(_0x2c730c(0xac0)!==_0x368390['GeaXx'])return Math['round'](_0x1e38a6*(-0x2*-0x665+0x1*0x8ef+-0x7f*0x2b))/(-0x16*0x187+-0x171b+0x3919);else _0x5c1eba['st'][_0x2c730c(0x9b0)+'ritte'+'n']=_0x5719da[_0x2c730c(0x34d)+'d'](_0x5fbe58),_0x2a3193++,_0x549e77[_0x2c730c(0x8f8)](_0x5d1bca[_0x2c730c(0x449)]('0x',_0x37fbaa['o'][_0x2c730c(0x258)+_0x2c730c(0x5f9)](0x15f1+-0x575+0x4*-0x41b)));})['join']('\x20\x20');}}var _0x525f32=_0x211cfa[_0x5e8fc4]['v'];return _0x368390['MGnim'](typeof _0x525f32,_0x368390['yYSuW'])?_0x368390[_0x301c59(0x4b4)](Math[_0x301c59(0xbe5)](_0x525f32*(0x1e4f+0xb5*-0x32+0x1d*0x4f)),-0x1436+0x1b8a+-0x36c):String(_0x525f32);}}}return'-';}}function _0x34f3ff(_0x31b64e){var _0x3310a8=_0x189e9a,_0x4f15c2={'iNHCR':function(_0x2c0b03,_0x379689){return _0x2c0b03===_0x379689;},'TwZtW':_0x368390['yYSuW'],'zmDYf':function(_0x374fb8,_0x2980fc){var _0x369099=_0x4f94;return _0x368390[_0x369099(0x53a)](_0x374fb8,_0x2980fc);},'dxUgY':function(_0x18ef5d,_0x2a9693){return _0x368390['nTxYW'](_0x18ef5d,_0x2a9693);},'edkAK':function(_0x399895,_0x33fcbb){return _0x399895-_0x33fcbb;},'XAdSG':function(_0x50a4f5,_0x557e00){var _0x491f6a=_0x4f94;return _0x368390[_0x491f6a(0x624)](_0x50a4f5,_0x557e00);},'XklyA':function(_0xe1f75e,_0x3e449b){var _0x1880fc=_0x4f94;return _0x368390[_0x1880fc(0x549)](_0xe1f75e,_0x3e449b);},'UetUm':_0x3310a8(0x4ea),'Fydir':_0x3310a8(0x610),'CpMQW':_0x3310a8(0x7ef),'iZfXv':function(_0x235719,_0x4375eb){return _0x235719+_0x4375eb;},'OlZvR':_0x368390['vPfmn'],'JrxdW':function(_0x242c45,_0x2359ee){var _0x57fd6d=_0x3310a8;return _0x368390[_0x57fd6d(0xdad)](_0x242c45,_0x2359ee);},'sIVTz':_0x3310a8(0xea6),'fNaEj':function(_0x245959,_0x25f923,_0x2a9e89){var _0x39f633=_0x3310a8;return _0x368390[_0x39f633(0x398)](_0x245959,_0x25f923,_0x2a9e89);},'MKBKI':function(_0xecb1c0,_0x2d167b){return _0x368390['ATxbP'](_0xecb1c0,_0x2d167b);},'ilUhs':_0x3310a8(0xbf1),'JnJAP':'qaeMN','oAXJJ':'MFvZO','HVrMq':function(_0x58876b,_0x4e5485){return _0x368390['CaIiR'](_0x58876b,_0x4e5485);},'BxeqG':_0x368390[_0x3310a8(0x848)],'smXde':'Copy\x20'+_0x3310a8(0x1e2)+'d'},_0x26819b=_0x31c788,_0x17b8ac=[],_0x30f8fd;if(_0x31b64e===_0x3310a8(0x5d9)+'t'){var _0x150ee2=_0x368390[_0x3310a8(0x398)](_0x1aa24c,_0x3310a8(0x1e6)+'\x20hack',_0x2a77ad['on']),_0x4530dc=_0x368390['UxyGG'](_0x3c90dd,_0x3310a8(0x973),_0x368390[_0x3310a8(0x696)],_0x2a77ad['on']?_0x368390['aBlck'](_0x368390[_0x3310a8(0x4a9)](_0x368390[_0x3310a8(0x1d7)]('x',_0x2a77ad['facto'+'r']['toFix'+'ed'](0x1c69+0x101f+-0x2c87*0x1)),_0x368390['xqIty'])+_0x41dd3f['lengt'+'h'],_0x368390[_0x3310a8(0x633)])+_0x157b2b+('\x20writ'+'es'):_0x3310a8(0xae9)+_0x3310a8(0xd1f)+'\x20move'+_0x3310a8(0x909)+_0x3310a8(0x353)+'\x20fiel'+'ds\x20on'+'ly.\x20H'+_0x3310a8(0x86f)+',\x20ste'+_0x3310a8(0x8c5)+_0x3310a8(0xa8a)+_0x3310a8(0x276)+_0x3310a8(0xea8)+_0x3310a8(0x964)),_0xf28aa0=_0x368390[_0x3310a8(0x486)](_0x2d274a,_0x368390[_0x3310a8(0x56a)]);_0xf28aa0[_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x38419f(function(){var _0x1520bf=_0x3310a8;if(_0x4f15c2['XklyA'](_0x4f15c2['UetUm'],_0x4f15c2[_0x1520bf(0xb59)]))return _0x2a77ad['on'];else{var _0x3c23b2=_0x411eb9[_0x1520bf(0x9a0)]();if(_0x4f15c2['iNHCR'](typeof _0x3c23b2,_0x4f15c2[_0x1520bf(0x871)])&&_0x4f15c2['zmDYf'](_0x801cca,_0x3c23b2)){if(_0x218165['lo']===null||_0x4f15c2[_0x1520bf(0xcec)](_0x3c23b2,_0x13efd3['lo']))_0x1dac65['lo']=_0x3c23b2;if(_0x27f332['hi']===null||_0x3c23b2>_0x1c2bec['hi'])_0xedf84b['hi']=_0x3c23b2;if(_0x4921dc['last']!==null){var _0xbe61ec=_0x4779b6['abs'](_0x4f15c2[_0x1520bf(0xb03)](_0x3c23b2,_0xef3be6[_0x1520bf(0xc17)]));if(_0xbe61ec>_0x50908b['jump'])_0x4b4e3e['jump']=_0xbe61ec;}_0x24dfab[_0x1520bf(0xc17)]=_0x3c23b2;}_0x52b55e[_0x1520bf(0xe3e)]++;if(_0x2f4efa[-0x8b4+0x78d+-0x25*-0x8]&&_0x4f15c2['XAdSG'](typeof _0x4add85[-0x316+-0x1007+0x131e][_0x1520bf(0x9a0)],'funct'+'ion')){var _0x3f6c3f=_0x36d6a2[-0x759+0x21ed+0x1*-0x1a93]['val']();if(_0x3f6c3f)_0x3dd190=_0x3f6c3f;}}},function(_0xec8d41){var _0x5bf868=_0x3310a8;_0x2a496a(_0xec8d41,_0x2a77ad[_0x5bf868(0xb52)+'r']),_0x4530dc['textC'+_0x5bf868(0xa15)+'t']=_0xec8d41?_0x368390['EvtxV'](_0x368390[_0x5bf868(0x31c)](_0x368390[_0x5bf868(0xc1a)](_0x368390['AaPdy']('x',_0x2a77ad[_0x5bf868(0xb52)+'r'][_0x5bf868(0xd9b)+'ed'](-0x141d+-0x1eba+0x32d8)),_0x368390['xqIty'])+_0x41dd3f['lengt'+'h'],_0x368390[_0x5bf868(0x633)])+_0x157b2b,_0x368390['zrIkc']):'Multi'+_0x5bf868(0xd1f)+'\x20move'+_0x5bf868(0x909)+'speed'+_0x5bf868(0x6c9)+'ds\x20on'+_0x5bf868(0xb00)+_0x5bf868(0x86f)+_0x5bf868(0xacc)+_0x5bf868(0x8c5)+_0x5bf868(0xa8a)+_0x5bf868(0x276)+'refus'+'ed.';})),_0x150ee2['body']['appen'+_0x3310a8(0x9bf)+'d'](_0x4530dc),_0x150ee2['body']['appen'+_0x3310a8(0x9bf)+'d'](_0xf28aa0);var _0x43f56a=_0x3be1f2(0xe5f*-0x1+0x97*0x25+-0x1*0x773,0x1e25+0x779+-0x2599,0x22c9+0x16b4+-0x397d*0x1+0.5,function(){var _0x57d4ad=_0x3310a8;if(_0x4f15c2['iNHCR'](_0x4f15c2[_0x57d4ad(0x5f6)],_0x57d4ad(0x7ef)))return _0x2a77ad[_0x57d4ad(0xb52)+'r'];else{if(_0x356446['tried'])return _0x17d143;return _0x5e83f7();}},function(_0x227343){var _0x2d6a9c=_0x3310a8;_0x368390[_0x2d6a9c(0xc8a)](_0x2d6a9c(0x2a5),'VidlJ')?_0x46cd4a[_0x4f15c2['iZfXv'](_0x4f15c2['iZfXv'](_0x49d788,_0x2d6a9c(0xe0c)),_0x4ff474[_0x45a771]['o'][_0x2d6a9c(0x258)+'ing'](0xc4*0xa+-0x5ea*-0x1+0xb6*-0x13))]=_0x3770ad[_0x27e6a8]['v']:_0x2a496a(_0x2a77ad['on'],_0x227343);});_0x43f56a['input'][_0x3310a8(0x1ce)+'et'][_0x3310a8(0xe69)]='x';var _0x5a38e2=_0x2d274a(_0x3310a8(0xae9)+'plier',_0x368390['RpHPJ']);_0x5a38e2['appen'+_0x3310a8(0x9bf)+'d'](_0x43f56a),_0x150ee2[_0x3310a8(0xe8e)]['appen'+'dChil'+'d'](_0x5a38e2);if(_0x4d63f4['lengt'+'h']){if(_0x3310a8(0x898)===_0x368390[_0x3310a8(0xc73)]){var _0x58a8df=_0x368390['LeIhb'](_0x3c90dd,_0x368390['FwJpr'],_0x368390[_0x3310a8(0x6c5)],_0x3310a8(0x377)+_0x3310a8(0xe02)+_0x4d63f4['slice'](-0xe2d+-0xe77+0x263*0xc,-0x529*0x2+-0x2232*0x1+-0x12c*-0x26)[_0x3310a8(0x7bb)](function(_0x1bc55e){var _0x490519=_0x3310a8;return _0x368390[_0x490519(0x8e9)]('0x'+(_0x368390['sNbvO'](_0x1bc55e['o'],-0x2*0xa85+-0x1afe+-0xc02*-0x4)?'?':_0x1bc55e['o'][_0x490519(0x258)+_0x490519(0x5f9)](0x1a81+0x4d2*0x2+-0xc07*0x3))+'\x20('+_0x1bc55e['why'],')');})[_0x3310a8(0xe4b)]('\x20\x20'));_0x150ee2[_0x3310a8(0xe8e)][_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x58a8df);}else{if(_0x3acdb1['el'])_0x1062dd['el']['style'][_0x3310a8(0x6b0)+'ay']=_0x3310a8(0x6e6);return;}}_0x17b8ac[_0x3310a8(0x8f8)](_0x150ee2);var _0x5ecc2e=_0x1aa24c(_0x3310a8(0xd85)+'ngs'),_0xdfa101=_0x3c90dd(_0x3310a8(0x6b4)+'n','sk-bt'+'n','Snaps'+'hot\x20n'+'ow\x20(F'+'9)');_0xdfa101[_0x3310a8(0xc3d)]=_0x368390['BxwZk'],_0xdfa101[_0x3310a8(0xe97)+'ck']=function(){var _0x22faf9=_0x3310a8;_0xf0daa6(_0x368390[_0x22faf9(0x7eb)]);},_0x5ecc2e['body'][_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x3c90dd(_0x368390[_0x3310a8(0xc9b)],_0x368390[_0x3310a8(0x696)],_0x368390['AYkCD'])),_0x5ecc2e[_0x3310a8(0xe8e)]['appen'+'dChil'+'d'](_0xdfa101),_0x17b8ac[_0x3310a8(0x8f8)](_0x5ecc2e);}if(_0x31b64e===_0x368390['awZGB']){var _0x5d2deb=_0x1aa24c(_0x368390[_0x3310a8(0xea2)],_0x2730c7['on']),_0x8e1449=_0x2d274a('Enabl'+'ed');_0x8e1449['appen'+_0x3310a8(0x9bf)+'d'](_0x368390[_0x3310a8(0x707)](_0x38419f,function(){return _0x2730c7['on'];},function(_0x16a1a9){var _0x5c00e4=_0x3310a8;_0x5c00e4(0x62e)!==_0x5c00e4(0x62e)?_0x4cf050(!![]):_0xeb39bd(_0x16a1a9,_0x2730c7['boxes']);})),_0x5d2deb[_0x3310a8(0xe8e)]['appen'+_0x3310a8(0x9bf)+'d'](_0x3c90dd(_0x368390[_0x3310a8(0xc9b)],'sk-md'+'esc','World'+_0x3310a8(0x68a)+'e\x20min'+'imap,'+'\x20top-'+_0x3310a8(0x603)+'.\x20Nee'+_0x3310a8(0x6f3)+'ly\x20po'+_0x3310a8(0xc5d)+_0x3310a8(0x5e2))),_0x5d2deb[_0x3310a8(0xe8e)][_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x8e1449);var _0x3abb3c=_0x368390[_0x3310a8(0x726)](_0x3be1f2,0x21eb+0x1*0x5fc+0x25*-0x113,-0x13ed+-0x1a81+-0x26*-0x13d,0x20fb*-0x1+-0x1d8+-0x253*-0xf,function(){return _0x2730c7['span'];},function(_0x514900){var _0x12078b=_0x3310a8;_0x2730c7[_0x12078b(0xe5f)]=_0x514900;});_0x3abb3c['input']['datas'+'et'][_0x3310a8(0xe69)]='m';var _0x3de76a=_0x2d274a(_0x368390[_0x3310a8(0x9da)],_0x3310a8(0x44b)+_0x3310a8(0x97e)+'s\x20acr'+'oss\x20t'+'he\x20ra'+_0x3310a8(0xac2));_0x3de76a['appen'+'dChil'+'d'](_0x3abb3c),_0x5d2deb['body'][_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x3de76a),_0x17b8ac[_0x3310a8(0x8f8)](_0x5d2deb);var _0x42a59a=_0x368390[_0x3310a8(0x618)](_0x1aa24c,_0x3310a8(0x3f1),_0x2730c7['boxes']),_0x325e69=_0x2d274a(_0x368390['zkVTq']);_0x325e69[_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x38419f(function(){var _0x4cb61d=_0x3310a8;if(_0x4cb61d(0xd1c)!==_0x4f15c2['OlZvR'])return _0x2730c7['boxes'];else _0x4bfa46[_0x4cb61d(0xab4)+_0x4cb61d(0xa15)+'t']=_0x4cb61d(0x51a)+'d';},function(_0x840cd6){var _0xf0626a=_0x3310a8;if(_0x840cd6&&!_0x35d742()){if(_0x4f15c2[_0xf0626a(0x45a)](_0xf0626a(0xc9c),_0x4f15c2[_0xf0626a(0xa42)])){var _0x295b2e=_0x1021a5[_0xf0626a(0x1dd)](-0x7b*0x6+-0x133e+0x1620,0x24d9+0x621+-0x29ce);if(_0x2bf529['index'+'Of'](_0x295b2e)===-(-0xb41+0x1b95+-0x1053)&&_0x5d86f8[_0xf0626a(0xcc0)+'h']<0x27d+-0x134b+0x5ae*0x3)_0x58c527[_0xf0626a(0x8f8)](_0x295b2e);}else{_0x228c6f();return;}}_0x4f15c2['fNaEj'](_0xeb39bd,!![],_0x840cd6);}));var _0x74e5a3=_0x26819b&&_0x26819b[_0x3310a8(0x3fc)+'s'];_0x42a59a[_0x3310a8(0xe8e)][_0x3310a8(0xdc4)+'dChil'+'d'](_0x368390[_0x3310a8(0x498)](_0x3c90dd,_0x368390['FwJpr'],_0x3310a8(0x24b)+'esc',_0x74e5a3&&!_0x74e5a3[_0x3310a8(0x798)+_0x3310a8(0x30c)]?_0x368390['uuMCO']+(_0x74e5a3['why']||'view\x20'+_0x3310a8(0x3fc)+_0x3310a8(0x832)+_0x3310a8(0x635)+'fied')+(_0x3310a8(0x75f)+'ese\x20t'+_0x3310a8(0xe0b)+_0x3310a8(0x4b6)+'are\x20n'+'ot\x20pi'+'tch\x20a'+_0x3310a8(0x78e)+'w.\x20Pr'+_0x3310a8(0xea3)+'9,\x20tu'+'rn\x20ab'+'out\x209'+'0°,\x20p'+'ress\x20'+'F9.'):_0x74e5a3&&!_0x74e5a3['fovSa'+'ne']?_0x368390[_0x3310a8(0x3a9)](_0x368390[_0x3310a8(0x205)]+Math['round'](_0x74e5a3['fov']),_0x368390[_0x3310a8(0xa46)]):_0x368390['NRPWW'])),_0x42a59a['body'][_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x325e69);var _0x24ece3=_0x3be1f2(0x3f*-0x17+0x1cc5+-0x16e0,-0x3d*-0x9d+-0x21f+-0x22c8,0x1*-0x23dd+0x2*0x11df+0x21,function(){var _0x15ac63=_0x3310a8;if(_0x4f15c2[_0x15ac63(0xbfa)](_0x4f15c2[_0x15ac63(0x7f8)],_0x15ac63(0xd41))){var _0x15438=('5|6|2'+_0x15ac63(0x9bb)+_0x15ac63(0x8ac)+'|0')['split']('|'),_0x29443f=-0xac5*0x3+-0x1121*-0x2+-0x1*0x1f3;while(!![]){switch(_0x15438[_0x29443f++]){case'0':return _0x34c028[_0x15ac63(0xcc0)+'h']>0x88*-0x2a+0x1bf9+-0xa1*0x9;case'1':_0xbc626=_0x3a0f1c[_0x15ac63(0xd88)+_0x15ac63(0x917)+_0x15ac63(0xcdd)][_0x15ac63(0x845)+'Wrapp'+'er'];continue;case'2':var _0x4e8eaf=_0x346a45['Unity'+_0x15ac63(0x917)+'dkit'][_0x15ac63(0x79a)+'me'];continue;case'3':_0x1b74cb=_0x5af801||_0x4e8eaf[_0x15ac63(0x1c8)+'ns'][_0x4e8eaf['plugi'+'ns']['lengt'+'h']-(-0x579*-0x6+0x1a05*0x1+-0x3ada)];continue;case'4':if(!_0x5034da||_0x4f15c2['MKBKI'](typeof _0x19f36f['hookP'+'refix'],'funct'+_0x15ac63(0x762)))return![];continue;case'5':if(_0x8037ea['lengt'+'h'])return!![];continue;case'6':if(!_0x283229['Unity'+'WebMo'+'dkit']||!_0x187e06[_0x15ac63(0xd88)+_0x15ac63(0x917)+_0x15ac63(0xcdd)][_0x15ac63(0x79a)+'me'])return![];continue;case'7':if(!_0x4e8eaf[_0x15ac63(0x1c8)+'ns']||!_0x4e8eaf[_0x15ac63(0x1c8)+'ns'][_0x15ac63(0xcc0)+'h'])return![];continue;case'8':for(var _0x226eda=-0x6c*-0x3d+0x1edf+-0x1*0x389b;_0x226eda<_0x281bf3[_0x15ac63(0xcc0)+'h'];_0x226eda++){var _0x3e0a99=_0x57f5fb[_0x226eda];try{var _0x47709f=_0x423d52['hookP'+'refix']({'typeName':_0x3e0a99['type'],'methodName':_0x15ac63(0xca9)+'e','params':[_0x4f15c2['ilUhs'],_0x15ac63(0xbf1)],'returnType':_0x240ba8},_0x453938(_0x3e0a99['type'],_0x3e0a99[_0x15ac63(0xbfc)],_0x3e0a99[_0x15ac63(0xd76)]));_0x31cdc9['push']({'type':_0x3e0a99[_0x15ac63(0xc3d)],'hook':_0x47709f,'keep':_0x3e0a99['keep']});}catch(_0x35afeb){_0x1e1121[_0x15ac63(0x8f8)](_0x3e0a99['type']+':\x20'+_0x5ec1b6(_0x35afeb&&_0x35afeb[_0x15ac63(0x2ab)+'ge']||_0x35afeb)['slice'](0x7*0xc+0xab5+-0xb09,-0x19*0xc5+-0x15*-0xdf+0x2*0xc9));}}continue;}break;}}else return _0x56dd19['fov'];},function(_0x16e436){var _0x2f3953=_0x3310a8;_0x56dd19[_0x2f3953(0x1df)]=_0x16e436,_0x58ad62();});_0x24ece3[_0x3310a8(0xe22)]['datas'+'et']['unit']='°';var _0x4531d6=_0x2d274a(_0x3310a8(0x878)+'\x20of\x20v'+_0x3310a8(0x929),_0x368390['SmOqy']);_0x4531d6[_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x24ece3);var _0x2c0205=_0x2d274a('Reset'+_0x3310a8(0x5ae),_0x3310a8(0x48f)+'ack\x20t'+'o\x2075,'+'\x20offs'+_0x3310a8(0xb1e)+_0x3310a8(0xc87)),_0x12f6f5=_0x3c90dd('butto'+'n',_0x368390['lmqMl'],_0x3310a8(0xd52));_0x12f6f5[_0x3310a8(0xc29)+_0x3310a8(0x457)+_0x3310a8(0xddd)+'r'](_0x368390['BIncw'],function(){var _0x3783e2=_0x3310a8;_0x56dd19['fov']=-0x13a1+-0xb*0x2cf+0x1*0x32d1,_0x58ad62(),_0x368390['KoqiZ'](_0x144483,_0x109cd4[_0x3783e2(0xcdf)]);}),_0x2c0205[_0x3310a8(0xdc4)+'dChil'+'d'](_0x12f6f5),_0x42a59a[_0x3310a8(0xe8e)]['appen'+'dChil'+'d'](_0x4531d6),_0x42a59a[_0x3310a8(0xe8e)][_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x2c0205);var _0x2f5166=_0x26819b&&_0x26819b[_0x3310a8(0x9f1)];_0x42a59a[_0x3310a8(0xe8e)]['appen'+_0x3310a8(0x9bf)+'d'](_0x368390[_0x3310a8(0xba8)](_0x3c90dd,_0x368390[_0x3310a8(0xc9b)],_0x3310a8(0x60d)+'te',_0x368390['DhIVz'](_0x368390[_0x3310a8(0x8b0)](_0x368390['cUvIp'](_0x368390['CGmpw'](_0x3310a8(0xb09)+'\x20',_0x2f5166?_0x2f5166[_0x3310a8(0x85e)+_0x3310a8(0x83d)]?_0x368390['jLboL'](_0x3310a8(0x971)+_0x3310a8(0x2da),_0x2f5166['mouse'+'Look'])+(_0x2f5166[_0x3310a8(0x4de)+'a']?_0x368390[_0x3310a8(0xcff)]+_0x2f5166['camer'+'a']:''):_0x368390['boRIs']:_0x3310a8(0x337)+'useLo'+_0x3310a8(0x8c1)+'t'),_0x74e5a3?'\x0a'+(_0x74e5a3['sourc'+'e']&&_0x368390[_0x3310a8(0x463)](_0x74e5a3['sourc'+'e']['index'+'Of'](_0x368390[_0x3310a8(0x468)]),0x15d*-0x18+0x24a7*0x1+-0x3ef)?_0x368390[_0x3310a8(0x981)](_0x368390['AaPdy'](_0x368390['JUckK']+_0x74e5a3['sourc'+'e'][_0x3310a8(0x1dd)](-0x1*-0x141c+-0x13*0x17e+0x849)+('\x0ayaw\x20'+'\x20\x20'),Math[_0x3310a8(0xbe5)](_0x74e5a3[_0x3310a8(0x7fc)+'w']))+(_0x3310a8(0xd60)+'h\x20'),Math[_0x3310a8(0xbe5)](_0x74e5a3[_0x3310a8(0xde9)+_0x3310a8(0xe3f)])):_0x74e5a3[_0x3310a8(0x8f2)+'e']===_0x3310a8(0x927)+'r'?_0x368390[_0x3310a8(0xe9f)](_0x368390['XgDWV'](_0x368390[_0x3310a8(0x2b7)](_0x368390['ihvtM'](_0x3310a8(0x638)+_0x3310a8(0x4e8)+'Mouse'+'Look\x20'+'gette'+_0x3310a8(0xbe7)+_0x3310a8(0xdf9)+_0x74e5a3['yawAt']+'\x20=\x20',Math[_0x3310a8(0xbe5)](_0x74e5a3[_0x3310a8(0x7fc)+'w'])),_0x368390['qNYEW'])+_0x74e5a3['pitch'+'At'],'\x20=\x20'),Math['round'](_0x74e5a3[_0x3310a8(0xde9)+_0x3310a8(0xe3f)])):'GUESS'+_0x3310a8(0x410)+_0x3310a8(0x724)+_0x3310a8(0x803)+'\x20offs'+'ets\x20+'+_0x3310a8(0x4e0)+'and\x20+'+_0x3310a8(0x441)+_0x3310a8(0xc83)+'ngle\x20'+_0x3310a8(0x89a)+_0x3310a8(0x306)+'\x20not\x20'+'fired'+_0x3310a8(0xc7c)):''),_0x74e5a3&&_0x74e5a3['viewH'+'ooks']&&_0x368390[_0x3310a8(0xa0a)](_0x74e5a3[_0x3310a8(0xd5e)+'ooks'][_0x3310a8(0xa6c)+'ed'],0xacb+0x1cfa+-0x27c5)&&_0x74e5a3[_0x3310a8(0xd5e)+'ooks'][_0x3310a8(0x3d8)]>0x1*0x989+-0x97d+-0xc?_0x368390[_0x3310a8(0xcc5)]('\x0ahook'+_0x3310a8(0x5c2)+'ister'+_0x3310a8(0x739)+'t\x20non'+_0x3310a8(0xdcd)+'lied\x20'+'('+_0x74e5a3['viewH'+'ooks'][_0x3310a8(0xc9f)+_0x3310a8(0xb2f)],'/')+_0x74e5a3[_0x3310a8(0xd5e)+_0x3310a8(0xd9f)][_0x3310a8(0x3d8)]+(_0x3310a8(0xe93)+_0x3310a8(0xaa2)):_0x74e5a3&&_0x74e5a3[_0x3310a8(0xd5e)+_0x3310a8(0xd9f)]&&_0x74e5a3[_0x3310a8(0xd5e)+'ooks'][_0x3310a8(0x3d8)]===-0xc*-0x1a8+0x2*0x4cb+-0x9*0x346?_0x368390[_0x3310a8(0x805)](_0x368390[_0x3310a8(0xc43)],_0x74e5a3[_0x3310a8(0xd5e)+_0x3310a8(0xd9f)][_0x3310a8(0x8d9)+_0x3310a8(0xc84)])+_0x368390['DnWNz']:''),_0x53de1f?_0x3310a8(0x3c5)+'ared\x20'+_0x3310a8(0xb7e)+_0x3310a8(0x1fd)+'ved\x20c'+_0x3310a8(0x43b)+'tion)':''))),_0x17b8ac[_0x3310a8(0x8f8)](_0x42a59a);}if(_0x31b64e==='value'+'s'){var _0xe1e047=[['Build',_0x368390['fWFrs'],_0x26819b?_0x26819b['versi'+'on']:'-'],[_0x368390[_0x3310a8(0xd8f)],_0x3310a8(0xa6c)+_0x3310a8(0xdba)+_0x3310a8(0x50e)+_0x3310a8(0x822),_0x26819b?_0x368390[_0x3310a8(0xeb1)](_0x26819b[_0x3310a8(0x89a)+_0x3310a8(0x7a8)+'ed']+'\x20/\x20',_0x26819b[_0x3310a8(0x89a)+_0x3310a8(0x640)+_0x3310a8(0x822)+_0x3310a8(0xceb)]):'-'],[_0x368390[_0x3310a8(0xb46)],_0x368390[_0x3310a8(0x28d)],_0x26819b&&_0x26819b[_0x3310a8(0x80a)+'emory']&&_0x26819b['wasmM'+_0x3310a8(0xcee)][_0x3310a8(0x1c9)+_0x3310a8(0x25e)]?_0x368390[_0x3310a8(0xb4e)](_0x368390[_0x3310a8(0x8e9)](Math[_0x3310a8(0xbe5)](_0x26819b['wasmM'+_0x3310a8(0xcee)][_0x3310a8(0xaee)]/(-0x1f63ce+0x3b*-0x6551+0x19*0x2d461))+('\x20MB\x20@'+'\x20'),_0x26819b[_0x3310a8(0x80a)+_0x3310a8(0xcee)][_0x3310a8(0x6fb)]),'ms'):'-'],[_0x368390[_0x3310a8(0xd2a)],_0x3310a8(0x4d3)+'nNetw'+'orkSy'+'nc',_0x26819b&&_0x26819b[_0x3310a8(0xc5e)]?_0x368390['EyiSb'](String,_0x26819b[_0x3310a8(0xc5e)]['playe'+_0x3310a8(0x6db)+'t']):'-'],[_0x368390[_0x3310a8(0x975)],_0x368390[_0x3310a8(0xd07)],_0x26819b&&_0x26819b[_0x3310a8(0xc5e)]?String(_0x26819b[_0x3310a8(0xc5e)]['enemy'+_0x3310a8(0xc84)]):'-'],[_0x368390['lAers'],_0x368390['VAUHo'],_0x26819b&&_0x26819b[_0x3310a8(0xc5e)]&&_0x26819b[_0x3310a8(0xc5e)][_0x3310a8(0x4de)+'a']?_0x368390['XnihA'](_0x368390['mVBTq'](_0x26819b['esp'][_0x3310a8(0x4de)+'a'],'\x20(')+_0x26819b[_0x3310a8(0xc5e)]['camer'+_0x3310a8(0x8c2)],')'):'-']];for(_0x30f8fd=0x1b65+0x171d+-0x3282;_0x368390['YVYWH'](_0x30f8fd,_0xe1e047['lengt'+'h']);_0x30f8fd++){var _0x232fc4=_0x2d274a(_0xe1e047[_0x30f8fd][-0x59a+-0x17e1*-0x1+-0x1247]),_0x8b84e3=_0x3c90dd('span',_0x368390[_0x3310a8(0x71c)]);_0x8b84e3['style'][_0x3310a8(0xb2c)+'dth']='0',_0x8b84e3['style']['flex']='1',_0x8b84e3[_0x3310a8(0x98e)][_0x3310a8(0x923)+'lign']=_0x368390['JyOiG'],_0x8b84e3[_0x3310a8(0xab4)+'onten'+'t']=String(_0xe1e047[_0x30f8fd][-0x7a6+-0x1293+0x11*0x18b]),_0x8b84e3[_0x3310a8(0x1ce)+'et']['k']=_0xe1e047[_0x30f8fd][-0x5d*-0x47+0x17*0x11+-0x15*0x14d],_0x232fc4['appen'+'dChil'+'d'](_0x8b84e3);var _0x113dbf=_0x17b8ac[_0x3310a8(0xcc0)+'h']?_0x17b8ac[_0x17b8ac['lengt'+'h']-(-0x1*0xf95+-0x931*0x3+0x3*0xe63)]:null;!_0x113dbf&&(_0x113dbf=_0x1aa24c(_0x368390['weMEQ'],![]),_0x17b8ac['push'](_0x113dbf)),_0x113dbf[_0x3310a8(0xe8e)]['appen'+_0x3310a8(0x9bf)+'d'](_0x232fc4),_0x113dbf['body'][_0x3310a8(0xdd2)+'hild']['sp']=_0x8b84e3;}var _0x42dcf7=_0x1aa24c('Playe'+'r',![]),_0x387449=[[_0x3310a8(0x3be)+_0x3310a8(0x762),_0x26819b&&_0x26819b[_0x3310a8(0xcb6)]&&_0x26819b['local'][_0x3310a8(0xaa3)]?_0x368390[_0x3310a8(0x350)](_0x368390['aVquv'],_0x26819b['local']['posAt']):_0x3310a8(0x76c)+'ntrol'+_0x3310a8(0x88e),_0x26819b&&_0x26819b[_0x3310a8(0xcb6)]&&_0x26819b[_0x3310a8(0xcb6)]['feet']?_0x26819b[_0x3310a8(0xcb6)][_0x3310a8(0x9de)]['map'](function(_0x37be10){return Math['round'](_0x37be10*(0x2*0x125f+-0x794+0xfe*-0x1d))/(-0xdb2+0xa01*-0x1+0x1817);})[_0x3310a8(0xe4b)]('\x20\x20'):'-'],[_0x368390[_0x3310a8(0xcc6)],'+'+_0x30ab1+'m',_0x26819b&&_0x26819b['local']&&_0x26819b['local'][_0x3310a8(0x33c)]?_0x26819b['local'][_0x3310a8(0x33c)][_0x3310a8(0x7bb)](function(_0x5010ff){var _0x11887c=_0x3310a8;return _0x4f15c2[_0x11887c(0x6d5)]!=='MFvZO'?{'ok':![],'error':_0x5bab13(_0x48ae96&&_0x1ce5a4['messa'+'ge']||_0x5c0f10)['slice'](-0x26ac+-0x8df+0x2f8b,-0x1*-0x1278+0x626*0x1+0xb*-0x232)}:_0x4f15c2['HVrMq'](Math[_0x11887c(0xbe5)](_0x5010ff*(-0x59*-0x1c+-0x997+0x3f)),-0x2*0xcda+0x137b*-0x1+-0x1*-0x2d93);})['join']('\x20\x20'):'-'],['Walk\x20'+'speed',_0x368390['EWYzM'],_0x368390[_0x3310a8(0xd83)](_0x167d4f,_0x26819b,_0x368390[_0x3310a8(0xb7f)],-0x3db+0xb3e+-0x753)],[_0x3310a8(0x2e2)+_0x3310a8(0xba1)+'ed','0x40',_0x368390[_0x3310a8(0x473)](_0x167d4f,_0x26819b,_0x3310a8(0x76c)+'ntrol'+'ler',-0x269*-0x6+-0x1*0x1354+-0x83*-0xa)],[_0x3310a8(0xdf4)+_0x3310a8(0xcb8)+'t','0x11C',_0x167d4f(_0x26819b,'FPSco'+'ntrol'+'ler',0x2*-0x5ae+0x5*-0x358+0x1d30)],[_0x3310a8(0xccc)+'h',_0x368390['IGdWP'],_0x167d4f(_0x26819b,_0x3310a8(0xccc)+'hScri'+'pt',-0xe6a+-0xc31+0x1b5b)]];for(_0x30f8fd=-0x1f27+0x206c+0x1*-0x145;_0x30f8fd<_0x387449[_0x3310a8(0xcc0)+'h'];_0x30f8fd++){var _0x52f8d8=_0x2d274a(_0x387449[_0x30f8fd][-0xb5*-0x3+0x1c*-0xc1+-0x1*-0x12fd]),_0x5c883e=_0x368390[_0x3310a8(0x246)](_0x3c90dd,_0x368390[_0x3310a8(0xdc8)],_0x368390[_0x3310a8(0x71c)]);_0x5c883e[_0x3310a8(0x98e)][_0x3310a8(0xb2c)+_0x3310a8(0x21d)]='0',_0x5c883e['style'][_0x3310a8(0x433)]='1',_0x5c883e[_0x3310a8(0x98e)][_0x3310a8(0x923)+'lign']=_0x3310a8(0x603),_0x5c883e['textC'+_0x3310a8(0xa15)+'t']=_0x368390['ycMru'](String,_0x387449[_0x30f8fd][-0x1*0x1423+0x1*0x965+0xac0]),_0x5c883e[_0x3310a8(0x1ce)+'et']['k']=_0x387449[_0x30f8fd][-0x1fad+-0x11*-0x77+0x3*0x7ed],_0x52f8d8[_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x5c883e),_0x42dcf7['body'][_0x3310a8(0xdc4)+'dChil'+'d'](_0x52f8d8),_0x42dcf7[_0x3310a8(0xe8e)]['lastC'+_0x3310a8(0x9f3)]['sp']=_0x5c883e;}_0x17b8ac[_0x3310a8(0x8f8)](_0x42dcf7);}if(_0x368390[_0x3310a8(0xa37)](_0x31b64e,_0x3310a8(0x289))){var _0x28d415=_0x368390[_0x3310a8(0xbe4)](_0x1aa24c,_0x3310a8(0x553)+'ostic'+'s',![]),_0x8bc697=_0x26819b&&_0x26819b[_0x3310a8(0xaf1)+'ngs']&&_0x26819b['warni'+'ngs'][_0x3310a8(0xcc0)+'h']?_0x26819b['warni'+_0x3310a8(0xe64)]['join']('\x0a'):'no\x20wa'+_0x3310a8(0x936)+'s';_0x28d415[_0x3310a8(0xe8e)][_0x3310a8(0xdc4)+'dChil'+'d'](_0x3c90dd(_0x3310a8(0x973),_0x368390['cyOMU'],_0x8bc697)),_0x17b8ac[_0x3310a8(0x8f8)](_0x28d415);var _0x283542=_0x1aa24c(_0x368390['lxbEW'],![]),_0x18164f=_0x368390[_0x3310a8(0xa3a)](_0x3c90dd,_0x3310a8(0x6b4)+'n',_0x3310a8(0x4c0)+'n',_0x368390['SARGq']);_0x18164f[_0x3310a8(0xc3d)]=_0x368390[_0x3310a8(0x202)],_0x18164f[_0x3310a8(0xe97)+'ck']=function(){var _0x52ed85=_0x3310a8,_0x14d3ba={'YTZHP':function(_0x53aeae){return _0x53aeae();}};try{var _0x9e8e5b=_0x175ac7+'\x0a'+JSON[_0x52ed85(0x4c9)+_0x52ed85(0xd94)](_0x26819b,null,-0xfe5*0x1+0x2379+-0x1393)+'\x0a'+_0x2ebb58;if(navigator['clipb'+_0x52ed85(0x77f)]&&navigator[_0x52ed85(0x215)+_0x52ed85(0x77f)][_0x52ed85(0x220)+'Text']){if(_0x52ed85(0x6e9)===_0x52ed85(0xdda))return _0x4f15c2['iZfXv'](_0x4f15c2['iZfXv']('0x',_0x3b08ff['o']<0x85f+0x1319*0x1+-0x494*0x6?'?':_0x523eda['o'][_0x52ed85(0x258)+_0x52ed85(0x5f9)](-0x2*0x77c+-0xce+0xfd6))+'\x20(',_0x27e8f3[_0x52ed85(0xa97)])+')';else navigator[_0x52ed85(0x215)+_0x52ed85(0x77f)]['write'+'Text'](_0x9e8e5b)['then'](function(){var _0x2b7c27=_0x52ed85;_0x18164f[_0x2b7c27(0xab4)+'onten'+'t']=_0x2b7c27(0x51a)+'d';});}else _0x18164f[_0x52ed85(0xab4)+'onten'+'t']=_0x4f15c2[_0x52ed85(0xae8)];}catch(_0x279c8d){if(_0x4f15c2[_0x52ed85(0x531)]('mLUDc',_0x52ed85(0x71a)))return _0x14d3ba['YTZHP'](_0x1282ef);else _0x18164f['textC'+_0x52ed85(0xa15)+'t']=_0x4f15c2[_0x52ed85(0x46f)];}},_0x283542[_0x3310a8(0xe8e)]['appen'+_0x3310a8(0x9bf)+'d'](_0x368390['LeIhb'](_0x3c90dd,_0x368390['FwJpr'],_0x368390['TeTFY'],_0x368390[_0x3310a8(0x51b)])),_0x283542[_0x3310a8(0xe8e)][_0x3310a8(0xdc4)+_0x3310a8(0x9bf)+'d'](_0x18164f),_0x17b8ac['push'](_0x283542);}return _0x17b8ac;}function _0x560625(){if(_0x109cd4['open'])_0xfda9d8(!![]);}function _0x489d8b(){var _0x124544=_0x189e9a;try{if(_0x124544(0xdb0)===_0x368390['fsgXO'])return _0x62f425['sourc'+'e']='Runti'+_0x124544(0x8a9)+'solve'+'Game('+')',_0x22216a;else{var _0x4a1c41=localStorage['getIt'+'em'](_0x597996);if(!_0x4a1c41)return;var _0x42d31c=JSON['parse'](_0x4a1c41);if(_0x42d31c&&_0x368390['aFCvo'](typeof _0x42d31c['x'],'numbe'+'r')&&typeof _0x42d31c['y']===_0x368390['yYSuW'])_0x109cd4['pos']=_0x42d31c;}}catch(_0x28fca6){}}function _0x2c49db(){var _0x24b17f=_0x189e9a,_0xa5bec2={'oFrfa':function(_0xe66ec7,_0x13d822,_0x1cae39){var _0x6986f3=_0x4f94;return _0x368390[_0x6986f3(0x58e)](_0xe66ec7,_0x13d822,_0x1cae39);},'oLuKK':'i32'};try{if(_0x368390[_0x24b17f(0x630)]===_0x368390[_0x24b17f(0xb41)]){var _0x58c392=_0xa5bec2[_0x24b17f(0xda3)](_0x25de9c,_0x5a1d4d+_0x5e28f3(_0x1473ff[_0xd2d22f][0x662+0xa48*-0x2+-0xb*-0x14a],-0x1*-0x17dc+-0x17ab*-0x1+-0x2f77),_0xa5bec2[_0x24b17f(0xb9a)]);if(_0x58c392!==_0x171aeb)_0x2458c4[_0x24b17f(0x5b3)][_0x2ef532[_0x4f14ec][-0x10d8+-0x10d9+0x21b2]]=_0x58c392;}else localStorage['setIt'+'em'](_0x597996,JSON['strin'+_0x24b17f(0xd94)](_0x109cd4['pos']));}catch(_0x3369f2){}}function _0x438b3e(){var _0x186a78=_0x189e9a,_0x27e1f9={'ulNHf':_0x186a78(0x6e6),'YiASr':_0x186a78(0x393),'bEQHy':_0x186a78(0x97b)+_0x186a78(0xe88)+_0x186a78(0xbcb)};if(_0x368390[_0x186a78(0xd37)](_0x368390[_0x186a78(0xb08)],_0x186a78(0xae6))){var _0xce5e8=_0x109cd4[_0x186a78(0x8fd)];if(!_0xce5e8||!_0xce5e8[_0x186a78(0x98e)])return;_0x109cd4[_0x186a78(0x90e)]?(_0xce5e8['style']['left']=_0x368390[_0x186a78(0x5f4)](_0x109cd4[_0x186a78(0x90e)]['x'],'px'),_0xce5e8[_0x186a78(0x98e)][_0x186a78(0xb12)]=_0x368390[_0x186a78(0x826)](_0x109cd4[_0x186a78(0x90e)]['y'],'px'),_0xce5e8[_0x186a78(0x98e)][_0x186a78(0x603)]='auto',_0xce5e8['style'][_0x186a78(0xde6)+'m']='auto'):(_0xce5e8[_0x186a78(0x98e)][_0x186a78(0x6c0)]=_0x368390['ZvTNX'],_0xce5e8[_0x186a78(0x98e)][_0x186a78(0xb12)]=_0x368390[_0x186a78(0xc10)],_0xce5e8[_0x186a78(0x98e)]['right']=_0x186a78(0xa84),_0xce5e8[_0x186a78(0x98e)]['botto'+'m']='24px');}else{if(_0x5821fb)_0x16a75b[_0x186a78(0x98e)][_0x186a78(0x6b0)+'ay']=_0x47fca6?'':_0x27e1f9['ulNHf'];if(_0x80a69a)_0x51885f[_0x186a78(0xab4)+'onten'+'t']=_0x498987?_0x27e1f9['YiASr']:_0x186a78(0x627);_0x5c6da6['style']['width']=_0x2c4c09?_0x27e1f9['bEQHy']:_0x186a78(0x7d4),_0x3e1cbc['style']['backg'+_0x186a78(0xbe5)]=_0x36bee2?'#150c'+'1d':_0x186a78(0xbd0)+_0x186a78(0x3b3)+',29,.'+'9)';}}function _0xfd3f0e(_0x210edb,_0x2bae66){var _0x469f05=_0x189e9a,_0x432fc5={'CJhnE':function(_0x34abcd,_0x53a40c){return _0x34abcd(_0x53a40c);},'diphL':function(_0x5929b8){return _0x5929b8();},'PJHfp':function(_0x18a174,_0x3acd4f){return _0x18a174+_0x3acd4f;},'RJPlX':function(_0x171ffd,_0x4a0934){return _0x171ffd-_0x4a0934;},'NbYwx':function(_0x2ef58a,_0x51a9aa){return _0x2ef58a-_0x51a9aa;},'euyQN':function(_0x1ec921,_0x7f2481){return _0x1ec921===_0x7f2481;},'lbrKd':_0x368390[_0x469f05(0xd05)]};if(_0x368390[_0x469f05(0xadd)]!==_0x368390[_0x469f05(0xadd)])_0x432fc5[_0x469f05(0x530)](_0x54ba9b,![]),_0x432fc5['diphL'](_0x2e6b13);else try{if(_0x469f05(0x2a1)!==_0x469f05(0x4d4)){var _0x2086ec=![],_0x13c455=-0x1*-0xa7+0x242a+-0x24d1,_0x5cfed9=-0xb39+-0x69*0xd+-0x1*-0x108e;_0x2bae66[_0x469f05(0x98e)]['curso'+'r']=_0x368390[_0x469f05(0xa25)],_0x2bae66['style']['touch'+'Actio'+'n']=_0x469f05(0x6e6);var _0x11ae8e=function(_0x9b72fd){var _0x4a555f=_0x469f05;_0x2086ec=!![],_0x2bae66[_0x4a555f(0x98e)][_0x4a555f(0x8bc)+'r']=_0x368390['IgZrr'];var _0x195340={'left':_0x368390['OcTeM'](parseFloat,_0x210edb[_0x4a555f(0x98e)]['left'])||0x10c6+0x81*-0xf+-0x937,'top':parseFloat(_0x210edb[_0x4a555f(0x98e)]['top'])||-0x6e8+0x1ef1*-0x1+0x25d9*0x1};(!_0x210edb['style']['left']||_0x368390[_0x4a555f(0x5cc)](_0x210edb[_0x4a555f(0x98e)][_0x4a555f(0x6c0)],_0x4a555f(0x7d4)))&&(_0x195340[_0x4a555f(0x6c0)]=_0x368390[_0x4a555f(0xb84)](window[_0x4a555f(0xe92)+'Width']||-0x82*0x22+-0x8*0x397+0x16fe*0x2,_0x210edb[_0x4a555f(0x947)+_0x4a555f(0x83b)+'h']||0x17b9+-0x1776+0x229)-(0xc1f+-0x9*-0x403+-0x3022));(!_0x210edb[_0x4a555f(0x98e)]['top']||_0x210edb[_0x4a555f(0x98e)][_0x4a555f(0xb12)]===_0x4a555f(0x7d4))&&(_0x195340[_0x4a555f(0xb12)]=_0x368390[_0x4a555f(0x744)](window[_0x4a555f(0xe92)+'Heigh'+'t']||0x2*0xe4d+0x2702+-0x439c*0x1,_0x210edb[_0x4a555f(0x947)+'tHeig'+'ht']||-0x80a+0xbf*-0x1f+0x20bb)-(0x105c+0x195b+-0x853*0x5));_0x13c455=(_0x9b72fd[_0x4a555f(0x7a1)+'tX']||-0x1*-0x2c2+0x137f+-0x9*0x279)-_0x195340['left'],_0x5cfed9=_0x368390[_0x4a555f(0x22e)](_0x9b72fd[_0x4a555f(0x7a1)+'tY']||-0x101*0x16+-0x19a*0x5+0x1ac*0x12,_0x195340[_0x4a555f(0xb12)]);try{_0x9b72fd['preve'+'ntDef'+'ault']();}catch(_0x27e2cd){}},_0x4eeedd=function(_0x495963){var _0x58fa75=_0x469f05,_0x187a95=(_0x58fa75(0x2bb)+'|1|8|'+'5|2|4'+_0x58fa75(0x883))['split']('|'),_0xd1e553=0x820+-0x9be+0x19e;while(!![]){switch(_0x187a95[_0xd1e553++]){case'0':if(!_0x2086ec)return;continue;case'1':_0x3b4adf=Math[_0x58fa75(0x302)](0x1c49*0x1+-0x1*-0x685+0x1*-0x22c6,Math[_0x58fa75(0x2a8)]((window['inner'+'Width']||-0x1*0x40f+-0x951*-0x2+-0x5b*0x29)-_0x349af5-(0x1*0xc23+0x461*-0x7+-0x128c*-0x1),_0x3b4adf));continue;case'2':_0x210edb['style'][_0x58fa75(0xb12)]=_0x432fc5[_0x58fa75(0x257)](_0x4983b8,'px');continue;case'3':_0x109cd4[_0x58fa75(0x90e)]={'x':_0x3b4adf,'y':_0x4983b8};continue;case'4':_0x210edb[_0x58fa75(0x98e)]['right']=_0x58fa75(0x7d4);continue;case'5':_0x210edb['style'][_0x58fa75(0x6c0)]=_0x432fc5[_0x58fa75(0x257)](_0x3b4adf,'px');continue;case'6':var _0x349af5=_0x210edb['offse'+'tWidt'+'h']||0x1*-0x9e7+0x26bf+-0x1a6c,_0x53c607=_0x210edb['offse'+'tHeig'+'ht']||-0x1*0x1aab+0x1*-0x110c+0x2d47;continue;case'7':var _0x3b4adf=(_0x495963[_0x58fa75(0x7a1)+'tX']||-0xc30+0x1698+-0x9*0x128)-_0x13c455,_0x4983b8=(_0x495963[_0x58fa75(0x7a1)+'tY']||-0xa9c+-0x4bb*0x1+0xf57)-_0x5cfed9;continue;case'8':_0x4983b8=Math[_0x58fa75(0x302)](-0x1a44+0xdb+-0xa7*-0x27,Math['min'](_0x432fc5['RJPlX'](_0x432fc5[_0x58fa75(0xbc3)](window[_0x58fa75(0xe92)+_0x58fa75(0x2ac)+'t']||0xba*0x20+0xd8d+-0x1*0x24cd,_0x53c607),0x215c+-0x1191*-0x2+-0x4476),_0x4983b8));continue;case'9':_0x210edb['style'][_0x58fa75(0xde6)+'m']='auto';continue;}break;}},_0x246e97=function(){var _0x1a65fe=_0x469f05;if('FIeQH'!==_0x1a65fe(0x935))return _0x58e33e[_0x1a65fe(0x1e2)+'d']++,_0x301de0['lastE'+_0x1a65fe(0x9e9)]=_0x5a3825[_0x1a65fe(0x2cc)+'rror']||'no\x20HE'+'APU8\x20'+'-\x20Uni'+_0x1a65fe(0x786)+_0x1a65fe(0x335)+'e\x20not'+_0x1a65fe(0xa93)+_0x1a65fe(0xe47)+_0x1a65fe(0x44f)+'Runti'+_0x1a65fe(0x8a9)+_0x1a65fe(0xc93)+'Game('+_0x1a65fe(0x25a)+_0x1a65fe(0x1e3)+_0x1a65fe(0x5fc)+_0x1a65fe(0xb14)+'al',null;else{if(!_0x2086ec)return;_0x2086ec=![],_0x2bae66[_0x1a65fe(0x98e)][_0x1a65fe(0x8bc)+'r']=_0x368390[_0x1a65fe(0xa25)],_0x368390[_0x1a65fe(0xe77)](_0x2c49db);}};_0x2bae66['addEv'+'entLi'+_0x469f05(0xddd)+'r'](_0x469f05(0x85e)+_0x469f05(0xd6a),_0x11ae8e),window[_0x469f05(0xc29)+_0x469f05(0x457)+'stene'+'r'](_0x469f05(0x85e)+'move',_0x4eeedd),window['addEv'+_0x469f05(0x457)+'stene'+'r'](_0x368390[_0x469f05(0x966)],_0x246e97),_0x2bae66[_0x469f05(0xc29)+_0x469f05(0x457)+_0x469f05(0xddd)+'r'](_0x368390[_0x469f05(0x3f6)],_0x11ae8e,{'passive':![]}),window[_0x469f05(0xc29)+'entLi'+'stene'+'r'](_0x368390['YTkXf'],_0x4eeedd,{'passive':![]}),window[_0x469f05(0xc29)+_0x469f05(0x457)+'stene'+'r']('touch'+_0x469f05(0x88f),_0x246e97);}else{var _0x597522=(_0x469f05(0x4c1)+'|5|3|'+_0x469f05(0x979))['split']('|'),_0x576390=-0x1151+0xbce+0x1*0x583;while(!![]){switch(_0x597522[_0x576390++]){case'0':_0x267029['on']&&!_0x4bbeda&&(_0x7b2dbb===_0x287b89||_0x432fc5[_0x469f05(0xd1a)](_0x5a7959,null)||_0x432fc5[_0x469f05(0x530)](_0xd9c525,_0x41b117)===-0x1f3*0x2+0xa59*-0x3+0x22f2)&&(_0x5387ba=_0x555000);continue;case'1':_0x470b3e['on']=!!_0x48a6b0;continue;case'2':if(_0x229aaf){_0x229aaf['sp']&&(_0x229aaf['sp'][_0x469f05(0xab4)+_0x469f05(0xa15)+'t']=_0x4a05dc['on']?_0x469f05(0x1e6)+_0x469f05(0xce0):_0x432fc5[_0x469f05(0xc30)],_0x229aaf['sp'][_0x469f05(0x98e)][_0x469f05(0xd57)+'round']=_0x1c1a24['on']?_0x29ffde:_0x469f05(0x1d9)+_0x469f05(0x6f2)+'t',_0x229aaf['sp'][_0x469f05(0x98e)]['color']=_0x2c4e3a['on']?'#2a0f'+'1b':_0x469f05(0x391)+'f5');if(_0x229aaf['fx'])_0x229aaf['fx']['value']=_0x432fc5['CJhnE'](_0x1ff99e,_0x19264f[_0x469f05(0xb52)+'r']);if(_0x229aaf['fv'])_0x229aaf['fv'][_0x469f05(0xab4)+_0x469f05(0xa15)+'t']=_0x290825[_0x469f05(0xb52)+'r']['toFix'+'ed'](0xba9+0x3*-0x9e3+0x1201)+'x';}continue;case'3':if(!_0xff5a82['on'])_0x105ba2={};continue;case'4':var _0x4bbeda=_0x2f07dc['on'];continue;case'5':_0x4230f2['facto'+'r']=_0x186d30[_0x469f05(0x2a8)](_0x16fc75[_0x469f05(0x302)],_0x5af943['max'](_0x12596d[_0x469f05(0x2a8)],_0x432fc5[_0x469f05(0x530)](_0x58c7ab,_0x2e367d)||-0x2eb*0x5+-0x2530+0x33c8));continue;case'6':var _0x229aaf=_0x31fc10();continue;}break;}}}catch(_0x139044){}}function _0x42b5d7(){var _0x5e3aa4=_0x189e9a,_0x2de4f9={'IDmxQ':_0x368390[_0x5e3aa4(0x96b)],'eLcnt':function(_0x22fe4d,_0x159789,_0x280903){var _0x43dd5e=_0x5e3aa4;return _0x368390[_0x43dd5e(0x707)](_0x22fe4d,_0x159789,_0x280903);},'lQysA':function(_0x4877cc,_0x5b596e){return _0x4877cc===_0x5b596e;},'aqFrN':_0x5e3aa4(0x4b9),'hylbf':_0x5e3aa4(0x416),'YBAIU':_0x368390[_0x5e3aa4(0x714)],'ksYef':function(_0x443ddd,_0x490fcf){var _0x1a09c8=_0x5e3aa4;return _0x368390[_0x1a09c8(0x4c4)](_0x443ddd,_0x490fcf);},'sofnA':function(_0x147886,_0x19941f){return _0x147886+_0x19941f;},'aVFzn':_0x368390['nQwwB']};if(_0x368390['vBReK'](_0x5e3aa4(0x943),'DTsQf')){if(_0x109cd4['built'])return _0x109cd4[_0x5e3aa4(0x8fd)];try{if(!document['body']||!document[_0x5e3aa4(0xe8e)][_0x5e3aa4(0xdc4)+_0x5e3aa4(0x9bf)+'d'])return null;if(!document['getEl'+'ement'+'ById'](_0x5e3aa4(0x5ca)+_0x5e3aa4(0x432)+'u-css')){var _0x472ff5=document[_0x5e3aa4(0x631)+'eElem'+_0x5e3aa4(0x9c3)](_0x5e3aa4(0x98e));_0x472ff5['id']=_0x368390[_0x5e3aa4(0xbf3)],_0x472ff5[_0x5e3aa4(0xab4)+'onten'+'t']=_0x321149,(document[_0x5e3aa4(0x31f)]||document['docum'+_0x5e3aa4(0x750)+'ement'])[_0x5e3aa4(0xdc4)+'dChil'+'d'](_0x472ff5);}var _0x487d67=_0x3c90dd(_0x368390[_0x5e3aa4(0xc9b)],'mn-pa'+_0x5e3aa4(0xcc4));_0x487d67['id']=_0x368390['XEyXq'];var _0xd331e6=_0x368390[_0x5e3aa4(0x628)](_0x3c90dd,_0x368390[_0x5e3aa4(0xc9b)],_0x368390[_0x5e3aa4(0x6ae)]),_0x4243e6=_0x368390['HwMkM'](_0x3c90dd,_0x5e3aa4(0x973),'mn-lo'+'go',_0x2447f5);_0xd331e6[_0x5e3aa4(0xdc4)+_0x5e3aa4(0x9bf)+'d'](_0x4243e6);var _0x2b0729=_0x3c90dd('div',_0x5e3aa4(0xdec)+'in'),_0xf7bb9c=_0x3c90dd(_0x368390['FwJpr'],_0x5e3aa4(0x3b7)+'p'),_0x127be3=_0x368390['KXQyx'](_0x3c90dd,_0x368390[_0x5e3aa4(0xc9b)],_0x368390[_0x5e3aa4(0xda2)]),_0x3dced7=_0x368390[_0x5e3aa4(0xd63)](_0x3c90dd,'div',_0x5e3aa4(0x482),_0x5e3aa4(0x384)+'a\x20Ski'+'llWar'+'z'),_0x56770b=_0x3c90dd(_0x5e3aa4(0x973),_0x5e3aa4(0x2c1)+'b',_0x368390[_0x5e3aa4(0x732)]);_0x127be3['appen'+'dChil'+'d'](_0x3dced7),_0x127be3[_0x5e3aa4(0xdc4)+'dChil'+'d'](_0x56770b);var _0x3f19e1=_0x3c90dd(_0x368390[_0x5e3aa4(0xc9b)],'mn-cl'+_0x5e3aa4(0x1de),_0x368390['QAOiL']);_0x3f19e1[_0x5e3aa4(0xe97)+'ck']=function(){_0xfda9d8(![]);},_0xf7bb9c['appen'+'dChil'+'d'](_0x127be3),_0xf7bb9c['appen'+'dChil'+'d'](_0x3f19e1);var _0x7d172=_0x368390[_0x5e3aa4(0x29c)](_0x3c90dd,_0x5e3aa4(0x973),'mn-co'+'ls');_0x2b0729['appen'+_0x5e3aa4(0x9bf)+'d'](_0xf7bb9c),_0x2b0729[_0x5e3aa4(0xdc4)+_0x5e3aa4(0x9bf)+'d'](_0x7d172),_0x487d67[_0x5e3aa4(0xdc4)+_0x5e3aa4(0x9bf)+'d'](_0xd331e6),_0x487d67['appen'+_0x5e3aa4(0x9bf)+'d'](_0x2b0729),document['body']['appen'+_0x5e3aa4(0x9bf)+'d'](_0x487d67),_0x109cd4[_0x5e3aa4(0x8fd)]=_0x487d67,_0x109cd4[_0x5e3aa4(0x30a)]=_0x7d172,_0x109cd4['head']=_0x3dced7,_0x109cd4['sub']=_0x56770b,_0x489d8b(),_0x368390['EynDz'](_0x438b3e),_0x368390[_0x5e3aa4(0x383)](_0xfd3f0e,_0x487d67,_0xf7bb9c);var _0x3893f6={};for(var _0x23d564=0x86a+-0x1628+0xdbe;_0x368390['LkJkP'](_0x23d564,_0x1e63dc['lengt'+'h']);_0x23d564++){var _0x4b3a71=_0x1e63dc[_0x23d564],_0x879d3e=_0x368390[_0x5e3aa4(0xa3a)](_0x3c90dd,_0x5e3aa4(0x6b4)+'n','mn-ta'+'b',_0x368390[_0x5e3aa4(0xce2)]('<smal'+'l>',_0x4b3a71[_0x5e3aa4(0xcfc)])+('</sma'+_0x5e3aa4(0xbf2)));_0x879d3e[_0x5e3aa4(0xc3d)]=_0x5e3aa4(0x6b4)+'n',_0x879d3e[_0x5e3aa4(0xa57)]=_0x4b3a71[_0x5e3aa4(0xcfc)],function(_0x2d7b6a){var _0x185c29=_0x5e3aa4;_0x879d3e[_0x185c29(0xe97)+'ck']=function(){_0x144483(_0x2d7b6a);};}(_0x4b3a71['id']),_0x3893f6[_0x4b3a71['id']]=_0x879d3e,_0xd331e6[_0x5e3aa4(0xdc4)+'dChil'+'d'](_0x879d3e);}_0x109cd4['butto'+'ns']=_0x3893f6;var _0x102e15=_0x368390['KVjdV'](_0x3c90dd,_0x5e3aa4(0x973),null,_0x37a9f1);return _0x102e15['id']=_0x368390['zgtqa'],_0x102e15[_0x5e3aa4(0xa57)]=_0x5e3aa4(0x384)+'a\x20Ski'+'llWar'+'z\x20(In'+_0x5e3aa4(0x7f5),_0x102e15[_0x5e3aa4(0x404)+_0x5e3aa4(0xd59)+'er']=function(){var _0x206034=_0x5e3aa4;_0x2de4f9['lQysA'](_0x2de4f9[_0x206034(0x735)],_0x2de4f9[_0x206034(0x9ab)])?_0x140d73['hookP'+_0x206034(0x221)]({'typeName':_0x2de4f9['IDmxQ'],'methodName':_0x116ee6[_0x206034(0xa41)],'params':_0x10c1fe[_0x206034(0xcb9)+'arams'],'returnType':_0x4dd112},_0x2de4f9[_0x206034(0xe89)](_0x21efa7,_0x206034(0x6ea),_0x4959da['name'])):_0x102e15[_0x206034(0x98e)][_0x206034(0x72e)+'ty']='1';},_0x102e15[_0x5e3aa4(0x404)+'selea'+'ve']=function(){var _0x5d2efe=_0x5e3aa4;_0x102e15['style']['opaci'+'ty']=_0x109cd4[_0x5d2efe(0x627)]?'1':'.5';},_0x102e15[_0x5e3aa4(0xe97)+'ck']=function(_0x539ab2){var _0x169395=_0x5e3aa4;if(_0x539ab2&&_0x539ab2['stopP'+_0x169395(0x833)+'ation'])_0x539ab2['stopP'+'ropag'+'ation']();_0xfda9d8(!_0x109cd4[_0x169395(0x627)]);},document['body'][_0x5e3aa4(0xdc4)+'dChil'+'d'](_0x102e15),_0x109cd4[_0x5e3aa4(0x6ec)]=_0x102e15,setInterval(function(){var _0x396a73=_0x5e3aa4;try{if(_0x396a73(0x30d)===_0x396a73(0xc95))try{var _0x46fa0f=_0xd4a595();if(_0x46fa0f['basis'])return!![];var _0x1b2240=_0x5cfc3b();return!!(_0x1b2240&&_0x27ca29[_0x396a73(0x798)+'ified']);}catch(_0x24243e){return![];}else{if(!_0x109cd4['petal'])return;var _0x355419=_0x25e8ee();_0x109cd4['petal'][_0x396a73(0x98e)][_0x396a73(0x72e)+'ty']=_0x109cd4[_0x396a73(0x627)]?'1':_0x355419?'.8':_0x396a73(0x2ee),_0x109cd4['petal'][_0x396a73(0xa57)]=_0x355419?'Sakur'+_0x396a73(0x63f)+'llWar'+_0x396a73(0x1f7)+'sert)':_0x2de4f9[_0x396a73(0x2d9)];}}catch(_0x406686){}},-0x1acd+-0x18c8+0x3651),_0x109cd4['built']=!![],_0x368390['SMPeX'](_0x144483,_0x109cd4['cat']),_0x487d67;}catch(_0x1a1022){return console['warn'](_0x5e3aa4(0x3f8)+'kura]'+_0x5e3aa4(0x937)+_0x5e3aa4(0x6fa)+_0x5e3aa4(0xc58)+'le',_0x368390['WfHFl']('color'+':',_0x327aec),_0x1a1022),null;}}else _0x382b8f=_0x44efae(_0x2de4f9['ksYef'](_0x43a97f,_0xfd8a5c),_0x5e3aa4(0x2f6)),_0x1d03fa=_0x397a27(_0x2de4f9['sofnA'](_0x470d3b,_0x3a67e9),'f32'),_0x182cf3[_0x5e3aa4(0x8f2)+'e']=_0x2de4f9[_0x5e3aa4(0x2e1)];}function _0x144483(_0x55aa7c){var _0x34d799=_0x189e9a;if(_0x368390[_0x34d799(0x6c1)]('aVHuP',_0x368390['topWI'])){_0x109cd4[_0x34d799(0xcdf)]=_0x55aa7c,_0x109cd4['syncs']=[];if(!_0x109cd4[_0x34d799(0x30a)])return;var _0xbc3696=null;for(var _0x2daa00=0x1*-0xde0+0x1*0x2707+-0x1927;_0x368390[_0x34d799(0xa9d)](_0x2daa00,_0x1e63dc[_0x34d799(0xcc0)+'h']);_0x2daa00++)if(_0x368390[_0x34d799(0xc03)](_0x1e63dc[_0x2daa00]['id'],_0x55aa7c))_0xbc3696=_0x1e63dc[_0x2daa00];_0x109cd4[_0x34d799(0x31f)][_0x34d799(0xab4)+_0x34d799(0xa15)+'t']=_0x368390[_0x34d799(0x980)]+(_0xbc3696&&_0xbc3696[_0x34d799(0xcfc)]||'?');for(var _0x326a29 in _0x109cd4[_0x34d799(0x6b4)+'ns']){if(_0x109cd4[_0x34d799(0x6b4)+'ns'][_0x326a29][_0x34d799(0x8cf)+'List'])_0x109cd4[_0x34d799(0x6b4)+'ns'][_0x326a29]['class'+_0x34d799(0x406)]=_0x368390['xYdFY'](_0x368390[_0x34d799(0x90b)],_0x368390['nhGYx'](_0x326a29,_0x55aa7c)?'\x20acti'+'ve':'');}var _0x5e69f8=[];try{_0x5e69f8=_0x34f3ff(_0x55aa7c);}catch(_0x49fef1){if(_0x368390[_0x34d799(0xb01)]!==_0x34d799(0x52c))_0x5e69f8=[];else return _0xd3f699['faile'+'d']++,_0x5b05ba[_0x34d799(0x2cc)+_0x34d799(0x9e9)]=_0x3fe9f2[_0x34d799(0x2cc)+_0x34d799(0x9e9)]||_0x34d799(0x9b8)+_0x34d799(0x668)+'-\x20Uni'+'ty\x20in'+_0x34d799(0x335)+_0x34d799(0x2b2)+_0x34d799(0xa93)+'hable'+'\x20via\x20'+'Runti'+_0x34d799(0x8a9)+_0x34d799(0xc93)+_0x34d799(0x58f)+')\x20or\x20'+'any\x20w'+_0x34d799(0x5fc)+'\x20glob'+'al',_0xc5116f;}while(_0x109cd4['cols']['first'+_0x34d799(0x90a)])_0x109cd4['cols']['remov'+_0x34d799(0xa8d)+'d'](_0x109cd4[_0x34d799(0x30a)][_0x34d799(0xda0)+'Child']);for(var _0x3d3029=-0x471*0x5+-0x37*0x5c+0x29f9;_0x3d3029<_0x5e69f8[_0x34d799(0xcc0)+'h'];_0x3d3029++)_0x109cd4['cols']['appen'+_0x34d799(0x9bf)+'d'](_0x5e69f8[_0x3d3029]);}else try{_0x52382e['textC'+_0x34d799(0xa15)+'t']=_0x368390[_0x34d799(0x9f8)](_0x5175b4,_0x2cd3e3);}catch(_0x8453f6){_0x2a7d12[_0x34d799(0xab4)+_0x34d799(0xa15)+'t']=_0x27c5c8[_0x34d799(0x4c9)+_0x34d799(0xd94)](_0x1407e7,null,0x1*-0x1a8b+-0x6*0x356+0x2e90);}}function _0xfda9d8(_0x1cdae0){var _0x330f34=_0x189e9a;_0x109cd4[_0x330f34(0x627)]=!!_0x1cdae0;var _0x33064a=_0x42b5d7();if(!_0x33064a)return;_0x33064a[_0x330f34(0x8cf)+'Name']=_0x368390['shQoz']+(_0x109cd4[_0x330f34(0x627)]?_0x368390[_0x330f34(0x637)]:'');if(_0x109cd4[_0x330f34(0x6ec)])_0x109cd4['petal'][_0x330f34(0x98e)][_0x330f34(0x72e)+'ty']=_0x109cd4['open']?'1':'.5';if(_0x109cd4['open']){if(_0x368390[_0x330f34(0xe1c)]!=='vccId')_0x24fce7('snaps'+'hot');else{_0x368390[_0x330f34(0xa2c)](_0x144483,_0x109cd4[_0x330f34(0xcdf)]);try{if(_0x368390[_0x330f34(0xd78)]===_0x368390['WJmCf']){var _0x24f17a=_0x467a25[_0x330f34(0x592)+_0x330f34(0x279)+'ById']('sakur'+_0x330f34(0x500)+'v2');if(_0x24f17a)_0x24f17a['remov'+'e']();}else{var _0x1c73c6=window[_0x330f34(0xe92)+_0x330f34(0x2ac)+'t']||0x35f*-0x1+0x1717+-0xc*0x162;if(_0x1c73c6<0x1878+0x4cb*-0x4+0x2e*-0x10)_0x5e1126(![]);}}catch(_0x37f671){}}}}function _0x32315b(){var _0x3504b4=_0x189e9a,_0x107202={'MygcB':_0x3504b4(0x5ca)+'a-sw-'+_0x3504b4(0x2ef)+'ss','YiMXD':_0x368390[_0x3504b4(0x9f0)],'yQgOt':function(_0x5aa764,_0x2bfba0){var _0x525f59=_0x3504b4;return _0x368390[_0x525f59(0x8ec)](_0x5aa764,_0x2bfba0);},'gnKyS':function(_0x4ed8e2,_0x1e6f04){return _0x4ed8e2*_0x1e6f04;},'lyRSc':function(_0x243961,_0x436422){var _0x272d2d=_0x3504b4;return _0x368390[_0x272d2d(0x580)](_0x243961,_0x436422);},'vULDC':function(_0x173a3b,_0x93a7bc){var _0x4d1f4d=_0x3504b4;return _0x368390[_0x4d1f4d(0xeab)](_0x173a3b,_0x93a7bc);},'VDfrI':_0x3504b4(0xa41)};if(_0x3504b4(0xc98)==='pPpnH'){if(!_0x109cd4['open']||!_0x109cd4[_0x3504b4(0xafc)])return;try{if(_0x368390[_0x3504b4(0x505)](_0x368390[_0x3504b4(0xa07)],_0x3504b4(0x6c7))){for(var _0x595e6b=-0x1ac5+-0x18dc+-0x1*-0x33a1;_0x595e6b<_0x109cd4[_0x3504b4(0xca0)]['lengt'+'h'];_0x595e6b++){try{if(_0x368390['RkMqc']===_0x3504b4(0x8d6))_0x109cd4[_0x3504b4(0xca0)][_0x595e6b]();else{var _0x1d4d2a=_0x466ecf['creat'+_0x3504b4(0x490)+_0x3504b4(0x9c3)](_0x3504b4(0x98e));_0x1d4d2a['id']=_0x107202[_0x3504b4(0x5a7)],_0x1d4d2a['textC'+_0x3504b4(0xa15)+'t']=_0x107202[_0x3504b4(0xe6e)],(_0x4094ad['head']||_0x35a9b1['docum'+_0x3504b4(0x750)+'ement'])[_0x3504b4(0xdc4)+'dChil'+'d'](_0x1d4d2a);}}catch(_0x53cffd){}}var _0x401c59=_0x31c788;_0x109cd4[_0x3504b4(0xd06)]['textC'+'onten'+'t']=_0x401c59?_0x368390[_0x3504b4(0xa43)](_0x368390[_0x3504b4(0x99e)](_0x368390[_0x3504b4(0x2f7)](_0x368390[_0x3504b4(0x2f0)]('v'+_0x401c59[_0x3504b4(0x70b)+'on'],_0x3504b4(0x952)+_0x3504b4(0x89a)+'\x20'),_0x401c59[_0x3504b4(0x89a)+'Appli'+'ed'])+'/'+_0x401c59['hooks'+_0x3504b4(0xdaf)],_0x3504b4(0x952)+'playe'+_0x3504b4(0x523))+(_0x401c59[_0x3504b4(0xc5e)]&&_0x401c59[_0x3504b4(0xc5e)]['playe'+_0x3504b4(0x6db)+'t']||0xdf1*0x2+-0xa28+-0x8dd*0x2),_0x3504b4(0x952)+_0x3504b4(0xe8c))+(_0x401c59['wasmM'+_0x3504b4(0xcee)]&&_0x401c59[_0x3504b4(0x80a)+'emory'][_0x3504b4(0x1c9)+'red']?Math['round'](_0x401c59['wasmM'+_0x3504b4(0xcee)][_0x3504b4(0xaee)]/(0x1b*-0x179f+0x8941*-0xe+-0x19ff53*-0x1))+'MB':'-'):'waiti'+'ng\x20fo'+'r\x20the'+'\x20firs'+'t\x20rep'+_0x3504b4(0x6a3);var _0x556894=_0x109cd4['cols'][_0x3504b4(0x494)+_0x3504b4(0xba3)+'torAl'+'l']?_0x109cd4[_0x3504b4(0x30a)][_0x3504b4(0x494)+'Selec'+_0x3504b4(0xe26)+'l'](_0x3504b4(0x77d)+_0x3504b4(0xacf)):[];for(var _0x1b1570=0xd21*-0x2+-0x472+0x1eb4;_0x1b1570<_0x556894[_0x3504b4(0xcc0)+'h'];_0x1b1570++){var _0x51d664=_0x556894[_0x1b1570][_0x3504b4(0x1ce)+'et']['k'],_0x2377a7='';if(_0x51d664===_0x368390['fWFrs'])_0x2377a7=_0x401c59?_0x401c59[_0x3504b4(0x70b)+'on']:'-';else{if(_0x51d664==='appli'+_0x3504b4(0xdba)+'regis'+'tered')_0x2377a7=_0x401c59?_0x368390[_0x3504b4(0x8b6)](_0x401c59['hooks'+_0x3504b4(0x7a8)+'ed'],'\x20/\x20')+_0x401c59['hooks'+_0x3504b4(0x640)+_0x3504b4(0x822)+'AtArm']:'-';else{if(_0x51d664===_0x368390[_0x3504b4(0x28d)])_0x2377a7=_0x401c59&&_0x401c59['wasmM'+_0x3504b4(0xcee)]&&_0x401c59[_0x3504b4(0x80a)+_0x3504b4(0xcee)][_0x3504b4(0x1c9)+_0x3504b4(0x25e)]?Math[_0x3504b4(0xbe5)](_0x401c59[_0x3504b4(0x80a)+_0x3504b4(0xcee)][_0x3504b4(0xaee)]/(0x15df3*0x12+0x1ca48*0x1+-0xa655e))+_0x368390[_0x3504b4(0xeb5)]+_0x401c59[_0x3504b4(0x80a)+_0x3504b4(0xcee)][_0x3504b4(0x6fb)]+'ms':'-';else{if(_0x51d664===_0x3504b4(0x4d3)+_0x3504b4(0x2ca)+'orkSy'+'nc')_0x2377a7=_0x401c59&&_0x401c59['esp']?String(_0x401c59['esp'][_0x3504b4(0x274)+_0x3504b4(0x6db)+'t']):'-';else{if(_0x368390[_0x3504b4(0xc0a)](_0x51d664,'every'+_0x3504b4(0xca7)+'ut\x20yo'+'u'))_0x2377a7=_0x401c59&&_0x401c59[_0x3504b4(0xc5e)]?_0x368390[_0x3504b4(0x424)](String,_0x401c59[_0x3504b4(0xc5e)][_0x3504b4(0xbb5)+_0x3504b4(0xc84)]):'-';else{if(_0x368390[_0x3504b4(0xdd6)](_0x51d664,_0x368390[_0x3504b4(0x1e0)]))_0x2377a7=_0x401c59&&_0x401c59[_0x3504b4(0xc5e)]&&_0x401c59[_0x3504b4(0xc5e)]['camer'+'a']?_0x401c59[_0x3504b4(0xc5e)][_0x3504b4(0x4de)+'a']+'\x20('+_0x401c59['esp'][_0x3504b4(0x4de)+_0x3504b4(0x8c2)]+')':'-';else{if(_0x51d664===_0x368390[_0x3504b4(0x357)])_0x2377a7=_0x401c59&&_0x401c59[_0x3504b4(0xcb6)]&&_0x401c59[_0x3504b4(0xcb6)]['feet']?_0x401c59[_0x3504b4(0xcb6)]['feet'][_0x3504b4(0x7bb)](function(_0x102350){var _0x359e51=_0x3504b4;return _0x368390[_0x359e51(0xd32)](Math['round'](_0x368390[_0x359e51(0xb5a)](_0x102350,-0x18b0+0xc9b+-0x1f*-0x67)),-0x88e+0x140+0x7b2);})[_0x3504b4(0xe4b)]('\x20\x20'):'-';else{if(_0x51d664===_0x368390[_0x3504b4(0xc86)])_0x2377a7=_0x401c59&&_0x401c59[_0x3504b4(0xcb6)]&&_0x401c59[_0x3504b4(0xcb6)][_0x3504b4(0x33c)]?_0x401c59[_0x3504b4(0xcb6)][_0x3504b4(0x33c)][_0x3504b4(0x7bb)](function(_0x297e78){var _0x4d40c8=_0x3504b4;return _0x4d40c8(0x996)!==_0x368390[_0x4d40c8(0x7c1)]?_0x368390[_0x4d40c8(0x602)](Math[_0x4d40c8(0xbe5)](_0x368390[_0x4d40c8(0x1f0)](_0x297e78,0x795*-0x4+-0x4b*-0x7c+-0x59c)),-0x6*-0x4fd+0x1*-0x9f2+0x58*-0x39):_0x107202['yQgOt'](_0x12bb9f[_0x4d40c8(0xbe5)](_0x107202[_0x4d40c8(0x8ff)](_0x507f61,-0x791+0x2416*0x1+-0x1c21)),-0x8b3+-0x35*-0x34+-0x1*0x1ad);})[_0x3504b4(0xe4b)]('\x20\x20'):'-';else{if(_0x3504b4(0xbca)===_0x3504b4(0x887))_0xd0a3d(_0x1e5ce8);else{var _0x301d95=_0x51d664['split']('+');_0x2377a7=_0x167d4f(_0x401c59,_0x301d95[-0x1e56+-0x3*-0x4b3+0x1*0x103d]['index'+'Of'](_0x3504b4(0xccc)+'h')===-0x1*-0xd7a+-0xd0*0x22+0x2*0x713?'Healt'+'hScri'+'pt':_0x368390[_0x3504b4(0xb7f)],parseInt(_0x301d95[0x2*-0x92b+0x1066*0x1+0x1f1],0xd*0x7f+0x1fd1+-0x2634));}}}}}}}}}if(_0x368390[_0x3504b4(0x6c6)](_0x2377a7,_0x556894[_0x1b1570][_0x3504b4(0xab4)+_0x3504b4(0xa15)+'t']))_0x556894[_0x1b1570]['textC'+'onten'+'t']=_0x2377a7;}}else{var _0x586d8a=_0x51efe3['keys'](_0x18492e);for(var _0x4832cf=0x16c4+0xeaa*0x1+-0x12b7*0x2;_0x4832cf<_0x586d8a[_0x3504b4(0xcc0)+'h']&&_0x4832cf<-0x14e9+-0x1*-0x1af1+-0x3b0;_0x4832cf++){var _0x530475=_0x558754[_0x586d8a[_0x4832cf]];if(_0x530475&&_0x107202['lyRSc'](typeof _0x530475,_0x3504b4(0xddb)+'t')&&_0x530475['Modul'+'e']&&_0x530475['Modul'+'e']['HEAPU'+'8']&&_0x530475[_0x3504b4(0xb9e)+'e'][_0x3504b4(0x6e5)+'8'][_0x3504b4(0x26f)+'r'])return _0x3010e6[_0x3504b4(0x8f2)+'e']=_0x107202[_0x3504b4(0x42d)](_0x3504b4(0xdb3)+'w.'+_0x586d8a[_0x4832cf],'.Modu'+'le'),_0x530475;}}}catch(_0x5b5279){}}else _0x3dbd20[_0x3504b4(0x27c)+_0x3504b4(0x2c3)+_0x3504b4(0x2b5)](_0x5e4d20,_0x107202['VDfrI'],{'value':_0x219a52['name'],'configurable':!![]});}function _0x44f38d(){var _0x25884d=_0x189e9a,_0x600237={'OOmBS':'sk-no'+'te','jTSFz':function(_0xb5f4ec,_0x20b769){return _0xb5f4ec+_0x20b769;}};try{var _0x4997e5=_0x368390['iVRvA'](_0x6d3a99);return _0x4997e5&&_0x4997e5[_0x25884d(0x9de)]?_0x4997e5[_0x25884d(0x9de)][-0x1*0x1c87+0x1*0x6d3+0x1*0x15b5]:null;}catch(_0x31c618){if(_0x368390['trNjD'](_0x368390[_0x25884d(0x5a1)],'UNwNG'))return null;else{var _0x23b5bf={'gwkIQ':function(_0x52c39e,_0x2fa55b){return _0x52c39e+_0x2fa55b;}},_0x58c1a2=_0x38d73(_0x25884d(0x973),_0x600237[_0x25884d(0x73f)],_0x600237[_0x25884d(0xc12)]('Refus'+'ed:\x20',_0x8fb68b['slice'](-0x1a51*-0x1+0x1d1*-0xb+-0x32b*0x2,-0x2588+0x80b+0x1d81)[_0x25884d(0x7bb)](function(_0x5a19f1){var _0x495258=_0x25884d;return _0x23b5bf['gwkIQ']('0x'+(_0x5a19f1['o']<-0x1940+0x408+0x1538?'?':_0x5a19f1['o'][_0x495258(0x258)+'ing'](0x1*-0xb77+0x66b*0x2+-0x14f)),'\x20(')+_0x5a19f1[_0x495258(0xa97)]+')';})[_0x25884d(0xe4b)]('\x20\x20')));_0x59355e[_0x25884d(0xe8e)][_0x25884d(0xdc4)+_0x25884d(0x9bf)+'d'](_0x58c1a2);}}}var _0x19ff1f=0x1*-0x149c+-0x1*-0x10b1+0x3ed+0.5,_0x1d557c=0x1*-0xb3a+0x8b0*-0x3+-0x10*-0x255+0.25,_0xd09501={},_0x4fa634=null,_0x30ab1=-0x19*0x156+-0x5*0x3e7+0x209*0x1a+0.8;function _0x1d4944(_0x56b4f2,_0x23a00f,_0x93f306){var _0x1e751e=_0x189e9a,_0x2aad63={'gojXm':function(_0x44603,_0x5028c9){return _0x44603+_0x5028c9;},'FjbRz':_0x1e751e(0x20a)+_0x1e751e(0x84d)+_0x1e751e(0x427)+_0x1e751e(0x510)+_0x1e751e(0x720)+_0x1e751e(0x547)+_0x1e751e(0xc1e)+'s\x20orp'+_0x1e751e(0xc81)+_0x1e751e(0xcd6)+'able\x20'+_0x1e751e(0x1d2)+_0x1e751e(0xbb1)+'r\x20','TQIxi':'Sakur'+_0x1e751e(0xb99)+'K\x20scr'+_0x1e751e(0x340)+_0x1e751e(0x8fc)+'permo'+_0x1e751e(0x8cd)+'and\x20h'+'ard-r'+_0x1e751e(0x86c)+'.'};try{if(_0x368390[_0x1e751e(0xce9)](_0x1e751e(0xb6d),'tnrTu')){var _0x49ca6b=[],_0x4a5b22,_0x1bcb80,_0x5e2b10=_0x23a00f!==null&&_0x368390[_0x1e751e(0x2c9)](_0x23a00f,undefined)&&_0x368390['rAVcN'](isFinite,_0x23a00f),_0x3d5e6f=-0x1b0d+0x13*-0x1b+0x1d0e;for(_0x4a5b22=-0x289*0x2+-0x23c2+0x28d4;_0x4a5b22<_0x56b4f2[_0x1e751e(0xcc0)+'h'];_0x4a5b22++){if(_0x368390[_0x1e751e(0xa1e)](_0x1e751e(0xeba),_0x1e751e(0x96e))){var _0x4a26fd=_0x56b4f2[_0x4a5b22]['v'];if(!_0x4a26fd)continue;var _0x28df65=Math[_0x1e751e(0x9c2)](_0x368390['fnyte'](_0x4a26fd[-0x1ed4+0x185f+0x675]*_0x4a26fd[-0x2423+-0x10*0x148+0x38a3],_0x4a26fd[-0x1c*0x67+0x17bd*0x1+0xc77*-0x1]*_0x4a26fd[0x130f+-0x1*-0x635+-0x1942]));if(_0x368390['YAvTf'](_0x28df65,_0x3d5e6f))_0x3d5e6f=_0x28df65;}else{var _0x488e3f=_0x441fa7['resol'+_0x1e751e(0x893)+'e']();if(_0x488e3f)return _0x4be012[_0x1e751e(0x8f2)+'e']=_0x1e751e(0x1c8)+_0x1e751e(0x4f0)+_0x1e751e(0x604)+'.reso'+_0x1e751e(0xd5f)+'me()',_0x488e3f;}}var _0xd7889e=_0x368390[_0x1e751e(0x39b)](_0x3d5e6f,0xd*-0x24f+-0x1e42+-0x25*-0x1a1+0.25),_0x458e61=0x1034+-0x1a83+-0x1*-0xa4f;typeof console!==_0x1e751e(0xb79)+'ined'&&console[_0x1e751e(0x289)]&&!globalThis[_0x1e751e(0xd97)+'ogged']&&(globalThis[_0x1e751e(0xd97)+'ogged']=0x18e2+-0xb33+-0xdae,console['log']('PP>>\x20'+'n='+_0x56b4f2['lengt'+'h']+_0x368390['AqeEJ']+_0x3d5e6f['toFix'+'ed'](-0x4*-0x436+-0x5fe+0x1*-0xad8)+('\x20floo'+'r=')+_0xd7889e[_0x1e751e(0xd9b)+'ed'](0xc62*-0x2+0x6*-0x117+0x1f50*0x1)+(_0x1e751e(0x8e4)+'n=')+_0x5e2b10+_0x368390['EreZp']+JSON['strin'+_0x1e751e(0xd94)](_0x56b4f2[_0x1e751e(0x1dd)](0x2415*-0x1+0x3da*0x1+-0x25*-0xdf,-0x297+0x390*0x2+-0x1*0x487))));for(_0x4a5b22=-0x1f*-0xfe+0x15a5*-0x1+-0x91d;_0x368390['UttWL'](_0x4a5b22,_0x56b4f2['lengt'+'h']);_0x4a5b22++){var _0xb51d49=_0x56b4f2[_0x4a5b22]['v'];if(!_0xb51d49)continue;if(_0xb51d49[0x2403+0x19da*0x1+-0x149f*0x3]===-0x12e7+-0x1713+-0x18e*-0x1b&&_0xb51d49[-0x727*-0x1+0x1*0x3e1+-0xb07*0x1]===0xe31+-0x1*0x1466+0x635&&_0xb51d49[0x371*-0x1+0x1*-0x1d33+0x20a6]===-0x88c+-0x1*-0x24f5+-0x1c69)continue;var _0x26b3e3=Math['sqrt'](_0x368390[_0x1e751e(0x497)](_0xb51d49[0xbf*0x4+-0x2*0xe09+0x1916],_0xb51d49[0x8f3*-0x1+-0x33*-0x79+-0x794*0x2])+_0xb51d49[-0x1*-0x148f+-0xba3+-0x8ea]*_0xb51d49[-0xb36+0x1*-0x219b+-0xef1*-0x3]);if(_0x368390['wfEmp'](_0x26b3e3,_0xd7889e)){_0x458e61++;continue;}_0x49ca6b['push'](_0x56b4f2[_0x4a5b22]);}if(!_0x49ca6b[_0x1e751e(0xcc0)+'h']){if(_0x368390[_0x1e751e(0x94b)]('AhArs',_0x1e751e(0x53d)))return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x458e61,'ambiguous':![],'reach':0x0,'held':![]};else{var _0x5c2fbd=_0x52dbea();if(_0x5c2fbd&&_0x5c2fbd['el'])_0x5c2fbd['el'][_0x1e751e(0x98e)][_0x1e751e(0x6b0)+'ay']=_0x26ab34['on']?'':_0x368390[_0x1e751e(0x242)];var _0x32a2d6=_0x45b7cc;if(_0x32a2d6&&_0x32a2d6['cv'])_0x32a2d6['cv']['style']['displ'+'ay']=_0x95cfcd['on']&&_0x1c168c[_0x1e751e(0x407)]?'':'none';}}var _0x393504=[];for(_0x4a5b22=0x1f*-0xa4+-0x7*-0x328+0x34*-0xb;_0x368390['NcwYv'](_0x4a5b22,_0x49ca6b[_0x1e751e(0xcc0)+'h']);_0x4a5b22++){var _0x5cc38c=_0x49ca6b[_0x4a5b22]['v'],_0x381c64=-(-0xa1a+-0x21ae+0x2bc9);for(_0x1bcb80=-0x3e6*0x7+0x10*0x22d+0x6*-0x141;_0x368390[_0x1e751e(0x36b)](_0x1bcb80,_0x393504['lengt'+'h']);_0x1bcb80++){var _0x5d967a=_0x393504[_0x1bcb80]['c'][-0xe41*-0x2+-0x2673+0x9f1*0x1]['v'],_0x33f746=_0x368390['xBrzJ'](_0x5cc38c[0x7*-0x4ee+-0x1c1d+0x3e9f],_0x5d967a[-0x1*0x2221+-0xf07*-0x1+0x131a]),_0x1f62cd=_0x5cc38c[-0x425+-0x8*0x31d+0x1d0e]-_0x5d967a[-0x1579+0x16*0x6e+0xc06],_0x18023f=_0x5cc38c[0x108c+0x4ca+-0x8c*0x27]-_0x5d967a[0x18c1+0x20c2+0x1*-0x3981];if(_0x368390[_0x1e751e(0x60b)](_0x368390[_0x1e751e(0x8dd)](_0x33f746,_0x33f746)+_0x368390[_0x1e751e(0x21f)](_0x1f62cd,_0x1f62cd)+_0x18023f*_0x18023f,_0x1d557c)){_0x381c64=_0x1bcb80;break;}}if(_0x368390['oQNEi'](_0x381c64,-(-0xc83*0x2+-0x2680+0x1*0x3f87)))_0x393504[_0x1e751e(0x8f8)]({'c':[_0x49ca6b[_0x4a5b22]]});else _0x393504[_0x381c64]['c']['push'](_0x49ca6b[_0x4a5b22]);}var _0x434041=_0x393504[-0x766*-0x3+0x13d9+-0x2a0b],_0x105c20=-Infinity;for(_0x1bcb80=-0x45a+-0x13*-0x16f+-0x16e3;_0x368390[_0x1e751e(0x587)](_0x1bcb80,_0x393504[_0x1e751e(0xcc0)+'h']);_0x1bcb80++){var _0x46e326=_0x393504[_0x1bcb80]['c'],_0x21c30b=_0x46e326['lengt'+'h']*(-0x20*0x86+0x14d*0x1b+0x7*-0x211);if(_0x5e2b10){if('BpUJI'===_0x1e751e(0x369)){var _0x206f75=Infinity;for(var _0x5e7196=0x93d+0xea6+-0x17e3;_0x5e7196<_0x46e326[_0x1e751e(0xcc0)+'h'];_0x5e7196++){if('ZGpdv'===_0x368390['egfeI']){var _0x21586d=Math['abs'](_0x46e326[_0x5e7196]['v'][0x16a3+0x72*0x49+0xdc9*-0x4]-_0x23a00f);if(_0x21586d<_0x206f75)_0x206f75=_0x21586d;}else _0xe4d587[_0x1e751e(0xaf1)+_0x1e751e(0xe64)][_0x1e751e(0x8f8)](_0x2aad63[_0x1e751e(0xde0)](_0x1e751e(0xe9a)+'ER\x20UW'+_0x1e751e(0x69a)+_0x1e751e(0x2d4)+'OK\x20OV'+_0x1e751e(0xe27)+_0x1e751e(0xa74)+_0x1e751e(0xd88)+_0x1e751e(0x917)+_0x1e751e(0x654)+_0x1e751e(0x48b)+_0x1e751e(0x79a)+'me\x20we'+_0x1e751e(0x8ae)+_0x1e751e(0x2d0)+'\x20',_0x1e751e(0x365)+_0x1e751e(0xe19)+_0x1e751e(0x7be)+'iffer'+'ent\x20i'+'nstan'+'ce,\x20s'+_0x1e751e(0x57f)+_0x1e751e(0x287)+'sking'+'\x20the\x20'+'wrong'+_0x1e751e(0xa1b)+_0x1e751e(0x5d6)+'r\x20')+_0x2aad63[_0x1e751e(0x730)]+_0x2aad63['TQIxi']);}_0x21c30b-=_0x206f75;}else _0x2d65e9['hook'][_0x1e751e(0x62c)+'ed']=![];}else{var _0x4833bd=-0xce0+0x2b7*0x6+-0x36a;for(var _0x3db9c1=0x1b8d+-0x4*0x4e3+-0x801;_0x368390['DZHcO'](_0x3db9c1,_0x46e326[_0x1e751e(0xcc0)+'h']);_0x3db9c1++){var _0x1f6ea6=Math['sqrt'](_0x368390['vYDRv'](_0x368390[_0x1e751e(0xd7c)](_0x46e326[_0x3db9c1]['v'][-0x1893+-0x20b0+0x3943],_0x46e326[_0x3db9c1]['v'][0x8a4*-0x4+0xbeb+-0x1*-0x16a5]),_0x368390[_0x1e751e(0xda6)](_0x46e326[_0x3db9c1]['v'][-0x21*-0x12a+0x5*-0x65+0x1*-0x246f],_0x46e326[_0x3db9c1]['v'][0x33*0x64+-0x1*0xa9+0x35*-0x5d])));if(_0x1f6ea6>_0x4833bd)_0x4833bd=_0x1f6ea6;}_0x21c30b+=_0x4833bd;}_0x21c30b>_0x105c20&&(_0x105c20=_0x21c30b,_0x434041=_0x393504[_0x1bcb80]);}var _0x4e155f=_0x434041['c'][0x3b*-0xa7+-0x1669*0x1+0xc2e*0x5],_0x36f3e4=-(0x83*0x3e+-0x617*0x1+-0xc1*0x22);for(_0x1bcb80=0x1799*0x1+-0x1*0x541+0x24b*-0x8;_0x368390[_0x1e751e(0xca1)](_0x1bcb80,_0x434041['c']['lengt'+'h']);_0x1bcb80++){var _0x366e6f=_0x434041['c'][_0x1bcb80]['v'],_0x3495fe=Math[_0x1e751e(0x9c2)](_0x366e6f[-0x17e5+0x151a+0x5*0x8f]*_0x366e6f[-0x1*0x1bbb+-0x119*-0x3+0x1870]+_0x366e6f[-0xf87*-0x1+0x1f+0x8f*-0x1c]*_0x366e6f[-0x230d+-0xe27*-0x1+0x14e8]);(_0x3495fe>_0x36f3e4||_0x368390[_0x1e751e(0x263)](_0x3495fe,_0x36f3e4)&&_0x366e6f[-0x1*-0x4f5+0x2238+0x1396*-0x2]<_0x4e155f['v'][0xeb3+0x49*0x49+-0x2383])&&(_0x36f3e4=_0x3495fe,_0x4e155f=_0x434041['c'][_0x1bcb80]);}var _0x103574=![];if(_0x93f306&&_0x93f306['o'])for(_0x1bcb80=0x29*-0x2c+-0x913+0x101f*0x1;_0x1bcb80<_0x434041['c'][_0x1e751e(0xcc0)+'h'];_0x1bcb80++){if(_0x368390['ghBGj'](_0x434041['c'][_0x1bcb80]['o'],_0x93f306['o']))continue;if(_0x5e2b10){if(_0x368390['xKdUq'](_0x368390[_0x1e751e(0x570)],_0x1e751e(0xbaf))){var _0x2d2aa3=Math[_0x1e751e(0x2fa)](_0x434041['c'][_0x1bcb80]['v'][0x5c5+0x7*-0x1c6+0x6a6]-_0x23a00f),_0x4bfb67=Infinity;for(var _0x1e0f6d=-0x8e9*0x3+0xcf1*0x3+-0xc18;_0x368390[_0x1e751e(0xc3e)](_0x1e0f6d,_0x434041['c']['lengt'+'h']);_0x1e0f6d++){var _0x1b1187=Math['abs'](_0x434041['c'][_0x1e0f6d]['v'][0x1524+-0x59a*0x1+-0x1*0xf89]-_0x23a00f);if(_0x368390[_0x1e751e(0x8d8)](_0x1b1187,_0x4bfb67))_0x4bfb67=_0x1b1187;}if(_0x2d2aa3>_0x4bfb67+(0xe7b*0x1+-0x703*0x1+-0x778+0.35))break;}else return _0x346f9e['facto'+'r'];}_0x4e155f=_0x434041['c'][_0x1bcb80],_0x36f3e4=Math['sqrt'](_0x368390[_0x1e751e(0xcf5)](_0x4e155f['v'][-0x10b3*0x1+-0x20e6+0x3199]*_0x4e155f['v'][-0x1*0x252d+0x3da+0x2153],_0x4e155f['v'][-0xf92*0x1+-0x424+-0x4ee*-0x4]*_0x4e155f['v'][0xc7+-0x1956+0x1*0x1891])),_0x103574=!![];break;}return{'pos':_0x4e155f['v'],'posAt':_0x4e155f['o'],'candidates':_0x49ca6b[_0x1e751e(0xcc0)+'h'],'cluster':_0x434041['c'][_0x1e751e(0xcc0)+'h'],'groups':_0x393504[_0x1e751e(0xcc0)+'h'],'held':_0x103574,'discarded':_0x458e61,'ambiguous':_0x393504[_0x1e751e(0xcc0)+'h']>-0x4*-0x851+-0x19ba+0x1*-0x789,'reach':_0x36f3e4};}else{var _0x1c2e6f=_0x5d4a8f[_0x3b77cf];_0x42fb20+=_0x1c2e6f[_0x1e751e(0xe3e)]||-0x1*-0x2476+-0xf1c+-0x71e*0x3,_0x4fe742+=(_0x1c2e6f[_0x1e751e(0x338)+'ts']||-0x17*-0x13c+0x135f+-0x1*0x2fc3)+(_0x1c2e6f[_0x1e751e(0x493)+_0x1e751e(0xada)]||0x40f+-0xe6f+0xa60);}}catch(_0x4bbf4f){return console[_0x1e751e(0x289)](_0x368390[_0x1e751e(0x1d8)],_0x4bbf4f['messa'+'ge'],String(_0x4bbf4f[_0x1e751e(0x690)]||'')[_0x1e751e(0x464)]('\x0a')['slice'](0x61f+-0xda7+0x788,0x5*0x497+0x1*0x1107+-0x27f6)['join'](_0x1e751e(0x36c))),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x6d3a99(){var _0x34c9e9=_0x189e9a,_0x58ba7d=_0x3bbae7[_0x34c9e9(0x76c)+_0x34c9e9(0x9d1)+_0x34c9e9(0x88e)];if(!_0x58ba7d||!_0x58ba7d[_0x34c9e9(0xe9d)])return null;var _0x457a38=_0x117247['FPSco'+'ntrol'+'ler']||[],_0x1a3bce=[];for(var _0x178747=-0x12e2*-0x2+-0x153d*0x1+-0x1*0x1087;_0x178747<_0x457a38['lengt'+'h'];_0x178747++){if(_0x368390[_0x34c9e9(0x834)](_0x457a38[_0x178747][-0x255d+-0x1a70+0x1*0x3fce],'v3'))continue;var _0x2ead96=_0x368390['OnLOe'](_0x5244f7,_0x58ba7d['ptr'],_0x457a38[_0x178747][0xe9e+-0x21c4+0x1326],0x4*0x17c+-0x10f5+-0x2c2*-0x4);if(_0x2ead96)_0x1a3bce['push']({'o':_0x368390[_0x34c9e9(0x8b2)]('0x',_0x457a38[_0x178747][0x683*-0x1+0x7*0x449+-0xc*0x1f5][_0x34c9e9(0x258)+_0x34c9e9(0x5f9)](-0x2*-0x63d+0x1*-0x75+-0xbf5)),'v':_0x2ead96});}var _0x31ae09=_0x1d4944(_0x1a3bce,null,_0x4fa634);if(!_0x31ae09[_0x34c9e9(0x90e)])return null;_0x4fa634=_0x31ae09[_0x34c9e9(0xaa3)]?{'o':_0x31ae09['posAt']}:null;var _0x52cedf=_0x31ae09['pos'];return{'ptr':_0x58ba7d['ptr'],'feet':_0x52cedf,'posAt':_0x31ae09[_0x34c9e9(0xaa3)],'candidates':_0x31ae09['candi'+'dates'],'cluster':_0x31ae09['clust'+'er'],'copies':_0x1a3bce['filte'+'r'](function(_0x38a469){return _0x38a469['v'][0x4c*-0x2+-0x1b17+0x1*0x1baf]===_0x52cedf[-0x40d+-0x44d*-0x1+-0x40]&&_0x38a469['v'][0x1*-0x10a1+0x1f57*-0x1+0x2ff9]===_0x52cedf[-0x11b4+0x462*-0x3+0x1edb]&&_0x38a469['v'][-0x16b*0x18+-0xb37*-0x3+0x65]===_0x52cedf[0x9f*0x12+0x6*0x438+-0x247c];})['map'](function(_0x90462b){var _0x506609=_0x34c9e9;return _0x368390['rhzLk'](_0x506609(0xa91),'KnHPO')?_0x90462b['o']:(_0x443974[_0x506609(0xad8)]=_0x2bb052,_0x50a53a['basis']=_0x2a620e(_0xfdfc92),_0x2a8132['ok']=!![],_0x3521d0[_0x506609(0xa97)]='',_0x2f4721['sourc'+'e']=_0x506609(0x4de)+_0x506609(0x7cc)+_0x506609(0xa14)+'m',_0x53dec1);}),'eye':[_0x52cedf[-0x230c*-0x1+0x8eb*0x4+0xf8*-0x49],_0x368390[_0x34c9e9(0x841)](_0x52cedf[-0x1d68+0x1956+0x413],_0x30ab1),_0x52cedf[-0x1f0+0x22bf+-0x20cd]],'reach':_0x31ae09['reach'],'pitch':_0x78d2b7(_0x368390['QhIAI'](_0x58ba7d[_0x34c9e9(0xe9d)],-0x2*-0x505+-0x4f*-0x7a+0x9*-0x524),_0x368390[_0x34c9e9(0xb15)]),'yaw':_0x368390[_0x34c9e9(0x246)](_0x78d2b7,_0x58ba7d['ptr']+(0x2ef*0x3+-0x24cb+0x1*0x1d6e),_0x368390[_0x34c9e9(0xb15)])};}function _0x3be883(){var _0x2dafdf=_0x189e9a,_0x136b3d={'zrrDM':function(_0xf4a55d,_0x42b949){return _0xf4a55d+_0x42b949;}};if(_0x368390['hkidx']('wKwpK',_0x368390[_0x2dafdf(0x836)])){_0xb9c479[_0x2dafdf(0xab4)+_0x2dafdf(0xa15)+'t']=_0x136b3d[_0x2dafdf(0x5ad)]('v',_0x1fce3f[_0x2dafdf(0x70b)+'on']||'?');var _0x4e4c02=_0x4efa3,_0x32a0d3=_0x3281c7[_0x2dafdf(0x70b)+'on']||'';_0x454d14['style'][_0x2dafdf(0x995)]=_0x32a0d3===_0x4e4c02?_0x55da62:'#ff6e'+'74',_0x4e8322[_0x2dafdf(0x98e)][_0x2dafdf(0x68c)+_0x2dafdf(0xd92)+'r']=_0x32a0d3===_0x4e4c02?'rgba('+_0x2dafdf(0xd54)+_0x2dafdf(0x6f5)+_0x2dafdf(0xdb4)+')':'#ff6e'+'74';}else{var _0x2095c3=_0x368390[_0x2dafdf(0x533)](_0x6d3a99),_0x544ba3=[],_0x334742=_0x4326f1[_0x2dafdf(0x4d3)+_0x2dafdf(0x2ca)+'orkSy'+'nc']||{},_0x264eb7=Object[_0x2dafdf(0x8be)](_0x334742);for(var _0x777d18=0xda1*0x1+0x6*0x4e1+-0x2ae7*0x1;_0x368390[_0x2dafdf(0x322)](_0x777d18,_0x264eb7['lengt'+'h'])&&_0x777d18<-0x727+-0x12be+0x1a05;_0x777d18++){if(_0x368390[_0x2dafdf(0x776)](_0x2dafdf(0xa72),_0x368390[_0x2dafdf(0x345)])){var _0x5a9a18=_0x334742[_0x264eb7[_0x777d18]],_0x5cb8c7=[],_0x2ee85a=_0x117247[_0x2dafdf(0x4d3)+_0x2dafdf(0x2ca)+_0x2dafdf(0xa5d)+'nc']||[];for(var _0x3fe94f=-0x340+0x1*0x234f+-0x200f*0x1;_0x3fe94f<_0x2ee85a['lengt'+'h'];_0x3fe94f++){if(_0x2ee85a[_0x3fe94f][-0x1*-0x8be+0x10*0x137+0x1c2d*-0x1]!=='v3')continue;var _0x434f3d=_0x5244f7(_0x5a9a18['ptr'],_0x2ee85a[_0x3fe94f][0x2139+0x4*0x9b1+0x1*-0x47fd],-0x1fb2+-0x3*-0x5d9+0x206*0x7);if(_0x434f3d)_0x5cb8c7[_0x2dafdf(0x8f8)]({'o':_0x368390['rkSvw']('0x',_0x2ee85a[_0x3fe94f][0x942+-0x10fe+0x7bc*0x1][_0x2dafdf(0x258)+_0x2dafdf(0x5f9)](0x78b*-0x5+0x13d+0x248a)),'v':_0x434f3d});}var _0x3d30fb=_0x1d4944(_0x5cb8c7,_0x2095c3?_0x2095c3[_0x2dafdf(0x9de)][-0x1819+0x23+0x17f7]:null,_0xd09501[_0x264eb7[_0x777d18]]);_0xd09501[_0x264eb7[_0x777d18]]=_0x3d30fb['posAt']?{'o':_0x3d30fb['posAt']}:null;var _0x119ef9=_0x3d30fb['pos'];if(!_0x119ef9)continue;var _0x5f31ef={'ptr':_0x5a9a18['ptr'],'x':_0x119ef9[0xe*0xbf+0x1185+0x1bf7*-0x1],'y':_0x119ef9[-0x1626+-0x23e+0x4e1*0x5],'z':_0x119ef9[0x5cf*-0x5+-0x382+-0x683*-0x5],'posAt':_0x3d30fb[_0x2dafdf(0xaa3)],'candidates':_0x3d30fb[_0x2dafdf(0x4d6)+'dates'],'cluster':_0x3d30fb['clust'+'er'],'team':_0x78d2b7(_0x368390['jLboL'](_0x5a9a18[_0x2dafdf(0xe9d)],0x145f*-0x1+-0x3a*-0x8b+-0xac7),_0x2dafdf(0xbf1)),'localFlag':_0x368390[_0x2dafdf(0xeaf)](_0x78d2b7,_0x5a9a18[_0x2dafdf(0xe9d)]+(0x26f*0xb+-0x1b31+0x74*0x2),_0x368390['kgqtG'])};if(_0x2095c3){var _0x372a47=_0x119ef9[-0xf62+0x1633+-0x5*0x15d]-_0x2095c3['feet'][-0x492+-0x19c4+0x1e56],_0x5052a3=_0x119ef9[0x1341+-0x1*0x1c16+0x1*0x8d7]-_0x2095c3[_0x2dafdf(0x9de)][-0xdc6+0xd6f+-0x1*-0x59];_0x5f31ef['d']=Math[_0x2dafdf(0x9c2)](_0x368390['pYfDX'](_0x372a47*_0x372a47,_0x368390[_0x2dafdf(0x6cb)](_0x5052a3,_0x5052a3))),_0x5f31ef[_0x2dafdf(0x821)+'ng']=_0x368390[_0x2dafdf(0x5a3)](_0x368390[_0x2dafdf(0x226)](Math[_0x2dafdf(0xaab)](_0x372a47,_0x5052a3),-0x23f2+0x1*0xc25+0x1881),Math['PI']);}_0x544ba3['push'](_0x5f31ef);}else return _0x333dab+_0x3244e3[_0x451b40]['lengt'+'h'];}return{'me':_0x2095c3,'list':_0x544ba3};}}var _0x317297=null;function _0x13041c(){var _0x2dcb4f=_0x189e9a;if(_0x317297)return _0x317297;try{if(!document[_0x2dcb4f(0xe8e)]||!document['body'][_0x2dcb4f(0xdc4)+_0x2dcb4f(0x9bf)+'d'])return null;var _0x389cf5=document[_0x2dcb4f(0x631)+_0x2dcb4f(0x490)+_0x2dcb4f(0x9c3)](_0x368390[_0x2dcb4f(0xc9b)]);_0x389cf5['id']='sakur'+'a-esp',_0x389cf5['style'][_0x2dcb4f(0x5de)+'xt']=_0x368390[_0x2dcb4f(0xd43)](_0x368390[_0x2dcb4f(0x8b6)]('posit'+'ion:f'+_0x2dcb4f(0x489)+'right'+_0x2dcb4f(0x69b)+_0x2dcb4f(0x8b9)+_0x2dcb4f(0xa7a)+_0x2dcb4f(0xd4d)+_0x2dcb4f(0x382)+_0x2dcb4f(0xa96)+_0x2dcb4f(0x60c)+_0x2dcb4f(0xd02)+_0x2dcb4f(0x5b5)+'nts:n'+_0x2dcb4f(0xb2b),_0x2dcb4f(0xd57)+'round'+_0x2dcb4f(0x32b)+'(21,1'+'2,29,'+_0x2dcb4f(0xa22)+_0x2dcb4f(0x68c)+_0x2dcb4f(0x6e7)+'\x20soli'+'d\x20rgb'+'a(255'+_0x2dcb4f(0xa98)+_0x2dcb4f(0x829)+'4);bo'+_0x2dcb4f(0xe9b)+_0x2dcb4f(0xd27)+_0x2dcb4f(0x9dd)+'x;'),_0x2dcb4f(0x323)+_0x2dcb4f(0x9fb)+'x;fon'+_0x2dcb4f(0x66c)+'x/1.3'+'\x20ui-m'+_0x2dcb4f(0xde2)+'ace,C'+_0x2dcb4f(0xd8b)+_0x2dcb4f(0x2a6)+_0x2dcb4f(0x4f7)+_0x2dcb4f(0x583)+'lor:#'+'bda9c'+'9;')+_0x368390[_0x2dcb4f(0xbd8)],_0x389cf5['inner'+'HTML']=_0x368390[_0x2dcb4f(0x886)]('<canv'+'as\x20id'+'=\x22sak'+_0x2dcb4f(0xdbe)+'sp-cv'+_0x2dcb4f(0x4c5)+'th=\x221'+_0x2dcb4f(0xe84)+'eight'+_0x2dcb4f(0x7e8)+'\x22\x20sty'+'le=\x22d'+_0x2dcb4f(0x61e)+_0x2dcb4f(0x5c8)+_0x2dcb4f(0x9e1)+'/canv'+_0x2dcb4f(0x738),_0x2dcb4f(0x691)+_0x2dcb4f(0xc04)+_0x2dcb4f(0xa80)+_0x2dcb4f(0xbe1)+_0x2dcb4f(0xc4f)+_0x2dcb4f(0x6a4)+_0x2dcb4f(0x626)+_0x2dcb4f(0x59e)+_0x2dcb4f(0x496)+_0x2dcb4f(0xd64)+_0x2dcb4f(0x78f)+'>');var _0xef411a={'cv':{'getContext':function(){return null;}},'el':_0x389cf5};document['body'][_0x2dcb4f(0xdc4)+_0x2dcb4f(0x9bf)+'d'](_0x389cf5),_0x317297={'el':_0x389cf5,'cv':_0x389cf5[_0x2dcb4f(0x494)+'Selec'+_0x2dcb4f(0x702)](_0x2dcb4f(0xb31)+_0x2dcb4f(0xc4c)+'p-cv'),'lg':_0x389cf5['query'+_0x2dcb4f(0xba3)+'tor'](_0x368390[_0x2dcb4f(0x39e)])};if(!_0x317297['cv']||!_0x317297['cv'][_0x2dcb4f(0x946)+_0x2dcb4f(0x6f9)])_0x317297=_0xef411a;return _0x317297;}catch(_0xab1757){return null;}}var _0x4dc121=null;function _0x42696c(){var _0x547d9f=_0x189e9a;if(_0x4dc121)return _0x4dc121;try{if(!document[_0x547d9f(0xe8e)]||!document[_0x547d9f(0xe8e)]['appen'+_0x547d9f(0x9bf)+'d'])return null;var _0x234663=document['creat'+'eElem'+'ent'](_0x547d9f(0x704)+'s');return _0x234663['id']=_0x547d9f(0x5ca)+_0x547d9f(0x67e)+'es',_0x234663['style'][_0x547d9f(0x5de)+'xt']=_0x547d9f(0x3e0)+_0x547d9f(0x47c)+_0x547d9f(0x489)+_0x547d9f(0x4d2)+'0;top'+_0x547d9f(0x76d)+_0x547d9f(0xbdf)+_0x547d9f(0xafa)+_0x547d9f(0xb6e)+_0x547d9f(0xc74)+_0x547d9f(0xd20)+_0x547d9f(0x625)+'s:non'+'e;',document[_0x547d9f(0xe8e)][_0x547d9f(0xdc4)+_0x547d9f(0x9bf)+'d'](_0x234663),_0x4dc121={'cv':_0x234663},_0x4dc121;}catch(_0x44bee8){return null;}}function _0x1fe8d4(_0x160c00){var _0x58dc5c=_0x189e9a;try{var _0x426635=Math[_0x58dc5c(0x302)](0x510+0xac0+-0xfcf,window['inner'+'Width']||document['docum'+_0x58dc5c(0x750)+'ement']['clien'+_0x58dc5c(0x83b)+'h']||-0x2cf*-0x7+0x2f*-0xcc+0x11cb),_0x593474=Math[_0x58dc5c(0x302)](0x1b23+-0x1ef2+0x3d0,window[_0x58dc5c(0xe92)+_0x58dc5c(0x2ac)+'t']||document['docum'+'entEl'+_0x58dc5c(0x279)][_0x58dc5c(0x7a1)+'tHeig'+'ht']||-0x1b7*0x4+-0x11*-0x239+-0xa4f*0x3);return(_0x160c00['cv']['width']!==_0x426635||_0x160c00['cv']['heigh'+'t']!==_0x593474)&&(_0x160c00['cv'][_0x58dc5c(0x52b)]=_0x426635,_0x160c00['cv']['heigh'+'t']=_0x593474),{'w':_0x426635,'h':_0x593474};}catch(_0x561e13){return{'w':0x0,'h':0x0};}}function _0x10d25a(){var _0x51b5cc=_0x189e9a,_0xa40462={'ijavW':function(_0x3d1c59,_0x1e65eb,_0x5a2a72){return _0x3d1c59(_0x1e65eb,_0x5a2a72);},'ylJot':function(_0x23873d){return _0x23873d();},'LPliY':function(_0x179a1c,_0x539de9,_0x5c6850){return _0x179a1c(_0x539de9,_0x5c6850);},'LxhMm':function(_0x2417fe,_0x290286){return _0x2417fe===_0x290286;},'bSTpe':function(_0x46c091,_0x3a0ca7){return _0x46c091<_0x3a0ca7;},'AeZag':function(_0x5565c3,_0x4ac28f){return _0x5565c3===_0x4ac28f;},'UNSyf':function(_0x2aa61a){return _0x2aa61a();},'LXmPH':function(_0x2b4302,_0x213d47){return _0x2b4302===_0x213d47;},'KkreT':_0x368390[_0x51b5cc(0xc51)],'UbhKq':_0x368390[_0x51b5cc(0x916)],'qTXBI':function(_0x13b27c,_0x22cdfa){var _0xbce540=_0x51b5cc;return _0x368390[_0xbce540(0xe09)](_0x13b27c,_0x22cdfa);}},_0x1c98ce={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{if(_0x368390[_0x51b5cc(0x88d)]('YwcLY',_0x368390[_0x51b5cc(0xaf5)]))_0x1c98ce[_0x51b5cc(0x704)+'s']={'w':_0x4dc121&&_0x4dc121['cv']?_0x4dc121['cv']['width']:0x2373+-0x1a*0x153+-0x105,'h':_0x4dc121&&_0x4dc121['cv']?_0x4dc121['cv'][_0x51b5cc(0xcb8)+'t']:-0x15c9+-0x2*0x130c+0x3be1,'innerW':window[_0x51b5cc(0xe92)+'Width'],'innerH':window[_0x51b5cc(0xe92)+_0x51b5cc(0x2ac)+'t'],'dpr':window['devic'+_0x51b5cc(0xb81)+_0x51b5cc(0x4d5)+'o']||-0xe58+0x530+0x929};else{if(!_0x4258fb['on'])_0xa40462[_0x51b5cc(0x6f6)](_0xed29c2,!![],![]);else{if(_0x2806de[_0x51b5cc(0x407)])_0x3a5fc4(![],![]);else{if(_0xa40462['ylJot'](_0x3c3cbc))_0x25809e(!![],!![]);else _0xa40462[_0x51b5cc(0xcb5)](_0xe8fd57,![],![]);}}}}catch(_0x477339){}var _0x20f914=_0x3be883();if(!_0x20f914||!_0x20f914['me'])return _0x1c98ce;var _0x4e0097=_0x1c98ce[_0x51b5cc(0x704)+'s']['w']||0x15*0x1d2+-0x1bbf+-0x693,_0x3f43a2=_0x1c98ce[_0x51b5cc(0x704)+'s']['h']||0x3*0x40e+-0x20bc+0x1a*0xf1,_0x280d99=_0x368390[_0x51b5cc(0xae7)](_0x4e0097,_0x3f43a2),_0x2c1084=Math[_0x51b5cc(0x3d3)](_0x368390['jCbDK'](_0x56dd19['fov']*Math['PI'],0x1a35+0x1614+0x3a9*-0xd)/(-0x1*-0x1349+-0x1*0x181d+0x4d6)),_0x5cf1c1=_0xb89445(),_0x4c9f5d=_0x5cf1c1['basis'];for(var _0x151422=-0x1*0xff3+-0x171c+-0x63*-0x65;_0x368390[_0x51b5cc(0xd79)](_0x151422,_0x20f914[_0x51b5cc(0x44d)]['lengt'+'h'])&&_0x368390['wfEmp'](_0x151422,0xcbc+-0x18c8+0xc14);_0x151422++){var _0x257b87=_0x20f914['list'][_0x151422];if(_0x368390[_0x51b5cc(0x6c6)](typeof _0x257b87['d'],_0x51b5cc(0x93b)+'r')||_0x257b87['d']<-0x1a6b*0x1+-0xf5d+0x29c8+0.5)continue;var _0x58a1b5=_0x3542a2(_0x20f914['me']['eye'],[_0x257b87['x'],_0x257b87['y'],_0x257b87['z']],_0x4e0097,_0x3f43a2);if(!_0x58a1b5)continue;var _0x2b115c=(_0x58a1b5['x']/_0x4e0097-(0x1e*0xe6+-0x7*0x3a6+-0x16a+0.5))*(-0x58b+-0xd78+0x1305),_0x700393=null;if(_0x4c9f5d&&_0x5cf1c1[_0x51b5cc(0x90e)]){if(_0x368390['wAimr']!==_0x51b5cc(0x44c)){var _0x1f420f='';for(var _0x1663d7=0x13*0x57+-0x258f+0x1f1a;_0x1663d7<arguments[_0x51b5cc(0xcc0)+'h'];_0x1663d7++){var _0x47d59d=arguments[_0x1663d7];if(typeof _0x47d59d===_0x51b5cc(0x4c9)+'g')_0x1f420f+=_0x47d59d;else{if(_0x47d59d&&_0x47d59d['messa'+'ge'])_0x1f420f+=_0x47d59d['messa'+'ge'];}}if(_0x1f420f[_0x51b5cc(0xbdf)+'Of'](_0x2285f6)!==-(-0x1d22+-0xc91+-0x2*-0x14da))return _0x41f189[_0x51b5cc(0xd96)](_0x4ce4f6,arguments);if(_0x1f420f['index'+'Of']('Unity'+_0x51b5cc(0x917)+_0x51b5cc(0xcdd))!==-(0x3*-0x999+-0x7e9+0x24b5)){var _0xffb6da=_0x1f420f[_0x51b5cc(0x1dd)](0xa65+0xc4f+-0x1*0x16b4,0x12e9*-0x2+-0x98+0x2796);if(_0xa40462[_0x51b5cc(0x2af)](_0x47fa4d['index'+'Of'](_0xffb6da),-(0xfd1+0xe8*0x5+0x1c*-0xba))&&_0xa40462[_0x51b5cc(0x548)](_0x179017[_0x51b5cc(0xcc0)+'h'],0xaa3+0x1c7*-0xe+0x151*0xb))_0x551544['push'](_0xffb6da);}}else{var _0x5652f6=_0x4c9f5d[_0x51b5cc(0x773)],_0x418c2f=_0x4c9f5d[_0x51b5cc(0x603)],_0x141ea9=_0x368390['kukOG'](_0x257b87['x'],_0x5cf1c1['pos'][-0x23cf+-0x1*-0x3eb+-0x34*-0x9d]),_0x19acb0=_0x257b87['y']-_0x5cf1c1[_0x51b5cc(0x90e)][-0x1425+-0x1d70+0x16*0x241],_0x4a4333=_0x368390[_0x51b5cc(0xaaf)](_0x257b87['z'],_0x5cf1c1['pos'][0x1551+0x91c+0x1e6b*-0x1]),_0x3aa02e=_0x141ea9*_0x5652f6[0x11*0x17e+0x8c5+0x3cb*-0x9]+_0x19acb0*_0x5652f6[0x742*-0x1+0x1*-0x134b+-0x21*-0xce]+_0x368390['zPrim'](_0x4a4333,_0x5652f6[0x25c9+-0x2576+-0x51]),_0x42f2fa=_0x368390[_0x51b5cc(0x790)](_0x141ea9*_0x418c2f[-0x221f+-0x37*-0xa7+-0xe1*0x2],_0x19acb0*_0x418c2f[-0x145e+-0x1*-0x247d+-0x101e])+_0x4a4333*_0x418c2f[0x4a4*0x8+-0xdaf+-0x176f];if(_0x3aa02e>0x167*0xb+-0x1*-0x584+0x1*-0x14f1+0.5)_0x700393=_0x368390['ZCOJI'](_0x42f2fa,_0x3aa02e)/(_0x2c1084*_0x280d99);}}else{if(_0x368390['WeEba'](typeof _0x257b87['beari'+'ng'],_0x368390[_0x51b5cc(0xda8)])){if(_0x51b5cc(0xbc9)===_0x51b5cc(0xbc9))_0x700393=Math['tan'](_0x368390[_0x51b5cc(0xae7)](_0x368390[_0x51b5cc(0xb8a)](_0x257b87['beari'+'ng'],Math['PI']),-0x3*0xc5+-0xf*0x13f+0x15b4))/(_0x2c1084*_0x280d99);else{var _0x490faf=_0x5d7af8[_0x51b5cc(0x20e)];if(!_0x490faf||_0x490faf['__sak'+_0x51b5cc(0x69c)]!==_0xdbec4a)return;try{if(_0xa40462['AeZag'](_0x490faf[_0x51b5cc(0xb9b)],_0x51b5cc(0x8a2))){_0xa40462[_0x51b5cc(0xe1e)](_0x595076)['set']({'host':_0x490faf['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0xa40462['LXmPH'](_0x490faf[_0x51b5cc(0xb9b)],_0x51b5cc(0x83f)+'t'))_0x5f3b89()['set'](_0x490faf[_0x51b5cc(0x83f)+'t']);}catch(_0x5916a1){_0x196b28[_0x51b5cc(0xd9d)](_0xa40462[_0x51b5cc(0xa2a)],_0xa40462[_0x51b5cc(0xcab)]+_0x2b2db6,_0x5916a1);}}}}if(_0x700393===null)continue;if(Math[_0x51b5cc(0x2fa)](_0x700393)>-0x4f9+-0x1*0x14ca+-0x1*-0x19c3+0.8)continue;var _0x4fb4b1=_0x368390['CoLNp'](_0x2b115c,_0x700393);_0x1c98ce[_0x51b5cc(0x93a)]['push']({'d':Math[_0x51b5cc(0xbe5)](_0x257b87['d']),'bearing':Math['round'](_0x257b87[_0x51b5cc(0x821)+'ng']),'at':_0x368390[_0x51b5cc(0x77a)](Math['round'](_0x2b115c*(0x2b*0x76+0x17*0x33+0x21*-0x9f)),0xe2d*0x2+0x1e0b+-0x367d*0x1),'want':_0x368390['stNCt'](Math['round'](_0x368390['pTuFk'](_0x700393,0x2*0x167+0x16fd+-0x15e3)),0x1ce4+0x119c+-0x2a98),'off':Math['round'](_0x368390['uGbUh'](_0x4fb4b1,-0x46+0x2*-0x6e9+0x48*0x40))/(-0x7*-0x4a8+0x1*0x414+-0x12*0x1d2)}),_0x368390[_0x51b5cc(0x544)](Math['abs'](_0x4fb4b1),Math['abs'](_0x1c98ce['worst'+_0x51b5cc(0x7f0)]))&&(_0x368390['LlhUX']!=='mTpKB'?(_0x1c98ce[_0x51b5cc(0xac9)+_0x51b5cc(0x7f0)]=_0x368390['AMWjX'](Math['round'](_0x368390[_0x51b5cc(0xc01)](_0x4fb4b1,0x1ddf+-0x25*-0x83+-0x1*0x2ce6)),-0x204c+-0x7fb*-0x4+-0x112*-0x4),_0x1c98ce[_0x51b5cc(0xac9)+'Beari'+'ng']=Math['round'](_0x257b87[_0x51b5cc(0x821)+'ng'])):_0xe7d7b7['textC'+'onten'+'t']=_0x19158f['strin'+_0x51b5cc(0xd94)](_0x2c7df4,null,0x1f66+-0x1*-0x1b41+-0x3aa6));}if(_0x5cf1c1[_0x51b5cc(0x90e)]&&_0x5cf1c1['basis']&&_0x5cf1c1['fov']){if(_0x368390[_0x51b5cc(0xc35)]!==_0x51b5cc(0x645)){var _0x31c2b6=_0x58a09b[_0x38aa8f],_0x4efdd3=_0x4cdf3f[_0x3d9603];if(_0x31c2b6!==_0x4efdd3)_0x1f72df['push'](_0xa40462[_0x51b5cc(0x9a7)](_0x35cb3f+':\x20'+_0x31c2b6,_0x51b5cc(0xe2b))+_0x4efdd3);}else{var _0x47568e=_0x5cf1c1[_0x51b5cc(0xd5c)][_0x51b5cc(0x773)];if(_0x368390[_0x51b5cc(0xb45)](Math[_0x51b5cc(0x2fa)](_0x47568e[0x259f+0x1*0x1a17+-0x3fb5]),0x23d7+-0x6bb*0x1+-0x1d1c+0.01)){var _0x2da13a=(_0x51b5cc(0xc92)+_0x51b5cc(0x32e))['split']('|'),_0x2da1ba=0x3*-0x48b+0x1326+-0x585;while(!![]){switch(_0x2da13a[_0x2da1ba++]){case'0':if(_0x53c8d3){var _0x5c6126=(0x1189+-0x112*-0xb+-0x1d4f+0.5-_0x53c8d3['y']/_0x1c98ce['canva'+'s']['h'])*(0x1f7a+-0x1889+-0x1*0x6ef),_0x450964=_0x975780/_0x7827e6/_0x442ec8;_0x1c98ce[_0x51b5cc(0x7ed)+'cal']={'got':Math[_0x51b5cc(0xbe5)](_0x5c6126*(-0x356+0x237f+-0x1c41))/(-0x46*-0x89+-0x2*0x397+-0x1a60),'want':Math['round'](_0x450964*(-0x244d+-0x1*-0x2ea+-0x1*-0x254b))/(-0x2ce*0xd+-0x22c7+0x4b25),'off':_0x368390['nChsU'](Math[_0x51b5cc(0xbe5)](_0x368390[_0x51b5cc(0x82f)](_0x5c6126-_0x450964,0x1c8a+0x1cb7+-0x3559*0x1)),-0xd83+0xfdc+0x18f)};}continue;case'1':var _0x7827e6=0x1076+-0xc5e*0x1+0x3*-0x15a,_0x975780=0x487+-0x5*0x7a7+0x21bd;continue;case'2':var _0x6ad3e0=[_0x368390[_0x51b5cc(0x992)](_0x5cf1c1['pos'][-0x6*-0x4ff+-0x1*-0x1b9a+-0x3994],_0x47568e[-0x1*0x26ad+-0x785+0xf66*0x3]*_0x7827e6),_0x368390[_0x51b5cc(0x7f1)](_0x5cf1c1['pos'][0x361*-0xa+0x312*0xb+0x5*0x1]+_0x47568e[-0x1*0x203f+-0x1368+0x33a8]*_0x7827e6,_0x975780),_0x368390['OOBOn'](_0x5cf1c1['pos'][-0x2*0x7cc+0x37a*-0x3+0x88*0x31],_0x368390[_0x51b5cc(0xb86)](_0x47568e[-0x3d1*-0x6+0x10d*-0x1+-0x15d7*0x1],_0x7827e6))];continue;case'3':var _0x53c8d3=_0x3542a2(_0x5cf1c1['pos'],_0x6ad3e0,_0x4e0097,_0x1c98ce['canva'+'s']['h']);continue;case'4':var _0x442ec8=Math[_0x51b5cc(0x3d3)](_0x368390[_0x51b5cc(0x4ac)](_0x5cf1c1[_0x51b5cc(0x1df)],Math['PI'])/(0x1d1*0x5+0x40e*0x1+-0xc6f)/(0x223f*0x1+-0x1af7+0x1*-0x746));continue;}break;}}}}return _0x1c98ce;}var _0x3e3f22=-0x891+0x2cd*0xc+0x5*-0x502+0.75,_0x25d93f=-0x24e*0x10+-0x23e+0x271e+0.25,_0x11e849=0x1*-0x255c+0x3*-0x5d9+0x1*0x36e7+0.42;function _0x1be8cf(_0x1a018c){var _0x46a95a=_0x189e9a,_0xd3c090=_0x4dc121;if(!_0xd3c090)return;var _0x2ea60d=_0xd3c090['cv'][_0x46a95a(0x946)+_0x46a95a(0x6f9)]&&_0xd3c090['cv'][_0x46a95a(0x946)+_0x46a95a(0x6f9)]('2d');if(!_0x2ea60d)return;var _0x36e240=_0x1fe8d4(_0xd3c090);_0x2ea60d[_0x46a95a(0x98f)+_0x46a95a(0x1f4)](0x674+0x20f3+-0x2767,-0x6af+-0x52b+-0x52*-0x25,_0x36e240['w'],_0x36e240['h']);if(!_0x2730c7['boxes']||!_0x1a018c||!_0x1a018c['me'])return;var _0x45ee3b=_0x1a018c['me'],_0x20a4c1=null,_0x280fb8=_0x4326f1[_0x46a95a(0x4d3)+_0x46a95a(0x2ca)+'orkSy'+'nc']||{},_0x138d6a=Object[_0x46a95a(0x8be)](_0x280fb8);for(var _0x110e01=0x24db+-0xed+-0x3fe*0x9;_0x110e01<_0x138d6a['lengt'+'h'];_0x110e01++){var _0x3587c2=_0x368390['UxyGG'](_0x5244f7,_0x280fb8[_0x138d6a[_0x110e01]][_0x46a95a(0xe9d)],0x1132+-0x1447+0x349,-0x129b*-0x2+-0x43*0x38+-0x1*0x168b);if(_0x3587c2&&_0x3587c2[0x4f8+0x208e*0x1+-0x2586]===-0xb*0x2a9+0x23c9*0x1+0xa7*-0xa&&_0x368390[_0x46a95a(0x877)](_0x3587c2[-0xa*0x1c4+-0x2369+0x1*0x3512],-0x9d6+-0x934+-0x985*-0x2)&&_0x3587c2[-0xa60+-0x6cd*-0x3+-0x39*0x2d]===0x1e9e+-0x650*0x2+-0x11fe){_0x20a4c1=_0x368390[_0x46a95a(0x29c)](_0x78d2b7,_0x280fb8[_0x138d6a[_0x110e01]]['ptr']+(0x1470+-0x2090+0xc78),_0x46a95a(0xbf1));break;}}for(var _0x2a0508=-0x19*-0x4c+-0xac*0x28+-0x4dd*-0x4;_0x368390[_0x46a95a(0x1ff)](_0x2a0508,_0x1a018c['list'][_0x46a95a(0xcc0)+'h']);_0x2a0508++){if(_0x368390[_0x46a95a(0xa0d)](_0x46a95a(0xa7c),_0x368390['mqdWK'])){var _0x286fce=_0x1a018c['list'][_0x2a0508],_0x468a6f=_0x368390[_0x46a95a(0xddc)](_0x20a4c1,null)&&_0x286fce['team']===_0x20a4c1,_0x1462b5=_0x368390[_0x46a95a(0xe3b)](_0x3542a2,_0x45ee3b[_0x46a95a(0x33c)],[_0x286fce['x'],_0x286fce['y']-_0x25d93f,_0x286fce['z']],_0x36e240['w'],_0x36e240['h']),_0x35e000=_0x3542a2(_0x45ee3b['eye'],[_0x286fce['x'],_0x286fce['y']+_0x3e3f22,_0x286fce['z']],_0x36e240['w'],_0x36e240['h']);if(_0x368390['qZfCA'](!_0x1462b5,!_0x35e000))continue;var _0x32a82f=Math['abs'](_0x368390['tumla'](_0x35e000['y'],_0x1462b5['y']));if(!_0x368390['tndSK'](_0x32a82f,-0x967+0xc39+0x169*-0x2))continue;var _0x473ab1=Math[_0x46a95a(0x302)](0x25cc+0x1*0xa84+-0x55e*0x9,Math[_0x46a95a(0x2a8)](0x124e+0x196*-0x15+0x1e*0x83,_0x32a82f*_0x11e849));if(_0x368390['pqKXa'](_0x32a82f,0x26d2+0x21*0x10f+-0x1*0x481d))continue;var _0x204937=_0x368390[_0x46a95a(0x944)](_0x1462b5['x']+_0x35e000['x'],0x2065*0x1+-0xbc*0x1a+-0xd4b),_0x98789a=_0x368390['uiToh'](_0x1462b5['y'],_0x35e000['y'])/(0xa*-0x3d9+-0x20d7+0x4753);_0x2ea60d['strok'+_0x46a95a(0x8fa)+'e']=_0x468a6f?_0x46a95a(0xbd0)+_0x46a95a(0x797)+'3,106'+',.9)':_0x368390[_0x46a95a(0x4e7)],_0x2ea60d['lineW'+'idth']=_0x468a6f?-0xa22+-0x1932+0xf*0x25b:-0xff2*0x2+-0x1*-0x26dc+0x63*-0x12,_0x2ea60d['strok'+_0x46a95a(0xc07)](_0x204937-_0x473ab1/(-0x2c3+0x1*-0x17f3+0x1ab8),_0x368390[_0x46a95a(0x7b0)](_0x98789a,_0x32a82f/(0x1*0x1567+-0x1*0x2570+0x100b)),_0x473ab1,_0x32a82f),!_0x468a6f&&(_0x46a95a(0xe0f)!=='vnQFF'?_0x9f17d0[_0x46a95a(0x440)]=![]:(_0x2ea60d[_0x46a95a(0x2cf)+_0x46a95a(0x685)]=_0x46a95a(0xbd0)+_0x46a95a(0xd54)+_0x46a95a(0x515)+'6,.95'+')',_0x2ea60d[_0x46a95a(0x99a)]=_0x46a95a(0x7d1)+'ui-mo'+_0x46a95a(0x4f7)+_0x46a95a(0xdf6)+_0x46a95a(0x8e5)+'s,mon'+_0x46a95a(0x896)+'e',_0x2ea60d[_0x46a95a(0x283)+_0x46a95a(0x688)](Math[_0x46a95a(0xbe5)](_0x286fce['d']||-0x244d+0x506+0x1f47)+'m',_0x204937-_0x473ab1/(0x270a+-0x149f+-0x1269),_0x368390[_0x46a95a(0x2e8)](_0x98789a-_0x368390[_0x46a95a(0x9eb)](_0x32a82f,-0xbdd*0x3+0x238d+-0x3*-0x4),-0x399*-0x3+-0x196e+0xea6))));}else{if(_0x523917['lg'])_0x4ed7c5['lg'][_0x46a95a(0xab4)+_0x46a95a(0xa15)+'t']='';return;}}}function _0x3a28a2(){var _0x427c01=_0x189e9a,_0x5196d7=_0x368390['RfMDV'](_0x13041c);if(!_0x5196d7||!_0x5196d7['cv'])return;try{if(_0x368390[_0x427c01(0x6ff)]('noWHX',_0x368390[_0x427c01(0xaf8)])){var _0x14e6dd=_0x5196d7['cv'][_0x427c01(0x946)+_0x427c01(0x6f9)]&&_0x5196d7['cv'][_0x427c01(0x946)+'ntext']('2d');if(!_0x14e6dd)return;var _0x6fa70e=_0x5196d7['cv']['width'],_0x248b1c=_0x368390[_0x427c01(0xac8)](_0x6fa70e,-0x1366+0x1*0x45e+0xaf*0x16),_0x60529a=_0x368390[_0x427c01(0xd30)](_0x3be883),_0x1c4cfd=_0x60529a['me'];_0x14e6dd[_0x427c01(0x98f)+'Rect'](-0x2*0x1135+-0x961*-0x2+-0x29c*-0x6,0x1*-0x1943+0x1e88+-0x545,_0x6fa70e,_0x6fa70e),_0x14e6dd[_0x427c01(0xde4)+_0x427c01(0x8fa)+'e']=_0x368390[_0x427c01(0x982)],_0x14e6dd['lineW'+_0x427c01(0x56d)]=0x1b62*-0x1+0x1615+0x2*0x2a7;for(var _0x4fdedf=0x5db*-0x6+0x372+-0x13*-0x1ab;_0x368390[_0x427c01(0x60b)](_0x4fdedf,-0x21e+-0x1180+0x13a1);_0x4fdedf++){_0x14e6dd[_0x427c01(0x517)+_0x427c01(0x974)](),_0x14e6dd['arc'](_0x248b1c,_0x248b1c,_0x368390[_0x427c01(0x47e)](_0x368390[_0x427c01(0x47b)](_0x368390[_0x427c01(0xe14)](_0x248b1c,-0xa99+-0x48e+0xf2b),_0x4fdedf),0x33e+-0xfe9+0x6*0x21d),0x24f5*-0x1+0x1*-0x149+0x131f*0x2,_0x368390['hHcog'](Math['PI'],0xa8d+0xac6+-0x33*0x6b)),_0x14e6dd[_0x427c01(0xde4)+'e']();}_0x14e6dd['begin'+'Path'](),_0x14e6dd[_0x427c01(0xd55)+'o'](-0x9a1+0x2*0x21e+0x569,_0x248b1c),_0x14e6dd[_0x427c01(0x6ed)+'o'](_0x6fa70e-(0x1*0x21d0+-0x20b4+0x5*-0x38),_0x248b1c),_0x14e6dd['moveT'+'o'](_0x248b1c,0x167*0x7+-0x20a6+0x16d9),_0x14e6dd['lineT'+'o'](_0x248b1c,_0x6fa70e-(0xc82+0xecf*-0x1+0x251*0x1)),_0x14e6dd[_0x427c01(0xde4)+'e']();if(!_0x1c4cfd){if(_0x5196d7['lg'])_0x5196d7['lg'][_0x427c01(0xab4)+'onten'+'t']='';return;}var _0x2bb89a=(_0x248b1c-(0x1*0x1d71+0x851+0x54*-0x73))/_0x2730c7['span'],_0xb5adcb=null,_0x24f337=_0x4326f1['Photo'+_0x427c01(0x2ca)+_0x427c01(0xa5d)+'nc']||{},_0x34bd93=Object[_0x427c01(0x8be)](_0x24f337);for(var _0x4bbd82=0x21b7+0x15a*0x1+-0x2311;_0x4bbd82<_0x34bd93['lengt'+'h'];_0x4bbd82++){var _0x3e0e6a=_0x5244f7(_0x24f337[_0x34bd93[_0x4bbd82]]['ptr'],-0x99*-0x3b+0x1e6c+-0x417b,0x19a7+-0x1b2a+0x6*0x41);if(_0x3e0e6a&&_0x3e0e6a[-0x63d*-0x3+0x3d*0x35+-0x1f58]===-0x1bd0+0x1dee*0x1+0x10f*-0x2&&_0x368390[_0x427c01(0x505)](_0x3e0e6a[-0x190+-0x1cc8+0x1e59],-0x12d3*-0x1+-0x657+-0xc7c)&&_0x3e0e6a[-0x22bc+-0xbf*0xa+0x2a34]===-0x305*0x1+-0x1f9*-0x5+-0x6d8){_0xb5adcb=_0x78d2b7(_0x368390['skcot'](_0x24f337[_0x34bd93[_0x4bbd82]][_0x427c01(0xe9d)],-0x72*0x6+0x1b64*0x1+-0x68*0x3c),'i32');break;}}var _0x2302f7=-0xd*0x1d9+-0x1*0x1ff6+0x37fb;for(var _0x2234a4=0x17*-0x81+0x39b+0x3fe*0x2;_0x2234a4<_0x60529a['list'][_0x427c01(0xcc0)+'h'];_0x2234a4++){var _0x512e00=(_0x427c01(0xbc6)+_0x427c01(0x68b)+_0x427c01(0x818)+_0x427c01(0x665)+'|4')[_0x427c01(0x464)]('|'),_0x44251b=0x1ae2+-0x832*0x1+-0x12b0;while(!![]){switch(_0x512e00[_0x44251b++]){case'0':var _0x56b884=Math['sqrt'](_0x368390['dlvCp'](_0xf6c6dd*_0xf6c6dd,_0x16c983*_0x16c983));continue;case'1':_0x14e6dd[_0x427c01(0x1fe)](_0x51e8c5,_0x1322d1,_0x58223f?-0x1*-0xacc+-0x2*0x53d+-0x4*0x14:-0x26b1+0x22cf+0x1*0x3e5+0.20000000000000018,0xe93+0x22*0x71+-0x1d95,_0x368390[_0x427c01(0xad6)](Math['PI'],-0x3*0x17+-0x1a7d+0x1ac4));continue;case'2':var _0x58223f=_0xb5adcb!==null&&_0x363ede[_0x427c01(0x49e)]===_0xb5adcb;continue;case'3':_0x14e6dd[_0x427c01(0x517)+'Path']();continue;case'4':_0x2302f7++;continue;case'5':var _0x363ede=_0x60529a['list'][_0x2234a4];continue;case'6':var _0xf6c6dd=_0x368390['sLlFH'](_0x363ede['x'],_0x1c4cfd[_0x427c01(0x9de)][-0x6c4*-0x2+-0x19*-0x15b+-0x2f6b])*_0x2bb89a,_0x16c983=(_0x363ede['z']-_0x1c4cfd['feet'][-0x421+0x2603+-0x878*0x4])*_0x2bb89a;continue;case'7':_0x14e6dd[_0x427c01(0x2cf)+_0x427c01(0x685)]=_0x58223f?_0x427c01(0x8f4)+'6a':_0x368390[_0x427c01(0xbc8)];continue;case'8':_0x368390[_0x427c01(0x6a9)](_0x56b884,_0x368390['tumla'](_0x248b1c,0x156c+-0x131a+-0xc4*0x3))?(_0x51e8c5=_0x368390[_0x427c01(0xe9f)](_0x248b1c,_0xf6c6dd/_0x56b884*(_0x248b1c-(0x1a*-0xe3+-0x1267+0x297b))),_0x1322d1=_0x248b1c+_0x368390[_0x427c01(0x5d8)](_0x16c983/_0x56b884,_0x368390[_0x427c01(0x2bd)](_0x248b1c,0x1059+-0x2470+0x141d))):(_0x51e8c5=_0x368390['xqUVX'](_0x248b1c,_0xf6c6dd),_0x1322d1=_0x248b1c+_0x16c983);continue;case'9':var _0x51e8c5=_0x248b1c,_0x1322d1=_0x248b1c;continue;case'10':_0x14e6dd[_0x427c01(0xbbe)]();continue;}break;}}_0x14e6dd[_0x427c01(0x2cf)+_0x427c01(0x685)]=_0x368390['bBnhP'],_0x14e6dd[_0x427c01(0x517)+'Path'](),_0x14e6dd['arc'](_0x248b1c,_0x248b1c,-0x2*0x12e1+0x2517+-0xae*-0x1,0x1f3f+0x1*0xb5+0x5*-0x664,_0x368390['sunXl'](Math['PI'],0x1*0x38b+0x1*-0xe9+0x54*-0x8)),_0x14e6dd['fill'](),_0x5196d7['lg']&&(_0x5196d7['lg'][_0x427c01(0xab4)+'onten'+'t']=_0x368390['KLpKz'](_0x368390[_0x427c01(0x3f3)](_0x368390[_0x427c01(0x78c)],_0x2302f7)+'\x20·\x20',Math['round'](_0x2730c7[_0x427c01(0xe5f)]))+'m'+(_0x2730c7[_0x427c01(0x407)]?_0x368390[_0x427c01(0xc7a)](_0x427c01(0x5ac)+'v\x20',Math[_0x427c01(0xbe5)](_0x56dd19[_0x427c01(0x1df)]))+'°':'')+(_0x368390[_0x427c01(0x1c0)](_0xb5adcb,null)?_0x368390[_0x427c01(0x767)](_0x368390[_0x427c01(0xd48)],_0xb5adcb):''));}else return _0x196232['error'+'s'][_0x427c01(0x8f8)](_0x368390['dbOBv']),-0x38d*-0xb+0xc9+-0x27d8;}catch(_0x6bddfa){}}function _0x25e8ee(){var _0x2bf4a7=_0x189e9a,_0x166237=_0x4326f1[_0x2bf4a7(0x4d3)+_0x2bf4a7(0x2ca)+'orkSy'+'nc']||{};if(!Object[_0x2bf4a7(0x8be)](_0x166237)['lengt'+'h'])return![];return!!_0x368390['nVvPc'](_0x6d3a99);}function _0x5e1126(_0x2eaef){var _0x4e8398=_0x189e9a;try{if(_0x368390[_0x4e8398(0xaed)]==='ryxVp'){var _0x24cb5f=_0x317297;if(_0x24cb5f&&_0x24cb5f['el'])_0x24cb5f['el'][_0x4e8398(0x98e)][_0x4e8398(0x6b0)+'ay']=_0x2eaef?'':'none';var _0x1c96d3=_0x4dc121;if(_0x1c96d3&&_0x1c96d3['cv'])_0x1c96d3['cv'][_0x4e8398(0x98e)][_0x4e8398(0x6b0)+'ay']=_0x2eaef?'':_0x368390[_0x4e8398(0x242)];}else _0x4d7460();}catch(_0x3c2fd3){}}var _0x276332=-0x1*0x2595+-0x10ec+0x3681,_0x3a7428=-0x17de+0x3*-0x10c+0xd81*0x2;function _0x87d624(_0x2e3fb8){var _0x1e49af=_0x189e9a;typeof requestAnimationFrame===_0x1e49af(0x550)+'ion'?'mrSqf'!=='tMcHS'?_0x276332=_0x368390[_0x1e49af(0xc0f)](requestAnimationFrame,_0x5e729b):(_0x43fb66=_0x54b4be,_0x466494=_0x10eab6[_0x1e49af(0x3b9)]()-_0x1237b0):_0x3a7428=setTimeout(_0x5e729b,_0x368390['qZfCA'](_0x2e3fb8,-0xa93*-0x3+0x240b+0x2*-0x21c9));}function _0x5e729b(){var _0x79ba73=_0x189e9a;if(_0x79ba73(0x4ba)!=='wvzTK'){_0x1788cb['on']=!!_0xa073d0,_0x36adfe[_0x79ba73(0x407)]=!!_0x127e8d,_0x368390['SKzOP'](_0x267a90);try{var _0xffaab1=_0x368390[_0x79ba73(0x54c)](_0x2f03db);if(_0xffaab1&&_0xffaab1['el'])_0xffaab1['el'][_0x79ba73(0x98e)][_0x79ba73(0x6b0)+'ay']=_0x33330c['on']?'':'none';var _0x1df8e0=_0x3241be;if(_0x1df8e0&&_0x1df8e0['cv'])_0x1df8e0['cv']['style'][_0x79ba73(0x6b0)+'ay']=_0x1536f1['on']&&_0x36d716['boxes']?'':_0x79ba73(0x6e6);}catch(_0x301049){}}else{_0x276332=0x24*-0x62+-0x1*-0xbdd+0x1eb;if(!_0x2730c7['on']||!_0x25e8ee()){_0x368390[_0x79ba73(0x7a2)](_0x5e1126,![]),_0x368390[_0x79ba73(0x9f8)](_0x87d624,0x2*-0x5b1+-0x1c9*0x1+0xe57);return;}_0x5e1126(!![]),_0x228c6f(),_0x13041c();if(_0x2730c7['boxes'])_0x368390[_0x79ba73(0xd30)](_0x42696c);var _0x31ad40=null;try{_0x368390[_0x79ba73(0x533)](_0xdc26e);}catch(_0x100464){}try{_0x31ad40=_0x368390[_0x79ba73(0xe77)](_0x3be883);}catch(_0x3881b1){}try{if(_0x79ba73(0xdd9)==='vVSlW')_0x368390[_0x79ba73(0xd30)](_0x3a28a2);else return _0x11d25f&&_0x1c9aa8[_0x79ba73(0x26f)+'r']?_0x1facdd[_0x79ba73(0x26f)+'r'][_0x79ba73(0x409)+_0x79ba73(0x23a)]:0x153d*0x1+0x2647+-0x3b84;}catch(_0x4c53bc){}try{if(_0x368390[_0x79ba73(0x7b8)](_0x368390[_0x79ba73(0x6a1)],_0x79ba73(0x491)))_0x368390[_0x79ba73(0x424)](_0x1be8cf,_0x31ad40);else{if(!_0x766140[_0x5a43e7])_0x535dae[_0x2568c6]={'ptr':_0x2562cd,'kind':_0x200fd5,'firstSeen':_0x3e72aa[_0x79ba73(0x3b9)](),'hits':0x0};_0x3e8127[_0x34af7f][_0x79ba73(0xe3e)]++;}}catch(_0x1e2345){}_0x87d624(-0x1eb*-0x1+0xdd1+0x3ef*-0x4);}}function _0x43078a(){var _0x83f298=_0x189e9a,_0x560687={'JmRDM':function(_0x1116b0,_0x2b0999){var _0x66a1e3=_0x4f94;return _0x368390[_0x66a1e3(0xaeb)](_0x1116b0,_0x2b0999);},'UTAec':function(_0x59959d,_0x5d202a){var _0x2d1946=_0x4f94;return _0x368390[_0x2d1946(0xacd)](_0x59959d,_0x5d202a);},'ctALU':function(_0x74080d,_0x6f9be5){return _0x74080d!==_0x6f9be5;},'gveTZ':_0x368390[_0x83f298(0x5b0)],'vCLUq':function(_0x110734){var _0x37ea3a=_0x83f298;return _0x368390[_0x37ea3a(0x4b1)](_0x110734);},'DIsxU':function(_0xdd1c44,_0x4aef17){var _0x4168c9=_0x83f298;return _0x368390[_0x4168c9(0xb62)](_0xdd1c44,_0x4aef17);},'JtFso':'aXkmR','eVSZa':_0x368390[_0x83f298(0xe0d)],'jcxjE':function(_0x5ec9dc,_0x2c258c,_0x2c4d27,_0x3a41ac,_0x1b6bab){return _0x368390['ZVtmC'](_0x5ec9dc,_0x2c258c,_0x2c4d27,_0x3a41ac,_0x1b6bab);},'kdYxE':function(_0x3b2462,_0x1615b4){return _0x368390['eyeap'](_0x3b2462,_0x1615b4);},'IXonW':function(_0x3b2dca,_0x2e4715){var _0x256c0c=_0x83f298;return _0x368390[_0x256c0c(0x4b4)](_0x3b2dca,_0x2e4715);},'qMgUq':function(_0x13fb41,_0x51439a,_0x3fe20d,_0xe2ae1d,_0x1f23a7){return _0x13fb41(_0x51439a,_0x3fe20d,_0xe2ae1d,_0x1f23a7);},'KqBlQ':'0x28\x20'+'(gues'+'s)','NbAoA':function(_0x11c9cd,_0x2f67e8){return _0x11c9cd>=_0x2f67e8;},'WzjzT':_0x83f298(0x788),'Hpxoa':_0x368390['lwpox'],'UpnIl':function(_0x4761cd,_0x41c17f){return _0x4761cd+_0x41c17f;},'CNuwh':function(_0x587f7e,_0x31a866){return _0x587f7e+_0x31a866;},'ZxPfn':_0x368390['xqIty'],'diFep':'\x20writ'+'es'};if(_0x368390['PWYTe']==='mIlWy')return _0x560687[_0x83f298(0x307)](_0x5a4e83[_0x83f298(0x2fa)](_0x33a320-_0x578ca6),_0x47dd26['max'](-0xf97*-0x2+-0xd3*-0x29+0x207c*-0x2,_0x560687[_0x83f298(0x2ed)](_0x3fea62['abs'](_0x457a7c),-0xc0e+0x3d9*-0x5+0x1f4b+0.6)));else{var _0x500d2f=window['Unity'+_0x83f298(0x917)+_0x83f298(0xcdd)]&&window[_0x83f298(0xd88)+_0x83f298(0x917)+_0x83f298(0xcdd)]['Runti'+'me']||null,_0x34b5d7=_0x500d2f&&_0x500d2f[_0x83f298(0xc5a)+'pCont'+'ext'],_0x282d2f=_0x34b5d7&&_0x34b5d7['scrip'+'tData'],_0x42c17a={},_0x560a04=[];for(var _0x28f029 in _0x3bbae7){if(_0x368390[_0x83f298(0xd28)]==='XwlLh'){_0x42c17a[_0x28f029]='0x'+_0x3bbae7[_0x28f029][_0x83f298(0xe9d)][_0x83f298(0x258)+'ing'](-0x237*0xf+0x26*-0x1d+0x2597*0x1);if(_0x3bbae7[_0x28f029][_0x83f298(0x365)+_0x83f298(0xa51)])_0x560a04['push'](_0x28f029);}else try{return _0xe9c2b9&&_0x115abf[_0x83f298(0x26f)+'r']?_0x250c37[_0x83f298(0x26f)+'r'][_0x83f298(0x409)+_0x83f298(0x23a)]:-0xb*0x351+-0x1d4e+0x5fb*0xb;}catch(_0x274a30){return-0x1*-0x81d+0x1a63*0x1+0xc0*-0x2e;}}var _0x3c9fc1={};for(var _0x2d6df9 in _0x3bbae7)_0x3c9fc1[_0x2d6df9]=_0x368390[_0x83f298(0x370)](_0x1932ca,_0x3bbae7[_0x2d6df9]['ptr']);var _0xcafa7b={},_0x538161=null;try{if(_0x83f298(0xb4b)===_0x83f298(0xb4b))_0xcafa7b=_0x176937();else{if(_0x3bdc3e[_0x83f298(0x6f2)+'t']&&_0x560687[_0x83f298(0x9fc)](_0x51a30e['paren'+'t'],_0x4e57a2))_0x1a8384['paren'+'t'][_0x83f298(0x4fd)+_0x83f298(0x22b)+'e'](_0x2087ff,'*');}}catch(_0x3a7114){if(_0x83f298(0x5d2)===_0x368390['KSYBf'])_0x538161=_0x368390['nUopU'](String,_0x3a7114&&_0x3a7114[_0x83f298(0x2ab)+'ge']||_0x3a7114);else try{return _0x135cc9[_0x83f298(0x9a0)]();}catch(_0x4477fb){}}var _0x1e24c4={'version':_0x51cafc,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':_0x368390[_0x83f298(0xaaf)](Date[_0x83f298(0x3b9)](),_0x5ef975),'frame':location['href']['slice'](-0xb55*0x1+0x1b7b+0x6a*-0x27,-0x1*0x204e+0x14be+0x8*0x181),'host':_0x5cac3c,'frameRole':_0x402ddf,'uwmk':!!_0x500d2f,'il2CppContext':!!_0x34b5d7,'typeCount':_0x282d2f?Object[_0x83f298(0x8be)](_0x282d2f)[_0x83f298(0xcc0)+'h']:null,'arm':_0x55d472,'assemblies':_0x26be39,'hooksTotal':_0x5dfcca[_0x83f298(0xcc0)+'h'],'hooksApplied':_0x17ff9c(),'hooksResolved':_0x24b1a2(),'hooksRegisteredAtArm':_0x55d472['hooks'+_0x83f298(0x640)+_0x83f298(0x822)]||0x22*-0xdf+-0x1d67*0x1+0x3b05,'hookErrors':_0x4cf087[_0x83f298(0x1dd)](0x124+0x618+0x2*-0x39e,0x1*-0x1b59+0x11ff+0x962),'instances':_0x42c17a,'classNames':_0x3c9fc1,'instancesReplaced':_0x560a04,'hookFireProof':_0xf90ee6,'survey':_0xcafa7b,'actkKeys':_0x4f37b9,'surveyRows':Object['keys'](_0xcafa7b)[_0x83f298(0x6af)+'e'](function(_0x56d5d7,_0x52bcbf){return _0x56d5d7+_0xcafa7b[_0x52bcbf]['lengt'+'h'];},0xf5a+0x1*-0xe41+-0x119*0x1),'reads':{'ok':_0xd13a81['ok'],'failed':_0xd13a81[_0x83f298(0x1e2)+'d'],'lastError':_0xd13a81['lastE'+_0x83f298(0x9e9)],'source':_0xd13a81[_0x83f298(0x8f2)+'e']},'identity':_0x368390[_0x83f298(0x524)](_0x4708c7),'globals':_0x5e9bb3(),'wasmMemory':{'captured':!!_0x4c258e,'atMs':_0x335ef8,'bytes':(function(){var _0x15d3d8=_0x83f298;if(_0x15d3d8(0xb72)!==_0x15d3d8(0xe08))try{return _0x4c258e&&_0x4c258e[_0x15d3d8(0x26f)+'r']?_0x4c258e['buffe'+'r'][_0x15d3d8(0x409)+'ength']:0x181e+0xa8e*-0x1+-0xd90;}catch(_0x5b9208){if(_0x15d3d8(0xb3f)!==_0x15d3d8(0xbad))return 0x199d*0x1+0x193*0xd+-0xb85*0x4;else _0x28aa4b={'mean':_0x39b2f8,'members':[]},_0x495dea[_0x15d3d8(0x8f8)](_0x13402e);}else _0x2e47c3=_0x5ac270(_0x424d9f);}()),'exportKeys':_0x4e683c},'diff':_0x4d4871[_0x83f298(0x1dd)](0x4ef+-0x1b*0xc0+0xf51,0x3eb+0x4d6*0x3+-0x3*0x617),'speed':{'on':_0x2a77ad['on'],'factor':_0x2a77ad[_0x83f298(0xb52)+'r'],'writes':_0x157b2b,'scaled':_0x41dd3f[_0x83f298(0x1dd)](-0x1c84+-0x2f*0x1+0x1cb3,-0xee3+0x1515+-0x13a*0x5),'skipped':_0x4d63f4[_0x83f298(0x1dd)](0x18af+-0xeff+-0x9b0,0xcb5*0x3+-0x8f0+-0x1d1f)},'esp':_0x368390[_0x83f298(0xc41)](_0x3a212e),'view':_0x368390['iVRvA'](_0x3bc1c6),'camera':(function(){var _0x53c4df=_0x83f298,_0x4b7051={'FDshL':function(_0x11573e,_0x1eeab3){return _0x11573e-_0x1eeab3;},'BQrle':_0x560687[_0x53c4df(0x94f)]};try{var _0x2bfd28=_0x560687['vCLUq'](_0xdc26e);return{'ok':_0x2bfd28['ok'],'source':_0x2bfd28[_0x53c4df(0x8f2)+'e'],'why':_0x2bfd28[_0x53c4df(0xa97)],'tried':_0x2bfd28[_0x53c4df(0xb83)],'camPtr':_0x560687['DIsxU']('0x',_0x2bfd28[_0x53c4df(0x225)+'r'][_0x53c4df(0x258)+_0x53c4df(0x5f9)](0x2584+0x1b16+-0xb*0x5de)),'tfPtr':_0x560687['DIsxU']('0x',_0x2bfd28[_0x53c4df(0xd99)][_0x53c4df(0x258)+_0x53c4df(0x5f9)](0x259b+-0x6d*0x1+-0x251e)),'fov':_0x2bfd28[_0x53c4df(0x1df)],'quat':_0x2bfd28['quat'],'pos':_0x2bfd28[_0x53c4df(0x90e)],'basis':_0x2bfd28[_0x53c4df(0xd5c)],'errors':_0x2bfd28['error'+'s'][_0x53c4df(0x1dd)](0xb5d*0x2+-0x131c+-0x2*0x1cf,-0x5*-0x3f1+0x123e+-0x25ef)};}catch(_0x3797b3){if(_0x53c4df(0x6b2)!==_0x560687['JtFso'])return{'ok':![],'error':String(_0x3797b3&&_0x3797b3[_0x53c4df(0x2ab)+'ge']||_0x3797b3)[_0x53c4df(0x1dd)](-0x1*0x1609+0x2*-0x1379+0x3cfb*0x1,0x15*0x15e+0x2*-0xec9+0x154)};else{var _0x662158=_0x1400ed[_0x53c4df(0xd88)+_0x53c4df(0x917)+'dkit']&&_0x33847f[_0x53c4df(0xd88)+'WebMo'+'dkit'][_0x53c4df(0x79a)+'me'],_0x5e73ca=_0x160327||_0x662158&&_0x662158[_0x53c4df(0x1c8)+'ns']&&_0x662158[_0x53c4df(0x1c8)+'ns'][_0x4b7051['FDshL'](_0x662158['plugi'+'ns'][_0x53c4df(0xcc0)+'h'],0xc2f+0x5*0x57d+-0x279f)];if(!_0x5e73ca||typeof _0x5e73ca['call']!==_0x4b7051[_0x53c4df(0x7e7)])return _0x5a2efa['error'+'s'][_0x53c4df(0x8f8)](_0x53c4df(0xb65)+'ugin.'+_0x53c4df(0x99c)),_0x364e18;return _0x3ac9e1(_0x5e73ca[_0x53c4df(0x99c)](_0x389738,_0x48ae4a,_0x24edef||[]));}}}()),'angles':(function(){var _0x2ef07e=_0x83f298,_0x2e65c5=_0x2d8b65(),_0x1e465b=null,_0x136695=null,_0x30d4eb=_0x6d3a99();if(_0x30d4eb){var _0x2f02cc=_0x560687['jcxjE'](_0x3542a2,_0x30d4eb['eye'],[_0x30d4eb['eye'][0xb3*0x19+-0x1db8+-0xc3d*-0x1],_0x30d4eb[_0x2ef07e(0x33c)][0x1fb*0x6+-0xb61*-0x1+0xd*-0x1ca],_0x30d4eb['eye'][-0xff6+-0x20d8+-0x1*-0x30d0]+(0x23*-0x47+-0x1627+0xa9f*0x3)],0x13*0x11c+-0x21ec+0x10c0,0x2639+0x247*0x11+-0x4908);_0x2f02cc&&(_0x1e465b=_0x2f02cc['x']/(-0x3*-0x339+-0x215b*-0x1+0x2*-0x138f),_0x136695=_0x560687['kdYxE'](_0x2f02cc['y'],0xa8a+-0x724*0x1+0x82));}var _0x11053f=null,_0x195a65=null;if(_0x30d4eb){var _0xd9ccc=_0x3542a2(_0x30d4eb[_0x2ef07e(0x33c)],[_0x30d4eb[_0x2ef07e(0x33c)][-0x263a+0x1*0x808+0xf19*0x2],_0x30d4eb['eye'][-0x1*0x9ac+-0x20a5*-0x1+-0x2a*0x8c]+(-0x7f4+0x1e21+-0x1623),_0x30d4eb[_0x2ef07e(0x33c)][0x1b62+0x1ead+-0xc1*0x4d]+(0x8e1*0x4+-0xeb3+-0x14c7)],0x37*0x6d+0x1*-0x9d9+-0x9aa,-0x269b+0x1*0x157f+0x1504);if(_0xd9ccc)_0x11053f=_0x560687[_0x2ef07e(0x37d)](_0xd9ccc['y'],0xf2c*-0x1+-0x1274+0x2588);var _0x28230a=_0x560687['qMgUq'](_0x3542a2,_0x30d4eb['eye'],[_0x30d4eb['eye'][-0x1a23+-0x2*-0xb7e+-0x3*-0x10d],_0x30d4eb[_0x2ef07e(0x33c)][-0xf98+0xc15*0x1+0x384]-(-0x17e8+0x2102+-0x910),_0x30d4eb['eye'][-0x2013+-0x43*0x71+-0x3da8*-0x1]+(-0xf6+-0x69*-0x35+-0x14bd)],-0x13c*0x1d+-0x7d4+0x2f88,0x2c*0xb+0x2133+-0x1f2f);if(_0x28230a)_0x195a65=_0x28230a['y']/(0xa3*0x15+-0x4dd*-0x4+-0x1*0x1ceb);}return{'identified':_0x5b0cfc['ident'+_0x2ef07e(0x30c)],'why':_0x5b0cfc['why'],'source':_0x5b0cfc[_0x2ef07e(0x8f2)+'e'],'viewHooks':(function(){var _0x239dee=_0x2ef07e;if('FLgKB'!==_0x560687['eVSZa'])return _0x295d09[_0x239dee(0xd99)]=0x1774+0xfd*-0x1d+0x535*0x1,_0x53081f(_0x239dee(0xc32)+_0x239dee(0x6f0)+'get_t'+_0x239dee(0xa02)+_0x239dee(0x930)+'eturn'+'ed\x20'+_0x58a86b);else try{return _0x560687[_0x239dee(0xb94)](_0x1ca2f3);}catch(_0x5049b6){return{'err':String(_0x5049b6&&_0x5049b6['messa'+'ge']),'stack':String(_0x5049b6&&_0x5049b6[_0x239dee(0x690)])};}}()),'setterPair':(function(){var _0x56a6d0=_0x2ef07e,_0x94f3b2=_0x560687[_0x56a6d0(0xb94)](_0x474b46);return _0x94f3b2?{'a':_0x94f3b2['rawA'],'b':_0x94f3b2[_0x56a6d0(0x591)],'hits':_0x94f3b2[_0x56a6d0(0xe3e)],'order':_0x94f3b2[_0x56a6d0(0x1f6)]}:null;}()),'yawAt':_0x5b0cfc[_0x2ef07e(0xc21)+_0x2ef07e(0x85a)]||_0x560687['KqBlQ'],'pitchAt':_0x5b0cfc['pitch'+_0x2ef07e(0x414)+'r']||_0x2ef07e(0x9c7)+_0x2ef07e(0x405)+'s)','getters':_0x5b0cfc['gette'+'rs'],'rawPitch':_0x5b0cfc['rawPi'+'tch'],'rawYaw':_0x5b0cfc[_0x2ef07e(0x7fc)+'w'],'pitch':_0x5b0cfc[_0x2ef07e(0x1bf)],'yaw':_0x5b0cfc[_0x2ef07e(0xdce)],'legacyOffsetsCleared':_0x53de1f,'fov':_0x56dd19[_0x2ef07e(0x1df)],'fovSane':_0x560687[_0x2ef07e(0xdd5)](_0x56dd19[_0x2ef07e(0x1df)],0x7*0xc2+-0x25d6+0x2*0x1062)&&_0x56dd19['fov']<=-0x227f+-0x2493*-0x1+-0x2*0xd3,'centreX':_0x1e465b,'centreY':_0x136695,'aboveY':_0x11053f,'belowY':_0x195a65,'projection':_0x10d25a()};}()),'fov':_0x56dd19[_0x83f298(0x1df)],'espView':{'on':_0x2730c7['on'],'boxes':_0x2730c7[_0x83f298(0x407)],'span':_0x2730c7[_0x83f298(0xe5f)]},'local':(function(){var _0x20ce80=_0x83f298,_0x87ef96={'gKxHq':function(_0xcc4d55){return _0xcc4d55();}};if(_0x560687[_0x20ce80(0x305)]!==_0x560687['Hpxoa']){var _0x290bb3=_0x560687['vCLUq'](_0x6d3a99);if(!_0x290bb3)return null;return{'ptr':_0x560687[_0x20ce80(0xa66)]('0x',_0x290bb3['ptr'][_0x20ce80(0x258)+'ing'](-0xd3e*-0x2+0x1*-0x1afb+0x8f)),'feet':_0x290bb3['feet'],'eye':_0x290bb3[_0x20ce80(0x33c)],'posAt':_0x290bb3['posAt'],'copies':_0x290bb3[_0x20ce80(0x9ae)+'s'],'cluster':_0x290bb3[_0x20ce80(0x9c6)+'er'],'eyeHeight':_0x30ab1,'pitch':_0x290bb3[_0x20ce80(0x1bf)],'yaw':_0x290bb3[_0x20ce80(0xdce)],'reach':_0x290bb3[_0x20ce80(0x28f)]};}else try{var _0xb34de2=_0x87ef96['gKxHq'](_0x28ddff);return _0xb34de2&&_0xb34de2[_0x20ce80(0x9de)]?_0xb34de2['feet'][-0xb05*0x1+0x13fd+-0x8f7]:null;}catch(_0x589afc){return null;}}()),'uwmkLog':_0x47cb91['slice'](-0x1d8a+-0x217*0x11+0x4111,0x3b*0x3a+0x25c7*0x1+0x3311*-0x1),'warnings':[]};if(_0x538161)_0x1e24c4['warni'+'ngs'][_0x83f298(0x8f8)](_0x83f298(0x734)+_0x83f298(0x827)+'led:\x20'+_0x538161);if(_0x55d472['error'])_0x1e24c4[_0x83f298(0xaf1)+_0x83f298(0xe64)][_0x83f298(0x8f8)](_0x368390[_0x83f298(0xa03)]('UWMK\x20'+'armin'+_0x83f298(0x850)+'led:\x20',_0x55d472[_0x83f298(0x8d9)]));_0x1e24c4['surve'+'yRows']===-0x19b5*0x1+0x901*-0x4+-0x3db9*-0x1&&_0x368390['BnXqE'](Object[_0x83f298(0x8be)](_0x1e24c4[_0x83f298(0x571)+_0x83f298(0x5dd)])[_0x83f298(0xcc0)+'h'],-0x26d9+-0xd32+0x3*0x1159)&&_0x1e24c4[_0x83f298(0xaf1)+'ngs'][_0x83f298(0x8f8)](_0x368390['KLpKz'](_0x368390['Uhfye'](_0x83f298(0x1c9)+_0x83f298(0xd0a),Object[_0x83f298(0x8be)](_0x1e24c4['insta'+_0x83f298(0x5dd)])[_0x83f298(0xcc0)+'h']),_0x368390[_0x83f298(0x57c)])+(_0xd13a81['lastE'+_0x83f298(0x9e9)]?_0x368390[_0x83f298(0x35a)](_0x368390[_0x83f298(0xdc2)],_0xd13a81[_0x83f298(0x2cc)+'rror']):'No\x20re'+'ad\x20fa'+_0x83f298(0x4c3)+'\x20so\x20e'+_0x83f298(0xa26)+'offse'+'t\x20was'+_0x83f298(0x6bd)+_0x83f298(0x3ca)+'y\x20typ'+'e.'));if(_0x1e24c4[_0x83f298(0x798)+'ity']&&_0x1e24c4[_0x83f298(0x798)+_0x83f298(0x224)][_0x83f298(0xc3b)+'tches']===![]){if(_0x368390['OfgUc'](_0x368390['Vytgl'],'vfVot'))_0x1e24c4['warni'+'ngs'][_0x83f298(0x8f8)](_0x368390['GBQmt'](_0x368390[_0x83f298(0x841)](_0x368390[_0x83f298(0x9ec)](_0x83f298(0xe9a)+'ER\x20UW'+'MK\x20CO'+_0x83f298(0x2d4)+_0x83f298(0xd2c)+_0x83f298(0xe27)+_0x83f298(0xa74)+_0x83f298(0xd88)+_0x83f298(0x917)+_0x83f298(0x654)+_0x83f298(0x48b)+'Runti'+_0x83f298(0xa9a)+_0x83f298(0x8ae)+'d\x20was'+'\x20',_0x83f298(0x365)+'ced\x20b'+'y\x20a\x20d'+_0x83f298(0x4f2)+_0x83f298(0x4f3)+'nstan'+_0x83f298(0x5b7)+_0x83f298(0x57f)+_0x83f298(0x287)+'sking'+_0x83f298(0x211)+_0x83f298(0x777)+_0x83f298(0xa1b)+_0x83f298(0x5d6)+'r\x20'),_0x83f298(0x20a)+_0x83f298(0x84d)+_0x83f298(0x427)+_0x83f298(0x510)+_0x83f298(0x720)+_0x83f298(0x547)+'\x20it\x20i'+_0x83f298(0xc57)+'haned'+'.\x20Dis'+_0x83f298(0x46b)+_0x83f298(0x1d2)+_0x83f298(0xbb1)+'r\x20'),_0x83f298(0x384)+'a/UWM'+'K\x20scr'+_0x83f298(0x340)+_0x83f298(0x8fc)+_0x83f298(0x809)+_0x83f298(0x8cd)+'and\x20h'+'ard-r'+_0x83f298(0x86c)+'.'));else{var _0x2448f5=_0x5c1782();if(_0x2448f5&&_0x2448f5[_0x83f298(0xb9e)+'e']&&_0x2448f5[_0x83f298(0xb9e)+'e'][_0x83f298(0x6e5)+'8']&&_0x2448f5[_0x83f298(0xb9e)+'e'][_0x83f298(0x6e5)+'8'][_0x83f298(0x26f)+'r'])return _0x2448f5[_0x83f298(0xb9e)+'e'][_0x83f298(0x6e5)+'8'];}}_0x1e24c4[_0x83f298(0x798)+'ity']&&_0x368390['SmkJI'](_0x1e24c4['ident'+_0x83f298(0x224)]['plugi'+_0x83f298(0x39f)+'imeIs'+'Expor'+_0x83f298(0x70c)],![])&&('VcxZd'!==_0x368390[_0x83f298(0xd8d)]?_0x1e24c4['warni'+'ngs'][_0x83f298(0x8f8)](_0x83f298(0x1c8)+'n._ru'+_0x83f298(0x604)+_0x83f298(0xe01)+_0x83f298(0x3f9)+_0x83f298(0xa74)+_0x83f298(0xd88)+'WebMo'+_0x83f298(0x654)+'Runti'+_0x83f298(0x93d)+_0x83f298(0x1f2)+_0x83f298(0x6e8)+'\x20was\x20'+'built'+'\x20'+_0x368390[_0x83f298(0xe7a)]):(_0x3d5d5c(_0x423884,_0x4c7d7f[_0x83f298(0xb52)+'r']),_0x57995a[_0x83f298(0xab4)+'onten'+'t']=_0x326232?_0x560687['UpnIl'](_0x560687[_0x83f298(0x1e8)](_0x560687[_0x83f298(0x82e)]('x'+_0x265e25[_0x83f298(0xb52)+'r'][_0x83f298(0xd9b)+'ed'](-0x2455+0x6*-0x3e2+-0x382*-0x11),_0x560687['ZxPfn'])+_0x489e2d[_0x83f298(0xcc0)+'h']+('\x20fiel'+_0x83f298(0x20f)),_0x5aa5a0),_0x560687[_0x83f298(0x65a)]):_0x83f298(0xae9)+_0x83f298(0xd1f)+'\x20move'+'ment-'+_0x83f298(0x353)+_0x83f298(0x6c9)+'ds\x20on'+_0x83f298(0xb00)+_0x83f298(0x86f)+',\x20ste'+_0x83f298(0x8c5)+'\x20jump'+_0x83f298(0x276)+'refus'+'ed.'));if(_0x1e24c4[_0x83f298(0xc5e)]&&_0x1e24c4['esp']['note'])_0x1e24c4[_0x83f298(0xaf1)+'ngs'][_0x83f298(0x8f8)](_0x368390['bBdny'](_0x368390[_0x83f298(0xbac)],_0x1e24c4[_0x83f298(0xc5e)][_0x83f298(0xc7e)]));if(_0x1e24c4['globa'+'ls']&&!_0x1e24c4['globa'+'ls'][_0x83f298(0x20c)+'8']){var _0x23753c='';_0x1e24c4['hookF'+_0x83f298(0x385)+_0x83f298(0x810)]&&(_0x23753c=_0x368390[_0x83f298(0xb0a)](_0x368390['aKaow'](_0x368390['KgnhV'](_0x368390['iOdar'](_0x368390[_0x83f298(0x1d7)](_0x83f298(0x4ca)+_0x83f298(0x5e8)+'red\x20a'+'t\x20',_0x1e24c4[_0x83f298(0x446)+_0x83f298(0x385)+'oof']['atMs']),_0x368390[_0x83f298(0xe78)])+_0x1e24c4['hookF'+'irePr'+'oof'][_0x83f298(0x499)+_0x83f298(0x34e)+'nc'],_0x368390['nMBHm'])+_0x1e24c4[_0x83f298(0x446)+_0x83f298(0x385)+_0x83f298(0x810)][_0x83f298(0xc9f)+_0x83f298(0x893)+'eAtFi'+'re'],_0x368390['SWoJb'])+(_0x1e24c4[_0x83f298(0x446)+'irePr'+_0x83f298(0x810)]['gameS'+_0x83f298(0x41f)+'AtFir'+'e']||_0x83f298(0x6e6)),'),\x20so'+_0x83f298(0x211)+'refer'+'ence\x20'+'exist'+_0x83f298(0x7d9)+'en\x20an'+'d\x20is\x20'+_0x83f298(0xcc2)+'eacha'+'ble\x20n'+_0x83f298(0x953))),_0x1e24c4['warni'+_0x83f298(0xe64)]['push'](_0x368390['AuKTG'](_0x368390[_0x83f298(0xc7a)](_0x368390[_0x83f298(0x232)](_0x83f298(0xd88)+'\x20inst'+'ance\x20'+_0x83f298(0xcc2)+_0x83f298(0x9fd)+_0x83f298(0x32d)+'t\x20(so'+'urce:'+'\x20',_0x1e24c4[_0x83f298(0x880)+'ls'][_0x83f298(0x331)+_0x83f298(0x41f)]||_0x368390[_0x83f298(0x242)]),_0x368390[_0x83f298(0x621)])+_0x368390['spkxw'],_0x23753c));}return(_0x1e24c4[_0x83f298(0x880)+'ls']&&!_0x1e24c4[_0x83f298(0x880)+'ls']['value'+'Wrapp'+'er']||_0x1e24c4[_0x83f298(0x880)+'ls'][_0x83f298(0x4a8)+'Wrapp'+'er']===_0x368390[_0x83f298(0xaa9)])&&_0x1e24c4['warni'+_0x83f298(0xe64)]['push'](_0x83f298(0xdb3)+_0x83f298(0x4cd)+_0x83f298(0xcc7)+_0x83f298(0x6de)+'t.Val'+_0x83f298(0x8c3)+_0x83f298(0xb21)+'is\x20mi'+'ssing'+_0x83f298(0x679)+'pture'+'\x20is\x20r'+'unnin'+_0x83f298(0xa3e)+'nd.'),_0x1e24c4[_0x83f298(0x89a)+_0x83f298(0xdaf)]>-0x263b*0x1+0xf55+-0x3d1*-0x6&&_0x1e24c4['hooks'+'Appli'+'ed']===0x166*-0x5+0x418*0x3+-0x54a&&_0x282d2f&&(_0x368390[_0x83f298(0xc3a)](_0x1e24c4[_0x83f298(0x89a)+_0x83f298(0xbdc)+_0x83f298(0xb2f)],0x1f*0x1a+-0x10cc+0xda6)?_0x83f298(0x4a5)===_0x368390['Eifog']?(_0x2058c0['push'](_0x368390[_0x83f298(0x9ce)]),_0x39f4b8[_0x83f298(0x8f8)](''),_0x1a7d7e[_0x83f298(0x8f8)](_0x83f298(0x388)+_0x83f298(0xab2)+_0x83f298(0xa71)+_0x83f298(0x78d)+'e\x20gam'+_0x83f298(0x3cd)+'wn\x20Up'+_0x83f298(0x408)+_0x83f298(0x3a5)+_0x83f298(0xca4)+'\x20capt'+_0x83f298(0x899)+_0x83f298(0xe53)),_0x1c90f6[_0x83f298(0x8f8)]('no\x20Up'+'date\x20'+'ran\x20y'+_0x83f298(0xcd8)+_0x83f298(0xd16)+_0x83f298(0x8ea)+_0x83f298(0x9c5)+_0x83f298(0x573)+_0x83f298(0x346)+'atch.')):_0x1e24c4['warni'+'ngs'][_0x83f298(0x8f8)](_0x368390[_0x83f298(0x350)](_0x368390[_0x83f298(0xa86)](_0x368390['wBhuS']+_0x1e24c4[_0x83f298(0x89a)+_0x83f298(0xdaf)]+_0x368390[_0x83f298(0xeac)]+_0x368390[_0x83f298(0x488)]+('so\x20ho'+_0x83f298(0xe38)+_0x83f298(0x442)+'ered\x20'+_0x83f298(0x63b)+'\x20it\x20a'+_0x83f298(0x57a)+_0x83f298(0x844)+_0x83f298(0x466)+'the\x20l'+_0x83f298(0x74c)+_0x83f298(0x2bc)+'\x20page'+'.\x20'),_0x83f298(0x640)+_0x83f298(0x822)+'\x20')+_0x1e24c4[_0x83f298(0x89a)+'Regis'+'tered'+_0x83f298(0xceb)],_0x83f298(0xb11)+_0x83f298(0xc02)+'uring'+_0x83f298(0x4b7)+'ng\x20at'+_0x83f298(0x7ae)+_0x83f298(0x909)+_0x83f298(0xb89)+'.')):_0x1e24c4[_0x83f298(0xaf1)+'ngs'][_0x83f298(0x8f8)](_0x83f298(0x525)+_0x83f298(0xc9f)+_0x83f298(0xb64)+_0x1e24c4['hooks'+_0x83f298(0xbdc)+_0x83f298(0xb2f)]+'\x20of\x20'+_0x1e24c4['hooks'+_0x83f298(0xdaf)]+('\x20hook'+_0x83f298(0x282)+_0x83f298(0xba4)+_0x83f298(0x46b)+_0x83f298(0xbdf)+_0x83f298(0xcc1)+_0x83f298(0xa6c)+'ed\x20no'+'ne.\x20T'+'he\x20si'+_0x83f298(0x506)+'re\x20')+('(this'+',\x20Met'+'hodIn'+'fo*)\x20'+'->\x20vo'+_0x83f298(0x6c4)+'es\x20no'+_0x83f298(0x7de)+_0x83f298(0x3b5)+'is\x20bu'+'ild.'))),_0x1e24c4[_0x83f298(0x89a)+'Appli'+'ed']>0x10fc+-0x16c6+0xf7*0x6&&!_0x1e24c4[_0x83f298(0x571)+_0x83f298(0x5dd)]['FPSco'+'ntrol'+'ler']&&_0x1e24c4[_0x83f298(0xaf1)+'ngs'][_0x83f298(0x8f8)](_0x368390[_0x83f298(0xd7e)]+(_0x83f298(0x7a3)+'r\x20you'+'\x20are\x20'+_0x83f298(0xb38)+_0x83f298(0xb56)+'ound,'+'\x20or\x20t'+_0x83f298(0x769)+_0x83f298(0x794)+_0x83f298(0x650)+_0x83f298(0x44e)+'ong\x20o'+_0x83f298(0x758)+_0x83f298(0xcca))),_0x1e24c4['insta'+_0x83f298(0x5a6)+_0x83f298(0x716)+'ed'][_0x83f298(0xcc0)+'h']&&_0x1e24c4['warni'+'ngs'][_0x83f298(0x8f8)](_0x368390[_0x83f298(0xbcd)](_0x83f298(0x863)+_0x83f298(0xd15)+'nce\x20f'+'irst\x20'+_0x83f298(0x1c9)+'re\x20(r'+_0x83f298(0x380)+_0x83f298(0x67f),_0x1e24c4[_0x83f298(0x571)+_0x83f298(0x5a6)+'eplac'+'ed'][_0x83f298(0xe4b)](',\x20'))),_0x1e24c4;}}function _0x27cc64(_0xfb4ae9){var _0x3a0daa=_0x189e9a,_0x58c9b3=(_0x3a0daa(0xafd)+'|2|1')['split']('|'),_0x3f0e7b=0x38*-0xad+0x18f6+0x22*0x61;while(!![]){switch(_0x58c9b3[_0x3f0e7b++]){case'0':console[_0x3a0daa(0x289)](_0x368390['cHGam'](_0x368390[_0x3a0daa(0x6fc)](_0x175ac7,'\x0a')+JSON[_0x3a0daa(0x4c9)+_0x3a0daa(0xd94)](_0xfb4ae9,null,-0x1639+-0x1757+0x5*0x91d)+'\x0a',_0x2ebb58));continue;case'1':_0xd6ee79(_0x368390[_0x3a0daa(0x722)],{'report':_0xfb4ae9});continue;case'2':try{_0x4cab8e(_0xfb4ae9);}catch(_0x5628b5){}continue;case'3':_0x31c788=_0xfb4ae9;continue;case'4':console[_0x3a0daa(0x289)](_0x368390[_0x3a0daa(0xb91)],_0x368390[_0x3a0daa(0x38a)](_0x368390[_0x3a0daa(0x916)]+_0x327aec,_0x368390['gXGiv']),_0xfb4ae9);continue;}break;}}function _0x43dbe2(){var _0x2da9e2=_0x189e9a,_0x49ee20={'Vkbus':_0x2da9e2(0x2ee)};try{if(_0x368390['DGNCr']!==_0x368390['WpmcL'])return _0x43078a();else try{if(!_0x5bf58e[_0x2da9e2(0x6ec)])return;var _0x96b72f=_0x26a11d();_0x39f325[_0x2da9e2(0x6ec)]['style']['opaci'+'ty']=_0x5d93d5['open']?'1':_0x96b72f?'.8':_0x49ee20['Vkbus'],_0x5332eb[_0x2da9e2(0x6ec)][_0x2da9e2(0xa57)]=_0x96b72f?'Sakur'+_0x2da9e2(0x63f)+'llWar'+_0x2da9e2(0x1f7)+_0x2da9e2(0x7f5):'Sakur'+'a\x20Ski'+'llWar'+_0x2da9e2(0xebc)+_0x2da9e2(0xc16)+_0x2da9e2(0xb61)+_0x2da9e2(0x211)+'game\x20'+_0x2da9e2(0x1f1)+'rt)';}catch(_0xf15eae){}}catch(_0xfdae2c){if(_0x368390['DDLHM'](_0x368390[_0x2da9e2(0x425)],_0x368390['pTlqK']))_0x544044[_0x2da9e2(0x7fb)+_0x2da9e2(0x3ce)+'x']({'typeName':_0x2da9e2(0x971)+_0x2da9e2(0x83d),'methodName':_0xff6dad[_0x2da9e2(0xa41)],'params':_0x579e80['wasmP'+_0x2da9e2(0x8ba)],'returnType':_0x186d33['wasmR'+'et']},_0x503e1d(_0x2da9e2(0x7e9),_0x3ae3c4[_0x2da9e2(0xa41)]));else return{'version':_0x51cafc,'when':new Date()[_0x2da9e2(0x2ff)+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x5ef975,'host':_0x5cac3c,'uwmk':!!(window['Unity'+'WebMo'+_0x2da9e2(0xcdd)]&&window[_0x2da9e2(0xd88)+_0x2da9e2(0x917)+'dkit'][_0x2da9e2(0x79a)+'me']),'il2CppContext':![],'arm':_0x55d472,'hooksTotal':_0x5dfcca[_0x2da9e2(0xcc0)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0xfdae2c&&_0xfdae2c[_0x2da9e2(0x2ab)+'ge']||_0xfdae2c)};}}function _0x92ae05(){var _0x5e09b0=_0x189e9a,_0x185f44={'pJUkL':'2|0|1'+_0x5e09b0(0xb17)+'3','Dqdnk':function(_0x37a7af,_0xc53200){return _0x37a7af(_0xc53200);},'yqKFt':function(_0x1b6607){var _0xeae427=_0x5e09b0;return _0x368390[_0xeae427(0xb02)](_0x1b6607);},'MRKcW':function(_0x41fef7,_0x120efd){return _0x41fef7<_0x120efd;},'OazYz':function(_0x5895af,_0x2dd189,_0x3b772f){var _0x50f06d=_0x5e09b0;return _0x368390[_0x50f06d(0xc61)](_0x5895af,_0x2dd189,_0x3b772f);},'bjHXM':function(_0x4e876d,_0x2d2f62,_0x5a525c){return _0x4e876d(_0x2d2f62,_0x5a525c);}},_0x5e1d9a=-0x3b*-0x67+0x19a8+-0x3165;try{_0x368390['OuseI'](_0x5e09b0(0x430),_0x368390[_0x5e09b0(0x328)])?_0x5e729b():(_0x4a2821=!_0x110bd1,_0x36d8ba['textC'+'onten'+'t']=_0x5bdbb3?'Speed'+'\x20ON':'Speed'+_0x5e09b0(0xa6d),_0x515ce1['style'][_0x5e09b0(0xd57)+'round']=_0x492027?_0x58f863:_0x368390[_0x5e09b0(0x925)],_0x576d69['style'][_0x5e09b0(0x995)]=_0x114b48?_0x5e09b0(0x804)+'1b':_0x368390[_0x5e09b0(0x8a7)],_0x200b76());}catch(_0x318647){}try{if(_0x5e09b0(0xc8b)===_0x5e09b0(0xc8b))_0x42b5d7();else{var _0x27c570=arguments[_0x522455];if(typeof _0x27c570===_0x5e09b0(0x4c9)+'g')_0x4fa459+=_0x27c570;else{if(_0x27c570&&_0x27c570[_0x5e09b0(0x2ab)+'ge'])_0x4651dd+=_0x27c570['messa'+'ge'];}}}catch(_0x3cd158){}setInterval(_0x32315b,-0xb6+-0x29*0x3+0x4b5),_0x27cc64(_0x43dbe2()),function _0x198c8f(){var _0x577d90=_0x5e09b0,_0x3c8e1c={'NyDgl':_0x185f44[_0x577d90(0xb63)],'QJnDe':_0x577d90(0x6e6),'SSiFE':function(_0x1101f4,_0x30f33b){return _0x1101f4===_0x30f33b;},'FDQJr':function(_0x1d47e9,_0x49ca18){var _0xe4f7d7=_0x577d90;return _0x185f44[_0xe4f7d7(0xd26)](_0x1d47e9,_0x49ca18);},'OLbTo':function(_0xf4bcdf,_0x6c1ab7){return _0xf4bcdf+_0x6c1ab7;},'lYNwr':_0x577d90(0xb95)+_0x577d90(0xa62)+_0x577d90(0xda5)+_0x577d90(0x9b6)+'='};if('USioy'!==_0x577d90(0xe17)){if(!_0x5dfcca[_0x577d90(0xcc0)+'h']){if(_0x577d90(0x91a)===_0x577d90(0x91a))try{_0x3af691();}catch(_0xfbf635){}else{var _0x2a223a={};try{var _0x4003b8=_0x3c8e1c[_0x577d90(0xc59)][_0x577d90(0x464)]('|'),_0x2d6267=0x3*-0xc3b+0x2488+0x29*0x1;while(!![]){switch(_0x4003b8[_0x2d6267++]){case'0':_0x2a223a[_0x577d90(0x5b3)]=_0x187e8e&&_0x187e8e[_0x577d90(0x8e8)+_0x577d90(0x6b5)+'g']||null;continue;case'1':_0x2a223a['tagMa'+_0x577d90(0xce6)]=!!(_0x187e8e&&_0x5cb646&&_0x187e8e[_0x577d90(0x8e8)+'uraTa'+'g']===_0x57455e);continue;case'2':var _0x187e8e=_0x5158e3['Unity'+_0x577d90(0x917)+_0x577d90(0xcdd)]&&_0x2b01bf[_0x577d90(0xd88)+_0x577d90(0x917)+_0x577d90(0xcdd)]['Runti'+'me'];continue;case'3':_0x2a223a['plugi'+'nRunt'+_0x577d90(0x897)+'me']=_0x356374&&_0x5ee885[_0x577d90(0x3a4)+_0x577d90(0xbc1)]&&_0x3be770['_runt'+'ime']['_game']?typeof _0x24dee4['_runt'+_0x577d90(0xbc1)][_0x577d90(0x379)]:_0x3c8e1c[_0x577d90(0xd9c)];continue;case'4':_0x2a223a[_0x577d90(0x504)+_0x577d90(0x36e)+'e']=_0x187e8e&&_0x187e8e[_0x577d90(0x379)]?typeof _0x187e8e[_0x577d90(0x379)]:'none';continue;case'5':_0x2a223a['plugi'+'nRunt'+_0x577d90(0x8b3)+_0x577d90(0xd4a)+_0x577d90(0x70c)]=!!(_0x3f1763&&_0x51d910[_0x577d90(0x3a4)+_0x577d90(0xbc1)]&&_0x3c8e1c[_0x577d90(0x251)](_0x16f2d5[_0x577d90(0x3a4)+'ime'],_0x187e8e));continue;}break;}}catch(_0x36676b){_0x2a223a[_0x577d90(0x8d9)]=_0x3c8e1c['FDQJr'](_0x5a2b48,_0x36676b&&_0x36676b['messa'+'ge']||_0x36676b);}return _0x2a223a;}}_0x5e1d9a++,_0x27cc64(_0x185f44[_0x577d90(0x9c4)](_0x43dbe2));if(!_0x5dfcca['lengt'+'h']&&_0x185f44[_0x577d90(0x94e)](_0x5e1d9a,0xb49*-0x3+-0xf30+-0x3237*-0x1))_0x185f44['OazYz'](setTimeout,_0x198c8f,0xd3*0x2+-0x17d+0x7a7);else{if(!Object['keys'](_0x3bbae7)[_0x577d90(0xcc0)+'h']&&_0x5e1d9a<0x1a56+-0x1fbb*-0x1+-0x38e5)setTimeout(_0x198c8f,-0x1*-0x6d3+0x37*0x32+-0x9c1);else _0x185f44[_0x577d90(0x454)](setTimeout,_0x198c8f,0x866+0x27*0xa7+-0x1d27);}}else _0x169c14=_0x3c8e1c['OLbTo'](_0x3c8e1c[_0x577d90(0x392)](_0x3c8e1c[_0x577d90(0x392)](_0x577d90(0x4ca)+_0x577d90(0x5e8)+_0x577d90(0xeb3)+'t\x20',_0x441122[_0x577d90(0x446)+'irePr'+_0x577d90(0x810)][_0x577d90(0x6fb)]),_0x3c8e1c[_0x577d90(0xd2d)]),_0x448d9e[_0x577d90(0x446)+_0x577d90(0x385)+_0x577d90(0x810)]['origi'+_0x577d90(0x34e)+'nc'])+(_0x577d90(0x736)+_0x577d90(0xd71)+_0x577d90(0xc9f)+_0x577d90(0xaf7))+_0x4456d6['hookF'+_0x577d90(0x385)+'oof']['resol'+_0x577d90(0x893)+_0x577d90(0x417)+'re']+(_0x577d90(0x308)+_0x577d90(0x8f0))+(_0x4217a3['hookF'+_0x577d90(0x385)+'oof'][_0x577d90(0x331)+'ource'+_0x577d90(0x59f)+'e']||_0x3c8e1c[_0x577d90(0xd9c)])+(_0x577d90(0x6fe)+'\x20the\x20'+'refer'+'ence\x20'+'exist'+'ed\x20th'+_0x577d90(0x71e)+_0x577d90(0xdaa)+'not\x20r'+'eacha'+_0x577d90(0x8ab)+'ow.');}();}if(document['body'])_0x92ae05();else document[_0x189e9a(0xc29)+'entLi'+_0x189e9a(0xddd)+'r'](_0x189e9a(0xb47)+_0x189e9a(0x27f)+_0x189e9a(0xbd3)+'d',_0x92ae05,{'once':!![]});if(document['body']){if(_0x368390['srqSC']('nebaD','XMKay'))try{_0x4fc0d9();}catch(_0x37df0b){}else{if(_0x4bbffd[_0x568501][_0x189e9a(0x3d1)]&&_0x558510[_0x401442][_0x189e9a(0x3d1)]['appli'+'ed'])_0x40dcf6++;}}else document['addEv'+_0x189e9a(0x457)+_0x189e9a(0xddd)+'r'](_0x189e9a(0xb47)+_0x189e9a(0x27f)+_0x189e9a(0xbd3)+'d',function(){var _0x51365c=_0x189e9a;try{_0x368390[_0x51365c(0x86a)](_0x4fc0d9);}catch(_0x164d0e){}},{'once':!![]});})()));
