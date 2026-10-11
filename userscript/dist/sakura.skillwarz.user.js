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

(function(_0x9981a2,_0x1e2a2c){var _0x1fbdf2=_0x576a,_0x1d0973=_0x9981a2();while(!![]){try{var _0x3cbe15=parseInt(_0x1fbdf2(0x406))/(0x3b*-0x7a+0x25fe+-0x9df)*(parseInt(_0x1fbdf2(0xa83))/(-0x1812+-0x1*0x13d9+0x2bed))+-parseInt(_0x1fbdf2(0x613))/(-0x1*0x663+0x2564+-0x1efe*0x1)*(-parseInt(_0x1fbdf2(0xc1d))/(0x6f7*0x2+-0x23f7+0x1*0x160d))+-parseInt(_0x1fbdf2(0x98d))/(0x1*0x2a5+0x5*-0x532+0x175a)*(parseInt(_0x1fbdf2(0x5c4))/(-0x189*-0xd+-0xa90+-0x95f))+parseInt(_0x1fbdf2(0x330))/(-0x4*-0x1bf+0xda*-0x1d+0x13*0xef)*(-parseInt(_0x1fbdf2(0x531))/(-0xe*-0x116+-0xa1f+0x1*-0x50d))+parseInt(_0x1fbdf2(0xa03))/(0xa5*-0x2+-0x244c+0x259f)+-parseInt(_0x1fbdf2(0x958))/(-0x22b9+0x1*-0x223b+-0x227f*-0x2)*(-parseInt(_0x1fbdf2(0x347))/(-0x1*-0x1ea7+0x14b2+-0x2*0x19a7))+parseInt(_0x1fbdf2(0x9b0))/(-0x4e*0x5+-0x494+-0x626*-0x1)*(-parseInt(_0x1fbdf2(0x69a))/(0x19d1*-0x1+0x1ead+-0x4cf));if(_0x3cbe15===_0x1e2a2c)break;else _0x1d0973['push'](_0x1d0973['shift']());}catch(_0x2785a5){_0x1d0973['push'](_0x1d0973['shift']());}}}(_0x1288,-0xb*0x21c13+-0xe4a40+0x3496b6),((()=>{'use strict';var _0x586988=_0x576a,_0x11b6a3={'TSAiF':'Runti'+'me._g'+'ame','Grzvo':function(_0x1d8327,_0xd73684){return _0x1d8327===_0xd73684;},'exdNq':'xAxru','lsSbm':function(_0x7223f2,_0x826838){return _0x7223f2!==_0x826838;},'mBSKp':'cmd','osIFJ':'OqDHL','pPXSm':'COdWt','gdcMh':_0x586988(0x3fd)+'e','qzXvG':function(_0x719585,_0x378c98){return _0x719585&&_0x378c98;},'FJZZi':_0x586988(0x29f),'fRGHY':function(_0xd67c06,_0x5ab4f1){return _0xd67c06!==_0x5ab4f1;},'cqWnk':_0x586988(0x8c2),'NgOMF':function(_0x5c8d61,_0x36a5ea){return _0x5c8d61===_0x36a5ea;},'gyAcP':function(_0x3dcb20,_0x32b1cc){return _0x3dcb20!==_0x32b1cc;},'ynSXl':'Runti'+'me.cr'+'eateP'+_0x586988(0x757)+'\x20unav'+_0x586988(0xcde)+'le','KoPSN':'sakur'+_0x586988(0x1b2)+_0x586988(0xb2e)+'z','luxFG':function(_0x360fbd){return _0x360fbd();},'ZUNaS':function(_0x3ab52c,_0x52a9c4){return _0x3ab52c+_0x52a9c4;},'cJbcz':'\x20know'+'n=','yPAvb':_0x586988(0x3a6),'erBVS':_0x586988(0x87e),'ACScM':_0x586988(0xb2f),'yEPFS':_0x586988(0x33e)+_0x586988(0x764)+_0x586988(0xd5c)+'b','rzcMK':function(_0x1474b9,_0x4206c0){return _0x1474b9+_0x4206c0;},'SqHXs':function(_0x4cd6f1,_0x35d66b){return _0x4cd6f1+_0x35d66b;},'SkHhr':_0x586988(0x6f3)+'round'+_0x586988(0xc17)+_0x586988(0x616)+_0x586988(0xd94)+_0x586988(0x1f3)+_0x586988(0xb94)+':1px\x20'+_0x586988(0x180)+_0x586988(0x497)+_0x586988(0x535)+_0x586988(0x48d)+_0x586988(0x7a7)+_0x586988(0x8c4)+_0x586988(0xa18),'sikvL':'strin'+'g','xOTQb':'sakur'+'a-sw-'+_0x586988(0x233)+'s','voqZo':function(_0x1eb525,_0x1bedf0){return _0x1eb525!==_0x1bedf0;},'egUAp':'rdZEY','EFiDe':'#saku'+'ra-sw'+_0x586988(0x86f)+'ll:in'+_0x586988(0x859)+'}','PInQm':function(_0x156247,_0xa107a0){return _0x156247||_0xa107a0;},'cDCCY':_0x586988(0x2d9)+_0x586988(0x2c3)+'after'+_0x586988(0x2a2)+_0x586988(0x4a4)+'me\x20no'+_0x586988(0x1ab)+'ected'+'?','YaiYo':_0x586988(0x253)+'c7','FXFgR':function(_0x415d33,_0x1b1c1b){return _0x415d33(_0x1b1c1b);},'fdSDF':'%c[sa'+_0x586988(0xa1a)+'\x20pane'+'l\x20dis'+_0x586988(0x858),'DAGbJ':_0x586988(0xd72)+':','pHWSv':_0x586988(0x892),'jvhig':_0x586988(0x417)+_0x586988(0x327)+_0x586988(0x979),'Wnbfy':_0x586988(0x6bc)+_0x586988(0x3fb)+_0x586988(0xdea)+'9)','fBDQa':function(_0x1c9e88,_0xa95b9){return _0x1c9e88+_0xa95b9;},'ZanWF':function(_0x3cadbf,_0xcfa3d3){return _0x3cadbf+_0xcfa3d3;},'UxUAH':'wiZEk','uJkJw':function(_0x1b6f6e,_0x35b87d){return _0x1b6f6e+_0x35b87d;},'hxffF':'The\x20g'+_0x586988(0x53d)+_0x586988(0x1df)+'never'+_0x586988(0xa6a)+_0x586988(0x2c1)+_0x586988(0x672)+'e\x20rep'+_0x586988(0x3b8)+'\x0a','IQwRW':_0x586988(0x230)+_0x586988(0xd6b)+'\x20prov'+'es\x20th'+'e\x20use'+'rscri'+_0x586988(0xdfd)+_0x586988(0x823)+_0x586988(0xdc3)+'\x20and\x20'+_0x586988(0x70c)+'ng\x20on'+'\x20the\x20'+_0x586988(0x8f0)+'l,\x0a','kmmcA':'\x20\x203.\x20'+'Both\x20'+'sakur'+_0x586988(0xa14)+_0x586988(0xb2e)+_0x586988(0xcfe)+_0x586988(0xdc7)+'AND\x20t'+_0x586988(0xa65)+_0x586988(0xdf4)+'g\x20scr'+'ipt\x20a'+'re\x0a','SjPAq':function(_0x1ff08c,_0x87b7cf){return _0x1ff08c||_0x87b7cf;},'NmiSd':_0x586988(0x532)+_0x586988(0x7da),'RhtTv':_0x586988(0xc95)+'74','kbEUh':_0x586988(0x7c3)+'a8','Rpctf':'hooks'+_0x586988(0x9f6)+_0x586988(0x1d1),'rLoUF':function(_0x409b20,_0x16d304){return _0x409b20+_0x16d304;},'aUvaj':_0x586988(0xb2c)+_0x586988(0x87f)+_0x586988(0xde7)+'·\x20','OEdcb':function(_0x57e02b,_0x29b1f2){return _0x57e02b+_0x29b1f2;},'FCGiB':_0x586988(0x785)+_0x586988(0x8a9),'RNMrb':_0x586988(0xd79)+'8a','vmGVg':'F9\x20tw'+_0x586988(0xa5d)+_0x586988(0x2a7)+'walki'+_0x586988(0xa72)+_0x586988(0x7de)+_0x586988(0xb36)+'/\x20jum'+_0x586988(0x85a)+_0x586988(0xb59)+_0x586988(0xcce)+_0x586988(0xd1a)+_0x586988(0x17a)+'\x20whic'+'h.','mrYjb':_0x586988(0xc68),'hhTrh':_0x586988(0x8b9)+'\x20off','RotCz':_0x586988(0x40c)+'1b','MnAoo':_0x586988(0xada)+'f5','uifkz':function(_0x3453fb,_0x4be416){return _0x3453fb(_0x4be416);},'PelBR':function(_0x465c42,_0x2a80ce){return _0x465c42!==_0x2a80ce;},'GCppp':_0x586988(0xc32),'WfsJw':_0x586988(0xa2b)+_0x586988(0x6bf),'LLmzW':'Copie'+'d','yIeVy':'texta'+_0x586988(0x2be),'fpJCz':function(_0x150bd9,_0xf613f4){return _0x150bd9+_0xf613f4;},'bIzOl':_0x586988(0xc82)+'ion:f'+_0x586988(0x34d)+'left:'+_0x586988(0x5dc)+'top:1'+_0x586988(0x3f1)+_0x586988(0x275)+_0x586988(0x38b)+_0x586988(0xa20)+_0x586988(0xcca)+_0x586988(0x5eb)+'th:mi'+_0x586988(0x15d)+_0x586988(0xd2a)+_0x586988(0x6c7)+'ax-he'+_0x586988(0xa9f)+_0x586988(0x8bb),'AUcSy':'backg'+_0x586988(0x2c4)+':#150'+_0x586988(0x8fc)+_0x586988(0xc97)+_0x586988(0xada)+'f5;bo'+_0x586988(0x530)+_0x586988(0x311)+_0x586988(0x778)+_0x586988(0x6bc)+'255,1'+'43,17'+_0x586988(0x521)+';bord'+_0x586988(0xb55)+_0x586988(0xcdf)+_0x586988(0x7cf),'SGneW':_0x586988(0x8fa)+_0x586988(0xd8c)+_0x586988(0xc5a)+'i-mon'+_0x586988(0xa9e)+_0x586988(0xa4a)+_0x586988(0x7d9)+_0x586988(0x168)+_0x586988(0x23b)+_0x586988(0xdcb)+_0x586988(0x281)+_0x586988(0x639)+_0x586988(0x8d7)+'0px\x20-'+_0x586988(0x1e4)+'#000;','uXDrz':function(_0x27c576,_0x2d9931){return _0x27c576+_0x2d9931;},'UNHzu':function(_0x384da8,_0x6ada05){return _0x384da8+_0x6ada05;},'JBjMp':function(_0x36437c,_0x5cd5d7){return _0x36437c+_0x5cd5d7;},'fLFhe':'<div\x20'+'style'+'=\x22pad'+'ding:'+'9px\x201'+'2px;b'+'order'+_0x586988(0x4fb)+_0x586988(0x742)+'x\x20sol'+'id\x20rg'+'ba(25'+'5,143'+_0x586988(0xa11)+'.3);d'+_0x586988(0x526)+'y:fle'+_0x586988(0x6ac)+_0x586988(0xb95)+_0x586988(0x594)+_0x586988(0x798)+_0x586988(0xcb9)+_0x586988(0xb64)+'lex:0'+_0x586988(0x6b5)+_0x586988(0x5b4),'ApaAq':'\x22>sak'+_0x586988(0x522)+'\x20skil'+_0x586988(0xc16)+_0x586988(0x7c7),'RYAXe':_0x586988(0xad2)+_0x586988(0x50a)+_0x586988(0xbd5)+'-x\x22\x20s'+'tyle='+_0x586988(0x873)+'groun'+_0x586988(0x64d)+_0x586988(0xe11)+'ent;b'+_0x586988(0xb94)+_0x586988(0x8d6)+_0x586988(0x180)+_0x586988(0x497)+_0x586988(0x535)+'143,1'+'77,.4'+');col'+'or:#f'+_0x586988(0x644)+';bord'+_0x586988(0xb55)+_0x586988(0xcdf)+'7px;p'+'addin'+_0x586988(0x839)+'\x208px;'+_0x586988(0x31f)+_0x586988(0x9b8)+'nter;'+_0x586988(0xbe8)+_0x586988(0x82e)+'n>','NcqpU':'</div'+'>','NEOMB':'<div\x20'+'style'+'=\x22pad'+_0x586988(0x54e)+_0x586988(0x312)+_0x586988(0x93b)+_0x586988(0xb94)+'-bott'+'om:1p'+_0x586988(0x8fe)+'id\x20rg'+'ba(25'+'5,143'+_0x586988(0xa11)+'.18);'+_0x586988(0xa26)+_0x586988(0x649)+_0x586988(0xd05)+_0x586988(0x7d1)+';alig'+_0x586988(0xce2)+_0x586988(0x2b0)+_0x586988(0x2f5)+_0x586988(0x1e8)+_0x586988(0xa99)+_0x586988(0x4b0)+_0x586988(0xce4)+_0x586988(0x76d)+_0x586988(0x81c)+'>','AwPqk':_0x586988(0xad2)+_0x586988(0x50a)+_0x586988(0xbd5)+'-snap'+'\x22\x20sty'+'le=\x22b'+_0x586988(0x1d6)+'ound:'+'trans'+_0x586988(0x52f)+'t;bor'+_0x586988(0xe14)+_0x586988(0x4aa)+_0x586988(0x820)+'gba(2'+_0x586988(0xaa9)+'3,177'+',.4);'+'color'+_0x586988(0x31a)+_0x586988(0x4f7)+'order'+'-radi'+'us:7p'+'x;pad'+_0x586988(0x54e)+_0x586988(0xd6f)+_0x586988(0xaf1)+'rsor:'+_0x586988(0x210)+_0x586988(0x695)+_0x586988(0xb70)+_0x586988(0x8bf)+_0x586988(0x440)+'butto'+'n>','VdZen':'<pre\x20'+_0x586988(0x491)+'w2-ou'+_0x586988(0x176)+_0x586988(0x905)+_0x586988(0xbb8)+_0x586988(0x84e)+'addin'+_0x586988(0x59b)+'x\x2012p'+'x;ove'+_0x586988(0xd64)+_0x586988(0xcc0)+_0x586988(0x1a5)+_0x586988(0x7f2)+_0x586988(0xd49)+_0x586988(0x231)+_0x586988(0x608)+_0x586988(0xb1f)+_0x586988(0x704)+_0x586988(0xbe7)+_0x586988(0x79b)+'k:bre'+_0x586988(0xb26)+_0x586988(0x90b)+_0x586988(0xa40)+_0x586988(0x675)+';','jDGHh':'max-h'+_0x586988(0x166)+':62vh'+_0x586988(0xdc4)+_0x586988(0xb0a)+_0x586988(0xaf0)+_0x586988(0xb28)+'his\x20p'+_0x586988(0xa67)+'updat'+_0x586988(0x85f)+'self\x20'+_0x586988(0xd2e)+_0x586988(0xac3)+'ame\x20f'+_0x586988(0x1df)+_0x586988(0x344)+'\x20—\x20no'+_0x586988(0x25f)+_0x586988(0x66e)+'eeded'+'.\x0a\x0aIf'+_0x586988(0xabe)+_0x586988(0xa6b)+_0x586988(0xa3e)+_0x586988(0x8a2)+'permo'+_0x586988(0xbc4)+_0x586988(0xb5f)+_0x586988(0x1ab)+'ectin'+_0x586988(0x4ef)+'o\x20the'+_0x586988(0x1a1)+_0x586988(0x512)+'gin\x20g'+_0x586988(0x53d)+_0x586988(0x690)+_0x586988(0x34a)+'>','wQFTx':_0x586988(0x157)+_0x586988(0x6dd)+'s','vdXMa':_0x586988(0x157)+_0x586988(0xb46),'QyZdn':'#sw2-'+'body','kVQgp':_0x586988(0x157)+_0x586988(0x7f0)+_0x586988(0x9b3)+'l','eCGQb':'#sw2-'+_0x586988(0x7f3),'PYiMb':function(_0x52f652,_0x1131f1,_0x5c456e){return _0x52f652(_0x1131f1,_0x5c456e);},'FVEGn':_0x586988(0x5c6),'ApYDr':_0x586988(0x357),'BKSTO':_0x586988(0x247),'NDQTc':function(_0x37b7ed,_0x16a1c8){return _0x37b7ed-_0x16a1c8;},'Mumye':function(_0x2892a3,_0x409c41){return _0x2892a3+_0x409c41;},'RjOSG':function(_0x3575eb,_0x1d694a){return _0x3575eb+_0x1d694a;},'RApRc':'yes','nhwEG':_0x586988(0x2ab)+_0x586988(0x7c8)+'\x20','LmzVC':function(_0x36a5c6,_0x441196){return _0x36a5c6!=_0x441196;},'dfAFx':_0x586988(0xb2a)+_0x586988(0x319),'olbUT':_0x586988(0x9eb)+_0x586988(0x586)+'jects'+'\x20capt'+_0x586988(0xa64)+_0x586988(0x324),'YNgcf':'The\x20h'+'ooks\x20'+_0x586988(0x62b)+_0x586988(0x8c6)+'e\x20gam'+'e\x27s\x20o'+'wn\x20Up'+'date('+');\x20no'+'thing'+_0x586988(0x5b7)+_0x586988(0xa64)+'means','vzerd':_0x586988(0xa82)+_0x586988(0x1fa)+_0x586988(0x792)+_0x586988(0x286)+_0x586988(0x623)+_0x586988(0x78a)+_0x586988(0x1a7)+_0x586988(0xab8)+_0x586988(0xb30)+_0x586988(0xa96),'PSTkv':function(_0x4b52ae,_0x5c74f2){return _0x4b52ae<_0x5c74f2;},'cUkrh':function(_0x35393d,_0x578c6d){return _0x35393d+_0x578c6d;},'BibaM':_0x586988(0x631),'kQZBu':'QdBJf','qmTwG':function(_0x2a043e,_0x5b4387){return _0x2a043e+_0x5b4387;},'TNeFV':_0x586988(0x52e),'CYkaF':function(_0x2ff821,_0x3e12ea){return _0x2ff821-_0x3e12ea;},'RrWCH':'uhaBF','LTBdw':function(_0x45ca04,_0x47e2c7){return _0x45ca04/_0x47e2c7;},'POips':function(_0x4b80d3,_0x32df26){return _0x4b80d3+_0x32df26;},'tINpy':'JNndt','TVnCX':function(_0x4df307,_0x5bbc3c){return _0x4df307!==_0x5bbc3c;},'OQbpZ':function(_0x12d62f){return _0x12d62f();},'ygQSA':function(_0x5e878d,_0x228f2b){return _0x5e878d===_0x228f2b;},'dBnSZ':'funct'+_0x586988(0x8b4),'GASSx':_0x586988(0xacd),'jWweF':'XzgLy','pJUdq':function(_0x2edf48,_0x5752f5){return _0x2edf48!==_0x5752f5;},'YLZdp':function(_0x40d3c3,_0x3be049){return _0x40d3c3+_0x3be049;},'FKTlU':function(_0x20b6ef,_0x556db2){return _0x20b6ef!==_0x556db2;},'wzQjk':'rlhli','iunXc':'warn','WVqMV':'10px\x20'+'ui-mo'+_0x586988(0xa55)+_0x586988(0xa0d)+'nsola'+_0x586988(0x931)+'ospac'+'e','syCGX':function(_0x4785ee,_0x1b080d){return _0x4785ee/_0x1b080d;},'AUPpI':'uExJA','RSaIu':'sISxh','QVXbv':function(_0x477519,_0x5f4901){return _0x477519+_0x5f4901;},'loiZO':function(_0x3819d9,_0x4845b1){return _0x3819d9(_0x4845b1);},'DEUep':function(_0x280828,_0x254653){return _0x280828===_0x254653;},'spLwm':_0x586988(0x863),'PoYMd':_0x586988(0xcfc),'YyMgq':_0x586988(0xad7),'dCHoX':_0x586988(0x5bd)+_0x586988(0x743)+'ntime'+'.reso'+_0x586988(0x73b)+'me()','FejID':_0x586988(0xcf0)+'w\x20glo'+'bal','BsfDu':'undef'+'ined','osLAk':function(_0x15fb31,_0x2515c6){return _0x15fb31!==_0x2515c6;},'hVQrO':function(_0x5c85f7,_0x4839e6){return _0x5c85f7===_0x4839e6;},'esDPG':_0x586988(0x412),'eNHQS':'NYXuD','dcsas':function(_0x25debf,_0x174df4){return _0x25debf+_0x174df4;},'RPesl':_0x586988(0xcf0)+'w.','IwcAA':function(_0x386fdf,_0x4f2355){return _0x386fdf===_0x4f2355;},'AUvbK':'LtFty','lnWVD':function(_0x40641b){return _0x40641b();},'bCuuq':function(_0x23728a,_0x136313){return _0x23728a===_0x136313;},'mMHwX':function(_0x35c5d3,_0x22382f){return _0x35c5d3===_0x22382f;},'ghwXi':function(_0x546b36,_0x55f859){return _0x546b36+_0x55f859;},'EUCxm':_0x586988(0xd5e),'pOBOq':'i16','DpzmT':'u16','wZapw':_0x586988(0xb63),'Wuxco':_0x586988(0x4d9),'AOkhv':'yxARi','iYuKN':'NRDlZ','rUzlv':_0x586988(0xb9f),'lTZRx':function(_0x35387d){return _0x35387d();},'WYGCK':function(_0x1a9194,_0x25b829){return _0x1a9194<_0x25b829;},'DtzfT':function(_0x201c20,_0x501960){return _0x201c20&_0x501960;},'fQyHW':function(_0x29f1c3,_0x3cb75c){return _0x29f1c3|_0x3cb75c;},'kzfJd':function(_0x4af30a,_0x4f5642){return _0x4af30a<_0x4f5642;},'akFnl':function(_0x16e01c,_0x2b0cee){return _0x16e01c<_0x2b0cee;},'kzhBY':function(_0x35ed75,_0x16feb1){return _0x35ed75+_0x16feb1;},'RQpnE':'\x20past'+'\x20heap'+'\x20end\x20'+'0x','zyvmV':function(_0xb128b1,_0x2758ef){return _0xb128b1&_0x2758ef;},'xFgdD':function(_0x246286,_0x4b899c){return _0x246286^_0x4b899c;},'WrqtX':function(_0x557af3,_0x57bfef){return _0x557af3===_0x57bfef;},'phVHL':function(_0x42ad4f,_0x3f98c2){return _0x42ad4f===_0x3f98c2;},'KFjVD':function(_0x356728,_0x53ce54,_0x18f233){return _0x356728(_0x53ce54,_0x18f233);},'CpSKo':function(_0x16d77d,_0x41eb8a,_0x25bcba){return _0x16d77d(_0x41eb8a,_0x25bcba);},'cQmxZ':function(_0x1e8015,_0xda977f,_0x48fc3e){return _0x1e8015(_0xda977f,_0x48fc3e);},'PxvnT':function(_0x4834f3,_0x4cc666,_0x21af90){return _0x4834f3(_0x4cc666,_0x21af90);},'yzurI':function(_0x43b553,_0x3dc8bf){return _0x43b553&_0x3dc8bf;},'pVFsB':function(_0x55e146,_0x3bfab2){return _0x55e146||_0x3bfab2;},'rAjAt':function(_0x4e49fa,_0x711086){return _0x4e49fa===_0x711086;},'vPjei':function(_0x455171,_0x2174f0){return _0x455171===_0x2174f0;},'TuXZm':function(_0x2ae2a1,_0x16e278){return _0x2ae2a1!==_0x16e278;},'HwvFg':function(_0x19ee7d,_0x4f52be,_0x1b764d,_0x2ec78a){return _0x19ee7d(_0x4f52be,_0x1b764d,_0x2ec78a);},'HyYog':function(_0x49c28a,_0x4adbd1){return _0x49c28a+_0x4adbd1;},'oSgwL':function(_0x418de5,_0x4c669a){return _0x418de5===_0x4c669a;},'svqhB':function(_0x1b83a3,_0x4002e3){return _0x1b83a3*_0x4002e3;},'xREaa':function(_0x432312){return _0x432312();},'WAVdB':'sk-va'+'l','qyGXL':_0x586988(0xcfd),'gHNJG':function(_0x338150,_0x5705cc){return _0x338150!==_0x5705cc;},'eOaJv':function(_0x148f95,_0x1034a6){return _0x148f95!==_0x1034a6;},'EHjEI':function(_0x46fe1e,_0x14d146){return _0x46fe1e(_0x14d146);},'QQBsF':function(_0x11ff04,_0x1ece9d){return _0x11ff04>_0x1ece9d;},'euzgi':function(_0x506a82,_0x509d2e){return _0x506a82<_0x509d2e;},'zYqKD':'jGKKB','JxAsE':function(_0xe70b10,_0x2db949){return _0xe70b10<_0x2db949;},'jZQzp':_0x586988(0x903),'UxGFg':function(_0x1c2359,_0x4c21bd){return _0x1c2359+_0x4c21bd;},'ERmMw':'\x20Obsc'+_0x586988(0xb50)+'loats'+_0x586988(0xd8d)+'ed','YtILk':function(_0xe2cc5a,_0x2069b8){return _0xe2cc5a<_0x2069b8;},'hlaDE':function(_0x489a54,_0x7da387){return _0x489a54>=_0x7da387;},'HUdFH':function(_0x4827f2,_0x27a500){return _0x4827f2<_0x27a500;},'RlhBW':function(_0x1c284f,_0x5b93a1){return _0x1c284f===_0x5b93a1;},'wdmwb':'aEByr','oedbT':function(_0x339bef,_0x1afb54){return _0x339bef*_0x1afb54;},'UmqMp':function(_0x37b94d,_0x3358d3){return _0x37b94d!==_0x3358d3;},'PGSYE':_0x586988(0x902),'IKtFo':function(_0x245cde,_0x366070){return _0x245cde===_0x366070;},'RCmpP':function(_0x21e7c8){return _0x21e7c8();},'DvXSz':'uDpFg','CbMEZ':_0x586988(0x7df)+_0x586988(0xca5),'Vjqls':_0x586988(0x198)+'e','JaJGG':_0x586988(0x9b1),'IpZNm':function(_0x3a74c5,_0x7d0415){return _0x3a74c5===_0x7d0415;},'SGuxA':function(_0x5bf162,_0x283b1f){return _0x5bf162===_0x283b1f;},'OrbyV':function(_0x14e051,_0x25e5aa){return _0x14e051(_0x25e5aa);},'LxxwD':function(_0x220b11,_0x13b8b3){return _0x220b11===_0x13b8b3;},'zHcwE':function(_0x4f5927,_0x6aae31){return _0x4f5927-_0x6aae31;},'nPvZI':function(_0x353f0b,_0x42191e){return _0x353f0b===_0x42191e;},'XNWwI':'wHETI','kMXTs':function(_0x475fe5,_0x44457f){return _0x475fe5/_0x44457f;},'oCxcl':function(_0x4bf533,_0x44f0f1){return _0x4bf533-_0x44f0f1;},'LPRiJ':'nlybX','NOqsG':'csHeJ','dgPFy':'Mouse'+'Look','oFACW':'float','lnmES':function(_0x1df554,_0x42566a){return _0x1df554(_0x42566a);},'XcRAC':function(_0x876a42,_0x2b706f){return _0x876a42-_0x2b706f;},'TnCxM':function(_0x438546,_0x597ba9){return _0x438546!==_0x597ba9;},'gIRNe':'numbe'+'r','gJBte':function(_0x48f083,_0x30d980){return _0x48f083(_0x30d980);},'hDlsz':function(_0x576808,_0x53cdef){return _0x576808>=_0x53cdef;},'sWtEr':function(_0x4ace60,_0x325707){return _0x4ace60<=_0x325707;},'GYqKd':function(_0x1bc1c8){return _0x1bc1c8();},'oUknM':function(_0x45e400,_0x102569){return _0x45e400!==_0x102569;},'cKYyA':function(_0x5cfb2e,_0x3cd679){return _0x5cfb2e===_0x3cd679;},'euZRt':_0x586988(0x682),'Ecusn':function(_0x58e2f0){return _0x58e2f0();},'Jtlhk':function(_0x549f20,_0x5c19c5){return _0x549f20>_0x5c19c5;},'iWoWo':function(_0x1fd013,_0x5cf462){return _0x1fd013+_0x5cf462;},'VCgJQ':function(_0x4b0aa4,_0x3229a9){return _0x4b0aa4<_0x3229a9;},'ZHCzC':'auto','ZTsAX':'24px','wqNnI':function(_0xb3f13,_0x435565){return _0xb3f13===_0x435565;},'wOBeM':'bOYxC','BDaxm':function(_0x56ad5b,_0x1aeaa0){return _0x56ad5b+_0x1aeaa0;},'lbmex':_0x586988(0xc06),'bZmSM':_0x586988(0x1b9),'sjcWC':function(_0x267af3,_0x200f00){return _0x267af3||_0x200f00;},'RWPEy':function(_0x1c0129,_0x5a013c){return _0x1c0129===_0x5a013c;},'zNcwe':function(_0x1d6241){return _0x1d6241();},'FWjfC':function(_0x25e71d,_0xef2320){return _0x25e71d!==_0xef2320;},'fQzJL':function(_0x3e888c,_0x37ad5d){return _0x3e888c-_0x37ad5d;},'jtCfp':function(_0x34c9ab,_0x218b15,_0x1c274a,_0x1dc785){return _0x34c9ab(_0x218b15,_0x1c274a,_0x1dc785);},'nvBKG':function(_0x49e7aa,_0x5a01e0){return _0x49e7aa===_0x5a01e0;},'eHetA':function(_0x4f3104,_0x44aba9,_0x33a6b2){return _0x4f3104(_0x44aba9,_0x33a6b2);},'VxMyo':'NPC_C'+_0x586988(0x3e9)+_0x586988(0x24a),'Kywab':function(_0x39cd75,_0x26c13d){return _0x39cd75 in _0x26c13d;},'XVJcQ':function(_0x4a7cca,_0x63d31,_0xa82c92){return _0x4a7cca(_0x63d31,_0xa82c92);},'ypPOM':function(_0x191d17,_0x206654){return _0x191d17+_0x206654;},'Csmgv':function(_0x1e1a22,_0x4429d5){return _0x1e1a22>>>_0x4429d5;},'QMwjB':function(_0x521ab9,_0x139811){return _0x521ab9===_0x139811;},'hQTos':function(_0x2c182f,_0x77f8f3){return _0x2c182f>>>_0x77f8f3;},'LEFDm':function(_0x3b0bc7,_0x56ccce){return _0x3b0bc7+_0x56ccce;},'aCdrB':'No\x20Ph'+_0x586988(0x97a)+_0x586988(0x2e2)+'kSync'+_0x586988(0x1b7)+_0x586988(0x8de)+_0x586988(0x3e9)+_0x586988(0x817)+'nd\x20no'+_0x586988(0x4f1)+_0x586988(0x7d3)+_0x586988(0x303)+'That\x20'+_0x586988(0xdb6)+_0x586988(0x23f),'MqOCm':_0x586988(0x8a0)+'rs\x20ar'+_0x586988(0x997)+_0x586988(0x736)+'but\x20n'+'one\x20a'+'re\x20cl'+'assif'+'ied\x20a'+_0x586988(0x3a3)+_0x586988(0xdb8)+'yet\x20-'+_0x586988(0xdd2)+'k\x20','hogOu':'isLoc'+'al\x20on'+'\x20each'+_0x586988(0x9c7)+'y\x20in\x20'+'`play'+_0x586988(0xdaf),'ckweP':function(_0x4953f7,_0x1ad9a9){return _0x4953f7===_0x1ad9a9;},'RZBgx':'\x20->\x20','iScqD':_0x586988(0xd0e),'DdvlO':'QuPzV','LJpdf':function(_0x445781,_0x406502){return _0x445781!==_0x406502;},'oEsdG':function(_0x158889,_0x57accd){return _0x158889(_0x57accd);},'skRPz':function(_0x2ff0f2,_0x4680af){return _0x2ff0f2+_0x4680af;},'PbKcu':function(_0x438b67,_0x5c230b){return _0x438b67<_0x5c230b;},'xVPQM':function(_0x25d2b1,_0x48f645){return _0x25d2b1===_0x48f645;},'BhOMU':_0x586988(0x1ea),'mgwxJ':function(_0x345f75,_0x5a04e3){return _0x345f75!==_0x5a04e3;},'KTKkA':function(_0x5f3403,_0x1277a6){return _0x5f3403===_0x1277a6;},'idpKv':function(_0x3e2ac5,_0xa85aa1){return _0x3e2ac5===_0xa85aa1;},'yBTpx':_0x586988(0xa88),'tNAyE':function(_0x5b7b6c,_0x4bd39a,_0x3ebb28,_0x10da25){return _0x5b7b6c(_0x4bd39a,_0x3ebb28,_0x10da25);},'YWakm':function(_0x1f1416,_0x3ffa3a){return _0x1f1416+_0x3ffa3a;},'LwbBC':function(_0x418755,_0x4c9f15){return _0x418755+_0x4c9f15;},'lIqsu':function(_0x4a5a1a,_0x40cdc4){return _0x4a5a1a+_0x40cdc4;},'diziU':'\x20fake'+'=','hWZUM':'\x20k0=','HbqzT':_0x586988(0x3ee),'IPAvD':'offse'+_0x586988(0x58b)+_0x586988(0x975)+_0x586988(0x320),'pkgVs':'6|8|3'+_0x586988(0x6f9)+'7|4|1'+'|0','SLpsN':function(_0x34820a,_0x325ae0){return _0x34820a+_0x325ae0;},'gjDMh':_0x586988(0xde4),'rDxRr':function(_0x11b98b,_0x5ef138){return _0x11b98b===_0x5ef138;},'IYpIU':function(_0x247841,_0x1afe0a){return _0x247841!==_0x1afe0a;},'CEAFm':_0x586988(0x943),'enLxp':function(_0x487628,_0x584ba5){return _0x487628<=_0x584ba5;},'eanAb':function(_0x1a8d16,_0x3b6c2b){return _0x1a8d16+_0x3b6c2b;},'BVWLK':function(_0x20d3d9,_0x1ae7fe){return _0x20d3d9+_0x1ae7fe;},'XysSk':function(_0x39127e,_0x26ef7a){return _0x39127e+_0x26ef7a;},'cfiKV':function(_0x1170a5,_0x1ea12c){return _0x1170a5+_0x1ea12c;},'vTDNI':_0x586988(0xddc)+'s\x20wer'+'e\x20eve'+_0x586988(0x643)+_0x586988(0xda4)+'UWMK.'+_0x586988(0x895)+_0x586988(0x9fa)+_0x586988(0x18e)+'\x20','dRhIO':_0x586988(0xbdc)+_0x586988(0x1bf)+'egist'+_0x586988(0x696)+'after'+'\x20it\x20a'+_0x586988(0x288)+'nored'+_0x586988(0x638)+'the\x20l'+_0x586988(0x90c)+'f\x20the'+_0x586988(0x8fd)+'.\x20','lNvgL':function(_0x50d4f6,_0x5382f9,_0x11e12a,_0x2fabaa){return _0x50d4f6(_0x5382f9,_0x11e12a,_0x2fabaa);},'FxWyp':function(_0x2d91a,_0x4e6ae5){return _0x2d91a+_0x4e6ae5;},'glAzy':function(_0x5b1394,_0x198cc7){return _0x5b1394!==_0x198cc7;},'UHaZs':_0x586988(0x25c),'TgPBp':'TILtQ','kykZf':function(_0x1a8ca1,_0x5758ab){return _0x1a8ca1(_0x5758ab);},'VgRkz':_0x586988(0xb15)+_0x586988(0x339),'wmvpG':_0x586988(0x484),'qoOdy':_0x586988(0xb15)+_0x586988(0xcf7)+'nceWr'+_0x586988(0x8c7),'pAfev':function(_0x2bca17,_0x213bca){return _0x2bca17===_0x213bca;},'aEEiB':'WuffL','RISSA':function(_0x4bb621,_0x5a9948){return _0x4bb621+_0x5a9948;},'fAmrr':'Mouse'+_0x586988(0xafd),'TdVhi':function(_0x2050da,_0x2890db){return _0x2050da+_0x2890db;},'ParFV':function(_0x3a4150,_0x3ae71c){return _0x3a4150+_0x3ae71c;},'AlcfT':'+0x','TxfxY':function(_0x270cd0,_0x34306b){return _0x270cd0===_0x34306b;},'DoWGc':function(_0x50c7ed,_0x257df7,_0x23de2f){return _0x50c7ed(_0x257df7,_0x23de2f);},'mBgaI':function(_0x53a113,_0x5e7f27){return _0x53a113===_0x5e7f27;},'mHzEE':function(_0x10a4e1){return _0x10a4e1();},'Enxwn':_0x586988(0x19d)+'t','NYZSC':function(_0x150a41){return _0x150a41();},'EiRML':function(_0x323dfa,_0x47ccbc){return _0x323dfa!==_0x47ccbc;},'XsMEu':function(_0x1b5675,_0x285143){return _0x1b5675+_0x285143;},'PtlGy':function(_0x58fdf5){return _0x58fdf5();},'xoTVc':'TytUY','fPlNm':function(_0xdf8268,_0xf98281,_0x1c44b3){return _0xdf8268(_0xf98281,_0x1c44b3);},'pXKrf':function(_0xd01a63,_0xf2f208){return _0xd01a63===_0xf2f208;},'xXGdB':'kWOvt','rNfcT':_0x586988(0x3d2),'Kvclh':_0x586988(0x33e)+_0x586988(0x764)+_0x586988(0x4b3)+'ss','NGKli':'#saku'+_0x586988(0x822)+_0x586988(0x990)+_0x586988(0x9e5)+_0x586988(0xa8e)+'l}','ZDwOv':_0x586988(0x33e)+_0x586988(0x764)+_0x586988(0x218),'VpNDm':function(_0x5a4f81,_0x2fa408){return _0x5a4f81+_0x2fa408;},'noTrH':_0x586988(0xc82)+_0x586988(0x985)+_0x586988(0x34d)+'left:'+_0x586988(0x6f1)+_0x586988(0xb21)+_0x586988(0xb95)+_0x586988(0x6cf)+_0x586988(0x963)+_0x586988(0xda5)+_0x586988(0x988)+_0x586988(0x526)+'y:fle'+'x;fle'+_0x586988(0xdfc)+_0x586988(0x793)+_0x586988(0x28f)+_0x586988(0x224)+_0x586988(0x4a5)+'x;','FhDuP':'<div\x20'+'data-'+_0x586988(0x89d)+_0x586988(0xded)+_0x586988(0x905)+_0x586988(0xd72)+':#8d7'+_0x586988(0x6c9)+_0x586988(0x824)+'dth:2'+'90px;'+'\x22></d'+'iv>','jRiqt':function(_0x51b0ec,_0x3364a5){return _0x51b0ec+_0x3364a5;},'LPJPm':function(_0x2837ec,_0x1385ec){return _0x2837ec+_0x1385ec;},'NDbUK':function(_0x3b65da,_0x39a669){return _0x3b65da+_0x39a669;},'TmcOj':function(_0xa9d705,_0x32b1d7){return _0xa9d705+_0x32b1d7;},'sXCYf':function(_0x2cc1fd,_0x16aeee){return _0x2cc1fd+_0x16aeee;},'HoNUI':_0x586988(0xd72)+':#f7e'+_0x586988(0x4f7)+'order'+_0x586988(0x6aa)+'us:6p'+_0x586988(0xa80)+'ding:'+'2px\x208'+'px;cu'+'rsor:'+'point'+'er;fo'+_0x586988(0xa40)+_0x586988(0x675)+_0x586988(0x54d)+_0x586988(0x627)+_0x586988(0xc98)+_0x586988(0x4cd)+'>','RHMXE':';\x22>','WnBeD':_0x586988(0x42f)+_0x586988(0x56a)+'-a=\x22f'+'v\x22\x20st'+'yle=\x22'+_0x586988(0xd72)+':#bda'+'9c9;m'+'in-wi'+'dth:3'+_0x586988(0x4ff)+'>2.0x'+_0x586988(0x4b7)+'n>','sGZQg':_0x586988(0xad2)+'on\x20da'+_0x586988(0x39e)+'\x22esp\x22'+_0x586988(0x17c)+_0x586988(0x77b)+_0x586988(0x896)+_0x586988(0x80e)+_0x586988(0x4df)+_0x586988(0x91b)+';bord'+_0x586988(0x232)+_0x586988(0x8fe)+'id\x20rg'+_0x586988(0x849)+_0x586988(0x6db)+',177,'+_0x586988(0x3ce),'DRYCA':_0x586988(0xad2)+'on\x20da'+_0x586988(0x39e)+'\x22snap'+_0x586988(0x372)+'le=\x22b'+_0x586988(0x1d6)+'ound:'+_0x586988(0x4e0)+_0x586988(0x52f)+'t;bor'+_0x586988(0xe14)+'px\x20so'+_0x586988(0x820)+'gba(2'+'55,14'+_0x586988(0xe18)+_0x586988(0xde8)+';','cORDI':_0x586988(0xaf6),'YzpMR':_0x586988(0x57f),'THVvk':function(_0x5e123f,_0x19fe77){return _0x5e123f(_0x19fe77);},'JZxDt':_0x586988(0x8e1),'CUVCP':function(_0x2ae1e2){return _0x2ae1e2();},'NKVFT':'REttz','hHmzj':function(_0x2537df,_0x46c03c){return _0x2537df!==_0x46c03c;},'sGKzh':_0x586988(0xde2),'AGDij':_0x586988(0xd87)+_0x586988(0xcd9),'GVbQv':_0x586988(0x4e0)+_0x586988(0x52f)+'t','ehJGa':function(_0x3b93c2,_0x26b8c4,_0xee99f2){return _0x3b93c2(_0x26b8c4,_0xee99f2);},'nJOYu':function(_0x441494,_0x828479){return _0x441494+_0x828479;},'tHbzE':function(_0x46cf57){return _0x46cf57();},'yrWKX':function(_0x88feb5,_0x10744c){return _0x88feb5===_0x10744c;},'fFzPe':function(_0x29270b,_0x5217be){return _0x29270b===_0x5217be;},'TVcce':_0x586988(0x8cf),'cfmHR':'yzagC','JXRBw':_0x586988(0xace),'UhlcR':function(_0x1532ce,_0x4a45a4,_0x305d58){return _0x1532ce(_0x4a45a4,_0x305d58);},'tdCvz':function(_0x604f18,_0x59af29){return _0x604f18===_0x59af29;},'lFGTk':'ZihTR','voZGv':function(_0x10a60b,_0x476356){return _0x10a60b===_0x476356;},'MEMmL':_0x586988(0x8b9)+_0x586988(0xa7a),'ZeohG':function(_0x4a51d7){return _0x4a51d7();},'zaEgb':function(_0x1efaef,_0x4294f5){return _0x1efaef+_0x4294f5;},'jmZBk':function(_0x5dce30,_0x59cb0e){return _0x5dce30/_0x59cb0e;},'prIdc':_0x586988(0xbb5)+'m','rzmpE':_0x586988(0xd83)+_0x586988(0x812),'FvrNT':_0x586988(0x46e)+_0x586988(0x2bd),'FrEcx':_0x586988(0xe29),'xgfLx':_0x586988(0xc72)+'\x20-','iiMtr':'no\x20en'+'emies'+_0x586988(0x1b0)+'(lobb'+_0x586988(0xc46)+_0x586988(0x969),'tfykC':function(_0x48ec1d,_0xfd3fba){return _0x48ec1d===_0xfd3fba;},'vUaBs':function(_0x15e9e2,_0x59aabf){return _0x15e9e2===_0x59aabf;},'awROL':function(_0x45f9b,_0x508d40){return _0x45f9b===_0x508d40;},'vPJrk':_0x586988(0x853),'WUzUU':'Brack'+'etLef'+'t','VzSgj':function(_0x1c0af6,_0x42e2bb){return _0x1c0af6<_0x42e2bb;},'McqfB':function(_0x2dcc8e,_0x10fee0){return _0x2dcc8e>>>_0x10fee0;},'uyGtH':function(_0x3b42a7,_0x4f8de9){return _0x3b42a7===_0x4f8de9;},'nXdsr':'qpCue','BXsTU':function(_0x5f5b2f,_0x29c58,_0x29a6b7){return _0x5f5b2f(_0x29c58,_0x29a6b7);},'Kuofn':function(_0x410ad0,_0x4f3360){return _0x410ad0+_0x4f3360;},'yEtbj':function(_0x183877,_0x510b43){return _0x183877>>>_0x510b43;},'xcGdV':function(_0x1a4a26,_0x2d8caf){return _0x1a4a26(_0x2d8caf);},'YYKiq':function(_0x2cd87a,_0x3c329b){return _0x2cd87a===_0x3c329b;},'GmdiU':function(_0x56e21a,_0x31819e){return _0x56e21a===_0x31819e;},'HhwIE':'XpcHV','wWLxj':function(_0x22e182,_0x1bedd7){return _0x22e182-_0x1bedd7;},'PTQOc':_0x586988(0x410)+_0x586988(0xa09)+_0x586988(0x29a),'ABsBd':function(_0x31aabe,_0x51fc34){return _0x31aabe+_0x51fc34;},'XiEzG':function(_0x54b6a0,_0x44a1ca){return _0x54b6a0(_0x44a1ca);},'wBXto':function(_0x4d5ab7,_0x58fd7a){return _0x4d5ab7!==_0x58fd7a;},'SHJPc':_0x586988(0x40e),'gksuD':function(_0x1b9125,_0x359bb7){return _0x1b9125!==_0x359bb7;},'PBeKr':function(_0x5db2dc,_0x44f96d){return _0x5db2dc>_0x44f96d;},'GlhUw':function(_0x3661ec,_0x315bab){return _0x3661ec+_0x315bab;},'zeLMc':_0x586988(0xdaa)+'c:\x20','imUFG':function(_0x25e7b7,_0x3c8f27){return _0x25e7b7*_0x3c8f27;},'XzOdb':function(_0x1d2e2f,_0x44d5c0){return _0x1d2e2f*_0x44d5c0;},'XpIve':function(_0x290192,_0x433282){return _0x290192-_0x433282;},'SQlNJ':function(_0x38dc79,_0x3c4c1e){return _0x38dc79+_0x3c4c1e;},'gLlEt':function(_0x15d6d8,_0x168c18){return _0x15d6d8*_0x168c18;},'YLdGJ':function(_0x1b2dfb,_0x14885){return _0x1b2dfb+_0x14885;},'QKEgx':'LVLEa','eUBUk':function(_0x13deb9,_0x11bdae){return _0x13deb9>_0x11bdae;},'MtFsW':function(_0x1bde8c){return _0x1bde8c();},'reigp':function(_0x3d6dc2,_0x2a212e){return _0x3d6dc2(_0x2a212e);},'hGFHQ':function(_0x4cdabd,_0x4907c8,_0x35a7fb){return _0x4cdabd(_0x4907c8,_0x35a7fb);},'rDnMq':function(_0x251273,_0x187d20){return _0x251273(_0x187d20);},'FtWyr':_0x586988(0x7a0)+_0x586988(0x2c6),'pjVHV':_0x586988(0xbe1)+_0x586988(0x2f1)+_0x586988(0x4c2),'sfpQH':function(_0x3c1e97,_0x5b23ae){return _0x3c1e97!==_0x5b23ae;},'qYKKE':_0x586988(0x6e6),'SSqPQ':function(_0x143e73,_0x41cd23){return _0x143e73>_0x41cd23;},'BovdT':function(_0x11df6c,_0x4854cc){return _0x11df6c*_0x4854cc;},'cMBhb':_0x586988(0xa27)+'ositi'+'on','YyWaX':function(_0x5ec508,_0x201d00,_0x105ff0){return _0x5ec508(_0x201d00,_0x105ff0);},'rPAdH':function(_0x500b45,_0x4e72b9){return _0x500b45===_0x4e72b9;},'nuRnE':function(_0x2a832d,_0x4029cb){return _0x2a832d(_0x4029cb);},'AiUIj':function(_0x41d2c1,_0xaa416f){return _0x41d2c1<_0xaa416f;},'SHZUR':'camer'+'a\x20tra'+_0x586988(0x225)+'m','Baxnw':'camer'+'a\x20fov'+'\x20only','wnCuz':function(_0xd0a92b,_0x4d0cfc){return _0xd0a92b+_0x4d0cfc;},'prpJV':function(_0x80cb41,_0x40487d){return _0x80cb41/_0x40487d;},'KSuIx':')\x20-\x20f'+_0x586988(0x4af)+'ly','VQRWa':function(_0x20647b,_0x5da9e1){return _0x20647b/_0x5da9e1;},'StuOo':_0x586988(0x93e)+_0x586988(0xe04)+'ov','MaXwb':function(_0x1d976a){return _0x1d976a();},'bcfce':function(_0x58752c,_0x549f51){return _0x58752c/_0x549f51;},'lPvOf':function(_0x49e77b,_0x5427ea){return _0x49e77b+_0x5427ea;},'qhEbT':function(_0x1fcf58,_0x5e13aa){return _0x1fcf58<_0x5e13aa;},'UgZaS':function(_0x3f61ed,_0x10d024){return _0x3f61ed*_0x10d024;},'szhnh':function(_0x3f4231,_0x26aac8){return _0x3f4231*_0x26aac8;},'zeeFA':_0x586988(0x8db)+_0x586988(0x600)+_0x586988(0x3ec)+'nc','VeFux':_0x586988(0x1ec),'aFnaz':function(_0x49cbd9,_0x15f300){return _0x49cbd9===_0x15f300;},'PnRvb':_0x586988(0x213)+'me.re'+'solve'+'Game('+')','ENHJX':_0x586988(0x8e6),'AjoHw':function(_0x563933,_0x376976){return _0x563933(_0x376976);},'VGOEp':_0x586988(0xd55),'GACIa':_0x586988(0x18c),'WJRTJ':_0x586988(0xc52)+_0x586988(0x207)+'ok\x20ye'+'t','UQmyj':function(_0x42dd43,_0x4905ac){return _0x42dd43===_0x4905ac;},'zFtOn':function(_0x34fae2,_0x282367){return _0x34fae2<_0x282367;},'TEmnC':function(_0x5c0044,_0x1790b3){return _0x5c0044!==_0x1790b3;},'SrxRr':'hoqTO','MDDRo':'yIdIt','YKFCW':_0x586988(0x528),'IGLft':_0x586988(0x726),'UxTHI':function(_0x5a3faf,_0x1125ab){return _0x5a3faf+_0x1125ab;},'oyfwg':_0x586988(0x9c1),'IltaK':_0x586988(0xc40)+'r','aYybJ':function(_0x2e6908,_0x88eb20){return _0x2e6908(_0x88eb20);},'eAHJc':function(_0x22beb3,_0x300a0d){return _0x22beb3(_0x300a0d);},'JOYBQ':function(_0x423cf1,_0x21e25d){return _0x423cf1<_0x21e25d;},'QUluX':_0x586988(0x54c)+'\x20','aHLAO':_0x586988(0x3af)+_0x586988(0xb98)+'nge','Qhvep':function(_0x282cbd,_0xa5a5d5){return _0x282cbd+_0xa5a5d5;},'UOZzj':'MjYXQ','hNOjA':function(_0x5565d4){return _0x5565d4();},'EgolB':function(_0x4e00b6,_0x5504a6){return _0x4e00b6/_0x5504a6;},'bbSZo':function(_0x2a9b12,_0x2edc46){return _0x2a9b12+_0x2edc46;},'pOfLa':function(_0x415b8d,_0x167a3c){return _0x415b8d*_0x167a3c;},'jFppU':function(_0x431940,_0xe7d40a){return _0x431940>_0xe7d40a;},'WqVIl':function(_0x40f972,_0x16196e){return _0x40f972*_0x16196e;},'jTwim':function(_0x22ae6e,_0x5a4070,_0x324623){return _0x22ae6e(_0x5a4070,_0x324623);},'ItxFV':'sk-ca'+_0x586988(0x5ae)+'ad','cDdHw':'<stro'+'ng>','qsAqo':_0x586988(0x263)+_0x586988(0x6e5),'eTmmj':_0x586988(0x89f),'lDGjk':'vmBHW','QKVDb':function(_0x2c79f3){return _0x2c79f3();},'fTNWa':_0x586988(0xbb1),'BoIYq':function(_0x37f29a){return _0x37f29a();},'JHJvG':function(_0x441b35,_0x1856c3,_0x38dca0){return _0x441b35(_0x1856c3,_0x38dca0);},'ijVNL':_0x586988(0x82e)+'n','DSrHW':'xBuFs','ymTXL':'fmSSE','XxbLi':function(_0x459a83){return _0x459a83();},'Flucp':function(_0x1d3a41,_0x6c12f6){return _0x1d3a41(_0x6c12f6);},'DVNMB':function(_0x23e8dc,_0x567007){return _0x23e8dc/_0x567007;},'TMiXn':function(_0x31cb43,_0x59cebe){return _0x31cb43-_0x59cebe;},'zFXmR':_0x586988(0xc6c),'VXCaz':'BsFbd','YIsGf':function(_0x3821c5,_0x4dbf78){return _0x3821c5(_0x4dbf78);},'YUHhr':_0x586988(0x8a7)+_0x586988(0x28e),'HFsHH':_0x586988(0x6f6),'nExOc':_0x586988(0x671),'wpLbt':_0x586988(0x7fb)+'l','vmbRv':_0x586988(0xa24)+'bel','BzcAO':function(_0x51d1dd,_0x179940){return _0x51d1dd/_0x179940;},'RBnfq':function(_0x105aef,_0x3a07d0){return _0x105aef===_0x3a07d0;},'NyBgr':_0x586988(0xbc2),'bmnQi':function(_0x405c49,_0x14e2af){return _0x405c49/_0x14e2af;},'aZjER':function(_0x1ba598,_0x265c23){return _0x1ba598+_0x265c23;},'TYofy':'\x20on\x20','mrsVL':'Multi'+'plies'+_0x586988(0x270)+_0x586988(0x559)+_0x586988(0x8e6)+'\x20fiel'+'ds\x20on'+'ly.\x20H'+_0x586988(0x166)+_0x586988(0xcdb)+'p\x20and'+'\x20jump'+_0x586988(0xcff)+_0x586988(0xb68)+_0x586988(0x485),'WspkM':function(_0x23635d,_0x48d732){return _0x23635d===_0x48d732;},'sCXlP':function(_0xcbc3be,_0x2be923){return _0xcbc3be(_0x2be923);},'UWmuj':_0x586988(0xac2),'lWFjo':_0x586988(0x46b),'cwnRw':_0x586988(0x98a)+'|0|1','WrkBr':_0x586988(0x2fe)+'ON','HMQha':function(_0x4c4084,_0x1f1195){return _0x4c4084!==_0x1f1195;},'QAYAI':'borde'+_0x586988(0x2ef)+'ius:9'+_0x586988(0x7d6)+_0x586988(0x56e)+_0x586988(0x6d6)+_0x586988(0xaef)+_0x586988(0x54b)+_0x586988(0x72a)+'x/1.4'+_0x586988(0xc04)+_0x586988(0xc4f)+_0x586988(0x433)+_0x586988(0xba5)+'as,mo'+_0x586988(0xa55)+_0x586988(0x24f),'JWPqz':function(_0x2530c0,_0x4a18d7){return _0x2530c0<_0x4a18d7;},'ujepO':function(_0x25d780,_0x245992){return _0x25d780!==_0x245992;},'hlmUp':'rJLwM','uKbhN':function(_0x392e3a){return _0x392e3a();},'LyUMI':_0x586988(0xb7e)+_0x586988(0x9b5)+_0x586988(0xcae)+'eadab'+'le','Xuvhg':_0x586988(0xc0c),'sFMUj':_0x586988(0x4fe)+'t','vDqUU':function(_0x2682aa,_0x1a0019){return _0x2682aa(_0x1a0019);},'nrlhJ':_0x586988(0x53f)+'ed','UKmJp':function(_0x127bba,_0xcf943d,_0x1736d3,_0x44c3b2,_0xf4d452,_0x258e8a){return _0x127bba(_0xcf943d,_0x1736d3,_0x44c3b2,_0xf4d452,_0x258e8a);},'RAuCW':function(_0x528c3c,_0x1bb1ce,_0x47271c){return _0x528c3c(_0x1bb1ce,_0x47271c);},'dSPLO':'Multi'+'plier','ddWlu':_0x586988(0xc70)+_0x586988(0xc12),'VtMQX':'sk-bt'+'n','ntvcz':_0x586988(0xb70)+_0x586988(0x9d9)+_0x586988(0x48e)+'9)','IEkjw':function(_0x5c7117,_0xfe92a3,_0x129c3d,_0x58ce52){return _0x5c7117(_0xfe92a3,_0x129c3d,_0x58ce52);},'OsWvq':_0x586988(0x1cf)+'ls','pvbEV':'Radar','bPKWH':function(_0x37fc3f,_0xc36966){return _0x37fc3f(_0xc36966);},'ILOhQ':_0x586988(0x267)+_0x586988(0x608)+_0x586988(0x5cf)+_0x586988(0x60e)+_0x586988(0xbc9)+_0x586988(0x264)+_0x586988(0xd4e)+'ds\x20on'+_0x586988(0x89c)+_0x586988(0xcd6)+'ns.','erWYQ':_0x586988(0xd7b),'rdPoa':'world'+'\x20unit'+'s\x20acr'+_0x586988(0x48b)+_0x586988(0x302)+_0x586988(0xc7d),'ltqZI':function(_0x39f317,_0x282fcc){return _0x39f317(_0x282fcc);},'Iktzv':_0x586988(0xb7e)+_0x586988(0x282)+'s\x20uni'+_0x586988(0x510)+_0x586988(0x6b4),'kKWbV':'Field'+_0x586988(0x655)+_0x586988(0x43b)+'s\x20','xNXAV':_0x586988(0x524)+_0x586988(0x7f9)+_0x586988(0x377)+_0x586988(0x32f)+_0x586988(0x3f7)+'\x20Rese'+'t\x20it\x20'+_0x586988(0x5f1)+'.','AevKj':function(_0x4eedc8,_0x29aa80,_0x130f75,_0xbe24df,_0xf314f4,_0x3a1e0f){return _0x4eedc8(_0x29aa80,_0x130f75,_0xbe24df,_0xf314f4,_0x3a1e0f);},'Bhwah':_0x586988(0xac7)+_0x586988(0x655)+'iew','RaCSF':'Reset'+_0x586988(0x7e2),'NmdRg':'click','mTdmd':function(_0x513ca4,_0x334d4a){return _0x513ca4+_0x334d4a;},'AchUa':'view:'+'\x20','DUFvm':function(_0x446033,_0x4bd6cd){return _0x446033+_0x4bd6cd;},'LoYcx':_0x586988(0xc7b)+'h\x20','uIOAZ':function(_0x3d9287,_0x4e7c10){return _0x3d9287+_0x4e7c10;},'bmeOF':function(_0x1be8b0,_0xf9f6cd){return _0x1be8b0+_0xf9f6cd;},'kZqEO':function(_0x54fff6,_0x25f476){return _0x54fff6+_0x25f476;},'sMRnP':_0x586988(0x258)+'from\x20'+'Mouse'+'Look\x20'+'gette'+_0x586988(0x9a7)+'w\x20\x20\x20','cblaZ':'GUESS'+'ING\x20f'+'rom\x20s'+'truct'+_0x586988(0xe0b)+_0x586988(0x738)+_0x586988(0x2cf)+'and\x20+'+'0x1C\x0a'+'the\x20a'+'ngle\x20'+_0x586988(0xb2a)+'\x20have'+_0x586988(0x83a)+_0x586988(0xbef)+'\x20yet','saXOm':function(_0xc82735,_0x524369){return _0xc82735+_0x524369;},'oaUBW':_0x586988(0xc9a)+_0x586988(0xd52),'eHMpT':_0x586988(0x2a5)+_0x586988(0x58a)+'regis'+_0x586988(0x879),'MAsDl':'from\x20'+'insta'+_0x586988(0x876)+_0x586988(0x1e9),'YSLeb':function(_0x169122,_0x352bd0){return _0x169122+_0x352bd0;},'HnDsZ':'\x20MB\x20@'+'\x20','KOFjh':function(_0x497611,_0xf9a9ed){return _0x497611(_0xf9a9ed);},'beCbm':_0x586988(0xa5c)+_0x586988(0x9bf)+'ut\x20yo'+'u','jKPjx':_0x586988(0x664)+'a','LtBaZ':function(_0x1467ef,_0x17ef3c){return _0x1467ef===_0x17ef3c;},'TMIdO':function(_0x560411,_0x58245e){return _0x560411(_0x58245e);},'jhwDG':'Sessi'+'on','vbCWc':_0x586988(0x8a0)+'r','qNWQM':_0x586988(0xd5d)+'ion','rKFsT':'FPSco'+_0x586988(0x6a2)+'ler+','PbLqh':'Sprin'+_0x586988(0x961)+'ed','afOXA':'0x40','BnTaZ':'Jump\x20'+'heigh'+'t','fgRiu':'0x11C','AgoSf':_0x586988(0xb78)+'ntrol'+_0x586988(0x24a),'nHcYl':function(_0x18a396,_0x201805,_0x172051,_0x2e7b33){return _0x18a396(_0x201805,_0x172051,_0x2e7b33);},'sthHR':_0x586988(0xcbe)+'hScri'+'pt','dNrml':function(_0x4a60b9,_0x4ed13f){return _0x4a60b9(_0x4ed13f);},'XBnFd':'no\x20wa'+'rning'+'s','nVamw':'sk-pr'+'e','jxnGQ':function(_0x2219ba,_0x2256bf,_0xa783a0){return _0x2219ba(_0x2256bf,_0xa783a0);},'xRXQQ':_0x586988(0x86c)+_0x586988(0x28d)+_0x586988(0x9b9)+_0x586988(0x52c)+'rd','DazBC':function(_0x50fd6c,_0x23cbee,_0x3a733a,_0x548efc){return _0x50fd6c(_0x23cbee,_0x3a733a,_0x548efc);},'Xtieq':function(_0x57b91b,_0x4c3038){return _0x57b91b!==_0x4c3038;},'vpDdd':_0x586988(0x4c3),'Mgepr':function(_0x5a8cec,_0x45bdce){return _0x5a8cec===_0x45bdce;},'TWBaV':function(_0x12eb8d,_0x453524){return _0x12eb8d===_0x453524;},'vtnab':function(_0x506d8c,_0x1c6b38){return _0x506d8c-_0x1c6b38;},'nKDmw':function(_0x5c5885,_0x49ccb5){return _0x5c5885+_0x49ccb5;},'kScab':function(_0x298def,_0x3944f5){return _0x298def===_0x3944f5;},'RacCY':function(_0xb0eba4,_0x297a05){return _0xb0eba4-_0x297a05;},'OuKvH':_0x586988(0xacb)+_0x586988(0x3cc),'FISsY':_0x586988(0x331),'kTgmX':_0x586988(0x954),'weCXN':'mouse'+'move','qVJpj':'mouse'+'up','XZowF':_0x586988(0x30d),'qBIvi':_0x586988(0x33e)+'a-men'+'u-css','rrevx':function(_0x40df1f,_0x7f129b,_0x5e2f9d){return _0x40df1f(_0x7f129b,_0x5e2f9d);},'toUiQ':'mn-lo'+'go','WIIDU':_0x586988(0x72c)+'in','DVmRl':_0x586988(0x7ce)+'tles','kgEYo':function(_0x569ddf,_0xf051a1,_0x4b362c,_0x381136){return _0x569ddf(_0xf051a1,_0x4b362c,_0x381136);},'CQOzd':_0x586988(0x8c9)+'b','CpubX':function(_0x439d53,_0x44308a,_0x4c13c4,_0x55a8ae){return _0x439d53(_0x44308a,_0x4c13c4,_0x55a8ae);},'usYFP':'<svg\x20'+_0x586988(0xcb0)+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+'<path'+_0x586988(0x73c)+_0x586988(0xb57)+'2\x2012M'+'18\x206\x20'+'6\x2018\x22'+_0x586988(0x462)+'vg>','HTZIv':'mn-co'+'ls','zxaKu':function(_0xe273b1,_0x14ea6b,_0x30d769){return _0xe273b1(_0x14ea6b,_0x30d769);},'Zaswk':function(_0xf2fe4e,_0x224fec){return _0xf2fe4e<_0x224fec;},'QKNMy':function(_0x136692,_0x55dc01,_0x56982a,_0x4dc04a){return _0x136692(_0x55dc01,_0x56982a,_0x4dc04a);},'qVJjr':'mn-ta'+'b','FFtWF':'<smal'+'l>','IGpuN':_0x586988(0xcbb)+_0x586988(0x712),'kzppY':function(_0x5b60b3,_0x4bc486){return _0x5b60b3+_0x4bc486;},'xyBnA':_0x586988(0x6a8)+'check'+'ed','jQmOr':_0x586988(0x36f),'Bwuzh':'\x20acti'+'ve','URsPe':function(_0x3ba07d,_0x279bda){return _0x3ba07d+_0x279bda;},'afquY':_0x586988(0x6a7)+_0x586988(0x3d1),'RDvPm':'\x20show'+'n','SNxoq':_0x586988(0xc02),'Epeit':function(_0x31e711,_0x1d4016){return _0x31e711(_0x1d4016);},'vIJZx':'HCOHP','YqXQT':function(_0x2b052d,_0x266a13){return _0x2b052d+_0x266a13;},'KPofD':'Regis'+_0x586988(0x879)+'\x20','ulQYP':_0x586988(0x713)+_0x586988(0x878)+_0x586988(0xaf9)+_0x586988(0x305)+_0x586988(0x8ae)+'id\x20do'+'es\x20no'+_0x586988(0x391)+_0x586988(0x548)+_0x586988(0x477)+'ild.','QLHup':function(_0x17cd56,_0x26c6d8){return _0x17cd56<_0x26c6d8;},'KbFMX':_0x586988(0x277),'AOQve':function(_0x84814,_0x125e51){return _0x84814+_0x125e51;},'vrjNm':function(_0x25c3e7,_0x32f595){return _0x25c3e7+_0x32f595;},'VEXAp':function(_0x59227d,_0x2fbba9){return _0x59227d+_0x2fbba9;},'SSVyr':_0x586988(0x845)+'playe'+'rs\x20','tzOie':function(_0x4b6000,_0x281376){return _0x4b6000+_0x281376;},'FjiPU':function(_0x274386,_0x1437b7){return _0x274386+_0x1437b7;},'DjMIo':'\x20/\x20','qMtMj':function(_0x55590e,_0x170fd4){return _0x55590e(_0x170fd4);},'CMMuN':_0x586988(0x78e)+'he\x20li'+_0x586988(0x43d)+'nager','frkTX':function(_0x5231e3,_0x2d0ab1){return _0x5231e3===_0x2d0ab1;},'KftzK':function(_0x5b97b1,_0x19e64d){return _0x5b97b1!==_0x19e64d;},'gRyNM':function(_0x5547a0,_0x1ba964){return _0x5547a0+_0x1ba964;},'FvIQs':'UWMK\x20'+_0x586988(0xa36)+'ved\x20','OKARC':'AVQhx','holDV':function(_0x26d73c,_0x4d0e61){return _0x26d73c+_0x4d0e61;},'pMUHl':function(_0x5cce46,_0x20b2b3){return _0x5cce46+_0x20b2b3;},'WwZmD':_0x586988(0xc82)+'ion:f'+_0x586988(0x34d)+_0x586988(0x7a1)+'12px;'+'top:1'+_0x586988(0x3f1)+_0x586988(0x275)+'x:214'+_0x586988(0x634)+'99;cu'+'rsor:'+_0x586988(0x210)+_0x586988(0x622)+_0x586988(0x8ce)+_0x586988(0xa0f)+_0x586988(0xc96),'cQCWM':_0x586988(0x33e)+'a','wSkHv':function(_0x48aed6,_0xfc6399){return _0x48aed6(_0xfc6399);},'rQFVI':function(_0x448acb,_0x215484){return _0x448acb!==_0x215484;},'YEfNS':'SUnqt','irSkr':_0x586988(0x2ca),'RRKII':'mHNYd','rHgDY':function(_0x1a70ea,_0x378d82){return _0x1a70ea+_0x378d82;},'zrvrc':function(_0x381c83,_0x1a235c){return _0x381c83===_0x1a235c;},'deGYh':_0x586988(0x53e),'MGpKt':function(_0x31225f,_0x35be56){return _0x31225f===_0x35be56;},'krjac':_0x586988(0xc35),'iUrNO':'EifMj','JORFq':function(_0x14f0da,_0x2d211b){return _0x14f0da+_0x2d211b;},'PKeDx':function(_0x2f8cdd,_0x1c72e1){return _0x2f8cdd*_0x1c72e1;},'aDxeH':function(_0xa17f7e,_0x11b4bd){return _0xa17f7e===_0x11b4bd;},'jORPu':function(_0x3ec951,_0x4bdd62){return _0x3ec951<_0x4bdd62;},'oVBTz':function(_0x129ef8,_0x5f2b41){return _0x129ef8!==_0x5f2b41;},'naRDX':function(_0x5767d2,_0x15e832){return _0x5767d2*_0x15e832;},'SsQIQ':function(_0x9cfc7e,_0x378e7e){return _0x9cfc7e>_0x378e7e;},'xRbZC':function(_0x1d4db1,_0x21965c,_0x45a3ef,_0x18f10c){return _0x1d4db1(_0x21965c,_0x45a3ef,_0x18f10c);},'nFkps':function(_0x206639,_0x2b5bc8,_0x28fbac,_0x5ae28a){return _0x206639(_0x2b5bc8,_0x28fbac,_0x5ae28a);},'vrCLM':function(_0x422ee0,_0x206b0b){return _0x422ee0+_0x206b0b;},'PEHax':function(_0x375d82,_0x3acc89){return _0x375d82(_0x3acc89);},'qNutK':_0x586988(0x8d1),'YmprD':function(_0x3b92a6,_0x300a89,_0x4bb2c7){return _0x3b92a6(_0x300a89,_0x4bb2c7);},'OXzwY':function(_0x2f8e31,_0xd1bfd3){return _0x2f8e31!==_0xd1bfd3;},'tIJYl':function(_0x1cbef2,_0x1a86ed){return _0x1cbef2-_0x1a86ed;},'Hjijp':'sakur'+_0x586988(0xd96),'aMEqc':_0x586988(0xc82)+'ion:f'+'ixed;'+_0x586988(0x264)+_0x586988(0x310)+_0x586988(0xbc1)+'46px;'+_0x586988(0x6cf)+'ex:21'+_0x586988(0xda5)+'646;p'+'ointe'+'r-eve'+_0x586988(0x739)+'one;','esIkj':_0x586988(0x6f3)+'round'+_0x586988(0xc17)+'(21,1'+'2,29,'+'.72);'+_0x586988(0x6d7)+_0x586988(0x39a)+_0x586988(0xc67)+'d\x20rgb'+_0x586988(0x416)+',143,'+'177,.'+_0x586988(0x6a4)+_0x586988(0xbd0)+'radiu'+_0x586988(0x435)+'x;','DfJAI':function(_0x265619,_0xe02b6b){return _0x265619+_0xe02b6b;},'lDWZR':'<div\x20'+_0x586988(0x491)+'akura'+_0x586988(0x338)+_0x586988(0x389)+_0x586988(0x770)+_0x586988(0xb96)+'-alig'+_0x586988(0x7b2)+_0x586988(0xd9f)+_0x586988(0xb45)+'>','GoDfu':_0x586988(0x98a)+'|0|5|'+_0x586988(0xc49),'zoKDE':_0x586988(0xc82)+_0x586988(0x985)+'ixed;'+_0x586988(0x7a1)+'0;top'+_0x586988(0xb8b)+'index'+':2147'+_0x586988(0xadf)+_0x586988(0xe10)+_0x586988(0xab6)+'event'+_0x586988(0xc79)+'e;','OMsrM':_0x586988(0x96c)+'s','zMJHu':'LsqYU','mSKFv':function(_0xbe8934,_0x4fb7a1){return _0xbe8934!==_0x4fb7a1;},'ywuki':_0x586988(0x33e)+_0x586988(0x764)+'v2','OwidW':function(_0x3de40c,_0x541b72,_0x4f0b5e){return _0x3de40c(_0x541b72,_0x4f0b5e);},'MCUNW':_0x586988(0x4d2),'ciyta':function(_0x58228d,_0x204adb){return _0x58228d*_0x204adb;},'TpBiT':function(_0x5142a4,_0x2c9a02){return _0x5142a4<_0x2c9a02;},'YXKDM':function(_0x2ef143,_0x119843){return _0x2ef143<_0x119843;},'Qfhcv':function(_0x206868,_0x34135f){return _0x206868*_0x34135f;},'DXpmv':function(_0x274eab,_0xbc2934){return _0x274eab-_0xbc2934;},'GXjDS':function(_0x3e7f57,_0x14342a){return _0x3e7f57*_0x14342a;},'Pbxrp':function(_0x1432f3,_0x56b0a5){return _0x1432f3>_0x56b0a5;},'vaDgI':function(_0x3ae15e,_0x2bb99e){return _0x3ae15e===_0x2bb99e;},'rChvT':_0x586988(0x9dd),'mJVmz':function(_0x3c1a87,_0x342a7f){return _0x3c1a87*_0x342a7f;},'CPOqI':function(_0x429afb,_0x3b13a1){return _0x429afb*_0x3b13a1;},'zINML':function(_0x1a856b,_0x27dfcc){return _0x1a856b*_0x27dfcc;},'vqxoH':_0x586988(0x5ad),'tLCTx':function(_0x9faf32,_0x3eefcd){return _0x9faf32/_0x3eefcd;},'KqjsS':function(_0x43e782,_0x2cff40){return _0x43e782+_0x2cff40;},'yyUyS':function(_0x5b48b7,_0x5b8f3d){return _0x5b48b7*_0x5b8f3d;},'LMvAZ':function(_0x4b8d4a,_0x1e094b){return _0x4b8d4a*_0x1e094b;},'Shxjr':function(_0x44aa37,_0x41b010,_0x4e55f6,_0x341e92,_0x6eeaf6){return _0x44aa37(_0x41b010,_0x4e55f6,_0x341e92,_0x6eeaf6);},'HWuxB':function(_0xfd3295,_0x31684b){return _0xfd3295/_0x31684b;},'cchbs':function(_0x375c21,_0x196a82){return _0x375c21*_0x196a82;},'uOsai':function(_0x982451,_0x491e40,_0x9afda1,_0x59f0a3,_0xf982b0){return _0x982451(_0x491e40,_0x9afda1,_0x59f0a3,_0xf982b0);},'RdMHh':function(_0x57156,_0x1ad999,_0x49b770,_0x37d861,_0x1c0458){return _0x57156(_0x1ad999,_0x49b770,_0x37d861,_0x1c0458);},'mlnqv':'rgba('+_0x586988(0xd73)+_0x586988(0x945)+',.9)','TiqCP':_0x586988(0x6bc)+'255,1'+_0x586988(0x3e5)+_0x586988(0x9c0)+')','AcUjJ':function(_0x39ec23,_0xd94e77){return _0x39ec23/_0xd94e77;},'KFfHf':function(_0x212a3d,_0x5132b1){return _0x212a3d===_0x5132b1;},'cuBPG':'AkKUl','fDxFS':function(_0x5dfb66,_0x3535a4){return _0x5dfb66<=_0x3535a4;},'GLrcE':function(_0x5245fa,_0xa61d45){return _0x5245fa-_0xa61d45;},'JbRfK':function(_0x2a7109,_0x221c58){return _0x2a7109-_0x221c58;},'FhbKa':'rIDjg','tHFkO':function(_0x3a74f6,_0x1a82ba){return _0x3a74f6===_0x1a82ba;},'ZtOuD':function(_0x42d1ef,_0x260ec0){return _0x42d1ef===_0x260ec0;},'bYVBC':function(_0x5474cb,_0x1b72f4){return _0x5474cb+_0x1b72f4;},'yTQqV':function(_0x26a115,_0x2b8700){return _0x26a115!==_0x2b8700;},'CNyba':function(_0x51bf1d,_0xd2c96c){return _0x51bf1d-_0xd2c96c;},'LNFWy':function(_0x343f64,_0xf2517){return _0x343f64+_0xf2517;},'zBitI':function(_0x4606f2,_0x3479d0){return _0x4606f2*_0x3479d0;},'QPkbM':function(_0x25d3f0,_0x446d7b){return _0x25d3f0+_0x446d7b;},'yqHBl':function(_0x4b84b7,_0x2fd423){return _0x4b84b7*_0x2fd423;},'eXSlX':function(_0x15b004,_0x1ec88a){return _0x15b004+_0x1ec88a;},'MJdKg':'\x20·\x20','nLXjo':_0x586988(0xad1)+'am','evZUF':function(_0x4285a4,_0x433f7c){return _0x4285a4!==_0x433f7c;},'RpkPn':'YIKjx','iOFJP':'EISUd','HOTaz':function(_0x1cbc2a){return _0x1cbc2a();},'Qbqjd':_0x586988(0x290),'QiOCF':function(_0x3419bc,_0x2a3190){return _0x3419bc(_0x2a3190);},'HIvSA':_0x586988(0x88a)+_0x586988(0x7ff)+_0x586988(0x957)+_0x586988(0x5da)+'Runti'+'me\x20in'+_0x586988(0x87a)+_0x586988(0xa21)+_0x586988(0x749)+_0x586988(0x5ba)+_0x586988(0x96a)+_0x586988(0x973)+'oses.','xNLaD':'zoAfX','IWUrF':'NVwJq','bufJV':function(_0x271213,_0x29c979){return _0x271213(_0x29c979);},'QmRti':function(_0x1c8182,_0x4d0a05){return _0x1c8182/_0x4d0a05;},'fIqve':function(_0x28603b,_0x34cbb0){return _0x28603b+_0x34cbb0;},'nhEpw':function(_0x5183c0,_0x2211b1){return _0x5183c0!==_0x2211b1;},'GidUl':function(_0xec33da){return _0xec33da();},'ppafe':function(_0x30f725,_0x332d85){return _0x30f725===_0x332d85;},'cdvCI':_0x586988(0xb33),'WTuvd':function(_0x2d8f22,_0x3a85a9){return _0x2d8f22(_0x3a85a9);},'IGnqT':function(_0x57a538,_0x3a94ef){return _0x57a538(_0x3a94ef);},'UueLi':function(_0x52d124,_0x51f065){return _0x52d124===_0x51f065;},'ibhTB':_0x586988(0x3a8),'MSROm':function(_0x693157){return _0x693157();},'WGgML':function(_0xa9ed3d,_0x320357){return _0xa9ed3d+_0x320357;},'uRZQk':'UWMK\x20'+_0x586988(0xdab)+_0x586988(0xb37)+_0x586988(0x50e),'jgbEi':function(_0x3f8445,_0x2b12ab){return _0x3f8445>_0x2b12ab;},'SWDtA':_0x586988(0x2b5),'foWAQ':_0x586988(0xbcd)+_0x586988(0xdba),'qBZFN':function(_0x25efcf,_0x38027e){return _0x25efcf===_0x38027e;},'xXtjp':function(_0x297ec9,_0x845078){return _0x297ec9+_0x845078;},'RgeWI':'repla'+_0x586988(0x780)+_0x586988(0x837)+'iffer'+'ent\x20i'+_0x586988(0x753)+'ce,\x20s'+_0x586988(0xcee)+'are\x20a'+_0x586988(0x9fc)+'\x20the\x20'+_0x586988(0xd6c)+_0x586988(0x5fb)+_0x586988(0x170)+'r\x20','lTSTC':function(_0x3827aa,_0x84a4d5){return _0x3827aa===_0x84a4d5;},'RrQhB':_0x586988(0x236),'TjvZd':_0x586988(0x5bd)+'n._ru'+_0x586988(0xd4f)+'\x20is\x20n'+_0x586988(0x478)+_0x586988(0x79d)+'Unity'+'WebMo'+'dkit.'+_0x586988(0x213)+_0x586988(0x71c)+_0x586988(0xc4c)+'lugin'+_0x586988(0xd09)+'built'+'\x20','UcpEF':function(_0x4687c7,_0x15b70c){return _0x4687c7+_0x15b70c;},'QdvNP':_0x586988(0x3a1),'IKEEu':function(_0x23584c,_0x36aec6){return _0x23584c+_0x36aec6;},'jqSsa':_0x586988(0x1c8)+_0x586988(0x83f)+'red\x20a'+'t\x20','XsvFg':_0x586988(0x7fe)+_0x586988(0x377)+'refer'+'ence\x20'+'exist'+_0x586988(0xc4a)+'en\x20an'+_0x586988(0x1fc)+_0x586988(0x740)+'eacha'+'ble\x20n'+_0x586988(0xdf0),'NMCuj':_0x586988(0x1c2)+'\x20inst'+_0x586988(0x933)+'not\x20r'+'esolv'+'ed\x20ye'+_0x586988(0xc41)+_0x586988(0x7a6)+'\x20','UTyTm':function(_0x3e8eed,_0x4b99eb){return _0x3e8eed===_0x4b99eb;},'NEejj':'windo'+'w.Uni'+_0x586988(0x663)+'Modki'+_0x586988(0xd78)+_0x586988(0x4ab)+'pper\x20'+_0x586988(0xdd5)+_0x586988(0x4cb)+_0x586988(0xda2)+'pture'+_0x586988(0x754)+_0x586988(0xcac)+_0x586988(0x94a)+_0x586988(0x1a8),'gkMDJ':function(_0x26bf78,_0x5c0169){return _0x26bf78+_0x5c0169;},'bYpRP':function(_0xac3924,_0x39d827){return _0xac3924+_0x39d827;},'oxcTA':function(_0x537557,_0x47d629){return _0x537557+_0x47d629;},'ggCPq':function(_0x560546,_0x3d3383){return _0x560546+_0x3d3383;},'tPhGf':function(_0x302e60,_0x8f82a6){return _0x302e60===_0x8f82a6;},'xHXaJ':_0x586988(0x80d),'iiILx':_0x586988(0xa31)+_0x586988(0xcff)+'appli'+'ed\x20bu'+'t\x20no\x20'+_0x586988(0xb78)+_0x586988(0x6a2)+'ler\x20h'+'as\x20fi'+_0x586988(0x214)+_0x586988(0xb0b),'lzpAr':'Eithe'+_0x586988(0x8ed)+_0x586988(0xcff)+'not\x20i'+'n\x20a\x20r'+'ound,'+_0x586988(0x86d)+'he\x20ho'+_0x586988(0xbcc)+_0x586988(0x1c9)+_0x586988(0xd8e)+'ong\x20o'+_0x586988(0x5fe)+'ad.','PhSZW':'%c[sa'+_0x586988(0xa1a)+'\x20Skil'+_0x586988(0x6e7)+_0x586988(0xb0a)+'rt','kNTsj':function(_0x28f67a,_0x45990f,_0x1e67a3){return _0x28f67a(_0x45990f,_0x1e67a3);},'RKgnP':'Mqwmm','obDCt':_0x586988(0x701)+'ER\x20UW'+'MK\x20CO'+_0x586988(0x70a)+_0x586988(0xcfb)+_0x586988(0x287)+_0x586988(0x79d)+_0x586988(0x1c2)+'WebMo'+_0x586988(0x82c)+_0x586988(0x895)+'Runti'+_0x586988(0x41d)+'\x20arme'+'d\x20was'+'\x20','ZWIVD':_0x586988(0xa1f),'hHtCF':function(_0xece2c,_0x40d593,_0x5070a2){return _0xece2c(_0x40d593,_0x5070a2);},'sJfJR':function(_0x1d0ac6,_0x4f644d){return _0x1d0ac6===_0x4f644d;},'MUHeo':'GqNNo','NXiEF':function(_0x12788e){return _0x12788e();},'lFiKi':_0x586988(0x8f0)+'l','MdnoT':'wrapp'+'er','bZnRm':function(_0x15a1aa,_0x19297b){return _0x15a1aa&&_0x19297b;},'VNMdA':_0x586988(0x860)+_0x586988(0x8ee)+_0x586988(0x390)+'WARZ-'+_0x586988(0xaa2)+'=','GJlcE':_0x586988(0x5c3)+'2','PRlzh':'messa'+'ge','qjrmS':_0x586988(0x3dc)+'kura]'+_0x586988(0x473)+_0x586988(0xa75)+_0x586988(0x70e)+'IVE\x20('+'relay'+'\x20up+d'+_0x586988(0x388),'UIgro':function(_0x3615d8,_0x58af6d){return _0x3615d8+_0x58af6d;},'KsIiO':_0x586988(0x5f6)+_0x586988(0x6df)+_0x586988(0xa04)+'0','jLMGh':_0x586988(0x33e)+'a-sw-'+'panel'+'-hidd'+'en','SOcsL':'%c[sa'+_0x586988(0xa1a)+'\x20SW-P'+_0x586988(0x971)+'\x20ACTI'+_0x586988(0xdc5),'licAu':';font'+_0x586988(0x6df)+_0x586988(0xa04)+'0;fon'+_0x586988(0x4b9)+'e:14p'+'x','vbciS':function(_0x4ff56e,_0x345e39,_0x5a84f7){return _0x4ff56e(_0x345e39,_0x5a84f7);},'wXTww':'\u0094\u0090\u0089\u008f\u0089'+_0x586988(0x6d3)+'\u008e','pyFcy':'\u008d\u0091\u008e\u008a\u008a'+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','IfrNg':_0x586988(0xacc)+_0x586988(0x175)+'\u0095','ezkQb':'\u0091\u008f\u0088\u0086\u0091'+_0x586988(0xa16)+'\u0090','gnDVy':'\u0093\u0089\u0095\u0092\u0090'+'\u0092\u008b\u0093\u008b\u0092'+'\u008d','lGlZB':_0x586988(0x8e4)+_0x586988(0x24c)+'\u0093','rdSJk':'\u0087\u008c\u0086\u0089\u0090'+_0x586988(0x74b)+'\u0086','PAmUT':_0x586988(0xc54),'zxfdz':_0x586988(0xabf)+_0x586988(0xa53)+'\u0088','vYEEf':_0x586988(0xddd)+'\u008c\u0087\u0086\u008c\u0092'+'\u008d','tsAUe':'\u008e\u0092\u0091\u0088\u0092'+'\u0090\u0095\u008d\u0090\u0088'+'\u008b','qaEHa':_0x586988(0x53b)+_0x586988(0x20c)+'\u008a','aAaSv':_0x586988(0x691)+_0x586988(0xe19)+'\u0090','YlQmZ':'\u0089\u008c\u0095\u0088\u008a'+_0x586988(0x4b1)+'\u0094','hoAUY':'\u0095\u0092\u0088\u0087\u0092'+_0x586988(0x92b)+'\u0092','TifYs':_0x586988(0x551)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','MbYXU':_0x586988(0xacf)+_0x586988(0x808)+'\u0087','lalYP':'\u0090\u0092\u008e\u008e\u0087'+'\u008f\u008c\u0086\u0091\u0089'+'\u0093','WtaUO':_0x586988(0xabb),'iPZPJ':'\u008e\u008b\u008e\u0091\u008c'+'\u008b\u0094\u0088\u0090\u0088'+'\u008a','fMnoi':'\u0088\u0089\u008f\u0091\u0094'+'\u0092\u008b\u008c\u0088\u0089'+'\u0090','jbajO':'\u008a\u0092\u008a\u0091\u0094'+_0x586988(0x26b)+'\u008f','lUMrJ':_0x586988(0xae1)+_0x586988(0x7db)+'\u008e','epQRm':_0x586988(0x15c)+_0x586988(0x5d9)+'\u0094','UPdeA':'\u008a\u008c\u0092\u0092\u0094'+'\u0091\u0089\u0094\u008a\u0092'+'\u0089','xgTxO':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','FCGmZ':'\u0086\u0090\u0092\u0091\u0090'+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','bDFPe':'\u008a\u008b\u008d\u0094\u008e'+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','tuxVC':_0x586988(0x67c)+_0x586988(0x61d)+'\u0086','cKavx':_0x586988(0xe27)+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','QlTdy':_0x586988(0xa10)+_0x586988(0xa13)+'\u008f','Guxvs':_0x586988(0x66f)+'\u008e\u0095\u0095\u008c\u008c'+'\u0087','HjrFb':'\u0087\u0093\u0093\u0087\u0087'+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','Dblbx':'\u008b\u0090\u008d\u0095\u0086'+'\u008f\u0095\u0090\u0087\u008d'+'\u008c','tQRTz':_0x586988(0xc29)+_0x586988(0xbdd)+'\u0087','GFBjn':_0x586988(0xa3f)+_0x586988(0x610)+'\u008e','nGHUr':'\u0090\u008c\u008a\u008a\u0090'+_0x586988(0xb52)+'\u0091','KYbWb':'\u0090\u0093\u0090\u008f\u0088'+_0x586988(0xbcb)+'\u008f','AMfEu':'\u008e\u008b\u0093\u0091\u008e'+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','iLYPL':'\u008d\u0094\u0092\u0093\u0092'+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','jmioP':'\u008d\u008c\u0086\u0094\u008d'+_0x586988(0xbcf)+'\u008c','NqvFa':_0x586988(0xab0)+'\u0086\u0094\u0094\u008e\u008d'+'\u0090','rWayX':'\u008f\u0086\u0090\u0094\u0089'+_0x586988(0xb61)+'\u008a','jkDQf':_0x586988(0xc0f)+'\u008c\u008b\u008f\u008d\u0088'+'\u0089','HXCyu':_0x586988(0xa1b)+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','uJaQj':_0x586988(0xcf2)+_0x586988(0x20e)+'\u008c','Qayrn':'\u008d\u008f\u0086\u0092\u008c'+'\u0086\u0095\u0095\u0091\u0089'+'\u0087','EkNyV':'\u008b\u0088\u008d\u0087\u0090'+'\u008e\u008c\u0090\u008a\u008c'+'\u0094','pWzJx':_0x586988(0xaea)+_0x586988(0xbad)+'\u0088','MdiFL':'OnDes'+'troy','hhMdP':'\u008e\u0095\u008e\u0087\u0086'+'\u008c\u008e\u0095\u0088\u008e'+'\u0091','Gnrsd':_0x586988(0x222)+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','ywDkT':'int','GUOQL':_0x586988(0xc6f)+_0x586988(0x2b6)+'\u0092','kapOm':_0x586988(0x40a)+_0x586988(0x629)+'\u0087','dMtAT':'\u0087\u0087\u0089\u0092\u008d'+_0x586988(0x8e0)+'\u0092','wsmNF':'\u0088\u0090\u0095\u008e\u0094'+'\u008e\u0090\u0087\u0087\u0092'+'\u008e','gFcwk':_0x586988(0x271)+_0x586988(0x977)+'\u008c','WrWht':_0x586988(0x329)+_0x586988(0xdfb)+'\u0094','OMqAe':_0x586988(0x5d6)+'\u0093\u008b\u0094\u0094\u0094'+'\u008e','gOdqK':'\u0086\u0088\u0095\u0092\u0094'+'\u0086\u0089\u0086\u008b\u008b'+'\u0088','EMHOd':_0x586988(0x61a)+'\u008c\u0086\u008f\u0091\u008f'+'\u008e','OrpOA':_0x586988(0x9ca)+_0x586988(0x4da)+'\u0086','ndAtt':'\u0086\u008e\u0087\u0089\u008a'+_0x586988(0x284)+'\u0095','wDXfy':_0x586988(0x1f0)+'meMan'+_0x586988(0x43a),'aGHkr':_0x586988(0x4ee)+_0x586988(0x3e8)+_0x586988(0xbbc)+'imati'+_0x586988(0x3e0),'uQsYM':_0x586988(0x468)+_0x586988(0xb90)+_0x586988(0x480)+_0x586988(0x842),'HPPhA':_0x586988(0xda3)+'cofor'+'ge.De'+'cal.d'+'ll','nkiKG':_0x586988(0xdce)+_0x586988(0x2e5)+'d','XFLcp':_0x586988(0x5d0),'jiVkF':_0x586988(0x916),'LiAEV':_0x586988(0x7c0)+'nView','HorNt':_0x586988(0x906),'ukCvc':'healt'+'h','LzKie':_0x586988(0x4e0)+'form','XMpMi':'0x28','IEkoJ':'mouse'+'Look','Rrxiy':_0x586988(0x177)+'le','ZZBvg':_0x586988(0x658),'OzRCp':_0x586988(0xae5),'nDPem':'0x98','SYtRW':_0x586988(0xd3b),'YseGI':_0x586988(0x5cb)+_0x586988(0x78b)+'th','wSJjp':_0x586988(0xae6),'XjRDt':_0x586988(0x897),'jSaqQ':_0x586988(0x52a),'aZztD':_0x586988(0x203),'VhDHJ':function(_0x457822,_0x4527c7){return _0x457822(_0x4527c7);},'EOawV':'CMB','aTIbI':_0x586988(0x4a7),'vnPgy':function(_0x22598c,_0x30220a){return _0x22598c+_0x30220a;},'qovws':function(_0x55feed,_0x1c9e66){return _0x55feed+_0x1c9e66;},'NXmcT':function(_0x1472ab,_0x1c4494){return _0x1472ab+_0x1c4494;},'QgEgJ':function(_0x41fc61,_0x2ff1a6){return _0x41fc61+_0x2ff1a6;},'TvoHz':function(_0x47caa3,_0x531a12){return _0x47caa3+_0x531a12;},'eUvhC':function(_0x562cd2,_0x1dce50){return _0x562cd2+_0x1dce50;},'Oxyaa':function(_0x4b1c61,_0x528952){return _0x4b1c61+_0x528952;},'UZxYX':function(_0x10f296,_0x129a00){return _0x10f296+_0x129a00;},'pbGyO':function(_0x5c5cec,_0x1d5dbf){return _0x5c5cec+_0x1d5dbf;},'TPrih':function(_0x5d5b80,_0xd187d){return _0x5d5b80+_0xd187d;},'bXQOW':function(_0x5c0b6d,_0x1434f6){return _0x5c0b6d+_0x1434f6;},'zmVrd':function(_0xd93f33,_0x7acc58){return _0xd93f33+_0x7acc58;},'pqsRX':_0x586988(0xc26)+'ra-me'+'nu-ro'+_0x586988(0x5fd)+'-pane'+'l{pos'+_0x586988(0xa01)+_0x586988(0xad5)+_0x586988(0x3ca)+'ht:24'+'px;bo'+_0x586988(0xcc6)+_0x586988(0xc60)+_0x586988(0x3c3)+':min('+_0x586988(0xdbe)+',calc'+'(100v'+'w\x20-\x204'+'8px))'+';max-'+'heigh'+_0x586988(0x9f1)+_0x586988(0x6b0)+_0x586988(0x615)+_0x586988(0x66b)+'vh\x20-\x20'+_0x586988(0x3f5)+');','DehLo':_0x586988(0xa26)+'ay:fl'+'ex;ga'+'p:10p'+_0x586988(0xa80)+_0x586988(0x54e)+_0x586988(0x4b6)+_0x586988(0x6d7)+_0x586988(0x2ef)+'ius:2'+'2px;p'+_0x586988(0x76a)+_0x586988(0x317)+'nts:a'+'uto;z'+_0x586988(0x275)+_0x586988(0x38b)+_0x586988(0xba8)+_0x586988(0x4dd),'qQSRi':_0x586988(0x6f3)+'round'+_0x586988(0xc17)+_0x586988(0xd3d)+_0x586988(0xb51)+'.82);'+_0x586988(0xc19)+'rop-f'+_0x586988(0x886)+_0x586988(0xc42)+'(22px'+')\x20sat'+'urate'+'(150%'+');-we'+_0x586988(0x436)+'backd'+_0x586988(0x554)+'ilter'+_0x586988(0xc42)+_0x586988(0x989)+')\x20sat'+'urate'+_0x586988(0xe23)+');','aasLY':'opaci'+'ty:0;'+'trans'+'form:'+_0x586988(0x4e0)+'lateY'+_0x586988(0xdf1)+_0x586988(0x6da)+_0x586988(0xab6)+_0x586988(0xd4b)+'s:non'+'e;tra'+'nsiti'+_0x586988(0xa06)+'acity'+'\x20.35s'+_0x586988(0x7ea)+_0x586988(0xca7)+_0x586988(0xd42)+'\x20.45s'+_0x586988(0xa38)+'c-bez'+'ier(.'+_0x586988(0x612)+_0x586988(0x9a1)+');','cLxhM':_0x586988(0xc26)+_0x586988(0x86b)+_0x586988(0x8af)+'ot.mn'+_0x586988(0x523)+'l.sho'+_0x586988(0x5d4)+_0x586988(0x2e9)+':1;tr'+'ansfo'+_0x586988(0x9cc)+_0x586988(0x32d)+_0x586988(0xcd1)+'-even'+'ts:au'+_0x586988(0x76b),'PXFKH':_0x586988(0x50d)+'ide{d'+'ispla'+_0x586988(0x96e)+'x;fle'+_0x586988(0xdfc)+_0x586988(0x793)+_0x586988(0x28f)+'umn;a'+_0x586988(0x7ac)+_0x586988(0x642)+_0x586988(0x1f1)+_0x586988(0x82b)+'p:4px'+_0x586988(0xc62)+_0x586988(0xcec)+_0x586988(0x637)+'x:non'+_0x586988(0xd7e)+'ding:'+'12px\x20'+'0;','VLRbo':_0x586988(0x309)+_0x586988(0x65d)+_0x586988(0x960)+_0x586988(0x8e8)+'5px;h'+_0x586988(0x166)+_0x586988(0x707)+_0x586988(0x55c)+_0x586988(0x920)+_0x586988(0x632)+'le;fi'+_0x586988(0xba2)+_0x586988(0x1f2)+_0x586988(0x281)+'w(0\x200'+_0x586988(0xc2a)+'rgba('+_0x586988(0x741)+_0x586988(0xa76)+_0x586988(0xac8)+');}','zrgll':'.mn-t'+'itles'+_0x586988(0x914)+_0x586988(0x373)+'n-wid'+'th:0;'+'}','aitcl':'.mn-c'+_0x586988(0xbec)+'displ'+'ay:gr'+'id;pl'+_0x586988(0x3cd)+'tems:'+'cente'+'r;wid'+'th:28'+_0x586988(0x607)+_0x586988(0xa9f)+_0x586988(0xa07)+_0x586988(0x6d7)+_0x586988(0x923)+_0x586988(0xb94)+'-radi'+_0x586988(0x494)+_0x586988(0xc1f)+'kgrou'+_0x586988(0x572)+'anspa'+_0x586988(0x403),'lwFFc':'color'+':inhe'+'rit;o'+'pacit'+_0x586988(0xe05)+';curs'+_0x586988(0xa5b)+'inter'+';}','vNoJn':_0x586988(0xe21)+'lose:'+'hover'+'{opac'+_0x586988(0x560)+';back'+_0x586988(0x7d2)+_0x586988(0x5f0)+_0x586988(0x416)+_0x586988(0x8e7)+'255,.'+'05);}','BVkma':_0x586988(0xe21)+'ols{f'+'lex:1'+_0x586988(0x34f)+_0x586988(0xdf8)+'t:0;o'+'verfl'+'ow-y:'+_0x586988(0xd49)+_0x586988(0xa26)+_0x586988(0x200)+_0x586988(0xb01)+'id-te'+_0x586988(0x35d)+'e-col'+'umns:'+_0x586988(0x455)+_0x586988(0x62f)+_0x586988(0x758)+'l,min'+_0x586988(0x4ac)+'50px,'+_0x586988(0xd1c)+';','XynKa':_0x586988(0x594)+'-item'+_0x586988(0x19a)+'rt;al'+'ign-c'+'onten'+_0x586988(0x431)+'rt;ga'+'p:10p'+'x;pad'+_0x586988(0x54e)+_0x586988(0x41e)+'\x206px\x20'+_0x586988(0x710),'wrpNd':_0x586988(0xe21)+_0x586988(0x7b6)+_0x586988(0xbbd)+'it-sc'+_0x586988(0x570)+_0x586988(0x345)+_0x586988(0x5d1)+'ackgr'+'ound:'+_0x586988(0x6bc)+'255,2'+_0x586988(0x187)+_0x586988(0x59c)+');bor'+_0x586988(0xa93)+_0x586988(0x7d7)+_0x586988(0xb31)+'}','OsoYO':_0x586988(0x95f)+_0x586988(0x6ad)+'n{bac'+_0x586988(0x981)+'nd:rg'+_0x586988(0x849)+_0x586988(0x803)+',255,'+_0x586988(0x27b)+_0x586988(0x5e7)+_0x586988(0x3c0)+_0x586988(0xe2b)+'t\x200\x200'+_0x586988(0x825)+_0x586988(0x5f7)+'a(255'+',107,'+_0x586988(0x82d)+_0x586988(0xe1d),'UORST':_0x586988(0x95f)+_0x586988(0xde9)+_0x586988(0x578)+'flex:'+'1;min'+'-widt'+_0x586988(0xd97),'nGHmk':_0x586988(0x95f)+_0x586988(0xde9)+'itle\x20'+_0x586988(0x3f4)+'g{fon'+_0x586988(0x4b9)+'e:13p'+_0x586988(0x54b)+_0x586988(0xcf3)+_0x586988(0x50c)+_0x586988(0x3bb)+'lor:r'+_0x586988(0x9b6)+_0x586988(0xd12)+_0x586988(0xc5d)+_0x586988(0xde8)+';}','gJITf':_0x586988(0xe08)+_0x586988(0x810)+_0x586988(0x56e)+'ng:0\x20'+_0x586988(0x942)+_0x586988(0x4b6)+'}','VHWQJ':_0x586988(0x719)+'abel{'+_0x586988(0x1e8)+_0x586988(0x48f)+_0x586988(0x721)+_0x586988(0x4ea)+_0x586988(0x2fb)+_0x586988(0xd4a)+_0x586988(0x1eb)+'}','DbCYb':'.sk-h'+'int{d'+'ispla'+'y:blo'+'ck;fo'+_0x586988(0x1f5)+_0x586988(0xc7a)+_0x586988(0xd54)+_0x586988(0x2e9)+_0x586988(0x6e3),'Amior':_0x586988(0xaaa)+'witch'+_0x586988(0x5c1)+_0x586988(0xd22)+'ntent'+':\x22\x22;p'+_0x586988(0x709)+_0x586988(0x804)+_0x586988(0xc3f)+'e;top'+_0x586988(0xd36)+_0x586988(0x7a1)+'3px;w'+_0x586988(0x4e3)+_0x586988(0xb3b)+_0x586988(0x166)+':8px;'+_0x586988(0x6d7)+'r-rad'+_0x586988(0x221)+_0x586988(0x23d),'ihwYv':_0x586988(0xaaa)+_0x586988(0x2b7)+_0x586988(0x619)+_0x586988(0x436)+_0x586988(0x1f6)+_0x586988(0xd3a)+_0x586988(0x918)+'-trac'+_0x586988(0x1c7)+'ght:2'+_0x586988(0x93c)+'rder-'+_0x586988(0x5c9)+_0x586988(0x776)+';','AuyFj':_0x586988(0xe15)+'al{fo'+_0x586988(0x1f5)+'ze:11'+_0x586988(0x9be)+'nt-we'+'ight:'+'600;m'+_0x586988(0x7e7)+_0x586988(0x628)+'4px;t'+_0x586988(0x3ac)+'lign:'+'right'+_0x586988(0x5ab)+'r:rgb'+_0x586988(0x392)+_0x586988(0xc1e)+_0x586988(0x633)+'8);}','OVTTe':'.sk-n'+_0x586988(0x83d)+_0x586988(0xc64)+_0x586988(0x449)+'ff7a9'+_0x586988(0x1aa),'siieJ':'font-'+_0x586988(0x172)+'11.5p'+_0x586988(0x54b)+_0x586988(0xcf3)+_0x586988(0x308)+_0x586988(0x676)+_0x586988(0x6e0)+'point'+_0x586988(0xb03)+_0x586988(0x5bc)+'mily:'+_0x586988(0x21d)+_0x586988(0xa97),'Uywul':_0x586988(0xc26)+_0x586988(0xa0b)+_0x586988(0xdc6)+_0x586988(0x709)+_0x586988(0x98b)+'xed;t'+'op:12'+_0x586988(0xd1f)+'ght:1'+_0x586988(0x3f1)+_0x586988(0x275)+'x:214'+_0x586988(0xba8)+_0x586988(0x40b)+'rsor:'+_0x586988(0x210)+_0x586988(0xb3f)+'dth:2'+_0x586988(0x565)+'eight'+_0x586988(0xbb6)+_0x586988(0x819)+_0x586988(0x8cb)+'28;','fetSX':'<svg\x20'+_0x586988(0xcb0)+'ox=\x220'+_0x586988(0xa68)+'\x2024\x22>'+_0x586988(0xcd2)+_0x586988(0x73c)+_0x586988(0x447)+_0x586988(0x37a)+_0x586988(0xcdc)+'4-4.5'+'-4-7.'+_0x586988(0xb6e)+'.5\x201.'+_0x586988(0x867)+_0x586988(0x80f)+'5s4\x202'+'\x204\x204.'+_0x586988(0x6a9)+_0x586988(0xc4b)+_0x586988(0xdb9)+'.5z\x22\x20','sxqHq':function(_0x5b80f2,_0x313041){return _0x5b80f2+_0x313041;},'cxtqX':_0x586988(0x913)+_0x586988(0x94e)+_0x586988(0x457)+_0x586988(0x248)+_0x586988(0x9db)+_0x586988(0x852)+_0x586988(0x955)+_0x586988(0x419)+_0x586988(0x23c)+_0x586988(0xc81)+'svg>','pbhjd':'DOMCo'+_0x586988(0x193)+_0x586988(0x51b)+'d'};var _0x3f310d=location['hostn'+_0x586988(0xdde)]||'',_0xe0e14c=/(^|\.)www\.crazygames\.com$/[_0x586988(0x5e6)](_0x3f310d),_0x4b1269=/(^|\.)games\.crazygames\.com$/['test'](_0x3f310d),_0x3a8119=/(^|\.)crazygames\.com$/[_0x586988(0x5e6)](_0x3f310d)&&!_0xe0e14c&&!_0x4b1269,_0x2ed046=_0xe0e14c?_0x11b6a3['lFiKi']:_0x4b1269?_0x11b6a3[_0x586988(0x33b)]:_0x586988(0xd46)+'r';if(_0x11b6a3['bZnRm'](!_0xe0e14c,!_0x4b1269)&&!_0x3a8119)return;var _0x6ccbd2=_0x586988(0x2e3)+'b1',_0xef1c24=_0x586988(0xb6c)+_0x586988(0xa92)+_0x586988(0x731),_0xdf8cb0=_0x586988(0x860)+_0x586988(0x8ee)+'SKILL'+_0x586988(0x866)+_0x586988(0x3ad)+'===',_0x2728c4=_0x11b6a3['VNMdA'],_0xa19145=_0x11b6a3[_0x586988(0x699)];if(_0x4b1269){if(_0x586988(0xb4b)!=='vjpgs')return _0x4dfd0b['sourc'+'e']=_0x11b6a3[_0x586988(0xd85)],_0x148e17;else{window[_0x586988(0xb44)+_0x586988(0x30b)+_0x586988(0x93d)+'r'](_0x11b6a3['PRlzh'],function(_0x2c2e2e){var _0x450eb5=_0x586988,_0x4cd822={'melOR':function(_0x2dd3e4,_0x6ca279){return _0x2dd3e4>_0x6ca279;},'GMFfA':function(_0x3fd76a,_0x11a7e5){var _0x28dcba=_0x576a;return _0x11b6a3[_0x28dcba(0x735)](_0x3fd76a,_0x11a7e5);},'pJNhj':function(_0x3b984d,_0x402991){return _0x3b984d<_0x402991;}};if(_0x11b6a3[_0x450eb5(0xd92)]==='GIMXH')return _0x511aa8['faile'+'d']++,_0x1ff7c0[_0x450eb5(0xc57)+_0x450eb5(0x376)]=_0xcb0b3b['lastE'+_0x450eb5(0x376)]||_0x3a127c(_0x1fbf83&&_0x36f7b7[_0x450eb5(0xd29)+'ge']||_0x1e4a2e)['slice'](0x2591+0x20e6+-0x4677,0x6*-0x3dd+0x25c9+-0x1*0xe23),null;else{var _0x49cec2=_0x2c2e2e[_0x450eb5(0xb1d)];if(!_0x49cec2||_0x11b6a3[_0x450eb5(0xd10)](_0x49cec2['__sak'+_0x450eb5(0x429)],_0xef1c24))return;try{if(window[_0x450eb5(0x52f)+'t']&&window['paren'+'t']!==window)window[_0x450eb5(0x52f)+'t']['postM'+'essag'+'e'](_0x49cec2,'*');if(window[_0x450eb5(0x307)]&&window[_0x450eb5(0x307)]!==window)window['top']['postM'+'essag'+'e'](_0x49cec2,'*');}catch(_0x2a7827){}if(_0x49cec2&&_0x49cec2[_0x450eb5(0xc93)]===_0x11b6a3[_0x450eb5(0xe1c)]){if(_0x11b6a3['osIFJ']===_0x11b6a3['pPXSm']){var _0x5246aa=_0x57561f['c'][_0x32a6b4]['v'],_0x2c3707=_0xc4a307['sqrt'](_0x5246aa[-0xd7*0x21+-0x4bd*0x2+0x2531]*_0x5246aa[0x575*0x1+0x2045+-0x25ba]+_0x5246aa[-0x18cd+0x83f*-0x1+0x210e]*_0x5246aa[0x361*0x8+-0x23a1+0x89b]);(_0x4cd822['melOR'](_0x2c3707,_0x411559)||_0x4cd822['GMFfA'](_0x2c3707,_0xbe281)&&_0x4cd822[_0x450eb5(0x350)](_0x5246aa[0x2278+0x491*0x7+-0x426e],_0x2ccfca['v'][-0x2ea+0x82e+-0x543]))&&(_0x176bab=_0x2c3707,_0x37b809=_0x57402f['c'][_0x54762e]);}else try{var _0x2fccd2=document['query'+'Selec'+_0x450eb5(0xbfa)+'l'](_0x11b6a3[_0x450eb5(0x7a8)]);for(var _0x2d297c=0x5f+-0x1169*-0x1+-0x2*0x8e4;_0x2d297c<_0x2fccd2['lengt'+'h'];_0x2d297c++){try{if(_0x2fccd2[_0x2d297c]['conte'+_0x450eb5(0x901)+_0x450eb5(0xc28)])_0x2fccd2[_0x2d297c][_0x450eb5(0x4ba)+'ntWin'+_0x450eb5(0xc28)]['postM'+_0x450eb5(0xc09)+'e'](_0x49cec2,'*');}catch(_0x298ebf){}}}catch(_0x848a5b){}}}}),console[_0x586988(0x45e)](_0x11b6a3[_0x586988(0x782)],_0x11b6a3['UIgro'](_0x11b6a3['DAGbJ'],_0x6ccbd2));return;}}if(_0xe0e14c){console['log']('%c[sa'+_0x586988(0xa1a)+'\x20PORT'+'AL\x20AC'+'TIVE',_0x586988(0xd72)+':'+_0x6ccbd2+_0x11b6a3[_0x586988(0x411)],{'host':_0x3f310d});var _0x5d261c={'set':function(){},'command':function(){}};function _0x322105(_0x3ba585,_0x270e12){var _0x58b304=_0x586988,_0x7037e4={'__sakura':_0xef1c24,'kind':_0x58b304(0x1b1),'cmd':_0x3ba585,'arg':_0x270e12};try{var _0x28ae4e=document[_0x58b304(0x181)+_0x58b304(0x381)+'torAl'+'l']('ifram'+'e');for(var _0x433955=0x246+0x201b+-0x2261;_0x433955<_0x28ae4e[_0x58b304(0x964)+'h'];_0x433955++){try{if(_0x28ae4e[_0x433955][_0x58b304(0x4ba)+_0x58b304(0x901)+'dow'])_0x28ae4e[_0x433955]['conte'+'ntWin'+_0x58b304(0xc28)][_0x58b304(0x7ca)+'essag'+'e'](_0x7037e4,'*');}catch(_0x578504){}}}catch(_0x369a7b){}try{var _0x1fdc71=new BroadcastChannel(_0x58b304(0x33e)+_0x58b304(0x1d2));_0x1fdc71[_0x58b304(0x7ca)+_0x58b304(0xc09)+'e'](_0x7037e4),setTimeout(function(){var _0x2341c8=_0x58b304;try{_0x1fdc71[_0x2341c8(0xcc1)]();}catch(_0x5b2cb1){}},-0xec7+0xbcc*-0x1+-0x92f*-0x3);}catch(_0x4e1eea){}}var _0xb1d96e=_0x11b6a3['jLMGh'];function _0x29f528(){var _0xe1e89e=_0x586988,_0x57900b={'QfuOZ':function(_0x4a9107,_0x10dbd7){var _0x478b0e=_0x576a;return _0x11b6a3[_0x478b0e(0xab3)](_0x4a9107,_0x10dbd7);}};try{if(_0x11b6a3[_0xe1e89e(0x2da)]!==_0xe1e89e(0x6a3))return localStorage[_0xe1e89e(0x8d2)+'em'](_0xb1d96e)==='1';else{var _0x3c10f1={};try{var _0x375304=_0x1ab598['Unity'+_0xe1e89e(0x881)+_0xe1e89e(0x984)]&&_0x52020e['Unity'+_0xe1e89e(0x881)+'dkit']['Runti'+'me'];_0x3c10f1[_0xe1e89e(0x4bc)]=_0x375304&&_0x375304['__sak'+_0xe1e89e(0x2ff)+'g']||null,_0x3c10f1[_0xe1e89e(0x9f5)+'tches']=!!(_0x11b6a3[_0xe1e89e(0x211)](_0x375304,_0x459d31)&&_0x375304['__sak'+_0xe1e89e(0x2ff)+'g']===_0x3eb867),_0x3c10f1['runti'+_0xe1e89e(0x8e5)+'e']=_0x375304&&_0x375304[_0xe1e89e(0xd81)]?typeof _0x375304['_game']:_0x11b6a3['FJZZi'],_0x3c10f1[_0xe1e89e(0x5bd)+'nRunt'+_0xe1e89e(0x2b8)+_0xe1e89e(0x16e)+_0xe1e89e(0xa23)]=!!(_0x3aaebc&&_0x13f51c[_0xe1e89e(0x4cc)+_0xe1e89e(0x57a)]&&_0x2acd32['_runt'+'ime']===_0x375304),_0x3c10f1['plugi'+_0xe1e89e(0xd93)+'imeGa'+'me']=_0x320e19&&_0x419fe9[_0xe1e89e(0x4cc)+_0xe1e89e(0x57a)]&&_0x3093b5[_0xe1e89e(0x4cc)+'ime']['_game']?typeof _0x1cb0d7[_0xe1e89e(0x4cc)+'ime'][_0xe1e89e(0xd81)]:_0xe1e89e(0x29f);}catch(_0x176630){_0x3c10f1[_0xe1e89e(0xccf)]=_0x5d619d(_0x176630&&_0x176630[_0xe1e89e(0xd29)+'ge']||_0x176630);}return _0x3c10f1;}}catch(_0x1b6b90){if(_0x11b6a3['NgOMF'](_0xe1e89e(0x592),'LAwEB'))try{var _0x418712=_0x2b2d9b&&_0x441a28[_0xe1e89e(0xb1d)];if(!_0x418712||_0x57900b['QfuOZ'](_0x418712['__sak'+'ura'],_0x3a6623)||_0x418712['kind']!==_0xe1e89e(0x1b1))return;_0x4d8c14(_0x418712[_0xe1e89e(0x1b1)],_0x418712[_0xe1e89e(0x472)]);}catch(_0xd1d434){}else return![];}}function _0x2caad2(_0x487568){var _0x562e19=_0x586988,_0x58fc49={'xiEXg':function(_0x442205,_0x54ee40){return _0x442205+_0x54ee40;},'cTPmN':function(_0x20beed,_0x4a7845){var _0x44930a=_0x576a;return _0x11b6a3[_0x44930a(0xa30)](_0x20beed,_0x4a7845);},'ljfFV':function(_0x58f87f,_0x30e7ed){return _0x11b6a3['ZUNaS'](_0x58f87f,_0x30e7ed);},'XCiTO':_0x11b6a3['cJbcz']};try{_0x487568?localStorage[_0x562e19(0x3b7)+'em'](_0xb1d96e,'1'):localStorage['remov'+_0x562e19(0x771)](_0xb1d96e);}catch(_0x1d60ad){}try{if(_0x11b6a3['yPAvb']==='UREWs')_0x22a411[_0x562e19(0xbc0)+'ogged']=-0x50*0xf+-0x18f5*-0x1+-0x1444,_0x16362f[_0x562e19(0x45e)](_0x58fc49['xiEXg'](_0x58fc49['xiEXg'](_0x58fc49[_0x562e19(0x38e)](_0x58fc49['ljfFV'](_0x562e19(0x76e)+'n='+_0x55df69[_0x562e19(0x964)+'h']+('\x20reac'+'h='),_0x2e23e9['toFix'+'ed'](-0x232b+0x414*-0x6+-0x3ba5*-0x1))+(_0x562e19(0x20a)+'r=')+_0x270803['toFix'+'ed'](-0x1e02+-0x1423+0x3227),_0x58fc49['XCiTO']),_0x11e667)+('\x20samp'+_0x562e19(0x9e3)),_0x21bebf['strin'+_0x562e19(0x686)](_0x388cb6['slice'](0x13*-0x132+-0xb87*0x2+0x2dc4,0x2375+0x3*0x1bf+-0x28b0))));else{var _0x25beb7=document['getEl'+'ement'+'ById'](_0x562e19(0x33e)+'a-sw-'+'v2');if(_0x25beb7)_0x25beb7['remov'+'e']();}}catch(_0x4063c9){}try{var _0x9e5cf4=document[_0x562e19(0x62c)+'ement'+_0x562e19(0x801)]('sakur'+'a-sw-'+_0x562e19(0xd5c)+'b');if(_0x487568&&!_0x9e5cf4&&document['body']){if('yISTn'===_0x11b6a3['erBVS']){var _0x447c54=_0x44c39b[_0x562e19(0x1c2)+'WebMo'+'dkit']&&_0x10891c[_0x562e19(0x1c2)+_0x562e19(0x881)+'dkit']['Runti'+'me'];if(!_0x447c54||_0x11b6a3[_0x562e19(0xdd6)](typeof _0x447c54[_0x562e19(0xcfa)+_0x562e19(0x52b)+'in'],_0x562e19(0x952)+_0x562e19(0x8b4))){_0x14e246[_0x562e19(0xccf)]=_0x11b6a3[_0x562e19(0x5a7)];return;}_0x50aa56[_0x562e19(0xaae)+_0x562e19(0x2a1)]=!![],_0x16b859=_0x447c54[_0x562e19(0xcfa)+_0x562e19(0x52b)+'in']({'name':_0x11b6a3[_0x562e19(0xdc8)],'version':_0x58e018,'referencedAssemblies':_0x466d4a['slice']()}),_0x3d1ca9['ok']=!![];try{var _0x3008c4=_0x5726d2[_0x562e19(0x1c2)+'WebMo'+'dkit'][_0x562e19(0x213)+'me'];_0x3008c4['__sak'+'uraTa'+'g']=_0xc8e417+':'+_0xa20ac1['rando'+'m']()[_0x562e19(0xd0f)+_0x562e19(0x3cc)](-0x2633+-0xd5*-0xc+0x1c5b)['slice'](0x1981*-0x1+0xbf*-0x1b+0x4*0xb6a,0x1ba2+-0x1*0x431+-0x1767),_0x5153b5=_0x3008c4[_0x562e19(0xb6c)+'uraTa'+'g'];}catch(_0x396c51){}_0x11b6a3[_0x562e19(0x7c2)](_0x28abf4),_0xc057d1(),_0x41b91f[_0x562e19(0xb2a)+_0x562e19(0x165)+_0x562e19(0x879)]=_0x4c22c3['lengt'+'h'],_0x146739(),_0x1551fa[_0x562e19(0x723)+_0x562e19(0xd8f)]=!![];}else{var _0x183757=document['creat'+_0x562e19(0xc89)+_0x562e19(0x1e5)](_0x11b6a3['ACScM']);_0x183757['id']=_0x11b6a3['yEPFS'],_0x183757['style'][_0x562e19(0xba1)+'xt']=_0x11b6a3[_0x562e19(0xa91)](_0x11b6a3['SqHXs'](_0x562e19(0xc82)+_0x562e19(0x985)+_0x562e19(0x34d)+'left:'+'12px;'+'top:1'+'2px;z'+'-inde'+'x:214'+'74829'+'99;cu'+_0x562e19(0x6e0)+'point'+_0x562e19(0x622)+_0x562e19(0x8ce)+_0x562e19(0xa0f)+_0x562e19(0xc96),_0x11b6a3[_0x562e19(0x78f)]),_0x6ccbd2)+';'+('borde'+_0x562e19(0x2ef)+_0x562e19(0x492)+_0x562e19(0x7d6)+_0x562e19(0x56e)+_0x562e19(0x6d6)+_0x562e19(0xaef)+_0x562e19(0x54b)+_0x562e19(0x72a)+'x/1.4'+_0x562e19(0xc04)+_0x562e19(0xc4f)+'ace,C'+'onsol'+_0x562e19(0xd30)+'nospa'+_0x562e19(0x24f)),_0x183757[_0x562e19(0x4fc)+_0x562e19(0xa15)+'t']=_0x562e19(0x33e)+'a',_0x183757['oncli'+'ck']=function(){_0x2caad2(![]),_0x52c072();},document[_0x562e19(0x300)][_0x562e19(0x927)+_0x562e19(0x432)+'d'](_0x183757);}}else _0x11b6a3['qzXvG'](!_0x487568,_0x9e5cf4)&&_0x9e5cf4['remov'+'e']();}catch(_0xba4c83){}}function _0x4dd4a2(){var _0x10e902=_0x586988,_0x11f06c={'TqgZe':_0x11b6a3['sikvL']};if(_0x29f528())return null;var _0x4acc2c=document[_0x10e902(0x62c)+'ement'+_0x10e902(0x801)]('sakur'+_0x10e902(0x764)+'v2');if(_0x4acc2c)return _0x4acc2c;if(!document[_0x10e902(0x300)]||!document[_0x10e902(0x300)][_0x10e902(0x927)+_0x10e902(0x432)+'d'])return null;try{if(!document[_0x10e902(0x62c)+'ement'+_0x10e902(0x801)](_0x11b6a3[_0x10e902(0x464)])){if(_0x11b6a3[_0x10e902(0xd7c)]('AWKTL',_0x11b6a3['egUAp'])){var _0x208047=document[_0x10e902(0xcfa)+'eElem'+_0x10e902(0x1e5)]('style');_0x208047['id']=_0x10e902(0x33e)+'a-sw-'+'v2-cs'+'s',_0x208047['textC'+'onten'+'t']=_0x11b6a3[_0x10e902(0xd88)],(document[_0x10e902(0x386)]||document[_0x10e902(0x159)+_0x10e902(0x337)+_0x10e902(0x91c)])['appen'+_0x10e902(0x432)+'d'](_0x208047);}else{var _0x3cb5b9=arguments[_0x5810c1];if(typeof _0x3cb5b9===_0x11f06c[_0x10e902(0x3c4)])_0x206143+=_0x3cb5b9;else{if(_0x3cb5b9&&_0x3cb5b9[_0x10e902(0xd29)+'ge'])_0x434e6b+=_0x3cb5b9[_0x10e902(0xd29)+'ge'];}}}return _0x4acc2c=document['creat'+'eElem'+'ent'](_0x10e902(0xb2f)),_0x4acc2c['id']=_0x10e902(0x33e)+'a-sw-'+'v2',document['body'][_0x10e902(0x927)+'dChil'+'d'](_0x4acc2c),_0x4acc2c;}catch(_0x345e5c){return null;}}function _0x52c072(){var _0x5bc21d=_0x586988,_0xcf5f74={'wmpcE':function(_0x4208c7,_0x18da2d){return _0x11b6a3['PInQm'](_0x4208c7,_0x18da2d);},'yCOlq':_0x11b6a3['cDCCY'],'IMmXY':_0x11b6a3['YaiYo'],'rcnNW':function(_0x472cb3,_0x3a0727){return _0x472cb3+_0x3a0727;},'UibpQ':_0x5bc21d(0x230)+'panel'+_0x5bc21d(0xbaa)+'es\x20th'+_0x5bc21d(0x41c)+'rscri'+'pt\x20IS'+_0x5bc21d(0x823)+_0x5bc21d(0xdc3)+'\x20and\x20'+_0x5bc21d(0x70c)+'ng\x20on'+_0x5bc21d(0x377)+_0x5bc21d(0x8f0)+_0x5bc21d(0x1d0),'JioVi':'so\x20th'+_0x5bc21d(0xc13)+_0x5bc21d(0x46c)+_0x5bc21d(0xb86)+'pects'+'\x20are:'+'\x0a\x0a','prQNs':'Reloa'+'d\x20the'+'\x20game'+_0x5bc21d(0x8fd)+'\x20once'+'\x20and\x20'+'watch'+'\x20this'+_0x5bc21d(0xd70)+'l\x20aga'+_0x5bc21d(0xb06)},_0x16fcba=_0x4dd4a2();if(!_0x16fcba)return _0x5d261c;if(_0x16fcba[_0x5bc21d(0x276)+'et'][_0x5bc21d(0x946)])return _0x16fcba[_0x5bc21d(0x946)];try{if('boIej'==='boIej')return _0x11b6a3['FXFgR'](_0x154b9a,_0x16fcba);else{if(_0xf46ce0)return;if(_0xcf5f74[_0x5bc21d(0x366)](!_0x3e64e8,!_0x314826))return;_0x4c0550['textC'+'onten'+'t']=_0xcf5f74[_0x5bc21d(0xd1e)],_0x11016e['style'][_0x5bc21d(0xd72)]=_0xcf5f74[_0x5bc21d(0xb6a)],_0x380dd1[_0x5bc21d(0x4fc)+_0x5bc21d(0xa15)+'t']=_0xcf5f74['rcnNW'](_0x5bc21d(0x245)+_0x5bc21d(0x53d)+_0x5bc21d(0x1df)+_0x5bc21d(0x725)+_0x5bc21d(0xa6a)+'ed\x20a\x20'+_0x5bc21d(0x672)+_0x5bc21d(0x3c2)+'ort.\x0a'+'\x0a'+_0xcf5f74[_0x5bc21d(0xd2f)]+_0xcf5f74[_0x5bc21d(0x75b)]+('\x20\x201.\x20'+_0x5bc21d(0x4f0)+'rmonk'+'ey\x20is'+_0x5bc21d(0x83a)+'injec'+'ting\x20'+'into\x20'+_0x5bc21d(0x95e)+'ross-'+_0x5bc21d(0x92e)+'n\x20ifr'+_0x5bc21d(0xc8c))+('\x20\x202.\x20'+_0x5bc21d(0x29e)+_0x5bc21d(0x827)+_0x5bc21d(0x81b)+'t\x20bee'+_0x5bc21d(0x5f2)+'oaded'+_0x5bc21d(0xb69)+_0x5bc21d(0x4d8)+_0x5bc21d(0x27c)+'ng.\x0a'),_0x5bc21d(0x711)+_0x5bc21d(0xcaa)+'sakur'+_0x5bc21d(0xa14)+_0x5bc21d(0xb2e)+'z.use'+'r.js\x20'+_0x5bc21d(0xae0)+_0x5bc21d(0xa65)+_0x5bc21d(0xdf4)+_0x5bc21d(0x3d9)+'ipt\x20a'+_0x5bc21d(0x54a))+(_0x5bc21d(0x393)+'insta'+_0x5bc21d(0x1d7)+_0x5bc21d(0x341)+_0x5bc21d(0x614)+_0x5bc21d(0x681)+'\x20UWMK'+'\x20both'+'\x20patc'+'h\x20Web'+_0x5bc21d(0x468)+'bly.i'+_0x5bc21d(0x753)+_0x5bc21d(0x343)+'.\x0a\x0a')+_0xcf5f74[_0x5bc21d(0x4fd)];}}catch(_0x198b29){return _0x16fcba['datas'+'et']['api']='1',_0x16fcba[_0x5bc21d(0x946)]=_0x5d261c,console['warn'](_0x11b6a3['fdSDF'],_0x11b6a3[_0x5bc21d(0xa30)](_0x11b6a3['DAGbJ'],_0x6ccbd2),_0x198b29),_0x5d261c;}}function _0x154b9a(_0x957307){var _0x9ad312=_0x586988,_0x49ea35={'UIoJC':_0x11b6a3['WfsJw'],'Jtlks':_0x9ad312(0x8e6),'rWhcA':function(_0x32ade5){var _0x553fae=_0x9ad312;return _0x11b6a3[_0x553fae(0x7c2)](_0x32ade5);},'oZeoM':function(_0x459d6f,_0x307081){return _0x459d6f+_0x307081;},'AlmIa':_0x11b6a3[_0x9ad312(0x9a0)],'Liblq':_0x11b6a3[_0x9ad312(0x3a9)],'nmzTp':_0x11b6a3[_0x9ad312(0xc14)],'TtibY':_0x9ad312(0xbdf)};_0x957307[_0x9ad312(0x3d2)][_0x9ad312(0xba1)+'xt']=_0x11b6a3['fpJCz'](_0x11b6a3[_0x9ad312(0x755)]+_0x11b6a3[_0x9ad312(0x4f2)]+_0x11b6a3['SGneW'],'displ'+_0x9ad312(0x649)+_0x9ad312(0x6bd)+_0x9ad312(0xbed)+_0x9ad312(0x617)+'on:co'+_0x9ad312(0x1cb)+_0x9ad312(0x2c8)+_0x9ad312(0xe0a)+'idden'+';'),_0x957307[_0x9ad312(0xdd8)+'HTML']=_0x11b6a3['fBDQa'](_0x11b6a3['fBDQa'](_0x11b6a3['uJkJw'](_0x11b6a3[_0x9ad312(0xa56)](_0x11b6a3[_0x9ad312(0xc03)](_0x11b6a3['UNHzu'](_0x11b6a3[_0x9ad312(0xa94)](_0x11b6a3['JBjMp'](_0x11b6a3[_0x9ad312(0x4a6)](_0x11b6a3[_0x9ad312(0x48c)]+(_0x9ad312(0x835)+_0x9ad312(0x905)+'color'+':'),_0x6ccbd2),_0x11b6a3['ApaAq'])+(_0x9ad312(0x42f)+'\x20id=\x22'+_0x9ad312(0xda9)+_0x9ad312(0xd9e)+'\x20styl'+'e=\x22co'+'lor:#'+_0x9ad312(0xc36)+'6;fon'+_0x9ad312(0x4b9)+_0x9ad312(0x8f2)+_0x9ad312(0xa80)+'ding:'+_0x9ad312(0x423)+_0x9ad312(0x93c)+_0x9ad312(0x530)+_0x9ad312(0x311)+_0x9ad312(0x778)+_0x9ad312(0x6bc)+_0x9ad312(0x741)+_0x9ad312(0x71b)+'7,.35'+_0x9ad312(0x50b)+'der-r'+'adius'+_0x9ad312(0x79e)+_0x9ad312(0x49a)+_0x9ad312(0xd04)+_0x9ad312(0xd26)),'<span'+_0x9ad312(0xc55)+'sw2-s'+'tatus'+_0x9ad312(0x372)+'le=\x22c'+'olor:'+_0x9ad312(0x73d)+_0x9ad312(0x27d)+_0x9ad312(0xe07)+_0x9ad312(0x1f8)+_0x9ad312(0x4f1)+_0x9ad312(0x9bc)+_0x9ad312(0x21f)+'pan>'),_0x9ad312(0xad2)+'on\x20id'+_0x9ad312(0xbd5)+_0x9ad312(0x980)+_0x9ad312(0x372)+'le=\x22d'+_0x9ad312(0x526)+'y:non'+_0x9ad312(0x6f5)+_0x9ad312(0xd39)+_0x9ad312(0x61b)+_0x9ad312(0xc91)+_0x9ad312(0x1d6)+_0x9ad312(0x2d6))+_0x6ccbd2,_0x9ad312(0x201)+'er:0;'+_0x9ad312(0xd72)+_0x9ad312(0x999)+'f1b;b'+'order'+_0x9ad312(0x6aa)+_0x9ad312(0xad3)+'x;pad'+_0x9ad312(0x54e)+'4px\x201'+'0px;f'+'ont-w'+_0x9ad312(0x166)+_0x9ad312(0x5ea)+_0x9ad312(0x31f)+_0x9ad312(0x9b8)+_0x9ad312(0x2f5)+_0x9ad312(0x185)+'y\x20JSO'+'N</bu'+'tton>')+(_0x9ad312(0xad2)+_0x9ad312(0x50a)+'=\x22sw2'+'-togg'+_0x9ad312(0x75d)+'tyle='+'\x22back'+_0x9ad312(0x7d2)+_0x9ad312(0x64d)+_0x9ad312(0xe11)+_0x9ad312(0x3fa)+'order'+_0x9ad312(0x8d6)+_0x9ad312(0x180)+'\x20rgba'+_0x9ad312(0x535)+'143,1'+'77,.4'+_0x9ad312(0x8c4)+_0x9ad312(0x8d9)+'7eef5'+';bord'+_0x9ad312(0xb55)+_0x9ad312(0xcdf)+'7px;p'+'addin'+_0x9ad312(0x839)+_0x9ad312(0x991)+_0x9ad312(0x31f)+_0x9ad312(0x9b8)+_0x9ad312(0x2f5)+_0x9ad312(0x2a0)+'n</bu'+_0x9ad312(0x791))+_0x11b6a3[_0x9ad312(0x670)]+_0x11b6a3[_0x9ad312(0x36d)]+('<div\x20'+_0x9ad312(0x491)+_0x9ad312(0x23e)+_0x9ad312(0x191)+'tyle='+'\x22disp'+_0x9ad312(0x92d)+_0x9ad312(0x746)+'>'),_0x11b6a3[_0x9ad312(0x454)]),_0x9ad312(0xad2)+_0x9ad312(0x50a)+_0x9ad312(0xbd5)+_0x9ad312(0x8e2)+_0x9ad312(0x563)+'yle=\x22'+_0x9ad312(0x6f3)+'round'+_0x9ad312(0xaf4)+'spare'+'nt;bo'+'rder:'+'1px\x20s'+'olid\x20'+_0x9ad312(0x6bc)+_0x9ad312(0x741)+_0x9ad312(0x71b)+'7,.4)'+_0x9ad312(0x5ab)+'r:#f7'+_0x9ad312(0xd45)+_0x9ad312(0x6d7)+'r-rad'+_0x9ad312(0x750)+_0x9ad312(0x9d3)+_0x9ad312(0x938)+_0x9ad312(0x3f6)+_0x9ad312(0x4b6)+'curso'+'r:poi'+_0x9ad312(0x2f5)+_0x9ad312(0x51c)+_0x9ad312(0x91f)+_0x9ad312(0xb97)+_0x9ad312(0x791))+(_0x9ad312(0x45a)+'t\x20id='+_0x9ad312(0x64e)+'facto'+'r\x22\x20ty'+'pe=\x22r'+_0x9ad312(0xb84)+_0x9ad312(0x1c5)+_0x9ad312(0x54f)+'ax=\x225'+_0x9ad312(0xdb1)+_0x9ad312(0x9b4)+_0x9ad312(0x85c)+'lue=\x22'+_0x9ad312(0x6ee)+'yle=\x22'+_0x9ad312(0x3c3)+_0x9ad312(0xd0b)+_0x9ad312(0x928)+'ent-c'+_0x9ad312(0xc97)),_0x6ccbd2)+_0x9ad312(0x254)+('<span'+'\x20id=\x22'+'sw2-f'+_0x9ad312(0xaaf)+_0x9ad312(0xcb3)+_0x9ad312(0x372)+_0x9ad312(0x843)+_0x9ad312(0xc97)+_0x9ad312(0x73d)+_0x9ad312(0x5dd)+'n-wid'+_0x9ad312(0x36b)+'px;\x22>'+_0x9ad312(0xd47)+'/span'+'>')+_0x11b6a3['AwPqk']+('<span'+_0x9ad312(0xc55)+_0x9ad312(0x294)+_0x9ad312(0x4d7)+'style'+'=\x22col'+_0x9ad312(0xcb1)+'d7a99'+'\x22>F9\x20'+_0x9ad312(0x857)+'\x20whil'+'e\x20wal'+'king\x20'+'/\x20spr'+'intin'+'g\x20/\x20j'+_0x9ad312(0x1a9)+_0x9ad312(0xa89)+_0x9ad312(0x85d)+'ich\x20f'+'ield\x20'+_0x9ad312(0xdb6)+_0x9ad312(0x874)+_0x9ad312(0xe09)+'>')+('</div'+'>')+_0x11b6a3[_0x9ad312(0x26f)],_0x11b6a3[_0x9ad312(0x2f0)])+('</div'+'>');var _0x2a17a7=_0x957307[_0x9ad312(0x181)+_0x9ad312(0x381)+'tor'](_0x11b6a3['wQFTx']),_0x3dc7a9=_0x957307[_0x9ad312(0x181)+_0x9ad312(0x381)+_0x9ad312(0xc8b)](_0x9ad312(0x157)+'build'),_0x5c959f=_0x957307['query'+_0x9ad312(0x381)+_0x9ad312(0xc8b)](_0x9ad312(0x157)+_0x9ad312(0x583)),_0x58425a=_0x957307[_0x9ad312(0x181)+'Selec'+_0x9ad312(0xc8b)](_0x11b6a3[_0x9ad312(0x60a)]),_0x504356=_0x957307['query'+'Selec'+'tor']('#sw2-'+'x'),_0x346403=_0x957307[_0x9ad312(0x181)+_0x9ad312(0x381)+_0x9ad312(0xc8b)]('#sw2-'+_0x9ad312(0x8a6)+'e'),_0x245e48=_0x957307[_0x9ad312(0x181)+'Selec'+_0x9ad312(0xc8b)](_0x11b6a3[_0x9ad312(0x4d4)]),_0x209e7b=_0x957307[_0x9ad312(0x181)+'Selec'+_0x9ad312(0xc8b)]('#sw2-'+_0x9ad312(0x299)),_0x14063d=_0x957307[_0x9ad312(0x181)+_0x9ad312(0x381)+_0x9ad312(0xc8b)]('#sw2-'+_0x9ad312(0x8e6)),_0x3a0ad2=_0x957307[_0x9ad312(0x181)+'Selec'+_0x9ad312(0xc8b)](_0x9ad312(0x157)+'facto'+'r'),_0x278e82=_0x957307['query'+'Selec'+'tor'](_0x11b6a3['kVQgp']),_0x132bcb=_0x957307['query'+_0x9ad312(0x381)+'tor'](_0x11b6a3[_0x9ad312(0x9d2)]),_0x38c41f=null,_0x2e9e48=![];function _0x2a0efe(){var _0xa4a9f6=_0x9ad312;if(_0x245e48)_0x245e48['style']['displ'+'ay']=_0x2e9e48?'':_0x11b6a3[_0xa4a9f6(0xc14)];if(_0x346403)_0x346403[_0xa4a9f6(0x4fc)+_0xa4a9f6(0xa15)+'t']=_0x2e9e48?_0xa4a9f6(0xcc1):_0x11b6a3[_0xa4a9f6(0xd14)];_0x957307[_0xa4a9f6(0x3d2)][_0xa4a9f6(0x3c3)]=_0x2e9e48?_0x11b6a3[_0xa4a9f6(0x1ad)]:_0xa4a9f6(0xd15),_0x957307['style']['backg'+'round']=_0x2e9e48?'#150c'+'1d':_0x11b6a3[_0xa4a9f6(0xca6)];}if(_0x346403)_0x346403[_0x9ad312(0x576)+'ck']=function(){_0x2e9e48=!_0x2e9e48,_0x2a0efe();};_0x11b6a3['luxFG'](_0x2a0efe);if(_0x504356)_0x504356['oncli'+'ck']=function(){_0x2caad2(!![]);};if(_0x209e7b)_0x209e7b[_0x9ad312(0x576)+'ck']=function(){var _0x2fc382=_0x9ad312;_0x322105(_0x49ea35[_0x2fc382(0xbe2)]);};var _0x2b0119=![];function _0x6185c5(){_0x322105(_0x49ea35['Jtlks'],{'on':_0x2b0119,'factor':parseFloat(_0x3a0ad2['value'])||0x7*-0x3f7+-0x1728+-0x85*-0x62});}if(_0x14063d)_0x14063d[_0x9ad312(0x576)+'ck']=function(){var _0x472ea8=_0x9ad312,_0xab8189=('0|3|1'+_0x472ea8(0x514))[_0x472ea8(0x783)]('|'),_0x526982=0xf*-0x38+0x2*-0x527+0xd96;while(!![]){switch(_0xab8189[_0x526982++]){case'0':_0x2b0119=!_0x2b0119;continue;case'1':_0x14063d[_0x472ea8(0x3d2)][_0x472ea8(0x6f3)+_0x472ea8(0x2c4)]=_0x2b0119?_0x6ccbd2:'trans'+_0x472ea8(0x52f)+'t';continue;case'2':_0x14063d[_0x472ea8(0x3d2)]['color']=_0x2b0119?_0x472ea8(0x40c)+'1b':_0x472ea8(0xada)+'f5';continue;case'3':_0x14063d[_0x472ea8(0x4fc)+_0x472ea8(0xa15)+'t']=_0x2b0119?_0x472ea8(0x8b9)+_0x472ea8(0xa7a):_0x472ea8(0x8b9)+_0x472ea8(0x443);continue;case'4':_0x49ea35[_0x472ea8(0x298)](_0x6185c5);continue;}break;}};if(_0x3a0ad2)_0x3a0ad2['oninp'+'ut']=function(){var _0xa34f96=_0x9ad312;if(_0x278e82)_0x278e82['textC'+_0xa34f96(0xa15)+'t']=_0x49ea35[_0xa34f96(0x188)]((parseFloat(_0x3a0ad2['value'])||0x1*0x14b7+-0x14bb+-0x1*-0x5)['toFix'+'ed'](-0x14ff*-0x1+0x1*-0x25bd+0x595*0x3),'x');_0x6185c5();};if(_0x58425a)_0x58425a['oncli'+'ck']=function(){var _0x492782=_0x9ad312,_0x34c054=_0x11b6a3[_0x492782(0xc01)](_0x11b6a3['ZanWF'](_0xdf8cb0,'\x0a'),_0x38c41f?JSON[_0x492782(0x659)+'gify'](_0x38c41f,null,0x2*-0xa47+0xe31+0x65e):'')+'\x0a'+_0x2728c4,_0x3977fc=function(){var _0x1bb94e=_0x492782;if(_0x58425a)_0x58425a['textC'+_0x1bb94e(0xa15)+'t']=_0x49ea35[_0x1bb94e(0xc80)];};if(navigator[_0x492782(0x3c5)+'oard']&&navigator[_0x492782(0x3c5)+_0x492782(0x346)]['write'+'Text'])navigator['clipb'+_0x492782(0x346)]['write'+_0x492782(0x6ca)](_0x34c054)['then'](_0x3977fc,function(){_0x2711f4();});else _0x2711f4();function _0x2711f4(){var _0x1bc6b1=_0x492782,_0xb8c28a=document['creat'+_0x1bc6b1(0xc89)+_0x1bc6b1(0x1e5)](_0x49ea35[_0x1bc6b1(0xd06)]);_0xb8c28a[_0x1bc6b1(0xc6d)]=_0x34c054;if(!document[_0x1bc6b1(0x300)])return;document[_0x1bc6b1(0x300)][_0x1bc6b1(0x927)+_0x1bc6b1(0x432)+'d'](_0xb8c28a),_0xb8c28a['selec'+'t']();try{document[_0x1bc6b1(0x22c)+_0x1bc6b1(0x652)+'d']('copy'),_0x3977fc();}catch(_0x652995){}_0xb8c28a[_0x1bc6b1(0x814)+'e']();}};_0x11b6a3[_0x9ad312(0xb24)](setTimeout,function(){var _0xad582a=_0x9ad312;if('WpsQZ'!==_0x11b6a3[_0xad582a(0xaac)]){var _0x418289=(_0xad582a(0xcda)+'|0|1')['split']('|'),_0x490bc1=-0x6d9+-0x2*-0x3a6+-0x73;while(!![]){switch(_0x418289[_0x490bc1++]){case'0':_0x2a17a7[_0xad582a(0x3d2)][_0xad582a(0xd72)]='#ffb3'+'c7';continue;case'1':_0x5c959f[_0xad582a(0x4fc)+_0xad582a(0xa15)+'t']=_0x11b6a3['rzcMK'](_0x11b6a3[_0xad582a(0x6c5)](_0x11b6a3['hxffF'],_0x11b6a3[_0xad582a(0xcb8)])+(_0xad582a(0x566)+_0xad582a(0xc13)+_0xad582a(0x46c)+_0xad582a(0xb86)+_0xad582a(0x7c5)+_0xad582a(0x9c3)+'\x0a\x0a'),_0xad582a(0xc58)+_0xad582a(0x4f0)+_0xad582a(0x807)+_0xad582a(0xdd0)+_0xad582a(0x83a)+_0xad582a(0xbaf)+'ting\x20'+_0xad582a(0x295)+_0xad582a(0x95e)+_0xad582a(0x972)+'origi'+_0xad582a(0x5cd)+_0xad582a(0xc8c))+('\x20\x202.\x20'+_0xad582a(0x29e)+'age\x20h'+_0xad582a(0x81b)+'t\x20bee'+_0xad582a(0x5f2)+_0xad582a(0x9c8)+'\x20sinc'+'e\x20ins'+_0xad582a(0x27c)+_0xad582a(0xdb2))+_0x11b6a3['kmmcA']+(_0xad582a(0x393)+_0xad582a(0xb17)+'lled\x20'+'—\x20two'+_0xad582a(0x614)+'es\x20of'+_0xad582a(0xcc3)+_0xad582a(0x4f8)+_0xad582a(0xc23)+_0xad582a(0xdbc)+_0xad582a(0x468)+_0xad582a(0x1bb)+_0xad582a(0x753)+_0xad582a(0x343)+_0xad582a(0x748))+('Reloa'+'d\x20the'+_0xad582a(0x4f1)+_0xad582a(0x8fd)+'\x20once'+'\x20and\x20'+_0xad582a(0x935)+_0xad582a(0x71d)+_0xad582a(0xd70)+_0xad582a(0x3bf)+'in.');continue;case'2':_0x2a17a7['textC'+_0xad582a(0xa15)+'t']='no\x20re'+'port\x20'+'after'+'\x2060s\x20'+'—\x20fra'+'me\x20no'+_0xad582a(0x1ab)+_0xad582a(0xd27)+'?';continue;case'3':if(_0x38c41f)return;continue;case'4':if(_0x11b6a3['SjPAq'](!_0x2a17a7,!_0x5c959f))return;continue;}break;}}else try{var _0x50222d=_0x2197f9;if(_0x50222d&&_0x50222d['el'])_0x50222d['el'][_0xad582a(0x3d2)]['displ'+'ay']=_0x3af83c?'':_0x49ea35['nmzTp'];var _0x30213d=_0x558c2a;if(_0x30213d&&_0x30213d['cv'])_0x30213d['cv']['style']['displ'+'ay']=_0x849633?'':_0x49ea35[_0xad582a(0x722)];}catch(_0x1731d9){}},0x3*0x534b+-0x12d66+-0x11de5*-0x1);var _0x559e8d={'set':function(_0x54ef97){var _0x33b2a7=_0x9ad312,_0x4dd249={'xofSF':_0x33b2a7(0x82e)+'n','tnDMW':function(_0x3f70e1,_0x2d4f8f){return _0x3f70e1+_0x2d4f8f;},'szJhI':'</sma'+'ll>'};_0x38c41f=_0x54ef97;if(_0x58425a)_0x58425a['style'][_0x33b2a7(0xa26)+'ay']='';if(_0x3dc7a9){var _0x5d0fb2=_0x11b6a3[_0x33b2a7(0x929)][_0x33b2a7(0x783)]('|'),_0x5ba69f=-0x16d7+0x3ab+-0x6*-0x332;while(!![]){switch(_0x5d0fb2[_0x5ba69f++]){case'0':_0x3dc7a9['textC'+_0x33b2a7(0xa15)+'t']=_0x11b6a3[_0x33b2a7(0xa56)]('v',_0x54ef97['versi'+'on']||'?');continue;case'1':var _0xf717d9=_0xa19145;continue;case'2':var _0x147432=_0x54ef97['versi'+'on']||'';continue;case'3':_0x3dc7a9[_0x33b2a7(0x3d2)][_0x33b2a7(0x6d7)+_0x33b2a7(0x2e8)+'r']=_0x147432===_0xf717d9?'rgba('+_0x33b2a7(0x741)+_0x33b2a7(0x71b)+_0x33b2a7(0x20f)+')':_0x11b6a3[_0x33b2a7(0x855)];continue;case'4':_0x3dc7a9['style']['color']=_0x147432===_0xf717d9?_0x6ccbd2:_0x33b2a7(0xc95)+'74';continue;}break;}}var _0x39b954=_0x54ef97['insta'+'nces']&&_0x54ef97['insta'+'nces'][_0x33b2a7(0xb78)+_0x33b2a7(0x6a2)+'ler'],_0x47a1fe=Math[_0x33b2a7(0x2c4)]((_0x54ef97[_0x33b2a7(0x1e1)+'edMs']||-0x76b*0x1+0x4*0x457+-0x9f1)/(0x1a17+0x7*-0x4a2+0xa3f));if(_0x2a17a7){var _0x46cd99,_0x218c0c;if(_0x39b954&&_0x54ef97['surve'+'y']&&_0x54ef97[_0x33b2a7(0x89b)+'y']['FPSco'+'ntrol'+_0x33b2a7(0x24a)])_0x46cd99=_0x11b6a3[_0x33b2a7(0xc01)]('LIVE\x20'+'·\x20',Object[_0x33b2a7(0xc9b)](_0x54ef97[_0x33b2a7(0xb17)+_0x33b2a7(0xbd9)])[_0x33b2a7(0x964)+'h'])+(_0x33b2a7(0x5fb)+'cts\x20·'+'\x20')+_0x47a1fe+'s',_0x218c0c=_0x11b6a3[_0x33b2a7(0x3cb)];else{if(_0x54ef97[_0x33b2a7(0xb2a)+'Appli'+'ed']>-0x7*-0x1d7+-0x6*-0x1e1+-0x1827)_0x46cd99=_0x11b6a3['ZUNaS'](_0x11b6a3[_0x33b2a7(0x847)]+_0x47a1fe,'s'),_0x218c0c='#ffd4'+'8a';else{if(_0x54ef97[_0x33b2a7(0xa1c)+'tData']){if('KjGpq'!==_0x33b2a7(0x9ce)){var _0x280a91={'NHBWA':function(_0xfe72c3,_0x2e67b2){return _0xfe72c3(_0x2e67b2);}},_0x26e2b6=_0x36572b[_0x25a1be],_0x11d268=_0xe71075(_0x4dd249['xofSF'],_0x33b2a7(0x9a5)+'b',_0x4dd249['tnDMW'](_0x33b2a7(0x15b)+'l>'+_0x26e2b6[_0x33b2a7(0xcb3)],_0x4dd249[_0x33b2a7(0x760)]));_0x11d268[_0x33b2a7(0x55a)]=_0x4dd249['xofSF'],_0x11d268[_0x33b2a7(0xe01)]=_0x26e2b6[_0x33b2a7(0xcb3)],function(_0xa197e4){_0x11d268['oncli'+'ck']=function(){var _0x110f2c=_0x576a;_0x280a91[_0x110f2c(0x987)](_0xda9757,_0xa197e4);};}(_0x26e2b6['id']),_0x4f2a20[_0x26e2b6['id']]=_0x11d268,_0x255701[_0x33b2a7(0x927)+_0x33b2a7(0x432)+'d'](_0x11d268);}else _0x46cd99=_0x11b6a3['rLoUF'](_0x11b6a3[_0x33b2a7(0x4bf)]+_0x47a1fe,'s'),_0x218c0c=_0x33b2a7(0xd79)+'8a';}else _0x46cd99=_0x11b6a3[_0x33b2a7(0x850)]((_0x54ef97['arm']&&_0x54ef97['arm']['ok']?_0x11b6a3[_0x33b2a7(0xba6)]:_0x33b2a7(0xdab)+_0x33b2a7(0x289))+_0x47a1fe,'s'),_0x218c0c=_0x11b6a3[_0x33b2a7(0x363)];}}_0x2a17a7[_0x33b2a7(0x4fc)+_0x33b2a7(0xa15)+'t']=_0x46cd99,_0x2a17a7[_0x33b2a7(0x3d2)][_0x33b2a7(0xd72)]=_0x218c0c;}_0x132bcb&&(_0x132bcb[_0x33b2a7(0x4fc)+_0x33b2a7(0xa15)+'t']=_0x54ef97[_0x33b2a7(0xd1d)]&&_0x54ef97[_0x33b2a7(0xd1d)]['lengt'+'h']?_0x33b2a7(0xd80)+_0x33b2a7(0xc08)+_0x33b2a7(0x15f)+'t:\x20'+_0x54ef97[_0x33b2a7(0xd1d)][_0x33b2a7(0xd89)](',\x20'):_0x11b6a3[_0x33b2a7(0x83b)]);_0x54ef97[_0x33b2a7(0x8e6)]&&_0x14063d&&('YLtlm'===_0x11b6a3[_0x33b2a7(0x237)]?(_0x2b0119=!!_0x54ef97[_0x33b2a7(0x8e6)]['on'],_0x14063d[_0x33b2a7(0x4fc)+_0x33b2a7(0xa15)+'t']=_0x2b0119?_0x33b2a7(0x8b9)+_0x33b2a7(0xa7a):_0x11b6a3['hhTrh'],_0x14063d['style'][_0x33b2a7(0x6f3)+'round']=_0x2b0119?_0x6ccbd2:_0x33b2a7(0x4e0)+_0x33b2a7(0x52f)+'t',_0x14063d[_0x33b2a7(0x3d2)]['color']=_0x2b0119?_0x11b6a3['RotCz']:_0x11b6a3[_0x33b2a7(0xcaf)],_0x278e82&&_0x54ef97[_0x33b2a7(0x8e6)]['facto'+'r']&&(_0x33b2a7(0x1db)!==_0x33b2a7(0x1db)?_0x558b45=_0x153950:_0x278e82[_0x33b2a7(0x4fc)+_0x33b2a7(0xa15)+'t']=_0x11b6a3['uifkz'](Number,_0x54ef97[_0x33b2a7(0x8e6)]['facto'+'r'])['toFix'+'ed'](-0x2*-0xe39+0x1*0x4fd+-0x216e)+'x')):_0x2039a1['textC'+'onten'+'t']=_0x504963[_0x33b2a7(0x659)+'gify'](_0x32bb71,null,-0x18c5+0x1b6d+-0x2a7));if(_0x5c959f){if(_0x11b6a3['PelBR'](_0x33b2a7(0xc32),_0x11b6a3[_0x33b2a7(0x910)])){var _0xb50ed4=_0x58d279();return _0xb50ed4?{'a':_0xb50ed4[_0x33b2a7(0x56d)],'b':_0xb50ed4['rawB'],'hits':_0xb50ed4[_0x33b2a7(0x421)],'order':_0xb50ed4['order']}:null;}else try{if(_0x33b2a7(0x8f7)!==_0x33b2a7(0x26c))_0x5c959f['textC'+_0x33b2a7(0xa15)+'t']=_0x8cf1a(_0x54ef97);else{var _0x1d7888=_0x350974[_0x3f6367];for(var _0x2e9ef9=-0x223+0x2b*0x97+-0x6*0x3df;_0x2e9ef9<_0x1d7888[_0x33b2a7(0x964)+'h'];_0x2e9ef9++){_0x4d49a3[_0x1f5be4+_0x49ea35['TtibY']+_0x1d7888[_0x2e9ef9]['o']['toStr'+_0x33b2a7(0x3cc)](0x17d*-0x11+-0x3*-0x13+0x1924)]=_0x1d7888[_0x2e9ef9]['v'];}}}catch(_0x596361){if('FqVQW'===_0x33b2a7(0x384))_0x5c959f[_0x33b2a7(0x4fc)+_0x33b2a7(0xa15)+'t']=JSON[_0x33b2a7(0x659)+_0x33b2a7(0x686)](_0x54ef97,null,-0x1b2d+-0x67b+0x1*0x21a9);else try{_0xc50b[_0x33b2a7(0x3b7)+'em'](_0x3b08e5,_0x101247['strin'+_0x33b2a7(0x686)](_0x2318d6[_0x33b2a7(0x3a2)]));}catch(_0x42a664){}}}console[_0x33b2a7(0x45e)](_0x33b2a7(0x3dc)+'kura]'+'\x20Skil'+_0x33b2a7(0x6e7)+_0x33b2a7(0xb0a)+'rt',_0x11b6a3['ZUNaS']('color'+':'+_0x6ccbd2,_0x33b2a7(0x5f6)+_0x33b2a7(0x6df)+_0x33b2a7(0xa04)+'0'),_0x54ef97),console[_0x33b2a7(0x45e)](_0x11b6a3['rLoUF'](_0xdf8cb0+'\x0a'+JSON['strin'+_0x33b2a7(0x686)](_0x54ef97,null,0xff*-0x14+-0xa*-0x34d+-0x1*0xd15)+'\x0a',_0x2728c4));}};return _0x957307[_0x9ad312(0x276)+'et'][_0x9ad312(0x946)]='1',_0x957307['api']=_0x559e8d,_0x559e8d;}function _0x8cf1a(_0x5dd042){var _0x2bd83d=_0x586988,_0x23281b={'hHIky':function(_0x3a8036,_0x33eeaa){return _0x3a8036+_0x33eeaa;},'FYrTX':_0x2bd83d(0x9a5)+'b','keYlH':function(_0x4e47ea,_0x210ad0){return _0x4e47ea===_0x210ad0;},'Pjijg':_0x2bd83d(0x761)+'ve','sgfPQ':function(_0x510652,_0x1ddf30){return _0x510652+_0x1ddf30;},'mYrLQ':function(_0x334eea,_0xbcb114,_0x2156f3,_0x2d8300){return _0x334eea(_0xbcb114,_0x2156f3,_0x2d8300);},'TvpID':function(_0x1a5bde,_0x6d013d){var _0x5a5522=_0x2bd83d;return _0x11b6a3[_0x5a5522(0x63a)](_0x1a5bde,_0x6d013d);},'rQarS':_0x11b6a3['FVEGn'],'UNUKC':function(_0x4afb2f,_0x177160){return _0x4afb2f+_0x177160;},'RLvOg':_0x11b6a3[_0x2bd83d(0xd57)],'KjdwN':function(_0x13021c,_0x37c6fe){return _0x13021c^_0x37c6fe;},'Klsmw':function(_0x186d72,_0x194c56){return _0x11b6a3['NgOMF'](_0x186d72,_0x194c56);},'hBXHf':_0x11b6a3[_0x2bd83d(0x5a5)],'JiwHV':function(_0x3ecaa7,_0x3e401c){var _0x3ea89b=_0x2bd83d;return _0x11b6a3[_0x3ea89b(0x784)](_0x3ecaa7,_0x3e401c);}},_0xb4f182=[];_0xb4f182[_0x2bd83d(0x68c)](_0x11b6a3['Mumye']('frame'+_0x2bd83d(0x319)+(_0x5dd042[_0x2bd83d(0xb73)]||'?')+'\x20\x20('+Math[_0x2bd83d(0x2c4)]((_0x5dd042['elaps'+_0x2bd83d(0xa0a)]||-0x295*0xd+-0x2541+0x46d2)/(-0x1*0x7a+0x1b0d+-0x33d*0x7)),'s)')),_0xb4f182[_0x2bd83d(0x68c)](_0x11b6a3[_0x2bd83d(0xdbd)](_0x11b6a3[_0x2bd83d(0xa56)](_0x2bd83d(0xa87)+'\x20\x20\x20\x20',_0x5dd042[_0x2bd83d(0x35b)]?_0x11b6a3[_0x2bd83d(0x9fe)]:'no')+_0x11b6a3[_0x2bd83d(0x3bd)]+(_0x5dd042[_0x2bd83d(0xd61)+_0x2bd83d(0x2aa)+'ext']?_0x2bd83d(0x9f4):'no')+(_0x2bd83d(0x3b4)+_0x2bd83d(0x5f3)),_0x11b6a3[_0x2bd83d(0x507)](_0x5dd042['typeC'+'ount'],null)?_0x5dd042[_0x2bd83d(0x5a6)+'ount']:'?')),_0xb4f182[_0x2bd83d(0x68c)](_0x11b6a3['uXDrz'](_0x11b6a3[_0x2bd83d(0x45d)]+_0x5dd042[_0x2bd83d(0xb2a)+_0x2bd83d(0xc33)+'ed'],'/')+_0x5dd042['hooks'+'Total']+(_0x2bd83d(0x34e)+_0x2bd83d(0xd69))),_0xb4f182['push']('');var _0x3b3af9=_0x5dd042[_0x2bd83d(0xb17)+'nces']||{},_0x110629=Object['keys'](_0x3b3af9);if(!_0x110629[_0x2bd83d(0x964)+'h']){if(_0x11b6a3[_0x2bd83d(0x735)]('kqUPT','kqUPT'))_0xb4f182[_0x2bd83d(0x68c)](_0x11b6a3['olbUT']),_0xb4f182['push'](''),_0xb4f182[_0x2bd83d(0x68c)](_0x11b6a3[_0x2bd83d(0x516)]),_0xb4f182[_0x2bd83d(0x68c)](_0x11b6a3[_0x2bd83d(0xc07)]);else{if(_0x5f3390[_0x2bd83d(0x82e)+'ns'][_0x253437]['class'+_0x2bd83d(0x99a)])_0x4049a3[_0x2bd83d(0x82e)+'ns'][_0x2b998a]['class'+'Name']=_0x23281b[_0x2bd83d(0x3aa)](_0x23281b['FYrTX'],_0x23281b['keYlH'](_0x24c2c1,_0x9957a1)?_0x23281b['Pjijg']:'');}}for(var _0x1ef02b=0x18b3+0x9*-0x3a9+0x83e;_0x11b6a3[_0x2bd83d(0x352)](_0x1ef02b,_0x110629[_0x2bd83d(0x964)+'h']);_0x1ef02b++){var _0x512930=_0x110629[_0x1ef02b];_0xb4f182['push'](_0x11b6a3[_0x2bd83d(0x2ad)](_0x512930+_0x11b6a3[_0x2bd83d(0xdca)],_0x3b3af9[_0x512930]));}_0xb4f182['push']('');var _0x383175=_0x5dd042[_0x2bd83d(0x89b)+'y']||{},_0x3ecf59=Object[_0x2bd83d(0xc9b)](_0x383175);for(var _0x36b824=-0xd*0x43+-0x76b*-0x2+-0xb6f*0x1;_0x36b824<_0x3ecf59['lengt'+'h'];_0x36b824++){if(_0x11b6a3[_0x2bd83d(0xd7c)](_0x11b6a3[_0x2bd83d(0x1d4)],_0x2bd83d(0xc5c))){var _0x258cdd=_0x3ecf59[_0x36b824],_0x433d00=_0x383175[_0x258cdd];if(!_0x433d00||!_0x433d00[_0x2bd83d(0x964)+'h'])continue;_0xb4f182['push'](_0x11b6a3['qmTwG'](_0x11b6a3['TNeFV'],_0x258cdd)+'\x20'+new Array(Math[_0x2bd83d(0xd62)](0x1600+-0x1*0x1505+-0xfa,_0x11b6a3[_0x2bd83d(0x588)](0x455*0x3+-0x5*0x5ce+0x1029,_0x258cdd[_0x2bd83d(0x964)+'h'])))[_0x2bd83d(0xd89)]('─')),_0xb4f182['push']('\x20\x20off'+'set\x20\x20'+_0x2bd83d(0x708)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20va'+_0x2bd83d(0xa6e)+_0x2bd83d(0x393)+_0x2bd83d(0x393)+_0x2bd83d(0xa1d));for(var _0x5bbe0c=-0x1*-0x4a3+-0x2*0xc5+-0x319;_0x5bbe0c<_0x433d00[_0x2bd83d(0x964)+'h'];_0x5bbe0c++){if(_0x11b6a3['PelBR'](_0x11b6a3[_0x2bd83d(0x219)],_0x2bd83d(0x342))){var _0x23b7ec=_0x433d00[_0x5bbe0c],_0x2860e2=_0x11b6a3[_0x2bd83d(0x735)](typeof _0x23b7ec['v'],_0x2bd83d(0x846)+'r')?_0x11b6a3['LTBdw'](Math[_0x2bd83d(0x2c4)](_0x23b7ec['v']*(-0x75a+-0x51*0x69+0x2c7b)),0xa2*0x11+0x9d3+-0x3*0x58f):_0x23b7ec['v'];_0xb4f182[_0x2bd83d(0x68c)](_0x11b6a3[_0x2bd83d(0x5a4)]('\x20\x20'+('0x'+_0x23b7ec['o']['toStr'+'ing'](-0x1973+0x17*-0x25+0x1cd6))[_0x2bd83d(0x52d)+'d'](-0x1f7d*-0x1+-0xa*0x151+0x1*-0x124b)+'\x20'+_0x23b7ec['k'][_0x2bd83d(0x52d)+'d'](-0x5b*0x4f+0x593+-0x17*-0xfb)+'\x20'+String(_0x2860e2)['padEn'+'d'](-0x111a+0x22b6+-0x118c)+'\x20',_0x23b7ec[_0x2bd83d(0xa1d)]||''));}else{_0x1a7483[_0x25ddd]=_0x23281b[_0x2bd83d(0x949)]('0x',_0x477b80[_0x57e33d][_0x2bd83d(0x461)][_0x2bd83d(0xd0f)+_0x2bd83d(0x3cc)](-0x1da9+-0xd15+0x2ace));if(_0x31a919[_0x1fb908][_0x2bd83d(0x505)+'ced'])_0x2904dc[_0x2bd83d(0x68c)](_0x1082b1);}}_0xb4f182[_0x2bd83d(0x68c)]('');}else{var _0x471bd6=_0x2524d7[_0x27888e],_0x4fe735=_0x23281b[_0x2bd83d(0xb4c)](_0xb7c3ef,_0x1ecf98,_0x5c7ef3,_0x471bd6['size']);if(!_0x4fe735)return![];var _0x4b9c27=new _0xdbfaa(_0x4fe735[_0x2bd83d(0x2cc)+'r'],_0x4fe735[_0x2bd83d(0x832)+_0x2bd83d(0x6ef)],_0x4fe735['byteL'+'ength']),_0x20b277=_0x23281b[_0x2bd83d(0x8f6)](_0x471bd6[_0x2bd83d(0xd28)+'pe'],'u8')?_0x4b9c27[_0x2bd83d(0x703)+_0x2bd83d(0x88e)](_0x471bd6[_0x2bd83d(0x5ec)]):_0x4b9c27[_0x2bd83d(0xd3f)+'t32'](_0x471bd6['key'],!![]),_0x4a9457;if(_0x34bd57===_0x23281b[_0x2bd83d(0x261)])_0x4a9457=_0x8e3200(_0x8d2fe5);else{if(_0x187dd7===_0x2bd83d(0x247))_0x4a9457=_0x5a0e71|0x1011+0xdc4+-0x1dd5;else _0x4a9457=(_0x49bdbc?0x1c92+0x52*0x44+-0x1*0x3259:0x1a69+-0x1c76+0x20d)&0x16ca*-0x1+0x124e+-0x3d*-0x17;}return _0x57f413(_0x23281b['UNUKC'](_0x1c090c,_0x1398ff)+_0x471bd6['hidde'+'n'],_0x23281b[_0x2bd83d(0x4be)],_0x23281b['KjdwN'](_0x4a9457,_0x20b277))&&_0x202cc3(_0x57ae7b+_0x591802+_0x471bd6[_0x2bd83d(0xc3a)],_0x23281b[_0x2bd83d(0xb38)](_0x2afdd1,_0x2bd83d(0x5c6))?_0x2bd83d(0x4d9):_0x1a7a32===_0x2bd83d(0x247)?_0x23281b['RLvOg']:'u8',_0x23281b[_0x2bd83d(0x85e)](_0x31a28c,'obfF')?_0x18498c:_0x11caa7===_0x23281b[_0x2bd83d(0x273)]?_0x333f46|0x1b85+-0x1*0xe47+0x5*-0x2a6:_0x3e8015?-0x1a80+-0x6e1*-0x3+0x1*0x5de:-0x1147*0x1+0x25ca+0x3b*-0x59)&&_0x5e50c0(_0x31b7a7+_0x4ec936+_0x471bd6['activ'+'e'],'u8',0x6d*0x2b+-0xb94+-0x1*0x6bb);}}if(_0x5dd042['warni'+_0x2bd83d(0xc12)]&&_0x5dd042['warni'+'ngs'][_0x2bd83d(0x964)+'h']){if(_0x2bd83d(0x43f)!==_0x11b6a3[_0x2bd83d(0xce5)]){var _0x5a52ff=_0x23b543[_0x2bd83d(0x9ad)](_0x23281b[_0x2bd83d(0x22f)](_0x301836['c'][_0x47c571]['v'][0xb5*-0x2b+-0x1*-0x1941+-0x1*-0x527],_0x12406d));if(_0x5a52ff<_0x499551)_0x11f9fc=_0x5a52ff;}else{_0xb4f182['push']('warni'+'ngs');for(var _0x41c9f3=-0x1*0x949+0x17e1+-0xe98;_0x11b6a3['PSTkv'](_0x41c9f3,_0x5dd042[_0x2bd83d(0x4cf)+'ngs']['lengt'+'h']);_0x41c9f3++)_0xb4f182[_0x2bd83d(0x68c)](_0x2bd83d(0x765)+_0x5dd042[_0x2bd83d(0x4cf)+'ngs'][_0x41c9f3]);}}return _0xb4f182[_0x2bd83d(0xd89)]('\x0a');}window[_0x586988(0xb44)+_0x586988(0x30b)+_0x586988(0x93d)+'r'](_0x586988(0xd29)+'ge',function(_0x90eb2){var _0x5ac878=_0x586988,_0x4baf4f=_0x90eb2[_0x5ac878(0xb1d)];if(!_0x4baf4f||_0x11b6a3['TVnCX'](_0x4baf4f['__sak'+_0x5ac878(0x429)],_0xef1c24))return;try{if(_0x4baf4f[_0x5ac878(0xc93)]===_0x5ac878(0x68d)){_0x52c072()[_0x5ac878(0xc45)]({'host':_0x4baf4f['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x11b6a3[_0x5ac878(0x735)](_0x4baf4f['kind'],'repor'+'t'))_0x11b6a3['OQbpZ'](_0x52c072)[_0x5ac878(0xc45)](_0x4baf4f[_0x5ac878(0x19d)+'t']);}catch(_0x289c7f){console[_0x5ac878(0xa4f)](_0x5ac878(0x3dc)+_0x5ac878(0xa1a)+_0x5ac878(0xd70)+_0x5ac878(0x76c)+_0x5ac878(0xc78)+'ailed',_0x11b6a3[_0x5ac878(0xbf1)]+_0x6ccbd2,_0x289c7f);}});function _0x582eb1(){_0x2caad2(!![]);}if(document[_0x586988(0x300)])_0x582eb1();else document['addEv'+_0x586988(0x30b)+'stene'+'r'](_0x586988(0xc90)+_0x586988(0x193)+'Loade'+'d',_0x582eb1,{'once':!![]});return;}window[_0x586988(0x93f)+_0x586988(0xbba)+_0x586988(0x29b)]=window['__SAK'+_0x586988(0xbba)+'W__']||{'at':Date[_0x586988(0x854)]()};function _0x51ef85(_0x32eefd,_0x56776e){var _0x28ffb3=_0x586988,_0x334ddf={'QdLrW':function(_0x1d7a54,_0x311319){var _0x46a664=_0x576a;return _0x11b6a3[_0x46a664(0xa69)](_0x1d7a54,_0x311319);},'uELXQ':_0x11b6a3[_0x28ffb3(0x702)],'ULVki':function(_0x4a5435,_0x5ddf29){var _0x106b74=_0x28ffb3;return _0x11b6a3[_0x106b74(0xb5d)](_0x4a5435,_0x5ddf29);}},_0x2c7305={'__sakura':_0xef1c24,'kind':_0x32eefd};if(_0x56776e){for(var _0x16daa1 in _0x56776e)_0x2c7305[_0x16daa1]=_0x56776e[_0x16daa1];}try{if(_0x11b6a3[_0x28ffb3(0xc0e)]!==_0x11b6a3['jWweF']){if(window[_0x28ffb3(0x52f)+'t']&&_0x11b6a3['pJUdq'](window[_0x28ffb3(0x52f)+'t'],window))window['paren'+'t'][_0x28ffb3(0x7ca)+'essag'+'e'](_0x2c7305,'*');}else{var _0x56fca2=_0x366cbe[_0x28ffb3(0x9fa)](this,arguments);try{if(_0x56fca2&&_0x334ddf[_0x28ffb3(0x4f5)](typeof _0x56fca2[_0x28ffb3(0x998)],_0x334ddf['uELXQ']))_0x56fca2[_0x28ffb3(0x998)](_0x23b6a4,function(){});else _0x334ddf[_0x28ffb3(0xc6e)](_0x4cb741,_0x56fca2);}catch(_0x46521c){}return _0x56fca2;}}catch(_0x21bf36){}try{if(window[_0x28ffb3(0x307)]&&window['top']!==window)window[_0x28ffb3(0x307)][_0x28ffb3(0x7ca)+'essag'+'e'](_0x2c7305,'*');}catch(_0x31aa07){}}console[_0x586988(0x45e)](_0x11b6a3['BVWLK'](_0x11b6a3[_0x586988(0x3b6)],_0xa19145),_0x11b6a3[_0x586988(0x756)](_0x11b6a3[_0x586988(0xbf1)]+_0x6ccbd2,_0x11b6a3['licAu']),{'host':_0x3f310d,'href':location['href'],'version':_0xa19145}),_0x11b6a3[_0x586988(0x186)](_0x51ef85,_0x586988(0x68d),{'host':_0x3f310d,'role':_0x2ed046});var _0x1c7ce6=window['__SAK'+_0x586988(0xbba)+'W__']&&window[_0x586988(0x93f)+_0x586988(0xbba)+'W__']['at']||Date[_0x586988(0x854)]();window['addEv'+_0x586988(0x30b)+_0x586988(0x93d)+'r'](_0x586988(0xd29)+'ge',function(_0x43629d){var _0x2f91d3=_0x586988;try{var _0xfeeb09=_0x43629d&&_0x43629d[_0x2f91d3(0xb1d)];if(!_0xfeeb09||_0x11b6a3[_0x2f91d3(0xd10)](_0xfeeb09['__sak'+'ura'],_0xef1c24)||_0xfeeb09[_0x2f91d3(0xc93)]!==_0x11b6a3['mBSKp'])return;_0x10b421(_0xfeeb09[_0x2f91d3(0x1b1)],_0xfeeb09['arg']);}catch(_0x5d9ea4){}});try{if('Ruepl'!=='Ruepl'){var _0x3152df=_0x51cad3();if(!_0x3152df)return null;return{'ptr':_0x11b6a3[_0x586988(0x9cf)]('0x',_0x3152df[_0x586988(0x461)]['toStr'+_0x586988(0x3cc)](-0x1362+-0x145d+0xd45*0x3)),'feet':_0x3152df[_0x586988(0x573)],'eye':_0x3152df['eye'],'posAt':_0x3152df[_0x586988(0xb00)],'copies':_0x3152df[_0x586988(0xb8f)+'s'],'cluster':_0x3152df['clust'+'er'],'eyeHeight':_0x416cc7,'pitch':_0x3152df['pitch'],'yaw':_0x3152df[_0x586988(0x314)],'reach':_0x3152df['reach']};}else{var _0x19cce0=new BroadcastChannel(_0x586988(0x33e)+_0x586988(0x1d2));_0x19cce0['onmes'+'sage']=function(_0xd5ca11){var _0x4972b2=_0x586988,_0x118bd0=_0xd5ca11[_0x4972b2(0xb1d)];if(_0x118bd0&&_0x118bd0['__sak'+'ura']===_0xef1c24&&_0x118bd0[_0x4972b2(0xc93)]==='cmd')_0x10b421(_0x118bd0[_0x4972b2(0x1b1)],_0x118bd0[_0x4972b2(0x472)]);};}}catch(_0x9e38aa){}var _0x213ee2=[];(function _0x4056a1(){var _0x37bf85=_0x586988,_0x27e34d={'jxyQV':function(_0x4d8852,_0x13172d){return _0x4d8852===_0x13172d;},'BVrHJ':_0x11b6a3[_0x37bf85(0xd2d)]},_0x1bd727=[_0x37bf85(0x45e),_0x11b6a3[_0x37bf85(0x291)],_0x37bf85(0xccf),'info',_0x37bf85(0x525)];for(var _0x4422c9=-0x52f+-0x252e*0x1+-0x5*-0x879;_0x11b6a3[_0x37bf85(0x352)](_0x4422c9,_0x1bd727[_0x37bf85(0x964)+'h']);_0x4422c9++){(function(_0x25160b){var _0x2c4e0b=_0x37bf85;if(_0x11b6a3[_0x2c4e0b(0xb41)]('Lqkvy',_0x11b6a3[_0x2c4e0b(0x425)])){var _0xc8c045=console[_0x25160b];if(typeof _0xc8c045!==_0x11b6a3[_0x2c4e0b(0x702)])return;console[_0x25160b]=function(){var _0x481d5d=_0x2c4e0b;try{var _0x591755='';for(var _0x533199=0x40a*-0x9+0x2520+-0xb*0x12;_0x533199<arguments[_0x481d5d(0x964)+'h'];_0x533199++){var _0x6f53ec=arguments[_0x533199];if(_0x27e34d['jxyQV'](typeof _0x6f53ec,_0x27e34d[_0x481d5d(0x2a8)]))_0x591755+=_0x6f53ec;else{if(_0x6f53ec&&_0x6f53ec[_0x481d5d(0xd29)+'ge'])_0x591755+=_0x6f53ec[_0x481d5d(0xd29)+'ge'];}}if(_0x591755[_0x481d5d(0x51a)+'Of'](_0xdf8cb0)!==-(-0x7*-0x251+0x1055+0x1*-0x208b))return _0xc8c045[_0x481d5d(0x9fa)](console,arguments);if(_0x591755['index'+'Of'](_0x481d5d(0x1c2)+'WebMo'+_0x481d5d(0x984))!==-(0x1df3*0x1+-0x1*-0x1367+-0x3159)){var _0x2aa372=_0x591755['slice'](0xf3b*-0x1+0x5*-0x124+0x14ef,-0x404+-0x4*0x60b+0x1d5c);if(_0x213ee2[_0x481d5d(0x51a)+'Of'](_0x2aa372)===-(-0x885*-0x3+0xc04+-0x2*0x12c9)&&_0x213ee2[_0x481d5d(0x964)+'h']<-0x245*-0x2+-0x1*-0x1edd+0x1*-0x232b)_0x213ee2[_0x481d5d(0x68c)](_0x2aa372);}}catch(_0x25466b){}return _0xc8c045['apply'](console,arguments);};}else{var _0x44caa2=_0x455d66['unity'+_0x2c4e0b(0xcf7)+_0x2c4e0b(0xdef)]||_0x2ac45c['unity'+_0x2c4e0b(0x339)]||_0x146404[_0x2c4e0b(0x484)];if(_0x44caa2)return _0x3d3ff5['sourc'+'e']=_0x2c4e0b(0xcf0)+_0x2c4e0b(0x256)+_0x2c4e0b(0x25e),_0x44caa2;}}(_0x1bd727[_0x4422c9]));}}());var _0x1ffb46={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x2de9bd=null,_0x9ce02f=null,_0x1b038f=-(-0x805+-0x16ba+0x1ec0),_0x5e4094=null;function _0x364140(_0x4eff0d){var _0x26e996=_0x586988;try{if(!_0x4eff0d)return;var _0x8f2c79=_0x4eff0d['insta'+_0x26e996(0xdef)]?_0x4eff0d[_0x26e996(0xb17)+_0x26e996(0xdef)][_0x26e996(0x9a6)+'ts']:_0x4eff0d[_0x26e996(0x9a6)+'ts']||null;if(!_0x8f2c79)return;if(!_0x5e4094)try{_0x5e4094=Object[_0x26e996(0xc9b)](_0x8f2c79)[_0x26e996(0xb19)](-0x1342+-0x17bd+0x2aff,-0x13*0x119+-0x21e1+0x4*0xdb5);}catch(_0xda5ba){}var _0x497a83=_0x8f2c79[_0x26e996(0x723)+'y'];_0x497a83&&_0x497a83['buffe'+'r']&&_0x497a83[_0x26e996(0x2cc)+'r']['byteL'+'ength']>0x2d*-0x77+-0x23a9+0x3894&&(_0x9ce02f=_0x497a83,_0x1b038f=Date[_0x26e996(0x854)]()-_0x1c7ce6);}catch(_0x40170c){}}function _0xd2fa86(){var _0x4e9d9b=_0x586988,_0x2348fb={'cEfMP':_0x4e9d9b(0x952)+_0x4e9d9b(0x8b4)};try{if(_0x11b6a3[_0x4e9d9b(0xa69)](typeof WebAssembly,_0x4e9d9b(0xce1)+_0x4e9d9b(0xbf4)))return;var _0x2e6783=['insta'+_0x4e9d9b(0x876)+'e','insta'+_0x4e9d9b(0x876)+_0x4e9d9b(0xa0e)+_0x4e9d9b(0x98e)];for(var _0x3d9be8=-0x1f35*0x1+0x1f56*-0x1+-0x3e8b*-0x1;_0x3d9be8<_0x2e6783[_0x4e9d9b(0x964)+'h'];_0x3d9be8++){(function(_0x33c5d6){var _0x4113e6=_0x4e9d9b,_0x4e8099={'ECBnv':function(_0x2bd042,_0x5c3b3){return _0x2bd042===_0x5c3b3;},'AkKgq':_0x2348fb[_0x4113e6(0x646)]},_0x4993de=WebAssembly[_0x33c5d6];if(typeof _0x4993de!==_0x4113e6(0x952)+'ion'||_0x4993de['__sak'+_0x4113e6(0x504)+'moryT'+'ap'])return;var _0x5a86d8=function(){var _0x252c8b=_0x4113e6;if(_0x4e8099[_0x252c8b(0x262)]('txZxc',_0x252c8b(0x7bd))){_0x479bc0()[_0x252c8b(0xc45)]({'host':_0x15c35a[_0x252c8b(0xb73)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else{var _0x5b9a71=_0x4993de[_0x252c8b(0x9fa)](this,arguments);try{if('ekAaU'===_0x252c8b(0x8a5)){var _0x5f4da8=_0x5434aa[_0x252c8b(0x8db)+_0x252c8b(0x600)+'orkSy'+'nc']||{};if(!_0x20d884[_0x252c8b(0xc9b)](_0x5f4da8)['lengt'+'h'])return![];return!!_0x1d0b34();}else{if(_0x5b9a71&&_0x4e8099['ECBnv'](typeof _0x5b9a71[_0x252c8b(0x998)],_0x4e8099['AkKgq']))_0x5b9a71['then'](_0x364140,function(){});else _0x364140(_0x5b9a71);}}catch(_0x3b553b){}return _0x5b9a71;}};_0x5a86d8[_0x4113e6(0xb6c)+_0x4113e6(0x504)+'moryT'+'ap']=!![];try{Object['defin'+_0x4113e6(0x872)+'erty'](_0x5a86d8,'name',{'value':_0x4993de['name'],'configurable':!![]});}catch(_0x56e5b1){}WebAssembly[_0x33c5d6]=_0x5a86d8;}(_0x2e6783[_0x3d9be8]));}}catch(_0x3d1097){}}var _0x4788c8=null,_0x35f760=null,_0x4c2416={},_0x5f19f2={'MouseLook':[{'name':_0x586988(0x17e)+_0x586988(0x501)+'\u0094','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0x489)],'ret':_0x11b6a3['iScqD'],'params':[_0x11b6a3[_0x586988(0xbf6)]],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],'f32']},{'name':_0x11b6a3[_0x586988(0x3e3)],'ret':_0x11b6a3['iScqD'],'params':[_0x586988(0x9b5)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],'f32']},{'name':_0x11b6a3[_0x586988(0x836)],'ret':_0x586988(0xd0e),'params':[_0x586988(0x9b5)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x586988(0x4d9)]},{'name':_0x586988(0x6af)+_0x586988(0x69d)+'\u0091','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0xb92)+_0x586988(0x27f)+'\u0094','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x69e)+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0xcea)+_0x586988(0xcc5),'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x729)+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u008c\u0091\u0088\u0095\u008c'+'\u0095\u008a\u0092\u0091\u008b'+'\u0095','ret':_0x11b6a3['oFACW'],'params':[],'wasmParams':[_0x586988(0x357)],'wasmRet':_0x11b6a3[_0x586988(0x772)]},{'name':_0x11b6a3['ezkQb'],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0087\u008e\u0089\u008e\u0091'+_0x586988(0xb71)+'\u0088','ret':_0x11b6a3[_0x586988(0x16d)],'params':[_0x11b6a3[_0x586988(0xbf6)]],'wasmParams':[_0x11b6a3['ApYDr'],_0x586988(0x4d9)]},{'name':_0x11b6a3['gnDVy'],'ret':'float','params':[],'wasmParams':['i32'],'wasmRet':_0x586988(0x4d9)},{'name':_0x586988(0x939)+'\u008c\u0090\u0089\u0086\u0092'+'\u0092','ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x424)+'\u0087\u0087\u008c\u0086\u0086'+'\u0091','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x1cd)+_0x586988(0x63c)+'\u008a','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3['lGlZB'],'ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x4e8)+_0x586988(0x241)+'\u008a','ret':'void','params':[_0x586988(0x9b5),_0x11b6a3[_0x586988(0xbf6)]],'wasmParams':['i32','f32',_0x11b6a3[_0x586988(0x772)]]},{'name':_0x11b6a3[_0x586988(0x8c0)],'ret':_0x11b6a3[_0x586988(0xbf6)],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]],'wasmRet':_0x586988(0x4d9)},{'name':'\u008b\u0092\u0089\u0090\u008d'+'\u0093\u0089\u008e\u0086\u0093'+'\u0088','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3[_0x586988(0x378)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':'\u0093\u008c\u0091\u0091\u0093'+'\u0090\u0091\u008e\u008f\u0089'+'\u008e','ret':'void','params':[_0x586988(0x9b5)],'wasmParams':['i32',_0x11b6a3[_0x586988(0x772)]]},{'name':_0x11b6a3[_0x586988(0x5b8)],'ret':_0x586988(0x9b5),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]],'wasmRet':_0x586988(0x4d9)},{'name':_0x586988(0xd23)+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':_0x586988(0xd0e),'params':[_0x586988(0x9b5),_0x586988(0x9b5)],'wasmParams':['i32',_0x11b6a3['Wuxco'],_0x586988(0x4d9)]},{'name':_0x11b6a3[_0x586988(0xdd3)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':'\u008a\u008c\u0086\u0095\u0087'+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':_0x11b6a3[_0x586988(0x795)],'ret':_0x586988(0xd0e),'params':[_0x586988(0x9b5)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x11b6a3[_0x586988(0x772)]]},{'name':'\u0090\u008e\u0095\u0093\u008d'+_0x586988(0x965)+'\u0093','ret':'float','params':[],'wasmParams':[_0x11b6a3['ApYDr']],'wasmRet':_0x586988(0x4d9)},{'name':_0x11b6a3[_0x586988(0x733)],'ret':_0x586988(0x9b5),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]],'wasmRet':'f32'},{'name':_0x586988(0x265)+_0x586988(0xb3a)+'\u0088','ret':'void','params':[_0x586988(0x9b5)],'wasmParams':[_0x11b6a3['ApYDr'],'f32']},{'name':_0x586988(0x4e1)+_0x586988(0xc4e)+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008c\u0091\u0093\u0095\u0087'+_0x586988(0x453)+'\u0093','ret':'void','params':[_0x11b6a3[_0x586988(0xbf6)]],'wasmParams':[_0x586988(0x357),_0x586988(0x4d9)]},{'name':'\u008c\u0089\u008e\u0086\u0086'+_0x586988(0x27a)+'\u0089','ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0x6ed)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x70f)+_0x586988(0x8b1)+'\u008d','ret':_0x586988(0xd0e),'params':[_0x586988(0x9b5)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x586988(0x4d9)]}],'FPScontroller':[{'name':_0x586988(0x418)+_0x586988(0x732)+'\u008e','ret':_0x11b6a3[_0x586988(0xbf6)],'params':[],'wasmParams':['i32'],'wasmRet':_0x11b6a3['Wuxco']},{'name':'\u0090\u0093\u0091\u0091\u008b'+_0x586988(0x5e0)+'\u0092','ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0xd90)],'ret':'bool','params':[],'wasmParams':[_0x11b6a3['ApYDr']],'wasmRet':_0x586988(0x357)},{'name':_0x586988(0xc30)+_0x586988(0x936)+'\u008b','ret':_0x11b6a3[_0x586988(0x16d)],'params':['bool'],'wasmParams':[_0x586988(0x357),_0x11b6a3['ApYDr']]},{'name':_0x11b6a3['hoAUY'],'ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0xdd4)+_0x586988(0x8ea)+'\u008a','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':['i32']},{'name':_0x11b6a3['TifYs'],'ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x11b6a3['MbYXU'],'ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0x11b6a3[_0x586988(0xd57)]},{'name':'\u0094\u008d\u0087\u0087\u008a'+_0x586988(0x1e6)+'\u0087','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0xbfc)],'ret':_0x11b6a3['WtaUO'],'params':[],'wasmParams':[_0x586988(0x357)],'wasmRet':_0x11b6a3['ApYDr']},{'name':_0x11b6a3[_0x586988(0x76f)],'ret':_0x11b6a3['WtaUO'],'params':[],'wasmParams':['i32'],'wasmRet':_0x11b6a3['ApYDr']},{'name':_0x586988(0xa05)+'\u008c\u0087\u0095\u0093\u008b'+'\u0094','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0xbda)+_0x586988(0xa78)+'\u0095','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0086\u0095\u008b\u0086\u0091'+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','ret':_0x586988(0xabb),'params':[_0x586988(0xabb),_0x11b6a3[_0x586988(0x19c)]],'wasmParams':['i32','i32',_0x11b6a3['ApYDr']],'wasmRet':_0x11b6a3[_0x586988(0xd57)]},{'name':_0x11b6a3[_0x586988(0x55e)],'ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x82f)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','ret':'bool','params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]],'wasmRet':_0x11b6a3[_0x586988(0xd57)]},{'name':_0x11b6a3['jbajO'],'ret':'void','params':['bool'],'wasmParams':[_0x11b6a3['ApYDr'],_0x586988(0x357)]},{'name':_0x11b6a3['lUMrJ'],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x3ae)+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','ret':_0x586988(0xabb),'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x586988(0x90e)+'\u008e\u0093\u0095\u008d\u008e'+'\u008f','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0x589)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0xa33)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x11b6a3[_0x586988(0x519)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':['i32']},{'name':_0x586988(0x636)+_0x586988(0x5c7)+'\u0094','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':['i32']},{'name':'\u008b\u0090\u0088\u008d\u0087'+_0x586988(0x1d8)+'\u0090','ret':_0x11b6a3[_0x586988(0x16d)],'params':[_0x586988(0xabb)],'wasmParams':[_0x11b6a3['ApYDr'],_0x586988(0x357)]},{'name':_0x586988(0x3df)+_0x586988(0xb0e)+'\u0086','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0x7f4)+_0x586988(0xdd1)+'\u008b','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3[_0x586988(0x508)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0xbea)+_0x586988(0x5f5)+'\u0091','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0xad8)+_0x586988(0x21c)+'\u008a','ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':_0x586988(0x8b0)+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0xa2e)+_0x586988(0x550)+'\u0091','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0093\u0086\u0088\u008d\u008f'+_0x586988(0x94f)+'\u0094','ret':_0x586988(0xd0e),'params':[_0x11b6a3[_0x586988(0x19c)]],'wasmParams':[_0x586988(0x357),_0x586988(0x357)]},{'name':_0x586988(0x805)+'\u0095\u008a\u0091\u0095\u0092'+'\u0090','ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':_0x586988(0x4e9)+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0x9bb)],'ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':'\u0087\u0094\u0091\u0095\u008f'+'\u008c\u0090\u0087\u008c\u0086'+'\u0087','ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0xa4e)+'\u008b\u008e\u008e\u0091\u0086'+'\u0087','ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x4c5)+_0x586988(0x7c9)+'\u0087','ret':'void','params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0094\u008d\u0087\u0094\u008d'+_0x586988(0x8f5)+'\u0094','ret':_0x11b6a3[_0x586988(0x16d)],'params':['bool'],'wasmParams':['i32',_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0xbde)+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','ret':_0x586988(0xabb),'params':[],'wasmParams':['i32'],'wasmRet':_0x586988(0x357)},{'name':_0x11b6a3['tuxVC'],'ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x11b6a3[_0x586988(0xab5)],'ret':_0x586988(0xabb),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]],'wasmRet':'i32'},{'name':_0x586988(0xbf7)+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','ret':'void','params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0xc54),'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0xdf2)+_0x586988(0x8bc)+'\u008b','ret':'void','params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0087\u0095\u008f\u008d\u008e'+'\u0089\u0087\u008f\u0092\u0095'+'\u0091','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':'\u0089\u0086\u0090\u0088\u008c'+_0x586988(0xa34)+'\u008b','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x11b6a3[_0x586988(0xac0)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':'\u008d\u0094\u0095\u008b\u008a'+_0x586988(0xcbc)+'\u0094','ret':_0x11b6a3['iScqD'],'params':[_0x586988(0x9b5)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x11b6a3[_0x586988(0x772)]]},{'name':_0x586988(0x41a)+_0x586988(0x34c)+'\u0092','ret':_0x11b6a3[_0x586988(0x19c)],'params':[],'wasmParams':[_0x11b6a3['ApYDr']],'wasmRet':_0x11b6a3[_0x586988(0xd57)]},{'name':_0x11b6a3[_0x586988(0x4e5)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3['HjrFb'],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0090\u0090\u008f\u008d\u008a'+_0x586988(0x475)+'\u0092','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3['Dblbx'],'ret':'bool','params':[],'wasmParams':[_0x586988(0x357)],'wasmRet':_0x586988(0x357)},{'name':_0x11b6a3[_0x586988(0x226)],'ret':_0x586988(0xabb),'params':['bool',_0x586988(0xabb)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x586988(0x357),_0x586988(0x357)],'wasmRet':_0x586988(0x357)},{'name':'Updat'+'e','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x11b6a3[_0x586988(0xb9b)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3[_0x586988(0x8f4)],'ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0xaa1)+_0x586988(0x5fc)+'\u0086','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x11b6a3[_0x586988(0xcb6)],'ret':_0x11b6a3['iScqD'],'params':[_0x11b6a3['oFACW']],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x586988(0x4d9)]},{'name':_0x586988(0x915)+'\u008a\u0093\u0090\u0086\u008c'+'\u008b','ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':_0x11b6a3[_0x586988(0x3eb)],'ret':_0x586988(0xabb),'params':['bool','bool'],'wasmParams':[_0x586988(0x357),_0x11b6a3[_0x586988(0xd57)],_0x586988(0x357)],'wasmRet':_0x11b6a3['ApYDr']},{'name':_0x11b6a3[_0x586988(0x88f)],'ret':_0x586988(0xd0e),'params':['float',_0x586988(0xabb)],'wasmParams':['i32',_0x11b6a3[_0x586988(0x772)],_0x11b6a3['ApYDr']]},{'name':'\u0094\u0090\u0095\u0092\u008e'+'\u0093\u0088\u0093\u0088\u0095'+'\u008f','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3[_0x586988(0x7dd)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':'\u0095\u0088\u0090\u0092\u0090'+'\u0089\u0093\u0094\u008e\u008c'+'\u0095','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]}],'TDM_GameManager':[{'name':_0x11b6a3['NqvFa'],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3['rWayX'],'ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':_0x11b6a3[_0x586988(0x169)],'ret':'bool','params':['int'],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x586988(0x357)],'wasmRet':_0x11b6a3[_0x586988(0xd57)]},{'name':_0x586988(0x8c5)+_0x586988(0x3ed)+'\u0086','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0087\u0094\u0093\u008f\u008d'+'\u0088\u0094\u008d\u008d\u008c'+'\u008c','ret':_0x586988(0xd0e),'params':['bool'],'wasmParams':[_0x586988(0x357),_0x586988(0x357)]},{'name':_0x11b6a3['HXCyu'],'ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3['uJaQj'],'ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0x3b0)],'ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0xc54),'ret':'void','params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0086\u008c\u008e\u0094\u0090'+_0x586988(0x43c)+'\u0088','ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x495)+_0x586988(0xd56)+'\u0093','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':['i32']},{'name':_0x11b6a3['EkNyV'],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0093\u0087\u008f\u008f\u0093'+_0x586988(0xc88)+'\u008c','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3['pWzJx'],'ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':['i32']},{'name':_0x11b6a3['MdiFL'],'ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x404)+'\u008c\u008f\u0086\u0095\u0094'+'\u008a','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3['hhMdP'],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x8e9)+_0x586988(0x7ec)+'\u008a','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x38f)+_0x586988(0x9f8)+'Break'+'Compl'+_0x586988(0x59e),'ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u008b\u0086\u0094\u0094\u0091'+'\u0090\u0091\u008a\u008f\u008c'+'\u0093','ret':_0x11b6a3[_0x586988(0x16d)],'params':['bool'],'wasmParams':[_0x586988(0x357),_0x586988(0x357)]},{'name':'\u0093\u0093\u008d\u008e\u008b'+_0x586988(0xa59)+'\u0086','ret':_0x11b6a3[_0x586988(0x16d)],'params':[_0x586988(0xaa0),_0x586988(0xaa0),_0x586988(0xaa0)],'wasmParams':['i32',_0x11b6a3['ApYDr'],_0x586988(0x357),_0x586988(0x357)]},{'name':_0x586988(0xd7a)+_0x586988(0x29c)+'\u0089','ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0x86a)],'ret':_0x11b6a3['iScqD'],'params':[_0x11b6a3[_0x586988(0x9da)],_0x586988(0xaa0),_0x586988(0xaa0)],'wasmParams':[_0x11b6a3['ApYDr'],_0x586988(0x357),'i32',_0x586988(0x357)]},{'name':_0x11b6a3['GUOQL'],'ret':_0x11b6a3[_0x586988(0x19c)],'params':[],'wasmParams':['i32'],'wasmRet':_0x11b6a3['ApYDr']},{'name':_0x11b6a3['Vjqls'],'ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0x3f2)],'ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':['i32']},{'name':'\u0086\u0090\u0086\u008c\u0090'+'\u0095\u008c\u0087\u0086\u0087'+'\u008b','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3[_0x586988(0xac9)],'ret':'void','params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0xa47)],'ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x11b6a3[_0x586988(0x6cc)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':'\u0088\u008c\u0089\u008e\u0095'+_0x586988(0x5ee)+'\u008e','ret':_0x11b6a3['iScqD'],'params':[_0x11b6a3[_0x586988(0x19c)]],'wasmParams':['i32',_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x586988(0xb76)+_0x586988(0xa8f)+'\u0094','ret':'void','params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x2f7)+_0x586988(0x65a)+'\u008c','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0086\u008a\u008e\u008b\u0088'+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':'OnApp'+'licat'+'ionFo'+'cus','ret':_0x11b6a3['iScqD'],'params':[_0x586988(0xabb)],'wasmParams':[_0x11b6a3['ApYDr'],_0x11b6a3['ApYDr']]},{'name':_0x586988(0x8b2)+'\u008b\u0088\u0093\u0088\u0091'+'\u0095','ret':_0x11b6a3['WtaUO'],'params':[],'wasmParams':[_0x586988(0x357)],'wasmRet':'i32'},{'name':_0x586988(0x42e)+_0x586988(0x60f)+'\u008f','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':'\u008c\u0086\u0095\u0091\u008a'+_0x586988(0x44f)+'\u008a','ret':'bool','params':[_0x586988(0xaa0)],'wasmParams':['i32','i32'],'wasmRet':_0x586988(0x357)},{'name':_0x586988(0x335)+'\u0090\u0088\u008f\u0089\u008a'+'\u008e','ret':_0x11b6a3['iScqD'],'params':['bool'],'wasmParams':[_0x586988(0x357),'i32']},{'name':_0x11b6a3[_0x586988(0x924)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x2bc)+'\u008e\u008d\u0089\u008b\u0093'+'\u008e','ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':_0x586988(0x647)+_0x586988(0x228)+'\u008c','ret':_0x586988(0xd0e),'params':['int','int',_0x586988(0xaa0)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],'i32',_0x11b6a3['ApYDr'],_0x586988(0x357)]},{'name':_0x11b6a3[_0x586988(0xce7)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':'Awake','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x11b6a3['gOdqK'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x11b6a3[_0x586988(0x593)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':_0x586988(0x3ba)+'\u0090\u0087\u0086\u0088\u008e'+'\u0094','ret':'void','params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]},{'name':_0x11b6a3[_0x586988(0x889)],'ret':_0x11b6a3[_0x586988(0x16d)],'params':[_0x586988(0xabb)],'wasmParams':['i32',_0x586988(0x357)]},{'name':_0x586988(0xbd3)+_0x586988(0xc7f)+'\u0095','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':['i32']},{'name':_0x586988(0xd51)+_0x586988(0x898)+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x586988(0x797)+'\u008b\u0091\u008d\u008a\u008b'+'\u008e','ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x586988(0x357)]},{'name':'\u008a\u008e\u008d\u008a\u0091'+_0x586988(0xda0)+'\u0092','ret':'void','params':[_0x11b6a3['ywDkT'],_0x586988(0xaa0)],'wasmParams':[_0x11b6a3[_0x586988(0xd57)],_0x11b6a3[_0x586988(0xd57)],_0x586988(0x357)]},{'name':_0x586988(0x369)+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','ret':_0x11b6a3[_0x586988(0x16d)],'params':[],'wasmParams':[_0x586988(0x357)]},{'name':_0x586988(0x7a3)+_0x586988(0x4d3)+'\u008e','ret':_0x11b6a3['iScqD'],'params':[],'wasmParams':['i32']},{'name':'\u0094\u0088\u008a\u0094\u0092'+'\u0089\u0094\u008e\u0093\u008f'+'\u0092','ret':_0x11b6a3['iScqD'],'params':[_0x586988(0xabb)],'wasmParams':['i32',_0x11b6a3[_0x586988(0xd57)]]},{'name':'\u0090\u008d\u008b\u0093\u008a'+'\u008d\u0089\u0090\u0093\u008a'+'\u008a','ret':_0x586988(0xd0e),'params':[],'wasmParams':['i32']},{'name':_0x11b6a3[_0x586988(0xa49)],'ret':_0x586988(0xd0e),'params':[],'wasmParams':[_0x11b6a3['ApYDr']]},{'name':'\u008e\u0094\u0093\u0094\u008d'+_0x586988(0x234)+'\u0089','ret':'void','params':[],'wasmParams':[_0x11b6a3[_0x586988(0xd57)]]}]},_0x37ed37=[],_0x49fba6=[],_0x1d9f74={},_0x27c474=0x6*-0x2b3+-0x1f5a+0x2f8c,_0x3103cb=![],_0x50ef99=[],_0xc889d2=[{'type':_0x11b6a3[_0x586988(0x3cf)],'keep':!![]},{'type':'Healt'+_0x586988(0x82a)+'pt','keep':!![]},{'type':'Weapo'+_0x586988(0xd18)+_0x586988(0x57c),'keep':![]},{'type':'TDM_G'+_0x586988(0x503)+_0x586988(0xd1b),'keep':!![]},{'type':_0x11b6a3['wDXfy'],'keep':!![]},{'type':'Photo'+_0x586988(0x600)+'orkSy'+'nc','keep':!![],'many':!![]},{'type':_0x11b6a3[_0x586988(0x353)],'keep':!![],'many':!![]},{'type':'NPC_C'+'otrol'+_0x586988(0x24a),'keep':!![],'many':!![]},{'type':_0x586988(0x688)+_0x586988(0x3f8),'keep':!![],'many':!![]}],_0x592274=[_0x11b6a3[_0x586988(0x1ce)],_0x586988(0x468)+_0x586988(0xb90)+'Sharp'+'-firs'+'tpass'+_0x586988(0x842),_0x11b6a3[_0x586988(0x91a)],_0x586988(0xde3)+_0x586988(0x68b),'Scivo'+'loCha'+_0x586988(0xc56)+'rCont'+_0x586988(0xd0a)+'r.dll',_0x11b6a3['nkiKG']];(function _0x44c217(){var _0x465be2=_0x586988;try{if(_0x11b6a3['AUPpI']!=='aAZWk'){var _0x490022=window['Unity'+'WebMo'+_0x465be2(0x984)]&&window['Unity'+_0x465be2(0x881)+'dkit']['Runti'+'me'];if(!_0x490022||_0x11b6a3[_0x465be2(0xdd6)](typeof _0x490022[_0x465be2(0xcfa)+'ePlug'+'in'],_0x465be2(0x952)+_0x465be2(0x8b4))){if('sISxh'!==_0x11b6a3[_0x465be2(0xc1a)])_0x11c0ab['fillS'+'tyle']=_0x465be2(0x6bc)+_0x465be2(0x741)+_0x465be2(0x3e5)+_0x465be2(0x9c0)+')',_0x440e0d[_0x465be2(0x653)]=_0x11b6a3[_0x465be2(0xd9c)],_0x292427['fillT'+_0x465be2(0xb0c)](_0x3c7152['round'](_0x54f50c['d']||-0xe2f+-0x3cc+-0x11fb*-0x1)+'m',_0x11b6a3['NDQTc'](_0x2427fa,_0x29573a/(-0xac8+-0x8*-0xeb+-0x62*-0x9)),_0x11b6a3[_0x465be2(0x588)](_0x33fd59,_0x11b6a3[_0x465be2(0xaa8)](_0xda7e13,0x1235+-0xd87*0x1+-0x4ac))-(0x4*0x1a0+0x22aa+-0x5e1*0x7));else{_0x1ffb46[_0x465be2(0xccf)]=_0x11b6a3['ynSXl'];return;}}_0x1ffb46['attem'+_0x465be2(0x2a1)]=!![],_0x35f760=_0x490022['creat'+_0x465be2(0x52b)+'in']({'name':_0x11b6a3['KoPSN'],'version':_0xa19145,'referencedAssemblies':_0x592274['slice']()}),_0x1ffb46['ok']=!![];try{var _0x363ae9=window[_0x465be2(0x1c2)+'WebMo'+'dkit'][_0x465be2(0x213)+'me'];_0x363ae9['__sak'+'uraTa'+'g']=_0x11b6a3[_0x465be2(0x1e2)](_0xa19145+':',Math[_0x465be2(0x4ca)+'m']()[_0x465be2(0xd0f)+'ing'](-0x7*-0x29f+-0x75*-0x40+-0x2f75)[_0x465be2(0xb19)](0x203d+0x1*-0x177e+0x8bd*-0x1,0x895+-0xa0*-0x1+-0x92b)),_0x2de9bd=_0x363ae9[_0x465be2(0xb6c)+_0x465be2(0x2ff)+'g'];}catch(_0x1ad5c6){}_0x549a69(),_0x2f25ab(),_0x1ffb46[_0x465be2(0xb2a)+_0x465be2(0x165)+_0x465be2(0x879)]=_0x37ed37[_0x465be2(0x964)+'h'],_0x11b6a3[_0x465be2(0x7c2)](_0xd2fa86),_0x1ffb46['memor'+_0x465be2(0xd8f)]=!![];}else _0x1374fd();}catch(_0x4d6779){_0x1ffb46['error']=_0x11b6a3['FXFgR'](String,_0x4d6779&&_0x4d6779['messa'+'ge']||_0x4d6779);}}());var _0x5befb6=new Float32Array(-0x7*-0x16f+0x1ef2+-0x28fa),_0x5c2351=new Int32Array(_0x5befb6[_0x586988(0x2cc)+'r']);function _0x36bed7(_0x4d24f8){return _0x5befb6[-0x1377+0x2219+-0xea2]=_0x4d24f8,_0x5c2351[-0xe18+-0x10*0x1fd+0x2de8];}function _0x5e01de(_0x53a58d){return _0x5c2351[0x668+-0x1bfa+-0x1*-0x1592]=_0x53a58d|0x19eb*-0x1+-0x53e+0x1f29,_0x5befb6[-0x1*0xff7+-0x1f48+0x2f3f];}var _0x265ccb={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x47a295(){var _0x2b84df=_0x586988,_0x524242={'fPrAO':function(_0x194c88,_0x465658){return _0x11b6a3['loiZO'](_0x194c88,_0x465658);},'rytoO':function(_0x47bb3f,_0x1503f5){var _0x3be32f=_0x576a;return _0x11b6a3[_0x3be32f(0xb5d)](_0x47bb3f,_0x1503f5);}};if(_0x11b6a3[_0x2b84df(0xb6d)]('JMKuq',_0x11b6a3[_0x2b84df(0x283)]))return![];else{try{if(_0x11b6a3['PoYMd']!==_0x2b84df(0xcfc)){var _0x145584=_0x52c07b['slice'](-0xbc2+-0x208+0x2*0x6e5,0x14b7*-0x1+0x346+0x1*0x129d);if(_0x404f08['index'+'Of'](_0x145584)===-(0x2ae+0x159e+-0x184b)&&_0x35a7be[_0x2b84df(0x964)+'h']<0x2*-0x1202+0x3*-0x37d+0x2eb7)_0x46a3f5[_0x2b84df(0x68c)](_0x145584);}else{if(_0x35f760&&_0x35f760['_runt'+_0x2b84df(0x57a)]){var _0xfe90b=_0x35f760[_0x2b84df(0x4cc)+_0x2b84df(0x57a)];if(typeof _0xfe90b[_0x2b84df(0xa36)+'veGam'+'e']==='funct'+'ion'){var _0x21463d=_0xfe90b['resol'+_0x2b84df(0x894)+'e']();if(_0x21463d){if('hICKF'===_0x11b6a3['YyMgq'])_0x8c9fe9=_0x4305f1();else return _0x265ccb[_0x2b84df(0x6f8)+'e']=_0x11b6a3[_0x2b84df(0x87c)],_0x21463d;}}if(_0xfe90b['_game'])return _0x265ccb['sourc'+'e']=_0x2b84df(0x5bd)+_0x2b84df(0x743)+_0x2b84df(0xd4f)+_0x2b84df(0xd35)+'e',_0xfe90b[_0x2b84df(0xd81)];}}}catch(_0x21e200){}try{var _0x4f4be1=window['Unity'+_0x2b84df(0x881)+'dkit']&&window['Unity'+'WebMo'+_0x2b84df(0x984)][_0x2b84df(0x213)+'me'];if(_0x4f4be1&&typeof _0x4f4be1[_0x2b84df(0xa36)+_0x2b84df(0x894)+'e']===_0x11b6a3[_0x2b84df(0x702)]){var _0x192dc2=_0x4f4be1[_0x2b84df(0xa36)+'veGam'+'e']();if(_0x192dc2)return _0x265ccb[_0x2b84df(0x6f8)+'e']=_0x2b84df(0x213)+_0x2b84df(0xdac)+'solve'+'Game('+')',_0x192dc2;}if(_0x4f4be1&&_0x4f4be1['_game'])return _0x265ccb['sourc'+'e']=_0x11b6a3['TSAiF'],_0x4f4be1;}catch(_0x32666c){}try{var _0xccfb59=window['unity'+'Insta'+'nce']||window[_0x2b84df(0xb15)+'Game']||window['game'];if(_0xccfb59)return _0x265ccb[_0x2b84df(0x6f8)+'e']=_0x11b6a3['FejID'],_0xccfb59;}catch(_0x11ee5d){}try{if(typeof game!==_0x11b6a3['BsfDu']&&game){if(_0x11b6a3[_0x2b84df(0xcd3)](_0x2b84df(0x361),_0x2b84df(0x95b)))return _0x265ccb['sourc'+'e']='bare\x20'+'game\x20'+_0x2b84df(0xda8)+'ng',game;else _0x41400f['error']=_0x524242['fPrAO'](_0x202d4e,_0x83d6ec&&_0x281318['messa'+'ge']||_0xbe594a);}}catch(_0x578234){}try{var _0x30eb14=Object[_0x2b84df(0xc9b)](window);for(var _0x58c3c6=-0x2*0x289+-0x6c*0x21+0x12fe;_0x58c3c6<_0x30eb14[_0x2b84df(0x964)+'h']&&_0x58c3c6<0xe81+-0xc99*0x3+0x19a2;_0x58c3c6++){var _0x521b61=window[_0x30eb14[_0x58c3c6]];if(_0x521b61&&_0x11b6a3[_0x2b84df(0x36c)](typeof _0x521b61,_0x2b84df(0x3b5)+'t')&&_0x521b61[_0x2b84df(0x31e)+'e']&&_0x521b61['Modul'+'e']['HEAPU'+'8']&&_0x521b61['Modul'+'e']['HEAPU'+'8'][_0x2b84df(0x2cc)+'r'])return _0x11b6a3[_0x2b84df(0x735)](_0x11b6a3[_0x2b84df(0x61c)],_0x11b6a3[_0x2b84df(0xd40)])?{'ok':![],'error':_0x524242[_0x2b84df(0x1b6)](_0xed2ec3,_0xb5be38&&_0x4ad3f9['messa'+'ge']||_0x56aee8)[_0x2b84df(0xb19)](-0x180f+-0x1*0x83f+0x204e,0x2180+-0x3fb+-0x1d0d)}:(_0x265ccb['sourc'+'e']=_0x11b6a3[_0x2b84df(0x97c)](_0x11b6a3['RPesl']+_0x30eb14[_0x58c3c6],'.Modu'+'le'),_0x521b61);}}catch(_0x341ead){}return _0x265ccb['sourc'+'e']=null,null;}}function _0x2b43f7(){var _0xfb9f6=_0x586988,_0x2904b7={'xcYbq':'1|3|0'+_0xfb9f6(0xcab),'RRlZt':function(_0x56f7d9,_0x39b5c1){return _0x56f7d9*_0x39b5c1;},'EbEFe':function(_0x2c7c8c,_0x2e317b){return _0x2c7c8c>_0x2e317b;},'RKoYJ':function(_0x27b760,_0x54d43d){return _0x27b760/_0x54d43d;},'PzWoo':function(_0x3ec846,_0x2c421f){return _0x3ec846-_0x2c421f;},'mXfJm':function(_0x4e92a6,_0x3534dd){return _0x4e92a6+_0x3534dd;},'LvBXF':function(_0x1383b7,_0xfc2c33){return _0x1383b7*_0xfc2c33;},'PEGgB':function(_0x3da335,_0x5ed336){return _0x3da335*_0x5ed336;}};try{if(_0x9ce02f&&_0x9ce02f[_0xfb9f6(0x2cc)+'r']&&_0x9ce02f['buffe'+'r'][_0xfb9f6(0x4ae)+_0xfb9f6(0x665)]){if(_0x11b6a3[_0xfb9f6(0x32b)]('XwPKp',_0x11b6a3[_0xfb9f6(0xb22)])){var _0x2cb185=_0x2904b7[_0xfb9f6(0x2b2)]['split']('|'),_0x554850=-0x21a9+0x1*0x1cda+0x4cf*0x1;while(!![]){switch(_0x2cb185[_0x554850++]){case'0':var _0xb9d965=_0x2904b7[_0xfb9f6(0xaee)](_0x225e7e,_0x4da8f7[-0x11*0x199+-0x25f7+0x4120])+_0x11ff3d*_0x4da8f7[-0x2ee+0x17*-0x55+0xa92]+_0x2904b7[_0xfb9f6(0xaee)](_0x5c7468,_0x4da8f7[0x1*-0xb44+0x63a*-0x1+0x1180]);continue;case'1':var _0x4da8f7=_0x250c64['fwd'],_0x3201f5=_0xf760e8[_0xfb9f6(0x264)];continue;case'2':if(_0x2904b7[_0xfb9f6(0xc47)](_0xb9d965,0xe*0xc1+0x1*0x1936+0xc*-0x2fb+0.5))_0xe7320f=_0x2904b7['RKoYJ'](_0x28b04c,_0xb9d965)/(_0xf65c46*_0x1f1fee);continue;case'3':var _0x225e7e=_0x20b6e5['x']-_0x116939['pos'][0x1*-0x1a6f+-0x18b0+0x239*0x17],_0x11ff3d=_0x2904b7['PzWoo'](_0x160aca['y'],_0x309c80['pos'][0x22c9*0x1+-0x94d+0x197b*-0x1]),_0x5c7468=_0x260f0e['z']-_0xe036a8[_0xfb9f6(0x3a2)][0x6fb+0x3*0x22d+0x360*-0x4];continue;case'4':var _0x28b04c=_0x2904b7['mXfJm'](_0x2904b7[_0xfb9f6(0xaee)](_0x225e7e,_0x3201f5[0x33*0x56+-0xbd*-0x3+-0x1359]),_0x2904b7['LvBXF'](_0x11ff3d,_0x3201f5[-0x124f+-0xd75+0x1fc5]))+_0x2904b7['PEGgB'](_0x5c7468,_0x3201f5[-0x5*0x31a+-0x2372+0x251*0x16]);continue;}break;}}else return _0x265ccb['sourc'+'e']=_0x265ccb[_0xfb9f6(0x6f8)+'e']||'insta'+'ntiat'+_0xfb9f6(0x1ba)+_0xfb9f6(0x5c2)+_0xfb9f6(0x4c4)+'ory',new Uint8Array(_0x9ce02f[_0xfb9f6(0x2cc)+'r']);}}catch(_0x4879c0){}try{var _0x38af27=_0x11b6a3[_0xfb9f6(0x786)](_0x47a295);if(_0x38af27&&_0x38af27['Modul'+'e']&&_0x38af27['Modul'+'e']['HEAPU'+'8']&&_0x38af27[_0xfb9f6(0x31e)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x38af27[_0xfb9f6(0x31e)+'e'][_0xfb9f6(0xcf9)+'8'];}catch(_0x31a480){}return null;}function _0x3a443b(){var _0x23631b=_0x586988,_0x3f4ce3=_0x2b43f7();if(!_0x3f4ce3)return null;try{return new DataView(_0x3f4ce3[_0x23631b(0x2cc)+'r'],_0x3f4ce3[_0x23631b(0x832)+_0x23631b(0x6ef)],_0x3f4ce3['byteL'+'ength']);}catch(_0x54010c){if(_0x11b6a3[_0x23631b(0xd07)](_0x23631b(0x603),_0x23631b(0x38d))){var _0x5463a2=_0x432adf[_0x23631b(0xb1d)];if(_0x5463a2&&_0x5463a2['__sak'+_0x23631b(0x429)]===_0x14b62e&&_0x11b6a3[_0x23631b(0xd19)](_0x5463a2['kind'],_0x23631b(0x1b1)))_0xd85a7f(_0x5463a2[_0x23631b(0x1b1)],_0x5463a2[_0x23631b(0x472)]);}else return null;}}function _0x5f506b(_0x483c55,_0x4636d1){var _0x3fbee8=_0x586988,_0x586d84={'BizuO':_0x11b6a3['gdcMh']},_0x1125ca=_0x3a443b();if(!_0x1125ca)return _0x265ccb[_0x3fbee8(0x4db)+'d']++,_0x265ccb['lastE'+'rror']=_0x265ccb[_0x3fbee8(0xc57)+_0x3fbee8(0x376)]||_0x3fbee8(0xbf8)+'APU8\x20'+_0x3fbee8(0x80c)+'ty\x20in'+_0x3fbee8(0x87a)+'e\x20not'+'\x20reac'+_0x3fbee8(0x45f)+'\x20via\x20'+_0x3fbee8(0x213)+_0x3fbee8(0xdac)+_0x3fbee8(0x656)+_0x3fbee8(0x598)+')\x20or\x20'+_0x3fbee8(0xcb4)+'indow'+_0x3fbee8(0x5ba)+'al',undefined;if(_0x483c55<-0x125*0x2+-0x2133+0x237d||_0x483c55+(0x1*-0xa0e+0x9*-0x258+0x1f2a)>_0x1125ca[_0x3fbee8(0x4ae)+'ength'])return _0x265ccb[_0x3fbee8(0x4db)+'d']++,_0x265ccb[_0x3fbee8(0xc57)+_0x3fbee8(0x376)]=_0x265ccb['lastE'+'rror']||_0x11b6a3['rzcMK'](_0x11b6a3[_0x3fbee8(0x2cd)]('addre'+'ss\x200x',_0x483c55[_0x3fbee8(0xd0f)+'ing'](-0x127+-0x2e*0xbf+-0x2389*-0x1)),_0x3fbee8(0x359)+_0x3fbee8(0x6f2)+_0x3fbee8(0x38a)+'0x')+_0x1125ca['byteL'+_0x3fbee8(0x665)][_0x3fbee8(0xd0f)+_0x3fbee8(0x3cc)](0x1af9+-0x10b*0x1f+0x56c),undefined;try{if(_0x11b6a3['EUCxm']===_0x11b6a3[_0x3fbee8(0xc24)]){_0x265ccb['ok']++;switch(_0x4636d1){case'u8':return _0x1125ca[_0x3fbee8(0x703)+_0x3fbee8(0x88e)](_0x483c55);case'i8':return _0x1125ca['getIn'+'t8'](_0x483c55);case _0x11b6a3[_0x3fbee8(0x978)]:return _0x1125ca['getIn'+_0x3fbee8(0xcb2)](_0x483c55,!![]);case _0x11b6a3[_0x3fbee8(0xaa7)]:return _0x1125ca[_0x3fbee8(0x703)+_0x3fbee8(0x192)](_0x483c55,!![]);case _0x11b6a3[_0x3fbee8(0xd57)]:return _0x1125ca['getIn'+_0x3fbee8(0xc15)](_0x483c55,!![]);case _0x11b6a3[_0x3fbee8(0x777)]:return _0x1125ca[_0x3fbee8(0x703)+_0x3fbee8(0x547)](_0x483c55,!![]);case _0x11b6a3[_0x3fbee8(0x772)]:return _0x1125ca[_0x3fbee8(0x9ac)+'oat32'](_0x483c55,!![]);case _0x3fbee8(0x8c8):return _0x1125ca['getFl'+_0x3fbee8(0x4fa)](_0x483c55,!![]);case'v2':case'v3':case'v4':return _0x1125ca['getFl'+_0x3fbee8(0xa57)](_0x483c55,!![]);default:return _0x1125ca['getIn'+_0x3fbee8(0xc15)](_0x483c55,!![]);}}else _0x54f4b9={'mean':_0x218932,'members':[]},_0x2f9e29[_0x3fbee8(0x68c)](_0x2ea03d);}catch(_0x23336f){if(_0x11b6a3[_0x3fbee8(0xd07)](_0x11b6a3['AOkhv'],_0x11b6a3[_0x3fbee8(0xc8d)])){var _0x46ba21=_0x14f9db['query'+'Selec'+_0x3fbee8(0xbfa)+'l'](_0x586d84[_0x3fbee8(0x8d4)]);for(var _0x24efe2=-0x79d*0x2+-0xb39+0x1a73;_0x24efe2<_0x46ba21[_0x3fbee8(0x964)+'h'];_0x24efe2++){try{if(_0x46ba21[_0x24efe2]['conte'+'ntWin'+_0x3fbee8(0xc28)])_0x46ba21[_0x24efe2][_0x3fbee8(0x4ba)+_0x3fbee8(0x901)+'dow'][_0x3fbee8(0x7ca)+_0x3fbee8(0xc09)+'e'](_0x1081b1,'*');}catch(_0x1a5503){}}}else return _0x265ccb[_0x3fbee8(0x4db)+'d']++,_0x265ccb['lastE'+'rror']=_0x265ccb[_0x3fbee8(0xc57)+_0x3fbee8(0x376)]||_0x11b6a3[_0x3fbee8(0xb5d)](String,_0x23336f&&_0x23336f[_0x3fbee8(0xd29)+'ge']||_0x23336f)[_0x3fbee8(0xb19)](-0x5d+-0x7a*-0x2f+-0x1609,0x150c+-0x686+0xe*-0x101),undefined;}}function _0x1c3263(_0x4e79bf,_0x30677a,_0x33cc29){var _0x2d2702=_0x586988;if(_0x11b6a3[_0x2d2702(0x35f)](_0x2d2702(0xb9f),_0x11b6a3[_0x2d2702(0x8e3)]))_0xb2047(!![]);else{var _0x1a8cc4=_0x11b6a3['lTZRx'](_0x3a443b);if(!_0x1a8cc4||_0x11b6a3[_0x2d2702(0x6e9)](_0x4e79bf,0x176f+0x5*-0x1d3+-0xe50)||_0x4e79bf+(-0x13a*0xf+0x2079+-0xe0f*0x1)>_0x1a8cc4['byteL'+_0x2d2702(0x665)])return![];try{switch(_0x30677a){case'u8':case'i8':_0x1a8cc4[_0x2d2702(0x44b)+'nt8'](_0x4e79bf,_0x11b6a3[_0x2d2702(0x4a0)](_0x33cc29,-0xcb4+0x134+-0xc7f*-0x1));break;case _0x11b6a3['pOBOq']:case _0x2d2702(0x16f):_0x1a8cc4['setIn'+_0x2d2702(0xcb2)](_0x4e79bf,_0x11b6a3[_0x2d2702(0x4e6)](_0x33cc29,-0x57b+0x1f6b+-0x4*0x67c),!![]);break;case _0x2d2702(0x357):case'u32':_0x1a8cc4[_0x2d2702(0x556)+_0x2d2702(0xc15)](_0x4e79bf,_0x11b6a3[_0x2d2702(0x4e6)](_0x33cc29,-0x578+0x9*-0x98+0x8*0x15a),!![]);break;case _0x11b6a3[_0x2d2702(0x772)]:_0x1a8cc4[_0x2d2702(0xa45)+_0x2d2702(0xa57)](_0x4e79bf,_0x33cc29,!![]);break;default:_0x1a8cc4[_0x2d2702(0x556)+'t32'](_0x4e79bf,_0x33cc29|-0x1189+0x1*0x691+0xaf8,!![]);}return!![];}catch(_0xabab50){return![];}}}var _0x98addd={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x586988(0x357)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x11b6a3['ApYDr']},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x4d44bb(_0x1da9bb){var _0x4f95f3=_0x586988,_0x3e5aed='';for(var _0xd023c2=0xb*-0x38b+-0x447+0x2b40;_0xd023c2<_0x1da9bb[_0x4f95f3(0x964)+'h'];_0xd023c2++){var _0x123743=_0x1da9bb[_0xd023c2][_0x4f95f3(0xd0f)+'ing'](0x21*0xc7+0x1f9c+-0x3933);_0x3e5aed+=_0x11b6a3[_0x4f95f3(0xc39)](_0x11b6a3[_0x4f95f3(0xdb5)](_0x123743[_0x4f95f3(0x964)+'h'],-0x7*0x576+-0x1335+-0x5*-0xb7d)?'0':'',_0x123743);}return _0x3e5aed;}function _0x5e1cc6(_0x4942c0,_0x277d15,_0x5313f6){var _0x4eb993=_0x586988,_0x41c2db=_0x11b6a3[_0x4eb993(0x6c8)](_0x3a443b);if(!_0x41c2db)return _0x265ccb['faile'+'d']++,_0x265ccb['lastE'+_0x4eb993(0x376)]=_0x265ccb[_0x4eb993(0xc57)+_0x4eb993(0x376)]||_0x4eb993(0xbf8)+'APU8\x20'+_0x4eb993(0x80c)+_0x4eb993(0x456)+'stanc'+_0x4eb993(0x243)+_0x4eb993(0xbe4)+_0x4eb993(0x45f)+_0x4eb993(0x870)+_0x4eb993(0x213)+'me.re'+_0x4eb993(0x656)+'Game('+')\x20or\x20'+'any\x20w'+_0x4eb993(0xc5b)+'\x20glob'+'al',null;if(_0x11b6a3['akFnl'](_0x277d15,-0x3*0xa9b+-0x2*-0xf7b+0xdb)||_0x277d15+_0x5313f6>_0x41c2db[_0x4eb993(0x4ae)+'ength'])return _0x265ccb[_0x4eb993(0x4db)+'d']++,_0x265ccb[_0x4eb993(0xc57)+'rror']=_0x265ccb[_0x4eb993(0xc57)+'rror']||_0x11b6a3[_0x4eb993(0x869)](_0x11b6a3[_0x4eb993(0xd60)]('addre'+'ss\x200x',_0x11b6a3[_0x4eb993(0xa94)](_0x4942c0,_0x277d15)[_0x4eb993(0xd0f)+_0x4eb993(0x3cc)](-0x2535+-0x43*0x67+0x403a))+_0x11b6a3[_0x4eb993(0x36e)],_0x41c2db[_0x4eb993(0x4ae)+_0x4eb993(0x665)]['toStr'+_0x4eb993(0x3cc)](0x1*0x8e4+0x1140+0x1a14*-0x1)),null;try{var _0x10dc93=new Uint8Array(_0x5313f6);for(var _0x31cd48=0x262a+0x1285+-0x38af;_0x31cd48<_0x5313f6;_0x31cd48++)_0x10dc93[_0x31cd48]=_0x41c2db['getUi'+'nt8'](_0x4942c0+_0x277d15+_0x31cd48);return _0x265ccb['ok']++,_0x10dc93;}catch(_0xae3935){return _0x265ccb[_0x4eb993(0x4db)+'d']++,_0x265ccb[_0x4eb993(0xc57)+_0x4eb993(0x376)]=_0x265ccb[_0x4eb993(0xc57)+_0x4eb993(0x376)]||_0x11b6a3['uifkz'](String,_0xae3935&&_0xae3935['messa'+'ge']||_0xae3935)[_0x4eb993(0xb19)](-0x1ff8+-0x1646+0x106*0x35,0x1012+0x21a1*0x1+-0x313b),null;}}function _0x2c9844(_0x1fc922,_0x2aac9e,_0x270703){var _0x72d713=_0x586988,_0x24f20a=(_0x72d713(0x235)+'|0|4|'+_0x72d713(0xca8)+_0x72d713(0x7ae))['split']('|'),_0x1751a6=-0x2*0x63b+0x1*-0x2db+0x3*0x51b;while(!![]){switch(_0x24f20a[_0x1751a6++]){case'0':var _0x33a028=new DataView(_0x35b8a0[_0x72d713(0x2cc)+'r'],_0x35b8a0['byteO'+_0x72d713(0x6ef)],_0x35b8a0['byteL'+_0x72d713(0x665)]);continue;case'1':var _0x246488=_0x11b6a3[_0x72d713(0xce9)](_0x33a028['getUi'+'nt8'](_0x37370a[_0x72d713(0xe26)+'d']),0x5*-0x3a+0x1a74+-0x1951);continue;case'2':var _0x35b8a0=_0x5e1cc6(_0x1fc922,_0x2aac9e,_0x37370a[_0x72d713(0x6c6)]);continue;case'3':return{'keyAtOffset0':_0x53f71f,'hidden':_0x20f4eb,'inited':_0x246488,'fake':_0x1d5363,'act':_0xaa6fdf,'hex':_0x4d44bb(_0x35b8a0),'alt':_0x270703===_0x11b6a3['BKSTO']?_0x11b6a3[_0x72d713(0xd63)](_0x20f4eb,_0x1d5363|-0xb*-0xbc+-0x13f*0x1f+0x1e8d*0x1):null};case'4':var _0x53f71f=_0x33a028[_0x72d713(0xd3f)+'t32'](_0x37370a[_0x72d713(0x5ec)],!![]);continue;case'5':var _0x37370a=_0x98addd[_0x270703];continue;case'6':if(!_0x35b8a0)return null;continue;case'7':var _0x1d5363=_0x270703===_0x72d713(0x5c6)?_0x33a028['getFl'+_0x72d713(0xa57)](_0x37370a[_0x72d713(0xc3a)],!![]):_0x11b6a3[_0x72d713(0x36c)](_0x270703,_0x72d713(0x247))?_0x33a028[_0x72d713(0xd3f)+_0x72d713(0xc15)](_0x37370a['fake'],!![]):_0x33a028['getUi'+_0x72d713(0x88e)](_0x37370a[_0x72d713(0xc3a)]);continue;case'8':var _0x20f4eb=_0x33a028['getIn'+'t32'](_0x37370a[_0x72d713(0x714)+'n'],!![]);continue;case'9':var _0xaa6fdf=_0x11b6a3['DtzfT'](_0x33a028['getUi'+'nt8'](_0x37370a[_0x72d713(0x4de)+'e']),0x1*0x26ad+0x233*0x8+0x1*-0x3844);continue;}break;}}function _0x396bdf(_0xfb9a4b,_0x372564,_0x2b3eca){var _0x197b84=_0x586988;if('knDXw'===_0x197b84(0xde0)){if(_0x11b6a3[_0x197b84(0x899)](_0xfb9a4b,_0x11b6a3[_0x197b84(0x962)]))return _0x5e01de(_0x372564^_0x2b3eca);if(_0xfb9a4b===_0x11b6a3[_0x197b84(0x5a5)])return _0x11b6a3[_0x197b84(0xd63)](_0x372564,_0x2b3eca)|-0x26eb+-0xf77*0x1+-0x1b31*-0x2;return(_0x11b6a3[_0x197b84(0xd63)](_0x372564,_0x2b3eca)&0x103d+0x13*0x4d+-0x14f5)!==-0x5f*-0x1c+-0x4f5+0x1*-0x56f?-0x1*0x1a93+-0x209f+-0x5*-0xbd7:-0x904+-0x25*0x80+0x1b84;}else _0x3ab1bb={'rawA':_0x19b0b4['setLa'+'st'],'rawB':_0x4728ba[_0x197b84(0xd71)],'hits':_0x42674f['pairH'+_0x197b84(0xb79)],'name':_0x551f87},_0x5d6dd7=_0x1751c3[_0x197b84(0x7d8)+_0x197b84(0xb79)];}function _0x3a8384(_0x5dc6a5,_0x5c003c,_0x4ed238){var _0x311876=_0x586988,_0x41d1b3={'fvXiE':function(_0x19e516,_0xc7c4a9){return _0x19e516*_0xc7c4a9;}};if(_0x11b6a3[_0x311876(0x8d8)]('asgRL',_0x311876(0x602)))_0x347c3d['worst'+'Delta']=_0x2fa00b['round'](_0x41d1b3[_0x311876(0x18f)](_0x4d92c0,0x212*-0xd+0x468+0xa1*0x2a))/(0x1705+0x24ee+-0x380b),_0x3342df[_0x311876(0x95c)+_0x311876(0x2b1)+'ng']=_0x44ed03[_0x311876(0x2c4)](_0xb6efe5[_0x311876(0xae8)+'ng']);else{var _0x470adb=_0x98addd[_0x4ed238];if(!_0x470adb)return null;var _0x1459b0=_0x11b6a3[_0x311876(0xbc7)](_0x5f506b,_0x11b6a3[_0x311876(0x9cf)](_0x5dc6a5+_0x5c003c,_0x470adb[_0x311876(0x5ec)]),'u8'),_0x4fbe0e=_0x5f506b(_0x5dc6a5+_0x5c003c+_0x470adb[_0x311876(0x714)+'n'],_0x311876(0x357)),_0x6197c8=_0x11b6a3['CpSKo'](_0x5f506b,_0x11b6a3[_0x311876(0xa56)](_0x5dc6a5+_0x5c003c,_0x470adb['inite'+'d']),'u8'),_0x1855bc=_0x11b6a3[_0x311876(0xa44)](_0x5f506b,_0x5dc6a5+_0x5c003c+_0x470adb[_0x311876(0xc3a)],_0x4ed238===_0x311876(0x5c6)?'f32':_0x4ed238==='obfI'?'i32':'u8'),_0x33fc1e=_0x11b6a3['PxvnT'](_0x5f506b,_0x11b6a3[_0x311876(0xdbd)](_0x5dc6a5,_0x5c003c)+_0x470adb[_0x311876(0x4de)+'e'],'u8');if(_0x1459b0===undefined||_0x4fbe0e===undefined||_0x1855bc===undefined||_0x33fc1e===undefined)return null;_0x1459b0&=0x1392+0x5*0x746+-0x36f1,_0x4fbe0e|=-0xe*-0x229+0xbd7+-0x2a15,_0x6197c8=_0x11b6a3[_0x311876(0x937)](_0x11b6a3['pVFsB'](_0x6197c8,-0x12*-0x126+-0x1707+-0x3*-0xc9),0x1722+-0x2650+0x1*0xf2f),_0x33fc1e&=0x163b+0x1a4b+0x1*-0x3085;var _0xeaad9f;if(_0x11b6a3[_0x311876(0x509)](_0x4ed238,'obfF'))_0xeaad9f=_0x5e01de(_0x4fbe0e^_0x1459b0);else{if(_0x11b6a3['vPjei'](_0x4ed238,'obfI'))_0xeaad9f=_0x11b6a3['fQyHW'](_0x4fbe0e^_0x1459b0,-0x8c3+0x1*-0x1b92+0x2455);else _0xeaad9f=_0x11b6a3[_0x311876(0x500)]((_0x4fbe0e^_0x1459b0)&0x1*-0x1532+0x1a4+-0x1*-0x148d,0x179*0x9+-0x851+-0x8*0x9e)?0xa29+-0x7*0x422+-0x3*-0x642:0x1*-0xc9d+0x1722+-0xa85;}return{'real':_0xeaad9f,'fake':_0x1855bc,'act':_0x33fc1e,'init':_0x6197c8,'key':_0x1459b0,'hidden':_0x4fbe0e};}}function _0xcac3d1(_0x111904,_0x152db6,_0x5c6163,_0x1f50c9){var _0x359b8a=_0x586988,_0x2b34e0=_0x98addd[_0x5c6163],_0xe0bd2=_0x5e1cc6(_0x111904,_0x152db6,_0x2b34e0['size']);if(!_0xe0bd2)return![];var _0x4f5cc2=new DataView(_0xe0bd2['buffe'+'r'],_0xe0bd2[_0x359b8a(0x832)+'ffset'],_0xe0bd2['byteL'+_0x359b8a(0x665)]),_0x18d692=_0x11b6a3[_0x359b8a(0x63a)](_0x2b34e0[_0x359b8a(0xd28)+'pe'],'u8')?_0x4f5cc2['getUi'+'nt8'](_0x2b34e0[_0x359b8a(0x5ec)]):_0x4f5cc2[_0x359b8a(0xd3f)+'t32'](_0x2b34e0[_0x359b8a(0x5ec)],!![]),_0x3be283;if(_0x5c6163==='obfF')_0x3be283=_0x36bed7(_0x1f50c9);else{if(_0x5c6163===_0x359b8a(0x247))_0x3be283=_0x1f50c9|0x1*0x168e+-0x323*-0x2+-0x1cd4;else _0x3be283=(_0x1f50c9?0x10ac+-0xd0*0x4+-0x3*0x479:-0x2663+0x258e+0xd5*0x1)&0x24fd*0x1+0x9*0x98+-0x197*0x1a;}return _0x11b6a3['HwvFg'](_0x1c3263,_0x11b6a3[_0x359b8a(0x3ea)](_0x111904+_0x152db6,_0x2b34e0[_0x359b8a(0x714)+'n']),_0x11b6a3[_0x359b8a(0xd57)],_0x11b6a3[_0x359b8a(0xd63)](_0x3be283,_0x18d692))&&_0x1c3263(_0x11b6a3[_0x359b8a(0xc03)](_0x111904+_0x152db6,_0x2b34e0['fake']),_0x11b6a3['phVHL'](_0x5c6163,_0x11b6a3[_0x359b8a(0x962)])?'f32':_0x11b6a3[_0x359b8a(0x779)](_0x5c6163,_0x359b8a(0x247))?_0x11b6a3[_0x359b8a(0xd57)]:'u8',_0x5c6163===_0x359b8a(0x5c6)?_0x1f50c9:_0x11b6a3[_0x359b8a(0x735)](_0x5c6163,_0x11b6a3['BKSTO'])?_0x1f50c9|-0x1*0x2563+0xa5a+0x903*0x3:_0x1f50c9?0xf87+-0xfb*0x5+0xa9f*-0x1:0x1*0x617+0x16fd+-0x1d14)&&_0x1c3263(_0x111904+_0x152db6+_0x2b34e0['activ'+'e'],'u8',-0x17*-0x197+0x102*0x1f+-0x43cf);}var _0x3b07fd={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x305655=-0xf1*-0x1+0x21*-0x53+0x9c2+0.03,_0x45faa8=-0xbee+0x2*-0x6b+0xcc6,_0x5e5e77={},_0x130698=-0x8d2*-0x1+-0x2108+0x6*0x409,_0x18199f=[],_0x4e6b9b=[];function _0x305e83(_0x3f3d6f){var _0x16d32e=_0x586988,_0x3c5352={'WXwVn':function(_0x2d3fa9,_0x51b077){return _0x2d3fa9+_0x51b077;},'AupQw':function(_0x1bf902,_0x23284b){var _0x240553=_0x576a;return _0x11b6a3[_0x240553(0xb5d)](_0x1bf902,_0x23284b);},'RPKgt':function(_0xc7a758){var _0x539354=_0x576a;return _0x11b6a3[_0x539354(0xc05)](_0xc7a758);},'uKifj':'4|16|'+_0x16d32e(0xb99)+_0x16d32e(0x830)+'13|12'+_0x16d32e(0x648)+_0x16d32e(0xa35)+'|3|11'+_0x16d32e(0xaa3),'NOpba':function(_0x14e581,_0x4a2f8e,_0x452198){return _0x14e581(_0x4a2f8e,_0x452198);},'hBYeY':_0x16d32e(0x6f6),'AMVna':_0x11b6a3[_0x16d32e(0x40f)],'jvPUj':function(_0x4c60df,_0x4e784c){return _0x4c60df===_0x4e784c;},'LstiA':_0x11b6a3[_0x16d32e(0x772)]};if(_0x11b6a3['qyGXL']!==_0x16d32e(0xcfd))_0x23897a[_0x16d32e(0xc77)+'Path'](),_0x357cd3[_0x16d32e(0x96b)](_0x3cbc1e,_0x9a0eee,_0x11b6a3[_0x16d32e(0x6b3)](_0x473d73-(-0xf90+-0x5e3+0x1*0x1577),_0x551043)/(0xe5d*0x1+0xd81+-0x1bdb),0x19b1+-0x15ae+-0x403,_0x5a2bec['PI']*(0x15b*-0x14+-0x188*0x13+0x3836)),_0x420c63['strok'+'e']();else{var _0x117f43=_0x5b1b65['FPSco'+'ntrol'+_0x16d32e(0x24a)]||[],_0x3f84d3=[];_0x4e6b9b=[],_0x18199f=[];for(var _0x37bd86=-0x27*0xa5+-0xe74*-0x1+0xaaf;_0x37bd86<_0x117f43['lengt'+'h'];_0x37bd86++){if(_0x11b6a3[_0x16d32e(0xb2b)]('rsDBg',_0x16d32e(0x8fb))){var _0x3f2fc5=_0x117f43[_0x37bd86][0xa0f+0x1652+-0x2061];if(_0x117f43[_0x37bd86][-0x5*-0x11b+-0x1*0x1ce9+0x1763]!==_0x11b6a3['FVEGn'])continue;var _0x139823=_0x11b6a3[_0x16d32e(0x8cd)](_0x2c9844,_0x3f3d6f,_0x3f2fc5,'obfF');if(!_0x139823||_0x11b6a3['eOaJv'](_0x139823[_0x16d32e(0xe26)+'d'],-0xcec*0x1+-0xe3*-0x4+0x961))continue;var _0x59cd79=_0x11b6a3[_0x16d32e(0x8cd)](_0x396bdf,_0x11b6a3[_0x16d32e(0x962)],_0x139823['hidde'+'n'],_0x139823[_0x16d32e(0x8f3)+'Offse'+'t0']);if(typeof _0x59cd79!==_0x16d32e(0x846)+'r'||!_0x11b6a3[_0x16d32e(0x199)](isFinite,_0x59cd79))continue;var _0x438044=_0x3f3d6f+':'+_0x3f2fc5,_0x5aaaa1=_0x5e5e77[_0x438044];if(!_0x5aaaa1||_0x59cd79!==_0x5aaaa1[_0x16d32e(0x56b)+_0x16d32e(0xa84)+'n'])_0x5aaaa1=_0x5e5e77[_0x438044]={'base':_0x59cd79,'lastWritten':null};var _0x469a73=_0x5aaaa1[_0x16d32e(0x7e1)],_0x41bbea=Math['abs'](_0x469a73);if(_0x11b6a3[_0x16d32e(0xdb5)](_0x41bbea,-0x1*0xb29+-0xa1d+-0x1*-0x1546+0.0001)||_0x11b6a3['QQBsF'](_0x41bbea,-0x3*0x9ffd+-0x1b761+0x51df8)){if('wNElN'!=='wNElN'){var _0x4826c1=_0x3c5352['uKifj'][_0x16d32e(0x783)]('|'),_0x320ca8=0x1bc8*-0x1+-0x2f3+0x1ebb;while(!![]){switch(_0x4826c1[_0x320ca8++]){case'0':_0x3057e3[_0x16d32e(0x1bc)+'Name']='sk-sl'+_0x16d32e(0xbff);continue;case'1':_0x3057e3['step']=_0x3c5352[_0x16d32e(0x7b7)](_0x3f5979,_0x5763ef);continue;case'2':_0x3057e3['max']=_0x3c5352['AupQw'](_0x2191a2,_0x56a0b9);continue;case'3':_0x520993['input']=_0x3057e3;continue;case'4':var _0x520993=_0x3c5352[_0x16d32e(0x395)](_0x183e29,'div',_0x16d32e(0x8a7)+_0x16d32e(0x28e));continue;case'5':_0x108c42[_0x16d32e(0x3d8)][_0x16d32e(0x68c)](_0x1fa33e);continue;case'6':_0x520993[_0x16d32e(0xae5)]=_0x1fa33e;continue;case'7':_0x3057e3['type']=_0x3c5352['hBYeY'];continue;case'8':_0x3057e3[_0x16d32e(0x4a9)]=_0x3c5352[_0x16d32e(0x7b7)](_0x5da415,_0x40e324);continue;case'9':_0x520993[_0x16d32e(0x927)+_0x16d32e(0x432)+'d'](_0x1901c3);continue;case'10':_0x520993[_0x16d32e(0x927)+_0x16d32e(0x432)+'d'](_0x3057e3);continue;case'11':_0x1fa33e();continue;case'12':var _0x1fa33e=function(){var _0x99a9e2=_0x16d32e,_0x14bf80=_0x5ce7b3();_0x3057e3['value']=_0x34428a(_0x14bf80),_0x1901c3['textC'+_0x99a9e2(0xa15)+'t']=_0x3c5352['WXwVn'](_0x13d04a<-0x4*0x918+0x17b8+-0x7*-0x1cf?_0x14bf80[_0x99a9e2(0xd34)+'ed'](-0x2662+0x316*0xb+0x471*0x1):_0x47a20c(_0x3ee4b3['round'](_0x14bf80)),_0x3057e3['datas'+'et'][_0x99a9e2(0x15a)]||'');var _0x11fe42=(_0x14bf80-_0x3d4e20)/(_0x4e8040-_0x482c01)*(-0xc90+-0xd24+-0x686*-0x4);_0x3057e3[_0x99a9e2(0x3d2)]['setPr'+_0x99a9e2(0xafe)+'y'](_0x99a9e2(0xc6c),_0x11fe42+'%');};continue;case'13':var _0x1901c3=_0x78f6a2('span',_0x3c5352[_0x16d32e(0x669)]);continue;case'14':_0x3057e3['oninp'+'ut']=function(){var _0x2fa11f=_0x16d32e;_0x3c5352[_0x2fa11f(0x7b7)](_0xed655e,_0x3c5352['AupQw'](_0x40b57e,_0x3057e3[_0x2fa11f(0xc6d)])||_0x14c826),_0x3c5352['RPKgt'](_0x1fa33e);};continue;case'15':return _0x520993;case'16':var _0x3057e3=_0x45ca72[_0x16d32e(0xcfa)+'eElem'+_0x16d32e(0x1e5)]('input');continue;}break;}}else{_0x4e6b9b[_0x16d32e(0x68c)]({'o':_0x3f2fc5,'v':_0x59cd79,'why':_0x16d32e(0xcc4)+'usibl'+'e'});continue;}}_0x3f84d3['push']({'o':_0x3f2fc5,'v':_0x59cd79,'a':_0x41bbea,'base':_0x469a73,'key':_0x438044,'st':_0x5aaaa1});}else try{_0x25f869[_0x16d32e(0x3b7)+'em'](_0x2dcd3b,_0x11b6a3['uifkz'](_0x4cef0f,_0x1ab27e[_0x16d32e(0x60b)]));}catch(_0x2a39a4){}}var _0x93b12f=[];for(var _0x3c9f70=-0x1d6e+0x128d+0xae1;_0x11b6a3[_0x16d32e(0x2d4)](_0x3c9f70,_0x3f84d3['lengt'+'h']);_0x3c9f70++){if(_0x11b6a3[_0x16d32e(0xdd6)](_0x16d32e(0x996),_0x11b6a3[_0x16d32e(0x7ef)]))_0x15fb6b(_0x40eaa8,_0x26ff03[_0x16d32e(0xd48)]);else{var _0xac6ef5=_0x3f84d3[_0x3c9f70]['a'],_0x2eaede=null;for(var _0x17c509=-0x2411+-0x22*0x116+-0x25*-0x1f9;_0x17c509<_0x93b12f['lengt'+'h'];_0x17c509++){var _0x2bea8c=_0x93b12f[_0x17c509][_0x16d32e(0x993)]/_0xac6ef5;if(_0x2bea8c>_0x11b6a3[_0x16d32e(0x588)](-0x1f6*-0x5+0x56*0x63+0x1*-0x2b0f,_0x305655)&&_0x2bea8c<_0x11b6a3[_0x16d32e(0x9cf)](-0x11*-0x143+0xe*0x8e+-0x1d36,_0x305655)){_0x2eaede=_0x93b12f[_0x17c509];break;}}!_0x2eaede&&(_0x2eaede={'mean':_0xac6ef5,'members':[]},_0x93b12f['push'](_0x2eaede));_0x2eaede[_0x16d32e(0x880)+'rs'][_0x16d32e(0x68c)](_0x3f84d3[_0x3c9f70]),_0x2eaede['mean']=-0xabf+0x1a17+-0xf58;for(var _0x341fe8=-0xfe*-0x8+-0x1*0xd06+0x516;_0x11b6a3[_0x16d32e(0xdcc)](_0x341fe8,_0x2eaede['membe'+'rs'][_0x16d32e(0x964)+'h']);_0x341fe8++)_0x2eaede['mean']+=_0x2eaede['membe'+'rs'][_0x341fe8]['a'];_0x2eaede['mean']/=_0x2eaede[_0x16d32e(0x880)+'rs'][_0x16d32e(0x964)+'h'];}}var _0x54cf4d=[];for(var _0x3ce19c=-0x1f*-0x41+-0x111e*-0x2+0x3*-0xe09;_0x11b6a3[_0x16d32e(0x2d4)](_0x3ce19c,_0x93b12f['lengt'+'h']);_0x3ce19c++){if(_0x93b12f[_0x3ce19c]['membe'+'rs']['lengt'+'h']>=_0x45faa8)_0x54cf4d[_0x16d32e(0x68c)](_0x93b12f[_0x3ce19c]);}if(!_0x54cf4d['lengt'+'h']){if(_0x11b6a3[_0x16d32e(0x500)](_0x11b6a3[_0x16d32e(0xe06)],'DMXdx'))return _0x3c5352['jvPUj'](_0x25535f[-0x1c0+0x2*-0x10fc+0x23b9],_0x3c5352[_0x16d32e(0xb32)])||_0x26e42c[0x772+-0x196f+0x11fe]==='i32';else{_0x4e6b9b[_0x16d32e(0x68c)]({'o':-(0x2396+-0x21ed+-0x1a8),'v':0x0,'why':_0x11b6a3[_0x16d32e(0xc86)]('no\x20gr'+_0x16d32e(0x2e7)+'f\x20',_0x45faa8)+_0x11b6a3['ERmMw']});return;}}var _0x20070b=_0x54cf4d[0x212*0xd+0x297+-0x437*0x7]['mean'];for(var _0x393aad=-0x78e+0x73b*0x2+-0x2*0x374;_0x393aad<_0x54cf4d['lengt'+'h'];_0x393aad++)if(_0x11b6a3['YtILk'](_0x54cf4d[_0x393aad][_0x16d32e(0x993)],_0x20070b))_0x20070b=_0x54cf4d[_0x393aad][_0x16d32e(0x993)];var _0x1fdf3d=_0x20070b*(0x5*0x46+0xd*-0xc7+0x8bd*0x1+0.5);for(var _0x3e5df1=-0x50c+-0x4f3*0x6+0x115f*0x2;_0x3e5df1<_0x93b12f[_0x16d32e(0x964)+'h'];_0x3e5df1++){if(_0x11b6a3[_0x16d32e(0x75a)](_0x93b12f[_0x3e5df1]['membe'+'rs'][_0x16d32e(0x964)+'h'],_0x45faa8))continue;for(var _0x30a890=0x16a2+-0x40*0x3+-0x15e2;_0x30a890<_0x93b12f[_0x3e5df1][_0x16d32e(0x880)+'rs'][_0x16d32e(0x964)+'h'];_0x30a890++){if('XXMWM'!==_0x16d32e(0x527)){var _0x4bbe71='';for(var _0x373580=0x13fc+-0x17*0x6d+0x1*-0xa31;_0x11b6a3['WYGCK'](_0x373580,arguments[_0x16d32e(0x964)+'h']);_0x373580++){var _0x4fef3f=arguments[_0x373580];if(typeof _0x4fef3f==='strin'+'g')_0x4bbe71+=_0x4fef3f;else{if(_0x4fef3f&&_0x4fef3f[_0x16d32e(0xd29)+'ge'])_0x4bbe71+=_0x4fef3f[_0x16d32e(0xd29)+'ge'];}}if(_0x11b6a3[_0x16d32e(0xcd3)](_0x4bbe71[_0x16d32e(0x51a)+'Of'](_0x1f32b6),-(0x244c+-0x7f*-0x17+-0x47*0xac)))return _0x3fbd03[_0x16d32e(0x9fa)](_0x3847fa,arguments);if(_0x11b6a3[_0x16d32e(0x35f)](_0x4bbe71['index'+'Of']('Unity'+'WebMo'+'dkit'),-(0x200b*-0x1+0x101*-0x14+0x10*0x342))){var _0x4756b4=_0x4bbe71[_0x16d32e(0xb19)](0x19d7+0x7a4+0x3*-0xb29,-0x2218+-0x1*0xc95+0x2fd9);if(_0x51999e['index'+'Of'](_0x4756b4)===-(0x1*-0x2362+-0x20*-0x12e+0x25d*-0x1)&&_0x510eb7[_0x16d32e(0x964)+'h']<-0x1d*-0xf7+0x1*0x19c1+0xd60*-0x4)_0x27656d[_0x16d32e(0x68c)](_0x4756b4);}}else _0x4e6b9b['push']({'o':_0x93b12f[_0x3e5df1][_0x16d32e(0x880)+'rs'][_0x30a890]['o'],'v':_0x93b12f[_0x3e5df1][_0x16d32e(0x880)+'rs'][_0x30a890]['v'],'why':_0x16d32e(0x672)+_0x16d32e(0x33c)});}}for(var _0x1287e3=0x11d2+-0x11d4+-0x2*-0x1;_0x11b6a3[_0x16d32e(0x660)](_0x1287e3,_0x54cf4d[_0x16d32e(0x964)+'h']);_0x1287e3++){var _0x4b46de=_0x54cf4d[_0x1287e3][_0x16d32e(0x880)+'rs'];for(var _0x49bfda=-0x846+0x5c0*0x1+0x286;_0x11b6a3[_0x16d32e(0x2d4)](_0x49bfda,_0x4b46de[_0x16d32e(0x964)+'h']);_0x49bfda++){if(_0x11b6a3['RlhBW'](_0x11b6a3[_0x16d32e(0x467)],'aEByr')){var _0x458c07=_0x4b46de[_0x49bfda];if(_0x11b6a3['euzgi'](_0x458c07['a'],_0x1fdf3d)){_0x4e6b9b[_0x16d32e(0x68c)]({'o':_0x458c07['o'],'v':_0x458c07['v'],'why':_0x16d32e(0x5f1)+'\x20floo'+'r\x20'+_0x1fdf3d['toFix'+'ed'](0xa4f+0x7c+-0xac9)});continue;}var _0x447530=_0x11b6a3[_0x16d32e(0xbc5)](_0x458c07[_0x16d32e(0x7e1)],_0x3b07fd[_0x16d32e(0x7f0)+'r']);_0xcac3d1(_0x3f3d6f,_0x458c07['o'],'obfF',_0x447530)&&(_0x458c07['st']['lastW'+'ritte'+'n']=Math['froun'+'d'](_0x447530),_0x130698++,_0x18199f['push']('0x'+_0x458c07['o'][_0x16d32e(0xd0f)+_0x16d32e(0x3cc)](0x15ca+0x95*0x13+-0x20c9)));}else{if(_0x3c5049===_0xa404a1||_0x50bf66===null)return _0x9db3f0;if(typeof _0x3fbe45[_0x16d32e(0x62a)]===_0x16d32e(0x952)+'ion')try{return _0x1e4613[_0x16d32e(0x62a)]();}catch(_0xcc51b){}if(_0x11b6a3['rAjAt'](typeof _0x2541a1,_0x16d32e(0x3b5)+'t'))return _0x29afde;return _0x1f2ff6;}}}}}var _0x5b1b65={'FPScontroller':[[-0xa72+0xdc*0x19+-0xafa,_0x586988(0x5c6)],[0x1015+0x19a7+-0xc*0x377,_0x586988(0x5c6)],[0x1*-0x1dfe+0xa7*0xc+0x166a,_0x586988(0x5c6)],[-0x20de+0x263e+-0x2*0x284,'obfF'],[0x816+0x1*0xe96+0x1*-0x163c,'obfF'],[0x3*0x329+0x7*-0x4c7+0x6e*0x39,'obfF'],[-0xd87+0x2b7*-0x1+0x2*0x86f,_0x11b6a3[_0x586988(0x962)]],[-0x2543+-0x15a7+0x382*0x11,_0x11b6a3[_0x586988(0x7cc)]],[-0x1*0x13f2+-0x1*-0x2551+-0x147*0xd,_0x11b6a3['FVEGn']],[-0xb69+0x1020+-0x3db,_0x586988(0x357)],[-0x4dc+0x1a67+-0x14ab,'v3'],[0x1*0x5c4+-0x17eb+0x1313,'u8'],[-0x5db*-0x4+-0x1364+-0x318,_0x586988(0x5c6)],[0x215f+0x1b76+-0x7*0x88b,_0x586988(0x357)],[0x16e3+0x177c+-0x2d53,'u8'],[-0x1c11+0x74*0x16+0xf*0x147,'i32'],[0x1a5*0xb+-0xb*0x9d+0x1b6*-0x6,'u8'],[0x258a+0x21a9+-0x1*0x461e,'u8'],[-0x12e3+0x160d+-0x20e,_0x11b6a3[_0x586988(0x962)]],[0x1*-0x20b+-0x1725+-0x2*-0xd32,'obfF'],[0x5b9*-0x2+-0x497+-0x33*-0x57,'f32'],[-0x78f+0x4*0x36e+-0x4d9,'f32'],[-0x1*-0x20e7+-0x75d+-0x1836,'v3'],[-0x29c+0xf*0x171+-0x285*0x7,'v3'],[0x19e2*-0x1+-0x1cc0+0x1c07*0x2,_0x586988(0x4d9)],[-0xf1e+0x1f55+0x3*-0x4ed,'f32'],[-0x543*0x7+0x1*0x533+-0x6*-0x587,'u8'],[-0x4*0x4ff+0xde8+-0x2*-0x3d0,'f32'],[-0x1*0xe01+-0xf3e*0x1+-0x1*-0x1ed7,'v3'],[0x16bd+0x196a+-0x2e83,'u8'],[0x127d*-0x1+0x15df+-0x1ae,_0x586988(0x4d9)],[-0x1*0xe27+-0x74d*0x3+0x25c6,_0x586988(0x4d9)],[-0x1379+0x2fc+0x3a5*0x5,'u8'],[-0x3*-0xb2f+0x2*-0xb6f+-0x8f2,'u8'],[0x1298+-0x5f*-0x1a+-0x1a7e,_0x11b6a3['FVEGn']],[0x8d*-0x43+0x3*0xfd+-0x5*-0x728,_0x586988(0x4d9)],[0x1746+0x1fe+-0x1768,'u8'],[-0x1*0x18f3+0x2169+-0x696,_0x11b6a3[_0x586988(0x962)]],[-0x67f+-0x1*0x2635+0x1*0x2eac,'v3'],[-0x922+0x1d*0x21+-0x1*-0x76d,_0x586988(0x5d0)],[-0x16b*-0x3+0x2694*-0x1+0x1*0x246b,_0x586988(0x4d9)],[-0x1*0x1297+0x2286+0xdd3*-0x1,_0x11b6a3['Wuxco']],[-0x9f7+-0x522*-0x6+-0x1289,_0x11b6a3[_0x586988(0x772)]],[-0x178f+-0x79*-0x7+0x10*0x169,_0x11b6a3[_0x586988(0x772)]],[-0x11f9+-0x1419+-0x1*-0x2866,_0x586988(0x4d9)],[0x158*-0xa+-0x65*-0x2f+-0x2c3,_0x11b6a3[_0x586988(0x772)]],[-0x4f*0xc+-0x14b0+-0x1*-0x1ac0,'u8'],[-0xf*-0xdf+0x3*0x34b+-0x1495*0x1,'u8'],[0x32b*-0x1+0x171+0x418,'u8'],[0x6e*0x2f+0x2*0x4f+-0x127*0x10,_0x586988(0x4d9)],[0x2*0x329+-0x1899+-0x1e1*-0xb,'u8'],[0x16c2+-0x2592+0x1135,'u8'],[-0x22*-0x8e+-0x1*0x244b+0x69d*0x3,_0x586988(0x4d9)],[0x24*-0x76+0x877+0xa8d,_0x11b6a3[_0x586988(0x772)]],[-0x20*-0xbd+-0x1e3a+0x90a,_0x11b6a3[_0x586988(0x772)]],[-0x89e+-0x23f6+0x2f08,_0x11b6a3[_0x586988(0x772)]],[0xd40+-0x67*-0x55+-0x2cfb,_0x11b6a3[_0x586988(0x772)]],[0x1*0x133b+-0x167b+0x5bc,'f32'],[-0x7*0x16a+-0x1024+0x1a*0x119,_0x11b6a3[_0x586988(0x772)]],[-0x14a9+-0x16c1*0x1+-0x1*-0x2dee,'v3'],[0x6da*-0x1+0x481*0x3+-0x415,'u8'],[0x2507+0x1*-0x1c3c+-0x633,'v3'],[-0x1712+0x17*0xce+-0x2*-0x39a,'f32'],[0x1587+0x1af*-0x3+-0xdce,'v3'],[0x186*-0x3+-0x1eb*-0xe+-0x8*0x272,_0x586988(0x4d9)],[0x9c9+-0x50b+0x1*-0x202,'f32'],[-0x553*0x1+-0x26b2+0x1*0x2ec5,_0x586988(0x4d9)],[0x669+0x1ead+-0x2252,'u8'],[0x1bd+0x1*-0x623+-0x1*-0x72b,'u8'],[-0x1fe0+0x21a1*0x1+-0x1*-0x107,_0x586988(0x4d9)],[-0xf0a+0x2392+-0x27*0x74,'f32'],[-0x5ed*0x5+-0x1*-0x21d+0x1e68,'v3'],[0x1*-0x1e14+-0x19f5+0x3af9,'v3'],[-0x1e12*-0x1+-0x9*-0xd1+-0x226f,_0x11b6a3['Wuxco']],[-0x1*0xc29+0x2638+0x170f*-0x1,_0x586988(0x4d9)],[0x183b+-0x1*-0x10e2+0x1*-0x2619,_0x586988(0x4d9)],[-0xe1f+-0x83+0x7*0x286,'f32'],[0x1*-0xb28+-0x1*-0x981+0x4b3,'v3'],[0x592*-0x1+-0x2019+0x1*0x28c3,'u8'],[-0x189f*-0x1+0x2*0x2f5+-0x1b6d,'v3'],[0xf5b*0x2+-0x4a*-0x6d+-0x3b10,_0x586988(0x357)],[0x15*0x1a1+0xaf4+-0x29fd*0x1,_0x586988(0x4d9)],[0x5*-0x680+-0x1daa+-0x415a*-0x1,'f32'],[0x25*0x6a+-0x1fb9+0x139b,_0x586988(0x4d9)],[-0x2*0xad6+0xd74+0xb74,'f32'],[-0x1*-0x146b+-0x9f8+-0x733,'u8'],[-0x5*-0x48b+-0x17d1+0x45b,'u8'],[0x25fe+-0x931*-0x1+-0x2be3,'u8'],[-0x158*-0xd+0x8c4+-0x16ef,'u8'],[-0x176d*0x1+-0x1f5b+0x5cf*0xa,'u8'],[-0x1c70+-0x4*0x2b3+0x2a8c,_0x11b6a3[_0x586988(0x772)]],[0x23d*-0xd+-0x1*-0x1497+0xbd6,_0x586988(0x4d9)],[-0x1229+-0x457*0x7+0x33e2,_0x11b6a3['Wuxco']],[0xa3c+0x138d+0x21*-0xcd,_0x11b6a3[_0x586988(0x772)]],[0x4*-0x230+0x1*0x1871+-0xc51,_0x11b6a3['Wuxco']],[-0x1ba4+0x2631+-0x729,'u8'],[-0x114d+-0x1*0x6fb+-0x4*-0x6ec,_0x11b6a3[_0x586988(0x772)]],[-0x16*0x84+0x110c+-0x248,_0x11b6a3[_0x586988(0x772)]],[-0x4f*-0x3b+-0x16d*-0x3+-0x17*0xd4,'u8'],[-0x1ab4+0x3*0x3df+0x128f*0x1,'v3'],[0x2533+0x2bf+-0x246e,'v3'],[0x2663+-0x187a+-0xa59,'v3'],[0x9f8+-0x234a+0x1cee,_0x11b6a3[_0x586988(0x772)]],[-0x2*-0xc28+0x1*-0xd17+-0x1*0x799,_0x586988(0x4d9)],[0x1cc1+-0x17fb*-0x1+-0x4*0xc46,_0x11b6a3['Wuxco']],[-0x1a45+-0x167e+0x1b*0x1f1,'v3'],[-0x204b+0x121d*-0x1+-0x2*-0x1b0e,_0x11b6a3['ApYDr']],[-0x1*0x1d12+0x24c*0x7+0xba*0x17,'u8'],[0xad+-0x168b*0x1+-0x1d*-0xe2,_0x11b6a3[_0x586988(0xd57)]],[0xc41*0x1+0xa*-0x2fa+0x1543*0x1,'f32'],[0x15*-0x19c+-0x1*0x24eb+-0x17*-0x33d,_0x586988(0x4d9)],[-0x1*-0x2580+0x14*-0x1bd+0x10c,_0x11b6a3[_0x586988(0x772)]],[0x61*0x14+-0x1*-0x649+-0xa11,_0x11b6a3[_0x586988(0x772)]],[0x723*-0x2+0x77*-0x3d+-0x9*-0x529,'v3'],[-0xb0b+0x1c*0xa7+-0x35d,_0x586988(0x357)],[0xfd2+-0x1db8+-0xb6*-0x19,'u8'],[0x511+0x2214+-0x2344,'u8'],[-0x12b1+-0xb*0x2b1+0x1a17*0x2,'u8'],[0x14f0*0x1+0x25bd+0x4b*-0xbb,_0x11b6a3['Wuxco']],[0x164f+0x17c7*0x1+-0x2a2e,'i32']],'HealthScript':[[-0xa6e+0xbd5+-0x10f,'u8'],[-0x2448+0x1c5e+0x846,_0x586988(0x357)],[0x1*0x1f46+-0x1*0xb65+-0x1361,_0x11b6a3[_0x586988(0x772)]],[-0x16f4+-0x170*-0x10+-0xc*-0xa,_0x11b6a3[_0x586988(0x772)]],[0x1829+0x41*-0x32+-0x137*0x9,'f32'],[-0xdbd+-0xc2*0xa+0xc1*0x1d,_0x11b6a3['Wuxco']],[0x1*-0x25e5+-0x985*-0x3+0x9e6,_0x11b6a3['Wuxco']],[0x1*0x2479+0x19b*-0x1+-0x273*0xe,_0x586988(0x4d9)],[-0x1*0xa52+0x1827+-0x467*0x3,_0x586988(0x357)],[0x151*-0x13+-0x47e+0x1e25,_0x586988(0x357)],[0x301*-0x5+-0x23b7+0x3364,'u8'],[0x1db1*-0x1+0x28d+0x1bcd,'u8'],[-0x1*-0x1c55+0x2*-0xdcd+-0x11,'u8'],[0x1*0x1c73+0x1*-0xa97+-0x1131,'u8'],[-0x6fb*-0x5+0x1344+-0x356b,_0x586988(0x247)],[-0x363+0x309+-0x2*-0x97,_0x11b6a3['BKSTO']],[-0x14d2+0xa7*-0x1+0x1661,_0x586988(0x247)],[0x1*-0x1334+0x17*-0x135+0x5*0x997,'obfI'],[0x1e2*-0x3+0x1aa0+-0x13ea,_0x11b6a3[_0x586988(0x5a5)]],[0x53*0x5a+-0x180e+-0x3fc,_0x586988(0x5d0)],[0x191a+-0x111f+-0x6cb,_0x586988(0x5c6)],[0x647*0x1+-0x1*0xb39+0x1*0x63a,'f32'],[-0x17d9+0x281*-0xb+0x34b0,_0x586988(0x4d9)],[0x48f*0x8+0x1*0x1c76+-0x3f9e,'f32'],[0x1*0x21a1+0x233b*0x1+-0x4388,_0x11b6a3['Wuxco']],[-0x1*-0x1ad8+-0x7b6+-0x11c6,_0x11b6a3['Wuxco']],[-0x95*0x1f+0x1a8f+-0x724,'v3'],[0x179a+0xf4f*-0x2+0x874,_0x11b6a3['Wuxco']],[0x369*0x1+0x200d+-0x21fe,_0x11b6a3['Wuxco']],[0x156e+0x1b06+-0x177a*0x2,'u8'],[-0x1*-0x349+0x293*-0x9+0x156e,'u8'],[0x2f3+-0x1d83+0x1c20,_0x586988(0x357)]],'PlayerConfig':[],'WeaponManager':[[0x22aa+-0x190f+-0x983*0x1,_0x11b6a3['ApYDr']],[0x20b8*0x1+0x1b9e+-0x1e1d*0x2,_0x11b6a3['ApYDr']],[-0x2273+0xcb3*0x1+0x15e0,'u8'],[-0x1f99+0x1280+0x1*0xd3d,_0x11b6a3['ApYDr']],[0x2*-0xbbb+0x1*0x13a5+0x435,'obfF'],[0xd15*0x2+0x131d+-0x2ccb,'f32'],[-0x15b*-0x11+0x24cb+-0x3b52*0x1,_0x586988(0x357)],[-0x1*-0x24f7+-0x2249*-0x1+-0x46b8,'u8'],[0xa68+0x22a+0x27*-0x4f,'u8'],[-0xe30+0x1*0x1437+0x17*-0x3d,_0x586988(0x357)],[0x1ea*-0x4+-0x8c9*-0x2+-0x18f*0x6,'f32'],[-0x1a81+0x1a5*0x16+-0x915,_0x11b6a3[_0x586988(0x772)]],[-0x7*0x2b3+-0x863+0x1bf4,'i32'],[0x1c*0x10+0x1813+-0x1917,'u8'],[0x4*-0x35a+-0x761*-0x5+-0x16a1,_0x586988(0x247)],[0xbc8+0xb*0x92+0x88f*-0x2,_0x11b6a3['BKSTO']],[0x1977+-0xf0b*0x1+0x12d*-0x8,_0x11b6a3['Wuxco']],[0x1dff+-0x1626+-0x6d1,_0x11b6a3[_0x586988(0x772)]],[0x1273*-0x1+0x24*-0xe3+-0x1*-0x336b,_0x11b6a3[_0x586988(0x772)]],[0x8aa+-0x920+-0xc7*-0x2,_0x586988(0x4d9)],[0x1f9f+0x1*-0x21e0+0x361,'f32'],[-0x1*0x259d+-0x1a3f*0x1+-0x4104*-0x1,'u8'],[0xe64+-0x24f1+0x17b9,_0x11b6a3['BKSTO']],[0x5e8*-0x1+-0x26*0xb6+0x222c,_0x586988(0x247)],[-0x1*0x21fc+0x1dc0+-0x10*-0x59,_0x11b6a3['BKSTO']],[-0x1*-0xe55+0x84*-0x9+-0x849,_0x11b6a3[_0x586988(0x7cc)]],[-0x1*0x1a45+0x2a3*0x1+0x1916,_0x586988(0x5d0)],[0x1*-0x1a87+-0x122c+0x2e33*0x1,'obfB'],[-0x1e18+0x1e17*-0x1+0x3dbb*0x1,_0x11b6a3['XFLcp']],[0x15d*0x9+0x2*0x11ef+-0x2e7f,_0x586988(0x5d0)],[0x232e+0x127c+-0x33fa*0x1,_0x11b6a3[_0x586988(0x5a5)]],[-0x516+-0x14ce+0x1bb0,_0x11b6a3['ApYDr']],[-0x1a*0x92+-0x246b+0x350f,'u8'],[0x556*0x4+-0x1212+-0x4a*0x5,_0x586988(0x357)],[-0x119*0x11+-0x25+0xa53*0x2,'i32'],[0x1cbc+0x1*0xd6f+-0x282b,_0x586988(0x357)],[0x1b02*0x1+0x2291*-0x1+-0x9a3*-0x1,'u8'],[0x1c0b+0x29*-0x8d+-0x16*0x27,'u8'],[0x3a8+0x1d01+-0x1e8c,'u8'],[-0x246d+0x1*0xaab+-0x6f8*-0x4,'u8'],[0x2*0xd98+-0x2276+0x965,'u8'],[0x247d+-0x223*0x1+0x3*-0xaae,_0x586988(0x357)],[-0x258*-0xe+-0x23d*0xd+-0x15f,'u8']],'GG_GameManager':[[0x131+0x1*0x18a2+-0x19af,'u8'],[0x1fb2+-0x155c+0x1*-0xa2a,'f32'],[0x2*-0x10e7+-0x2c*-0xcd+-0x12a,'u8'],[0x3*-0xc15+0x1167+0x131d,'u8'],[-0x22f+-0x5*-0x8b+-0x1*0x40,_0x11b6a3[_0x586988(0x772)]],[-0xd24+0x4fe+0x872,_0x586988(0x4d9)],[0xb*0xd1+-0x2ab+0x2*-0x300,_0x586988(0x357)],[0xad*0x5+-0x2137+0xb*0x2be,'i32'],[0x1*-0xe03+0x313*0x2+-0x1*-0x835,'u8'],[-0x518+-0x2*0x1fd+0x986,'u8'],[0x1a51*-0x1+-0x1dc2+0x4b*0xc1,_0x11b6a3['Wuxco']],[0x186d*-0x1+0x18b+0x3e5*0x6,'f32'],[-0x13e9+-0x13c1+0x1*0x283a,_0x11b6a3[_0x586988(0xd57)]],[-0x1ea+-0x96e*0x2+0x1*0x155a,'u8'],[-0x617+0x1e79+-0x17ae,_0x11b6a3[_0x586988(0xd57)]],[0x13be+0x1fbd+-0x32bf,'i32'],[-0xe37+-0x11ac+0x20a3,_0x586988(0x357)],[-0x2531+0x9b3*0x2+0x12b3,_0x586988(0x247)],[-0x1be9+0x2d9*-0x1+-0xfdf*-0x2,_0x11b6a3[_0x586988(0x5a5)]],[-0x1700+-0xcb*-0x14+0x64*0x15,'obfI'],[-0x1374+-0x1d95+0x3235,'u8'],[-0xab5+0x2613+0x8ba*-0x3,_0x586988(0x357)],[0x3d1*0x8+-0x23f8+0x6d4,'u8'],[-0x55*-0x10+0x10b9+0x1499*-0x1,_0x586988(0x4d9)],[0x2*0x1378+0xec4+-0x3434,'u8'],[-0x4*0x494+0xad2*-0x3+0x5*0xa76,'u8'],[0x2*-0x4da+-0x1285*0x1+0x1ddd,'u8'],[-0x7f*0x22+-0x7ed*-0x2+0x2ac,_0x11b6a3[_0x586988(0xd57)]],[-0x24f2*-0x1+-0x126e+-0x10d8,_0x586988(0x4d9)],[0x1*0x14bc+0x1559+-0x2865,'u8'],[0x1b4*0x10+-0x1*-0x749+-0x20d8,'u8'],[-0xe90+-0x2*0x773+0x1f2e*0x1,'i32'],[0x1e7*-0x13+0x170e+0xed3,_0x586988(0x357)],[0x1*-0x5bf+-0x90b+0x108a,_0x586988(0x4d9)],[0x124a+-0x23e1*-0x1+-0x3467,_0x11b6a3[_0x586988(0xd57)]],[0x1822+0x53f*0x5+0x3095*-0x1,_0x586988(0x4d9)],[0x162b+0x1eba+-0x67*0x7f,_0x586988(0x357)],[0x76*0x16+0x10c+-0x960,_0x586988(0x357)]],'TDM_GameManager':[[0x93*-0x10+-0x1f28+0x2870,'u8'],[0x1824+0xb*0x1d5+0xeb9*-0x3,'u8'],[0x1*-0x2309+0x5e7+-0x21*-0xe3,'u8'],[0x1*0x118b+0x5ba*-0x1+-0xbad,_0x11b6a3['Wuxco']],[-0xae1+0x1912+-0x2c5*0x5,'u8'],[0x26c5+-0x1*-0x155c+-0x3bc5,_0x11b6a3[_0x586988(0x772)]],[-0x259d+0x547+0x35*0x9e,'f32'],[-0x1247+0x26b*-0x1+0x1516,_0x586988(0x357)],[0x22a3+-0x2*-0xbc2+-0x39bf*0x1,'i32'],[-0x10b0+-0x2*0x42e+0x32f*0x8,'u8'],[-0xf17+-0xf27+-0x3*-0xa39,'u8'],[-0x85d*-0x3+0x57*0x67+0xb8*-0x53,_0x586988(0x4d9)],[0xbe6*0x1+0x1*-0x6eb+0x3d*-0x13,'f32'],[-0x542+0x18d9+-0x1bd*0xb,_0x586988(0x357)],[-0x21a1+-0x1da8+0x3fd5,'u8'],[0x1534+0x74c*-0x1+-0xd58,_0x11b6a3[_0x586988(0x5a5)]],[-0x84c*-0x3+-0x1*-0x2443+-0x3c4f*0x1,'obfI'],[0x2331+-0xb3f+0xe*-0x1a5,_0x11b6a3[_0x586988(0x5a5)]],[0x1a8f*0x1+0x23a3+-0x3d32,_0x586988(0x247)],[-0xa85+0x3de+0x7bb,'u8'],[0x1e33+0x9d3*-0x3+0xa2,'u8'],[0x4*-0x431+-0x1c5f+0x2e83,_0x11b6a3['ApYDr']],[-0x1fb4+0x16b2+0xb2*0xf,'u8'],[-0x19fd+0x26c4*0x1+-0xb43,'u8'],[0x419+-0x135d*0x1+0x2*0x866,_0x586988(0x4d9)],[-0x2464+0xedb*0x1+0x1715,_0x586988(0x357)],[-0x24cd+-0x71e+0x2d7b,_0x586988(0x357)],[0x1*-0x162b+-0x1df*-0x2+0x9*0x239,_0x586988(0x4d9)],[0x2*-0xb57+0x22a8+-0xa62*0x1,_0x586988(0x357)],[0x2315+0x2*0x701+-0x2f7b,_0x586988(0x357)],[-0x1677+0x1973+-0x6*0x3a,_0x11b6a3[_0x586988(0x772)]],[-0x598+0x23*0x45+-0x233,_0x586988(0x4d9)],[-0x1*-0x1c79+-0x23bd+0x8ec,_0x11b6a3[_0x586988(0xd57)]],[-0x97d*0x1+0x12f*0x1b+-0x14c8,'u8'],[0x1a51+0x1441+-0x2ce1*0x1,'u8'],[0x1122+-0x11*0x181+-0x71*-0x17,_0x586988(0x4d9)]],'PhotonNetworkSync':[[0x12dd+0x1e18+-0x30c1,'v3'],[-0x1dc2*0x1+-0x2*-0x681+-0x10*-0x110,_0x586988(0x357)],[-0x11c1+0x1a33*0x1+-0x82e,'u8'],[0xa28+-0x5b3*-0x4+-0xae5*0x3,'u8'],[0x619+-0xbb*0x1+-0x6*0xd9,'v3'],[0x25b7*-0x1+-0x1*0xac1+-0xc*-0x411,'u8'],[-0x18be+0x14e4+-0x2*-0x219,_0x586988(0x357)],[-0x1283*0x1+0x2227+-0xf48,_0x586988(0x357)],[-0x2322+-0x25*0x1+-0x1*-0x23a7,_0x11b6a3['Wuxco']],[-0x4fb+-0x2654+0x2bb3,_0x586988(0x4d9)],[-0x4*0x4f5+-0x25bd+0x3*0x1353,'f32'],[0xd65+-0x1b34+0xe3b,'v3'],[-0x4ff*0x5+0xd12*0x2+-0x3*0x3b,_0x586988(0x4d9)],[0x65*-0x2e+0x20f7+-0xe55,_0x586988(0x4d9)],[-0x23d2+0xc*-0x92+0x2b2a,_0x586988(0x357)],[-0xbd+0xcfb*0x1+-0xbb6,_0x586988(0x4d9)]],'MouseLook':[[0x18b6+-0x2*0xf49+-0x5f0*-0x1,_0x11b6a3['Wuxco']],[-0x43b+0x1221+-0x6*0x24d,_0x586988(0x4d9)],[-0xd88+0x1025*-0x1+-0x1dc9*-0x1,'f32'],[0x3*-0x752+0x2453+-0xe3d,'f32'],[0x110e+0x218a+-0x3274,_0x11b6a3['Wuxco']],[0x7*0x1d5+-0xf25+0x27a,'f32'],[-0x589*0x1+-0x1a46+0x1fff,_0x11b6a3['Wuxco']],[-0x1f7c+0x217b*0x1+-0x1cb*0x1,'u8'],[-0x2*0x11ba+0x1112+0x129a,_0x11b6a3[_0x586988(0x772)]],[-0x4*0x81d+-0x2280+0x433*0x10,_0x11b6a3['Wuxco']],[-0x115*0x11+0xd2a+0x57b,_0x11b6a3[_0x586988(0xd57)]],[-0x1cf1*-0x1+-0x1b05+-0x1a8,'u8'],[0x1ce+-0x1b83+0x19fd*0x1,'v2']],'NetworkPlayerAnimations':[[-0x2544+-0x1*-0x1cc9+0x923,'v3'],[0x15bb+0x17fe+-0x2d05,'v3'],[0x148a+-0x3e*0x59+-0x71*-0x4,'u8'],[0x169e+0x1*0x664+0x5a6*-0x5,_0x11b6a3[_0x586988(0xd57)]],[0x1cc2+0xafc+-0x26f6*0x1,_0x586988(0x357)],[0x17cc+-0xe48+0x12*-0x7c,_0x11b6a3['Wuxco']],[-0x1be6+-0x134f+0x3005,_0x11b6a3['Wuxco']],[-0x1*-0x19cf+0x24fb*-0x1+0x302*0x4,_0x11b6a3['Wuxco']],[0x5*-0x6c5+-0x96+0x234f,'f32'],[0x1eaf+0x53*-0x29+-0x107c,_0x11b6a3[_0x586988(0x772)]],[0x34*0x7+0x2479*0x1+-0x24f9,'f32'],[-0x1302+0x329*0x2+0xda0,_0x586988(0x4d9)],[-0x213b*0x1+-0x301*0x5+-0x4*-0xc4d,_0x11b6a3['Wuxco']],[-0xc4d*0x1+-0x6a*0x4b+0x2c53,'f32'],[0x863*-0x1+-0x175+0x9a*0x12,_0x11b6a3['Wuxco']],[-0x73*-0x23+-0x2266+-0xdb*-0x17,_0x586988(0x4d9)],[0x23a3+-0xdab*0x1+-0x14f4,_0x11b6a3[_0x586988(0x772)]],[0x14f8+-0x6e2+-0xd0e,_0x11b6a3[_0x586988(0xd57)]],[-0x44*-0x8b+0x14ca+0x1c55*-0x2,'u8'],[-0x43a*-0x1+-0x22*0x8b+0xf4c*0x1,'i32'],[0x236b*0x1+0x1f73+-0x7*0x966,_0x11b6a3[_0x586988(0xd57)]],[-0x21d*0x2+0x11e*0x1a+-0x17ba,'u8'],[0x2*-0x274+0x162+0x4a2,_0x586988(0x4d9)],[0x13c2+0x23bd+-0x365f,_0x11b6a3[_0x586988(0x772)]],[0x5c9*-0x3+0xbfe+0x25*0x2d,_0x586988(0x4d9)],[0x46*-0x1a+0xafd+0x29*-0x11,_0x11b6a3[_0x586988(0x772)]],[-0x4*0x4d4+0x7*-0x1ba+0x2092,'u8'],[-0xe5a+0x222+0xd70,'u8'],[0x20f9+0x946*-0x1+-0x1677,'v3'],[0x2410*-0x1+-0x1cb1+-0x23*-0x1e3,'v3'],[-0x53*-0x67+-0x21ec+0x21b,'u8']],'NPC_Cotroller':[[-0x1913*-0x1+-0x1*-0xc9d+-0x12ce*0x2,'v3'],[-0x9a2+0x4cd*0x1+0x1b*0x2f,'f32'],[-0x1737+0x1a99+0x2*-0x19f,_0x586988(0x4d9)],[0x958+0x27+-0x1*0x929,'u8'],[0x1e86+0x2*-0xa44+-0x9a7,'u8'],[0x2311+-0xcf6+-0x15bf,'v3'],[-0x1582+-0x3f9+0x1a17,'u8'],[0x1*0x102a+-0x22*0x43+-0x11*0x64,_0x586988(0x4d9)],[-0x1e*0x101+-0x1573+-0xf*-0x37b,_0x11b6a3[_0x586988(0x772)]],[-0x2513+0x1055+0x1576,_0x586988(0x4d9)],[0x53a+-0x12b0+0xe32,_0x11b6a3[_0x586988(0x772)]],[-0xc1d*0x1+-0x1f61+-0x1*-0x2c46,'u8'],[-0x727*-0x1+-0x149c+0xe41,'f32'],[0x3*0xa7f+-0x15b6*-0x1+-0x345b*0x1,_0x586988(0x4d9)],[0x19e2+-0xa82+-0x2*0x742,_0x11b6a3['Wuxco']],[-0x1*-0x21b0+-0x2667+0x597,'f32'],[-0x164c+0x22db+0x1*-0xbab,'u8'],[-0x112*-0x5+0x1541+-0x19af,_0x586988(0x4d9)],[-0x94d+0x3c7*0xa+-0x35*0x85,'v3'],[0x13c6+-0x138e+-0x2*-0x62,_0x11b6a3['Wuxco']],[0x19f2+0xb76*0x1+-0x2468,_0x11b6a3['ApYDr']],[-0x1685+0x4*0x1e2+0x1001,'f32'],[0x2f*-0xa2+-0x1e0b+0x3cd1,_0x11b6a3['Wuxco']],[0x9c2+-0x1013*0x1+-0x91*-0xd,_0x586988(0x4d9)],[0x1735+0x2f*0x8a+-0x2f77*0x1,'v3'],[0x97b+0x2ca+-0x1*0xb25,_0x11b6a3[_0x586988(0x772)]],[-0x168f+-0x19bb+0x316e,_0x11b6a3[_0x586988(0x772)]],[0x186a+0xb*0xf4+-0x21b2,'v3'],[0x2*0x82f+-0x1*0x11ed+0xf1*0x3,'u8'],[0x103e+-0x105c+0x166,'f32'],[-0x1*-0x11f5+-0x1b1*0x2+-0x61*0x23,'v3'],[0x1*0x16f+0x17b+-0x18a,_0x586988(0x357)],[-0x1b36+-0xdd4+0x153b*0x2,_0x11b6a3[_0x586988(0xd57)]],[-0x1305+-0x1*-0x2a1+0x11d4*0x1,'f32'],[0x5*0x13+0x5b4*0x4+0x15bb*-0x1,'u8'],[-0xf47+-0x1*-0x1446+-0x7*0x81,'v4'],[-0x204e+0x1882*-0x1+0x3a58,_0x586988(0x4d9)],[0x920+0x15d4+-0x1d68,'f32'],[-0x29*-0x5+-0x132f*-0x1+0xc*-0x189,_0x11b6a3['Wuxco']],[0x1735+0x29c+-0x1839,'u8'],[-0x911+-0x15d*0x6+0x1*0x12df,_0x586988(0x357)]],'TargetHealth':[[-0xa1*0x9+-0x1c3a+-0x3*-0xb51,'i32'],[0xd98+0x8b*-0x1+-0x1*0xcf9,_0x11b6a3[_0x586988(0xd57)]],[0x201d+-0x3*0x5f7+-0xd*0x114,'u8'],[-0x5c5*0x2+-0x18f5*0x1+0x1*0x24c3,_0x11b6a3[_0x586988(0xd57)]],[0x1*-0x77c+-0x1693+-0x1*-0x1e57,_0x11b6a3['ApYDr']],[0x2204+-0xc1*-0x15+0x9e9*-0x5,'i32'],[-0x20ca+0x827*0x1+-0x3*-0x851,_0x11b6a3[_0x586988(0xd57)]],[-0x7b6+0x223*0x1+0x617,_0x586988(0x4d9)],[-0x261b+-0x3d0+0x2a77*0x1,'f32'],[0x25d3*-0x1+-0x8*-0x2af+0x10eb,'u8'],[0x2182+0xe02+0x10*-0x2ef,_0x11b6a3[_0x586988(0x772)]],[-0xd58+-0x8*-0x4a9+-0x174c,'u8'],[-0xd5f+-0x11b*-0x5+0x880,_0x586988(0x357)],[-0x2042*0x1+-0xd75+0x1*0x2e63,'i32'],[0x1127+-0x792+0x13*-0x77,_0x586988(0x4d9)],[0x2*0x11f1+-0x26f5*-0x1+-0x4a0b,'u8']],'SectatorCamera':[[0x353*-0x4+-0x83d+0x159d,_0x11b6a3[_0x586988(0x772)]],[-0x1547*-0x1+0x6*-0x376+0x1*-0x6b,_0x586988(0x4d9)],[-0x125e+-0x1*0x15d+0x13d7,_0x586988(0x4d9)],[0xb41+0x1928+-0x2449,'v3'],[-0x17f*-0x11+0x8cb*-0x1+-0x1078,'v3'],[0x1d3b*-0x1+-0x55e*-0x4+-0x1d*-0x47,_0x11b6a3[_0x586988(0xd57)]],[0xdfb+0x4*0x1c2+0x14b7*-0x1,'i32'],[0x79f+0x1*0x294+-0x9e3,_0x11b6a3['Wuxco']],[0x829+-0x20e3+-0x1*-0x190e,'i32'],[-0x1*-0x773+0xbc2+0x1b7*-0xb,_0x586988(0x4d9)],[-0x2176+0x1ddb+0x3f7,'u8'],[-0xfb7+-0x42c*-0x5+-0x4c5,'v3'],[0x10b*0x15+-0x1*-0x2ad+0x305*-0x8,'v4'],[-0x1f50+-0x181f+-0xb2f*-0x5,'u8'],[-0x3*0x359+0x1*0xc13+-0x188,_0x586988(0x357)]],'UISettings':[[-0xdaf*0x2+-0x464*0x1+0x9a*0x35,'i32'],[0x1ac6+0x247f+-0x3f1d,_0x11b6a3[_0x586988(0x772)]],[0x1*0xb62+-0x81a+-0x204,'u8'],[0x697*0x4+0x149*-0x5+-0x12a7,'i32'],[-0x22f0+-0x21be+0x1756*0x3,'i32'],[0x1*-0x1ee0+-0xab5+-0x25*-0x129,_0x11b6a3['ApYDr']],[0xf89+-0xa*0xbc+-0x6d5,'u8'],[0x263c+0x1*0x4d+-0x252c,'u8'],[-0x13eb+-0x2617+0x3b60,'u8'],[-0x17a2+-0x5*-0x20+-0x1*-0x1861,'u8'],[-0x976*-0x3+-0x1f*-0x13b+-0xd*0x503,'u8'],[0x141f+-0x1*0x1c9b+0x9dd,'u8'],[-0x67*0x40+-0x4cb+0x1fed*0x1,'u8'],[-0x494*0x5+0x19d*-0xd+0x2d99,_0x11b6a3[_0x586988(0x772)]],[-0x17dc+0x265f+-0xcbf,_0x11b6a3[_0x586988(0x772)]],[-0x1ca3+0x679+0x1842,'u8'],[0xb22+-0x67f*0x3+0xadb*0x1,_0x586988(0x4d9)],[-0x1dd*-0x7+0xf1*0x1e+-0x26a9,_0x586988(0x357)],[-0x2f*-0xa3+-0x1*-0x24e6+-0x3fdb,'u8'],[0x2d5+-0x1119+-0x34*-0x58,'u8'],[-0xae3*-0x1+0x2cd*-0x9+0x1*0x11f2,'v2'],[-0x20bb+-0x95a+0x2dbd,'v2'],[0x12e*0x11+0xa6b+-0x1ac9,'u8'],[-0x23f*-0x1+-0x43*0x85+0x2448,'u8'],[-0x1ca1+-0x2*0x1157+-0x1a3*-0x29,_0x11b6a3['Wuxco']],[-0x26c1*-0x1+0x300+-0x25f1,'v3'],[0x5d7*-0x3+0x69b*-0x3+0x2*0x149b,_0x586988(0x4d9)],[0x7*-0x169+-0x1*0x1c15+0x29d8,_0x586988(0x4d9)],[-0x187c+-0x14ff+0x1*0x3163,'f32'],[-0x2512+0xb*-0x3d+0x49*0x99,'u8'],[0x1f6f+0xe*-0x35+-0x1898*0x1,'u8'],[0x1a*-0xe7+0x23ae+-0x2e*0x2e,_0x586988(0x357)],[-0x21e0+0x5*0x615+-0x1*-0x777,_0x586988(0x357)],[-0x1371+-0x9*0x4d+0xd15*0x2,_0x586988(0x357)],[-0xa4*-0x5+0x2*0x90b+0x2*-0x8a1,'i32'],[-0x6+0x1*0x1e16+-0x1a04,_0x586988(0x357)],[0x1376+0xb1*0x15+-0x1deb,_0x11b6a3['ApYDr']],[0x1*-0x925+-0xf15+0x1c4e,_0x11b6a3[_0x586988(0xd57)]],[0x1*0xb1b+0x1706+-0x1e09,_0x11b6a3[_0x586988(0xd57)]],[0x1799*-0x1+-0x21a*0x3+0x2203,_0x11b6a3['ApYDr']],[-0x84a+0x1c2b*0x1+-0xfc1,_0x11b6a3['ApYDr']],[0x1c37+-0x1ec7+0x6e4,'u8'],[0x2084+0x3*0x1b3+0x2c6*-0xc,'u8'],[0x62+-0x1bf4+0x4*0x7fa,'u8'],[-0x1*-0x19a1+-0xe30+-0xca*0x9,'u8'],[-0x2675+-0x12d5*-0x1+0x374*0x7,_0x11b6a3[_0x586988(0x772)]]]},_0x4efe7e={},_0xc9fffc={};function _0x498920(_0x6f2381,_0x37245b,_0x38851b){var _0x281797=_0x586988,_0x39cd49={'rsftI':function(_0x3d9537,_0x9c2437){return _0x3d9537+_0x9c2437;},'foNOx':function(_0x21ea80,_0x4d94de){return _0x21ea80+_0x4d94de;},'bTJbz':_0x281797(0x1c8)+'ok\x20fi'+_0x281797(0xdc9)+'t\x20','DFTBD':_0x11b6a3['CbMEZ'],'zUFYn':'none','UBOfB':function(_0x165d94,_0x28e4c8){var _0x2d594a=_0x281797;return _0x11b6a3[_0x2d594a(0xdbd)](_0x165d94,_0x28e4c8);},'DWqJu':function(_0x32d070,_0xcb36b1){return _0x32d070+_0xcb36b1;},'wNKpF':_0x281797(0x917)+_0x281797(0x882)+_0x281797(0x94d)+'\x20like'+_0x281797(0xb1a)+_0x281797(0x749)+'\x20reco'+'n\x20INS'+_0x281797(0x6b1)+_0x281797(0xbb7)+'\x20roun'+_0x281797(0xd6d)+_0x281797(0x279)+_0x281797(0x488)+'.'};return function(_0x185811){var _0x7e7db4=_0x281797,_0x25271f={'cbWXX':function(_0x42ab03,_0x6953ae){return _0x42ab03+_0x6953ae;},'fbexH':function(_0x9e6933,_0x2ee5b9){return _0x9e6933+_0x2ee5b9;},'CMWbF':function(_0xb9c2b8,_0xa52bc6){return _0xb9c2b8(_0xa52bc6);}};try{if(_0x11b6a3['UmqMp'](_0x7e7db4(0x9c4),'wMjKp')){var _0x5ab329=_0x185811&&_0x185811[_0x7e7db4(0x62a)]?_0x185811[_0x7e7db4(0x62a)]():0x3f3*-0x1+-0xb47+0xf3a*0x1;if(!_0x5ab329)return;var _0x48f0ad=_0xc9fffc[_0x6f2381]||(_0xc9fffc[_0x6f2381]={}),_0x3dc166=_0x48f0ad[_0x5ab329];if(!_0x3dc166)_0x3dc166=_0x48f0ad[_0x5ab329]={'ptr':_0x5ab329,'firstSeen':Date[_0x7e7db4(0x854)](),'hits':0x0};_0x3dc166['hits']++;if(_0x38851b){if(!_0x4efe7e[_0x5ab329])_0x4efe7e[_0x5ab329]={'ptr':_0x5ab329,'kind':_0x6f2381,'firstSeen':Date['now'](),'hits':0x0};_0x4efe7e[_0x5ab329]['hits']++;}else{if(_0x7e7db4(0xb25)===_0x7e7db4(0xb25)){var _0x501eb5=_0x4c2416[_0x6f2381];if(!_0x501eb5||_0x501eb5['ptr']!==_0x5ab329){_0x4c2416[_0x6f2381]={'ptr':_0x5ab329,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x501eb5};try{if(_0x7e7db4(0xca1)!==_0x11b6a3[_0x7e7db4(0x8da)]){var _0x2a51f1=_0x37ed37['filte'+'r'](function(_0x4636bc){return _0x4636bc['type']===_0x6f2381;})[-0x2359*-0x1+0x2619*-0x1+0x10*0x2c];_0x57a489={'type':_0x6f2381,'atMs':Date[_0x7e7db4(0x854)]()-_0x1c7ce6,'originalFunc':!!(_0x2a51f1&&_0x2a51f1['hook']&&_0x11b6a3[_0x7e7db4(0x91e)](typeof _0x2a51f1[_0x7e7db4(0xaf5)][_0x7e7db4(0x92e)+_0x7e7db4(0xbe0)+'nc'],_0x11b6a3[_0x7e7db4(0x702)])),'resolveGameAtFire':!!_0x11b6a3[_0x7e7db4(0x215)](_0x47a295),'gameSourceAtFire':_0x265ccb[_0x7e7db4(0x6f8)+'e']};}else{var _0x150398='';_0x4b47d2['hookF'+_0x7e7db4(0x2c7)+_0x7e7db4(0xced)]&&(_0x150398=_0x39cd49[_0x7e7db4(0x5b9)](_0x39cd49[_0x7e7db4(0x767)](_0x39cd49[_0x7e7db4(0x767)](_0x39cd49['bTJbz']+_0x1adb64[_0x7e7db4(0xd3c)+'irePr'+'oof']['atMs']+(_0x7e7db4(0x63d)+_0x7e7db4(0x893)+_0x7e7db4(0x2eb)+'lFunc'+'='),_0x13f909[_0x7e7db4(0xd3c)+'irePr'+'oof']['origi'+_0x7e7db4(0xbe0)+'nc']),_0x7e7db4(0x196)+_0x7e7db4(0x47e)+_0x7e7db4(0xa36)+_0x7e7db4(0x73f))+_0x14bbb9['hookF'+_0x7e7db4(0x2c7)+'oof'][_0x7e7db4(0xa36)+_0x7e7db4(0x894)+'eAtFi'+'re']+_0x39cd49[_0x7e7db4(0x502)]+(_0x31b73a[_0x7e7db4(0xd3c)+'irePr'+_0x7e7db4(0xced)][_0x7e7db4(0x640)+_0x7e7db4(0x91d)+'AtFir'+'e']||_0x39cd49[_0x7e7db4(0x27e)]),'),\x20so'+_0x7e7db4(0x377)+'refer'+_0x7e7db4(0x856)+_0x7e7db4(0x1a2)+_0x7e7db4(0xc4a)+'en\x20an'+'d\x20is\x20'+_0x7e7db4(0x740)+_0x7e7db4(0x9ea)+_0x7e7db4(0xdc0)+'ow.')),_0xae1005['warni'+'ngs']['push'](_0x39cd49[_0x7e7db4(0x5b9)](_0x39cd49[_0x7e7db4(0x47a)](_0x39cd49[_0x7e7db4(0x318)]('Unity'+_0x7e7db4(0x823)+'ance\x20'+_0x7e7db4(0x740)+'esolv'+_0x7e7db4(0xa37)+_0x7e7db4(0xc41)+'urce:'+'\x20',_0x526b70['globa'+'ls'][_0x7e7db4(0x640)+'ource']||_0x7e7db4(0x29f))+').\x20',_0x7e7db4(0xb8e)+'reads'+'\x20stay'+_0x7e7db4(0x4f3)+'ked\x20u'+'ntil\x20'+_0x7e7db4(0x698)+_0x7e7db4(0xa2a)+_0x7e7db4(0x55f)+_0x7e7db4(0x96f)+_0x7e7db4(0x8f9)+_0x7e7db4(0xc9d)+_0x7e7db4(0xaab)+_0x7e7db4(0xbe4)+_0x7e7db4(0x45f)+'.'),_0x150398));}}catch(_0x371e4f){}}}else _0x4649a9[_0x7e7db4(0x334)]='No\x20Ph'+'otonN'+_0x7e7db4(0x2e2)+_0x7e7db4(0xa2d)+_0x7e7db4(0x1b7)+_0x7e7db4(0x8de)+_0x7e7db4(0x3e9)+'ler\x20a'+_0x7e7db4(0x5bf)+'\x20game'+_0x7e7db4(0x7d3)+_0x7e7db4(0x303)+'That\x20'+_0x7e7db4(0xdb6)+'at\x20'+_0x39cd49['wNKpF'];}if(_0x11b6a3[_0x7e7db4(0x509)](_0x6f2381,'FPSco'+_0x7e7db4(0x6a2)+'ler')&&_0x3b07fd['on'])try{_0x11b6a3[_0x7e7db4(0x8b8)](_0x305e83,_0x5ab329);}catch(_0x59cb4e){}if(!_0x37245b){var _0x2a51f1=_0x37ed37['filte'+'r'](function(_0x3ac51f){var _0x5b6d2a=_0x7e7db4;return _0x3ac51f[_0x5b6d2a(0x55a)]===_0x6f2381;})[0xa28+-0x25b3*0x1+0x1b8b];if(_0x2a51f1&&_0x2a51f1[_0x7e7db4(0xaf5)]){if(_0x11b6a3[_0x7e7db4(0x44d)]!=='UUusu')try{_0x2a51f1[_0x7e7db4(0xaf5)]['enabl'+'ed']=![];}catch(_0x3708c0){}else _0x35e3b3[_0x7e7db4(0x68c)](_0x25271f[_0x7e7db4(0x49c)](_0x25271f[_0x7e7db4(0xae7)](_0x15959f[_0x7e7db4(0x55a)],':\x20'),_0x25271f[_0x7e7db4(0x2a9)](_0x41acc6,_0x5d52a7&&_0x1e9c4d['messa'+'ge']||_0x4bf0dc)[_0x7e7db4(0xb19)](0x1354+-0x106a+-0x2*0x175,0x1c21+-0x1d04+0x2b*0x9)));}}}else _0x44edd6=_0x4c223c,_0x58a4fc=_0x6e2178['now']()-_0x38f853;}catch(_0x3b69f8){}};}function _0x549a69(){var _0x182697=_0x586988;if(_0x37ed37[_0x182697(0x964)+'h'])return!![];if(!window['Unity'+_0x182697(0x881)+'dkit']||!window['Unity'+_0x182697(0x881)+_0x182697(0x984)]['Runti'+'me'])return![];var _0x5ea63a=window['Unity'+'WebMo'+_0x182697(0x984)]['Runti'+'me'];if(!_0x5ea63a[_0x182697(0x5bd)+'ns']||!_0x5ea63a['plugi'+'ns']['lengt'+'h'])return![];_0x4788c8=window['Unity'+'WebMo'+'dkit'][_0x182697(0x3e7)+_0x182697(0xd6e)+'er'],_0x35f760=_0x35f760||_0x5ea63a['plugi'+'ns'][_0x11b6a3[_0x182697(0x588)](_0x5ea63a['plugi'+'ns'][_0x182697(0x964)+'h'],0x55b+-0xd56*-0x2+-0x2006)];if(!_0x35f760||typeof _0x35f760[_0x182697(0x724)+_0x182697(0x79c)]!==_0x11b6a3[_0x182697(0x702)])return![];for(var _0x5d437c=0x1137*-0x1+-0x3eb+-0xa*-0x21d;_0x11b6a3[_0x182697(0x2d4)](_0x5d437c,_0xc889d2['lengt'+'h']);_0x5d437c++){var _0x309b88=_0xc889d2[_0x5d437c];try{var _0x1ecfad=_0x35f760['hookP'+'refix']({'typeName':_0x309b88[_0x182697(0x55a)],'methodName':_0x11b6a3['Vjqls'],'params':['i32',_0x11b6a3[_0x182697(0xd57)]],'returnType':undefined},_0x498920(_0x309b88[_0x182697(0x55a)],_0x309b88[_0x182697(0x2e6)],_0x309b88[_0x182697(0xbc3)]));_0x37ed37['push']({'type':_0x309b88[_0x182697(0x55a)],'hook':_0x1ecfad,'keep':_0x309b88['keep']});}catch(_0x16eac0){_0x49fba6[_0x182697(0x68c)](_0x309b88[_0x182697(0x55a)]+':\x20'+String(_0x16eac0&&_0x16eac0['messa'+'ge']||_0x16eac0)[_0x182697(0xb19)](0xfd4+0x20ff+-0x30d3,0x898+-0x135b+0xb63));}}return _0x37ed37['lengt'+'h']>-0x2*-0x1b+-0x130c*0x2+0x25e2;}function _0x86ef81(_0x2f80d6,_0xc47c22){var _0x331c2d={'hXKeh':function(_0x21b61e,_0x278cf5){return _0x21b61e!==_0x278cf5;}};return function(){var _0x4a0ade=_0x576a,_0x16a2f9={'plSUO':function(_0x1ac95e,_0x36a3cc){return _0x11b6a3['JxAsE'](_0x1ac95e,_0x36a3cc);}};try{var _0x1ba7df=_0x1d9f74[_0xc47c22]||(_0x1d9f74[_0xc47c22]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0xd6d8e1=arguments;if(_0x2f80d6===_0x11b6a3['JaJGG']){var _0x1b58f5=_0xd6d8e1[0x18b1+0x7cf+0x280*-0xd];if(_0x1b58f5&&typeof _0x1b58f5[_0x4a0ade(0x62a)]===_0x4a0ade(0x952)+'ion'){if(_0x11b6a3[_0x4a0ade(0x666)](_0x4a0ade(0x9f7),'oiqdq')){var _0x39a307=_0x1b58f5['val']();if(_0x11b6a3[_0x4a0ade(0xc2d)](typeof _0x39a307,_0x4a0ade(0x846)+'r')&&_0x11b6a3[_0x4a0ade(0x557)](isFinite,_0x39a307)){if(_0x11b6a3[_0x4a0ade(0xdee)](_0x1ba7df['lo'],null)||_0x11b6a3[_0x4a0ade(0x2d4)](_0x39a307,_0x1ba7df['lo']))_0x1ba7df['lo']=_0x39a307;if(_0x1ba7df['hi']===null||_0x11b6a3[_0x4a0ade(0x6ff)](_0x39a307,_0x1ba7df['hi']))_0x1ba7df['hi']=_0x39a307;if(_0x1ba7df['last']!==null){var _0x47e274=Math[_0x4a0ade(0x9ad)](_0x11b6a3['zHcwE'](_0x39a307,_0x1ba7df[_0x4a0ade(0x51e)]));if(_0x11b6a3[_0x4a0ade(0x6ff)](_0x47e274,_0x1ba7df['jump']))_0x1ba7df[_0x4a0ade(0x92f)]=_0x47e274;}_0x1ba7df['last']=_0x39a307;}_0x1ba7df['hits']++;if(_0xd6d8e1[-0x1f4b+0x1d52+0x1fa]&&typeof _0xd6d8e1[-0x7eb*0x1+0x1d*0x5f+-0x2d7][_0x4a0ade(0x62a)]===_0x4a0ade(0x952)+_0x4a0ade(0x8b4)){var _0x5e45a1=_0xd6d8e1[-0x2115+-0xa*0x204+-0x5*-0xaa6]['val']();if(_0x5e45a1)_0x27c474=_0x5e45a1;}}else{var _0x2a7468=-0xcae+0x163c+-0x4c7*0x2;for(var _0x4cd5c6=-0x19ac+0x6ca*0x3+0x54e;_0x16a2f9[_0x4a0ade(0x65f)](_0x4cd5c6,_0xa6b678[_0x4a0ade(0x964)+'h']);_0x4cd5c6++){if(_0x43716d[_0x4cd5c6]['hook']&&_0x22cc49[_0x4cd5c6][_0x4a0ade(0xaf5)][_0x4a0ade(0x2a5)+'ed'])_0x2a7468++;}return _0x2a7468;}}}else{_0xd6d8e1[0x2395+0x179*-0x13+0x5*-0x185]&&_0x11b6a3[_0x4a0ade(0x458)](typeof _0xd6d8e1[0x6ce+0x1*0x16c3+-0x1d90][_0x4a0ade(0x62a)],_0x4a0ade(0x952)+_0x4a0ade(0x8b4))&&(_0x1ba7df['setLa'+'st']=_0xd6d8e1[-0x658+0x71*0xa+0x3*0xa5]['val'](),_0x1ba7df['setHi'+'ts']++);if(_0xd6d8e1[-0x843*0x3+-0xfae+0x2879]&&typeof _0xd6d8e1[0x178d+0x1098+-0x807*0x5][_0x4a0ade(0x62a)]===_0x4a0ade(0x952)+_0x4a0ade(0x8b4)){if(_0x11b6a3[_0x4a0ade(0x379)]!==_0x11b6a3['XNWwI']){var _0x467c69=_0x521621[_0x4a0ade(0xd62)](-0x16f8+0x89c+0xe5d,_0xf31a09[_0x4a0ade(0xdd8)+'Width']||_0x5f408f['docum'+_0x4a0ade(0x337)+_0x4a0ade(0x91c)]['clien'+'tWidt'+'h']||-0x307*-0x5+-0x184f*-0x1+-0x2772),_0x5c9f81=_0x274dd1['max'](0x36a+0x7a2*-0x1+-0x1*-0x439,_0x1050df[_0x4a0ade(0xdd8)+_0x4a0ade(0x79f)+'t']||_0x5b4732[_0x4a0ade(0x159)+'entEl'+_0x4a0ade(0x91c)]['clien'+_0x4a0ade(0xc53)+'ht']||0x122*-0xf+0x1*-0x10cb+0x21c9);return(_0x331c2d[_0x4a0ade(0x650)](_0x2eef4f['cv']['width'],_0x467c69)||_0x20b5e9['cv']['heigh'+'t']!==_0x5c9f81)&&(_0x30320d['cv'][_0x4a0ade(0x3c3)]=_0x467c69,_0x585a23['cv'][_0x4a0ade(0xdf8)+'t']=_0x5c9f81),{'w':_0x467c69,'h':_0x5c9f81};}else _0x1ba7df['setB']=_0xd6d8e1[-0x14a2+-0xcd8+0x217c][_0x4a0ade(0x62a)](),_0x1ba7df[_0x4a0ade(0x7d8)+_0x4a0ade(0xb79)]++;}if(_0xd6d8e1[0x4*-0x4d6+0x10fe+0x25a]&&typeof _0xd6d8e1[-0x21*-0x10c+0x3*-0xb2b+0x1*-0x10b]['val']==='funct'+_0x4a0ade(0x8b4)){var _0x1b4487=_0xd6d8e1[-0xc87+-0x1*0x18d+0x44*0x35]['val']();if(_0x1b4487)_0x27c474=_0x1b4487;}}}catch(_0x5132b8){}};}function _0x2f25ab(){var _0x3d500f=_0x586988;if(_0x11b6a3[_0x3d500f(0x162)]!=='nlybX'){if(_0x65f6dd)_0x3923f3[_0x3d500f(0x4fc)+_0x3d500f(0xa15)+'t']=(_0x323890(_0xb66ced[_0x3d500f(0xc6d)])||0xcbb+-0xfae+-0xe*-0x36)['toFix'+'ed'](-0x1de4+-0x3d*-0x32+0x11fb)+'x';_0x389b1a();}else{if(_0x3103cb)return!![];if(!_0x35f760||typeof _0x35f760[_0x3d500f(0x724)+'ostfi'+'x']!==_0x11b6a3[_0x3d500f(0x702)])return![];var _0x3e63da=_0x5f19f2[_0x3d500f(0x78d)+'Look']||[];for(var _0x25f430=-0x1463+0x1c60+-0x5*0x199;_0x25f430<_0x3e63da['lengt'+'h'];_0x25f430++){var _0x4a8f86=_0x3e63da[_0x25f430];try{if(_0x11b6a3[_0x3d500f(0x56c)](_0x4a8f86[_0x3d500f(0x6ba)],_0x3d500f(0x9b5))){if(_0x11b6a3[_0x3d500f(0x68e)]==='csHeJ')_0x35f760[_0x3d500f(0x724)+'ostfi'+'x']({'typeName':_0x11b6a3[_0x3d500f(0x4ec)],'methodName':_0x4a8f86['name'],'params':_0x4a8f86['wasmP'+_0x3d500f(0xc2f)],'returnType':_0x4a8f86[_0x3d500f(0x1f4)+'et']},_0x86ef81('get',_0x4a8f86[_0x3d500f(0xb48)]));else{var _0x1967df=_0x193a33();_0x571d64[_0x3d500f(0xc6d)]=_0x50a8a6(_0x1967df),_0x5755c1['textC'+_0x3d500f(0xa15)+'t']=(_0x27a196<-0x2*0x12a1+-0x35b*0xb+0x4a2c?_0x1967df[_0x3d500f(0xd34)+'ed'](0x1f6*0x7+0xc*-0x281+0x1053):_0x4b78ed(_0x3d0cc9[_0x3d500f(0x2c4)](_0x1967df)))+(_0x38bc43['datas'+'et'][_0x3d500f(0x15a)]||'');var _0x42a432=_0x11b6a3[_0x3d500f(0x828)](_0x11b6a3[_0x3d500f(0x62e)](_0x1967df,_0x1fa1df),_0x11b6a3['NDQTc'](_0xfc8fd8,_0x37d99e))*(-0x1776+0x1*-0x829+-0x95*-0x37);_0x4f592b[_0x3d500f(0x3d2)][_0x3d500f(0x98f)+_0x3d500f(0xafe)+'y']('--p',_0x42a432+'%');}}else _0x4a8f86['ret']===_0x3d500f(0xd0e)&&_0x4a8f86['param'+'s'][_0x3d500f(0x964)+'h']===-0x1832+0x1f09+-0x36b*0x2&&_0x4a8f86['param'+'s'][-0x1246*0x1+-0x1ed1+-0x1*-0x3117]===_0x11b6a3['oFACW']&&_0x35f760[_0x3d500f(0x724)+_0x3d500f(0x79c)]({'typeName':_0x11b6a3['dgPFy'],'methodName':_0x4a8f86[_0x3d500f(0xb48)],'params':_0x4a8f86[_0x3d500f(0x2ea)+_0x3d500f(0xc2f)],'returnType':undefined},_0x86ef81(_0x3d500f(0xc45),_0x4a8f86['name']));}catch(_0x5c0102){_0x50ef99['push'](_0x11b6a3['lnmES'](String,_0x5c0102&&_0x5c0102[_0x3d500f(0xd29)+'ge']||_0x5c0102)[_0x3d500f(0xb19)](-0x1a2f*-0x1+-0x7f*0x5+-0x17b4,-0x1f4e+-0x11b*-0xa+-0x1*-0x14b8));}}return _0x3103cb=!![],!![];}}function _0x1ffe33(){var _0x3fff52=_0x586988,_0x5238d9=0x1af*-0x2+-0xf23+0x3*0x62b,_0x101c3e=0x177b*0x1+-0x72a+-0x1051,_0x2b6183=-0x8*-0x221+-0x1006*-0x1+0x1*-0x210e,_0x22aab2=0x329+0x2260+0x3*-0xc83,_0x4b4630=0x5*-0x685+0xb3a+0x1*0x155f;try{if(_0x3fff52(0x74e)==='OxzvL'){var _0x47a568=window[_0x3fff52(0x1c2)+_0x3fff52(0x881)+'dkit']&&window['Unity'+_0x3fff52(0x881)+'dkit'][_0x3fff52(0x213)+'me'],_0x3118ea=_0x35f760||_0x47a568&&_0x47a568[_0x3fff52(0x5bd)+'ns']&&_0x47a568['plugi'+'ns'][_0x11b6a3['XcRAC'](_0x47a568[_0x3fff52(0x5bd)+'ns']['lengt'+'h'],-0x759+-0xbb*-0x35+0xd9*-0x25)];if(_0x3118ea&&_0x3118ea[_0x3fff52(0xb2a)])for(var _0x22d1e9=0x10d1+-0x193e+0x86d;_0x22d1e9<_0x3118ea[_0x3fff52(0xb2a)][_0x3fff52(0x964)+'h'];_0x22d1e9++){var _0x2a0220=_0x3118ea['hooks'][_0x22d1e9];if(!_0x2a0220||_0x11b6a3[_0x3fff52(0x553)](_0x2a0220[_0x3fff52(0x380)+_0x3fff52(0xdde)],_0x3fff52(0x78d)+'Look'))continue;_0x5238d9++;if(_0x2a0220['table'+_0x3fff52(0x539)]!==undefined)_0x101c3e++;if(_0x2a0220[_0x3fff52(0x2a5)+'ed'])_0x2b6183++;}}else _0x39df7a=_0x355d9b(_0x55efd1,_0x1cf671||0x1a07+-0x2*0x1007+-0x639*-0x1);}catch(_0x15fcbf){}for(var _0xc73073 in _0x1d9f74){var _0x13a025=_0x1d9f74[_0xc73073];_0x22aab2+=_0x13a025[_0x3fff52(0x421)]||0x1fa1+-0x244*0x9+-0x3*0x3bf,_0x4b4630+=(_0x13a025['setHi'+'ts']||-0x711*0x5+-0x1050+0x33a5)+(_0x13a025['pairH'+_0x3fff52(0xb79)]||-0xb*-0x242+-0x48*-0x3a+-0x1ca*0x17);}return{'registered':_0x3103cb,'total':_0x5238d9,'resolved':_0x101c3e,'applied':_0x2b6183,'getterHits':_0x22aab2,'setterHits':_0x4b4630,'distinct':Object[_0x3fff52(0xc9b)](_0x1d9f74)[_0x3fff52(0x964)+'h'],'errorCount':_0x50ef99['lengt'+'h'],'errors':_0x50ef99['slice'](-0x1379+-0x1*-0x17f3+0xbf*-0x6,-0x623*0x3+-0xb3*0xd+0x3*0x92c)};}function _0x27dfd7(){var _0x44c405=_0x586988,_0x46c191=null,_0x5566c2=0x241e+0x2*-0x12da+-0x3a*-0x7;for(var _0x456c2f in _0x1d9f74){var _0x18d83d=_0x1d9f74[_0x456c2f];_0x18d83d[_0x44c405(0x7d8)+_0x44c405(0xb79)]&&_0x18d83d[_0x44c405(0x7d8)+'its']>_0x5566c2&&typeof _0x18d83d[_0x44c405(0x93a)+'st']==='numbe'+'r'&&typeof _0x18d83d[_0x44c405(0xd71)]===_0x11b6a3['gIRNe']&&_0x11b6a3['gJBte'](isFinite,_0x18d83d[_0x44c405(0x93a)+'st'])&&isFinite(_0x18d83d[_0x44c405(0xd71)])&&(_0x46c191={'rawA':_0x18d83d[_0x44c405(0x93a)+'st'],'rawB':_0x18d83d['setB'],'hits':_0x18d83d[_0x44c405(0x7d8)+'its'],'name':_0x456c2f},_0x5566c2=_0x18d83d[_0x44c405(0x7d8)+_0x44c405(0xb79)]);}if(!_0x46c191)return null;var _0x881b17=_0x11b6a3[_0x44c405(0x97e)](_0x46c191[_0x44c405(0x56d)],-(-0x350+0x10f9+-0x1*0xd4f))&&_0x46c191['rawA']<=0x13e1+0x1f93*-0x1+-0x2*-0x606,_0x220115=_0x46c191['rawB']>=-(0x784+0x26ba+-0x2de4)&&_0x11b6a3['sWtEr'](_0x46c191[_0x44c405(0x255)],0x33b+-0x59*0x36+0xfe5);return _0x881b17!==_0x220115?(_0x46c191['pitch']=_0x881b17?_0x46c191['rawA']:_0x46c191[_0x44c405(0x255)],_0x46c191[_0x44c405(0x314)]=_0x881b17?_0x46c191['rawB']:_0x46c191[_0x44c405(0x56d)],_0x46c191[_0x44c405(0xb94)]=_0x881b17?_0x44c405(0x951):'b,a'):(_0x46c191[_0x44c405(0x54c)]=null,_0x46c191[_0x44c405(0x314)]=null,_0x46c191['order']=_0x11b6a3[_0x44c405(0x9cf)]('unres'+_0x44c405(0xd50)+'\x20('+(_0x881b17?_0x44c405(0x16a)+'bound'+'ed':'neith'+'er\x20bo'+_0x44c405(0xa9a)),')')),_0x46c191;}function _0x37c94c(){var _0x38cbb2=_0x586988,_0x58f46a={'TyRUQ':function(_0xee56df){var _0x11602c=_0x576a;return _0x11b6a3[_0x11602c(0x1a6)](_0xee56df);}};if(_0x11b6a3[_0x38cbb2(0x20b)](_0x38cbb2(0x95a),'Msuuk')){_0x58f46a[_0x38cbb2(0x684)](_0x20dd4b);return;}else{var _0x3cb59f=0x1ef8*-0x1+-0x13*0x117+-0x33ad*-0x1;for(var _0x12081a=-0x1*0xf5c+-0x195b*-0x1+-0x3*0x355;_0x12081a<_0x37ed37['lengt'+'h'];_0x12081a++){if(_0x37ed37[_0x12081a]['hook']&&_0x11b6a3[_0x38cbb2(0xb2b)](_0x37ed37[_0x12081a][_0x38cbb2(0xaf5)]['table'+_0x38cbb2(0x539)],undefined))_0x3cb59f++;}return _0x3cb59f;}}function _0x3fc79d(){var _0x5542a1=_0x586988,_0xe4cff5=-0x1*0x1eb8+-0x3e*0x95+-0x11*-0x3ee;for(var _0x1a261d=-0x6*0x2a7+-0xaf2*-0x1+-0x6a*-0xc;_0x1a261d<_0x37ed37['lengt'+'h'];_0x1a261d++){if(_0x11b6a3[_0x5542a1(0xa6d)]('zeHZz',_0x11b6a3['euZRt'])){if(_0x2ebc91['lg'])_0x3d3c02['lg']['textC'+_0x5542a1(0xa15)+'t']='';return;}else{if(_0x37ed37[_0x1a261d]['hook']&&_0x37ed37[_0x1a261d]['hook'][_0x5542a1(0x2a5)+'ed'])_0xe4cff5++;}}return _0xe4cff5;}var _0x48fc30=null,_0x58aeb3=[],_0x367066={},_0x57a489=null;function _0x251615(_0x48569f){var _0x5ec0e7=_0x586988;try{if(!_0x4788c8||!_0x48569f)return null;var _0x112eed=new _0x4788c8(_0x48569f)['getCl'+_0x5ec0e7(0x49f)+'me']();return _0x112eed===undefined?null:_0x112eed;}catch(_0xa53abb){return null;}}function _0x25d0eb(_0x2a55ac,_0x2704ba,_0x46ba4c){var _0x2a2c06=_0x586988,_0x4eb6e1=_0x11b6a3[_0x2a2c06(0x7f7)](_0x3a443b);if(!_0x4eb6e1)return null;if(_0x11b6a3['akFnl'](_0x2704ba,0x3*-0xbb9+-0x14eb+0x3816)||_0x11b6a3['Jtlhk'](_0x11b6a3[_0x2a2c06(0x92a)](_0x2704ba,_0x46ba4c*(0xc73*-0x1+0x1*-0x14ad+-0x6*-0x586)),_0x4eb6e1[_0x2a2c06(0x4ae)+'ength']))return null;var _0x19a965=[];for(var _0xa4ac51=0x1bd1+0x14df+-0x13*0x290;_0x11b6a3[_0x2a2c06(0x515)](_0xa4ac51,_0x46ba4c);_0xa4ac51++)_0x19a965['push'](_0x4eb6e1[_0x2a2c06(0x9ac)+'oat32'](_0x2a55ac+_0x2704ba+_0xa4ac51*(-0x163*0xe+0xf22+-0x19*-0x2c),!![]));return _0x265ccb['ok']+=_0x46ba4c,_0x19a965;}var _0x29c4b3={'PhotonNetworkSync':[[_0x11b6a3['jiVkF'],_0x11b6a3[_0x586988(0x65b)]],[_0x11b6a3['HorNt'],_0x11b6a3['ukCvc']],['0x24',_0x11b6a3['LzKie']],[_0x11b6a3[_0x586988(0xb58)],'fps'],['0x30',_0x11b6a3[_0x586988(0xca3)]]],'NetworkPlayerAnimations':[[_0x586988(0x916),_0x11b6a3[_0x586988(0x41b)]],[_0x11b6a3[_0x586988(0x61e)],_0x11b6a3['OzRCp']]],'NPC_Cotroller':[[_0x11b6a3[_0x586988(0x930)],'capsu'+'le'],[_0x11b6a3['SYtRW'],_0x11b6a3[_0x586988(0x2ee)]],[_0x11b6a3[_0x586988(0x9bd)],_0x586988(0xa66)+'h'],[_0x11b6a3['XjRDt'],_0x586988(0x5cb)+'tHeal'+_0x586988(0x351)],[_0x586988(0x63e),_0x11b6a3['LzKie']]],'EnemyBot':[[_0x11b6a3[_0x586988(0x6c4)],_0x586988(0x4e0)+'form']]},_0x2fad85={'PhotonNetworkSync':[[_0x586988(0x444),'team'],[_0x586988(0xccd),'local'+_0x586988(0x348)],[_0x11b6a3[_0x586988(0x3d0)],'id']]};function _0xe1a371(_0x1de4e0,_0x4dc9e9){var _0x1d0a87=_0x586988,_0x48256b={'aPEDR':function(_0x356db8,_0x2a48a8){return _0x356db8/_0x2a48a8;}};if(_0x1d0a87(0x56f)!=='aLgWo'){var _0x49955c=_0x5b1b65[_0x1de4e0]||[],_0x5b17da={'kind':_0x1de4e0,'ptr':_0x11b6a3[_0x1d0a87(0x911)]('0x',_0x4dc9e9['toStr'+_0x1d0a87(0x3cc)](-0x16cb+-0x56f*0x2+0x21b9)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x4bd324=0x407+0x1ced*0x1+-0x20f4;_0x11b6a3['JxAsE'](_0x4bd324,_0x49955c[_0x1d0a87(0x964)+'h']);_0x4bd324++){if(_0x1d0a87(0xc06)===_0x11b6a3['lbmex']){if(_0x49955c[_0x4bd324][0x98*-0x20+-0xda2+-0x3*-0xae1]!=='v3')continue;var _0x5c39c2=_0x25d0eb(_0x4dc9e9,_0x49955c[_0x4bd324][0x1*-0x256a+0x1*0xa7+-0x1*-0x24c3],-0x410+-0x17b7+0x1bca);if(!_0x5c39c2)continue;_0x5b17da[_0x1d0a87(0x394)+'cs'][_0x1d0a87(0x68c)]({'o':'0x'+_0x49955c[_0x4bd324][0x179a*0x1+0x329*-0x4+-0xaf6][_0x1d0a87(0xd0f)+_0x1d0a87(0x3cc)](-0x9b4+-0xed8+0x189c),'v':_0x5c39c2});}else{var _0x58080b=_0x23bcc7['root'];if(!_0x58080b||!_0x58080b['style'])return;_0x22de0c[_0x1d0a87(0x3a2)]?(_0x58080b['style']['left']=_0x38bd1f[_0x1d0a87(0x3a2)]['x']+'px',_0x58080b['style']['top']=_0x47d6ab[_0x1d0a87(0x3a2)]['y']+'px',_0x58080b[_0x1d0a87(0x3d2)][_0x1d0a87(0x264)]='auto',_0x58080b[_0x1d0a87(0x3d2)][_0x1d0a87(0x204)+'m']='auto'):(_0x58080b[_0x1d0a87(0x3d2)]['left']=_0x1d0a87(0xd15),_0x58080b[_0x1d0a87(0x3d2)]['top']=_0x11b6a3[_0x1d0a87(0x587)],_0x58080b['style']['right']=_0x11b6a3['ZTsAX'],_0x58080b[_0x1d0a87(0x3d2)][_0x1d0a87(0x204)+'m']=_0x1d0a87(0xb7a));}}var _0x27de83=-0x35*-0x77+0x1*-0x20d2+0x82f,_0x106284=_0x1de4e0+'@'+_0x4dc9e9,_0x4b3fa1=_0x2092fe(_0x5b17da[_0x1d0a87(0x394)+'cs'],_0x1e07e2(),_0x2a3d45[_0x106284]);_0x2a3d45[_0x106284]=_0x4b3fa1[_0x1d0a87(0xb00)]?{'o':_0x4b3fa1['posAt']}:null,_0x5b17da['pos']=_0x4b3fa1[_0x1d0a87(0x3a2)],_0x5b17da['posAt']=_0x4b3fa1[_0x1d0a87(0xb00)],_0x5b17da['held']=_0x4b3fa1['held'],_0x5b17da[_0x1d0a87(0x4b8)+_0x1d0a87(0x33f)]=_0x4b3fa1['candi'+'dates'],_0x5b17da['clust'+'er']=_0x4b3fa1[_0x1d0a87(0x1c0)+'er'],_0x5b17da['reach']=_0x4b3fa1[_0x1d0a87(0x179)],void _0x27de83;var _0x3ed911=_0x29c4b3[_0x1de4e0],_0x1b5c5b=_0x2fad85[_0x1de4e0];if(_0x1b5c5b){_0x5b17da['tag']={};for(var _0x148f04=0x2135+-0x1e06*-0x1+0x1*-0x3f3b;_0x11b6a3['VCgJQ'](_0x148f04,_0x1b5c5b[_0x1d0a87(0x964)+'h']);_0x148f04++){var _0x4eefea=_0x5f506b(_0x11b6a3['ZanWF'](_0x4dc9e9,parseInt(_0x1b5c5b[_0x148f04][0x1772+-0x252b+0xdb9],-0x2181+0x96*0x36+0x1ed*0x1)),'i32');if(_0x11b6a3[_0x1d0a87(0x500)](_0x4eefea,undefined))_0x5b17da[_0x1d0a87(0x4bc)][_0x1b5c5b[_0x148f04][0x19e7*-0x1+0x4f*0x56+-0x1b*0x6]]=_0x4eefea;}}if(_0x3ed911){if(_0x11b6a3[_0x1d0a87(0xc5e)]===_0x1d0a87(0x292)){var _0x991f9=_0x189634[_0x13ae4f]['xyz']||[_0x398af6[_0x1de2d6]['v'],0x5*0x62b+-0x9*-0x12b+-0x2*0x14ad,0x1170+0xe9*0x15+-0x248d];return _0x991f9[_0x1d0a87(0x2dd)](function(_0x61b913){var _0x4019ab=_0x1d0a87;return _0x48256b[_0x4019ab(0xdf3)](_0x116d55['round'](_0x61b913*(0x5cf*0x3+0xf17+0x1*-0x2020)),0x11e3+0x329*-0x8+0x7c9);})[_0x1d0a87(0xd89)]('\x20\x20');}else for(var _0x465b12=-0xfc1+0x24*-0x1c+0x13b1;_0x465b12<_0x3ed911[_0x1d0a87(0x964)+'h'];_0x465b12++){var _0x438a70=_0x11b6a3['cQmxZ'](_0x5f506b,_0x4dc9e9+parseInt(_0x3ed911[_0x465b12][0x7*-0xcb+0x4*-0x7b9+0x2471],-0x16ad+-0x3b*-0x42+0x787),_0x11b6a3[_0x1d0a87(0x777)]);if(_0x438a70)_0x5b17da['refs'][_0x3ed911[_0x465b12][0x185*0x2+0x8f5+-0x1*0xbfe]]='0x'+(_0x438a70>>>-0x2054+0x235a+-0x56*0x9)[_0x1d0a87(0xd0f)+_0x1d0a87(0x3cc)](0x135d+0x1b01+0x2*-0x1727);}}return _0x5b17da[_0x1d0a87(0xd17)+'rs']=_0x49955c['filte'+'r'](function(_0x43edfa){var _0x3a0861=_0x1d0a87;return _0x11b6a3[_0x3a0861(0x3d3)](_0x43edfa[0xf3+-0x1e1*-0xc+0x61*-0x3e],'f32')||_0x43edfa[0x28*0x19+-0x1631+0x124a]==='i32';})[_0x1d0a87(0x2dd)](function(_0x3a99f9){var _0x42bdd4=_0x1d0a87,_0xd29cc2={'lSjYR':function(_0x2168be,_0x2060c4){return _0x2168be-_0x2060c4;},'WMDdV':function(_0x890889,_0x51fb1f){return _0x890889*_0x51fb1f;},'QpmHb':function(_0x435386,_0xd40d17){return _0x435386/_0xd40d17;}};if('bOYxC'===_0x11b6a3['wOBeM'])return{'o':_0x11b6a3[_0x42bdd4(0x2ad)]('0x',_0x3a99f9[0x1705+0x108b+-0x2790][_0x42bdd4(0xd0f)+'ing'](0x1558+0x1d7f+0x26b*-0x15)),'v':_0x5f506b(_0x4dc9e9+_0x3a99f9[-0x2*-0x796+0x19a2+-0x3*0xd9a],_0x3a99f9[0x1*-0xd69+-0x227d+0x2fe7])};else{var _0x5d794c=_0xd29cc2['lSjYR'](_0x1a1a12[0x23b7+-0x23e+-0x2179],_0xeb3596['feet'][0x9e3*0x3+0x54d*0x2+0x3a9*-0xb]),_0x26036e=_0x5771ae[0x21ce+0x7*0x44b+-0x1*0x3fd9]-_0x465eca[_0x42bdd4(0x573)][-0x4*0x2b6+-0xcf*0x2f+0x30db];_0x1f3ded['d']=_0xa05390[_0x42bdd4(0xba0)](_0x5d794c*_0x5d794c+_0xd29cc2[_0x42bdd4(0x7af)](_0x26036e,_0x26036e)),_0x352258[_0x42bdd4(0xae8)+'ng']=_0xd29cc2['QpmHb'](_0xd29cc2[_0x42bdd4(0x7af)](_0x16d52d['atan2'](_0x5d794c,_0x26036e),-0x6ca+-0x1e7e*-0x1+0x2e*-0x80),_0x1e73ae['PI']);}})[_0x1d0a87(0xbb0)+'r'](function(_0x368477){return _0x368477['v']!==undefined&&isFinite(_0x368477['v']);})['slice'](0x5ce+-0x1c68*0x1+0x169a,0xa0f+-0x238e+0x198b),_0x5b17da;}else return 0x1*0xe71+-0xe*0x278+0x33*0x65;}function _0x234c04(){var _0x87d26b=_0x586988,_0x2e96ac={'aeeMF':function(_0x123bb5,_0x388669){return _0x123bb5-_0x388669;},'iomNR':function(_0x179311,_0x13ed61){return _0x179311===_0x13ed61;},'QEsZs':_0x87d26b(0x952)+'ion','IEZvh':function(_0x16a0e2){var _0x4cc8fa=_0x87d26b;return _0x11b6a3[_0x4cc8fa(0x5e8)](_0x16a0e2);}};if(_0x11b6a3[_0x87d26b(0xdda)]('csDLf',_0x87d26b(0xbdb)))return _0xdaf951[_0x87d26b(0x671)];else{var _0x55860f={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x1fb87a=_0x4c2416['FPSco'+_0x87d26b(0x6a2)+'ler']&&_0x4c2416[_0x87d26b(0xb78)+_0x87d26b(0x6a2)+_0x87d26b(0x24a)]['ptr']||0x2*0x129d+0xdb4+-0x32ee,_0x446aae=_0xc9fffc['Photo'+_0x87d26b(0x600)+_0x87d26b(0x3ec)+'nc']||{},_0x52252d=Object[_0x87d26b(0xc9b)](_0x446aae);for(var _0x54d9f5=-0x19c4+0x477*0x1+0x154d;_0x54d9f5<_0x52252d['lengt'+'h']&&_0x54d9f5<0x155d+0x133d*-0x1+-0x14*0x1a;_0x54d9f5++){var _0xc4cf22=_0x446aae[_0x52252d[_0x54d9f5]],_0x56a53a=_0xe1a371(_0x87d26b(0x8db)+'nNetw'+_0x87d26b(0x3ec)+'nc',_0xc4cf22[_0x87d26b(0x461)]);_0x56a53a['hits']=_0xc4cf22['hits'],_0x56a53a[_0x87d26b(0xab7)+'SeenM'+'s']=_0x11b6a3['fQzJL'](_0xc4cf22[_0x87d26b(0xab7)+'Seen'],_0x1c7ce6),_0x56a53a[_0x87d26b(0xc4d)+'al']=!!_0x1fb87a&&_0x56a53a[_0x87d26b(0x8aa)][_0x87d26b(0x9af)]==='0x'+_0x1fb87a[_0x87d26b(0xd0f)+'ing'](0x1*0xabb+-0x2ed+-0x7be);if(_0x56a53a['refs']['healt'+'h']){if('VHTrw'==='VHTrw'){var _0x13c246=parseInt(_0x56a53a['refs'][_0x87d26b(0xa66)+'h'],-0x119*-0xb+0x313*0x2+-0x1*0x1229);_0x56a53a[_0x87d26b(0xa66)+'h']=_0x11b6a3[_0x87d26b(0x941)](_0xf6a2fe,_0x13c246,_0x87d26b(0xcbe)+'hScri'+'pt',_0x11b6a3['BKSTO']);}else{if(_0x11b6a3['sjcWC'](!_0x2c0157,!_0x4c9aa5))return null;var _0x4a934b=new _0x47d8d8(_0x56429f)['getCl'+_0x87d26b(0x49f)+'me']();return _0x11b6a3[_0x87d26b(0x5b5)](_0x4a934b,_0x109604)?null:_0x4a934b;}}_0x55860f['playe'+'rs'][_0x87d26b(0x68c)](_0x56a53a);}_0x55860f['playe'+_0x87d26b(0x349)+'t']=_0x52252d[_0x87d26b(0x964)+'h'];var _0x4febce=_0xc9fffc[_0x87d26b(0x8de)+_0x87d26b(0x3e9)+_0x87d26b(0x24a)]||{},_0x72259d=Object['keys'](_0x4febce);for(var _0x1f32ac=0x45e*0x3+-0x7b*0x9+-0x8c7;_0x1f32ac<_0x72259d[_0x87d26b(0x964)+'h']&&_0x1f32ac<-0x1c65*-0x1+0x2*0xdca+-0x37e1;_0x1f32ac++){if(_0x11b6a3['nvBKG'](_0x87d26b(0xb91),'RiWLu')){var _0x265efc=('1|3|2'+'|0|4')['split']('|'),_0xac274f=0x1ffb*-0x1+0x1f*0x85+0x7f*0x20;while(!![]){switch(_0x265efc[_0xac274f++]){case'0':if(_0x4e4e71[_0x87d26b(0x8aa)]['healt'+'h'])_0x4e4e71[_0x87d26b(0xa66)+'h']=_0xf6a2fe(_0x11b6a3[_0x87d26b(0xdd7)](parseInt,_0x4e4e71['refs']['healt'+'h'],0x131b+0x1c95+-0x2fa0),_0x87d26b(0xcbe)+'hScri'+'pt',_0x87d26b(0x247));continue;case'1':var _0x4e4e71=_0xe1a371(_0x11b6a3['VxMyo'],_0x4febce[_0x72259d[_0x1f32ac]][_0x87d26b(0x461)]);continue;case'2':_0x4e4e71[_0x87d26b(0xab7)+_0x87d26b(0x18b)+'s']=_0x11b6a3[_0x87d26b(0x420)](_0x4febce[_0x72259d[_0x1f32ac]][_0x87d26b(0xab7)+'Seen'],_0x1c7ce6);continue;case'3':_0x4e4e71[_0x87d26b(0x421)]=_0x4febce[_0x72259d[_0x1f32ac]][_0x87d26b(0x421)];continue;case'4':_0x55860f['bots'][_0x87d26b(0x68c)](_0x4e4e71);continue;}break;}}else{_0x5f4913[_0x5b3a45]={'ptr':_0x526b2d,'firstSeen':_0x29957b[_0x87d26b(0x854)](),'hits':0x0,'replaced':!!_0x3a498d};try{var _0x286655=_0xe399f5[_0x87d26b(0xbb0)+'r'](function(_0x31903e){var _0x31adde=_0x87d26b;return _0x31903e[_0x31adde(0x55a)]===_0x54e98d;})[-0x26b*0x1+0x1fe0+-0x1d75*0x1];_0x4d98ca={'type':_0x2f0cc1,'atMs':_0x2e96ac[_0x87d26b(0x19b)](_0x34e855['now'](),_0x391220),'originalFunc':!!(_0x286655&&_0x286655[_0x87d26b(0xaf5)]&&_0x2e96ac['iomNR'](typeof _0x286655['hook']['origi'+_0x87d26b(0xbe0)+'nc'],_0x2e96ac[_0x87d26b(0x496)])),'resolveGameAtFire':!!_0x2e96ac['IEZvh'](_0x280724),'gameSourceAtFire':_0x31ea9d[_0x87d26b(0x6f8)+'e']};}catch(_0x3a9fb5){}}}_0x55860f[_0x87d26b(0x370)+_0x87d26b(0x375)]=_0x72259d[_0x87d26b(0x964)+'h'];var _0x430eca=_0xc9fffc['FPSco'+_0x87d26b(0x6a2)+_0x87d26b(0x24a)]||{},_0x41c399=Object[_0x87d26b(0xc9b)](_0x430eca);for(var _0x2ade8a=-0x1e81+-0xbad+0x2a2e;_0x11b6a3['akFnl'](_0x2ade8a,_0x41c399[_0x87d26b(0x964)+'h'])&&_0x2ade8a<-0x12fd+-0x2638+0x394d;_0x2ade8a++){var _0x310c24=_0x11b6a3['PYiMb'](_0xe1a371,_0x87d26b(0xb78)+_0x87d26b(0x6a2)+_0x87d26b(0x24a),_0x430eca[_0x41c399[_0x2ade8a]]['ptr']);_0x310c24['hits']=_0x430eca[_0x41c399[_0x2ade8a]][_0x87d26b(0x421)],_0x310c24['isLoc'+'al']=_0x430eca[_0x41c399[_0x2ade8a]][_0x87d26b(0x461)]===_0x1fb87a,_0x55860f['contr'+_0x87d26b(0xbca)+'s'][_0x87d26b(0x68c)](_0x310c24);}_0x55860f[_0x87d26b(0x4c9)+'oller'+_0x87d26b(0xb16)]=_0x41c399[_0x87d26b(0x964)+'h'];var _0x2f8e67=_0x55860f[_0x87d26b(0xd46)+'rs'][_0x87d26b(0x506)+'t'](_0x55860f[_0x87d26b(0xb53)]);for(var _0x111512=0x63e+0x11f3+0x1*-0x1831;_0x111512<_0x2f8e67[_0x87d26b(0x964)+'h'];_0x111512++){if(_0x2f8e67[_0x111512]['isLoc'+'al'])continue;_0x55860f[_0x87d26b(0x7e3)+'es'][_0x87d26b(0x68c)](_0x2f8e67[_0x111512]);}_0x55860f[_0x87d26b(0x4e2)+_0x87d26b(0xb16)]=_0x55860f[_0x87d26b(0x7e3)+'es'][_0x87d26b(0x964)+'h'];var _0x186025={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x1cfaa5={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x130253 in _0x4c2416){var _0x2d4ccc=_0x4c2416[_0x130253];if(!_0x2d4ccc||!_0x2d4ccc[_0x87d26b(0x461)])continue;if(!_0x11b6a3[_0x87d26b(0x891)](_0x130253,_0x186025))continue;_0x55860f[_0x87d26b(0x2fd)+_0x87d26b(0xcf4)][_0x130253]='0x'+_0x2d4ccc[_0x87d26b(0x461)]['toStr'+_0x87d26b(0x3cc)](-0x9*-0x145+0x1e5a+-0x3b*0xb5);var _0x5ca05b=_0x11b6a3[_0x87d26b(0x6e4)](_0x5f506b,_0x2d4ccc[_0x87d26b(0x461)]+_0x186025[_0x130253],'u32'),_0x43203e=_0x5f506b(_0x2d4ccc[_0x87d26b(0x461)]+_0x1cfaa5[_0x130253],_0x11b6a3['wZapw']);_0x5ca05b&&_0x55860f[_0x87d26b(0x89e)+'a']===null&&(_0x55860f[_0x87d26b(0x89e)+'a']=_0x11b6a3[_0x87d26b(0xaf7)]('0x',_0x11b6a3[_0x87d26b(0x5c0)](_0x5ca05b,0x168+-0x1f32+0x1dca)[_0x87d26b(0xd0f)+'ing'](-0x1*0x2c5+-0x11*0x1d2+0x21c7)),_0x55860f[_0x87d26b(0x89e)+'aFrom']=_0x130253);if(_0x43203e&&_0x11b6a3[_0x87d26b(0xa7f)](_0x55860f['playe'+_0x87d26b(0x8dd)],null))_0x55860f['playe'+'rList']='0x'+_0x11b6a3['hQTos'](_0x43203e,-0x37b+0x11d3+-0xe58)['toStr'+'ing'](-0x1c6b+0xafd+0x1*0x117e);}if(!_0x55860f[_0x87d26b(0xd46)+_0x87d26b(0x349)+'t']&&!_0x55860f[_0x87d26b(0x370)+_0x87d26b(0x375)]&&!_0x55860f['camer'+'a'])_0x55860f[_0x87d26b(0x334)]=_0x11b6a3['LEFDm'](_0x11b6a3[_0x87d26b(0x30e)],_0x87d26b(0x917)+'obby\x20'+_0x87d26b(0x94d)+'\x20like'+'\x20-\x20ru'+'n\x20the'+_0x87d26b(0x81a)+_0x87d26b(0x2cb)+_0x87d26b(0x6b1)+'\x20live'+'\x20roun'+_0x87d26b(0xd6d)+_0x87d26b(0x279)+'\x20menu'+'.');else!_0x55860f[_0x87d26b(0x4e2)+_0x87d26b(0xb16)]&&(_0x55860f[_0x87d26b(0x334)]=_0x11b6a3[_0x87d26b(0x459)]+_0x11b6a3[_0x87d26b(0x5d3)]);try{var _0xc9ad62=window['Unity'+'WebMo'+_0x87d26b(0x984)]&&window[_0x87d26b(0x1c2)+'WebMo'+'dkit']['Runti'+'me'],_0x5179fd=_0xc9ad62&&_0xc9ad62[_0x87d26b(0xcd1)+'nalWa'+_0x87d26b(0xa86)+'es']||[],_0x2c727d={};for(var _0x3576c3=0x1331+-0x2a5*-0xc+-0x32ed;_0x3576c3<_0x5179fd['lengt'+'h']&&_0x3576c3<0x25fd+-0x3*-0x4ab+-0x245e*0x1;_0x3576c3++){if(_0x11b6a3['ckweP']('zmUvQ',_0x87d26b(0xa62)))try{var _0x5a1174=_0xb2742d();if(_0x5a1174['basis'])return!![];var _0x50a458=_0x148dde();return!!(_0x50a458&&_0x1b2d63['ident'+_0x87d26b(0x8ff)]);}catch(_0x547a34){return![];}else{var _0x371aa0=_0x5179fd[_0x3576c3]['param'+'s'][_0x87d26b(0xd89)](',')+_0x11b6a3[_0x87d26b(0x387)]+(_0x5179fd[_0x3576c3]['retur'+'nType']||_0x11b6a3['iScqD']);_0x2c727d[_0x371aa0]=_0x11b6a3[_0x87d26b(0x3ea)](_0x2c727d[_0x371aa0]||-0xc80+-0x129a+-0xa5e*-0x3,-0x1160+0x61e+0xb43);}}_0x55860f['wasmT'+'ypes']=_0x2c727d;}catch(_0xc455f6){}return _0x55860f;}}function _0xf6a2fe(_0x4cd83d,_0x342737,_0x342cf7){var _0x1c2c04=_0x586988;try{var _0x4b457c=_0x5b1b65[_0x342737]||[];for(var _0x1c775d=-0x24e7+-0x7*0x285+0x368a;_0x1c775d<_0x4b457c['lengt'+'h'];_0x1c775d++){if(_0x11b6a3['cKYyA'](_0x11b6a3['DdvlO'],_0x11b6a3[_0x1c2c04(0x9c6)])){if(_0x11b6a3[_0x1c2c04(0x635)](_0x4b457c[_0x1c775d][0x6*0x278+0x7f*-0x41+0x1170],_0x342cf7))continue;var _0x238138=_0x4b457c[_0x1c775d][-0x1f14+0x9ff+-0x7*-0x303];if(_0x342cf7[_0x1c2c04(0x51a)+'Of'](_0x1c2c04(0x70d))===-0xdbb+0x1ed6+-0x111b){var _0x2bd579=_0x11b6a3['HwvFg'](_0x2c9844,_0x4cd83d,_0x238138,_0x342cf7);if(!_0x2bd579)return null;_0x2bd579['o']=_0x238138,_0x2bd579['k']=_0x342cf7;var _0x520d5f=_0x11b6a3[_0x1c2c04(0x1ef)](_0x16242e,[_0x2bd579]);if(!_0x520d5f['rows']['lengt'+'h'])return null;return _0x520d5f[_0x1c2c04(0x1a0)][0x239+0x1210+0x1449*-0x1];}var _0x4cc5a2=_0x11b6a3[_0x1c2c04(0xbc7)](_0x5f506b,_0x11b6a3['skRPz'](_0x4cd83d,_0x238138),_0x342cf7);if(_0x4cc5a2===undefined)return null;return{'o':'0x'+_0x238138[_0x1c2c04(0xd0f)+'ing'](-0xaad+0x1*-0x2fe+0xdbb),'v':_0x4cc5a2};}else _0x527a30[_0x1c2c04(0x4fc)+_0x1c2c04(0xa15)+'t']=_0x58b571(_0x31446c[_0x1c2c04(0x8e6)][_0x1c2c04(0x7f0)+'r'])['toFix'+'ed'](-0x6*-0x313+-0x134d+0x14*0xb)+'x';}}catch(_0x329948){}return null;}function _0x26572b(){var _0x1a1ac0=_0x586988,_0x11a993={'sYsMH':function(_0x17f5a1,_0x3491d3){return _0x17f5a1<_0x3491d3;},'EMMjT':function(_0x1fa1f0,_0x1249ce){return _0x1fa1f0+_0x1249ce;},'VobRa':function(_0x39db6d,_0x40988e){return _0x39db6d(_0x40988e);}},_0x209beb={};_0x265ccb['ok']=0x1c6b+-0xb1+-0x1bba,_0x265ccb['faile'+'d']=0xe88*-0x2+-0x40b+0x211b,_0x265ccb['lastE'+_0x1a1ac0(0x376)]=null;var _0x41c692=Object[_0x1a1ac0(0xc9b)](_0x5b1b65);for(var _0x3d0f7f=0x40a*-0x6+0x6b*-0xd+0x7*0x43d;_0x11b6a3[_0x1a1ac0(0x9e7)](_0x3d0f7f,_0x41c692['lengt'+'h']);_0x3d0f7f++){if(_0x11b6a3['xVPQM'](_0x11b6a3[_0x1a1ac0(0x206)],'DuYdi')){var _0x15383b=_0x41c692[_0x3d0f7f],_0x41cf00=_0x4c2416[_0x15383b];if(!_0x41cf00||!_0x41cf00['ptr'])continue;var _0x5c2618=_0x5b1b65[_0x15383b]||[],_0x55dd52=[];for(var _0x27be70=0x1*0x805+-0x4*0x983+0x1e07;_0x27be70<_0x5c2618[_0x1a1ac0(0x964)+'h'];_0x27be70++){if(_0x11b6a3['mgwxJ'](_0x1a1ac0(0xadb),'cYVQO')){var _0x3f0ff0=_0x5c2618[_0x27be70][-0x1550+0x1*0x253d+0x1*-0xfed],_0x2776ff=_0x5c2618[_0x27be70][-0x1fec+0x12e*-0x1+0x211b];if(_0x11b6a3['KTKkA'](_0x2776ff[_0x1a1ac0(0x51a)+'Of']('obf'),0xe7a+0x35e+-0x11d8)){var _0x5c76ca=_0x11b6a3[_0x1a1ac0(0x941)](_0x2c9844,_0x41cf00[_0x1a1ac0(0x461)],_0x3f0ff0,_0x2776ff);if(!_0x5c76ca)continue;_0x5c76ca['o']=_0x3f0ff0,_0x5c76ca['k']=_0x2776ff,_0x55dd52[_0x1a1ac0(0x68c)](_0x5c76ca);}else{var _0x1379ba=_0x5f506b(_0x11b6a3[_0x1a1ac0(0xc01)](_0x41cf00[_0x1a1ac0(0x461)],_0x3f0ff0),_0x2776ff);if(_0x11b6a3[_0x1a1ac0(0xb5e)](_0x1379ba,undefined))continue;var _0x33d00e={'o':_0x3f0ff0,'k':_0x2776ff,'v':_0x1379ba};if(_0x2776ff==='v2'||_0x2776ff==='v3'||_0x2776ff==='v4'){if(_0x11b6a3[_0x1a1ac0(0xdd6)](_0x11b6a3[_0x1a1ac0(0x250)],_0x1a1ac0(0x23a))){var _0x55f50f=_0x11b6a3[_0x1a1ac0(0xd19)](_0x2776ff,'v2')?0x8fc+0xf63+0x4d*-0x51:_0x11b6a3[_0x1a1ac0(0x3d3)](_0x2776ff,'v3')?-0x398*0x2+-0x26e9+-0x2e1c*-0x1:-0xd11+-0x1542+0x2257,_0xb0f5eb=_0x25d0eb(_0x41cf00[_0x1a1ac0(0x461)],_0x3f0ff0,_0x55f50f);_0xb0f5eb&&(_0x33d00e[_0x1a1ac0(0x718)]=_0xb0f5eb,_0x33d00e['v']=_0xb0f5eb[0x1b97*0x1+-0x1aad+0x3*-0x4e]);}else _0x1cb533[_0x1a1ac0(0x8d2)+'em'](_0x3369ff)!==null&&(_0x368a0d[_0x1a1ac0(0x814)+'eItem'](_0x4fd829),_0x4bad60=!![]);}_0x55dd52[_0x1a1ac0(0x68c)](_0x33d00e);}}else{if(_0x11a993[_0x1a1ac0(0x883)](_0x258820['error'+'s'][_0x1a1ac0(0x964)+'h'],-0xb00+-0x1de3+0xda3*0x3))_0x3c39df[_0x1a1ac0(0xccf)+'s'][_0x1a1ac0(0x68c)](_0x11a993[_0x1a1ac0(0x678)](_0x1a1ac0(0xdaa)+_0x1a1ac0(0xb07),_0x11a993[_0x1a1ac0(0x2e0)](_0x43f67e,_0xf4dbfa&&_0x3fd7e3['messa'+'ge']||_0x50c01a)[_0x1a1ac0(0xb19)](-0x1*0x1d69+0xb*-0x113+0x293a,-0x22ed+0x1354+-0x1*-0xff3)));return-0x1ca8+-0x15b*0xa+0x2a36;}}if(_0x55dd52[_0x1a1ac0(0x964)+'h']){var _0x949572=_0x11b6a3[_0x1a1ac0(0x199)](_0x16242e,_0x55dd52);_0x209beb[_0x15383b]=_0x949572['rows'],_0x367066[_0x15383b]={'key':_0x949572['key'],'sane':_0x949572[_0x1a1ac0(0x558)],'checked':_0x949572['check'+'ed'],'keyConsistent':_0x949572[_0x1a1ac0(0x385)+_0x1a1ac0(0x815)+_0x1a1ac0(0x1e5)],'keySource':_0x949572[_0x1a1ac0(0xb40)+'urce']};}}else _0x165cfe[_0x1a1ac0(0xcc1)]();}return _0x209beb;}function _0x16242e(_0x27f3fd){var _0x270c30=_0x586988,_0x28c811=0xa3*0x18+0x2d*0x97+-0x29d3,_0x5cd5fd=0x191e+-0x1193+-0x78b,_0x1e0da0=null;for(var _0x521501=-0xa31*-0x1+-0x8bd*0x2+0x749;_0x521501<_0x27f3fd[_0x270c30(0x964)+'h'];_0x521501++){var _0x4607fc=_0x27f3fd[_0x521501];if(_0x11b6a3['TVnCX'](_0x4607fc['k'][_0x270c30(0x51a)+'Of'](_0x270c30(0x70d)),-0x3*0x7b2+0x14c6*0x1+0x250))continue;_0x4607fc['v']=_0x11b6a3[_0x270c30(0x9fb)](_0x396bdf,_0x4607fc['k'],_0x4607fc[_0x270c30(0x714)+'n'],_0x4607fc[_0x270c30(0x8f3)+_0x270c30(0x22b)+'t0']),_0x4607fc['keyUs'+'ed']=_0x4607fc['keyAt'+_0x270c30(0x22b)+'t0'],_0x4607fc['raw']=_0x11b6a3[_0x270c30(0x35c)](_0x11b6a3['kzhBY'](_0x11b6a3['LwbBC'](_0x11b6a3[_0x270c30(0x661)](_0x11b6a3['ypPOM'](_0x270c30(0xdd9)+_0x4607fc[_0x270c30(0x714)+'n'],_0x11b6a3[_0x270c30(0x31b)])+_0x4607fc['fake']+(_0x4607fc[_0x270c30(0xd9a)]?_0x270c30(0xe03)+'VE':''),_0x11b6a3['hWZUM']),_0x4607fc['keyAt'+_0x270c30(0x22b)+'t0']),_0x270c30(0xcba)),_0x4607fc[_0x270c30(0x529)]);if(_0x1e0da0===null)_0x1e0da0=_0x4607fc['keyAt'+_0x270c30(0x22b)+'t0'];_0x5cd5fd++;if(_0x459e62(_0x4607fc))_0x28c811++,_0x4607fc['sane']=!![];else{if(_0x11b6a3[_0x270c30(0xa85)]!==_0x270c30(0xa51))_0x4607fc[_0x270c30(0x558)]=![];else for(var _0x46589d=-0x1cd1+-0x1e63+0x3b34;_0x46589d<_0x1c56f8[_0x270c30(0x964)+'h'];_0x46589d++){var _0x181f34=_0xc9e4b8(_0x16bf2e+_0x3c860e(_0x13afae[_0x46589d][0xa27+0x6cd*-0x5+0x47*0x56],-0x1235+-0x6b*-0x3b+-0x199*0x4),'u32');if(_0x181f34)_0xcf8633[_0x270c30(0x8aa)][_0x5b351a[_0x46589d][-0x3*-0x42c+0x25a5+-0x3228]]=_0x11b6a3[_0x270c30(0x5a4)]('0x',(_0x181f34>>>-0x177d+0x3b*-0x37+0x242a)['toStr'+'ing'](0xd09*-0x1+-0x19ff+0x2718));}}delete _0x4607fc['alt'];}return{'rows':_0x27f3fd,'key':_0x1e0da0,'sane':_0x28c811,'checked':_0x5cd5fd,'keyConsistent':_0x4dc4d0(_0x27f3fd),'keySource':_0x11b6a3[_0x270c30(0xac5)]};}function _0x4dc4d0(_0x1b85a9){var _0x113aac=_0x586988;if(_0x11b6a3['gjDMh']!==_0x11b6a3['gjDMh']){var _0x36581e=_0x11b6a3[_0x113aac(0x1ff)][_0x113aac(0x783)]('|'),_0x3441d9=0x4*0x468+-0x8b*0x7+0xdd3*-0x1;while(!![]){switch(_0x36581e[_0x3441d9++]){case'0':return _0x280b73[_0x113aac(0x964)+'h']>-0x53*-0x5b+-0x1de7+0x66;case'1':for(var _0x4f9131=-0x1*0x200f+-0x210c+0x411b;_0x4f9131<_0x4fde48[_0x113aac(0x964)+'h'];_0x4f9131++){var _0x2c1aee=_0x4ada1f[_0x4f9131];try{var _0x4d0b24=_0x295f6b[_0x113aac(0x724)+'refix']({'typeName':_0x2c1aee[_0x113aac(0x55a)],'methodName':_0x113aac(0x198)+'e','params':['i32',_0x113aac(0x357)],'returnType':_0x15ab48},_0x11b6a3['jtCfp'](_0x28339b,_0x2c1aee['type'],_0x2c1aee[_0x113aac(0x2e6)],_0x2c1aee[_0x113aac(0xbc3)]));_0x38b4f9['push']({'type':_0x2c1aee['type'],'hook':_0x4d0b24,'keep':_0x2c1aee[_0x113aac(0x2e6)]});}catch(_0x1870cf){_0x53e72c[_0x113aac(0x68c)](_0x11b6a3['SLpsN'](_0x2c1aee[_0x113aac(0x55a)],':\x20')+_0x4ab79f(_0x1870cf&&_0x1870cf['messa'+'ge']||_0x1870cf)[_0x113aac(0xb19)](-0x98f*0x1+0x1*0x21d0+-0x1841,-0xe8*0x1c+-0xda6+0x23*0x122));}}continue;case'2':if(!_0x29c0ea['plugi'+'ns']||!_0x29c0ea[_0x113aac(0x5bd)+'ns'][_0x113aac(0x964)+'h'])return![];continue;case'3':var _0x29c0ea=_0x14aa12[_0x113aac(0x1c2)+'WebMo'+'dkit']['Runti'+'me'];continue;case'4':if(!_0x560ba3||typeof _0x107b1c['hookP'+_0x113aac(0x79c)]!==_0x113aac(0x952)+_0x113aac(0x8b4))return![];continue;case'5':_0x321a29=_0x61af30[_0x113aac(0x1c2)+'WebMo'+'dkit']['Value'+_0x113aac(0xd6e)+'er'];continue;case'6':if(_0x270a75[_0x113aac(0x964)+'h'])return!![];continue;case'7':_0x4e9ed9=_0x464046||_0x29c0ea['plugi'+'ns'][_0x11b6a3[_0x113aac(0x588)](_0x29c0ea[_0x113aac(0x5bd)+'ns']['lengt'+'h'],0x1f10+0x6*0x618+-0x439f)];continue;case'8':if(!_0x136f14[_0x113aac(0x1c2)+'WebMo'+_0x113aac(0x984)]||!_0x48520e[_0x113aac(0x1c2)+_0x113aac(0x881)+_0x113aac(0x984)][_0x113aac(0x213)+'me'])return![];continue;}break;}}else{var _0x178cfd={};for(var _0x89df97=-0x33*0xc+0x61*0x2f+-0x1*0xf6b;_0x89df97<_0x1b85a9[_0x113aac(0x964)+'h'];_0x89df97++){var _0xe7dff8=_0x1b85a9[_0x89df97];if(_0xe7dff8['k'][_0x113aac(0x51a)+'Of'](_0x113aac(0x70d))!==0x581*-0x1+0xd8b*0x1+0x93*-0xe)continue;if(_0x178cfd[_0xe7dff8['k']]===undefined)_0x178cfd[_0xe7dff8['k']]=_0xe7dff8[_0x113aac(0x7dc)+'ed'];else{if(_0x178cfd[_0xe7dff8['k']]!==_0xe7dff8[_0x113aac(0x7dc)+'ed'])return![];}}return!![];}}function _0x459e62(_0x1fd13b){var _0x13c49a=_0x586988,_0x1f5ef1=_0x1fd13b['v'];if(typeof _0x1f5ef1!==_0x13c49a(0x846)+'r'||!isFinite(_0x1f5ef1))return![];if(_0x1fd13b['k']===_0x13c49a(0x5d0))return _0x1f5ef1===0x67a+-0x2040+0xce3*0x2||_0x1f5ef1===0x8a8+-0x1fd*-0x1+-0xaa4;var _0x322b99=_0x1fd13b['fake'];if(_0x11b6a3['gHNJG'](typeof _0x322b99,_0x11b6a3[_0x13c49a(0x3ef)])||!isFinite(_0x322b99))return!![];if(_0x11b6a3['rDxRr'](_0x1fd13b['act'],-0x1949+-0x1be5+0x5*0xaa3))return _0x11b6a3['IYpIU'](_0x11b6a3['CEAFm'],_0x13c49a(0x943))?{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x520a08,'ambiguous':![],'reach':0x0,'held':![]}:_0x11b6a3['enLxp'](Math[_0x13c49a(0x9ad)](_0x11b6a3[_0x13c49a(0x72d)](_0x1f5ef1,_0x322b99)),Math['max'](-0xcee+-0x1cef+0x29de,Math[_0x13c49a(0x9ad)](_0x322b99)*(-0x23c2+0x5fd+-0x1*-0x1dc5+0.6)));return Math['abs'](_0x1f5ef1)<0x15df*-0x4f0d9+-0x173*0x1bc4d+0xaa2e479e;}function _0x57d537(){var _0x465d29=_0x586988;if(_0x11b6a3['glAzy'](_0x11b6a3['UHaZs'],_0x11b6a3[_0x465d29(0x171)]))_0x4541b3['warni'+_0x465d29(0xc12)][_0x465d29(0x68c)](_0x11b6a3['eanAb'](_0x11b6a3[_0x465d29(0x9d0)](_0x11b6a3[_0x465d29(0x841)](_0x11b6a3[_0x465d29(0x5ca)](_0x11b6a3[_0x465d29(0x9d0)](_0x465d29(0xbe6),_0x2872d6['hooks'+'Total'])+_0x11b6a3['vTDNI'],_0x465d29(0x7c1)+'once\x20'+'durin'+_0x465d29(0x4bb)+'Assem'+_0x465d29(0x1bb)+'nstan'+_0x465d29(0x343)+_0x465d29(0x196)+'snaps'+_0x465d29(0x315)+'plugi'+_0x465d29(0x43e)+'ks.le'+_0x465d29(0xbd8)+'\x20')+_0x11b6a3['dRhIO'],_0x465d29(0x165)+_0x465d29(0x879)+'\x20'),_0x52f342['hooks'+'Regis'+_0x465d29(0x879)+_0x465d29(0x7fa)]),'\x20hook'+_0x465d29(0xb1c)+'uring'+_0x465d29(0xa43)+'ng\x20at'+'\x20docu'+_0x465d29(0x559)+'start'+'.'));else{var _0x3996d1={};try{var _0x17335e=window[_0x465d29(0x1c2)+'WebMo'+'dkit']&&window['Unity'+_0x465d29(0x881)+'dkit']['Runti'+'me'];_0x3996d1[_0x465d29(0x4bc)]=_0x17335e&&_0x17335e[_0x465d29(0xb6c)+_0x465d29(0x2ff)+'g']||null,_0x3996d1[_0x465d29(0x9f5)+_0x465d29(0x251)]=!!(_0x17335e&&_0x2de9bd&&_0x17335e['__sak'+_0x465d29(0x2ff)+'g']===_0x2de9bd),_0x3996d1[_0x465d29(0x926)+_0x465d29(0x8e5)+'e']=_0x17335e&&_0x17335e[_0x465d29(0xd81)]?typeof _0x17335e[_0x465d29(0xd81)]:_0x11b6a3['FJZZi'],_0x3996d1['plugi'+_0x465d29(0xd93)+_0x465d29(0x2b8)+'Expor'+_0x465d29(0xa23)]=!!(_0x35f760&&_0x35f760['_runt'+_0x465d29(0x57a)]&&_0x35f760['_runt'+'ime']===_0x17335e),_0x3996d1[_0x465d29(0x5bd)+'nRunt'+_0x465d29(0x88b)+'me']=_0x35f760&&_0x35f760[_0x465d29(0x4cc)+_0x465d29(0x57a)]&&_0x35f760[_0x465d29(0x4cc)+_0x465d29(0x57a)][_0x465d29(0xd81)]?typeof _0x35f760['_runt'+_0x465d29(0x57a)]['_game']:_0x11b6a3['FJZZi'];}catch(_0x177d45){if(_0x11b6a3[_0x465d29(0x3a0)]===_0x11b6a3[_0x465d29(0x3a0)])_0x3996d1['error']=_0x11b6a3['kykZf'](String,_0x177d45&&_0x177d45['messa'+'ge']||_0x177d45);else{var _0x148a30=_0x35c24c[_0x6f3ea9];try{var _0x4d263d=_0x289c79[_0x465d29(0x724)+_0x465d29(0x79c)]({'typeName':_0x148a30[_0x465d29(0x55a)],'methodName':_0x465d29(0x198)+'e','params':[_0x11b6a3[_0x465d29(0xd57)],_0x11b6a3['ApYDr']],'returnType':_0x1efd05},_0x11b6a3['lNvgL'](_0x42852b,_0x148a30[_0x465d29(0x55a)],_0x148a30[_0x465d29(0x2e6)],_0x148a30['many']));_0x40bbc2['push']({'type':_0x148a30[_0x465d29(0x55a)],'hook':_0x4d263d,'keep':_0x148a30['keep']});}catch(_0x4b9263){_0x64ac81[_0x465d29(0x68c)](_0x11b6a3[_0x465d29(0x9ba)](_0x148a30['type'],':\x20')+_0x571be1(_0x4b9263&&_0x4b9263['messa'+'ge']||_0x4b9263)['slice'](0x5*-0x266+0x19dd*-0x1+0x25db,0x1*-0x10fd+0x14ab+-0x30e));}}}return _0x3996d1;}}function _0x5b1fb6(){var _0x220bf9=_0x586988,_0x1c8796=[_0x220bf9(0xb15)+'Insta'+_0x220bf9(0xdef),_0x11b6a3['VgRkz'],_0x11b6a3[_0x220bf9(0x968)],_0x11b6a3[_0x220bf9(0x7e5)]],_0x458bc1={};for(var _0xea3ead=-0x1*0x209c+-0x358+-0xc*-0x2ff;_0xea3ead<_0x1c8796['lengt'+'h'];_0xea3ead++){var _0xeb1d4e=_0x1c8796[_0xea3ead],_0x5e50a4=typeof window[_0xeb1d4e];_0x458bc1[_0xeb1d4e]=_0x5e50a4==='undef'+'ined'?'undef'+_0x220bf9(0xbf4):_0x5e50a4;}var _0x25c871=_0x11b6a3['xREaa'](_0x47a295);_0x458bc1['gameS'+_0x220bf9(0x91d)]=_0x265ccb[_0x220bf9(0x6f8)+'e'];try{_0x11b6a3[_0x220bf9(0x577)](_0x11b6a3[_0x220bf9(0x6d0)],_0x220bf9(0x986))?(_0x458bc1['hasMo'+_0x220bf9(0x1fd)]=!!(_0x25c871&&_0x25c871['Modul'+'e']),_0x458bc1[_0x220bf9(0xc9e)+'8']=!!(_0x25c871&&_0x25c871[_0x220bf9(0x31e)+'e']&&_0x25c871['Modul'+'e'][_0x220bf9(0xcf9)+'8']),_0x458bc1['heapB'+'ytes']=_0x458bc1['heapU'+'8']?_0x25c871['Modul'+'e'][_0x220bf9(0xcf9)+'8']['lengt'+'h']:0x1*0x6cd+-0x16fd+0x1030):_0x3f0d39['setIt'+'em'](_0x345970,_0x369cd4(_0x52080a[_0x220bf9(0x60b)]));}catch(_0xf5473c){_0x458bc1['hasMo'+'dule']=![],_0x458bc1['heapU'+'8']=![],_0x458bc1[_0x220bf9(0xa39)+_0x220bf9(0x3bc)]=0xfc1*0x2+0x5d0+-0x12a9*0x2;}return _0x458bc1['value'+'Wrapp'+'er']=typeof _0x4788c8,_0x458bc1;}function _0x2f89c5(){var _0x409bbc=_0x586988,_0x5c69c7=('5|3|6'+'|0|1|'+_0x409bbc(0xaff))[_0x409bbc(0x783)]('|'),_0x2c0fe1=-0x30f+0x9d*0x35+-0x1d72;while(!![]){switch(_0x5c69c7[_0x2c0fe1++]){case'0':_0x5b9cde['Mouse'+_0x409bbc(0x609)+_0x409bbc(0x461)]=_0x1deae4['mouse'+_0x409bbc(0xe25)];continue;case'1':for(var _0x330736 in _0x1deae4['float'+'s'])_0x5b9cde[_0x11b6a3['RISSA'](_0x11b6a3[_0x409bbc(0x39d)],_0x330736)]=_0x1deae4['float'+'s'][_0x330736];continue;case'2':if(_0x1deae4['camer'+'a'])_0x5b9cde[_0x409bbc(0x78d)+'Look+'+_0x409bbc(0x89e)+'a']=_0x1deae4[_0x409bbc(0x89e)+'a'];continue;case'3':var _0x1deae4=_0x11b6a3[_0x409bbc(0x786)](_0xf2f264);continue;case'4':return _0x5b9cde;case'5':var _0x5b9cde={};continue;case'6':if(!_0x1deae4)return _0x5b9cde;continue;}break;}}function _0x32bfde(_0x59ade0){var _0x373070=_0x586988,_0x2c52a1={};for(var _0x24d713 in _0x59ade0){var _0x4d1d85=_0x59ade0[_0x24d713];for(var _0x1583af=0x2*-0xe5e+-0x6*-0x55d+-0x15*0x2a;_0x1583af<_0x4d1d85[_0x373070(0x964)+'h'];_0x1583af++){_0x2c52a1[_0x11b6a3[_0x373070(0x667)](_0x11b6a3['ParFV'](_0x24d713,_0x11b6a3['AlcfT']),_0x4d1d85[_0x1583af]['o'][_0x373070(0xd0f)+'ing'](0x4*0x166+0x7*-0x494+0x1a84))]=_0x4d1d85[_0x1583af]['v'];}}return _0x2c52a1;}function _0x10b421(_0x21dfff,_0x440680){var _0x168903=_0x586988;if(_0x11b6a3['TxfxY'](_0x21dfff,_0x168903(0x8e6))){_0x11b6a3[_0x168903(0x9a8)](_0x1cbf32,_0x440680&&_0x11b6a3[_0x168903(0x8f8)](typeof _0x440680['on'],_0x168903(0xce6)+'an')?_0x440680['on']:_0x3b07fd['on'],_0x440680&&typeof _0x440680['facto'+'r']===_0x168903(0x846)+'r'?_0x440680[_0x168903(0x7f0)+'r']:_0x3b07fd['facto'+'r']);return;}if(_0x21dfff!=='snaps'+_0x168903(0x6bf))return;var _0x5a49ab=_0x11b6a3[_0x168903(0x840)](_0x26572b),_0x55cacf=_0x32bfde(_0x5a49ab),_0x4a1ae8=_0x11b6a3['OQbpZ'](_0x2f89c5);for(var _0x2aef2b in _0x4a1ae8)_0x55cacf[_0x2aef2b]=_0x4a1ae8[_0x2aef2b];if(!_0x48fc30){_0x48fc30=_0x55cacf,_0x58aeb3=[],_0x51ef85(_0x11b6a3[_0x168903(0x1b3)],{'report':_0x11b6a3[_0x168903(0x71f)](_0x14e3f2)});return;}_0x58aeb3=[];for(var _0x308e2d in _0x55cacf){if(_0x11b6a3['EiRML'](_0x168903(0x759),_0x168903(0x759))){var _0xe82d62=_0x37e52a[_0x168903(0x8d2)+'em'](_0x33db48);if(!_0xe82d62)return;var _0x3f0124=_0xee741c['parse'](_0xe82d62);if(_0x3f0124&&typeof _0x3f0124['x']==='numbe'+'r'&&typeof _0x3f0124['y']==='numbe'+'r')_0x15bec0['pos']=_0x3f0124;}else{var _0x1f883d=_0x48fc30[_0x308e2d],_0x2be407=_0x55cacf[_0x308e2d];if(_0x1f883d!==_0x2be407)_0x58aeb3[_0x168903(0x68c)](_0x11b6a3[_0x168903(0xd99)](_0x308e2d+':\x20',_0x1f883d)+'\x20->\x20'+_0x2be407);}}_0x48fc30=_0x55cacf,_0x51ef85(_0x168903(0x19d)+'t',{'report':_0x11b6a3[_0x168903(0x6bb)](_0x14e3f2)});}var _0x2e2351=null;function _0x4ad777(){var _0x3c5f3b=_0x586988,_0x352a4c={'zXAuk':function(_0x3ee21b,_0x517122){return _0x11b6a3['pXKrf'](_0x3ee21b,_0x517122);},'dzSWb':_0x3c5f3b(0x952)+'ion','GRkRP':_0x11b6a3[_0x3c5f3b(0x87c)],'WIPef':function(_0x43067c,_0x48eea6){return _0x43067c!==_0x48eea6;},'bpOxg':function(_0x2b59ca,_0xc27a9){return _0x2b59ca(_0xc27a9);},'HiGVJ':'snaps'+'hot','aGnYy':function(_0x325759,_0x34b3c1){return _0x325759*_0x34b3c1;},'ummlv':function(_0x3f8033,_0x3ef8b3){return _0x3f8033===_0x3ef8b3;},'kImRz':_0x11b6a3[_0x3c5f3b(0xc37)],'ACgxW':function(_0xe01838,_0x29b77d,_0x3cc9d3){return _0xe01838(_0x29b77d,_0x3cc9d3);},'FApiN':function(_0x439f53,_0x149d19,_0xcd885d){return _0x439f53(_0x149d19,_0xcd885d);},'fYigE':_0x11b6a3[_0x3c5f3b(0xc14)],'boRmx':'fold'};if('edIlg'==='edIlg'){if(_0x2e2351)return _0x2e2351;try{if(!document['body']||!document['body'][_0x3c5f3b(0x927)+_0x3c5f3b(0x432)+'d'])return null;if(!document[_0x3c5f3b(0x62c)+'ement'+'ById']('sakur'+_0x3c5f3b(0x764)+_0x3c5f3b(0x4b3)+'ss')){var _0xeb7c1c=document['creat'+_0x3c5f3b(0xc89)+_0x3c5f3b(0x1e5)](_0x11b6a3['rNfcT']);_0xeb7c1c['id']=_0x11b6a3['Kvclh'],_0xeb7c1c['textC'+_0x3c5f3b(0xa15)+'t']=_0x11b6a3['NGKli'],(document['head']||document[_0x3c5f3b(0x159)+'entEl'+'ement'])[_0x3c5f3b(0x927)+'dChil'+'d'](_0xeb7c1c);}var _0x501030=document['creat'+_0x3c5f3b(0xc89)+_0x3c5f3b(0x1e5)](_0x11b6a3['ACScM']);_0x501030['id']=_0x11b6a3[_0x3c5f3b(0x53c)],_0x501030[_0x3c5f3b(0x3d2)][_0x3c5f3b(0xba1)+'xt']=_0x11b6a3['VpNDm'](_0x11b6a3['noTrH']+(_0x3c5f3b(0x6f3)+'round'+_0x3c5f3b(0xc17)+_0x3c5f3b(0x616)+_0x3c5f3b(0xd94)+_0x3c5f3b(0x734)+_0x3c5f3b(0x6d7)+_0x3c5f3b(0x39a)+'\x20soli'+_0x3c5f3b(0x1d9)+_0x3c5f3b(0x416)+',143,'+_0x3c5f3b(0x555)+'45);b'+'order'+'-radi'+'us:10'+'px;')+(_0x3c5f3b(0x56e)+_0x3c5f3b(0x174)+_0x3c5f3b(0xb8d)+_0x3c5f3b(0x5f6)+_0x3c5f3b(0x75f)+_0x3c5f3b(0x5bb)+_0x3c5f3b(0xc04)+_0x3c5f3b(0xc4f)+_0x3c5f3b(0x433)+_0x3c5f3b(0xba5)+'as,mo'+_0x3c5f3b(0xa55)+'ce;co'+'lor:#'+_0x3c5f3b(0x562)+'5;'),_0x3c5f3b(0x5e7)+_0x3c5f3b(0x3c0)+_0x3c5f3b(0xaf2)+_0x3c5f3b(0xa7e)+_0x3c5f3b(0xb23)+'2px\x20#'+_0x3c5f3b(0x834)+_0x3c5f3b(0x802)+'elect'+':none'+';-web'+_0x3c5f3b(0x5ef)+_0x3c5f3b(0x802)+'elect'+':none'+';');var _0x467f4a=_0x11b6a3[_0x3c5f3b(0xc20)];_0x501030[_0x3c5f3b(0xdd8)+'HTML']=_0x11b6a3['jRiqt'](_0x11b6a3['LPJPm'](_0x11b6a3['NDbUK'](_0x11b6a3['TmcOj'](_0x11b6a3[_0x3c5f3b(0xd4d)](_0x11b6a3['RISSA'](_0x11b6a3[_0x3c5f3b(0x911)](_0x3c5f3b(0x2b4)+_0x3c5f3b(0x25d)+_0x3c5f3b(0x9a2)+_0x3c5f3b(0xc3b)+_0x3c5f3b(0x905)+'displ'+_0x3c5f3b(0x649)+'ex;ga'+_0x3c5f3b(0x2f6)+_0x3c5f3b(0x811)+_0x3c5f3b(0xce2)+_0x3c5f3b(0x2b0)+'nter;'+_0x3c5f3b(0x1d5)+_0x3c5f3b(0x2dc)+'wrap;'+_0x3c5f3b(0x536)+_0x3c5f3b(0x4e3)+_0x3c5f3b(0xc3c)+_0x3c5f3b(0x254)+('<b\x20st'+'yle=\x22'+_0x3c5f3b(0xd72)+':')+_0x6ccbd2+('\x22>sak'+'ura</'+'b>'),_0x3c5f3b(0xad2)+_0x3c5f3b(0x9e0)+'ta-a='+'\x22sp\x22\x20'+'style'+_0x3c5f3b(0xc0a)+_0x3c5f3b(0x981)+_0x3c5f3b(0x572)+'anspa'+'rent;'+_0x3c5f3b(0x6d7)+_0x3c5f3b(0x39a)+_0x3c5f3b(0xc67)+_0x3c5f3b(0x1d9)+'a(255'+_0x3c5f3b(0x9df)+_0x3c5f3b(0x555)+_0x3c5f3b(0x25a)),_0x11b6a3['HoNUI'])+('<inpu'+'t\x20dat'+_0x3c5f3b(0x383)+_0x3c5f3b(0xe2a)+_0x3c5f3b(0x884)+_0x3c5f3b(0x6f6)+_0x3c5f3b(0xc2c)+_0x3c5f3b(0x26e)+_0x3c5f3b(0x919)+_0x3c5f3b(0x216)+_0x3c5f3b(0x21a)+_0x3c5f3b(0x890)+'alue='+_0x3c5f3b(0x9ef)+_0x3c5f3b(0x770)+'\x22widt'+'h:92p'+'x;acc'+'ent-c'+'olor:'),_0x6ccbd2)+_0x11b6a3['RHMXE']+_0x11b6a3[_0x3c5f3b(0x33a)],_0x11b6a3['sGZQg'])+('color'+':#f7e'+_0x3c5f3b(0x4f7)+_0x3c5f3b(0xb94)+'-radi'+_0x3c5f3b(0x3a7)+'x;pad'+'ding:'+_0x3c5f3b(0xaa5)+_0x3c5f3b(0xaf1)+_0x3c5f3b(0x6e0)+_0x3c5f3b(0x210)+_0x3c5f3b(0xb03)+'nt:in'+'herit'+_0x3c5f3b(0x9de)+'P\x20on<'+_0x3c5f3b(0x953)+_0x3c5f3b(0xb8c))+_0x11b6a3['DRYCA'],_0x3c5f3b(0xd72)+_0x3c5f3b(0x31a)+'ef5;b'+_0x3c5f3b(0xb94)+'-radi'+'us:6p'+_0x3c5f3b(0xa80)+_0x3c5f3b(0x54e)+_0x3c5f3b(0xaa5)+_0x3c5f3b(0xaf1)+_0x3c5f3b(0x6e0)+_0x3c5f3b(0x210)+_0x3c5f3b(0xb03)+'nt:in'+_0x3c5f3b(0x675)+_0x3c5f3b(0x1a4)+_0x3c5f3b(0x885)+_0x3c5f3b(0x4cd)+'>')+('<butt'+_0x3c5f3b(0x9e0)+_0x3c5f3b(0x39e)+_0x3c5f3b(0x689)+_0x3c5f3b(0x372)+_0x3c5f3b(0x9e4)+'argin'+'-left'+_0x3c5f3b(0xcc0)+_0x3c5f3b(0x22d)+'groun'+_0x3c5f3b(0x64d)+_0x3c5f3b(0xe11)+_0x3c5f3b(0x3fa)+_0x3c5f3b(0xb94)+_0x3c5f3b(0x8d6)+'solid'+'\x20rgba'+_0x3c5f3b(0x535)+'143,1'+'77,.4'+_0x3c5f3b(0x540))+(_0x3c5f3b(0xd72)+_0x3c5f3b(0x31a)+'ef5;b'+'order'+'-radi'+_0x3c5f3b(0x3a7)+_0x3c5f3b(0xa80)+_0x3c5f3b(0x54e)+_0x3c5f3b(0x423)+'px;cu'+_0x3c5f3b(0x6e0)+_0x3c5f3b(0x210)+_0x3c5f3b(0xb03)+'nt:in'+_0x3c5f3b(0x675)+';\x22>-<'+'/butt'+_0x3c5f3b(0xb8c)),_0x11b6a3[_0x3c5f3b(0x36d)]),_0x3c5f3b(0x2b4)+_0x3c5f3b(0x25d)+_0x3c5f3b(0x89d)+'\x22\x20sty'+_0x3c5f3b(0x843)+_0x3c5f3b(0xc97)+_0x3c5f3b(0x564)+_0x3c5f3b(0x7e4)+'x-wid'+_0x3c5f3b(0xd5a)+_0x3c5f3b(0x4ff)+'></di'+'v>')+('<div\x20'+_0x3c5f3b(0x25d)+_0x3c5f3b(0x89d)+_0x3c5f3b(0xded)+'yle=\x22'+_0x3c5f3b(0xd72)+_0x3c5f3b(0x7bf)+_0x3c5f3b(0x6c9)+'ax-wi'+_0x3c5f3b(0x8e8)+_0x3c5f3b(0xd66)+_0x3c5f3b(0xc5f)+'iv>'),_0x501030[_0x3c5f3b(0xdd8)+_0x3c5f3b(0x4a3)]=_0x467f4a;var _0x2ee3f3=function(_0x2770df){var _0x30abf3=_0x3c5f3b;return _0x501030['query'+_0x30abf3(0x381)+_0x30abf3(0xc8b)]('[data'+_0x30abf3(0xafb)+_0x2770df+'\x22]');},_0x51b67c=_0x11b6a3[_0x3c5f3b(0x4dc)](_0x2ee3f3,'st'),_0x23aaa2=_0x11b6a3['FXFgR'](_0x2ee3f3,_0x11b6a3[_0x3c5f3b(0xda7)]),_0x32e1c0=_0x11b6a3[_0x3c5f3b(0xa17)](_0x2ee3f3,'sp'),_0x41ebc8=_0x2ee3f3('fx'),_0x65f40=_0x2ee3f3('fv'),_0xfaeb2c=_0x2ee3f3(_0x11b6a3['YzpMR']);if(_0x32e1c0)_0x32e1c0[_0x3c5f3b(0x576)+'ck']=function(){_0x1cbf32(!_0x3b07fd['on'],_0x3b07fd['facto'+'r']);};if(_0x41ebc8)_0x41ebc8['oninp'+'ut']=function(){var _0x12766a=_0x3c5f3b;if(_0x11b6a3['xoTVc']===_0x11b6a3[_0x12766a(0x7be)])_0x11b6a3[_0x12766a(0x8c1)](_0x1cbf32,_0x3b07fd['on'],parseFloat(_0x41ebc8[_0x12766a(0xc6d)])||-0x18be+0xb7*0xb+-0x1*-0x10e2);else{var _0x187740=_0x312c56[_0x12766a(0x4cc)+_0x12766a(0x57a)];if(_0x352a4c[_0x12766a(0x35e)](typeof _0x187740['resol'+'veGam'+'e'],_0x352a4c[_0x12766a(0x4f6)])){var _0x14f988=_0x187740['resol'+_0x12766a(0x894)+'e']();if(_0x14f988)return _0x412975[_0x12766a(0x6f8)+'e']=_0x352a4c['GRkRP'],_0x14f988;}if(_0x187740['_game'])return _0x1a6166[_0x12766a(0x6f8)+'e']=_0x12766a(0x5bd)+'n._ru'+'ntime'+_0x12766a(0xd35)+'e',_0x187740['_game'];}};if(_0x2ee3f3('snap'))_0x11b6a3[_0x3c5f3b(0xb42)](_0x2ee3f3,_0x3c5f3b(0x299))[_0x3c5f3b(0x576)+'ck']=function(){var _0x34beb0=_0x3c5f3b;if(_0x352a4c['WIPef'](_0x34beb0(0x240),_0x34beb0(0x70b)))_0x352a4c[_0x34beb0(0x31c)](_0x10b421,_0x352a4c['HiGVJ']);else return{'w':0x0,'h':0x0};};var _0x3bc312=_0x2ee3f3(_0x3c5f3b(0x68a));if(_0x3bc312)_0x3bc312['oncli'+'ck']=function(){var _0x70aade=_0x3c5f3b,_0x1418e4={'xxYRP':function(_0x8355fb,_0x5ab792){return _0x352a4c['aGnYy'](_0x8355fb,_0x5ab792);}};if(_0x352a4c[_0x70aade(0x720)](_0x352a4c[_0x70aade(0xcb7)],_0x352a4c['kImRz'])){if(!_0x143771['on'])_0x352a4c[_0x70aade(0xb66)](_0x4144cf,!![],![]);else{if(_0x143771['boxes'])_0x4144cf(![],![]);else{if(_0x5afd2c())_0x4144cf(!![],!![]);else _0x352a4c[_0x70aade(0x37e)](_0x4144cf,![],![]);}}}else return _0x95f5f2[_0x70aade(0x2c4)](_0x1418e4['xxYRP'](_0x3e5100,0x6*0x7+-0x3*-0x51e+-0xf20))/(-0x1d84+-0x2a9+0x1*0x2091);};if(_0x2ee3f3('fold'))_0x11b6a3[_0x3c5f3b(0x4dc)](_0x2ee3f3,_0x3c5f3b(0x442))[_0x3c5f3b(0x576)+'ck']=function(){var _0x413035=_0x3c5f3b;if(!_0xfaeb2c)return;var _0x332d6e=_0x352a4c['ummlv'](_0xfaeb2c['style'][_0x413035(0xa26)+'ay'],_0x352a4c[_0x413035(0x160)]);_0xfaeb2c['style']['displ'+'ay']=_0x332d6e?'':'none',_0x2ee3f3(_0x352a4c[_0x413035(0x9e2)])[_0x413035(0x4fc)+'onten'+'t']=_0x332d6e?'-':'+';};return document['body'][_0x3c5f3b(0x927)+_0x3c5f3b(0x432)+'d'](_0x501030),_0x2e2351={'el':_0x501030,'st':_0x51b67c,'st2':_0x23aaa2,'sp':_0x32e1c0,'fx':_0x41ebc8,'fv':_0x65f40,'esp':_0x3bc312},_0x2e2351;}catch(_0xf1d12d){if(_0x3c5f3b(0x382)!==_0x11b6a3[_0x3c5f3b(0xbf5)])return console['warn'](_0x3c5f3b(0x3dc)+_0x3c5f3b(0xa1a)+_0x3c5f3b(0x37f)+'rame\x20'+_0x3c5f3b(0xc43)+_0x3c5f3b(0x7cb)+'ed',_0x3c5f3b(0xd72)+':'+_0x6ccbd2,_0xf1d12d),null;else try{if(_0x19218c[_0x50afff]['conte'+'ntWin'+_0x3c5f3b(0xc28)])_0x21eaad[_0x255b7c][_0x3c5f3b(0x4ba)+'ntWin'+_0x3c5f3b(0xc28)][_0x3c5f3b(0x7ca)+_0x3c5f3b(0xc09)+'e'](_0xb89bc4,'*');}catch(_0x457523){}}}else _0x134922['textC'+'onten'+'t']='Copie'+'d';}function _0x5afd2c(){var _0x329ab7=_0x586988,_0x59c591={'uTaXx':function(_0x4fe526){var _0x515825=_0x576a;return _0x11b6a3[_0x515825(0x7fd)](_0x4fe526);},'UiPps':function(_0x2b323b,_0x44ad58,_0x46f3bc){return _0x2b323b(_0x44ad58,_0x46f3bc);},'DaLjW':function(_0x25e576,_0x3648b8){return _0x25e576-_0x3648b8;}};if(_0x329ab7(0x296)!==_0x329ab7(0x921))try{if('REttz'===_0x11b6a3['NKVFT']){var _0x509358=_0x11b6a3[_0x329ab7(0x6bb)](_0x4c00cd);if(_0x509358[_0x329ab7(0x47b)])return!![];var _0x5291f4=_0x1f47c6();return!!(_0x5291f4&&_0x2a40fa[_0x329ab7(0x189)+'ified']);}else{var _0x3e1fcc=_0x59c591[_0x329ab7(0xd5f)](_0xaba526);if(!_0x3e1fcc)return null;try{return new _0x40fb39(_0x3e1fcc['buffe'+'r'],_0x3e1fcc['byteO'+_0x329ab7(0x6ef)],_0x3e1fcc[_0x329ab7(0x4ae)+_0x329ab7(0x665)]);}catch(_0x57e386){return null;}}}catch(_0xf7e4cf){if(_0x11b6a3['hHmzj'](_0x11b6a3[_0x329ab7(0x7eb)],_0x329ab7(0xde2))){_0x16b5be['preve'+_0x329ab7(0xe0c)+'ault'](),_0x59c591['UiPps'](_0x41a679,_0x4bdeda['on'],_0x59c591['DaLjW'](_0x2dc7d8['facto'+'r'],0x6*-0x28d+-0xb*-0xdf+-0x5b9*-0x1+0.5));return;}else return![];}else{if(_0x25ec74&&!_0x2a4cd8()){_0x59c591[_0x329ab7(0xd5f)](_0x45c6e9);return;}_0x34e627(!![],_0x5dfe3b);}}function _0x2ed3ac(){var _0x5e1b1f=_0x586988;try{var _0x29567a=_0x2e2351&&_0x2e2351[_0x5e1b1f(0x68a)];if(!_0x29567a)return;if(_0x143771['boxes']&&!_0x5afd2c())_0x143771['boxes']=![];var _0x551223=!_0x143771['on']?_0x5e1b1f(0x9c2)+'ff':_0x143771['boxes']?_0x11b6a3[_0x5e1b1f(0x487)]:'ESP\x20m'+'ap';if(_0x551223!==_0x29567a[_0x5e1b1f(0x4fc)+_0x5e1b1f(0xa15)+'t'])_0x29567a[_0x5e1b1f(0x4fc)+_0x5e1b1f(0xa15)+'t']=_0x551223;_0x29567a[_0x5e1b1f(0x3d2)][_0x5e1b1f(0x6f3)+'round']=_0x143771['on']?_0x6ccbd2:_0x11b6a3['GVbQv'],_0x29567a[_0x5e1b1f(0x3d2)][_0x5e1b1f(0xd72)]=_0x143771['on']?_0x5e1b1f(0x40c)+'1b':_0x11b6a3[_0x5e1b1f(0xcaf)];}catch(_0x1f1f65){}}function _0x4144cf(_0xd4eeb3,_0x27f69a){var _0x2bbb0a=_0x586988,_0x448802={'XbXRF':function(_0x569bce,_0xb1459c,_0x167c50){var _0x4f3a55=_0x576a;return _0x11b6a3[_0x4f3a55(0x24d)](_0x569bce,_0xb1459c,_0x167c50);},'azCWB':function(_0x41b791,_0x2843a8){var _0x92300f=_0x576a;return _0x11b6a3[_0x92300f(0x756)](_0x41b791,_0x2843a8);},'HNiga':function(_0x43d67c,_0x579cc3){return _0x43d67c!==_0x579cc3;},'RMMsZ':_0x2bbb0a(0x19d)+'t','LEjqL':function(_0x382857){var _0x3405a7=_0x2bbb0a;return _0x11b6a3[_0x3405a7(0x164)](_0x382857);},'PHgzQ':function(_0x573b5f,_0x5863fe){return _0x573b5f===_0x5863fe;},'Hnpvj':function(_0x218667,_0x3a01fe){return _0x11b6a3['yrWKX'](_0x218667,_0x3a01fe);}};if(_0x11b6a3[_0x2bbb0a(0x597)](_0x11b6a3['TVcce'],_0x11b6a3[_0x2bbb0a(0xaf3)])){_0x5f2e85['tag']={};for(var _0x3e39d0=-0x3f4*-0x3+-0x6b2+0x1*-0x52a;_0x3e39d0<_0x3352fa['lengt'+'h'];_0x3e39d0++){var _0x1f0a22=_0x448802['XbXRF'](_0x1ae196,_0x448802[_0x2bbb0a(0xab9)](_0x4b2e87,_0x4866f0(_0x3cb7c3[_0x3e39d0][-0x1319*0x1+0x216e+-0xe55],0x2622+-0x255b+-0xb7)),'i32');if(_0x448802[_0x2bbb0a(0xbab)](_0x1f0a22,_0xe8ddeb))_0x80ff5d['tag'][_0x1ec251[_0x3e39d0][-0x119f*-0x2+0x36*-0x87+-0x6c3]]=_0x1f0a22;}}else{_0x143771['on']=!!_0xd4eeb3,_0x143771[_0x2bbb0a(0xd48)]=!!_0x27f69a,_0x2ed3ac();try{if(_0x2bbb0a(0x6a5)!==_0x11b6a3[_0x2bbb0a(0x2b3)]){var _0x2ca6f2=_0x42fb2d();if(_0x2ca6f2&&_0x2ca6f2['el'])_0x2ca6f2['el'][_0x2bbb0a(0x3d2)]['displ'+'ay']=_0x143771['on']?'':'none';var _0x5e3e3d=_0x16c94e;if(_0x5e3e3d&&_0x5e3e3d['cv'])_0x5e3e3d['cv']['style']['displ'+'ay']=_0x143771['on']&&_0x143771['boxes']?'':'none';}else{var _0x49772e=(_0x2bbb0a(0x4c6)+_0x2bbb0a(0x8a3)+_0x2bbb0a(0xc27)+'|10|5'+'|7')[_0x2bbb0a(0x783)]('|'),_0x1b10f4=-0x829+-0x1fe8+-0x315*-0xd;while(!![]){switch(_0x49772e[_0x1b10f4++]){case'0':if(!_0x3d6265){_0x59b8c7=_0x26faab,_0x356d9e=[],_0x448802[_0x2bbb0a(0x37d)](_0xd01dcf,_0x448802['RMMsZ'],{'report':_0x448802['LEjqL'](_0x2ec540)});return;}continue;case'1':var _0x26faab=_0x3518d6(_0x5ccc8c);continue;case'2':for(var _0x392191 in _0x5f3f32)_0x26faab[_0x392191]=_0x5f3f32[_0x392191];continue;case'3':var _0x5ccc8c=_0x27deeb();continue;case'4':var _0x5f3f32=_0x448802['LEjqL'](_0x1c9a4b);continue;case'5':_0x5ba4e9=_0x26faab;continue;case'6':_0x50769d=[];continue;case'7':_0x448802[_0x2bbb0a(0x37d)](_0x145660,'repor'+'t',{'report':_0x3ff225()});continue;case'8':if(_0x1184ef!==_0x2bbb0a(0xa2b)+'hot')return;continue;case'9':if(_0x17420b===_0x2bbb0a(0x8e6)){_0x1041be(_0x4b721f&&_0x448802[_0x2bbb0a(0xc65)](typeof _0x34e12c['on'],'boole'+'an')?_0x2da03f['on']:_0x1068e6['on'],_0x237d89&&_0x448802['Hnpvj'](typeof _0xcbc9c4['facto'+'r'],'numbe'+'r')?_0x33ed0e[_0x2bbb0a(0x7f0)+'r']:_0x46fab4[_0x2bbb0a(0x7f0)+'r']);return;}continue;case'10':for(var _0x19a001 in _0x26faab){var _0x22a226=_0x136be[_0x19a001],_0x207265=_0x26faab[_0x19a001];if(_0x22a226!==_0x207265)_0x8de786[_0x2bbb0a(0x68c)](_0x19a001+':\x20'+_0x22a226+'\x20->\x20'+_0x207265);}continue;}break;}}}catch(_0x5c247a){}}}var _0x5f4ee4=0x21f*0x7+-0x1*-0x78a+0x151*-0x11;function _0x1cbf32(_0x12c05d,_0x4383bd){var _0x55a0d8=_0x586988,_0xe0c9b0={'OSART':function(_0x1035bb,_0x3a2623,_0x457e4a){var _0x3eda1b=_0x576a;return _0x11b6a3[_0x3eda1b(0xe24)](_0x1035bb,_0x3a2623,_0x457e4a);},'hpSYe':function(_0x2a21cf){var _0x3258d7=_0x576a;return _0x11b6a3[_0x3258d7(0x7c2)](_0x2a21cf);}};if(_0x11b6a3[_0x55a0d8(0x7b1)](_0x11b6a3[_0x55a0d8(0xcdd)],'lfTen')){if(!_0x1597a1['on'])_0xe0c9b0['OSART'](_0x172e8a,!![],![]);else{if(_0x2bda60[_0x55a0d8(0xd48)])_0xe0c9b0[_0x55a0d8(0x680)](_0x461de2,![],![]);else{if(_0xe0c9b0['hpSYe'](_0x196b49))_0x1f19a3(!![],!![]);else _0xd348f8(![],![]);}}}else{var _0x4ed5fa=_0x3b07fd['on'];_0x3b07fd['on']=!!_0x12c05d;_0x3b07fd['on']&&!_0x4ed5fa&&(_0x11b6a3['ygQSA'](_0x4383bd,undefined)||_0x11b6a3['wqNnI'](_0x4383bd,null)||_0x11b6a3[_0x55a0d8(0xb80)](Number(_0x4383bd),-0x1*0x11a2+0x234+0xf6f))&&(_0x4383bd=_0x5f4ee4);_0x3b07fd['facto'+'r']=Math['min'](_0x3b07fd[_0x55a0d8(0xd62)],Math[_0x55a0d8(0xd62)](_0x3b07fd[_0x55a0d8(0x4a9)],Number(_0x4383bd)||-0xd03*-0x1+0x23b0+-0x1859*0x2));if(!_0x3b07fd['on'])_0x5e5e77={};var _0x444268=_0x4ad777();if(_0x444268){_0x444268['sp']&&(_0x444268['sp']['textC'+'onten'+'t']=_0x3b07fd['on']?_0x11b6a3[_0x55a0d8(0x8b7)]:_0x55a0d8(0x8b9)+_0x55a0d8(0x443),_0x444268['sp'][_0x55a0d8(0x3d2)]['backg'+'round']=_0x3b07fd['on']?_0x6ccbd2:_0x11b6a3['GVbQv'],_0x444268['sp'][_0x55a0d8(0x3d2)][_0x55a0d8(0xd72)]=_0x3b07fd['on']?'#2a0f'+'1b':_0x55a0d8(0xada)+'f5');if(_0x444268['fx'])_0x444268['fx'][_0x55a0d8(0xc6d)]=String(_0x3b07fd['facto'+'r']);if(_0x444268['fv'])_0x444268['fv'][_0x55a0d8(0x4fc)+_0x55a0d8(0xa15)+'t']=_0x11b6a3[_0x55a0d8(0x92a)](_0x3b07fd['facto'+'r'][_0x55a0d8(0xd34)+'ed'](0xcbc+-0x23c*-0xc+-0x278b),'x');}}}function _0x5ee3eb(_0x33281a){var _0x1d15ae=_0x586988,_0x758a69=_0x4ad777();if(!_0x758a69||!_0x758a69['st'])return;try{if(!_0x11b6a3[_0x1d15ae(0x747)](_0x4f5dc5)&&!_0x1eb154){if(_0x758a69['el'])_0x758a69['el']['style']['displ'+'ay']=_0x11b6a3[_0x1d15ae(0xc14)];return;}if(_0x758a69['el'])_0x758a69['el'][_0x1d15ae(0x3d2)][_0x1d15ae(0xa26)+'ay']='';var _0x23d653=Object['keys'](_0x33281a&&_0x33281a[_0x1d15ae(0xb17)+'nces']||{})[_0x1d15ae(0x964)+'h'],_0x2f3574=_0x33281a&&_0x33281a[_0x1d15ae(0x68a)]||null,_0x84c105=_0x2f3574?_0x2f3574['enemy'+'Count']||0x20e*-0x2+-0x18bc*-0x1+-0x420*0x5:-0x12d*0xa+-0x1d38+0x28fa,_0x5f4fd6=_0x2f3574?_0x2f3574[_0x1d15ae(0x370)+_0x1d15ae(0x375)]||-0x3*0x2f+0xa27+0x99a*-0x1:-0x19c9+0x1a*0xbc+0x3*0x23b,_0x204f6d=_0x9ce02f?_0x11b6a3['zaEgb'](_0x11b6a3['jmZBk'](_0x9ce02f[_0x1d15ae(0x2cc)+'r']['byteL'+'ength'],0x1450e9+0xe0d*0x25+-0x658ca)['toFix'+'ed'](0x113e+0x1b09*-0x1+-0x6d*-0x17),'MB'):_0x11b6a3['prIdc'],_0x22fd27=_0x11b6a3['ZanWF'](_0x11b6a3['uJkJw'](_0x11b6a3[_0x1d15ae(0x841)]('v'+(_0x33281a&&_0x33281a['versi'+'on']||_0xa19145)+(_0x1d15ae(0x42c)+_0x1d15ae(0x6ec))+(_0x33281a&&_0x33281a['hooks'+'Appli'+'ed']||-0x1bd8+-0x2*-0xec4+-0x1b0),'/'),_0x33281a&&_0x33281a[_0x1d15ae(0xb2a)+_0x1d15ae(0x730)]||0x8e6+0xe2*-0x5+0x11f*-0x4)+('\x20\x20obj'+'s\x20'),_0x23d653)+(_0x1d15ae(0x4ed)+'\x20')+_0x204f6d+_0x11b6a3[_0x1d15ae(0xb7c)]+_0x130698;_0x758a69['st']['textC'+_0x1d15ae(0xa15)+'t']=_0x22fd27;var _0x5b4b55=_0x758a69['st2'];_0x5b4b55&&(_0x5b4b55['textC'+_0x1d15ae(0xa15)+'t']=_0x11b6a3['QQBsF'](_0x84c105,0x26b9+-0x3*-0xbcb+-0x4a1a)?_0x11b6a3[_0x1d15ae(0x88c)]+_0x84c105+(_0x5f4fd6?_0x11b6a3[_0x1d15ae(0xa30)](_0x11b6a3[_0x1d15ae(0xd9b)],_0x5f4fd6)+'\x20bots':'')+(_0x2f3574&&_0x2f3574[_0x1d15ae(0x89e)+'a']?_0x1d15ae(0xc72)+'\x20'+_0x2f3574[_0x1d15ae(0x89e)+_0x1d15ae(0x2d7)]:_0x11b6a3[_0x1d15ae(0x1a3)]):_0x11b6a3[_0x1d15ae(0x163)]+(_0x2f3574&&_0x2f3574[_0x1d15ae(0x89e)+'a']?_0x2f3574['camer'+_0x1d15ae(0x2d7)]:'-'),_0x5b4b55[_0x1d15ae(0x3d2)]['color']=_0x84c105>-0x17fa+-0x1*-0x2102+-0x908?_0x11b6a3[_0x1d15ae(0x3cb)]:_0x1d15ae(0x564)+'99');}catch(_0x535518){}}window[_0x586988(0xb44)+_0x586988(0x30b)+_0x586988(0x93d)+'r'](_0x586988(0xb43)+'wn',function(_0x42b83d){var _0x2bb195=_0x586988,_0x1bccd9={'XUxJO':_0x2bb195(0xe29),'iRbps':_0x2bb195(0xe16),'jLgIP':function(_0x18eb3f,_0x257ddc){return _0x18eb3f+_0x257ddc;},'OISGp':'\x20\x20cam'+'\x20','aMFgE':_0x2bb195(0x950)+_0x2bb195(0x537)+_0x2bb195(0x1b0)+_0x2bb195(0x8ac)+'y?)\x20\x20'+_0x2bb195(0x969),'RCITH':function(_0x274e75,_0x447873){return _0x274e75>_0x447873;},'aMNww':_0x2bb195(0x7c3)+'a8'};if(!_0x42b83d)return;try{if(_0x11b6a3[_0x2bb195(0x947)](_0x42b83d['code'],'F9')){_0x42b83d[_0x2bb195(0x694)+_0x2bb195(0xe0c)+'ault'](),_0x10b421(_0x11b6a3[_0x2bb195(0x9f2)]);return;}if(_0x11b6a3[_0x2bb195(0x509)](_0x42b83d[_0x2bb195(0xca0)],'F7')){if(_0x11b6a3['vUaBs'](_0x2bb195(0x1b5),_0x2bb195(0x1b5))){_0x42b83d[_0x2bb195(0x694)+_0x2bb195(0xe0c)+_0x2bb195(0x64b)](),_0x1cbf32(!_0x3b07fd['on'],_0x3b07fd[_0x2bb195(0x7f0)+'r']);return;}else _0x23984a(_0x2fa2ce['on'],_0x3c960d(_0x10f4fd['value'])||-0x8*-0x32a+0x4c*-0x79+0xa9d);}if(_0x42b83d['code']==='F8'){_0x42b83d[_0x2bb195(0x694)+_0x2bb195(0xe0c)+_0x2bb195(0x64b)](),_0x11b6a3[_0x2bb195(0xbc7)](_0x1cbf32,_0x3b07fd['on'],_0x3b07fd[_0x2bb195(0x7f0)+'r']+(0x1ba6+-0x6*0x4a+-0x19ea+0.5));return;}if(_0x42b83d[_0x2bb195(0xca0)]==='F6'){_0x42b83d[_0x2bb195(0x694)+'ntDef'+_0x2bb195(0x64b)](),_0x1cbf32(_0x3b07fd['on'],_0x3b07fd[_0x2bb195(0x7f0)+'r']-(-0x6b2*-0x5+0x11b*-0x6+0x1*-0x1ad8+0.5));return;}if(_0x11b6a3[_0x2bb195(0x5e2)](_0x42b83d[_0x2bb195(0xca0)],_0x2bb195(0x469)+'t')){_0x42b83d[_0x2bb195(0x694)+_0x2bb195(0xe0c)+'ault'](),_0x3d4811(!_0x59681c[_0x2bb195(0x892)]);return;}if(_0x42b83d[_0x2bb195(0xca0)]===_0x2bb195(0x7a2)+'etRig'+'ht'){if('poHQq'===_0x11b6a3['vPJrk']){_0x42b83d['preve'+_0x2bb195(0xe0c)+'ault'](),_0x2f79da[_0x2bb195(0x60b)]=Math[_0x2bb195(0x4a9)](-0x1*0x1499+-0x3ad+0x18d2,_0x11b6a3[_0x2bb195(0xc39)](_0x2f79da['fov'],0x1648+0x1*-0xa1a+0x29*-0x4c)),_0x2ee92a();return;}else _0x2963b9(!_0x3253ee['on'],_0x46c11f[_0x2bb195(0x7f0)+'r']);}if(_0x42b83d['code']===_0x11b6a3[_0x2bb195(0x430)]){if(_0x2bb195(0x31d)!=='FBGPP'){_0x42b83d[_0x2bb195(0x694)+_0x2bb195(0xe0c)+'ault'](),_0x2f79da[_0x2bb195(0x60b)]=Math['max'](-0x15b*0x14+0x25e3+-0x1*0xaa9,_0x2f79da['fov']-(0x722+0x4*-0x75d+0x2*0xb2a)),_0x11b6a3[_0x2bb195(0xc05)](_0x2ee92a);return;}else _0x4ff45c['textC'+_0x2bb195(0xa15)+'t']=_0x2ec093>-0x1127+0x4c*-0x66+0x1*0x2f6f?_0x2bb195(0x46e)+'RS\x20'+_0x105915+(_0x31202a?_0x1bccd9[_0x2bb195(0x9aa)]+_0xedf442+_0x1bccd9['iRbps']:'')+(_0x580f1c&&_0x1ad9e9[_0x2bb195(0x89e)+'a']?_0x1bccd9['jLgIP'](_0x1bccd9[_0x2bb195(0xb27)],_0x5c5658[_0x2bb195(0x89e)+_0x2bb195(0x2d7)]):_0x2bb195(0xc72)+'\x20-'):_0x1bccd9[_0x2bb195(0xbce)]+(_0x53606d&&_0x59c1f7[_0x2bb195(0x89e)+'a']?_0x5638d2[_0x2bb195(0x89e)+'aFrom']:'-'),_0x262d17[_0x2bb195(0x3d2)]['color']=_0x1bccd9[_0x2bb195(0x766)](_0x2db8a8,0x10cd*0x1+-0x1056+-0x77)?_0x1bccd9[_0x2bb195(0x8a1)]:'#8d7a'+'99';}}catch(_0xe8345d){}},!![]);var _0x143771={'on':!![],'span':0x50,'boxes':![]};function _0xf2f264(){var _0x5579a9=_0x586988,_0x1fe1ac=_0xc9fffc['Photo'+_0x5579a9(0x600)+_0x5579a9(0x3ec)+'nc']||{},_0x28d00e=Object[_0x5579a9(0xc9b)](_0x1fe1ac);for(var _0xd70ae4=-0x1*-0x16af+0xd*-0x145+-0x2*0x317;_0xd70ae4<_0x28d00e[_0x5579a9(0x964)+'h'];_0xd70ae4++){if(_0x5579a9(0x7b9)==='AsdEv')return _0x3c9280['on'];else{var _0x352cca=_0x1fe1ac[_0x28d00e[_0xd70ae4]]['ptr'],_0x16183e=_0x5f506b(_0x352cca+(-0x13*0x5f+-0x53a*-0x1+0x5*0x67),'u32');if(!_0x16183e)continue;var _0x2c5ee2=_0x5b1b65['Mouse'+_0x5579a9(0xe25)]||[],_0x41a89d={'mouseLook':'0x'+_0x11b6a3['McqfB'](_0x16183e,0x114*0x9+0x1131+-0x1ae5)[_0x5579a9(0xd0f)+'ing'](-0x12e*0x21+-0x34*0x18+0x2*0x15ef),'floats':{},'camera':null,'vec2':null};for(var _0x213c28=-0x1b75+-0x151c+0x3091;_0x213c28<_0x2c5ee2[_0x5579a9(0x964)+'h'];_0x213c28++){if(_0x11b6a3[_0x5579a9(0xa7c)](_0x11b6a3[_0x5579a9(0x7e9)],'qpCue')){if(_0x11b6a3['hHmzj'](_0x2c5ee2[_0x213c28][0xd5+0xc9*-0x17+0x113b],'f32'))continue;_0x41a89d['float'+'s']['0x'+_0x2c5ee2[_0x213c28][0x602*0x2+-0x1b7d+0xf79]['toStr'+_0x5579a9(0x3cc)](-0x1730+0x53e*0x3+-0x2*-0x3c3)]=_0x5f506b(_0x11b6a3['ZanWF'](_0x16183e,_0x2c5ee2[_0x213c28][0x2*-0x11eb+0x2655+-0x27f*0x1]),_0x11b6a3[_0x5579a9(0x772)]);}else{_0x347db2(_0x4c4817[_0x5579a9(0xa63)]);try{var _0x2e9227=_0x15bea5[_0x5579a9(0xdd8)+_0x5579a9(0x79f)+'t']||0x1c45+-0x6d6*0x5+0x9*0x101;if(_0x11b6a3['VzSgj'](_0x2e9227,0xfa0+-0x1*0x1664+-0x4*-0x24c))_0xda4b69(![]);}catch(_0x3fe1e9){}}}var _0x3613c5=_0x11b6a3['BXsTU'](_0x5f506b,_0x16183e+(0x94*-0xe+-0x53*0x6e+0x2bee),_0x5579a9(0xb63));if(_0x3613c5)_0x41a89d['camer'+'a']=_0x11b6a3[_0x5579a9(0xc84)]('0x',_0x11b6a3[_0x5579a9(0xd7f)](_0x3613c5,0x25c3*-0x1+0x17f*0xa+0x16cd)[_0x5579a9(0xd0f)+'ing'](-0x1456+0xbae+0x8b8));var _0x1521a9=_0x25d0eb(_0x16183e,0x1204+0xb68+-0x1d24,-0x1d8a+0x9bd+0x1cd*0xb);if(_0x1521a9)_0x41a89d[_0x5579a9(0xae4)]=_0x1521a9;return _0x41a89d;}}return null;}var _0x1b8bcb=_0x586988(0x33e)+_0x586988(0x764)+_0x586988(0x60b),_0x2f79da={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x33ba56=localStorage['getIt'+'em'](_0x1b8bcb);if(_0x33ba56)_0x2f79da[_0x586988(0x60b)]=Math['min'](-0x87*0x19+-0x618+0x2d5*0x7,Math['max'](-0x4cc*-0x3+-0xb65+0x2e1*-0x1,_0x11b6a3[_0x586988(0x2a4)](parseFloat,_0x33ba56)||0xe8e+-0x61*-0x4+-0xfb8));}catch(_0x3d9080){}function _0x2ee92a(){var _0x59339b=_0x586988;if('SyPpV'===_0x59339b(0xd32))try{localStorage[_0x59339b(0x3b7)+'em'](_0x1b8bcb,_0x11b6a3['xcGdV'](String,_0x2f79da[_0x59339b(0x60b)]));}catch(_0x483006){}else{if(_0x47a08b&&_0x1f71c8[_0x59339b(0xa54)+'ropag'+'ation'])_0x338a2e['stopP'+_0x59339b(0xc9f)+_0x59339b(0x266)]();_0x4f01a4(!_0x3a4839[_0x59339b(0x892)]);}}var _0x1a7420=_0x586988(0x33e)+_0x586988(0x764)+_0x586988(0xc7e)+_0x586988(0xac1),_0x108abc=![];try{if(_0x11b6a3[_0x586988(0xc75)](localStorage['getIt'+'em'](_0x1a7420),null)){if(_0x586988(0xb77)===_0x586988(0xa48))return _0x191943[_0x586988(0x6f8)+'e']=_0x10b123[_0x586988(0x6f8)+'e']||'insta'+_0x586988(0x876)+'e().e'+_0x586988(0x5c2)+_0x586988(0x4c4)+'ory',new _0xf3a713(_0x4a17fe[_0x586988(0x2cc)+'r']);else localStorage['remov'+_0x586988(0x771)](_0x1a7420),_0x108abc=!![];}}catch(_0x5b2e29){}var _0x543d7d=-0x58*0x1+0xb6e+-0xaee,_0x11e9a5=0x22a*-0x3+0x4*-0x236+0xf72,_0x543d7d=-0x35f*0xb+0x88d+0x132*0x18,_0x11e9a5=-0xf*0x1a7+-0x1*0x21ce+0x1*0x3ab3,_0x580614=-0x16*0xde+0x1d1*0x7+0x689,_0x3ff154={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0x3f94e5(_0x18be4c){var _0xee610c=_0x586988;if(_0x18be4c===undefined||_0x11b6a3[_0xee610c(0xbd7)](_0x18be4c,null))return undefined;if(_0x11b6a3['GmdiU'](typeof _0x18be4c[_0xee610c(0x62a)],_0x11b6a3[_0xee610c(0x702)])){if(_0x11b6a3['HhwIE']==='vSiTq')_0x51ab06['syncs'][_0x9496ae]();else try{return _0x18be4c[_0xee610c(0x62a)]();}catch(_0x5526ed){}}if(typeof _0x18be4c==='objec'+'t')return undefined;return _0x18be4c;}function _0x5587b7(_0x38ad67,_0x14101b,_0x5777cb){var _0x359f1e=_0x586988;try{var _0x1a978a=window['Unity'+'WebMo'+_0x359f1e(0x984)]&&window['Unity'+'WebMo'+_0x359f1e(0x984)]['Runti'+'me'],_0xb21aa=_0x35f760||_0x1a978a&&_0x1a978a[_0x359f1e(0x5bd)+'ns']&&_0x1a978a[_0x359f1e(0x5bd)+'ns'][_0x11b6a3[_0x359f1e(0x2b9)](_0x1a978a[_0x359f1e(0x5bd)+'ns'][_0x359f1e(0x964)+'h'],-0x1560+0x92*0xe+0xd65)];if(!_0xb21aa||typeof _0xb21aa[_0x359f1e(0x29a)]!=='funct'+'ion')return _0x3ff154[_0x359f1e(0xccf)+'s'][_0x359f1e(0x68c)](_0x11b6a3['PTQOc']),undefined;return _0x3f94e5(_0xb21aa[_0x359f1e(0x29a)](_0x38ad67,_0x14101b,_0x5777cb||[]));}catch(_0x2dde7e){if(_0x3ff154['error'+'s'][_0x359f1e(0x964)+'h']<-0x26*-0x14+-0x1506+0x1214)_0x3ff154['error'+'s'][_0x359f1e(0x68c)](_0x11b6a3['YWakm'](_0x11b6a3['ABsBd'](_0x38ad67,'.')+_0x14101b+':\x20',_0x11b6a3[_0x359f1e(0x668)](String,_0x2dde7e&&_0x2dde7e['messa'+'ge']||_0x2dde7e)['slice'](0x1*0x10e7+-0x3*-0x63d+-0x239e,-0xb2*-0xf+-0x10*0x34+-0x1*0x6d4)));return undefined;}}function _0x39f07d(){var _0x223f7c=_0x586988;if(_0x3ff154[_0x223f7c(0x465)+'ch'])return _0x3ff154[_0x223f7c(0x465)+'ch'];try{if(_0x11b6a3[_0x223f7c(0xa08)]('KFRjf',_0x11b6a3['SHJPc'])){var _0x1273a1=window['Unity'+_0x223f7c(0x881)+_0x223f7c(0x984)]&&window[_0x223f7c(0x1c2)+'WebMo'+'dkit'][_0x223f7c(0x213)+'me'],_0x2391ef=_0x35f760||_0x1273a1&&_0x1273a1['plugi'+'ns']&&_0x1273a1['plugi'+'ns'][_0x1273a1['plugi'+'ns'][_0x223f7c(0x964)+'h']-(-0x1547+-0x1*-0x3f5+0x1153)];if(!_0x2391ef||typeof _0x2391ef['mallo'+'c']!=='funct'+_0x223f7c(0x8b4))return _0x3ff154['error'+'s'][_0x223f7c(0x68c)]('no\x20pl'+'ugin.'+_0x223f7c(0xdaa)+'c'),-0x1561*-0x1+0x209+-0xde*0x1b;var _0x43b4cd=_0x3f94e5(_0x2391ef[_0x223f7c(0xdaa)+'c'](0x115c+0xdff*-0x1+0x1*-0x33d));if(_0x11b6a3['gksuD'](typeof _0x43b4cd,_0x11b6a3[_0x223f7c(0x3ef)])||!_0x11b6a3[_0x223f7c(0xdec)](_0x43b4cd,0x872+0x1ef7+-0x2769))return _0x3ff154['error'+'s'][_0x223f7c(0x68c)](_0x11b6a3[_0x223f7c(0xdcd)](_0x223f7c(0xdaa)+_0x223f7c(0x716)+_0x223f7c(0x9ee)+'\x20',_0x43b4cd)),0x2502+-0x267f+0x17d;_0x3ff154[_0x223f7c(0x465)+'ch']=_0x43b4cd;}else _0x11b6a3[_0x223f7c(0x278)](_0x3ee53e,![]),_0x11b6a3[_0x223f7c(0x6bb)](_0x1dea0c);}catch(_0x3a1fb5){if(_0x3ff154['error'+'s'][_0x223f7c(0x964)+'h']<0x1876+0x384+0x1*-0x1bf4)_0x3ff154[_0x223f7c(0xccf)+'s'][_0x223f7c(0x68c)](_0x11b6a3['rzcMK'](_0x11b6a3['zeLMc'],String(_0x3a1fb5&&_0x3a1fb5[_0x223f7c(0xd29)+'ge']||_0x3a1fb5)[_0x223f7c(0xb19)](0x1981*0x1+-0x1*0x174d+-0x3*0xbc,0x163*0x19+-0x2663+0x412)));return-0x1d07+0x23*0xb9+-0x1*-0x3bc;}return _0x3ff154[_0x223f7c(0x465)+'ch'];}function _0xe19014(_0x1e0b8e){var _0x276319=_0x586988,_0x531b64=_0x1e0b8e[0x86e+0x1*0xb32+-0x13a0],_0x25e3ee=_0x1e0b8e[-0x1a16+-0x1cb9*-0x1+-0x2a2*0x1],_0x332105=_0x1e0b8e[-0x15ee+0x14c+0x14a4],_0x4b587e=_0x1e0b8e[-0x92*-0x23+0x1c9b*0x1+-0x308e],_0x161aab=_0x531b64*_0x531b64,_0x495535=_0x25e3ee*_0x25e3ee,_0x269d21=_0x11b6a3['imUFG'](_0x332105,_0x332105),_0x94c0f1=_0x531b64*_0x25e3ee,_0x32fd7c=_0x11b6a3[_0x276319(0xbc5)](_0x531b64,_0x332105),_0x2361d9=_0x11b6a3['imUFG'](_0x25e3ee,_0x332105),_0x2886e1=_0x11b6a3[_0x276319(0x493)](_0x4b587e,_0x531b64),_0x14d38f=_0x4b587e*_0x25e3ee,_0x31b86f=_0x4b587e*_0x332105;return{'right':[-0x1280+0x4e*-0x2f+0x20d3-_0x11b6a3[_0x276319(0xb4f)](-0x2a5+-0xfb8+-0x125f*-0x1,_0x495535+_0x269d21),(0x98b+0xc8c+-0x1615)*(_0x94c0f1+_0x31b86f),_0x11b6a3['svqhB'](-0x13c3+0x702+0xcc3,_0x32fd7c-_0x14d38f)],'up':[(0x1*0xc1d+0x10b6+-0x1cd1)*_0x11b6a3['XpIve'](_0x94c0f1,_0x31b86f),-0x1*0x1032+0x17ed+0x2*-0x3dd-(0x103*0xd+-0x2b6+-0xa6f)*_0x11b6a3['SQlNJ'](_0x161aab,_0x269d21),_0x11b6a3[_0x276319(0xaad)](-0x687+0xaf*0x4+0x3cd,_0x2361d9+_0x2886e1)],'fwd':[_0x11b6a3['gLlEt'](-0x1c26+0x1e0b+-0x15*0x17,_0x11b6a3[_0x276319(0x851)](_0x32fd7c,_0x14d38f)),(-0x1c83+0x24c8+0x2d*-0x2f)*(_0x2361d9-_0x2886e1),0x111d*-0x1+0x138+0xfe6-(0x1*0x1bc5+0x21d8+-0x3d9b)*(_0x161aab+_0x495535)]};}var _0x52fb35=0x2453+-0x425*-0x5+-0x2a*0x15b;function _0x81d219(_0x30b78c){var _0x2d98d6=_0x586988,_0x2fc04d={'Smojs':function(_0x46d272,_0x3db52f){return _0x11b6a3['OEdcb'](_0x46d272,_0x3db52f);}};if(_0x11b6a3['tdCvz'](_0x2d98d6(0x5ff),_0x11b6a3['QKEgx']))_0x3ae6c7[_0x2d98d6(0x4fc)+'onten'+'t']=_0x47ada7['diff']&&_0x30bc85[_0x2d98d6(0xd1d)][_0x2d98d6(0x964)+'h']?_0x2fc04d[_0x2d98d6(0x2db)](_0x2d98d6(0xd80)+'vs\x20sn'+'apsho'+'t:\x20',_0x68ee49[_0x2d98d6(0xd1d)][_0x2d98d6(0xd89)](',\x20')):'F9\x20tw'+_0x2d98d6(0xa5d)+_0x2d98d6(0x2a7)+_0x2d98d6(0x42a)+_0x2d98d6(0xa72)+_0x2d98d6(0x7de)+'ting\x20'+'/\x20jum'+_0x2d98d6(0x85a)+_0x2d98d6(0xb59)+'\x20whic'+_0x2d98d6(0xd1a)+_0x2d98d6(0x17a)+_0x2d98d6(0xcce)+'h.';else{_0x3ff154['ok']=![],_0x3ff154['why']=_0x30b78c,_0x3ff154[_0x2d98d6(0xa8d)+'s']++;if(_0x11b6a3[_0x2d98d6(0xb83)](_0x3ff154[_0x2d98d6(0xa8d)+'s'],_0x52fb35))return _0x3ff154['quat']=null,_0x3ff154['basis']=null,_0x3ff154[_0x2d98d6(0x3a2)]=null,_0x3ff154;return _0x3ff154[_0x2d98d6(0x1ca)]++,_0x3ff154;}}function _0x21672f(){var _0x202250=_0x586988;_0x3ff154[_0x202250(0x5b0)]++,_0x3ff154[_0x202250(0xa8d)+'s']=0x657+-0x9e0+0x389;var _0x5a5771=_0x11b6a3[_0x202250(0x30f)](_0xf2f264),_0x5152fd=_0x5a5771&&_0x5a5771['mouse'+'Look']?parseInt(_0x5a5771['mouse'+_0x202250(0xe25)],-0x1dfb+-0xbe1*0x2+0x35cd):_0x27c474;if(!_0x5152fd)return _0x11b6a3['reigp'](_0x81d219,_0x202250(0xc52)+_0x202250(0x207)+_0x202250(0x483)+'stanc'+'e');if(_0x27c474!==_0x5152fd)_0x27c474=_0x5152fd;var _0x530480=_0x11b6a3['hGFHQ'](_0x5f506b,_0x11b6a3[_0x202250(0xb02)](_0x5152fd,_0x580614),_0x11b6a3[_0x202250(0xd57)]);if(typeof _0x530480!==_0x202250(0x846)+'r'||!(_0x530480>-0xa2d+-0x953+-0x4*-0x4e0))return _0x11b6a3[_0x202250(0x685)](_0x81d219,_0x202250(0x78d)+_0x202250(0xafd)+_0x202250(0x9d5)+_0x202250(0xb5f)+_0x202250(0x9dc)+_0x202250(0x3b5)+'t\x20ref'+_0x202250(0x875)+'e');_0x3ff154['camPt'+'r']=_0x530480;var _0x4a7ac9=_0x5587b7(_0x11b6a3[_0x202250(0x64a)],_0x11b6a3[_0x202250(0x520)],[_0x530480]);if(typeof _0x4a7ac9!==_0x202250(0x846)+'r'||!(_0x4a7ac9>0x37*-0x9e+-0x8df*-0x4+-0x1*0x18a)){if(_0x11b6a3[_0x202250(0x227)]('IsxLN',_0x11b6a3[_0x202250(0x9ed)]))return _0x3ff154['tfPtr']=0x16*-0x59+-0x1*-0x24cb+-0x33d*0x9,_0x11b6a3['rDnMq'](_0x81d219,_0x11b6a3[_0x202250(0x2cd)](_0x202250(0x7a0)+'nent.'+_0x202250(0xbe1)+'ransf'+'orm\x20r'+_0x202250(0x6eb)+'ed\x20',_0x4a7ac9));else{var _0x53daa9=_0x2d7596[_0x202250(0x1c2)+_0x202250(0x881)+_0x202250(0x984)]&&_0x2de1df['Unity'+_0x202250(0x881)+'dkit'][_0x202250(0x213)+'me'],_0x45d1cd=_0xe72e6||_0x53daa9&&_0x53daa9[_0x202250(0x5bd)+'ns']&&_0x53daa9[_0x202250(0x5bd)+'ns'][_0x53daa9['plugi'+'ns'][_0x202250(0x964)+'h']-(0x2*0x11b7+0x1c4a*-0x1+-0x723)];if(!_0x45d1cd||typeof _0x45d1cd['call']!==_0x202250(0x952)+_0x202250(0x8b4))return _0x8cfb46[_0x202250(0xccf)+'s']['push'](_0x11b6a3[_0x202250(0x6fd)]),_0x165df4;return _0x26ae60(_0x45d1cd[_0x202250(0x29a)](_0x4e6062,_0x4c8bc5,_0x8c12f9||[]));}}_0x3ff154[_0x202250(0xc18)]=_0x4a7ac9;var _0x22fa8d=_0x39f07d();if(!_0x22fa8d)return _0x11b6a3[_0x202250(0x2f3)](_0x81d219,_0x202250(0xb62)+'ratch'+_0x202250(0xa28)+'er');var _0x29c3f9=_0x5587b7('Camer'+'a',_0x202250(0x2a6)+'ieldO'+'fView',[_0x530480]);if(typeof _0x29c3f9===_0x202250(0x846)+'r'&&isFinite(_0x29c3f9)&&_0x11b6a3['SSqPQ'](_0x29c3f9,0x64d*0x6+-0x1*0x14f8+0x8b*-0x1f)&&_0x29c3f9<-0x2*0x76c+-0x1a11+-0x1*-0x299c)_0x3ff154[_0x202250(0x60b)]=_0x29c3f9;_0x5587b7('Trans'+_0x202250(0xc1b),_0x202250(0x8cc)+'otati'+'on',[_0x22fa8d,_0x4a7ac9]);var _0x53e3b5=[_0x5f506b(_0x22fa8d,'f32'),_0x5f506b(_0x22fa8d+(0x15f3*0x1+0x2027+-0x3616),_0x202250(0x4d9)),_0x5f506b(_0x22fa8d+(0x13c7+-0xa8f+0x7*-0x150),_0x11b6a3[_0x202250(0x772)]),_0x5f506b(_0x22fa8d+(0x6*0xa4+0x1b7b+-0x1f47),_0x202250(0x4d9))],_0x243bc0=-0x7b*0x1+0x1c3a+-0x1bbf;for(var _0x27c303=-0x21d4+0x13c2+0xe12;_0x27c303<0xe07+-0x1bd*-0x13+-0x1*0x2f0a;_0x27c303++)_0x243bc0+=_0x11b6a3['BovdT'](_0x53e3b5[_0x27c303],_0x53e3b5[_0x27c303]);_0x243bc0=Math[_0x202250(0xba0)](_0x243bc0);var _0x128409=isFinite(_0x243bc0)&&Math['abs'](_0x243bc0-(0x2634+-0x1*0x17d8+-0xe5b))<0x639+-0x35*-0xa5+-0x1431*0x2+0.02;_0x11b6a3[_0x202250(0x9fb)](_0x5587b7,_0x202250(0xbee)+_0x202250(0xc1b),_0x11b6a3['cMBhb'],[_0x22fa8d,_0x4a7ac9]);var _0x2439e6=_0x5f506b(_0x22fa8d,_0x11b6a3[_0x202250(0x772)]),_0x5c2f10=_0x11b6a3['YyWaX'](_0x5f506b,_0x22fa8d+(0x1*0xc9a+-0x21b3+-0xeb*-0x17),_0x11b6a3[_0x202250(0x772)]),_0x553b7c=_0x11b6a3[_0x202250(0x5e3)](_0x5f506b,_0x22fa8d+(0x1f4+0x5e6+-0x7*0x11e),_0x202250(0x4d9));_0x3ff154['pos']=_0x11b6a3[_0x202250(0x577)](typeof _0x2439e6,'numbe'+'r')&&_0x11b6a3['rPAdH'](typeof _0x5c2f10,_0x202250(0x846)+'r')&&_0x11b6a3[_0x202250(0xbd7)](typeof _0x553b7c,_0x202250(0x846)+'r')&&_0x11b6a3[_0x202250(0x668)](isFinite,_0x2439e6)&&_0x11b6a3['nuRnE'](isFinite,_0x5c2f10)&&_0x11b6a3[_0x202250(0x3b1)](isFinite,_0x553b7c)&&Math['abs'](_0x2439e6)<0x1*0x1ebae+-0x1dafd+0x11*0x15ff&&Math[_0x202250(0x9ad)](_0x5c2f10)<0x7007*0x5+-0x28adc+-0x1*-0x1e159&&_0x11b6a3[_0x202250(0x35a)](Math[_0x202250(0x9ad)](_0x553b7c),-0x2fd8f+-0x1877*-0xc+0x35e9b)?[_0x2439e6,_0x5c2f10,_0x553b7c]:null,_0x3ff154[_0x202250(0x2a5)+'ed']++;if(_0x128409){if(_0x202250(0x415)!=='mQhuE')return _0x2bb6fa['sourc'+'e']='windo'+_0x202250(0x256)+'bal',_0x2b990a;else{var _0xfcf9fd=(_0x202250(0x183)+'|0|5|'+'1')[_0x202250(0x783)]('|'),_0x11305e=0x421*0x1+-0x5*-0x61f+-0x22bc;while(!![]){switch(_0xfcf9fd[_0x11305e++]){case'0':_0x3ff154['why']='';continue;case'1':return _0x3ff154;case'2':_0x3ff154[_0x202250(0x47b)]=_0xe19014(_0x53e3b5);continue;case'3':_0x3ff154['ok']=!![];continue;case'4':_0x3ff154[_0x202250(0xd2b)]=_0x53e3b5;continue;case'5':_0x3ff154[_0x202250(0x6f8)+'e']=_0x11b6a3['SHZUR'];continue;}break;}}}_0x3ff154[_0x202250(0xd2b)]=null,_0x3ff154[_0x202250(0x47b)]=null;if(_0x11b6a3['EiRML'](_0x3ff154[_0x202250(0x60b)],null))return _0x3ff154['ok']=!![],_0x3ff154['sourc'+'e']=_0x11b6a3['Baxnw'],_0x3ff154[_0x202250(0x297)]=_0x11b6a3['wnCuz'](_0x202250(0x69c)+_0x202250(0x89a)+_0x202250(0xa42)+_0x202250(0xd3e)+'q|=',_0x11b6a3['prpJV'](Math['round'](_0x11b6a3[_0x202250(0xd4c)](_0x243bc0,-0xa70+-0x15b8+0x2410)),0x2*-0xfb3+-0x2347+0x4695))+_0x11b6a3[_0x202250(0x6e8)],_0x3ff154;return _0x3ff154['ok']=![],_0x3ff154[_0x202250(0x6f8)+'e']=null,_0x3ff154['why']=_0x202250(0x69c)+'ion\x20u'+'nusab'+_0x202250(0xd3e)+_0x202250(0x239)+_0x11b6a3[_0x202250(0x6a0)](Math[_0x202250(0x2c4)](_0x11b6a3[_0x202250(0xb4f)](_0x243bc0,-0x1a2a+0x149*-0x1b+0x3*0x1597)),-0x1*-0x1339+0x1fd+-0x114e)+_0x11b6a3[_0x202250(0xc7c)],_0x3ff154;}function _0x4c00cd(){var _0x4e5c80=_0x586988;if(_0x3ff154[_0x4e5c80(0x5b0)])return _0x3ff154;return _0x11b6a3['MaXwb'](_0x21672f);}var _0x2a40fa={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+_0x586988(0x207)+_0x586988(0x5a9)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x2df5fe(_0x345a61){var _0x3c18e1=_0x586988,_0x101bb9=null,_0x30b98b=0xab9+0xbb5+-0x166e;for(var _0x5c87da in _0x1d9f74){var _0x2c84ec=_0x1d9f74[_0x5c87da];if(!_0x2c84ec['hits']||_0x2c84ec[_0x3c18e1(0x51e)]===null)continue;var _0x5e0256=_0x5f506b(_0x11b6a3[_0x3c18e1(0xc03)](_0x27c474,_0x345a61),_0x11b6a3[_0x3c18e1(0x772)]);if(typeof _0x5e0256!=='numbe'+'r')continue;Math[_0x3c18e1(0x9ad)](_0x2c84ec['last']-_0x5e0256)<-0x246f+-0x1*0x14bd+0x4*0xe4b+0.001&&_0x2c84ec[_0x3c18e1(0x421)]>_0x30b98b&&(_0x101bb9=_0x5c87da,_0x30b98b=_0x2c84ec['hits']);}return _0x101bb9;}function _0x4c292f(_0x48a948){var _0x47691b=_0x586988,_0x3b13fd={'sQTFT':function(_0x2d2cca,_0x543725){var _0x1c56af=_0x576a;return _0x11b6a3[_0x1c56af(0x400)](_0x2d2cca,_0x543725);},'ZIzhy':function(_0x1acdca,_0x4c4892){return _0x1acdca*_0x4c4892;},'dFnQf':function(_0x550c50,_0x1c2172){return _0x550c50+_0x1c2172;},'YypkJ':function(_0x2a904c,_0x25df25){return _0x2a904c+_0x25df25;},'TxjFX':function(_0x41e707,_0x369f6e){return _0x11b6a3['lPvOf'](_0x41e707,_0x369f6e);},'ETBkN':function(_0x331843,_0x54dfae){return _0x11b6a3['jmZBk'](_0x331843,_0x54dfae);},'wVIpl':function(_0x3c35cd,_0x2aef49){return _0x3c35cd/_0x2aef49;},'GFIfM':function(_0x285147,_0x1af6f4){return _0x11b6a3['wWLxj'](_0x285147,_0x1af6f4);}};if(_0x11b6a3['wqNnI']('gyPQH','nkCTT')){if(_0x5e3a46['paren'+'t']&&_0x586bb5[_0x47691b(0x52f)+'t']!==_0x5ec73e)_0xfc7880[_0x47691b(0x52f)+'t'][_0x47691b(0x7ca)+_0x47691b(0xc09)+'e'](_0x143dde,'*');}else{var _0x7e8248=[],_0x403565=_0x5b1b65[_0x47691b(0x78d)+_0x47691b(0xe25)]||[];for(var _0x6add56 in _0x1d9f74){if(_0x47691b(0x871)==='invCu'){var _0x5a183d=_0x21db33[_0x47691b(0x2bf)](_0x3b13fd[_0x47691b(0x3da)](_0x3b13fd[_0x47691b(0x72b)](_0x5f66af[_0x47691b(0x60b)],_0x312555['PI']),-0x1f06+0xed6+0x10e4)/(0x3f*0x4e+-0x1c95+0x965)),_0x23cec3=0xb*0x265+-0xa*-0x166+-0x1*0x2849,_0x35946e=0x1b*-0x2d+-0x1992+0x1e52,_0x295d82=[_0x3b13fd[_0x47691b(0x197)](_0x1a9712[_0x47691b(0x3a2)][0x8cf+0x1*-0x1a6a+0x119b*0x1],_0x3b13fd[_0x47691b(0x72b)](_0x40f5c5[-0xd46*-0x2+0x1*0x21e+-0x1caa],_0x23cec3)),_0x3b13fd['YypkJ'](_0x3b13fd[_0x47691b(0xc8a)](_0x337021['pos'][0x65*0x3d+0x9d7+-0xb*0x315],_0x446ccf[-0x20f1+0x26*-0x2b+-0x2754*-0x1]*_0x23cec3),_0x35946e),_0x2b77a9[_0x47691b(0x3a2)][-0x19*-0x16e+0xf07+-0x32c3]+_0x22148c[0x1*-0xaf3+0x485+0x670]*_0x23cec3],_0x297a4e=_0xd4201b(_0x146d22['pos'],_0x295d82,_0x3ba255,_0x7dfc84[_0x47691b(0x96c)+'s']['h']);if(_0x297a4e){var _0x28cc91=(-0x2*-0x813+0x120+-0xb*0x192+0.5-_0x297a4e['y']/_0x5394a5[_0x47691b(0x96c)+'s']['h'])*(0x15*0x7d+-0x12e8+0x1*0x8a9),_0x52bccf=_0x3b13fd[_0x47691b(0xd24)](_0x35946e,_0x23cec3)/_0x5a183d;_0x14978d['verti'+_0x47691b(0x888)]={'got':_0x40b0a6[_0x47691b(0x2c4)](_0x3b13fd[_0x47691b(0x72b)](_0x28cc91,0x2e*0x6b+-0x25b3+-0x151*-0x11))/(-0x264a+-0x4*-0xe5+-0x269e*-0x1),'want':_0x3b13fd['ETBkN'](_0x4aa88a[_0x47691b(0x2c4)](_0x3b13fd[_0x47691b(0x72b)](_0x52bccf,0x3*0x4bd+0x10*-0x1b0+-0x1*-0x10b1)),0x13e9+0x2e7*0x8+-0x2739),'off':_0x3b13fd[_0x47691b(0xbac)](_0x81bae1[_0x47691b(0x2c4)](_0x3b13fd['GFIfM'](_0x28cc91,_0x52bccf)*(0x8f7+0x1*-0xe59+0x94a)),-0x66e+0x4*0x348+0x1*-0x2ca)};}}else{var _0x15a3a5=_0x1d9f74[_0x6add56];if(!_0x15a3a5[_0x47691b(0x421)])continue;var _0x2f190b=null;for(var _0xdd99bd=0x4cd*-0x8+-0x647*0x6+-0xade*-0x7;_0x11b6a3[_0x47691b(0xc87)](_0xdd99bd,_0x403565[_0x47691b(0x964)+'h']);_0xdd99bd++){if(_0x403565[_0xdd99bd][-0x248+-0xa51+0xc9a]!==_0x47691b(0x4d9))continue;var _0x234c18=_0x5f506b(_0x11b6a3[_0x47691b(0x9ba)](_0x48a948,_0x403565[_0xdd99bd][-0xcdd+-0x11e8+0x1ec5]),_0x47691b(0x4d9));if(typeof _0x234c18===_0x47691b(0x846)+'r'&&Math['abs'](_0x234c18-_0x15a3a5['last'])<0x1a*-0x94+-0xcbb*0x2+0x287e+0.001){_0x2f190b='0x'+_0x403565[_0xdd99bd][0x110f+-0x1f66+-0x1*-0xe57][_0x47691b(0xd0f)+'ing'](0x1b4e*0x1+0xc*0x7e+-0x2126);break;}}_0x7e8248['push']({'name':_0x6add56,'value':_0x15a3a5['last'],'matches':_0x2f190b,'hits':_0x15a3a5[_0x47691b(0x421)],'lo':_0x15a3a5['lo'],'hi':_0x15a3a5['hi'],'travel':_0x15a3a5['lo']===null?0x2114+-0x593+-0x1b81*0x1:_0x11b6a3[_0x47691b(0x400)](Math[_0x47691b(0x2c4)](_0x11b6a3['UgZaS'](_0x15a3a5['hi']-_0x15a3a5['lo'],0x1f8a+0x1b8a+-0x4*0xeac)),0xe26+0x1303+-0x20c5),'jump':Math[_0x47691b(0x2c4)](_0x11b6a3[_0x47691b(0xc10)](_0x15a3a5['jump'],0x100a+0x64+-0x100a))/(-0x5a5+0x12df+-0xcd6),'set':_0x15a3a5['setHi'+'ts']?_0x15a3a5[_0x47691b(0x93a)+'st']:null});}}return _0x7e8248;}}function _0x1f47c6(){var _0x49d5d4=_0x586988;if(_0x11b6a3['VGOEp']===_0x11b6a3[_0x49d5d4(0x97d)]){var _0x1a6c14=_0xf2f264();if(!_0x1a6c14||!_0x1a6c14['mouse'+'Look']){if('jRICe'===_0x11b6a3['GACIa'])return _0x2a40fa['ident'+_0x49d5d4(0x8ff)]=![],_0x2a40fa['why']=_0x11b6a3[_0x49d5d4(0x9d6)],null;else{var _0x47ec9e=_0x2b12aa[-0xe4e*-0x2+0x118+-0x1*0x1db3][_0x49d5d4(0x62a)]();if(_0x47ec9e)_0x4a908b=_0x47ec9e;}}var _0x24b094=parseInt(_0x1a6c14['mouse'+_0x49d5d4(0xe25)],-0x27*0x8e+0x2ad+-0x21d*-0x9);if(_0x27c474!==_0x24b094)_0x27c474=_0x24b094;_0x2a40fa['gette'+'rs']=_0x11b6a3[_0x49d5d4(0x3c9)](_0x4c292f,_0x24b094);var _0x1bc30e=_0x27dfd7(),_0x3146f0=-0x110*0x1b+-0x3b*0x87+-0x1de7*-0x2,_0x32e71e=-0x16dd+0x246a+-0xd33;function _0x5536a5(_0x625b6c){var _0x54f076=_0x49d5d4,_0x3e49cf={'EYdjz':function(_0x3d915d,_0x9cea87){return _0x3d915d+_0x9cea87;},'ilNgv':function(_0x1bfb40,_0x186973,_0x4aaf80,_0x20fe78){return _0x1bfb40(_0x186973,_0x4aaf80,_0x20fe78);},'XRaVT':function(_0x1ec59e,_0x47da8b,_0x5f497f){return _0x1ec59e(_0x47da8b,_0x5f497f);},'DqGgQ':_0x11b6a3[_0x54f076(0xbf9)]};if(_0x11b6a3[_0x54f076(0xcd3)]('hSSNB',_0x11b6a3[_0x54f076(0xba7)])){var _0x45f6fc=(_0x54f076(0x158)+'|5|0|'+_0x54f076(0xd38))['split']('|'),_0x3cf309=-0x1*-0x203c+-0x1c90+0x4*-0xeb;while(!![]){switch(_0x45f6fc[_0x3cf309++]){case'0':_0x198467[_0x54f076(0xc4d)+'al']=!!_0x2676d8&&_0x198467[_0x54f076(0x8aa)]['fps']===_0x3e49cf['EYdjz']('0x',_0x587970['toStr'+_0x54f076(0x3cc)](-0xf80+0x113a+0x3*-0x8e));continue;case'1':if(_0x198467['refs'][_0x54f076(0xa66)+'h']){var _0x47f033=_0x1c0920(_0x198467['refs']['healt'+'h'],0x73*-0x4f+0x1*0x13d5+-0x7dc*-0x2);_0x198467[_0x54f076(0xa66)+'h']=_0x3e49cf['ilNgv'](_0x38fc62,_0x47f033,_0x54f076(0xcbe)+'hScri'+'pt',_0x54f076(0x247));}continue;case'2':var _0x198467=_0x3e49cf['XRaVT'](_0x5191ac,_0x3e49cf['DqGgQ'],_0x14599c[_0x54f076(0x461)]);continue;case'3':_0x198467['hits']=_0x14599c['hits'];continue;case'4':_0x4c0160[_0x54f076(0xd46)+'rs']['push'](_0x198467);continue;case'5':_0x198467['first'+'SeenM'+'s']=_0x14599c[_0x54f076(0xab7)+_0x54f076(0x49e)]-_0x16a335;continue;case'6':var _0x14599c=_0x284975[_0x4e05bc[_0x18b3bb]];continue;}break;}}else return _0x11b6a3[_0x54f076(0x1ee)](_0x625b6c['lo'],null)||_0x625b6c['hi']===null?0x1364+0x1bdb+-0x2f3f:_0x11b6a3['fQzJL'](_0x625b6c['hi'],_0x625b6c['lo']);}var _0x3b1d0a=null;for(var _0x2d82db in _0x1d9f74){var _0x7734a7=_0x1d9f74[_0x2d82db];if(!_0x7734a7[_0x49d5d4(0x421)]||_0x11b6a3['UQmyj'](_0x7734a7['last'],null))continue;if(_0x11b6a3[_0x49d5d4(0x365)](_0x5536a5(_0x7734a7),_0x3146f0))continue;if(_0x11b6a3['Jtlhk'](_0x7734a7[_0x49d5d4(0x92f)],_0x32e71e))continue;var _0x55c8cb=_0x11b6a3['eHetA'](_0x5f506b,_0x27c474+_0x543d7d,_0x49d5d4(0x4d9));if(typeof _0x55c8cb!==_0x11b6a3['gIRNe']||Math['abs'](_0x11b6a3[_0x49d5d4(0x3a4)](_0x7734a7[_0x49d5d4(0x51e)],_0x55c8cb))>=-0x1914+-0x503+0x1*0x1e17+0.001)continue;if(!_0x3b1d0a||_0x7734a7[_0x49d5d4(0x421)]>_0x1d9f74[_0x3b1d0a]['hits'])_0x3b1d0a=_0x2d82db;}var _0xeaa461=null;for(var _0x2c84c0 in _0x1d9f74){if(_0x11b6a3['TEmnC'](_0x11b6a3[_0x49d5d4(0x220)],_0x11b6a3[_0x49d5d4(0xa50)])){if(_0x11b6a3[_0x49d5d4(0x666)](_0x2c84c0,_0x3b1d0a))continue;var _0x3df2be=_0x1d9f74[_0x2c84c0];if(!_0x3df2be[_0x49d5d4(0x421)]||_0x3df2be['last']===null)continue;if(_0x11b6a3[_0x49d5d4(0x660)](_0x5536a5(_0x3df2be),_0x3146f0))continue;if(_0x3df2be['jump']>_0x32e71e)continue;if(_0x3df2be[_0x49d5d4(0x51e)]>=-(-0x18ec+-0x2545+0x3e8b)&&_0x3df2be['last']<=-0x9*0x15d+-0x15d+0xdfc){if(_0x11b6a3['TEmnC'](_0x11b6a3['YKFCW'],_0x11b6a3['IGLft'])){_0xeaa461=_0x2c84c0;break;}else return![];}}else _0x54d9c['remov'+'eItem'](_0x48fd26),_0x50c58e=!![];}_0x2a40fa[_0x49d5d4(0xce3)+_0x49d5d4(0x259)]=_0x3b1d0a,_0x2a40fa['pitch'+'Gette'+'r']=_0xeaa461;var _0x440525,_0x446a44;if(_0x1bc30e&&_0x1bc30e['pitch']!==null)_0x446a44=_0x1bc30e[_0x49d5d4(0x54c)],_0x440525=_0x1bc30e[_0x49d5d4(0x314)],_0x2a40fa[_0x49d5d4(0x6f8)+'e']=_0x11b6a3[_0x49d5d4(0x402)](_0x49d5d4(0x9c9)+'r\x20pai'+'r\x20(',_0x1bc30e[_0x49d5d4(0xb94)])+')';else{if(_0x3b1d0a){if(_0x49d5d4(0x9c1)!==_0x11b6a3[_0x49d5d4(0x67f)])return _0x1969a0['sourc'+'e']=_0x11b6a3[_0x49d5d4(0x4c8)],_0x5c23cd;else _0x440525=_0x1d9f74[_0x3b1d0a][_0x49d5d4(0x51e)],_0x2a40fa[_0x49d5d4(0x6f8)+'e']=_0x11b6a3[_0x49d5d4(0x441)],_0x446a44=_0xeaa461?_0x1d9f74[_0xeaa461]['last']:_0x5f506b(_0x24b094+_0x11e9a5,_0x11b6a3[_0x49d5d4(0x772)]);}else _0x440525=_0x5f506b(_0x11b6a3[_0x49d5d4(0x5af)](_0x24b094,_0x543d7d),'f32'),_0x446a44=_0x5f506b(_0x24b094+_0x11e9a5,_0x11b6a3['Wuxco']),_0x2a40fa[_0x49d5d4(0x6f8)+'e']=_0x49d5d4(0xb9e)+_0x49d5d4(0x966)+'\x20(gue'+_0x49d5d4(0x44e);}_0x2a40fa[_0x49d5d4(0xac6)+'w']=_0x440525,_0x2a40fa[_0x49d5d4(0x3ff)+'tch']=_0x446a44;if(typeof _0x440525!==_0x49d5d4(0x846)+'r'||!_0x11b6a3['aYybJ'](isFinite,_0x440525)||typeof _0x446a44!=='numbe'+'r'||!_0x11b6a3['eAHJc'](isFinite,_0x446a44))return _0x2a40fa[_0x49d5d4(0x189)+'ified']=![],_0x2a40fa[_0x49d5d4(0x297)]='view\x20'+_0x49d5d4(0x9b5)+_0x49d5d4(0xcae)+_0x49d5d4(0x6ce)+'le',null;if(_0x11b6a3[_0x49d5d4(0x745)](_0x446a44,-(-0x70e+0xbe5+-0x47d))||_0x446a44>0x71f*-0x2+-0x2ba+0x6*0x2e3)return _0x2a40fa[_0x49d5d4(0x189)+'ified']=![],_0x2a40fa['why']=_0x11b6a3['QUluX']+Math[_0x49d5d4(0x2c4)](_0x446a44)+_0x11b6a3['aHLAO'],null;return _0x2a40fa[_0x49d5d4(0x297)]='',_0x2a40fa['ident'+_0x49d5d4(0x8ff)]=!![],_0x2a40fa[_0x49d5d4(0x54c)]=_0x446a44,_0x2a40fa[_0x49d5d4(0x314)]=_0x440525,_0x2a40fa;}else _0x11b6a3[_0x49d5d4(0x242)](_0x523755,_0x11b6a3[_0x49d5d4(0x77f)],{'on':_0x5161f8,'factor':_0x11b6a3[_0x49d5d4(0x3c9)](_0x4e1e7e,_0x2daf9a[_0x49d5d4(0xc6d)])||0x5*-0x6aa+0x225e+-0x10b});}function _0x5be73e(_0x23da71,_0x3fd47a,_0x3ef793,_0x151e8e){var _0x1d3ce2=_0x586988,_0x5aec63=_0x11b6a3[_0x1d3ce2(0x7fd)](_0x4c00cd),_0x183c62=null,_0x56da47=_0x23da71,_0x315c49=_0x2f79da['fov'];if(_0x5aec63['basis']){if(_0x11b6a3['oUknM'](_0x11b6a3[_0x1d3ce2(0xdfa)],_0x11b6a3['UOZzj']))_0x3a0437['lg']['textC'+'onten'+'t']=_0x11b6a3[_0x1d3ce2(0x9cf)](_0x11b6a3[_0x1d3ce2(0xc84)](_0x11b6a3[_0x1d3ce2(0x774)](_0x1d3ce2(0x5d5)+_0x37e8d7+'\x20·\x20',_0x303163[_0x1d3ce2(0x2c4)](_0x1e6af0['span'])),'m')+(_0x28eeb7['boxes']?'\x20·\x20fo'+'v\x20'+_0x96815['round'](_0x3f7a76['fov'])+'°':''),_0x1d11b5!==null?_0x11b6a3[_0x1d3ce2(0x869)](_0x1d3ce2(0xad1)+'am',_0x430885):'');else{_0x183c62=_0x5aec63[_0x1d3ce2(0x47b)];if(_0x5aec63[_0x1d3ce2(0x3a2)])_0x56da47=_0x5aec63[_0x1d3ce2(0x3a2)];if(_0x5aec63[_0x1d3ce2(0x60b)]!==null)_0x315c49=_0x5aec63['fov'];}}var _0x35b590,_0x55e14a,_0x45f1ba,_0x59e83b,_0x32a24d,_0x33800d,_0x5d4069,_0x30ae1b,_0x15ffd2;if(_0x183c62){var _0x925b68=(_0x1d3ce2(0x5a3)+_0x1d3ce2(0xd9d)+_0x1d3ce2(0xd37)+'|4')[_0x1d3ce2(0x783)]('|'),_0x4b177d=-0x1f6f+0x13*0x1ae+-0x7b;while(!![]){switch(_0x925b68[_0x4b177d++]){case'0':_0x30ae1b=_0x183c62['up'][0x3d*0x11+-0xc5+-0x347];continue;case'1':_0x32a24d=_0x183c62[_0x1d3ce2(0x264)][0x3*0x351+-0x19a3+0xfb1];continue;case'2':_0x5d4069=_0x183c62['up'][0x19a1+-0x16a+0x1837*-0x1];continue;case'3':_0x59e83b=_0x183c62[_0x1d3ce2(0x264)][0xd9+0x242a+-0x2503*0x1];continue;case'4':_0x15ffd2=_0x183c62['up'][0x1c02+0x4db*-0x2+0x2*-0x925];continue;case'5':_0x55e14a=_0x183c62[_0x1d3ce2(0x178)][-0xb94+0x3*0x2a9+-0x39a*-0x1];continue;case'6':_0x35b590=_0x183c62[_0x1d3ce2(0x178)][0x6a6*0x1+-0x503+0x1*-0x1a3];continue;case'7':_0x45f1ba=_0x183c62[_0x1d3ce2(0x178)][-0x226*0x6+0x6ca+0x61c];continue;case'8':_0x33800d=_0x183c62['right'][0x14b*0x4+0x62*0x3d+-0x32*0x92];continue;}break;}}else{var _0x885b2c=_0x11b6a3[_0x1d3ce2(0x87d)](_0x1f47c6);if(!_0x885b2c)return null;var _0x1feebd=_0x11b6a3[_0x1d3ce2(0x81e)](_0x885b2c[_0x1d3ce2(0x54c)]*Math['PI'],0xb*-0x1e2+0xbbe+0x9ac),_0x4bdbe3=_0x885b2c['yaw']*Math['PI']/(-0x1*-0xae1+0xca+-0xaf7),_0xb625f7=Math[_0x1d3ce2(0x205)](_0x1feebd);_0x35b590=Math['sin'](_0x4bdbe3)*_0xb625f7,_0x55e14a=-Math[_0x1d3ce2(0x97b)](_0x1feebd),_0x45f1ba=_0x11b6a3['XzOdb'](Math['cos'](_0x4bdbe3),_0xb625f7),_0x59e83b=_0x45f1ba,_0x32a24d=-0x246f+0x164c*-0x1+0x3abb,_0x33800d=-_0x35b590,_0x5d4069=_0x55e14a*_0x33800d-_0x45f1ba*_0x32a24d,_0x30ae1b=_0x45f1ba*_0x59e83b-_0x11b6a3[_0x1d3ce2(0xaad)](_0x35b590,_0x33800d),_0x15ffd2=_0x35b590*_0x32a24d-_0x55e14a*_0x59e83b;}var _0x1778a2=_0x3fd47a[-0x4*-0x14+-0x1b*-0xac+0x4*-0x49d]-_0x56da47[-0x25a*-0x7+-0x2203+-0x118d*-0x1],_0x50f822=_0x3fd47a[-0xc19+0x1477+-0x85d]-_0x56da47[-0x174a+-0xd6+0x1821],_0x4ef7b4=_0x3fd47a[-0x1bfc+0x1da8+-0x1aa]-_0x56da47[0x1a*0x3b+0xba*-0x28+0x1714],_0x567d00=_0x1778a2*_0x35b590+_0x50f822*_0x55e14a+_0x11b6a3[_0x1d3ce2(0xd4c)](_0x4ef7b4,_0x45f1ba);if(_0x11b6a3['enLxp'](_0x567d00,-0x15a*-0x6+0x103*0x25+0x83*-0x59+0.05))return null;var _0xa6788c=_0x11b6a3['LEFDm'](_0x11b6a3['bbSZo'](_0x1778a2*_0x59e83b,_0x50f822*_0x32a24d),_0x4ef7b4*_0x33800d),_0x147b04=_0x11b6a3[_0x1d3ce2(0x5a1)](_0x1778a2*_0x5d4069,_0x11b6a3[_0x1d3ce2(0x6b3)](_0x50f822,_0x30ae1b))+_0x4ef7b4*_0x15ffd2,_0x45356a=_0x11b6a3['LTBdw'](_0x3ef793,_0x151e8e),_0x45d558=_0x11b6a3[_0x1d3ce2(0x922)](_0x315c49,Math['PI'])/(-0x12d8+-0x1*-0x16b7+-0x1*0x32b),_0x579745=Math[_0x1d3ce2(0x2bf)](_0x45d558/(0x10*-0xd4+-0x12aa+0x6*0x552)),_0x413ce7=_0xa6788c/_0x567d00/(_0x579745*_0x45356a),_0xbee3bd=_0x147b04/_0x567d00/_0x579745;if(_0x11b6a3['zFtOn'](_0x413ce7,-(-0x7*0x89+0x1367*0x1+0x1*-0xfa7+0.6000000000000001))||_0x11b6a3['jFppU'](_0x413ce7,0x1bb9*0x1+0x1709+-0x32c1+0.6000000000000001)||_0xbee3bd<-(0x13b+-0x4a*0x26+0x9c2+0.6000000000000001)||_0x11b6a3['eUBUk'](_0xbee3bd,-0x26bf+-0x1e1+0x28a1+0.6000000000000001))return null;return{'x':_0x11b6a3['WqVIl'](_0x11b6a3['ZUNaS'](_0x11b6a3[_0x1d3ce2(0x9f0)](_0x413ce7,0x773*0x2+0xc3f+0x1*-0x1b25+0.5),0xa3f*-0x3+-0x157*-0xb+0x1000+0.5),_0x3ef793),'y':(-0x1988+0x11*-0x14a+0x2f72+0.5-_0xbee3bd*(-0x1623+-0x24bf+-0x3ae2*-0x1+0.5))*_0x151e8e,'z':_0x567d00};}var _0x59681c={'open':![],'cat':_0x11b6a3[_0x586988(0x861)],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x4e787b=_0x586988(0x33e)+_0x586988(0x764)+_0x586988(0x912)+_0x586988(0x3a2),_0x1eb154=null,_0x57dde2=[{'id':_0x11b6a3[_0x586988(0x861)],'label':_0x11b6a3[_0x586988(0x77c)]},{'id':_0x586988(0x1cf)+'ls','label':_0x586988(0x717)},{'id':'value'+'s','label':'VAL'},{'id':_0x586988(0x45e),'label':_0x11b6a3[_0x586988(0x4a2)]}],_0x3a1860=_0x11b6a3[_0x586988(0x1b8)](_0x11b6a3[_0x586988(0x697)](_0x11b6a3[_0x586988(0x6ae)](_0x11b6a3['UxGFg'](_0x11b6a3[_0x586988(0xe17)](_0x11b6a3[_0x586988(0x6ae)](_0x11b6a3[_0x586988(0x32c)](_0x11b6a3['pMUHl'](_0x11b6a3[_0x586988(0x58d)](_0x11b6a3[_0x586988(0x20d)](_0x11b6a3['lIqsu'](_0x11b6a3['BDaxm'](_0x11b6a3[_0x586988(0x371)](_0x11b6a3[_0x586988(0x2cd)](_0x11b6a3[_0x586988(0xc1c)](_0x11b6a3['eUvhC'](_0x11b6a3[_0x586988(0xafc)](_0x11b6a3[_0x586988(0x7b8)](_0x11b6a3[_0x586988(0x611)](_0x11b6a3['pbGyO'](_0x11b6a3['YWakm'](_0x11b6a3[_0x586988(0x2fc)](_0x11b6a3[_0x586988(0xa90)](_0x11b6a3['bXQOW'](_0x11b6a3['NXmcT'](_0x11b6a3[_0x586988(0x2df)]('#saku'+'ra-me'+_0x586988(0x8af)+'ot{al'+_0x586988(0x450)+'tial}'+_0x11b6a3[_0x586988(0x84f)],_0x11b6a3[_0x586988(0xb34)])+_0x11b6a3['qQSRi']+(_0x586988(0x5e7)+_0x586988(0x3c0)+_0x586988(0x533)+'0\x201px'+_0x586988(0x497)+'(255,'+'255,2'+_0x586988(0xcd7)+_0x586988(0x692)+'set\x200'+_0x586988(0x355)+'0\x20rgb'+'a(255'+',255,'+_0x586988(0x94b)+_0x586988(0x316)+_0x586988(0xb75)+'\x2080px'+'\x20rgba'+'(0,0,'+'0,.55'+');')+_0x11b6a3['aasLY']+(_0x586988(0xd72)+_0x586988(0xddb)+_0x586988(0x437)+'ont-s'+_0x586988(0xcbf)+_0x586988(0xcc2)+_0x586988(0xdae)+'amily'+_0x586988(0x706)+_0x586988(0x775)+_0x586988(0xb0f)+'\x20UI\x22,'+_0x586988(0xdf7)+'m-ui,'+'sans-'+_0x586988(0x809)+';}'),_0x11b6a3[_0x586988(0xcd8)])+_0x11b6a3['PXFKH'],'borde'+'r-rad'+_0x586988(0xd6a)+_0x586988(0xdbf)+_0x586988(0x1d6)+'ound:'+_0x586988(0x6bc)+_0x586988(0x799)+'55,25'+'5,.02'+_0x586988(0x700)+_0x586988(0x806)+'dow:i'+_0x586988(0x982)+_0x586988(0x5c8)+_0x586988(0x355)+'rgba('+'255,2'+_0x586988(0x187)+'5,.05'+_0x586988(0x956))+('.mn-l'+'ogo{d'+'ispla'+_0x586988(0x59f)+_0x586988(0x260)+'ce-it'+_0x586988(0x518)+'enter'+_0x586988(0xc62)+_0x586988(0x49b)+'x;hei'+'ght:3'+'2px;m'+'argin'+_0x586988(0x4fb)+'om:6p'+_0x586988(0xd08))+_0x11b6a3['VLRbo']+(_0x586988(0x606)+'ab{di'+'splay'+_0x586988(0x1fe)+_0x586988(0x811)+_0x586988(0xce2)+_0x586988(0x2b0)+_0x586988(0x2f5)+_0x586988(0x3f9)+_0x586988(0x3de)+'ntent'+_0x586988(0x1f1)+'er;wi'+_0x586988(0x39b)+_0x586988(0xaa6)+'eight'+_0x586988(0xc34)+';bord'+_0x586988(0x274)+_0x586988(0x6d7)+_0x586988(0x2ef)+'ius:1'+_0x586988(0xd33))+(_0x586988(0x6f3)+_0x586988(0x2c4)+_0x586988(0xaf4)+_0x586988(0x865)+'nt;co'+_0x586988(0x995)+_0x586988(0x9b6)+_0x586988(0xd12)+_0x586988(0xc5d)+_0x586988(0x272)+_0x586988(0x31f)+_0x586988(0x9b8)+'nter;'+_0x586988(0xb81)+_0x586988(0x172)+'10px;'+_0x586988(0xb81)+'weigh'+_0x586988(0xdb7)+';font'+'-fami'+_0x586988(0x407)+_0x586988(0x675)+';}'),_0x586988(0x606)+_0x586988(0x71e)+_0x586988(0x677)+_0x586988(0xc97)+_0x586988(0x6bc)+_0x586988(0xd0d)+_0x586988(0x64c)+'2,.8)'+';}'),_0x586988(0x606)+'ab.ac'+_0x586988(0xa5a)+_0x586988(0xd72)+':#ff6'+'b9d;b'+_0x586988(0x1d6)+_0x586988(0x2d6)+'rgba('+'255,1'+'07,15'+'7,.1)'+';}')+(_0x586988(0x95d)+'ain{f'+_0x586988(0xa81)+';min-'+'width'+_0x586988(0xad0)+_0x586988(0x445)+_0x586988(0x1fe)+_0x586988(0x1a5)+'-dire'+_0x586988(0x57b)+_0x586988(0x7d0)+'mn;}')+('.mn-t'+_0x586988(0x26a)+_0x586988(0x445)+':flex'+';alig'+_0x586988(0xce2)+_0x586988(0x2b0)+'nter;'+_0x586988(0x582)+_0x586988(0x1be)+_0x586988(0x768)+_0x586988(0x7bc)+_0x586988(0x30a)+_0x586988(0x5dc)+_0x586988(0x368)+_0x586988(0xa9d)+_0x586988(0x6a1)+_0x586988(0x992)),_0x11b6a3[_0x586988(0x8d3)]),'.mn-h'+'{font'+'-size'+_0x586988(0x72f)+';font'+_0x586988(0x6df)+_0x586988(0x763)+'0;}'),_0x586988(0x50d)+_0x586988(0x8a4)+_0x586988(0x1f5)+_0x586988(0x66c)+'px;op'+_0x586988(0x2e9)+':.4;}'),_0x11b6a3['aitcl'])+_0x11b6a3[_0x586988(0x5e4)]+_0x11b6a3[_0x586988(0x4c0)]+(_0x586988(0xe21)+'lose\x20'+_0x586988(0x1e3)+'idth:'+_0x586988(0x7cf)+_0x586988(0xdf8)+_0x586988(0x3fc)+'x;fil'+_0x586988(0x762)+_0x586988(0x2c5)+'oke:c'+'urren'+'tColo'+_0x586988(0xa58)+_0x586988(0x426)+'idth:'+_0x586988(0x4d0)+_0x586988(0x687)+_0x586988(0xd53)+'p:rou'+_0x586988(0x340)),_0x11b6a3[_0x586988(0xb9d)]),_0x11b6a3[_0x586988(0x7a5)]),'.mn-c'+_0x586988(0x7b6)+'-webk'+'it-sc'+'rollb'+'ar{wi'+_0x586988(0xaeb)+'px;}'),_0x11b6a3[_0x586988(0xb5a)]),_0x586988(0x95f)+_0x586988(0xa41)+_0x586988(0xb94)+_0x586988(0x6aa)+_0x586988(0x428)+_0x586988(0x60d)+_0x586988(0x896)+_0x586988(0x6d2)+_0x586988(0x9b6)+_0x586988(0x187)+'5,255'+_0x586988(0x64f)+_0x586988(0x244)+_0x586988(0xb72)+_0x586988(0x517)+_0x586988(0xdb3)+_0x586988(0xc51)+_0x586988(0xa46)+'gba(2'+'55,25'+_0x586988(0x803)+',.05)'+';}'),_0x11b6a3[_0x586988(0x99b)])+(_0x586988(0x95f)+_0x586988(0x580)+_0x586988(0x2e1)+'ispla'+_0x586988(0x96e)+_0x586988(0xb0d)+_0x586988(0x313)+'ems:c'+'enter'+';gap:'+_0x586988(0x590)+'addin'+_0x586988(0xd67)+_0x586988(0xaef)+_0x586988(0xd08))+_0x11b6a3['UORST']+_0x11b6a3[_0x586988(0xc85)]+('.sk-c'+_0x586988(0x6ad)+_0x586988(0x5a8)+_0x586988(0x6c1)+_0x586988(0xd75)+'e\x20str'+_0x586988(0xb18)+_0x586988(0xc97)+'#fff0'+'f5;}')+_0x11b6a3[_0x586988(0xa3d)],_0x586988(0xe08)+_0x586988(0x321)+_0x586988(0xb81)+'size:'+_0x586988(0xd68)+_0x586988(0x8b3)+_0x586988(0x983)+_0x586988(0x925)+_0x586988(0x575)+'ttom:'+'6px;w'+'hite-'+'space'+_0x586988(0x6fb)+_0x586988(0xdbb)+'}'),'.sk-c'+'tl{di'+_0x586988(0x445)+_0x586988(0x1fe)+';alig'+_0x586988(0xce2)+_0x586988(0x2b0)+'nter;'+_0x586988(0x7e6)+'px;pa'+_0x586988(0x938)+':4px\x20'+_0x586988(0x482)+_0x586988(0x4b9)+'e:11.'+_0x586988(0x781))+_0x11b6a3['VHWQJ']+_0x11b6a3[_0x586988(0x409)]+(_0x586988(0xaaa)+'witch'+_0x586988(0xa0c)+'tion:'+_0x586988(0x1cc)+_0x586988(0x39f)+'idth:'+'26px;'+_0x586988(0xdf8)+_0x586988(0x3fc)+'x;bor'+_0x586988(0xce0)+_0x586988(0x201)+'er-ra'+'dius:'+'99px;'+_0x586988(0x6f3)+_0x586988(0x2c4)+_0x586988(0xc17)+'(255,'+'255,2'+'55,.0'+_0x586988(0x5d2)+_0x586988(0x6e0)+_0x586988(0x210)+'er;fl'+'ex:no'+_0x586988(0x662))+_0x11b6a3['Amior'],_0x586988(0x6f3)+_0x586988(0x2c4)+':rgba'+_0x586988(0x535)+'255,2'+_0x586988(0xbe3)+_0x586988(0x9d4)+_0x586988(0x4d1)+_0x586988(0x3e2)+_0x586988(0xc99)+_0x586988(0x399)+_0x586988(0x896)+_0x586988(0xdc1)+_0x586988(0x30c))+(_0x586988(0xaaa)+_0x586988(0x9d8)+_0x586988(0xb14)+'-chec'+_0x586988(0x932)+_0x586988(0x3b2)+_0x586988(0xc2e)+_0x586988(0x981)+'nd:rg'+'ba(25'+_0x586988(0x50f)+_0x586988(0x7bb)+'.25);'+'}')+(_0x586988(0xaaa)+_0x586988(0x9d8)+_0x586988(0xb14)+'-chec'+_0x586988(0x932)+'true\x22'+_0x586988(0x800)+'ter{l'+'eft:1'+_0x586988(0x829)+'ackgr'+'ound:'+'#ff6b'+_0x586988(0x73e)),'.sk-r'+_0x586988(0xb05)+_0x586988(0xa26)+'ay:fl'+'ex;al'+'ign-i'+_0x586988(0x2d3)+'cente'+'r;gap'+':8px;'+'}')+(_0x586988(0xaaa)+_0x586988(0x2b7)+_0x586988(0x68f)+_0x586988(0x301)+_0x586988(0x7b5)+_0x586988(0x81f)+'none;'+_0x586988(0xcd4)+_0x586988(0xd59)+_0x586988(0x293)+';widt'+_0x586988(0x6cd)+_0x586988(0x78c)+_0x586988(0xb12)+'px;ba'+_0x586988(0x896)+_0x586988(0x80e)+_0x586988(0x4df)+_0x586988(0x91b)+';}'),_0x11b6a3['ihwYv']),'backg'+'round'+':line'+'ar-gr'+_0x586988(0x463)+_0x586988(0x59a)+'6b9d,'+_0x586988(0x6ea)+_0x586988(0xdf9)+_0x586988(0x4b5)+'var(-'+_0x586988(0x326)+_0x586988(0xd76)+_0x586988(0x1f7)+_0x586988(0x4d5)+_0x586988(0x7aa)+_0x586988(0x849)+'5,255'+',255,'+'.08);'+'}')+(_0x586988(0xaaa)+'lider'+_0x586988(0x619)+_0x586988(0x436)+'slide'+_0x586988(0x69f)+_0x586988(0xd0c)+_0x586988(0x75c)+'-appe'+_0x586988(0xdf5)+_0x586988(0x28c)+'e;wid'+'th:6p'+_0x586988(0x78c)+_0x586988(0x50c)+'px;ma'+'rgin-'+'top:-'+_0x586988(0x93b)+'order'+_0x586988(0x6aa)+'us:50'+_0x586988(0xb54)+_0x586988(0x981)+_0x586988(0x4e7)+'f6b9d'+';}')+_0x11b6a3[_0x586988(0x32e)],'.sk-n'+_0x586988(0x354)+'ont-s'+_0x586988(0xcbf)+_0x586988(0x84d)+_0x586988(0xc97)+'rgba('+'246,2'+_0x586988(0x64c)+_0x586988(0x545)+_0x586988(0x907)+_0x586988(0x1ae)+_0x586988(0x940)+'white'+_0x586988(0x608)+_0x586988(0xb1f)+_0x586988(0x704)+';}'),_0x11b6a3['OVTTe']),_0x586988(0x6d8)+_0x586988(0x8bd)+_0x586988(0xb11)+_0x586988(0xa8b)+'lex-s'+_0x586988(0xb4a)+'borde'+'r:0;b'+'order'+'-radi'+_0x586988(0x494)+_0x586988(0xa80)+'ding:'+'8px\x201'+'6px;b'+'ackgr'+'ound:'+_0x586988(0x6ea)+_0x586988(0x816)+_0x586988(0x449)+'fff;')+_0x11b6a3[_0x586988(0x9ff)],_0x586988(0x6d8)+_0x586988(0x596)+'ver{f'+'ilter'+':brig'+_0x586988(0x87b)+_0x586988(0xad6)+_0x586988(0x956)),_0x586988(0x336)+'re{fo'+'nt:11'+_0x586988(0x5b1)+'5\x20ui-'+'monos'+'pace,'+_0x586988(0x2ba)+'las,m'+_0x586988(0xc4f)+'ace;w'+_0x586988(0xd2c)+_0x586988(0x23b)+_0x586988(0x6fb)+'wrap;'+'word-'+'break'+':brea'+_0x586988(0xb3c)+_0x586988(0x1dd)+'gin:0'+_0x586988(0x819)+_0x586988(0x8cb)+'75;ma'+_0x586988(0xc31)+'ght:2'+_0x586988(0x2ed)+_0x586988(0x2c8)+_0x586988(0x6e1)+_0x586988(0x18d))+_0x11b6a3[_0x586988(0x470)]+(_0x586988(0x4e0)+'ition'+_0x586988(0xa9b)+'ity\x20.'+'2s;po'+'inter'+_0x586988(0x789)+_0x586988(0x6b7)+_0x586988(0x908)+_0x586988(0xba2)+_0x586988(0x1f2)+_0x586988(0x281)+_0x586988(0x7ed)+'\x204px\x20'+'rgba('+'255,1'+'07,15'+_0x586988(0xb5b)+');}'),_0x2e6ca1=_0x11b6a3['bmeOF'](_0x11b6a3[_0x586988(0xb4e)]+(_0x586988(0xbd4)+_0x586988(0xb88)+'\x22\x20str'+_0x586988(0x7f8)+_0x586988(0x6ea)+_0x586988(0x9f9)+'troke'+_0x586988(0x1f9)+_0x586988(0x2d2)+_0x586988(0xae3)+_0x586988(0x474)+'necap'+_0x586988(0xc50)+_0x586988(0x591)+_0x586988(0x498)+_0x586988(0x7ba)+'join='+'\x22roun'+_0x586988(0x212)),_0x586988(0x913)+_0x586988(0x94e)+_0x586988(0x457)+_0x586988(0x248)+'10\x22\x20r'+_0x586988(0x42b)+_0x586988(0x955)+_0x586988(0x419)+'f6b9d'+_0x586988(0xc81)+_0x586988(0x9d7)),_0x49d532=_0x11b6a3['sxqHq'](_0x586988(0x4f4)+_0x586988(0x1bc)+'=\x22mn-'+_0x586988(0x15e)+_0x586988(0x4a8)+_0x586988(0xcb0)+'ox=\x220'+_0x586988(0xa68)+'\x2024\x22>'+_0x586988(0xcd2)+'\x20d=\x22M'+_0x586988(0x447)+'c-1.5'+_0x586988(0xcdc)+_0x586988(0x8df)+'-4-7.'+_0x586988(0xb6e)+_0x586988(0x7a9)+_0x586988(0x867)+_0x586988(0x80f)+_0x586988(0x53a)+_0x586988(0xc76)+'5c0\x203'+_0x586988(0xc4b)+_0x586988(0xdb9)+_0x586988(0xa98)+('fill='+'\x22none'+_0x586988(0xba9)+'oke=\x22'+_0x586988(0x6ea)+'9d\x22\x20s'+_0x586988(0x498)+_0x586988(0x1f9)+_0x586988(0x5f9)+_0x586988(0x862)+'roke-'+'linec'+'ap=\x22r'+'ound\x22'+_0x586988(0xae3)+'ke-li'+_0x586988(0x333)+_0x586988(0x621)+_0x586988(0x9a4)+'>'),_0x11b6a3[_0x586988(0xdb4)]);function _0x892466(_0x54b4bd,_0x1c8248,_0x139669){var _0x19b306=_0x586988,_0x231cce=document[_0x19b306(0xcfa)+_0x19b306(0xc89)+_0x19b306(0x1e5)](_0x54b4bd);if(_0x1c8248)_0x231cce[_0x19b306(0x1bc)+_0x19b306(0x466)]=_0x1c8248;if(_0x139669!=null)_0x231cce['inner'+'HTML']=_0x139669;return _0x231cce;}function _0x6023b(_0x9ae4dc,_0x549dd7){var _0x1e91de=_0x586988,_0x19cb8a=_0x11b6a3[_0x1e91de(0x24d)](_0x892466,'div','sk-ca'+'rd'+(_0x549dd7?'\x20on':'')),_0x89e38d=_0x11b6a3[_0x1e91de(0x182)](_0x892466,'div',_0x11b6a3[_0x1e91de(0xd01)]),_0x1cca1e=_0x892466(_0x1e91de(0xb2f),_0x1e91de(0xc61)+_0x1e91de(0x6d9)+_0x1e91de(0xb39),_0x11b6a3[_0x1e91de(0xa61)]+_0x9ae4dc+(_0x1e91de(0x618)+'ong>'));_0x89e38d['appen'+_0x1e91de(0x432)+'d'](_0x1cca1e);var _0x3f9e33=_0x892466(_0x1e91de(0xb2f),_0x11b6a3[_0x1e91de(0x7b3)]);return _0x19cb8a[_0x1e91de(0x927)+'dChil'+'d'](_0x89e38d),_0x19cb8a[_0x1e91de(0x927)+'dChil'+'d'](_0x3f9e33),_0x19cb8a['body']=_0x3f9e33,_0x19cb8a['head']=_0x1cca1e,_0x19cb8a;}function _0x6959ae(_0xf5934b,_0x321784){var _0x333db3=_0x586988,_0x55d384={'vwkCS':function(_0x5c9f9b,_0x5b5daa,_0x86d1f9){return _0x5c9f9b(_0x5b5daa,_0x86d1f9);}},_0xf0807b=_0x11b6a3[_0x333db3(0x5de)](_0x892466,_0x11b6a3[_0x333db3(0x60c)],_0x333db3(0x46a)+'itch');_0xf0807b['type']='butto'+'n';var _0x20d5e2=function(){var _0x485732=_0x333db3;if(_0x11b6a3[_0x485732(0xb5e)](_0x11b6a3[_0x485732(0x4ad)],_0x11b6a3[_0x485732(0xbe9)])){var _0x4742a6=_0x4a0912[_0x485732(0x783)]('+');_0x475089=_0x5e0427(_0x17bd63,_0x4742a6[0x21ba+0x98e+-0x2b48][_0x485732(0x51a)+'Of'](_0x485732(0xcbe)+'h')===0x1ff3*-0x1+-0x4b9*0x2+0x1*0x2965?'Healt'+_0x485732(0x82a)+'pt':_0x485732(0xb78)+'ntrol'+_0x485732(0x24a),_0x55d384[_0x485732(0x67e)](_0x567245,_0x4742a6[-0x1aa2+0x15d*-0x8+0x258b*0x1],-0x1de1+-0x3*-0x1b7+0x45*0x5c));}else _0xf0807b[_0x485732(0xad9)+_0x485732(0x328)+'te']('aria-'+_0x485732(0x3db)+'ed',_0x11b6a3['QKVDb'](_0xf5934b)?_0x11b6a3[_0x485732(0x323)]:_0x485732(0x17f));};return _0xf0807b[_0x333db3(0x576)+'ck']=function(){_0x321784(!_0xf5934b()),_0x11b6a3['BoIYq'](_0x20d5e2);},_0x11b6a3[_0x333db3(0x215)](_0x20d5e2),_0xf0807b['sync']=_0x20d5e2,_0x59681c[_0x333db3(0x3d8)]['push'](_0x20d5e2),_0xf0807b;}function _0x2b067d(_0x46059f,_0x922bc7,_0x9dcc29,_0x1f9704,_0x2b160d){var _0x1a98cf=_0x586988,_0x5d9a9a=_0x892466(_0x1a98cf(0xb2f),_0x11b6a3['YUHhr']),_0xb70ab2=document['creat'+_0x1a98cf(0xc89)+'ent'](_0x1a98cf(0xcf6));_0xb70ab2[_0x1a98cf(0x55a)]=_0x11b6a3['HFsHH'],_0xb70ab2['class'+'Name']=_0x1a98cf(0x967)+_0x1a98cf(0xbff),_0xb70ab2['min']=String(_0x46059f),_0xb70ab2[_0x1a98cf(0xd62)]=String(_0x922bc7),_0xb70ab2[_0x1a98cf(0xb35)]=String(_0x9dcc29);var _0x495ec1=_0x11b6a3[_0x1a98cf(0xb24)](_0x892466,_0x11b6a3[_0x1a98cf(0xd02)],'sk-va'+'l'),_0xaaf000=function(){var _0x19fd0e=_0x1a98cf;if(_0x11b6a3[_0x19fd0e(0xbeb)]!==_0x11b6a3[_0x19fd0e(0x28a)]){var _0x8d3045=_0x11b6a3[_0x19fd0e(0x641)](_0x1f9704);_0xb70ab2['value']=String(_0x8d3045),_0x495ec1['textC'+_0x19fd0e(0xa15)+'t']=(_0x9dcc29<-0x12a7+0x2601+-0x1*0x1359?_0x8d3045['toFix'+'ed'](0x1*0x106a+-0x1a3c+0x1f7*0x5):_0x11b6a3[_0x19fd0e(0x83e)](String,Math[_0x19fd0e(0x2c4)](_0x8d3045)))+(_0xb70ab2['datas'+'et'][_0x19fd0e(0x15a)]||'');var _0x548cfc=_0x11b6a3['DVNMB'](_0x8d3045-_0x46059f,_0x11b6a3[_0x19fd0e(0xb67)](_0x922bc7,_0x46059f))*(0x9a*0x35+0x6e5+0x1f*-0x13d);_0xb70ab2['style']['setPr'+_0x19fd0e(0xafe)+'y'](_0x11b6a3['zFXmR'],_0x11b6a3['RjOSG'](_0x548cfc,'%'));}else return _0x4aa4df[_0x19fd0e(0x189)+_0x19fd0e(0x8ff)]=![],_0x32e0e0[_0x19fd0e(0x297)]=_0x19fd0e(0x54c)+'\x20'+_0xb6e418['round'](_0x1a14c8)+('\x20out\x20'+_0x19fd0e(0xb98)+_0x19fd0e(0x28e)),null;};return _0xb70ab2[_0x1a98cf(0x5b3)+'ut']=function(){var _0x1b39b5=_0x1a98cf,_0x1af32c={'QGacf':function(_0x3a704b,_0x293849){return _0x3a704b(_0x293849);}};if(_0x1b39b5(0x398)===_0x11b6a3[_0x1b39b5(0xd74)])_0x11b6a3[_0x1b39b5(0x2de)](_0x2b160d,_0x11b6a3['YIsGf'](parseFloat,_0xb70ab2[_0x1b39b5(0xc6d)])||_0x46059f),_0x11b6a3['PtlGy'](_0xaaf000);else try{return _0x42d058();}catch(_0x521145){return{'err':_0x1af32c[_0x1b39b5(0xaba)](_0x52b24e,_0x521145&&_0x521145['messa'+'ge']),'stack':_0x1740ab(_0x521145&&_0x521145[_0x1b39b5(0x62d)])};}},_0x5d9a9a['appen'+'dChil'+'d'](_0xb70ab2),_0x5d9a9a[_0x1a98cf(0x927)+'dChil'+'d'](_0x495ec1),_0x5d9a9a['sync']=_0xaaf000,_0x5d9a9a['input']=_0xb70ab2,_0x11b6a3[_0x1a98cf(0x71f)](_0xaaf000),_0x59681c[_0x1a98cf(0x3d8)]['push'](_0xaaf000),_0x5d9a9a;}function _0x36fb5a(_0x247c7f,_0x5133ef){var _0x555afc=_0x586988,_0x4446e3=_0x892466(_0x11b6a3['ACScM'],_0x11b6a3[_0x555afc(0x727)]),_0x1dadcc=_0x892466(_0x11b6a3[_0x555afc(0x5be)],_0x11b6a3['vmbRv'],_0x247c7f+(_0x5133ef?_0x11b6a3[_0x555afc(0xd99)](_0x555afc(0x42f)+'\x20clas'+_0x555afc(0x94c)+_0x555afc(0xab4)+'\x27>',_0x5133ef)+('</spa'+'n>'):''));return _0x4446e3[_0x555afc(0x927)+'dChil'+'d'](_0x1dadcc),_0x4446e3;}function _0x2bdc0e(_0x4ad011,_0x1d60ef,_0x532c44,_0x279354){var _0x1e44a5=_0x586988,_0x1b91cc={'thrza':function(_0x1d46e7,_0x50c9f3){return _0x1d46e7(_0x50c9f3);},'Sojrv':'camer'+_0x1e44a5(0x8be)+'nsfor'+'m'},_0xaa0b1c=_0x4ad011&&_0x4ad011[_0x1e44a5(0x89b)+'y']&&_0x4ad011['surve'+'y'][_0x1d60ef];if(!_0xaa0b1c)return'-';for(var _0x2d2741=0xf85+0x262b+-0x2*0x1ad8;_0x2d2741<_0xaa0b1c[_0x1e44a5(0x964)+'h'];_0x2d2741++){if(_0x11b6a3['RBnfq'](_0x11b6a3['NyBgr'],'dAANP'))return _0x4461a0[_0x1e44a5(0xd2b)]=_0x314d67,_0x4dd97a[_0x1e44a5(0x47b)]=_0x1b91cc[_0x1e44a5(0xbe5)](_0x223525,_0x294729),_0x3e33f8['ok']=!![],_0x1bf3e2[_0x1e44a5(0x297)]='',_0x3f8014[_0x1e44a5(0x6f8)+'e']=_0x1b91cc['Sojrv'],_0x53c8a2;else{if(_0xaa0b1c[_0x2d2741]['o']===_0x532c44){if(_0x11b6a3['NgOMF'](_0x279354,'v3')){var _0x5e5dda=_0xaa0b1c[_0x2d2741]['xyz']||[_0xaa0b1c[_0x2d2741]['v'],-0x39d+0x1c8+0x43*0x7,0x3c3*0x7+-0x10b4+0x11*-0x91];return _0x5e5dda[_0x1e44a5(0x2dd)](function(_0x5ea887){var _0x27a782=_0x1e44a5,_0x5ca59f={'gzvio':function(_0x33a9b8,_0x1673ec){return _0x33a9b8+_0x1673ec;},'aYDvW':function(_0x178db8,_0x2c0498){var _0xe3f551=_0x576a;return _0x11b6a3[_0xe3f551(0xa60)](_0x178db8,_0x2c0498);}};if(_0x11b6a3['IKtFo']('anpmU',_0x27a782(0xc73)))return Math[_0x27a782(0x2c4)](_0x11b6a3['imUFG'](_0x5ea887,0x1cef+-0x4a3*0x7+-0x1*-0x3ea))/(-0xba1*-0x2+0x576+0xc4*-0x25);else{var _0x11d8da=_0x4f91db(_0x159197['eye'],[_0x68d10['eye'][-0x18cc+-0x262+0x1b2e],_0x51f600[_0x27a782(0xda1)][0x1494+-0x15a8+0x115]+(0xf41*-0x1+-0x1949+-0x31*-0xd4),_0x26323c['eye'][0x736+-0x2676+0x1f42]+(0x1*-0x25d9+-0x1*-0xf24+0x16bf)],0x9b7+0x1263+0x1832*-0x1,-0x10a2*0x1+-0x11dc+-0x3d7*-0xa);if(_0x11d8da)_0x456ae1=_0x11d8da['y']/(-0x1a1d+-0x67*-0x46+0x1db);var _0x15fbae=_0xc75062(_0x451095['eye'],[_0x339f01[_0x27a782(0xda1)][0xaff*-0x1+0x15ae+-0xaaf],_0x28b0ee[_0x27a782(0xda1)][-0x3ab*0xa+0x40e*0x3+0x1885]-(-0x648+0xa1b+-0x3c9),_0x5ca59f['gzvio'](_0x167f02[_0x27a782(0xda1)][-0x1fc5+0x207a*-0x1+0x4041],-0xfb9*0x2+-0x1b5d+0x3ad9)],0x1*0x1a26+0x53*-0x5+-0x149f,0x1*-0xc3f+0x14ed+-0x4c6);if(_0x15fbae)_0x548e0a=_0x5ca59f[_0x27a782(0x8d5)](_0x15fbae['y'],0x18d5+-0x2391+0xea4);}})[_0x1e44a5(0xd89)]('\x20\x20');}var _0x84fd57=_0xaa0b1c[_0x2d2741]['v'];return typeof _0x84fd57==='numbe'+'r'?_0x11b6a3[_0x1e44a5(0x3f0)](Math['round'](_0x84fd57*(-0x1*-0x2519+-0x1cab+-0x486)),0xcf5+-0x79c+-0x171):_0x11b6a3[_0x1e44a5(0x685)](String,_0x84fd57);}}}return'-';}function _0x5a646a(_0x553827){var _0x429147=_0x586988,_0x1ef8f1={'QhQRW':_0x429147(0x33e)+_0x429147(0x764)+_0x429147(0xd5c)+'b','IDanJ':function(_0x363f19,_0x3827d8){return _0x363f19+_0x3827d8;},'yEXeI':_0x429147(0x6f3)+_0x429147(0x2c4)+_0x429147(0xc17)+'(21,1'+_0x429147(0xd94)+'.9);b'+_0x429147(0xb94)+':1px\x20'+_0x429147(0x180)+'\x20rgba'+_0x429147(0x535)+_0x429147(0x48d)+'77,.5'+_0x429147(0x8c4)+_0x429147(0xa18),'yhwPr':_0x11b6a3[_0x429147(0xa8a)],'ZWWAz':'sakur'+'a','nDPEU':function(_0xbe8815,_0x30b095){return _0x11b6a3['JWPqz'](_0xbe8815,_0x30b095);},'XLfNY':function(_0x644bd4,_0x383398){var _0xd0ff3b=_0x429147;return _0x11b6a3[_0xd0ff3b(0x584)](_0x644bd4,_0x383398);},'MQmbg':_0x11b6a3[_0x429147(0xd11)],'bsHTn':_0x429147(0x55d),'fhwIm':function(_0x2c8604){var _0x2a9bd7=_0x429147;return _0x11b6a3[_0x2a9bd7(0x2bb)](_0x2c8604);},'IuoSJ':function(_0x3a4ffa,_0x3203a1){var _0x103146=_0x429147;return _0x11b6a3[_0x103146(0x4dc)](_0x3a4ffa,_0x3203a1);},'dDVRv':_0x11b6a3[_0x429147(0x978)],'DpRlM':_0x429147(0x357),'dLIlN':function(_0x522b1b,_0x57c60a){return _0x522b1b/_0x57c60a;},'hxALq':_0x11b6a3['LyUMI'],'wBWJP':_0x11b6a3['LLmzW'],'dJBbV':_0x11b6a3['Xuvhg'],'QuYSN':function(_0x473ce2,_0x5bde3f){return _0x473ce2+_0x5bde3f;},'wnOBk':function(_0x8e78d5,_0x4f27f1){return _0x8e78d5+_0x4f27f1;},'gMOSL':'uFavn'},_0x5801ef=_0x1eb154,_0x243f22=[],_0xaeba58;if(_0x553827===_0x11b6a3[_0x429147(0x861)]){var _0x3333af=_0x11b6a3[_0x429147(0xbc7)](_0x6023b,'Speed'+_0x429147(0xb9c),_0x3b07fd['on']),_0x5409ef=_0x11b6a3[_0x429147(0x9fb)](_0x892466,_0x429147(0xb2f),'sk-md'+_0x429147(0x39c),_0x3b07fd['on']?'x'+_0x3b07fd[_0x429147(0x7f0)+'r']['toFix'+'ed'](0x2150+-0x8*0x3cd+-0x2e7)+_0x11b6a3['TYofy']+_0x18199f['lengt'+'h']+(_0x429147(0x5e1)+_0x429147(0xe0f))+_0x130698+(_0x429147(0xa9c)+'es'):_0x11b6a3[_0x429147(0x8c3)]),_0x1a5c06=_0x11b6a3[_0x429147(0x794)](_0x36fb5a,_0x11b6a3[_0x429147(0xdf6)]);_0x1a5c06[_0x429147(0x927)+_0x429147(0x432)+'d'](_0x6959ae(function(){return _0x3b07fd['on'];},function(_0x335fd0){var _0x583010=_0x429147;_0x1cbf32(_0x335fd0,_0x3b07fd['facto'+'r']),_0x5409ef[_0x583010(0x4fc)+'onten'+'t']=_0x335fd0?_0x11b6a3[_0x583010(0xc22)](_0x11b6a3['rLoUF'](_0x11b6a3[_0x583010(0x9e1)]('x'+_0x3b07fd['facto'+'r'][_0x583010(0xd34)+'ed'](-0x20ec+0x1b24+0x5c9*0x1),_0x11b6a3[_0x583010(0x408)]),_0x18199f[_0x583010(0x964)+'h'])+('\x20fiel'+_0x583010(0xe0f)),_0x130698)+(_0x583010(0xa9c)+'es'):_0x11b6a3[_0x583010(0x8c3)];})),_0x3333af[_0x429147(0x300)][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x5409ef),_0x3333af[_0x429147(0x300)][_0x429147(0x927)+'dChil'+'d'](_0x1a5c06);var _0x236f5a=_0x11b6a3[_0x429147(0xcbd)](_0x2b067d,-0x9eb+-0xbb*-0x2f+-0x1869,-0x11*-0x22+0x5*0x1be+0x1*-0xaf3,-0x3*-0x2bd+0x1*0x25ea+-0x2e21+0.5,function(){var _0xead7b8=_0x429147;return _0x3b07fd[_0xead7b8(0x7f0)+'r'];},function(_0x3a0cfe){_0x1cbf32(_0x3b07fd['on'],_0x3a0cfe);});_0x236f5a['input'][_0x429147(0x276)+'et']['unit']='x';var _0x550f4f=_0x11b6a3['RAuCW'](_0x36fb5a,_0x11b6a3['dSPLO'],_0x429147(0x58f)+_0x429147(0x959)+_0x429147(0x74a)+_0x429147(0xddf)+'is');_0x550f4f[_0x429147(0x927)+_0x429147(0x432)+'d'](_0x236f5a),_0x3333af[_0x429147(0x300)]['appen'+_0x429147(0x432)+'d'](_0x550f4f);if(_0x4e6b9b[_0x429147(0x964)+'h']){var _0x16f1ff=_0x892466(_0x429147(0xb2f),'sk-no'+'te',_0x11b6a3['XsMEu'](_0x429147(0x2c0)+_0x429147(0x83c),_0x4e6b9b['slice'](-0x23ef+0x22*0x82+0x12ab,-0x1e21+-0x180*0x8+0x2a25)[_0x429147(0x2dd)](function(_0x3eb969){var _0x4c94bc=_0x429147;if(_0x4c94bc(0x4c7)===_0x4c94bc(0xd13)){var _0x205f9b={'btwcW':function(_0x56355c){return _0x56355c();}},_0x3cb067=_0x3d4dab['creat'+'eElem'+_0x4c94bc(0x1e5)]('div');_0x3cb067['id']=_0x1ef8f1[_0x4c94bc(0x5f8)],_0x3cb067[_0x4c94bc(0x3d2)][_0x4c94bc(0xba1)+'xt']=_0x1ef8f1['IDanJ'](_0x1ef8f1[_0x4c94bc(0x2ce)]('posit'+_0x4c94bc(0x985)+'ixed;'+_0x4c94bc(0x7a1)+'12px;'+_0x4c94bc(0x751)+_0x4c94bc(0x3f1)+'-inde'+_0x4c94bc(0x38b)+_0x4c94bc(0x634)+_0x4c94bc(0xa22)+_0x4c94bc(0x6e0)+_0x4c94bc(0x210)+'er;us'+_0x4c94bc(0x8ce)+_0x4c94bc(0xa0f)+'none;'+_0x1ef8f1['yEXeI']+_0xdc6848,';'),_0x1ef8f1[_0x4c94bc(0xd98)]),_0x3cb067['textC'+_0x4c94bc(0xa15)+'t']=_0x1ef8f1[_0x4c94bc(0x683)],_0x3cb067['oncli'+'ck']=function(){_0x58cb13(![]),_0x205f9b['btwcW'](_0x4787c5);},_0x3a2ab[_0x4c94bc(0x300)][_0x4c94bc(0x927)+_0x4c94bc(0x432)+'d'](_0x3cb067);}else return _0x1ef8f1[_0x4c94bc(0x2ce)]('0x'+(_0x1ef8f1['nDPEU'](_0x3eb969['o'],-0x108e*-0x1+-0x1e*-0xd3+-0x2948)?'?':_0x3eb969['o'][_0x4c94bc(0xd0f)+_0x4c94bc(0x3cc)](0x58d+0x78d*-0x4+0x18b7)),'\x20(')+_0x3eb969[_0x4c94bc(0x297)]+')';})[_0x429147(0xd89)]('\x20\x20')));_0x3333af['body'][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x16f1ff);}_0x243f22[_0x429147(0x68c)](_0x3333af);var _0x262879=_0x6023b(_0x11b6a3[_0x429147(0x788)]),_0x3d18be=_0x892466('butto'+'n',_0x11b6a3['VtMQX'],_0x11b6a3['ntvcz']);_0x3d18be[_0x429147(0x55a)]=_0x11b6a3[_0x429147(0x60c)],_0x3d18be[_0x429147(0x576)+'ck']=function(){var _0x12a9ad=_0x429147,_0x5095ff={'duBFC':function(_0x1cba52,_0x28be40){var _0x4f91ac=_0x576a;return _0x11b6a3[_0x4f91ac(0x654)](_0x1cba52,_0x28be40);},'yGaIV':function(_0xf7dd16,_0x5bcbaf){return _0xf7dd16!==_0x5bcbaf;},'GFhpI':function(_0x21c641,_0x790b06){return _0x21c641===_0x790b06;},'kFEJX':_0x11b6a3[_0x12a9ad(0x702)]};if(_0x11b6a3['KTKkA'](_0x12a9ad(0x546),'PCjuC'))_0x11b6a3['sCXlP'](_0x10b421,_0x11b6a3[_0x12a9ad(0x9f2)]);else{var _0x436316=_0x4ec892[_0x12a9ad(0x62a)]();if(_0x5095ff[_0x12a9ad(0x460)](typeof _0x436316,'numbe'+'r')&&_0x45f336(_0x436316)){if(_0x5095ff[_0x12a9ad(0x460)](_0x1b7b89['lo'],null)||_0x436316<_0x2fc899['lo'])_0xf7c07c['lo']=_0x436316;if(_0x3866e6['hi']===null||_0x436316>_0x527543['hi'])_0xc480['hi']=_0x436316;if(_0x5095ff[_0x12a9ad(0x36a)](_0x1186c6[_0x12a9ad(0x51e)],null)){var _0x475243=_0x198307[_0x12a9ad(0x9ad)](_0x436316-_0x4db2ee[_0x12a9ad(0x51e)]);if(_0x475243>_0x5241d6['jump'])_0x2d0cf0[_0x12a9ad(0x92f)]=_0x475243;}_0xbad56a[_0x12a9ad(0x51e)]=_0x436316;}_0x2d5e36[_0x12a9ad(0x421)]++;if(_0x3ee27a[0x1e3c+-0x1*-0xb3a+-0x2975]&&_0x5095ff[_0x12a9ad(0x58c)](typeof _0x5cb509[-0x626*0x2+0x16c3+-0x67*0x1a]['val'],_0x5095ff['kFEJX'])){var _0x25387e=_0x3d0f2b[-0x46c+0x1220+-0xdb3][_0x12a9ad(0x62a)]();if(_0x25387e)_0x45322a=_0x25387e;}}},_0x262879[_0x429147(0x300)][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x11b6a3[_0x429147(0x6f7)](_0x892466,'div','sk-md'+'esc',_0x429147(0x904)+'napsh'+_0x429147(0x604)+'\x20F7\x20\x20'+_0x429147(0x8e6)+_0x429147(0x994)+_0x429147(0x2ae)+'\x20/\x20F6'+_0x429147(0x9e9)+_0x429147(0xa29)+_0x429147(0x69b)+'\x0a[\x20\x20]'+_0x429147(0x5ed)+'ld\x20of'+'\x20view'+_0x429147(0x5b6)+'rt\x20\x20t'+_0x429147(0xbbf)+'enu')),_0x262879[_0x429147(0x300)]['appen'+_0x429147(0x432)+'d'](_0x3d18be),_0x243f22[_0x429147(0x68c)](_0x262879);}if(_0x553827===_0x11b6a3['OsWvq']){var _0xc02d2d=_0x11b6a3[_0x429147(0x242)](_0x6023b,_0x11b6a3[_0x429147(0xac4)],_0x143771['on']),_0x4dbfc0=_0x11b6a3[_0x429147(0x728)](_0x36fb5a,_0x11b6a3['nrlhJ']);_0x4dbfc0['appen'+'dChil'+'d'](_0x6959ae(function(){return _0x143771['on'];},function(_0x24f284){var _0x325f0d=_0x429147,_0x28a48c={'WpHFy':_0x325f0d(0x3dc)+_0x325f0d(0xa1a)+'\x20pane'+_0x325f0d(0xb82)+'abled','UgRCI':function(_0x11ced6,_0x5b5360){var _0x3dc788=_0x325f0d;return _0x11b6a3[_0x3dc788(0x268)](_0x11ced6,_0x5b5360);}};if(_0x11b6a3['UWmuj']!==_0x11b6a3['lWFjo'])_0x11b6a3[_0x325f0d(0xb56)](_0x4144cf,_0x24f284,_0x143771[_0x325f0d(0xd48)]);else return _0x5448d5[_0x325f0d(0x276)+'et'][_0x325f0d(0x946)]='1',_0x372a42['api']=_0x25578c,_0x1d3fdf['warn'](_0x28a48c['WpHFy'],_0x28a48c[_0x325f0d(0xe02)]('color'+':',_0x5bd557),_0x5eeff4),_0x42309e;})),_0xc02d2d['body'][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x892466('div',_0x429147(0x544)+'esc',_0x11b6a3[_0x429147(0xca2)])),_0xc02d2d[_0x429147(0x300)][_0x429147(0x927)+'dChil'+'d'](_0x4dbfc0);var _0xc8cea4=_0x2b067d(0xc88*-0x1+0xc4f*0x1+0x61,-0x26e*0x8+-0xb22+0x3*0xa66,-0x19f4+-0x160f+0x300d*0x1,function(){return _0x143771['span'];},function(_0x142248){var _0x20205a=_0x429147,_0x25062f={'bhkPV':function(_0x4792d8,_0x2498d5){return _0x4792d8(_0x2498d5);}};_0x1ef8f1[_0x20205a(0x7ee)](_0x1ef8f1[_0x20205a(0xcf8)],_0x1ef8f1['bsHTn'])?_0x143771['span']=_0x142248:_0x514e0b=_0x25062f[_0x20205a(0x3dd)](_0x5c6c0a,_0x169fb3);});_0xc8cea4['input'][_0x429147(0x276)+'et']['unit']='m';var _0x3cd8e2=_0x36fb5a(_0x11b6a3['erWYQ'],_0x11b6a3[_0x429147(0xad4)]);_0x3cd8e2[_0x429147(0x927)+_0x429147(0x432)+'d'](_0xc8cea4),_0xc02d2d[_0x429147(0x300)][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x3cd8e2),_0x243f22[_0x429147(0x68c)](_0xc02d2d);var _0x5be0fa=_0x6023b(_0x429147(0xceb),_0x143771[_0x429147(0xd48)]),_0x3a46fa=_0x11b6a3[_0x429147(0xb3d)](_0x36fb5a,_0x11b6a3['nrlhJ']);_0x3a46fa[_0x429147(0x927)+_0x429147(0x432)+'d'](_0x6959ae(function(){return _0x143771['boxes'];},function(_0x31a383){if(_0x31a383&&!_0x11b6a3['RCmpP'](_0x5afd2c)){_0x2ed3ac();return;}_0x4144cf(!![],_0x31a383);}));var _0x2f1eb6=_0x5801ef&&_0x5801ef[_0x429147(0x282)+'s'];_0x5be0fa[_0x429147(0x300)]['appen'+_0x429147(0x432)+'d'](_0x892466(_0x429147(0xb2f),_0x429147(0x544)+_0x429147(0x39c),_0x2f1eb6&&!_0x2f1eb6['ident'+_0x429147(0x8ff)]?_0x11b6a3[_0x429147(0xc84)]('Not\x20d'+_0x429147(0xb3e)+'g.\x20'+(_0x2f1eb6['why']||_0x11b6a3[_0x429147(0x306)]),'\x20-\x20th'+_0x429147(0x2d0)+'wo\x20fl'+_0x429147(0x571)+'are\x20n'+_0x429147(0x98c)+_0x429147(0xd77)+_0x429147(0x37b)+_0x429147(0x161)+_0x429147(0x8ab)+'9,\x20tu'+_0x429147(0x4ce)+'out\x209'+'0°,\x20p'+_0x429147(0x7b0)+_0x429147(0x37c)):_0x2f1eb6&&!_0x2f1eb6[_0x429147(0xdfe)+'ne']?_0x11b6a3[_0x429147(0x887)](_0x11b6a3[_0x429147(0x2c9)]+Math['round'](_0x2f1eb6[_0x429147(0x60b)]),_0x11b6a3['xNXAV']):'Scree'+_0x429147(0x4d6)+_0x429147(0xe12)+_0x429147(0x9f3)+_0x429147(0x9ec)+_0x429147(0x65e)+_0x429147(0x439)+_0x429147(0x32a)+_0x429147(0xd21)+_0x429147(0xc8f)+_0x429147(0x5f4)+_0x429147(0x16c)+'is\x20bu'+'ild,\x20'+_0x429147(0x6b2)+_0x429147(0xd03)+'itted'+_0x429147(0xcf1)+_0x429147(0x6cb))),_0x5be0fa[_0x429147(0x300)][_0x429147(0x927)+'dChil'+'d'](_0x3a46fa);var _0x17a148=_0x11b6a3['AevKj'](_0x2b067d,-0xe65+-0xaab*0x3+0x2*0x1751,0x541*0x3+0x155a+0x1*-0x249b,0x391*-0x1+0x1723+-0x1390,function(){var _0x4e6dd5=_0x429147,_0x63a04c={'DIKVn':function(_0x5e66e7,_0x379314){return _0x5e66e7*_0x379314;},'EXOPS':_0x11b6a3[_0x4e6dd5(0x40d)],'XtMvA':_0x11b6a3[_0x4e6dd5(0x229)],'SqCsT':function(_0x352017,_0x4a5525){return _0x352017+_0x4a5525;},'MJCAh':function(_0x5c6b81,_0xdc13f1){return _0x5c6b81===_0xdc13f1;},'gWlHU':_0x11b6a3[_0x4e6dd5(0xbf9)],'diKBp':function(_0x18d983,_0x42009a){return _0x18d983+_0x42009a;},'cHUul':function(_0x3ca14d,_0x43ca84){return _0x3ca14d+_0x43ca84;},'WHaHU':_0x4e6dd5(0xcbe)+'h','EtUxJ':function(_0x491248,_0x460514){var _0x5578f8=_0x4e6dd5;return _0x11b6a3[_0x5578f8(0xaa8)](_0x491248,_0x460514);}};if(_0x11b6a3[_0x4e6dd5(0x1ac)]('DKZOX',_0x4e6dd5(0xa1e))){var _0x5c74c4=_0x63a04c[_0x4e6dd5(0xa25)][_0x4e6dd5(0x783)]('|'),_0x35382=0x1*-0x1e41+0x1e42+0x1*-0x1;while(!![]){switch(_0x5c74c4[_0x35382++]){case'0':if(_0x512970===_0x63a04c[_0x4e6dd5(0x605)])_0x510a20=_0x3219e5?_0x1647b9['versi'+'on']:'-';else{if(_0x512970===_0x4e6dd5(0x2a5)+_0x4e6dd5(0x58a)+_0x4e6dd5(0xd58)+_0x4e6dd5(0x879))_0x510a20=_0x99cb75?_0x63a04c[_0x4e6dd5(0x831)](_0xff239f[_0x4e6dd5(0xb2a)+_0x4e6dd5(0xc33)+'ed']+_0x4e6dd5(0x534),_0x4487ac['hooks'+_0x4e6dd5(0x165)+_0x4e6dd5(0x879)+'AtArm']):'-';else{if(_0x63a04c[_0x4e6dd5(0x9e6)](_0x512970,'from\x20'+_0x4e6dd5(0xb17)+'ntiat'+'e()'))_0x510a20=_0x376ba5&&_0x16ba4d['wasmM'+_0x4e6dd5(0x5e9)]&&_0x20541e['wasmM'+_0x4e6dd5(0x5e9)][_0x4e6dd5(0x585)+_0x4e6dd5(0xaca)]?_0x3579be[_0x4e6dd5(0x2c4)](_0x167083[_0x4e6dd5(0x1c3)+_0x4e6dd5(0x5e9)][_0x4e6dd5(0xcd0)]/(0x2d1c3+-0x7b0e5*-0x3+-0x9e472))+('\x20MB\x20@'+'\x20')+_0x3c5a40['wasmM'+'emory']['atMs']+'ms':'-';else{if(_0x63a04c[_0x4e6dd5(0x9e6)](_0x512970,_0x63a04c[_0x4e6dd5(0xb09)]))_0x510a20=_0x53438d&&_0x2aedfc['esp']?_0x2f08d6(_0x268db6[_0x4e6dd5(0x68a)][_0x4e6dd5(0xd46)+_0x4e6dd5(0x349)+'t']):'-';else{if(_0x512970===_0x4e6dd5(0xa5c)+'one\x20b'+'ut\x20yo'+'u')_0x510a20=_0x34f5ea&&_0x538285[_0x4e6dd5(0x68a)]?_0x456443(_0x18babc['esp'][_0x4e6dd5(0x4e2)+_0x4e6dd5(0xb16)]):'-';else{if(_0x512970===_0x4e6dd5(0x78e)+_0x4e6dd5(0x579)+_0x4e6dd5(0x43d)+_0x4e6dd5(0xd1b))_0x510a20=_0x5b8076&&_0xfb96d7['esp']&&_0x676367[_0x4e6dd5(0x68a)][_0x4e6dd5(0x89e)+'a']?_0x63a04c[_0x4e6dd5(0x448)](_0x63a04c[_0x4e6dd5(0xc38)](_0x289d50[_0x4e6dd5(0x68a)]['camer'+'a']+'\x20(',_0x2e3b85[_0x4e6dd5(0x68a)]['camer'+'aFrom']),')'):'-';else{if(_0x512970==='FPSco'+_0x4e6dd5(0x6a2)+'ler+0'+_0x4e6dd5(0x8eb))_0x510a20=_0x3c055c&&_0x450d69[_0x4e6dd5(0x209)]&&_0x2ca089['local']['feet']?_0xfa7629['local']['feet']['map'](function(_0x2dc3a5){var _0x4de80b=_0x4e6dd5;return _0x183aea[_0x4de80b(0x2c4)](_0x63a04c[_0x4de80b(0x75e)](_0x2dc3a5,0x288+-0x1e4e+0x1c2a))/(-0x1fa+-0x208e+0x8bb*0x4);})['join']('\x20\x20'):'-';else{if(_0x63a04c[_0x4e6dd5(0x9e6)](_0x512970,_0x4e6dd5(0xae2)+'8'))_0x510a20=_0x16df6f&&_0x5d79b5['local']&&_0x53a796[_0x4e6dd5(0x209)]['eye']?_0x52612c['local'][_0x4e6dd5(0xda1)][_0x4e6dd5(0x2dd)](function(_0xb8589d){var _0x4f4641=_0x4e6dd5;return _0x38e9df[_0x4f4641(0xb08)](_0x128f70[_0x4f4641(0x2c4)](_0xb8589d*(-0x154b+0x1ba6+-0x5f7)),0x171d+0xc41+-0x22fa);})[_0x4e6dd5(0xd89)]('\x20\x20'):'-';else{var _0x5e0f67=_0x512970[_0x4e6dd5(0x783)]('+');_0x510a20=_0x49f324(_0xfdb4e8,_0x63a04c[_0x4e6dd5(0x9e6)](_0x5e0f67[0x6*-0x595+-0xa5e+-0xaf7*-0x4]['index'+'Of'](_0x63a04c[_0x4e6dd5(0x18a)]),-0x12*-0x13d+-0x146d+-0x1dd)?'Healt'+'hScri'+'pt':'FPSco'+'ntrol'+_0x4e6dd5(0x24a),_0x5666b0(_0x5e0f67[0x18f+0x1b*-0xad+-0x10b1*-0x1],-0x144*-0x1e+-0x146d+-0x117b));}}}}}}}}continue;case'1':if(_0x510a20!==_0x48f268[_0x55e912][_0x4e6dd5(0x4fc)+_0x4e6dd5(0xa15)+'t'])_0x4d08c3[_0x3ed241][_0x4e6dd5(0x4fc)+'onten'+'t']=_0x510a20;continue;case'2':var _0x38e9df={'tvAwf':function(_0x4d4c60,_0x5c822b){return _0x63a04c['EtUxJ'](_0x4d4c60,_0x5c822b);}};continue;case'3':var _0x510a20='';continue;case'4':var _0x512970=_0x55ad2f[_0x18ed77][_0x4e6dd5(0x276)+'et']['k'];continue;}break;}}else return _0x2f79da['fov'];},function(_0x5595d2){var _0x2a2286=_0x429147;_0x2f79da[_0x2a2286(0x60b)]=_0x5595d2,_0x2ee92a();});_0x17a148[_0x429147(0xcf6)][_0x429147(0x276)+'et'][_0x429147(0x15a)]='°';var _0x5cf66d=_0x36fb5a(_0x11b6a3['Bhwah'],'[\x20and'+_0x429147(0x3c1)+'so\x20st'+_0x429147(0xddf)+'is');_0x5cf66d[_0x429147(0x927)+_0x429147(0x432)+'d'](_0x17a148);var _0x6614e5=_0x36fb5a(_0x11b6a3[_0x429147(0xba3)],_0x429147(0xc8e)+_0x429147(0x61f)+'o\x2075,'+'\x20offs'+'ets\x20c'+'lear'),_0x3b8c15=_0x892466(_0x429147(0x82e)+'n',_0x11b6a3[_0x429147(0x833)],_0x429147(0x543));_0x3b8c15[_0x429147(0xb44)+_0x429147(0x30b)+_0x429147(0x93d)+'r'](_0x11b6a3['NmdRg'],function(){var _0x589c0d=_0x429147;_0x2f79da['fov']=-0x1*-0x680+-0x1aac+-0x1f*-0xa9,_0x1ef8f1[_0x589c0d(0x97f)](_0x2ee92a),_0x1ef8f1['IuoSJ'](_0x3530ac,_0x59681c[_0x589c0d(0xa63)]);}),_0x6614e5[_0x429147(0x927)+_0x429147(0x432)+'d'](_0x3b8c15),_0x5be0fa[_0x429147(0x300)][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x5cf66d),_0x5be0fa['body']['appen'+_0x429147(0x432)+'d'](_0x6614e5);var _0x1a0e58=_0x5801ef&&_0x5801ef[_0x429147(0x9fd)];_0x5be0fa['body']['appen'+_0x429147(0x432)+'d'](_0x11b6a3[_0x429147(0x941)](_0x892466,'div','sk-no'+'te',_0x11b6a3[_0x429147(0x6e2)](_0x11b6a3[_0x429147(0x268)](_0x11b6a3[_0x429147(0xa8c)],_0x1a0e58?_0x1a0e58['mouse'+_0x429147(0xe25)]?'Mouse'+_0x429147(0x752)+_0x1a0e58[_0x429147(0xa2c)+'Look']+(_0x1a0e58['camer'+'a']?_0x11b6a3['YLZdp']('\x20\x20cam'+_0x429147(0x645),_0x1a0e58['camer'+'a']):''):_0x429147(0xc52)+_0x429147(0x207)+'ok\x20ye'+'t':_0x429147(0xc52)+_0x429147(0x207)+'ok\x20ye'+'t'),_0x2f1eb6?_0x11b6a3['DUFvm']('\x0a',_0x2f1eb6['sourc'+'e']&&_0x2f1eb6[_0x429147(0x6f8)+'e']['index'+'Of']('sette'+'r\x20pai'+'r')===0x3*-0x213+-0x1959+-0x3*-0xa86?_0x11b6a3[_0x429147(0x9e1)](_0x11b6a3[_0x429147(0x6e2)](_0x429147(0x6b6)+_0x429147(0x900)+_0x429147(0x476)+_0x429147(0x47d),_0x2f1eb6[_0x429147(0x6f8)+'e']['slice'](-0x1dcc+-0x1f*-0xb+0x1c82*0x1))+(_0x429147(0xe1a)+'\x20\x20')+Math[_0x429147(0x2c4)](_0x2f1eb6['rawYa'+'w'])+_0x11b6a3[_0x429147(0x5fa)],Math['round'](_0x2f1eb6['rawPi'+_0x429147(0x66a)])):_0x2f1eb6['sourc'+'e']===_0x429147(0xc40)+'r'?_0x11b6a3[_0x429147(0xdff)](_0x11b6a3['bmeOF'](_0x11b6a3['kZqEO'](_0x11b6a3[_0x429147(0x4e4)]+_0x2f1eb6[_0x429147(0x422)]+'\x20=\x20',Math['round'](_0x2f1eb6[_0x429147(0xac6)+'w'])),_0x11b6a3['LoYcx']),_0x2f1eb6[_0x429147(0x54c)+'At'])+'\x20=\x20'+Math['round'](_0x2f1eb6[_0x429147(0x3ff)+'tch']):_0x11b6a3['cblaZ']):'')+(_0x2f1eb6&&_0x2f1eb6['viewH'+_0x429147(0xb04)]&&_0x2f1eb6['viewH'+'ooks'][_0x429147(0x2a5)+'ed']===0x22c4+0x12a+0x15*-0x1b6&&_0x11b6a3[_0x429147(0xdec)](_0x2f1eb6[_0x429147(0x2f4)+_0x429147(0xb04)][_0x429147(0xab1)],-0xd95*0x2+0xf74+0xbb6*0x1)?_0x11b6a3[_0x429147(0xb8a)](_0x11b6a3[_0x429147(0x5af)](_0x429147(0x49d)+'s\x20reg'+'ister'+'ed\x20bu'+_0x429147(0x2f9)+_0x429147(0x744)+_0x429147(0x499)+'('+_0x2f1eb6['viewH'+'ooks'][_0x429147(0xa36)+_0x429147(0x651)],'/')+_0x2f1eb6[_0x429147(0x2f4)+_0x429147(0xb04)][_0x429147(0xab1)],_0x11b6a3[_0x429147(0xc21)]):_0x2f1eb6&&_0x2f1eb6[_0x429147(0x2f4)+_0x429147(0xb04)]&&_0x2f1eb6[_0x429147(0x2f4)+'ooks'][_0x429147(0xab1)]===-0x4*-0x81c+0x1426+-0x3496?'\x0aview'+'\x20hook'+_0x429147(0xd41)+'e\x20nev'+_0x429147(0xcc7)+_0x429147(0x63f)+'red\x20('+_0x2f1eb6['viewH'+'ooks']['error'+'Count']+(_0x429147(0x2a3)+'rs)'):'')+(_0x108abc?_0x429147(0xdcf)+_0x429147(0xaf8)+'a\x20sta'+_0x429147(0xc83)+_0x429147(0x693)+'orrec'+'tion)':''))),_0x243f22['push'](_0x5be0fa);}if(_0x553827==='value'+'s'){var _0x58916b=[[_0x429147(0x223),_0x429147(0x2fe)+'ON',_0x5801ef?_0x5801ef['versi'+'on']:'-'],[_0x429147(0xa31),_0x11b6a3[_0x429147(0x7a4)],_0x5801ef?_0x5801ef[_0x429147(0xb2a)+_0x429147(0xc33)+'ed']+_0x429147(0x534)+_0x5801ef[_0x429147(0xb2a)+_0x429147(0x165)+_0x429147(0x879)+_0x429147(0x7fa)]:'-'],[_0x429147(0x3d6),_0x11b6a3[_0x429147(0xbc6)],_0x5801ef&&_0x5801ef[_0x429147(0x1c3)+_0x429147(0x5e9)]&&_0x5801ef['wasmM'+'emory'][_0x429147(0x585)+'red']?_0x11b6a3[_0x429147(0x2cd)](_0x11b6a3[_0x429147(0x1bd)](Math['round'](_0x5801ef['wasmM'+'emory']['bytes']/(0x17be5*-0xb+0x35e93+0x11*0x1b404)),_0x11b6a3['HnDsZ']),_0x5801ef[_0x429147(0x1c3)+'emory']['atMs'])+'ms':'-'],['Playe'+'rs',_0x429147(0x8db)+'nNetw'+_0x429147(0x3ec)+'nc',_0x5801ef&&_0x5801ef['esp']?_0x11b6a3[_0x429147(0x8ca)](String,_0x5801ef['esp']['playe'+'rCoun'+'t']):'-'],[_0x429147(0x374)+'es',_0x11b6a3['beCbm'],_0x5801ef&&_0x5801ef[_0x429147(0x68a)]?String(_0x5801ef[_0x429147(0x68a)][_0x429147(0x4e2)+_0x429147(0xb16)]):'-'],[_0x11b6a3[_0x429147(0xbbb)],_0x429147(0x78e)+_0x429147(0x579)+_0x429147(0x43d)+'nager',_0x5801ef&&_0x5801ef[_0x429147(0x68a)]&&_0x5801ef[_0x429147(0x68a)][_0x429147(0x89e)+'a']?_0x5801ef[_0x429147(0x68a)][_0x429147(0x89e)+'a']+'\x20('+_0x5801ef['esp']['camer'+_0x429147(0x2d7)]+')':'-']];for(_0xaeba58=0xc7*0x1+0x591+-0x658;_0xaeba58<_0x58916b['lengt'+'h'];_0xaeba58++){if(_0x11b6a3['LtBaZ']('AynEq','ivQam')){_0x4cf039['ok']++;switch(_0x4e3507){case'u8':return _0x1db4b1[_0x429147(0x703)+'nt8'](_0x5292c9);case'i8':return _0x447601['getIn'+'t8'](_0x8b07d4);case _0x1ef8f1[_0x429147(0xc44)]:return _0x11371d['getIn'+_0x429147(0xcb2)](_0x50d4f2,!![]);case'u16':return _0x5a855e['getUi'+_0x429147(0x192)](_0x31d3d1,!![]);case _0x1ef8f1[_0x429147(0x8ba)]:return _0x15dea2[_0x429147(0xd3f)+_0x429147(0xc15)](_0x5326c6,!![]);case'u32':return _0x2d2551['getUi'+'nt32'](_0x1717d9,!![]);case'f32':return _0x2c4434[_0x429147(0x9ac)+'oat32'](_0x4c552e,!![]);case _0x429147(0x8c8):return _0x31f831[_0x429147(0x9ac)+_0x429147(0x4fa)](_0x161621,!![]);case'v2':case'v3':case'v4':return _0x1dc941[_0x429147(0x9ac)+'oat32'](_0x47030d,!![]);default:return _0x52d47a['getIn'+_0x429147(0xc15)](_0xde6006,!![]);}}else{var _0x5abaa2=_0x36fb5a(_0x58916b[_0xaeba58][0x684+0x3cb*-0x3+0x4dd]),_0x1b061b=_0x892466(_0x11b6a3[_0x429147(0xd02)],_0x11b6a3[_0x429147(0x40f)]);_0x1b061b[_0x429147(0x3d2)][_0x429147(0x84a)+'dth']='0',_0x1b061b['style']['flex']='1',_0x1b061b['style']['textA'+_0x429147(0xcd5)]='right',_0x1b061b[_0x429147(0x4fc)+'onten'+'t']=_0x11b6a3[_0x429147(0x51f)](String,_0x58916b[_0xaeba58][0x1d38+-0x102d+-0xd09]),_0x1b061b['datas'+'et']['k']=_0x58916b[_0xaeba58][0x1*-0x2521+0x316*-0xb+0x4714],_0x5abaa2[_0x429147(0x927)+_0x429147(0x432)+'d'](_0x1b061b);var _0x4b1d3c=_0x243f22[_0x429147(0x964)+'h']?_0x243f22[_0x243f22['lengt'+'h']-(-0x14f7+0x142e+0xca*0x1)]:null;if(!_0x4b1d3c){if('IQSYF'!==_0x429147(0x29d))_0x4b1d3c=_0x6023b(_0x11b6a3['jhwDG'],![]),_0x243f22[_0x429147(0x68c)](_0x4b1d3c);else{_0xaa5b59['preve'+'ntDef'+'ault'](),_0x1b2be7(_0x3d96ce['on'],_0x55d071['facto'+'r']+(0xe4b+-0x1295*-0x2+-0x3375+0.5));return;}}_0x4b1d3c[_0x429147(0x300)][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x5abaa2),_0x4b1d3c[_0x429147(0x300)][_0x429147(0xcad)+_0x429147(0x1e0)]['sp']=_0x1b061b;}}var _0x2d44b2=_0x11b6a3[_0x429147(0x5e3)](_0x6023b,_0x11b6a3[_0x429147(0x9ae)],![]),_0x3a5647=[[_0x11b6a3[_0x429147(0xcf5)],_0x5801ef&&_0x5801ef['local']&&_0x5801ef['local'][_0x429147(0xb00)]?_0x11b6a3[_0x429147(0x7c6)]+_0x5801ef[_0x429147(0x209)][_0x429147(0xb00)]:_0x429147(0xb78)+_0x429147(0x6a2)+_0x429147(0x24a),_0x5801ef&&_0x5801ef['local']&&_0x5801ef[_0x429147(0x209)][_0x429147(0x573)]?_0x5801ef['local'][_0x429147(0x573)]['map'](function(_0x2a303f){var _0x4f2c47=_0x429147;return Math[_0x4f2c47(0x2c4)](_0x11b6a3[_0x4f2c47(0xbc5)](_0x2a303f,-0x2472+-0x249c+0x4972))/(0x23*0xa9+-0x1*0x9b9+0x2*-0x67f);})['join']('\x20\x20'):'-'],[_0x429147(0xb87),'+'+_0x23be9f+'m',_0x5801ef&&_0x5801ef['local']&&_0x5801ef[_0x429147(0x209)][_0x429147(0xda1)]?_0x5801ef[_0x429147(0x209)][_0x429147(0xda1)]['map'](function(_0x315726){var _0x19d036=_0x429147;return _0x1ef8f1[_0x19d036(0x705)](Math['round'](_0x315726*(-0x13c6+-0x23af+-0x37d9*-0x1)),0x15e4+0x1dec+-0x336c);})['join']('\x20\x20'):'-'],['Walk\x20'+_0x429147(0x8e6),_0x429147(0x916),_0x2bdc0e(_0x5801ef,_0x429147(0xb78)+_0x429147(0x6a2)+_0x429147(0x24a),0xb2*-0x5+-0x2*-0xedc+-0xd17*0x2)],[_0x11b6a3['PbLqh'],_0x11b6a3[_0x429147(0x3e4)],_0x2bdc0e(_0x5801ef,_0x429147(0xb78)+_0x429147(0x6a2)+_0x429147(0x24a),0xa39*0x1+0x1d5*-0x3+-0x47a)],[_0x11b6a3[_0x429147(0xca4)],_0x11b6a3[_0x429147(0x471)],_0x11b6a3['lNvgL'](_0x2bdc0e,_0x5801ef,_0x11b6a3['AgoSf'],0x2*0x329+-0x3e2*-0x9+-0x2828)],['Healt'+'h',_0x429147(0xcbe)+'hScri'+_0x429147(0x934)+'C0',_0x11b6a3['nHcYl'](_0x2bdc0e,_0x5801ef,_0x11b6a3[_0x429147(0x1ed)],-0xb8f*-0x2+-0xa*0xa8+-0x1*0xfce)]];for(_0xaeba58=0xfb3*0x2+-0x3e7+-0x1*0x1b7f;_0x11b6a3[_0x429147(0xa19)](_0xaeba58,_0x3a5647[_0x429147(0x964)+'h']);_0xaeba58++){var _0x902e7f=_0x11b6a3['dNrml'](_0x36fb5a,_0x3a5647[_0xaeba58][0x234e+0x2*-0x4a7+-0x1a00]),_0x43202a=_0x892466(_0x429147(0x671),_0x11b6a3[_0x429147(0x40f)]);_0x43202a[_0x429147(0x3d2)][_0x429147(0x84a)+'dth']='0',_0x43202a[_0x429147(0x3d2)]['flex']='1',_0x43202a[_0x429147(0x3d2)][_0x429147(0xc66)+_0x429147(0xcd5)]='right',_0x43202a[_0x429147(0x4fc)+_0x429147(0xa15)+'t']=_0x11b6a3['sCXlP'](String,_0x3a5647[_0xaeba58][-0x2602+-0x39*0x6d+0x3e49]),_0x43202a[_0x429147(0x276)+'et']['k']=_0x3a5647[_0xaeba58][0x3bd*-0x9+0x19*-0x27+0x2575],_0x902e7f['appen'+_0x429147(0x432)+'d'](_0x43202a),_0x2d44b2['body'][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x902e7f),_0x2d44b2[_0x429147(0x300)]['lastC'+_0x429147(0x1e0)]['sp']=_0x43202a;}_0x243f22['push'](_0x2d44b2);}if(_0x553827==='log'){var _0x385089=_0x11b6a3['BXsTU'](_0x6023b,_0x429147(0xa5e)+'ostic'+'s',![]),_0x4b96fd=_0x5801ef&&_0x5801ef[_0x429147(0x4cf)+_0x429147(0xc12)]&&_0x5801ef[_0x429147(0x4cf)+'ngs'][_0x429147(0x964)+'h']?_0x5801ef['warni'+'ngs'][_0x429147(0xd89)]('\x0a'):_0x11b6a3[_0x429147(0xb49)];_0x385089['body'][_0x429147(0x927)+'dChil'+'d'](_0x892466(_0x429147(0xb2f),_0x11b6a3[_0x429147(0x568)],_0x4b96fd)),_0x243f22[_0x429147(0x68c)](_0x385089);var _0x308122=_0x11b6a3['jxnGQ'](_0x6023b,_0x429147(0xc74)+'t',![]),_0x44eb9e=_0x11b6a3[_0x429147(0x6f7)](_0x892466,'butto'+'n','sk-bt'+'n',_0x11b6a3['xRXQQ']);_0x44eb9e[_0x429147(0x55a)]=_0x11b6a3[_0x429147(0x60c)],_0x44eb9e[_0x429147(0x576)+'ck']=function(){var _0x4fc452=_0x429147,_0x9163ee={'mrMrc':_0x1ef8f1[_0x4fc452(0xbb2)]};if(_0x1ef8f1['dJBbV']==='DZcjF')return _0x22ab4f[_0x4fc452(0x189)+_0x4fc452(0x8ff)]=![],_0xe6c5b7['why']=_0x1ef8f1['hxALq'],null;else try{var _0x52032e=_0x1ef8f1[_0x4fc452(0x22e)](_0x1ef8f1[_0x4fc452(0x511)](_0xdf8cb0,'\x0a')+JSON[_0x4fc452(0x659)+_0x4fc452(0x686)](_0x5801ef,null,0xb00+-0x6da*0x4+0x1069)+'\x0a',_0x2728c4);if(navigator['clipb'+_0x4fc452(0x346)]&&navigator['clipb'+_0x4fc452(0x346)][_0x4fc452(0xccc)+_0x4fc452(0x6ca)])_0x1ef8f1[_0x4fc452(0x7ee)](_0x4fc452(0x46d),_0x1ef8f1[_0x4fc452(0xd91)])?navigator['clipb'+'oard']['write'+'Text'](_0x52032e)[_0x4fc452(0x998)](function(){var _0x2a6568=_0x4fc452;_0x44eb9e['textC'+_0x2a6568(0xa15)+'t']=_0x9163ee[_0x2a6568(0x3c6)];}):_0x47d54c['canva'+'s']={'w':_0x3f2ed4&&_0x316e03['cv']?_0x31ce67['cv'][_0x4fc452(0x3c3)]:0x1da2+-0xa*-0x49+-0x1c*0x129,'h':_0x35c04f&&_0x2cb44c['cv']?_0x45204f['cv'][_0x4fc452(0xdf8)+'t']:-0x160e+0x1c8b+0xb*-0x97,'innerW':_0x4713e3['inner'+'Width'],'innerH':_0x19284c['inner'+_0x4fc452(0x79f)+'t'],'dpr':_0x51b86e[_0x4fc452(0x552)+'ePixe'+_0x4fc452(0x405)+'o']||0x24ff+-0x195*0xa+-0x2*0xa96};else _0x44eb9e[_0x4fc452(0x4fc)+_0x4fc452(0xa15)+'t']=_0x4fc452(0x257)+'oard\x20'+_0x4fc452(0x599)+'ed\x20-\x20'+_0x4fc452(0xd16)+_0x4fc452(0xc4c)+_0x4fc452(0xa67)+_0x4fc452(0x99c)+'ad';}catch(_0x24bf58){_0x44eb9e['textC'+'onten'+'t']=_0x4fc452(0x86c)+'faile'+'d';}},_0x308122['body'][_0x429147(0x927)+'dChil'+'d'](_0x11b6a3[_0x429147(0x6f0)](_0x892466,_0x11b6a3[_0x429147(0x5be)],_0x429147(0x544)+_0x429147(0x39c),_0x429147(0xbbe)+'\x20the\x20'+'whole'+_0x429147(0x513)+_0x429147(0x3d5)+'n\x20som'+'ethin'+_0x429147(0xe1f)+'ks\x20wr'+_0x429147(0x190))),_0x308122['body'][_0x429147(0x927)+_0x429147(0x432)+'d'](_0x44eb9e),_0x243f22[_0x429147(0x68c)](_0x308122);}return _0x243f22;}function _0x1fc04c(){var _0x43a956=_0x586988;if(_0x59681c[_0x43a956(0x892)])_0x3d4811(!![]);}function _0x3a7cab(){var _0x2d1293=_0x586988;try{if(_0x11b6a3['Xtieq'](_0x2d1293(0x4c3),_0x11b6a3['vpDdd']))try{_0x12d862[_0x2d1293(0xcc1)]();}catch(_0x9873b7){}else{var _0x2a2421=localStorage['getIt'+'em'](_0x4e787b);if(!_0x2a2421)return;var _0x42f7e9=JSON[_0x2d1293(0xdc2)](_0x2a2421);if(_0x42f7e9&&_0x11b6a3['Mgepr'](typeof _0x42f7e9['x'],'numbe'+'r')&&_0x11b6a3['TWBaV'](typeof _0x42f7e9['y'],_0x2d1293(0x846)+'r'))_0x59681c[_0x2d1293(0x3a2)]=_0x42f7e9;}}catch(_0x4ef380){}}function _0x7fdd77(){var _0x378cdd=_0x586988;try{localStorage['setIt'+'em'](_0x4e787b,JSON[_0x378cdd(0x659)+'gify'](_0x59681c[_0x378cdd(0x3a2)]));}catch(_0x209c1e){}}function _0xd8f0f0(){var _0x4804d3=_0x586988,_0x1b8c98={'NRIva':_0x11b6a3[_0x4804d3(0xd02)],'yRWqe':function(_0x1ee298,_0x1288a2){return _0x1ee298(_0x1288a2);},'GwipU':function(_0x2a1f11,_0x52aa5d){return _0x11b6a3['vtnab'](_0x2a1f11,_0x52aa5d);},'eywcn':_0x11b6a3[_0x4804d3(0x4eb)]},_0x9ba9e2=_0x59681c['root'];if(!_0x9ba9e2||!_0x9ba9e2['style'])return;if(_0x59681c[_0x4804d3(0x3a2)])_0x9ba9e2[_0x4804d3(0x3d2)][_0x4804d3(0x486)]=_0x59681c[_0x4804d3(0x3a2)]['x']+'px',_0x9ba9e2[_0x4804d3(0x3d2)][_0x4804d3(0x307)]=_0x11b6a3['nKDmw'](_0x59681c['pos']['y'],'px'),_0x9ba9e2['style'][_0x4804d3(0x264)]=_0x4804d3(0xd15),_0x9ba9e2[_0x4804d3(0x3d2)]['botto'+'m']=_0x11b6a3[_0x4804d3(0x587)];else{if(_0x11b6a3['kScab'](_0x4804d3(0x6f4),'RGCRg')){var _0x32b850=_0x439992(_0x197051[_0x282ca7][0x97e*-0x1+-0x15d8*0x1+0x1f56]),_0x4f5aad=_0x2e024f(_0x1b8c98['NRIva'],_0x4804d3(0xc92)+'l');_0x4f5aad['style'][_0x4804d3(0x84a)+'dth']='0',_0x4f5aad[_0x4804d3(0x3d2)]['flex']='1',_0x4f5aad[_0x4804d3(0x3d2)][_0x4804d3(0xc66)+'lign']=_0x4804d3(0x264),_0x4f5aad[_0x4804d3(0x4fc)+'onten'+'t']=_0x1b8c98[_0x4804d3(0x2f2)](_0x20870c,_0x8921e2[_0x5d3077][-0x671+-0x2*-0x89f+-0xacb]),_0x4f5aad[_0x4804d3(0x276)+'et']['k']=_0x1ad0fc[_0x55fcc0][0x2*0x469+-0x167d+-0x7*-0x1f4],_0x32b850['appen'+'dChil'+'d'](_0x4f5aad);var _0x3eb222=_0x476172[_0x4804d3(0x964)+'h']?_0x1535fe[_0x1b8c98['GwipU'](_0x246f16['lengt'+'h'],0x3*0xaa9+0x1656+-0x3650)]:null;!_0x3eb222&&(_0x3eb222=_0x2bd212(_0x1b8c98['eywcn'],![]),_0x2fe911['push'](_0x3eb222)),_0x3eb222[_0x4804d3(0x300)][_0x4804d3(0x927)+'dChil'+'d'](_0x32b850),_0x3eb222['body'][_0x4804d3(0xcad)+'hild']['sp']=_0x4f5aad;}else _0x9ba9e2[_0x4804d3(0x3d2)][_0x4804d3(0x486)]=_0x4804d3(0xd15),_0x9ba9e2[_0x4804d3(0x3d2)]['top']=_0x4804d3(0xd15),_0x9ba9e2[_0x4804d3(0x3d2)]['right']='24px',_0x9ba9e2['style'][_0x4804d3(0x204)+'m']=_0x11b6a3['ZTsAX'];}}function _0x19c8d8(_0x4bcab3,_0x2e45e9){var _0x5473dd=_0x586988,_0x432682={'lKWCK':_0x11b6a3[_0x5473dd(0x19f)],'awHTq':function(_0xdd9e85,_0x254e47){var _0x19c69a=_0x5473dd;return _0x11b6a3[_0x19c69a(0x72d)](_0xdd9e85,_0x254e47);},'EJUrY':function(_0x5921b9,_0x14f688){return _0x5921b9+_0x14f688;},'xQxRx':_0x11b6a3[_0x5473dd(0x587)]};if(_0x11b6a3[_0x5473dd(0xc0b)](_0x5473dd(0x33d),'CCgGJ'))try{return _0x5491e8&&_0x1b18a1['buffe'+'r']?_0x7c7058[_0x5473dd(0x2cc)+'r'][_0x5473dd(0x4ae)+'ength']:-0x674+-0x1*-0x14b1+-0xe3d;}catch(_0x25d0f2){return 0x1b8+0xedb+-0x1093;}else try{var _0x23c027=![],_0x3c15ae=-0x2d1*-0x4+-0x1*-0x183d+-0x2381,_0x3f5a38=-0x23+-0x1333*0x1+0x1356;_0x2e45e9[_0x5473dd(0x3d2)]['curso'+'r']=_0x11b6a3[_0x5473dd(0xb7d)],_0x2e45e9['style']['touch'+'Actio'+'n']=_0x11b6a3[_0x5473dd(0xc14)];var _0x5914d1=function(_0x324152){var _0xc12629=_0x5473dd,_0x16cc20=('4|5|7'+'|3|1|'+_0xc12629(0xc27))['split']('|'),_0x23e137=0x25*-0x8e+0x2677+0x11f1*-0x1;while(!![]){switch(_0x16cc20[_0x23e137++]){case'0':_0x3f5a38=_0x11b6a3[_0xc12629(0x414)](_0x324152[_0xc12629(0x364)+'tY']||0x1730+0x3f*-0x9d+0xf73,_0x40af17['top']);continue;case'1':(!_0x4bcab3['style'][_0xc12629(0x307)]||_0x4bcab3['style'][_0xc12629(0x307)]===_0xc12629(0xd15))&&(_0x40af17['top']=_0x11b6a3[_0xc12629(0xd00)](window['inner'+_0xc12629(0x79f)+'t']||-0x1b6+0x358*0x6+-0x125a,_0x4bcab3[_0xc12629(0x848)+_0xc12629(0xc53)+'ht']||0xd1f*0x2+0x1*0x5a3+0x255*-0xd)-(0x227e+-0x7f*-0x2f+-0x39b7));continue;case'2':_0x3c15ae=(_0x324152[_0xc12629(0x364)+'tX']||0x1acf*-0x1+-0x2*0x975+0x2db9)-_0x40af17[_0xc12629(0x486)];continue;case'3':(!_0x4bcab3['style'][_0xc12629(0x486)]||_0x11b6a3['UQmyj'](_0x4bcab3[_0xc12629(0x3d2)][_0xc12629(0x486)],_0xc12629(0xd15)))&&(_0x40af17[_0xc12629(0x486)]=_0x11b6a3['wWLxj'](_0x11b6a3['RacCY'](window[_0xc12629(0xdd8)+_0xc12629(0x21b)]||-0x566+0xe7b+-0x915,_0x4bcab3[_0xc12629(0x848)+'tWidt'+'h']||-0x58*0xe+-0x5*0x18d+0xefd),-0xa7*-0x3+-0x53c*-0x3+-0x1191));continue;case'4':_0x23c027=!![];continue;case'5':_0x2e45e9[_0xc12629(0x3d2)][_0xc12629(0x31f)+'r']=_0x11b6a3[_0xc12629(0x1c4)];continue;case'6':try{_0x324152[_0xc12629(0x694)+_0xc12629(0xe0c)+_0xc12629(0x64b)]();}catch(_0x6346e3){}continue;case'7':var _0x40af17={'left':_0x11b6a3[_0xc12629(0x8b8)](parseFloat,_0x4bcab3[_0xc12629(0x3d2)][_0xc12629(0x486)])||0x106d+0xf*0x203+0xa*-0x4a9,'top':parseFloat(_0x4bcab3[_0xc12629(0x3d2)]['top'])||-0x1deb+0x6b3+0x1738};continue;}break;}},_0x20666a=function(_0xc5a988){var _0x374a=_0x5473dd;if(_0x432682['lKWCK']===_0x374a(0x954)){if(!_0x23c027)return;var _0xe69fc=_0x4bcab3[_0x374a(0x848)+'tWidt'+'h']||-0xc37*0x1+-0x887*0x3+-0x138*-0x21,_0x4a815d=_0x4bcab3['offse'+_0x374a(0xc53)+'ht']||-0x15*-0x15+0xc9c+-0x7*0x1d3,_0xa75892=_0x432682['awHTq'](_0xc5a988['clien'+'tX']||0x10b5+-0x199e+0x8e9,_0x3c15ae),_0x5f1e69=_0x432682[_0x374a(0x4c1)](_0xc5a988[_0x374a(0x364)+'tY']||0xa78+-0x2705+-0x1*-0x1c8d,_0x3f5a38);_0xa75892=Math[_0x374a(0xd62)](-0x29c+0x19e6*-0x1+-0x1*-0x1c8a,Math[_0x374a(0x4a9)](_0x432682[_0x374a(0x4c1)](window[_0x374a(0xdd8)+_0x374a(0x21b)]||0x1e9a+-0x3e*0x49+-0xcec,_0xe69fc)-(-0x1c61+0x19*-0x16c+-0x1*-0x3ff5),_0xa75892)),_0x5f1e69=Math[_0x374a(0xd62)](-0x187+-0x1101*-0x2+-0x75*0x47,Math['min'](_0x432682['awHTq']((window[_0x374a(0xdd8)+_0x374a(0x79f)+'t']||0x2*-0x1eb+0x85*-0x19+0x49*0x3b)-_0x4a815d,-0x132a+-0x156b*-0x1+-0x239),_0x5f1e69)),_0x4bcab3[_0x374a(0x3d2)][_0x374a(0x486)]=_0xa75892+'px',_0x4bcab3[_0x374a(0x3d2)][_0x374a(0x307)]=_0x432682[_0x374a(0x86e)](_0x5f1e69,'px'),_0x4bcab3[_0x374a(0x3d2)][_0x374a(0x264)]=_0x432682[_0x374a(0xcc9)],_0x4bcab3[_0x374a(0x3d2)]['botto'+'m']='auto',_0x59681c[_0x374a(0x3a2)]={'x':_0xa75892,'y':_0x5f1e69};}else return _0x4543a3['warn'](_0x374a(0x3dc)+'kura]'+_0x374a(0x37f)+'rame\x20'+_0x374a(0xc43)+'isabl'+'ed','color'+':'+_0x43fd98,_0x43fce2),null;},_0x2b3244=function(){var _0x1abee1=_0x5473dd;if(!_0x23c027)return;_0x23c027=![],_0x2e45e9['style']['curso'+'r']=_0x11b6a3[_0x1abee1(0xb7d)],_0x7fdd77();};_0x2e45e9['addEv'+_0x5473dd(0x30b)+_0x5473dd(0x93d)+'r'](_0x5473dd(0xa2c)+'down',_0x5914d1),window[_0x5473dd(0xb44)+_0x5473dd(0x30b)+_0x5473dd(0x93d)+'r'](_0x11b6a3[_0x5473dd(0xc59)],_0x20666a),window['addEv'+_0x5473dd(0x30b)+_0x5473dd(0x93d)+'r'](_0x11b6a3[_0x5473dd(0xdad)],_0x2b3244),_0x2e45e9['addEv'+_0x5473dd(0x30b)+'stene'+'r']('touch'+'start',_0x5914d1,{'passive':![]}),window[_0x5473dd(0xb44)+'entLi'+_0x5473dd(0x93d)+'r']('touch'+'move',_0x20666a,{'passive':![]}),window[_0x5473dd(0xb44)+_0x5473dd(0x30b)+_0x5473dd(0x93d)+'r']('touch'+_0x5473dd(0xa77),_0x2b3244);}catch(_0x1dde1b){}}function _0x5d6371(){var _0x4b6578=_0x586988,_0x400aaf={'tYksy':_0x11b6a3[_0x4b6578(0xd57)],'duAnc':function(_0x2296c7,_0x46f3a4){return _0x2296c7(_0x46f3a4);},'dMidb':'4|2|1'+_0x4b6578(0xc63)};if(_0x59681c['built'])return _0x59681c[_0x4b6578(0x322)];try{if(_0x4b6578(0x434)===_0x4b6578(0x674))_0x22d5d9[_0x4b6578(0x671)]=_0xae158f;else{if(!document[_0x4b6578(0x300)]||!document['body']['appen'+'dChil'+'d'])return null;if(!document['getEl'+'ement'+_0x4b6578(0x801)]('sakur'+'a-men'+_0x4b6578(0xd82))){var _0x4aaa9a=document[_0x4b6578(0xcfa)+_0x4b6578(0xc89)+_0x4b6578(0x1e5)](_0x11b6a3['rNfcT']);_0x4aaa9a['id']=_0x11b6a3['qBIvi'],_0x4aaa9a[_0x4b6578(0x4fc)+_0x4b6578(0xa15)+'t']=_0x3a1860,(document['head']||document[_0x4b6578(0x159)+_0x4b6578(0x337)+_0x4b6578(0x91c)])[_0x4b6578(0x927)+_0x4b6578(0x432)+'d'](_0x4aaa9a);}var _0x4aca28=_0x892466(_0x4b6578(0xb2f),'mn-pa'+_0x4b6578(0x3d1));_0x4aca28['id']='sakur'+_0x4b6578(0xa3c)+'u-roo'+'t';var _0x12c0e8=_0x11b6a3[_0x4b6578(0x2f8)](_0x892466,_0x4b6578(0xb2f),'mn-si'+'de'),_0x3e76b6=_0x11b6a3[_0x4b6578(0x6f7)](_0x892466,'div',_0x11b6a3['toUiQ'],_0x49d532);_0x12c0e8[_0x4b6578(0x927)+_0x4b6578(0x432)+'d'](_0x3e76b6);var _0x59e210=_0x892466('div',_0x11b6a3[_0x4b6578(0x6c0)]),_0x27692b=_0x892466('div','mn-to'+'p'),_0x4eca19=_0x892466(_0x4b6578(0xb2f),_0x11b6a3['DVmRl']),_0x402f41=_0x11b6a3[_0x4b6578(0x79a)](_0x892466,_0x4b6578(0xb2f),'mn-h',_0x4b6578(0xbb3)+'a\x20Ski'+'llWar'+'z'),_0x318559=_0x11b6a3[_0x4b6578(0x5aa)](_0x892466,_0x11b6a3[_0x4b6578(0x5be)],_0x11b6a3['CQOzd'],'start'+'ing…');_0x4eca19['appen'+_0x4b6578(0x432)+'d'](_0x402f41),_0x4eca19[_0x4b6578(0x927)+_0x4b6578(0x432)+'d'](_0x318559);var _0x1e05e9=_0x11b6a3['CpubX'](_0x892466,_0x11b6a3[_0x4b6578(0x5be)],'mn-cl'+_0x4b6578(0x252),_0x11b6a3[_0x4b6578(0x194)]);_0x1e05e9['oncli'+'ck']=function(){var _0xb84266=_0x4b6578;if(_0xb84266(0xe20)==='iMbfe'){var _0x53febb=_0x11010f[_0xb84266(0x724)+_0xb84266(0x79c)]({'typeName':_0x3b2145[_0xb84266(0x55a)],'methodName':'Updat'+'e','params':['i32',_0x400aaf[_0xb84266(0xabd)]],'returnType':_0x3ef11c},_0x273e00(_0x258cdc['type'],_0x3fd0ef['keep'],_0xafeeee[_0xb84266(0xbc3)]));_0x50e412['push']({'type':_0x223b69[_0xb84266(0x55a)],'hook':_0x53febb,'keep':_0x2ae26a[_0xb84266(0x2e6)]});}else _0x400aaf['duAnc'](_0x3d4811,![]);},_0x27692b['appen'+'dChil'+'d'](_0x4eca19),_0x27692b['appen'+_0x4b6578(0x432)+'d'](_0x1e05e9);var _0x422656=_0x11b6a3[_0x4b6578(0xb56)](_0x892466,_0x4b6578(0xb2f),_0x11b6a3['HTZIv']);_0x59e210[_0x4b6578(0x927)+'dChil'+'d'](_0x27692b),_0x59e210[_0x4b6578(0x927)+_0x4b6578(0x432)+'d'](_0x422656),_0x4aca28['appen'+_0x4b6578(0x432)+'d'](_0x12c0e8),_0x4aca28[_0x4b6578(0x927)+_0x4b6578(0x432)+'d'](_0x59e210),document['body']['appen'+'dChil'+'d'](_0x4aca28),_0x59681c['root']=_0x4aca28,_0x59681c['cols']=_0x422656,_0x59681c[_0x4b6578(0x386)]=_0x402f41,_0x59681c[_0x4b6578(0xaec)]=_0x318559,_0x11b6a3[_0x4b6578(0x30f)](_0x3a7cab),_0x11b6a3['OQbpZ'](_0xd8f0f0),_0x11b6a3['zxaKu'](_0x19c8d8,_0x4aca28,_0x27692b);var _0xd65b7b={};for(var _0x3a9cdc=-0x1cc7+0x223+-0x1aa4*-0x1;_0x11b6a3['Zaswk'](_0x3a9cdc,_0x57dde2[_0x4b6578(0x964)+'h']);_0x3a9cdc++){var _0x388443=(_0x4b6578(0x8f1)+'|5|4|'+_0x4b6578(0x787))[_0x4b6578(0x783)]('|'),_0x1dcbe7=-0x10*0xb7+0x22f0+-0x1780;while(!![]){switch(_0x388443[_0x1dcbe7++]){case'0':var _0x11949c=_0x57dde2[_0x3a9cdc];continue;case'1':_0x4aaa70[_0x4b6578(0x55a)]=_0x4b6578(0x82e)+'n';continue;case'2':_0x12c0e8['appen'+_0x4b6578(0x432)+'d'](_0x4aaa70);continue;case'3':var _0x4aaa70=_0x11b6a3[_0x4b6578(0xa79)](_0x892466,'butto'+'n',_0x11b6a3['qVJjr'],_0x11b6a3['FFtWF']+_0x11949c['label']+_0x11b6a3[_0x4b6578(0xc3d)]);continue;case'4':(function(_0x130d46){var _0x14ad60={'iXfTt':function(_0x2e25f8,_0x29db79){return _0x2e25f8(_0x29db79);}};_0x4aaa70['oncli'+'ck']=function(){_0x14ad60['iXfTt'](_0x3530ac,_0x130d46);};}(_0x11949c['id']));continue;case'5':_0x4aaa70[_0x4b6578(0xe01)]=_0x11949c[_0x4b6578(0xcb3)];continue;case'6':_0xd65b7b[_0x11949c['id']]=_0x4aaa70;continue;}break;}}_0x59681c[_0x4b6578(0x82e)+'ns']=_0xd65b7b;var _0x2ed544=_0x11b6a3[_0x4b6578(0xa79)](_0x892466,_0x11b6a3[_0x4b6578(0x5be)],null,_0x2e6ca1);return _0x2ed544['id']='sakur'+_0x4b6578(0xaed)+'al',_0x2ed544[_0x4b6578(0xe01)]='Sakur'+_0x4b6578(0x7e0)+'llWar'+_0x4b6578(0x624)+_0x4b6578(0x3c7),_0x2ed544[_0x4b6578(0xc69)+'seent'+'er']=function(){var _0x16f8a6=_0x4b6578;_0x2ed544[_0x16f8a6(0x3d2)][_0x16f8a6(0x8b3)+'ty']='1';},_0x2ed544[_0x4b6578(0xc69)+_0x4b6578(0xde1)+'ve']=function(){var _0x463ede=_0x4b6578;_0x11b6a3['XZowF']==='FMgtJ'?_0x11ef22(_0x5b13ee):_0x2ed544[_0x463ede(0x3d2)][_0x463ede(0x8b3)+'ty']=_0x59681c[_0x463ede(0x892)]?'1':'.5';},_0x2ed544[_0x4b6578(0x576)+'ck']=function(_0x179823){var _0x4d5d91=_0x4b6578,_0x1e6913={'WcCCJ':_0x400aaf['dMidb'],'LWKaI':_0x4d5d91(0x33e)+_0x4d5d91(0x764)+_0x4d5d91(0x233)+'s'};if(_0x4d5d91(0x452)!=='CIQOB'){if(_0x179823&&_0x179823[_0x4d5d91(0xa54)+'ropag'+_0x4d5d91(0x266)])_0x179823[_0x4d5d91(0xa54)+_0x4d5d91(0xc9f)+_0x4d5d91(0x266)]();_0x400aaf['duAnc'](_0x3d4811,!_0x59681c['open']);}else{var _0x1b34ee=_0x1e6913[_0x4d5d91(0x8ad)][_0x4d5d91(0x783)]('|'),_0x574beb=-0x1f9*-0x2+-0x7f7*0x1+-0x157*-0x3;while(!![]){switch(_0x1b34ee[_0x574beb++]){case'0':return _0x51c15c;case'1':_0x1d5c88['id']='sakur'+'a-sw-'+'v2';continue;case'2':_0x58c92d=_0x2c366e['creat'+_0x4d5d91(0xc89)+'ent']('div');continue;case'3':_0xf67275[_0x4d5d91(0x300)][_0x4d5d91(0x927)+'dChil'+'d'](_0x411589);continue;case'4':if(!_0x5e77a5[_0x4d5d91(0x62c)+_0x4d5d91(0x91c)+'ById'](_0x4d5d91(0x33e)+'a-sw-'+_0x4d5d91(0x233)+'s')){var _0x5ddfea=_0x3d9d81['creat'+_0x4d5d91(0xc89)+'ent']('style');_0x5ddfea['id']=_0x1e6913[_0x4d5d91(0x24b)],_0x5ddfea[_0x4d5d91(0x4fc)+'onten'+'t']=_0x4d5d91(0xc26)+_0x4d5d91(0x822)+'-v2{a'+'ll:in'+_0x4d5d91(0x859)+'}',(_0x437233['head']||_0xe7258d['docum'+_0x4d5d91(0x337)+'ement'])['appen'+_0x4d5d91(0x432)+'d'](_0x5ddfea);}continue;}break;}}},document['body']['appen'+_0x4b6578(0x432)+'d'](_0x2ed544),_0x59681c['petal']=_0x2ed544,setInterval(function(){var _0x5b51b4=_0x4b6578;try{if(!_0x59681c[_0x5b51b4(0xd84)])return;var _0x1949ea=_0x11b6a3['OQbpZ'](_0x4f5dc5);_0x59681c['petal']['style']['opaci'+'ty']=_0x59681c['open']?'1':_0x1949ea?'.8':'.28',_0x59681c['petal']['title']=_0x1949ea?_0x5b51b4(0xbb3)+_0x5b51b4(0x7e0)+'llWar'+_0x5b51b4(0x624)+_0x5b51b4(0x3c7):_0x5b51b4(0xbb3)+'a\x20Ski'+'llWar'+_0x5b51b4(0xcef)+'aitin'+_0x5b51b4(0x1f8)+_0x5b51b4(0x377)+'game\x20'+'(Inse'+_0x5b51b4(0x8ef);}catch(_0x55085a){}},-0xbc8+0x711+0x1*0x773),_0x59681c['built']=!![],_0x3530ac(_0x59681c[_0x4b6578(0xa63)]),_0x4aca28;}}catch(_0xb93b54){return console['warn']('%c[sa'+'kura]'+'\x20menu'+'\x20unav'+_0x4b6578(0xcde)+'le',_0x11b6a3[_0x4b6578(0xa3a)](_0x4b6578(0xd72)+':',_0x6ccbd2),_0xb93b54),null;}}function _0x3530ac(_0x527308){var _0x1c37fd=_0x586988;if(_0x11b6a3[_0x1c37fd(0xb41)](_0x11b6a3[_0x1c37fd(0xe28)],_0x1c37fd(0xbfb))){_0x59681c['cat']=_0x527308,_0x59681c[_0x1c37fd(0x3d8)]=[];if(!_0x59681c['cols'])return;var _0x5004b9=null;for(var _0x31439c=0xd*-0xec+-0x1136*0x2+0x2e68;_0x11b6a3[_0x1c37fd(0x365)](_0x31439c,_0x57dde2['lengt'+'h']);_0x31439c++)if(_0x57dde2[_0x31439c]['id']===_0x527308)_0x5004b9=_0x57dde2[_0x31439c];_0x59681c['head'][_0x1c37fd(0x4fc)+_0x1c37fd(0xa15)+'t']=_0x1c37fd(0xbb3)+_0x1c37fd(0x7e0)+'llWar'+'z\x20—\x20'+(_0x5004b9&&_0x5004b9[_0x1c37fd(0xcb3)]||'?');for(var _0x58f865 in _0x59681c[_0x1c37fd(0x82e)+'ns']){if(_0x59681c[_0x1c37fd(0x82e)+'ns'][_0x58f865]['class'+'List'])_0x59681c[_0x1c37fd(0x82e)+'ns'][_0x58f865][_0x1c37fd(0x1bc)+'Name']=_0x1c37fd(0x9a5)+'b'+(_0x58f865===_0x527308?_0x11b6a3['Bwuzh']:'');}var _0x9563f7=[];try{_0x9563f7=_0x5a646a(_0x527308);}catch(_0x1145ce){'ivSIe'!=='kKxkH'?_0x9563f7=[]:_0xf2ac73[_0x1c37fd(0xad9)+_0x1c37fd(0x328)+'te'](_0x11b6a3[_0x1c37fd(0xb89)],_0x4e8af7()?_0x1c37fd(0xbb1):_0x1c37fd(0x17f));}while(_0x59681c['cols'][_0x1c37fd(0xab7)+_0x1c37fd(0x438)])_0x59681c[_0x1c37fd(0x249)][_0x1c37fd(0x814)+_0x1c37fd(0x8a8)+'d'](_0x59681c['cols']['first'+_0x1c37fd(0x438)]);for(var _0x29df2d=-0x1*0xa62+0xff*-0xa+0x1458;_0x29df2d<_0x9563f7['lengt'+'h'];_0x29df2d++)_0x59681c[_0x1c37fd(0x249)][_0x1c37fd(0x927)+_0x1c37fd(0x432)+'d'](_0x9563f7[_0x29df2d]);}else return _0x455e87['boxes'];}function _0x3d4811(_0x946e90){var _0x25bd3a=_0x586988,_0x455a02={'YzQPt':function(_0x1b9c79){return _0x1b9c79();}};_0x59681c['open']=!!_0x946e90;var _0x1b6102=_0x11b6a3['hNOjA'](_0x5d6371);if(!_0x1b6102)return;_0x1b6102[_0x25bd3a(0x1bc)+_0x25bd3a(0x466)]=_0x11b6a3['URsPe'](_0x11b6a3['afquY'],_0x59681c[_0x25bd3a(0x892)]?_0x11b6a3['RDvPm']:'');if(_0x59681c[_0x25bd3a(0xd84)])_0x59681c[_0x25bd3a(0xd84)]['style']['opaci'+'ty']=_0x59681c[_0x25bd3a(0x892)]?'1':'.5';if(_0x59681c['open']){if(_0x11b6a3['SNxoq']==='GgdHo'){if(_0xab6424['tried'])return _0x322be4;return _0x455a02['YzQPt'](_0xe6c11);}else{_0x11b6a3[_0x25bd3a(0x4a1)](_0x3530ac,_0x59681c[_0x25bd3a(0xa63)]);try{if(_0x11b6a3[_0x25bd3a(0x3e1)]===_0x25bd3a(0x1b4)){var _0xca571f=window[_0x25bd3a(0xdd8)+_0x25bd3a(0x79f)+'t']||0x2565+-0x1065*-0x1+-0x32aa;if(_0xca571f<0x5bd*-0x6+-0x1*-0x159e+0xf3c)_0x11b6a3[_0x25bd3a(0x728)](_0x417950,![]);}else return null;}catch(_0x4b048c){}}}}function _0x175b3a(){var _0x24f796=_0x586988,_0x1486b6={'NhiQs':_0x24f796(0x96c)+'s','NrlNU':_0x24f796(0x33e)+'a-box'+'es','lQxjo':_0x24f796(0xc82)+'ion:f'+_0x24f796(0x34d)+_0x24f796(0x7a1)+'0;top'+':0;z-'+_0x24f796(0x51a)+':2147'+_0x24f796(0xadf)+'5;poi'+'nter-'+_0x24f796(0xd4b)+_0x24f796(0xc79)+'e;','XqApF':function(_0x51e993,_0x54229e){return _0x51e993+_0x54229e;},'uQKBI':function(_0xf99ef2,_0x49b5fc){var _0x12612c=_0x24f796;return _0x11b6a3[_0x12612c(0x58e)](_0xf99ef2,_0x49b5fc);},'lmDEi':'0\x20of\x20','LyUIo':_0x24f796(0x7c1)+'once\x20'+'durin'+_0x24f796(0x4bb)+_0x24f796(0x468)+_0x24f796(0x1bb)+_0x24f796(0x753)+_0x24f796(0x343)+_0x24f796(0x196)+'snaps'+_0x24f796(0x315)+_0x24f796(0x5bd)+'n.hoo'+'ks.le'+_0x24f796(0xbd8)+'\x20','mrhCC':_0x24f796(0xbdc)+_0x24f796(0x1bf)+'egist'+'ered\x20'+_0x24f796(0x737)+_0x24f796(0x7ab)+'re\x20ig'+'nored'+_0x24f796(0x638)+'the\x20l'+'ife\x20o'+_0x24f796(0xb20)+'\x20page'+'.\x20','TVcLK':_0x11b6a3[_0x24f796(0xb85)],'FZlvC':_0x24f796(0xddc)+_0x24f796(0xb1c)+_0x24f796(0x74d)+'\x20armi'+'ng\x20at'+_0x24f796(0x567)+_0x24f796(0x559)+_0x24f796(0xe1e)+'.','wIoyK':function(_0x2c4f29,_0x290453){return _0x2c4f29+_0x290453;},'nqezZ':_0x24f796(0xbd6)+_0x24f796(0xa36)+'ved\x20','kKwxJ':_0x24f796(0x601),'AaIOa':_0x11b6a3[_0x24f796(0x3b9)]};if(!_0x59681c[_0x24f796(0x892)]||!_0x59681c[_0x24f796(0xc25)])return;try{if('ZVuRr'!==_0x24f796(0xce8)){for(var _0x51ba65=-0x32+-0x15a7+0x15d9;_0x11b6a3[_0x24f796(0x3e6)](_0x51ba65,_0x59681c[_0x24f796(0x3d8)][_0x24f796(0x964)+'h']);_0x51ba65++){try{if(_0x11b6a3[_0x24f796(0xa7b)]===_0x11b6a3[_0x24f796(0xa7b)])_0x59681c[_0x24f796(0x3d8)][_0x51ba65]();else{if(_0x4fa265)return _0x14436b;try{if(!_0x325ef3[_0x24f796(0x300)]||!_0x2530b3['body'][_0x24f796(0x927)+'dChil'+'d'])return null;var _0x2392ad=_0x332e7d[_0x24f796(0xcfa)+'eElem'+_0x24f796(0x1e5)](_0x1486b6[_0x24f796(0x1de)]);return _0x2392ad['id']=_0x1486b6['NrlNU'],_0x2392ad[_0x24f796(0x3d2)]['cssTe'+'xt']=_0x1486b6[_0x24f796(0x451)],_0x37e55c[_0x24f796(0x300)]['appen'+_0x24f796(0x432)+'d'](_0x2392ad),_0x36cc7e={'cv':_0x2392ad},_0x384050;}catch(_0x56dea2){return null;}}}catch(_0x2f44d8){}}var _0x2e9b58=_0x1eb154;_0x59681c['sub'][_0x24f796(0x4fc)+_0x24f796(0xa15)+'t']=_0x2e9b58?_0x11b6a3[_0x24f796(0x195)](_0x11b6a3[_0x24f796(0xc6b)](_0x11b6a3['bmeOF'](_0x11b6a3[_0x24f796(0x396)](_0x11b6a3[_0x24f796(0xaf7)]('v',_0x2e9b58['versi'+'on']),_0x24f796(0x845)+_0x24f796(0xb2a)+'\x20'),_0x2e9b58['hooks'+'Appli'+'ed'])+'/'+_0x2e9b58['hooks'+'Total'],_0x11b6a3[_0x24f796(0x4b4)])+(_0x2e9b58[_0x24f796(0x68a)]&&_0x2e9b58[_0x24f796(0x68a)]['playe'+_0x24f796(0x349)+'t']||-0xc2f*-0x3+0x1b07+-0x3f94),'\x20\x20·\x20\x20'+_0x24f796(0xc2b))+(_0x2e9b58['wasmM'+_0x24f796(0x5e9)]&&_0x2e9b58[_0x24f796(0x1c3)+_0x24f796(0x5e9)][_0x24f796(0x585)+_0x24f796(0xaca)]?_0x11b6a3['tzOie'](Math['round'](_0x2e9b58['wasmM'+_0x24f796(0x5e9)][_0x24f796(0xcd0)]/(-0x3d*-0x2d43+0x23*-0x6143+0x128332)),'MB'):'-'):'waiti'+_0x24f796(0xdeb)+_0x24f796(0x623)+'\x20firs'+_0x24f796(0x6fe)+'ort…';var _0x5a659a=_0x59681c[_0x24f796(0x249)][_0x24f796(0x181)+'Selec'+'torAl'+'l']?_0x59681c[_0x24f796(0x249)]['query'+_0x24f796(0x381)+'torAl'+'l']('[data'+_0x24f796(0xc11)):[];for(var _0x44a1c5=-0xc83*-0x2+-0x1*-0x2309+0x3*-0x1405;_0x44a1c5<_0x5a659a[_0x24f796(0x964)+'h'];_0x44a1c5++){var _0x172f4d=_0x5a659a[_0x44a1c5][_0x24f796(0x276)+'et']['k'],_0x595a4c='';if(_0x11b6a3[_0x24f796(0x509)](_0x172f4d,_0x24f796(0x2fe)+'ON'))_0x595a4c=_0x2e9b58?_0x2e9b58[_0x24f796(0x84b)+'on']:'-';else{if(_0x172f4d===_0x11b6a3['eHMpT'])_0x595a4c=_0x2e9b58?_0x11b6a3['BVWLK'](_0x11b6a3[_0x24f796(0x280)](_0x2e9b58[_0x24f796(0xb2a)+_0x24f796(0xc33)+'ed'],_0x11b6a3[_0x24f796(0x28b)]),_0x2e9b58[_0x24f796(0xb2a)+'Regis'+_0x24f796(0x879)+_0x24f796(0x7fa)]):'-';else{if(_0x172f4d==='from\x20'+'insta'+_0x24f796(0x876)+_0x24f796(0x1e9))_0x595a4c=_0x2e9b58&&_0x2e9b58[_0x24f796(0x1c3)+_0x24f796(0x5e9)]&&_0x2e9b58[_0x24f796(0x1c3)+'emory'][_0x24f796(0x585)+'red']?Math[_0x24f796(0x2c4)](_0x2e9b58[_0x24f796(0x1c3)+'emory'][_0x24f796(0xcd0)]/(0x89b5d+0x6*-0x340f4+0x1aea5b))+(_0x24f796(0xbf3)+'\x20')+_0x2e9b58[_0x24f796(0x1c3)+'emory'][_0x24f796(0xa73)]+'ms':'-';else{if(_0x172f4d===_0x11b6a3[_0x24f796(0xbf9)])_0x595a4c=_0x2e9b58&&_0x2e9b58['esp']?String(_0x2e9b58[_0x24f796(0x68a)][_0x24f796(0xd46)+_0x24f796(0x349)+'t']):'-';else{if(_0x172f4d===_0x11b6a3[_0x24f796(0xbfe)])_0x595a4c=_0x2e9b58&&_0x2e9b58[_0x24f796(0x68a)]?_0x11b6a3[_0x24f796(0x5b2)](String,_0x2e9b58['esp'][_0x24f796(0x4e2)+'Count']):'-';else{if(_0x172f4d===_0x11b6a3['CMMuN'])_0x595a4c=_0x2e9b58&&_0x2e9b58[_0x24f796(0x68a)]&&_0x2e9b58['esp']['camer'+'a']?_0x11b6a3['kzhBY'](_0x2e9b58['esp'][_0x24f796(0x89e)+'a']+'\x20(',_0x2e9b58[_0x24f796(0x68a)][_0x24f796(0x89e)+_0x24f796(0x2d7)])+')':'-';else{if(_0x172f4d===_0x24f796(0xb78)+_0x24f796(0x6a2)+'ler+0'+_0x24f796(0x8eb))_0x595a4c=_0x2e9b58&&_0x2e9b58[_0x24f796(0x209)]&&_0x2e9b58[_0x24f796(0x209)]['feet']?_0x2e9b58['local']['feet']['map'](function(_0x10b487){var _0x6d1bef=_0x24f796;return Math[_0x6d1bef(0x2c4)](_0x10b487*(0x1*0xdd5+0x164d+-0xa*0x393))/(0xed4+0x2665+-0x21d*0x19);})[_0x24f796(0xd89)]('\x20\x20'):'-';else{if(_0x11b6a3[_0x24f796(0x1dc)](_0x172f4d,'+0x29'+'8'))_0x595a4c=_0x2e9b58&&_0x2e9b58[_0x24f796(0x209)]&&_0x2e9b58[_0x24f796(0x209)][_0x24f796(0xda1)]?_0x2e9b58[_0x24f796(0x209)]['eye'][_0x24f796(0x2dd)](function(_0xbe225a){var _0x3c8d1b=_0x24f796;return Math[_0x3c8d1b(0x2c4)](_0xbe225a*(0x31*0x1+-0x5*-0x2e4+-0x59*0x29))/(0x143a+-0x2*-0xc8e+-0x2cf2);})[_0x24f796(0xd89)]('\x20\x20'):'-';else{var _0x587c93=_0x172f4d['split']('+');_0x595a4c=_0x2bdc0e(_0x2e9b58,_0x587c93[0x142b+-0x12e*-0x19+-0x31a9][_0x24f796(0x51a)+'Of'](_0x24f796(0xcbe)+'h')===-0x189*0x13+0x1f*0x2f+-0x1*-0x177a?_0x24f796(0xcbe)+'hScri'+'pt':'FPSco'+'ntrol'+_0x24f796(0x24a),parseInt(_0x587c93[-0x1003+0x79a+0x86a],-0x1e97+-0x656*-0x5+0x107*-0x1));}}}}}}}}if(_0x11b6a3[_0x24f796(0xb93)](_0x595a4c,_0x5a659a[_0x44a1c5]['textC'+'onten'+'t']))_0x5a659a[_0x44a1c5]['textC'+'onten'+'t']=_0x595a4c;}}else _0x30bc24[_0x24f796(0xb2a)+_0x24f796(0xc6a)+'ved']===-0x610+0x314*-0xc+0x2b00?_0x5edd2e['warni'+_0x24f796(0xc12)][_0x24f796(0x68c)](_0x1486b6['XqApF'](_0x1486b6['XqApF'](_0x1486b6[_0x24f796(0x21e)](_0x1486b6[_0x24f796(0x46f)](_0x1486b6[_0x24f796(0xa71)]+_0x55f503[_0x24f796(0xb2a)+_0x24f796(0x730)]+(_0x24f796(0xddc)+_0x24f796(0xd41)+_0x24f796(0x2ec)+'n\x20SEE'+_0x24f796(0xda4)+_0x24f796(0x561)+'\x20The\x20'+_0x24f796(0x9fa)+'\x20pass'+'\x20'),_0x1486b6[_0x24f796(0x2d8)]),_0x1486b6['mrhCC']),_0x1486b6[_0x24f796(0x715)])+_0x4634e4['hooks'+_0x24f796(0x165)+_0x24f796(0x879)+_0x24f796(0x7fa)],_0x1486b6[_0x24f796(0xd86)])):_0x3f4701[_0x24f796(0x4cf)+_0x24f796(0xc12)]['push'](_0x1486b6[_0x24f796(0x46f)](_0x1486b6[_0x24f796(0x21e)](_0x1486b6[_0x24f796(0x34b)](_0x1486b6['XqApF'](_0x1486b6[_0x24f796(0x34b)](_0x1486b6['nqezZ'],_0x4c4a76['hooks'+'Resol'+'ved']),_0x1486b6[_0x24f796(0x7ad)]),_0x4fd98f[_0x24f796(0xb2a)+'Total']),_0x24f796(0xddc)+_0x24f796(0x57d)+_0x24f796(0x80b)+_0x24f796(0x9cb)+_0x24f796(0x51a)+'\x20but\x20'+_0x24f796(0x2a5)+'ed\x20no'+'ne.\x20T'+'he\x20si'+'gnatu'+_0x24f796(0x542)),_0x1486b6['AaIOa']));}catch(_0x2e66be){}}function _0x1e07e2(){var _0x577733=_0x586988;if(_0x11b6a3['OKARC']!==_0x11b6a3[_0x577733(0x6c3)])_0x3fada0[_0x577733(0x4cf)+'ngs'][_0x577733(0x68c)](_0x11b6a3[_0x577733(0xd99)](_0x11b6a3[_0x577733(0x6c2)](_0x11b6a3[_0x577733(0x5cc)],_0x506c7c['hooks'+_0x577733(0xc6a)+_0x577733(0x651)])+'\x20of\x20'+_0x2a2380['hooks'+_0x577733(0x730)],'\x20hook'+_0x577733(0x57d)+_0x577733(0x80b)+_0x577733(0x9cb)+'index'+_0x577733(0x6d4)+'appli'+_0x577733(0x6d1)+_0x577733(0xc71)+_0x577733(0xe1b)+_0x577733(0x9ab)+'re\x20')+(_0x577733(0x713)+_0x577733(0x878)+_0x577733(0xaf9)+'fo*)\x20'+'->\x20vo'+_0x577733(0x1c1)+'es\x20no'+'t\x20mat'+'ch\x20th'+_0x577733(0x477)+'ild.'));else try{var _0x2d74d1=_0x11b6a3['OQbpZ'](_0x2cc79a);return _0x2d74d1&&_0x2d74d1[_0x577733(0x573)]?_0x2d74d1[_0x577733(0x573)][-0x1100*0x1+0x67*-0x6+0x136b]:null;}catch(_0x22aace){if(_0x11b6a3[_0x577733(0x71a)](_0x577733(0xe00),_0x577733(0x844)))return null;else _0x531fd5[_0x577733(0x3d2)][_0x577733(0x8b3)+'ty']=_0x2c1ca7[_0x577733(0x892)]?'1':'.5';}}var _0x1a9ea2=-0x3*-0x7c6+-0x6c5*-0x3+-0x35b*0xd+0.5,_0x731970=0x3f8+-0xac6+0x6d4+0.25,_0x2a3d45={},_0xa33730=null,_0x23be9f=-0xe31+0x1cc4+-0xe92+0.8;function _0x2092fe(_0x5b995a,_0x5d9fd8,_0x47b8ea){var _0x3d89c0=_0x586988,_0x41bcce={'KfNFh':function(_0x11dc71,_0x20907c){return _0x11dc71<_0x20907c;},'oYGrb':_0x11b6a3['RZBgx'],'dBuRM':function(_0x48a4eb,_0x301550){return _0x11b6a3['wSkHv'](_0x48a4eb,_0x301550);}};try{if(_0x11b6a3['rQFVI'](_0x11b6a3[_0x3d89c0(0xa2f)],_0x11b6a3[_0x3d89c0(0x99f)])){var _0x1a3de6=[],_0x5bfd1d,_0x14d8df,_0x3744a9=_0x5d9fd8!==null&&_0x5d9fd8!==undefined&&_0x11b6a3[_0x3d89c0(0xa17)](isFinite,_0x5d9fd8),_0x404c5b=-0x1*-0x155a+-0x1c01+-0xd*-0x83;for(_0x5bfd1d=-0xa46+-0x358+-0xd9e*-0x1;_0x5bfd1d<_0x5b995a[_0x3d89c0(0x964)+'h'];_0x5bfd1d++){if(_0x11b6a3['RRKII']==='mHNYd'){var _0x5d97e6=_0x5b995a[_0x5bfd1d]['v'];if(!_0x5d97e6)continue;var _0x41ab66=Math[_0x3d89c0(0xba0)](_0x11b6a3[_0x3d89c0(0x818)](_0x5d97e6[0x49*-0x63+-0x9c9+0x4*0x981]*_0x5d97e6[-0x2d8+-0x1*0x475+0x74d],_0x5d97e6[0x1b*0x125+-0x22e9+0x404]*_0x5d97e6[-0x1bc5*-0x1+0x19ea+-0x35ad]));if(_0x41ab66>_0x404c5b)_0x404c5b=_0x41ab66;}else _0x130692=!_0x13b5f0,_0x11b6a3[_0x3d89c0(0x87d)](_0x1698e0);}var _0x16a180=_0x404c5b*(-0xc*0x185+-0xbc*-0x13+0x448+0.25),_0x4c0506=-0x75*0x3+-0x1b93+-0xd*-0x23a;typeof console!==_0x11b6a3[_0x3d89c0(0xd8b)]&&console['log']&&!globalThis['__ppL'+'ogged']&&(globalThis[_0x3d89c0(0xbc0)+_0x3d89c0(0x481)]=-0x67*-0x16+-0x6*-0x4e+-0xaad*0x1,console[_0x3d89c0(0x45e)](_0x11b6a3['rHgDY'](_0x3d89c0(0x76e)+'n='+_0x5b995a['lengt'+'h']+(_0x3d89c0(0xbe4)+'h=')+_0x404c5b[_0x3d89c0(0xd34)+'ed'](-0x1004*-0x1+0x1ebc+-0x2ebe),_0x3d89c0(0x20a)+'r=')+_0x16a180['toFix'+'ed'](-0x2345+0x17b3*-0x1+-0x3afa*-0x1)+(_0x3d89c0(0x6d5)+'n=')+_0x3744a9+(_0x3d89c0(0x6dc)+'le=')+JSON[_0x3d89c0(0x659)+_0x3d89c0(0x686)](_0x5b995a['slice'](-0x26be+-0x1*-0x242c+0x292,-0xa78*-0x1+-0x1077+0x601))));for(_0x5bfd1d=0x1fc6+-0x5*-0x295+-0x2caf;_0x5bfd1d<_0x5b995a[_0x3d89c0(0x964)+'h'];_0x5bfd1d++){var _0x526a2f=_0x5b995a[_0x5bfd1d]['v'];if(!_0x526a2f)continue;if(_0x11b6a3[_0x3d89c0(0xde5)](_0x526a2f[-0x1*-0x1307+0xb24*0x2+-0x294f],-0xf9e+-0x1f26+0x2ec4)&&_0x526a2f[-0x4a*0x1b+-0x1d21*-0x1+-0x1552*0x1]===-0x4f9+0x16ca+0x11d1*-0x1&&_0x526a2f[0x1cd*0x1+-0x3*-0x4f6+-0x10ad]===0x1196+0x7*0x4a+0x5*-0x3ec)continue;var _0x4debd9=Math['sqrt'](_0x526a2f[0xa90+0x208d*-0x1+0x1*0x15fd]*_0x526a2f[0x14*-0x89+-0x24dd*-0x1+0xb5*-0x25]+_0x526a2f[0x1679+0x10b5+0x2*-0x1396]*_0x526a2f[-0x1de+0x253+-0x5*0x17]);if(_0x4debd9<_0x16a180){if(_0x11b6a3[_0x3d89c0(0x2c2)]!=='DpkBz'){_0x4c0506++;continue;}else _0x11fbfe=_0x38e4fc[_0x40ffbe]['last'],_0x491ccd[_0x3d89c0(0x6f8)+'e']=_0x3d89c0(0xc40)+'r',_0x461104=_0x232883?_0x45344[_0x239b35][_0x3d89c0(0x51e)]:_0x46aa78(_0x7039c9+_0x18d9c6,'f32');}_0x1a3de6[_0x3d89c0(0x68c)](_0x5b995a[_0x5bfd1d]);}if(!_0x1a3de6[_0x3d89c0(0x964)+'h'])return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x4c0506,'ambiguous':![],'reach':0x0,'held':![]};var _0x2165d9=[];for(_0x5bfd1d=0x64+-0xd63+0xcff;_0x5bfd1d<_0x1a3de6['lengt'+'h'];_0x5bfd1d++){var _0x3906ed=_0x1a3de6[_0x5bfd1d]['v'],_0x2cd8c9=-(0x9*-0x46+-0x14*0x10c+0x1767);for(_0x14d8df=0x6*-0x63d+0xe8f*0x2+0x38*0x26;_0x14d8df<_0x2165d9[_0x3d89c0(0x964)+'h'];_0x14d8df++){if(_0x11b6a3[_0x3d89c0(0x1d3)](_0x11b6a3[_0x3d89c0(0x877)],_0x11b6a3[_0x3d89c0(0x246)]))return _0x4e277d['getIt'+'em'](_0x1dda3d)==='1';else{var _0x2f5d5b=_0x2165d9[_0x14d8df]['c'][-0x42e+-0x2*0x1370+0x2b0e]['v'],_0x2588b7=_0x3906ed[-0x19cc+0x34d+-0x167f*-0x1]-_0x2f5d5b[-0x1*-0x14b9+-0x1315*-0x1+-0x27ce],_0x595c76=_0x3906ed[-0x7ed+-0x6d*0x43+0x2475]-_0x2f5d5b[0x18b3*0x1+0xc*0x2b9+0x395e*-0x1],_0x43efcc=_0x3906ed[-0x788*0x4+0x1*0x2362+-0x10*0x54]-_0x2f5d5b[0x346+-0x36f*0x6+0x7*0x27a];if(_0x11b6a3[_0x3d89c0(0xd4d)](_0x11b6a3[_0x3d89c0(0x7b8)](_0x2588b7*_0x2588b7,_0x11b6a3[_0x3d89c0(0xc10)](_0x595c76,_0x595c76)),_0x43efcc*_0x43efcc)<=_0x731970){_0x2cd8c9=_0x14d8df;break;}}}if(_0x2cd8c9===-(0x73a+0x2685+-0x2*0x16df))_0x2165d9[_0x3d89c0(0x68c)]({'c':[_0x1a3de6[_0x5bfd1d]]});else _0x2165d9[_0x2cd8c9]['c'][_0x3d89c0(0x68c)](_0x1a3de6[_0x5bfd1d]);}var _0xbddf99=_0x2165d9[0x1*0xfe8+-0x206f+0x1087],_0x5ca120=-Infinity;for(_0x14d8df=-0x2217+0xab0+0x1767;_0x14d8df<_0x2165d9[_0x3d89c0(0x964)+'h'];_0x14d8df++){var _0x4b90b0=_0x2165d9[_0x14d8df]['c'],_0x3188cc=_0x11b6a3[_0x3d89c0(0xaad)](_0x4b90b0['lengt'+'h'],-0x1660+0x26f*0xe+-0x7ca);if(_0x3744a9){var _0x4e6de2=Infinity;for(var _0x39ccab=-0x217a+-0x699+-0x1*-0x2813;_0x11b6a3['akFnl'](_0x39ccab,_0x4b90b0[_0x3d89c0(0x964)+'h']);_0x39ccab++){var _0x3e666c=Math[_0x3d89c0(0x9ad)](_0x4b90b0[_0x39ccab]['v'][-0x1854+0x463*0x3+-0x14*-0x8f]-_0x5d9fd8);if(_0x3e666c<_0x4e6de2)_0x4e6de2=_0x3e666c;}_0x3188cc-=_0x4e6de2;}else{var _0x2e2ea0=0x15*0x19e+-0x8e2+0xc8a*-0x2;for(var _0x25ed60=-0x3*-0x9c1+0x17e0+-0xdf*0x3d;_0x25ed60<_0x4b90b0[_0x3d89c0(0x964)+'h'];_0x25ed60++){var _0x52a99e=Math['sqrt'](_0x11b6a3['skRPz'](_0x11b6a3['szhnh'](_0x4b90b0[_0x25ed60]['v'][0x1a20+0x79a+-0x21ba],_0x4b90b0[_0x25ed60]['v'][-0x914*-0x1+0x426+-0xd3a]),_0x4b90b0[_0x25ed60]['v'][0x8e2+0x4*0x724+0x2*-0x12b8]*_0x4b90b0[_0x25ed60]['v'][-0x1954+0x1397*-0x1+0x2ced]));if(_0x52a99e>_0x2e2ea0)_0x2e2ea0=_0x52a99e;}_0x3188cc+=_0x2e2ea0;}_0x3188cc>_0x5ca120&&(_0x5ca120=_0x3188cc,_0xbddf99=_0x2165d9[_0x14d8df]);}var _0x44d899=_0xbddf99['c'][-0x1c5b+0x40*-0x13+0x211b],_0x769f6b=-(0x1*0x1085+-0x4*0x22d+0x10*-0x7d);for(_0x14d8df=0x824+0x1541*0x1+-0x1d65;_0x14d8df<_0xbddf99['c']['lengt'+'h'];_0x14d8df++){var _0x24ff1d=_0xbddf99['c'][_0x14d8df]['v'],_0x1bc7e3=Math['sqrt'](_0x11b6a3[_0x3d89c0(0xc01)](_0x24ff1d[-0x179d+-0x9*0x3fb+0x3b70]*_0x24ff1d[0x89c+-0x2fc+-0x5a0],_0x11b6a3[_0x3d89c0(0x92c)](_0x24ff1d[-0x3*-0xc75+-0x17b*-0x5+-0x2cc4],_0x24ff1d[-0x10*0x109+0xa6c+0x626])));if(_0x11b6a3['SSqPQ'](_0x1bc7e3,_0x769f6b)||_0x11b6a3['aDxeH'](_0x1bc7e3,_0x769f6b)&&_0x11b6a3['jORPu'](_0x24ff1d[-0x5df*0x3+-0x1*0x1c9c+-0x2*-0x171d],_0x44d899['v'][-0x8b*-0x3b+0xa*0x140+-0x2c88])){if(_0x11b6a3['oVBTz']('YUHrn','LaebF'))_0x769f6b=_0x1bc7e3,_0x44d899=_0xbddf99['c'][_0x14d8df];else{var _0x22c75b=_0x24beeb[_0x3d89c0(0x1c2)+_0x3d89c0(0x881)+_0x3d89c0(0x984)]&&_0x4d8e55['Unity'+_0x3d89c0(0x881)+'dkit']['Runti'+'me'],_0x356e0b=_0x22c75b&&_0x22c75b[_0x3d89c0(0xcd1)+'nalWa'+_0x3d89c0(0xa86)+'es']||[],_0x99ada0={};for(var _0x3572fa=-0x1a05+0x3*0x595+-0x2*-0x4a3;_0x3572fa<_0x356e0b[_0x3d89c0(0x964)+'h']&&_0x41bcce['KfNFh'](_0x3572fa,-0x6*0x511+-0x52*-0x1b+0x2560);_0x3572fa++){var _0x3d41a0=_0x356e0b[_0x3572fa][_0x3d89c0(0xbf2)+'s'][_0x3d89c0(0xd89)](',')+_0x41bcce[_0x3d89c0(0x4b2)]+(_0x356e0b[_0x3572fa][_0x3d89c0(0xbc8)+_0x3d89c0(0x6be)]||_0x3d89c0(0xd0e));_0x99ada0[_0x3d41a0]=(_0x99ada0[_0x3d41a0]||0x1e28+0xff6*-0x2+0x1c4)+(-0x1*-0x5b9+-0x10b7*-0x1+-0x166f);}_0x5bf516['wasmT'+_0x3d89c0(0x9a3)]=_0x99ada0;}}}var _0x671fea=![];if(_0x47b8ea&&_0x47b8ea['o'])for(_0x14d8df=0x1194+-0xb1b+-0x679*0x1;_0x14d8df<_0xbddf99['c']['lengt'+'h'];_0x14d8df++){if(_0xbddf99['c'][_0x14d8df]['o']!==_0x47b8ea['o'])continue;if(_0x3744a9){var _0x4a0eba=Math['abs'](_0xbddf99['c'][_0x14d8df]['v'][-0x137e+-0x1*0x2539+-0x5*-0xb58]-_0x5d9fd8),_0x5895d7=Infinity;for(var _0x49fc75=-0x1c28+0x1a9d+0x18b;_0x11b6a3[_0x3d89c0(0xd65)](_0x49fc75,_0xbddf99['c'][_0x3d89c0(0x964)+'h']);_0x49fc75++){var _0x598a5e=Math['abs'](_0x11b6a3[_0x3d89c0(0x414)](_0xbddf99['c'][_0x49fc75]['v'][-0x5*-0x452+-0xe6c+0x1*-0x72d],_0x5d9fd8));if(_0x11b6a3[_0x3d89c0(0x1fb)](_0x598a5e,_0x5895d7))_0x5895d7=_0x598a5e;}if(_0x4a0eba>_0x5895d7+(0x5ab+0x3b7*-0x5+-0x1d8*-0x7+0.35))break;}_0x44d899=_0xbddf99['c'][_0x14d8df],_0x769f6b=Math['sqrt'](_0x44d899['v'][0x1*0x1d2f+-0x4*0x1c9+-0x160b]*_0x44d899['v'][0x1ecb+-0xef6+-0xfd5]+_0x11b6a3[_0x3d89c0(0x4f9)](_0x44d899['v'][-0x3c2*-0x6+-0x8f5+-0x39*0x3d],_0x44d899['v'][-0x27f+0x33*-0xc1+0x28f4])),_0x671fea=!![];break;}return{'pos':_0x44d899['v'],'posAt':_0x44d899['o'],'candidates':_0x1a3de6[_0x3d89c0(0x964)+'h'],'cluster':_0xbddf99['c'][_0x3d89c0(0x964)+'h'],'groups':_0x2165d9[_0x3d89c0(0x964)+'h'],'held':_0x671fea,'discarded':_0x4c0506,'ambiguous':_0x11b6a3[_0x3d89c0(0x4bd)](_0x2165d9['lengt'+'h'],-0xaee*0x3+0x10df+0xfec),'reach':_0x769f6b};}else{var _0x9f0c32=_0x33b59a['getEl'+'ement'+'ById'](_0x3d89c0(0x33e)+'a-sw-'+_0x3d89c0(0xd5c)+'b');if(_0x336d4f&&!_0x9f0c32&&_0x18c046[_0x3d89c0(0x300)]){var _0x23f1bc=_0x32ad2c[_0x3d89c0(0xcfa)+'eElem'+_0x3d89c0(0x1e5)](_0x11b6a3[_0x3d89c0(0x5be)]);_0x23f1bc['id']='sakur'+'a-sw-'+_0x3d89c0(0xd5c)+'b',_0x23f1bc[_0x3d89c0(0x3d2)][_0x3d89c0(0xba1)+'xt']=_0x11b6a3[_0x3d89c0(0x9d1)](_0x11b6a3['pMUHl'](_0x11b6a3['WwZmD']+_0x11b6a3['SkHhr'],_0x1c5af0)+';',_0x11b6a3[_0x3d89c0(0xa8a)]),_0x23f1bc['textC'+_0x3d89c0(0xa15)+'t']=_0x11b6a3[_0x3d89c0(0xccb)],_0x23f1bc[_0x3d89c0(0x576)+'ck']=function(){_0x41bcce['dBuRM'](_0x15befe,![]),_0x306fd5();},_0x5e114c[_0x3d89c0(0x300)][_0x3d89c0(0x927)+'dChil'+'d'](_0x23f1bc);}else!_0x303ad6&&_0x9f0c32&&_0x9f0c32['remov'+'e']();}}catch(_0x2e4e7b){return console[_0x3d89c0(0x45e)](_0x3d89c0(0x2d1)+_0x3d89c0(0x626),_0x2e4e7b[_0x3d89c0(0xd29)+'ge'],_0x11b6a3[_0x3d89c0(0x3b1)](String,_0x2e4e7b[_0x3d89c0(0x62d)]||'')['split']('\x0a')['slice'](0x142b+0x1a08+0x1*-0x2e33,-0x200e+-0x139d+0x65*0x83)[_0x3d89c0(0xd89)](_0x3d89c0(0xda6))),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x2cc79a(){var _0xc16bf0=_0x586988,_0x608417={'KszOa':function(_0xd73421,_0x39b2c9){return _0xd73421===_0x39b2c9;},'qHxVG':function(_0x3d991d,_0x501afc){return _0x11b6a3['DEUep'](_0x3d991d,_0x501afc);},'oEGsv':function(_0x3b5e3b,_0x5beab2){var _0x4487be=_0x576a;return _0x11b6a3[_0x4487be(0xa94)](_0x3b5e3b,_0x5beab2);},'DpvSL':function(_0xf16843,_0x19a67){return _0xf16843(_0x19a67);}},_0x165496=_0x4c2416['FPSco'+_0xc16bf0(0x6a2)+'ler'];if(!_0x165496||!_0x165496[_0xc16bf0(0x461)])return null;var _0x16dcc4=_0x5b1b65['FPSco'+_0xc16bf0(0x6a2)+_0xc16bf0(0x24a)]||[],_0x43d360=[];for(var _0x239714=0xc4*-0x7+0x140f+0xeb3*-0x1;_0x11b6a3['JWPqz'](_0x239714,_0x16dcc4[_0xc16bf0(0x964)+'h']);_0x239714++){if(_0x16dcc4[_0x239714][0x1*-0x1e9a+-0x3b2+0x224d]!=='v3')continue;var _0x4a749b=_0x11b6a3[_0xc16bf0(0xb6f)](_0x25d0eb,_0x165496['ptr'],_0x16dcc4[_0x239714][0x1e67+0x1e72+0x25*-0x1a5],-0xc8b+-0x1958+0x25e6);if(_0x4a749b)_0x43d360[_0xc16bf0(0x68c)]({'o':'0x'+_0x16dcc4[_0x239714][-0x9d9*0x1+-0x7b+0xa54]['toStr'+_0xc16bf0(0x3cc)](-0x58d+0x17e7+-0x124a),'v':_0x4a749b});}var _0xed0830=_0x11b6a3['nFkps'](_0x2092fe,_0x43d360,null,_0xa33730);if(!_0xed0830[_0xc16bf0(0x3a2)])return null;_0xa33730=_0xed0830['posAt']?{'o':_0xed0830[_0xc16bf0(0xb00)]}:null;var _0x5a9050=_0xed0830['pos'];return{'ptr':_0x165496[_0xc16bf0(0x461)],'feet':_0x5a9050,'posAt':_0xed0830[_0xc16bf0(0xb00)],'candidates':_0xed0830[_0xc16bf0(0x4b8)+'dates'],'cluster':_0xed0830['clust'+'er'],'copies':_0x43d360[_0xc16bf0(0xbb0)+'r'](function(_0x4f8fec){var _0x1adc8e=_0xc16bf0;return _0x608417[_0x1adc8e(0xa02)](_0x4f8fec['v'][-0x24fb+-0x211*0x1+0x33*0xc4],_0x5a9050[-0x18e+-0x1ed1+-0x205f*-0x1])&&_0x608417[_0x1adc8e(0xc48)](_0x4f8fec['v'][-0x23cf+0x670*-0x2+0x30b0],_0x5a9050[0x27d+0xed3*0x1+-0x114f])&&_0x4f8fec['v'][0x585*-0x1+0x3*-0x169+0x9c2]===_0x5a9050[-0x22b2+0x1a36+0x87e*0x1];})['map'](function(_0x418cf7){var _0x1ccefc=_0xc16bf0,_0x2f8f92={'Kjlbl':function(_0x521ed8,_0x63b99f){return _0x608417['oEGsv'](_0x521ed8,_0x63b99f);},'Ztoii':function(_0x591cd8,_0x387084){return _0x608417['DpvSL'](_0x591cd8,_0x387084);},'outrW':function(_0x33e7fc,_0x1e340c){return _0x33e7fc<_0x1e340c;}};if(_0x1ccefc(0x217)!==_0x1ccefc(0x84c))return _0x418cf7['o'];else{_0x34ef75['open']=!!_0x1eeb01;var _0xae0fec=_0x280959();if(!_0xae0fec)return;_0xae0fec[_0x1ccefc(0x1bc)+_0x1ccefc(0x466)]=_0x2f8f92['Kjlbl'](_0x1ccefc(0x6a7)+_0x1ccefc(0x3d1),_0x1ee05c['open']?_0x1ccefc(0x796)+'n':'');if(_0x40aa19['petal'])_0x235286[_0x1ccefc(0xd84)]['style'][_0x1ccefc(0x8b3)+'ty']=_0x3ff590['open']?'1':'.5';if(_0x1a3d56['open']){_0x2f8f92[_0x1ccefc(0x38c)](_0xc27768,_0x4445a4['cat']);try{var _0x42337d=_0x281dc7[_0x1ccefc(0xdd8)+_0x1ccefc(0x79f)+'t']||0x31*0x8e+-0x530*0x6+0x712;if(_0x2f8f92[_0x1ccefc(0xa6f)](_0x42337d,-0xbb2+-0x20bf*0x1+-0xf9f*-0x3))_0x4e91b5(![]);}catch(_0x1cfe93){}}}}),'eye':[_0x5a9050[-0xb2b*-0x3+-0x8*-0x4c+-0x23e1],_0x5a9050[0x3*-0x199+0x17ae+-0x12e2]+_0x23be9f,_0x5a9050[0x2046+-0x2096+0x52]],'reach':_0xed0830[_0xc16bf0(0x179)],'pitch':_0x5f506b(_0x165496[_0xc16bf0(0x461)]+(-0xe*0x92+-0x669*-0x5+0x20f*-0xb),_0xc16bf0(0x4d9)),'yaw':_0x5f506b(_0x11b6a3[_0xc16bf0(0x3a5)](_0x165496['ptr'],0x52*-0x76+0x2155+0x5e7*0x1),_0xc16bf0(0x4d9))};}function _0x37adcd(){var _0xd57fa5=_0x586988,_0x1c78d7={'RLalQ':function(_0x73fdb5){return _0x73fdb5();}},_0x184170=_0x2cc79a(),_0x3a4011=[],_0x1b9499=_0xc9fffc['Photo'+_0xd57fa5(0x600)+'orkSy'+'nc']||{},_0x3f86b7=Object[_0xd57fa5(0xc9b)](_0x1b9499);for(var _0x13ea2e=0xcc9+-0x11*0x34+0x955*-0x1;_0x13ea2e<_0x3f86b7[_0xd57fa5(0x964)+'h']&&_0x13ea2e<-0x1*-0xf5a+0x15de+-0x1*0x2518;_0x13ea2e++){if(_0x11b6a3['oVBTz'](_0xd57fa5(0x657),_0x11b6a3['qNutK'])){var _0x54d90f=_0x1b9499[_0x3f86b7[_0x13ea2e]],_0x436b1f=[],_0x29bbcd=_0x5b1b65[_0xd57fa5(0x8db)+_0xd57fa5(0x600)+_0xd57fa5(0x3ec)+'nc']||[];for(var _0x12d55d=-0x1*-0x6e3+-0x187d*0x1+0x119a;_0x12d55d<_0x29bbcd[_0xd57fa5(0x964)+'h'];_0x12d55d++){if('ycxoo'!=='FCUpA'){if(_0x29bbcd[_0x12d55d][-0xbfb+0x65*0x8+0x8d4]!=='v3')continue;var _0x51321f=_0x25d0eb(_0x54d90f['ptr'],_0x29bbcd[_0x12d55d][0x1462+-0x769*0x4+0x942],-0x4*-0x37d+-0x1c2*0xc+-0x727*-0x1);if(_0x51321f)_0x436b1f['push']({'o':_0x11b6a3[_0xd57fa5(0x35c)]('0x',_0x29bbcd[_0x12d55d][0x13c9+0x10*0x15a+0x2969*-0x1][_0xd57fa5(0xd0f)+'ing'](-0xb*0x7d+0x1bbe+-0x164f*0x1)),'v':_0x51321f});}else _0x1c78d7['RLalQ'](_0x4965f1);}var _0x497b58=_0x2092fe(_0x436b1f,_0x184170?_0x184170[_0xd57fa5(0x573)][0x1ec1+-0x10c1*0x1+-0xdff]:null,_0x2a3d45[_0x3f86b7[_0x13ea2e]]);_0x2a3d45[_0x3f86b7[_0x13ea2e]]=_0x497b58['posAt']?{'o':_0x497b58[_0xd57fa5(0xb00)]}:null;var _0x3cd3e8=_0x497b58['pos'];if(!_0x3cd3e8)continue;var _0x1572c1={'ptr':_0x54d90f[_0xd57fa5(0x461)],'x':_0x3cd3e8[0x1ed9+-0x1*0x1c31+-0x2a8],'y':_0x3cd3e8[0x1252*-0x1+0x2*-0xfbe+0x31cf],'z':_0x3cd3e8[-0x4*0x34a+0x1f*0x9c+-0x5ba*0x1],'posAt':_0x497b58['posAt'],'candidates':_0x497b58['candi'+_0xd57fa5(0x33f)],'cluster':_0x497b58[_0xd57fa5(0x1c0)+'er'],'team':_0x5f506b(_0x54d90f[_0xd57fa5(0x461)]+(0x17*-0x7f+0xaff+0xc2),_0xd57fa5(0x357)),'localFlag':_0x11b6a3['YmprD'](_0x5f506b,_0x11b6a3[_0xd57fa5(0x581)](_0x54d90f[_0xd57fa5(0x461)],0x410+-0xcc6+-0x499*-0x2),'i32')};if(_0x184170){if(_0x11b6a3[_0xd57fa5(0xe0d)](_0xd57fa5(0x67d),'jLzRf')){var _0x1d3802=_0x3cd3e8[-0x23ea+0x21cf+0x21b]-_0x184170[_0xd57fa5(0x573)][0x1147*0x1+-0x7*0x4a7+0xf4a],_0x20b5ee=_0x11b6a3[_0xd57fa5(0x269)](_0x3cd3e8[0x124a+0x1b6a+-0x2db2],_0x184170['feet'][-0x25f1+-0xf68+0x355b]);_0x1572c1['d']=Math['sqrt'](_0x1d3802*_0x1d3802+_0x11b6a3['UgZaS'](_0x20b5ee,_0x20b5ee)),_0x1572c1[_0xd57fa5(0xae8)+'ng']=Math['atan2'](_0x1d3802,_0x20b5ee)*(-0x229c*0x1+0x4*0x572+0xd88)/Math['PI'];}else{var _0x1b46b1=-0x10dd+-0x6b5*0x1+0x1*0x1792;for(var _0x704e14=0x13dd+-0x1e9c+0xabf;_0x704e14<_0x1bc71e[_0xd57fa5(0x964)+'h'];_0x704e14++){var _0x379108=_0x5b50ee[_0xd57fa5(0xba0)](_0x11b6a3[_0xd57fa5(0xc94)](_0x11b6a3['WqVIl'](_0x3c4c95[_0x704e14]['v'][-0x25f5*0x1+0xe*0x23f+-0x1*-0x683],_0xf2ddee[_0x704e14]['v'][-0x7f6*-0x3+-0x2632*0x1+-0x394*-0x4]),_0x3207b3[_0x704e14]['v'][-0x2513+-0xd0a*-0x1+0x180b]*_0x4ec976[_0x704e14]['v'][-0x97*0x3+0x4*-0x60b+-0x1ff*-0xd]));if(_0x379108>_0x1b46b1)_0x1b46b1=_0x379108;}_0x599f8d+=_0x1b46b1;}}_0x3a4011[_0xd57fa5(0x68c)](_0x1572c1);}else{var _0x25982e=_0x2cc00e(_0x553297,_0x4a8e47,_0xbb8758);if(!_0x25982e)return null;_0x25982e['o']=_0x5b8cc6,_0x25982e['k']=_0x1c70a0;var _0x188288=_0x11b6a3['PEHax'](_0x2df1d2,[_0x25982e]);if(!_0x188288['rows']['lengt'+'h'])return null;return _0x188288[_0xd57fa5(0x1a0)][0x3*-0xb51+0x6*-0x232+0x2f1f];}}return{'me':_0x184170,'list':_0x3a4011};}var _0xe053a3=null;function _0x42fb2d(){var _0x30ca25=_0x586988;if(_0xe053a3)return _0xe053a3;try{if(!document['body']||!document[_0x30ca25(0x300)][_0x30ca25(0x927)+_0x30ca25(0x432)+'d'])return null;var _0x1b86e1=document['creat'+'eElem'+'ent'](_0x30ca25(0xb2f));_0x1b86e1['id']=_0x11b6a3[_0x30ca25(0x6b8)],_0x1b86e1[_0x30ca25(0x3d2)]['cssTe'+'xt']=_0x11b6a3['NDbUK'](_0x11b6a3[_0x30ca25(0xe13)],_0x11b6a3[_0x30ca25(0x77d)])+(_0x30ca25(0x56e)+_0x30ca25(0x6d6)+'x;fon'+'t:10p'+_0x30ca25(0x51d)+_0x30ca25(0xc04)+_0x30ca25(0xc4f)+'ace,C'+'onsol'+'as,mo'+'nospa'+'ce;co'+'lor:#'+_0x30ca25(0xb5c)+'9;')+(_0x30ca25(0x368)+'selec'+_0x30ca25(0x6a1)+_0x30ca25(0x5e5)+_0x30ca25(0x436)+_0x30ca25(0x368)+'selec'+_0x30ca25(0x6a1)+'e;'),_0x1b86e1[_0x30ca25(0xdd8)+_0x30ca25(0x4a3)]=_0x11b6a3[_0x30ca25(0xb9a)](_0x30ca25(0x77e)+'as\x20id'+_0x30ca25(0x358)+'ura-e'+_0x30ca25(0x974)+_0x30ca25(0x630)+'th=\x221'+'60\x22\x20h'+'eight'+'=\x22160'+'\x22\x20sty'+_0x30ca25(0x5df)+_0x30ca25(0x526)+_0x30ca25(0x976)+'ck\x22><'+_0x30ca25(0xb7b)+_0x30ca25(0x9a9),_0x11b6a3[_0x30ca25(0x3d7)]);var _0x366fd={'cv':{'getContext':function(){return null;}},'el':_0x1b86e1};document[_0x30ca25(0x300)]['appen'+_0x30ca25(0x432)+'d'](_0x1b86e1),_0xe053a3={'el':_0x1b86e1,'cv':_0x1b86e1['query'+'Selec'+_0x30ca25(0xc8b)]('#saku'+_0x30ca25(0x88d)+_0x30ca25(0xd25)),'lg':_0x1b86e1[_0x30ca25(0x181)+'Selec'+'tor']('#saku'+_0x30ca25(0x88d)+'p-lg')};if(!_0xe053a3['cv']||!_0xe053a3['cv'][_0x30ca25(0x1da)+_0x30ca25(0x7c8)])_0xe053a3=_0x366fd;return _0xe053a3;}catch(_0x288602){return null;}}var _0x16c94e=null;function _0x46fbde(){var _0x15dcf4=_0x586988;if(_0x16c94e)return _0x16c94e;try{var _0x15517d=_0x11b6a3[_0x15dcf4(0xb47)]['split']('|'),_0xffe284=-0xedc+-0x220c+0x28*0x139;while(!![]){switch(_0x15517d[_0xffe284++]){case'0':_0x5c21ad['style']['cssTe'+'xt']=_0x11b6a3[_0x15dcf4(0x7e8)];continue;case'1':_0x16c94e={'cv':_0x5c21ad};continue;case'2':if(!document['body']||!document[_0x15dcf4(0x300)]['appen'+_0x15dcf4(0x432)+'d'])return null;continue;case'3':_0x5c21ad['id']=_0x15dcf4(0x33e)+'a-box'+'es';continue;case'4':var _0x5c21ad=document['creat'+_0x15dcf4(0xc89)+'ent'](_0x11b6a3[_0x15dcf4(0x77a)]);continue;case'5':document[_0x15dcf4(0x300)]['appen'+_0x15dcf4(0x432)+'d'](_0x5c21ad);continue;case'6':return _0x16c94e;}break;}}catch(_0x32d182){return null;}}function _0xabd3e8(_0x1fc40a){var _0x44e91b=_0x586988;try{if('LsqYU'!==_0x11b6a3[_0x44e91b(0x55b)])return _0x3ad719[_0x44e91b(0x7f0)+'r'];else{var _0x29332f=Math['max'](0x238d*0x1+0x18c4+-0x3c50,window['inner'+'Width']||document[_0x44e91b(0x159)+_0x44e91b(0x337)+_0x44e91b(0x91c)][_0x44e91b(0x364)+'tWidt'+'h']||-0x22e4+-0x2462+0x3*0x17c2),_0x149f47=Math['max'](0x11e*-0xa+-0x187*0x12+0x13*0x209,window[_0x44e91b(0xdd8)+'Heigh'+'t']||document[_0x44e91b(0x159)+_0x44e91b(0x337)+_0x44e91b(0x91c)][_0x44e91b(0x364)+_0x44e91b(0xc53)+'ht']||0x2*0x3f3+0x1*-0x1e33+0x164d);return(_0x1fc40a['cv'][_0x44e91b(0x3c3)]!==_0x29332f||_0x11b6a3['mgwxJ'](_0x1fc40a['cv'][_0x44e91b(0xdf8)+'t'],_0x149f47))&&(_0x11b6a3['mSKFv'](_0x44e91b(0xcc8),'rfyuX')?(_0x1fc40a['cv']['width']=_0x29332f,_0x1fc40a['cv']['heigh'+'t']=_0x149f47):_0x1cb8a1()),{'w':_0x29332f,'h':_0x149f47};}}catch(_0x30a39c){return _0x11b6a3['vUaBs']('ifZvD',_0x44e91b(0x24e))?(_0x14746f['faile'+'d']++,_0x1c6c7b['lastE'+_0x44e91b(0x376)]=_0x4ad47e['lastE'+_0x44e91b(0x376)]||_0x11b6a3['YWakm'](_0x11b6a3['uJkJw'](_0x44e91b(0x9e8)+_0x44e91b(0xe0e)+(_0x91c78e+_0x2c453c)['toStr'+_0x44e91b(0x3cc)](0x1fdd+-0x7*-0x337+-0x364e),_0x11b6a3[_0x44e91b(0x36e)]),_0x3c1558[_0x44e91b(0x4ae)+'ength']['toStr'+_0x44e91b(0x3cc)](-0x5e*0xa+0x9b+-0x3*-0x10b)),null):{'w':0x0,'h':0x0};}}function _0x3b6831(){var _0x1cd4ee=_0x586988;if(_0x11b6a3[_0x1cd4ee(0xb65)](_0x1cd4ee(0x4d2),_0x11b6a3['MCUNW']))_0x250890=_0x3ead90,_0x3bd617=_0x30bc78[_0x1cd4ee(0x421)];else{var _0x481f9d={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0x481f9d[_0x1cd4ee(0x96c)+'s']={'w':_0x16c94e&&_0x16c94e['cv']?_0x16c94e['cv'][_0x1cd4ee(0x3c3)]:-0x346+0x13*-0x119+-0xd5*-0x1d,'h':_0x16c94e&&_0x16c94e['cv']?_0x16c94e['cv']['heigh'+'t']:-0x1*-0x11f2+0x1*-0x2521+0x1*0x132f,'innerW':window[_0x1cd4ee(0xdd8)+'Width'],'innerH':window[_0x1cd4ee(0xdd8)+_0x1cd4ee(0x79f)+'t'],'dpr':window[_0x1cd4ee(0x552)+_0x1cd4ee(0x948)+'lRati'+'o']||-0x2053*-0x1+-0x9*-0x24f+-0x3519};}catch(_0x3f23cf){}var _0x1c17e2=_0x37adcd();if(!_0x1c17e2||!_0x1c17e2['me'])return _0x481f9d;var _0x52b6f9=_0x481f9d[_0x1cd4ee(0x96c)+'s']['w']||0x6*0x494+-0xb6*-0x19+-0x16*0x1e1,_0x4fd45c=_0x481f9d[_0x1cd4ee(0x96c)+'s']['h']||-0x1106+0x1f8d*-0x1+0x347b,_0x1c8bfd=_0x52b6f9/_0x4fd45c,_0x30ac64=Math['tan'](_0x11b6a3['ciyta'](_0x2f79da['fov'],Math['PI'])/(0x1389+0xe5d+0x1099*-0x2)/(0x21d*-0xb+-0x17b*0x11+-0x812*-0x6)),_0x28c26d=_0x11b6a3[_0x1cd4ee(0x7c2)](_0x4c00cd),_0x5936e0=_0x28c26d[_0x1cd4ee(0x47b)];for(var _0x3a7b45=-0x14*-0x136+0x1*0x1f01+-0xd3*0x43;_0x11b6a3[_0x1cd4ee(0x325)](_0x3a7b45,_0x1c17e2[_0x1cd4ee(0x813)]['lengt'+'h'])&&_0x3a7b45<0x353+0x21f1*0x1+0x4*-0x94f;_0x3a7b45++){var _0xc7f6e1=_0x1c17e2[_0x1cd4ee(0x813)][_0x3a7b45];if(typeof _0xc7f6e1['d']!==_0x1cd4ee(0x846)+'r'||_0x11b6a3[_0x1cd4ee(0x9b7)](_0xc7f6e1['d'],-0x2215+-0x381+0x22*0x11b+0.5))continue;var _0x4d2821=_0x5be73e(_0x1c17e2['me']['eye'],[_0xc7f6e1['x'],_0xc7f6e1['y'],_0xc7f6e1['z']],_0x52b6f9,_0x4fd45c);if(!_0x4d2821)continue;var _0x31b8d2=_0x11b6a3['Qfhcv'](_0x11b6a3['DXpmv'](_0x4d2821['x']/_0x52b6f9,0x769+0x17a6+0x1*-0x1f0f+0.5),0x3c7+0x1a5*-0x13+0x1b7a),_0x44f927=null;if(_0x5936e0&&_0x28c26d['pos']){var _0x581744=_0x5936e0['fwd'],_0x1c0ff1=_0x5936e0[_0x1cd4ee(0x264)],_0x408eb1=_0x11b6a3['fQzJL'](_0xc7f6e1['x'],_0x28c26d['pos'][-0x3*-0x299+0x583+-0x1*0xd4e]),_0x90fa87=_0xc7f6e1['y']-_0x28c26d['pos'][-0x10fc+0x1a94+-0x997],_0x5e7715=_0xc7f6e1['z']-_0x28c26d[_0x1cd4ee(0x3a2)][0x18bd*0x1+-0x79b*-0x5+-0x3ec2*0x1],_0x5e7005=_0x11b6a3['RISSA'](_0x408eb1*_0x581744[0x152b+0x1e1b+0x19a3*-0x2],_0x90fa87*_0x581744[-0x2485+-0x1a7*-0x10+0xa16])+_0x11b6a3[_0x1cd4ee(0x569)](_0x5e7715,_0x581744[-0x1*-0x1f79+-0xc6b*-0x3+0x18*-0x2dd]),_0xdd2b3f=_0x11b6a3[_0x1cd4ee(0x58e)](_0x11b6a3[_0x1cd4ee(0xc94)](_0x408eb1*_0x1c0ff1[0x1*0x10b1+0x171c+0x17*-0x1bb],_0x11b6a3[_0x1cd4ee(0x92c)](_0x90fa87,_0x1c0ff1[-0x9*0x147+0x2b3*0x5+-0x1*0x1ff])),_0x5e7715*_0x1c0ff1[-0x821+0xb37*0x1+-0x314]);if(_0x11b6a3['Pbxrp'](_0x5e7005,-0x1d7+0x4a3*-0x3+0x18*0xa8+0.5))_0x44f927=_0x11b6a3[_0x1cd4ee(0x65c)](_0xdd2b3f,_0x5e7005)/_0x11b6a3['GXjDS'](_0x30ac64,_0x1c8bfd);}else{if(typeof _0xc7f6e1[_0x1cd4ee(0xae8)+'ng']===_0x11b6a3[_0x1cd4ee(0x3ef)]){if(_0x11b6a3['vaDgI'](_0x11b6a3[_0x1cd4ee(0x5ce)],_0x1cd4ee(0x9dd)))_0x44f927=_0x11b6a3['VQRWa'](Math['tan'](_0x11b6a3[_0x1cd4ee(0xab2)](_0xc7f6e1[_0x1cd4ee(0xae8)+'ng'],Math['PI'])/(-0x1*0x26ae+-0x1ba5+-0x4307*-0x1)),_0x11b6a3['szhnh'](_0x30ac64,_0x1c8bfd));else{if(_0x11b6a3['mHzEE'](_0x454457))return null;var _0x588fde=_0x239e96[_0x1cd4ee(0x62c)+'ement'+'ById'](_0x11b6a3['ywuki']);if(_0x588fde)return _0x588fde;if(!_0x17f34d[_0x1cd4ee(0x300)]||!_0x532ccc['body']['appen'+_0x1cd4ee(0x432)+'d'])return null;try{if(!_0x287deb[_0x1cd4ee(0x62c)+_0x1cd4ee(0x91c)+'ById'](_0x11b6a3['xOTQb'])){var _0x3e0617=_0x3a5415[_0x1cd4ee(0xcfa)+_0x1cd4ee(0xc89)+'ent']('style');_0x3e0617['id']=_0x11b6a3['xOTQb'],_0x3e0617[_0x1cd4ee(0x4fc)+'onten'+'t']=_0x11b6a3['EFiDe'],(_0x2b2dc5[_0x1cd4ee(0x386)]||_0x12a0e6[_0x1cd4ee(0x159)+_0x1cd4ee(0x337)+_0x1cd4ee(0x91c)])[_0x1cd4ee(0x927)+'dChil'+'d'](_0x3e0617);}return _0x588fde=_0x562cc4[_0x1cd4ee(0xcfa)+'eElem'+_0x1cd4ee(0x1e5)](_0x1cd4ee(0xb2f)),_0x588fde['id']=_0x11b6a3['ywuki'],_0x3ae970['body'][_0x1cd4ee(0x927)+'dChil'+'d'](_0x588fde),_0x588fde;}catch(_0x187c09){return null;}}}}if(_0x44f927===null)continue;if(_0x11b6a3[_0x1cd4ee(0x4bd)](Math['abs'](_0x44f927),-0x5*-0x466+0xa*0x5c+-0x1996+0.8))continue;var _0x4955eb=_0x31b8d2-_0x44f927;_0x481f9d['rows'][_0x1cd4ee(0x68c)]({'d':Math['round'](_0xc7f6e1['d']),'bearing':Math[_0x1cd4ee(0x2c4)](_0xc7f6e1['beari'+'ng']),'at':Math[_0x1cd4ee(0x2c4)](_0x11b6a3[_0x1cd4ee(0xa00)](_0x31b8d2,-0xdc3*0x2+-0xa16*0x3+0x3db0))/(-0xb3*-0x11+0x1338+-0x1b33),'want':_0x11b6a3[_0x1cd4ee(0x828)](Math['round'](_0x11b6a3[_0x1cd4ee(0x401)](_0x44f927,0x5b9+-0x10f5+0xf24)),-0x9*-0x2b4+-0x1c*-0xe2+-0x12*0x282),'off':Math['round'](_0x11b6a3[_0x1cd4ee(0x48a)](_0x4955eb,-0x1248*-0x1+0x1230+-0x2090))/(0x1bd*-0x16+0x3f0+-0x43*-0x92)}),_0x11b6a3[_0x1cd4ee(0x4bd)](Math['abs'](_0x4955eb),Math['abs'](_0x481f9d['worst'+'Delta']))&&(_0x481f9d[_0x1cd4ee(0x95c)+_0x1cd4ee(0x6a6)]=Math[_0x1cd4ee(0x2c4)](_0x11b6a3[_0x1cd4ee(0x922)](_0x4955eb,-0xde3+-0x379+-0x4*-0x551))/(0xffc+0x2b*-0x2f+-0x42f),_0x481f9d[_0x1cd4ee(0x95c)+_0x1cd4ee(0x2b1)+'ng']=Math[_0x1cd4ee(0x2c4)](_0xc7f6e1['beari'+'ng']));}if(_0x28c26d[_0x1cd4ee(0x3a2)]&&_0x28c26d[_0x1cd4ee(0x47b)]&&_0x28c26d['fov']){var _0x55bfa2=_0x28c26d[_0x1cd4ee(0x47b)]['fwd'];if(_0x11b6a3[_0x1cd4ee(0xa19)](Math['abs'](_0x55bfa2[-0x21b1+0x23c8+0x1*-0x216]),-0x104d+0xb8a+-0x1*-0x4c3+0.01)){if(_0x1cd4ee(0x5ad)===_0x11b6a3['vqxoH']){var _0x1579a8=Math[_0x1cd4ee(0x2bf)](_0x11b6a3['tLCTx'](_0x28c26d['fov']*Math['PI']/(0x4*-0x136+-0x9c8+0xf54),0x18ad+-0x4fd+0x16*-0xe5)),_0x2bde85=0x2c*0x1+0x9fe*-0x3+0x1dd8,_0x39f52c=0x23ea*0x1+0x6*0x27+-0x24d3,_0x28b2ca=[_0x11b6a3['KqjsS'](_0x28c26d[_0x1cd4ee(0x3a2)][0xf46+0x2522+-0x18*0x22f],_0x11b6a3[_0x1cd4ee(0x3f3)](_0x55bfa2[0x1d73+0x153*-0x13+-0xb7*0x6],_0x2bde85)),_0x11b6a3[_0x1cd4ee(0xd99)](_0x11b6a3['cUkrh'](_0x28c26d[_0x1cd4ee(0x3a2)][0x3*-0x2f+0x667*0x3+-0x1*0x12a7],_0x11b6a3[_0x1cd4ee(0xbf0)](_0x55bfa2[-0xf9a*0x1+0x2*-0x3a0+-0x16db*-0x1],_0x2bde85)),_0x39f52c),_0x28c26d[_0x1cd4ee(0x3a2)][0x9af+-0x1*-0x24ad+-0x2e5a]+_0x11b6a3[_0x1cd4ee(0x4f9)](_0x55bfa2[0x1fb4+-0x1755*-0x1+0x1*-0x3707],_0x2bde85)],_0x29c5e2=_0x11b6a3[_0x1cd4ee(0x3c8)](_0x5be73e,_0x28c26d['pos'],_0x28b2ca,_0x52b6f9,_0x481f9d[_0x1cd4ee(0x96c)+'s']['h']);if(_0x29c5e2){var _0x5915a6=_0x11b6a3[_0x1cd4ee(0x3d4)](0x2f*-0xa5+-0xc4*-0x8+0x182b+0.5,_0x29c5e2['y']/_0x481f9d[_0x1cd4ee(0x96c)+'s']['h'])*(0x1641+-0x43b+-0x1204),_0x1f2958=_0x11b6a3[_0x1cd4ee(0x44c)](_0x39f52c,_0x2bde85)/_0x1579a8;_0x481f9d[_0x1cd4ee(0xb2d)+_0x1cd4ee(0x888)]={'got':Math['round'](_0x5915a6*(-0x12a*-0x2+0x9*-0xe6+0x9aa))/(0xe33+0x158c+-0x13*0x1ad),'want':_0x11b6a3['HWuxB'](Math[_0x1cd4ee(0x2c4)](_0x1f2958*(-0x29*0x51+-0xb59+0x1c3a)),0x1*0x245b+-0x1c9*-0x1+-0x223c),'off':Math[_0x1cd4ee(0x2c4)](_0x11b6a3[_0x1cd4ee(0xa4b)](_0x5915a6-_0x1f2958,0x2388+-0x71*0x1+-0x1*0x1f2f))/(0xdcc*0x1+-0x1*-0x21+0x1*-0xa05)};}}else _0xb2f18d=_0x11b6a3[_0x1cd4ee(0x446)](_0x334fbc,_0x11b6a3[_0x1cd4ee(0x4eb)],![]),_0x221631[_0x1cd4ee(0x68c)](_0x5df439);}}return _0x481f9d;}}var _0xb2b03d=-0x6c6+-0x99+0xec*0x8+0.75,_0x417f55=0xa5e+0xef*-0x25+0x182d+0.25,_0x1e7caf=0x1d01+-0x89*-0x1d+-0x2c86+0.42;function _0x50c87d(_0x1a3429){var _0xc1aab6=_0x586988,_0x383134={'mKfGK':_0x11b6a3[_0xc1aab6(0x7a8)]};if(_0xc1aab6(0x7f1)!==_0xc1aab6(0x7f1)){var _0x5c96e6=_0x1a55b1[_0xc1aab6(0x181)+_0xc1aab6(0x381)+'torAl'+'l'](_0x383134['mKfGK']);for(var _0x24833d=0x1f*0xc1+0x1f25+-0xc*0x48b;_0x24833d<_0x5c96e6[_0xc1aab6(0x964)+'h'];_0x24833d++){try{if(_0x5c96e6[_0x24833d][_0xc1aab6(0x4ba)+'ntWin'+_0xc1aab6(0xc28)])_0x5c96e6[_0x24833d]['conte'+_0xc1aab6(0x901)+'dow'][_0xc1aab6(0x7ca)+_0xc1aab6(0xc09)+'e'](_0x55c886,'*');}catch(_0x129a70){}}}else{var _0x59b757=_0x16c94e;if(!_0x59b757)return;var _0x58b59e=_0x59b757['cv']['getCo'+'ntext']&&_0x59b757['cv'][_0xc1aab6(0x1da)+_0xc1aab6(0x7c8)]('2d');if(!_0x58b59e)return;var _0x67eb00=_0xabd3e8(_0x59b757);_0x58b59e[_0xc1aab6(0xd43)+_0xc1aab6(0x5a2)](-0x55d*-0x6+0x17*0x165+-0x3*0x156b,-0xbb*0x1d+-0x66*-0x5d+-0xfdf,_0x67eb00['w'],_0x67eb00['h']);if(!_0x143771[_0xc1aab6(0xd48)]||!_0x1a3429||!_0x1a3429['me'])return;var _0x2567e8=_0x1a3429['me'],_0x1e0909=null,_0x3ecef2=_0xc9fffc['Photo'+_0xc1aab6(0x600)+'orkSy'+'nc']||{},_0xd3aedc=Object[_0xc1aab6(0xc9b)](_0x3ecef2);for(var _0x474081=-0x4ca*-0x1+0x1232+-0x16fc;_0x474081<_0xd3aedc['lengt'+'h'];_0x474081++){var _0x61a097=_0x25d0eb(_0x3ecef2[_0xd3aedc[_0x474081]][_0xc1aab6(0x461)],0x216c+-0x36a+-0x1dce,0x3*-0x227+0x1468+0xdf*-0x10);if(_0x61a097&&_0x61a097[0x61*-0x41+0x18ab+0x1*-0xa]===0x137e+-0x2460+-0x2*-0x871&&_0x61a097[0x2bf*-0xb+0x2b*-0x43+-0x1*-0x2977]===-0xdb1+0x200a+0x29f*-0x7&&_0x11b6a3[_0xc1aab6(0x397)](_0x61a097[0x1eb1+0x26fe+-0x45ad],-0x1153+-0x1d00+0x2e53)){_0x1e0909=_0x5f506b(_0x11b6a3[_0xc1aab6(0xb9a)](_0x3ecef2[_0xd3aedc[_0x474081]][_0xc1aab6(0x461)],-0x805+-0x78c+-0xfe9*-0x1),_0xc1aab6(0x357));break;}}for(var _0x395c2d=0x3e0+-0x4*0x4c7+0xf3c;_0x395c2d<_0x1a3429[_0xc1aab6(0x813)][_0xc1aab6(0x964)+'h'];_0x395c2d++){var _0x3d3a44=_0x1a3429['list'][_0x395c2d],_0x4fb9a2=_0x11b6a3[_0xc1aab6(0x500)](_0x1e0909,null)&&_0x11b6a3[_0xc1aab6(0xb80)](_0x3d3a44[_0xc1aab6(0xd20)],_0x1e0909),_0x767c43=_0x11b6a3[_0xc1aab6(0xa95)](_0x5be73e,_0x2567e8[_0xc1aab6(0xda1)],[_0x3d3a44['x'],_0x3d3a44['y']-_0x417f55,_0x3d3a44['z']],_0x67eb00['w'],_0x67eb00['h']),_0xa746f7=_0x11b6a3[_0xc1aab6(0x595)](_0x5be73e,_0x2567e8[_0xc1aab6(0xda1)],[_0x3d3a44['x'],_0x3d3a44['y']+_0xb2b03d,_0x3d3a44['z']],_0x67eb00['w'],_0x67eb00['h']);if(_0x11b6a3[_0xc1aab6(0x6fc)](!_0x767c43,!_0xa746f7))continue;var _0x4899d3=Math[_0xc1aab6(0x9ad)](_0xa746f7['y']-_0x767c43['y']);if(!(_0x4899d3>-0x399*-0x3+0x4bf+-0x132*0xd))continue;var _0x155ce5=Math['max'](0xb*-0x4f+-0x3*0x905+0x7*0x45a,Math[_0xc1aab6(0x4a9)](-0x1*-0x989+0x3df*0x9+-0x2c06,_0x4899d3*_0x1e7caf));if(_0x4899d3>0x1*0x665+0x18c*0x10+-0x1d81)continue;var _0x3ce3f7=_0x11b6a3['tLCTx'](_0x767c43['x']+_0xa746f7['x'],-0x3*0x66e+-0x1cd*0xf+-0x1*-0x2e4f),_0x4fdff2=(_0x767c43['y']+_0xa746f7['y'])/(0x1a48*-0x1+-0x1228+-0x1639*-0x2);_0x58b59e['strok'+'eStyl'+'e']=_0x4fb9a2?_0x11b6a3['mlnqv']:_0x11b6a3[_0xc1aab6(0x1e7)],_0x58b59e['lineW'+_0xc1aab6(0x549)]=_0x4fb9a2?0x30+0x633+0x331*-0x2:0x1f4c+0x1*-0x2267+0x31d,_0x58b59e[_0xc1aab6(0x22a)+'eRect'](_0x11b6a3[_0xc1aab6(0x90d)](_0x3ce3f7,_0x11b6a3['AcUjJ'](_0x155ce5,-0x22ac+-0x1508+0x37b6)),_0x4fdff2-_0x11b6a3[_0xc1aab6(0x44c)](_0x4899d3,-0x1*-0xd83+0x5*0x83+-0x1010),_0x155ce5,_0x4899d3),!_0x4fb9a2&&(_0x58b59e[_0xc1aab6(0x44a)+'tyle']='rgba('+'255,1'+'10,11'+'6,.95'+')',_0x58b59e['font']=_0x11b6a3['WVqMV'],_0x58b59e['fillT'+_0xc1aab6(0xb0c)](Math['round'](_0x3d3a44['d']||-0x3*-0x655+-0x87c+0xcf*-0xd)+'m',_0x3ce3f7-_0x155ce5/(0x1*0x1ce9+0x101f*0x2+-0x3d25),_0x4fdff2-_0x4899d3/(0x1*0x454+-0x1*0x133+-0x31f)-(0xf22+-0x2278+0x1359)));}}}function _0x2c9697(){var _0x453b9a=_0x586988,_0x5c3bbc={'gqeRs':_0x11b6a3['NGKli']};if(_0x11b6a3[_0x453b9a(0x8b6)](_0x11b6a3['cuBPG'],'rLrIW')){var _0x299809=_0xe3656[_0x453b9a(0xcfa)+_0x453b9a(0xc89)+_0x453b9a(0x1e5)](_0x453b9a(0x3d2));_0x299809['id']='sakur'+_0x453b9a(0x764)+'hud-c'+'ss',_0x299809[_0x453b9a(0x4fc)+_0x453b9a(0xa15)+'t']=_0x5c3bbc[_0x453b9a(0xc3e)],(_0x5cfeba['head']||_0x1e867e[_0x453b9a(0x159)+'entEl'+'ement'])[_0x453b9a(0x927)+_0x453b9a(0x432)+'d'](_0x299809);}else{var _0x4526f1=_0x11b6a3['uKbhN'](_0x42fb2d);if(!_0x4526f1||!_0x4526f1['cv'])return;try{var _0x4a7089=_0x4526f1['cv']['getCo'+_0x453b9a(0x7c8)]&&_0x4526f1['cv'][_0x453b9a(0x1da)+_0x453b9a(0x7c8)]('2d');if(!_0x4a7089)return;var _0x22e46b=_0x4526f1['cv'][_0x453b9a(0x3c3)],_0x56f57c=_0x22e46b/(0x83f+-0x79f*-0x1+-0xa*0x196),_0x3146a8=_0x37adcd(),_0xdae613=_0x3146a8['me'];_0x4a7089[_0x453b9a(0xd43)+_0x453b9a(0x5a2)](-0x2534+-0x1*0x2379+0x48ad,0x13cc+0x1f72+-0x333e,_0x22e46b,_0x22e46b),_0x4a7089[_0x453b9a(0x22a)+_0x453b9a(0xe22)+'e']=_0x453b9a(0x6bc)+_0x453b9a(0x741)+'43,17'+'7,.16'+')',_0x4a7089['lineW'+_0x453b9a(0x549)]=-0x1e25*-0x1+0xbd*0xa+-0x2586;for(var _0x55e38e=-0x2a6*0x5+0x2*-0x10b9+-0x2eb1*-0x1;_0x11b6a3[_0x453b9a(0x944)](_0x55e38e,-0x239*0x7+0x16e*0x17+-0x8*0x22a);_0x55e38e++){_0x4a7089['begin'+_0x453b9a(0x7f6)](),_0x4a7089[_0x453b9a(0x96b)](_0x56f57c,_0x56f57c,(_0x56f57c-(0x2045+-0x1*0x2489+0x8*0x89))*_0x55e38e/(0x846+-0x4ff*0x2+-0x1*-0x1bb),0x2*-0x7ca+0x1c7e+-0xcea,Math['PI']*(-0xb4b*-0x3+-0x115b+-0x1c*0x97)),_0x4a7089[_0x453b9a(0x22a)+'e']();}_0x4a7089['begin'+_0x453b9a(0x7f6)](),_0x4a7089[_0x453b9a(0x490)+'o'](0x4c*-0x25+-0x1362+0x1e62,_0x56f57c),_0x4a7089[_0x453b9a(0x2e4)+'o'](_0x11b6a3['GLrcE'](_0x22e46b,0x187d+0x19*0x175+-0xc2e*0x5),_0x56f57c),_0x4a7089[_0x453b9a(0x490)+'o'](_0x56f57c,0x53f*-0x7+-0x71d+0x2bda),_0x4a7089[_0x453b9a(0x2e4)+'o'](_0x56f57c,_0x22e46b-(-0x1b46+0x5bb+0x158f)),_0x4a7089[_0x453b9a(0x22a)+'e']();if(!_0xdae613){if(_0x4526f1['lg'])_0x4526f1['lg'][_0x453b9a(0x4fc)+'onten'+'t']='';return;}var _0x498f4b=_0x11b6a3['EgolB'](_0x11b6a3[_0x453b9a(0xa70)](_0x56f57c,-0x1*-0xa51+0x1*-0x443+-0x608),_0x143771['span']),_0x582c18=null,_0x32ae09=_0xc9fffc[_0x453b9a(0x8db)+'nNetw'+'orkSy'+'nc']||{},_0x1f10ed=Object['keys'](_0x32ae09);for(var _0xba749f=0x1a7a+0x17f6+-0x3270;_0xba749f<_0x1f10ed[_0x453b9a(0x964)+'h'];_0xba749f++){if(_0x453b9a(0x17b)===_0x11b6a3[_0x453b9a(0x620)])_0x58d704[_0x453b9a(0x334)]=_0x11b6a3['nKDmw'](_0x11b6a3['MqOCm'],_0x11b6a3[_0x453b9a(0x5d3)]);else{var _0x2da3b7=_0x25d0eb(_0x32ae09[_0x1f10ed[_0xba749f]]['ptr'],0xf16+0x566+-0x1*0x1448,-0x1*-0xdfd+-0x1*-0x26a5+0x349f*-0x1);if(_0x2da3b7&&_0x2da3b7[-0x1c95+-0x1*0xecf+0x2b64*0x1]===0x1*-0xcfb+0x7f6*-0x2+-0x1*-0x1ce7&&_0x11b6a3[_0x453b9a(0xc9c)](_0x2da3b7[-0x4ff+0x132+0x3ce],0x22f2+0x455+-0x2747)&&_0x11b6a3[_0x453b9a(0x90a)](_0x2da3b7[-0x15e*0x11+-0x11e1*-0x1+0x55f],-0x318*0x5+-0x1*0x7f3+0x176b)){_0x582c18=_0x5f506b(_0x32ae09[_0x1f10ed[_0xba749f]]['ptr']+(-0x25f1+0x26*0x6d+0x161b),'i32');break;}}}var _0x3e9984=0x2*-0x82+-0xa1*-0x19+-0xeb5;for(var _0x3be0f5=0x1*0xf25+0xda3+-0x1cc8;_0x3be0f5<_0x3146a8[_0x453b9a(0x813)][_0x453b9a(0x964)+'h'];_0x3be0f5++){var _0x2eebe3=('10|1|'+'3|9|7'+'|4|6|'+_0x453b9a(0x2d5)+'|0')['split']('|'),_0x4d4842=0xde8+0x18ea+0x2*-0x1369;while(!![]){switch(_0x2eebe3[_0x4d4842++]){case'0':_0x3e9984++;continue;case'1':var _0x518663=_0x11b6a3['GXjDS'](_0x4d5fd5['x']-_0xdae613[_0x453b9a(0x573)][0x20*0x133+0x1b8+-0x2818],_0x498f4b),_0x3bd944=(_0x4d5fd5['z']-_0xdae613[_0x453b9a(0x573)][-0x2*0x9b6+-0xa9*-0x6+0xf78])*_0x498f4b;continue;case'2':_0x4a7089['arc'](_0x1da2ee,_0x70c810,_0x487b59?0x8a4+-0x20a0+0x17fe:-0x6b6+0x651+0x2*0x34+0.20000000000000018,-0x1*0x211c+0xbe4+0xa9c*0x2,Math['PI']*(-0x51*-0xe+0x1f55+0x9*-0x3f9));continue;case'3':var _0x5582cf=Math[_0x453b9a(0xba0)](_0x11b6a3['bYVBC'](_0x518663*_0x518663,_0x11b6a3['svqhB'](_0x3bd944,_0x3bd944)));continue;case'4':var _0x487b59=_0x11b6a3['yTQqV'](_0x582c18,null)&&_0x4d5fd5['team']===_0x582c18;continue;case'5':_0x4a7089['begin'+_0x453b9a(0x7f6)]();continue;case'6':_0x4a7089['fillS'+_0x453b9a(0x625)]=_0x487b59?_0x453b9a(0xa4d)+'6a':_0x11b6a3['RhtTv'];continue;case'7':_0x5582cf>_0x56f57c-(-0x6*-0x33b+-0x1dcf+0x1*0xa73)?(_0x1da2ee=_0x56f57c+_0x11b6a3['gLlEt'](_0x11b6a3['bcfce'](_0x518663,_0x5582cf),_0x11b6a3[_0x453b9a(0x6ab)](_0x56f57c,0x119b+0x158c+-0x2721)),_0x70c810=_0x11b6a3['LNFWy'](_0x56f57c,_0x11b6a3[_0x453b9a(0x67a)](_0x3bd944/_0x5582cf,_0x56f57c-(0xda6+0x194c+-0x26ec)))):(_0x1da2ee=_0x56f57c+_0x518663,_0x70c810=_0x11b6a3[_0x453b9a(0x81d)](_0x56f57c,_0x3bd944));continue;case'8':_0x4a7089[_0x453b9a(0x8d0)]();continue;case'9':var _0x1da2ee=_0x56f57c,_0x70c810=_0x56f57c;continue;case'10':var _0x4d5fd5=_0x3146a8['list'][_0x3be0f5];continue;}break;}}_0x4a7089[_0x453b9a(0x44a)+_0x453b9a(0x625)]='#7ee0'+'a8',_0x4a7089['begin'+_0x453b9a(0x7f6)](),_0x4a7089['arc'](_0x56f57c,_0x56f57c,-0x35c+0x226e+-0x1f0f,-0x2610+0x960+-0x72c*-0x4,_0x11b6a3['yqHBl'](Math['PI'],-0x3ec+-0xe7d*0x1+0x126b)),_0x4a7089[_0x453b9a(0x8d0)](),_0x4526f1['lg']&&(_0x4526f1['lg']['textC'+_0x453b9a(0xa15)+'t']=_0x11b6a3['eXSlX'](_0x453b9a(0x5d5),_0x3e9984)+_0x11b6a3['MJdKg']+Math[_0x453b9a(0x2c4)](_0x143771['span'])+'m'+(_0x143771['boxes']?'\x20·\x20fo'+'v\x20'+Math['round'](_0x2f79da[_0x453b9a(0x60b)])+'°':'')+(_0x582c18!==null?_0x11b6a3[_0x453b9a(0x47c)]+_0x582c18:''));}catch(_0x15d439){}}}function _0x4f5dc5(){var _0x101511=_0x586988,_0x1eed6a={'FqfjT':_0x101511(0x846)+'r','NeIPA':function(_0xf36b61,_0x545bea){return _0xf36b61===_0x545bea;}};if(_0x11b6a3['evZUF'](_0x11b6a3['RpkPn'],_0x11b6a3['iOFJP'])){var _0x412544=_0xc9fffc['Photo'+_0x101511(0x600)+_0x101511(0x3ec)+'nc']||{};if(!Object['keys'](_0x412544)['lengt'+'h'])return![];return!!_0x11b6a3[_0x101511(0x909)](_0x2cc79a);}else try{var _0x4fe724=_0x47878e['getIt'+'em'](_0x40c5d5);if(!_0x4fe724)return;var _0x13b50a=_0x4750b2['parse'](_0x4fe724);if(_0x13b50a&&typeof _0x13b50a['x']===_0x1eed6a[_0x101511(0xb29)]&&_0x1eed6a[_0x101511(0x8ec)](typeof _0x13b50a['y'],'numbe'+'r'))_0x1b45a1[_0x101511(0x3a2)]=_0x13b50a;}catch(_0x560bda){}}function _0x417950(_0xd4b83){var _0x3b9651=_0x586988;try{var _0x4a5184=_0xe053a3;if(_0x4a5184&&_0x4a5184['el'])_0x4a5184['el']['style']['displ'+'ay']=_0xd4b83?'':'none';var _0x229027=_0x16c94e;if(_0x229027&&_0x229027['cv'])_0x229027['cv'][_0x3b9651(0x3d2)]['displ'+'ay']=_0xd4b83?'':'none';}catch(_0x51ec62){}}var _0x2f4b4b=0x1*0x1bb6+0x3a*-0x81+0xc2*0x2,_0x47d406=0x26f2*-0x1+-0x21db+-0x1*-0x48cd;function _0x44dfa7(_0x207474){var _0x550ab9=_0x586988;_0x11b6a3[_0x550ab9(0x32b)](typeof requestAnimationFrame,_0x550ab9(0x952)+_0x550ab9(0x8b4))?_0x11b6a3[_0x550ab9(0x360)]('HsfVe',_0x11b6a3[_0x550ab9(0x3be)])?_0x2f4b4b=requestAnimationFrame(_0x3f14ed):(_0x19f7d7=_0x9487bd,_0x34cbef=_0x4b60dc['c'][_0x1d1d7c]):_0x47d406=setTimeout(_0x3f14ed,_0x207474||-0x2*-0xba7+0x4*-0x57+-0x15c0);}function _0x3f14ed(){var _0x185ecb=_0x586988;_0x2f4b4b=0x1*-0xd7+-0x6b5+0x78c;if(!_0x143771['on']||!_0x11b6a3['OQbpZ'](_0x4f5dc5)){_0x11b6a3['FXFgR'](_0x417950,![]),_0x11b6a3['QiOCF'](_0x44dfa7,0x2d4*0x3+-0x135*0x8+0x258);return;}_0x11b6a3[_0x185ecb(0x794)](_0x417950,!![]),_0x11b6a3['tHbzE'](_0x2ed3ac),_0x42fb2d();if(_0x143771['boxes'])_0x46fbde();var _0x408303=null;try{_0x21672f();}catch(_0x2c6bf9){}try{_0x408303=_0x37adcd();}catch(_0x7b03ee){}try{_0x2c9697();}catch(_0x374972){}try{_0x50c87d(_0x408303);}catch(_0x226a97){}_0x44dfa7(0x19b2+-0x1621+-0x391);}function _0x14e3f2(){var _0x3bf85d=_0x586988,_0x3d599f={'SiMsX':function(_0x4a03e3,_0x58f316){return _0x11b6a3['RjOSG'](_0x4a03e3,_0x58f316);},'YsVgH':function(_0x34aea9){return _0x34aea9();},'mGEas':function(_0x2a46bf){return _0x11b6a3['GidUl'](_0x2a46bf);},'VKZCT':function(_0x23e8ec,_0x583ad1){var _0x5f3f7a=_0x576a;return _0x11b6a3[_0x5f3f7a(0x5a0)](_0x23e8ec,_0x583ad1);},'SvIOh':function(_0xda3d74,_0x18a72d){return _0xda3d74/_0x18a72d;},'aUaAz':function(_0x10e01d,_0x3b86f1){return _0x10e01d/_0x3b86f1;},'mmBWq':_0x3bf85d(0x2cf)+_0x3bf85d(0x167)+'s)','qXJFu':_0x11b6a3[_0x3bf85d(0x8b5)],'PzzeE':_0x3bf85d(0xa6c),'teuAs':function(_0x2a5344,_0xd0c368){return _0x2a5344+_0xd0c368;},'tEYlf':function(_0x2d0e35,_0x219833){return _0x2d0e35*_0x219833;},'ieYZx':function(_0x1e08b5,_0x43f539){return _0x1e08b5<_0x43f539;},'ZZnzH':_0x3bf85d(0x413)+_0x3bf85d(0x3b3)+_0x3bf85d(0x16b),'HLptC':function(_0x1a8be1,_0x1c06e5){return _0x1a8be1===_0x1c06e5;},'rnkUj':function(_0x2ab5da,_0x1a0ac5){return _0x11b6a3['WTuvd'](_0x2ab5da,_0x1a0ac5);},'sNuEn':_0x11b6a3[_0x3bf85d(0x773)],'eiPgA':function(_0x3dfbde,_0x19a3ed){return _0x11b6a3['IGnqT'](_0x3dfbde,_0x19a3ed);},'kMeWK':function(_0x18316a,_0x26e373){return _0x18316a-_0x26e373;}},_0x7e1c32=window['Unity'+_0x3bf85d(0x881)+_0x3bf85d(0x984)]&&window[_0x3bf85d(0x1c2)+'WebMo'+'dkit']['Runti'+'me']||null,_0x23accc=_0x7e1c32&&_0x7e1c32['il2Cp'+_0x3bf85d(0x2aa)+'ext'],_0x8c356b=_0x23accc&&_0x23accc[_0x3bf85d(0xa1c)+'tData'],_0x373f56={},_0x212086=[];for(var _0x5dabe1 in _0x4c2416){_0x373f56[_0x5dabe1]=_0x11b6a3[_0x3bf85d(0x9d1)]('0x',_0x4c2416[_0x5dabe1][_0x3bf85d(0x461)]['toStr'+_0x3bf85d(0x3cc)](0x191a+0x4*0x3fb+-0x31*0xd6));if(_0x4c2416[_0x5dabe1]['repla'+'ced'])_0x212086['push'](_0x5dabe1);}var _0x3442df={};for(var _0x53b66a in _0x4c2416)_0x3442df[_0x53b66a]=_0x251615(_0x4c2416[_0x53b66a]['ptr']);var _0x36bc7b={},_0x667d07=null;try{_0x11b6a3[_0x3bf85d(0x9b2)](_0x11b6a3[_0x3bf85d(0xcb5)],_0x3bf85d(0x3a8))?_0x36bc7b=_0x26572b():_0x5eba6b['clipb'+_0x3bf85d(0x346)]['write'+_0x3bf85d(0x6ca)](_0x6600f4)[_0x3bf85d(0x998)](function(){var _0x1630a5=_0x3bf85d;_0x1ae22b[_0x1630a5(0x4fc)+'onten'+'t']='Copie'+'d';});}catch(_0x481cca){_0x667d07=String(_0x481cca&&_0x481cca[_0x3bf85d(0xd29)+'ge']||_0x481cca);}var _0x3e40cf={'version':_0xa19145,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':Date[_0x3bf85d(0x854)]()-_0x1c7ce6,'frame':location[_0x3bf85d(0x356)][_0x3bf85d(0xb19)](-0xe3b+-0x63*-0x19+-0x248*-0x2,0x3*0x287+0x2*-0x360+-0x5d),'host':_0x3f310d,'frameRole':_0x2ed046,'uwmk':!!_0x7e1c32,'il2CppContext':!!_0x23accc,'typeCount':_0x8c356b?Object[_0x3bf85d(0xc9b)](_0x8c356b)['lengt'+'h']:null,'arm':_0x1ffb46,'assemblies':_0x592274,'hooksTotal':_0x37ed37[_0x3bf85d(0x964)+'h'],'hooksApplied':_0x11b6a3[_0x3bf85d(0x6c8)](_0x3fc79d),'hooksResolved':_0x11b6a3['mHzEE'](_0x37c94c),'hooksRegisteredAtArm':_0x1ffb46[_0x3bf85d(0xb2a)+_0x3bf85d(0x165)+_0x3bf85d(0x879)]||-0x1*-0x1968+-0x2069+0x701,'hookErrors':_0x49fba6[_0x3bf85d(0xb19)](0x12b3+-0x210*-0xb+-0x1*0x2963,0x1121*0x1+0x7f+-0x1198),'instances':_0x373f56,'classNames':_0x3442df,'instancesReplaced':_0x212086,'hookFireProof':_0x57a489,'survey':_0x36bc7b,'actkKeys':_0x367066,'surveyRows':Object['keys'](_0x36bc7b)[_0x3bf85d(0x541)+'e'](function(_0x44e64d,_0xaeb45d){var _0x59b82b=_0x3bf85d;return _0x3d599f['SiMsX'](_0x44e64d,_0x36bc7b[_0xaeb45d][_0x59b82b(0x964)+'h']);},-0x1*0x22d6+-0xdf3+0x21f*0x17),'reads':{'ok':_0x265ccb['ok'],'failed':_0x265ccb['faile'+'d'],'lastError':_0x265ccb[_0x3bf85d(0xc57)+_0x3bf85d(0x376)],'source':_0x265ccb[_0x3bf85d(0x6f8)+'e']},'identity':_0x11b6a3['xREaa'](_0x57d537),'globals':_0x11b6a3[_0x3bf85d(0x164)](_0x5b1fb6),'wasmMemory':{'captured':!!_0x9ce02f,'atMs':_0x1b038f,'bytes':(function(){var _0x325c7e=_0x3bf85d,_0x32a60b={'aaOxL':_0x11b6a3[_0x325c7e(0xbd2)]};try{if(_0x325c7e(0xadc)===_0x325c7e(0xafa)){if(_0x24696d)_0x4beb18[_0x325c7e(0x4fc)+'onten'+'t']='Copie'+'d';}else return _0x9ce02f&&_0x9ce02f[_0x325c7e(0x2cc)+'r']?_0x9ce02f['buffe'+'r']['byteL'+'ength']:-0x1453+-0xc30+0x2083;}catch(_0x38eb62){if('mXnDC'!=='WSOoa')return-0x1791+0xb71*-0x1+-0x2302*-0x1;else _0x4f7934[_0x325c7e(0x4cf)+_0x325c7e(0xc12)]['push']('plugi'+'n._ru'+_0x325c7e(0xd4f)+_0x325c7e(0x538)+'ot\x20wi'+'ndow.'+_0x325c7e(0x1c2)+_0x325c7e(0x881)+_0x325c7e(0x82c)+_0x325c7e(0x213)+'me\x20-\x20'+_0x325c7e(0xc4c)+_0x325c7e(0x757)+_0x325c7e(0xd09)+_0x325c7e(0xc25)+'\x20'+_0x32a60b['aaOxL']);}}()),'exportKeys':_0x5e4094},'diff':_0x58aeb3[_0x3bf85d(0xb19)](0x125*0x7+-0x8*-0x370+-0x2383*0x1,-0x1b85*0x1+-0x44*0x8b+0x4099),'speed':{'on':_0x3b07fd['on'],'factor':_0x3b07fd[_0x3bf85d(0x7f0)+'r'],'writes':_0x130698,'scaled':_0x18199f[_0x3bf85d(0xb19)](0xbd*-0x2+-0xebd+-0x1037*-0x1,-0x2634+0x20c7+0x119*0x5),'skipped':_0x4e6b9b[_0x3bf85d(0xb19)](0x1*-0x7c7+0xdf7+-0x84*0xc,-0x64a+0x11*0x160+-0x1106*0x1)},'esp':_0x234c04(),'view':_0x11b6a3[_0x3bf85d(0x679)](_0xf2f264),'camera':(function(){var _0x15b659=_0x3bf85d;try{var _0x24299a=_0x21672f();return{'ok':_0x24299a['ok'],'source':_0x24299a[_0x15b659(0x6f8)+'e'],'why':_0x24299a['why'],'tried':_0x24299a[_0x15b659(0x5b0)],'camPtr':_0x11b6a3['gRyNM']('0x',_0x24299a['camPt'+'r']['toStr'+_0x15b659(0x3cc)](-0x1a*0x95+0xe85+0xad)),'tfPtr':'0x'+_0x24299a[_0x15b659(0xc18)]['toStr'+'ing'](-0x356+0xa06*-0x1+0x4*0x35b),'fov':_0x24299a[_0x15b659(0x60b)],'quat':_0x24299a['quat'],'pos':_0x24299a[_0x15b659(0x3a2)],'basis':_0x24299a[_0x15b659(0x47b)],'errors':_0x24299a['error'+'s']['slice'](0x7e+0x2f*-0x88+-0x1a*-0xf1,-0x191c*-0x1+-0x764+0xce*-0x16)};}catch(_0x3b8165){if(_0x11b6a3[_0x15b659(0x6fa)]===_0x11b6a3['IWUrF'])_0x4e9f96['defin'+'eProp'+_0x15b659(0xb74)](_0x21f656,_0x15b659(0xb48),{'value':_0x2eb601[_0x15b659(0xb48)],'configurable':!![]});else return{'ok':![],'error':_0x11b6a3[_0x15b659(0x9cd)](String,_0x3b8165&&_0x3b8165['messa'+'ge']||_0x3b8165)['slice'](-0x2*0xaa9+-0x4*0x85f+0x262*0x17,0xe2*-0x17+-0xcdb+0x21a1*0x1)};}}()),'angles':(function(){var _0x56ba59=_0x3bf85d,_0x375cef=_0x1f47c6(),_0x528516=null,_0x129e26=null,_0xd4d16c=_0x3d599f['mGEas'](_0x2cc79a);if(_0xd4d16c){if(_0x3d599f[_0x56ba59(0x7d4)]('KkNED',_0x56ba59(0xa7d))){var _0x24e23f=_0x5be73e(_0xd4d16c[_0x56ba59(0xda1)],[_0xd4d16c['eye'][-0x24db+-0x47*0x37+0x1d*0x1cc],_0xd4d16c[_0x56ba59(0xda1)][-0x5df+-0x140f+-0x3*-0x8a5],_0xd4d16c[_0x56ba59(0xda1)][-0x8*0x5c+0xb15+-0x1*0x833]+(0x1bd2+-0x2c5*-0x7+-0x2f34)],-0x11*0xb5+-0x2*0xc3e+0x2869*0x1,-0xbb*-0x1+-0x2*-0x8f9+-0xec5);_0x24e23f&&(_0x528516=_0x24e23f['x']/(-0x217d*0x1+-0x262c+0x4b91),_0x129e26=_0x24e23f['y']/(0x4*0x3ef+0x12*-0x10b+0x379*0x2));}else _0x11770e[_0x56ba59(0xaf5)][_0x56ba59(0xb1e)+'ed']=![];}var _0x3fd07c=null,_0x3d7979=null;if(_0xd4d16c){var _0x11e88c=_0x5be73e(_0xd4d16c['eye'],[_0xd4d16c[_0x56ba59(0xda1)][0xb98+0x6*-0x58+-0x988],_0xd4d16c['eye'][-0x1e14+0x2164+-0x34f]+(-0x1717+0x1a61+0xd0*-0x4),_0xd4d16c['eye'][0x14ed*-0x1+0x15*-0xa3+-0x224e*-0x1]+(-0x6*0x1d+-0x1*0x58f+-0x647*-0x1)],-0xa9f+0x1ded+0x522*-0x3,-0x2176+0xf2+0x6*0x612);if(_0x11e88c)_0x3fd07c=_0x3d599f[_0x56ba59(0x673)](_0x11e88c['y'],0x1*-0x7cf+-0x14d5+0x208c);var _0x3671d8=_0x5be73e(_0xd4d16c[_0x56ba59(0xda1)],[_0xd4d16c[_0x56ba59(0xda1)][-0x1264+-0x11e7*-0x1+0x7d],_0xd4d16c['eye'][0x5*0x567+0x20b*-0x9+-0x89f]-(0x196b+0xc5c+-0x25bd),_0x3d599f[_0x56ba59(0x45c)](_0xd4d16c['eye'][-0x1*0x134d+-0x90b+0xe2d*0x2],-0xf7*0x1a+-0x1433+0x2d53)],-0x7*0x15+-0x1a5b+-0xf6b*-0x2,0x9*-0x2f+-0x9*0x118+-0xf67*-0x1);if(_0x3671d8)_0x3d7979=_0x3d599f[_0x56ba59(0xb4d)](_0x3671d8['y'],-0xf67+-0x570+0x18bf);}return{'identified':_0x2a40fa['ident'+'ified'],'why':_0x2a40fa['why'],'source':_0x2a40fa[_0x56ba59(0x6f8)+'e'],'viewHooks':(function(){var _0x4ea82c=_0x56ba59;try{return _0x1ffe33();}catch(_0x5b3e51){return{'err':String(_0x5b3e51&&_0x5b3e51[_0x4ea82c(0xd29)+'ge']),'stack':String(_0x5b3e51&&_0x5b3e51[_0x4ea82c(0x62d)])};}}()),'setterPair':(function(){var _0xea9b6e=_0x56ba59;if(_0xea9b6e(0x7cd)===_0xea9b6e(0xc0d))try{_0x3fb4bf['hook'][_0xea9b6e(0xb1e)+'ed']=![];}catch(_0x4382da){}else{var _0x5991ef=_0x3d599f['YsVgH'](_0x27dfd7);return _0x5991ef?{'a':_0x5991ef['rawA'],'b':_0x5991ef['rawB'],'hits':_0x5991ef[_0xea9b6e(0x421)],'order':_0x5991ef['order']}:null;}}()),'yawAt':_0x2a40fa[_0x56ba59(0xce3)+_0x56ba59(0x259)]||_0x3d599f[_0x56ba59(0xba4)],'pitchAt':_0x2a40fa[_0x56ba59(0x54c)+'Gette'+'r']||'0x1c\x20'+_0x56ba59(0x167)+'s)','getters':_0x2a40fa['gette'+'rs'],'rawPitch':_0x2a40fa['rawPi'+_0x56ba59(0x66a)],'rawYaw':_0x2a40fa['rawYa'+'w'],'pitch':_0x2a40fa['pitch'],'yaw':_0x2a40fa[_0x56ba59(0x314)],'legacyOffsetsCleared':_0x108abc,'fov':_0x2f79da[_0x56ba59(0x60b)],'fovSane':_0x2f79da['fov']>=-0x2485*-0x1+0xb2f+-0x2f78&&_0x2f79da[_0x56ba59(0x60b)]<=-0x9dc+-0x1a*-0x31+-0x55*-0x10,'centreX':_0x528516,'centreY':_0x129e26,'aboveY':_0x3fd07c,'belowY':_0x3d7979,'projection':_0x3b6831()};}()),'fov':_0x2f79da[_0x3bf85d(0x60b)],'espView':{'on':_0x143771['on'],'boxes':_0x143771[_0x3bf85d(0xd48)],'span':_0x143771[_0x3bf85d(0x671)]},'local':(function(){var _0x42e86c=_0x3bf85d;if(_0x3d599f['qXJFu']!==_0x3d599f[_0x42e86c(0x367)]){var _0x45e8db=_0x2cc79a();if(!_0x45e8db)return null;return{'ptr':_0x3d599f[_0x42e86c(0x821)]('0x',_0x45e8db[_0x42e86c(0x461)][_0x42e86c(0xd0f)+_0x42e86c(0x3cc)](-0x43+0x203c+-0x1fe9*0x1)),'feet':_0x45e8db[_0x42e86c(0x573)],'eye':_0x45e8db[_0x42e86c(0xda1)],'posAt':_0x45e8db['posAt'],'copies':_0x45e8db[_0x42e86c(0xb8f)+'s'],'cluster':_0x45e8db['clust'+'er'],'eyeHeight':_0x23be9f,'pitch':_0x45e8db['pitch'],'yaw':_0x45e8db[_0x42e86c(0x314)],'reach':_0x45e8db[_0x42e86c(0x179)]};}else return![];}()),'uwmkLog':_0x213ee2['slice'](-0x5*0x26c+0x258d+-0x1971,-0xe63+-0x975+0x17ec),'warnings':[]};if(_0x667d07)_0x3e40cf['warni'+_0x3bf85d(0xc12)][_0x3bf85d(0x68c)](_0x3bf85d(0x89b)+'y\x20fai'+'led:\x20'+_0x667d07);if(_0x1ffb46[_0x3bf85d(0xccf)])_0x3e40cf[_0x3bf85d(0x4cf)+'ngs']['push'](_0x11b6a3['WGgML'](_0x11b6a3['uRZQk'],_0x1ffb46['error']));if(_0x3e40cf[_0x3bf85d(0x89b)+_0x3bf85d(0x5d8)]===0x943+-0xd*-0x1af+-0x6*0x531&&_0x11b6a3['jgbEi'](Object[_0x3bf85d(0xc9b)](_0x3e40cf['insta'+'nces'])[_0x3bf85d(0x964)+'h'],-0x71d+-0x5c*-0x4b+-0x13d7)){if('hTgKo'!==_0x11b6a3['SWDtA'])_0x3e40cf[_0x3bf85d(0x4cf)+'ngs'][_0x3bf85d(0x68c)](_0x3bf85d(0x585)+'red\x20'+Object[_0x3bf85d(0xc9b)](_0x3e40cf[_0x3bf85d(0xb17)+_0x3bf85d(0xbd9)])['lengt'+'h']+(_0x3bf85d(0x5fb)+_0x3bf85d(0x42d)+_0x3bf85d(0x6d4)+'read\x20'+'0\x20fie'+'lds.\x20')+(_0x265ccb[_0x3bf85d(0xc57)+'rror']?_0x11b6a3['foWAQ']+_0x265ccb[_0x3bf85d(0xc57)+_0x3bf85d(0x376)]:_0x3bf85d(0x80a)+'ad\x20fa'+_0x3bf85d(0x5d7)+_0x3bf85d(0x25b)+_0x3bf85d(0x6b9)+_0x3bf85d(0x848)+_0x3bf85d(0x826)+_0x3bf85d(0x285)+_0x3bf85d(0x1c6)+_0x3bf85d(0xabc)+'e.'));else{var _0x2e810a=_0x5dff7c[_0x3bf85d(0x813)][_0x2a3458],_0x346728=(_0x2e810a['x']-_0x48ac04[_0x3bf85d(0x573)][0x2*0x118a+0x1f90+-0x4*0x10a9])*_0x493dc5,_0x922479=(_0x2e810a['z']-_0x4332bc[_0x3bf85d(0x573)][-0x1*-0x1997+0x1233+0x579*-0x8])*_0x12d504,_0x3991a5=_0x170e86[_0x3bf85d(0xba0)](_0x11b6a3[_0x3bf85d(0x3ea)](_0x346728*_0x346728,_0x922479*_0x922479)),_0x275a41=_0x5e2432,_0x505042=_0x3cbd6a;_0x3991a5>_0x11bdaf-(-0x1b47+-0x9*-0x151+0xf74)?(_0x275a41=_0x11b6a3[_0x3bf85d(0xc94)](_0x9adb55,_0x346728/_0x3991a5*(_0x27d7f9-(0x1ffa*0x1+0x283+-0x11*0x207))),_0x505042=_0x2f66ac+_0x11b6a3['QmRti'](_0x922479,_0x3991a5)*(_0x117619-(0x363+0x1103+-0xa3*0x20))):(_0x275a41=_0x11b6a3[_0x3bf85d(0xd95)](_0x7b9b95,_0x346728),_0x505042=_0x27cd4f+_0x922479);var _0x2e01c6=_0x11b6a3['nhEpw'](_0xf08c33,null)&&_0x11b6a3[_0x3bf85d(0x397)](_0x2e810a[_0x3bf85d(0xd20)],_0x3f1424);_0x2885ed[_0x3bf85d(0x44a)+_0x3bf85d(0x625)]=_0x2e01c6?'#4f8f'+'6a':_0x11b6a3['RhtTv'],_0xe0932f['begin'+'Path'](),_0x4b11e5['arc'](_0x275a41,_0x505042,_0x2e01c6?0x63+-0x2487+0x2426:0x82*0x4b+-0x74b+0x1ec8*-0x1+0.20000000000000018,-0xf8b+-0x1d00+-0x7*-0x65d,_0x5511cb['PI']*(0xe4*0x21+0x161b+-0x337d)),_0x21d7cb[_0x3bf85d(0x8d0)](),_0x4ec5cd++;}}_0x3e40cf[_0x3bf85d(0x189)+_0x3bf85d(0x574)]&&_0x11b6a3[_0x3bf85d(0x238)](_0x3e40cf[_0x3bf85d(0x189)+_0x3bf85d(0x574)]['tagMa'+_0x3bf85d(0x251)],![])&&_0x3e40cf['warni'+_0x3bf85d(0xc12)][_0x3bf85d(0x68c)](_0x11b6a3[_0x3bf85d(0x74f)](_0x3bf85d(0x701)+'ER\x20UW'+'MK\x20CO'+_0x3bf85d(0x70a)+'OK\x20OV'+'ER\x20wi'+_0x3bf85d(0x79d)+'Unity'+_0x3bf85d(0x881)+'dkit.'+_0x3bf85d(0x895)+_0x3bf85d(0x213)+'me\x20we'+_0x3bf85d(0x9f6)+_0x3bf85d(0x864)+'\x20',_0x11b6a3['RgeWI'])+('the\x20g'+'ame\x20w'+_0x3bf85d(0x2a7)+'the\x20o'+_0x3bf85d(0x74c)+'lding'+'\x20it\x20i'+_0x3bf85d(0xbfd)+'haned'+'.\x20Dis'+'able\x20'+_0x3bf85d(0xa5c)+'\x20othe'+'r\x20')+('Sakur'+_0x3bf85d(0xa12)+_0x3bf85d(0x427)+'ipt\x20i'+_0x3bf85d(0x90f)+_0x3bf85d(0x5db)+_0x3bf85d(0xbc4)+'and\x20h'+_0x3bf85d(0x7f5)+_0x3bf85d(0x208)+'.'));if(_0x3e40cf[_0x3bf85d(0x189)+'ity']&&_0x11b6a3[_0x3bf85d(0xd7d)](_0x3e40cf['ident'+_0x3bf85d(0x574)]['plugi'+'nRunt'+_0x3bf85d(0x2b8)+_0x3bf85d(0x16e)+_0x3bf85d(0xa23)],![])){if(_0x11b6a3[_0x3bf85d(0xb60)]===_0x3bf85d(0xde6)){if(_0x1ebb45&&typeof _0x4ebf34['then']===_0x3bf85d(0x952)+_0x3bf85d(0x8b4))_0x493e75[_0x3bf85d(0x998)](_0x83f589,function(){});else _0x3f99c3(_0xef2eda);}else _0x3e40cf['warni'+_0x3bf85d(0xc12)]['push'](_0x11b6a3['TjvZd']+(_0x3bf85d(0x88a)+_0x3bf85d(0x7ff)+'diffe'+_0x3bf85d(0x5da)+_0x3bf85d(0x213)+_0x3bf85d(0x99d)+_0x3bf85d(0x87a)+'e\x20tha'+_0x3bf85d(0x749)+_0x3bf85d(0x5ba)+'al\x20no'+_0x3bf85d(0x973)+_0x3bf85d(0x5ac)));}if(_0x3e40cf['esp']&&_0x3e40cf['esp']['note'])_0x3e40cf[_0x3bf85d(0x4cf)+_0x3bf85d(0xc12)]['push'](_0x11b6a3[_0x3bf85d(0xe17)](_0x3bf85d(0xaa4),_0x3e40cf[_0x3bf85d(0x68a)][_0x3bf85d(0x334)]));if(_0x3e40cf['globa'+'ls']&&!_0x3e40cf[_0x3bf85d(0x17d)+'ls']['heapU'+'8']){var _0x3098d2='';if(_0x3e40cf[_0x3bf85d(0xd3c)+'irePr'+'oof']){if(_0x11b6a3[_0x3bf85d(0x1ac)](_0x11b6a3[_0x3bf85d(0x7c4)],'ACnDw')){var _0x335f10=_0x3d599f[_0x3bf85d(0x184)](_0x25265d);if(!_0x335f10)return null;if(_0xfba522<0x1*-0x268+-0x6fe*-0x5+-0x208e||_0x39f442+_0x3d599f[_0x3bf85d(0x7fc)](_0x1b434e,-0x12b*0xc+0x10b3+0x2ab*-0x1)>_0x335f10[_0x3bf85d(0x4ae)+_0x3bf85d(0x665)])return null;var _0x48ed2b=[];for(var _0x97d2ef=-0x1fe8+-0x1*-0x232b+-0x1*0x343;_0x3d599f[_0x3bf85d(0xb7f)](_0x97d2ef,_0x5547be);_0x97d2ef++)_0x48ed2b[_0x3bf85d(0x68c)](_0x335f10['getFl'+_0x3bf85d(0xa57)](_0x3d599f['teuAs'](_0x3d599f[_0x3bf85d(0x45c)](_0x371f76,_0x3d8ee6),_0x97d2ef*(0x101*-0x3+-0x1*0x4c1+0x7c8)),!![]));return _0xbb59a5['ok']+=_0x135576,_0x48ed2b;}else _0x3098d2=_0x11b6a3[_0x3bf85d(0xa94)](_0x11b6a3[_0x3bf85d(0xa5f)](_0x11b6a3['jqSsa'],_0x3e40cf['hookF'+_0x3bf85d(0x2c7)+'oof'][_0x3bf85d(0xa73)])+('ms\x20wi'+_0x3bf85d(0x893)+'igina'+_0x3bf85d(0x2af)+'=')+_0x3e40cf[_0x3bf85d(0xd3c)+'irePr'+_0x3bf85d(0xced)][_0x3bf85d(0x92e)+_0x3bf85d(0xbe0)+'nc']+(_0x3bf85d(0x196)+_0x3bf85d(0x47e)+_0x3bf85d(0xa36)+_0x3bf85d(0x73f))+_0x3e40cf[_0x3bf85d(0xd3c)+_0x3bf85d(0x2c7)+_0x3bf85d(0xced)][_0x3bf85d(0xa36)+_0x3bf85d(0x894)+'eAtFi'+'re'],'\x20(sou'+'rce:\x20')+(_0x3e40cf[_0x3bf85d(0xd3c)+_0x3bf85d(0x2c7)+_0x3bf85d(0xced)][_0x3bf85d(0x640)+_0x3bf85d(0x91d)+_0x3bf85d(0x59d)+'e']||'none')+_0x11b6a3['XsvFg'];}_0x3e40cf[_0x3bf85d(0x4cf)+_0x3bf85d(0xc12)][_0x3bf85d(0x68c)](_0x11b6a3[_0x3bf85d(0xc6b)](_0x11b6a3['UNHzu'](_0x11b6a3['NMCuj'],_0x3e40cf[_0x3bf85d(0x17d)+'ls']['gameS'+_0x3bf85d(0x91d)]||_0x3bf85d(0x29f))+').\x20',_0x3bf85d(0xb8e)+_0x3bf85d(0x173)+_0x3bf85d(0xa4c)+_0x3bf85d(0x4f3)+_0x3bf85d(0x3fe)+_0x3bf85d(0x838)+'a\x20gam'+_0x3bf85d(0xa2a)+_0x3bf85d(0x55f)+_0x3bf85d(0x96f)+_0x3bf85d(0x8f9)+'.HEAP'+_0x3bf85d(0xaab)+_0x3bf85d(0xbe4)+_0x3bf85d(0x45f)+'.')+_0x3098d2);}(_0x3e40cf[_0x3bf85d(0x17d)+'ls']&&!_0x3e40cf[_0x3bf85d(0x17d)+'ls'][_0x3bf85d(0xc6d)+'Wrapp'+'er']||_0x11b6a3[_0x3bf85d(0xa74)](_0x3e40cf[_0x3bf85d(0x17d)+'ls'][_0x3bf85d(0xc6d)+'Wrapp'+'er'],_0x11b6a3['BsfDu']))&&_0x3e40cf['warni'+_0x3bf85d(0xc12)]['push'](_0x11b6a3['NEejj']);if(_0x3e40cf[_0x3bf85d(0xb2a)+_0x3bf85d(0x730)]>0xf94*-0x1+0x68*0x59+0x1*-0x1494&&_0x3e40cf[_0x3bf85d(0xb2a)+_0x3bf85d(0xc33)+'ed']===0x2*0x5ae+0x1bcf+-0x272b&&_0x8c356b){if(_0x3e40cf['hooks'+_0x3bf85d(0xc6a)+_0x3bf85d(0x651)]===-0x1585+0x2ab+0x12da){if(_0x3bf85d(0x47f)!==_0x3bf85d(0x45b))_0x3e40cf['warni'+_0x3bf85d(0xc12)]['push'](_0x11b6a3[_0x3bf85d(0x2fa)](_0x11b6a3[_0x3bf85d(0xdb0)](_0x11b6a3[_0x3bf85d(0x7b8)](_0x3bf85d(0xbe6),_0x3e40cf['hooks'+'Total']),_0x11b6a3[_0x3bf85d(0x9c5)])+('runs\x20'+'once\x20'+_0x3bf85d(0xa3b)+_0x3bf85d(0x4bb)+_0x3bf85d(0x468)+'bly.i'+'nstan'+'tiate'+'\x20and\x20'+'snaps'+'hots\x20'+'plugi'+'n.hoo'+_0x3bf85d(0x970)+_0x3bf85d(0xbd8)+'\x20'),_0x11b6a3[_0x3bf85d(0xb1b)])+_0x11b6a3[_0x3bf85d(0xb85)]+_0x3e40cf['hooks'+'Regis'+'tered'+_0x3bf85d(0x7fa)]+(_0x3bf85d(0xddc)+_0x3bf85d(0xb1c)+'uring'+_0x3bf85d(0xa43)+'ng\x20at'+'\x20docu'+'ment-'+_0x3bf85d(0xe1e)+'.'));else{var _0x42744b=_0x3d599f['ZZnzH'][_0x3bf85d(0x783)]('|'),_0xaf7fd3=0x1ab5+-0x537+-0x157e;while(!![]){switch(_0x42744b[_0xaf7fd3++]){case'0':_0x368c4['on']=!!_0x5bd6e4;continue;case'1':_0x3a20cf[_0x3bf85d(0x7f0)+'r']=_0x1ce157[_0x3bf85d(0x4a9)](_0x2ef961[_0x3bf85d(0xd62)],_0x2c257c[_0x3bf85d(0xd62)](_0x2b1095[_0x3bf85d(0x4a9)],_0x26cd2f(_0x511ebf)||0x1263+0x4*-0x779+0xb82));continue;case'2':if(!_0x1e68e7['on'])_0x4cdc5a={};continue;case'3':_0x4ebbb2['on']&&!_0x259e4c&&(_0x3dd8bf===_0x52dd1a||_0x3d599f[_0x3bf85d(0x57e)](_0x37c295,null)||_0x3d599f[_0x3bf85d(0x66d)](_0xc8369,_0x3662a1)===0x334+-0x2610+0x22dd)&&(_0x10c189=_0x3024e8);continue;case'4':if(_0x35255f){_0x35255f['sp']&&(_0x35255f['sp']['textC'+_0x3bf85d(0xa15)+'t']=_0x9bda5e['on']?_0x3bf85d(0x8b9)+_0x3bf85d(0xa7a):_0x3d599f[_0x3bf85d(0x19e)],_0x35255f['sp']['style'][_0x3bf85d(0x6f3)+'round']=_0x34874f['on']?_0x4aaf73:'trans'+_0x3bf85d(0x52f)+'t',_0x35255f['sp']['style']['color']=_0x436f81['on']?_0x3bf85d(0x40c)+'1b':_0x3bf85d(0xada)+'f5');if(_0x35255f['fx'])_0x35255f['fx'][_0x3bf85d(0xc6d)]=_0x3d599f[_0x3bf85d(0xb6b)](_0x4f25a6,_0x18e0a6[_0x3bf85d(0x7f0)+'r']);if(_0x35255f['fv'])_0x35255f['fv']['textC'+_0x3bf85d(0xa15)+'t']=_0x11d088['facto'+'r'][_0x3bf85d(0xd34)+'ed'](-0x450+0x7*0x2e+0x30f*0x1)+'x';}continue;case'5':var _0x35255f=_0x57a7eb();continue;case'6':var _0x259e4c=_0x23889e['on'];continue;}break;}}}else _0x3e40cf[_0x3bf85d(0x4cf)+_0x3bf85d(0xc12)]['push'](_0x11b6a3['oxcTA'](_0x11b6a3[_0x3bf85d(0x9d1)](_0x11b6a3[_0x3bf85d(0x362)](_0x11b6a3[_0x3bf85d(0x5cc)]+_0x3e40cf['hooks'+_0x3bf85d(0xc6a)+_0x3bf85d(0x651)]+_0x3bf85d(0x601),_0x3e40cf[_0x3bf85d(0xb2a)+'Total']),'\x20hook'+_0x3bf85d(0x57d)+_0x3bf85d(0x80b)+'able\x20'+'index'+'\x20but\x20'+'appli'+'ed\x20no'+_0x3bf85d(0xc71)+_0x3bf85d(0xe1b)+'gnatu'+_0x3bf85d(0x542)),_0x3bf85d(0x713)+_0x3bf85d(0x878)+_0x3bf85d(0xaf9)+_0x3bf85d(0x305)+_0x3bf85d(0x8ae)+_0x3bf85d(0x1c1)+_0x3bf85d(0xbb9)+_0x3bf85d(0x391)+'ch\x20th'+_0x3bf85d(0x477)+_0x3bf85d(0xb13)));}if(_0x3e40cf[_0x3bf85d(0xb2a)+'Appli'+'ed']>0x13db+-0x1937+-0x1c*-0x31&&!_0x3e40cf['insta'+_0x3bf85d(0xbd9)][_0x3bf85d(0xb78)+'ntrol'+_0x3bf85d(0x24a)]){if(_0x11b6a3['tPhGf'](_0x11b6a3[_0x3bf85d(0x63b)],_0x11b6a3['xHXaJ']))_0x3e40cf[_0x3bf85d(0x4cf)+'ngs'][_0x3bf85d(0x68c)](_0x11b6a3['iiILx']+_0x11b6a3[_0x3bf85d(0xd8a)]);else return{'version':_0x2504f9,'when':new _0x5acb33()['toISO'+'Strin'+'g'](),'elapsedMs':_0x3d599f[_0x3bf85d(0xa52)](_0xe6bb5a[_0x3bf85d(0x854)](),_0x236cbf),'host':_0x2af76f,'uwmk':!!(_0x34c6e2[_0x3bf85d(0x1c2)+_0x3bf85d(0x881)+_0x3bf85d(0x984)]&&_0x2bcb16[_0x3bf85d(0x1c2)+'WebMo'+'dkit'][_0x3bf85d(0x213)+'me']),'il2CppContext':![],'arm':_0x1eb114,'hooksTotal':_0x4a59b2['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x16d113(_0x4060a5&&_0x1b5bff[_0x3bf85d(0xd29)+'ge']||_0xe6179c)};}return _0x3e40cf[_0x3bf85d(0xb17)+_0x3bf85d(0x6de)+_0x3bf85d(0x332)+'ed']['lengt'+'h']&&_0x3e40cf['warni'+'ngs'][_0x3bf85d(0x68c)](_0x11b6a3['UNHzu'](_0x3bf85d(0x85b)+'lt\x20si'+'nce\x20f'+_0x3bf85d(0xd44)+_0x3bf85d(0x585)+_0x3bf85d(0x769)+_0x3bf85d(0x73a)+'n?):\x20',_0x3e40cf['insta'+'ncesR'+_0x3bf85d(0x332)+'ed']['join'](',\x20'))),_0x3e40cf;}function _0x50b637(_0x5e6bf8){var _0x42cd68=_0x586988;console[_0x42cd68(0x45e)](_0x11b6a3[_0x42cd68(0xa32)],_0x11b6a3[_0x42cd68(0xbf1)]+_0x6ccbd2+(_0x42cd68(0x5f6)+'-weig'+'ht:70'+'0'),_0x5e6bf8),console[_0x42cd68(0x45e)](_0x11b6a3[_0x42cd68(0x304)](_0x11b6a3['nKDmw'](_0xdf8cb0,'\x0a')+JSON['strin'+_0x42cd68(0x686)](_0x5e6bf8,null,-0x260d+0x1*0x2e4+-0x1195*-0x2),'\x0a')+_0x2728c4),_0x1eb154=_0x5e6bf8;try{_0x5ee3eb(_0x5e6bf8);}catch(_0x3b82fb){}_0x11b6a3['kNTsj'](_0x51ef85,_0x11b6a3[_0x42cd68(0x1b3)],{'report':_0x5e6bf8});}function _0x1aed12(){var _0x4e107b=_0x586988,_0x36ed5f={'rZBzH':function(_0x52bd9b,_0x58e23f){return _0x52bd9b!==_0x58e23f;}};try{if(_0x11b6a3[_0x4e107b(0x597)]('Mqwmm',_0x11b6a3[_0x4e107b(0x790)]))return _0x11b6a3['xREaa'](_0x14e3f2);else{if(_0x200d0f[_0x240758]['hook']&&_0x36ed5f['rZBzH'](_0x1351ab[_0x1d5669][_0x4e107b(0xaf5)]['table'+_0x4e107b(0x539)],_0x412db3))_0x2bda5c++;}}catch(_0xbe1674){return'jClhX'==='PQtJY'?_0x2d7a9e['o']:{'version':_0xa19145,'when':new Date()[_0x4e107b(0xd31)+_0x4e107b(0xd5b)+'g'](),'elapsedMs':Date['now']()-_0x1c7ce6,'host':_0x3f310d,'uwmk':!!(window[_0x4e107b(0x1c2)+_0x4e107b(0x881)+'dkit']&&window[_0x4e107b(0x1c2)+'WebMo'+_0x4e107b(0x984)][_0x4e107b(0x213)+'me']),'il2CppContext':![],'arm':_0x1ffb46,'hooksTotal':_0x37ed37[_0x4e107b(0x964)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0xbe1674&&_0xbe1674[_0x4e107b(0xd29)+'ge']||_0xbe1674)};}}function _0x2ef5c4(){var _0x5bad05=_0x586988,_0x5d6ad5={'obnqp':function(_0x4356ee,_0x4e6586){var _0x1f075e=_0x576a;return _0x11b6a3[_0x1f075e(0x26d)](_0x4356ee,_0x4e6586);},'blZXT':_0x11b6a3[_0x5bad05(0xb10)],'XTdCR':_0x11b6a3[_0x5bad05(0x8dc)],'RlUtH':_0x5bad05(0xadd),'JlhEo':function(_0xf8c599){return _0xf8c599();},'QxNWB':function(_0x40f55a,_0x3371ef){return _0x40f55a<_0x3371ef;},'WJhOb':function(_0x34b9a6,_0x3f92d8,_0x140926){var _0x1ed88c=_0x5bad05;return _0x11b6a3[_0x1ed88c(0x202)](_0x34b9a6,_0x3f92d8,_0x140926);}},_0x522f40=-0x1*0xe9b+0x14b*-0x3+-0x34*-0x5b;try{_0x3f14ed();}catch(_0x161843){}try{if(_0x11b6a3[_0x5bad05(0xade)](_0x11b6a3[_0x5bad05(0x7b4)],_0x5bad05(0x96d)))return _0x5d6ad5[_0x5bad05(0xc00)](_0x6476f5[_0x5bad05(0x2c4)](_0x4d1083*(-0xe60+0x1*0x11e+0xda6)),-0x1f67+-0x123d+0x1904*0x2);else _0x5d6371();}catch(_0x4eb8a1){}setInterval(_0x175b3a,-0x2480+0x10fe+0x1706),_0x50b637(_0x11b6a3['NXiEF'](_0x1aed12)),function _0x337dc5(){var _0x451756=_0x5bad05,_0x1402c6={'bcWJj':function(_0x3d0715,_0x239d5e){return _0x3d0715+_0x239d5e;},'zPXjD':_0x5d6ad5[_0x451756(0x72e)],'SyiCU':'repla'+_0x451756(0x780)+'y\x20a\x20d'+'iffer'+'ent\x20i'+'nstan'+'ce,\x20s'+'o\x20we\x20'+_0x451756(0x1af)+_0x451756(0x9fc)+'\x20the\x20'+'wrong'+_0x451756(0x5fb)+_0x451756(0x170)+'r\x20','ASSXE':'the\x20g'+'ame\x20w'+_0x451756(0x2a7)+'the\x20o'+_0x451756(0x74c)+_0x451756(0xca9)+'\x20it\x20i'+'s\x20orp'+'haned'+_0x451756(0xbd1)+'able\x20'+'every'+_0x451756(0x5c5)+'r\x20'};if(!_0x37ed37['lengt'+'h']){if(_0x5d6ad5[_0x451756(0x67b)]!==_0x5d6ad5[_0x451756(0x41f)])try{_0x5d6ad5[_0x451756(0x868)](_0x549a69);}catch(_0x544953){}else _0x53a5d1['warni'+_0x451756(0xc12)]['push'](_0x1402c6[_0x451756(0x479)](_0x1402c6[_0x451756(0xbb4)],_0x1402c6[_0x451756(0x2ac)])+_0x1402c6[_0x451756(0xae9)]+('Sakur'+'a/UWM'+_0x451756(0x427)+'ipt\x20i'+_0x451756(0x90f)+'permo'+_0x451756(0xbc4)+'and\x20h'+'ard-r'+_0x451756(0x208)+'.'));}_0x522f40++,_0x50b637(_0x1aed12());if(!_0x37ed37[_0x451756(0x964)+'h']&&_0x5d6ad5[_0x451756(0x3ab)](_0x522f40,0x261*0xe+-0x7f*-0x1+-0x20a1))setTimeout(_0x337dc5,-0xfd0+0x1*0x161+0x163f);else{if(!Object[_0x451756(0xc9b)](_0x4c2416)[_0x451756(0x964)+'h']&&_0x522f40<0x1b1*-0x17+-0xbb*-0x31+0x448)setTimeout(_0x337dc5,0x2b*-0x83+0x3*-0xbf8+0x2a1*0x19);else _0x5d6ad5['WJhOb'](setTimeout,_0x337dc5,-0x3*-0xa49+0x1a53+-0x347e);}}();}if(document[_0x586988(0x300)])_0x2ef5c4();else document['addEv'+'entLi'+'stene'+'r'](_0x586988(0xc90)+_0x586988(0x193)+_0x586988(0x51b)+'d',_0x2ef5c4,{'once':!![]});if(document[_0x586988(0x300)])try{if(_0x11b6a3[_0x586988(0xbae)](_0x586988(0x7d5),'KKXsR')){_0x4ed32a[-0x1*-0x1da0+-0xe63*0x1+0x79e*-0x2]&&_0x11b6a3[_0x586988(0x735)](typeof _0x37f867[0x6ec+0x33*0x6f+-0x1d08][_0x586988(0x62a)],_0x586988(0x952)+_0x586988(0x8b4))&&(_0x4abe6f['setLa'+'st']=_0x335b53[-0x1*0x107+-0x1*-0xa32+0x2*-0x495]['val'](),_0x19d394[_0x586988(0x99e)+'ts']++);_0x245e60[0x5cc+0x876+-0xe40]&&typeof _0x1152e4[0x1678+0x2132+-0xdea*0x4][_0x586988(0x62a)]===_0x11b6a3[_0x586988(0x702)]&&(_0x32d84a['setB']=_0x29accd[0x20*-0x56+-0xb46+-0x8d*-0x28][_0x586988(0x62a)](),_0x105b1f['pairH'+_0x586988(0xb79)]++);if(_0x4a3267[-0x1601+0x30c+0x12f5]&&typeof _0x5ab6bc[0xad1+-0x12af+0x7de]['val']===_0x586988(0x952)+_0x586988(0x8b4)){var _0x243f54=_0x210d2e[0x2*-0xe5+-0x2*0xc75+0x1ab4][_0x586988(0x62a)]();if(_0x243f54)_0x2b5316=_0x243f54;}}else _0x4ad777();}catch(_0x3970ea){}else document['addEv'+_0x586988(0x30b)+'stene'+'r'](_0x11b6a3['pbhjd'],function(){try{_0x4ad777();}catch(_0x2e6c11){}},{'once':!![]});})()));function _0x576a(_0x3f7d45,_0xc60659){_0x3f7d45=_0x3f7d45-(-0x5b9+-0x1*-0x267a+0x1*-0x1f6a);var _0x3284ca=_0x1288();var _0x4567a7=_0x3284ca[_0x3f7d45];if(_0x576a['JmitFZ']===undefined){var _0x105fae=function(_0x3c858e){var _0x1968a0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x480d9f='',_0x274c78='';for(var _0x49cdd3=-0x2*0x20c+0x1db7*-0x1+0x21cf,_0x9dedcf,_0x23a5bb,_0x2c9a01=-0x119*0x7+0x1*0x7f1+-0x6*0xb;_0x23a5bb=_0x3c858e['charAt'](_0x2c9a01++);~_0x23a5bb&&(_0x9dedcf=_0x49cdd3%(0x132a+-0x68*0xd+-0xdde)?_0x9dedcf*(0x107f+0x20fa+-0x3139)+_0x23a5bb:_0x23a5bb,_0x49cdd3++%(-0x114d+0x2277*-0x1+0x4*0xcf2))?_0x480d9f+=String['fromCharCode'](-0x268f+0x33d+0x2451&_0x9dedcf>>(-(-0x144*-0x16+-0x6*0x463+0x1*-0x184)*_0x49cdd3&0x1*-0x1a1e+0x2*-0x1271+0x3f06)):0x4*-0x1cf+0x180a+-0x10ce){_0x23a5bb=_0x1968a0['indexOf'](_0x23a5bb);}for(var _0x43574e=-0x107*-0xe+0x3*-0x5d5+-0x31d*-0x1,_0x12d862=_0x480d9f['length'];_0x43574e<_0x12d862;_0x43574e++){_0x274c78+='%'+('00'+_0x480d9f['charCodeAt'](_0x43574e)['toString'](0x18e*0x17+-0x1d1+0x3*-0xb4b))['slice'](-(0x268b+0xc80+-0xf*0x367));}return decodeURIComponent(_0x274c78);};_0x576a['qfCktZ']=_0x105fae,_0x576a['bDwQDz']={},_0x576a['JmitFZ']=!![];}var _0x171665=_0x3284ca[-0x877+0x22*-0xdf+0x2615],_0xf2b46c=_0x3f7d45+_0x171665,_0x36e653=_0x576a['bDwQDz'][_0xf2b46c];return!_0x36e653?(_0x4567a7=_0x576a['qfCktZ'](_0x4567a7),_0x576a['bDwQDz'][_0xf2b46c]=_0x4567a7):_0x4567a7=_0x36e653,_0x4567a7;}function _0x1288(){var _0x2ad594=['m3W0Fdi','lcbZDgu','ltiUns0','BezhvgS','ywLSywi','zgL1CZO','zgvYoJa','Dw5Kzwy','BI1PDgu','Ewf3r2u','Bgv4lxC','DeLoChK','yM9VBgu','t01Xqwu','A0XsD3u','ENL2Bvy','tgf0zvu','qM94zxm','AdO2mNa','B29M','BYb3zsa','EIaTihC','D2LUzg8','igj5igu','WO7cHSknWOBcIq','Dc13zwK','zxjZ','Cu5xuu0','Aw5WDxq','sw5ZDge','tvfTyMC','sevbufu','y3jLyxq','t0SGt1y','ELjZq0i','CuHSEfm','EI51C2u','igfYzsa','uMfJq1K','sxr4rLy','BKv4t2m','igLZigy','pZWVC3a','zxG7z2e','tgLIBhe','Bu1iD1G','EdT9','ihDHCYa','CM9SBgu','oJeYmha','Bwj7lxC','mJq2ldi','DM9Pza','Dg9tDhi','BhntyM0','AgXTvxa','ndySmJm','AhbzDwO','CeHxu3y','yxv0BW','B3bLBIa','C2nHBge','BK1HBMe','yKn1Dxe','AcbMAwu','BMfNzxi','mwzYksK','zgLMzG','EunpBhe','ChG7CMK','DgvHBq','BM5VDca','zxj7y28','WPtcJCkrWPhcKa','rvrcA04','Cc1JDG','yw4+','zwn0zwq','A2v5vhK','BwvZC2e','DYW2mJa','CxvHDa','AgL0zs0','C2LRDKW','D2HLBIa','vwLICfe','yxmSBw8','Dg9ju08','u3LqCfy','mhb4oW','Dg9gAxG','lL9Nyw0','oJnWEdS','ohWYFda','mxW0','z2LUlwW','CI1YDw4','mhHIna','Ag9VA0y','kdi0lde','BguGkhW','z2v0sw4','zu5iuvm','CYb3zxi','C2zVCM0','y2XLyxi','AxjZDca','zwvMntS','CgXHEwu','ms4WEdW','yM94zxm','yxv0BZS','ldi0mIW','zxzLBNq','qM92zfq','C1Hdwwy','lIbozwu','BNrPBwu','B2X2zwq','WONcISkgWPlcIq','BhzLzcK','Aw5Ly2e','ChG7B3a','CfjywMy','WONcJmknWOVcJW','qxbzrhi','CMvNAxm','CMfUy2u','DgG6mJK','u3rYAw4','DJiTDge','ug9ZAxq','BvvTywm','DvrHwhG','txvTEwu','AwWYq3a','Bwf4','EezNzeq','CMzSB3C','wxrjtgS','otbWEdS','zZOXmxa','mtfWEdS','AwvK','AxvZoJe','CgfUzwW','D3jVBMC','zcWGBM8','v3jHCha','nhb4idK','ihbHBMu','C2v0qG','y29SB3i','nZKSmtq','vLHdyxO','lxrPDgW','jsKGmta','DgnOige','Dc5wywW','i2zMzdq','WOVcJ8kjWPpcLa','uMfUz2u','DM9XwM8','Bfrtvem','ztTWywq','Euv0yMO','rgLMzIa','x2DHBwu','Ds1JC3m','icb3CMK','Cgv0ywW','vfnbAuy','rLPSDKm','rvnqigi','ruzPrgu','AM9PBG','BhPWqxi','qNnMrhu','mtjWEc8','igfNCMu','AguGD3i','EvrHCa','wwXrBvO','z01pu0W','zxHKtNe','BLj1BNq','mIWYosW','zKLXDMu','ys1LC3a','AdOWo30','EwH3uhi','whnnrxu','ywn0','rNjfy3G','v1zXtvy','Fdn8mxW','DwLSzci','DgvYiJ4','WORcJmkvWPpcJq','zxLL','ic0Gy2e','y2GUC3K','tIbIEsa','ndC0odm','ihWG','y09sreK','yMLUzgK','C3CYlwi','BwfSBg8','yxjTAw4','BwuUCMu','CvzkCgO','B250lwy','zxjZyc4','yLLWuLa','iIbZDgu','BMCUcG','C2v0ida','y3H0CvG','A3PMsMq','AxmGD2G','DdO3mda','BwLLCYa','ns00idC','BJOG','D3jHCdS','Acbxzwi','uMPpu0C','nJiWChG','nNb4o2i','yMXLig4','Dw5Kic4','CgfYC2u','ywXSzwq','oYi+tM8','vKuGDG','DgfSE3a','CI5QCYa','s29qu04','CMvKige','qMLIyu0','o2jVEc0','sNHbC0u','r2XOvxC','x19hzw4','cIHJBgu','zxKGAxm','WPlcLmkhWO3cJa','ignOzwm','DLLfrwy','WPlcImklWPxcIq','AxmGBwK','z3Lby1a','zuHLDee','Aw5Uzxi','AgLKpq','rLDQzKm','oInMnMu','igHVB2S','WONcKCkgWPpcJW','yw1L','zxaGDgG','A25ewhC','C2vSzwe','uNHSEMe','y0LUChu','s2LmwM4','ENj2CMm','A3PhuMS','zwfKEsa','lc40nsK','yxjKlxq','ldi5lc4','BMCGzM8','uejLs3i','mIiGC3q','thH4D0q','BMnL','B3CU','kde4ChG','WOJcKCkvWORcHW','yvbfrfi','zcbKAwe','yxjHBMm','BNjSAeO','C3LZDgu','AgvPz2G','owqPida','vu9AEMO','WO/cLCkjWO7cIW','Ec1KAxi','ChqGsvm','zM92u2e','DuLpqvO','AfvrA3y','DgL0Bgu','vwDsq0K','iefdveK','ig5Vigy','EtOUndu','ALPrENa','ywL0Aw4','lNnRlw0','l3nWyw4','Bg93oMG','ig9MzNm','BNrezwy','t1H6D1K','C3mGmhG','zhmGWRCG','ntTWB2K','BNnWyxi','y2uGyM8','yu1fCwm','zgvYoJe','lNnRlxy','igjVDhm','vwnWruy','mYWXnZC','WOZcISkjWPdcJa','cNLHDYa','AguGC2K','Bujts3a','mJGPo30','C3rHCNq','zYbSB28','EfDmwM0','lM1Ulwm','zvn0EwW','kde1mcu','vwHSy1i','tg9VAW','Aw5PDgu','WONcLCksWPdcHG','ALfTt3i','icSG','zNGIihq','oMLUC2u','i3n3mI0','nNWYFdm','zg9JDw0','Dw5PDa','phnTywW','WOJcH8ktWOZcLa','BIG1mNy','Bg9NBY0','yxbZAg8','zLLPz0u','DY4Guhi','tfbsAuO','AwLnDhi','DeHIEKu','uMvNAxm','zwLNAhq','kgD1zxm','lg1VBM8','AMTeuwy','yM90Aca','nxW0','B20GDgG','AvnJCuq','rxHWB3i','Dte2','y3qGzM8','vuHHwNm','C2L6ztO','CMvHzhm','BMC6nNa','WO7cKmkrWPtcJG','DciGC3q','y2fWC3u','zNDK','CMvHy2G','BgqGAxm','AfzbzgW','ihn0EwW','z2XVyMe','WOVcH8khWPlcKa','zMfSC2u','C29SAwq','CxvLCNK','ALr3Aw0','nhWYFdm','BuDfyxm','iJ5dB3a','DMjJAvm','ntuSmJu','B1PLB00','AwrLBNq','v0HHsfu','u2vLBK0','ALjjq2u','DxrVo30','ihbHC3m','zNzyAuu','B25NlG','zhKIihm','BNqXnG','BNrLBNq','DxnzrLa','qu9rDMu','igfUzca','zezUuwy','vxbKyxq','ruHQruK','CZPZDge','ywvLtuy','v3rHvu8','CMvWB3i','C051rw4','A1rNBvG','CM93CW','ignYB3m','zxHPC3q','EgDMthG','oYi+u24','o2zSzxG','r1LXs2q','yxr1CMu','BMqU','Dw1WAw4','mZT9','DcbPBMO','se1rAge','ANzOAwC','Aw5NoJi','yxjLige','ihLLDca','y21K','ys1ZA2K','rw54D24','senpsfa','yLrOCKW','CNL0B08','lcbUBYa','CKHNrfK','u3v2u3m','zsGPlMu','yMX5lMK','y2XHC3m','wvnmzwi','mNb4o3a','B2TZihi','y2X1C3q','AwqGzg8','vw5PDhK','D2fZBu0','t3vlDKG','ig1PBJ0','CgvKigi','A3TOzwK','ieeGAg8','ig9Uihq','C3rHBgu','BhvTBJS','CMvSyxq','WPdcKCkvWOZcJG','DvfZwu0','DMLZDwe','BcWk','zcdcTYa','ys1ZDW','tuDWs3q','A1fAqNu','zMXLEc0','ywnRz3i','BgXLzca','WOVcKCknWOBcKW','zcbYz2i','z2v0q28','AhLSv1y','zNjRvfG','zdTTyxi','tMHPuxm','CMfTzsa','AgLSza','zwXHChm','uvzyyNy','C3zNE3C','mJbWEca','zw50','WOZcImkkWONcKG','vgLXq1a','zMXLEdO','zsGP','rhvzzgK','lJC1ktS','AfnttKi','C3rOsfi','yuzUyxO','B0vZzeC','r0DFr2e','oMnLBNq','zhjVCc0','lJKPo2i','D2fZBvi','BNqTC2K','C2XPzgu','mcuGBM8','zYbMB3i','lxDPzhq','zgf0zsa','wMfZD2S','zcbPCYa','zhvSzq','oMzSzxG','CgTNvNm','yxK6z3i','o2jVCMq','AeH0q0y','mhG1yW','yM90Dg8','y29Z','qMHptvu','DxnLtg8','zwXVywq','Bg9JywW','igzSB28','B1vRBK0','WOJcKmkvWONcJq','uwDfz0O','WPpcKSktWPlcIq','nYWUmZu','Cg9PBNq','CxPyDKC','zciVpG','uNvUDgK','CMvKihK','uKnTCfa','nsiGC3q','sMnHz2m','AhvK','uNjxq0G','zxa9iJa','v2LKDgG','WONcJSkvWPxcHW','Aw5Ozxi','whfbCey','zEkaPJWVCW','u3j4uNi','AxvZoJu','WOJcKCkvWPpcHW','qNvPBgq','Dw1Uo2C','BNnMB3i','DffsvhO','C2zWuuG','WOJcJmkhWO7cHW','v3jRqNi','C3rYB2S','t2zMC2u','zxHLy0m','o2jHy2S','uxvzu04','sML3sfy','vgHPCYa','D2HPDgu','zxi6mxa','DJiTy3m','WOZcI8kmWOBcJW','nxWYFdy','ufzUDwS','BxjzAMi','CujArK4','CxW9','v0DNsva','C3bHy2u','zJzIowq','mcu7','DZiTyM8','yxqG','teDhCLi','WORcKSksWORcKW','wxLxyvG','zsbUB3q','ktTIB3G','vgHLigC','AvvYtK8','B2jMsq','ign5psi','y29SCW','BgvY','tfDlyuK','WONcJCkpWOFcKq','zwHkr2e','tKDTBKO','y2u7','EujuChG','DgnOzxm','B3nL','i2zMyJm','oYi+','CMf3qG','DYbNBg8','q2XPCgi','CMvHzca','DhrLCG','nduPoW','ihnVigu','sxbXtfy','zgf0ys0','yMfS','ignVBNm','zdTWBge','CLfHCLm','runcBNy','C2STBwi','CMLNAhq','WO/cKCksWPtcIG','yxrPB24','v29YBgq','thDIqKm','DeLkwwW','B3b7zgK','WOVcJmkhWO3cLq','vvjwze8','AM1AqMS','psiXiIa','vMrAzw4','ig1VDMu','WO7cKSkqWOJcKq','lc40ktS','Aejysgy','zxi6mdS','lwLUzgu','zgf0yxm','qKnuzhO','wgLfEKC','Dcb0Agu','WOFcJCkkWORcIq','lJa0ktS','DgfSBgK','yZKIpNC','ELvgww4','WOZcKSksWPpcIG','rMPPufu','C2HHzg8','yw5NBgu','C3bmD20','WO7cJSkuWO/cLq','ihnRAxa','zxqSig8','rviGD2K','CMuGAwC','zYdcTYa','Ew1uweW','rgPnsw8','ztPUB24','sLnptIa','BMDL','BJPJB2W','shnMvMu','AxvUwgm','v1fUveu','oM5VBMu','C3CYlwG','Aw50BYa','CxDZr2y','D2H5','CLDOy0e','C25HCa','y2fSBa','v19F','WPtcICktWOJcKW','yKTnzhq','vgHLiha','BM9Uzq','iJ5VCgu','ChrLza','idyWCYa','igvYCM8','vMHeseO','yxbWBgK','z2v0x2y','AgLSzsa','qLzYseO','q01xyKy','CenVBNq','icaGy28','u3LPq1u','y1vRCMG','zMykrJG','Bez1BMm','Bxm6y2u','qMvHCMK','EgnzyNe','sLHsqNC','pgrPDIa','ChngCwu','WOBcJ8kvWPlcKG','BgLKzxi','Aw1Lsxm','D1DmEgO','q29UC28','DuTIAe4','WOBcISkpWO/cIq','uLmG','CMvH','DgfU','uMvMDxm','zwqGysa','zgvhwwG','Cg9YDca','CM91BMq','ztTZDhi','BMvUDa','AxjLuhi','B3zLCMy','A0TxyLy','Ewnjsxi','BIbjtLm','yNvMzMu','z2H3wgK','surHBKO','mhGYoca','zxnLihq','ueLds1a','Ad0ImIi','DgvTCZO','zxv6z2K','nxWYFdG','B3vUzdO','yuzYB20','thLvsw8','BM8GCMu','y3fxBMS','u21VANm','D3jHCdO','BwfW','wuLZr2y','EM1wCMq','vM9IuMe','zwfKE2q','zxr3B3i','i2zMogy','BgLUzvq','zxjHDgu','A2vLCa','B3vWig8','CKnVBg8','ywnPDhK','D2fZBva','AwDPBMe','zsbLDMu','odbWEdS','wxnLr0K','CI1Yywq','AKrhsgG','CMfUC2y','EvjxCwu','z0PcDgu','DMLLD0G','BNrLCJS','CdO2ChG','WO7cLmklWPdcJG','CNjLDNG','DcbUB24','z2TnreO','nIWYmZG','vNborg0','BwfUywC','vKvsu0K','DxjHvge','yM9KEq','A2L0lwe','AguGCMe','z2vYlIa','tKrIvuS','zM8Qksa','swT0ENy','Dg9W','z2H0oJC','lM1UlwW','idzWEca','zw50tgK','mNm7Fq','teDbD0S','yunKCKi','txrgC1C','oJeYChG','mxb4ihm','ohb4ide','z24TAxq','Ewf3','Ag90CYa','mduPlda','CI1LDMu','rfDXsNu','icaGia','oInMn2u','zgL6Avu','yNbpEgC','rgX4Cw4','tw9KDwW','y3vYC28','Awr0AcK','zgvZy3S','CM9VDa','zLrov2e','Ewv0lG','vhbcAvq','lxaSnta','mNz3ldy','DhjPyNu','WPxcJSkpWOVcJq','zxCGy2e','sxDJque','Cw92D3m','BMu7Cg8','qxv5rMO','C2fUzsa','n3jSzwLPAG','z3jHyG','zxbSywm','BMvQB2K','BM90zq','WOFcJCkiWOBcIG','lNnRlxa','zw50rwW','lwvZCc0','r2fTzq','v25czuq','twrUB1q','zxrVBG','sLPTwvu','C2fRDxi','zgf0zxm','BMq7Fq','4Ocuihr3BW','C3LTtha','DgLHDgu','Bg9Hzhm','yxiTDgG','B2fYza','mJjusujxuvu','rMXHzW','CKnVDw4','pc9WCMu','D0LVEuS','WONcJSkgWPxcJa','AxHLzdS','igfWCgW','o21PBI0','CePoAgO','DgGY','ufnuA3y','yuDiA3i','B3rLE2y','idfWEca','AhjLzG','AtmY','psjZywS','ihbHC3q','qwLvswO','DxDTAW','wvDHA20','BxbSyxq','ELHbDwS','vfzUq1G','CfHlCMy','vKnsqwq','z2Dduhe','uK5nCMi','y2XPzw4','EKz0t24','D21Wy0u','uhP6zuu','DxnLCI0','WOJcLmkoWOBcKa','EuDHsvy','DgG6mZq','AfzrCK8','tMnXCfu','uLfWBKu','se5prfi','yM90q28','vhzVshO','iIbZDhK','oJe7BwK','rw5LBwK','Dw50','CNjVCG','ihrOzsa','uefTvvq','we5xD0K','yY0XlJu','BMqGEwe','rJKU','wgjyuKy','rKfWAu4','igLUlwy','DhLWzu4','u2vSzwm','zMLkDgu','ys1Hpsi','rNfwuvC','A2v5q28','AgvHza','uLPcz3G','B3DUkq','BgCIihm','igvUzca','EdOYmtq','wNrVAwK','rw5KDuW','y1rqBu4','y29TBwu','u0TjteW','DcbTyxq','ysGYndy','icaGica','ywXSvMu','tK9WyMe','vKvyqxa','BNzcs0C','qNngyMq','mNmSyMe','CJOXChG','zhrOoJu','zxnJ','zKfTCNi','DgeTyt0','AxzLo3C','vgDqqNa','qunUrhC','Cg9Z','CYbLBMu','zLf6sKW','DNjdte0','Cw1hEvq','Dxm6nNa','yxLZrg4','EuLLvNK','AeHjA3K','uxHov0i','zxH0lwe','qKvhsu4','WPhcImkvWOJcIa','ig91Dca','uwf5CM4','BNvsBKu','Dhj1zsi','Fdf8mNW','icaGDhK','B2jQzwm','u09JC0W','C2v0sxq','B3j0lGO','DwXrwva','WPxcJ8kgWOJcKq','mda7y28','ExrLCW','BMH3ruC','uwjXAMq','BcbHz2e','AgfKB3C','if0GywW','zsbYzxa','D2LKDgG','vhfNwMu','y2XPCgi','BxjnCMm','C2vYDcK','u2H4ANi','qwPVshC','zdTYAwC','A2jfvwG','Aw5N','ywnLlwK','lJq1ktS','qwDVu2y','yvP6Deq','BMvS','C3r5Bgu','D3foBKK','rfHWBxy','zYb3Agu','sgvHCa','BerxwLi','C3LUy3m','zYbZy3i','C1furLq','y2HLy2S','jwnBC2e','yMHRufy','zNKTy28','WO/cKSknWO3cIq','B25Z','DKLkwNG','Aw9UoMW','ChLgy3K','ywzpwee','mtaSmte','uuXiDxa','vMfSDwu','CMTqBge','B3rYB2W','shLzB2C','qu1Mrxu','B3jRu3K','WPtcI8kgWORcJG','A0f4txq','z0LstMu','yM1UuwK','mNb4o3O','A2fWt20','ExLvEvm','C3rYB24','ndHWEcK','oJrWEca','yMfUzc4','qM90','ANvZDgK','zw50o2i','mJeSmti','DdOXnha','AwzYyw0','A2vKihu','CMf3ugK','yMnMy2u','y2L5Dge','vxHuseK','CMvUDdS','WONcJCkkWORcKa','BfjHDgK','mJqWmZyXtKzRr01m','BhK6Aw4','vfLVzNK','rgjdwwi','WO/cImkpWONcIq','ndy7y3u','iZjHmgy','y3DUuNC','C3vIww8','v0fwzei','BM8GCgW','s3njAu8','whDpy2W','nNWWFdm','DNrUywi','BvfODuu','ysGYntu','BwLUkdu','WPlcKCkoWPxcKG','Bd0Ii2y','WOZcJCkvWONcIG','uNj4AxK','zsb1C2u','BwuGD2u','mca0ChG','uMXvDeG','wgnsqum','AgL0CW','Ewf3qxq','mxb4idy','WO/cJmkgWO7cJW','D3PrAMS','B2TLlxC','sYbZy3i','Dxm6mti','DxjH','D2fSA2K','psiXlJu','icbOB28','y3qOCYK','WOBcHSkmWPtcIW','phnWyw4','v1v6vvu','DdPZDge','zenOAwW','ywnLlem','sM93vMS','CZOXmha','yMTPDc0','zwyYo2y','q2HPBgq','B2yGDMK','ywDLCG','Awv3igK','WORcISkqWOJcJa','DMuGBwe','BI5OB28','sK5Uzhq','rJKPpc8','swX0yuS','zM9Sza','ig9MzG','mhG1oa','C3bSyxK','t3DPzfC','mtiGmJe','zgLlqNa','Bg9YoIm','zMLSBfm','C2v0vwK','rfzotui','rhzyu3O','C3mP','WOJcLmkoWO3cKW','BdPPBMK','Bff4AM8','s2vPDxK','WOZcISkgWPdcHW','tKvptui','CMvWzwe','DhKGAw4','psiXmIi','BLb2wKK','txfpq20','pgLUChu','qNPwrhq','u2LnC1G','zgzbrNG','Bg9N','AgfIBgu','zhvcrKm','ChrY','lZ48l3m','ywrPzw4','Ee9uuwi','C2nYyxq','tMfTzq','D2rTD2i','qxnZzw0','sw5Zzxi','C2STC3C','D3D3Dfi','ywLUAw4','vhPtDwK','ueXbwuu','DvflqKK','vxL3DwW','zMDsAxu','yxjN','ifnxlvC','A2uTBgK','WPtcK8kiWOJcKW','B2TbBMC','AxmGyNu','B3qGD2K','yMnxsMO','vujpzKi','yMfZAxm','BKXyAM8','BgvZ','z2fTzsa','uuDruey','u2HHCNa','B2DNzwq','mdTMB24','B2SGAw4','z2fTzq','zwqU','BgvMDa','quDeAwO','ig1LBNu','D1HuD3C','EKLotuW','B3nZihq','zKXgAgu','mtqZlde','B3CGkey','mtTJB2W','Bw92zvq','Awq9iNm','AxvZoJK','Aw1vrKC','Dxm6oha','WPxcISkmWO/cLa','uuvZwNm','ihjNyMe','DhjVA2u','BgLLzca','EdSIpNy','AdOZmNa','y2jxwfG','cMHVB2S','u2vLBG','yxnZtMe','rhr6zLq','rxbLAxq','yvrjyKK','sfrnta','4OcuigzYyq','yxa6nha','wMfUv0y','te9h','C3zNiIa','BwLU','ChGGC28','DwvxCMe','Bwf4kdi','zvrTBwO','yNL0zuW','B3yGB24','DxrVo2y','WPtcKmkuWOZcLa','B1LhCMi','AhvKlwm','u1nwExi','idaGlYa','mtbWEdS','pc9ZCge','y2fUzgK','Dc1ZAxO','y29UDgu','zYbxzwi','DgfN','u3nrsve','uKX2t2C','yvv2ywO','DK5VsM4','yxDivhe','B3jT','rgrLqNe','CY5Tzw0','WPlcJmkjWORcKW','oxW4Fdm','uLjdBwm','ug5sDMi','y29UDhi','CMfUzg8','C3nPBMC','x3j1BNq','Dxr0B24','CM4Gywi','D2fYBMK','mJTZDhi','yw5ZAxq','yMjvC2y','WPpcI8kmWPtcLq','uxLAzg4','lxjLCgu','BI1ZCge','Aw50iIa','zsbPBNm','zJmY','WONcLmkrWOFcHW','zMfPBgu','Bg9PwK8','ndC7','ywn0Axy','CMfUC3a','DhjHBNm','WOFcJ8knWOVcKG','zw5LBxK','Awr0AdO','C01sBLa','r3v4DNm','zLf5sfC','BMq6i2y','WO3cK8kvWORcIa','WPtcLmkoWPhcKa','yMeOmJq','AMH3reC','zgDqrNK','icbTzw0','tMv0D28','zYbPBNq','vgfTCgu','igDHBwu','qvvJu3K','igjSB2m','phn2zYa','uwrmCLC','zhPtv2i','zwy1o2i','igjVDgG','BMfsrfG','B2f0nJq','lwjVDhq','Dgv4Dem','ChjrtNm','y29TyMe','mhb4oYi','vhvywM0','WOBcJ8kjWPxcKa','rezuqKq','yw1Ltwe','DxjHtwu','CMvWBge','y29Uy2e','tg16vKm','rKnhBvO','CKfQqxq','B24GAwq','ktTIB3i','z2H0oJy','lM1Ulxm','BgvKoIa','nsWXmdC','zgvUDgK','D25pqMS','CY1VCMK','ihrOAw4','Fdj8na','vKnNsLe','wu5Ny2y','B3C6Aw4','zw1ZoMm','EgDuEe8','Aw5KzxG','tg9Hzgu','iJ5tCgu','Ec8XlJm','BgfZDa','ve1jze8','CgPwsfy','nYWUnsK','DxjHimk3','lxbHBMu','WRaSig91','zgvIDwC','AxnWBge','wfHnv00','CLLsBhe','Agv4','mhGXna','zvbSDwC','AxbIB2e','CgfKrw4','4Psa4Psaia','CgfYzw4','CMrLCJO','mtiYnty2mtz2De9QBwC','mhWXFdi','oJaGmca','ic8G','kdi1nsW','Bwf4lxC','zw1Pzxm','igLZig4','sw5KzxG','nxm0idi','WO7cK8kpWO3cIa','wKr3t3y','yw1Ligy','wKXUEMO','rw5HyMW','nsK7','CMvKDwm','CMuG','uMvZzxq','C2STBwq','mIWUnsK','uenQDum','BNqZmG','y2GGDgG','Awr0Aa','CMuk','EdTMB24','CgL0y2G','oYi+u3a','zgLUzZO','iJeIig0','WPxcJSkmWOZcKG','WORcJmkgWPxcHW','zgv2Awm','vg5dEe0','CM9Wlwy','mtC3lc4','C2v0sw4','t3jIEvy','C2fUzq','BwvUDc0','DhLWzq','EK1kshu','o292zxi','r3nzseS','zK1UB2K','zwn0ihC','Axr5oJe','vvDnsY4','zJDLzwy','zciGC3q','iZHKn2e','nNb4o2G','C28GDgG','igrVy3u','BLzHBxC','r1HQrfm','igrHDge','BgfZDfC','uMXOqLC','CMf3qq','CgfKzgK','svztD0G','CM9SBgi','B2f0CYa','BMq6Dhi','zMvLDa','Axr5','Aw4TyM8','B25JBgK','CefMzxy','AxrSzxS','AguGBgK','Aw1L','y3rPB24','z2vY','khmPihq','seXWDem','yMfY','yxjKlwG','ALjPCxq','z2fWoJe','B3v0','DwPLCe8','y2fWDhu','DMuGB2i','wKHdEKm','q1LRyuy','zxbruM0','zwqGlYa','DcaWicG','r0zOCeK','tLHTy1q','wxfyuvq','rJGGlYa','ohb4o3a','BMqIihm','vfv1AxK','ru1it2q','ywXPz24','uMrnsgG','Dg46Ag8','zKz6ugu','r2fTzsG','yMXVy2S','DcGJzMy','zZOXmha','nsWUmdG','qxrgAxi','zxrL','EtPNCMK','ChbHzMu','u1fStKO','uMvJDa','nNW1FdC','ue9PChm','qKTtve8','DhLWzum','Ew5twgW','BIaUC2S','B2SGEwu','A2Dfww8','o2nVBg8','B3nLCY4','uezKDhG','CMqTAgu','ugfYrLy','DhjPzwq','ChGVms4','Cu10twO','B25PBNa','Dg87iJ4','uLDqrxK','cKLUC2u','ignHChq','ENHMzhO','CNnMDeK','igDSB2i','lZeUndu','BNqTzMe','CgX1z2K','qunty00','BMqGBM8','q3nTz3y','oJPHzNq','EhbVCNq','mI4Xmc4','nJG1ogfjueDttG','ig90Agu','B2jMrG','WO/cI8koWO3cJW','mcaWida','CMfKAxu','y2zPs1y','DgfYz2u','rNzjuxm','BIbPzNi','CKnODLq','zsbTAw4','B2jMqG','Dw1IE2i','nYK7y3u','Ag9Nt3u','D257B3a','zxnWia','WONcHSkuWPlcKG','AwXLzcW','EvjVD3m','WPhcImksWO3cHW','CMvUDca','CgvYBw8','mtjWEdS','yZK7BwK','sKHkDKC','Bgu9iMq','WPlcKCkiWOZcKa','igzPzwW','yxDst0W','AeDgsfe','BhDgrMm','ztSTD2u','DgvZDa','yM94lxm','EK5JD2u','zw1VCNK','oJCWmdS','Ec13Awq','A2v5','icbMAwu','WORcH8ksWPxcHG','A2L0lxu','zdPYz2i','yMvSB3C','BIbYzwW','CgvZia','ywqGzNi','WO3cLCktWPtcIW','o2zVBNq','EcbYz2i','uwHruLC','Ad0Ims4','tg9zy3G','ig9IAMu','WPtcISksWOFcKG','B3qUBw4','DMvYBg8','uvLSt3O','BK5LDhC','ig9Mia','terjCvG','zvD3ELu','B3qGica','whrnDKe','lM1Ulxq','ChG7Agu','lxnWywm','tg9VA0a','DMrytwe','zM92','AwPwtKW','ChG7yMe','Aw1HCcW','WOBcISkvWPtcJG','WO/cK8kgWOVcJG','vvP4wvG','mJiSmsW','mJy0mdLfvfHeuNu','ignVCgK','EcXJywW','kdiXlde','CMvJDgK','pc9ZDhi','oJOTD2u','WPtcKSkgWPlcKG','zwz0oMe','zxneueC','WOZcJ8kmWORcKq','wLPcDMC','ywnRihq','rMHIs2e','BJ0ICM8','zxi7Dxm','CIb0Agu','EIaOsw4','DhLSzq','t1m+pG','zwvKig8','zhrOoJm','WO7cLmktWPpcJq','DMfS','zMLYzsa','z2v0rwW','C3rHy2S','B0n4y2W','DcHHDxq','iIb3Awq','ieaG','DMLZAwi','mJqYlc4','nZq4mJK','tePWzgy','WOFcICkjWPdcHW','EdTMBgu','igzVCIa','DZOWidi','tMDptuy','EeHyyuO','WPpcKCkjWOJcJq','BxmGD2K','mhHLoa','z2LZDgu','z2fTzvm','whHItgK','AxrLBxm','BIbtruu','n2vLzJu','zxjHia','y0vMtva','WORcISklWO/cKG','Fde0Fde','yxK6zMW','rNrxExi','yxvSDa','mZGSmJq','zdP0CMe','iNn3mI0','lc4WmJu','AfHlzwG','DMvK','B21Tyw4','zM9UDa','v3nWA00','ig9Mihy','C29SDMu','u1z1ELa','mhGXoa','C3rYAw4','WPxcKSkgWORcJG','tgLbrvy','tfrczhC','B2DVlxm','AwvSzca','CgXtvu8','sfvKrKG','BeLXC3u','BMu7Fq','DhLxzwi','q2fTzxi','zw5NDgG','sxbAtM0','vgrwAgK','Bg5Trvm','qu1wBMe','DgnO','yYGXmda','EMu6mte','CM5RvwO','B2XLig4','WOBcKSksWORcJG','uLLbwgu','C3bHBG','C2LUz2W','u3zjt2G','refZtwW','AgvYAxq','mda7y3u','DMvYE2m','ru1nALq','tvnst20','EKjPDeK','wfrKq1i','WO7cI8kvWPlcJG','yLLZBNO','DNDRq1m','B3LMD2C','t1nbuLq','zxmGB2y','ExfKD0q','wLDxqxO','vhLsvve','CKrUtxe','z2LMEq','B2TLlwW','rw5LBxK','iMzVBgq','zxnW','Dc5KBgW','ChvZAa','AgvSBg8','tK9XC0C','EY13zwi','CMfTzs4','WPlcJmkiWOFcIa','nIKSAw4','DMvKigm','ChjLDMu','zxi7iJ4','zxjLzca','DM5qz3K','ysbNyw0','r0PSy0u','mZiXnta5mtfJDeLHA3a','lY0WlJu','CM90yxq','WPpcKmkiWPlcKa','WOBcH8ktWOJcJW','CI10Ahu','vLfsv2e','DdPUB24','BNrYB2W','zwfprNa','ncK7yM8','Ahb5ELe','rgvSDge','Bw4TCge','yxjPys0','nwmWidm','lxjHzgK','q055yMe','EdTNyxa','yxjKlM8','v0DNtuW','WONcImkrWPdcIG','kduWmha','surfige','C28GAxq','C3zXAei','zMLLza','idaGyxu','zNjVBsa','Dhm6yxu','sgPPANa','DMvYEsa','CMv0','uhrSr3K','CMDIysG','zxG7zMW','BLr5Cgu','Ag90','v0Ljrfu','lwnHCMq','z1j5tK0','t0TbuKm','ALnHCve','DuPRsNC','C2L6zq','ChGPo20','t1fICfO','ytK5o20','vgv4Da','EwuU','z0zJD2S','AdO5nNa','zwfKywi','EI1PBMq','yuvfAui','zwqGBM8','Dw5KoNi','WPxcKSkjWPlcHW','igj1Dca','igTUB3C','BMC6nha','yM9Yzgu','lNnRlwi','CMqTDgK','ktTWB2K','nsWXndm','ihnHBxa','C3rHDhu','BMnLC1i','lxDLAwC','CNnVCJO','Bg93oMe','BvrKBwq','oI40o30','wfzky1e','B2r5','txnwuw4','BfDHCNO','s1n1sxG','v1Lhq0S','i2zMnMi','zxr1CM4','A3mG','yufHu3y','msiGC3q','zMzZzxq','rgf6qKm','ohb4o2i','igHLyxa','yMfJA2C','t3PAAMW','ztTTyxi','CMfUz2u','suvRANC','C291CMm','Fdj8nxW','Ee5myuq','oNbYzs0','ueLUuw0','ufrrt2m','DcbYzxa','uvfcC0y','nsK7yM8','qu5pveG','zejUu1O','z2v0vwK','lxDYyxa','zeXjBe4','oIjjBNq','oJi1ChG','igTPBMq','B3nPDgK','ufKGve8','ExLiDe0','CNvUBMK','B2jM','uIbbq1q','WORcHSkkWOVcHG','mdT9','icaZlIa','BgW+','khrOAxm','AgLKzgu','vfzJteS','yYbYzxq','vKLt','EhL6','lNnRlwW','svLWsvu','ndmSmtC','BwuGlsa','ihrOAxm','ywi6Ag8','tLLAu0m','Dw1TBhy','B3i6CMC','BM16vha','BwvTB3i','Ag9VA1a','BMv2zxi','sgjwtgy','D3bmyNq','yLblv0G','WOJcKCklWOFcHW','DdOXmxa','wKL6AhK','Bw4TBwe','EKHJD0u','yMXAwfq','oJe3ChG','vg90ywW','D192mG','WPdcI8knWO3cKW','Cwffsge','lJKYktS','r3j6DM8','C2vUDca','ywz0zxi','zxrZicS','BNrZoM4','zxnWyxC','BhzLr2e','igq9iK0','i2jKytK','owq7Fq','DMvKpq','BM90ihi','mJu1lde','B206mxa','BI5FCNu','zsbHCha','sK9zqLe','B25LoYi','wMvVAeC','lGOk','BIb0Agu','C28GC3q','WO3cLCkpWONcKq','BMuGAg8','DxjPBMC','t3H6DKW','EfH0ANa','AxvZoJC','Dg9WoJe','tg9VAYa','BNn0yw4','igLZihi','yKL6t2W','BKPpwxu','BhvNAw4','BY1MAwW','tvrfDhm','AgXHreu','sMLVvMK','zwjRAxq','BguIihm','reLlvM4','oJeXChG','C3PkAeK','igfJDgK','BdPUB24','Ahq6nJu','ys1ZDY0','icaHia','uKnjveG','zM9ot3G','ywrKAw4','CMuGkhi','B2LUDgu','Dg87Fq','Bcb1Cgq','CMfWoNC','ufa+pIa','AvbAueO','DhLSzt0','zuL0zw0','v3v4y28','AgHuCMG','uwH2zxa','zxiIlci','CZOYChG','D1PHChC','B2XPzca','B1nND0W','t01ZCK0','zt0IyMe','ru9HD1y','zxnjA2O','pgnHBNy','ru5isLG','y2vKigi','nxb4o30','CwPYBvm','C3bSAxq','tKrrvgm','yxjTzwq','Bg5xvKq','nNWY','zgrxBhu','lwv2zw4','ihnPz24','DeHLywW','EdTOzwK','tw91C2u','B2zMihq','u2TiAhi','uKTNBLa','DhrVBJ4','CMfUihK','zwn0Aw8','DKrXvvu','Dhnbvwu','ihnOB3C','WOJcISkiWPdcLa','lwL0zw0','mJu1ldi','Be52z0W','lwjYzwe','CMvMAxG','BMrVDY4','oJK5oxa','sgvPz2G','q29TCg8','BgvMDdO','qNjHy2S','WPpcLmkhWOVcHG','zuHnCfq','whLUs2e','DxjJztO','nZCSlJu','z2rJtwG','lJuGms4','yxqSCMC','igL0ige','BgLNBI0','A0T3EeO','FdL8mW','v01ezfy','CMvZCYa','DgrdDNO','BJPJzw4','CxnbCw8','tvvizw8','ChbLyxi','B2XZoJO','qxvWuxC','sK9srNe','Eg9uBMm','lwXPBMu','lde1nYW','zZO2ChG','uxD4Eeu','Eg9uvMm','oIm4zdC','CgHVDg8','CNvUCYa','Bhv4rKC','iZDLzta','uwr2tLa','CgvJDhm','CKTgC1q','pc9IpG','BNrLEhq','WOBcI8koWO/cHG','Cg9ZDe0','AxnHyMW','wezmy3a','BfDZy0C','Bw4TDgK','mtrWEdS','oMnVBhu','CdO4ChG','z3jVDw4','ig1HBMe','vKTAq1q','s0TyC1i','otLWEdS','ywrPDxm','CgfPCKG','C29Syxm','Fdr8mW','WPdcICkpWO7cKW','A2v5vxm','AM1PB1a','C3bYAw4','icHZB3u','ysbtA2K','yMfZzq','ihzPzxC','zw5LBwK','otK7Bwe','Cw9pzhK','z2fWoJG','Aw4TD2K','EM9lreu','BLHKC3i','igvHC2u','C0DlEMG','WOJcLmkuWO7cJG','DYGWida','weXMtLK','ELLXs0q','zMfJDg8','Cu9nEMy','oJeGmsa','AgLUDa','WO3cLCkhWPpcKG','yxjKlxi','ugf0Aa','rwn1C24','B2TLpsi','DhnPzgu','qxrbCM0','C2STy3q','DevzBgy','q1vwq1a','ksWGC28','C3qGysa','xtO6ywy','qNLjza','C2vYlxm','nsWYntu','B246ywi','WPtcH8klWO3cIq','Ec1ZAge','CM1VBMS','WO/cI8kiWOFcHG','C2vYAwy','tM8GCMu','BYbHihq','lsbvBMK','AKrQAhi','Dw5KoNq','idqTnc4','yM9KExS','o2fSAwC','DgvZia','BgLZDa','CMvTB3y','BNnPC3q','owq7y28','BgvYige','A1PXru8','o29Wywm','ihjLy28','yxmGBM8','CMfWoYi','uvbRyK0','rwDVBei','yw5JztO','BgLKihi','Dgv1qxm','CMeTC3C','igLUC3q','yxGTD2K','idaGmxa','Dcb3yxm','ywDLigG','A01yvhm','nxb4o2i','AfnJCMK','zxi7z2e','zgTPDc4','mtu3lc4','yNv0Dg8','WONcICkoWPlcIq','Fdj8mxW','u3fdC1q','yNL0zu8','vNrnuvG','mdaWo3u','pgiGC3q','swzYtMC','EsbHigq','BNrPBca','zZO0ChG','ig5VDca','DM1hvMC','zwq6ia','B3rLlMu','rMX1y3a','B2SGzMK','BuH6ruu','whLZu2S','lMrSBa','Bgu9iMm','weTPzKy','icdcTYaG','BNvTyMu','uNbJDgy','B2zMC2u','yMeOmJu','BwLUv2K','DMvYC2K','wMPsD2G','mxb4o2m','BJOWo3a','ChfZuLG','t0vKy2i','wuXKr0O','psiXlJi','Cg9iuxe','BM93','uMH0vhy','zw5Jzsa','DhDPy2u','ywjSzwq','AxrPywW','CgLUzYa','CMvIDwK','msiGDMe','A3mGD2G','s2XZBxC','zxmGAxq','pt09u0e','C0znvwO','nIiGC3q','r21ctNC','zcb3yxm','C3bHCMu','v0fswI0','oc00lJu','sMXOrw8','A3POqLK','r25YC2q','CMeTBwu','q29WEsa','ig9Yihq','ruPvCLK','lxyYE2e','ihzPysa','B2fwB2W','zvbYB3a','iMjHy2S','AwnOlJW','zxjLBMm','BNrPyxq','A3jQywm','lcbnzxq','DgvYzwq','C3rHBMm','AhrUzxm','zeniB1G','Ae5pAKe','vKLNy3K','yxrHihi','BwvTyMu','v2vItw8','B2jIEsa','C1LZtuG','ExbLpsi','yxa8l2i','AwX0zxi','C2TsuhO','y2fS','t3jWt0e','ywDHAw4','Aw1Lr2e','rNzYtLq','CMeTzxm','BNq4','AuXzueW','lJuIihy','s3L3ywi','B3bLBG','DgGGB3i','DMvhyw0','ifrOzsa','y2TNCM8','mhHKna','WPpcHSkiWO7cKa','v3jXDfG','Aw9Uihu','C3vYDMu','BhKGCg8','yt0IC3q','y2fTzxi','reTmsLu','ugXHEwu','yu1oD3C','lcbuyw0','Fdf8nhW','Dwj7zM8','sgPJBLK','Dg9Nz2W','C2STCMe','zunOAwW','imk3ia','CMvMCW','zxnZiey','kgXVyMi','v2ndq0O','lt4GDM8','BNuTCM8','WOFcI8kiWPdcJG','WO/cKCkoWO3cHG','WO/cJmkgWOFcJG','B3bHy2K','Aw9U','y2r2q0K','s0zMsgy','tuvnBuW','DwLMA3O','u3bLzwq','rhbsBe0','nZH2AdS','WPlcI8kkWOFcJG','Dg57ywW','ysb0CMe','Ag90icG','CMrtsMS','zLbStM0','AKLcs3u','BxjZvKW','ktTJB2W','WOFcKCkrWPdcKq','B24GDgG','yxbWzxi','zJy0','Bw4TC3u','s09gAMG','Axr5oI4','z2v0x3i','shD2rMC','zxiTC2u','BefbBKC','zMLSBa','v2j3uKm','z2v0sxq','ENjNBgW','qML6Du8','yvLeDLC','oJfWEca','mhb4idu','CgHwseW','B3i6i2y','ueDtwuu','ugHVDg8','wLDjvKq','CKXPC3q','tLbdx0m','nc00lJu','WO/cJSkpWOBcKW','y0nptvi','lxnWzwu','CLv6Bhy','WPdcKCkrWOBcIW','Bwvhyw0','C3bLzwq','ldi1nsW','zhrOoJi','WPhcLCkhWOJcKq','WPxcImkiWONcLa','Edjfna','tMvjuee','CIb5B3u','s1vsqs0','CNqP','Cg9YDge','mhWZFde','ztOXmxa','A2v5qxq','BKDivxi','WORcKSklWO3cKq','vhzWsuq','AgHJree','BujNyuK','B2r1Bgu','zM9UDdO','vg5SC2e','yZfKo2m','ihbHz2u','EcbZB2W','AwzPzwq','u2v0tg8','BNrxAw4','we5cvgu','re1yzhG','rJKGihm','EwXLpsi','mhGYma','o3bHzgq','Dg87zMK','se9uyxO','wNrpDuq','CMq7zM8','AwzLig8','whbjDMu','WOFcJCkvWO3cHW','BIbuyw0','r0nWCha','qKrHEg0','BwvUDs0','pgnPCMm','E2zSzxG','WOBcH8khWO7cLa','mhGXma','DgHLigW','BMfIBgu','Bwf4psi','sfbqAee','yxjLBNq','zw1LBNq','B3vYy2u','suT0rM8','zwqGB2y','zMXVDZO','uMvszhK','Ce9Mtge','CJOWo2i','v3jxAhq','o21HCMC','CNvUDgK','yxbWzw4','EdTHy2m','tM1Pu2q','AvDVv28','WPlcLCkqWONcIa','ueTLrhG','Bgf5oM4','B3jPz2K','ANvTCa','BKrqzw0','CYXTB24','A2vKpsi','yw5Jzsa','ChqRmhG','D2f0y2G','WOBcI8krWOFcIG','ExP1CKK','zgrPBMC','WO3cLCkiWPlcJa','C2v0tge','mNb4o2i','ChG7yM8','C3rLBMu','ksbHBMq','x19tquS','ChGGmdS','ANrdzNa','mtjWEca','r0X3B1u','zKr4rLm','mYWXmdy','yxbP','Dgz5A0m','zvbPEgu','C2DMufe','zYbIBgK','mJu1lc4','CZ0NC2S','Bg9VA3m','BguGy3G','WPtcH8kmWPhcIG','BM8Gzw4','ysXI','zNvUy3q','l2j1Dhq','q3DlCKS','iIbMAwW','ktT9','zgLMzMu','otqYnJGXmgnerMXkEq','rJyGywW','txn1DwS','Cuz2vfC','D29YC3q','lM1Ulw0','DgHLigm','lNnRlwm','DMD7D2K','DcbZCgu','rLzfr24','zxG6mJe','BgvUz3q','WONcLmkmWOVcIq','idb4mJG','C2STC2W','D212CeC','y2fTia','ywWGBM8','yxjJ','y2fUDMe','BfL4vg0','EtPMBgu','AxrOie0','A3mUBgu','tefzrvi','CM9ZCY0','DYbLEha','C3aTy3y','Aw50lxC','EtPIBg8','WPpcJ8kvWOFcJG','Ce9ct3e','mJbWEcK','B3rVBK4','C2LU','zgnZyxm','vKDprxa','AerSC3O','zMH3sw0','lwnVChK','A2DYB3u','BNnLDca','DhK6lJq','zgTPDa','Aw9UoMy','v3vMzKW','tKHcv0e','nJq3o2q','kdiYChG','mNW0Fdm','B246zMK','B3qGCgK','mJK3meT3tg1JAW','yw1PBMC','C2v0uhi','lwH1zhS','idHWEdS','ztT9','BwvHBG','ig9Ul28','Bg9YoNi','AKDls0i','zsbWCMu','DgHLBG','oImYyta','tgLZDa','t3nVwu8','Aw5ZDgu','BwuGAw4','C2v0sgK','AxjtA3i','teXTELC','lJm2lde','yt0IyMe','ExbLCW','Dw5KiI8','Bw4TDge','zxHWB3i','CNmkEwe','rg9xr2m','yxm+','wfv4sK8','z25HDhu','z2v0rMW','ywjZ','DMjdv2m','zNbZ','mtjbBwnuzu0','z2v0','vxvLtgK','CMXHyMu','Cd0Imc4','zMXVyxq','z2jHkdi','wvHlre0','CJPWB2K','Dg8Gy2W','rNHxExa','yKrgugu','igzYyw0','D1nkANa','ChG7zM8','B25Ligi','nIWUotu','rxfOtwK','rvnqig8','igfYztO','y21fsuK','DLretKK','rgr2Be8','igvUDhi','B2fKzwq','C2v0Dgu','WOFcICkpWORcLq','ywjSzsa','CM06BM8','yNvMsLy','s2PhChe','wuXAzha','qLzxteS','Ag9Srfy','zunhuwi','ChG7Cge','nsK7Dhi','mhGYyYa','v0PsveO','C3zNpG','D2L0y2G','Ag90ig4','ExDeA1q','mtaIihi','DcbHBIa','BuXwsNu','oYi+rvm','lde0mYW','B24Gzge','zwfUqwi','yM9sBxG','Bgu9','Bgu9iM0','ywXSoMK','tuPdqwG','ugjly3u','ywrKCMu','icbMywm','zwfJAge','BM8GBgK','vgHLigy','CvLls0u','DxjUzwq','iJiIihm','vwDAyvm','DdPTAw4','v2zZsNC','EgvZlIa','EwvZ','DgfNtwe','igfYBwu','B2LXzhe','CMnPywW','owqIihm','yxbWBhK','De5bEuu','C2TPBMC','DMLLDW','uKfWuMm','C2LPzuO','q1bpCuK','AxrPB24','s3n6t2e','mtiZmta1mtvqvuP5zvO','Ahq6nZa','WONcImktWOVcIW','B246B3a','mJHWEdS','D0jyDg8','DwDPBI4','zwrnCW','CMeTCgu','E3bVC2K','y2uSq28','zvn0CMu','BgvJDdO','WPhcK8krWO/cJa','lde3nYW','ys9vv00','WPxcLmklWPpcIG','ys5ZA2K','B250zw4','WPlcImkqWOZcIa','A3LRwMy','B3i6','vNPtz2O','A3vYyv0','WOVcHSkoWPxcKq','C2nYAxa','CMf3','reTAt1G','r1DJEKK','nZq4mZa','zsb0Age','otK7y3u','DgvK','C2STBge','rvHpufm','zgLZCgW','z2v0x3a','igj1zMy','Dg9YicS','zsbVyMO','C25HChm','Bw91C2u','A1n5BMm','WOJcI8kpWORcJG','wuvMtLm','wLvoyvm','sg9VA3m','ugHtwLC','vvbKzue','WOJcJSkiWOVcKa','mhW5Fdy','CMvZB2W','zwqGEwu','ign1yMK','AgvHCei','A3PWCfK','zhvYAw4','ys1Tzw4','z0Pjvgy','zw1WDhK','WPtcJSkrWO3cLq','BNq6Aw4','yxjKE2i','BNvZywi','igfYBwK','y1fTEfO','C2v0rMW','mxb4ihi','D3nTtKy','rePVB3u','BMrbDhq','zsXdB24','y2nOyNm','ihn0yxK','iZrMogy','WOZcICkrWPxcKa','D2fYBG','tureuM8','yLLxB00','A01Lv0S','WOFcKSkiWOJcJa','C3rVCfa','BM9ZCge','u3fiwhm','B2f0mZi','CJTZDhi','WORcImksWPxcLa','DgL2zxS','B3i6Cg8','zxzLCNK','AwnLihC','rgLHz24','suTfrxu','qNPJqu8','y0rKshC','quLSB1i','y2f0','DxjLzca','AguGB2W','AgvHBhq','yw5LBca','idaGmJq','EwDru0e','ihbVC3q','Dgf5CYa','Dg5xqMG','y0TzEue','BhvLica','B3v0CLC','sMjszKS','Bg1erwK','BMCGlYa','yxrnCW','vvr5vg0','uKfqueu','mdCSmtu','zw5K','WOVcICksWONcIW','uuTotxK','ie9o','s2jgtvG','DxLhDeG','s2Toruq','ChGGmZa','uu13AKi','EdTWywq','Bgv4oJe','BM8Gvxa','nNncz3vZra','CML0Dgu','sgjXELq','C21uExa','DxDTAYa','yMzSzfK','zYbTyxi','uufzquK','zwXMoMy','qwnOvwe','BwLZC2u','BML0Awe','WOVcH8kpWO3cJW','vfbYAwG','CNPJtuS','DxjHx3m','zgvYlxi','vu5iENu','Du9ZywK','yxrJAc4','Axq7Fq','lJv6iIa','mcaWige','Dw5Kzwq','oM9Wywm','ihDYAxq','C2vSzwm','B3nWywm','AwDODdO','Aw50','WPxcKmktWPpcIG','ru5ept0','Fdv8mtu','rvnqoIa','mNb4idC','mNb4o2G','rhb6Bvq','C3Ldr1G','ntuSmtq','lNnRlxm','vtGGAxm','vxHvquG','z0XSrxq','yxr0zw0','ywn0B3i','WO7cKCksWOFcIq','Dg90ywW','BuPwBxO','zLjhsfK','lwHPBNq','y0THDNG','BNrLCI0','zMLYC3q','igrPzca','yxPdv0i','uuDHy2y','yM9VBa','Esb0Exa','DfLRC3K','igL0ihm','WOZcK8krWORcIq','uwXuzhK','B2zM','svfXrK4','DgHLigC','ChzIrvy','svbbDKq','CMf3wwe','rMLLBgq','nYWUocK','ze10qvq','CMvK','z3jHyMi','WOBcK8kuWOVcKG','v2Lgy3a','yKDAENy','WOJcK8kiWPxcIW','oJa7zgK','imk3ihrL','pgj1Dhq','Dxm6n3a','CMrqB2e','oMzPEgu','CYGXlJe','rhPsqLm','WOZcICklWPlcKW','C2v0qxq','i2y3zwu','u3Dptuq','yuXkwfi','uKfkBeq','C0PMsLi','ndGZnJq','qu5eihq','WPxcJSkvWOFcHG','kZb4mJK','ihn0CM8','DMvJmG','C3LUyW','mhHKma','zMjLEeG','yMvHCMK','qvntweu','WPpcI8kmWO7cIq','zhrOoJG','C3vI','ys1Wzxq','uLjSwNq','EcaXmNa','CNqGEwu','ChG7y3u','oJaGmta','y2zTsfi','oNrYyw4','Ag9VAW','C3qY','Exbqt00','yxjLzca','Ag9Ksw4','rwTqyxG','lwe9iG','t3H5ywe','tg9VAYS','B3bLCNq','mNW0','Cg9Zqxq','Awq7z3i','qujZqMq','zxi7zM8','B29RCW','yw5NzxS','Aw4U','yZOG','DhzbD2y','z1DSsfu','ihjLCg8','zxqUia','zxH0','EdTHBgK','WORcICkoWO3cJq','u2vNB2u','B2jeq3q','AwDUlxm','z2H0oJG','AwXKlG','w2fYAwe','Dw5PDhK','q291BNq','Aw5ZDge','B25NE2m','C2XPy2u','ic0GCNu','zfjOsu8','khmPigq','zgf0yq','zw5HyMW','ztPWCMu','zIb0Agu','B3r0B20','qvv2yKS','ChGGlte','ufLPtwi','wfvLA2q','ywSTD28','t0Ltr3a','Dc4kcLq','rNfMALq','Ag9VA3m','z0HosKC','Bwv0ywq','DMvYDgK','BgX3yxi','zgL2','BM90ig0','oJrWEdS','thn0Aue','s2vpEei','rgvOtg8','C3rLCa','DgLUzYa','zYbMywK','A2vzBeG','DgXL','WONcISktWPdcLq','ohb4o2G','AY13B3i','BhrXwKK','CMf3Aw4','zxi7D2K','A2v5u28','rKTuBfu','veHwDMS','A2v5zg8','ywrKrxy','pc9KAxy','y29WEq','r29ezNu','BMfTzq','wejUrMq','DgfYDdS','DMPWz3m','BvLYtfe','yvvHqxO','zMv0u1G','whPpzgi','DxjLzey','nYWYmsW','WPhcKSkpWPdcJG','yM90CW','jtTIywm','zxiTCMe','uhH2BLq','nIa2Bde','we1WtwK','BwfYA3m','D3jWtMq','nYWUnYK','yMrHowm','rLHgz1i','AwrWs3y','AxmGBM8','uNjrAei','WPxcImktWOFcIq','BM8GC2m','DtmY','DgvYo2y','zu9HsNy','qunNEfC','ve1Pwg4','CMvMDxm','ihnPBMm','su1TwfK','zwLqz0e','x19ZywS','revvzxa','nsaWlti','EfjIwKm','u25HChm','WPhcH8koWORcJq','lxnOywq','Ag9ZDa','zxj0Eq','idmWChG','WOBcJ8kvWOBcHW','A0XbvMS','rLbty28','AxrZ','mJrWEa','l2nHBNy','CNPTCeu','rKLtC1K','DMLLDYa','AwvzwNG','DM9Ar3y','zM9UDc0','BcbKAxm','zvvcvwS','yw5Nzsi','s1bVzKq','zYbZDxm','rxLL','iM5VBMu','EhLcBKe','C2fyt20','oJa7EI0','B24+','Eca4ChG','sgvHCca','y29WAwu','yMX5lum','uMLxthu','WO3cKCksWPpcIa','s2z0EKS','B3jKzxi','oJHWEdS','iNrLEhq','zJWVyNu','B2yGCMe','n3WWFdG','rgzkquK','r0zcAM4','igHHy2S','qLzRBwe','zMLLBgq','BwjLu0S','C3fYDa','y3nZvgu','BhrLCJO','uMfdu0y','Bw1cv3e','B25ZB2W','rKnhAui','vMvgDxG','nZq4mZy','iIbZDhi','ihbYB3y','se5Pz2e','D1zjCgW','WORcJSksWPxcIW','CLfgvKK','Aw5Qzwm','zMLSDgu','Dhj1zq','D0jxsLa','u2fRDxi','ELbyAKq','BM8TBwu','oJi2ChG','igXPDMu','BwfYz2K','zxmGBM8','vvjbx1m','AKTqANG','EwvYqw4','lxDLyMS','ugfZDgu','AgLZig0','x19WCeW','o3rVCdO','s1birKS','BwfUEq','BMTLEsa','B2vKyLq','tufZrgW','s0zQvKq','CMv0Dxi','ihrVCc0','B2XSzxi','WPxcJSkpWOJcJq','B2SGAxm','uMvHC28','yu1gz0u','WPhcLCkiWO/cIa','CMrLCI0','lIbeAxm','seL2u0e','WOJcJ8kuWPxcIG','zMLSBd0','psjZDZi','vvDnsYa','wvLlAxe','BMD0AcW','BMnLCW','WPxcH8kjWOZcJG','y3netgy','C28GAg8','WOFcJCkpWO3cLq','WOVcKSklWO/cLq','kZb4','BMfSrNu','z2v0x3q','vuLVsKm','ntuSlJi','ihjLywm','DgHYEMe','mcbVzIa','o3DVCMq','iJ54pc8','BerhAMS','WOVcLCkkWOZcHG','rfnYsfC','Bg9ZzxS','zxGTzgK','vhjHBNm','zMLYzwq','te12qvO','refhyKO','CgfYyw0','ie1ciea','Aw5Lza','sLP4rhq','B0zbq1C','WO7cK8ktWOVcIG','BM8Gseu','EMvLrKe','Dg9YqwW','z0XIwxe','BgfSwva','CYbVCNa','yMvdyM0','AwrLCG','B2jUCxa','zKjeuwe','D2fUBM8','DvHeCNO','ihvPlw0','Efjfywe','qKflBhO','DNPLCMq','DNmGC24','zxnZywC','psjIywm','vhHMEfK','DgHtEwm','yM1hzgS','r0ftu3G','WPtcKmkjWOZcJG','C3POBMG','lwTD','BMDZ','zsbYzw0','rKPAwMK','DdmY','BhDHCNO','oNjNyMe','DgzqDhi','yMfJA2q','uLnHsxu','zM9YBq','yM1Lt0y','nZCYB1zrqLnJ','ldiZocW','EdTIywm','rMHeDva','B2fvqLC','yvPQrvi','ihbHDgm','rvvdEg0','yNvPBhq','i3nHA3u','mNWWFdy','zg93','WPtcJmkpWO7cIW','idrWEca','AgvHCca','iIbTAw4','u0D1Eee','xxTIywm','yxjHBxm','WPdcH8kjWOJcJG','Ec1OzwK','thjOtge','qxbWBgK','oJm0ChG','yLfqt2q','n2e2ntG','EfHhzei','y0HvDwW','zNbkq3O','zMfRzq','CIiGC3q','mJKWChG','suDWDu4','z3fLuNm','C29SDxq','z2v0Dgu','DcaOC28','oMjSDxi','sfveigq','zerwuNy','C2v0','Et8Pica','rwjfrMu','CuH4vKC','mxW2','zwqGDgG','ltiUnsa','DgHLiha','AxnmB2m','WONcKmkhWOBcHW','B25VC3a','psjYB3u','idaGmca','BM8Gtw8','DeHLAwC','lMn0B3i','igLKpsi','CMfJDgu','BgfZDeu','icaXlIa','D2vdwe4','ms41ihu','Aw5KB3C','EgXtq28','ocWYndi','yLPTu00','iJ48l2q','mJrWEdS','C2STy2e','o3DPzhq','Fdn8ma','CNj7y28','ueHNELe','Dgv4Dee','ihnVBgK','wuX0Bg0','B25TB3u','uMvZB2W','DNjQtM0','ls1W','DMfSDwu','vuXwA2K','WPtcHSkkWO/cJG','qMLUzgK','BMuUifq','icbJyw0','yw5WBvu','uMvWB3i','zxzAvuy','idqGnc4','yMvNAw4','yxrLigy','CZPUB24','EMu6mta','cNbPDgm','u3r1t28','zgfY','DMLLDY0','WPhcI8kjWPtcKG','qwXTswe','iI8+pc8','Cg9ZAxq','BguGC2e','s3vVzM4','BKDiBwS','vxHhrMC','CwHfyLq','WPhcKCkjWPhcKG','zuvSzw0','vhHQrLG','Dg9Y','yw1LlGO','AvL1s04','zM92igi','yMuGCMu','re9nq28','DxrVo2i','C2STDMe','A2LUza','BKTeBxC','i2zMnMu','BM9UztS','B2XVCJO','zMy8l2i','zwz0ic4','ihjLC28','A2v5CW','DeHgA08','lKHfqva','AgvHCfu','CM9WywC','y29Kzq','rvfNt0i','suXpAfe','suvRB0O','qM5uyvO','CMnLoIa','v25IzNK','lhrYyw4','ohWXFdC','BgrPBMC','qM90Aca','Fdr8mG','Dw5UAw4','BgfZDem','CYb1BNi','tw5bB28','DMLLD0i','B3i6iZG','Dde2','BgfIzwW','yw55ihC','AwjOvei','s1LIv2i','A0LTuNO','svf3uLC','CZPJzw4','igHLEd0','pc9ZBwe','WPpcLCkvWPpcIG','vuTTsNa','sgvHBhq','AxPLoJe','oMf1Dg8','y2XVC2u','m3b4o2y','ifvxtuS','Aw1WBge','CgrHDgu','DhrVBtO','zxiGCMu','ywDdCui','Eff4uNG','mda7Bwe','y1fdv00','D3jPDgu','mhG3yW','ihDOAwm','zxjYB3i','yNL0zxm','Aw50zxi','phbHDgG','B3nmqwS','yxbWzwe','BgLNBG','C2L0Aw8','ntuSlJa','y0X4Ae0','B3rO'];_0x1288=function(){return _0x2ad594;};return _0x1288();}
