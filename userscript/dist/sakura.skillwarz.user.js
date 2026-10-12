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

function _0x2249(){var _0x3c8d3d=['sNzmzeK','zw5LBxK','AwvKige','Ag9VA3m','phbHDgG','zePLCeS','ug1YENy','tKfywvy','CgLqA0C','zw50zxi','yxr1CMu','wLDmCKy','vg90ywW','lJmPo2q','CKnVDw4','nZq4mJK','zhKIihm','igj1Dca','A3vYyv0','B3jRu3K','uMPHsuS','DgL0Bgu','nYWUmsK','WPxcISkmWO/cLa','yw1L','whn3ExK','ChGGmdS','ic0GCNu','AguGC2K','BI1ZCge','sevbufu','igfNCMu','mJzWEdS','q29TCg8','thLzy24','C2z2seG','Dw5Kic4','D2HLBIa','WOZcJSkvWOJcJG','mI4Xmc4','mYWXnZC','WPlcJmkiWOFcIa','D3jPDgu','zenOAwW','EuXhEgi','AvzNuvi','zvbYB3a','B3jYDKC','tvrxrNq','yLPACNK','AxmGBwK','yw5LBca','Dgf0Dxm','EIaOsw4','zNjVBsa','vMDewgq','AgLKzgu','zwXHChm','yxjN','kdiXlde','kgD1zxm','mhb4oYi','tMLSwNm','cKLUC2u','CMDIysG','WO7cHSknWOBcIq','sNPgENG','z2vY','zxjLzca','zhvHvLy','FdL8mta','z1D5z1q','CMvNAxm','Dw1UCZO','ChG7iJ4','A1LJA3y','igzYyw0','BIbHihi','WPlcI8kmWOJcIq','BhDHCNO','zYbMywK','z3fgD3G','WPpcICkoWOBcKW','kde1mcu','ugr5ugu','shrnzuq','zxi7zM8','CMuG','tw9sv0y','ys1Wzxq','s0LNCxm','CevSwNe','CI10Ahu','ywnRz3i','yxrJAc4','wffyzfu','AxPLoJe','lJuGms4','tLLLz0S','r1Lnvuy','pgLUChu','wNrKzMi','tfHpAK8','jtTIywm','ihLLDa','vgHHDca','imk3ia','t2rNreu','yufJEMu','DgGGB3i','zejJALy','ywn0','oYi+u24','yMfJA2C','WOBcKmkgWOZcKa','y0vvrwW','D2fYBMK','AxrPB24','ig9Mihy','Aw1L','zenWuNm','uKvrveq','EhrUv0m','WOJcJmkjWO7cLq','yxiTz3i','lwe9iMy','yxv0BW','ktT9','B3bHy2K','AgLSzsa','DgLHBh0','Bvjnzwi','C2v3zNe','DgvHBq','BK1HBMe','BvzIu1i','mJqYlc4','ufzHveC','zwqU','yu9qsfe','zxG6mJe','mtbWEca','zKXPCgi','Ate2','zwrnCW','zw5NDgG','shjyz1y','s2Dwv2S','B3a6mti','CgX1z2K','ihDOAwm','C3CYlwG','AwrKzw4','tMvVtxO','rfD2q0O','zxiIlci','ter1seC','x19WCeW','CKTVree','qxb6t3e','uuLzqxG','rxHWB3i','WOZcISkgWPdcHW','zwn0Aw4','Dxr0B24','sw5ZDge','Bwf4lwG','vND0vhG','y3jqy2W','r0H6yLu','DxjHDgu','vwvqDuC','s1vsqs0','phnWyw4','wxPSuLG','CMq7zM8','zeHlvwO','qKPgEem','BKDWCLK','q0DSyLi','vwXfALa','yxjLBNq','ugXHr2O','WORcK8kqWOBcJa','zgvYoJe','mduPo30','vgHLiha','C2STyNq','Aw4TD2K','rMXjAe8','yw5NBgu','AgfWshC','Bw4Ty2W','t2vfC3u','lJa0ktS','Awr0Aa','lxbHBMu','AxrZ','DfLvBuu','WOFcJCkkWORcIq','AfnAsfq','BNqXnG','DgfNtwe','ywT1CMe','tu9zwvK','DM1RwKe','BNqTzMe','r0jSDKS','CMf3','D29Yzc0','AwzMzxi','D2f0y2G','AxvZoJK','yM9KExS','r21Wqxy','C2vUDca','C0PyD0K','BLr5Cgu','AK9Rz2O','D2j3svm','x2DHBwu','C2STy2e','zgf0ys0','uwnlDw0','ENfOEwe','nJaWo20','y1bzB1e','igvHy2G','t2HuCMW','vKrJzNe','WPdcJCkuWOFcKq','BNrZoMe','CJOWo2i','WPpcHSkiWO3cJW','CM91BMq','lwLUzgu','vuLSshK','tMfTzq','zxPOB1u','C2v0rMW','BM9ZCge','CM9VDa','WOBcISkvWPtcJG','zwLNAhq','rwDKCg4','mcuGBM8','WPdcKCkrWOBcIW','zwHStgu','CgXHEwu','vvDJyKO','Egj3vhe','wuzwtxq','sergwuu','As1TB24','ue5Kqum','zxHLy0m','BJOWo3a','kde4ChG','C2STCMe','vvDnsYa','zYaVigO','WONcJmkvWOJcIG','zt0IyMe','i3nHA3u','BvjgufC','WPdcJmkkWORcKa','lhrYyw4','u2HHCNa','yMvSB3C','B2jMqG','svvdDMG','BLzPzxC','Eu93Awy','pgrPDIa','CMvHy2G','surgrfO','BMu7Cg8','ihDOAwW','CeDOBui','BgfZDfC','Axr5','CM5PBMC','BguGC2e','A1n5BMm','if0GywW','AgfIBgu','yLzSAMe','s0ngANi','yNjLywS','ChG7CMK','BMTLEsa','mJKWChG','CM9ZCY0','WO/cK8kgWOVcJG','DLftDg4','y3jLyxq','lK1Vzhu','yvr2EeS','CML0Dgu','u2fNtNq','B3rLE2y','rurguKG','rMXHzW','CMfUzg8','AxnmB2m','yY0XlJu','zNv1sKO','zxG7ywW','WPlcI8kkWOFcJG','BMfSv2e','oInMnMu','yxjLzca','BgvMDdO','DeHLywW','B25Ligi','ugPXtuS','pgj1Dhq','BgvKoIa','BeHoqvi','qu1oBMe','zwf0zva','uMvZB2W','BgvUz3q','y3DXtxq','BMuUifq','ywjSzwq','tLbdx0m','C3LZDgu','vNfVv2i','CMf3qG','iJ5ZywS','zNDQC2O','oYi+','zg93','CM12BuS','rvHKwhy','C2STC3C','mtqZlde','BgvYige','Axr5oI4','BKzMveq','yNL0zu8','zwXjq0W','qNvuv0e','rNHHvfK','yxmGzMK','t2rUv3y','AxqTC2m','Dg9WoJe','qwrpEue','C0PJvg4','mJiSmsW','yun0wum','tMTnBKm','rvnqigi','zwqGB2y','wxrVuui','svDxteO','zcWGBM8','yLbjsgy','vLHjtvq','AxmGyNu','ywrPzw4','rKnsBhG','nYK7y3u','ufDQtgq','oJyYDMG','BK1nuMC','C3bHBG','WPtcISksWOFcKG','zMXVDZO','rMLLBgq','BwLUv2K','jwnBC2e','ywDLCG','DMLLD0i','uMvJDa','DtmY','ywnPDhK','tMjJANK','WOJcLmkoWOBcKa','D3jHCdO','phn2zYa','zvbPEgu','idb4mJG','zM9lqxm','nxb4o2i','y2u7y28','DePOv2q','BNrLBNq','v1fcwui','nhW1Fdi','q3jey2S','ls1W','rNzqAvC','mtiGmJe','DgLHDgu','ywn0Axy','mJG7','rgTwCKi','iJeIig0','wKjRz0S','ihnOB3C','v2LKDgG','CgfYyw0','yvHsCgm','z2H0oJi','mhGXqWO','Dhj1y3q','oJeXChG','B0LfyMy','svLPuei','AKvuuxG','uLmG','ug9ZAxq','ifjLC2u','imk3igzV','cNbPDgm','tKrtAvu','CvnNAwK','sNvTCca','EdPUB24','suzhqK0','B3b7zgK','AuzpAe4','AhvK','BgrPBMC','z2v0x3i','yxmSBw8','B2v5qNe','Axq7Fq','t1P1AuS','BgCIihm','DcbPBMO','z2H0oJy','EfHbvem','ohb4ksK','lM1Ulxq','WO3cKCksWPpcIa','A3mG','vxzfr0W','wvbZwxq','D2fZBva','zIb0Agu','D2zIBxa','BMvPDgG','lxyYE2e','ChG7B3a','zYbxzwi','D0rvwvu','WPxcH8kjWOZcJG','tw1yzue','zwy1o2i','zxnWyxC','AxmGBM8','pgnPCMm','igL0igK','DvzvDha','rLL2DuG','BMnL','ic4Znxm','icb3CMK','qu5eihq','mhG1yW','WPlcI8ktWOVcKG','zxG7z2e','oY13zwi','yxv0BZS','WOZcKCktWPxcHW','B3j04OcM','C3zNE3C','Ad0ImIi','tLj3Cu0','Cw52D24','AxrSzxm','CxW9','EuDcBey','y29MB3i','BxmGD2K','zdP0CMe','q1vxze0','DgXL','tgLkB3a','zMLSBfq','BwvTyMu','WPhcK8krWO/cJa','y2TNCM8','CMqTDgK','ignSyxm','BwvZC2e','ysb0CMe','BM9WBMG','BM8GC2m','CMnPywW','wMHJEKq','DwTcA3C','DhKGAw4','CKLPzgq','z2vYlIa','B3jKzxi','C21JqxG','Dg9ju08','Dxm6oha','D29YBgq','m3b4o3C','q2Dbzfq','CMXHyMu','zw1Pzxm','WPhcLCkiWO/cIa','zg9JDw0','y2P3B2i','zwqGBM8','CI1YDw4','BNPlsgO','CKnVBg8','lxnWywm','tg1Zz2K','B2r1Bgu','CM9Wlwy','uMDhrfe','uvjsv3K','uxHxAu4','ign5psi','DdOG','y2XPCgi','WORcHSkkWOVcHG','A2vLCa','vvrKugW','lIbeAxm','zwvKig8','r1vfu1m','vw5PDhK','ndmSmtC','w2fYAwe','ueDlrhe','C3CYlxm','WO3cKCkoWORcIG','ksbVCIa','igfYztO','C2v0vwK','Be5Tugu','kgXVyMi','BhzLr2e','AwXKlG','BgfZDa','WORcKSkkWPhcLa','EdTIB3i','wMLfshu','C2v0ica','D2DnBwC','EcaXmNa','lwnVChK','B3qUBw4','tg9VAYa','Bcb1Cgq','vNvuquW','oJeGmsa','oYi+tM8','tvfRwKi','zwn0Aw8','ic0GDgG','AxnHyMW','CMfUz2u','rwjHyuW','vernx0C','v1PbuK4','Ag9Ksw4','CJPWB2K','r2DPBeu','Bd0Ii2y','C3qY','BJPJzw4','qKL1D3C','AwX0zxi','WO7cK8ktWOVcIG','ihnPBMm','yxr0zw0','EMjQAeC','Fdb8nhW','zMXMs0m','owm5o20','A1newMe','A2v5qxq','zvf3AhK','z2v0x2y','DNmGC24','yJLKo2i','ztPWCMu','vgHLigG','AwvSzca','otbWEdS','z2fWoJG','DcbPDca','zwqGyNu','BwfSBg8','Dxm6nNa','wur6qxG','DgG9iJe','Bez1BMm','AeHAu0e','ntuSlJi','C21Hv0q','WPpcI8kmWPtcLq','z251A0q','idqGnc4','uMrlCe8','wYbHBMq','ifbpuLq','BM93','B0XpwKm','wLD1tfq','zMzZzxq','thzOt3G','l2nHBNy','zxjHDgu','zefrEvC','sfzKy28','zMLYzwq','igfUzca','lwzPCNm','EgvKo3q','BeLmvey','wuDdAeK','lM1UlwG','nhWZFde','y3qOCYK','EgDYsMy','DgLVBIK','Fdb8mW','uhPvvMy','zNfcA1O','x3j1BNq','zMfRzq','vvLwB3m','DxrVo3O','zvLdAhC','4OcuigzYyq','BgW+','yw5JztO','tMHhANK','BcbKAxm','yxqSCMC','WO7cLCkoWOFcHG','igLUlwy','DYaTidq','y29SB3i','mtjWEc8','DMLZAwi','AxDIsge','q21irvC','BNrPyxq','Awq9iNm','DwKTBw8','BgLNBG','zxLuwKS','uu5gzxq','Bg9ZztO','DMXUAfK','De1OqMK','uxriv1a','lJCYktS','Ag10s0S','DcbUB24','D3L3sum','z0Diwxq','CK1gvgm','CgXHzuG','zeXmrwu','pJiUmhG','igSWpq','z2HAu3i','WOZcI8kpWO3cIa','y29UDhi','BMfIBgu','yxj7D2K','WOVcICkjWOJcKW','WOVcJmkhWO3cLq','rNHNy2C','mYWXmdy','BM5VDca','BwfUywC','rK13sMe','ztT9','AwvK','B25Jzsa','yKr3t3q','CMLNAhq','rfzgrKW','CNmG','Bg9dAge','ANvTCa','BwuGlsa','nsWYntu','BM9Uzq','o2fSAwC','B24GAwq','BgfZDem','Dgv4Dem','iZrMogy','ihjLCg8','zZO0ChG','tgP5qKu','CMfUC2y','WPlcLmkhWO3cJa','DdPZDge','vKfTBey','msiGC3q','AgvHCfu','qvLmD3y','AdO5nNa','zEkaPJWVCW','Ag9ZDg4','B2jMsq','E29Wywm','yxbZAg8','Aw1HCcW','EKvJBwO','DxzssK4','sKTiEKy','Dw5PDhK','Dg46Ag8','vKXswey','mhWXFdi','ruLuz0y','z2v0','yK9rseu','AgLZig0','Cg9YDge','ywXSoMK','mIiGC3q','B25LoW','CLvZuvm','mNb4idG','q2fTzxi','ywX7zM8','vhjHBNm','AhjLzG','C0PeteG','ywX0','EvPXAhy','nduPoW','DM5RveO','wMz0qNO','yNvMD1m','zsbYzw0','CIb0Agu','zK5sAhi','CNjVCG','AwXLzcW','uhHHs04','EeTzsgS','Dxm6mti','nwmWidm','y2XLyxi','WOVcKSkjWPdcJq','BNrYB2W','DgfYDdS','sMHJq0O','WPtcJmkpWO7cIW','pc9ZCge','ignVBNm','ysXI','i2zMnMi','DNnQvgS','tg9Hzgu','C3zNiIa','ywDQEK4','oMjSDxi','Cg9ZAxq','ihzPzxC','CdO2ChG','wK1WvNK','y29TBwu','nJm0ota0z2fWuxry','D2fYBG','ig9U','zYbIBgK','DdOXnha','ExrLCW','mcbMAwu','WOBcKmksWPhcKa','WONcImktWOVcIW','AvztCw4','EgfJvKS','zxi6mdS','zxnW','ldi1nsW','ywrKCMu','quTXweq','BM90igK','igXPA2u','WPdcKCkkWO/cJa','zgTPDa','DeHLAwC','WO7cI8koWPhcJa','tez4Aeu','mhb4ic0','uhnsreW','Cg9ZDe0','nsWXmdC','Bwvnyw4','yM9Yzgu','zw1ZoMm','FdD8nhW','D29YC3q','C2STy3q','EhL6','BgXxyxi','DgvTCZO','zMXLEa','AxrJAa','mdCSmtu','C2HHzg8','B3nZihq','D0HjB0m','phnTywW','DxnLCI0','wwDvv20','owqIihm','C3fQChu','DcbTyxq','Aw1WBge','vvHkze0','vtGGAxm','lcbUBYa','iMjHy2S','iNrLEhq','WONcJSkvWPxcHW','ihbHBMu','Ag9VA0y','vfnUthK','C2nHBge','kZb4','CMfTzs4','uLLVBLi','zxGTzgK','Awv3','tLPtAha','z2v0vwK','sgvHCca','Dcb3yxm','ifvjiIW','rxngu2q','WORcJmkgWPxcHW','B3i6iZG','Ce1kt1m','BguGy3G','WOJcJmkhWO7cHW','BNq4','BMqU','DhjHBNm','Bg9N','WO7cJ8kmWOJcHG','BMfSrNu','u0LTqwS','r0DFr2e','DfvdD2O','yt0IyMe','B1bIv1e','Fdr8nNW','ntuSmJu','AunTEwW','EgPrz0C','AgvHCca','WPpcK8knWO7cIW','BM8Gz3i','ChG7yMe','iI8+pc8','Aw5N','ALPtEeW','s1jZsei','yMfZzq','DhflB0e','lwrPCMu','yxrLigy','ksWGC28','y2XPzw4','BMTvCLa','E2zVBNq','sLLksM4','ie9o','wMz3quG','BMCGlYa','DxjHimk3','vNbhr1u','ywnRihq','z24TAxq','txHRvxu','WONcLmkoWPpcJW','yMHeEfy','CYbVCNa','s0nWtMK','nxWW','zLzPzxC','vKvsu0K','Eu1Iquy','ueLds1a','ugXHEwu','B25ZB2W','Ds1YB28','WOVcH8kpWO3cJW','C28GC3q','WOZcKmkhWOZcHG','z2fWoJe','D2TlzMm','EtPNCMK','o3bHzgq','DgHLigm','igfYzsa','Bg9NBY0','AxrLBxm','BwvHBG','AxrOie0','Dg9WoI0','zsbUB3q','reXYyxy','WOZcI8kmWOBcJW','y0LUChu','wxbVEgO','ChGVms4','ysGYndy','D09PvNq','ldi5lc4','Aw5Lza','CIb5B3u','z2HWAum','AvvxzKm','zMXLEdO','EwvZ','Be9rt1i','rMvHBgy','Aw1Lsxm','AxHoq1y','swzKvey','zxiTC2u','y29Uy2e','CMvJDgK','qwjzzhe','vM1hBMi','z0Tsy1K','z2H0oJC','Egndswm','uLzJA1C','B01TBwG','yxrHihi','yxjKlxi','zMvSDvy','B2X2zwq','Awq7z3i','tLvdvuC','mhGXoa','B2fYzca','BgLNBI0','surfige','C3nUBLm','yxbWBgK','WOJcKCkvWPlcKG','WOFcI8kiWPdcJG','s25Nzgm','Cgv0ywW','zNLSsuy','lde3nYW','sg9VA3m','yxjKlxq','yxzxy1C','sMPNBhK','lwnHCMq','mhWX','zNvsuwm','ihn0EwW','yNv0Dg8','sgvHBhq','zxHWB3i','AwnmB2u','DMvYE2y','psjZDZi','DZOWidi','A29OD04','DcbUBYa','AwrLCG','WOFcH8kjWPlcJq','AgLqyNe','yKvet0u','wNHAtLq','nZH2AdS','nsaWlti','yxHSDgK','icbTzw0','EfjuAxq','zxCGy2e','zcb3yxm','y215vhK','m2HAqNzxta','ysbNyw0','CgvYBw8','uePmDxy','icHZB3u','oI40o30','DhLWzu4','oJHWEdS','CgrHDgu','n3W4Fde','C2v0tge','EKLYuee','lNnRlwG','tNHcseW','CKfKAg4','C3LUyW','BNq6mte','WOFcLmkrWPxcJW','B2XZoJO','u3L6zwC','rwPiB2q','rMv4Du8','BYbHihq','CgfJAxq','iNjVDw4','BhKGCg8','AKvZu2y','lJv6iIa','zxzLCNK','jsKGmta','turuB00','yMfYzsa','zwDPC3q','lNnRlxa','CMvKige','zM8Qksa','EvzVALC','ocWYndi','AKnNu0e','r0fxzNO','ywXPz24','BuPYwxK','A2DYB3u','D2fZBvq','Aw50BYa','nxb4o2G','y3Pkrei','EMu6mte','yxjHBxm','ywiUywm','Evvnrw4','EuHiBMu','lc40nsK','r0H5rhq','lcbuyw0','ig1HBMe','z2uUrgu','oYi+ltW','DgHLigC','Bg9JywW','DKLHt0i','q0XpBfy','o3rVCdO','D1nVuxK','kdaSmcW','D2DLr1m','rgjsweW','yY1IzxO','o2jHy2S','Au9Zq2W','ze1zzxG','yw5KigG','y2uSq28','BwuGD2u','uNvUDgK','rJKGDhC','CgfYzw4','Dw5KoNq','oInMn2u','u2vSzwm','DgHLiha','DgvK','ELnSB04','qNLjza','CYGXlJe','B246ywi','t2zMC2u','yxrHBJi','yMrHowm','B1LWwNm','icaHia','Berkz20','Bwv0ywq','r2v0Dgu','nZKSmtq','yM9VBa','sLfVtLa','zhmGB24','WPdcICkpWO7cKW','lxDLAwC','DM5uqw0','y0TVy0i','z3jHyMi','wgnTqNK','zw5LBwK','ohb4ide','B24Gzge','DMfS','z2jHkdi','Eu5sENO','WOVcH8khWPlcKa','CMvWB3i','WOVcISkhWONcKq','EePkBLK','B2jIEsa','ExnKsg8','vgzUA1e','Aw5Ozxi','s293AKS','wMnxt0e','DwD5rfy','WOBcHSkmWPtcIW','igq9iK0','yMXLig4','CZOXmha','CfjkC00','psjWywq','ChG7Bwe','BMq6Dhi','r2fTzq','A0TluMu','DgHLBG','B2SGEwu','Bs11AsW','uMvpwgC','ywLSzwq','C2L0Aw8','C2v0Dgu','DciGC3q','nNb4o2G','v0nUshO','CeLgvge','sMjNExm','yMX5lum','nNWXmNW','Aw9Uihu','WO7cK8kpWO3cIa','mJu1lc4','z2v0q28','nIiGC3q','ktTIB3i','Bw92zvq','psjIywm','DgfYz2u','m3WW','Dhj1zsi','B2TLpsi','ihDHCYa','Cg9PBNq','DcbHBIa','zhnStw8','A3TOzwK','tIbIEsa','yw55ihC','u3LHA3O','lwXPBMu','Ec13Awq','AgvHza','C2vSzwe','zJmY','tMrcz0W','Fdf8nNW','zw50lwm','Dg9tDhi','Dhj4whC','B24+','B25VC3a','WPpcH8kpWO/cKW','rfntDMW','AMLowLG','AguGAg8','mNb4idC','zLriEem','BM90ig0','mIaXmK0','EgDNC1G','BJWVyNu','DerHDge','suTWCei','iJ5tCgu','ywqGzNi','rxPKz0u','zw9VDvK','BMPhy3K','Dwvmrfi','icaGy28','DhnPzgu','CMzSB3C','yMfS','yxjHBMm','CJPYz2i','WONcK8kuWO7cJa','u2TSANq','mhHKma','uvDkugO','WPdcKSkoWO7cHW','AezlzNC','Dg91y2G','DePvvue','rgndC2C','CM06BM8','Ag90CYa','yMeOmJq','iNnUyxa','zxH0','A3mUBgu','qwn0Aw8','quH6BfG','Dxm6mta','zcbPCYa','z092AK8','CJOJzJC','osWGDhu','z05KsK4','BgvY','ChbLyxi','svrvCxy','qNvPBgq','zMy8l2i','C3mGmhG','CMfUC3a','oImYyta','DvznDhm','WPhcLCkhWOJcKq','igzPzwW','nIWUotu','Aw1Lr2e','AKD6q2G','y3vZ','zxr1CM4','y2SIpJW','AxHLzdS','WOJcKCklWOFcHW','lGOk','D2L0y2G','zLfPAKu','CeXMsxC','BIbuyw0','uKz3sva','CMrLCI0','Dde2','WPhcICktWONcIq','z2v0rMW','zw50igK','pc9KAxy','zxjZyc4','rxPPCfm','yw1Ligy','ig9IAMu','DgG6nNa','DcHHDxq','zNvxD1O','CNmkEwe','lde0mYW','DfDbB0C','wgzuDeu','v1fNwMy','WO/cKCksWPtcIG','WOZcISkjWPdcJa','B3i6i2y','ALbnCeq','BIbPzNi','WOVcKCknWORcIW','mwzYksK','s2rSDxC','y2f5q28','vwjmsgO','WOVcLmkiWPdcIa','mZv6wNPbDg0','idaGyxu','r2z3wM0','BhKUieG','DMLLDYa','iey3ica','oNbYzs0','CdOXmha','q29WAwu','Bw4TBwe','yM90CW','BffLDw4','y3L0A24','EdTOzwK','wg1wDKS','C1jHv2m','DdPUB24','C3bSyxK','ywX1zt0','wxPHwLa','CMfUihK','BezWuKS','CMvHzca','y1LvwKO','zcb0Agu','ChG7Fq','pc9IpG','uvrKvKK','CgHVDg8','yM9VBgu','CMfTzsa','mhW1Fdi','nxm0idi','z0PTrgW','DvDWBLq','B3jT','iJ5dB3a','igjVDhm','ywrPDxm','oMnVBhu','DgHPBMC','zhrOoJi','mtjWEca','DKTcDvu','WOZcJCkvWONcIG','wMX3uKW','wuzbzhm','C2fUzsa','C2LUz2W','BwuOkq','C2vSzwm','WO7cKSkqWOJcKq','rwDxq3C','zuj1yuq','mcaWida','AwzPzwq','thDnC2q','DgfU','WPhcKSkpWPdcJG','wxDZr24','AguGD3i','ihrOAw4','ANnUCgC','C291CMm','r2P0sgq','z0XHBhG','Fdv8mhW','u3jLExy','CM94s0u','zwn0zwq','B3vUzdO','yK1Vy2e','lNnRlwm','AwvYkc4','Bg9YoNi','ohWZFdK','C2v0uhi','mcaXChG','DMvYEsa','yw5ZAxq','AfDUBee','WOJcKCkvWPpcHW','wNHkA24','WOJcKmkvWO7cLa','vvHowK4','yMPJyKi','B3j5','yxbpEwO','ic8G','Bhfou1u','B2SGAxm','BIaUC2S','rKv2EKi','wwDQANq','mdT9','oMLUC2u','mhGZma','WOVcKmknWPxcHG','DwPYAwe','yM94zxm','DhLxzwi','uefZvxm','DwD6Avy','z0PhqLa','lMrSBa','u2vZC2K','DeviEva','AM9PBG','qwzTyKe','yxbWzw4','CMvMAxG','CeTRAvy','lxDPzhq','sYbZy3i','z2fTzsa','D1HTzgy','u2TSzuG','o3DVCMq','WPdcH8kgWOJcJG','yxnZtMe','zwfKE2q','oM1PBIG','zuj4tuW','zhrOoJG','vujKtLe','txfKsvy','DNjREwy','Bg9YoIm','WONcJSkgWPxcJa','zvbSDwC','CMqTAgu','A0DUquS','tg9VAW','nIa2Bde','Fdn8mNW','ztTZDhi','o29Wywm','zw1WDhK','zgLMzMu','AguGBgK','EcXJywW','sM5zr3G','zvzgy2G','B2XLig4','Dw50','mhG3yW','mtaIihi','BwfUEq','C2v0sgK','yMvttgG','y2uGyM8','B2XVCJO','ig9Uihq','C2STBwq','Ewf3','nxWXFdm','icaZlIa','i3n3mI0','ywqU','rwHwv0m','C2XPzgu','BfDHCNO','y2XHC3m','vMf5B3e','DgHLig8','ENrRuuu','B3bLBG','CdO4ChG','yMeOmJu','cNLHDYa','DdTIB3i','s1rJBwq','C2fUzq','DxjHtwu','yxbWzwe','qKvhsu4','WO7cLCkvWOZcJa','BLj1BNq','AwTcu3C','BM90zq','wNfzzuK','zg93BG','BMD0AcW','C3vYDMu','nhWZFdi','CMv7zM8','Bw92zq','BMfTzq','z2fTzvm','vxbcwKm','BwLU','yK9IuMW','A3vxC3i','uwTrwgq','zKHeC2G','CZPJzw4','iIbMAwW','WONcICkoWPlcIq','BefZs3y','uwnhtxm','zxj7y28','AgLZiha','yuzYB20','BK5LDhC','wfjOq3G','zsbVyMO','ufffwfe','lGOkswy','rNLZugC','BgqGB2y','z3zdug0','ywWGB24','zfHhCfG','z2v0x3a','DNbJBhy','C2r2C3K','BM8GD2e','uNbxwey','tNPeyNa','C1PfCLm','ChrY','DMLLD0G','rKnlqw4','z0HmqKC','BMCGB24','C2LU','r0PqALy','iIbZDhK','u0D6wMS','AgvkEwu','rwz1Dva','zM92u2e','DMLZDwe','WOBcJ8kvWPlcKG','lt4GDM8','tePOr1C','EMXLBgC','DxjUzwq','zKzYvMu','Et8Pica','yxjJ','wKjeDuG','CMeTzxm','C2v0qxq','mIWYosW','rwP2y0K','u2j4sgC','zxG7zMW','Cg9Z','BurPs0C','nZq4mZy','ueDfwwm','DxrVo2i','EKvHt1y','z0rXy0e','yLnMB2q','rfj0zuq','zwqG','ywXSvMu','Cw5XueO','ywjZ','yxrnCW','BgfZDeu','Ec8XlJq','EdSIpNy','AhrUzxm','qvHotve','zMfPBgu','nsiGC3q','psiXnJa','tuzSsMi','WO7cKmkrWPtcJG','ywrKrxy','uLPszxq','EdTHBgK','Dgf5CYa','rhnrr3e','BwfYz2K','o21PBI0','u0f3t3K','qu5oAKO','lxnOywq','WPpcLCkvWPpcIG','oMf1Dg8','zw50rwW','WPdcKCkoWO/cIq','vgHLigy','BNrLCI0','z2v0x3q','o3DPzhq','DMvJmG','CMvTB3y','CMrLCJO','Be1Zwgu','y2S7zM8','CuzAq2K','CvvwAeS','DcGJzMy','AgL0zs0','zsbZDhi','lcbnzxq','z2v0q2W','y2fUDMe','rxLL','A3LyCwy','zxjZ','WPhcKCkjWPhcKG','rJyGywW','nNb4o2i','y2X1C3q','z2v0rwW','yxvSDa','C2vnzvi','Dw5UAw4','mdT0B3a','zfzvu04','mNb4o20','ENPHBNi','C2XPy2u','nxW3Fda','BuzLEhq','Acbxzwi','zY4G','i2jKytK','re9nq28','D3jHCdS','AwrLBNq','z2XVyMe','C3bYAw4','yxa6nha','wKLcv1y','B3qGD2K','wuPxr1i','EuLcEgq','ignYB3m','WPxcLmklWPpcIG','DgvYzwq','vMfhBwm','AgvYAxq','quT5uw4','yxjKlwG','t3DbD2i','idaGlYa','i2zMzdq','yM9KEq','rhL5wxi','ENvIwMG','EuDQAgK','ANrwywq','vxvVu3m','DxDTAYa','C21jtNK','ic0Gy2e','ifnxlva','ig9Uia','BMq7Fq','zwqGEwu','vNnhuem','Au1UvLa','pJWVzgK','DMvYDgK','y2fWC3u','AwqGzg8','Bg93oMG','lZeUndu','BfjHDgK','DhPytMK','AwvNqu0','zwvMntS','vvDnsY4','s1rYEgy','r1fbr1K','wxDRzwO','B3vUDa','Aw5WDxq','DxjYzw4','tuzlDMy','B25Z','oJa7EI0','CcbHBMq','zMLSBa','zgvYlxi','Dc5wywW','txLJCMO','zwqGysa','Bgf0zvK','zwqGlsa','WOBcH8ktWOJcJW','rerwANC','yxbP','s3Pxs3C','rw5LBxK','BhrLCJO','CKXPC3q','BMLovhq','DfjIr0C','yNvMzMu','WPtcKmkuWOZcLa','WPtcH8klWO3cIq','rviGD2K','qxnZzw0','D2PvB2W','AgftEgS','CwTJsxi','r1Dcv2m','nc00lJu','B206nNa','Awr0AdO','CMf3ugK','A2v5CW','nhWXFdi','WOBcJ8kvWOBcHW','AMvVtei','lJGYktS','zxH0lwe','rgnptuu','CYbYzwC','ChP6qLa','WO3cLmksWPpcKG','AxrPywW','ChbLCIa','DujAvfO','oJi1ChG','Cc1JDG','DxjHvge','BNqTC2K','D2H5','EgvZlIa','igfYBwu','ig9MzG','u0Hsu0m','WOBcH8khWO7cLa','B2PPDeG','ihbHC3m','CMfKAxu','Efv1zwS','mhGXma','CYXTB24','tefzrvi','u2nPDM8','CMvK','wM9Twe0','zciGC3q','z1LIv1m','igzHA2u','C3vI','uwDYBgK','CgrVrKu','DMvYBg8','uKXKtxa','EMDJwfG','ywjwEgi','reXishC','sNjsDgm','vufSyNG','BgX3yxi','yuPNANe','Cu9pu2G','mJHWEdS','zKnjuhq','BhvTBJS','EtPUB24','qM5lBee','DcaWicG','r2fTzsG','vvrYv00','vKXPrem','BMv2zxi','qLPQy1q','uu9Rt0C','B2r5','rvnqig8','BJ0ICM8','WPhcImksWO3cHW','veLwrq','B29WEei','mhb4oW','rgLHz24','CNvdtuG','suTisMy','s25rvLC','WOZcICkoWOBcHG','ysbtA2K','zhvStfu','yIXH','lxnPEMu','Dg9W','mhb4idu','o2zVBNq','rg9ctNu','ieeGAg8','WPpcICkvWPlcKa','q291BNq','zwqGlYa','tw9KDwW','WOBcI8koWO/cHG','AxjLuhi','DcbIzwu','sgvPz2G','Aw9UoMy','wM16DMW','BgLKihi','B25NpG','rKLSCLe','nNW0FdC','AwjZvKe','z3jVDw4','DY4Guhi','C29SAwq','BYb3zsa','Bc5ZAg8','B3rYB2W','Agn6twm','CgfIyKS','zg9Rs3q','t21mthq','AwzLig8','u3H1vhe','i2zMogy','suTcA1O','ign1yMK','serqt3a','B3i6Cg8','qM9Mywe','ihrOAxm','qvLNzfq','DMfSDwu','y0nLt0W','tuSGq08','ieaG','uuLxCMu','mcWUntu','DxjHpc8','B25TB3u','lJi1ktS','ihnVBgK','r2fsu3G','BNq7y28','mJmZnZG1vxPwAevj','DgDjrge','sNbHr0e','ywz0zxi','u0r1yLq','oJrWEca','y29WEq','mhW0Fde','lxjHzgK','sMnMv1i','y29Z','t0f2Cum','lJq1ktS','lwe9iG','oJOTD2u','zsbLDMu','AgvHBhq','DwDPBI4','zxa9iJa','BMqIihm','Dw9oD1y','nZu7Bwe','l3nWyw4','yLnesvy','z2LZDgu','Aw5KzxG','DeflrKy','ktTJB2W','Fdz8mxW','CJOXChG','CMeTBwu','s2XqDue','ys1ZDY0','CxvLCNK','B3G9iJa','qKD1ENi','zNbZ','vNrWwxG','r3fNAgu','Agr0wui','nsK7Dhi','Dxm6nta','CMvIDwK','yxiTDgG','WPtcJCkhWPtcJq','C2STDMe','zhfWzge','zxDuyMq','q29WEsa','EtPMBgu','rxLXvxm','qvbvoca','idaGmca','vvjbx1m','mNm7Fq','qMLpvvu','BNnPDgK','Cvzwsge','BuzJDxy','rxHJEMy','D3jHCha','zNDK','BLzlwKi','WOJcJSkiWOVcKa','WPpcImktWOJcLq','BgqGAxm','uLLMvva','y29Kzq','rw5LBwK','igzSB28','lc45kq','BIbtruu','oNjNyMe','C3r5Bgu','BgvHCG','WOZcH8kvWPpcIW','BMCGyxq','AKPmrxC','BMqGEwe','igHHy2S','D257B3a','vwTlzhq','BNnLDca','DMLLDZO','yw1LihC','DMfYkc0','Bgu9iM0','WO7cKCksWOFcIq','BxjlEwG','wePlCNC','CNmP','WOBcISkpWO/cIq','BgvYkW','twPeCKK','B29RCW','Fdf8ma','igLZihi','weHbwMi','B3rO','r01rr0O','mhG5oa','BMrVDY4','WO3cICkqWPpcIG','WONcJCkpWOFcKq','Aw50iIa','AeXXCfi','qujMD3q','Dhj1zq','AvLqBLK','nYWUmty','wxvPzge','ig9Mia','y2fTia','DMHZDfa','C3rHBgu','DJiTy3m','uwHtvu8','C2L6ztO','vKLt','B3DUkq','phbYzsa','nhb4o3q','ktTWB2K','u29bEKG','ltiUns0','C2v0sxq','lJC1ktS','oIm4zdC','CLbvzNO','DMvK','A1ngyNG','Ag9VA1a','lNnRlxy','DgHLige','BNvTyMu','Avj1Agi','qwX5AwW','icbVzMy','BNnWyxi','z0DvzLG','WOZcK8krWORcIq','mNb4o3a','AwDUlwm','BwvTB3i','rurhq3G','y21K','C2rrwfq','yM5Mzee','WPdcH8kjWOJcJG','Ewf3r2u','pZWVC3a','iefdveK','mxb4o2m','BNrPBca','WOZcICkrWPxcKa','tgntB1C','D0HSre8','B3zLCMy','EKzAD0e','ihvPlw0','DMLLDY0','DZiTyM8','sg9AzMW','yMvHCMK','qwHTuKC','ywLSywi','B3vUzci','quHfAKK','yNbWquK','ywnLo3C','ic0+ia','WORcISkqWOJcJa','yvPKt28','idi0iJ4','ifrOzsa','EKrgDMS','shbLzMm','wuPcANC','txvSDgK','uMvZzxq','WOVcLmktWOBcJa','nhb4ide','yxrPB24','yKX5B1i','B2TLlxC','kdi1nsW','tg9VA0a','B3vYy2u','BM9Yzwq','Dxnuv3K','WONcJmknWOVcJW','igfJDgK','ufKGve8','lNjLC28','vw5Nu08','uMvMDxm','psjTBI0','EcbZB2W','A2v5','AhHQrKC','Cfr1vuS','DMGGlsa','BwfW','mtTJB2W','yw5Jzsa','Cg9YDca','lwzHBwK','C25uEfq','lxjLCgu','Fdn8mq','AgfZtw8','C3mP','DNzfwvC','DxnPyMW','rwPiEgy','C3rHBMm','s3nKtwK','B3qGCgK','AwfHzhq','zfj3q28','CNqP','igL0ige','t0L6uMi','zsGP','Dgv4Dee','igjSB2m','idyWCYa','zxntsMG','uKvRwvq','v19F','wwfxu0K','DMvKia','m3WYFda','B21cExC','y1jvwfq','Dw5Kzwy','zZOXmxa','AwXKlca','lwL0zw0','yZfKo2m','yNL0zuW','iZjHmgy','CMfJDgu','C3rHy2S','CYb1BNi','B2SGzMK','zxiGCMu','DMvhyw0','zhfoshm','WPxcImktWOFcIq','igrHDge','B250zw4','zuL0zw0','CgXcuLy','ywjSzsa','C3rYAw4','uLbftvy','WPtcKmkjWOZcJG','zcbKAwe','WO/cI8koWO3cJW','nduPo2i','ms4WEdW','i2y3zwu','AfLHu0C','zwqGDgG','WPhcImkvWOJcIa','B3nWywm','WOBcLCklWOBcKq','ihbHz2u','ihrOzsa','DhjVA2u','CNnVCJO','i2zMzJa','BgLKzxi','nYWUnYK','AgDlzuO','mtm1nZmWohP6reHQqq','y3rZimk3','mxb4idy','ChvZAa','DxHfrue','CMvMDxm','r1DgELu','z01RzLG','rvrfC2q','Agv4','zgLZCgW','Bw4TBg8','WOVcKCksWO7cHW','DhDPy2u','mxWXnhW','ihvWk2q','Cd0Imc4','rNvbquG','AwvNBwC','zMvLDa','mda7Bwe','zw1VCNK','BhvLica','EdOYmtq','AMjHD3O','vMXfwwO','CwLXEKS','AgvPz2G','yxK6zMW','uKPlre8','iZe1mgm','DKvguLq','BguGkhW','Aw5NoJi','zhmGWRCG','B3i6','DxjH','igLKpsi','AwPRyMG','y2fSBa','ohb4o2G','ldi0mIW','ChjLDMu','AMLhvMi','ndySmJm','iIbZDgu','zJu7yM8','nIWYmZG','y2fTuhq','vuLuveu','mtq1otC0AvbnB1jM','z3Lhrxa','ndHWEcK','mhG0ma','AgLSza','zM9UDc0','B2f0CYa','y3vYC28','Ag90icG','Ahq6nZa','B246zMK','igDHBwu','AwrLE2q','Aw5PDgu','lgnHBgm','EdTMB24','BMDJDw8','lNnRlwi','BcbHz2e','BMu7Fq','psiXmIi','ihjNyMe','ig9Yihq','mtrWEdS','EdTMBgu','DK1qyMO','zxnJ','z2H0oJm','AxnWBge','WOJcLmkoWO3cKW','lwnOzwm','BdPPBMK','EwzKqxG','zMfSC2u','CgfKrw4','vxjwvhq','B2XZE2y','zKXys0S','EI51C2u','Aw4TyM8','zxi7D2K','imk3ihrL','WPtcJCkhWOFcIG','z3PKsgy','DfDPzhq','wwPwuge','zM9Sza','CMeTC3C','CIaO','WPlcKCkiWOZcKa','WOBcLCkvWPhcIq','zNbes3i','Dff6ueO','s0vxEe0','Dte2','BNrxAw4','CKnVBNq','q1rsCvO','z2fTzq','B25PBNa','Dw1Uo2C','B1zLvuW','mtu3lc4','vvDJBwW','vxbKyxq','DhLWzum','icaGica','qu5pveG','mNb4o2G','yvHsr3y','AuX5v2y','ks4G','whD1wM4','twjcvvK','DgfN','Aw9UrM8','u3fjCNq','ltqTnY4','Aw5Ly2e','A3rpzvC','EsbPBIa','oMzPEgu','BwuUx2C','CMf3qq','sLzzvNK','zxrVBG','yMfY','vLz0EMO','uxvrsM0','WO/cLCkjWO7cIW','zerUqNG','rLj3z3i','mhHIna','iZaWmdS','BM8Gvxa','B2jMrG','WOJcICkpWPhcLa','m3b4o2y','WOJcH8ktWOZcLa','Dg90ywW','mJeSmti','zxi7Dxm','yxbWBhK','tKnmz1G','rLbty28','lxaSnta','A2uTBgK','zM5KyLu','sgvHCa','yxjzvgu','r0rOD1e','WPpcI8kuWPtcLa','z1PSrwq','WRaSig91','DgnO','zvriqMi','EsbHigq','CMD4C2q','z2zSA0q','B21Tyw4','lNnRlw4','yYbYzxq','y2fS','nYWUocK','mhb4o2y','Bwf4kdi','zgLMzG','Bgu9iMm','yMHIC3G','rgvSDge','ENvlvg0','zhDsv2e','Bwf4','zJy0','EcbYz2i','vgHLigC','zgf0zsG','EuTuy3O','y2XVC2u','AcbMAwu','WONcISkgWPlcIq','ihbVC3q','vgv4Da','DgHLigW','A3jTzve','y29UDgu','CIiGDhK','B3CGkey','wuzbsLe','ztT0B3a','mNb4o2i','WO7cJmkqWORcJa','WORcJmkvWPpcJq','BgfZlg0','n2e2ntG','Ec8XlJm','tK10yNu','y29TyMe','WOBcISkoWOVcIa','vgHPCYa','DYaGia','r0D0qve','Ds1JC3m','CI1Yywq','DgeTyt0','zw50o2i','y2fWDhu','WPxcKmktWPpcIG','Awv3igK','C0fJCfO','BgPouuS','WOZcJ8kgWPxcLa','AtmY','zxrOAw4','mtaSmte','zeDyBLG','B2TLoMm','ysGYntu','zw5HyMW','mhGYyYa','u2X3q0u','zsbYzxa','B3n0zMK','CMvSyxq','ig1LBNu','zw5Jzsa','tw91C2u','vKTPsLG','vvDHrwC','C3LUy3m','zxqSig8','BNnMB3i','Fdb8nNW','vgHLz28','zw1LBNq','lsbvBMK','EIaTihC','nNb4o3C','WO/cI8kiWOFcHG','EeXLD3e','zhLWvuW','E3bVC2K','zw1mqLy','nZq4mZa','t2DsrKW','v2TYyNa','BhjSs1K','Aw5ZDge','BI5FCNu','DcbPzd0','igDSB2i','Bgu9iMq','EKf2zwm','y2vUDgu','yLLfBgW','icdcTYaG','q0zTvNq','AwDODdO','q0T1y3i','BJOG','B2jM','ucbVBJW','CNqGihq','FdH8nhW','yMX5lMK','DYGWida','EwXLpsi','i2zMnMu','C2v0','ihnRAxa','WOVcImknWOFcKa','x19tquS','WPxcISkrWPxcKG','qNPSDLC','q21jvMi','EfHHA0m','ChbOExO','sgn6yNK','mtjWEdS','y3nZvgu','u2vNB2u','uIbbq1q','BfrPr3y','rfPRDxC','AMDksuG','pt09u0e','DgG6mZq','lM1UlwW','WORcJSksWPxcIW','rwTtDfK','WOFcJCkpWO3cLq','zxjYB3i','iZHKn2e','CgvKigi','ELL6uvy','idHWEdS','rMrJA1K','oJiXndC','y0Ttu2W','AgLdB3C','lcbZDgu','x19hzw4','zMLLBgq','B2yGCMe','sffpBM0','WO7cKSkrWOJcKG','zsbHCha','WOJcKmkvWONcJq','idaGmJq','DMD7D2K','WOFcH8kmWOBcHG','lxDLyMS','EdTIywm','yxjKlM8','Bwvlzhe','zgf0yq','BMDL','DhjVEq','zciVpG','Aw5ZDgu','WOFcJSkjWO7cKq','uhjxqNC','y2fTzxi','ywn0B3i','ChnfD2i','vvzmqwq','ELbMBNK','AwqGCMC','v2vQCei','BMfNzxi','w2rHDge','zwjdDuC','C3zNpG','sfrnta','pc9ZBwe','igLZigy','A05ps00','AM9yB2y','DxnAsxO','BI1PDgu','EKf2Dhm','zwz0ic4','CKv3vuy','AfnIqLy','CZ0NC2S','B3v0','C3rHDhu','q2HPBgq','tg9VAYS','uMnzyui','CwrJu1C','Bwf4lxC','lNnRlw0','wxber0q','DgvYE2W','zvn0EwW','ztOXms4','swLcve4','CMuGkhi','icaGia','iZDLzta','o2DHCdO','Fde1Fde','WONcLCksWPdcHG','EwzJthO','xtO6ywy','yw1Ltwe','EI1PBMq','ywLUAw4','qNzhuK4','ifnxlvC','C28GDgG','v0jNuhu','v0frzNG','DezZuM0','BxLJB2O','zMfJDg8','yMfZAxm','B3bLCNq','u0vtDuW','AwzYyw0','C3fYDa','zYbMB3i','zgvMAw4','Bu1hy2e','AwnOigy','khrOAxm','iokaLcbUBW','zMLYzsa','ww5HyLK','iJ5VCgu','zgXkDg8','C0jmz0e','B3v0idK','BMq6i2y','y293A3q','u2fRDxi','r1jXwKG','Bwf4psi','CgfPCKG','Dg8Gy2W','sKvxwu4','zg9suKW','kZb4mJK','Cff0s04','zgL2','igfWCgW','yt0IC3q','vgfTCgu','y1HPDxe','qxbWBgK','Dg9YqwW','AwDUlwK','B2zMihq','BgXuwxa','zKLJDLe','v2fSAYa','zM9YBq','BvfcDg0','icbVyMO','yxjT','tgTqC1O','ys1ZDW','lwjYzwe','owq7y28','Bw1Tt3i','Dw5PDa','CwnXrw0','zvnVAha','B250lxm','sujIuLq','DMvYE2m','khmPihq','A2v5vhK','WPxcICklWO3cIG','lc4WnsK','zNr3zhK','DLfXvxK','lwTD','CMvZB2W','lM1Ulxm','vxnNEg8','vNbTz0W','DcaOC28','zgvIDwC','zxr3B3i','Dc1ZAxO','CvLPDgq','nZCSlJq','ywrKAw4','CNDszge','zwXWyKm','y29SCW','B1LKqw4','wLHnEMS','Cc1SzW','ChGGC28','yxjTAw4','zJzIowq','oJe7BwK','C29SDxq','v05SrNu','veLJvMy','B1jwq3a','DxnLtg8','B2TZihi','BNrPBwu','AxzLo3C','zt0Iy28','rfjhwLi','BwvUDs0','q29TCgW','C3bHy2u','icHNDwu','CYbLBMu','id0G','Dw5KoNi','nxWYFdy','wwvJvwy','vM9vB1m','ltiUnsa','lxnWzwu','BwLUkdu','Dw1IE2i','Dg9gAxG','mJrWEa','BNn0yw4','ihbHDgm','qNHrENy','ztT3Awq','ugf0Aa','iM5VBMu','y2fUzgK','tKrUqMi','A1nrCMu','Bg9dseO','B2DNzwq','yMzSA0S','zunKBwe','ChG7yM8','BNrLCJS','B3jTihi','z05fEhC','C3rYB2S','z25HDhu','suzoAwC','CgPfs28','DgX7zgK','B25JBgK','BM8Gtw8','mtK5mty0DgLHEePl','B3vUzcW','kdi0lde','B2XPzca','C3rHCNq','wMHms2m','zxmGBM8','WPhcH8koWORcJq','wvP6u1O','ktTIB3G','yNvPBhq','C25HCa','uMvWB3i','BMq6CMC','D0DRs3y','vhLcA3q','mNb4o3O','tNPvBKq','uMrkCvm','rhnHzMG','zxi7z2e','v0PAq1O','DxHRD0K','wxj2EKy','C2v0qG','AxjZDca','tMrSA2G','DhrVBtO','ELfdu1q','oMLUAgu','icbOB28','BwLLCYa','r2zzthO','AfnJCMK','BNrLEhq','tgf0zvu','CMv0','igfYBwK','CMvUDca','zg93oMK','EvrHCa','C2STBM8','ihn0CM8','WPhcICkuWORcKG','C2nYyxq','C3rLBMu','AwDPBMe','Dw1Uo2e','BMuGAg8','otK7y3u','ihn0yxK','pc9ZDhi','BwLZC2u','nYWUnsK','oJrWEdS','oc00lJu','ChGGlte','EdT9','zgLUzZO','BI13Awq','qxrbCM0','wLfUwva','Dg9Y','EfPfDMm','zuXyuee','qMLUzgK','DxjJzq','C3bSAxq','Bw91C2u','tKPwCuO','sKPkuNq','AKvmy0O','mtbWEdS','tKfxquu','zMLSDgu','s0D2zwq','sKTwrNa','CMvKia','DwT4uLG','ig9MzNm','y2uSihm','igHVB2S','Ag55vum','uuLtEMO','CMvWBge','yxmGAwq','DNf6rMm','B3bAr3y','vMfSDwu','z1vyr2G','u3rRzfO','BMC6nha','kdiYChG','CM4Gywi','qM94zxm','t2zHD3i','DwvYthO','WPxcJ8kgWOJcKq','EMnNCKG','z2H0oJe','Aw9U','zvL0tu4','rwfNv04','rvHxBg4','ys1Hpsi','zgL1CZO','DdOXmxa','zejzBNa','WORcJSknWORcKq','ys1Tzw4','ig1PBJ0','sfPKCwK','yMvNAw4','tuXpAfa','CMf3wwe','Bwj7lxC','Bwvhyw0','rfjJA2G','DxrVo30','u0TjteW','zNbsqvC','mIWUocK','tgLZDa','FdD8mNW','vevVs0G','pc9WCMu','Aw5KB3C','ztT0CMe','zunOAwW','zeLKqxK','tw1ND1y','zuvSzw0','u2HLrue','v29YBgq','y2GUC3K','zw4Gyw4','zxrL','yvH0Du8','v2vItw8','yufoCMe','lM1Ulwm','zdTYAwC','B3jPz2K','uenMz3e','Axr5ic4','mhHKna','zwjRAxq','zxnVBhy','DxHlBfm','Ag90','zwfJAge','kdeWmhy','Dg9YicS','Bw4TC2K','sKjYywy','WORcI8knWPtcJG','zgvUDgK','Aw50E2q','DhLSzt0','DwfADuC','t2f0t3C','C3bLzwq','AgL0CW','icbJyw0','lxrYywm','B25LoYi','WORcICkoWO3cJq','mJbWEcK','qK5PteO','DcbYzwy','B29M','yMTPDc0','z2LMEq','igjVDgG','WPxcImkiWONcLa','CIiGC3q','CwHYCfm','twzvANK','CNvUBMK','y1LqyMq','Fdr8mNW','oJfWEca','v2zHC1O','z2nKq2i','Bw4TDg8','teDyrwW','wLndwwG','DeXWtKG','AhHtzMS','C2STC2W','BM8TBwu','ufDsr2q','shzdtNa','tKHItge','BMnLCW','A2v5zg8','DhHkvvy','ksaTigy','ksbHBMq','BdPUB24','o2zSzxG','B2LUDgu','C1zbz2S','DdO3mda','A3mGD2G','mdTMB24','BgvJDdO','B3vWig8','t09Nt00','wgLZvMO','B3b3tgK','vurcyKC','CgLUzYa','s3nntgi','zxnZywC','mJuZmJe3n2DsyvLzsq','qNjHy2S','BcWk','Bgu9iMi','mhGYma','C3rVCfa','CNmGyxi','rgLMzIa','ELDnAxi','Eca4ChG','ihnHBxa','khmPigq','lJe4ktS','CxvHDa','DgvZDa','wNbYsuK','yMfJA2q','idrWEca','sgHttu0','AMrVCwi','ndGZnJq','Bev3tNC','BgLUzvq','BM8Gzw4','sK5Iv1G','DMvYC2K','4Psa4Psaia','D28GzMW','zgf0zxm','u0XSC3m','qxHuy0O','cIHJBgu','z1jnu0m','C2vYAwy','AMTKy2m','BNfSCgC','yM90Dg8','uNb0rum','yNLsy2S','v1fQCNe','B3r7ywW','C25HChm','Ahvvzhq','qxrgAxi','DgfIBgu','mhW3Fde','CNviC1e','iJ48l2q','WO7cLmktWPpcJq','wLHQyum','tMjirxi','ignOzwm','uwLZCuu','DhLWzq','WOVcImktWOJcKq','AwzkyNC','EdTHy2m','ChG7y3u','BIb0Agu','zevdugy','zxnLihq','WOZcKCkiWPxcJa','BNrezwy','BM8Gseu','yNvPBgq','Ewf3qxq','vhPUthu','D2LKDgG','CZPUB24','ugzSC2S','ufDnu0S','zMLSBfm','tM8GCMu','lYbQDw0','z2v0Dgu','u3jmA0W','AujvsNG','mJq2ldi','AM9PBJ0','lKHfqva','tfrTy0m','C2STBwi','BwuUCMu','lM1Ulw0','sLDQEfi','mxW0FdG','igzVCIa','WOFcJmkgWONcKa','u3bYAw4','BNq6Aw4','ANvZDgK','DwTczMW','Ag9ZDa','ChG7Agu','igvUDhi','yKHhy24','C3rLCa','yxjNAw4','teDVyvK','WPdcImkpWONcIG','reHStee','tfDpzM8','Bw47Fq','zLHiB1m','Axr5oJe','y3rPB24','BMDZ','WPtcH8kmWPhcIG','mcbVzIa','zM92','BwvUDc0','y2XPy2S','Aw50zxi','B2fYza','zw50tgK','zdDHotK','uMvNAxm','Dgv4Dge','rePWv1K','otLWEdS','ihjLywm','DgLVBJO','WOJcKCkvWORcHW','lJKPo2i','zKzzs24','o21HCMC','zM9YBtO','mda7y3u','EdTWywq','DZiTB3u','ns00idC','phn0CM8','sgDhBKm','C2TPBMC','zxLL','BgfIzwW','zg92DMy','BMfWC2G','yxLkufm','B3nPDgK','rMvnuwC','B2f0mZi','mhGYna','mJu1lde','BwL5DeW','zxaGDgG','Aw5Qzwm','zMLYC3q','qNDAEKO','rgHpD1m','rMP1t1G','u3rYAw4','ywj7zgK','WOBcJSkhWONcIG','WONcJCkkWORcKa','B21hyK4','D2fSA2K','WPxcISksWPhcIW','zwXLy3q','suTZExu','qxHqzMO','o2jVCMq','C2TuDwW','zNvUy3q','DIiGC3q','yLvfug4','ywnLlem','DgfSE3a','BM9UztS','lYbZChi','oJi2ChG','oM5VBMu','B3i6CMC','nxW2','wvPvCKC','AZPICMu','Ag9ZA00','CMvWzwe','zhjVCc0','icaGDMe','ywi6Ag8','CgfUzwW','zLnqvgG','DxjHx3m','q2zvsKe','CM93CW','Bg9HDhm','CMvH','rNDNrLe','zxi7zMW','s21jvM0','mtzcDeLKEwm','Bw9YEvq','Fdz8m3W','wuTduuO','AgfKB3C','Axb0ige','zdTTyxi','BhvNAw4','z2v0sxq','qNjLywS','qKjWCLG','EgHSrLy','zgf0yxm','ig5Vigy','u29zre8','WORcKSklWO3cKq','DhjPyNu','zwDxr3G','lwv2zw4','WO7cI8ktWPhcJG','CLvsCwC','zxnWia','CgfKzgK','BKHkBxm','C1DRvKi','oJCWmdS','B09cAgy','zM9UDa','CMuGAwC','DgzqDhi','DvjnEfq','qK9dDLa','ndy7y3u','DwvxCMe','tufLrgO','ELjfEvO','y29WAwu','uMvHC28','DgvZia','icSG','ndzWEdS','igHLEd0','mtyZnta2meLVtfvktW','icaXlIa','B3rLlMu','C3rYB24','CgntBwi','WOVcJ8kjWPpcLa','DvH6B3K','ufPUz3y','CI1LDMu','zgzSt3i','CYb3zxi','mhGXna','z3v3AgW','tw90y3C','zsbWCMu','ufa+pIa','zsbTAw4','B25NlG','oJe7Dhi','CM90yxq','DxjPBMC','u3bLzwq','B2fKzwq','CJT3Awq','z0v4z2m','EIdIGjqG','WOBcJ8kjWPxcKa','zcbYz2i','D1jkz3e','z2v0sw4','ihzPysa','BfjAtKe','WPtcI8kgWORcJG','tuXks2G','C29SDMu','WPdcJCklWPpcIG','B2f0nJq','Ag9VAW','ifnRAwW','DxjgqMe','ic40nxm','AwqTDgu','s2XcrM4','tJWVyNu','yM9Yzfy','mtTTAw4','ifvxtuS','zYbZDxm','Ahq6mJq','DhLSzq','zgrPBMC','AhvKlwm','yMLXzNG','A2LUza','BfvHBKm','zMLUDLe','u1fxEfq','x19ZywS','iJ5gosa','iNnWiIa','WPpcI8kmWO7cIq','Aw5Uzxi','AwvSze8','qKjmBxu','nJiWChG','D2LUzg8','u0PzBem','C2vYDcK','rNjdtg8','ywL0Aw4','BgvMDa','BM8GCgW','yw5ZCge','zsbNyw0','DdmY','EwPorgO','DgG6mJG','zxi6mxa','WPlcImklWPxcIq','Eefgqu4','zsXdB24','ugfUthi','DwXlz24','WOBcK8kuWOVcKG','B246B3a','tg56wfq','Ec1ZAge','CMeTCgu','mtC3lc4','rKfxCuy','BguIihm','yM90Aca','zxHPC3q','uffpAwO','BM90ihi','mxWZ','DxjLzey','yM90q28','t2nNueq','Dxm6n3a','yw1PBMC','ywXSzwq','DhDpvum','idqTnc4','A0HSuhi','BeDqtg4','CgL0y2G','iIbZDhi','mca0ChG','DJiTDge','ztTTyxi','C3PqyLu','CLzrswK','ys1IB3G','CgfJzsW','ldeWnYW','idfWEca','Dc13zwK','yNjjuKm','twHcENC','DxjLzca','rLPSr04','B3rHDgK','Bxm6y2u','lxDYyxa','AxrSzsa','zhvYAw4','svzficG','BgvYigG','WOZcJ8kmWORcKq','z1zezMK','zw50','Axy+','AfD5DMq','CI5KBgW','Dvjrwe8','mZGSmJq','tw9KA2K','Cg9Zqxq','B25Tzxm','DM9Pza','WONcH8kpWPlcLq','C28GAg8','yu54zvu','zvn0CMu','lwfWCgu','D2fZBu0','AxvZoJe','zxzLBNq','A2v5q28','BgXLzca','A2TJtNu','qMPxAhm','CMvZCYa','CMvMCW','uxb6r1q','yNL0zxm','B3Pnthy','ugHVDg8','BvzeD3a','BwvHBNm','Axb0igK','AgvSBg8','Aw50','mhW1','sw5KzxG','wu9ez0W','BgLZDa','AvPxthG','C3bHCMu','WONcKCkgWORcKq','sxDTsva','z0fTvMm','A2v5vxm','ywqGzMe','rvnqig0','nxWZ','AKH2Cva','Awr0AcK','zhvSzq','ChPwDMO','C2v0sw4','BhrlEfu','zfzqvK0','yM94lxm','idmWChG','lwXLzNq','CNj7y28','oMzSzxG','DcaWida','BMnLv3i','B2zMC2u','yvr4Ahy','WPpcKmkiWPlcKa','ig9UBhK','mxb4ihm','yMuGCMu','ysbZDge','rxL3DNu','ksbZyxq','Bgv4oJe','nsWUmdG','BgLUzvC','ExrAtNm','DKDKv2K','Chr1CMu','B2jQzwm','y0Xwsgi','mNW2Fde','lxGIihm','zMXVyxq','CNvUCYa','y2f0','tM8GugG','FdeZFde','uKXutg8','Dg87zMK','whHdtfa','WOFcKSkiWOJcJa','DfznB0m','BNuTCM8','Dhm6yxu','y2u7','WOJcK8kiWPxcIW','C3nPBMC','zgvYoJa','zgv2Awm','te9h','ntTWB2K','zs1JB2W','DgG6mJK','zYbSB28','B2XSzxi','DwDdAve','A2L0lwe','y2HLy2S','WPhcJ8kiWOBcKq','AwnOlJW','ugXmz0G','CIbWywK','zcdcTYa','BwuGAw4','Fdz8oxW','zsDZig8','mJu1ldi','oInMzJy','zwz0oMe','BeflqwK','igTUB3C','ihLLDca','thDVwg4','C2fRDxi','C2fNzq','yxGTAgu','WO/cJmkgWPhcIq','AMvJDhm','y1jdwNy'];_0x2249=function(){return _0x3c8d3d;};return _0x2249();}function _0x500f(_0x3d56c9,_0x5be6c6){_0x3d56c9=_0x3d56c9-(0x1995+-0x1539*-0x1+-0x2d12*0x1);var _0x3d804d=_0x2249();var _0x5a5360=_0x3d804d[_0x3d56c9];if(_0x500f['uOAHPn']===undefined){var _0x1f3806=function(_0x10c4be){var _0x30638e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x56611e='',_0x4c9bec='';for(var _0x394e4e=-0x62a+-0x2*-0xfe7+-0x19a4,_0x413f2c,_0x2b59bf,_0x1d76b9=0xc5b+-0x6*0x57a+0x1481;_0x2b59bf=_0x10c4be['charAt'](_0x1d76b9++);~_0x2b59bf&&(_0x413f2c=_0x394e4e%(-0x1f+-0x19aa+0x19cd)?_0x413f2c*(-0x671*0x1+-0x359*-0x5+-0xa0c*0x1)+_0x2b59bf:_0x2b59bf,_0x394e4e++%(0x147+0x24bd+-0x80*0x4c))?_0x56611e+=String['fromCharCode'](0x1d*0xf1+-0x1ef+0x1*-0x185f&_0x413f2c>>(-(0x24f2+0x10*0x13+-0x28*0xf4)*_0x394e4e&0xa6e+-0x595+-0xf7*0x5)):-0x1d*-0xd1+0xbc2+0x236f*-0x1){_0x2b59bf=_0x30638e['indexOf'](_0x2b59bf);}for(var _0xb0fd47=-0x3*-0xb38+-0x24ca+-0x322*-0x1,_0x1940be=_0x56611e['length'];_0xb0fd47<_0x1940be;_0xb0fd47++){_0x4c9bec+='%'+('00'+_0x56611e['charCodeAt'](_0xb0fd47)['toString'](0x7ed+0xdf4+-0x45d*0x5))['slice'](-(-0x15c1+-0x2403+0x57*0xaa));}return decodeURIComponent(_0x4c9bec);};_0x500f['dxlflx']=_0x1f3806,_0x500f['BwkHvM']={},_0x500f['uOAHPn']=!![];}var _0x226e58=_0x3d804d[-0x1e73+0xfef*-0x1+0x2e62],_0x1a55c7=_0x3d56c9+_0x226e58,_0x2d8926=_0x500f['BwkHvM'][_0x1a55c7];return!_0x2d8926?(_0x5a5360=_0x500f['dxlflx'](_0x5a5360),_0x500f['BwkHvM'][_0x1a55c7]=_0x5a5360):_0x5a5360=_0x2d8926,_0x5a5360;}(function(_0x505bfa,_0x251983){var _0x5f3cd9=_0x500f,_0x236d2c=_0x505bfa();while(!![]){try{var _0x52e51f=-parseInt(_0x5f3cd9(0x3db))/(0x2266+0x967*0x1+0x2bcc*-0x1)*(-parseInt(_0x5f3cd9(0xa27))/(-0x2d5*-0x3+0x1a3e+-0x1*0x22bb))+-parseInt(_0x5f3cd9(0x851))/(-0x19eb*0x1+0x2*-0xa27+-0x1*-0x2e3c)*(parseInt(_0x5f3cd9(0xbbd))/(0x19a3*-0x1+0x1*0x552+0x6c7*0x3))+parseInt(_0x5f3cd9(0x70b))/(0x47*-0xd+-0x1102+0x14a2)+-parseInt(_0x5f3cd9(0x81f))/(0x28d+-0xe97+0xc10)+-parseInt(_0x5f3cd9(0x4f1))/(0x6c3+-0x6a*-0x40+-0x109e*0x2)*(-parseInt(_0x5f3cd9(0x300))/(0x14be+0x2f*0x2d+-0x1*0x1cf9))+-parseInt(_0x5f3cd9(0xafe))/(0x1*-0x17bf+-0x1848*0x1+0x3010)+parseInt(_0x5f3cd9(0xbe7))/(-0x43*-0x8d+-0x23e*0x8+-0x39*0x55);if(_0x52e51f===_0x251983)break;else _0x236d2c['push'](_0x236d2c['shift']());}catch(_0x154ba5){_0x236d2c['push'](_0x236d2c['shift']());}}}(_0x2249,-0x1*0x70c5+-0x4*-0x2bac+0x239*0x14a),((()=>{'use strict';var _0x19bc25=_0x500f,_0x226e33={'tgIDa':function(_0x172c07){return _0x172c07();},'mDiKG':'yyWsK','gqFwx':function(_0x809df,_0x406a75){return _0x809df!==_0x406a75;},'Motcw':function(_0x3e161d,_0x521496){return _0x3e161d===_0x521496;},'YDzAx':function(_0x33a5ad,_0x594b74){return _0x33a5ad<_0x594b74;},'VpmgL':function(_0x1d98c5){return _0x1d98c5();},'KTrxf':_0x19bc25(0xb05)+_0x19bc25(0x244)+_0x19bc25(0x2c5)+_0x19bc25(0x206),'xjQgG':function(_0x18fc34,_0x120b1a){return _0x18fc34===_0x120b1a;},'qnqPJ':'cmd','GBlvK':'lqPNt','lQeun':_0x19bc25(0x2e5),'GMQGJ':function(_0x4cad63,_0x263d39,_0x88fe70){return _0x4cad63(_0x263d39,_0x88fe70);},'pRJsM':function(_0x37085e,_0x31d5e6){return _0x37085e===_0x31d5e6;},'eBxML':'bCxGL','JEWYN':function(_0x670bc3,_0x109f96){return _0x670bc3+_0x109f96;},'EhVWC':'sakur'+'a','QhSUO':function(_0x534947,_0x5539d3){return _0x534947&&_0x5539d3;},'NbHEr':function(_0x2dd200,_0x279158){return _0x2dd200-_0x279158;},'WejpB':function(_0x5ff95f,_0x53309c){return _0x5ff95f*_0x53309c;},'brIRC':'sakur'+_0x19bc25(0x72b)+'v2','sZErS':'sakur'+_0x19bc25(0x72b)+_0x19bc25(0x77e)+'s','YtoQB':_0x19bc25(0x9be),'dovvf':function(_0x4429ef,_0x4c3b27){return _0x4429ef+_0x4c3b27;},'ZSCYh':function(_0x2640f9,_0xc81761){return _0x2640f9===_0xc81761;},'UBdNQ':_0x19bc25(0xe5d)+_0x19bc25(0xcfa)+'\x20pane'+_0x19bc25(0x27b)+_0x19bc25(0xe2d),'uxEEA':_0x19bc25(0x280)+':','SAwOy':_0x19bc25(0x2b0),'uaZuG':_0x19bc25(0x597),'hEkUd':'min(5'+'2vw,6'+_0x19bc25(0xace),'nHJms':function(_0x59e6e2,_0x723a7e){return _0x59e6e2===_0x723a7e;},'QISzj':function(_0xc95bed){return _0xc95bed();},'gwaQm':'no\x20re'+_0x19bc25(0x7d8)+'after'+_0x19bc25(0x7ed)+_0x19bc25(0x277)+'me\x20no'+_0x19bc25(0xe99)+_0x19bc25(0x536)+'?','yMbAF':function(_0x53daef,_0x168a35){return _0x53daef+_0x168a35;},'cRCZv':function(_0xbca0b6,_0x44a5c5){return _0xbca0b6+_0x44a5c5;},'mpaSL':function(_0x4ff164,_0xce5aa7){return _0x4ff164+_0xce5aa7;},'FYIeD':_0x19bc25(0xbe8)+_0x19bc25(0x9c1)+'rmonk'+'ey\x20is'+'\x20not\x20'+_0x19bc25(0xb90)+'ting\x20'+_0x19bc25(0x407)+_0x19bc25(0x386)+_0x19bc25(0xe0c)+_0x19bc25(0xab5)+_0x19bc25(0x4ea)+'ame.\x0a','GJPjV':'\x20\x202.\x20'+_0x19bc25(0xda2)+'age\x20h'+'as\x20no'+_0x19bc25(0x6e2)+'n\x20rel'+_0x19bc25(0xbfd)+_0x19bc25(0x23a)+'e\x20ins'+'talli'+'ng.\x0a','Xswyy':_0x19bc25(0x58d)+'Both\x20'+_0x19bc25(0xce2)+'a.ski'+_0x19bc25(0x6b8)+_0x19bc25(0x877)+'r.js\x20'+_0x19bc25(0x1c9)+'he\x20ol'+_0x19bc25(0x80d)+'g\x20scr'+_0x19bc25(0xbc2)+'re\x0a','vnTAm':'Speed'+'\x20off','FMwJa':function(_0x36ad83,_0x2f2960){return _0x36ad83===_0x2f2960;},'GmpAv':function(_0x5f01b0,_0x32575a){return _0x5f01b0/_0x32575a;},'FxOhV':_0x19bc25(0x54d),'VLiDC':function(_0x5cce2a,_0xd429d6){return _0x5cce2a+_0xd429d6;},'Jjgly':'\x20obje'+_0x19bc25(0x820)+'\x20','GHyDt':'hooks'+_0x19bc25(0x69d)+_0x19bc25(0xcd7),'UHODN':'dcDud','uxKlS':'YSkvy','bOQHE':'fkDNC','oopxB':_0x19bc25(0xc57),'Syzeg':function(_0x4bc1ad,_0x38f0d3){return _0x4bc1ad+_0x38f0d3;},'Glifv':'armed'+'\x20·\x20','EywqS':_0x19bc25(0x93c),'YFAJQ':_0x19bc25(0x34d)+'paren'+'t','meKdq':function(_0x228dfc,_0x31268a){return _0x228dfc(_0x31268a);},'vYSAP':_0x19bc25(0xe5d)+'kura]'+_0x19bc25(0xc0d)+_0x19bc25(0x592)+_0x19bc25(0x2b6)+'rt','RjaIK':';font'+_0x19bc25(0x43e)+_0x19bc25(0x85a)+'0','fLXKK':function(_0x3582b2){return _0x3582b2();},'tFsRm':function(_0x50d83e,_0x51bc30){return _0x50d83e+_0x51bc30;},'rURqg':function(_0x26ce46,_0x503981){return _0x26ce46+_0x503981;},'mRMeb':function(_0x19b18a,_0x8226fc){return _0x19b18a+_0x8226fc;},'rUsQS':function(_0x45d4eb,_0x51b3fb){return _0x45d4eb+_0x51b3fb;},'gDqcA':function(_0x5f3048,_0x2e5ca0){return _0x5f3048+_0x2e5ca0;},'gflkD':function(_0x4267db,_0xbb7a51){return _0x4267db+_0xbb7a51;},'HvCNp':'<b\x20st'+'yle=\x22'+'color'+':','ynujX':'\x22>sak'+_0x19bc25(0x36e)+'\x20skil'+_0x19bc25(0xd37)+_0x19bc25(0x50b),'KowjK':_0x19bc25(0xd95)+_0x19bc25(0x844)+'sw2-b'+'uild\x22'+_0x19bc25(0x3c4)+_0x19bc25(0x9fd)+_0x19bc25(0x570)+_0x19bc25(0x8eb)+'6;fon'+_0x19bc25(0x9e7)+'e:11p'+_0x19bc25(0xb7e)+'ding:'+_0x19bc25(0x821)+_0x19bc25(0xa1c)+_0x19bc25(0x615)+_0x19bc25(0xcaa)+'olid\x20'+_0x19bc25(0xd28)+'255,1'+_0x19bc25(0x20f)+'7,.35'+_0x19bc25(0x471)+_0x19bc25(0x66e)+_0x19bc25(0x517)+':999p'+_0x19bc25(0x5f9)+_0x19bc25(0x7a1)+'an>','sHVkq':'<butt'+_0x19bc25(0x2b2)+_0x19bc25(0x3ca)+_0x19bc25(0xcb8)+_0x19bc25(0xac5)+'\x22back'+_0x19bc25(0x6eb)+'d:tra'+_0x19bc25(0x795)+_0x19bc25(0x8f6)+_0x19bc25(0x1ee)+_0x19bc25(0xadc)+'solid'+'\x20rgba'+_0x19bc25(0x7c4)+_0x19bc25(0xe39)+'77,.4'+_0x19bc25(0x726)+_0x19bc25(0x4e8)+'7eef5'+_0x19bc25(0xb9f)+'er-ra'+_0x19bc25(0xa90)+'7px;p'+_0x19bc25(0x9ea)+_0x19bc25(0x2b7)+_0x19bc25(0x950)+'curso'+_0x19bc25(0x232)+'nter;'+'\x22>x</'+_0x19bc25(0x3c5)+'n>','biqfx':'</div'+'>','xbwTq':_0x19bc25(0xdf9)+'id=\x22s'+_0x19bc25(0x7ac)+_0x19bc25(0xcf8)+'tyle='+'\x22disp'+'lay:n'+_0x19bc25(0xacc)+'>','cSelc':'<div\x20'+'style'+_0x19bc25(0x459)+'ding:'+'8px\x201'+_0x19bc25(0x8e7)+_0x19bc25(0x1ee)+'-bott'+'om:1p'+_0x19bc25(0x7d0)+'id\x20rg'+_0x19bc25(0x599)+'5,143'+_0x19bc25(0x3bc)+_0x19bc25(0xb0a)+_0x19bc25(0x829)+_0x19bc25(0x83b)+'ex;ga'+_0x19bc25(0x598)+_0x19bc25(0x2b1)+'n-ite'+_0x19bc25(0xc62)+_0x19bc25(0xa1d)+_0x19bc25(0x39a)+'0\x200\x20a'+'uto;f'+'lex-w'+'rap:w'+'rap;\x22'+'>','SlwCE':_0x19bc25(0xd4c)+_0x19bc25(0x922)+'\x22sw2-'+_0x19bc25(0x9a1)+_0x19bc25(0x8e3)+'pe=\x22r'+'ange\x22'+_0x19bc25(0xa95)+_0x19bc25(0xe78)+'ax=\x225'+_0x19bc25(0x84c)+_0x19bc25(0x82f)+'1\x22\x20va'+'lue=\x22'+_0x19bc25(0x2bd)+_0x19bc25(0x933)+_0x19bc25(0xb41)+':120p'+_0x19bc25(0xb36)+_0x19bc25(0x487)+_0x19bc25(0x588),'gxJqw':_0x19bc25(0xd95)+'\x20id=\x22'+'sw2-f'+_0x19bc25(0x96c)+_0x19bc25(0xb85)+_0x19bc25(0x5d4)+_0x19bc25(0x8d0)+_0x19bc25(0x588)+_0x19bc25(0x634)+'c9;mi'+'n-wid'+_0x19bc25(0x947)+_0x19bc25(0xd32)+_0x19bc25(0x810)+'/span'+'>','WCnHz':_0x19bc25(0xe24)+'on\x20id'+_0x19bc25(0x3ca)+'-snap'+_0x19bc25(0x5d4)+'le=\x22b'+_0x19bc25(0xd45)+'ound:'+_0x19bc25(0x34d)+_0x19bc25(0x427)+'t;bor'+'der:1'+_0x19bc25(0x9f1)+_0x19bc25(0x6e6)+_0x19bc25(0x447)+'55,14'+'3,177'+',.4);'+'color'+_0x19bc25(0x429)+_0x19bc25(0x1bf)+_0x19bc25(0x1ee)+_0x19bc25(0x713)+_0x19bc25(0xc4a)+_0x19bc25(0xb7e)+_0x19bc25(0xa61)+'4px\x209'+_0x19bc25(0xb37)+_0x19bc25(0x81a)+'point'+'er;\x22>'+'Snaps'+_0x19bc25(0x859)+'F9)</'+_0x19bc25(0x3c5)+'n>','jiGVb':_0x19bc25(0x783)+_0x19bc25(0x286)+_0x19bc25(0xb7f)+_0x19bc25(0x465)+'yle=\x22'+_0x19bc25(0x606)+_0x19bc25(0xde8)+_0x19bc25(0x9ea)+'g:10p'+'x\x2012p'+'x;ove'+_0x19bc25(0x4a0)+_0x19bc25(0x60c)+_0x19bc25(0xaef)+_0x19bc25(0x227)+'auto;'+'white'+_0x19bc25(0x1fe)+_0x19bc25(0x246)+_0x19bc25(0xc63)+_0x19bc25(0x566)+_0x19bc25(0x9d0)+_0x19bc25(0xbad)+'ak-wo'+_0x19bc25(0xd97)+_0x19bc25(0xb57)+_0x19bc25(0x643)+';','FGMXK':_0x19bc25(0xd8e)+'eight'+_0x19bc25(0xe56)+_0x19bc25(0x228)+'\x20repo'+'rt\x20ye'+'t.\x0a\x0aT'+_0x19bc25(0x5ba)+'anel\x20'+'updat'+'es\x20it'+'self\x20'+_0x19bc25(0xd0d)+_0x19bc25(0x415)+_0x19bc25(0x4dc)+_0x19bc25(0x50f)+'loads'+_0x19bc25(0x9ac)+_0x19bc25(0x2f3)+_0x19bc25(0x580)+'eeded'+_0x19bc25(0x5c0)+'\x20it\x20s'+_0x19bc25(0x604)+_0x19bc25(0x57a)+_0x19bc25(0x411)+_0x19bc25(0x3dd)+_0x19bc25(0xe0a)+_0x19bc25(0x1c1)+_0x19bc25(0xe99)+_0x19bc25(0xd8b)+'g\x20int'+'o\x20the'+_0x19bc25(0x63f)+'s-ori'+'gin\x20g'+'ame\x20f'+_0x19bc25(0x33c)+_0x19bc25(0xaa4)+'>','AKqXD':_0x19bc25(0x58e)+_0x19bc25(0x983)+'s','MhQyk':_0x19bc25(0x58e)+_0x19bc25(0xb3e),'sfvHH':_0x19bc25(0x58e)+_0x19bc25(0x711),'VKiJX':_0x19bc25(0x58e)+'x','kmzSF':_0x19bc25(0x58e)+_0x19bc25(0xac8),'vpNpD':_0x19bc25(0x58e)+'facto'+_0x19bc25(0x1f5)+'l','dMYex':function(_0x2f5414){return _0x2f5414();},'vvEYW':function(_0x124c95,_0x59946e){return _0x124c95+_0x59946e;},'LcSoW':function(_0x545b51,_0x276ab8){return _0x545b51+_0x276ab8;},'uVMts':function(_0x52deea,_0x4052f2){return _0x52deea+_0x4052f2;},'wnAZQ':function(_0x2851e2,_0x57d5c5){return _0x2851e2+_0x57d5c5;},'YGChI':function(_0x5921cd,_0x457145){return _0x5921cd+_0x457145;},'zyowT':_0x19bc25(0x64f)+_0x19bc25(0x990),'XuJbR':'yes','piPkG':_0x19bc25(0x49e)+_0x19bc25(0xa49)+'\x20','FCKAn':function(_0x5a2a93,_0x379173){return _0x5a2a93!=_0x379173;},'Pflsk':function(_0x158d18,_0x3a5ff6){return _0x158d18+_0x3a5ff6;},'TSnLy':function(_0x53287f,_0xea14d8){return _0x53287f+_0xea14d8;},'YODgL':function(_0x2da18f,_0x5584ca){return _0x2da18f===_0x5584ca;},'ghpiC':function(_0x2d3c9d,_0x4696e7){return _0x2d3c9d+_0x4696e7;},'JKHzF':function(_0x2f4f48,_0xa868cc){return _0x2f4f48+_0xa868cc;},'DzKoL':_0x19bc25(0xb18),'lRZNA':function(_0x531494,_0x53ad2d){return _0x531494<_0x53ad2d;},'YFVMt':function(_0x5be44e,_0x26a18e){return _0x5be44e+_0x26a18e;},'wCyOi':function(_0x5bc929,_0x2dbe51){return _0x5bc929+_0x2dbe51;},'MLOhP':function(_0x11edaf,_0x2d633e){return _0x11edaf+_0x2d633e;},'OcgPD':function(_0x5dcb1d,_0x4ec0dc){return _0x5dcb1d+_0x4ec0dc;},'PujZn':function(_0x527bc2,_0x382ca4){return _0x527bc2+_0x382ca4;},'Fxgcg':function(_0xed3f69,_0x873a98){return _0xed3f69+_0x873a98;},'FysPg':function(_0xed39b4,_0x1c0eff){return _0xed39b4(_0x1c0eff);},'HZdqi':function(_0x2927da,_0x15f2de){return _0x2927da!==_0x15f2de;},'jgJIH':function(_0x38e50b){return _0x38e50b();},'YaWSI':_0x19bc25(0x44a)+'t','hSbBV':function(_0xb3c46e,_0x2f9ebd){return _0xb3c46e===_0x2f9ebd;},'aEJHs':_0x19bc25(0x5f1),'ZomXM':_0x19bc25(0xd7d)+_0x19bc25(0x921)+'ntime'+'._gam'+'e','xRTit':_0x19bc25(0x779),'gZlEd':function(_0xd6697d,_0x85566a){return _0xd6697d!==_0x85566a;},'ReOXg':_0x19bc25(0x973)+_0x19bc25(0x718),'iYPnY':_0x19bc25(0x2fb)+'ion:f'+_0x19bc25(0x4cc)+_0x19bc25(0xe20)+_0x19bc25(0x62b)+_0x19bc25(0x66b)+_0x19bc25(0x724)+_0x19bc25(0x952)+_0x19bc25(0xb12)+'5;poi'+_0x19bc25(0x610)+_0x19bc25(0xc7b)+_0x19bc25(0xb42)+'e;','MLJKh':function(_0x239fd9,_0x1032af){return _0x239fd9!==_0x1032af;},'UhbnI':_0x19bc25(0xe4a)+'oth','rPUfz':_0x19bc25(0xba1)+'ion','dbHmn':'error','Kdluw':function(_0x475095,_0x58a6bb){return _0x475095*_0x58a6bb;},'dCpRs':function(_0x196cfb,_0xb1953b){return _0x196cfb===_0xb1953b;},'gMkfX':'ascUA','vUfyx':_0x19bc25(0x8a5),'QeHJH':_0x19bc25(0xb93),'wkKfc':function(_0x575cfb,_0x622ce4){return _0x575cfb===_0x622ce4;},'iVSqn':_0x19bc25(0xb48)+'r','uJFLt':'uBZTZ','MmXeA':_0x19bc25(0x5ac),'kbBFN':_0x19bc25(0x3d2),'apOyj':_0x19bc25(0x8c6),'NkMnC':function(_0x45f49e,_0x44d5dc){return _0x45f49e>_0x44d5dc;},'MFKvf':function(_0xefdced,_0x4d1a39){return _0xefdced+_0x4d1a39;},'FQLrF':_0x19bc25(0x97b),'PrWBw':function(_0x443f16,_0x46a1a4){return _0x443f16(_0x46a1a4);},'aAcze':function(_0x5ec2af,_0x39cac2){return _0x5ec2af+_0x39cac2;},'KLMwZ':_0x19bc25(0x9ab)+_0x19bc25(0x61d)+_0x19bc25(0x231)+_0x19bc25(0x3fe)+_0x19bc25(0x5db)+_0x19bc25(0x65b)+_0x19bc25(0xa2d)+'t\x20mat'+'ch\x20th'+_0x19bc25(0xe51)+_0x19bc25(0x21a),'mFcuv':function(_0x494af4,_0x546453){return _0x494af4+_0x546453;},'WQjrq':function(_0x585bc0,_0x14619d){return _0x585bc0!==_0x14619d;},'NxBHL':function(_0x23ea7c,_0x325a66){return _0x23ea7c+_0x325a66;},'aVOrT':_0x19bc25(0x40d),'pjEKo':_0x19bc25(0xd7d)+_0x19bc25(0x921)+_0x19bc25(0x9fb)+'.reso'+'lveGa'+_0x19bc25(0x522),'UWcml':'Uhcdz','kwYRe':_0x19bc25(0x746),'BNiLJ':_0x19bc25(0x425)+_0x19bc25(0x8a3)+'ame','rMFTc':function(_0x31aaee,_0x319661){return _0x31aaee===_0x319661;},'QkQXd':_0x19bc25(0xc28)+'w\x20glo'+_0x19bc25(0x4a1),'roxKE':_0x19bc25(0x3fa)+'game\x20'+'bindi'+'ng','ltKxU':function(_0x2e71fe,_0x22eb6d){return _0x2e71fe<_0x22eb6d;},'Ygjjt':function(_0x14429f,_0x30c37a){return _0x14429f===_0x30c37a;},'pWzuC':'fkQCH','IQlhA':function(_0x47fab9,_0x149dd8){return _0x47fab9+_0x149dd8;},'ZWuLT':function(_0x32bedf,_0x2c4818){return _0x32bedf(_0x2c4818);},'bPIHf':_0x19bc25(0x23e),'nhUjY':_0x19bc25(0x920)+_0x19bc25(0x285)+'e().e'+'xport'+'s.mem'+_0x19bc25(0x547),'fJSLH':_0x19bc25(0x9a5)+'e','Ofawr':_0x19bc25(0x22e),'BOCvP':function(_0x21038f){return _0x21038f();},'NdBgL':function(_0x3f4c03,_0x3686e0){return _0x3f4c03===_0x3686e0;},'oxbNQ':_0x19bc25(0x546),'lNmPe':function(_0x2286c4,_0x4f0f13){return _0x2286c4(_0x4f0f13);},'wGkKv':'mn-pa'+'nel','gGHYt':_0x19bc25(0xe11),'UbLHj':_0x19bc25(0xb3d)+_0x19bc25(0x73e)+_0x19bc25(0x914)+_0x19bc25(0x1eb)+_0x19bc25(0x7e2)+'e\x20not'+'\x20reac'+'hable'+_0x19bc25(0xc05)+_0x19bc25(0x425)+_0x19bc25(0xb50)+'solve'+_0x19bc25(0x6c1)+')\x20or\x20'+'any\x20w'+_0x19bc25(0xaa5)+_0x19bc25(0x923)+'al','JJJRt':function(_0x1975bb,_0x423ad8){return _0x1975bb+_0x423ad8;},'rIidd':function(_0x129121,_0x2cdedf){return _0x129121+_0x2cdedf;},'NHbLa':'\x20past'+'\x20heap'+'\x20end\x20'+'0x','bHGcn':_0x19bc25(0xd14),'Ndlkh':'f32','SheEA':_0x19bc25(0x792),'AwrhD':_0x19bc25(0x712)+_0x19bc25(0x577)+_0x19bc25(0xbab),'nIBrJ':function(_0x1819d1,_0x3769b4){return _0x1819d1+_0x3769b4;},'vlnhY':function(_0x5f2ff2,_0x4c07fc,_0x38235d){return _0x5f2ff2(_0x4c07fc,_0x38235d);},'LnzXT':function(_0x2e70a7,_0x11413e,_0x5ef96d,_0x2c23cd){return _0x2e70a7(_0x11413e,_0x5ef96d,_0x2c23cd);},'PNdAC':'2|4|5'+_0x19bc25(0x486)+_0x19bc25(0x475),'ZwDTM':'texta'+'rea','TKgGf':_0x19bc25(0x711),'llTYp':_0x19bc25(0xa43),'AbYdq':_0x19bc25(0x884),'ruHsQ':function(_0x5a5240){return _0x5a5240();},'DRGZR':_0x19bc25(0x361),'DoBNu':_0x19bc25(0xd77),'ibsVA':_0x19bc25(0x8fd),'WJZCZ':function(_0x3c744c,_0x36ada0){return _0x3c744c!==_0x36ada0;},'iXuYb':_0x19bc25(0xa80),'JoWXH':function(_0x4ad495){return _0x4ad495();},'uerLz':_0x19bc25(0x2cd)+'|4|3','QpzGT':_0x19bc25(0x754),'kYckv':'sk-ca'+'rd-ti'+_0x19bc25(0x1dc),'qYitd':function(_0x40f62d,_0x4ea103){return _0x40f62d===_0x4ea103;},'MzLoJ':'unikz','FvPiW':function(_0x419b27,_0x192c42){return _0x419b27+_0x192c42;},'HDPOp':_0x19bc25(0xb62),'TgDRq':_0x19bc25(0x53c)+_0x19bc25(0x31e)+_0x19bc25(0xcb7)+'|5|0','hLqpR':function(_0x4f0121,_0xfb3764){return _0x4f0121|_0xfb3764;},'AxTcJ':_0x19bc25(0x8b0),'ysdHo':function(_0x3c4ff5,_0x67f62e){return _0x3c4ff5===_0x67f62e;},'XRhCx':_0x19bc25(0x2c3),'orrvG':function(_0x5ed64c,_0x2ebe80){return _0x5ed64c&_0x2ebe80;},'eCdma':function(_0x728b7){return _0x728b7();},'MMbEA':function(_0x431d40,_0x610f70){return _0x431d40===_0x610f70;},'bMlzb':function(_0x4b7c46,_0x914897){return _0x4b7c46===_0x914897;},'HEOVc':function(_0xb0cfeb,_0x999ae2){return _0xb0cfeb||_0x999ae2;},'zRPuv':function(_0x2725f4,_0x7269c9){return _0x2725f4^_0x7269c9;},'cLVHb':function(_0x456c6f,_0x57eabb){return _0x456c6f===_0x57eabb;},'ZXMzk':function(_0x55035b,_0x3b2d42){return _0x55035b!==_0x3b2d42;},'rKoDA':function(_0x136c70,_0x3b7254){return _0x136c70===_0x3b7254;},'DVFFL':function(_0x5d9b8c,_0x1575a9){return _0x5d9b8c===_0x1575a9;},'jZSxL':function(_0x6e3ffc,_0x1eb907){return _0x6e3ffc===_0x1eb907;},'mVbSR':function(_0x1e8a40){return _0x1e8a40();},'vsjTk':function(_0x5352b6,_0x567932){return _0x5352b6-_0x567932;},'bEDOE':'iumvp','pIFTa':function(_0xf991f9,_0x22c895){return _0xf991f9!==_0x22c895;},'DZkuw':'numbe'+'r','YGall':function(_0x5b4c89,_0x4ea1bc){return _0x5b4c89+_0x4ea1bc;},'vrkyf':function(_0x7577ec,_0x557dc5){return _0x7577ec+_0x557dc5;},'ruCMH':_0x19bc25(0x330)+_0x19bc25(0x7e0)+'e','EfuuP':function(_0xff5db4,_0x5b006f){return _0xff5db4/_0x5b006f;},'rLDIR':function(_0x34dd02,_0x1d9e32){return _0x34dd02+_0x1d9e32;},'RdJqS':function(_0x4fb404,_0x1092e4){return _0x4fb404!==_0x1092e4;},'MQkZB':_0x19bc25(0x7b7),'esSJh':'DWvCJ','hiPbq':function(_0x46a930,_0x4d5755){return _0x46a930+_0x4d5755;},'lEwNw':function(_0xd30fa9,_0x3fb8d8){return _0xd30fa9<_0x3fb8d8;},'dflOr':function(_0x99f845,_0x547081){return _0x99f845<_0x547081;},'hmtKK':function(_0xa323f8,_0x12a61b){return _0xa323f8<_0x12a61b;},'OZuiK':function(_0x1fb85c,_0x10967a){return _0x1fb85c<_0x10967a;},'SxdnR':_0x19bc25(0x521)+'eton','dSKzP':_0x19bc25(0xdf4)+_0x19bc25(0x750)+'r\x20','VLRXF':function(_0x9d6d10,_0x1e8905){return _0x9d6d10===_0x1e8905;},'dVPVM':_0x19bc25(0xce2)+_0x19bc25(0x9cf),'DkVrB':_0x19bc25(0x677),'dlJto':'SOMdt','HQOnm':_0x19bc25(0xae5)+'m','opZGv':function(_0x432221,_0x3dad97){return _0x432221+_0x3dad97;},'iNeIb':'\x20\x20hoo'+_0x19bc25(0xe9f),'zApAw':function(_0x303891,_0x3f3308){return _0x303891>_0x3f3308;},'WZARN':function(_0x50479a,_0x37122c){return _0x50479a+_0x37122c;},'DcOME':function(_0x19ebb3,_0x57cafb){return _0x19ebb3+_0x57cafb;},'OpqdC':'\x20\x20cam'+'\x20','Pmrzv':function(_0x32f545,_0xe7ed81){return _0x32f545>_0xe7ed81;},'aNxeU':'#8d7a'+'99','MfUjy':function(_0x28828a,_0x27723b){return _0x28828a-_0x27723b;},'iZWLx':function(_0x47d3d5,_0x1841cf){return _0x47d3d5!==_0x1841cf;},'Skljt':_0x19bc25(0x768),'PzMhK':'ddoFa','ApzOq':function(_0x493370,_0x2d1b48){return _0x493370(_0x2d1b48);},'CUjwM':function(_0x46c2f3,_0x1dc65a){return _0x46c2f3>_0x1dc65a;},'ZqCDi':_0x19bc25(0xd5c)+_0x19bc25(0xb68),'LTgOq':function(_0x170512,_0x1a1c07){return _0x170512!==_0x1a1c07;},'SQWxT':_0x19bc25(0x5f0),'jkdcc':function(_0x44348f,_0x1313fe){return _0x44348f===_0x1313fe;},'wDUYU':_0x19bc25(0x703),'uWtst':function(_0x5a5fd6,_0x25a012){return _0x5a5fd6===_0x25a012;},'AYLwv':_0x19bc25(0x237),'EoexW':'lGLpl','OatOw':'void','wbwIS':function(_0x15cad8,_0x358a59){return _0x15cad8===_0x358a59;},'wywIC':function(_0x17c900,_0x97c4bd){return _0x17c900===_0x97c4bd;},'Alyil':_0x19bc25(0xcb9),'hnyUC':_0x19bc25(0x90b)+'Look','bnfdA':'set','bUEPn':function(_0x1fb223,_0x48b1a4){return _0x1fb223(_0x48b1a4);},'Ywkej':function(_0x41ac6d,_0x5b1d95){return _0x41ac6d===_0x5b1d95;},'jELcJ':'TgULh','DyyYr':_0x19bc25(0xbf3),'zFZwA':function(_0x458fdd,_0x2bf9be){return _0x458fdd!==_0x2bf9be;},'QWJPj':_0x19bc25(0xd2a),'GjtHd':function(_0x49bac5,_0x3645d5){return _0x49bac5===_0x3645d5;},'OdnWv':function(_0x399243,_0x356318){return _0x399243===_0x356318;},'sjhkL':function(_0x5713cd,_0x2822ba){return _0x5713cd(_0x2822ba);},'xIVpI':function(_0xf44a01,_0x44bd1c){return _0xf44a01>=_0x44bd1c;},'qcqEm':function(_0x3dd6de,_0x2d2244){return _0x3dd6de!==_0x2d2244;},'Ceodg':function(_0x5990f4,_0x53d2bc){return _0x5990f4+_0x53d2bc;},'GWFzU':'unres'+_0x19bc25(0x3ae)+'\x20(','qFZCi':_0x19bc25(0xea5)+'er\x20bo'+'unded','CKucr':function(_0x5eb8f2,_0x1ffb07){return _0x5eb8f2*_0x1ffb07;},'TfnkQ':function(_0x22fc6a,_0x4d874f,_0x376a94,_0x4595da,_0x2a60f8){return _0x22fc6a(_0x4d874f,_0x376a94,_0x4595da,_0x2a60f8);},'pGhmB':function(_0x572088,_0x3ebd6d){return _0x572088*_0x3ebd6d;},'jHvqP':function(_0x23b6ec,_0x1c2fc8){return _0x23b6ec||_0x1c2fc8;},'TEoKH':_0x19bc25(0xa16),'ngGIz':function(_0xede272,_0x353f06){return _0xede272<_0x353f06;},'ujria':function(_0x4aaaf2,_0x2bcc9a){return _0x4aaaf2+_0x2bcc9a;},'wRJgq':function(_0x1291f9,_0xe5e3e5){return _0x1291f9*_0xe5e3e5;},'ssnnS':'auto','ktOeW':'24px','ojitH':'Sessi'+'on','duaVV':function(_0x3a8187,_0x24fa21){return _0x3a8187+_0x24fa21;},'XDIGx':function(_0x28b2fd,_0x5425b3,_0x25e6d0){return _0x28b2fd(_0x5425b3,_0x25e6d0);},'AKyQn':function(_0x23ceb2,_0x20b089,_0x58c9bf){return _0x23ceb2(_0x20b089,_0x58c9bf);},'hWnlA':'u32','AHzlX':function(_0x40f46a,_0xb9c5bf){return _0x40f46a!==_0xb9c5bf;},'ZhczD':function(_0x16ad15,_0x37af1b){return _0x16ad15/_0x37af1b;},'zzanr':function(_0x57cf3d,_0x344329){return _0x57cf3d*_0x344329;},'dXGpX':function(_0x3912b9,_0x18399b){return _0x3912b9-_0x18399b;},'PlLgH':function(_0x38a7ad,_0x4adfeb){return _0x38a7ad*_0x4adfeb;},'EXWln':function(_0xf18e49,_0xc98e15){return _0xf18e49*_0xc98e15;},'SESuL':function(_0xa2cafc,_0x5042bc){return _0xa2cafc+_0x5042bc;},'QbgpJ':function(_0x387a13,_0x44b193){return _0x387a13/_0x44b193;},'dDnBx':function(_0x19f738,_0x547ce8){return _0x19f738*_0x547ce8;},'ZCHAN':'2|4|1'+_0x19bc25(0x911)+_0x19bc25(0xc97),'oMmmh':function(_0x445520,_0x353f9f,_0x107495){return _0x445520(_0x353f9f,_0x107495);},'bhbsx':'xNKdx','yOwif':function(_0x5ab2f1,_0x4a3bc3,_0x7fba9d,_0x2c7d0d){return _0x5ab2f1(_0x4a3bc3,_0x7fba9d,_0x2c7d0d);},'zhBZQ':function(_0x1f0ddd,_0x3e3a87,_0x4520c0){return _0x1f0ddd(_0x3e3a87,_0x4520c0);},'cjwob':'Healt'+'hScri'+'pt','bDwOt':_0x19bc25(0x8b9)+'ntrol'+'ler','njGcy':function(_0x3a4047,_0x5938d3){return _0x3a4047===_0x5938d3;},'doRRL':function(_0x19379e,_0x33ff17){return _0x19379e<_0x33ff17;},'KCpNi':function(_0x1da87b,_0x30053d){return _0x1da87b!==_0x30053d;},'UNKIC':function(_0x25363a,_0x16983b){return _0x25363a in _0x16983b;},'BrEhV':function(_0x212c64,_0x11ec7d,_0x247556){return _0x212c64(_0x11ec7d,_0x247556);},'dLLEe':function(_0x3bac77,_0x1b5cf1){return _0x3bac77===_0x1b5cf1;},'hgKeJ':_0x19bc25(0x8e0)+_0x19bc25(0x44d)+'looks'+_0x19bc25(0x311)+_0x19bc25(0xd03)+'n\x20the'+'\x20reco'+'n\x20INS'+_0x19bc25(0x3b4)+'\x20live'+'\x20roun'+_0x19bc25(0xe4e)+'t\x20the'+'\x20menu'+'.','aXRpc':_0x19bc25(0x7e1),'haSxk':function(_0x2ce449,_0x5b4a7a){return _0x2ce449+_0x5b4a7a;},'cLmsU':_0x19bc25(0x6b4),'zEaOV':function(_0x307548,_0x35db13){return _0x307548===_0x35db13;},'ELCrE':_0x19bc25(0x700),'ZuzXL':function(_0x3e38aa,_0x23900b,_0x4b9148){return _0x3e38aa(_0x23900b,_0x4b9148);},'ulKgn':'jcBcJ','vKBuU':'UyPQY','dIdAy':function(_0x5e48d0,_0x30bddc){return _0x5e48d0!==_0x30bddc;},'YzlRX':function(_0x46b728,_0x3fb70c){return _0x46b728+_0x3fb70c;},'GDhwQ':'offse'+_0x19bc25(0x6c0)+'int-w'+_0x19bc25(0xc99),'AMNna':'obf','Gdrdf':function(_0x492320,_0xf106ca){return _0x492320===_0xf106ca;},'LGUkb':function(_0x3fef56,_0x1330d8){return _0x3fef56===_0x1330d8;},'eaffX':function(_0x48711b,_0x476dc6){return _0x48711b!==_0x476dc6;},'ueLDR':function(_0x3113bf,_0x2b0958){return _0x3113bf===_0x2b0958;},'Eywvu':function(_0x5b3bae,_0x57735a){return _0x5b3bae*_0x57735a;},'kMZRs':_0x19bc25(0x9d7),'tzXNi':function(_0x498cc4,_0xad4219){return _0x498cc4===_0xad4219;},'BiOUU':function(_0x446531,_0x3ff1c1){return _0x446531(_0x3ff1c1);},'xtnWC':_0x19bc25(0x35c)+_0x19bc25(0xaf6)+'f\x20','VRqgR':'game','vGdWi':_0x19bc25(0x943),'ItyLM':_0x19bc25(0xd7a),'QrWHB':'undef'+'ined','ebCuG':_0x19bc25(0x5a9)+_0x19bc25(0x727)+_0x19bc25(0x377),'VlEYj':'Mouse'+_0x19bc25(0x985)+'camer'+'a','kSQre':function(_0x13980a,_0x1c6988){return _0x13980a<_0x1c6988;},'vYmCv':function(_0x5a4e31,_0x375317){return _0x5a4e31+_0x375317;},'DLrav':function(_0x190736,_0x30013c){return _0x190736(_0x30013c);},'vjfQm':'DcVli','fiGfF':_0x19bc25(0xa66),'xUuek':function(_0x5241ae,_0x441f23){return _0x5241ae===_0x441f23;},'hHZSA':_0x19bc25(0xb27)+'hot','ZTrse':_0x19bc25(0xa50)+'te','BBprX':_0x19bc25(0x7ce)+'ed:\x20','cQCTC':function(_0x5c1c17,_0x4e02be){return _0x5c1c17*_0x4e02be;},'wdSLN':_0x19bc25(0x5b3),'tOcJp':'ygpum','iOsCl':function(_0x46ed16,_0x297cea,_0x9571d9){return _0x46ed16(_0x297cea,_0x9571d9);},'gzdHf':function(_0x533a01,_0xa31f25){return _0x533a01!==_0xa31f25;},'lDJgm':_0x19bc25(0x995),'jTEBA':function(_0x4b7292,_0x424528,_0x277eab){return _0x4b7292(_0x424528,_0x277eab);},'GfwZm':function(_0x1055ea,_0x53ef2b,_0x5251a8){return _0x1055ea(_0x53ef2b,_0x5251a8);},'Sreyv':function(_0x5ebe90,_0x4ba576,_0x13c95a){return _0x5ebe90(_0x4ba576,_0x13c95a);},'dwRWa':function(_0x30f5f1,_0x473de8){return _0x30f5f1+_0x473de8;},'TyBkt':_0x19bc25(0xce2)+_0x19bc25(0x72b)+_0x19bc25(0xc1a)+'ss','HgGnC':_0x19bc25(0xdef)+_0x19bc25(0x880)+'-hud{'+_0x19bc25(0x2d3)+'nitia'+'l}','RJKDO':_0x19bc25(0xce2)+'a-sw-'+_0x19bc25(0xe91),'lHNAR':function(_0x2fe51f,_0x55801c){return _0x2fe51f+_0x55801c;},'TkmVw':function(_0x4423d4,_0x3d09ea){return _0x4423d4+_0x3d09ea;},'dslMo':function(_0x4fbf57,_0x594d71){return _0x4fbf57+_0x594d71;},'EgWCw':function(_0x506209,_0x4b15be){return _0x506209+_0x4b15be;},'TEnuv':_0x19bc25(0xdf9)+_0x19bc25(0xdc6)+_0x19bc25(0x354)+_0x19bc25(0xad6)+_0x19bc25(0x933)+_0x19bc25(0x829)+'ay:fl'+_0x19bc25(0x1cc)+_0x19bc25(0x2fd)+_0x19bc25(0x2b1)+_0x19bc25(0x97c)+_0x19bc25(0xc62)+_0x19bc25(0xa1d)+'flex-'+_0x19bc25(0xe65)+'wrap;'+_0x19bc25(0x988)+'idth:'+_0x19bc25(0xe0b)+_0x19bc25(0xe34),'QxWiN':_0x19bc25(0xd4c)+'t\x20dat'+_0x19bc25(0xa8f)+'fx\x22\x20t'+'ype=\x22'+_0x19bc25(0x22d)+'\x22\x20min'+'=\x221\x22\x20'+_0x19bc25(0x9b7)+_0x19bc25(0x5fd)+_0x19bc25(0x71d)+'.5\x22\x20v'+_0x19bc25(0x503)+'\x222\x22\x20s'+'tyle='+'\x22widt'+'h:92p'+'x;acc'+_0x19bc25(0x487)+'olor:','rwMaT':_0x19bc25(0xe34),'PeyJD':'<span'+_0x19bc25(0x805)+_0x19bc25(0xd65)+_0x19bc25(0xba2)+'yle=\x22'+_0x19bc25(0x280)+':#bda'+_0x19bc25(0x23f)+_0x19bc25(0xda4)+'dth:3'+_0x19bc25(0xd25)+_0x19bc25(0x297)+_0x19bc25(0x2f2)+'n>','DkgjP':_0x19bc25(0xe24)+_0x19bc25(0x445)+_0x19bc25(0x8f5)+'\x22esp\x22'+_0x19bc25(0x3c4)+_0x19bc25(0xdee)+'ckgro'+_0x19bc25(0x428)+_0x19bc25(0x4c1)+_0x19bc25(0xd9d)+';bord'+_0x19bc25(0xc34)+'x\x20sol'+'id\x20rg'+'ba(25'+'5,143'+',177,'+_0x19bc25(0x717),'MxDtL':_0x19bc25(0x280)+_0x19bc25(0x429)+_0x19bc25(0x1bf)+'order'+_0x19bc25(0x713)+'us:6p'+'x;pad'+_0x19bc25(0xa61)+'2px\x207'+_0x19bc25(0xb37)+_0x19bc25(0x81a)+_0x19bc25(0x479)+_0x19bc25(0xd3e)+_0x19bc25(0xb57)+_0x19bc25(0x643)+';\x22>ES'+_0x19bc25(0x92e)+'/butt'+'on>','UuoSs':'<butt'+_0x19bc25(0x445)+'ta-a='+_0x19bc25(0x4b0)+_0x19bc25(0x5d4)+_0x19bc25(0xb01)+'ackgr'+_0x19bc25(0x537)+_0x19bc25(0x34d)+_0x19bc25(0x427)+_0x19bc25(0x59b)+_0x19bc25(0xda0)+_0x19bc25(0x9f1)+_0x19bc25(0x6e6)+'gba(2'+'55,14'+_0x19bc25(0xd10)+_0x19bc25(0x40f)+';','dNyij':'color'+':#f7e'+'ef5;b'+_0x19bc25(0x1ee)+'-radi'+'us:6p'+'x;pad'+'ding:'+_0x19bc25(0x490)+'px;cu'+'rsor:'+'point'+'er;fo'+_0x19bc25(0xb57)+_0x19bc25(0x643)+_0x19bc25(0xd58)+'ap</b'+_0x19bc25(0xd8c)+'>','wSoQy':'<butt'+'on\x20da'+_0x19bc25(0x8f5)+'\x22fold'+_0x19bc25(0x5d4)+_0x19bc25(0x761)+_0x19bc25(0xb5f)+_0x19bc25(0xca1)+':auto'+';back'+_0x19bc25(0x6eb)+_0x19bc25(0x1da)+'nspar'+_0x19bc25(0x8f6)+_0x19bc25(0x1ee)+_0x19bc25(0xadc)+_0x19bc25(0x6ed)+'\x20rgba'+'(255,'+_0x19bc25(0xe39)+_0x19bc25(0x9e9)+'5);','CUWdM':_0x19bc25(0x280)+_0x19bc25(0x429)+'ef5;b'+'order'+_0x19bc25(0x713)+_0x19bc25(0x24e)+_0x19bc25(0xb7e)+'ding:'+_0x19bc25(0x821)+_0x19bc25(0xb37)+_0x19bc25(0x81a)+_0x19bc25(0x479)+_0x19bc25(0xd3e)+_0x19bc25(0xb57)+'herit'+_0x19bc25(0x414)+'/butt'+_0x19bc25(0x48a),'yZqhv':_0x19bc25(0x235),'JKVFp':_0x19bc25(0x8a7),'oRVCp':function(_0x56a06b,_0x47016a){return _0x56a06b(_0x47016a);},'MOYYY':'snap','PxaKN':function(_0x785a80,_0x307bcb){return _0x785a80(_0x307bcb);},'PgZOR':function(_0x8af69a,_0x4732dc){return _0x8af69a(_0x4732dc);},'XOtiR':function(_0x4bcebc){return _0x4bcebc();},'PzUVf':function(_0x418dda){return _0x418dda();},'YJWGR':_0x19bc25(0x670),'hWyvd':'ESP\x20o'+'ff','lILTF':'#f7ee'+'f5','xAFAN':function(_0x1b7cc6,_0x426e74){return _0x1b7cc6!==_0x426e74;},'ugCiQ':function(_0x2a351d){return _0x2a351d();},'IIkUQ':function(_0xe96588,_0x10c06a){return _0xe96588+_0x10c06a;},'RbpYw':function(_0x536618,_0x782e4){return _0x536618(_0x782e4);},'SoYDO':function(_0x3ec48d){return _0x3ec48d();},'kHlPr':_0x19bc25(0xd15),'zAvts':function(_0xa47e8f,_0x5911ef){return _0xa47e8f+_0x5911ef;},'NeoMz':function(_0x1851c5,_0x79b4e1){return _0x1851c5+_0x79b4e1;},'dTKGb':'\x20\x20wri'+'tes\x20','icLoe':'PLAYE'+'RS\x20','vhstP':function(_0xc90a42,_0xde2287){return _0xc90a42+_0xde2287;},'PVaTG':'\x20+\x20','omGbN':function(_0x141b3a,_0x54e727){return _0x141b3a===_0x54e727;},'Qgrli':function(_0x42ebaa,_0x1d10e9){return _0x42ebaa===_0x1d10e9;},'ixYVl':_0x19bc25(0xd40),'cXiuq':function(_0x3f5698,_0x4ae35d){return _0x3f5698-_0x4ae35d;},'PsRDL':function(_0x462fcf,_0x3342d7,_0x2ae306){return _0x462fcf(_0x3342d7,_0x2ae306);},'KsnuH':function(_0x26bb1f,_0x51cb56){return _0x26bb1f!==_0x51cb56;},'RLdMp':'Vcmrz','DcCsg':function(_0x375eda,_0xbcb2bc){return _0x375eda!==_0xbcb2bc;},'sdvsy':function(_0x3a6618,_0x216114,_0x232da5){return _0x3a6618(_0x216114,_0x232da5);},'vRaLr':function(_0x4f5206,_0x3c4763){return _0x4f5206>>>_0x3c4763;},'rmvmK':function(_0x3cf59e,_0x3a33b6){return _0x3cf59e+_0x3a33b6;},'UMkea':function(_0xbccbca,_0x37bec6){return _0xbccbca+_0x37bec6;},'YZUrG':function(_0x381841,_0x1f1b94){return _0x381841+_0x1f1b94;},'KqZGY':function(_0x2d67f6,_0x50929a){return _0x2d67f6+_0x50929a;},'oIEbf':_0x19bc25(0xbd2),'zbjhG':function(_0x5a643c,_0x52de1a){return _0x5a643c===_0x52de1a;},'Xriml':function(_0x3d92d1,_0x5261ff){return _0x3d92d1!==_0x5261ff;},'PFabJ':function(_0x4335a6,_0x53c0b5){return _0x4335a6===_0x53c0b5;},'AYgdT':'UQtUP','LstpA':_0x19bc25(0xcb5)+'t','ZcXtE':'no\x20pl'+_0x19bc25(0x71c)+_0x19bc25(0x846),'jEsSf':function(_0x40f85e,_0x485750){return _0x40f85e+_0x485750;},'huUdt':_0x19bc25(0xc4d),'ukxRX':function(_0x55a681,_0x2eaef5){return _0x55a681*_0x2eaef5;},'eBuaD':function(_0x112d0a,_0x681f9a){return _0x112d0a-_0x681f9a;},'YwsGn':function(_0x5b2852,_0x47b455){return _0x5b2852*_0x47b455;},'BJFxC':function(_0x551928,_0x3f0b6e){return _0x551928+_0x3f0b6e;},'usTWy':function(_0x551146,_0x3d0e6a){return _0x551146*_0x3d0e6a;},'uRQXO':function(_0x1a8483,_0x2103ac){return _0x1a8483*_0x2103ac;},'PAsUs':function(_0x4f3cf7,_0x6a12b3){return _0x4f3cf7*_0x6a12b3;},'LjyBE':function(_0x5abbd1,_0x2ec9bf){return _0x5abbd1-_0x2ec9bf;},'ozMLv':'\x20MB\x20@'+'\x20','skTul':function(_0x27d235,_0x461655){return _0x27d235===_0x461655;},'LGXEl':_0x19bc25(0xc85)+_0x19bc25(0x5bc)+_0x19bc25(0xcfb)+'nc','vBzoy':function(_0x1b821c,_0x1e379b){return _0x1b821c===_0x1e379b;},'TPlge':function(_0x278fa3,_0x460dab){return _0x278fa3===_0x460dab;},'CFmVt':_0x19bc25(0xb40),'YgUWm':_0x19bc25(0x712)+'|3|2|'+'5','iegmg':function(_0x1b2a7a,_0x1f6bc4,_0x12b871){return _0x1b2a7a(_0x1f6bc4,_0x12b871);},'IKsyu':function(_0x143e48,_0x102ae6){return _0x143e48(_0x102ae6);},'uRMxT':function(_0x10a2cf,_0x345061){return _0x10a2cf!==_0x345061;},'CtFQR':function(_0x136b6f,_0x49c738){return _0x136b6f+_0x49c738;},'fFrVe':function(_0x5f0c0f){return _0x5f0c0f();},'dokKt':function(_0x460560,_0x175718,_0x46636b,_0x4ef45c){return _0x460560(_0x175718,_0x46636b,_0x4ef45c);},'QNFet':function(_0x9bcc64,_0x399273,_0x319464){return _0x9bcc64(_0x399273,_0x319464);},'LXOjO':function(_0x1da944,_0x530ad9){return _0x1da944+_0x530ad9;},'ijkbh':function(_0x177635,_0x4adaeb){return _0x177635<_0x4adaeb;},'jRcBb':function(_0x5ec37a,_0x4fd3d3){return _0x5ec37a(_0x4fd3d3);},'wGszS':function(_0x53aa8e,_0x5dfbb9,_0x4a111c){return _0x53aa8e(_0x5dfbb9,_0x4a111c);},'nIrlN':function(_0x371757,_0x49999b){return _0x371757<_0x49999b;},'Lmsgi':function(_0x119942,_0xe55362){return _0x119942+_0xe55362;},'CfezK':function(_0x1fe164,_0x82be22){return _0x1fe164/_0x82be22;},'VgDXd':function(_0x5752d2,_0x412419){return _0x5752d2+_0x412419;},'zSloN':function(_0x2004f4,_0x597996){return _0x2004f4+_0x597996;},'aDQEG':_0x19bc25(0xaed)+_0x19bc25(0xbca)+'ov','qOOSh':function(_0x2e0340,_0x1c6eb5){return _0x2e0340===_0x1c6eb5;},'PdELi':'fGKvz','zlelg':function(_0x4f8b7c,_0x1074f6,_0x4b26b2){return _0x4f8b7c(_0x1074f6,_0x4b26b2);},'ZiEHu':function(_0x29bec1,_0x4a7078){return _0x29bec1>_0x4a7078;},'ABfwt':_0x19bc25(0xe71),'txJUV':_0x19bc25(0x1c4),'DbrXI':function(_0x1ec179,_0x5adc1a){return _0x1ec179<_0x5adc1a;},'dqpda':function(_0x2298de,_0x539e9d){return _0x2298de!==_0x539e9d;},'tcSvn':function(_0x392815,_0x3c1e05){return _0x392815<_0x3c1e05;},'rbagQ':function(_0x4dd3f9,_0x5f526e){return _0x4dd3f9===_0x5f526e;},'ZhLKc':function(_0x4bee2e,_0x4331a8){return _0x4bee2e-_0x4331a8;},'Hpefc':_0x19bc25(0xb24),'yrqyU':function(_0x23bcbd,_0x5b02b0,_0x374644){return _0x23bcbd(_0x5b02b0,_0x374644);},'cwqMt':function(_0x475adc,_0x8730aa){return _0x475adc===_0x8730aa;},'zrzKt':function(_0x2c5fe3,_0x502d05){return _0x2c5fe3===_0x502d05;},'XcAcl':function(_0x3cb545,_0x3817c0,_0x33021c){return _0x3cb545(_0x3817c0,_0x33021c);},'eYChw':function(_0x11397a){return _0x11397a();},'BnKlA':function(_0x237bdd,_0x22b802){return _0x237bdd(_0x22b802);},'xFgvi':function(_0x24c095,_0x376a6e){return _0x24c095!==_0x376a6e;},'bagcK':function(_0x5d1ee0,_0x3bac45){return _0x5d1ee0-_0x3bac45;},'zLwYg':'NvwOy','OCUtG':function(_0x157029,_0x4b99f4){return _0x157029===_0x4b99f4;},'SImAk':function(_0x2a2711,_0xbe085f){return _0x2a2711(_0xbe085f);},'mXgPI':function(_0x28b1e2,_0x19d75c){return _0x28b1e2<=_0x19d75c;},'IFNig':function(_0x43269e,_0x5b3964){return _0x43269e===_0x5b3964;},'hFKfw':'wylek','MDToM':function(_0x2a4f53,_0x453d52){return _0x2a4f53<_0x453d52;},'hgYrZ':'\x20out\x20'+'of\x20ra'+_0x19bc25(0x965),'AEFkX':function(_0x4475ad,_0x713431){return _0x4475ad(_0x713431);},'WAQfx':_0x19bc25(0x7fc)+'1b','IiBTN':_0x19bc25(0x26d),'djHeH':function(_0x39027f){return _0x39027f();},'qVVHa':_0x19bc25(0x2e2),'kVyhb':function(_0x4a7878,_0x38fbe8){return _0x4a7878*_0x38fbe8;},'vqzFc':function(_0x260725,_0x18c4c8){return _0x260725-_0x18c4c8;},'IKppB':function(_0x2d7284,_0x6763be){return _0x2d7284*_0x6763be;},'pAiGw':function(_0x4b81a3,_0x36b6b5){return _0x4b81a3*_0x36b6b5;},'FThRh':function(_0x511520,_0x1bd49a){return _0x511520+_0x1bd49a;},'iLzLs':function(_0x662a9a,_0x4119f8){return _0x662a9a<=_0x4119f8;},'smaWD':function(_0x6875b8,_0x204f0f){return _0x6875b8+_0x204f0f;},'Ztdfb':function(_0x557b29,_0x4d7287){return _0x557b29+_0x4d7287;},'HtMeD':function(_0x4214ff,_0x510241){return _0x4214ff*_0x510241;},'VAmlF':function(_0x1c7968,_0x3fc290){return _0x1c7968/_0x3fc290;},'jeoLB':function(_0x5ebe79,_0x2dc071){return _0x5ebe79+_0x2dc071;},'zPfny':function(_0x5935d4,_0x27aea5,_0x2d7322){return _0x5935d4(_0x27aea5,_0x2d7322);},'yGTYX':'</str'+_0x19bc25(0x6e7),'hSZHT':_0x19bc25(0xb4f)+_0x19bc25(0x6c7),'QCQXP':'aria-'+_0x19bc25(0xcd2)+'ed','ghZSr':function(_0x45c1f9){return _0x45c1f9();},'ugziV':_0x19bc25(0x872),'PWMSK':function(_0xae2092){return _0xae2092();},'cYPbd':'butto'+'n','BTGvZ':function(_0x5e222e,_0x2b5e54){return _0x5e222e===_0x2b5e54;},'QOkOG':_0x19bc25(0xb59),'XmVvK':function(_0x595f20,_0x226dc6){return _0x595f20(_0x226dc6);},'wHIoC':function(_0x23938c){return _0x23938c();},'tJhWd':function(_0x64526f,_0x185347){return _0x64526f/_0x185347;},'pdoFE':function(_0x208447,_0x5bf8f1,_0x1cc5b9){return _0x208447(_0x5bf8f1,_0x1cc5b9);},'vxbHP':'sk-ra'+_0x19bc25(0x965),'fpRAW':_0x19bc25(0xae4)+_0x19bc25(0x3ce),'Wkrbp':function(_0xad16e0,_0x422f0e){return _0xad16e0(_0x422f0e);},'pXPMP':function(_0x4fe7bc,_0x562a88,_0x597903){return _0x4fe7bc(_0x562a88,_0x597903);},'wgeGS':'span','PCfgq':'sk-va'+'l','SURAs':_0x19bc25(0x320)+'l','cqUeX':'sk-la'+'bel','oOBhf':'<span'+_0x19bc25(0x1e3)+_0x19bc25(0x981)+'-hint'+'\x27>','lGPLn':_0x19bc25(0x2f2)+'n>','jCgSA':function(_0x3c6680,_0x4d380f){return _0x3c6680!==_0x4d380f;},'qkcIr':_0x19bc25(0x4db),'yXfzg':function(_0x1abb55,_0x3902fe){return _0x1abb55+_0x3902fe;},'FHjKH':_0x19bc25(0x4c5)+_0x19bc25(0x841),'niNTt':'\x20writ'+'es','yHHne':'Copy\x20'+_0x19bc25(0x5fc)+'d','ziFjh':_0x19bc25(0x78d),'jGzCh':function(_0x3924b5,_0x4f1967){return _0x3924b5+_0x4f1967;},'arYTe':function(_0xb35dc1,_0x3c002b){return _0xb35dc1+_0x3c002b;},'jUWRo':'IKHJf','ZprII':function(_0x440505,_0x5db547){return _0x440505+_0x5db547;},'UXJdM':_0x19bc25(0xcba)+'once\x20'+_0x19bc25(0xc65)+_0x19bc25(0xea8)+_0x19bc25(0x681)+_0x19bc25(0x931)+_0x19bc25(0xa0f)+_0x19bc25(0xe74)+_0x19bc25(0x265)+_0x19bc25(0xb27)+_0x19bc25(0x4ae)+_0x19bc25(0xd7d)+'n.hoo'+_0x19bc25(0x4b2)+_0x19bc25(0x5a7)+'\x20','YFAds':function(_0x52bfbe,_0x99f934,_0x406573){return _0x52bfbe(_0x99f934,_0x406573);},'gJmDl':_0x19bc25(0x2a9),'VmVDW':_0x19bc25(0xe5d)+_0x19bc25(0xcfa)+'\x20pane'+_0x19bc25(0x225)+_0x19bc25(0x365)+'ailed','xacVK':'srxGz','EzohO':function(_0x32d410,_0x3254a7){return _0x32d410+_0x3254a7;},'jNIrT':_0x19bc25(0xbfc)+_0x19bc25(0x75a),'fuuJJ':function(_0x26ac70,_0x17382f){return _0x26ac70+_0x17382f;},'KlBFn':_0x19bc25(0x653),'MhsIA':'Multi'+'plies'+'\x20move'+_0x19bc25(0xb6c)+_0x19bc25(0xac8)+_0x19bc25(0x4c5)+_0x19bc25(0x43c)+_0x19bc25(0x4f4)+_0x19bc25(0xddb)+_0x19bc25(0x955)+_0x19bc25(0x66c)+'\x20jump'+_0x19bc25(0x387)+'refus'+_0x19bc25(0xd72),'jETQx':'Enabl'+'ed','ZQnYP':_0x19bc25(0x7bd)+'plier','eeQqX':'CIfgv','iHulg':_0x19bc25(0xa68)+_0x19bc25(0xb68),'kqAvz':_0x19bc25(0xda3)+'n','HhSMM':_0x19bc25(0xdd4),'lUanC':_0x19bc25(0x4b7),'mQBtm':'Radar','REkYT':'sk-md'+_0x19bc25(0x86b),'dHKUj':_0x19bc25(0xaac)+'-spac'+_0x19bc25(0xbf7)+_0x19bc25(0x2c6)+'\x20top-'+_0x19bc25(0x2a9)+'.\x20Nee'+_0x19bc25(0x43c)+_0x19bc25(0x3f4)+_0x19bc25(0x463)+'ns.','PWjLd':function(_0x2faad5,_0xa078cb,_0x1c78f9){return _0x2faad5(_0xa078cb,_0x1c78f9);},'VaGmc':function(_0x3403fe,_0x3207ff,_0x4a0176){return _0x3403fe(_0x3207ff,_0x4a0176);},'Trkix':_0x19bc25(0xa85),'idpJm':'Not\x20d'+'rawin'+_0x19bc25(0x633),'zAvec':_0x19bc25(0x4f5)+_0x19bc25(0xda6)+'s\x20uni'+_0x19bc25(0xac3)+'fied','CfUJA':_0x19bc25(0x22b)+_0x19bc25(0xb3a)+_0x19bc25(0xb19)+_0x19bc25(0x857)+'are\x20n'+_0x19bc25(0x7e4)+'tch\x20a'+_0x19bc25(0x759)+_0x19bc25(0x6ec)+'ess\x20F'+_0x19bc25(0x4b9)+_0x19bc25(0xa84)+_0x19bc25(0x9b2)+'0°,\x20p'+_0x19bc25(0xc80)+'F9.','wWuFx':_0x19bc25(0x8c2)+_0x19bc25(0x49f)+_0x19bc25(0x818)+_0x19bc25(0x520)+'band.'+_0x19bc25(0xe87)+_0x19bc25(0x24b)+'below'+'.','dulLU':'Scree'+_0x19bc25(0xd05)+_0x19bc25(0x587)+_0x19bc25(0x69c)+_0x19bc25(0x60f)+'ield\x20'+'of\x20vi'+_0x19bc25(0x3d8)+_0x19bc25(0x2a2)+_0x19bc25(0xcab)+_0x19bc25(0x499)+'om\x20th'+_0x19bc25(0xe51)+_0x19bc25(0x7f8)+'so\x20it'+_0x19bc25(0x978)+'itted'+'\x20by\x20e'+'ye.','ZXjaC':'Field'+'\x20of\x20v'+_0x19bc25(0x33f),'UWaEg':function(_0x19f5b7,_0x37bab9,_0x11c7cf,_0x1d141a){return _0x19f5b7(_0x37bab9,_0x11c7cf,_0x1d141a);},'QVmto':_0x19bc25(0x7be),'NYegK':function(_0x505ba8,_0x557b7e){return _0x505ba8+_0x557b7e;},'ETEsd':function(_0x7cb0f2,_0x37a4ec){return _0x7cb0f2+_0x37a4ec;},'HVdco':_0x19bc25(0x90b)+_0x19bc25(0x224),'JdfXb':_0x19bc25(0xa26)+_0x19bc25(0x9f9)+_0x19bc25(0x45f)+'t','IZNOA':function(_0x2c44f5,_0x1a7a03){return _0x2c44f5+_0x1a7a03;},'EXdXv':'from\x20'+'SetLo'+'okAng'+'les','UePuG':function(_0x235584,_0x220fe2){return _0x235584+_0x220fe2;},'DJpWY':'read\x20'+_0x19bc25(0xd1e)+_0x19bc25(0x90b)+'Look\x20'+_0x19bc25(0xb48)+_0x19bc25(0x4e1)+_0x19bc25(0x8f1),'miytL':_0x19bc25(0xa04),'rEPkF':'\x0ahook'+_0x19bc25(0x691)+'ister'+_0x19bc25(0x24c)+_0x19bc25(0x291)+_0x19bc25(0x95b)+'lied\x20'+'(','HybOb':function(_0x449dc0,_0x469e0f){return _0x449dc0===_0x469e0f;},'NAXYV':'\x20erro'+_0x19bc25(0x765),'ZIInb':_0x19bc25(0xb1d)+_0x19bc25(0xe1f)+_0x19bc25(0xcac)+_0x19bc25(0xe02)+'ved\x20c'+'orrec'+_0x19bc25(0x26e),'IdmvG':_0x19bc25(0x4be),'hdtYB':'Hooks','kyXqf':_0x19bc25(0x549),'vBlWy':function(_0x1eb10e,_0x21b3a7){return _0x1eb10e(_0x21b3a7);},'JpaGA':_0x19bc25(0x74f)+'es','ngcuo':_0x19bc25(0x3f7)+'one\x20b'+'ut\x20yo'+'u','OhTrl':_0x19bc25(0x2d8)+'a','YZzSZ':function(_0xd1ae0b,_0x356228){return _0xd1ae0b+_0x356228;},'jCgrQ':function(_0x1f0d81,_0x4f9fbc){return _0x1f0d81+_0x4f9fbc;},'idaZp':function(_0xd70596,_0x4d0671){return _0xd70596+_0x4d0671;},'VmGnb':_0x19bc25(0x37c)+'r','cJTMu':_0x19bc25(0xe86)+'ion','DRckh':_0x19bc25(0x9c9)+'speed','HkoRT':_0x19bc25(0x3c6)+'hScri'+'pt+0x'+'C0','jbawz':function(_0x46bd5d,_0x4d8bf8,_0x5a1db6,_0x9fd0e0){return _0x46bd5d(_0x4d8bf8,_0x5a1db6,_0x9fd0e0);},'iFOhN':_0x19bc25(0xd9b),'neqmB':_0x19bc25(0x34e),'jlmXT':_0x19bc25(0xa33)+'t','ifJbw':function(_0x3f8bbb,_0x1cc3df){return _0x3f8bbb&_0x1cc3df;},'YAIrI':'WimnX','dBYnp':function(_0x2ae76c,_0x1b6c77){return _0x2ae76c===_0x1b6c77;},'sJcTn':'ZfwAH','JrRtc':function(_0x2816f8,_0xafa946){return _0x2816f8+_0xafa946;},'dJepK':function(_0x361c76,_0x47c4f6){return _0x361c76===_0x47c4f6;},'xLewq':_0x19bc25(0x5e7),'xKYHk':function(_0x4e5c7d,_0x1c42bb){return _0x4e5c7d-_0x1c42bb;},'fwjsj':function(_0x483d19,_0x20da47){return _0x483d19-_0x20da47;},'KnquN':function(_0x53c215){return _0x53c215();},'EzdgE':'jrbVE','GaRSx':_0x19bc25(0xa6b)+_0x19bc25(0x5a6),'RoZjX':'touch'+'end','HgIbh':'XAlOf','gVDfi':'Sakur'+_0x19bc25(0x6d3)+'llWar'+_0x19bc25(0x915)+'aitin'+'g\x20for'+'\x20the\x20'+_0x19bc25(0x563)+'(Inse'+_0x19bc25(0x7e7),'StkdZ':_0x19bc25(0xac0)+'de','hYaSG':_0x19bc25(0x4fa)+'in','LmnfW':'Sakur'+'a\x20Ski'+_0x19bc25(0x322)+'z','gsial':'mn-su'+'b','nqlpg':'start'+'ing…','fqBkZ':function(_0x9ae78c,_0x59597c,_0x47d2ef){return _0x9ae78c(_0x59597c,_0x47d2ef);},'GAWfz':function(_0x3e606,_0x14046d){return _0x3e606<_0x14046d;},'hczMc':'mn-ta'+'b','EDFRH':function(_0x4b06ed,_0x4e80cc){return _0x4b06ed+_0x4e80cc;},'EyqUs':function(_0x2fb315,_0x218cd2){return _0x2fb315+_0x218cd2;},'xyQFf':'sakur'+_0x19bc25(0xd41)+'al','aANra':'Sakur'+_0x19bc25(0x6d3)+_0x19bc25(0x322)+_0x19bc25(0xd1d)+'sert)','FuAAH':function(_0x2068d8,_0x1ee3b4){return _0x2068d8===_0x1ee3b4;},'NUwud':_0x19bc25(0x9b5)+_0x19bc25(0x6d3)+_0x19bc25(0x322)+_0x19bc25(0xc00),'LDuHG':function(_0x39ddad,_0x480605){return _0x39ddad(_0x480605);},'YKCQJ':_0x19bc25(0x2fb)+'ion:f'+_0x19bc25(0x4cc)+_0x19bc25(0xe20)+'12px;'+'top:1'+_0x19bc25(0xa37)+_0x19bc25(0xdd3)+_0x19bc25(0x836)+_0x19bc25(0xcf7)+_0x19bc25(0xa58)+_0x19bc25(0x81a)+_0x19bc25(0x479)+_0x19bc25(0x8b6)+_0x19bc25(0x3a1)+_0x19bc25(0xaf5)+_0x19bc25(0xba6),'ywrZP':'backg'+_0x19bc25(0xdd2)+_0x19bc25(0x753)+_0x19bc25(0xd23)+'2,29,'+_0x19bc25(0xb79)+'order'+_0x19bc25(0xadc)+_0x19bc25(0x6ed)+_0x19bc25(0x866)+'(255,'+_0x19bc25(0xe39)+'77,.5'+');col'+_0x19bc25(0x842),'BuTWA':_0x19bc25(0x803),'LJhGW':function(_0x5a7225,_0x367372){return _0x5a7225+_0x367372;},'pphyz':_0x19bc25(0xe7a)+'n','RLTLo':_0x19bc25(0x6f2),'FwgFQ':'qhrpS','XHjZy':function(_0x21bda8,_0x24f5eb){return _0x21bda8(_0x24f5eb);},'hoskM':function(_0x280cdd,_0x217a9e){return _0x280cdd+_0x217a9e;},'FIlrQ':function(_0x482fac,_0x57806c){return _0x482fac+_0x57806c;},'AdOyA':function(_0x25ef54,_0x4b7473){return _0x25ef54+_0x4b7473;},'yKTcz':_0x19bc25(0x928)+_0x19bc25(0xceb)+'\x20','xcCIc':'[data'+_0x19bc25(0x9df),'RdKpO':function(_0x400ca3,_0x804d3a){return _0x400ca3<_0x804d3a;},'cmyTy':function(_0x28e956,_0x5d1300){return _0x28e956===_0x5d1300;},'eQwhy':'from\x20'+_0x19bc25(0x920)+_0x19bc25(0x285)+'e()','UUovk':function(_0x137aae,_0x59b0d4){return _0x137aae+_0x59b0d4;},'wdqTV':function(_0x17d8c0,_0x4a2026){return _0x17d8c0+_0x4a2026;},'CTRqZ':function(_0x580c1b,_0x330577){return _0x580c1b===_0x330577;},'xggsX':_0x19bc25(0x9bc)+'8','RcYaB':function(_0x40b55d,_0x1f6cf0){return _0x40b55d(_0x1f6cf0);},'WYnpI':function(_0x4238d8){return _0x4238d8();},'ggchG':function(_0x170a35,_0x836c6e){return _0x170a35===_0x836c6e;},'JcfWR':_0x19bc25(0x596),'iMnVP':function(_0x4182f9,_0x529400){return _0x4182f9+_0x529400;},'GYMUF':function(_0x3299b7,_0x173a16){return _0x3299b7+_0x173a16;},'pfdpX':function(_0x111098,_0x969fb){return _0x111098+_0x969fb;},'PGRtN':_0x19bc25(0xbf6)+'n=','CYTDa':_0x19bc25(0x750)+'r=','pFwnj':_0x19bc25(0xcdf)+'n=','fQijE':function(_0x55910f,_0x28ab79){return _0x55910f<_0x28ab79;},'seMeR':function(_0x1648d,_0x71a154){return _0x1648d<_0x71a154;},'fXHoS':function(_0x2d6c2e,_0x477cf0){return _0x2d6c2e===_0x477cf0;},'smINy':_0x19bc25(0x1ef),'LpmcA':_0x19bc25(0xbc8),'MTWFt':function(_0x417f80,_0x3cd724){return _0x417f80+_0x3cd724;},'YnabY':function(_0x304163,_0x19b3ca){return _0x304163*_0x19b3ca;},'dypUL':_0x19bc25(0x8e1),'nFfTD':function(_0x174521,_0x2b1a02){return _0x174521===_0x2b1a02;},'KTcmd':function(_0x5d9c8a,_0xf9e984){return _0x5d9c8a<_0xf9e984;},'LkPsZ':function(_0x5ef945,_0x47b026){return _0x5ef945*_0x47b026;},'plBRV':function(_0x5849d2,_0x5bad43){return _0x5849d2-_0x5bad43;},'VVIFm':function(_0x3bf882,_0x305d0c){return _0x3bf882*_0x305d0c;},'yOBux':function(_0x454f61,_0x1e339f){return _0x454f61>_0x1e339f;},'LGIin':function(_0x4ff515,_0x13d7fe){return _0x4ff515>_0x13d7fe;},'YJBjw':function(_0x48aa41,_0x3514d4){return _0x48aa41!==_0x3514d4;},'uvRJN':_0x19bc25(0xbee),'Rlbbi':function(_0x146168,_0x3d6dbf){return _0x146168*_0x3d6dbf;},'NhGjy':function(_0x50c2b6,_0x4a508c){return _0x50c2b6<_0x4a508c;},'wNggZ':_0x19bc25(0xaa9),'lOQOR':function(_0x294edd,_0xfe6a10){return _0x294edd-_0xfe6a10;},'DmRuO':function(_0x228753,_0x177ac2){return _0x228753<_0x177ac2;},'wOiVt':function(_0x3ccc93,_0x51f714){return _0x3ccc93!==_0x51f714;},'BwZzJ':'QaNFp','ZvUYk':function(_0x7c7425,_0x545a65){return _0x7c7425>_0x545a65;},'gLalx':function(_0xf78ea4,_0xa61ba1){return _0xf78ea4*_0xa61ba1;},'yGBlF':function(_0x274d43,_0x5c2f56){return _0x274d43>_0x5c2f56;},'tRbGG':_0x19bc25(0x64c),'zuKTm':'\x20|\x20','SrLkL':function(_0x5276d8,_0x130ad5){return _0x5276d8<_0x130ad5;},'ECJMx':function(_0x7306b9,_0x32adfe,_0x4aa71f,_0x3e899b){return _0x7306b9(_0x32adfe,_0x4aa71f,_0x3e899b);},'wXmdf':function(_0x27a536,_0x22f6fe){return _0x27a536+_0x22f6fe;},'ezhoU':function(_0x5b7ede,_0x277fbc){return _0x5b7ede===_0x277fbc;},'jkhDb':function(_0x288e81,_0x4c1be0){return _0x288e81/_0x4c1be0;},'cIKbJ':function(_0x38e8fe,_0x212f6d){return _0x38e8fe*_0x212f6d;},'hRnkl':'czJDB','VVtzj':function(_0x963635,_0x2f648c){return _0x963635+_0x2f648c;},'blwPk':function(_0x55eac2,_0x490181,_0x56582b){return _0x55eac2(_0x490181,_0x56582b);},'dRaXG':'cixMK','cytkn':_0x19bc25(0x6f8),'zgcXX':_0x19bc25(0xd61),'pzzBP':function(_0x4c21e8,_0x4c5f00){return _0x4c21e8+_0x4c5f00;},'iCmyl':_0x19bc25(0xbd3)+_0x19bc25(0xa82)+'x;fon'+'t:10p'+_0x19bc25(0x8ec)+_0x19bc25(0x7aa)+'onosp'+_0x19bc25(0xba4)+_0x19bc25(0x37d)+'as,mo'+_0x19bc25(0xdd8)+_0x19bc25(0xe6b)+_0x19bc25(0x570)+_0x19bc25(0x433)+'9;','YcYbL':function(_0x59bb82,_0x56905e){return _0x59bb82+_0x56905e;},'QTdVI':'<canv'+_0x19bc25(0xa7c)+'=\x22sak'+'ura-e'+'sp-cv'+'\x22\x20wid'+_0x19bc25(0x250)+'60\x22\x20h'+_0x19bc25(0xddb)+_0x19bc25(0x5fe)+_0x19bc25(0x5d4)+_0x19bc25(0x924)+_0x19bc25(0x86d)+'y:blo'+_0x19bc25(0x4cb)+_0x19bc25(0x260)+'as>','njaCW':'<div\x20'+_0x19bc25(0x286)+_0x19bc25(0xdb3)+'-esp-'+_0x19bc25(0xe98)+_0x19bc25(0xac5)+_0x19bc25(0x335)+'-alig'+_0x19bc25(0x236)+'ter\x22>'+'</div'+'>','VQxii':_0x19bc25(0x8a9),'Jrkuw':_0x19bc25(0x425)+_0x19bc25(0xb50)+_0x19bc25(0xc09)+_0x19bc25(0x6c1)+')','trxXw':_0x19bc25(0xce2)+_0x19bc25(0xc58)+'es','XcmBy':function(_0x4cda52,_0x11335c){return _0x4cda52!==_0x11335c;},'NAWAE':_0x19bc25(0x1d3),'iMuXD':function(_0x51f3df,_0x261ad3){return _0x51f3df!==_0x261ad3;},'ZBkgK':_0x19bc25(0x852),'VKRoO':function(_0x57072c,_0x566ce5){return _0x57072c<_0x566ce5;},'BvMxa':function(_0x525695,_0x1f9c61){return _0x525695!==_0x1f9c61;},'lqNSU':function(_0x46a314,_0x16caa4){return _0x46a314*_0x16caa4;},'EKUoJ':function(_0x17729f,_0x237833){return _0x17729f/_0x237833;},'zYzQV':function(_0x36c56a,_0x213d75){return _0x36c56a+_0x213d75;},'ikBSw':function(_0x3d61ab,_0x41bf11){return _0x3d61ab/_0x41bf11;},'wzThg':function(_0x57042b,_0x1f39b1){return _0x57042b-_0x1f39b1;},'gGUfX':function(_0x5be1d7,_0x11d2de){return _0x5be1d7/_0x11d2de;},'Gtwwi':function(_0x43f00b,_0x39b74f){return _0x43f00b>_0x39b74f;},'FYvuH':function(_0x2c9250,_0x124f0b){return _0x2c9250/_0x124f0b;},'GROXg':function(_0x2abb0c,_0x7700ed){return _0x2abb0c/_0x7700ed;},'SDubT':function(_0x590712,_0x576905){return _0x590712*_0x576905;},'rBxnr':function(_0x62bbac){return _0x62bbac();},'TVSpV':function(_0x5e6800,_0x28f015){return _0x5e6800<_0x28f015;},'pzVvj':function(_0x3f7c9f,_0x1447b8){return _0x3f7c9f/_0x1447b8;},'lAsKv':'ytlrF','GJYhA':function(_0x1ac1a6,_0x53177c){return _0x1ac1a6+_0x53177c;},'ynLVl':function(_0x4df88d,_0x20eb08){return _0x4df88d/_0x20eb08;},'NMeVK':function(_0x51c843,_0xdc6286){return _0x51c843-_0xdc6286;},'PWRGd':_0x19bc25(0xd28)+'255,1'+_0x19bc25(0x20f)+_0x19bc25(0x778)+')','LgnFO':function(_0x1c37ee,_0x314be9){return _0x1c37ee-_0x314be9;},'gKRcY':function(_0x215871,_0x27bac0){return _0x215871*_0x27bac0;},'VjYFr':function(_0x17279c,_0x1279b0){return _0x17279c*_0x1279b0;},'VuTAL':function(_0xe16488,_0x161505){return _0xe16488*_0x161505;},'agjzN':function(_0x527fdd,_0x598860){return _0x527fdd*_0x598860;},'qTqtS':function(_0x2abc4a,_0x394772){return _0x2abc4a!==_0x394772;},'ZOzBj':function(_0x35ca9e,_0x4d0445){return _0x35ca9e===_0x4d0445;},'Vayoq':_0x19bc25(0x2b5)+'6a','dGXnX':'#ff6e'+'74','AFzzT':function(_0x1d4582,_0x127f51){return _0x1d4582*_0x127f51;},'VqoWb':function(_0x3d196a,_0x4e49fd){return _0x3d196a+_0x4e49fd;},'SqIrt':function(_0x47dc65,_0x5c16f1){return _0x47dc65+_0x5c16f1;},'tJUUA':function(_0x342757,_0x28c260){return _0x342757+_0x28c260;},'OgRFL':function(_0xc4b3bf,_0x53365c){return _0xc4b3bf+_0x53365c;},'HDFYE':'\x20·\x20fo'+'v\x20','WQdAi':'\x20·\x20te'+'am','UYqXG':_0x19bc25(0x353),'KEWxM':'dFLxD','iLyWf':function(_0x24b553,_0x5d9c9d){return _0x24b553(_0x5d9c9d);},'GmGhG':function(_0x37c91c,_0x8842a){return _0x37c91c+_0x8842a;},'ntTJx':function(_0x1dc5b9,_0x36667d){return _0x1dc5b9+_0x36667d;},'ZlwRL':'Regis'+_0x19bc25(0x641)+'\x20','IDFDZ':function(_0x2929f8,_0x193dc6){return _0x2929f8(_0x193dc6);},'NzUnD':_0x19bc25(0x3f0),'VwtTx':_0x19bc25(0xd28)+_0x19bc25(0xb8d)+'10,11'+'6,.95'+')','Mixuc':function(_0x3b2216,_0x29b97f){return _0x3b2216+_0x29b97f;},'zNoZV':'EKqBb','LwMsd':_0x19bc25(0x9ec),'JWjxR':function(_0x53ae30){return _0x53ae30();},'oSyJk':function(_0x2dee89,_0x452d74){return _0x2dee89/_0x452d74;},'gJGBP':'mQUPf','mycoj':function(_0x245e38,_0x172adf,_0xf39826,_0x59d646,_0x381fe2){return _0x245e38(_0x172adf,_0xf39826,_0x59d646,_0x381fe2);},'PlaGj':function(_0x46f871,_0x33afac,_0x4a58a3,_0x5c0fb4,_0x3fa174){return _0x46f871(_0x33afac,_0x4a58a3,_0x5c0fb4,_0x3fa174);},'IwmIP':'0x28\x20'+'(gues'+'s)','aOPHQ':'0x1c\x20'+_0x19bc25(0xd24)+'s)','BzlvW':function(_0x3f2fac,_0x3282ea){return _0x3f2fac>=_0x3282ea;},'QIYAx':function(_0xc62a4e,_0x30c771){return _0xc62a4e<=_0x30c771;},'XfdGS':function(_0x3e35e1){return _0x3e35e1();},'QeTNX':'pKJFH','ANNjJ':function(_0x2b669a,_0x386c6d){return _0x2b669a+_0x386c6d;},'avWcW':function(_0x27da27,_0xa78d51){return _0x27da27(_0xa78d51);},'UvKPa':function(_0x3b4597,_0x244cfd){return _0x3b4597-_0x244cfd;},'VSPbf':function(_0x25e122){return _0x25e122();},'ipVcR':_0x19bc25(0x5a8)+'y\x20fai'+'led:\x20','kuWsr':_0x19bc25(0xdeb)+_0x19bc25(0x9f2)+_0x19bc25(0xd38)+_0x19bc25(0xe25),'ywGjY':function(_0x1b5108,_0xf409a0){return _0x1b5108+_0xf409a0;},'RFwIP':function(_0x18a6e0,_0x2795d6){return _0x18a6e0+_0x2795d6;},'EDGCx':_0x19bc25(0xbe2)+_0x19bc25(0x92c),'gcdCb':function(_0x8720f7,_0x3f91de){return _0x8720f7+_0x3f91de;},'uxkwI':function(_0x4072ef,_0x583c12){return _0x4072ef+_0x583c12;},'OAvqC':'plugi'+_0x19bc25(0x921)+_0x19bc25(0x9fb)+'\x20is\x20n'+_0x19bc25(0x63c)+_0x19bc25(0x770)+'Unity'+_0x19bc25(0xab1)+'dkit.'+_0x19bc25(0x425)+_0x19bc25(0x2ae)+'the\x20p'+_0x19bc25(0xbc4)+_0x19bc25(0x478)+_0x19bc25(0xa31)+'\x20','XfTtE':'again'+'st\x20a\x20'+_0x19bc25(0x57b)+_0x19bc25(0xa4d)+'Runti'+_0x19bc25(0xcd8)+_0x19bc25(0x7e2)+'e\x20tha'+_0x19bc25(0xb38)+_0x19bc25(0x923)+'al\x20no'+'w\x20exp'+'oses.','IAKJX':'ESP:\x20','GfYLz':'KOMBd','ewJAH':_0x19bc25(0x1d9)+_0x19bc25(0xd55)+_0x19bc25(0xa55)+_0x19bc25(0x251)+'=','CgAdT':function(_0x314f49,_0x4b73b1){return _0x314f49+_0x4b73b1;},'gHLBG':_0x19bc25(0x20e)+'\x20inst'+_0x19bc25(0x7d7)+_0x19bc25(0xc45)+_0x19bc25(0xaba)+_0x19bc25(0x655)+_0x19bc25(0x9e4)+'urce:'+'\x20','cBDaW':_0x19bc25(0x898),'fylIF':'windo'+'w.Uni'+_0x19bc25(0x555)+'Modki'+_0x19bc25(0x66f)+'ueWra'+'pper\x20'+_0x19bc25(0xd1a)+'ssing'+'\x20-\x20ca'+'pture'+'\x20is\x20r'+_0x19bc25(0x62a)+_0x19bc25(0x303)+_0x19bc25(0x34c),'JStfW':function(_0x123dba,_0x272ac7){return _0x123dba>_0x272ac7;},'MFlJb':'pcSmb','xaCZG':function(_0xf5c98d,_0x131e82){return _0xf5c98d===_0x131e82;},'cEUEl':function(_0x37ec6,_0x307396){return _0x37ec6+_0x307396;},'JnYGx':function(_0x418201,_0x11850c){return _0x418201+_0x11850c;},'TEaao':_0x19bc25(0xa78)+_0x19bc25(0xb09)+_0x19bc25(0xbfb)+_0x19bc25(0xa4c)+_0x19bc25(0x757)+'\x20docu'+'ment-'+_0x19bc25(0xa2b)+'.','bppAI':function(_0x49e46a,_0x27c709){return _0x49e46a>_0x27c709;},'ZBDuH':'Eithe'+_0x19bc25(0x397)+'\x20are\x20'+_0x19bc25(0x310)+_0x19bc25(0xd35)+_0x19bc25(0xa28)+_0x19bc25(0x867)+_0x19bc25(0x48f)+_0x19bc25(0x54b)+_0x19bc25(0x589)+_0x19bc25(0x52d)+'ong\x20o'+_0x19bc25(0x6b1)+_0x19bc25(0x58f),'xjIHh':function(_0xbf38d0,_0x3a622c){return _0xbf38d0!==_0x3a622c;},'OIzRb':_0x19bc25(0x20a),'XKkli':function(_0x3e95d3,_0x1ae5f1){return _0x3e95d3+_0x1ae5f1;},'uosws':function(_0x11a499,_0x558f46){return _0x11a499(_0x558f46);},'JcVdS':function(_0x5df8dd,_0x50a662,_0x77cd3b){return _0x5df8dd(_0x50a662,_0x77cd3b);},'MKsCI':function(_0x174966,_0x4d9342){return _0x174966-_0x4d9342;},'McENf':function(_0x483429,_0x274381,_0x5c49f1){return _0x483429(_0x274381,_0x5c49f1);},'IYiPB':function(_0x41d9d1,_0x43eadd){return _0x41d9d1+_0x43eadd;},'mFext':function(_0xfa28e4,_0x58e118){return _0xfa28e4(_0x58e118);},'gxibc':_0x19bc25(0x22d),'vQqUy':'UlUZz','YjVPa':'vIzGq','SHRSC':function(_0x51beb2,_0x22a918){return _0x51beb2-_0x22a918;},'jKrJj':_0x19bc25(0x6f7)+'b1','lFpRK':_0x19bc25(0xc20)+_0x19bc25(0xbb5)+'w_v2','iBUJx':_0x19bc25(0xd0f)+'2','NMWeX':'%c[sa'+_0x19bc25(0xcfa)+_0x19bc25(0x25a)+'AL\x20AC'+_0x19bc25(0x6cb),'sLZfx':_0x19bc25(0x6d9)+'-weig'+_0x19bc25(0x85a)+_0x19bc25(0xaf4)+_0x19bc25(0x9e7)+'e:14p'+'x','vXObb':function(_0x15b7c9,_0x3d4311,_0x332b5a){return _0x15b7c9(_0x3d4311,_0x332b5a);},'sewfq':_0x19bc25(0xc89),'tHdCJ':'messa'+'ge','UtxXS':'\u0094\u0090\u0089\u008f\u0089'+'\u0095\u0092\u0089\u0092\u0087'+'\u008e','KBviu':_0x19bc25(0x213)+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','uoNwV':_0x19bc25(0xc3a)+_0x19bc25(0x600)+'\u0095','kkcNu':'\u0089\u0088\u0091\u0090\u008a'+_0x19bc25(0xca8)+'\u0091','yAEFS':'\u008f\u008c\u0086\u008e\u008f'+_0x19bc25(0x95f)+'\u0091','FlIhO':_0x19bc25(0x797)+_0x19bc25(0xcc1)+'\u0088','vQStn':_0x19bc25(0x346)+_0x19bc25(0xc91)+'\u008a','dAQyW':_0x19bc25(0x95a)+'\u0090\u0095\u008d\u0090\u0088'+'\u008b','ljNQK':_0x19bc25(0x46d)+_0x19bc25(0x95c)+'\u008a','ZqYeI':_0x19bc25(0xd11)+_0x19bc25(0x4e7)+'\u0090','SBBLC':_0x19bc25(0x208)+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','kKKRe':'\u0092\u0091\u008e\u0095\u0092'+'\u0090\u008b\u008d\u008d\u0093'+'\u008e','XxCLP':_0x19bc25(0xded)+_0x19bc25(0x67e)+'\u0094','XHAZb':_0x19bc25(0x79f)+'\u0086\u008b\u0091\u0087\u008a'+'\u008b','iegAM':_0x19bc25(0xc35)+_0x19bc25(0xad5)+'\u008a','wCvlF':_0x19bc25(0x87b)+'\u008c\u0088\u008a\u0089\u0092'+'\u0087','NZShp':_0x19bc25(0x43a),'MHmLr':_0x19bc25(0x315)+_0x19bc25(0x4f0)+'\u008a','FZlGN':_0x19bc25(0x308)+_0x19bc25(0x756)+'\u0094','boaJB':_0x19bc25(0x1bd)+'\u008b\u0089\u0092\u0089\u008b'+'\u0095','ENUte':_0x19bc25(0x8b1)+_0x19bc25(0xd36)+'\u0090','cowkt':_0x19bc25(0x5b6)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','PJLuv':'\u0095\u008e\u0095\u0087\u0086'+_0x19bc25(0x43d)+'\u008e','fuWwZ':'\u0087\u008d\u0095\u008d\u0087'+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','vnkTJ':_0x19bc25(0x8b3)+_0x19bc25(0x6ca)+'\u0094','itOpR':'\u008f\u0092\u008d\u008d\u0089'+_0x19bc25(0xacd)+'\u0086','UOIAC':'\u008b\u0095\u008a\u008c\u0086'+'\u008d\u0095\u0093\u0094\u008b'+'\u0091','FrCLo':'\u0094\u0094\u008e\u0091\u0090'+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','iCcqB':_0x19bc25(0xac2)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','wjUol':_0x19bc25(0x3ec)+_0x19bc25(0x381)+'\u0087','cXUsi':_0x19bc25(0x7a5)+'\u008b\u008e\u008e\u0091\u0086'+'\u0087','VDcfq':'\u0092\u008c\u0089\u008a\u0093'+_0x19bc25(0x6e0)+'\u0087','CucvQ':'\u008b\u0092\u008b\u008f\u0095'+_0x19bc25(0x3b7)+'\u008f','YBWFS':_0x19bc25(0x994)+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','NgNgp':_0x19bc25(0x239)+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','EITgF':'.ctor','pMJOS':_0x19bc25(0xb78)+_0x19bc25(0xe1c)+'\u008b','aZrVl':'\u0087\u0095\u008f\u008d\u008e'+_0x19bc25(0xc74)+'\u0091','XFhvA':_0x19bc25(0x1e0)+_0x19bc25(0x640)+'\u008f','sugkQ':'\u0086\u0092\u0092\u008a\u008e'+_0x19bc25(0x5a1)+'\u0087','LiJop':'\u0087\u0093\u0093\u0087\u0087'+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','JhcCJ':'\u0090\u0090\u008f\u008d\u008a'+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','cgVTK':_0x19bc25(0xdf1)+_0x19bc25(0x52b)+'\u0091','muKVo':_0x19bc25(0x8f8)+_0x19bc25(0xe59)+'\u0086','yiQSL':_0x19bc25(0x6a0)+_0x19bc25(0xd9f)+'\u008b','sJXwI':_0x19bc25(0x693)+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','EXxHg':'\u0094\u0090\u0095\u0092\u008e'+_0x19bc25(0x74b)+'\u008f','uPcRr':'\u008d\u008c\u0086\u0094\u008d'+_0x19bc25(0x1f7)+'\u008c','qUVhK':_0x19bc25(0x762)+'\u0086\u0094\u0094\u008e\u008d'+'\u0090','bjcFp':'\u008f\u0086\u0090\u0094\u0089'+_0x19bc25(0x804)+'\u008a','cKSSl':_0x19bc25(0x80c)+_0x19bc25(0x29a)+'\u0089','Bofaa':_0x19bc25(0xc8a),'IfdTF':'\u0087\u0091\u0091\u0090\u0091'+_0x19bc25(0xc07)+'\u0086','VtpYx':'\u0087\u0094\u0093\u008f\u008d'+'\u0088\u0094\u008d\u008d\u008c'+'\u008c','zeHSi':'\u008b\u0086\u008e\u0095\u0091'+_0x19bc25(0xdce)+'\u0094','KGved':_0x19bc25(0xd29)+'\u0093\u0092\u0093\u0092\u0089'+'\u008c','bMoca':_0x19bc25(0xcff)+_0x19bc25(0x7c9)+'\u0093','zDFvk':'OnDes'+_0x19bc25(0x966),'SxuTq':_0x19bc25(0xb98)+_0x19bc25(0x8fc)+'\u008a','Hhter':_0x19bc25(0x4c4)+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','sBLgA':_0x19bc25(0x2ff)+_0x19bc25(0x1e8)+_0x19bc25(0xbc6)+_0x19bc25(0xa00)+_0x19bc25(0xaaf),'foKAs':'\u008b\u0086\u0094\u0094\u0091'+_0x19bc25(0x312)+'\u0093','gYbWS':_0x19bc25(0x35b)+'\u008a\u0088\u0092\u0095\u0094'+'\u0086','omByw':_0x19bc25(0x544)+'\u008e\u0090\u0087\u0087\u0092'+'\u008e','oYpZs':_0x19bc25(0x68c)+_0x19bc25(0x37f)+'\u0094','joXof':'\u008e\u0094\u008b\u0090\u008e'+'\u0095\u0092\u0086\u008a\u008e'+'\u008c','MAeDj':'OnApp'+'licat'+_0x19bc25(0x89c)+_0x19bc25(0x4c9),'heepk':'\u0095\u008e\u008f\u008b\u008d'+_0x19bc25(0x8aa)+'\u0094','TPjhD':_0x19bc25(0x766)+'\u008e\u008d\u0089\u008b\u0093'+'\u008e','nNmYf':'\u0086\u0088\u0095\u0092\u0094'+'\u0086\u0089\u0086\u008b\u008b'+'\u0088','uyQgQ':_0x19bc25(0xa88)+_0x19bc25(0x567)+'\u0094','kohwN':'\u0088\u008f\u0094\u0095\u008a'+'\u0091\u008b\u0089\u0094\u0092'+'\u0095','tAKFF':_0x19bc25(0x8dd)+'\u0093\u0086\u0088\u008e\u0090'+'\u0092','Btito':_0x19bc25(0xa93)+_0x19bc25(0x8e9)+'\u0092','bSDIV':'\u0093\u0094\u0087\u008b\u0086'+_0x19bc25(0x255)+'\u008e','kSDZa':'\u0094\u0088\u008a\u0094\u0092'+_0x19bc25(0x373)+'\u0092','pLfIw':_0x19bc25(0xc0a)+_0x19bc25(0x771)+'\u008a','VHRbB':_0x19bc25(0xb97)+'\u008e\u008e\u0094\u008f\u0095'+'\u0095','sdQXT':'Netwo'+'rkPla'+'yerAn'+'imati'+_0x19bc25(0x66a),'GGtAQ':_0x19bc25(0xe2e)+_0x19bc25(0x6f0)+_0x19bc25(0x4bb),'maqhA':_0x19bc25(0x678)+'Bot','Spzdc':_0x19bc25(0x681)+_0x19bc25(0x46a)+_0x19bc25(0xdf3)+_0x19bc25(0x559),'egWGx':_0x19bc25(0x390)+'t.dll','ekIMb':_0x19bc25(0x6a8)+_0x19bc25(0x2ac)+_0x19bc25(0x7fd)+_0x19bc25(0x889)+'rolle'+_0x19bc25(0xc6d),'wtMcR':_0x19bc25(0x956)+_0x19bc25(0x261)+'d','OeEsu':'obfB','sAcpZ':_0x19bc25(0x34d)+'form','UkKdt':_0x19bc25(0x72f),'VWIja':_0x19bc25(0x551),'goTRS':'mouse'+_0x19bc25(0x575),'CmHEW':_0x19bc25(0x65a)+'le','sqjpu':_0x19bc25(0x76f),'oYdAn':_0x19bc25(0x474)+_0x19bc25(0xe21)+'th','PanLr':_0x19bc25(0x4a6),'cayCo':_0x19bc25(0x71b)+'h','eSohp':_0x19bc25(0xab8),'zTqMo':_0x19bc25(0x582),'LwoXn':_0x19bc25(0x416)+_0x19bc25(0xe16),'qxxlN':_0x19bc25(0x1ca),'FPwDf':'sakur'+_0x19bc25(0x72b)+_0x19bc25(0xb6b),'BZjcT':function(_0x5071e2,_0x5ced08){return _0x5071e2!==_0x5ced08;},'ieiMF':_0x19bc25(0x5d9)+'ls','bVlja':'value'+'s','QhdnW':function(_0x3b11ba,_0x3a16c7){return _0x3b11ba+_0x3a16c7;},'EagWN':function(_0x1ec15d,_0x1b86cb){return _0x1ec15d+_0x1b86cb;},'axlti':function(_0x2b3ab0,_0x14a83b){return _0x2b3ab0+_0x14a83b;},'ukBkw':function(_0xcc4532,_0x499bad){return _0xcc4532+_0x499bad;},'SgTrA':function(_0x3ba53,_0x29372b){return _0x3ba53+_0x29372b;},'UAlbx':function(_0x595993,_0x449e44){return _0x595993+_0x449e44;},'DUgKu':function(_0x52b67a,_0x4cc933){return _0x52b67a+_0x4cc933;},'pjAah':_0x19bc25(0xdef)+'ra-me'+_0x19bc25(0xcc3)+_0x19bc25(0xb26)+_0x19bc25(0x870)+_0x19bc25(0xd6a),'ZYsXt':_0x19bc25(0xc9f)+_0x19bc25(0xbc1)+':0\x200\x20'+_0x19bc25(0x53e)+_0x19bc25(0x866)+_0x19bc25(0x7c4)+'255,2'+'55,.0'+'6),in'+'set\x200'+_0x19bc25(0xc5b)+'0\x20rgb'+_0x19bc25(0x902)+',255,'+'255,.'+'05),0'+_0x19bc25(0xca0)+'\x2080px'+'\x20rgba'+_0x19bc25(0x41b)+_0x19bc25(0x704)+');','aCYZA':_0x19bc25(0xdef)+'ra-me'+'nu-ro'+_0x19bc25(0x223)+_0x19bc25(0xdac)+_0x19bc25(0x6ef)+_0x19bc25(0x75b)+'acity'+_0x19bc25(0xbf9)+'ansfo'+_0x19bc25(0x4ad)+_0x19bc25(0xdfc)+_0x19bc25(0xb6e)+_0x19bc25(0xbcf)+_0x19bc25(0xcc4)+'to;}','IYSWv':'.mn-s'+_0x19bc25(0x85d)+_0x19bc25(0x86d)+_0x19bc25(0x73c)+'x;fle'+'x-dir'+_0x19bc25(0x22a)+'n:col'+_0x19bc25(0xa56)+_0x19bc25(0x3b3)+_0x19bc25(0x389)+':cent'+_0x19bc25(0xa3b)+'p:4px'+_0x19bc25(0x612)+'h:62p'+_0x19bc25(0x869)+_0x19bc25(0xe8d)+'e;pad'+'ding:'+_0x19bc25(0x51b)+'0;','ySVpg':'.mn-l'+'ogo{d'+'ispla'+_0x19bc25(0x384)+'d;pla'+'ce-it'+_0x19bc25(0x31d)+_0x19bc25(0xcf1)+_0x19bc25(0x612)+'h:32p'+_0x19bc25(0x4fe)+_0x19bc25(0x86c)+_0x19bc25(0x62d)+_0x19bc25(0xb5f)+'-bott'+_0x19bc25(0x687)+_0x19bc25(0xa60),'FUdEd':_0x19bc25(0x948)+'ogo-s'+_0x19bc25(0x95e)+_0x19bc25(0x51a)+_0x19bc25(0x408)+'eight'+_0x19bc25(0x697)+';over'+_0x19bc25(0xe5a)+_0x19bc25(0x282)+'le;fi'+'lter:'+'drop-'+_0x19bc25(0x327)+_0x19bc25(0x932)+_0x19bc25(0xb0f)+_0x19bc25(0xd28)+_0x19bc25(0xb8d)+_0x19bc25(0x326)+_0x19bc25(0x8cc)+_0x19bc25(0xd67),'rmbNE':_0x19bc25(0xe9d)+_0x19bc25(0xb96)+'splay'+_0x19bc25(0xca3)+_0x19bc25(0x2b1)+'n-ite'+'ms:ce'+_0x19bc25(0xa1d)+_0x19bc25(0xb58)+'fy-co'+_0x19bc25(0xe6d)+':cent'+'er;wi'+'dth:5'+_0x19bc25(0x895)+'eight'+':34px'+';bord'+_0x19bc25(0x30b)+'borde'+'r-rad'+_0x19bc25(0xc7a)+_0x19bc25(0x6cd),'QRRWy':'backg'+_0x19bc25(0xdd2)+':tran'+_0x19bc25(0xc90)+_0x19bc25(0x70a)+'lor:r'+_0x19bc25(0x447)+_0x19bc25(0x84b)+'8,242'+',.4);'+_0x19bc25(0x858)+'r:poi'+'nter;'+_0x19bc25(0x856)+'size:'+'10px;'+_0x19bc25(0x856)+'weigh'+_0x19bc25(0xaf2)+_0x19bc25(0x6d9)+_0x19bc25(0x7d9)+'ly:in'+'herit'+';}','tLpNH':'.mn-t'+_0x19bc25(0x40c)+'tive{'+'color'+_0x19bc25(0xcdc)+_0x19bc25(0x245)+_0x19bc25(0xd45)+_0x19bc25(0x537)+'rgba('+_0x19bc25(0xb8d)+'07,15'+_0x19bc25(0xcfe)+';}','crPcl':_0x19bc25(0xe9d)+_0x19bc25(0x1d5)+'{flex'+_0x19bc25(0x9f4)+_0x19bc25(0xa62)+'th:0;'+'}','RhwqT':'.mn-c'+_0x19bc25(0x28b)+'hover'+_0x19bc25(0x2c4)+_0x19bc25(0xb66)+_0x19bc25(0x41f)+_0x19bc25(0x6eb)+'d:rgb'+'a(255'+_0x19bc25(0x30d)+_0x19bc25(0x46e)+_0x19bc25(0xda1),'vEFRT':_0x19bc25(0xab3)+'lose\x20'+_0x19bc25(0x1d1)+_0x19bc25(0x688)+_0x19bc25(0x868)+'heigh'+_0x19bc25(0x304)+'x;fil'+_0x19bc25(0xaee)+_0x19bc25(0x578)+_0x19bc25(0x901)+_0x19bc25(0x668)+'tColo'+'r;str'+_0x19bc25(0x7c3)+_0x19bc25(0x688)+'2;str'+'oke-l'+_0x19bc25(0x89f)+'p:rou'+_0x19bc25(0x654),'hsBhd':_0x19bc25(0x403)+_0x19bc25(0x7f9)+'s:sta'+'rt;al'+_0x19bc25(0x799)+'onten'+_0x19bc25(0x2bb)+'rt;ga'+_0x19bc25(0x4f8)+'x;pad'+'ding:'+_0x19bc25(0xc53)+'\x206px\x20'+_0x19bc25(0x54f),'oJtTX':_0x19bc25(0x539)+_0x19bc25(0x645)+_0x19bc25(0x569)+_0x19bc25(0x86d)+'y:fle'+_0x19bc25(0x603)+_0x19bc25(0x371)+_0x19bc25(0x31d)+_0x19bc25(0xcf1)+_0x19bc25(0x992)+'8px;p'+'addin'+_0x19bc25(0x7f7)+_0x19bc25(0x221)+'x;}','FuXlv':'.sk-c'+_0x19bc25(0x3be)+_0x19bc25(0xc64)+_0x19bc25(0xbea)+'g{fon'+_0x19bc25(0x9e7)+'e:13p'+_0x19bc25(0x860)+'t-wei'+_0x19bc25(0xe9a)+'00;co'+_0x19bc25(0x53b)+_0x19bc25(0x447)+_0x19bc25(0x84b)+_0x19bc25(0x400)+',.45)'+';}','jtcKQ':'.sk-m'+'desc{'+'font-'+_0x19bc25(0x780)+'11px;'+'opaci'+'ty:.4'+_0x19bc25(0xb7b)+_0x19bc25(0x878)+_0x19bc25(0xa42)+_0x19bc25(0x916)+_0x19bc25(0x61b)+'space'+_0x19bc25(0x4f7)+_0x19bc25(0x636)+'}','wtKFp':'.sk-s'+'witch'+'[aria'+_0x19bc25(0x86f)+'ked=\x22'+'true\x22'+']{bac'+_0x19bc25(0x405)+_0x19bc25(0xa34)+'ba(25'+_0x19bc25(0x31a)+',157,'+_0x19bc25(0x707)+'}','CkAxU':'.sk-s'+_0x19bc25(0x81c)+_0x19bc25(0x719)+_0x19bc25(0xad2)+_0x19bc25(0x591)+_0x19bc25(0x1fb)+_0x19bc25(0x29c)+_0x19bc25(0xacb)+_0x19bc25(0x47c)+'ght:2'+'px;bo'+_0x19bc25(0x4d4)+_0x19bc25(0x6a3)+'s:2px'+';','SbnIw':_0x19bc25(0x78f)+_0x19bc25(0x2d9)+_0x19bc25(0x69a)+_0x19bc25(0x40a)+'px;fo'+'nt-we'+_0x19bc25(0x92a)+_0x19bc25(0xdc9)+_0x19bc25(0xda4)+'dth:3'+_0x19bc25(0x784)+_0x19bc25(0x68f)+'lign:'+'right'+';colo'+_0x19bc25(0x4a3)+_0x19bc25(0x393)+',238,'+_0x19bc25(0xd70)+'8);}','RYonR':_0x19bc25(0x8c9)+_0x19bc25(0xe14)+'ont-s'+_0x19bc25(0xd48)+_0x19bc25(0x7a3)+'olor:'+_0x19bc25(0xd28)+_0x19bc25(0xb4b)+'38,24'+'2,.5)'+_0x19bc25(0x385)+_0x19bc25(0x840)+_0x19bc25(0xd02)+'white'+'-spac'+_0x19bc25(0x246)+'-wrap'+';}','DbRXL':_0x19bc25(0x3fc)+_0x19bc25(0x5aa)+_0x19bc25(0x3eb)+_0x19bc25(0x392)+'5\x20ui-'+'monos'+_0x19bc25(0xc59)+'Conso'+_0x19bc25(0x8ea)+_0x19bc25(0x48b)+_0x19bc25(0x7b4)+'hite-'+_0x19bc25(0xa01)+_0x19bc25(0x4f7)+_0x19bc25(0x636)+_0x19bc25(0xdb9)+_0x19bc25(0xe08)+':brea'+'k-wor'+_0x19bc25(0xbc3)+'gin:0'+_0x19bc25(0x579)+'ity:.'+_0x19bc25(0x720)+'x-hei'+_0x19bc25(0xe7e)+'80px;'+_0x19bc25(0x7a8)+'low:a'+_0x19bc25(0xa9d),'FAWqF':'<circ'+_0x19bc25(0x349)+_0x19bc25(0x865)+_0x19bc25(0x205)+'10\x22\x20r'+'=\x221.5'+_0x19bc25(0x5b5)+'l=\x22#f'+_0x19bc25(0x9f3)+'\x22/></'+_0x19bc25(0x975),'aCtYC':function(_0x2acdaa,_0x3ac47e){return _0x2acdaa+_0x3ac47e;},'kdsrl':function(_0x258923,_0x14560f){return _0x258923+_0x14560f;},'jiNZX':'fill='+'\x22none'+_0x19bc25(0xc52)+'oke=\x22'+_0x19bc25(0x2f5)+_0x19bc25(0x32d)+_0x19bc25(0x819)+'-widt'+'h=\x221.'+_0x19bc25(0x470)+'roke-'+'linec'+'ap=\x22r'+_0x19bc25(0x7b1)+_0x19bc25(0xa51)+'ke-li'+'nejoi'+_0x19bc25(0x6c9)+'und\x22/'+'>','ZxJkn':'DOMCo'+'ntent'+_0x19bc25(0x2f7)+'d','RgGDQ':function(_0xf1de6){return _0xf1de6();}};var _0x3d5366=location[_0x19bc25(0x2c2)+_0x19bc25(0xd00)]||'',_0x276f6c=/(^|\.)www\.crazygames\.com$/[_0x19bc25(0xb0c)](_0x3d5366),_0x5633e2=/(^|\.)games\.crazygames\.com$/['test'](_0x3d5366),_0xf4a4e1=/(^|\.)crazygames\.com$/['test'](_0x3d5366)&&!_0x276f6c&&!_0x5633e2,_0x3de885=_0x276f6c?_0x19bc25(0x2d2)+'l':_0x5633e2?_0x19bc25(0x747)+'er':_0x19bc25(0xde0)+'r';if(!_0x276f6c&&!_0x5633e2&&!_0xf4a4e1)return;var _0x4316bd=_0x226e33['jKrJj'],_0x8133f3=_0x226e33[_0x19bc25(0x506)],_0x4f7f6f=_0x19bc25(0x946)+_0x19bc25(0xd94)+'SKILL'+'WARZ-'+_0x19bc25(0x5a0)+'===',_0x18fe1f='===SA'+'KURA-'+_0x19bc25(0xa9e)+'WARZ-'+'END=='+'=',_0x1bb3ff=_0x226e33[_0x19bc25(0xb4a)];if(_0x5633e2){window['addEv'+_0x19bc25(0xb70)+_0x19bc25(0xa54)+'r']('messa'+'ge',function(_0x17e164){var _0x26b687=_0x19bc25,_0x4edbe4={'czqfD':function(_0x433771,_0x33d7f0){return _0x433771(_0x33d7f0);}};if(_0x226e33[_0x26b687(0x5ea)]!==_0x226e33[_0x26b687(0x5ea)]){_0x226e33[_0x26b687(0x70c)](_0x81ea2e)['set']({'host':_0xa8143c[_0x26b687(0xb5a)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{var _0x2fee64=_0x17e164[_0x26b687(0x964)];if(!_0x2fee64||_0x2fee64[_0x26b687(0xc20)+_0x26b687(0x843)]!==_0x8133f3)return;try{if(window[_0x26b687(0x427)+'t']&&_0x226e33[_0x26b687(0xd39)](window['paren'+'t'],window))window[_0x26b687(0x427)+'t']['postM'+_0x26b687(0xafd)+'e'](_0x2fee64,'*');if(window[_0x26b687(0x6d7)]&&_0x226e33['gqFwx'](window['top'],window))window[_0x26b687(0x6d7)][_0x26b687(0x319)+_0x26b687(0xafd)+'e'](_0x2fee64,'*');}catch(_0x598203){}if(_0x2fee64&&_0x2fee64[_0x26b687(0xc1c)]==='cmd'){if(_0x226e33[_0x26b687(0xbf4)]('tGYlK','KfOPy'))_0x4edbe4['czqfD'](_0x5d9f8f,!![]);else try{var _0x38ca4d=document[_0x26b687(0x72c)+'Selec'+'torAl'+'l'](_0x26b687(0x9a5)+'e');for(var _0x4f360f=0xb*0x157+-0x1*-0x3fb+-0x4ae*0x4;_0x226e33['YDzAx'](_0x4f360f,_0x38ca4d['lengt'+'h']);_0x4f360f++){try{if(_0x38ca4d[_0x4f360f][_0x26b687(0x8e2)+_0x26b687(0x888)+_0x26b687(0xe35)])_0x38ca4d[_0x4f360f][_0x26b687(0x8e2)+_0x26b687(0x888)+'dow']['postM'+_0x26b687(0xafd)+'e'](_0x2fee64,'*');}catch(_0x11f6d5){}}}catch(_0xe72b66){}}}}),console[_0x19bc25(0x34e)](_0x19bc25(0xe5d)+_0x19bc25(0xcfa)+_0x19bc25(0x99b)+'RAPPE'+_0x19bc25(0x942)+_0x19bc25(0xc66)+'relay'+_0x19bc25(0x82e)+_0x19bc25(0x782),_0x226e33[_0x19bc25(0x823)]+_0x4316bd);return;}if(_0x276f6c){console[_0x19bc25(0x34e)](_0x226e33['NMWeX'],_0x226e33['uxEEA']+_0x4316bd+_0x226e33[_0x19bc25(0xcfc)],{'host':_0x3d5366});var _0x16c23c={'set':function(){},'command':function(){}};function _0x19db52(_0x5b8b92,_0x19b1a0){var _0x23eb3b=_0x19bc25;if(_0x226e33[_0x23eb3b(0x359)]('Gjrxt','lQZYy'))_0x6fa65f=!_0x3f6794,_0x226e33['VpmgL'](_0x2ab2d2);else{var _0x17c4bc={'__sakura':_0x8133f3,'kind':_0x226e33['qnqPJ'],'cmd':_0x5b8b92,'arg':_0x19b1a0};try{var _0xd02581=document[_0x23eb3b(0x72c)+_0x23eb3b(0x42a)+_0x23eb3b(0x9c4)+'l'](_0x23eb3b(0x9a5)+'e');for(var _0x5dd32b=0x21b8+0x2b*-0xae+-0x47e;_0x5dd32b<_0xd02581['lengt'+'h'];_0x5dd32b++){try{if(_0xd02581[_0x5dd32b][_0x23eb3b(0x8e2)+'ntWin'+_0x23eb3b(0xe35)])_0xd02581[_0x5dd32b]['conte'+_0x23eb3b(0x888)+'dow'][_0x23eb3b(0x319)+'essag'+'e'](_0x17c4bc,'*');}catch(_0x52fb9c){}}}catch(_0x3c4afe){}try{if(_0x226e33['xjQgG'](_0x226e33[_0x23eb3b(0xdb7)],_0x226e33[_0x23eb3b(0x4fc)]))_0x47618e['textC'+_0x23eb3b(0x806)+'t']=_0xbd29ec['diff']&&_0x10cea3['diff']['lengt'+'h']?_0x226e33[_0x23eb3b(0x663)]+_0x815548['diff']['join'](',\x20'):'F9\x20tw'+'ice\x20w'+'hile\x20'+_0x23eb3b(0xb9a)+_0x23eb3b(0x36d)+_0x23eb3b(0x639)+'ting\x20'+'/\x20jum'+_0x23eb3b(0xafb)+'marks'+_0x23eb3b(0xd7e)+'h\x20fie'+'ld\x20is'+_0x23eb3b(0xd7e)+'h.';else{var _0x426a3b=new BroadcastChannel('sakur'+_0x23eb3b(0x9cf));_0x426a3b['postM'+_0x23eb3b(0xafd)+'e'](_0x17c4bc),_0x226e33[_0x23eb3b(0x76e)](setTimeout,function(){try{_0x426a3b['close']();}catch(_0x5ba5fe){}},0xb2f+0xf23+-0x1958);}}catch(_0x537bdc){}}}var _0x41f134=_0x19bc25(0xce2)+'a-sw-'+_0x19bc25(0xbb3)+'-hidd'+'en';function _0x3656c2(){var _0x245625=_0x19bc25,_0x5cf157={'QDWZM':function(_0x16e5d5,_0x155d83,_0x22c98f){return _0x16e5d5(_0x155d83,_0x22c98f);}};try{return localStorage[_0x245625(0xbc5)+'em'](_0x41f134)==='1';}catch(_0x313cf3){if(_0x226e33[_0x245625(0x458)]('uPUVM',_0x226e33[_0x245625(0x56b)])){var _0x4dd138=new _0x413f2c(_0x245625(0xce2)+_0x245625(0x9cf));_0x4dd138['postM'+'essag'+'e'](_0x2b59bf),_0x5cf157['QDWZM'](_0x1d76b9,function(){var _0x5c6e69=_0x245625;try{_0x4dd138[_0x5c6e69(0x8db)]();}catch(_0x412c04){}},-0xc9*-0x26+0x10d*0x1+-0x1de9);}else return![];}}function _0x44878b(_0x1ced1e){var _0x16aeac=_0x19bc25,_0x2920f6={'MxkUu':function(_0x163d20){return _0x226e33['VpmgL'](_0x163d20);}};try{_0x1ced1e?localStorage[_0x16aeac(0x788)+'em'](_0x41f134,'1'):localStorage['remov'+_0x16aeac(0x807)](_0x41f134);}catch(_0x4035e1){}try{if(_0x16aeac(0x586)!==_0x16aeac(0x586)){if(_0x5dffd3&&_0x43fc8f[_0x16aeac(0x67d)+'r']&&_0x5c9e39[_0x16aeac(0x67d)+'r']['byteL'+_0x16aeac(0xd79)])return _0x5055a5[_0x16aeac(0x530)+'e']=_0x3cf45a[_0x16aeac(0x530)+'e']||_0x16aeac(0x920)+_0x16aeac(0x285)+'e().e'+'xport'+'s.mem'+'ory',new _0x5b49ca(_0x2e6997['buffe'+'r']);}else{var _0x539842=document['getEl'+'ement'+_0x16aeac(0x42e)](_0x16aeac(0xce2)+_0x16aeac(0x72b)+'v2');if(_0x539842)_0x539842['remov'+'e']();}}catch(_0x1782ff){}try{var _0x55606b=document[_0x16aeac(0x627)+_0x16aeac(0x913)+_0x16aeac(0x42e)]('sakur'+_0x16aeac(0x72b)+_0x16aeac(0xc54)+'b');if(_0x1ced1e&&!_0x55606b&&document['body']){var _0x28a268=document[_0x16aeac(0xe0f)+_0x16aeac(0xaaa)+_0x16aeac(0xc6a)](_0x16aeac(0x9be));_0x28a268['id']=_0x16aeac(0xce2)+'a-sw-'+_0x16aeac(0xc54)+'b',_0x28a268[_0x16aeac(0x754)][_0x16aeac(0x940)+'xt']=_0x226e33[_0x16aeac(0x9ba)](_0x16aeac(0x2fb)+'ion:f'+'ixed;'+_0x16aeac(0xe20)+_0x16aeac(0x93f)+_0x16aeac(0xe44)+'2px;z'+'-inde'+_0x16aeac(0x836)+_0x16aeac(0xcf7)+'99;cu'+'rsor:'+_0x16aeac(0x479)+'er;us'+_0x16aeac(0x3a1)+'lect:'+_0x16aeac(0xba6),_0x16aeac(0xd59)+_0x16aeac(0xdd2)+_0x16aeac(0x753)+_0x16aeac(0xd23)+_0x16aeac(0x5e5)+_0x16aeac(0xb79)+'order'+_0x16aeac(0xadc)+_0x16aeac(0x6ed)+_0x16aeac(0x866)+_0x16aeac(0x7c4)+'143,1'+'77,.5'+');col'+_0x16aeac(0x842))+_0x4316bd+';'+(_0x16aeac(0x31c)+_0x16aeac(0x8f4)+'ius:9'+_0x16aeac(0xb75)+_0x16aeac(0xbd3)+_0x16aeac(0xa82)+'x\x2012p'+_0x16aeac(0x860)+_0x16aeac(0xa91)+_0x16aeac(0x5f8)+'\x20ui-m'+_0x16aeac(0x48b)+'ace,C'+'onsol'+_0x16aeac(0xe94)+_0x16aeac(0xdd8)+_0x16aeac(0xcc5)),_0x28a268['textC'+_0x16aeac(0x806)+'t']=_0x226e33[_0x16aeac(0x590)],_0x28a268[_0x16aeac(0xa25)+'ck']=function(){var _0x400f32=_0x16aeac;_0x44878b(![]),_0x2920f6[_0x400f32(0x372)](_0x1c20d7);},document['body']['appen'+_0x16aeac(0xd13)+'d'](_0x28a268);}else _0x226e33['QhSUO'](!_0x1ced1e,_0x55606b)&&_0x55606b['remov'+'e']();}catch(_0x248ca7){}}function _0x514206(){var _0x3f544d=_0x19bc25;if(_0x226e33['tgIDa'](_0x3656c2))return null;var _0x4b939f=document['getEl'+'ement'+'ById'](_0x226e33[_0x3f544d(0xc5d)]);if(_0x4b939f)return _0x4b939f;if(!document['body']||!document['body']['appen'+_0x3f544d(0xd13)+'d'])return null;try{if(_0x226e33[_0x3f544d(0xd39)](_0x3f544d(0x954),_0x3f544d(0x954))){var _0x40ad6d=_0x226e33['NbHEr'](_0x57eee9[0x2ad+-0x6*-0x242+0x1*-0x1039],_0x1bc470['feet'][-0x13c9+0x25d5*-0x1+0x399e]),_0x49cc0c=_0x5e13b7[0x11f*0xe+0x16b2+-0x2662]-_0x32ba39[_0x3f544d(0x832)][0xa91*-0x3+-0xb44+0xc1*0x39];_0x54e026['d']=_0x58ed67['sqrt'](_0x226e33['JEWYN'](_0x40ad6d*_0x40ad6d,_0x226e33['WejpB'](_0x49cc0c,_0x49cc0c))),_0x503807['beari'+'ng']=_0x3d5c32[_0x3f544d(0x432)](_0x40ad6d,_0x49cc0c)*(-0x177a+0x4*0x107+0x1412)/_0x147939['PI'];}else{if(!document['getEl'+'ement'+_0x3f544d(0x42e)](_0x226e33[_0x3f544d(0x5cc)])){var _0x51b0c2=document[_0x3f544d(0xe0f)+'eElem'+'ent'](_0x3f544d(0x754));_0x51b0c2['id']=_0x226e33['sZErS'],_0x51b0c2[_0x3f544d(0x2b4)+_0x3f544d(0x806)+'t']=_0x3f544d(0xdef)+_0x3f544d(0x880)+_0x3f544d(0xea6)+'ll:in'+_0x3f544d(0x694)+'}',(document[_0x3f544d(0x482)]||document[_0x3f544d(0x1f8)+_0x3f544d(0x60d)+'ement'])[_0x3f544d(0x55e)+'dChil'+'d'](_0x51b0c2);}return _0x4b939f=document['creat'+'eElem'+_0x3f544d(0xc6a)](_0x226e33[_0x3f544d(0xe4c)]),_0x4b939f['id']='sakur'+_0x3f544d(0x72b)+'v2',document[_0x3f544d(0x649)][_0x3f544d(0x55e)+'dChil'+'d'](_0x4b939f),_0x4b939f;}}catch(_0x435013){if('FRwgr'!==_0x3f544d(0x8ac))_0x365265['getIt'+'em'](_0x1ad3c6)!==null&&(_0x21f1bb['remov'+_0x3f544d(0x807)](_0x2311f6),_0x390125=!![]);else return null;}}function _0x1c20d7(){var _0x1ece2f=_0x19bc25;if(_0x226e33[_0x1ece2f(0xae1)](_0x1ece2f(0x3e6),'bkhGK'))_0x23149c=_0x226e33[_0x1ece2f(0xb86)](_0x1a4c03,_0x30ef7b),_0x457ec2=_0x1ec0a6+_0x2815f6;else{var _0x46d07a=_0x514206();if(!_0x46d07a)return _0x16c23c;if(_0x46d07a[_0x1ece2f(0xbc9)+'et'][_0x1ece2f(0x676)])return _0x46d07a['api'];try{return _0x5057ee(_0x46d07a);}catch(_0x5267cf){return _0x46d07a[_0x1ece2f(0xbc9)+'et'][_0x1ece2f(0x676)]='1',_0x46d07a['api']=_0x16c23c,console['warn'](_0x226e33[_0x1ece2f(0x56d)],_0x226e33['uxEEA']+_0x4316bd,_0x5267cf),_0x16c23c;}}}function _0x5057ee(_0x2a6ddc){var _0x2460e9=_0x19bc25,_0x29df87={'HoZfl':function(_0x5dc0d7,_0x1dc962){return _0x5dc0d7(_0x1dc962);},'BuWxs':_0x226e33['vnTAm'],'AxPfj':_0x2460e9(0x811)+'f5','jUdai':function(_0x4669e8){return _0x226e33['fLXKK'](_0x4669e8);},'aXtuO':'5|2|1'+'0|4|3'+_0x2460e9(0xcd9)+_0x2460e9(0x3e4)+'|0','fLipb':function(_0x3ecf5f,_0x4d9420){return _0x3ecf5f!==_0x4d9420;},'zREyZ':function(_0x4082d5,_0x570061){return _0x4082d5(_0x570061);},'QcKum':function(_0x322c57,_0x2c13ca,_0x26c83c){return _0x322c57(_0x2c13ca,_0x26c83c);},'dBcjV':function(_0x3caddb,_0x170149){return _0x3caddb+_0x170149;},'iwbHa':_0x2460e9(0x7b5),'WLqUo':function(_0x255510,_0x5f072e){return _0x226e33['YDzAx'](_0x255510,_0x5f072e);},'Thego':function(_0x1cc9a4,_0x566224){var _0x3cdad0=_0x2460e9;return _0x226e33[_0x3cdad0(0x99f)](_0x1cc9a4,_0x566224);}};_0x2a6ddc[_0x2460e9(0x754)][_0x2460e9(0x940)+'xt']=_0x226e33[_0x2460e9(0xbd1)](_0x226e33['mRMeb'](_0x226e33['mpaSL']('posit'+_0x2460e9(0x6e4)+_0x2460e9(0x4cc)+_0x2460e9(0xe20)+'12px;'+_0x2460e9(0xe44)+_0x2460e9(0xa37)+_0x2460e9(0xdd3)+'x:214'+_0x2460e9(0x91c)+_0x2460e9(0x833)+_0x2460e9(0x481)+'th:mi'+'n(52v'+'w,620'+'px);m'+_0x2460e9(0xce4)+'ight:'+_0x2460e9(0x3d3),_0x2460e9(0xd59)+_0x2460e9(0xdd2)+':#150'+_0x2460e9(0x7fa)+_0x2460e9(0x588)+_0x2460e9(0x811)+_0x2460e9(0x84d)+'rder:'+_0x2460e9(0xcaa)+_0x2460e9(0xa2a)+'rgba('+_0x2460e9(0xb8d)+'43,17'+_0x2460e9(0xa5c)+';bord'+'er-ra'+_0x2460e9(0xa90)+_0x2460e9(0x868)),'font:'+_0x2460e9(0x281)+'1.5\x20u'+_0x2460e9(0xde5)+_0x2460e9(0x815)+_0x2460e9(0xc37)+'solas'+',mono'+_0x2460e9(0xa01)+';box-'+'shado'+_0x2460e9(0x3cb)+_0x2460e9(0x6d8)+_0x2460e9(0x317)+'20px\x20'+_0x2460e9(0x8ae)),_0x2460e9(0x829)+_0x2460e9(0x83b)+_0x2460e9(0x5e8)+_0x2460e9(0x33e)+_0x2460e9(0x3a3)+'on:co'+_0x2460e9(0x6bd)+_0x2460e9(0x7a8)+_0x2460e9(0x65c)+_0x2460e9(0xd80)+';'),_0x2a6ddc['inner'+_0x2460e9(0x976)]=_0x226e33[_0x2460e9(0xd6b)](_0x226e33['rUsQS'](_0x226e33['rURqg'](_0x226e33[_0x2460e9(0x5ef)](_0x226e33['gflkD'](_0x226e33[_0x2460e9(0xb86)](_0x226e33[_0x2460e9(0x37a)](_0x226e33[_0x2460e9(0xbd1)]('<div\x20'+_0x2460e9(0x754)+'=\x22pad'+_0x2460e9(0xa61)+'9px\x201'+'2px;b'+_0x2460e9(0x1ee)+'-bott'+'om:1p'+'x\x20sol'+_0x2460e9(0x970)+_0x2460e9(0x599)+'5,143'+_0x2460e9(0x3bc)+_0x2460e9(0xcf5)+_0x2460e9(0x86d)+_0x2460e9(0x73c)+'x;gap'+_0x2460e9(0x3e2)+'align'+'-item'+_0x2460e9(0x5b4)+'ter;f'+'lex:0'+_0x2460e9(0x4f2)+'to;\x22>'+_0x226e33[_0x2460e9(0xae7)],_0x4316bd)+_0x226e33['ynujX'],_0x226e33[_0x2460e9(0x451)])+(_0x2460e9(0xd95)+_0x2460e9(0x844)+_0x2460e9(0x212)+_0x2460e9(0xd1c)+'\x22\x20sty'+'le=\x22c'+_0x2460e9(0x588)+'#bda9'+'c9\x22>w'+_0x2460e9(0xc2c)+_0x2460e9(0x9a7)+_0x2460e9(0x85c)+_0x2460e9(0xd34)+_0x2460e9(0x2c1)+'pan>'),'<butt'+_0x2460e9(0x2b2)+_0x2460e9(0x3ca)+_0x2460e9(0x222)+'\x22\x20sty'+_0x2460e9(0x924)+_0x2460e9(0x86d)+_0x2460e9(0x6be)+_0x2460e9(0xc55)+'gin-l'+_0x2460e9(0xcdd)+_0x2460e9(0x5ed)+_0x2460e9(0xd45)+_0x2460e9(0x537))+_0x4316bd+(';bord'+'er:0;'+_0x2460e9(0x280)+_0x2460e9(0x4c2)+'f1b;b'+_0x2460e9(0x1ee)+'-radi'+_0x2460e9(0xc4a)+_0x2460e9(0xb7e)+_0x2460e9(0xa61)+_0x2460e9(0x7c0)+_0x2460e9(0x8cd)+'ont-w'+_0x2460e9(0xddb)+_0x2460e9(0xbd6)+_0x2460e9(0x858)+_0x2460e9(0x232)+'nter;'+_0x2460e9(0x515)+'y\x20JSO'+_0x2460e9(0xc12)+'tton>')+('<butt'+_0x2460e9(0x2b2)+_0x2460e9(0x3ca)+'-togg'+_0x2460e9(0xc41)+_0x2460e9(0xac5)+_0x2460e9(0x334)+'groun'+_0x2460e9(0x1da)+_0x2460e9(0x795)+_0x2460e9(0x8f6)+'order'+_0x2460e9(0xadc)+_0x2460e9(0x6ed)+'\x20rgba'+_0x2460e9(0x7c4)+_0x2460e9(0xe39)+'77,.4'+');col'+_0x2460e9(0x4e8)+'7eef5'+_0x2460e9(0xb9f)+'er-ra'+_0x2460e9(0xa90)+'7px;p'+_0x2460e9(0x9ea)+_0x2460e9(0x2b7)+_0x2460e9(0x950)+'curso'+_0x2460e9(0x232)+'nter;'+_0x2460e9(0x9af)+_0x2460e9(0x495)+'tton>'),_0x226e33['sHVkq'])+_0x226e33[_0x2460e9(0xc1b)]+_0x226e33[_0x2460e9(0xde2)],_0x226e33['cSelc'])+(_0x2460e9(0xe24)+_0x2460e9(0x2b2)+_0x2460e9(0x3ca)+_0x2460e9(0xa0a)+_0x2460e9(0x6ab)+_0x2460e9(0x933)+'backg'+'round'+':tran'+_0x2460e9(0xc90)+'nt;bo'+_0x2460e9(0x615)+'1px\x20s'+_0x2460e9(0xa2a)+_0x2460e9(0xd28)+_0x2460e9(0xb8d)+_0x2460e9(0x20f)+'7,.4)'+';colo'+_0x2460e9(0x4b8)+_0x2460e9(0x661)+_0x2460e9(0x31c)+_0x2460e9(0x8f4)+'ius:7'+'px;pa'+_0x2460e9(0xc19)+_0x2460e9(0x710)+'10px;'+_0x2460e9(0x858)+_0x2460e9(0x232)+'nter;'+_0x2460e9(0x498)+_0x2460e9(0xe4b)+'f</bu'+'tton>')+_0x226e33[_0x2460e9(0x905)]+_0x4316bd,_0x2460e9(0xe34))+_0x226e33['gxJqw'],_0x226e33[_0x2460e9(0x467)])+(_0x2460e9(0xd95)+'\x20id=\x22'+_0x2460e9(0xd7f)+_0x2460e9(0x773)+'style'+'=\x22col'+_0x2460e9(0x347)+_0x2460e9(0xb71)+_0x2460e9(0xc21)+_0x2460e9(0x82c)+_0x2460e9(0xdfd)+'e\x20wal'+'king\x20'+_0x2460e9(0xba7)+'intin'+_0x2460e9(0xdec)+'umpin'+'g\x20mar'+_0x2460e9(0xaf3)+_0x2460e9(0x9aa)+_0x2460e9(0x248)+'is\x20wh'+_0x2460e9(0xcd4)+_0x2460e9(0x721)+'>')+_0x226e33[_0x2460e9(0xc1b)],_0x226e33[_0x2460e9(0x84a)])+_0x226e33['FGMXK']+(_0x2460e9(0x4d9)+'>');var _0x14f6b7=_0x2a6ddc[_0x2460e9(0x72c)+_0x2460e9(0x42a)+'tor'](_0x226e33[_0x2460e9(0x30f)]),_0x31417c=_0x2a6ddc['query'+'Selec'+_0x2460e9(0xa65)](_0x226e33['MhQyk']),_0x39c4c7=_0x2a6ddc[_0x2460e9(0x72c)+_0x2460e9(0x42a)+_0x2460e9(0xa65)](_0x2460e9(0x58e)+_0x2460e9(0x982)),_0x56d09b=_0x2a6ddc[_0x2460e9(0x72c)+_0x2460e9(0x42a)+_0x2460e9(0xa65)](_0x226e33[_0x2460e9(0xd0b)]),_0x4746a=_0x2a6ddc[_0x2460e9(0x72c)+'Selec'+_0x2460e9(0xa65)](_0x226e33[_0x2460e9(0x90c)]),_0x5c168d=_0x2a6ddc[_0x2460e9(0x72c)+_0x2460e9(0x42a)+'tor']('#sw2-'+'toggl'+'e'),_0x1ad8ee=_0x2a6ddc[_0x2460e9(0x72c)+'Selec'+'tor']('#sw2-'+_0x2460e9(0x649)),_0x2b0bd=_0x2a6ddc[_0x2460e9(0x72c)+'Selec'+'tor']('#sw2-'+_0x2460e9(0xa32)),_0x2acf16=_0x2a6ddc['query'+_0x2460e9(0x42a)+_0x2460e9(0xa65)](_0x226e33['kmzSF']),_0x15cbd4=_0x2a6ddc['query'+_0x2460e9(0x42a)+_0x2460e9(0xa65)](_0x2460e9(0x58e)+_0x2460e9(0x9a1)+'r'),_0x421953=_0x2a6ddc[_0x2460e9(0x72c)+_0x2460e9(0x42a)+'tor'](_0x226e33['vpNpD']),_0x1bdfde=_0x2a6ddc['query'+_0x2460e9(0x42a)+_0x2460e9(0xa65)]('#sw2-'+'hint'),_0x1f7296=null,_0x2b5d28=![];function _0x55683d(){var _0x5e1b3d=_0x2460e9;if(_0x1ad8ee)_0x1ad8ee[_0x5e1b3d(0x754)][_0x5e1b3d(0x829)+'ay']=_0x2b5d28?'':_0x226e33[_0x5e1b3d(0x608)];if(_0x5c168d)_0x5c168d['textC'+_0x5e1b3d(0x806)+'t']=_0x2b5d28?'close':_0x226e33[_0x5e1b3d(0xac6)];_0x2a6ddc[_0x5e1b3d(0x754)]['width']=_0x2b5d28?_0x226e33['hEkUd']:_0x5e1b3d(0xd66),_0x2a6ddc[_0x5e1b3d(0x754)][_0x5e1b3d(0xd59)+_0x5e1b3d(0xdd2)]=_0x2b5d28?_0x5e1b3d(0x83d)+'1d':_0x5e1b3d(0xd28)+'21,12'+',29,.'+'9)';}if(_0x5c168d)_0x5c168d[_0x2460e9(0xa25)+'ck']=function(){var _0x567e97=_0x2460e9;if(_0x226e33['nHJms'](_0x567e97(0x36f),_0x567e97(0xd9c))){var _0x10a8bd=(_0x567e97(0x7f3)+'|1|4|'+'5')['split']('|'),_0x1bd97e=0x5bc+0x92*0x33+0x22d2*-0x1;while(!![]){switch(_0x10a8bd[_0x1bd97e++]){case'0':_0x1045d8['ok']=!![];continue;case'1':_0x1e7d4d[_0x567e97(0x69b)]='';continue;case'2':_0x4f90cf[_0x567e97(0x9a2)]=_0x29df87[_0x567e97(0x7ad)](_0x152e22,_0x25af43);continue;case'3':_0x3af924[_0x567e97(0xb0b)]=_0x103307;continue;case'4':_0x4fb5ef[_0x567e97(0x530)+'e']=_0x567e97(0x96b)+_0x567e97(0x1e5)+_0x567e97(0x910)+'m';continue;case'5':return _0x5724d9;}break;}}else _0x2b5d28=!_0x2b5d28,_0x226e33[_0x567e97(0xa7a)](_0x55683d);};_0x226e33['dMYex'](_0x55683d);if(_0x4746a)_0x4746a['oncli'+'ck']=function(){_0x44878b(!![]);};if(_0x2b0bd)_0x2b0bd['oncli'+'ck']=function(){var _0x31b61c=_0x2460e9;_0x19db52('snaps'+_0x31b61c(0xabc));};var _0x2352d2=![];function _0x2fa00c(){var _0x52664f=_0x2460e9;if(_0x226e33[_0x52664f(0x458)]('BWOce',_0x52664f(0x7da))){if(_0x32a689[_0x52664f(0x6d7)]&&_0x57a92e['top']!==_0x1fc6b6)_0x554171['top'][_0x52664f(0x319)+'essag'+'e'](_0x52dfe9,'*');}else _0x19db52(_0x52664f(0xac8),{'on':_0x2352d2,'factor':parseFloat(_0x15cbd4['value'])||-0x1*0x1c5d+-0x1c16+0x3874});}if(_0x2acf16)_0x2acf16[_0x2460e9(0xa25)+'ck']=function(){var _0x44eeae=_0x2460e9;_0x2352d2=!_0x2352d2,_0x2acf16[_0x44eeae(0x2b4)+_0x44eeae(0x806)+'t']=_0x2352d2?_0x44eeae(0xbfc)+'\x20ON':_0x29df87['BuWxs'],_0x2acf16['style'][_0x44eeae(0xd59)+_0x44eeae(0xdd2)]=_0x2352d2?_0x4316bd:_0x44eeae(0x34d)+'paren'+'t',_0x2acf16[_0x44eeae(0x754)]['color']=_0x2352d2?_0x44eeae(0x7fc)+'1b':_0x29df87[_0x44eeae(0xb9e)],_0x2fa00c();};if(_0x15cbd4)_0x15cbd4[_0x2460e9(0x88c)+'ut']=function(){var _0xba72bf=_0x2460e9;if(_0x421953)_0x421953[_0xba72bf(0x2b4)+'onten'+'t']=(parseFloat(_0x15cbd4['value'])||-0xe*0x24d+-0xed2+0x2f09)[_0xba72bf(0xa0d)+'ed'](-0x4e1+-0x35*0x3f+0x11ed*0x1)+'x';_0x226e33['tgIDa'](_0x2fa00c);};if(_0x56d09b)_0x56d09b['oncli'+'ck']=function(){var _0x407800=_0x2460e9,_0x423a68={'LvhOx':_0x407800(0xb73)+_0x407800(0xbb9),'LyYcn':function(_0x2ca4b7){return _0x2ca4b7();}},_0x36d198=_0x226e33[_0x407800(0x9ba)](_0x226e33[_0x407800(0xb86)](_0x226e33[_0x407800(0x9ba)](_0x4f7f6f+'\x0a',_0x1f7296?JSON[_0x407800(0x80a)+'gify'](_0x1f7296,null,-0xd8e+0x225*0x7+-0x174):''),'\x0a'),_0x18fe1f),_0x4e1923=function(){var _0x3767fa=_0x407800;if(_0x56d09b)_0x56d09b[_0x3767fa(0x2b4)+_0x3767fa(0x806)+'t']='Copie'+'d';};if(navigator['clipb'+_0x407800(0xb6f)]&&navigator[_0x407800(0x207)+'oard'][_0x407800(0xd12)+'Text'])navigator[_0x407800(0x207)+'oard']['write'+_0x407800(0x8df)](_0x36d198)['then'](_0x4e1923,function(){_0x29df87['jUdai'](_0x306e4a);});else _0x306e4a();function _0x306e4a(){var _0xd44445=_0x407800,_0x1fc64d=document['creat'+'eElem'+_0xd44445(0xc6a)](_0x423a68[_0xd44445(0x25f)]);_0x1fc64d[_0xd44445(0x6ff)]=_0x36d198;if(!document['body'])return;document['body'][_0xd44445(0x55e)+_0xd44445(0xd13)+'d'](_0x1fc64d),_0x1fc64d['selec'+'t']();try{document[_0xd44445(0xde7)+_0xd44445(0x8c8)+'d']('copy'),_0x423a68[_0xd44445(0xd0a)](_0x4e1923);}catch(_0x374c71){}_0x1fc64d['remov'+'e']();}};_0x226e33[_0x2460e9(0x76e)](setTimeout,function(){var _0x5bb922=_0x2460e9,_0xc08e35=(_0x5bb922(0x68b)+_0x5bb922(0x26f))['split']('|'),_0xab11d6=-0x8f3+-0xb1e+0x1411*0x1;while(!![]){switch(_0xc08e35[_0xab11d6++]){case'0':_0x14f6b7[_0x5bb922(0x754)]['color']='#ffb3'+'c7';continue;case'1':if(!_0x14f6b7||!_0x39c4c7)return;continue;case'2':_0x14f6b7['textC'+_0x5bb922(0x806)+'t']=_0x226e33['gwaQm'];continue;case'3':_0x39c4c7[_0x5bb922(0x2b4)+'onten'+'t']=_0x226e33[_0x5bb922(0x37a)](_0x226e33[_0x5bb922(0xce7)](_0x226e33['mpaSL'](_0x5bb922(0x8d8)+'ame\x20f'+'rame\x20'+_0x5bb922(0x6c4)+_0x5bb922(0x8de)+_0x5bb922(0x671)+_0x5bb922(0x521)+_0x5bb922(0x906)+'ort.\x0a'+'\x0a',_0x5bb922(0x8f0)+'panel'+'\x20prov'+'es\x20th'+'e\x20use'+'rscri'+'pt\x20IS'+'\x20inst'+_0x5bb922(0xc4c)+_0x5bb922(0x265)+_0x5bb922(0xad9)+_0x5bb922(0x5d1)+_0x5bb922(0x818)+_0x5bb922(0x2d2)+_0x5bb922(0xb00))+(_0x5bb922(0x99c)+_0x5bb922(0x2e3)+_0x5bb922(0x999)+_0x5bb922(0xc16)+'pects'+_0x5bb922(0x215)+'\x0a\x0a')+_0x226e33['FYIeD']+_0x226e33[_0x5bb922(0x5d3)],_0x226e33[_0x5bb922(0xd01)]),_0x5bb922(0x893)+_0x5bb922(0x920)+_0x5bb922(0xc7d)+'—\x20two'+'\x20copi'+'es\x20of'+_0x5bb922(0xc15)+_0x5bb922(0xad4)+_0x5bb922(0xa10)+_0x5bb922(0x632)+'Assem'+'bly.i'+'nstan'+_0x5bb922(0xe74)+_0x5bb922(0x4ce))+('Reloa'+_0x5bb922(0x509)+'\x20game'+_0x5bb922(0x817)+'\x20once'+'\x20and\x20'+_0x5bb922(0xdbb)+_0x5bb922(0x6fd)+_0x5bb922(0x337)+_0x5bb922(0x863)+'in.');continue;case'4':if(_0x1f7296)return;continue;}break;}},0x2f*0x90f+-0x1f02+-0xa05f);var _0x4850f5={'set':function(_0x59c15e){var _0x183e96=_0x2460e9,_0x4d7065={'KtEOm':_0x226e33[_0x183e96(0x43f)]};_0x1f7296=_0x59c15e;if(_0x56d09b)_0x56d09b[_0x183e96(0x754)]['displ'+'ay']='';if(_0x31417c){var _0x61e085=(_0x183e96(0x26b)+'|0|2')['split']('|'),_0x37125b=0x1853+-0x1a*-0xdf+0xd*-0x39d;while(!![]){switch(_0x61e085[_0x37125b++]){case'0':_0x31417c[_0x183e96(0x754)]['color']=_0x226e33['FMwJa'](_0x42bdca,_0x4cef6d)?_0x4316bd:_0x183e96(0x934)+'74';continue;case'1':var _0x42bdca=_0x59c15e[_0x183e96(0xb17)+'on']||'';continue;case'2':_0x31417c[_0x183e96(0x754)][_0x183e96(0x31c)+_0x183e96(0x1fd)+'r']=_0x42bdca===_0x4cef6d?_0x183e96(0xd28)+'255,1'+_0x183e96(0x20f)+'7,.35'+')':'#ff6e'+'74';continue;case'3':var _0x4cef6d=_0x1bb3ff;continue;case'4':_0x31417c[_0x183e96(0x2b4)+_0x183e96(0x806)+'t']='v'+(_0x59c15e[_0x183e96(0xb17)+'on']||'?');continue;}break;}}var _0x1177de=_0x59c15e[_0x183e96(0x920)+'nces']&&_0x59c15e['insta'+'nces'][_0x183e96(0x8b9)+_0x183e96(0x2ee)+'ler'],_0x523c71=Math['round'](_0x226e33['GmpAv'](_0x59c15e['elaps'+_0x183e96(0xd78)]||-0x2d0+-0x11*-0x153+-0x13b3,0x217a+0x7f*0x2+-0x1e90));if(_0x14f6b7){if(_0x226e33[_0x183e96(0xae1)](_0x183e96(0x54d),_0x226e33['FxOhV'])){var _0x50f19d,_0x247810;if(_0x1177de&&_0x59c15e['surve'+'y']&&_0x59c15e[_0x183e96(0x5a8)+'y'][_0x183e96(0x8b9)+'ntrol'+_0x183e96(0x4bb)])_0x50f19d=_0x226e33['VLiDC']('LIVE\x20'+'·\x20',Object[_0x183e96(0x68a)](_0x59c15e['insta'+_0x183e96(0xae9)])['lengt'+'h'])+_0x226e33[_0x183e96(0x3c0)]+_0x523c71+'s',_0x247810='#7ee0'+'a8';else{if(_0x59c15e[_0x183e96(0xceb)+_0x183e96(0x9c3)+'ed']>0x2444+-0x3c2+0x2082*-0x1)_0x50f19d=_0x226e33['JEWYN'](_0x226e33[_0x183e96(0x410)]+_0x523c71,'s'),_0x247810='#ffd4'+'8a';else{if(_0x59c15e['scrip'+'tData']){if(_0x226e33['UHODN']===_0x226e33[_0x183e96(0xabb)]){var _0x3b058d=_0x29df87[_0x183e96(0xab0)]['split']('|'),_0x120de6=0x1*-0xd01+0x4f7+0x62*0x15;while(!![]){switch(_0x3b058d[_0x120de6++]){case'0':_0x5f1975(_0x183e96(0x44a)+'t',{'report':_0x427545()});continue;case'1':_0xd26261=_0x27440b;continue;case'2':if(_0x29df87['fLipb'](_0x531632,'snaps'+'hot'))return;continue;case'3':var _0x538bb7=_0x23e1c4();continue;case'4':var _0x27440b=_0x29df87[_0x183e96(0xbe0)](_0x59c801,_0x530242);continue;case'5':if(_0x3318c0===_0x183e96(0xac8)){_0x29df87[_0x183e96(0xdc7)](_0x713934,_0x2a7c47&&typeof _0x50a0a1['on']===_0x183e96(0x50e)+'an'?_0x1bced7['on']:_0x7f4130['on'],_0x28d840&&typeof _0x5525fa[_0x183e96(0x9a1)+'r']==='numbe'+'r'?_0x4bce1c['facto'+'r']:_0xe29dc4['facto'+'r']);return;}continue;case'6':for(var _0x21a236 in _0x538bb7)_0x27440b[_0x21a236]=_0x538bb7[_0x21a236];continue;case'7':_0x47deb8=[];continue;case'8':for(var _0x477de0 in _0x27440b){var _0x5d54bf=_0x3d0439[_0x477de0],_0x452563=_0x27440b[_0x477de0];if(_0x29df87[_0x183e96(0xd76)](_0x5d54bf,_0x452563))_0x184859[_0x183e96(0x822)](_0x29df87['dBcjV'](_0x29df87[_0x183e96(0xd56)](_0x29df87['dBcjV'](_0x477de0+':\x20',_0x5d54bf),_0x29df87[_0x183e96(0x283)]),_0x452563));}continue;case'9':if(!_0x3f3413){_0x50e199=_0x27440b,_0x4cffd7=[],_0x29df87['QcKum'](_0x4fdf3f,_0x183e96(0x44a)+'t',{'report':_0x2c6cf7()});return;}continue;case'10':var _0x530242=_0x7be555();continue;}break;}}else _0x50f19d=_0x226e33[_0x183e96(0x37a)](_0x226e33[_0x183e96(0x6c3)]('metad'+_0x183e96(0x3ab)+'eady\x20'+'·\x20',_0x523c71),'s'),_0x247810='#ffd4'+'8a';}else{if(_0x226e33['gqFwx'](_0x226e33[_0x183e96(0x2d0)],_0x226e33[_0x183e96(0x6cc)]))_0x50f19d=_0x226e33['Syzeg'](_0x59c15e[_0x183e96(0x9cd)]&&_0x59c15e[_0x183e96(0x9cd)]['ok']?_0x226e33['Glifv']:'armin'+'g\x20·\x20',_0x523c71)+'s',_0x247810='#ffd4'+'8a';else{var _0x2ee461=(_0x183e96(0x510)+'|8|3|'+_0x183e96(0x6e9)+_0x183e96(0xd2e)+'|1')[_0x183e96(0xa6a)]('|'),_0x239220=0x12a2+0x21a0+-0x3442;while(!![]){switch(_0x2ee461[_0x239220++]){case'0':_0x531439[_0x183e96(0xcbb)]=_0x55049c;continue;case'1':for(var _0x45df48=0x17b9+-0x31*0x65+-0x464;_0x45df48<_0x151182[_0x183e96(0xe2a)+'h'];_0x45df48++)_0x1cd8c5[_0x183e96(0x9ed)][_0x183e96(0x55e)+_0x183e96(0xd13)+'d'](_0x151182[_0x45df48]);continue;case'2':if(!_0x73167d[_0x183e96(0x9ed)])return;continue;case'3':for(var _0x1663db=0x670*0x4+-0x2cd*-0x4+0x14*-0x1d9;_0x29df87['WLqUo'](_0x1663db,_0x53a1e9['lengt'+'h']);_0x1663db++)if(_0x36f36d[_0x1663db]['id']===_0x1badf7)_0x44b5e8=_0x1c9a79[_0x1663db];continue;case'4':for(var _0x4a7167 in _0x3c8400[_0x183e96(0x3c5)+'ns']){if(_0x4b1e05['butto'+'ns'][_0x4a7167][_0x183e96(0x593)+'List'])_0xf7ac6e['butto'+'ns'][_0x4a7167]['class'+_0x183e96(0xdd5)]=_0x29df87[_0x183e96(0x912)]('mn-ta'+'b',_0x4a7167===_0x2f6f0a?'\x20acti'+'ve':'');}continue;case'5':_0x3405af[_0x183e96(0x90e)]=[];continue;case'6':_0x4f3dbc[_0x183e96(0x482)][_0x183e96(0x2b4)+_0x183e96(0x806)+'t']='Sakur'+_0x183e96(0x6d3)+_0x183e96(0x322)+_0x183e96(0xc00)+(_0x44b5e8&&_0x44b5e8['label']||'?');continue;case'7':var _0x151182=[];continue;case'8':var _0x44b5e8=null;continue;case'9':try{_0x151182=_0x29df87[_0x183e96(0x7ad)](_0x2f296d,_0x56210b);}catch(_0x9d919e){_0x151182=[];}continue;case'10':while(_0x3b1ce6[_0x183e96(0x9ed)]['first'+_0x183e96(0x984)])_0x2a8a3c[_0x183e96(0x9ed)]['remov'+_0x183e96(0xaa7)+'d'](_0x12e802['cols'][_0x183e96(0xb91)+_0x183e96(0x984)]);continue;}break;}}}}}_0x14f6b7['textC'+_0x183e96(0x806)+'t']=_0x50f19d,_0x14f6b7[_0x183e96(0x754)][_0x183e96(0x280)]=_0x247810;}else _0x4ade6c['sp']['textC'+_0x183e96(0x806)+'t']=_0x2ad5d2['on']?_0x183e96(0xbfc)+'\x20ON':_0x4d7065['KtEOm'],_0x3e6ce0['sp'][_0x183e96(0x754)]['backg'+_0x183e96(0xdd2)]=_0x22f9e2['on']?_0x3838f1:'trans'+_0x183e96(0x427)+'t',_0x937016['sp']['style']['color']=_0x36a81a['on']?_0x183e96(0x7fc)+'1b':_0x183e96(0x811)+'f5';}_0x1bdfde&&(_0x1bdfde['textC'+_0x183e96(0x806)+'t']=_0x59c15e[_0x183e96(0x8cf)]&&_0x59c15e[_0x183e96(0x8cf)][_0x183e96(0xe2a)+'h']?'Diff\x20'+_0x183e96(0x244)+'apsho'+'t:\x20'+_0x59c15e['diff'][_0x183e96(0x55c)](',\x20'):_0x183e96(0x426)+'ice\x20w'+'hile\x20'+'walki'+_0x183e96(0x36d)+_0x183e96(0x639)+'ting\x20'+_0x183e96(0xb47)+'ping\x20'+'marks'+_0x183e96(0xd7e)+_0x183e96(0x8dc)+_0x183e96(0x74c)+_0x183e96(0xd7e)+'h.');if(_0x59c15e['speed']&&_0x2acf16){if(_0x226e33['EywqS']!==_0x183e96(0xdb5))_0x2352d2=!!_0x59c15e[_0x183e96(0xac8)]['on'],_0x2acf16[_0x183e96(0x2b4)+_0x183e96(0x806)+'t']=_0x2352d2?'Speed'+_0x183e96(0x36b):_0x183e96(0xbfc)+_0x183e96(0x69e),_0x2acf16['style'][_0x183e96(0xd59)+'round']=_0x2352d2?_0x4316bd:_0x226e33[_0x183e96(0x8e5)],_0x2acf16[_0x183e96(0x754)]['color']=_0x2352d2?_0x183e96(0x7fc)+'1b':'#f7ee'+'f5',_0x421953&&_0x59c15e[_0x183e96(0xac8)][_0x183e96(0x9a1)+'r']&&(_0x421953['textC'+'onten'+'t']=Number(_0x59c15e['speed'][_0x183e96(0x9a1)+'r'])[_0x183e96(0xa0d)+'ed'](-0x214a+0x2413*-0x1+-0x1a*-0x2ab)+'x');else{var _0xed15f4=(_0x183e96(0x58c)+_0x183e96(0x23d)+'6|2')[_0x183e96(0xa6a)]('|'),_0x241001=0x70d+0x6d*0x53+-0x2a64;while(!![]){switch(_0xed15f4[_0x241001++]){case'0':var _0x569db6=!_0x5db68a['on']?_0x183e96(0x6c8)+'ff':_0x3c705f[_0x183e96(0x554)]?_0x183e96(0xe4a)+_0x183e96(0x76d):'ESP\x20m'+'ap';continue;case'1':if(!_0x22e652)return;continue;case'2':_0x22e652[_0x183e96(0x754)][_0x183e96(0x280)]=_0x49a190['on']?_0x183e96(0x7fc)+'1b':'#f7ee'+'f5';continue;case'3':if(_0x46b9a4[_0x183e96(0x554)]&&!_0x4a7360())_0x276fa8[_0x183e96(0x554)]=![];continue;case'4':if(_0x569db6!==_0x22e652['textC'+'onten'+'t'])_0x22e652['textC'+'onten'+'t']=_0x569db6;continue;case'5':var _0x22e652=_0x6d0ee&&_0x2b530b[_0x183e96(0x30c)];continue;case'6':_0x22e652['style']['backg'+_0x183e96(0xdd2)]=_0x30a536['on']?_0x3346c5:_0x183e96(0x34d)+_0x183e96(0x427)+'t';continue;}break;}}}if(_0x39c4c7)try{if(_0x183e96(0x7d2)!==_0x183e96(0x7d2))try{if(_0xa86538[_0x1c3e14][_0x183e96(0x8e2)+_0x183e96(0x888)+_0x183e96(0xe35)])_0x195a3d[_0x45d279]['conte'+_0x183e96(0x888)+'dow'][_0x183e96(0x319)+'essag'+'e'](_0x5550a7,'*');}catch(_0x4fa07a){}else _0x39c4c7[_0x183e96(0x2b4)+'onten'+'t']=_0x226e33[_0x183e96(0x963)](_0x203974,_0x59c15e);}catch(_0x5b41a5){_0x39c4c7[_0x183e96(0x2b4)+'onten'+'t']=JSON['strin'+'gify'](_0x59c15e,null,-0x3ee+0x14b0+-0x10c1);}console[_0x183e96(0x34e)](_0x226e33['vYSAP'],_0x226e33['dovvf'](_0x226e33['uxEEA']+_0x4316bd,_0x226e33['RjaIK']),_0x59c15e),console[_0x183e96(0x34e)](_0x4f7f6f+'\x0a'+JSON[_0x183e96(0x80a)+_0x183e96(0xad3)](_0x59c15e,null,-0x1*0x1cba+-0x1*0x5ed+0x22a8)+'\x0a'+_0x18fe1f);}};return _0x2a6ddc[_0x2460e9(0xbc9)+'et']['api']='1',_0x2a6ddc['api']=_0x4850f5,_0x4850f5;}function _0x203974(_0x5b5e67){var _0x555eaa=_0x19bc25,_0x1cac3b={'UWfiH':function(_0x9ba94,_0x26eb80){return _0x9ba94+_0x26eb80;},'kNOKM':function(_0x3980a1,_0x2e42cc){return _0x3980a1+_0x2e42cc;},'zubZh':_0x555eaa(0x648)+'8a'},_0x4010ea=[];_0x4010ea['push'](_0x226e33['vvEYW'](_0x226e33[_0x555eaa(0x7a6)](_0x226e33['uVMts']('frame'+'\x20\x20\x20\x20',_0x5b5e67[_0x555eaa(0xb5a)]||'?'),'\x20\x20('),Math[_0x555eaa(0xdd2)]((_0x5b5e67[_0x555eaa(0xd21)+_0x555eaa(0xd78)]||0x168b+0x195e+-0x45b*0xb)/(-0x1d89+0x1368+-0xe09*-0x1)))+'s)'),_0x4010ea[_0x555eaa(0x822)](_0x226e33['wnAZQ'](_0x226e33[_0x555eaa(0xd6b)](_0x226e33[_0x555eaa(0x269)](_0x226e33['zyowT']+(_0x5b5e67['uwmk']?_0x226e33['XuJbR']:'no'),_0x226e33[_0x555eaa(0xcf0)])+(_0x5b5e67['il2Cp'+'pCont'+_0x555eaa(0x4b1)]?_0x555eaa(0x39b):'no'),'\x20\x20\x20ty'+'pes\x20'),_0x226e33[_0x555eaa(0x5cf)](_0x5b5e67[_0x555eaa(0x892)+_0x555eaa(0x666)],null)?_0x5b5e67['typeC'+'ount']:'?')),_0x4010ea[_0x555eaa(0x822)](_0x226e33[_0x555eaa(0xb43)](_0x226e33[_0x555eaa(0xb86)](_0x226e33[_0x555eaa(0x339)](_0x555eaa(0xceb)+_0x555eaa(0x990),_0x5b5e67[_0x555eaa(0xceb)+_0x555eaa(0x9c3)+'ed']),'/')+_0x5b5e67[_0x555eaa(0xceb)+_0x555eaa(0xcf4)],_0x555eaa(0x9bf)+_0x555eaa(0x2a6))),_0x4010ea[_0x555eaa(0x822)]('');var _0x4d93f9=_0x5b5e67[_0x555eaa(0x920)+'nces']||{},_0x17b11e=Object[_0x555eaa(0x68a)](_0x4d93f9);!_0x17b11e[_0x555eaa(0xe2a)+'h']&&(_0x4010ea['push']('no\x20li'+'ve\x20ob'+_0x555eaa(0xce6)+'\x20capt'+_0x555eaa(0xc5f)+'yet.'),_0x4010ea['push'](''),_0x4010ea['push'](_0x555eaa(0x247)+'ooks\x20'+_0x555eaa(0x9ad)+'on\x20th'+_0x555eaa(0xc30)+_0x555eaa(0xcda)+'wn\x20Up'+_0x555eaa(0x8d9)+');\x20no'+_0x555eaa(0x519)+'\x20capt'+_0x555eaa(0xc5f)+_0x555eaa(0xc87)),_0x4010ea[_0x555eaa(0x822)](_0x555eaa(0x8af)+'date\x20'+_0x555eaa(0x505)+_0x555eaa(0x90f)+_0x555eaa(0x2e4)+'\x20sign'+_0x555eaa(0xcf2)+'\x20did\x20'+_0x555eaa(0x492)+_0x555eaa(0xd46)));for(var _0x5e7235=0x1934+-0x9b1+-0xf83;_0x226e33[_0x555eaa(0x24f)](_0x5e7235,_0x17b11e[_0x555eaa(0xe2a)+'h']);_0x5e7235++){if(_0x226e33[_0x555eaa(0xc8d)](_0x555eaa(0xbed),'uXzoy')){var _0x345804=_0x17b11e[_0x5e7235];_0x4010ea['push'](_0x226e33[_0x555eaa(0x398)](_0x226e33[_0x555eaa(0x99f)](_0x345804,_0x555eaa(0x702)),_0x4d93f9[_0x345804]));}else _0x1bd00=_0x1cac3b['UWfiH'](_0x1cac3b[_0x555eaa(0x979)](_0x555eaa(0x437)+_0x555eaa(0x3ab)+'eady\x20'+'·\x20',_0x51029f),'s'),_0x77d6a4=_0x1cac3b[_0x555eaa(0x64b)];}_0x4010ea[_0x555eaa(0x822)]('');var _0x53dde8=_0x5b5e67['surve'+'y']||{},_0x41f73e=Object['keys'](_0x53dde8);for(var _0x3e178a=-0x167*-0x1+0x1568+0x16cf*-0x1;_0x226e33[_0x555eaa(0x24f)](_0x3e178a,_0x41f73e['lengt'+'h']);_0x3e178a++){var _0x231915=_0x41f73e[_0x3e178a],_0x421aed=_0x53dde8[_0x231915];if(!_0x421aed||!_0x421aed[_0x555eaa(0xe2a)+'h'])continue;_0x4010ea['push'](_0x226e33[_0x555eaa(0x2c9)](_0x226e33['DzKoL']+_0x231915+'\x20',new Array(Math[_0x555eaa(0x8d5)](0xc8e+0x9cd+0x1*-0x165a,_0x226e33[_0x555eaa(0xb30)](-0x1b92+-0x2*0xce1+0x3576,_0x231915['lengt'+'h'])))[_0x555eaa(0x55c)]('─'))),_0x4010ea[_0x555eaa(0x822)](_0x555eaa(0x794)+_0x555eaa(0x21f)+'\x20kind'+_0x555eaa(0x893)+_0x555eaa(0xbb1)+_0x555eaa(0x835)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'raw');for(var _0x406de6=-0x161f+0x1*0xbfd+0xa22;_0x226e33[_0x555eaa(0xc06)](_0x406de6,_0x421aed[_0x555eaa(0xe2a)+'h']);_0x406de6++){var _0x170b52=_0x421aed[_0x406de6],_0x2e9c79=_0x226e33[_0x555eaa(0xbd4)](typeof _0x170b52['v'],_0x555eaa(0x791)+'r')?Math['round'](_0x170b52['v']*(0x111+0x2f6*-0xd+0x2955))/(0x21f5*-0x1+-0x1ed5+0x44b2):_0x170b52['v'];_0x4010ea[_0x555eaa(0x822)](_0x226e33['YFVMt'](_0x226e33['wCyOi'](_0x226e33[_0x555eaa(0xa98)](_0x226e33[_0x555eaa(0xb43)](_0x226e33[_0x555eaa(0xc49)](_0x226e33['PujZn']('\x20\x20',_0x226e33[_0x555eaa(0x2a0)]('0x',_0x170b52['o'][_0x555eaa(0x488)+_0x555eaa(0x35f)](0x572+0x5*-0x175+-0x1e7*-0x1))['padEn'+'d'](0x18af+-0x1d13+0x46c))+'\x20',_0x170b52['k']['padEn'+'d'](0x7f7*0x1+0x28c*0x1+0x14*-0x86)),'\x20'),_0x226e33[_0x555eaa(0x5c1)](String,_0x2e9c79)['padEn'+'d'](-0x1725+0xe2e+0x907*0x1)),'\x20'),_0x170b52[_0x555eaa(0xdb8)]||''));}_0x4010ea[_0x555eaa(0x822)]('');}if(_0x5b5e67[_0x555eaa(0xd5c)+'ngs']&&_0x5b5e67['warni'+_0x555eaa(0xb68)]['lengt'+'h']){_0x4010ea[_0x555eaa(0x822)](_0x555eaa(0xd5c)+'ngs');for(var _0x1e5230=-0x6cf+0x208b+-0x66f*0x4;_0x226e33[_0x555eaa(0x24f)](_0x1e5230,_0x5b5e67[_0x555eaa(0xd5c)+'ngs'][_0x555eaa(0xe2a)+'h']);_0x1e5230++)_0x4010ea['push'](_0x555eaa(0x435)+_0x5b5e67['warni'+'ngs'][_0x1e5230]);}return _0x4010ea[_0x555eaa(0x55c)]('\x0a');}window['addEv'+_0x19bc25(0xb70)+'stene'+'r']('messa'+'ge',function(_0x2a1d36){var _0x35372f=_0x19bc25,_0x3af292=_0x2a1d36[_0x35372f(0x964)];if(!_0x3af292||_0x226e33[_0x35372f(0xa96)](_0x3af292['__sak'+_0x35372f(0x843)],_0x8133f3))return;try{if('tMhBi'===_0x35372f(0x28d)){if(_0x3af292[_0x35372f(0xc1c)]===_0x35372f(0xc89)){_0x226e33['jgJIH'](_0x1c20d7)[_0x35372f(0x935)]({'host':_0x3af292['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x3af292['kind']===_0x226e33[_0x35372f(0x7f1)])_0x1c20d7()[_0x35372f(0x935)](_0x3af292[_0x35372f(0x44a)+'t']);}else return _0x2adfc9[_0x35372f(0xbc5)+'em'](_0x247aab)==='1';}catch(_0x494d02){_0x226e33[_0x35372f(0x980)](_0x226e33['aEJHs'],_0x226e33['aEJHs'])?console[_0x35372f(0x301)](_0x35372f(0xe5d)+_0x35372f(0xcfa)+'\x20pane'+_0x35372f(0x225)+_0x35372f(0x365)+_0x35372f(0x462),_0x226e33[_0x35372f(0x823)]+_0x4316bd,_0x494d02):_0x2bb7cd[_0x35372f(0xd5c)+_0x35372f(0xb68)][_0x35372f(0x822)](_0x35372f(0xc28)+'w.Uni'+_0x35372f(0x555)+_0x35372f(0xc70)+'t.Val'+_0x35372f(0xbde)+_0x35372f(0x695)+'is\x20mi'+_0x35372f(0xcc7)+_0x35372f(0x651)+_0x35372f(0xcb4)+_0x35372f(0x76b)+_0x35372f(0x62a)+'g\x20bli'+'nd.');}});function _0x3e6550(){_0x44878b(!![]);}if(document[_0x19bc25(0x649)])_0x3e6550();else document['addEv'+_0x19bc25(0xb70)+'stene'+'r'](_0x19bc25(0x635)+'ntent'+_0x19bc25(0x2f7)+'d',_0x3e6550,{'once':!![]});return;}window[_0x19bc25(0x938)+'URA_S'+_0x19bc25(0x7f0)]=window[_0x19bc25(0x938)+_0x19bc25(0x740)+_0x19bc25(0x7f0)]||{'at':Date[_0x19bc25(0x25b)]()};function _0x118f86(_0xe55f62,_0x442baf){var _0x23c445=_0x19bc25,_0x1dd70={'__sakura':_0x8133f3,'kind':_0xe55f62};if(_0x442baf){for(var _0x1494b4 in _0x442baf)_0x1dd70[_0x1494b4]=_0x442baf[_0x1494b4];}try{if(window[_0x23c445(0x427)+'t']&&window['paren'+'t']!==window)window['paren'+'t'][_0x23c445(0x319)+_0x23c445(0xafd)+'e'](_0x1dd70,'*');}catch(_0x1d6aca){}try{if(window[_0x23c445(0x6d7)]&&window['top']!==window)window[_0x23c445(0x6d7)]['postM'+'essag'+'e'](_0x1dd70,'*');}catch(_0x5b6281){}}console['log']('%c[sa'+'kura]'+_0x19bc25(0x652)+_0x19bc25(0x6a7)+_0x19bc25(0x7a2)+'VE\x20v'+_0x1bb3ff,'color'+':'+_0x4316bd+_0x226e33['sLZfx'],{'host':_0x3d5366,'href':location[_0x19bc25(0x2db)],'version':_0x1bb3ff}),_0x226e33['vXObb'](_0x118f86,_0x226e33[_0x19bc25(0xd6c)],{'host':_0x3d5366,'role':_0x3de885});var _0x1de39c=window[_0x19bc25(0x938)+'URA_S'+_0x19bc25(0x7f0)]&&window[_0x19bc25(0x938)+_0x19bc25(0x740)+_0x19bc25(0x7f0)]['at']||Date['now']();window[_0x19bc25(0x601)+_0x19bc25(0xb70)+'stene'+'r'](_0x226e33['tHdCJ'],function(_0xfc0067){var _0x3c34fd=_0x19bc25;try{if(_0x226e33[_0x3c34fd(0xa96)]('Yuida',_0x226e33[_0x3c34fd(0x3d7)]))return _0x314fda[_0x3c34fd(0x530)+'e']=_0x226e33[_0x3c34fd(0x6aa)],_0x3c753f[_0x3c34fd(0xdc4)];else{var _0x7cc4b1=_0xfc0067&&_0xfc0067[_0x3c34fd(0x964)];if(!_0x7cc4b1||_0x226e33['gZlEd'](_0x7cc4b1['__sak'+'ura'],_0x8133f3)||_0x7cc4b1[_0x3c34fd(0xc1c)]!==_0x226e33[_0x3c34fd(0x5f4)])return;_0x3a879c(_0x7cc4b1[_0x3c34fd(0x79c)],_0x7cc4b1[_0x3c34fd(0xd22)]);}}catch(_0xe695dd){}});try{if(_0x226e33[_0x19bc25(0x2aa)](_0x19bc25(0x5b0),_0x19bc25(0xc29)))return _0x196301['query'+_0x19bc25(0x42a)+'tor'](_0x226e33[_0x19bc25(0x461)]+_0x26e92b+'\x22]');else{var _0x4d8383=new BroadcastChannel('sakur'+'a-sw');_0x4d8383[_0x19bc25(0xc72)+_0x19bc25(0xce3)]=function(_0xf04d0d){var _0x1abb84=_0x19bc25,_0xaf65ba={'OGVHd':'0|6|2'+'|5|4|'+'1|3','sVSmD':_0x226e33[_0x1abb84(0x777)],'kfFXS':_0x1abb84(0x61f)+'s'};if(_0x226e33['MLJKh']('iaxsA',_0x1abb84(0x5b8))){var _0x240982=_0xf04d0d[_0x1abb84(0x964)];if(_0x240982&&_0x226e33[_0x1abb84(0xae1)](_0x240982['__sak'+_0x1abb84(0x843)],_0x8133f3)&&_0x226e33[_0x1abb84(0x458)](_0x240982[_0x1abb84(0xc1c)],_0x1abb84(0x79c)))_0x3a879c(_0x240982['cmd'],_0x240982[_0x1abb84(0xd22)]);}else{if(_0x511f74)return _0x8c0d40;try{var _0x5267a1=_0xaf65ba['OGVHd'][_0x1abb84(0xa6a)]('|'),_0x423829=0x20ef*0x1+0xffd+-0x30ec;while(!![]){switch(_0x5267a1[_0x423829++]){case'0':if(!_0x146e55[_0x1abb84(0x649)]||!_0x257a91['body'][_0x1abb84(0x55e)+'dChil'+'d'])return null;continue;case'1':_0x4d3b33={'cv':_0x15af8b};continue;case'2':_0x15af8b['id']=_0x1abb84(0xce2)+_0x1abb84(0xc58)+'es';continue;case'3':return _0x1816fe;case'4':_0xdffe9c[_0x1abb84(0x649)]['appen'+_0x1abb84(0xd13)+'d'](_0x15af8b);continue;case'5':_0x15af8b[_0x1abb84(0x754)][_0x1abb84(0x940)+'xt']=_0xaf65ba['sVSmD'];continue;case'6':var _0x15af8b=_0x3b0646[_0x1abb84(0xe0f)+'eElem'+'ent'](_0xaf65ba['kfFXS']);continue;}break;}}catch(_0x2c2e47){return null;}}};}}catch(_0x344cbc){}var _0x2673f2=[];(function _0x115197(){var _0x49ee84=_0x19bc25,_0x132e03={'FeMQg':function(_0x293668){return _0x293668();},'dECPf':_0x226e33['UhbnI'],'JQoNP':function(_0x4f820b,_0x50a0a2){return _0x4f820b!==_0x50a0a2;},'gYpgY':_0x226e33['YFAJQ'],'KlPuA':_0x49ee84(0x7fc)+'1b','aqZPL':'#f7ee'+'f5','TIcVf':function(_0xb3fd95,_0x10fbd1){return _0x226e33['gZlEd'](_0xb3fd95,_0x10fbd1);},'nzKHj':_0x226e33[_0x49ee84(0x78b)]},_0x2e7b01=['log','warn',_0x226e33['dbHmn'],'info',_0x49ee84(0x9e5)];for(var _0x2bb976=-0x21e7+0x1ddf+-0x158*-0x3;_0x226e33[_0x49ee84(0xc06)](_0x2bb976,_0x2e7b01['lengt'+'h']);_0x2bb976++){(function(_0x4201e0){var _0x179045=_0x49ee84,_0x175f1e={'JCGWN':function(_0x2d46f7,_0x5974fb){return _0x2d46f7(_0x5974fb);},'eSVnF':_0x179045(0x3ad),'cRUXT':function(_0x1e9590,_0x1f30fd){return _0x1e9590!==_0x1f30fd;}};if(_0x132e03[_0x179045(0x9f7)]('dOgnj','dOgnj'))try{var _0xaa65a1=_0x2604ab&&_0x55b0a9['esp'];if(!_0xaa65a1)return;if(_0x20fc88[_0x179045(0x554)]&&!_0x132e03[_0x179045(0xb8a)](_0x32e730))_0x3b7a41['boxes']=![];var _0x298d00=!_0x9c4bc8['on']?_0x179045(0x6c8)+'ff':_0x279a94[_0x179045(0x554)]?_0x132e03[_0x179045(0xb39)]:_0x179045(0xc96)+'ap';if(_0x132e03[_0x179045(0x43b)](_0x298d00,_0xaa65a1['textC'+'onten'+'t']))_0xaa65a1[_0x179045(0x2b4)+'onten'+'t']=_0x298d00;_0xaa65a1[_0x179045(0x754)]['backg'+_0x179045(0xdd2)]=_0x4776b7['on']?_0x201697:_0x132e03['gYpgY'],_0xaa65a1['style'][_0x179045(0x280)]=_0x586958['on']?_0x132e03[_0x179045(0x72a)]:_0x132e03['aqZPL'];}catch(_0xb8776a){}else{var _0x3e73ac=console[_0x4201e0];if(typeof _0x3e73ac!==_0x132e03[_0x179045(0x1fc)])return;console[_0x4201e0]=function(){var _0x1cc22a=_0x179045,_0x33bdfc={'ZWLrF':function(_0xb1e2a0,_0x46bc52){return _0x175f1e['JCGWN'](_0xb1e2a0,_0x46bc52);}};try{if(_0x175f1e['eSVnF']==='sGlmO')try{_0x3c76a5['setIt'+'em'](_0x15737c,_0x33bdfc[_0x1cc22a(0xcf3)](_0x28052f,_0x1d14d9['fov']));}catch(_0x2a4f44){}else{var _0x49d6d1='';for(var _0x2a3914=-0x16*0x11c+0x49*0x6f+0x73f*-0x1;_0x2a3914<arguments[_0x1cc22a(0xe2a)+'h'];_0x2a3914++){var _0x125f74=arguments[_0x2a3914];if(typeof _0x125f74===_0x1cc22a(0x80a)+'g')_0x49d6d1+=_0x125f74;else{if(_0x125f74&&_0x125f74[_0x1cc22a(0x1e4)+'ge'])_0x49d6d1+=_0x125f74['messa'+'ge'];}}if(_0x175f1e[_0x1cc22a(0x7f5)](_0x49d6d1['index'+'Of'](_0x4f7f6f),-(0x26c2+-0x1*-0xfc5+-0x3e5*0xe)))return _0x3e73ac['apply'](console,arguments);if(_0x49d6d1['index'+'Of']('Unity'+_0x1cc22a(0xab1)+_0x1cc22a(0x313))!==-(-0x1ab3+-0x627*-0x1+-0x1*-0x148d)){var _0x5f08df=_0x49d6d1[_0x1cc22a(0x62f)](0xca4+0xf70*0x2+0xae1*-0x4,-0x1d66+0x509+0x883*0x3);if(_0x2673f2[_0x1cc22a(0x724)+'Of'](_0x5f08df)===-(-0x85*-0x3a+-0x24b*0x2+-0x198b)&&_0x2673f2[_0x1cc22a(0xe2a)+'h']<-0x338*0xc+0x1239*0x2+0x26a)_0x2673f2[_0x1cc22a(0x822)](_0x5f08df);}}}catch(_0x542964){}return _0x3e73ac[_0x1cc22a(0x8b7)](console,arguments);};}}(_0x2e7b01[_0x2bb976]));}}());var _0x3ee6ca={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x1c66cc=null,_0x2675d4=null,_0x4200fa=-(0x178f*0x1+-0x1a33+0x1*0x2a5),_0x1a10cd=null;function _0x456e55(_0x5d15d3){var _0x513a4b=_0x19bc25,_0x5bad1d={'ZEXGU':function(_0x212d1d,_0x4799ba){return _0x226e33['Kdluw'](_0x212d1d,_0x4799ba);},'pKkiV':function(_0x33983c,_0x53de6c){return _0x226e33['WejpB'](_0x33983c,_0x53de6c);},'UVLAd':function(_0x3ca84d,_0x51bbeb){return _0x3ca84d/_0x51bbeb;},'IsmpZ':function(_0x25a2e2,_0x4c47a5){var _0x58b1db=_0x500f;return _0x226e33[_0x58b1db(0x3ee)](_0x25a2e2,_0x4c47a5);},'pfquC':function(_0x5a231b,_0x497bc5){var _0x5a5c88=_0x500f;return _0x226e33[_0x5a5c88(0xd60)](_0x5a231b,_0x497bc5);},'jtVad':_0x513a4b(0x934)+'74'};if(_0x226e33[_0x513a4b(0x826)]!==_0x226e33['vUfyx'])try{if(!_0x5d15d3)return;var _0x30517f=_0x5d15d3[_0x513a4b(0x920)+_0x513a4b(0x1c6)]?_0x5d15d3[_0x513a4b(0x920)+'nce'][_0x513a4b(0x3c7)+'ts']:_0x5d15d3['expor'+'ts']||null;if(!_0x30517f)return;if(!_0x1a10cd)try{if(_0x226e33['QeHJH']===_0x513a4b(0xb93))_0x1a10cd=Object[_0x513a4b(0x68a)](_0x30517f)[_0x513a4b(0x62f)](0x200f+-0x4e0+-0x1b2f,0x99a*-0x1+0x3*0x79d+-0xd25);else{var _0x1df88d=_0x55621e['list'][_0x56e4d3],_0x25896b=(_0x1df88d['x']-_0x4bd264[_0x513a4b(0x832)][-0x111*0xe+-0x1bfe+0x2aec])*_0x1c6739,_0x5f9687=_0x5bad1d['ZEXGU'](_0x1df88d['z']-_0x261321[_0x513a4b(0x832)][-0x1231*-0x1+0x2*0x92c+0x2487*-0x1],_0xa40d71),_0x200dab=_0x12ffc8[_0x513a4b(0x9a6)](_0x25896b*_0x25896b+_0x5f9687*_0x5f9687),_0x5ea4f8=_0x176d46,_0x598085=_0x4f39bf;_0x200dab>_0xb62162-(0x2d*-0x4f+0x11fc+-0x413)?(_0x5ea4f8=_0x55186d+_0x5bad1d[_0x513a4b(0x560)](_0x5bad1d[_0x513a4b(0x96e)](_0x25896b,_0x200dab),_0x580cd6-(0x1be*0x14+-0x1*0x1a21+-0x59*0x19)),_0x598085=_0x5bad1d['IsmpZ'](_0x2ee22d,_0x5f9687/_0x200dab*(_0x30ec0e-(-0x1*-0x12c1+0x13*0x2e+-0x1625*0x1)))):(_0x5ea4f8=_0x6b5e9b+_0x25896b,_0x598085=_0xd8c76+_0x5f9687);var _0x2d1d4d=_0x453474!==null&&_0x5bad1d['pfquC'](_0x1df88d['team'],_0x502977);_0x28c594[_0x513a4b(0xb45)+_0x513a4b(0xc18)]=_0x2d1d4d?_0x513a4b(0x2b5)+'6a':_0x5bad1d[_0x513a4b(0x64d)],_0x3a4e30[_0x513a4b(0xa97)+'Path'](),_0xdb45f7[_0x513a4b(0x5e1)](_0x5ea4f8,_0x598085,_0x2d1d4d?0x18*-0xe+-0x35d+0x4af:-0xdbf+0x1c1b+0x1*-0xe59+0.20000000000000018,-0x658+0x3*-0xb61+-0x2b*-0xf1,_0x402bf3['PI']*(0x4f*-0x17+-0x3*0x79c+0x1def)),_0x57e8f1['fill'](),_0x2d87ca++;}}catch(_0x453bd7){}var _0x344659=_0x30517f['memor'+'y'];_0x344659&&_0x344659['buffe'+'r']&&_0x344659['buffe'+'r']['byteL'+_0x513a4b(0xd79)]>0x53*-0xb+-0xd90+0x1121&&(_0x226e33['wkKfc']('CzxOR','CzxOR')?(_0x2675d4=_0x344659,_0x4200fa=_0x226e33[_0x513a4b(0xb30)](Date[_0x513a4b(0x25b)](),_0x1de39c)):_0x50595d(![]));}catch(_0x282845){}else _0x5ca259['st'][_0x513a4b(0xdff)+_0x513a4b(0xe12)+'n']=_0xc367bb['froun'+'d'](_0x2c98bd),_0x487fbe++,_0x94ffb9[_0x513a4b(0x822)]('0x'+_0x43d012['o']['toStr'+_0x513a4b(0x35f)](-0x2108+-0x1ee3+-0x3ffb*-0x1));}function _0x34e42c(){var _0x8f3b5c=_0x19bc25,_0x870932={'bYEll':function(_0x1ea709,_0x771cde){return _0x1ea709===_0x771cde;},'Veaak':_0x8f3b5c(0xba1)+_0x8f3b5c(0xa8b),'AHEjI':function(_0x3a7410,_0x4af6c1){return _0x226e33['FysPg'](_0x3a7410,_0x4af6c1);},'BtLdR':function(_0x5c9c15,_0x35eed3){return _0x5c9c15/_0x35eed3;},'KCFjr':function(_0x5e98b9,_0x4a1683){return _0x5e98b9+_0x4a1683;},'fTHxC':_0x226e33['uJFLt'],'TaYcv':_0x226e33[_0x8f3b5c(0x1be)],'PaAUh':function(_0x47e51a,_0x59f9c5){return _0x47e51a/_0x59f9c5;}};if(_0x226e33['kbBFN']==='jJgLi')_0x15814c=_0xb2aa00[_0xf229e7][_0x8f3b5c(0x21b)],_0x300f00[_0x8f3b5c(0x530)+'e']=_0x226e33['iVSqn'],_0x4cb2a8=_0x5e706f?_0xa87b19[_0x4d4c60][_0x8f3b5c(0x21b)]:_0x4db7db(_0x47c227+_0x38593d,_0x8f3b5c(0x484));else try{if(_0x226e33[_0x8f3b5c(0x383)](typeof WebAssembly,_0x8f3b5c(0x7f6)+_0x8f3b5c(0x396)))return;var _0x5a521e=[_0x8f3b5c(0x920)+'ntiat'+'e',_0x8f3b5c(0x920)+_0x8f3b5c(0x285)+_0x8f3b5c(0xc77)+_0x8f3b5c(0xc4b)];for(var _0x4616d0=0x1*0xe87+-0x1305+0x47e;_0x4616d0<_0x5a521e[_0x8f3b5c(0xe2a)+'h'];_0x4616d0++){_0x226e33[_0x8f3b5c(0xc08)]('JYHsP',_0x226e33[_0x8f3b5c(0x548)])?function(_0x402bfe){var _0x992e8d=_0x8f3b5c;if(_0x992e8d(0xe40)==='FxaTY'){var _0x3a2f31=WebAssembly[_0x402bfe];if(typeof _0x3a2f31!=='funct'+_0x992e8d(0xa8b)||_0x3a2f31[_0x992e8d(0xc20)+_0x992e8d(0x59e)+_0x992e8d(0xbbe)+'ap'])return;var _0x38e67c=function(){var _0x11a502=_0x992e8d,_0x18af79=_0x3a2f31[_0x11a502(0x8b7)](this,arguments);try{if(_0x18af79&&_0x870932[_0x11a502(0x927)](typeof _0x18af79['then'],_0x870932['Veaak']))_0x18af79['then'](_0x456e55,function(){});else _0x870932[_0x11a502(0x7b2)](_0x456e55,_0x18af79);}catch(_0x5aa7c6){}return _0x18af79;};_0x38e67c[_0x992e8d(0xc20)+_0x992e8d(0x59e)+_0x992e8d(0xbbe)+'ap']=!![];try{if(_0x992e8d(0x696)!==_0x870932[_0x992e8d(0x491)]){var _0x5edacd=_0x15291d[_0x227237],_0x29ea02=_0x870932[_0x992e8d(0x927)](typeof _0x5edacd['v'],_0x992e8d(0x791)+'r')?_0x870932['BtLdR'](_0x591538[_0x992e8d(0xdd2)](_0x5edacd['v']*(-0x37e*-0x7+-0x2166+-0x1*-0xcdc)),-0x14c9+0x1a9f*-0x1+0x3350):_0x5edacd['v'];_0x901998['push'](_0x870932[_0x992e8d(0xe07)]('\x20\x20'+_0x870932[_0x992e8d(0xe07)]('0x',_0x5edacd['o'][_0x992e8d(0x488)+'ing'](0x11d7*0x2+-0x49*0x39+-0x135d*0x1))['padEn'+'d'](-0x5*-0x48f+0x1ad7+-0x319a)+'\x20'+_0x5edacd['k'][_0x992e8d(0x873)+'d'](-0xa*0x2de+-0x2*-0x445+0x142d),'\x20')+_0x34fa74(_0x29ea02)['padEn'+'d'](-0x1530+-0x1c0f*-0x1+0x7*-0xf9)+'\x20'+(_0x5edacd[_0x992e8d(0xdb8)]||''));}else Object[_0x992e8d(0x9a8)+_0x992e8d(0xd16)+'erty'](_0x38e67c,_0x870932['TaYcv'],{'value':_0x3a2f31[_0x992e8d(0x5ac)],'configurable':!![]});}catch(_0x45bde2){}WebAssembly[_0x402bfe]=_0x38e67c;}else{var _0x35056f=_0x238c5d==='v2'?-0xdba+0x12ba+-0x6*0xd5:_0x870932['bYEll'](_0x223617,'v3')?-0x8*0x279+0xfda+-0x3f1*-0x1:0x25c2+0x1097*0x1+-0x3655,_0x10bbc4=_0x4c5a8e(_0x5df24e[_0x992e8d(0x5cd)],_0x1ef853,_0x35056f);_0x10bbc4&&(_0x530f64[_0x992e8d(0x321)]=_0x10bbc4,_0x5c08b4['v']=_0x10bbc4[-0xa52+-0x18*0x61+0x136a]);}}(_0x5a521e[_0x4616d0]):(_0x516429=_0x33a822['x']/(0x67b+0x1c20+-0x1eb3),_0x10dea4=_0x870932['PaAUh'](_0x3b9de3['y'],0x116f*0x2+0x2fb*-0x1+-0x13*0x179));}}catch(_0x55e34){}}var _0x3f0565=null,_0x4579ce=null,_0x1cbdf6={},_0x23fcaf={'MouseLook':[{'name':_0x19bc25(0x449)+_0x19bc25(0xc01)+'\u0094','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':['i32']},{'name':_0x226e33['UtxXS'],'ret':'void','params':[_0x19bc25(0xcb9)],'wasmParams':[_0x19bc25(0x8fd),_0x226e33['Ndlkh']]},{'name':_0x226e33['KBviu'],'ret':_0x19bc25(0xc73),'params':['float'],'wasmParams':['i32',_0x19bc25(0x484)]},{'name':_0x226e33[_0x19bc25(0x71f)],'ret':_0x226e33['OatOw'],'params':[_0x19bc25(0xcb9)],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)],_0x19bc25(0x484)]},{'name':_0x226e33[_0x19bc25(0xc7e)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x19bc25(0xe9e)+'\u008c\u0092\u0092\u0093\u008a'+'\u0094','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0x674)+_0x19bc25(0x44b)+'\u008f','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0xa4a)+_0x19bc25(0x3e3),'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x19bc25(0x4cd)+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x19bc25(0xb3b)+_0x19bc25(0xb9b)+'\u0095','ret':_0x19bc25(0xcb9),'params':[],'wasmParams':['i32'],'wasmRet':_0x226e33[_0x19bc25(0xa41)]},{'name':_0x19bc25(0xcd3)+'\u0092\u0088\u0090\u008c\u0088'+'\u0090','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0x969)+_0x19bc25(0xa2e)+'\u0088','ret':'void','params':['float'],'wasmParams':[_0x19bc25(0x8fd),_0x19bc25(0x484)]},{'name':_0x19bc25(0x6dc)+_0x19bc25(0x1cb)+'\u008d','ret':'float','params':[],'wasmParams':[_0x19bc25(0x8fd)],'wasmRet':_0x226e33[_0x19bc25(0xa41)]},{'name':'\u008d\u0095\u0088\u0092\u008c'+'\u008c\u0090\u0089\u0086\u0092'+'\u0092','ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33['yAEFS'],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':['i32']},{'name':'\u0090\u0091\u0095\u008c\u008e'+'\u0093\u0091\u0089\u0088\u008d'+'\u008a','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':['i32']},{'name':_0x19bc25(0xdde)+_0x19bc25(0x772)+'\u0093','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':'\u008d\u0093\u0095\u008a\u0088'+'\u008a\u0092\u0092\u008a\u0093'+'\u008a','ret':'void','params':[_0x226e33[_0x19bc25(0x793)],_0x226e33[_0x19bc25(0x793)]],'wasmParams':['i32',_0x19bc25(0x484),_0x226e33['Ndlkh']]},{'name':_0x19bc25(0xb55)+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','ret':'float','params':[],'wasmParams':[_0x19bc25(0x8fd)],'wasmRet':'f32'},{'name':_0x19bc25(0x2ed)+_0x19bc25(0xd3a)+'\u0088','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':'.ctor','ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':'\u0093\u008c\u0091\u0091\u0093'+_0x19bc25(0x60e)+'\u008e','ret':'void','params':[_0x19bc25(0xcb9)],'wasmParams':[_0x19bc25(0x8fd),'f32']},{'name':_0x226e33[_0x19bc25(0xda5)],'ret':_0x19bc25(0xcb9),'params':[],'wasmParams':[_0x19bc25(0x8fd)],'wasmRet':_0x19bc25(0x484)},{'name':'\u0094\u008d\u0091\u0091\u0090'+_0x19bc25(0x7bf)+'\u008a','ret':'void','params':[_0x19bc25(0xcb9),_0x226e33[_0x19bc25(0x793)]],'wasmParams':[_0x226e33['ibsVA'],'f32',_0x19bc25(0x484)]},{'name':'\u0089\u0091\u0086\u0093\u008f'+'\u008c\u0087\u0086\u008c\u0092'+'\u008d','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0xe0e)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x262)],'ret':_0x226e33['OatOw'],'params':[_0x19bc25(0xcb9)],'wasmParams':[_0x19bc25(0x8fd),'f32']},{'name':'\u0090\u008e\u0095\u0093\u008d'+'\u0089\u0094\u008c\u008b\u0089'+'\u0093','ret':_0x226e33[_0x19bc25(0x793)],'params':[],'wasmParams':['i32'],'wasmRet':_0x19bc25(0x484)},{'name':_0x226e33[_0x19bc25(0x8fb)],'ret':_0x19bc25(0xcb9),'params':[],'wasmParams':[_0x226e33['ibsVA']],'wasmRet':_0x226e33[_0x19bc25(0xa41)]},{'name':_0x19bc25(0x4e6)+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','ret':_0x226e33['OatOw'],'params':[_0x19bc25(0xcb9)],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)],_0x19bc25(0x484)]},{'name':'\u0087\u008f\u008d\u008b\u0092'+'\u0089\u0090\u0087\u0086\u0087'+'\u008c','ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x19bc25(0x1cf)+_0x19bc25(0xd8a)+'\u0093','ret':_0x226e33[_0x19bc25(0xac7)],'params':['float'],'wasmParams':[_0x226e33['ibsVA'],'f32']},{'name':_0x19bc25(0x6d2)+_0x19bc25(0xdaf)+'\u0089','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x226e33[_0x19bc25(0x5a5)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x226e33['SBBLC'],'ret':_0x19bc25(0xc73),'params':[_0x226e33[_0x19bc25(0x793)]],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)],_0x226e33[_0x19bc25(0xa41)]]}],'FPScontroller':[{'name':_0x226e33[_0x19bc25(0x45d)],'ret':'float','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':_0x19bc25(0x484)},{'name':'\u0090\u0093\u0091\u0091\u008b'+_0x19bc25(0x882)+'\u0092','ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0xcc0)],'ret':_0x19bc25(0x43a),'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x226e33[_0x19bc25(0x76c)],'ret':_0x19bc25(0xc73),'params':['bool'],'wasmParams':['i32',_0x226e33['ibsVA']]},{'name':'\u0095\u0092\u0088\u0087\u0092'+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x660)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':'\u008a\u008c\u0086\u0095\u0087'+_0x19bc25(0xc91)+'\u008a','ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x19bc25(0xcc6)+_0x19bc25(0x917)+'\u0087','ret':_0x19bc25(0x43a),'params':[],'wasmParams':[_0x226e33['ibsVA']],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x226e33['wCvlF'],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':['i32']},{'name':_0x19bc25(0x4a8)+_0x19bc25(0xce5)+'\u0093','ret':_0x226e33['NZShp'],'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x226e33['MHmLr'],'ret':'bool','params':[],'wasmParams':[_0x19bc25(0x8fd)],'wasmRet':_0x226e33['ibsVA']},{'name':_0x226e33[_0x19bc25(0xc60)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x226e33['boaJB'],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':['i32']},{'name':_0x19bc25(0x816)+_0x19bc25(0x9db)+'\u008b','ret':_0x226e33['NZShp'],'params':[_0x19bc25(0x43a),_0x19bc25(0x43a)],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)],_0x226e33[_0x19bc25(0x6ea)],_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':'i32'},{'name':_0x226e33['ENUte'],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x9b4)],'ret':_0x226e33[_0x19bc25(0x340)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':_0x226e33[_0x19bc25(0x6ea)]},{'name':_0x19bc25(0x21c)+_0x19bc25(0x29f)+'\u008f','ret':_0x19bc25(0xc73),'params':[_0x226e33[_0x19bc25(0x340)]],'wasmParams':[_0x226e33['ibsVA'],_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x3de)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x19bc25(0x814)+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','ret':_0x226e33['NZShp'],'params':[],'wasmParams':[_0x226e33['ibsVA']],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x226e33[_0x19bc25(0x4e0)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':['i32']},{'name':_0x226e33[_0x19bc25(0x2e0)],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u008a\u008c\u0092\u0092\u0094'+_0x19bc25(0xa52)+'\u0089','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':'\u0087\u0089\u0089\u0090\u0087'+_0x19bc25(0x80e)+'\u0094','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':'\u008b\u0090\u0088\u008d\u0087'+'\u008b\u0091\u008d\u0086\u0093'+'\u0090','ret':_0x226e33['OatOw'],'params':[_0x226e33[_0x19bc25(0x340)]],'wasmParams':[_0x226e33['ibsVA'],_0x19bc25(0x8fd)]},{'name':_0x226e33['itOpR'],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':['i32']},{'name':'\u008d\u0095\u0087\u0093\u0092'+_0x19bc25(0x2ba)+'\u008b','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0x307)+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33['UOIAC'],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u008c\u0089\u008b\u0092\u0093'+_0x19bc25(0x336)+'\u008a','ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x19bc25(0x3b8)+_0x19bc25(0x29e)+'\u0092','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u0088\u008b\u008f\u008a\u008e'+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0xdd1)+_0x19bc25(0xb69)+'\u0094','ret':_0x19bc25(0xc73),'params':[_0x19bc25(0x43a)],'wasmParams':[_0x226e33['ibsVA'],_0x19bc25(0x8fd)]},{'name':_0x19bc25(0x67f)+_0x19bc25(0x939)+'\u0090','ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0xc2b)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33['iCcqB'],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x226e33[_0x19bc25(0x682)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x226e33['cXUsi'],'ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0xdcd)],'ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0x737)+_0x19bc25(0xbcc)+'\u0094','ret':'void','params':[_0x19bc25(0x43a)],'wasmParams':[_0x19bc25(0x8fd),_0x226e33['ibsVA']]},{'name':_0x226e33['CucvQ'],'ret':'bool','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':_0x226e33[_0x19bc25(0x6ea)]},{'name':'\u008e\u008b\u0095\u0092\u008e'+_0x19bc25(0xc68)+'\u0086','ret':_0x226e33['NZShp'],'params':[],'wasmParams':[_0x226e33['ibsVA']],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x226e33['YBWFS'],'ret':_0x19bc25(0x43a),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x226e33['NgNgp'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x226e33['EITgF'],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x348)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x226e33['aZrVl'],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u0089\u0086\u0090\u0088\u008c'+_0x19bc25(0x74a)+'\u008b','ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33['XFhvA'],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u008d\u0094\u0095\u008b\u008a'+_0x19bc25(0x60b)+'\u0094','ret':_0x226e33[_0x19bc25(0xac7)],'params':[_0x226e33[_0x19bc25(0x793)]],'wasmParams':[_0x19bc25(0x8fd),_0x226e33[_0x19bc25(0xa41)]]},{'name':_0x19bc25(0x51d)+_0x19bc25(0x571)+'\u0092','ret':'bool','params':[],'wasmParams':[_0x19bc25(0x8fd)],'wasmRet':'i32'},{'name':_0x226e33['sugkQ'],'ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x1dd)],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x2f0)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x19bc25(0x552)+'\u008f\u0095\u0090\u0087\u008d'+'\u008c','ret':_0x19bc25(0x43a),'params':[],'wasmParams':[_0x19bc25(0x8fd)],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x19bc25(0x2f1)+_0x19bc25(0x94b)+'\u0087','ret':_0x226e33['NZShp'],'params':[_0x19bc25(0x43a),_0x19bc25(0x43a)],'wasmParams':[_0x19bc25(0x8fd),_0x226e33[_0x19bc25(0x6ea)],_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':'i32'},{'name':'Updat'+'e','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':'\u0094\u008e\u0091\u008d\u0095'+_0x19bc25(0xe0d)+'\u008e','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33['cgVTK'],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x226e33['muKVo'],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u0090\u0093\u0090\u008f\u0088'+'\u0095\u008e\u008f\u0088\u008d'+'\u008f','ret':_0x226e33[_0x19bc25(0xac7)],'params':['float'],'wasmParams':[_0x19bc25(0x8fd),_0x226e33['Ndlkh']]},{'name':_0x226e33['yiQSL'],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0xbd0)+_0x19bc25(0x82b)+'\u008d','ret':'bool','params':['bool',_0x19bc25(0x43a)],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)],_0x19bc25(0x8fd),_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x226e33[_0x19bc25(0xdc0)],'ret':_0x226e33['OatOw'],'params':[_0x226e33[_0x19bc25(0x793)],'bool'],'wasmParams':['i32','f32',_0x19bc25(0x8fd)]},{'name':_0x226e33['EXxHg'],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x226e33['uPcRr'],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u0095\u0088\u0090\u0092\u0090'+_0x19bc25(0x4a4)+'\u0095','ret':'void','params':[],'wasmParams':['i32']}],'TDM_GameManager':[{'name':_0x226e33[_0x19bc25(0x619)],'ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33['bjcFp'],'ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x953)],'ret':'bool','params':[_0x226e33['Bofaa']],'wasmParams':[_0x19bc25(0x8fd),_0x226e33['ibsVA']],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x226e33[_0x19bc25(0x3a0)],'ret':'void','params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x226e33[_0x19bc25(0x730)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[_0x226e33[_0x19bc25(0x340)]],'wasmParams':[_0x19bc25(0x8fd),_0x19bc25(0x8fd)]},{'name':_0x226e33['zeHSi'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x226e33[_0x19bc25(0xa72)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':'\u008d\u008f\u0086\u0092\u008c'+_0x19bc25(0x883)+'\u0087','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x2ce)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u0086\u008c\u008e\u0094\u0090'+_0x19bc25(0x7b6)+'\u0088','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x538)],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0x937)+_0x19bc25(0x8e8)+'\u0094','ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x19bc25(0x48c)+_0x19bc25(0x623)+'\u008c','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x19bc25(0xc23)+_0x19bc25(0x949)+'\u0088','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x7ba)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x226e33[_0x19bc25(0x6f6)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0x27d)+_0x19bc25(0xd0e)+'\u0091','ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33['Hhter'],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x9b1)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0xe69)],'ret':_0x19bc25(0xc73),'params':[_0x226e33['NZShp']],'wasmParams':['i32',_0x226e33['ibsVA']]},{'name':_0x226e33[_0x19bc25(0x6ac)],'ret':'void','params':[_0x226e33[_0x19bc25(0x6fc)],_0x19bc25(0xc8a),_0x19bc25(0xc8a)],'wasmParams':['i32',_0x226e33[_0x19bc25(0x6ea)],_0x19bc25(0x8fd),'i32']},{'name':_0x19bc25(0xbec)+'\u0094\u0089\u0093\u0088\u0093'+'\u0089','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x19bc25(0x542)+_0x19bc25(0x4d6)+'\u008c','ret':'void','params':[_0x226e33[_0x19bc25(0x6fc)],_0x226e33[_0x19bc25(0x6fc)],'int'],'wasmParams':[_0x226e33['ibsVA'],_0x226e33[_0x19bc25(0x6ea)],_0x226e33['ibsVA'],'i32']},{'name':'\u0094\u0086\u008a\u008f\u008e'+_0x19bc25(0x5da)+'\u0092','ret':_0x226e33[_0x19bc25(0x340)],'params':[],'wasmParams':[_0x226e33['ibsVA']],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x19bc25(0x891)+'e','ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u008f\u0088\u008f\u0089\u0089'+_0x19bc25(0xb2e)+'\u0087','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x19bc25(0xd5a)+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':['i32']},{'name':_0x19bc25(0x3cf)+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x7f4)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x19bc25(0x524)+'\u0093\u008f\u0095\u0087\u008e'+'\u008c','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x19bc25(0xd63)+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','ret':_0x226e33['OatOw'],'params':[_0x19bc25(0x43a)],'wasmParams':[_0x19bc25(0x8fd),'i32']},{'name':_0x226e33[_0x19bc25(0x434)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x97a)],'ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x19bc25(0x8ef)+_0x19bc25(0x34f)+'\u0091','ret':_0x226e33['OatOw'],'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0xbdf)],'ret':_0x226e33['OatOw'],'params':[_0x226e33[_0x19bc25(0x340)]],'wasmParams':[_0x19bc25(0x8fd),'i32']},{'name':'\u008f\u008c\u0086\u0087\u008e'+_0x19bc25(0xb34)+'\u0095','ret':_0x19bc25(0x43a),'params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]],'wasmRet':_0x19bc25(0x8fd)},{'name':_0x19bc25(0x454)+_0x19bc25(0xdda)+'\u008f','ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u008c\u0086\u0095\u0091\u008a'+_0x19bc25(0x86e)+'\u008a','ret':_0x19bc25(0x43a),'params':[_0x226e33['Bofaa']],'wasmParams':[_0x19bc25(0x8fd),_0x19bc25(0x8fd)],'wasmRet':_0x226e33[_0x19bc25(0x6ea)]},{'name':'\u0087\u008d\u0088\u0086\u008a'+_0x19bc25(0xb61)+'\u008e','ret':_0x226e33['OatOw'],'params':[_0x19bc25(0x43a)],'wasmParams':[_0x226e33['ibsVA'],'i32']},{'name':_0x226e33['heepk'],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':['i32']},{'name':_0x226e33['TPjhD'],'ret':'void','params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':'\u008a\u008a\u008b\u008f\u0092'+_0x19bc25(0x34a)+'\u008c','ret':'void','params':[_0x19bc25(0xc8a),'int','int'],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)],_0x226e33[_0x19bc25(0x6ea)],'i32',_0x19bc25(0x8fd)]},{'name':'\u0089\u0086\u0094\u0092\u0092'+_0x19bc25(0x8c0)+'\u008e','ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':'Awake','ret':_0x19bc25(0xc73),'params':[],'wasmParams':[_0x19bc25(0x8fd)]},{'name':_0x226e33['nNmYf'],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u0094\u0092\u0086\u0092\u0092'+'\u008c\u0086\u008f\u0091\u008f'+'\u008e','ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':['i32']},{'name':_0x226e33['uyQgQ'],'ret':'void','params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':'\u0087\u0089\u008f\u008a\u0095'+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','ret':_0x19bc25(0xc73),'params':[_0x19bc25(0x43a)],'wasmParams':[_0x19bc25(0x8fd),_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x3cc)],'ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x226e33[_0x19bc25(0x725)],'ret':_0x226e33['OatOw'],'params':[],'wasmParams':['i32']},{'name':'\u0088\u008a\u0088\u0090\u0094'+_0x19bc25(0x4eb)+'\u008e','ret':_0x19bc25(0xc73),'params':[],'wasmParams':['i32']},{'name':_0x226e33['Btito'],'ret':_0x19bc25(0xc73),'params':[_0x226e33['Bofaa'],_0x226e33[_0x19bc25(0x6fc)]],'wasmParams':['i32','i32',_0x19bc25(0x8fd)]},{'name':_0x19bc25(0xe64)+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x226e33[_0x19bc25(0x722)],'ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]},{'name':_0x226e33[_0x19bc25(0x240)],'ret':'void','params':[_0x19bc25(0x43a)],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)],_0x19bc25(0x8fd)]},{'name':_0x226e33[_0x19bc25(0x4d1)],'ret':_0x226e33[_0x19bc25(0xac7)],'params':[],'wasmParams':[_0x226e33['ibsVA']]},{'name':_0x226e33['VHRbB'],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008e\u0094\u0093\u0094\u008d'+_0x19bc25(0x38f)+'\u0089','ret':'void','params':[],'wasmParams':[_0x226e33[_0x19bc25(0x6ea)]]}]},_0x10dd84=[],_0x2ba691=[],_0x392876={},_0x514922=0x6f1+0x2*-0x53+-0x64b,_0x38f094=![],_0x2df973=[],_0x42f30b=[{'type':_0x226e33[_0x19bc25(0x2a8)],'keep':!![]},{'type':_0x19bc25(0x3c6)+_0x19bc25(0xa48)+'pt','keep':!![]},{'type':'Weapo'+_0x19bc25(0xd6e)+_0x19bc25(0xd2b),'keep':![]},{'type':_0x19bc25(0x22f)+_0x19bc25(0x997)+'nager','keep':!![]},{'type':_0x19bc25(0x352)+_0x19bc25(0x31b)+_0x19bc25(0xe5e),'keep':!![]},{'type':_0x19bc25(0xc85)+'nNetw'+_0x19bc25(0xcfb)+'nc','keep':!![],'many':!![]},{'type':_0x226e33[_0x19bc25(0x79d)],'keep':!![],'many':!![]},{'type':_0x226e33[_0x19bc25(0x8f2)],'keep':!![],'many':!![]},{'type':_0x226e33['maqhA'],'keep':!![],'many':!![]}],_0x7c8f0a=[_0x226e33['Spzdc'],_0x19bc25(0x681)+'bly-C'+_0x19bc25(0xdf3)+_0x19bc25(0x266)+'tpass'+'.dll',_0x19bc25(0xaad)+_0x19bc25(0x1d8)+_0x19bc25(0x413)+'cal.d'+'ll',_0x226e33[_0x19bc25(0xbce)],_0x226e33['ekIMb'],_0x226e33['wtMcR']];(function _0x222f43(){var _0x5ede99=_0x19bc25,_0x514986={'nopnh':function(_0x3db07a,_0xe409b8){return _0x226e33['NkMnC'](_0x3db07a,_0xe409b8);},'eoouY':function(_0x54689b,_0x590a19){var _0x4a5fbd=_0x500f;return _0x226e33[_0x4a5fbd(0x669)](_0x54689b,_0x590a19);},'Nbcjy':function(_0x2d52ff,_0x3a75aa){return _0x2d52ff+_0x3a75aa;},'lAKAi':_0x5ede99(0xbe4),'dRwCo':function(_0x53dc73,_0x58db38){return _0x53dc73+_0x58db38;},'DJURr':'#8d7a'+'99'};try{var _0x29fa2e=window[_0x5ede99(0x20e)+'WebMo'+_0x5ede99(0x313)]&&window[_0x5ede99(0x20e)+_0x5ede99(0xab1)+_0x5ede99(0x313)]['Runti'+'me'];if(!_0x29fa2e||typeof _0x29fa2e[_0x5ede99(0xe0f)+_0x5ede99(0x572)+'in']!==_0x226e33[_0x5ede99(0x78b)]){if(_0x226e33['FQLrF']===_0x5ede99(0x97b)){_0x3ee6ca['error']='Runti'+'me.cr'+_0x5ede99(0xe28)+_0x5ede99(0xbc4)+'\x20unav'+'ailab'+'le';return;}else _0xd63dd9[_0x5ede99(0x2b4)+_0x5ede99(0x806)+'t']=_0x514986['nopnh'](_0x1c6767,0x1ad+0x129b+-0x1448)?_0x514986['eoouY'](_0x514986[_0x5ede99(0xe63)]('PLAYE'+_0x5ede99(0xe85),_0x36a71a)+(_0x13df6b?_0x514986[_0x5ede99(0xe63)](_0x514986[_0x5ede99(0x49b)](_0x514986[_0x5ede99(0xcde)],_0x16c469),_0x5ede99(0x516)):''),_0x3acd4f&&_0x4b3ea4[_0x5ede99(0x96b)+'a']?_0x514986[_0x5ede99(0x7e6)](_0x5ede99(0xaca)+'\x20',_0x20c792[_0x5ede99(0x96b)+_0x5ede99(0x5bb)]):'\x20\x20cam'+'\x20-'):'no\x20en'+'emies'+_0x5ede99(0xce0)+_0x5ede99(0x218)+_0x5ede99(0x5e0)+'cam\x20'+(_0x5964b2&&_0x3b64b0['camer'+'a']?_0x3cc980[_0x5ede99(0x96b)+_0x5ede99(0x5bb)]:'-'),_0x59dcf5['style'][_0x5ede99(0x280)]=_0x514986[_0x5ede99(0x1e6)](_0x3b38cb,0x19cc+0xd4f*0x1+0x271b*-0x1)?'#7ee0'+'a8':_0x514986['DJURr'];}_0x3ee6ca[_0x5ede99(0x23b)+'pted']=!![],_0x4579ce=_0x29fa2e[_0x5ede99(0xe0f)+_0x5ede99(0x572)+'in']({'name':_0x5ede99(0xce2)+'a-ski'+_0x5ede99(0x6b8)+'z','version':_0x1bb3ff,'referencedAssemblies':_0x7c8f0a[_0x5ede99(0x62f)]()}),_0x3ee6ca['ok']=!![];try{var _0xf5defc=window[_0x5ede99(0x20e)+'WebMo'+_0x5ede99(0x313)][_0x5ede99(0x425)+'me'];_0xf5defc['__sak'+'uraTa'+'g']=_0x1bb3ff+':'+Math[_0x5ede99(0xe17)+'m']()[_0x5ede99(0x488)+'ing'](0xf*0x131+-0x1*0x121+-0x109a)[_0x5ede99(0x62f)](0xe19*-0x1+0x615*-0x2+-0x5*-0x541,0x23d5+-0xbf*-0x2+-0x1*0x2549),_0x1c66cc=_0xf5defc['__sak'+_0x5ede99(0x699)+'g'];}catch(_0x10f26d){}_0x226e33[_0x5ede99(0x876)](_0x345b86),_0x15d8b0(),_0x3ee6ca[_0x5ede99(0xceb)+_0x5ede99(0xb72)+_0x5ede99(0x641)]=_0x10dd84[_0x5ede99(0xe2a)+'h'],_0x34e42c(),_0x3ee6ca[_0x5ede99(0x79a)+_0x5ede99(0xa4f)]=!![];}catch(_0x45ab91){_0x3ee6ca[_0x5ede99(0x94c)]=_0x226e33['PrWBw'](String,_0x45ab91&&_0x45ab91[_0x5ede99(0x1e4)+'ge']||_0x45ab91);}}());var _0x15bb91=new Float32Array(0x2055+-0x101*-0x5+-0x2559),_0x4551f7=new Int32Array(_0x15bb91[_0x19bc25(0x67d)+'r']);function _0x40e406(_0x202493){return _0x15bb91[0x1913+-0x1*0x18a3+-0x70]=_0x202493,_0x4551f7[0x53f+0x2*-0xac1+0x1043];}function _0x2d09bf(_0x50f522){return _0x4551f7[0x2510+-0x1b9c+-0x2c*0x37]=_0x50f522|-0x1a*-0x23+-0x7f*0x41+0x1cb1*0x1,_0x15bb91[-0x197+-0x37*-0x16+-0x323];}var _0x2b9e94={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x455abb(){var _0x51c9da=_0x19bc25,_0x59faa2={'RZRet':function(_0xf2122e,_0x3e58cd){return _0xf2122e(_0x3e58cd);},'JNbWX':'Updat'+'e','UWcbJ':_0x51c9da(0x8fd),'dddJY':function(_0x56f584,_0x3d0b5e,_0x29e065,_0x45d7ca){return _0x56f584(_0x3d0b5e,_0x29e065,_0x45d7ca);},'Hczby':function(_0x43b927,_0x51e5ce){var _0x51436a=_0x51c9da;return _0x226e33[_0x51436a(0x3e8)](_0x43b927,_0x51e5ce);}};if(_0x226e33['wkKfc'](_0x51c9da(0x40d),_0x226e33['aVOrT'])){try{if(_0x4579ce&&_0x4579ce['_runt'+'ime']){var _0x4f7ee5=_0x4579ce[_0x51c9da(0x272)+_0x51c9da(0xd5f)];if(typeof _0x4f7ee5['resol'+_0x51c9da(0x802)+'e']===_0x226e33[_0x51c9da(0x78b)]){var _0x3a1c31=_0x4f7ee5[_0x51c9da(0x9e0)+_0x51c9da(0x802)+'e']();if(_0x3a1c31)return _0x2b9e94['sourc'+'e']=_0x226e33[_0x51c9da(0xa23)],_0x3a1c31;}if(_0x4f7ee5[_0x51c9da(0xdc4)])return _0x2b9e94['sourc'+'e']=_0x51c9da(0xd7d)+'n._ru'+_0x51c9da(0x9fb)+'._gam'+'e',_0x4f7ee5[_0x51c9da(0xdc4)];}}catch(_0x22ffee){}try{if(_0x226e33[_0x51c9da(0xa96)]('boXpe','ABBxM')){var _0x256b4b=window['Unity'+_0x51c9da(0xab1)+_0x51c9da(0x313)]&&window[_0x51c9da(0x20e)+'WebMo'+_0x51c9da(0x313)][_0x51c9da(0x425)+'me'];if(_0x256b4b&&typeof _0x256b4b['resol'+_0x51c9da(0x802)+'e']==='funct'+'ion'){var _0x5764c5=_0x256b4b['resol'+'veGam'+'e']();if(_0x5764c5){if(_0x226e33[_0x51c9da(0x890)]===_0x226e33['kwYRe'])_0x4988e3['setIt'+'em'](_0x52f53e,_0x59faa2[_0x51c9da(0x602)](_0x16d7c3,_0x335460[_0x51c9da(0xb6b)]));else return _0x2b9e94[_0x51c9da(0x530)+'e']='Runti'+'me.re'+_0x51c9da(0xc09)+'Game('+')',_0x5764c5;}}if(_0x256b4b&&_0x256b4b[_0x51c9da(0xdc4)])return _0x2b9e94['sourc'+'e']=_0x226e33[_0x51c9da(0xacf)],_0x256b4b;}else _0x201ff5['warni'+'ngs']['push'](_0x226e33[_0x51c9da(0xd54)](_0x51c9da(0xdeb)+_0x51c9da(0x9e0)+'ved\x20'+_0x1af5da[_0x51c9da(0xceb)+_0x51c9da(0xe29)+_0x51c9da(0x78c)]+_0x51c9da(0x77a)+_0x122bd4['hooks'+_0x51c9da(0xcf4)]+(_0x51c9da(0xa78)+_0x51c9da(0x9d9)+_0x51c9da(0x3f1)+_0x51c9da(0x809)+'index'+_0x51c9da(0xcf9)+_0x51c9da(0x3b6)+_0x51c9da(0x1fa)+_0x51c9da(0xe2c)+_0x51c9da(0xd04)+'gnatu'+'re\x20'),_0x226e33['KLMwZ']));}catch(_0x2f7a95){}try{if(_0x226e33[_0x51c9da(0x294)](_0x51c9da(0x675),_0x51c9da(0x2e1))){_0x19068e[_0xfb2de8]=_0x226e33[_0x51c9da(0x745)]('0x',_0x4e75af[_0x3a7484][_0x51c9da(0x5cd)]['toStr'+_0x51c9da(0x35f)](-0x26d7+-0x17*0x96+-0xfd*-0x35));if(_0x6cadcd[_0x567670][_0x51c9da(0xa7b)+'ced'])_0x1bba92[_0x51c9da(0x822)](_0x1dcf1c);}else{var _0x5d0e85=window[_0x51c9da(0x2ca)+_0x51c9da(0xd8d)+'nce']||window['unity'+_0x51c9da(0x45c)]||window[_0x51c9da(0x88b)];if(_0x5d0e85)return _0x2b9e94[_0x51c9da(0x530)+'e']=_0x226e33[_0x51c9da(0x5b2)],_0x5d0e85;}}catch(_0x4d6989){}try{if(typeof game!==_0x51c9da(0x7f6)+'ined'&&game){if(_0x51c9da(0xd19)!=='bZZry'){var _0x278c8d=_0x98d042&&_0x2d3327['data'];if(!_0x278c8d||_0x278c8d[_0x51c9da(0xc20)+_0x51c9da(0x843)]!==_0x2c1637||_0x226e33[_0x51c9da(0xb25)](_0x278c8d[_0x51c9da(0xc1c)],_0x226e33[_0x51c9da(0x5f4)]))return;_0x1ca796(_0x278c8d[_0x51c9da(0x79c)],_0x278c8d['arg']);}else return _0x2b9e94[_0x51c9da(0x530)+'e']=_0x226e33[_0x51c9da(0x535)],game;}}catch(_0x5bd0d4){}try{var _0xae1ca7=Object['keys'](window);for(var _0x262088=0x4cc+-0x25e7+0x211b;_0x226e33['ltKxU'](_0x262088,_0xae1ca7['lengt'+'h'])&&_0x262088<-0x4*0x39a+-0xad+-0x3*-0x5cf;_0x262088++){var _0x24bd87=window[_0xae1ca7[_0x262088]];if(_0x24bd87&&_0x226e33[_0x51c9da(0x54e)](typeof _0x24bd87,_0x51c9da(0xcb5)+'t')&&_0x24bd87['Modul'+'e']&&_0x24bd87[_0x51c9da(0x6df)+'e'][_0x51c9da(0xd06)+'8']&&_0x24bd87['Modul'+'e'][_0x51c9da(0xd06)+'8']['buffe'+'r']){if('gUrAY'===_0x226e33['pWzuC']){var _0x45bfcb=_0x4af38d[_0x1bbb23];try{var _0x163602=_0x48b692['hookP'+_0x51c9da(0x55f)]({'typeName':_0x45bfcb[_0x51c9da(0xb33)],'methodName':_0x59faa2[_0x51c9da(0xb16)],'params':[_0x59faa2[_0x51c9da(0xde1)],'i32'],'returnType':_0x59fc20},_0x59faa2['dddJY'](_0x563024,_0x45bfcb[_0x51c9da(0xb33)],_0x45bfcb[_0x51c9da(0x209)],_0x45bfcb[_0x51c9da(0x584)]));_0x1f4598[_0x51c9da(0x822)]({'type':_0x45bfcb[_0x51c9da(0xb33)],'hook':_0x163602,'keep':_0x45bfcb[_0x51c9da(0x209)]});}catch(_0x20b283){_0x48a850[_0x51c9da(0x822)](_0x59faa2[_0x51c9da(0x93e)](_0x45bfcb['type']+':\x20',_0x59faa2[_0x51c9da(0x602)](_0x152300,_0x20b283&&_0x20b283[_0x51c9da(0x1e4)+'ge']||_0x20b283)[_0x51c9da(0x62f)](0xe17+-0x938+-0x2b*0x1d,0x257+0x4e9+-0x6a0)));}}else return _0x2b9e94['sourc'+'e']=_0x226e33[_0x51c9da(0xa98)](_0x226e33['IQlhA'](_0x51c9da(0xc28)+'w.',_0xae1ca7[_0x262088]),_0x51c9da(0xe10)+'le'),_0x24bd87;}}}catch(_0x1216cf){}return _0x2b9e94[_0x51c9da(0x530)+'e']=null,null;}else{var _0x6340f=_0x364e80(_0x5424a1[_0x509a0e][0x7*0x3+-0x9d+0x88]),_0x3d6d5c=_0x3d4a97(_0x51c9da(0xe58),_0x51c9da(0x738)+'l');_0x3d6d5c['style'][_0x51c9da(0xe5c)+'dth']='0',_0x3d6d5c['style'][_0x51c9da(0x324)]='1',_0x3d6d5c[_0x51c9da(0x754)]['textA'+'lign']=_0x51c9da(0x2a9),_0x3d6d5c[_0x51c9da(0x2b4)+'onten'+'t']=_0x3bc1cc(_0x1f83ad[_0x173ca1][-0x2*-0x34+0x1*-0x11f3+0x118d]),_0x3d6d5c[_0x51c9da(0xbc9)+'et']['k']=_0x38953f[_0x5d724e][0x34*0x3d+-0x55*-0x58+-0x1*0x299b],_0x6340f['appen'+'dChil'+'d'](_0x3d6d5c),_0x360fa6[_0x51c9da(0x649)]['appen'+_0x51c9da(0xd13)+'d'](_0x6340f),_0x38d793[_0x51c9da(0x649)][_0x51c9da(0x2b3)+_0x51c9da(0x855)]['sp']=_0x3d6d5c;}}function _0x57a818(){var _0x29bdb8=_0x19bc25,_0xf8d60d={'XQXdU':function(_0x4c347f,_0x50a0a8){return _0x226e33['ZWuLT'](_0x4c347f,_0x50a0a8);}};if(_0x226e33[_0x29bdb8(0xe4f)]!=='flfKC')_0xf8d60d[_0x29bdb8(0xd47)](_0x2fcefa,_0x50e528(_0x3ab376[_0x29bdb8(0x6ff)])||_0x5a63ef),_0xcf1e7b();else{try{if(_0x2675d4&&_0x2675d4[_0x29bdb8(0x67d)+'r']&&_0x2675d4[_0x29bdb8(0x67d)+'r'][_0x29bdb8(0x7fb)+_0x29bdb8(0xd79)])return _0x2b9e94[_0x29bdb8(0x530)+'e']=_0x2b9e94['sourc'+'e']||_0x226e33['nhUjY'],new Uint8Array(_0x2675d4[_0x29bdb8(0x67d)+'r']);}catch(_0x106e00){}try{var _0x30a494=_0x455abb();if(_0x30a494&&_0x30a494['Modul'+'e']&&_0x30a494['Modul'+'e'][_0x29bdb8(0xd06)+'8']&&_0x30a494['Modul'+'e'][_0x29bdb8(0xd06)+'8']['buffe'+'r'])return _0x30a494[_0x29bdb8(0x6df)+'e']['HEAPU'+'8'];}catch(_0x5a67df){}return null;}}function _0x454344(){var _0x25cdde=_0x19bc25;if(_0x226e33[_0x25cdde(0xc08)](_0x25cdde(0x22e),_0x226e33[_0x25cdde(0xa86)]))try{return _0x4d7b6b&&_0x2798a1[_0x25cdde(0x67d)+'r']?_0x53ac53[_0x25cdde(0x67d)+'r']['byteL'+'ength']:0x1e9e*0x1+-0xfba+-0x2*0x772;}catch(_0x1331c2){return-0x119*-0x21+-0x18db+-0xb5e;}else{var _0x15f50f=_0x226e33[_0x25cdde(0xbdc)](_0x57a818);if(!_0x15f50f)return null;try{if(_0x226e33[_0x25cdde(0x485)](_0x25cdde(0x89a),_0x25cdde(0xb94))){var _0xe0e74f=_0x434eb2[_0x25cdde(0x72c)+_0x25cdde(0x42a)+_0x25cdde(0x9c4)+'l'](_0x226e33['fJSLH']);for(var _0x28e86c=0x11*0x20f+0x2*0x2a1+-0x2841;_0x28e86c<_0xe0e74f['lengt'+'h'];_0x28e86c++){try{if(_0xe0e74f[_0x28e86c][_0x25cdde(0x8e2)+_0x25cdde(0x888)+'dow'])_0xe0e74f[_0x28e86c][_0x25cdde(0x8e2)+_0x25cdde(0x888)+_0x25cdde(0xe35)]['postM'+_0x25cdde(0xafd)+'e'](_0x48587d,'*');}catch(_0x30d33c){}}}else return new DataView(_0x15f50f['buffe'+'r'],_0x15f50f[_0x25cdde(0xe3d)+_0x25cdde(0x25e)],_0x15f50f[_0x25cdde(0x7fb)+'ength']);}catch(_0x4b1660){if(_0x25cdde(0x546)!==_0x226e33['oxbNQ']){var _0x3dfba5=_0x1b9ba3['creat'+'eElem'+'ent']('style');_0x3dfba5['id']='sakur'+_0x25cdde(0xa94)+_0x25cdde(0x8f3),_0x3dfba5[_0x25cdde(0x2b4)+'onten'+'t']=_0x5221e6,(_0x31d79b['head']||_0x3cc95b[_0x25cdde(0x1f8)+'entEl'+'ement'])[_0x25cdde(0x55e)+_0x25cdde(0xd13)+'d'](_0x3dfba5);}else return null;}}}function _0x3fa609(_0x59ffbf,_0x57681f){var _0x2df155=_0x19bc25,_0x5097fc={'WQgZf':function(_0xc56774,_0xa9e4ae){return _0xc56774===_0xa9e4ae;}},_0x1c0a44=_0x226e33[_0x2df155(0xbdc)](_0x454344);if(!_0x1c0a44){if(_0x2df155(0xe11)!==_0x226e33[_0x2df155(0x293)])_0x3c834c[_0x2df155(0x822)]({'o':_0x3e7d14[_0x3d3673]['membe'+'rs'][_0x16ac32]['o'],'v':_0x17c8cd[_0x45c9e7][_0x2df155(0x1df)+'rs'][_0x180fd1]['v'],'why':_0x2df155(0x521)+_0x2df155(0x8a6)});else return _0x2b9e94[_0x2df155(0x5fc)+'d']++,_0x2b9e94['lastE'+_0x2df155(0x2e6)]=_0x2b9e94['lastE'+_0x2df155(0x2e6)]||_0x226e33[_0x2df155(0x4ef)],undefined;}if(_0x59ffbf<-0xb32+-0x55*0x30+0x1b22||_0x59ffbf+(-0x1*-0xed6+-0x72*-0x2+0xfb6*-0x1)>_0x1c0a44['byteL'+_0x2df155(0xd79)])return _0x2b9e94[_0x2df155(0x5fc)+'d']++,_0x2b9e94[_0x2df155(0x5f7)+'rror']=_0x2b9e94[_0x2df155(0x5f7)+'rror']||_0x226e33[_0x2df155(0xa6d)](_0x226e33['rIidd'](_0x2df155(0x30e)+_0x2df155(0x4c0)+_0x59ffbf[_0x2df155(0x488)+_0x2df155(0x35f)](0x1*0x105b+0x1d5d+-0x2da8),_0x226e33[_0x2df155(0xae8)]),_0x1c0a44[_0x2df155(0x7fb)+_0x2df155(0xd79)][_0x2df155(0x488)+_0x2df155(0x35f)](0xde4*-0x1+0xf*-0x155+-0x1ff*-0x11)),undefined;try{if('Elmna'===_0x226e33[_0x2df155(0xb5d)]){var _0x17deab=('0|1|5'+_0x2df155(0xadb)+'3')[_0x2df155(0xa6a)]('|'),_0x5a19db=-0x806+0xf*-0x4c+0x63d*0x2;while(!![]){switch(_0x17deab[_0x5a19db++]){case'0':_0x4c05d4[_0x2df155(0x597)]=!!_0x74055b;continue;case'1':var _0x1832cf=_0x226e33[_0x2df155(0x945)](_0x21ff0e);continue;case'2':if(_0x1367d8['petal'])_0xedba77['petal'][_0x2df155(0x754)]['opaci'+'ty']=_0x4adb4c[_0x2df155(0x597)]?'1':'.5';continue;case'3':if(_0x4c67ff[_0x2df155(0x597)]){_0x104171(_0x59ef81['cat']);try{var _0x303609=_0x3900cf[_0x2df155(0xc24)+_0x2df155(0x6e3)+'t']||0x2e4+0x1bb6*0x1+-0x1b7a;if(_0x303609<-0x95e*-0x4+0x10a2*-0x2+0xc*-0x26)_0x226e33['lNmPe'](_0x2600c6,![]);}catch(_0x1ac697){}}continue;case'4':_0x1832cf[_0x2df155(0x593)+_0x2df155(0xdd5)]=_0x226e33['wGkKv']+(_0x101a18[_0x2df155(0x597)]?'\x20show'+'n':'');continue;case'5':if(!_0x1832cf)return;continue;}break;}}else{_0x2b9e94['ok']++;switch(_0x57681f){case'u8':return _0x1c0a44[_0x2df155(0x341)+'nt8'](_0x59ffbf);case'i8':return _0x1c0a44['getIn'+'t8'](_0x59ffbf);case _0x2df155(0xd77):return _0x1c0a44[_0x2df155(0xc04)+_0x2df155(0x4d5)](_0x59ffbf,!![]);case _0x2df155(0x887):return _0x1c0a44['getUi'+_0x2df155(0xdb1)](_0x59ffbf,!![]);case _0x2df155(0x8fd):return _0x1c0a44[_0x2df155(0xc04)+_0x2df155(0xc31)](_0x59ffbf,!![]);case _0x2df155(0xe61):return _0x1c0a44[_0x2df155(0x341)+'nt32'](_0x59ffbf,!![]);case _0x226e33[_0x2df155(0xa41)]:return _0x1c0a44[_0x2df155(0x4d7)+_0x2df155(0xb8b)](_0x59ffbf,!![]);case _0x2df155(0x8d6):return _0x1c0a44['getFl'+_0x2df155(0xc0b)](_0x59ffbf,!![]);case'v2':case'v3':case'v4':return _0x1c0a44[_0x2df155(0x4d7)+'oat32'](_0x59ffbf,!![]);default:return _0x1c0a44[_0x2df155(0xc04)+'t32'](_0x59ffbf,!![]);}}}catch(_0x144a3e){if(_0x226e33[_0x2df155(0xc08)](_0x2df155(0xe3e),_0x226e33[_0x2df155(0xaab)]))return _0x2b9e94[_0x2df155(0x5fc)+'d']++,_0x2b9e94[_0x2df155(0x5f7)+_0x2df155(0x2e6)]=_0x2b9e94[_0x2df155(0x5f7)+_0x2df155(0x2e6)]||_0x226e33['meKdq'](String,_0x144a3e&&_0x144a3e[_0x2df155(0x1e4)+'ge']||_0x144a3e)['slice'](0x1abd+0xa9c+-0x2559,0x1a7*-0x9+-0x18a*0x5+-0x1709*-0x1),undefined;else try{return _0x5097fc[_0x2df155(0x4e5)](_0x240ef8['getIt'+'em'](_0x4560f4),'1');}catch(_0x6eeb2c){return![];}}}function _0xa222b6(_0x43ec08,_0x418a17,_0xde1079){var _0x43ba0b=_0x19bc25,_0x32932e={'UngSO':function(_0x2ab01d,_0xc11cb5){return _0x2ab01d+_0xc11cb5;},'xbsrJ':function(_0x3a50b2,_0x5c22d8){return _0x3a50b2+_0x5c22d8;},'OOgOM':_0x43ba0b(0xbe2)+'n:\x20','eVFch':'No\x20re'+_0x43ba0b(0xc95)+_0x43ba0b(0x2e7)+'\x20so\x20e'+_0x43ba0b(0x53f)+_0x43ba0b(0xca6)+'t\x20was'+_0x43ba0b(0x936)+_0x43ba0b(0x94e)+'y\x20typ'+'e.'};if(_0x226e33['pRJsM'](_0x226e33[_0x43ba0b(0x9c7)],_0x226e33[_0x43ba0b(0x3a4)])){var _0x36c9fc=_0x226e33['AwrhD']['split']('|'),_0x57e16b=-0x6e7+-0x621+0x8b*0x18;while(!![]){switch(_0x36c9fc[_0x57e16b++]){case'0':var _0xe31b74=_0x4d22b3[_0x522e32[_0x8935aa]];continue;case'1':_0x51c9db[_0x43ba0b(0xac9)]=_0xe31b74[_0x43ba0b(0xac9)];continue;case'2':_0x51c9db[_0x43ba0b(0xe18)+'al']=!!_0x53f775&&_0x51c9db[_0x43ba0b(0xc81)][_0x43ba0b(0x72f)]===_0x226e33['nIBrJ']('0x',_0x567376[_0x43ba0b(0x488)+_0x43ba0b(0x35f)](-0x71f*-0x1+0x7f*-0x49+0x1d28));continue;case'3':_0x51c9db['first'+'SeenM'+'s']=_0x226e33[_0x43ba0b(0xb30)](_0xe31b74['first'+'Seen'],_0x4791bd);continue;case'4':var _0x51c9db=_0xdc473('Photo'+'nNetw'+'orkSy'+'nc',_0xe31b74[_0x43ba0b(0x5cd)]);continue;case'5':if(_0x51c9db[_0x43ba0b(0xc81)]['healt'+'h']){var _0x19c0f4=_0x226e33[_0x43ba0b(0x28c)](_0xfe9394,_0x51c9db['refs']['healt'+'h'],-0x1c8d+0x3b*0x5+-0x1*-0x1b76);_0x51c9db[_0x43ba0b(0x71b)+'h']=_0x226e33[_0x43ba0b(0xc3c)](_0x3bc3cd,_0x19c0f4,_0x43ba0b(0x3c6)+'hScri'+'pt',_0x43ba0b(0x2c3));}continue;case'6':_0x5e5f2c[_0x43ba0b(0xde0)+'rs'][_0x43ba0b(0x822)](_0x51c9db);continue;}break;}}else{var _0x5bde7e=_0x226e33[_0x43ba0b(0xb2c)](_0x454344);if(!_0x5bde7e||_0x43ec08<0x47c+0x49d*0x6+-0x202a||_0x43ec08+(-0x14a1*-0x1+-0x754+0xd49*-0x1)>_0x5bde7e[_0x43ba0b(0x7fb)+'ength'])return![];try{if(_0x226e33['nHJms'](_0x226e33[_0x43ba0b(0x9fe)],_0x43ba0b(0xdc8))){var _0x26bcdb=_0x226e33[_0x43ba0b(0xde6)][_0x43ba0b(0xa6a)]('|'),_0xfceff9=-0xb6d+0x13*-0x16f+0x26aa;while(!![]){switch(_0x26bcdb[_0xfceff9++]){case'0':_0x506f1d['remov'+'e']();continue;case'1':_0x4308d7[_0x43ba0b(0x649)][_0x43ba0b(0x55e)+'dChil'+'d'](_0x506f1d);continue;case'2':var _0x506f1d=_0x32d347['creat'+_0x43ba0b(0xaaa)+_0x43ba0b(0xc6a)](_0x226e33['ZwDTM']);continue;case'3':try{_0x222afc[_0x43ba0b(0xde7)+'omman'+'d'](_0x226e33['TKgGf']),_0x104bd2();}catch(_0x7864d3){}continue;case'4':_0x506f1d[_0x43ba0b(0x6ff)]=_0x4224e1;continue;case'5':if(!_0x4efc7c[_0x43ba0b(0x649)])return;continue;case'6':_0x506f1d[_0x43ba0b(0x523)+'t']();continue;}break;}}else{switch(_0x418a17){case'u8':case'i8':_0x5bde7e[_0x43ba0b(0x216)+_0x43ba0b(0x34b)](_0x43ec08,_0xde1079&-0x5*0x359+-0x308+0x14c4);break;case _0x226e33[_0x43ba0b(0x6da)]:case _0x43ba0b(0x887):_0x5bde7e['setIn'+_0x43ba0b(0x4d5)](_0x43ec08,_0xde1079|0x943*0x2+0x2*-0xff7+-0x11e*-0xc,!![]);break;case _0x226e33[_0x43ba0b(0x6ea)]:case _0x43ba0b(0xe61):_0x5bde7e[_0x43ba0b(0xc9c)+_0x43ba0b(0xc31)](_0x43ec08,_0xde1079|-0xc*0x114+0x1*-0x247d+-0x316d*-0x1,!![]);break;case _0x226e33['Ndlkh']:_0x5bde7e[_0x43ba0b(0xdd7)+_0x43ba0b(0xb8b)](_0x43ec08,_0xde1079,!![]);break;default:_0x5bde7e[_0x43ba0b(0xc9c)+_0x43ba0b(0xc31)](_0x43ec08,_0xde1079|0x1ec8+0x1367*0x1+-0x322f,!![]);}return!![];}}catch(_0xd547c0){if(_0x226e33[_0x43ba0b(0xa3c)](_0x43ba0b(0x94a),_0x226e33['iXuYb']))return![];else _0x3ffbac['warni'+_0x43ba0b(0xb68)][_0x43ba0b(0x822)](_0x32932e[_0x43ba0b(0x7cd)](_0x32932e['xbsrJ']('captu'+_0x43ba0b(0xa74),_0x1fc016[_0x43ba0b(0x68a)](_0x5ab4a2['insta'+_0x43ba0b(0xae9)])[_0x43ba0b(0xe2a)+'h'])+(_0x43ba0b(0x4dd)+'ct(s)'+'\x20but\x20'+_0x43ba0b(0x507)+_0x43ba0b(0x306)+'lds.\x20'),_0x47f2a6['lastE'+_0x43ba0b(0x2e6)]?_0x32932e[_0x43ba0b(0x7cd)](_0x32932e[_0x43ba0b(0xaf7)],_0x3e31c5['lastE'+_0x43ba0b(0x2e6)]):_0x32932e[_0x43ba0b(0x57f)]));}}}var _0x200a10={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x19bc25(0x8fd)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x19bc25(0x8fd)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x2237cf(_0x381f61){var _0x585c41=_0x19bc25,_0x4a4069='';for(var _0x2a6b77=-0x1*0xa01+0x81f+0x1e2;_0x2a6b77<_0x381f61[_0x585c41(0xe2a)+'h'];_0x2a6b77++){var _0xff0e88=_0x381f61[_0x2a6b77]['toStr'+_0x585c41(0x35f)](-0x3*-0xa89+-0x1126+0x14f*-0xb);_0x4a4069+=(_0xff0e88[_0x585c41(0xe2a)+'h']<-0x2641+0x1226+0x141d?'0':'')+_0xff0e88;}return _0x4a4069;}function _0x39ff26(_0x1365fe,_0x36d892,_0x49a679){var _0x560035=_0x19bc25,_0x13b4e4={'LGoaY':function(_0x4f7565,_0x51c4ad,_0x5a9fde){return _0x4f7565(_0x51c4ad,_0x5a9fde);},'EGqaD':_0x226e33[_0x560035(0xd33)]},_0x3f3a3a=_0x454344();if(!_0x3f3a3a){if(_0x226e33[_0x560035(0x9e8)]('UBCQw','SBXBU')){var _0x320880=_0xdf2480[_0x560035(0x9e0)+_0x560035(0x802)+'e']();if(_0x320880)return _0x1f9f39['sourc'+'e']='plugi'+_0x560035(0x921)+_0x560035(0x9fb)+_0x560035(0x7cc)+_0x560035(0x219)+_0x560035(0x522),_0x320880;}else return _0x2b9e94[_0x560035(0x5fc)+'d']++,_0x2b9e94[_0x560035(0x5f7)+_0x560035(0x2e6)]=_0x2b9e94['lastE'+_0x560035(0x2e6)]||_0x226e33['UbLHj'],null;}if(_0x226e33['ltKxU'](_0x36d892,0x20b*-0x12+0x1853*-0x1+0x3d19)||_0x36d892+_0x49a679>_0x3f3a3a[_0x560035(0x7fb)+'ength']){if(_0x226e33['MzLoJ']!==_0x560035(0x5ca))return _0x2b9e94[_0x560035(0x5fc)+'d']++,_0x2b9e94['lastE'+'rror']=_0x2b9e94[_0x560035(0x5f7)+_0x560035(0x2e6)]||_0x226e33[_0x560035(0xe72)](_0x560035(0x30e)+_0x560035(0x4c0),(_0x1365fe+_0x36d892)['toStr'+_0x560035(0x35f)](0x34*-0x1b+0xb72*0x1+0x5*-0x12e))+_0x226e33[_0x560035(0xae8)]+_0x3f3a3a['byteL'+'ength'][_0x560035(0x488)+_0x560035(0x35f)](0x5*-0x29b+-0x116+0xe2d),null;else{if(_0x226e33['JoWXH'](_0x320508))return null;var _0x5b6819=_0xa42893['getEl'+_0x560035(0x913)+'ById'](_0x560035(0xce2)+'a-sw-'+'v2');if(_0x5b6819)return _0x5b6819;if(!_0x1221ee[_0x560035(0x649)]||!_0x53e6b3['body'][_0x560035(0x55e)+_0x560035(0xd13)+'d'])return null;try{var _0x1b3426=_0x226e33[_0x560035(0xa87)]['split']('|'),_0x524a66=0x1e11*0x1+0x10*-0x6c+-0x1751;while(!![]){switch(_0x1b3426[_0x524a66++]){case'0':if(!_0x28ade8[_0x560035(0x627)+'ement'+_0x560035(0x42e)](_0x226e33[_0x560035(0x5cc)])){var _0x15f351=_0x3049e8['creat'+_0x560035(0xaaa)+_0x560035(0xc6a)](_0x226e33['QpzGT']);_0x15f351['id']=_0x560035(0xce2)+_0x560035(0x72b)+_0x560035(0x77e)+'s',_0x15f351['textC'+'onten'+'t']=_0x560035(0xdef)+_0x560035(0x880)+_0x560035(0xea6)+'ll:in'+'itial'+'}',(_0x281f02[_0x560035(0x482)]||_0x4a03ac['docum'+'entEl'+_0x560035(0x913)])[_0x560035(0x55e)+_0x560035(0xd13)+'d'](_0x15f351);}continue;case'1':_0x5b6819=_0x41f727['creat'+'eElem'+'ent'](_0x226e33[_0x560035(0xe4c)]);continue;case'2':_0x5b6819['id']=_0x560035(0xce2)+_0x560035(0x72b)+'v2';continue;case'3':return _0x5b6819;case'4':_0x52f6b0['body'][_0x560035(0x55e)+_0x560035(0xd13)+'d'](_0x5b6819);continue;}break;}}catch(_0x4c7e89){return null;}}}try{if(_0x226e33['MLJKh'](_0x560035(0x4e3),_0x560035(0x295))){var _0x368ece=new Uint8Array(_0x49a679);for(var _0x4e8af3=-0x6d9*-0x3+0x1ec6+-0x97*0x57;_0x4e8af3<_0x49a679;_0x4e8af3++)_0x368ece[_0x4e8af3]=_0x3f3a3a['getUi'+_0x560035(0x34b)](_0x1365fe+_0x36d892+_0x4e8af3);return _0x2b9e94['ok']++,_0x368ece;}else{var _0x4c6111=_0x13b4e4[_0x560035(0xb60)](_0x4a916d,_0x560035(0x9be),'sk-ca'+'rd'+(_0x10de01?'\x20on':'')),_0x52d547=_0x13b4e4['LGoaY'](_0x50fa80,_0x560035(0x9be),'sk-ca'+'rd-he'+'ad'),_0x596d9f=_0x2284c8(_0x560035(0x9be),_0x13b4e4['EGqaD'],'<stro'+'ng>'+_0xf45e5d+(_0x560035(0xa5a)+_0x560035(0x6e7)));_0x52d547[_0x560035(0x55e)+'dChil'+'d'](_0x596d9f);var _0x6a3cfd=_0x595d53(_0x560035(0x9be),'sk-mb'+'ody');return _0x4c6111['appen'+_0x560035(0xd13)+'d'](_0x52d547),_0x4c6111[_0x560035(0x55e)+_0x560035(0xd13)+'d'](_0x6a3cfd),_0x4c6111[_0x560035(0x649)]=_0x6a3cfd,_0x4c6111[_0x560035(0x482)]=_0x596d9f,_0x4c6111;}}catch(_0x230757){return _0x2b9e94['faile'+'d']++,_0x2b9e94['lastE'+'rror']=_0x2b9e94['lastE'+_0x560035(0x2e6)]||String(_0x230757&&_0x230757['messa'+'ge']||_0x230757)['slice'](0x2*-0xefd+0xe*-0x211+0x3ae8,-0xfcf+-0x8a4+0x18eb),null;}}function _0x446733(_0xeb7d4f,_0x4461e5,_0x47f788){var _0x234637=_0x19bc25;if(_0x226e33[_0x234637(0x6fa)]!=='DHlLA'){var _0x127297=_0x52150a['inner'+_0x234637(0x6e3)+'t']||-0x652*0x5+-0x4f4*0x7+-0x1*-0x4566;if(_0x127297<-0x67+0x47*0x17+-0x38e)_0x34189c(![]);}else{var _0x41196a=_0x226e33['TgDRq'][_0x234637(0xa6a)]('|'),_0x4d04ff=0x67+0xb1*-0x7+-0x1*-0x470;while(!![]){switch(_0x41196a[_0x4d04ff++]){case'0':return{'keyAtOffset0':_0x4d9af2,'hidden':_0xe1d4a1,'inited':_0x5dca3a,'fake':_0x84bd74,'act':_0x3ad76,'hex':_0x2237cf(_0x26a7b6),'alt':_0x47f788==='obfI'?_0xe1d4a1^_0x226e33[_0x234637(0x774)](_0x84bd74,-0x1*0x253a+0x1d09+-0x2bb*-0x3):null};case'1':var _0x84bd74=_0x47f788===_0x226e33[_0x234637(0xb1c)]?_0x32e27a[_0x234637(0x4d7)+'oat32'](_0x44ed01[_0x234637(0x273)],!![]):_0x226e33[_0x234637(0x44e)](_0x47f788,_0x226e33['XRhCx'])?_0x32e27a['getIn'+_0x234637(0xc31)](_0x44ed01['fake'],!![]):_0x32e27a[_0x234637(0x341)+'nt8'](_0x44ed01[_0x234637(0x273)]);continue;case'2':var _0xe1d4a1=_0x32e27a['getIn'+_0x234637(0xc31)](_0x44ed01[_0x234637(0xd20)+'n'],!![]);continue;case'3':var _0x26a7b6=_0x39ff26(_0xeb7d4f,_0x4461e5,_0x44ed01['size']);continue;case'4':var _0x4d9af2=_0x32e27a['getIn'+'t32'](_0x44ed01['key'],!![]);continue;case'5':var _0x3ad76=_0x226e33[_0x234637(0xd17)](_0x32e27a[_0x234637(0x341)+'nt8'](_0x44ed01[_0x234637(0xe75)+'e']),0x10e6+0x1*0x49d+-0x1582);continue;case'6':var _0x5dca3a=_0x32e27a['getUi'+'nt8'](_0x44ed01['inite'+'d'])&0x84c+-0x180d+-0x2*-0x7e1;continue;case'7':var _0x32e27a=new DataView(_0x26a7b6[_0x234637(0x67d)+'r'],_0x26a7b6['byteO'+'ffset'],_0x26a7b6[_0x234637(0x7fb)+'ength']);continue;case'8':var _0x44ed01=_0x200a10[_0x47f788];continue;case'9':if(!_0x26a7b6)return null;continue;}break;}}}function _0x1cc9c8(_0x4bbc8c,_0x5f4d9b,_0x5d9aa3){var _0x49b3d4=_0x19bc25;if('mHxWq'===_0x49b3d4(0xca7))_0x361dbf=_0x226e33[_0x49b3d4(0xa1b)](_0x276f08);else{if(_0x4bbc8c==='obfF')return _0x2d09bf(_0x5f4d9b^_0x5d9aa3);if(_0x226e33['MMbEA'](_0x4bbc8c,_0x226e33['XRhCx']))return _0x5f4d9b^_0x5d9aa3|0x1ec+-0x1782+0x1596;return _0x226e33['WQjrq']((_0x5f4d9b^_0x5d9aa3)&0x6cd*-0x3+0x199*-0x7+0x2095,-0x14d1+0x1d1e+-0x84d)?0x0+0x1bdb+0x1bda*-0x1:0x2da*0x5+-0x1d8*0x13+-0x14c6*-0x1;}}function _0x3fbec4(_0xf982e0,_0x278762,_0x2a1d5d){var _0xe8ac71=_0x19bc25,_0x2ee936=_0x200a10[_0x2a1d5d];if(!_0x2ee936)return null;var _0x2f853b=_0x3fa609(_0xf982e0+_0x278762+_0x2ee936['key'],'u8'),_0x83f8bf=_0x226e33[_0xe8ac71(0x28c)](_0x3fa609,_0xf982e0+_0x278762+_0x2ee936['hidde'+'n'],_0x226e33[_0xe8ac71(0x6ea)]),_0x45dcf2=_0x3fa609(_0xf982e0+_0x278762+_0x2ee936['inite'+'d'],'u8'),_0x7af630=_0x3fa609(_0x226e33[_0xe8ac71(0xc49)](_0xf982e0+_0x278762,_0x2ee936['fake']),_0x2a1d5d===_0x226e33['AxTcJ']?'f32':_0x2a1d5d===_0x226e33['XRhCx']?_0xe8ac71(0x8fd):'u8'),_0x2d9cec=_0x3fa609(_0xf982e0+_0x278762+_0x2ee936[_0xe8ac71(0xe75)+'e'],'u8');if(_0x2f853b===undefined||_0x83f8bf===undefined||_0x226e33['bMlzb'](_0x7af630,undefined)||_0x2d9cec===undefined)return null;_0x2f853b&=-0xed8+0x25a*0x2+0xb23,_0x83f8bf|=-0x1703+-0x7a*0x1+-0x1*-0x177d,_0x45dcf2=_0x226e33['HEOVc'](_0x45dcf2,0x71*0x2d+-0x13db+0x1*-0x2)&0x1*0x16bd+-0x265a+0xf9e,_0x2d9cec&=-0x12a7+0x2cc+0xfdc;var _0x4f69bd;if(_0x226e33[_0xe8ac71(0xbd4)](_0x2a1d5d,_0x226e33[_0xe8ac71(0xb1c)]))_0x4f69bd=_0x226e33[_0xe8ac71(0x96a)](_0x2d09bf,_0x226e33['zRPuv'](_0x83f8bf,_0x2f853b));else{if(_0x226e33[_0xe8ac71(0xcb6)](_0x2a1d5d,'obfI'))_0x4f69bd=_0x83f8bf^_0x2f853b|-0x3db*0x1+0xe6e+0x1*-0xa93;else _0x4f69bd=_0x226e33[_0xe8ac71(0x9ef)](_0x226e33[_0xe8ac71(0xd17)](_0x226e33['zRPuv'](_0x83f8bf,_0x2f853b),0xc*0x232+-0x322*-0x4+-0x25e1),0x186e+0x4b+-0x1*0x18b9)?-0x1690+0x238*0xe+-0x87f:0xfc4+0x2*-0xcca+-0x8*-0x13a;}return{'real':_0x4f69bd,'fake':_0x7af630,'act':_0x2d9cec,'init':_0x45dcf2,'key':_0x2f853b,'hidden':_0x83f8bf};}function _0x391804(_0x21a3fe,_0x27588,_0x4832ee,_0x3480d0){var _0x55e110=_0x19bc25,_0x1115e7=_0x200a10[_0x4832ee],_0x212dcb=_0x39ff26(_0x21a3fe,_0x27588,_0x1115e7['size']);if(!_0x212dcb)return![];var _0xa2cc3d=new DataView(_0x212dcb['buffe'+'r'],_0x212dcb[_0x55e110(0xe3d)+_0x55e110(0x25e)],_0x212dcb[_0x55e110(0x7fb)+'ength']),_0x2a7962=_0x226e33['rKoDA'](_0x1115e7[_0x55e110(0x9da)+'pe'],'u8')?_0xa2cc3d[_0x55e110(0x341)+_0x55e110(0x34b)](_0x1115e7['key']):_0xa2cc3d['getIn'+'t32'](_0x1115e7[_0x55e110(0x7d1)],!![]),_0x4ead26;if(_0x4832ee===_0x226e33[_0x55e110(0xb1c)])_0x4ead26=_0x40e406(_0x3480d0);else{if(_0x226e33['DVFFL'](_0x4832ee,_0x226e33[_0x55e110(0x5bd)]))_0x4ead26=_0x226e33['hLqpR'](_0x3480d0,0xddf*0x2+-0x241a*-0x1+0xff6*-0x4);else _0x4ead26=(_0x3480d0?0x4f2+-0x19f5+0x1*0x1504:0x210*-0x7+0x2b*0x8f+-0x995)&0x104e+0x123*0x11+-0x22a2;}return _0xa222b6(_0x226e33[_0x55e110(0xbd1)](_0x21a3fe,_0x27588)+_0x1115e7[_0x55e110(0xd20)+'n'],_0x226e33[_0x55e110(0x6ea)],_0x4ead26^_0x2a7962)&&_0x226e33[_0x55e110(0xc3c)](_0xa222b6,_0x21a3fe+_0x27588+_0x1115e7[_0x55e110(0x273)],_0x226e33[_0x55e110(0x359)](_0x4832ee,_0x226e33[_0x55e110(0xb1c)])?'f32':_0x4832ee===_0x226e33[_0x55e110(0x5bd)]?_0x55e110(0x8fd):'u8',_0x226e33['jZSxL'](_0x4832ee,_0x226e33[_0x55e110(0xb1c)])?_0x3480d0:_0x226e33['bMlzb'](_0x4832ee,_0x226e33['XRhCx'])?_0x3480d0|0x1*-0x1dda+-0x5e7+0x23c1:_0x3480d0?-0xac8+-0x68b+0x1154:0x3*0xa3d+-0x1fa4+0xed)&&_0xa222b6(_0x226e33['nIBrJ'](_0x21a3fe,_0x27588)+_0x1115e7[_0x55e110(0xe75)+'e'],'u8',-0xaa+0x21e5+-0x1*0x213b);}var _0x46693f={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x34bdfd=-0x8e8*-0x1+0x39f*0x7+-0x2241+0.03,_0x57fc69=-0x1*0x70e+-0x211c+0x282c*0x1,_0x1c9864={},_0x397202=-0xe67+0x22+0x119*0xd,_0x5e73e2=[],_0x40d87b=[];function _0x382858(_0x293581){var _0xebd2ea=_0x19bc25,_0x1ee3d9={'zVAzp':_0xebd2ea(0xe2e)+'otrol'+_0xebd2ea(0x4bb),'gExgc':function(_0x3ca142,_0x3f7cb9){return _0x226e33['vsjTk'](_0x3ca142,_0x3f7cb9);},'JvLdI':function(_0x53e639,_0x119ce1,_0x52d540,_0x286b88){return _0x53e639(_0x119ce1,_0x52d540,_0x286b88);},'NBtRc':function(_0x59d857,_0xf4da9,_0xd355b){var _0x63b2bb=_0xebd2ea;return _0x226e33[_0x63b2bb(0x76e)](_0x59d857,_0xf4da9,_0xd355b);},'iXmLT':_0xebd2ea(0x2c3)},_0x499ca4=_0x578547[_0xebd2ea(0x8b9)+'ntrol'+'ler']||[],_0x4f89e9=[];_0x40d87b=[],_0x5e73e2=[];for(var _0x29c77e=0x2166+0x7bb*-0x2+-0x11f0;_0x29c77e<_0x499ca4['lengt'+'h'];_0x29c77e++){if(_0x226e33[_0xebd2ea(0x3d1)]!=='PBNyR'){var _0x1a1742=_0x499ca4[_0x29c77e][-0x1860+0xfa*-0x5+-0x7*-0x42e];if(_0x499ca4[_0x29c77e][-0x846+0x1148*-0x1+0x198f]!=='obfF')continue;var _0xbc7243=_0x226e33[_0xebd2ea(0xc3c)](_0x446733,_0x293581,_0x1a1742,_0xebd2ea(0x8b0));if(!_0xbc7243||_0x226e33['pIFTa'](_0xbc7243[_0xebd2ea(0x85e)+'d'],0x14af+-0x57+0x7f*-0x29))continue;var _0x28bf1e=_0x226e33[_0xebd2ea(0xc3c)](_0x1cc9c8,_0xebd2ea(0x8b0),_0xbc7243['hidde'+'n'],_0xbc7243[_0xebd2ea(0x241)+_0xebd2ea(0x431)+'t0']);if(_0x226e33['gqFwx'](typeof _0x28bf1e,_0x226e33['DZkuw'])||!isFinite(_0x28bf1e))continue;var _0xa27fd7=_0x226e33['YGall'](_0x226e33[_0xebd2ea(0x56f)](_0x293581,':'),_0x1a1742),_0x44eb28=_0x1c9864[_0xa27fd7];if(!_0x44eb28||_0x28bf1e!==_0x44eb28[_0xebd2ea(0xdff)+_0xebd2ea(0xe12)+'n'])_0x44eb28=_0x1c9864[_0xa27fd7]={'base':_0x28bf1e,'lastWritten':null};var _0x72f54=_0x44eb28[_0xebd2ea(0x362)],_0x3e9abb=Math[_0xebd2ea(0x5f5)](_0x72f54);if(_0x3e9abb<-0x1*0xc32+0x230d+-0x1*0x16db+0.0001||_0x226e33['NkMnC'](_0x3e9abb,-0x1c62a+0x1cb09+0x9d*0x275)){_0x40d87b[_0xebd2ea(0x822)]({'o':_0x1a1742,'v':_0x28bf1e,'why':_0x226e33[_0xebd2ea(0x6cf)]});continue;}_0x4f89e9[_0xebd2ea(0x822)]({'o':_0x1a1742,'v':_0x28bf1e,'a':_0x3e9abb,'base':_0x72f54,'key':_0xa27fd7,'st':_0x44eb28});}else{var _0x219dca=_0x1cf8ef(_0x1ee3d9['zVAzp'],_0x2203b1[_0x1b6f97[_0x2f441e]][_0xebd2ea(0x5cd)]);_0x219dca[_0xebd2ea(0xac9)]=_0x5f2f32[_0x5264b3[_0x651979]][_0xebd2ea(0xac9)],_0x219dca[_0xebd2ea(0xb91)+'SeenM'+'s']=_0x1ee3d9[_0xebd2ea(0xbff)](_0x5827a6[_0x28c3d6[_0x5976de]]['first'+'Seen'],_0x181051);if(_0x219dca[_0xebd2ea(0xc81)]['healt'+'h'])_0x219dca[_0xebd2ea(0x71b)+'h']=_0x1ee3d9[_0xebd2ea(0xce8)](_0x494a98,_0x1ee3d9['NBtRc'](_0x5b0048,_0x219dca[_0xebd2ea(0xc81)]['healt'+'h'],0x1a58+0xe+-0x1a56),_0xebd2ea(0x3c6)+_0xebd2ea(0xa48)+'pt',_0x1ee3d9['iXmLT']);_0x101c97[_0xebd2ea(0x4fb)][_0xebd2ea(0x822)](_0x219dca);}}var _0x1381db=[];for(var _0x22bace=-0x1a9c+0x293*0x1+0x1809;_0x22bace<_0x4f89e9[_0xebd2ea(0xe2a)+'h'];_0x22bace++){var _0x5158f7=_0x4f89e9[_0x22bace]['a'],_0xb586e6=null;for(var _0x2a3fae=-0x112c*-0x1+-0x219*-0xb+0x283f*-0x1;_0x2a3fae<_0x1381db[_0xebd2ea(0xe2a)+'h'];_0x2a3fae++){var _0x2d26ed=_0x226e33[_0xebd2ea(0x5d7)](_0x1381db[_0x2a3fae][_0xebd2ea(0x38a)],_0x5158f7);if(_0x2d26ed>_0x226e33['vsjTk'](-0x935*-0x1+0x164e+-0x1f82,_0x34bdfd)&&_0x2d26ed<_0x226e33['rLDIR'](-0x45*0x18+-0x9a9+0xe*0x127,_0x34bdfd)){_0xb586e6=_0x1381db[_0x2a3fae];break;}}!_0xb586e6&&(_0x226e33[_0xebd2ea(0xa39)](_0x226e33[_0xebd2ea(0x229)],_0x226e33['MQkZB'])?(_0x377bb1(!_0x226e33[_0xebd2ea(0xd6f)](_0x1b037e)),_0x144773()):(_0xb586e6={'mean':_0x5158f7,'members':[]},_0x1381db['push'](_0xb586e6)));_0xb586e6['membe'+'rs'][_0xebd2ea(0x822)](_0x4f89e9[_0x22bace]),_0xb586e6['mean']=-0xa*0x29c+0xd76+-0x21*-0x62;for(var _0x41d296=0x1741+0x256f+0x2*-0x1e58;_0x226e33['YDzAx'](_0x41d296,_0xb586e6['membe'+'rs']['lengt'+'h']);_0x41d296++)_0xb586e6['mean']+=_0xb586e6[_0xebd2ea(0x1df)+'rs'][_0x41d296]['a'];_0xb586e6[_0xebd2ea(0x38a)]/=_0xb586e6['membe'+'rs'][_0xebd2ea(0xe2a)+'h'];}var _0x4b31c4=[];for(var _0x430735=-0x1*-0x12dd+0x1641+0x26*-0x115;_0x430735<_0x1381db['lengt'+'h'];_0x430735++){if(_0xebd2ea(0xd82)!==_0x226e33[_0xebd2ea(0x7ee)])_0x43b6e7(_0x2c47ec,_0x1c70e3[_0xebd2ea(0x554)]);else{if(_0x1381db[_0x430735][_0xebd2ea(0x1df)+'rs'][_0xebd2ea(0xe2a)+'h']>=_0x57fc69)_0x4b31c4['push'](_0x1381db[_0x430735]);}}if(!_0x4b31c4['lengt'+'h']){_0x40d87b[_0xebd2ea(0x822)]({'o':-(-0xaf*-0x9+0x24f8+-0x2b1e),'v':0x0,'why':_0x226e33[_0xebd2ea(0x3d0)](_0xebd2ea(0x35c)+_0xebd2ea(0xaf6)+'f\x20'+_0x57fc69,'\x20Obsc'+_0xebd2ea(0xc47)+'loats'+'\x20agre'+'ed')});return;}var _0x38b64e=_0x4b31c4[0xf2*0xd+-0x1d91+0x1147*0x1][_0xebd2ea(0x38a)];for(var _0x291b64=-0x1664*-0x1+-0x2708+0x10a4;_0x226e33[_0xebd2ea(0xb13)](_0x291b64,_0x4b31c4[_0xebd2ea(0xe2a)+'h']);_0x291b64++)if(_0x226e33[_0xebd2ea(0xbf0)](_0x4b31c4[_0x291b64][_0xebd2ea(0x38a)],_0x38b64e))_0x38b64e=_0x4b31c4[_0x291b64]['mean'];var _0x673c29=_0x38b64e*(0x1f72+-0x8*-0x3ce+-0x3de2+0.5);for(var _0x237183=-0x1*-0x1500+0x1f59+0x3*-0x1173;_0x226e33[_0xebd2ea(0x290)](_0x237183,_0x1381db[_0xebd2ea(0xe2a)+'h']);_0x237183++){if(_0x1381db[_0x237183]['membe'+'rs']['lengt'+'h']>=_0x57fc69)continue;for(var _0x325f55=0x1*-0x33f+-0x1563+-0xc51*-0x2;_0x226e33['OZuiK'](_0x325f55,_0x1381db[_0x237183][_0xebd2ea(0x1df)+'rs'][_0xebd2ea(0xe2a)+'h']);_0x325f55++){_0x40d87b['push']({'o':_0x1381db[_0x237183][_0xebd2ea(0x1df)+'rs'][_0x325f55]['o'],'v':_0x1381db[_0x237183][_0xebd2ea(0x1df)+'rs'][_0x325f55]['v'],'why':_0x226e33['SxdnR']});}}for(var _0x14a341=0xfde+0x1*0x1364+-0x2342;_0x226e33['hmtKK'](_0x14a341,_0x4b31c4['lengt'+'h']);_0x14a341++){var _0x27dcca=_0x4b31c4[_0x14a341]['membe'+'rs'];for(var _0x202a43=-0x17b8+-0x1529*0x1+0x2ce1;_0x202a43<_0x27dcca[_0xebd2ea(0xe2a)+'h'];_0x202a43++){var _0x6f0dc9=_0x27dcca[_0x202a43];if(_0x6f0dc9['a']<_0x673c29){_0x40d87b[_0xebd2ea(0x822)]({'o':_0x6f0dc9['o'],'v':_0x6f0dc9['v'],'why':_0x226e33[_0xebd2ea(0x339)](_0x226e33['dSKzP'],_0x673c29[_0xebd2ea(0xa0d)+'ed'](0xf80+0x23d4+-0x3352*0x1))});continue;}var _0x124984=_0x6f0dc9['base']*_0x46693f['facto'+'r'];_0x391804(_0x293581,_0x6f0dc9['o'],_0x226e33['AxTcJ'],_0x124984)&&(_0x6f0dc9['st'][_0xebd2ea(0xdff)+_0xebd2ea(0xe12)+'n']=Math['froun'+'d'](_0x124984),_0x397202++,_0x5e73e2[_0xebd2ea(0x822)]('0x'+_0x6f0dc9['o'][_0xebd2ea(0x488)+'ing'](-0xf*0x54+-0x1d7*0x9+0x158b)));}}}var _0x578547={'FPScontroller':[[0x14ad+-0x231b+0x46*0x35,'obfF'],[0x35f*-0x5+-0x3ae+0x14b1,_0x226e33[_0x19bc25(0xb1c)]],[-0x10*-0x1d2+-0x1331+-0x25*0x43,_0x226e33[_0x19bc25(0xb1c)]],[-0x25cf*-0x1+-0x1046+-0x7*0x307,'obfF'],[-0x1a*-0xa9+-0x12e1+0x227,_0x226e33['AxTcJ']],[-0x1196+-0xf7+0x1315,_0x19bc25(0x8b0)],[0xad*0x9+-0x4d*0x29+0x6e0,'obfF'],[0xdd2+-0x1*0x1ffd+0x1*0x12e3,_0x226e33[_0x19bc25(0xda9)]],[-0xe3b*-0x2+0x2518+0x1*-0x40ca,_0x226e33['AxTcJ']],[0x27d*-0xd+-0x13*0x158+0x3abd,_0x19bc25(0x8fd)],[-0x57c+-0x270d+0x2d69,'v3'],[-0x1120+-0x1*-0xf7c+0x290,'u8'],[-0x171e+0x1da8+0x1de*-0x3,_0x19bc25(0x8b0)],[-0x1e7b+0x4c9+0x1aba,_0x226e33['ibsVA']],[-0x8b*0x15+0x4*0x94d+-0x1*0x18c1,'u8'],[0x1*-0x2637+0x23c2+0x35*0x11,'i32'],[-0x1bf2+-0x2623+0x61b*0xb,'u8'],[-0xe8*0x28+-0x23de*0x1+0x4933,'u8'],[-0x7c3+0x200b+0xb96*-0x2,_0x19bc25(0x8b0)],[0x1*0x1543+-0x2e3+-0x2*0x896,'obfF'],[-0x17a7+0x2fc*-0xa+0x36cb,'f32'],[0xe5d+0xadf+-0x17ec,_0x19bc25(0x484)],[0x21da+-0x1*-0x579+-0x25ff,'v3'],[0xacb+-0x11b2*-0x1+-0x1b1d,'v3'],[0x2b9+-0x167*-0x7+-0xb1e,_0x19bc25(0x484)],[0x955+-0x1*0x665+0x2*-0xc0,_0x19bc25(0x484)],[-0xe*0x253+-0x43c+0x264e*0x1,'u8'],[0x999+0x22e7+-0x2af4,'f32'],[-0x2*0xa8e+0x22dd+-0xc29,'v3'],[-0x803*0x1+-0x55+0x9fc,'u8'],[-0xf6a+-0xa6b+0x13*0x173,'f32'],[0xedc+0x1c9e+-0x42d*0xa,'f32'],[0x1222+0x7a2*0x1+0x8*-0x301,'u8'],[0x1dab+-0xc*-0x188+-0x2*0x1727,'u8'],[0x347*-0x1+0x1ab*0x5+-0x350,_0x226e33['AxTcJ']],[0x1a*0x47+-0x151c+0xfbe,'f32'],[-0x1c1f+-0xb*-0xd4+0x1*0x14df,'u8'],[0x3b*-0xe+-0xdd9+0x12f3,_0x226e33['AxTcJ']],[0xc5*0x31+0x1566+-0x3923,'v3'],[-0x2f*0xae+0x1753*-0x1+-0x394d*-0x1,_0x226e33[_0x19bc25(0xda9)]],[0x17b8+0x18c3+0x13*-0x271,_0x226e33[_0x19bc25(0xa41)]],[-0x67f*0x1+0x54b+-0x35*-0x10,_0x226e33[_0x19bc25(0xa41)]],[0xafb+0xe91+-0x1740,_0x19bc25(0x484)],[-0x1*-0x1584+-0x1*-0x266+0x229*-0xa,_0x226e33['Ndlkh']],[0x18b6+0x17a2+-0x2e04,_0x226e33[_0x19bc25(0xa41)]],[0x15*0x15+0x1*-0x1d02+0x1da1,_0x226e33[_0x19bc25(0xa41)]],[-0x1e46+0x1cbb+0x14d*0x3,'u8'],[0x8*0xd3+0x169d+-0x1ad8,'u8'],[-0x220d*-0x1+0x7*-0x1d6+-0x12d5,'u8'],[0xaa6+0x1*-0x1bd9+0x1393,_0x226e33['Ndlkh']],[-0x4e8*-0x2+-0x93d+0x1d1,'u8'],[-0x1cc0+0x105f+-0xec6*-0x1,'u8'],[0x1b17+-0x1a10+0x161,_0x19bc25(0x484)],[0x2632+0x51*-0x45+-0xdf1,_0x19bc25(0x484)],[-0x1d6f+-0x12dd+0x32bc,'f32'],[0x2624+0x14*-0x190+-0x470,_0x19bc25(0x484)],[0x132e+0x2310+-0x33c6,_0x19bc25(0x484)],[0x1*0x15b2+0x3*0x1d6+-0x18b8,_0x226e33[_0x19bc25(0xa41)]],[0x14bf*0x1+0x1981+-0x50*0x8c,_0x19bc25(0x484)],[-0x2466+-0x1*0x24b6+0x4ba0,'v3'],[-0x1*-0x935+-0x1d2a*-0x1+-0x23cb,'u8'],[0x2b*0xdf+0x1361+-0x6a*0x83,'v3'],[0x14f9+0x2f*0xd1+-0x38b4,_0x19bc25(0x484)],[0x1298*-0x1+0x1a99+0x3*-0x1c7,'v3'],[-0x5*0x58f+-0x261c+0x449f,_0x19bc25(0x484)],[-0xbbd+0x25ba+-0x1741*0x1,_0x19bc25(0x484)],[-0x16d8+-0x128b+-0x1*-0x2c23,_0x19bc25(0x484)],[-0x931+-0xfe3+0x1bd8,'u8'],[0x3*0x2d+0x1*0x25ee+-0x23b0,'u8'],[0x7f7+-0xd0d+0x7de,'f32'],[-0x1*0xace+-0x1eaa+0x2c54,_0x226e33['Ndlkh']],[-0x1325+-0x33e+0x1947,'v3'],[-0xe83*-0x1+-0x250*0xf+-0x3d*-0x61,'v3'],[0xf84+-0xb1*0x31+0x1559,_0x226e33['Ndlkh']],[-0x8*0xa2+-0x188d+0x209d,_0x19bc25(0x484)],[0x18a0+-0x96b*0x1+-0xc31,_0x19bc25(0x484)],[0x3ac+0x1387*0x1+-0x142b,'f32'],[-0x24fe+0x1912+0xef8*0x1,'v3'],[-0x232d+0x2c1+0x2384,'u8'],[0xf1c*0x1+-0x23b7+-0xd*-0x1d3,'v3'],[-0x9d1*-0x1+0x236d+-0x2a16,'i32'],[-0x23ad+-0xc*-0x5c+0x15*0x1a5,_0x19bc25(0x484)],[-0x1d26+-0x702+0x2758,_0x226e33[_0x19bc25(0xa41)]],[-0x1fc4+-0x5*0x62b+0x41cf,_0x19bc25(0x484)],[-0x4*0x437+0x1375+0xa3,_0x226e33['Ndlkh']],[-0x787*-0x5+0x1400+0xd*-0x42f,'u8'],[0x600+-0x1*-0x269b+-0x295a,'u8'],[-0xe25+-0x26ad+0xb*0x51a,'u8'],[0x2*0x5b5+0xa3+-0x8c0,'u8'],[-0x1aa7+-0x1e18+0x3c0d,'u8'],[0x1684+-0x1*-0xb51+0x259*-0xd,_0x226e33[_0x19bc25(0xa41)]],[0x12d3*-0x1+-0x2637+0x3c5e,_0x226e33[_0x19bc25(0xa41)]],[0x1*0x1765+-0x2543+0x89b*0x2,'f32'],[0xfa1+-0x1bc3+0x3*0x52a,_0x19bc25(0x484)],[0x92a+-0x1b60+0x1596,_0x19bc25(0x484)],[0x1e09+-0x2518+0xa73*0x1,'u8'],[-0x188f*0x1+0x7fa+0x11*0x12d,_0x226e33['Ndlkh']],[-0xcc8*-0x1+-0x18df+0xf83,_0x226e33[_0x19bc25(0xa41)]],[-0xdcf+0x22e4+-0x11a5*0x1,'u8'],[-0x11f*0x7+0xd13+0x96*-0x3,'v3'],[-0x26f+-0x10a2+-0x1695*-0x1,'v3'],[-0x1397+0x7*0x94+0x131b,'v3'],[0x1*0x941+-0x1940+0x3*0x689,_0x19bc25(0x484)],[-0x1db*-0x7+-0x3c0+-0x3*0x1df,_0x19bc25(0x484)],[-0x139*-0x17+-0x23d0+0xb55,'f32'],[0x23c1+-0x1fb0+-0x69,'v3'],[-0x869*0x1+0xe71+-0x254,_0x19bc25(0x8fd)],[0xf33+-0x1180+-0x43*-0x17,'u8'],[0x15c7+-0x1c*0x83+0x1*-0x3b7,'i32'],[-0x1fd2+0x26e4*-0x1+0x4a76,_0x19bc25(0x484)],[-0x3f*-0x7+0xf17*0x2+-0x1c23,_0x226e33[_0x19bc25(0xa41)]],[-0x2682+0x9*-0x2f1+0x44c3,_0x226e33[_0x19bc25(0xa41)]],[-0x1*0x1196+0x5e3*0x5+-0x80d,_0x226e33['Ndlkh']],[-0x11*0xf1+0x955+0xa7c,'v3'],[0xe06+0x8*-0x337+-0x1*-0xf8e,_0x19bc25(0x8fd)],[0x2*0xa6f+-0xee3+-0x21b*0x1,'u8'],[0x1d2*-0x11+-0x2*0x3bb+0x2a49,'u8'],[0x1bb*0xd+0x9*-0x236+0x149,'u8'],[0x2069+0x83*0x3d+0x1dde*-0x2,_0x19bc25(0x484)],[0x7f*0x2d+0x9b9*-0x1+-0xe*0x9f,_0x226e33[_0x19bc25(0x6ea)]]],'HealthScript':[[0x1a56+0x149*0xe+0x5*-0x8cc,'u8'],[0x7*-0x1c6+-0x56f*0x7+0x32cf,_0x19bc25(0x8fd)],[0x5*-0x41+0x1*-0x1fab+-0x10b8*-0x2,'f32'],[-0x3*0x52a+0x77+-0x1*-0xf8b,_0x226e33['Ndlkh']],[0x2544+0xf29+0xa61*-0x5,_0x19bc25(0x484)],[-0x1520+-0x5*-0x545+0x9*-0x85,_0x226e33['Ndlkh']],[-0x3*-0xc7c+0x11d6+-0x36ba,_0x226e33[_0x19bc25(0xa41)]],[-0x4*0x8e7+-0x333+0x1*0x2763,'f32'],[-0xa21+0x5f*0x49+-0x1056,_0x226e33['ibsVA']],[0x12e2*-0x1+0x1ad2+-0x74c,_0x226e33[_0x19bc25(0x6ea)]],[-0x24a1+0xab5*-0x1+0x17ff*0x2,'u8'],[0x156e+0x9*-0x26b+-0x2*-0x7f,'u8'],[-0x5d*-0x5a+0x3*-0x6b7+-0xbe3,'u8'],[-0x6d7*0x5+0x933+0x19ab*0x1,'u8'],[-0x152b+0x59+0xac9*0x2,_0x226e33['XRhCx']],[-0x2*-0xf37+0x46a*0x5+-0x33ac*0x1,_0x226e33[_0x19bc25(0x5bd)]],[0x1c5d+-0x18ab+-0x2ca,_0x19bc25(0x2c3)],[-0x1071+-0xec2+0x202f,_0x19bc25(0x2c3)],[-0x183b+0xb*-0x26+-0x71*-0x3d,_0x226e33[_0x19bc25(0x5bd)]],[-0x14*-0x125+0xaf6+-0x20b6,'obfB'],[-0x1c39+-0x1*0xccb+0x49*0x94,_0x19bc25(0x8b0)],[-0x1*-0x1435+-0x9*0x14d+-0x16*0x54,'f32'],[0x5*0x70f+-0xe59*-0x1+0x44*-0xb6,_0x226e33[_0x19bc25(0xa41)]],[-0x7f*-0x5+-0x6*-0x473+-0x1bdd,_0x226e33['Ndlkh']],[0x1342+0x39a*-0x2+-0xaba*0x1,_0x226e33[_0x19bc25(0xa41)]],[0x26cb*0x1+-0x1094+0x119*-0x13,'f32'],[0x16f9+0x30e*0x7+-0x2afb,'v3'],[-0x23*0x36+-0x45a*-0x7+-0x15a4,_0x19bc25(0x484)],[-0x1b36+0x3*-0x74b+-0x7*-0x739,_0x226e33[_0x19bc25(0xa41)]],[-0x8a5*0x3+-0x19*0xa9+0x2bf0,'u8'],[0x1ccf+-0x2394+0x851,'u8'],[0xb47+0x133e+0x3*-0x9a7,'i32']],'PlayerConfig':[],'WeaponManager':[[-0x597+-0xe3*-0x5+0x140,_0x19bc25(0x8fd)],[0x95*0x13+-0x18*0x12a+0x10fd,'i32'],[-0x12ae+0x824*-0x2+0x1*0x2316,'u8'],[-0x2390+0xa6*0x34+-0x4*-0x7f,_0x19bc25(0x8fd)],[-0x157*0x1+0x2355+-0x219a,_0x19bc25(0x8b0)],[-0xeb9*0x2+0x1157+-0x1*-0xc97,'f32'],[0x224f+-0x1*-0x152b+0x1e*-0x1d5,_0x226e33['ibsVA']],[0x217d*0x1+-0xa*0x20c+-0x17*0x8b,'u8'],[0x7*-0x1dc+-0x4*0x304+0x4f*0x53,'u8'],[0x14*-0xc5+0x11*-0x1ca+0x2e5a,_0x19bc25(0x8fd)],[0x4f*-0x40+-0x56*0x71+0x1*0x3a46,'f32'],[0xc5c+-0xbc9*-0x1+0x1*-0x178d,_0x19bc25(0x484)],[0x490*-0x4+0x1ca0+-0x19e*0x6,_0x226e33['ibsVA']],[0x8f*-0x19+-0x138+0xfeb,'u8'],[0x40f*-0x9+0x1e2*0xe+0xb07*0x1,_0x19bc25(0x2c3)],[0x1*0xf4e+0x1a*0x56+-0x171a*0x1,_0x19bc25(0x2c3)],[0xed8+-0x2093+-0x12bf*-0x1,_0x19bc25(0x484)],[0x693*-0x1+-0x1*0x17f+0x91a,'f32'],[0x209b+-0x216b+0x1dc,_0x19bc25(0x484)],[-0x22be+0xa67+0x1*0x196f,_0x226e33[_0x19bc25(0xa41)]],[-0x22b2+0x1*0x1805+-0x39*-0x35,_0x19bc25(0x484)],[0x51*-0x2b+0x805+-0x2*-0x35f,'u8'],[-0x1*0x43+0x1*-0x1ece+-0x3*-0xabf,_0x226e33[_0x19bc25(0x5bd)]],[0x805*0x1+0x22b*0xb+-0x1e9e,_0x226e33['XRhCx']],[-0x1db*-0xd+0x158e+-0x2c59,_0x226e33[_0x19bc25(0x5bd)]],[0x495+0x1*0x8b4+-0xbe1,'obfB'],[0x1da7+0xda6+-0x3*0xdf3,'obfB'],[-0x10c0+0x1600+-0x1e0*0x2,_0x226e33[_0x19bc25(0xda9)]],[0x95*-0x42+-0x1abd+0x42b3,_0x19bc25(0xdf5)],[-0x23f3*-0x1+0x955*-0x1+-0x2*0xc7d,_0x226e33[_0x19bc25(0xda9)]],[0x59*0x36+0x22ab+-0x33c1,'obfI'],[-0x10ec+0x1*0x923+0x995,_0x19bc25(0x8fd)],[0x5*0x275+0x20b5+-0x2b2e,'u8'],[0x1e39+0x2229+0x14da*-0x3,_0x19bc25(0x8fd)],[0x1927+-0x2*-0xf6b+-0x3625,_0x19bc25(0x8fd)],[0x1957+-0x2104+0x9ad,_0x19bc25(0x8fd)],[-0x237c+0x292+-0xbaa*-0x3,'u8'],[0x25b0+-0xd3c+-0x82*0x2c,'u8'],[-0x4bc+-0x551*0x4+0x95f*0x3,'u8'],[0x237b+-0x1465+-0xa*0x14c,'u8'],[-0xba+-0x4*0x661+0x1c5d,'u8'],[0x18b*-0x12+-0x1b1f*0x1+0x3935,_0x226e33[_0x19bc25(0x6ea)]],[0x1fe8+0xd*0x259+-0x3c15,'u8']],'GG_GameManager':[[-0x660+-0x8e4+0xf68*0x1,'u8'],[-0x1d88+-0x1893+0x3647,'f32'],[0x1b48+0x1*0x455+-0x1f59,'u8'],[0x25ca+-0x1*0x1569+-0x101c,'u8'],[0xe3d+0x10*0x187+-0x2665,_0x19bc25(0x484)],[-0x9db+-0x5*0x251+-0x15bc*-0x1,_0x19bc25(0x484)],[-0x3*-0x9b1+-0x237b+0x6b8,_0x226e33[_0x19bc25(0x6ea)]],[0x412+0x3b*-0x7b+0x1*0x189b,_0x19bc25(0x8fd)],[0xc7*-0x1f+0x233*0x7+-0x3*-0x304,'u8'],[0x183d+-0x16e0+-0xe9,'u8'],[-0x1a0*-0x11+0x14*0x2f+-0x1ed4,'f32'],[0x2371+-0x1a*-0x95+-0x3217,_0x19bc25(0x484)],[-0x1*0xcee+0xbf+0x1*0xcbf,_0x19bc25(0x8fd)],[-0x343+0x1ca+0x20d,'u8'],[-0x7d*0x19+0x4ef*0x1+0x7fa,_0x226e33[_0x19bc25(0x6ea)]],[0x1*0x1a9b+0x1*-0x7ae+0x1*-0x1231,_0x226e33[_0x19bc25(0x6ea)]],[-0x865*0x1+-0x5a*0x40+0x1fa5*0x1,_0x226e33['ibsVA']],[-0xa66+0xdc4*-0x1+0x1912,'obfI'],[0x6*-0x4b3+0x154a+0x5*0x194,'obfI'],[-0x1c58*0x1+0x877+0x14f1,'obfI'],[0x3bb*0x4+0xc0+-0xe80,'u8'],[-0xdb+-0x1ef5+-0x2*-0x1080,_0x19bc25(0x8fd)],[0xaf8+0x1daa*-0x1+0x1416,'u8'],[0x255e*0x1+-0xf57+-0x1*0x1497,_0x226e33[_0x19bc25(0xa41)]],[0x97c+0x1*0x23ab+-0x19*0x1bf,'u8'],[0x1377*0x1+0x1cc6*0x1+-0x2eb5,'u8'],[0x5a1*-0x1+0x28f*0xb+-0x20*0xa7,'u8'],[0xb3*0x2+-0x7a0+-0x2*-0x3f1,_0x226e33['ibsVA']],[0x999+-0xca+-0x723,_0x19bc25(0x484)],[-0x2521+-0x2*0x117d+-0x833*-0x9,'u8'],[0x1e6+-0x4ee*-0x4+-0x13ed,'u8'],[0x2239*0x1+0x7b5*0x1+-0x2836,_0x226e33['ibsVA']],[0x3eb*0x5+-0x1d1f+0x67*0x1c,_0x226e33[_0x19bc25(0x6ea)]],[0x1f1*0x5+0x18df*-0x1+0x10ea,_0x226e33['Ndlkh']],[0x3*-0xc8d+0x1*0x23a2+0x3c9,_0x226e33['ibsVA']],[0x705+0x1ee7+-0x202*0x12,_0x226e33[_0x19bc25(0xa41)]],[0x236+0x1855+-0x7*0x389,'i32'],[-0x25*0x103+-0x1c29+0x86d*0x8,_0x19bc25(0x8fd)]],'TDM_GameManager':[[-0x1ac7+0x16e4+0x3fb*0x1,'u8'],[0x1d36*0x1+-0x5*0x33b+0x2b*-0x4d,'u8'],[-0x1d6a+-0x11e1+0x2f6c,'u8'],[0x5*0xd9+-0x4d+-0x51*0xc,_0x226e33[_0x19bc25(0xa41)]],[-0x1*0x12ef+-0x596+-0x5*-0x4f9,'u8'],[-0x1cb*-0x11+-0x1c5+-0x2*0xe2d,_0x226e33[_0x19bc25(0xa41)]],[0x1a*-0x10f+-0x44*-0x5d+0x332,_0x226e33['Ndlkh']],[-0x26bf+-0x1d7a+0x493*0xf,_0x226e33[_0x19bc25(0x6ea)]],[-0x380*-0x8+-0xab5+-0x10e3,_0x226e33[_0x19bc25(0x6ea)]],[0x222f+0x25eb+-0x72b*0xa,'u8'],[-0x18af+0x1953+-0x37,'u8'],[-0x57*-0x9+-0x3*0x94d+0x1948,_0x226e33[_0x19bc25(0xa41)]],[0x1346*0x1+-0x1*-0x21dd+-0x34af,'f32'],[-0x4*0x748+-0x6b4+0x1226*0x2,_0x226e33[_0x19bc25(0x6ea)]],[0x11*-0x1d3+0x1172+0xe1d,'u8'],[-0x1*0x252b+0x15bd*0x1+0xffe,_0x19bc25(0x2c3)],[0x8c1+-0x25f9+0x1e10,'obfI'],[0x4*0x691+0x14f8+-0x1ee*0x18,_0x226e33['XRhCx']],[-0xa99*-0x3+-0x1*0x23b7+0x4ec,'obfI'],[0x2102+-0x10a1+-0xf4d,'u8'],[0x954+0x12fd*0x1+-0x1af5*0x1,'u8'],[0xe7a*0x2+0xaa*0x31+-0x3c1e,_0x226e33[_0x19bc25(0x6ea)]],[0x12*0x161+0x465+0x5*-0x58f,'u8'],[0x4a+0xac2+0x8*-0x131,'u8'],[0x207*-0x12+0x825*0x4+0x2b9*0x2,_0x226e33[_0x19bc25(0xa41)]],[0x1*-0x122b+0x550+0xe67,_0x19bc25(0x8fd)],[0x1*-0x164+0x23*0x83+-0xef5,_0x226e33[_0x19bc25(0x6ea)]],[-0xddb+0x1*0x20d5+-0x1166,'f32'],[0x1b7+0x235c+-0x237b,_0x226e33['ibsVA']],[-0x25*-0x15+0xf60+-0x10cd,_0x19bc25(0x8fd)],[-0x257b+0x3*0xc87+0x186,'f32'],[0xb*0x5+-0x13f0+-0x1*-0x155d,_0x226e33[_0x19bc25(0xa41)]],[-0x1768+0xc57+0xcb9*0x1,_0x226e33['ibsVA']],[-0x2621*-0x1+-0x3e7*0x9+-0x1a*0xd,'u8'],[0x1*0x1e64+0x1cc4+-0x3977,'u8'],[-0x10f*0x1a+-0x812+0x2550,'f32']],'PhotonNetworkSync':[[0x7f*-0x13+0x19ff+-0x105e,'v3'],[-0x1139*-0x1+0x170b+-0x2804,'i32'],[-0x1*-0x243d+-0x203e+-0x3bb*0x1,'u8'],[-0x1c1c+-0x4e1*-0x7+-0x5c6,'u8'],[-0x760+0x1e47+-0x169f,'v3'],[-0x20e3+-0x1*-0xcaf+0x1488,'u8'],[0x8fb+0xdb*0x11+-0x56*0x45,_0x19bc25(0x8fd)],[0x2*-0xf27+0x2bb*-0x2+0x2420,'i32'],[0xcd6+0x12b6+0x4c*-0x69,'f32'],[0x1221+0x2285+-0x1*0x3442,_0x19bc25(0x484)],[-0x15d0+-0x52*0x6b+0x387e,'f32'],[-0x15c3+-0x16e+0xf*0x193,'v3'],[-0x53*0x2b+0x1c*-0x3+0xebd,'f32'],[-0x450+0x3*0x615+-0xd73,_0x226e33[_0x19bc25(0xa41)]],[-0x424+-0x6a2+0xb46,'i32'],[0x23cf+-0xa*-0x3df+-0x1f*0x263,_0x226e33[_0x19bc25(0xa41)]]],'MouseLook':[[-0x2530+0x24af*0x1+-0x95*-0x1,'f32'],[-0x3*0xa7f+0x13a1*0x1+0xbf4,'f32'],[0x9e0+0x23ce*-0x1+-0xd05*-0x2,_0x19bc25(0x484)],[0xfbd+0xa56+-0x19f3,_0x19bc25(0x484)],[-0x1*-0x1661+0x2*-0x4f2+-0xc59,_0x226e33['Ndlkh']],[-0x265*-0x3+-0x14f2+0xdeb,_0x19bc25(0x484)],[0x1*-0x6c1+0x1*0x22d5+0x15*-0x154,_0x19bc25(0x484)],[0x6c7*-0x5+-0x873+0x2a8a*0x1,'u8'],[0x25ec+-0x1*-0x2474+-0x1c*0x2a6,'f32'],[0x222c+-0x143b+-0xdb5,_0x19bc25(0x484)],[0x107f*-0x2+0x21a3+-0x65,_0x19bc25(0x8fd)],[-0x2086+-0x16fb+0x37c5*0x1,'u8'],[0x1a1b+-0x11e7*-0x1+-0x2bba,'v2']],'NetworkPlayerAnimations':[[-0x6f9+-0x20*-0x20+0x1*0x3a1,'v3'],[0x3*0x2c6+0x2594+0x2d32*-0x1,'v3'],[0x45a*-0x2+0xbc3*-0x1+0x1*0x1537,'u8'],[-0x29*0x52+0x1*0x11f1+-0x40b,_0x226e33[_0x19bc25(0x6ea)]],[0x1*0x161+0x1d50*0x1+-0x1de9,'i32'],[-0xff+-0x10c6+0x31*0x61,_0x226e33[_0x19bc25(0xa41)]],[-0x3*-0x9d1+-0x1fb1+-0x22*-0x17,_0x19bc25(0x484)],[-0x1cb2+0xe4e*-0x1+0x2bdc,'f32'],[0x38d*0x2+0x2*0xb0f+-0x1c58*0x1,'f32'],[0x78*-0x25+-0x3*0x553+0x2239,'f32'],[-0x2*-0x1223+-0x155f+-0x3*0x4a9,'f32'],[0x701+0x11f6+-0x1807,'f32'],[-0x24a4+0x255d+0x3b,_0x226e33[_0x19bc25(0xa41)]],[0x40a*-0x1+0x1c3d+-0x139*0x13,_0x19bc25(0x484)],[0x12c4+0x347*0xb+-0x35d5,_0x226e33[_0x19bc25(0xa41)]],[0x7e4*0x1+0xa*-0x38b+0x119*0x1a,_0x226e33[_0x19bc25(0xa41)]],[0x1d36+0x14ff+-0x7*0x707,_0x226e33['Ndlkh']],[-0x1*-0x1d4b+-0xc*0xc3+-0x131f,_0x226e33[_0x19bc25(0x6ea)]],[-0x1*-0x1fb7+0xdfb+-0x2ca6,'u8'],[0x464+-0x4*0x332+0x974,_0x19bc25(0x8fd)],[-0x1fe*-0x3+0xef9*-0x1+0xa13,'i32'],[-0x574*-0x7+0x1f28+-0x443c,'u8'],[0x1855*0x1+-0x1c84+0x54b,_0x19bc25(0x484)],[0x2615+-0x1*-0x6b9+-0x2bae,'f32'],[0x1f*0x116+-0x6ed+-0x1999,_0x19bc25(0x484)],[-0x8*0x16d+0x1f3d+0x7*-0x2ab,_0x226e33['Ndlkh']],[-0x276+-0x252f*0x1+-0x1b*-0x183,'u8'],[-0x1*0x1161+-0x347+0x15e0,'u8'],[0xd*-0x22d+0x1af9+0x1*0x28c,'v3'],[0x10b4*0x1+-0x1ffe+0x1092,'v3'],[-0x3*-0x998+0x2432+-0x3f66,'u8']],'NPC_Cotroller':[[-0x23*-0x19+-0x46*-0x3f+-0xf*0x15f,'v3'],[0x1800+-0xe3+-0x16fd,_0x226e33['Ndlkh']],[0x635*0x1+0xc*0x277+-0x721*0x5,_0x19bc25(0x484)],[-0x7*-0x55+-0x36e+0x9*0x29,'u8'],[-0x8*0x25+0xfe9+0x6*-0x267,'u8'],[0x23a*0x6+0xd89+-0x1a89,'v3'],[0x42b+0x62d*-0x4+0x1525,'u8'],[0x2b3*0x1+-0x2d1*0x7+0x1*0x11a4,_0x19bc25(0x484)],[-0x49*0x10+-0x9e*0x16+0x12c8,'f32'],[0x1*-0x355+0x7c6+0x3b9*-0x1,_0x19bc25(0x484)],[0x201+-0xef9+0xdb4,_0x226e33['Ndlkh']],[0x1709*0x1+0x24c3+-0x3b04,'u8'],[-0xb*-0x321+-0x1d*0xca+0xabd*-0x1,_0x226e33[_0x19bc25(0xa41)]],[-0x1*0x1297+0x6*0x198+0x9df,'f32'],[-0x1322+0x6c8+0x26*0x59,_0x19bc25(0x484)],[-0x18c5+0x2*-0xfa9+-0x1*-0x38f7,_0x226e33['Ndlkh']],[0x1*-0x733+-0x1c18+-0x9d*-0x3b,'u8'],[0x1*-0x12ff+0x1*-0xad9+-0x2*-0xf62,_0x19bc25(0x484)],[-0x1*0xc65+0x19bb+-0x45*0x2e,'v3'],[-0x637*0x3+0x47*0x3d+0x2b6,'f32'],[0x3e3+-0x7ca+-0xfb*-0x5,'i32'],[-0x2*0x54a+0xb3*-0x1f+0xb17*0x3,_0x226e33[_0x19bc25(0xa41)]],[0x103b+-0x4*-0x533+-0x23ff,_0x226e33['Ndlkh']],[-0x1323+-0x1*0x4cf+0x18fe,_0x19bc25(0x484)],[0x15a5+-0x1*0x395+-0x10fc,'v3'],[-0x14be+0x1da2*-0x1+-0xce*-0x40,_0x19bc25(0x484)],[-0xc9b*0x2+0xcd7+0xd83,_0x226e33[_0x19bc25(0xa41)]],[0x9ea+-0x373+-0x543,'v3'],[0x12b*0x1d+0x9a9+-0x4*0xa91,'u8'],[0x864+-0x87d*0x1+0x161,_0x19bc25(0x484)],[-0x2*0xc32+-0xe*0x3f+0x1d26,'v3'],[0x1240+0x20*0x4f+-0x1ac0,_0x19bc25(0x8fd)],[-0x2291+0x4*0x91d+-0x77*0x1,'i32'],[-0x1*-0x14be+-0x1eae+0xb60,_0x226e33['Ndlkh']],[-0x1e6+-0x1859+-0x1*-0x1bb3,'u8'],[-0x3ef*-0x1+0x10ae*-0x1+0xe37,'v4'],[-0x2d4+0x1eb*0xa+0xe*-0x10f,_0x19bc25(0x484)],[0x156c+-0x2322+0xf42,_0x226e33[_0x19bc25(0xa41)]],[-0x2c5*-0xa+0x11d9*-0x2+0x24*0x44,_0x226e33[_0x19bc25(0xa41)]],[0x6ac+0x19f7+0x9*-0x373,'u8'],[0x1579+-0x102+-0x12d7,_0x19bc25(0x8fd)]],'TargetHealth':[[-0x23*0xb9+0x236e+-0xa13,_0x226e33[_0x19bc25(0x6ea)]],[0xeb1+-0xbd8*-0x2+-0x264d,_0x19bc25(0x8fd)],[0x4*-0xa7+-0x32+0x302,'u8'],[-0x212*-0xf+-0x1d3f*-0x1+-0x147*0x2f,_0x19bc25(0x8fd)],[-0x191*0x1+0xe16+0xc3d*-0x1,_0x19bc25(0x8fd)],[-0x1e21+-0x18f4+0x3761,'i32'],[-0x1b3*-0x1+-0x486+0x323,_0x19bc25(0x8fd)],[0x1*0x167b+0x1731+-0x22*0x154,_0x19bc25(0x484)],[-0x3d3+-0x20d7+0x2536,_0x19bc25(0x484)],[-0xcd*-0x25+-0x182f+-0x5*0xfa,'u8'],[-0x1965+0xcd0+0xd29,_0x19bc25(0x484)],[0x1*0x535+-0x807*0x3+0x9c2*0x2,'u8'],[0x169*-0x2+0x1*0x1aff+-0x1785,_0x226e33[_0x19bc25(0x6ea)]],[0x23*-0xe1+-0x1fe3+0x3f52,_0x226e33[_0x19bc25(0x6ea)]],[0x20b4*-0x1+-0x1*0x1159+0x32cd,_0x19bc25(0x484)],[0x2e*-0x8+0x207a+-0x1e3e,'u8']],'SectatorCamera':[[0x1*-0x1ca6+-0x1ba9+-0x5*-0xb47,'f32'],[-0x16*-0xd3+0x7d4*0x1+-0x19de,_0x226e33[_0x19bc25(0xa41)]],[-0x14c7+0xcf9+0x2*0x3f5,_0x19bc25(0x484)],[-0x18ae+-0x656+0x1f24,'v3'],[-0x2680+-0x15*0x173+0x451b*0x1,'v3'],[0x1*-0x23c9+0x1beb+0x7*0x12a,_0x19bc25(0x8fd)],[0x2dc+0xa6d+0x7*-0x1db,_0x19bc25(0x8fd)],[0x2b*0x7+-0x3b*0x3b+0xcbc,_0x226e33['Ndlkh']],[0x12d7+0x1c73+-0x2ef6,_0x19bc25(0x8fd)],[-0x1e36+-0x7*-0x54e+0x4*-0x1a5,_0x19bc25(0x484)],[-0x89e+0xcd3*0x2+-0x10ac,'u8'],[0x19c8+0x2*0xc41+-0x31ea,'v3'],[-0x3f1*-0x5+-0x1a55+-0x29*-0x2c,'v4'],[0x5d*0x26+0x1dcd*-0x1+-0x107b*-0x1,'u8'],[-0x17*0x83+0x195+-0x24*-0x4c,_0x19bc25(0x8fd)]],'UISettings':[[0x21b1+-0x2196+-0x1*-0x5,_0x226e33[_0x19bc25(0x6ea)]],[-0x1*-0x1aa1+-0x24b2+-0xa39*-0x1,_0x19bc25(0x484)],[0x3d2+0x1f*0x137+-0x1*0x2837,'u8'],[0x1e*0x53+0x7c2+-0x1034,_0x19bc25(0x8fd)],[-0x1fac+-0x166c+-0x4*-0xddb,'i32'],[-0x1a60+-0x4f*-0x17+0x149f,'i32'],[0x1235+-0x2427+0x134e,'u8'],[0x2178+0x5*-0x513+-0x6bc,'u8'],[0x1d*0x37+0x580*0x1+-0x7*0x17b,'u8'],[-0x1*-0x128f+-0x3*-0x42+-0x1*0x11f6,'u8'],[0xe0+-0xc8+0x148,'u8'],[-0xe3*0x1f+0x416*0x1+-0x1e8*-0xd,'u8'],[0x3f1*0x9+-0xf9f+-0x49e*0x4,'u8'],[-0x1*-0x12d6+-0x2397*-0x1+-0x34b1,_0x226e33['Ndlkh']],[0x19bd*-0x1+0x8*0x25e+0x891,'f32'],[-0x1*-0xe26+-0x2*-0x1341+0x10*-0x329,'u8'],[0x4df*0x7+0x2*-0x12ff+0x665,_0x19bc25(0x484)],[0x25a0+-0x8d1+-0x1a2f*0x1,_0x19bc25(0x8fd)],[-0x5*-0x10f+-0x1637+0x4c*0x43,'u8'],[0x807*-0x1+0x5*0x2dd+-0x2ae,'u8'],[0x1*0x161b+-0x1682+-0x407*-0x1,'v2'],[0x67b+0x4d*0x77+-0x269e,'v2'],[0x5*0x68b+0x1aaf+-0x1bdb*0x2,'u8'],[0x9*0x233+-0x12c6+0x2b3*0x1,'u8'],[0x19d3+0x1f4e+0x7b*-0x6f,_0x226e33[_0x19bc25(0xa41)]],[-0x3*0x869+0x276+-0x551*-0x5,'v3'],[0x139*-0x1f+0x1bf6+0xdd1,_0x226e33['Ndlkh']],[0x1*-0x13e1+0x518*-0x2+0x21f5*0x1,_0x19bc25(0x484)],[-0x2b2+-0x1193+-0x3*-0x80f,_0x19bc25(0x484)],[0x569*-0x2+0x52*-0x6c+0x2*0x18ad,'u8'],[-0x679+-0x1*0x732+0xe*0x142,'u8'],[0x5f6+0xd*-0x14b+0xecd,_0x226e33['ibsVA']],[-0x22db+0xe78+-0x1863*-0x1,_0x19bc25(0x8fd)],[0x2*-0xb96+0x2247+-0x79*0xf,_0x19bc25(0x8fd)],[-0x1513+0xd*-0x2ff+0x2*0x2007,_0x19bc25(0x8fd)],[-0x102c+-0x206d+0x34a5*0x1,'i32'],[-0x2*-0x454+-0x17af*-0x1+-0x1c47,_0x19bc25(0x8fd)],[0x66a*0x1+0x43*0x94+-0x2912,_0x19bc25(0x8fd)],[0x1*-0x16ca+0x19*0x13c+-0x3fa,_0x19bc25(0x8fd)],[-0x1157*0x2+-0xf1*0x1+0x1*0x27bb,_0x226e33[_0x19bc25(0x6ea)]],[-0x7a0+0x7b9+0x407,_0x19bc25(0x8fd)],[0x1b97+0x8c0+-0x2003,'u8'],[-0x294+-0x1*-0x993+-0x2aa,'u8'],[-0xe0*-0x8+0x1d5a+-0x2004,'u8'],[-0x9*0xb7+-0x2*0x7bb+0x1a3c,'u8'],[0x19c1+-0x1633*0x1+0x1*0xfe,_0x19bc25(0x484)]]},_0x29fd40={},_0xb9bf83={};function _0x3ff240(_0x2b27a1,_0x29c257,_0x4ec60e){return function(_0x30f3d1){var _0x544103=_0x500f,_0x258364={'sOlGd':function(_0x4e4cda,_0x507cad){var _0x44ffd4=_0x500f;return _0x226e33[_0x44ffd4(0x2cc)](_0x4e4cda,_0x507cad);},'gvCPm':'cmd','wHlDO':function(_0x4473ef,_0x526bc5,_0x2a4dcd){return _0x4473ef(_0x526bc5,_0x2a4dcd);},'fHedI':_0x226e33[_0x544103(0xc9e)]};if(_0x226e33[_0x544103(0x2cc)](_0x544103(0x677),_0x226e33[_0x544103(0xe77)]))try{if(_0x544103(0x899)!=='QhQpi'){var _0x305f6d=_0x30f3d1&&_0x30f3d1[_0x544103(0x446)]?_0x30f3d1[_0x544103(0x446)]():0x1350+0x45*0x23+-0x995*0x3;if(!_0x305f6d)return;var _0x12711b=_0xb9bf83[_0x2b27a1]||(_0xb9bf83[_0x2b27a1]={}),_0x488132=_0x12711b[_0x305f6d];if(!_0x488132)_0x488132=_0x12711b[_0x305f6d]={'ptr':_0x305f6d,'firstSeen':Date['now'](),'hits':0x0};_0x488132[_0x544103(0xac9)]++;if(_0x4ec60e){if(!_0x29fd40[_0x305f6d])_0x29fd40[_0x305f6d]={'ptr':_0x305f6d,'kind':_0x2b27a1,'firstSeen':Date[_0x544103(0x25b)](),'hits':0x0};_0x29fd40[_0x305f6d][_0x544103(0xac9)]++;}else{var _0x38fa7a=_0x1cbdf6[_0x2b27a1];if(!_0x38fa7a||_0x38fa7a[_0x544103(0x5cd)]!==_0x305f6d){_0x1cbdf6[_0x2b27a1]={'ptr':_0x305f6d,'firstSeen':Date[_0x544103(0x25b)](),'hits':0x0,'replaced':!!_0x38fa7a};try{var _0x27c504=_0x10dd84[_0x544103(0xa71)+'r'](function(_0x543f1f){return _0x543f1f['type']===_0x2b27a1;})[-0x1*0x144+0x15f5+-0x14b1];_0x5ac11d={'type':_0x2b27a1,'atMs':Date[_0x544103(0x25b)]()-_0x1de39c,'originalFunc':!!(_0x27c504&&_0x27c504[_0x544103(0xc0c)]&&typeof _0x27c504[_0x544103(0xc0c)][_0x544103(0xab5)+'nalFu'+'nc']===_0x544103(0xba1)+'ion'),'resolveGameAtFire':!!_0x226e33[_0x544103(0xbdc)](_0x455abb),'gameSourceAtFire':_0x2b9e94[_0x544103(0x530)+'e']};}catch(_0x2651ba){}}}if(_0x226e33['Motcw'](_0x2b27a1,_0x544103(0x8b9)+_0x544103(0x2ee)+_0x544103(0x4bb))&&_0x46693f['on']){if(_0x226e33[_0x544103(0x9b0)]!=='afIfd')try{_0x382858(_0x305f6d);}catch(_0x1bad7b){}else{var _0x1f8c85=new _0x4b4f22(_0x258364['fHedI']);_0x1f8c85['onmes'+'sage']=function(_0x178593){var _0x24c4ae=_0x544103,_0x35b88e=_0x178593[_0x24c4ae(0x964)];if(_0x35b88e&&_0x35b88e['__sak'+_0x24c4ae(0x843)]===_0x37be16&&_0x258364['sOlGd'](_0x35b88e[_0x24c4ae(0xc1c)],_0x258364[_0x24c4ae(0x5c3)]))_0x258364[_0x24c4ae(0x7a7)](_0x88a4c4,_0x35b88e[_0x24c4ae(0x79c)],_0x35b88e['arg']);};}}if(!_0x29c257){if(_0x544103(0xc32)!=='BaukA'){var _0x27c504=_0x10dd84[_0x544103(0xa71)+'r'](function(_0x21de5b){return _0x21de5b['type']===_0x2b27a1;})[-0x2625+-0x1d6b+0x4390];if(_0x27c504&&_0x27c504[_0x544103(0xc0c)])try{_0x27c504[_0x544103(0xc0c)][_0x544103(0x903)+'ed']=![];}catch(_0x5c4734){}}else{var _0x4978f9=_0x5cef55['hookP'+_0x544103(0x55f)]({'typeName':_0x3d63a6[_0x544103(0xb33)],'methodName':_0x544103(0x891)+'e','params':[_0x544103(0x8fd),'i32'],'returnType':_0x329670},_0x5b975c(_0x136c3d['type'],_0xa63c1e['keep'],_0x425658[_0x544103(0x584)]));_0x2e2126['push']({'type':_0x41b7f8[_0x544103(0xb33)],'hook':_0x4978f9,'keep':_0x122a5b[_0x544103(0x209)]});}}}else{if(_0xff4413['lg'])_0x2309ac['lg'][_0x544103(0x2b4)+'onten'+'t']='';return;}}catch(_0x2432fd){}else{var _0x1656a1=_0x282d8e();if(!_0x1656a1)return null;try{return new _0x24ad78(_0x1656a1['buffe'+'r'],_0x1656a1['byteO'+_0x544103(0x25e)],_0x1656a1['byteL'+_0x544103(0xd79)]);}catch(_0x3a6bd7){return null;}}};}function _0x345b86(){var _0x178a6b=_0x19bc25;if(_0x10dd84['lengt'+'h'])return!![];if(!window['Unity'+'WebMo'+'dkit']||!window['Unity'+_0x178a6b(0xab1)+'dkit'][_0x178a6b(0x425)+'me'])return![];var _0x3e09d1=window[_0x178a6b(0x20e)+_0x178a6b(0xab1)+'dkit']['Runti'+'me'];if(!_0x3e09d1['plugi'+'ns']||!_0x3e09d1['plugi'+'ns'][_0x178a6b(0xe2a)+'h'])return![];_0x3f0565=window['Unity'+'WebMo'+_0x178a6b(0x313)][_0x178a6b(0xa7f)+'Wrapp'+'er'],_0x4579ce=_0x4579ce||_0x3e09d1['plugi'+'ns'][_0x226e33[_0x178a6b(0xad8)](_0x3e09d1[_0x178a6b(0xd7d)+'ns'][_0x178a6b(0xe2a)+'h'],-0x2403*0x1+0x23c5+0x9*0x7)];if(!_0x4579ce||typeof _0x4579ce['hookP'+_0x178a6b(0x55f)]!==_0x226e33[_0x178a6b(0x78b)])return![];for(var _0xdc494a=-0x239c+-0x22ca+0x4666;_0xdc494a<_0x42f30b['lengt'+'h'];_0xdc494a++){var _0x31666f=_0x42f30b[_0xdc494a];try{var _0x4409b5=_0x4579ce[_0x178a6b(0x78e)+'refix']({'typeName':_0x31666f[_0x178a6b(0xb33)],'methodName':_0x178a6b(0x891)+'e','params':['i32',_0x226e33['ibsVA']],'returnType':undefined},_0x3ff240(_0x31666f[_0x178a6b(0xb33)],_0x31666f['keep'],_0x31666f['many']));_0x10dd84['push']({'type':_0x31666f[_0x178a6b(0xb33)],'hook':_0x4409b5,'keep':_0x31666f['keep']});}catch(_0x88063a){if(_0x226e33[_0x178a6b(0xc8f)](_0x226e33[_0x178a6b(0x4a5)],_0x226e33['PzMhK']))_0x2ba691[_0x178a6b(0x822)](_0x226e33[_0x178a6b(0xce7)](_0x31666f[_0x178a6b(0xb33)],':\x20')+_0x226e33[_0x178a6b(0xd87)](String,_0x88063a&&_0x88063a[_0x178a6b(0x1e4)+'ge']||_0x88063a)[_0x178a6b(0x62f)](0x1da4*-0x1+-0x273*0x7+0x2ec9,-0x1*0x5cf+0xd6b+-0x1*0x6fc));else{if(!_0x15687c()&&!_0x48ba8b){if(_0x4b142e['el'])_0x304abb['el'][_0x178a6b(0x754)][_0x178a6b(0x829)+'ay']=_0x178a6b(0x2b0);return;}if(_0x496b54['el'])_0x327c35['el']['style']['displ'+'ay']='';var _0x14fc36=_0x408711[_0x178a6b(0x68a)](_0x3a715f&&_0x44f8a2[_0x178a6b(0x920)+_0x178a6b(0xae9)]||{})[_0x178a6b(0xe2a)+'h'],_0x5b644e=_0xa39785&&_0x4d0728[_0x178a6b(0x30c)]||null,_0x266691=_0x5b644e?_0x5b644e['enemy'+'Count']||0x1ad4+-0x1c2b+-0x31*-0x7:0x126*0x11+0x72*-0x9+-0xf84,_0x5aa7e9=_0x5b644e?_0x5b644e['botCo'+_0x178a6b(0x581)]||0x5*-0xa9+0x1*0x1cb0+-0x1*0x1963:-0x9*-0x14d+0x14*-0x7b+0x1*-0x219,_0x668b0c=_0x39fd96?_0x226e33[_0x178a6b(0xdbe)](_0x9d26fb[_0x178a6b(0x67d)+'r']['byteL'+_0x178a6b(0xd79)],-0x110de*-0x16+-0x7*-0x23f44+-0x172df0)[_0x178a6b(0xa0d)+'ed'](0x1b04+0x6d3*0x1+-0x21d7)+'MB':_0x226e33[_0x178a6b(0x959)],_0x357da1=_0x226e33[_0x178a6b(0xb86)](_0x226e33[_0x178a6b(0x4c3)](_0x226e33['IQlhA'](_0x226e33[_0x178a6b(0x3e8)](_0x226e33[_0x178a6b(0xa7e)](_0x226e33[_0x178a6b(0x37a)]('v',_0x4d8c99&&_0x16d030['versi'+'on']||_0x3acf5d)+_0x226e33['iNeIb'],_0x3cd412&&_0x2b34d9[_0x178a6b(0xceb)+_0x178a6b(0x9c3)+'ed']||0xa*-0x313+-0x14ad+0x336b),'/')+(_0x4dc818&&_0x45ca7c[_0x178a6b(0xceb)+_0x178a6b(0xcf4)]||0xc*0x54+-0x758+-0x2*-0x1b4)+(_0x178a6b(0x9cc)+'s\x20')+_0x14fc36,_0x178a6b(0x3d6)+'\x20')+_0x668b0c,_0x178a6b(0x1c8)+_0x178a6b(0xbe3)),_0x5c0bca);_0x2ae00a['st'][_0x178a6b(0x2b4)+'onten'+'t']=_0x357da1;var _0x315418=_0x276d4c[_0x178a6b(0x235)];_0x315418&&(_0x315418['textC'+_0x178a6b(0x806)+'t']=_0x226e33['zApAw'](_0x266691,0x362*0x4+0x653+-0x1*0x13db)?_0x226e33['WZARN'](_0x226e33['vrkyf']('PLAYE'+'RS\x20',_0x266691)+(_0x5aa7e9?_0x226e33[_0x178a6b(0x690)]('\x20+\x20',_0x5aa7e9)+'\x20bots':''),_0x5b644e&&_0x5b644e[_0x178a6b(0x96b)+'a']?_0x226e33['OpqdC']+_0x5b644e['camer'+_0x178a6b(0x5bb)]:_0x178a6b(0xaca)+'\x20-'):'no\x20en'+_0x178a6b(0x1f6)+'\x20yet\x20'+'(lobb'+'y?)\x20\x20'+'cam\x20'+(_0x5b644e&&_0x5b644e[_0x178a6b(0x96b)+'a']?_0x5b644e[_0x178a6b(0x96b)+_0x178a6b(0x5bb)]:'-'),_0x315418[_0x178a6b(0x754)]['color']=_0x226e33['Pmrzv'](_0x266691,0x8b6*-0x1+-0x1309+0x1*0x1bbf)?'#7ee0'+'a8':_0x226e33[_0x178a6b(0xc76)]);}}}return _0x226e33['CUjwM'](_0x10dd84['lengt'+'h'],-0x124b+-0x26db+0x3926);}function _0x5f1b02(_0x110024,_0xc32e8a){var _0x4eff0e=_0x19bc25,_0x4c71e6={'Jbgys':function(_0x43ce5b,_0x108822){return _0x43ce5b!==_0x108822;},'KnQVW':function(_0x2980f1,_0x4cd234){return _0x226e33['ZSCYh'](_0x2980f1,_0x4cd234);},'uoDat':_0x226e33['uxEEA'],'VoUoS':_0x226e33['ZqCDi'],'ZysGz':function(_0x11846f,_0x39371c){return _0x11846f>_0x39371c;},'VXIMT':'EYdBZ','jsnpg':function(_0x2ecbc5,_0x28e03a){var _0x5d4ba8=_0x500f;return _0x226e33[_0x5d4ba8(0x2a4)](_0x2ecbc5,_0x28e03a);},'PGEYc':function(_0x1b60c5,_0xb1484){return _0x226e33['Motcw'](_0x1b60c5,_0xb1484);},'PGKDq':_0x226e33[_0x4eff0e(0x78b)],'nGprY':_0x4eff0e(0x86a),'UvEGL':function(_0x541d70,_0xb597ad){return _0x541d70(_0xb597ad);},'RyBYC':function(_0x2d1c78,_0x2e2b46){return _0x226e33['LTgOq'](_0x2d1c78,_0x2e2b46);},'OdgDE':_0x226e33[_0x4eff0e(0xc1f)],'PdyPe':function(_0x5117c5,_0x4eb063){return _0x5117c5-_0x4eb063;},'BgBZp':'VpZiK','BvGRN':function(_0x1b5260,_0x269cb1){return _0x226e33['jkdcc'](_0x1b5260,_0x269cb1);},'fSPTh':function(_0x55ab75,_0x5bf6d0){return _0x55ab75===_0x5bf6d0;},'PbiBN':function(_0x14b5e4,_0x926f56){return _0x14b5e4===_0x926f56;},'yfdAx':_0x4eff0e(0xb4e)};return function(){var _0x470755=_0x4eff0e,_0x3c3074={'oLOZC':_0x4c71e6[_0x470755(0xa08)],'szPbU':function(_0x58ad6f){return _0x58ad6f();},'Usgxo':function(_0x4ee30b,_0xa30985){return _0x4c71e6['ZysGz'](_0x4ee30b,_0xa30985);},'EsFSd':function(_0x3d1bcc,_0x23158f){return _0x3d1bcc+_0x23158f;},'KUIeU':function(_0x588bc6,_0x21cb12){return _0x588bc6<_0x21cb12;}};try{if(_0x4c71e6[_0x470755(0xe50)]==='EYdBZ'){var _0x316f82=_0x392876[_0xc32e8a]||(_0x392876[_0xc32e8a]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x1eefd7=arguments;if(_0x4c71e6[_0x470755(0x52f)](_0x110024,'get')){var _0x17f06a=_0x1eefd7[-0x1*0x11d1+-0x229f+-0x10*-0x347];if(_0x17f06a&&_0x4c71e6[_0x470755(0x5ec)](typeof _0x17f06a[_0x470755(0x446)],_0x4c71e6[_0x470755(0x211)])){if(_0x4c71e6[_0x470755(0xd9a)]===_0x470755(0x86a)){var _0x45c2e0=_0x17f06a['val']();if(typeof _0x45c2e0===_0x470755(0x791)+'r'&&_0x4c71e6[_0x470755(0xea0)](isFinite,_0x45c2e0)){if(_0x316f82['lo']===null||_0x45c2e0<_0x316f82['lo'])_0x316f82['lo']=_0x45c2e0;if(_0x4c71e6['jsnpg'](_0x316f82['hi'],null)||_0x45c2e0>_0x316f82['hi'])_0x316f82['hi']=_0x45c2e0;if(_0x4c71e6['RyBYC'](_0x316f82[_0x470755(0x21b)],null)){if(_0x4c71e6[_0x470755(0xd53)]===_0x470755(0x5f0)){var _0x40f4f0=Math[_0x470755(0x5f5)](_0x4c71e6[_0x470755(0xd3c)](_0x45c2e0,_0x316f82['last']));if(_0x40f4f0>_0x316f82[_0x470755(0x2ad)])_0x316f82['jump']=_0x40f4f0;}else{_0x2ae712['push'](_0x3c3074[_0x470755(0x25c)]);for(var _0x20bf65=0x24cb+0x708+0xd*-0x35f;_0x20bf65<_0x24fe31[_0x470755(0xd5c)+'ngs']['lengt'+'h'];_0x20bf65++)_0x351625[_0x470755(0x822)](_0x470755(0x435)+_0x42af0f[_0x470755(0xd5c)+_0x470755(0xb68)][_0x20bf65]);}}_0x316f82[_0x470755(0x21b)]=_0x45c2e0;}_0x316f82['hits']++;if(_0x1eefd7[0x2065*0x1+0x1f43+0xcbb*-0x5]&&typeof _0x1eefd7[0x3bb*-0x1+-0x1d81+-0x213d*-0x1]['val']===_0x4c71e6[_0x470755(0x211)]){var _0x5f0d33=_0x1eefd7[0x49d*0x1+0x817+-0xcb3]['val']();if(_0x5f0d33)_0x514922=_0x5f0d33;}}else{var _0x5713ac=_0x3c3564[_0x4277cd];for(var _0xfb7297=-0x52d+-0x18e*0x10+-0x9d*-0x31;_0xfb7297<_0x5713ac['lengt'+'h'];_0xfb7297++){_0xaaf885[_0x3a83c5+'+0x'+_0x5713ac[_0xfb7297]['o'][_0x470755(0x488)+_0x470755(0x35f)](-0x19fb+0x36*-0x1b+0x1fbd)]=_0x5713ac[_0xfb7297]['v'];}}}}else{if('VpZiK'!==_0x4c71e6['BgBZp'])_0x43abb9[_0x470755(0x788)+'em'](_0x3734d2,_0x1a0ff7['strin'+_0x470755(0xad3)](_0x3c54bf['pos']));else{if(_0x1eefd7[0x20*0xec+0x1*0x50b+-0x228a]&&_0x4c71e6[_0x470755(0x99a)](typeof _0x1eefd7[-0x1*0x146b+0x1a29*0x1+-0x5bd]['val'],_0x4c71e6[_0x470755(0x211)])){if(_0x4c71e6[_0x470755(0xbb4)](_0x470755(0x5d6),_0x470755(0x5d6)))_0x316f82['setLa'+'st']=_0x1eefd7[0x21db+0x647*0x1+-0x1*0x2821][_0x470755(0x446)](),_0x316f82[_0x470755(0x585)+'ts']++;else{var _0x1f6abf=_0x347ff6['data'];if(!_0x1f6abf||_0x4c71e6[_0x470755(0x469)](_0x1f6abf['__sak'+'ura'],_0xfe1ff))return;try{if(_0x1f6abf[_0x470755(0xc1c)]===_0x470755(0xc89)){_0x18c207()[_0x470755(0x935)]({'host':_0x1f6abf['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x4c71e6[_0x470755(0x6d1)](_0x1f6abf['kind'],'repor'+'t'))_0x5b3a34()[_0x470755(0x935)](_0x1f6abf[_0x470755(0x44a)+'t']);}catch(_0x2dcc21){_0x1dff2e[_0x470755(0x301)]('%c[sa'+_0x470755(0xcfa)+'\x20pane'+'l\x20upd'+'ate\x20f'+_0x470755(0x462),_0x4c71e6['uoDat']+_0x330a0d,_0x2dcc21);}}}_0x1eefd7[-0x1*-0xe7+-0xa86+0x9a1*0x1]&&_0x4c71e6['PbiBN'](typeof _0x1eefd7[0x11*-0xc+-0xe33*0x1+0xa7*0x17]['val'],_0x4c71e6[_0x470755(0x211)])&&(_0x316f82['setB']=_0x1eefd7[0x772*0x2+-0x1*0x2015+0x1133][_0x470755(0x446)](),_0x316f82['pairH'+_0x470755(0xdad)]++);if(_0x1eefd7[-0xaf2+-0x4*-0xe3+-0x3b3*-0x2]&&typeof _0x1eefd7[0x4d*-0x15+-0x1835+0x1e86]['val']===_0x470755(0xba1)+_0x470755(0xa8b)){if(_0x4c71e6[_0x470755(0x871)]!=='LTmcC'){if(_0x23bd9e&&!_0x26ca2f()){_0x3c3074[_0x470755(0xc56)](_0x377f96);return;}_0x52d47a(!![],_0x3956ff);}else{var _0x2de525=_0x1eefd7[0x1f37*-0x1+0xd5*-0xb+0x1*0x285e][_0x470755(0x446)]();if(_0x2de525)_0x514922=_0x2de525;}}}}}else{var _0x389b32=_0x58c30d();if(!_0x389b32)return null;if(_0x43fb74<-0x2017+0x25ff+-0x6*0xfc||_0x3c3074[_0x470755(0x9e2)](_0x3c3074[_0x470755(0x345)](_0x5404bd,_0x369b58*(-0x9a9*0x3+0x40*0x4+0x1bff)),_0x389b32[_0x470755(0x7fb)+_0x470755(0xd79)]))return null;var _0x5b1e0b=[];for(var _0x538e2e=0x1a1*0xd+0x17a9+-0x2*0x166b;_0x3c3074['KUIeU'](_0x538e2e,_0xa0750c);_0x538e2e++)_0x5b1e0b['push'](_0x389b32[_0x470755(0x4d7)+_0x470755(0xb8b)](_0x40ddf9+_0x23bfc6+_0x538e2e*(0xc83+0x1*-0x74b+-0xde*0x6),!![]));return _0x302cf7['ok']+=_0x51fb12,_0x5b1e0b;}}catch(_0xa00284){}};}function _0x15d8b0(){var _0x2ac500=_0x19bc25;if(_0x226e33[_0x2ac500(0x1bc)]!=='QIWre')_0x5e53a8[_0x2ac500(0x822)](_0x8bfb3e[_0x2ac500(0xb33)]+':\x20'+_0x226e33[_0x2ac500(0x25d)](_0xf73b3d,_0x5122fc&&_0x4e037e[_0x2ac500(0x1e4)+'ge']||_0x534a98)[_0x2ac500(0x62f)](-0x1*-0xee2+0x195d+0x1*-0x283f,-0x9*0x22d+0x1336*-0x1+0x276b));else{if(_0x38f094)return!![];if(!_0x4579ce||_0x226e33[_0x2ac500(0x468)](typeof _0x4579ce['hookP'+_0x2ac500(0x907)+'x'],'funct'+'ion'))return![];var _0xf89c7d=_0x23fcaf['Mouse'+_0x2ac500(0x575)]||[];for(var _0x440a43=-0x174a+0x105e+0x6ec;_0x440a43<_0xf89c7d[_0x2ac500(0xe2a)+'h'];_0x440a43++){var _0x2824ec=_0xf89c7d[_0x440a43];try{if(_0x226e33['uWtst'](_0x2824ec[_0x2ac500(0xa4b)],_0x2ac500(0xcb9)))_0x226e33[_0x2ac500(0x2bf)]===_0x226e33['EoexW']?_0x1d751c(_0x2ac500(0xb27)+_0x2ac500(0xabc)):_0x4579ce[_0x2ac500(0x78e)+_0x2ac500(0x907)+'x']({'typeName':_0x2ac500(0x90b)+'Look','methodName':_0x2824ec[_0x2ac500(0x5ac)],'params':_0x2824ec[_0x2ac500(0xea2)+_0x2ac500(0x40b)],'returnType':_0x2824ec['wasmR'+'et']},_0x5f1b02(_0x2ac500(0x2cf),_0x2824ec[_0x2ac500(0x5ac)]));else _0x2824ec['ret']===_0x226e33['OatOw']&&_0x226e33[_0x2ac500(0xdc3)](_0x2824ec['param'+'s'][_0x2ac500(0xe2a)+'h'],-0x3*-0x2a0+0x48f*0x1+-0xc6e)&&_0x226e33[_0x2ac500(0x292)](_0x2824ec[_0x2ac500(0xe7c)+'s'][0xe4e+-0x232b+-0x14dd*-0x1],_0x226e33['Alyil'])&&_0x4579ce[_0x2ac500(0x78e)+_0x2ac500(0x55f)]({'typeName':_0x226e33['hnyUC'],'methodName':_0x2824ec[_0x2ac500(0x5ac)],'params':_0x2824ec[_0x2ac500(0xea2)+'arams'],'returnType':undefined},_0x5f1b02(_0x226e33[_0x2ac500(0x79e)],_0x2824ec['name']));}catch(_0x609ee){_0x2df973['push'](_0x226e33[_0x2ac500(0xba3)](String,_0x609ee&&_0x609ee[_0x2ac500(0x1e4)+'ge']||_0x609ee)['slice'](0xba5+0x19f1+0x11*-0x236,0x192c+0x16ae+-0x5*0x97a));}}return _0x38f094=!![],!![];}}function _0x2df7c9(){var _0x377486=_0x19bc25,_0x221ac1={'enojh':function(_0x8a980a,_0x9e8a2c){var _0x190fd6=_0x500f;return _0x226e33[_0x190fd6(0x96a)](_0x8a980a,_0x9e8a2c);}};if(_0x226e33[_0x377486(0x665)](_0x226e33[_0x377486(0xa6e)],_0x226e33[_0x377486(0xa6e)])){var _0x2ad7bb=-0x1*-0x171d+0x135+0xb*-0x236,_0x3ddc50=0x6d3*-0x5+0x26b9*0x1+0x1f*-0x26,_0xee4d20=0x73a+0x13cc+-0x1b06,_0x53d767=0x169f*0x1+0x18a*0x3+-0x1b3d,_0x1ed276=0x1*-0x1f6c+-0x2298+-0xd34*-0x5;try{var _0x4591fd=window[_0x377486(0x20e)+_0x377486(0xab1)+'dkit']&&window[_0x377486(0x20e)+'WebMo'+'dkit'][_0x377486(0x425)+'me'],_0x299573=_0x4579ce||_0x4591fd&&_0x4591fd[_0x377486(0xd7d)+'ns']&&_0x4591fd[_0x377486(0xd7d)+'ns'][_0x4591fd[_0x377486(0xd7d)+'ns']['lengt'+'h']-(0xeb5+-0x4bd+-0x9f7*0x1)];if(_0x299573&&_0x299573[_0x377486(0xceb)]){if('XXYjx'===_0x226e33[_0x377486(0x64a)])return'0x'+(_0x1de33f['o']<-0x9*-0x41+0x5b*-0x63+0x48*0x75?'?':_0x29e733['o'][_0x377486(0x488)+'ing'](-0x2*-0x305+-0x1b*-0xae+0x1854*-0x1))+'\x20('+_0x5b33db['why']+')';else for(var _0x1c7090=-0x3c3*0x1+-0x1b1+0x2*0x2ba;_0x1c7090<_0x299573[_0x377486(0xceb)][_0x377486(0xe2a)+'h'];_0x1c7090++){if(_0x226e33[_0x377486(0x7a9)](_0x377486(0x850),'Jjart')){var _0x49167c=_0x299573[_0x377486(0xceb)][_0x1c7090];if(!_0x49167c||_0x49167c[_0x377486(0x3e1)+_0x377486(0xd00)]!==_0x226e33['hnyUC'])continue;_0x2ad7bb++;if(_0x49167c['table'+_0x377486(0xc8c)]!==undefined)_0x3ddc50++;if(_0x49167c['appli'+'ed'])_0xee4d20++;}else return{'ok':![],'error':_0x221ac1['enojh'](_0x34ef09,_0x181f89&&_0x24d12f[_0x377486(0x1e4)+'ge']||_0x1663e0)['slice'](-0x21e7+0x1*0xba7+0x59*0x40,0x1*-0x10b7+-0x65*0x1d+-0x2*-0xe50)};}}}catch(_0x3f4af0){}for(var _0x5ab6cc in _0x392876){if(_0x377486(0xd2a)!==_0x226e33[_0x377486(0x4a7)])_0x26e58a();else{var _0x4fc5aa=_0x392876[_0x5ab6cc];_0x53d767+=_0x4fc5aa[_0x377486(0xac9)]||-0x1*0x1b6b+-0xeb+0x1c56,_0x1ed276+=(_0x4fc5aa[_0x377486(0x585)+'ts']||0x19a6+-0x1*-0x146f+-0x2e15*0x1)+(_0x4fc5aa[_0x377486(0x9b8)+_0x377486(0xdad)]||0x23f3+0x21f8+-0x45eb*0x1);}}return{'registered':_0x38f094,'total':_0x2ad7bb,'resolved':_0x3ddc50,'applied':_0xee4d20,'getterHits':_0x53d767,'setterHits':_0x1ed276,'distinct':Object['keys'](_0x392876)['lengt'+'h'],'errorCount':_0x2df973[_0x377486(0xe2a)+'h'],'errors':_0x2df973['slice'](0x13d*-0xd+-0x1*-0x16d7+-0x6be,-0x2416+0x1e98+0x582)};}else return _0x3bd137['span'];}function _0x2ab4dc(){var _0x197997=_0x19bc25,_0x23e3bb=null,_0x5a4376=-0xd94+-0x51f+0x12b3;for(var _0xf6327 in _0x392876){var _0x2dbac4=_0x392876[_0xf6327];_0x2dbac4[_0x197997(0x9b8)+'its']&&_0x226e33[_0x197997(0xe49)](_0x2dbac4['pairH'+_0x197997(0xdad)],_0x5a4376)&&_0x226e33[_0x197997(0x531)](typeof _0x2dbac4[_0x197997(0x3e5)+'st'],_0x226e33['DZkuw'])&&_0x226e33[_0x197997(0xe42)](typeof _0x2dbac4['setB'],'numbe'+'r')&&_0x226e33['sjhkL'](isFinite,_0x2dbac4[_0x197997(0x3e5)+'st'])&&isFinite(_0x2dbac4['setB'])&&(_0x23e3bb={'rawA':_0x2dbac4['setLa'+'st'],'rawB':_0x2dbac4['setB'],'hits':_0x2dbac4['pairH'+_0x197997(0xdad)],'name':_0xf6327},_0x5a4376=_0x2dbac4[_0x197997(0x9b8)+_0x197997(0xdad)]);}if(!_0x23e3bb)return null;var _0x2f1a6f=_0x23e3bb['rawA']>=-(0x1e73*-0x1+-0x1*-0x132d+0xc*0xf8)&&_0x23e3bb[_0x197997(0x8a4)]<=0x1*-0x11c2+-0x2*0xe8+0x6a4*0x3,_0x898f35=_0x226e33['xIVpI'](_0x23e3bb[_0x197997(0xe31)],-(0x5dd*0x1+0x426*-0x2+0x2c9))&&_0x23e3bb['rawB']<=0x2d1+-0x483+0x20c;if(_0x226e33[_0x197997(0x9d4)](_0x2f1a6f,_0x898f35)){if('jfCfF'!==_0x197997(0xd26))_0x23e3bb[_0x197997(0xc51)]=_0x2f1a6f?_0x23e3bb[_0x197997(0x8a4)]:_0x23e3bb['rawB'],_0x23e3bb[_0x197997(0x58b)]=_0x2f1a6f?_0x23e3bb['rawB']:_0x23e3bb['rawA'],_0x23e3bb[_0x197997(0x1ee)]=_0x2f1a6f?_0x197997(0x2f4):_0x197997(0x6d5);else{_0x757bff[_0x197997(0x849)+_0x197997(0xb3c)+_0x197997(0x628)](),_0xa91f70(!_0x5ef06b[_0x197997(0x597)]);return;}}else _0x23e3bb[_0x197997(0xc51)]=null,_0x23e3bb[_0x197997(0x58b)]=null,_0x23e3bb[_0x197997(0x1ee)]=_0x226e33['Ceodg'](_0x226e33[_0x197997(0x825)],_0x2f1a6f?_0x197997(0xc42)+'bound'+'ed':_0x226e33[_0x197997(0x618)])+')';return _0x23e3bb;}function _0x25cedc(){var _0x448586=_0x19bc25,_0x42202e=0xd*0x2a1+-0x18dc+-0x951;for(var _0x513957=-0x2559+0x2f*0x8b+0xbd4*0x1;_0x513957<_0x10dd84[_0x448586(0xe2a)+'h'];_0x513957++){if(_0x10dd84[_0x513957][_0x448586(0xc0c)]&&_0x10dd84[_0x513957][_0x448586(0xc0c)][_0x448586(0xb2a)+'Index']!==undefined)_0x42202e++;}return _0x42202e;}function _0x4fb118(){var _0x447173=_0x19bc25,_0x53a9df={'fCIPt':function(_0xc446c6,_0x12e26d){return _0xc446c6*_0x12e26d;},'ftwdy':function(_0x18e8c5,_0x49c3d6){return _0x18e8c5+_0x49c3d6;},'UMgEq':function(_0x496250,_0x22ab02){var _0x1cb47e=_0x500f;return _0x226e33[_0x1cb47e(0x92b)](_0x496250,_0x22ab02);},'jPMpD':function(_0x44f47d,_0x46e4dc,_0x2a4192,_0x3527c5,_0x1e938c){var _0x5436e1=_0x500f;return _0x226e33[_0x5436e1(0x44f)](_0x44f47d,_0x46e4dc,_0x2a4192,_0x3527c5,_0x1e938c);},'ayJPS':function(_0x20438f,_0x132b0a){return _0x20438f/_0x132b0a;},'ixNCV':function(_0x589291,_0x924eb7){return _0x589291/_0x924eb7;},'gkPYV':function(_0x39ab63,_0x8e7929){var _0x439c91=_0x500f;return _0x226e33[_0x439c91(0xdfe)](_0x39ab63,_0x8e7929);},'toVQe':function(_0x438e06,_0x2095e1){var _0x47d932=_0x500f;return _0x226e33[_0x47d932(0xad8)](_0x438e06,_0x2095e1);}};if(_0x447173(0x233)===_0x447173(0x6b9)){var _0x21a754=_0x5f188e[_0x447173(0x9a2)][_0x447173(0x748)];if(_0x5d7056[_0x447173(0x5f5)](_0x21a754[0x5c*-0x7+0xa97*-0x2+0x17b3])<-0x1*0x10bb+-0x9e5+0x1aa0+0.01){var _0x4da7a7=_0x5cae71[_0x447173(0x52a)](_0x53a9df[_0x447173(0x6bc)](_0x20cf4d['fov'],_0xd53045['PI'])/(0x140e*0x1+-0x20c1+-0x2f*-0x49)/(-0xe4e*0x2+0xc71+0x65*0x29)),_0x29e709=-0x1fb4*-0x1+-0x1*-0x1666+0x5*-0xad0,_0x51b117=0x4*-0xf7+0x25c3+-0x21e6,_0x1af8c0=[_0x38e29b[_0x447173(0x5e9)][-0x2137+-0x542*0x1+-0x93*-0x43]+_0x21a754[0x1a1+-0x9e2+0x841]*_0x29e709,_0x53a9df[_0x447173(0x9dd)](_0x1c78aa['pos'][0x1193+0xa3*-0x11+-0x6bf]+_0x21a754[0x1bc2+0x1782+0x1*-0x3343]*_0x29e709,_0x51b117),_0x51b57b['pos'][-0x385+0x2250+0x6f*-0x47]+_0x53a9df['UMgEq'](_0x21a754[0x1*0x17ff+-0x2172+0x975],_0x29e709)],_0x1a05b9=_0x53a9df[_0x447173(0x4e9)](_0x267897,_0x294d35['pos'],_0x1af8c0,_0x163047,_0x25defd[_0x447173(0x61f)+'s']['h']);if(_0x1a05b9){var _0xb1863f=_0x53a9df[_0x447173(0x6bc)](0x1*-0x1837+-0x19*0x162+0x1*0x3ac9+0.5-_0x1a05b9['y']/_0x44ffee['canva'+'s']['h'],-0x21*0x47+-0xe7+0xa10),_0x5e01b6=_0x53a9df[_0x447173(0xb88)](_0x53a9df[_0x447173(0x39f)](_0x51b117,_0x29e709),_0x4da7a7);_0x47cdd6[_0x447173(0x659)+_0x447173(0x8cb)]={'got':_0x53a9df['ayJPS'](_0x52ed4a[_0x447173(0xdd2)](_0xb1863f*(-0x1*-0x138f+0x3*0x805+-0x27b6)),-0x5*0x35+0x1c30+0x173f*-0x1),'want':_0x3082e4[_0x447173(0xdd2)](_0x53a9df['fCIPt'](_0x5e01b6,-0x2117+0x13*0x49+0x1f94))/(0x1e54+0x97*0x2+0xdcd*-0x2),'off':_0x56dd41['round'](_0x53a9df['gkPYV'](_0x53a9df['toVQe'](_0xb1863f,_0x5e01b6),-0x2*-0xb55+0xc13+0x3*-0xa47))/(0x4*0x995+-0x1*-0x3bb+0x2627*-0x1)};}}}else{var _0x5d1134=0x616*0x2+-0x5*0x311+0x329;for(var _0x420019=-0xb*-0x145+-0x6*0x2cc+0x1*0x2d1;_0x420019<_0x10dd84[_0x447173(0xe2a)+'h'];_0x420019++){if(_0x10dd84[_0x420019][_0x447173(0xc0c)]&&_0x10dd84[_0x420019][_0x447173(0xc0c)][_0x447173(0x3b6)+'ed'])_0x5d1134++;}return _0x5d1134;}}var _0x27ef31=null,_0x465e7e=[],_0x52e8a1={},_0x5ac11d=null;function _0x786683(_0x55d428){var _0x57396a=_0x19bc25;try{if(_0x226e33[_0x57396a(0xc98)](!_0x3f0565,!_0x55d428))return null;var _0x2892fc=new _0x3f0565(_0x55d428)['getCl'+'assNa'+'me']();return _0x2892fc===undefined?null:_0x2892fc;}catch(_0x48344d){return null;}}function _0x3fd86d(_0x85e91a,_0x552ec4,_0x365501){var _0x3b289a=_0x19bc25;if(_0x226e33[_0x3b289a(0x531)](_0x226e33[_0x3b289a(0xaa3)],_0x226e33['TEoKH'])){var _0x45e1ad=('1|2|3'+_0x3b289a(0x356)+_0x3b289a(0xc8b))['split']('|'),_0x43d61b=-0x7*0x29b+0x1775+-0x538;while(!![]){switch(_0x45e1ad[_0x43d61b++]){case'0':_0x2b9e94['ok']+=_0x365501;continue;case'1':var _0x39a20d=_0x226e33[_0x3b289a(0xb2c)](_0x454344);continue;case'2':if(!_0x39a20d)return null;continue;case'3':if(_0x552ec4<0x74d+0xb2d*0x1+-0x127a||_0x552ec4+_0x226e33[_0x3b289a(0x4ed)](_0x365501,0x3*0xc7d+-0xbe9*0x3+0x6e*-0x4)>_0x39a20d[_0x3b289a(0x7fb)+_0x3b289a(0xd79)])return null;continue;case'4':var _0x344e38=[];continue;case'5':return _0x344e38;case'6':for(var _0x21d942=-0x13*-0xf7+-0x3e9*0x1+-0xe6c;_0x226e33['ngGIz'](_0x21d942,_0x365501);_0x21d942++)_0x344e38[_0x3b289a(0x822)](_0x39a20d[_0x3b289a(0x4d7)+_0x3b289a(0xb8b)](_0x226e33[_0x3b289a(0x1ec)](_0x226e33[_0x3b289a(0x553)](_0x85e91a,_0x552ec4),_0x226e33[_0x3b289a(0xc03)](_0x21d942,-0x250f+0x2056*-0x1+0x3*0x1723)),!![]));continue;}break;}}else return _0x12c945('Mouse'+_0x3b289a(0x985)+'0x2c\x20'+_0x3b289a(0x1c1)+_0x3b289a(0x47a)+_0x3b289a(0xcb5)+'t\x20ref'+'erenc'+'e');}var _0x1271f1={'PhotonNetworkSync':[[_0x19bc25(0x6a5),_0x19bc25(0x50d)+_0x19bc25(0xdf7)],[_0x19bc25(0xb02),'healt'+'h'],[_0x19bc25(0xb8c),_0x226e33[_0x19bc25(0x8fa)]],['0x28',_0x226e33[_0x19bc25(0x75c)]],[_0x226e33['VWIja'],_0x226e33['goTRS']]],'NetworkPlayerAnimations':[['0x10',_0x226e33['CmHEW']],[_0x19bc25(0x3b1),_0x19bc25(0x3ea)]],'NPC_Cotroller':[[_0x226e33[_0x19bc25(0x32e)],_0x226e33[_0x19bc25(0x284)]],[_0x19bc25(0x8ad),_0x226e33[_0x19bc25(0x9ee)]],[_0x226e33[_0x19bc25(0xc38)],_0x226e33[_0x19bc25(0x4ee)]],[_0x226e33[_0x19bc25(0x9d5)],_0x19bc25(0x474)+_0x19bc25(0xe21)+'th2'],['0xe8',_0x19bc25(0x34d)+'form']],'EnemyBot':[[_0x19bc25(0xbf2),_0x19bc25(0x34d)+'form']]},_0x2b1a18={'PhotonNetworkSync':[['0x58',_0x19bc25(0xd6d)],[_0x226e33['zTqMo'],_0x226e33[_0x19bc25(0xce1)]],[_0x226e33['qxxlN'],'id']]};function _0x335251(_0x4b1073,_0x37ded4){var _0x4a5258=_0x19bc25,_0x470946={'RVckW':function(_0x1b2a65,_0x6d2b8e){return _0x1b2a65&&_0x6d2b8e;},'spDcA':function(_0x17ef95,_0x277444){return _0x17ef95===_0x277444;},'finvQ':function(_0xe464e6,_0x10220c){var _0x402dc8=_0x500f;return _0x226e33[_0x402dc8(0xb20)](_0xe464e6,_0x10220c);},'rAdhn':_0x4a5258(0x484),'jdoqb':function(_0x1139b2,_0x100845){var _0x5b5260=_0x4a5258;return _0x226e33[_0x5b5260(0x3e8)](_0x1139b2,_0x100845);},'nkUrP':function(_0x5820c6,_0x597a2e,_0x739766){return _0x5820c6(_0x597a2e,_0x739766);}},_0x7ca6c9=_0x578547[_0x4b1073]||[],_0x4cbb93={'kind':_0x4b1073,'ptr':_0x226e33[_0x4a5258(0x2d6)]('0x',_0x37ded4['toStr'+_0x4a5258(0x35f)](-0x1*-0x1a4b+-0x9f4+0x1*-0x1047)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x56578a=-0x52b+0xb5d*-0x1+0x1088;_0x56578a<_0x7ca6c9['lengt'+'h'];_0x56578a++){if(_0x226e33[_0x4a5258(0x9ef)](_0x7ca6c9[_0x56578a][0x763*0x5+0xa57*-0x1+-0x1a97],'v3'))continue;var _0x5950a3=_0x3fd86d(_0x37ded4,_0x7ca6c9[_0x56578a][0x1*0x19ac+0x266f*-0x1+-0x79*-0x1b],-0xcea+0x10c0*-0x1+0x1dad);if(!_0x5950a3)continue;_0x4cbb93[_0x4a5258(0x5f3)+'cs'][_0x4a5258(0x822)]({'o':_0x226e33[_0x4a5258(0x7a6)]('0x',_0x7ca6c9[_0x56578a][-0x1*-0x19cc+-0x7a*-0x2f+-0x3032]['toStr'+'ing'](-0x1890+0x589*0x1+0x1317)),'v':_0x5950a3});}var _0x20a0c1=-0x46*0x7+0x167e+0x1b7*-0xc,_0x42479e=_0x226e33[_0x4a5258(0xd2d)](_0x4b1073+'@',_0x37ded4),_0x12e641=_0x31911d(_0x4cbb93['allVe'+'cs'],_0x5e0e58(),_0x3a553c[_0x42479e]);_0x3a553c[_0x42479e]=_0x12e641['posAt']?{'o':_0x12e641[_0x4a5258(0xc71)]}:null,_0x4cbb93['pos']=_0x12e641[_0x4a5258(0x5e9)],_0x4cbb93[_0x4a5258(0xc71)]=_0x12e641[_0x4a5258(0xc71)],_0x4cbb93['held']=_0x12e641['held'],_0x4cbb93[_0x4a5258(0xa15)+_0x4a5258(0xb1a)]=_0x12e641[_0x4a5258(0xa15)+_0x4a5258(0xb1a)],_0x4cbb93[_0x4a5258(0x626)+'er']=_0x12e641[_0x4a5258(0x626)+'er'],_0x4cbb93['reach']=_0x12e641[_0x4a5258(0xdfa)],void _0x20a0c1;var _0x55f443=_0x1271f1[_0x4b1073],_0x51c0cb=_0x2b1a18[_0x4b1073];if(_0x51c0cb){_0x4cbb93[_0x4a5258(0x89b)]={};for(var _0x281dd0=-0x5f*-0x47+-0xb8d*-0x2+-0x3173;_0x281dd0<_0x51c0cb['lengt'+'h'];_0x281dd0++){if(_0x4a5258(0x2dc)===_0x4a5258(0x2dc)){var _0x36702f=_0x226e33['XDIGx'](_0x3fa609,_0x226e33[_0x4a5258(0x745)](_0x37ded4,_0x226e33['GMQGJ'](parseInt,_0x51c0cb[_0x281dd0][-0x25cf+0xe2d*0x2+0x3*0x327],-0xf5*-0x3+-0x84b+0x57c)),_0x226e33[_0x4a5258(0x6ea)]);if(_0x36702f!==undefined)_0x4cbb93[_0x4a5258(0x89b)][_0x51c0cb[_0x281dd0][-0x20a5*-0x1+0x2195+0x1*-0x4239]]=_0x36702f;}else _0x1c16cb['style'][_0x4a5258(0xc2d)]=_0x226e33[_0x4a5258(0x3b5)],_0x1bda12['style']['top']=_0x4a5258(0xd66),_0x593bf0[_0x4a5258(0x754)]['right']=_0x226e33[_0x4a5258(0x8a0)],_0x6434c5[_0x4a5258(0x754)][_0x4a5258(0xb22)+'m']=_0x4a5258(0xa0e);}}if(_0x55f443)for(var _0x5e5078=0x2*-0x6ad+0x42*-0x5+-0xea4*-0x1;_0x5e5078<_0x55f443[_0x4a5258(0xe2a)+'h'];_0x5e5078++){if(_0x226e33['RdJqS'](_0x4a5258(0xdae),_0x4a5258(0x5ae))){var _0xc85ce1=_0x226e33[_0x4a5258(0x644)](_0x3fa609,_0x37ded4+parseInt(_0x55f443[_0x5e5078][0x178d*-0x1+0x1f68+-0x7db],0x734*-0x4+-0x1ecc+0xc*0x4f9),_0x226e33[_0x4a5258(0x541)]);if(_0xc85ce1)_0x4cbb93['refs'][_0x55f443[_0x5e5078][-0x170a+0x117a+0x591]]=_0x226e33[_0x4a5258(0x37a)]('0x',(_0xc85ce1>>>-0x93*-0x18+-0x7f*-0x38+0x8*-0x532)['toStr'+'ing'](-0x2a3+0x225d*-0x1+0x2510));}else _0x1520b6=_0x226e33['GMQGJ'](_0x2d3d41,_0x226e33[_0x4a5258(0x6a1)],![]),_0x1ddc59[_0x4a5258(0x822)](_0x49651f);}return _0x4cbb93[_0x4a5258(0x33a)+'rs']=_0x7ca6c9[_0x4a5258(0xa71)+'r'](function(_0x361593){var _0x49f1de=_0x4a5258,_0x5dc21b={'kdyzw':function(_0x4dda13,_0x5a357c){var _0x52bee1=_0x500f;return _0x470946[_0x52bee1(0x3a9)](_0x4dda13,_0x5a357c);},'psEwb':function(_0x8c9f1f,_0x2762ed){return _0x470946['spDcA'](_0x8c9f1f,_0x2762ed);},'mmmOr':_0x49f1de(0x2b0)};if('qSgii'!==_0x49f1de(0xe8b)){var _0x155403={};try{var _0x3bc37b=_0x5944c1[_0x49f1de(0x20e)+_0x49f1de(0xab1)+'dkit']&&_0x11d989[_0x49f1de(0x20e)+_0x49f1de(0xab1)+_0x49f1de(0x313)]['Runti'+'me'];_0x155403[_0x49f1de(0x89b)]=_0x3bc37b&&_0x3bc37b['__sak'+_0x49f1de(0x699)+'g']||null,_0x155403['tagMa'+'tches']=!!(_0x5dc21b['kdyzw'](_0x3bc37b,_0xbec12d)&&_0x5dc21b['psEwb'](_0x3bc37b[_0x49f1de(0xc20)+'uraTa'+'g'],_0x342d9a)),_0x155403['runti'+'meGam'+'e']=_0x3bc37b&&_0x3bc37b[_0x49f1de(0xdc4)]?typeof _0x3bc37b[_0x49f1de(0xdc4)]:_0x5dc21b[_0x49f1de(0x9d2)],_0x155403['plugi'+'nRunt'+_0x49f1de(0x39e)+_0x49f1de(0xd89)+'ted']=!!(_0x2e3cf7&&_0x5ea7a5[_0x49f1de(0x272)+'ime']&&_0x5dc21b[_0x49f1de(0x96d)](_0x5d9fcb[_0x49f1de(0x272)+'ime'],_0x3bc37b)),_0x155403['plugi'+'nRunt'+_0x49f1de(0x4c7)+'me']=_0x223d61&&_0xbb1ba5['_runt'+_0x49f1de(0xd5f)]&&_0x36afa2['_runt'+_0x49f1de(0xd5f)][_0x49f1de(0xdc4)]?typeof _0x57f447[_0x49f1de(0x272)+_0x49f1de(0xd5f)]['_game']:_0x49f1de(0x2b0);}catch(_0x533ffd){_0x155403[_0x49f1de(0x94c)]=_0x220ca4(_0x533ffd&&_0x533ffd[_0x49f1de(0x1e4)+'ge']||_0x533ffd);}return _0x155403;}else return _0x470946[_0x49f1de(0xc1e)](_0x361593[0x96f+-0x6bb+-0x1*0x2b3],_0x470946[_0x49f1de(0x3e9)])||_0x361593[0x1273+0x9*0x235+0xcc5*-0x3]==='i32';})[_0x4a5258(0x7d5)](function(_0x5a790e){var _0xce16d=_0x4a5258;return{'o':_0x470946[_0xce16d(0xb11)]('0x',_0x5a790e[0x23e4+-0x22a0*-0x1+0x4*-0x11a1]['toStr'+'ing'](0x2*0x1127+-0xbdf+-0x165f)),'v':_0x470946[_0xce16d(0x368)](_0x3fa609,_0x470946['jdoqb'](_0x37ded4,_0x5a790e[-0x2342+-0xdda+0x311c]),_0x5a790e[0x16a*0xc+0x2235+-0x332c])};})['filte'+'r'](function(_0x5764a8){return _0x5764a8['v']!==undefined&&isFinite(_0x5764a8['v']);})['slice'](0x2278+-0x12a6+0x2*-0x7e9,0x1e68+0xde7+0x1*-0x2c43),_0x4cbb93;}function _0x2fe2e0(){var _0x23c2b8=_0x19bc25,_0x4579db={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x46bf62=_0x1cbdf6[_0x23c2b8(0x8b9)+'ntrol'+_0x23c2b8(0x4bb)]&&_0x1cbdf6[_0x23c2b8(0x8b9)+_0x23c2b8(0x2ee)+'ler'][_0x23c2b8(0x5cd)]||-0x18cd+-0x10c1+0x298e,_0x292bfa=_0xb9bf83['Photo'+'nNetw'+_0x23c2b8(0xcfb)+'nc']||{},_0x595d4f=Object[_0x23c2b8(0x68a)](_0x292bfa);for(var _0x1396d0=0x903+-0x23f8+0x1af5;_0x1396d0<_0x595d4f['lengt'+'h']&&_0x1396d0<0x65f+-0x1*0x1ef5+0x18ae;_0x1396d0++){var _0x31d002=_0x226e33['ZCHAN'][_0x23c2b8(0xa6a)]('|'),_0x151f90=0x4cf*-0x7+0x5ba*0x2+-0x767*-0x3;while(!![]){switch(_0x31d002[_0x151f90++]){case'0':_0x47e612['first'+'SeenM'+'s']=_0x4c80f0['first'+'Seen']-_0x1de39c;continue;case'1':_0x47e612[_0x23c2b8(0xac9)]=_0x4c80f0[_0x23c2b8(0xac9)];continue;case'2':var _0x4c80f0=_0x292bfa[_0x595d4f[_0x1396d0]];continue;case'3':_0x4579db['playe'+'rs'][_0x23c2b8(0x822)](_0x47e612);continue;case'4':var _0x47e612=_0x226e33[_0x23c2b8(0x644)](_0x335251,_0x23c2b8(0xc85)+'nNetw'+_0x23c2b8(0xcfb)+'nc',_0x4c80f0[_0x23c2b8(0x5cd)]);continue;case'5':if(_0x47e612['refs'][_0x23c2b8(0x71b)+'h']){var _0x36ff9c=_0x226e33['oMmmh'](parseInt,_0x47e612[_0x23c2b8(0xc81)][_0x23c2b8(0x71b)+'h'],-0x12c4+-0x16ed+0x7*0x5f7);_0x47e612[_0x23c2b8(0x71b)+'h']=_0x50d35d(_0x36ff9c,_0x23c2b8(0x3c6)+'hScri'+'pt','obfI');}continue;case'6':_0x47e612[_0x23c2b8(0xe18)+'al']=!!_0x46bf62&&_0x47e612['refs']['fps']===_0x226e33[_0x23c2b8(0xd54)]('0x',_0x46bf62['toStr'+'ing'](0x281*0x7+-0xaab+-0x6cc));continue;}break;}}_0x4579db['playe'+_0x23c2b8(0xcf6)+'t']=_0x595d4f[_0x23c2b8(0xe2a)+'h'];var _0x5a07b7=_0xb9bf83['NPC_C'+'otrol'+'ler']||{},_0xfc7e7b=Object[_0x23c2b8(0x68a)](_0x5a07b7);for(var _0x60e4ce=0x16b3+0x177b*-0x1+0xc8;_0x60e4ce<_0xfc7e7b['lengt'+'h']&&_0x226e33[_0x23c2b8(0xbf0)](_0x60e4ce,0x19f9+-0x1ea0+-0x3*-0x195);_0x60e4ce++){if(_0x226e33[_0x23c2b8(0x8d1)]!=='xNKdx'){var _0x4b0ef6=_0x4651e7[0x363+-0x5d1*-0x6+-0x2649]['val']();if(_0x4b0ef6)_0x3a3ef5=_0x4b0ef6;}else{var _0x5af719=('4|2|3'+_0x23c2b8(0x76a))[_0x23c2b8(0xa6a)]('|'),_0x29d07b=-0x1140+0x6a*0x35+-0x4b2*0x1;while(!![]){switch(_0x5af719[_0x29d07b++]){case'0':_0x4579db['bots'][_0x23c2b8(0x822)](_0x1d70dc);continue;case'1':if(_0x1d70dc[_0x23c2b8(0xc81)][_0x23c2b8(0x71b)+'h'])_0x1d70dc[_0x23c2b8(0x71b)+'h']=_0x226e33[_0x23c2b8(0xdf8)](_0x50d35d,_0x226e33['zhBZQ'](parseInt,_0x1d70dc[_0x23c2b8(0xc81)][_0x23c2b8(0x71b)+'h'],0x1bcd+-0x2531+-0x16*-0x6e),_0x226e33[_0x23c2b8(0x1f9)],_0x23c2b8(0x2c3));continue;case'2':_0x1d70dc['hits']=_0x5a07b7[_0xfc7e7b[_0x60e4ce]][_0x23c2b8(0xac9)];continue;case'3':_0x1d70dc['first'+'SeenM'+'s']=_0x5a07b7[_0xfc7e7b[_0x60e4ce]][_0x23c2b8(0xb91)+'Seen']-_0x1de39c;continue;case'4':var _0x1d70dc=_0x335251(_0x23c2b8(0xe2e)+_0x23c2b8(0x6f0)+_0x23c2b8(0x4bb),_0x5a07b7[_0xfc7e7b[_0x60e4ce]][_0x23c2b8(0x5cd)]);continue;}break;}}}_0x4579db[_0x23c2b8(0xc48)+_0x23c2b8(0x581)]=_0xfc7e7b[_0x23c2b8(0xe2a)+'h'];var _0xf26019=_0xb9bf83['FPSco'+_0x23c2b8(0x2ee)+_0x23c2b8(0x4bb)]||{},_0x33c938=Object['keys'](_0xf26019);for(var _0x3293d6=-0xe5a+-0x1*-0x1b79+-0xd1f;_0x3293d6<_0x33c938[_0x23c2b8(0xe2a)+'h']&&_0x226e33[_0x23c2b8(0xc9d)](_0x3293d6,-0x4*-0x437+0x4f*-0x2f+-0x3*0xc1);_0x3293d6++){var _0x44a92b=_0x226e33['zhBZQ'](_0x335251,_0x226e33[_0x23c2b8(0x2a8)],_0xf26019[_0x33c938[_0x3293d6]][_0x23c2b8(0x5cd)]);_0x44a92b['hits']=_0xf26019[_0x33c938[_0x3293d6]][_0x23c2b8(0xac9)],_0x44a92b[_0x23c2b8(0xe18)+'al']=_0x226e33['njGcy'](_0xf26019[_0x33c938[_0x3293d6]][_0x23c2b8(0x5cd)],_0x46bf62),_0x4579db['contr'+_0x23c2b8(0xccf)+'s']['push'](_0x44a92b);}_0x4579db[_0x23c2b8(0x29b)+'oller'+_0x23c2b8(0x6dd)]=_0x33c938[_0x23c2b8(0xe2a)+'h'];var _0x34eb20=_0x4579db[_0x23c2b8(0xde0)+'rs'][_0x23c2b8(0x3a2)+'t'](_0x4579db[_0x23c2b8(0x4fb)]);for(var _0x35ba6b=-0x5d0*-0x6+0x1fce+0x1e*-0x239;_0x226e33[_0x23c2b8(0x9bb)](_0x35ba6b,_0x34eb20[_0x23c2b8(0xe2a)+'h']);_0x35ba6b++){if(_0x226e33[_0x23c2b8(0x376)]('xUuGa','xQyWA')){if(_0x34eb20[_0x35ba6b][_0x23c2b8(0xe18)+'al'])continue;_0x4579db[_0x23c2b8(0x443)+'es']['push'](_0x34eb20[_0x35ba6b]);}else _0x226e33['jgJIH'](_0xe531be);}_0x4579db[_0x23c2b8(0xce9)+'Count']=_0x4579db['enemi'+'es'][_0x23c2b8(0xe2a)+'h'];var _0x11321d={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x270909={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x456818 in _0x1cbdf6){var _0x33044c=_0x1cbdf6[_0x456818];if(!_0x33044c||!_0x33044c[_0x23c2b8(0x5cd)])continue;if(!_0x226e33['UNKIC'](_0x456818,_0x11321d))continue;_0x4579db[_0x23c2b8(0x2a3)+_0x23c2b8(0x622)][_0x456818]='0x'+_0x33044c['ptr']['toStr'+_0x23c2b8(0x35f)](0x125*0x7+-0x20de+0x18eb*0x1);var _0x4c366f=_0x226e33['vlnhY'](_0x3fa609,_0x33044c['ptr']+_0x11321d[_0x456818],_0x226e33['hWnlA']),_0x5511b2=_0x226e33['BrEhV'](_0x3fa609,_0x33044c[_0x23c2b8(0x5cd)]+_0x270909[_0x456818],_0x226e33['hWnlA']);_0x4c366f&&_0x226e33[_0x23c2b8(0x296)](_0x4579db['camer'+'a'],null)&&(_0x4579db['camer'+'a']='0x'+(_0x4c366f>>>-0x111a*0x1+0x4*-0x1ab+0x17c6)['toStr'+_0x23c2b8(0x35f)](-0x587+-0x1*0x5f7+0xb8e),_0x4579db[_0x23c2b8(0x96b)+_0x23c2b8(0x5bb)]=_0x456818);if(_0x5511b2&&_0x226e33[_0x23c2b8(0x2a4)](_0x4579db['playe'+_0x23c2b8(0x67a)],null))_0x4579db[_0x23c2b8(0xde0)+'rList']='0x'+(_0x5511b2>>>0xc3d*0x3+-0x8d1+0x2*-0xdf3)['toStr'+_0x23c2b8(0x35f)](-0x2*-0x9dd+-0x31*-0x79+0x2ad3*-0x1);}if(!_0x4579db[_0x23c2b8(0xde0)+'rCoun'+'t']&&!_0x4579db[_0x23c2b8(0xc48)+'unt']&&!_0x4579db[_0x23c2b8(0x96b)+'a'])_0x4579db[_0x23c2b8(0x5a4)]=_0x23c2b8(0xcbc)+'otonN'+_0x23c2b8(0x9e6)+_0x23c2b8(0xe03)+_0x23c2b8(0x333)+_0x23c2b8(0xe2e)+'otrol'+_0x23c2b8(0xe3a)+'nd\x20no'+'\x20game'+_0x23c2b8(0x412)+_0x23c2b8(0x1ed)+_0x23c2b8(0xd51)+'is\x20wh'+'at\x20'+_0x226e33[_0x23c2b8(0x81e)];else!_0x4579db[_0x23c2b8(0xce9)+_0x23c2b8(0x6dd)]&&(_0x4579db[_0x23c2b8(0x5a4)]=_0x23c2b8(0x37c)+_0x23c2b8(0xb04)+_0x23c2b8(0xbf5)+_0x23c2b8(0xdbf)+'but\x20n'+'one\x20a'+'re\x20cl'+'assif'+_0x23c2b8(0xcea)+_0x23c2b8(0xa03)+_0x23c2b8(0xa46)+'yet\x20-'+_0x23c2b8(0xb31)+'k\x20'+(_0x23c2b8(0xe18)+_0x23c2b8(0x5c4)+_0x23c2b8(0xdcb)+_0x23c2b8(0xb5c)+_0x23c2b8(0x8a1)+'`play'+_0x23c2b8(0x4da)));try{if(_0x226e33[_0x23c2b8(0xe7d)]!==_0x226e33['aXRpc']){var _0x329f83=_0x36e34a(),_0xc5b47e=null,_0x4c30e6=_0x8a8fb0,_0x2ad018=_0x4b4f20[_0x23c2b8(0xb6b)];if(_0x329f83[_0x23c2b8(0x9a2)]){_0xc5b47e=_0x329f83[_0x23c2b8(0x9a2)];if(_0x329f83[_0x23c2b8(0x5e9)])_0x4c30e6=_0x329f83[_0x23c2b8(0x5e9)];if(_0x226e33[_0x23c2b8(0x4b4)](_0x329f83[_0x23c2b8(0xb6b)],null))_0x2ad018=_0x329f83['fov'];}var _0x197d47,_0x4dd5bd,_0x2d85a1,_0x279549,_0x44f3b1,_0x65a024,_0x121b9f,_0x24db85,_0x4b296f;if(_0xc5b47e)_0x197d47=_0xc5b47e['fwd'][-0x17f8+0x41f*-0x8+-0x38f*-0x10],_0x4dd5bd=_0xc5b47e[_0x23c2b8(0x748)][-0x1383+-0x1*-0x1487+0x7*-0x25],_0x2d85a1=_0xc5b47e[_0x23c2b8(0x748)][-0x51*0xe+-0xb*0x61+0x89b],_0x279549=_0xc5b47e['right'][0x2131+-0x1*0x268e+0x55d],_0x44f3b1=_0xc5b47e[_0x23c2b8(0x2a9)][0x2d5*0x7+0x1934+-0x71*0x66],_0x65a024=_0xc5b47e[_0x23c2b8(0x2a9)][-0x1a5*-0xf+0xee4+-0x278d],_0x121b9f=_0xc5b47e['up'][0x1*0x220e+0xd1*0x1+-0x71*0x4f],_0x24db85=_0xc5b47e['up'][-0x2a4*0xd+-0x252a+-0x1*-0x477f],_0x4b296f=_0xc5b47e['up'][-0x1d18+0x2dd*0xb+-0x265];else{var _0x3f39f5=_0x247449();if(!_0x3f39f5)return null;var _0x1cd17c=_0x226e33[_0x23c2b8(0x92b)](_0x3f39f5['pitch'],_0x44e599['PI'])/(0x47*-0x83+-0x1433+0x393c),_0x2258b2=_0x226e33[_0x23c2b8(0x1e9)](_0x3f39f5['yaw']*_0x5d9d45['PI'],0xf*-0x265+-0x1264+-0x3703*-0x1),_0x497753=_0x4f345a[_0x23c2b8(0x715)](_0x1cd17c);_0x197d47=_0x226e33[_0x23c2b8(0x4ed)](_0x21651d[_0x23c2b8(0x5d2)](_0x2258b2),_0x497753),_0x4dd5bd=-_0x2e0369[_0x23c2b8(0x5d2)](_0x1cd17c),_0x2d85a1=_0x816fb3[_0x23c2b8(0x715)](_0x2258b2)*_0x497753,_0x279549=_0x2d85a1,_0x44f3b1=-0x3ea+0x1d5*0xb+-0x103d,_0x65a024=-_0x197d47,_0x121b9f=_0x4dd5bd*_0x65a024-_0x226e33['zzanr'](_0x2d85a1,_0x44f3b1),_0x24db85=_0x2d85a1*_0x279549-_0x197d47*_0x65a024,_0x4b296f=_0x226e33[_0x23c2b8(0x5c5)](_0x226e33[_0x23c2b8(0xdfe)](_0x197d47,_0x44f3b1),_0x4dd5bd*_0x279549);}var _0x36eb3e=_0x37fb59[0x5*0x79d+0x3*0xb1b+-0x4762]-_0x4c30e6[0x1208+0x4e3+-0x16eb],_0x4a9b67=_0x4a667[-0x11dc+-0x1fcf*0x1+-0x4*-0xc6b]-_0x4c30e6[-0x2*-0xb92+-0xc04+-0x3*0x3b5],_0x1cac59=_0x15a4a1[-0x5c4*0x3+-0x1c0c+0xd7*0x36]-_0x4c30e6[-0x1589+-0x20d7+0x1b31*0x2],_0x52ba16=_0x226e33['PlLgH'](_0x36eb3e,_0x197d47)+_0x226e33[_0x23c2b8(0xcd5)](_0x4a9b67,_0x4dd5bd)+_0x226e33[_0x23c2b8(0x62e)](_0x1cac59,_0x2d85a1);if(_0x52ba16<=0x256e+0xa*-0xb2+-0x2*0xf3d+0.05)return null;var _0x580abb=_0x226e33[_0x23c2b8(0xa8e)](_0x36eb3e,_0x279549)+_0x4a9b67*_0x44f3b1+_0x1cac59*_0x65a024,_0x368d86=_0x226e33[_0x23c2b8(0x9a4)](_0x226e33[_0x23c2b8(0x4ed)](_0x36eb3e,_0x121b9f),_0x4a9b67*_0x24db85)+_0x1cac59*_0x4b296f,_0x27dbb8=_0x226e33['GmpAv'](_0xf3f167,_0x8bcdd9),_0x3d2aa9=_0x2ad018*_0x252c7e['PI']/(-0x265d+0x22+-0x1*-0x26ef),_0x43447e=_0x39f175[_0x23c2b8(0x52a)](_0x226e33['QbgpJ'](_0x3d2aa9,0x277*0x1+0x1c72+-0x1ee7)),_0x247b5b=_0x580abb/_0x52ba16/_0x226e33[_0x23c2b8(0x8ab)](_0x43447e,_0x27dbb8),_0x441a69=_0x368d86/_0x52ba16/_0x43447e;if(_0x247b5b<-(0x292+-0x2ab*0xd+0x100f*0x2+0.6000000000000001)||_0x247b5b>0x1abe+0x10df+0xae7*-0x4+0.6000000000000001||_0x441a69<-(0x1851+-0xa9+-0x17a7+0.6000000000000001)||_0x441a69>0x12cb+-0x2*-0x54f+-0x3ad*0x8+0.6000000000000001)return null;return{'x':(_0x247b5b*(-0x423+0x9f6+-0x5d3+0.5)+(-0x1a9b+-0x802+0x229d+0.5))*_0x457e29,'y':_0x226e33[_0x23c2b8(0xad8)](-0x286+0x1b4a+-0xc62*0x2+0.5,_0x441a69*(0x15b9+0xab7+-0x1038*0x2+0.5))*_0x5c062c,'z':_0x52ba16};}else{var _0x289978=window['Unity'+_0x23c2b8(0xab1)+_0x23c2b8(0x313)]&&window[_0x23c2b8(0x20e)+_0x23c2b8(0xab1)+'dkit'][_0x23c2b8(0x425)+'me'],_0x2cf506=_0x289978&&_0x289978[_0x23c2b8(0xb6e)+_0x23c2b8(0xe1d)+'smTyp'+'es']||[],_0x4c8b0a={};for(var _0x2f5bae=0x12a9*0x2+0x5b*-0x3d+-0x1*0xfa3;_0x2f5bae<_0x2cf506['lengt'+'h']&&_0x2f5bae<0x2299+0x695+-0x2*0xcc7;_0x2f5bae++){var _0x52f1c2=_0x2cf506[_0x2f5bae][_0x23c2b8(0xe7c)+'s'][_0x23c2b8(0x55c)](',')+'\x20->\x20'+(_0x2cf506[_0x2f5bae]['retur'+_0x23c2b8(0xdc1)]||_0x23c2b8(0xc73));_0x4c8b0a[_0x52f1c2]=(_0x4c8b0a[_0x52f1c2]||-0x2*-0x60d+-0x1*-0x3d7+0x7*-0x247)+(0x1771*0x1+0x15e+-0x18ce);}_0x4579db[_0x23c2b8(0x406)+'ypes']=_0x4c8b0a;}}catch(_0x764cec){}return _0x4579db;}function _0x50d35d(_0x1f65d1,_0x4c965e,_0x34d660){var _0x54243a=_0x19bc25;try{var _0x129e8b=_0x578547[_0x4c965e]||[];for(var _0x152fa2=0x2101+0x1b*-0x3d+-0x1a92;_0x152fa2<_0x129e8b[_0x54243a(0xe2a)+'h'];_0x152fa2++){if(_0x129e8b[_0x152fa2][-0x11c1+0x5*0x2a5+0x81*0x9]!==_0x34d660)continue;var _0x2d8106=_0x129e8b[_0x152fa2][-0x1b*0xb3+-0x771+0x463*0x6];if(_0x34d660[_0x54243a(0x724)+'Of'](_0x54243a(0x92d))===-0xa54+-0x94c+0x13a0){var _0x5d462d=_0x446733(_0x1f65d1,_0x2d8106,_0x34d660);if(!_0x5d462d)return null;_0x5d462d['o']=_0x2d8106,_0x5d462d['k']=_0x34d660;var _0x339e7d=_0x125b8a([_0x5d462d]);if(!_0x339e7d[_0x54243a(0xbb7)][_0x54243a(0xe2a)+'h'])return null;return _0x339e7d['rows'][-0x192a+0x1f*0xc1+-0x1b*-0x11];}var _0x20ba40=_0x3fa609(_0x1f65d1+_0x2d8106,_0x34d660);if(_0x20ba40===undefined)return null;return{'o':'0x'+_0x2d8106[_0x54243a(0x488)+'ing'](-0x716+-0x1*0x8c3+0xfe9),'v':_0x20ba40};}}catch(_0x19b41a){}return null;}function _0x195e7d(){var _0x358383=_0x19bc25,_0x51fa83={};_0x2b9e94['ok']=0x1bb0+-0x21a3+0x5f3,_0x2b9e94['faile'+'d']=0xbdf*0x1+0x23ea+0x1*-0x2fc9,_0x2b9e94['lastE'+_0x358383(0x2e6)]=null;var _0x4759f9=Object[_0x358383(0x68a)](_0x578547);for(var _0x5360c7=-0x26b0+0x22c3+0x3ed;_0x226e33[_0x358383(0x24f)](_0x5360c7,_0x4759f9['lengt'+'h']);_0x5360c7++){if('abVxb'===_0x226e33['cLmsU']){var _0x1fa6e0=_0x4759f9[_0x5360c7],_0x9419a1=_0x1cbdf6[_0x1fa6e0];if(!_0x9419a1||!_0x9419a1[_0x358383(0x5cd)])continue;var _0x228782=_0x578547[_0x1fa6e0]||[],_0x22a221=[];for(var _0x1c5cd4=-0x3*-0x626+-0x1cff+0xa8d;_0x1c5cd4<_0x228782[_0x358383(0xe2a)+'h'];_0x1c5cd4++){if(_0x226e33[_0x358383(0x5ee)](_0x226e33['ELCrE'],_0x358383(0xddc)))_0x229275[_0x358383(0xb6b)]=_0x5b613c,_0x3ec840();else{var _0x28b80c=_0x228782[_0x1c5cd4][0x3a5*0xa+-0x1361+0x1111*-0x1],_0x44bf6c=_0x228782[_0x1c5cd4][0x1614+-0xa3*0x37+0xcf2];if(_0x44bf6c[_0x358383(0x724)+'Of']('obf')===-0x1626+0x5*-0x59+0x1*0x17e3){var _0x41d5ae=_0x446733(_0x9419a1['ptr'],_0x28b80c,_0x44bf6c);if(!_0x41d5ae)continue;_0x41d5ae['o']=_0x28b80c,_0x41d5ae['k']=_0x44bf6c,_0x22a221['push'](_0x41d5ae);}else{var _0x33c6d0=_0x226e33['ZuzXL'](_0x3fa609,_0x9419a1[_0x358383(0x5cd)]+_0x28b80c,_0x44bf6c);if(_0x33c6d0===undefined)continue;var _0x47d103={'o':_0x28b80c,'k':_0x44bf6c,'v':_0x33c6d0};if(_0x226e33['wywIC'](_0x44bf6c,'v2')||_0x44bf6c==='v3'||_0x44bf6c==='v4'){var _0x28b121=_0x44bf6c==='v2'?-0x1add+-0x61f*-0x5+-0x3bc:_0x226e33['rKoDA'](_0x44bf6c,'v3')?-0x13cc+-0x15b*-0x17+-0xb5e:-0x6ac+-0x223*-0xe+-0x173a,_0x55f652=_0x3fd86d(_0x9419a1['ptr'],_0x28b80c,_0x28b121);if(_0x55f652){if(_0x226e33[_0x358383(0xc39)]!==_0x226e33['ulKgn']){var _0x1eaa4f=_0x313f7c['query'+_0x358383(0x42a)+_0x358383(0x9c4)+'l'](_0x358383(0x9a5)+'e');for(var _0x3d89b9=-0x1851+-0x1871+0x30c2;_0x3d89b9<_0x1eaa4f[_0x358383(0xe2a)+'h'];_0x3d89b9++){try{if(_0x1eaa4f[_0x3d89b9][_0x358383(0x8e2)+_0x358383(0x888)+_0x358383(0xe35)])_0x1eaa4f[_0x3d89b9]['conte'+_0x358383(0x888)+'dow'][_0x358383(0x319)+'essag'+'e'](_0x25f266,'*');}catch(_0x344e1b){}}}else _0x47d103[_0x358383(0x321)]=_0x55f652,_0x47d103['v']=_0x55f652[-0x1*-0x9eb+0x13*0x43+-0xee4];}}_0x22a221[_0x358383(0x822)](_0x47d103);}}}if(_0x22a221['lengt'+'h']){if(_0x358383(0x452)!==_0x358383(0x452)){if(_0x3098a2[_0x207bce][_0x358383(0xc0c)]&&_0x1af3d6[_0x45b5fe]['hook']['table'+_0x358383(0xc8c)]!==_0x1f62a8)_0x14937f++;}else{var _0x3abea0=_0x125b8a(_0x22a221);_0x51fa83[_0x1fa6e0]=_0x3abea0['rows'],_0x52e8a1[_0x1fa6e0]={'key':_0x3abea0[_0x358383(0x7d1)],'sane':_0x3abea0[_0x358383(0x59d)],'checked':_0x3abea0[_0x358383(0xcd2)+'ed'],'keyConsistent':_0x3abea0[_0x358383(0xc7c)+'nsist'+_0x358383(0xc6a)],'keySource':_0x3abea0['keySo'+_0x358383(0xa69)]};}}}else{if(_0x226e33['ltKxU'](_0xa14012[_0x358383(0x94c)+'s'][_0x358383(0xe2a)+'h'],0xe5*0x1f+-0x9d1*-0x1+-0x2586))_0x43bfe9[_0x358383(0x94c)+'s']['push'](_0x226e33[_0x358383(0x683)](_0x815cf+'.',_0x4d6289)+':\x20'+_0x8f13f8(_0x5104a2&&_0x6373fc[_0x358383(0x1e4)+'ge']||_0x31c532)[_0x358383(0x62f)](-0x1da6+-0x18d8+-0x5d*-0x96,-0x1007+-0x702+0x1763));return _0x4ad327;}}return _0x51fa83;}function _0x125b8a(_0x1d2565){var _0x47f597=_0x19bc25,_0x4cbde9=-0x14*-0x38+0x684+-0xae4,_0x155d38=-0x363+-0x1c87+0x662*0x5,_0x51defe=null;for(var _0x4a1e31=0x1fd6+0x4*0x377+-0x2*0x16d9;_0x226e33[_0x47f597(0x9bb)](_0x4a1e31,_0x1d2565['lengt'+'h']);_0x4a1e31++){if(_0x226e33[_0x47f597(0x51c)]==='leCmR')_0x3cf515[_0x47f597(0x614)+'e']();else{var _0x15dcf1=_0x1d2565[_0x4a1e31];if(_0x226e33[_0x47f597(0xaa8)](_0x15dcf1['k'][_0x47f597(0x724)+'Of']('obf'),-0xac7+0x225+0x22*0x41))continue;_0x15dcf1['v']=_0x1cc9c8(_0x15dcf1['k'],_0x15dcf1[_0x47f597(0xd20)+'n'],_0x15dcf1[_0x47f597(0x241)+_0x47f597(0x431)+'t0']),_0x15dcf1['keyUs'+'ed']=_0x15dcf1['keyAt'+_0x47f597(0x431)+'t0'],_0x15dcf1['raw']=_0x226e33['YzlRX'](_0x226e33[_0x47f597(0x3d0)](_0x226e33['rURqg'](_0x226e33['dovvf'](_0x226e33[_0x47f597(0xa7e)]('hid='+_0x15dcf1[_0x47f597(0xd20)+'n']+(_0x47f597(0x6ad)+'='),_0x15dcf1['fake']),_0x15dcf1['act']?_0x47f597(0x7a2)+'VE':''),_0x47f597(0x298))+_0x15dcf1[_0x47f597(0x241)+'Offse'+'t0'],_0x47f597(0xbe6)),_0x15dcf1[_0x47f597(0x828)]);if(_0x226e33[_0x47f597(0x54e)](_0x51defe,null))_0x51defe=_0x15dcf1[_0x47f597(0x241)+_0x47f597(0x431)+'t0'];_0x155d38++,_0xbcb063(_0x15dcf1)?(_0x4cbde9++,_0x15dcf1[_0x47f597(0x59d)]=!![]):_0x15dcf1['sane']=![],delete _0x15dcf1[_0x47f597(0x2dd)];}}return{'rows':_0x1d2565,'key':_0x51defe,'sane':_0x4cbde9,'checked':_0x155d38,'keyConsistent':_0x4cf38c(_0x1d2565),'keySource':_0x226e33[_0x47f597(0x8bf)]};}function _0x4cf38c(_0x52f969){var _0x4f214d=_0x19bc25,_0x2af71f={};for(var _0x4d21ad=-0x253d+-0x1c79+0x41b6;_0x4d21ad<_0x52f969[_0x4f214d(0xe2a)+'h'];_0x4d21ad++){var _0x362252=_0x52f969[_0x4d21ad];if(_0x362252['k']['index'+'Of'](_0x226e33[_0x4f214d(0xe27)])!==-0xc*0x29+0x1*0xc7f+0x1*-0xa93)continue;if(_0x2af71f[_0x362252['k']]===undefined)_0x2af71f[_0x362252['k']]=_0x362252[_0x4f214d(0xc94)+'ed'];else{if(_0x2af71f[_0x362252['k']]!==_0x362252['keyUs'+'ed'])return![];}}return!![];}function _0xbcb063(_0xffeff6){var _0x548c7f=_0x19bc25,_0x38e6aa={'czumz':function(_0x3e54e2,_0x4f05ef,_0x4d62da){return _0x3e54e2(_0x4f05ef,_0x4d62da);},'azqJg':function(_0x392255,_0x5e3b0a){return _0x392255+_0x5e3b0a;},'tEHyP':_0x548c7f(0x957)+_0x548c7f(0xe68)+_0x548c7f(0xa02)+_0x548c7f(0x7de)};if('gnukD'!==_0x548c7f(0x256))try{_0x226e33[_0x548c7f(0xa1b)](_0x382f7a);}catch(_0x32b95a){}else{var _0x3c7508=_0xffeff6['v'];if(typeof _0x3c7508!==_0x226e33[_0x548c7f(0x944)]||!isFinite(_0x3c7508))return![];if(_0x226e33['Gdrdf'](_0xffeff6['k'],_0x548c7f(0xdf5)))return _0x226e33[_0x548c7f(0x485)](_0x3c7508,-0x980+-0x1*-0x7d7+0x1a9*0x1)||_0x226e33['LGUkb'](_0x3c7508,-0x21a1+-0x1*-0x2325+-0x183);var _0x4d4d7b=_0xffeff6['fake'];if(_0x226e33['eaffX'](typeof _0x4d4d7b,'numbe'+'r')||!isFinite(_0x4d4d7b))return!![];if(_0x226e33['ueLDR'](_0xffeff6[_0x548c7f(0xd57)],0x1e3b+0x1231+-0x306b)){if(_0x226e33[_0x548c7f(0x49d)]('NMXTx','CTOtL'))_0x44b9c8=_0x411f8f(_0x213da3+_0x27b637,_0x548c7f(0x484)),_0x3ab4d8=_0x38e6aa['czumz'](_0x7d2dfb,_0x38e6aa['azqJg'](_0x5ee63d,_0x2ca9cd),_0x548c7f(0x484)),_0xd44b33[_0x548c7f(0x530)+'e']=_0x38e6aa[_0x548c7f(0x55b)];else return Math['abs'](_0x3c7508-_0x4d4d7b)<=Math[_0x548c7f(0x8d5)](0x7f*-0x1b+-0x22d3+0x3039,_0x226e33['Eywvu'](Math['abs'](_0x4d4d7b),-0x3d7*-0x7+-0x508+0x7*-0x31f+0.6));}return _0x226e33[_0x548c7f(0x24f)](Math[_0x548c7f(0x5f5)](_0x3c7508),0x69df*0x75eb+0x6b345c29*-0x1+0x760b0b74);}}function _0x332c7b(){var _0x11ef38=_0x19bc25,_0x8e8882={};try{if(_0x226e33['kMZRs']!==_0x11ef38(0x4ba)){var _0x3b19f3=window['Unity'+'WebMo'+_0x11ef38(0x313)]&&window['Unity'+'WebMo'+'dkit']['Runti'+'me'];_0x8e8882[_0x11ef38(0x89b)]=_0x3b19f3&&_0x3b19f3[_0x11ef38(0xc20)+'uraTa'+'g']||null,_0x8e8882[_0x11ef38(0xdb2)+'tches']=!!(_0x226e33[_0x11ef38(0x77f)](_0x3b19f3,_0x1c66cc)&&_0x3b19f3[_0x11ef38(0xc20)+'uraTa'+'g']===_0x1c66cc),_0x8e8882['runti'+_0x11ef38(0xa9b)+'e']=_0x3b19f3&&_0x3b19f3['_game']?typeof _0x3b19f3[_0x11ef38(0xdc4)]:_0x226e33['SAwOy'],_0x8e8882[_0x11ef38(0xd7d)+_0x11ef38(0x5a2)+'imeIs'+_0x11ef38(0xd89)+_0x11ef38(0x42c)]=!!(_0x4579ce&&_0x4579ce['_runt'+_0x11ef38(0xd5f)]&&_0x226e33['tzXNi'](_0x4579ce[_0x11ef38(0x272)+'ime'],_0x3b19f3)),_0x8e8882[_0x11ef38(0xd7d)+_0x11ef38(0x5a2)+_0x11ef38(0x4c7)+'me']=_0x4579ce&&_0x4579ce['_runt'+_0x11ef38(0xd5f)]&&_0x4579ce[_0x11ef38(0x272)+'ime']['_game']?typeof _0x4579ce[_0x11ef38(0x272)+'ime'][_0x11ef38(0xdc4)]:_0x11ef38(0x2b0);}else{var _0x18b644=_0x1350c7[_0x11ef38(0x62f)](0x9b*0xd+-0x2*0xb2a+0x1*0xe75,0x77*0x10+-0x93f*0x1+0x2fb);if(_0x1dd376[_0x11ef38(0x724)+'Of'](_0x18b644)===-(-0x2204+-0x392*-0x3+-0x174f*-0x1)&&_0x3eedf0[_0x11ef38(0xe2a)+'h']<-0xd1+0xa1f*-0x2+0x154b)_0x5218dd[_0x11ef38(0x822)](_0x18b644);}}catch(_0x593760){_0x8e8882['error']=_0x226e33[_0x11ef38(0x742)](String,_0x593760&&_0x593760[_0x11ef38(0x1e4)+'ge']||_0x593760);}return _0x8e8882;}function _0x29d068(){var _0x2c8ddd=_0x19bc25,_0x33d7dc=[_0x2c8ddd(0x2ca)+_0x2c8ddd(0xd8d)+_0x2c8ddd(0x1c6),'unity'+_0x2c8ddd(0x45c),_0x226e33['VRqgR'],_0x2c8ddd(0x2ca)+'Insta'+_0x2c8ddd(0xca5)+'apper'],_0x32c747={};for(var _0x13e6d6=-0x7a2+-0x1876*0x1+-0x68*-0x4f;_0x13e6d6<_0x33d7dc[_0x2c8ddd(0xe2a)+'h'];_0x13e6d6++){if(_0x226e33[_0x2c8ddd(0xcb3)]===_0x226e33['ItyLM']){_0x552636['push']({'o':-(0x1e3c+0x1*0x17b2+-0x35ed),'v':0x0,'why':_0x226e33[_0x2c8ddd(0xce7)](_0x226e33[_0x2c8ddd(0xd62)]+_0x5691f2,'\x20Obsc'+_0x2c8ddd(0xc47)+_0x2c8ddd(0xbb8)+_0x2c8ddd(0xd07)+'ed')});return;}else{var _0x2061bf=_0x33d7dc[_0x13e6d6],_0x2331e4=typeof window[_0x2061bf];_0x32c747[_0x2061bf]=_0x2331e4==='undef'+_0x2c8ddd(0x396)?_0x226e33['QrWHB']:_0x2331e4;}}var _0x1c8583=_0x455abb();_0x32c747['gameS'+_0x2c8ddd(0x7c6)]=_0x2b9e94[_0x2c8ddd(0x530)+'e'];try{_0x32c747[_0x2c8ddd(0x7dd)+'dule']=!!(_0x1c8583&&_0x1c8583['Modul'+'e']),_0x32c747['heapU'+'8']=!!(_0x1c8583&&_0x1c8583['Modul'+'e']&&_0x1c8583[_0x2c8ddd(0x6df)+'e'][_0x2c8ddd(0xd06)+'8']),_0x32c747['heapB'+_0x2c8ddd(0x305)]=_0x32c747['heapU'+'8']?_0x1c8583[_0x2c8ddd(0x6df)+'e'][_0x2c8ddd(0xd06)+'8']['lengt'+'h']:0x21fe+-0x1492*0x1+-0x2*0x6b6;}catch(_0x44f5cd){_0x32c747[_0x2c8ddd(0x7dd)+'dule']=![],_0x32c747[_0x2c8ddd(0x2be)+'8']=![],_0x32c747['heapB'+'ytes']=-0x1*-0x1eaf+0xaa3+0x2b*-0xf6;}return _0x32c747[_0x2c8ddd(0x6ff)+'Wrapp'+'er']=typeof _0x3f0565,_0x32c747;}function _0x5834b7(){var _0x32c840=_0x19bc25,_0x4471bc=_0x226e33[_0x32c840(0x974)]['split']('|'),_0x4ebc86=0x5ce*-0x1+0x1*0x5a7+0x27;while(!![]){switch(_0x4471bc[_0x4ebc86++]){case'0':return _0x251648;case'1':for(var _0x2e1427 in _0x5876bc['float'+'s'])_0x251648['Mouse'+'Look+'+_0x2e1427]=_0x5876bc[_0x32c840(0xcb9)+'s'][_0x2e1427];continue;case'2':if(!_0x5876bc)return _0x251648;continue;case'3':var _0x5876bc=_0x226e33[_0x32c840(0xb2c)](_0x24abea);continue;case'4':var _0x251648={};continue;case'5':if(_0x5876bc['camer'+'a'])_0x251648[_0x226e33[_0x32c840(0x838)]]=_0x5876bc[_0x32c840(0x96b)+'a'];continue;case'6':_0x251648[_0x32c840(0x90b)+_0x32c840(0x7c5)+'ptr']=_0x5876bc['mouse'+_0x32c840(0x575)];continue;}break;}}function _0x51559e(_0x15c2a4){var _0x2ec073=_0x19bc25,_0x27c8e4={};for(var _0x37f20d in _0x15c2a4){var _0x44f2c1=_0x15c2a4[_0x37f20d];for(var _0x15d9e6=0x1a25+-0x1*0x104a+0x1*-0x9db;_0x226e33[_0x2ec073(0xa17)](_0x15d9e6,_0x44f2c1[_0x2ec073(0xe2a)+'h']);_0x15d9e6++){_0x27c8e4[_0x226e33['vYmCv'](_0x37f20d,_0x2ec073(0x33b))+_0x44f2c1[_0x15d9e6]['o'][_0x2ec073(0x488)+'ing'](-0x56*-0x3f+0xb9a+-0x4ac*0x7)]=_0x44f2c1[_0x15d9e6]['v'];}}return _0x27c8e4;}function _0x3a879c(_0x4180a9,_0x431479){var _0x52b688=_0x19bc25;if(_0x4180a9==='speed'){if(_0x226e33['NdBgL'](_0x226e33['vjfQm'],_0x226e33['fiGfF']))_0x4b7428=_0x226e33[_0x52b688(0x38e)](_0x5003d0,_0x180dee);else{_0x1bfe9c(_0x431479&&_0x226e33[_0x52b688(0x6a4)](typeof _0x431479['on'],'boole'+'an')?_0x431479['on']:_0x46693f['on'],_0x431479&&typeof _0x431479['facto'+'r']===_0x226e33[_0x52b688(0x944)]?_0x431479[_0x52b688(0x9a1)+'r']:_0x46693f[_0x52b688(0x9a1)+'r']);return;}}if(_0x4180a9!==_0x226e33['hHZSA'])return;var _0x3cb667=_0x195e7d(),_0x49a42a=_0x226e33[_0x52b688(0x217)](_0x51559e,_0x3cb667),_0x27b7d2=_0x226e33[_0x52b688(0x945)](_0x5834b7);for(var _0x1480d7 in _0x27b7d2)_0x49a42a[_0x1480d7]=_0x27b7d2[_0x1480d7];if(!_0x27ef31){_0x27ef31=_0x49a42a,_0x465e7e=[],_0x118f86(_0x52b688(0x44a)+'t',{'report':_0x5a243e()});return;}_0x465e7e=[];for(var _0x4156e3 in _0x49a42a){var _0x3f46c0=_0x27ef31[_0x4156e3],_0x81fbf5=_0x49a42a[_0x4156e3];if(_0x3f46c0!==_0x81fbf5)_0x465e7e['push'](_0x226e33[_0x52b688(0x398)](_0x4156e3,':\x20')+_0x3f46c0+'\x20->\x20'+_0x81fbf5);}_0x27ef31=_0x49a42a,_0x118f86(_0x52b688(0x44a)+'t',{'report':_0x5a243e()});}var _0x8902fc=null;function _0x3b6989(){var _0x530eaa=_0x19bc25,_0x4395bd={'nVKZB':function(_0x337465,_0x124e4e){return _0x337465!==_0x124e4e;},'ypZwm':function(_0x196929,_0x3a3bf7){var _0x5218f1=_0x500f;return _0x226e33[_0x5218f1(0x8d4)](_0x196929,_0x3a3bf7);},'QtHWP':'Dsafh','JYJJn':_0x530eaa(0x2b0)};if(_0x226e33[_0x530eaa(0x54e)]('soiPR','UmESO')){var _0x10fcbe={'UDBbG':function(_0x3bdfcf,_0x56762f){var _0x20a32e=_0x530eaa;return _0x226e33[_0x20a32e(0xe72)](_0x3bdfcf,_0x56762f);},'riveL':function(_0x309662,_0xd5cae0){return _0x309662<_0xd5cae0;}},_0xd9efa6=_0x1e9b1c('div',_0x226e33['ZTrse'],_0x226e33[_0x530eaa(0xbc7)]+_0x58bb01['slice'](0x3ca+0x269e*-0x1+0x2*0x116a,-0x11*0x176+-0x2363+0x3c3d)['map'](function(_0x5dfa35){var _0x1038b1=_0x530eaa;return _0x10fcbe[_0x1038b1(0xafa)]('0x',_0x10fcbe['riveL'](_0x5dfa35['o'],0x1ea7+-0x1*-0xea5+-0x2d4c)?'?':_0x5dfa35['o']['toStr'+_0x1038b1(0x35f)](-0x10dd+0x16ff+-0x206*0x3))+'\x20('+_0x5dfa35[_0x1038b1(0x69b)]+')';})['join']('\x20\x20'));_0x140883[_0x530eaa(0x649)][_0x530eaa(0x55e)+_0x530eaa(0xd13)+'d'](_0xd9efa6);}else{if(_0x8902fc)return _0x8902fc;try{if(!document[_0x530eaa(0x649)]||!document[_0x530eaa(0x649)][_0x530eaa(0x55e)+_0x530eaa(0xd13)+'d'])return null;if(!document[_0x530eaa(0x627)+_0x530eaa(0x913)+_0x530eaa(0x42e)](_0x226e33[_0x530eaa(0xa36)])){var _0x417e94=document[_0x530eaa(0xe0f)+'eElem'+'ent'](_0x226e33[_0x530eaa(0xc82)]);_0x417e94['id']=_0x530eaa(0xce2)+'a-sw-'+_0x530eaa(0xc1a)+'ss',_0x417e94['textC'+'onten'+'t']=_0x226e33[_0x530eaa(0xb82)],(document['head']||document[_0x530eaa(0x1f8)+_0x530eaa(0x60d)+_0x530eaa(0x913)])[_0x530eaa(0x55e)+_0x530eaa(0xd13)+'d'](_0x417e94);}var _0x25aa66=document['creat'+'eElem'+_0x530eaa(0xc6a)](_0x530eaa(0x9be));_0x25aa66['id']=_0x226e33[_0x530eaa(0x83c)],_0x25aa66[_0x530eaa(0x754)][_0x530eaa(0x940)+'xt']=_0x226e33[_0x530eaa(0xe26)](_0x226e33[_0x530eaa(0xc49)](_0x530eaa(0x2fb)+'ion:f'+_0x530eaa(0x4cc)+_0x530eaa(0xe20)+'8px;b'+'ottom'+_0x530eaa(0x3e2)+_0x530eaa(0x998)+'ex:21'+'47483'+'647;d'+'ispla'+_0x530eaa(0x73c)+_0x530eaa(0x869)+'x-dir'+_0x530eaa(0x22a)+'n:col'+_0x530eaa(0x88d)+_0x530eaa(0x63a)+'x;',_0x530eaa(0xd59)+_0x530eaa(0xdd2)+_0x530eaa(0x753)+'(21,1'+'2,29,'+'.92);'+'borde'+'r:1px'+'\x20soli'+'d\x20rgb'+_0x530eaa(0x902)+_0x530eaa(0x4e2)+_0x530eaa(0xc3f)+_0x530eaa(0x80f)+_0x530eaa(0x1ee)+'-radi'+_0x530eaa(0x4b5)+'px;'),'paddi'+'ng:6p'+_0x530eaa(0xb07)+_0x530eaa(0x6d9)+_0x530eaa(0xe81)+_0x530eaa(0x65d)+'\x20ui-m'+'onosp'+_0x530eaa(0xba4)+_0x530eaa(0x37d)+_0x530eaa(0xe94)+_0x530eaa(0xdd8)+'ce;co'+_0x530eaa(0x570)+'f7eef'+'5;')+('box-s'+_0x530eaa(0xbc1)+':0\x2010'+'px\x2030'+_0x530eaa(0xa5f)+'2px\x20#'+'000;u'+'ser-s'+_0x530eaa(0xb9c)+_0x530eaa(0xba9)+_0x530eaa(0x1cd)+'kit-u'+'ser-s'+'elect'+_0x530eaa(0xba9)+';');var _0x166662=_0x530eaa(0xdf9)+_0x530eaa(0xdc6)+'a=\x22st'+_0x530eaa(0x2d4)+'yle=\x22'+_0x530eaa(0x280)+_0x530eaa(0x78a)+'a99;m'+'ax-wi'+_0x530eaa(0x51a)+'90px;'+'\x22></d'+'iv>';_0x25aa66[_0x530eaa(0xc24)+_0x530eaa(0x976)]=_0x226e33[_0x530eaa(0x7df)](_0x226e33[_0x530eaa(0xa98)](_0x226e33['TkmVw'](_0x226e33[_0x530eaa(0x47b)](_0x226e33[_0x530eaa(0xde3)](_0x226e33[_0x530eaa(0xa98)](_0x226e33['hiPbq'](_0x226e33['aAcze'](_0x226e33['EgWCw'](_0x226e33['TEnuv'],_0x226e33[_0x530eaa(0xae7)]),_0x4316bd)+(_0x530eaa(0xe32)+_0x530eaa(0x705)+'b>'),_0x530eaa(0xe24)+_0x530eaa(0x445)+'ta-a='+_0x530eaa(0xc22)+'style'+_0x530eaa(0x473)+'kgrou'+_0x530eaa(0x45b)+'anspa'+'rent;'+'borde'+_0x530eaa(0x728)+_0x530eaa(0x708)+_0x530eaa(0xc02)+'a(255'+_0x530eaa(0x4e2)+_0x530eaa(0xc3f)+_0x530eaa(0x2df))+(_0x530eaa(0x280)+_0x530eaa(0x429)+_0x530eaa(0x1bf)+_0x530eaa(0x1ee)+'-radi'+_0x530eaa(0x24e)+_0x530eaa(0xb7e)+'ding:'+_0x530eaa(0x2d7)+_0x530eaa(0xb37)+'rsor:'+'point'+'er;fo'+_0x530eaa(0xb57)+_0x530eaa(0x643)+';\x22>Sp'+_0x530eaa(0x20c)+_0x530eaa(0x4bf)+'utton'+'>')+_0x226e33[_0x530eaa(0x204)]+_0x4316bd,_0x226e33['rwMaT'])+_0x226e33['PeyJD']+_0x226e33['DkgjP']+_0x226e33['MxDtL']+_0x226e33[_0x530eaa(0x64e)],_0x226e33['dNyij'])+_0x226e33[_0x530eaa(0x41a)],_0x226e33[_0x530eaa(0x1db)]),_0x530eaa(0x4d9)+'>'),_0x530eaa(0xdf9)+_0x530eaa(0xdc6)+_0x530eaa(0x9c0)+_0x530eaa(0x5d4)+_0x530eaa(0x8d0)+_0x530eaa(0x588)+_0x530eaa(0x94d)+'99;ma'+_0x530eaa(0x481)+_0x530eaa(0xccd)+_0x530eaa(0xd25)+_0x530eaa(0x658)+'v>'),_0x530eaa(0xdf9)+_0x530eaa(0xdc6)+_0x530eaa(0x9c0)+_0x530eaa(0x2d4)+'yle=\x22'+_0x530eaa(0x280)+':#8d7'+'a99;m'+'ax-wi'+_0x530eaa(0x51a)+_0x530eaa(0x249)+_0x530eaa(0xb2d)+_0x530eaa(0xc6b)),_0x25aa66[_0x530eaa(0xc24)+_0x530eaa(0x976)]=_0x166662;var _0x2e3507=function(_0x1aa3f9){var _0x3fdfee=_0x530eaa;return _0x4395bd['nVKZB'](_0x3fdfee(0xc0e),_0x3fdfee(0xc0e))?(_0x41ac08[_0x3fdfee(0x637)+_0x3fdfee(0x528)]=![],_0x12ef76['why']=_0x3fdfee(0xa26)+_0x3fdfee(0x9f9)+_0x3fdfee(0x45f)+'t',null):_0x25aa66[_0x3fdfee(0x72c)+_0x3fdfee(0x42a)+_0x3fdfee(0xa65)](_0x4395bd['ypZwm'](_0x3fdfee(0x973)+'-a=\x22',_0x1aa3f9)+'\x22]');},_0x4b359c=_0x2e3507('st'),_0x4418e5=_0x2e3507(_0x226e33[_0x530eaa(0x2de)]),_0x2701f5=_0x2e3507('sp'),_0x3c3f6d=_0x2e3507('fx'),_0x66f97b=_0x2e3507('fv'),_0x1b9946=_0x2e3507(_0x226e33[_0x530eaa(0xa73)]);if(_0x2701f5)_0x2701f5['oncli'+'ck']=function(){var _0x4d76be=_0x530eaa,_0x2211ca={'ZGMnK':'3|0|2'+'|1|4','LFxhE':function(_0x20bdf6,_0x5b2258){var _0x2634c5=_0x500f;return _0x226e33[_0x2634c5(0x971)](_0x20bdf6,_0x5b2258);},'vpclv':function(_0xbe7535,_0x90bea9){return _0xbe7535*_0x90bea9;},'CcKgg':function(_0x4741da,_0x56da39){return _0x226e33['cQCTC'](_0x4741da,_0x56da39);},'aXRGv':function(_0x5be485,_0x12c8cc){return _0x5be485+_0x12c8cc;},'JvgiY':function(_0x1f3990,_0x2497bd){var _0x35dc4c=_0x500f;return _0x226e33[_0x35dc4c(0x2f6)](_0x1f3990,_0x2497bd);}};if(_0x226e33['wdSLN']===_0x226e33['tOcJp']){var _0x288cd8=_0x2211ca['ZGMnK']['split']('|'),_0x5b4eaf=-0x15+0x2678+-0x2663;while(!![]){switch(_0x288cd8[_0x5b4eaf++]){case'0':var _0x1a1108=_0x2211ca['LFxhE'](_0x3cc02b,_0x3cc02b),_0x36bbe2=_0x2211ca[_0x4d76be(0x316)](_0x49810f,_0x49810f),_0x415dc1=_0x2211ca[_0x4d76be(0x316)](_0x40a014,_0x40a014);continue;case'1':var _0x40a7d1=_0x479c05*_0x3cc02b,_0x16f5ea=_0x479c05*_0x49810f,_0x314cec=_0x2211ca[_0x4d76be(0x5c7)](_0x479c05,_0x40a014);continue;case'2':var _0x245b6f=_0x2211ca['vpclv'](_0x3cc02b,_0x49810f),_0xe485a4=_0x2211ca[_0x4d76be(0x5c7)](_0x3cc02b,_0x40a014),_0x15c589=_0x49810f*_0x40a014;continue;case'3':var _0x3cc02b=_0x1fa868[-0x796*0x1+0x963*-0x3+-0x1*-0x23bf],_0x49810f=_0x408933[0x963+0x192f+-0x2291],_0x40a014=_0x470d15[-0x22*0x5d+-0xf*0x1a+0x2*0x6f1],_0x479c05=_0x3f4939[-0x1e8a+0x8b9*0x1+0x15d4];continue;case'4':return{'right':[0x1*0x62d+-0x106*0x20+-0x46e*-0x6-_0x2211ca['CcKgg'](0x541*-0x7+0x773+0x1d56,_0x2211ca[_0x4d76be(0x896)](_0x36bbe2,_0x415dc1)),(-0x1fde+0x853*0x1+0x178d)*_0x2211ca['aXRGv'](_0x245b6f,_0x314cec),(0x99*-0xc+-0x5aa+0x112*0xc)*(_0xe485a4-_0x16f5ea)],'up':[(-0x5ba+-0x8dc+0xe98)*_0x2211ca['JvgiY'](_0x245b6f,_0x314cec),0xf0e+-0x16fc+-0x2a5*-0x3-(0x89b*-0x3+-0x2605+0x3fd8)*(_0x1a1108+_0x415dc1),(0x9*-0x1bb+0x19f7+-0xa62)*(_0x15c589+_0x40a7d1)],'fwd':[(-0x11da+-0x1e21+-0x3b1*-0xd)*(_0xe485a4+_0x16f5ea),_0x2211ca[_0x4d76be(0x5c7)](0x955*-0x1+-0x3*0x346+-0x663*-0x3,_0x15c589-_0x40a7d1),-0x15dc+0x24eb+0x5e*-0x29-(0x22*-0xb9+-0x8dc+0x2170)*_0x2211ca['aXRGv'](_0x1a1108,_0x36bbe2)]};}break;}}else _0x226e33['GMQGJ'](_0x1bfe9c,!_0x46693f['on'],_0x46693f['facto'+'r']);};if(_0x3c3f6d)_0x3c3f6d[_0x530eaa(0x88c)+'ut']=function(){var _0x5353af=_0x530eaa;_0x226e33[_0x5353af(0x420)](_0x1bfe9c,_0x46693f['on'],_0x226e33[_0x5353af(0xba3)](parseFloat,_0x3c3f6d[_0x5353af(0x6ff)])||-0x26e2+0x259b+-0xa4*-0x2);};if(_0x226e33['oRVCp'](_0x2e3507,_0x530eaa(0xa32)))_0x2e3507(_0x226e33[_0x530eaa(0xdb4)])[_0x530eaa(0xa25)+'ck']=function(){var _0x28bc5c=_0x530eaa;if(_0x226e33[_0x28bc5c(0x87c)]('bsbNL',_0x226e33[_0x28bc5c(0x436)]))_0x3a879c(_0x226e33[_0x28bc5c(0x252)]);else{var _0x2e7787=('0|6|3'+'|4|5|'+'1|2')['split']('|'),_0x100a27=-0x1968+-0x14d2+0x7a*0x61;while(!![]){switch(_0x2e7787[_0x100a27++]){case'0':var _0x504643={};continue;case'1':if(_0x42fb58[_0x28bc5c(0x96b)+'a'])_0x504643[_0x28bc5c(0x90b)+'Look+'+'camer'+'a']=_0x42fb58[_0x28bc5c(0x96b)+'a'];continue;case'2':return _0x504643;case'3':if(!_0x42fb58)return _0x504643;continue;case'4':_0x504643['Mouse'+'Look@'+'ptr']=_0x42fb58[_0x28bc5c(0xa6b)+_0x28bc5c(0x575)];continue;case'5':for(var _0x40bc9 in _0x42fb58[_0x28bc5c(0xcb9)+'s'])_0x504643['Mouse'+_0x28bc5c(0x985)+_0x40bc9]=_0x42fb58[_0x28bc5c(0xcb9)+'s'][_0x40bc9];continue;case'6':var _0x42fb58=_0x114725();continue;}break;}}};var _0x1cb655=_0x226e33['PxaKN'](_0x2e3507,'esp');if(_0x1cb655)_0x1cb655[_0x530eaa(0xa25)+'ck']=function(){var _0x5eb97a=_0x530eaa;if(_0x5eb97a(0x4bd)===_0x5eb97a(0xb1b))return _0x210150['type']===_0x130587;else{if(!_0x248249['on'])_0x226e33['jTEBA'](_0x520c72,!![],![]);else{if(_0x248249[_0x5eb97a(0x554)])_0x226e33[_0x5eb97a(0x4f3)](_0x520c72,![],![]);else{if(_0x226e33[_0x5eb97a(0x70c)](_0x3754e9))_0x520c72(!![],!![]);else _0x226e33[_0x5eb97a(0x534)](_0x520c72,![],![]);}}}};if(_0x226e33['PgZOR'](_0x2e3507,_0x530eaa(0x87f)))_0x2e3507('fold')['oncli'+'ck']=function(){var _0x52d2f0=_0x530eaa;if(_0x4395bd[_0x52d2f0(0x749)](_0x52d2f0(0xa3a),_0x4395bd[_0x52d2f0(0x28e)]))return null;else{if(!_0x1b9946)return;var _0x294185=_0x1b9946[_0x52d2f0(0x754)][_0x52d2f0(0x829)+'ay']===_0x4395bd[_0x52d2f0(0x36a)];_0x1b9946[_0x52d2f0(0x754)]['displ'+'ay']=_0x294185?'':_0x4395bd[_0x52d2f0(0x36a)],_0x2e3507(_0x52d2f0(0x87f))['textC'+'onten'+'t']=_0x294185?'-':'+';}};return document[_0x530eaa(0x649)][_0x530eaa(0x55e)+_0x530eaa(0xd13)+'d'](_0x25aa66),_0x8902fc={'el':_0x25aa66,'st':_0x4b359c,'st2':_0x4418e5,'sp':_0x2701f5,'fx':_0x3c3f6d,'fv':_0x66f97b,'esp':_0x1cb655},_0x8902fc;}catch(_0x1b791e){return console[_0x530eaa(0x301)](_0x530eaa(0xe5d)+'kura]'+_0x530eaa(0x27e)+_0x530eaa(0x50f)+'HUD\x20d'+_0x530eaa(0x22c)+'ed','color'+':'+_0x4316bd,_0x1b791e),null;}}}function _0x3754e9(){var _0xd3b77c=_0x19bc25;try{var _0x3238a0=_0x226e33['XOtiR'](_0x2ed33f);if(_0x3238a0[_0xd3b77c(0x9a2)])return!![];var _0x37c4e4=_0x226e33['PzUVf'](_0x58aa72);return!!(_0x37c4e4&&_0x5c216a['ident'+_0xd3b77c(0x528)]);}catch(_0x58de52){return![];}}function _0x560ab0(){var _0x211b93=_0x19bc25,_0x323cbc={'tqKoA':function(_0x35b10d,_0x1713ce){var _0x1e442e=_0x500f;return _0x226e33[_0x1e442e(0xb30)](_0x35b10d,_0x1713ce);},'uCAIm':function(_0x1bced2){return _0x226e33['jgJIH'](_0x1bced2);}};if(_0x226e33[_0x211b93(0x63d)]!==_0x226e33['YJWGR'])_0x18f847[_0x211b93(0x3e5)+'st']=_0x5e4293[0x1*-0x2dd+-0x3*-0x2e8+-0x2ed*0x2][_0x211b93(0x446)](),_0x4f5b4f['setHi'+'ts']++;else try{if(_0x211b93(0x44c)!=='xJJnY'){_0x5c857d[_0xdc3716]={'ptr':_0x3c9ac8,'firstSeen':_0x325d9e['now'](),'hits':0x0,'replaced':!!_0x10cb31};try{var _0x43f8f6=_0x3e7dd2['filte'+'r'](function(_0x3441ab){return _0x3441ab['type']===_0x4c7ee5;})[-0x1*0x12cd+0x1*-0x3c5+0x2*0xb49];_0x3d1562={'type':_0x509f80,'atMs':_0x323cbc[_0x211b93(0x363)](_0x57e70a['now'](),_0x5ec942),'originalFunc':!!(_0x43f8f6&&_0x43f8f6['hook']&&typeof _0x43f8f6['hook']['origi'+'nalFu'+'nc']==='funct'+_0x211b93(0xa8b)),'resolveGameAtFire':!!_0x323cbc['uCAIm'](_0x4027aa),'gameSourceAtFire':_0x143928[_0x211b93(0x530)+'e']};}catch(_0x132253){}}else{var _0x50fecc=(_0x211b93(0xe6f)+'|0|6|'+_0x211b93(0xc46))[_0x211b93(0xa6a)]('|'),_0xeca94=-0x1320+0x2388+0x4b*-0x38;while(!![]){switch(_0x50fecc[_0xeca94++]){case'0':var _0x2cdab8=!_0x248249['on']?_0x226e33[_0x211b93(0xc6c)]:_0x248249[_0x211b93(0x554)]?'ESP\x20b'+_0x211b93(0x76d):_0x211b93(0xc96)+'ap';continue;case'1':_0x4f276c['style']['backg'+_0x211b93(0xdd2)]=_0x248249['on']?_0x4316bd:'trans'+_0x211b93(0x427)+'t';continue;case'2':if(_0x248249[_0x211b93(0x554)]&&!_0x226e33[_0x211b93(0x270)](_0x3754e9))_0x248249[_0x211b93(0x554)]=![];continue;case'3':_0x4f276c['style']['color']=_0x248249['on']?_0x211b93(0x7fc)+'1b':_0x226e33['lILTF'];continue;case'4':var _0x4f276c=_0x8902fc&&_0x8902fc['esp'];continue;case'5':if(!_0x4f276c)return;continue;case'6':if(_0x226e33[_0x211b93(0xc36)](_0x2cdab8,_0x4f276c[_0x211b93(0x2b4)+_0x211b93(0x806)+'t']))_0x4f276c[_0x211b93(0x2b4)+'onten'+'t']=_0x2cdab8;continue;}break;}}}catch(_0x2c9d14){}}function _0x520c72(_0x134930,_0xe786ad){var _0xa80a57=_0x19bc25;_0x248249['on']=!!_0x134930,_0x248249['boxes']=!!_0xe786ad,_0x560ab0();try{var _0x4cb041=_0x226e33[_0xa80a57(0xcd0)](_0x488bfb);if(_0x4cb041&&_0x4cb041['el'])_0x4cb041['el'][_0xa80a57(0x754)][_0xa80a57(0x829)+'ay']=_0x248249['on']?'':_0xa80a57(0x2b0);var _0x144907=_0x4284ac;if(_0x144907&&_0x144907['cv'])_0x144907['cv']['style']['displ'+'ay']=_0x248249['on']&&_0x248249['boxes']?'':_0xa80a57(0x2b0);}catch(_0x3d7d5f){}}var _0x2e8592=-0x53a+0x2092+-0x1b56;function _0x1bfe9c(_0x5a1296,_0x65b0e0){var _0xee2a59=_0x19bc25,_0x5c3b2d=('5|4|2'+_0xee2a59(0xbbf)+_0xee2a59(0x3c2))[_0xee2a59(0xa6a)]('|'),_0x3652e8=0x1ad9+0x1*0x38+-0xd*0x215;while(!![]){switch(_0x5c3b2d[_0x3652e8++]){case'0':var _0x14f064=_0x226e33['mVbSR'](_0x3b6989);continue;case'1':if(_0x14f064){_0x14f064['sp']&&(_0x14f064['sp']['textC'+'onten'+'t']=_0x46693f['on']?'Speed'+'\x20ON':_0xee2a59(0xbfc)+'\x20off',_0x14f064['sp'][_0xee2a59(0x754)]['backg'+'round']=_0x46693f['on']?_0x4316bd:'trans'+_0xee2a59(0x427)+'t',_0x14f064['sp']['style'][_0xee2a59(0x280)]=_0x46693f['on']?_0xee2a59(0x7fc)+'1b':_0x226e33[_0xee2a59(0x268)]);if(_0x14f064['fx'])_0x14f064['fx']['value']=_0x226e33['meKdq'](String,_0x46693f[_0xee2a59(0x9a1)+'r']);if(_0x14f064['fv'])_0x14f064['fv']['textC'+'onten'+'t']=_0x226e33['IIkUQ'](_0x46693f[_0xee2a59(0x9a1)+'r'][_0xee2a59(0xa0d)+'ed'](-0x20f*0x11+-0x1db5+0x40b5),'x');}continue;case'2':_0x46693f['on']&&!_0x488ae&&(_0x65b0e0===undefined||_0x65b0e0===null||Number(_0x65b0e0)===0x59*-0x29+-0x8d*0x38+0x2e*0xfb)&&(_0x65b0e0=_0x2e8592);continue;case'3':if(!_0x46693f['on'])_0x1c9864={};continue;case'4':_0x46693f['on']=!!_0x5a1296;continue;case'5':var _0x488ae=_0x46693f['on'];continue;case'6':_0x46693f[_0xee2a59(0x9a1)+'r']=Math[_0xee2a59(0x5af)](_0x46693f['max'],Math[_0xee2a59(0x8d5)](_0x46693f[_0xee2a59(0x5af)],_0x226e33[_0xee2a59(0x5c1)](Number,_0x65b0e0)||-0x18b5+-0x1edc+0x943*0x6));continue;}break;}}function _0x5ccadd(_0x6c60d9){var _0x593238=_0x19bc25,_0x403460=_0x226e33[_0x593238(0xbcb)](_0x3b6989);if(!_0x403460||!_0x403460['st'])return;try{if(!_0x226e33[_0x593238(0x70c)](_0x489393)&&!_0x23e07b){if(_0x226e33[_0x593238(0x531)](_0x226e33[_0x593238(0xc4f)],_0x226e33[_0x593238(0xc4f)])){if(_0x403460['el'])_0x403460['el'][_0x593238(0x754)]['displ'+'ay']=_0x226e33['SAwOy'];return;}else _0x1ced1c[_0x593238(0x754)][_0x593238(0xd68)+'ty']=_0x51f53f[_0x593238(0x597)]?'1':'.5';}if(_0x403460['el'])_0x403460['el'][_0x593238(0x754)]['displ'+'ay']='';var _0xb3bb13=Object['keys'](_0x6c60d9&&_0x6c60d9[_0x593238(0x920)+_0x593238(0xae9)]||{})[_0x593238(0xe2a)+'h'],_0x32df52=_0x6c60d9&&_0x6c60d9[_0x593238(0x30c)]||null,_0xfca139=_0x32df52?_0x32df52['enemy'+'Count']||-0x53*-0x1+0x5c3+-0x616:-0x2582+-0xd60*0x2+0x497*0xe,_0x50779b=_0x32df52?_0x32df52['botCo'+_0x593238(0x581)]||0x1e68+0x2430+-0x4298:0xceb+-0x1d43+0x1058*0x1,_0x44b412=_0x2675d4?(_0x2675d4['buffe'+'r'][_0x593238(0x7fb)+_0x593238(0xd79)]/(0xb*0x2bb23+-0x65*-0x4d81+-0x2c9e66))['toFix'+'ed'](0xae2*0x2+0x6b*-0x38+0x1a4)+'MB':_0x226e33[_0x593238(0x959)],_0x78ddda=_0x226e33['zAvts'](_0x226e33[_0x593238(0xd81)](_0x226e33['wCyOi'](_0x226e33['dwRWa']('v'+(_0x6c60d9&&_0x6c60d9[_0x593238(0xb17)+'on']||_0x1bb3ff),_0x593238(0xa45)+_0x593238(0xe9f))+(_0x6c60d9&&_0x6c60d9[_0x593238(0xceb)+_0x593238(0x9c3)+'ed']||0x764+0x864*-0x4+0x1a2c),'/')+(_0x6c60d9&&_0x6c60d9['hooks'+_0x593238(0xcf4)]||-0x63d+0x47d+0x1c0)+('\x20\x20obj'+'s\x20')+_0xb3bb13+(_0x593238(0x3d6)+'\x20'),_0x44b412)+_0x226e33['dTKGb'],_0x397202);_0x403460['st'][_0x593238(0x2b4)+'onten'+'t']=_0x78ddda;var _0x4745aa=_0x403460['st2'];_0x4745aa&&(_0x226e33[_0x593238(0x8c1)](_0x593238(0x48d),_0x593238(0x48d))?(_0x1a808d['fov']=0x1652+-0x2488+0xe81,_0x226e33[_0x593238(0x421)](_0x48aba0),_0x226e33['RbpYw'](_0x539591,_0x4150ca[_0x593238(0xcbb)])):(_0x4745aa[_0x593238(0x2b4)+_0x593238(0x806)+'t']=_0xfca139>-0x1*0x23a1+0x21c0+-0x1*-0x1e1?_0x226e33[_0x593238(0x3c8)]+_0xfca139+(_0x50779b?_0x226e33[_0x593238(0x77c)](_0x226e33['mFcuv'](_0x226e33[_0x593238(0xd71)],_0x50779b),_0x593238(0x516)):'')+(_0x32df52&&_0x32df52[_0x593238(0x96b)+'a']?'\x20\x20cam'+'\x20'+_0x32df52[_0x593238(0x96b)+_0x593238(0x5bb)]:_0x593238(0xaca)+'\x20-'):_0x593238(0xb15)+_0x593238(0x1f6)+_0x593238(0xce0)+_0x593238(0x218)+_0x593238(0x5e0)+_0x593238(0x77b)+(_0x32df52&&_0x32df52['camer'+'a']?_0x32df52[_0x593238(0x96b)+_0x593238(0x5bb)]:'-'),_0x4745aa['style']['color']=_0xfca139>0x1712+-0xb3+-0x165f?_0x593238(0x991)+'a8':'#8d7a'+'99'));}catch(_0x5d60e0){}}window['addEv'+_0x19bc25(0xb70)+'stene'+'r'](_0x19bc25(0xaea)+'wn',function(_0x4eece9){var _0x1c2039=_0x19bc25,_0x5de1f2={'CLOlV':function(_0xf371bf,_0xd7ee24){return _0xf371bf<_0xd7ee24;},'KsdMi':function(_0x262423,_0x6ed927){return _0x262423===_0x6ed927;},'oVeUL':_0x1c2039(0xe10)+'le'};if(!_0x4eece9)return;try{if(_0x4eece9['code']==='F9'){_0x4eece9[_0x1c2039(0x849)+_0x1c2039(0xb3c)+_0x1c2039(0x628)](),_0x3a879c(_0x226e33[_0x1c2039(0x252)]);return;}if(_0x226e33[_0x1c2039(0xb99)](_0x4eece9['code'],'F7')){_0x4eece9[_0x1c2039(0x849)+'ntDef'+_0x1c2039(0x628)](),_0x1bfe9c(!_0x46693f['on'],_0x46693f['facto'+'r']);return;}if(_0x4eece9['code']==='F8'){_0x4eece9[_0x1c2039(0x849)+_0x1c2039(0xb3c)+'ault'](),_0x1bfe9c(_0x46693f['on'],_0x46693f[_0x1c2039(0x9a1)+'r']+(-0x1d07+0x1873+-0x494*-0x1+0.5));return;}if(_0x226e33[_0x1c2039(0x458)](_0x4eece9['code'],'F6')){_0x4eece9['preve'+_0x1c2039(0xb3c)+'ault'](),_0x226e33['iOsCl'](_0x1bfe9c,_0x46693f['on'],_0x226e33[_0x1c2039(0xb30)](_0x46693f[_0x1c2039(0x9a1)+'r'],-0x833+-0x48c+0xd*0xfb+0.5));return;}if(_0x226e33[_0x1c2039(0x6af)](_0x4eece9[_0x1c2039(0x74e)],'Inser'+'t')){if(_0x226e33['ixYVl']===_0x1c2039(0xd42))_0x322171[_0x1c2039(0x94c)]=_0x359e50(_0x52e29f&&_0x57cf3b['messa'+'ge']||_0x143085);else{_0x4eece9[_0x1c2039(0x849)+_0x1c2039(0xb3c)+_0x1c2039(0x628)](),_0x3c5d06(!_0xf453eb['open']);return;}}if(_0x226e33['Qgrli'](_0x4eece9['code'],_0x1c2039(0xaff)+'etRig'+'ht')){_0x4eece9[_0x1c2039(0x849)+_0x1c2039(0xb3c)+'ault'](),_0x14e22e['fov']=Math[_0x1c2039(0x5af)](0x112c+-0x1*0x1df9+0xd59,_0x14e22e[_0x1c2039(0xb6b)]+(-0xe38+-0x195+0xfcf)),_0x48b480();return;}if(_0x4eece9[_0x1c2039(0x74e)]==='Brack'+'etLef'+'t'){if(_0x1c2039(0x5d5)===_0x1c2039(0x5d5)){_0x4eece9['preve'+'ntDef'+_0x1c2039(0x628)](),_0x14e22e[_0x1c2039(0xb6b)]=Math[_0x1c2039(0x8d5)](0xc7c+0xbb*0x27+-0x28db,_0x226e33['cXiuq'](_0x14e22e['fov'],-0x124*0x3+0xd6b+-0x9fd)),_0x48b480();return;}else{var _0x5485c9=_0x12a2bd[_0x1c2039(0x68a)](_0xd47e65);for(var _0x14d520=0x117*-0x7+-0x1cc1+0x2*0x1231;_0x5de1f2[_0x1c2039(0x418)](_0x14d520,_0x5485c9[_0x1c2039(0xe2a)+'h'])&&_0x14d520<-0xfb*-0xb+0x24ab+-0x2d1c;_0x14d520++){var _0x364c25=_0x13afbc[_0x5485c9[_0x14d520]];if(_0x364c25&&_0x5de1f2[_0x1c2039(0x7e3)](typeof _0x364c25,'objec'+'t')&&_0x364c25[_0x1c2039(0x6df)+'e']&&_0x364c25['Modul'+'e'][_0x1c2039(0xd06)+'8']&&_0x364c25[_0x1c2039(0x6df)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x529172[_0x1c2039(0x530)+'e']='windo'+'w.'+_0x5485c9[_0x14d520]+_0x5de1f2[_0x1c2039(0x88e)],_0x364c25;}}}}catch(_0x472dbc){}},!![]);var _0x248249={'on':!![],'span':0x50,'boxes':![]};function _0x24abea(){var _0x4d3daf=_0x19bc25,_0x2c4c84=_0xb9bf83['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x34ce05=Object['keys'](_0x2c4c84);for(var _0x2b3e50=-0x4cc+-0x1948+0x1e14;_0x2b3e50<_0x34ce05[_0x4d3daf(0xe2a)+'h'];_0x2b3e50++){var _0x47d6ee=_0x2c4c84[_0x34ce05[_0x2b3e50]][_0x4d3daf(0x5cd)],_0x259483=_0x226e33[_0x4d3daf(0x318)](_0x3fa609,_0x47d6ee+(0x958*-0x1+-0x1a27+0x23af),_0x4d3daf(0xe61));if(!_0x259483)continue;var _0x39aa3e=_0x578547['Mouse'+'Look']||[],_0x6fc9ed={'mouseLook':'0x'+(_0x259483>>>0x1691+0xe3*0x11+-0x25a4)['toStr'+'ing'](0x2*-0x1019+-0x26b9+0x46fb),'floats':{},'camera':null,'vec2':null};for(var _0x2c3dcc=0x102c+-0xe85+-0x1a7*0x1;_0x2c3dcc<_0x39aa3e[_0x4d3daf(0xe2a)+'h'];_0x2c3dcc++){if(_0x226e33['KsnuH'](_0x226e33[_0x4d3daf(0x6b2)],_0x226e33[_0x4d3daf(0x6b2)]))_0x375d73(!_0x4bf9f5['on'],_0x4046b2[_0x4d3daf(0x9a1)+'r']);else{if(_0x226e33[_0x4d3daf(0x4ac)](_0x39aa3e[_0x2c3dcc][-0x247b+-0x9ec+0x2e68],'f32'))continue;_0x6fc9ed['float'+'s']['0x'+_0x39aa3e[_0x2c3dcc][0x1d49+0x213*-0x1+-0x1b*0x102]['toStr'+_0x4d3daf(0x35f)](-0x1ba3+-0x22e5+0x3e98)]=_0x226e33['sdvsy'](_0x3fa609,_0x259483+_0x39aa3e[_0x2c3dcc][-0x870+-0x239*0x1+0xaa9],_0x226e33[_0x4d3daf(0xa41)]);}}var _0x50bd29=_0x3fa609(_0x259483+(0x2267*0x1+0x37f*-0x6+-0x179*0x9),_0x226e33[_0x4d3daf(0x541)]);if(_0x50bd29)_0x6fc9ed[_0x4d3daf(0x96b)+'a']='0x'+_0x226e33['vRaLr'](_0x50bd29,0x432*-0x4+0x7d6+0x8f2)['toStr'+_0x4d3daf(0x35f)](-0xf8a+-0x1961*0x1+-0x1*-0x28fb);var _0x17c0b9=_0x3fd86d(_0x259483,-0x2*0x134f+0xc65*0x3+-0x1*-0x1b7,-0xfb+0x1c9*-0x1+0x8e*0x5);if(_0x17c0b9)_0x6fc9ed[_0x4d3daf(0x613)]=_0x17c0b9;return _0x6fc9ed;}return null;}var _0x36e4ea=_0x226e33['FPwDf'],_0x14e22e={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x216496=localStorage['getIt'+'em'](_0x36e4ea);if(_0x216496)_0x14e22e[_0x19bc25(0xb6b)]=Math[_0x19bc25(0x5af)](-0x79c*0x1+0x1d*-0x9e+-0x2*-0xd07,Math['max'](0x3ac+-0x1*0x191b+0x158d,parseFloat(_0x216496)||-0x4*0x7b9+0x8*-0x133+0x28d6));}catch(_0x5f1e96){}function _0x48b480(){var _0x303b8e=_0x19bc25;try{localStorage['setIt'+'em'](_0x36e4ea,String(_0x14e22e[_0x303b8e(0xb6b)]));}catch(_0x54dc44){}}var _0x17b3d2='sakur'+'a-sw-'+_0x19bc25(0x7ab)+'off',_0x84c070=![];try{_0x226e33[_0x19bc25(0x6c5)](localStorage['getIt'+'em'](_0x17b3d2),null)&&(localStorage['remov'+'eItem'](_0x17b3d2),_0x84c070=!![]);}catch(_0x40c69f){}var _0x4da26b=0x1aea+0x1f1f+0x1c1*-0x21,_0x54c687=0x2301+-0x1549+-0xd9c,_0x4da26b=-0x653*0x6+-0x1a89+-0x1*-0x40a3,_0x54c687=0x351+0x2f*0x9d+-0x2008,_0x26f414=-0x9ff+0x679+0x3b2,_0x3fcbd8={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0x404c61(_0x1f640a){var _0x174f53=_0x19bc25,_0x1816ea={'YWpfw':function(_0x1abdaf,_0xafe196){var _0x43ba03=_0x500f;return _0x226e33[_0x43ba03(0x23c)](_0x1abdaf,_0xafe196);},'yJriO':function(_0xdc0105,_0x49d602){return _0xdc0105-_0x49d602;}};if(_0x226e33['Xriml'](_0x174f53(0xe6e),'tpdSc')){if(_0x226e33['PFabJ'](_0x1f640a,undefined)||_0x1f640a===null)return undefined;if(typeof _0x1f640a['val']===_0x174f53(0xba1)+_0x174f53(0xa8b)){if(_0x174f53(0xe8a)===_0x174f53(0x55d))return _0x1816ea['YWpfw'](_0x58be5f['lo'],null)||_0x37ad33['hi']===null?-0x3*-0x11b+0x324+-0x39*0x1d:_0x1816ea['yJriO'](_0x446546['hi'],_0x4b57af['lo']);else try{if(_0x226e33[_0x174f53(0x6fe)]===_0x226e33['AYgdT'])return _0x1f640a['val']();else _0x53d26c['lg']['textC'+'onten'+'t']=_0x226e33['rmvmK'](_0x226e33['cRCZv'](_0x226e33['UMkea'](_0x226e33[_0x174f53(0xbac)](_0x226e33['KqZGY'](_0x226e33[_0x174f53(0x230)](_0x226e33['oIEbf'],_0x262e9c),_0x174f53(0xd52)),_0xe095db[_0x174f53(0xdd2)](_0x408c52['span'])),'m'),_0x30e48b['boxes']?_0x226e33[_0x174f53(0x690)](_0x174f53(0xe88)+'v\x20'+_0x1688a2['round'](_0x1f8313[_0x174f53(0xb6b)]),'°'):''),_0x226e33[_0x174f53(0x468)](_0x24b3b9,null)?_0x226e33[_0x174f53(0xbac)](_0x174f53(0x87a)+'am',_0x32d251):'');}catch(_0x59c987){}}if(typeof _0x1f640a===_0x226e33['LstpA'])return undefined;return _0x1f640a;}else _0x465ffd[_0x174f53(0x7dd)+_0x174f53(0xc9a)]=!!(_0x5d1a8c&&_0x434f6d['Modul'+'e']),_0x172e92['heapU'+'8']=!!(_0x38a472&&_0x1fac43[_0x174f53(0x6df)+'e']&&_0x3ee1e4[_0x174f53(0x6df)+'e'][_0x174f53(0xd06)+'8']),_0x5a4a5a['heapB'+'ytes']=_0x31467f[_0x174f53(0x2be)+'8']?_0x419d6d['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:-0x216+0x1ce1+-0x1acb;}function _0x4cbeaa(_0x510dd0,_0x47cb2a,_0x1d2980){var _0x57774d=_0x19bc25;if('WfasZ'!==_0x57774d(0xadd))try{_0x3bf552();}catch(_0x23addc){}else try{if(_0x57774d(0xda7)===_0x57774d(0x3ef)){var _0x9089d9=_0x226e33[_0x57774d(0xc3c)](_0x3419b1,_0x2fba88,_0x51d327,_0x158dbc);if(!_0x9089d9)return null;_0x9089d9['o']=_0x5a3863,_0x9089d9['k']=_0x3da310;var _0x10211e=_0x358a99([_0x9089d9]);if(!_0x10211e['rows'][_0x57774d(0xe2a)+'h'])return null;return _0x10211e['rows'][-0xee8+-0x71*0x19+0x1d*0xe5];}else{var _0x4eff34=window[_0x57774d(0x20e)+_0x57774d(0xab1)+_0x57774d(0x313)]&&window['Unity'+'WebMo'+'dkit'][_0x57774d(0x425)+'me'],_0x1cc1a7=_0x4579ce||_0x4eff34&&_0x4eff34[_0x57774d(0xd7d)+'ns']&&_0x4eff34['plugi'+'ns'][_0x4eff34['plugi'+'ns']['lengt'+'h']-(0x1*-0x2b9+0x1629+-0x136f)];if(!_0x1cc1a7||typeof _0x1cc1a7['call']!=='funct'+_0x57774d(0xa8b))return _0x3fcbd8[_0x57774d(0x94c)+'s'][_0x57774d(0x822)](_0x226e33['ZcXtE']),undefined;return _0x404c61(_0x1cc1a7['call'](_0x510dd0,_0x47cb2a,_0x1d2980||[]));}}catch(_0x52259a){if(_0x226e33['kSQre'](_0x3fcbd8[_0x57774d(0x94c)+'s'][_0x57774d(0xe2a)+'h'],0x1*0x2692+-0x18d2+-0xdba*0x1))_0x3fcbd8['error'+'s']['push'](_0x226e33[_0x57774d(0x3f5)](_0x510dd0+'.',_0x47cb2a)+':\x20'+String(_0x52259a&&_0x52259a['messa'+'ge']||_0x52259a)['slice'](-0x132f+0x165+0x11ca,-0x6ae+0x125*-0xf+0x1833));return undefined;}}function _0x503eaa(){var _0x187360=_0x19bc25,_0x5dd639={'qnvwn':function(_0xfae400,_0x1a56f7){return _0xfae400+_0x1a56f7;}};if(_0x3fcbd8[_0x187360(0xa53)+'ch'])return _0x3fcbd8[_0x187360(0xa53)+'ch'];try{var _0x2cae40=window['Unity'+_0x187360(0xab1)+_0x187360(0x313)]&&window[_0x187360(0x20e)+'WebMo'+_0x187360(0x313)][_0x187360(0x425)+'me'],_0x130dea=_0x4579ce||_0x2cae40&&_0x2cae40['plugi'+'ns']&&_0x2cae40[_0x187360(0xd7d)+'ns'][_0x2cae40['plugi'+'ns'][_0x187360(0xe2a)+'h']-(0x3a6*0x1+0x567*0x5+0x51c*-0x6)];if(!_0x130dea||typeof _0x130dea[_0x187360(0x24d)+'c']!=='funct'+'ion')return _0x3fcbd8['error'+'s'][_0x187360(0x822)]('no\x20pl'+'ugin.'+'mallo'+'c'),0x4db+-0x7cd*0x5+0x2226;var _0x3431c9=_0x404c61(_0x130dea[_0x187360(0x24d)+'c'](0xa97*0x1+0x5a*-0x40+0x27*0x4f));if(_0x226e33[_0x187360(0x9ef)](typeof _0x3431c9,_0x226e33[_0x187360(0x944)])||!(_0x3431c9>-0xe6+-0x5*0x505+0x19ff)){if(_0x226e33[_0x187360(0xb28)]==='RhgXh'){if(_0xdfcf0[_0x187360(0x3c5)+'ns'][_0x21f33e][_0x187360(0x593)+'List'])_0x5a2c4e[_0x187360(0x3c5)+'ns'][_0x374540][_0x187360(0x593)+_0x187360(0xdd5)]=_0x5dd639[_0x187360(0x1d4)]('mn-ta'+'b',_0x84074d===_0x3d7185?_0x187360(0x7ca)+'ve':'');}else return _0x3fcbd8[_0x187360(0x94c)+'s'][_0x187360(0x822)](_0x226e33['YFVMt']('mallo'+_0x187360(0x8ca)+_0x187360(0x5de)+'\x20',_0x3431c9)),-0x376+0x3*0x43f+-0x947;}_0x3fcbd8[_0x187360(0xa53)+'ch']=_0x3431c9;}catch(_0x59bd55){if(_0x3fcbd8[_0x187360(0x94c)+'s']['lengt'+'h']<0x22cf+0x221e*0x1+-0x44e7)_0x3fcbd8[_0x187360(0x94c)+'s']['push']('mallo'+'c:\x20'+_0x226e33['ApzOq'](String,_0x59bd55&&_0x59bd55['messa'+'ge']||_0x59bd55)['slice'](0xabf+-0x265+-0x85a,-0x2165+-0x20df+0x429e));return-0x1*0xdc7+0x6*-0x293+0x1d39;}return _0x3fcbd8[_0x187360(0xa53)+'ch'];}function _0x12c15b(_0x4b4717){var _0x2b3e21=_0x19bc25,_0x405cb9=_0x4b4717[-0xd01+-0x1*0xc56+0x1*0x1957],_0x2dd714=_0x4b4717[0x244*0x5+0x9*-0x347+0x2*0x916],_0xc520e2=_0x4b4717[-0xf5e+-0x7*-0x427+-0xdb1],_0x530861=_0x4b4717[-0x1775*-0x1+-0x3a9+0x1*-0x13c9],_0x5331aa=_0x226e33['dDnBx'](_0x405cb9,_0x405cb9),_0x192ecd=_0x226e33['dDnBx'](_0x2dd714,_0x2dd714),_0x5cac12=_0xc520e2*_0xc520e2,_0x31cf46=_0x226e33['PlLgH'](_0x405cb9,_0x2dd714),_0x4dd8da=_0x226e33['CKucr'](_0x405cb9,_0xc520e2),_0x27fe41=_0x226e33[_0x2b3e21(0xa75)](_0x2dd714,_0xc520e2),_0x288df9=_0x530861*_0x405cb9,_0x494689=_0x530861*_0x2dd714,_0x4db75f=_0x530861*_0xc520e2;return{'right':[_0x226e33['eBuaD'](-0x1bfc+-0xf81*-0x2+-0x305,_0x226e33[_0x2b3e21(0xcd5)](-0x3*0xb75+-0x1*0xd3f+0x3f8*0xc,_0x192ecd+_0x5cac12)),_0x226e33[_0x2b3e21(0x52c)](0xb1*-0x21+0xfce+0x705,_0x226e33[_0x2b3e21(0xd99)](_0x31cf46,_0x4db75f)),(-0xd6d+-0x14be+0x222d)*(_0x4dd8da-_0x494689)],'up':[_0x226e33['usTWy'](-0x16ef+-0x14d6+0x2bc7,_0x31cf46-_0x4db75f),_0x226e33['MfUjy'](-0x119+-0x2bd*-0xd+-0x227f,_0x226e33[_0x2b3e21(0xc6e)](0x6*-0x3fd+-0x9d*-0x35+-0x891,_0x5331aa+_0x5cac12)),(0x2230+-0x212a+0xd*-0x14)*(_0x27fe41+_0x288df9)],'fwd':[_0x226e33[_0x2b3e21(0x556)](-0x148b+0x206b+-0xbde,_0x4dd8da+_0x494689),(-0xa2+0x2617+-0x2573)*_0x226e33[_0x2b3e21(0x2b8)](_0x27fe41,_0x288df9),0xa08+0x3af+0x9*-0x186-(0x443+0x1*0x1c9a+-0x20db*0x1)*(_0x5331aa+_0x192ecd)]};}var _0x3be1de=-0x185a+-0x8ed*-0x3+0xc5*-0x3;function _0x52707d(_0x3472ed){var _0x19776a=_0x19bc25,_0x1569d9={'ehlLe':function(_0x5bbcd9,_0x589dcc){return _0x5bbcd9*_0x589dcc;},'yleWQ':function(_0x10cdb6,_0x1e09b0){return _0x10cdb6/_0x1e09b0;},'BxQzv':function(_0x483a6,_0x17eb11){return _0x483a6===_0x17eb11;},'IWWLJ':function(_0x15468d,_0xfb932c){return _0x15468d+_0xfb932c;},'ZIBWV':'\x20/\x20','YzaZP':_0x226e33[_0x19776a(0xc84)],'ewTbd':function(_0x78678,_0x2a25b2){var _0x525e80=_0x19776a;return _0x226e33[_0x525e80(0xba0)](_0x78678,_0x2a25b2);},'gAmVc':_0x226e33[_0x19776a(0xae0)],'FWlns':function(_0x30c5aa,_0x5b0f28){return _0x30c5aa(_0x5b0f28);},'SagNt':function(_0xad96bd,_0x41a917){return _0x226e33['vBzoy'](_0xad96bd,_0x41a917);},'zEcmj':'Healt'+_0x19776a(0xa48)+'pt','SUwIw':function(_0x5828ef,_0x880373,_0x267ab7){return _0x5828ef(_0x880373,_0x267ab7);}};if(_0x226e33['TPlge'](_0x19776a(0xb40),_0x226e33[_0x19776a(0x929)])){var _0x240914=_0x226e33[_0x19776a(0x32c)][_0x19776a(0xa6a)]('|'),_0x27195f=0x7*0x3c3+0x1d0e+-0x3763;while(!![]){switch(_0x240914[_0x27195f++]){case'0':_0x3fcbd8['ok']=![];continue;case'1':_0x3fcbd8[_0x19776a(0xa5b)+'s']++;continue;case'2':_0x3fcbd8[_0x19776a(0x77d)]++;continue;case'3':if(_0x226e33['CUjwM'](_0x3fcbd8[_0x19776a(0xa5b)+'s'],_0x3be1de))return _0x3fcbd8[_0x19776a(0xb0b)]=null,_0x3fcbd8[_0x19776a(0x9a2)]=null,_0x3fcbd8['pos']=null,_0x3fcbd8;continue;case'4':_0x3fcbd8['why']=_0x3472ed;continue;case'5':return _0x3fcbd8;}break;}}else{var _0x418a94=_0x1ff5d1[_0x57d692]['datas'+'et']['k'],_0x4fdb84='';if(_0x418a94===_0x19776a(0x379)+'ON')_0x4fdb84=_0x320914?_0x2a1060['versi'+'on']:'-';else{if(_0x1569d9[_0x19776a(0xa11)](_0x418a94,_0x19776a(0x3b6)+_0x19776a(0x6de)+_0x19776a(0xd30)+'tered'))_0x4fdb84=_0x22b84f?_0x1569d9['IWWLJ'](_0x5d2e4e['hooks'+'Appli'+'ed']+_0x1569d9[_0x19776a(0x63b)],_0x529630['hooks'+_0x19776a(0xb72)+_0x19776a(0x641)+_0x19776a(0xa63)]):'-';else{if(_0x418a94==='from\x20'+_0x19776a(0x920)+'ntiat'+'e()')_0x4fdb84=_0x5a22b0&&_0x478876[_0x19776a(0xc79)+_0x19776a(0x834)]&&_0x4eba22[_0x19776a(0xc79)+_0x19776a(0x834)][_0x19776a(0x8f7)+_0x19776a(0x6a9)]?_0x1569d9[_0x19776a(0xe4d)](_0x1569d9[_0x19776a(0xe4d)](_0x53d746[_0x19776a(0xdd2)](_0x528619[_0x19776a(0xc79)+_0x19776a(0x834)][_0x19776a(0xc83)]/(0x25f1+-0x46799+0x1441a8))+_0x1569d9[_0x19776a(0x504)],_0xc86f3b[_0x19776a(0xc79)+_0x19776a(0x834)]['atMs']),'ms'):'-';else{if(_0x1569d9['ewTbd'](_0x418a94,_0x1569d9[_0x19776a(0xc93)]))_0x4fdb84=_0x4dd045&&_0x240c7b[_0x19776a(0x30c)]?_0x1569d9['FWlns'](_0x4f4eba,_0x4e7ee2['esp'][_0x19776a(0xde0)+'rCoun'+'t']):'-';else{if(_0x1569d9[_0x19776a(0x73a)](_0x418a94,'every'+_0x19776a(0xe22)+'ut\x20yo'+'u'))_0x4fdb84=_0x5f5c1b&&_0x4e5b8f[_0x19776a(0x30c)]?_0xf7111b(_0x46dca1[_0x19776a(0x30c)]['enemy'+_0x19776a(0x6dd)]):'-';else{if(_0x418a94==='off\x20t'+_0x19776a(0x57c)+'ve\x20ma'+_0x19776a(0x972))_0x4fdb84=_0x44d8d5&&_0x21569d[_0x19776a(0x30c)]&&_0x505344['esp'][_0x19776a(0x96b)+'a']?_0x1569d9['IWWLJ'](_0x1569d9['IWWLJ'](_0x1c2f2c[_0x19776a(0x30c)][_0x19776a(0x96b)+'a']+'\x20(',_0x18064f[_0x19776a(0x30c)]['camer'+_0x19776a(0x5bb)]),')'):'-';else{if(_0x1569d9[_0x19776a(0xe13)](_0x418a94,_0x19776a(0x8b9)+'ntrol'+'ler+0'+'x2E4'))_0x4fdb84=_0x770cfa&&_0x1ee4f0[_0x19776a(0x416)]&&_0x19cd3e[_0x19776a(0x416)]['feet']?_0x2bd6a8['local'][_0x19776a(0x832)][_0x19776a(0x7d5)](function(_0x2b9a2d){return _0x5a0e46['round'](_0x1569d9['ehlLe'](_0x2b9a2d,-0x2*0xfc5+0x3*-0x3dd+0x2b85))/(-0x3*-0x5d5+-0x9f*0x17+-0x26*0x13);})[_0x19776a(0x55c)]('\x20\x20'):'-';else{if(_0x418a94===_0x19776a(0x9bc)+'8')_0x4fdb84=_0x51418b&&_0x40823f[_0x19776a(0x416)]&&_0x22a0f2['local'][_0x19776a(0xb84)]?_0x493272[_0x19776a(0x416)]['eye'][_0x19776a(0x7d5)](function(_0x55cd82){var _0x5e47ee=_0x19776a;return _0x1569d9['yleWQ'](_0x5c6741['round'](_0x1569d9[_0x5e47ee(0xddf)](_0x55cd82,-0x3bf*-0x1+-0x205a+0x1cff)),0x1bf9+0x16a8+-0x323d);})[_0x19776a(0x55c)]('\x20\x20'):'-';else{var _0x156c67=_0x418a94['split']('+');_0x4fdb84=_0x21c210(_0x26960e,_0x1569d9['SagNt'](_0x156c67[0x3da+-0xf7+-0x2e3][_0x19776a(0x724)+'Of'](_0x19776a(0x3c6)+'h'),-0x1*-0x13fd+0x2349+-0x19*0x236)?_0x1569d9[_0x19776a(0x2c7)]:_0x19776a(0x8b9)+_0x19776a(0x2ee)+_0x19776a(0x4bb),_0x1569d9['SUwIw'](_0x453d6a,_0x156c67[0x2052+0xa8*0x3a+-0x4661],-0x12*0x39+0xb42+-0x10*0x73));}}}}}}}}if(_0x4fdb84!==_0x3e3c85[_0x6b4007]['textC'+'onten'+'t'])_0x50ee1f[_0x3e6777][_0x19776a(0x2b4)+'onten'+'t']=_0x4fdb84;}}function _0x68481a(){var _0x117946=_0x19bc25;_0x3fcbd8['tried']++,_0x3fcbd8[_0x117946(0xa5b)+'s']=-0x5c*-0x44+-0x4*0x12f+-0x13b4;var _0x41756b=_0x24abea(),_0xcf7e00=_0x41756b&&_0x41756b[_0x117946(0xa6b)+_0x117946(0x575)]?_0x226e33[_0x117946(0x831)](parseInt,_0x41756b[_0x117946(0xa6b)+'Look'],0x1d5a+0x2372+-0x40bc):_0x514922;if(!_0xcf7e00)return _0x226e33[_0x117946(0xb9d)](_0x52707d,'no\x20Mo'+_0x117946(0x9f9)+'ok\x20in'+'stanc'+'e');if(_0x514922!==_0xcf7e00)_0x514922=_0xcf7e00;var _0x37baa8=_0x3fa609(_0xcf7e00+_0x26f414,'i32');if(_0x226e33[_0x117946(0xbdb)](typeof _0x37baa8,_0x117946(0x791)+'r')||!(_0x37baa8>-0x1204*0x2+-0xd17+-0x1*-0x311f))return _0x226e33[_0x117946(0x2e8)](_0x52707d,_0x117946(0x90b)+_0x117946(0x985)+_0x117946(0x904)+'is\x20no'+'t\x20an\x20'+_0x117946(0xcb5)+_0x117946(0xad0)+'erenc'+'e');_0x3fcbd8[_0x117946(0x84f)+'r']=_0x37baa8;var _0x1cb519=_0x4cbeaa(_0x117946(0xd09)+'nent',_0x117946(0x611)+_0x117946(0x2b9)+_0x117946(0x514),[_0x37baa8]);if(_0x226e33[_0x117946(0x9d4)](typeof _0x1cb519,_0x226e33[_0x117946(0x944)])||!(_0x1cb519>0x3*-0x548+-0x248d+0x3465))return _0x3fcbd8[_0x117946(0xbda)]=-0x1bce+-0x2b9*0x9+0x779*0x7,_0x52707d(_0x226e33['CtFQR'](_0x117946(0xd09)+'nent.'+_0x117946(0x611)+_0x117946(0x2b9)+'orm\x20r'+_0x117946(0x4ca)+_0x117946(0x5f2),_0x1cb519));_0x3fcbd8[_0x117946(0xbda)]=_0x1cb519;var _0x430e38=_0x226e33[_0x117946(0x5df)](_0x503eaa);if(!_0x430e38)return _0x52707d(_0x117946(0x1e7)+'ratch'+'\x20buff'+'er');var _0x524f88=_0x226e33[_0x117946(0xc3c)](_0x4cbeaa,_0x117946(0x2d8)+'a',_0x117946(0x243)+_0x117946(0xc25)+_0x117946(0x378),[_0x37baa8]);if(typeof _0x524f88===_0x226e33['DZkuw']&&isFinite(_0x524f88)&&_0x524f88>0x3a1*0x6+0x8d0+-0x1e95&&_0x524f88<-0x1*0x133b+0x6b*-0x3d+0x2d6d)_0x3fcbd8[_0x117946(0xb6b)]=_0x524f88;_0x226e33['dokKt'](_0x4cbeaa,_0x117946(0x2da)+_0x117946(0x9ca),_0x117946(0xe93)+_0x117946(0xc61)+'on',[_0x430e38,_0x1cb519]);var _0x5b2b59=[_0x226e33[_0x117946(0x28a)](_0x3fa609,_0x430e38,_0x117946(0x484)),_0x3fa609(_0x430e38+(-0x22f6*-0x1+0x8ae+-0x2ba*0x10),_0x226e33['Ndlkh']),_0x226e33[_0x117946(0x28c)](_0x3fa609,_0x226e33[_0x117946(0xd4e)](_0x430e38,-0x1*-0x72f+-0xbf4*-0x1+-0x1*0x131b),_0x226e33[_0x117946(0xa41)]),_0x3fa609(_0x430e38+(-0x87e+0x147+-0xd*-0x8f),_0x226e33['Ndlkh'])],_0x5e3d83=-0x62f*-0x4+-0x1eeb+0x1*0x62f;for(var _0x784e13=-0x1*-0x1319+0x133c+0x1*-0x2655;_0x226e33[_0x117946(0x845)](_0x784e13,-0x1bd2+0x2*0xc59+0x324);_0x784e13++)_0x5e3d83+=_0x5b2b59[_0x784e13]*_0x5b2b59[_0x784e13];_0x5e3d83=Math[_0x117946(0x9a6)](_0x5e3d83);var _0x104c34=_0x226e33['jRcBb'](isFinite,_0x5e3d83)&&Math[_0x117946(0x5f5)](_0x226e33[_0x117946(0x5c5)](_0x5e3d83,-0x15d*-0x10+-0x213b+0x22*0x56))<-0x7*-0x584+0x2*0x9eb+-0x3a72+0.02;_0x226e33[_0x117946(0xc3c)](_0x4cbeaa,_0x117946(0x2da)+_0x117946(0x9ca),_0x117946(0x5c6)+_0x117946(0xb89)+'on',[_0x430e38,_0x1cb519]);var _0x16d4ab=_0x226e33['wGszS'](_0x3fa609,_0x430e38,_0x226e33[_0x117946(0xa41)]),_0x4d0a3a=_0x3fa609(_0x226e33['uVMts'](_0x430e38,0x1bb*0x7+-0xdc4*-0x2+-0x27a1),_0x226e33[_0x117946(0xa41)]),_0x2ff30f=_0x226e33[_0x117946(0x5c8)](_0x3fa609,_0x430e38+(0x26ec+0x1*-0x73c+0x1fa8*-0x1),_0x117946(0x484));_0x3fcbd8[_0x117946(0x5e9)]=typeof _0x16d4ab==='numbe'+'r'&&typeof _0x4d0a3a===_0x117946(0x791)+'r'&&typeof _0x2ff30f===_0x226e33[_0x117946(0x944)]&&isFinite(_0x16d4ab)&&_0x226e33[_0x117946(0x9f8)](isFinite,_0x4d0a3a)&&isFinite(_0x2ff30f)&&_0x226e33['nIrlN'](Math[_0x117946(0x5f5)](_0x16d4ab),-0x29dba+0x1ba3+-0x1583d*-0x3)&&Math[_0x117946(0x5f5)](_0x4d0a3a)<-0x44e4*0x3+-0x1ef*0x193+-0x56089*-0x1&&_0x226e33[_0x117946(0xb13)](Math[_0x117946(0x5f5)](_0x2ff30f),-0x1*0x2f14f+0x16cfc+0x1*0x30af3)?[_0x16d4ab,_0x4d0a3a,_0x2ff30f]:null,_0x3fcbd8[_0x117946(0x3b6)+'ed']++;if(_0x104c34)return _0x3fcbd8['quat']=_0x5b2b59,_0x3fcbd8[_0x117946(0x9a2)]=_0x12c15b(_0x5b2b59),_0x3fcbd8['ok']=!![],_0x3fcbd8[_0x117946(0x69b)]='',_0x3fcbd8['sourc'+'e']=_0x117946(0x96b)+'a\x20tra'+_0x117946(0x910)+'m',_0x3fcbd8;_0x3fcbd8[_0x117946(0xb0b)]=null,_0x3fcbd8[_0x117946(0x9a2)]=null;if(_0x3fcbd8['fov']!==null)return _0x3fcbd8['ok']=!![],_0x3fcbd8[_0x117946(0x530)+'e']='camer'+'a\x20fov'+_0x117946(0xca9),_0x3fcbd8[_0x117946(0x69b)]=_0x226e33[_0x117946(0x9ba)](_0x226e33[_0x117946(0x1ff)]('rotat'+_0x117946(0x46c)+'nusab'+_0x117946(0x83f)+'q|=',_0x226e33['CfezK'](Math['round'](_0x5e3d83*(-0x537+0x363+0x5bc)),0x316+0xc0b+-0xb39)),_0x117946(0xaec)+'ov\x20on'+'ly'),_0x3fcbd8;return _0x3fcbd8['ok']=![],_0x3fcbd8['sourc'+'e']=null,_0x3fcbd8[_0x117946(0x69b)]=_0x226e33[_0x117946(0xd1f)](_0x226e33[_0x117946(0x42d)](_0x117946(0xbfa)+'ion\x20u'+'nusab'+_0x117946(0x83f)+_0x117946(0x1d6),Math[_0x117946(0xdd2)](_0x5e3d83*(0x6*-0x382+-0x927+0x221b))/(-0x17*0x166+0xd38+-0x5*-0x492)),_0x226e33['aDQEG']),_0x3fcbd8;}function _0x2ed33f(){if(_0x3fcbd8['tried'])return _0x3fcbd8;return _0x226e33['fLXKK'](_0x68481a);}var _0x5c216a={'pitch':null,'yaw':null,'identified':![],'why':_0x19bc25(0xa26)+_0x19bc25(0x9f9)+_0x19bc25(0x45f)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x58f878(_0x5bf250){var _0x12a54a=_0x19bc25,_0x3f10b3=null,_0x1185a0=-0xea2*0x2+0x1f81+0x1*-0x23d;for(var _0x17a645 in _0x392876){if(_0x226e33['PdELi']===_0x12a54a(0x565))try{if(!_0x5c6fbe||!_0x5926e1)return null;var _0x43e82d=new _0x3a08ee(_0x4df304)[_0x12a54a(0x61e)+_0x12a54a(0x568)+'me']();return _0x226e33[_0x12a54a(0x6ba)](_0x43e82d,_0x64223c)?null:_0x43e82d;}catch(_0x4830e2){return null;}else{var _0x3bd203=_0x392876[_0x17a645];if(!_0x3bd203['hits']||_0x3bd203['last']===null)continue;var _0x93952f=_0x226e33[_0x12a54a(0x5dd)](_0x3fa609,_0x226e33['gflkD'](_0x514922,_0x5bf250),_0x226e33[_0x12a54a(0xa41)]);if(_0x226e33['RdJqS'](typeof _0x93952f,_0x226e33[_0x12a54a(0x944)]))continue;Math[_0x12a54a(0x5f5)](_0x3bd203[_0x12a54a(0x21b)]-_0x93952f)<0x22f1+-0x581*0x3+-0x126e+0.001&&_0x226e33[_0x12a54a(0x21e)](_0x3bd203['hits'],_0x1185a0)&&(_0x3f10b3=_0x17a645,_0x1185a0=_0x3bd203[_0x12a54a(0xac9)]);}}return _0x3f10b3;}function _0x46a71a(_0x2ffb00){var _0x5be62b=_0x19bc25,_0x4d91f5={'YrvzF':function(_0x329776){return _0x329776();},'dkVGF':function(_0x1293b2,_0x4fa94c){return _0x1293b2(_0x4fa94c);},'wfbmp':function(_0x51b37d,_0x2ea718){var _0x2f31ad=_0x500f;return _0x226e33[_0x2f31ad(0x9c2)](_0x51b37d,_0x2ea718);},'AXNMQ':_0x226e33[_0x5be62b(0x775)]},_0x26f240=[],_0x315874=_0x578547[_0x5be62b(0x90b)+'Look']||[];for(var _0x30b04e in _0x392876){if(_0x226e33['pIFTa'](_0x5be62b(0x1c4),_0x226e33[_0x5be62b(0xaeb)])){var _0x32b103=_0x4d91f5[_0x5be62b(0xa3e)](_0x173466);_0x29a232[_0x5be62b(0x6ff)]=_0x40dddf(_0x32b103),_0x191b05['textC'+_0x5be62b(0x806)+'t']=(_0x5b6d45<0x1eff+-0x1da+-0x749*0x4?_0x32b103[_0x5be62b(0xa0d)+'ed'](0x1b91*0x1+0x2001*-0x1+0x471):_0x4d91f5['dkVGF'](_0x1c8e42,_0x2916de[_0x5be62b(0xdd2)](_0x32b103)))+(_0x1ceca2[_0x5be62b(0xbc9)+'et'][_0x5be62b(0x9d3)]||'');var _0x28f299=(_0x32b103-_0x2f1910)/_0x4d91f5[_0x5be62b(0xea4)](_0x57698e,_0x108d5d)*(-0x262d+-0x52b*0x3+0x3*0x1206);_0xaaf6fc['style']['setPr'+_0x5be62b(0x9a3)+'y'](_0x4d91f5[_0x5be62b(0x5fb)],_0x28f299+'%');}else{var _0x10d084=_0x392876[_0x30b04e];if(!_0x10d084[_0x5be62b(0xac9)])continue;var _0x27af53=null;for(var _0x4fc6a2=-0x2684+-0xc*0x15f+0x36f8;_0x226e33['DbrXI'](_0x4fc6a2,_0x315874['lengt'+'h']);_0x4fc6a2++){if(_0x226e33[_0x5be62b(0x739)](_0x315874[_0x4fc6a2][-0x237d*-0x1+-0x18e5+-0xa97],_0x226e33['Ndlkh']))continue;var _0x148b86=_0x3fa609(_0x2ffb00+_0x315874[_0x4fc6a2][0x76*-0x11+0x9*-0xd8+0x4f*0x32],_0x5be62b(0x484));if(typeof _0x148b86===_0x5be62b(0x791)+'r'&&_0x226e33['tcSvn'](Math[_0x5be62b(0x5f5)](_0x148b86-_0x10d084[_0x5be62b(0x21b)]),-0x1a8b*0x1+0x20a5+-0x61a+0.001)){_0x27af53='0x'+_0x315874[_0x4fc6a2][-0x667*0x1+-0x3eb+-0x1*-0xa52][_0x5be62b(0x488)+_0x5be62b(0x35f)](0x1e4e+0x559+-0x2397*0x1);break;}}_0x26f240[_0x5be62b(0x822)]({'name':_0x30b04e,'value':_0x10d084[_0x5be62b(0x21b)],'matches':_0x27af53,'hits':_0x10d084[_0x5be62b(0xac9)],'lo':_0x10d084['lo'],'hi':_0x10d084['hi'],'travel':_0x226e33['rbagQ'](_0x10d084['lo'],null)?-0x29b*0xc+0xd6*0xe+0x1390:Math['round'](_0x226e33['ZhLKc'](_0x10d084['hi'],_0x10d084['lo'])*(-0x1f28+-0xd0f*-0x2+0x56e))/(-0x65a+-0x1c44+-0x1*-0x2302),'jump':Math[_0x5be62b(0xdd2)](_0x10d084['jump']*(-0x1da0*-0x1+0x35b*0xb+-0x4225))/(-0x4*0x937+-0xd6a+0x32aa),'set':_0x10d084[_0x5be62b(0x585)+'ts']?_0x10d084['setLa'+'st']:null});}}return _0x26f240;}function _0x58aa72(){var _0x2eb854=_0x19bc25,_0x30fed3={'yNRzz':function(_0x242bdd,_0xbeeb81){return _0x242bdd+_0xbeeb81;}},_0x2f22a0=_0x24abea();if(!_0x2f22a0||!_0x2f22a0['mouse'+'Look'])return _0x5c216a[_0x2eb854(0x637)+'ified']=![],_0x5c216a[_0x2eb854(0x69b)]=_0x2eb854(0xa26)+_0x2eb854(0x9f9)+_0x2eb854(0x45f)+'t',null;var _0x39764f=_0x226e33['sdvsy'](parseInt,_0x2f22a0['mouse'+_0x2eb854(0x575)],0x1aa2+-0x159b*0x1+-0x4f7);if(_0x226e33['WJZCZ'](_0x514922,_0x39764f))_0x514922=_0x39764f;_0x5c216a['gette'+'rs']=_0x226e33['oRVCp'](_0x46a71a,_0x39764f);var _0x3af4c9=_0x226e33[_0x2eb854(0x276)](_0x2ab4dc),_0xf6b867=-0x110e+-0x1f3*-0x2+-0x463*-0x3,_0x56f390=-0x18ba+0x1fa7+0x231*-0x3;function _0x2fa08a(_0x2b0b99){var _0x25e66d=_0x2eb854;return _0x226e33[_0x25e66d(0x7bb)]===_0x25e66d(0x786)?(_0x56d440[_0x25e66d(0x637)+_0x25e66d(0x528)]=![],_0x555075[_0x25e66d(0x69b)]=_0x30fed3['yNRzz'](_0x30fed3[_0x25e66d(0x448)](_0x25e66d(0xc51)+'\x20',_0x50d6da['round'](_0x4beedf)),'\x20out\x20'+_0x25e66d(0x958)+_0x25e66d(0x965)),null):_0x2b0b99['lo']===null||_0x2b0b99['hi']===null?-0x931*0x3+0xda5+0xdee:_0x2b0b99['hi']-_0x2b0b99['lo'];}var _0x1867ac=null;for(var _0x465825 in _0x392876){var _0xf5fa51=_0x392876[_0x465825];if(!_0xf5fa51[_0x2eb854(0xac9)]||_0xf5fa51[_0x2eb854(0x21b)]===null)continue;if(_0x226e33[_0x2eb854(0x6bf)](_0x2fa08a,_0xf5fa51)<_0xf6b867)continue;if(_0xf5fa51[_0x2eb854(0x2ad)]>_0x56f390)continue;var _0x29811c=_0x3fa609(_0x514922+_0x4da26b,_0x226e33['Ndlkh']);if(_0x226e33['xFgvi'](typeof _0x29811c,_0x226e33[_0x2eb854(0x944)])||_0x226e33['xIVpI'](Math[_0x2eb854(0x5f5)](_0x226e33['bagcK'](_0xf5fa51[_0x2eb854(0x21b)],_0x29811c)),0xc*0x295+0x2533+-0x442f+0.001))continue;if(!_0x1867ac||_0xf5fa51[_0x2eb854(0xac9)]>_0x392876[_0x1867ac]['hits'])_0x1867ac=_0x465825;}var _0x3c8474=null;for(var _0x2df461 in _0x392876){if(_0x226e33['zLwYg']!=='SEwQr'){if(_0x2df461===_0x1867ac)continue;var _0x62a793=_0x392876[_0x2df461];if(!_0x62a793[_0x2eb854(0xac9)]||_0x226e33['OCUtG'](_0x62a793['last'],null))continue;if(_0x226e33[_0x2eb854(0x351)](_0x2fa08a,_0x62a793)<_0xf6b867)continue;if(_0x62a793[_0x2eb854(0x2ad)]>_0x56f390)continue;if(_0x62a793[_0x2eb854(0x21b)]>=-(-0x1*-0x8f5+-0xec+-0x7af)&&_0x226e33['mXgPI'](_0x62a793[_0x2eb854(0x21b)],0xdf0+0x15cc+-0x2362)){if(_0x226e33[_0x2eb854(0xa22)](_0x2eb854(0xc86),'RnKYB')){_0x2627c4[_0x2eb854(0x849)+_0x2eb854(0xb3c)+'ault'](),_0xeae759(_0x2f72f6['on'],_0x12c6e6['facto'+'r']-(-0xa7+-0x1*-0x393+-0x2*0x176+0.5));return;}else{_0x3c8474=_0x2df461;break;}}}else{if(_0x386ff9[_0x2eb854(0xa4b)]==='float')_0xfd48bd['hookP'+'ostfi'+'x']({'typeName':_0x2eb854(0x90b)+_0x2eb854(0x575),'methodName':_0x213a88['name'],'params':_0x256f37[_0x2eb854(0xea2)+_0x2eb854(0x40b)],'returnType':_0x18b3f1['wasmR'+'et']},_0x226e33['yrqyU'](_0x360f49,_0x2eb854(0x2cf),_0x1db415[_0x2eb854(0x5ac)]));else _0x3337d0['ret']===_0x226e33[_0x2eb854(0xac7)]&&_0x226e33[_0x2eb854(0xe2b)](_0x3fb69a[_0x2eb854(0xe7c)+'s'][_0x2eb854(0xe2a)+'h'],-0x167*-0xd+-0x1*-0x4bc+-0x16f6*0x1)&&_0x226e33['zrzKt'](_0x57fe65[_0x2eb854(0xe7c)+'s'][-0x11*0x19c+0x1*-0xc5b+0x27b7],'float')&&_0xda1829[_0x2eb854(0x78e)+_0x2eb854(0x55f)]({'typeName':_0x226e33[_0x2eb854(0xa79)],'methodName':_0x3b175d['name'],'params':_0x484384['wasmP'+_0x2eb854(0x40b)],'returnType':_0x3e619d},_0x226e33['XcAcl'](_0x4c7fc0,_0x226e33[_0x2eb854(0x79e)],_0xb3c39a[_0x2eb854(0x5ac)]));}}_0x5c216a[_0x2eb854(0x7a0)+'tter']=_0x1867ac,_0x5c216a[_0x2eb854(0xc51)+_0x2eb854(0x438)+'r']=_0x3c8474;var _0x5b2a1a,_0x2d2b56;if(_0x3af4c9&&_0x3af4c9['pitch']!==null)_0x2d2b56=_0x3af4c9['pitch'],_0x5b2a1a=_0x3af4c9[_0x2eb854(0x58b)],_0x5c216a[_0x2eb854(0x530)+'e']=_0x226e33['rIidd']('sette'+_0x2eb854(0xcd6)+_0x2eb854(0x881)+_0x3af4c9[_0x2eb854(0x1ee)],')');else _0x1867ac?(_0x5b2a1a=_0x392876[_0x1867ac]['last'],_0x5c216a[_0x2eb854(0x530)+'e']=_0x226e33[_0x2eb854(0x309)],_0x2d2b56=_0x3c8474?_0x392876[_0x3c8474]['last']:_0x3fa609(_0x39764f+_0x54c687,_0x2eb854(0x484))):(_0x5b2a1a=_0x3fa609(_0x39764f+_0x4da26b,'f32'),_0x2d2b56=_0x3fa609(_0x39764f+_0x54c687,'f32'),_0x5c216a['sourc'+'e']='field'+_0x2eb854(0xe68)+'\x20(gue'+'ss)');_0x5c216a['rawYa'+'w']=_0x5b2a1a,_0x5c216a['rawPi'+_0x2eb854(0x8c3)]=_0x2d2b56;if(typeof _0x5b2a1a!==_0x226e33['DZkuw']||!_0x226e33[_0x2eb854(0x96a)](isFinite,_0x5b2a1a)||typeof _0x2d2b56!==_0x2eb854(0x791)+'r'||!isFinite(_0x2d2b56)){if(_0x226e33[_0x2eb854(0x4a9)]!=='wylek')try{_0x4a25b2['close']();}catch(_0x135110){}else return _0x5c216a[_0x2eb854(0x637)+_0x2eb854(0x528)]=![],_0x5c216a[_0x2eb854(0x69b)]=_0x2eb854(0x4f5)+_0x2eb854(0xcb9)+_0x2eb854(0x7ff)+'eadab'+'le',null;}if(_0x226e33[_0x2eb854(0x3f9)](_0x2d2b56,-(0x1ed7*-0x1+0x1ec3+0x16*0x5))||_0x226e33[_0x2eb854(0xcee)](_0x2d2b56,-0x17cf+0x1*0x944+0xee5))return _0x5c216a['ident'+'ified']=![],_0x5c216a[_0x2eb854(0x69b)]=_0x226e33[_0x2eb854(0x525)](_0x2eb854(0xc51)+'\x20',Math['round'](_0x2d2b56))+_0x226e33['hgYrZ'],null;return _0x5c216a[_0x2eb854(0x69b)]='',_0x5c216a['ident'+_0x2eb854(0x528)]=!![],_0x5c216a[_0x2eb854(0xc51)]=_0x2d2b56,_0x5c216a['yaw']=_0x5b2a1a,_0x5c216a;}function _0x1848b9(_0x314dae,_0x599b95,_0x4b2649,_0x2591ee){var _0x3a35ed=_0x19bc25;if(_0x226e33['IiBTN']!==_0x226e33[_0x3a35ed(0x98e)])_0x226e33['AEFkX'](_0x1be1de,![]),_0x226e33[_0x3a35ed(0x9e3)](_0x175299);else{var _0x4d2435=_0x226e33['djHeH'](_0x2ed33f),_0x1acc7d=null,_0x311a3c=_0x314dae,_0x112801=_0x14e22e[_0x3a35ed(0xb6b)];if(_0x4d2435[_0x3a35ed(0x9a2)]){if(_0x226e33[_0x3a35ed(0x744)]!=='WDRlj'){_0x1acc7d=_0x4d2435['basis'];if(_0x4d2435[_0x3a35ed(0x5e9)])_0x311a3c=_0x4d2435[_0x3a35ed(0x5e9)];if(_0x4d2435[_0x3a35ed(0xb6b)]!==null)_0x112801=_0x4d2435['fov'];}else _0xfd74ff=!_0x57f8ee,_0x5bd362[_0x3a35ed(0x2b4)+_0x3a35ed(0x806)+'t']=_0x19063a?_0x3a35ed(0xbfc)+'\x20ON':_0x3a35ed(0xbfc)+'\x20off',_0x5ade0c['style']['backg'+_0x3a35ed(0xdd2)]=_0x135920?_0x5d0167:_0x3a35ed(0x34d)+_0x3a35ed(0x427)+'t',_0x52b3fc[_0x3a35ed(0x754)][_0x3a35ed(0x280)]=_0x23736e?_0x226e33[_0x3a35ed(0x99e)]:_0x226e33['lILTF'],_0x5cc76a();}var _0x359e2a,_0x234f0e,_0x40861b,_0x5bfc03,_0x1c8b9a,_0x1bad51,_0x7da4c7,_0x3babe4,_0x4f8d1e;if(_0x1acc7d){var _0x46a9bc=('8|1|0'+'|4|7|'+_0x3a35ed(0xa06)+'|3')['split']('|'),_0x52a985=0x1*-0x1079+0x944+0x735;while(!![]){switch(_0x46a9bc[_0x52a985++]){case'0':_0x40861b=_0x1acc7d['fwd'][-0xaf5*-0x2+-0x1*-0xf53+-0x253b];continue;case'1':_0x234f0e=_0x1acc7d[_0x3a35ed(0x748)][0x1e59+0x1*-0xc2f+-0x1229*0x1];continue;case'2':_0x7da4c7=_0x1acc7d['up'][-0x8ee+0x2405+-0x1*0x1b17];continue;case'3':_0x4f8d1e=_0x1acc7d['up'][0x1ff*0x12+-0x1107+-0x12e5];continue;case'4':_0x5bfc03=_0x1acc7d['right'][-0x21bc+-0x1a82+0x1*0x3c3e];continue;case'5':_0x1bad51=_0x1acc7d['right'][0x15e6+0x1e7e+0x5a*-0x95];continue;case'6':_0x3babe4=_0x1acc7d['up'][0x1204+-0xac+-0x17*0xc1];continue;case'7':_0x1c8b9a=_0x1acc7d[_0x3a35ed(0x2a9)][0x1b+-0x16a*0x19+0x2340];continue;case'8':_0x359e2a=_0x1acc7d['fwd'][-0xe83+0x713*-0x4+-0x2acf*-0x1];continue;}break;}}else{var _0x34f518=_0x58aa72();if(!_0x34f518)return null;var _0x5e95bc=_0x226e33['kVyhb'](_0x34f518[_0x3a35ed(0xc51)],Math['PI'])/(-0x3a8+-0xefc+0x1*0x1358),_0x54e28b=_0x226e33[_0x3a35ed(0x7c8)](_0x34f518['yaw'],Math['PI'])/(-0x78b*0x5+-0x127f+-0x2f*-0x136),_0x238c3c=Math['cos'](_0x5e95bc);_0x359e2a=_0x226e33['dDnBx'](Math[_0x3a35ed(0x5d2)](_0x54e28b),_0x238c3c),_0x234f0e=-Math[_0x3a35ed(0x5d2)](_0x5e95bc),_0x40861b=_0x226e33['wRJgq'](Math[_0x3a35ed(0x715)](_0x54e28b),_0x238c3c),_0x5bfc03=_0x40861b,_0x1c8b9a=0x1*-0xa61+0x1*0x21a+0xa3*0xd,_0x1bad51=-_0x359e2a,_0x7da4c7=_0x226e33[_0x3a35ed(0xa7d)](_0x226e33['uRQXO'](_0x234f0e,_0x1bad51),_0x226e33[_0x3a35ed(0x497)](_0x40861b,_0x1c8b9a)),_0x3babe4=_0x226e33[_0x3a35ed(0x5c5)](_0x226e33['pAiGw'](_0x40861b,_0x5bfc03),_0x359e2a*_0x1bad51),_0x4f8d1e=_0x226e33['NbHEr'](_0x226e33[_0x3a35ed(0x971)](_0x359e2a,_0x1c8b9a),_0x226e33[_0x3a35ed(0xa75)](_0x234f0e,_0x5bfc03));}var _0x4bb9f0=_0x599b95[0x13ff+0x12bb+-0x26ba]-_0x311a3c[-0x2*-0xa93+0x1*0x148f+-0x29b5],_0x1fac74=_0x226e33[_0x3a35ed(0x526)](_0x599b95[0x16*0x1b4+0x2*-0xc4f+0x17*-0x8f],_0x311a3c[-0x1927+-0x3*0x3b7+0x1*0x244d]),_0x665e96=_0x599b95[0x8e4*-0x4+-0x1b*0xa8+0x354a]-_0x311a3c[-0x2568+-0x138e*0x1+0x38f8],_0x359bc7=_0x226e33['FThRh'](_0x226e33[_0x3a35ed(0xdfe)](_0x4bb9f0,_0x359e2a),_0x1fac74*_0x234f0e)+_0x665e96*_0x40861b;if(_0x226e33['iLzLs'](_0x359bc7,-0x1788+-0x9*-0x267+-0x1*-0x1e9+0.05))return null;var _0x3deea9=_0x226e33[_0x3a35ed(0x254)](_0x4bb9f0*_0x5bfc03+_0x1fac74*_0x1c8b9a,_0x665e96*_0x1bad51),_0x10361f=_0x226e33[_0x3a35ed(0xd4d)](_0x4bb9f0*_0x7da4c7+_0x226e33[_0x3a35ed(0x4ed)](_0x1fac74,_0x3babe4),_0x226e33[_0x3a35ed(0xd3d)](_0x665e96,_0x4f8d1e)),_0x50c421=_0x4b2649/_0x2591ee,_0x13f70f=_0x226e33['CfezK'](_0x112801*Math['PI'],-0x4*0x1f6+0x233d+-0x1ab1),_0x3b2636=Math[_0x3a35ed(0x52a)](_0x226e33[_0x3a35ed(0x2bc)](_0x13f70f,0x52a+-0x2c7+-0x7*0x57)),_0x20c875=_0x3deea9/_0x359bc7/(_0x3b2636*_0x50c421),_0x26e60b=_0x10361f/_0x359bc7/_0x3b2636;if(_0x20c875<-(-0x10*0x35+0x1e1f+-0x1ace+0.6000000000000001)||_0x20c875>-0x46*-0x55+0x7a*0x1d+-0x250f+0.6000000000000001||_0x26e60b<-(0x2*0x1233+0x804+-0x2c69+0.6000000000000001)||_0x226e33['Pmrzv'](_0x26e60b,-0xf0c+0x7*0x4ea+-0x1359+0.6000000000000001))return null;return{'x':_0x226e33[_0x3a35ed(0x68d)](_0x226e33[_0x3a35ed(0x52c)](_0x20c875,0x25b8+0xa*0x2f9+0x21b9*-0x2+0.5),0x4*0x93+-0x1ca+-0x82+0.5)*_0x4b2649,'y':_0x226e33['NbHEr'](0x7*0x233+0xe5b+-0xe0*0x22+0.5,_0x26e60b*(0x11ee+-0xeeb+-0x303+0.5))*_0x2591ee,'z':_0x359bc7};}}var _0xf453eb={'open':![],'cat':'comba'+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x503579=_0x19bc25(0xce2)+'a-sw-'+_0x19bc25(0x9ff)+_0x19bc25(0x5e9),_0x23e07b=null,_0xdd2941=[{'id':'comba'+'t','label':'CMB'},{'id':_0x226e33['ieiMF'],'label':_0x19bc25(0x781)},{'id':_0x226e33[_0x19bc25(0xe06)],'label':'VAL'},{'id':'log','label':_0x19bc25(0xcca)}],_0x26c6a1=_0x226e33['QhdnW'](_0x226e33[_0x19bc25(0x553)](_0x226e33[_0x19bc25(0xa8d)](_0x226e33[_0x19bc25(0x3d5)](_0x226e33[_0x19bc25(0x4ab)](_0x226e33[_0x19bc25(0xe36)](_0x226e33[_0x19bc25(0xa7e)](_0x226e33[_0x19bc25(0x8d4)](_0x226e33[_0x19bc25(0x1ea)](_0x226e33['SgTrA'](_0x226e33[_0x19bc25(0x91d)](_0x226e33[_0x19bc25(0x9a4)](_0x226e33[_0x19bc25(0x6b7)](_0x226e33['MFKvf'](_0x226e33['rLDIR'](_0x226e33['PujZn'](_0x226e33['idaZp'](_0x226e33[_0x19bc25(0xa98)](_0x226e33[_0x19bc25(0xd99)](_0x226e33['DUgKu'](_0x226e33['pjAah']+(_0x19bc25(0xdef)+_0x19bc25(0x729)+_0x19bc25(0xcc3)+'ot.mn'+_0x19bc25(0xdac)+'l{pos'+_0x19bc25(0xd5d)+_0x19bc25(0x8a2)+_0x19bc25(0xab4)+_0x19bc25(0xc17)+'px;bo'+_0x19bc25(0xa42)+'24px;'+_0x19bc25(0xb41)+_0x19bc25(0x56a)+_0x19bc25(0xc27)+_0x19bc25(0x85f)+_0x19bc25(0xabe)+_0x19bc25(0x27f)+_0x19bc25(0xe9c)+';max-'+_0x19bc25(0x83a)+'t:min'+'(500p'+_0x19bc25(0x57d)+'c(100'+_0x19bc25(0x7d4)+_0x19bc25(0x853)+');')+('displ'+_0x19bc25(0x83b)+'ex;ga'+_0x19bc25(0x4f8)+'x;pad'+_0x19bc25(0xa61)+_0x19bc25(0xa6f)+'borde'+_0x19bc25(0x8f4)+'ius:2'+'2px;p'+'ointe'+_0x19bc25(0xbef)+_0x19bc25(0xdcf)+_0x19bc25(0x275)+_0x19bc25(0xdd3)+_0x19bc25(0x836)+_0x19bc25(0x5eb)+'47;')+(_0x19bc25(0xd59)+'round'+_0x19bc25(0x753)+_0x19bc25(0xa29)+'7,21,'+_0x19bc25(0x68e)+_0x19bc25(0xb0e)+_0x19bc25(0x201)+_0x19bc25(0x238)+_0x19bc25(0x2fa)+'(22px'+')\x20sat'+_0x19bc25(0xd92)+_0x19bc25(0xd3b)+');-we'+'bkit-'+_0x19bc25(0xb0e)+'rop-f'+_0x19bc25(0x238)+':blur'+_0x19bc25(0xa83)+_0x19bc25(0xcae)+_0x19bc25(0xd92)+_0x19bc25(0xd3b)+');'),_0x226e33['ZYsXt'])+('opaci'+'ty:0;'+_0x19bc25(0x34d)+_0x19bc25(0xb7c)+'trans'+_0x19bc25(0x672)+_0x19bc25(0xde9)+_0x19bc25(0x785)+_0x19bc25(0x610)+'event'+_0x19bc25(0xb42)+_0x19bc25(0xaa6)+_0x19bc25(0x743)+_0x19bc25(0xc3b)+_0x19bc25(0xe62)+_0x19bc25(0x1c7)+'\x20ease'+_0x19bc25(0xdf2)+'sform'+_0x19bc25(0xc0f)+_0x19bc25(0x6f9)+_0x19bc25(0x41e)+_0x19bc25(0x53a)+_0x19bc25(0xe47)+'.36,1'+');')+('color'+_0x19bc25(0xe1e)+'ef2;f'+_0x19bc25(0x9d6)+_0x19bc25(0xd48)+_0x19bc25(0x8b2)+'ont-f'+'amily'+':\x22Int'+_0x19bc25(0xd83)+_0x19bc25(0x941)+_0x19bc25(0x344)+_0x19bc25(0xe2f)+_0x19bc25(0x460)+'sans-'+_0x19bc25(0xb1f)+';}')+_0x226e33['aCYZA'],_0x226e33['IYSWv'])+(_0x19bc25(0x31c)+_0x19bc25(0x8f4)+'ius:1'+_0x19bc25(0x625)+_0x19bc25(0xd45)+'ound:'+_0x19bc25(0xd28)+_0x19bc25(0xcdb)+'55,25'+'5,.02'+'5);bo'+_0x19bc25(0xc3d)+_0x19bc25(0xa4e)+_0x19bc25(0x75d)+_0x19bc25(0x527)+'\x201px\x20'+_0x19bc25(0xd28)+'255,2'+_0x19bc25(0x357)+'5,.05'+_0x19bc25(0xd67))+_0x226e33['ySVpg']+_0x226e33['FUdEd']+_0x226e33['rmbNE']+_0x226e33[_0x19bc25(0x203)]+(_0x19bc25(0xe9d)+_0x19bc25(0xbb2)+_0x19bc25(0x9d8)+'olor:'+'rgba('+_0x19bc25(0xb4b)+_0x19bc25(0xc6f)+_0x19bc25(0xaa0)+';}'),_0x226e33[_0x19bc25(0xae2)])+(_0x19bc25(0xb51)+'ain{f'+_0x19bc25(0xcaf)+';min-'+_0x19bc25(0xb41)+':0;di'+_0x19bc25(0x502)+':flex'+_0x19bc25(0xaef)+_0x19bc25(0x364)+_0x19bc25(0xb67)+_0x19bc25(0x518)+_0x19bc25(0xb64))+('.mn-t'+_0x19bc25(0xe8f)+'splay'+':flex'+_0x19bc25(0x2b1)+'n-ite'+_0x19bc25(0xc62)+'nter;'+_0x19bc25(0x382)+_0x19bc25(0x798)+'addin'+'g:6px'+'\x206px\x20'+_0x19bc25(0x93f)+'user-'+_0x19bc25(0x523)+_0x19bc25(0x501)+_0x19bc25(0x2a5))+_0x226e33[_0x19bc25(0xd90)]+(_0x19bc25(0x26a)+_0x19bc25(0x369)+_0x19bc25(0x6d6)+':17px'+';font'+_0x19bc25(0x43e)+'ht:65'+'0;}'),_0x19bc25(0x9e1)+'ub{fo'+'nt-si'+'ze:11'+_0x19bc25(0xea7)+_0x19bc25(0xe62)+_0x19bc25(0x3e0))+('.mn-c'+'lose{'+_0x19bc25(0x829)+'ay:gr'+'id;pl'+'ace-i'+_0x19bc25(0x323)+_0x19bc25(0x926)+_0x19bc25(0xbfe)+_0x19bc25(0xc33)+_0x19bc25(0xb5b)+'ight:'+_0x19bc25(0x6bb)+_0x19bc25(0x31c)+_0x19bc25(0xdd0)+'order'+'-radi'+_0x19bc25(0x1f1)+_0x19bc25(0x961)+_0x19bc25(0x405)+'nd:tr'+_0x19bc25(0xc2f)+'rent;'),'color'+_0x19bc25(0xa44)+'rit;o'+_0x19bc25(0x3f2)+'y:.45'+';curs'+_0x19bc25(0x6fb)+'inter'+';}'),_0x226e33['RhwqT'])+_0x226e33[_0x19bc25(0x83e)],_0x19bc25(0xab3)+_0x19bc25(0x875)+_0x19bc25(0xcaf)+_0x19bc25(0x607)+_0x19bc25(0x83a)+'t:0;o'+'verfl'+'ow-y:'+_0x19bc25(0x1ce)+_0x19bc25(0x829)+'ay:gr'+_0x19bc25(0x3af)+_0x19bc25(0xc10)+'mplat'+_0x19bc25(0xccc)+_0x19bc25(0xd31)+_0x19bc25(0xbaf)+_0x19bc25(0x4df)+'o-fil'+'l,min'+_0x19bc25(0x8ce)+'50px,'+_0x19bc25(0x4ec)+';'),_0x226e33['hsBhd'])+('.mn-c'+'ols::'+_0x19bc25(0x960)+'it-sc'+'rollb'+_0x19bc25(0x29d)+_0x19bc25(0x56c)+_0x19bc25(0x50a)),'.mn-c'+_0x19bc25(0x3ed)+_0x19bc25(0x960)+_0x19bc25(0xe43)+'rollb'+_0x19bc25(0x736)+_0x19bc25(0xa0c)+'ackgr'+_0x19bc25(0x537)+_0x19bc25(0xd28)+_0x19bc25(0xcdb)+'55,25'+_0x19bc25(0xcb0)+');bor'+'der-r'+_0x19bc25(0x517)+_0x19bc25(0xa5d)+'}')+(_0x19bc25(0x539)+'ard{b'+_0x19bc25(0x1ee)+_0x19bc25(0x713)+_0x19bc25(0x2ea)+_0x19bc25(0x35d)+_0x19bc25(0x1e1)+_0x19bc25(0xa05)+_0x19bc25(0x447)+'55,25'+_0x19bc25(0x2af)+',.025'+_0x19bc25(0xa30)+_0x19bc25(0x60a)+'ow:in'+'set\x200'+_0x19bc25(0x73f)+'1px\x20r'+'gba(2'+_0x19bc25(0x357)+_0x19bc25(0x2af)+_0x19bc25(0x9dc)+';}')+('.sk-c'+'ard.o'+'n{bac'+_0x19bc25(0x405)+_0x19bc25(0xa34)+_0x19bc25(0x599)+'5,255'+',255,'+_0x19bc25(0xdaa)+_0x19bc25(0xc9f)+_0x19bc25(0xbc1)+_0x19bc25(0x550)+_0x19bc25(0xca4)+'\x200\x201p'+_0x19bc25(0x8d7)+_0x19bc25(0x902)+_0x19bc25(0xc5a)+_0x19bc25(0x88f)+'28);}'),_0x226e33['oJtTX']),_0x19bc25(0x539)+_0x19bc25(0x3be)+'itle{'+_0x19bc25(0x39a)+_0x19bc25(0xc14)+'-widt'+'h:0;}')+_0x226e33['FuXlv'],_0x19bc25(0x539)+_0x19bc25(0x962)+_0x19bc25(0x54c)+_0x19bc25(0x3c1)+'-titl'+_0x19bc25(0x61c)+'ong{c'+'olor:'+_0x19bc25(0x81b)+'f5;}'),_0x19bc25(0x989)+_0x19bc25(0xdbd)+'paddi'+'ng:0\x20'+_0x19bc25(0x51b)+'10px;'+'}')+_0x226e33['jtcKQ'],_0x19bc25(0x539)+_0x19bc25(0xa24)+_0x19bc25(0x502)+_0x19bc25(0xca3)+';alig'+'n-ite'+_0x19bc25(0xc62)+_0x19bc25(0xa1d)+_0x19bc25(0x24a)+'px;pa'+'dding'+_0x19bc25(0x710)+_0x19bc25(0xaf4)+'t-siz'+_0x19bc25(0x98d)+'5px;}')+('.sk-l'+'abel{'+_0x19bc25(0x39a)+_0x19bc25(0x7d6)+_0x19bc25(0xbaa)+_0x19bc25(0x4af)+_0x19bc25(0x84e)+_0x19bc25(0x848)+_0x19bc25(0x789)+'}')+(_0x19bc25(0x3e7)+_0x19bc25(0xac4)+_0x19bc25(0x86d)+'y:blo'+_0x19bc25(0x617)+_0x19bc25(0x69a)+'ze:10'+_0x19bc25(0xea7)+_0x19bc25(0xe62)+':.4;}')+('.sk-s'+_0x19bc25(0x4cf)+_0x19bc25(0x91a)+_0x19bc25(0xb77)+_0x19bc25(0x908)+_0x19bc25(0x9fc)+_0x19bc25(0x688)+_0x19bc25(0xd08)+'heigh'+'t:14p'+_0x19bc25(0x21d)+_0x19bc25(0xcc8)+_0x19bc25(0xb9f)+'er-ra'+_0x19bc25(0xa90)+_0x19bc25(0xb75)+_0x19bc25(0xd59)+_0x19bc25(0xdd2)+':rgba'+'(255,'+_0x19bc25(0xcdb)+'55,.0'+_0x19bc25(0xe54)+'rsor:'+'point'+_0x19bc25(0xbbb)+'ex:no'+_0x19bc25(0x864))+('.sk-s'+_0x19bc25(0x4cf)+'::aft'+_0x19bc25(0x5b9)+_0x19bc25(0xe6d)+':\x22\x22;p'+_0x19bc25(0xb89)+_0x19bc25(0x430)+_0x19bc25(0x9f5)+_0x19bc25(0x8e6)+':3px;'+_0x19bc25(0xe20)+_0x19bc25(0x1f3)+_0x19bc25(0x688)+_0x19bc25(0x847)+_0x19bc25(0xddb)+_0x19bc25(0x3e2)+_0x19bc25(0x31c)+_0x19bc25(0x8f4)+'ius:5'+'0%;'),_0x19bc25(0xd59)+_0x19bc25(0xdd2)+_0x19bc25(0x753)+_0x19bc25(0x7c4)+_0x19bc25(0xcdb)+_0x19bc25(0x253)+_0x19bc25(0x733)+_0x19bc25(0x540)+'ion:l'+_0x19bc25(0x97e)+'2s,ba'+_0x19bc25(0x1e1)+_0x19bc25(0xd0c)+_0x19bc25(0x741))+_0x226e33['wtKFp'],'.sk-s'+'witch'+_0x19bc25(0x210)+_0x19bc25(0x86f)+'ked=\x22'+_0x19bc25(0x476)+_0x19bc25(0x996)+_0x19bc25(0x98b)+'eft:1'+_0x19bc25(0xe6a)+_0x19bc25(0xd45)+_0x19bc25(0x537)+_0x19bc25(0x2f5)+'9d;}')+('.sk-r'+'ange{'+'displ'+'ay:fl'+_0x19bc25(0xe1b)+_0x19bc25(0x9c5)+'tems:'+_0x19bc25(0x926)+'r;gap'+_0x19bc25(0x3e2)+'}'),'.sk-s'+'lider'+'{-web'+_0x19bc25(0xcd1)+_0x19bc25(0x4bc)+_0x19bc25(0x279)+_0x19bc25(0xba6)+_0x19bc25(0x59f)+'rance'+_0x19bc25(0xba9)+_0x19bc25(0x612)+_0x19bc25(0x2c0)+_0x19bc25(0x4fe)+'ght:8'+'px;ba'+_0x19bc25(0x1e1)+_0x19bc25(0x428)+_0x19bc25(0x4c1)+_0x19bc25(0xd9d)+';}')+_0x226e33['CkAxU']+(_0x19bc25(0xd59)+_0x19bc25(0xdd2)+':line'+_0x19bc25(0xd64)+_0x19bc25(0xe52)+_0x19bc25(0x61a)+'6b9d,'+_0x19bc25(0x2f5)+'9d)\x200'+_0x19bc25(0x647)+_0x19bc25(0x760)+_0x19bc25(0x8ba)+_0x19bc25(0x3f8)+_0x19bc25(0xddd)+_0x19bc25(0x7db)+_0x19bc25(0x27c)+_0x19bc25(0x599)+_0x19bc25(0x2af)+_0x19bc25(0x30d)+'.08);'+'}')+('.sk-s'+_0x19bc25(0x81c)+'::-we'+'bkit-'+'slide'+_0x19bc25(0xd44)+_0x19bc25(0xa9a)+_0x19bc25(0xab9)+_0x19bc25(0xc78)+_0x19bc25(0x4a2)+'e:non'+_0x19bc25(0xa12)+_0x19bc25(0x4de)+'x;hei'+_0x19bc25(0xe9a)+_0x19bc25(0x45a)+'rgin-'+_0x19bc25(0x38c)+'2px;b'+_0x19bc25(0x1ee)+_0x19bc25(0x713)+_0x19bc25(0x734)+_0x19bc25(0xd4f)+_0x19bc25(0x405)+_0x19bc25(0x9b3)+'f6b9d'+';}'),_0x226e33['SbnIw'])+_0x226e33[_0x19bc25(0x33d)],'.sk-n'+_0x19bc25(0xbe9)+_0x19bc25(0xca2)+'lor:#'+'ff7a9'+'3;}')+('.sk-b'+'tn{al'+'ign-s'+'elf:f'+'lex-s'+_0x19bc25(0x2ef)+'borde'+'r:0;b'+_0x19bc25(0x1ee)+_0x19bc25(0x713)+'us:8p'+_0x19bc25(0xb7e)+'ding:'+_0x19bc25(0x444)+_0x19bc25(0x625)+'ackgr'+_0x19bc25(0x537)+'#ff6b'+_0x19bc25(0x9d1)+'lor:#'+'fff;')+(_0x19bc25(0x856)+'size:'+'11.5p'+_0x19bc25(0x860)+_0x19bc25(0xc5c)+_0x19bc25(0x3a7)+_0x19bc25(0xb7d)+'rsor:'+'point'+'er;fo'+_0x19bc25(0xdb6)+'mily:'+_0x19bc25(0x450)+_0x19bc25(0xe96))+(_0x19bc25(0x862)+_0x19bc25(0x2cb)+_0x19bc25(0x3c9)+'ilter'+':brig'+_0x19bc25(0x5fa)+_0x19bc25(0x42f)+');}'),_0x226e33[_0x19bc25(0x41d)])+('#saku'+_0x19bc25(0xc3e)+_0x19bc25(0xba5)+'ositi'+_0x19bc25(0x85b)+_0x19bc25(0x267)+_0x19bc25(0xd7c)+_0x19bc25(0xe09)+_0x19bc25(0xa8a)+'2px;z'+_0x19bc25(0xdd3)+_0x19bc25(0x836)+'74836'+_0x19bc25(0xbdd)+_0x19bc25(0x81a)+'point'+_0x19bc25(0x879)+'dth:2'+_0x19bc25(0x466)+_0x19bc25(0xddb)+_0x19bc25(0xba8)+';opac'+_0x19bc25(0xe3b)+_0x19bc25(0xe76))+(_0x19bc25(0x34d)+'ition'+':opac'+_0x19bc25(0xab7)+'2s;po'+_0x19bc25(0xb6e)+_0x19bc25(0xbcf)+'ts:au'+_0x19bc25(0xcbf)+_0x19bc25(0x679)+_0x19bc25(0xbb0)+'shado'+_0x19bc25(0x932)+'\x204px\x20'+_0x19bc25(0xd28)+_0x19bc25(0xb8d)+_0x19bc25(0x326)+_0x19bc25(0x81d)+_0x19bc25(0xd67)),_0x3749bd='<svg\x20'+'viewB'+_0x19bc25(0x72d)+_0x19bc25(0x95d)+'\x2024\x22>'+_0x19bc25(0xcec)+_0x19bc25(0x455)+'12\x2021'+'c-1.5'+_0x19bc25(0x787)+_0x19bc25(0x686)+'-4-7.'+_0x19bc25(0x3d4)+'.5\x201.'+'8-4.5'+_0x19bc25(0xc4e)+'5s4\x202'+'\x204\x204.'+_0x19bc25(0x2eb)+'-2.5\x20'+_0x19bc25(0xb80)+'.5z\x22\x20'+('fill='+_0x19bc25(0xa14)+'\x22\x20str'+_0x19bc25(0x477)+_0x19bc25(0x2f5)+'9d\x22\x20s'+'troke'+_0x19bc25(0x561)+_0x19bc25(0x1d2)+'\x20stro'+_0x19bc25(0x8bb)+'necap'+'=\x22rou'+_0x19bc25(0x71e)+_0x19bc25(0x819)+_0x19bc25(0x480)+_0x19bc25(0xb4c)+_0x19bc25(0x3f3)+_0x19bc25(0x967))+_0x226e33[_0x19bc25(0xc40)],_0x3a606d=_0x226e33[_0x19bc25(0xe48)](_0x226e33['kdsrl']('<svg\x20'+'class'+_0x19bc25(0x7cf)+_0x19bc25(0x388)+_0x19bc25(0x2f8)+'viewB'+'ox=\x220'+_0x19bc25(0x95d)+_0x19bc25(0x7b8)+'<path'+'\x20d=\x22M'+_0x19bc25(0xe73)+_0x19bc25(0xe19)+_0x19bc25(0x787)+_0x19bc25(0x686)+_0x19bc25(0x89e)+_0x19bc25(0x3d4)+_0x19bc25(0xd49)+_0x19bc25(0xa5e)+_0x19bc25(0xc4e)+_0x19bc25(0x511)+_0x19bc25(0x257)+'5c0\x203'+_0x19bc25(0xa09)+_0x19bc25(0xb80)+_0x19bc25(0x3f6),_0x226e33[_0x19bc25(0x48e)]),_0x19bc25(0x1c2)+'le\x20cx'+'=\x2212\x22'+_0x19bc25(0x205)+_0x19bc25(0x583)+'=\x221.2'+_0x19bc25(0x5b5)+_0x19bc25(0x234)+_0x19bc25(0x9f3)+_0x19bc25(0x35e)+'svg>');function _0x2636e9(_0x2bdcb2,_0x5c8fa7,_0x2be898){var _0x2fb36f=_0x19bc25,_0x4a15a4=document['creat'+'eElem'+_0x2fb36f(0xc6a)](_0x2bdcb2);if(_0x5c8fa7)_0x4a15a4[_0x2fb36f(0x593)+_0x2fb36f(0xdd5)]=_0x5c8fa7;if(_0x2be898!=null)_0x4a15a4['inner'+'HTML']=_0x2be898;return _0x4a15a4;}function _0x4588ac(_0x422d22,_0x2ee597){var _0x4c097c=_0x19bc25,_0x494742=_0x226e33[_0x4c097c(0x96f)](_0x2636e9,_0x4c097c(0x9be),'sk-ca'+'rd'+(_0x2ee597?_0x4c097c(0x302):'')),_0xb37ee9=_0x226e33['sdvsy'](_0x2636e9,'div',_0x4c097c(0xdc5)+_0x4c097c(0x573)+'ad'),_0x4b6deb=_0x2636e9('div',_0x4c097c(0xdc5)+_0x4c097c(0x1e2)+_0x4c097c(0x1dc),_0x4c097c(0xb81)+'ng>'+_0x422d22+_0x226e33['yGTYX']);_0xb37ee9[_0x4c097c(0x55e)+'dChil'+'d'](_0x4b6deb);var _0xfcfd7f=_0x2636e9(_0x4c097c(0x9be),_0x226e33[_0x4c097c(0xdb0)]);return _0x494742[_0x4c097c(0x55e)+'dChil'+'d'](_0xb37ee9),_0x494742[_0x4c097c(0x55e)+'dChil'+'d'](_0xfcfd7f),_0x494742[_0x4c097c(0x649)]=_0xfcfd7f,_0x494742['head']=_0x4b6deb,_0x494742;}function _0x491f3a(_0x48e9bc,_0x368eae){var _0x151516=_0x19bc25,_0x238edf={'INegy':function(_0x44060b,_0x41ad29){return _0x226e33['MLJKh'](_0x44060b,_0x41ad29);},'DKyTb':_0x151516(0x417),'fuRQc':function(_0x365b01){var _0x6a9fe7=_0x151516;return _0x226e33[_0x6a9fe7(0xb44)](_0x365b01);}},_0x28b871=_0x2636e9(_0x151516(0x3c5)+'n',_0x151516(0xe38)+_0x151516(0x325));_0x28b871['type']=_0x226e33[_0x151516(0xada)];var _0x5db15c=function(){var _0x1a2bb5=_0x151516;_0x28b871[_0x1a2bb5(0x5e4)+_0x1a2bb5(0xbcd)+'te'](_0x226e33['QCQXP'],_0x226e33[_0x1a2bb5(0x299)](_0x48e9bc)?_0x1a2bb5(0x776):_0x226e33[_0x1a2bb5(0x557)]);};return _0x28b871['oncli'+'ck']=function(){var _0xe344=_0x151516;_0x238edf['INegy'](_0x238edf['DKyTb'],'yhpIq')?(_0x368eae(!_0x48e9bc()),_0x238edf[_0xe344(0x3c3)](_0x5db15c)):_0x3f9bfc=_0x5a2ec0();},_0x5db15c(),_0x28b871[_0x151516(0x3ea)]=_0x5db15c,_0xf453eb['syncs'][_0x151516(0x822)](_0x5db15c),_0x28b871;}function _0xe75fd0(_0x218f5f,_0x5f244c,_0x5c9b05,_0x50cb57,_0x5da2b3){var _0x381511=_0x19bc25,_0x4feb30={'BGuzr':function(_0x3dc053){var _0x3ecb54=_0x500f;return _0x226e33[_0x3ecb54(0x329)](_0x3dc053);},'TjXDX':function(_0x1020e3,_0x2ccd66){return _0x1020e3(_0x2ccd66);},'GRqZH':function(_0x173eaf,_0x3aae58){return _0x226e33['YFVMt'](_0x173eaf,_0x3aae58);},'mBvdl':function(_0x5da87f,_0x3b2395){return _0x5da87f(_0x3b2395);},'lbVVT':function(_0x881d5,_0x1f8f58){return _0x226e33['tJhWd'](_0x881d5,_0x1f8f58);},'Kngdc':_0x226e33[_0x381511(0x775)]},_0x101afe=_0x226e33[_0x381511(0x6b0)](_0x2636e9,_0x381511(0x9be),_0x226e33['vxbHP']),_0xfb2e2a=document['creat'+_0x381511(0xaaa)+_0x381511(0xc6a)](_0x381511(0x667));_0xfb2e2a[_0x381511(0xb33)]='range',_0xfb2e2a['class'+_0x381511(0xdd5)]=_0x226e33[_0x381511(0xa9f)],_0xfb2e2a[_0x381511(0x5af)]=String(_0x218f5f),_0xfb2e2a['max']=String(_0x5f244c),_0xfb2e2a[_0x381511(0xb5e)]=_0x226e33[_0x381511(0x91e)](String,_0x5c9b05);var _0xa41657=_0x226e33['pXPMP'](_0x2636e9,_0x226e33['wgeGS'],_0x226e33['PCfgq']),_0x546726=function(){var _0x27f0e8=_0x381511,_0x1293fd=_0x4feb30[_0x27f0e8(0x72e)](_0x50cb57);_0xfb2e2a['value']=_0x4feb30['TjXDX'](String,_0x1293fd),_0xa41657['textC'+'onten'+'t']=_0x4feb30[_0x27f0e8(0x9b6)](_0x5c9b05<-0x1d29+-0x27*-0x3+0x1*0x1cb5?_0x1293fd[_0x27f0e8(0xa0d)+'ed'](-0x126e+-0x1928+0x1*0x2b97):_0x4feb30['mBvdl'](String,Math[_0x27f0e8(0xdd2)](_0x1293fd)),_0xfb2e2a[_0x27f0e8(0xbc9)+'et'][_0x27f0e8(0x9d3)]||'');var _0x3016fb=_0x4feb30['lbVVT'](_0x1293fd-_0x218f5f,_0x5f244c-_0x218f5f)*(-0x1f2f+-0xeea+0x2e7d);_0xfb2e2a['style'][_0x27f0e8(0x53d)+_0x27f0e8(0x9a3)+'y'](_0x4feb30[_0x27f0e8(0x3b9)],_0x3016fb+'%');};return _0xfb2e2a['oninp'+'ut']=function(){var _0x9fd66f=_0x381511,_0x4f90eb={'oeyBq':function(_0x437b46,_0x405272,_0x3477dc){return _0x437b46(_0x405272,_0x3477dc);},'WBQaq':function(_0x5738b5,_0x4fb7a7,_0x571dda){return _0x5738b5(_0x4fb7a7,_0x571dda);}};if(_0x226e33['BTGvZ']('VouCy',_0x226e33[_0x9fd66f(0x6c6)])){if(!_0x3ba466['on'])_0x4f90eb['oeyBq'](_0x268426,!![],![]);else{if(_0x3a2e9a['boxes'])_0x1abaaf(![],![]);else{if(_0x17879f())_0x4f90eb[_0x9fd66f(0xe95)](_0x438164,!![],!![]);else _0x4f90eb['WBQaq'](_0x2ac0a8,![],![]);}}}else _0x226e33['DLrav'](_0x5da2b3,_0x226e33[_0x9fd66f(0x4ff)](parseFloat,_0xfb2e2a[_0x9fd66f(0x6ff)])||_0x218f5f),_0x546726();},_0x101afe[_0x381511(0x55e)+'dChil'+'d'](_0xfb2e2a),_0x101afe[_0x381511(0x55e)+_0x381511(0xd13)+'d'](_0xa41657),_0x101afe[_0x381511(0x3ea)]=_0x546726,_0x101afe['input']=_0xfb2e2a,_0x546726(),_0xf453eb[_0x381511(0x90e)][_0x381511(0x822)](_0x546726),_0x101afe;}function _0x3154ca(_0x719513,_0x4016cf){var _0x34186e=_0x19bc25,_0x2e6f08=_0x2636e9(_0x226e33[_0x34186e(0xe4c)],_0x226e33['SURAs']),_0x42403d=_0x2636e9('div',_0x226e33['cqUeX'],_0x719513+(_0x4016cf?_0x226e33[_0x34186e(0xbd7)]+_0x4016cf+_0x226e33[_0x34186e(0xc50)]:''));return _0x2e6f08['appen'+_0x34186e(0xd13)+'d'](_0x42403d),_0x2e6f08;}function _0x419ecb(_0x2cd469,_0x1df61d,_0x2556fb,_0x28b309){var _0x2092d6=_0x19bc25,_0x50dfcb=_0x2cd469&&_0x2cd469['surve'+'y']&&_0x2cd469[_0x2092d6(0x5a8)+'y'][_0x1df61d];if(!_0x50dfcb)return'-';for(var _0x5bb240=-0x2169+-0x76+0x12b*0x1d;_0x5bb240<_0x50dfcb['lengt'+'h'];_0x5bb240++){if(_0x50dfcb[_0x5bb240]['o']===_0x2556fb){if(_0x28b309==='v3'){var _0x4e50bb=_0x50dfcb[_0x5bb240][_0x2092d6(0x321)]||[_0x50dfcb[_0x5bb240]['v'],-0x11*-0xb3+0x2*0xbb6+0x234f*-0x1,0xd*0xac+0x3aa*0x1+0x633*-0x2];return _0x4e50bb[_0x2092d6(0x7d5)](function(_0x114629){var _0x4d29df=_0x2092d6;if(_0x226e33[_0x4d29df(0x401)](_0x226e33[_0x4d29df(0x684)],'EzipS'))_0x56f805['hook'][_0x4d29df(0x903)+'ed']=![];else return Math[_0x4d29df(0xdd2)](_0x114629*(0x1*0x1bc4+-0x2614+0x14*0x89))/(0x48c+0x59d*0x4+-0x1a9c);})[_0x2092d6(0x55c)]('\x20\x20');}var _0x2ff77a=_0x50dfcb[_0x5bb240]['v'];return typeof _0x2ff77a==='numbe'+'r'?Math['round'](_0x2ff77a*(-0x7*-0x1fe+0x14*-0xcd+-0x33*-0x1e))/(-0x241*-0x11+0x227f+-0x44e8):String(_0x2ff77a);}}return'-';}function _0x491eb3(_0x207493){var _0x4f36a6=_0x19bc25,_0x374b97={'wzZnI':function(_0x208d26,_0x5b5ce5){return _0x208d26+_0x5b5ce5;},'wgMmg':function(_0x437acb,_0x3c0adb){return _0x437acb*_0x3c0adb;},'NzDbp':function(_0xd3534c,_0x47e264){return _0xd3534c>_0x47e264;},'XisVj':function(_0x2d8cba,_0x359c2a){return _0x2d8cba===_0x359c2a;},'mJSLT':function(_0x50cbdb,_0x4db724){return _0x50cbdb<_0x4db724;},'GQAGY':function(_0x5b36c3,_0x28e1a6){var _0x5dbdb2=_0x500f;return _0x226e33[_0x5dbdb2(0xb0d)](_0x5b36c3,_0x28e1a6);},'uWpnT':function(_0x317d07,_0x1d9d6c){return _0x317d07+_0x1d9d6c;},'XllDy':_0x4f36a6(0xb6a),'xXATC':'\x20hook'+'s\x20wer'+_0x4f36a6(0x71a)+'n\x20SEE'+'N\x20by\x20'+_0x4f36a6(0x662)+_0x4f36a6(0x7b9)+'apply'+_0x4f36a6(0x6a2)+'\x20','klVuH':_0x226e33['UXJdM'],'NCLgX':_0x4f36a6(0xa78)+_0x4f36a6(0x9d9)+'o\x20a\x20t'+_0x4f36a6(0x809)+_0x4f36a6(0x724)+_0x4f36a6(0xcf9)+'appli'+'ed\x20no'+_0x4f36a6(0xe2c)+'he\x20si'+'gnatu'+'re\x20','tVMoC':function(_0x37df23,_0x27daad,_0x3184d8){var _0x6aac54=_0x4f36a6;return _0x226e33[_0x6aac54(0x51f)](_0x37df23,_0x27daad,_0x3184d8);},'GEwyL':function(_0x476ab0,_0x27ca64){return _0x476ab0!==_0x27ca64;},'RPEMV':function(_0x452382,_0x1e2310){return _0x452382!==_0x1e2310;},'opwLi':_0x4f36a6(0xa8c),'OmLLt':_0x226e33[_0x4f36a6(0x512)],'dVUSN':'vfxlZ','MhBzw':_0x226e33['VmVDW'],'Dneio':_0x226e33['uxEEA'],'cKocB':'pLybs','cYUZJ':_0x226e33[_0x4f36a6(0x30a)],'CrDck':function(_0x8ac7a7,_0x1bf46a){return _0x226e33['EzohO'](_0x8ac7a7,_0x1bf46a);},'mhmms':_0x4f36a6(0x7d3),'pElZq':_0x4f36a6(0x9f6)},_0x33550=_0x23e07b,_0x441d78=[],_0x3d2add;if(_0x207493===_0x4f36a6(0x8ee)+'t'){var _0x1d59dd=_0x226e33['XDIGx'](_0x4588ac,_0x226e33['jNIrT'],_0x46693f['on']),_0x592f0f=_0x2636e9(_0x226e33[_0x4f36a6(0xe4c)],_0x4f36a6(0x58a)+_0x4f36a6(0x86b),_0x46693f['on']?_0x226e33[_0x4f36a6(0xe1a)](_0x226e33[_0x4f36a6(0x2c9)]('x'+_0x46693f['facto'+'r']['toFix'+'ed'](0xd3*-0x5+0x26*-0x41+0x56*0x29)+_0x226e33[_0x4f36a6(0xc11)],_0x5e73e2[_0x4f36a6(0xe2a)+'h']),'\x20fiel'+'ds\x20·\x20')+_0x397202+('\x20writ'+'es'):_0x226e33['MhsIA']),_0x50f8c0=_0x3154ca(_0x226e33[_0x4f36a6(0xe84)]);_0x50f8c0['appen'+_0x4f36a6(0xd13)+'d'](_0x226e33[_0x4f36a6(0x5c8)](_0x491f3a,function(){return _0x46693f['on'];},function(_0x2af42a){var _0x630055=_0x4f36a6;_0x226e33['PsRDL'](_0x1bfe9c,_0x2af42a,_0x46693f['facto'+'r']),_0x592f0f['textC'+_0x630055(0x806)+'t']=_0x2af42a?_0x226e33['yXfzg']('x'+_0x46693f['facto'+'r']['toFix'+'ed'](0x12d*-0x10+0x1040*0x1+0xdb*0x3)+_0x630055(0x653)+_0x5e73e2[_0x630055(0xe2a)+'h'],_0x226e33['FHjKH'])+_0x397202+_0x226e33[_0x630055(0x67b)]:_0x630055(0x7bd)+'plies'+'\x20move'+_0x630055(0xb6c)+_0x630055(0xac8)+_0x630055(0x4c5)+_0x630055(0x43c)+_0x630055(0x4f4)+'eight'+_0x630055(0x955)+_0x630055(0x66c)+'\x20jump'+_0x630055(0x387)+_0x630055(0x824)+_0x630055(0xd72);})),_0x1d59dd['body']['appen'+_0x4f36a6(0xd13)+'d'](_0x592f0f),_0x1d59dd[_0x4f36a6(0x649)]['appen'+_0x4f36a6(0xd13)+'d'](_0x50f8c0);var _0x37f37d=_0xe75fd0(0x11c1+0x18*0x94+-0x1fa0,-0xee3+0x243d+0x7f*-0x2b,-0x13d*0x17+0x5*-0x19b+0x2*0x1241+0.5,function(){return _0x46693f['facto'+'r'];},function(_0x506783){_0x1bfe9c(_0x46693f['on'],_0x506783);});_0x37f37d[_0x4f36a6(0x667)]['datas'+'et'][_0x4f36a6(0x9d3)]='x';var _0x213571=_0x3154ca(_0x226e33[_0x4f36a6(0xa64)],'F8\x20/\x20'+_0x4f36a6(0x624)+'so\x20st'+_0x4f36a6(0xb8f)+'is');_0x213571['appen'+'dChil'+'d'](_0x37f37d),_0x1d59dd[_0x4f36a6(0x649)]['appen'+_0x4f36a6(0xd13)+'d'](_0x213571);if(_0x40d87b[_0x4f36a6(0xe2a)+'h']){if(_0x4f36a6(0xbd5)!==_0x226e33['eeQqX']){var _0x25443b=_0x226e33[_0x4f36a6(0x6f3)](_0x2636e9,_0x4f36a6(0x9be),_0x4f36a6(0xa50)+'te','Refus'+'ed:\x20'+_0x40d87b['slice'](0x6ae+0x36d*-0x4+0x706,0x200d+0x1056+0x1ab*-0x1d)[_0x4f36a6(0x7d5)](function(_0x23e239){var _0x44d060=_0x4f36a6,_0x13f9be={'AhmRG':_0x226e33[_0x44d060(0x40e)]};if(_0x226e33['ziFjh']!==_0x226e33['ziFjh'])_0x47d29b[_0x44d060(0x2b4)+'onten'+'t']=_0x13f9be[_0x44d060(0x7af)];else return _0x226e33['jGzCh'](_0x226e33[_0x44d060(0x8be)]('0x',_0x23e239['o']<-0xfb*0xf+0x6c8*0x2+-0x1*-0x125?'?':_0x23e239['o']['toStr'+_0x44d060(0x35f)](-0xb*0x145+-0x1816+0x377*0xb)),'\x20(')+_0x23e239['why']+')';})[_0x4f36a6(0x55c)]('\x20\x20'));_0x1d59dd[_0x4f36a6(0x649)]['appen'+'dChil'+'d'](_0x25443b);}else _0x1b0539={'rawA':_0x3ff279['setLa'+'st'],'rawB':_0x306d0e[_0x4f36a6(0xa3f)],'hits':_0x4fee9f[_0x4f36a6(0x9b8)+_0x4f36a6(0xdad)],'name':_0x169dd0},_0x2eadef=_0x113af2[_0x4f36a6(0x9b8)+'its'];}_0x441d78[_0x4f36a6(0x822)](_0x1d59dd);var _0x49345d=_0x226e33[_0x4f36a6(0xb9d)](_0x4588ac,_0x226e33['iHulg']),_0x1de0d3=_0x226e33[_0x4f36a6(0xc3c)](_0x2636e9,'butto'+'n',_0x226e33['kqAvz'],'Snaps'+'hot\x20n'+_0x4f36a6(0x8e4)+'9)');_0x1de0d3['type']=_0x4f36a6(0x3c5)+'n',_0x1de0d3['oncli'+'ck']=function(){var _0x26cc8c=_0x4f36a6;if(_0x226e33['ysdHo'](_0x26cc8c(0x9bd),'VjxXs')){var _0xe30d67=_0x42ac88['c'][_0x444377]['v'],_0x207c2a=_0x3ded30[_0x26cc8c(0x9a6)](_0x374b97['wzZnI'](_0xe30d67[-0x247d+-0xb*0x333+0x47ae]*_0xe30d67[-0x1b+-0x2161+0x217c],_0x374b97[_0x26cc8c(0x220)](_0xe30d67[-0x57d+-0x1*-0x1bfd+-0x1*0x167e],_0xe30d67[-0x155d*-0x1+0x1c76+-0x31d1])));(_0x374b97[_0x26cc8c(0x5cb)](_0x207c2a,_0x424e1b)||_0x374b97[_0x26cc8c(0xaf8)](_0x207c2a,_0x3419c3)&&_0x374b97['mJSLT'](_0xe30d67[0x5e3+-0x9*0x383+0x1*0x19b9],_0xdec059['v'][-0x643*-0x3+-0x992+-0x936]))&&(_0x40753d=_0x207c2a,_0x5e8c4e=_0x1a326a['c'][_0x3cf31e]);}else _0x226e33[_0x26cc8c(0x9f8)](_0x3a879c,_0x226e33[_0x26cc8c(0x252)]);},_0x49345d[_0x4f36a6(0x649)][_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x2636e9(_0x226e33['YtoQB'],_0x4f36a6(0x58a)+'esc','F9\x20\x20s'+_0x4f36a6(0xb87)+'ot\x20\x20\x20'+_0x4f36a6(0x4f6)+_0x4f36a6(0xac8)+'\x20on/o'+'ff\x0aF8'+'\x20/\x20F6'+'\x20\x20fac'+_0x4f36a6(0xabf)+'/-0.5'+'\x0a[\x20\x20]'+'\x20\x20fie'+_0x4f36a6(0x5c2)+_0x4f36a6(0x2fc)+_0x4f36a6(0xd27)+_0x4f36a6(0x92f)+_0x4f36a6(0x2d1)+'enu')),_0x49345d['body'][_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x1de0d3),_0x441d78[_0x4f36a6(0x822)](_0x49345d);}if(_0x207493==='visua'+'ls'){if(_0x226e33[_0x4f36a6(0xb10)]===_0x226e33[_0x4f36a6(0xc1d)])_0x2308f4[_0x4f36a6(0xceb)+_0x4f36a6(0xe29)+_0x4f36a6(0x78c)]===0xa*-0x149+0x17f0+-0xb16?_0x39876b[_0x4f36a6(0xd5c)+_0x4f36a6(0xb68)][_0x4f36a6(0x822)](_0x374b97[_0x4f36a6(0x664)](_0x374b97[_0x4f36a6(0x513)](_0x374b97[_0x4f36a6(0x513)](_0x374b97['XllDy']+_0x43fd51[_0x4f36a6(0xceb)+_0x4f36a6(0xcf4)],_0x374b97[_0x4f36a6(0xe9b)])+_0x374b97['klVuH'],_0x4f36a6(0xc75)+'oks\x20r'+_0x4f36a6(0x3fb)+_0x4f36a6(0xd2c)+_0x4f36a6(0x70e)+'\x20it\x20a'+_0x4f36a6(0xbd9)+_0x4f36a6(0x7c7)+'\x20for\x20'+_0x4f36a6(0x8e0)+'ife\x20o'+_0x4f36a6(0xea3)+_0x4f36a6(0x817)+'.\x20')+('Regis'+_0x4f36a6(0x641)+'\x20'),_0x284b08[_0x4f36a6(0xceb)+_0x4f36a6(0xb72)+_0x4f36a6(0x641)+_0x4f36a6(0xa63)])+('\x20hook'+_0x4f36a6(0xb09)+'uring'+'\x20armi'+'ng\x20at'+'\x20docu'+_0x4f36a6(0xb6c)+_0x4f36a6(0xa2b)+'.')):_0x5efdfd[_0x4f36a6(0xd5c)+_0x4f36a6(0xb68)][_0x4f36a6(0x822)](_0x374b97['uWpnT']('UWMK\x20'+_0x4f36a6(0x9e0)+_0x4f36a6(0x7f2)+_0xdc2617[_0x4f36a6(0xceb)+'Resol'+'ved']+_0x4f36a6(0x77a)+_0x46fb3b[_0x4f36a6(0xceb)+'Total'],_0x374b97[_0x4f36a6(0x8b8)])+('(this'+',\x20Met'+_0x4f36a6(0x231)+_0x4f36a6(0x3fe)+_0x4f36a6(0x5db)+'id\x20do'+'es\x20no'+_0x4f36a6(0x32f)+'ch\x20th'+_0x4f36a6(0xe51)+_0x4f36a6(0x21a)));else{var _0x1c4971=_0x4588ac(_0x226e33[_0x4f36a6(0x9cb)],_0x248249['on']),_0x5c9603=_0x3154ca(_0x226e33[_0x4f36a6(0xe84)]);_0x5c9603[_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x491f3a(function(){return _0x248249['on'];},function(_0x249b8f){var _0x2b6669=_0x4f36a6;_0x520c72(_0x249b8f,_0x248249[_0x2b6669(0x554)]);})),_0x1c4971['body']['appen'+_0x4f36a6(0xd13)+'d'](_0x2636e9('div',_0x226e33[_0x4f36a6(0x7ef)],_0x226e33[_0x4f36a6(0xd98)])),_0x1c4971['body'][_0x4f36a6(0x55e)+'dChil'+'d'](_0x5c9603);var _0x28bd39=_0xe75fd0(0x12d*-0x19+0x7*0x511+0x1*-0x5ea,0x516+-0xa5*-0xf+-0xe21*0x1,-0x95e+0x1a*0x7d+0x34a*-0x1,function(){var _0x4b23ce=_0x4f36a6,_0x1b42c3={'qGAvd':function(_0x1bf785,_0x321582){return _0x1bf785+_0x321582;},'kGnAK':function(_0x5a5bb0,_0x346592,_0x52decd){var _0x14b5ce=_0x500f;return _0x374b97[_0x14b5ce(0xcc2)](_0x5a5bb0,_0x346592,_0x52decd);},'RYfUP':'i32','TBOuc':function(_0x50771a,_0x30b139){return _0x374b97['GEwyL'](_0x50771a,_0x30b139);}};if(_0x374b97[_0x4b23ce(0x80b)](_0x4b23ce(0xa8c),_0x374b97[_0x4b23ce(0xaf9)])){var _0x15856a=_0x1dd1da(_0x1b42c3['qGAvd'](_0x2d8c8c,_0x1b42c3[_0x4b23ce(0x574)](_0x25aecf,_0x182d37[_0x4f2159][-0x12a5+-0x730+0x19d5],-0x24c0+-0x1c1*0x10+0x40e0)),_0x1b42c3[_0x4b23ce(0x74d)]);if(_0x1b42c3['TBOuc'](_0x15856a,_0xa143e5))_0x2bd38d['tag'][_0x39c5f1[_0xd5b6aa][0xa*0x3c8+0x1583*0x1+0x6*-0x9e3]]=_0x15856a;}else return _0x248249[_0x4b23ce(0xe58)];},function(_0x11ef6e){var _0x3e9edf=_0x4f36a6,_0x5ba49e={'Gqghe':function(_0xe87998,_0x2b91fd){return _0xe87998(_0x2b91fd);},'zWMir':_0x3e9edf(0xe58),'xzLDf':'sk-va'+'l','VsGPC':_0x374b97[_0x3e9edf(0x6f4)]};if(_0x374b97['RPEMV'](_0x374b97['dVUSN'],_0x374b97[_0x3e9edf(0x62c)])){var _0x3b5c2d=_0x5ba49e[_0x3e9edf(0x731)](_0x5d3f08,_0xffde37[_0x50701a][-0xc2c+-0x16f2+0x118f*0x2]),_0x18481a=_0x4bb35a(_0x5ba49e[_0x3e9edf(0xb06)],_0x5ba49e['xzLDf']);_0x18481a['style'][_0x3e9edf(0xe5c)+'dth']='0',_0x18481a[_0x3e9edf(0x754)]['flex']='1',_0x18481a[_0x3e9edf(0x754)]['textA'+_0x3e9edf(0x288)]=_0x5ba49e[_0x3e9edf(0x656)],_0x18481a['textC'+_0x3e9edf(0x806)+'t']=_0x24e7a9(_0x2e287f[_0x91f743][-0x1ed*-0x6+0x1*0x1c51+-0x27dd]),_0x18481a['datas'+'et']['k']=_0x54fe3e[_0x1005ac][0x438*-0x2+-0x2*0xffe+0x286d],_0x3b5c2d['appen'+'dChil'+'d'](_0x18481a);var _0x480f1e=_0x29a957[_0x3e9edf(0xe2a)+'h']?_0x3964ba[_0x417146[_0x3e9edf(0xe2a)+'h']-(0x29*-0xe+-0x1*0xaad+0x33b*0x4)]:null;!_0x480f1e&&(_0x480f1e=_0x1c7cbe(_0x3e9edf(0x55a)+'on',![]),_0x5df611['push'](_0x480f1e)),_0x480f1e['body']['appen'+_0x3e9edf(0xd13)+'d'](_0x3b5c2d),_0x480f1e['body'][_0x3e9edf(0x2b3)+_0x3e9edf(0x855)]['sp']=_0x18481a;}else _0x248249['span']=_0x11ef6e;});_0x28bd39[_0x4f36a6(0x667)][_0x4f36a6(0xbc9)+'et'][_0x4f36a6(0x9d3)]='m';var _0x49108a=_0x226e33[_0x4f36a6(0xe55)](_0x3154ca,'Range',_0x4f36a6(0x1f2)+'\x20unit'+'s\x20acr'+_0x4f36a6(0x328)+'he\x20ra'+'dar');_0x49108a[_0x4f36a6(0x55e)+'dChil'+'d'](_0x28bd39),_0x1c4971[_0x4f36a6(0x649)]['appen'+'dChil'+'d'](_0x49108a),_0x441d78[_0x4f36a6(0x822)](_0x1c4971);var _0xcf4b35=_0x226e33[_0x4f36a6(0x642)](_0x4588ac,_0x226e33['Trkix'],_0x248249[_0x4f36a6(0x554)]),_0x3ca15b=_0x3154ca(_0x226e33[_0x4f36a6(0xe84)]);_0x3ca15b['appen'+'dChil'+'d'](_0x491f3a(function(){var _0x50bbfe=_0x4f36a6;return _0x248249[_0x50bbfe(0x554)];},function(_0x29fc1e){if(_0x29fc1e&&!_0x226e33['eCdma'](_0x3754e9)){_0x560ab0();return;}_0x520c72(!![],_0x29fc1e);}));var _0x4e8d3d=_0x33550&&_0x33550[_0x4f36a6(0xda6)+'s'];_0xcf4b35[_0x4f36a6(0x649)]['appen'+'dChil'+'d'](_0x2636e9(_0x226e33['YtoQB'],_0x226e33[_0x4f36a6(0x7ef)],_0x4e8d3d&&!_0x4e8d3d['ident'+'ified']?_0x226e33['idpJm']+(_0x4e8d3d['why']||_0x226e33[_0x4f36a6(0x925)])+_0x226e33[_0x4f36a6(0xbb6)]:_0x4e8d3d&&!_0x4e8d3d[_0x4f36a6(0x5d8)+'ne']?_0x4f36a6(0xe5b)+_0x4f36a6(0xd5e)+_0x4f36a6(0x8f9)+'s\x20'+Math[_0x4f36a6(0xdd2)](_0x4e8d3d[_0x4f36a6(0xb6b)])+_0x226e33['wWuFx']:_0x226e33[_0x4f36a6(0x6d4)])),_0xcf4b35['body'][_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x3ca15b);var _0x5ac58a=_0xe75fd0(0x13c+-0x6a*-0x1d+-0xd02,0x205+0xdf9+0x4*-0x3df,0x1a3e+-0x1*0x593+-0x2b*0x7b,function(){return _0x14e22e['fov'];},function(_0x2f0d17){var _0x54ab30=_0x4f36a6;_0x14e22e[_0x54ab30(0xb6b)]=_0x2f0d17,_0x48b480();});_0x5ac58a['input'][_0x4f36a6(0xbc9)+'et'][_0x4f36a6(0x9d3)]='°';var _0x5935f1=_0x3154ca(_0x226e33[_0x4f36a6(0xb2f)],_0x4f36a6(0x259)+_0x4f36a6(0xe04)+_0x4f36a6(0x380)+'ep\x20th'+'is');_0x5935f1[_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x5ac58a);var _0x13906a=_0x3154ca('Reset'+'\x20view','fov\x20b'+_0x4f36a6(0x370)+'o\x2075,'+_0x4f36a6(0xa76)+'ets\x20c'+_0x4f36a6(0x755)),_0x1abc16=_0x226e33['UWaEg'](_0x2636e9,_0x226e33[_0x4f36a6(0xada)],_0x4f36a6(0xda3)+'n',_0x226e33['QVmto']);_0x1abc16[_0x4f36a6(0x601)+_0x4f36a6(0xb70)+'stene'+'r'](_0x4f36a6(0xb6d),function(){var _0x6ef57e=_0x4f36a6;if(_0x6ef57e(0x98a)!=='YpDGD')return _0xc9529a['round'](_0x2235ae*(-0x18*-0x6f+0x1*-0x1ef+0x1*-0x815))/(0x23e4+0x8*0x331+0x3f*-0xf8);else _0x14e22e['fov']=0x2*0x68e+0x1*0x2454+-0x3125,_0x48b480(),_0x136e3f(_0xf453eb[_0x6ef57e(0xcbb)]);}),_0x13906a[_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x1abc16),_0xcf4b35['body']['appen'+_0x4f36a6(0xd13)+'d'](_0x5935f1),_0xcf4b35['body'][_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x13906a);var _0x576603=_0x33550&&_0x33550['view'];_0xcf4b35[_0x4f36a6(0x649)]['appen'+_0x4f36a6(0xd13)+'d'](_0x2636e9('div',_0x226e33['ZTrse'],_0x226e33[_0x4f36a6(0xd4a)](_0x226e33[_0x4f36a6(0x827)](_0x4f36a6(0x75e)+'\x20'+(_0x576603?_0x576603[_0x4f36a6(0xa6b)+'Look']?_0x226e33[_0x4f36a6(0x263)]+_0x576603['mouse'+'Look']+(_0x576603[_0x4f36a6(0x96b)+'a']?_0x4f36a6(0xaca)+'era\x20'+_0x576603[_0x4f36a6(0x96b)+'a']:''):_0x4f36a6(0xa26)+_0x4f36a6(0x9f9)+_0x4f36a6(0x45f)+'t':_0x226e33['JdfXb']),_0x4e8d3d?_0x226e33['IZNOA']('\x0a',_0x4e8d3d['sourc'+'e']&&_0x4e8d3d[_0x4f36a6(0x530)+'e'][_0x4f36a6(0x724)+'Of'](_0x4f36a6(0x464)+_0x4f36a6(0xcd6)+'r')===0x2615*-0x1+-0x1*-0x1a05+0x608*0x2?_0x226e33['yMbAF'](_0x226e33[_0x4f36a6(0xe37)]+_0x4e8d3d['sourc'+'e'][_0x4f36a6(0x62f)](0x4da*-0x5+0x7bf*0x4+0x1*-0x6af)+(_0x4f36a6(0x59a)+'\x20\x20'),Math[_0x4f36a6(0xdd2)](_0x4e8d3d['rawYa'+'w']))+('\x0apitc'+'h\x20')+Math[_0x4f36a6(0xdd2)](_0x4e8d3d['rawPi'+_0x4f36a6(0x8c3)]):_0x4e8d3d[_0x4f36a6(0x530)+'e']===_0x4f36a6(0xb48)+'r'?_0x226e33[_0x4f36a6(0xd2d)](_0x226e33[_0x4f36a6(0xd93)](_0x226e33[_0x4f36a6(0xbac)](_0x226e33[_0x4f36a6(0xb74)]+_0x4e8d3d[_0x4f36a6(0xb3f)]+_0x226e33[_0x4f36a6(0xb8e)],Math[_0x4f36a6(0xdd2)](_0x4e8d3d[_0x4f36a6(0xa99)+'w']))+(_0x4f36a6(0xe89)+'h\x20')+_0x4e8d3d['pitch'+'At'],_0x226e33[_0x4f36a6(0xb8e)]),Math[_0x4f36a6(0xdd2)](_0x4e8d3d[_0x4f36a6(0x689)+_0x4f36a6(0x8c3)])):_0x4f36a6(0x20d)+'ING\x20f'+'rom\x20s'+_0x4f36a6(0xe80)+_0x4f36a6(0xa76)+'ets\x20+'+'0x28\x20'+'and\x20+'+_0x4f36a6(0xe7f)+_0x4f36a6(0x790)+'ngle\x20'+'hooks'+'\x20have'+'\x20not\x20'+_0x4f36a6(0x264)+_0x4f36a6(0xd50)):'')+(_0x4e8d3d&&_0x4e8d3d['viewH'+'ooks']&&_0x4e8d3d[_0x4f36a6(0x5ce)+_0x4f36a6(0x769)]['appli'+'ed']===-0x16e8+0x165*-0x5+0x1de1&&_0x226e33['ZiEHu'](_0x4e8d3d[_0x4f36a6(0x5ce)+'ooks'][_0x4f36a6(0x8b4)],0x1*0x200a+0x1cb+-0x21d5*0x1)?_0x226e33['VgDXd'](_0x226e33['rEPkF']+_0x4e8d3d[_0x4f36a6(0x5ce)+'ooks']['resol'+'ved']+'/',_0x4e8d3d['viewH'+_0x4f36a6(0x769)][_0x4f36a6(0x8b4)])+('\x20reso'+'lved)'):_0x4e8d3d&&_0x4e8d3d[_0x4f36a6(0x5ce)+_0x4f36a6(0x769)]&&_0x226e33['HybOb'](_0x4e8d3d[_0x4f36a6(0x5ce)+_0x4f36a6(0x769)]['total'],0x1e9b+0x2af*0xe+-0x442d)?'\x0aview'+'\x20hook'+'s\x20wer'+'e\x20nev'+_0x4f36a6(0x801)+_0x4f36a6(0x723)+'red\x20('+_0x4e8d3d[_0x4f36a6(0x5ce)+_0x4f36a6(0x769)][_0x4f36a6(0x94c)+'Count']+_0x226e33[_0x4f36a6(0xcef)]:''),_0x84c070?_0x226e33['ZIInb']:''))),_0x441d78['push'](_0xcf4b35);}}if(_0x207493===_0x4f36a6(0x6ff)+'s'){var _0x31ed3a=[[_0x226e33['IdmvG'],_0x4f36a6(0x379)+'ON',_0x33550?_0x33550['versi'+'on']:'-'],[_0x226e33[_0x4f36a6(0x732)],'appli'+_0x4f36a6(0x6de)+_0x4f36a6(0xd30)+_0x4f36a6(0x641),_0x33550?_0x33550[_0x4f36a6(0xceb)+'Appli'+'ed']+_0x226e33[_0x4f36a6(0x621)]+_0x33550[_0x4f36a6(0xceb)+_0x4f36a6(0xb72)+'tered'+_0x4f36a6(0xa63)]:'-'],[_0x4f36a6(0x8bd),'from\x20'+_0x4f36a6(0x920)+'ntiat'+_0x4f36a6(0x7ea),_0x33550&&_0x33550['wasmM'+_0x4f36a6(0x834)]&&_0x33550[_0x4f36a6(0xc79)+'emory'][_0x4f36a6(0x8f7)+_0x4f36a6(0x6a9)]?_0x226e33['ujria'](Math[_0x4f36a6(0xdd2)](_0x226e33[_0x4f36a6(0x1e9)](_0x33550[_0x4f36a6(0xc79)+'emory'][_0x4f36a6(0xc83)],0x2cf65*0x1+0x17bc46+0x1*-0xa8bab))+('\x20MB\x20@'+'\x20')+_0x33550[_0x4f36a6(0xc79)+_0x4f36a6(0x834)]['atMs'],'ms'):'-'],['Playe'+'rs',_0x226e33['LGXEl'],_0x33550&&_0x33550[_0x4f36a6(0x30c)]?_0x226e33['vBlWy'](String,_0x33550[_0x4f36a6(0x30c)][_0x4f36a6(0xde0)+_0x4f36a6(0xcf6)+'t']):'-'],[_0x226e33[_0x4f36a6(0x70d)],_0x226e33[_0x4f36a6(0x861)],_0x33550&&_0x33550['esp']?String(_0x33550['esp'][_0x4f36a6(0xce9)+_0x4f36a6(0x6dd)]):'-'],[_0x226e33[_0x4f36a6(0xdcc)],_0x4f36a6(0x9c6)+'he\x20li'+'ve\x20ma'+_0x4f36a6(0x972),_0x33550&&_0x33550['esp']&&_0x33550['esp']['camer'+'a']?_0x226e33[_0x4f36a6(0xa2f)](_0x226e33['jCgrQ'](_0x226e33['idaZp'](_0x33550[_0x4f36a6(0x30c)][_0x4f36a6(0x96b)+'a'],'\x20('),_0x33550[_0x4f36a6(0x30c)][_0x4f36a6(0x96b)+_0x4f36a6(0x5bb)]),')'):'-']];for(_0x3d2add=0x8c8+0xd7+0x1*-0x99f;_0x226e33['YDzAx'](_0x3d2add,_0x31ed3a['lengt'+'h']);_0x3d2add++){var _0x103d9d=_0x3154ca(_0x31ed3a[_0x3d2add][0x2*0x6bf+-0x1eda+0xca*0x16]),_0x334b6c=_0x2636e9(_0x226e33[_0x4f36a6(0x41c)],_0x4f36a6(0x738)+'l');_0x334b6c['style'][_0x4f36a6(0xe5c)+'dth']='0',_0x334b6c[_0x4f36a6(0x754)][_0x4f36a6(0x324)]='1',_0x334b6c[_0x4f36a6(0x754)]['textA'+'lign']='right',_0x334b6c[_0x4f36a6(0x2b4)+'onten'+'t']=String(_0x31ed3a[_0x3d2add][0x16d9+-0x1f2+0x1*-0x14e5]),_0x334b6c['datas'+'et']['k']=_0x31ed3a[_0x3d2add][0x406+0x2*0x68b+0x97*-0x1d],_0x103d9d[_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x334b6c);var _0x22e433=_0x441d78['lengt'+'h']?_0x441d78[_0x441d78[_0x4f36a6(0xe2a)+'h']-(-0x29+-0x1c4+0x1ee*0x1)]:null;!_0x22e433&&(_0x4f36a6(0xb7a)==='fFYKn'?(_0x22e433=_0x226e33[_0x4f36a6(0x831)](_0x4588ac,'Sessi'+'on',![]),_0x441d78[_0x4f36a6(0x822)](_0x22e433)):_0x12cc9f=_0x512f26(_0x8f8523)),_0x22e433[_0x4f36a6(0x649)][_0x4f36a6(0x55e)+'dChil'+'d'](_0x103d9d),_0x22e433['body'][_0x4f36a6(0x2b3)+'hild']['sp']=_0x334b6c;}var _0x2b817a=_0x4588ac(_0x226e33[_0x4f36a6(0x3a5)],![]),_0x3420b8=[[_0x226e33['cJTMu'],_0x33550&&_0x33550[_0x4f36a6(0x416)]&&_0x33550[_0x4f36a6(0x416)][_0x4f36a6(0xc71)]?_0x226e33['YFVMt'](_0x4f36a6(0x8b9)+_0x4f36a6(0x2ee)+_0x4f36a6(0x767),_0x33550['local']['posAt']):_0x4f36a6(0x8b9)+_0x4f36a6(0x2ee)+_0x4f36a6(0x4bb),_0x33550&&_0x33550[_0x4f36a6(0x416)]&&_0x33550[_0x4f36a6(0x416)][_0x4f36a6(0x832)]?_0x33550['local'][_0x4f36a6(0x832)]['map'](function(_0x5ac41a){var _0x49d33a=_0x4f36a6;if(_0x226e33[_0x49d33a(0x49d)](_0x49d33a(0x6d0),_0x226e33['jUWRo']))return Math['round'](_0x5ac41a*(0x3*0x71b+-0x226d*-0x1+-0x1*0x375a))/(-0x315*-0x3+-0x23af+0x1ad4);else{var _0x290346=_0x1e043e();if(_0x290346&&_0x290346[_0x49d33a(0x6df)+'e']&&_0x290346['Modul'+'e'][_0x49d33a(0xd06)+'8']&&_0x290346[_0x49d33a(0x6df)+'e']['HEAPU'+'8'][_0x49d33a(0x67d)+'r'])return _0x290346['Modul'+'e']['HEAPU'+'8'];}})[_0x4f36a6(0x55c)]('\x20\x20'):'-'],[_0x4f36a6(0x620),_0x226e33[_0x4f36a6(0xde3)](_0x226e33[_0x4f36a6(0x4c8)]('+',_0x14d89b),'m'),_0x33550&&_0x33550['local']&&_0x33550['local'][_0x4f36a6(0xb84)]?_0x33550['local'][_0x4f36a6(0xb84)][_0x4f36a6(0x7d5)](function(_0x2952ef){return Math['round'](_0x2952ef*(0x1a04+0x173d*0x1+0x6fb*-0x7))/(-0x1d78+-0x7*-0xb6+0x18e2);})['join']('\x20\x20'):'-'],[_0x226e33[_0x4f36a6(0xa9c)],_0x4f36a6(0x6a5),_0x226e33[_0x4f36a6(0x90d)](_0x419ecb,_0x33550,'FPSco'+_0x4f36a6(0x2ee)+_0x4f36a6(0x4bb),0xdd7*-0x1+0x1922+-0xb3b)],[_0x4f36a6(0xb56)+'t\x20spe'+'ed',_0x4f36a6(0x854),_0x419ecb(_0x33550,'FPSco'+_0x4f36a6(0x2ee)+_0x4f36a6(0x4bb),-0x191a+-0x17*-0x152+-0x6b*0xc)],[_0x4f36a6(0xe8c)+_0x4f36a6(0x83a)+'t','0x11C',_0x226e33[_0x4f36a6(0x6f3)](_0x419ecb,_0x33550,_0x4f36a6(0x8b9)+'ntrol'+_0x4f36a6(0x4bb),0xf2f+0x14b2+-0x22c5)],[_0x4f36a6(0x3c6)+'h',_0x226e33['HkoRT'],_0x226e33[_0x4f36a6(0x837)](_0x419ecb,_0x33550,'Healt'+_0x4f36a6(0xa48)+'pt',-0x230a+-0x1778+0x3b42)]];for(_0x3d2add=0x1d4f*-0x1+-0x11b2+-0x539*-0x9;_0x3d2add<_0x3420b8[_0x4f36a6(0xe2a)+'h'];_0x3d2add++){if(_0x226e33[_0x4f36a6(0xe90)]===_0x226e33['iFOhN']){var _0x4ba886=('5|9|6'+_0x4f36a6(0xaa2)+_0x4f36a6(0xb53)+_0x4f36a6(0x26f))['split']('|'),_0x146945=-0x80*-0x26+0xc88*-0x2+0x610;while(!![]){switch(_0x4ba886[_0x146945++]){case'0':_0x2b817a['body'][_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x5cfd9e);continue;case'1':_0x279c9a['textC'+'onten'+'t']=String(_0x3420b8[_0x3d2add][0x2*0xd31+-0x1*0x335+-0x9*0x293]);continue;case'2':_0x279c9a[_0x4f36a6(0x754)][_0x4f36a6(0x7eb)+'lign']=_0x226e33['gJmDl'];continue;case'3':_0x2b817a['body'][_0x4f36a6(0x2b3)+_0x4f36a6(0x855)]['sp']=_0x279c9a;continue;case'4':_0x279c9a[_0x4f36a6(0xbc9)+'et']['k']=_0x3420b8[_0x3d2add][0x72+-0x47d*0x2+0x889];continue;case'5':var _0x5cfd9e=_0x3154ca(_0x3420b8[_0x3d2add][-0x975*0x3+0xc11+0x104e]);continue;case'6':_0x279c9a['style']['minWi'+'dth']='0';continue;case'7':_0x279c9a['style'][_0x4f36a6(0x324)]='1';continue;case'8':_0x5cfd9e[_0x4f36a6(0x55e)+'dChil'+'d'](_0x279c9a);continue;case'9':var _0x279c9a=_0x2636e9(_0x4f36a6(0xe58),_0x226e33[_0x4f36a6(0xab6)]);continue;}break;}}else return _0x57590c[_0x4f36a6(0x637)+_0x4f36a6(0x528)]=![],_0x2e2d90[_0x4f36a6(0x69b)]=_0x4f36a6(0x4f5)+_0x4f36a6(0xcb9)+_0x4f36a6(0x7ff)+'eadab'+'le',null;}_0x441d78[_0x4f36a6(0x822)](_0x2b817a);}if(_0x226e33['OCUtG'](_0x207493,_0x226e33['neqmB'])){var _0xd14de2=_0x4588ac(_0x4f36a6(0x6ce)+'ostic'+'s',![]),_0x529208=_0x33550&&_0x33550['warni'+_0x4f36a6(0xb68)]&&_0x33550[_0x4f36a6(0xd5c)+'ngs'][_0x4f36a6(0xe2a)+'h']?_0x33550[_0x4f36a6(0xd5c)+'ngs']['join']('\x0a'):_0x4f36a6(0x5c9)+_0x4f36a6(0xe01)+'s';_0xd14de2[_0x4f36a6(0x649)]['appen'+'dChil'+'d'](_0x2636e9('div','sk-pr'+'e',_0x529208)),_0x441d78[_0x4f36a6(0x822)](_0xd14de2);var _0x460cfc=_0x226e33['zhBZQ'](_0x4588ac,_0x226e33['jlmXT'],![]),_0x18cafb=_0x2636e9(_0x226e33[_0x4f36a6(0xada)],_0x4f36a6(0xda3)+'n','Copy\x20'+'JSON\x20'+_0x4f36a6(0x9b9)+'ipboa'+'rd');_0x18cafb['type']=_0x226e33[_0x4f36a6(0xada)],_0x18cafb['oncli'+'ck']=function(){var _0x2ca504=_0x4f36a6;try{if(_0x374b97[_0x2ca504(0x440)]===_0x374b97[_0x2ca504(0x508)])_0x581dc4['warn'](_0x374b97[_0x2ca504(0xc5e)],_0x374b97['Dneio']+_0x2da981,_0x191cf8);else{var _0x2c4cbe=_0x374b97['GQAGY'](_0x374b97['GQAGY'](_0x374b97[_0x2ca504(0xe70)](_0x4f7f6f,'\x0a'),JSON[_0x2ca504(0x80a)+'gify'](_0x33550,null,0x202d+-0x10d*-0xd+-0x2dd5))+'\x0a',_0x18fe1f);if(navigator[_0x2ca504(0x207)+'oard']&&navigator[_0x2ca504(0x207)+'oard'][_0x2ca504(0xd12)+'Text'])navigator[_0x2ca504(0x207)+'oard']['write'+'Text'](_0x2c4cbe)[_0x2ca504(0x45e)](function(){var _0x225b47=_0x2ca504;_0x18cafb['textC'+'onten'+'t']=_0x225b47(0x4f9)+'d';});else _0x18cafb[_0x2ca504(0x2b4)+'onten'+'t']='Clipb'+_0x2ca504(0x3b2)+'block'+_0x2ca504(0x673)+'open\x20'+_0x2ca504(0x42b)+_0x2ca504(0xd1b)+_0x2ca504(0x968)+'ad';}}catch(_0x5f28b5){_0x374b97['mhmms']===_0x374b97[_0x2ca504(0xd43)]?(_0x5223f2='hooks'+_0x2ca504(0x69d)+'d\x20·\x20'+_0x43e412+'s',_0xf8d423=_0x2ca504(0x648)+'8a'):_0x18cafb[_0x2ca504(0x2b4)+_0x2ca504(0x806)+'t']=_0x2ca504(0x73b)+'faile'+'d';}},_0x460cfc['body'][_0x4f36a6(0x55e)+_0x4f36a6(0xd13)+'d'](_0x2636e9(_0x226e33['YtoQB'],_0x4f36a6(0x58a)+_0x4f36a6(0x86b),'Paste'+'\x20the\x20'+'whole'+_0x4f36a6(0x52e)+'g\x20whe'+'n\x20som'+_0x4f36a6(0x8fe)+_0x4f36a6(0xcce)+'ks\x20wr'+_0x4f36a6(0xbf8))),_0x460cfc['body'][_0x4f36a6(0x55e)+'dChil'+'d'](_0x18cafb),_0x441d78[_0x4f36a6(0x822)](_0x460cfc);}return _0x441d78;}function _0x42d917(){var _0x17f910=_0x19bc25;if(_0xf453eb['open'])_0x226e33[_0x17f910(0xd87)](_0x3c5d06,!![]);}function _0x24fd8d(){var _0x184260=_0x19bc25;try{if(_0x184260(0x374)==='fHTyg')try{_0x4b54ac=_0x492443['keys'](_0x3ead2a)[_0x184260(0x62f)](0x634+-0x572*0x6+0x1a78,-0x40*-0x20+0x1*-0xb5a+0x372);}catch(_0x221115){}else{var _0x5de9a6=localStorage[_0x184260(0xbc5)+'em'](_0x503579);if(!_0x5de9a6)return;var _0x12affc=JSON['parse'](_0x5de9a6);if(_0x12affc&&typeof _0x12affc['x']===_0x226e33[_0x184260(0x944)]&&_0x226e33['jkdcc'](typeof _0x12affc['y'],_0x226e33[_0x184260(0x944)]))_0xf453eb[_0x184260(0x5e9)]=_0x12affc;}}catch(_0x45de56){}}function _0x5720ea(){var _0xe2bb7d=_0x19bc25,_0x56c589={'ZMpVy':function(_0x5e9918,_0x2540ad){return _0x5e9918===_0x2540ad;},'pYrqD':'obfF','mJrYy':function(_0x382394,_0x1d2fbf){return _0x382394(_0x1d2fbf);},'jJLEw':_0x226e33['XRhCx'],'QwLbG':function(_0x53ef42,_0x4a2552){return _0x53ef42|_0x4a2552;},'HcYsz':function(_0x4dd3fd,_0xc2e7ec){var _0x5b5ea1=_0x500f;return _0x226e33[_0x5b5ea1(0xb35)](_0x4dd3fd,_0xc2e7ec);},'Syakz':'i32','LyLUj':function(_0xeee48d,_0x30430c){var _0x114404=_0x500f;return _0x226e33[_0x114404(0x296)](_0xeee48d,_0x30430c);},'nCHay':function(_0x499ec1,_0x1c551e){return _0x499ec1===_0x1c551e;},'sBmHy':function(_0x363870,_0x4538bb,_0x4adf6b,_0x5b13e2){return _0x363870(_0x4538bb,_0x4adf6b,_0x5b13e2);}};try{if(_0x226e33['YAIrI']==='lfwtr'){var _0x10769b=_0x326019[_0x4f1033],_0xfbebdd=_0x21c28a(_0x4822da,_0x4d970c,_0x10769b['size']);if(!_0xfbebdd)return![];var _0x427ab5=new _0x2f85e2(_0xfbebdd[_0xe2bb7d(0x67d)+'r'],_0xfbebdd[_0xe2bb7d(0xe3d)+'ffset'],_0xfbebdd[_0xe2bb7d(0x7fb)+_0xe2bb7d(0xd79)]),_0x515052=_0x10769b['keyTy'+'pe']==='u8'?_0x427ab5['getUi'+_0xe2bb7d(0x34b)](_0x10769b['key']):_0x427ab5[_0xe2bb7d(0xc04)+_0xe2bb7d(0xc31)](_0x10769b['key'],!![]),_0x5e1be1;if(_0x56c589[_0xe2bb7d(0x2fe)](_0x5c6c3c,_0x56c589['pYrqD']))_0x5e1be1=_0x56c589[_0xe2bb7d(0x404)](_0x390528,_0x1faf04);else{if(_0x4eb135===_0x56c589['jJLEw'])_0x5e1be1=_0x56c589['QwLbG'](_0x3d5a00,0x923*0x1+-0x1a72+0x279*0x7);else _0x5e1be1=_0x56c589['HcYsz'](_0xff5465?0xa1c+-0x1*-0xb65+-0x40*0x56:0x19*0x151+-0x2c1+-0x1e28,0x2653*-0x1+-0xc3*0x4+0x2a5e);}return _0x240f4c(_0x3025b3+_0x3faafa+_0x10769b['hidde'+'n'],_0x56c589[_0xe2bb7d(0x47f)],_0x5e1be1^_0x515052)&&_0x49bb5b(_0x274c8b+_0x346154+_0x10769b['fake'],_0x56c589['LyLUj'](_0x58efda,_0xe2bb7d(0x8b0))?_0xe2bb7d(0x484):_0x56c589['ZMpVy'](_0x4b559c,_0x56c589[_0xe2bb7d(0x758)])?_0x56c589[_0xe2bb7d(0x47f)]:'u8',_0x5a9694===_0xe2bb7d(0x8b0)?_0x34395f:_0x56c589['nCHay'](_0x5143aa,'obfI')?_0x56c589['QwLbG'](_0x196cc4,0xb*-0x1f2+0x171b+-0x17*0x13):_0x39199a?0x2295+0x2107+0x1*-0x439b:-0x765*0x3+0x4a2*0x1+0x118d)&&_0x56c589['sBmHy'](_0x45a75f,_0x43bae9+_0xebb495+_0x10769b[_0xe2bb7d(0xe75)+'e'],'u8',0xf0b+0x1992+-0x1*0x289d);}else localStorage['setIt'+'em'](_0x503579,JSON[_0xe2bb7d(0x80a)+'gify'](_0xf453eb['pos']));}catch(_0xf6a033){}}function _0x5734ca(){var _0x593097=_0x19bc25;if(_0x226e33[_0x593097(0xa92)](_0x226e33[_0x593097(0xe46)],_0x593097(0x36c))){var _0x148e9c=_0xf453eb['root'];if(!_0x148e9c||!_0x148e9c['style'])return;_0xf453eb[_0x593097(0x5e9)]?(_0x148e9c[_0x593097(0x754)][_0x593097(0xc2d)]=_0x226e33['UePuG'](_0xf453eb[_0x593097(0x5e9)]['x'],'px'),_0x148e9c[_0x593097(0x754)][_0x593097(0x6d7)]=_0x226e33[_0x593097(0x6b6)](_0xf453eb['pos']['y'],'px'),_0x148e9c[_0x593097(0x754)][_0x593097(0x2a9)]=_0x593097(0xd66),_0x148e9c[_0x593097(0x754)][_0x593097(0xb22)+'m']=_0x226e33['ssnnS']):(_0x148e9c[_0x593097(0x754)]['left']='auto',_0x148e9c[_0x593097(0x754)][_0x593097(0x6d7)]=_0x593097(0xd66),_0x148e9c[_0x593097(0x754)][_0x593097(0x2a9)]=_0x593097(0xa0e),_0x148e9c['style']['botto'+'m']=_0x226e33['ktOeW']);}else{_0x4ed267[_0x593097(0x849)+'ntDef'+_0x593097(0x628)](),_0x259699[_0x593097(0xb6b)]=_0x19d829['min'](0x231d+0x1ed6+-0x4167,_0x50764b['fov']+(0xcca+0x207+-0xdf*0x11)),_0x1d4995();return;}}function _0x2c0556(_0x4ffeab,_0x19f3a9){var _0x2d3ba5=_0x19bc25,_0x446f5d={'KdQQA':function(_0x7876be,_0x12c535){return _0x7876be-_0x12c535;},'KmIVm':function(_0x3a3e0d,_0x2f2655){var _0x12f84=_0x500f;return _0x226e33[_0x12f84(0xe33)](_0x3a3e0d,_0x2f2655);},'yVojW':function(_0xeb9b8e,_0x3879ef){return _0xeb9b8e!==_0x3879ef;},'bflkK':'grab','BVBfA':function(_0x373cda){return _0x226e33['KnquN'](_0x373cda);}};try{if(_0x226e33['eaffX'](_0x226e33[_0x2d3ba5(0x49a)],_0x2d3ba5(0x685))){var _0x57edbb=![],_0xedceac=0x140f*-0x1+0x1b05+-0x6f6,_0xf1ba06=-0x3*0x7b+-0x4cc*0x4+0x14a1;_0x19f3a9[_0x2d3ba5(0x754)][_0x2d3ba5(0x858)+'r']='grab',_0x19f3a9[_0x2d3ba5(0x754)]['touch'+_0x2d3ba5(0x4b3)+'n']=_0x2d3ba5(0x2b0);var _0x37f2a6=function(_0x203485){var _0x325f16=_0x2d3ba5;if(_0x325f16(0x289)!=='eyTZK')_0x4c3f19['canva'+'s']={'w':_0x4e92de&&_0x2cffca['cv']?_0x4b757f['cv'][_0x325f16(0xb41)]:0x2343+-0xdf3+0x10*-0x155,'h':_0x292941&&_0x22449c['cv']?_0x4117d9['cv']['heigh'+'t']:0x1424*-0x1+0x496*0x2+-0x48*-0x27,'innerW':_0x533f02[_0x325f16(0xc24)+_0x325f16(0xe7b)],'innerH':_0x28d58f[_0x325f16(0xc24)+_0x325f16(0x6e3)+'t'],'dpr':_0x255de9['devic'+'ePixe'+_0x325f16(0x65e)+'o']||-0x188e+-0x344+0x1bd3};else{_0x57edbb=!![],_0x19f3a9[_0x325f16(0x754)][_0x325f16(0x858)+'r']=_0x325f16(0x441)+'ing';var _0x40c96e={'left':parseFloat(_0x4ffeab[_0x325f16(0x754)]['left'])||0x2f7+0xce9*-0x1+-0x43*-0x26,'top':parseFloat(_0x4ffeab[_0x325f16(0x754)]['top'])||-0x3a4+0x2*-0x1253+0x284a*0x1};(!_0x4ffeab['style']['left']||_0x226e33[_0x325f16(0xced)](_0x4ffeab['style'][_0x325f16(0xc2d)],_0x325f16(0xd66)))&&(_0x40c96e[_0x325f16(0xc2d)]=(window[_0x325f16(0xc24)+'Width']||0x1d2e+-0x248e+0x760)-(_0x4ffeab[_0x325f16(0xca6)+'tWidt'+'h']||0xcde+0x1*-0x1606+-0xd*-0xe4)-(-0x23ed*0x1+0xc3b*-0x2+0x3c7b));if(!_0x4ffeab[_0x325f16(0x754)][_0x325f16(0x6d7)]||_0x4ffeab[_0x325f16(0x754)]['top']===_0x325f16(0xd66)){if(_0x226e33[_0x325f16(0xc36)](_0x325f16(0x5e7),_0x226e33[_0x325f16(0x918)]))try{return _0x465050[_0x325f16(0x446)]();}catch(_0xdcff69){}else _0x40c96e[_0x325f16(0x6d7)]=_0x226e33['ZhLKc'](window[_0x325f16(0xc24)+'Heigh'+'t']||0x16b0+-0x18f9+0x249,_0x4ffeab['offse'+_0x325f16(0x314)+'ht']||0x6f*0x31+-0x1e51+0xaa2*0x1)-(0x1184+-0x21b9+0x104d);}_0xedceac=_0x226e33['MfUjy'](_0x203485[_0x325f16(0x367)+'tX']||0x5*0x490+-0x523+-0x11ad*0x1,_0x40c96e['left']),_0xf1ba06=_0x226e33['xKYHk'](_0x203485['clien'+'tY']||-0xe42+-0x2389+0x31cb,_0x40c96e[_0x325f16(0x6d7)]);try{_0x203485[_0x325f16(0x849)+'ntDef'+'ault']();}catch(_0x139094){}}},_0x5975cb=function(_0x136cce){var _0x5a65f7=_0x2d3ba5;if(!_0x57edbb)return;var _0xbe2de9=_0x4ffeab[_0x5a65f7(0xca6)+'tWidt'+'h']||0xec6+-0xa96*-0x2+-0x2186,_0x6ff419=_0x4ffeab[_0x5a65f7(0xca6)+'tHeig'+'ht']||-0x154c+0x1370+-0x1b6*-0x2,_0x5eae3f=_0x446f5d['KdQQA'](_0x136cce['clien'+'tX']||-0x197a+0x74c*0x4+0x5f*-0xa,_0xedceac),_0x4d77b9=(_0x136cce[_0x5a65f7(0x367)+'tY']||0xfe9*0x1+-0x1918+-0x92f*-0x1)-_0xf1ba06;_0x5eae3f=Math['max'](0xd87+0x138c+-0x210b,Math[_0x5a65f7(0x5af)]((window['inner'+'Width']||-0xfec+-0xc6c+0x1c58)-_0xbe2de9-(0x28*-0xad+-0xa1f+0x252f),_0x5eae3f)),_0x4d77b9=Math[_0x5a65f7(0x8d5)](-0x211c+0x1b*0x7+0x2067*0x1,Math['min'](_0x446f5d[_0x5a65f7(0xbbc)]((window[_0x5a65f7(0xc24)+'Heigh'+'t']||0x132b*-0x1+0x306*0x4+0x713*0x1)-_0x6ff419,0x5b4+-0xc18+0x66c),_0x4d77b9)),_0x4ffeab[_0x5a65f7(0x754)][_0x5a65f7(0xc2d)]=_0x5eae3f+'px',_0x4ffeab[_0x5a65f7(0x754)][_0x5a65f7(0x6d7)]=_0x4d77b9+'px',_0x4ffeab[_0x5a65f7(0x754)]['right']=_0x5a65f7(0xd66),_0x4ffeab[_0x5a65f7(0x754)]['botto'+'m']=_0x5a65f7(0xd66),_0xf453eb[_0x5a65f7(0x5e9)]={'x':_0x5eae3f,'y':_0x4d77b9};},_0x4b00cf=function(){var _0x410315=_0x2d3ba5,_0x3f0b48={'FCRlx':function(_0x5c7159,_0x5cdaaf){var _0x4ec159=_0x500f;return _0x446f5d[_0x4ec159(0x3ff)](_0x5c7159,_0x5cdaaf);}};if('AUWcd'==='qJpIu'){var _0x2ffc64=_0x4acf31['max'](0x1*0x162e+0xd37*0x1+-0xbcc*0x3,_0x42f58d[_0x410315(0xc24)+'Width']||_0x130dbc[_0x410315(0x1f8)+'entEl'+_0x410315(0x913)]['clien'+_0x410315(0x87d)+'h']||-0x2*0x649+-0x1*0x1c0+0xe52),_0x4cf245=_0x23e810[_0x410315(0x8d5)](-0x156b+0x1*0x2080+-0xb14,_0x24fa2e['inner'+_0x410315(0x6e3)+'t']||_0x2b9584['docum'+'entEl'+'ement'][_0x410315(0x367)+'tHeig'+'ht']||0x3ee+0xa0a+0xc*-0x12a);return(_0x48a750['cv'][_0x410315(0xb41)]!==_0x2ffc64||_0x3f0b48[_0x410315(0xe53)](_0xf77fe9['cv']['heigh'+'t'],_0x4cf245))&&(_0xccc535['cv']['width']=_0x2ffc64,_0x4da670['cv'][_0x410315(0x83a)+'t']=_0x4cf245),{'w':_0x2ffc64,'h':_0x4cf245};}else{if(!_0x57edbb)return;_0x57edbb=![],_0x19f3a9[_0x410315(0x754)]['curso'+'r']=_0x446f5d[_0x410315(0xa1a)],_0x446f5d['BVBfA'](_0x5720ea);}};_0x19f3a9[_0x2d3ba5(0x601)+'entLi'+'stene'+'r'](_0x226e33[_0x2d3ba5(0x709)],_0x37f2a6),window[_0x2d3ba5(0x601)+_0x2d3ba5(0xb70)+'stene'+'r']('mouse'+_0x2d3ba5(0x5ab),_0x5975cb),window['addEv'+_0x2d3ba5(0xb70)+_0x2d3ba5(0xa54)+'r']('mouse'+'up',_0x4b00cf),_0x19f3a9[_0x2d3ba5(0x601)+_0x2d3ba5(0xb70)+'stene'+'r']('touch'+_0x2d3ba5(0xa2b),_0x37f2a6,{'passive':![]}),window['addEv'+_0x2d3ba5(0xb70)+'stene'+'r'](_0x2d3ba5(0x4aa)+_0x2d3ba5(0x5ab),_0x5975cb,{'passive':![]}),window[_0x2d3ba5(0x601)+_0x2d3ba5(0xb70)+_0x2d3ba5(0xa54)+'r'](_0x226e33['RoZjX'],_0x4b00cf);}else{var _0x28ef50=_0x3816e5[_0x2d3ba5(0xe0f)+_0x2d3ba5(0xaaa)+_0x2d3ba5(0xc6a)](_0x5ddf1e);if(_0x31ac30)_0x28ef50['class'+_0x2d3ba5(0xdd5)]=_0x498c31;if(_0xc5a1ae!=null)_0x28ef50[_0x2d3ba5(0xc24)+_0x2d3ba5(0x976)]=_0x3d9d6a;return _0x28ef50;}}catch(_0x3c2944){}}function _0x38b23e(){var _0x467d24=_0x19bc25,_0x389578={'XEIlB':function(_0xe43bbc,_0x2b3749){return _0xe43bbc(_0x2b3749);},'mbCWP':function(_0x56c51b,_0x524a83){return _0x56c51b===_0x524a83;},'cPYoQ':'tQzPJ','QpRuv':_0x226e33[_0x467d24(0xc69)]};if(_0xf453eb['built'])return _0xf453eb['root'];try{if(!document[_0x467d24(0x649)]||!document['body'][_0x467d24(0x55e)+_0x467d24(0xd13)+'d'])return null;if(!document['getEl'+_0x467d24(0x913)+_0x467d24(0x42e)](_0x467d24(0xce2)+'a-men'+'u-css')){var _0x2a9633=document[_0x467d24(0xe0f)+_0x467d24(0xaaa)+_0x467d24(0xc6a)](_0x467d24(0x754));_0x2a9633['id']='sakur'+'a-men'+'u-css',_0x2a9633[_0x467d24(0x2b4)+'onten'+'t']=_0x26c6a1,(document[_0x467d24(0x482)]||document[_0x467d24(0x1f8)+'entEl'+'ement'])[_0x467d24(0x55e)+_0x467d24(0xd13)+'d'](_0x2a9633);}var _0x369dfe=_0x2636e9(_0x467d24(0x9be),_0x226e33[_0x467d24(0xa35)]);_0x369dfe['id']='sakur'+_0x467d24(0xa94)+_0x467d24(0x37e)+'t';var _0x2f043c=_0x226e33[_0x467d24(0x3aa)](_0x2636e9,_0x467d24(0x9be),_0x226e33[_0x467d24(0xa81)]),_0x53e25d=_0x2636e9(_0x467d24(0x9be),_0x467d24(0x82a)+'go',_0x3a606d);_0x2f043c[_0x467d24(0x55e)+_0x467d24(0xd13)+'d'](_0x53e25d);var _0x31cf11=_0x2636e9(_0x226e33[_0x467d24(0xe4c)],_0x226e33[_0x467d24(0x812)]),_0x4faec5=_0x2636e9(_0x226e33['YtoQB'],_0x467d24(0xadf)+'p'),_0x4e78d7=_0x2636e9(_0x467d24(0x9be),'mn-ti'+'tles'),_0x30c8ee=_0x226e33[_0x467d24(0x6f3)](_0x2636e9,_0x226e33[_0x467d24(0xe4c)],'mn-h',_0x226e33['LmnfW']),_0x53e770=_0x2636e9(_0x467d24(0x9be),_0x226e33['gsial'],_0x226e33[_0x467d24(0xb21)]);_0x4e78d7[_0x467d24(0x55e)+'dChil'+'d'](_0x30c8ee),_0x4e78d7['appen'+_0x467d24(0xd13)+'d'](_0x53e770);var _0x316e5f=_0x2636e9(_0x467d24(0x9be),_0x467d24(0xda8)+'ose',_0x467d24(0xe66)+_0x467d24(0xe5f)+_0x467d24(0x72d)+_0x467d24(0x95d)+_0x467d24(0x7b8)+_0x467d24(0xcec)+'\x20d=\x22M'+_0x467d24(0x576)+_0x467d24(0x493)+'18\x206\x20'+'6\x2018\x22'+'/></s'+'vg>');_0x316e5f[_0x467d24(0xa25)+'ck']=function(){_0x389578['XEIlB'](_0x3c5d06,![]);},_0x4faec5[_0x467d24(0x55e)+'dChil'+'d'](_0x4e78d7),_0x4faec5[_0x467d24(0x55e)+'dChil'+'d'](_0x316e5f);var _0x28dbb8=_0x2636e9(_0x226e33[_0x467d24(0xe4c)],'mn-co'+'ls');_0x31cf11['appen'+'dChil'+'d'](_0x4faec5),_0x31cf11[_0x467d24(0x55e)+_0x467d24(0xd13)+'d'](_0x28dbb8),_0x369dfe['appen'+_0x467d24(0xd13)+'d'](_0x2f043c),_0x369dfe[_0x467d24(0x55e)+_0x467d24(0xd13)+'d'](_0x31cf11),document[_0x467d24(0x649)][_0x467d24(0x55e)+'dChil'+'d'](_0x369dfe),_0xf453eb['root']=_0x369dfe,_0xf453eb[_0x467d24(0x9ed)]=_0x28dbb8,_0xf453eb[_0x467d24(0x482)]=_0x30c8ee,_0xf453eb['sub']=_0x53e770,_0x24fd8d(),_0x5734ca(),_0x226e33[_0x467d24(0x271)](_0x2c0556,_0x369dfe,_0x4faec5);var _0x13c1eb={};for(var _0x6ae448=0x2*0x34+-0x1*0x1a49+0x19e1;_0x226e33[_0x467d24(0x402)](_0x6ae448,_0xdd2941[_0x467d24(0xe2a)+'h']);_0x6ae448++){var _0x4bcdb6=('5|4|2'+'|6|3|'+_0x467d24(0x3c2))['split']('|'),_0x3efa59=-0x1680+-0x30f*-0x3+-0xd53*-0x1;while(!![]){switch(_0x4bcdb6[_0x3efa59++]){case'0':_0x13c1eb[_0x2a5608['id']]=_0x19ee1e;continue;case'1':_0x2f043c[_0x467d24(0x55e)+_0x467d24(0xd13)+'d'](_0x19ee1e);continue;case'2':_0x19ee1e[_0x467d24(0xb33)]=_0x467d24(0x3c5)+'n';continue;case'3':(function(_0x4cdc53){var _0x136c34=_0x467d24;_0x19ee1e[_0x136c34(0xa25)+'ck']=function(){_0x389578['XEIlB'](_0x136e3f,_0x4cdc53);};}(_0x2a5608['id']));continue;case'4':var _0x19ee1e=_0x2636e9(_0x226e33['cYPbd'],_0x226e33[_0x467d24(0x6f1)],_0x226e33[_0x467d24(0xe15)](_0x226e33[_0x467d24(0x73d)](_0x467d24(0x32a)+'l>',_0x2a5608[_0x467d24(0xb85)]),_0x467d24(0x977)+_0x467d24(0x278)));continue;case'5':var _0x2a5608=_0xdd2941[_0x6ae448];continue;case'6':_0x19ee1e['title']=_0x2a5608['label'];continue;}break;}}_0xf453eb['butto'+'ns']=_0x13c1eb;var _0x5ceccc=_0x2636e9(_0x226e33['YtoQB'],null,_0x3749bd);return _0x5ceccc['id']=_0x226e33['xyQFf'],_0x5ceccc[_0x467d24(0xcfd)]=_0x226e33[_0x467d24(0xab2)],_0x5ceccc[_0x467d24(0x706)+'seent'+'er']=function(){var _0x26ca6d=_0x467d24;_0x389578['mbCWP'](_0x26ca6d(0x885),_0x389578[_0x26ca6d(0xdca)])?_0x5ceccc[_0x26ca6d(0x754)]['opaci'+'ty']='1':(_0x31791b=_0x3c67ae,_0x3b9d32=_0x24c263['hits']);},_0x5ceccc[_0x467d24(0x706)+_0x467d24(0x483)+'ve']=function(){var _0x1ce349=_0x467d24;_0x5ceccc['style'][_0x1ce349(0xd68)+'ty']=_0xf453eb[_0x1ce349(0x597)]?'1':'.5';},_0x5ceccc[_0x467d24(0xa25)+'ck']=function(_0x2fbcce){var _0xe49f19=_0x467d24;if(_0x226e33['HgIbh']!=='oFSNw'){if(_0x2fbcce&&_0x2fbcce['stopP'+'ropag'+_0xe49f19(0x7c1)])_0x2fbcce[_0xe49f19(0xb03)+'ropag'+'ation']();_0x226e33['PrWBw'](_0x3c5d06,!_0xf453eb[_0xe49f19(0x597)]);}else _0x530e24();},document['body']['appen'+_0x467d24(0xd13)+'d'](_0x5ceccc),_0xf453eb['petal']=_0x5ceccc,setInterval(function(){var _0x59bfef=_0x467d24;try{if(!_0xf453eb['petal'])return;var _0x448133=_0x489393();_0xf453eb[_0x59bfef(0x3ba)][_0x59bfef(0x754)]['opaci'+'ty']=_0xf453eb['open']?'1':_0x448133?'.8':'.28',_0xf453eb['petal'][_0x59bfef(0xcfd)]=_0x448133?_0x59bfef(0x9b5)+_0x59bfef(0x6d3)+_0x59bfef(0x322)+_0x59bfef(0xd1d)+_0x59bfef(0xc2a):_0x389578['QpRuv'];}catch(_0x11eb3c){}},0x1d87*-0x1+-0xd06+0x1*0x2d49),_0xf453eb[_0x467d24(0xa31)]=!![],_0x136e3f(_0xf453eb[_0x467d24(0xcbb)]),_0x369dfe;}catch(_0x5d857b){return _0x226e33[_0x467d24(0x87c)]('OGgXe','OGgXe')?_0x56926b():(console[_0x467d24(0x301)](_0x467d24(0xe5d)+_0x467d24(0xcfa)+_0x467d24(0x909)+'\x20unav'+_0x467d24(0x7b0)+'le',_0x226e33[_0x467d24(0x823)]+_0x4316bd,_0x5d857b),null);}}function _0x136e3f(_0x48fd49){var _0x54477e=_0x19bc25,_0x2f24c0={'PjqMK':function(_0x505cec,_0x3108aa){return _0x505cec/_0x3108aa;},'sVAgk':function(_0x4abb9f,_0x28a035,_0x3c2c62){return _0x4abb9f(_0x28a035,_0x3c2c62);},'cXacY':function(_0x5eb325){return _0x5eb325();}};if(_0x226e33[_0x54477e(0x830)]('iUWfC',_0x54477e(0x399))){_0xf453eb['cat']=_0x48fd49,_0xf453eb['syncs']=[];if(!_0xf453eb['cols'])return;var _0x5c35ef=null;for(var _0x2f4429=-0x1486+0xb88+-0x8fe*-0x1;_0x226e33[_0x54477e(0xe97)](_0x2f4429,_0xdd2941[_0x54477e(0xe2a)+'h']);_0x2f4429++)if(_0x226e33['zrzKt'](_0xdd2941[_0x2f4429]['id'],_0x48fd49))_0x5c35ef=_0xdd2941[_0x2f4429];_0xf453eb['head']['textC'+'onten'+'t']=_0x226e33[_0x54477e(0xd96)](_0x226e33['NUwud'],_0x5c35ef&&_0x5c35ef[_0x54477e(0xb85)]||'?');for(var _0x56a2dd in _0xf453eb[_0x54477e(0x3c5)+'ns']){if(_0xf453eb[_0x54477e(0x3c5)+'ns'][_0x56a2dd]['class'+_0x54477e(0xaa1)])_0xf453eb[_0x54477e(0x3c5)+'ns'][_0x56a2dd][_0x54477e(0x593)+_0x54477e(0xdd5)]=_0x226e33[_0x54477e(0x6f1)]+(_0x56a2dd===_0x48fd49?'\x20acti'+'ve':'');}var _0x1c21ae=[];try{if('gWygT'===_0x54477e(0xd2f))_0x1c21ae=_0x226e33[_0x54477e(0xd84)](_0x491eb3,_0x48fd49);else{var _0x4a8abe=_0x438ff7(_0x418d9c['eye'],[_0x418b29[_0x54477e(0xb84)][-0x2704+0xb66+0x2c3*0xa],_0x2672c2[_0x54477e(0xb84)][-0x1fa5*0x1+0xf0e+0x1098],_0x39d0ad[_0x54477e(0xb84)][0x1fb5*-0x1+0x9a*-0x3+0x2185]+(0x163a*0x1+-0x1285+-0x2*0x1da)],-0x1cbf+-0x2295+0x433c,0x8*0x44b+0xbd*0x23+-0x3847);_0x4a8abe&&(_0x77589e=_0x2f24c0[_0x54477e(0xe23)](_0x4a8abe['x'],0x1*0xe02+0x2b*-0xc9+0x17a9),_0x46143e=_0x4a8abe['y']/(-0x1c93+-0xbeb*-0x3+-0x346));}}catch(_0x1d05e9){_0x1c21ae=[];}while(_0xf453eb['cols'][_0x54477e(0xb91)+'Child'])_0xf453eb['cols']['remov'+_0x54477e(0xaa7)+'d'](_0xf453eb['cols'][_0x54477e(0xb91)+'Child']);for(var _0x3ac8ef=0x356*-0x4+-0x1421+-0x2179*-0x1;_0x3ac8ef<_0x1c21ae['lengt'+'h'];_0x3ac8ef++)_0xf453eb['cols']['appen'+_0x54477e(0xd13)+'d'](_0x1c21ae[_0x3ac8ef]);}else{_0x3a93a0=_0x5badeb,_0x42ec44=[],_0x2f24c0[_0x54477e(0xaf1)](_0x32b1d3,_0x54477e(0x44a)+'t',{'report':_0x2f24c0['cXacY'](_0x1461ab)});return;}}function _0x3c5d06(_0x553f22){var _0x59a42f=_0x19bc25,_0x4941dc={'WqGgt':function(_0x1b6a16,_0x7ec5e4){return _0x1b6a16===_0x7ec5e4;},'MmpMF':function(_0x1076d7,_0x3f7d7c){return _0x1076d7(_0x3f7d7c);},'WBgPu':'sakur'+'a','BBLmu':function(_0x5c4f2a,_0x33b5c7){return _0x5c4f2a+_0x33b5c7;},'KAWvM':_0x226e33[_0x59a42f(0xbc0)],'Cuqod':_0x226e33['ywrZP'],'lwHrr':'borde'+'r-rad'+_0x59a42f(0xdbc)+_0x59a42f(0xb75)+'paddi'+_0x59a42f(0xa82)+_0x59a42f(0x221)+_0x59a42f(0x860)+'t:11p'+_0x59a42f(0x5f8)+_0x59a42f(0x7aa)+'onosp'+'ace,C'+_0x59a42f(0x37d)+_0x59a42f(0xe94)+_0x59a42f(0xdd8)+_0x59a42f(0xcc5)};if(_0x226e33['HZdqi']('dqNHs',_0x226e33[_0x59a42f(0xe3f)])){var _0x4d1430={'fndbU':function(_0x5cce09,_0x10a711){return _0x5cce09*_0x10a711;}};if(_0x15a1f1[_0x3ec5c2]['o']===_0xad38f){if(_0x4941dc['WqGgt'](_0x647368,'v3')){var _0xefa418=_0x1ff187[_0x4ae75b][_0x59a42f(0x321)]||[_0x167a7e[_0x5cf0df]['v'],0x1ce2*0x1+0x13da+-0x30bc,0x5d3+0x236*0x3+-0x3*0x427];return _0xefa418['map'](function(_0x245549){var _0x44c94e=_0x59a42f;return _0x31a0e4['round'](_0x4d1430[_0x44c94e(0x8bc)](_0x245549,-0xa7e*-0x1+-0x6*0x51b+-0x1b6*-0xc))/(-0x393+0x10a3*0x2+-0x7b*0x3d);})[_0x59a42f(0x55c)]('\x20\x20');}var _0x5ab1a8=_0x3e73f9[_0x110aae]['v'];return typeof _0x5ab1a8===_0x59a42f(0x791)+'r'?_0x1a7537['round'](_0x5ab1a8*(-0x4*0x2b+-0x25c+-0x94*-0xc))/(0x1ead+-0x1de0+0x3*0x109):_0x4941dc['MmpMF'](_0x45bd44,_0x5ab1a8);}}else{_0xf453eb[_0x59a42f(0x597)]=!!_0x553f22;var _0x15ff0a=_0x38b23e();if(!_0x15ff0a)return;_0x15ff0a['class'+'Name']=_0x226e33[_0x59a42f(0x5dc)]('mn-pa'+'nel',_0xf453eb[_0x59a42f(0x597)]?_0x226e33[_0x59a42f(0x93d)]:'');if(_0xf453eb['petal'])_0xf453eb[_0x59a42f(0x3ba)]['style']['opaci'+'ty']=_0xf453eb[_0x59a42f(0x597)]?'1':'.5';if(_0xf453eb['open']){if(_0x226e33[_0x59a42f(0xcbe)]===_0x59a42f(0x6f2)){_0x226e33['BiOUU'](_0x136e3f,_0xf453eb[_0x59a42f(0xcbb)]);try{if(_0x226e33[_0x59a42f(0xbba)]===_0x59a42f(0xad7)){var _0x2ca6b5=window['inner'+'Heigh'+'t']||-0xf1d+-0xfd1*-0x1+-0x136*-0x2;if(_0x2ca6b5<0x21e6+0x2*-0x9e+-0x7*0x452)_0x226e33['XHjZy'](_0x53b6f9,![]);}else return _0x23158d['facto'+'r'];}catch(_0x815153){}}else{var _0x286814=('4|2|1'+_0x59a42f(0x533)+'3|6')[_0x59a42f(0xa6a)]('|'),_0x3dd5ec=-0x9f0+-0xa*0x2c1+0x63f*0x6;while(!![]){switch(_0x286814[_0x3dd5ec++]){case'0':_0x682f9[_0x59a42f(0x2b4)+_0x59a42f(0x806)+'t']=_0x4941dc[_0x59a42f(0x99d)];continue;case'1':_0x682f9['id']=_0x59a42f(0xce2)+_0x59a42f(0x72b)+_0x59a42f(0xc54)+'b';continue;case'2':var _0x682f9=_0x541d4b[_0x59a42f(0xe0f)+_0x59a42f(0xaaa)+'ent'](_0x59a42f(0x9be));continue;case'3':_0x682f9[_0x59a42f(0xa25)+'ck']=function(){_0x4bc2c2['llzYr'](_0x275f9a,![]),_0x2d0aef();};continue;case'4':var _0x4bc2c2={'llzYr':function(_0x1bfae0,_0x5a885e){return _0x1bfae0(_0x5a885e);}};continue;case'5':_0x682f9['style']['cssTe'+'xt']=_0x4941dc[_0x59a42f(0xc26)](_0x4941dc[_0x59a42f(0xc26)](_0x4941dc[_0x59a42f(0xc26)](_0x4941dc['KAWvM'],_0x4941dc['Cuqod']),_0xcafab)+';',_0x4941dc['lwHrr']);continue;case'6':_0x1f837c['body'][_0x59a42f(0x55e)+'dChil'+'d'](_0x682f9);continue;}break;}}}}}function _0x276d99(){var _0x8634dd=_0x19bc25,_0xd3c8bb={'iaadt':function(_0x2a0bda,_0x380ed1){var _0x375896=_0x500f;return _0x226e33[_0x375896(0xc03)](_0x2a0bda,_0x380ed1);},'KIxew':'%c[sa'+_0x8634dd(0xcfa)+_0x8634dd(0xc0d)+'lWarz'+_0x8634dd(0x2b6)+'rt','lrlKY':function(_0x37fa71,_0x2d3946){var _0x5b6932=_0x8634dd;return _0x226e33[_0x5b6932(0xbae)](_0x37fa71,_0x2d3946);},'bLyoR':function(_0x51cdc0,_0x48d02b){return _0x51cdc0+_0x48d02b;},'jOkgj':_0x226e33[_0x8634dd(0x823)],'FdckY':function(_0x6e65d,_0x254dc6){return _0x6e65d+_0x254dc6;}};if(!_0xf453eb[_0x8634dd(0x597)]||!_0xf453eb[_0x8634dd(0xa31)])return;try{for(var _0x58c8fb=-0x1*-0x1627+0x3df*-0x5+0x166*-0x2;_0x58c8fb<_0xf453eb[_0x8634dd(0x90e)][_0x8634dd(0xe2a)+'h'];_0x58c8fb++){try{_0xf453eb[_0x8634dd(0x90e)][_0x58c8fb]();}catch(_0x341ede){}}var _0x2824ee=_0x23e07b;_0xf453eb[_0x8634dd(0x6ae)]['textC'+_0x8634dd(0x806)+'t']=_0x2824ee?_0x226e33[_0x8634dd(0x6e8)](_0x226e33[_0x8634dd(0xe45)]('v'+_0x2824ee[_0x8634dd(0xb17)+'on'],_0x226e33[_0x8634dd(0x8da)])+_0x2824ee[_0x8634dd(0xceb)+_0x8634dd(0x9c3)+'ed']+'/'+_0x2824ee[_0x8634dd(0xceb)+'Total']+('\x20\x20·\x20\x20'+_0x8634dd(0xde0)+_0x8634dd(0x2ab)),_0x2824ee['esp']&&_0x2824ee[_0x8634dd(0x30c)][_0x8634dd(0xde0)+_0x8634dd(0xcf6)+'t']||-0x151f+-0x1a68+0x2f87)+('\x20\x20·\x20\x20'+_0x8634dd(0x35a))+(_0x2824ee['wasmM'+'emory']&&_0x2824ee['wasmM'+_0x8634dd(0x834)][_0x8634dd(0x8f7)+_0x8634dd(0x6a9)]?Math[_0x8634dd(0xdd2)](_0x2824ee[_0x8634dd(0xc79)+_0x8634dd(0x834)][_0x8634dd(0xc83)]/(-0x1*0x158e63+0x5*0x15e74+0x1eb61f))+'MB':'-'):'waiti'+'ng\x20fo'+'r\x20the'+'\x20firs'+'t\x20rep'+_0x8634dd(0x1d0);var _0x5b0153=_0xf453eb[_0x8634dd(0x9ed)]['query'+_0x8634dd(0x42a)+'torAl'+'l']?_0xf453eb[_0x8634dd(0x9ed)]['query'+'Selec'+_0x8634dd(0x9c4)+'l'](_0x226e33[_0x8634dd(0x3a8)]):[];for(var _0x3d0e59=0x6f1+-0x1c42*-0x1+-0x1*0x2333;_0x226e33[_0x8634dd(0x258)](_0x3d0e59,_0x5b0153[_0x8634dd(0xe2a)+'h']);_0x3d0e59++){if(_0x226e33['gzdHf']('QcefZ','Qadnl')){var _0x4672d4=_0x5b0153[_0x3d0e59][_0x8634dd(0xbc9)+'et']['k'],_0x3bc85d='';if(_0x226e33[_0x8634dd(0x3da)](_0x4672d4,_0x8634dd(0x379)+'ON'))_0x3bc85d=_0x2824ee?_0x2824ee[_0x8634dd(0xb17)+'on']:'-';else{if(_0x4672d4==='appli'+'ed\x20/\x20'+_0x8634dd(0xd30)+_0x8634dd(0x641))_0x3bc85d=_0x2824ee?_0x226e33['WZARN'](_0x2824ee[_0x8634dd(0xceb)+_0x8634dd(0x9c3)+'ed']+'\x20/\x20',_0x2824ee[_0x8634dd(0xceb)+_0x8634dd(0xb72)+'tered'+_0x8634dd(0xa63)]):'-';else{if(_0x4672d4===_0x226e33[_0x8634dd(0x242)])_0x3bc85d=_0x2824ee&&_0x2824ee[_0x8634dd(0xc79)+_0x8634dd(0x834)]&&_0x2824ee[_0x8634dd(0xc79)+_0x8634dd(0x834)][_0x8634dd(0x8f7)+'red']?_0x226e33[_0x8634dd(0xd99)](_0x226e33['UUovk'](_0x226e33['wdqTV'](Math[_0x8634dd(0xdd2)](_0x2824ee['wasmM'+_0x8634dd(0x834)]['bytes']/(0x195b15+-0x112aec+0x7cfd7)),_0x226e33['ozMLv']),_0x2824ee['wasmM'+_0x8634dd(0x834)][_0x8634dd(0x5f6)]),'ms'):'-';else{if(_0x226e33[_0x8634dd(0x360)](_0x4672d4,_0x8634dd(0xc85)+_0x8634dd(0x5bc)+_0x8634dd(0xcfb)+'nc'))_0x3bc85d=_0x2824ee&&_0x2824ee['esp']?String(_0x2824ee[_0x8634dd(0x30c)][_0x8634dd(0xde0)+_0x8634dd(0xcf6)+'t']):'-';else{if(_0x226e33[_0x8634dd(0x88a)](_0x4672d4,_0x8634dd(0x3f7)+_0x8634dd(0xe22)+'ut\x20yo'+'u'))_0x3bc85d=_0x2824ee&&_0x2824ee['esp']?String(_0x2824ee['esp'][_0x8634dd(0xce9)+_0x8634dd(0x6dd)]):'-';else{if(_0x4672d4===_0x8634dd(0x9c6)+_0x8634dd(0x57c)+'ve\x20ma'+'nager')_0x3bc85d=_0x2824ee&&_0x2824ee[_0x8634dd(0x30c)]&&_0x2824ee[_0x8634dd(0x30c)][_0x8634dd(0x96b)+'a']?_0x2824ee[_0x8634dd(0x30c)]['camer'+'a']+'\x20('+_0x2824ee[_0x8634dd(0x30c)]['camer'+'aFrom']+')':'-';else{if(_0x226e33['wywIC'](_0x4672d4,_0x8634dd(0x8b9)+_0x8634dd(0x2ee)+'ler+0'+'x2E4'))_0x3bc85d=_0x2824ee&&_0x2824ee['local']&&_0x2824ee[_0x8634dd(0x416)]['feet']?_0x2824ee['local'][_0x8634dd(0x832)][_0x8634dd(0x7d5)](function(_0x389cba){var _0x213439=_0x8634dd;return Math[_0x213439(0xdd2)](_0xd3c8bb[_0x213439(0x7e5)](_0x389cba,-0x1*0xc81+-0x1d1f+-0x2a04*-0x1))/(-0x136+-0x1aa*-0x1+0x2*-0x8);})['join']('\x20\x20'):'-';else{if(_0x226e33['zbjhG'](_0x4672d4,_0x226e33[_0x8634dd(0x494)]))_0x3bc85d=_0x2824ee&&_0x2824ee[_0x8634dd(0x416)]&&_0x2824ee[_0x8634dd(0x416)][_0x8634dd(0xb84)]?_0x2824ee['local'][_0x8634dd(0xb84)]['map'](function(_0x162cbb){var _0xa51563=_0x8634dd;return Math[_0xa51563(0xdd2)](_0x162cbb*(0x7bd+0x1607+0x2f0*-0xa))/(-0x19c*0x8+0x2625+-0x18e1);})[_0x8634dd(0x55c)]('\x20\x20'):'-';else{var _0x2e472c=_0x4672d4[_0x8634dd(0xa6a)]('+');_0x3bc85d=_0x419ecb(_0x2824ee,_0x2e472c[0x16f0+0x8da+-0x1fca][_0x8634dd(0x724)+'Of']('Healt'+'h')===0x1*0x12a7+-0x4*0x6c0+-0x1*-0x859?_0x226e33[_0x8634dd(0x1f9)]:'FPSco'+'ntrol'+_0x8634dd(0x4bb),parseInt(_0x2e472c[-0x1*-0xeb0+0x26c7+-0x3576],-0x3*0xbac+-0x99f*0x4+-0x1*-0x4990));}}}}}}}}if(_0x3bc85d!==_0x5b0153[_0x3d0e59]['textC'+'onten'+'t'])_0x5b0153[_0x3d0e59][_0x8634dd(0x2b4)+'onten'+'t']=_0x3bc85d;}else{_0x3a4a0d['log'](_0xd3c8bb['KIxew'],_0xd3c8bb[_0x8634dd(0x91f)](_0xd3c8bb[_0x8634dd(0x7c2)](_0xd3c8bb[_0x8634dd(0xdc2)],_0x295a19),_0x8634dd(0x6d9)+_0x8634dd(0x43e)+_0x8634dd(0x85a)+'0'),_0xd0af7),_0x1a57e1[_0x8634dd(0x34e)](_0xd3c8bb[_0x8634dd(0x951)](_0x2af079+'\x0a'+_0x238d26[_0x8634dd(0x80a)+_0x8634dd(0xad3)](_0x5cd003,null,0x17b*-0x11+-0xb3b*-0x3+-0x2d7*0x3)+'\x0a',_0x1c7296)),_0x115a29=_0x3cb244;try{_0x258271(_0x32441d);}catch(_0x47d44c){}_0xcb50b8(_0x8634dd(0x44a)+'t',{'report':_0xe57665});}}}catch(_0x1db4c7){}}function _0x5e0e58(){var _0x17f746=_0x19bc25;try{var _0x31e8ae=_0x226e33['WYnpI'](_0x51e6ed);return _0x31e8ae&&_0x31e8ae['feet']?_0x31e8ae['feet'][-0xf99*-0x1+-0x26d6+0x23*0xaa]:null;}catch(_0x3bf239){if(_0x226e33['ggchG'](_0x226e33[_0x17f746(0x714)],_0x17f746(0x596)))return null;else _0x11aadc(_0x59f2ca['on'],_0x226e33[_0x17f746(0x986)](_0x36ca30,_0x5efe25[_0x17f746(0x6ff)])||0x47f*-0x7+-0x3*0x623+0x31e3);}}var _0x1927c0=-0x22*0x67+0x5be+-0x7f2*-0x1+0.5,_0x197dcc=-0x1*-0xbb7+0x3*-0x42c+0xd3+0.25,_0x3a553c={},_0x54833f=null,_0x14d89b=-0x3c7+-0xd*-0x140+-0x2*0x63c+0.8;function _0x31911d(_0x1141f8,_0x425f5c,_0x563e57){var _0x5d1fa5=_0x19bc25,_0x29f0f8={'mjclo':_0x226e33['QkQXd'],'qdcSW':_0x226e33['qnqPJ'],'Zmzvl':function(_0xd1f267,_0x257f06,_0x105985){return _0xd1f267(_0x257f06,_0x105985);},'UYVos':function(_0x4ad4c9,_0x42a4fb){return _0x226e33['nIrlN'](_0x4ad4c9,_0x42a4fb);},'nJcFC':_0x5d1fa5(0xe10)+'le','NMtbu':function(_0xa65d7e){return _0xa65d7e();},'svWKa':function(_0x936679,_0x1aa87a){return _0x226e33['wdqTV'](_0x936679,_0x1aa87a);},'RptEC':function(_0x3ec912,_0x306fc1){var _0x4f5935=_0x5d1fa5;return _0x226e33[_0x4f5935(0xd4b)](_0x3ec912,_0x306fc1);},'rwRda':_0x226e33[_0x5d1fa5(0x3b5)]};try{var _0x121ec3=[],_0x4c979d,_0x58a012,_0x108f0d=_0x425f5c!==null&&_0x425f5c!==undefined&&isFinite(_0x425f5c),_0x28b1eb=0x1*-0xeed+0x1308+-0x41b;for(_0x4c979d=0x1ff2+-0x4d0+-0x1b22;_0x4c979d<_0x1141f8[_0x5d1fa5(0xe2a)+'h'];_0x4c979d++){if('sPuir'==='XbyNj')_0xd458cd[_0x5d1fa5(0x2b4)+_0x5d1fa5(0x806)+'t']=_0x510b3c(_0x58c13c[_0x5d1fa5(0xac8)][_0x5d1fa5(0x9a1)+'r'])['toFix'+'ed'](0x1ebe+-0x24a*-0xc+-0x1*0x3a35)+'x';else{var _0x45d17f=_0x1141f8[_0x4c979d]['v'];if(!_0x45d17f)continue;var _0xa10e30=Math[_0x5d1fa5(0x9a6)](_0x45d17f[-0x103*-0x6+0x2024+-0x2636]*_0x45d17f[0x207+-0x2*0x96b+0xd*0x14b]+_0x45d17f[-0x1f90+0xc19+0x1*0x1379]*_0x45d17f[0x4*-0x256+-0x12c4+0x2*0xe0f]);if(_0xa10e30>_0x28b1eb)_0x28b1eb=_0xa10e30;}}var _0x43afca=_0x28b1eb*(-0x1322+-0x1*0x6fb+-0x7*-0x3bb+0.25),_0x363bc3=-0x1*0x1598+-0x16c4+-0x11*-0x29c;_0x226e33['iZWLx'](typeof console,_0x226e33['QrWHB'])&&console[_0x5d1fa5(0x34e)]&&!globalThis[_0x5d1fa5(0xd85)+_0x5d1fa5(0xa19)]&&(globalThis['__ppL'+_0x5d1fa5(0xa19)]=-0x107*0x7+-0x1*-0x3af+0x1*0x383,console['log'](_0x226e33['pfdpX'](_0x226e33[_0x5d1fa5(0x3e8)](_0x226e33[_0x5d1fa5(0xe36)](_0x226e33[_0x5d1fa5(0xde3)](_0x226e33[_0x5d1fa5(0x8c7)](_0x226e33['PGRtN'],_0x1141f8[_0x5d1fa5(0xe2a)+'h'])+(_0x5d1fa5(0xb76)+'h=')+_0x28b1eb['toFix'+'ed'](-0x8*0x253+-0x2340+0x35da),_0x226e33['CYTDa']),_0x43afca[_0x5d1fa5(0xa0d)+'ed'](-0x1420+0x58f*0x5+-0x7a9))+_0x226e33['pFwnj'],_0x108f0d),_0x5d1fa5(0xb08)+'le=')+JSON[_0x5d1fa5(0x80a)+_0x5d1fa5(0xad3)](_0x1141f8[_0x5d1fa5(0x62f)](0x218b+0x1f0a+0x4095*-0x1,-0x89*0x29+0x143c+0x1*0x1b7))));for(_0x4c979d=-0x7f6*0x2+0x7*-0x2e6+0x2436*0x1;_0x226e33[_0x5d1fa5(0x4d0)](_0x4c979d,_0x1141f8[_0x5d1fa5(0xe2a)+'h']);_0x4c979d++){var _0x250acf=_0x1141f8[_0x4c979d]['v'];if(!_0x250acf)continue;if(_0x250acf[-0x1a*0x17d+0x1991+0xd21*0x1]===0x5*0x70b+-0x184*0x16+-0x1df&&_0x226e33[_0x5d1fa5(0x65f)](_0x250acf[0x6bb*0x1+-0x187c+0x11c2],0x16e3+-0xe*-0x241+-0x3671)&&_0x250acf[-0x201*-0x7+0x131*-0x1+-0xcd4]===-0x1*0x1a1e+0x1475+0x5a9)continue;var _0x1dd637=Math[_0x5d1fa5(0x9a6)](_0x250acf[0x1305+-0x4*-0x54+-0x1455]*_0x250acf[-0x3*-0x5d2+-0x1baf+0xa39]+_0x250acf[0x5*0x6aa+0x19f6*0x1+0x3b46*-0x1]*_0x250acf[0xb91+0x17b9+-0x469*0x8]);if(_0x226e33[_0x5d1fa5(0x629)](_0x1dd637,_0x43afca)){if(_0x226e33[_0x5d1fa5(0xb65)]('YLVYG',_0x226e33[_0x5d1fa5(0x650)]))return _0x1f826e['sourc'+'e']=_0x29f0f8['mjclo'],_0x5e7f8f;else{_0x363bc3++;continue;}}_0x121ec3[_0x5d1fa5(0x822)](_0x1141f8[_0x4c979d]);}if(!_0x121ec3[_0x5d1fa5(0xe2a)+'h']){if(_0x5d1fa5(0x93b)!==_0x5d1fa5(0x93b)){var _0x4ac005=_0x4be813['data'];if(_0x4ac005&&_0x4ac005['__sak'+'ura']===_0x5737b3&&_0x4ac005['kind']===_0x29f0f8[_0x5d1fa5(0x987)])_0x29f0f8[_0x5d1fa5(0x6e5)](_0x3c4a48,_0x4ac005['cmd'],_0x4ac005['arg']);}else return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x363bc3,'ambiguous':![],'reach':0x0,'held':![]};}var _0x3cde1a=[];for(_0x4c979d=0x171+0x1951+-0x2ad*0xa;_0x4c979d<_0x121ec3['lengt'+'h'];_0x4c979d++){if(_0x226e33['LpmcA']===_0x226e33['LpmcA']){var _0x26f791=_0x121ec3[_0x4c979d]['v'],_0x560317=-(0x1*-0x277+-0x7*-0x6d+-0x83);for(_0x58a012=-0x26e9*0x1+0x1d0b+-0x1a5*-0x6;_0x58a012<_0x3cde1a['lengt'+'h'];_0x58a012++){var _0x419feb=_0x3cde1a[_0x58a012]['c'][0x4a2*0x8+0xc82+-0x3192]['v'],_0x3ef4fa=_0x26f791[0x268b+0x1*0x1f51+-0x45dc]-_0x419feb[-0x1768*-0x1+0x25e6+-0x3d4e],_0x457116=_0x26f791[0x1cf7+-0x209c+0x3a6]-_0x419feb[0x1de1+-0x13dc+-0xa04],_0x356e20=_0x226e33[_0x5d1fa5(0x2f6)](_0x26f791[0x5b3+0x2460+-0x2a11],_0x419feb[-0x5c*-0x56+0x961*0x1+-0x2847]);if(_0x226e33[_0x5d1fa5(0xd18)](_0x226e33[_0x5d1fa5(0x9ae)](_0x3ef4fa,_0x3ef4fa)+_0x457116*_0x457116,_0x356e20*_0x356e20)<=_0x197dcc){if(_0x226e33[_0x5d1fa5(0x919)]==='krmeQ'){_0x560317=_0x58a012;break;}else return{'w':0x0,'h':0x0};}}if(_0x226e33[_0x5d1fa5(0xe3c)](_0x560317,-(-0x13*-0xd1+-0x8b+-0xef7)))_0x3cde1a[_0x5d1fa5(0x822)]({'c':[_0x121ec3[_0x4c979d]]});else _0x3cde1a[_0x560317]['c'][_0x5d1fa5(0x822)](_0x121ec3[_0x4c979d]);}else{var _0x3da4cd=0x778+-0xb*-0x191+-0x18b3*0x1;for(var _0x3cf2ec=-0xfb5*-0x2+0x1ea8+0x5*-0xc6a;_0x29f0f8[_0x5d1fa5(0x274)](_0x3cf2ec,_0x44cf1c['lengt'+'h']);_0x3cf2ec++){if(_0x545f99[_0x3cf2ec]['hook']&&_0x5e45a6[_0x3cf2ec][_0x5d1fa5(0xc0c)][_0x5d1fa5(0x3b6)+'ed'])_0x3da4cd++;}return _0x3da4cd;}}var _0x42aebe=_0x3cde1a[0xf1e+-0x1825+0x907],_0xd0d0ac=-Infinity;for(_0x58a012=-0xbdf+0x1f5*-0x3+-0x1*-0x11be;_0x226e33[_0x5d1fa5(0x59c)](_0x58a012,_0x3cde1a[_0x5d1fa5(0xe2a)+'h']);_0x58a012++){var _0xbaf58f=_0x3cde1a[_0x58a012]['c'],_0x3b433f=_0x226e33[_0x5d1fa5(0x9ce)](_0xbaf58f['lengt'+'h'],-0x12eb+-0x19eb+0x30be);if(_0x108f0d){var _0x74e657=Infinity;for(var _0x413f99=0x1*-0x23b3+-0x802+0xa7*0x43;_0x413f99<_0xbaf58f['lengt'+'h'];_0x413f99++){var _0x4cb5a9=Math[_0x5d1fa5(0x5f5)](_0x226e33[_0x5d1fa5(0x808)](_0xbaf58f[_0x413f99]['v'][-0x1460+-0x1dc4+0x3225],_0x425f5c));if(_0x4cb5a9<_0x74e657)_0x74e657=_0x4cb5a9;}_0x3b433f-=_0x74e657;}else{if(_0x5d1fa5(0x9a9)!=='mMGca'){var _0x1e2b44=_0x33c8f1[_0x2b2f00];_0x171973+=_0x1e2b44[_0x5d1fa5(0xac9)]||-0xa7a*0x1+0x1dc5*-0x1+0x283f,_0x3697c9+=_0x226e33[_0x5d1fa5(0x657)](_0x1e2b44[_0x5d1fa5(0x585)+'ts']||0x3*0x482+-0x1ef3+0x5cf*0x3,_0x1e2b44[_0x5d1fa5(0x9b8)+_0x5d1fa5(0xdad)]||0x1*-0x6cb+0xb*0x1de+-0x45*0x33);}else{var _0x1a25e6=-0x2642+0xc1d+0x1a25;for(var _0x438ca4=-0x6f8+0x4*-0x95b+0x2c64;_0x438ca4<_0xbaf58f[_0x5d1fa5(0xe2a)+'h'];_0x438ca4++){if('oNuiD'==='oNuiD'){var _0x18a388=Math[_0x5d1fa5(0x9a6)](_0x226e33['VVIFm'](_0xbaf58f[_0x438ca4]['v'][-0x761*-0x4+-0x6f*-0x1b+0xad*-0x3d],_0xbaf58f[_0x438ca4]['v'][-0x1817+-0x62c+-0x3d*-0x7f])+_0xbaf58f[_0x438ca4]['v'][0x33e*0x1+0x1cab*0x1+-0x1fe7]*_0xbaf58f[_0x438ca4]['v'][0x21f+0x136f+0x1c*-0xc5]);if(_0x226e33['yOBux'](_0x18a388,_0x1a25e6))_0x1a25e6=_0x18a388;}else return _0x20c909[_0x5d1fa5(0x530)+'e']='windo'+'w.'+_0x5f28cc[_0x12e526]+_0x29f0f8['nJcFC'],_0x280aad;}_0x3b433f+=_0x1a25e6;}}_0x226e33['LGIin'](_0x3b433f,_0xd0d0ac)&&(_0x226e33[_0x5d1fa5(0x7bc)](_0x5d1fa5(0x91b),_0x226e33[_0x5d1fa5(0x2c8)])?(_0xd0d0ac=_0x3b433f,_0x42aebe=_0x3cde1a[_0x58a012]):(_0x777fcd=_0x12d459,_0xd8db31=_0x5d0659['c'][_0x44cb43]));}var _0xb53116=_0x42aebe['c'][-0xd7*0xd+0x1b5*-0x13+0x2b5a],_0x4705b9=-(0xd87+0x1*0x128d+-0x2013);for(_0x58a012=-0x90a+0x1*-0x1597+-0x1ea1*-0x1;_0x58a012<_0x42aebe['c']['lengt'+'h'];_0x58a012++){if(_0x226e33['iZWLx'](_0x5d1fa5(0xa07),_0x5d1fa5(0xa6c))){var _0x420cff=_0x42aebe['c'][_0x58a012]['v'],_0xfdfb1e=Math['sqrt'](_0x226e33['Rlbbi'](_0x420cff[0x2191+-0x31b+0x45a*-0x7],_0x420cff[-0x5*-0x7b8+0x21a4+-0x483c])+_0x420cff[-0xb*0x80+0xf74+-0x9f2]*_0x420cff[-0x1206+0x1774+0x15b*-0x4]);(_0x226e33[_0x5d1fa5(0xcee)](_0xfdfb1e,_0x4705b9)||_0x226e33[_0x5d1fa5(0x2cc)](_0xfdfb1e,_0x4705b9)&&_0x226e33[_0x5d1fa5(0x27a)](_0x420cff[0x1df8+-0xd38+-0x10bf],_0xb53116['v'][-0x1336+-0x1*-0x24b6+-0x117f]))&&(_0x5d1fa5(0x9c8)===_0x5d1fa5(0x9c8)?(_0x4705b9=_0xfdfb1e,_0xb53116=_0x42aebe['c'][_0x58a012]):(_0x2cd807[_0x5d1fa5(0xa3f)]=_0x3c32cb[-0x1332+0x8f8*0x4+-0x1*0x10ac]['val'](),_0x32fb0e[_0x5d1fa5(0x9b8)+'its']++));}else return _0x29f0f8[_0x5d1fa5(0x8ed)](_0x45ee2f);}var _0x2c155f=![];if(_0x563e57&&_0x563e57['o'])for(_0x58a012=0x1*-0x11c5+0x91*0xb+0xb8a;_0x58a012<_0x42aebe['c']['lengt'+'h'];_0x58a012++){if(_0x226e33['qOOSh'](_0x226e33['wNggZ'],'TUQVV')){_0x39287f(![]),_0x189a91(-0xbf5+0x307*0x5+0x202*-0x1);return;}else{if(_0x226e33['HZdqi'](_0x42aebe['c'][_0x58a012]['o'],_0x563e57['o']))continue;if(_0x108f0d){var _0x13b632=Math[_0x5d1fa5(0x5f5)](_0x226e33[_0x5d1fa5(0x39c)](_0x42aebe['c'][_0x58a012]['v'][0x1386+0x359+-0x16de],_0x425f5c)),_0x5792a7=Infinity;for(var _0x402005=-0x3af*-0x1+0x86*-0x47+0x217b;_0x226e33['DmRuO'](_0x402005,_0x42aebe['c']['lengt'+'h']);_0x402005++){if(_0x226e33[_0x5d1fa5(0x394)]('QaNFp',_0x226e33[_0x5d1fa5(0xb92)]))return _0x4da10a['v']!==_0x45e330&&_0xefd371(_0xd6d6bd['v']);else{var _0x580208=Math['abs'](_0x226e33[_0x5d1fa5(0x39c)](_0x42aebe['c'][_0x402005]['v'][0x1bac+0x75e+0x1*-0x2309],_0x425f5c));if(_0x580208<_0x5792a7)_0x5792a7=_0x580208;}}if(_0x226e33['ZvUYk'](_0x13b632,_0x226e33[_0x5d1fa5(0x8c7)](_0x5792a7,0x1f51*0x1+-0x7*0x17e+-0x14df+0.35)))break;}_0xb53116=_0x42aebe['c'][_0x58a012],_0x4705b9=Math[_0x5d1fa5(0x9a6)](_0x226e33['gLalx'](_0xb53116['v'][0x5*0x4ad+-0x1*-0x194c+-0x30ad],_0xb53116['v'][-0x12ef+-0x6*-0x43+0x115d])+_0xb53116['v'][0x1*-0x1ba5+-0xd83+0x292a]*_0xb53116['v'][-0x1f23+0x1634+0x8f1]),_0x2c155f=!![];break;}}return{'pos':_0xb53116['v'],'posAt':_0xb53116['o'],'candidates':_0x121ec3[_0x5d1fa5(0xe2a)+'h'],'cluster':_0x42aebe['c'][_0x5d1fa5(0xe2a)+'h'],'groups':_0x3cde1a['lengt'+'h'],'held':_0x2c155f,'discarded':_0x363bc3,'ambiguous':_0x226e33[_0x5d1fa5(0x1d7)](_0x3cde1a['lengt'+'h'],-0x1268+0x37*-0x71+0x2ab0),'reach':_0x4705b9};}catch(_0x161b4b){if(_0x226e33[_0x5d1fa5(0x67c)]===_0x226e33[_0x5d1fa5(0x67c)])return console[_0x5d1fa5(0x34e)](_0x5d1fa5(0x37b)+'OS>>',_0x161b4b['messa'+'ge'],String(_0x161b4b[_0x5d1fa5(0x7fe)]||'')['split']('\x0a')['slice'](0xafd*-0x3+0x1*0x2069+-0x47*-0x2,0x1217*0x1+0x5*-0x20a+-0x7e1)['join'](_0x226e33[_0x5d1fa5(0x8d3)])),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};else{var _0xa19947=_0x572588[_0x5d1fa5(0xdd9)];if(!_0xa19947||!_0xa19947[_0x5d1fa5(0x754)])return;_0x28a1b4['pos']?(_0xa19947[_0x5d1fa5(0x754)][_0x5d1fa5(0xc2d)]=_0x29f0f8['svWKa'](_0x4e145f[_0x5d1fa5(0x5e9)]['x'],'px'),_0xa19947[_0x5d1fa5(0x754)]['top']=_0x29f0f8[_0x5d1fa5(0xb23)](_0x4952e7[_0x5d1fa5(0x5e9)]['y'],'px'),_0xa19947['style']['right']=_0x5d1fa5(0xd66),_0xa19947['style'][_0x5d1fa5(0xb22)+'m']=_0x5d1fa5(0xd66)):(_0xa19947[_0x5d1fa5(0x754)]['left']=_0x29f0f8[_0x5d1fa5(0x9eb)],_0xa19947['style'][_0x5d1fa5(0x6d7)]=_0x29f0f8['rwRda'],_0xa19947[_0x5d1fa5(0x754)]['right']=_0x5d1fa5(0xa0e),_0xa19947['style'][_0x5d1fa5(0xb22)+'m']=_0x5d1fa5(0xa0e));}}}function _0x51e6ed(){var _0x1ac7b2=_0x19bc25,_0xfca906=_0x1cbdf6[_0x1ac7b2(0x8b9)+_0x1ac7b2(0x2ee)+'ler'];if(!_0xfca906||!_0xfca906['ptr'])return null;var _0x566a1e=_0x578547[_0x1ac7b2(0x8b9)+_0x1ac7b2(0x2ee)+_0x1ac7b2(0x4bb)]||[],_0x520a19=[];for(var _0x541400=-0x11fc+-0x77f*0x2+0x20fa;_0x226e33['SrLkL'](_0x541400,_0x566a1e[_0x1ac7b2(0xe2a)+'h']);_0x541400++){if(_0x566a1e[_0x541400][-0x1*-0xf8b+-0x21ea+0x1260]!=='v3')continue;var _0x58dabe=_0x3fd86d(_0xfca906[_0x1ac7b2(0x5cd)],_0x566a1e[_0x541400][-0x1f01+-0x3b*-0x9d+-0x52e],0x124*-0x21+-0x252b+0x7a*0x9d);if(_0x58dabe)_0x520a19['push']({'o':'0x'+_0x566a1e[_0x541400][-0x139a+0x461*-0x1+0x17fb]['toStr'+_0x1ac7b2(0x35f)](-0x685+-0x36d*-0x9+-0x184*0x10),'v':_0x58dabe});}var _0x52d71c=_0x226e33['ECJMx'](_0x31911d,_0x520a19,null,_0x54833f);if(!_0x52d71c['pos'])return null;_0x54833f=_0x52d71c[_0x1ac7b2(0xc71)]?{'o':_0x52d71c[_0x1ac7b2(0xc71)]}:null;var _0x529543=_0x52d71c[_0x1ac7b2(0x5e9)];return{'ptr':_0xfca906[_0x1ac7b2(0x5cd)],'feet':_0x529543,'posAt':_0x52d71c['posAt'],'candidates':_0x52d71c[_0x1ac7b2(0xa15)+'dates'],'cluster':_0x52d71c['clust'+'er'],'copies':_0x520a19['filte'+'r'](function(_0x547f5d){return _0x547f5d['v'][-0x4d9*0x2+-0x2709+0x30bb]===_0x529543[-0x1*-0x2231+-0x21a1+0x48*-0x2]&&_0x547f5d['v'][-0x1e86+0x20cc+-0x245]===_0x529543[0x71*0xe+0x4d*-0x3b+0xb92]&&_0x547f5d['v'][-0x2588+-0x3a9+0x2933]===_0x529543[0x88d*0x3+-0x19b*-0xd+-0x2e84*0x1];})[_0x1ac7b2(0x7d5)](function(_0x1451fa){return _0x1451fa['o'];}),'eye':[_0x529543[0x22ca+0x26f6+-0x3b*0x140],_0x226e33[_0x1ac7b2(0x564)](_0x529543[-0x133e+-0x8*0x3b3+-0x30d7*-0x1],_0x14d89b),_0x529543[-0x145c+0x2e*-0xc7+0x3820]],'reach':_0x52d71c[_0x1ac7b2(0xdfa)],'pitch':_0x226e33[_0x1ac7b2(0x271)](_0x3fa609,_0x226e33['OcgPD'](_0xfca906['ptr'],-0x405+-0xd01+0x1272),'f32'),'yaw':_0x3fa609(_0xfca906[_0x1ac7b2(0x5cd)]+(0xe4b+-0x38e*0x6+0x879),_0x226e33[_0x1ac7b2(0xa41)])};}function _0x175e61(){var _0x30cafd=_0x19bc25,_0x26633b={'hxSfk':function(_0x3920a6){return _0x226e33['QISzj'](_0x3920a6);},'KmiDk':function(_0x24f59d,_0x4db211){return _0x226e33['jkhDb'](_0x24f59d,_0x4db211);},'Fealf':function(_0x2a9560,_0x4332bd){return _0x226e33['cIKbJ'](_0x2a9560,_0x4332bd);}},_0x48d611=_0x51e6ed(),_0x50d65c=[],_0x1b94b0=_0xb9bf83[_0x30cafd(0xc85)+'nNetw'+_0x30cafd(0xcfb)+'nc']||{},_0x101dd0=Object[_0x30cafd(0x68a)](_0x1b94b0);for(var _0x4da343=0x72e*0x2+-0x10e5*0x1+0x289;_0x4da343<_0x101dd0['lengt'+'h']&&_0x4da343<-0x1*-0x485+-0x2*-0x1207+-0x2873;_0x4da343++){if(_0x30cafd(0x6b5)!==_0x30cafd(0x616)){var _0x2e8e21=_0x1b94b0[_0x101dd0[_0x4da343]],_0x44997a=[],_0x430cbc=_0x578547[_0x30cafd(0xc85)+_0x30cafd(0x5bc)+_0x30cafd(0xcfb)+'nc']||[];for(var _0x4ca8fb=0x37*-0x67+-0xbaa+-0xd3*-0x29;_0x226e33[_0x30cafd(0x845)](_0x4ca8fb,_0x430cbc[_0x30cafd(0xe2a)+'h']);_0x4ca8fb++){if(_0x226e33['hRnkl']===_0x30cafd(0x409)){if(_0x226e33['dqpda'](_0x430cbc[_0x4ca8fb][0x859*0x2+0x57e+-0x162f],'v3'))continue;var _0x46246e=_0x3fd86d(_0x2e8e21[_0x30cafd(0x5cd)],_0x430cbc[_0x4ca8fb][0x24ea+0x25*0x15+-0x27f3],-0x909+0x1eab*0x1+0x453*-0x5);if(_0x46246e)_0x44997a[_0x30cafd(0x822)]({'o':'0x'+_0x430cbc[_0x4ca8fb][-0x1386+-0x1ce4+0x306a]['toStr'+_0x30cafd(0x35f)](-0x311*0xb+-0x9*-0x321+0x5a2),'v':_0x46246e});}else{_0x26633b[_0x30cafd(0xae3)](_0x13afd9);return;}}var _0x19bfe5=_0x31911d(_0x44997a,_0x48d611?_0x48d611[_0x30cafd(0x832)][-0x2*-0xa36+-0x9*-0x20f+0x1*-0x26f2]:null,_0x3a553c[_0x101dd0[_0x4da343]]);_0x3a553c[_0x101dd0[_0x4da343]]=_0x19bfe5['posAt']?{'o':_0x19bfe5[_0x30cafd(0xc71)]}:null;var _0x3a77c2=_0x19bfe5['pos'];if(!_0x3a77c2)continue;var _0x2c6eda={'ptr':_0x2e8e21['ptr'],'x':_0x3a77c2[-0x1f39+0xb22+0x8b*0x25],'y':_0x3a77c2[0x8a7*-0x1+0x26a9+0x1e01*-0x1],'z':_0x3a77c2[-0xad*-0x2e+0x25c3+-0x44d7],'posAt':_0x19bfe5[_0x30cafd(0xc71)],'candidates':_0x19bfe5[_0x30cafd(0xa15)+'dates'],'cluster':_0x19bfe5['clust'+'er'],'team':_0x226e33[_0x30cafd(0x5dd)](_0x3fa609,_0x226e33['VVtzj'](_0x2e8e21[_0x30cafd(0x5cd)],-0x17b*0xb+-0xb8d+0x1c2e),_0x30cafd(0x8fd)),'localFlag':_0x226e33['blwPk'](_0x3fa609,_0x2e8e21['ptr']+(0x17e5+-0x151*0x1+-0x4*0x586),'i32')};if(_0x48d611){if(_0x226e33['dRaXG']===_0x226e33[_0x30cafd(0x4fd)])try{var _0x22b670=_0x59f492[_0x30cafd(0xbc5)+'em'](_0xa325);if(!_0x22b670)return;var _0x2e5b1d=_0x532368['parse'](_0x22b670);if(_0x2e5b1d&&typeof _0x2e5b1d['x']===_0x30cafd(0x791)+'r'&&_0x226e33['ezhoU'](typeof _0x2e5b1d['y'],_0x226e33[_0x30cafd(0x944)]))_0x3d70a1['pos']=_0x2e5b1d;}catch(_0x377c33){}else{var _0x121eaa=_0x3a77c2[0xdc8+0x65*0x44+0x1c4*-0x17]-_0x48d611['feet'][0x1db8+-0x1025+-0xd93],_0xd61b14=_0x3a77c2[0x15a4+0x26bb+-0x3c5d]-_0x48d611['feet'][-0x53*-0x6d+0x447+-0x41*0x9c];_0x2c6eda['d']=Math['sqrt'](_0x121eaa*_0x121eaa+_0xd61b14*_0xd61b14),_0x2c6eda['beari'+'ng']=_0x226e33[_0x30cafd(0x1e9)](Math['atan2'](_0x121eaa,_0xd61b14)*(-0x2505*0x1+-0x132b+0x4*0xe39),Math['PI']);}}_0x50d65c[_0x30cafd(0x822)](_0x2c6eda);}else{var _0x269622=_0x1c8f0d[_0x584b0f]['xyz']||[_0x395b44[_0xcf3b25]['v'],0x269b+-0x101d+-0x2*0xb3f,-0xbc2+-0x1a8a+0x264c];return _0x269622[_0x30cafd(0x7d5)](function(_0x2ea34f){var _0xf829a=_0x30cafd;return _0x26633b['KmiDk'](_0xb5590b['round'](_0x26633b[_0xf829a(0x39d)](_0x2ea34f,0x5*0x4f3+0x22d4+-0x3b2f)),0xfe*-0x1a+-0x20b*-0xb+-0x1*-0x3b7);})['join']('\x20\x20');}}return{'me':_0x48d611,'list':_0x50d65c};}var _0xae8966=null;function _0x488bfb(){var _0x1fd25d=_0x19bc25,_0x1220b4={'PXpNx':_0x226e33[_0x1fd25d(0x6b3)]};if(_0xae8966)return _0xae8966;try{if(!document['body']||!document[_0x1fd25d(0x649)]['appen'+_0x1fd25d(0xd13)+'d'])return null;var _0x1ea9d9=document[_0x1fd25d(0xe0f)+_0x1fd25d(0xaaa)+'ent'](_0x226e33['YtoQB']);_0x1ea9d9['id']=_0x1fd25d(0xce2)+'a-esp',_0x1ea9d9[_0x1fd25d(0x754)][_0x1fd25d(0x940)+'xt']=_0x226e33[_0x1fd25d(0x692)](_0x1fd25d(0x2fb)+_0x1fd25d(0x6e4)+_0x1fd25d(0x4cc)+_0x1fd25d(0x2a9)+':12px'+_0x1fd25d(0x419)+_0x1fd25d(0xbe5)+'z-ind'+_0x1fd25d(0xd74)+'47483'+'646;p'+_0x1fd25d(0xaf0)+'r-eve'+'nts:n'+_0x1fd25d(0x2d5),'backg'+_0x1fd25d(0xdd2)+':rgba'+_0x1fd25d(0xd23)+'2,29,'+_0x1fd25d(0x28f)+'borde'+_0x1fd25d(0x728)+'\x20soli'+'d\x20rgb'+_0x1fd25d(0x902)+_0x1fd25d(0x4e2)+'177,.'+'4);bo'+_0x1fd25d(0x4d4)+'radiu'+_0x1fd25d(0x457)+'x;')+_0x226e33[_0x1fd25d(0x358)]+(_0x1fd25d(0x32b)+_0x1fd25d(0x523)+'t:non'+'e;-we'+'bkit-'+_0x1fd25d(0x32b)+_0x1fd25d(0x523)+'t:non'+'e;'),_0x1ea9d9[_0x1fd25d(0xc24)+_0x1fd25d(0x976)]=_0x226e33['YcYbL'](_0x226e33[_0x1fd25d(0x50c)],_0x226e33['njaCW']);var _0x58d6cd={'cv':{'getContext':function(){var _0xebd260=_0x1fd25d;return'REQTD'!==_0x1220b4['PXpNx']?_0x242c49[_0xebd260(0xb33)]===_0x328241:null;}},'el':_0x1ea9d9};document[_0x1fd25d(0x649)]['appen'+'dChil'+'d'](_0x1ea9d9),_0xae8966={'el':_0x1ea9d9,'cv':_0x1ea9d9['query'+_0x1fd25d(0x42a)+_0x1fd25d(0xa65)]('#saku'+_0x1fd25d(0x5e3)+_0x1fd25d(0x698)),'lg':_0x1ea9d9['query'+_0x1fd25d(0x42a)+'tor']('#saku'+'ra-es'+_0x1fd25d(0x9f0))};if(!_0xae8966['cv']||!_0xae8966['cv']['getCo'+_0x1fd25d(0xa49)])_0xae8966=_0x58d6cd;return _0xae8966;}catch(_0x588195){if(_0x226e33['ezhoU'](_0x226e33['VQxii'],'HLtNS')){var _0x1e1773=_0x122977[_0x1fd25d(0x20e)+'WebMo'+_0x1fd25d(0x313)]&&_0x355b18[_0x1fd25d(0x20e)+'WebMo'+'dkit'][_0x1fd25d(0x425)+'me'];_0x3876d8[_0x1fd25d(0x89b)]=_0x1e1773&&_0x1e1773[_0x1fd25d(0xc20)+_0x1fd25d(0x699)+'g']||null,_0x2186ca['tagMa'+'tches']=!!(_0x1e1773&&_0x26bdd4&&_0x1e1773[_0x1fd25d(0xc20)+_0x1fd25d(0x699)+'g']===_0x30e762),_0x3b9823['runti'+_0x1fd25d(0xa9b)+'e']=_0x1e1773&&_0x1e1773[_0x1fd25d(0xdc4)]?typeof _0x1e1773['_game']:'none',_0x18e41a[_0x1fd25d(0xd7d)+'nRunt'+_0x1fd25d(0x39e)+_0x1fd25d(0xd89)+'ted']=!!(_0x511a0c&&_0x5a5986['_runt'+_0x1fd25d(0xd5f)]&&_0x530542['_runt'+_0x1fd25d(0xd5f)]===_0x1e1773),_0x5c90cc[_0x1fd25d(0xd7d)+'nRunt'+_0x1fd25d(0x4c7)+'me']=_0x307a95&&_0x6566d8['_runt'+'ime']&&_0x1b40f1[_0x1fd25d(0x272)+_0x1fd25d(0xd5f)][_0x1fd25d(0xdc4)]?typeof _0x55c34a[_0x1fd25d(0x272)+'ime']['_game']:'none';}else return null;}}var _0x4284ac=null;function _0x5ca449(){var _0x14432a=_0x19bc25;if(_0x4284ac)return _0x4284ac;try{if('SIIpK'!==_0x14432a(0xdf0)){if(!document[_0x14432a(0x649)]||!document[_0x14432a(0x649)][_0x14432a(0x55e)+_0x14432a(0xd13)+'d'])return null;var _0x40c2f5=document['creat'+'eElem'+_0x14432a(0xc6a)]('canva'+'s');return _0x40c2f5['id']=_0x226e33[_0x14432a(0x489)],_0x40c2f5[_0x14432a(0x754)][_0x14432a(0x940)+'xt']=_0x14432a(0x2fb)+'ion:f'+_0x14432a(0x4cc)+'left:'+_0x14432a(0x62b)+':0;z-'+_0x14432a(0x724)+_0x14432a(0x952)+'48364'+_0x14432a(0xccb)+'nter-'+'event'+'s:non'+'e;',document[_0x14432a(0x649)][_0x14432a(0x55e)+_0x14432a(0xd13)+'d'](_0x40c2f5),_0x4284ac={'cv':_0x40c2f5},_0x4284ac;}else return _0x2c66ea[_0x14432a(0x5fc)+'d']++,_0xc53d6e['lastE'+_0x14432a(0x2e6)]=_0x342394['lastE'+_0x14432a(0x2e6)]||_0x14432a(0xb3d)+_0x14432a(0x73e)+_0x14432a(0x914)+_0x14432a(0x1eb)+'stanc'+_0x14432a(0x38d)+_0x14432a(0xb76)+'hable'+'\x20via\x20'+_0x14432a(0x425)+'me.re'+'solve'+_0x14432a(0x6c1)+_0x14432a(0x214)+_0x14432a(0x47e)+'indow'+_0x14432a(0x923)+'al',_0x3eb748;}catch(_0x1ecf07){return _0x226e33['dIdAy'](_0x14432a(0xe8e),'FSzEr')?null:(_0x2c1611['sourc'+'e']=_0x226e33['Jrkuw'],_0x3bef2c);}}function _0x3a797a(_0x5ad3dc){var _0x213d09=_0x19bc25,_0xb110df={'Ypoxj':function(_0x31e6ac){return _0x31e6ac();},'VgnOK':function(_0x539584,_0x1d2a1d){return _0x539584(_0x1d2a1d);},'LWOfo':function(_0x17875f,_0x34c509){return _0x17875f+_0x34c509;},'qewJy':_0x213d09(0x280)+':'};try{if(_0x226e33[_0x213d09(0x442)](_0x226e33[_0x213d09(0xa70)],_0x213d09(0x1d3))){var _0x1b8552=_0xb110df[_0x213d09(0x391)](_0x2869eb);if(!_0x1b8552)return _0x270ca3;if(_0x1b8552['datas'+'et']['api'])return _0x1b8552['api'];try{return _0xb110df['VgnOK'](_0x3baf7e,_0x1b8552);}catch(_0x2a07a5){return _0x1b8552['datas'+'et'][_0x213d09(0x676)]='1',_0x1b8552[_0x213d09(0x676)]=_0x151b0b,_0x517ef2[_0x213d09(0x301)](_0x213d09(0xe5d)+_0x213d09(0xcfa)+_0x213d09(0x337)+_0x213d09(0x27b)+_0x213d09(0xe2d),_0xb110df[_0x213d09(0xb63)](_0xb110df['qewJy'],_0xc6893f),_0x2a07a5),_0x2ebe1a;}}else{var _0x2c74f9=Math['max'](-0x1ddc+-0x26df*-0x1+0x2*-0x481,window[_0x213d09(0xc24)+_0x213d09(0xe7b)]||document[_0x213d09(0x1f8)+_0x213d09(0x60d)+'ement'][_0x213d09(0x367)+_0x213d09(0x87d)+'h']||0x104*-0x9+0xee*0x7+0x2a2),_0x2a663d=Math['max'](-0x79b+0x771+0x1*0x2b,window['inner'+_0x213d09(0x6e3)+'t']||document[_0x213d09(0x1f8)+_0x213d09(0x60d)+'ement']['clien'+'tHeig'+'ht']||-0x7*-0x137+-0x71c+-0x165*0x1);return(_0x226e33[_0x213d09(0x468)](_0x5ad3dc['cv']['width'],_0x2c74f9)||_0x226e33['iMuXD'](_0x5ad3dc['cv'][_0x213d09(0x83a)+'t'],_0x2a663d))&&(_0x5ad3dc['cv']['width']=_0x2c74f9,_0x5ad3dc['cv'][_0x213d09(0x83a)+'t']=_0x2a663d),{'w':_0x2c74f9,'h':_0x2a663d};}}catch(_0x50b099){return{'w':0x0,'h':0x0};}}function _0x405d75(){var _0xeffbe4=_0x19bc25,_0xf7e2f0={'eLXPA':_0x226e33[_0xeffbe4(0xa79)],'PQEXQ':function(_0x1bc05d,_0x3bcba5,_0x57b6f2){return _0x1bc05d(_0x3bcba5,_0x57b6f2);}};if(_0xeffbe4(0x852)===_0x226e33[_0xeffbe4(0xe79)]){var _0x39d6d5={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0x39d6d5['canva'+'s']={'w':_0x4284ac&&_0x4284ac['cv']?_0x4284ac['cv'][_0xeffbe4(0xb41)]:0x19f0+0x157*0xf+-0x2e09,'h':_0x4284ac&&_0x4284ac['cv']?_0x4284ac['cv']['heigh'+'t']:-0x142b+-0x109b+-0x416*-0x9,'innerW':window[_0xeffbe4(0xc24)+_0xeffbe4(0xe7b)],'innerH':window['inner'+'Heigh'+'t'],'dpr':window[_0xeffbe4(0xcc9)+_0xeffbe4(0xe67)+'lRati'+'o']||0x2*0xff3+0x8c6*-0x4+0x111*0x3};}catch(_0x47a071){}var _0x54ca7f=_0x175e61();if(!_0x54ca7f||!_0x54ca7f['me'])return _0x39d6d5;var _0x29a959=_0x39d6d5[_0xeffbe4(0x61f)+'s']['w']||-0x197d+-0x1e36+0x1*0x3b9b,_0x1387c0=_0x39d6d5[_0xeffbe4(0x61f)+'s']['h']||0x7fb+-0x73+0x4*-0xe8,_0x2d9dfe=_0x226e33['CfezK'](_0x29a959,_0x1387c0),_0x10f0c6=Math[_0xeffbe4(0x52a)](_0x226e33[_0xeffbe4(0x1e9)](_0x14e22e['fov']*Math['PI']/(0x258f+0x2658+-0x4b33),0x749*0x1+-0x4*0x427+0x955)),_0x59ccaa=_0x2ed33f(),_0x284b3e=_0x59ccaa[_0xeffbe4(0x9a2)];for(var _0x34802c=-0x1c4a+-0x6e5*0x4+0x37de*0x1;_0x34802c<_0x54ca7f['list']['lengt'+'h']&&_0x226e33['VKRoO'](_0x34802c,-0x210e+0x1bd+0x1f59);_0x34802c++){var _0x341e50=_0x54ca7f[_0xeffbe4(0xc8e)][_0x34802c];if(_0x226e33['BvMxa'](typeof _0x341e50['d'],'numbe'+'r')||_0x226e33[_0xeffbe4(0x258)](_0x341e50['d'],-0x1*0xc8+-0x2a+-0xf2*-0x1+0.5))continue;var _0x3b7661=_0x226e33[_0xeffbe4(0x44f)](_0x1848b9,_0x54ca7f['me'][_0xeffbe4(0xb84)],[_0x341e50['x'],_0x341e50['y'],_0x341e50['z']],_0x29a959,_0x1387c0);if(!_0x3b7661)continue;var _0x45b764=_0x226e33[_0xeffbe4(0x54a)](_0x226e33['EKUoJ'](_0x3b7661['x'],_0x29a959)-(-0x3*0x6ee+-0x4b0+0xcbd*0x2+0.5),-0x5da+0xcf7+0x6b*-0x11),_0x4ed7f8=null;if(_0x284b3e&&_0x59ccaa[_0xeffbe4(0x5e9)]){var _0x847686=_0x284b3e[_0xeffbe4(0x748)],_0x528b2f=_0x284b3e['right'],_0x1b5202=_0x226e33['vsjTk'](_0x341e50['x'],_0x59ccaa[_0xeffbe4(0x5e9)][0xd*-0x6a+-0x9e2+-0x7a2*-0x2]),_0x5d67f3=_0x341e50['y']-_0x59ccaa[_0xeffbe4(0x5e9)][-0x22*0x108+0x122c*-0x1+0x289*0x15],_0x5d590b=_0x226e33[_0xeffbe4(0x2e9)](_0x341e50['z'],_0x59ccaa[_0xeffbe4(0x5e9)][0xfc4*-0x2+-0x12*-0xb1+0x1318]),_0x5abae3=_0x226e33[_0xeffbe4(0x77c)](_0x226e33[_0xeffbe4(0x7c8)](_0x1b5202,_0x847686[0x1b*-0x15f+0x4a*-0x57+0xc6f*0x5]),_0x226e33['pAiGw'](_0x5d67f3,_0x847686[-0x63e+-0x1354+0x1*0x1993]))+_0x5d590b*_0x847686[-0x2*-0xfd8+-0x4b5+-0x1af9],_0x2a2fe7=_0x226e33['zYzQV'](_0x1b5202*_0x528b2f[0x986+0xb6c+0xa79*-0x2],_0x5d67f3*_0x528b2f[0x1aee+-0x1*0xdaf+0x3*-0x46a])+_0x5d590b*_0x528b2f[0x1cbd+0x3*0x8d5+-0x373a];if(_0x5abae3>0x901+-0x13d6+0xad5+0.5)_0x4ed7f8=_0x226e33[_0xeffbe4(0x5a3)](_0x2a2fe7/_0x5abae3,_0x10f0c6*_0x2d9dfe);}else _0x226e33[_0xeffbe4(0xe42)](typeof _0x341e50[_0xeffbe4(0x7ae)+'ng'],_0x226e33[_0xeffbe4(0x944)])&&(_0x4ed7f8=Math[_0xeffbe4(0x52a)](_0x341e50['beari'+'ng']*Math['PI']/(0x30a+-0x45*0x1d+0x57b))/(_0x10f0c6*_0x2d9dfe));if(_0x4ed7f8===null)continue;if(Math[_0xeffbe4(0x5f5)](_0x4ed7f8)>0x1022+-0xfe0+0x2*-0x21+0.8)continue;var _0x51e70a=_0x226e33['wzThg'](_0x45b764,_0x4ed7f8);_0x39d6d5['rows'][_0xeffbe4(0x822)]({'d':Math[_0xeffbe4(0xdd2)](_0x341e50['d']),'bearing':Math[_0xeffbe4(0xdd2)](_0x341e50['beari'+'ng']),'at':Math[_0xeffbe4(0xdd2)](_0x45b764*(0x2*-0x3cb+0xf68+-0x3ea))/(0x2b*0x2b+0x1035+-0xe*0x165),'want':_0x226e33['gGUfX'](Math[_0xeffbe4(0xdd2)](_0x4ed7f8*(0x1*0x20f1+0x2483+-0x418c)),0x8dd*-0x3+-0x2079+0xf8*0x41),'off':Math[_0xeffbe4(0xdd2)](_0x51e70a*(0x12f1+0x1ef3+0x4*-0xb7f))/(-0xa5a+-0x15fb*-0x1+-0x7b9)}),_0x226e33['Gtwwi'](Math[_0xeffbe4(0x5f5)](_0x51e70a),Math['abs'](_0x39d6d5['worst'+'Delta']))&&(_0x39d6d5[_0xeffbe4(0x31f)+_0xeffbe4(0x8d2)]=_0x226e33['EKUoJ'](Math['round'](_0x51e70a*(0x77e+0x249*-0x10+-0x57f*-0x6)),0x4c*0x46+-0xc1*-0x19+-0x5*0x725),_0x39d6d5[_0xeffbe4(0x31f)+'Beari'+'ng']=Math['round'](_0x341e50[_0xeffbe4(0x7ae)+'ng']));}if(_0x59ccaa['pos']&&_0x59ccaa['basis']&&_0x59ccaa[_0xeffbe4(0xb6b)]){var _0x31435d=_0x59ccaa[_0xeffbe4(0x9a2)][_0xeffbe4(0x748)];if(_0x226e33[_0xeffbe4(0xb49)](Math[_0xeffbe4(0x5f5)](_0x31435d[-0x1c*-0x109+0x1f56*-0x1+0x25b]),-0xe*0xa3+0x16fa+-0xe10+0.01)){if(_0x226e33[_0xeffbe4(0xd86)]('yXQXR',_0xeffbe4(0x6c2))){var _0x223743=-0x2690+-0x103*-0x8+0x30c*0xa;for(var _0x490eb9=0x7*-0x111+0xf*-0x207+-0x650*-0x6;_0x490eb9<_0x2b4bc9[_0xeffbe4(0xe2a)+'h'];_0x490eb9++){if(_0x121e63[_0x490eb9][_0xeffbe4(0xc0c)]&&_0x3593e9[_0x490eb9][_0xeffbe4(0xc0c)][_0xeffbe4(0xb2a)+_0xeffbe4(0xc8c)]!==_0x287e86)_0x223743++;}return _0x223743;}else{var _0x86aab6=Math['tan'](_0x226e33[_0xeffbe4(0x1c5)](_0x226e33[_0xeffbe4(0xcad)](_0x59ccaa[_0xeffbe4(0xb6b)],Math['PI']),-0x1f22+0x1e*-0x31+0x2594)/(-0x1f4d+-0x6e9+0x2638)),_0x179320=-0x217e+0x20ff+-0x1*-0x89,_0x15226a=0x9f*-0x4+0x73a*0x5+-0x21a5,_0x52920e=[_0x226e33[_0xeffbe4(0x94f)](_0x59ccaa[_0xeffbe4(0x5e9)][0x3*0x6be+0x1*0x7f1+0x1c2b*-0x1],_0x31435d[-0x1134+-0x1831*0x1+0x2965]*_0x179320),_0x59ccaa[_0xeffbe4(0x5e9)][-0x160+0x24d6+-0x2375]+_0x31435d[-0x95*0x11+-0xaa1+-0x5*-0x41b]*_0x179320+_0x15226a,_0x59ccaa[_0xeffbe4(0x5e9)][-0x1e6d+-0x737*0x1+0x25a6]+_0x226e33[_0xeffbe4(0x532)](_0x31435d[-0x64+-0x40*0x8b+0x2326],_0x179320)],_0x292cbc=_0x1848b9(_0x59ccaa['pos'],_0x52920e,_0x29a959,_0x39d6d5['canva'+'s']['h']);if(_0x292cbc){var _0xf087b=_0x226e33[_0xeffbe4(0x497)](0xb30*-0x3+-0x11fa+-0x112e*-0x3+0.5-_0x292cbc['y']/_0x39d6d5['canva'+'s']['h'],0x1c27+-0x1435+-0x7f0),_0xa28a1=_0x226e33[_0xeffbe4(0xe6c)](_0x15226a/_0x179320,_0x86aab6);_0x39d6d5['verti'+_0xeffbe4(0x8cb)]={'got':_0x226e33['GROXg'](Math[_0xeffbe4(0xdd2)](_0xf087b*(-0xb8*0x19+0x8b8+0xd28*0x1)),-0x24f1+-0xe59+0x9*0x622),'want':Math['round'](_0x226e33[_0xeffbe4(0x70f)](_0xa28a1,-0xa6+-0x176+0x604))/(-0x1*0x16d9+-0x61*-0x2+0x19ff),'off':Math['round']((_0xf087b-_0xa28a1)*(0x2*0xacf+0x2*-0x104a+0xede*0x1))/(0x1*0xa2d+0x15*0x85+-0x5ba*0x3)};}}}}return _0x39d6d5;}else _0x41ad2d['hookP'+_0xeffbe4(0x55f)]({'typeName':_0xf7e2f0[_0xeffbe4(0xa67)],'methodName':_0x345b19['name'],'params':_0x278f73[_0xeffbe4(0xea2)+_0xeffbe4(0x40b)],'returnType':_0x256529},_0xf7e2f0[_0xeffbe4(0x5bf)](_0x111e93,_0xeffbe4(0x935),_0x3f8f57['name']));}var _0x4cf942=0xc28+-0x2121+0x14fa+0.75,_0x380d31=0x177d+-0x1853*-0x1+-0x2fd0+0.25,_0x338220=0x5*-0x443+-0x1f7c+-0x5*-0xa8f+0.42;function _0x2c86b2(_0xe66338){var _0x489931=_0x19bc25,_0x1a74e1=_0x4284ac;if(!_0x1a74e1)return;var _0x66f30b=_0x1a74e1['cv'][_0x489931(0x46f)+'ntext']&&_0x1a74e1['cv'][_0x489931(0x46f)+'ntext']('2d');if(!_0x66f30b)return;var _0xe0af08=_0x3a797a(_0x1a74e1);_0x66f30b[_0x489931(0x2ec)+_0x489931(0xe60)](-0x23a3+-0x1905+0x1438*0x3,-0x179b*-0x1+-0x1*0x6f7+-0x10a4,_0xe0af08['w'],_0xe0af08['h']);if(!_0x248249[_0x489931(0x554)]||!_0xe66338||!_0xe66338['me'])return;var _0x23b8cf=_0xe66338['me'],_0x5dd9ac=null,_0x3c56b4=_0xb9bf83['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x4b822a=Object['keys'](_0x3c56b4);for(var _0xf7224=0x71*-0x41+0x1476+-0x31*-0x2b;_0x226e33['TVSpV'](_0xf7224,_0x4b822a[_0x489931(0xe2a)+'h']);_0xf7224++){var _0x2b81a6=_0x3fd86d(_0x3c56b4[_0x4b822a[_0xf7224]]['ptr'],-0x34*0x6a+-0x16*-0x182+-0xb70,-0xa9*-0x14+-0x2b3*-0xd+-0x3048);if(_0x2b81a6&&_0x226e33[_0x489931(0xb65)](_0x2b81a6[0x83c+-0x8e0*0x1+0xa4],0xb*0x197+-0x23f2+-0x13b*-0xf)&&_0x2b81a6[-0xe17+0x2371+-0x1559]===0x1*-0x8c1+0x6f5+0x1cc&&_0x226e33[_0x489931(0x294)](_0x2b81a6[0xb03*0x1+0xd7*-0x17+0x1c*0x4c],0x249d+0xcc9+-0x3166)){_0x5dd9ac=_0x226e33['jTEBA'](_0x3fa609,_0x3c56b4[_0x4b822a[_0xf7224]][_0x489931(0x5cd)]+(-0x20bd+-0x714+0x2829*0x1),'i32');break;}}for(var _0x3e77e6=-0x2025+0x656+-0x1*-0x19cf;_0x226e33[_0x489931(0xc06)](_0x3e77e6,_0xe66338[_0x489931(0xc8e)][_0x489931(0xe2a)+'h']);_0x3e77e6++){var _0x4f769e=_0xe66338['list'][_0x3e77e6],_0x4cfbb5=_0x5dd9ac!==null&&_0x4f769e['team']===_0x5dd9ac,_0x9da5a3=_0x1848b9(_0x23b8cf[_0x489931(0xb84)],[_0x4f769e['x'],_0x4f769e['y']-_0x380d31,_0x4f769e['z']],_0xe0af08['w'],_0xe0af08['h']),_0x493445=_0x226e33[_0x489931(0x44f)](_0x1848b9,_0x23b8cf['eye'],[_0x4f769e['x'],_0x4f769e['y']+_0x4cf942,_0x4f769e['z']],_0xe0af08['w'],_0xe0af08['h']);if(!_0x9da5a3||!_0x493445)continue;var _0x2dc298=Math['abs'](_0x493445['y']-_0x9da5a3['y']);if(!_0x226e33['ZiEHu'](_0x2dc298,0x1*0x1274+-0xbc*0x9+-0x8*0x17b))continue;var _0x2ddc12=Math['max'](0x13ff*0x1+-0x3da*-0x6+0x2b19*-0x1,Math[_0x489931(0x5af)](-0x1*-0xdd8+0x3a*0x6+0x2*-0x76d,_0x2dc298*_0x338220));if(_0x2dc298>-0x1*-0x1069+-0x1750+0x88b)continue;var _0x51ebbb=_0x226e33[_0x489931(0xc9b)](_0x9da5a3['x']+_0x493445['x'],-0x1273+-0x112e+0x3*0xbe1),_0x599561=_0x226e33[_0x489931(0x796)](_0x226e33[_0x489931(0x8a8)](_0x9da5a3['y'],_0x493445['y']),-0x4a7*-0x2+0x422*-0x1+-0x52a);_0x66f30b[_0x489931(0xa20)+_0x489931(0x98c)+'e']=_0x4cfbb5?'rgba('+_0x489931(0x439)+_0x489931(0x2a1)+_0x489931(0x751):'rgba('+_0x489931(0xb8d)+'10,11'+'6,.95'+')',_0x66f30b[_0x489931(0xcb1)+_0x489931(0xdab)]=_0x4cfbb5?0x1*-0x20c9+-0x12d9+-0x1*-0x33a3:0x1*0x1f40+-0x4*0x395+-0x362*0x5,_0x66f30b[_0x489931(0xa20)+'eRect'](_0x51ebbb-_0x2ddc12/(0x16*-0x9b+-0x127*-0x6+0x1*0x66a),_0x226e33[_0x489931(0x2e9)](_0x599561,_0x2dc298/(0x4f*0xe+0x2427+-0x2877)),_0x2ddc12,_0x2dc298);if(!_0x4cfbb5){if(_0x226e33[_0x489931(0x5b7)]!=='ytlrF'){if(_0x24bf8a)_0x29ac45[_0x489931(0x2b4)+'onten'+'t']=(_0x4a4460(_0xfa4548[_0x489931(0x6ff)])||0x2*0x1223+0xa2a+0x1*-0x2e6f)[_0x489931(0xa0d)+'ed'](-0x8*0x24b+-0x6*0x143+0x52f*0x5)+'x';_0x226e33['rBxnr'](_0x43b09b);}else _0x66f30b['fillS'+_0x489931(0xc18)]='rgba('+'255,1'+_0x489931(0x8ff)+_0x489931(0x4c6)+')',_0x66f30b['font']=_0x489931(0xd75)+_0x489931(0x287)+_0x489931(0xdd8)+'ce,Co'+'nsola'+_0x489931(0x6a6)+'ospac'+'e',_0x66f30b[_0x489931(0x1de)+'ext'](_0x226e33['GJYhA'](Math['round'](_0x4f769e['d']||0x238*-0x3+-0x21dc+0x2884),'m'),_0x226e33[_0x489931(0xa2c)](_0x51ebbb,_0x226e33['ynLVl'](_0x2ddc12,0x1cdc+-0x19cf+-0x30b)),_0x226e33['NMeVK'](_0x599561-_0x2dc298/(-0x7bf+0x13f6+-0x19*0x7d),-0xb1a+0x239*-0xb+-0x2390*-0x1));}}}function _0x4cec62(){var _0x3abf55=_0x19bc25,_0x26b3ad=_0x488bfb();if(!_0x26b3ad||!_0x26b3ad['cv'])return;try{var _0x472268=_0x26b3ad['cv']['getCo'+_0x3abf55(0xa49)]&&_0x26b3ad['cv']['getCo'+'ntext']('2d');if(!_0x472268)return;var _0x752c2f=_0x26b3ad['cv'][_0x3abf55(0xb41)],_0x144c2b=_0x752c2f/(-0x8b4*-0x3+-0x17ad+-0x9*0x45),_0x75b31d=_0x175e61(),_0x361454=_0x75b31d['me'];_0x472268[_0x3abf55(0x2ec)+'Rect'](0x248*0x3+-0x2*0x650+-0x14*-0x4a,-0x2c3+-0x803+0xac6*0x1,_0x752c2f,_0x752c2f),_0x472268[_0x3abf55(0xa20)+_0x3abf55(0x98c)+'e']=_0x226e33[_0x3abf55(0xae6)],_0x472268['lineW'+_0x3abf55(0xdab)]=-0x1066+-0x414+0x147b;for(var _0x4b1c11=0x176d+0x715+0x3*-0xa2b;_0x4b1c11<=0x1*0xd0f+-0x6bb*0x4+0x378*0x4;_0x4b1c11++){_0x472268[_0x3abf55(0xa97)+'Path'](),_0x472268[_0x3abf55(0x5e1)](_0x144c2b,_0x144c2b,_0x226e33['LgnFO'](_0x144c2b,-0x187a+0x1*0x1e95+-0x617)*_0x4b1c11/(0x3*0x121+-0x3cb+0x6b*0x1),0x18e*-0x19+0xe5b+-0xfb*-0x19,_0x226e33[_0x3abf55(0x3a6)](Math['PI'],-0x59*0x29+-0x1582+-0x23c5*-0x1)),_0x472268[_0x3abf55(0xa20)+'e']();}_0x472268['begin'+'Path'](),_0x472268[_0x3abf55(0x472)+'o'](0x11cb*0x2+0x8f3*0x2+-0xd5e*0x4,_0x144c2b),_0x472268[_0x3abf55(0xb14)+'o'](_0x752c2f-(-0x1f43*0x1+0xacc*0x1+0x7*0x2ed),_0x144c2b),_0x472268['moveT'+'o'](_0x144c2b,0x1f85+-0xa9c+-0x14e5),_0x472268[_0x3abf55(0xb14)+'o'](_0x144c2b,_0x752c2f-(0x21d0+-0x1c4b+-0x581*0x1)),_0x472268[_0x3abf55(0xa20)+'e']();if(!_0x361454){if(_0x26b3ad['lg'])_0x26b3ad['lg']['textC'+_0x3abf55(0x806)+'t']='';return;}var _0x3e80e7=_0x226e33[_0x3abf55(0x5d7)](_0x144c2b-(-0x2322+-0x25e+0x2586),_0x248249['span']),_0x4339a2=null,_0x47701c=_0xb9bf83['Photo'+_0x3abf55(0x5bc)+'orkSy'+'nc']||{},_0x38085d=Object[_0x3abf55(0x68a)](_0x47701c);for(var _0x32ef83=-0x22ec+-0x136f+-0x25d*-0x17;_0x32ef83<_0x38085d[_0x3abf55(0xe2a)+'h'];_0x32ef83++){if(_0x3abf55(0xc44)==='PQOij'){var _0x251e12=_0x3fd86d(_0x47701c[_0x38085d[_0x32ef83]][_0x3abf55(0x5cd)],0x1*-0x239b+0x17b3+0xc1c,-0x1*-0x1a65+-0x11b*0x1a+0x25c);if(_0x251e12&&_0x251e12[0x2656*-0x1+-0x1*0x1099+0x36ef]===-0x744+0xb5*0x25+0x12e5*-0x1&&_0x251e12[-0x46f+-0x905*0x3+0x1*0x1f7f]===-0x149c+-0x19c0+-0x204*-0x17&&_0x251e12[0x39e+0x4a9*-0x7+0x1d03]===0x127c*-0x1+-0xc1e+0x1e9a){_0x4339a2=_0x226e33['XDIGx'](_0x3fa609,_0x47701c[_0x38085d[_0x32ef83]]['ptr']+(0x11b+-0x519+0x1e*0x25),_0x226e33['ibsVA']);break;}}else{var _0x35c0c7=_0x5738c3[_0x3abf55(0x9e0)+_0x3abf55(0x802)+'e']();if(_0x35c0c7)return _0x4ecdb9[_0x3abf55(0x530)+'e']=_0x3abf55(0x425)+_0x3abf55(0xb50)+_0x3abf55(0xc09)+_0x3abf55(0x6c1)+')',_0x35c0c7;}}var _0x537552=0x9d*-0x3d+-0x2529+0x4a92;for(var _0x43f65e=0x11c3+0x1f1*0x2+-0x15a5;_0x43f65e<_0x75b31d[_0x3abf55(0xc8e)]['lengt'+'h'];_0x43f65e++){var _0x2f6858=_0x75b31d['list'][_0x43f65e],_0x3d51b9=_0x226e33['cQCTC'](_0x226e33['vqzFc'](_0x2f6858['x'],_0x361454[_0x3abf55(0x832)][-0x681+-0x16e7+0x1*0x1d68]),_0x3e80e7),_0x59aa5d=(_0x2f6858['z']-_0x361454[_0x3abf55(0x832)][0x1*0x1801+0x825+-0x2024])*_0x3e80e7,_0x4aa2bb=Math[_0x3abf55(0x9a6)](_0x226e33['VjYFr'](_0x3d51b9,_0x3d51b9)+_0x226e33[_0x3abf55(0x226)](_0x59aa5d,_0x59aa5d)),_0x2b9a0b=_0x144c2b,_0x333c28=_0x144c2b;_0x4aa2bb>_0x144c2b-(-0x1*0x2203+-0x53*-0x3b+0x2*0x774)?(_0x2b9a0b=_0x144c2b+_0x226e33[_0x3abf55(0x2f9)](_0x226e33['ZhczD'](_0x3d51b9,_0x4aa2bb),_0x144c2b-(-0x2b*0x15+-0x1eab+0x2238)),_0x333c28=_0x226e33[_0x3abf55(0x254)](_0x144c2b,_0x59aa5d/_0x4aa2bb*(_0x144c2b-(-0x161*-0xe+-0x1d33+-0x9eb*-0x1)))):(_0x2b9a0b=_0x144c2b+_0x3d51b9,_0x333c28=_0x144c2b+_0x59aa5d);var _0x288c9a=_0x226e33['qTqtS'](_0x4339a2,null)&&_0x226e33['ZOzBj'](_0x2f6858['team'],_0x4339a2);_0x472268[_0x3abf55(0xb45)+_0x3abf55(0xc18)]=_0x288c9a?_0x226e33[_0x3abf55(0x594)]:_0x226e33[_0x3abf55(0x900)],_0x472268['begin'+_0x3abf55(0xa13)](),_0x472268['arc'](_0x2b9a0b,_0x333c28,_0x288c9a?-0x2139+0x23d0+0x295*-0x1:0xb2d*0x1+-0x263b*0x1+0x1b11+0.20000000000000018,-0x1e5f+-0x1*-0x383+0x1adc,_0x226e33['AFzzT'](Math['PI'],-0x459+-0x99a+-0x3*-0x4a7)),_0x472268['fill'](),_0x537552++;}_0x472268[_0x3abf55(0xb45)+_0x3abf55(0xc18)]=_0x3abf55(0x991)+'a8',_0x472268[_0x3abf55(0xa97)+_0x3abf55(0xa13)](),_0x472268['arc'](_0x144c2b,_0x144c2b,0xc7a*-0x3+-0x805+0x1fa*0x17,-0x8*0x23b+-0x53*0x41+0x7b*0x51,Math['PI']*(-0xc57+0x1381*0x2+0xd*-0x20d)),_0x472268[_0x3abf55(0x66d)](),_0x26b3ad['lg']&&(_0x26b3ad['lg'][_0x3abf55(0x2b4)+'onten'+'t']=_0x226e33[_0x3abf55(0xe30)](_0x226e33[_0x3abf55(0x89d)](_0x226e33[_0x3abf55(0xe82)]+_0x537552+_0x3abf55(0xd52),Math['round'](_0x248249[_0x3abf55(0xe58)]))+'m',_0x248249[_0x3abf55(0x554)]?_0x226e33[_0x3abf55(0x4ab)](_0x226e33['OgRFL'](_0x226e33[_0x3abf55(0xde4)],Math[_0x3abf55(0xdd2)](_0x14e22e['fov'])),'°'):'')+(_0x4339a2!==null?_0x226e33['gDqcA'](_0x226e33['WQdAi'],_0x4339a2):''));}catch(_0x677e86){}}function _0x489393(){var _0x29145a=_0x19bc25;if(_0x226e33[_0x29145a(0xdd6)]('IoshG',_0x226e33['UYqXG']))_0x3a55b0['cv'][_0x29145a(0xb41)]=_0x482e16,_0x3804b3['cv'][_0x29145a(0x83a)+'t']=_0x1e80de;else{var _0x41266d=_0xb9bf83['Photo'+'nNetw'+'orkSy'+'nc']||{};if(!Object[_0x29145a(0x68a)](_0x41266d)[_0x29145a(0xe2a)+'h'])return![];return!!_0x226e33[_0x29145a(0x70c)](_0x51e6ed);}}function _0x53b6f9(_0x159eb9){var _0x11b1d3=_0x19bc25,_0x54d73e={'mrKyh':function(_0xc97747){return _0xc97747();}};if(_0x226e33[_0x11b1d3(0x886)]==='DLwSd')try{var _0x31ac7b=_0x54d73e[_0x11b1d3(0x763)](_0x4191e7);return _0x31ac7b&&_0x31ac7b[_0x11b1d3(0x832)]?_0x31ac7b[_0x11b1d3(0x832)][0x3a*-0x97+-0x2271+0x44a8]:null;}catch(_0x5481a7){return null;}else try{var _0x256304=_0xae8966;if(_0x256304&&_0x256304['el'])_0x256304['el'][_0x11b1d3(0x754)]['displ'+'ay']=_0x159eb9?'':_0x226e33[_0x11b1d3(0x608)];var _0xa8cb51=_0x4284ac;if(_0xa8cb51&&_0xa8cb51['cv'])_0xa8cb51['cv'][_0x11b1d3(0x754)]['displ'+'ay']=_0x159eb9?'':_0x11b1d3(0x2b0);}catch(_0x329831){}}var _0x497011=-0xb29+0x1*-0x1b1a+0x2643,_0x7a55a8=-0x31a+0x6d+0x89*0x5;function _0x441c81(_0x58f44a){var _0x339a5c=_0x19bc25,_0x1996ef={'xugdU':function(_0x3eda03,_0x5104d7){return _0x3eda03-_0x5104d7;}};if(typeof requestAnimationFrame===_0x226e33[_0x339a5c(0x78b)])_0x497011=_0x226e33[_0x339a5c(0x897)](requestAnimationFrame,_0x22ccce);else{if(_0x339a5c(0xcb2)!=='ytZNs'){var _0x5189c5=_0x2be63a[_0x339a5c(0x5f5)](_0x1996ef['xugdU'](_0x1d22fe[_0x322890]['v'][0x2230+0xb54+-0x2d83],_0x588473));if(_0x5189c5<_0x14203f)_0x107a57=_0x5189c5;}else _0x7a55a8=setTimeout(_0x22ccce,_0x58f44a||-0x3*0x275+-0x7a*0x1e+0x15dd*0x1);}}function _0x22ccce(){var _0x1f3f2b=_0x19bc25;_0x497011=0x1652+0xfa9+0x3*-0xca9;if(!_0x248249['on']||!_0x226e33[_0x1f3f2b(0x421)](_0x489393)){_0x53b6f9(![]),_0x226e33['IDFDZ'](_0x441c81,0x3*-0x5c1+0x17*0x9c+-0x3*-0x179);return;}_0x226e33[_0x1f3f2b(0x217)](_0x53b6f9,!![]),_0x560ab0(),_0x226e33['SoYDO'](_0x488bfb);if(_0x248249['boxes'])_0x5ca449();var _0x3044a8=null;try{_0x68481a();}catch(_0xafa520){}try{_0x226e33['pIFTa'](_0x226e33[_0x1f3f2b(0xa38)],'nMHXU')?_0x3044a8=_0x226e33[_0x1f3f2b(0x945)](_0x175e61):_0x4f8896['warni'+_0x1f3f2b(0xb68)][_0x1f3f2b(0x822)](_0x226e33['GmGhG'](_0x226e33['ntTJx'](_0x1f3f2b(0xb6a),_0xfa4f56[_0x1f3f2b(0xceb)+'Total']),_0x1f3f2b(0xa78)+_0x1f3f2b(0xbf1)+_0x1f3f2b(0x71a)+_0x1f3f2b(0x752)+'N\x20by\x20'+'UWMK.'+_0x1f3f2b(0x7b9)+_0x1f3f2b(0x8b7)+'\x20pass'+'\x20')+_0x226e33[_0x1f3f2b(0x331)]+(_0x1f3f2b(0xc75)+_0x1f3f2b(0x9fa)+'egist'+_0x1f3f2b(0xd2c)+_0x1f3f2b(0x70e)+_0x1f3f2b(0x7e8)+_0x1f3f2b(0xbd9)+_0x1f3f2b(0x7c7)+_0x1f3f2b(0xb54)+_0x1f3f2b(0x8e0)+'ife\x20o'+'f\x20the'+_0x1f3f2b(0x817)+'.\x20')+_0x226e33[_0x1f3f2b(0x51e)]+_0xaeccfc[_0x1f3f2b(0xceb)+'Regis'+'tered'+'AtArm']+(_0x1f3f2b(0xa78)+_0x1f3f2b(0xb09)+'uring'+'\x20armi'+_0x1f3f2b(0x757)+'\x20docu'+_0x1f3f2b(0xb6c)+'start'+'.'));}catch(_0x50b2ee){}try{_0x4cec62();}catch(_0x1e74ef){}try{_0x2c86b2(_0x3044a8);}catch(_0x286d36){}_0x226e33['RbpYw'](_0x441c81,-0x1813+-0xcd*-0x21+-0x25a);}function _0x5a243e(){var _0x41db71=_0x19bc25,_0x252c6d={'KsMLb':'Compo'+'nent.'+'get_t'+_0x41db71(0x2b9)+_0x41db71(0xa1e)+'eturn'+_0x41db71(0x5f2),'bordV':function(_0x58f5d2,_0x406edc){return _0x58f5d2===_0x406edc;},'eTHBb':_0x41db71(0x453),'QqtFb':_0x41db71(0xc2e)+'ugin.'+'mallo'+'c','UXNZN':_0x41db71(0x5e6),'YPsYt':_0x41db71(0xe57),'UZMec':function(_0x12c11e){return _0x12c11e();},'NUCUG':function(_0x3820e8,_0x259efb){var _0x387404=_0x41db71;return _0x226e33[_0x387404(0xc49)](_0x3820e8,_0x259efb);},'AckgO':function(_0x5f58a1,_0x3d6d91){return _0x226e33['RcYaB'](_0x5f58a1,_0x3d6d91);},'ddpVm':function(_0x2d6f4e,_0x1dee1e){return _0x2d6f4e!==_0x1dee1e;},'QisqE':_0x226e33['QeTNX'],'rEwUF':function(_0x5363c0){return _0x226e33['KnquN'](_0x5363c0);}},_0x53ebc6=window[_0x41db71(0x20e)+_0x41db71(0xab1)+_0x41db71(0x313)]&&window[_0x41db71(0x20e)+_0x41db71(0xab1)+'dkit'][_0x41db71(0x425)+'me']||null,_0x3f384e=_0x53ebc6&&_0x53ebc6['il2Cp'+'pCont'+_0x41db71(0x4b1)],_0xb87b17=_0x3f384e&&_0x3f384e['scrip'+_0x41db71(0x496)],_0x300bf3={},_0x246ae9=[];for(var _0x1a8c96 in _0x1cbdf6){_0x300bf3[_0x1a8c96]=_0x226e33[_0x41db71(0x609)]('0x',_0x1cbdf6[_0x1a8c96][_0x41db71(0x5cd)]['toStr'+_0x41db71(0x35f)](-0xb12*-0x3+0xc19+-0x2d3f));if(_0x1cbdf6[_0x1a8c96]['repla'+'ced'])_0x246ae9[_0x41db71(0x822)](_0x1a8c96);}var _0x1ac50d={};for(var _0x1ba65e in _0x1cbdf6)_0x1ac50d[_0x1ba65e]=_0x226e33[_0x41db71(0x3bf)](_0x786683,_0x1cbdf6[_0x1ba65e][_0x41db71(0x5cd)]);var _0x9953ba={},_0x4cd5d9=null;try{_0x9953ba=_0x195e7d();}catch(_0x2fda01){_0x4cd5d9=String(_0x2fda01&&_0x2fda01[_0x41db71(0x1e4)+'ge']||_0x2fda01);}var _0xc9a18a={'version':_0x1bb3ff,'when':new Date()[_0x41db71(0x1f0)+'Strin'+'g'](),'elapsedMs':_0x226e33['UvKPa'](Date[_0x41db71(0x25b)](),_0x1de39c),'frame':location[_0x41db71(0x2db)][_0x41db71(0x62f)](-0x12eb+-0x1b70+-0x1*-0x2e5b,0x1*0xd87+-0x2*0x137+0x1*-0xaa1),'host':_0x3d5366,'frameRole':_0x3de885,'uwmk':!!_0x53ebc6,'il2CppContext':!!_0x3f384e,'typeCount':_0xb87b17?Object[_0x41db71(0x68a)](_0xb87b17)[_0x41db71(0xe2a)+'h']:null,'arm':_0x3ee6ca,'assemblies':_0x7c8f0a,'hooksTotal':_0x10dd84[_0x41db71(0xe2a)+'h'],'hooksApplied':_0x4fb118(),'hooksResolved':_0x25cedc(),'hooksRegisteredAtArm':_0x3ee6ca[_0x41db71(0xceb)+'Regis'+'tered']||0x1a15+-0x19*-0xb9+-0x2c26,'hookErrors':_0x2ba691[_0x41db71(0x62f)](-0x1462+0x24f3*0x1+0x1091*-0x1,-0x10e1*0x1+-0x642+0x172b),'instances':_0x300bf3,'classNames':_0x1ac50d,'instancesReplaced':_0x246ae9,'hookFireProof':_0x5ac11d,'survey':_0x9953ba,'actkKeys':_0x52e8a1,'surveyRows':Object[_0x41db71(0x68a)](_0x9953ba)['reduc'+'e'](function(_0x1da77e,_0x94c7c8){var _0x3fe5e6=_0x41db71,_0x334a1e={'GKxtX':_0x252c6d[_0x3fe5e6(0xafc)]};return _0x252c6d[_0x3fe5e6(0xc13)](_0x3fe5e6(0x453),_0x252c6d[_0x3fe5e6(0x8c4)])?_0x1da77e+_0x9953ba[_0x94c7c8][_0x3fe5e6(0xe2a)+'h']:(_0x2be4b9[_0x3fe5e6(0xbda)]=0xb2*0x1+0x11*0x1f+0x1*-0x2c1,_0x1a6aac(_0x334a1e['GKxtX']+_0x50ec86));},-0x99e+-0x1*0xe5d+0x17fb*0x1),'reads':{'ok':_0x2b9e94['ok'],'failed':_0x2b9e94[_0x41db71(0x5fc)+'d'],'lastError':_0x2b9e94[_0x41db71(0x5f7)+'rror'],'source':_0x2b9e94[_0x41db71(0x530)+'e']},'identity':_0x226e33['dMYex'](_0x332c7b),'globals':_0x226e33['VSPbf'](_0x29d068),'wasmMemory':{'captured':!!_0x2675d4,'atMs':_0x4200fa,'bytes':(function(){var _0x198cde=_0x41db71,_0x44f433={'GHzbU':_0x226e33[_0x198cde(0xd8f)],'YOyJR':_0x198cde(0xd75)+_0x198cde(0x287)+_0x198cde(0xdd8)+_0x198cde(0x423)+'nsola'+_0x198cde(0x6a6)+'ospac'+'e','BjWhs':function(_0x5481e9,_0xddbe9){return _0x226e33['Mixuc'](_0x5481e9,_0xddbe9);},'KgVWk':function(_0x5083d5,_0x407616){return _0x226e33['VAmlF'](_0x5083d5,_0x407616);},'dpMbV':function(_0x223ef4,_0x1bea12){var _0xf96b48=_0x198cde;return _0x226e33[_0xf96b48(0x39c)](_0x223ef4,_0x1bea12);},'XJKrw':function(_0x46bbc0,_0x3f068a){return _0x46bbc0/_0x3f068a;}};try{return _0x2675d4&&_0x2675d4['buffe'+'r']?_0x2675d4[_0x198cde(0x67d)+'r']['byteL'+'ength']:0xd2a+-0xd*0x158+0x44e;}catch(_0x5cd8f3){if(_0x226e33['zNoZV']!==_0x226e33[_0x198cde(0x529)])return 0x14bf+0xa27*0x3+-0x3334;else _0xf5b268['fillS'+_0x198cde(0xc18)]=_0x44f433[_0x198cde(0xd91)],_0x152121[_0x198cde(0xbd8)]=_0x44f433['YOyJR'],_0x359789[_0x198cde(0x1de)+_0x198cde(0x4b1)](_0x44f433[_0x198cde(0xc7f)](_0x5e47e0[_0x198cde(0xdd2)](_0x33c84e['d']||-0x1289+0x1*-0x1157+-0xa4*-0x38),'m'),_0xac126a-_0x44f433[_0x198cde(0xd7b)](_0xa5be8d,0xcbf*-0x3+0x18e3+0x4*0x357),_0x44f433['dpMbV'](_0x174e15,_0x44f433[_0x198cde(0x764)](_0x1c4f0c,-0x1e7c+-0xa86*-0x2+0x972))-(-0xaf3+-0x2*-0xd49+0x6*-0x29a));}}()),'exportKeys':_0x1a10cd},'diff':_0x465e7e[_0x41db71(0x62f)](-0x19*0x10d+0x47*-0x89+-0xc*-0x55b,0x83*0x13+-0x11cb*0x1+0x83a),'speed':{'on':_0x46693f['on'],'factor':_0x46693f['facto'+'r'],'writes':_0x397202,'scaled':_0x5e73e2['slice'](-0x1429+-0x1865*0x1+0x2c8e,-0x2*0xcdb+-0x1aeb*0x1+0x34b1),'skipped':_0x40d87b[_0x41db71(0x62f)](-0x59*0x38+0x175a*-0x1+0x2a*0x105,0x4c8+-0x94*0x3d+0x1e8c)},'esp':_0x2fe2e0(),'view':_0x24abea(),'camera':(function(){var _0x5affb5=_0x41db71;if(_0x252c6d[_0x5affb5(0x545)]!==_0x252c6d[_0x5affb5(0xea1)])try{var _0xf1ab72=_0x252c6d['UZMec'](_0x68481a);return{'ok':_0xf1ab72['ok'],'source':_0xf1ab72['sourc'+'e'],'why':_0xf1ab72[_0x5affb5(0x69b)],'tried':_0xf1ab72['tried'],'camPtr':_0x252c6d[_0x5affb5(0x3b0)]('0x',_0xf1ab72[_0x5affb5(0x84f)+'r']['toStr'+_0x5affb5(0x35f)](0x1*0x827+-0x211*0x1+-0x606)),'tfPtr':'0x'+_0xf1ab72[_0x5affb5(0xbda)][_0x5affb5(0x488)+'ing'](-0x23b4+-0x7*-0x3f7+0x803),'fov':_0xf1ab72['fov'],'quat':_0xf1ab72['quat'],'pos':_0xf1ab72['pos'],'basis':_0xf1ab72[_0x5affb5(0x9a2)],'errors':_0xf1ab72[_0x5affb5(0x94c)+'s'][_0x5affb5(0x62f)](-0x11*0x1b5+-0x7bf+0x24c4*0x1,0xbc4+0x2e*-0x6+-0x2ab*0x4)};}catch(_0x35e4c3){return{'ok':![],'error':_0x252c6d['AckgO'](String,_0x35e4c3&&_0x35e4c3[_0x5affb5(0x1e4)+'ge']||_0x35e4c3)[_0x5affb5(0x62f)](0x2550+0x1792+-0x3ce2,0x2564+-0x1fd7+-0x515*0x1)};}else return _0x1028d0[_0x5affb5(0x94c)+'s'][_0x5affb5(0x822)](_0x252c6d['QqtFb']),-0xd15+0x1392+-0x67d;}()),'angles':(function(){var _0x4d7c1e=_0x41db71,_0x24473f={'gNExw':_0x4d7c1e(0x2b0),'oPbWQ':_0x226e33[_0x4d7c1e(0xac6)],'UrVTt':'auto','JBraf':_0x4d7c1e(0xd28)+_0x4d7c1e(0x8b5)+_0x4d7c1e(0x395)+'9)'},_0x3e90eb=_0x58aa72(),_0x261ff6=null,_0x28cb4d=null,_0x3003df=_0x226e33[_0x4d7c1e(0xb52)](_0x51e6ed);if(_0x3003df){var _0x3ced96=_0x226e33[_0x4d7c1e(0x44f)](_0x1848b9,_0x3003df[_0x4d7c1e(0xb84)],[_0x3003df[_0x4d7c1e(0xb84)][-0x248c+0x136e+-0x7*-0x272],_0x3003df[_0x4d7c1e(0xb84)][-0x1*0xc41+0x1204+-0x86*0xb],_0x3003df['eye'][-0x63f+-0x250f+0x2b50]+(-0x13d8+-0x1*0x99f+0xb8*0x29)],0x25fe+-0x310+-0x1f06,0x1*-0xfa9+0x2550+-0x11bf);_0x3ced96&&(_0x261ff6=_0x226e33['oSyJk'](_0x3ced96['x'],-0x10cf*-0x1+0x201f+-0x22*0x153),_0x28cb4d=_0x3ced96['y']/(0x26d1+-0xe5f+-0x16*0xef));}var _0x31621f=null,_0xb8bb1=null;if(_0x3003df){if(_0x226e33[_0x4d7c1e(0x558)]===_0x226e33[_0x4d7c1e(0x558)]){var _0x8efa19=_0x226e33[_0x4d7c1e(0x9a0)](_0x1848b9,_0x3003df[_0x4d7c1e(0xb84)],[_0x3003df[_0x4d7c1e(0xb84)][0xf15+0xef1+0xa02*-0x3],_0x3003df[_0x4d7c1e(0xb84)][-0x3fe*0x2+-0x16e4+-0xff*-0x1f]+(-0x81a+-0x244b+-0x145*-0x23),_0x226e33['duaVV'](_0x3003df[_0x4d7c1e(0xb84)][-0x1be5*0x1+0x1*-0x22f7+0x26b*0x1a],-0x265*0xb+0x223+0x183e)],-0x493*-0x3+0x2055+-0x1*0x2a26,-0x5*0x463+0x14f+0x1888);if(_0x8efa19)_0x31621f=_0x8efa19['y']/(0x7e1*0x1+0xa7e*0x1+0x7*-0x211);var _0x200319=_0x226e33[_0x4d7c1e(0xd9e)](_0x1848b9,_0x3003df[_0x4d7c1e(0xb84)],[_0x3003df['eye'][-0xe6e+0x7*0x3fa+-0x35a*0x4],_0x226e33[_0x4d7c1e(0x526)](_0x3003df[_0x4d7c1e(0xb84)][0x1a93+-0x551*-0x7+0x3*-0x1543],-0x19b9+-0xfad+0x2970),_0x3003df['eye'][0x17*-0x109+-0x3*0x51+0x5*0x4f4]+(0x6*-0x448+0x1813+-0x3*-0x8d)],-0x1491+0x33*-0x97+-0x368e*-0x1,-0x240e+-0x418*-0x5+0x137e);if(_0x200319)_0xb8bb1=_0x200319['y']/(-0x1c52+-0xb90+0x2bca);}else{if(_0x1c213f)_0x9de85f[_0x4d7c1e(0x754)]['displ'+'ay']=_0x128d1e?'':_0x24473f[_0x4d7c1e(0xa1f)];if(_0x443601)_0x3041f8[_0x4d7c1e(0x2b4)+'onten'+'t']=_0x402269?_0x4d7c1e(0x8db):_0x24473f[_0x4d7c1e(0x355)];_0x19c0b3['style'][_0x4d7c1e(0xb41)]=_0x2d1b32?_0x4d7c1e(0xa0b)+'2vw,6'+_0x4d7c1e(0xace):_0x24473f[_0x4d7c1e(0x874)],_0x7b718f[_0x4d7c1e(0x754)][_0x4d7c1e(0xd59)+_0x4d7c1e(0xdd2)]=_0x166fde?'#150c'+'1d':_0x24473f[_0x4d7c1e(0xac1)];}}return{'identified':_0x5c216a['ident'+'ified'],'why':_0x5c216a[_0x4d7c1e(0x69b)],'source':_0x5c216a[_0x4d7c1e(0x530)+'e'],'viewHooks':(function(){var _0x451c1c=_0x4d7c1e;try{return _0x2df7c9();}catch(_0x375fe8){return{'err':String(_0x375fe8&&_0x375fe8[_0x451c1c(0x1e4)+'ge']),'stack':String(_0x375fe8&&_0x375fe8['stack'])};}}()),'setterPair':(function(){var _0x1ecc86=_0x4d7c1e,_0xdc97b4={'DsQGq':function(_0x5a66e7,_0xf7ae78){var _0x40b8e6=_0x500f;return _0x252c6d[_0x40b8e6(0x3b0)](_0x5a66e7,_0xf7ae78);}};if(_0x1ecc86(0xa89)==='zcgrH'){var _0x10c69f=_0x2ab4dc();return _0x10c69f?{'a':_0x10c69f[_0x1ecc86(0x8a4)],'b':_0x10c69f[_0x1ecc86(0xe31)],'hits':_0x10c69f[_0x1ecc86(0xac9)],'order':_0x10c69f[_0x1ecc86(0x1ee)]}:null;}else{var _0x9a7dfb=_0x41ec93[_0x1ecc86(0x20e)+_0x1ecc86(0xab1)+_0x1ecc86(0x313)][_0x1ecc86(0x425)+'me'];_0x9a7dfb[_0x1ecc86(0xc20)+_0x1ecc86(0x699)+'g']=_0xdc97b4[_0x1ecc86(0x605)](_0x49bc26,':')+_0x6ee12[_0x1ecc86(0xe17)+'m']()[_0x1ecc86(0x488)+_0x1ecc86(0x35f)](-0x14c+-0x1*0x209e+0x220e)['slice'](0xa*0x86+-0x11*-0x151+-0x25*0xbf,0xb3f+0xc49+-0x177e),_0xc7d693=_0x9a7dfb[_0x1ecc86(0xc20)+'uraTa'+'g'];}}()),'yawAt':_0x5c216a['yawGe'+'tter']||_0x226e33[_0x4d7c1e(0xc92)],'pitchAt':_0x5c216a[_0x4d7c1e(0xc51)+'Gette'+'r']||_0x226e33[_0x4d7c1e(0xd73)],'getters':_0x5c216a['gette'+'rs'],'rawPitch':_0x5c216a[_0x4d7c1e(0x689)+'tch'],'rawYaw':_0x5c216a[_0x4d7c1e(0xa99)+'w'],'pitch':_0x5c216a['pitch'],'yaw':_0x5c216a['yaw'],'legacyOffsetsCleared':_0x84c070,'fov':_0x14e22e['fov'],'fovSane':_0x226e33[_0x4d7c1e(0x93a)](_0x14e22e[_0x4d7c1e(0xb6b)],0x1*0x1feb+-0x8*0x87+-0x1b77)&&_0x226e33[_0x4d7c1e(0xd88)](_0x14e22e['fov'],0x1e57+0x1094+-0x2e7d),'centreX':_0x261ff6,'centreY':_0x28cb4d,'aboveY':_0x31621f,'belowY':_0xb8bb1,'projection':_0x226e33['XfdGS'](_0x405d75)};}()),'fov':_0x14e22e['fov'],'espView':{'on':_0x248249['on'],'boxes':_0x248249[_0x41db71(0x554)],'span':_0x248249['span']},'local':(function(){var _0xc4e0c6=_0x41db71;if(_0x252c6d['ddpVm'](_0x252c6d['QisqE'],_0x252c6d[_0xc4e0c6(0xb32)]))_0x5c05f7[_0xc4e0c6(0x9a8)+'eProp'+'erty'](_0x520459,_0xc4e0c6(0x5ac),{'value':_0x20ed9c['name'],'configurable':!![]});else{var _0xb41885=_0x252c6d[_0xc4e0c6(0x97f)](_0x51e6ed);if(!_0xb41885)return null;return{'ptr':'0x'+_0xb41885[_0xc4e0c6(0x5cd)]['toStr'+'ing'](-0x1*-0x446+0x9bb+-0x53*0x2b),'feet':_0xb41885[_0xc4e0c6(0x832)],'eye':_0xb41885[_0xc4e0c6(0xb84)],'posAt':_0xb41885[_0xc4e0c6(0xc71)],'copies':_0xb41885[_0xc4e0c6(0xbe1)+'s'],'cluster':_0xb41885[_0xc4e0c6(0x626)+'er'],'eyeHeight':_0x14d89b,'pitch':_0xb41885[_0xc4e0c6(0xc51)],'yaw':_0xb41885['yaw'],'reach':_0xb41885['reach']};}}()),'uwmkLog':_0x2673f2[_0x41db71(0x62f)](-0x273*0x1+0x157d+0x985*-0x2,-0x6d8+0x1a93*-0x1+0x19*0x157),'warnings':[]};if(_0x4cd5d9)_0xc9a18a['warni'+'ngs']['push'](_0x226e33['ipVcR']+_0x4cd5d9);if(_0x3ee6ca[_0x41db71(0x94c)])_0xc9a18a[_0x41db71(0xd5c)+'ngs'][_0x41db71(0x822)](_0x226e33[_0x41db71(0x1ff)](_0x226e33[_0x41db71(0x5b1)],_0x3ee6ca['error']));_0x226e33['cmyTy'](_0xc9a18a['surve'+'yRows'],0x751+0x48*0x50+-0x1dd1)&&Object[_0x41db71(0x68a)](_0xc9a18a[_0x41db71(0x920)+'nces'])[_0x41db71(0xe2a)+'h']>-0xecb+-0x20d9+0x2fa4&&_0xc9a18a[_0x41db71(0xd5c)+'ngs'][_0x41db71(0x822)](_0x226e33['ywGjY'](_0x41db71(0x8f7)+_0x41db71(0xa74),Object['keys'](_0xc9a18a['insta'+_0x41db71(0xae9)])[_0x41db71(0xe2a)+'h'])+('\x20obje'+_0x41db71(0x26c)+'\x20but\x20'+_0x41db71(0x507)+'0\x20fie'+'lds.\x20')+(_0x2b9e94['lastE'+'rror']?_0x226e33['RFwIP'](_0x226e33[_0x41db71(0x79b)],_0x2b9e94[_0x41db71(0x5f7)+'rror']):_0x41db71(0xb46)+_0x41db71(0xc95)+'iled,'+'\x20so\x20e'+_0x41db71(0x53f)+'offse'+_0x41db71(0x343)+_0x41db71(0x936)+_0x41db71(0x94e)+'y\x20typ'+'e.'));_0xc9a18a['ident'+_0x41db71(0xe00)]&&_0xc9a18a[_0x41db71(0x637)+'ity'][_0x41db71(0xdb2)+'tches']===![]&&_0xc9a18a['warni'+_0x41db71(0xb68)]['push'](_0x226e33[_0x41db71(0xade)](_0x226e33[_0x41db71(0xa3d)](_0x41db71(0x894)+'ER\x20UW'+_0x41db71(0x701)+_0x41db71(0x7cb)+'OK\x20OV'+_0x41db71(0x680)+_0x41db71(0x770)+_0x41db71(0x20e)+_0x41db71(0xab1)+'dkit.'+_0x41db71(0x7b9)+_0x41db71(0x425)+_0x41db71(0x424)+_0x41db71(0x69d)+_0x41db71(0x3d9)+'\x20'+(_0x41db71(0xa7b)+'ced\x20b'+_0x41db71(0x8c5)+_0x41db71(0xdba)+_0x41db71(0x4d8)+_0x41db71(0xa0f)+_0x41db71(0xa77)+_0x41db71(0x6ee)+'are\x20a'+_0x41db71(0xb83)+'\x20the\x20'+'wrong'+_0x41db71(0x4dd)+'ct\x20fo'+'r\x20'),_0x41db71(0x415)+_0x41db71(0x75f)+_0x41db71(0xd69)+_0x41db71(0x595)+_0x41db71(0xa57)+_0x41db71(0xe92)+_0x41db71(0x1c3)+_0x41db71(0x375)+'haned'+_0x41db71(0x20b)+_0x41db71(0x809)+'every'+'\x20othe'+'r\x20'),'Sakur'+'a/UWM'+_0x41db71(0x562)+_0x41db71(0xc88)+_0x41db71(0x4d2)+'permo'+_0x41db71(0xe0a)+_0x41db71(0x422)+_0x41db71(0x3ac)+'eload'+'.'));_0xc9a18a[_0x41db71(0x637)+'ity']&&_0xc9a18a[_0x41db71(0x637)+_0x41db71(0xe00)]['plugi'+'nRunt'+_0x41db71(0x39e)+_0x41db71(0xd89)+'ted']===![]&&_0xc9a18a[_0x41db71(0xd5c)+_0x41db71(0xb68)]['push'](_0x226e33[_0x41db71(0x716)]+_0x226e33[_0x41db71(0x4e4)]);if(_0xc9a18a[_0x41db71(0x30c)]&&_0xc9a18a[_0x41db71(0x30c)]['note'])_0xc9a18a['warni'+'ngs'][_0x41db71(0x822)](_0x226e33[_0x41db71(0x4d3)](_0x226e33['IAKJX'],_0xc9a18a[_0x41db71(0x30c)]['note']));if(_0xc9a18a[_0x41db71(0x638)+'ls']&&!_0xc9a18a[_0x41db71(0x638)+'ls'][_0x41db71(0x2be)+'8']){if(_0x226e33['VLRXF'](_0x226e33[_0x41db71(0xa47)],'pplve')){var _0x2fd858=_0x2e70ed['Photo'+_0x41db71(0x5bc)+'orkSy'+'nc']||{};if(!_0x5f2e82['keys'](_0x2fd858)[_0x41db71(0xe2a)+'h'])return![];return!!_0x3615fb();}else{var _0x3899ff='';_0xc9a18a['hookF'+_0x41db71(0x6e1)+'oof']&&(_0x3899ff=_0x226e33['tJUUA'](_0x226e33[_0x41db71(0x97d)](_0x41db71(0x6db)+_0x41db71(0x800)+_0x41db71(0x3fd)+'t\x20'+_0xc9a18a['hookF'+'irePr'+_0x41db71(0xad1)][_0x41db71(0x5f6)]+_0x226e33['ewJAH']+_0xc9a18a[_0x41db71(0x338)+_0x41db71(0x6e1)+'oof'][_0x41db71(0xab5)+_0x41db71(0x350)+'nc']+('\x20and\x20'+'game\x20'+'resol'+'ved=')+_0xc9a18a[_0x41db71(0x338)+_0x41db71(0x6e1)+_0x41db71(0xad1)][_0x41db71(0x9e0)+_0x41db71(0x802)+'eAtFi'+'re'],_0x41db71(0x3df)+'rce:\x20'),_0xc9a18a['hookF'+_0x41db71(0x6e1)+_0x41db71(0xad1)]['gameS'+'ource'+_0x41db71(0xb29)+'e']||_0x41db71(0x2b0))+(_0x41db71(0x366)+_0x41db71(0x818)+'refer'+_0x41db71(0x90a)+_0x41db71(0xc43)+_0x41db71(0x813)+_0x41db71(0xaae)+_0x41db71(0x4b6)+'not\x20r'+_0x41db71(0xabd)+_0x41db71(0x456)+'ow.')),_0xc9a18a[_0x41db71(0xd5c)+_0x41db71(0xb68)][_0x41db71(0x822)](_0x226e33[_0x41db71(0x1f4)](_0x226e33[_0x41db71(0x5d0)]+(_0xc9a18a[_0x41db71(0x638)+'ls'][_0x41db71(0x5ad)+'ource']||_0x226e33[_0x41db71(0x608)])+_0x226e33['cBDaW']+(_0x41db71(0x342)+'reads'+_0x41db71(0xa59)+_0x41db71(0x7ec)+'ked\x20u'+_0x41db71(0x7a4)+_0x41db71(0x3dc)+_0x41db71(0x5be)+'ect\x20w'+_0x41db71(0x38b)+_0x41db71(0x200)+_0x41db71(0xb4d)+_0x41db71(0x332)+'\x20reac'+_0x41db71(0xe05)+'.'),_0x3899ff));}}(_0xc9a18a['globa'+'ls']&&!_0xc9a18a[_0x41db71(0x638)+'ls'][_0x41db71(0x6ff)+'Wrapp'+'er']||_0x226e33[_0x41db71(0x49c)](_0xc9a18a[_0x41db71(0x638)+'ls'][_0x41db71(0x6ff)+'Wrapp'+'er'],'undef'+_0x41db71(0x396)))&&_0xc9a18a[_0x41db71(0xd5c)+'ngs']['push'](_0x226e33[_0x41db71(0x3bb)]);if(_0x226e33['JStfW'](_0xc9a18a['hooks'+_0x41db71(0xcf4)],-0x1684+0x1b8f+-0x1*0x50b)&&_0xc9a18a['hooks'+'Appli'+'ed']===0x1d5*-0xf+-0xad7+0x2652&&_0xb87b17){if(_0x226e33[_0x41db71(0x5ff)]===_0x41db71(0xbeb))_0x226e33['xaCZG'](_0xc9a18a['hooks'+_0x41db71(0xe29)+'ved'],0x1162+0x1*-0x12b2+0x150)?_0xc9a18a[_0x41db71(0xd5c)+_0x41db71(0xb68)]['push'](_0x226e33[_0x41db71(0xd5b)](_0x226e33[_0x41db71(0x57e)]('0\x20of\x20'+_0xc9a18a['hooks'+'Total'],_0x41db71(0xa78)+_0x41db71(0xbf1)+_0x41db71(0x71a)+_0x41db71(0x752)+_0x41db71(0x47d)+_0x41db71(0x662)+_0x41db71(0x7b9)+_0x41db71(0x8b7)+_0x41db71(0x6a2)+'\x20')+(_0x41db71(0xcba)+_0x41db71(0x2a7)+_0x41db71(0xc65)+'g\x20Web'+_0x41db71(0x681)+_0x41db71(0x931)+_0x41db71(0xa0f)+_0x41db71(0xe74)+_0x41db71(0x265)+'snaps'+_0x41db71(0x4ae)+_0x41db71(0xd7d)+'n.hoo'+_0x41db71(0x4b2)+'ngth,'+'\x20')+('so\x20ho'+_0x41db71(0x9fa)+_0x41db71(0x3fb)+_0x41db71(0xd2c)+'after'+_0x41db71(0x7e8)+_0x41db71(0xbd9)+'nored'+'\x20for\x20'+'the\x20l'+_0x41db71(0x6f5)+_0x41db71(0xea3)+_0x41db71(0x817)+'.\x20')+(_0x41db71(0xb72)+_0x41db71(0x641)+'\x20'),_0xc9a18a['hooks'+_0x41db71(0xb72)+_0x41db71(0x641)+_0x41db71(0xa63)])+_0x226e33['TEaao']):_0xc9a18a['warni'+'ngs']['push']('UWMK\x20'+'resol'+_0x41db71(0x7f2)+_0xc9a18a[_0x41db71(0xceb)+_0x41db71(0xe29)+_0x41db71(0x78c)]+'\x20of\x20'+_0xc9a18a[_0x41db71(0xceb)+_0x41db71(0xcf4)]+(_0x41db71(0xa78)+_0x41db71(0x9d9)+_0x41db71(0x3f1)+_0x41db71(0x809)+_0x41db71(0x724)+_0x41db71(0xcf9)+_0x41db71(0x3b6)+_0x41db71(0x1fa)+'ne.\x20T'+_0x41db71(0xd04)+_0x41db71(0xa21)+_0x41db71(0xd3f))+_0x226e33['KLMwZ']);else{if(!_0xa3d5b7||!_0x51175c)return null;var _0x2a803a=new _0x2cef4d(_0x3d22cc)[_0x41db71(0x61e)+'assNa'+'me']();return _0x2a803a===_0x2dfcb8?null:_0x2a803a;}}return _0x226e33[_0x41db71(0x7b3)](_0xc9a18a[_0x41db71(0xceb)+_0x41db71(0x9c3)+'ed'],-0x10fc+0x1d55*-0x1+0x2e51)&&!_0xc9a18a['insta'+_0x41db71(0xae9)]['FPSco'+_0x41db71(0x2ee)+_0x41db71(0x4bb)]&&_0xc9a18a[_0x41db71(0xd5c)+_0x41db71(0xb68)][_0x41db71(0x822)](_0x41db71(0x3bd)+'\x20are\x20'+_0x41db71(0x3b6)+'ed\x20bu'+_0x41db71(0x3cd)+'FPSco'+'ntrol'+_0x41db71(0xc67)+_0x41db71(0xe41)+'red\x20y'+'et.\x20'+_0x226e33[_0x41db71(0x5e2)]),_0xc9a18a[_0x41db71(0x920)+'ncesR'+'eplac'+'ed'][_0x41db71(0xe2a)+'h']&&_0xc9a18a['warni'+_0x41db71(0xb68)][_0x41db71(0x822)](_0x41db71(0x735)+'lt\x20si'+'nce\x20f'+_0x41db71(0xa40)+'captu'+_0x41db71(0x98f)+_0x41db71(0x1c0)+'n?):\x20'+_0xc9a18a[_0x41db71(0x920)+'ncesR'+'eplac'+'ed']['join'](',\x20')),_0xc9a18a;}function _0x3d229d(_0xbde28){var _0x4dfefd=_0x19bc25;if(_0x226e33['xjIHh'](_0x4dfefd(0x20a),_0x226e33[_0x4dfefd(0x7e9)]))try{_0x16d71c['hook']['enabl'+'ed']=![];}catch(_0x56bd99){}else{console[_0x4dfefd(0x34e)](_0x4dfefd(0xe5d)+'kura]'+_0x4dfefd(0xc0d)+'lWarz'+_0x4dfefd(0x2b6)+'rt','color'+':'+_0x4316bd+(_0x4dfefd(0x6d9)+_0x4dfefd(0x43e)+'ht:70'+'0'),_0xbde28),console[_0x4dfefd(0x34e)](_0x226e33['XKkli'](_0x226e33[_0x4dfefd(0x8c7)](_0x4f7f6f+'\x0a',JSON[_0x4dfefd(0x80a)+_0x4dfefd(0xad3)](_0xbde28,null,-0x329+0x26fb+-0xad*0x35))+'\x0a',_0x18fe1f)),_0x23e07b=_0xbde28;try{_0x226e33['uosws'](_0x5ccadd,_0xbde28);}catch(_0x3fbdba){}_0x226e33['JcVdS'](_0x118f86,_0x226e33[_0x4dfefd(0x7f1)],{'report':_0xbde28});}}function _0x40074d(){var _0x5301b7=_0x19bc25;try{if('gRMSC'===_0x5301b7(0xb1e))return _0x5a243e();else _0x52a62b['sane']=![];}catch(_0x17dd4f){return{'version':_0x1bb3ff,'when':new Date()[_0x5301b7(0x1f0)+_0x5301b7(0xb95)+'g'](),'elapsedMs':_0x226e33['MKsCI'](Date[_0x5301b7(0x25b)](),_0x1de39c),'host':_0x3d5366,'uwmk':!!(window[_0x5301b7(0x20e)+'WebMo'+_0x5301b7(0x313)]&&window[_0x5301b7(0x20e)+_0x5301b7(0xab1)+_0x5301b7(0x313)]['Runti'+'me']),'il2CppContext':![],'arm':_0x3ee6ca,'hooksTotal':_0x10dd84['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x17dd4f&&_0x17dd4f['messa'+'ge']||_0x17dd4f)};}}function _0x55f732(){var _0x36f46d=_0x19bc25,_0xede46f={'lfheI':function(_0x22b450,_0x27c6d9){return _0x22b450!==_0x27c6d9;},'IxwHs':function(_0x232f48,_0x5d07d6){return _0x232f48!==_0x5d07d6;},'GUtFq':function(_0x414c5e,_0xb345f3){return _0x414c5e(_0xb345f3);},'FHBOg':'9|2|6'+_0x36f46d(0x930)+_0x36f46d(0x630)+_0x36f46d(0x7dc),'sRaWc':'auto','MqdIV':function(_0x39bbab,_0x3f2414){return _0x39bbab-_0x3f2414;},'yIBxd':function(_0x1c0f36,_0x2c0b17){var _0xa33c1c=_0x36f46d;return _0x226e33[_0xa33c1c(0x69f)](_0x1c0f36,_0x2c0b17);}},_0xd72aee=-0x2*0x1e9+0x371*0x1+0x61;try{if('AWJaJ'!=='AWJaJ'){if(_0x105ced['paren'+'t']&&_0xede46f['lfheI'](_0x3da6d7[_0x36f46d(0x427)+'t'],_0x15f593))_0x1a09ec[_0x36f46d(0x427)+'t'][_0x36f46d(0x319)+_0x36f46d(0xafd)+'e'](_0x27d37d,'*');if(_0x441e43[_0x36f46d(0x6d7)]&&_0xede46f['IxwHs'](_0x3a4cbc[_0x36f46d(0x6d7)],_0x402b36))_0x53d9ae[_0x36f46d(0x6d7)]['postM'+_0x36f46d(0xafd)+'e'](_0x152325,'*');}else _0x22ccce();}catch(_0x2772b7){}try{if('BbdWm'==='FZCXp'){var _0x5bde66=('9|3|6'+_0x36f46d(0xcbd)+_0x36f46d(0x46b)+'2|8|1'+_0x36f46d(0x993)+'7|5|1'+_0x36f46d(0x82d)+_0x36f46d(0xb2b)+'0|4')[_0x36f46d(0xa6a)]('|'),_0x117269=-0x1264+0x3e*-0x82+-0x15*-0x260;while(!![]){switch(_0x5bde66[_0x117269++]){case'0':_0x4d56d2[_0x36f46d(0x667)]=_0x36a19e;continue;case'1':var _0x42712a=_0x226e33['McENf'](_0x4d7a9e,_0x226e33[_0x36f46d(0x41c)],_0x226e33['PCfgq']);continue;case'2':_0x36a19e[_0x36f46d(0x8d5)]=_0x2f9d8c(_0x94653e);continue;case'3':var _0x4d56d2=_0x5dc190(_0x36f46d(0x9be),_0x36f46d(0xdea)+_0x36f46d(0x965));continue;case'4':return _0x4d56d2;case'5':_0x4d56d2[_0x36f46d(0x55e)+'dChil'+'d'](_0x36a19e);continue;case'6':var _0x36a19e=_0x526830['creat'+_0x36f46d(0xaaa)+'ent'](_0x36f46d(0x667));continue;case'7':_0x938960();continue;case'8':_0x36a19e[_0x36f46d(0xb5e)]=_0x226e33[_0x36f46d(0xdfb)](_0x8130b5,_0x516631);continue;case'9':var _0x219a08={'IUCvh':function(_0x4606e6,_0x2ee114){return _0x4606e6(_0x2ee114);},'qiqzK':function(_0x334ec0,_0xcc3a78){return _0x334ec0<_0xcc3a78;},'loCHJ':function(_0x1c3c7d,_0x3df62f){return _0x1c3c7d*_0x3df62f;},'OwAwb':function(_0x452f6d,_0x280e9c){return _0x452f6d-_0x280e9c;},'nGYUe':function(_0x37f21c,_0x38d5af){var _0x552b8d=_0x36f46d;return _0x226e33[_0x552b8d(0xe83)](_0x37f21c,_0x38d5af);}};continue;case'10':_0x6c7166['syncs']['push'](_0x938960);continue;case'11':_0x4d56d2[_0x36f46d(0x55e)+_0x36f46d(0xd13)+'d'](_0x42712a);continue;case'12':_0x36a19e[_0x36f46d(0x5af)]=_0x226e33[_0x36f46d(0x631)](_0x542cbb,_0x2c8048);continue;case'13':_0x36a19e['type']=_0x226e33['gxibc'];continue;case'14':_0x4d56d2['sync']=_0x938960;continue;case'15':var _0x938960=function(){var _0xbd1302=_0x36f46d,_0x45f80b=_0x98d919();_0x36a19e[_0xbd1302(0x6ff)]=_0x219a08[_0xbd1302(0xdf6)](_0x195ce0,_0x45f80b),_0x42712a[_0xbd1302(0x2b4)+'onten'+'t']=(_0x219a08[_0xbd1302(0x839)](_0x5091dc,0x1897*-0x1+0x1308+0x4*0x164)?_0x45f80b[_0xbd1302(0xa0d)+'ed'](0x38b*0xb+0x2466+-0x6da*0xb):_0x5b183e(_0x2c5a9f['round'](_0x45f80b)))+(_0x36a19e['datas'+'et']['unit']||'');var _0x1fb43e=_0x219a08[_0xbd1302(0xa18)](_0x219a08[_0xbd1302(0x646)](_0x45f80b,_0x3e9d0a)/(_0x488299-_0x255c10),-0x4*-0x688+0x3*-0xe7+-0x1*0x1707);_0x36a19e[_0xbd1302(0x754)][_0xbd1302(0x53d)+_0xbd1302(0x9a3)+'y'](_0xbd1302(0xe71),_0x219a08['nGYUe'](_0x1fb43e,'%'));};continue;case'16':_0x36a19e[_0x36f46d(0x593)+_0x36f46d(0xdd5)]='sk-sl'+_0x36f46d(0x3ce);continue;case'17':_0x36a19e['oninp'+'ut']=function(){var _0x1594de=_0x36f46d;_0xede46f['GUtFq'](_0x39e5f5,_0xb96def(_0x36a19e[_0x1594de(0x6ff)])||_0x1e3aab),_0x938960();};continue;}break;}}else _0x38b23e();}catch(_0x335212){}setInterval(_0x276d99,0xa07*0x1+-0x2b*-0x48+-0x1b1*0xb),_0x3d229d(_0x40074d()),function _0x4d29ac(){var _0x300b1a=_0x36f46d;if(!_0x10dd84['lengt'+'h']){if(_0x226e33[_0x300b1a(0x6af)](_0x226e33[_0x300b1a(0x9de)],_0x226e33[_0x300b1a(0x87e)])){var _0x427f16=_0xede46f['FHBOg'][_0x300b1a(0xa6a)]('|'),_0x44d8db=0x205*0x7+0x31*0xc6+-0x3409;while(!![]){switch(_0x427f16[_0x44d8db++]){case'0':_0x3f7752['style'][_0x300b1a(0x2a9)]=_0xede46f[_0x300b1a(0x500)];continue;case'1':_0x2493e6['pos']={'x':_0x31e42b,'y':_0x3f4bde};continue;case'2':var _0x3bcdfa=_0x1c3c4e['offse'+_0x300b1a(0x87d)+'h']||-0x7*0x236+0x365*0xb+0x3f*-0x4f,_0x530c5e=_0x51ba44[_0x300b1a(0xca6)+_0x300b1a(0x314)+'ht']||-0xcc7*-0x1+0xd85*-0x1+0x24e;continue;case'3':_0x3b9ad6['style'][_0x300b1a(0xb22)+'m']=_0x300b1a(0xd66);continue;case'4':_0x3f4bde=_0x28dc91[_0x300b1a(0x8d5)](0x121b+0x1b9f+0x16d9*-0x2,_0x5687d0['min'](_0xede46f[_0x300b1a(0x56e)](_0x34e4bb[_0x300b1a(0xc24)+'Heigh'+'t']||0x28*0xd3+0x17*0x34+0x6*-0x646,_0x530c5e)-(-0x66*0x23+-0x1*-0x24a+0xbb0),_0x3f4bde));continue;case'5':_0x16917c['style'][_0x300b1a(0xc2d)]=_0x31e42b+'px';continue;case'6':var _0x31e42b=_0xede46f[_0x300b1a(0x56e)](_0x43f093['clien'+'tX']||-0x106d+-0x3ad*0x3+0x1b74,_0xa335c),_0x3f4bde=(_0x43fea9[_0x300b1a(0x367)+'tY']||0x216*-0xd+0x24c4+-0x4d3*0x2)-_0x2e6623;continue;case'7':_0x5f270d['style'][_0x300b1a(0x6d7)]=_0x3f4bde+'px';continue;case'8':_0x31e42b=_0x3845fd['max'](-0x1abc+-0x1*0x138+0x1bfc,_0x363270[_0x300b1a(0x5af)](_0xede46f['MqdIV'](_0xede46f[_0x300b1a(0x63e)](_0x4884b6[_0x300b1a(0xc24)+_0x300b1a(0xe7b)]||0xdf1+0xc6e+-0x1a5f*0x1,_0x3bcdfa),0x2f6+0x35*0x36+-0xe1c),_0x31e42b));continue;case'9':if(!_0x3db5f9)return;continue;}break;}}else try{_0x345b86();}catch(_0x12b075){}}_0xd72aee++,_0x3d229d(_0x226e33['BOCvP'](_0x40074d));if(!_0x10dd84[_0x300b1a(0xe2a)+'h']&&_0xd72aee<0x1fa7*0x1+0x1780+-0x35fb)setTimeout(_0x4d29ac,-0x1651+-0x571+0x2392);else{if(!Object['keys'](_0x1cbdf6)['lengt'+'h']&&_0xd72aee<0xa6*-0x16+-0x6*-0x3d0+-0x770)setTimeout(_0x4d29ac,-0x22c4+-0x1e23+0x48b7);else setTimeout(_0x4d29ac,0x122c*-0x1+-0x2*0xb9+-0xb7*-0x22);}}();}if(document['body'])_0x55f732();else document['addEv'+'entLi'+_0x19bc25(0xa54)+'r'](_0x226e33[_0x19bc25(0x543)],_0x55f732,{'once':!![]});if(document[_0x19bc25(0x649)])try{_0x226e33[_0x19bc25(0x202)](_0x3b6989);}catch(_0x3728fa){}else document[_0x19bc25(0x601)+_0x19bc25(0xb70)+_0x19bc25(0xa54)+'r'](_0x19bc25(0x635)+'ntent'+_0x19bc25(0x2f7)+'d',function(){try{_0x3b6989();}catch(_0x244629){}},{'once':!![]});})()));
