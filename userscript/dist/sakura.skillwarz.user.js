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

function _0x2d8c(){var _0x38d81e=['B24GAwq','zMLSBfm','CuXsCgK','Buvsuwy','WPtcKSkgWPlcKG','jtTIywm','Dg87zMK','Dw5PDhK','lYbQDw0','r1zNtgG','z2v0q2W','ys1ZDY0','rvDzAvm','C28GAxq','pt09u0e','r2r4Cgu','CNmkEwe','BMDSzsa','C2n1q20','uePXvKy','vfHgBuO','Dg87Fq','vg1Oree','WPlcKCkoWPxcKG','Dc1ZAxO','WPdcICkpWO7cKW','lwnHCMq','idi0iJ4','t3Liruq','vgHLiha','mNWZFde','mNb4o3a','C2nYAxa','sxnSBKq','C29SAwq','lZeUndu','mJGPo30','ksbVCIa','AxrPywW','Esbku08','AxvZoJi','C2v0vwK','B3qGD2K','t0LxA1C','kZb4mJK','t2Lys20','mdTMB24','ExbLpsi','zgHiyMe','DgvYiJ4','DMPXz3K','EdTVDMu','yxbP','zdTYAwC','ig9MzNm','A2DYB3u','igSWpq','AwX0zxi','D2ngBNy','ywXPz24','BM8GC2m','phbHDgG','psiXmIi','z2v0sw4','zxi6mxa','B246zMK','lNnRlwi','pc9ZDhi','te9h','lwXLzNq','EMD6Cu8','zwqGEwu','sxn3BeG','lc40nsK','yMHpq0G','CgfYC2u','idb4mJG','BMC6nha','CfLnAe8','z2jHkdi','rgvSDge','whLZvM4','BNnPDgK','Ag90','yw9JC20','icbOB28','DcbPzd0','EwrhDwW','zxHWB3i','y2uTAxq','DdOWo28','BKzhu2e','kde1mcu','mhGZma','zwrnCW','Ag90ig4','u2nYzwu','EcbZB2W','AxqTC2m','WOBcH8ktWOJcJW','CMvSyxq','DhjVA2u','qNLjza','ywLUAw4','DYbNBg8','tKjUy0G','C2v0sw4','B3n0zMK','lJi4','ENPlwKG','jsKGmta','sgrbCeO','ndqWotKXyxbkBKvt','zMjfENa','revqu0u','WOFcJCkkWORcIq','WO3cKCksWPpcIa','ltiUns0','AM9PBJ0','zxCGy2e','khmPigq','B3npu2i','zxrsAwC','vhnovKq','mNb4idC','yxv0BZS','C2v0tge','mhWYFdm','qvbvoca','zJWVyNu','Cg9YDca','ww1Zveq','ldeWnYW','BJ8PoIa','BMnLigy','oMLUAgu','C3rLBMu','Dw5Kic4','zMvLDa','WOVcJSkoWPhcHG','svrgBKu','EuXHrMO','sMTpzu8','D1rmu0i','C28GC3q','Bu1huvG','EdT9','CxnVv0q','EtPUB24','CMvKihK','ywnPDhK','nhWYFdu','AgvHza','EvjAs0K','DdTIB3i','zhrXCgy','z1DhyLa','sen3BvG','AtmY','BMvJyxa','ruDwt0G','rhfgBKO','ytK5o20','vNjKy3O','DKP1CxC','C3rHy2S','yxjNAw4','icb3CMK','DcaOC28','Cc1JDG','tuH0C0C','BhrLCJO','yMvNAw4','ywrKCMu','r0XWrhO','EuHZug4','y29TBwu','oMf1Dg8','tezyvuK','z3rzre4','rM1IvfK','qvLZzKW','r1DQzK4','DgGGB3i','re9nq28','zvPjuhm','svbMy3a','B3nWywm','lKHfqva','zuHhALK','Dw5gy2O','tKTtsu0','CJPWB2K','zwqGB2y','WO/cK8kgWOVcJG','AwvSzca','D24Gvxa','qMzxy0q','z2v0rMW','CgXHEwu','A2L0lxu','lNnRlxm','WOVcJmkhWO3cLq','zwjRAxq','WONcJCkpWOFcKq','CKXPC3q','z2fWoJG','mtjWEdS','lc4WnsK','DezAEg0','ig5Vigy','icaGica','EdTWywq','zwvMntS','AfL4yxq','CMvSyxK','CJTNyxa','ugf0Aa','kdiYChG','CNvUDgK','C3fYDa','AdOZmNa','z1bPvvq','Dw5Yzxm','DxjHtwu','zwq6ia','BgXxyxi','WOJcJSkiWOVcKa','zgf0yxm','D1zRvMW','CgX1z2K','DhLWzq','uKzuBei','BhH1y1q','AMDiwvK','DLDuwvq','WO7cK8ktWOVcIG','oYi+u3a','zxjLBMm','cLSGif0','zhjVCc0','zMLSBa','BMq7Fq','BNPey3C','mIiGC3q','CMvMDxm','o21HCMC','yvrltgm','z2v0x3i','Bhb5zNi','nIa2Bde','ywn0','zsbNyw0','EdPUB24','AwH5tha','y2SIpJW','owqIihm','C3zNpG','D28GzMW','ChG7Fq','zwXPr3m','B3jPz2K','WO7cLmktWPtcJq','mJu1lc4','CMrLCJO','B1blB1a','CMuGy2W','zJu7yM8','B2XZoJO','zxbSywm','Cwvly2W','nYWUmsK','BMnLCW','zMXVDZO','oImXnta','svvSEwy','BMqIihm','mI4Xmc4','EMu6mta','q1zfrK0','uuvivxm','sunQAMW','Aw5ZDge','AwzPzwq','B2SGzMK','qw5JBMS','ywX1zt0','WOZcI8kpWO3cIa','Ec1OzwK','lgnHBgm','DxnLCI0','WPpcKmkiWPlcKa','ihn0CM8','BIbtruu','zdPYz2i','DMLZDwe','lxnPEMu','u2vZC2K','oMzSzxG','ndmSmtC','Bs11AsW','zM8Qksa','CMfUihK','uMvNAxm','zNjHBwu','mJzWEdS','wgf6Bwq','AguGCMe','zgjvB2G','nYWUmty','y29UDgu','WOJcICkpWPhcLa','qMfnu2S','BgLUzvC','DhLSzt0','zwfKEsa','zsbZDhi','CwLJtfu','oYi+','Dwj7zM8','AwzLig8','zZOXmha','CM5PBMC','WOJcKCkvWORcHW','BgCIihm','Bg9HDhm','yMPmvNu','CMuGAwC','ihjLC28','BwuUCMu','t0Dls1a','nhb4ide','zxjHDgu','y21Qtuy','reHYvfe','WPtcLmkoWPhcKa','DMfS','Fdv8ohW','ChPAwLq','De9tuMK','Dg9WoJe','ignVBNm','CgD4zfu','DxjH','iJ48l2q','Bw1Xy0i','zwf0zva','CenVBNq','WONcJCkkWORcKa','DML3ufG','rK1ysgW','zLfVEuO','zYdcTYa','CMf3qG','BguIihm','uMvSB2e','mcaWige','B3qGCgK','zgvZy3S','B3i6','mhGXma','ihrOzsa','BMTLEsa','nc00lJu','zxnWyxC','pgnPCMm','yMvS','B29M','E2zSzxG','Ec8XlJm','WOFcLCkpWO3cJG','BMqU','uvjAqM8','CLP0BuO','vg90ywW','BxbSyxq','WO3cLmkvWOVcIG','CujdEge','i2jKytK','DfDPzhq','AxrPB24','z2LUoJa','BJPJB2W','BfjHDgK','CMvKDwm','C25HCa','yxjKlM8','tg9VAYa','sLbuy3i','psiXiIa','D2H5','zhvSzq','yxr1CMu','zwLNAhq','Fdn8mxW','uMvZzxq','ihzPzxC','tM8GCMu','DeHozeG','tNzWyKK','BMfSrNu','A3D0vKG','DgLVBJO','Bw4TC2K','i2zMnMi','u29uqxO','ztOXms4','B3CU','y29SB3i','Ec13Awq','BwuUy3i','wMXmBwe','ktTJB2W','B3nLCY4','igvHC2u','iJ5tCgu','BwLZC2u','WOZcH8kgWOZcKG','Bgv4oJe','yxmSBw8','uxjyzwW','n2e2ntG','yxa6nha','AujQEu4','n3b4o3a','oMjSDxi','yK9eC3i','v0DkwuS','quvLsgq','A2v5vxm','lde0mYW','DxnLtg8','WO7cHSknWOBcIq','Bgv4oJa','WO7cKSkrWOJcKG','s3nIBwS','lJi1ktS','mJm4nde1nfvPshrLqG','BgvYigG','AxrSzxS','C2L6ztO','y252CKG','zu5Yt0e','WORcISkqWOJcJa','D2fSA2K','yMrHowm','C291CMm','z2v0x3q','iIbZDhi','vvrUqw8','otK7Bwe','rhHjsxy','Fdn8mta','CKnVBNq','ugXHEwu','osWGDhu','CYGXlJe','DxjHx3m','qw5ushu','B3jT','tLL2BMG','EwXLpsi','WOJcISkiWPdcLa','pt09','iNn3mI0','thz3AuW','quPLtwu','ndy7y3u','tgTsEMW','WPtcKmkjWOZcJG','AwDUlwm','BNrPyxq','CZOYChG','zwn0Aw4','mxb4o2m','zw1LBNq','CMvWBge','sgzVDhO','AfbhteK','uMvHC28','ywqGzMe','ysXI','te9kwMO','WPpcI8kmWPtcLq','uwPrs0y','DcbTyxq','owm5o20','ihDHCYa','mZGSmJq','CuTxELC','ALP4qwS','C2fUzq','y1fHCMm','WORcJmkgWPxcHW','sLnptIa','sfP2v28','ExbLCW','iIbZDhK','Ew1sCNG','sgnwteO','AguGBgK','zw1wD3C','zw5LBwK','zwfKywi','ntuSlJi','zNHoAMO','DvnwrMi','DhKGAw4','zMzZzxq','surfige','BwvUDc0','mYWXnZC','zgf0ys0','yKDutMG','igLUlwy','oImYyta','wNfAswS','zgLJrLi','mJu1ldi','r2fTzsG','WPpcI8kmWO7cIq','C1Ptr0e','Ae10CLi','WPtcH8klWO3cIq','DKvRz0e','AxmGD2G','whbhD3q','tLLbyvq','zxrYugm','CNqGihq','BwLUv2K','DgX7zgK','yw1PBhK','wwjHChm','wMveDxq','ChG7Bwe','sfrnta','BNrZoM4','rMPjreG','phn2zYa','C2STC2W','sNHcugq','o3rVCdO','oJHWEdS','CM9Wlwy','C3vYDMu','yxjKlxi','lwe9iMy','Dc5KBgW','qMvHCMK','z2LUlwW','ysbNyw0','zgfuv1e','tLbdx0m','Bwf4kdi','BMfIBgu','z0LKA1y','mZT9','B250lwy','zwqGyNu','CMfUzg8','B2yGDMK','CIb0Agu','AxrJAa','zxi7iJ4','cIHJBgu','DhjPzwq','u2vLBG','B21Tyw4','tKLJA24','yJLKo2i','wLj6vMG','BM9ZCge','ChG7iJ4','AMnwEgq','rMnoEfO','r2viuwm','Cd0Imc4','ChG7yMe','EcbYz2i','mtjWEca','wePLA3q','C2LUz2W','mtbWEca','icaHia','WOZcKSksWPpcIG','CJTZDhi','imk3ihrL','Dg9tDhi','C2STBwi','cKLUC2u','Axr5','B2jMrG','C25HChm','BgLKihi','y2fSlMq','WOZcK8krWORcIq','uwDoD24','rujVA3G','zenOAwW','zMnUyum','BI13Awq','vu9tquy','qLD1tu8','u3HJueW','z1LvDMC','BgvJDdO','y2vUDgu','AhrUzxm','WPtcI8kgWORcJG','EtPIBg8','yMTPDc0','sK5bz0i','A2v5qxq','Bw4TCge','AgL0CW','rvnqig8','zxrVBG','B3HmCK4','zgLMzG','Dw5PDa','yM90Dg8','BwLU','zvbSDwC','z2v0Dgu','BwvHBG','z1rUvLK','BNnWyxi','BMC+','tuzmu0i','D09VtKG','zZO2ChG','A3bqDMi','DxjHvge','ktSTD2u','yujvEum','Aw9Uihu','pgrPDIa','B250zw4','zNjVBsa','yvPtEMK','yufKANC','tw9KDwW','zY4G','yNn2q3C','rhz6tLu','qNfmvM4','WORcKSklWO3cKq','zvbPEgu','o2nVBg8','ALvzDfO','CMvKia','yM90q28','zNLvtKK','oJi2ChG','FdeWFdi','yMfJA2q','Aw5Qzwm','wvP3ELe','zw5HyMW','Awr0Aa','rw5HyMW','C2STBwq','lM1Ulxq','DhLWzum','C2v0sxq','CJOJzJC','ChG7','EdTNyxa','zMfJDg8','DhLSzq','y3Hmtgm','oJaGmta','rK5TC2i','DxjHDgu','CMfUy2u','CgvZia','C3zNiIa','DKrPEue','BgvYkZa','DMD7D2K','qvvZr08','lxnWzwu','WORcHSkkWOVcHG','lwjYzwe','nhWYFdy','BMCUcG','B2TLpsi','WO3cJmkgWPtcJq','WONcISkgWPlcIq','ueTkz1G','yxjN','C0fwuuK','B3vUDa','zvjLy3q','wLzfChK','yY1IzxO','AgPPC1i','mtaSmte','WORcJmksWPlcLa','oInIzge','rxrHtKm','ExDOz0i','tfver2i','swjRzgq','B3v5t2u','igvUzca','B3zLCMy','CYbHy3i','D29Yzc0','mda7Bwe','rKvJrgm','C2STDMe','nsiGC3q','C2fUCY0','B2yGCMe','DJiTDge','BM8Gz3i','tMznr2G','vgv4Da','AK5JzKW','DenVBg8','Dg9gAxG','oJeYmha','zxzLBNq','yMuGCMu','ENDyD0S','u21jsuK','lY0WlJu','ig9U','BhzLr2e','y2fS','Fdr8mq','CMvMCW','Aw5Ly2e','BK9Uv1q','AcbMAwu','B2jIEsa','Ds1YB28','WONcJmkvWOJcIG','Chr1CMu','AxnHyMW','ve1wEfG','B25Lige','lxnUyxa','WPxcICklWO3cIG','z2H0oJG','mtfWEdS','B2XVCJO','u2HsueG','v0Tjyvi','oY13zwi','yMXLig4','AgfZtw8','ign5psi','zwyYo2y','DgeTyt0','WONcJmknWOVcJW','AxrZ','BwvTyMu','WO7cJ8kmWOJcHG','icdcTYaG','B2r5','BwfW','ihvPlw0','D0XHEK8','rvLltKy','ihjLywm','zsbVyMO','ifvxtuS','Bg93oMG','AK5ss3O','ieeGAg8','AgvPz2G','Aw5KzxG','DhLWzu4','C3CYlwy','wfrZAMu','sNvTCca','phn0CM8','DMvKpq','ys1Wzxq','tuvMvui','BwfUEq','zwqGysa','zgLZCgW','tMfTzq','lxnOywq','WPtcJCkrWPhcKa','lIbozwu','BdPPBMK','Fdf8nhW','lxjHzgK','uwzOC0q','rfPgzhy','rgXdwMq','ig91Dca','WOBcKmkgWOZcKa','AhjLzG','iNnUyxa','CML0o28','CM9SBgu','DxDTAYa','v0T2zw8','o2jHy2S','BMvUDa','BM90zq','Ec8XlJq','A3rtCee','Fdb8mW','vwPVq0S','CgDwv0e','EwvZ','BgLLzca','CM1VBMS','BNrezwy','quWGqum','ywrPzw4','sMfNt2K','iey3ica','u3bYAw4','zsbUB3q','C3bSAxq','yMnqtMy','t2zMC2u','o2jVEc0','yxm+','zMrSuxm','vgHLigC','zxrL','zsb3ywW','DMLLDZO','C2v0qxq','x2DHBwu','zfnts3q','C3rVCfa','C3bLzwq','igXPA2u','zvjAsvK','BhDHCNO','Bgu9iM0','zxrOAw4','idaGmxa','tMv0D28','tvvoufm','lMn0B3i','ntuSlJa','DxbKyxq','suvisfG','BMu7Fq','zg9JDw0','CJT3Awq','EhL6','Ew53Cg4','Def1v1K','zgv2Awm','lM1Ulwm','zxGTzgK','ztPUB24','zsGP','Dg9ju08','uLmG','v21Yzw4','qw1Uvfa','C3rYB2S','zMLSBfq','AxmGBwK','mhGYna','mhG5oa','zhmGB24','BMfWC2G','q1nkDKC','jwnBC2e','oMjYzwe','DMuGB2i','DMvYEsa','wuP4zey','ktT9','ysbtA2K','mtb8nNW','nhW2Fdm','zgfY','ig1VDMu','E3bVC2K','mIWYosW','ChG7y3u','B2TZihi','B3vUzdO','q29TCg8','BvfhD0e','EvjVD3m','zwfKE2q','C3nNvKO','Dcb3yxm','B2zMC2u','DMC+','rhrKsuK','AgvHCfu','BwvZC2e','y09bz0O','rKDXtvG','zNrZCee','ufHrqw4','B2SGEwu','s0PIzgG','uvLJveW','Dw5UAw4','ohb4o2G','zgvIDwC','mtTJB2W','BM9Yzwq','WPpcICkoWOBcKW','rvLwseO','z2v0rwW','Dw50','AK14uha','ndC0odm','threvvO','igvHy2G','AgPWrK8','C0rHA2e','zuvSzw0','Bw4TAa','ifrOzsa','CNvUBMK','WOVcICksWONcIW','y1fJCwu','suvzzMu','uMDyt0W','sLjlC0i','WPtcKmkuWOZcLa','weLVD0O','tMzpugS','DhjVEq','zMLSDgu','WONcK8kuWO7cJa','C2v0qG','Ate2','nYWUmZu','BgvMDdO','ruP4yK0','BxnxDLq','yNvMzMu','C3HZveC','zMLSBd0','yt0IC3q','DdPZDge','BhKUieG','A2LUzYa','yxK6zMW','zgf0yq','o3DPzhq','ug5Izfu','y2GGDgG','C2v0Dgu','CNqP','rfLUy2u','t2Htuhm','mJu1lde','CgvKigi','ihbHC3q','Bw9YEvq','DgvTCZO','iJ54pc8','kZb4','CMvNAxm','psjWywq','u3bLzwq','WO3cLCkpWONcKq','Bw9UB3m','ucbVBJW','svfUDwS','n3WXFdm','EundDLy','WO/cI8koWO3cJW','wwLQEvy','B25Tzxm','yxbWzw4','ELvZthe','WOZcJSkvWOJcJG','psiXlJu','rg1Avvq','weXVDva','vKD6CeK','wMDOvw4','zMLYC3q','yMftuge','mdT0B3a','DgHLigW','igvUDhi','WOJcJmkhWO7cHW','Axr0zwq','lwHPBNq','CgL0y2G','CuPgqMS','zxnZiey','z25TswG','zunOAwW','FdL8nNW','BNrLCJS','y21erKK','AgLoBNK','WONcKCkgWORcKq','oMjYAwC','zMjnBhi','zsDZig8','B25LoW','oYi+u24','kgD1zxm','nduPo2i','BIbjtLm','B3r7ywW','B2jMqG','WPhcImksWO3cHW','uK5Xzxy','yNjLywS','BY1MAwW','ihn0yxK','mhb4oW','Ag9VAW','ndGZnJq','yM90CW','Dxm6nta','ExrLCW','Dw5KoNq','wvvntNG','AefJyvu','zxrZigm','zuDOtvC','ys1ZDW','Dw1Uo2C','WPdcKCkvWOZcJG','yw5ZzM8','WO7cI8kvWPlcJG','ihnRAxa','Bgu9iMi','yxjTzwq','Ae1xEKi','CYb3zxi','WO/cKSknWO3cIq','AdOWo30','AKLyAfG','C2vSzwm','zuf0rMK','B2XPzca','CwXRy0y','zgvYlxi','CML0Dgu','DMuGBwe','igDHBwu','i2zMzJa','iZrMogy','oJi1ChG','ywX0','Auf5AK4','n3WXFdG','C29SDMu','qNfguuu','ChG7Cge','y2fWDhu','DgnOzxm','AgvHBhq','zsGPlMu','zhrOoJG','BeTrBfO','cMHVB2S','CYbVCNa','z2vY','o2n1CNm','vMfTDwq','lxDPzhq','y3vZ','Cgu9iNi','zgf0zsa','zEkaPJWVCW','WOZcISkgWPdcHW','zgf0zxm','DgvYo2y','zw50igK','BLDWC2i','CgLUzYa','tg9VAW','nsWUmdG','Aw9UoMy','wgvkAeO','CgfPCKG','idzWEca','DdOXmha','Aw5KB3C','Ewv0lG','WOZcHSkpWPhcJW','q2fTzxi','CM9SBgi','zhrYywG','B25NlG','EY13zwi','ufHKqLO','iJ5ZywS','yY0XlJu','WPxcJ8kgWOJcKq','WORcJmkvWPpcJq','yxbWBhK','r0r1DLK','DZiTyM8','EKvVqMK','C3bHy2u','y21K','BNuTCM8','uvbMv2u','ChGGmdS','B2SGAxm','qu1RBe0','sKH4BNO','teLWvMW','DwvcDhm','tNPAB3G','WO/cHSkqWPtcIq','BIbZB20','lde1nYW','Fdf8ma','zvHpuKu','nsWXmdC','mJKWChG','ANrlBxu','BNnPC3q','qu5pveG','Bg9JywW','WOBcJmkkWOFcIq','Dw5KoNi','Bg9Hzhm','Ag92zxi','EdTOzwK','oc00lJu','y0LUChu','BxmGD2K','wxritKW','EeLHsgS','y2TNCM8','WOZcICklWPlcKW','zNKTy28','ihnVigu','zwy1o2i','qKfTrhK','Ag9ZDa','wwPrvxK','DMvK','CM9Tihm','Bw4TBg8','BNrPBwu','BM90ihi','zwXVywq','AxmGyNu','DuvmsuK','CNq7z2e','nxW0Fde','lM1Ulxm','C09ss0W','BgLJyxq','mhHKma','zYbTyxi','ig9Ul28','sxrkthu','WO/cImkpWONcIq','qxrYugy','mNb4o3O','mhHLoa','B2fYzca','BM8GCgW','ENvlEgy','WOBcI8koWORcIq','sLDiC1K','ChvZAa','q2X2wM8','C2v0rMW','WOZcI8kmWOBcJW','AwvSze8','vLntwwu','DeDgEwS','B1jQruy','Aw5Swhi','WO3cLmksWPpcKG','zxnWia','Axbguvq','zdTWBge','ifnxlvC','yMfZzq','ysbMB3y','B1fwzum','ig1PBJ0','A2uTBgK','EKL1DLC','ywn0Axy','rwLqwMe','o2zSzxG','B3jRu3K','EwXhuum','WOJcKmkvWONcJq','ywiUywm','oM9Wywm','zMTMvK4','BgLNBI0','CM9ZCY0','ig9Mia','DhLxzwi','WPhcH8koWORcJq','CZPJzw4','B3i6i2y','CJOXChG','yMfJA2C','DgHLigC','zw1ZoMm','y29nswC','WOFcJCkiWOBcIG','CZ0NC2S','A2vLCa','zdP0CMe','CMeTC3C','r2fiyLK','WO7cK8kvWO3cJG','zufdzg4','q0zJEva','Bxm6y2u','nJaIigG','BdPUB24','CdOXmha','B250lxm','BgfZDeu','z2v0sxq','mNb4o2G','CwHhChC','ihDYAxq','ic40nxm','vujrvKy','ywnLlwK','tgzqyMG','CMvIDwK','ve1mBvG','BMqGEwe','EdTHBgK','sevpy2S','zwDgC1K','CNzuBfq','WO7cKSkqWOJcKq','igq9iK0','BwuOkq','kdaSmcW','yxGTAgu','zvHXue0','yZKIpNC','zNfPtwy','C2HHzg8','WO7cLCkvWOZcJa','mtG1mJbjEeLIA0S','zxaGDgG','zw51','BNvZywi','B2TLoMm','Aw5N4OcM','ktSGBM8','svHZANi','B01qrwq','zvLTwuu','BM8GBgK','sxvYAKC','z3zIvwe','EfLMtLi','igj1zMy','DgfN','zsbTAw4','WOFcJmkgWONcKa','DgfSBgK','WPdcKSkoWO7cHW','Dhj1zsi','psjZDZi','DcbHBIa','CgntzgC','y3qGzM8','vvDnsY4','sLD5sfu','yZfKo2m','v0rcsKO','ndySmJm','yM94lxm','Eca4ChG','qMjmu3u','BK5LDhC','WOBcICkgWOVcIW','BgfZDa','z0LPCLm','mhGYoca','ohW1FdK','zcWGBM8','D29YC3q','CKnVDw4','CMTqBge','zu1UrLC','zZOXmxa','DgLUzYa','lc40ktS','ifjLC2u','ExLhywq','AurjAKW','WONcLmkoWPpcJW','CNmG','yhbSyxK','sNHUBuu','yxDxAha','zt0IyMe','CYXTB24','DMvYBg8','mIaXmK0','nxm0idi','EMf6ruy','tfncuMC','EhnXs3a','zYaVigO','CuLTuu0','WOFcI8kiWPdcJG','lJq1ktS','WOBcISkvWPtcJG','rfPLv0K','ywLSzwq','mhb4ic0','zw50rwW','zw1WDhK','CMvWzwe','ywXSzwq','icaZlIa','B3bLBIa','ihnHBxa','AhrhuLm','BNrLEhq','t1H2qxO','x3j1BNq','wxjUrhe','lIbeAxm','BNrPBca','ywj7zgK','ueLOA0W','zKHrrem','WO7cICktWPxcLa','pJiUmhG','u2HHCNa','ANDrs0G','ignHChq','ihbHC3m','cNzPzxC','D3jPDgu','ELn6Cuy','oJa7zgK','B25ZB2W','iMzVBgq','iIbZDgu','WOBcJSkhWONcIG','vxbKyxq','tgf0zvu','B2DVE2q','AwrLBNq','CgfhreK','t3HTt3q','oJOTD2u','Bgv4lxm','C28GAg8','oYi+tM8','Fdn8mq','shnUt0W','ueLds1a','B3jKzxi','ysbZDge','t1n1BhC','idaGyxu','DcbKyxq','ig9Yihq','i2zMzdq','Cc1SzW','DhK6lJq','phnWyw4','CMfUz2u','iZe1mgm','BM90igK','BgLZDa','WORcI8knWPtcJG','ig1LBNu','D2XNuwO','z3jVDw4','B24Gzge','uLfzEfK','C2STy2e','zwXMoMy','WOZcKCktWPxcHW','WOJcLmkoWO3cKW','ig9Mihy','AgLKpq','uMjSyvi','Dte2','igLUC3q','Bwf4','EdTMBgu','lxrYywm','DxjUzwq','qMD6ufq','BMnL','B25VC3a','tw5TBK0','ktTIB3i','A3zSsxa','B206mxa','DxjLzey','B3vYy2u','Cg9YDge','mNb4o2i','WPdcJmkkWORcKa','AxrLBxm','AY13B3i','BM8GD2e','yMX5lum','EdTMB24','EcaXmNa','y2XLyxi','Fdb8nNW','Dg90ywW','vgHLigG','ldi1nsW','WORcKSksWORcKW','CMjSuu8','Auzps3i','C2vYlxm','yxzutKu','AeXIB0y','wgriq0G','Ag9Ksw4','mJa2mtu3y1DUyLrw','D2fPDgK','D2LKDgG','igfYzsa','BKTLBhu','WPxcJmkhWOBcHW','yxHizhG','DcbIzwu','tM8GugG','wM9kCg0','CNvUCYa','Ec1ZAge','Edjfna','q2jLA3a','igLZihi','yM9VBgu','vxDeB1i','WOVcISkhWONcKq','C3LUy3m','D2fZBvi','EvfvwgG','nJiWChG','EdSIpNy','yw5NBgu','s1z0wui','zxLAz2O','A2v5zg8','C3aTy3y','y29Kzq','mYWXmdy','Dg91y2G','y29WAwu','CMvTB3y','Bg9YoNi','sxDdB20','z2LMEq','q29WEsa','AvjHuNm','yw5KigG','WOVcKmkiWO3cHW','sKTJtKq','C2vYAwy','zMXVyxq','CgfYyw0','A2v5','C09qs2G','D2fZBvq','Cej2zgO','B29RCW','B3bHy2K','uffZDeS','nZu7Bwe','lJCYktS','Ewf3','qxnZzw0','Dg9Y','CNjgEwi','AgvYAxq','mtiGmJe','CcbHBMq','BwvTB3i','DgL0Bgu','nNWYFda','igDSB2i','CYbLBMu','nZq4mZy','qxroA24','DhjHBNm','ldiZocW','ChG7yM8','zhKIihm','C28GDgG','vKDiC1q','zKHXuNi','yxDzAuW','AxnWBge','BwLSEtO','A2v5CW','nsb1As0','B3jYzwm','AgfKB3C','lNnRlwG','DgfNtwe','y29SCW','mhGXyYa','BgLUzvq','A3vMBhG','ksbHBMq','CMeTzxm','BLr5Cgu','shHiDMO','idyWCYa','WONcJSkgWPxcJa','mNb4o20','ihnRAwW','D0r2Ege','r1z5qwO','BLLIzMS','sKDLsu0','B3v0','Fdz8mhW','DgTPqLG','BgfZlg0','Evbvsfu','ic8GrJy','ic8G','ufzXq0e','WOJcLmknWO3cJa','tw93u04','DgH6Ae0','nZCSlJq','nxW2Fda','tgjYDuW','A1bsuuq','Dg54tNi','veriz1O','r3vXrxi','tg14wfu','Bfj2s0e','igzPCNm','DxDTAW','CY1VCMK','ywWGBM8','C3mP','wKvwrLO','vhjgsgO','DYGWida','ywL0Aw4','pc9WCMu','zxi7zM8','B2LUDgu','CNHNs2e','B3j0lGO','lGOkswy','zxnZywC','D2fZBva','AwrKzw4','ysb0CMe','zuL0zw0','D2fYBMK','WPxcLmklWPpcIG','CI1YDw4','y29TyMe','igTPBMq','A2vKihu','uhjfvgG','Awq9iNm','mNWWFdm','zwXHChm','s2T6ugu','nsWXndm','BIaUC2S','EwXICMC','Aw9U','BhvNAw4','BNq4','C2vSzwe','sMvXDMK','txfYA3y','Aw5Ozxi','WORcJSknWORcKq','lxnWywm','Dxm6mti','BNrYB2W','lM1UlwW','DcaWicG','ueDLrgG','qu1kqNm','B3zeCMy','AxjLuhi','ywqU','nNWX','Dw16B1y','EIaTihC','ywnRz3i','zhrOoJm','B3rHDgK','yLbTt3i','Bwj7lxC','t1ruwvO','AxbIB2e','DgfYz2u','ys1IB3G','BgfZDem','rJKGDhC','Dc4kcLq','AgLKzgu','pgj1Dhq','Bgf5oM4','CdO0ChG','zMTdEMy','igzHA2u','lxbHBMu','qLrPwNq','BNrLBNq','BgvY','nhWXFdi','Dg9YqwW','B3bLBG','WO7cJCkjWOVcKW','DMvKia','qNjLywS','BhqGC2K','EwuU','WPdcKmkpWO3cIG','v0fswI0','ig9MzG','twLiuwu','C2vLBNq','tfjHExC','WO/cJCkgWONcJq','CgXerLy','psjJB2W','ufnvAg8','C3LUyW','uMLrChO','ihbVC3q','AdO5mNa','Aw50','DgvK','yxjTAw4','lNnRlw4','C2v0','WO7cKCksWOFcIq','BwDltgm','Cgv0ywW','yxjLzca','iM5VBMu','z2LozKu','B3b7zgK','twTivgW','B2TLlwW','qxDoDuC','uxPnwNi','mtqZlde','s01oEvO','v2vADMG','q3Dcthy','AvfNCvy','Ewf3r2u','DgzqDhi','DK1wEgW','yxmGAwq','WPlcI8ktWOVcKG','zwqGlYa','B3qGica','sxLbvva','zMLYzsa','CKTmq3i','DhrVBJ4','CYb1BNi','zZO0ChG','wundv0W','EgjIrK4','Aw50iIa','mxWZFdq','mtTTAw4','WO/cJSkpWOBcKW','CNrYD1C','rML1DhG','vKTxvwi','iNnWiIa','ncK7yM8','BgvMDa','AdO2mNa','CNmGyxi','BM8Gtw8','yM9VBa','Aw9UrM8','D3PhwKC','v19F','t3bhvMm','BIb0Agu','B2f0mZi','idHWEdS','y2fiC2u','AguGD3i','DuLsDxi','z2fTzsa','uMLvyMW','WO7cKmkrWPtcJG','ndHWEcK','lxjLCgu','AgvSBg8','zs1JB2W','ihjLCg8','Bgu9iMq','WOFcLmkrWPxcJW','AgDMr2u','o2DHCdO','y3rPB24','ic0Gy2e','WPdcKCkkWO/cJa','o2jVCMq','Axq7Fq','imk3ia','EdOYmtq','sfjtvxK','yxqG','keLUC2u','zw50','q05RA0W','BLzPzxC','B3DUkq','BM8TBwu','AwzMzxi','CKLMrfa','ysGYntu','CMvMAxG','vhLSueO','rhrTsgy','BguGC2e','EwvYqw4','y3qOCYK','Fdj8mhW','y2XPCgi','ywjSzsa','BgLNBJO','BhzLzcK','ywrPDxm','D2fZBu0','q0jytei','zMz2Du8','EtPNCMK','zgTPDc4','zw1Pzxm','icHNDwu','DcGJzMy','CgfYzw4','A1n5BMm','EMu6mte','WO3cLCktWPtcIW','zgvYoJe','zwvKzwq','rJyGywW','yxvSDa','WPtcHSkkWO/cJG','B25LoYi','EgLdBwC','CeLMs3a','D2HSzLi','yMTcuuu','zNPRs2O','y2uSq28','WO3cKCkoWORcIG','Dgv4Dge','nxW0','txfNA2K','AxjZDca','ig9Uy2u','WOJcKmkvWO7cLa','zMLLza','qujxA0S','BNTIywm','ufv1r0m','sg9VA3m','ztPWCMu','Bg9ZzxS','rgzwB3e','tg9Hzgu','BYb0Agu','EfDrCgq','wxngt1C','y2fTzxi','nYK7y3u','Bwf4lwG','ywi6Ag8','WOBcImkvWPlcLa','B3vUzcW','B2jPC3a','BcXTAw4','WPlcI8kmWOJcIq','rLbty28','C3nPBMC','BuHAz3u','B3nPDgK','qw12y1m','CM91BMq','Bwf4lxC','CgfKzgK','q0Ljz3u','BNvTyMu','mda7y3u','B3CTEtO','pgLUChu','oxWZFdq','Ee1gueO','CYb1BMK','mhb4idu','Axn0zxi','yw5LBca','CIbWywK','zwfJAge','EMXHCgO','m3W3Fdu','WOZcH8kvWPpcIW','zcbYz2i','ks4G','Aw1Lsxm','igfYBwu','zt0Iy28','yxr0zw0','ALrPsxC','Cwn1shy','tfrxDue','yw1Ltwe','uMvJDa','lde3nYW','zhbirxG','wKvNDNC','iIbMAwW','qxv5Efy','ihjNyMe','DxjHlwu','yNL0zu8','A1fJt1m','zMykrJG','suj4whm','B2jMsq','tg9VAYS','qwTWt0O','WPlcLmkhWO3cJa','mJrWEa','tgrJCxm','y2vK','rvnqoIa','B2TOEey','igHHy2S','DNmGC24','zgL1CZO','t0r2s3i','BMCGB24','Aw5N','C3rYAw4','B25PBNa','ifbpuLq','x19ZywS','WPhcKCkjWPhcKG','EwzitKS','DxrVo2y','CZOXmha','we9luuO','o2fSAwC','ie1ciea','yLfLDuu','igHVB2S','ig90Agu','z2H0oJy','EsbPBIa','wvnkC1K','sgnpv00','yM94zxm','AxmGBM8','tuPvvwy','BNLLA0i','z2vYlIa','qxbWBgK','C3mGmhG','uePYv00','ohb4ide','AgfIBgu','ufKGve8','v3vrEfm','lwLUzgu','DgGY','B25TB3u','WPtcImkkWPtcKG','rxHWB3i','WOVcKmknWPxcHG','Bgu9','B1DLww0','CI1Yywq','Fdf8mG','DMvhyw0','DwDPBI4','yxK6z3i','WPtcKmkjWO/cIq','lJuIihy','DgvZDa','ChG7B3a','C2STChi','EejVr1K','ChGGC28','ANHLBK0','igfUzca','ihLLDca','vK5St0G','B3r0B20','CMvK','ig9Uia','WPtcISksWOFcKG','oInMn2u','D2vPz2G','AMvJDhm','zxiTC2u','WO3cK8kvWORcIa','WOZcKmkjWOBcKG','CuLfvKG','Bez1BMm','o29Wywm','DxjJzxm','BM96y1C','B3bLCNq','Bw4Ty2W','AMrYsuW','zg93','y3HruLe','Dw1WAw4','CwjmvvK','wxD1Bvq','r3rPz2S','WOFcKSkiWOJcJa','sgXnA3i','Bg16yuu','u2vSzwm','y0TQvuW','AuXeC08','icbJyw0','xxTIywm','ChqRmhG','AgLZig0','CMf0y2G','CMeTBwu','sNLdrxC','DwD5AM0','Aw50zxi','z0LWENa','B3i6Cg8','C3CYlxm','BNnMB3i','oJeXChG','C2v0ica','wvjjEuW','AwXKlG','ChGPo20','tgfRANO','ztTWywq','D2HLBIa','EfjMCMC','DxnPyMW','Cw9HzvO','WOVcImktWOJcKq','CMqTDgK','r3rQqxK','Dgv4Dem','zYbZy3i','zciGC3q','BgfZDfC','Bg93oMe','v0rRv2y','BMvS','q29Rv1e','y29UDhi','AwnLihC','lwXPBMu','EIaOsw4','DgniuLy','DgvHBq','yw5ZCge','DfrVsui','vtGGAxm','Dxr0B24','BMq6i2y','BhbsCw8','sgvHBhq','lGOk','uNvUDgK','mIWUnsK','AvjNDuq','ig9IAMu','ifvjiIW','DgvYzwq','zxLL','BNHcu1a','DKX5suW','CgrHDgu','WOFcLmktWO/cJq','DgHLig8','mtm5ndHWD1jtuNK','CMqTAgu','WPxcISkrWPxcKG','BhDdB00','BeTMDM4','t3zsEhG','y2fTuhq','ugHYt2m','zM92','nNb4o3C','Dg46Ag8','i3n3mI0','WOFcICkjWPdcHW','u2v0tg8','yxHeugS','sxfIuwe','zwnptw0','DdOG','kde4ChG','v3vqDfe','mxb4ihm','vgjXteW','sKPywxC','rg9MrKu','Fdr8m3W','B2r1Bgu','ihbHz2u','ie9o','Bw92zq','BgvYige','Derdvfy','Bw4TC3u','zLvAtxy','B3j5','s0vXqMG','Dw5Kzwy','Ec1KAxi','CMDPBI0','B014Bei','igzSB28','yuzYB20','nduPoW','yxnZAwy','BNrxAw4','CMvKige','wuzQwLu','CM4Gywi','rJGGlYa','vvjbx1m','r21rtum','tKnRyM4','Dhm6yxu','vgLXC2G','BM9UztS','r2fTzq','yw55ihC','WPlcJmkiWOFcIa','oIjjBNq','rfL3y3m','BNrLCI0','CJPYz2i','zsbYzw0','v0fIu0C','zYbPBNq','zwz0oJe','AxvZoJC','A3vYyv0','ys1ZA2K','zJzIowq','tvHbBMq','WPpcKCkjWOJcJq','rK1MCui','AwrLE2q','Ahq6nZa','i3nHA3u','qNvnCe0','mcbMAwu','mNmSyMe','mhGXoa','yMj0wvG','y29Uy2e','Auj1qMG','rJKGihm','y2fTia','vufJv24','DcbPDca','mdCSmtu','C2vYDcK','lNnRlwW','Bwvnyw4','Bgu9iMm','CMvUDdS','CMvJDgK','tg9NAMG','mJiSmsW','WPxcISkmWO/cLa','oJrWEdS','zM9YBq','BgvUz3q','DeHLAwC','wKrtBeq','lwTD','t2jKtuK','sLj1vu4','yw1L','WPxcImktWOFcIq','EKrNt2u','Cg9Zqxq','AwDUlxm','mJK1owjXy0n3yW','BIbuyw0','tKnhDuG','Dc13zwK','wLrPEvy','igfYBwK','ign1yMK','mJq2ldi','q2XPCgi','yNzqtvu','WOBcISkoWOVcIa','BKTgsNe','C3rHDhu','BMDXwMG','C3rHCNq','wvvqq1C','ChPozxK','CKLoAwe','txvSDgK','AxrSzsa','WPpcHSkhWOZcIG','oNjNyMe','oIiIo3a','yxiTDgG','yxmGBM8','Bxjjru4','vMjhyM8','AgLSzsa','mduPo30','A2LTCgW','C2STy3q','r0nfDKS','oMLUC2u','WPpcICkvWPlcKa','z3jHyG','Bg9YoIm','nsK7yM8','nxW2Fdi','rfPZC0K','t1m+pG','BwLLCYa','nYWYmsW','BhvLica','y2X1C3q','z2uUrgu','zxP4sge','ztSTD2u','iZHKn2e','y0ztAeG','lMrSBa','ChrY','Fdb8m3W','vhnwtg8','s1LABNu','WO7cK8kpWO3cIa','CIaO','y3vYC28','ntbWEcW','kdi1nsW','BMnLC1i','oM5VBMu','EenKy1q','BMfNzxi','zvn0CMu','C2DirwK','CI1LDMu','C3rNy0m','Aufbu2K','ls1W','Bfr2Dwm','lJa4ktS','whDHswq','ywjZ','zfnVBLy','C3CYlwG','C2LU','r1vfu1m','igfYztO','igjSB2m','BMvPDgG','A2L0lwe','WOFcJCkpWO3cLq','WRaSig91','B2TbBMC','DtmY','BMD0AcW','yYbYzxq','mtaIihi','uKfqueu','uMvZB2W','swrsCem','zhrOoJi','CvHjque','AgL0zs0','CNjVCG','uu1cz1K','nJaWo20','CZPUB24','vxLgwgW','lNnRlw0','icaO','lxDLyMS','FdH8mhW','r0TuEKe','te1ZsuS','WORcKSkkWPhcLa','oM1PBIG','yxv0BW','CMvWB3i','nIWYmZG','4Psa4Psaia','zMfPBgu','WPdcImkpWONcIG','su5Hww8','Aw1L','lwHPzgq','D2fYBG','D21VtwW','sgvPz2G','oJe7BwK','C3bHCMu','lZ48l3m','yxrPB24','sg1ZChK','BhK6Aw4','yxrJAc4','C2STBge','Aw5MBW','AMzjBfa','AKH3u3G','Aw4TD2K','Dwjlueq','EdTHy2m','yxrnCW','yxrHBJi','Bg9N','B3rVBK4','CgvYBw8','B3v0idK','q0jAr2e','lcbZDgu','D1zUwLq','EK1PywG','uvnHEw8','lK1Vzhu','tw9KA2K','DMfSDwu','tvrHrwK','oJfWEca','AfnJCMK','EI1PBMq','ihLLDa','z2v0q28','qu1bAg0','igL0ige','DgL2zxS','z2H0oJi','zsXdB24','ve9irue','ywLSywi','vhLgzM0','ltqTnY4','Bgv4lxC','Egn4C0S','zuz1r04','idqGnc4','ue1tvhK','BguGkhW','lg1VBM8','ANvTCa','AgvSza','suDPrLC','vurrsNi','shrtBfK','yxj7D2K','mtbWEdS','yZOG','x19tquS','Dhj1zq','uKfLAwy','r3rPt3G','B2jM','DgHLigm','y2XPzw4','y2fSBa','tu53wKW','mtuXnte2mePTEKzMua','CMf3wwe','nNWWFdq','BI5FCNu','BNrZoMe','t25ezxm','WOBcLCklWOBcKq','yw5Jzsa','Ahz4CKO','BgLUzwm','AgLUDa','Et8Pica','ve5hB3K','BMu7Cg8','zxHLy0m','WOBcJ8kvWPlcKG','B1LkwuS','rvzbsNG','teTOtge','AhrHtvK','z2TqDfO','WPhcKSkpWPdcJG','lNnRlxy','idaGlYa','zKvovKq','tMPkqvy','lxGIihm','ywjmvLG','mhGYma','l2nHBNy','CM1VCgG','BwuUx2C','tvjrD1C','Dgf5CYa','psiXnJa','zwqGDgG','A29ctg4','WOBcHSkmWPtcIW','WO/cLCkqWOFcJq','qw90vK4','ys1LC3a','EvrHCa','B25JBgK','yxjKlxq','zgrPBMC','yZK7BwK','swTsBwS','DgfIBgu','y2XVC2u','nxW5Fdy','ELLLtNi','C05yDwm','CMv0','uMD1D2i','C3LZDgu','WPtcJSkrWO3cLq','WONcJSkvWPxcHW','vxPurui','sw5ZDge','Aw5Uzxi','BgfStxi','DdPTAw4','DgG6mJG','WOBcLCkvWPhcIq','zKDTy2S','CMfTzs4','r2v0Dgu','yxiTz3i','DY5vBMK','y2XHC3m','Dde2','rvnxBwG','x19WCeW','rfDHC2O','zMzMoW','C2XPzgu','C3vszui','CNqGEwu','lwnOzwm','zcbPCYa','Bd0Ii2y','l2j1Dhq','y2u7','iefdveK','zxqSig8','mNb4icm','kdiXlde','zxjYB3i','EM5WrMe','CuLgsgO','iJ5dB3a','oJiXndC','CNDtqNi','BvzNvei','yw5Nzsi','ENHPzgm','C2STCMe','Dxm6nNa','wxL2Bfi','zwXLy3q','qNf0rxK','WOBcK8kuWOVcKG','C2L0Aw8','sevbufu','Au9UB1q','y01Hreu','zgz3CM8','WPhcI8kjWPtcKG','sYbZy3i','z2zJAfq','ztTTyxi','yMXVy2S','ruvlBNq','DgHLiha','BKzpuKO','DdOXmxa','lcbUBYa','y3jLyxq','C3qGysa','A2v5q28','WPlcImklWPxcIq','EM1etKG','DgHPBMC','Bvnnsum','igP1Bxa','BcbKAxm','BIbPzNi','te5ouhe','tIbIEsa','Evj3r1m','ndzWEdS','D3LsD3i','DxjHimk3','yM9Yzgu','idmWChG','y2fUDMe','CM9WywC','u2vLBK0','u25HChm','y2XPy2S','D3jHCdS','uLruAhy','yxbWBgK','C3r5Bgu','WO/cJmkgWO7cJW','yxbWzxi','ruDky0W','Aw1WBge','yxGTD2K','DvnjBwG','v3jHCha','yM9KEq','WPxcJSkpWOJcJq','q291BNq','DdmY','BMPYAfG','nYWUocK','zMLPAw8','q2HPBgq','CMf3','BeHYqMi','A2jnEvm','BgW+','zxi7Dxm','BJPJzw4','zMLYzwq','mcbVzIa','mtu3lc4','AxPLoJe','uuvpv3q','C0n6q2G','iJeIig0','iNDPzhq','q29WAwu','B3nZihq','CMvPAvi','lsbvBMK','Aw9UoMW','w2fYAwe','WPhcK8krWO/cJa','v3PLuxK','B246y28','qu5eihq','lc4WmJu','Esb0Exa','z3jHyMi','zciVpG','lxDYyxa','CM9VDa','nsK7Dhi','DgLVBIK','zJu7Fq','t0SGt1y','Dhj1y3q','Dw1IE2i','uenOEeO','C2STBM8','CMvHzhm','lwvZCc0','rJKU','vvDnsYa','r3bQy3y','D2f0y2G','DvrHwwG','quztseS','WOJcI8kpWORcJG','otK7y3u','C2XPy2u','CMvMzxi','yxrLigy','C3rHBMm','ntztvvHNCNe','CgXPzxm','mtjWEc8','AuzvEeG','EhrxCfy','iZjHmgy','mcWUntu','qNjHy2S','zgTPDa','zxPJvem','ywz0zxi','Ag9VA3m','D29YBgq','vfP6zKe','oJrWEca','qNjxzKm','Aw50lxC','vMXfr3G','CMq7zM8','sgvHCca','Dgv4Dee','zw50tgK','ANLrEvK','uMvMDxm','C2fRDxi','BwLUkdu','Awr0AcK','B3G9iJa','DxPftfm','ohb4o2i','shLHBMm','lxDLAwC','DhrzDNq','tKDACvq','zMfSC2u','rerlEeq','s09svw4','uKvSrvu','CMLNAhq','ztT0B3a','CeDPvgm','q2HKvNi','WOVcICkjWOJcKW','WPdcJCklWPpcIG','BNq6mte','Dxm6n3a','vw5PDhK','AwDUlwK','Aw4TyM8','q1HZzLi','lwv2zw4','C2nYuMy','WORcISklWO/cKG','swvituW','C3bSyxK','BwfSBg8','zgLUzZO','qu5oAhq','igj1Dca','AxvZoJe','CwflCxy','v2vItw8','rviGvvC','AxnmB2m','vKfm','iNjVDw4','ueveyKm','BwruD0m','tfH2rKO','DMLLD0i','WONcICkoWPlcIq','zw50o2i','ChjLDMu','zMvAr3a','CMuk','D25HvLq','B3rYB2W','svzficG','zJfIo2i','z0HdswW','Cg9ZAxq','t2nQvu0','zcb3yxm','tLnVtMe','svDbDeq','AxvZoJK','Awr0AdO','rgLHz24','ig1HBMe','DwvxCMe','oMnLBNq','t0jpqw4','lNjLC28','zYbMB3i','yMvSB3C','z2H0oJe','C2TRAhy','wxHrz0O','zw5NDgG','y2fWC3u','BMC6mca','zwn0zwq','y29Z','lcbuyw0','vhjHBNm','B24+','AMfnEhe','EdTIywm','DMLLD0G','zMfRzq','ChG7CMK','AwzYyw0','tfzyq0S','pc9KAxy','BfbzDgu','DLrLtwi','C3zNE3C','EtPMBgu','z0LmrfO','z2XVyMe','Ag9VA1a','yMfZAxm','DMGGlsa','BNnVBge','mtrWEdS','y0XLv0i','ihrOAxm','w2rHDge','lJGYktS','ocK7Fq','qxrbCM0','C3LhC3q','DgXL','AhPqquO','BMq6CMC','WOBcJ8kvWOBcHW','BgvJq1K','DMvID3q','D256vwm','CxvLCNK','BxjjqM8','CMuGkhi','BcWk','nYWUnYK','Aw5Lza','WOBcI8koWO/cHG','DdOXnha','WPtcJmkpWO7cIW','zMXLEc0','qLzoqKW','y3nZvgu','ue9wreq','iMjHy2S','AxHLzdS','mJHWEdS','r2vPA3G','WO7cJSkuWO/cLq','ChG7Agu','AwvKige','zxiTCMe','DxqGEw8','D09xDhq','yMvHCMK','nIaXoci','sMzQEKu','iI8+pc8','s2jMyLK','DdO3mda','AfnUzgC','AwXKlca','BvPLBxq','BgX3yxi','uLvyvfu','zxKGAxm','igHLyxa','WPhcICkuWORcKG','DNzADeq','BKLJrMy','AgvHCca','DerHDge','serdsLy','CMrLCI0','Aw4U','ohb4o3a','CLH4qNi','EhbVCNq','DvrVuhO','o2zVBNq','DKXMCKi','Ds1JC3m','CM90yxq','DxjLzca','yxjHBxm','Aw1Lr2e','qLjMwu4','WORcK8kqWOBcJa','mhG3yW','BM9Uzq','AwLMu0G','swDzt3q','zxnW','D3niEhu','WPhcJ8kiWOBcKq','WOZcJ8kmWORcKq','C2vUDca','Aw5WDxq','DgG6nNa','yMfUzc4','lJmPo2q','vfjMC2C','DcbUB24','tNLZrvi','i2y3zwu','DhbHC3m','BM5VDca','m3WWFdu','zw50zxi','BKDLy00','CMvZB2W','Bwf4psi','Ahq6mJq','yxjJ','yNL0zxm','re5Az3m','EI51C2u','DhK6mdS','psjIywm','v0nPrxG','u2rkrKi','DhrLCG','C2TPBMC','CgXPzxi','Avzkuha','zxG7z2e','ywLUE2y','BMqGBM8','mhG1yW','B2f0nJq','y3rZimk3','DMLLDYa','BLj1BNq','yxjLBNq','WPxcKSkiWOFcKG','BNq7y28','BMC6nNa','ihvUAxq','BfDHCNO','WOBcISkpWO/cIq','DxjJztO','ywrKrxy','AM9wveO','wuD1zhG','CMnLoIa','CMvUDca','u3bgDKW','u0TjteW','ns00idC','Cg9PBNq','yMLUzgK','C2v0sgK','mda7y28','zxnVBhy','ihnOB3C','uhjtzxG','Dw5Kzwq','AwDODdO','ihrVCc0','Fdf8mhW','z2fTzvm','BMnLv3i','ztOXnha','mNz3ldy','C2L6zq','oJeYChG','BJWVyNu','ztTZDhi','ywnHwvq','WO/cLCkjWO7cIW','s1DRtKq','senWz2W','A2LUza','lJKPo2i','DgLHDgu','WPxcKSkgWORcJG','EgLUvu0','Ag90CYa','mtGGnIa','rviGD2K','rg5vELG','D2L0y2G','CMfTzsa','BM93','nJq3o2q','WOVcJ8kjWPpcLa','iNrLEhq','y2HLy2S','zMLLBgq','lwe9iG','WOZcKCkiWPxcJa','CxvHDa','tM9WAvK','iokaLcbUBW','WOFcH8kjWPlcJq','ueXbwuu','zxmGBM8','uM1XAuq','yMrYz2G','ug9ZAxq','CMvH','B2XSzxi','nJq2o3a','m3WWFde','B3i6CMC','zxnJ','vgfTCgu','lt4GDM8','B2fYza','zw4Gyw4','nIWUotu','lwjVDhq','AKzhu1O','B2zMihq','CxDAuhq','CgvJDhm','WPlcI8kkWOFcJG','DMvYC2K','qKrVzge','zw1VCNK','AMPADLC','zwqG','y2f0','igjVDgG','EfHHzvm','uvvurKK','z2fTzq','CZPZDge','zMXLEdO','EvvVt3u','weLZyNC','Au5hywi','zgHpD0K','mxW1','tJWVyNu','EMrYyMS','CMvKicG','lc45kq','Bvzpug4','vgjJtfy','igfWCgW','nsaWlti','B250lxC','v0jtwuK','s01Othe','r2nWyMO','WO7cLCkoWOFcHG','AxvZoJu','vvDPCLC','yMvsBNu','zNvUy3q','mZe4mZG5ng1juvnyAW','pgnHBNy','vKvsu0K','qvjRB2e','ntuSmtq','A2v5u28','DMLLDY0','zgDADgC','C3bHBG','DgfYDdS','qLjgBhm','BMDZ','BNDdteO','uM5iCNO','BNq6Aw4','igLKpsi','CgHVDg8','m3b4o2y','DMvYDgK','DgnO','idfWEca','vMfSDwu','v3nTBgu','ys1Tzw4','BLrwqvK','ihzPysa','WPxcH8kjWOZcJG','lJuGms4','A2v5vhK','zxmGDgG','Bujqsfe','nZKSmtq','sgPRAK0','lcbnzxq','yw1Ligy','AwvYkc4','Ewv0ic0','rMXHzW','CMvHy2G','CM93CW','BNn0yw4','BeP1sMu','BM8Gvxa','CMfUC2y','yw1LlGO','BgrPBMC','DxDlDfK','twnZwhi','ywnLlem','CLbyvLa','DM9Pza','zcb0Agu','yMfY','rvbSD1O','wLbqrfq','BMDL','sNjZzLG','zxLjtu0','A3mGD2G','CfrYBKS','Cg9ZDe0','vMnsC1q','B3i6iZG','mhGYyYa','EgvKo3q','ic0GCNu','m3b4o3C','WPtcH8kmWPhcIG','zLfssMi','DKTLuhy','WORcImkhWPdcJW','sxbVCxK','r21swMi','B3yGB24','CNj7y28','zhrO','rw5LBxK','CMDIysG','z2H0oJC','DgHLige','Bw91C2u','tgHUDu0','rvffvLK','ifnxlva','uhfPEhu','iIb3Awq','ywX7zM8','ihbHBMu','D2LUzg8','Ag9VA0y','zxr3B3i','yMX5lMK','C0Xetwu','zJmY','Ahq6nJu','Aw50E2q','mwzYksK','qxrgAxi','igL0igK','zsb0Age','zNbZ','i2zMogy','CKfrAwm','Ew5YEfG','CNnVCJO','vLvJq1y','yMeOmJu','WOJcK8kiWPxcIW','BNqTC2K','CMf3ugK','tw91C2u','v25hweO','ugvhuxy','DwLSzci','B2X2zwq','quvusLm','C21uExa','ChbLCIa','zxjZyc4','zxi7D2K','zhmGWRCG','ywnRihq','DxjHpc8','WPtcICktWOJcKW','zM9UDc0','DgHLBG','swDrtve','s1vsqs0','AvDzqNu','idrWEca','WOFcH8kmWOBcHG','WPlcImkqWOZcIa','B3jTihi','B3C6Aw4','DwKTBw8','ys5ZA2K','C2STyNq','r0TyvfO','zMnbreu','zM9Sza','zw5LBxK','oJPHzNq','mZjVAhbNC2W','BuntCgW','ywjLBhS','otLWEdS','DLjRC3q','EMXIyva','wYbHBMq','BgLKzxi','yxjLig4','ywrKAw4','nNb4o2i','EgPur1m','WPxcImkqWPlcKa','sgjxz2C','BMfTzq','ALvYtMq','AgLSza','AfDVqvG','ywXSvMu','werJwM4','ChbOAvi','yM90Aca','ihnPz24','zxzLCNK','Aw50BYa','icaGia','q0zhsgy','y0TrsLa','n2vLzJu','yM91BMq','igLZig4','AMjJEhK','nsWYntu','igzPzwW','zgL2','Awq7z3i','BI1PDgu','Axr5ic4','z3fNu2G','yw4+','ntuSmJu','D192mG','s29pt04','mtC3lc4','qKP2Dhy','zsb1C2u','t2Dvuu8','re9rqKW','zunetxK','DMfpz2i','yxnZtMe','AM9PBG','mcaWida','lNnRlwm','AwqGCMC','zw5Jzsa','AK1RsgS','v2LKDgG','q3DMBe0','C3vI','turTze4','mNm7Cg8','DvnPz0q','ktTIB3G','yYGXmda','DgvYE2W','zxHPC3q','zwn0ihC','D3jfsxG','EgLnuuG','Dg9W','nfnABM9dCq','t2L0wMG','u2fRDxi','CMf3qq','zM9UDdO','iIbTAw4','yNL0zuW','ksbZyxq','yNv0Dg8','WOFcKCkrWPdcKq','C3qY','B25Nig8','vMTOC0S','zxH0','Dg9Nz2W','if0GywW','uLnMCwq','B2PzAMG','B2XLig4','uMfMDue','lNnRlxi','v29YBgq','Bw4TDge','y2fUzgK','l3nWyw4','WPdcLCknWPdcIa','wMP0ru4','mhGYoa','WPxcKmktWPpcIG','ig9UBhK','BNqZmG','y29WEq','CgfUzwW','D2Tjv3q','kgXVyMi','ihjVDw4','WPpcKSktWPlcIq','WPxcISksWPhcIW','zNjrt2u','shPrAxi','yNvPBhq','seLwr1C','BNqTD2u','pc9ZCge','DcHHDxq','DdPUB24','ugHVDg8','qxfvBui','BMuUifq','As1TB24','wLHhDuC','imk3igzV','CMf3Aw4','BwvHBNm','EdTIB3i','zw50lwm','BLDzuxy','zNvhwe0','BwuGAw4','AwzovgK','sfveigq','B2DNzwq','oNrYyw4','ufjSt2O','ihrOAw4','lwzHBwK','z2v0vwK','zcbKAwe','Euv4rMm','uhzisK4','zNDK','z1nqrMK','y2u7y28','pgiGC3q','z3rMtgW','tefzrvi','uMPIsfO','CYbYzwC','Cg9Z','DgG9iJe','Axy+','uNfRC3i','uxvizhO','oIm4zdC','DgfU'];_0x2d8c=function(){return _0x38d81e;};return _0x2d8c();}function _0x23db(_0x3db846,_0xddd46f){_0x3db846=_0x3db846-(0x1207+0x142d+0x1240*-0x2);var _0x1661c0=_0x2d8c();var _0x258780=_0x1661c0[_0x3db846];if(_0x23db['xQUPxv']===undefined){var _0x1606ca=function(_0x7da3ed){var _0x4feb71='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5adbc9='',_0x2054ca='';for(var _0xbda44f=-0xddc+-0x337*0x2+0x144a*0x1,_0x18e17c,_0xaea11c,_0x1618cb=-0x51*0x2b+-0x5*-0x6c5+-0x143e;_0xaea11c=_0x7da3ed['charAt'](_0x1618cb++);~_0xaea11c&&(_0x18e17c=_0xbda44f%(0x1aac+0x1ad0+-0x76*0x74)?_0x18e17c*(0x60*-0x11+-0x20ff+-0xa1*-0x3f)+_0xaea11c:_0xaea11c,_0xbda44f++%(-0x26bb*-0x1+-0x480*0x8+-0x2b7))?_0x5adbc9+=String['fromCharCode'](-0xa6*-0x1+0x5a8+-0x54f&_0x18e17c>>(-(0x662+-0x40e*-0x7+0x6*-0x5cb)*_0xbda44f&-0x18b3+0x1*-0x7ba+0x2073)):0xe7b+-0x296*0x4+-0x423){_0xaea11c=_0x4feb71['indexOf'](_0xaea11c);}for(var _0x3bae56=-0x1d65+0x532+0x1833,_0x3427bb=_0x5adbc9['length'];_0x3bae56<_0x3427bb;_0x3bae56++){_0x2054ca+='%'+('00'+_0x5adbc9['charCodeAt'](_0x3bae56)['toString'](-0x358+-0x25*-0x51+0x84d*-0x1))['slice'](-(-0x1656*-0x1+0x61*-0x34+0x2a0*-0x1));}return decodeURIComponent(_0x2054ca);};_0x23db['lqyZxX']=_0x1606ca,_0x23db['xkCdEY']={},_0x23db['xQUPxv']=!![];}var _0x687b17=_0x1661c0[-0x249*0x11+0xf*-0x1d5+-0x14*-0x351],_0x11178a=_0x3db846+_0x687b17,_0x11e565=_0x23db['xkCdEY'][_0x11178a];return!_0x11e565?(_0x258780=_0x23db['lqyZxX'](_0x258780),_0x23db['xkCdEY'][_0x11178a]=_0x258780):_0x258780=_0x11e565,_0x258780;}(function(_0x5869f2,_0x3d00ff){var _0x42faa3=_0x23db,_0x3279bc=_0x5869f2();while(!![]){try{var _0x57773a=-parseInt(_0x42faa3(0xbce))/(-0x181d+0x10ba+0xb*0xac)*(parseInt(_0x42faa3(0x7df))/(-0x2*0xcfe+0xb4*0xe+0x1*0x1026))+parseInt(_0x42faa3(0xcda))/(0x1*0x890+0x1*0xa13+0x4a8*-0x4)*(-parseInt(_0x42faa3(0xc15))/(0x16f2+0x8*0x29c+-0x2bce))+parseInt(_0x42faa3(0x906))/(-0x67a+-0x10c6+-0x103*-0x17)+parseInt(_0x42faa3(0x1bb))/(-0x1d*0x11+-0xb69+-0x14*-0xab)+-parseInt(_0x42faa3(0x59d))/(-0x1*0xeff+0x10d*-0x16+0x2624)*(parseInt(_0x42faa3(0x9d9))/(0xf62*0x1+-0x42b+-0x1*0xb2f))+-parseInt(_0x42faa3(0xb40))/(-0x2c*0x21+-0x247d+0x1*0x2a32)+parseInt(_0x42faa3(0x4ea))/(0x1*-0x1cf3+0xc92+0x106b*0x1)*(parseInt(_0x42faa3(0x84c))/(0x1bb4+0x7*-0x15b+-0x2*0x916));if(_0x57773a===_0x3d00ff)break;else _0x3279bc['push'](_0x3279bc['shift']());}catch(_0x161334){_0x3279bc['push'](_0x3279bc['shift']());}}}(_0x2d8c,0xdbe0+0x9*-0xd49d+0xab670),((()=>{'use strict';var _0x3e9452=_0x23db,_0x2f44ee={'LKhLa':function(_0x31f2dd,_0x479a6c){return _0x31f2dd===_0x479a6c;},'ydGul':_0x3e9452(0x7e6),'koBLn':_0x3e9452(0xa48)+'e','gdokj':function(_0x5e6c59,_0xb996ab){return _0x5e6c59!==_0xb996ab;},'AobtY':_0x3e9452(0x6ac),'MTaEi':function(_0x5b292a){return _0x5b292a();},'SylWi':_0x3e9452(0xbae)+_0x3e9452(0x740),'cAozV':_0x3e9452(0x458),'wnzUc':function(_0x48a4a4,_0x28d099){return _0x48a4a4<_0x28d099;},'IqbQa':_0x3e9452(0x298),'uoVDL':_0x3e9452(0x743),'YFjZU':_0x3e9452(0x763),'eXqPM':'sakur'+'a-sw-'+_0x3e9452(0x2d2)+'b','MFLSB':function(_0x3205b5,_0x1a52ea){return _0x3205b5&&_0x1a52ea;},'FrjFh':_0x3e9452(0x630)+'|1|5|'+'4','rIfDP':'sakur'+'a','WAbSG':'div','cQcqe':function(_0x26ed7f,_0x5ef0bf){return _0x26ed7f+_0x5ef0bf;},'mAbum':_0x3e9452(0x98b)+'r-rad'+_0x3e9452(0xa2e)+_0x3e9452(0xbd1)+_0x3e9452(0x718)+_0x3e9452(0xcb7)+'x\x2012p'+'x;fon'+_0x3e9452(0x979)+'x/1.4'+_0x3e9452(0x302)+_0x3e9452(0x580)+'ace,C'+'onsol'+_0x3e9452(0xe0d)+_0x3e9452(0x242)+'ce;','rxgKa':'sakur'+'a-sw-'+'v2','htaMY':'style','EpHZo':'#saku'+_0x3e9452(0x4c6)+'-v2{a'+'ll:in'+_0x3e9452(0xc90)+'}','rvTlT':'color'+':','YtaXm':_0x3e9452(0x663),'yUoOu':_0x3e9452(0x9f2)+_0x3e9452(0xae8)+'20px)','XIsbw':function(_0x44f578,_0x5fe8aa){return _0x44f578(_0x5fe8aa);},'CFcyP':'snaps'+_0x3e9452(0xcbd),'prrJc':function(_0x2aeb4d,_0x1dcc3b){return _0x2aeb4d/_0x1dcc3b;},'PSUho':function(_0xb3deef,_0x19bd71){return _0xb3deef/_0x19bd71;},'dtqpf':'faYlP','oQVeC':function(_0x7d1033,_0x4bf6ff){return _0x7d1033===_0x4bf6ff;},'HjkjM':'#ff6e'+'74','AkpOJ':_0x3e9452(0x210),'YUPCW':_0x3e9452(0xd40),'QlPMF':'#7ee0'+'a8','LNNPq':_0x3e9452(0x9e4)+_0x3e9452(0x72c)+'d\x20·\x20','jbcxy':'#ffd4'+'8a','WFKUO':_0x3e9452(0xbff),'AYsfL':function(_0x24004,_0x5e3dff){return _0x24004+_0x5e3dff;},'zzemp':_0x3e9452(0x412)+'\x20·\x20','UyFXl':'Speed'+_0x3e9452(0x66b),'SkwHl':_0x3e9452(0x9de)+'1b','fAYVA':'KOPPP','JJXYw':'%c[sa'+'kura]'+'\x20Skil'+_0x3e9452(0xacf)+_0x3e9452(0x6ba)+'rt','lecCY':_0x3e9452(0xa94)+_0x3e9452(0x9f8)+_0x3e9452(0x828)+'0','OgUQO':function(_0x165555,_0x14a98c){return _0x165555+_0x14a98c;},'uToPz':function(_0x17a343,_0x259639){return _0x17a343-_0x259639;},'tFZxm':'i32','wrEIx':'mqEuj','IrFQW':_0x3e9452(0x342)+_0x3e9452(0xb62)+'rame\x20'+'never'+_0x3e9452(0x675)+_0x3e9452(0x316)+_0x3e9452(0x24c)+'e\x20rep'+_0x3e9452(0x621)+'\x0a','KduOh':_0x3e9452(0x5e4)+_0x3e9452(0x81c)+_0x3e9452(0xcd1)+'g\x20sus'+_0x3e9452(0xb1c)+_0x3e9452(0x899)+'\x0a\x0a','gIirS':'\x20\x201.\x20'+_0x3e9452(0xb13)+_0x3e9452(0x334)+_0x3e9452(0xa86)+'\x20not\x20'+_0x3e9452(0x297)+_0x3e9452(0x517)+_0x3e9452(0xbe6)+_0x3e9452(0x902)+_0x3e9452(0x4b7)+'origi'+_0x3e9452(0x984)+_0x3e9452(0xb6c),'AtrPf':function(_0x24c5b2,_0x3dc32a){return _0x24c5b2+_0x3dc32a;},'NqHpe':'backg'+'round'+_0x3e9452(0xd7c)+_0x3e9452(0x505)+'olor:'+_0x3e9452(0xaad)+_0x3e9452(0xd75)+_0x3e9452(0xd72)+_0x3e9452(0x7f3)+_0x3e9452(0x41a)+_0x3e9452(0xb8d)+_0x3e9452(0x3c4)+_0x3e9452(0xd95)+'7,.5)'+_0x3e9452(0x6c2)+_0x3e9452(0xa78)+'dius:'+_0x3e9452(0xa55),'DHrTQ':function(_0x21f884,_0x442327){return _0x21f884+_0x442327;},'hAcaU':function(_0x164608,_0x3a8a19){return _0x164608+_0x3a8a19;},'jUrNd':function(_0x2346d7,_0x3e8755){return _0x2346d7+_0x3e8755;},'XdzTK':_0x3e9452(0xc5e)+'yle=\x22'+_0x3e9452(0xe02)+':','cNgTN':'<butt'+_0x3e9452(0xc6a)+_0x3e9452(0x4ff)+'-copy'+_0x3e9452(0x1f7)+_0x3e9452(0x6bb)+'ispla'+_0x3e9452(0xcfe)+_0x3e9452(0x974)+_0x3e9452(0x22c)+'eft:a'+'uto;b'+'ackgr'+'ound:','Rqksr':_0x3e9452(0xa4a)+'>','NYAaT':'<div\x20'+_0x3e9452(0x62f)+_0x3e9452(0x455)+_0x3e9452(0x5e3)+'tyle='+'\x22disp'+_0x3e9452(0x659)+_0x3e9452(0x6ee)+'>','KMNyZ':_0x3e9452(0x658)+'on\x20id'+'=\x22sw2'+_0x3e9452(0x2ee)+_0x3e9452(0x1f7)+_0x3e9452(0x411)+_0x3e9452(0x64b)+_0x3e9452(0x37d)+'trans'+_0x3e9452(0x6e5)+_0x3e9452(0xd04)+_0x3e9452(0x6e9)+'px\x20so'+'lid\x20r'+_0x3e9452(0xcb9)+_0x3e9452(0xb44)+_0x3e9452(0x205)+_0x3e9452(0x518)+'color'+_0x3e9452(0x788)+_0x3e9452(0x47b)+_0x3e9452(0x55d)+_0x3e9452(0x31e)+'us:7p'+_0x3e9452(0xd3e)+'ding:'+'4px\x209'+_0x3e9452(0x37b)+'rsor:'+_0x3e9452(0xada)+_0x3e9452(0x23a)+_0x3e9452(0x990)+'hot\x20('+'F9)</'+_0x3e9452(0xc1d)+'n>','bLCql':_0x3e9452(0x7ea)+_0x3e9452(0x99d),'bQLEt':_0x3e9452(0x7ea)+'facto'+'rlabe'+'l','feZGp':_0x3e9452(0x7ea)+_0x3e9452(0x910),'fbMlr':_0x3e9452(0x613),'WuPtQ':function(_0x3264d0,_0x120bef){return _0x3264d0+_0x120bef;},'WDkWf':function(_0xd26dc0,_0x3bf221){return _0xd26dc0+_0x3bf221;},'bVtKY':_0x3e9452(0x8b0),'iLDsO':function(_0x2d459d,_0x320328){return _0x2d459d+_0x320328;},'KORUn':'\x20\x20\x20ty'+_0x3e9452(0x2aa),'htGRS':function(_0x48d344,_0x2726cd){return _0x48d344+_0x2726cd;},'NKSIM':_0x3e9452(0x593)+'ooks\x20'+_0x3e9452(0x694)+'on\x20th'+_0x3e9452(0xd66)+_0x3e9452(0x3f3)+_0x3e9452(0xd2e)+'date('+_0x3e9452(0x4f0)+_0x3e9452(0x980)+_0x3e9452(0x546)+_0x3e9452(0xa98)+_0x3e9452(0xc4a),'Anoyc':'RVOCB','SmIII':_0x3e9452(0x8ba),'wOoNH':function(_0x5322f1,_0x4e139c){return _0x5322f1===_0x4e139c;},'eZIPs':function(_0x2eb3b4,_0x7c1ad9){return _0x2eb3b4/_0x7c1ad9;},'GuqEr':function(_0x5ea2ee,_0x3224ab){return _0x5ea2ee*_0x3224ab;},'EYKNF':'warni'+_0x3e9452(0xb4b),'naNYY':'qHhrB','CFGHf':_0x3e9452(0x67d),'bGTNh':'eeJun','ifNTi':function(_0x281e5a){return _0x281e5a();},'hWoAX':function(_0x3bd6dc,_0x16abb9){return _0x3bd6dc+_0x16abb9;},'gIpzp':function(_0x5e2637,_0x40e236){return _0x5e2637+_0x40e236;},'MXAnd':_0x3e9452(0xc28),'NfMGh':function(_0x130126,_0x21f681,_0x501cd2){return _0x130126(_0x21f681,_0x501cd2);},'IgQMQ':'sVUCv','jgHYY':function(_0x48cee8,_0xacf0a4){return _0x48cee8===_0xacf0a4;},'ARkoa':function(_0x4dd307,_0x725f09){return _0x4dd307===_0x725f09;},'yPUHU':_0x3e9452(0xb3f)+'ion','LhnuM':'log','NfOPk':'warn','jZeLF':_0x3e9452(0x392),'zrqag':'iWoxT','rwSBr':_0x3e9452(0xd84)+'ntiat'+_0x3e9452(0x88b)+'aming','XdHCH':function(_0x41a90c){return _0x41a90c();},'fkCzf':function(_0x5f155d,_0x238b92){return _0x5f155d+_0x238b92;},'tnxNr':function(_0x2c5ecc){return _0x2c5ecc();},'mdTwC':_0x3e9452(0x7d3)+_0x3e9452(0xe04)+_0x3e9452(0xdc4)+_0x3e9452(0x637)+'\x20unav'+'ailab'+'le','nGecM':function(_0x448ce8,_0x5226b2){return _0x448ce8|_0x5226b2;},'ngqZh':function(_0x4d1828,_0x2cc8c3){return _0x4d1828!==_0x2cc8c3;},'ssgVJ':function(_0x2dda29,_0x1843a9){return _0x2dda29!==_0x1843a9;},'xiMQH':function(_0x1a55ba,_0x34ea47){return _0x1a55ba+_0x34ea47;},'zgzqO':_0x3e9452(0x2df),'fENVD':function(_0x48fbdd,_0x34dafd,_0x31b1e5,_0x49c576){return _0x48fbdd(_0x34dafd,_0x31b1e5,_0x49c576);},'NYvnh':_0x3e9452(0x253)+'ody','yOSBh':'cOKEj','gMrAV':_0x3e9452(0xb88),'eFuGN':_0x3e9452(0xd50)+_0x3e9452(0x909)+'ntime'+_0x3e9452(0xa35)+_0x3e9452(0x2e0)+_0x3e9452(0x4e2),'HZvWo':function(_0x35cbbb,_0x3d75c3){return _0x35cbbb===_0x3d75c3;},'fHkrZ':_0x3e9452(0x7d3)+'me._g'+_0x3e9452(0x847),'LpuNH':_0x3e9452(0xb98)+_0x3e9452(0xcd2)+'bal','TxqMH':_0x3e9452(0xbd9),'Xhnmj':'dpXYq','HIVGW':function(_0x429dfa,_0x487cb0){return _0x429dfa!==_0x487cb0;},'BaMSk':_0x3e9452(0x8dc)+'le','CBXLB':'insta'+_0x3e9452(0x1dd)+_0x3e9452(0x42c)+_0x3e9452(0xa92)+'s.mem'+_0x3e9452(0x800),'BJvtv':function(_0x386a6e,_0x56173e){return _0x386a6e>_0x56173e;},'HAXPp':_0x3e9452(0xb7b),'nwCLJ':_0x3e9452(0x3af),'fkfVN':'u32','dfwro':function(_0x27f839){return _0x27f839();},'dpHEx':'f32','GWjfN':function(_0x4ddba3,_0x26c540){return _0x4ddba3<_0x26c540;},'pzNey':_0x3e9452(0xd17)+_0x3e9452(0x766),'ZoJpm':function(_0x5c004b,_0x5cf9bc){return _0x5c004b+_0x5cf9bc;},'jHwSx':function(_0x2bb7c8,_0x2b81f7){return _0x2bb7c8!==_0x2b81f7;},'fiiio':_0x3e9452(0xc54),'suReB':function(_0x486137,_0x1d936a){return _0x486137&_0x1d936a;},'ZEVFZ':_0x3e9452(0x256),'UwDoR':'obfI','iFOKr':function(_0x395c39,_0x164d9f){return _0x395c39|_0x164d9f;},'CBZGa':function(_0x206aea,_0x233547){return _0x206aea^_0x233547;},'ShRPH':function(_0x3ccb9c,_0x2afa55){return _0x3ccb9c+_0x2afa55;},'OXvAz':function(_0x136d61,_0x3f552d){return _0x136d61+_0x3f552d;},'ynwpn':function(_0x1d931b,_0x480023){return _0x1d931b+_0x480023;},'uELII':function(_0x1f0b10,_0x1fe291){return _0x1f0b10+_0x1fe291;},'YwumT':function(_0x501d89,_0x1e4e57,_0x38e394){return _0x501d89(_0x1e4e57,_0x38e394);},'IEHHX':function(_0x4ebf57,_0x46dbe7){return _0x4ebf57+_0x46dbe7;},'pYMhO':function(_0x2e52bc,_0x40290e){return _0x2e52bc===_0x40290e;},'Ratbm':function(_0x220d8e,_0x3f2ab9){return _0x220d8e||_0x3f2ab9;},'fdlQs':function(_0x1a22e7,_0x14f4b7){return _0x1a22e7===_0x14f4b7;},'YsFOW':function(_0x524d14,_0x5ae747){return _0x524d14(_0x5ae747);},'AJeMe':function(_0x49f67a,_0x1b35c4){return _0x49f67a===_0x1b35c4;},'BVNBL':function(_0x12c993,_0x30349a,_0x4f8135,_0x425086){return _0x12c993(_0x30349a,_0x4f8135,_0x425086);},'egFsY':function(_0x2753f1,_0x3153a2){return _0x2753f1===_0x3153a2;},'iRguD':function(_0x58c97f,_0x54544a){return _0x58c97f===_0x54544a;},'SVYWY':function(_0xd56bb4,_0xfe409c){return _0xd56bb4&_0xfe409c;},'fqiMf':function(_0x3b0e57,_0x149a93){return _0x3b0e57+_0x149a93;},'kCVCx':function(_0x234a6d,_0x1d680c){return _0x234a6d===_0x1d680c;},'Gtigk':function(_0x227abc,_0xf6f770){return _0x227abc+_0xf6f770;},'uSImh':function(_0x27f801,_0x44be10,_0x4b1fcf,_0x5637b6){return _0x27f801(_0x44be10,_0x4b1fcf,_0x5637b6);},'YxQgJ':function(_0x3f7c0f,_0x42b807){return _0x3f7c0f!==_0x42b807;},'lrCsM':_0x3e9452(0x999)+_0x3e9452(0x7b8)+'e','qLRpi':function(_0x464af1,_0x2fc087){return _0x464af1<_0x2fc087;},'fGmck':function(_0x14017b,_0x59b703){return _0x14017b>_0x59b703;},'ktSpA':function(_0x58a7f8,_0x2b3b1d){return _0x58a7f8<_0x2b3b1d;},'AmvcS':function(_0x3bff1b,_0x4bbee9){return _0x3bff1b>=_0x4bbee9;},'SdJFB':function(_0x12499e,_0x585bfd){return _0x12499e+_0x585bfd;},'wEGtw':_0x3e9452(0x2d3)+'oup\x20o'+'f\x20','HRSUy':'\x20Obsc'+_0x3e9452(0x585)+_0x3e9452(0xdaf)+'\x20agre'+'ed','PnbdU':function(_0x1a87f7,_0x1db874){return _0x1a87f7<_0x1db874;},'wzGZG':function(_0x1e954c,_0x389832){return _0x1e954c*_0x389832;},'ttYvt':function(_0x56f6b2,_0x221ef6){return _0x56f6b2*_0x221ef6;},'tDCTV':function(_0x390d12,_0x86e3d6,_0x5d06e6,_0x20dff9,_0x5f5461){return _0x390d12(_0x86e3d6,_0x5d06e6,_0x20dff9,_0x5f5461);},'MDmKU':_0x3e9452(0x25e),'egsTt':'backg'+_0x3e9452(0x716)+':rgba'+'(21,1'+_0x3e9452(0x37a)+_0x3e9452(0xaf2)+_0x3e9452(0x55d)+':1px\x20'+_0x3e9452(0xc8c)+'\x20rgba'+'(255,'+'143,1'+'77,.5'+');col'+_0x3e9452(0xdd1),'MkHTl':function(_0x23d0d6,_0x464446){return _0x23d0d6===_0x464446;},'xcxsK':function(_0xed39e0,_0x507c00){return _0xed39e0>_0x507c00;},'dmEYh':function(_0x407a3b,_0x46fc80){return _0x407a3b<_0x46fc80;},'sNJtQ':function(_0xe5aa86,_0x231d4d){return _0xe5aa86===_0x231d4d;},'ChdVr':function(_0x434f8a,_0x4baaed){return _0x434f8a-_0x4baaed;},'VSSYe':function(_0x4f73c2,_0x5d682d){return _0x4f73c2+_0x5d682d;},'axHdx':function(_0x41411b,_0x43c879){return _0x41411b!==_0x43c879;},'kwtVH':_0x3e9452(0xa2c),'iWYBu':function(_0x51797d,_0x5bec6d){return _0x51797d!==_0x5bec6d;},'etrPc':function(_0x1b5055,_0x545e6a,_0x4365f9){return _0x1b5055(_0x545e6a,_0x4365f9);},'gHojm':function(_0x407e25,_0x44f5c9){return _0x407e25===_0x44f5c9;},'NqDLb':function(_0xf366bd,_0x2d93b7,_0xe45b08){return _0xf366bd(_0x2d93b7,_0xe45b08);},'aocsm':function(_0x42edea,_0x3a029c){return _0x42edea(_0x3a029c);},'uTaYh':_0x3e9452(0x50a),'JRuUN':function(_0x55e427,_0x4c697c){return _0x55e427!==_0x4c697c;},'Jeqvi':function(_0x4a7206,_0x46cbc9){return _0x4a7206>_0x46cbc9;},'Wmren':function(_0x3bb6be,_0x14df45){return _0x3bb6be===_0x14df45;},'MDmdN':_0x3e9452(0x71a)+'r','FcNxZ':function(_0xfb2d72,_0x2e8d29){return _0xfb2d72<=_0x2e8d29;},'LiSvV':_0x3e9452(0x1e7),'WXDrP':_0x3e9452(0xbe3)+_0x3e9452(0xbeb)+'ed','fyUNI':'gYWHI','GeHQc':function(_0x4920d3,_0x1b430d){return _0x4920d3!==_0x1b430d;},'SDxlI':_0x3e9452(0x70e),'axDPk':function(_0x3bf72e,_0x346766){return _0x3bf72e!==_0x346766;},'Dsyxb':function(_0x1c7364,_0x5eb4fc){return _0x1c7364===_0x5eb4fc;},'TkFfJ':function(_0x4e6aa6,_0x43e88c){return _0x4e6aa6===_0x43e88c;},'iFkjw':_0x3e9452(0x8a6),'rypin':function(_0x4417c3){return _0x4417c3();},'UzTEB':function(_0x18bb80,_0x2bd393){return _0x18bb80<_0x2bd393;},'bhOCH':function(_0x4d9b50,_0x3b3346){return _0x4d9b50!==_0x3b3346;},'acaYT':function(_0x91b2a5,_0x11584a){return _0x91b2a5*_0x11584a;},'wDvxa':function(_0x5a56c8,_0x52312a){return _0x5a56c8+_0x52312a;},'GVyAj':_0x3e9452(0x64e),'zzKZH':function(_0x231f7a,_0x466ccf,_0x369466){return _0x231f7a(_0x466ccf,_0x369466);},'UDQJr':function(_0x122a82,_0x2eb85c){return _0x122a82>>>_0x2eb85c;},'HYpey':function(_0x1da6b1,_0x52606b){return _0x1da6b1!==_0x52606b;},'ujFPY':_0x3e9452(0x495)+_0x3e9452(0x777)+_0x3e9452(0xa10)+'c','qeKcl':function(_0x326866,_0x1ef286){return _0x326866<_0x1ef286;},'DlCZd':function(_0x1437b5,_0x13a866){return _0x1437b5<_0x13a866;},'MRQwW':function(_0x4e63a7,_0x49a651){return _0x4e63a7+_0x49a651;},'uyIhY':'giKsd','wmAFm':_0x3e9452(0xce5),'PMSTy':'NPC_C'+_0x3e9452(0xa25)+_0x3e9452(0x660),'BuMpM':function(_0x2918e3,_0x3d8c35,_0x5436ec){return _0x2918e3(_0x3d8c35,_0x5436ec);},'nxBSP':_0x3e9452(0x7d1)+'hScri'+'pt','FmbTY':function(_0x161c95,_0x4b5810){return _0x161c95<_0x4b5810;},'giNfE':function(_0x553b97,_0x6e47ee){return _0x553b97<_0x6e47ee;},'Gpjcv':'FhwBE','pEgUc':function(_0x2d21be,_0x28ae68,_0x6979b2){return _0x2d21be(_0x28ae68,_0x6979b2);},'plDFV':function(_0x4c471a,_0x642474){return _0x4c471a+_0x642474;},'vvZtD':_0x3e9452(0x554),'zmDNH':function(_0x46c063,_0x3f5027){return _0x46c063!==_0x3f5027;},'yRrip':'nPlaA','CfAwn':_0x3e9452(0x5a5)+_0x3e9452(0x8d4)+_0x3e9452(0xb9a)+_0x3e9452(0x6e6)+_0x3e9452(0x97a)+_0x3e9452(0x22f)+_0x3e9452(0xa25)+_0x3e9452(0x7fc)+_0x3e9452(0xac4)+_0x3e9452(0x41f)+_0x3e9452(0xa31)+_0x3e9452(0x764)+'That\x20'+_0x3e9452(0x213)+_0x3e9452(0x6c7),'IyAUP':function(_0x1e5f40,_0x1595a0){return _0x1e5f40+_0x1595a0;},'tHNdH':'void','qKWzW':'kmPkX','RgXOL':function(_0xe39a56,_0x1bb18c){return _0xe39a56(_0x1bb18c);},'IeHML':function(_0x30fbf9,_0x5de8d3){return _0x30fbf9<_0x5de8d3;},'RjbHZ':'obf','zEoBi':function(_0x29fdfc,_0x5002fb){return _0x29fdfc===_0x5002fb;},'EJxbM':function(_0x4439e7,_0x216402){return _0x4439e7===_0x216402;},'OcjUM':function(_0x462843,_0x5c80ee){return _0x462843===_0x5c80ee;},'abLVX':function(_0x5cb63c,_0x42f70b){return _0x5cb63c===_0x42f70b;},'WKIaR':function(_0x3cd32c,_0x43a4df,_0x1bec18,_0x38de08){return _0x3cd32c(_0x43a4df,_0x1bec18,_0x38de08);},'tAuWY':function(_0x5c0190,_0x744dde){return _0x5c0190+_0x744dde;},'CSJvG':function(_0x374f33,_0x5a0cc7){return _0x374f33*_0x5a0cc7;},'eyZgj':function(_0x4cf6b6,_0x411ea3){return _0x4cf6b6>_0x411ea3;},'Rguwb':function(_0x2c2c73,_0x5f0325){return _0x2c2c73*_0x5f0325;},'GLpDz':function(_0xf45657,_0x35b91d){return _0xf45657<_0x35b91d;},'fuGXM':function(_0x5d6c20,_0x1da736,_0x35be0d,_0x5f3d04){return _0x5d6c20(_0x1da736,_0x35be0d,_0x5f3d04);},'OIWkW':function(_0x8384e5,_0x3a16ae){return _0x8384e5+_0x3a16ae;},'AMAhm':function(_0x3d9b99,_0x1df942){return _0x3d9b99+_0x1df942;},'BrWfC':function(_0x5df352,_0x5cdd34){return _0x5df352+_0x5cdd34;},'sgHEi':function(_0x374e10,_0xd5e326){return _0x374e10+_0xd5e326;},'NIckn':function(_0x51c11f,_0x271227){return _0x51c11f+_0x271227;},'kLUTI':_0x3e9452(0x576),'saXqO':'\x20hex=','yRZKI':'SVkvn','jmvQE':_0x3e9452(0x39d),'afXZZ':_0x3e9452(0x645),'oWeYm':_0x3e9452(0x384)+_0x3e9452(0x642)+_0x3e9452(0x9e9)+_0x3e9452(0x9f3),'HtSlY':function(_0x4317e2,_0x508d53){return _0x4317e2!==_0x508d53;},'MUNPS':function(_0x61a0b1,_0x1f0993){return _0x61a0b1-_0x1f0993;},'nkmQh':_0x3e9452(0x528),'xYfNR':_0x3e9452(0xab0)+'|1|4|'+'2','fklhq':function(_0x2f63c0,_0x2e676b){return _0x2f63c0===_0x2e676b;},'QYcTL':_0x3e9452(0xd73),'ugyjm':'no\x20HE'+'APU8\x20'+_0x3e9452(0x9b6)+_0x3e9452(0x201)+'stanc'+'e\x20not'+_0x3e9452(0x305)+_0x3e9452(0x769)+_0x3e9452(0xb59)+'Runti'+_0x3e9452(0xdb3)+'solve'+_0x3e9452(0x20d)+_0x3e9452(0xc8f)+_0x3e9452(0x816)+_0x3e9452(0x446)+'\x20glob'+'al','fEcuM':_0x3e9452(0xaf9),'PrETh':_0x3e9452(0xc71)+'Insta'+_0x3e9452(0x57f),'PXQAn':'unity'+_0x3e9452(0x815),'ZeDut':function(_0x27d2d4,_0x19fa2f){return _0x27d2d4<_0x19fa2f;},'QEHUs':function(_0x5d5684,_0x59d3e1){return _0x5d5684===_0x59d3e1;},'UPtnc':_0x3e9452(0x41b),'EEKnt':function(_0x4a17e8,_0xecedf2){return _0x4a17e8<_0xecedf2;},'PVqCA':_0x3e9452(0x3ca),'Fxmgk':function(_0x19cf2c,_0x5f81c2){return _0x19cf2c===_0x5f81c2;},'nKelu':'speed','faTgL':function(_0x51bcef,_0x4102be,_0x24e727){return _0x51bcef(_0x4102be,_0x24e727);},'AETJS':function(_0x221efd){return _0x221efd();},'jubIE':function(_0x2b0ef8,_0x17f35a,_0xc969dd){return _0x2b0ef8(_0x17f35a,_0xc969dd);},'aTKLc':function(_0x335cde,_0x3e6b07){return _0x335cde!==_0x3e6b07;},'TDHgZ':_0x3e9452(0xcf8),'wTLSB':'ojsuJ','OBOAn':function(_0x2d14a0){return _0x2d14a0();},'lHrBb':function(_0x3ae462,_0x415faf,_0x32c027){return _0x3ae462(_0x415faf,_0x32c027);},'NjJAV':function(_0x26afc4,_0x269ebe){return _0x26afc4(_0x269ebe);},'TRfsg':function(_0x2918ea,_0x1a38fd,_0x581b45){return _0x2918ea(_0x1a38fd,_0x581b45);},'mSMIC':_0x3e9452(0x9f1)+_0x3e9452(0xc75)+'hud-c'+'ss','KoOON':'#saku'+_0x3e9452(0x4c6)+'-hud{'+'all:i'+'nitia'+'l}','fnoQu':_0x3e9452(0xa29)+_0x3e9452(0x441)+_0x3e9452(0xa72)+_0x3e9452(0x3b1)+_0x3e9452(0x9f6)+_0x3e9452(0x784)+_0x3e9452(0x225)+_0x3e9452(0x8e2)+'ex:21'+'47483'+_0x3e9452(0xafd)+_0x3e9452(0x5e8)+_0x3e9452(0xa4e)+_0x3e9452(0x57b)+'x-dir'+'ectio'+_0x3e9452(0xde8)+_0x3e9452(0x40c)+_0x3e9452(0xe10)+'x;','lxTrk':_0x3e9452(0x508)+'hadow'+_0x3e9452(0x2a6)+'px\x2030'+'px\x20-1'+_0x3e9452(0x95b)+'000;u'+'ser-s'+_0x3e9452(0x969)+':none'+_0x3e9452(0x2f5)+_0x3e9452(0xd32)+_0x3e9452(0x598)+_0x3e9452(0x969)+_0x3e9452(0x888)+';','jtKmu':'<div\x20'+_0x3e9452(0x206)+_0x3e9452(0x3b7)+_0x3e9452(0xd5e)+'yle=\x22'+'color'+_0x3e9452(0xc68)+_0x3e9452(0xd0c)+_0x3e9452(0x99a)+_0x3e9452(0x8a7)+'90px;'+_0x3e9452(0xdc2)+_0x3e9452(0xc65),'CUYEc':function(_0x2591e0,_0x1def2e){return _0x2591e0+_0x1def2e;},'sAVQI':function(_0x3bdfdb,_0x1ecdce){return _0x3bdfdb+_0x1ecdce;},'XLouP':function(_0x2f8a02,_0x37924d){return _0x2f8a02+_0x37924d;},'IBxXs':function(_0x3f827a,_0x3d7229){return _0x3f827a+_0x3d7229;},'UYDRy':function(_0x4bdbbc,_0x1af4d4){return _0x4bdbbc+_0x1af4d4;},'YGBDB':function(_0x12293e,_0x17e32b){return _0x12293e+_0x17e32b;},'IkRmk':_0x3e9452(0xe02)+_0x3e9452(0x788)+_0x3e9452(0x47b)+_0x3e9452(0x55d)+_0x3e9452(0x31e)+_0x3e9452(0x967)+'x;pad'+'ding:'+'2px\x208'+_0x3e9452(0x37b)+_0x3e9452(0xba8)+_0x3e9452(0xada)+_0x3e9452(0x61e)+_0x3e9452(0xb4e)+_0x3e9452(0x5d6)+_0x3e9452(0xd57)+'eed\x20o'+'ff</b'+_0x3e9452(0x7ce)+'>','Ibkdd':'color'+_0x3e9452(0x788)+'ef5;b'+_0x3e9452(0x55d)+_0x3e9452(0x31e)+'us:6p'+_0x3e9452(0xd3e)+'ding:'+'1px\x206'+'px;cu'+_0x3e9452(0xba8)+_0x3e9452(0xada)+_0x3e9452(0x61e)+_0x3e9452(0xb4e)+'herit'+';\x22>-<'+_0x3e9452(0x957)+'on>','eLsUb':'<div\x20'+'data-'+_0x3e9452(0x3b7)+_0x3e9452(0x1f7)+_0x3e9452(0x839)+_0x3e9452(0x2f2)+_0x3e9452(0x87b)+_0x3e9452(0x1c8)+_0x3e9452(0xe03)+'th:29'+'0px;\x22'+'></di'+'v>','iAASi':_0x3e9452(0xc1f),'EVAJx':function(_0x5ef52b,_0x59ba3a){return _0x5ef52b(_0x59ba3a);},'LNuGy':_0x3e9452(0xb74),'xzvng':_0x3e9452(0xbcb),'viwPX':function(_0x320bae,_0x489714){return _0x320bae===_0x489714;},'RElEU':'kbjan','DZssI':'%c[sa'+_0x3e9452(0x821)+_0x3e9452(0x208)+'rame\x20'+_0x3e9452(0xc51)+_0x3e9452(0x2eb)+'ed','YSJsY':function(_0x36d048,_0x441a3f){return _0x36d048+_0x441a3f;},'yRwGS':_0x3e9452(0x4f3),'XysVn':_0x3e9452(0x26e)+'ff','tOSRi':'ESP\x20b'+'oth','NlRrq':'ESP\x20m'+'ap','Fiutx':_0x3e9452(0x5e0)+_0x3e9452(0x6e5)+'t','xinUM':function(_0x26bf92){return _0x26bf92();},'BtRFd':function(_0x480d5f){return _0x480d5f();},'KbfbY':_0x3e9452(0xa9e),'Hyanc':function(_0x4f06a9,_0x595eb3){return _0x4f06a9+_0x595eb3;},'xsmnm':function(_0x12011d,_0x1e3aa2){return _0x12011d*_0x1e3aa2;},'raPWj':_0x3e9452(0x51a),'nOnWT':function(_0x5a184a,_0x3596c6){return _0x5a184a===_0x3596c6;},'RUXTU':'ietHm','qsoWD':'#f7ee'+'f5','UjoCK':'hbDkG','dsplV':_0x3e9452(0x799),'umoAc':_0x3e9452(0x6cd)+'m','cFShH':function(_0x11fdf5,_0x7ca720){return _0x11fdf5+_0x7ca720;},'dhOwI':function(_0x318c1c,_0x5aada8){return _0x318c1c+_0x5aada8;},'TZzfA':function(_0x563b89,_0x1b9343){return _0x563b89+_0x1b9343;},'zYeNr':function(_0xc6f2f0,_0x319db0){return _0xc6f2f0+_0x319db0;},'bODsr':function(_0x7b5bcf,_0x59da2b){return _0x7b5bcf!==_0x59da2b;},'Ipoqy':function(_0x27ab79,_0x109e59){return _0x27ab79+_0x109e59;},'ueBts':function(_0x5e1cc5,_0x2a64d7){return _0x5e1cc5+_0x2a64d7;},'JjKKr':_0x3e9452(0xb08)+_0x3e9452(0x363),'EtaNC':_0x3e9452(0x7a2)+'\x20','IGiFW':'\x20\x20cam'+'\x20-','oxLrN':function(_0x2c0e20){return _0x2c0e20();},'ezcTC':function(_0x4da109,_0x4a6992){return _0x4da109-_0x4a6992;},'acmgF':function(_0x1a30f1,_0x3391e8){return _0x1a30f1*_0x3391e8;},'inlXr':function(_0xae8311,_0xd1f862){return _0xae8311+_0xd1f862;},'oGhnH':function(_0x5033a0,_0x2d1e17){return _0x5033a0/_0x2d1e17;},'JsIMQ':function(_0x2aeeb8,_0x4fa45e){return _0x2aeeb8/_0x4fa45e;},'pgVWA':function(_0x3452ac,_0x5e089c){return _0x3452ac-_0x5e089c;},'iBjyN':function(_0x2a5e96,_0x285195){return _0x2a5e96*_0x285195;},'mmViz':function(_0x115a3e,_0x2ed7ea){return _0x115a3e===_0x2ed7ea;},'ylGQC':function(_0x471172,_0x14904b,_0xc63489){return _0x471172(_0x14904b,_0xc63489);},'zlapj':function(_0x3e8d8a,_0x5da8e2){return _0x3e8d8a===_0x5da8e2;},'sDaka':function(_0x3bf974,_0x35f740){return _0x3bf974===_0x35f740;},'uhlCO':_0x3e9452(0x9e0)+'etLef'+'t','GtjAy':function(_0xe3687){return _0xe3687();},'ezxHa':_0x3e9452(0x7a8),'VbGbo':function(_0x2172d8,_0x5cb7e8){return _0x2172d8+_0x5cb7e8;},'bsvCw':function(_0x58f7d2,_0x46cd8f){return _0x58f7d2(_0x46cd8f);},'Ksbmk':'objec'+'t','DYnce':function(_0x8d05c,_0x480387){return _0x8d05c-_0x480387;},'Iwroz':function(_0x4ac5e9,_0x4978df){return _0x4ac5e9(_0x4978df);},'beRnu':function(_0x5361fc,_0x2007d6){return _0x5361fc<_0x2007d6;},'PJrWM':function(_0x219772,_0x30aef0){return _0x219772>_0x30aef0;},'IwCom':function(_0x343c1f,_0x1b7090){return _0x343c1f+_0x1b7090;},'AuyxV':'mallo'+_0x3e9452(0x8fc),'yQUXh':'abnaS','wOWtt':function(_0x4fb057,_0x2bc4e5){return _0x4fb057*_0x2bc4e5;},'EGVOH':function(_0x475098,_0x1ed0b1){return _0x475098-_0x1ed0b1;},'vRkst':function(_0x2de6cb,_0x1dc0b6){return _0x2de6cb*_0x1dc0b6;},'XwRBW':function(_0x50e91f,_0x4680da){return _0x50e91f-_0x4680da;},'hLlxU':function(_0xcffb0a,_0x51db3c){return _0xcffb0a+_0x51db3c;},'fUZMv':function(_0x1f8956,_0x31fc33){return _0x1f8956*_0x31fc33;},'wVkVl':function(_0x568794,_0xc09cda){return _0x568794+_0xc09cda;},'stgcC':function(_0x329108,_0x42ffdc){return _0x329108*_0x42ffdc;},'kQcOS':function(_0x15a0e4,_0x38a25e){return _0x15a0e4*_0x38a25e;},'gPiUT':function(_0x4fb169,_0x36bc69){return _0x4fb169*_0x36bc69;},'bcPNf':function(_0x5bd2b7,_0x58416e){return _0x5bd2b7===_0x58416e;},'rrFyb':function(_0x55a7a0,_0x1ad89e){return _0x55a7a0+_0x1ad89e;},'LmxXU':function(_0x5aaed4,_0x4d2144){return _0x5aaed4(_0x4d2144);},'bYfnr':_0x3e9452(0xca6)+_0x3e9452(0x7a6)+_0x3e9452(0x4f8)+'er','zfsUd':'get_f'+_0x3e9452(0x49d)+'fView','tGFyk':function(_0x304b59,_0x4b01ca){return _0x304b59(_0x4b01ca);},'YJxdF':function(_0x3aab51,_0x11500b){return _0x3aab51>_0x11500b;},'PvDmN':'Trans'+_0x3e9452(0x840),'qImQM':function(_0x3836ce,_0x11505d,_0xec80fb){return _0x3836ce(_0x11505d,_0xec80fb);},'daTWQ':function(_0x499c9d,_0xaf6bfd,_0x41444e,_0x48cc55){return _0x499c9d(_0xaf6bfd,_0x41444e,_0x48cc55);},'KTKNz':'get_p'+_0x3e9452(0x714)+'on','DmZUT':function(_0xf36ecc,_0x487635,_0x2a5ba4){return _0xf36ecc(_0x487635,_0x2a5ba4);},'hjisR':function(_0x2a1e86,_0x5443a1){return _0x2a1e86===_0x5443a1;},'lPYte':function(_0x3b07a2,_0x5731b3){return _0x3b07a2===_0x5731b3;},'OiXKm':function(_0x26e89b,_0x1b5bde){return _0x26e89b<_0x1b5bde;},'PKJgX':_0x3e9452(0x708)+'a\x20tra'+_0x3e9452(0x7ae)+'m','ESWmh':_0x3e9452(0x74b),'YRIyL':function(_0x3a70ac,_0x3578cd){return _0x3a70ac+_0x3578cd;},'rZtmJ':'rotat'+_0x3e9452(0x282)+_0x3e9452(0x4ed)+'le\x20(|'+'q|=','gISTC':_0x3e9452(0x5f4)+_0x3e9452(0xd3c)+'ov','tToIB':function(_0xf307af,_0x41546a){return _0xf307af===_0x41546a;},'wyRwr':function(_0xd0e5c0,_0x279ccd){return _0xd0e5c0<_0x279ccd;},'uSVFb':function(_0x2c8b62,_0x5eda1f){return _0x2c8b62-_0x5eda1f;},'AtNkn':function(_0x1d556f,_0x186516){return _0x1d556f>_0x186516;},'HlMkr':function(_0x35e648,_0x288158){return _0x35e648<_0x288158;},'dUlWL':function(_0x4aeaeb,_0x103b75){return _0x4aeaeb+_0x103b75;},'YmsTD':_0x3e9452(0x9dc),'fQRJb':'TtTPa','IXsjr':function(_0x25bfce,_0x2c000a){return _0x25bfce-_0x2c000a;},'QzeLw':function(_0x199a94,_0x1fed27){return _0x199a94+_0x1fed27;},'ZlLma':_0x3e9452(0x6a7)+_0x3e9452(0x1b5)+_0x3e9452(0x38d)+'t','pBrzj':function(_0x1d9d7b,_0x180f09,_0x453b18){return _0x1d9d7b(_0x180f09,_0x453b18);},'McsXr':function(_0x24add5,_0xa19844){return _0x24add5(_0xa19844);},'kPRQD':function(_0x570a33,_0x36eb6c){return _0x570a33(_0x36eb6c);},'LvwiL':function(_0x22d750,_0x24d5bf){return _0x22d750+_0x24d5bf;},'IEYfe':function(_0x143b26,_0x269883){return _0x143b26<=_0x269883;},'umzoV':function(_0xeff568,_0x2aa3b6){return _0xeff568+_0x2aa3b6;},'DNZgs':function(_0x3f1b10,_0x26b4a3,_0x7a022c){return _0x3f1b10(_0x26b4a3,_0x7a022c);},'BfWcD':function(_0x28eda0,_0x17678a){return _0x28eda0+_0x17678a;},'JWyHU':_0x3e9452(0x695),'ifObr':_0x3e9452(0xb01)+_0x3e9452(0xcb6)+_0x3e9452(0x6e3)+_0x3e9452(0x618),'AnTHu':function(_0x5947e5,_0x5bde6f){return _0x5947e5(_0x5bde6f);},'njrhX':function(_0x2fc32a,_0x594765){return _0x2fc32a(_0x594765);},'mutre':'xbbFN','lalMr':function(_0x1f69e7,_0x51033b,_0x4f833f){return _0x1f69e7(_0x51033b,_0x4f833f);},'ylbrg':function(_0x53a08a,_0x3ca1e3){return _0x53a08a!==_0x3ca1e3;},'pgxdU':_0x3e9452(0xa8a),'YYTzc':_0x3e9452(0x7f4),'cjknd':function(_0x122f82,_0x194f2f){return _0x122f82!==_0x194f2f;},'joqtf':'qXIAA','GCEvK':function(_0x693ac6,_0x470ac4){return _0x693ac6/_0x470ac4;},'seLoZ':function(_0x179005,_0x48100a){return _0x179005*_0x48100a;},'tDxIC':function(_0x5084ec,_0x49f1f5){return _0x5084ec*_0x49f1f5;},'hMWzB':function(_0x39b3df,_0x424297){return _0x39b3df-_0x424297;},'DtdII':function(_0x4c60fe,_0x9da99f){return _0x4c60fe*_0x9da99f;},'OitZh':function(_0x1f3999,_0x5bf376){return _0x1f3999*_0x5bf376;},'eqniv':function(_0x11e6fe,_0x31310f){return _0x11e6fe+_0x31310f;},'dbUoh':function(_0x304213,_0x1d09c6){return _0x304213*_0x1d09c6;},'xMFPJ':function(_0x30bf06,_0x82f1f6){return _0x30bf06/_0x82f1f6;},'bbtYX':function(_0x5ea770,_0x2a9c36){return _0x5ea770>_0x2a9c36;},'JGeIM':function(_0x1e2112,_0x12c4c9){return _0x1e2112<_0x12c4c9;},'jMkHk':function(_0x5a3545,_0x367200){return _0x5a3545>_0x367200;},'EQEVY':function(_0x3179f0,_0x149458){return _0x3179f0-_0x149458;},'GaLxM':function(_0x210be0,_0x5b5498){return _0x210be0*_0x5b5498;},'dQdab':function(_0x2271b7,_0x42042d){return _0x2271b7!=_0x42042d;},'MfyIb':'2|9|7'+_0x3e9452(0xdbb)+_0x3e9452(0x908)+_0x3e9452(0x55a),'joRjT':_0x3e9452(0x571)+'rd','kViEi':_0x3e9452(0x571)+_0x3e9452(0x7bb)+'tle','RSfqd':function(_0x138cae){return _0x138cae();},'cMaDE':'NLTLh','rBIYL':function(_0x419660,_0x1815da){return _0x419660===_0x1815da;},'iAyjN':'PDhss','vWTYT':_0x3e9452(0xc1d)+'n','ffvuO':function(_0x4badac,_0x1e7929){return _0x4badac===_0x1e7929;},'CXsfR':function(_0x495ad3,_0x406ae7){return _0x495ad3*_0x406ae7;},'hGRtz':_0x3e9452(0x7b9),'XTsje':_0x3e9452(0xae0),'dfUEO':_0x3e9452(0xaa6),'EWYiS':function(_0x1f1096,_0x584148,_0x57447f){return _0x1f1096(_0x584148,_0x57447f);},'CIIgu':'span','UOSAF':_0x3e9452(0x2ce)+'l','AEeHd':function(_0x44357c,_0x3b2653){return _0x44357c===_0x3b2653;},'baSPa':_0x3e9452(0x91a),'dSonV':function(_0x2ca186,_0x2acb8c){return _0x2ca186+_0x2acb8c;},'frQOe':function(_0x13dd52,_0x1b7f24){return _0x13dd52+_0x1b7f24;},'HsnOL':_0x3e9452(0x4d4)+'es','wCCri':_0x3e9452(0x85e)+_0x3e9452(0x9da)+_0x3e9452(0x378)+_0x3e9452(0x204)+'speed'+'\x20fiel'+_0x3e9452(0x36b)+_0x3e9452(0x3b9)+_0x3e9452(0xdf3)+',\x20ste'+_0x3e9452(0x5d8)+_0x3e9452(0x982)+_0x3e9452(0x5a0)+'refus'+'ed.','QUTFI':function(_0x3468cd,_0x5a3745){return _0x3468cd+_0x5a3745;},'xcBhA':_0x3e9452(0x978),'mVjEF':function(_0x5dbb92,_0x4c8da4){return _0x5dbb92+_0x4c8da4;},'XJekt':'ZFEst','EIRoK':'Copy\x20'+_0x3e9452(0x8bb)+'d','XCIox':_0x3e9452(0xa29)+_0x3e9452(0x441)+'ixed;'+'left:'+_0x3e9452(0x3e1)+':0;z-'+_0x3e9452(0x30c)+_0x3e9452(0x961)+_0x3e9452(0x402)+'5;poi'+'nter-'+_0x3e9452(0x2da)+'s:non'+'e;','IslnD':_0x3e9452(0x399),'lKQlZ':function(_0xcef0f7,_0x398ed1){return _0xcef0f7===_0x398ed1;},'RFTlB':'WksxI','EZObA':_0x3e9452(0x62b)+'t','TbcLV':'TIOoP','RNqev':function(_0x2ac356,_0x1f123c,_0x5b31fb){return _0x2ac356(_0x1f123c,_0x5b31fb);},'yFNgM':_0x3e9452(0x3cd)+_0x3e9452(0x748),'kgKSu':'Enabl'+'ed','nOFZF':function(_0x297853,_0x3ffa99,_0x528819,_0x10d91a,_0xca1c2e,_0x4862b8){return _0x297853(_0x3ffa99,_0x528819,_0x10d91a,_0xca1c2e,_0x4862b8);},'dgZtg':function(_0x54aa1e,_0x448244,_0x49b942){return _0x54aa1e(_0x448244,_0x49b942);},'eRZIY':function(_0x4394a0,_0x4c1d75,_0x4ba910,_0xdcad26){return _0x4394a0(_0x4c1d75,_0x4ba910,_0xdcad26);},'awWhp':function(_0x38dea7,_0x2f04fb){return _0x38dea7(_0x2f04fb);},'uIRur':'Snaps'+_0x3e9452(0xcc9)+'ow\x20(F'+'9)','sZSGA':function(_0x930ce6,_0x7f380b,_0x31e893,_0x46dab9){return _0x930ce6(_0x7f380b,_0x31e893,_0x46dab9);},'gtYDN':_0x3e9452(0x831)+_0x3e9452(0x36c)+_0x3e9452(0x692)+_0x3e9452(0x339)+_0x3e9452(0x34a)+_0x3e9452(0x48e)+_0x3e9452(0x73d)+_0x3e9452(0x605)+'\x20\x20fac'+'tor\x20+'+_0x3e9452(0x2de)+_0x3e9452(0xd59)+'\x20\x20fie'+'ld\x20of'+_0x3e9452(0xdf6)+_0x3e9452(0x254)+_0x3e9452(0x217)+_0x3e9452(0x7a5)+_0x3e9452(0x4ec),'OTTYZ':function(_0x53f664,_0x49498b,_0xcca10b){return _0x53f664(_0x49498b,_0xcca10b);},'fHQDC':function(_0xc4824d,_0x3337ac,_0x5d7248){return _0xc4824d(_0x3337ac,_0x5d7248);},'mrIBo':_0x3e9452(0xc2a)+'-spac'+_0x3e9452(0x4fa)+'imap,'+_0x3e9452(0xae3)+'right'+_0x3e9452(0x31b)+_0x3e9452(0x36b)+'ly\x20po'+_0x3e9452(0x96c)+'ns.','fcADE':'Range','yCCvV':function(_0x3b0129,_0x33c461,_0x25582a){return _0x3b0129(_0x33c461,_0x25582a);},'UZdkr':_0x3e9452(0x29c)+'esc','DEPSE':function(_0x2a580d,_0x403dea){return _0x2a580d+_0x403dea;},'iVJPp':function(_0xea107e,_0x63a6e2){return _0xea107e+_0x63a6e2;},'sCzCh':'Field'+_0x3e9452(0x575)+'iew\x20i'+'s\x20','LkRzl':'Field'+_0x3e9452(0x575)+'iew','LRayw':function(_0xb11ac4,_0x516b44,_0x222b95){return _0xb11ac4(_0x516b44,_0x222b95);},'NvpbI':_0x3e9452(0xbc8)+'n','cKjUL':_0x3e9452(0x991),'QEOWt':function(_0x40f8b6,_0x42e2d2){return _0x40f8b6+_0x42e2d2;},'jbEoX':_0x3e9452(0xbae)+_0x3e9452(0xded),'BqFQE':_0x3e9452(0x7a2)+'era\x20','WDBJJ':function(_0x173375,_0x5669a2){return _0x173375+_0x5669a2;},'YyvlR':'sette'+_0x3e9452(0x724)+'r','xCdcT':function(_0x5c238c,_0x480a3e){return _0x5c238c+_0x480a3e;},'aKPxM':'\x0ayaw\x20'+'\x20\x20','ClvZo':'\x0apitc'+'h\x20','SKMju':_0x3e9452(0x276)+'r','NVZqD':function(_0x8f0c14,_0x23380f){return _0x8f0c14+_0x23380f;},'zazEF':function(_0x267230,_0xa43c42){return _0x267230+_0xa43c42;},'WzeQy':function(_0x3aae2e,_0x238ba6){return _0x3aae2e+_0x238ba6;},'Ywtjs':'\x20=\x20','qBCxa':function(_0x2ca7ea,_0x43e98c){return _0x2ca7ea+_0x43e98c;},'oSmku':function(_0x503daa,_0x58b78a){return _0x503daa+_0x58b78a;},'SoTAz':'Build','RiUbl':_0x3e9452(0x994)+_0x3e9452(0x691)+_0x3e9452(0x3cb)+_0x3e9452(0x7d8),'gILDZ':function(_0x1272c4,_0x4f3738){return _0x1272c4+_0x4f3738;},'JoAGP':function(_0x49f82d,_0x4fea0d){return _0x49f82d+_0x4fea0d;},'gBbJJ':_0x3e9452(0x606),'oYJYK':function(_0x2639cf,_0x1c4c0a){return _0x2639cf+_0x1c4c0a;},'XwaId':function(_0x16e81c,_0x4fa7e3){return _0x16e81c+_0x4fa7e3;},'wnaVT':_0x3e9452(0x758)+'\x20','xmRiM':'Enemi'+'es','FGWlL':_0x3e9452(0xbe5)+'one\x20b'+_0x3e9452(0xa79)+'u','TrFHj':_0x3e9452(0xb1a)+_0x3e9452(0x1fa)+_0x3e9452(0x41e)+'nager','sNXuc':function(_0x5e04fc,_0x276ecd){return _0x5e04fc+_0x276ecd;},'QMBgY':function(_0x1faa0d,_0x2284a8){return _0x1faa0d-_0x2284a8;},'nViUP':_0x3e9452(0x1cc)+'r','IgYOt':_0x3e9452(0xb0c)+_0x3e9452(0x636),'lpRqo':'FPSco'+'ntrol'+'ler+','PChxJ':'Eye','FMXHl':'Walk\x20'+_0x3e9452(0x34a),'ZdXyo':'0x10','eCDMy':function(_0x49c738,_0x437a2d,_0x31d048,_0x4fb3f3){return _0x49c738(_0x437a2d,_0x31d048,_0x4fb3f3);},'JagOi':function(_0x52fcd0,_0x333f7c,_0xcb84fc,_0x557aee){return _0x52fcd0(_0x333f7c,_0xcb84fc,_0x557aee);},'cuCST':'0x11C','ItJLu':function(_0x25e5e8,_0x67bc6,_0x43cd83,_0x3de2cd){return _0x25e5e8(_0x67bc6,_0x43cd83,_0x3de2cd);},'VnCnj':_0x3e9452(0x7d1)+'h','TsVLo':function(_0x316da4,_0x43ad16){return _0x316da4<_0x43ad16;},'HcOWM':function(_0x151e70,_0x21d234){return _0x151e70===_0x21d234;},'YnkkI':_0x3e9452(0xa30)+'ostic'+'s','PXdBZ':function(_0x39cc65,_0x53c89f){return _0x39cc65(_0x53c89f);},'prkHe':'MehTy','vJuqw':'pxPUk','dulZe':function(_0x190935,_0x3e035b){return _0x190935+_0x3e035b;},'zIuvW':'auto','nWjnP':_0x3e9452(0xb69),'wVnZT':function(_0x113f03,_0x54d7a9){return _0x113f03-_0x54d7a9;},'pBvdj':function(_0x355128,_0x325be6){return _0x355128+_0x325be6;},'ObdMI':'wlUdL','eNrOA':_0x3e9452(0x86e),'QzMZr':function(_0x50c7f3,_0x30187c){return _0x50c7f3+_0x30187c;},'yCZKQ':function(_0x5e454e,_0x48503d){return _0x5e454e!==_0x48503d;},'Wsmle':_0x3e9452(0xb90)+'down','xsbps':_0x3e9452(0xb90)+'up','mrIEN':_0x3e9452(0xbdb),'hkoNS':_0x3e9452(0x5fe),'LVXCK':_0x3e9452(0xd83),'MiHQe':_0x3e9452(0x26a),'qhGpw':'Sakur'+'a\x20Ski'+_0x3e9452(0xd4c)+_0x3e9452(0x64a)+'aitin'+_0x3e9452(0xa36)+_0x3e9452(0xdd3)+'game\x20'+_0x3e9452(0x6c8)+_0x3e9452(0x3c1),'DqFnJ':function(_0x182356,_0x3b6eac){return _0x182356-_0x3b6eac;},'jjZvW':_0x3e9452(0x287),'MqENQ':_0x3e9452(0x9f1)+'a-men'+'u-css','kbMyS':_0x3e9452(0x481)+'go','ZEgvw':'mn-ma'+'in','VcRsT':'mn-to'+'p','TMVxX':_0x3e9452(0x794)+'ose','YtHNL':_0x3e9452(0x221)+'viewB'+_0x3e9452(0x9f4)+'\x200\x2024'+_0x3e9452(0xc85)+_0x3e9452(0xca7)+_0x3e9452(0x4e1)+_0x3e9452(0xd64)+_0x3e9452(0x524)+_0x3e9452(0xaf7)+_0x3e9452(0xa7c)+_0x3e9452(0x8c5)+_0x3e9452(0x385),'WeZvh':function(_0x54d82c,_0x43d061,_0x199214){return _0x54d82c(_0x43d061,_0x199214);},'hdDof':_0x3e9452(0x730),'VGzpI':function(_0x1fb091,_0x16a585){return _0x1fb091+_0x16a585;},'rdxWw':function(_0x38a436,_0x528f46,_0x2ad52f,_0x3bc3e2){return _0x38a436(_0x528f46,_0x2ad52f,_0x3bc3e2);},'syGst':'Sakur'+'a\x20Ski'+_0x3e9452(0xd4c)+_0x3e9452(0x7c8)+'sert)','ZTiyV':function(_0x25f708,_0x3f8a5e){return _0x25f708!==_0x3f8a5e;},'NCkbn':_0x3e9452(0x76b),'AOVni':function(_0x35b1e9,_0x2e2ae8){return _0x35b1e9+_0x2e2ae8;},'OvRxx':_0x3e9452(0xadf)+'n','GDuvY':function(_0x3b6575){return _0x3b6575();},'xkEHQ':function(_0x344e89,_0x518a8f){return _0x344e89===_0x518a8f;},'WWKNl':function(_0x26986b,_0x44609d){return _0x26986b<_0x44609d;},'JWHsY':function(_0x4eab0c,_0x10946b){return _0x4eab0c+_0x10946b;},'PEDbC':function(_0x8d6c56,_0x43883e){return _0x8d6c56+_0x43883e;},'yLaFj':function(_0x1a0989,_0x781ba6){return _0x1a0989+_0x781ba6;},'gHCIl':function(_0x2f7b43,_0x1cadfd){return _0x2f7b43/_0x1cadfd;},'AUsGO':_0x3e9452(0x59e)+'ng\x20fo'+'r\x20the'+_0x3e9452(0x614)+'t\x20rep'+'ort…','ngLcG':_0x3e9452(0xa58)+_0x3e9452(0x844),'xlKjB':function(_0x5399b8,_0x42e6db){return _0x5399b8===_0x42e6db;},'olDEK':_0x3e9452(0xb42)+'ON','XOKQJ':function(_0x57b2f8,_0x3b9e76){return _0x57b2f8===_0x3b9e76;},'LbruL':'Photo'+_0x3e9452(0x50b)+_0x3e9452(0x4b0)+'nc','GDgiO':_0x3e9452(0x711)+'ntrol'+_0x3e9452(0x2ad)+_0x3e9452(0x5a9),'Mqgki':_0x3e9452(0xc96)+'8','CSxne':function(_0x8802c6,_0x236845,_0x9b1baf){return _0x8802c6(_0x236845,_0x9b1baf);},'yfHNK':_0x3e9452(0x5c7),'eACdn':_0x3e9452(0xbae)+'Look','LTWuA':function(_0x4d2b33,_0x1a76cc,_0x20f720){return _0x4d2b33(_0x1a76cc,_0x20f720);},'TXFmJ':function(_0x5a504f,_0x52d6df){return _0x5a504f!==_0x52d6df;},'PQstK':function(_0x31d195,_0x33100c){return _0x31d195!==_0x33100c;},'lgagy':function(_0x10d47d,_0x454f77){return _0x10d47d<_0x454f77;},'sOsol':'iHymm','IUlyf':function(_0x37c659,_0x192244){return _0x37c659!==_0x192244;},'SoZkE':'undef'+_0x3e9452(0xa69),'OlRdb':function(_0x232e8f,_0x30ec6f){return _0x232e8f+_0x30ec6f;},'GmQMC':'PP>>\x20'+'n=','wsHxu':'\x20reac'+'h=','dicFR':function(_0x492286,_0x8e77cb){return _0x492286===_0x8e77cb;},'MEfUB':function(_0x560654,_0x1151df){return _0x560654<_0x1151df;},'JxnmE':function(_0x2597ee,_0x3f19cd){return _0x2597ee-_0x3f19cd;},'XBUhZ':function(_0x142718,_0x5d2bae){return _0x142718*_0x5d2bae;},'NopiY':'HJNwW','mBYcp':'FtsBt','BqLVn':function(_0x355480,_0x5086b5){return _0x355480-_0x5086b5;},'OqLle':'lqCAw','FHpQu':function(_0x53d023,_0x7f1e3a){return _0x53d023===_0x7f1e3a;},'jfIlP':function(_0x4cf22d,_0x5950a8){return _0x4cf22d*_0x5950a8;},'TMLmX':function(_0x1b17f2,_0x38f5f2){return _0x1b17f2<_0x38f5f2;},'BTiZt':function(_0x2d56e3,_0xa2bab7){return _0x2d56e3>_0xa2bab7;},'OkToZ':function(_0x2d2854,_0x1b30ff){return _0x2d2854>_0x1b30ff;},'lMQmF':_0x3e9452(0x55c)+_0x3e9452(0x873),'wtsVG':function(_0x28f957,_0x2d84bb,_0x3a1957,_0x184801){return _0x28f957(_0x2d84bb,_0x3a1957,_0x184801);},'DfVoq':'backg'+_0x3e9452(0x716)+_0x3e9452(0x861)+_0x3e9452(0x95c)+_0x3e9452(0x37a)+_0x3e9452(0x5d1)+_0x3e9452(0x98b)+'r:1px'+'\x20soli'+'d\x20rgb'+_0x3e9452(0x6d0)+_0x3e9452(0x1b4)+_0x3e9452(0xbf9)+_0x3e9452(0x6a3)+'rder-'+'radiu'+_0x3e9452(0x755)+'x;','zlbaP':_0x3e9452(0x718)+_0x3e9452(0xcb7)+'x;fon'+_0x3e9452(0x445)+_0x3e9452(0xddb)+'\x20ui-m'+_0x3e9452(0x580)+_0x3e9452(0xb70)+_0x3e9452(0x54c)+_0x3e9452(0xe0d)+'nospa'+_0x3e9452(0xc5d)+'lor:#'+_0x3e9452(0x1c3)+'9;','NCGuH':_0x3e9452(0x283)+_0x3e9452(0x62f)+'akura'+_0x3e9452(0x9cc)+_0x3e9452(0xdae)+_0x3e9452(0xda4)+_0x3e9452(0xaff)+'-alig'+_0x3e9452(0x9aa)+_0x3e9452(0xc9b)+_0x3e9452(0xa4a)+'>','Vamud':'#saku'+_0x3e9452(0x5f5)+_0x3e9452(0xd13),'UqexV':function(_0x1f0b48,_0x1545db){return _0x1f0b48+_0x1545db;},'YiJLn':function(_0x1e44cd,_0x1cccce){return _0x1e44cd<_0x1cccce;},'Rmjjn':function(_0x27c0b0,_0x27757e){return _0x27c0b0!==_0x27757e;},'iXMUd':'iaZxq','AMklM':function(_0x51bc26,_0x331ef8,_0x5250e4){return _0x51bc26(_0x331ef8,_0x5250e4);},'eXORE':function(_0x55afa8,_0x49ec0a){return _0x55afa8+_0x49ec0a;},'gVfVu':function(_0x5e6fbb,_0x38156d){return _0x5e6fbb*_0x38156d;},'zwXwK':function(_0x3ca85b,_0x34606f){return _0x3ca85b*_0x34606f;},'cKjHY':'AMiEk','xRfrg':'posit'+_0x3e9452(0x441)+'ixed;'+_0x3e9452(0x9ff)+_0x3e9452(0xaea)+_0x3e9452(0x224)+_0x3e9452(0x988)+_0x3e9452(0x8e2)+'ex:21'+_0x3e9452(0x39a)+'646;p'+'ointe'+_0x3e9452(0x88d)+_0x3e9452(0x21f)+'one;','qicLU':_0x3e9452(0xd8c)+_0x3e9452(0x418)+'t:non'+_0x3e9452(0x87a)+'bkit-'+_0x3e9452(0xd8c)+_0x3e9452(0x418)+_0x3e9452(0xc42)+'e;','qbFIu':_0x3e9452(0x829)+_0x3e9452(0x5f5)+_0x3e9452(0x564),'LOJZj':_0x3e9452(0x9f1)+_0x3e9452(0x653)+'es','ZtpZV':function(_0x54eb82,_0x50c600){return _0x54eb82!==_0x50c600;},'aTUuv':function(_0x39ba0f,_0xccd7a9){return _0x39ba0f(_0xccd7a9);},'RnWzz':function(_0x61526d,_0x5c64c4){return _0x61526d/_0x5c64c4;},'LtDUZ':function(_0x26a84a,_0x4803f7){return _0x26a84a/_0x4803f7;},'nTVAY':function(_0x4f4fe8){return _0x4f4fe8();},'YXHko':function(_0x5029e4,_0x2ceef8){return _0x5029e4+_0x2ceef8;},'QPfWe':function(_0x2676a2,_0x569357){return _0x2676a2+_0x569357;},'AwNuG':function(_0x8f8a78,_0x1dced3){return _0x8f8a78-_0x1dced3;},'ouyOe':function(_0x1d1c25,_0x46615d){return _0x1d1c25*_0x46615d;},'DZApJ':function(_0x3f2d96,_0x422ca5){return _0x3f2d96/_0x422ca5;},'Pqixu':function(_0x646c2c,_0x1a1c27){return _0x646c2c/_0x1a1c27;},'HCwmX':function(_0x3ea897,_0xc72daa){return _0x3ea897*_0xc72daa;},'uzJzo':function(_0x3d0e0b,_0x9aa0ce){return _0x3d0e0b>_0x9aa0ce;},'ycsXZ':function(_0x4cd4b9,_0x556384){return _0x4cd4b9*_0x556384;},'PeGQv':function(_0x4ac971,_0xb1fa9d){return _0x4ac971*_0xb1fa9d;},'nozcW':function(_0x35e5c8,_0x250b37){return _0x35e5c8+_0x250b37;},'mYZyX':function(_0x3422b3,_0x23aa82){return _0x3422b3+_0x23aa82;},'lpyfr':function(_0x2f0e63,_0x5af89d){return _0x2f0e63*_0x5af89d;},'vebwt':function(_0x45e28d,_0x3926ff){return _0x45e28d*_0x3926ff;},'ZwxJp':function(_0x41b69c,_0x2cc7fe,_0x52d0b8,_0x52c2d6,_0x1f4565){return _0x41b69c(_0x2cc7fe,_0x52d0b8,_0x52c2d6,_0x1f4565);},'YrnDq':function(_0x1c946b,_0x885eee){return _0x1c946b>_0x885eee;},'mCSpl':function(_0x20b17e,_0x4c90f3){return _0x20b17e/_0x4c90f3;},'LfPbh':function(_0x3cc0e3,_0x423a3f){return _0x3cc0e3/_0x423a3f;},'Fpeps':_0x3e9452(0x24d)+_0x3e9452(0xbc6)+'nospa'+_0x3e9452(0x6f4)+_0x3e9452(0xa54)+_0x3e9452(0x522)+'ospac'+'e','RTThv':function(_0x2dfb80,_0xd0fd){return _0x2dfb80+_0xd0fd;},'HcVLJ':'rgba('+'255,1'+'43,17'+_0x3e9452(0xd9f)+')','xLeYt':function(_0x382f39,_0x1ef3b0){return _0x382f39*_0x1ef3b0;},'zrRSz':function(_0x590ff0,_0x5eab4d){return _0x590ff0-_0x5eab4d;},'cOAgJ':function(_0x522358,_0x142473){return _0x522358-_0x142473;},'bQeuE':function(_0x5e2a52,_0x58a418){return _0x5e2a52!==_0x58a418;},'nKFJq':'ljyzS','dAeTF':function(_0x5b627c,_0x4d1135,_0x472be5){return _0x5b627c(_0x4d1135,_0x472be5);},'zrnJL':function(_0xe5e659,_0x6cec2a){return _0xe5e659<_0x6cec2a;},'sLDMe':function(_0x363307,_0x5a93d){return _0x363307-_0x5a93d;},'LnkoX':function(_0x1f9769,_0x289c8a){return _0x1f9769/_0x289c8a;},'WBSYI':function(_0x1b8a08,_0x4d9c57){return _0x1b8a08*_0x4d9c57;},'TyFfm':_0x3e9452(0x421)+'6a','ymRrx':function(_0x5dbb76,_0x330c7e){return _0x5dbb76+_0x330c7e;},'IGbFy':_0x3e9452(0x6c4),'srPqX':_0x3e9452(0x251)+'am','YGudx':'GkdqK','eHGjY':function(_0xee3ffb){return _0xee3ffb();},'ZVEpy':function(_0xb9c369,_0x56d48a){return _0xb9c369===_0x56d48a;},'hPGLI':function(_0x148d20,_0x18e66c){return _0x148d20(_0x18e66c);},'IswlH':'oAqjN','XjdIV':'sbDmM','hgfGe':function(_0x4a10f7){return _0x4a10f7();},'hBsZc':'cmjMF','MJUUf':_0x3e9452(0x8cf),'fAXfm':function(_0x3b22f9){return _0x3b22f9();},'kvlIp':function(_0x308a41,_0x4d4508,_0x235687,_0x189639,_0x196741){return _0x308a41(_0x4d4508,_0x235687,_0x189639,_0x196741);},'pGiTc':function(_0x18ba09,_0x108873){return _0x18ba09/_0x108873;},'QXdIl':function(_0x359df5,_0x45125){return _0x359df5+_0x45125;},'XeuhY':_0x3e9452(0x50f)+_0x3e9452(0x3f6)+'s)','cJwxD':function(_0x5ab3e3,_0xd081c5){return _0x5ab3e3>=_0xd081c5;},'AyNHb':function(_0x2b5d98,_0x6b0423){return _0x2b5d98!==_0x6b0423;},'bdrgh':function(_0x5cadb9,_0x24a04b){return _0x5cadb9===_0x24a04b;},'vWQbx':_0x3e9452(0x6b8),'hSndg':function(_0x26007b,_0x33f262){return _0x26007b<_0x33f262;},'AotVN':function(_0x2499c4,_0x17b159){return _0x2499c4-_0x17b159;},'Ttojb':function(_0x380b9e,_0x3ce769){return _0x380b9e-_0x3ce769;},'mVOPn':_0x3e9452(0x890),'Gdxpe':function(_0x55ed83,_0x146645){return _0x55ed83+_0x146645;},'sORKL':'\x20(sou'+_0x3e9452(0xad5),'ZAraX':function(_0x33f705,_0x2b1aa7){return _0x33f705===_0x2b1aa7;},'oRjEF':'vzDsr','zIASR':_0x3e9452(0xc7c),'eMnFW':function(_0x31ec80,_0x8f08a4){return _0x31ec80+_0x8f08a4;},'IQKCH':_0x3e9452(0x7e3),'zsBUR':function(_0x1b758e,_0x314aae){return _0x1b758e(_0x314aae);},'BgzPT':function(_0x32a043){return _0x32a043();},'nWpsb':function(_0x3b08e4){return _0x3b08e4();},'grXTJ':'UWMK\x20'+_0x3e9452(0x679)+'g\x20fai'+'led:\x20','PdvLy':function(_0x1c11b4,_0x5172db){return _0x1c11b4+_0x5172db;},'PUuGC':function(_0x4e7141,_0x562749){return _0x4e7141+_0x562749;},'ZRzVh':_0x3e9452(0x429)+_0x3e9452(0x291),'evkds':'\x20obje'+_0x3e9452(0x6d6)+'\x20but\x20'+'read\x20'+_0x3e9452(0x82b)+'lds.\x20','NnjMe':function(_0x4981d2,_0x3da2d5){return _0x4981d2+_0x3da2d5;},'zuKxf':_0x3e9452(0x4bf)+'ame\x20w'+'hile\x20'+_0x3e9452(0x7de)+'ne\x20ho'+_0x3e9452(0xb6d)+_0x3e9452(0xba2)+_0x3e9452(0x430)+'haned'+_0x3e9452(0x53d)+_0x3e9452(0x6d9)+_0x3e9452(0xbe5)+_0x3e9452(0x75b)+'r\x20','Apbkb':'HJTQq','gWGbP':function(_0x81e5ec,_0x4d1627){return _0x81e5ec!==_0x4d1627;},'xBoGY':_0x3e9452(0x4a4),'urces':function(_0x3259ce,_0x28c350){return _0x3259ce+_0x28c350;},'gnmIh':function(_0x469b69,_0x2d96d6){return _0x469b69+_0x2d96d6;},'HUdLI':'\x20A\x20ho'+'ok\x20fi'+'red\x20a'+'t\x20','ITFnE':function(_0x5788fd,_0x2f3e04){return _0x5788fd+_0x2f3e04;},'thzhM':function(_0x4c57d1,_0x280606){return _0x4c57d1+_0x280606;},'chBQv':'Heap\x20'+_0x3e9452(0x9cb)+_0x3e9452(0x3ff)+_0x3e9452(0x89a)+_0x3e9452(0x62d)+'ntil\x20'+_0x3e9452(0x22d)+_0x3e9452(0x306)+_0x3e9452(0xc11)+'ith\x20M'+_0x3e9452(0x7f8)+_0x3e9452(0xd26)+_0x3e9452(0x7cd)+_0x3e9452(0x305)+_0x3e9452(0x769)+'.','tZUIM':function(_0x4519dc,_0x340284){return _0x4519dc!==_0x340284;},'smKXg':_0x3e9452(0xa74),'ANNht':function(_0x55e7ed,_0xfca46e){return _0x55e7ed+_0xfca46e;},'jcVxd':function(_0x14ee26,_0x15f5c5){return _0x14ee26+_0x15f5c5;},'UAcWn':_0x3e9452(0x75a)+_0x3e9452(0x414)+'e\x20eve'+_0x3e9452(0xd8f)+_0x3e9452(0x986)+_0x3e9452(0x503)+_0x3e9452(0x3a1)+'apply'+_0x3e9452(0x547)+'\x20','IUaEH':_0x3e9452(0x75a)+_0x3e9452(0xce2)+'uring'+_0x3e9452(0x851)+'ng\x20at'+'\x20docu'+_0x3e9452(0x204)+'start'+'.','ZDSlD':function(_0x3121ba,_0x4322c2){return _0x3121ba+_0x4322c2;},'TylPJ':function(_0x10aaa9,_0x453747){return _0x10aaa9+_0x453747;},'mBfQU':function(_0x40fdbe,_0x4a029d){return _0x40fdbe+_0x4a029d;},'tFKyk':_0x3e9452(0x9ce)+_0x3e9452(0xab3)+_0x3e9452(0x665),'pcSdg':_0x3e9452(0x4b8),'RexNe':'Eithe'+'r\x20you'+_0x3e9452(0x5a0)+_0x3e9452(0x569)+'n\x20a\x20r'+_0x3e9452(0x70d)+_0x3e9452(0x562)+'he\x20ho'+_0x3e9452(0x45c)+'\x20on\x20t'+_0x3e9452(0x6b1)+_0x3e9452(0xc20)+_0x3e9452(0x523)+_0x3e9452(0x647),'HmGLV':function(_0x1194e9,_0x23a47e){return _0x1194e9+_0x23a47e;},'reiiR':'Runti'+_0x3e9452(0xdb3)+'solve'+'Game('+')','ZbaRJ':function(_0x198f4f){return _0x198f4f();},'DZAjw':_0x3e9452(0x587)+'l','joVTJ':'wrapp'+'er','ElxOh':function(_0x4daacb,_0x58cf44){return _0x4daacb&&_0x58cf44;},'jZxAk':_0x3e9452(0xba5)+'b1','HoBQa':'__sak'+_0x3e9452(0x1cf)+_0x3e9452(0xbf7),'KYZnu':function(_0x4d02e7,_0x2b8409){return _0x4d02e7===_0x2b8409;},'eliGs':'sakur'+_0x3e9452(0xc75)+_0x3e9452(0xc35)+_0x3e9452(0x8bf)+'en','Vrdcz':'messa'+'ge','wcFnv':function(_0xed960b,_0x1af98d){return _0xed960b+_0x1af98d;},'TNGoy':function(_0x346083,_0x4bbf51){return _0x346083+_0x4bbf51;},'vLfrB':_0x3e9452(0xa94)+'-weig'+_0x3e9452(0x828)+_0x3e9452(0xc98)+_0x3e9452(0xc82)+_0x3e9452(0xae7)+'x','jyQyY':_0x3e9452(0x779)+'\u0095\u0092\u0089\u0092\u0087'+'\u008e','cmDFI':_0x3e9452(0x6f5)+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','wlgQj':'\u0089\u0088\u0091\u0090\u008a'+_0x3e9452(0xd8d)+'\u0091','ZPPDT':_0x3e9452(0xccd)+_0x3e9452(0x5ae)+'\u008f','RYRDE':'\u0088\u0091\u008b\u0087\u0087'+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','HDCJV':_0x3e9452(0xb03)+_0x3e9452(0xc3a)+'\u0095','FNmsb':_0x3e9452(0x86d)+_0x3e9452(0x690)+'\u008d','NXFLZ':_0x3e9452(0x40d)+_0x3e9452(0x825)+'\u008a','JGXsq':'\u0090\u0091\u0091\u0086\u008b'+_0x3e9452(0xd36)+'\u0093','WKveo':'\u0093\u008c\u0091\u0091\u0093'+'\u0090\u0091\u008e\u008f\u0089'+'\u008e','LFXUI':'\u0089\u0091\u0086\u0093\u008f'+_0x3e9452(0xe0b)+'\u008d','jNRKz':_0x3e9452(0x882)+_0x3e9452(0x4b2)+'\u008a','ggpSO':'\u008f\u0091\u0092\u0094\u008a'+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','msWvT':_0x3e9452(0x573)+_0x3e9452(0x439)+'\u0093','osOSb':'\u008c\u0089\u008e\u0086\u0086'+_0x3e9452(0xcdd)+'\u0089','cLeWB':_0x3e9452(0x817)+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','HuGZX':'\u0090\u0093\u0091\u0091\u008b'+'\u0092\u0091\u0088\u008c\u0090'+'\u0092','FMfqB':_0x3e9452(0x2e9)+_0x3e9452(0x3a8)+'\u0094','HzQir':_0x3e9452(0xacb)+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','qJFBk':_0x3e9452(0xbab)+'\u008f\u008b\u0088\u0087\u0086'+'\u0087','BRfYN':'\u0094\u008d\u0087\u0087\u008a'+'\u008c\u0088\u008a\u0089\u0092'+'\u0087','nzDcw':_0x3e9452(0x4fd)+'\u008f\u008c\u0086\u0091\u0089'+'\u0093','cMEWS':'\u0089\u0088\u0093\u008b\u008b'+_0x3e9452(0x728)+'\u0094','jUYtZ':_0x3e9452(0xb5a)+_0x3e9452(0x3a3)+'\u0095','CPujn':_0x3e9452(0x90c)+_0x3e9452(0x2ef)+'\u008b','DxIIv':_0x3e9452(0xa1f)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','vHcOd':_0x3e9452(0x8b5)+_0x3e9452(0xd34)+'\u008f','JfjzE':_0x3e9452(0x6a8),'DjeMx':'\u0095\u008e\u0095\u0087\u0086'+_0x3e9452(0xc83)+'\u008e','PnWHF':'\u0087\u008d\u0095\u008d\u0087'+_0x3e9452(0x4c8)+'\u008f','MFuLn':'\u0088\u0087\u0093\u008c\u0094'+_0x3e9452(0x3fb)+'\u0094','mBPHQ':_0x3e9452(0x2c1)+_0x3e9452(0xa88)+'\u0089','HEOck':_0x3e9452(0xb86)+_0x3e9452(0x497)+'\u008b','nQPzp':_0x3e9452(0x7eb)+_0x3e9452(0x3d4)+'\u0094','zSzqF':_0x3e9452(0x415)+'\u008a\u0089\u008e\u008d\u008d'+'\u0086','hzPAJ':'\u008b\u0095\u008a\u008c\u0086'+_0x3e9452(0x6e8)+'\u0091','bvPMU':_0x3e9452(0x478)+_0x3e9452(0x93e)+'\u008a','QrXel':_0x3e9452(0x52b)+_0x3e9452(0xa03)+'\u0092','UgQky':_0x3e9452(0x9d3)+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','tijmU':_0x3e9452(0x56b)+'\u0093\u0089\u0090\u008c\u008c'+'\u008a','rINia':'\u0089\u0086\u0090\u0088\u008c'+_0x3e9452(0xd4d)+'\u008b','mHZgu':_0x3e9452(0xde2)+'\u0093\u0095\u0095\u0093\u008a'+'\u0094','DofFE':'\u008c\u008d\u0095\u0089\u008a'+_0x3e9452(0x5f9)+'\u0092','NGZqT':'\u0086\u0092\u0092\u008a\u008e'+_0x3e9452(0x4e9)+'\u0087','pphiR':_0x3e9452(0x771)+_0x3e9452(0x92c)+'\u008c','zXOiF':'Updat'+'e','Ancnk':_0x3e9452(0x589)+_0x3e9452(0x91b)+'\u0091','ojYjh':'\u0090\u0093\u0090\u008f\u0088'+_0x3e9452(0x99e)+'\u008f','mBqAW':'\u0086\u0087\u0087\u008e\u0094'+_0x3e9452(0xa9c)+'\u008b','DtmHf':'\u008e\u008b\u0093\u0091\u008e'+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','DccKZ':'\u0094\u0090\u0095\u0092\u008e'+'\u0093\u0088\u0093\u0088\u0095'+'\u008f','qwZPt':_0x3e9452(0xbda)+_0x3e9452(0x3ad)+'\u0095','uSigD':_0x3e9452(0x462)+_0x3e9452(0x848)+'\u008a','wkIWt':_0x3e9452(0x1db)+_0x3e9452(0xd89)+'\u0089','LSBRg':_0x3e9452(0x677),'xuZQa':_0x3e9452(0x7dd)+_0x3e9452(0x608)+'\u008c','SUvGc':_0x3e9452(0x20e)+'\u008a\u008e\u0092\u0095\u008b'+'\u0088','iNGab':_0x3e9452(0xdc6)+'\u008c\u008f\u0086\u0095\u0094'+'\u008a','NyMor':'\u0091\u0095\u0087\u0088\u0091'+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','iDIjL':_0x3e9452(0xd1a)+'rcial'+_0x3e9452(0x666)+'Compl'+_0x3e9452(0x343),'zUsLq':'\u008b\u0086\u0094\u0094\u0091'+_0x3e9452(0x6c1)+'\u0093','epLSb':'\u0093\u0093\u008d\u008e\u008b'+'\u008a\u0088\u0092\u0095\u0094'+'\u0086','kuflx':'\u0088\u0091\u0095\u0093\u0087'+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','wxIWb':_0x3e9452(0x6ed)+_0x3e9452(0x915)+'\u0092','SpFvL':_0x3e9452(0x6fb)+'\u008e\u0090\u0087\u0087\u0092'+'\u008e','gChtL':_0x3e9452(0x4e0)+'\u0093\u008f\u0095\u0087\u008e'+'\u008c','RaxfD':'\u008c\u0086\u0095\u0091\u008a'+_0x3e9452(0x574)+'\u008a','mQGwA':'\u0095\u008e\u008f\u008b\u008d'+_0x3e9452(0xaee)+'\u0094','Xazmd':_0x3e9452(0xa0d)+_0x3e9452(0x3e4)+'\u008c','okhxF':'\u0089\u0086\u0094\u0092\u0092'+'\u0093\u008b\u0094\u0094\u0094'+'\u008e','tVlxx':'Awake','Nvoya':'\u0087\u0089\u008f\u008a\u0095'+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','IQnuk':'\u0088\u008f\u0094\u0095\u008a'+_0x3e9452(0x971)+'\u0095','pzZZT':'\u0093\u0094\u0087\u008b\u0086'+_0x3e9452(0x1e9)+'\u008e','RnHrz':_0x3e9452(0xa04)+'\u008d\u0089\u0090\u0093\u008a'+'\u008a','UtUsW':_0x3e9452(0x54f)+_0x3e9452(0xa75)+'\u0095','whlfR':_0x3e9452(0xd70)+_0x3e9452(0x49c)+'\u0089','xIaHk':'Weapo'+'nMana'+_0x3e9452(0x431),'sMvgo':'GG_Ga'+_0x3e9452(0x838)+'ager','yWbeB':_0x3e9452(0xb8c)+'Bot','AMJBs':'Assem'+_0x3e9452(0x58d)+_0x3e9452(0x544)+_0x3e9452(0x87d),'XDcZn':_0x3e9452(0x3fa),'LcrcH':_0x3e9452(0x922),'Ybaps':'trans'+'form','CPaLJ':'fps','jFGSZ':'capsu'+'le','JHxnz':_0x3e9452(0x36a),'XrkOG':_0x3e9452(0x48c),'wgisq':_0x3e9452(0x42b)+'h','eHjeT':'team','FurtT':_0x3e9452(0xac5),'DDKxD':_0x3e9452(0x9f1)+'a-sw-'+_0x3e9452(0xb46)+'off','KkzPe':_0x3e9452(0x9f1)+_0x3e9452(0xc75)+'menu-'+_0x3e9452(0xc63),'vEkgA':_0x3e9452(0xd91)+'ls','AtmBZ':function(_0xd594a5,_0x22771e){return _0xd594a5+_0x22771e;},'bgiTK':function(_0x585339,_0x2e0aec){return _0x585339+_0x2e0aec;},'eyIMM':function(_0x375abe,_0xac081f){return _0x375abe+_0xac081f;},'IMRzI':function(_0x105724,_0x13a9e4){return _0x105724+_0x13a9e4;},'XvtEy':function(_0x472c4a,_0x5cc05a){return _0x472c4a+_0x5cc05a;},'qIFHj':function(_0x570224,_0x4b411f){return _0x570224+_0x4b411f;},'EGJcL':'backg'+'round'+':rgba'+'(24,1'+_0x3e9452(0x875)+_0x3e9452(0xa59)+_0x3e9452(0x296)+_0x3e9452(0x226)+_0x3e9452(0xca3)+_0x3e9452(0xe13)+_0x3e9452(0xd44)+_0x3e9452(0xc1c)+_0x3e9452(0x2a8)+'(150%'+_0x3e9452(0x280)+_0x3e9452(0x269)+_0x3e9452(0x296)+'rop-f'+'ilter'+_0x3e9452(0xe13)+'(22px'+_0x3e9452(0xc1c)+_0x3e9452(0x2a8)+_0x3e9452(0xcc6)+');','jxenM':_0x3e9452(0x508)+_0x3e9452(0x5ed)+':0\x200\x20'+'0\x201px'+'\x20rgba'+'(255,'+_0x3e9452(0x20c)+'55,.0'+'6),in'+'set\x200'+'\x201px\x20'+'0\x20rgb'+'a(255'+',255,'+'255,.'+'05),0'+_0x3e9452(0x98c)+'\x2080px'+_0x3e9452(0x739)+_0x3e9452(0x4e3)+_0x3e9452(0x9df)+');','DBWVQ':'opaci'+_0x3e9452(0xaba)+'trans'+'form:'+_0x3e9452(0x5e0)+'lateY'+_0x3e9452(0x7f1)+');poi'+'nter-'+_0x3e9452(0x2da)+_0x3e9452(0x8ad)+'e;tra'+_0x3e9452(0xcbc)+'on:op'+_0x3e9452(0xd00)+'\x20.35s'+_0x3e9452(0xe08)+',tran'+'sform'+_0x3e9452(0x4d5)+_0x3e9452(0x852)+_0x3e9452(0x2be)+_0x3e9452(0xb63)+_0x3e9452(0x83d)+'.36,1'+');','ugdEt':_0x3e9452(0x829)+_0x3e9452(0x7a7)+'nu-ro'+'ot.mn'+_0x3e9452(0x65d)+'l.sho'+'wn{op'+_0x3e9452(0xd00)+':1;tr'+_0x3e9452(0x40e)+'rm:no'+_0x3e9452(0x913)+_0x3e9452(0x7aa)+_0x3e9452(0xa0b)+_0x3e9452(0x812)+_0x3e9452(0xc7f),'uCEjN':'.mn-t'+_0x3e9452(0x53f)+'splay'+_0x3e9452(0xd94)+_0x3e9452(0x757)+'n-ite'+'ms:ce'+_0x3e9452(0x3ed)+'justi'+_0x3e9452(0x479)+'ntent'+_0x3e9452(0xa33)+_0x3e9452(0xbb7)+'dth:5'+_0x3e9452(0x4d2)+_0x3e9452(0xdf3)+':34px'+_0x3e9452(0x6c2)+'er:0;'+'borde'+'r-rad'+_0x3e9452(0xa14)+_0x3e9452(0x400),'gqgSh':'.mn-t'+_0x3e9452(0x70b)+'ver{c'+'olor:'+'rgba('+_0x3e9452(0x853)+_0x3e9452(0x1ee)+'2,.8)'+';}','HxhBF':'.mn-m'+_0x3e9452(0xac3)+'lex:1'+';min-'+'width'+_0x3e9452(0x54b)+'splay'+_0x3e9452(0xd94)+';flex'+'-dire'+_0x3e9452(0x6bf)+':colu'+'mn;}','RAeif':'.mn-c'+'ols::'+_0x3e9452(0x8b1)+'it-sc'+_0x3e9452(0x44a)+_0x3e9452(0x8fa)+_0x3e9452(0x42d)+_0x3e9452(0xd6d),'vMVxl':'.sk-c'+'ard{b'+_0x3e9452(0x55d)+_0x3e9452(0x31e)+_0x3e9452(0x63f)+_0x3e9452(0x248)+'ckgro'+_0x3e9452(0x46e)+_0x3e9452(0xcb9)+'55,25'+_0x3e9452(0xbee)+_0x3e9452(0x9bd)+_0x3e9452(0xc0d)+_0x3e9452(0x319)+_0x3e9452(0xbc5)+'set\x200'+'\x200\x200\x20'+'1px\x20r'+_0x3e9452(0xcb9)+_0x3e9452(0xbf6)+_0x3e9452(0xbee)+_0x3e9452(0xd3a)+';}','cxQRQ':'.sk-c'+_0x3e9452(0x931)+_0x3e9452(0x1bd)+'flex:'+_0x3e9452(0x69d)+_0x3e9452(0x434)+_0x3e9452(0x416),'NOVSg':_0x3e9452(0xc03)+_0x3e9452(0xdec)+_0x3e9452(0x634)+_0x3e9452(0xc84)+'-titl'+_0x3e9452(0xda6)+'ong{c'+_0x3e9452(0x2f2)+_0x3e9452(0x420)+_0x3e9452(0x9c5),'iEsBG':_0x3e9452(0x8af)+_0x3e9452(0xdd0)+_0x3e9452(0xbbc)+_0x3e9452(0x1be)+_0x3e9452(0x2f1)+_0x3e9452(0x5ce)+_0x3e9452(0x565)+_0x3e9452(0xd60)+_0x3e9452(0xa09)+'ttom:'+_0x3e9452(0x7e8)+_0x3e9452(0x8a9)+_0x3e9452(0x457)+':pre-'+'wrap;'+'}','GKTzA':'.sk-c'+_0x3e9452(0x219)+_0x3e9452(0xa0f)+':flex'+_0x3e9452(0x757)+_0x3e9452(0xbf2)+_0x3e9452(0x4cb)+_0x3e9452(0x3ed)+_0x3e9452(0xd38)+_0x3e9452(0x428)+'dding'+':4px\x20'+'0;fon'+_0x3e9452(0xc82)+_0x3e9452(0xe00)+'5px;}','KWkND':_0x3e9452(0x837)+_0x3e9452(0xbd0)+_0x3e9452(0xb29)+_0x3e9452(0x393)+_0x3e9452(0xb11)+'ba(24'+_0x3e9452(0x8b9)+',242,'+'.75);'+'}','BWuMO':_0x3e9452(0x5ee)+_0x3e9452(0xb9f)+_0x3e9452(0x5e8)+'y:blo'+'ck;fo'+'nt-si'+_0x3e9452(0xd80)+_0x3e9452(0x77c)+_0x3e9452(0xd00)+':.4;}','SYUJn':_0x3e9452(0x4be)+'round'+_0x3e9452(0x861)+_0x3e9452(0x886)+'255,2'+_0x3e9452(0x1fe)+_0x3e9452(0x9c3)+'ansit'+_0x3e9452(0x9b7)+'eft\x20.'+_0x3e9452(0x82c)+'ckgro'+_0x3e9452(0xcf3)+'2s;}','uUgJS':'.sk-s'+_0x3e9452(0xbd5)+_0x3e9452(0x44d)+_0x3e9452(0x89c)+'ppear'+'ance:'+'none;'+'appea'+_0x3e9452(0x2a9)+':none'+';widt'+'h:96p'+_0x3e9452(0x471)+_0x3e9452(0x2f0)+_0x3e9452(0x248)+_0x3e9452(0x477)+_0x3e9452(0x406)+'ransp'+_0x3e9452(0xaca)+';}','IurjG':_0x3e9452(0x4be)+_0x3e9452(0x716)+':line'+_0x3e9452(0x949)+_0x3e9452(0x337)+_0x3e9452(0x6e4)+'6b9d,'+_0x3e9452(0xdfe)+'9d)\x200'+_0x3e9452(0x91d)+'var(-'+'-p,50'+_0x3e9452(0xcd8)+'0%\x20no'+_0x3e9452(0x6b7)+'at,rg'+'ba(25'+'5,255'+',255,'+_0x3e9452(0x892)+'}','GCqVd':'.sk-s'+_0x3e9452(0xbd5)+_0x3e9452(0x556)+'bkit-'+_0x3e9452(0x951)+'r-thu'+_0x3e9452(0x64f)+_0x3e9452(0xd35)+'-appe'+'aranc'+_0x3e9452(0x360)+'e;wid'+_0x3e9452(0xaa7)+'x;hei'+_0x3e9452(0x75c)+_0x3e9452(0x21d)+_0x3e9452(0x804)+'top:-'+'2px;b'+'order'+'-radi'+_0x3e9452(0x404)+_0x3e9452(0xc6f)+_0x3e9452(0xca1)+_0x3e9452(0x7cf)+_0x3e9452(0x823)+';}','sxsTG':_0x3e9452(0x67a)+'ote.e'+_0x3e9452(0xb8a)+_0x3e9452(0x86f)+'ff7a9'+_0x3e9452(0x233),'gcJOf':'font-'+_0x3e9452(0x1be)+'11.5p'+'x;fon'+_0x3e9452(0x84f)+_0x3e9452(0xb8e)+_0x3e9452(0x71b)+'rsor:'+_0x3e9452(0xada)+'er;fo'+'nt-fa'+_0x3e9452(0x5e9)+_0x3e9452(0x63c)+_0x3e9452(0x6c3),'bjLVu':function(_0x4792d3,_0xaa960e){return _0x4792d3+_0xaa960e;},'ySpzO':'<svg\x20'+_0x3e9452(0xa1e)+_0x3e9452(0x9f4)+'\x200\x2024'+'\x2024\x22>'+'<path'+_0x3e9452(0x4e1)+_0x3e9452(0x5d7)+_0x3e9452(0x450)+_0x3e9452(0xcdf)+'4-4.5'+_0x3e9452(0x8ed)+'5\x200-2'+_0x3e9452(0xb5b)+'8-4.5'+'\x204-4.'+_0x3e9452(0x525)+_0x3e9452(0x8f1)+'5c0\x203'+'-2.5\x20'+_0x3e9452(0xad9)+'.5z\x22\x20','JYNSa':'fill='+_0x3e9452(0x680)+_0x3e9452(0x1c6)+'oke=\x22'+'#ff6b'+_0x3e9452(0xd6a)+_0x3e9452(0xccf)+_0x3e9452(0x434)+'h=\x221.'+'6\x22\x20st'+'roke-'+_0x3e9452(0x90f)+'ap=\x22r'+'ound\x22'+_0x3e9452(0xd8e)+_0x3e9452(0x4ab)+'nejoi'+'n=\x22ro'+'und\x22/'+'>','ljZAD':_0x3e9452(0xdd7)+'le\x20cx'+_0x3e9452(0xca8)+_0x3e9452(0x2f8)+_0x3e9452(0x8a3)+'=\x221.2'+_0x3e9452(0x737)+'l=\x22#f'+_0x3e9452(0x823)+_0x3e9452(0xa7e)+_0x3e9452(0xd6b),'AFSHK':function(_0x3cbfde){return _0x3cbfde();}};var _0x171a1f=location['hostn'+'ame']||'',_0x4cfb20=/(^|\.)www\.crazygames\.com$/[_0x3e9452(0x77b)](_0x171a1f),_0x157c20=/(^|\.)games\.crazygames\.com$/['test'](_0x171a1f),_0x565229=/(^|\.)crazygames\.com$/[_0x3e9452(0x77b)](_0x171a1f)&&!_0x4cfb20&&!_0x157c20,_0x28d129=_0x4cfb20?_0x2f44ee['DZAjw']:_0x157c20?_0x2f44ee[_0x3e9452(0xad3)]:_0x3e9452(0xd31)+'r';if(_0x2f44ee['ElxOh'](!_0x4cfb20,!_0x157c20)&&!_0x565229)return;var _0x4e9faa=_0x2f44ee[_0x3e9452(0x1f0)],_0x22972f=_0x2f44ee['HoBQa'],_0x4b38f3=_0x3e9452(0xc78)+_0x3e9452(0xbbf)+'SKILL'+_0x3e9452(0x66a)+'BEGIN'+_0x3e9452(0x1d5),_0x142eea=_0x3e9452(0xc78)+'KURA-'+_0x3e9452(0xad8)+_0x3e9452(0x66a)+'END=='+'=',_0x396453=_0x3e9452(0xd7f)+'2';if(_0x157c20){if(_0x2f44ee[_0x3e9452(0x881)]('vTeMb',_0x3e9452(0xa4c))){window[_0x3e9452(0xad2)+'entLi'+_0x3e9452(0xcf2)+'r'](_0x3e9452(0x388)+'ge',function(_0x1c479d){var _0x14f7c0=_0x3e9452,_0x42a29f={'Tiqsh':function(_0x3626ce,_0x523565){return _0x3626ce+_0x523565;},'LeDEH':function(_0x59c525,_0x365375){return _0x59c525===_0x365375;},'ymSIm':function(_0x54eb06,_0x2a4c75){return _0x54eb06===_0x2a4c75;}};if(_0x14f7c0(0x47e)===_0x14f7c0(0x47e)){var _0x199040=_0x1c479d['data'];if(!_0x199040||_0x199040['__sak'+'ura']!==_0x22972f)return;try{if(window[_0x14f7c0(0x6e5)+'t']&&window['paren'+'t']!==window)window[_0x14f7c0(0x6e5)+'t'][_0x14f7c0(0xb7c)+_0x14f7c0(0x623)+'e'](_0x199040,'*');if(window[_0x14f7c0(0xc14)]&&window['top']!==window)window[_0x14f7c0(0xc14)]['postM'+'essag'+'e'](_0x199040,'*');}catch(_0x3eeb75){}if(_0x199040&&_0x2f44ee[_0x14f7c0(0x918)](_0x199040[_0x14f7c0(0xaf1)],_0x14f7c0(0x458)))try{if(_0x2f44ee['LKhLa'](_0x2f44ee[_0x14f7c0(0xcc1)],_0x14f7c0(0xdc3)))return _0x7e5148['sourc'+'e']=_0x42a29f[_0x14f7c0(0x813)](_0x14f7c0(0xb98)+'w.',_0x1cc569[_0x150a4e])+(_0x14f7c0(0x8dc)+'le'),_0x310663;else{var _0x59382e=document[_0x14f7c0(0xa64)+_0x14f7c0(0x79f)+_0x14f7c0(0x662)+'l'](_0x2f44ee['koBLn']);for(var _0x2139af=-0x54d+-0x1af7+-0x4*-0x811;_0x2139af<_0x59382e['lengt'+'h'];_0x2139af++){if(_0x2f44ee['gdokj'](_0x14f7c0(0x7b4),_0x2f44ee['AobtY']))try{if(_0x59382e[_0x2139af][_0x14f7c0(0xda0)+'ntWin'+_0x14f7c0(0x796)])_0x59382e[_0x2139af]['conte'+_0x14f7c0(0x80a)+_0x14f7c0(0x796)][_0x14f7c0(0xb7c)+_0x14f7c0(0x623)+'e'](_0x199040,'*');}catch(_0x4f1f86){}else return _0x42a29f['LeDEH'](_0x3319ac['v'][-0xf8e+-0x169*-0x1b+0x5*-0x481],_0x4c588a[0xe57+0x150+-0xfa7])&&_0x42a29f['ymSIm'](_0x159fde['v'][0x1249*-0x1+-0x1376+0x25c0],_0x5c65c6[-0x1344+-0x9ac+0x1cf1])&&_0x536108['v'][0x33*0x97+-0x1bdb+-0x238]===_0x5e3e1c[0x227e+0x7b3+-0x2a2f];}}}catch(_0x7cfd00){}}else{_0x25aa52[_0x14f7c0(0xa21)+_0x14f7c0(0x335)+_0x14f7c0(0x6ec)](),_0x2f4ea9(!_0x3901af['on'],_0x5d20e7[_0x14f7c0(0x2a3)+'r']);return;}}),console[_0x3e9452(0x8d3)](_0x3e9452(0x36e)+'kura]'+_0x3e9452(0x4a6)+_0x3e9452(0x8a4)+'R\x20ACT'+_0x3e9452(0xa26)+_0x3e9452(0xd41)+'\x20up+d'+_0x3e9452(0x6cc),'color'+':'+_0x4e9faa);return;}else{var _0x2e82c1=_0x668851();if(!_0x2e82c1)return null;try{return new _0x3c4693(_0x2e82c1[_0x3e9452(0x3b4)+'r'],_0x2e82c1[_0x3e9452(0x73b)+_0x3e9452(0x202)],_0x2e82c1['byteL'+_0x3e9452(0xa3b)]);}catch(_0x3bad34){return null;}}}if(_0x4cfb20){console[_0x3e9452(0x8d3)]('%c[sa'+'kura]'+_0x3e9452(0x750)+_0x3e9452(0x336)+'TIVE',_0x2f44ee['WuPtQ'](_0x2f44ee[_0x3e9452(0xb26)](_0x2f44ee['rvTlT'],_0x4e9faa),_0x2f44ee[_0x3e9452(0xa61)]),{'host':_0x171a1f});var _0x2082a2={'set':function(){},'command':function(){}};function _0x1f8f89(_0x451465,_0xcf4b2c){var _0xe41b73=_0x3e9452,_0x3893aa={'cJGRu':function(_0x158eab){var _0x534452=_0x23db;return _0x2f44ee[_0x534452(0x8df)](_0x158eab);},'dQkva':_0x2f44ee['SylWi'],'GVgLh':_0xe41b73(0xbae)+_0xe41b73(0x740)+_0xe41b73(0x708)+'a'},_0x385697={'__sakura':_0x22972f,'kind':_0x2f44ee['cAozV'],'cmd':_0x451465,'arg':_0xcf4b2c};try{var _0x199bdb=document[_0xe41b73(0xa64)+_0xe41b73(0x79f)+_0xe41b73(0x662)+'l'](_0x2f44ee[_0xe41b73(0x92a)]);for(var _0x1ed5e0=0x26fc+0xf66+-0x3662;_0x2f44ee['wnzUc'](_0x1ed5e0,_0x199bdb['lengt'+'h']);_0x1ed5e0++){try{if(_0x199bdb[_0x1ed5e0][_0xe41b73(0xda0)+_0xe41b73(0x80a)+_0xe41b73(0x796)])_0x199bdb[_0x1ed5e0][_0xe41b73(0xda0)+'ntWin'+_0xe41b73(0x796)]['postM'+_0xe41b73(0x623)+'e'](_0x385697,'*');}catch(_0x4dbe60){}}}catch(_0x3a8c43){}try{if('gGupf'===_0x2f44ee[_0xe41b73(0x7ee)]){var _0x538e21={},_0x2213b6=_0x3893aa['cJGRu'](_0x31ce79);if(!_0x2213b6)return _0x538e21;_0x538e21[_0xe41b73(0xbae)+'Look@'+_0xe41b73(0x87e)]=_0x2213b6[_0xe41b73(0xb90)+_0xe41b73(0x43f)];for(var _0x5a1da4 in _0x2213b6['float'+'s'])_0x538e21[_0x3893aa['dQkva']+_0x5a1da4]=_0x2213b6[_0xe41b73(0x5c7)+'s'][_0x5a1da4];if(_0x2213b6[_0xe41b73(0x708)+'a'])_0x538e21[_0x3893aa[_0xe41b73(0xc73)]]=_0x2213b6['camer'+'a'];return _0x538e21;}else{var _0x4cd8b7=new BroadcastChannel('sakur'+_0xe41b73(0x40b));_0x4cd8b7[_0xe41b73(0xb7c)+'essag'+'e'](_0x385697),setTimeout(function(){var _0x55e387=_0xe41b73,_0x56d8fe={'HdApJ':function(_0x5526d7,_0xbcd7e2){return _0x5526d7(_0xbcd7e2);}};if(_0x55e387(0xb1f)!==_0x55e387(0xb1f))return _0x503372['log']('PICKP'+'OS>>',_0x434289[_0x55e387(0x388)+'ge'],_0x56d8fe[_0x55e387(0xcd9)](_0x57254e,_0x2f95a2[_0x55e387(0xd0f)]||'')['split']('\x0a')[_0x55e387(0x9d5)](-0x1361+0x4f*-0x6a+0x3417*0x1,0x1*-0x1a29+0x7c7+0x1266)[_0x55e387(0xc01)]('\x20|\x20')),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};else try{_0x4cd8b7[_0x55e387(0x936)]();}catch(_0x48f27f){}},0x191e+-0x2*-0x167+0x1af2*-0x1);}}catch(_0x500900){}}var _0x325f17=_0x2f44ee[_0x3e9452(0xd6e)];function _0x5ae885(){var _0x3c3105=_0x3e9452,_0x21c7ca={'fQoyJ':_0x3c3105(0x8b7),'OxmOt':_0x2f44ee['uoVDL']};if('tnZkC'===_0x2f44ee[_0x3c3105(0x80c)])_0x35c221[_0x3c3105(0x995)][_0x3c3105(0x6a4)]=_0x21c7ca[_0x3c3105(0xdc9)],_0x1b131b[_0x3c3105(0x995)][_0x3c3105(0xc14)]=_0x3c3105(0x8b7),_0x2d6dd2[_0x3c3105(0x995)]['right']=_0x3c3105(0x743),_0x82fc1f['style']['botto'+'m']=_0x21c7ca[_0x3c3105(0x555)];else try{return localStorage[_0x3c3105(0x4d1)+'em'](_0x325f17)==='1';}catch(_0x3e54ff){return![];}}function _0x440ff4(_0x3c02d5){var _0x33cdef=_0x3e9452,_0xa355b5={'cDlAN':function(_0x2e9907,_0x146bbc){return _0x2e9907===_0x146bbc;}};try{if(_0x33cdef(0xc86)!==_0x33cdef(0xc86)){if(_0x5d6fbc&&!_0x235c8f()){_0x50d44b();return;}_0x3ae67b(!![],_0xc259b4);}else _0x3c02d5?localStorage[_0x33cdef(0x29f)+'em'](_0x325f17,'1'):localStorage['remov'+_0x33cdef(0x627)](_0x325f17);}catch(_0x55ed12){}try{if(_0x33cdef(0xdde)!==_0x33cdef(0x5aa)){var _0x18f061=document[_0x33cdef(0x397)+_0x33cdef(0x1e1)+_0x33cdef(0xcd0)]('sakur'+_0x33cdef(0xc75)+'v2');if(_0x18f061)_0x18f061[_0x33cdef(0x5bd)+'e']();}else{var _0x3939da=_0xa355b5['cDlAN'](_0x55ef5,'v2')?0x1969+-0x75c+-0x120b:_0x25597b==='v3'?0x433+0x4ab*0x2+-0x3*0x482:-0x19ed+0x1b5b*0x1+-0x16a,_0x418691=_0x5ebba3(_0x5da34e['ptr'],_0x42c8d1,_0x3939da);_0x418691&&(_0x535607['xyz']=_0x418691,_0x4fb13f['v']=_0x418691[0x83*-0x44+-0x5*0x679+0xb*0x61b]);}}catch(_0x3a18ec){}try{var _0x3594d7=document['getEl'+'ement'+'ById'](_0x2f44ee[_0x33cdef(0x4e5)]);if(_0x2f44ee[_0x33cdef(0x27b)](_0x3c02d5,!_0x3594d7)&&document[_0x33cdef(0x99d)]){var _0x5c4725=_0x2f44ee['FrjFh'][_0x33cdef(0x33c)]('|'),_0x5a731d=0x199*0x11+0x13*-0x1be+0x5f1;while(!![]){switch(_0x5c4725[_0x5a731d++]){case'0':_0x39b821['id']=_0x33cdef(0x9f1)+'a-sw-'+_0x33cdef(0x2d2)+'b';continue;case'1':_0x39b821[_0x33cdef(0x7bd)+'onten'+'t']=_0x2f44ee['rIfDP'];continue;case'2':var _0x39b821=document['creat'+'eElem'+_0x33cdef(0x6c9)](_0x2f44ee['WAbSG']);continue;case'3':_0x39b821[_0x33cdef(0x995)][_0x33cdef(0xa6f)+'xt']=_0x2f44ee[_0x33cdef(0x3a4)](_0x33cdef(0xa29)+_0x33cdef(0x441)+_0x33cdef(0xa72)+'left:'+_0x33cdef(0xd39)+_0x33cdef(0xdbe)+'2px;z'+_0x33cdef(0x76c)+'x:214'+'74829'+'99;cu'+'rsor:'+_0x33cdef(0xada)+_0x33cdef(0x9a9)+_0x33cdef(0x78b)+'lect:'+_0x33cdef(0x814)+(_0x33cdef(0x4be)+_0x33cdef(0x716)+':rgba'+'(21,1'+_0x33cdef(0x37a)+'.9);b'+_0x33cdef(0x55d)+':1px\x20'+'solid'+'\x20rgba'+_0x33cdef(0x886)+_0x33cdef(0x687)+'77,.5'+_0x33cdef(0xe06)+'or:')+_0x4e9faa,';')+_0x2f44ee['mAbum'];continue;case'4':document[_0x33cdef(0x99d)][_0x33cdef(0x3d7)+_0x33cdef(0x25d)+'d'](_0x39b821);continue;case'5':_0x39b821[_0x33cdef(0x930)+'ck']=function(){_0x440ff4(![]),_0x54f3cc();};continue;}break;}}else _0x2f44ee[_0x33cdef(0x27b)](!_0x3c02d5,_0x3594d7)&&_0x3594d7[_0x33cdef(0x5bd)+'e']();}catch(_0x171596){}}function _0x11fb0(){var _0x5e5299=_0x3e9452;if(_0x2f44ee[_0x5e5299(0x918)](_0x5e5299(0x3d5),'YijyV')){if(_0x5ae885())return null;var _0x5b66f8=document[_0x5e5299(0x397)+_0x5e5299(0x1e1)+_0x5e5299(0xcd0)](_0x2f44ee[_0x5e5299(0x620)]);if(_0x5b66f8)return _0x5b66f8;if(!document[_0x5e5299(0x99d)]||!document[_0x5e5299(0x99d)][_0x5e5299(0x3d7)+_0x5e5299(0x25d)+'d'])return null;try{if(!document['getEl'+'ement'+'ById'](_0x5e5299(0x9f1)+_0x5e5299(0xc75)+'v2-cs'+'s')){var _0x2bd467=document['creat'+_0x5e5299(0x39f)+_0x5e5299(0x6c9)](_0x2f44ee[_0x5e5299(0x919)]);_0x2bd467['id']=_0x5e5299(0x9f1)+_0x5e5299(0xc75)+'v2-cs'+'s',_0x2bd467[_0x5e5299(0x7bd)+_0x5e5299(0x284)+'t']=_0x2f44ee['EpHZo'],(document[_0x5e5299(0xd02)]||document[_0x5e5299(0x358)+_0x5e5299(0x531)+'ement'])[_0x5e5299(0x3d7)+'dChil'+'d'](_0x2bd467);}return _0x5b66f8=document[_0x5e5299(0x97b)+_0x5e5299(0x39f)+'ent'](_0x5e5299(0xbf0)),_0x5b66f8['id']=_0x2f44ee['rxgKa'],document['body']['appen'+_0x5e5299(0x25d)+'d'](_0x5b66f8),_0x5b66f8;}catch(_0x4c5b4d){return null;}}else return _0xb5904d[_0x5e5299(0x1c4)+'e']=_0x5e5299(0xd50)+'n._ru'+'ntime'+'._gam'+'e',_0xdcc39[_0x5e5299(0x347)];}function _0x54f3cc(){var _0xfdbdb0=_0x3e9452,_0x30cece=_0x11fb0();if(!_0x30cece)return _0x2082a2;if(_0x30cece['datas'+'et'][_0xfdbdb0(0xc9e)])return _0x30cece['api'];try{return _0x492062(_0x30cece);}catch(_0x1b2f1c){return _0x30cece[_0xfdbdb0(0xd4e)+'et'][_0xfdbdb0(0xc9e)]='1',_0x30cece['api']=_0x2082a2,console[_0xfdbdb0(0x8c0)]('%c[sa'+_0xfdbdb0(0x821)+'\x20pane'+_0xfdbdb0(0x983)+'abled',_0x2f44ee['rvTlT']+_0x4e9faa,_0x1b2f1c),_0x2082a2;}}function _0x492062(_0x48c0cc){var _0x5a8f80=_0x3e9452,_0x2c27fd={'uYskf':function(_0xc6d4c9,_0x19a798){return _0xc6d4c9(_0x19a798);},'gfchT':function(_0x29b6ab,_0x58b5b6){var _0xf82d0f=_0x23db;return _0x2f44ee[_0xf82d0f(0xa93)](_0x29b6ab,_0x58b5b6);},'INaYo':function(_0xa943c,_0x3142a7){return _0x2f44ee['wnzUc'](_0xa943c,_0x3142a7);},'PJqVF':_0x5a8f80(0x550)+'e','guVjH':_0x2f44ee['tFZxm'],'vmLqW':function(_0x21b397,_0x5c7833,_0x4c0cfd,_0x793aea){return _0x21b397(_0x5c7833,_0x4c0cfd,_0x793aea);},'rmoph':function(_0x171ff0,_0x80f2c6){return _0x171ff0+_0x80f2c6;},'VKecn':function(_0x4ed6bd,_0x199aec){return _0x4ed6bd!==_0x199aec;},'BRFls':_0x2f44ee[_0x5a8f80(0xc12)],'BzHZE':'Speed'+'\x20ON','fHqRr':_0x2f44ee[_0x5a8f80(0x8ae)],'SxcPL':_0x5a8f80(0xaad)+'f5','skkhv':function(_0x4dd8ae){var _0x3f00e1=_0x5a8f80;return _0x2f44ee[_0x3f00e1(0x8df)](_0x4dd8ae);},'jdrIL':_0x2f44ee['IrFQW'],'rXxBr':'This\x20'+'panel'+'\x20prov'+_0x5a8f80(0xb5d)+_0x5a8f80(0xbfb)+'rscri'+'pt\x20IS'+_0x5a8f80(0x579)+_0x5a8f80(0x534)+_0x5a8f80(0x781)+_0x5a8f80(0x3a2)+_0x5a8f80(0x74c)+_0x5a8f80(0xdd3)+_0x5a8f80(0x587)+_0x5a8f80(0xa67),'qIEVH':_0x2f44ee['KduOh'],'Qmfrz':_0x2f44ee[_0x5a8f80(0x50e)],'GOHgB':'\x20\x202.\x20'+_0x5a8f80(0xc87)+'age\x20h'+_0x5a8f80(0x864)+_0x5a8f80(0x5a4)+'n\x20rel'+'oaded'+'\x20sinc'+'e\x20ins'+_0x5a8f80(0x4fc)+_0x5a8f80(0x2b4),'QjQKF':_0x5a8f80(0xdcd)+_0x5a8f80(0xb73)+_0x5a8f80(0x41f)+_0x5a8f80(0x7f9)+_0x5a8f80(0x6fa)+'\x20and\x20'+_0x5a8f80(0x9d0)+_0x5a8f80(0xa57)+_0x5a8f80(0xb97)+'l\x20aga'+_0x5a8f80(0xa8f),'CBwMy':function(_0xcaea13,_0x5f3c02){return _0xcaea13*_0x5f3c02;},'gYUvg':'7|9|6'+_0x5a8f80(0x1ca)+_0x5a8f80(0x6d7)+_0x5a8f80(0x488)+'|8','WnGXJ':function(_0x2ddf48,_0x32df1f){return _0x2ddf48*_0x32df1f;},'LIpVl':function(_0x5b52fa,_0x464a43){return _0x5b52fa*_0x464a43;},'hvxrJ':function(_0x4c24b2,_0x439c6a){return _0x4c24b2+_0x439c6a;},'yExFc':function(_0xf8c088,_0x4d672f){return _0xf8c088/_0x4d672f;}};_0x48c0cc['style']['cssTe'+'xt']=_0x2f44ee['cQcqe'](_0x2f44ee['AtrPf'](_0x2f44ee[_0x5a8f80(0x3a4)]('posit'+_0x5a8f80(0x441)+_0x5a8f80(0xa72)+_0x5a8f80(0x3b1)+_0x5a8f80(0xd39)+_0x5a8f80(0xdbe)+_0x5a8f80(0x492)+'-inde'+'x:214'+'74830'+_0x5a8f80(0x2cc)+'x-wid'+'th:mi'+'n(52v'+'w,620'+_0x5a8f80(0x7b3)+_0x5a8f80(0x4e4)+_0x5a8f80(0xae2)+'78vh;',_0x2f44ee['NqHpe']),_0x5a8f80(0xc19)+_0x5a8f80(0x9db)+'1.5\x20u'+_0x5a8f80(0xc46)+_0x5a8f80(0xd25)+_0x5a8f80(0x8e9)+'solas'+_0x5a8f80(0x8f4)+_0x5a8f80(0x457)+_0x5a8f80(0x33f)+'shado'+'w:0\x202'+_0x5a8f80(0x721)+_0x5a8f80(0x530)+'20px\x20'+'#000;'),_0x5a8f80(0x317)+_0x5a8f80(0x3bb)+'ex;fl'+_0x5a8f80(0x35f)+_0x5a8f80(0x83b)+_0x5a8f80(0x9bb)+'lumn;'+_0x5a8f80(0x2c9)+_0x5a8f80(0x308)+_0x5a8f80(0x625)+';'),_0x48c0cc[_0x5a8f80(0x941)+_0x5a8f80(0x21e)]=_0x2f44ee['DHrTQ'](_0x2f44ee[_0x5a8f80(0x408)](_0x2f44ee[_0x5a8f80(0xdb8)](_0x2f44ee['cQcqe'](_0x2f44ee['AtrPf'](_0x2f44ee[_0x5a8f80(0x3a4)](_0x2f44ee['DHrTQ'](_0x2f44ee[_0x5a8f80(0xd1f)](_0x2f44ee['cQcqe'](_0x2f44ee[_0x5a8f80(0xbdd)](_0x2f44ee['DHrTQ'](_0x2f44ee['cQcqe'](_0x2f44ee['cQcqe']('<div\x20'+_0x5a8f80(0x995)+_0x5a8f80(0x3cc)+_0x5a8f80(0xa11)+'9px\x201'+_0x5a8f80(0x588)+_0x5a8f80(0x55d)+'-bott'+_0x5a8f80(0x584)+_0x5a8f80(0xccb)+_0x5a8f80(0xc04)+_0x5a8f80(0xbaa)+'5,143'+_0x5a8f80(0x734)+_0x5a8f80(0xaa9)+_0x5a8f80(0x5e8)+_0x5a8f80(0xa4e)+_0x5a8f80(0x2a2)+_0x5a8f80(0x225)+_0x5a8f80(0xca5)+'-item'+_0x5a8f80(0x4bb)+_0x5a8f80(0x43b)+_0x5a8f80(0x1b7)+_0x5a8f80(0x560)+'to;\x22>',_0x2f44ee['XdzTK']),_0x4e9faa),_0x5a8f80(0x44f)+_0x5a8f80(0x98a)+_0x5a8f80(0x5fb)+_0x5a8f80(0x34d)+'</b>')+(_0x5a8f80(0x566)+'\x20id=\x22'+'sw2-b'+_0x5a8f80(0xbb1)+'\x20styl'+_0x5a8f80(0x72d)+_0x5a8f80(0x86f)+_0x5a8f80(0xe0f)+'6;fon'+_0x5a8f80(0xc82)+'e:11p'+_0x5a8f80(0xd3e)+_0x5a8f80(0xa11)+'1px\x206'+_0x5a8f80(0x5e2)+_0x5a8f80(0xd72)+'1px\x20s'+'olid\x20'+_0x5a8f80(0xb8d)+_0x5a8f80(0x3c4)+_0x5a8f80(0xd95)+_0x5a8f80(0x3b0)+_0x5a8f80(0x582)+_0x5a8f80(0x41c)+'adius'+':999p'+_0x5a8f80(0x5b3)+'?</sp'+_0x5a8f80(0xbf5))+(_0x5a8f80(0x566)+'\x20id=\x22'+_0x5a8f80(0x7ad)+'tatus'+'\x22\x20sty'+'le=\x22c'+'olor:'+_0x5a8f80(0xde4)+_0x5a8f80(0x4e6)+_0x5a8f80(0x61c)+'g\x20for'+_0x5a8f80(0x41f)+'\x20fram'+_0x5a8f80(0x438)+'pan>')+_0x2f44ee['cNgTN'],_0x4e9faa),';bord'+'er:0;'+_0x5a8f80(0xe02)+_0x5a8f80(0x209)+_0x5a8f80(0xa27)+_0x5a8f80(0x55d)+'-radi'+_0x5a8f80(0xa06)+_0x5a8f80(0xd3e)+_0x5a8f80(0xa11)+_0x5a8f80(0xdb5)+'0px;f'+_0x5a8f80(0xb37)+_0x5a8f80(0xdf3)+':700;'+_0x5a8f80(0x884)+'r:poi'+'nter;'+_0x5a8f80(0x960)+_0x5a8f80(0xc91)+_0x5a8f80(0xb2f)+_0x5a8f80(0x696)),'<butt'+'on\x20id'+'=\x22sw2'+'-togg'+_0x5a8f80(0xdcc)+'tyle='+'\x22back'+_0x5a8f80(0x56e)+_0x5a8f80(0x4c5)+_0x5a8f80(0x279)+'ent;b'+'order'+_0x5a8f80(0x8e0)+_0x5a8f80(0xc8c)+'\x20rgba'+_0x5a8f80(0x886)+'143,1'+'77,.4'+');col'+_0x5a8f80(0x4bc)+_0x5a8f80(0xbea)+';bord'+'er-ra'+'dius:'+_0x5a8f80(0xe12)+_0x5a8f80(0xbd7)+'g:4px'+_0x5a8f80(0x6af)+_0x5a8f80(0x884)+'r:poi'+_0x5a8f80(0x3ed)+'\x22>ope'+_0x5a8f80(0xaeb)+_0x5a8f80(0x696)),_0x5a8f80(0x658)+_0x5a8f80(0xc6a)+_0x5a8f80(0x4ff)+_0x5a8f80(0x920)+_0x5a8f80(0xda4)+_0x5a8f80(0xa71)+_0x5a8f80(0x56e)+'d:tra'+_0x5a8f80(0x279)+_0x5a8f80(0xa20)+_0x5a8f80(0x55d)+':1px\x20'+_0x5a8f80(0xc8c)+'\x20rgba'+'(255,'+_0x5a8f80(0x687)+_0x5a8f80(0x60b)+_0x5a8f80(0xe06)+_0x5a8f80(0x4bc)+'7eef5'+_0x5a8f80(0x6c2)+_0x5a8f80(0xa78)+_0x5a8f80(0x74a)+'7px;p'+_0x5a8f80(0xbd7)+_0x5a8f80(0x698)+_0x5a8f80(0x6af)+_0x5a8f80(0x884)+_0x5a8f80(0xd2a)+_0x5a8f80(0x3ed)+_0x5a8f80(0x3c9)+'butto'+'n>')+_0x2f44ee['Rqksr']+_0x2f44ee[_0x5a8f80(0x215)],_0x5a8f80(0x283)+_0x5a8f80(0x995)+_0x5a8f80(0x3cc)+_0x5a8f80(0xa11)+'8px\x201'+'2px;b'+'order'+'-bott'+_0x5a8f80(0x584)+_0x5a8f80(0xccb)+'id\x20rg'+_0x5a8f80(0xbaa)+_0x5a8f80(0x633)+',177,'+'.18);'+'displ'+_0x5a8f80(0x3bb)+_0x5a8f80(0xac2)+'p:8px'+_0x5a8f80(0x757)+'n-ite'+'ms:ce'+_0x5a8f80(0x3ed)+'flex:'+_0x5a8f80(0xdce)+_0x5a8f80(0x754)+_0x5a8f80(0x8ee)+'rap:w'+'rap;\x22'+'>'),_0x5a8f80(0x658)+'on\x20id'+'=\x22sw2'+_0x5a8f80(0x2b0)+_0x5a8f80(0x7bf)+'yle=\x22'+'backg'+_0x5a8f80(0x716)+':tran'+_0x5a8f80(0x8c4)+'nt;bo'+'rder:'+_0x5a8f80(0x7f3)+_0x5a8f80(0x41a)+_0x5a8f80(0xb8d)+_0x5a8f80(0x3c4)+'43,17'+'7,.4)'+';colo'+_0x5a8f80(0x2a0)+_0x5a8f80(0xd3f)+_0x5a8f80(0x98b)+_0x5a8f80(0x774)+_0x5a8f80(0x820)+_0x5a8f80(0x428)+_0x5a8f80(0x932)+_0x5a8f80(0x9e7)+'10px;'+_0x5a8f80(0x884)+_0x5a8f80(0xd2a)+_0x5a8f80(0x3ed)+_0x5a8f80(0xe09)+_0x5a8f80(0xd2b)+_0x5a8f80(0xceb)+'tton>')+('<inpu'+_0x5a8f80(0xcc0)+_0x5a8f80(0x1d6)+'facto'+'r\x22\x20ty'+_0x5a8f80(0x436)+_0x5a8f80(0x964)+_0x5a8f80(0x4aa)+_0x5a8f80(0x9b1)+'ax=\x225'+_0x5a8f80(0x54e)+_0x5a8f80(0x247)+'1\x22\x20va'+'lue=\x22'+'1\x22\x20st'+'yle=\x22'+_0x5a8f80(0x59f)+_0x5a8f80(0x2d9)+_0x5a8f80(0x8d0)+'ent-c'+_0x5a8f80(0x2f2)),_0x4e9faa)+_0x5a8f80(0xda8)+(_0x5a8f80(0x566)+_0x5a8f80(0xb4f)+_0x5a8f80(0x30e)+'actor'+'label'+'\x22\x20sty'+'le=\x22c'+'olor:'+'#bda9'+_0x5a8f80(0x933)+_0x5a8f80(0x25f)+'th:34'+_0x5a8f80(0x243)+'1.0x<'+_0x5a8f80(0xc2d)+'>'),_0x2f44ee[_0x5a8f80(0x688)]),'<span'+_0x5a8f80(0xb4f)+_0x5a8f80(0x896)+_0x5a8f80(0x69b)+'style'+_0x5a8f80(0x671)+_0x5a8f80(0xb7e)+'d7a99'+'\x22>F9\x20'+'twice'+'\x20whil'+_0x5a8f80(0x344)+_0x5a8f80(0x3ba)+'/\x20spr'+'intin'+_0x5a8f80(0x529)+_0x5a8f80(0x798)+_0x5a8f80(0x48d)+_0x5a8f80(0xb7a)+'ich\x20f'+_0x5a8f80(0xd2d)+_0x5a8f80(0x213)+'ich.<'+_0x5a8f80(0xc2d)+'>'),_0x2f44ee['Rqksr'])+('<pre\x20'+_0x5a8f80(0x62f)+'w2-ou'+'t\x22\x20st'+_0x5a8f80(0x1d3)+'margi'+'n:0;p'+_0x5a8f80(0xbd7)+_0x5a8f80(0xdab)+'x\x2012p'+_0x5a8f80(0xc9d)+'rflow'+_0x5a8f80(0xd1b)+_0x5a8f80(0x4af)+':1\x201\x20'+_0x5a8f80(0xce7)+'white'+'-spac'+_0x5a8f80(0x701)+_0x5a8f80(0x9c1)+';word'+_0x5a8f80(0x2b2)+'k:bre'+'ak-wo'+_0x5a8f80(0x9eb)+_0x5a8f80(0xb4e)+'herit'+';')+(_0x5a8f80(0x70a)+'eight'+':62vh'+_0x5a8f80(0x559)+'\x20repo'+_0x5a8f80(0x953)+_0x5a8f80(0x656)+'his\x20p'+_0x5a8f80(0x723)+_0x5a8f80(0x355)+'es\x20it'+'self\x20'+_0x5a8f80(0x7b6)+_0x5a8f80(0x4bf)+'ame\x20f'+_0x5a8f80(0xafb)+_0x5a8f80(0x46f)+_0x5a8f80(0xb06)+_0x5a8f80(0xdbf)+_0x5a8f80(0xc27)+_0x5a8f80(0x6ea)+_0x5a8f80(0x622)+'\x20it\x20s'+_0x5a8f80(0x927)+_0x5a8f80(0x532)+_0x5a8f80(0xa40)+_0x5a8f80(0x8d5)+_0x5a8f80(0xdd4)+_0x5a8f80(0x761)+'t\x20inj'+_0x5a8f80(0x1df)+_0x5a8f80(0x81e)+_0x5a8f80(0x705)+'\x20cros'+_0x5a8f80(0x616)+'gin\x20g'+_0x5a8f80(0xb62)+_0x5a8f80(0x947)+_0x5a8f80(0x61d)+'>')+_0x2f44ee[_0x5a8f80(0xc66)];var _0x39672d=_0x48c0cc[_0x5a8f80(0xa64)+'Selec'+_0x5a8f80(0x5d4)]('#sw2-'+_0x5a8f80(0x858)+'s'),_0x3892b5=_0x48c0cc['query'+_0x5a8f80(0x79f)+_0x5a8f80(0x5d4)](_0x5a8f80(0x7ea)+'build'),_0x202e9d=_0x48c0cc[_0x5a8f80(0xa64)+'Selec'+'tor'](_0x5a8f80(0x7ea)+_0x5a8f80(0x600)),_0x32f8f2=_0x48c0cc['query'+'Selec'+_0x5a8f80(0x5d4)](_0x5a8f80(0x7ea)+_0x5a8f80(0xc34)),_0x11bfbc=_0x48c0cc[_0x5a8f80(0xa64)+_0x5a8f80(0x79f)+_0x5a8f80(0x5d4)]('#sw2-'+'x'),_0x479465=_0x48c0cc[_0x5a8f80(0xa64)+'Selec'+'tor'](_0x5a8f80(0x7ea)+_0x5a8f80(0xc23)+'e'),_0x5676d7=_0x48c0cc[_0x5a8f80(0xa64)+_0x5a8f80(0x79f)+'tor'](_0x2f44ee['bLCql']),_0xf0889f=_0x48c0cc[_0x5a8f80(0xa64)+_0x5a8f80(0x79f)+_0x5a8f80(0x5d4)](_0x5a8f80(0x7ea)+_0x5a8f80(0xdeb)),_0x4d81ec=_0x48c0cc['query'+'Selec'+'tor']('#sw2-'+'speed'),_0x5aded0=_0x48c0cc['query'+_0x5a8f80(0x79f)+_0x5a8f80(0x5d4)]('#sw2-'+_0x5a8f80(0x2a3)+'r'),_0x41d46d=_0x48c0cc[_0x5a8f80(0xa64)+_0x5a8f80(0x79f)+'tor'](_0x2f44ee['bQLEt']),_0x113b8c=_0x48c0cc[_0x5a8f80(0xa64)+_0x5a8f80(0x79f)+_0x5a8f80(0x5d4)](_0x2f44ee[_0x5a8f80(0xa22)]),_0x288bf4=null,_0x5d2807=![];function _0x249084(){var _0x393bca=_0x5a8f80;if(_0x5676d7)_0x5676d7['style'][_0x393bca(0x317)+'ay']=_0x5d2807?'':_0x393bca(0xa9e);if(_0x479465)_0x479465['textC'+_0x393bca(0x284)+'t']=_0x5d2807?'close':_0x2f44ee['YtaXm'];_0x48c0cc[_0x393bca(0x995)]['width']=_0x5d2807?_0x2f44ee[_0x393bca(0xb2a)]:'auto',_0x48c0cc['style']['backg'+'round']=_0x5d2807?_0x393bca(0x568)+'1d':_0x393bca(0xb8d)+'21,12'+',29,.'+'9)';}if(_0x479465)_0x479465[_0x5a8f80(0x930)+'ck']=function(){var _0x45f4da=_0x5a8f80;if(_0x45f4da(0x220)===_0x45f4da(0x220))_0x5d2807=!_0x5d2807,_0x249084();else return{'o':'0x'+_0x39b470[0xb47*-0x2+0x7f1+0xe9d][_0x45f4da(0x252)+_0x45f4da(0x74d)](-0x2dd*-0x1+-0x1f30*-0x1+-0x21fd),'v':_0x40bc0a(_0x400452+_0x5ad631[0xfa7+-0x1d56+-0xdaf*-0x1],_0x2161ed[-0x250c*0x1+-0x9*0x3+0x2528])};};_0x249084();if(_0x11bfbc)_0x11bfbc[_0x5a8f80(0x930)+'ck']=function(){_0x440ff4(!![]);};if(_0xf0889f)_0xf0889f[_0x5a8f80(0x930)+'ck']=function(){var _0x141502=_0x5a8f80;_0x2f44ee['XIsbw'](_0x1f8f89,_0x2f44ee[_0x141502(0x4ca)]);};var _0x5b6958=![];function _0x5f1901(){var _0x332cb6=_0x5a8f80;_0x1f8f89(_0x332cb6(0x34a),{'on':_0x5b6958,'factor':_0x2c27fd['uYskf'](parseFloat,_0x5aded0[_0x332cb6(0x8de)])||-0x344+-0x40e*-0x7+-0x3*0x85f});}if(_0x4d81ec)_0x4d81ec['oncli'+'ck']=function(){var _0x524a16=_0x5a8f80;if(_0x2c27fd['VKecn'](_0x2c27fd[_0x524a16(0xb4a)],_0x2c27fd[_0x524a16(0xb4a)])){if(_0x2a1cbe[_0x524a16(0x841)+'h'])return!![];if(!_0x4c560b['Unity'+_0x524a16(0xa16)+_0x524a16(0x9e1)]||!_0x1339c6[_0x524a16(0xa07)+_0x524a16(0xa16)+'dkit'][_0x524a16(0x7d3)+'me'])return![];var _0x427689=_0x46bc63['Unity'+'WebMo'+'dkit'][_0x524a16(0x7d3)+'me'];if(!_0x427689['plugi'+'ns']||!_0x427689['plugi'+'ns'][_0x524a16(0x841)+'h'])return![];_0xfe9be8=_0xfadd1d['Unity'+'WebMo'+_0x524a16(0x9e1)][_0x524a16(0xb55)+_0x524a16(0x99c)+'er'],_0x428d2a=_0x11c6a6||_0x427689[_0x524a16(0xd50)+'ns'][_0x2c27fd[_0x524a16(0x973)](_0x427689[_0x524a16(0xd50)+'ns']['lengt'+'h'],0x229+0x1501+-0x34f*0x7)];if(!_0x3591b2||typeof _0x297105[_0x524a16(0xa51)+_0x524a16(0x6d1)]!==_0x524a16(0xb3f)+'ion')return![];for(var _0x146121=0x1*-0xf86+0x1f0*0x1+0x6cb*0x2;_0x2c27fd[_0x524a16(0x8bd)](_0x146121,_0x1402ce[_0x524a16(0x841)+'h']);_0x146121++){var _0x491946=_0x9a51d1[_0x146121];try{var _0x522d4b=_0x4042e6['hookP'+_0x524a16(0x6d1)]({'typeName':_0x491946['type'],'methodName':_0x2c27fd[_0x524a16(0xc7d)],'params':[_0x524a16(0xd08),_0x2c27fd['guVjH']],'returnType':_0x53f2a7},_0x2c27fd['vmLqW'](_0x329938,_0x491946[_0x524a16(0xd51)],_0x491946[_0x524a16(0x4c4)],_0x491946[_0x524a16(0x315)]));_0xfd714[_0x524a16(0x499)]({'type':_0x491946['type'],'hook':_0x522d4b,'keep':_0x491946['keep']});}catch(_0x5ee70e){_0x51f23a[_0x524a16(0x499)](_0x2c27fd[_0x524a16(0x924)](_0x491946['type']+':\x20',_0x3ef78c(_0x5ee70e&&_0x5ee70e['messa'+'ge']||_0x5ee70e)['slice'](-0xafc*-0x1+-0x22d7+-0xc5*-0x1f,-0x6f5+0x243f+-0x1caa)));}}return _0x45da95[_0x524a16(0x841)+'h']>-0x25c3+-0x13e8+0x39ab;}else _0x5b6958=!_0x5b6958,_0x4d81ec['textC'+'onten'+'t']=_0x5b6958?_0x2c27fd['BzHZE']:_0x2c27fd[_0x524a16(0x5e6)],_0x4d81ec[_0x524a16(0x995)]['backg'+_0x524a16(0x716)]=_0x5b6958?_0x4e9faa:'trans'+_0x524a16(0x6e5)+'t',_0x4d81ec['style']['color']=_0x5b6958?'#2a0f'+'1b':_0x2c27fd[_0x524a16(0x262)],_0x5f1901();};if(_0x5aded0)_0x5aded0[_0x5a8f80(0x74f)+'ut']=function(){var _0x1e605f=_0x5a8f80;if(_0x41d46d)_0x41d46d['textC'+'onten'+'t']=(parseFloat(_0x5aded0[_0x1e605f(0x8de)])||0x7e2*-0x2+-0x7eb+0xbd8*0x2)['toFix'+'ed'](0x69d+0x2046+0xe*-0x2c7)+'x';_0x2c27fd[_0x1e605f(0xa39)](_0x5f1901);};if(_0x32f8f2)_0x32f8f2['oncli'+'ck']=function(){var _0x36d0ea=_0x5a8f80,_0x1a2216=_0x2c27fd[_0x36d0ea(0x924)](_0x4b38f3,'\x0a')+(_0x288bf4?JSON['strin'+'gify'](_0x288bf4,null,-0x7ac+0x26d0+-0x3*0xa61):'')+'\x0a'+_0x142eea,_0x322729=function(){var _0x11f4fc=_0x36d0ea;if(_0x32f8f2)_0x32f8f2[_0x11f4fc(0x7bd)+_0x11f4fc(0x284)+'t']='Copie'+'d';};if(navigator['clipb'+_0x36d0ea(0xb15)]&&navigator[_0x36d0ea(0x6d8)+'oard'][_0x36d0ea(0x549)+'Text'])navigator[_0x36d0ea(0x6d8)+'oard'][_0x36d0ea(0x549)+'Text'](_0x1a2216)[_0x36d0ea(0xbbd)](_0x322729,function(){_0x819452();});else _0x819452();function _0x819452(){var _0x4f5b13=_0x36d0ea;if(_0x4f5b13(0x5e7)!==_0x4f5b13(0x5e7)){if(_0x1b84f2['el'])_0x26b7b3['el'][_0x4f5b13(0x995)][_0x4f5b13(0x317)+'ay']=_0x4f5b13(0xa9e);return;}else{var _0x15659f=(_0x4f5b13(0x376)+'|2|0|'+'5|1')['split']('|'),_0x516351=0x204*-0xb+-0x10*-0xa3+0xbfc;while(!![]){switch(_0x15659f[_0x516351++]){case'0':_0x56e1a1[_0x4f5b13(0x418)+'t']();continue;case'1':_0x56e1a1[_0x4f5b13(0x5bd)+'e']();continue;case'2':document[_0x4f5b13(0x99d)][_0x4f5b13(0x3d7)+_0x4f5b13(0x25d)+'d'](_0x56e1a1);continue;case'3':if(!document[_0x4f5b13(0x99d)])return;continue;case'4':var _0x56e1a1=document[_0x4f5b13(0x97b)+'eElem'+_0x4f5b13(0x6c9)](_0x4f5b13(0x6f6)+_0x4f5b13(0xb0d));continue;case'5':try{document[_0x4f5b13(0x914)+'omman'+'d']('copy'),_0x322729();}catch(_0x4b9eec){}continue;case'6':_0x56e1a1[_0x4f5b13(0x8de)]=_0x1a2216;continue;}break;}}}};setTimeout(function(){var _0x40afa1=_0x5a8f80;if(_0x288bf4)return;if(!_0x39672d||!_0x202e9d)return;_0x39672d[_0x40afa1(0x7bd)+'onten'+'t']='no\x20re'+_0x40afa1(0xcec)+_0x40afa1(0x9e3)+_0x40afa1(0x5f8)+'—\x20fra'+'me\x20no'+'t\x20inj'+_0x40afa1(0xa3e)+'?',_0x39672d[_0x40afa1(0x995)][_0x40afa1(0xe02)]='#ffb3'+'c7',_0x202e9d['textC'+'onten'+'t']=_0x2c27fd[_0x40afa1(0x795)]+_0x2c27fd[_0x40afa1(0xa91)]+_0x2c27fd[_0x40afa1(0x78e)]+_0x2c27fd['Qmfrz']+_0x2c27fd['GOHgB']+(_0x40afa1(0x535)+'Both\x20'+'sakur'+_0x40afa1(0xbc7)+_0x40afa1(0xa84)+_0x40afa1(0xab9)+'r.js\x20'+_0x40afa1(0x9bc)+'he\x20ol'+_0x40afa1(0xc58)+_0x40afa1(0x7be)+'ipt\x20a'+_0x40afa1(0xa23))+('\x20\x20\x20\x20\x20'+_0x40afa1(0xd84)+'lled\x20'+'—\x20two'+'\x20copi'+'es\x20of'+_0x40afa1(0x307)+_0x40afa1(0xb24)+'\x20patc'+'h\x20Web'+_0x40afa1(0x5d3)+_0x40afa1(0xb9b)+_0x40afa1(0xb68)+'tiate'+_0x40afa1(0x7d2))+_0x2c27fd[_0x40afa1(0x1ea)];},0x15d86+0x1b7ff+0x17*-0x1823);var _0x4398d3={'set':function(_0x2f8923){var _0xf55e93=_0x5a8f80,_0x295084={'lxucT':function(_0x4750a6,_0x5590e8){return _0x2f44ee['prrJc'](_0x4750a6,_0x5590e8);},'mCMoV':function(_0x4b0ab0,_0x2e6dbb){return _0x4b0ab0*_0x2e6dbb;},'OHCkG':function(_0xc96532,_0x447c37){return _0xc96532+_0x447c37;},'bWGDI':function(_0x1358fa,_0x15054b){return _0x1358fa*_0x15054b;},'NEmDG':function(_0x4d516e,_0x59d88a){var _0x504953=_0x23db;return _0x2f44ee[_0x504953(0x672)](_0x4d516e,_0x59d88a);}};_0x288bf4=_0x2f8923;if(_0x32f8f2)_0x32f8f2[_0xf55e93(0x995)]['displ'+'ay']='';if(_0x3892b5){if(_0x2f44ee[_0xf55e93(0xd05)]!=='LPgEs'){var _0x216b67=('4|0|1'+'|3|2')[_0xf55e93(0x33c)]('|'),_0x4b3bfd=-0x1b11*-0x1+-0x1eea+0x3d9;while(!![]){switch(_0x216b67[_0x4b3bfd++]){case'0':var _0x5e6a35=_0x396453;continue;case'1':var _0x5016ef=_0x2f8923['versi'+'on']||'';continue;case'2':_0x3892b5['style'][_0xf55e93(0x98b)+'rColo'+'r']=_0x2f44ee[_0xf55e93(0x4a9)](_0x5016ef,_0x5e6a35)?_0xf55e93(0xb8d)+'255,1'+'43,17'+'7,.35'+')':_0x2f44ee[_0xf55e93(0xb60)];continue;case'3':_0x3892b5[_0xf55e93(0x995)][_0xf55e93(0xe02)]=_0x5016ef===_0x5e6a35?_0x4e9faa:_0x2f44ee[_0xf55e93(0xb60)];continue;case'4':_0x3892b5['textC'+'onten'+'t']='v'+(_0x2f8923['versi'+'on']||'?');continue;}break;}}else{_0x5e89e9();return;}}var _0x2ac811=_0x2f8923['insta'+_0xf55e93(0xd7a)]&&_0x2f8923[_0xf55e93(0xd84)+_0xf55e93(0xd7a)][_0xf55e93(0x711)+_0xf55e93(0x640)+'ler'],_0x1cb616=Math[_0xf55e93(0x716)]((_0x2f8923['elaps'+_0xf55e93(0xcc8)]||0x770+-0x216b*-0x1+-0x1*0x28db)/(-0x222b+-0x1*0x24a1+0x255a*0x2));if(_0x39672d){var _0x226deb,_0xdd4166;if(_0x2ac811&&_0x2f8923[_0xf55e93(0x227)+'y']&&_0x2f8923[_0xf55e93(0x227)+'y'][_0xf55e93(0x711)+_0xf55e93(0x640)+_0xf55e93(0x660)]){if(_0x2f44ee[_0xf55e93(0x741)]===_0x2f44ee[_0xf55e93(0x85b)]){var _0x2a535c=_0x4a169d[0xe*-0xa7+-0x2*0xdab+0x123c*0x2]-_0x2b33f7[_0xf55e93(0xcf4)][-0x1c41*-0x1+0xd*-0x18+-0x1b09],_0xf5e57=_0x2c27fd[_0xf55e93(0x973)](_0x319770[-0xb57+0x9a1+0x1b8],_0x3399d4['feet'][0x229e+-0x413*0x7+-0x617]);_0x4e61e7['d']=_0x714486['sqrt'](_0x2c27fd['rmoph'](_0x2a535c*_0x2a535c,_0xf5e57*_0xf5e57)),_0xe11897['beari'+'ng']=_0x2c27fd['CBwMy'](_0x2a3a49[_0xf55e93(0x8d2)](_0x2a535c,_0xf5e57),0x23cf+-0x1*-0x24c7+-0x47e2)/_0x333f70['PI'];}else _0x226deb=_0x2f44ee[_0xf55e93(0x3a4)](_0x2f44ee[_0xf55e93(0x3a4)]('LIVE\x20'+'·\x20'+Object[_0xf55e93(0x5ea)](_0x2f8923['insta'+_0xf55e93(0xd7a)])[_0xf55e93(0x841)+'h'],_0xf55e93(0x7d6)+_0xf55e93(0xac7)+'\x20'),_0x1cb616)+'s',_0xdd4166=_0x2f44ee['QlPMF'];}else{if(_0x2f8923['hooks'+_0xf55e93(0x765)+'ed']>-0x242c+0x2484+-0x58)_0x226deb=_0x2f44ee[_0xf55e93(0x985)]+_0x1cb616+'s',_0xdd4166=_0xf55e93(0x563)+'8a';else{if(_0x2f8923['scrip'+_0xf55e93(0xa8c)])_0x226deb='metad'+'ata\x20r'+_0xf55e93(0xda5)+'·\x20'+_0x1cb616+'s',_0xdd4166=_0x2f44ee[_0xf55e93(0xbed)];else{if(_0x2f44ee['LKhLa'](_0x2f44ee['WFKUO'],_0x2f44ee['WFKUO']))_0x226deb=_0x2f44ee[_0xf55e93(0xd1f)](_0x2f8923['arm']&&_0x2f8923['arm']['ok']?_0x2f44ee['zzemp']:'armin'+_0xf55e93(0xdca),_0x1cb616)+'s',_0xdd4166='#ffd4'+'8a';else{var _0x32de8c=_0x2c27fd[_0xf55e93(0x263)][_0xf55e93(0x33c)]('|'),_0x26c8db=0x2*-0x1115+-0x100c+0x3236;while(!![]){switch(_0x32de8c[_0x26c8db++]){case'0':_0x5799fe['fillS'+_0xf55e93(0x2a4)]=_0xbe9a2d?_0xf55e93(0x421)+'6a':'#ff6e'+'74';continue;case'1':_0x1aad2a[_0xf55e93(0xd5b)]();continue;case'2':var _0xbe9a2d=_0x107ff5!==null&&_0x34ed8f[_0xf55e93(0x7ca)]===_0x48fd5f;continue;case'3':var _0x36890b=_0x2302aa,_0x41a1a6=_0x6a200;continue;case'4':_0x2bf2a7[_0xf55e93(0xab6)](_0x36890b,_0x41a1a6,_0xbe9a2d?-0x20*-0xc5+-0x1b46+0x2a8:0x86d*-0x1+0x25b0+-0x1d40+0.20000000000000018,-0xf99+0x23a9+-0xd6*0x18,_0x2c27fd[_0xf55e93(0xbaf)](_0x4554a1['PI'],0x755*-0x1+0x493+-0xc*-0x3b));continue;case'5':_0x39acdf[_0xf55e93(0xd16)+'Path']();continue;case'6':var _0x4b8ae3=_0x41a1ec['sqrt'](_0x2c27fd[_0xf55e93(0x924)](_0x2c27fd[_0xf55e93(0x45f)](_0x48ee15,_0x48ee15),_0x4d5be*_0x4d5be));continue;case'7':var _0x34ed8f=_0x2176ec[_0xf55e93(0x56a)][_0x4dfec2];continue;case'8':_0x354bbd++;continue;case'9':var _0x48ee15=_0x2c27fd[_0xf55e93(0x973)](_0x34ed8f['x'],_0x4da20a[_0xf55e93(0xcf4)][0x2f*0xb5+0x1*-0x22ab+0x170])*_0x117c84,_0x4d5be=(_0x34ed8f['z']-_0x1186b4[_0xf55e93(0xcf4)][-0x16f6+-0x231f+0x3a17])*_0x4e4852;continue;case'10':_0x4b8ae3>_0x58f7ee-(-0xd*-0x213+0x136b+0x7ba*-0x6)?(_0x36890b=_0x2c27fd[_0xf55e93(0x924)](_0x37f70c,_0x48ee15/_0x4b8ae3*(_0x135d9f-(-0x3b*-0x2c+0x1d*0x51+-0x134b))),_0x41a1a6=_0x2c27fd[_0xf55e93(0x90e)](_0x3203f6,_0x2c27fd['LIpVl'](_0x2c27fd[_0xf55e93(0xc59)](_0x4d5be,_0x4b8ae3),_0x2c27fd[_0xf55e93(0x973)](_0x4c4b94,-0x6e0+0x17e6*0x1+0x4*-0x440)))):(_0x36890b=_0x3a9ebe+_0x48ee15,_0x41a1a6=_0x714713+_0x4d5be);continue;}break;}}}}}_0x39672d[_0xf55e93(0x7bd)+_0xf55e93(0x284)+'t']=_0x226deb,_0x39672d[_0xf55e93(0x995)]['color']=_0xdd4166;}_0x113b8c&&(_0x113b8c[_0xf55e93(0x7bd)+_0xf55e93(0x284)+'t']=_0x2f8923['diff']&&_0x2f8923[_0xf55e93(0x271)][_0xf55e93(0x841)+'h']?'Diff\x20'+_0xf55e93(0x749)+'apsho'+_0xf55e93(0x7f0)+_0x2f8923[_0xf55e93(0x271)]['join'](',\x20'):_0xf55e93(0x655)+_0xf55e93(0x7c6)+_0xf55e93(0x867)+_0xf55e93(0x1c2)+'ng\x20/\x20'+'sprin'+_0xf55e93(0x517)+_0xf55e93(0xc72)+_0xf55e93(0x43e)+'marks'+'\x20whic'+_0xf55e93(0x2e6)+'ld\x20is'+'\x20whic'+'h.');if(_0x2f8923[_0xf55e93(0x34a)]&&_0x4d81ec){_0x5b6958=!!_0x2f8923['speed']['on'],_0x4d81ec[_0xf55e93(0x7bd)+_0xf55e93(0x284)+'t']=_0x5b6958?_0xf55e93(0x3cd)+'\x20ON':_0x2f44ee['UyFXl'],_0x4d81ec['style'][_0xf55e93(0x4be)+'round']=_0x5b6958?_0x4e9faa:_0xf55e93(0x5e0)+'paren'+'t',_0x4d81ec['style'][_0xf55e93(0xe02)]=_0x5b6958?_0x2f44ee['SkwHl']:_0xf55e93(0xaad)+'f5';if(_0x41d46d&&_0x2f8923[_0xf55e93(0x34a)]['facto'+'r']){if(_0xf55e93(0x540)!=='PIhkL')try{if(_0x5df71d[_0x4641c][_0xf55e93(0xda0)+_0xf55e93(0x80a)+_0xf55e93(0x796)])_0xe25f9c[_0x3371bc][_0xf55e93(0xda0)+_0xf55e93(0x80a)+'dow']['postM'+_0xf55e93(0x623)+'e'](_0xcbb203,'*');}catch(_0x407602){}else _0x41d46d[_0xf55e93(0x7bd)+'onten'+'t']=_0x2f44ee[_0xf55e93(0xb2b)](Number,_0x2f8923[_0xf55e93(0x34a)][_0xf55e93(0x2a3)+'r'])['toFix'+'ed'](-0xf*-0x21b+0x1d5*0xb+-0x143*0x29)+'x';}}if(_0x202e9d)try{_0x202e9d[_0xf55e93(0x7bd)+'onten'+'t']=_0x3ad5d2(_0x2f8923);}catch(_0x1c01bc){if(_0x2f44ee['fAYVA']!=='xnJpi')_0x202e9d[_0xf55e93(0x7bd)+_0xf55e93(0x284)+'t']=JSON[_0xf55e93(0x74e)+'gify'](_0x2f8923,null,-0x4*0x1a0+-0x2482+0x2b03);else{var _0x2d45c6=_0x23faac[_0xf55e93(0xa52)]['fwd'];if(_0x3c07fa['abs'](_0x2d45c6[0x2325+-0xa7*0x2b+-0x717])<-0x371*0x2+0x23bc+0x1*-0x1cda+0.01){var _0x3f84af=_0x84d85a['tan'](_0x295084[_0xf55e93(0xd53)](_0x295084['lxucT'](_0x295084['mCMoV'](_0x26cdd7[_0xf55e93(0x7e7)],_0xc5d7e7['PI']),0x2*0x1107+-0x1719+-0xa41),-0x1*0x2439+-0x7*0x265+0x34fe)),_0x8a5508=0x16c9+-0x1908+0x2d*0xd,_0x1425cc=0x23c6+-0xed*0x1d+0x2*-0x476,_0x5167ff=[_0x295084['OHCkG'](_0x4c6e44['pos'][-0x113b+0x2e*0x95+-0x98b],_0x2d45c6[0x1f2+0x3b*-0xa3+0x33d*0xb]*_0x8a5508),_0x16137b['pos'][0xb1f+0xed3+-0xe5*0x1d]+_0x2d45c6[-0xc*-0x2e7+-0x16f8+-0xbdb]*_0x8a5508+_0x1425cc,_0xae7194[_0xf55e93(0xc63)][-0x76d+0x6*0x31d+-0xb3f]+_0x2d45c6[0x1b*0xec+-0x3*0x841+-0x1f]*_0x8a5508],_0x33bfe9=_0xfcdc6f(_0x57f76d[_0xf55e93(0xc63)],_0x5167ff,_0x5c795a,_0x414199[_0xf55e93(0x98d)+'s']['h']);if(_0x33bfe9){var _0x5569eb=_0x295084['mCMoV'](-0x2124+-0xd75+0x2e99+0.5-_0x33bfe9['y']/_0x58f140[_0xf55e93(0x98d)+'s']['h'],0x5ce+0x1*-0x1e3f+0x1873),_0x2a1f88=_0x1425cc/_0x8a5508/_0x3f84af;_0x336564['verti'+_0xf55e93(0x2e1)]={'got':_0x295084[_0xf55e93(0xd53)](_0x4255cf[_0xf55e93(0x716)](_0x295084['bWGDI'](_0x5569eb,0x133f+-0xcf6+-0x7*0x57)),0x5c5+0x8*-0x5b+0xfb),'want':_0x27fd3b[_0xf55e93(0x716)](_0x2a1f88*(0x24a9*-0x1+-0x23f6+0x1*0x4c87))/(-0x7f2+-0x1*-0xf5+0xae5),'off':_0x295084['NEmDG'](_0x966d75['round'](_0x295084['bWGDI'](_0x5569eb-_0x2a1f88,0x28*-0x80+0x16e1+0x1*0x107)),0x59*-0x10+-0x1*0x67f+0xff7)};}}}}console['log'](_0x2f44ee['JJXYw'],_0x2f44ee['rvTlT']+_0x4e9faa+_0x2f44ee[_0xf55e93(0xa61)],_0x2f8923),console[_0xf55e93(0x8d3)](_0x2f44ee['OgUQO'](_0x2f44ee[_0xf55e93(0xbfc)](_0x4b38f3+'\x0a'+JSON['strin'+_0xf55e93(0x5c0)](_0x2f8923,null,0x347*-0x6+-0x4f2*-0x7+-0x1*0xef3),'\x0a'),_0x142eea));}};return _0x48c0cc[_0x5a8f80(0xd4e)+'et'][_0x5a8f80(0xc9e)]='1',_0x48c0cc[_0x5a8f80(0xc9e)]=_0x4398d3,_0x4398d3;}function _0x3ad5d2(_0x1f8b5d){var _0x1f4ac7=_0x3e9452,_0x4751b7={'eGhMW':function(_0x57d3dc,_0x4731bd,_0x1e5e36){return _0x57d3dc(_0x4731bd,_0x1e5e36);},'VkhsK':function(_0x39bc5e,_0x294bbd){return _0x39bc5e*_0x294bbd;}};if(_0x2f44ee['fbMlr']===_0x2f44ee[_0x1f4ac7(0x3f2)]){var _0x3286fa=[];_0x3286fa[_0x1f4ac7(0x499)](_0x2f44ee[_0x1f4ac7(0x7f2)](_0x2f44ee[_0x1f4ac7(0x7c2)](_0x1f4ac7(0xd9a)+_0x1f4ac7(0xbe7),_0x1f8b5d['host']||'?'),_0x2f44ee['bVtKY'])+Math[_0x1f4ac7(0x716)]((_0x1f8b5d[_0x1f4ac7(0x631)+_0x1f4ac7(0xcc8)]||-0x50b*0x7+0x138d+0xfc0)/(-0x3b2*0x7+0x19c3*0x1+0x403))+'s)'),_0x3286fa[_0x1f4ac7(0x499)](_0x2f44ee['WuPtQ'](_0x2f44ee[_0x1f4ac7(0x7a1)](_0x2f44ee[_0x1f4ac7(0x408)](_0x1f4ac7(0x328)+'\x20\x20\x20\x20',_0x1f8b5d[_0x1f4ac7(0x615)]?'yes':'no')+('\x20\x20\x20co'+_0x1f4ac7(0x539)+'\x20'),_0x1f8b5d['il2Cp'+_0x1f4ac7(0xdc5)+'ext']?_0x1f4ac7(0x332):'no'),_0x2f44ee[_0x1f4ac7(0x9fd)])+(_0x1f8b5d[_0x1f4ac7(0x29e)+_0x1f4ac7(0x2bb)]!=null?_0x1f8b5d[_0x1f4ac7(0x29e)+_0x1f4ac7(0x2bb)]:'?')),_0x3286fa[_0x1f4ac7(0x499)](_0x2f44ee['htGRS']('hooks'+_0x1f4ac7(0xbe7)+_0x1f8b5d[_0x1f4ac7(0x9e4)+'Appli'+'ed']+'/',_0x1f8b5d['hooks'+_0x1f4ac7(0xde0)])+(_0x1f4ac7(0xb35)+'ied')),_0x3286fa['push']('');var _0x43f215=_0x1f8b5d[_0x1f4ac7(0xd84)+_0x1f4ac7(0xd7a)]||{},_0x366751=Object[_0x1f4ac7(0x5ea)](_0x43f215);!_0x366751[_0x1f4ac7(0x841)+'h']&&(_0x3286fa[_0x1f4ac7(0x499)](_0x1f4ac7(0x4f4)+_0x1f4ac7(0x370)+_0x1f4ac7(0x78a)+_0x1f4ac7(0x546)+_0x1f4ac7(0xa98)+_0x1f4ac7(0x447)),_0x3286fa[_0x1f4ac7(0x499)](''),_0x3286fa['push'](_0x2f44ee[_0x1f4ac7(0xd29)]),_0x3286fa[_0x1f4ac7(0x499)](_0x1f4ac7(0xb6a)+'date\x20'+_0x1f4ac7(0xd98)+'et,\x20o'+_0x1f4ac7(0x238)+'\x20sign'+_0x1f4ac7(0xdf2)+'\x20did\x20'+'not\x20m'+_0x1f4ac7(0x8c9)));for(var _0x10cacb=-0x22bb+-0x3*0x499+0x1*0x3086;_0x10cacb<_0x366751[_0x1f4ac7(0x841)+'h'];_0x10cacb++){var _0x7c161a=_0x366751[_0x10cacb];_0x3286fa[_0x1f4ac7(0x499)](_0x2f44ee['WuPtQ'](_0x7c161a+'\x20@\x20',_0x43f215[_0x7c161a]));}_0x3286fa['push']('');var _0x58bd82=_0x1f8b5d['surve'+'y']||{},_0x3db7e9=Object['keys'](_0x58bd82);for(var _0x3cc139=-0x1ac1+-0x192*0x1+0x1c53;_0x3cc139<_0x3db7e9['lengt'+'h'];_0x3cc139++){if(_0x2f44ee[_0x1f4ac7(0x4a9)](_0x2f44ee['Anoyc'],_0x2f44ee['Anoyc'])){var _0x2e3f44=_0x3db7e9[_0x3cc139],_0x315f56=_0x58bd82[_0x2e3f44];if(!_0x315f56||!_0x315f56['lengt'+'h'])continue;_0x3286fa['push'](_0x2f44ee[_0x1f4ac7(0xd1f)](_0x2f44ee[_0x1f4ac7(0x2dd)],_0x2e3f44)+'\x20'+new Array(Math[_0x1f4ac7(0x57a)](-0x3*0xaf1+-0x17be+0x1c49*0x2,_0x2f44ee['uToPz'](0xb71*0x3+0x2266+0x79f*-0x9,_0x2e3f44[_0x1f4ac7(0x841)+'h'])))[_0x1f4ac7(0xc01)]('─')),_0x3286fa['push']('\x20\x20off'+_0x1f4ac7(0x7b0)+_0x1f4ac7(0x62c)+_0x1f4ac7(0xd3d)+'\x20\x20\x20va'+_0x1f4ac7(0x876)+'\x20\x20\x20\x20\x20'+_0x1f4ac7(0xd3d)+'raw');for(var _0x61efd0=-0x1*0x1d09+0x1765+0x5a4;_0x2f44ee['wnzUc'](_0x61efd0,_0x315f56[_0x1f4ac7(0x841)+'h']);_0x61efd0++){var _0x4fb4db=_0x315f56[_0x61efd0],_0x527e94=_0x2f44ee[_0x1f4ac7(0x27c)](typeof _0x4fb4db['v'],_0x1f4ac7(0x71a)+'r')?_0x2f44ee[_0x1f4ac7(0xd23)](Math[_0x1f4ac7(0x716)](_0x2f44ee[_0x1f4ac7(0x611)](_0x4fb4db['v'],0x1f42*-0x1+0x3*0xc07+-0xeb)),0x1df0+-0x2*0xad+-0x2be*0x9):_0x4fb4db['v'];_0x3286fa[_0x1f4ac7(0x499)](_0x2f44ee['cQcqe']('\x20\x20'+('0x'+_0x4fb4db['o']['toStr'+'ing'](0x3*0x26+-0x202*0xd+-0x4*-0x66e))['padEn'+'d'](-0x22*-0x81+-0x61b*0x1+-0xaff)+'\x20'+_0x4fb4db['k']['padEn'+'d'](-0x1af*-0x4+-0x15e9+0x1*0xf38)+'\x20',String(_0x527e94)['padEn'+'d'](-0x1*-0x455+0x3da+-0x81f))+'\x20'+(_0x4fb4db[_0x1f4ac7(0x9a5)]||''));}_0x3286fa[_0x1f4ac7(0x499)]('');}else _0x7dfe52=_0x4751b7[_0x1f4ac7(0x40a)](_0x5af39c,_0x533fa8,_0x3939e8||0x2432+0x1a7a*-0x1+-0x986);}if(_0x1f8b5d['warni'+_0x1f4ac7(0xb4b)]&&_0x1f8b5d['warni'+'ngs'][_0x1f4ac7(0x841)+'h']){_0x3286fa[_0x1f4ac7(0x499)](_0x2f44ee[_0x1f4ac7(0x304)]);for(var _0x3525dd=0x230*-0x8+0x3de+0x2*0x6d1;_0x3525dd<_0x1f8b5d[_0x1f4ac7(0x628)+'ngs'][_0x1f4ac7(0x841)+'h'];_0x3525dd++)_0x3286fa['push'](_0x1f4ac7(0x24e)+_0x1f8b5d['warni'+_0x1f4ac7(0xb4b)][_0x3525dd]);}return _0x3286fa[_0x1f4ac7(0xc01)]('\x0a');}else _0x47718c['worst'+_0x1f4ac7(0xcba)]=_0x141e05['round'](_0x4751b7[_0x1f4ac7(0xc21)](_0xdf04a,-0x428+-0x1f2*0x5+0x11ca))/(-0x17*0xfa+0x38f*0x3+0xfb1),_0x33bc92[_0x1f4ac7(0x512)+_0x1f4ac7(0x22b)+'ng']=_0x2e4d63['round'](_0x482733['beari'+'ng']);}window['addEv'+'entLi'+'stene'+'r'](_0x2f44ee[_0x3e9452(0xd0d)],function(_0x19e7d3){var _0x4cd27f=_0x3e9452;if('ueWNR'!==_0x2f44ee['naNYY']){var _0x46da82=_0x19e7d3[_0x4cd27f(0x3bc)];if(!_0x46da82||_0x2f44ee['gdokj'](_0x46da82[_0x4cd27f(0x751)+'ura'],_0x22972f))return;try{if(_0x2f44ee[_0x4cd27f(0xbe8)]===_0x2f44ee[_0x4cd27f(0x207)])return _0x21734e[_0x4cd27f(0xb04)]=_0x3cbc4f,_0x233229[_0x4cd27f(0xa52)]=_0x5d9f02(_0xdf95df),_0x40660e['ok']=!![],_0xbf9166['why']='',_0x28aeb3[_0x4cd27f(0x1c4)+'e']='camer'+_0x4cd27f(0x626)+'nsfor'+'m',_0x42ca8d;else{if(_0x2f44ee[_0x4cd27f(0x4a9)](_0x46da82['kind'],'hello')){_0x2f44ee[_0x4cd27f(0xc50)](_0x54f3cc)[_0x4cd27f(0x67b)]({'host':_0x46da82['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x46da82[_0x4cd27f(0xaf1)]==='repor'+'t')_0x2f44ee['MTaEi'](_0x54f3cc)[_0x4cd27f(0x67b)](_0x46da82['repor'+'t']);}}catch(_0x3e22b2){console['warn']('%c[sa'+_0x4cd27f(0x821)+_0x4cd27f(0xb97)+'l\x20upd'+_0x4cd27f(0x9d7)+'ailed',_0x2f44ee['hWoAX']('color'+':',_0x4e9faa),_0x3e22b2);}}else try{var _0x823879=_0x1c55cc();if(_0x823879[_0x4cd27f(0xa52)])return!![];var _0xfbe43=_0x5c438d();return!!(_0xfbe43&&_0x4caa45[_0x4cd27f(0x553)+_0x4cd27f(0xd85)]);}catch(_0x2fbcb7){return![];}});function _0x44b2db(){var _0x58f5bd=_0x3e9452,_0xe20ac6={'IPfcp':function(_0x2d5bd3){return _0x2d5bd3();}};'hLboF'===_0x58f5bd(0x59a)?_0x440ff4(!![]):_0xe20ac6[_0x58f5bd(0xd24)](_0x35963f);}if(document['body'])_0x44b2db();else document[_0x3e9452(0xad2)+'entLi'+_0x3e9452(0xcf2)+'r']('DOMCo'+_0x3e9452(0x65f)+'Loade'+'d',_0x44b2db,{'once':!![]});return;}window[_0x3e9452(0x8fd)+_0x3e9452(0x80f)+'W__']=window[_0x3e9452(0x8fd)+_0x3e9452(0x80f)+_0x3e9452(0x6ab)]||{'at':Date['now']()};function _0x2fe32f(_0x340f8a,_0x4e45dc){var _0x39eb40=_0x3e9452,_0xa15c={'__sakura':_0x22972f,'kind':_0x340f8a};if(_0x4e45dc){for(var _0x139f80 in _0x4e45dc)_0xa15c[_0x139f80]=_0x4e45dc[_0x139f80];}try{if(window[_0x39eb40(0x6e5)+'t']&&window[_0x39eb40(0x6e5)+'t']!==window)window[_0x39eb40(0x6e5)+'t'][_0x39eb40(0xb7c)+_0x39eb40(0x623)+'e'](_0xa15c,'*');}catch(_0x7b11bc){}try{if(window[_0x39eb40(0xc14)]&&window['top']!==window)window[_0x39eb40(0xc14)]['postM'+'essag'+'e'](_0xa15c,'*');}catch(_0x1a0bf9){}}console['log'](_0x2f44ee['wcFnv'](_0x3e9452(0x36e)+_0x3e9452(0x821)+_0x3e9452(0xb93)+_0x3e9452(0xc60)+'\x20ACTI'+'VE\x20v',_0x396453),_0x2f44ee[_0x3e9452(0x912)](_0x2f44ee[_0x3e9452(0x4df)]+_0x4e9faa,_0x2f44ee[_0x3e9452(0xa95)]),{'host':_0x171a1f,'href':location[_0x3e9452(0x324)],'version':_0x396453}),_0x2fe32f(_0x2f44ee['vWQbx'],{'host':_0x171a1f,'role':_0x28d129});var _0x43ef6b=window[_0x3e9452(0x8fd)+'URA_S'+_0x3e9452(0x6ab)]&&window['__SAK'+_0x3e9452(0x80f)+'W__']['at']||Date[_0x3e9452(0xafc)]();window[_0x3e9452(0xad2)+_0x3e9452(0x9ee)+_0x3e9452(0xcf2)+'r']('messa'+'ge',function(_0x25fb63){var _0x4ff6ae=_0x3e9452;if(_0x4ff6ae(0x4c7)===_0x2f44ee[_0x4ff6ae(0x824)])return _0x3224d4['error'+'s']['push'](_0x2f44ee[_0x4ff6ae(0x7ab)](_0x4ff6ae(0xa10)+_0x4ff6ae(0x8a2)+_0x4ff6ae(0x57d)+'\x20',_0x405199)),0x1176+0x9*-0x2c5+0x777;else try{var _0x2c8494=_0x25fb63&&_0x25fb63['data'];if(!_0x2c8494||_0x2c8494[_0x4ff6ae(0x751)+_0x4ff6ae(0xdc1)]!==_0x22972f||_0x2c8494[_0x4ff6ae(0xaf1)]!==_0x4ff6ae(0x458))return;_0x2f44ee[_0x4ff6ae(0x2d4)](_0x505ac0,_0x2c8494[_0x4ff6ae(0x458)],_0x2c8494['arg']);}catch(_0x2149d0){}});try{var _0x3ee965=new BroadcastChannel('sakur'+_0x3e9452(0x40b));_0x3ee965[_0x3e9452(0x3d6)+'sage']=function(_0x23d49c){var _0x4908c7=_0x3e9452;if(_0x2f44ee[_0x4908c7(0xbbe)]!==_0x2f44ee[_0x4908c7(0xbbe)])return _0x564165&&_0x39c813[_0x4908c7(0x3b4)+'r']?_0x4941ab[_0x4908c7(0x3b4)+'r'][_0x4908c7(0xc1b)+_0x4908c7(0xa3b)]:0x13e8+-0x6a8+-0x350*0x4;else{var _0x39a279=_0x23d49c['data'];if(_0x39a279&&_0x2f44ee[_0x4908c7(0xd54)](_0x39a279['__sak'+'ura'],_0x22972f)&&_0x2f44ee[_0x4908c7(0xb43)](_0x39a279['kind'],_0x2f44ee['cAozV']))_0x505ac0(_0x39a279[_0x4908c7(0x458)],_0x39a279['arg']);}};}catch(_0x46f308){}var _0x3b92de=[];(function _0x3917ac(){var _0x2837bd=_0x3e9452,_0x3e7d72={'uQIXX':function(_0x1a82f1,_0x57fa93){return _0x1a82f1===_0x57fa93;},'jwQKH':_0x2f44ee['yPUHU']};if(_0x2837bd(0x7e2)==='lwCoM'){var _0x36922d=[_0x2f44ee[_0x2837bd(0xb91)],_0x2f44ee[_0x2837bd(0x3aa)],_0x2837bd(0x95d),_0x2837bd(0x8cb),_0x2f44ee['jZeLF']];for(var _0x2c648f=0x16*-0xbc+-0x1*-0x23fb+-0x13d3;_0x2c648f<_0x36922d['lengt'+'h'];_0x2c648f++){(function(_0x5bf369){var _0x5a64c6=_0x2837bd,_0x3d477e={'QfxKP':function(_0x555f81,_0x133415){return _0x3e7d72['uQIXX'](_0x555f81,_0x133415);},'nUgSf':'strin'+'g','gvbUa':function(_0x530fb4,_0x330234){return _0x530fb4!==_0x330234;},'POVDD':function(_0x2dce94,_0x64338d){return _0x2dce94===_0x64338d;}},_0x50b777=console[_0x5bf369];if(typeof _0x50b777!==_0x3e7d72[_0x5a64c6(0x545)])return;console[_0x5bf369]=function(){var _0x485c35=_0x5a64c6;try{var _0x3d8d3f='';for(var _0xe3371=0x30+0xc97+-0xcc7;_0xe3371<arguments['lengt'+'h'];_0xe3371++){var _0xc0caea=arguments[_0xe3371];if(_0x3d477e['QfxKP'](typeof _0xc0caea,_0x3d477e['nUgSf']))_0x3d8d3f+=_0xc0caea;else{if(_0xc0caea&&_0xc0caea[_0x485c35(0x388)+'ge'])_0x3d8d3f+=_0xc0caea['messa'+'ge'];}}if(_0x3d477e[_0x485c35(0x4f6)](_0x3d8d3f['index'+'Of'](_0x4b38f3),-(0x1dec+-0x7e5+-0x1606*0x1)))return _0x50b777['apply'](console,arguments);if(_0x3d477e[_0x485c35(0x4f6)](_0x3d8d3f[_0x485c35(0x30c)+'Of'](_0x485c35(0xa07)+_0x485c35(0xa16)+_0x485c35(0x9e1)),-(0x81e+-0x20f9+0x2*0xc6e))){var _0x40126e=_0x3d8d3f['slice'](0xb1c+0x4e2+-0x17*0xb2,0x7bf+0x107e+-0x1*0x1711);if(_0x3d477e[_0x485c35(0xa70)](_0x3b92de['index'+'Of'](_0x40126e),-(0x1*-0x11a5+0x2bd+-0x1*-0xee9))&&_0x3b92de[_0x485c35(0x841)+'h']<-0x56a+-0x1d88+-0xbba*-0x3)_0x3b92de[_0x485c35(0x499)](_0x40126e);}}catch(_0x40f930){}return _0x50b777[_0x485c35(0x453)](console,arguments);};}(_0x36922d[_0x2c648f]));}}else{var _0x366310=new _0x5adbc9('sakur'+_0x2837bd(0x40b));_0x366310['postM'+_0x2837bd(0x623)+'e'](_0x2054ca),_0xbda44f(function(){try{_0x366310['close']();}catch(_0x249010){}},-0x23b4+-0x1*-0xd67+0x1747*0x1);}}());var _0x1c677e={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x3f0918=null,_0x4b3cf7=null,_0x7b6761=-(0x1a38+0x1eb9+-0x38f*0x10),_0x43af92=null;function _0x2a8790(_0x366306){var _0x490926=_0x3e9452,_0x5799b8={'zMiah':'style'};try{if(_0x490926(0xcfb)==='LZxoV'){var _0x107964=_0x2666da[_0x490926(0x97b)+_0x490926(0x39f)+_0x490926(0x6c9)](_0x5799b8[_0x490926(0x8da)]);_0x107964['id']=_0x490926(0x9f1)+'a-men'+_0x490926(0xa96),_0x107964['textC'+'onten'+'t']=_0x5f024a,(_0x148eb6['head']||_0xbc7895['docum'+_0x490926(0x531)+'ement'])['appen'+'dChil'+'d'](_0x107964);}else{if(!_0x366306)return;var _0x285060=_0x366306['insta'+_0x490926(0x57f)]?_0x366306['insta'+_0x490926(0x57f)][_0x490926(0xcc2)+'ts']:_0x366306[_0x490926(0xcc2)+'ts']||null;if(!_0x285060)return;if(!_0x43af92)try{_0x43af92=Object[_0x490926(0x5ea)](_0x285060)[_0x490926(0x9d5)](0x1d*0xc9+0x12f4+-0x29b9*0x1,-0x24a7+-0x13be+-0x387d*-0x1);}catch(_0xa2ce83){}var _0x497aa7=_0x285060[_0x490926(0x5d9)+'y'];_0x497aa7&&_0x497aa7['buffe'+'r']&&_0x497aa7['buffe'+'r']['byteL'+_0x490926(0xa3b)]>-0x2635+-0xc41+0x2*0x193b&&(_0x4b3cf7=_0x497aa7,_0x7b6761=Date[_0x490926(0xafc)]()-_0x43ef6b);}}catch(_0x54b19d){}}function _0x44c595(){var _0x4801f0=_0x3e9452,_0x1b1720={'BAmDy':function(_0x568c87,_0x5bc28a){return _0x568c87(_0x5bc28a);},'gIdkV':function(_0x3cb627,_0x8a10a3){return _0x2f44ee['LKhLa'](_0x3cb627,_0x8a10a3);},'wLazO':_0x2f44ee['zrqag'],'gTnVY':_0x2f44ee[_0x4801f0(0x604)],'QSayo':_0x4801f0(0xbdc)};try{if(typeof WebAssembly===_0x4801f0(0x802)+_0x4801f0(0xa69))return;var _0x43f6c3=['insta'+_0x4801f0(0x1dd)+'e',_0x2f44ee[_0x4801f0(0x962)]];for(var _0x4ecb1f=0x7a4+-0x1a3b+0x1297*0x1;_0x4ecb1f<_0x43f6c3[_0x4801f0(0x841)+'h'];_0x4ecb1f++){(function(_0x211b15){var _0x4cafc7=_0x4801f0,_0x5b8b18={'SwjyM':function(_0xf548a5,_0x707d3b){return _0xf548a5===_0x707d3b;},'FmteS':'XYnHF','UBQVF':function(_0x5b08e5,_0x2ba9d1){var _0x2711fd=_0x23db;return _0x1b1720[_0x2711fd(0x47c)](_0x5b08e5,_0x2ba9d1);}};if(_0x1b1720[_0x4cafc7(0x232)](_0x1b1720[_0x4cafc7(0x303)],_0x4cafc7(0xaf0)))_0x31ffa9[_0x4cafc7(0x7bd)+_0x4cafc7(0x284)+'t']='Copie'+'d';else{var _0x2d160a=WebAssembly[_0x211b15];if(typeof _0x2d160a!==_0x1b1720[_0x4cafc7(0x278)]||_0x2d160a['__sak'+_0x4cafc7(0xd4a)+'moryT'+'ap'])return;var _0x2c9859=function(){var _0x5a06de=_0x4cafc7;if(_0x5b8b18['SwjyM'](_0x5a06de(0x1bf),_0x5b8b18['FmteS']))return _0x11b03e['getIt'+'em'](_0x183eac)==='1';else{var _0x13b440=_0x2d160a['apply'](this,arguments);try{if(_0x13b440&&typeof _0x13b440[_0x5a06de(0xbbd)]===_0x5a06de(0xb3f)+'ion')_0x13b440['then'](_0x2a8790,function(){});else _0x5b8b18[_0x5a06de(0x4d6)](_0x2a8790,_0x13b440);}catch(_0xd95f61){}return _0x13b440;}};_0x2c9859[_0x4cafc7(0x751)+'uraMe'+_0x4cafc7(0x3c7)+'ap']=!![];try{Object['defin'+'eProp'+'erty'](_0x2c9859,_0x1b1720[_0x4cafc7(0x8db)],{'value':_0x2d160a['name'],'configurable':!![]});}catch(_0x3abec2){}WebAssembly[_0x211b15]=_0x2c9859;}}(_0x43f6c3[_0x4ecb1f]));}}catch(_0x572de3){}}var _0x3a3f35=null,_0x110b34=null,_0x4d505d={},_0x42fb4d={'MouseLook':[{'name':'\u008b\u0087\u0087\u0092\u0090'+'\u0086\u008f\u0089\u0095\u0090'+'\u0094','ret':'void','params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x2f44ee[_0x3e9452(0x9ef)],'ret':'void','params':[_0x2f44ee[_0x3e9452(0x753)]],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)],_0x3e9452(0xb9d)]},{'name':_0x2f44ee[_0x3e9452(0x3ee)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[_0x2f44ee['yfHNK']],'wasmParams':[_0x3e9452(0xd08),_0x3e9452(0xb9d)]},{'name':_0x3e9452(0x96b)+_0x3e9452(0x6b5)+'\u0095','ret':_0x2f44ee['tHNdH'],'params':[_0x2f44ee[_0x3e9452(0x753)]],'wasmParams':[_0x3e9452(0xd08),_0x3e9452(0xb9d)]},{'name':_0x2f44ee[_0x3e9452(0x56d)],'ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x3e9452(0xcde)+_0x3e9452(0x24f)+'\u0094','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0xb76)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x551)+_0x3e9452(0x7dc),'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee['RYRDE'],'ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0xa8d)],'ret':'float','params':[],'wasmParams':[_0x2f44ee['tFZxm']],'wasmRet':_0x3e9452(0xb9d)},{'name':_0x3e9452(0xaa3)+_0x3e9452(0xbc3)+'\u0090','ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':'\u0087\u008e\u0089\u008e\u0091'+_0x3e9452(0x4ba)+'\u0088','ret':_0x3e9452(0xb72),'params':[_0x3e9452(0x5c7)],'wasmParams':[_0x2f44ee['tFZxm'],'f32']},{'name':_0x2f44ee[_0x3e9452(0x2a7)],'ret':_0x2f44ee['yfHNK'],'params':[],'wasmParams':[_0x3e9452(0xd08)],'wasmRet':_0x3e9452(0xb9d)},{'name':'\u008d\u0095\u0088\u0092\u008c'+_0x3e9452(0x78d)+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3e9452(0x996)+_0x3e9452(0xbc2)+'\u0091','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee['NXFLZ'],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee['JGXsq'],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x78c)+_0x3e9452(0x595)+'\u008a','ret':'void','params':[_0x2f44ee[_0x3e9452(0x753)],_0x2f44ee[_0x3e9452(0x753)]],'wasmParams':[_0x3e9452(0xd08),_0x2f44ee[_0x3e9452(0x735)],_0x2f44ee['dpHEx']]},{'name':_0x3e9452(0x4fb)+_0x3e9452(0x3ce)+'\u0086','ret':'float','params':[],'wasmParams':['i32'],'wasmRet':_0x2f44ee[_0x3e9452(0x735)]},{'name':'\u008b\u0092\u0089\u0090\u008d'+_0x3e9452(0x395)+'\u0088','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x353),'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0x329)],'ret':_0x3e9452(0xb72),'params':[_0x3e9452(0x5c7)],'wasmParams':[_0x3e9452(0xd08),_0x2f44ee['dpHEx']]},{'name':_0x3e9452(0x25a)+_0x3e9452(0x79c)+'\u0088','ret':_0x2f44ee[_0x3e9452(0x753)],'params':[],'wasmParams':['i32'],'wasmRet':_0x3e9452(0xb9d)},{'name':_0x3e9452(0x31a)+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':'void','params':['float',_0x2f44ee[_0x3e9452(0x753)]],'wasmParams':['i32',_0x2f44ee[_0x3e9452(0x735)],_0x3e9452(0xb9d)]},{'name':_0x2f44ee[_0x3e9452(0xd1c)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x3e9452(0x1f3)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x3e9452(0x1b8)+_0x3e9452(0xc2e)+'\u008b','ret':'void','params':[_0x2f44ee[_0x3e9452(0x753)]],'wasmParams':['i32','f32']},{'name':'\u0090\u008e\u0095\u0093\u008d'+'\u0089\u0094\u008c\u008b\u0089'+'\u0093','ret':_0x2f44ee[_0x3e9452(0x753)],'params':[],'wasmParams':[_0x3e9452(0xd08)],'wasmRet':'f32'},{'name':_0x2f44ee[_0x3e9452(0x309)],'ret':_0x2f44ee[_0x3e9452(0x753)],'params':[],'wasmParams':['i32'],'wasmRet':_0x2f44ee[_0x3e9452(0x735)]},{'name':_0x2f44ee['ggpSO'],'ret':_0x2f44ee['tHNdH'],'params':[_0x2f44ee[_0x3e9452(0x753)]],'wasmParams':[_0x2f44ee['tFZxm'],_0x2f44ee[_0x3e9452(0x735)]]},{'name':'\u0087\u008f\u008d\u008b\u0092'+'\u0089\u0090\u0087\u0086\u0087'+'\u008c','ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0x3b3)],'ret':_0x2f44ee['tHNdH'],'params':[_0x3e9452(0x5c7)],'wasmParams':[_0x2f44ee['tFZxm'],_0x3e9452(0xb9d)]},{'name':_0x2f44ee[_0x3e9452(0xce3)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0xa56)],'ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':['i32']},{'name':_0x3e9452(0x2b1)+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','ret':_0x3e9452(0xb72),'params':[_0x2f44ee[_0x3e9452(0x753)]],'wasmParams':['i32',_0x3e9452(0xb9d)]}],'FPScontroller':[{'name':_0x3e9452(0xc81)+'\u0090\u008b\u008d\u008d\u0093'+'\u008e','ret':_0x3e9452(0x5c7),'params':[],'wasmParams':[_0x3e9452(0xd08)],'wasmRet':_0x2f44ee['dpHEx']},{'name':_0x2f44ee['HuGZX'],'ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0x826)],'ret':_0x3e9452(0x6a8),'params':[],'wasmParams':[_0x2f44ee['tFZxm']],'wasmRet':_0x3e9452(0xd08)},{'name':'\u0090\u0087\u0089\u0088\u008e'+'\u0086\u008b\u0091\u0087\u008a'+'\u008b','ret':'void','params':['bool'],'wasmParams':[_0x2f44ee['tFZxm'],'i32']},{'name':_0x2f44ee[_0x3e9452(0xc3c)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x97e)+'\u0095\u0088\u0088\u0089\u0094'+'\u008a','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u008a\u008c\u0086\u0095\u0087'+_0x3e9452(0x3f0)+'\u008a','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0x3e8)],'ret':_0x3e9452(0x6a8),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]],'wasmRet':_0x3e9452(0xd08)},{'name':_0x2f44ee[_0x3e9452(0xa9b)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0xd5d)],'ret':'bool','params':[],'wasmParams':[_0x3e9452(0xd08)],'wasmRet':_0x3e9452(0xd08)},{'name':'\u008e\u008b\u008e\u0091\u008c'+'\u008b\u0094\u0088\u0090\u0088'+'\u008a','ret':'bool','params':[],'wasmParams':[_0x3e9452(0xd08)],'wasmRet':_0x3e9452(0xd08)},{'name':_0x2f44ee['cMEWS'],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x2f44ee[_0x3e9452(0x290)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2f44ee['CPujn'],'ret':_0x3e9452(0x6a8),'params':[_0x3e9452(0x6a8),_0x3e9452(0x6a8)],'wasmParams':[_0x3e9452(0xd08),_0x2f44ee[_0x3e9452(0xd3b)],'i32'],'wasmRet':_0x3e9452(0xd08)},{'name':_0x3e9452(0xda1)+_0x3e9452(0x710)+'\u0090','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0x1c9)],'ret':_0x3e9452(0x6a8),'params':[],'wasmParams':['i32'],'wasmRet':_0x3e9452(0xd08)},{'name':_0x2f44ee['vHcOd'],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[_0x2f44ee[_0x3e9452(0xa7d)]],'wasmParams':[_0x3e9452(0xd08),'i32']},{'name':_0x2f44ee['DjeMx'],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':'\u0091\u0088\u0095\u0088\u0088'+'\u0086\u008c\u008a\u008b\u0086'+'\u0089','ret':'bool','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]],'wasmRet':_0x2f44ee[_0x3e9452(0xd3b)]},{'name':_0x2f44ee['PnWHF'],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':['i32']},{'name':_0x2f44ee['MFuLn'],'ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0xb5e)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0x4dd)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x2f44ee['nQPzp'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3e9452(0x5c4)+'\u008b\u0091\u008d\u0086\u0093'+'\u0090','ret':_0x2f44ee['tHNdH'],'params':[_0x3e9452(0x6a8)],'wasmParams':['i32',_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0x54a)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':'\u008d\u0095\u0087\u0093\u0092'+_0x3e9452(0x742)+'\u008b','ret':_0x3e9452(0xb72),'params':[],'wasmParams':['i32']},{'name':'\u0086\u0090\u0092\u0091\u0090'+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0xa5e)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0x855)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0xe0e)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2f44ee['UgQky'],'ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u0093\u0086\u0088\u008d\u008f'+_0x3e9452(0xb83)+'\u0094','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[_0x2f44ee[_0x3e9452(0xa7d)]],'wasmParams':[_0x2f44ee['tFZxm'],_0x3e9452(0xd08)]},{'name':_0x3e9452(0x211)+_0x3e9452(0x7e1)+'\u0090','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x3e9452(0xdb9)+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x2f44ee['tijmU'],'ret':'void','params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x3e9452(0x6bc)+'\u008c\u0090\u0087\u008c\u0086'+'\u0087','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u008c\u0089\u0091\u0095\u0090'+_0x3e9452(0xcf5)+'\u0087','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':'\u0092\u008c\u0089\u008a\u0093'+_0x3e9452(0xa6a)+'\u0087','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u0094\u008d\u0087\u0094\u008d'+_0x3e9452(0x28d)+'\u0094','ret':_0x3e9452(0xb72),'params':[_0x3e9452(0x6a8)],'wasmParams':['i32',_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':'\u008b\u0092\u008b\u008f\u0095'+'\u0088\u0091\u0095\u0092\u0092'+'\u008f','ret':_0x3e9452(0x6a8),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]],'wasmRet':_0x2f44ee[_0x3e9452(0xd3b)]},{'name':_0x3e9452(0x40f)+_0x3e9452(0xaa4)+'\u0086','ret':_0x3e9452(0x6a8),'params':[],'wasmParams':[_0x3e9452(0xd08)],'wasmRet':_0x2f44ee['tFZxm']},{'name':'\u0089\u0095\u0092\u0090\u0086'+_0x3e9452(0x860)+'\u008d','ret':_0x3e9452(0x6a8),'params':[],'wasmParams':['i32'],'wasmRet':_0x2f44ee[_0x3e9452(0xd3b)]},{'name':_0x3e9452(0xd56)+_0x3e9452(0x66f)+'\u0094','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'.ctor','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0xdad)+_0x3e9452(0xb1d)+'\u008b','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0xddc)+'\u0089\u0087\u008f\u0092\u0095'+'\u0091','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0x85d)],'ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x3e9452(0x9b9)+_0x3e9452(0x629)+'\u008f','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0x713)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':['float'],'wasmParams':[_0x3e9452(0xd08),'f32']},{'name':_0x2f44ee[_0x3e9452(0x7f6)],'ret':'bool','params':[],'wasmParams':[_0x3e9452(0xd08)],'wasmRet':_0x2f44ee[_0x3e9452(0xd3b)]},{'name':_0x2f44ee[_0x3e9452(0x9fa)],'ret':'void','params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':'\u0087\u0093\u0093\u0087\u0087'+_0x3e9452(0x542)+'\u0094','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x3e9452(0x669)+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0xbe2)],'ret':_0x3e9452(0x6a8),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]],'wasmRet':'i32'},{'name':_0x3e9452(0xa6c)+_0x3e9452(0x89d)+'\u0087','ret':_0x2f44ee[_0x3e9452(0xa7d)],'params':[_0x2f44ee[_0x3e9452(0xa7d)],_0x3e9452(0x6a8)],'wasmParams':[_0x3e9452(0xd08),_0x3e9452(0xd08),_0x2f44ee['tFZxm']],'wasmRet':'i32'},{'name':_0x2f44ee['zXOiF'],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x93d)+_0x3e9452(0xd2c)+'\u008e','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0xd87)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0xc31)+_0x3e9452(0x787)+'\u0086','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0xc26)],'ret':'void','params':['float'],'wasmParams':[_0x2f44ee['tFZxm'],_0x3e9452(0xb9d)]},{'name':_0x2f44ee['mBqAW'],'ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0x6d3)],'ret':'bool','params':['bool',_0x2f44ee['JfjzE']],'wasmParams':['i32',_0x2f44ee[_0x3e9452(0xd3b)],_0x2f44ee['tFZxm']],'wasmRet':_0x3e9452(0xd08)},{'name':_0x3e9452(0x4a2)+_0x3e9452(0x46d)+'\u0095','ret':_0x3e9452(0xb72),'params':['float',_0x3e9452(0x6a8)],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)],_0x3e9452(0xb9d),_0x2f44ee['tFZxm']]},{'name':_0x2f44ee['DccKZ'],'ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x2b6)+'\u0091\u0095\u0088\u008f\u0088'+'\u008c','ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0xb1b)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]}],'TDM_GameManager':[{'name':_0x3e9452(0x67c)+'\u0086\u0094\u0094\u008e\u008d'+'\u0090','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0xc0c)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0xc36)],'ret':_0x2f44ee['JfjzE'],'params':[_0x2f44ee[_0x3e9452(0x527)]],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)],'i32'],'wasmRet':_0x2f44ee[_0x3e9452(0xd3b)]},{'name':_0x3e9452(0xc1e)+_0x3e9452(0x267)+'\u0086','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee['xuZQa'],'ret':_0x3e9452(0xb72),'params':[_0x3e9452(0x6a8)],'wasmParams':['i32',_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':'\u008b\u0086\u008e\u0095\u0091'+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x1b6)+_0x3e9452(0xc39)+'\u008c','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u008d\u008f\u0086\u0092\u008c'+_0x3e9452(0x945)+'\u0087','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'.ctor','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u0086\u008c\u008e\u0094\u0090'+_0x3e9452(0x1c1)+'\u0088','ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x3e9452(0x83e)+_0x3e9452(0x2fb)+'\u0093','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u008b\u0088\u008d\u0087\u0090'+'\u008e\u008c\u0090\u008a\u008c'+'\u0094','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'\u0093\u0087\u008f\u008f\u0093'+_0x3e9452(0x752)+'\u008c','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee['SUvGc'],'ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x90b)+_0x3e9452(0x3ab),'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x2f44ee[_0x3e9452(0xb2c)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':['i32']},{'name':_0x3e9452(0xb3b)+_0x3e9452(0x3d9)+'\u0091','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2f44ee['NyMor'],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0x51b)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x2f44ee[_0x3e9452(0x3d8)],'ret':_0x3e9452(0xb72),'params':[_0x3e9452(0x6a8)],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)],_0x3e9452(0xd08)]},{'name':_0x2f44ee['epLSb'],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[_0x3e9452(0x677),_0x2f44ee['LSBRg'],_0x3e9452(0x677)],'wasmParams':[_0x2f44ee['tFZxm'],_0x3e9452(0xd08),_0x2f44ee[_0x3e9452(0xd3b)],'i32']},{'name':_0x3e9452(0xafe)+_0x3e9452(0xbbb)+'\u0089','ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0x5f3)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[_0x2f44ee['LSBRg'],'int',_0x2f44ee[_0x3e9452(0x527)]],'wasmParams':[_0x3e9452(0xd08),_0x2f44ee[_0x3e9452(0xd3b)],_0x3e9452(0xd08),_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee['wxIWb'],'ret':_0x3e9452(0x6a8),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]],'wasmRet':_0x3e9452(0xd08)},{'name':_0x3e9452(0x550)+'e','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x3e9452(0x490)+'\u008e\u0094\u0093\u0093\u008d'+'\u0087','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x3e9452(0x323)+_0x3e9452(0x5a2)+'\u008b','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0xb07)+_0x3e9452(0x69e)+'\u0092','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0xad7)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':['i32']},{'name':_0x2f44ee['gChtL'],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':['i32']},{'name':'\u0088\u008c\u0089\u008e\u0095'+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','ret':'void','params':[_0x3e9452(0x6a8)],'wasmParams':[_0x2f44ee['tFZxm'],_0x3e9452(0xd08)]},{'name':_0x3e9452(0xa60)+'\u008b\u0087\u008f\u008d\u008f'+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008e\u0094\u008b\u0090\u008e'+_0x3e9452(0xaf4)+'\u008c','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':['i32']},{'name':_0x3e9452(0x856)+_0x3e9452(0x2fe)+'\u0091','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':'OnApp'+_0x3e9452(0x48b)+_0x3e9452(0x6a9)+_0x3e9452(0x435),'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':['bool'],'wasmParams':['i32',_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':'\u008f\u008c\u0086\u0087\u008e'+_0x3e9452(0x7ba)+'\u0095','ret':_0x3e9452(0x6a8),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]],'wasmRet':'i32'},{'name':_0x3e9452(0x92b)+_0x3e9452(0x52d)+'\u008f','ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee['RaxfD'],'ret':_0x2f44ee[_0x3e9452(0xa7d)],'params':[_0x2f44ee[_0x3e9452(0x527)]],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)],'i32'],'wasmRet':'i32'},{'name':_0x3e9452(0x4c2)+_0x3e9452(0x8bc)+'\u008e','ret':_0x2f44ee['tHNdH'],'params':[_0x3e9452(0x6a8)],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)],_0x2f44ee['tFZxm']]},{'name':_0x2f44ee[_0x3e9452(0x37f)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x3e9452(0xad0)+_0x3e9452(0x664)+'\u008e','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee['tFZxm']]},{'name':_0x2f44ee[_0x3e9452(0xd9c)],'ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[_0x2f44ee['LSBRg'],_0x3e9452(0x677),_0x2f44ee[_0x3e9452(0x527)]],'wasmParams':[_0x3e9452(0xd08),_0x2f44ee[_0x3e9452(0xd3b)],_0x3e9452(0xd08),_0x2f44ee['tFZxm']]},{'name':_0x2f44ee[_0x3e9452(0x747)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee['tVlxx'],'ret':_0x2f44ee['tHNdH'],'params':[],'wasmParams':['i32']},{'name':_0x3e9452(0x70c)+_0x3e9452(0x50c)+'\u0088','ret':_0x3e9452(0xb72),'params':[],'wasmParams':['i32']},{'name':_0x3e9452(0xc6e)+_0x3e9452(0x448)+'\u008e','ret':'void','params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x3e9452(0x451)+'\u0090\u0087\u0086\u0088\u008e'+'\u0094','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x2f44ee['Nvoya'],'ret':_0x3e9452(0xb72),'params':[_0x3e9452(0x6a8)],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)],_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0x3d1)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3e9452(0x2b7)+'\u0093\u0086\u0088\u008e\u0090'+'\u0092','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x1d4)+'\u008b\u0091\u008d\u008a\u008b'+'\u008e','ret':'void','params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x63d)+_0x3e9452(0x452)+'\u0092','ret':_0x2f44ee[_0x3e9452(0xdf8)],'params':[_0x2f44ee[_0x3e9452(0x527)],'int'],'wasmParams':['i32',_0x2f44ee['tFZxm'],_0x3e9452(0xd08)]},{'name':'\u0088\u0094\u008e\u0086\u0090'+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x2f44ee[_0x3e9452(0xd3b)]]},{'name':_0x2f44ee[_0x3e9452(0xdbc)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]},{'name':_0x3e9452(0x76f)+_0x3e9452(0x51c)+'\u0092','ret':_0x3e9452(0xb72),'params':['bool'],'wasmParams':['i32',_0x3e9452(0xd08)]},{'name':_0x2f44ee[_0x3e9452(0xb4d)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2f44ee['UtUsW'],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x2f44ee[_0x3e9452(0x6f1)],'ret':_0x3e9452(0xb72),'params':[],'wasmParams':[_0x3e9452(0xd08)]}]},_0x4f5925=[],_0x31b15e=[],_0x494094={},_0x1a1b3c=-0x6a8+-0x19dd+0x2085,_0x201370=![],_0xa9f0bd=[],_0x42d3ca=[{'type':_0x3e9452(0x711)+_0x3e9452(0x640)+_0x3e9452(0x660),'keep':!![]},{'type':_0x2f44ee[_0x3e9452(0x7da)],'keep':!![]},{'type':_0x2f44ee[_0x3e9452(0x476)],'keep':![]},{'type':'TDM_G'+_0x3e9452(0x732)+_0x3e9452(0x88a),'keep':!![]},{'type':_0x2f44ee['sMvgo'],'keep':!![]},{'type':_0x3e9452(0xc43)+_0x3e9452(0x50b)+_0x3e9452(0x4b0)+'nc','keep':!![],'many':!![]},{'type':_0x3e9452(0x351)+_0x3e9452(0x514)+_0x3e9452(0x6d5)+'imati'+'ons','keep':!![],'many':!![]},{'type':_0x3e9452(0x22f)+_0x3e9452(0xa25)+_0x3e9452(0x660),'keep':!![],'many':!![]},{'type':_0x2f44ee['yWbeB'],'keep':!![],'many':!![]}],_0x1af92a=[_0x2f44ee[_0x3e9452(0x644)],_0x3e9452(0x5d3)+'bly-C'+'Sharp'+'-firs'+_0x3e9452(0xaae)+_0x3e9452(0x87d),'ch.sy'+'cofor'+_0x3e9452(0x878)+_0x3e9452(0x259)+'ll',_0x3e9452(0x473)+_0x3e9452(0x22a),'Scivo'+'loCha'+'racte'+_0x3e9452(0x1cb)+_0x3e9452(0x327)+'r.dll','__Gen'+_0x3e9452(0xdb6)+'d'];(function _0x1c3eea(){var _0x3a47f0=_0x3e9452;try{var _0x3f1b9d=('4|8|7'+_0x3a47f0(0x295)+_0x3a47f0(0xdf4)+_0x3a47f0(0x937)+'|0')['split']('|'),_0x3a9bd4=0x3bb*0x7+0x1*0x2670+0x1*-0x408d;while(!![]){switch(_0x3f1b9d[_0x3a9bd4++]){case'0':_0x1c677e[_0x3a47f0(0x5d9)+_0x3a47f0(0x92f)]=!![];continue;case'1':_0x2f44ee[_0x3a47f0(0x59b)](_0x47a6df);continue;case'2':_0x1c677e['ok']=!![];continue;case'3':try{var _0x4c740e=window[_0x3a47f0(0xa07)+'WebMo'+_0x3a47f0(0x9e1)][_0x3a47f0(0x7d3)+'me'];_0x4c740e[_0x3a47f0(0x751)+_0x3a47f0(0x27f)+'g']=_0x2f44ee['fkCzf'](_0x396453+':',Math[_0x3a47f0(0x236)+'m']()['toStr'+'ing'](0x15be+-0x119b+-0x155*0x3)['slice'](0x2421+0x1*-0x10a5+-0x137a,0x1ff9+0x115*-0x1a+-0x3cd)),_0x3f0918=_0x4c740e[_0x3a47f0(0x751)+_0x3a47f0(0x27f)+'g'];}catch(_0x3426dd){}continue;case'4':var _0x93b8ed=window[_0x3a47f0(0xa07)+_0x3a47f0(0xa16)+_0x3a47f0(0x9e1)]&&window['Unity'+_0x3a47f0(0xa16)+_0x3a47f0(0x9e1)][_0x3a47f0(0x7d3)+'me'];continue;case'5':_0x2f44ee['tnxNr'](_0x1892a3);continue;case'6':_0x44c595();continue;case'7':_0x1c677e[_0x3a47f0(0x72e)+'pted']=!![];continue;case'8':if(!_0x93b8ed||typeof _0x93b8ed[_0x3a47f0(0x97b)+_0x3a47f0(0x275)+'in']!=='funct'+'ion'){_0x1c677e[_0x3a47f0(0x95d)]=_0x2f44ee[_0x3a47f0(0xa1c)];return;}continue;case'9':_0x1c677e[_0x3a47f0(0x9e4)+'Regis'+_0x3a47f0(0x7d8)]=_0x4f5925[_0x3a47f0(0x841)+'h'];continue;case'10':_0x110b34=_0x93b8ed[_0x3a47f0(0x97b)+_0x3a47f0(0x275)+'in']({'name':_0x3a47f0(0x9f1)+_0x3a47f0(0x822)+'llwar'+'z','version':_0x396453,'referencedAssemblies':_0x1af92a[_0x3a47f0(0x9d5)]()});continue;}break;}}catch(_0x38a32e){_0x1c677e['error']=String(_0x38a32e&&_0x38a32e[_0x3a47f0(0x388)+'ge']||_0x38a32e);}}());var _0x5a9fc8=new Float32Array(0x23b0+-0xb8a+-0x1825),_0x49af51=new Int32Array(_0x5a9fc8['buffe'+'r']);function _0x36cbe4(_0x33a31c){return _0x5a9fc8[-0x4a*-0x3e+0x1*-0x10e1+-0x1*0x10b]=_0x33a31c,_0x49af51[-0xc1*0x7+0xaa*0x11+-0x603];}function _0x12e1e2(_0x356d78){var _0x4e0de9=_0x3e9452;return _0x49af51[0xfc8+0x2bd*-0x7+0x363]=_0x2f44ee[_0x4e0de9(0xab2)](_0x356d78,-0x3c+0x1*0x24a1+-0x79*0x4d),_0x5a9fc8[0x25ee+0x70b+-0x18d*0x1d];}var _0x5ae706={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x138d47(){var _0x1431b9=_0x3e9452,_0x65102a={'XvXie':function(_0x994db5,_0x40afb9){var _0x137f7c=_0x23db;return _0x2f44ee[_0x137f7c(0xc13)](_0x994db5,_0x40afb9);},'EYVHJ':_0x2f44ee[_0x1431b9(0xcb0)],'cKQJP':function(_0x283f30,_0x58755e,_0x4c89da,_0x33674c){var _0x26353d=_0x1431b9;return _0x2f44ee[_0x26353d(0x91e)](_0x283f30,_0x58755e,_0x4c89da,_0x33674c);},'zdrbk':_0x2f44ee[_0x1431b9(0x1d2)]};if(_0x2f44ee['yOSBh']===_0x2f44ee['gMrAV']){var _0x25356c=(_0x1431b9(0xb10)+'|6|4|'+'5|2')['split']('|'),_0x498a20=0x2234+-0x1905+-0x92f;while(!![]){switch(_0x25356c[_0x498a20++]){case'0':_0x4d2fcc[_0x1431b9(0x8de)]=_0x52a682;continue;case'1':if(!_0x2c544c[_0x1431b9(0x99d)])return;continue;case'2':_0x4d2fcc['remov'+'e']();continue;case'3':var _0x4d2fcc=_0x5ca8ce['creat'+_0x1431b9(0x39f)+_0x1431b9(0x6c9)](_0x1431b9(0x6f6)+_0x1431b9(0xb0d));continue;case'4':_0x4d2fcc['selec'+'t']();continue;case'5':try{_0x34f9d4[_0x1431b9(0x914)+_0x1431b9(0x23e)+'d'](_0x1431b9(0xc34)),_0x2f44ee[_0x1431b9(0xc50)](_0x1e1523);}catch(_0x477f3d){}continue;case'6':_0x283364['body'][_0x1431b9(0x3d7)+_0x1431b9(0x25d)+'d'](_0x4d2fcc);continue;}break;}}else{try{if(_0x1431b9(0x365)===_0x1431b9(0x5ca)){var _0xbb884c=_0x131bf2(_0x1431b9(0xbf0),_0x65102a['XvXie'](_0x1431b9(0x571)+'rd',_0x352234?_0x65102a[_0x1431b9(0x396)]:'')),_0x4b624e=_0x82ea20(_0x1431b9(0xbf0),'sk-ca'+_0x1431b9(0x7e0)+'ad'),_0x3d03a7=_0x65102a[_0x1431b9(0xbe9)](_0x4e5862,_0x1431b9(0xbf0),_0x1431b9(0x571)+_0x1431b9(0x7bb)+_0x1431b9(0xa5d),'<stro'+_0x1431b9(0x27a)+_0x37260d+(_0x1431b9(0xcad)+'ong>'));_0x4b624e['appen'+_0x1431b9(0x25d)+'d'](_0x3d03a7);var _0x5e8700=_0x50c2cf(_0x1431b9(0xbf0),_0x65102a[_0x1431b9(0xb30)]);return _0xbb884c[_0x1431b9(0x3d7)+'dChil'+'d'](_0x4b624e),_0xbb884c[_0x1431b9(0x3d7)+_0x1431b9(0x25d)+'d'](_0x5e8700),_0xbb884c['body']=_0x5e8700,_0xbb884c[_0x1431b9(0xd02)]=_0x3d03a7,_0xbb884c;}else{if(_0x110b34&&_0x110b34['_runt'+_0x1431b9(0x8be)]){var _0x4a5590=_0x110b34['_runt'+_0x1431b9(0x8be)];if(typeof _0x4a5590['resol'+_0x1431b9(0x776)+'e']==='funct'+_0x1431b9(0x636)){var _0x24b7c1=_0x4a5590[_0x1431b9(0xab3)+_0x1431b9(0x776)+'e']();if(_0x24b7c1)return _0x5ae706['sourc'+'e']=_0x2f44ee[_0x1431b9(0x8f0)],_0x24b7c1;}if(_0x4a5590[_0x1431b9(0x347)])return _0x5ae706[_0x1431b9(0x1c4)+'e']=_0x1431b9(0xd50)+'n._ru'+'ntime'+'._gam'+'e',_0x4a5590[_0x1431b9(0x347)];}}}catch(_0x3aedf7){}try{var _0x1525e6=window['Unity'+'WebMo'+_0x1431b9(0x9e1)]&&window['Unity'+'WebMo'+'dkit'][_0x1431b9(0x7d3)+'me'];if(_0x1525e6&&_0x2f44ee[_0x1431b9(0x1f5)](typeof _0x1525e6[_0x1431b9(0xab3)+_0x1431b9(0x776)+'e'],_0x1431b9(0xb3f)+_0x1431b9(0x636))){var _0x22dca9=_0x1525e6['resol'+_0x1431b9(0x776)+'e']();if(_0x22dca9)return _0x5ae706[_0x1431b9(0x1c4)+'e']='Runti'+'me.re'+_0x1431b9(0x426)+'Game('+')',_0x22dca9;}if(_0x1525e6&&_0x1525e6['_game'])return _0x5ae706[_0x1431b9(0x1c4)+'e']=_0x2f44ee['fHkrZ'],_0x1525e6;}catch(_0x2748bc){}try{var _0x2e6682=window[_0x1431b9(0xc71)+_0x1431b9(0x940)+_0x1431b9(0x57f)]||window['unity'+_0x1431b9(0x815)]||window[_0x1431b9(0xb27)];if(_0x2e6682)return _0x5ae706[_0x1431b9(0x1c4)+'e']=_0x2f44ee['LpuNH'],_0x2e6682;}catch(_0x48205e){}try{if(_0x2f44ee['TxqMH']!==_0x2f44ee['Xhnmj']){if(_0x2f44ee[_0x1431b9(0xc3e)](typeof game,'undef'+'ined')&&game)return _0x5ae706['sourc'+'e']='bare\x20'+_0x1431b9(0x6b3)+_0x1431b9(0xadb)+'ng',game;}else try{var _0x3f7ea0=_0x41af80[_0x1431b9(0x57a)](-0x3*-0x291+0x337+-0x93*0x13,_0x5c3fed[_0x1431b9(0x941)+'Width']||_0x178be5['docum'+_0x1431b9(0x531)+_0x1431b9(0x1e1)][_0x1431b9(0x903)+'tWidt'+'h']||-0x2272+0x231+0x2041),_0x303c41=_0x9cdea4['max'](0x1a0b+0xab1*-0x1+-0xf59,_0x1f7872[_0x1431b9(0x941)+_0x1431b9(0x8c2)+'t']||_0xd1b0ab['docum'+'entEl'+_0x1431b9(0x1e1)]['clien'+'tHeig'+'ht']||0x42b*-0x7+0x8d6+0x1457);return(_0x2f44ee[_0x1431b9(0x859)](_0x1452bf['cv']['width'],_0x3f7ea0)||_0x2f44ee[_0x1431b9(0x382)](_0x383d8f['cv'][_0x1431b9(0x30b)+'t'],_0x303c41))&&(_0x18193c['cv'][_0x1431b9(0x59f)]=_0x3f7ea0,_0x4b5252['cv'][_0x1431b9(0x30b)+'t']=_0x303c41),{'w':_0x3f7ea0,'h':_0x303c41};}catch(_0x2a10c8){return{'w':0x0,'h':0x0};}}catch(_0x4dfd69){}try{var _0x2b3ceb=Object[_0x1431b9(0x5ea)](window);for(var _0x2b9d5c=-0xebf+0xa6*0x5+0xb81;_0x2b9d5c<_0x2b3ceb[_0x1431b9(0x841)+'h']&&_0x2b9d5c<0xd+0x1bfa+-0x19af;_0x2b9d5c++){var _0x59d568=window[_0x2b3ceb[_0x2b9d5c]];if(_0x59d568&&typeof _0x59d568==='objec'+'t'&&_0x59d568[_0x1431b9(0x288)+'e']&&_0x59d568[_0x1431b9(0x288)+'e']['HEAPU'+'8']&&_0x59d568['Modul'+'e'][_0x1431b9(0x96d)+'8'][_0x1431b9(0x3b4)+'r'])return _0x5ae706[_0x1431b9(0x1c4)+'e']='windo'+'w.'+_0x2b3ceb[_0x2b9d5c]+_0x2f44ee[_0x1431b9(0xda2)],_0x59d568;}}catch(_0x388aa5){}return _0x5ae706[_0x1431b9(0x1c4)+'e']=null,null;}}function _0x402010(){var _0x15eb52=_0x3e9452;try{if(_0x4b3cf7&&_0x4b3cf7['buffe'+'r']&&_0x4b3cf7[_0x15eb52(0x3b4)+'r'][_0x15eb52(0xc1b)+_0x15eb52(0xa3b)])return _0x5ae706[_0x15eb52(0x1c4)+'e']=_0x5ae706[_0x15eb52(0x1c4)+'e']||_0x2f44ee[_0x15eb52(0x6de)],new Uint8Array(_0x4b3cf7[_0x15eb52(0x3b4)+'r']);}catch(_0x5ada08){}try{var _0x2704c3=_0x138d47();if(_0x2704c3&&_0x2704c3[_0x15eb52(0x288)+'e']&&_0x2704c3['Modul'+'e'][_0x15eb52(0x96d)+'8']&&_0x2704c3[_0x15eb52(0x288)+'e']['HEAPU'+'8'][_0x15eb52(0x3b4)+'r'])return _0x2704c3['Modul'+'e'][_0x15eb52(0x96d)+'8'];}catch(_0x21f134){}return null;}function _0x33dec7(){var _0x485c60=_0x3e9452,_0x4c161b=_0x402010();if(!_0x4c161b)return null;try{return new DataView(_0x4c161b[_0x485c60(0x3b4)+'r'],_0x4c161b[_0x485c60(0x73b)+_0x485c60(0x202)],_0x4c161b[_0x485c60(0xc1b)+_0x485c60(0xa3b)]);}catch(_0x24946d){return null;}}function _0x183d83(_0x209c79,_0x535ffc){var _0x1c02d3=_0x3e9452,_0xc1b1db=_0x33dec7();if(!_0xc1b1db)return _0x5ae706['faile'+'d']++,_0x5ae706['lastE'+_0x1c02d3(0x8aa)]=_0x5ae706['lastE'+_0x1c02d3(0x8aa)]||'no\x20HE'+_0x1c02d3(0xcea)+'-\x20Uni'+_0x1c02d3(0x201)+'stanc'+_0x1c02d3(0x33b)+'\x20reac'+_0x1c02d3(0x769)+'\x20via\x20'+'Runti'+_0x1c02d3(0xdb3)+_0x1c02d3(0x426)+'Game('+_0x1c02d3(0xc8f)+'any\x20w'+_0x1c02d3(0x446)+'\x20glob'+'al',undefined;if(_0x209c79<-0x7*-0x472+0x1c57*0x1+-0x3b75||_0x2f44ee[_0x1c02d3(0xbfa)](_0x2f44ee['OgUQO'](_0x209c79,0x6da+-0x14cc+0x1*0xdf6),_0xc1b1db[_0x1c02d3(0xc1b)+_0x1c02d3(0xa3b)]))return _0x2f44ee['jgHYY']('lxoKf',_0x2f44ee['HAXPp'])?(_0x495df5[0x6ab+-0x3*-0x3d1+-0x2*0x90f]=_0x47c8b1,_0x55e9cc[-0x22*-0x85+-0xf*-0xa9+-0x1b91]):(_0x5ae706['faile'+'d']++,_0x5ae706['lastE'+_0x1c02d3(0x8aa)]=_0x5ae706[_0x1c02d3(0x4d0)+_0x1c02d3(0x8aa)]||_0x1c02d3(0xd17)+_0x1c02d3(0x766)+_0x209c79['toStr'+'ing'](0x45*-0xd+-0x88*0x6+0x6c1)+('\x20past'+'\x20heap'+_0x1c02d3(0x2c8)+'0x')+_0xc1b1db[_0x1c02d3(0xc1b)+_0x1c02d3(0xa3b)][_0x1c02d3(0x252)+_0x1c02d3(0x74d)](-0x1*-0x1161+0x283*0xd+-0x31f8),undefined);try{_0x5ae706['ok']++;switch(_0x535ffc){case'u8':return _0xc1b1db['getUi'+'nt8'](_0x209c79);case'i8':return _0xc1b1db[_0x1c02d3(0xca9)+'t8'](_0x209c79);case _0x2f44ee['nwCLJ']:return _0xc1b1db['getIn'+'t16'](_0x209c79,!![]);case'u16':return _0xc1b1db[_0x1c02d3(0xc57)+'nt16'](_0x209c79,!![]);case'i32':return _0xc1b1db[_0x1c02d3(0xca9)+_0x1c02d3(0x9a0)](_0x209c79,!![]);case _0x2f44ee['fkfVN']:return _0xc1b1db['getUi'+_0x1c02d3(0xc33)](_0x209c79,!![]);case _0x1c02d3(0xb9d):return _0xc1b1db['getFl'+_0x1c02d3(0x6ae)](_0x209c79,!![]);case'f64':return _0xc1b1db['getFl'+_0x1c02d3(0xac6)](_0x209c79,!![]);case'v2':case'v3':case'v4':return _0xc1b1db['getFl'+_0x1c02d3(0x6ae)](_0x209c79,!![]);default:return _0xc1b1db[_0x1c02d3(0xca9)+'t32'](_0x209c79,!![]);}}catch(_0x102b17){return _0x5ae706['faile'+'d']++,_0x5ae706[_0x1c02d3(0x4d0)+'rror']=_0x5ae706[_0x1c02d3(0x4d0)+'rror']||String(_0x102b17&&_0x102b17[_0x1c02d3(0x388)+'ge']||_0x102b17)[_0x1c02d3(0x9d5)](-0x163c+-0xc21+0x225d*0x1,0xc4c*-0x2+-0x1a6d+0x337d),undefined;}}function _0x4d29ea(_0x411d3c,_0x5cc867,_0x22dde9){var _0x5bef97=_0x3e9452,_0x88c87f=_0x2f44ee[_0x5bef97(0x970)](_0x33dec7);if(!_0x88c87f||_0x2f44ee[_0x5bef97(0xa63)](_0x411d3c,0x35c+0xe4e*0x2+0x4*-0x7fe)||_0x411d3c+(-0x1cc6+-0xb3*-0x13+0xf81)>_0x88c87f[_0x5bef97(0xc1b)+'ength'])return![];try{switch(_0x5cc867){case'u8':case'i8':_0x88c87f[_0x5bef97(0xc93)+_0x5bef97(0x638)](_0x411d3c,_0x22dde9&0x6b2+-0x2101*0x1+0x1b4e);break;case _0x2f44ee[_0x5bef97(0xb4c)]:case _0x5bef97(0x578):_0x88c87f['setIn'+_0x5bef97(0x94c)](_0x411d3c,_0x22dde9|0x6*-0x88+-0xa55+0xd85,!![]);break;case _0x5bef97(0xd08):case'u32':_0x88c87f['setIn'+_0x5bef97(0x9a0)](_0x411d3c,_0x2f44ee[_0x5bef97(0xab2)](_0x22dde9,-0x1*0xd6b+-0x1390+0x20fb),!![]);break;case _0x2f44ee[_0x5bef97(0x735)]:_0x88c87f[_0x5bef97(0x49b)+'oat32'](_0x411d3c,_0x22dde9,!![]);break;default:_0x88c87f[_0x5bef97(0xcd4)+_0x5bef97(0x9a0)](_0x411d3c,_0x22dde9|0x2689*-0x1+0x24b0+-0xb*-0x2b,!![]);}return!![];}catch(_0x1ea3df){return![];}}var _0x1f4515={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x2f44ee[_0x3e9452(0xd3b)]},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x3e9452(0xd08)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x10f207(_0x5304c6){var _0x422917=_0x3e9452,_0x51f144='';for(var _0x576f54=0x2073+0x9ae*0x1+0xe0b*-0x3;_0x2f44ee[_0x422917(0xd20)](_0x576f54,_0x5304c6[_0x422917(0x841)+'h']);_0x576f54++){var _0x3717d4=_0x5304c6[_0x576f54][_0x422917(0x252)+'ing'](0x2397+-0x1*0x21a+0xc7*-0x2b);_0x51f144+=(_0x2f44ee[_0x422917(0xa63)](_0x3717d4['lengt'+'h'],0xa95+0x2104+0x1*-0x2b97)?'0':'')+_0x3717d4;}return _0x51f144;}function _0x25ecf2(_0x5f52ce,_0x17826c,_0x4bb8be){var _0x58ed30=_0x3e9452,_0x10f0f1={'OSulw':function(_0x28d565,_0x578c45){return _0x28d565(_0x578c45);}},_0x1d1654=_0x33dec7();if(!_0x1d1654)return _0x5ae706[_0x58ed30(0x8bb)+'d']++,_0x5ae706[_0x58ed30(0x4d0)+_0x58ed30(0x8aa)]=_0x5ae706[_0x58ed30(0x4d0)+_0x58ed30(0x8aa)]||'no\x20HE'+'APU8\x20'+'-\x20Uni'+_0x58ed30(0x201)+_0x58ed30(0x9d8)+'e\x20not'+_0x58ed30(0x305)+'hable'+_0x58ed30(0xb59)+_0x58ed30(0x7d3)+'me.re'+_0x58ed30(0x426)+'Game('+')\x20or\x20'+_0x58ed30(0x816)+_0x58ed30(0x446)+_0x58ed30(0x5dc)+'al',null;if(_0x17826c<-0x2442+-0x263b*0x1+0x4a7d||_0x17826c+_0x4bb8be>_0x1d1654[_0x58ed30(0xc1b)+_0x58ed30(0xa3b)])return _0x5ae706[_0x58ed30(0x8bb)+'d']++,_0x5ae706[_0x58ed30(0x4d0)+'rror']=_0x5ae706['lastE'+_0x58ed30(0x8aa)]||_0x2f44ee[_0x58ed30(0x491)](_0x2f44ee[_0x58ed30(0x65b)](_0x2f44ee[_0x58ed30(0x85c)],(_0x5f52ce+_0x17826c)[_0x58ed30(0x252)+_0x58ed30(0x74d)](-0x37*0x3+0x28a+-0x1d5)),_0x58ed30(0x3c6)+_0x58ed30(0xa87)+'\x20end\x20'+'0x')+_0x1d1654['byteL'+'ength']['toStr'+_0x58ed30(0x74d)](-0x3*0x40d+-0xbfa+0x1831),null;try{var _0x5852cc=new Uint8Array(_0x4bb8be);for(var _0x4afeb7=-0x236*-0x7+-0x16ab+0x731;_0x4afeb7<_0x4bb8be;_0x4afeb7++)_0x5852cc[_0x4afeb7]=_0x1d1654['getUi'+'nt8'](_0x2f44ee[_0x58ed30(0x5a6)](_0x5f52ce,_0x17826c)+_0x4afeb7);return _0x5ae706['ok']++,_0x5852cc;}catch(_0x45438b){if(_0x2f44ee[_0x58ed30(0x8cd)](_0x58ed30(0xb25),_0x2f44ee[_0x58ed30(0x9a3)]))return _0x5ae706[_0x58ed30(0x8bb)+'d']++,_0x5ae706[_0x58ed30(0x4d0)+_0x58ed30(0x8aa)]=_0x5ae706[_0x58ed30(0x4d0)+_0x58ed30(0x8aa)]||String(_0x45438b&&_0x45438b['messa'+'ge']||_0x45438b)[_0x58ed30(0x9d5)](0x4f9*-0x5+0x2*0xc4a+0x1*0x49,-0xcd7+0x18ac+0x1*-0xb5d),null;else _0x10f0f1[_0x58ed30(0x55f)](_0xa700d9,_0x2dab29);}}function _0x5d9948(_0x3e095f,_0x36a474,_0x2b89d3){var _0x334917=_0x3e9452,_0x1ed70b=_0x1f4515[_0x2b89d3],_0x5a0584=_0x25ecf2(_0x3e095f,_0x36a474,_0x1ed70b['size']);if(!_0x5a0584)return null;var _0x32b852=new DataView(_0x5a0584['buffe'+'r'],_0x5a0584[_0x334917(0x73b)+_0x334917(0x202)],_0x5a0584[_0x334917(0xc1b)+_0x334917(0xa3b)]),_0x2eb06f=_0x32b852[_0x334917(0xca9)+_0x334917(0x9a0)](_0x1ed70b[_0x334917(0x5c9)],!![]),_0x371e91=_0x32b852['getIn'+_0x334917(0x9a0)](_0x1ed70b['hidde'+'n'],!![]),_0x1dea60=_0x2f44ee['suReB'](_0x32b852['getUi'+'nt8'](_0x1ed70b['inite'+'d']),-0x1*0x2123+0x19*-0xdb+0x3687),_0x18abc5=_0x2b89d3===_0x2f44ee[_0x334917(0x619)]?_0x32b852[_0x334917(0xd30)+_0x334917(0x6ae)](_0x1ed70b[_0x334917(0xa46)],!![]):_0x2b89d3===_0x334917(0x73f)?_0x32b852[_0x334917(0xca9)+_0x334917(0x9a0)](_0x1ed70b[_0x334917(0xa46)],!![]):_0x32b852['getUi'+_0x334917(0x638)](_0x1ed70b['fake']),_0x32bf10=_0x32b852[_0x334917(0xc57)+_0x334917(0x638)](_0x1ed70b['activ'+'e'])&-0x1*-0xc28+0x1ed7+-0x2afe;return{'keyAtOffset0':_0x2eb06f,'hidden':_0x371e91,'inited':_0x1dea60,'fake':_0x18abc5,'act':_0x32bf10,'hex':_0x10f207(_0x5a0584),'alt':_0x2b89d3===_0x334917(0x73f)?_0x371e91^(_0x18abc5|0xc17+0x84e+-0x1*0x1465):null};}function _0x420c2f(_0x4d08ab,_0xb719d9,_0x5c6863){var _0x522a4c=_0x3e9452;if(_0x2f44ee[_0x522a4c(0x1f5)](_0x4d08ab,_0x522a4c(0x256)))return _0x12e1e2(_0xb719d9^_0x5c6863);if(_0x4d08ab===_0x2f44ee['UwDoR'])return _0x2f44ee[_0x522a4c(0x597)](_0xb719d9^_0x5c6863,0x25c9+-0x1*-0x2362+-0x492b);return(_0x2f44ee[_0x522a4c(0x8d7)](_0xb719d9,_0x5c6863)&0x24d3+-0x997+-0x8bf*0x3)!==0x811*-0x4+-0x1*-0xe1d+0x1227?0x43d+0x25d9+-0x2a15:0x517*0x1+-0x175*-0xd+0x2*-0xc04;}function _0x194dfe(_0x1617b9,_0x3a392f,_0x5befa9){var _0x46b2ef=_0x3e9452,_0xa5a2b1=_0x1f4515[_0x5befa9];if(!_0xa5a2b1)return null;var _0x27c4ad=_0x2f44ee[_0x46b2ef(0x2d4)](_0x183d83,_0x2f44ee[_0x46b2ef(0x2f3)](_0x1617b9+_0x3a392f,_0xa5a2b1['key']),'u8'),_0x4184b2=_0x183d83(_0x2f44ee[_0x46b2ef(0x53a)](_0x1617b9+_0x3a392f,_0xa5a2b1[_0x46b2ef(0x657)+'n']),_0x46b2ef(0xd08)),_0x4c766e=_0x183d83(_0x2f44ee['ynwpn'](_0x2f44ee[_0x46b2ef(0x65b)](_0x1617b9,_0x3a392f),_0xa5a2b1['inite'+'d']),'u8'),_0x35256c=_0x183d83(_0x2f44ee[_0x46b2ef(0xbfc)](_0x2f44ee['uELII'](_0x1617b9,_0x3a392f),_0xa5a2b1[_0x46b2ef(0xa46)]),_0x5befa9===_0x46b2ef(0x256)?_0x46b2ef(0xb9d):_0x2f44ee['wOoNH'](_0x5befa9,'obfI')?_0x2f44ee[_0x46b2ef(0xd3b)]:'u8'),_0xb57f6c=_0x2f44ee['YwumT'](_0x183d83,_0x2f44ee[_0x46b2ef(0x356)](_0x1617b9,_0x3a392f)+_0xa5a2b1['activ'+'e'],'u8');if(_0x27c4ad===undefined||_0x2f44ee['pYMhO'](_0x4184b2,undefined)||_0x35256c===undefined||_0x2f44ee['jgHYY'](_0xb57f6c,undefined))return null;_0x27c4ad&=0x22+0x1*-0x1d93+0x8*0x3ce,_0x4184b2|=-0x14fe+-0x5*-0x5bf+0x11b*-0x7,_0x4c766e=_0x2f44ee[_0x46b2ef(0x952)](_0x2f44ee['Ratbm'](_0x4c766e,0xff4*-0x2+0x250*-0x10+0x44e8),-0x12*-0x1c+-0x202c+0x1e35),_0xb57f6c&=0x24a0+0xa49*0x2+-0x3931;var _0x43c475;if(_0x2f44ee['fdlQs'](_0x5befa9,'obfF'))_0x43c475=_0x2f44ee[_0x46b2ef(0x707)](_0x12e1e2,_0x4184b2^_0x27c4ad);else{if(_0x2f44ee[_0x46b2ef(0x1d8)](_0x5befa9,'obfI'))_0x43c475=_0x4184b2^_0x27c4ad|-0x49*-0xe+-0x2192+0x1d94*0x1;else _0x43c475=((_0x4184b2^_0x27c4ad)&0x6b4*0x1+-0xdd5*0x2+0x7*0x323)!==0x1f42+-0x269*-0x5+-0x2b4f?-0x167*-0x13+0x1*-0xa5a+-0x104a:-0x2*0x32e+0xa99+-0x9b*0x7;}return{'real':_0x43c475,'fake':_0x35256c,'act':_0xb57f6c,'init':_0x4c766e,'key':_0x27c4ad,'hidden':_0x4184b2};}function _0x3e1a4a(_0x500164,_0x38e935,_0x591eb1,_0x28832a){var _0x5e6827=_0x3e9452,_0x2c0389=_0x1f4515[_0x591eb1],_0x248c94=_0x2f44ee[_0x5e6827(0xa6e)](_0x25ecf2,_0x500164,_0x38e935,_0x2c0389['size']);if(!_0x248c94)return![];var _0xbf0b6d=new DataView(_0x248c94[_0x5e6827(0x3b4)+'r'],_0x248c94['byteO'+_0x5e6827(0x202)],_0x248c94['byteL'+'ength']),_0x4171a6=_0x2f44ee[_0x5e6827(0x4de)](_0x2c0389[_0x5e6827(0xb5c)+'pe'],'u8')?_0xbf0b6d['getUi'+_0x5e6827(0x638)](_0x2c0389[_0x5e6827(0x5c9)]):_0xbf0b6d[_0x5e6827(0xca9)+'t32'](_0x2c0389[_0x5e6827(0x5c9)],!![]),_0x5ef749;if(_0x591eb1===_0x2f44ee[_0x5e6827(0x619)])_0x5ef749=_0x36cbe4(_0x28832a);else{if(_0x2f44ee[_0x5e6827(0x7d5)](_0x591eb1,_0x5e6827(0x73f)))_0x5ef749=_0x2f44ee['iFOKr'](_0x28832a,-0x19*-0x7f+-0x5dd*-0x4+-0x1*0x23db);else _0x5ef749=_0x2f44ee['SVYWY'](_0x28832a?-0xa97+0x1103+-0x1f*0x35:-0x11af+0x7a5+0xa0a,0xb8f+-0x193e+0x2*0x757);}return _0x4d29ea(_0x2f44ee[_0x5e6827(0x7c2)](_0x500164,_0x38e935)+_0x2c0389['hidde'+'n'],_0x5e6827(0xd08),_0x5ef749^_0x4171a6)&&_0x4d29ea(_0x2f44ee[_0x5e6827(0x4e7)](_0x500164,_0x38e935)+_0x2c0389[_0x5e6827(0xa46)],_0x591eb1===_0x5e6827(0x256)?_0x5e6827(0xb9d):_0x2f44ee['kCVCx'](_0x591eb1,_0x5e6827(0x73f))?_0x5e6827(0xd08):'u8',_0x591eb1===_0x5e6827(0x256)?_0x28832a:_0x591eb1===_0x2f44ee[_0x5e6827(0x5ad)]?_0x28832a|-0x1249*0x1+-0x16c9+0x2912:_0x28832a?0x6fb*0x1+-0x263b+0x17d*0x15:-0x3*0x1c4+-0x1e23*0x1+0x2f*0xc1)&&_0x2f44ee[_0x5e6827(0xa6e)](_0x4d29ea,_0x2f44ee[_0x5e6827(0x79b)](_0x500164+_0x38e935,_0x2c0389[_0x5e6827(0x4ad)+'e']),'u8',0x9*-0x24e+0x1*-0x1cc1+-0x1*-0x317f);}var _0x38d0af={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x30b85a=0x177c+0xb7c+-0x2ea*0xc+0.03,_0x142402=0x1*0x10bb+0x909+0x44b*-0x6,_0x1ce0bb={},_0x4f6629=0x493*-0x1+-0x9ca+-0x1*-0xe5d,_0x438391=[],_0x4ed0ef=[];function _0x12132c(_0x5eaffd){var _0x4ad77a=_0x3e9452,_0x577d0c=_0x1e4c5[_0x4ad77a(0x711)+'ntrol'+_0x4ad77a(0x660)]||[],_0x447595=[];_0x4ed0ef=[],_0x438391=[];for(var _0x4f1fb9=0x1*0xc22+-0x1c06+0x24*0x71;_0x4f1fb9<_0x577d0c['lengt'+'h'];_0x4f1fb9++){var _0x3dba54=_0x577d0c[_0x4f1fb9][-0x2413+-0xa74+0x2e87];if(_0x577d0c[_0x4f1fb9][0x1a07+-0x2093+0x68d]!==_0x2f44ee['ZEVFZ'])continue;var _0x40a237=_0x5d9948(_0x5eaffd,_0x3dba54,_0x2f44ee[_0x4ad77a(0x619)]);if(!_0x40a237||_0x2f44ee[_0x4ad77a(0xc3e)](_0x40a237['inite'+'d'],0x1205+0x1fac+-0x6*0x848))continue;var _0x199246=_0x2f44ee['uSImh'](_0x420c2f,_0x4ad77a(0x256),_0x40a237[_0x4ad77a(0x657)+'n'],_0x40a237[_0x4ad77a(0x26b)+'Offse'+'t0']);if(typeof _0x199246!=='numbe'+'r'||!isFinite(_0x199246))continue;var _0x1950d3=_0x5eaffd+':'+_0x3dba54,_0x3f96a2=_0x1ce0bb[_0x1950d3];if(!_0x3f96a2||_0x2f44ee['YxQgJ'](_0x199246,_0x3f96a2['lastW'+'ritte'+'n']))_0x3f96a2=_0x1ce0bb[_0x1950d3]={'base':_0x199246,'lastWritten':null};var _0x425cce=_0x3f96a2['base'],_0x8c69b5=Math[_0x4ad77a(0x894)](_0x425cce);if(_0x8c69b5<-0x1f2d+0x2ad*0x1+-0x4c0*-0x6+0.0001||_0x8c69b5>0x2adbd+-0x11af2+-0xc2b){_0x4ed0ef[_0x4ad77a(0x499)]({'o':_0x3dba54,'v':_0x199246,'why':_0x2f44ee['lrCsM']});continue;}_0x447595['push']({'o':_0x3dba54,'v':_0x199246,'a':_0x8c69b5,'base':_0x425cce,'key':_0x1950d3,'st':_0x3f96a2});}var _0x38809a=[];for(var _0x1bb0b3=-0x675*-0x3+0x83b*-0x1+-0xb24;_0x1bb0b3<_0x447595[_0x4ad77a(0x841)+'h'];_0x1bb0b3++){var _0x246d67=_0x447595[_0x1bb0b3]['a'],_0xdf698=null;for(var _0x4ce92b=0x220c+-0x1*-0x85f+-0x2a6b;_0x2f44ee['qLRpi'](_0x4ce92b,_0x38809a[_0x4ad77a(0x841)+'h']);_0x4ce92b++){var _0x12f530=_0x38809a[_0x4ce92b][_0x4ad77a(0x277)]/_0x246d67;if(_0x2f44ee[_0x4ad77a(0x946)](_0x12f530,_0x2f44ee['uToPz'](-0x2443+0x1*0x18be+-0x5c3*-0x2,_0x30b85a))&&_0x2f44ee[_0x4ad77a(0x32e)](_0x12f530,0x2132+0x68*0x1+-0x2199+_0x30b85a)){_0xdf698=_0x38809a[_0x4ce92b];break;}}!_0xdf698&&(_0xdf698={'mean':_0x246d67,'members':[]},_0x38809a['push'](_0xdf698));_0xdf698[_0x4ad77a(0x2fd)+'rs'][_0x4ad77a(0x499)](_0x447595[_0x1bb0b3]),_0xdf698['mean']=0x21f0+0xaa+-0x229a;for(var _0x56e9ed=-0x91d*0x1+0x1*0x11d5+-0x45c*0x2;_0x56e9ed<_0xdf698[_0x4ad77a(0x2fd)+'rs']['lengt'+'h'];_0x56e9ed++)_0xdf698[_0x4ad77a(0x277)]+=_0xdf698['membe'+'rs'][_0x56e9ed]['a'];_0xdf698['mean']/=_0xdf698[_0x4ad77a(0x2fd)+'rs'][_0x4ad77a(0x841)+'h'];}var _0x30e3cd=[];for(var _0x7503da=-0x1a30*0x1+0x2cf+0x1761;_0x7503da<_0x38809a['lengt'+'h'];_0x7503da++){if(_0x2f44ee[_0x4ad77a(0x715)](_0x38809a[_0x7503da][_0x4ad77a(0x2fd)+'rs'][_0x4ad77a(0x841)+'h'],_0x142402))_0x30e3cd['push'](_0x38809a[_0x7503da]);}if(!_0x30e3cd[_0x4ad77a(0x841)+'h']){_0x4ed0ef[_0x4ad77a(0x499)]({'o':-(-0x103a+-0x1*-0x1f0a+-0xecf),'v':0x0,'why':_0x2f44ee[_0x4ad77a(0xabd)](_0x2f44ee['wEGtw'],_0x142402)+_0x2f44ee[_0x4ad77a(0x6c6)]});return;}var _0x254132=_0x30e3cd[-0x7a7+0xecd+0x6*-0x131][_0x4ad77a(0x277)];for(var _0x316777=-0x1972+-0x42*-0x6f+-0x32c;_0x2f44ee['qLRpi'](_0x316777,_0x30e3cd[_0x4ad77a(0x841)+'h']);_0x316777++)if(_0x2f44ee[_0x4ad77a(0x3be)](_0x30e3cd[_0x316777][_0x4ad77a(0x277)],_0x254132))_0x254132=_0x30e3cd[_0x316777]['mean'];var _0x23918f=_0x2f44ee['wzGZG'](_0x254132,-0x379*-0x1+0x837+-0x1*0xbb0+0.5);for(var _0x5912b=-0x9d6*0x1+-0x9f*0x1d+0x1*0x1bd9;_0x2f44ee['qLRpi'](_0x5912b,_0x38809a[_0x4ad77a(0x841)+'h']);_0x5912b++){if(_0x38809a[_0x5912b][_0x4ad77a(0x2fd)+'rs'][_0x4ad77a(0x841)+'h']>=_0x142402)continue;for(var _0x61b741=-0x1033*-0x1+-0x15da+0x5a7*0x1;_0x61b741<_0x38809a[_0x5912b]['membe'+'rs']['lengt'+'h'];_0x61b741++){_0x4ed0ef[_0x4ad77a(0x499)]({'o':_0x38809a[_0x5912b][_0x4ad77a(0x2fd)+'rs'][_0x61b741]['o'],'v':_0x38809a[_0x5912b][_0x4ad77a(0x2fd)+'rs'][_0x61b741]['v'],'why':_0x4ad77a(0x24c)+_0x4ad77a(0x26f)});}}for(var _0x192ad3=0x1587+-0x114*0x13+-0x10b*0x1;_0x192ad3<_0x30e3cd[_0x4ad77a(0x841)+'h'];_0x192ad3++){var _0x3c76fc=_0x30e3cd[_0x192ad3]['membe'+'rs'];for(var _0x2e1899=-0x1df3+0x1eaa+-0xb7;_0x2e1899<_0x3c76fc[_0x4ad77a(0x841)+'h'];_0x2e1899++){var _0xa56be7=_0x3c76fc[_0x2e1899];if(_0x2f44ee[_0x4ad77a(0xc6c)](_0xa56be7['a'],_0x23918f)){_0x4ed0ef['push']({'o':_0xa56be7['o'],'v':_0xa56be7['v'],'why':_0x2f44ee[_0x4ad77a(0xbdf)](_0x4ad77a(0xa37)+_0x4ad77a(0x806)+'r\x20',_0x23918f[_0x4ad77a(0x2d8)+'ed'](-0x1191*0x1+-0x1011+0x21a4))});continue;}var _0x20df97=_0x2f44ee[_0x4ad77a(0x9f9)](_0xa56be7[_0x4ad77a(0x4a7)],_0x38d0af[_0x4ad77a(0x2a3)+'r']);if(_0x2f44ee[_0x4ad77a(0x7fd)](_0x3e1a4a,_0x5eaffd,_0xa56be7['o'],_0x2f44ee['ZEVFZ'],_0x20df97)){if(_0x4ad77a(0x1e3)===_0x2f44ee['MDmKU'])return _0x54eadf[_0x4ad77a(0x716)](_0x2f44ee['GuqEr'](_0x14e284,0x2541+0x1aac+0xcb5*-0x5))/(-0x2*0x613+0x131*0x17+-0x5*0x2f9);else _0xa56be7['st'][_0x4ad77a(0x7c0)+_0x4ad77a(0x41d)+'n']=Math['froun'+'d'](_0x20df97),_0x4f6629++,_0x438391['push']('0x'+_0xa56be7['o'][_0x4ad77a(0x252)+_0x4ad77a(0x74d)](-0x259d*0x1+0x7da+0x1dd3));}}}}var _0x1e4c5={'FPScontroller':[[-0x2429*0x1+-0x14f2+0x392b,'obfF'],[-0x3a*-0x4+-0x11*0x1eb+-0x23*-0xe9,_0x2f44ee[_0x3e9452(0x619)]],[0x13cb+0x1*0x1841+-0x2bcc,_0x2f44ee[_0x3e9452(0x619)]],[0xc69+0x8c9+0x2*-0xa6d,_0x3e9452(0x256)],[-0x16c2+-0x2a+0x175c,_0x2f44ee[_0x3e9452(0x619)]],[-0x1d3+0xec*0x1+-0x16f*-0x1,_0x3e9452(0x256)],[0x3*0x493+-0x2231+0x32*0x6c,'obfF'],[-0xef9+0xb*-0xf7+0x7*0x3c2,_0x2f44ee['XDcZn']],[-0x1586+0x181b+-0x1d1,_0x3e9452(0x256)],[-0x1ea1+0x1*-0xf1f+-0x2e9c*-0x1,'i32'],[0x2ba*-0x6+0x266*-0x4+-0x194*-0x11,'v3'],[-0x1*-0x2c5+-0xa1f+0x846*0x1,'u8'],[-0x20e*0x2+0xd06+-0x2*0x3fd,_0x3e9452(0x256)],[0xf6*0x14+0x230a+-0x1a9d*0x2,_0x3e9452(0xd08)],[0x2255+-0x218f+0x46,'u8'],[0x1bbc*0x1+-0x347*0x2+-0x406*0x5,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x374+0x528+-0xa0,'u8'],[-0x4d5*-0x2+-0x577*0x3+-0xfa*-0x8,'u8'],[0x2586+0x3*-0x73d+0x1*-0xeb3,'obfF'],[-0x54a+-0x11*-0xb+0x5c3*0x1,_0x2f44ee['ZEVFZ']],[-0x551*-0x1+-0x3*-0x68b+-0x17a6,'f32'],[0xf7d+0x1*0x17f2+-0xcb5*0x3,'f32'],[0x1cdf+0x6*0x11c+0x55*-0x67,'v3'],[0xcd8+0x1a9+0xd21*-0x1,'v3'],[-0x3*0x4b3+-0x1*-0x2566+-0x15e1,'f32'],[-0x1c79*-0x1+0x1f3*-0xc+-0x3a5,_0x2f44ee['dpHEx']],[0x23e3+-0x1bb*-0x11+-0x3fc6,'u8'],[-0x167a+0x1da*0x3+0x1278,_0x2f44ee[_0x3e9452(0x735)]],[0x37*-0x66+0x97*0x10+-0x2*-0x709,'v3'],[0x361+0x1d8c+0x1*-0x1f49,'u8'],[-0x22d3+0x1*0x2281+0x206,_0x2f44ee[_0x3e9452(0x735)]],[0x6d3+0x19*-0xd+-0x3d6,_0x3e9452(0xb9d)],[-0x10*0x119+0xe*0x2ae+0x2*-0x91c,'u8'],[0x3*-0x5d7+0xcaa+-0xd3*-0x8,'u8'],[-0x832*-0x4+0x1caf+-0x3bb7*0x1,_0x2f44ee['ZEVFZ']],[-0x2418+0x10d*-0x1f+0x4683,_0x3e9452(0xb9d)],[-0xe33+0x201e*-0x1+-0x1*-0x302d,'u8'],[0x380+-0x18b3+0x1713,'obfF'],[0x1*0x18d1+-0x33b*-0x7+-0x2e*0xfd,'v3'],[-0x2*-0x755+-0x206e+0x4f3*0x4,_0x3e9452(0x3fa)],[-0x391+0x25bd*0x1+0x2*-0x100a,_0x2f44ee['dpHEx']],[0x21b6+0x97*0x3b+-0x59*0xbf,_0x2f44ee['dpHEx']],[-0x797+0x45*0x51+0x1*-0xbf2,'f32'],[-0x3*0x865+0x1ea7+-0xca*0x4,_0x3e9452(0xb9d)],[0x1d4f+0x2136+0x3c31*-0x1,_0x3e9452(0xb9d)],[-0x1*-0x2518+0x197c+-0x1e*0x202,_0x3e9452(0xb9d)],[-0x1*0x52+-0x16b4+0x1962,'u8'],[-0x23cd+-0x2*0x35e+-0x1*-0x2ce6,'u8'],[-0x16f8+-0x216+0x1b6c,'u8'],[-0x18*0xe8+0x7a2*-0x4+0x4*0xdaa,_0x3e9452(0xb9d)],[0x1d9+0x1*-0xef5+0xf80,'u8'],[0x7ca*-0x2+-0xe47+0x2040,'u8'],[0x17c2+0x26d+-0x17c7,_0x3e9452(0xb9d)],[-0xfa*0x17+-0x1*-0x1537+-0x1*-0x3ab,'f32'],[0x50a+0xc2*0x13+0x4*-0x440,_0x2f44ee[_0x3e9452(0x735)]],[0x24cf+-0xbbf+-0x169c,_0x2f44ee['dpHEx']],[-0x1c6b+0x1dfa+0xe9*0x1,'f32'],[-0xf1*0x7+-0xbe7+0x5*0x432,_0x3e9452(0xb9d)],[-0x16f4+-0x1d3a+0x36ae,_0x3e9452(0xb9d)],[-0x3a6*0x8+-0xb73+-0x2b27*-0x1,'v3'],[-0x664+-0x15af+0x13*0x19d,'u8'],[0x5f3*0x5+-0x2c*-0x60+-0x2ba7,'v3'],[0x2027*0x1+0x2d4*-0x2+-0x17db,_0x3e9452(0xb9d)],[0x3bf*-0x3+-0xc97+-0x6a0*-0x4,'v3'],[-0xcb0+0xc99+0x2cf,_0x2f44ee['dpHEx']],[0x51+0xc55+0x12*-0x8d,_0x2f44ee[_0x3e9452(0x735)]],[0xcf4*0x2+-0x16af+-0x79,_0x2f44ee[_0x3e9452(0x735)]],[0x7*0x563+0x1c62+-0x3f53,'u8'],[-0x125*0x13+0x4f4*-0x5+0x3148,'u8'],[0x13dc+-0x1479+0x1*0x365,'f32'],[-0x220c+0x4c*-0xc+0x128*0x23,'f32'],[0xd0b+-0x2*-0xbef+-0x2205*0x1,'v3'],[0x2037+-0xc0e+-0x1*0x1139,'v3'],[0x49*-0x6e+-0x38*0x22+0x29ca,_0x3e9452(0xb9d)],[-0x1ba*0x5+0xeb2+0x62*-0x8,_0x2f44ee[_0x3e9452(0x735)]],[0x2012*0x1+-0x1d6d*-0x1+-0x3a7b,_0x3e9452(0xb9d)],[0xfca+-0x25a+-0xa68,'f32'],[0x1f5f+0x4*-0x52c+0x7a3*-0x1,'v3'],[0xba9*0x2+0x24e3*-0x1+0x5*0x355,'u8'],[0x1f2a+0x1c79+-0x3887*0x1,'v3'],[-0x1*0x64b+-0x29c*-0x2+-0x3*-0x169,_0x3e9452(0xd08)],[0xcc4+0x1eb*-0x5+0x1*-0x1,'f32'],[0x5d2*0x1+-0x34f+0xad,_0x2f44ee['dpHEx']],[-0x2*0xf89+0x1164+-0x10e2*-0x1,_0x2f44ee[_0x3e9452(0x735)]],[-0x22df+0x72*0xc+0x20c3*0x1,_0x2f44ee['dpHEx']],[-0x20c+0x1a23+-0x14d7,'u8'],[0x9bb+-0x51*-0x6b+0x19d*-0x19,'u8'],[0x1*-0x368+0x14f2+-0xe3e*0x1,'u8'],[0x1c1b+-0x2419*-0x1+-0x3ce7,'u8'],[-0x2271+-0xf*-0x1a1+0x470*0x3,'u8'],[-0x981+-0x1ed8+0x2ba9*0x1,_0x2f44ee[_0x3e9452(0x735)]],[-0x24a*-0xc+0x6b*-0x56+0xbce,'f32'],[0x35*-0xae+0x1df5*-0x1+0x4553,_0x3e9452(0xb9d)],[0x1*0xa9c+-0xa1b+0x2db*0x1,_0x2f44ee[_0x3e9452(0x735)]],[-0x2275+0x3d3*-0x3+-0x2*-0x18a7,'f32'],[0x1*0xd0f+-0x1d17+0x136c,'u8'],[0x160a+-0x1026*-0x1+-0x6a*0x54,_0x2f44ee[_0x3e9452(0x735)]],[0x1*-0xdd7+0x5*-0x2f5+0x4*0x803,'f32'],[0x3f*-0x59+-0xba9+0x2500,'u8'],[-0x18af*0x1+-0x10bd*0x1+0x2ce4,'v3'],[-0x656*0x3+0xa8b*0x3+-0x91b,'v3'],[0x11*-0x18+-0x1346+0x186e,'v3'],[0xfe7+0x626+-0x1271,_0x3e9452(0xb9d)],[0x1c19+-0x11ea*0x2+0xb5b,_0x3e9452(0xb9d)],[0x343+-0x1*0x1f03+-0x2*-0xfb2,_0x3e9452(0xb9d)],[-0x1935+-0x234f+0x402c,'v3'],[-0x157e+0xc*-0x1c9+0x2e9e,_0x3e9452(0xd08)],[0x65*-0x10+0x2*0x106d+-0x16d2,'u8'],[0x38*0x14+0x18ed*0x1+-0x1991,_0x2f44ee['tFZxm']],[0xe21+-0x4db+-0x586,_0x3e9452(0xb9d)],[-0x6ed*-0x3+-0x832+-0x8d1*0x1,_0x3e9452(0xb9d)],[-0x4f*-0x63+-0xd*0xee+-0xeaf*0x1,'f32'],[0x752+-0x171a+0x1394,_0x2f44ee['dpHEx']],[-0x687+-0x223*-0x5+0x4*-0x16,'v3'],[0x55*-0x13+0x5d3+0x8b*0x8,_0x2f44ee['tFZxm']],[-0xb89+0x1*-0xe81+0x1dea,'u8'],[-0x38f*-0x1+-0x185*0x7+0xa5*0x11,'u8'],[-0x847+-0xdb7+0x19e0,'u8'],[-0x88c+-0x1847+0x24b7,_0x3e9452(0xb9d)],[-0x4be*0x1+0x1229+-0x983*0x1,_0x2f44ee[_0x3e9452(0xd3b)]]],'HealthScript':[[0x419+0xc7*-0x4+-0xa5,'u8'],[-0x14b2+0x3*0x98+0x1346,_0x3e9452(0xd08)],[0x1e2e+0x1091*0x1+-0x2e3f,_0x3e9452(0xb9d)],[-0x11aa+-0x9b3*0x1+0x1be1,'f32'],[-0x6*-0x599+-0x833*-0x1+-0x2941,_0x3e9452(0xb9d)],[-0x2*0x471+0x10*0x220+-0xc49*0x2,_0x2f44ee[_0x3e9452(0x735)]],[0x17*-0x7f+0x8e+0xb6b,_0x3e9452(0xb9d)],[-0x1aa3*0x1+0x51b*-0x2+0x256d,'f32'],[0x9*-0x3a+0x6c*0x59+-0x22e2,_0x3e9452(0xd08)],[-0xda*-0x2+-0x1f34+0x1e24,_0x3e9452(0xd08)],[-0x1c88+-0x1c6*-0xd+0x622,'u8'],[0x172c+-0x9fc+-0xc87*0x1,'u8'],[-0x16*0x1+-0x3e1+-0x1*-0x4a1,'u8'],[0x4a*0x7+-0x2*-0x279+0x1*-0x64d,'u8'],[0x78d*0x1+-0x2481+0xeda*0x2,_0x3e9452(0x73f)],[-0x266e*0x1+0x1c9*0x13+0x557,_0x2f44ee[_0x3e9452(0x5ad)]],[0x1aed+-0x1a*-0x106+-0x1b*0x1f3,_0x2f44ee[_0x3e9452(0x5ad)]],[0x1fb+0xe*-0xec+0xbe9,_0x3e9452(0x73f)],[-0x1214+0xeb*-0x11+0x5*0x6f3,_0x3e9452(0x73f)],[-0x5f8+0x732*-0x5+0x2b16,'obfB'],[0x7b*-0x1a+0xfee+-0x240,'obfF'],[-0x2e7*0x8+-0x7ed+0x206d,_0x3e9452(0xb9d)],[-0xf1d*0x1+-0xd14+0x1d7d,'f32'],[0x1e1+0x172a+-0x17bb,_0x2f44ee['dpHEx']],[-0x66b*0x5+-0x94*-0x8+0x1ccb,_0x2f44ee[_0x3e9452(0x735)]],[0x2*0x132d+0x51*-0x74+-0x4a,'f32'],[-0x477+0x14b1+0x2*-0x76d,'v3'],[0xdcd+-0x17ae+-0xb51*-0x1,_0x3e9452(0xb9d)],[-0x95*-0x2f+0x24d+-0x1c30,_0x3e9452(0xb9d)],[-0x8*0x34+0x712*-0x1+0xa32,'u8'],[-0xf13*0x1+0x2172+0x3b*-0x49,'u8'],[-0x20cf+0x18da+0x985,_0x2f44ee['tFZxm']]],'PlayerConfig':[],'WeaponManager':[[0x32b+0x8*-0x1d6+0xb9d,_0x2f44ee[_0x3e9452(0xd3b)]],[0xd71+0x13*-0x33+-0x98c,'i32'],[-0x145a+0x1*0x74c+0xd2e,'u8'],[-0x703+0x381*0x1+-0x1*-0x3a6,'i32'],[-0x1408+-0x15fb+0x343*0xd,_0x2f44ee[_0x3e9452(0x619)]],[-0x1c*-0xb4+-0x1509+0x1d5,_0x2f44ee[_0x3e9452(0x735)]],[0x5e*0x27+-0x25df+0x1811,_0x3e9452(0xd08)],[0x6f9+0x1207+-0x1878,'u8'],[-0x1*0x12e2+-0x1625+-0x1*-0x2990,'u8'],[0x10f1+0x71f+-0x8c*0x2b,_0x2f44ee['tFZxm']],[0xbeb*0x1+-0x1fe6+0x148b,_0x3e9452(0xb9d)],[0x853+-0x137*-0x13+-0x1ed0,_0x3e9452(0xb9d)],[0x1*-0x2371+-0xef8+0x3315,'i32'],[0x455*0x3+0x2*-0x1017+0x13eb,'u8'],[-0x2*-0xc9d+0xa*-0x1cc+0x2a*-0x27,'obfI'],[0x1a03+0x1*0x5c1+-0x1ed4,_0x3e9452(0x73f)],[0x1055+-0xd48+0x1*-0x209,_0x3e9452(0xb9d)],[0x59a*-0x4+-0x19a7+0x3117,'f32'],[-0x1aac*0x1+-0x151*0x1b+0x3f43,_0x3e9452(0xb9d)],[-0x1*0x4cb+-0x2*-0x10fd+-0x1c17,'f32'],[-0x11b2+0x9b*0x3+-0x5ab*-0x3,'f32'],[-0x1d40+-0x207*0xf+-0x1*-0x3cd1,'u8'],[0xc4a+-0xf*-0xc7+-0x16c7,_0x3e9452(0x73f)],[0x331*0x1+-0x1*0xeb7+-0xda*-0xf,_0x2f44ee[_0x3e9452(0x5ad)]],[-0xa96+-0x1c43+0x282d,'obfI'],[0xd3f*0x2+-0x2061+0x74b,_0x3e9452(0x3fa)],[0x229b+0x139f+-0x34c6,_0x2f44ee[_0x3e9452(0xbe1)]],[0x10a2*0x1+-0xc7c+-0x2a6,'obfB'],[-0x1fdd*-0x1+0x15d*0x9+-0x2*0x154b,'obfB'],[0x2*0x420+-0x22f*0x5+0x44f,_0x2f44ee[_0x3e9452(0xbe1)]],[-0x8bf*0x1+-0x5ba*-0x4+-0xc79,_0x3e9452(0x73f)],[0x2569+-0x1fdf+0x1*-0x3be,_0x3e9452(0xd08)],[0x15ff*-0x1+0x1645+-0x1*-0x18a,'u8'],[0x1*0xf35+0xc55+0x2*-0xcdb,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x9a4*-0x1+-0x8*-0x1cc+-0x162c,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x12f2+-0xcbc+0x21ae,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x2*0x649+0x17d8+-0x932*0x1,'u8'],[0x1332+-0x229*-0x11+0x91*-0x5f,'u8'],[-0x1eb4+0x3*-0x54f+0x185f*0x2,'u8'],[0x1*0x2f9+0x373*0x1+0x26*-0x1d,'u8'],[0x19f4+-0x62f+-0x6*0x2f1,'u8'],[-0x1901+0xda6+0xdab,_0x2f44ee[_0x3e9452(0xd3b)]],[0x241f+0x528+0x1*-0x26ef,'u8']],'GG_GameManager':[[0x43*0x4e+0x1e8b+-0x32d1*0x1,'u8'],[-0x193a+-0x1*0x1cc8+0x5*0xad6,_0x2f44ee['dpHEx']],[0x142c+0x2508+0x2*-0x1c78,'u8'],[0x30*0xcb+-0x131*-0x1f+-0x1*0x4aba,'u8'],[0x15a6+-0x1239+-0x5*0xa1,_0x2f44ee[_0x3e9452(0x735)]],[0x95b*0x1+-0x1729+0xe1a,'f32'],[0x1087+-0x1324+0x2ed,_0x2f44ee['tFZxm']],[0x3d6*0x4+-0x2293+0x138f,'i32'],[-0x57f*0x7+-0x1451+0x3b22,'u8'],[0x23*0x7c+0x1140+-0x21c0,'u8'],[-0x2583+-0x1870+-0x13*-0x349,_0x3e9452(0xb9d)],[-0x1f+-0x354*0x3+0xa97,'f32'],[-0x1*0x11a1+-0x2*-0x1085+-0xed9,_0x2f44ee['tFZxm']],[-0x6*-0x471+0x520*-0x5+0x2*-0x39,'u8'],[-0x1fc8+0x232+0x1*0x1e4a,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x1274+-0xb*-0x49+0x100d,_0x3e9452(0xd08)],[0xf09+-0x2b*0xd7+0x15d4,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x160+0x232c+-0xa*0x34a,_0x3e9452(0x73f)],[0x92f+0x7*0x11+-0x8aa,_0x2f44ee['UwDoR']],[-0xbb9*0x2+-0x220*0x7+0x2762,_0x3e9452(0x73f)],[0x1060+-0x195f*0x1+0xa2b,'u8'],[-0x143f+-0xa*0x49+0x1849,_0x3e9452(0xd08)],[-0x13f2+0x20c1+0x25*-0x4f,'u8'],[0x2692+-0x1f61+-0x5c1,'f32'],[-0x2ac+0x1510+-0x10e4,'u8'],[0x498+-0x109c+0xd8c,'u8'],[0xfc2+-0x25a8+0x178a,'u8'],[0xa*0x347+-0x1*-0x752+-0x2670,'i32'],[0x11*-0x196+-0x16c4+0x3366,'f32'],[0x60a+-0x35*0x71+0x27*0x7d,'u8'],[0xf39+-0xb1*0x38+0x1930,'u8'],[-0x2257+0xed7+0x54e*0x4,'i32'],[-0x1567+0x3*-0x322+0x2089,'i32'],[-0x173*0xe+-0xf45+0x254f,_0x3e9452(0xb9d)],[0xa68+-0x20ce+0x407*0x6,'i32'],[-0x8bf*0x1+-0x2*0xe5f+-0x2745*-0x1,_0x3e9452(0xb9d)],[0x260e+0x1*0x2641+-0x4a83,_0x2f44ee['tFZxm']],[-0x242d+0x3*0x55c+-0x4f*-0x47,_0x3e9452(0xd08)]],'TDM_GameManager':[[0x7de+-0x26b8+0x1ef2,'u8'],[-0x2ae+-0x1*-0x14cb+-0x11fd,'u8'],[-0x701+-0xc*0x17f+0x1916,'u8'],[-0xd2d+0x999+-0x7*-0x88,_0x2f44ee['dpHEx']],[0xa40+0xa3*0x33+-0x2a61*0x1,'u8'],[0x1*0x2af+-0x102c+-0xdd9*-0x1,_0x3e9452(0xb9d)],[0xd09+-0xbc5+-0x1*0xe4,_0x2f44ee['dpHEx']],[-0xc*-0x313+0x520+-0x29a0,_0x3e9452(0xd08)],[0x2d*0x71+-0x3e*0x67+0x57d,_0x3e9452(0xd08)],[-0x1e98+-0x20ae+0x3fb2,'u8'],[-0x1bd2*0x1+0x23c5+-0x786,'u8'],[-0x3*0xaaf+-0x3*0x4c7+0x2ed2,_0x2f44ee[_0x3e9452(0x735)]],[0x815*-0x2+-0x15e7+0x2685*0x1,_0x2f44ee['dpHEx']],[-0x1da9+0x1baa+0x277,_0x2f44ee['tFZxm']],[-0x5*0x748+0x72c+0x1dc8,'u8'],[0x24d3+-0xbd4*-0x2+-0x3beb,_0x3e9452(0x73f)],[0x15f9+-0x4ea*0x1+0x1*-0x1037,_0x2f44ee['UwDoR']],[-0x3f0+0x32e+-0x56*-0x5,'obfI'],[-0x2f4+-0x29d*-0x1+0x157,_0x2f44ee[_0x3e9452(0x5ad)]],[0x22e4+0x14d8+-0x36a8,'u8'],[0x538*-0x6+-0xc1*0xa+0x2836,'u8'],[0x14*0xca+0x2b*-0x1+-0xe3d,_0x3e9452(0xd08)],[-0x12ee*0x1+-0x1*0xd63+0xb3f*0x3,'u8'],[-0x1*-0x19cd+0x741*-0x1+-0x1108,'u8'],[0xc1e+0x205*-0x4+-0x1*0x282,_0x3e9452(0xb9d)],[-0x11*-0x222+-0xae0+0x6*-0x3f9,'i32'],[0xfd+-0x21*-0x61+-0x2*0x5f7,'i32'],[-0x6*-0x43f+-0x1*0x17b+-0x166b*0x1,_0x3e9452(0xb9d)],[-0x3cb+-0x9f0+0xf53,_0x3e9452(0xd08)],[-0x1afc+-0x1b1*0xb+-0x2b*-0x119,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x1e91+-0x1a45+0x85a*0x7,_0x2f44ee[_0x3e9452(0x735)]],[0x175a+-0x6d9+-0xedd,_0x3e9452(0xb9d)],[0x12*0xd+-0x61*0x22+0xda0,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x1bf4+0x22b6*-0x1+0x2*0x202d,'u8'],[-0x4d*0x19+0x17ed+-0xeb7,'u8'],[0x1008+-0x6e5+-0x76b,_0x3e9452(0xb9d)]],'PhotonNetworkSync':[[0xb9*-0x1d+0x5*0x671+-0xb0c,'v3'],[-0x2452+0x1b1*0x1+0x22e1,_0x2f44ee[_0x3e9452(0xd3b)]],[0x2225*0x1+-0x1b96+-0x9*0xb3,'u8'],[-0x1107+-0xf*0x272+0x35fa,'u8'],[-0x816+-0x998+0x11f6,'v3'],[0x23a+-0x830*-0x3+-0x3*0x8d2,'u8'],[0x29f*-0x1+0x1acf+0x1*-0x17d8,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x9b5*0x1+-0x52d+0xf3e,'i32'],[-0x614+-0x4a5+0xb19,_0x3e9452(0xb9d)],[0x3bd+-0x25*-0xeb+-0x2550,_0x2f44ee[_0x3e9452(0x735)]],[0x1*0x2501+-0x54a+-0x643*0x5,_0x3e9452(0xb9d)],[0x2222+0x23a9+0x12d*-0x3b,'v3'],[0x26*0x8e+0xbb1+-0x204d,_0x2f44ee['dpHEx']],[-0xd1f*0x2+0xc9*0x1e+-0x1c*-0x1d,_0x2f44ee[_0x3e9452(0x735)]],[-0x1*0x1c49+-0x266c*-0x1+-0x9a3,'i32'],[0x271+-0x1*-0x1087+0x938*-0x2,_0x3e9452(0xb9d)]],'MouseLook':[[0x10ea+0xe3a+-0x1f10,_0x3e9452(0xb9d)],[-0x1*-0x10f5+0x1a4f+-0x1596*0x2,_0x2f44ee[_0x3e9452(0x735)]],[-0x181c*-0x1+0x1*-0x1473+0x3*-0x12f,'f32'],[-0x1*-0x1b7+-0x81*0x19+0xb02,_0x2f44ee[_0x3e9452(0x735)]],[0x5*0x622+-0x1*-0x1f85+-0x3e0b,'f32'],[-0x1*0x1655+-0xddc*0x1+0x745*0x5,_0x2f44ee[_0x3e9452(0x735)]],[0x1079+0x1543*0x1+0x4*-0x963,_0x2f44ee[_0x3e9452(0x735)]],[0x1cfc+0x1dd+0x1*-0x1ea5,'u8'],[-0x11*-0x248+-0x2329*-0x1+0xe9*-0x51,_0x3e9452(0xb9d)],[-0x2a2+-0x44d*0x5+-0x185f*-0x1,'f32'],[0x28*-0xb3+-0x3*-0x3f2+0x1062,_0x3e9452(0xd08)],[0x1565+0xdc7+-0x4*0x8ba,'u8'],[-0x1223*0x1+-0x11fc*-0x1+-0x1*-0x6f,'v2']],'NetworkPlayerAnimations':[[-0xbc*-0x14+0x1fe4+-0xb7b*0x4,'v3'],[-0x9f*-0x26+-0x19ff+0x319,'v3'],[-0x4ab*-0x1+-0x1*0x139c+0x3*0x53b,'u8'],[0x1*0x1ccc+0xd6c+-0x2974,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x2c*-0xa9+0x1c86+-0x38ca,_0x3e9452(0xd08)],[-0x1774+0x1b9c+0x4*-0xd7,_0x2f44ee[_0x3e9452(0x735)]],[0x1bea+0xd2+-0x2*0xdf6,_0x3e9452(0xb9d)],[-0x1060+-0x1*-0x20ed+-0xfb1,_0x2f44ee[_0x3e9452(0x735)]],[-0x92b+-0x590+0xf9b,'f32'],[0x2237+0x1e3c+-0x3f8b*0x1,_0x3e9452(0xb9d)],[-0x19d6+-0x1*-0x653+-0x1*-0x146f,_0x2f44ee['dpHEx']],[-0x27*-0x8f+-0x1*0x1f85+-0x2ab*-0x4,_0x3e9452(0xb9d)],[-0x602+0x13e1+0x1*-0xceb,_0x3e9452(0xb9d)],[0xa*0x15d+-0xa15*0x2+0x780,_0x2f44ee[_0x3e9452(0x735)]],[-0x105b*-0x1+-0xc5f*-0x1+-0x2*0xddf,_0x2f44ee[_0x3e9452(0x735)]],[-0x5*0x687+-0x2fb*-0x8+0x9cb,_0x2f44ee['dpHEx']],[-0x1fb3+-0x2a*-0xa2+-0x1*-0x623,'f32'],[-0x19cb+0x8d*0x22+0x1*0x819,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x2*0x9eb+0x20*0xe3+-0x77e,'u8'],[-0xab0+0x2f*-0x6b+-0x39*-0x8d,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x1*-0x6e6+0x1bb3+-0x2185,_0x3e9452(0xd08)],[0x2448+0x7*0x2f+-0x2479,'u8'],[0x8b8+0x228e+-0x2a2a,_0x2f44ee[_0x3e9452(0x735)]],[0x1df7+0x26b3+-0x438a,_0x3e9452(0xb9d)],[0xe3*0x2+-0x257c+0x6a*0x59,_0x2f44ee['dpHEx']],[0x2641+0xa8a+-0x2fa3,_0x2f44ee[_0x3e9452(0x735)]],[-0x1431+0xd61+0x7fc,'u8'],[0xa*0x146+-0x6*-0x1+-0xb8a,'u8'],[-0xfb5*0x1+0x22e4+0x5*-0x397,'v3'],[0x134a+0x1e6d*0x1+-0x3*0x1025,'v3'],[-0x52b+0x1993*0x1+-0x12d4,'u8']],'NPC_Cotroller':[[-0x1ed7*-0x1+-0x564+-0x195f,'v3'],[0x9f5+0x1*-0x1305+0x930,_0x2f44ee['dpHEx']],[-0x1*0x1255+-0x13ca*-0x1+0x1*-0x151,_0x2f44ee['dpHEx']],[-0x23a0+0x155*-0x3+0x1*0x27f5,'u8'],[0x1c45*-0x1+0x1873+-0x47*-0xf,'u8'],[0x14bc+0xb6a+-0x1fca,'v3'],[-0x1e96+0x1*0x1a61+0x9*0x89,'u8'],[0x1adc+0x1a9e+-0x34da,_0x3e9452(0xb9d)],[-0x1*0xfd+-0x1*0x16e+0x30f,_0x2f44ee[_0x3e9452(0x735)]],[0x2254*-0x1+0x177d+0xb8f,'f32'],[0x13f*0x4+-0x1b73+0x1733,_0x3e9452(0xb9d)],[-0x9b*-0x28+-0x1820+-0x2*-0x58,'u8'],[0x965+0x13d+-0x9d6,'f32'],[0xd7c*0x1+0x21a7+-0x2e4b*0x1,_0x2f44ee[_0x3e9452(0x735)]],[-0x2293+0x1*-0xc73+0x2*0x17f1,'f32'],[-0x60e+0x1d*-0x1f+-0x129*-0x9,_0x3e9452(0xb9d)],[-0xbdb+-0x6fe+-0x13bd*-0x1,'u8'],[0x69c*-0x1+0x3*-0x9e2+0x252e,_0x2f44ee[_0x3e9452(0x735)]],[0xa94+-0x796*0x1+-0x20e,'v3'],[0xc5c+0x1*0x189b+-0x23fb,_0x2f44ee[_0x3e9452(0x735)]],[0x940+0x192*-0x6+-0x3*-0x64,'i32'],[0x126+-0x1*0xabf+0x1*0xa9d,'f32'],[-0x1490*-0x1+0x63d*0x1+0x19c5*-0x1,_0x2f44ee[_0x3e9452(0x735)]],[0x20b*0xd+0x118d+0x562*-0x8,_0x2f44ee[_0x3e9452(0x735)]],[-0xeef+0x212e+-0x112b,'v3'],[-0x159f+-0x121e*0x2+0x3afb,_0x2f44ee['dpHEx']],[0x39b*0x2+0x9bf+0xfd1*-0x1,'f32'],[-0x1f62+0xce2+-0xc2*-0x1a,'v3'],[0x51*0x12+0x1a13+-0x1e81,'u8'],[-0x1b*0x149+0x2368+0x93,'f32'],[-0x2558+-0x35*-0xa7+0x5f*0xb,'v3'],[-0x19e1*-0x1+-0x1c51+-0x10*-0x3d,_0x2f44ee[_0x3e9452(0xd3b)]],[0x1693*-0x1+0x45e*0x4+0x22d*0x3,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x5d4+-0x3*0x1d7+0xcc9,'f32'],[-0x139c+-0x83f*-0x2+0x492,'u8'],[0xc1*-0x10+0x2e*0x1d+0x852,'v4'],[0x1*0x15f7+0x38c+-0x17fb*0x1,_0x3e9452(0xb9d)],[-0x1*-0x1d23+0x20b4+-0x3c4b,'f32'],[-0x82d+-0xaff+-0xa5e*-0x2,_0x2f44ee['dpHEx']],[0x1b57+0x2404+0x3dc3*-0x1,'u8'],[0x1*-0x138b+-0x1*-0x23a7+-0xe7c,_0x2f44ee[_0x3e9452(0xd3b)]]],'TargetHealth':[[0xbcf*-0x2+-0x1f*0x47+-0x1*-0x2047,_0x3e9452(0xd08)],[0x83d+-0x1c5b*0x1+0x1432,_0x2f44ee['tFZxm']],[-0x11*0x7b+-0x3a4*-0x1+0x4bb,'u8'],[0x1797+-0x20d2+0xbb*0xd,_0x3e9452(0xd08)],[-0x1d54+0x17f*0x14+-0x50,_0x2f44ee[_0x3e9452(0xd3b)]],[-0xab0+-0x3af+0xeab,_0x2f44ee['tFZxm']],[-0xf7e+-0x1877+0x2845,'i32'],[-0x695*0x3+0xc2*0xd+0xa69,_0x3e9452(0xb9d)],[0x2*-0xc4f+0x8bf+0x106b,_0x3e9452(0xb9d)],[0x17a5+-0xaa9+-0xc6c,'u8'],[0x2f*0x83+-0x802+-0xf77,_0x3e9452(0xb9d)],[0x423*0x4+0xad*-0xc+0x1*-0x7cc,'u8'],[0x1cc4+-0x3e5+-0x1837,'i32'],[0xeaf+-0x3*0x33+-0x1*0xd6a,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x1*-0x2006+0x240d+-0xd77*0x5,_0x3e9452(0xb9d)],[-0x2a*-0x93+-0xadb*0x1+0xc77*-0x1,'u8']],'SectatorCamera':[[0x7b*0x11+0x191c+0x2133*-0x1,'f32'],[-0x10*0xb4+0x1d7d*-0x1+0x28d5,_0x3e9452(0xb9d)],[-0xde3+0xad2+0x32d,_0x2f44ee[_0x3e9452(0x735)]],[0x27c+-0xd5*-0x1f+-0x1c27,'v3'],[-0x1*-0x1598+-0x1d3d+0x57*0x17,'v3'],[-0xbdb+0xcb2+0xd*-0xb,_0x3e9452(0xd08)],[-0xbf*-0x13+0x1*-0x17f0+0x19*0x67,_0x3e9452(0xd08)],[-0x235*0x1+0x2b*0x4+-0xb*-0x2b,_0x3e9452(0xb9d)],[0x16a1+0x127d+0x1c6*-0x17,_0x3e9452(0xd08)],[-0x564+-0x1673+0x1c2f,_0x2f44ee[_0x3e9452(0x735)]],[-0x2*0x55d+0x1d07+-0x11f1,'u8'],[-0x2*-0xfcd+-0xca9+-0x61*0x31,'v3'],[-0xe*0x1f5+-0x1*-0x10bb+0xb17,'v4'],[-0x1139+0x12*-0x205+-0x1*-0x360f,'u8'],[0x216d*-0x1+-0x1*-0x26f+0x1f7e,_0x2f44ee[_0x3e9452(0xd3b)]]],'UISettings':[[0x756+-0x6e*0x2d+0xc20,_0x2f44ee[_0x3e9452(0xd3b)]],[0xcb7*-0x2+0x1522+-0x26*-0x1e,_0x3e9452(0xb9d)],[-0x340+0x1e98+-0x1a14,'u8'],[0x165*-0x3+-0x35*-0x1b+-0x20*0x1,_0x3e9452(0xd08)],[0x1*0x6b5+0x1df*0x8+-0x1459,'i32'],[0x1b45*-0x1+-0x1*0x1862+-0x34ff*-0x1,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x1b1*0x2+0x214e+0x8*-0x392,'u8'],[-0x5*0x27e+-0x1396*-0x1+-0x5c3,'u8'],[0x1efa+0xb2b*0x2+-0x33f2,'u8'],[0x92b+-0x84b+0x7f,'u8'],[-0x96e+-0x1*-0x1e67+0xad*-0x1d,'u8'],[0x103f*0x2+0x435*0x5+-0x3426,'u8'],[0x2*-0x9e5+0x505*-0x4+0x14a0*0x2,'u8'],[0x893+-0x1*-0x172d+-0x1*0x1e04,_0x3e9452(0xb9d)],[0xc26+0x207a+-0x2*0x156e,_0x2f44ee[_0x3e9452(0x735)]],[-0x4bd*-0x7+0x2*-0x1079+0x1df,'u8'],[-0x369+0x137*-0x13+0x1cfe,_0x3e9452(0xb9d)],[0x682+0x21f7*0x1+-0x25d9*0x1,_0x3e9452(0xd08)],[-0x305*0x5+0x1815+0xb*-0x8c,'u8'],[-0x2*-0xbe6+0x4aa+0x1*-0x18da,'u8'],[-0x253d+-0x4*0x67a+0x42c5,'v2'],[-0x1aa6+0x1ad*-0x5+-0x3*-0xce5,'v2'],[-0x1*0x1b55+0xe32*-0x1+0x2d37,'u8'],[-0x28*0xf+0x12a1+-0x1*0xc91,'u8'],[0x9*-0x395+-0xab8+0x2ec1,_0x2f44ee['dpHEx']],[0x1eb8+0x45d+-0x5*0x641,'v3'],[0x93c+-0xab*0x13+0x755*0x1,'f32'],[-0xf60+0x1*0x68+0x12dc,_0x3e9452(0xb9d)],[0xb7c+-0x4bc+0x2d8*-0x1,_0x2f44ee[_0x3e9452(0x735)]],[0x1980+0x1efc+-0x348c,'u8'],[-0xf32+0x1e4a+-0x5*0x23b,'u8'],[0x4*0x623+0x825+-0x41b*0x7,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x2690+0x202d*-0x1+0x4abd,_0x3e9452(0xd08)],[0x1705+-0x19b2+0x6b1*0x1,_0x3e9452(0xd08)],[0x618+-0xcc8+0xab8*0x1,_0x3e9452(0xd08)],[0x41*0x3+-0xfd1*0x1+0x131a,_0x2f44ee[_0x3e9452(0xd3b)]],[-0x2333+0x1cf4+0xa4f,'i32'],[0xaad*0x2+0xe6e+-0x1fb4,_0x3e9452(0xd08)],[0x24ed+-0x66*0x55+-0x5*-0x35,_0x2f44ee['tFZxm']],[-0x1add+0x12+0x1ee7,_0x2f44ee[_0x3e9452(0xd3b)]],[0x533+-0x179b*0x1+0x19c*0xe,_0x2f44ee[_0x3e9452(0xd3b)]],[-0xa41+-0x25fd+0x3492,'u8'],[0x5*-0x713+0x1e69+-0x94b*-0x1,'u8'],[-0xc6a+0x4*0x9ae+-0x15f8,'u8'],[0x25f2+0x556+0x3*-0xcfb,'u8'],[0x1*0xcc7+-0x7bd+0x9*-0xe,'f32']]},_0x240843={},_0x510560={};function _0x48f80c(_0x4a7f3a,_0x29bc1b,_0x5131df){var _0xad1a0c=_0x3e9452,_0x18fe01={'vLyIL':function(_0x38dfcb,_0x52a8bb){return _0x38dfcb===_0x52a8bb;},'vtSsW':_0x2f44ee['egsTt'],'TmhDA':function(_0x53671d,_0x33472c){return _0x53671d-_0x33472c;},'HxHvj':function(_0x3acf67,_0x3e1ea0){return _0x3acf67!==_0x3e1ea0;},'alfXI':'oZJgP','KJbdh':function(_0x1143f0,_0x1ba684){return _0x1143f0!==_0x1ba684;},'JRKsB':'WAEEL','fxNjj':function(_0x3c1691,_0x405def){var _0x3d2f30=_0x23db;return _0x2f44ee[_0x3d2f30(0x683)](_0x3c1691,_0x405def);},'rblQO':_0xad1a0c(0x711)+'ntrol'+'ler','dSSKt':function(_0x213868,_0x331322){return _0x213868(_0x331322);}};return function(_0x2dd50e){var _0x34611b=_0xad1a0c,_0x428d50={'KBUXf':_0x34611b(0x9f1)+_0x34611b(0xc75)+_0x34611b(0x2d2)+'b','rclRM':function(_0x5b686a,_0xc5dc8f){return _0x5b686a&&_0xc5dc8f;},'xWQpd':'1|2|3'+'|5|0|'+'4','rPXVP':'div','mJeBC':function(_0x243a72,_0x55b3d8){return _0x243a72+_0x55b3d8;},'TTPis':_0x18fe01['vtSsW'],'lXnsf':_0x34611b(0x98b)+_0x34611b(0x774)+_0x34611b(0xa2e)+'99px;'+'paddi'+'ng:4p'+_0x34611b(0x58f)+_0x34611b(0x58e)+'t:11p'+'x/1.4'+_0x34611b(0x302)+_0x34611b(0x580)+_0x34611b(0xb70)+'onsol'+_0x34611b(0xe0d)+'nospa'+_0x34611b(0x958),'ftspA':_0x34611b(0x9f1)+'a','unFcj':function(_0x4aa0f1,_0x2362a1){return _0x4aa0f1<_0x2362a1;},'aZSzi':function(_0x4f3c44,_0x468b77){return _0x4f3c44+_0x468b77;},'fzkKj':function(_0x2c4ce5,_0x336504){var _0x5e1606=_0x34611b;return _0x18fe01[_0x5e1606(0xc80)](_0x2c4ce5,_0x336504);},'CtdGf':function(_0x438bf0){return _0x438bf0();},'JxBPd':function(_0x2a88ab,_0x1f8b79){return _0x2a88ab!==_0x1f8b79;}};try{var _0x1c3344=_0x2dd50e&&_0x2dd50e['val']?_0x2dd50e['val']():-0x1*0x1ed+-0x374+0x561;if(!_0x1c3344)return;var _0x35f595=_0x510560[_0x4a7f3a]||(_0x510560[_0x4a7f3a]={}),_0x249bc0=_0x35f595[_0x1c3344];if(!_0x249bc0)_0x249bc0=_0x35f595[_0x1c3344]={'ptr':_0x1c3344,'firstSeen':Date[_0x34611b(0xafc)](),'hits':0x0};_0x249bc0[_0x34611b(0x26d)]++;if(_0x5131df){if(_0x18fe01[_0x34611b(0x5f7)](_0x34611b(0x27e),_0x18fe01['alfXI'])){if(!_0x240843[_0x1c3344])_0x240843[_0x1c3344]={'ptr':_0x1c3344,'kind':_0x4a7f3a,'firstSeen':Date[_0x34611b(0xafc)](),'hits':0x0};_0x240843[_0x1c3344]['hits']++;}else{var _0x208a02=_0x12dc97[_0x34611b(0x397)+'ement'+'ById'](_0x428d50['KBUXf']);if(_0x428d50['rclRM'](_0xa31972,!_0x208a02)&&_0x3b84b0['body']){var _0x4e373d=_0x428d50[_0x34611b(0x706)]['split']('|'),_0x145abd=0x1c84+0x25c+-0x1ee0;while(!![]){switch(_0x4e373d[_0x145abd++]){case'0':_0x2ecef2[_0x34611b(0x930)+'ck']=function(){_0x5d18a4(![]),_0x49e2fd();};continue;case'1':var _0x2ecef2=_0x554d97[_0x34611b(0x97b)+_0x34611b(0x39f)+'ent'](_0x428d50[_0x34611b(0xb71)]);continue;case'2':_0x2ecef2['id']=_0x34611b(0x9f1)+'a-sw-'+'v2-ta'+'b';continue;case'3':_0x2ecef2[_0x34611b(0x995)]['cssTe'+'xt']=_0x428d50['mJeBC'](_0x34611b(0xa29)+'ion:f'+_0x34611b(0xa72)+_0x34611b(0x3b1)+'12px;'+_0x34611b(0xdbe)+_0x34611b(0x492)+_0x34611b(0x76c)+'x:214'+'74829'+_0x34611b(0x9d4)+_0x34611b(0xba8)+_0x34611b(0xada)+_0x34611b(0x9a9)+_0x34611b(0x78b)+_0x34611b(0x264)+'none;',_0x428d50['TTPis'])+_0x60a6b9+';'+_0x428d50['lXnsf'];continue;case'4':_0x1cd3d8['body'][_0x34611b(0x3d7)+_0x34611b(0x25d)+'d'](_0x2ecef2);continue;case'5':_0x2ecef2['textC'+_0x34611b(0x284)+'t']=_0x428d50[_0x34611b(0x38b)];continue;}break;}}else!_0x23bc1d&&_0x208a02&&_0x208a02['remov'+'e']();}}else{var _0x3c6c36=_0x4d505d[_0x4a7f3a];if(!_0x3c6c36||_0x3c6c36[_0x34611b(0x87e)]!==_0x1c3344){_0x4d505d[_0x4a7f3a]={'ptr':_0x1c3344,'firstSeen':Date[_0x34611b(0xafc)](),'hits':0x0,'replaced':!!_0x3c6c36};try{if(_0x18fe01['KJbdh'](_0x18fe01[_0x34611b(0x3a7)],'dOIvZ')){var _0x33d198=_0x4f5925[_0x34611b(0x3ac)+'r'](function(_0x360ffc){var _0x3e3515=_0x34611b;return _0x18fe01[_0x3e3515(0x7db)](_0x360ffc[_0x3e3515(0xd51)],_0x4a7f3a);})[-0x1*-0x130+0x22d1*0x1+-0x2401];_0x136a8e={'type':_0x4a7f3a,'atMs':Date[_0x34611b(0xafc)]()-_0x43ef6b,'originalFunc':!!(_0x33d198&&_0x33d198['hook']&&typeof _0x33d198[_0x34611b(0x401)]['origi'+'nalFu'+'nc']==='funct'+_0x34611b(0x636)),'resolveGameAtFire':!!_0x138d47(),'gameSourceAtFire':_0x5ae706[_0x34611b(0x1c4)+'e']};}else{var _0x193448='';for(var _0x85038a=0x265c+-0x17d+-0x24df*0x1;_0x428d50[_0x34611b(0xd28)](_0x85038a,_0x5ae424[_0x34611b(0x841)+'h']);_0x85038a++){var _0x304bbb=_0x582f87[_0x85038a]['toStr'+_0x34611b(0x74d)](0x18d4+0x8a8+0x85b*-0x4);_0x193448+=_0x428d50[_0x34611b(0x286)](_0x304bbb[_0x34611b(0x841)+'h']<-0x4*0x748+0x1f35+0xb1*-0x3?'0':'',_0x304bbb);}return _0x193448;}}catch(_0x2f9f39){}}}if(_0x18fe01[_0x34611b(0x1ff)](_0x4a7f3a,_0x18fe01[_0x34611b(0x596)])&&_0x38d0af['on'])try{_0x18fe01[_0x34611b(0x348)](_0x12132c,_0x1c3344);}catch(_0x2134be){}if(!_0x29bc1b){var _0x33d198=_0x4f5925[_0x34611b(0x3ac)+'r'](function(_0x2780cb){var _0x5010aa=_0x34611b,_0x259448={'iQgqV':function(_0x2d865a,_0x17945a){return _0x2d865a===_0x17945a;}};if(_0x428d50[_0x5010aa(0x223)]('cvQHl',_0x5010aa(0x2cd)))return _0x2780cb['type']===_0x4a7f3a;else{var _0x4ad61c=_0x3d3335[_0x5010aa(0x3ac)+'r'](function(_0x3a722a){var _0x13994d=_0x5010aa;return _0x259448[_0x13994d(0x68b)](_0x3a722a['type'],_0x2c5e47);})[0xdf3+0x1b*-0x9b+0x266];_0x2cd59d={'type':_0x270035,'atMs':_0x428d50[_0x5010aa(0x6f3)](_0x313b9f[_0x5010aa(0xafc)](),_0x493a2d),'originalFunc':!!(_0x4ad61c&&_0x4ad61c[_0x5010aa(0x401)]&&typeof _0x4ad61c[_0x5010aa(0x401)][_0x5010aa(0xd6f)+'nalFu'+'nc']==='funct'+_0x5010aa(0x636)),'resolveGameAtFire':!!_0x428d50['CtdGf'](_0x378320),'gameSourceAtFire':_0x4e8eba['sourc'+'e']};}})[-0x3*0xa0f+0xc56+0x11d7];if(_0x33d198&&_0x33d198['hook'])try{if(_0x18fe01[_0x34611b(0x38e)](_0x34611b(0x28b),'NVFwj'))_0x33d198[_0x34611b(0x401)][_0x34611b(0x299)+'ed']=![];else return null;}catch(_0x531822){}}}catch(_0xf45e25){}};}function _0x47a6df(){var _0x42cae5=_0x3e9452,_0x5aea60=(_0x42cae5(0x2b3)+_0x42cae5(0x87f)+_0x42cae5(0x425)+'|5')['split']('|'),_0x456586=-0xc1c+0x1275+-0x659;while(!![]){switch(_0x5aea60[_0x456586++]){case'0':if(!_0x2daa7e[_0x42cae5(0xd50)+'ns']||!_0x2daa7e['plugi'+'ns'][_0x42cae5(0x841)+'h'])return![];continue;case'1':if(!_0x110b34||typeof _0x110b34[_0x42cae5(0xa51)+_0x42cae5(0x6d1)]!==_0x42cae5(0xb3f)+_0x42cae5(0x636))return![];continue;case'2':if(!window[_0x42cae5(0xa07)+'WebMo'+_0x42cae5(0x9e1)]||!window[_0x42cae5(0xa07)+'WebMo'+_0x42cae5(0x9e1)][_0x42cae5(0x7d3)+'me'])return![];continue;case'3':_0x3a3f35=window[_0x42cae5(0xa07)+_0x42cae5(0xa16)+'dkit'][_0x42cae5(0xb55)+_0x42cae5(0x99c)+'er'];continue;case'4':if(_0x4f5925[_0x42cae5(0x841)+'h'])return!![];continue;case'5':return _0x2f44ee[_0x42cae5(0x8ef)](_0x4f5925['lengt'+'h'],0x1aea+0x5*-0x796+0xb04);case'6':var _0x2daa7e=window['Unity'+_0x42cae5(0xa16)+_0x42cae5(0x9e1)]['Runti'+'me'];continue;case'7':_0x110b34=_0x110b34||_0x2daa7e[_0x42cae5(0xd50)+'ns'][_0x2daa7e['plugi'+'ns'][_0x42cae5(0x841)+'h']-(0x1da*0x12+0x5b*0x61+-0x43ce)];continue;case'8':for(var _0x3eb49e=-0x71*0x2e+-0x19e5+0x2e33;_0x2f44ee['dmEYh'](_0x3eb49e,_0x42d3ca[_0x42cae5(0x841)+'h']);_0x3eb49e++){var _0x21b53d=_0x42d3ca[_0x3eb49e];try{var _0x2a9679=_0x110b34[_0x42cae5(0xa51)+_0x42cae5(0x6d1)]({'typeName':_0x21b53d['type'],'methodName':_0x42cae5(0x550)+'e','params':[_0x2f44ee['tFZxm'],_0x2f44ee[_0x42cae5(0xd3b)]],'returnType':undefined},_0x48f80c(_0x21b53d[_0x42cae5(0xd51)],_0x21b53d['keep'],_0x21b53d[_0x42cae5(0x315)]));_0x4f5925['push']({'type':_0x21b53d[_0x42cae5(0xd51)],'hook':_0x2a9679,'keep':_0x21b53d[_0x42cae5(0x4c4)]});}catch(_0x10994b){_0x31b15e['push'](_0x21b53d[_0x42cae5(0xd51)]+':\x20'+String(_0x10994b&&_0x10994b['messa'+'ge']||_0x10994b)['slice'](-0x237+-0x93f*-0x1+-0x708,-0x12b+-0xb*-0x25e+-0x183f));}}continue;}break;}}function _0x2dcab6(_0x38bc89,_0x1d9660){return function(){var _0x5a6157=_0x23db,_0x2c2f9d={'iRaRs':_0x2f44ee[_0x5a6157(0x4ca)]};try{if('CNkkL'!==_0x5a6157(0x6ca))return _0x225cac['on'];else{var _0x47bdcb=_0x494094[_0x1d9660]||(_0x494094[_0x1d9660]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x331df8=arguments;if(_0x38bc89==='get'){var _0x5e8bae=_0x331df8[-0x2507*0x1+-0x4f1*0x1+0x29f8];if(_0x5e8bae&&_0x2f44ee[_0x5a6157(0xb43)](typeof _0x5e8bae[_0x5a6157(0xdba)],_0x5a6157(0xb3f)+_0x5a6157(0x636))){var _0x710bfc=_0x5e8bae[_0x5a6157(0xdba)]();if(typeof _0x710bfc===_0x5a6157(0x71a)+'r'&&isFinite(_0x710bfc)){if(_0x2f44ee[_0x5a6157(0x27c)](_0x47bdcb['lo'],null)||_0x710bfc<_0x47bdcb['lo'])_0x47bdcb['lo']=_0x710bfc;if(_0x47bdcb['hi']===null||_0x2f44ee[_0x5a6157(0x8ef)](_0x710bfc,_0x47bdcb['hi']))_0x47bdcb['hi']=_0x710bfc;if(_0x47bdcb[_0x5a6157(0x50d)]!==null){if(_0x2f44ee['sNJtQ'](_0x5a6157(0x6fd),'ABWkK')){var _0x3f588a=Math['abs'](_0x2f44ee['ChdVr'](_0x710bfc,_0x47bdcb[_0x5a6157(0x50d)]));if(_0x3f588a>_0x47bdcb[_0x5a6157(0x8f5)])_0x47bdcb[_0x5a6157(0x8f5)]=_0x3f588a;}else _0x11f1af(_0x2c2f9d[_0x5a6157(0x5c2)]);}_0x47bdcb['last']=_0x710bfc;}_0x47bdcb[_0x5a6157(0x26d)]++;if(_0x331df8[-0x65*0x15+-0x62b+0xe75]&&typeof _0x331df8[0x1c34+0x2201+-0xc*0x52f]['val']===_0x2f44ee[_0x5a6157(0x604)]){var _0x4cf805=_0x331df8[-0x2*0x609+0x1be2+-0x47*0x39][_0x5a6157(0xdba)]();if(_0x4cf805)_0x1a1b3c=_0x4cf805;}}}else{_0x331df8[0x1*-0x11b7+0x147*0x12+0x10e*-0x5]&&typeof _0x331df8[-0x54f+0x1*-0x1c8d+0x21dd]['val']===_0x5a6157(0xb3f)+_0x5a6157(0x636)&&(_0x47bdcb['setLa'+'st']=_0x331df8[-0x7e3*-0x1+-0x77f+-0x9*0xb]['val'](),_0x47bdcb[_0x5a6157(0xadc)+'ts']++);_0x331df8[-0x1*-0x14a1+0x24e2*-0x1+-0x17*-0xb5]&&typeof _0x331df8[-0x224a+0x17a4+-0x2aa*-0x4][_0x5a6157(0xdba)]===_0x2f44ee['yPUHU']&&(_0x47bdcb['setB']=_0x331df8[0x31f+0x3*0x137+-0x6c2][_0x5a6157(0xdba)](),_0x47bdcb['pairH'+_0x5a6157(0x2fc)]++);if(_0x331df8[-0x79d+0x26c0+0x1f23*-0x1]&&typeof _0x331df8[0x387+-0xe8e+0xb07]['val']===_0x5a6157(0xb3f)+'ion'){var _0x1bfd19=_0x331df8[0x1*0xc61+-0x7*0x382+0xc2d][_0x5a6157(0xdba)]();if(_0x1bfd19)_0x1a1b3c=_0x1bfd19;}}}}catch(_0x1067a5){}};}function _0x1892a3(){var _0x42c33c=_0x3e9452;if(_0x2f44ee[_0x42c33c(0x5a3)]('FdmEE',_0x2f44ee[_0x42c33c(0xdfb)])){if(_0x201370)return!![];if(!_0x110b34||_0x2f44ee[_0x42c33c(0xbc0)](typeof _0x110b34['hookP'+'ostfi'+'x'],_0x42c33c(0xb3f)+'ion'))return![];var _0x3181d2=_0x42fb4d['Mouse'+_0x42c33c(0x43f)]||[];for(var _0x3cfd71=0x7ef*-0x1+0x1e3a*0x1+0x1b7*-0xd;_0x3cfd71<_0x3181d2['lengt'+'h'];_0x3cfd71++){var _0x22e4ed=_0x3181d2[_0x3cfd71];try{if(_0x22e4ed[_0x42c33c(0x93a)]===_0x42c33c(0x5c7))_0x110b34[_0x42c33c(0xa51)+'ostfi'+'x']({'typeName':'Mouse'+_0x42c33c(0x43f),'methodName':_0x22e4ed[_0x42c33c(0xbdc)],'params':_0x22e4ed[_0x42c33c(0x624)+_0x42c33c(0xa99)],'returnType':_0x22e4ed[_0x42c33c(0x5b0)+'et']},_0x2f44ee[_0x42c33c(0x216)](_0x2dcab6,'get',_0x22e4ed['name']));else _0x2f44ee['gHojm'](_0x22e4ed[_0x42c33c(0x93a)],'void')&&_0x22e4ed[_0x42c33c(0x5c8)+'s'][_0x42c33c(0x841)+'h']===-0x1*0x13c+0x6d1+0x3*-0x1dc&&_0x22e4ed['param'+'s'][0x6e0*-0x3+-0x470*-0x1+0x94*0x1c]===_0x42c33c(0x5c7)&&_0x110b34[_0x42c33c(0xa51)+'refix']({'typeName':_0x42c33c(0xbae)+'Look','methodName':_0x22e4ed[_0x42c33c(0xbdc)],'params':_0x22e4ed[_0x42c33c(0x624)+_0x42c33c(0xa99)],'returnType':undefined},_0x2f44ee['NqDLb'](_0x2dcab6,_0x42c33c(0x67b),_0x22e4ed[_0x42c33c(0xbdc)]));}catch(_0x5b6055){_0xa9f0bd[_0x42c33c(0x499)](_0x2f44ee['aocsm'](String,_0x5b6055&&_0x5b6055['messa'+'ge']||_0x5b6055)['slice'](0x305*-0xc+0x26bd+-0x281*0x1,0x2162+-0x351+0x1d99*-0x1));}}return _0x201370=!![],!![];}else _0x5db557['warni'+_0x42c33c(0xb4b)]['push'](_0x2f44ee[_0x42c33c(0x49e)](_0x42c33c(0x4d9)+_0x42c33c(0x667)+_0x42c33c(0xcf0)+'irst\x20'+_0x42c33c(0x429)+_0x42c33c(0xa66)+_0x42c33c(0xdd6)+_0x42c33c(0xcef),_0x19646a[_0x42c33c(0xd84)+'ncesR'+_0x42c33c(0xd77)+'ed'][_0x42c33c(0xc01)](',\x20')));}function _0x391bd0(){var _0x437c8b=_0x3e9452,_0x7c324b={'zxidc':function(_0x4fe25e,_0x3be091,_0x1508fc){return _0x4fe25e(_0x3be091,_0x1508fc);}};if(_0x437c8b(0xa9f)===_0x2f44ee[_0x437c8b(0x9d1)])_0x7c324b[_0x437c8b(0x965)](_0x287836,_0x454841,_0x44c4b8[_0x437c8b(0x760)]);else{var _0x529ccd=0x25d3+-0x13f+-0x2494,_0xf520d5=0x1dc7+0x1b6c+-0x3933,_0x40abbe=-0x1*-0x32e+0x309*0xb+-0x2491,_0x494914=0x1ba1+-0x1559+-0x648,_0x3d15a9=-0x1d5+-0x269*-0x5+-0xa38;try{var _0x48de21=window['Unity'+_0x437c8b(0xa16)+'dkit']&&window[_0x437c8b(0xa07)+'WebMo'+'dkit']['Runti'+'me'],_0x57990e=_0x110b34||_0x48de21&&_0x48de21[_0x437c8b(0xd50)+'ns']&&_0x48de21['plugi'+'ns'][_0x48de21[_0x437c8b(0xd50)+'ns']['lengt'+'h']-(-0xa92+0xa4d*0x2+-0xa07)];if(_0x57990e&&_0x57990e['hooks'])for(var _0x18af01=-0xb*-0x2d+-0x12c2+0x10d3;_0x18af01<_0x57990e[_0x437c8b(0x9e4)][_0x437c8b(0x841)+'h'];_0x18af01++){var _0x16e8ce=_0x57990e[_0x437c8b(0x9e4)][_0x18af01];if(!_0x16e8ce||_0x2f44ee[_0x437c8b(0x846)](_0x16e8ce[_0x437c8b(0x30d)+_0x437c8b(0x847)],'Mouse'+_0x437c8b(0x43f)))continue;_0x529ccd++;if(_0x2f44ee['iWYBu'](_0x16e8ce['table'+'Index'],undefined))_0xf520d5++;if(_0x16e8ce['appli'+'ed'])_0x40abbe++;}}catch(_0x4affd0){}for(var _0x5e72bc in _0x494094){var _0x30682a=_0x494094[_0x5e72bc];_0x494914+=_0x30682a[_0x437c8b(0x26d)]||-0x20d9+0x1f*0x128+0x2ff*-0x1,_0x3d15a9+=_0x2f44ee[_0x437c8b(0x4e7)](_0x30682a[_0x437c8b(0xadc)+'ts']||0x1*-0x6dd+-0x3b4+0xa91,_0x30682a[_0x437c8b(0x443)+_0x437c8b(0x2fc)]||-0x2a3+-0xb1e+0x1*0xdc1);}return{'registered':_0x201370,'total':_0x529ccd,'resolved':_0xf520d5,'applied':_0x40abbe,'getterHits':_0x494914,'setterHits':_0x3d15a9,'distinct':Object['keys'](_0x494094)['lengt'+'h'],'errorCount':_0xa9f0bd['lengt'+'h'],'errors':_0xa9f0bd['slice'](-0x12e1+0x528+0x3*0x493,0x2*0x33+-0x129b+-0xf*-0x137)};}}function _0x4d3a4d(){var _0x58c563=_0x3e9452,_0x5aea3e=null,_0x8563a=-0xe5c+0x9*-0x2cc+0x2788;for(var _0x15e9a4 in _0x494094){var _0x705e2=_0x494094[_0x15e9a4];_0x705e2[_0x58c563(0x443)+_0x58c563(0x2fc)]&&_0x2f44ee[_0x58c563(0x63a)](_0x705e2[_0x58c563(0x443)+_0x58c563(0x2fc)],_0x8563a)&&_0x2f44ee[_0x58c563(0x364)](typeof _0x705e2[_0x58c563(0xce8)+'st'],'numbe'+'r')&&_0x2f44ee[_0x58c563(0x27c)](typeof _0x705e2[_0x58c563(0x3ae)],_0x2f44ee[_0x58c563(0xc0a)])&&isFinite(_0x705e2['setLa'+'st'])&&isFinite(_0x705e2['setB'])&&(_0x5aea3e={'rawA':_0x705e2['setLa'+'st'],'rawB':_0x705e2[_0x58c563(0x3ae)],'hits':_0x705e2[_0x58c563(0x443)+'its'],'name':_0x15e9a4},_0x8563a=_0x705e2['pairH'+_0x58c563(0x2fc)]);}if(!_0x5aea3e)return null;var _0x23378b=_0x5aea3e['rawA']>=-(0xab4+-0x2*-0x11d7+-0x2e08)&&_0x5aea3e['rawA']<=-0x1217*0x1+-0x1de*0x1+0x1*0x144f,_0x2c4dca=_0x5aea3e['rawB']>=-(0x7cc+-0x5da+0x3*-0x88)&&_0x2f44ee[_0x58c563(0x245)](_0x5aea3e['rawB'],0x9fb+-0x11ec*-0x1+0x1b8d*-0x1);return _0x23378b!==_0x2c4dca?(_0x5aea3e[_0x58c563(0x3e7)]=_0x23378b?_0x5aea3e['rawA']:_0x5aea3e[_0x58c563(0xdcb)],_0x5aea3e['yaw']=_0x23378b?_0x5aea3e[_0x58c563(0xdcb)]:_0x5aea3e[_0x58c563(0xc18)],_0x5aea3e[_0x58c563(0x55d)]=_0x23378b?_0x2f44ee['LiSvV']:'b,a'):(_0x5aea3e['pitch']=null,_0x5aea3e['yaw']=null,_0x5aea3e[_0x58c563(0x55d)]=_0x2f44ee['ynwpn'](_0x58c563(0xd49)+_0x58c563(0xbb2)+'\x20('+(_0x23378b?_0x2f44ee['WXDrP']:_0x58c563(0x89b)+'er\x20bo'+'unded'),')')),_0x5aea3e;}function _0x21b28f(){var _0x377f08=_0x3e9452;if(_0x2f44ee['MkHTl'](_0x2f44ee[_0x377f08(0x293)],_0x2f44ee['fyUNI'])){var _0x3b4d7d=-0x1*-0x21d9+0x2*-0x120a+0x23b*0x1;for(var _0x15605e=-0x1c1a+-0x42e+-0x8*-0x409;_0x15605e<_0x4f5925[_0x377f08(0x841)+'h'];_0x15605e++){if(_0x2f44ee['GeHQc']('obisp',_0x2f44ee['SDxlI']))try{var _0x3349af=_0x1564f4();return{'ok':_0x3349af['ok'],'source':_0x3349af[_0x377f08(0x1c4)+'e'],'why':_0x3349af['why'],'tried':_0x3349af[_0x377f08(0x23c)],'camPtr':_0x2f44ee['DHrTQ']('0x',_0x3349af['camPt'+'r'][_0x377f08(0x252)+_0x377f08(0x74d)](-0x1238+0x3*0xbff+0x11b5*-0x1)),'tfPtr':'0x'+_0x3349af['tfPtr']['toStr'+_0x377f08(0x74d)](-0x57*0x31+0xa54+0x1*0x663),'fov':_0x3349af[_0x377f08(0x7e7)],'quat':_0x3349af['quat'],'pos':_0x3349af[_0x377f08(0xc63)],'basis':_0x3349af['basis'],'errors':_0x3349af[_0x377f08(0x95d)+'s']['slice'](-0x31*0xba+0x3ec+0x1fae,0x3*-0xa16+0x1*0xc91+0x11b5)};}catch(_0x18e138){return{'ok':![],'error':_0x5c2457(_0x18e138&&_0x18e138['messa'+'ge']||_0x18e138)[_0x377f08(0x9d5)](0x1*0x1e63+-0x2e*0x79+-0x1*0x8a5,0x1666+0x6*0x3e5+-0x2d4c)};}else{if(_0x4f5925[_0x15605e][_0x377f08(0x401)]&&_0x2f44ee['axDPk'](_0x4f5925[_0x15605e]['hook'][_0x377f08(0x935)+'Index'],undefined))_0x3b4d7d++;}}return _0x3b4d7d;}else{var _0x4f4ed6=_0x3a941c['abs'](_0x4757c4['c'][_0x4f9a4c]['v'][-0x4*0x31c+0x1*-0x2683+0x32f4]-_0x4240e2);if(_0x4f4ed6<_0x406a61)_0x18420a=_0x4f4ed6;}}function _0x4c39ee(){var _0x21fdd5=_0x3e9452,_0x27c133=0xee5+0x1ac8+0x2f*-0xe3;for(var _0xda095d=-0xe53+0x1f8f+-0x4*0x44f;_0x2f44ee[_0x21fdd5(0xc6c)](_0xda095d,_0x4f5925[_0x21fdd5(0x841)+'h']);_0xda095d++){if(_0x4f5925[_0xda095d]['hook']&&_0x4f5925[_0xda095d]['hook']['appli'+'ed'])_0x27c133++;}return _0x27c133;}var _0x552392=null,_0x113284=[],_0x2ce3d3={},_0x136a8e=null;function _0x5262e6(_0xaaf1c3){var _0x447f82=_0x3e9452;try{if(!_0x3a3f35||!_0xaaf1c3)return null;var _0x11e354=new _0x3a3f35(_0xaaf1c3)[_0x447f82(0xc74)+_0x447f82(0xc00)+'me']();return _0x2f44ee['Dsyxb'](_0x11e354,undefined)?null:_0x11e354;}catch(_0x5b7dfb){return null;}}function _0x27879f(_0x4bdb01,_0x1606d4,_0x2dba2d){var _0x13bc03=_0x3e9452;if(_0x2f44ee['TkFfJ']('IdRpC',_0x2f44ee['iFkjw'])){var _0x419cfa=_0x2f44ee['rypin'](_0x33dec7);if(!_0x419cfa)return null;if(_0x1606d4<0x397*-0x1+-0x569*-0x3+-0x329*0x4||_0x2f44ee[_0x13bc03(0x53a)](_0x1606d4,_0x2dba2d*(0xecd+-0x230b*0x1+0x1442))>_0x419cfa[_0x13bc03(0xc1b)+_0x13bc03(0xa3b)])return null;var _0xb71447=[];for(var _0xa49527=0x542+0x4*-0x4ca+0xde6*0x1;_0x2f44ee[_0x13bc03(0x93f)](_0xa49527,_0x2dba2d);_0xa49527++)_0xb71447[_0x13bc03(0x499)](_0x419cfa[_0x13bc03(0xd30)+'oat32'](_0x4bdb01+_0x1606d4+_0xa49527*(-0x1ae7+0x1b73*-0x1+0x365e),!![]));return _0x5ae706['ok']+=_0x2dba2d,_0xb71447;}else _0x129732=_0x15aab2,_0x5ec6f6=_0x137a1e[_0x13bc03(0xafc)]()-_0x5c1276;}var _0xb86130={'PhotonNetworkSync':[[_0x3e9452(0xdd2),_0x3e9452(0xb50)+_0x3e9452(0x6cb)],[_0x2f44ee['LcrcH'],'healt'+'h'],[_0x3e9452(0x369),_0x2f44ee[_0x3e9452(0x21b)]],[_0x3e9452(0xc30),_0x2f44ee['CPaLJ']],[_0x3e9452(0xcc7),_0x3e9452(0xb90)+'Look']],'NetworkPlayerAnimations':[[_0x2f44ee['ZdXyo'],_0x2f44ee[_0x3e9452(0xb19)]],[_0x3e9452(0x82d),_0x3e9452(0x673)]],'NPC_Cotroller':[[_0x2f44ee[_0x3e9452(0x45e)],_0x3e9452(0xa3c)+'le'],['0xb4',_0x3e9452(0x652)+'tHeal'+'th'],[_0x2f44ee['XrkOG'],_0x2f44ee['wgisq']],['0xd4',_0x3e9452(0x652)+'tHeal'+_0x3e9452(0x76d)],[_0x3e9452(0x493),'trans'+_0x3e9452(0x840)]],'EnemyBot':[['0x14',_0x3e9452(0x5e0)+'form']]},_0x4c448f={'PhotonNetworkSync':[['0x58',_0x2f44ee['eHjeT']],[_0x3e9452(0xa9d),'local'+_0x3e9452(0xb65)],[_0x2f44ee['FurtT'],'id']]};function _0x16fd7e(_0x13c2db,_0x3fab03){var _0x13cfe5=_0x3e9452,_0x3e1a41={'vjqgy':function(_0x53df66,_0x34ada7){return _0x2f44ee['acaYT'](_0x53df66,_0x34ada7);},'XpmUV':function(_0x8c5d6,_0x5a0a34){var _0x33d80c=_0x23db;return _0x2f44ee[_0x33d80c(0xa02)](_0x8c5d6,_0x5a0a34);},'mvmND':function(_0x46a7b8,_0xd172c0){return _0x2f44ee['Dsyxb'](_0x46a7b8,_0xd172c0);},'gczNu':function(_0x20935c,_0x7cd49e){var _0x44f822=_0x23db;return _0x2f44ee[_0x44f822(0x5fc)](_0x20935c,_0x7cd49e);},'VNlOH':function(_0x31b37d,_0x3a49cc){return _0x31b37d+_0x3a49cc;}},_0x5ced5a=_0x1e4c5[_0x13c2db]||[],_0x402fd6={'kind':_0x13c2db,'ptr':_0x2f44ee['fqiMf']('0x',_0x3fab03['toStr'+_0x13cfe5(0x74d)](-0x1a38+0x939*-0x2+0x32*0xe5)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x5bb509=-0x4c7*0x7+0x1*0x755+0x1a1c;_0x5bb509<_0x5ced5a[_0x13cfe5(0x841)+'h'];_0x5bb509++){if('AdERm'===_0x2f44ee[_0x13cfe5(0x5fd)]){var _0x17e023=(0x112a+0x215e*0x1+-0x3288+0.5-_0x39fbc0['y']/_0x1d6eff[_0x13cfe5(0x98d)+'s']['h'])*(-0x13b4+-0xb4e+0xf82*0x2),_0x44bee7=_0x1113bb/_0x138dde/_0x5c094d;_0x5117e8[_0x13cfe5(0xb52)+_0x13cfe5(0x2e1)]={'got':_0x14cb8d['round'](_0x17e023*(-0xad*0x19+-0x17*0x27+0x184e))/(-0x146*-0x11+0x49*0x66+-0xbb5*0x4),'want':_0x15b6c4[_0x13cfe5(0x716)](_0x3e1a41[_0x13cfe5(0xc9c)](_0x44bee7,-0x53*-0x2+0x10d9+-0xd97))/(-0x1ebc+0x2193+0x111),'off':_0x48b494[_0x13cfe5(0x716)](_0x3e1a41['XpmUV'](_0x17e023,_0x44bee7)*(-0x285+0x135e+-0xcf1))/(0x10*-0xc8+0x1989+-0x13*0x7b)};}else{if(_0x2f44ee['YxQgJ'](_0x5ced5a[_0x5bb509][-0x115e+0x2*0x113c+-0x1119],'v3'))continue;var _0x1ee393=_0x27879f(_0x3fab03,_0x5ced5a[_0x5bb509][-0xd9f+-0xd*-0x233+-0xef8],0x2135+-0x2ba*-0x6+-0x18c7*0x2);if(!_0x1ee393)continue;_0x402fd6[_0x13cfe5(0xbe0)+'cs'][_0x13cfe5(0x499)]({'o':'0x'+_0x5ced5a[_0x5bb509][-0x150e+-0x190e*0x1+0x2e1c]['toStr'+_0x13cfe5(0x74d)](0x5*0x47b+-0xd43*-0x1+0x2a*-0xd9),'v':_0x1ee393});}}var _0x5e44c7=-0xdfd+-0x6bb*0x1+0x68*0x33,_0x2820b0=_0x13c2db+'@'+_0x3fab03,_0x344289=_0x32dd5b(_0x402fd6['allVe'+'cs'],_0x3f8dde(),_0x25b726[_0x2820b0]);_0x25b726[_0x2820b0]=_0x344289['posAt']?{'o':_0x344289[_0x13cfe5(0x84a)]}:null,_0x402fd6['pos']=_0x344289[_0x13cfe5(0xc63)],_0x402fd6['posAt']=_0x344289['posAt'],_0x402fd6['held']=_0x344289[_0x13cfe5(0x8f6)],_0x402fd6[_0x13cfe5(0xc2c)+'dates']=_0x344289[_0x13cfe5(0xc2c)+_0x13cfe5(0x43a)],_0x402fd6[_0x13cfe5(0x877)+'er']=_0x344289[_0x13cfe5(0x877)+'er'],_0x402fd6['reach']=_0x344289['reach'],void _0x5e44c7;var _0x229b39=_0xb86130[_0x13c2db],_0x41775d=_0x4c448f[_0x13c2db];if(_0x41775d){_0x402fd6[_0x13cfe5(0x4f9)]={};for(var _0x2e8144=0x1e4d*-0x1+-0x1aa9+0x38f6;_0x2f44ee['GWjfN'](_0x2e8144,_0x41775d['lengt'+'h']);_0x2e8144++){var _0x341941=_0x183d83(_0x3fab03+_0x2f44ee[_0x13cfe5(0xcd7)](parseInt,_0x41775d[_0x2e8144][0x1cee+0x1b83*0x1+-0x3871*0x1],-0x2fd+0x5*-0x577+0x1e60),'i32');if(_0x2f44ee[_0x13cfe5(0x7ed)](_0x341941,undefined))_0x402fd6['tag'][_0x41775d[_0x2e8144][-0x1595+0x1*-0x1a06+0x2f9c]]=_0x341941;}}if(_0x229b39)for(var _0x53a3e5=0x33*-0x8a+-0x10f1*-0x1+0xa8d;_0x2f44ee[_0x13cfe5(0xa63)](_0x53a3e5,_0x229b39['lengt'+'h']);_0x53a3e5++){var _0x49a422=_0x183d83(_0x3fab03+_0x2f44ee[_0x13cfe5(0x216)](parseInt,_0x229b39[_0x53a3e5][0x2d*0x9d+0x2647+-0x88*0x7c],0x1a96+-0x4cd*-0x1+-0x3*0xa71),_0x2f44ee[_0x13cfe5(0x4b5)]);if(_0x49a422)_0x402fd6['refs'][_0x229b39[_0x53a3e5][0xcb1+0xea6+-0xdab*0x2]]='0x'+_0x2f44ee[_0x13cfe5(0x8f8)](_0x49a422,0x2425+0x17cc+-0x3bf1)['toStr'+'ing'](0x1cd7+-0x8f2+-0x13d5);}return _0x402fd6['scala'+'rs']=_0x5ced5a[_0x13cfe5(0x3ac)+'r'](function(_0x24a458){var _0x1756cb=_0x13cfe5;return _0x3e1a41['mvmND'](_0x24a458[0x9bc+0x7*-0x9e+-0x569],_0x1756cb(0xb9d))||_0x24a458[-0x1920+-0x1d11+0x1b19*0x2]===_0x1756cb(0xd08);})[_0x13cfe5(0x301)](function(_0xb99d18){var _0x60f4de=_0x13cfe5;if(_0x3e1a41['mvmND']('IEacA','IEacA'))return{'o':_0x3e1a41['gczNu']('0x',_0xb99d18[-0x1273*-0x1+0x2*0xb5d+-0x1*0x292d]['toStr'+_0x60f4de(0x74d)](0x80d*-0x1+0xbb*-0x31+0x2be8)),'v':_0x183d83(_0x3e1a41[_0x60f4de(0x783)](_0x3fab03,_0xb99d18[-0x751*-0x2+-0x17a6+0x904]),_0xb99d18[-0x1*0xd39+0x34d+-0xe7*-0xb])};else{var _0x6611e8=0x1*0x8ef+-0xbab+-0x1c*-0x19;for(var _0x327803=0x1442+-0x1f7f+0xb3d;_0x327803<_0x26f150[_0x60f4de(0x841)+'h'];_0x327803++){if(_0x30771d[_0x327803][_0x60f4de(0x401)]&&_0x39e7bd[_0x327803][_0x60f4de(0x401)][_0x60f4de(0x994)+'ed'])_0x6611e8++;}return _0x6611e8;}})[_0x13cfe5(0x3ac)+'r'](function(_0x188bbc){var _0x1aa82f=_0x13cfe5;return _0x2f44ee[_0x1aa82f(0xcb4)](_0x188bbc['v'],undefined)&&_0x2f44ee['aocsm'](isFinite,_0x188bbc['v']);})['slice'](0x1117+-0x17c8+0x6b1,-0x2085+0xbe3+0x14ae),_0x402fd6;}function _0x9c3025(){var _0x42e3ce=_0x3e9452,_0x244231={'YbolU':_0x2f44ee['ujFPY']},_0x221be5={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x5a84c8=_0x4d505d['FPSco'+_0x42e3ce(0x640)+'ler']&&_0x4d505d[_0x42e3ce(0x711)+_0x42e3ce(0x640)+_0x42e3ce(0x660)][_0x42e3ce(0x87e)]||-0xd46*-0x1+0xb6b*-0x2+0x990,_0x59dd8b=_0x510560[_0x42e3ce(0xc43)+'nNetw'+_0x42e3ce(0x4b0)+'nc']||{},_0x2299fc=Object['keys'](_0x59dd8b);for(var _0x350270=-0x1b*-0xe3+-0x1*0xcb5+-0xb3c;_0x2f44ee[_0x42e3ce(0xd78)](_0x350270,_0x2299fc[_0x42e3ce(0x841)+'h'])&&_0x2f44ee['DlCZd'](_0x350270,-0x172*-0x16+0x955+0x1*-0x2909);_0x350270++){var _0x1f25ec=('4|2|3'+_0x42e3ce(0x591)+_0x42e3ce(0xb2e))[_0x42e3ce(0x33c)]('|'),_0x4d7df1=0x4a4+-0x1389*0x1+0xee5;while(!![]){switch(_0x1f25ec[_0x4d7df1++]){case'0':_0x371756['first'+_0x42e3ce(0x98f)+'s']=_0x28e54a['first'+_0x42e3ce(0x23d)]-_0x43ef6b;continue;case'1':if(_0x371756[_0x42e3ce(0x2e3)]['healt'+'h']){var _0x252eed=_0x2f44ee[_0x42e3ce(0x216)](parseInt,_0x371756['refs'][_0x42e3ce(0x42b)+'h'],-0x1*-0x103d+0x15da+0x5*-0x79b);_0x371756[_0x42e3ce(0x42b)+'h']=_0x121bfb(_0x252eed,_0x42e3ce(0x7d1)+_0x42e3ce(0x8e1)+'pt',_0x2f44ee['UwDoR']);}continue;case'2':var _0x371756=_0x16fd7e(_0x42e3ce(0xc43)+'nNetw'+_0x42e3ce(0x4b0)+'nc',_0x28e54a['ptr']);continue;case'3':_0x371756[_0x42e3ce(0x26d)]=_0x28e54a['hits'];continue;case'4':var _0x28e54a=_0x59dd8b[_0x2299fc[_0x350270]];continue;case'5':_0x221be5['playe'+'rs'][_0x42e3ce(0x499)](_0x371756);continue;case'6':_0x371756['isLoc'+'al']=!!_0x5a84c8&&_0x371756[_0x42e3ce(0x2e3)][_0x42e3ce(0xba4)]===_0x2f44ee['MRQwW']('0x',_0x5a84c8['toStr'+'ing'](0x529*-0x3+0x5dc*0x4+-0x7e5));continue;}break;}}_0x221be5['playe'+'rCoun'+'t']=_0x2299fc['lengt'+'h'];var _0x7c996d=_0x510560[_0x42e3ce(0x22f)+_0x42e3ce(0xa25)+_0x42e3ce(0x660)]||{},_0x32e6b7=Object[_0x42e3ce(0x5ea)](_0x7c996d);for(var _0x3929ae=0x1fe2+0x1969+-0x3*0x1319;_0x2f44ee['GWjfN'](_0x3929ae,_0x32e6b7[_0x42e3ce(0x841)+'h'])&&_0x2f44ee[_0x42e3ce(0xc6c)](_0x3929ae,-0x207c+0x1c06+-0x2*-0x247);_0x3929ae++){if(_0x2f44ee['uyIhY']===_0x2f44ee['wmAFm']){_0x25fbc1=_0xecf940[_0x42e3ce(0xa52)];if(_0x50959f[_0x42e3ce(0xc63)])_0x117e7f=_0xd008['pos'];if(_0x2f44ee['HYpey'](_0x1db95d[_0x42e3ce(0x7e7)],null))_0x15219d=_0x3c099b[_0x42e3ce(0x7e7)];}else{var _0x111e5c=_0x2f44ee[_0x42e3ce(0x2d4)](_0x16fd7e,_0x2f44ee[_0x42e3ce(0x8f2)],_0x7c996d[_0x32e6b7[_0x3929ae]][_0x42e3ce(0x87e)]);_0x111e5c[_0x42e3ce(0x26d)]=_0x7c996d[_0x32e6b7[_0x3929ae]][_0x42e3ce(0x26d)],_0x111e5c[_0x42e3ce(0x3df)+'SeenM'+'s']=_0x7c996d[_0x32e6b7[_0x3929ae]][_0x42e3ce(0x3df)+_0x42e3ce(0x23d)]-_0x43ef6b;if(_0x111e5c[_0x42e3ce(0x2e3)]['healt'+'h'])_0x111e5c['healt'+'h']=_0x2f44ee[_0x42e3ce(0x99b)](_0x121bfb,_0x2f44ee['BuMpM'](parseInt,_0x111e5c[_0x42e3ce(0x2e3)]['healt'+'h'],-0x10f*-0x9+0x1f43+-0x28ba),_0x2f44ee['nxBSP'],_0x42e3ce(0x73f));_0x221be5[_0x42e3ce(0x403)]['push'](_0x111e5c);}}_0x221be5[_0x42e3ce(0x292)+'unt']=_0x32e6b7['lengt'+'h'];var _0x1b7ba8=_0x510560['FPSco'+_0x42e3ce(0x640)+'ler']||{},_0x10b530=Object[_0x42e3ce(0x5ea)](_0x1b7ba8);for(var _0x4f8010=0x1303+0xf99*-0x2+-0xc2f*-0x1;_0x2f44ee[_0x42e3ce(0xd1e)](_0x4f8010,_0x10b530[_0x42e3ce(0x841)+'h'])&&_0x4f8010<0x1a98+0x201c+0x3a9c*-0x1;_0x4f8010++){var _0x1b7b01=_0x16fd7e(_0x42e3ce(0x711)+_0x42e3ce(0x640)+'ler',_0x1b7ba8[_0x10b530[_0x4f8010]][_0x42e3ce(0x87e)]);_0x1b7b01[_0x42e3ce(0x26d)]=_0x1b7ba8[_0x10b530[_0x4f8010]][_0x42e3ce(0x26d)],_0x1b7b01[_0x42e3ce(0xa18)+'al']=_0x2f44ee[_0x42e3ce(0x341)](_0x1b7ba8[_0x10b530[_0x4f8010]]['ptr'],_0x5a84c8),_0x221be5['contr'+'oller'+'s']['push'](_0x1b7b01);}_0x221be5[_0x42e3ce(0x7c5)+_0x42e3ce(0xb0e)+'Count']=_0x10b530[_0x42e3ce(0x841)+'h'];var _0x2e57a9=_0x221be5[_0x42e3ce(0xd31)+'rs'][_0x42e3ce(0x82f)+'t'](_0x221be5['bots']);for(var _0x4f5cce=-0x12eb*0x1+0x8*-0x229+0x2433;_0x2f44ee[_0x42e3ce(0x681)](_0x4f5cce,_0x2e57a9[_0x42e3ce(0x841)+'h']);_0x4f5cce++){if(_0x2e57a9[_0x4f5cce][_0x42e3ce(0xa18)+'al'])continue;_0x221be5[_0x42e3ce(0x1fc)+'es']['push'](_0x2e57a9[_0x4f5cce]);}_0x221be5[_0x42e3ce(0xbcc)+_0x42e3ce(0x99f)]=_0x221be5[_0x42e3ce(0x1fc)+'es']['lengt'+'h'];var _0xbf8b4={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x5a0fe7={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x51182f in _0x4d505d){if('EyFsX'===_0x2f44ee[_0x42e3ce(0x9cf)])return{'w':0x0,'h':0x0};else{var _0x3ecd76=_0x4d505d[_0x51182f];if(!_0x3ecd76||!_0x3ecd76['ptr'])continue;if(!(_0x51182f in _0xbf8b4))continue;_0x221be5['manag'+'ers'][_0x51182f]='0x'+_0x3ecd76[_0x42e3ce(0x87e)][_0x42e3ce(0x252)+_0x42e3ce(0x74d)](-0x8e6*0x2+-0xe45+0x2021);var _0x41b23b=_0x2f44ee['pEgUc'](_0x183d83,_0x3ecd76[_0x42e3ce(0x87e)]+_0xbf8b4[_0x51182f],_0x2f44ee[_0x42e3ce(0x4b5)]),_0x534117=_0x183d83(_0x2f44ee[_0x42e3ce(0x670)](_0x3ecd76[_0x42e3ce(0x87e)],_0x5a0fe7[_0x51182f]),_0x42e3ce(0x8a0));if(_0x41b23b&&_0x221be5[_0x42e3ce(0x708)+'a']===null){if(_0x2f44ee[_0x42e3ce(0xa89)]!==_0x42e3ce(0x554)){var _0x2102ef=_0x52581f();if(_0x2102ef&&_0x2102ef[_0x42e3ce(0x288)+'e']&&_0x2102ef[_0x42e3ce(0x288)+'e']['HEAPU'+'8']&&_0x2102ef[_0x42e3ce(0x288)+'e'][_0x42e3ce(0x96d)+'8']['buffe'+'r'])return _0x2102ef[_0x42e3ce(0x288)+'e'][_0x42e3ce(0x96d)+'8'];}else _0x221be5[_0x42e3ce(0x708)+'a']=_0x2f44ee[_0x42e3ce(0x408)]('0x',_0x2f44ee[_0x42e3ce(0x8f8)](_0x41b23b,0xaca+0x958+-0x1422)[_0x42e3ce(0x252)+'ing'](-0x1f8d+-0x7cb+0x2768)),_0x221be5[_0x42e3ce(0x708)+_0x42e3ce(0x807)]=_0x51182f;}if(_0x534117&&_0x221be5[_0x42e3ce(0xd31)+'rList']===null)_0x221be5[_0x42e3ce(0xd31)+_0x42e3ce(0xd37)]=_0x2f44ee['SdJFB']('0x',(_0x534117>>>-0x3aa+0xd8*0x2c+-0x10bb*0x2)[_0x42e3ce(0x252)+_0x42e3ce(0x74d)](0xca7*0x1+-0x1e45+0x11ae));}}if(!_0x221be5[_0x42e3ce(0xd31)+'rCoun'+'t']&&!_0x221be5['botCo'+_0x42e3ce(0x398)]&&!_0x221be5[_0x42e3ce(0x708)+'a']){if(_0x2f44ee['zmDNH'](_0x2f44ee['yRrip'],'aqPiB'))_0x221be5[_0x42e3ce(0x32c)]=_0x2f44ee[_0x42e3ce(0x35b)](_0x2f44ee['CfAwn'],'the\x20l'+_0x42e3ce(0x2e7)+'looks'+_0x42e3ce(0x34b)+_0x42e3ce(0xb81)+_0x42e3ce(0x6ad)+'\x20reco'+_0x42e3ce(0x3f8)+_0x42e3ce(0x203)+'\x20live'+_0x42e3ce(0xc38)+_0x42e3ce(0x511)+'t\x20the'+_0x42e3ce(0x56c)+'.');else{var _0x440d41=_0x493b7e[_0x42e3ce(0xa07)+_0x42e3ce(0xa16)+_0x42e3ce(0x9e1)]&&_0x194573[_0x42e3ce(0xa07)+'WebMo'+_0x42e3ce(0x9e1)]['Runti'+'me'],_0x257985=_0x4819b9||_0x440d41&&_0x440d41[_0x42e3ce(0xd50)+'ns']&&_0x440d41[_0x42e3ce(0xd50)+'ns'][_0x440d41[_0x42e3ce(0xd50)+'ns'][_0x42e3ce(0x841)+'h']-(0x1b45+0x2421+-0x3f65*0x1)];if(!_0x257985||typeof _0x257985['mallo'+'c']!==_0x42e3ce(0xb3f)+_0x42e3ce(0x636))return _0x40edeb[_0x42e3ce(0x95d)+'s']['push'](_0x244231['YbolU']),0x20c5*0x1+-0x665*0x4+-0x1*0x731;var _0x39f45c=_0x3e437c(_0x257985['mallo'+'c'](0x721*0x1+0x1*0x195b+-0x205c));if(typeof _0x39f45c!==_0x42e3ce(0x71a)+'r'||!(_0x39f45c>0x67*0x27+0xeb8+0x2d*-0xad))return _0xaa0fc0[_0x42e3ce(0x95d)+'s']['push'](_0x42e3ce(0xa10)+'c\x20ret'+_0x42e3ce(0x57d)+'\x20'+_0x39f45c),0x1*0xa06+0xae5*-0x2+0xbc4;_0x5f08bf['scrat'+'ch']=_0x39f45c;}}else!_0x221be5['enemy'+_0x42e3ce(0x99f)]&&(_0x221be5[_0x42e3ce(0x32c)]='Playe'+_0x42e3ce(0x6a6)+'e\x20pre'+_0x42e3ce(0xaa5)+'but\x20n'+_0x42e3ce(0x2ed)+_0x42e3ce(0xd74)+_0x42e3ce(0x809)+_0x42e3ce(0xa77)+_0x42e3ce(0x5dd)+_0x42e3ce(0x874)+_0x42e3ce(0xb64)+'\x20chec'+'k\x20'+(_0x42e3ce(0xa18)+'al\x20on'+_0x42e3ce(0x39c)+_0x42e3ce(0x3e3)+_0x42e3ce(0x75d)+_0x42e3ce(0x51e)+_0x42e3ce(0xbb6)));try{var _0x73a990=window['Unity'+'WebMo'+_0x42e3ce(0x9e1)]&&window['Unity'+_0x42e3ce(0xa16)+_0x42e3ce(0x9e1)][_0x42e3ce(0x7d3)+'me'],_0x4c71b2=_0x73a990&&_0x73a990[_0x42e3ce(0x7aa)+'nalWa'+_0x42e3ce(0xbb4)+'es']||[],_0x4fa262={};for(var _0xa4a61a=0x1c2d+-0x17*-0xce+-0x2eaf;_0xa4a61a<_0x4c71b2[_0x42e3ce(0x841)+'h']&&_0xa4a61a<-0x11ba+-0x1*-0x227b+-0x11*0x11;_0xa4a61a++){var _0x2b0b99=_0x2f44ee[_0x42e3ce(0x693)](_0x4c71b2[_0xa4a61a][_0x42e3ce(0x5c8)+'s']['join'](',')+'\x20->\x20',_0x4c71b2[_0xa4a61a]['retur'+_0x42e3ce(0x5f6)]||_0x2f44ee[_0x42e3ce(0xdf8)]);_0x4fa262[_0x2b0b99]=(_0x4fa262[_0x2b0b99]||0x1*0x23b+0x1c40+-0x1e7b)+(0xebb+-0x5f4*0x5+0xf0a);}_0x221be5[_0x42e3ce(0x5cb)+_0x42e3ce(0x1f6)]=_0x4fa262;}catch(_0x10a257){}return _0x221be5;}function _0x121bfb(_0x32ccc1,_0x104fe1,_0x2caabd){var _0x1b692e=_0x3e9452;if(_0x2f44ee['axDPk'](_0x2f44ee[_0x1b692e(0x1ef)],'MIPyj')){try{var _0x3c173b=_0x1e4c5[_0x104fe1]||[];for(var _0x2e9961=0x649*-0x3+-0x179*0xe+0xd7*0x2f;_0x2e9961<_0x3c173b[_0x1b692e(0x841)+'h'];_0x2e9961++){if(_0x2f44ee['jHwSx'](_0x1b692e(0x79e),_0x1b692e(0x79e))){if(_0x1286e9['lg'])_0x17ab4f['lg']['textC'+_0x1b692e(0x284)+'t']='';return;}else{if(_0x3c173b[_0x2e9961][-0x9*0x379+0x2074+-0x132]!==_0x2caabd)continue;var _0x4c5ed8=_0x3c173b[_0x2e9961][0x1e80+0x6e9+-0x2569];if(_0x2caabd[_0x1b692e(0x30c)+'Of'](_0x1b692e(0x901))===0x1bea+0x1c19+-0x3803){var _0x3b1a0e=_0x5d9948(_0x32ccc1,_0x4c5ed8,_0x2caabd);if(!_0x3b1a0e)return null;_0x3b1a0e['o']=_0x4c5ed8,_0x3b1a0e['k']=_0x2caabd;var _0x2cdd5c=_0x2f44ee[_0x1b692e(0x3a6)](_0x5e5ab3,[_0x3b1a0e]);if(!_0x2cdd5c[_0x1b692e(0xb67)]['lengt'+'h'])return null;return _0x2cdd5c['rows'][0x19da+0x2*0x142+-0x1*0x1c5e];}var _0x5dd734=_0x2f44ee['pEgUc'](_0x183d83,_0x32ccc1+_0x4c5ed8,_0x2caabd);if(_0x5dd734===undefined)return null;return{'o':'0x'+_0x4c5ed8[_0x1b692e(0x252)+_0x1b692e(0x74d)](-0x23a3+-0x72*0xb+0x2899),'v':_0x5dd734};}}}catch(_0x350468){}return null;}else try{_0x1ac5e8[_0x1b692e(0x5af)][_0x4cb36f]();}catch(_0x422fd5){}}function _0x29cd8f(){var _0x232d62=_0x3e9452,_0x3ce416={'aBUyC':function(_0x23c105,_0x5378f4){return _0x2f44ee['aocsm'](_0x23c105,_0x5378f4);}},_0x74cd76={};_0x5ae706['ok']=-0x1*-0x180e+-0x863*0x2+-0x3a4*0x2,_0x5ae706[_0x232d62(0x8bb)+'d']=-0x4*0x1cd+0x1*0x125f+0x3*-0x3b9,_0x5ae706['lastE'+'rror']=null;var _0x32d73b=Object[_0x232d62(0x5ea)](_0x1e4c5);for(var _0x2132ef=0x2563+-0x17*0x1a3+0x3*0x16;_0x2f44ee[_0x232d62(0xa0e)](_0x2132ef,_0x32d73b[_0x232d62(0x841)+'h']);_0x2132ef++){var _0x45d22b=_0x32d73b[_0x2132ef],_0x487e59=_0x4d505d[_0x45d22b];if(!_0x487e59||!_0x487e59[_0x232d62(0x87e)])continue;var _0x47933b=_0x1e4c5[_0x45d22b]||[],_0x5e6795=[];for(var _0x3b5904=-0x3*0xb2d+-0x6b*-0x1+-0xd*-0x28c;_0x2f44ee['PnbdU'](_0x3b5904,_0x47933b[_0x232d62(0x841)+'h']);_0x3b5904++){var _0x3c876a=_0x47933b[_0x3b5904][0x269a+0xc5*-0x8+-0x2072],_0xccb6bf=_0x47933b[_0x3b5904][0x1d2b*0x1+-0x1dd7+-0xad*-0x1];if(_0xccb6bf['index'+'Of'](_0x2f44ee[_0x232d62(0xc61)])===-0x1a06+-0x1e01+0x3807){var _0x282247=_0x5d9948(_0x487e59[_0x232d62(0x87e)],_0x3c876a,_0xccb6bf);if(!_0x282247)continue;_0x282247['o']=_0x3c876a,_0x282247['k']=_0xccb6bf,_0x5e6795[_0x232d62(0x499)](_0x282247);}else{if('bRgmT'==='bRgmT'){var _0x521643=_0x2f44ee[_0x232d62(0x82a)](_0x183d83,_0x487e59[_0x232d62(0x87e)]+_0x3c876a,_0xccb6bf);if(_0x521643===undefined)continue;var _0x2570dd={'o':_0x3c876a,'k':_0xccb6bf,'v':_0x521643};if(_0x2f44ee[_0x232d62(0x456)](_0xccb6bf,'v2')||_0x2f44ee[_0x232d62(0x3b2)](_0xccb6bf,'v3')||_0xccb6bf==='v4'){var _0x20f02a=_0x2f44ee['OcjUM'](_0xccb6bf,'v2')?0x509*0x1+-0x651+0x14a:_0x2f44ee['abLVX'](_0xccb6bf,'v3')?-0x593*-0x4+0x24e0+-0xe9*0x41:0x1bbf+-0xd43+0x1*-0xe78,_0x53226e=_0x2f44ee[_0x232d62(0x2f4)](_0x27879f,_0x487e59[_0x232d62(0x87e)],_0x3c876a,_0x20f02a);_0x53226e&&(_0x2570dd[_0x232d62(0x35a)]=_0x53226e,_0x2570dd['v']=_0x53226e[-0xd1*-0x19+0x4*0x745+-0x317d]);}_0x5e6795[_0x232d62(0x499)](_0x2570dd);}else{var _0x5e763=_0x1f5e21[_0x232d62(0x97b)+_0x232d62(0x39f)+_0x232d62(0x6c9)](_0x2f44ee['WAbSG']);_0x5e763['id']=_0x2f44ee[_0x232d62(0x4e5)],_0x5e763['style'][_0x232d62(0xa6f)+'xt']=_0x2f44ee[_0x232d62(0x5fc)](_0x232d62(0xa29)+'ion:f'+_0x232d62(0xa72)+_0x232d62(0x3b1)+_0x232d62(0xd39)+_0x232d62(0xdbe)+'2px;z'+_0x232d62(0x76c)+'x:214'+'74829'+_0x232d62(0x9d4)+_0x232d62(0xba8)+'point'+_0x232d62(0x9a9)+'er-se'+_0x232d62(0x264)+_0x232d62(0x814)+_0x2f44ee['egsTt']+_0x373f90+';',_0x232d62(0x98b)+_0x232d62(0x774)+_0x232d62(0xa2e)+'99px;'+_0x232d62(0x718)+'ng:4p'+_0x232d62(0x58f)+_0x232d62(0x58e)+'t:11p'+_0x232d62(0x32d)+_0x232d62(0x302)+'onosp'+'ace,C'+_0x232d62(0x54c)+'as,mo'+'nospa'+_0x232d62(0x958)),_0x5e763[_0x232d62(0x7bd)+'onten'+'t']=_0x2f44ee[_0x232d62(0x6cf)],_0x5e763[_0x232d62(0x930)+'ck']=function(){var _0xb6998d=_0x232d62;_0x3ce416[_0xb6998d(0x281)](_0x3988d5,![]),_0x2d0436();},_0x310c80['body']['appen'+'dChil'+'d'](_0x5e763);}}}if(_0x5e6795[_0x232d62(0x841)+'h']){var _0x5caf13=_0x5e5ab3(_0x5e6795);_0x74cd76[_0x45d22b]=_0x5caf13['rows'],_0x2ce3d3[_0x45d22b]={'key':_0x5caf13[_0x232d62(0x5c9)],'sane':_0x5caf13['sane'],'checked':_0x5caf13['check'+'ed'],'keyConsistent':_0x5caf13[_0x232d62(0x97d)+'nsist'+_0x232d62(0x6c9)],'keySource':_0x5caf13['keySo'+'urce']};}}return _0x74cd76;}function _0x5e5ab3(_0x59baab){var _0x144643=_0x3e9452,_0x31f247=0x2b*-0xc1+-0x218c+0x41f7,_0x5e8efe=0x859*0x4+-0x968+-0x17fc,_0xb5ae68=null;for(var _0x5ea574=-0x1199+0x26bd+0x7b*-0x2c;_0x2f44ee[_0x144643(0xd18)](_0x5ea574,_0x59baab[_0x144643(0x841)+'h']);_0x5ea574++){var _0x34f802=_0x59baab[_0x5ea574];if(_0x34f802['k'][_0x144643(0x30c)+'Of']('obf')!==-0x4d7+0x22a3+-0x1dcc)continue;_0x34f802['v']=_0x2f44ee[_0x144643(0xc4e)](_0x420c2f,_0x34f802['k'],_0x34f802[_0x144643(0x657)+'n'],_0x34f802[_0x144643(0x26b)+_0x144643(0x33e)+'t0']),_0x34f802[_0x144643(0xe17)+'ed']=_0x34f802['keyAt'+'Offse'+'t0'],_0x34f802[_0x144643(0x9a5)]=_0x2f44ee['OIWkW'](_0x2f44ee['AMAhm'](_0x2f44ee['BrWfC'](_0x2f44ee[_0x144643(0x88c)](_0x2f44ee[_0x144643(0x23f)](_0x2f44ee['kLUTI']+_0x34f802['hidde'+'n'],_0x144643(0x65c)+'='),_0x34f802[_0x144643(0xa46)]),_0x34f802['act']?_0x144643(0x959)+'VE':''),_0x144643(0xca2))+_0x34f802['keyAt'+_0x144643(0x33e)+'t0'],_0x2f44ee['saXqO'])+_0x34f802['hex'];if(_0xb5ae68===null)_0xb5ae68=_0x34f802[_0x144643(0x26b)+_0x144643(0x33e)+'t0'];_0x5e8efe++;if(_0x475f6f(_0x34f802))_0x2f44ee[_0x144643(0xd03)]===_0x2f44ee['jmvQE']?(_0xa4ba39['cv']['width']=_0x45bcad,_0x45c213['cv'][_0x144643(0x30b)+'t']=_0x493ad3):(_0x31f247++,_0x34f802['sane']=!![]);else{if(_0x144643(0x645)!==_0x2f44ee['afXZZ']){var _0x3816bb=(_0x144643(0xc88)+_0x144643(0x601)+_0x144643(0x6f7))[_0x144643(0x33c)]('|'),_0x19fc9e=0x1*-0x1b49+-0x42d*-0x7+-0x1f2;while(!![]){switch(_0x3816bb[_0x19fc9e++]){case'0':for(var _0x378084=0x169*0xb+0x50d*0x6+-0x25*0x13d;_0x378084<_0x1cbd5e;_0x378084++)_0x4ae538[_0x144643(0x499)](_0x5eaf0c[_0x144643(0xd30)+_0x144643(0x6ae)](_0x2f44ee[_0x144643(0x35c)](_0xc04bd1+_0x50a86d,_0x2f44ee['CSJvG'](_0x378084,-0x2405+0x1*-0x12d5+0x36de)),!![]));continue;case'1':if(_0x2f44ee['GWjfN'](_0x222b77,0x6b0+0x5*0x31d+-0x1641)||_0x2f44ee[_0x144643(0x5b6)](_0xf1ea19+_0x2f44ee[_0x144643(0x93b)](_0x24ef91,0x2681+0xaa*-0x25+-0xdeb*0x1),_0x5eaf0c['byteL'+_0x144643(0xa3b)]))return null;continue;case'2':var _0x5eaf0c=_0x22f1db();continue;case'3':if(!_0x5eaf0c)return null;continue;case'4':return _0x4ae538;case'5':_0x4ba904['ok']+=_0x407aa2;continue;case'6':var _0x4ae538=[];continue;}break;}}else _0x34f802[_0x144643(0x1f1)]=![];}delete _0x34f802[_0x144643(0x423)];}return{'rows':_0x59baab,'key':_0xb5ae68,'sane':_0x31f247,'checked':_0x5e8efe,'keyConsistent':_0x35a198(_0x59baab),'keySource':_0x2f44ee[_0x144643(0x773)]};}function _0x35a198(_0x52edd1){var _0x3f33d4=_0x3e9452;if('lTvuc'!==_0x3f33d4(0x891))_0x355859['canva'+'s']={'w':_0x472ab0&&_0x283fcd['cv']?_0x3b382b['cv']['width']:0x19*0x148+-0x1553+-0xab5,'h':_0x2fde7f&&_0x5f46f3['cv']?_0x120254['cv'][_0x3f33d4(0x30b)+'t']:0x8b*-0x33+-0x14c8+0x3079*0x1,'innerW':_0x197e5c[_0x3f33d4(0x941)+_0x3f33d4(0xc07)],'innerH':_0x1bd8be[_0x3f33d4(0x941)+_0x3f33d4(0x8c2)+'t'],'dpr':_0x123ce3[_0x3f33d4(0x35d)+_0x3f33d4(0x28e)+_0x3f33d4(0xde9)+'o']||-0x1921*-0x1+0x7*0x4f5+-0x3bd3};else{var _0x435380={};for(var _0x428520=-0x6b*-0x50+0x8*0x6e+-0x24e0;_0x2f44ee[_0x3f33d4(0x3be)](_0x428520,_0x52edd1['lengt'+'h']);_0x428520++){var _0x30e050=_0x52edd1[_0x428520];if(_0x2f44ee['ngqZh'](_0x30e050['k']['index'+'Of']('obf'),-0x47*-0xd+0x18da+-0x2f*0x9b))continue;if(_0x435380[_0x30e050['k']]===undefined)_0x435380[_0x30e050['k']]=_0x30e050['keyUs'+'ed'];else{if(_0x2f44ee[_0x3f33d4(0x8f9)](_0x435380[_0x30e050['k']],_0x30e050['keyUs'+'ed']))return![];}}return!![];}}function _0x475f6f(_0x2ff335){var _0x231e58=_0x3e9452,_0x26e489=_0x2ff335['v'];if(typeof _0x26e489!==_0x231e58(0x71a)+'r'||!isFinite(_0x26e489))return![];if(_0x2ff335['k']==='obfB')return _0x26e489===-0xf*-0xa3+-0x423*-0x4+0x83*-0x33||_0x26e489===0x2278*-0x1+0x1a25+0x29*0x34;var _0x23cfd0=_0x2ff335['fake'];if(_0x2f44ee[_0x231e58(0x246)](typeof _0x23cfd0,'numbe'+'r')||!_0x2f44ee['aocsm'](isFinite,_0x23cfd0))return!![];if(_0x2ff335[_0x231e58(0xd65)]===-0x6a*-0x5d+0x655+-0x2cd6)return _0x2f44ee[_0x231e58(0x245)](Math['abs'](_0x2f44ee[_0x231e58(0x352)](_0x26e489,_0x23cfd0)),Math['max'](0x3e5+-0x3f5*0x5+0xfe5,_0x2f44ee['GuqEr'](Math['abs'](_0x23cfd0),-0x25e5*0x1+0x1*0x1e81+-0x1d9*-0x4+0.6)));return _0x2f44ee['PnbdU'](Math['abs'](_0x26e489),-0x202f44a5+0x97*-0x1e8a31+0x1*0x6dcd918c);}function _0x25e222(){var _0x5d8dbc=_0x3e9452,_0xfab3ef={'zDgOe':_0x5d8dbc(0x550)+'e','uzELS':function(_0xe5239a,_0x318441,_0x30cf57,_0x2a9973){return _0xe5239a(_0x318441,_0x30cf57,_0x2a9973);}},_0x485274={};try{if(_0x2f44ee['nkmQh']===_0x5d8dbc(0xba6))try{_0x59b53c['hook']['enabl'+'ed']=![];}catch(_0x2e7cb1){}else{var _0x2f5b4f=_0x2f44ee[_0x5d8dbc(0x4f7)][_0x5d8dbc(0x33c)]('|'),_0x469163=0x6*0x4d2+-0x28d*-0xf+-0x432f;while(!![]){switch(_0x2f5b4f[_0x469163++]){case'0':_0x485274['tag']=_0x543b9a&&_0x543b9a[_0x5d8dbc(0x751)+_0x5d8dbc(0x27f)+'g']||null;continue;case'1':_0x485274[_0x5d8dbc(0xd45)+'meGam'+'e']=_0x543b9a&&_0x543b9a['_game']?typeof _0x543b9a['_game']:_0x5d8dbc(0xa9e);continue;case'2':_0x485274['plugi'+'nRunt'+_0x5d8dbc(0xa9a)+'me']=_0x110b34&&_0x110b34[_0x5d8dbc(0x53b)+'ime']&&_0x110b34['_runt'+'ime']['_game']?typeof _0x110b34[_0x5d8dbc(0x53b)+'ime']['_game']:_0x5d8dbc(0xa9e);continue;case'3':var _0x543b9a=window['Unity'+'WebMo'+'dkit']&&window['Unity'+'WebMo'+'dkit'][_0x5d8dbc(0x7d3)+'me'];continue;case'4':_0x485274[_0x5d8dbc(0xd50)+'nRunt'+_0x5d8dbc(0x72b)+_0x5d8dbc(0x770)+'ted']=!!(_0x110b34&&_0x110b34[_0x5d8dbc(0x53b)+'ime']&&_0x110b34[_0x5d8dbc(0x53b)+_0x5d8dbc(0x8be)]===_0x543b9a);continue;case'5':_0x485274[_0x5d8dbc(0x5ef)+_0x5d8dbc(0x42a)]=!!(_0x543b9a&&_0x3f0918&&_0x2f44ee['fklhq'](_0x543b9a[_0x5d8dbc(0x751)+_0x5d8dbc(0x27f)+'g'],_0x3f0918));continue;}break;}}}catch(_0x489eec){if(_0x2f44ee[_0x5d8dbc(0x38f)]!==_0x5d8dbc(0xd73)){var _0x4a633b=_0x3d495d['hookP'+'refix']({'typeName':_0x3ac989['type'],'methodName':_0xfab3ef[_0x5d8dbc(0x849)],'params':[_0x5d8dbc(0xd08),'i32'],'returnType':_0x5901bb},_0xfab3ef[_0x5d8dbc(0x9f5)](_0x23a9dc,_0x6b2662['type'],_0x5ff3e1['keep'],_0x4f85f2[_0x5d8dbc(0x315)]));_0x34a613[_0x5d8dbc(0x499)]({'type':_0x214a0d[_0x5d8dbc(0xd51)],'hook':_0x4a633b,'keep':_0x2ae661[_0x5d8dbc(0x4c4)]});}else _0x485274[_0x5d8dbc(0x95d)]=_0x2f44ee[_0x5d8dbc(0xb2b)](String,_0x489eec&&_0x489eec[_0x5d8dbc(0x388)+'ge']||_0x489eec);}return _0x485274;}function _0x5f4057(){var _0xebae0d=_0x3e9452,_0x3b31f6={'RmqiD':_0x2f44ee[_0xebae0d(0x7a9)]};if(_0xebae0d(0xaf9)!==_0x2f44ee['fEcuM'])_0x552705['clipb'+_0xebae0d(0xb15)][_0xebae0d(0x549)+'Text'](_0x1dd518)[_0xebae0d(0xbbd)](_0x5821cb,function(){_0x2ccc2c();});else{var _0x503c30=[_0x2f44ee[_0xebae0d(0x62e)],_0x2f44ee[_0xebae0d(0x38c)],'game','unity'+'Insta'+_0xebae0d(0xae6)+_0xebae0d(0x997)],_0x3aa394={};for(var _0x585fcf=-0x1c35+0x647*0x3+0x960;_0x2f44ee[_0xebae0d(0x21c)](_0x585fcf,_0x503c30['lengt'+'h']);_0x585fcf++){var _0xd9577b=_0x503c30[_0x585fcf],_0x52c245=typeof window[_0xd9577b];_0x3aa394[_0xd9577b]=_0x52c245===_0xebae0d(0x802)+'ined'?'undef'+_0xebae0d(0xa69):_0x52c245;}var _0x39e86b=_0x2f44ee[_0xebae0d(0x60f)](_0x138d47);_0x3aa394[_0xebae0d(0xae5)+_0xebae0d(0x586)]=_0x5ae706[_0xebae0d(0x1c4)+'e'];try{_0x3aa394[_0xebae0d(0x2f7)+_0xebae0d(0xdf1)]=!!(_0x39e86b&&_0x39e86b[_0xebae0d(0x288)+'e']),_0x3aa394['heapU'+'8']=!!(_0x39e86b&&_0x39e86b[_0xebae0d(0x288)+'e']&&_0x39e86b['Modul'+'e'][_0xebae0d(0x96d)+'8']),_0x3aa394['heapB'+_0xebae0d(0x405)]=_0x3aa394['heapU'+'8']?_0x39e86b[_0xebae0d(0x288)+'e'][_0xebae0d(0x96d)+'8'][_0xebae0d(0x841)+'h']:0x178*-0x9+0x4e7+-0x851*-0x1;}catch(_0x19d85){if(_0x2f44ee[_0xebae0d(0xd82)](_0x2f44ee['UPtnc'],_0xebae0d(0x41b)))_0x3aa394[_0xebae0d(0x2f7)+_0xebae0d(0xdf1)]=![],_0x3aa394['heapU'+'8']=![],_0x3aa394['heapB'+'ytes']=0x3*0x841+-0x962+-0xf61;else return _0x470f29['faile'+'d']++,_0x24d431[_0xebae0d(0x4d0)+_0xebae0d(0x8aa)]=_0x3e6bdc['lastE'+'rror']||_0x3b31f6[_0xebae0d(0xb0a)],null;}return _0x3aa394['value'+_0xebae0d(0x99c)+'er']=typeof _0x3a3f35,_0x3aa394;}}function _0x256941(){var _0x4c63e9=_0x3e9452,_0x1d8d2d={},_0x5b7e96=_0xf42e2e();if(!_0x5b7e96)return _0x1d8d2d;_0x1d8d2d[_0x4c63e9(0xbae)+'Look@'+'ptr']=_0x5b7e96[_0x4c63e9(0xb90)+_0x4c63e9(0x43f)];for(var _0x348536 in _0x5b7e96['float'+'s'])_0x1d8d2d[_0x4c63e9(0xbae)+'Look+'+_0x348536]=_0x5b7e96[_0x4c63e9(0x5c7)+'s'][_0x348536];if(_0x5b7e96[_0x4c63e9(0x708)+'a'])_0x1d8d2d['Mouse'+_0x4c63e9(0x740)+'camer'+'a']=_0x5b7e96[_0x4c63e9(0x708)+'a'];return _0x1d8d2d;}function _0x4a3db3(_0x50509d){var _0x4a1bc9=_0x3e9452,_0x1e7cac={};for(var _0x5d9ee6 in _0x50509d){var _0x3219c7=_0x50509d[_0x5d9ee6];for(var _0x272f25=-0x1106+0x12d1+-0x1cb*0x1;_0x2f44ee[_0x4a1bc9(0x976)](_0x272f25,_0x3219c7[_0x4a1bc9(0x841)+'h']);_0x272f25++){_0x1e7cac[_0x5d9ee6+_0x2f44ee[_0x4a1bc9(0x607)]+_0x3219c7[_0x272f25]['o'][_0x4a1bc9(0x252)+'ing'](0x1662+-0x1a61+0x40f)]=_0x3219c7[_0x272f25]['v'];}}return _0x1e7cac;}function _0x505ac0(_0x459dec,_0xe19933){var _0xc7f8e4=_0x3e9452;if(_0x2f44ee['Fxmgk'](_0x459dec,_0x2f44ee[_0xc7f8e4(0x5a1)])){_0x462b04(_0xe19933&&typeof _0xe19933['on']===_0xc7f8e4(0x5ac)+'an'?_0xe19933['on']:_0x38d0af['on'],_0xe19933&&typeof _0xe19933['facto'+'r']===_0xc7f8e4(0x71a)+'r'?_0xe19933[_0xc7f8e4(0x2a3)+'r']:_0x38d0af[_0xc7f8e4(0x2a3)+'r']);return;}if(_0x2f44ee[_0xc7f8e4(0xcb4)](_0x459dec,_0xc7f8e4(0x257)+_0xc7f8e4(0xcbd)))return;var _0x152753=_0x29cd8f(),_0x14bc05=_0x4a3db3(_0x152753),_0x47e6f5=_0x256941();for(var _0x124bc5 in _0x47e6f5)_0x14bc05[_0x124bc5]=_0x47e6f5[_0x124bc5];if(!_0x552392){_0x552392=_0x14bc05,_0x113284=[],_0x2f44ee['faTgL'](_0x2fe32f,'repor'+'t',{'report':_0x386ea8()});return;}_0x113284=[];for(var _0x5da63d in _0x14bc05){var _0xa8a5a6=_0x552392[_0x5da63d],_0x5b8a62=_0x14bc05[_0x5da63d];if(_0x2f44ee[_0xc7f8e4(0x382)](_0xa8a5a6,_0x5b8a62))_0x113284['push'](_0x5da63d+':\x20'+_0xa8a5a6+'\x20->\x20'+_0x5b8a62);}_0x552392=_0x14bc05,_0x2f44ee[_0xc7f8e4(0x216)](_0x2fe32f,_0xc7f8e4(0x8b8)+'t',{'report':_0x2f44ee[_0xc7f8e4(0xbb3)](_0x386ea8)});}var _0x127a73=null;function _0x7f5438(){var _0x4f42a7=_0x3e9452,_0x42e9ff={'JrsfX':function(_0x5dffd9,_0x97f83f){return _0x5dffd9+_0x97f83f;},'RQYxY':function(_0x42ffdb,_0x3768af){var _0x47c468=_0x23db;return _0x2f44ee[_0x47c468(0x91f)](_0x42ffdb,_0x3768af);},'KMhLq':function(_0x286ddf,_0x3cd46e,_0xa77e13){var _0x2b69a0=_0x23db;return _0x2f44ee[_0x2b69a0(0xaaa)](_0x286ddf,_0x3cd46e,_0xa77e13);},'ecOMm':_0x4f42a7(0xa58)+_0x4f42a7(0xb02),'cxLLc':function(_0x313855,_0x3a2637){return _0x313855(_0x3a2637);},'znKXV':_0x4f42a7(0xa83),'EGhrk':function(_0x3b963a,_0xaf50ae){return _0x3b963a(_0xaf50ae);},'LJDLk':function(_0x2f5660,_0x52df59){return _0x2f5660!==_0x52df59;},'hvuTN':_0x4f42a7(0x8ea),'cQarc':'none','UWirW':function(_0x2668b5){return _0x2668b5();},'ynrxX':_0x4f42a7(0xcd6),'xDEQs':_0x4f42a7(0xc17)+'a\x20Ski'+'llWar'+'z\x20-\x20w'+_0x4f42a7(0x61c)+_0x4f42a7(0xa36)+'\x20the\x20'+_0x4f42a7(0x6b3)+_0x4f42a7(0x6c8)+_0x4f42a7(0x3c1)};if(_0x127a73)return _0x127a73;try{if(!document[_0x4f42a7(0x99d)]||!document['body']['appen'+'dChil'+'d'])return null;if(!document[_0x4f42a7(0x397)+_0x4f42a7(0x1e1)+_0x4f42a7(0xcd0)](_0x4f42a7(0x9f1)+_0x4f42a7(0xc75)+'hud-c'+'ss')){var _0x2a2481=document[_0x4f42a7(0x97b)+'eElem'+'ent'](_0x2f44ee[_0x4f42a7(0x919)]);_0x2a2481['id']=_0x2f44ee[_0x4f42a7(0x981)],_0x2a2481['textC'+_0x4f42a7(0x284)+'t']=_0x2f44ee[_0x4f42a7(0xbf8)],(document['head']||document[_0x4f42a7(0x358)+_0x4f42a7(0x531)+'ement'])['appen'+_0x4f42a7(0x25d)+'d'](_0x2a2481);}var _0x1ac74c=document['creat'+'eElem'+'ent'](_0x2f44ee[_0x4f42a7(0x81d)]);_0x1ac74c['id']=_0x4f42a7(0x9f1)+_0x4f42a7(0xc75)+'hud',_0x1ac74c['style']['cssTe'+'xt']=_0x2f44ee[_0x4f42a7(0xc95)](_0x2f44ee['fnoQu']+('backg'+_0x4f42a7(0x716)+_0x4f42a7(0x861)+'(21,1'+_0x4f42a7(0x37a)+'.92);'+_0x4f42a7(0x98b)+_0x4f42a7(0x4bd)+'\x20soli'+_0x4f42a7(0x729)+'a(255'+',143,'+_0x4f42a7(0xbf9)+_0x4f42a7(0x3f7)+'order'+_0x4f42a7(0x31e)+'us:10'+_0x4f42a7(0x2a1))+('paddi'+_0x4f42a7(0xacd)+_0x4f42a7(0x509)+_0x4f42a7(0xa94)+_0x4f42a7(0x7af)+_0x4f42a7(0xc8d)+_0x4f42a7(0x302)+_0x4f42a7(0x580)+_0x4f42a7(0xb70)+'onsol'+_0x4f42a7(0xe0d)+_0x4f42a7(0x242)+_0x4f42a7(0xc5d)+'lor:#'+'f7eef'+'5;'),_0x2f44ee['lxTrk']);var _0x5bd5a4=_0x2f44ee[_0x4f42a7(0x469)];_0x1ac74c[_0x4f42a7(0x941)+'HTML']=_0x2f44ee[_0x4f42a7(0x8e5)](_0x2f44ee['CUYEc'](_0x2f44ee[_0x4f42a7(0xd1f)](_0x2f44ee[_0x4f42a7(0x2ba)](_0x2f44ee[_0x4f42a7(0x3dc)](_0x2f44ee[_0x4f42a7(0x670)](_0x2f44ee['NIckn'](_0x2f44ee[_0x4f42a7(0x73e)](_0x2f44ee['UYDRy'](_0x2f44ee[_0x4f42a7(0x926)](_0x2f44ee['YGBDB'](_0x4f42a7(0x283)+'data-'+'a=\x22ba'+'r\x22\x20st'+'yle=\x22'+'displ'+_0x4f42a7(0x3bb)+'ex;ga'+'p:6px'+_0x4f42a7(0x757)+'n-ite'+_0x4f42a7(0x4cb)+_0x4f42a7(0x3ed)+_0x4f42a7(0xa6d)+'wrap:'+_0x4f42a7(0x992)+_0x4f42a7(0x717)+_0x4f42a7(0xa2f)+_0x4f42a7(0x468)+_0x4f42a7(0xda8)+('<b\x20st'+'yle=\x22'+_0x4f42a7(0xe02)+':'),_0x4e9faa)+(_0x4f42a7(0x44f)+_0x4f42a7(0xbba)+'b>'),_0x4f42a7(0x658)+'on\x20da'+_0x4f42a7(0x2fa)+_0x4f42a7(0x6a2)+'style'+_0x4f42a7(0xabb)+_0x4f42a7(0xca1)+'nd:tr'+_0x4f42a7(0x7cb)+'rent;'+'borde'+'r:1px'+'\x20soli'+'d\x20rgb'+_0x4f42a7(0x6d0)+',143,'+'177,.'+_0x4f42a7(0x808)),_0x2f44ee[_0x4f42a7(0x934)])+(_0x4f42a7(0x71d)+_0x4f42a7(0x561)+'a-a=\x22'+'fx\x22\x20t'+_0x4f42a7(0xc99)+_0x4f42a7(0x567)+_0x4f42a7(0xc1a)+_0x4f42a7(0xdef)+_0x4f42a7(0xab4)+_0x4f42a7(0x2cf)+'ep=\x220'+_0x4f42a7(0x77a)+_0x4f42a7(0xd88)+'\x222\x22\x20s'+_0x4f42a7(0xda4)+_0x4f42a7(0x9b2)+_0x4f42a7(0x676)+_0x4f42a7(0x8d0)+_0x4f42a7(0xc4c)+'olor:'),_0x4e9faa),_0x4f42a7(0xda8)),_0x4f42a7(0x566)+'\x20data'+_0x4f42a7(0x229)+'v\x22\x20st'+_0x4f42a7(0x1d3)+'color'+_0x4f42a7(0x2c2)+_0x4f42a7(0x1ec)+_0x4f42a7(0x8ce)+'dth:3'+'0px;\x22'+_0x4f42a7(0x543)+_0x4f42a7(0xc40)+'n>'),_0x4f42a7(0x658)+'on\x20da'+_0x4f42a7(0x2fa)+'\x22esp\x22'+'\x20styl'+_0x4f42a7(0x521)+'ckgro'+'und:t'+'ransp'+'arent'+';bord'+_0x4f42a7(0xcaa)+'x\x20sol'+'id\x20rg'+_0x4f42a7(0xbaa)+_0x4f42a7(0x633)+',177,'+_0x4f42a7(0x52c)),_0x4f42a7(0xe02)+_0x4f42a7(0x788)+'ef5;b'+'order'+_0x4f42a7(0x31e)+_0x4f42a7(0x967)+_0x4f42a7(0xd3e)+_0x4f42a7(0xa11)+'2px\x207'+'px;cu'+'rsor:'+_0x4f42a7(0xada)+'er;fo'+_0x4f42a7(0xb4e)+_0x4f42a7(0x5d6)+';\x22>ES'+_0x4f42a7(0x3d0)+_0x4f42a7(0x957)+_0x4f42a7(0xa42)),'<butt'+_0x4f42a7(0x56f)+_0x4f42a7(0x2fa)+_0x4f42a7(0x325)+_0x4f42a7(0x1f7)+_0x4f42a7(0x411)+_0x4f42a7(0x64b)+_0x4f42a7(0x37d)+_0x4f42a7(0x5e0)+_0x4f42a7(0x6e5)+'t;bor'+'der:1'+_0x4f42a7(0x77f)+_0x4f42a7(0x258)+'gba(2'+'55,14'+_0x4f42a7(0x205)+_0x4f42a7(0xcb3)+';')+(_0x4f42a7(0xe02)+':#f7e'+_0x4f42a7(0x47b)+'order'+_0x4f42a7(0x31e)+_0x4f42a7(0x967)+'x;pad'+_0x4f42a7(0xa11)+_0x4f42a7(0xce6)+_0x4f42a7(0x37b)+'rsor:'+_0x4f42a7(0xada)+'er;fo'+'nt:in'+'herit'+_0x4f42a7(0x3f5)+'ap</b'+_0x4f42a7(0x7ce)+'>')+('<butt'+_0x4f42a7(0x56f)+_0x4f42a7(0x2fa)+_0x4f42a7(0x54d)+_0x4f42a7(0x1f7)+_0x4f42a7(0x34e)+_0x4f42a7(0xd10)+_0x4f42a7(0xcaf)+_0x4f42a7(0xd1b)+_0x4f42a7(0x32a)+_0x4f42a7(0x56e)+'d:tra'+'nspar'+'ent;b'+_0x4f42a7(0x55d)+_0x4f42a7(0x8e0)+_0x4f42a7(0xc8c)+'\x20rgba'+_0x4f42a7(0x886)+_0x4f42a7(0x687)+_0x4f42a7(0x60b)+'5);')+_0x2f44ee[_0x4f42a7(0x2c6)]+('</div'+'>'),_0x2f44ee['eLsUb']),_0x2f44ee[_0x4f42a7(0x469)]),_0x1ac74c[_0x4f42a7(0x941)+_0x4f42a7(0x21e)]=_0x5bd5a4;var _0x4e1c94=function(_0x50a305){var _0x259527=_0x4f42a7,_0x132a89={'qaKqv':function(_0x1ec447,_0x4cc460){var _0xaaa732=_0x23db;return _0x42e9ff[_0xaaa732(0xb78)](_0x1ec447,_0x4cc460);},'Logjh':function(_0x56aa0c,_0x41b132){var _0xfe0563=_0x23db;return _0x42e9ff[_0xfe0563(0x570)](_0x56aa0c,_0x41b132);},'iOnoT':function(_0x4c17a2,_0x4f4dd7,_0xfc259e){var _0x3f9e5c=_0x23db;return _0x42e9ff[_0x3f9e5c(0xb39)](_0x4c17a2,_0x4f4dd7,_0xfc259e);}};if(_0x259527(0x5e5)!=='VGHsT'){_0x56010e[_0x259527(0x8d3)](_0x259527(0x36e)+_0x259527(0x821)+'\x20Skil'+_0x259527(0xacf)+'\x20repo'+'rt',_0x132a89['qaKqv'](_0x259527(0xe02)+':'+_0xf09937,';font'+_0x259527(0x9f8)+'ht:70'+'0'),_0x28d423),_0x1e57f2[_0x259527(0x8d3)](_0x132a89['qaKqv'](_0x132a89[_0x259527(0xa15)](_0x51e02f,'\x0a'),_0x14de85[_0x259527(0x74e)+_0x259527(0x5c0)](_0x1110b2,null,-0x2*0x767+-0x97*-0x1c+-0x1b5))+'\x0a'+_0x8b03c0),_0x3fa187=_0x349a18;try{_0x132a89[_0x259527(0x83c)](_0xe47ace,_0x2b53aa);}catch(_0xdaf353){}_0x132a89[_0x259527(0x96e)](_0x327364,_0x259527(0x8b8)+'t',{'report':_0x29318c});}else return _0x1ac74c[_0x259527(0xa64)+'Selec'+'tor'](_0x42e9ff[_0x259527(0x7ef)]+_0x50a305+'\x22]');},_0x42f82e=_0x2f44ee[_0x4f42a7(0xb2b)](_0x4e1c94,'st'),_0x520ccd=_0x4e1c94(_0x2f44ee[_0x4f42a7(0x88f)]),_0x48dc0a=_0x4e1c94('sp'),_0x53f463=_0x2f44ee[_0x4f42a7(0x917)](_0x4e1c94,'fx'),_0x410c3e=_0x4e1c94('fv'),_0x4787ec=_0x4e1c94(_0x2f44ee['LNuGy']);if(_0x48dc0a)_0x48dc0a[_0x4f42a7(0x930)+'ck']=function(){var _0xdd7f4=_0x4f42a7;_0x2f44ee['jubIE'](_0x462b04,!_0x38d0af['on'],_0x38d0af[_0xdd7f4(0x2a3)+'r']);};if(_0x53f463)_0x53f463[_0x4f42a7(0x74f)+'ut']=function(){var _0x45276c=_0x4f42a7;if(_0x42e9ff['znKXV']!==_0x45276c(0xa83)){_0x42e9ff[_0x45276c(0x2a5)](_0x206817,_0x222234[_0x45276c(0xb23)]);try{var _0xd70eea=_0x726b79['inner'+'Heigh'+'t']||0x1*-0x18aa+-0x1c*0xd+0x1*0x1d36;if(_0xd70eea<0x2650+0x1e5c+-0x4240)_0x494de3(![]);}catch(_0x519660){}}else _0x462b04(_0x38d0af['on'],_0x42e9ff['EGhrk'](parseFloat,_0x53f463[_0x45276c(0x8de)])||0x1784+0x1d8+-0x195b);};if(_0x4e1c94(_0x4f42a7(0xdeb)))_0x2f44ee[_0x4f42a7(0x3a6)](_0x4e1c94,_0x4f42a7(0xdeb))[_0x4f42a7(0x930)+'ck']=function(){var _0x1739d6=_0x4f42a7;_0x505ac0(_0x1739d6(0x257)+_0x1739d6(0xcbd));};var _0x1770fd=_0x4e1c94(_0x4f42a7(0xaa1));if(_0x1770fd)_0x1770fd['oncli'+'ck']=function(){var _0x1a61cd=_0x4f42a7;if(_0x2f44ee['aTKLc'](_0x2f44ee[_0x1a61cd(0x610)],_0x2f44ee[_0x1a61cd(0xcf9)])){if(!_0x2cdf6d['on'])_0x43d617(!![],![]);else{if(_0x2cdf6d['boxes'])_0x43d617(![],![]);else{if(_0x2f44ee['OBOAn'](_0x5497ad))_0x2f44ee[_0x1a61cd(0x9a6)](_0x43d617,!![],!![]);else _0x43d617(![],![]);}}}else try{_0x347ec5(_0x59134a);}catch(_0x14cc06){}};if(_0x2f44ee['RgXOL'](_0x4e1c94,_0x2f44ee['xzvng']))_0x4e1c94('fold')[_0x4f42a7(0x930)+'ck']=function(){var _0x3a9027=_0x4f42a7;if(_0x42e9ff['LJDLk'](_0x3a9027(0x8ea),_0x42e9ff['hvuTN']))try{return _0x4fdaba&&_0x1ed4cb['buffe'+'r']?_0x3c7f3a[_0x3a9027(0x3b4)+'r'][_0x3a9027(0xc1b)+'ength']:-0x7*-0x4ba+0x1*0x88d+-0x29a3;}catch(_0x156e85){return 0x15a9*0x1+-0x1b57*0x1+0x1*0x5ae;}else{if(!_0x4787ec)return;var _0x3c0a69=_0x4787ec['style']['displ'+'ay']===_0x42e9ff[_0x3a9027(0x1f2)];_0x4787ec[_0x3a9027(0x995)]['displ'+'ay']=_0x3c0a69?'':_0x42e9ff['cQarc'],_0x4e1c94(_0x3a9027(0xbcb))[_0x3a9027(0x7bd)+'onten'+'t']=_0x3c0a69?'-':'+';}};return document[_0x4f42a7(0x99d)][_0x4f42a7(0x3d7)+'dChil'+'d'](_0x1ac74c),_0x127a73={'el':_0x1ac74c,'st':_0x42f82e,'st2':_0x520ccd,'sp':_0x48dc0a,'fx':_0x53f463,'fv':_0x410c3e,'esp':_0x1770fd},_0x127a73;}catch(_0x29285e){if(_0x2f44ee[_0x4f42a7(0xdc7)]('kbjan',_0x2f44ee[_0x4f42a7(0x9fe)]))return console[_0x4f42a7(0x8c0)](_0x2f44ee[_0x4f42a7(0x872)],_0x2f44ee[_0x4f42a7(0x4df)]+_0x4e9faa,_0x29285e),null;else try{if(!_0x3a4b27['petal'])return;var _0x37ebb6=_0x42e9ff[_0x4f42a7(0xb3d)](_0x2ef70b);_0x4e4483['petal']['style']['opaci'+'ty']=_0x5f451c[_0x4f42a7(0x663)]?'1':_0x37ebb6?'.8':_0x42e9ff[_0x4f42a7(0xba7)],_0x3711e2['petal'][_0x4f42a7(0x5da)]=_0x37ebb6?_0x4f42a7(0xc17)+'a\x20Ski'+'llWar'+'z\x20(In'+_0x4f42a7(0x836):_0x42e9ff['xDEQs'];}catch(_0x32e347){}}}function _0x5497ad(){var _0x3cbd8e=_0x3e9452,_0x2322df={'pnMic':_0x3cbd8e(0x661)+_0x3cbd8e(0x32f),'iGUOH':_0x2f44ee['SkwHl'],'yHuSo':'Speed'+'\x20off','nFGSa':function(_0x3511a4,_0x592844){var _0x29f04a=_0x3cbd8e;return _0x2f44ee[_0x29f04a(0x75e)](_0x3511a4,_0x592844);},'mVgTB':function(_0x21edef,_0x36decd){return _0x21edef(_0x36decd);}};try{var _0x4ab774=_0x2ed0b8();if(_0x4ab774[_0x3cbd8e(0xa52)])return!![];var _0x1fcb34=_0x2f44ee[_0x3cbd8e(0x8df)](_0x2df9e2);return!!(_0x1fcb34&&_0x2a0c8a[_0x3cbd8e(0x553)+'ified']);}catch(_0x188cce){if(_0x2f44ee[_0x3cbd8e(0x987)]==='gfiUV'){var _0x37b6da=_0x2322df['pnMic'][_0x3cbd8e(0x33c)]('|'),_0x2e5d65=0x23c7+-0x1*0x1c4f+-0x1*0x778;while(!![]){switch(_0x37b6da[_0x2e5d65++]){case'0':_0x2b077e['style']['color']=_0x243241?_0x2322df['iGUOH']:'#f7ee'+'f5';continue;case'1':_0x266416[_0x3cbd8e(0x7bd)+_0x3cbd8e(0x284)+'t']=_0x165732?_0x3cbd8e(0x3cd)+_0x3cbd8e(0x7fa):_0x2322df['yHuSo'];continue;case'2':_0x1f5e12['style'][_0x3cbd8e(0x4be)+_0x3cbd8e(0x716)]=_0x52a599?_0x4d3767:_0x3cbd8e(0x5e0)+_0x3cbd8e(0x6e5)+'t';continue;case'3':_0x512372&&_0x27f3ca['speed']['facto'+'r']&&(_0x350936[_0x3cbd8e(0x7bd)+_0x3cbd8e(0x284)+'t']=_0x2322df[_0x3cbd8e(0xcc5)](_0x2322df[_0x3cbd8e(0x963)](_0x513f74,_0x34a0d9[_0x3cbd8e(0x34a)][_0x3cbd8e(0x2a3)+'r'])[_0x3cbd8e(0x2d8)+'ed'](0x1*0x1451+-0xd31+-0x71f*0x1),'x'));continue;case'4':_0x85de08=!!_0x591088['speed']['on'];continue;}break;}}else return![];}}function _0x4da83b(){var _0xc1061=_0x3e9452;if(_0x2f44ee[_0xc1061(0x382)](_0xc1061(0x5b5),_0xc1061(0x5b5)))return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x5a309e,'ambiguous':![],'reach':0x0,'held':![]};else try{var _0x414839=(_0xc1061(0x60c)+_0xc1061(0x31d)+'3|2')[_0xc1061(0x33c)]('|'),_0xb60e97=0x1*-0x7cd+-0x1017+-0x17e4*-0x1;while(!![]){switch(_0x414839[_0xb60e97++]){case'0':if(_0x2cdf6d[_0xc1061(0x760)]&&!_0x5497ad())_0x2cdf6d[_0xc1061(0x760)]=![];continue;case'1':var _0x4c50fd=!_0x2cdf6d['on']?_0x2f44ee[_0xc1061(0xcbb)]:_0x2cdf6d[_0xc1061(0x760)]?_0x2f44ee[_0xc1061(0xdbd)]:_0x2f44ee['NlRrq'];continue;case'2':_0x272ecd[_0xc1061(0x995)]['color']=_0x2cdf6d['on']?_0x2f44ee['SkwHl']:_0xc1061(0xaad)+'f5';continue;case'3':_0x272ecd[_0xc1061(0x995)][_0xc1061(0x4be)+'round']=_0x2cdf6d['on']?_0x4e9faa:_0x2f44ee['Fiutx'];continue;case'4':if(_0x4c50fd!==_0x272ecd[_0xc1061(0x7bd)+'onten'+'t'])_0x272ecd['textC'+'onten'+'t']=_0x4c50fd;continue;case'5':var _0x272ecd=_0x127a73&&_0x127a73[_0xc1061(0xaa1)];continue;case'6':if(!_0x272ecd)return;continue;}break;}}catch(_0x31674f){}}function _0x43d617(_0x474979,_0xf7d62e){var _0x54be9a=_0x3e9452;_0x2cdf6d['on']=!!_0x474979,_0x2cdf6d[_0x54be9a(0x760)]=!!_0xf7d62e,_0x2f44ee[_0x54be9a(0xaf5)](_0x4da83b);try{var _0x393655=_0x2f44ee['BtRFd'](_0x2af768);if(_0x393655&&_0x393655['el'])_0x393655['el'][_0x54be9a(0x995)][_0x54be9a(0x317)+'ay']=_0x2cdf6d['on']?'':'none';var _0xfb76c4=_0x15a2bb;if(_0xfb76c4&&_0xfb76c4['cv'])_0xfb76c4['cv']['style']['displ'+'ay']=_0x2cdf6d['on']&&_0x2cdf6d[_0x54be9a(0x760)]?'':_0x2f44ee['KbfbY'];}catch(_0x281d0c){}}var _0x38d271=-0xf8a+-0x175f+0x26eb;function _0x462b04(_0x443c8e,_0x5d5c57){var _0x1b939a=_0x3e9452,_0x1b879f={'rCYoS':function(_0x577cb,_0x4fa8bf){var _0x5ad9b1=_0x23db;return _0x2f44ee[_0x5ad9b1(0x9f7)](_0x577cb,_0x4fa8bf);},'hiNny':function(_0x32e765,_0x21f35a){return _0x2f44ee['xsmnm'](_0x32e765,_0x21f35a);},'rzwDv':function(_0x37f9aa,_0x4040d2){return _0x37f9aa>_0x4040d2;},'ihyLp':function(_0x10fc9d,_0x20aecc){var _0x25085c=_0x23db;return _0x2f44ee[_0x25085c(0x1f5)](_0x10fc9d,_0x20aecc);}};if(_0x2f44ee['raPWj']===_0x1b939a(0x3a9)){var _0xad6a79=_0x2d5232[_0x3f2d66][_0x1b939a(0x252)+_0x1b939a(0x74d)](-0x372+0x1d3a+0xcdc*-0x2);_0x32b9a7+=(_0xad6a79['lengt'+'h']<-0x2274+0x1062+0x1214?'0':'')+_0xad6a79;}else{var _0x59b52a=_0x38d0af['on'];_0x38d0af['on']=!!_0x443c8e;_0x38d0af['on']&&!_0x59b52a&&(_0x2f44ee[_0x1b939a(0x2e5)](_0x5d5c57,undefined)||_0x5d5c57===null||Number(_0x5d5c57)===-0x1*-0xf95+0x581*0x2+-0x29*0xa6)&&(_0x5d5c57=_0x38d271);_0x38d0af['facto'+'r']=Math['min'](_0x38d0af[_0x1b939a(0x57a)],Math[_0x1b939a(0x57a)](_0x38d0af[_0x1b939a(0x274)],Number(_0x5d5c57)||0x70*0x2d+0x1*0x71f+-0x1ace));if(!_0x38d0af['on'])_0x1ce0bb={};var _0x2b26b4=_0x7f5438();if(_0x2b26b4){if(_0x2b26b4['sp']){if('WrlfK'===_0x2f44ee[_0x1b939a(0xa85)]){var _0x4ed608=_0x3b459b['c'][_0x1cbebc]['v'],_0x2fb818=_0x340228['sqrt'](_0x1b879f['rCYoS'](_0x1b879f[_0x1b939a(0x3ef)](_0x4ed608[-0x6f*0x3d+0x1daa+0x337*-0x1],_0x4ed608[-0xe75+0x125f*0x2+0x23*-0xa3]),_0x4ed608[-0x1102+0x251d+-0x93*0x23]*_0x4ed608[-0x97*0x35+0x2163*0x1+-0x2*0x10f]));(_0x1b879f['rzwDv'](_0x2fb818,_0xf5b65a)||_0x1b879f[_0x1b939a(0xd68)](_0x2fb818,_0x2a95a7)&&_0x4ed608[-0x3a8+0x2399+-0x1ff0]<_0xbcc81e['v'][0xc74*-0x1+0x98*-0x6+0x3*0x557])&&(_0x4f2bfa=_0x2fb818,_0x20df91=_0x30531b['c'][_0x352f94]);}else _0x2b26b4['sp'][_0x1b939a(0x7bd)+_0x1b939a(0x284)+'t']=_0x38d0af['on']?_0x1b939a(0x3cd)+'\x20ON':_0x2f44ee[_0x1b939a(0x8ae)],_0x2b26b4['sp'][_0x1b939a(0x995)][_0x1b939a(0x4be)+_0x1b939a(0x716)]=_0x38d0af['on']?_0x4e9faa:_0x2f44ee[_0x1b939a(0x6a0)],_0x2b26b4['sp'][_0x1b939a(0x995)][_0x1b939a(0xe02)]=_0x38d0af['on']?_0x1b939a(0x9de)+'1b':_0x2f44ee[_0x1b939a(0xcfd)];}if(_0x2b26b4['fx'])_0x2b26b4['fx']['value']=String(_0x38d0af['facto'+'r']);if(_0x2b26b4['fv'])_0x2b26b4['fv']['textC'+'onten'+'t']=_0x38d0af[_0x1b939a(0x2a3)+'r']['toFix'+'ed'](0x244d*-0x1+0x1312+0x4*0x44f)+'x';}}}function _0x12087b(_0x167ea3){var _0x3f79e4=_0x3e9452,_0x65fc7e={'oMxlB':function(_0x2d06f8,_0x43940d){var _0x5e4bd3=_0x23db;return _0x2f44ee[_0x5e4bd3(0xb2b)](_0x2d06f8,_0x43940d);},'jaMxq':function(_0x47abfa,_0x436353){return _0x47abfa(_0x436353);}},_0x12c96c=_0x2f44ee[_0x3f79e4(0x60f)](_0x7f5438);if(!_0x12c96c||!_0x12c96c['st'])return;try{if(_0x2f44ee[_0x3f79e4(0x330)]===_0x2f44ee['dsplV'])return{'err':_0x65fc7e['oMxlB'](_0x84ad89,_0x45ce95&&_0x4cfb35[_0x3f79e4(0x388)+'ge']),'stack':_0x65fc7e[_0x3f79e4(0xa43)](_0x3e07d3,_0x4eaebe&&_0x3509ed[_0x3f79e4(0xd0f)])};else{if(!_0x389461()&&!_0x3ab911){if(_0x12c96c['el'])_0x12c96c['el']['style'][_0x3f79e4(0x317)+'ay']='none';return;}if(_0x12c96c['el'])_0x12c96c['el'][_0x3f79e4(0x995)][_0x3f79e4(0x317)+'ay']='';var _0x1e6c6d=Object[_0x3f79e4(0x5ea)](_0x167ea3&&_0x167ea3[_0x3f79e4(0xd84)+_0x3f79e4(0xd7a)]||{})[_0x3f79e4(0x841)+'h'],_0x15b5a0=_0x167ea3&&_0x167ea3[_0x3f79e4(0xaa1)]||null,_0xa66651=_0x15b5a0?_0x15b5a0['enemy'+'Count']||-0x23f3+0x70b*-0x5+0x472a:0x1*0x2ab+0x6ef*-0x1+-0x7*-0x9c,_0x9c3360=_0x15b5a0?_0x15b5a0['botCo'+_0x3f79e4(0x398)]||0xf91+-0xa12+-0x57f:0x169*0x8+0x26ff+-0x3d*0xd3,_0x402d1a=_0x4b3cf7?_0x2f44ee['AMAhm']((_0x4b3cf7[_0x3f79e4(0x3b4)+'r'][_0x3f79e4(0xc1b)+_0x3f79e4(0xa3b)]/(0x1698fc+0x65e82+-0x297e6*0x5))[_0x3f79e4(0x2d8)+'ed'](-0x5*-0x636+-0x8d9*-0x3+-0x3999),'MB'):_0x2f44ee['umoAc'],_0x4cf633=_0x2f44ee['sgHEi'](_0x2f44ee['IyAUP'](_0x2f44ee['IBxXs'](_0x2f44ee[_0x3f79e4(0x87c)](_0x2f44ee[_0x3f79e4(0xb2d)](_0x2f44ee[_0x3f79e4(0x9e6)](_0x2f44ee['zYeNr']('v'+(_0x167ea3&&_0x167ea3['versi'+'on']||_0x396453),_0x3f79e4(0xcbf)+'ks\x20'),_0x167ea3&&_0x167ea3[_0x3f79e4(0x9e4)+'Appli'+'ed']||0x18c0+-0x13be+-0x502)+'/'+(_0x167ea3&&_0x167ea3[_0x3f79e4(0x9e4)+_0x3f79e4(0xde0)]||-0xd*0x2fd+0x189c+0xe3d)+('\x20\x20obj'+'s\x20'),_0x1e6c6d),'\x20\x20mem'+'\x20'),_0x402d1a),_0x3f79e4(0xd11)+'tes\x20'),_0x4f6629);_0x12c96c['st'][_0x3f79e4(0x7bd)+_0x3f79e4(0x284)+'t']=_0x4cf633;var _0x3cfc0f=_0x12c96c[_0x3f79e4(0xc1f)];if(_0x3cfc0f){if(_0x2f44ee[_0x3f79e4(0xe14)](_0x3f79e4(0x6a1),'VKWUb')){var _0x15cb7b={'ywhgB':function(_0x816ecc,_0x447e99){var _0x3dddee=_0x3f79e4;return _0x65fc7e[_0x3dddee(0x805)](_0x816ecc,_0x447e99);}};_0xd194e1['oncli'+'ck']=function(){var _0x29aeb0=_0x3f79e4;_0x15cb7b[_0x29aeb0(0x2c4)](_0x4909de,_0x2742cb);};}else _0x3cfc0f['textC'+_0x3f79e4(0x284)+'t']=_0xa66651>-0x1281+-0x424+-0x1f*-0xbb?_0x2f44ee['Ipoqy'](_0x2f44ee[_0x3f79e4(0x460)](_0x2f44ee['JjKKr']+_0xa66651,_0x9c3360?'\x20+\x20'+_0x9c3360+'\x20bots':''),_0x15b5a0&&_0x15b5a0[_0x3f79e4(0x708)+'a']?_0x2f44ee[_0x3f79e4(0x2c3)]+_0x15b5a0['camer'+_0x3f79e4(0x807)]:_0x2f44ee[_0x3f79e4(0x8f7)]):'no\x20en'+_0x3f79e4(0x6e2)+_0x3f79e4(0x782)+_0x3f79e4(0xc37)+_0x3f79e4(0x911)+_0x3f79e4(0x832)+(_0x15b5a0&&_0x15b5a0['camer'+'a']?_0x15b5a0[_0x3f79e4(0x708)+_0x3f79e4(0x807)]:'-'),_0x3cfc0f['style']['color']=_0xa66651>0x1b99+-0x20a1*0x1+-0x17*-0x38?'#7ee0'+'a8':_0x3f79e4(0x87b)+'99';}}}catch(_0xffe45c){}}window['addEv'+_0x3e9452(0x9ee)+'stene'+'r'](_0x3e9452(0x5b7)+'wn',function(_0x46bf70){var _0x347290=_0x3e9452;if(!_0x46bf70)return;try{if(_0x2f44ee['Dsyxb'](_0x46bf70[_0x347290(0x5b9)],'F9')){_0x46bf70['preve'+_0x347290(0x335)+_0x347290(0x6ec)](),_0x505ac0(_0x347290(0x257)+'hot');return;}if(_0x2f44ee['mmViz'](_0x46bf70[_0x347290(0x5b9)],'F7')){_0x46bf70[_0x347290(0xa21)+_0x347290(0x335)+'ault'](),_0x2f44ee[_0x347290(0x4b1)](_0x462b04,!_0x38d0af['on'],_0x38d0af['facto'+'r']);return;}if(_0x2f44ee[_0x347290(0x456)](_0x46bf70['code'],'F8')){_0x46bf70[_0x347290(0xa21)+_0x347290(0x335)+_0x347290(0x6ec)](),_0x462b04(_0x38d0af['on'],_0x2f44ee[_0x347290(0xbdf)](_0x38d0af['facto'+'r'],-0x1*-0x2309+0x1a6a+0x3d73*-0x1+0.5));return;}if(_0x46bf70[_0x347290(0x5b9)]==='F6'){if('XGZaU'==='XGZaU'){_0x46bf70['preve'+_0x347290(0x335)+_0x347290(0x6ec)](),_0x462b04(_0x38d0af['on'],_0x38d0af[_0x347290(0x2a3)+'r']-(-0x1ae7+0x4c7*0x2+-0x1*-0x1159+0.5));return;}else{var _0x32800d=_0x2f44ee[_0x347290(0x270)](_0x4c3502),_0x561661=null,_0x130749=_0x1c9a48,_0x21208f=_0x5ad17e[_0x347290(0x7e7)];if(_0x32800d['basis']){_0x561661=_0x32800d[_0x347290(0xa52)];if(_0x32800d['pos'])_0x130749=_0x32800d[_0x347290(0xc63)];if(_0x32800d[_0x347290(0x7e7)]!==null)_0x21208f=_0x32800d[_0x347290(0x7e7)];}var _0x223b48,_0x44d533,_0x2d84b0,_0x1e633f,_0x28890e,_0x56da5c,_0x1a8960,_0x47bd3e,_0x25306a;if(_0x561661)_0x223b48=_0x561661[_0x347290(0xc5b)][0x20d5+-0x36d*-0x3+-0x2b1c],_0x44d533=_0x561661['fwd'][0x1169+-0x1*0x2038+-0xc*-0x13c],_0x2d84b0=_0x561661[_0x347290(0xc5b)][-0x130a+0x2*-0x89f+0x244a],_0x1e633f=_0x561661[_0x347290(0x9ff)][-0x3f*-0xe+0x1*-0x14b7+0x1145],_0x28890e=_0x561661[_0x347290(0x9ff)][0x6*-0x66a+0x1*-0x1297+0xe45*0x4],_0x56da5c=_0x561661[_0x347290(0x9ff)][0x49*-0x15+-0x2*0x815+0x1629],_0x1a8960=_0x561661['up'][-0x3af+0x1*-0x11d6+0x1585],_0x47bd3e=_0x561661['up'][0x1ad3+0x1cd1+0x37a3*-0x1],_0x25306a=_0x561661['up'][0xb8d+-0x120a*-0x1+-0x1d95];else{var _0x15ccb2=_0x31eb34();if(!_0x15ccb2)return null;var _0x5e24d8=_0x2f44ee['xsmnm'](_0x15ccb2['pitch'],_0x5dd469['PI'])/(0x1274+0x1*-0x14f3+-0x1*-0x333),_0x43365e=_0x15ccb2[_0x347290(0x5d2)]*_0x5d0d9e['PI']/(0xe19+0x2*-0xd85+-0x1*-0xda5),_0xa86fab=_0x34dac2[_0x347290(0xa3f)](_0x5e24d8);_0x223b48=_0x2f44ee[_0x347290(0x6aa)](_0x499c73['sin'](_0x43365e),_0xa86fab),_0x44d533=-_0x218887['sin'](_0x5e24d8),_0x2d84b0=_0x13e500[_0x347290(0xa3f)](_0x43365e)*_0xa86fab,_0x1e633f=_0x2d84b0,_0x28890e=0x13c3*-0x1+0x7d*0x19+0x1*0x78e,_0x56da5c=-_0x223b48,_0x1a8960=_0x44d533*_0x56da5c-_0x2d84b0*_0x28890e,_0x47bd3e=_0x2f44ee[_0x347290(0x9e2)](_0x2d84b0*_0x1e633f,_0x223b48*_0x56da5c),_0x25306a=_0x2f44ee['acmgF'](_0x223b48,_0x28890e)-_0x44d533*_0x1e633f;}var _0x408bd0=_0x74563d[-0x7c*-0x7+-0x14ed*-0x1+-0x4b*0x53]-_0x130749[0x14c2+0x14a2+-0x2964],_0x22204f=_0xf9cb34[0x2346+0x1a9c+0x1f*-0x1ff]-_0x130749[0x1655+-0x165+-0x1*0x14ef],_0x4cdaee=_0x50e998[-0x2447+0x1c7f*0x1+0x7ca]-_0x130749[-0x1a33+0x1*-0x2452+-0x1*-0x3e87],_0x470ea1=_0x2f44ee[_0x347290(0x4a1)](_0x408bd0*_0x223b48+_0x2f44ee['Rguwb'](_0x22204f,_0x44d533),_0x4cdaee*_0x2d84b0);if(_0x2f44ee[_0x347290(0x245)](_0x470ea1,0x114+0x104b+-0x115f+0.05))return null;var _0x3b162d=_0x2f44ee[_0x347290(0xc95)](_0x2f44ee[_0x347290(0x93b)](_0x408bd0,_0x1e633f)+_0x2f44ee['ttYvt'](_0x22204f,_0x28890e),_0x4cdaee*_0x56da5c),_0x2a71ab=_0x2f44ee['OgUQO'](_0x2f44ee[_0x347290(0xabd)](_0x408bd0*_0x1a8960,_0x22204f*_0x47bd3e),_0x4cdaee*_0x25306a),_0xdb29d7=_0x6a0eea/_0x1e287c,_0x762963=_0x21208f*_0x14ad74['PI']/(-0x18f3+0x480+0x70d*0x3),_0x2c5868=_0x187eaa[_0x347290(0xc69)](_0x2f44ee[_0x347290(0x672)](_0x762963,-0x1074+-0x2*-0x48c+-0x17*-0x52)),_0x4e8228=_0x2f44ee['eZIPs'](_0x2f44ee['oGhnH'](_0x3b162d,_0x470ea1),_0x2c5868*_0xdb29d7),_0x21ef69=_0x2f44ee['JsIMQ'](_0x2a71ab/_0x470ea1,_0x2c5868);if(_0x4e8228<-(0x1d*0xd7+0xfe*0x2+-0x1a56+0.6000000000000001)||_0x2f44ee[_0x347290(0x8ef)](_0x4e8228,-0x5a3+-0x10b*0x6+-0x1*-0xbe6+0.6000000000000001)||_0x2f44ee['wnzUc'](_0x21ef69,-(-0x1*0x1f73+-0x157*0xb+0x1*0x2e31+0.6000000000000001))||_0x21ef69>-0x531+-0x78b+0x1*0xcbd+0.6000000000000001)return null;return{'x':_0x2f44ee[_0x347290(0x8e5)](_0x4e8228*(-0x20cd+0x5e*-0x1b+0x2ab7*0x1+0.5),-0x1491+0x107*0x10+-0x421*-0x1+0.5)*_0x9b7744,'y':_0x2f44ee['GuqEr'](_0x2f44ee['pgVWA'](-0x5a*-0x4a+0x1579+0x2f7d*-0x1+0.5,_0x2f44ee[_0x347290(0xe11)](_0x21ef69,-0x160+-0x5*0x6f9+0x243d+0.5)),_0x5293cf),'z':_0x470ea1};}}if(_0x2f44ee['iRguD'](_0x46bf70['code'],'Inser'+'t')){_0x46bf70[_0x347290(0xa21)+_0x347290(0x335)+'ault'](),_0x356659(!_0x490e1c[_0x347290(0x663)]);return;}if(_0x2f44ee[_0x347290(0x726)](_0x46bf70[_0x347290(0x5b9)],_0x347290(0x9e0)+_0x347290(0xce4)+'ht')){_0x46bf70[_0x347290(0xa21)+'ntDef'+_0x347290(0x6ec)](),_0xd4762b['fov']=Math[_0x347290(0x274)](0x1db3+0x1*0x197+-0xa*0x313,_0x2f44ee[_0x347290(0x3a4)](_0xd4762b[_0x347290(0x7e7)],-0xe76+-0x4*-0x45a+-0x2f0)),_0x2f44ee['MTaEi'](_0x51a57c);return;}if(_0x2f44ee[_0x347290(0x39e)](_0x46bf70[_0x347290(0x5b9)],_0x2f44ee['uhlCO'])){_0x46bf70[_0x347290(0xa21)+_0x347290(0x335)+_0x347290(0x6ec)](),_0xd4762b[_0x347290(0x7e7)]=Math[_0x347290(0x57a)](-0xa62+-0x3*0xb95+0x37b*0xd,_0x2f44ee['MUNPS'](_0xd4762b[_0x347290(0x7e7)],-0x47*0x7f+-0x4fc*0x1+-0x91*-0x47)),_0x2f44ee[_0x347290(0x7bc)](_0x51a57c);return;}}catch(_0x4178e1){}},!![]);var _0x2cdf6d={'on':!![],'span':0x50,'boxes':![]};function _0xf42e2e(){var _0x5daeec=_0x3e9452,_0x396ed7=_0x510560[_0x5daeec(0xc43)+'nNetw'+_0x5daeec(0x4b0)+'nc']||{},_0x473c17=Object[_0x5daeec(0x5ea)](_0x396ed7);for(var _0x3625c8=-0xed9+0xc74+0x265*0x1;_0x3625c8<_0x473c17[_0x5daeec(0x841)+'h'];_0x3625c8++){if(_0x2f44ee[_0x5daeec(0x879)]==='VFBde')_0x1c33df[_0x5daeec(0x3ae)]=_0xc25ecd[0x4c6*0x1+-0x126a*-0x2+-0x2998]['val'](),_0x179202[_0x5daeec(0x443)+'its']++;else{var _0x2b5428=_0x396ed7[_0x473c17[_0x3625c8]][_0x5daeec(0x87e)],_0x19f121=_0x2f44ee['TRfsg'](_0x183d83,_0x2b5428+(0x3*-0x542+0x1*-0x24cd+0x40f*0xd),_0x5daeec(0x8a0));if(!_0x19f121)continue;var _0xe79f26=_0x1e4c5['Mouse'+'Look']||[],_0x221c3f={'mouseLook':_0x2f44ee['xiMQH']('0x',(_0x19f121>>>0x2*0x1a3+0x4*0x8e+-0x25*0x26)['toStr'+'ing'](0x11c0+-0x15b2+-0x1*-0x402)),'floats':{},'camera':null,'vec2':null};for(var _0xb8af6=0x65*-0x20+-0x5*0x40b+0x20d7*0x1;_0x2f44ee[_0x5daeec(0x321)](_0xb8af6,_0xe79f26['lengt'+'h']);_0xb8af6++){if(_0xe79f26[_0xb8af6][0xbf*0x1c+0x7a8+0x1c8b*-0x1]!==_0x2f44ee['dpHEx'])continue;_0x221c3f[_0x5daeec(0x5c7)+'s']['0x'+_0xe79f26[_0xb8af6][-0xbfd*-0x2+-0x5ef*-0x2+-0x23d8][_0x5daeec(0x252)+'ing'](-0x155c+0x15e6+-0x7a)]=_0x183d83(_0x2f44ee[_0x5daeec(0x9f7)](_0x19f121,_0xe79f26[_0xb8af6][0x1*0x1def+-0x8c*-0x1d+0x269*-0x13]),_0x2f44ee[_0x5daeec(0x735)]);}var _0x29da0e=_0x183d83(_0x2f44ee['NIckn'](_0x19f121,-0x1861+0x4*0x6c8+-0x293),_0x5daeec(0x8a0));if(_0x29da0e)_0x221c3f[_0x5daeec(0x708)+'a']=_0x2f44ee[_0x5daeec(0x866)]('0x',_0x2f44ee[_0x5daeec(0x8f8)](_0x29da0e,0xbca+0x2111+-0x2cdb)['toStr'+'ing'](0xbb+-0x610*0x4+0x1795));var _0x4b9156=_0x27879f(_0x19f121,0x17*-0x7c+0xcf*-0x2+0x1*0xd0a,-0x563+-0x617*-0x4+-0x12f7);if(_0x4b9156)_0x221c3f['vec2']=_0x4b9156;return _0x221c3f;}}return null;}var _0x4bc5f3=_0x3e9452(0x9f1)+'a-sw-'+_0x3e9452(0x7e7),_0xd4762b={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x32aad9=localStorage['getIt'+'em'](_0x4bc5f3);if(_0x32aad9)_0xd4762b[_0x3e9452(0x7e7)]=Math[_0x3e9452(0x274)](-0x5*-0x216+-0x2529+-0x1*-0x1b47,Math[_0x3e9452(0x57a)](-0x3a*-0x97+0x1241+-0x3459,parseFloat(_0x32aad9)||0xdb5+0xdc9+-0x1b24));}catch(_0x5e494c){}function _0x51a57c(){var _0x31efaf=_0x3e9452;try{localStorage['setIt'+'em'](_0x4bc5f3,_0x2f44ee[_0x31efaf(0x28a)](String,_0xd4762b['fov']));}catch(_0x596bd0){}}var _0x22f60b=_0x2f44ee[_0x3e9452(0x9fc)],_0x4d364b=![];try{localStorage['getIt'+'em'](_0x22f60b)!==null&&(localStorage['remov'+_0x3e9452(0x627)](_0x22f60b),_0x4d364b=!![]);}catch(_0x3daa90){}var _0x1ccd87=0x12e6+0x1027+-0x1*0x22e5,_0x7b82af=-0x25*-0xf8+0xdd+-0x2499,_0x1ccd87=-0x19b0+-0x36+0x1a0e,_0x7b82af=0xe6e+0x1ad+0x13b*-0xd,_0x534e9f=0x24ad+-0xdb*-0x16+0x3*-0x1271,_0x11b4dd={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0x2e8be7(_0x243bb9){var _0x5286be=_0x3e9452;if(_0x243bb9===undefined||_0x243bb9===null)return undefined;if(_0x2f44ee['nOnWT'](typeof _0x243bb9[_0x5286be(0xdba)],_0x5286be(0xb3f)+'ion'))try{return _0x243bb9[_0x5286be(0xdba)]();}catch(_0x1d598d){}if(typeof _0x243bb9===_0x2f44ee[_0x5286be(0x1b9)])return undefined;return _0x243bb9;}function _0x35183f(_0x1506eb,_0x1e0c36,_0xeb3338){var _0x340884=_0x3e9452,_0x55a7e9={'IWAtD':function(_0x1c8fd4,_0x1c42b8){return _0x1c8fd4+_0x1c42b8;},'quUlT':function(_0x435755,_0xb90a21,_0x166466){return _0x2f44ee['YwumT'](_0x435755,_0xb90a21,_0x166466);}};try{var _0x96ee9a=window[_0x340884(0xa07)+_0x340884(0xa16)+_0x340884(0x9e1)]&&window[_0x340884(0xa07)+_0x340884(0xa16)+_0x340884(0x9e1)][_0x340884(0x7d3)+'me'],_0x12310b=_0x110b34||_0x96ee9a&&_0x96ee9a['plugi'+'ns']&&_0x96ee9a[_0x340884(0xd50)+'ns'][_0x2f44ee[_0x340884(0x3c2)](_0x96ee9a['plugi'+'ns']['lengt'+'h'],0x19*0x13+0x24aa+-0x2684)];if(!_0x12310b||typeof _0x12310b[_0x340884(0x904)]!==_0x340884(0xb3f)+_0x340884(0x636))return _0x11b4dd[_0x340884(0x95d)+'s'][_0x340884(0x499)](_0x340884(0x495)+'ugin.'+_0x340884(0x904)),undefined;return _0x2f44ee['Iwroz'](_0x2e8be7,_0x12310b[_0x340884(0x904)](_0x1506eb,_0x1e0c36,_0xeb3338||[]));}catch(_0x2def88){if(_0x340884(0xbc9)!==_0x340884(0xd14)){if(_0x2f44ee['beRnu'](_0x11b4dd[_0x340884(0x95d)+'s']['lengt'+'h'],-0x109*-0x9+-0x48+-0x903))_0x11b4dd['error'+'s'][_0x340884(0x499)](_0x2f44ee['htGRS'](_0x2f44ee[_0x340884(0x2ba)](_0x2f44ee['YSJsY'](_0x1506eb+'.',_0x1e0c36),':\x20'),_0x2f44ee[_0x340884(0x3a6)](String,_0x2def88&&_0x2def88[_0x340884(0x388)+'ge']||_0x2def88)[_0x340884(0x9d5)](0x1*0x1f67+-0xc0d*-0x1+-0xc*0x39f,-0xcdc+-0x6d3*0x4+0x2882)));return undefined;}else _0x3f65e4=_0x9c996(_0x55a7e9[_0x340884(0xa2d)](_0x436737,_0x3704bb),_0x340884(0xb9d)),_0x1c7d01=_0x55a7e9['quUlT'](_0x454a32,_0x5ee4c8+_0x3a8bc4,'f32'),_0x476439[_0x340884(0x1c4)+'e']='field'+'\x200x28'+'\x20(gue'+_0x340884(0x618);}}function _0x22797c(){var _0xc8ff73=_0x3e9452;if(_0x11b4dd['scrat'+'ch'])return _0x11b4dd['scrat'+'ch'];try{var _0x23e27a=window[_0xc8ff73(0xa07)+'WebMo'+_0xc8ff73(0x9e1)]&&window['Unity'+'WebMo'+_0xc8ff73(0x9e1)]['Runti'+'me'],_0x2ef365=_0x110b34||_0x23e27a&&_0x23e27a[_0xc8ff73(0xd50)+'ns']&&_0x23e27a['plugi'+'ns'][_0x23e27a[_0xc8ff73(0xd50)+'ns'][_0xc8ff73(0x841)+'h']-(-0x2313+0xe58+0x4*0x52f)];if(!_0x2ef365||typeof _0x2ef365[_0xc8ff73(0xa10)+'c']!==_0xc8ff73(0xb3f)+_0xc8ff73(0x636))return _0x11b4dd[_0xc8ff73(0x95d)+'s']['push']('no\x20pl'+_0xc8ff73(0x777)+_0xc8ff73(0xa10)+'c'),-0x8cf+-0x1*0xf07+0x17d6;var _0x3743d6=_0x2e8be7(_0x2ef365['mallo'+'c'](0xd1c+0x23ef+-0x30eb));if(typeof _0x3743d6!==_0xc8ff73(0x71a)+'r'||!_0x2f44ee[_0xc8ff73(0x767)](_0x3743d6,0x2498*-0x1+0x265d+-0x97*0x3))return _0x11b4dd['error'+'s']['push']('mallo'+'c\x20ret'+_0xc8ff73(0x57d)+'\x20'+_0x3743d6),-0xa00+-0x1a12+0x2412;_0x11b4dd['scrat'+'ch']=_0x3743d6;}catch(_0x2faf7){if(_0x2f44ee['IeHML'](_0x11b4dd['error'+'s']['lengt'+'h'],0x1d3b*-0x1+-0x1*0xb56+0x2897))_0x11b4dd[_0xc8ff73(0x95d)+'s'][_0xc8ff73(0x499)](_0x2f44ee[_0xc8ff73(0x5bf)](_0x2f44ee[_0xc8ff73(0x738)],_0x2f44ee[_0xc8ff73(0x917)](String,_0x2faf7&&_0x2faf7[_0xc8ff73(0x388)+'ge']||_0x2faf7)[_0xc8ff73(0x9d5)](-0x2649*-0x1+0x283*0x1+-0x1*0x28cc,0x20c1+0xe8f+-0x2ef6)));return-0x21a6+0x2dc*-0xd+0x46d2;}return _0x11b4dd['scrat'+'ch'];}function _0x159b7c(_0x5e222f){var _0x5bb471=_0x3e9452;if(_0x2f44ee[_0x5bb471(0x5b1)]!==_0x5bb471(0xcdb)){var _0x1917fb=('4|3|2'+_0x5bb471(0x465))[_0x5bb471(0x33c)]('|'),_0x499778=0xda9+0x127*0x17+0x2*-0x1415;while(!![]){switch(_0x1917fb[_0x499778++]){case'0':return{'right':[-0x132*0xb+-0x19f*-0xf+-0xb2a-_0x2f44ee[_0x5bb471(0xa7a)](-0x57*-0x1e+-0x6*0x4fc+0x13b8,_0x2f44ee[_0x5bb471(0x88c)](_0x4c6e91,_0x2d840b)),(0x245c+-0x2e*0x9e+0x1*-0x7f6)*(_0x4f0f72+_0xf0e02d),(0x15d3+0x2*0x11a1+-0x3913)*_0x2f44ee[_0x5bb471(0xd0a)](_0x216fa9,_0x116b1e)],'up':[_0x2f44ee['vRkst'](-0xe5f*0x1+0x7*0x50e+0x1*-0x1501,_0x4f0f72-_0xf0e02d),_0x2f44ee['XwRBW'](0x1*0x19d1+-0xb15*0x1+-0xebb,_0x2f44ee[_0x5bb471(0xe11)](0x21a9+-0x3e5*0x4+-0x1*0x1213,_0x192422+_0x2d840b)),(-0x10c1*-0x2+0x77+0x1*-0x21f7)*_0x2f44ee['hLlxU'](_0x4694a3,_0x3a6528)],'fwd':[_0x2f44ee[_0x5bb471(0xbd2)](-0x11dd+-0x6*0x496+-0x2d63*-0x1,_0x216fa9+_0x116b1e),_0x2f44ee[_0x5bb471(0x7ff)](0x1*0x1cb2+-0x108c+-0xc24,_0x4694a3-_0x3a6528),0x127c+-0x1f05+-0x645*-0x2-(-0xc86+-0x1*0x103d+0x1cc5)*_0x2f44ee['wVkVl'](_0x192422,_0x4c6e91)]};case'1':var _0x3a6528=_0x2f44ee[_0x5bb471(0x88e)](_0x177c85,_0x3a9fae),_0x116b1e=_0x177c85*_0x5032c3,_0xf0e02d=_0x2f44ee[_0x5bb471(0x73c)](_0x177c85,_0xea538);continue;case'2':var _0x4f0f72=_0x3a9fae*_0x5032c3,_0x216fa9=_0x3a9fae*_0xea538,_0x4694a3=_0x2f44ee['iBjyN'](_0x5032c3,_0xea538);continue;case'3':var _0x192422=_0x2f44ee[_0x5bb471(0xd48)](_0x3a9fae,_0x3a9fae),_0x4c6e91=_0x5032c3*_0x5032c3,_0x2d840b=_0xea538*_0xea538;continue;case'4':var _0x3a9fae=_0x5e222f[-0x3*0x588+-0x9e*0x17+0x1eca],_0x5032c3=_0x5e222f[-0x3fb+-0x2*-0x93f+-0xe82],_0xea538=_0x5e222f[-0x106f+0x1*-0x1891+0xb5*0x3a],_0x177c85=_0x5e222f[-0x2b*-0xa6+0x3ea*0x4+0x3f5*-0xb];continue;}break;}}else{if(typeof _0x37f698!=='undef'+'ined'&&_0x3f56d5)return _0x57f632['sourc'+'e']='bare\x20'+_0x5bb471(0x6b3)+_0x5bb471(0xadb)+'ng',_0xe0eac7;}}var _0xe58ebb=-0x504+-0x1c1*0x8+0xdf*0x16;function _0x476c6e(_0x18f670){var _0x39e16e=_0x3e9452;_0x11b4dd['ok']=![],_0x11b4dd[_0x39e16e(0xdf0)]=_0x18f670,_0x11b4dd[_0x39e16e(0xe0a)+'s']++;if(_0x11b4dd[_0x39e16e(0xe0a)+'s']>_0xe58ebb)return _0x11b4dd['quat']=null,_0x11b4dd[_0x39e16e(0xa52)]=null,_0x11b4dd[_0x39e16e(0xc63)]=null,_0x11b4dd;return _0x11b4dd['stale']++,_0x11b4dd;}function _0x493de7(){var _0x240485=_0x3e9452;_0x11b4dd['tried']++,_0x11b4dd[_0x240485(0xe0a)+'s']=0x4eb+0x2*0xa06+-0x245*0xb;var _0x5b57aa=_0x2f44ee[_0x240485(0x270)](_0xf42e2e),_0x5de621=_0x5b57aa&&_0x5b57aa[_0x240485(0xb90)+_0x240485(0x43f)]?parseInt(_0x5b57aa['mouse'+_0x240485(0x43f)],-0x554+0x4c+0x28c*0x2):_0x1a1b3c;if(!_0x5de621)return _0x476c6e('no\x20Mo'+_0x240485(0x1b5)+'ok\x20in'+_0x240485(0x9d8)+'e');if(_0x2f44ee[_0x240485(0xbc0)](_0x1a1b3c,_0x5de621))_0x1a1b3c=_0x5de621;var _0x4aa2f0=_0x183d83(_0x5de621+_0x534e9f,_0x240485(0xd08));if(typeof _0x4aa2f0!=='numbe'+'r'||!(_0x4aa2f0>0x1042+0x6e2*-0x1+-0x960))return _0x476c6e('Mouse'+_0x240485(0x740)+_0x240485(0xb7f)+_0x240485(0x761)+_0x240485(0x500)+'objec'+'t\x20ref'+_0x240485(0xd58)+'e');_0x11b4dd[_0x240485(0x7e5)+'r']=_0x4aa2f0;var _0x1747a5=_0x35183f(_0x240485(0x37e)+_0x240485(0x32b),_0x240485(0x1c5)+'ransf'+_0x240485(0x1d1),[_0x4aa2f0]);if(typeof _0x1747a5!==_0x240485(0x71a)+'r'||!(_0x1747a5>-0x9d2+-0x1812+-0x9*-0x3c4))return _0x11b4dd[_0x240485(0x68d)]=0x1250+-0x21fd+0x1*0xfad,_0x476c6e(_0x2f44ee[_0x240485(0x5d5)]('Compo'+'nent.'+_0x240485(0x1c5)+_0x240485(0xb6b)+_0x240485(0xbc4)+'eturn'+_0x240485(0xb22),_0x1747a5));_0x11b4dd[_0x240485(0x68d)]=_0x1747a5;var _0x377b38=_0x22797c();if(!_0x377b38)return _0x2f44ee[_0x240485(0x612)](_0x476c6e,_0x2f44ee['bYfnr']);var _0x5b1167=_0x35183f(_0x240485(0x449)+'a',_0x2f44ee['zfsUd'],[_0x4aa2f0]);if(typeof _0x5b1167===_0x240485(0x71a)+'r'&&_0x2f44ee[_0x240485(0x49f)](isFinite,_0x5b1167)&&_0x2f44ee[_0x240485(0x372)](_0x5b1167,0xd1d*-0x1+0x1b78+0x1*-0xe5a)&&_0x2f44ee[_0x240485(0x21c)](_0x5b1167,-0x6a*-0x8+0xd80+0xa5*-0x19))_0x11b4dd['fov']=_0x5b1167;_0x2f44ee['fENVD'](_0x35183f,_0x2f44ee['PvDmN'],_0x240485(0xd62)+_0x240485(0x64d)+'on',[_0x377b38,_0x1747a5]);var _0x3bda34=[_0x183d83(_0x377b38,'f32'),_0x183d83(_0x2f44ee[_0x240485(0x75e)](_0x377b38,-0x4*-0x403+-0x233*-0x10+-0x3338),_0x2f44ee['dpHEx']),_0x2f44ee[_0x240485(0x2d4)](_0x183d83,_0x377b38+(-0x14e3*-0x1+0x1*-0x2107+0xc2c),'f32'),_0x2f44ee[_0x240485(0x52a)](_0x183d83,_0x2f44ee[_0x240485(0x9e6)](_0x377b38,0x4a2+-0x23fc+0x1*0x1f66),_0x240485(0xb9d))],_0x97f13f=0x1*-0x1ae3+-0x1f*0xec+0x1*0x3777;for(var _0x23501e=-0x1e02+0x6*0x4f0+0x62;_0x23501e<-0x55*0x5d+0x12e*-0x1d+-0x94d*-0x7;_0x23501e++)_0x97f13f+=_0x3bda34[_0x23501e]*_0x3bda34[_0x23501e];_0x97f13f=Math[_0x240485(0xd46)](_0x97f13f);var _0x50f1dd=isFinite(_0x97f13f)&&Math['abs'](_0x97f13f-(-0x25b1+0x1826+0xd8c))<0x23ae+0x67*-0x17+-0x1a6d+0.02;_0x2f44ee['daTWQ'](_0x35183f,_0x240485(0xa41)+_0x240485(0x840),_0x2f44ee['KTKNz'],[_0x377b38,_0x1747a5]);var _0x5d2cce=_0x2f44ee[_0x240485(0x216)](_0x183d83,_0x377b38,_0x2f44ee[_0x240485(0x735)]),_0x5a7d00=_0x2f44ee[_0x240485(0x3db)](_0x183d83,_0x377b38+(0xc1*0xc+-0x970+0x68),_0x240485(0xb9d)),_0x366e0f=_0x183d83(_0x2f44ee[_0x240485(0xb87)](_0x377b38,-0x11*0x35+0x17a6+-0x1419),'f32');_0x11b4dd[_0x240485(0xc63)]=_0x2f44ee[_0x240485(0x2bf)](typeof _0x5d2cce,_0x2f44ee[_0x240485(0xc0a)])&&_0x2f44ee[_0x240485(0xa4b)](typeof _0x5a7d00,_0x2f44ee[_0x240485(0xc0a)])&&typeof _0x366e0f===_0x2f44ee['MDmdN']&&_0x2f44ee[_0x240485(0xcbe)](isFinite,_0x5d2cce)&&isFinite(_0x5a7d00)&&isFinite(_0x366e0f)&&_0x2f44ee[_0x240485(0xd18)](Math['abs'](_0x5d2cce),-0x10e73+0x31*0x49d+0x1b306)&&Math[_0x240485(0x894)](_0x5a7d00)<0x2b50+0x8*-0x602b+0x45ca8&&_0x2f44ee[_0x240485(0xc97)](Math[_0x240485(0x894)](_0x366e0f),-0x26e54+0x8be1+0x36913*0x1)?[_0x5d2cce,_0x5a7d00,_0x366e0f]:null,_0x11b4dd[_0x240485(0x994)+'ed']++;if(_0x50f1dd)return _0x11b4dd[_0x240485(0xb04)]=_0x3bda34,_0x11b4dd[_0x240485(0xa52)]=_0x159b7c(_0x3bda34),_0x11b4dd['ok']=!![],_0x11b4dd['why']='',_0x11b4dd[_0x240485(0x1c4)+'e']=_0x2f44ee[_0x240485(0x2b8)],_0x11b4dd;_0x11b4dd['quat']=null,_0x11b4dd['basis']=null;if(_0x2f44ee[_0x240485(0x859)](_0x11b4dd['fov'],null)){if('ODvKr'!==_0x2f44ee[_0x240485(0x94d)]){var _0x1dffda=_0x48495a['data'];if(_0x1dffda&&_0x1dffda['__sak'+_0x240485(0xdc1)]===_0x1b01ea&&_0x2f44ee[_0x240485(0x33d)](_0x1dffda['kind'],'cmd'))_0x2f44ee['jubIE'](_0x39b7a2,_0x1dffda[_0x240485(0x458)],_0x1dffda[_0x240485(0x2b9)]);}else return _0x11b4dd['ok']=!![],_0x11b4dd[_0x240485(0x1c4)+'e']=_0x240485(0x708)+_0x240485(0x4a8)+_0x240485(0xc32),_0x11b4dd[_0x240485(0xdf0)]=_0x2f44ee['YRIyL'](_0x240485(0xa97)+_0x240485(0x282)+_0x240485(0x4ed)+_0x240485(0x8f3)+'q|=',Math[_0x240485(0x716)](_0x97f13f*(0x9*0x37e+-0xa*-0x16e+-0xca*0x35))/(-0x46b*0x5+0x7d*-0x9+0x30a*0xa))+(')\x20-\x20f'+_0x240485(0xb89)+'ly'),_0x11b4dd;}return _0x11b4dd['ok']=![],_0x11b4dd['sourc'+'e']=null,_0x11b4dd[_0x240485(0xdf0)]=_0x2f44ee[_0x240485(0xbfc)](_0x2f44ee[_0x240485(0xddf)],Math['round'](_0x97f13f*(-0x1026+-0x21d6+0x35e4*0x1))/(-0xce8+0x10*-0x43+0x1500))+_0x2f44ee['gISTC'],_0x11b4dd;}function _0x2ed0b8(){var _0x262a63=_0x3e9452;if(_0x11b4dd[_0x262a63(0x23c)])return _0x11b4dd;return _0x493de7();}var _0x2a0c8a={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+_0x3e9452(0x1b5)+_0x3e9452(0x38d)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x5ba9b5(_0x260a89){var _0x480a4a=_0x3e9452,_0x4ed8bc=null,_0x1e40a2=0x1cf2+-0x1560+-0x792;for(var _0x49b78c in _0x494094){var _0xbbe99e=_0x494094[_0x49b78c];if(!_0xbbe99e[_0x480a4a(0x26d)]||_0x2f44ee[_0x480a4a(0x7cc)](_0xbbe99e['last'],null))continue;var _0x3a81c8=_0x183d83(_0x2f44ee['htGRS'](_0x1a1b3c,_0x260a89),_0x480a4a(0xb9d));if(typeof _0x3a81c8!==_0x480a4a(0x71a)+'r')continue;_0x2f44ee[_0x480a4a(0x989)](Math[_0x480a4a(0x894)](_0x2f44ee[_0x480a4a(0x200)](_0xbbe99e[_0x480a4a(0x50d)],_0x3a81c8)),0x785*-0x3+0x2309*-0x1+0x3998+0.001)&&_0x2f44ee[_0x480a4a(0x5df)](_0xbbe99e[_0x480a4a(0x26d)],_0x1e40a2)&&(_0x4ed8bc=_0x49b78c,_0x1e40a2=_0xbbe99e['hits']);}return _0x4ed8bc;}function _0x44f1bb(_0x107cea){var _0x3da533=_0x3e9452,_0x3916ed={'NysER':function(_0x27f05a,_0x5e29a0){return _0x27f05a+_0x5e29a0;}},_0x5bfda8=[],_0x1aed5f=_0x1e4c5[_0x3da533(0xbae)+'Look']||[];for(var _0x33f9bf in _0x494094){var _0xe74c46=_0x494094[_0x33f9bf];if(!_0xe74c46[_0x3da533(0x26d)])continue;var _0x144f56=null;for(var _0x7743dc=0x1ae+0xccb+-0xe79;_0x2f44ee[_0x3da533(0x79d)](_0x7743dc,_0x1aed5f['lengt'+'h']);_0x7743dc++){if(_0x1aed5f[_0x7743dc][0x217a+-0xf09*-0x1+-0x2*0x1841]!=='f32')continue;var _0x5339cb=_0x183d83(_0x2f44ee['dUlWL'](_0x107cea,_0x1aed5f[_0x7743dc][0x58c+-0xbf0+-0x1*-0x664]),_0x2f44ee[_0x3da533(0x735)]);if(_0x2f44ee[_0x3da533(0x921)](typeof _0x5339cb,_0x2f44ee['MDmdN'])&&Math['abs'](_0x5339cb-_0xe74c46['last'])<-0xcb0+0x3*-0x275+-0x18b*-0xd+0.001){if(_0x3da533(0x9dc)===_0x2f44ee[_0x3da533(0xced)]){_0x144f56='0x'+_0x1aed5f[_0x7743dc][0x2686+-0x923+-0x1d63]['toStr'+'ing'](0x257c+-0xc40*-0x2+-0x3dec);break;}else _0x1b6553[_0x3916ed[_0x3da533(0xaac)](_0x3916ed['NysER'](_0x45f60b,_0x3da533(0x3ca)),_0x20d8e5[_0x32a06f]['o'][_0x3da533(0x252)+'ing'](-0x5*0x33d+-0x989*0x2+0x2353*0x1))]=_0x2d5f77[_0x455865]['v'];}}_0x5bfda8[_0x3da533(0x499)]({'name':_0x33f9bf,'value':_0xe74c46[_0x3da533(0x50d)],'matches':_0x144f56,'hits':_0xe74c46[_0x3da533(0x26d)],'lo':_0xe74c46['lo'],'hi':_0xe74c46['hi'],'travel':_0xe74c46['lo']===null?-0x1*-0x2278+0x9a3+-0x7*0x64d:Math['round'](_0x2f44ee[_0x3da533(0x352)](_0xe74c46['hi'],_0xe74c46['lo'])*(0x1109+0xdcd+-0x1e72))/(0x10af*0x2+0x1d*0xed+-0x13f1*0x3),'jump':Math['round'](_0xe74c46['jump']*(0x218b+-0x1999*0x1+-0x78e))/(-0x1*-0x191b+0x8b*-0x39+0x63c),'set':_0xe74c46[_0x3da533(0xadc)+'ts']?_0xe74c46[_0x3da533(0xce8)+'st']:null});}return _0x5bfda8;}function _0x2df9e2(){var _0x52c29d=_0x3e9452,_0x3780a9=_0xf42e2e();if(!_0x3780a9||!_0x3780a9['mouse'+_0x52c29d(0x43f)])return _0x52c29d(0x25b)!=='JfSvm'?(_0x2a0c8a[_0x52c29d(0x553)+'ified']=![],_0x2a0c8a[_0x52c29d(0xdf0)]=_0x2f44ee[_0x52c29d(0xe05)],null):_0x17bce5['on'];var _0x2c309c=_0x2f44ee['pBrzj'](parseInt,_0x3780a9['mouse'+'Look'],-0x21ca+-0x33a*0x5+0x1c9*0x1c);if(_0x1a1b3c!==_0x2c309c)_0x1a1b3c=_0x2c309c;_0x2a0c8a[_0x52c29d(0x276)+'rs']=_0x2f44ee['McsXr'](_0x44f1bb,_0x2c309c);var _0xc093b=_0x2f44ee['MTaEi'](_0x4d3a4d),_0xbf0460=0x3*0x17b+-0x49*-0xb+-0x793,_0x5d2c7b=0x5ab*0x5+0xd72*-0x1+0x3*-0x4d9;function _0x220378(_0x4325b2){var _0x566589=_0x52c29d,_0x36a510={'MnmnM':_0x2f44ee[_0x566589(0x81d)]};if(_0x566589(0xc67)===_0x2f44ee[_0x566589(0xb84)]){var _0x3b4405={'FfmeN':function(_0x3f8761,_0x1fb043){return _0x3f8761+_0x1fb043;}},_0x108c4c=_0x248bf9(_0x36a510[_0x566589(0x581)],_0x566589(0x9ca)+'te',_0x566589(0x9f0)+_0x566589(0xd4b)+_0xb3e348[_0x566589(0x9d5)](-0x137d+-0x286+0x1603,0x187b*-0x1+0x2566+-0xce7)['map'](function(_0x58703b){var _0x459d53=_0x566589;return _0x3b4405['FfmeN']('0x'+(_0x58703b['o']<0x1523+0xc*0x293+-0x13*0x2bd?'?':_0x58703b['o']['toStr'+_0x459d53(0x74d)](-0x1*0x8d8+-0x1*0x255d+0x2e45))+'\x20('+_0x58703b['why'],')');})['join']('\x20\x20'));_0x31bd21['body']['appen'+_0x566589(0x25d)+'d'](_0x108c4c);}else return _0x2f44ee[_0x566589(0x921)](_0x4325b2['lo'],null)||_0x4325b2['hi']===null?-0xa53+-0xbd*0x1a+-0x2af*-0xb:_0x2f44ee[_0x566589(0x4f1)](_0x4325b2['hi'],_0x4325b2['lo']);}var _0x54b4e1=null;for(var _0x312c99 in _0x494094){var _0xaa1ea7=_0x494094[_0x312c99];if(!_0xaa1ea7[_0x52c29d(0x26d)]||_0xaa1ea7[_0x52c29d(0x50d)]===null)continue;if(_0x2f44ee[_0x52c29d(0x60e)](_0x220378,_0xaa1ea7)<_0xbf0460)continue;if(_0x2f44ee['YJxdF'](_0xaa1ea7['jump'],_0x5d2c7b))continue;var _0x47b922=_0x183d83(_0x2f44ee[_0x52c29d(0x1d7)](_0x1a1b3c,_0x1ccd87),_0x52c29d(0xb9d));if(_0x2f44ee['HYpey'](typeof _0x47b922,_0x52c29d(0x71a)+'r')||Math[_0x52c29d(0x894)](_0x2f44ee['uToPz'](_0xaa1ea7['last'],_0x47b922))>=-0x8b7+-0x26e*-0xd+-0x16df+0.001)continue;if(!_0x54b4e1||_0x2f44ee[_0x52c29d(0x5b6)](_0xaa1ea7[_0x52c29d(0x26d)],_0x494094[_0x54b4e1]['hits']))_0x54b4e1=_0x312c99;}var _0x2036c8=null;for(var _0x5cb402 in _0x494094){if(_0x5cb402===_0x54b4e1)continue;var _0x1bf652=_0x494094[_0x5cb402];if(!_0x1bf652['hits']||_0x1bf652[_0x52c29d(0x50d)]===null)continue;if(_0x220378(_0x1bf652)<_0xbf0460)continue;if(_0x1bf652[_0x52c29d(0x8f5)]>_0x5d2c7b)continue;if(_0x1bf652['last']>=-(0x8b*0x24+-0x2079+-0xb*-0x135)&&_0x2f44ee[_0x52c29d(0x3a5)](_0x1bf652[_0x52c29d(0x50d)],0x1026+-0xb*-0x139+0x1d3f*-0x1)){_0x2036c8=_0x5cb402;break;}}_0x2a0c8a[_0x52c29d(0x68c)+_0x52c29d(0xabe)]=_0x54b4e1,_0x2a0c8a['pitch'+_0x52c29d(0x948)+'r']=_0x2036c8;var _0x552908,_0x265aa1;if(_0xc093b&&_0x2f44ee[_0x52c29d(0xa3a)](_0xc093b[_0x52c29d(0x3e7)],null))_0x2f44ee['jgHYY']('rtrwW',_0x52c29d(0x69f))?(_0x265aa1=_0xc093b[_0x52c29d(0x3e7)],_0x552908=_0xc093b[_0x52c29d(0x5d2)],_0x2a0c8a['sourc'+'e']=_0x2f44ee[_0x52c29d(0x649)](_0x52c29d(0x3c0)+'r\x20pai'+_0x52c29d(0x883),_0xc093b['order'])+')'):_0x37f356['warni'+'ngs']['push'](_0x52c29d(0xb98)+_0x52c29d(0x94a)+_0x52c29d(0x4b9)+'Modki'+'t.Val'+_0x52c29d(0xa32)+'pper\x20'+_0x52c29d(0x368)+'ssing'+_0x52c29d(0x6c0)+'pture'+'\x20is\x20r'+_0x52c29d(0x390)+'g\x20bli'+_0x52c29d(0xddd));else{if(_0x54b4e1)_0x52c29d(0x2c5)==='LUDGb'?(_0x552908=_0x494094[_0x54b4e1][_0x52c29d(0x50d)],_0x2a0c8a[_0x52c29d(0x1c4)+'e']='gette'+'r',_0x265aa1=_0x2036c8?_0x494094[_0x2036c8]['last']:_0x2f44ee['DNZgs'](_0x183d83,_0x2f44ee['BfWcD'](_0x2c309c,_0x7b82af),_0x2f44ee['dpHEx'])):(_0x22aec3[_0x52c29d(0x3e7)]=null,_0x22a8bf['yaw']=null,_0xd16275['order']=_0x2f44ee[_0x52c29d(0x4a1)]('unres'+_0x52c29d(0xbb2)+'\x20(',_0x524c50?_0x52c29d(0xbe3)+'bound'+'ed':_0x52c29d(0x89b)+'er\x20bo'+_0x52c29d(0xae1))+')');else{if(_0x2f44ee[_0x52c29d(0x27c)](_0x2f44ee[_0x52c29d(0x504)],_0x52c29d(0x695)))_0x552908=_0x183d83(_0x2c309c+_0x1ccd87,'f32'),_0x265aa1=_0x2f44ee['pBrzj'](_0x183d83,_0x2c309c+_0x7b82af,_0x52c29d(0xb9d)),_0x2a0c8a['sourc'+'e']=_0x2f44ee['ifObr'];else{if(_0x3daa96[_0x52c29d(0x6e5)+'t']&&_0x2fc56e[_0x52c29d(0x6e5)+'t']!==_0x32220b)_0x9befe3['paren'+'t'][_0x52c29d(0xb7c)+'essag'+'e'](_0x49ee20,'*');}}}_0x2a0c8a['rawYa'+'w']=_0x552908,_0x2a0c8a[_0x52c29d(0xbad)+_0x52c29d(0xb53)]=_0x265aa1;if(typeof _0x552908!==_0x52c29d(0x71a)+'r'||!_0x2f44ee[_0x52c29d(0x1d0)](isFinite,_0x552908)||typeof _0x265aa1!==_0x2f44ee[_0x52c29d(0xc0a)]||!_0x2f44ee[_0x52c29d(0x9a1)](isFinite,_0x265aa1))return _0x2a0c8a['ident'+_0x52c29d(0xd85)]=![],_0x2a0c8a[_0x52c29d(0xdf0)]='view\x20'+'float'+_0x52c29d(0x697)+_0x52c29d(0x1fd)+'le',null;if(_0x265aa1<-(-0x2201+-0xd48+-0x10f*-0x2d)||_0x265aa1>0x71*0x3+0x16e7+-0x17e0){if(_0x2f44ee[_0x52c29d(0xa2a)](_0x2f44ee['mutre'],_0x52c29d(0x69a)))return _0x2a0c8a['ident'+_0x52c29d(0xd85)]=![],_0x2a0c8a[_0x52c29d(0xdf0)]=_0x2f44ee[_0x52c29d(0xbdf)]('pitch'+'\x20'+Math['round'](_0x265aa1),_0x52c29d(0x322)+_0x52c29d(0x2d1)+_0x52c29d(0xb77)),null;else{var _0x205795=_0x3d25b4[_0x371e81];for(var _0x3009ee=0x6a8+-0x2*-0xa28+-0x1af8;_0x3009ee<_0x205795['lengt'+'h'];_0x3009ee++){_0x377e92[_0x2f44ee['QzeLw'](_0xfe24e+_0x2f44ee['PVqCA'],_0x205795[_0x3009ee]['o'][_0x52c29d(0x252)+_0x52c29d(0x74d)](0x1cab+-0x17bc+-0x4df*0x1))]=_0x205795[_0x3009ee]['v'];}}}return _0x2a0c8a[_0x52c29d(0xdf0)]='',_0x2a0c8a[_0x52c29d(0x553)+_0x52c29d(0xd85)]=!![],_0x2a0c8a[_0x52c29d(0x3e7)]=_0x265aa1,_0x2a0c8a['yaw']=_0x552908,_0x2a0c8a;}function _0x2368a9(_0x4785fc,_0x3b86db,_0x3d3f6d,_0x13d07a){var _0x10c204=_0x3e9452;if(_0x2f44ee[_0x10c204(0x635)](_0x2f44ee[_0x10c204(0xdc0)],_0x2f44ee['YYTzc'])){var _0x5c65b8=_0x2f44ee[_0x10c204(0x59b)](_0x2ed0b8),_0x34e972=null,_0x1561fb=_0x4785fc,_0x519115=_0xd4762b['fov'];if(_0x5c65b8['basis']){_0x34e972=_0x5c65b8['basis'];if(_0x5c65b8[_0x10c204(0xc63)])_0x1561fb=_0x5c65b8['pos'];if(_0x2f44ee['cjknd'](_0x5c65b8[_0x10c204(0x7e7)],null))_0x519115=_0x5c65b8[_0x10c204(0x7e7)];}var _0xc4999d,_0x675ff1,_0xcf0f99,_0x19e984,_0x43ec80,_0x2159a8,_0x350aa2,_0x192af3,_0x22f79f;if(_0x34e972){if(_0x2f44ee['joqtf']===_0x10c204(0x8a8)){var _0x54d36b=('3|1|4'+_0x10c204(0x8b2)+'7|6|5'+'|2')['split']('|'),_0x7e9125=0x5*-0x2bb+0x1043+-0x29c;while(!![]){switch(_0x54d36b[_0x7e9125++]){case'0':_0x43ec80=_0x34e972[_0x10c204(0x9ff)][-0x1fef+0x7*0x122+-0x1b7*-0xe];continue;case'1':_0x675ff1=_0x34e972[_0x10c204(0xc5b)][0xd1b+0x33*0x31+-0x16dd];continue;case'2':_0x22f79f=_0x34e972['up'][0x15eb+-0xc6*0x16+-0x4e5];continue;case'3':_0xc4999d=_0x34e972['fwd'][0x959+0xb*0x260+0x9*-0x3f1];continue;case'4':_0xcf0f99=_0x34e972[_0x10c204(0xc5b)][0xd9+0x1508+-0x15df];continue;case'5':_0x192af3=_0x34e972['up'][0x24ae+-0x70d*0x2+-0x1693*0x1];continue;case'6':_0x350aa2=_0x34e972['up'][-0x17e0+-0x241c+0x3bfc*0x1];continue;case'7':_0x2159a8=_0x34e972[_0x10c204(0x9ff)][0x1264+-0x49*-0x86+-0x3898];continue;case'8':_0x19e984=_0x34e972['right'][-0x1*0x347+-0x1f71+0x22b8*0x1];continue;}break;}}else return _0x44329d[_0x10c204(0x1c4)+'e']=_0x10c204(0x7d3)+_0x10c204(0x925)+'ame',_0x191395;}else{var _0x4354c3=_0x2df9e2();if(!_0x4354c3)return null;var _0x49f759=_0x2f44ee[_0x10c204(0x86b)](_0x4354c3['pitch']*Math['PI'],-0x17c5+-0x2*0x3ee+0x2055),_0x53b8da=_0x2f44ee[_0x10c204(0x7ff)](_0x4354c3['yaw'],Math['PI'])/(0xac*0x23+0x91a+-0x1fea),_0x36a23e=Math['cos'](_0x49f759);_0xc4999d=Math[_0x10c204(0x897)](_0x53b8da)*_0x36a23e,_0x675ff1=-Math[_0x10c204(0x897)](_0x49f759),_0xcf0f99=_0x2f44ee['seLoZ'](Math['cos'](_0x53b8da),_0x36a23e),_0x19e984=_0xcf0f99,_0x43ec80=0xac4*-0x2+-0x1a14+0x2f9c,_0x2159a8=-_0xc4999d,_0x350aa2=_0x2f44ee['tDxIC'](_0x675ff1,_0x2159a8)-_0xcf0f99*_0x43ec80,_0x192af3=_0xcf0f99*_0x19e984-_0xc4999d*_0x2159a8,_0x22f79f=_0xc4999d*_0x43ec80-_0x2f44ee['acaYT'](_0x675ff1,_0x19e984);}var _0x31c1b7=_0x3b86db[0x173a+0x347*0x2+-0x1dc8]-_0x1561fb[0x2521*-0x1+0x74e+0x1dd3],_0x393341=_0x2f44ee[_0x10c204(0x413)](_0x3b86db[0x1b46+-0x25fb+0xab6],_0x1561fb[-0x45*0x5e+0x2171+-0x81a]),_0x48233a=_0x3b86db[0x2492*-0x1+0x22*-0xc2+0x3e58]-_0x1561fb[-0x1bc8+-0xdc*-0x16+0x6*0x17b],_0x39aacf=_0x2f44ee[_0x10c204(0x386)](_0x31c1b7,_0xc4999d)+_0x2f44ee[_0x10c204(0x6aa)](_0x393341,_0x675ff1)+_0x2f44ee[_0x10c204(0xc16)](_0x48233a,_0xcf0f99);if(_0x39aacf<=-0x1075+-0x111*0x7+0x17ec+0.05)return null;var _0x2abea6=_0x2f44ee[_0x10c204(0x2f3)](_0x2f44ee['CSJvG'](_0x31c1b7,_0x19e984)+_0x393341*_0x43ec80,_0x48233a*_0x2159a8),_0x40955a=_0x2f44ee[_0x10c204(0xd2f)](_0x2f44ee['eqniv'](_0x31c1b7*_0x350aa2,_0x2f44ee[_0x10c204(0xd48)](_0x393341,_0x192af3)),_0x2f44ee[_0x10c204(0xd9e)](_0x48233a,_0x22f79f)),_0xa2b6aa=_0x2f44ee[_0x10c204(0x71f)](_0x3d3f6d,_0x13d07a),_0x42ef01=_0x519115*Math['PI']/(0x1b1a+0xb*-0x8c+-0x1462),_0x4f33b8=Math[_0x10c204(0xc69)](_0x42ef01/(0x1eb*0x3+-0x26*0xa8+0x1*0x1331)),_0x116798=_0x2f44ee[_0x10c204(0x71f)](_0x2abea6,_0x39aacf)/(_0x4f33b8*_0xa2b6aa),_0x5816ca=_0x40955a/_0x39aacf/_0x4f33b8;if(_0x116798<-(-0xb0e+0xb4+0xa5b+0.6000000000000001)||_0x2f44ee[_0x10c204(0x82e)](_0x116798,-0x18e6+0x2*-0x3c5+0x2071+0.6000000000000001)||_0x2f44ee['JGeIM'](_0x5816ca,-(0x1750+-0x7*0x1b2+-0x65*0x1d+0.6000000000000001))||_0x2f44ee[_0x10c204(0xc06)](_0x5816ca,0x19db+0x13a0+0x2d7a*-0x1+0.6000000000000001))return null;return{'x':_0x2f44ee['GuqEr'](_0x116798*(-0x47*-0x6d+-0x17ca+0x11*-0x61+0.5)+(0x14e5*-0x1+-0x1cb5+0x38b*0xe+0.5),_0x3d3f6d),'y':_0x2f44ee[_0x10c204(0x73c)](_0x2f44ee[_0x10c204(0xb92)](-0x53*-0x3b+0x6d8*0x4+-0x2e81*0x1+0.5,_0x2f44ee['GaLxM'](_0x5816ca,0xb73+0x148+-0xcbb+0.5)),_0x13d07a),'z':_0x39aacf};}else try{var _0x22f96c=_0x504520&&_0x72c482['data'];if(!_0x22f96c||_0x22f96c['__sak'+_0x10c204(0xdc1)]!==_0x4863e6||_0x22f96c['kind']!==_0x2f44ee['cAozV'])return;_0x2f44ee[_0x10c204(0x942)](_0xeff8aa,_0x22f96c[_0x10c204(0x458)],_0x22f96c['arg']);}catch(_0xa32152){}}var _0x490e1c={'open':![],'cat':'comba'+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x294a98=_0x2f44ee[_0x3e9452(0x632)],_0x3ab911=null,_0x59dee2=[{'id':_0x3e9452(0x62b)+'t','label':'CMB'},{'id':_0x2f44ee[_0x3e9452(0x212)],'label':'VIS'},{'id':_0x3e9452(0x8de)+'s','label':_0x3e9452(0xa19)},{'id':'log','label':_0x3e9452(0xcae)}],_0x375e4d=_0x2f44ee[_0x3e9452(0xca4)](_0x2f44ee['AtmBZ'](_0x2f44ee['bgiTK'](_0x2f44ee[_0x3e9452(0x35b)](_0x2f44ee[_0x3e9452(0xde3)](_0x2f44ee[_0x3e9452(0x491)](_0x2f44ee['CUYEc'](_0x2f44ee[_0x3e9452(0xac1)](_0x2f44ee['tAuWY'](_0x2f44ee[_0x3e9452(0xb79)](_0x2f44ee['IMRzI'](_0x2f44ee['XvtEy'](_0x2f44ee['qBCxa'](_0x2f44ee[_0x3e9452(0xb26)](_0x2f44ee[_0x3e9452(0x95f)](_0x2f44ee[_0x3e9452(0x9ba)](_0x2f44ee['ANNht'](_0x3e9452(0x829)+_0x3e9452(0x7a7)+_0x3e9452(0x459)+_0x3e9452(0x3f9)+_0x3e9452(0x31c)+'tial}','#saku'+_0x3e9452(0x7a7)+'nu-ro'+'ot.mn'+'-pane'+'l{pos'+'ition'+':fixe'+_0x3e9452(0xc9f)+_0x3e9452(0xab5)+'px;bo'+'ttom:'+'24px;'+'width'+_0x3e9452(0x8b6)+_0x3e9452(0x5b2)+_0x3e9452(0xd8b)+'(100v'+'w\x20-\x204'+'8px))'+';max-'+'heigh'+_0x3e9452(0x943)+'(500p'+'x,cal'+_0x3e9452(0xc0e)+_0x3e9452(0xa53)+_0x3e9452(0x6b6)+');')+('displ'+_0x3e9452(0x3bb)+_0x3e9452(0xac2)+_0x3e9452(0x4ce)+_0x3e9452(0xd3e)+_0x3e9452(0xa11)+_0x3e9452(0x8fb)+_0x3e9452(0x98b)+_0x3e9452(0x774)+_0x3e9452(0xc92)+'2px;p'+'ointe'+_0x3e9452(0x88d)+_0x3e9452(0x90a)+'uto;z'+'-inde'+_0x3e9452(0x6c5)+_0x3e9452(0x5de)+'47;')+_0x2f44ee[_0x3e9452(0x998)]+_0x2f44ee[_0x3e9452(0x780)],_0x2f44ee['DBWVQ'])+('color'+':#f6e'+_0x3e9452(0x2f9)+_0x3e9452(0x4cf)+_0x3e9452(0x9ae)+_0x3e9452(0xb51)+_0x3e9452(0x234)+_0x3e9452(0x21a)+_0x3e9452(0x818)+'er\x22,\x22'+'Segoe'+_0x3e9452(0x7d7)+_0x3e9452(0x93c)+_0x3e9452(0xd96)+_0x3e9452(0x2d0)+_0x3e9452(0x5c6)+';}')+_0x2f44ee['ugdEt'],_0x3e9452(0x489)+_0x3e9452(0x827)+_0x3e9452(0x5e8)+'y:fle'+_0x3e9452(0x57b)+_0x3e9452(0x803)+'ectio'+_0x3e9452(0xde8)+'umn;a'+_0x3e9452(0x4b6)+_0x3e9452(0x58a)+':cent'+'er;ga'+_0x3e9452(0x65a)+';widt'+_0x3e9452(0x6a5)+_0x3e9452(0x57b)+_0x3e9452(0xd67)+_0x3e9452(0x7b5)+'ding:'+'12px\x20'+'0;')+('borde'+_0x3e9452(0x774)+_0x3e9452(0xa14)+_0x3e9452(0xbd8)+_0x3e9452(0x64b)+_0x3e9452(0x37d)+_0x3e9452(0xb8d)+_0x3e9452(0x20c)+_0x3e9452(0xbf6)+'5,.02'+_0x3e9452(0x870)+_0x3e9452(0x5a8)+'dow:i'+'nset\x20'+_0x3e9452(0xc02)+_0x3e9452(0xb54)+'rgba('+'255,2'+'55,25'+'5,.05'+_0x3e9452(0x373))+(_0x3e9452(0x641)+_0x3e9452(0x552)+_0x3e9452(0x5e8)+_0x3e9452(0x6e0)+_0x3e9452(0x4a5)+_0x3e9452(0xcc3)+_0x3e9452(0x4c0)+'enter'+_0x3e9452(0x3bd)+_0x3e9452(0xd47)+_0x3e9452(0x471)+'ght:3'+_0x3e9452(0x5fa)+_0x3e9452(0xd10)+_0x3e9452(0xb18)+'om:6p'+_0x3e9452(0xcfc))+(_0x3e9452(0x641)+'ogo-s'+_0x3e9452(0x2ae)+_0x3e9452(0x8a7)+'5px;h'+'eight'+_0x3e9452(0x422)+';over'+_0x3e9452(0xd7b)+'visib'+'le;fi'+_0x3e9452(0xd15)+'drop-'+_0x3e9452(0x4e8)+_0x3e9452(0x61b)+'\x204px\x20'+_0x3e9452(0xb8d)+'255,1'+_0x3e9452(0x835)+_0x3e9452(0x9a2)+_0x3e9452(0x373))+_0x2f44ee['uCEjN'],_0x3e9452(0x4be)+'round'+_0x3e9452(0xc53)+_0x3e9452(0x8c4)+_0x3e9452(0xacc)+_0x3e9452(0x5be)+_0x3e9452(0xcb9)+_0x3e9452(0x507)+'8,242'+_0x3e9452(0x518)+_0x3e9452(0x884)+'r:poi'+_0x3e9452(0x3ed)+_0x3e9452(0xbbc)+_0x3e9452(0x1be)+_0x3e9452(0x8fb)+_0x3e9452(0xbbc)+_0x3e9452(0x789)+_0x3e9452(0xa80)+_0x3e9452(0xa94)+_0x3e9452(0xc56)+_0x3e9452(0x8c8)+_0x3e9452(0x5d6)+';}')+_0x2f44ee[_0x3e9452(0xbf4)],'.mn-t'+_0x3e9452(0x4b3)+_0x3e9452(0x8e7)+_0x3e9452(0xe02)+':#ff6'+_0x3e9452(0x240)+'ackgr'+_0x3e9452(0x37d)+_0x3e9452(0xb8d)+'255,1'+_0x3e9452(0x835)+_0x3e9452(0xd79)+';}')+_0x2f44ee['HxhBF']+(_0x3e9452(0x29d)+_0x3e9452(0x682)+_0x3e9452(0xa0f)+':flex'+';alig'+_0x3e9452(0xbf2)+'ms:ce'+_0x3e9452(0x3ed)+'gap:1'+_0x3e9452(0xc89)+_0x3e9452(0xbd7)+_0x3e9452(0x27d)+_0x3e9452(0x444)+_0x3e9452(0xd39)+'user-'+_0x3e9452(0x418)+_0x3e9452(0xc42)+'e;}')+(_0x3e9452(0x29d)+'itles'+_0x3e9452(0xdda)+_0x3e9452(0x8c3)+'n-wid'+'th:0;'+'}')+('.mn-h'+'{font'+_0x3e9452(0xd92)+':17px'+_0x3e9452(0xa94)+_0x3e9452(0x9f8)+_0x3e9452(0xb9e)+'0;}')+(_0x3e9452(0x489)+_0x3e9452(0xda9)+'nt-si'+'ze:11'+'px;op'+'acity'+':.4;}')+('.mn-c'+_0x3e9452(0x702)+'displ'+_0x3e9452(0x778)+'id;pl'+_0x3e9452(0x4d7)+'tems:'+_0x3e9452(0x265)+_0x3e9452(0x359)+_0x3e9452(0x944)+_0x3e9452(0xa76)+_0x3e9452(0xae2)+_0x3e9452(0xa73)+_0x3e9452(0x98b)+'r:0;b'+'order'+_0x3e9452(0x31e)+'us:8p'+_0x3e9452(0xa44)+_0x3e9452(0xca1)+'nd:tr'+'anspa'+_0x3e9452(0x83a))+(_0x3e9452(0xe02)+_0x3e9452(0xcf1)+_0x3e9452(0x326)+'pacit'+'y:.45'+_0x3e9452(0x432)+_0x3e9452(0x7ac)+_0x3e9452(0x7aa)+';}')+('.mn-c'+'lose:'+_0x3e9452(0x470)+'{opac'+'ity:1'+_0x3e9452(0x32a)+'groun'+_0x3e9452(0xd90)+_0x3e9452(0x6d0)+',255,'+_0x3e9452(0xd71)+_0x3e9452(0x868))+(_0x3e9452(0x35e)+'lose\x20'+_0x3e9452(0xa4d)+'idth:'+_0x3e9452(0xa55)+_0x3e9452(0x30b)+_0x3e9452(0xa6b)+'x;fil'+_0x3e9452(0x4cd)+_0x3e9452(0xaec)+_0x3e9452(0x4ee)+'urren'+_0x3e9452(0x2d7)+_0x3e9452(0x250)+'oke-w'+'idth:'+'2;str'+_0x3e9452(0x684)+_0x3e9452(0x2e4)+'p:rou'+_0x3e9452(0xd5c)),'.mn-c'+'ols{f'+_0x3e9452(0xe0c)+';min-'+_0x3e9452(0x30b)+_0x3e9452(0xcc4)+'verfl'+_0x3e9452(0x71c)+_0x3e9452(0xce7)+_0x3e9452(0x317)+_0x3e9452(0x778)+_0x3e9452(0xbf1)+'id-te'+_0x3e9452(0xde1)+_0x3e9452(0x6b9)+'umns:'+_0x3e9452(0x533)+_0x3e9452(0xc41)+_0x3e9452(0x3fe)+_0x3e9452(0x70f)+_0x3e9452(0x230)+_0x3e9452(0x885)+_0x3e9452(0xba0)+';')+(_0x3e9452(0xca5)+'-item'+_0x3e9452(0xb28)+'rt;al'+_0x3e9452(0x1dc)+'onten'+_0x3e9452(0x3b8)+_0x3e9452(0x487)+_0x3e9452(0x4ce)+'x;pad'+_0x3e9452(0xa11)+'0\x204px'+'\x206px\x20'+'0;}')+_0x2f44ee[_0x3e9452(0x8ff)]+('.mn-c'+_0x3e9452(0xd76)+'-webk'+_0x3e9452(0xccc)+'rollb'+_0x3e9452(0x863)+_0x3e9452(0x9c8)+'ackgr'+_0x3e9452(0x37d)+_0x3e9452(0xb8d)+_0x3e9452(0x20c)+'55,25'+_0x3e9452(0x440)+');bor'+_0x3e9452(0x41c)+_0x3e9452(0x6dc)+_0x3e9452(0x83f)+'}'),_0x2f44ee[_0x3e9452(0x68e)])+(_0x3e9452(0xc03)+_0x3e9452(0xdec)+_0x3e9452(0x6fe)+'kgrou'+_0x3e9452(0xa5f)+'ba(25'+_0x3e9452(0xbee)+_0x3e9452(0x594)+'.04);'+'box-s'+'hadow'+_0x3e9452(0x86c)+'t\x200\x200'+_0x3e9452(0x350)+_0x3e9452(0x249)+_0x3e9452(0x6d0)+_0x3e9452(0xcee)+_0x3e9452(0x9ad)+_0x3e9452(0xc8e)),'.sk-c'+'ard-h'+_0x3e9452(0x381)+_0x3e9452(0x5e8)+'y:fle'+_0x3e9452(0x4dc)+'gn-it'+'ems:c'+_0x3e9452(0xab1)+_0x3e9452(0x6be)+_0x3e9452(0xa90)+_0x3e9452(0xbd7)+_0x3e9452(0x516)+'x\x2012p'+_0x3e9452(0xcfc)),_0x2f44ee[_0x3e9452(0x797)])+('.sk-c'+_0x3e9452(0x931)+_0x3e9452(0x85f)+'stron'+'g{fon'+_0x3e9452(0xc82)+'e:13p'+_0x3e9452(0x58e)+_0x3e9452(0x84f)+'ght:6'+_0x3e9452(0xadd)+_0x3e9452(0x5be)+_0x3e9452(0xcb9)+'46,23'+'8,242'+_0x3e9452(0xcb3)+';}'),_0x2f44ee['NOVSg'])+(_0x3e9452(0x8af)+'body{'+_0x3e9452(0x718)+_0x3e9452(0xa3d)+_0x3e9452(0x24a)+_0x3e9452(0x8fb)+'}'),_0x2f44ee['iEsBG'])+_0x2f44ee[_0x3e9452(0x8b3)]+_0x2f44ee[_0x3e9452(0xaef)]+_0x2f44ee[_0x3e9452(0x261)]+(_0x3e9452(0xd33)+_0x3e9452(0xafa)+_0x3e9452(0x379)+_0x3e9452(0xdfc)+_0x3e9452(0xcce)+'ive;w'+_0x3e9452(0xa2f)+_0x3e9452(0xd9b)+_0x3e9452(0x30b)+_0x3e9452(0xa6b)+_0x3e9452(0xc4b)+'der:0'+';bord'+'er-ra'+_0x3e9452(0x74a)+_0x3e9452(0xbd1)+'backg'+_0x3e9452(0x716)+':rgba'+_0x3e9452(0x886)+_0x3e9452(0x20c)+_0x3e9452(0x354)+_0x3e9452(0x709)+_0x3e9452(0xba8)+'point'+'er;fl'+'ex:no'+_0x3e9452(0x357))+('.sk-s'+_0x3e9452(0xafa)+_0x3e9452(0xbcd)+'er{co'+_0x3e9452(0x65f)+_0x3e9452(0x862)+_0x3e9452(0x714)+'on:ab'+'solut'+_0x3e9452(0xa00)+':3px;'+_0x3e9452(0x3b1)+_0x3e9452(0xb82)+'idth:'+_0x3e9452(0x391)+_0x3e9452(0xdf3)+_0x3e9452(0x225)+_0x3e9452(0x98b)+_0x3e9452(0x774)+_0x3e9452(0xb3c)+'0%;')+_0x2f44ee['SYUJn']+(_0x3e9452(0xd33)+'witch'+_0x3e9452(0x9b8)+_0x3e9452(0x954)+'ked=\x22'+_0x3e9452(0x4fe)+_0x3e9452(0x7a3)+_0x3e9452(0xca1)+'nd:rg'+_0x3e9452(0xbaa)+_0x3e9452(0x467)+_0x3e9452(0x464)+_0x3e9452(0x1ba)+'}'),_0x3e9452(0xd33)+_0x3e9452(0xafa)+'[aria'+'-chec'+'ked=\x22'+_0x3e9452(0x4fe)+']::af'+_0x3e9452(0xc0f)+_0x3e9452(0x81f)+'5px;b'+_0x3e9452(0x64b)+_0x3e9452(0x37d)+_0x3e9452(0xdfe)+'9d;}')+(_0x3e9452(0xc29)+'ange{'+_0x3e9452(0x317)+_0x3e9452(0x3bb)+'ex;al'+_0x3e9452(0xa08)+_0x3e9452(0x3c8)+'cente'+_0x3e9452(0xd42)+_0x3e9452(0x225)+'}'),_0x2f44ee['uUgJS'])+(_0x3e9452(0xd33)+_0x3e9452(0xbd5)+_0x3e9452(0x556)+_0x3e9452(0x269)+'slide'+_0x3e9452(0x62a)+_0x3e9452(0x231)+_0x3e9452(0x57c)+'k{hei'+_0x3e9452(0x8e8)+_0x3e9452(0x5e2)+_0x3e9452(0xa8e)+'radiu'+_0x3e9452(0x1de)+';'),_0x2f44ee[_0x3e9452(0x4f5)])+_0x2f44ee['GCqVd'],_0x3e9452(0x91c)+_0x3e9452(0xb96)+_0x3e9452(0xbac)+_0x3e9452(0x6e7)+'px;fo'+_0x3e9452(0xc3f)+_0x3e9452(0xae2)+_0x3e9452(0x8ac)+_0x3e9452(0x8ce)+_0x3e9452(0x64c)+'4px;t'+'ext-a'+_0x3e9452(0x6da)+'right'+_0x3e9452(0x28f)+_0x3e9452(0x81b)+'a(246'+_0x3e9452(0x5e1)+'242,.'+_0x3e9452(0xa5a))+('.sk-n'+'ote{f'+_0x3e9452(0x4cf)+_0x3e9452(0x9ae)+_0x3e9452(0x1e0)+_0x3e9452(0x2f2)+'rgba('+_0x3e9452(0x853)+'38,24'+_0x3e9452(0x7d4)+';padd'+'ing:2'+_0x3e9452(0x45b)+'white'+_0x3e9452(0x63e)+'e:pre'+'-wrap'+';}')+_0x2f44ee[_0x3e9452(0x3b5)]+(_0x3e9452(0xcac)+'tn{al'+_0x3e9452(0x84b)+_0x3e9452(0x572)+_0x3e9452(0x557)+_0x3e9452(0xb49)+_0x3e9452(0x98b)+'r:0;b'+'order'+'-radi'+'us:8p'+'x;pad'+_0x3e9452(0xa11)+_0x3e9452(0x768)+'6px;b'+'ackgr'+'ound:'+_0x3e9452(0xdfe)+'9d;co'+_0x3e9452(0x86f)+_0x3e9452(0x950))+_0x2f44ee['gcJOf'],_0x3e9452(0xcac)+_0x3e9452(0x7e9)+'ver{f'+'ilter'+_0x3e9452(0x3f1)+_0x3e9452(0x266)+_0x3e9452(0x1ce)+');}')+('.sk-p'+'re{fo'+_0x3e9452(0xa05)+'px/1.'+_0x3e9452(0x5eb)+_0x3e9452(0x3cf)+'pace,'+'Conso'+_0x3e9452(0x603)+_0x3e9452(0x580)+'ace;w'+_0x3e9452(0x8a9)+'space'+':pre-'+_0x3e9452(0x992)+_0x3e9452(0x2cb)+_0x3e9452(0x3fd)+_0x3e9452(0x36f)+_0x3e9452(0x58b)+'d;mar'+_0x3e9452(0xde7)+_0x3e9452(0x790)+'ity:.'+_0x3e9452(0x5d0)+_0x3e9452(0xd8a)+'ght:2'+'80px;'+_0x3e9452(0x2c9)+_0x3e9452(0x7c1)+'uto;}')+('#saku'+'ra-pe'+'tal{p'+_0x3e9452(0x714)+_0x3e9452(0xcab)+_0x3e9452(0xb80)+'op:12'+_0x3e9452(0xa47)+_0x3e9452(0xa38)+'2px;z'+_0x3e9452(0x76c)+'x:214'+_0x3e9452(0x5de)+_0x3e9452(0x1d9)+_0x3e9452(0xba8)+_0x3e9452(0xada)+_0x3e9452(0xbb7)+_0x3e9452(0x8a7)+'6px;h'+'eight'+_0x3e9452(0x294)+';opac'+'ity:.'+'28;'),'trans'+_0x3e9452(0xde6)+_0x3e9452(0x4b4)+_0x3e9452(0xbf3)+_0x3e9452(0xc0b)+_0x3e9452(0x7aa)+_0x3e9452(0xa0b)+'ts:au'+_0x3e9452(0xc70)+'lter:'+_0x3e9452(0xd5a)+_0x3e9452(0x4e8)+_0x3e9452(0x61b)+_0x3e9452(0xbc1)+_0x3e9452(0xb8d)+_0x3e9452(0x3c4)+_0x3e9452(0x835)+_0x3e9452(0xa68)+');}'),_0x5dd588=_0x2f44ee[_0x3e9452(0xdb0)](_0x2f44ee['ySpzO'],_0x3e9452(0x3b6)+'\x22none'+_0x3e9452(0x1c6)+_0x3e9452(0x2b5)+_0x3e9452(0xdfe)+_0x3e9452(0xd6a)+_0x3e9452(0xccf)+_0x3e9452(0x434)+'h=\x222\x22'+_0x3e9452(0xd8e)+_0x3e9452(0x4ab)+_0x3e9452(0xd09)+'=\x22rou'+_0x3e9452(0xd7e)+_0x3e9452(0xccf)+_0x3e9452(0x7c7)+_0x3e9452(0xce0)+_0x3e9452(0xa1a)+_0x3e9452(0x9c0))+(_0x3e9452(0xdd7)+'le\x20cx'+'=\x2212\x22'+_0x3e9452(0x2f8)+_0x3e9452(0x8a3)+_0x3e9452(0x3da)+_0x3e9452(0x737)+_0x3e9452(0x956)+_0x3e9452(0x823)+_0x3e9452(0xa7e)+_0x3e9452(0xd6b)),_0xfced95=_0x3e9452(0x221)+_0x3e9452(0x94b)+'=\x22mn-'+'logo-'+_0x3e9452(0x2ab)+_0x3e9452(0xa1e)+_0x3e9452(0x9f4)+'\x200\x2024'+_0x3e9452(0xc85)+'<path'+_0x3e9452(0x4e1)+'12\x2021'+'c-1.5'+'-2.5-'+_0x3e9452(0xdd5)+_0x3e9452(0x8ed)+_0x3e9452(0xb36)+'.5\x201.'+_0x3e9452(0x472)+'\x204-4.'+'5s4\x202'+_0x3e9452(0x8f1)+'5c0\x203'+'-2.5\x20'+_0x3e9452(0xad9)+'.5z\x22\x20'+_0x2f44ee['JYNSa']+_0x2f44ee['ljZAD'];function _0x2d70c9(_0x281b6d,_0x5dbe94,_0xc5805a){var _0x1d6f3d=_0x3e9452,_0xca361f=document[_0x1d6f3d(0x97b)+'eElem'+_0x1d6f3d(0x6c9)](_0x281b6d);if(_0x5dbe94)_0xca361f['class'+_0x1d6f3d(0x318)]=_0x5dbe94;if(_0x2f44ee['dQdab'](_0xc5805a,null))_0xca361f[_0x1d6f3d(0x941)+'HTML']=_0xc5805a;return _0xca361f;}function _0x2f0a5f(_0x4ae4e0,_0x4796b3){var _0x5e876c=_0x3e9452,_0x3c43ca=_0x2f44ee['MfyIb'][_0x5e876c(0x33c)]('|'),_0x333e66=-0x808*-0x2+-0x2*-0xbaa+0x2*-0x13b2;while(!![]){switch(_0x3c43ca[_0x333e66++]){case'0':_0x573642['appen'+'dChil'+'d'](_0x3aea72);continue;case'1':return _0x573642;case'2':var _0x573642=_0x2d70c9(_0x2f44ee[_0x5e876c(0x81d)],_0x2f44ee['joRjT']+(_0x4796b3?_0x2f44ee[_0x5e876c(0xcb0)]:''));continue;case'3':_0x573642[_0x5e876c(0xd02)]=_0x40dcbd;continue;case'4':_0x573642[_0x5e876c(0x99d)]=_0x3aea72;continue;case'5':_0xefe2f9['appen'+_0x5e876c(0x25d)+'d'](_0x40dcbd);continue;case'6':_0x573642['appen'+_0x5e876c(0x25d)+'d'](_0xefe2f9);continue;case'7':var _0x40dcbd=_0x2d70c9(_0x5e876c(0xbf0),_0x2f44ee['kViEi'],_0x2f44ee[_0x5e876c(0xd2f)](_0x5e876c(0x311)+'ng>'+_0x4ae4e0,_0x5e876c(0xcad)+'ong>'));continue;case'8':var _0x3aea72=_0x2d70c9(_0x5e876c(0xbf0),_0x5e876c(0x253)+_0x5e876c(0x300));continue;case'9':var _0xefe2f9=_0x2d70c9('div',_0x5e876c(0x571)+_0x5e876c(0x7e0)+'ad');continue;}break;}}function _0x7645c3(_0x5e48a7,_0x624b6c){var _0x40c589=_0x3e9452,_0x39c67e={'OGKKP':_0x2f44ee[_0x40c589(0x96f)],'scrRf':'aria-'+_0x40c589(0xb00)+'ed','WTbiZ':function(_0x2fe652,_0x36a0d4){var _0x59c42a=_0x40c589;return _0x2f44ee[_0x59c42a(0x27c)](_0x2fe652,_0x36a0d4);},'XeJhJ':_0x40c589(0xb6e),'fzACO':function(_0x18793f){return _0x18793f();}};if(_0x2f44ee['rBIYL'](_0x2f44ee[_0x40c589(0x424)],'PPShJ')){var _0x4802b9=_0x2f44ee['RSfqd'](_0xb6867b);return _0x4802b9?{'a':_0x4802b9['rawA'],'b':_0x4802b9['rawB'],'hits':_0x4802b9[_0x40c589(0x26d)],'order':_0x4802b9[_0x40c589(0x55d)]}:null;}else{var _0x3d2716=_0x2f44ee[_0x40c589(0x79a)](_0x2d70c9,_0x2f44ee['vWTYT'],'sk-sw'+_0x40c589(0x239));_0x3d2716[_0x40c589(0xd51)]=_0x2f44ee[_0x40c589(0xd55)];var _0x123618=function(){var _0x5ceae1=_0x40c589,_0x500049={'MNwZL':function(_0x2ff463,_0x49264a){return _0x2ff463(_0x49264a);}};_0x39c67e[_0x5ceae1(0xdb4)]!==_0x39c67e[_0x5ceae1(0xdb4)]?_0x500049[_0x5ceae1(0x905)](_0xbe156d,_0x1c34d1):_0x3d2716[_0x5ceae1(0x346)+'tribu'+'te'](_0x39c67e[_0x5ceae1(0xa0c)],_0x5e48a7()?_0x5ceae1(0x8fe):_0x5ceae1(0x9fb));};return _0x3d2716[_0x40c589(0x930)+'ck']=function(){var _0x133d5a=_0x40c589;_0x39c67e['WTbiZ'](_0x39c67e[_0x133d5a(0x442)],_0x133d5a(0xb6e))?(_0x624b6c(!_0x39c67e['fzACO'](_0x5e48a7)),_0x39c67e['fzACO'](_0x123618)):(_0x55a2f7=_0x5560ef,_0x3d790e=_0x11cdee['hits']);},_0x2f44ee[_0x40c589(0x60f)](_0x123618),_0x3d2716[_0x40c589(0x673)]=_0x123618,_0x490e1c[_0x40c589(0x5af)][_0x40c589(0x499)](_0x123618),_0x3d2716;}}function _0x38feb0(_0xff41ed,_0xc97262,_0x18247d,_0x35ac44,_0x4c9c3b){var _0x1c1f49=_0x3e9452,_0x4126d3={'ZjtEN':function(_0x55646c,_0x419b1e){return _0x2f44ee['CXsfR'](_0x55646c,_0x419b1e);},'ppRoA':function(_0x466cf3,_0x1be23a){return _0x466cf3-_0x1be23a;},'CwBLv':function(_0x22faa0,_0xe3d2e8){return _0x22faa0(_0xe3d2e8);},'xiCmg':function(_0x226299){return _0x2f44ee['RSfqd'](_0x226299);},'RiQpz':'LYbPv','tnzNt':function(_0x1b9c3d){return _0x1b9c3d();}};if(_0x2f44ee['hGRtz']===_0x2f44ee[_0x1c1f49(0x30f)]){if(_0x456bb7[_0x1c1f49(0xaf1)]===_0x1c1f49(0x6b8)){_0x2f44ee[_0x1c1f49(0x59b)](_0x5d3922)[_0x1c1f49(0x67b)]({'host':_0x227ca5[_0x1c1f49(0x47d)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2f44ee[_0x1c1f49(0x6df)](_0x137548['kind'],_0x1c1f49(0x8b8)+'t'))_0x2aa21f()[_0x1c1f49(0x67b)](_0x4da505[_0x1c1f49(0x8b8)+'t']);}else{var _0xe0456e=_0x2f44ee[_0x1c1f49(0x2d4)](_0x2d70c9,_0x2f44ee[_0x1c1f49(0x81d)],_0x1c1f49(0x966)+'nge'),_0x1f7723=document['creat'+_0x1c1f49(0x39f)+_0x1c1f49(0x6c9)](_0x2f44ee['dfUEO']);_0x1f7723[_0x1c1f49(0xd51)]=_0x1c1f49(0x567),_0x1f7723[_0x1c1f49(0x94b)+_0x1c1f49(0x318)]=_0x1c1f49(0x222)+'ider',_0x1f7723['min']=_0x2f44ee[_0x1c1f49(0x91f)](String,_0xff41ed),_0x1f7723['max']=_0x2f44ee[_0x1c1f49(0x28a)](String,_0xc97262),_0x1f7723['step']=String(_0x18247d);var _0x56d9d2=_0x2f44ee[_0x1c1f49(0xc76)](_0x2d70c9,_0x2f44ee[_0x1c1f49(0x719)],_0x2f44ee[_0x1c1f49(0x260)]),_0x3997c6=function(){var _0x18669f=_0x1c1f49,_0x10541d=('4|0|3'+_0x18669f(0x775))[_0x18669f(0x33c)]('|'),_0x5c6d74=0xd56+-0x43*0x55+0x1*0x8e9;while(!![]){switch(_0x10541d[_0x5c6d74++]){case'0':_0x1f7723[_0x18669f(0x8de)]=String(_0x52a622);continue;case'1':var _0x38e3ad=_0x4126d3[_0x18669f(0xc2f)](_0x4126d3['ppRoA'](_0x52a622,_0xff41ed)/(_0xc97262-_0xff41ed),0x1c70+0x1*0x16f+0x1d7b*-0x1);continue;case'2':_0x1f7723[_0x18669f(0x995)]['setPr'+'opert'+'y'](_0x18669f(0x890),_0x38e3ad+'%');continue;case'3':_0x56d9d2[_0x18669f(0x7bd)+_0x18669f(0x284)+'t']=(_0x18247d<0x301*0x7+0x511*0x2+-0x1f28?_0x52a622[_0x18669f(0x2d8)+'ed'](0x435+0x2325+-0x2759):_0x4126d3[_0x18669f(0x68a)](String,Math['round'](_0x52a622)))+(_0x1f7723[_0x18669f(0xd4e)+'et'][_0x18669f(0x272)]||'');continue;case'4':var _0x52a622=_0x4126d3[_0x18669f(0x6ef)](_0x35ac44);continue;}break;}};return _0x1f7723['oninp'+'ut']=function(){var _0x271f45=_0x1c1f49,_0x536799={'ivhGc':_0x271f45(0xb9d)};if(_0x4126d3[_0x271f45(0x674)]===_0x271f45(0xb75))return _0x150c19[-0x250a+-0x1c27+0x4132]===_0x536799['ivhGc']||_0x3f1245[0x175f+-0x2e2*-0x1+-0xa*0x2a0]===_0x271f45(0xd08);else _0x4c9c3b(parseFloat(_0x1f7723[_0x271f45(0x8de)])||_0xff41ed),_0x4126d3['tnzNt'](_0x3997c6);},_0xe0456e[_0x1c1f49(0x3d7)+'dChil'+'d'](_0x1f7723),_0xe0456e[_0x1c1f49(0x3d7)+_0x1c1f49(0x25d)+'d'](_0x56d9d2),_0xe0456e[_0x1c1f49(0x673)]=_0x3997c6,_0xe0456e[_0x1c1f49(0xaa6)]=_0x1f7723,_0x2f44ee['xinUM'](_0x3997c6),_0x490e1c['syncs']['push'](_0x3997c6),_0xe0456e;}}function _0x3ef4a1(_0x368252,_0x51a07c){var _0xd726d8=_0x3e9452,_0x215d99=_0x2d70c9(_0xd726d8(0xbf0),_0xd726d8(0x86a)+'l'),_0xf5c3c9=_0x2d70c9('div',_0xd726d8(0x8ca)+_0xd726d8(0xdd8),_0x2f44ee['rrFyb'](_0x368252,_0x51a07c?_0x2f44ee[_0xd726d8(0x49e)](_0xd726d8(0x566)+'\x20clas'+_0xd726d8(0x4c3)+_0xd726d8(0x3e6)+'\x27>',_0x51a07c)+(_0xd726d8(0xc40)+'n>'):''));return _0x215d99['appen'+_0xd726d8(0x25d)+'d'](_0xf5c3c9),_0x215d99;}function _0x57e997(_0x55721f,_0x3761a6,_0x3586a4,_0x3e2714){var _0x1af534=_0x3e9452,_0x33355=_0x55721f&&_0x55721f[_0x1af534(0x227)+'y']&&_0x55721f['surve'+'y'][_0x3761a6];if(!_0x33355)return'-';for(var _0x2413b6=0x106e*-0x2+0x268*-0x2+-0x1*-0x25ac;_0x2f44ee[_0x1af534(0x5ff)](_0x2413b6,_0x33355[_0x1af534(0x841)+'h']);_0x2413b6++){if(_0x33355[_0x2413b6]['o']===_0x3586a4){if(_0x2f44ee[_0x1af534(0xe16)](_0x3e2714,'v3')){var _0x4f5e29=_0x33355[_0x2413b6][_0x1af534(0x35a)]||[_0x33355[_0x2413b6]['v'],0x680+0x100a+-0x168a,-0x72*-0x3a+-0x23b*-0x5+-0x24fb];return _0x4f5e29[_0x1af534(0x301)](function(_0x1288f2){var _0x34fff1=_0x1af534;return Math[_0x34fff1(0x716)](_0x1288f2*(-0xff6+-0xd2b+0x9d7*0x3))/(-0x1c8f+0x200b+-0x84*0x6);})['join']('\x20\x20');}var _0x25e07a=_0x33355[_0x2413b6]['v'];return typeof _0x25e07a===_0x1af534(0x71a)+'r'?_0x2f44ee[_0x1af534(0x71f)](Math[_0x1af534(0x716)](_0x25e07a*(-0x27f*-0x7+0x1*-0x1b31+0xda0)),0x1661+-0x1710+0x497):String(_0x25e07a);}}return'-';}function _0x39f9f2(_0x5469d6){var _0x1c399f=_0x3e9452,_0x42ad34={'oMPEd':function(_0x3d3e7c,_0x4302eb){return _0x3d3e7c+_0x4302eb;},'NPgyp':_0x2f44ee['XCIox'],'DenLq':'ZqZIk','VUbJQ':_0x1c399f(0xcd3),'CwflM':_0x2f44ee[_0x1c399f(0xc8b)],'WnStm':function(_0x995c0f){return _0x995c0f();},'tkiBX':function(_0x4b0d5b,_0x2daa57){return _0x4b0d5b(_0x2daa57);},'Hmspy':_0x1c399f(0x563)+'8a','DWasj':function(_0x22ef69,_0x201011){return _0x22ef69===_0x201011;},'jTiIw':function(_0x94ec2,_0x53ef7b){return _0x94ec2!==_0x53ef7b;},'avTNE':function(_0x42837e,_0x362c55){return _0x42837e===_0x362c55;}};if(_0x2f44ee[_0x1c399f(0x42e)](_0x1c399f(0xc4d),_0x2f44ee[_0x1c399f(0xd52)]))return _0x16628d[_0x1c399f(0x1c4)+'e']=_0x1c399f(0xd50)+_0x1c399f(0x909)+_0x1c399f(0x482)+'.reso'+'lveGa'+'me()',_0x283662;else{var _0x376400=_0x3ab911,_0x12f6fd=[],_0x3b538d;if(_0x2f44ee[_0x1c399f(0x7d5)](_0x5469d6,_0x2f44ee['EZObA'])){if(_0x2f44ee[_0x1c399f(0xb34)]!==_0x2f44ee[_0x1c399f(0xb34)])typeof _0x57b09e===_0x1c399f(0xb3f)+'ion'?_0x13f766=_0x58e1d5(_0xa1392a):_0x3442b6=_0x256bb6(_0x19eff4,_0x46d2fc||-0x144b+-0x1*0x15ef+-0x1e*-0x16a);else{var _0x5a0836=_0x2f44ee[_0x1c399f(0x3fc)](_0x2f0a5f,_0x2f44ee['yFNgM'],_0x38d0af['on']),_0x2b2c1d=_0x2d70c9(_0x1c399f(0xbf0),'sk-md'+_0x1c399f(0xb12),_0x38d0af['on']?_0x2f44ee['inlXr'](_0x2f44ee['TZzfA'](_0x2f44ee['umzoV']('x',_0x38d0af['facto'+'r']['toFix'+'ed'](0x7cf*0x3+0x1*0x2531+-0x3c9d))+_0x1c399f(0x786),_0x438391[_0x1c399f(0x841)+'h']),'\x20fiel'+_0x1c399f(0xbb8))+_0x4f6629+('\x20writ'+'es'):_0x1c399f(0x85e)+_0x1c399f(0x9da)+_0x1c399f(0x378)+_0x1c399f(0x204)+'speed'+_0x1c399f(0xbef)+_0x1c399f(0x36b)+_0x1c399f(0x3b9)+'eight'+_0x1c399f(0x8d8)+'p\x20and'+'\x20jump'+'\x20are\x20'+_0x1c399f(0xd5f)+'ed.'),_0x7d468f=_0x3ef4a1(_0x2f44ee['kgKSu']);_0x7d468f['appen'+_0x1c399f(0x25d)+'d'](_0x7645c3(function(){var _0x3cbce5=_0x1c399f;if(_0x2f44ee[_0x3cbce5(0x2e5)](_0x2f44ee[_0x3cbce5(0x3e0)],_0x2f44ee[_0x3cbce5(0x3e0)]))return _0x38d0af['on'];else{var _0x36852e=_0x345413[0x1548+0xab2*-0x2+0x1d][_0x3cbce5(0xdba)]();if(_0x36852e)_0x23de18=_0x36852e;}},function(_0x2e646d){var _0x4bcab8=_0x1c399f;_0x462b04(_0x2e646d,_0x38d0af[_0x4bcab8(0x2a3)+'r']),_0x2b2c1d[_0x4bcab8(0x7bd)+_0x4bcab8(0x284)+'t']=_0x2e646d?_0x2f44ee[_0x4bcab8(0x895)](_0x2f44ee[_0x4bcab8(0x9e8)](_0x2f44ee[_0x4bcab8(0xc3b)](_0x2f44ee['hAcaU']('x',_0x38d0af[_0x4bcab8(0x2a3)+'r']['toFix'+'ed'](-0x5*0xc1+0x38c*-0x7+0x1c9a))+_0x4bcab8(0x786),_0x438391[_0x4bcab8(0x841)+'h']),'\x20fiel'+'ds\x20·\x20'),_0x4f6629)+_0x2f44ee[_0x4bcab8(0x55b)]:_0x2f44ee['wCCri'];})),_0x5a0836[_0x1c399f(0x99d)]['appen'+_0x1c399f(0x25d)+'d'](_0x2b2c1d),_0x5a0836[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+'dChil'+'d'](_0x7d468f);var _0x160ed0=_0x2f44ee['nOFZF'](_0x38feb0,-0x5*0x2c2+0x1*0x1e3b+-0x10*0x107,0x1*-0x1999+0x2a9*-0x1+0x39*0x7f,0x12df+-0x1a7d+0x79e+0.5,function(){var _0x596066=_0x1c399f;return _0x38d0af[_0x596066(0x2a3)+'r'];},function(_0x4ffea4){_0x462b04(_0x38d0af['on'],_0x4ffea4);});_0x160ed0[_0x1c399f(0xaa6)][_0x1c399f(0xd4e)+'et'][_0x1c399f(0x272)]='x';var _0x5a9212=_0x2f44ee[_0x1c399f(0xb47)](_0x3ef4a1,_0x1c399f(0x85e)+_0x1c399f(0xac0),_0x1c399f(0x80e)+_0x1c399f(0x6eb)+_0x1c399f(0xcfa)+'ep\x20th'+'is');_0x5a9212[_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x160ed0),_0x5a0836[_0x1c399f(0x99d)]['appen'+_0x1c399f(0x25d)+'d'](_0x5a9212);if(_0x4ed0ef[_0x1c399f(0x841)+'h']){var _0x39a850=_0x2f44ee[_0x1c399f(0x34c)](_0x2d70c9,'div',_0x1c399f(0x9ca)+'te',_0x2f44ee['IwCom'](_0x1c399f(0x9f0)+'ed:\x20',_0x4ed0ef['slice'](0x153f+-0x1*0x1a58+0x519,-0x1c2f+-0x63*-0x11+0x15a0)[_0x1c399f(0x301)](function(_0x48eaff){var _0x573bc4=_0x1c399f;return _0x42ad34[_0x573bc4(0x4f2)](_0x42ad34['oMPEd']('0x'+(_0x48eaff['o']<-0x1da4*0x1+0x14b*-0x1+0x1eef?'?':_0x48eaff['o']['toStr'+'ing'](-0x1fb5+0x8*-0x373+0x3b5d)),'\x20('),_0x48eaff[_0x573bc4(0xdf0)])+')';})[_0x1c399f(0xc01)]('\x20\x20')));_0x5a0836[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x39a850);}_0x12f6fd[_0x1c399f(0x499)](_0x5a0836);var _0x53671c=_0x2f44ee[_0x1c399f(0x520)](_0x2f0a5f,'Bindi'+_0x1c399f(0xb4b)),_0x607de=_0x2f44ee[_0x1c399f(0x22e)](_0x2d70c9,_0x2f44ee['vWTYT'],_0x1c399f(0xbc8)+'n',_0x2f44ee[_0x1c399f(0x6b2)]);_0x607de['type']='butto'+'n',_0x607de['oncli'+'ck']=function(){var _0x55f0a8=_0x1c399f;_0x505ac0(_0x55f0a8(0x257)+'hot');},_0x53671c[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x2f44ee['sZSGA'](_0x2d70c9,_0x2f44ee[_0x1c399f(0x81d)],'sk-md'+'esc',_0x2f44ee[_0x1c399f(0xd1d)])),_0x53671c[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+'dChil'+'d'](_0x607de),_0x12f6fd[_0x1c399f(0x499)](_0x53671c);}}if(_0x5469d6===_0x1c399f(0xd91)+'ls'){var _0x37cc6e=_0x2f44ee[_0x1c399f(0x650)](_0x2f0a5f,'Radar',_0x2cdf6d['on']),_0x2fc63a=_0x2f44ee[_0x1c399f(0xb6f)](_0x3ef4a1,_0x1c399f(0x29b)+'ed');_0x2fc63a['appen'+_0x1c399f(0x25d)+'d'](_0x2f44ee[_0x1c399f(0x541)](_0x7645c3,function(){return _0x2cdf6d['on'];},function(_0x1ac039){var _0x2221fa=_0x1c399f;_0x2f44ee[_0x2221fa(0xab8)](_0x43d617,_0x1ac039,_0x2cdf6d[_0x2221fa(0x760)]);})),_0x37cc6e[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+'dChil'+'d'](_0x2d70c9('div',_0x1c399f(0x29c)+'esc',_0x2f44ee[_0x1c399f(0xa65)])),_0x37cc6e['body'][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x2fc63a);var _0x39ba52=_0x38feb0(0xc1b+-0x135d*0x1+-0x49*-0x1a,-0x1825*-0x1+0x26ce+0xc77*-0x5,-0x1*-0x22d+-0x3*-0x65d+-0x153a,function(){var _0x279096=_0x1c399f;if(_0x279096(0x20a)===_0x42ad34['DenLq'])return _0x2cdf6d[_0x279096(0xb48)];else{var _0xaef55a=(_0x279096(0x871)+_0x279096(0xae4)+'4|3')[_0x279096(0x33c)]('|'),_0x5d1c85=0x5a3+-0x4d4*0x3+-0x8d9*-0x1;while(!![]){switch(_0xaef55a[_0x5d1c85++]){case'0':_0x4f5666['body'][_0x279096(0x3d7)+_0x279096(0x25d)+'d'](_0xa1a445);continue;case'1':_0xa1a445['style']['cssTe'+'xt']=_0x42ad34['NPgyp'];continue;case'2':_0xa1a445['id']=_0x279096(0x9f1)+'a-box'+'es';continue;case'3':return _0x4f0cf4;case'4':_0x266173={'cv':_0xa1a445};continue;case'5':if(!_0x57e5b3[_0x279096(0x99d)]||!_0x211e71[_0x279096(0x99d)]['appen'+'dChil'+'d'])return null;continue;case'6':var _0xa1a445=_0x19171c[_0x279096(0x97b)+_0x279096(0x39f)+_0x279096(0x6c9)](_0x279096(0x98d)+'s');continue;}break;}}},function(_0x1e0f1b){_0x2cdf6d['span']=_0x1e0f1b;});_0x39ba52['input']['datas'+'et'][_0x1c399f(0x272)]='m';var _0x1c6484=_0x3ef4a1(_0x2f44ee[_0x1c399f(0xbca)],_0x1c399f(0x9e5)+_0x1c399f(0xace)+_0x1c399f(0x2ca)+_0x1c399f(0x9b4)+_0x1c399f(0xd9d)+_0x1c399f(0x377));_0x1c6484[_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x39ba52),_0x37cc6e[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x1c6484),_0x12f6fd[_0x1c399f(0x499)](_0x37cc6e);var _0x602487=_0x2f0a5f('Boxes',_0x2cdf6d[_0x1c399f(0x760)]),_0x1c50ad=_0x2f44ee['bsvCw'](_0x3ef4a1,_0x2f44ee['kgKSu']);_0x1c50ad[_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x2f44ee[_0x1c399f(0x3d3)](_0x7645c3,function(){var _0x11c4b4=_0x1c399f,_0x54f149={'wEhRi':function(_0x32ac19,_0x174529){return _0x32ac19+_0x174529;}};if('NBncH'!==_0x42ad34['VUbJQ']){var _0x1535d7=_0x415217[_0x1ae711];_0x50c89c+=_0x1535d7[_0x11c4b4(0x26d)]||-0x1*-0x104e+-0x221f+0x11d1*0x1,_0x269cbe+=_0x54f149['wEhRi'](_0x1535d7['setHi'+'ts']||0x1*0x162d+0x11*0xf7+-0x2694,_0x1535d7['pairH'+_0x11c4b4(0x2fc)]||0x256e+-0x3e4+-0x218a);}else return _0x2cdf6d[_0x11c4b4(0x760)];},function(_0x4fb760){var _0x2fae59=_0x1c399f,_0x41b672={'kimpl':function(_0xd63e54,_0x44251f){return _0x2f44ee['QUTFI'](_0xd63e54,_0x44251f);},'WGJYK':_0x2fae59(0x474)+_0x2fae59(0xd21)+'igina'+_0x2fae59(0x78f)+'=','OhSPs':_0x2fae59(0xa07)+'\x20inst'+'ance\x20'+_0x2fae59(0x483)+_0x2fae59(0xade)+_0x2fae59(0xcb1)+'t\x20(so'+'urce:'+'\x20'};if(_0x4fb760&&!_0x5497ad()){if(_0x2fae59(0xc44)===_0x2fae59(0x6f2)){var _0x1ace82='';_0x4da610[_0x2fae59(0xb99)+'irePr'+'oof']&&(_0x1ace82=_0x41b672[_0x2fae59(0x869)](_0x2fae59(0x30a)+_0x2fae59(0xd86)+'red\x20a'+'t\x20'+_0x5b741c[_0x2fae59(0xb99)+'irePr'+_0x2fae59(0xdd9)][_0x2fae59(0x8d1)]+_0x41b672[_0x2fae59(0xe15)]+_0xfffa7e[_0x2fae59(0xb99)+'irePr'+_0x2fae59(0xdd9)][_0x2fae59(0xd6f)+_0x2fae59(0xdfa)+'nc']+(_0x2fae59(0x781)+_0x2fae59(0x6b3)+'resol'+_0x2fae59(0x312))+_0xff4fe7[_0x2fae59(0xb99)+_0x2fae59(0x646)+'oof']['resol'+'veGam'+_0x2fae59(0x419)+'re'],'\x20(sou'+_0x2fae59(0xad5))+(_0x504512['hookF'+'irePr'+_0x2fae59(0xdd9)][_0x2fae59(0xae5)+'ource'+_0x2fae59(0xba1)+'e']||_0x2fae59(0xa9e))+('),\x20so'+_0x2fae59(0xdd3)+'refer'+_0x2fae59(0xc05)+_0x2fae59(0xc10)+_0x2fae59(0x929)+_0x2fae59(0xb16)+'d\x20is\x20'+_0x2fae59(0x483)+_0x2fae59(0x725)+_0x2fae59(0x2f6)+'ow.')),_0x352a0b[_0x2fae59(0x628)+'ngs'][_0x2fae59(0x499)](_0x41b672[_0x2fae59(0x869)](_0x41b672['kimpl'](_0x41b672[_0x2fae59(0x3c3)]+(_0x330833[_0x2fae59(0xa50)+'ls']['gameS'+'ource']||'none')+_0x2fae59(0x72a),_0x2fae59(0x9ec)+_0x2fae59(0x9cb)+'\x20stay'+'\x20bloc'+'ked\x20u'+_0x2fae59(0x53e)+_0x2fae59(0x22d)+_0x2fae59(0x306)+_0x2fae59(0xc11)+'ith\x20M'+_0x2fae59(0x7f8)+'.HEAP'+_0x2fae59(0x7cd)+_0x2fae59(0x305)+_0x2fae59(0x769)+'.'),_0x1ace82));}else{_0x4da83b();return;}}_0x43d617(!![],_0x4fb760);}));var _0x2528f4=_0x376400&&_0x376400['angle'+'s'];_0x602487[_0x1c399f(0x99d)]['appen'+'dChil'+'d'](_0x2d70c9(_0x1c399f(0xbf0),_0x2f44ee['UZdkr'],_0x2528f4&&!_0x2528f4['ident'+'ified']?_0x2f44ee[_0x1c399f(0xcdc)]('Not\x20d'+_0x1c399f(0xc49)+_0x1c399f(0x289),_0x2528f4[_0x1c399f(0xdf0)]||_0x1c399f(0xac8)+_0x1c399f(0x5b4)+_0x1c399f(0x720)+'denti'+_0x1c399f(0x6fc))+('\x20-\x20th'+'ese\x20t'+_0x1c399f(0xd6c)+'oats\x20'+_0x1c399f(0xbd6)+_0x1c399f(0xdcf)+'tch\x20a'+_0x1c399f(0x4db)+'w.\x20Pr'+_0x1c399f(0x3e9)+_0x1c399f(0x1cd)+_0x1c399f(0x80d)+_0x1c399f(0x8d6)+'0°,\x20p'+'ress\x20'+_0x1c399f(0x9cd)):_0x2528f4&&!_0x2528f4['fovSa'+'ne']?_0x2f44ee['iVJPp'](_0x2f44ee[_0x1c399f(0x9b0)]+Math['round'](_0x2528f4[_0x1c399f(0x7e7)]),_0x1c399f(0x89e)+'tside'+'\x20the\x20'+'sane\x20'+_0x1c399f(0xaa8)+_0x1c399f(0x519)+_0x1c399f(0x834)+_0x1c399f(0xa37)+'.'):_0x1c399f(0xcca)+'n-spa'+'ce\x20bo'+'xes.\x20'+'The\x20f'+_0x1c399f(0xd2d)+_0x1c399f(0x237)+_0x1c399f(0xce1)+_0x1c399f(0xaaf)+_0x1c399f(0x2db)+'ad\x20fr'+'om\x20th'+_0x1c399f(0x485)+_0x1c399f(0xa82)+_0x1c399f(0xc77)+'\x20is\x20f'+_0x1c399f(0x3e5)+'\x20by\x20e'+_0x1c399f(0x668))),_0x602487[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x1c50ad);var _0x5732d4=_0x38feb0(0x3*-0x156+0x2229+-0x1deb,0xec1+-0x1fac+0x1*0x116d,-0x1ca0+0xb7a+-0x4*-0x44a,function(){var _0x3f1f8d=_0x1c399f;return _0xd4762b[_0x3f1f8d(0x7e7)];},function(_0x18b893){var _0x45b77d=_0x1c399f;if(_0x42ad34[_0x45b77d(0xc08)]!=='jMxPp')return![];else _0xd4762b['fov']=_0x18b893,_0x51a57c();});_0x5732d4[_0x1c399f(0xaa6)][_0x1c399f(0xd4e)+'et'][_0x1c399f(0x272)]='°';var _0x169030=_0x3ef4a1(_0x2f44ee[_0x1c399f(0x1da)],_0x1c399f(0xbd4)+_0x1c399f(0xc24)+_0x1c399f(0xcfa)+_0x1c399f(0x4eb)+'is');_0x169030[_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x5732d4);var _0x4d47ce=_0x2f44ee[_0x1c399f(0x66e)](_0x3ef4a1,_0x1c399f(0xdf5)+_0x1c399f(0xdf6),'fov\x20b'+_0x1c399f(0xbb9)+'o\x2075,'+_0x1c399f(0xca0)+_0x1c399f(0x409)+'lear'),_0x10edbf=_0x2f44ee[_0x1c399f(0x20f)](_0x2d70c9,'butto'+'n',_0x2f44ee[_0x1c399f(0xdf9)],'Reset');_0x10edbf['addEv'+_0x1c399f(0x9ee)+_0x1c399f(0xcf2)+'r'](_0x2f44ee[_0x1c399f(0x7a0)],function(){var _0x3f7830=_0x1c399f;_0xd4762b['fov']=0x36+0x1c45+-0x1c30,_0x42ad34['WnStm'](_0x51a57c),_0x42ad34[_0x3f7830(0x602)](_0x27cccf,_0x490e1c[_0x3f7830(0xb23)]);}),_0x4d47ce[_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x10edbf),_0x602487[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x169030),_0x602487[_0x1c399f(0x99d)]['appen'+_0x1c399f(0x25d)+'d'](_0x4d47ce);var _0x2b51f2=_0x376400&&_0x376400['view'];_0x602487['body']['appen'+_0x1c399f(0x25d)+'d'](_0x2f44ee[_0x1c399f(0xc4e)](_0x2d70c9,_0x1c399f(0xbf0),_0x1c399f(0x9ca)+'te',_0x2f44ee[_0x1c399f(0xc13)](_0x2f44ee[_0x1c399f(0x408)](_0x2f44ee['QEOWt'](_0x2f44ee[_0x1c399f(0x3dc)](_0x1c399f(0x345)+'\x20',_0x2b51f2?_0x2b51f2[_0x1c399f(0xb90)+_0x1c399f(0x43f)]?_0x2f44ee['jbEoX']+_0x2b51f2[_0x1c399f(0xb90)+_0x1c399f(0x43f)]+(_0x2b51f2['camer'+'a']?_0x2f44ee[_0x1c399f(0x427)]+_0x2b51f2[_0x1c399f(0x708)+'a']:''):_0x1c399f(0x6a7)+'useLo'+'ok\x20ye'+'t':'no\x20Mo'+'useLo'+_0x1c399f(0x38d)+'t'),_0x2528f4?_0x2f44ee[_0x1c399f(0x506)]('\x0a',_0x2528f4['sourc'+'e']&&_0x2528f4['sourc'+'e'][_0x1c399f(0x30c)+'Of'](_0x2f44ee[_0x1c399f(0x968)])===-0x18c9*-0x1+-0x287*0x1+0x103*-0x16?_0x2f44ee[_0x1c399f(0xac1)](_0x2f44ee[_0x1c399f(0x889)](_0x2f44ee['VSSYe'](_0x2f44ee['MRQwW'](_0x1c399f(0x285)+_0x1c399f(0x7ec)+_0x1c399f(0x89f)+'les',_0x2528f4['sourc'+'e'][_0x1c399f(0x9d5)](-0x5*-0x3eb+-0xa*0x207+0xba)),_0x2f44ee['aKPxM']),Math['round'](_0x2528f4[_0x1c399f(0x907)+'w']))+_0x2f44ee[_0x1c399f(0x49a)],Math['round'](_0x2528f4[_0x1c399f(0xbad)+'tch'])):_0x2528f4[_0x1c399f(0x1c4)+'e']===_0x2f44ee['SKMju']?_0x2f44ee[_0x1c399f(0x538)](_0x2f44ee['NVZqD'](_0x2f44ee[_0x1c399f(0x526)](_0x2f44ee['WzeQy']('read\x20'+_0x1c399f(0x285)+_0x1c399f(0xbae)+'Look\x20'+_0x1c399f(0x276)+_0x1c399f(0xc7a)+'w\x20\x20\x20',_0x2528f4['yawAt']),_0x2f44ee['Ywtjs'])+Math[_0x1c399f(0x716)](_0x2528f4['rawYa'+'w']),'\x0apitc'+'h\x20')+_0x2528f4['pitch'+'At'],'\x20=\x20')+Math[_0x1c399f(0x716)](_0x2528f4['rawPi'+_0x1c399f(0xb53)]):_0x1c399f(0x898)+'ING\x20f'+_0x1c399f(0x480)+_0x1c399f(0x9c7)+'\x20offs'+'ets\x20+'+_0x1c399f(0x50f)+'and\x20+'+'0x1C\x0a'+_0x1c399f(0xb8f)+_0x1c399f(0xc7b)+_0x1c399f(0x9e4)+'\x20have'+'\x20not\x20'+_0x1c399f(0x9ab)+_0x1c399f(0x8e3)):''),_0x2528f4&&_0x2528f4[_0x1c399f(0xa45)+'ooks']&&_0x2528f4[_0x1c399f(0xa45)+'ooks'][_0x1c399f(0x994)+'ed']===-0x1*0x1406+-0x157e+0x2984&&_0x2528f4[_0x1c399f(0xa45)+_0x1c399f(0x5cd)]['total']>0x1045+-0x12a4+-0x1*-0x25f?_0x2f44ee['umzoV'](_0x2f44ee[_0x1c399f(0x649)](_0x2f44ee['CUYEc'](_0x2f44ee['IBxXs'](_0x1c399f(0x42f)+_0x1c399f(0xc62)+_0x1c399f(0x722)+'ed\x20bu'+_0x1c399f(0xaab)+'e\x20app'+_0x1c399f(0x333)+'(',_0x2528f4['viewH'+_0x1c399f(0x5cd)][_0x1c399f(0xab3)+'ved']),'/'),_0x2528f4[_0x1c399f(0xa45)+_0x1c399f(0x5cd)]['total']),_0x1c399f(0xdb2)+_0x1c399f(0x6db)):_0x2528f4&&_0x2528f4['viewH'+_0x1c399f(0x5cd)]&&_0x2528f4[_0x1c399f(0xa45)+'ooks'][_0x1c399f(0x592)]===-0x6*-0x592+0x13*0x1f5+-0x469b?_0x2f44ee[_0x1c399f(0xde3)](_0x2f44ee['oSmku'](_0x1c399f(0x548)+_0x1c399f(0x75a)+'s\x20wer'+'e\x20nev'+'er\x20re'+'giste'+_0x1c399f(0xb31),_0x2528f4['viewH'+_0x1c399f(0x5cd)][_0x1c399f(0x95d)+'Count']),'\x20erro'+'rs)'):''),_0x4d364b?_0x1c399f(0x23b)+_0x1c399f(0x67f)+_0x1c399f(0x55e)+_0x1c399f(0x6d4)+'ved\x20c'+_0x1c399f(0x5ec)+_0x1c399f(0x9c4):''))),_0x12f6fd[_0x1c399f(0x499)](_0x602487);}if(_0x5469d6==='value'+'s'){var _0x45e575=[[_0x2f44ee[_0x1c399f(0xdff)],_0x1c399f(0xb42)+'ON',_0x376400?_0x376400[_0x1c399f(0xb1e)+'on']:'-'],[_0x1c399f(0x700),_0x2f44ee[_0x1c399f(0x6b4)],_0x376400?_0x2f44ee[_0x1c399f(0xa4f)](_0x2f44ee['JoAGP'](_0x376400['hooks'+_0x1c399f(0x765)+'ed'],_0x2f44ee['gBbJJ']),_0x376400[_0x1c399f(0x9e4)+_0x1c399f(0xd99)+_0x1c399f(0x7d8)+_0x1c399f(0xa5b)]):'-'],['Heap','from\x20'+'insta'+_0x1c399f(0x1dd)+_0x1c399f(0x361),_0x376400&&_0x376400[_0x1c399f(0x6dd)+_0x1c399f(0xb20)]&&_0x376400['wasmM'+'emory'][_0x1c399f(0x429)+_0x1c399f(0x785)]?_0x2f44ee[_0x1c399f(0x916)](_0x2f44ee[_0x1c399f(0x893)](Math[_0x1c399f(0x716)](_0x376400[_0x1c399f(0x6dd)+_0x1c399f(0xb20)][_0x1c399f(0xab7)]/(0x1f52fc+-0x1*-0x9054+-0xfe350))+_0x2f44ee[_0x1c399f(0xa24)],_0x376400[_0x1c399f(0x6dd)+_0x1c399f(0xb20)]['atMs']),'ms'):'-'],[_0x1c399f(0x1cc)+'rs',_0x1c399f(0xc43)+'nNetw'+_0x1c399f(0x4b0)+'nc',_0x376400&&_0x376400[_0x1c399f(0xaa1)]?_0x2f44ee['kPRQD'](String,_0x376400['esp']['playe'+'rCoun'+'t']):'-'],[_0x2f44ee['xmRiM'],_0x2f44ee['FGWlL'],_0x376400&&_0x376400[_0x1c399f(0xaa1)]?String(_0x376400[_0x1c399f(0xaa1)][_0x1c399f(0xbcc)+_0x1c399f(0x99f)]):'-'],['Camer'+'a',_0x2f44ee[_0x1c399f(0x61a)],_0x376400&&_0x376400['esp']&&_0x376400['esp']['camer'+'a']?_0x2f44ee[_0x1c399f(0x939)](_0x376400[_0x1c399f(0xaa1)][_0x1c399f(0x708)+'a']+'\x20(',_0x376400['esp'][_0x1c399f(0x708)+'aFrom'])+')':'-']];for(_0x3b538d=0x2421*-0x1+-0x17a0+0x3bc1;_0x2f44ee[_0x1c399f(0x3be)](_0x3b538d,_0x45e575[_0x1c399f(0x841)+'h']);_0x3b538d++){var _0xaf9b24=_0x2f44ee[_0x1c399f(0x9a1)](_0x3ef4a1,_0x45e575[_0x3b538d][-0x26fb*0x1+0x2e3+0x2418]),_0x13bb35=_0x2d70c9(_0x2f44ee['CIIgu'],'sk-va'+'l');_0x13bb35['style'][_0x1c399f(0x218)+_0x1c399f(0xb8b)]='0',_0x13bb35[_0x1c399f(0x995)]['flex']='1',_0x13bb35[_0x1c399f(0x995)][_0x1c399f(0x9ed)+'lign']=_0x1c399f(0x9ff),_0x13bb35['textC'+_0x1c399f(0x284)+'t']=String(_0x45e575[_0x3b538d][-0x6*-0x287+0x16ec+0x1*-0x2614]),_0x13bb35[_0x1c399f(0xd4e)+'et']['k']=_0x45e575[_0x3b538d][-0x1*0x1a06+0xfed+0x3*0x35e],_0xaf9b24[_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x13bb35);var _0x4f4942=_0x12f6fd[_0x1c399f(0x841)+'h']?_0x12f6fd[_0x2f44ee[_0x1c399f(0x8ab)](_0x12f6fd['lengt'+'h'],-0x17*0x147+0x116f+-0xbf3*-0x1)]:null;!_0x4f4942&&(_0x4f4942=_0x2f0a5f(_0x1c399f(0xd93)+'on',![]),_0x12f6fd[_0x1c399f(0x499)](_0x4f4942)),_0x4f4942['body'][_0x1c399f(0x3d7)+'dChil'+'d'](_0xaf9b24),_0x4f4942['body'][_0x1c399f(0x654)+'hild']['sp']=_0x13bb35;}var _0x57cd3d=_0x2f0a5f(_0x2f44ee['nViUP'],![]),_0x2d9400=[[_0x2f44ee[_0x1c399f(0xaa0)],_0x376400&&_0x376400[_0x1c399f(0x46c)]&&_0x376400['local'][_0x1c399f(0x84a)]?_0x2f44ee[_0x1c399f(0x7d0)]+_0x376400['local'][_0x1c399f(0x84a)]:'FPSco'+_0x1c399f(0x640)+'ler',_0x376400&&_0x376400[_0x1c399f(0x46c)]&&_0x376400['local'][_0x1c399f(0xcf4)]?_0x376400[_0x1c399f(0x46c)]['feet']['map'](function(_0x31d0cd){var _0x1ae401=_0x1c399f;return _0x2f44ee[_0x1ae401(0x672)](Math['round'](_0x31d0cd*(0x1b0a+0x11c1+-0x2c67)),0x25*0x10+0x2381+-0x256d);})['join']('\x20\x20'):'-'],[_0x2f44ee[_0x1c399f(0x9c9)],_0x2f44ee['UYDRy']('+',_0xb5ae23)+'m',_0x376400&&_0x376400[_0x1c399f(0x46c)]&&_0x376400['local']['eye']?_0x376400['local'][_0x1c399f(0x7d9)][_0x1c399f(0x301)](function(_0x66762b){var _0x531150=_0x1c399f;if('TDEhE'==='TDEhE')return Math[_0x531150(0x716)](_0x66762b*(-0x144e+-0x1e79*0x1+-0x1*-0x332b))/(-0x56b*0x1+-0x237a+-0x2949*-0x1);else _0x150c02=_0x42ad34[_0x531150(0x4f2)]((_0x1434e0['arm']&&_0x53247d['arm']['ok']?_0x531150(0x412)+_0x531150(0x6c4):_0x531150(0x679)+_0x531150(0xdca))+_0x2fca89,'s'),_0x52751c=_0x42ad34[_0x531150(0x8c7)];})[_0x1c399f(0xc01)]('\x20\x20'):'-'],[_0x2f44ee[_0x1c399f(0xdc8)],_0x2f44ee['ZdXyo'],_0x2f44ee[_0x1c399f(0xbfe)](_0x57e997,_0x376400,_0x1c399f(0x711)+_0x1c399f(0x640)+_0x1c399f(0x660),0x24e6+0x1*-0x19c9+0x7b*-0x17)],[_0x1c399f(0x33a)+'t\x20spe'+'ed','0x40',_0x2f44ee[_0x1c399f(0x338)](_0x57e997,_0x376400,'FPSco'+'ntrol'+_0x1c399f(0x660),-0xf*-0x1a3+-0x40*0x89+0x11b*0x9)],[_0x1c399f(0x310)+_0x1c399f(0x30b)+'t',_0x2f44ee['cuCST'],_0x2f44ee[_0x1c399f(0x48f)](_0x57e997,_0x376400,_0x1c399f(0x711)+_0x1c399f(0x640)+_0x1c399f(0x660),-0x331*-0x8+-0x11c2*0x1+-0x6aa)],[_0x2f44ee['VnCnj'],_0x1c399f(0x7d1)+_0x1c399f(0x8e1)+_0x1c399f(0x7a4)+'C0',_0x57e997(_0x376400,_0x1c399f(0x7d1)+_0x1c399f(0x8e1)+'pt',0x7f6+0x1*0x270e+-0x2e44)]];for(_0x3b538d=-0x1*-0xeb7+0xec3+-0x1d7a;_0x2f44ee[_0x1c399f(0x880)](_0x3b538d,_0x2d9400[_0x1c399f(0x841)+'h']);_0x3b538d++){if('Yfctw'!==_0x1c399f(0x830)){var _0x437a9d=(_0x1c399f(0x727)+_0x1c399f(0x3ec)+'2|0|8'+_0x1c399f(0x2e2))[_0x1c399f(0x33c)]('|'),_0x405fc7=-0x8d8+-0x5ba+0xe92*0x1;while(!![]){switch(_0x437a9d[_0x405fc7++]){case'0':_0x5c9b79[_0x1c399f(0xd4e)+'et']['k']=_0x2d9400[_0x3b538d][0x206b+-0x377*-0x8+-0x3c22];continue;case'1':_0x57cd3d[_0x1c399f(0x99d)]['lastC'+_0x1c399f(0xbde)]['sp']=_0x5c9b79;continue;case'2':_0x5c9b79['textC'+'onten'+'t']=String(_0x2d9400[_0x3b538d][0x1bdb+-0x1*0x23c8+0x2a5*0x3]);continue;case'3':var _0x1d2c47=_0x3ef4a1(_0x2d9400[_0x3b538d][-0x106e*-0x2+-0x209d+-0x3f]);continue;case'4':_0x57cd3d[_0x1c399f(0x99d)][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x1d2c47);continue;case'5':_0x5c9b79[_0x1c399f(0x995)][_0x1c399f(0x218)+_0x1c399f(0xb8b)]='0';continue;case'6':_0x5c9b79[_0x1c399f(0x995)]['textA'+'lign']=_0x1c399f(0x9ff);continue;case'7':var _0x5c9b79=_0x2f44ee['lalMr'](_0x2d70c9,'span',_0x1c399f(0x2ce)+'l');continue;case'8':_0x1d2c47[_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x5c9b79);continue;case'9':_0x5c9b79[_0x1c399f(0x995)]['flex']='1';continue;}break;}}else{var _0x12d406='';for(var _0x1ddfe6=-0x184b*-0x1+-0xe7a+-0x9d1;_0x1ddfe6<arguments[_0x1c399f(0x841)+'h'];_0x1ddfe6++){var _0x494173=arguments[_0x1ddfe6];if(_0x42ad34[_0x1c399f(0x94f)](typeof _0x494173,_0x1c399f(0x74e)+'g'))_0x12d406+=_0x494173;else{if(_0x494173&&_0x494173['messa'+'ge'])_0x12d406+=_0x494173[_0x1c399f(0x388)+'ge'];}}if(_0x12d406[_0x1c399f(0x30c)+'Of'](_0x7ee2bc)!==-(0x25f6+-0xa0+-0x1f7*0x13))return _0x4d75c8['apply'](_0xa9014d,arguments);if(_0x42ad34[_0x1c399f(0x72f)](_0x12d406['index'+'Of']('Unity'+_0x1c399f(0xa16)+_0x1c399f(0x9e1)),-(-0x14dc+-0xf4f+0x5*0x73c))){var _0x1592f0=_0x12d406['slice'](0x1f01*-0x1+-0xb49+0x2a4a,-0x20bd+0xa36*-0x3+-0x29*-0x193);if(_0x42ad34[_0x1c399f(0x599)](_0x178f25['index'+'Of'](_0x1592f0),-(-0x63e+-0x82f*-0x3+-0x124e))&&_0x226772[_0x1c399f(0x841)+'h']<0x2*0x295+-0x5d4+0xe6)_0x431a77[_0x1c399f(0x499)](_0x1592f0);}}}_0x12f6fd[_0x1c399f(0x499)](_0x57cd3d);}if(_0x2f44ee[_0x1c399f(0x75f)](_0x5469d6,_0x2f44ee[_0x1c399f(0xb91)])){var _0x4c20d4=_0x2f0a5f(_0x2f44ee['YnkkI'],![]),_0x1fd3fb=_0x376400&&_0x376400[_0x1c399f(0x628)+_0x1c399f(0xb4b)]&&_0x376400[_0x1c399f(0x628)+'ngs']['lengt'+'h']?_0x376400['warni'+_0x1c399f(0xb4b)]['join']('\x0a'):_0x1c399f(0x58c)+_0x1c399f(0xdac)+'s';_0x4c20d4[_0x1c399f(0x99d)]['appen'+'dChil'+'d'](_0x2f44ee['eRZIY'](_0x2d70c9,_0x2f44ee[_0x1c399f(0x81d)],_0x1c399f(0x77d)+'e',_0x1fd3fb)),_0x12f6fd['push'](_0x4c20d4);var _0x2206c4=_0x2f0a5f('Repor'+'t',![]),_0x517f96=_0x2d70c9(_0x2f44ee[_0x1c399f(0xd55)],_0x1c399f(0xbc8)+'n',_0x1c399f(0x5c1)+_0x1c399f(0x1f4)+'to\x20cl'+_0x1c399f(0x651)+'rd');_0x517f96[_0x1c399f(0xd51)]=_0x2f44ee[_0x1c399f(0xd55)],_0x517f96['oncli'+'ck']=function(){var _0x4e8d3d=_0x1c399f,_0xaa401={'yCLvl':function(_0x2a84e3,_0x160d11){return _0x2f44ee['LKhLa'](_0x2a84e3,_0x160d11);},'CVEFM':_0x2f44ee['xcBhA'],'Ldcqs':'sakur'+'a-sw-'+'v2'};try{var _0x43c49b=_0x2f44ee['mVjEF'](_0x4b38f3+'\x0a'+JSON[_0x4e8d3d(0x74e)+'gify'](_0x376400,null,-0x23e0*0x1+0x1a+0x23c7)+'\x0a',_0x142eea);if(navigator['clipb'+_0x4e8d3d(0xb15)]&&navigator[_0x4e8d3d(0x6d8)+_0x4e8d3d(0xb15)]['write'+_0x4e8d3d(0x2d5)])navigator[_0x4e8d3d(0x6d8)+_0x4e8d3d(0xb15)][_0x4e8d3d(0x549)+_0x4e8d3d(0x2d5)](_0x43c49b)['then'](function(){var _0x1056c4=_0x4e8d3d;if(_0xaa401['yCLvl'](_0xaa401[_0x1056c4(0xd81)],'aPfOA'))try{var _0x5ab1b0=_0x2561c0();return _0x5ab1b0&&_0x5ab1b0[_0x1056c4(0xcf4)]?_0x5ab1b0[_0x1056c4(0xcf4)][-0x57*0x67+-0x1*0xa7b+0x2d7d]:null;}catch(_0x84404f){return null;}else _0x517f96[_0x1056c4(0x7bd)+'onten'+'t']=_0x1056c4(0x9b3)+'d';});else _0x517f96['textC'+'onten'+'t']=_0x4e8d3d(0x854)+_0x4e8d3d(0x494)+_0x4e8d3d(0x975)+'ed\x20-\x20'+_0x4e8d3d(0x536)+_0x4e8d3d(0x977)+'anel\x20'+'inste'+'ad';}catch(_0x17db5f){if('pRWsc'===_0x2f44ee[_0x4e8d3d(0x24b)]){var _0x50c0cd=_0x4ec0f6[_0x4e8d3d(0x397)+_0x4e8d3d(0x1e1)+_0x4e8d3d(0xcd0)](_0xaa401[_0x4e8d3d(0x744)]);if(_0x50c0cd)_0x50c0cd[_0x4e8d3d(0x5bd)+'e']();}else _0x517f96['textC'+'onten'+'t']=_0x2f44ee['EIRoK'];}},_0x2206c4['body'][_0x1c399f(0x3d7)+_0x1c399f(0x25d)+'d'](_0x2d70c9(_0x1c399f(0xbf0),'sk-md'+'esc','Paste'+'\x20the\x20'+'whole'+_0x1c399f(0xc55)+'g\x20whe'+_0x1c399f(0x463)+_0x1c399f(0x34f)+'g\x20loo'+'ks\x20wr'+_0x1c399f(0x44c))),_0x2206c4['body']['appen'+_0x1c399f(0x25d)+'d'](_0x517f96),_0x12f6fd[_0x1c399f(0x499)](_0x2206c4);}return _0x12f6fd;}}function _0x5bb112(){var _0x22a547=_0x3e9452;if(_0x490e1c[_0x22a547(0x663)])_0x2f44ee[_0x22a547(0x44e)](_0x356659,!![]);}function _0x4f9c1d(){var _0x55a6e9=_0x3e9452;if(_0x2f44ee['prkHe']!==_0x55a6e9(0x2ac))try{var _0x549774=localStorage[_0x55a6e9(0x4d1)+'em'](_0x294a98);if(!_0x549774)return;var _0x2a794c=JSON[_0x55a6e9(0xcb5)](_0x549774);if(_0x2a794c&&typeof _0x2a794c['x']==='numbe'+'r'&&typeof _0x2a794c['y']===_0x2f44ee[_0x55a6e9(0xc0a)])_0x490e1c[_0x55a6e9(0xc63)]=_0x2a794c;}catch(_0x5309c8){}else return _0xab8e2d['lo']===null||_0x2f44ee[_0x55a6e9(0x2bf)](_0x649e8f['hi'],null)?0x1*-0x1d27+-0xddd+-0x1*-0x2b04:_0x2f44ee['MUNPS'](_0x3e47d2['hi'],_0xdecd01['lo']);}function _0x54ee19(){var _0x3c1250=_0x3e9452;try{if(_0x2f44ee[_0x3c1250(0xd0e)]!==_0x2f44ee['vJuqw'])return _0x7769bc+_0x4814ce[_0x3cdbf3]['lengt'+'h'];else localStorage[_0x3c1250(0x29f)+'em'](_0x294a98,JSON['strin'+_0x3c1250(0x5c0)](_0x490e1c[_0x3c1250(0xc63)]));}catch(_0x4ca7d3){}}function _0x4963d4(){var _0xc7775e=_0x3e9452,_0x4a67bc=_0x490e1c[_0xc7775e(0x9c2)];if(!_0x4a67bc||!_0x4a67bc[_0xc7775e(0x995)])return;_0x490e1c[_0xc7775e(0xc63)]?(_0x4a67bc[_0xc7775e(0x995)][_0xc7775e(0x6a4)]=_0x490e1c[_0xc7775e(0xc63)]['x']+'px',_0x4a67bc[_0xc7775e(0x995)]['top']=_0x2f44ee['dulZe'](_0x490e1c[_0xc7775e(0xc63)]['y'],'px'),_0x4a67bc[_0xc7775e(0x995)][_0xc7775e(0x9ff)]=_0x2f44ee['zIuvW'],_0x4a67bc['style'][_0xc7775e(0x273)+'m']=_0xc7775e(0x8b7)):(_0x4a67bc[_0xc7775e(0x995)][_0xc7775e(0x6a4)]=_0x2f44ee['zIuvW'],_0x4a67bc[_0xc7775e(0x995)][_0xc7775e(0xc14)]='auto',_0x4a67bc['style']['right']='24px',_0x4a67bc['style'][_0xc7775e(0x273)+'m']=_0x2f44ee['uoVDL']);}function _0x132dd3(_0x520b7a,_0x3533f7){var _0x575efc=_0x3e9452,_0x5f2018={'JPTcr':function(_0x256ad8,_0x2e39f0,_0x3ca0e3){return _0x256ad8(_0x2e39f0,_0x3ca0e3);},'AiKmB':function(_0x1154c0,_0x104ca6){var _0x5a7891=_0x23db;return _0x2f44ee[_0x5a7891(0x686)](_0x1154c0,_0x104ca6);},'yHsPn':'pIfKp','Rutqv':_0x2f44ee[_0x575efc(0x4ac)],'caHse':function(_0x14181c,_0x5b3b93){return _0x2f44ee['yCZKQ'](_0x14181c,_0x5b3b93);},'aAMQw':_0x575efc(0xabc),'emVww':function(_0x5034c8,_0x1f614e){return _0x5034c8-_0x1f614e;},'NNTDK':function(_0x3dd538,_0x200d2d){return _0x3dd538-_0x200d2d;}};try{var _0x2cfb69=![],_0x5014fa=0x2654+0xf2+-0x13a3*0x2,_0x253151=-0xe84+-0x2108*-0x1+-0x1284;_0x3533f7['style']['curso'+'r']='grab',_0x3533f7[_0x575efc(0x995)]['touch'+'Actio'+'n']=_0x575efc(0xa9e);var _0xbbd9d4=function(_0x4242c8){var _0x42d313=_0x575efc;if(_0x5f2018[_0x42d313(0xd19)]!==_0x42d313(0x6f0)){var _0x3e850c=_0x5f2018[_0x42d313(0xdee)](_0x4ca471,_0x42d313(0x711)+_0x42d313(0x640)+'ler',_0x5ba281[_0x2316fd[_0x44c07e]][_0x42d313(0x87e)]);_0x3e850c[_0x42d313(0x26d)]=_0x14618f[_0x4bb499[_0x95e447]][_0x42d313(0x26d)],_0x3e850c['isLoc'+'al']=_0x164cb4[_0x2f2f6e[_0x468525]][_0x42d313(0x87e)]===_0x25e69d,_0x5835d1[_0x42d313(0x7c5)+'oller'+'s']['push'](_0x3e850c);}else{_0x2cfb69=!![],_0x3533f7[_0x42d313(0x995)]['curso'+'r']=_0x42d313(0x9bf)+'ing';var _0x21a7f2={'left':parseFloat(_0x520b7a[_0x42d313(0x995)][_0x42d313(0x6a4)])||-0xd5*-0x3+-0x4c5+0xc2*0x3,'top':parseFloat(_0x520b7a[_0x42d313(0x995)][_0x42d313(0xc14)])||0x10e+0x8aa*-0x4+0x219a};(!_0x520b7a['style'][_0x42d313(0x6a4)]||_0x520b7a[_0x42d313(0x995)][_0x42d313(0x6a4)]==='auto')&&(_0x21a7f2['left']=(window[_0x42d313(0x941)+'Width']||0x884+-0x789+0xfb*-0x1)-(_0x520b7a[_0x42d313(0x384)+_0x42d313(0xde5)+'h']||-0x1fa6*-0x1+0xb72+0x4c*-0x89)-(-0x3*0x1ca+-0x1aac+0x2022));if(!_0x520b7a[_0x42d313(0x995)][_0x42d313(0xc14)]||_0x520b7a['style'][_0x42d313(0xc14)]===_0x5f2018['Rutqv']){if(_0x5f2018[_0x42d313(0x6b0)](_0x5f2018['aAMQw'],'jsdfd'))_0x21a7f2[_0x42d313(0xc14)]=_0x5f2018['emVww'](window['inner'+'Heigh'+'t']||-0x1719+-0x2f8+-0x1*-0x1a11,_0x520b7a['offse'+_0x42d313(0x842)+'ht']||0x21a9+-0x1094*-0x1+-0x30ad)-(0x1*0x1352+-0x16*0x115+0x1*0x494);else{_0x5e98b8[_0x454254]=_0x5f2018['AiKmB']('0x',_0x1c74a2[_0x403b17][_0x42d313(0x87e)][_0x42d313(0x252)+_0x42d313(0x74d)](-0x95f*-0x1+-0x1f*-0x57+-0x13d8));if(_0x10ea39[_0x59f242]['repla'+_0x42d313(0x745)])_0x24f988[_0x42d313(0x499)](_0x35eca4);}}_0x5014fa=_0x5f2018['emVww'](_0x4242c8['clien'+'tX']||0x13*-0xc9+0x135e+-0x473,_0x21a7f2['left']),_0x253151=_0x5f2018['NNTDK'](_0x4242c8['clien'+'tY']||-0x2*-0xd9e+-0x23f3*-0x1+-0x3f2f*0x1,_0x21a7f2[_0x42d313(0xc14)]);try{_0x4242c8['preve'+_0x42d313(0x335)+_0x42d313(0x6ec)]();}catch(_0x3c58e7){}}},_0x10f159=function(_0x3f1a60){var _0x44ff4b=_0x575efc,_0x5dd902={'QfhsD':function(_0x20ad4,_0x2b174f){return _0x20ad4||_0x2b174f;}};if(_0x2f44ee['EJxbM'](_0x2f44ee['nWjnP'],_0x44ff4b(0xb69))){if(!_0x2cfb69)return;var _0x1c5ffd=_0x520b7a[_0x44ff4b(0x384)+'tWidt'+'h']||0x1692+-0xbd+-0x1369,_0x3d3193=_0x520b7a[_0x44ff4b(0x384)+'tHeig'+'ht']||0x1f74+0xd5c+0x40*-0xad,_0x59f9a2=_0x2f44ee[_0x44ff4b(0x8d9)](_0x3f1a60[_0x44ff4b(0x903)+'tX']||0x144e+-0x25c4+0x1176,_0x5014fa),_0x5968bb=(_0x3f1a60['clien'+'tY']||-0x1024+0x20e7*0x1+-0x10c3)-_0x253151;_0x59f9a2=Math['max'](-0x1*-0x2057+0x3*-0xb1+-0x1e3c,Math['min'](_0x2f44ee[_0x44ff4b(0x9e2)]((window[_0x44ff4b(0x941)+'Width']||0x1*-0xacf+-0x472+-0x163*-0xb)-_0x1c5ffd,-0x921+0x15b0+-0x1*0xc87),_0x59f9a2)),_0x5968bb=Math[_0x44ff4b(0x57a)](-0x1a1*-0x15+0x137d+-0x35aa,Math['min']((window[_0x44ff4b(0x941)+'Heigh'+'t']||0x8*0x31+-0x2*0x185+0x182)-_0x3d3193-(0xc2f*0x1+0x26*0x8+-0xd57),_0x5968bb)),_0x520b7a['style']['left']=_0x2f44ee[_0x44ff4b(0x5cc)](_0x59f9a2,'px'),_0x520b7a[_0x44ff4b(0x995)][_0x44ff4b(0xc14)]=_0x5968bb+'px',_0x520b7a['style'][_0x44ff4b(0x9ff)]='auto',_0x520b7a[_0x44ff4b(0x995)][_0x44ff4b(0x273)+'m']=_0x2f44ee['zIuvW'],_0x490e1c[_0x44ff4b(0xc63)]={'x':_0x59f9a2,'y':_0x5968bb};}else{if(_0x5dd902[_0x44ff4b(0x31f)](!_0x3ba5d4,!_0x387f6f))return null;var _0x3eb9dd=new _0x52ef48(_0x54853d)[_0x44ff4b(0xc74)+'assNa'+'me']();return _0x3eb9dd===_0x123b13?null:_0x3eb9dd;}},_0x271f96=function(){var _0x4e877f=_0x575efc;if(_0x2f44ee['TkFfJ'](_0x2f44ee[_0x4e877f(0x845)],'empif'))_0x2aaa19['left']=_0x5f2018[_0x4e877f(0x1fb)]((_0x531da6[_0x4e877f(0x941)+_0x4e877f(0xc07)]||-0x1a54*-0x1+0xd*0x10f+0x3a5*-0xb)-(_0xb4810d[_0x4e877f(0x384)+'tWidt'+'h']||-0x16*-0x1+-0x35*-0x7f+0x17f5*-0x1),-0x41b+0x1593+-0x1160);else{if(!_0x2cfb69)return;_0x2cfb69=![],_0x3533f7['style'][_0x4e877f(0x884)+'r']=_0x2f44ee[_0x4e877f(0x1c0)],_0x54ee19();}};_0x3533f7[_0x575efc(0xad2)+'entLi'+'stene'+'r'](_0x2f44ee[_0x575efc(0xb56)],_0xbbd9d4),window['addEv'+_0x575efc(0x9ee)+'stene'+'r']('mouse'+_0x575efc(0x7fb),_0x10f159),window[_0x575efc(0xad2)+_0x575efc(0x9ee)+'stene'+'r'](_0x2f44ee['xsbps'],_0x271f96),_0x3533f7['addEv'+'entLi'+'stene'+'r'](_0x575efc(0x5bb)+_0x575efc(0x85a),_0xbbd9d4,{'passive':![]}),window[_0x575efc(0xad2)+'entLi'+_0x575efc(0xcf2)+'r'](_0x575efc(0x5bb)+_0x575efc(0x7fb),_0x10f159,{'passive':![]}),window[_0x575efc(0xad2)+_0x575efc(0x9ee)+_0x575efc(0xcf2)+'r'](_0x575efc(0x5bb)+'end',_0x271f96);}catch(_0xd20d64){}}function _0x268517(){var _0xfdcb44=_0x3e9452,_0x3bae18={'gSPFi':_0xfdcb44(0xb8d)+_0xfdcb44(0x3c4)+_0xfdcb44(0x2c0)+_0xfdcb44(0xb17)+')','gtfLl':function(_0x59fd1e,_0x768900){var _0x2eeade=_0xfdcb44;return _0x2f44ee[_0x2eeade(0xd2f)](_0x59fd1e,_0x768900);},'Mqrkv':function(_0x3f22a1,_0x4da4c2){var _0x57f11d=_0xfdcb44;return _0x2f44ee[_0x57f11d(0xd0b)](_0x3f22a1,_0x4da4c2);},'pXsEt':function(_0x586ec2,_0x4f72e1){return _0x2f44ee['oGhnH'](_0x586ec2,_0x4f72e1);},'PQrPG':function(_0x1ac7d2,_0x244382){return _0x2f44ee['QMBgY'](_0x1ac7d2,_0x244382);},'tVlEn':_0xfdcb44(0x4ae),'DZFdv':function(_0x3b2ce0,_0x16711b){return _0x2f44ee['XIsbw'](_0x3b2ce0,_0x16711b);},'CqjtM':function(_0xbece52,_0x1dac5c){return _0xbece52+_0x1dac5c;},'RblaR':_0x2f44ee['UwDoR'],'SzVSi':function(_0x1cf9fc,_0x13e881){var _0x1e36be=_0xfdcb44;return _0x2f44ee[_0x1e36be(0xcb8)](_0x1cf9fc,_0x13e881);},'noMfi':'obfF','yqXME':function(_0x322b30){return _0x322b30();}};if(_0x2f44ee[_0xfdcb44(0xb21)]!==_0xfdcb44(0xba9)){if(_0x490e1c[_0xfdcb44(0xc3d)])return _0x490e1c[_0xfdcb44(0x9c2)];try{if(!document['body']||!document['body']['appen'+_0xfdcb44(0x25d)+'d'])return null;if(!document[_0xfdcb44(0x397)+_0xfdcb44(0x1e1)+_0xfdcb44(0xcd0)](_0x2f44ee['MqENQ'])){var _0x497def=document[_0xfdcb44(0x97b)+'eElem'+'ent'](_0x2f44ee['htaMY']);_0x497def['id']=_0xfdcb44(0x9f1)+_0xfdcb44(0xb57)+'u-css',_0x497def[_0xfdcb44(0x7bd)+'onten'+'t']=_0x375e4d,(document[_0xfdcb44(0xd02)]||document[_0xfdcb44(0x358)+'entEl'+_0xfdcb44(0x1e1)])[_0xfdcb44(0x3d7)+_0xfdcb44(0x25d)+'d'](_0x497def);}var _0x14dd1c=_0x2d70c9('div','mn-pa'+_0xfdcb44(0x7c3));_0x14dd1c['id']=_0xfdcb44(0x9f1)+'a-men'+_0xfdcb44(0x2e8)+'t';var _0x395d97=_0x2d70c9(_0xfdcb44(0xbf0),_0xfdcb44(0xdfd)+'de'),_0x114f96=_0x2d70c9(_0x2f44ee[_0xfdcb44(0x81d)],_0x2f44ee[_0xfdcb44(0x9a7)],_0xfced95);_0x395d97['appen'+_0xfdcb44(0x25d)+'d'](_0x114f96);var _0x571f59=_0x2f44ee['faTgL'](_0x2d70c9,_0x2f44ee['WAbSG'],_0x2f44ee[_0xfdcb44(0x736)]),_0x486e45=_0x2d70c9('div',_0x2f44ee[_0xfdcb44(0xb7d)]),_0x27a8e6=_0x2d70c9(_0x2f44ee[_0xfdcb44(0x81d)],'mn-ti'+'tles'),_0x5d92f2=_0x2f44ee[_0xfdcb44(0x91e)](_0x2d70c9,_0x2f44ee['WAbSG'],_0xfdcb44(0x3a0),_0xfdcb44(0xc17)+'a\x20Ski'+'llWar'+'z'),_0x2e9fe5=_0x2f44ee[_0xfdcb44(0x48f)](_0x2d70c9,_0xfdcb44(0xbf0),_0xfdcb44(0x7fe)+'b',_0xfdcb44(0x85a)+_0xfdcb44(0x4ef));_0x27a8e6[_0xfdcb44(0x3d7)+_0xfdcb44(0x25d)+'d'](_0x5d92f2),_0x27a8e6[_0xfdcb44(0x3d7)+'dChil'+'d'](_0x2e9fe5);var _0x38c286=_0x2d70c9(_0xfdcb44(0xbf0),_0x2f44ee[_0xfdcb44(0x2ec)],_0x2f44ee[_0xfdcb44(0x475)]);_0x38c286[_0xfdcb44(0x930)+'ck']=function(){var _0x40ee52=_0xfdcb44;_0x2f44ee['HYpey'](_0x2f44ee[_0x40ee52(0x865)],_0x2f44ee['hkoNS'])?_0x356659(![]):(_0xf1c57d[_0x40ee52(0xc6b)+'tyle']=_0x3bae18[_0x40ee52(0xc5c)],_0xe2182['font']=_0x40ee52(0x24d)+'ui-mo'+'nospa'+_0x40ee52(0x6f4)+_0x40ee52(0xa54)+_0x40ee52(0x522)+'ospac'+'e',_0x97cfc0[_0x40ee52(0x367)+'ext'](_0x3bae18[_0x40ee52(0xc5f)](_0x20416a[_0x40ee52(0x716)](_0x1ad570['d']||-0x11*-0x241+-0x1f52+0x9*-0xc7),'m'),_0x3bae18[_0x40ee52(0x63b)](_0x5c9b1f,_0x3bae18['pXsEt'](_0x479718,0x1639*-0x1+0x261+0x13da)),_0x3bae18['PQrPG'](_0x5cbac6-_0x2d93dd/(-0xfd7+-0x1*0x16eb+0x33b*0xc),-0x5f*-0x29+-0x1*-0x24dd+0x115b*-0x3)));},_0x486e45[_0xfdcb44(0x3d7)+'dChil'+'d'](_0x27a8e6),_0x486e45[_0xfdcb44(0x3d7)+'dChil'+'d'](_0x38c286);var _0x3d8b7a=_0x2f44ee[_0xfdcb44(0x689)](_0x2d70c9,_0x2f44ee[_0xfdcb44(0x81d)],'mn-co'+'ls');_0x571f59[_0xfdcb44(0x3d7)+'dChil'+'d'](_0x486e45),_0x571f59['appen'+_0xfdcb44(0x25d)+'d'](_0x3d8b7a),_0x14dd1c[_0xfdcb44(0x3d7)+_0xfdcb44(0x25d)+'d'](_0x395d97),_0x14dd1c[_0xfdcb44(0x3d7)+'dChil'+'d'](_0x571f59),document[_0xfdcb44(0x99d)][_0xfdcb44(0x3d7)+_0xfdcb44(0x25d)+'d'](_0x14dd1c),_0x490e1c[_0xfdcb44(0x9c2)]=_0x14dd1c,_0x490e1c['cols']=_0x3d8b7a,_0x490e1c['head']=_0x5d92f2,_0x490e1c[_0xfdcb44(0xc09)]=_0x2e9fe5,_0x2f44ee[_0xfdcb44(0x8df)](_0x4f9c1d),_0x2f44ee[_0xfdcb44(0x60f)](_0x4963d4),_0x132dd3(_0x14dd1c,_0x486e45);var _0x57639a={};for(var _0x56d14c=0x655*-0x3+-0x21b5*0x1+0x34b4;_0x2f44ee['FmbTY'](_0x56d14c,_0x59dee2['lengt'+'h']);_0x56d14c++){if(_0x2f44ee['hdDof']===_0xfdcb44(0x730)){var _0x55f130=_0x59dee2[_0x56d14c],_0x2a9006=_0x2d70c9(_0x2f44ee[_0xfdcb44(0xd55)],'mn-ta'+'b',_0x2f44ee[_0xfdcb44(0x3dd)]('<smal'+'l>',_0x55f130['label'])+('</sma'+_0xfdcb44(0x9a8)));_0x2a9006[_0xfdcb44(0xd51)]=_0x2f44ee['vWTYT'],_0x2a9006[_0xfdcb44(0x5da)]=_0x55f130['label'],function(_0x13d86c){var _0x35d8eb=_0xfdcb44,_0x2d1df2={'tcHRV':'1|5|7'+_0x35d8eb(0x7f7)+_0x35d8eb(0x5db),'bxHzm':function(_0x575d96,_0x3ba289){return _0x3bae18['CqjtM'](_0x575d96,_0x3ba289);},'znpFa':_0x35d8eb(0xd08),'zfxow':_0x35d8eb(0xb9d),'LBbNk':_0x3bae18[_0x35d8eb(0x577)],'AjYer':function(_0x5abfa8,_0x34ecb9,_0x30b9cc,_0x354b9a){return _0x5abfa8(_0x34ecb9,_0x30b9cc,_0x354b9a);},'DOQBL':function(_0x39bcd9,_0xdf9027){return _0x3bae18['SzVSi'](_0x39bcd9,_0xdf9027);},'LXvFJ':_0x3bae18['noMfi'],'CokWQ':function(_0x1b89ac,_0x413b62){return _0x1b89ac(_0x413b62);},'wmoMl':function(_0x9e8fec,_0x2d9071){return _0x9e8fec===_0x2d9071;}};_0x2a9006['oncli'+'ck']=function(){var _0x198ba9=_0x35d8eb;if(_0x198ba9(0x4ae)===_0x3bae18['tVlEn'])_0x3bae18[_0x198ba9(0x320)](_0x27cccf,_0x13d86c);else{var _0xefb985=_0x2d1df2[_0x198ba9(0x7c9)]['split']('|'),_0x1011ae=0xa2b+-0x35d+0xd*-0x86;while(!![]){switch(_0xefb985[_0x1011ae++]){case'0':return _0x39a3b8(_0x2d1df2['bxHzm'](_0x4f72ec+_0x340dc7,_0x362854['hidde'+'n']),_0x2d1df2[_0x198ba9(0x95e)],_0x1db055^_0x2f821a)&&_0x51f6b9(_0xc9dc40+_0x673513+_0x362854[_0x198ba9(0xa46)],_0x5d7a6b==='obfF'?_0x2d1df2['zfxow']:_0x4b1a81===_0x2d1df2['LBbNk']?_0x198ba9(0xd08):'u8',_0x1a93d4==='obfF'?_0x22f895:_0x5e76e0==='obfI'?_0x329b04|-0x1a*-0x16a+0xad9+-0x2f9d:_0x10eeb6?-0x4b1*0x7+-0x1adc+0x1*0x3bb4:0xa58+0x502*0x4+-0x1e60)&&_0x2d1df2['AjYer'](_0xcb1e0,_0x58cb2b+_0x2b8a0a+_0x362854['activ'+'e'],'u8',0x2a1+-0x1e26+-0x1b85*-0x1);case'1':var _0x362854=_0x21f265[_0x1e2247];continue;case'2':if(_0x2d1df2[_0x198ba9(0xbfd)](_0x2fc577,_0x2d1df2[_0x198ba9(0xa1d)]))_0x1db055=_0x2d1df2[_0x198ba9(0x7c4)](_0x1b0ac5,_0x28063c);else{if(_0x36819c==='obfI')_0x1db055=_0x320b57|0x2327+-0x1fcd+-0x1a*0x21;else _0x1db055=(_0xcc7b0?-0xe9e+0x1*0x1525+0x686*-0x1:0x130a+0x1523+-0x282d)&0x1834+-0x5e3+-0x8a9*0x2;}continue;case'3':var _0x2f821a=_0x2d1df2[_0x198ba9(0x8c1)](_0x362854[_0x198ba9(0xb5c)+'pe'],'u8')?_0x5c9535[_0x198ba9(0xc57)+_0x198ba9(0x638)](_0x362854[_0x198ba9(0x5c9)]):_0x5c9535['getIn'+'t32'](_0x362854[_0x198ba9(0x5c9)],!![]);continue;case'4':var _0x5c9535=new _0x14ac28(_0x3658c9['buffe'+'r'],_0x3658c9[_0x198ba9(0x73b)+_0x198ba9(0x202)],_0x3658c9[_0x198ba9(0xc1b)+'ength']);continue;case'5':var _0x3658c9=_0xc9dfd9(_0x3a39c5,_0x329f67,_0x362854[_0x198ba9(0xae9)]);continue;case'6':var _0x1db055;continue;case'7':if(!_0x3658c9)return![];continue;}break;}}};}(_0x55f130['id']),_0x57639a[_0x55f130['id']]=_0x2a9006,_0x395d97[_0xfdcb44(0x3d7)+_0xfdcb44(0x25d)+'d'](_0x2a9006);}else return![];}_0x490e1c['butto'+'ns']=_0x57639a;var _0x394cf7=_0x2f44ee['rdxWw'](_0x2d70c9,'div',null,_0x5dd588);return _0x394cf7['id']=_0xfdcb44(0x9f1)+_0xfdcb44(0x313)+'al',_0x394cf7[_0xfdcb44(0x5da)]=_0x2f44ee[_0xfdcb44(0xa5c)],_0x394cf7['onmou'+_0xfdcb44(0x66d)+'er']=function(){var _0x5aef33=_0xfdcb44;if(_0x2f44ee[_0x5aef33(0xa49)]===_0x2f44ee[_0x5aef33(0x66c)]){var _0xd3f4bf=_0x3bae18['yqXME'](_0x25de8a);return _0xd3f4bf&&_0xd3f4bf['feet']?_0xd3f4bf['feet'][-0xf67*0x2+-0xeb2+-0x1*-0x2d81]:null;}else _0x394cf7[_0x5aef33(0x995)][_0x5aef33(0x5ce)+'ty']='1';},_0x394cf7[_0xfdcb44(0x76e)+_0xfdcb44(0x639)+'ve']=function(){var _0x5a6050=_0xfdcb44;_0x394cf7['style'][_0x5a6050(0x5ce)+'ty']=_0x490e1c[_0x5a6050(0x663)]?'1':'.5';},_0x394cf7[_0xfdcb44(0x930)+'ck']=function(_0x1b6b2f){var _0x5a70b3=_0xfdcb44;if(_0x1b6b2f&&_0x1b6b2f['stopP'+_0x5a70b3(0x98e)+'ation'])_0x1b6b2f[_0x5a70b3(0x349)+_0x5a70b3(0x98e)+_0x5a70b3(0x8c6)]();_0x356659(!_0x490e1c['open']);},document[_0xfdcb44(0x99d)][_0xfdcb44(0x3d7)+_0xfdcb44(0x25d)+'d'](_0x394cf7),_0x490e1c['petal']=_0x394cf7,_0x2f44ee['DNZgs'](setInterval,function(){var _0x2db2fa=_0xfdcb44;try{if(!_0x490e1c['petal'])return;var _0x6e3a8a=_0x389461();_0x490e1c['petal'][_0x2db2fa(0x995)][_0x2db2fa(0x5ce)+'ty']=_0x490e1c[_0x2db2fa(0x663)]?'1':_0x6e3a8a?'.8':_0x2db2fa(0xcd6),_0x490e1c['petal']['title']=_0x6e3a8a?_0x2db2fa(0xc17)+'a\x20Ski'+'llWar'+'z\x20(In'+_0x2db2fa(0x836):_0x2f44ee[_0x2db2fa(0x4d3)];}catch(_0x1c7477){}},0x3d*0x11+-0x377*0x1+-0xb*-0x32),_0x490e1c[_0xfdcb44(0xc3d)]=!![],_0x2f44ee[_0xfdcb44(0xb6f)](_0x27cccf,_0x490e1c['cat']),_0x14dd1c;}catch(_0x49697c){return console[_0xfdcb44(0x8c0)](_0xfdcb44(0x36e)+_0xfdcb44(0x821)+_0xfdcb44(0x56c)+'\x20unav'+_0xfdcb44(0x8eb)+'le',_0xfdcb44(0xe02)+':'+_0x4e9faa,_0x49697c),null;}}else{_0x132e5e['preve'+_0xfdcb44(0x335)+_0xfdcb44(0x6ec)](),_0x113831(_0xfdcb44(0x257)+_0xfdcb44(0xcbd));return;}}function _0x27cccf(_0x2cedc5){var _0x120924=_0x3e9452,_0x548762={'VlEGx':function(_0x2e5579,_0x392939){var _0x339ff2=_0x23db;return _0x2f44ee[_0x339ff2(0xd20)](_0x2e5579,_0x392939);}};if(_0x2f44ee[_0x120924(0x850)](_0x120924(0x76b),_0x2f44ee[_0x120924(0x811)])){var _0x1ecb8b=_0x149c54[_0x120924(0xa64)+'Selec'+_0x120924(0x662)+'l'](_0x120924(0xa48)+'e');for(var _0x153803=-0x1*0x14db+-0x1b6d*-0x1+-0x692;_0x548762[_0x120924(0x9ea)](_0x153803,_0x1ecb8b['lengt'+'h']);_0x153803++){try{if(_0x1ecb8b[_0x153803]['conte'+'ntWin'+_0x120924(0x796)])_0x1ecb8b[_0x153803]['conte'+_0x120924(0x80a)+_0x120924(0x796)][_0x120924(0xb7c)+_0x120924(0x623)+'e'](_0x3ab427,'*');}catch(_0x3a7c22){}}}else{var _0xa81bfc=(_0x120924(0x375)+_0x120924(0x3d2)+'|4|0|'+_0x120924(0x510)+'|2')[_0x120924(0x33c)]('|'),_0x168455=-0x252d+0x10e4*0x1+0x1449;while(!![]){switch(_0xa81bfc[_0x168455++]){case'0':for(var _0x16131f in _0x490e1c[_0x120924(0xc1d)+'ns']){if(_0x490e1c[_0x120924(0xc1d)+'ns'][_0x16131f][_0x120924(0x94b)+'List'])_0x490e1c[_0x120924(0xc1d)+'ns'][_0x16131f]['class'+_0x120924(0x318)]=_0x2f44ee['AOVni'](_0x120924(0xc2b)+'b',_0x16131f===_0x2cedc5?'\x20acti'+'ve':'');}continue;case'1':var _0x37db2a=null;continue;case'2':for(var _0x250a7f=0x1323+0x3b*0x34+0x101*-0x1f;_0x250a7f<_0x57eeba['lengt'+'h'];_0x250a7f++)_0x490e1c['cols'][_0x120924(0x3d7)+_0x120924(0x25d)+'d'](_0x57eeba[_0x250a7f]);continue;case'3':for(var _0x252941=0x9ae+-0x1150*-0x1+0xd7f*-0x2;_0x252941<_0x59dee2[_0x120924(0x841)+'h'];_0x252941++)if(_0x59dee2[_0x252941]['id']===_0x2cedc5)_0x37db2a=_0x59dee2[_0x252941];continue;case'4':_0x490e1c[_0x120924(0xd02)][_0x120924(0x7bd)+_0x120924(0x284)+'t']=_0x2f44ee['YGBDB']('Sakur'+_0x120924(0x374)+_0x120924(0xd4c)+'z\x20—\x20',_0x37db2a&&_0x37db2a['label']||'?');continue;case'5':try{_0x57eeba=_0x39f9f2(_0x2cedc5);}catch(_0x52633f){_0x57eeba=[];}continue;case'6':_0x490e1c[_0x120924(0x5af)]=[];continue;case'7':if(!_0x490e1c[_0x120924(0x5f0)])return;continue;case'8':var _0x57eeba=[];continue;case'9':while(_0x490e1c[_0x120924(0x5f0)][_0x120924(0x3df)+_0x120924(0x9a4)])_0x490e1c['cols'][_0x120924(0x5bd)+_0x120924(0x3eb)+'d'](_0x490e1c[_0x120924(0x5f0)]['first'+'Child']);continue;case'10':_0x490e1c['cat']=_0x2cedc5;continue;}break;}}}function _0x356659(_0x34a423){var _0x4f84a2=_0x3e9452,_0x2ecbfc=(_0x4f84a2(0xce9)+'|1|4|'+'5')['split']('|'),_0x5e567e=-0xa54+0x1*0xcd+0x987;while(!![]){switch(_0x2ecbfc[_0x5e567e++]){case'0':_0x490e1c[_0x4f84a2(0x663)]=!!_0x34a423;continue;case'1':_0x4db025['class'+_0x4f84a2(0x318)]=_0x4f84a2(0x26c)+_0x4f84a2(0x7c3)+(_0x490e1c['open']?_0x2f44ee[_0x4f84a2(0x7e4)]:'');continue;case'2':var _0x4db025=_0x2f44ee[_0x4f84a2(0x454)](_0x268517);continue;case'3':if(!_0x4db025)return;continue;case'4':if(_0x490e1c[_0x4f84a2(0x67e)])_0x490e1c[_0x4f84a2(0x67e)]['style'][_0x4f84a2(0x5ce)+'ty']=_0x490e1c[_0x4f84a2(0x663)]?'1':'.5';continue;case'5':if(_0x490e1c[_0x4f84a2(0x663)]){_0x2f44ee[_0x4f84a2(0x49f)](_0x27cccf,_0x490e1c['cat']);try{var _0x549f94=window['inner'+_0x4f84a2(0x8c2)+'t']||0x2*-0xa47+0x7d6+0xa9*0x18;if(_0x549f94<0x5fa+-0xa6a+0x6dc)_0x2f44ee[_0x4f84a2(0x28a)](_0x5c2d05,![]);}catch(_0x46c7cc){}}continue;}break;}}function _0x299e4e(){var _0x320635=_0x3e9452;if(!_0x490e1c['open']||!_0x490e1c[_0x320635(0xc3d)])return;try{for(var _0x4d40bd=-0x217c+-0x8*0x361+0x3c84;_0x2f44ee['WWKNl'](_0x4d40bd,_0x490e1c[_0x320635(0x5af)]['lengt'+'h']);_0x4d40bd++){try{_0x490e1c[_0x320635(0x5af)][_0x4d40bd]();}catch(_0x332887){}}var _0x23dbd1=_0x3ab911;_0x490e1c[_0x320635(0xc09)]['textC'+'onten'+'t']=_0x23dbd1?_0x2f44ee[_0x320635(0x498)](_0x2f44ee[_0x320635(0xa1b)](_0x2f44ee[_0x320635(0x5bf)](_0x2f44ee['yLaFj']('v',_0x23dbd1['versi'+'on'])+('\x20\x20·\x20\x20'+_0x320635(0x9e4)+'\x20')+_0x23dbd1['hooks'+_0x320635(0x765)+'ed'],'/')+_0x23dbd1[_0x320635(0x9e4)+_0x320635(0xde0)],_0x320635(0x2ff)+_0x320635(0xd31)+_0x320635(0x51d))+(_0x23dbd1['esp']&&_0x23dbd1['esp'][_0x320635(0xd31)+_0x320635(0x513)+'t']||-0x262*0x1+0x1d1*0xa+-0xca*0x14),_0x320635(0x2ff)+_0x320635(0xa8b))+(_0x23dbd1[_0x320635(0x6dd)+'emory']&&_0x23dbd1['wasmM'+_0x320635(0xb20)][_0x320635(0x429)+_0x320635(0x785)]?Math[_0x320635(0x716)](_0x2f44ee[_0x320635(0xa28)](_0x23dbd1[_0x320635(0x6dd)+_0x320635(0xb20)]['bytes'],0x111d7e+-0x718eb+0x5fb6d))+'MB':'-'):_0x2f44ee[_0x320635(0x2af)];var _0x224473=_0x490e1c[_0x320635(0x5f0)]['query'+'Selec'+'torAl'+'l']?_0x490e1c[_0x320635(0x5f0)][_0x320635(0xa64)+_0x320635(0x79f)+'torAl'+'l'](_0x2f44ee['ngLcG']):[];for(var _0x41e621=-0x5*-0x54+-0x5*0x306+0xd7a;_0x41e621<_0x224473['lengt'+'h'];_0x41e621++){var _0x544970=_0x224473[_0x41e621][_0x320635(0xd4e)+'et']['k'],_0x2e7225='';if(_0x2f44ee['xlKjB'](_0x544970,_0x2f44ee['olDEK']))_0x2e7225=_0x23dbd1?_0x23dbd1['versi'+'on']:'-';else{if(_0x544970===_0x320635(0x994)+'ed\x20/\x20'+'regis'+'tered')_0x2e7225=_0x23dbd1?_0x2f44ee['tAuWY'](_0x23dbd1[_0x320635(0x9e4)+_0x320635(0x765)+'ed']+_0x2f44ee['gBbJJ'],_0x23dbd1['hooks'+'Regis'+_0x320635(0x7d8)+_0x320635(0xa5b)]):'-';else{if(_0x2f44ee[_0x320635(0x756)](_0x544970,'from\x20'+_0x320635(0xd84)+'ntiat'+'e()'))_0x2e7225=_0x23dbd1&&_0x23dbd1[_0x320635(0x6dd)+_0x320635(0xb20)]&&_0x23dbd1[_0x320635(0x6dd)+_0x320635(0xb20)]['captu'+'red']?_0x2f44ee[_0x320635(0x486)](Math[_0x320635(0x716)](_0x23dbd1[_0x320635(0x6dd)+_0x320635(0xb20)][_0x320635(0xab7)]/(0x1*0xdac33+0x76a4e+-0x51681)),_0x2f44ee['wnaVT'])+_0x23dbd1[_0x320635(0x6dd)+_0x320635(0xb20)][_0x320635(0x8d1)]+'ms':'-';else{if(_0x2f44ee['egFsY'](_0x544970,_0x2f44ee[_0x320635(0x60d)]))_0x2e7225=_0x23dbd1&&_0x23dbd1[_0x320635(0xaa1)]?String(_0x23dbd1[_0x320635(0xaa1)][_0x320635(0xd31)+'rCoun'+'t']):'-';else{if(_0x544970==='every'+'one\x20b'+_0x320635(0xa79)+'u')_0x2e7225=_0x23dbd1&&_0x23dbd1[_0x320635(0xaa1)]?String(_0x23dbd1['esp'][_0x320635(0xbcc)+'Count']):'-';else{if(_0x544970===_0x2f44ee[_0x320635(0x61a)])_0x2e7225=_0x23dbd1&&_0x23dbd1[_0x320635(0xaa1)]&&_0x23dbd1[_0x320635(0xaa1)][_0x320635(0x708)+'a']?_0x2f44ee['oYJYK'](_0x2f44ee[_0x320635(0x939)](_0x23dbd1['esp'][_0x320635(0x708)+'a'],'\x20(')+_0x23dbd1[_0x320635(0xaa1)][_0x320635(0x708)+'aFrom'],')'):'-';else{if(_0x544970===_0x2f44ee['GDgiO'])_0x2e7225=_0x23dbd1&&_0x23dbd1['local']&&_0x23dbd1['local']['feet']?_0x23dbd1['local']['feet'][_0x320635(0x301)](function(_0x4f4bb4){var _0x3041d5=_0x320635;return Math[_0x3041d5(0x716)](_0x4f4bb4*(-0x5*0x65+-0x1c6*-0x2+-0x12f))/(0x2c2+-0x1*0x24e9+-0x25*-0xef);})[_0x320635(0xc01)]('\x20\x20'):'-';else{if(_0x544970===_0x2f44ee[_0x320635(0x6f8)])_0x2e7225=_0x23dbd1&&_0x23dbd1[_0x320635(0x46c)]&&_0x23dbd1['local']['eye']?_0x23dbd1[_0x320635(0x46c)][_0x320635(0x7d9)][_0x320635(0x301)](function(_0x464ed3){var _0x56e192=_0x320635;return Math[_0x56e192(0x716)](_0x464ed3*(-0x1392+0x349*-0x1+0x173f))/(0x5f*-0x64+0x1a16+0xb6a);})['join']('\x20\x20'):'-';else{if(_0x2f44ee[_0x320635(0xd61)]('MhhwP',_0x320635(0x44b))){var _0x3ad98f=_0x544970[_0x320635(0x33c)]('+');_0x2e7225=_0x57e997(_0x23dbd1,_0x3ad98f[-0x2*-0x5de+-0x22ea+-0x8a*-0x2b]['index'+'Of'](_0x2f44ee['VnCnj'])===-0x2*0xc6a+-0x141c+0x2cf0?_0x320635(0x7d1)+'hScri'+'pt':_0x320635(0x711)+'ntrol'+_0x320635(0x660),_0x2f44ee['CSxne'](parseInt,_0x3ad98f[-0x83*-0x23+-0x20ba+0xe*0x10f],0x1*-0xa10+0xd1b+0x7*-0x6d));}else{var _0x1314c5=arguments[_0x5ebfec];if(_0x2f44ee['xkEHQ'](typeof _0x1314c5,_0x320635(0x74e)+'g'))_0x251a45+=_0x1314c5;else{if(_0x1314c5&&_0x1314c5['messa'+'ge'])_0x2844cc+=_0x1314c5[_0x320635(0x388)+'ge'];}}}}}}}}}}if(_0x2e7225!==_0x224473[_0x41e621]['textC'+'onten'+'t'])_0x224473[_0x41e621][_0x320635(0x7bd)+'onten'+'t']=_0x2e7225;}}catch(_0x3044bb){}}function _0x3f8dde(){var _0x1a81ae=_0x3e9452;try{var _0x28785d=_0x2f44ee[_0x1a81ae(0xa34)](_0x48108f);return _0x28785d&&_0x28785d[_0x1a81ae(0xcf4)]?_0x28785d[_0x1a81ae(0xcf4)][0x9*-0xb5+-0x55*-0x14+0x7*-0xa]:null;}catch(_0xfa6c4f){return null;}}var _0x22ab72=-0x16bd*-0x1+0x2*0xe5c+-0x3373*0x1+0.5,_0x13e155=-0x10a4+0x29*0x61+0x121+0.25,_0x25b726={},_0x2e9ed3=null,_0xb5ae23=-0x18f7+0xdb4+0xb44+0.8;function _0x32dd5b(_0x3684f2,_0x2c7f5f,_0x3ec47c){var _0x49b7b1=_0x3e9452,_0x437d9b={'YCCWL':function(_0x14d0ae,_0x579f32){return _0x14d0ae===_0x579f32;},'CTqel':_0x2f44ee[_0x49b7b1(0x753)],'dhRfy':_0x2f44ee[_0x49b7b1(0x4c9)],'yXcvn':function(_0x1b50b7,_0x465510,_0x590d1b){var _0x3d505a=_0x49b7b1;return _0x2f44ee[_0x3d505a(0x731)](_0x1b50b7,_0x465510,_0x590d1b);},'NzZox':function(_0x314ac5,_0x3f6af1,_0x3b5e58,_0x26378c,_0x3caa1d){return _0x314ac5(_0x3f6af1,_0x3b5e58,_0x26378c,_0x3caa1d);},'ixSHV':function(_0x1756e6,_0x4d8cef){return _0x1756e6/_0x4d8cef;},'xtWpV':function(_0x52f3ac,_0x5eb961){return _0x2f44ee['QMBgY'](_0x52f3ac,_0x5eb961);},'bmVtx':function(_0x245cda,_0x3fd4a1){return _0x245cda/_0x3fd4a1;}};try{var _0x173c1f=[],_0x508010,_0x537037,_0x4de24c=_0x2f44ee[_0x49b7b1(0xc7e)](_0x2c7f5f,null)&&_0x2f44ee[_0x49b7b1(0x5cf)](_0x2c7f5f,undefined)&&isFinite(_0x2c7f5f),_0x15bd5a=-0x2292+0x1b93+-0x9*-0xc7;for(_0x508010=0x109c+-0x26e1*-0x1+-0x5*0xb19;_0x2f44ee['lgagy'](_0x508010,_0x3684f2[_0x49b7b1(0x841)+'h']);_0x508010++){if(_0x2f44ee['sOsol']===_0x2f44ee['sOsol']){var _0x5972cb=_0x3684f2[_0x508010]['v'];if(!_0x5972cb)continue;var _0x3adc97=Math['sqrt'](_0x2f44ee[_0x49b7b1(0xb87)](_0x5972cb[-0x10a9+0x64*-0x3a+0x2751]*_0x5972cb[-0x6d*0x24+-0x1f6*0x2+-0x4*-0x4d0],_0x2f44ee['GuqEr'](_0x5972cb[-0x2066+-0xaa3*0x3+-0x5*-0xcdd],_0x5972cb[-0x412*-0x1+-0x5b*0x4f+0x1805])));if(_0x2f44ee[_0x49b7b1(0x372)](_0x3adc97,_0x15bd5a))_0x15bd5a=_0x3adc97;}else try{if(_0x50d4b1[_0xd82925]['conte'+_0x49b7b1(0x80a)+_0x49b7b1(0x796)])_0x3eed77[_0x42fb6f]['conte'+'ntWin'+_0x49b7b1(0x796)][_0x49b7b1(0xb7c)+_0x49b7b1(0x623)+'e'](_0x118abf,'*');}catch(_0x5787d2){}}var _0x3da5d2=_0x15bd5a*(0x2104+-0x1c43+0x4c1*-0x1+0.25),_0x284136=-0x1*-0x1cd1+0x65*0x4a+-0x3a03;_0x2f44ee[_0x49b7b1(0xd7d)](typeof console,_0x2f44ee['SoZkE'])&&console[_0x49b7b1(0x8d3)]&&!globalThis['__ppL'+'ogged']&&(globalThis[_0x49b7b1(0x94e)+_0x49b7b1(0xc52)]=0x3ca+-0x1c2+-0x207,console[_0x49b7b1(0x8d3)](_0x2f44ee['OlRdb'](_0x2f44ee[_0x49b7b1(0x9ba)](_0x2f44ee[_0x49b7b1(0xd4f)](_0x2f44ee[_0x49b7b1(0x810)]+_0x3684f2[_0x49b7b1(0x841)+'h']+_0x2f44ee[_0x49b7b1(0xaa2)],_0x15bd5a[_0x49b7b1(0x2d8)+'ed'](-0x7*0x46a+0x22aa+-0x3c2))+('\x20floo'+'r='),_0x3da5d2['toFix'+'ed'](-0x2557*0x1+0x10fe+0x145b))+('\x20know'+'n='),_0x4de24c)+(_0x49b7b1(0x537)+_0x49b7b1(0x772))+JSON[_0x49b7b1(0x74e)+_0x49b7b1(0x5c0)](_0x3684f2['slice'](-0x2*0x7af+0xbb9*-0x3+0x3289,0x978+-0x10c*-0xa+-0x2*0x9f7))));for(_0x508010=-0x2*-0x103d+-0xda8+-0x49*0x42;_0x508010<_0x3684f2['lengt'+'h'];_0x508010++){var _0x2c244c=_0x3684f2[_0x508010]['v'];if(!_0x2c244c)continue;if(_0x2c244c[0x1*0x102b+-0x29*0x52+-0x1*0x309]===-0x1*0x86b+-0x2d*-0x4b+-0x4c4&&_0x2f44ee[_0x49b7b1(0x20b)](_0x2c244c[0x23d0+0x21df+0x7be*-0x9],-0x1ff0+-0x8fe+0xd*0x326)&&_0x2c244c[0xf7*-0xa+0x13c5*-0x1+-0x3*-0x9cf]===-0xa83*0x3+-0x1d23+0x3cac)continue;var _0x57394c=Math[_0x49b7b1(0xd46)](_0x2f44ee['AtrPf'](_0x2c244c[0x1*0x9e4+0x2137+0x5*-0x89f]*_0x2c244c[-0x2342+0x1*0x127d+0x9*0x1dd],_0x2c244c[0x25*0x49+0x22ff+-0x2d8a]*_0x2c244c[0x237f+0x1*0x1e4d+-0x322*0x15]));if(_0x2f44ee['MEfUB'](_0x57394c,_0x3da5d2)){_0x284136++;continue;}_0x173c1f[_0x49b7b1(0x499)](_0x3684f2[_0x508010]);}if(!_0x173c1f[_0x49b7b1(0x841)+'h'])return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x284136,'ambiguous':![],'reach':0x0,'held':![]};var _0x10a719=[];for(_0x508010=0x73b+0x1501+-0x1c3c;_0x508010<_0x173c1f['lengt'+'h'];_0x508010++){var _0x78bc30=_0x173c1f[_0x508010]['v'],_0x46109a=-(-0x1a7f+0xd2b+0xd55);for(_0x537037=-0x2022+-0x10c3+0x30e5*0x1;_0x2f44ee[_0x49b7b1(0x5ff)](_0x537037,_0x10a719[_0x49b7b1(0x841)+'h']);_0x537037++){var _0x551465=_0x10a719[_0x537037]['c'][0x86*0x2+-0x1f04+0x1df8]['v'],_0x112d57=_0x2f44ee[_0x49b7b1(0x51f)](_0x78bc30[-0x22b8*-0x1+0x50*0x79+-0x4888],_0x551465[-0x12c3+0x19a8+-0x1*0x6e5]),_0x5b5fbb=_0x78bc30[0xc88+-0xb27+-0x160]-_0x551465[0x1d96+-0x5*-0x25f+-0x2970],_0xc23a93=_0x78bc30[0x2063+0x4*0x3fb+-0x304d*0x1]-_0x551465[0x23*-0x9f+-0x1720+0x2cdf];if(_0x2f44ee['XBUhZ'](_0x112d57,_0x112d57)+_0x5b5fbb*_0x5b5fbb+_0xc23a93*_0xc23a93<=_0x13e155){if(_0x2f44ee[_0x49b7b1(0x8f9)](_0x2f44ee[_0x49b7b1(0xb05)],_0x2f44ee['mBYcp'])){_0x46109a=_0x537037;break;}else{if(_0x437d9b[_0x49b7b1(0x699)](_0x7ea5d5[_0x49b7b1(0x93a)],_0x437d9b['CTqel']))_0x161923['hookP'+_0x49b7b1(0xcd5)+'x']({'typeName':_0x437d9b['dhRfy'],'methodName':_0x3f2338['name'],'params':_0xc721b7[_0x49b7b1(0x624)+'arams'],'returnType':_0x1585ba[_0x49b7b1(0x5b0)+'et']},_0x562c86('get',_0x4f424e['name']));else _0x2a74e[_0x49b7b1(0x93a)]===_0x49b7b1(0xb72)&&_0x50ffda[_0x49b7b1(0x5c8)+'s'][_0x49b7b1(0x841)+'h']===-0x5*0x59f+-0xeab+-0x2ac7*-0x1&&_0x519bd6[_0x49b7b1(0x5c8)+'s'][-0x67*0x19+-0xe52+0x1861*0x1]===_0x49b7b1(0x5c7)&&_0x36eba5['hookP'+'refix']({'typeName':'Mouse'+'Look','methodName':_0x4a683e[_0x49b7b1(0xbdc)],'params':_0x25ca03[_0x49b7b1(0x624)+'arams'],'returnType':_0x187557},_0x437d9b['yXcvn'](_0x1391dc,_0x49b7b1(0x67b),_0xdcf2c['name']));}}}if(_0x46109a===-(0x1c2d*-0x1+-0xeea+0x2b18))_0x10a719['push']({'c':[_0x173c1f[_0x508010]]});else _0x10a719[_0x46109a]['c']['push'](_0x173c1f[_0x508010]);}var _0xb1dfe4=_0x10a719[0x4*-0x4ca+-0x1*-0x1152+0x1d6],_0x4aa88f=-Infinity;for(_0x537037=-0xb57+-0xb01+0x1658;_0x2f44ee[_0x49b7b1(0x976)](_0x537037,_0x10a719['lengt'+'h']);_0x537037++){var _0x78685a=_0x10a719[_0x537037]['c'],_0x57eb25=_0x78685a[_0x49b7b1(0x841)+'h']*(0x1191+-0x6f1+0x4*-0x1ae);if(_0x4de24c){var _0x48b83e=Infinity;for(var _0x26114c=-0x934*0x2+0x5*-0x6ef+0x3513;_0x26114c<_0x78685a[_0x49b7b1(0x841)+'h'];_0x26114c++){var _0x498c35=Math[_0x49b7b1(0x894)](_0x2f44ee[_0x49b7b1(0x28c)](_0x78685a[_0x26114c]['v'][0xe67+-0x20dc+0x1276],_0x2c7f5f));if(_0x498c35<_0x48b83e)_0x48b83e=_0x498c35;}_0x57eb25-=_0x48b83e;}else{var _0x405e1b=-0x3*-0x58c+-0x5c9*0x2+0x289*-0x2;for(var _0x5910fd=-0x15a5+-0x16*-0x80+0xaa5;_0x2f44ee[_0x49b7b1(0x314)](_0x5910fd,_0x78685a['lengt'+'h']);_0x5910fd++){if(_0x49b7b1(0x407)!==_0x2f44ee['OqLle']){var _0x509a6f=Math[_0x49b7b1(0xd46)](_0x78685a[_0x5910fd]['v'][0x3*-0x71f+0x96e+0xbef]*_0x78685a[_0x5910fd]['v'][-0x1110+0x1*0x25c4+-0x14b4]+_0x2f44ee[_0x49b7b1(0x73c)](_0x78685a[_0x5910fd]['v'][-0x1254+0x3a*-0x67+-0x2fa*-0xe],_0x78685a[_0x5910fd]['v'][0xc*-0x5+0x229a+-0x3*0xb74]));if(_0x509a6f>_0x405e1b)_0x405e1b=_0x509a6f;}else _0xa52908();}_0x57eb25+=_0x405e1b;}_0x57eb25>_0x4aa88f&&(_0x4aa88f=_0x57eb25,_0xb1dfe4=_0x10a719[_0x537037]);}var _0x3b7e42=_0xb1dfe4['c'][-0x95f*0x3+0x21bf+-0x5a2],_0x4934f0=-(0x49*0x1+-0x177c+0x6c*0x37);for(_0x537037=0x406*-0x4+0x1*0xdec+0x22c;_0x537037<_0xb1dfe4['c']['lengt'+'h'];_0x537037++){if(_0x2f44ee['FHpQu'](_0x49b7b1(0x417),_0x49b7b1(0x417))){var _0x27723e=_0xb1dfe4['c'][_0x537037]['v'],_0x1389ae=Math['sqrt'](_0x2f44ee[_0x49b7b1(0xa7a)](_0x27723e[0x136b+0x1cd1+-0x31*0xfc],_0x27723e[0x503*-0x2+0x45a+0x16*0x42])+_0x2f44ee[_0x49b7b1(0x8cc)](_0x27723e[0x25f9+0x1*-0x305+-0x22f2],_0x27723e[0x16a7+0xac1*0x1+-0x10b3*0x2]));(_0x2f44ee['jMkHk'](_0x1389ae,_0x4934f0)||_0x2f44ee['rBIYL'](_0x1389ae,_0x4934f0)&&_0x2f44ee[_0x49b7b1(0x93f)](_0x27723e[-0xec+-0xfdb+0x10c8],_0x3b7e42['v'][-0x149*-0x17+0x1b30+-0x38be]))&&(_0x4934f0=_0x1389ae,_0x3b7e42=_0xb1dfe4['c'][_0x537037]);}else{var _0x2580d4=_0x437d9b[_0x49b7b1(0x461)](_0x32ea69,_0x1fa973[_0x49b7b1(0x7d9)],[_0x2ad706[_0x49b7b1(0x7d9)][0x1b3c+-0x2394+0x858],_0x11a20d['eye'][0x1b43*0x1+0x182d+-0x336f]+(0x24fd*0x1+0x4c9+-0x2*0x14de),_0x21a2ba[_0x49b7b1(0x7d9)][-0x1*0x9b1+-0x1*-0x18ea+-0xf37]+(-0x27*0xce+0x2009+-0x1*0x9d)],0x3*-0x7d5+0x4*-0x122+-0x3*-0xaa5,-0x1*-0x11c3+-0x446*0x5+0x783);if(_0x2580d4)_0x26b438=_0x437d9b['ixSHV'](_0x2580d4['y'],0x85c+0x471+-0x8e5);var _0x40e42b=_0x7e82cd(_0x14be5b[_0x49b7b1(0x7d9)],[_0x354746[_0x49b7b1(0x7d9)][-0xad*0x27+-0x13*-0x139+0x320],_0x437d9b[_0x49b7b1(0x9dd)](_0x21c342[_0x49b7b1(0x7d9)][0x450+-0x3f2+-0x5d],0xf45+-0x1d78+-0x5*-0x2d9),_0x16bd39['eye'][0xa79+-0x1613+0xb9c]+(0x1*0x1919+-0x16ab+-0x264)],0x1*0x2389+0x1316+-0x32b7,-0x722*-0x4+-0x1*0x1af9+0x1*0x259);if(_0x40e42b)_0x2b9646=_0x437d9b['bmVtx'](_0x40e42b['y'],-0x1*0x1e9+0xd53+-0x782);}}var _0x4316c2=![];if(_0x3ec47c&&_0x3ec47c['o'])for(_0x537037=0x1*0x81b+0x896+-0x10b1;_0x537037<_0xb1dfe4['c'][_0x49b7b1(0x841)+'h'];_0x537037++){if(_0x2f44ee[_0x49b7b1(0xe14)](_0xb1dfe4['c'][_0x537037]['o'],_0x3ec47c['o']))continue;if(_0x4de24c){var _0x555c85=Math[_0x49b7b1(0x894)](_0x2f44ee['EQEVY'](_0xb1dfe4['c'][_0x537037]['v'][0x64*-0x2+0x1dad+0x1ce4*-0x1],_0x2c7f5f)),_0x1448eb=Infinity;for(var _0x17e443=0x9bf*0x1+0x12b6+0x5b1*-0x5;_0x2f44ee[_0x49b7b1(0x314)](_0x17e443,_0xb1dfe4['c']['lengt'+'h']);_0x17e443++){var _0x8f362a=Math[_0x49b7b1(0x894)](_0x2f44ee[_0x49b7b1(0x331)](_0xb1dfe4['c'][_0x17e443]['v'][0xca*-0x1+-0x69*0x49+0x1ebc],_0x2c7f5f));if(_0x2f44ee[_0x49b7b1(0x4da)](_0x8f362a,_0x1448eb))_0x1448eb=_0x8f362a;}if(_0x2f44ee[_0x49b7b1(0x65e)](_0x555c85,_0x1448eb+(-0x1*-0x17b9+-0x9b7*-0x4+-0x3e95+0.35)))break;}_0x3b7e42=_0xb1dfe4['c'][_0x537037],_0x4934f0=Math[_0x49b7b1(0xd46)](_0x3b7e42['v'][-0x19f8+0x1889+0x16f]*_0x3b7e42['v'][-0x10e8+-0x17dd+0x28c5]+_0x3b7e42['v'][-0x5ff*-0x5+-0x168e+-0x279*0x3]*_0x3b7e42['v'][-0x2*0x756+0x198b+-0xadd]),_0x4316c2=!![];break;}return{'pos':_0x3b7e42['v'],'posAt':_0x3b7e42['o'],'candidates':_0x173c1f['lengt'+'h'],'cluster':_0xb1dfe4['c'][_0x49b7b1(0x841)+'h'],'groups':_0x10a719[_0x49b7b1(0x841)+'h'],'held':_0x4316c2,'discarded':_0x284136,'ambiguous':_0x2f44ee['OkToZ'](_0x10a719[_0x49b7b1(0x841)+'h'],0x2*0x135d+-0x10c2+-0x15f7),'reach':_0x4934f0};}catch(_0x4df085){return console[_0x49b7b1(0x8d3)](_0x2f44ee['lMQmF'],_0x4df085[_0x49b7b1(0x388)+'ge'],String(_0x4df085['stack']||'')[_0x49b7b1(0x33c)]('\x0a')[_0x49b7b1(0x9d5)](0x2bd*-0x4+0x1*0x15a9+-0xab5,0x1f88+-0x1*-0x2201+-0x15d7*0x3)[_0x49b7b1(0xc01)]('\x20|\x20')),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x48108f(){var _0x15cfaf=_0x3e9452,_0x3e9904=_0x4d505d[_0x15cfaf(0x711)+_0x15cfaf(0x640)+_0x15cfaf(0x660)];if(!_0x3e9904||!_0x3e9904[_0x15cfaf(0x87e)])return null;var _0x369006=_0x1e4c5['FPSco'+'ntrol'+_0x15cfaf(0x660)]||[],_0x467d8a=[];for(var _0x4126aa=0x11a7*-0x1+-0x1e9c+0x3043;_0x4126aa<_0x369006['lengt'+'h'];_0x4126aa++){if(_0x369006[_0x4126aa][0xcbe+0x10ac+0x1d69*-0x1]!=='v3')continue;var _0x3cb548=_0x2f44ee['wtsVG'](_0x27879f,_0x3e9904[_0x15cfaf(0x87e)],_0x369006[_0x4126aa][-0xfbc+0x180f+-0x853*0x1],0x3*0x37b+-0x1e27+0x13b9);if(_0x3cb548)_0x467d8a[_0x15cfaf(0x499)]({'o':_0x2f44ee[_0x15cfaf(0x938)]('0x',_0x369006[_0x4126aa][-0x12db+0xaee*-0x1+0x1dc9][_0x15cfaf(0x252)+'ing'](-0x1903+0x872*-0x4+0x487*0xd)),'v':_0x3cb548});}var _0x348b77=_0x2f44ee[_0x15cfaf(0x22e)](_0x32dd5b,_0x467d8a,null,_0x2e9ed3);if(!_0x348b77[_0x15cfaf(0xc63)])return null;_0x2e9ed3=_0x348b77[_0x15cfaf(0x84a)]?{'o':_0x348b77[_0x15cfaf(0x84a)]}:null;var _0x34e698=_0x348b77['pos'];return{'ptr':_0x3e9904['ptr'],'feet':_0x34e698,'posAt':_0x348b77[_0x15cfaf(0x84a)],'candidates':_0x348b77['candi'+_0x15cfaf(0x43a)],'cluster':_0x348b77[_0x15cfaf(0x877)+'er'],'copies':_0x467d8a[_0x15cfaf(0x3ac)+'r'](function(_0x28d013){return _0x28d013['v'][-0xdab*0x1+0x63d*-0x3+0x33d*0xa]===_0x34e698[0x223f*0x1+-0x267*0xb+-0x3e9*0x2]&&_0x28d013['v'][0x23e2+-0x22e7+0x32*-0x5]===_0x34e698[0x1a*-0x115+-0xf9b+0x2bbe]&&_0x28d013['v'][0x2*-0xf17+0x1369+0xac7]===_0x34e698[-0xcac*-0x2+-0x1*0x13d6+-0x10*0x58];})[_0x15cfaf(0x301)](function(_0x45d768){return _0x45d768['o'];}),'eye':[_0x34e698[-0x7b1+0x1af5+-0x6*0x336],_0x34e698[0x16ac+-0x3e5+-0x321*0x6]+_0xb5ae23,_0x34e698[-0x225a*-0x1+-0x199b+-0x8bd]],'reach':_0x348b77[_0x15cfaf(0xb66)],'pitch':_0x183d83(_0x3e9904[_0x15cfaf(0x87e)]+(-0xb1e+0x242f+-0x17a5),_0x15cfaf(0xb9d)),'yaw':_0x183d83(_0x3e9904[_0x15cfaf(0x87e)]+(-0x1680+-0x3*-0x2ef+0xf23),_0x2f44ee[_0x15cfaf(0x735)])};}function _0x347beb(){var _0xb317d3=_0x3e9452,_0x2b9769=_0x48108f(),_0x3dea51=[],_0x19d7a7=_0x510560[_0xb317d3(0xc43)+_0xb317d3(0x50b)+_0xb317d3(0x4b0)+'nc']||{},_0x2cb78f=Object['keys'](_0x19d7a7);for(var _0x3031ce=-0x2f8+0x1f21*0x1+-0x1c29;_0x2f44ee['YiJLn'](_0x3031ce,_0x2cb78f[_0xb317d3(0x841)+'h'])&&_0x2f44ee[_0xb317d3(0xd78)](_0x3031ce,-0x797*0x1+0x381+0x62*0xb);_0x3031ce++){var _0x2f6dd3=_0x19d7a7[_0x2cb78f[_0x3031ce]],_0x2740f5=[],_0x16532b=_0x1e4c5['Photo'+'nNetw'+_0xb317d3(0x4b0)+'nc']||[];for(var _0x173c8c=0x135a*0x1+-0x1d0b*0x1+0x9b1;_0x2f44ee[_0xb317d3(0xb3e)](_0x173c8c,_0x16532b['lengt'+'h']);_0x173c8c++){if(_0x2f44ee['Rmjjn'](_0x2f44ee['iXMUd'],_0x2f44ee['iXMUd'])){if(!_0x488715['body']||!_0x5281e1['body']['appen'+_0xb317d3(0x25d)+'d'])return null;var _0x47e3bb=_0x319f17[_0xb317d3(0x97b)+'eElem'+'ent'](_0xb317d3(0xbf0));_0x47e3bb['id']=_0xb317d3(0x9f1)+_0xb317d3(0x92e),_0x47e3bb['style']['cssTe'+'xt']=_0x2f44ee[_0xb317d3(0x916)](_0xb317d3(0xa29)+_0xb317d3(0x441)+'ixed;'+_0xb317d3(0x9ff)+':12px'+_0xb317d3(0x224)+'46px;'+_0xb317d3(0x8e2)+'ex:21'+_0xb317d3(0x39a)+_0xb317d3(0xb0f)+_0xb317d3(0x61f)+'r-eve'+_0xb317d3(0x21f)+_0xb317d3(0x3f4)+_0x2f44ee[_0xb317d3(0x703)],_0x2f44ee[_0xb317d3(0xbd3)])+('user-'+_0xb317d3(0x418)+_0xb317d3(0xc42)+_0xb317d3(0x87a)+_0xb317d3(0x269)+_0xb317d3(0xd8c)+'selec'+_0xb317d3(0xc42)+'e;'),_0x47e3bb['inner'+'HTML']=_0x2f44ee[_0xb317d3(0x4a1)]('<canv'+_0xb317d3(0x68f)+'=\x22sak'+'ura-e'+'sp-cv'+_0xb317d3(0xb95)+_0xb317d3(0xc64)+'60\x22\x20h'+_0xb317d3(0xdf3)+_0xb317d3(0x928)+_0xb317d3(0x1f7)+_0xb317d3(0x6bb)+_0xb317d3(0x5e8)+_0xb317d3(0x268)+'ck\x22><'+_0xb317d3(0x923)+'as>',_0x2f44ee['NCGuH']);var _0xdf5a9b={'cv':{'getContext':function(){return null;}},'el':_0x47e3bb};_0x20b34a[_0xb317d3(0x99d)][_0xb317d3(0x3d7)+_0xb317d3(0x25d)+'d'](_0x47e3bb),_0x30e482={'el':_0x47e3bb,'cv':_0x47e3bb[_0xb317d3(0xa64)+'Selec'+_0xb317d3(0x5d4)](_0x2f44ee['Vamud']),'lg':_0x47e3bb['query'+'Selec'+'tor'](_0xb317d3(0x829)+'ra-es'+_0xb317d3(0x564))};if(!_0x4de5b2['cv']||!_0x58494c['cv'][_0xb317d3(0x8e4)+'ntext'])_0x3af660=_0xdf5a9b;return _0xace606;}else{if(_0x16532b[_0x173c8c][0x12d1+-0x170+-0x1160]!=='v3')continue;var _0x541e5e=_0x27879f(_0x2f6dd3[_0xb317d3(0x87e)],_0x16532b[_0x173c8c][-0xd*0x17e+-0x256b+0x38d1],-0x176c*0x1+0xe0+0x168f*0x1);if(_0x541e5e)_0x2740f5['push']({'o':'0x'+_0x16532b[_0x173c8c][-0x3c7+0xf94+-0xbcd]['toStr'+'ing'](-0xcd5+-0x2c2+-0xfa7*-0x1),'v':_0x541e5e});}}var _0x3db06d=_0x2f44ee['fENVD'](_0x32dd5b,_0x2740f5,_0x2b9769?_0x2b9769[_0xb317d3(0xcf4)][0x2257+0x1054+-0x32aa*0x1]:null,_0x25b726[_0x2cb78f[_0x3031ce]]);_0x25b726[_0x2cb78f[_0x3031ce]]=_0x3db06d['posAt']?{'o':_0x3db06d['posAt']}:null;var _0x49e362=_0x3db06d[_0xb317d3(0xc63)];if(!_0x49e362)continue;var _0x4f8668={'ptr':_0x2f6dd3['ptr'],'x':_0x49e362[-0x3ab*-0x4+-0x11ec+0x340],'y':_0x49e362[0x7a5*-0x5+0x1204*0x2+0x232],'z':_0x49e362[0x2c7+0x13fa+-0x16bf],'posAt':_0x3db06d[_0xb317d3(0x84a)],'candidates':_0x3db06d[_0xb317d3(0xc2c)+_0xb317d3(0x43a)],'cluster':_0x3db06d['clust'+'er'],'team':_0x183d83(_0x2f44ee['WDBJJ'](_0x2f6dd3[_0xb317d3(0x87e)],0x147*0xb+-0x47*-0x25+-0xd*0x1d8),_0xb317d3(0xd08)),'localFlag':_0x2f44ee[_0xb317d3(0x45d)](_0x183d83,_0x2f6dd3[_0xb317d3(0x87e)]+(0x138c+-0xb*-0xa4+0x45a*-0x6),_0xb317d3(0xd08))};if(_0x2b9769){if(_0xb317d3(0xb85)==='bYxmG')return _0x149264[_0xb317d3(0x8c0)]('%c[sa'+_0xb317d3(0x821)+_0xb317d3(0x208)+_0xb317d3(0xafb)+_0xb317d3(0xc51)+_0xb317d3(0x2eb)+'ed',_0x2f44ee['UqexV']('color'+':',_0xdfa7bf),_0x3c3492),null;else{var _0x48bd98=_0x49e362[-0xa2e+-0x1*-0x263d+-0x1c0f]-_0x2b9769[_0xb317d3(0xcf4)][0x3d6*0x4+0x95*0x1+-0xfed],_0x8314ff=_0x49e362[-0x2*-0x61+0xa08+-0xac8]-_0x2b9769['feet'][-0x751+-0x2385+0x2ad8];_0x4f8668['d']=Math[_0xb317d3(0xd46)](_0x2f44ee[_0xb317d3(0x466)](_0x2f44ee['gVfVu'](_0x48bd98,_0x48bd98),_0x2f44ee[_0xb317d3(0x2dc)](_0x8314ff,_0x8314ff))),_0x4f8668[_0xb317d3(0xa7b)+'ng']=_0x2f44ee[_0xb317d3(0x8cc)](Math[_0xb317d3(0x8d2)](_0x48bd98,_0x8314ff),0x1f32+-0x2f3*-0x1+-0x2171)/Math['PI'];}}_0x3dea51[_0xb317d3(0x499)](_0x4f8668);}return{'me':_0x2b9769,'list':_0x3dea51};}var _0x39996f=null;function _0x2af768(){var _0x53f956=_0x3e9452;if(_0x39996f)return _0x39996f;try{if(!document['body']||!document['body'][_0x53f956(0x3d7)+_0x53f956(0x25d)+'d'])return null;var _0xb9e2bf=document[_0x53f956(0x97b)+_0x53f956(0x39f)+'ent']('div');_0xb9e2bf['id']='sakur'+'a-esp',_0xb9e2bf[_0x53f956(0x995)]['cssTe'+'xt']=_0x2f44ee[_0x53f956(0x7b7)]+_0x2f44ee['DfVoq']+_0x2f44ee[_0x53f956(0xbd3)]+_0x2f44ee[_0x53f956(0xda7)],_0xb9e2bf['inner'+'HTML']=_0x53f956(0xb41)+_0x53f956(0x68f)+'=\x22sak'+_0x53f956(0x73a)+_0x53f956(0x5b8)+_0x53f956(0xb95)+_0x53f956(0xc64)+_0x53f956(0x4cc)+'eight'+_0x53f956(0x928)+_0x53f956(0x1f7)+'le=\x22d'+_0x53f956(0x5e8)+_0x53f956(0x268)+_0x53f956(0xd69)+'/canv'+_0x53f956(0x340)+_0x2f44ee[_0x53f956(0x84e)];var _0x2e8976={'cv':{'getContext':function(){var _0x4a385b=_0x53f956,_0x59b46a={'fWcsc':function(_0x20cda1,_0x379ec9){return _0x20cda1+_0x379ec9;}};if('DPUyY'===_0x2f44ee['cKjHY'])_0x3558a9['st'][_0x4a385b(0x7c0)+_0x4a385b(0x41d)+'n']=_0x23f1e5['froun'+'d'](_0x46b51a),_0x1d4967++,_0x85b520['push'](_0x59b46a['fWcsc']('0x',_0x21cca5['o']['toStr'+_0x4a385b(0x74d)](0x1ace+0x1*0x19d1+-0x348f)));else return null;}},'el':_0xb9e2bf};document[_0x53f956(0x99d)][_0x53f956(0x3d7)+_0x53f956(0x25d)+'d'](_0xb9e2bf),_0x39996f={'el':_0xb9e2bf,'cv':_0xb9e2bf[_0x53f956(0xa64)+'Selec'+'tor'](_0x2f44ee[_0x53f956(0x433)]),'lg':_0xb9e2bf['query'+_0x53f956(0x79f)+_0x53f956(0x5d4)](_0x2f44ee['qbFIu'])};if(!_0x39996f['cv']||!_0x39996f['cv'][_0x53f956(0x8e4)+'ntext'])_0x39996f=_0x2e8976;return _0x39996f;}catch(_0x59ab37){return null;}}var _0x15a2bb=null;function _0x3d944f(){var _0x45994c=_0x3e9452;if(_0x15a2bb)return _0x15a2bb;try{var _0x45ec03=(_0x45994c(0xd01)+'|3|0|'+_0x45994c(0x648))[_0x45994c(0x33c)]('|'),_0x5a785b=-0x1d*0x6d+0x1*0x211c+-0x1*0x14c3;while(!![]){switch(_0x45ec03[_0x5a785b++]){case'0':document['body']['appen'+_0x45994c(0x25d)+'d'](_0x1b40ca);continue;case'1':return _0x15a2bb;case'2':var _0x1b40ca=document['creat'+_0x45994c(0x39f)+'ent'](_0x45994c(0x98d)+'s');continue;case'3':_0x1b40ca[_0x45994c(0x995)][_0x45994c(0xa6f)+'xt']='posit'+_0x45994c(0x441)+_0x45994c(0xa72)+'left:'+_0x45994c(0x3e1)+':0;z-'+_0x45994c(0x30c)+_0x45994c(0x961)+_0x45994c(0x402)+'5;poi'+_0x45994c(0x81a)+'event'+'s:non'+'e;';continue;case'4':if(!document[_0x45994c(0x99d)]||!document[_0x45994c(0x99d)][_0x45994c(0x3d7)+'dChil'+'d'])return null;continue;case'5':_0x1b40ca['id']=_0x2f44ee[_0x45994c(0x1e8)];continue;case'6':_0x15a2bb={'cv':_0x1b40ca};continue;}break;}}catch(_0x48725e){return null;}}function _0x37cfb2(_0x322082){var _0x1b0a32=_0x3e9452;try{var _0xa605ec=Math['max'](-0x25b8+0xb85+0x1a34,window['inner'+_0x1b0a32(0xc07)]||document[_0x1b0a32(0x358)+_0x1b0a32(0x531)+_0x1b0a32(0x1e1)]['clien'+'tWidt'+'h']||-0x3*-0xb56+0x56+0x274*-0xe),_0x137bc6=Math[_0x1b0a32(0x57a)](0x453*-0x5+-0x616+0x1bb6,window['inner'+_0x1b0a32(0x8c2)+'t']||document['docum'+_0x1b0a32(0x531)+'ement']['clien'+_0x1b0a32(0x842)+'ht']||-0x21a5+0x2459+-0x2b4);return(_0x322082['cv']['width']!==_0xa605ec||_0x2f44ee['ZtpZV'](_0x322082['cv'][_0x1b0a32(0x30b)+'t'],_0x137bc6))&&(_0x322082['cv']['width']=_0xa605ec,_0x322082['cv']['heigh'+'t']=_0x137bc6),{'w':_0xa605ec,'h':_0x137bc6};}catch(_0x25c0fb){return{'w':0x0,'h':0x0};}}function _0xe56613(){var _0x2ebd6b=_0x3e9452;if('ewUov'==='yJpWZ')_0x2fcc8b[_0x2ebd6b(0x7bd)+'onten'+'t']=_0x2f44ee['aTUuv'](_0x558c57,_0x2ee52a);else{var _0x2ba8c0={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0x2ba8c0[_0x2ebd6b(0x98d)+'s']={'w':_0x15a2bb&&_0x15a2bb['cv']?_0x15a2bb['cv']['width']:-0x66b*-0x3+0x1*-0x184+-0x11bd,'h':_0x15a2bb&&_0x15a2bb['cv']?_0x15a2bb['cv'][_0x2ebd6b(0x30b)+'t']:0x12c8+-0x3*-0x5dd+-0x245f,'innerW':window[_0x2ebd6b(0x941)+_0x2ebd6b(0xc07)],'innerH':window[_0x2ebd6b(0x941)+_0x2ebd6b(0x8c2)+'t'],'dpr':window['devic'+_0x2ebd6b(0x28e)+_0x2ebd6b(0xde9)+'o']||-0xee+0x7df+-0x6f0};}catch(_0x32e1e7){}var _0x139347=_0x2f44ee['XdHCH'](_0x347beb);if(!_0x139347||!_0x139347['me'])return _0x2ba8c0;var _0x6febd7=_0x2ba8c0[_0x2ebd6b(0x98d)+'s']['w']||-0x32*0x1c+-0x1476+0x1dd6,_0x1d3e8d=_0x2ba8c0[_0x2ebd6b(0x98d)+'s']['h']||0xf97+-0x1*-0x172c+-0x22db,_0x50e5f3=_0x2f44ee['RnWzz'](_0x6febd7,_0x1d3e8d),_0x5249d8=Math['tan'](_0x2f44ee[_0x2ebd6b(0x39b)](_0x2f44ee[_0x2ebd6b(0x386)](_0xd4762b['fov'],Math['PI'])/(-0x23c3+-0x47a+0x28f1*0x1),-0x19db+-0x130f+0x2cec)),_0x293a2d=_0x2f44ee[_0x2ebd6b(0xb58)](_0x2ed0b8),_0x4b9888=_0x293a2d[_0x2ebd6b(0xa52)];for(var _0x21e4f9=0x8b*-0x27+-0x9e3*-0x1+0x242*0x5;_0x21e4f9<_0x139347['list'][_0x2ebd6b(0x841)+'h']&&_0x21e4f9<-0x1699+0x23c2+0xd21*-0x1;_0x21e4f9++){var _0x189716=_0x139347['list'][_0x21e4f9];if(typeof _0x189716['d']!==_0x2f44ee['MDmdN']||_0x2f44ee['giNfE'](_0x189716['d'],-0x3*0x395+0x1b50+-0x1091+0.5))continue;var _0xf1a764=_0x2368a9(_0x139347['me'][_0x2ebd6b(0x7d9)],[_0x189716['x'],_0x189716['y'],_0x189716['z']],_0x6febd7,_0x1d3e8d);if(!_0xf1a764)continue;var _0x463e89=_0x2f44ee[_0x2ebd6b(0xd9e)](_0xf1a764['x']/_0x6febd7-(0x19b6+-0x1f65+0x5af+0.5),-0x784+-0x1*-0x11a1+-0xa1b),_0x14c9b7=null;if(_0x4b9888&&_0x293a2d['pos']){var _0x1ff021=(_0x2ebd6b(0x69c)+'|0|2')[_0x2ebd6b(0x33c)]('|'),_0x863db6=0x1c15+-0x3*0x8bf+0xec*-0x2;while(!![]){switch(_0x1ff021[_0x863db6++]){case'0':var _0x304bcd=_0x2f44ee['YXHko'](_0x2f44ee[_0x2ebd6b(0x45a)](_0x4d26ea*_0x4b64a7[-0x1609+0x1*0x2179+0x2*-0x5b8],_0x26ca73*_0x4b64a7[-0x1ced+0x157c+0x772]),_0x402bf9*_0x4b64a7[0x1f20+0x4a+-0x1f68]);continue;case'1':var _0x264115=_0x4b9888[_0x2ebd6b(0xc5b)],_0x4b64a7=_0x4b9888[_0x2ebd6b(0x9ff)];continue;case'2':if(_0x2f44ee[_0x2ebd6b(0xbfa)](_0x55eaab,-0x18f*0xb+0xd4f+0x2*0x1eb+0.5))_0x14c9b7=_0x2f44ee[_0x2ebd6b(0x71f)](_0x2f44ee[_0x2ebd6b(0x71f)](_0x304bcd,_0x55eaab),_0x5249d8*_0x50e5f3);continue;case'3':var _0x4d26ea=_0x2f44ee[_0x2ebd6b(0x685)](_0x189716['x'],_0x293a2d[_0x2ebd6b(0xc63)][0x1f1a+0x1*0x1e0b+-0x3d25]),_0x26ca73=_0x2f44ee['DYnce'](_0x189716['y'],_0x293a2d['pos'][-0x17*0x1af+-0x2b9+0x2973*0x1]),_0x402bf9=_0x2f44ee[_0x2ebd6b(0x200)](_0x189716['z'],_0x293a2d[_0x2ebd6b(0xc63)][-0x1d82+0x2f*-0xc7+0x25*0x1c9]);continue;case'4':var _0x55eaab=_0x4d26ea*_0x264115[0x40*-0x7b+0xb03*-0x2+-0x182*-0x23]+_0x2f44ee[_0x2ebd6b(0x2c7)](_0x26ca73,_0x264115[0x1*-0x6df+-0x1*-0x189a+-0x11ba])+_0x2f44ee[_0x2ebd6b(0x36d)](_0x402bf9,_0x264115[0x53d*0x6+-0xfc0+-0xfac]);continue;}break;}}else typeof _0x189716[_0x2ebd6b(0xa7b)+'ng']===_0x2ebd6b(0x71a)+'r'&&(_0x14c9b7=_0x2f44ee['DZApJ'](Math[_0x2ebd6b(0xc69)](_0x189716[_0x2ebd6b(0xa7b)+'ng']*Math['PI']/(0x2*0xc2+-0x1931+0x1861)),_0x5249d8*_0x50e5f3));if(_0x14c9b7===null)continue;if(_0x2f44ee[_0x2ebd6b(0xc06)](Math[_0x2ebd6b(0x894)](_0x14c9b7),0x233c+0x2a*-0x3b+-0x198e+0.8))continue;var _0x3cf245=_0x463e89-_0x14c9b7;_0x2ba8c0[_0x2ebd6b(0xb67)]['push']({'d':Math[_0x2ebd6b(0x716)](_0x189716['d']),'bearing':Math['round'](_0x189716['beari'+'ng']),'at':_0x2f44ee[_0x2ebd6b(0xb94)](Math[_0x2ebd6b(0x716)](_0x2f44ee[_0x2ebd6b(0xd07)](_0x463e89,0x18a1+0x1710+-0x3fb*0xb)),-0x5*-0x17d+0x1c3d+-0x1fc6),'want':Math['round'](_0x14c9b7*(-0x2*0x67f+-0xb6f*-0x2+-0x1*0x5f8))/(-0x1*-0x19fc+-0x1c81+0x66d*0x1),'off':_0x2f44ee[_0x2ebd6b(0x39b)](Math['round'](_0x2f44ee['CXsfR'](_0x3cf245,-0x1d43+0x2a2+-0x1*-0x1e89)),-0x1715+0x4*-0x90c+0x9*0x705)}),_0x2f44ee['uzJzo'](Math[_0x2ebd6b(0x894)](_0x3cf245),Math[_0x2ebd6b(0x894)](_0x2ba8c0[_0x2ebd6b(0x512)+_0x2ebd6b(0xcba)]))&&(_0x2ba8c0[_0x2ebd6b(0x512)+_0x2ebd6b(0xcba)]=Math['round'](_0x2f44ee['ycsXZ'](_0x3cf245,-0x11*-0x7f+0x1dac+-0x2233))/(0x2d1*0xb+-0x1690+0xe7*-0x5),_0x2ba8c0[_0x2ebd6b(0x512)+_0x2ebd6b(0x22b)+'ng']=Math[_0x2ebd6b(0x716)](_0x189716['beari'+'ng']));}if(_0x293a2d[_0x2ebd6b(0xc63)]&&_0x293a2d[_0x2ebd6b(0xa52)]&&_0x293a2d['fov']){var _0x3769fe=_0x293a2d['basis'][_0x2ebd6b(0xc5b)];if(Math[_0x2ebd6b(0x894)](_0x3769fe[0xa94+-0x2016+-0x1*-0x1583])<0x1*0x19b6+0x466+-0x1e1c+0.01){var _0x56d51a=Math[_0x2ebd6b(0xc69)](_0x2f44ee[_0x2ebd6b(0x39b)](_0x2f44ee[_0x2ebd6b(0xbb0)](_0x293a2d['fov'],Math['PI']),0x10*0x47+0xad*-0xd+0x50d)/(-0x1e75+-0x54b*-0x1+0x192c)),_0x3b8c95=-0x2458+-0x585+-0x1*-0x29e7,_0x304df8=0xb1b+-0x11e7*-0x1+-0x1d01,_0xed5677=[_0x2f44ee[_0x2ebd6b(0x792)](_0x293a2d['pos'][0x199c*0x1+-0xa42+0x1*-0xf5a],_0x3769fe[0x1*-0x1ac4+-0x1*-0x1493+0x631]*_0x3b8c95),_0x2f44ee['mYZyX'](_0x293a2d['pos'][0x947+0xdfd*0x1+-0x18d*0xf]+_0x2f44ee[_0x2ebd6b(0xd63)](_0x3769fe[-0x795*-0x2+0x1f19+0x17e*-0x1f],_0x3b8c95),_0x304df8),_0x2f44ee[_0x2ebd6b(0x893)](_0x293a2d['pos'][0x297*0x4+-0x4f*-0x45+-0x1fa5],_0x2f44ee['vebwt'](_0x3769fe[-0x13f0+-0x12ee+0x26e0],_0x3b8c95))],_0x39b8c1=_0x2368a9(_0x293a2d[_0x2ebd6b(0xc63)],_0xed5677,_0x6febd7,_0x2ba8c0[_0x2ebd6b(0x98d)+'s']['h']);if(_0x39b8c1){if(_0x2f44ee['bcPNf'](_0x2ebd6b(0x819),_0x2ebd6b(0x819))){var _0x186d61=_0x2f44ee['DtdII'](-0x5cb+-0x35f*-0xb+-0x1f4a+0.5-_0x39b8c1['y']/_0x2ba8c0[_0x2ebd6b(0x98d)+'s']['h'],0x1b89+-0x806+0x1*-0x1381),_0x3a4ff6=_0x304df8/_0x3b8c95/_0x56d51a;_0x2ba8c0[_0x2ebd6b(0xb52)+_0x2ebd6b(0x2e1)]={'got':Math['round'](_0x2f44ee[_0x2ebd6b(0xa0a)](_0x186d61,0x2*-0xfe9+0x1432+0x1f1*0x8))/(-0x14da+0x8d+-0x1*-0x1835),'want':_0x2f44ee[_0x2ebd6b(0x71f)](Math['round'](_0x2f44ee[_0x2ebd6b(0xaed)](_0x3a4ff6,0xd2+-0x13*-0x74+0xe*-0x65)),0x2217*-0x1+-0x60a+0x2c09),'off':Math[_0x2ebd6b(0x716)]((_0x186d61-_0x3a4ff6)*(-0x2*0x439+0x49*0x47+-0x2b*0x2f))/(0x1*0x4e1+-0x7*-0x1b7+0x2*-0x67d)};}else{var _0x372784={};try{var _0x607560=_0x3b2d68['Unity'+'WebMo'+'dkit']&&_0x2e04cc[_0x2ebd6b(0xa07)+'WebMo'+_0x2ebd6b(0x9e1)][_0x2ebd6b(0x7d3)+'me'];_0x372784[_0x2ebd6b(0x4f9)]=_0x607560&&_0x607560[_0x2ebd6b(0x751)+_0x2ebd6b(0x27f)+'g']||null,_0x372784[_0x2ebd6b(0x5ef)+_0x2ebd6b(0x42a)]=!!(_0x607560&&_0x35c52c&&_0x607560['__sak'+_0x2ebd6b(0x27f)+'g']===_0x47564d),_0x372784[_0x2ebd6b(0xd45)+'meGam'+'e']=_0x607560&&_0x607560['_game']?typeof _0x607560[_0x2ebd6b(0x347)]:_0x2ebd6b(0xa9e),_0x372784[_0x2ebd6b(0xd50)+'nRunt'+_0x2ebd6b(0x72b)+_0x2ebd6b(0x770)+_0x2ebd6b(0x678)]=!!(_0xc0b028&&_0x121431[_0x2ebd6b(0x53b)+_0x2ebd6b(0x8be)]&&_0x45a886[_0x2ebd6b(0x53b)+_0x2ebd6b(0x8be)]===_0x607560),_0x372784[_0x2ebd6b(0xd50)+_0x2ebd6b(0xac9)+_0x2ebd6b(0xa9a)+'me']=_0xf1c0b5&&_0x1b823e[_0x2ebd6b(0x53b)+_0x2ebd6b(0x8be)]&&_0x39b3bc[_0x2ebd6b(0x53b)+_0x2ebd6b(0x8be)][_0x2ebd6b(0x347)]?typeof _0x5eaec0[_0x2ebd6b(0x53b)+_0x2ebd6b(0x8be)]['_game']:_0x2ebd6b(0xa9e);}catch(_0x54fd10){_0x372784[_0x2ebd6b(0x95d)]=_0x213e64(_0x54fd10&&_0x54fd10['messa'+'ge']||_0x54fd10);}return _0x372784;}}}}return _0x2ba8c0;}}var _0x334176=-0x2456+0x1*0x10d9+0x137e+0.75,_0x1280af=-0x1*-0x6+0xe09+-0xe0f+0.25,_0x21249c=0x232a+0xb*0x16d+-0x32d9+0.42;function _0x53ccdc(_0x4463cd){var _0x1a06a5=_0x3e9452;if(_0x1a06a5(0x25c)===_0x1a06a5(0x25c)){var _0x597a2e=_0x15a2bb;if(!_0x597a2e)return;var _0x400b11=_0x597a2e['cv'][_0x1a06a5(0x8e4)+_0x1a06a5(0x539)]&&_0x597a2e['cv'][_0x1a06a5(0x8e4)+'ntext']('2d');if(!_0x400b11)return;var _0x4269ee=_0x37cfb2(_0x597a2e);_0x400b11[_0x1a06a5(0x590)+_0x1a06a5(0x733)](0x3*-0xcb9+-0x1d4b*-0x1+-0x2*-0x470,-0x841+-0x234b+0x3a1*0xc,_0x4269ee['w'],_0x4269ee['h']);if(!_0x2cdf6d[_0x1a06a5(0x760)]||!_0x4463cd||!_0x4463cd['me'])return;var _0x376781=_0x4463cd['me'],_0x1105d3=null,_0x3ca0ca=_0x510560['Photo'+'nNetw'+_0x1a06a5(0x4b0)+'nc']||{},_0x2a548f=Object['keys'](_0x3ca0ca);for(var _0x2051b2=-0x417+-0x1f*0xa+0x54d;_0x2051b2<_0x2a548f[_0x1a06a5(0x841)+'h'];_0x2051b2++){var _0xda8236=_0x27879f(_0x3ca0ca[_0x2a548f[_0x2051b2]][_0x1a06a5(0x87e)],-0x1f40+-0xf7b+-0x87*-0x59,0x25f*0x3+0x23bf+0x1*-0x2ad9);if(_0xda8236&&_0xda8236[-0x25*-0x6b+-0x147f+0x2*0x284]===-0x1deb+-0xbcf+0xe*0x2fb&&_0xda8236[0xb0a+0xffd*0x2+-0x5b*0x79]===0x1f4*0xa+-0x2075+0xced&&_0xda8236[0x1*-0xeda+0x1449*-0x1+-0xbb7*-0x3]===0xa86+0x4b7+-0xf3d){_0x1105d3=_0x183d83(_0x3ca0ca[_0x2a548f[_0x2051b2]]['ptr']+(0x14f6+-0x1*0x1fc0+0xb22),'i32');break;}}for(var _0x4cf9db=0x2*0xfa7+-0x219d+0x24f;_0x4cf9db<_0x4463cd['list']['lengt'+'h'];_0x4cf9db++){var _0x1a60c8=_0x4463cd[_0x1a06a5(0x56a)][_0x4cf9db],_0x27008c=_0x1105d3!==null&&_0x1a60c8[_0x1a06a5(0x7ca)]===_0x1105d3,_0x17be31=_0x2f44ee['ZwxJp'](_0x2368a9,_0x376781['eye'],[_0x1a60c8['x'],_0x1a60c8['y']-_0x1280af,_0x1a60c8['z']],_0x4269ee['w'],_0x4269ee['h']),_0xd8c8de=_0x2368a9(_0x376781[_0x1a06a5(0x7d9)],[_0x1a60c8['x'],_0x2f44ee[_0x1a06a5(0x792)](_0x1a60c8['y'],_0x334176),_0x1a60c8['z']],_0x4269ee['w'],_0x4269ee['h']);if(!_0x17be31||!_0xd8c8de)continue;var _0x4b2802=Math[_0x1a06a5(0x894)](_0xd8c8de['y']-_0x17be31['y']);if(!_0x2f44ee[_0x1a06a5(0x53c)](_0x4b2802,-0x24bc+0x2303*0x1+-0x1*-0x1b9))continue;var _0x5afacc=Math['max'](0x56b+-0xff8+0xa8f,Math[_0x1a06a5(0x274)](-0x2*0x551+-0xc6f+0x176b,_0x4b2802*_0x21249c));if(_0x2f44ee[_0x1a06a5(0x82e)](_0x4b2802,0x88*-0x8+-0xcbc*0x1+0x12a0))continue;var _0x390107=_0x2f44ee[_0x1a06a5(0xbcf)](_0x2f44ee[_0x1a06a5(0x45a)](_0x17be31['x'],_0xd8c8de['x']),-0x409*-0x4+-0x13f2+0x3d0),_0xc72604=_0x2f44ee[_0x1a06a5(0x4d8)](_0x17be31['y']+_0xd8c8de['y'],-0x2eb+0x1bf*-0x13+0x241a);_0x400b11[_0x1a06a5(0x366)+'eStyl'+'e']=_0x27008c?'rgba('+_0x1a06a5(0xb5f)+_0x1a06a5(0x5ba)+_0x1a06a5(0xb32):_0x1a06a5(0xb8d)+'255,1'+_0x1a06a5(0x2c0)+'6,.95'+')',_0x400b11[_0x1a06a5(0xda3)+_0x1a06a5(0x29a)]=_0x27008c?0x13ed+0x5*-0x797+0xd*0x163:-0x2ec+-0x164f*-0x1+-0x1361,_0x400b11[_0x1a06a5(0x366)+_0x1a06a5(0x2bc)](_0x2f44ee['uToPz'](_0x390107,_0x2f44ee['LfPbh'](_0x5afacc,0x262f+0xe*0x1ff+-0x421f)),_0xc72604-_0x4b2802/(-0x973+-0xa9*0x13+0x1600*0x1),_0x5afacc,_0x4b2802),!_0x27008c&&(_0x400b11[_0x1a06a5(0xc6b)+_0x1a06a5(0x2a4)]='rgba('+_0x1a06a5(0x3c4)+'10,11'+_0x1a06a5(0xb17)+')',_0x400b11['font']=_0x2f44ee['Fpeps'],_0x400b11[_0x1a06a5(0x367)+_0x1a06a5(0xc22)](_0x2f44ee[_0x1a06a5(0x993)](Math[_0x1a06a5(0x716)](_0x1a60c8['d']||-0x31*0x4f+-0x11f5+0x2114),'m'),_0x390107-_0x5afacc/(0x25b1*-0x1+-0xa1*0x3b+0x1*0x4ace),_0xc72604-_0x4b2802/(-0x1f3e+0xfaf+0xf91)-(-0x1e9c+0x239d*0x1+-0x2*0x27f)));}}else _0x3fd7e2=_0x1d4fec['x']/(0x2*-0x2f9+0xc9c*-0x1+0x2*0xb3b),_0xa40ac=_0x34a7c3['y']/(0xe95*0x1+0x474+-0xf21);}function _0x270691(){var _0x354856=_0x3e9452,_0x450782={'mERQf':function(_0x55394e,_0x19354b){return _0x2f44ee['Iwroz'](_0x55394e,_0x19354b);}},_0x2d6e2b=_0x2af768();if(!_0x2d6e2b||!_0x2d6e2b['cv'])return;try{var _0x599ba0=_0x2d6e2b['cv']['getCo'+_0x354856(0x539)]&&_0x2d6e2b['cv']['getCo'+'ntext']('2d');if(!_0x599ba0)return;var _0x147b9d=_0x2d6e2b['cv'][_0x354856(0x59f)],_0x604f34=_0x147b9d/(-0x111a+0x1*0xd75+0x3a7),_0x5201b6=_0x347beb(),_0xc056af=_0x5201b6['me'];_0x599ba0['clear'+_0x354856(0x733)](-0x69d*-0x3+-0x4ef*-0x5+0x1a6*-0x1b,-0x24b5+-0x170b+-0x1de*-0x20,_0x147b9d,_0x147b9d),_0x599ba0[_0x354856(0x366)+'eStyl'+'e']=_0x2f44ee[_0x354856(0x1f9)],_0x599ba0[_0x354856(0xda3)+_0x354856(0x29a)]=-0x1ecd*-0x1+0x9*0x45+-0x87*0x3f;for(var _0x4f4ebc=0x1f6d+-0x16a*-0x2+-0x2240;_0x4f4ebc<=0x1d*0x8b+0x2206+0xb*-0x486;_0x4f4ebc++){_0x599ba0[_0x354856(0xd16)+_0x354856(0xd43)](),_0x599ba0[_0x354856(0xab6)](_0x604f34,_0x604f34,_0x2f44ee['GCEvK'](_0x2f44ee['xLeYt'](_0x2f44ee['EQEVY'](_0x604f34,0x26db+0x928*0x2+-0x3927),_0x4f4ebc),-0xb92+0x10d5+-0x3*0x1c0),-0x4*0x978+0x1e1b+0x7c5,_0x2f44ee[_0x354856(0xe11)](Math['PI'],-0x11e2+-0x25bb+0x1*0x379f)),_0x599ba0[_0x354856(0x366)+'e']();}_0x599ba0['begin'+_0x354856(0xd43)](),_0x599ba0['moveT'+'o'](0x14*-0x1b6+0x22b6+-0x7a,_0x604f34),_0x599ba0[_0x354856(0x5f2)+'o'](_0x2f44ee[_0x354856(0x51f)](_0x147b9d,0x1*-0x217+-0x1871*0x1+0x1a8c),_0x604f34),_0x599ba0['moveT'+'o'](_0x604f34,-0x971*0x2+-0x1*0x13e7+0x26cd),_0x599ba0[_0x354856(0x5f2)+'o'](_0x604f34,_0x2f44ee['zrRSz'](_0x147b9d,0x83*-0x43+-0x1c80+0x3ecd)),_0x599ba0[_0x354856(0x366)+'e']();if(!_0xc056af){if(_0x2d6e2b['lg'])_0x2d6e2b['lg']['textC'+'onten'+'t']='';return;}var _0x493f68=_0x2f44ee[_0x354856(0x389)](_0x604f34,-0x226f+0xf33+0x3da*0x5)/_0x2cdf6d[_0x354856(0xb48)],_0xcf3af6=null,_0x74f47d=_0x510560[_0x354856(0xc43)+'nNetw'+_0x354856(0x4b0)+'nc']||{},_0x1c29ed=Object[_0x354856(0x5ea)](_0x74f47d);for(var _0x55f85d=0x1eb*0x1+-0x2521+0x2336;_0x55f85d<_0x1c29ed[_0x354856(0x841)+'h'];_0x55f85d++){var _0x5e2b17=_0x27879f(_0x74f47d[_0x1c29ed[_0x55f85d]][_0x354856(0x87e)],0x1*0xeea+0xe9*0x1+-0xf9f,-0x180a*0x1+0x246a+-0x279*0x5);if(_0x5e2b17&&_0x5e2b17[0xbb6+0x1f49*0x1+-0x2aff*0x1]===-0x1ce0+0x1f10+0x7*-0x50&&_0x5e2b17[-0x11d2+0xd83*-0x2+0x81*0x59]===-0xb*-0x28d+0x1*0x1feb+0x1dfd*-0x2&&_0x5e2b17[0x19d5+0x2090+-0x1*0x3a63]===0x245f+0x1b49+-0x3fa8){if(_0x2f44ee[_0x354856(0x759)](_0x354856(0x900),_0x2f44ee[_0x354856(0x857)])){_0xcf3af6=_0x2f44ee['dAeTF'](_0x183d83,_0x2f44ee[_0x354856(0x7b1)](_0x74f47d[_0x1c29ed[_0x55f85d]][_0x354856(0x87e)],0x18c2+-0x1*-0x1947+0x31b1*-0x1),_0x2f44ee[_0x354856(0xd3b)]);break;}else{var _0x2f0269=_0x450782[_0x354856(0xc6d)](_0x4cc94f,_0x3b9c67);_0x542fcd[_0x41e133]=_0x2f0269['rows'],_0xb965de[_0x3b0506]={'key':_0x2f0269['key'],'sane':_0x2f0269['sane'],'checked':_0x2f0269['check'+'ed'],'keyConsistent':_0x2f0269['keyCo'+_0x354856(0x46a)+_0x354856(0x6c9)],'keySource':_0x2f0269[_0x354856(0xb45)+'urce']};}}}var _0x2406d9=0x1094+-0x626*-0x1+-0x16ba;for(var _0x5e3c19=0x634*-0x1+0x17d*-0x10+-0x1c4*-0x11;_0x2f44ee['zrnJL'](_0x5e3c19,_0x5201b6[_0x354856(0x56a)]['lengt'+'h']);_0x5e3c19++){var _0x1ce383=(_0x354856(0x71e)+'|7|0|'+'1|8|5'+'|2|10'+'|6')['split']('|'),_0x2e9ac2=-0x2316+0x57*-0x3+-0x403*-0x9;while(!![]){switch(_0x1ce383[_0x2e9ac2++]){case'0':_0x4ba4da>_0x2f44ee[_0x354856(0xb9c)](_0x604f34,-0x2*-0x10d9+-0x26d*0x7+0x10b1*-0x1)?(_0x465b9d=_0x604f34+_0x2f44ee[_0x354856(0xd23)](_0x1bb869,_0x4ba4da)*_0x2f44ee['DqFnJ'](_0x604f34,0x12*0x1e6+-0x201d*-0x1+-0x4243),_0x5b9a3f=_0x2f44ee[_0x354856(0x9ba)](_0x604f34,_0x2f44ee['LnkoX'](_0x363372,_0x4ba4da)*_0x2f44ee[_0x354856(0x8ab)](_0x604f34,-0xec7*0x2+-0xe74+0x2*0x1604))):(_0x465b9d=_0x604f34+_0x1bb869,_0x5b9a3f=_0x2f44ee[_0x354856(0x1d7)](_0x604f34,_0x363372));continue;case'1':var _0x17be28=_0xcf3af6!==null&&_0x4fe1a1[_0x354856(0x7ca)]===_0xcf3af6;continue;case'2':_0x599ba0[_0x354856(0xab6)](_0x465b9d,_0x5b9a3f,_0x17be28?0x74a+0x1395+0x1add*-0x1:-0x9a9*-0x1+-0x1922+0x3df*0x4+0.20000000000000018,-0x67*0x25+-0x269c+-0x19f*-0x21,Math['PI']*(0x1870+0x5*0x617+-0x29d*0x15));continue;case'3':var _0x1bb869=_0x2f44ee[_0x354856(0x352)](_0x4fe1a1['x'],_0xc056af[_0x354856(0xcf4)][-0x20bb+-0x1ee9*-0x1+0x1d2])*_0x493f68,_0x363372=_0x2f44ee['fUZMv'](_0x4fe1a1['z']-_0xc056af[_0x354856(0xcf4)][-0x6f*0x13+-0x3*0x39f+0x2*0x98e],_0x493f68);continue;case'4':var _0x4ba4da=Math[_0x354856(0xd46)](_0x2f44ee[_0x354856(0xb38)](_0x1bb869,_0x1bb869)+_0x2f44ee[_0x354856(0xa62)](_0x363372,_0x363372));continue;case'5':_0x599ba0[_0x354856(0xd16)+'Path']();continue;case'6':_0x2406d9++;continue;case'7':var _0x465b9d=_0x604f34,_0x5b9a3f=_0x604f34;continue;case'8':_0x599ba0[_0x354856(0xc6b)+'tyle']=_0x17be28?_0x2f44ee[_0x354856(0x8ec)]:_0x2f44ee['HjkjM'];continue;case'9':var _0x4fe1a1=_0x5201b6['list'][_0x5e3c19];continue;case'10':_0x599ba0[_0x354856(0xd5b)]();continue;}break;}}_0x599ba0[_0x354856(0xc6b)+'tyle']=_0x2f44ee['QlPMF'],_0x599ba0[_0x354856(0xd16)+_0x354856(0xd43)](),_0x599ba0[_0x354856(0xab6)](_0x604f34,_0x604f34,-0x1119*0x1+-0x726+0x1842,0x793+-0x70c*0x2+0x685*0x1,_0x2f44ee['Rguwb'](Math['PI'],-0xb03*-0x2+-0x1*-0x1b79+-0x317d)),_0x599ba0[_0x354856(0xd5b)](),_0x2d6e2b['lg']&&(_0x2d6e2b['lg']['textC'+_0x354856(0x284)+'t']=_0x2f44ee[_0x354856(0x1f8)](_0x2f44ee[_0x354856(0x7b1)](_0x354856(0x4a3)+_0x2406d9+_0x2f44ee['IGbFy'],Math['round'](_0x2cdf6d['span'])),'m')+(_0x2cdf6d[_0x354856(0x760)]?_0x2f44ee['hLlxU'](_0x354856(0xc48)+'v\x20'+Math['round'](_0xd4762b[_0x354856(0x7e7)]),'°'):'')+(_0xcf3af6!==null?_0x2f44ee['cQcqe'](_0x2f44ee['srPqX'],_0xcf3af6):''));}catch(_0x5d4675){}}function _0x389461(){var _0xf8e4f7=_0x3e9452,_0x112f2a=_0x510560['Photo'+_0xf8e4f7(0x50b)+'orkSy'+'nc']||{};if(!Object['keys'](_0x112f2a)[_0xf8e4f7(0x841)+'h'])return![];return!!_0x48108f();}function _0x5c2d05(_0xd84a56){var _0x36ed22=_0x3e9452;try{var _0x6fddfd=_0x39996f;if(_0x6fddfd&&_0x6fddfd['el'])_0x6fddfd['el'][_0x36ed22(0x995)][_0x36ed22(0x317)+'ay']=_0xd84a56?'':'none';var _0x35e7f8=_0x15a2bb;if(_0x35e7f8&&_0x35e7f8['cv'])_0x35e7f8['cv'][_0x36ed22(0x995)]['displ'+'ay']=_0xd84a56?'':'none';}catch(_0x4b0fbd){}}var _0x3858b4=-0x1fe9+0xf70+-0x1079*-0x1,_0x444f0e=0x6c2+-0x7*0x157+0x29f*0x1;function _0x5da263(_0xc3fe10){var _0x2369d4=_0x3e9452;if(_0x2f44ee[_0x2369d4(0xad4)]===_0x2f44ee[_0x2369d4(0xad4)])typeof requestAnimationFrame===_0x2f44ee[_0x2369d4(0x604)]?_0x3858b4=requestAnimationFrame(_0x140b6b):_0x444f0e=setTimeout(_0x140b6b,_0xc3fe10||0x230d*-0x1+0xa*0x3b6+0x35*-0x9);else{var _0x323c35=_0x57bdf4['Unity'+_0x2369d4(0xa16)+_0x2369d4(0x9e1)][_0x2369d4(0x7d3)+'me'];_0x323c35['__sak'+'uraTa'+'g']=_0x2f44ee[_0x2369d4(0x5fc)](_0x3f0282+':',_0x43f0f4[_0x2369d4(0x236)+'m']()['toStr'+'ing'](-0x2552*0x1+-0x6bf+0x2c35)['slice'](-0x1c7a+0x156a*-0x1+0x31e6,-0xebf+-0x7c*-0x17+0x3a5)),_0x4c60fd=_0x323c35[_0x2369d4(0x751)+'uraTa'+'g'];}}function _0x140b6b(){var _0xcfcef2=_0x3e9452,_0x17766d={'prPIV':function(_0x25d6b4,_0x1632ba){var _0x1c06ff=_0x23db;return _0x2f44ee[_0x1c06ff(0x2bd)](_0x25d6b4,_0x1632ba);}};_0x3858b4=0x1*-0x215f+0x237d+0x1*-0x21e;if(!_0x2cdf6d['on']||!_0x2f44ee[_0xcfcef2(0xc25)](_0x389461)){_0x5c2d05(![]),_0x2f44ee[_0xcfcef2(0x1e4)](_0x5da263,0xf44+-0x133a*-0x2+-0x348c);return;}_0x5c2d05(!![]),_0x4da83b(),_0x2af768();if(_0x2cdf6d['boxes'])_0x3d944f();var _0x162d36=null;try{_0x493de7();}catch(_0x316d40){}try{_0x162d36=_0x347beb();}catch(_0x327ced){}try{_0x270691();}catch(_0x2c14e0){}try{if(_0x2f44ee[_0xcfcef2(0xcb2)]!==_0xcfcef2(0xc5a))_0x53ccdc(_0x162d36);else{_0x37d3e7[_0x38e7f6]={'ptr':_0x273259,'firstSeen':_0x2d69fe[_0xcfcef2(0xafc)](),'hits':0x0,'replaced':!!_0x4ccd35};try{var _0x1504a8=_0x284bf8[_0xcfcef2(0x3ac)+'r'](function(_0x27dec8){return _0x17766d['prPIV'](_0x27dec8['type'],_0x4e128a);})[0x4c1*0x8+-0x6af*0x3+-0x1*0x11fb];_0x55c0dc={'type':_0xb93efb,'atMs':_0x172b30[_0xcfcef2(0xafc)]()-_0x309b55,'originalFunc':!!(_0x1504a8&&_0x1504a8[_0xcfcef2(0x401)]&&typeof _0x1504a8[_0xcfcef2(0x401)][_0xcfcef2(0xd6f)+_0xcfcef2(0xdfa)+'nc']===_0x2f44ee[_0xcfcef2(0x604)]),'resolveGameAtFire':!!_0x2f44ee[_0xcfcef2(0xd27)](_0x13ca6d),'gameSourceAtFire':_0x595c50[_0xcfcef2(0x1c4)+'e']};}catch(_0x53adaa){}}}catch(_0x82ab1c){}_0x5da263(0x1954+-0x39f*0x1+-0x1*0x15b5);}function _0x386ea8(){var _0x4693db=_0x3e9452,_0x24edb6={'jNcfL':function(_0x955104){var _0x345a12=_0x23db;return _0x2f44ee[_0x345a12(0xd27)](_0x955104);},'PGeDh':function(_0x1381cd,_0x4300a2){var _0x9f2fe9=_0x23db;return _0x2f44ee[_0x9f2fe9(0xbfc)](_0x1381cd,_0x4300a2);},'ZRONj':function(_0x2c1d35,_0x2abb2d){return _0x2f44ee['cQcqe'](_0x2c1d35,_0x2abb2d);},'MowSN':function(_0x38b1a0,_0x1f7a4c){return _0x38b1a0+_0x1f7a4c;},'cFlBS':_0x4693db(0x30a)+_0x4693db(0xd86)+_0x4693db(0x80b)+'t\x20','LMsIK':_0x2f44ee[_0x4693db(0x48a)],'lXOIH':function(_0x1e3343,_0x594a0d){var _0x1af742=_0x4693db;return _0x2f44ee[_0x1af742(0x846)](_0x1e3343,_0x594a0d);},'vDHQh':_0x4693db(0x96a)},_0x5d1892=window['Unity'+_0x4693db(0xa16)+'dkit']&&window['Unity'+'WebMo'+_0x4693db(0x9e1)][_0x4693db(0x7d3)+'me']||null,_0x2e99d6=_0x5d1892&&_0x5d1892['il2Cp'+_0x4693db(0xdc5)+_0x4693db(0xc22)],_0x44afe9=_0x2e99d6&&_0x2e99d6[_0x4693db(0xc8a)+_0x4693db(0xa8c)],_0x1c2c2d={},_0x5a0441=[];for(var _0x157cbc in _0x4d505d){if(_0x2f44ee['ZAraX'](_0x2f44ee[_0x4693db(0x4a0)],_0x2f44ee['zIASR']))try{var _0x412d17=_0x23c48d['getIt'+'em'](_0x39fbcf);if(!_0x412d17)return;var _0x1c06f1=_0x3ebf2e['parse'](_0x412d17);if(_0x1c06f1&&typeof _0x1c06f1['x']==='numbe'+'r'&&typeof _0x1c06f1['y']===_0x4693db(0x71a)+'r')_0x4166d5['pos']=_0x1c06f1;}catch(_0x2cb23c){}else{_0x1c2c2d[_0x157cbc]=_0x2f44ee[_0x4693db(0x515)]('0x',_0x4d505d[_0x157cbc]['ptr'][_0x4693db(0x252)+_0x4693db(0x74d)](-0x313*-0x3+0x2233+0x1*-0x2b5c));if(_0x4d505d[_0x157cbc][_0x4693db(0x1e2)+_0x4693db(0x745)])_0x5a0441[_0x4693db(0x499)](_0x157cbc);}}var _0x33c6e1={};for(var _0x1270fa in _0x4d505d)_0x33c6e1[_0x1270fa]=_0x2f44ee[_0x4693db(0x520)](_0x5262e6,_0x4d505d[_0x1270fa]['ptr']);var _0x28ce5e={},_0x802341=null;try{_0x28ce5e=_0x29cd8f();}catch(_0x3b1a69){_0x2f44ee[_0x4693db(0x8f9)](_0x2f44ee['IQKCH'],_0x4693db(0x7e3))?(_0x2f44e9[_0x4693db(0x499)]('no\x20li'+_0x4693db(0x370)+_0x4693db(0x78a)+_0x4693db(0x546)+'ured\x20'+_0x4693db(0x447)),_0x3ab8b5['push'](''),_0x33cf3d[_0x4693db(0x499)](_0x2f44ee['NKSIM']),_0x2d1f76['push'](_0x4693db(0xb6a)+_0x4693db(0x437)+_0x4693db(0xd98)+_0x4693db(0x95a)+_0x4693db(0x238)+_0x4693db(0xbe4)+_0x4693db(0xdf2)+'\x20did\x20'+'not\x20m'+_0x4693db(0x8c9))):_0x802341=_0x2f44ee['zsBUR'](String,_0x3b1a69&&_0x3b1a69[_0x4693db(0x388)+'ge']||_0x3b1a69);}var _0x21dc99={'version':_0x396453,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':_0x2f44ee['IXsjr'](Date['now'](),_0x43ef6b),'frame':location[_0x4693db(0x324)]['slice'](0xdf0+0xfb*0x2+-0xfe6,0x3*0x7c9+0xb*-0x2ef+-0x1*-0x962),'host':_0x171a1f,'frameRole':_0x28d129,'uwmk':!!_0x5d1892,'il2CppContext':!!_0x2e99d6,'typeCount':_0x44afe9?Object[_0x4693db(0x5ea)](_0x44afe9)[_0x4693db(0x841)+'h']:null,'arm':_0x1c677e,'assemblies':_0x1af92a,'hooksTotal':_0x4f5925[_0x4693db(0x841)+'h'],'hooksApplied':_0x4c39ee(),'hooksResolved':_0x21b28f(),'hooksRegisteredAtArm':_0x1c677e[_0x4693db(0x9e4)+'Regis'+_0x4693db(0x7d8)]||-0x730+-0x1*-0xc56+-0x526,'hookErrors':_0x31b15e['slice'](0x17*0x43+0x207*-0x13+0x2080,0x3*-0x1f3+0x530*-0x4+0x1aa1*0x1),'instances':_0x1c2c2d,'classNames':_0x33c6e1,'instancesReplaced':_0x5a0441,'hookFireProof':_0x136a8e,'survey':_0x28ce5e,'actkKeys':_0x2ce3d3,'surveyRows':Object[_0x4693db(0x5ea)](_0x28ce5e)[_0x4693db(0xdea)+'e'](function(_0x578f72,_0x2d8199){var _0x176c69=_0x4693db;if(_0x2f44ee['HIVGW']('sbDmM',_0x2f44ee['XjdIV']))_0x24edb6['jNcfL'](_0x3dba8d);else return _0x2f44ee[_0x176c69(0xcf7)](_0x578f72,_0x28ce5e[_0x2d8199]['lengt'+'h']);},-0x3d1*0x6+-0x414+0x1afa),'reads':{'ok':_0x5ae706['ok'],'failed':_0x5ae706['faile'+'d'],'lastError':_0x5ae706['lastE'+'rror'],'source':_0x5ae706['sourc'+'e']},'identity':_0x25e222(),'globals':_0x2f44ee[_0x4693db(0x57e)](_0x5f4057),'wasmMemory':{'captured':!!_0x4b3cf7,'atMs':_0x7b6761,'bytes':(function(){var _0x426588=_0x4693db;try{return _0x4b3cf7&&_0x4b3cf7['buffe'+'r']?_0x4b3cf7[_0x426588(0x3b4)+'r'][_0x426588(0xc1b)+'ength']:-0x2387+0x4*-0x4fd+0x7ed*0x7;}catch(_0x19e0a1){return 0x7*-0x189+-0xdf*0x19+0xb5*0x2e;}}()),'exportKeys':_0x43af92},'diff':_0x113284['slice'](-0x17*0x155+0x106*-0x1+-0x1fa9*-0x1,0x5d9*-0x5+-0x1*0x371+0x20d6),'speed':{'on':_0x38d0af['on'],'factor':_0x38d0af[_0x4693db(0x2a3)+'r'],'writes':_0x4f6629,'scaled':_0x438391[_0x4693db(0x9d5)](-0x50f+-0xab*0x35+-0x1*-0x2876,0x1d95+0x17b5+0x1*-0x353a),'skipped':_0x4ed0ef[_0x4693db(0x9d5)](-0xd47+-0x161*0x14+0x28db*0x1,-0x1865+-0x25*0xa1+0x2fba)},'esp':_0x2f44ee[_0x4693db(0x43d)](_0x9c3025),'view':_0x2f44ee[_0x4693db(0xb58)](_0xf42e2e),'camera':(function(){var _0x23a4ae=_0x4693db;try{var _0x4886fe=_0x2f44ee[_0x23a4ae(0x6bd)](_0x493de7);return{'ok':_0x4886fe['ok'],'source':_0x4886fe[_0x23a4ae(0x1c4)+'e'],'why':_0x4886fe[_0x23a4ae(0xdf0)],'tried':_0x4886fe[_0x23a4ae(0x23c)],'camPtr':'0x'+_0x4886fe[_0x23a4ae(0x7e5)+'r'][_0x23a4ae(0x252)+_0x23a4ae(0x74d)](0x3*-0x946+0x17+0x5*0x58f),'tfPtr':'0x'+_0x4886fe['tfPtr'][_0x23a4ae(0x252)+'ing'](0xa85*-0x1+-0x1*-0xb71+-0xdc),'fov':_0x4886fe['fov'],'quat':_0x4886fe[_0x23a4ae(0xb04)],'pos':_0x4886fe['pos'],'basis':_0x4886fe[_0x23a4ae(0xa52)],'errors':_0x4886fe['error'+'s'][_0x23a4ae(0x9d5)](0x3ae*0x5+0x22f2+-0x3558,-0x1656+0x1d94+-0x1*0x73a)};}catch(_0x44e1c7){if(_0x23a4ae(0xdb7)!==_0x2f44ee['hBsZc'])_0x146fe4['style'][_0x23a4ae(0x5ce)+'ty']='1';else return{'ok':![],'error':String(_0x44e1c7&&_0x44e1c7[_0x23a4ae(0x388)+'ge']||_0x44e1c7)['slice'](0x1e0b+0x121*-0x1e+0x3d3,0x288+-0x86+-0x18a)};}}()),'angles':(function(){var _0x58c390=_0x4693db,_0x44a9a0={'ZXGuG':function(_0x4d1cc4,_0x12c735){return _0x4d1cc4!==_0x12c735;},'KEqBh':_0x2f44ee[_0x58c390(0x762)],'rxoef':function(_0x3cda96){return _0x2f44ee['fAXfm'](_0x3cda96);},'ZghUn':function(_0x36723d){return _0x36723d();}},_0x5c07a1=_0x2df9e2(),_0x4a9973=null,_0x28da0a=null,_0x5ac91d=_0x48108f();if(_0x5ac91d){if(_0x2f44ee['jHwSx'](_0x58c390(0x4c1),'AMZah')){var _0xa5d5c2=_0x2f44ee[_0x58c390(0x583)](_0x2368a9,_0x5ac91d['eye'],[_0x5ac91d['eye'][-0x15*-0x21+-0x2602+0x234d*0x1],_0x5ac91d[_0x58c390(0x7d9)][-0x112d+0xa*0x10d+-0x1*-0x6ac],_0x5ac91d[_0x58c390(0x7d9)][-0xcb9*0x3+0x3*-0x899+0x5c*0xb2]+(-0x2d2+0x1652+-0x1f*0xa1)],0x150e+0x2011*0x1+0x3137*-0x1,0x3d*0x8e+-0x2187+-0x3*-0x133);_0xa5d5c2&&(_0x4a9973=_0x2f44ee[_0x58c390(0xa01)](_0xa5d5c2['x'],-0x25b4+-0x270d+0x1ae3*0x3),_0x28da0a=_0x2f44ee['prrJc'](_0xa5d5c2['y'],-0xf*-0x86+-0x226+-0x1cc));}else _0x4344ad=_0x478e88,_0x7bf771=_0x5b6cf9[_0x37eb89];}var _0x24ec47=null,_0x11380a=null;if(_0x5ac91d){var _0x1ef15d=_0x2368a9(_0x5ac91d['eye'],[_0x5ac91d[_0x58c390(0x7d9)][-0x21a7+-0x138d+0x3534],_0x5ac91d['eye'][-0x2299+0x30b+0x3*0xa85]+(-0x1*0x1a71+-0x5c2+0x203d),_0x5ac91d['eye'][-0x5*-0x6cd+-0x2421+0x27*0xe]+(-0x4*0x374+-0x238a+0xda*0x3a)],-0x39a*-0xa+0xf0d+-0x2f29,-0x1*-0x1345+-0x7e4+-0x779);if(_0x1ef15d)_0x24ec47=_0x1ef15d['y']/(0x1b*-0x4e+0x1*0x565+0x73*0xf);var _0x2279a8=_0x2f44ee[_0x58c390(0x583)](_0x2368a9,_0x5ac91d[_0x58c390(0x7d9)],[_0x5ac91d['eye'][0x264b+-0x2234+-0x417],_0x5ac91d['eye'][0x188b*-0x1+0x1*0x15ad+0x2df]-(-0x23*0x1+0x1d*0xbb+-0x1502),_0x2f44ee['QXdIl'](_0x5ac91d[_0x58c390(0x7d9)][0x13*-0x18d+-0x330*-0xb+-0x597],-0x1*0xb7d+-0x21bc+-0x1*-0x2d43)],0x8a1*0x1+-0x2a2*-0xa+-0x1f0d,-0x1aa*-0xc+-0x1d35*-0x1+0x1*-0x2d45);if(_0x2279a8)_0x11380a=_0x2279a8['y']/(-0x337+-0x9c6+0x10e5);}return{'identified':_0x2a0c8a[_0x58c390(0x553)+'ified'],'why':_0x2a0c8a[_0x58c390(0xdf0)],'source':_0x2a0c8a[_0x58c390(0x1c4)+'e'],'viewHooks':(function(){var _0x6478b6=_0x58c390,_0x4969da={'JKcND':'no\x20pl'+_0x6478b6(0x777)+'call'};if(_0x44a9a0[_0x6478b6(0xc47)]('ubKPD',_0x44a9a0[_0x6478b6(0x801)]))return _0x303255[_0x6478b6(0x95d)+'s']['push'](_0x4969da[_0x6478b6(0x5c5)]),_0x349cbb;else try{return _0x44a9a0['rxoef'](_0x391bd0);}catch(_0x1dec54){return{'err':String(_0x1dec54&&_0x1dec54['messa'+'ge']),'stack':String(_0x1dec54&&_0x1dec54['stack'])};}}()),'setterPair':(function(){var _0x2f0bf0=_0x58c390,_0x3b75c1=_0x44a9a0[_0x2f0bf0(0x3de)](_0x4d3a4d);return _0x3b75c1?{'a':_0x3b75c1['rawA'],'b':_0x3b75c1[_0x2f0bf0(0xdcb)],'hits':_0x3b75c1['hits'],'order':_0x3b75c1[_0x2f0bf0(0x55d)]}:null;}()),'yawAt':_0x2a0c8a['yawGe'+_0x58c390(0xabe)]||_0x2f44ee['XeuhY'],'pitchAt':_0x2a0c8a[_0x58c390(0x3e7)+_0x58c390(0x948)+'r']||_0x58c390(0x5f1)+'(gues'+'s)','getters':_0x2a0c8a[_0x58c390(0x276)+'rs'],'rawPitch':_0x2a0c8a['rawPi'+'tch'],'rawYaw':_0x2a0c8a['rawYa'+'w'],'pitch':_0x2a0c8a[_0x58c390(0x3e7)],'yaw':_0x2a0c8a[_0x58c390(0x5d2)],'legacyOffsetsCleared':_0x4d364b,'fov':_0xd4762b[_0x58c390(0x7e7)],'fovSane':_0x2f44ee['cJwxD'](_0xd4762b[_0x58c390(0x7e7)],-0x2179*-0x1+-0x189*0x9+-0x136c)&&_0xd4762b['fov']<=-0x26*0x45+0x1*-0x169+0xc15,'centreX':_0x4a9973,'centreY':_0x28da0a,'aboveY':_0x24ec47,'belowY':_0x11380a,'projection':_0xe56613()};}()),'fov':_0xd4762b[_0x4693db(0x7e7)],'espView':{'on':_0x2cdf6d['on'],'boxes':_0x2cdf6d[_0x4693db(0x760)],'span':_0x2cdf6d[_0x4693db(0xb48)]},'local':(function(){var _0x3ce71f=_0x4693db;if(_0x24edb6['lXOIH'](_0x24edb6['vDHQh'],'PumPO')){var _0x53bd6b=_0x24edb6[_0x3ce71f(0x2d6)](_0x48108f);if(!_0x53bd6b)return null;return{'ptr':'0x'+_0x53bd6b[_0x3ce71f(0x87e)]['toStr'+_0x3ce71f(0x74d)](0xd02+-0x7ae*-0x1+0x3c*-0x58),'feet':_0x53bd6b['feet'],'eye':_0x53bd6b[_0x3ce71f(0x7d9)],'posAt':_0x53bd6b['posAt'],'copies':_0x53bd6b[_0x3ce71f(0x5bc)+'s'],'cluster':_0x53bd6b['clust'+'er'],'eyeHeight':_0xb5ae23,'pitch':_0x53bd6b[_0x3ce71f(0x3e7)],'yaw':_0x53bd6b['yaw'],'reach':_0x53bd6b['reach']};}else _0x33bf0f=_0x24edb6[_0x3ce71f(0x643)](_0x24edb6['ZRONj'](_0x24edb6[_0x3ce71f(0x609)](_0x24edb6['cFlBS']+_0x5808e4['hookF'+_0x3ce71f(0x646)+_0x3ce71f(0xdd9)][_0x3ce71f(0x8d1)],_0x3ce71f(0x474)+'th\x20or'+'igina'+'lFunc'+'=')+_0x85c3fe[_0x3ce71f(0xb99)+_0x3ce71f(0x646)+'oof'][_0x3ce71f(0xd6f)+_0x3ce71f(0xdfa)+'nc']+(_0x3ce71f(0x781)+_0x3ce71f(0x6b3)+'resol'+_0x3ce71f(0x312))+_0x4c2c27['hookF'+'irePr'+'oof'][_0x3ce71f(0xab3)+_0x3ce71f(0x776)+_0x3ce71f(0x419)+'re'],_0x24edb6[_0x3ce71f(0x8b4)]),_0x347d96[_0x3ce71f(0xb99)+'irePr'+'oof'][_0x3ce71f(0xae5)+'ource'+_0x3ce71f(0xba1)+'e']||_0x3ce71f(0xa9e))+('),\x20so'+'\x20the\x20'+_0x3ce71f(0x9d6)+_0x3ce71f(0xc05)+_0x3ce71f(0xc10)+'ed\x20th'+_0x3ce71f(0xb16)+'d\x20is\x20'+'not\x20r'+'eacha'+'ble\x20n'+_0x3ce71f(0xe01));}()),'uwmkLog':_0x3b92de['slice'](0x3*0x81c+0x669*-0x6+0xe22,0x141b*-0x1+-0x1c58+-0x102d*-0x3),'warnings':[]};if(_0x802341)_0x21dc99[_0x4693db(0x628)+_0x4693db(0xb4b)]['push']('surve'+'y\x20fai'+'led:\x20'+_0x802341);if(_0x1c677e[_0x4693db(0x95d)])_0x21dc99['warni'+_0x4693db(0xb4b)][_0x4693db(0x499)](_0x2f44ee['grXTJ']+_0x1c677e[_0x4693db(0x95d)]);_0x21dc99[_0x4693db(0x227)+_0x4693db(0x380)]===-0x885*-0x1+-0x2b*0x57+-0x4e*-0x14&&_0x2f44ee[_0x4693db(0x946)](Object[_0x4693db(0x5ea)](_0x21dc99[_0x4693db(0xd84)+_0x4693db(0xd7a)])[_0x4693db(0x841)+'h'],-0xb87+0x1*-0xffd+0x1b84)&&_0x21dc99[_0x4693db(0x628)+_0x4693db(0xb4b)]['push'](_0x2f44ee['PdvLy'](_0x2f44ee[_0x4693db(0x6ff)](_0x2f44ee[_0x4693db(0x241)],Object['keys'](_0x21dc99['insta'+_0x4693db(0xd7a)])[_0x4693db(0x841)+'h'])+_0x2f44ee['evkds'],_0x5ae706['lastE'+_0x4693db(0x8aa)]?_0x4693db(0x1e5)+'n:\x20'+_0x5ae706[_0x4693db(0x4d0)+'rror']:_0x4693db(0xdf7)+_0x4693db(0x1e6)+'iled,'+_0x4693db(0x47a)+_0x4693db(0x371)+'offse'+_0x4693db(0x383)+_0x4693db(0x410)+_0x4693db(0x3c5)+_0x4693db(0x9be)+'e.'));_0x21dc99['ident'+_0x4693db(0x255)]&&_0x21dc99[_0x4693db(0x553)+_0x4693db(0x255)][_0x4693db(0x5ef)+_0x4693db(0x42a)]===![]&&_0x21dc99[_0x4693db(0x628)+_0x4693db(0xb4b)][_0x4693db(0x499)](_0x2f44ee['NnjMe'](_0x4693db(0x46b)+_0x4693db(0xa17)+'MK\x20CO'+_0x4693db(0x76a)+_0x4693db(0x9c6)+_0x4693db(0xaf8)+'ndow.'+_0x4693db(0xa07)+_0x4693db(0xa16)+_0x4693db(0x6e1)+_0x4693db(0x3a1)+'Runti'+'me\x20we'+_0x4693db(0x72c)+_0x4693db(0xa2b)+'\x20','repla'+'ced\x20b'+'y\x20a\x20d'+_0x4693db(0x6ce)+_0x4693db(0x43c)+'nstan'+'ce,\x20s'+'o\x20we\x20'+'are\x20a'+_0x4693db(0xabf)+'\x20the\x20'+'wrong'+_0x4693db(0x7d6)+_0x4693db(0x502)+'r\x20')+_0x2f44ee[_0x4693db(0x496)]+('Sakur'+'a/UWM'+_0x4693db(0x972)+'ipt\x20i'+_0x4693db(0x84d)+_0x4693db(0x8d5)+_0x4693db(0xdd4)+_0x4693db(0x5c3)+_0x4693db(0x228)+_0x4693db(0x484)+'.'));if(_0x21dc99[_0x4693db(0x553)+'ity']&&_0x21dc99[_0x4693db(0x553)+_0x4693db(0x255)]['plugi'+'nRunt'+_0x4693db(0x72b)+_0x4693db(0x770)+_0x4693db(0x678)]===![]){if(_0x2f44ee['Apbkb']!==_0x4693db(0x52e))_0x21dc99[_0x4693db(0x628)+'ngs'][_0x4693db(0x499)]('plugi'+_0x4693db(0x909)+'ntime'+_0x4693db(0xbec)+_0x4693db(0xc94)+'ndow.'+_0x4693db(0xa07)+_0x4693db(0xa16)+_0x4693db(0x6e1)+_0x4693db(0x7d3)+'me\x20-\x20'+'the\x20p'+_0x4693db(0x637)+_0x4693db(0x1ed)+_0x4693db(0xc3d)+'\x20'+('again'+_0x4693db(0x97c)+'diffe'+_0x4693db(0xad6)+'Runti'+_0x4693db(0xc4f)+'stanc'+_0x4693db(0xba3)+_0x4693db(0x6ad)+_0x4693db(0x5dc)+_0x4693db(0x617)+'w\x20exp'+_0x4693db(0xe07)));else{var _0x4fabbd=_0x15f7b1[_0x4693db(0x3bc)];if(!_0x4fabbd||_0x2f44ee['AyNHb'](_0x4fabbd['__sak'+'ura'],_0x45e596))return;try{if(_0x2f44ee[_0x4693db(0xb0b)](_0x4fabbd['kind'],_0x2f44ee['vWQbx'])){_0x3ebc81()[_0x4693db(0x67b)]({'host':_0x4fabbd[_0x4693db(0x47d)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x4fabbd['kind']===_0x4693db(0x8b8)+'t')_0x289f69()[_0x4693db(0x67b)](_0x4fabbd['repor'+'t']);}catch(_0x4fa6a9){_0x3618fb[_0x4693db(0x8c0)]('%c[sa'+'kura]'+'\x20pane'+'l\x20upd'+_0x4693db(0x9d7)+_0x4693db(0x52f),_0x4693db(0xe02)+':'+_0x4eb2e7,_0x4fa6a9);}}}if(_0x21dc99['esp']&&_0x21dc99[_0x4693db(0xaa1)][_0x4693db(0x32c)])_0x21dc99[_0x4693db(0x628)+_0x4693db(0xb4b)][_0x4693db(0x499)](_0x4693db(0x746)+_0x21dc99[_0x4693db(0xaa1)]['note']);if(_0x21dc99[_0x4693db(0xa50)+'ls']&&!_0x21dc99['globa'+'ls'][_0x4693db(0x387)+'8']){var _0x26a453='';_0x21dc99['hookF'+'irePr'+_0x4693db(0xdd9)]&&(_0x2f44ee[_0x4693db(0xd06)](_0x2f44ee[_0x4693db(0x77e)],_0x4693db(0x4a4))?_0x2fa44b(!_0x42eb5d['on'],_0xfcde40[_0x4693db(0x2a3)+'r']):_0x26a453=_0x2f44ee[_0x4693db(0x791)](_0x2f44ee[_0x4693db(0x9af)](_0x2f44ee[_0x4693db(0x3ea)](_0x2f44ee['DEPSE'](_0x2f44ee['HUdLI']+_0x21dc99[_0x4693db(0xb99)+_0x4693db(0x646)+'oof'][_0x4693db(0x8d1)],_0x4693db(0x474)+'th\x20or'+'igina'+_0x4693db(0x78f)+'=')+_0x21dc99[_0x4693db(0xb99)+_0x4693db(0x646)+'oof'][_0x4693db(0xd6f)+_0x4693db(0xdfa)+'nc']+('\x20and\x20'+_0x4693db(0x6b3)+_0x4693db(0xab3)+_0x4693db(0x312)),_0x21dc99[_0x4693db(0xb99)+_0x4693db(0x646)+_0x4693db(0xdd9)][_0x4693db(0xab3)+_0x4693db(0x776)+_0x4693db(0x419)+'re']),'\x20(sou'+_0x4693db(0xad5))+(_0x21dc99[_0x4693db(0xb99)+'irePr'+_0x4693db(0xdd9)][_0x4693db(0xae5)+_0x4693db(0x586)+'AtFir'+'e']||'none'),'),\x20so'+'\x20the\x20'+'refer'+_0x4693db(0xc05)+_0x4693db(0xc10)+'ed\x20th'+_0x4693db(0xb16)+_0x4693db(0x955)+'not\x20r'+_0x4693db(0x725)+_0x4693db(0x2f6)+_0x4693db(0xe01))),_0x21dc99['warni'+_0x4693db(0xb4b)][_0x4693db(0x499)](_0x2f44ee[_0x4693db(0xcf6)](_0x2f44ee[_0x4693db(0x60a)](_0x2f44ee[_0x4693db(0xdb8)]('Unity'+'\x20inst'+_0x4693db(0x90d)+_0x4693db(0x483)+'esolv'+_0x4693db(0xcb1)+_0x4693db(0xd12)+_0x4693db(0xad1)+'\x20',_0x21dc99[_0x4693db(0xa50)+'ls'][_0x4693db(0xae5)+_0x4693db(0x586)]||_0x2f44ee[_0x4693db(0xa7f)]),_0x4693db(0x72a))+_0x2f44ee['chBQv'],_0x26a453));}if(_0x21dc99[_0x4693db(0xa50)+'ls']&&!_0x21dc99[_0x4693db(0xa50)+'ls'][_0x4693db(0x8de)+'Wrapp'+'er']||_0x21dc99[_0x4693db(0xa50)+'ls']['value'+_0x4693db(0x99c)+'er']===_0x4693db(0x802)+'ined'){if(_0x2f44ee['tZUIM'](_0x4693db(0xa74),_0x2f44ee['smKXg'])){var _0xe69f07=_0x2f44ee[_0x4693db(0xc50)](_0x59166e);_0x475a00[_0x4693db(0x8de)]=_0x2f44ee['hPGLI'](_0x2d5f02,_0xe69f07),_0x164186['textC'+_0x4693db(0x284)+'t']=(_0x2f44ee[_0x4693db(0xa81)](_0x2bff52,0x1*0x230d+-0xdd2+0x2*-0xa9d)?_0xe69f07[_0x4693db(0x2d8)+'ed'](0x2386+0x1e9a*-0x1+-0x4eb*0x1):_0x5036d1(_0xee4d75['round'](_0xe69f07)))+(_0x57c91f[_0x4693db(0xd4e)+'et'][_0x4693db(0x272)]||'');var _0x10a2aa=_0x2f44ee[_0x4693db(0xa7a)](_0x2f44ee[_0x4693db(0x92d)](_0xe69f07,_0x5b5023)/_0x2f44ee['Ttojb'](_0x589180,_0x1b0292),0x240a+-0x2090+-0x316);_0x59c6df[_0x4693db(0x995)]['setPr'+_0x4693db(0x793)+'y'](_0x2f44ee[_0x4693db(0xb33)],_0x2f44ee[_0x4693db(0xc79)](_0x10a2aa,'%'));}else _0x21dc99[_0x4693db(0x628)+_0x4693db(0xb4b)]['push'](_0x4693db(0xb98)+_0x4693db(0x94a)+_0x4693db(0x4b9)+_0x4693db(0x8dd)+'t.Val'+'ueWra'+_0x4693db(0xbb5)+'is\x20mi'+_0x4693db(0x712)+'\x20-\x20ca'+_0x4693db(0x2ea)+_0x4693db(0x5ab)+'unnin'+'g\x20bli'+'nd.');}return _0x21dc99['hooks'+_0x4693db(0xde0)]>0x1*-0x1b4f+0x19da+0x1*0x175&&_0x2f44ee[_0x4693db(0x7cc)](_0x21dc99['hooks'+'Appli'+'ed'],-0x202e+-0x1d0+0x21fe)&&_0x44afe9&&(_0x21dc99['hooks'+'Resol'+_0x4693db(0x47f)]===0x254*0xd+0xcbc+-0x2b00?_0x21dc99[_0x4693db(0x628)+_0x4693db(0xb4b)][_0x4693db(0x499)](_0x2f44ee[_0x4693db(0xa12)](_0x2f44ee[_0x4693db(0x244)](_0x2f44ee[_0x4693db(0xb26)](_0x2f44ee['WDBJJ'](_0x4693db(0x9ac)+_0x21dc99[_0x4693db(0x9e4)+'Total']+_0x2f44ee[_0x4693db(0x833)]+(_0x4693db(0x5a7)+'once\x20'+'durin'+'g\x20Web'+'Assem'+'bly.i'+_0x4693db(0xb68)+_0x4693db(0xaf3)+'\x20and\x20'+_0x4693db(0x257)+_0x4693db(0xaf6)+_0x4693db(0xd50)+'n.hoo'+'ks.le'+_0x4693db(0x8a1)+'\x20'),_0x4693db(0x558)+_0x4693db(0x37c)+'egist'+'ered\x20'+'after'+_0x4693db(0x8e6)+_0x4693db(0xdb1)+_0x4693db(0x394)+'\x20for\x20'+_0x4693db(0x3e2)+_0x4693db(0xdaa)+'f\x20the'+_0x4693db(0x7f9)+'.\x20'),_0x4693db(0xd99)+_0x4693db(0x7d8)+'\x20'),_0x21dc99[_0x4693db(0x9e4)+'Regis'+_0x4693db(0x7d8)+_0x4693db(0xa5b)]),_0x2f44ee['IUaEH'])):_0x4693db(0x214)==='XpGwt'?_0x21dc99[_0x4693db(0x628)+_0x4693db(0xb4b)][_0x4693db(0x499)](_0x2f44ee[_0x4693db(0x843)](_0x2f44ee[_0x4693db(0x6d2)](_0x2f44ee[_0x4693db(0x993)](_0x2f44ee['mBfQU'](_0x2f44ee['tFKyk'],_0x21dc99['hooks'+_0x4693db(0x8a5)+_0x4693db(0x47f)]),_0x2f44ee[_0x4693db(0x501)])+_0x21dc99[_0x4693db(0x9e4)+'Total'],_0x4693db(0x75a)+'(s)\x20t'+'o\x20a\x20t'+_0x4693db(0x6d9)+'index'+_0x4693db(0xa13)+'appli'+'ed\x20no'+_0x4693db(0xc45)+'he\x20si'+'gnatu'+'re\x20'),'(this'+_0x4693db(0xb61)+_0x4693db(0x59c)+_0x4693db(0xd97)+_0x4693db(0xb14)+'id\x20do'+_0x4693db(0xb09)+_0x4693db(0x1eb)+_0x4693db(0x3bf)+_0x4693db(0x485)+_0x4693db(0x7b2))):_0x288744=_0x417bdb(_0x491c9d)),_0x21dc99['hooks'+_0x4693db(0x765)+'ed']>0x1e15+-0xc97*0x2+-0x1*0x4e7&&!_0x21dc99[_0x4693db(0xd84)+_0x4693db(0xd7a)][_0x4693db(0x711)+'ntrol'+_0x4693db(0x660)]&&_0x21dc99[_0x4693db(0x628)+'ngs']['push'](_0x2f44ee[_0x4693db(0x3dd)](_0x4693db(0x700)+_0x4693db(0x5a0)+'appli'+_0x4693db(0x235)+'t\x20no\x20'+_0x4693db(0x711)+_0x4693db(0x640)+_0x4693db(0x1bc)+'as\x20fi'+_0x4693db(0xcff)+'et.\x20',_0x2f44ee['RexNe'])),_0x21dc99['insta'+_0x4693db(0x887)+_0x4693db(0xd77)+'ed']['lengt'+'h']&&_0x21dc99['warni'+'ngs']['push']('rebui'+_0x4693db(0x667)+_0x4693db(0xcf0)+_0x4693db(0x6f9)+'captu'+_0x4693db(0xa66)+_0x4693db(0xdd6)+_0x4693db(0xcef)+_0x21dc99[_0x4693db(0xd84)+_0x4693db(0x887)+_0x4693db(0xd77)+'ed'][_0x4693db(0xc01)](',\x20')),_0x21dc99;}function _0x3f18b9(_0x1b3d6a){var _0x56c8cd=_0x3e9452;console['log'](_0x2f44ee[_0x56c8cd(0x7f5)],_0x2f44ee[_0x56c8cd(0x4df)]+_0x4e9faa+(_0x56c8cd(0xa94)+_0x56c8cd(0x9f8)+_0x56c8cd(0x828)+'0'),_0x1b3d6a),console['log'](_0x2f44ee['HmGLV'](_0x4b38f3+'\x0a'+JSON['strin'+'gify'](_0x1b3d6a,null,0x1f5c+-0x11*0x181+-0x13*0x4e)+'\x0a',_0x142eea)),_0x3ab911=_0x1b3d6a;try{_0x2f44ee['HIVGW']('Gcpbj',_0x56c8cd(0xb3a))?_0x3a7d51['setIt'+'em'](_0x329975,_0x43c860['strin'+_0x56c8cd(0x5c0)](_0x4df026['pos'])):_0x12087b(_0x1b3d6a);}catch(_0x1a96c4){}_0x2f44ee[_0x56c8cd(0x731)](_0x2fe32f,'repor'+'t',{'report':_0x1b3d6a});}function _0x24d313(){var _0x419e51=_0x3e9452;try{if(_0x2f44ee[_0x419e51(0x97f)](_0x419e51(0x1c7),'UTnAo')){if(_0x428cc5[_0x419e51(0xc14)]&&_0xbae0bb['top']!==_0x17b904)_0x27bc5a[_0x419e51(0xc14)][_0x419e51(0xb7c)+_0x419e51(0x623)+'e'](_0x5d2194,'*');}else return _0x386ea8();}catch(_0x4956ce){return{'version':_0x396453,'when':new Date()[_0x419e51(0x362)+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x43ef6b,'host':_0x171a1f,'uwmk':!!(window[_0x419e51(0xa07)+'WebMo'+_0x419e51(0x9e1)]&&window[_0x419e51(0xa07)+'WebMo'+_0x419e51(0x9e1)][_0x419e51(0x7d3)+'me']),'il2CppContext':![],'arm':_0x1c677e,'hooksTotal':_0x4f5925[_0x419e51(0x841)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x4956ce&&_0x4956ce[_0x419e51(0x388)+'ge']||_0x4956ce)};}}function _0x4a6159(){var _0x442b3e=_0x3e9452,_0x21b08c=0xb4+-0xa63+0x9af;try{_0x140b6b();}catch(_0x3d750e){}try{_0x268517();}catch(_0x282857){}setInterval(_0x299e4e,-0xf1e+-0x3*0x4ff+0x219f*0x1),_0x3f18b9(_0x2f44ee[_0x442b3e(0xa34)](_0x24d313)),function _0x56c8ee(){var _0x4744bd=_0x442b3e;if(!_0x4f5925[_0x4744bd(0x841)+'h'])try{_0x47a6df();}catch(_0x238435){}_0x21b08c++,_0x3f18b9(_0x24d313());if(!_0x4f5925[_0x4744bd(0x841)+'h']&&_0x21b08c<-0x12dc+-0xf81+0x2389)setTimeout(_0x56c8ee,-0xa*-0x347+-0x49e*0x2+-0xfba);else{if(!Object[_0x4744bd(0x5ea)](_0x4d505d)[_0x4744bd(0x841)+'h']&&_0x21b08c<-0x621+-0x1*-0x9fb+-0x2ae)setTimeout(_0x56c8ee,-0x1747+-0x1bd7+0x13*0x31a);else setTimeout(_0x56c8ee,0xbf7*0x2+-0x19c9+0x68b);}}();}if(document['body'])_0x2f44ee[_0x3e9452(0xd27)](_0x4a6159);else document['addEv'+'entLi'+'stene'+'r']('DOMCo'+_0x3e9452(0x65f)+_0x3e9452(0x704)+'d',_0x4a6159,{'once':!![]});if(document[_0x3e9452(0x99d)])try{if(_0x3e9452(0x38a)===_0x3e9452(0xc9a))return _0x29479c['sourc'+'e']=_0x2f44ee[_0x3e9452(0x9b5)],_0x36d4da;else _0x2f44ee[_0x3e9452(0x9d2)](_0x7f5438);}catch(_0x4bc0d4){}else document[_0x3e9452(0xad2)+_0x3e9452(0x9ee)+'stene'+'r'](_0x3e9452(0xd22)+_0x3e9452(0x65f)+'Loade'+'d',function(){try{_0x2f44ee['ZbaRJ'](_0x7f5438);}catch(_0x37ec4c){}},{'once':!![]});})()));
