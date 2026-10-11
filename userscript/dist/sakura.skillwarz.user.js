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

function _0x29e5(_0x1198e2,_0x2a27bd){_0x1198e2=_0x1198e2-(0x25+0xbb9+-0xa99*0x1);var _0x35f3d1=_0x1a7d();var _0x435333=_0x35f3d1[_0x1198e2];if(_0x29e5['ORjlKW']===undefined){var _0x4bb504=function(_0x46b71e){var _0x5f1ff9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3d2437='',_0x93f6d7='';for(var _0x117dcc=0xad4+-0xb7a+0xa6,_0x488670,_0x4c23f9,_0x36c0c0=0xe28+0x26e0+0x1*-0x3508;_0x4c23f9=_0x46b71e['charAt'](_0x36c0c0++);~_0x4c23f9&&(_0x488670=_0x117dcc%(0x777+-0x5*0x5e7+0xb08*0x2)?_0x488670*(-0x1*0x397+0x10db+0x341*-0x4)+_0x4c23f9:_0x4c23f9,_0x117dcc++%(0x1c81+0x6*-0x24f+-0xea3))?_0x3d2437+=String['fromCharCode'](-0x1035+0x222b*-0x1+0x335f&_0x488670>>(-(-0x41*0x17+0x1c5*-0x7+-0x1*-0x123c)*_0x117dcc&0xcf8*-0x3+-0x5d*-0x15+0xa6f*0x3)):0x1022+-0xd9+-0xf49){_0x4c23f9=_0x5f1ff9['indexOf'](_0x4c23f9);}for(var _0x217a4a=-0x6*-0x39b+0x17*0x5d+-0x1dfd,_0x1ebbda=_0x3d2437['length'];_0x217a4a<_0x1ebbda;_0x217a4a++){_0x93f6d7+='%'+('00'+_0x3d2437['charCodeAt'](_0x217a4a)['toString'](-0x8c3*0x3+-0xc57*-0x3+-0xaac))['slice'](-(0x569+0x11ab+-0x1712));}return decodeURIComponent(_0x93f6d7);};_0x29e5['dVkgXL']=_0x4bb504,_0x29e5['GQtEiR']={},_0x29e5['ORjlKW']=!![];}var _0x394be6=_0x35f3d1[-0x1*0x1f24+-0x26fa+-0x1*-0x461e],_0x2f8018=_0x1198e2+_0x394be6,_0x4b2f71=_0x29e5['GQtEiR'][_0x2f8018];return!_0x4b2f71?(_0x435333=_0x29e5['dVkgXL'](_0x435333),_0x29e5['GQtEiR'][_0x2f8018]=_0x435333):_0x435333=_0x4b2f71,_0x435333;}(function(_0x1d5d6e,_0x5e0e55){var _0x499994=_0x29e5,_0xe1c4b9=_0x1d5d6e();while(!![]){try{var _0x10e291=parseInt(_0x499994(0x34e))/(0x2b*-0xde+0x22f1+0x25a)*(-parseInt(_0x499994(0x69f))/(-0x92a+-0x7*-0x3f+-0x1*-0x773))+parseInt(_0x499994(0xd15))/(-0x1*-0x14fe+0x96c+-0x1e67)+-parseInt(_0x499994(0x813))/(-0x241d+-0x1db*0x11+0x3d*0x11c)*(-parseInt(_0x499994(0x290))/(0x825+0x2*-0x7b5+-0x3*-0x26e))+-parseInt(_0x499994(0x968))/(-0xf09*-0x2+0x622+-0x242e)+parseInt(_0x499994(0x4a3))/(0x3*-0xcf6+-0xe3*0x1f+0x4266)*(-parseInt(_0x499994(0x5ca))/(0x2e*-0x2+0x2f+-0x35*-0x1))+-parseInt(_0x499994(0xd23))/(0x2f6+-0x86c+0x1*0x57f)+parseInt(_0x499994(0x94c))/(0x1*-0xda5+0x247e+-0x16cf);if(_0x10e291===_0x5e0e55)break;else _0xe1c4b9['push'](_0xe1c4b9['shift']());}catch(_0x355698){_0xe1c4b9['push'](_0xe1c4b9['shift']());}}}(_0x1a7d,-0x859*0xf0+0x2*-0xb9f59+0x2ab587*0x1),((()=>{'use strict';var _0x419cc1=_0x29e5,_0x25545f={'UbRka':function(_0x5ec447,_0x58407a,_0x2562e5){return _0x5ec447(_0x58407a,_0x2562e5);},'Tbskc':function(_0x203a8e){return _0x203a8e();},'hmwiE':_0x419cc1(0x499)+'e','QubhL':function(_0x36e405,_0x52f0e0){return _0x36e405<_0x52f0e0;},'gmyvC':_0x419cc1(0xd8a)+_0x419cc1(0x5cf),'VeUSY':_0x419cc1(0x34d),'igDJR':function(_0x16c304,_0x82c530){return _0x16c304===_0x82c530;},'YBvSX':function(_0xd1f736,_0x292890){return _0xd1f736-_0x292890;},'ykSQg':'sakur'+'a-sw-'+_0x419cc1(0xd8b)+'b','CWVkE':function(_0x36f022,_0x1684b8){return _0x36f022&&_0x1684b8;},'ONSYa':'TTAsD','FXFHa':_0x419cc1(0xba0),'WVHXT':function(_0x5e93d4,_0x4c7726){return _0x5e93d4+_0x4c7726;},'pAmIz':'backg'+_0x419cc1(0x494)+_0x419cc1(0x685)+'(21,1'+'2,29,'+_0x419cc1(0xbb0)+'order'+':1px\x20'+_0x419cc1(0xb33)+_0x419cc1(0xd2d)+_0x419cc1(0xc00)+'143,1'+_0x419cc1(0x2b1)+_0x419cc1(0xbcc)+'or:','HWckH':function(_0x3e2224,_0x2649d8){return _0x3e2224(_0x2649d8);},'tKUkt':_0x419cc1(0x3d6)+_0x419cc1(0x4e9)+_0x419cc1(0x5fc)+'Modki'+_0x419cc1(0x34c)+_0x419cc1(0x57b)+_0x419cc1(0x356)+_0x419cc1(0x3af)+_0x419cc1(0x52f)+_0x419cc1(0x2d0)+'pture'+'\x20is\x20r'+_0x419cc1(0xe03)+_0x419cc1(0x55b)+'nd.','rUCqM':_0x419cc1(0x2c4),'aBwfz':'sakur'+_0x419cc1(0x84d)+'v2-cs'+'s','VyvrU':_0x419cc1(0xa33),'DZvKJ':function(_0x24cc6f,_0x46472e){return _0x24cc6f!==_0x46472e;},'usWTB':_0x419cc1(0x170),'QovMR':_0x419cc1(0x183),'KCyTX':function(_0x33421f,_0x1e61b8){return _0x33421f(_0x1e61b8);},'sSuBI':'#f7ee'+'f5','zLxLB':'snaps'+_0x419cc1(0x1e5),'yUHRR':'Sakur'+'a\x20Ski'+_0x419cc1(0x16a)+'z\x20—\x20','MtUzQ':_0x419cc1(0x68f),'hQmci':_0x419cc1(0xca8)+'port\x20'+_0x419cc1(0x390)+_0x419cc1(0x7e1)+'—\x20fra'+_0x419cc1(0x259)+_0x419cc1(0xc83)+'ected'+'?','FeeMh':_0x419cc1(0x26d)+'c7','ZloHP':'\x20\x201.\x20'+_0x419cc1(0x2ad)+_0x419cc1(0xd53)+_0x419cc1(0xa73)+'\x20not\x20'+_0x419cc1(0xdcc)+'ting\x20'+_0x419cc1(0x8c1)+_0x419cc1(0x46c)+_0x419cc1(0x769)+_0x419cc1(0xd1e)+'n\x20ifr'+'ame.\x0a','HSRZJ':'Reloa'+'d\x20the'+_0x419cc1(0x4f4)+'\x20page'+_0x419cc1(0xb04)+_0x419cc1(0x888)+_0x419cc1(0x1b6)+_0x419cc1(0xb1b)+_0x419cc1(0x5d7)+'l\x20aga'+_0x419cc1(0x4e6),'fuvPO':_0x419cc1(0xd96)+_0x419cc1(0x426)+'\x20','EQbmg':_0x419cc1(0xc4d)+'a8','HbYcp':function(_0x2ad212,_0x25110b){return _0x2ad212>_0x25110b;},'AHnJz':'#ffd4'+'8a','uzsVV':'ViKBm','imzFo':'armin'+_0x419cc1(0x754),'wleox':_0x419cc1(0x9fb)+'\x20ON','zKJjU':_0x419cc1(0x8a6)+'1b','qMwYt':function(_0x59196d,_0x218c60){return _0x59196d+_0x218c60;},'MfoBe':function(_0x13da2a,_0x43d0bf){return _0x13da2a+_0x43d0bf;},'FtgJt':_0x419cc1(0xc44)+_0x419cc1(0x494)+':#150'+_0x419cc1(0x54d)+'olor:'+'#f7ee'+'f5;bo'+'rder:'+_0x419cc1(0x608)+_0x419cc1(0xc24)+_0x419cc1(0xc31)+'255,1'+'43,17'+_0x419cc1(0xcde)+';bord'+'er-ra'+_0x419cc1(0x198)+_0x419cc1(0x3b5),'xnsPA':'displ'+_0x419cc1(0xd10)+_0x419cc1(0xd2a)+_0x419cc1(0xdaa)+_0x419cc1(0x2cf)+_0x419cc1(0x340)+_0x419cc1(0x36b)+'overf'+'low:h'+_0x419cc1(0x23b)+';','FYntS':function(_0x15c4ec,_0x3c73cc){return _0x15c4ec+_0x3c73cc;},'tpaQC':function(_0x5c6c34,_0x1ffc13){return _0x5c6c34+_0x1ffc13;},'kcHih':'<b\x20st'+_0x419cc1(0xc10)+_0x419cc1(0x8d2)+':','EQAhT':_0x419cc1(0x90c)+'ura\x20·'+_0x419cc1(0xa1a)+_0x419cc1(0x624)+'</b>','vbZJQ':_0x419cc1(0xd03)+'\x20id=\x22'+_0x419cc1(0x85f)+'uild\x22'+_0x419cc1(0x151)+_0x419cc1(0xd43)+'lor:#'+_0x419cc1(0x353)+_0x419cc1(0x313)+'t-siz'+'e:11p'+'x;pad'+'ding:'+'1px\x206'+_0x419cc1(0x6ef)+'rder:'+_0x419cc1(0x608)+_0x419cc1(0xc24)+_0x419cc1(0xc31)+_0x419cc1(0x9ee)+'43,17'+_0x419cc1(0x2b2)+_0x419cc1(0x6da)+_0x419cc1(0x935)+_0x419cc1(0xc67)+_0x419cc1(0x82c)+'x;\x22>v'+_0x419cc1(0xb1d)+_0x419cc1(0x2a3),'YMLQf':'<butt'+_0x419cc1(0x8f9)+'=\x22sw2'+_0x419cc1(0x5f2)+'le\x22\x20s'+'tyle='+'\x22back'+_0x419cc1(0x73a)+'d:tra'+'nspar'+_0x419cc1(0x612)+_0x419cc1(0xc04)+':1px\x20'+_0x419cc1(0xb33)+_0x419cc1(0xd2d)+'(255,'+_0x419cc1(0x2ee)+_0x419cc1(0xb52)+_0x419cc1(0xbcc)+_0x419cc1(0x1eb)+_0x419cc1(0x361)+';bord'+'er-ra'+'dius:'+'7px;p'+_0x419cc1(0xd92)+_0x419cc1(0x58b)+'\x208px;'+'curso'+_0x419cc1(0x909)+'nter;'+_0x419cc1(0xc78)+_0x419cc1(0x517)+'tton>','eXifM':_0x419cc1(0x526)+_0x419cc1(0x8f9)+_0x419cc1(0x1cc)+_0x419cc1(0x7c3)+_0x419cc1(0xad6)+_0x419cc1(0x34b)+'groun'+'d:tra'+'nspar'+'ent;b'+_0x419cc1(0xc04)+':1px\x20'+_0x419cc1(0xb33)+'\x20rgba'+_0x419cc1(0xc00)+'143,1'+'77,.4'+_0x419cc1(0xbcc)+_0x419cc1(0x1eb)+'7eef5'+_0x419cc1(0x367)+'er-ra'+'dius:'+_0x419cc1(0xddc)+_0x419cc1(0xd92)+'g:4px'+'\x208px;'+_0x419cc1(0xcd8)+'r:poi'+_0x419cc1(0x66d)+_0x419cc1(0xdf5)+_0x419cc1(0xcbe)+'n>','djSHf':'</div'+'>','FUpSl':'<div\x20'+_0x419cc1(0x817)+'w2-bo'+'dy\x22\x20s'+_0x419cc1(0xad6)+_0x419cc1(0xa5e)+'lay:n'+'one;\x22'+'>','kkpIC':'<inpu'+'t\x20id='+'\x22sw2-'+'facto'+_0x419cc1(0xdf2)+_0x419cc1(0xad0)+_0x419cc1(0xc55)+'\x20min='+'\x221\x22\x20m'+_0x419cc1(0xdf6)+_0x419cc1(0x842)+_0x419cc1(0xa1e)+'1\x22\x20va'+_0x419cc1(0xa94)+_0x419cc1(0x880)+_0x419cc1(0xc10)+'width'+_0x419cc1(0x32c)+_0x419cc1(0xb8c)+_0x419cc1(0x385)+_0x419cc1(0x214),'TsZdt':'<span'+_0x419cc1(0x1bd)+_0x419cc1(0x809)+'actor'+'label'+_0x419cc1(0xcf7)+'le=\x22c'+_0x419cc1(0x214)+'#bda9'+'c9;mi'+'n-wid'+'th:34'+'px;\x22>'+'1.0x<'+'/span'+'>','TwQhX':_0x419cc1(0x1c0)+_0x419cc1(0x28a)+'s','IYodJ':'#sw2-'+'build','AWeHW':'#sw2-'+'toggl'+'e','gcjCZ':'#sw2-'+'snap','saLbq':_0x419cc1(0x1c0)+'speed','tuyjZ':'#sw2-'+_0x419cc1(0xda3),'oVYvl':function(_0x544e2a,_0x203dc7,_0x36c531){return _0x544e2a(_0x203dc7,_0x36c531);},'IDVBe':function(_0x5b4881,_0x481eb4){return _0x5b4881+_0x481eb4;},'JAtql':function(_0x27f04e,_0x41fca1){return _0x27f04e+_0x41fca1;},'dsUvq':'uwmk\x20'+_0x419cc1(0x4e4),'pdYSJ':_0x419cc1(0xc2e),'YNPcy':function(_0x481069,_0x2e1dc7){return _0x481069+_0x2e1dc7;},'GTayY':_0x419cc1(0x414)+_0x419cc1(0x4e4),'lULbL':_0x419cc1(0x77d)+_0x419cc1(0x3e2)+_0x419cc1(0xa5c)+_0x419cc1(0x428)+'r\x20the'+_0x419cc1(0xbb5)+_0x419cc1(0xd1a)+'\x20did\x20'+_0x419cc1(0x1bf)+'atch.','RNfjs':'──\x20','IOsiY':_0x419cc1(0xdba)+_0x419cc1(0x6fc)+'\x20kind'+'\x20\x20\x20\x20\x20'+_0x419cc1(0xc03)+_0x419cc1(0xa99)+_0x419cc1(0x22a)+_0x419cc1(0x22a)+'raw','gQjlx':function(_0x439e1e,_0x2e8435){return _0x439e1e<_0x2e8435;},'AlRfP':function(_0x1da454,_0x448192){return _0x1da454/_0x448192;},'XASqs':function(_0x2ac6a6,_0x48d8c4){return _0x2ac6a6+_0x48d8c4;},'DYcUS':function(_0x284ae8,_0x123e44){return _0x284ae8===_0x123e44;},'ELFsd':_0x419cc1(0x1f6)+'t','lGvcY':'zHxgd','jbdsY':'%c[sa'+_0x419cc1(0x37d)+'\x20pane'+'l\x20upd'+_0x419cc1(0xc2d)+_0x419cc1(0xa35),'uZTOc':_0x419cc1(0x8d2)+':','CgShL':function(_0x4df2df,_0x102f68){return _0x4df2df!==_0x102f68;},'SKlGI':function(_0x549963,_0x1eb51b,_0x228ee4){return _0x549963(_0x1eb51b,_0x228ee4);},'yhLhY':_0x419cc1(0x482),'pkxEr':_0x419cc1(0x642),'kDznF':_0x419cc1(0x838),'umdtO':'NCHZD','cQJMx':function(_0x3c0698,_0x3d1315){return _0x3c0698+_0x3d1315;},'cjbqd':function(_0x47a019,_0x393d68){return _0x47a019*_0x393d68;},'QjxGe':function(_0x4a62cf,_0x59aa85){return _0x4a62cf-_0x59aa85;},'xWXGO':'insta'+_0x419cc1(0xbdc)+'e','OHSQY':'insta'+'ntiat'+_0x419cc1(0x485)+'aming','ParqZ':_0x419cc1(0x723)+'ion','nNJzo':'Runti'+'me.cr'+'eateP'+_0x419cc1(0x7e9)+_0x419cc1(0x97d)+'ailab'+'le','XHShC':_0x419cc1(0xa83)+_0x419cc1(0x7ce)+_0x419cc1(0x36d)+'z','EDkUi':'sFauV','gFaFi':'Xhpxp','iEVne':function(_0x108229){return _0x108229();},'dxguv':function(_0x3ab3b0){return _0x3ab3b0();},'fdgow':function(_0x455cd5,_0xa6cb30){return _0x455cd5|_0xa6cb30;},'xPNJr':_0x419cc1(0xa78),'MlWOQ':'Mouse'+'Look+'+'camer'+'a','GPDhc':function(_0x324991){return _0x324991();},'ZoRwZ':function(_0x51c961,_0x34a07c){return _0x51c961===_0x34a07c;},'glCuM':'DLZCi','UiLxl':function(_0x524ca8,_0x45f42b){return _0x524ca8===_0x45f42b;},'kcdcs':_0x419cc1(0xde5),'jZSdB':function(_0x3e9ade,_0x32e56b){return _0x3e9ade!==_0x32e56b;},'zovCW':_0x419cc1(0x354),'skEnQ':function(_0x429bf4,_0x1edd8e){return _0x429bf4<_0x1edd8e;},'TRyLw':'NXZBI','jYUzJ':_0x419cc1(0x3d6)+'w.','bGgoC':function(_0x1b1ae5){return _0x1b1ae5();},'laULg':function(_0x2cc07e,_0x2db230){return _0x2cc07e+_0x2db230;},'RLtWh':function(_0x4f145b,_0x30931b){return _0x4f145b+_0x30931b;},'oSPNI':_0x419cc1(0x613)+'th\x20or'+_0x419cc1(0x5f6)+'lFunc'+'=','MlWHL':_0x419cc1(0x5ac)+'\x20the\x20'+'refer'+'ence\x20'+_0x419cc1(0xbcf)+_0x419cc1(0x825)+_0x419cc1(0x7f4)+_0x419cc1(0xae6)+'not\x20r'+'eacha'+_0x419cc1(0xa07)+'ow.','WWlfB':_0x419cc1(0x46a),'WPJes':_0x419cc1(0xd9a)+_0x419cc1(0xb32)+_0x419cc1(0x7fa)+_0x419cc1(0x4d0)+_0x419cc1(0xb13)+'e\x20not'+'\x20reac'+_0x419cc1(0xd5e)+'\x20via\x20'+'Runti'+_0x419cc1(0x951)+'solve'+_0x419cc1(0xae9)+')\x20or\x20'+_0x419cc1(0xd40)+_0x419cc1(0x679)+_0x419cc1(0x370)+'al','EsslP':function(_0x149178,_0x2fa95d){return _0x149178+_0x2fa95d;},'iSmai':_0x419cc1(0x4ab)+'\x20heap'+_0x419cc1(0x391)+'0x','ZPFrS':function(_0x2e6626,_0x41cc09){return _0x2e6626===_0x41cc09;},'hdYpQ':_0x419cc1(0x1fb),'dBLTR':'f64','ZYlgu':_0x419cc1(0x5e0),'sXhIs':function(_0x33c9ea,_0x5080fa){return _0x33c9ea(_0x5080fa);},'aCIMV':function(_0x56c434){return _0x56c434();},'GKZPD':_0x419cc1(0x5b9),'erkzh':'i32','EPPYv':_0x419cc1(0x7a2),'wENei':_0x419cc1(0xb98),'NwwHv':function(_0x2d22aa,_0x2a03aa){return _0x2d22aa<_0x2a03aa;},'nsUWw':'butto'+'n','gQTHK':'sk-sw'+'itch','veGRi':function(_0x4a5aa1){return _0x4a5aa1();},'EtQve':function(_0x494af4){return _0x494af4();},'rzjaW':function(_0x260ff3,_0x4833b8){return _0x260ff3<_0x4833b8;},'rMrEr':function(_0x1668c8,_0xeaed28){return _0x1668c8>_0xeaed28;},'LsvNW':_0x419cc1(0x942),'gBztr':function(_0x430204,_0x538458){return _0x430204+_0x538458;},'KMLgf':function(_0x4683cb,_0x49bfec){return _0x4683cb+_0x49bfec;},'Jmnbm':'lwwhd','VjzCd':function(_0x28458a,_0x5bbe36,_0x2fe1a5,_0x5ce9ef){return _0x28458a(_0x5bbe36,_0x2fe1a5,_0x5ce9ef);},'LkzMw':function(_0x265f3f,_0x4440b5){return _0x265f3f&_0x4440b5;},'rYtDC':function(_0x1218fd,_0x5d5268){return _0x1218fd^_0x5d5268;},'arRPJ':_0x419cc1(0x79a),'HjBCM':function(_0x3cbb1c,_0x4296fb){return _0x3cbb1c(_0x4296fb);},'BDKKY':function(_0xb39a78,_0xc29ce2){return _0xb39a78^_0xc29ce2;},'LnbAE':function(_0xface09,_0x56a15d){return _0xface09+_0x56a15d;},'mucCI':function(_0x136cbb,_0x3ee676,_0x4b53eb){return _0x136cbb(_0x3ee676,_0x4b53eb);},'bXTra':function(_0x4cafa4,_0x5c69fa){return _0x4cafa4===_0x5c69fa;},'YeGiG':function(_0x51bc98,_0xd3cc13){return _0x51bc98(_0xd3cc13);},'bIHNh':function(_0x43a19b,_0x29af85){return _0x43a19b^_0x29af85;},'VsPit':_0x419cc1(0x631),'vRlcI':function(_0x4764eb,_0xd9a069){return _0x4764eb^_0xd9a069;},'snibd':function(_0x4c7035,_0x372836){return _0x4c7035!==_0x372836;},'ZzWxM':function(_0xffdb0b,_0x538a40,_0x40dfd7){return _0xffdb0b(_0x538a40,_0x40dfd7);},'XEvjr':function(_0xa01b77,_0x1855e2){return _0xa01b77+_0x1855e2;},'Tfsbv':function(_0x265d7d,_0x20ccb9){return _0x265d7d^_0x20ccb9;},'JPKJf':function(_0x356822,_0x2d21fe){return _0x356822+_0x2d21fe;},'vmgEo':function(_0x4bef0f,_0x141a9d){return _0x4bef0f===_0x141a9d;},'NyZpP':function(_0x35fbdb,_0x500633){return _0x35fbdb+_0x500633;},'nMerZ':function(_0xda5606,_0x591cff){return _0xda5606===_0x591cff;},'fStKu':function(_0x3cc28f,_0x1c33f0){return _0x3cc28f&_0x1c33f0;},'tASsF':function(_0xb9c034,_0x1c8da8,_0x4ace30){return _0xb9c034(_0x1c8da8,_0x4ace30);},'AtEhQ':function(_0x16c281){return _0x16c281();},'SNsQk':function(_0x4521b6,_0x16e97f){return _0x4521b6!==_0x16e97f;},'NhXhw':function(_0x5863ba,_0x2cbf3b){return _0x5863ba!==_0x2cbf3b;},'VbZZm':_0x419cc1(0x8f5),'NGFRL':function(_0x30d5bb,_0x4d2805){return _0x30d5bb<_0x4d2805;},'Evjib':_0x419cc1(0xa8b),'AWJgW':_0x419cc1(0x222),'ezIRe':function(_0x466800,_0x4138de){return _0x466800>=_0x4138de;},'YRMsF':_0x419cc1(0xe02)+_0x419cc1(0x751)+'f\x20','SbaJQ':function(_0x563436,_0x45c9c9){return _0x563436<_0x45c9c9;},'fxTJM':function(_0x176966,_0x13e7cf,_0x47f49a,_0x37b7f8,_0x4cfdf2){return _0x176966(_0x13e7cf,_0x47f49a,_0x37b7f8,_0x4cfdf2);},'qZQcO':function(_0x4b632c,_0x2bbf07){return _0x4b632c+_0x2bbf07;},'qqKZv':function(_0x35833e,_0x5a40bf){return _0x35833e*_0x5a40bf;},'bODYo':function(_0x3ff8b5,_0x4bad67){return _0x3ff8b5+_0x4bad67;},'MvvJf':_0x419cc1(0x3c9)+'oth','mTOYH':function(_0x4ed8c1,_0x343155){return _0x4ed8c1!==_0x343155;},'DhWNm':function(_0x37cf9c,_0x2146b8){return _0x37cf9c!==_0x2146b8;},'GapTR':'FPSco'+_0x419cc1(0x96e)+_0x419cc1(0x36a),'ctbyg':'vycVJ','NmsdB':function(_0x36d733,_0x5e6045){return _0x36d733(_0x5e6045);},'PebDR':_0x419cc1(0xbc5),'myXax':_0x419cc1(0x715),'sKWxo':_0x419cc1(0x392),'fbwlk':function(_0x4b68f3,_0x2ab064){return _0x4b68f3/_0x2ab064;},'VHKuK':function(_0x12568b,_0xc198fb){return _0x12568b!==_0xc198fb;},'vUzVf':_0x419cc1(0x1bc),'bySLg':_0x419cc1(0x4b1),'ASvuZ':_0x419cc1(0x6fe)+'e','QUCTY':_0x419cc1(0xa43),'qyVMs':_0x419cc1(0x6c6),'bWRVZ':function(_0x7674f6,_0x502480){return _0x7674f6+_0x502480;},'LiiKG':function(_0x1bd7e0,_0x56fd6f){return _0x1bd7e0(_0x56fd6f);},'XXfJs':function(_0x4ce65c,_0x458ed2){return _0x4ce65c===_0x458ed2;},'uSciK':function(_0x4cb847,_0x4a6eb8){return _0x4cb847===_0x4a6eb8;},'jbtLW':'LnzyI','plEmC':function(_0x2d263f,_0xa6572){return _0x2d263f===_0xa6572;},'vmYVl':'ymvrD','GqxRl':'auto','nafhY':'24px','vmfui':'float','FmmDd':_0x419cc1(0x3ad),'FPFDE':_0x419cc1(0xd14)+_0x419cc1(0x6b4),'GKaub':function(_0x5ecd78,_0x125dd1){return _0x5ecd78===_0x125dd1;},'UEbnn':'JUsST','JfrKR':function(_0x72a94,_0x41b3f1){return _0x72a94(_0x41b3f1);},'YBXmc':function(_0x355b05,_0x382a40){return _0x355b05<_0x382a40;},'JqJXi':_0x419cc1(0x36e),'GMcjH':function(_0x3ace85,_0x21d5b2){return _0x3ace85+_0x21d5b2;},'vhSNb':_0x419cc1(0x502),'JLsVP':function(_0x5bf36e,_0x506cc0){return _0x5bf36e>_0x506cc0;},'mqoAS':_0x419cc1(0x8fd)+'r','OVkbP':function(_0x4d614e,_0x483764){return _0x4d614e(_0x483764);},'AUWwd':function(_0x22b8d6,_0x165f62){return _0x22b8d6+_0x165f62;},'igNCp':function(_0x165785,_0x551166){return _0x165785+_0x551166;},'cOsNh':'unres'+_0x419cc1(0x87a)+'\x20(','USQON':_0x419cc1(0x551)+'bound'+'ed','sxjTp':function(_0x2c907d,_0x414942){return _0x2c907d||_0x414942;},'kcyEK':function(_0x49e90f){return _0x49e90f();},'oKvlV':function(_0x3c00dc,_0x511129){return _0x3c00dc*_0x511129;},'nfQmD':function(_0x5428f6,_0x53e91d){return _0x5428f6*_0x53e91d;},'pCiRk':_0x419cc1(0xbfd),'eXmCR':function(_0x538893,_0x4c69d4){return _0x538893<_0x4c69d4;},'RlKUm':function(_0x3e6820,_0x5a557d){return _0x3e6820+_0x5a557d;},'aQKIi':function(_0x20a392,_0x3594f4){return _0x20a392+_0x3594f4;},'KmOvY':function(_0x30734,_0x4a0bfa){return _0x30734+_0x4a0bfa;},'GATmA':function(_0x13491f,_0x2b7f15,_0x5ed83a){return _0x13491f(_0x2b7f15,_0x5ed83a);},'RydMd':_0x419cc1(0xb34),'mNyEM':_0x419cc1(0x75d)+_0x419cc1(0x6f4)+'orkSy'+'nc','iCxvV':function(_0x35a3ce,_0xa0d618){return _0x35a3ce-_0xa0d618;},'OEzWa':_0x419cc1(0x78d)+'hScri'+'pt','dBCUt':_0x419cc1(0x741)+'otrol'+_0x419cc1(0x36a),'twBxM':function(_0x3700dd,_0x24b91d){return _0x3700dd<_0x24b91d;},'BEvjk':function(_0x2a4732,_0x200f68){return _0x2a4732===_0x200f68;},'UgqiS':function(_0x5dda06,_0x55e8c1){return _0x5dda06<_0x55e8c1;},'InvWi':function(_0x29f4ac,_0x8bd7b3){return _0x29f4ac!==_0x8bd7b3;},'lJSWy':function(_0x35a01a,_0x268d93){return _0x35a01a in _0x268d93;},'SPlYt':function(_0x385290,_0x22021d){return _0x385290+_0x22021d;},'IpsHp':function(_0x2c6bab,_0xb7feff){return _0x2c6bab+_0xb7feff;},'Kfvco':function(_0x2b695e,_0x489fc1){return _0x2b695e===_0x489fc1;},'Hnwdf':'void','obOSr':function(_0x2da152,_0x5ba415){return _0x2da152+_0x5ba415;},'rgpil':function(_0x1d1253,_0x5cadad){return _0x1d1253<_0x5cadad;},'BhjrU':function(_0x5ba2a6,_0x5c7f74){return _0x5ba2a6!==_0x5c7f74;},'HzlvX':function(_0x204ce8,_0x7affdd){return _0x204ce8===_0x7affdd;},'WCNtY':_0x419cc1(0x213),'nrffl':function(_0x48f36e,_0x418ead,_0x3161e4){return _0x48f36e(_0x418ead,_0x3161e4);},'bYBie':function(_0x21efe6,_0x35eeb7){return _0x21efe6===_0x35eeb7;},'uxFaK':'%c[sa'+_0x419cc1(0x37d)+_0x419cc1(0x5d7)+'l\x20dis'+_0x419cc1(0x379),'jVYAG':function(_0x129ebb,_0x5623b7){return _0x129ebb+_0x5623b7;},'NQfDV':function(_0x28cfc1,_0x2375bd){return _0x28cfc1-_0x2375bd;},'QOiij':'gaBDl','gfBeX':function(_0x35be68,_0x5cecac){return _0x35be68===_0x5cecac;},'mTiLR':_0x419cc1(0xda1),'IKExL':function(_0x406ee9,_0x472604){return _0x406ee9+_0x472604;},'MPJhj':'pitch'+'\x20','ZofXV':function(_0x3b9109,_0x5d2b23){return _0x3b9109===_0x5d2b23;},'TMwvp':function(_0x4d876d,_0x231d36){return _0x4d876d!==_0x231d36;},'CSEzM':function(_0x503630,_0x4fb7fd,_0x16dd3f,_0xd3ddf3){return _0x503630(_0x4fb7fd,_0x16dd3f,_0xd3ddf3);},'ttihY':_0x419cc1(0xcfc)+'VE','yhRNR':'\x20hex=','CavQj':function(_0x19fded,_0x21dca3){return _0x19fded===_0x21dca3;},'qKnJJ':function(_0x211a75,_0x13d578){return _0x211a75<_0x13d578;},'LuQyD':function(_0x2dee39,_0x5e53a8){return _0x2dee39===_0x5e53a8;},'nIbQF':function(_0x343651,_0x241271){return _0x343651===_0x241271;},'lUfui':function(_0x1a952,_0x4911c9){return _0x1a952(_0x4911c9);},'IEXpi':_0x419cc1(0x691)+_0x419cc1(0xc19)+'ntime'+'\x20is\x20n'+_0x419cc1(0x303)+_0x419cc1(0xadf)+_0x419cc1(0x571)+_0x419cc1(0x3c8)+'dkit.'+_0x419cc1(0x57d)+_0x419cc1(0xcb3)+_0x419cc1(0x19e)+'lugin'+_0x419cc1(0xd80)+'built'+'\x20','XSAJO':'again'+_0x419cc1(0x828)+'diffe'+_0x419cc1(0xaeb)+'Runti'+_0x419cc1(0x93a)+_0x419cc1(0xb13)+_0x419cc1(0x69d)+'n\x20the'+_0x419cc1(0x370)+_0x419cc1(0xa4b)+'w\x20exp'+_0x419cc1(0x242),'hHgTb':function(_0x2e803c,_0x31973c){return _0x2e803c!==_0x31973c;},'zeuvK':_0x419cc1(0x3fd),'TWYUB':_0x419cc1(0x165),'LHtab':function(_0x18bdf7,_0x5812a3){return _0x18bdf7===_0x5812a3;},'gECPS':_0x419cc1(0x726)+_0x419cc1(0xbde)+'5|3|1','RFALK':function(_0x752473){return _0x752473();},'Btpdr':'unity'+_0x419cc1(0x702),'RFHmY':_0x419cc1(0x63d),'TcIxZ':'unity'+_0x419cc1(0x78f)+_0x419cc1(0x97e)+_0x419cc1(0x53c),'GyRLx':function(_0x5ccbdc,_0x4df0c8){return _0x5ccbdc===_0x4df0c8;},'JaNxa':_0x419cc1(0x587)+_0x419cc1(0x1c3),'DfCDE':function(_0xc97ef2,_0x2b7ae9){return _0xc97ef2+_0x2b7ae9;},'uLMPu':function(_0x298aa7,_0x262394){return _0x298aa7===_0x262394;},'DLTOx':_0x419cc1(0xc17),'HhNbh':_0x419cc1(0xd42),'cvLKb':_0x419cc1(0x48e),'GptWc':function(_0x15e679,_0x278538){return _0x15e679===_0x278538;},'mqDmp':function(_0x16b0a4,_0x159b2d,_0x571f7f){return _0x16b0a4(_0x159b2d,_0x571f7f);},'ayQvg':function(_0xb7da48,_0x3ff2c6){return _0xb7da48===_0x3ff2c6;},'TNXET':function(_0x3bbc98,_0x340596){return _0x3bbc98+_0x340596;},'Fptlv':function(_0x21f071,_0x36f48e,_0x3bb658){return _0x21f071(_0x36f48e,_0x3bb658);},'vbPlQ':function(_0x67fba3,_0x52c1d9){return _0x67fba3(_0x52c1d9);},'eWuoU':function(_0x8c3806,_0x1d4449){return _0x8c3806===_0x1d4449;},'XWzHq':_0x419cc1(0xa83)+_0x419cc1(0x84d)+_0x419cc1(0x3c2)+'ss','jOHWQ':'style','PVgcq':'box-s'+'hadow'+':0\x2010'+'px\x2030'+_0x419cc1(0xab6)+_0x419cc1(0x725)+_0x419cc1(0x50f)+'ser-s'+_0x419cc1(0xb74)+':none'+_0x419cc1(0x243)+_0x419cc1(0x330)+_0x419cc1(0x53f)+_0x419cc1(0xb74)+':none'+';','QEWXS':function(_0xb1f55a,_0x5be66b){return _0xb1f55a+_0x5be66b;},'FXvUD':function(_0x366fa3,_0x24c150){return _0x366fa3+_0x24c150;},'zfrrN':function(_0x57557e,_0x534b47){return _0x57557e+_0x534b47;},'fEuEa':function(_0x20b0e9,_0x5d947e){return _0x20b0e9+_0x5d947e;},'tyEtC':function(_0x53f41d,_0x56994c){return _0x53f41d+_0x56994c;},'VsAOC':'\x22>sak'+'ura</'+'b>','QavNz':_0x419cc1(0x9ac),'Llzla':'color'+':#f7e'+_0x419cc1(0xced)+_0x419cc1(0xc04)+_0x419cc1(0xb53)+'us:6p'+_0x419cc1(0x749)+'ding:'+_0x419cc1(0x5e8)+'px;cu'+'rsor:'+'point'+_0x419cc1(0x238)+_0x419cc1(0x281)+'herit'+';\x22>ES'+_0x419cc1(0x99e)+'/butt'+_0x419cc1(0xd6e),'rxVpn':_0x419cc1(0x526)+_0x419cc1(0x801)+'ta-a='+_0x419cc1(0x42a)+_0x419cc1(0xcf7)+_0x419cc1(0x548)+_0x419cc1(0x52d)+'-left'+_0x419cc1(0x8ac)+_0x419cc1(0xd2b)+'groun'+_0x419cc1(0x65f)+_0x419cc1(0x20e)+_0x419cc1(0x612)+'order'+':1px\x20'+'solid'+'\x20rgba'+'(255,'+_0x419cc1(0x2ee)+_0x419cc1(0xb52)+'5);','AMQry':'color'+_0x419cc1(0xa12)+'ef5;b'+_0x419cc1(0xc04)+_0x419cc1(0xb53)+'us:6p'+_0x419cc1(0x749)+'ding:'+_0x419cc1(0x843)+'px;cu'+_0x419cc1(0x53a)+_0x419cc1(0x18f)+_0x419cc1(0x238)+'nt:in'+_0x419cc1(0x965)+';\x22>-<'+'/butt'+'on>','vOGcH':_0x419cc1(0x673)+_0x419cc1(0x77e)+_0x419cc1(0xab3)+'\x22\x20sty'+'le=\x22c'+_0x419cc1(0x214)+_0x419cc1(0xdd7)+_0x419cc1(0x31e)+'x-wid'+_0x419cc1(0x9a4)+_0x419cc1(0x453)+'></di'+'v>','Tfnzp':function(_0x5145be,_0x571d7f){return _0x5145be(_0x571d7f);},'occQU':_0x419cc1(0x90d),'sQVdN':function(_0x228c66,_0x1eb5ff){return _0x228c66(_0x1eb5ff);},'SRerR':_0x419cc1(0x363),'SjQTT':_0x419cc1(0x495)+'ff','Vqqoy':'YeDfT','kcNgf':function(_0x474858,_0x2e87f6){return _0x474858+_0x2e87f6;},'mDZuV':function(_0x4bc9a3,_0x5a451a){return _0x4bc9a3===_0x5a451a;},'tFIaT':'qbgem','gVxqd':function(_0x263529,_0x12844a){return _0x263529===_0x12844a;},'Tmxle':function(_0x3cd867,_0x90b835){return _0x3cd867(_0x90b835);},'hDvwm':_0x419cc1(0x9fb)+_0x419cc1(0x76e),'mNXnD':'trans'+_0x419cc1(0x3dc)+'t','RKUhy':function(_0x18245f,_0x246cd0){return _0x18245f+_0x246cd0;},'TDVZI':function(_0x1ca143,_0x24d6fb,_0x198d76){return _0x1ca143(_0x24d6fb,_0x198d76);},'oZeQt':_0x419cc1(0x4d3)+'an','tUIgt':function(_0x22613c,_0x577e71){return _0x22613c(_0x577e71);},'LkSph':function(_0x5ef124,_0x12127c,_0x167c10){return _0x5ef124(_0x12127c,_0x167c10);},'WqZRF':function(_0x1e7607,_0x7c9901){return _0x1e7607+_0x7c9901;},'xgOSB':function(_0x15e986,_0x53206e,_0x279aa5){return _0x15e986(_0x53206e,_0x279aa5);},'EHLcK':_0x419cc1(0x818)+'m','BwnPy':function(_0x46109b,_0x1e88bf){return _0x46109b+_0x1e88bf;},'ILXpb':_0x419cc1(0x706)+'\x20','GKXpn':'VvtdG','etFsS':function(_0x3a6d61,_0x1aa1ac){return _0x3a6d61+_0x1aa1ac;},'gbKBV':function(_0x9dea4b,_0x3b5884){return _0x9dea4b+_0x3b5884;},'SQUmj':function(_0x4b55d2,_0x5e17a5){return _0x4b55d2+_0x5e17a5;},'CwTRN':_0x419cc1(0x88c),'oukHL':'\x20\x20cam'+'\x20-','qstCO':function(_0x3223f5,_0x3c3b80){return _0x3223f5+_0x3c3b80;},'GQOsq':'YEbsH','fToiH':function(_0x481ced,_0x1fac83){return _0x481ced===_0x1fac83;},'ZyzZy':_0x419cc1(0x8f1)+'t','iVdOX':function(_0x18f6f2,_0x245aba){return _0x18f6f2(_0x245aba);},'RywgZ':function(_0x1bae0e,_0x480b7b){return _0x1bae0e-_0x480b7b;},'XJZSB':function(_0x5f1d36,_0x37bad3){return _0x5f1d36+_0x37bad3;},'pHZaR':_0x419cc1(0x6f8)+'\x20','xpHis':function(_0x17d3b6,_0x595851){return _0x17d3b6+_0x595851;},'AGVKX':function(_0x1e0817,_0x29987d,_0x298ec6){return _0x1e0817(_0x29987d,_0x298ec6);},'cmzBy':_0x419cc1(0xaa9),'OfxDn':function(_0x5abfab,_0x503d11){return _0x5abfab+_0x503d11;},'Wxqlb':function(_0xd62111,_0x47797a){return _0xd62111>>>_0x47797a;},'TkdAH':function(_0x471c4b,_0x24d5ce){return _0x471c4b(_0x24d5ce);},'lntaQ':'fStNs','HmDni':_0x419cc1(0xbcd),'HTPzk':_0x419cc1(0x23d),'Izybx':_0x419cc1(0x376)+'t','dSvYr':function(_0x5607d8,_0x1e6b5e){return _0x5607d8/_0x1e6b5e;},'iHJcc':_0x419cc1(0x953),'ifsgt':function(_0xd91a04,_0x5be095){return _0xd91a04-_0x5be095;},'PdXca':_0x419cc1(0xdc3)+_0x419cc1(0xa72)+'call','NdImn':_0x419cc1(0x2ae),'jDIRf':function(_0x45e0fd,_0x3f1cf4){return _0x45e0fd+_0x3f1cf4;},'SsdWH':function(_0x5d1351){return _0x5d1351();},'ITtln':_0x419cc1(0x425),'tjRtN':function(_0x3eebaa,_0x3a1920){return _0x3eebaa-_0x3a1920;},'fCEkm':_0x419cc1(0x25d),'hHPeV':function(_0x3c632c,_0x5345ae){return _0x3c632c!==_0x5345ae;},'LKkfU':'osCnJ','YnYEz':'4|3|2'+'|1|0','bIBeD':function(_0x430fbb,_0x37a36a){return _0x430fbb+_0x37a36a;},'fVmLg':function(_0x5702ec,_0x111abf){return _0x5702ec+_0x111abf;},'SjBkO':function(_0x50227c,_0x1e4b8a){return _0x50227c*_0x1e4b8a;},'WMwUV':function(_0x415939,_0x2d28b8){return _0x415939*_0x2d28b8;},'roWUO':function(_0x2f730b,_0x342dba){return _0x2f730b*_0x342dba;},'bsyaE':function(_0x3fe456,_0x3740eb){return _0x3fe456*_0x3740eb;},'yIcvS':function(_0x23ee66,_0x22a57b){return _0x23ee66>_0x22a57b;},'TEbqS':_0x419cc1(0xc28),'NAKLQ':function(_0x1336f3){return _0x1336f3();},'jUJgn':function(_0x3161a9,_0x21f172,_0x27cef6){return _0x3161a9(_0x21f172,_0x27cef6);},'OEKQX':function(_0x546cae,_0x2fe95b){return _0x546cae(_0x2fe95b);},'PuUgS':function(_0x42c294,_0x996e99){return _0x42c294+_0x996e99;},'xcBQF':function(_0x20e8b1,_0x5add26){return _0x20e8b1!==_0x5add26;},'eUyER':function(_0x326045,_0x14f5f3){return _0x326045(_0x14f5f3);},'eSazc':function(_0x50a76e){return _0x50a76e();},'mCrKI':_0x419cc1(0x938)+_0x419cc1(0xa6e)+'\x20buff'+'er','fbYBc':function(_0x385722,_0x29d419,_0x275ee8,_0x344248){return _0x385722(_0x29d419,_0x275ee8,_0x344248);},'WVtsl':function(_0x867f60,_0x5af80f,_0x30699b){return _0x867f60(_0x5af80f,_0x30699b);},'UUGWK':_0x419cc1(0x8ef)+'form','kWFYs':function(_0x4585d0,_0x98c2e0,_0x318541){return _0x4585d0(_0x98c2e0,_0x318541);},'jRENF':function(_0x50791d,_0x3d48a4,_0x1c12ea){return _0x50791d(_0x3d48a4,_0x1c12ea);},'oizxV':function(_0x1c8b41,_0x14aef4){return _0x1c8b41+_0x14aef4;},'qEAPq':function(_0x24b641,_0x154fc5){return _0x24b641<_0x154fc5;},'YzwZu':function(_0x464dc7,_0x259e61){return _0x464dc7===_0x259e61;},'SDQKa':_0x419cc1(0x55f)+_0x419cc1(0x9de)+'3','kfTlI':function(_0x2b71c0,_0x5440fa){return _0x2b71c0!==_0x5440fa;},'MXwvA':_0x419cc1(0x162),'XSLvr':function(_0x3b7700,_0x31c5ec){return _0x3b7700+_0x31c5ec;},'LePFY':_0x419cc1(0x8be)+'ion\x20u'+_0x419cc1(0x3dd)+'le\x20(|'+'q|=','XXBnE':')\x20-\x20f'+'ov\x20on'+'ly','ZMeMX':function(_0x33abe4,_0x2d438a){return _0x33abe4+_0x2d438a;},'HdKjr':_0x419cc1(0x76f)+_0x419cc1(0x5df)+'ov','VFPMr':function(_0x3515ab,_0x4bd109){return _0x3515ab===_0x4bd109;},'FTCMw':_0x419cc1(0x98b),'KngTD':function(_0x1df5b0,_0x2c20db){return _0x1df5b0===_0x2c20db;},'hGZkY':function(_0x99a10b,_0x378b2e){return _0x99a10b/_0x378b2e;},'wjKzO':'TzYHl','UWHaD':_0x419cc1(0x258),'kQUfz':function(_0x49b141,_0x33d6ce,_0x4ff836){return _0x49b141(_0x33d6ce,_0x4ff836);},'qTkej':'UqGNS','jquin':function(_0x113fc4,_0x425434){return _0x113fc4+_0x425434;},'oNtba':function(_0x4393ab,_0x1587b7){return _0x4393ab-_0x1587b7;},'esKOP':function(_0x586a53,_0x34cb56){return _0x586a53/_0x34cb56;},'NOnby':function(_0x310ffc){return _0x310ffc();},'AnZUR':_0x419cc1(0xcc0)+_0x419cc1(0xd7f)+'ok\x20ye'+'t','rWDfF':function(_0x1e26db,_0x1a55bc){return _0x1e26db(_0x1a55bc);},'SMaqX':function(_0x2b02e0,_0x812539){return _0x2b02e0(_0x812539);},'LQMvM':function(_0x36e98a,_0x2293cc){return _0x36e98a!==_0x2293cc;},'IlKQe':function(_0x31d755,_0x3ff81f){return _0x31d755===_0x3ff81f;},'eQbsp':function(_0x2b7111,_0x55d02d){return _0x2b7111(_0x55d02d);},'gjCne':function(_0x856429,_0x3e497b){return _0x856429<=_0x3e497b;},'URdWy':_0x419cc1(0x63a),'TzBjh':function(_0x2a57d8,_0x19c1dd){return _0x2a57d8+_0x19c1dd;},'KfpBc':'sette'+'r\x20pai'+_0x419cc1(0xaf5),'vYPWb':'ubfKB','NVIiv':function(_0x5efaf9,_0x1d1b85){return _0x5efaf9+_0x1d1b85;},'BdeaP':function(_0xbd4a6f,_0x2923dd){return _0xbd4a6f(_0x2923dd);},'BGXta':function(_0x7d5e34,_0x273e59){return _0x7d5e34<_0x273e59;},'xjJsd':'4|5|6'+'|1|0|'+_0x419cc1(0xa18)+'|7','oyKcL':function(_0x5b6c7c){return _0x5b6c7c();},'jDbfE':function(_0x2c5897,_0x30bd19){return _0x2c5897*_0x30bd19;},'MqlSv':function(_0x576298,_0x5ec2f7){return _0x576298*_0x5ec2f7;},'lqaeR':function(_0x2cc3ab,_0xe977ab){return _0x2cc3ab*_0xe977ab;},'TWqsG':function(_0x18c815,_0x2a8bcd){return _0x18c815*_0x2a8bcd;},'SIxuX':function(_0x47cc20,_0x3b56de){return _0x47cc20+_0x3b56de;},'HTXOZ':function(_0xdbafa6,_0x5edd92){return _0xdbafa6*_0x5edd92;},'qfkrY':function(_0x193926,_0x12052d){return _0x193926/_0x12052d;},'nlyTN':function(_0x3a82a3,_0x300045){return _0x3a82a3/_0x300045;},'YpjEl':function(_0x22f1e3,_0x433768){return _0x22f1e3<_0x433768;},'onaaD':function(_0x1d27e6,_0x19f8fd){return _0x1d27e6+_0x19f8fd;},'zKrmn':function(_0x10c87e,_0x1b483a){return _0x10c87e!==_0x1b483a;},'gHigj':'KNLmz','UJpWU':function(_0x507e22,_0x5d4767){return _0x507e22!=_0x5d4767;},'TuZQf':_0x419cc1(0xc4a)+'|9|3|'+_0x419cc1(0xc54)+_0x419cc1(0x70c),'KMNbJ':_0x419cc1(0xd1c)+_0x419cc1(0x317),'aLWeb':'sk-ca'+_0x419cc1(0x4e1)+'ad','kfRFG':function(_0x547651){return _0x547651();},'Adnfk':'wDndO','ATfEI':'1|2|4'+'|3|0','bGguI':function(_0x4f7b92,_0x58b26b){return _0x4f7b92+_0x58b26b;},'LybMF':function(_0x38b48e,_0x3217ce){return _0x38b48e-_0x3217ce;},'lgGtg':function(_0x19eeb4,_0x195403){return _0x19eeb4(_0x195403);},'kkAYO':_0x419cc1(0x887)+_0x419cc1(0x9c3),'QkZqQ':'input','wZtIK':_0x419cc1(0xb0e),'UqsgU':'sk-sl'+_0x419cc1(0x253),'FpfVl':'div','fGJZI':_0x419cc1(0x7fd)+'l','tzPeQ':'sk-la'+_0x419cc1(0x38d),'OebmW':function(_0x5c32de,_0x52fb29){return _0x5c32de===_0x52fb29;},'YOpsu':function(_0x1086ab,_0x280019,_0x14e64f){return _0x1086ab(_0x280019,_0x14e64f);},'BoQMm':function(_0x446654,_0x3324fb){return _0x446654+_0x3324fb;},'jNXff':function(_0x5f3d94,_0x346d78){return _0x5f3d94+_0x346d78;},'uXXdl':_0x419cc1(0x3e0),'iBTtg':'\x20fiel'+'ds\x20·\x20','DmcjD':'\x20writ'+'es','SwMdp':'IGzXa','gMMPu':function(_0x2a67b0,_0x82847b){return _0x2a67b0*_0x82847b;},'uJKlp':function(_0xc7a90a,_0x29a8b6){return _0xc7a90a===_0x29a8b6;},'UGNcS':'MPIKD','zGGke':function(_0x316f1e){return _0x316f1e();},'vwfAO':_0x419cc1(0x986)+'t','jZznw':_0x419cc1(0xc62)+_0x419cc1(0xbbc),'dheMm':_0x419cc1(0x49b)+'plies'+_0x419cc1(0xd26)+_0x419cc1(0x8c7)+_0x419cc1(0x183)+_0x419cc1(0x478)+'ds\x20on'+'ly.\x20H'+_0x419cc1(0x73b)+_0x419cc1(0x4da)+_0x419cc1(0xc05)+'\x20jump'+_0x419cc1(0x295)+'refus'+_0x419cc1(0x582),'VKECq':'sk-no'+'te','zOAuj':'Refus'+'ed:\x20','sWuaP':function(_0x182f23,_0x3f43ea,_0x33e6f9,_0x2694e7){return _0x182f23(_0x3f43ea,_0x33e6f9,_0x2694e7);},'NSRfG':_0x419cc1(0x839)+'napsh'+_0x419cc1(0x73c)+'\x20F7\x20\x20'+_0x419cc1(0x183)+'\x20on/o'+'ff\x0aF8'+_0x419cc1(0x8de)+_0x419cc1(0x31c)+'tor\x20+'+_0x419cc1(0x957)+_0x419cc1(0x6a9)+_0x419cc1(0x33d)+_0x419cc1(0x1d2)+_0x419cc1(0x5fd)+_0x419cc1(0x82d)+'rt\x20\x20t'+_0x419cc1(0xb0c)+'enu','tCipj':'visua'+'ls','eQZhn':function(_0xe7f443,_0xf30682){return _0xe7f443(_0xf30682);},'zQmce':_0x419cc1(0x205)+'ed','eEelI':'\x20-\x20th'+'ese\x20t'+_0x419cc1(0x79f)+'oats\x20'+'are\x20n'+'ot\x20pi'+_0x419cc1(0xd97)+'nd\x20ya'+'w.\x20Pr'+'ess\x20F'+_0x419cc1(0x1ff)+'rn\x20ab'+'out\x209'+_0x419cc1(0x75a)+_0x419cc1(0xa3c)+_0x419cc1(0x6f3),'GtbBH':function(_0x53b935,_0x3dd530){return _0x53b935+_0x3dd530;},'qmLOM':_0x419cc1(0x78a)+'n-spa'+_0x419cc1(0x872)+'xes.\x20'+'The\x20f'+_0x419cc1(0x94d)+_0x419cc1(0x8c9)+'ew\x20ca'+'nnot\x20'+_0x419cc1(0x4c5)+_0x419cc1(0x9eb)+_0x419cc1(0x1d6)+_0x419cc1(0x728)+'ild,\x20'+_0x419cc1(0xdb8)+'\x20is\x20f'+_0x419cc1(0x866)+_0x419cc1(0x8d8)+'ye.','SKoLG':_0x419cc1(0xca7)+'\x20of\x20v'+'iew','ezRJD':function(_0x575500,_0x48e1c2,_0x29e423){return _0x575500(_0x48e1c2,_0x29e423);},'xjoru':_0x419cc1(0x20a)+_0x419cc1(0x77f)+'o\x2075,'+_0x419cc1(0x565)+_0x419cc1(0xcb1)+_0x419cc1(0x42e),'XhSod':function(_0x82b940,_0x558d92,_0x4fdce0,_0x15914c){return _0x82b940(_0x558d92,_0x4fdce0,_0x15914c);},'CwvYE':function(_0x4bc32b,_0x5a6654,_0x401802,_0x173480){return _0x4bc32b(_0x5a6654,_0x401802,_0x173480);},'BglUt':function(_0x146115,_0x28cfb4){return _0x146115+_0x28cfb4;},'EsGNJ':function(_0x1627f7,_0x5c025f){return _0x1627f7+_0x5c025f;},'ATfGF':_0x419cc1(0xd14)+_0x419cc1(0x407),'KUsWx':'\x20\x20cam'+_0x419cc1(0x24a),'BkKTu':function(_0x464ecb,_0x200af9){return _0x464ecb+_0x200af9;},'sqvlE':function(_0x3a0a35,_0x2da52b){return _0x3a0a35+_0x2da52b;},'FWTXl':'from\x20'+_0x419cc1(0xd6a)+'okAng'+'les','kAFFy':'gette'+'r','jtjcP':function(_0x22849a,_0x2fc13a){return _0x22849a+_0x2fc13a;},'qdIDE':function(_0x4aa4a2,_0x548d6e){return _0x4aa4a2+_0x548d6e;},'Lgjsg':_0x419cc1(0x807)+_0x419cc1(0xa05)+'s\x20wer'+_0x419cc1(0x759)+_0x419cc1(0x1da)+'giste'+'red\x20(','Zfcii':'\x20erro'+_0x419cc1(0x4ea),'DkPZs':'\x0a(cle'+_0x419cc1(0x3c1)+_0x419cc1(0xc50)+_0x419cc1(0x756)+'ved\x20c'+'orrec'+_0x419cc1(0x486),'ehuae':'Build','LEwjF':_0x419cc1(0xdfe),'fuaYf':function(_0x16f87a,_0x536b66){return _0x16f87a+_0x536b66;},'SlhVI':_0x419cc1(0x4c8)+_0x419cc1(0x5d6)+_0x419cc1(0x682)+'nager','vARrD':function(_0x4a8e2e,_0x1adde7){return _0x4a8e2e(_0x1adde7);},'yxFEJ':_0x419cc1(0xd70),'cZGMt':'sk-va'+'l','mVhya':_0x419cc1(0x963),'TNEAA':'Playe'+'r','BTCyu':_0x419cc1(0x76b)+_0x419cc1(0x96e)+'ler+','nuOoG':function(_0x2d6c27,_0xce91dc){return _0x2d6c27+_0xce91dc;},'sLHGu':function(_0x366771,_0x40cc6f){return _0x366771+_0x40cc6f;},'WFUyC':_0x419cc1(0x5db)+_0x419cc1(0x5c7)+'t','GBwRb':'0x11C','ddwWo':function(_0x42d849,_0x473759,_0x5cb2a4,_0x53e121){return _0x42d849(_0x473759,_0x5cb2a4,_0x53e121);},'RLUcv':_0x419cc1(0x78d)+_0x419cc1(0x929)+'pt+0x'+'C0','mPAIz':_0x419cc1(0xdef),'DCuIG':function(_0x5030c0,_0x5a8cf9){return _0x5030c0!==_0x5a8cf9;},'jfnfP':_0x419cc1(0x9ba),'ZedID':function(_0xa5c264,_0xad5648,_0xc0bd11){return _0xa5c264(_0xad5648,_0xc0bd11);},'cdseY':_0x419cc1(0xcb7)+_0x419cc1(0x5c5)+'s','doAid':'sk-pr'+'e','SMfpo':_0x419cc1(0xd95)+'JSON\x20'+'to\x20cl'+_0x419cc1(0x3b8)+'rd','SrxEI':'Paste'+'\x20the\x20'+_0x419cc1(0x584)+'\x20thin'+_0x419cc1(0x9c4)+_0x419cc1(0xb07)+'ethin'+_0x419cc1(0x561)+_0x419cc1(0xbf5)+_0x419cc1(0x2e3),'VWZbh':function(_0x194814,_0x4da0e8){return _0x194814===_0x4da0e8;},'InvUd':function(_0x549aad,_0x107c4d){return _0x549aad+_0x107c4d;},'AVytc':function(_0xeb4b5f,_0xfa739b){return _0xeb4b5f!==_0xfa739b;},'EeROx':'UnGKA','lLRRN':'VZLzZ','Ferxl':function(_0x5706c0,_0xe8a101){return _0x5706c0(_0xe8a101);},'IfnHG':function(_0xb1a5f2,_0xd3bde4){return _0xb1a5f2-_0xd3bde4;},'GUwNY':_0x419cc1(0xd18),'yRqvw':'mouse'+_0x419cc1(0x920),'MwyaX':_0x419cc1(0x822)+'move','cVnfN':'WkBRt','sHYAV':'PJQOu','zRkFH':function(_0x561d7f,_0x1ca8ec){return _0x561d7f(_0x1ca8ec);},'AEvQa':_0x419cc1(0xa83)+'a-men'+_0x419cc1(0x67b),'TUdOv':_0x419cc1(0x9e6),'awErW':function(_0x9ec48e,_0xd7c1f8,_0x156e3d){return _0x9ec48e(_0xd7c1f8,_0x156e3d);},'IyHff':'mn-lo'+'go','Vklbe':function(_0x2bc8ed,_0xb30774,_0x430963){return _0x2bc8ed(_0xb30774,_0x430963);},'OhMYD':function(_0x1cdd81,_0x91efb2,_0x4c95d3){return _0x1cdd81(_0x91efb2,_0x4c95d3);},'MAPHe':'mn-to'+'p','EIPYF':_0x419cc1(0x2eb)+_0x419cc1(0xa30),'uOUtv':'mn-h','OCcsm':function(_0x287ddf,_0x56bf17,_0x296f46,_0x2761da){return _0x287ddf(_0x56bf17,_0x296f46,_0x2761da);},'zAXgt':'mn-su'+'b','pskWQ':'mn-co'+'ls','qaEPU':'<smal'+'l>','yNZLL':_0x419cc1(0x8ed)+_0x419cc1(0x70a)+'llWar'+'z\x20(In'+_0x419cc1(0xb4b),'fMKWk':function(_0x5b2b92,_0x5edf00){return _0x5b2b92+_0x5edf00;},'mbsVp':function(_0x5eb912,_0x369c7c){return _0x5eb912+_0x369c7c;},'vClvf':'mn-ta'+'b','smceK':'\x20acti'+'ve','eCukW':function(_0x353112,_0x35ba32){return _0x353112===_0x35ba32;},'cbAFe':_0x419cc1(0xa6b),'BmSwH':function(_0x14a0a4,_0xf76b45){return _0x14a0a4<_0xf76b45;},'GkkfR':function(_0x5b8cb1){return _0x5b8cb1();},'NwfGt':'mn-pa'+'nel','mlmLZ':function(_0x24fb46,_0xcfbcae){return _0x24fb46+_0xcfbcae;},'fOlVG':function(_0x153cc2,_0x20552e,_0x4091f5){return _0x153cc2(_0x20552e,_0x4091f5);},'XVfZX':function(_0x34c364,_0x2300a0,_0x17c3ea){return _0x34c364(_0x2300a0,_0x17c3ea);},'hsRlF':function(_0x9edd3a,_0x41ccf9){return _0x9edd3a+_0x41ccf9;},'cBWXk':function(_0x4c6f1e,_0x4ae072){return _0x4c6f1e===_0x4ae072;},'LCzhj':function(_0x1c0e88,_0x370555){return _0x1c0e88!==_0x370555;},'VHDKL':function(_0x55b260,_0x29f323){return _0x55b260&_0x29f323;},'JveFS':function(_0xd6c9a0,_0x11ec31){return _0xd6c9a0^_0x11ec31;},'FhQYU':function(_0x16e204,_0x3aa3e9){return _0x16e204/_0x3aa3e9;},'MqgBj':'\x20\x20·\x20\x20'+'hooks'+'\x20','HEjGc':'\x20\x20·\x20\x20'+'heap\x20','wFDOz':function(_0x2d55e5,_0x5bc673){return _0x2d55e5/_0x5bc673;},'xnsts':'waiti'+'ng\x20fo'+_0x419cc1(0x860)+_0x419cc1(0xcd6)+_0x419cc1(0x7b9)+'ort…','GeWCz':_0x419cc1(0x8ec)+_0x419cc1(0x7f1),'UaxCf':function(_0xa2ca52,_0x25e1b6){return _0xa2ca52<_0x25e1b6;},'kcGac':'VERSI'+'ON','dCHcw':function(_0x51fbd3,_0x31f7d0){return _0x51fbd3===_0x31f7d0;},'UXHQw':function(_0x5d1efe,_0x4f0959){return _0x5d1efe+_0x4f0959;},'aYnVw':function(_0xd310b7,_0x49fb14){return _0xd310b7===_0x49fb14;},'ziSyo':function(_0x369b9c,_0x55074b){return _0x369b9c(_0x55074b);},'FWFnQ':function(_0x3e9331,_0x20cc0a){return _0x3e9331+_0x20cc0a;},'JSrZf':function(_0x25b8e1,_0x2eb8f8){return _0x25b8e1+_0x2eb8f8;},'ZMFdr':function(_0x563d4d,_0x304914){return _0x563d4d+_0x304914;},'fFjWE':function(_0x56458f,_0x2309d2){return _0x56458f===_0x2309d2;},'CFqxX':function(_0x392e72,_0x4700f2){return _0x392e72===_0x4700f2;},'TRCyo':function(_0x2b5701,_0x20c693,_0x599057){return _0x2b5701(_0x20c693,_0x599057);},'JWcta':_0x419cc1(0x5bd),'cmWmk':function(_0x3fe335,_0x308773){return _0x3fe335+_0x308773;},'wUZFC':function(_0x27bbef,_0x3b8d81){return _0x27bbef+_0x3b8d81;},'CuyQR':function(_0x461bad,_0x52e74b){return _0x461bad===_0x52e74b;},'YRItP':function(_0x144ef5){return _0x144ef5();},'PkDuH':'plugi'+_0x419cc1(0xc19)+'ntime'+_0x419cc1(0x396)+'lveGa'+_0x419cc1(0xcf6),'QgEam':'plugi'+_0x419cc1(0xc19)+'ntime'+_0x419cc1(0x66a)+'e','NXTkF':function(_0x19af6f,_0x9992be){return _0x19af6f+_0x9992be;},'gDYqm':function(_0x2d8c9b,_0x295a9f){return _0x2d8c9b+_0x295a9f;},'nBKje':function(_0x59c3fe,_0x531100){return _0x59c3fe+_0x531100;},'tvDQF':function(_0x46a890,_0x2fda4b){return _0x46a890+_0x2fda4b;},'YJOFb':'\x20reac'+'h=','nyJnI':'OIZXm','iUtOm':function(_0x1f06b0,_0x5e36bd){return _0x1f06b0<_0x5e36bd;},'cwqGG':function(_0x53eff7,_0x1480d9){return _0x53eff7*_0x1480d9;},'dxjJX':'jCqwb','luUGo':function(_0x35ded2,_0x1bda81){return _0x35ded2===_0x1bda81;},'pDnmQ':function(_0x362f7d,_0x1b0e90){return _0x362f7d<_0x1b0e90;},'yAzyk':_0x419cc1(0x51d),'nnzAk':function(_0x579a43,_0x3083ff){return _0x579a43<_0x3083ff;},'upWDW':_0x419cc1(0xd41),'AUZSW':function(_0xa4b6e7,_0x316628){return _0xa4b6e7===_0x316628;},'mpTFY':'FNsGn','JgdGk':function(_0xd1a976,_0x49c48c){return _0xd1a976+_0x49c48c;},'czrmA':function(_0x17bb9c,_0x2c9603){return _0x17bb9c*_0x2c9603;},'nSSNf':_0x419cc1(0xb6c)+_0x419cc1(0xa3b),'lSFJS':function(_0x5ae5b2,_0x3424d3){return _0x5ae5b2+_0x3424d3;},'nKeGh':_0x419cc1(0xd03)+_0x419cc1(0xa0d)+'s=\x27sk'+_0x419cc1(0x292)+'\x27>','bnWZJ':function(_0x2d866b){return _0x2d866b();},'XZOpl':function(_0x3a8415,_0x492dd6){return _0x3a8415<_0x492dd6;},'sXTAY':function(_0x39174e,_0x1de024,_0x145386){return _0x39174e(_0x1de024,_0x145386);},'JZUKd':function(_0x7587cb,_0x513ce3){return _0x7587cb+_0x513ce3;},'jtROI':function(_0x580354,_0xf5d46f){return _0x580354-_0xf5d46f;},'ufSEP':_0x419cc1(0x2fb)+'ra-es'+'p-cv','WiVox':'#saku'+_0x419cc1(0xa91)+_0x419cc1(0xa9b),'ORyOm':function(_0x3f15ec,_0x4c77f3){return _0x3f15ec+_0x4c77f3;},'hXvLn':_0x419cc1(0x926)+'ion:f'+_0x419cc1(0x586)+_0x419cc1(0x963)+':12px'+_0x419cc1(0xd9e)+_0x419cc1(0x851)+_0x419cc1(0xa6f)+'ex:21'+'47483'+_0x419cc1(0x4b5)+_0x419cc1(0x797)+'r-eve'+_0x419cc1(0x481)+'one;','KEBGI':'dihZO','tOQyW':_0x419cc1(0x926)+_0x419cc1(0x724)+_0x419cc1(0x586)+_0x419cc1(0x6e6)+'0;top'+':0;z-'+'index'+':2147'+_0x419cc1(0x321)+'5;poi'+_0x419cc1(0xda0)+_0x419cc1(0x3a9)+'s:non'+'e;','BYdSg':_0x419cc1(0x210),'qiTwR':function(_0x1ade91,_0x963dea){return _0x1ade91!==_0x963dea;},'hTHCx':_0x419cc1(0xaf8),'dyydw':function(_0x4e187b){return _0x4e187b();},'vUMrN':function(_0x219ede,_0x3dc4d){return _0x219ede<_0x3dc4d;},'hveHk':'Znsnw','vZxpq':function(_0x244296,_0x532445){return _0x244296!==_0x532445;},'oZNeC':function(_0xcca23a,_0x6716be){return _0xcca23a<_0x6716be;},'sPeXP':function(_0x120a0e,_0x2ec593){return _0x120a0e-_0x2ec593;},'rcIgm':'2|0|4'+'|3|1','JAFXZ':function(_0x1b8a7c,_0x17cfe2){return _0x1b8a7c/_0x17cfe2;},'SnrZM':function(_0x182ba2,_0x350992){return _0x182ba2*_0x350992;},'LinLS':function(_0x2b27a9,_0x5ecbde){return _0x2b27a9*_0x5ecbde;},'CUVkW':function(_0x6e27d0,_0x587c9f){return _0x6e27d0/_0x587c9f;},'BuPZr':function(_0x472165,_0x19b74f){return _0x472165*_0x19b74f;},'CClab':function(_0x46b64b,_0xbbd4d3){return _0x46b64b/_0xbbd4d3;},'EHCqn':_0x419cc1(0x7d9),'aIayD':function(_0x3ec6f7,_0x455186){return _0x3ec6f7/_0x455186;},'NpiMy':function(_0x778401,_0x6b71fc){return _0x778401/_0x6b71fc;},'JbuKZ':function(_0x540b2f,_0x24eb05){return _0x540b2f*_0x24eb05;},'eydvT':function(_0x46ce44,_0x31ffa8,_0x257066,_0x170cd8,_0x4f5d25){return _0x46ce44(_0x31ffa8,_0x257066,_0x170cd8,_0x4f5d25);},'JxcLB':function(_0x31c64c,_0x361705){return _0x31c64c+_0x361705;},'KlcMk':function(_0x2c127c,_0x3ce4be){return _0x2c127c+_0x3ce4be;},'bbKPc':function(_0x598789,_0x4978ef){return _0x598789!==_0x4978ef;},'eZqdy':function(_0xb18ee7,_0xa420ab){return _0xb18ee7-_0xa420ab;},'ZnFJm':function(_0x20642d,_0x203e35){return _0x20642d-_0x203e35;},'IXEmS':function(_0x2bfc6b,_0x1b4ddf){return _0x2bfc6b>_0x1b4ddf;},'vlvHP':function(_0x5f4c26,_0x419b44){return _0x5f4c26*_0x419b44;},'fwxPU':_0x419cc1(0xc31)+_0x419cc1(0x9ee)+_0x419cc1(0xd54)+_0x419cc1(0xa98)+')','JJXEI':function(_0x279a48,_0x368a2b){return _0x279a48/_0x368a2b;},'cMJTT':function(_0x190834,_0x5da5a6){return _0x190834+_0x5da5a6;},'ilEeN':function(_0x40d2e0,_0x517953){return _0x40d2e0/_0x517953;},'HDakH':_0x419cc1(0x665)+'|4|1|'+_0x419cc1(0xdf0),'CVVlA':function(_0x3db808,_0x1d6852){return _0x3db808===_0x1d6852;},'PPpSO':function(_0x1663e8,_0x299f92){return _0x1663e8===_0x299f92;},'ZJsTT':function(_0x4a2c58,_0x308d4e){return _0x4a2c58-_0x308d4e;},'glkNY':function(_0xa1d4ae,_0x2a5bc6){return _0xa1d4ae!==_0x2a5bc6;},'UXalv':_0x419cc1(0xdf3),'wDffD':function(_0x16ad18,_0x2208d7){return _0x16ad18/_0x2208d7;},'yMzIK':'rgba('+_0x419cc1(0x9ee)+'43,17'+_0x419cc1(0xacb)+')','OVTlC':function(_0x30bba5,_0x3a5215){return _0x30bba5<=_0x3a5215;},'OqFAE':function(_0x3f9e1e,_0x124d7c){return _0x3f9e1e/_0x124d7c;},'PWrMD':function(_0x5e647,_0x2089f7){return _0x5e647*_0x2089f7;},'lFXrG':function(_0x3b399c,_0x26ec9f){return _0x3b399c!==_0x26ec9f;},'pXXVJ':'qYdPv','ZfxUE':function(_0x5d2227,_0x1e2926,_0x5f011c){return _0x5d2227(_0x1e2926,_0x5f011c);},'SvPcZ':'inIfo','HRrCW':_0x419cc1(0x7db),'JUirW':function(_0x20c704,_0x548b01){return _0x20c704-_0x548b01;},'fzGij':function(_0x44799b,_0x5a6ea1){return _0x44799b+_0x5a6ea1;},'khttH':'mMALv','WozBo':function(_0x283d62,_0xae1ba5){return _0x283d62+_0xae1ba5;},'Kegoa':_0x419cc1(0x720)+'74','FPtWz':function(_0x35a171,_0x2dedf2){return _0x35a171+_0x2dedf2;},'fZLIY':function(_0x249b39,_0x223f11){return _0x249b39+_0x223f11;},'zMlKc':_0x419cc1(0xa86),'GPTfA':'\x20·\x20fo'+'v\x20','vKXeX':function(_0x190c88,_0x36b81e){return _0x190c88+_0x36b81e;},'xTfLV':_0x419cc1(0xcd3)+'am','WqWcM':function(_0x4a195e){return _0x4a195e();},'XKZWW':_0x419cc1(0x28b),'siyDH':function(_0x58656b,_0x1d9911){return _0x58656b(_0x1d9911);},'YHFhl':function(_0x482877,_0x30dd10){return _0x482877===_0x30dd10;},'CJxXR':'DpKFk','auKyt':function(_0x3458cc){return _0x3458cc();},'ZaSrX':function(_0x534e16){return _0x534e16();},'jpVOh':'gkudE','JljbJ':function(_0x19511f,_0xc76240){return _0x19511f+_0xc76240;},'ITkiN':function(_0xbb17bf,_0x30bbdf){return _0xbb17bf+_0x30bbdf;},'iLuof':function(_0x1cb64a,_0x42df05){return _0x1cb64a+_0x42df05;},'BXcoT':function(_0x4056cc,_0x261d49){return _0x4056cc*_0x261d49;},'HguhK':function(_0x3a81c5,_0x585695){return _0x3a81c5*_0x585695;},'XgrDd':function(_0x232484,_0x97bef8){return _0x232484+_0x97bef8;},'XzmsI':function(_0x48d739,_0x503828){return _0x48d739<=_0x503828;},'jbuTT':function(_0x88ca64,_0x1b811a,_0x357815,_0x2c727f){return _0x88ca64(_0x1b811a,_0x357815,_0x2c727f);},'tSRQF':_0x419cc1(0x191)+'rd','GYCTj':_0x419cc1(0x676),'LcCsP':function(_0x392162,_0x4ddaca){return _0x392162+_0x4ddaca;},'ZoKFt':function(_0x154c76,_0x3b9e26){return _0x154c76(_0x3b9e26);},'WpaDr':'pBJjN','puDFz':function(_0x2d61be,_0x4be511){return _0x2d61be(_0x4be511);},'kHXrp':'UWMK\x20'+_0x419cc1(0x638)+_0x419cc1(0x535)+_0x419cc1(0xb30),'LNcyi':function(_0x46ca19,_0x2986ac){return _0x46ca19===_0x2986ac;},'dAAQB':_0x419cc1(0x524),'SKioV':function(_0x528b60,_0x183898){return _0x528b60+_0x183898;},'IRVOD':'captu'+'red\x20','mrfnq':_0x419cc1(0xd96)+_0x419cc1(0x8b0)+_0x419cc1(0xa62)+_0x419cc1(0xa95)+'0\x20fie'+_0x419cc1(0x2a6),'uBBmu':_0x419cc1(0xbe8)+_0x419cc1(0xace),'xhWSs':'No\x20re'+_0x419cc1(0xaa1)+_0x419cc1(0xca1)+_0x419cc1(0x3ce)+_0x419cc1(0x5d3)+_0x419cc1(0xdeb)+'t\x20was'+_0x419cc1(0xc59)+'ped\x20b'+_0x419cc1(0xc70)+'e.','loDRl':_0x419cc1(0x983),'mPRLX':function(_0x106fbe,_0x2beddc){return _0x106fbe+_0x2beddc;},'ZmHLa':function(_0x221ae9,_0x5b896a){return _0x221ae9+_0x5b896a;},'TEJOK':_0x419cc1(0xadb)+'ER\x20UW'+'MK\x20CO'+'PY\x20TO'+'OK\x20OV'+_0x419cc1(0xc66)+_0x419cc1(0xadf)+_0x419cc1(0x571)+_0x419cc1(0x3c8)+_0x419cc1(0x54b)+'\x20The\x20'+_0x419cc1(0x57d)+_0x419cc1(0xae3)+_0x419cc1(0xd2e)+_0x419cc1(0xb08)+'\x20','eaSlY':_0x419cc1(0xadd)+'ced\x20b'+'y\x20a\x20d'+_0x419cc1(0x4a6)+'ent\x20i'+_0x419cc1(0xb2e)+'ce,\x20s'+'o\x20we\x20'+'are\x20a'+_0x419cc1(0x3b9)+_0x419cc1(0xdbe)+'wrong'+_0x419cc1(0xd96)+_0x419cc1(0x577)+'r\x20','fOzZM':_0x419cc1(0xbba),'LUAiF':function(_0x308af1,_0x3d3fe7){return _0x308af1+_0x3d3fe7;},'nPiGb':function(_0x51cdb2,_0x104351){return _0x51cdb2+_0x104351;},'LjrzQ':function(_0x3906a7,_0x388708){return _0x3906a7+_0x388708;},'WFgCK':'Unity'+'\x20inst'+_0x419cc1(0x296)+_0x419cc1(0xb26)+_0x419cc1(0x743)+_0x419cc1(0x1f5)+'t\x20(so'+'urce:'+'\x20','CrNpG':_0x419cc1(0x40c),'ioJcj':'Heap\x20'+_0x419cc1(0xba3)+_0x419cc1(0xd09)+_0x419cc1(0xafc)+_0x419cc1(0xa10)+'ntil\x20'+'a\x20gam'+_0x419cc1(0x18c)+_0x419cc1(0x617)+_0x419cc1(0x810)+'odule'+_0x419cc1(0x784)+'U8\x20is'+_0x419cc1(0xde3)+_0x419cc1(0xd5e)+'.','kQYTt':_0x419cc1(0x305),'KMuWG':_0x419cc1(0xa1c),'RpygJ':_0x419cc1(0x411),'FUaoo':function(_0x25e2e4,_0x890ed4){return _0x25e2e4+_0x890ed4;},'vTLpV':'runs\x20'+'once\x20'+'durin'+'g\x20Web'+_0x419cc1(0x8b7)+_0x419cc1(0xae4)+_0x419cc1(0xb2e)+_0x419cc1(0x567)+'\x20and\x20'+_0x419cc1(0x95e)+'hots\x20'+_0x419cc1(0x691)+_0x419cc1(0x8dd)+_0x419cc1(0x92c)+_0x419cc1(0xb5b)+'\x20','owuaN':_0x419cc1(0xd9b)+_0x419cc1(0x7d7)+'egist'+_0x419cc1(0x45c)+_0x419cc1(0x390)+_0x419cc1(0x527)+'re\x20ig'+_0x419cc1(0xbda)+_0x419cc1(0xbaa)+_0x419cc1(0x1a2)+_0x419cc1(0x334)+_0x419cc1(0xda9)+'\x20page'+'.\x20','FaXgy':_0x419cc1(0x393)+_0x419cc1(0x43b)+'\x20','QjbeU':function(_0x59927e,_0x34bf80){return _0x59927e+_0x34bf80;},'cvQPy':'UWMK\x20'+_0x419cc1(0x971)+'ved\x20','jeYSS':_0x419cc1(0x30d)+_0x419cc1(0xaab)+_0x419cc1(0x949)+_0x419cc1(0x6d2)+_0x419cc1(0x423)+_0x419cc1(0x71f)+'es\x20no'+_0x419cc1(0xcfa)+_0x419cc1(0x58e)+'is\x20bu'+_0x419cc1(0x17d),'sxNft':_0x419cc1(0xb17)+_0x419cc1(0xc47)+'nce\x20f'+_0x419cc1(0xc6f)+_0x419cc1(0x4d9)+'re\x20(r'+_0x419cc1(0xae1)+_0x419cc1(0xbf6),'XnkqT':'Unity'+'WebMo'+'dkit','GoSaC':'%c[sa'+_0x419cc1(0x37d)+_0x419cc1(0x558)+_0x419cc1(0xbff)+_0x419cc1(0x4e5)+'rt','Ilzxd':function(_0x142e5f,_0x30f11b){return _0x142e5f+_0x30f11b;},'PzxXu':function(_0x2807a7,_0x4e6daf,_0x3f0217){return _0x2807a7(_0x4e6daf,_0x3f0217);},'HyJJm':function(_0x2b61a5,_0x2471bc){return _0x2b61a5-_0x2471bc;},'ZxNhu':function(_0x129615,_0x155654){return _0x129615(_0x155654);},'jaqQe':function(_0x5757c0,_0x5dcd7d){return _0x5757c0<_0x5dcd7d;},'IJhFy':'VceDM','wIzFd':_0x419cc1(0xb96),'lcJdd':'===SA'+_0x419cc1(0xaea)+_0x419cc1(0xe05)+'WARZ-'+'BEGIN'+_0x419cc1(0x331),'qPZJC':_0x419cc1(0xde9)+'2','Fcjyi':_0x419cc1(0x650)+'ge','gaBQI':function(_0xcd0cc0,_0x16e524){return _0xcd0cc0+_0x16e524;},'gMUuo':_0x419cc1(0x93d)+_0x419cc1(0x37d)+_0x419cc1(0x55d)+_0x419cc1(0x360)+_0x419cc1(0xcfc)+_0x419cc1(0x72f),'lyVVO':_0x419cc1(0xa83)+'a-sw','yhVKq':_0x419cc1(0xb45)+_0x419cc1(0x4a4)+'\u0095','AMNjl':_0x419cc1(0x6c0)+_0x419cc1(0xccb)+'\u0095','nLarZ':_0x419cc1(0x21b)+'\u0087\u0087\u008c\u0086\u0086'+'\u0091','RqDAJ':_0x419cc1(0x5e1)+'\u0093\u0091\u0089\u0088\u008d'+'\u008a','RCuEg':_0x419cc1(0x87c)+'\u008a\u0092\u0092\u008a\u0093'+'\u008a','vVcxC':'.ctor','UTLRF':_0x419cc1(0xb5d)+_0x419cc1(0x215)+'\u0088','sHbSj':'\u0089\u0091\u0086\u0093\u008f'+_0x419cc1(0x574)+'\u008d','hgFmk':_0x419cc1(0xc25)+'\u0090\u0095\u008d\u0090\u0088'+'\u008b','YnLwE':_0x419cc1(0xc68)+_0x419cc1(0xdc9)+'\u0093','novMl':_0x419cc1(0x666)+_0x419cc1(0x81c)+'\u0093','qovwF':_0x419cc1(0xc9a)+'\u0087\u008d\u008a\u008a\u0089'+'\u0089','NcQUG':'\u0092\u008c\u0088\u0087\u0088'+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','gqYtb':'\u008a\u0086\u008a\u008b\u0086'+_0x419cc1(0xa51)+'\u008d','pPgNV':'\u0089\u008c\u0095\u0088\u008a'+_0x419cc1(0x1c5)+'\u0094','nFBod':'\u0090\u0092\u008e\u008e\u0087'+_0x419cc1(0x5b8)+'\u0093','AuoxH':'bool','YVBCR':_0x419cc1(0x345)+_0x419cc1(0x6f5)+'\u0094','DAZfo':'\u0095\u0087\u0089\u008c\u008e'+_0x419cc1(0x933)+'\u0095','ZBEHR':'\u008a\u0092\u008a\u0091\u0094'+_0x419cc1(0x855)+'\u008f','gSErI':'\u0091\u0088\u0095\u0088\u0088'+_0x419cc1(0x66f)+'\u0089','LprYZ':_0x419cc1(0x606)+_0x419cc1(0x8ca)+'\u0094','zpmbO':_0x419cc1(0xbc8)+_0x419cc1(0xa36)+'\u008b','ERRjB':_0x419cc1(0x70d)+_0x419cc1(0x26a)+'\u0094','NziOw':_0x419cc1(0x96d)+_0x419cc1(0xa27)+'\u008b','wRvlF':_0x419cc1(0x985)+_0x419cc1(0x5a4)+'\u008c','HGlGo':_0x419cc1(0xb24)+_0x419cc1(0x848)+'\u0091','XqCas':_0x419cc1(0x38c)+'\u0089\u008e\u0095\u0095\u0087'+'\u008a','zPnTN':_0x419cc1(0x5a6)+_0x419cc1(0x2ba)+'\u0092','LBNmP':'\u0093\u0086\u0088\u008d\u008f'+_0x419cc1(0xc0d)+'\u0094','tCaXg':'\u0094\u0087\u008b\u008d\u0089'+_0x419cc1(0x8da)+'\u0090','JgrYq':'\u0094\u0094\u008e\u0091\u0090'+_0x419cc1(0x687)+'\u0095','ipnJX':_0x419cc1(0x5f7)+_0x419cc1(0xaba)+'\u0087','utPoX':'\u008b\u0092\u008b\u008f\u0095'+_0x419cc1(0x6e8)+'\u008f','iZcSG':_0x419cc1(0x9ec)+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','WAqNF':_0x419cc1(0x8cb)+_0x419cc1(0x8db)+'\u008b','dbaok':_0x419cc1(0xdc5)+_0x419cc1(0x23e)+'\u008f','ToeGs':_0x419cc1(0xa80)+_0x419cc1(0x158)+'\u0094','uhSSx':'\u0087\u0093\u0093\u0087\u0087'+_0x419cc1(0x2fd)+'\u0094','nquJg':_0x419cc1(0x970)+_0x419cc1(0x9ea)+'\u0092','FeqLo':'\u008b\u0090\u008d\u0095\u0086'+_0x419cc1(0x8e8)+'\u008c','KcXVa':_0x419cc1(0x273)+_0x419cc1(0x5ea)+'\u0091','KaidI':_0x419cc1(0x1dc)+_0x419cc1(0xb71)+'\u0086','TXRsp':_0x419cc1(0x1a1)+_0x419cc1(0xa1f)+'\u008f','nmrLl':'\u008e\u008b\u0093\u0091\u008e'+_0x419cc1(0x66b)+'\u008d','kNnxa':_0x419cc1(0x6e4)+'\u0091\u0095\u0088\u008f\u0088'+'\u008c','pzjMs':'\u0095\u0088\u0090\u0092\u0090'+_0x419cc1(0x919)+'\u0095','mHIxW':_0x419cc1(0x88d)+_0x419cc1(0xdc7)+'\u0090','PRjdJ':_0x419cc1(0x86b),'gexwx':_0x419cc1(0x42f)+_0x419cc1(0xa3e)+'\u0087','Rigos':_0x419cc1(0x5e2)+_0x419cc1(0xc2a)+'\u0088','edTqr':_0x419cc1(0x2a9)+'\u0089\u008c\u008d\u008b\u008f'+'\u0093','JJukv':_0x419cc1(0x7b7)+_0x419cc1(0xa14)+'\u008c','Qqoub':_0x419cc1(0x245)+'\u008c\u008f\u0086\u0095\u0094'+'\u008a','whoJG':_0x419cc1(0xab9)+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','KysZu':_0x419cc1(0x488)+'\u008e\u0090\u0087\u0087\u0092'+'\u008e','PnYDF':_0x419cc1(0xbbf)+_0x419cc1(0xdad)+'\u008c','FzeSl':'\u0086\u0086\u008c\u0094\u008b'+'\u0086\u008a\u0095\u0094\u008e'+'\u008f','JXOtV':_0x419cc1(0xb1e)+_0x419cc1(0x5bb)+'\u0094','JBfSV':_0x419cc1(0x7c6)+'\u008e\u008d\u0089\u008b\u0093'+'\u008e','hmlvA':_0x419cc1(0x71d)+'\u0088\u008c\u0087\u008e\u0087'+'\u008c','BGXeo':_0x419cc1(0xb0f)+'\u0086\u0089\u0086\u008b\u008b'+'\u0088','ZwnnP':'\u0094\u0092\u0086\u0092\u0092'+_0x419cc1(0x9c9)+'\u008e','brTqu':'\u0087\u0089\u008f\u008a\u0095'+_0x419cc1(0x795)+'\u0086','tzZWO':_0x419cc1(0x8cc)+_0x419cc1(0x536)+'\u008e','WfWHg':_0x419cc1(0x6bb)+'\u0092\u0091\u0094\u008d\u0093'+'\u0086','nDvDo':_0x419cc1(0x7d6)+'\u0093\u008b\u008c\u0094\u0095'+'\u008e','aBcvN':'\u0094\u0088\u008a\u0094\u0092'+'\u0089\u0094\u008e\u0093\u008f'+'\u0092','CPhYX':_0x419cc1(0x4f2)+'nMana'+'ger','CWqvV':'TDM_G'+'ameMa'+'nager','WwwUq':_0x419cc1(0x6f6)+_0x419cc1(0x5d9)+_0x419cc1(0x627)+'imati'+'ons','neUxT':_0x419cc1(0xb95)+_0x419cc1(0x2cd),'toCwb':'Assem'+_0x419cc1(0x7f6)+'Sharp'+_0x419cc1(0x3ba),'rQxAj':_0x419cc1(0x891)+'cofor'+_0x419cc1(0xc79)+'cal.d'+'ll','QpeTw':'cInpu'+'t.dll','ExJhA':_0x419cc1(0xbd4),'BKVke':_0x419cc1(0x6dc)+_0x419cc1(0xb18),'zNSFL':'fps','ertXi':'0xb4','nWxVb':'trans'+_0x419cc1(0x400),'xFAgd':_0x419cc1(0x255),'ZGdCk':_0x419cc1(0x9e1),'hAzZp':_0x419cc1(0x964),'YcJQu':'sakur'+'a-sw-'+_0x419cc1(0x3aa)+_0x419cc1(0x5c1),'TybBC':_0x419cc1(0x67d),'fffLQ':_0x419cc1(0xa83)+_0x419cc1(0x84d)+'menu-'+_0x419cc1(0x8a7),'TCpSz':_0x419cc1(0x184),'FXwuU':'VAL','cGRhB':function(_0x4529a6,_0x85c85a){return _0x4529a6+_0x85c85a;},'fuGgm':function(_0xaaa6d0,_0xd81ba2){return _0xaaa6d0+_0xd81ba2;},'hikIf':function(_0x1d282c,_0x5e733d){return _0x1d282c+_0x5e733d;},'JLUqB':function(_0x543017,_0x49b7c){return _0x543017+_0x49b7c;},'eTJys':function(_0x1067fb,_0x2b04cf){return _0x1067fb+_0x2b04cf;},'ssUaz':function(_0x567be4,_0x389035){return _0x567be4+_0x389035;},'eGwYi':function(_0x3f33ec,_0x516614){return _0x3f33ec+_0x516614;},'HeVxL':function(_0x4216fd,_0x2d307c){return _0x4216fd+_0x2d307c;},'YWGlF':function(_0x548b56,_0x3604e0){return _0x548b56+_0x3604e0;},'wuggR':function(_0x1da8ce,_0x5d0f88){return _0x1da8ce+_0x5d0f88;},'eFfNN':function(_0x291765,_0x4633a6){return _0x291765+_0x4633a6;},'YpweY':function(_0x452b25,_0x2b7192){return _0x452b25+_0x2b7192;},'eOdJS':function(_0x2a5d7a,_0x2f1515){return _0x2a5d7a+_0x2f1515;},'Sggdp':function(_0xfff59d,_0x27e209){return _0xfff59d+_0x27e209;},'KDWRQ':function(_0x219850,_0x36ba11){return _0x219850+_0x36ba11;},'NdflC':function(_0x1ed4c0,_0x2f02ce){return _0x1ed4c0+_0x2f02ce;},'vvinR':function(_0x282396,_0x3976d0){return _0x282396+_0x3976d0;},'GxtOb':_0x419cc1(0x2fb)+_0x419cc1(0x14c)+_0x419cc1(0x2f0)+_0x419cc1(0x17b)+'l:ini'+'tial}','MAdgG':_0x419cc1(0x2fb)+_0x419cc1(0x14c)+'nu-ro'+'ot.mn'+'-pane'+_0x419cc1(0xa87)+'ition'+_0x419cc1(0x26f)+'d;rig'+_0x419cc1(0xc29)+'px;bo'+_0x419cc1(0x4b6)+_0x419cc1(0x74f)+_0x419cc1(0xdd5)+_0x419cc1(0xce4)+_0x419cc1(0x960)+',calc'+'(100v'+_0x419cc1(0x207)+'8px))'+_0x419cc1(0x60b)+'heigh'+_0x419cc1(0xb15)+_0x419cc1(0xd60)+_0x419cc1(0x879)+_0x419cc1(0x5d1)+_0x419cc1(0x491)+_0x419cc1(0x8bd)+');','WRFsd':'box-s'+'hadow'+':0\x200\x20'+_0x419cc1(0xb8b)+'\x20rgba'+'(255,'+_0x419cc1(0x49f)+'55,.0'+'6),in'+'set\x200'+_0x419cc1(0xa04)+'0\x20rgb'+_0x419cc1(0xd3b)+',255,'+_0x419cc1(0xb36)+_0x419cc1(0xd67)+_0x419cc1(0x710)+_0x419cc1(0x3f6)+_0x419cc1(0xd2d)+'(0,0,'+_0x419cc1(0x4c9)+');','DoUMe':_0x419cc1(0x8d2)+':#f6e'+_0x419cc1(0x1af)+_0x419cc1(0xca5)+_0x419cc1(0x2de)+_0x419cc1(0x72e)+_0x419cc1(0xdd1)+'amily'+_0x419cc1(0xca6)+_0x419cc1(0x52a)+_0x419cc1(0xb11)+'\x20UI\x22,'+_0x419cc1(0xdea)+_0x419cc1(0x3f7)+'sans-'+_0x419cc1(0x6bd)+';}','vqWHZ':'#saku'+'ra-me'+_0x419cc1(0x2f0)+_0x419cc1(0x9a0)+_0x419cc1(0x2b0)+_0x419cc1(0x289)+_0x419cc1(0x270)+_0x419cc1(0x886)+_0x419cc1(0x6a1)+_0x419cc1(0x89b)+'rm:no'+'ne;po'+_0x419cc1(0x7a7)+'-even'+'ts:au'+'to;}','sqHNU':_0x419cc1(0x90e)+_0x419cc1(0x7d3)+'ius:1'+_0x419cc1(0x5f9)+_0x419cc1(0xb70)+'ound:'+_0x419cc1(0xc31)+_0x419cc1(0x49f)+'55,25'+_0x419cc1(0xaff)+_0x419cc1(0x7f8)+'x-sha'+_0x419cc1(0x89a)+_0x419cc1(0xc1e)+_0x419cc1(0x3b7)+_0x419cc1(0xa04)+'rgba('+_0x419cc1(0x49f)+'55,25'+'5,.05'+_0x419cc1(0x357),'zElcK':_0x419cc1(0x4c7)+_0x419cc1(0x575)+_0x419cc1(0x2e9)+'dth:2'+'5px;h'+'eight'+_0x419cc1(0xaa8)+_0x419cc1(0xd49)+_0x419cc1(0x721)+'visib'+_0x419cc1(0xb90)+_0x419cc1(0xacc)+'drop-'+_0x419cc1(0x928)+_0x419cc1(0x621)+_0x419cc1(0xd0d)+_0x419cc1(0xc31)+'255,1'+_0x419cc1(0x336)+'7,.8)'+_0x419cc1(0x357),'brLld':_0x419cc1(0x2a2)+_0x419cc1(0x76c)+_0x419cc1(0xa15)+':flex'+';alig'+'n-ite'+'ms:ce'+'nter;'+_0x419cc1(0x925)+_0x419cc1(0xd88)+'ntent'+':cent'+'er;wi'+'dth:5'+'2px;h'+_0x419cc1(0x73b)+_0x419cc1(0x219)+';bord'+'er:0;'+'borde'+_0x419cc1(0x7d3)+_0x419cc1(0x45a)+_0x419cc1(0x41b),'SBjSx':_0x419cc1(0xbe7)+_0x419cc1(0x6b5)+_0x419cc1(0x675)+';min-'+_0x419cc1(0xdd5)+_0x419cc1(0x68e)+_0x419cc1(0xa15)+':flex'+_0x419cc1(0x56c)+_0x419cc1(0xc49)+_0x419cc1(0x60e)+_0x419cc1(0x3a1)+'mn;}','fKMmS':_0x419cc1(0x2a2)+_0x419cc1(0x2e5)+_0x419cc1(0xa15)+_0x419cc1(0x43d)+_0x419cc1(0x6ee)+'n-ite'+'ms:ce'+_0x419cc1(0x66d)+'gap:1'+_0x419cc1(0xbb4)+_0x419cc1(0xd92)+'g:6px'+'\x206px\x20'+_0x419cc1(0xaae)+'user-'+'selec'+_0x419cc1(0x762)+'e;}','TfUyc':_0x419cc1(0x982)+_0x419cc1(0x1e7)+_0x419cc1(0x8d5)+':17px'+';font'+'-weig'+'ht:65'+'0;}','CehXF':'.mn-s'+'ub{fo'+'nt-si'+_0x419cc1(0x30f)+_0x419cc1(0x432)+'acity'+_0x419cc1(0xaac),'MVCtx':_0x419cc1(0x6e7)+_0x419cc1(0x9f5)+_0x419cc1(0x383)+_0x419cc1(0xb25)+_0x419cc1(0x7b6)+_0x419cc1(0xd2b)+_0x419cc1(0x73a)+'d:rgb'+_0x419cc1(0xd3b)+_0x419cc1(0x748)+'255,.'+_0x419cc1(0x30a),'nmPKw':_0x419cc1(0x6e7)+_0x419cc1(0x94f)+'lex:1'+_0x419cc1(0x782)+_0x419cc1(0x5c7)+'t:0;o'+_0x419cc1(0x1c4)+'ow-y:'+'auto;'+_0x419cc1(0x747)+'ay:gr'+'id;gr'+_0x419cc1(0x447)+_0x419cc1(0x7fc)+'e-col'+'umns:'+_0x419cc1(0x861)+'t(aut'+_0x419cc1(0x81a)+_0x419cc1(0x7a4)+_0x419cc1(0xdd3)+'50px,'+'1fr))'+';','jxLVI':_0x419cc1(0xa5d)+_0x419cc1(0x9b3)+'s:sta'+'rt;al'+_0x419cc1(0xb91)+_0x419cc1(0x7d1)+'t:sta'+_0x419cc1(0x386)+_0x419cc1(0xa2f)+'x;pad'+_0x419cc1(0x6a5)+_0x419cc1(0x3fc)+_0x419cc1(0x431)+'0;}','yZZwN':'.mn-c'+_0x419cc1(0xd91)+'-webk'+_0x419cc1(0xbf1)+_0x419cc1(0xde7)+_0x419cc1(0xde2)+_0x419cc1(0xb73)+'ackgr'+_0x419cc1(0x343)+_0x419cc1(0xc31)+'255,2'+_0x419cc1(0x364)+'5,.08'+_0x419cc1(0x6da)+_0x419cc1(0x935)+_0x419cc1(0xc67)+_0x419cc1(0xdb4)+'}','Pfifh':_0x419cc1(0xc0f)+_0x419cc1(0x7af)+'order'+_0x419cc1(0xb53)+'us:12'+_0x419cc1(0x8b4)+_0x419cc1(0x799)+_0x419cc1(0x628)+_0x419cc1(0x37b)+'55,25'+'5,255'+_0x419cc1(0x774)+');box'+_0x419cc1(0x873)+'ow:in'+'set\x200'+'\x200\x200\x20'+'1px\x20r'+'gba(2'+'55,25'+_0x419cc1(0x579)+_0x419cc1(0xd17)+';}','hXQMB':_0x419cc1(0xc0f)+_0x419cc1(0x308)+_0x419cc1(0x86a)+_0x419cc1(0x955)+'nd:rg'+'ba(25'+'5,255'+_0x419cc1(0x748)+_0x419cc1(0x71e)+'box-s'+'hadow'+_0x419cc1(0x7ef)+_0x419cc1(0x655)+'\x200\x201p'+_0x419cc1(0xd81)+_0x419cc1(0xd3b)+_0x419cc1(0x8fc)+_0x419cc1(0xa26)+_0x419cc1(0xb7d),'PZOiG':'.sk-c'+_0x419cc1(0x180)+_0x419cc1(0x765)+_0x419cc1(0x803)+'1;min'+_0x419cc1(0xdd6)+_0x419cc1(0xc30),'ozYsh':'backg'+'round'+_0x419cc1(0x685)+_0x419cc1(0xc00)+_0x419cc1(0x49f)+'55,.2'+_0x419cc1(0xab5)+_0x419cc1(0x94b)+_0x419cc1(0x788)+'eft\x20.'+'2s,ba'+_0x419cc1(0x799)+_0x419cc1(0x562)+'2s;}','wRSsc':_0x419cc1(0x6f7)+'witch'+_0x419cc1(0x7cb)+_0x419cc1(0x3ab)+_0x419cc1(0xbb6)+'true\x22'+']{bac'+_0x419cc1(0x955)+'nd:rg'+'ba(25'+_0x419cc1(0x618)+_0x419cc1(0x88f)+'.25);'+'}','gOUjt':_0x419cc1(0x6f7)+'witch'+'[aria'+_0x419cc1(0x3ab)+_0x419cc1(0xbb6)+_0x419cc1(0x605)+']::af'+'ter{l'+'eft:1'+_0x419cc1(0xd38)+_0x419cc1(0xb70)+_0x419cc1(0x343)+'#ff6b'+_0x419cc1(0xa11),'UnjiB':'.sk-r'+_0x419cc1(0x64b)+'displ'+'ay:fl'+'ex;al'+_0x419cc1(0xc6d)+_0x419cc1(0x82b)+_0x419cc1(0xdd4)+_0x419cc1(0xafe)+':8px;'+'}','UfXkc':_0x419cc1(0x6f7)+_0x419cc1(0x233)+_0x419cc1(0x8f2)+_0x419cc1(0x722)+_0x419cc1(0xc9c)+_0x419cc1(0x8fe)+'mb{-w'+'ebkit'+'-appe'+_0x419cc1(0x9ae)+'e:non'+'e;wid'+'th:6p'+_0x419cc1(0xd77)+_0x419cc1(0x1a7)+_0x419cc1(0xc97)+_0x419cc1(0x9cf)+'top:-'+_0x419cc1(0x160)+'order'+_0x419cc1(0xb53)+'us:50'+_0x419cc1(0x550)+'kgrou'+'nd:#f'+_0x419cc1(0xbae)+';}','NvbpY':_0x419cc1(0x294)+_0x419cc1(0xcd0)+_0x419cc1(0xb23)+'ity\x20.'+_0x419cc1(0x45e)+_0x419cc1(0x7a7)+'-even'+_0x419cc1(0x9a7)+_0x419cc1(0x362)+'lter:'+_0x419cc1(0x1e6)+_0x419cc1(0x928)+'w(0\x200'+_0x419cc1(0xd0d)+_0x419cc1(0xc31)+_0x419cc1(0x9ee)+_0x419cc1(0x336)+_0x419cc1(0x994)+_0x419cc1(0x357),'wvdSV':_0x419cc1(0x421)+'le\x20cx'+'=\x2212\x22'+'\x20cy=\x22'+_0x419cc1(0x43a)+_0x419cc1(0x8bf)+'\x22\x20fil'+_0x419cc1(0x341)+_0x419cc1(0xbae)+'\x22/></'+'svg>','ccCcz':'<svg\x20'+_0x419cc1(0x9ab)+_0x419cc1(0x625)+'logo-'+_0x419cc1(0xb97)+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+_0x419cc1(0x413)+_0x419cc1(0xaf2)+'12\x2021'+_0x419cc1(0xbce)+_0x419cc1(0x358)+_0x419cc1(0xd8f)+_0x419cc1(0x9d2)+'5\x200-2'+_0x419cc1(0xb89)+'8-4.5'+'\x204-4.'+_0x419cc1(0xbbd)+_0x419cc1(0xaa4)+'5c0\x203'+_0x419cc1(0x437)+'5-4\x207'+_0x419cc1(0x8aa),'rWdaq':'fill='+_0x419cc1(0x8ba)+_0x419cc1(0x7eb)+_0x419cc1(0xd78)+'#ff6b'+_0x419cc1(0x61c)+_0x419cc1(0xac9)+'-widt'+'h=\x221.'+_0x419cc1(0x429)+_0x419cc1(0x732)+_0x419cc1(0x83a)+_0x419cc1(0xdde)+'ound\x22'+_0x419cc1(0xb3d)+'ke-li'+'nejoi'+'n=\x22ro'+'und\x22/'+'>','IOIUg':_0x419cc1(0x71b)+_0x419cc1(0xa24)+_0x419cc1(0x989)+'d'};var _0x5d9c77=location['hostn'+'ame']||'',_0x5a955c=/(^|\.)www\.crazygames\.com$/[_0x419cc1(0xbdb)](_0x5d9c77),_0x1fb01d=/(^|\.)games\.crazygames\.com$/[_0x419cc1(0xbdb)](_0x5d9c77),_0x1ca31c=/(^|\.)crazygames\.com$/[_0x419cc1(0xbdb)](_0x5d9c77)&&!_0x5a955c&&!_0x1fb01d,_0x4028d4=_0x5a955c?'porta'+'l':_0x1fb01d?'wrapp'+'er':_0x419cc1(0x6cf)+'r';if(!_0x5a955c&&!_0x1fb01d&&!_0x1ca31c)return;var _0xe38ae3=_0x419cc1(0x863)+'b1',_0x2b5f92=_0x419cc1(0x375)+_0x419cc1(0x7b8)+'w_v2',_0x3912f5=_0x25545f[_0x419cc1(0x38b)],_0x32b98b=_0x419cc1(0x9d7)+'KURA-'+_0x419cc1(0xe05)+'WARZ-'+'END=='+'=',_0x4b2487=_0x25545f['qPZJC'];if(_0x1fb01d){if(_0x25545f[_0x419cc1(0xb88)](_0x419cc1(0x729),'PnAyU'))return{'w':0x0,'h':0x0};else{window['addEv'+_0x419cc1(0xb8e)+_0x419cc1(0x417)+'r'](_0x25545f[_0x419cc1(0x346)],function(_0xc0d1c9){var _0x5add79=_0x419cc1,_0x592e54=_0xc0d1c9[_0x5add79(0x9db)];if(!_0x592e54||_0x592e54[_0x5add79(0x375)+'ura']!==_0x2b5f92)return;try{if('grTVZ'==='YzSSS'){_0x2356eb=_0x5c269b,_0x11aed5=[],_0x25545f[_0x5add79(0x6be)](_0x4dc134,_0x5add79(0x1f6)+'t',{'report':_0x25545f[_0x5add79(0xdca)](_0x3f4d25)});return;}else{if(window['paren'+'t']&&window[_0x5add79(0x3dc)+'t']!==window)window['paren'+'t']['postM'+_0x5add79(0x81f)+'e'](_0x592e54,'*');if(window['top']&&window['top']!==window)window['top']['postM'+_0x5add79(0x81f)+'e'](_0x592e54,'*');}}catch(_0x1c0226){}if(_0x592e54&&_0x592e54['kind']===_0x5add79(0xb34))try{var _0x3bda2a=document['query'+'Selec'+_0x5add79(0x572)+'l'](_0x25545f['hmwiE']);for(var _0x9fe76d=0x220e+0x1d0e+-0x3f1c;_0x25545f['QubhL'](_0x9fe76d,_0x3bda2a['lengt'+'h']);_0x9fe76d++){try{if(_0x3bda2a[_0x9fe76d][_0x5add79(0xb22)+'ntWin'+'dow'])_0x3bda2a[_0x9fe76d]['conte'+_0x5add79(0x83f)+_0x5add79(0xbf9)][_0x5add79(0x75c)+_0x5add79(0x81f)+'e'](_0x592e54,'*');}catch(_0x3bca6a){}}}catch(_0x2cec5a){}}),console[_0x419cc1(0x482)]('%c[sa'+_0x419cc1(0x37d)+'\x20SW-W'+_0x419cc1(0xa3d)+_0x419cc1(0x862)+'IVE\x20('+_0x419cc1(0x8a9)+_0x419cc1(0xbea)+_0x419cc1(0xd04),'color'+':'+_0xe38ae3);return;}}if(_0x5a955c){console[_0x419cc1(0x482)](_0x419cc1(0x93d)+_0x419cc1(0x37d)+_0x419cc1(0x4fd)+'AL\x20AC'+_0x419cc1(0xa8d),_0x25545f[_0x419cc1(0x835)]('color'+':'+_0xe38ae3,_0x419cc1(0xba4)+'-weig'+'ht:70'+'0'),{'host':_0x5d9c77});var _0x1eaa5a={'set':function(){},'command':function(){}};function _0x11c14e(_0x3eecc1,_0x4f9d83){var _0x2c91cb=_0x419cc1,_0x47e424={'CPfmd':function(_0x53c5d1,_0x2ad50a){return _0x53c5d1+_0x2ad50a;},'rFKaA':_0x25545f[_0x2c91cb(0x332)],'mqSVw':function(_0x1ee544,_0xd8c342){return _0x1ee544<_0xd8c342;},'uvncT':_0x25545f[_0x2c91cb(0x84e)],'bqDdg':_0x2c91cb(0x6d4)},_0x54194f={'__sakura':_0x2b5f92,'kind':_0x2c91cb(0xb34),'cmd':_0x3eecc1,'arg':_0x4f9d83};try{var _0x2b32c8=document[_0x2c91cb(0x1db)+_0x2c91cb(0x6ff)+'torAl'+'l'](_0x2c91cb(0x499)+'e');for(var _0x102e49=0x2198+0x17ef+-0x3987;_0x25545f[_0x2c91cb(0x387)](_0x102e49,_0x2b32c8[_0x2c91cb(0xa1b)+'h']);_0x102e49++){if('wsemo'!=='wsemo')return _0x36f328['warn'](_0x2c91cb(0x93d)+_0x2c91cb(0x37d)+_0x2c91cb(0x168)+'\x20unav'+_0x2c91cb(0x44c)+'le',_0x47e424[_0x2c91cb(0x62c)](_0x2c91cb(0x8d2)+':',_0x3cd6af),_0x5b741a),null;else try{if(_0x2c91cb(0xc6e)===_0x2c91cb(0xc6e)){if(_0x2b32c8[_0x102e49][_0x2c91cb(0xb22)+_0x2c91cb(0x83f)+'dow'])_0x2b32c8[_0x102e49]['conte'+_0x2c91cb(0x83f)+'dow'][_0x2c91cb(0x75c)+'essag'+'e'](_0x54194f,'*');}else{var _0x409867=_0x47e424['rFKaA'][_0x2c91cb(0xb76)]('|'),_0x28c70a=0x17c9+-0x1*-0x2153+-0x2db*0x14;while(!![]){switch(_0x409867[_0x28c70a++]){case'0':for(var _0x3f27e2=-0xa15+-0x450*0x1+0xe65;_0x47e424[_0x2c91cb(0x3b6)](_0x3f27e2,_0x229124['lengt'+'h'])&&_0x47e424['mqSVw'](_0x3f27e2,-0x1*-0x26d5+-0x30*0x55+-0x1*0x745);_0x3f27e2++){var _0x34a4a8=_0x47e424[_0x2c91cb(0x62c)](_0x47e424[_0x2c91cb(0x62c)](_0x229124[_0x3f27e2][_0x2c91cb(0x654)+'s']['join'](','),_0x47e424[_0x2c91cb(0x5cb)]),_0x229124[_0x3f27e2]['retur'+'nType']||_0x47e424['bqDdg']);_0xac304c[_0x34a4a8]=_0x47e424[_0x2c91cb(0x62c)](_0xac304c[_0x34a4a8]||-0x1efb+0x14bf+0xa3c,-0x19c5+-0x1*-0x1c01+0x23b*-0x1);}continue;case'1':_0x532429['wasmT'+'ypes']=_0xac304c;continue;case'2':var _0x198acc=_0xcdc0af['Unity'+'WebMo'+'dkit']&&_0x498770['Unity'+_0x2c91cb(0x3c8)+_0x2c91cb(0xba2)][_0x2c91cb(0x57d)+'me'];continue;case'3':var _0x229124=_0x198acc&&_0x198acc['inter'+'nalWa'+'smTyp'+'es']||[];continue;case'4':var _0xac304c={};continue;}break;}}}catch(_0x1e22e3){}}}catch(_0xa5ac8a){}try{var _0x2e57ab=new BroadcastChannel(_0x2c91cb(0xa83)+'a-sw');_0x2e57ab['postM'+'essag'+'e'](_0x54194f),setTimeout(function(){try{_0x2e57ab['close']();}catch(_0x5e7d98){}},-0x20*-0xcb+-0x860+0x2*-0x803);}catch(_0x428bd1){}}var _0x44ddb8=_0x419cc1(0xa83)+_0x419cc1(0x84d)+_0x419cc1(0x328)+'-hidd'+'en';function _0x4a179d(){var _0x5de259=_0x419cc1,_0x426acd={'tIfmW':function(_0x2c7317,_0x507903){var _0x4a3382=_0x29e5;return _0x25545f[_0x4a3382(0xd52)](_0x2c7317,_0x507903);}};if(_0x5de259(0x875)==='NFGgP')try{return localStorage[_0x5de259(0x611)+'em'](_0x44ddb8)==='1';}catch(_0x1be72f){return![];}else try{return _0x426acd[_0x5de259(0xaf4)](_0x57377b[_0x5de259(0x611)+'em'](_0x54b2f0),'1');}catch(_0x5c002f){return![];}}function _0x4272ce(_0x4ad1d6){var _0xe5b2c4=_0x419cc1,_0x5943e1={'JSnML':function(_0x5ba80e,_0x2da25a){return _0x5ba80e(_0x2da25a);}};if('sWoIJ'!==_0xe5b2c4(0xce8)){if(_0x394be6[_0x2f8018][_0xe5b2c4(0xb22)+_0xe5b2c4(0x83f)+'dow'])_0x4b2f71[_0x46b71e]['conte'+_0xe5b2c4(0x83f)+_0xe5b2c4(0xbf9)]['postM'+_0xe5b2c4(0x81f)+'e'](_0x5f1ff9,'*');}else{try{_0x4ad1d6?localStorage['setIt'+'em'](_0x44ddb8,'1'):localStorage['remov'+_0xe5b2c4(0x6a2)](_0x44ddb8);}catch(_0x4c8e35){}try{var _0x85a477=document[_0xe5b2c4(0x619)+'ement'+'ById'](_0xe5b2c4(0xa83)+_0xe5b2c4(0x84d)+'v2');if(_0x85a477)_0x85a477[_0xe5b2c4(0xab8)+'e']();}catch(_0x2fad5a){}try{var _0x414389=document[_0xe5b2c4(0x619)+_0xe5b2c4(0x4d5)+'ById'](_0x25545f['ykSQg']);if(_0x25545f[_0xe5b2c4(0xdec)](_0x4ad1d6,!_0x414389)&&document['body']){if(_0x25545f[_0xe5b2c4(0x1c1)]!==_0x25545f['FXFHa']){var _0x9ed2e9=(_0xe5b2c4(0x27a)+_0xe5b2c4(0x271)+'4')['split']('|'),_0x3b03ab=0x98*0x8+-0x1d23+0x1863;while(!![]){switch(_0x9ed2e9[_0x3b03ab++]){case'0':_0x3d128b['id']=_0x25545f[_0xe5b2c4(0xaa2)];continue;case'1':_0x3d128b['style'][_0xe5b2c4(0x31f)+'xt']=_0x25545f['WVHXT'](_0x25545f['WVHXT'](_0xe5b2c4(0x926)+_0xe5b2c4(0x724)+_0xe5b2c4(0x586)+_0xe5b2c4(0x6e6)+'12px;'+'top:1'+'2px;z'+_0xe5b2c4(0x498)+_0xe5b2c4(0xdf9)+_0xe5b2c4(0x8af)+'99;cu'+_0xe5b2c4(0x53a)+'point'+_0xe5b2c4(0xaaf)+_0xe5b2c4(0x60d)+_0xe5b2c4(0x3a5)+_0xe5b2c4(0xca0)+_0x25545f[_0xe5b2c4(0x580)]+_0xe38ae3,';'),_0xe5b2c4(0x90e)+_0xe5b2c4(0x7d3)+_0xe5b2c4(0x2f2)+'99px;'+_0xe5b2c4(0x5dc)+'ng:4p'+'x\x2012p'+'x;fon'+'t:11p'+_0xe5b2c4(0x597)+'\x20ui-m'+'onosp'+_0xe5b2c4(0xc6c)+_0xe5b2c4(0x188)+'as,mo'+_0xe5b2c4(0xd5b)+'ce;');continue;case'2':_0x3d128b[_0xe5b2c4(0xe00)+'onten'+'t']='sakur'+'a';continue;case'3':var _0x3d128b=document['creat'+'eElem'+'ent'](_0xe5b2c4(0x166));continue;case'4':document[_0xe5b2c4(0x816)][_0xe5b2c4(0xcad)+_0xe5b2c4(0x48f)+'d'](_0x3d128b);continue;case'5':_0x3d128b['oncli'+'ck']=function(){_0x5943e1['JSnML'](_0x4272ce,![]),_0x46a99c();};continue;}break;}}else _0x29cdc4=_0x435aa1,_0x48a120=_0x25545f['YBvSX'](_0x36ee51['now'](),_0x4ebcf6);}else _0x25545f['CWVkE'](!_0x4ad1d6,_0x414389)&&_0x414389['remov'+'e']();}catch(_0x3599a0){}}}function _0x1d71f6(){var _0x3fa743=_0x419cc1,_0x41a7c6={'ZFWjU':_0x25545f[_0x3fa743(0x8ab)]};if(_0x25545f['rUCqM']==='DmFNC')try{_0x495bd2[_0x3fa743(0xddb)+'em'](_0x116724,_0x25545f[_0x3fa743(0x4a2)](_0x5857df,_0x275d70[_0x3fa743(0xa2e)]));}catch(_0x3939cd){}else{if(_0x25545f['Tbskc'](_0x4a179d))return null;var _0x1d167d=document[_0x3fa743(0x619)+_0x3fa743(0x4d5)+'ById'](_0x3fa743(0xa83)+_0x3fa743(0x84d)+'v2');if(_0x1d167d)return _0x1d167d;if(!document['body']||!document[_0x3fa743(0x816)][_0x3fa743(0xcad)+_0x3fa743(0x48f)+'d'])return null;try{if(!document['getEl'+'ement'+'ById'](_0x3fa743(0xa83)+'a-sw-'+_0x3fa743(0x701)+'s')){var _0x1b389a=document[_0x3fa743(0x8e6)+_0x3fa743(0x2c7)+'ent'](_0x3fa743(0xbf4));_0x1b389a['id']=_0x25545f[_0x3fa743(0x906)],_0x1b389a[_0x3fa743(0xe00)+'onten'+'t']=_0x3fa743(0x2fb)+'ra-sw'+_0x3fa743(0x35f)+_0x3fa743(0xd2f)+_0x3fa743(0x154)+'}',(document['head']||document['docum'+_0x3fa743(0xa19)+'ement'])[_0x3fa743(0xcad)+_0x3fa743(0x48f)+'d'](_0x1b389a);}return _0x1d167d=document[_0x3fa743(0x8e6)+_0x3fa743(0x2c7)+_0x3fa743(0xba7)](_0x3fa743(0x166)),_0x1d167d['id']=_0x3fa743(0xa83)+_0x3fa743(0x84d)+'v2',document[_0x3fa743(0x816)][_0x3fa743(0xcad)+_0x3fa743(0x48f)+'d'](_0x1d167d),_0x1d167d;}catch(_0x26c9e3){if(_0x3fa743(0xc41)!==_0x25545f['VyvrU'])return null;else _0x988ab2[_0x3fa743(0xc1b)+_0x3fa743(0xb8d)][_0x3fa743(0x90b)](_0x41a7c6['ZFWjU']);}}}function _0x46a99c(){var _0x44a015=_0x419cc1,_0x2775f5=_0x1d71f6();if(!_0x2775f5)return _0x1eaa5a;if(_0x2775f5[_0x44a015(0x339)+'et']['api'])return _0x2775f5[_0x44a015(0x947)];try{return _0x25545f[_0x44a015(0x4a2)](_0x52c388,_0x2775f5);}catch(_0x4f1f84){if(_0x25545f[_0x44a015(0xc0b)]('LaRRk',_0x25545f[_0x44a015(0x798)]))return _0x2775f5[_0x44a015(0x339)+'et'][_0x44a015(0x947)]='1',_0x2775f5['api']=_0x1eaa5a,console['warn'](_0x44a015(0x93d)+'kura]'+_0x44a015(0x5d7)+'l\x20dis'+_0x44a015(0x379),_0x25545f['WVHXT'](_0x44a015(0x8d2)+':',_0xe38ae3),_0x4f1f84),_0x1eaa5a;else{var _0x3d9d96=0x1735*0x1+0x1f*0x140+-0x1*0x3df5;for(var _0x4a190e=-0x190b*0x1+0x1ea4*0x1+-0x599;_0x4a190e<_0x3b1e88['lengt'+'h'];_0x4a190e++){if(_0x554484[_0x4a190e][_0x44a015(0xc8d)]&&_0x2601b6[_0x4a190e][_0x44a015(0xc8d)]['appli'+'ed'])_0x3d9d96++;}return _0x3d9d96;}}}function _0x52c388(_0x745af8){var _0x47c929=_0x419cc1,_0xf0dfbd={'uhSSt':function(_0x176c52){return _0x176c52();},'snRfn':function(_0x542ead){return _0x25545f['Tbskc'](_0x542ead);},'TcpeB':function(_0x147a16,_0x6d3f2f){return _0x25545f['DZvKJ'](_0x147a16,_0x6d3f2f);},'pzwIH':_0x47c929(0x7e3)+'d','jCFld':_0x25545f[_0x47c929(0xd79)],'HJUwK':'\x20acti'+'ve','QiIgg':'6|3|5'+'|1|2|'+_0x47c929(0xa4d),'kIrRq':function(_0x43b29e,_0x408442){return _0x43b29e+_0x408442;},'HCNVQ':function(_0x4fdb06,_0x6a613){return _0x4fdb06+_0x6a613;},'USzPQ':_0x25545f['MtUzQ'],'IKpni':_0x25545f['hQmci'],'aiYtR':_0x25545f[_0x47c929(0x41f)],'fyIRb':_0x25545f[_0x47c929(0x30c)],'yMRLg':_0x25545f[_0x47c929(0xbc0)],'MVOni':'24px','WKhTD':_0x47c929(0xb6a),'fSycZ':function(_0x7195c6,_0x552e26){return _0x7195c6+_0x552e26;},'wMQDl':_0x47c929(0xc31)+_0x47c929(0x9ee)+'43,17'+'7,.35'+')','fKKfU':_0x47c929(0x720)+'74','xrlex':_0x25545f[_0x47c929(0x910)],'PYiZN':_0x25545f[_0x47c929(0xb7c)],'kGxmQ':function(_0x300a70,_0x4e1151){var _0x51da93=_0x47c929;return _0x25545f[_0x51da93(0x302)](_0x300a70,_0x4e1151);},'xKcNy':function(_0x1f5040,_0x51bd29){return _0x1f5040+_0x51bd29;},'pkOJz':_0x47c929(0x414)+_0x47c929(0xd2e)+'d\x20·\x20','ZMOzp':_0x25545f[_0x47c929(0x2e2)],'ZYlMJ':_0x25545f[_0x47c929(0x9bd)],'RumVk':_0x25545f['imzFo'],'pffAH':'F9\x20tw'+'ice\x20w'+_0x47c929(0x288)+_0x47c929(0x52c)+_0x47c929(0x3a3)+_0x47c929(0x26b)+_0x47c929(0xdbc)+_0x47c929(0x72b)+_0x47c929(0xb21)+'marks'+'\x20whic'+'h\x20fie'+'ld\x20is'+'\x20whic'+'h.','YeeIx':_0x25545f[_0x47c929(0xac7)],'tqtOn':_0x25545f[_0x47c929(0x2ab)],'sjJIE':function(_0x47d0c1,_0x217d1a){return _0x25545f['WVHXT'](_0x47d0c1,_0x217d1a);},'CTmoi':function(_0x57ceca,_0x4493d2){return _0x57ceca(_0x4493d2);},'AWzfW':_0x47c929(0x93d)+_0x47c929(0x37d)+'\x20Skil'+_0x47c929(0xbff)+'\x20repo'+'rt','tiDgj':function(_0x18a72d,_0x2cca95){var _0x31d36b=_0x47c929;return _0x25545f[_0x31d36b(0x752)](_0x18a72d,_0x2cca95);},'MpwDK':function(_0x5e9c15,_0x551f90){return _0x25545f['WVHXT'](_0x5e9c15,_0x551f90);},'yAJux':function(_0x277bfd,_0x26346f){return _0x277bfd+_0x26346f;}};_0x745af8['style'][_0x47c929(0x31f)+'xt']=_0x25545f['MfoBe'](_0x47c929(0x926)+_0x47c929(0x724)+'ixed;'+_0x47c929(0x6e6)+_0x47c929(0xaae)+_0x47c929(0xc89)+_0x47c929(0x95c)+_0x47c929(0x498)+'x:214'+_0x47c929(0xb28)+'00;ma'+'x-wid'+_0x47c929(0x585)+'n(52v'+_0x47c929(0x22f)+_0x47c929(0xd8e)+_0x47c929(0x2b9)+'ight:'+'78vh;'+_0x25545f[_0x47c929(0x3c6)]+(_0x47c929(0x23f)+_0x47c929(0x39f)+'1.5\x20u'+_0x47c929(0xd45)+'ospac'+'e,Con'+'solas'+_0x47c929(0xb9d)+_0x47c929(0x368)+_0x47c929(0x793)+'shado'+_0x47c929(0x4bb)+'0px\x205'+_0x47c929(0xd31)+_0x47c929(0xcac)+_0x47c929(0x47d)),_0x25545f['xnsPA']),_0x745af8['inner'+'HTML']=_0x25545f[_0x47c929(0xb92)](_0x25545f[_0x47c929(0x752)](_0x25545f[_0x47c929(0xbca)](_0x25545f[_0x47c929(0xd35)](_0x25545f[_0x47c929(0x531)](_0x47c929(0x673)+_0x47c929(0xbf4)+_0x47c929(0x99a)+_0x47c929(0x6a5)+_0x47c929(0x93c)+'2px;b'+_0x47c929(0xc04)+'-bott'+'om:1p'+'x\x20sol'+'id\x20rg'+'ba(25'+'5,143'+_0x47c929(0x64f)+_0x47c929(0x474)+'ispla'+'y:fle'+'x;gap'+_0x47c929(0xc9e)+_0x47c929(0xa5d)+_0x47c929(0x9b3)+'s:cen'+'ter;f'+_0x47c929(0xa58)+_0x47c929(0xb8a)+'to;\x22>',_0x25545f['kcHih'])+_0xe38ae3+_0x25545f[_0x47c929(0x61e)],_0x25545f['vbZJQ']),'<span'+'\x20id=\x22'+_0x47c929(0x1b5)+_0x47c929(0x455)+'\x22\x20sty'+'le=\x22c'+'olor:'+'#bda9'+_0x47c929(0x298)+'aitin'+'g\x20for'+_0x47c929(0x4f4)+_0x47c929(0xa44)+'e…</s'+'pan>')+('<butt'+'on\x20id'+'=\x22sw2'+'-copy'+_0x47c929(0xcf7)+_0x47c929(0xc92)+_0x47c929(0x750)+_0x47c929(0x2b5)+_0x47c929(0x832)+'gin-l'+_0x47c929(0x890)+_0x47c929(0x824)+'ackgr'+'ound:')+_0xe38ae3,_0x47c929(0x367)+'er:0;'+_0x47c929(0x8d2)+_0x47c929(0xad8)+_0x47c929(0xa2b)+'order'+'-radi'+_0x47c929(0x31a)+'x;pad'+'ding:'+'4px\x201'+'0px;f'+'ont-w'+_0x47c929(0x73b)+_0x47c929(0x956)+'curso'+_0x47c929(0x909)+'nter;'+_0x47c929(0x990)+'y\x20JSO'+_0x47c929(0x897)+_0x47c929(0xd72))+_0x25545f[_0x47c929(0x6b3)]+_0x25545f['eXifM']+_0x25545f[_0x47c929(0x202)]+_0x25545f['FUpSl']+('<div\x20'+'style'+'=\x22pad'+_0x47c929(0x6a5)+_0x47c929(0x8e0)+_0x47c929(0x160)+_0x47c929(0xc04)+'-bott'+_0x47c929(0xd0b)+_0x47c929(0x819)+_0x47c929(0x3c5)+'ba(25'+_0x47c929(0x3e8)+_0x47c929(0x64f)+'.18);'+'displ'+_0x47c929(0xd10)+_0x47c929(0x490)+'p:8px'+_0x47c929(0x6ee)+'n-ite'+_0x47c929(0x653)+_0x47c929(0x66d)+'flex:'+_0x47c929(0xb55)+'uto;f'+'lex-w'+'rap:w'+_0x47c929(0x59d)+'>')+(_0x47c929(0x526)+_0x47c929(0x8f9)+'=\x22sw2'+_0x47c929(0xc32)+_0x47c929(0x883)+_0x47c929(0xc10)+_0x47c929(0xc44)+'round'+':tran'+_0x47c929(0x7d0)+'nt;bo'+_0x47c929(0x2b4)+'1px\x20s'+_0x47c929(0xc24)+'rgba('+_0x47c929(0x9ee)+'43,17'+_0x47c929(0x42b)+_0x47c929(0x833)+_0x47c929(0xdae)+_0x47c929(0xd01)+'borde'+_0x47c929(0x7d3)+'ius:7'+_0x47c929(0x7fe)+'dding'+_0x47c929(0x6ae)+'10px;'+_0x47c929(0xcd8)+'r:poi'+_0x47c929(0x66d)+'\x22>Spe'+'ed\x20of'+'f</bu'+_0x47c929(0xd72))+_0x25545f[_0x47c929(0x5e9)],_0xe38ae3)+';\x22>'+_0x25545f[_0x47c929(0x4df)]+(_0x47c929(0x526)+'on\x20id'+_0x47c929(0x1cc)+_0x47c929(0x15b)+'\x22\x20sty'+_0x47c929(0x484)+_0x47c929(0xb70)+'ound:'+_0x47c929(0x294)+'paren'+'t;bor'+'der:1'+_0x47c929(0x54c)+'lid\x20r'+_0x47c929(0x37b)+'55,14'+'3,177'+',.4);'+'color'+':#f7e'+'ef5;b'+'order'+_0x47c929(0xb53)+'us:7p'+_0x47c929(0x749)+'ding:'+_0x47c929(0xd4a)+_0x47c929(0x568)+'rsor:'+_0x47c929(0x18f)+_0x47c929(0x32d)+'Snaps'+_0x47c929(0x79b)+_0x47c929(0x352)+'butto'+'n>')+(_0x47c929(0xd03)+'\x20id=\x22'+_0x47c929(0x9b9)+_0x47c929(0xcf2)+_0x47c929(0xbf4)+_0x47c929(0x24e)+_0x47c929(0xb82)+_0x47c929(0x889)+'\x22>F9\x20'+_0x47c929(0x8e2)+_0x47c929(0x220)+_0x47c929(0x366)+_0x47c929(0xb3b)+'/\x20spr'+'intin'+'g\x20/\x20j'+_0x47c929(0x77c)+_0x47c929(0xade)+_0x47c929(0x546)+'ich\x20f'+'ield\x20'+_0x47c929(0x962)+_0x47c929(0xa66)+_0x47c929(0x1df)+'>')+_0x25545f['djSHf']+(_0x47c929(0x88e)+_0x47c929(0x817)+_0x47c929(0x402)+_0x47c929(0xd34)+_0x47c929(0xc10)+_0x47c929(0xcfb)+'n:0;p'+_0x47c929(0xd92)+_0x47c929(0x777)+_0x47c929(0x2be)+_0x47c929(0x911)+'rflow'+':auto'+_0x47c929(0x56c)+':1\x201\x20'+_0x47c929(0x228)+'white'+_0x47c929(0xa37)+_0x47c929(0x1d9)+_0x47c929(0xc26)+_0x47c929(0xc88)+_0x47c929(0x916)+_0x47c929(0x731)+_0x47c929(0x8d3)+_0x47c929(0xc3b)+_0x47c929(0x281)+_0x47c929(0x965)+';')+(_0x47c929(0x6e0)+_0x47c929(0x73b)+_0x47c929(0x632)+_0x47c929(0x45d)+_0x47c929(0x4e5)+'rt\x20ye'+'t.\x0a\x0aT'+'his\x20p'+'anel\x20'+'updat'+'es\x20it'+'self\x20'+_0x47c929(0x44d)+_0x47c929(0xd50)+_0x47c929(0xbb3)+_0x47c929(0xb14)+_0x47c929(0xb3a)+'\x20—\x20no'+'\x20cons'+_0x47c929(0xb78)+_0x47c929(0xa6d)+_0x47c929(0x9c2)+'\x20it\x20s'+_0x47c929(0x9d3)+'empty'+_0x47c929(0x878)+_0x47c929(0x80e)+_0x47c929(0x8ee)+_0x47c929(0x275)+_0x47c929(0xc83)+_0x47c929(0x9f2)+'g\x20int'+_0x47c929(0x4d1)+'\x20cros'+'s-ori'+'gin\x20g'+_0x47c929(0xbb3)+'rame.'+_0x47c929(0x76a)+'>')+_0x25545f['djSHf'];var _0x4b3bab=_0x745af8['query'+'Selec'+'tor'](_0x25545f[_0x47c929(0x661)]),_0x5a8f4e=_0x745af8['query'+_0x47c929(0x6ff)+'tor'](_0x25545f[_0x47c929(0xa4c)]),_0x451092=_0x745af8[_0x47c929(0x1db)+'Selec'+'tor'](_0x47c929(0x1c0)+'out'),_0x52222b=_0x745af8[_0x47c929(0x1db)+'Selec'+'tor'](_0x47c929(0x1c0)+_0x47c929(0xc60)),_0x186725=_0x745af8[_0x47c929(0x1db)+_0x47c929(0x6ff)+_0x47c929(0xad3)](_0x47c929(0x1c0)+'x'),_0x176c66=_0x745af8[_0x47c929(0x1db)+_0x47c929(0x6ff)+'tor'](_0x25545f[_0x47c929(0xa3f)]),_0x3581e7=_0x745af8[_0x47c929(0x1db)+_0x47c929(0x6ff)+_0x47c929(0xad3)](_0x47c929(0x1c0)+'body'),_0x27e15b=_0x745af8[_0x47c929(0x1db)+_0x47c929(0x6ff)+_0x47c929(0xad3)](_0x25545f['gcjCZ']),_0x4056b7=_0x745af8['query'+_0x47c929(0x6ff)+_0x47c929(0xad3)](_0x25545f[_0x47c929(0xc08)]),_0x32200e=_0x745af8['query'+_0x47c929(0x6ff)+_0x47c929(0xad3)](_0x47c929(0x1c0)+_0x47c929(0x3f2)+'r'),_0x577c58=_0x745af8['query'+'Selec'+_0x47c929(0xad3)](_0x47c929(0x1c0)+_0x47c929(0x3f2)+'rlabe'+'l'),_0x26dc63=_0x745af8['query'+_0x47c929(0x6ff)+'tor'](_0x25545f[_0x47c929(0xb3f)]),_0x1a1e14=null,_0x4592a8=![];function _0x5bc43a(){var _0x170f67=_0x47c929,_0x5b306e={'GJmPM':'10|6|'+'3|4|5'+'|8|9|'+_0x170f67(0x412)+'|2','fRUeG':function(_0x1f99ee){var _0x414cff=_0x170f67;return _0xf0dfbd[_0x414cff(0x4b9)](_0x1f99ee);},'tLRYX':_0x170f67(0x57d)+_0x170f67(0x225)+_0x170f67(0x1fe)+'lugin'+_0x170f67(0x97d)+_0x170f67(0x44c)+'le','dqWFY':function(_0x3b298a){var _0x35e278=_0x170f67;return _0xf0dfbd[_0x35e278(0x4b0)](_0x3b298a);}};if(_0x170f67(0xbf3)!=='Mcnjh'){var _0x5ef2ed=_0x5b306e[_0x170f67(0x4bf)][_0x170f67(0xb76)]('|'),_0x2f3260=0x173c+0x10d3+-0x280f;while(!![]){switch(_0x5ef2ed[_0x2f3260++]){case'0':_0x5b306e['fRUeG'](_0x4ea892);continue;case'1':_0x4d49a9[_0x170f67(0x414)+'Regis'+_0x170f67(0x43b)]=_0x4152a9['lengt'+'h'];continue;case'2':_0xc583c2[_0x170f67(0xb00)+_0x170f67(0x7a1)]=!![];continue;case'3':_0x4a2dda['attem'+_0x170f67(0x3b2)]=!![];continue;case'4':_0x1586fe=_0x539eda['creat'+'ePlug'+'in']({'name':_0x170f67(0xa83)+_0x170f67(0x7ce)+'llwar'+'z','version':_0x517f2f,'referencedAssemblies':_0x3fd234[_0x170f67(0x634)]()});continue;case'5':_0x48a7ee['ok']=!![];continue;case'6':if(!_0x539eda||typeof _0x539eda['creat'+_0x170f67(0x299)+'in']!=='funct'+_0x170f67(0xc6b)){_0x443c8f[_0x170f67(0x97b)]=_0x5b306e[_0x170f67(0x1ab)];return;}continue;case'7':_0x5b306e['fRUeG'](_0x1c139c);continue;case'8':try{var _0x2a6596=_0x3343e5[_0x170f67(0x571)+_0x170f67(0x3c8)+_0x170f67(0xba2)][_0x170f67(0x57d)+'me'];_0x2a6596['__sak'+_0x170f67(0x3be)+'g']=_0xbaeb93+':'+_0x546bb4['rando'+'m']()['toStr'+'ing'](0xc83*-0x3+0x1*-0x22b7+-0x1219*-0x4)['slice'](-0xba*-0x6+0x11fc+-0x1656*0x1,0x2441+-0xbb7+-0x1880),_0x1a9f65=_0x2a6596[_0x170f67(0x375)+'uraTa'+'g'];}catch(_0x439c60){}continue;case'9':_0x5b306e['dqWFY'](_0x5e1219);continue;case'10':var _0x539eda=_0x75a56e[_0x170f67(0x571)+_0x170f67(0x3c8)+_0x170f67(0xba2)]&&_0x4d3639[_0x170f67(0x571)+_0x170f67(0x3c8)+_0x170f67(0xba2)][_0x170f67(0x57d)+'me'];continue;}break;}}else{if(_0x3581e7)_0x3581e7[_0x170f67(0xbf4)][_0x170f67(0x747)+'ay']=_0x4592a8?'':_0x170f67(0x165);if(_0x176c66)_0x176c66[_0x170f67(0xe00)+_0x170f67(0x7d1)+'t']=_0x4592a8?_0x170f67(0x83b):'open';_0x745af8['style']['width']=_0x4592a8?'min(5'+'2vw,6'+_0x170f67(0x261):_0x170f67(0x195),_0x745af8[_0x170f67(0xbf4)][_0x170f67(0xc44)+'round']=_0x4592a8?'#150c'+'1d':_0x170f67(0xc31)+'21,12'+',29,.'+'9)';}}if(_0x176c66)_0x176c66[_0x47c929(0x523)+'ck']=function(){_0x4592a8=!_0x4592a8,_0x5bc43a();};_0x25545f[_0x47c929(0xdca)](_0x5bc43a);if(_0x186725)_0x186725[_0x47c929(0x523)+'ck']=function(){_0x4272ce(!![]);};if(_0x27e15b)_0x27e15b['oncli'+'ck']=function(){var _0x456fcf=_0x47c929;_0x11c14e(_0x456fcf(0x95e)+'hot');};var _0x44dfd3=![];function _0x6067db(){var _0x53a567=_0x47c929;_0x25545f[_0x53a567(0x6be)](_0x11c14e,_0x25545f[_0x53a567(0xce2)],{'on':_0x44dfd3,'factor':_0x25545f['KCyTX'](parseFloat,_0x32200e['value'])||-0x1692+-0x17f*-0x3+0x1216});}if(_0x4056b7)_0x4056b7[_0x47c929(0x523)+'ck']=function(){var _0xf58ec6=_0x47c929;_0x44dfd3=!_0x44dfd3,_0x4056b7[_0xf58ec6(0xe00)+'onten'+'t']=_0x44dfd3?_0xf58ec6(0x9fb)+'\x20ON':'Speed'+_0xf58ec6(0x76e),_0x4056b7[_0xf58ec6(0xbf4)][_0xf58ec6(0xc44)+_0xf58ec6(0x494)]=_0x44dfd3?_0xe38ae3:'trans'+'paren'+'t',_0x4056b7[_0xf58ec6(0xbf4)][_0xf58ec6(0x8d2)]=_0x44dfd3?_0xf58ec6(0x8a6)+'1b':_0x25545f[_0xf58ec6(0x159)],_0x25545f[_0xf58ec6(0xdca)](_0x6067db);};if(_0x32200e)_0x32200e[_0x47c929(0x829)+'ut']=function(){var _0x50959c=_0x47c929,_0x21efaa={'HAEfC':_0x25545f[_0x50959c(0xc23)]};if(_0x50959c(0x6d5)==='hOkTw')_0x339c2e(_0x21efaa[_0x50959c(0xcc2)]);else{if(_0x577c58)_0x577c58['textC'+_0x50959c(0x7d1)+'t']=(_0x25545f[_0x50959c(0x4a2)](parseFloat,_0x32200e['value'])||-0x11*-0x175+-0x3c*-0x84+-0x37b4)[_0x50959c(0x5b7)+'ed'](0x7*0x241+-0x4ed*0x1+-0xad9)+'x';_0x6067db();}};if(_0x52222b)_0x52222b[_0x47c929(0x523)+'ck']=function(){var _0x3ee04b=_0x47c929,_0x2b96f2={'evCJR':_0xf0dfbd[_0x3ee04b(0x9c6)],'Rqxrj':function(_0x1d24c5,_0x1110f2){return _0x1d24c5+_0x1110f2;},'uqZPo':_0xf0dfbd['HJUwK'],'kjKwo':function(_0x454385,_0x23caca){return _0x454385(_0x23caca);},'HhhAT':_0xf0dfbd['QiIgg']},_0x43d7c8=_0xf0dfbd[_0x3ee04b(0x300)](_0xf0dfbd[_0x3ee04b(0x176)](_0x3912f5,'\x0a')+(_0x1a1e14?JSON[_0x3ee04b(0x6fb)+'gify'](_0x1a1e14,null,-0x17*0x35+0x24e*0xc+-0x16e4):''),'\x0a')+_0x32b98b,_0x453b8e=function(){var _0x3b6ddc=_0x3ee04b;if(_0xf0dfbd[_0x3b6ddc(0x6d3)](_0x3b6ddc(0xb83),_0x3b6ddc(0x9c0))){if(_0x52222b)_0x52222b[_0x3b6ddc(0xe00)+_0x3b6ddc(0x7d1)+'t']=_0xf0dfbd[_0x3b6ddc(0x5cc)];}else{_0x5948e2[_0x3b6ddc(0x3d1)]=_0x1c7094,_0x12ff95[_0x3b6ddc(0x264)]=[];if(!_0x4380cf[_0x3b6ddc(0xd3f)])return;var _0x2d9d1e=null;for(var _0x27d5b4=-0x46*0x89+0x43e*0x1+0x8*0x427;_0x27d5b4<_0x3cf7fa['lengt'+'h'];_0x27d5b4++)if(_0xec2ca3[_0x27d5b4]['id']===_0x2caa9f)_0x2d9d1e=_0x441f64[_0x27d5b4];_0x5b0b67[_0x3b6ddc(0x169)][_0x3b6ddc(0xe00)+_0x3b6ddc(0x7d1)+'t']=_0x2b96f2['evCJR']+(_0x2d9d1e&&_0x2d9d1e[_0x3b6ddc(0xd8d)]||'?');for(var _0xfbc35c in _0x44440b['butto'+'ns']){if(_0x42894d['butto'+'ns'][_0xfbc35c][_0x3b6ddc(0x9ab)+_0x3b6ddc(0xa06)])_0x5184fc[_0x3b6ddc(0xcbe)+'ns'][_0xfbc35c][_0x3b6ddc(0x9ab)+'Name']=_0x2b96f2['Rqxrj']('mn-ta'+'b',_0xfbc35c===_0x249715?_0x2b96f2[_0x3b6ddc(0x319)]:'');}var _0x3a9c89=[];try{_0x3a9c89=_0x2b96f2[_0x3b6ddc(0x63c)](_0x2385ba,_0x2f111d);}catch(_0x3c4cc8){_0x3a9c89=[];}while(_0x5b058c[_0x3b6ddc(0xd3f)][_0x3b6ddc(0x738)+'Child'])_0x3e802a['cols'][_0x3b6ddc(0xab8)+_0x3b6ddc(0x944)+'d'](_0x1b0965[_0x3b6ddc(0xd3f)][_0x3b6ddc(0x738)+_0x3b6ddc(0x401)]);for(var _0x4e07d0=0x1c00+0x586+-0x2186;_0x4e07d0<_0x3a9c89[_0x3b6ddc(0xa1b)+'h'];_0x4e07d0++)_0x66d524['cols'][_0x3b6ddc(0xcad)+_0x3b6ddc(0x48f)+'d'](_0x3a9c89[_0x4e07d0]);}};if(navigator['clipb'+'oard']&&navigator[_0x3ee04b(0x172)+_0x3ee04b(0x5e6)]['write'+_0x3ee04b(0x999)]){if(_0xf0dfbd['USzPQ']!==_0x3ee04b(0x640))navigator[_0x3ee04b(0x172)+'oard'][_0x3ee04b(0xc7c)+_0x3ee04b(0x999)](_0x43d7c8)[_0x3ee04b(0x57a)](_0x453b8e,function(){_0x299e8e();});else return _0x4e89a5[_0x3ee04b(0x494)](_0x216bcb*(0x2*-0x11ea+0x8*-0x22c+0x3598))/(0x1f2b+-0x82f*-0x3+-0x3754);}else _0x299e8e();function _0x299e8e(){var _0x271b99=_0x3ee04b,_0x380e17=_0x2b96f2['HhhAT'][_0x271b99(0xb76)]('|'),_0x15b635=-0x4f+0x15b3+0xab2*-0x2;while(!![]){switch(_0x380e17[_0x15b635++]){case'0':_0x2ac2ee['remov'+'e']();continue;case'1':document['body'][_0x271b99(0xcad)+'dChil'+'d'](_0x2ac2ee);continue;case'2':_0x2ac2ee['selec'+'t']();continue;case'3':_0x2ac2ee[_0x271b99(0x467)]=_0x43d7c8;continue;case'4':try{document['execC'+_0x271b99(0x578)+'d'](_0x271b99(0xc60)),_0x453b8e();}catch(_0x4f0401){}continue;case'5':if(!document[_0x271b99(0x816)])return;continue;case'6':var _0x2ac2ee=document['creat'+_0x271b99(0x2c7)+'ent']('texta'+_0x271b99(0xbbb));continue;}break;}}};_0x25545f[_0x47c929(0xd02)](setTimeout,function(){var _0x18120f=_0x47c929;if(_0x1a1e14)return;if(!_0x4b3bab||!_0x451092)return;_0x4b3bab['textC'+_0x18120f(0x7d1)+'t']=_0xf0dfbd['IKpni'],_0x4b3bab[_0x18120f(0xbf4)][_0x18120f(0x8d2)]=_0xf0dfbd['aiYtR'],_0x451092[_0x18120f(0xe00)+_0x18120f(0x7d1)+'t']=_0xf0dfbd[_0x18120f(0x300)]('The\x20g'+_0x18120f(0xbb3)+'rame\x20'+'never'+_0x18120f(0x72c)+_0x18120f(0x972)+'singl'+_0x18120f(0x885)+'ort.\x0a'+'\x0a'+(_0x18120f(0x7bd)+'panel'+_0x18120f(0x6e2)+'es\x20th'+_0x18120f(0x9a5)+_0x18120f(0x917)+_0x18120f(0xddd)+'\x20inst'+_0x18120f(0x760)+_0x18120f(0x888)+'runni'+_0x18120f(0x381)+_0x18120f(0xdbe)+_0x18120f(0xcea)+'l,\x0a')+(_0x18120f(0x9be)+'e\x20rem'+_0x18120f(0x338)+_0x18120f(0xa32)+'pects'+_0x18120f(0xb62)+'\x0a\x0a'),_0xf0dfbd['fyIRb'])+(_0x18120f(0xc01)+_0x18120f(0x25e)+_0x18120f(0x44b)+_0x18120f(0x24d)+_0x18120f(0x641)+'n\x20rel'+'oaded'+_0x18120f(0xd9c)+_0x18120f(0x3bc)+_0x18120f(0x92d)+_0x18120f(0x87e))+(_0x18120f(0x2ca)+_0x18120f(0x20c)+_0x18120f(0xa83)+_0x18120f(0x7de)+_0x18120f(0x36d)+'z.use'+'r.js\x20'+_0x18120f(0xb80)+_0x18120f(0x5eb)+'d\x20dia'+_0x18120f(0x735)+'ipt\x20a'+_0x18120f(0x3c4))+('\x20\x20\x20\x20\x20'+_0x18120f(0xd7e)+_0x18120f(0x373)+_0x18120f(0xc8a)+'\x20copi'+_0x18120f(0x79d)+_0x18120f(0xba5)+_0x18120f(0x58a)+'\x20patc'+_0x18120f(0x815)+_0x18120f(0x8b7)+'bly.i'+_0x18120f(0xb2e)+_0x18120f(0x567)+'.\x0a\x0a')+_0xf0dfbd[_0x18120f(0x97c)];},0x185*-0xeb+0x7c3a+0x23f1*0xd);var _0x12a31d={'set':function(_0x158750){var _0x482424=_0x47c929;if(_0xf0dfbd['WKhTD']===_0xf0dfbd[_0x482424(0x5e5)]){_0x1a1e14=_0x158750;if(_0x52222b)_0x52222b[_0x482424(0xbf4)][_0x482424(0x747)+'ay']='';if(_0x5a8f4e){_0x5a8f4e['textC'+'onten'+'t']=_0xf0dfbd[_0x482424(0x967)]('v',_0x158750[_0x482424(0x7cc)+'on']||'?');var _0x2f7d6e=_0x4b2487,_0x1b5a32=_0x158750[_0x482424(0x7cc)+'on']||'';_0x5a8f4e[_0x482424(0xbf4)]['color']=_0x1b5a32===_0x2f7d6e?_0xe38ae3:_0x482424(0x720)+'74',_0x5a8f4e[_0x482424(0xbf4)]['borde'+_0x482424(0x6ec)+'r']=_0x1b5a32===_0x2f7d6e?_0xf0dfbd[_0x482424(0xb94)]:_0xf0dfbd[_0x482424(0xd56)];}var _0x5d7dc5=_0x158750[_0x482424(0xd7e)+_0x482424(0x19c)]&&_0x158750[_0x482424(0xd7e)+_0x482424(0x19c)]['FPSco'+'ntrol'+'ler'],_0x35f6e9=Math['round']((_0x158750['elaps'+'edMs']||0x40f+-0x1*-0xc11+-0x6*0x2b0)/(-0x1e27+-0x1bcd*0x1+0x3ddc));if(_0x4b3bab){var _0x35e10a,_0x4535dd;if(_0x5d7dc5&&_0x158750[_0x482424(0xd3c)+'y']&&_0x158750['surve'+'y'][_0x482424(0x76b)+'ntrol'+_0x482424(0x36a)])_0x35e10a=_0x482424(0x6c3)+'·\x20'+Object['keys'](_0x158750['insta'+'nces'])['lengt'+'h']+_0xf0dfbd[_0x482424(0x64e)]+_0x35f6e9+'s',_0x4535dd=_0xf0dfbd[_0x482424(0x3cd)];else{if(_0xf0dfbd['kGxmQ'](_0x158750['hooks'+'Appli'+'ed'],0xd*-0x255+0x1893+0x5be))_0x35e10a=_0xf0dfbd[_0x482424(0x712)](_0xf0dfbd['kIrRq'](_0xf0dfbd['pkOJz'],_0x35f6e9),'s'),_0x4535dd=_0x482424(0x29d)+'8a';else _0x158750['scrip'+_0x482424(0x6b2)]?(_0x35e10a=_0x482424(0xb10)+'ata\x20r'+'eady\x20'+'·\x20'+_0x35f6e9+'s',_0x4535dd=_0xf0dfbd['ZMOzp']):_0x482424(0x64c)===_0xf0dfbd['ZYlMJ']?(_0x35e10a=(_0x158750['arm']&&_0x158750[_0x482424(0xc0a)]['ok']?_0x482424(0xa29)+_0x482424(0xa86):_0xf0dfbd['RumVk'])+_0x35f6e9+'s',_0x4535dd=_0x482424(0x29d)+'8a'):(_0x20560c[_0x482424(0xbf4)]['left']='auto',_0x31755a[_0x482424(0xbf4)][_0x482424(0x979)]=_0x482424(0x195),_0x1233c9['style'][_0x482424(0x963)]=_0x482424(0xaef),_0x1f4b60['style'][_0x482424(0xb72)+'m']=_0xf0dfbd[_0x482424(0x452)]);}_0x4b3bab['textC'+_0x482424(0x7d1)+'t']=_0x35e10a,_0x4b3bab[_0x482424(0xbf4)]['color']=_0x4535dd;}_0x26dc63&&(_0x26dc63['textC'+_0x482424(0x7d1)+'t']=_0x158750['diff']&&_0x158750[_0x482424(0x7dc)]['lengt'+'h']?'Diff\x20'+_0x482424(0x40d)+_0x482424(0x8eb)+_0x482424(0x70b)+_0x158750[_0x482424(0x7dc)]['join'](',\x20'):_0xf0dfbd[_0x482424(0x1fd)]);if(_0x158750[_0x482424(0x183)]&&_0x4056b7){_0x44dfd3=!!_0x158750[_0x482424(0x183)]['on'],_0x4056b7[_0x482424(0xe00)+'onten'+'t']=_0x44dfd3?_0xf0dfbd[_0x482424(0x746)]:_0x482424(0x9fb)+'\x20off',_0x4056b7[_0x482424(0xbf4)][_0x482424(0xc44)+_0x482424(0x494)]=_0x44dfd3?_0xe38ae3:_0x482424(0x294)+_0x482424(0x3dc)+'t',_0x4056b7[_0x482424(0xbf4)]['color']=_0x44dfd3?_0xf0dfbd['tqtOn']:_0x482424(0xad5)+'f5';if(_0x577c58&&_0x158750[_0x482424(0x183)]['facto'+'r']){if('RMCXj'==='RMCXj')_0x577c58[_0x482424(0xe00)+_0x482424(0x7d1)+'t']=_0xf0dfbd[_0x482424(0x7ed)](Number(_0x158750['speed'][_0x482424(0x3f2)+'r'])[_0x482424(0x5b7)+'ed'](-0x23d6*0x1+0x5cb+0xf06*0x2),'x');else return _0x5ea7ee[_0x482424(0x494)](_0x25e30c*(0x22*0x119+0x1c84+-0x4172))/(-0x1615*0x1+-0x195f+-0x17ec*-0x2);}}if(_0x451092)try{_0x451092[_0x482424(0xe00)+'onten'+'t']=_0xf0dfbd[_0x482424(0x3e6)](_0x1cefc9,_0x158750);}catch(_0x2b381c){_0x451092['textC'+_0x482424(0x7d1)+'t']=JSON['strin'+_0x482424(0x501)](_0x158750,null,0x1*-0x14f+0x2121+-0xf*0x21f);}console['log'](_0xf0dfbd[_0x482424(0xda7)],_0xf0dfbd[_0x482424(0x545)]('color'+':'+_0xe38ae3,';font'+'-weig'+_0x482424(0xb47)+'0'),_0x158750),console[_0x482424(0x482)](_0xf0dfbd[_0x482424(0x967)](_0xf0dfbd[_0x482424(0x8f0)](_0xf0dfbd[_0x482424(0x3e3)](_0x3912f5,'\x0a')+JSON[_0x482424(0x6fb)+_0x482424(0x501)](_0x158750,null,-0x881+-0x7b5+0x1037),'\x0a'),_0x32b98b));}else return null;}};return _0x745af8[_0x47c929(0x339)+'et']['api']='1',_0x745af8['api']=_0x12a31d,_0x12a31d;}function _0x1cefc9(_0x359e56){var _0x18d3aa=_0x419cc1;if(_0x25545f['igDJR'](_0x18d3aa(0x4ad),_0x18d3aa(0x4ad))){var _0x24244a=[];_0x24244a['push'](_0x25545f[_0x18d3aa(0x173)](_0x25545f['MfoBe'](_0x25545f[_0x18d3aa(0x444)](_0x18d3aa(0x179)+_0x18d3aa(0x4e4)+(_0x359e56[_0x18d3aa(0x394)]||'?'),_0x18d3aa(0xcb5)),Math[_0x18d3aa(0x494)]((_0x359e56[_0x18d3aa(0x602)+'edMs']||-0x1*0xbb6+-0x1c0b+0x27c1)/(0x442+-0x1ad3+0x1a79))),'s)')),_0x24244a[_0x18d3aa(0x90b)](_0x25545f[_0x18d3aa(0x6b0)]+(_0x359e56[_0x18d3aa(0x90f)]?_0x25545f[_0x18d3aa(0x993)]:'no')+(_0x18d3aa(0x554)+_0x18d3aa(0xc2f)+'\x20')+(_0x359e56[_0x18d3aa(0x235)+'pCont'+_0x18d3aa(0x267)]?_0x25545f[_0x18d3aa(0x993)]:'no')+('\x20\x20\x20ty'+_0x18d3aa(0x325))+(_0x359e56[_0x18d3aa(0x4b7)+_0x18d3aa(0x4dc)]!=null?_0x359e56['typeC'+_0x18d3aa(0x4dc)]:'?')),_0x24244a[_0x18d3aa(0x90b)](_0x25545f['YNPcy'](_0x25545f['GTayY']+_0x359e56[_0x18d3aa(0x414)+'Appli'+'ed'],'/')+_0x359e56[_0x18d3aa(0x414)+_0x18d3aa(0x576)]+(_0x18d3aa(0x479)+_0x18d3aa(0xd86))),_0x24244a[_0x18d3aa(0x90b)]('');var _0x3a3dd7=_0x359e56[_0x18d3aa(0xd7e)+'nces']||{},_0x3e6d95=Object[_0x18d3aa(0xbac)](_0x3a3dd7);if(!_0x3e6d95['lengt'+'h']){if(_0x18d3aa(0x424)===_0x18d3aa(0xa53))try{_0x5f3b5(_0x60ac33);}catch(_0x36937f){}else _0x24244a['push'](_0x18d3aa(0xc35)+'ve\x20ob'+_0x18d3aa(0xbd7)+'\x20capt'+'ured\x20'+'yet.'),_0x24244a[_0x18d3aa(0x90b)](''),_0x24244a[_0x18d3aa(0x90b)]('The\x20h'+_0x18d3aa(0x62d)+_0x18d3aa(0xab1)+_0x18d3aa(0xce5)+'e\x20gam'+_0x18d3aa(0x660)+'wn\x20Up'+'date('+_0x18d3aa(0x33b)+'thing'+'\x20capt'+_0x18d3aa(0x24b)+_0x18d3aa(0xda4)),_0x24244a[_0x18d3aa(0x90b)](_0x25545f[_0x18d3aa(0x27f)]);}for(var _0x95b0bc=0x2b*-0x4+-0x19*-0x16a+-0x22ae;_0x25545f[_0x18d3aa(0x387)](_0x95b0bc,_0x3e6d95[_0x18d3aa(0xa1b)+'h']);_0x95b0bc++){var _0x4d939e=_0x3e6d95[_0x95b0bc];_0x24244a[_0x18d3aa(0x90b)](_0x4d939e+_0x18d3aa(0x7f2)+_0x3a3dd7[_0x4d939e]);}_0x24244a[_0x18d3aa(0x90b)]('');var _0x168d66=_0x359e56['surve'+'y']||{},_0x1ef1b2=Object['keys'](_0x168d66);for(var _0x5e3d06=0x2ad*-0x9+-0xa48+0x13*0x1cf;_0x5e3d06<_0x1ef1b2[_0x18d3aa(0xa1b)+'h'];_0x5e3d06++){var _0x382914=_0x1ef1b2[_0x5e3d06],_0x2a8247=_0x168d66[_0x382914];if(!_0x2a8247||!_0x2a8247[_0x18d3aa(0xa1b)+'h'])continue;_0x24244a[_0x18d3aa(0x90b)](_0x25545f[_0x18d3aa(0x4a7)]+_0x382914+'\x20'+new Array(Math[_0x18d3aa(0x932)](0xc3e*0x1+-0xd6b+0x12e,_0x25545f['YBvSX'](0xeb5+-0x17cc+0x939*0x1,_0x382914['lengt'+'h'])))['join']('─')),_0x24244a[_0x18d3aa(0x90b)](_0x25545f['IOsiY']);for(var _0x2fe978=-0xe9a+-0x2*-0x6c7+0x10c;_0x25545f[_0x18d3aa(0xd1b)](_0x2fe978,_0x2a8247['lengt'+'h']);_0x2fe978++){var _0x53a942=_0x2a8247[_0x2fe978],_0x165a23=_0x25545f['igDJR'](typeof _0x53a942['v'],'numbe'+'r')?_0x25545f['AlRfP'](Math[_0x18d3aa(0x494)](_0x53a942['v']*(0xb8+0x2263+-0x7*0x475)),-0x176*0xc+-0x30d*0xb+0xd*0x43b):_0x53a942['v'];_0x24244a['push']('\x20\x20'+_0x25545f[_0x18d3aa(0x7a8)]('0x',_0x53a942['o']['toStr'+'ing'](-0x59*-0x35+-0x1e2e+0xbd1))['padEn'+'d'](-0xd*0x221+-0x1*0xc92+0x3*0xd6d)+'\x20'+_0x53a942['k']['padEn'+'d'](0x11*0x92+-0x4d*0x28+0x261)+'\x20'+String(_0x165a23)['padEn'+'d'](0x1f65+0x21bc*-0x1+0x267)+'\x20'+(_0x53a942[_0x18d3aa(0x4f7)]||''));}_0x24244a[_0x18d3aa(0x90b)]('');}if(_0x359e56['warni'+'ngs']&&_0x359e56[_0x18d3aa(0xc1b)+_0x18d3aa(0xb8d)][_0x18d3aa(0xa1b)+'h']){_0x24244a[_0x18d3aa(0x90b)](_0x18d3aa(0xc1b)+'ngs');for(var _0x1d42e7=0x8*0x494+0x19e5+-0x3e85;_0x1d42e7<_0x359e56['warni'+_0x18d3aa(0xb8d)]['lengt'+'h'];_0x1d42e7++)_0x24244a[_0x18d3aa(0x90b)](_0x25545f[_0x18d3aa(0xd35)]('\x20\x20!\x20',_0x359e56['warni'+'ngs'][_0x1d42e7]));}return _0x24244a['join']('\x0a');}else _0x1d330b();}window['addEv'+_0x419cc1(0xb8e)+'stene'+'r'](_0x25545f[_0x419cc1(0x346)],function(_0x52f6fa){var _0x24a34d=_0x419cc1,_0x190f1c=_0x52f6fa[_0x24a34d(0x9db)];if(!_0x190f1c||_0x190f1c[_0x24a34d(0x375)+_0x24a34d(0xc58)]!==_0x2b5f92)return;try{if(_0x25545f[_0x24a34d(0xc76)](_0x190f1c[_0x24a34d(0xc16)],_0x24a34d(0xa9f))){_0x46a99c()['set']({'host':_0x190f1c[_0x24a34d(0x394)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x190f1c[_0x24a34d(0xc16)]===_0x25545f[_0x24a34d(0x6c9)])_0x46a99c()[_0x24a34d(0xd4d)](_0x190f1c['repor'+'t']);}catch(_0x3bbeb4){if(_0x25545f['igDJR'](_0x25545f[_0x24a34d(0xd7d)],_0x24a34d(0x17f))){_0xaf5a57[_0x24a34d(0x7bf)+_0x24a34d(0xbe0)+_0x24a34d(0x5c0)](),_0x50ce6b(_0xc33976['on'],_0x3c7480['facto'+'r']+(0x143e+-0x1e45+0xa07*0x1+0.5));return;}else console[_0x24a34d(0x642)](_0x25545f[_0x24a34d(0xb6e)],_0x25545f['uZTOc']+_0xe38ae3,_0x3bbeb4);}});function _0x5c1e09(){_0x4272ce(!![]);}if(document[_0x419cc1(0x816)])_0x5c1e09();else document[_0x419cc1(0x204)+'entLi'+'stene'+'r'](_0x419cc1(0x71b)+_0x419cc1(0xa24)+_0x419cc1(0x989)+'d',_0x5c1e09,{'once':!![]});return;}window['__SAK'+'URA_S'+_0x419cc1(0x37f)]=window['__SAK'+'URA_S'+'W__']||{'at':Date[_0x419cc1(0xc8f)]()};function _0x2b52f3(_0xe0b8d,_0x49516c){var _0x86c777=_0x419cc1,_0x4bf712={'__sakura':_0x2b5f92,'kind':_0xe0b8d};if(_0x49516c){for(var _0x42dd65 in _0x49516c)_0x4bf712[_0x42dd65]=_0x49516c[_0x42dd65];}try{if(window['paren'+'t']&&window[_0x86c777(0x3dc)+'t']!==window)window['paren'+'t']['postM'+'essag'+'e'](_0x4bf712,'*');}catch(_0x2f0f4a){}try{if(window[_0x86c777(0x979)]&&_0x25545f['CgShL'](window['top'],window))window['top'][_0x86c777(0x75c)+'essag'+'e'](_0x4bf712,'*');}catch(_0x58b036){}}console['log'](_0x25545f[_0x419cc1(0x7e5)](_0x25545f['gMUuo'],_0x4b2487),_0x25545f[_0x419cc1(0x6c1)](_0x419cc1(0x8d2)+':'+_0xe38ae3,';font'+_0x419cc1(0xdda)+_0x419cc1(0xb47)+_0x419cc1(0x279)+_0x419cc1(0x5ec)+_0x419cc1(0x99f)+'x'),{'host':_0x5d9c77,'href':location[_0x419cc1(0x930)],'version':_0x4b2487}),_0x25545f[_0x419cc1(0x206)](_0x2b52f3,_0x419cc1(0xa9f),{'host':_0x5d9c77,'role':_0x4028d4});var _0x5ec9af=window['__SAK'+_0x419cc1(0xcda)+'W__']&&window[_0x419cc1(0xcb9)+_0x419cc1(0xcda)+_0x419cc1(0x37f)]['at']||Date[_0x419cc1(0xc8f)]();window[_0x419cc1(0x204)+'entLi'+_0x419cc1(0x417)+'r'](_0x25545f['Fcjyi'],function(_0x116d81){var _0x171d21=_0x419cc1;try{var _0x236008=_0x116d81&&_0x116d81[_0x171d21(0x9db)];if(!_0x236008||_0x236008['__sak'+'ura']!==_0x2b5f92||_0x236008[_0x171d21(0xc16)]!==_0x171d21(0xb34))return;_0x25545f['UbRka'](_0x40af97,_0x236008[_0x171d21(0xb34)],_0x236008[_0x171d21(0x67e)]);}catch(_0x1f03aa){}});try{var _0x15f94b=new BroadcastChannel(_0x25545f[_0x419cc1(0x8ea)]);_0x15f94b['onmes'+_0x419cc1(0x614)]=function(_0x254dff){var _0x10f7cc=_0x419cc1,_0x3e4f9c=_0x254dff['data'];if(_0x3e4f9c&&_0x25545f[_0x10f7cc(0xc76)](_0x3e4f9c[_0x10f7cc(0x375)+'ura'],_0x2b5f92)&&_0x3e4f9c['kind']===_0x10f7cc(0xb34))_0x25545f['SKlGI'](_0x40af97,_0x3e4f9c['cmd'],_0x3e4f9c[_0x10f7cc(0x67e)]);};}catch(_0x49b238){}var _0xd305da=[];(function _0x36658b(){var _0x41ce08=_0x419cc1,_0x36bb0a={'ZGKGS':function(_0x25060d,_0x366882){return _0x25060d!==_0x366882;}},_0x4b6609=[_0x25545f[_0x41ce08(0x250)],_0x25545f[_0x41ce08(0x2c0)],'error',_0x25545f[_0x41ce08(0xd9d)],'debug'];for(var _0x5e86e2=-0x25*-0xb+0x80b*0x4+-0x21c3;_0x5e86e2<_0x4b6609[_0x41ce08(0xa1b)+'h'];_0x5e86e2++){_0x25545f[_0x41ce08(0xc0b)]('YxbuY',_0x25545f[_0x41ce08(0x877)])?function(_0x1a0552){var _0x20f891=_0x41ce08,_0x37867c={'IZUFo':_0x20f891(0x6fb)+'g','liagO':function(_0x13cdaa,_0x50fc92){return _0x13cdaa===_0x50fc92;},'lXNkW':function(_0x481a79,_0x471ebb){return _0x481a79<_0x471ebb;}},_0x407121=console[_0x1a0552];if(_0x36bb0a[_0x20f891(0x1d8)](typeof _0x407121,_0x20f891(0x723)+'ion'))return;console[_0x1a0552]=function(){var _0x5c037b=_0x20f891;try{var _0xbc640f='';for(var _0x4f25f5=-0xc7*-0x5+0x1*-0x64b+0x268*0x1;_0x4f25f5<arguments[_0x5c037b(0xa1b)+'h'];_0x4f25f5++){var _0x478ab2=arguments[_0x4f25f5];if(typeof _0x478ab2===_0x37867c[_0x5c037b(0xac1)])_0xbc640f+=_0x478ab2;else{if(_0x478ab2&&_0x478ab2['messa'+'ge'])_0xbc640f+=_0x478ab2[_0x5c037b(0x650)+'ge'];}}if(_0xbc640f['index'+'Of'](_0x3912f5)!==-(-0x89e+-0x5a7+0x3f*0x3a))return _0x407121['apply'](console,arguments);if(_0xbc640f[_0x5c037b(0x6b7)+'Of'](_0x5c037b(0x571)+_0x5c037b(0x3c8)+_0x5c037b(0xba2))!==-(0x1*-0x17e1+0x1*-0x26ae+0x34*0x134)){var _0x381695=_0xbc640f[_0x5c037b(0x634)](-0x783+-0x1eb3+0x1*0x2636,0x1*-0x1542+-0xb23+0x295*0xd);if(_0x37867c['liagO'](_0xd305da[_0x5c037b(0x6b7)+'Of'](_0x381695),-(0x191*0xb+-0x3*-0xbf+-0x1377))&&_0x37867c[_0x5c037b(0xc94)](_0xd305da[_0x5c037b(0xa1b)+'h'],-0x1*-0x2b6+-0x411+0x197))_0xd305da['push'](_0x381695);}}catch(_0x5507d6){}return _0x407121['apply'](console,arguments);};}(_0x4b6609[_0x5e86e2]):_0x18af8d();}}());var _0x4f85dc={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0xe105ec=null,_0x2b173d=null,_0x7010d5=-(0x22f9+0x1c83*-0x1+-0x675),_0x4c203c=null;function _0x5c31a0(_0x5debd7){var _0x526ba0=_0x419cc1;try{if(!_0x5debd7)return;var _0x5830cf=_0x5debd7[_0x526ba0(0xd7e)+_0x526ba0(0x1ec)]?_0x5debd7['insta'+_0x526ba0(0x1ec)][_0x526ba0(0x8a3)+'ts']:_0x5debd7[_0x526ba0(0x8a3)+'ts']||null;if(!_0x5830cf)return;if(!_0x4c203c)try{_0x4c203c=Object['keys'](_0x5830cf)['slice'](0x19bf+-0x1*-0x22c0+0x1*-0x3c7f,0x1448+0x154c+0x4*-0xa5f);}catch(_0x5487a5){}var _0x3565e3=_0x5830cf['memor'+'y'];if(_0x3565e3&&_0x3565e3['buffe'+'r']&&_0x25545f['HbYcp'](_0x3565e3[_0x526ba0(0xa39)+'r'][_0x526ba0(0x603)+'ength'],-0x1*0x12b9+0x986+0x933)){if(_0x526ba0(0x462)!=='ENkJp')_0x2b173d=_0x3565e3,_0x7010d5=_0x25545f[_0x526ba0(0x663)](Date[_0x526ba0(0xc8f)](),_0x5ec9af);else{var _0x5b7d88=_0x1af744[0x1*-0x1ecb+-0x21da+0x40a5]-_0x2f77fd['feet'][-0xd26+-0x157f*-0x1+-0x859*0x1],_0x2d87d0=_0x3419f6[0xdb6+0x1*0x169+-0xf1d]-_0x245211[_0x526ba0(0x913)][-0x1aee+-0x174d*-0x1+-0x1*-0x3a3];_0x1bbfdd['d']=_0x932ec9[_0x526ba0(0xc3e)](_0x25545f[_0x526ba0(0x42c)](_0x5b7d88*_0x5b7d88,_0x2d87d0*_0x2d87d0)),_0x26caf0['beari'+'ng']=_0x25545f[_0x526ba0(0x25f)](_0x25545f[_0x526ba0(0x34a)](_0x4b9a8a[_0x526ba0(0x9fa)](_0x5b7d88,_0x2d87d0),0x25fb+-0x4*-0x805+-0x455b),_0x32f838['PI']);}}}catch(_0x31bece){}}function _0x36853e(){var _0x2b84dd=_0x419cc1,_0x161972={'oiMVz':_0x2b84dd(0x723)+_0x2b84dd(0xc6b)};try{if(_0x25545f['DYcUS'](typeof WebAssembly,_0x2b84dd(0x587)+_0x2b84dd(0x1c3)))return;var _0xf50865=[_0x25545f['xWXGO'],_0x25545f['OHSQY']];for(var _0x2e58ca=0x139d+-0x2131*0x1+0xb*0x13c;_0x2e58ca<_0xf50865[_0x2b84dd(0xa1b)+'h'];_0x2e58ca++){(function(_0x962736){var _0x46af05=_0x2b84dd,_0x22183c={'sTTBr':function(_0x2423eb,_0x34e170){return _0x2423eb===_0x34e170;},'xNoxW':_0x161972[_0x46af05(0x40e)]},_0x3747bb=WebAssembly[_0x962736];if(typeof _0x3747bb!==_0x46af05(0x723)+'ion'||_0x3747bb['__sak'+'uraMe'+_0x46af05(0x301)+'ap'])return;var _0xb47e66=function(){var _0x4636cf=_0x46af05,_0x3a96a0=_0x3747bb['apply'](this,arguments);try{if(_0x3a96a0&&_0x22183c['sTTBr'](typeof _0x3a96a0[_0x4636cf(0x57a)],_0x22183c[_0x4636cf(0x622)]))_0x3a96a0[_0x4636cf(0x57a)](_0x5c31a0,function(){});else _0x5c31a0(_0x3a96a0);}catch(_0x44ac88){}return _0x3a96a0;};_0xb47e66['__sak'+'uraMe'+_0x46af05(0x301)+'ap']=!![];try{Object[_0x46af05(0xbc2)+_0x46af05(0xb68)+_0x46af05(0x37e)](_0xb47e66,_0x46af05(0xc72),{'value':_0x3747bb[_0x46af05(0xc72)],'configurable':!![]});}catch(_0x5854a9){}WebAssembly[_0x962736]=_0xb47e66;}(_0xf50865[_0x2e58ca]));}}catch(_0x58c6b9){}}var _0x265b56=null,_0x235ba0=null,_0x2e79eb={},_0x5bb211={'MouseLook':[{'name':_0x419cc1(0x2a4)+'\u0086\u008f\u0089\u0095\u0090'+'\u0094','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x419cc1(0x14b)+_0x419cc1(0x256)+'\u008e','ret':_0x419cc1(0x6d4),'params':[_0x25545f['vmfui']],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],_0x25545f[_0x419cc1(0x9b0)]]},{'name':_0x419cc1(0x7f9)+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','ret':_0x25545f[_0x419cc1(0x398)],'params':[_0x25545f[_0x419cc1(0xda6)]],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],'f32']},{'name':_0x25545f[_0x419cc1(0x3a6)],'ret':_0x419cc1(0x6d4),'params':[_0x419cc1(0xa9c)],'wasmParams':[_0x25545f['erkzh'],'f32']},{'name':_0x419cc1(0x8e9)+'\u0093\u0090\u0088\u0092\u0090'+'\u0091','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'\u008d\u0091\u0092\u0093\u0088'+'\u008c\u0092\u0092\u0093\u008a'+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x96c)+_0x419cc1(0x59b)+'\u008f','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'LateU'+_0x419cc1(0xbfa),'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x25545f['AMNjl'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'\u008c\u0091\u0088\u0095\u008c'+'\u0095\u008a\u0092\u0091\u008b'+'\u0095','ret':_0x419cc1(0xa9c),'params':[],'wasmParams':['i32'],'wasmRet':_0x25545f[_0x419cc1(0x9b0)]},{'name':_0x419cc1(0xb81)+_0x419cc1(0x26c)+'\u0090','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x5fe)+'\u0091\u0087\u008e\u008a\u008d'+'\u0088','ret':_0x419cc1(0x6d4),'params':['float'],'wasmParams':[_0x419cc1(0xbd8),'f32']},{'name':_0x419cc1(0xaed)+'\u0092\u008b\u0093\u008b\u0092'+'\u008d','ret':_0x25545f[_0x419cc1(0xda6)],'params':[],'wasmParams':[_0x25545f['erkzh']],'wasmRet':_0x25545f[_0x419cc1(0x9b0)]},{'name':_0x419cc1(0xc48)+_0x419cc1(0x540)+'\u0092','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0x6a4)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['RqDAJ'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0xc95)+_0x419cc1(0x450)+'\u0093','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['RCuEg'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[_0x25545f[_0x419cc1(0xda6)],_0x419cc1(0xa9c)],'wasmParams':['i32',_0x25545f['wENei'],_0x25545f['wENei']]},{'name':_0x419cc1(0x211)+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','ret':_0x419cc1(0xa9c),'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]],'wasmRet':_0x419cc1(0xb98)},{'name':_0x419cc1(0x767)+_0x419cc1(0x33c)+'\u0088','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':['i32']},{'name':_0x25545f['vVcxC'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x867)+_0x419cc1(0x265)+'\u008e','ret':'void','params':[_0x419cc1(0xa9c)],'wasmParams':['i32',_0x25545f['wENei']]},{'name':_0x25545f['UTLRF'],'ret':_0x419cc1(0xa9c),'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x419cc1(0xb98)},{'name':_0x419cc1(0x6e5)+_0x419cc1(0x19f)+'\u008a','ret':_0x25545f['Hnwdf'],'params':[_0x25545f[_0x419cc1(0xda6)],'float'],'wasmParams':[_0x419cc1(0xbd8),_0x25545f[_0x419cc1(0x9b0)],_0x25545f[_0x419cc1(0x9b0)]]},{'name':_0x25545f[_0x419cc1(0x41d)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x790)+_0x419cc1(0x8bc)+'\u008a','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['hgFmk'],'ret':'void','params':['float'],'wasmParams':[_0x25545f['erkzh'],'f32']},{'name':_0x25545f['YnLwE'],'ret':_0x25545f['vmfui'],'params':[],'wasmParams':[_0x25545f['erkzh']],'wasmRet':_0x419cc1(0xb98)},{'name':'\u008e\u0093\u008f\u008d\u0088'+_0x419cc1(0xb59)+'\u008a','ret':_0x419cc1(0xa9c),'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x419cc1(0xb98)},{'name':'\u008f\u0091\u0092\u0094\u008a'+_0x419cc1(0x1e8)+'\u0088','ret':_0x419cc1(0x6d4),'params':[_0x419cc1(0xa9c)],'wasmParams':['i32','f32']},{'name':'\u0087\u008f\u008d\u008b\u0092'+'\u0089\u0090\u0087\u0086\u0087'+'\u008c','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['novMl'],'ret':_0x25545f[_0x419cc1(0x398)],'params':['float'],'wasmParams':['i32','f32']},{'name':_0x25545f[_0x419cc1(0xb79)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0x442)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0x2f4)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[_0x25545f['vmfui']],'wasmParams':['i32',_0x25545f[_0x419cc1(0x9b0)]]}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+_0x419cc1(0x594)+'\u008e','ret':'float','params':[],'wasmParams':['i32'],'wasmRet':_0x419cc1(0xb98)},{'name':'\u0090\u0093\u0091\u0091\u008b'+_0x419cc1(0x2f9)+'\u0092','ret':'void','params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f['pPgNV'],'ret':_0x419cc1(0x7c8),'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x419cc1(0xbd8)},{'name':_0x419cc1(0x7a0)+_0x419cc1(0x278)+'\u008b','ret':_0x419cc1(0x6d4),'params':[_0x419cc1(0x7c8)],'wasmParams':[_0x419cc1(0xbd8),_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0xa6a)+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x667)+_0x419cc1(0xc5b)+'\u008a','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0x790)+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':'\u0088\u0093\u0088\u0095\u008b'+_0x419cc1(0x881)+'\u0087','ret':_0x419cc1(0x7c8),'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x25545f[_0x419cc1(0xb37)]},{'name':'\u0094\u008d\u0087\u0087\u008a'+_0x419cc1(0x3cb)+'\u0087','ret':'void','params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f[_0x419cc1(0xb05)],'ret':_0x25545f[_0x419cc1(0x322)],'params':[],'wasmParams':['i32'],'wasmRet':_0x25545f[_0x419cc1(0xb37)]},{'name':_0x419cc1(0xbf8)+_0x419cc1(0x8ae)+'\u008a','ret':_0x25545f[_0x419cc1(0x322)],'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x419cc1(0xbd8)},{'name':_0x25545f[_0x419cc1(0xdd2)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x25545f['DAZfo'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':'\u0086\u0095\u008b\u0086\u0091'+_0x419cc1(0x6a6)+'\u008b','ret':_0x25545f[_0x419cc1(0x322)],'params':['bool',_0x25545f['AuoxH']],'wasmParams':[_0x419cc1(0xbd8),_0x25545f[_0x419cc1(0xb37)],_0x419cc1(0xbd8)],'wasmRet':_0x25545f[_0x419cc1(0xb37)]},{'name':_0x419cc1(0x686)+_0x419cc1(0x49a)+'\u0090','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0xa61)+'\u0086\u0090\u0086\u0091\u008a'+'\u0092','ret':_0x25545f['AuoxH'],'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x419cc1(0xbd8)},{'name':_0x25545f[_0x419cc1(0x918)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[_0x419cc1(0x7c8)],'wasmParams':['i32',_0x25545f['erkzh']]},{'name':'\u0095\u008e\u0095\u0087\u0086'+_0x419cc1(0x736)+'\u008e','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0x43f)],'ret':_0x25545f[_0x419cc1(0x322)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]],'wasmRet':_0x25545f[_0x419cc1(0xb37)]},{'name':'\u0087\u008d\u0095\u008d\u0087'+_0x419cc1(0x466)+'\u008f','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f['LprYZ'],'ret':'void','params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':'\u008a\u008c\u0092\u0092\u0094'+_0x419cc1(0xa93)+'\u0089','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f['zpmbO'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0xcb8)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'\u008b\u0090\u0088\u008d\u0087'+'\u008b\u0091\u008d\u0086\u0093'+'\u0090','ret':_0x25545f['Hnwdf'],'params':[_0x419cc1(0x7c8)],'wasmParams':[_0x25545f['erkzh'],_0x25545f['erkzh']]},{'name':'\u008f\u0092\u008d\u008d\u0089'+_0x419cc1(0x2f5)+'\u0086','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f[_0x419cc1(0x57e)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['wRvlF'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0x93f)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f[_0x419cc1(0x2d2)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['zPnTN'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x3ec)+_0x419cc1(0xcb6)+'\u0091','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0x4c1)],'ret':_0x419cc1(0x6d4),'params':[_0x25545f['AuoxH']],'wasmParams':[_0x419cc1(0xbd8),_0x25545f['erkzh']]},{'name':_0x25545f['tCaXg'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['JgrYq'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x4c2)+_0x419cc1(0xc15)+'\u008a','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x419cc1(0x20b)+'\u008c\u0090\u0087\u008c\u0086'+'\u0087','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0x46b)+_0x419cc1(0xc65)+'\u0087','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['ipnJX'],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x6a3)+_0x419cc1(0xa25)+'\u0094','ret':_0x419cc1(0x6d4),'params':[_0x25545f['AuoxH']],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],'i32']},{'name':_0x25545f[_0x419cc1(0x15e)],'ret':_0x419cc1(0x7c8),'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':'\u008e\u008b\u0095\u0092\u008e'+_0x419cc1(0xa63)+'\u0086','ret':_0x419cc1(0x7c8),'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x419cc1(0xbd8)},{'name':_0x25545f[_0x419cc1(0x6af)],'ret':_0x25545f[_0x419cc1(0x322)],'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x25545f[_0x419cc1(0xb37)]},{'name':_0x419cc1(0x521)+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0x623)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0xbdd)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'\u0087\u0095\u008f\u008d\u008e'+'\u0089\u0087\u008f\u0092\u0095'+'\u0091','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':'\u0089\u0086\u0090\u0088\u008c'+_0x419cc1(0x884)+'\u008b','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['dbaok'],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0xcd7)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[_0x25545f[_0x419cc1(0xda6)]],'wasmParams':[_0x25545f['erkzh'],'f32']},{'name':'\u008c\u008d\u0095\u0089\u008a'+_0x419cc1(0xca3)+'\u0092','ret':_0x419cc1(0x7c8),'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x25545f['erkzh']},{'name':'\u0086\u0092\u0092\u008a\u008e'+_0x419cc1(0x85e)+'\u0087','ret':'void','params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0x895)],'ret':'void','params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0xa59)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0x7ff)],'ret':_0x25545f[_0x419cc1(0x322)],'params':[],'wasmParams':[_0x419cc1(0xbd8)],'wasmRet':_0x419cc1(0xbd8)},{'name':'\u0094\u008c\u008f\u008e\u008b'+_0x419cc1(0x3fa)+'\u0087','ret':_0x25545f[_0x419cc1(0x322)],'params':[_0x25545f['AuoxH'],'bool'],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],_0x25545f['erkzh'],_0x25545f['erkzh']],'wasmRet':'i32'},{'name':_0x25545f[_0x419cc1(0x6b9)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':'\u0094\u008e\u0091\u008d\u0095'+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','ret':'void','params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f[_0x419cc1(0x8c8)],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['KaidI'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f['TXRsp'],'ret':'void','params':[_0x25545f[_0x419cc1(0xda6)]],'wasmParams':['i32',_0x25545f['wENei']]},{'name':'\u0086\u0087\u0087\u008e\u0094'+_0x419cc1(0x449)+'\u008b','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f['nmrLl'],'ret':_0x25545f[_0x419cc1(0x322)],'params':['bool','bool'],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],_0x25545f['erkzh'],_0x25545f['erkzh']],'wasmRet':_0x419cc1(0xbd8)},{'name':_0x419cc1(0x690)+_0x419cc1(0x29f)+'\u0095','ret':_0x419cc1(0x6d4),'params':[_0x419cc1(0xa9c),_0x25545f[_0x419cc1(0x322)]],'wasmParams':[_0x419cc1(0xbd8),_0x25545f[_0x419cc1(0x9b0)],_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x783)+'\u0093\u0088\u0093\u0088\u0095'+'\u008f','ret':'void','params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f[_0x419cc1(0xa03)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0x6d8)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']}],'TDM_GameManager':[{'name':_0x25545f[_0x419cc1(0xd0c)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'\u008f\u0086\u0090\u0094\u0089'+'\u0095\u0088\u0093\u0087\u0089'+'\u008a','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x34f)+_0x419cc1(0x670)+'\u0089','ret':_0x25545f['AuoxH'],'params':[_0x25545f[_0x419cc1(0x772)]],'wasmParams':[_0x419cc1(0xbd8),_0x25545f['erkzh']],'wasmRet':_0x25545f[_0x419cc1(0xb37)]},{'name':'\u0087\u0091\u0091\u0090\u0091'+'\u0094\u008b\u0086\u008a\u008e'+'\u0086','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':'\u0087\u0094\u0093\u008f\u008d'+_0x419cc1(0x54f)+'\u008c','ret':_0x419cc1(0x6d4),'params':['bool'],'wasmParams':['i32','i32']},{'name':_0x419cc1(0x7e4)+_0x419cc1(0x3fe)+'\u0094','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x468)+'\u0093\u0092\u0093\u0092\u0089'+'\u008c','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':_0x25545f['gexwx'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0x7ba),'ret':'void','params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f['Rigos'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0x55c)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x419cc1(0x50b)+_0x419cc1(0x55e)+'\u0094','ret':'void','params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0x5e7)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x6cc)+_0x419cc1(0x5be)+'\u0088','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x419cc1(0xa28)+_0x419cc1(0xce3),'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0x504)],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x19b)+'\u008c\u008e\u0095\u0088\u008e'+'\u0091','ret':'void','params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x403)+_0x419cc1(0xbee)+'\u008a','ret':'void','params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'comme'+'rcial'+_0x419cc1(0xc09)+_0x419cc1(0x31d)+_0x419cc1(0x596),'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0x573)+_0x419cc1(0xde4)+'\u0093','ret':_0x25545f['Hnwdf'],'params':[_0x25545f[_0x419cc1(0x322)]],'wasmParams':[_0x25545f['erkzh'],'i32']},{'name':'\u0093\u0093\u008d\u008e\u008b'+_0x419cc1(0x8ad)+'\u0086','ret':_0x419cc1(0x6d4),'params':['int',_0x419cc1(0x86b),_0x419cc1(0x86b)],'wasmParams':[_0x419cc1(0xbd8),_0x25545f['erkzh'],_0x419cc1(0xbd8),_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x1bb)+'\u0094\u0089\u0093\u0088\u0093'+'\u0089','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f['erkzh']]},{'name':_0x25545f['whoJG'],'ret':_0x25545f['Hnwdf'],'params':[_0x25545f['PRjdJ'],_0x419cc1(0x86b),_0x25545f[_0x419cc1(0x772)]],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],_0x25545f[_0x419cc1(0xb37)],_0x419cc1(0xbd8),'i32']},{'name':_0x419cc1(0x96b)+'\u0086\u008f\u0095\u0092\u0092'+'\u0092','ret':_0x419cc1(0x7c8),'params':[],'wasmParams':[_0x25545f['erkzh']],'wasmRet':_0x419cc1(0xbd8)},{'name':_0x419cc1(0x6fe)+'e','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0xb5c)+_0x419cc1(0x804)+'\u0087','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'\u0086\u0090\u0086\u008c\u0090'+_0x419cc1(0x465)+'\u008b','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x419cc1(0xcef)+_0x419cc1(0xb49)+'\u0092','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['KysZu'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x277)+_0x419cc1(0x326)+'\u008c','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0xd39)+_0x419cc1(0x4ff)+'\u008e','ret':_0x419cc1(0x6d4),'params':[_0x25545f[_0x419cc1(0x322)]],'wasmParams':[_0x419cc1(0xbd8),'i32']},{'name':'\u0086\u008f\u0095\u0086\u0087'+'\u008b\u0087\u008f\u008d\u008f'+'\u0094','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0x5d0)],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0xc45)+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x7e0)+'licat'+_0x419cc1(0x9ad)+_0x419cc1(0xd4e),'ret':_0x419cc1(0x6d4),'params':[_0x25545f['AuoxH']],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],_0x25545f['erkzh']]},{'name':_0x419cc1(0xd66)+'\u008b\u0088\u0093\u0088\u0091'+'\u0095','ret':_0x419cc1(0x7c8),'params':[],'wasmParams':['i32'],'wasmRet':_0x419cc1(0xbd8)},{'name':_0x25545f['FzeSl'],'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x7be)+_0x419cc1(0xbed)+'\u008a','ret':_0x419cc1(0x7c8),'params':[_0x419cc1(0x86b)],'wasmParams':['i32','i32'],'wasmRet':'i32'},{'name':_0x419cc1(0x3f5)+_0x419cc1(0x24f)+'\u008e','ret':'void','params':[_0x419cc1(0x7c8)],'wasmParams':[_0x419cc1(0xbd8),_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0x8df)],'ret':'void','params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0x1ac)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0x823)],'ret':'void','params':[_0x25545f[_0x419cc1(0x772)],'int',_0x25545f['PRjdJ']],'wasmParams':[_0x25545f[_0x419cc1(0xb37)],'i32',_0x25545f[_0x419cc1(0xb37)],_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0x507)+_0x419cc1(0x6ad)+'\u008e','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x239),'ret':_0x419cc1(0x6d4),'params':[],'wasmParams':['i32']},{'name':_0x25545f[_0x419cc1(0xc4e)],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':_0x25545f['ZwnnP'],'ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x419cc1(0x7c2)+'\u0090\u0087\u0086\u0088\u008e'+'\u0094','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f['brTqu'],'ret':_0x419cc1(0x6d4),'params':[_0x419cc1(0x7c8)],'wasmParams':[_0x419cc1(0xbd8),_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0x1fc)+_0x419cc1(0xa41)+'\u0095','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0xdff)+_0x419cc1(0x51f)+'\u0092','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':_0x25545f['tzZWO'],'ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':['i32']},{'name':'\u008a\u008e\u008d\u008a\u0091'+'\u008a\u008c\u0095\u0093\u008d'+'\u0092','ret':_0x25545f[_0x419cc1(0x398)],'params':['int','int'],'wasmParams':[_0x419cc1(0xbd8),'i32',_0x25545f['erkzh']]},{'name':_0x25545f[_0x419cc1(0x1f1)],'ret':'void','params':[],'wasmParams':[_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x25545f[_0x419cc1(0x3ea)],'ret':'void','params':[],'wasmParams':['i32']},{'name':_0x25545f['aBcvN'],'ret':'void','params':[_0x419cc1(0x7c8)],'wasmParams':[_0x419cc1(0xbd8),_0x25545f[_0x419cc1(0xb37)]]},{'name':_0x419cc1(0x94a)+'\u008d\u0089\u0090\u0093\u008a'+'\u008a','ret':_0x25545f['Hnwdf'],'params':[],'wasmParams':[_0x419cc1(0xbd8)]},{'name':'\u0086\u008e\u0087\u0089\u008a'+'\u008e\u008e\u0094\u008f\u0095'+'\u0095','ret':_0x25545f[_0x419cc1(0x398)],'params':[],'wasmParams':['i32']},{'name':_0x419cc1(0x821)+'\u008c\u008b\u008c\u0086\u008f'+'\u0089','ret':_0x419cc1(0x6d4),'params':[],'wasmParams':[_0x419cc1(0xbd8)]}]},_0x23ed4d=[],_0x437528=[],_0x4e4b2b={},_0x3f442c=-0x67*-0x5+0xcf*-0x13+0xd5a,_0x495306=![],_0x1c1df7=[],_0x285d1f=[{'type':_0x25545f[_0x419cc1(0xa23)],'keep':!![]},{'type':_0x25545f[_0x419cc1(0x53e)],'keep':!![]},{'type':_0x25545f['CPhYX'],'keep':![]},{'type':_0x25545f['CWqvV'],'keep':!![]},{'type':_0x419cc1(0xb5a)+_0x419cc1(0x8f7)+'ager','keep':!![]},{'type':_0x25545f['mNyEM'],'keep':!![],'many':!![]},{'type':_0x25545f['WwwUq'],'keep':!![],'many':!![]},{'type':_0x419cc1(0x741)+_0x419cc1(0xddf)+'ler','keep':!![],'many':!![]},{'type':_0x25545f['neUxT'],'keep':!![],'many':!![]}],_0x5b82b0=[_0x25545f[_0x419cc1(0x8ce)],'Assem'+_0x419cc1(0x7f6)+_0x419cc1(0x5b0)+_0x419cc1(0x2c2)+_0x419cc1(0x4dd)+'.dll',_0x25545f[_0x419cc1(0xb56)],_0x25545f['QpeTw'],'Scivo'+'loCha'+_0x419cc1(0x5a2)+'rCont'+_0x419cc1(0x2d8)+'r.dll','__Gen'+'erate'+'d'];(function _0x4d63eb(){var _0x57ce65=_0x419cc1;try{var _0xd9f50b=window[_0x57ce65(0x571)+_0x57ce65(0x3c8)+_0x57ce65(0xba2)]&&window[_0x57ce65(0x571)+'WebMo'+_0x57ce65(0xba2)]['Runti'+'me'];if(!_0xd9f50b||_0x25545f[_0x57ce65(0xc0b)](typeof _0xd9f50b[_0x57ce65(0x8e6)+_0x57ce65(0x299)+'in'],_0x25545f['ParqZ'])){_0x4f85dc[_0x57ce65(0x97b)]=_0x25545f['nNJzo'];return;}_0x4f85dc[_0x57ce65(0x5a9)+_0x57ce65(0x3b2)]=!![],_0x235ba0=_0xd9f50b[_0x57ce65(0x8e6)+_0x57ce65(0x299)+'in']({'name':_0x25545f[_0x57ce65(0xd64)],'version':_0x4b2487,'referencedAssemblies':_0x5b82b0[_0x57ce65(0x634)]()}),_0x4f85dc['ok']=!![];try{if(_0x25545f[_0x57ce65(0xd52)](_0x25545f[_0x57ce65(0x7c0)],_0x25545f['gFaFi']))return null;else{var _0x34271e=window['Unity'+_0x57ce65(0x3c8)+_0x57ce65(0xba2)]['Runti'+'me'];_0x34271e[_0x57ce65(0x375)+_0x57ce65(0x3be)+'g']=_0x25545f[_0x57ce65(0x42c)](_0x4b2487,':')+Math['rando'+'m']()['toStr'+'ing'](-0x1bf6+-0x1cb2*-0x1+-0x4*0x26)[_0x57ce65(0x634)](0x553+0x232a+-0x287b,0x956+0x2514+-0x1730*0x2),_0xe105ec=_0x34271e[_0x57ce65(0x375)+_0x57ce65(0x3be)+'g'];}}catch(_0x416092){}_0x25545f['iEVne'](_0xb0851f),_0x54c03b(),_0x4f85dc[_0x57ce65(0x414)+_0x57ce65(0x393)+_0x57ce65(0x43b)]=_0x23ed4d[_0x57ce65(0xa1b)+'h'],_0x25545f['dxguv'](_0x36853e),_0x4f85dc[_0x57ce65(0xb00)+_0x57ce65(0x7a1)]=!![];}catch(_0x19616e){_0x4f85dc['error']=String(_0x19616e&&_0x19616e[_0x57ce65(0x650)+'ge']||_0x19616e);}}());var _0x484562=new Float32Array(0x18*0xee+-0x1419+-0x236),_0x56c74b=new Int32Array(_0x484562[_0x419cc1(0xa39)+'r']);function _0x426bca(_0x759ecb){return _0x484562[-0x472+-0x5*-0x15a+-0x1*0x250]=_0x759ecb,_0x56c74b[-0x8*0x5e+0x1*-0x31f+0x60f];}function _0x1d61e4(_0xac20a4){return _0x56c74b[-0x1*0x25bd+-0x1e35+-0x3*-0x16a6]=_0x25545f['fdgow'](_0xac20a4,-0x684+-0x140f+0x1a93*0x1),_0x484562[0x1*-0x1808+-0x19d3+0x1*0x31db];}var _0x5c0a6e={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x1b140c(){var _0x24261d=_0x419cc1,_0x50bbfe={'powjw':function(_0x3e57d7,_0x189e1d,_0x2caedd){return _0x3e57d7(_0x189e1d,_0x2caedd);},'ANyNe':function(_0x464865,_0x129469){return _0x464865===_0x129469;}};try{if(_0x25545f[_0x24261d(0xcec)]('DLZCi',_0x25545f[_0x24261d(0x3bb)])){if(_0x235ba0&&_0x235ba0[_0x24261d(0x1b9)+'ime']){var _0x3edc51=_0x235ba0[_0x24261d(0x1b9)+'ime'];if(typeof _0x3edc51['resol'+_0x24261d(0x8e1)+'e']===_0x24261d(0x723)+'ion'){var _0x52c61e=_0x3edc51[_0x24261d(0x971)+'veGam'+'e']();if(_0x52c61e){if(_0x25545f[_0x24261d(0xc5f)](_0x24261d(0xb2c),_0x24261d(0xb2c)))return _0x5c0a6e[_0x24261d(0x5fb)+'e']=_0x24261d(0x691)+'n._ru'+_0x24261d(0x5fa)+_0x24261d(0x396)+'lveGa'+_0x24261d(0xcf6),_0x52c61e;else{if(!_0x1307c5['petal'])return;var _0x4f19a9=_0x3ce5f7();_0x551800['petal']['style'][_0x24261d(0x285)+'ty']=_0x1c656e[_0x24261d(0x4d2)]?'1':_0x4f19a9?'.8':_0x25545f[_0x24261d(0xdfd)],_0x1675ba[_0x24261d(0x293)][_0x24261d(0xb1c)]=_0x4f19a9?'Sakur'+_0x24261d(0x70a)+_0x24261d(0x16a)+'z\x20(In'+'sert)':'Sakur'+_0x24261d(0x70a)+_0x24261d(0x16a)+_0x24261d(0x4ba)+_0x24261d(0x63b)+_0x24261d(0xc84)+'\x20the\x20'+'game\x20'+'(Inse'+_0x24261d(0xda5);}}}if(_0x3edc51[_0x24261d(0xd59)]){if(_0x25545f[_0x24261d(0xc76)](_0x24261d(0xde5),_0x25545f['kcdcs']))return _0x5c0a6e['sourc'+'e']=_0x24261d(0x691)+_0x24261d(0xc19)+_0x24261d(0x5fa)+_0x24261d(0x66a)+'e',_0x3edc51[_0x24261d(0xd59)];else{var _0x1a0b77=_0x2c4400['inner'+'Heigh'+'t']||0xe95+-0xd25*0x2+0xed5;if(_0x25545f[_0x24261d(0x387)](_0x1a0b77,0x157a+0x246f+-0x377d))_0x25545f[_0x24261d(0x83c)](_0x2a2ed2,![]);}}}}else _0x17e8d5=_0x3fe646(_0x59abb7,_0x673c5e||-0x24b*0xe+-0x2306+0x4cf*0xe);}catch(_0x1ddfad){}try{var _0xd99972=window['Unity'+'WebMo'+'dkit']&&window[_0x24261d(0x571)+_0x24261d(0x3c8)+'dkit']['Runti'+'me'];if(_0xd99972&&typeof _0xd99972[_0x24261d(0x971)+_0x24261d(0x8e1)+'e']===_0x25545f[_0x24261d(0x5b5)]){var _0x51330e=_0xd99972[_0x24261d(0x971)+_0x24261d(0x8e1)+'e']();if(_0x51330e)return _0x5c0a6e['sourc'+'e']='Runti'+'me.re'+'solve'+'Game('+')',_0x51330e;}if(_0xd99972&&_0xd99972[_0x24261d(0xd59)])return _0x5c0a6e[_0x24261d(0x5fb)+'e']=_0x24261d(0x57d)+_0x24261d(0x7d4)+_0x24261d(0x15d),_0xd99972;}catch(_0x289e6e){}try{var _0x2eda5d=window[_0x24261d(0x5ee)+'Insta'+'nce']||window[_0x24261d(0x5ee)+_0x24261d(0x702)]||window[_0x24261d(0x63d)];if(_0x2eda5d){if(_0x24261d(0xdcd)==='LHMof'){var _0xd2f052=(_0x24261d(0x980)+_0x24261d(0x48a)+_0x24261d(0x1a5))['split']('|'),_0x5a1afd=-0x246b+-0x2*0xb5d+-0x2d1*-0x15;while(!![]){switch(_0xd2f052[_0x5a1afd++]){case'0':for(var _0x3d07f3 in _0x14d6ca['float'+'s'])_0x33596e['Mouse'+_0x24261d(0x80c)+_0x3d07f3]=_0x14d6ca['float'+'s'][_0x3d07f3];continue;case'1':if(_0x14d6ca[_0x24261d(0xb9c)+'a'])_0x33596e[_0x25545f[_0x24261d(0x52b)]]=_0x14d6ca[_0x24261d(0xb9c)+'a'];continue;case'2':if(!_0x14d6ca)return _0x33596e;continue;case'3':var _0x33596e={};continue;case'4':_0x33596e[_0x24261d(0xd14)+'Look@'+'ptr']=_0x14d6ca[_0x24261d(0x351)+_0x24261d(0x6b4)];continue;case'5':return _0x33596e;case'6':var _0x14d6ca=_0x25545f[_0x24261d(0xd84)](_0x45d9bf);continue;}break;}}else return _0x5c0a6e['sourc'+'e']=_0x24261d(0x3d6)+_0x24261d(0xb6b)+_0x24261d(0xb93),_0x2eda5d;}}catch(_0x1ca257){}try{if(_0x24261d(0x4a0)===_0x24261d(0x4a0)){if(_0x25545f[_0x24261d(0xc1a)](typeof game,'undef'+_0x24261d(0x1c3))&&game)return _0x5c0a6e['sourc'+'e']=_0x24261d(0x56f)+'game\x20'+_0x24261d(0x787)+'ng',game;}else{if(!_0x40ba60[_0x247c0c])_0x3dc474[_0x41a179]={'ptr':_0x58a086,'kind':_0x358ff1,'firstSeen':_0x20adcc[_0x24261d(0xc8f)](),'hits':0x0};_0x40c000[_0x4fbb39][_0x24261d(0xa4e)]++;}}catch(_0x2f09a8){}try{if(_0x25545f[_0x24261d(0x598)]==='NBePb'){var _0x270b76=Object['keys'](window);for(var _0x4a4af1=-0x3e3*0x1+-0x1*-0xa2b+-0x648;_0x25545f[_0x24261d(0x92a)](_0x4a4af1,_0x270b76[_0x24261d(0xa1b)+'h'])&&_0x4a4af1<0x471+-0x26a7+0x1247*0x2;_0x4a4af1++){var _0x1ea0ab=window[_0x270b76[_0x4a4af1]];if(_0x1ea0ab&&typeof _0x1ea0ab===_0x24261d(0x376)+'t'&&_0x1ea0ab[_0x24261d(0xacf)+'e']&&_0x1ea0ab[_0x24261d(0xacf)+'e']['HEAPU'+'8']&&_0x1ea0ab['Modul'+'e'][_0x24261d(0x859)+'8'][_0x24261d(0xa39)+'r']){if(_0x24261d(0x56a)!==_0x25545f['TRyLw']){if(!_0x16676c['on'])_0x4d30f7(!![],![]);else{if(_0x4461ce[_0x24261d(0x3ca)])_0x1f0307(![],![]);else{if(_0x441927())_0x44039a(!![],!![]);else _0x50bbfe[_0x24261d(0x244)](_0x5604e6,![],![]);}}}else return _0x5c0a6e[_0x24261d(0x5fb)+'e']=_0x25545f[_0x24261d(0x9cc)](_0x25545f[_0x24261d(0x629)],_0x270b76[_0x4a4af1])+(_0x24261d(0x998)+'le'),_0x1ea0ab;}}}else try{var _0x26b1e4=_0xd8494a[_0x24261d(0x611)+'em'](_0x58726c);if(!_0x26b1e4)return;var _0x132209=_0xaa0ee3[_0x24261d(0xa71)](_0x26b1e4);if(_0x132209&&_0x50bbfe['ANyNe'](typeof _0x132209['x'],'numbe'+'r')&&_0x50bbfe['ANyNe'](typeof _0x132209['y'],'numbe'+'r'))_0x42a37d[_0x24261d(0x8a7)]=_0x132209;}catch(_0x21ec21){}}catch(_0x5b5768){}return _0x5c0a6e[_0x24261d(0x5fb)+'e']=null,null;}function _0x24d141(){var _0x84dbb9=_0x419cc1;try{if(_0x84dbb9(0x8d4)==='gUEaT'){if(_0x145333[_0x348171]['o']===_0x2ed0ef){if(_0x3f12f2==='v3'){var _0x8622c8=_0x2a236e[_0x4c5377]['xyz']||[_0x2d90f7[_0x3ef480]['v'],-0x1e17+-0xea4+0x2cbb,-0x2377*-0x1+0xebf+0x191b*-0x2];return _0x8622c8[_0x84dbb9(0x8fa)](function(_0x331f69){return _0x282dd3['round'](_0x331f69*(0xe3*-0x1+-0x6*-0x318+-0x1149))/(0x295*0x8+0x2526+-0x396a);})['join']('\x20\x20');}var _0x482f99=_0x4cd0fb[_0x24757d]['v'];return typeof _0x482f99==='numbe'+'r'?_0x25545f[_0x84dbb9(0x25f)](_0x287f5f['round'](_0x482f99*(0x4e0+0x1669+-0x69*0x39)),-0x224e+0x2*-0x925+-0xe2*-0x40):_0x64c0f9(_0x482f99);}}else{if(_0x2b173d&&_0x2b173d[_0x84dbb9(0xa39)+'r']&&_0x2b173d['buffe'+'r'][_0x84dbb9(0x603)+'ength'])return _0x5c0a6e[_0x84dbb9(0x5fb)+'e']=_0x5c0a6e[_0x84dbb9(0x5fb)+'e']||_0x84dbb9(0xd7e)+_0x84dbb9(0xbdc)+_0x84dbb9(0x566)+_0x84dbb9(0xaf9)+'s.mem'+_0x84dbb9(0x516),new Uint8Array(_0x2b173d['buffe'+'r']);}}catch(_0x1d1a67){}try{var _0x215872=_0x25545f[_0x84dbb9(0xa7f)](_0x1b140c);if(_0x215872&&_0x215872[_0x84dbb9(0xacf)+'e']&&_0x215872['Modul'+'e'][_0x84dbb9(0x859)+'8']&&_0x215872['Modul'+'e'][_0x84dbb9(0x859)+'8']['buffe'+'r'])return _0x215872[_0x84dbb9(0xacf)+'e'][_0x84dbb9(0x859)+'8'];}catch(_0x3ca7ba){}return null;}function _0x53bb1f(){var _0x54061b=_0x419cc1,_0x33295b=_0x24d141();if(!_0x33295b)return null;try{if(_0x54061b(0x97f)==='muDOu')_0x1c92ff[_0x54061b(0xbf4)]['opaci'+'ty']=_0x496773['open']?'1':'.5';else return new DataView(_0x33295b['buffe'+'r'],_0x33295b[_0x54061b(0x635)+_0x54061b(0x83e)],_0x33295b[_0x54061b(0x603)+_0x54061b(0x79e)]);}catch(_0x55ff00){return null;}}function _0x2ee0ee(_0x18950d,_0x536f59){var _0x36e741=_0x419cc1,_0x34195b=_0x25545f[_0x36e741(0xa7f)](_0x53bb1f);if(!_0x34195b)return _0x25545f[_0x36e741(0x583)]!==_0x36e741(0x46a)?(_0xe94d8b[0x2*-0x32f+-0x20ed*0x1+0x274b]=_0x3cfc9f|-0x7*-0x355+0xdb7+-0x250a,_0x448be9[0x1d67+0x13e*-0x7+-0x14b5]):(_0x5c0a6e[_0x36e741(0x92b)+'d']++,_0x5c0a6e[_0x36e741(0x36c)+_0x36e741(0x1e4)]=_0x5c0a6e['lastE'+_0x36e741(0x1e4)]||_0x25545f[_0x36e741(0xcab)],undefined);if(_0x18950d<-0x4*0x26+0xcd1+0x1*-0xc39||_0x25545f['HbYcp'](_0x18950d+(0xb8*0x2e+-0x1122+0x3*-0x54e),_0x34195b['byteL'+_0x36e741(0x79e)]))return _0x5c0a6e[_0x36e741(0x92b)+'d']++,_0x5c0a6e[_0x36e741(0x36c)+_0x36e741(0x1e4)]=_0x5c0a6e['lastE'+_0x36e741(0x1e4)]||_0x25545f[_0x36e741(0x14d)](_0x36e741(0xc86)+_0x36e741(0x757)+_0x18950d['toStr'+_0x36e741(0x2fe)](-0x39*-0x6+-0xa*0x8c+0x432*0x1),_0x25545f[_0x36e741(0x78c)])+_0x34195b['byteL'+_0x36e741(0x79e)]['toStr'+_0x36e741(0x2fe)](-0x2*-0x282+0x8a8+-0x1*0xd9c),undefined;try{if(_0x25545f[_0x36e741(0x5a8)](_0x36e741(0x7c5),'jftTj'))_0x120e6d[_0x36e741(0xe00)+_0x36e741(0x7d1)+'t']=_0x356f27(_0x30f8be);else{_0x5c0a6e['ok']++;switch(_0x536f59){case'u8':return _0x34195b[_0x36e741(0x489)+'nt8'](_0x18950d);case'i8':return _0x34195b[_0x36e741(0xc4f)+'t8'](_0x18950d);case _0x25545f['hdYpQ']:return _0x34195b[_0x36e741(0xc4f)+'t16'](_0x18950d,!![]);case _0x36e741(0x5b9):return _0x34195b['getUi'+_0x36e741(0x510)](_0x18950d,!![]);case'i32':return _0x34195b['getIn'+_0x36e741(0x3c7)](_0x18950d,!![]);case _0x36e741(0x7a2):return _0x34195b['getUi'+_0x36e741(0xa2a)](_0x18950d,!![]);case'f32':return _0x34195b[_0x36e741(0xc80)+_0x36e741(0x397)](_0x18950d,!![]);case _0x25545f['dBLTR']:return _0x34195b['getFl'+_0x36e741(0xb39)](_0x18950d,!![]);case'v2':case'v3':case'v4':return _0x34195b[_0x36e741(0xc80)+_0x36e741(0x397)](_0x18950d,!![]);default:return _0x34195b[_0x36e741(0xc4f)+_0x36e741(0x3c7)](_0x18950d,!![]);}}}catch(_0x122293){if(_0x25545f['ZPFrS']('sGxCG',_0x25545f[_0x36e741(0x3cf)]))return _0x5c0a6e['faile'+'d']++,_0x5c0a6e[_0x36e741(0x36c)+_0x36e741(0x1e4)]=_0x5c0a6e[_0x36e741(0x36c)+_0x36e741(0x1e4)]||_0x25545f[_0x36e741(0xc99)](String,_0x122293&&_0x122293[_0x36e741(0x650)+'ge']||_0x122293)[_0x36e741(0x634)](-0x12b+0x21b9+-0x208e,0xe35+0x59c*-0x1+-0x821),undefined;else _0x115d73=_0x25545f[_0x36e741(0xc4b)](_0x25545f[_0x36e741(0xc4b)](_0x25545f[_0x36e741(0x531)](_0x25545f[_0x36e741(0x38f)](_0x36e741(0x5f4)+_0x36e741(0xc5d)+_0x36e741(0x869)+'t\x20',_0x358253['hookF'+'irePr'+'oof']['atMs']),_0x25545f['oSPNI']),_0x157bb5[_0x36e741(0x40b)+'irePr'+_0x36e741(0x976)][_0x36e741(0xd1e)+'nalFu'+'nc']),'\x20and\x20'+_0x36e741(0xc5c)+_0x36e741(0x971)+'ved=')+_0x226e5a['hookF'+'irePr'+_0x36e741(0x976)][_0x36e741(0x971)+'veGam'+_0x36e741(0x69a)+'re']+('\x20(sou'+_0x36e741(0x61b))+(_0x325589[_0x36e741(0x40b)+'irePr'+_0x36e741(0x976)]['gameS'+_0x36e741(0x2a1)+'AtFir'+'e']||'none')+_0x25545f[_0x36e741(0xa5f)];}}function _0x554fca(_0x3c1c1d,_0x5b85ff,_0x4d231e){var _0x2da757=_0x419cc1,_0x3c51a6=_0x25545f[_0x2da757(0x5a0)](_0x53bb1f);if(!_0x3c51a6||_0x3c1c1d<-0x7b+0x12ac+0x1231*-0x1||_0x3c1c1d+(-0xb9*-0x31+0xd23+0xc22*-0x4)>_0x3c51a6['byteL'+_0x2da757(0x79e)])return![];try{switch(_0x5b85ff){case'u8':case'i8':_0x3c51a6[_0x2da757(0x595)+_0x2da757(0x969)](_0x3c1c1d,_0x4d231e&0x523+-0x46d+0x49);break;case _0x25545f[_0x2da757(0x3b3)]:case _0x25545f[_0x2da757(0xcee)]:_0x3c51a6[_0x2da757(0x626)+_0x2da757(0x6d0)](_0x3c1c1d,_0x4d231e|-0x1*0x1c11+-0x2*-0xdef+-0x1*-0x33,!![]);break;case _0x25545f[_0x2da757(0xb37)]:case _0x25545f['EPPYv']:_0x3c51a6['setIn'+_0x2da757(0x3c7)](_0x3c1c1d,_0x25545f['fdgow'](_0x4d231e,0x776*0x1+-0x1f28+0x17b2),!![]);break;case _0x25545f[_0x2da757(0x9b0)]:_0x3c51a6[_0x2da757(0x708)+_0x2da757(0x397)](_0x3c1c1d,_0x4d231e,!![]);break;default:_0x3c51a6['setIn'+_0x2da757(0x3c7)](_0x3c1c1d,_0x25545f[_0x2da757(0x282)](_0x4d231e,-0x1d11*0x1+0x182d+0x139*0x4),!![]);}return!![];}catch(_0x10d006){return![];}}var _0x5af881={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x419cc1(0xbd8)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x419cc1(0xbd8)},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x544124(_0x206c7f){var _0x5a4577=_0x419cc1,_0x5ecd67='';for(var _0x1376fd=-0x49a+-0x16b1*0x1+0x919*0x3;_0x25545f[_0x5a4577(0x246)](_0x1376fd,_0x206c7f[_0x5a4577(0xa1b)+'h']);_0x1376fd++){var _0x1bcbca=_0x206c7f[_0x1376fd]['toStr'+'ing'](-0xffc+-0x21e*-0x3+0x9b2);_0x5ecd67+=(_0x1bcbca['lengt'+'h']<-0x1ed0+0x8*-0x365+-0x2*-0x1cfd?'0':'')+_0x1bcbca;}return _0x5ecd67;}function _0x355da3(_0xec000d,_0x5636f2,_0x2cdcc6){var _0x5b3f9b=_0x419cc1,_0x5d3ca2=_0x25545f['EtQve'](_0x53bb1f);if(!_0x5d3ca2)return _0x5c0a6e['faile'+'d']++,_0x5c0a6e['lastE'+_0x5b3f9b(0x1e4)]=_0x5c0a6e['lastE'+'rror']||_0x25545f['WPJes'],null;if(_0x25545f[_0x5b3f9b(0xa65)](_0x5636f2,0x19b4+-0x27b*0x2+-0x14be)||_0x25545f[_0x5b3f9b(0x850)](_0x25545f[_0x5b3f9b(0xc4b)](_0x5636f2,_0x2cdcc6),_0x5d3ca2[_0x5b3f9b(0x603)+'ength'])){if(_0x25545f['LsvNW']!==_0x5b3f9b(0x9bb))return _0x5c0a6e['faile'+'d']++,_0x5c0a6e[_0x5b3f9b(0x36c)+_0x5b3f9b(0x1e4)]=_0x5c0a6e['lastE'+_0x5b3f9b(0x1e4)]||_0x25545f[_0x5b3f9b(0xc4b)](_0x25545f[_0x5b3f9b(0x2aa)](_0x5b3f9b(0xc86)+_0x5b3f9b(0x757),_0x25545f[_0x5b3f9b(0x752)](_0xec000d,_0x5636f2)['toStr'+_0x5b3f9b(0x2fe)](-0x24ca+0x11*0x4+0x2496)),_0x25545f[_0x5b3f9b(0x78c)])+_0x5d3ca2['byteL'+_0x5b3f9b(0x79e)][_0x5b3f9b(0x834)+_0x5b3f9b(0x2fe)](-0x3*-0xcca+-0xde2+0xc*-0x209),null;else{var _0x589a2a={'GGbtk':function(_0x47de50){return _0x47de50();},'nPitP':function(_0x4ba035){return _0x4ba035();}},_0x464f40=_0x11eae4(_0x25545f['nsUWw'],_0x25545f[_0x5b3f9b(0xaf6)]);_0x464f40[_0x5b3f9b(0x62a)]=_0x5b3f9b(0xcbe)+'n';var _0x1db4c5=function(){var _0x50717a=_0x5b3f9b;_0x464f40[_0x50717a(0x74a)+_0x50717a(0x3de)+'te']('aria-'+'check'+'ed',_0x589a2a[_0x50717a(0xd0a)](_0x2eb90f)?_0x50717a(0x344):'false');};return _0x464f40[_0x5b3f9b(0x523)+'ck']=function(){var _0x44150d=_0x5b3f9b;_0x858b65(!_0x589a2a['GGbtk'](_0x2731c5)),_0x589a2a[_0x44150d(0xdf8)](_0x1db4c5);},_0x25545f[_0x5b3f9b(0x8b2)](_0x1db4c5),_0x464f40[_0x5b3f9b(0xb2a)]=_0x1db4c5,_0x24a55b[_0x5b3f9b(0x264)]['push'](_0x1db4c5),_0x464f40;}}try{var _0x5e2ea4=new Uint8Array(_0x2cdcc6);for(var _0x15aeec=0x1b01+0x4c*0x57+-0x21d*0x19;_0x15aeec<_0x2cdcc6;_0x15aeec++)_0x5e2ea4[_0x15aeec]=_0x5d3ca2['getUi'+_0x5b3f9b(0x969)](_0x25545f[_0x5b3f9b(0x739)](_0x25545f[_0x5b3f9b(0x2aa)](_0xec000d,_0x5636f2),_0x15aeec));return _0x5c0a6e['ok']++,_0x5e2ea4;}catch(_0x59ba14){if(_0x25545f['Jmnbm']===_0x5b3f9b(0x7e7))try{var _0x22cbd9=_0x24ee98;if(_0x22cbd9&&_0x22cbd9['el'])_0x22cbd9['el'][_0x5b3f9b(0xbf4)]['displ'+'ay']=_0x45966a?'':_0x5b3f9b(0x165);var _0x294921=_0x11134f;if(_0x294921&&_0x294921['cv'])_0x294921['cv'][_0x5b3f9b(0xbf4)]['displ'+'ay']=_0x36b612?'':'none';}catch(_0x46dda0){}else return _0x5c0a6e[_0x5b3f9b(0x92b)+'d']++,_0x5c0a6e[_0x5b3f9b(0x36c)+'rror']=_0x5c0a6e['lastE'+_0x5b3f9b(0x1e4)]||String(_0x59ba14&&_0x59ba14['messa'+'ge']||_0x59ba14)['slice'](-0xd*-0x8a+-0x1a*0x47+0x34,-0x1801+-0x19c3+-0x4*-0xc8f),null;}}function _0x48abf1(_0x21336c,_0x2ce1a9,_0xc3d434){var _0x80f325=_0x419cc1,_0x1e4e38=_0x5af881[_0xc3d434],_0x19dcc9=_0x25545f[_0x80f325(0x6ed)](_0x355da3,_0x21336c,_0x2ce1a9,_0x1e4e38[_0x80f325(0x672)]);if(!_0x19dcc9)return null;var _0x374cb6=new DataView(_0x19dcc9['buffe'+'r'],_0x19dcc9[_0x80f325(0x635)+_0x80f325(0x83e)],_0x19dcc9[_0x80f325(0x603)+_0x80f325(0x79e)]),_0x2fd10f=_0x374cb6['getIn'+'t32'](_0x1e4e38[_0x80f325(0x365)],!![]),_0xf40520=_0x374cb6[_0x80f325(0xc4f)+_0x80f325(0x3c7)](_0x1e4e38['hidde'+'n'],!![]),_0x3d4258=_0x25545f[_0x80f325(0x280)](_0x374cb6['getUi'+_0x80f325(0x969)](_0x1e4e38['inite'+'d']),-0x92f+0x72b+0x205),_0xe9e22c=_0x25545f[_0x80f325(0xcec)](_0xc3d434,_0x80f325(0x79a))?_0x374cb6[_0x80f325(0xc80)+_0x80f325(0x397)](_0x1e4e38[_0x80f325(0x1c2)],!![]):_0xc3d434==='obfI'?_0x374cb6[_0x80f325(0xc4f)+'t32'](_0x1e4e38[_0x80f325(0x1c2)],!![]):_0x374cb6[_0x80f325(0x489)+_0x80f325(0x969)](_0x1e4e38['fake']),_0x13d09d=_0x374cb6[_0x80f325(0x489)+_0x80f325(0x969)](_0x1e4e38[_0x80f325(0x209)+'e'])&0x2*0x6b6+0x1*0x1816+-0x2581;return{'keyAtOffset0':_0x2fd10f,'hidden':_0xf40520,'inited':_0x3d4258,'fake':_0xe9e22c,'act':_0x13d09d,'hex':_0x544124(_0x19dcc9),'alt':_0xc3d434===_0x80f325(0x631)?_0x25545f[_0x80f325(0xb7b)](_0xf40520,_0xe9e22c|0x1b7*0x13+0xb7e+0x1*-0x2c13):null};}function _0x51de70(_0x102be6,_0x5765e0,_0xe1a2bf){var _0x5dc66a=_0x419cc1;if(_0x102be6===_0x25545f['arRPJ'])return _0x25545f[_0x5dc66a(0x43c)](_0x1d61e4,_0x25545f[_0x5dc66a(0xb7b)](_0x5765e0,_0xe1a2bf));if(_0x102be6===_0x5dc66a(0x631))return _0x5765e0^_0xe1a2bf|0x297*-0x6+0xa5+0xee5;return _0x25545f['LkzMw'](_0x25545f[_0x5dc66a(0x62f)](_0x5765e0,_0xe1a2bf),-0x3*0x93e+-0x105f+0x2d18)!==-0xbde+0x5*0x3f5+-0x7eb*0x1?0x17*0x107+-0x20ce+0x92e:-0x22b+0xbbf+-0x994*0x1;}function _0x128e5e(_0x4dc78c,_0x1c6303,_0x314224){var _0x778e35=_0x419cc1,_0x48f20=(_0x778e35(0xbec)+_0x778e35(0x97a)+_0x778e35(0x4d4)+_0x778e35(0xa7d)+_0x778e35(0x610)+_0x778e35(0xd25)+'2|11')[_0x778e35(0xb76)]('|'),_0x37a749=-0x7*-0x1b9+0x25f*-0xd+0x12c4;while(!![]){switch(_0x48f20[_0x37a749++]){case'0':var _0x3fd5ba=_0x2ee0ee(_0x4dc78c+_0x1c6303+_0x20d9d0[_0x778e35(0x365)],'u8');continue;case'1':var _0x5c631d=_0x2ee0ee(_0x4dc78c+_0x1c6303+_0x20d9d0[_0x778e35(0x1c2)],_0x25545f['DYcUS'](_0x314224,_0x778e35(0x79a))?'f32':_0x314224===_0x778e35(0x631)?'i32':'u8');continue;case'2':var _0x20d9d0=_0x5af881[_0x314224];continue;case'3':var _0x3ef6ee=_0x2ee0ee(_0x25545f['LnbAE'](_0x4dc78c+_0x1c6303,_0x20d9d0[_0x778e35(0x1b7)+'d']),'u8');continue;case'4':if(_0x25545f[_0x778e35(0xc5f)](_0x3fd5ba,undefined)||_0x113a68===undefined||_0x5c631d===undefined||_0x190f48===undefined)return null;continue;case'5':_0x3ef6ee=(_0x3ef6ee||0x1945+-0xcfc+0xc49*-0x1)&0x74a+0x1*-0x151+-0x5f8;continue;case'6':var _0x190f48=_0x25545f['mucCI'](_0x2ee0ee,_0x25545f[_0x778e35(0x7a8)](_0x4dc78c+_0x1c6303,_0x20d9d0[_0x778e35(0x209)+'e']),'u8');continue;case'7':var _0x11eb80;continue;case'8':if(!_0x20d9d0)return null;continue;case'9':_0x113a68|=0x2bb+-0x10d3*0x1+0xe18;continue;case'10':_0x3fd5ba&=0x2588+-0x1aa4+0x1*-0x9e5;continue;case'11':return{'real':_0x11eb80,'fake':_0x5c631d,'act':_0x190f48,'init':_0x3ef6ee,'key':_0x3fd5ba,'hidden':_0x113a68};case'12':if(_0x25545f[_0x778e35(0x49c)](_0x314224,_0x25545f[_0x778e35(0xbe9)]))_0x11eb80=_0x25545f[_0x778e35(0xa67)](_0x1d61e4,_0x25545f[_0x778e35(0xbc1)](_0x113a68,_0x3fd5ba));else{if(_0x314224===_0x25545f[_0x778e35(0x47a)])_0x11eb80=_0x25545f['vRlcI'](_0x113a68,_0x3fd5ba)|0xc96+0x1*-0x1e5d+-0x11c7*-0x1;else _0x11eb80=_0x25545f['snibd'](_0x25545f[_0x778e35(0xb7b)](_0x113a68,_0x3fd5ba)&0x14bb+0x6d4+-0x1a90,0x1bdf+0x18ad+-0x348c)?0x1b2d+-0x20a8+-0x9*-0x9c:-0x3a1+-0x214f*0x1+0x24f0;}continue;case'13':var _0x113a68=_0x25545f['ZzWxM'](_0x2ee0ee,_0x25545f['WVHXT'](_0x4dc78c,_0x1c6303)+_0x20d9d0[_0x778e35(0x987)+'n'],'i32');continue;case'14':_0x190f48&=0x5e+0x1*0xecd+0x6*-0x287;continue;}break;}}function _0x2cd9aa(_0x1f5c5d,_0x3bef8f,_0x2712df,_0xb857cb){var _0x47190c=_0x419cc1,_0x1b5808=(_0x47190c(0xbc4)+_0x47190c(0x5a1)+_0x47190c(0x74b))['split']('|'),_0x3c312a=0x191*0x3+-0x2137+-0x19*-0x124;while(!![]){switch(_0x1b5808[_0x3c312a++]){case'0':var _0x5824a1=_0x5af881[_0x2712df];continue;case'1':var _0x3a8457;continue;case'2':return _0x554fca(_0x25545f['XEvjr'](_0x25545f[_0x47190c(0x42c)](_0x1f5c5d,_0x3bef8f),_0x5824a1[_0x47190c(0x987)+'n']),'i32',_0x25545f[_0x47190c(0xd58)](_0x3a8457,_0x4ce138))&&_0x554fca(_0x25545f['WVHXT'](_0x25545f[_0x47190c(0x1b2)](_0x1f5c5d,_0x3bef8f),_0x5824a1['fake']),_0x2712df===_0x25545f[_0x47190c(0xbe9)]?'f32':_0x2712df===_0x47190c(0x631)?_0x47190c(0xbd8):'u8',_0x2712df===_0x25545f[_0x47190c(0xbe9)]?_0xb857cb:_0x25545f['vmgEo'](_0x2712df,_0x25545f[_0x47190c(0x47a)])?_0xb857cb|0x1112+-0x590+-0xb82:_0xb857cb?-0x175+-0x1012*0x2+0x219a:-0x6a2*0x1+0x278+0x42a)&&_0x25545f[_0x47190c(0x6ed)](_0x554fca,_0x25545f[_0x47190c(0x185)](_0x1f5c5d+_0x3bef8f,_0x5824a1[_0x47190c(0x209)+'e']),'u8',0x2fd+0x775+-0xe*0xbf);case'3':var _0x197115=new DataView(_0xed7871['buffe'+'r'],_0xed7871['byteO'+_0x47190c(0x83e)],_0xed7871[_0x47190c(0x603)+_0x47190c(0x79e)]);continue;case'4':if(_0x2712df===_0x25545f['arRPJ'])_0x3a8457=_0x426bca(_0xb857cb);else{if(_0x25545f[_0x47190c(0x216)](_0x2712df,_0x25545f[_0x47190c(0x47a)]))_0x3a8457=_0x25545f[_0x47190c(0x282)](_0xb857cb,0xcc+-0x9b3+0x8e7);else _0x3a8457=_0x25545f[_0x47190c(0xba6)](_0xb857cb?-0x2a3+-0x1cc4+0x1f68:-0x257c+0x126b+0x1311,-0x295*-0x5+-0x1285*-0x1+0xa25*-0x3);}continue;case'5':var _0x4ce138=_0x25545f['UiLxl'](_0x5824a1['keyTy'+'pe'],'u8')?_0x197115[_0x47190c(0x489)+'nt8'](_0x5824a1[_0x47190c(0x365)]):_0x197115[_0x47190c(0xc4f)+_0x47190c(0x3c7)](_0x5824a1[_0x47190c(0x365)],!![]);continue;case'6':var _0xed7871=_0x355da3(_0x1f5c5d,_0x3bef8f,_0x5824a1[_0x47190c(0x672)]);continue;case'7':if(!_0xed7871)return![];continue;}break;}}var _0x241f20={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x2a2748=-0x12*-0x1ea+0x2*0x2db+-0x282a+0.03,_0x4615a9=-0x20*0xbf+-0x67*-0x7+0x1511,_0x550f12={},_0x3cc99f=-0x14d1*0x1+0x4a1*0x6+-0x6f5*0x1,_0x1968dd=[],_0x20e579=[];function _0x4a3406(_0x19b560){var _0x144d85=_0x419cc1,_0x36bc13={'qonxr':function(_0x47a0ed){var _0xce3c4e=_0x29e5;return _0x25545f[_0xce3c4e(0xc2b)](_0x47a0ed);},'EQptW':function(_0x3cbb15,_0x5da8bc){var _0xfa5244=_0x29e5;return _0x25545f[_0xfa5244(0x663)](_0x3cbb15,_0x5da8bc);},'uFkuY':function(_0x7cad0c,_0x587116){return _0x7cad0c===_0x587116;},'nydIg':'funct'+_0x144d85(0xc6b)},_0x5918fd=_0x3e1fdb['FPSco'+_0x144d85(0x96e)+_0x144d85(0x36a)]||[],_0x9b07e6=[];_0x20e579=[],_0x1968dd=[];for(var _0x3b08d5=-0x2da+-0x23f9+-0x3*-0xcf1;_0x3b08d5<_0x5918fd['lengt'+'h'];_0x3b08d5++){var _0x1de441=_0x5918fd[_0x3b08d5][-0x63*-0x17+-0x6a*-0x3d+0x4e1*-0x7];if(_0x5918fd[_0x3b08d5][0x1a7*-0x5+-0x4bb+0x3*0x455]!==_0x25545f[_0x144d85(0xbe9)])continue;var _0x62fbf8=_0x48abf1(_0x19b560,_0x1de441,_0x144d85(0x79a));if(!_0x62fbf8||_0x25545f[_0x144d85(0xd11)](_0x62fbf8[_0x144d85(0x1b7)+'d'],-0x2*-0xf9e+-0x1b4f+0x4*-0xfb))continue;var _0x1c31ba=_0x51de70(_0x144d85(0x79a),_0x62fbf8[_0x144d85(0x987)+'n'],_0x62fbf8[_0x144d85(0xac3)+_0x144d85(0x3ef)+'t0']);if(_0x25545f['jZSdB'](typeof _0x1c31ba,'numbe'+'r')||!isFinite(_0x1c31ba))continue;var _0x445b77=_0x19b560+':'+_0x1de441,_0x3cd6ac=_0x550f12[_0x445b77];if(!_0x3cd6ac||_0x25545f[_0x144d85(0x89d)](_0x1c31ba,_0x3cd6ac['lastW'+_0x144d85(0x8a4)+'n']))_0x3cd6ac=_0x550f12[_0x445b77]={'base':_0x1c31ba,'lastWritten':null};var _0x565c02=_0x3cd6ac[_0x144d85(0xcd5)],_0x52e91c=Math['abs'](_0x565c02);if(_0x52e91c<0xe8a+0x9*0x99+-0x13eb+0.0001||_0x25545f['HbYcp'](_0x52e91c,0x2758*-0xe+0x1*-0x18ed3+0x43*0x1401)){if(_0x25545f[_0x144d85(0xcec)](_0x25545f[_0x144d85(0x46f)],'SqdPw')){_0x20e579['push']({'o':_0x1de441,'v':_0x1c31ba,'why':_0x144d85(0x153)+_0x144d85(0xe04)+'e'});continue;}else{var _0x55abe2=_0x53b94c('FPSco'+_0x144d85(0x96e)+'ler',_0x25661d[_0x3c81b3[_0xbdc2a3]][_0x144d85(0x936)]);_0x55abe2[_0x144d85(0xa4e)]=_0x9049cc[_0x160735[_0xf96c8b]][_0x144d85(0xa4e)],_0x55abe2['isLoc'+'al']=_0x1de07e[_0x1434de[_0x26ee0b]][_0x144d85(0x936)]===_0x16e582,_0x303974[_0x144d85(0x1d4)+'oller'+'s'][_0x144d85(0x90b)](_0x55abe2);}}_0x9b07e6[_0x144d85(0x90b)]({'o':_0x1de441,'v':_0x1c31ba,'a':_0x52e91c,'base':_0x565c02,'key':_0x445b77,'st':_0x3cd6ac});}var _0x13ab44=[];for(var _0xcc1f1b=-0x1b4+0x38*0x5b+-0x1234;_0x25545f[_0x144d85(0x6cd)](_0xcc1f1b,_0x9b07e6['lengt'+'h']);_0xcc1f1b++){if(_0x25545f['Evjib']===_0x25545f[_0x144d85(0x49e)]){var _0x338228=_0x9b07e6[_0xcc1f1b]['a'],_0x26de5c=null;for(var _0x2d9c95=-0x269e+0x1*-0xcf1+0x338f;_0x25545f['gQjlx'](_0x2d9c95,_0x13ab44[_0x144d85(0xa1b)+'h']);_0x2d9c95++){var _0x3c1214=_0x13ab44[_0x2d9c95][_0x144d85(0x35c)]/_0x338228;if(_0x3c1214>-0x11fe+-0x3b*0x2d+0xe2f*0x2-_0x2a2748&&_0x3c1214<_0x25545f[_0x144d85(0x2aa)](-0x1d8f*0x1+-0x4d3*-0x7+-0x435,_0x2a2748)){_0x26de5c=_0x13ab44[_0x2d9c95];break;}}!_0x26de5c&&(_0x26de5c={'mean':_0x338228,'members':[]},_0x13ab44['push'](_0x26de5c));_0x26de5c['membe'+'rs']['push'](_0x9b07e6[_0xcc1f1b]),_0x26de5c[_0x144d85(0x35c)]=-0x1*0x2426+-0xa40*0x1+0x2e66;for(var _0x4d1239=0x354+-0x2*-0x62e+-0xfb0;_0x4d1239<_0x26de5c[_0x144d85(0xcf1)+'rs']['lengt'+'h'];_0x4d1239++)_0x26de5c[_0x144d85(0x35c)]+=_0x26de5c['membe'+'rs'][_0x4d1239]['a'];_0x26de5c[_0x144d85(0x35c)]/=_0x26de5c[_0x144d85(0xcf1)+'rs'][_0x144d85(0xa1b)+'h'];}else{var _0x3c58f4=_0x25545f[_0x144d85(0x997)](_0x1b1ae1,_0x1a73e0['refs'][_0x144d85(0x80f)+'h'],-0x8d1*-0x1+-0x5ad*0x6+-0x17d*-0x11);_0x33d83e['healt'+'h']=_0x92c03c(_0x3c58f4,'Healt'+_0x144d85(0x929)+'pt',_0x144d85(0x631));}}var _0x35a5d4=[];for(var _0x5427d1=-0x2*-0x106c+0x259b+-0x4673;_0x5427d1<_0x13ab44[_0x144d85(0xa1b)+'h'];_0x5427d1++){if(_0x25545f[_0x144d85(0x9f3)]===_0x144d85(0x212))_0x197deb['clipb'+_0x144d85(0x5e6)][_0x144d85(0xc7c)+'Text'](_0x46a4c2)[_0x144d85(0x57a)](_0x5c811b,function(){var _0x52f2e2=_0x144d85;_0x36bc13[_0x52f2e2(0x7cf)](_0x10882d);});else{if(_0x25545f['ezIRe'](_0x13ab44[_0x5427d1]['membe'+'rs']['lengt'+'h'],_0x4615a9))_0x35a5d4['push'](_0x13ab44[_0x5427d1]);}}if(!_0x35a5d4[_0x144d85(0xa1b)+'h']){_0x20e579[_0x144d85(0x90b)]({'o':-(-0xdda+0x4*-0x577+0x29*0xdf),'v':0x0,'why':_0x25545f['JPKJf'](_0x25545f[_0x144d85(0x966)]+_0x4615a9,_0x144d85(0x716)+_0x144d85(0x8d1)+'loats'+'\x20agre'+'ed')});return;}var _0x573ebe=_0x35a5d4[-0xcf+0x2278+-0x21a9]['mean'];for(var _0x5dd4f6=-0x8a+-0x77+0x1*0x101;_0x5dd4f6<_0x35a5d4[_0x144d85(0xa1b)+'h'];_0x5dd4f6++)if(_0x35a5d4[_0x5dd4f6][_0x144d85(0x35c)]<_0x573ebe)_0x573ebe=_0x35a5d4[_0x5dd4f6][_0x144d85(0x35c)];var _0x12322b=_0x25545f[_0x144d85(0x34a)](_0x573ebe,0x2138+-0x18e7+0x851*-0x1+0.5);for(var _0x5e7d0b=0x7f1+0x9b5+-0x11a6;_0x5e7d0b<_0x13ab44[_0x144d85(0xa1b)+'h'];_0x5e7d0b++){if(_0x13ab44[_0x5e7d0b][_0x144d85(0xcf1)+'rs'][_0x144d85(0xa1b)+'h']>=_0x4615a9)continue;for(var _0x8db91b=-0x9c8*0x2+0x4*-0x2fb+0x3e*0x82;_0x8db91b<_0x13ab44[_0x5e7d0b]['membe'+'rs']['lengt'+'h'];_0x8db91b++){_0x20e579['push']({'o':_0x13ab44[_0x5e7d0b][_0x144d85(0xcf1)+'rs'][_0x8db91b]['o'],'v':_0x13ab44[_0x5e7d0b][_0x144d85(0xcf1)+'rs'][_0x8db91b]['v'],'why':_0x144d85(0x671)+'eton'});}}for(var _0x16067b=0xb09*0x1+-0x18f9+0xdf0;_0x16067b<_0x35a5d4[_0x144d85(0xa1b)+'h'];_0x16067b++){var _0x2fbc42=_0x35a5d4[_0x16067b][_0x144d85(0xcf1)+'rs'];for(var _0x4559f1=0x19*0x6e+-0x2194+0x16d6;_0x25545f[_0x144d85(0x1a9)](_0x4559f1,_0x2fbc42[_0x144d85(0xa1b)+'h']);_0x4559f1++){var _0x5d54f8=_0x2fbc42[_0x4559f1];if(_0x25545f[_0x144d85(0x246)](_0x5d54f8['a'],_0x12322b)){if(_0x144d85(0x252)==='vmoIE'){var _0x1f25e1={'zIhRA':function(_0x215f90,_0x4b1016){return _0x215f90===_0x4b1016;}};_0x250404[_0x2975e6]={'ptr':_0x59c68d,'firstSeen':_0x15a4f9[_0x144d85(0xc8f)](),'hits':0x0,'replaced':!!_0x241bdb};try{var _0x4d017=_0x4858b6[_0x144d85(0x3d0)+'r'](function(_0xf19a1e){var _0x12dbc4=_0x144d85;return _0x1f25e1[_0x12dbc4(0x5c6)](_0xf19a1e[_0x12dbc4(0x62a)],_0x23c329);})[-0x5*0x234+-0x2589+0x308d];_0x23dd02={'type':_0x18c544,'atMs':_0x36bc13[_0x144d85(0xd1f)](_0x13178c['now'](),_0x5493f6),'originalFunc':!!(_0x4d017&&_0x4d017[_0x144d85(0xc8d)]&&_0x36bc13[_0x144d85(0x1f8)](typeof _0x4d017[_0x144d85(0xc8d)][_0x144d85(0xd1e)+'nalFu'+'nc'],_0x36bc13[_0x144d85(0x9e9)])),'resolveGameAtFire':!!_0x361cce(),'gameSourceAtFire':_0x1bc9a8['sourc'+'e']};}catch(_0x22bb37){}}else{_0x20e579[_0x144d85(0x90b)]({'o':_0x5d54f8['o'],'v':_0x5d54f8['v'],'why':'below'+'\x20floo'+'r\x20'+_0x12322b[_0x144d85(0x5b7)+'ed'](-0x2181+0x4ca+0x1cb9)});continue;}}var _0x6ae2d5=_0x5d54f8['base']*_0x241f20['facto'+'r'];_0x25545f[_0x144d85(0x590)](_0x2cd9aa,_0x19b560,_0x5d54f8['o'],'obfF',_0x6ae2d5)&&(_0x5d54f8['st']['lastW'+'ritte'+'n']=Math[_0x144d85(0x2f7)+'d'](_0x6ae2d5),_0x3cc99f++,_0x1968dd[_0x144d85(0x90b)]('0x'+_0x5d54f8['o'][_0x144d85(0x834)+_0x144d85(0x2fe)](0xd*-0xcd+-0x2*-0xa58+-0xa37)));}}}var _0x3e1fdb={'FPScontroller':[[-0x20d3+-0x38f+0x137*0x1e,'obfF'],[0xaeb+-0x1*0xc97+0x1d4,_0x419cc1(0x79a)],[-0x6b*-0x1f+0x1853+-0x2508,_0x25545f[_0x419cc1(0xbe9)]],[0x94e+-0x201f*0x1+0x1729*0x1,_0x25545f[_0x419cc1(0xbe9)]],[0xedd+0x1*0x14ce+-0x233b,_0x419cc1(0x79a)],[0x1*0x12f5+-0x2*0x95+-0x1143,_0x419cc1(0x79a)],[-0xe*0x13a+-0x1af*0xc+-0x4c0*-0x8,_0x25545f[_0x419cc1(0xbe9)]],[-0x4*-0x7d2+-0x1*-0x94f+-0x27df,_0x25545f['ExJhA']],[0xe3+0x17fa+-0x1819*0x1,_0x419cc1(0x79a)],[-0x1f03+-0x10ed*-0x1+0xef2,'i32'],[0xbc*0xa+-0x77*-0x20+-0x1558,'v3'],[0x1*0x22a+0x3e8+-0x526,'u8'],[-0xde7*0x2+0x23+0x1*0x1c9b,_0x419cc1(0x79a)],[0x1*-0x6b6+0x1bb*0x1+-0x1b*-0x39,_0x419cc1(0xbd8)],[0xb*0x7+0x2410+-0x1*0x2351,'u8'],[-0x1766+0x247e+-0xc08,_0x419cc1(0xbd8)],[0x5a7*0x1+-0x14f*0x17+0x1986,'u8'],[0x17d3+0x1aba+0xc5e*-0x4,'u8'],[-0x7*0xa1+0x1f3*-0xd+-0x1*-0x1eda,'obfF'],[-0x55*0x20+0x752+0x1*0x482,'obfF'],[-0xe49+0x4*0x671+0x365*-0x3,'f32'],[0x1db3+0x1*-0x2dd+-0xb*0x252,_0x419cc1(0xb98)],[-0x14de*-0x1+-0x1b99+0x80f,'v3'],[0x110b*-0x1+-0x1d53+0x2fbe,'v3'],[-0x2344+-0xab0+0x2f60,_0x419cc1(0xb98)],[-0x2476*-0x1+-0x201*0xf+-0x4f7,_0x419cc1(0xb98)],[0x4*-0x21a+-0x1d66+0x2756,'u8'],[-0x537*-0x4+0x191f*0x1+-0x2c6f,_0x419cc1(0xb98)],[0x120f+-0x92c*0x4+-0x1*-0x1439,'v3'],[0x4f*-0x44+0x1*-0xd0c+0x8eb*0x4,'u8'],[-0x1a87*-0x1+0x5cb*0x1+-0x1e9e,_0x25545f['wENei']],[-0x666*-0x2+-0x2291+-0x177d*-0x1,_0x419cc1(0xb98)],[0x8*0x35+0x1*-0x11b6+0x11ca,'u8'],[0x1*0x222b+0x42c*0x1+-0x752*0x5,'u8'],[-0x2*0xac1+0x1a9e*-0x1+0x31e0,'obfF'],[-0x1257+0x1c77+0x2*-0x424,'f32'],[-0x4a*0x68+0xfe*-0x3+-0xba2*-0x3,'u8'],[-0x11*0x12a+-0x6d3*0x1+0x1c7d,_0x25545f[_0x419cc1(0xbe9)]],[-0xe60+-0x15f7+-0x264f*-0x1,'v3'],[0xe26*-0x1+0x3*-0x724+-0x1*-0x259a,_0x25545f[_0x419cc1(0xc37)]],[-0x12*0x7b+0x3*0x6fe+0xa3c*-0x1,'f32'],[0x1a4e+0x1*-0x26c3+0xe91,_0x25545f['wENei']],[-0xa7*0x4+0xe58+-0x970,_0x25545f['wENei']],[-0x136f*-0x1+0x23b0+0xb*-0x4cd,_0x419cc1(0xb98)],[-0x1*0x2f9+-0x1*0x1db7+0x2304,'f32'],[0x6ee*0x1+0x189f+-0x1*0x1d35,_0x419cc1(0xb98)],[-0x199f+0x2034+-0x439*0x1,'u8'],[0xf51+-0x234f+-0x1*-0x165b,'u8'],[-0x2*0x653+-0x2cc*0xb+-0x24a*-0x14,'u8'],[0xd*0x3a+0x1362+0x1*-0x13f4,_0x419cc1(0xb98)],[0x1d30+0x40f*0x1+-0x1edb,'u8'],[0xc3d+-0xf*0x69+-0x23*0x1b,'u8'],[-0x1*0x6e3+0x46d*-0x7+-0x2846*-0x1,_0x419cc1(0xb98)],[-0x1e87+0x639+0x1aba,_0x25545f['wENei']],[0x1*0x9e4+0x1*-0x1a9e+0x132a,_0x419cc1(0xb98)],[-0x35*-0x45+0x165f+-0x2234,_0x25545f['wENei']],[-0x9d9*0x3+-0x27*0xad+-0x1d2f*-0x2,_0x25545f[_0x419cc1(0x9b0)]],[0x1*0x1657+0x1*-0x10a9+-0x1*0x332,'f32'],[0x1*0x138f+-0x11d9*0x1+-0x1*-0xca,_0x419cc1(0xb98)],[-0x91f+-0x4aa+-0x141*-0xd,'v3'],[-0x100*-0x1+-0x434+-0x5c8*-0x1,'u8'],[-0x171+0x10d*0x22+0x13*-0x1ab,'v3'],[0x1b*-0x12d+0x1ca4+0x5bf,_0x25545f[_0x419cc1(0x9b0)]],[-0x73*0x12+-0x14f6+0x1*0x1fb8,'v3'],[0x425*0x1+0x7da+-0x947,_0x25545f[_0x419cc1(0x9b0)]],[-0x1950+-0x1066+-0x1*-0x2c72,'f32'],[0x188f+0xd11*-0x1+-0x6*0x175,_0x25545f['wENei']],[-0x14c*-0x1+0x2b*-0xb2+0x1f5e,'u8'],[-0x7*0x437+0x5d*0x1b+0x9*0x27f,'u8'],[-0x3*0x99d+0x10e*-0x10+0x307f,_0x419cc1(0xb98)],[-0x1dbf*0x1+0xf14+0x7*0x281,'f32'],[0x19f1*-0x1+-0x1*0x1c5+-0x1e9a*-0x1,'v3'],[-0x22*-0xc1+-0x1*-0x2347+0x33*-0x123,'v3'],[0x1e6+0x151f*0x1+-0x1409,_0x419cc1(0xb98)],[-0x156e+-0x2c9*0xe+0x3f6c,_0x419cc1(0xb98)],[-0x1*-0x3a4+-0x1c3c+-0xba*-0x26,_0x25545f[_0x419cc1(0x9b0)]],[0x1*-0x7ae+-0x1ec4+0x297a,'f32'],[0x1*0x24a+0x356+0x84*-0x5,'v3'],[-0xf40+0x47*0x1d+0x1*0xa4d,'u8'],[0x10*0x121+-0x1*0x213c+0x1248,'v3'],[0x2110+0x2d7*0x6+-0x2ef2,_0x25545f[_0x419cc1(0xb37)]],[-0x15*0x103+0x4f9*-0x7+-0x1d9d*-0x2,_0x25545f[_0x419cc1(0x9b0)]],[0x1880+-0x2a*0x30+0x2b*-0x50,_0x419cc1(0xb98)],[-0xc*0x1c9+0x178d+0x113,_0x419cc1(0xb98)],[0x1287+0x2030+-0x2f7b,_0x25545f['wENei']],[-0x2*0xa68+0x1*0x241+0x15cf,'u8'],[0xeef+0x920+-0x14ce,'u8'],[0x66+0x108f+-0xda9,'u8'],[-0x4*0xb2+0x1be1*0x1+-0x174*0xf,'u8'],[0x2*-0xb66+0x1dc+0xc1f*0x2,'u8'],[0x7fe+-0x1a5f+-0x9*-0x269,'f32'],[-0x26e2+0x4*-0x5f3+0x4202,_0x25545f[_0x419cc1(0x9b0)]],[0x1fd5+0x1aaa+-0x3727,'f32'],[0x143c+0x16ca+-0x27aa,_0x419cc1(0xb98)],[0x1*-0x269f+0x20ea+0x3*0x307,_0x25545f[_0x419cc1(0x9b0)]],[-0x9fa+-0x1184*-0x1+-0x76*0x9,'u8'],[0xbc8+0x15be+-0x1e1e,'f32'],[-0x730+-0x7d8*-0x2+0x1*-0x514,_0x419cc1(0xb98)],[0x15eb+0x1898+-0x2b13,'u8'],[0x115c+-0x21c1+0x13dd,'v3'],[-0xd*-0x1fd+-0x1*0x228e+-0x413*-0x3,'v3'],[0x17da+0x2*0xea2+0x18c7*-0x2,'v3'],[0x17e*-0x5+0x1b5e+-0x104c*0x1,_0x419cc1(0xb98)],[0xd5e+-0xe3*0x27+0x18d7,_0x25545f[_0x419cc1(0x9b0)]],[-0x4ef*-0x5+0x1126+-0x262d,_0x419cc1(0xb98)],[0x1c1*-0x7+-0xea4*-0x2+-0xd59,'v3'],[0xa3*0x3+0x4bc+-0x1*0x2f1,_0x25545f[_0x419cc1(0xb37)]],[-0x81b+0x1aca+-0xef7,'u8'],[0x24a4+0x1047+-0x312f,'i32'],[-0x33*0x59+0x1917*-0x1+0x2e92,_0x25545f[_0x419cc1(0x9b0)]],[0x38*-0xa5+-0x5*-0x66e+0x1*0x7b6,_0x419cc1(0xb98)],[-0x190c+-0x2c5*0x2+0x225e,_0x25545f['wENei']],[-0x43*-0xd+0x7*-0x3cb+0x1af2*0x1,'f32'],[0x38c*-0x1+0xad8+-0x37c,'v3'],[0x2240+0x1f*0x54+-0x2890,_0x419cc1(0xbd8)],[-0x4c*0x6c+-0xe43+0x3233,'u8'],[0x13bb+0x4*0x25f+-0xcab*0x2,'u8'],[-0x3de+-0x1e71+0x2631,'u8'],[-0x13*0x204+-0x2649+0x147*0x3f,_0x419cc1(0xb98)],[0x1198+-0x538+-0x878,_0x25545f[_0x419cc1(0xb37)]]],'HealthScript':[[-0x20c1+-0x1235+-0x1*-0x334e,'u8'],[-0xc1b+-0x159+0xdd0,_0x25545f['erkzh']],[0x1c09+-0x224e+0x6c5,_0x25545f['wENei']],[0x4*-0x750+0x1*0x1549+0x87b,_0x419cc1(0xb98)],[-0x3*0x6c7+-0x874+-0x13*-0x18b,'f32'],[-0x3d6+-0x169f+-0x1f*-0xdf,_0x25545f[_0x419cc1(0x9b0)]],[0x9*-0x25a+0x23d0*-0x1+0x398a*0x1,_0x25545f[_0x419cc1(0x9b0)]],[0x269f*-0x1+-0xd7*-0x29+0x4c4,_0x419cc1(0xb98)],[0x2440+-0x1b43+-0x85d,_0x25545f[_0x419cc1(0xb37)]],[0x17a0+-0x6c*0x4b+0x8a8,_0x419cc1(0xbd8)],[0x2149+-0x1f5f+0x2*-0xa1,'u8'],[-0xf75*0x2+-0x4*-0x44d+0xe5f*0x1,'u8'],[0x1*0x52f+0x22ea+-0x276f*0x1,'u8'],[0xc5b*0x2+0xe61+-0x1336*0x2,'u8'],[0x44f*0x3+0xa9a*0x2+0x1*-0x2161,'obfI'],[-0x14c2+0x65b*-0x2+0x224c,_0x419cc1(0x631)],[-0x7ff*-0x2+-0x1*-0xa84+-0x199a,_0x419cc1(0x631)],[-0x34*-0x89+-0x1189+-0x94f,_0x25545f[_0x419cc1(0x47a)]],[-0x1e4+-0x1c77+0x1f6b,_0x25545f[_0x419cc1(0x47a)]],[0x2*0xaa9+0xd9e+-0x21cc,'obfB'],[-0xa1c*0x1+-0x3*0x123+0x4e7*0x3,_0x419cc1(0x79a)],[-0xd7e+0x1ac1+-0xbfb*0x1,'f32'],[-0x89a*-0x4+-0x12bd+0x11b*-0xd,_0x25545f[_0x419cc1(0x9b0)]],[-0x1ff0+0x1158+0xfe8,_0x419cc1(0xb98)],[0x1*-0x86d+0x1223+-0x862,_0x25545f[_0x419cc1(0x9b0)]],[-0x43f+0x2*-0x2ee+0xb77,'f32'],[0x1339+0x19f4*-0x1+0x81b,'v3'],[0x4*-0x7df+0xaca*0x2+0xb58,_0x25545f['wENei']],[0x14d3+-0x1f0*-0x6+-0x1efb,_0x25545f['wENei']],[-0x12b0+-0xef*-0x7+0xda7,'u8'],[0x1*0x1a57+0x51a*-0x4+-0x463,'u8'],[0x1d2d+-0x1ce5+0x148,'i32']],'PlayerConfig':[],'WeaponManager':[[-0x1ea0+0x1*-0x1989+-0x3841*-0x1,_0x419cc1(0xbd8)],[0x123b+-0xb18+-0x707,_0x25545f[_0x419cc1(0xb37)]],[-0xd03+-0x2173+-0x2*-0x174b,'u8'],[0x247d+0x2*0x34c+-0x2af1,_0x25545f['erkzh']],[-0x2*-0x5a8+0xee3+-0x19cf,_0x25545f[_0x419cc1(0xbe9)]],[-0x25*0x6b+-0x8*0x3b9+0x17*0x1fd,_0x419cc1(0xb98)],[-0x76*0x10+-0x951+0x1*0x1135,'i32'],[0xba1+-0x1*-0x1d53+-0x1436*0x2,'u8'],[0xc*0x2ae+0x1*0x16e5+-0x3684,'u8'],[0x5df*0x1+0x1234+-0x1787,_0x419cc1(0xbd8)],[0xf9*0x1+0x5b*0x63+-0x239a,_0x25545f[_0x419cc1(0x9b0)]],[0x159b+0x3*-0x9ac+0x801,_0x419cc1(0xb98)],[0x17f*-0x11+-0xe85+0x28a0,_0x25545f[_0x419cc1(0xb37)]],[0x1a78+0x1dca+-0x3786,'u8'],[0x20a3+0x35*-0x47+-0x1114,_0x419cc1(0x631)],[-0x1*-0x21e3+-0x3f8*-0x1+-0xd*0x2d7,_0x25545f[_0x419cc1(0x47a)]],[0x2386*-0x1+-0x9*-0x202+0x4*0x49e,_0x419cc1(0xb98)],[0x20c0+-0x6ca+-0x18ee,_0x25545f[_0x419cc1(0x9b0)]],[-0x36*0x24+0x429+0x47b,_0x419cc1(0xb98)],[0xf4a+0x1e36*0x1+-0x2c68,_0x419cc1(0xb98)],[0x10d3+0x1*0x22f3+-0x32a6,_0x419cc1(0xb98)],[-0x1*0x1102+0x10*-0x23b+0xe2*0x3d,'u8'],[0x211+0x2*0x149+-0x377*0x1,_0x419cc1(0x631)],[0x2267*-0x1+0x21f8+0x1af*0x1,_0x419cc1(0x631)],[0x1*0x647+0x2*-0x463+0x59*0xb,'obfI'],[0x56a+-0x2b*0xca+0x1dec,_0x419cc1(0xbd4)],[0x26d3+-0x15c1*0x1+-0x7cf*0x2,_0x25545f['ExJhA']],[0x1c1e+0x1*-0x115f+0x93f*-0x1,_0x419cc1(0xbd4)],[0x1f45*-0x1+0x1*0x1da7+0x2d*0x12,_0x419cc1(0xbd4)],[0x135c+-0x19bf+0x807,_0x25545f[_0x419cc1(0xc37)]],[-0x1*0xb53+-0x112f*-0x1+-0x42c,_0x419cc1(0x631)],[-0x3*0x1c9+0x1419+0xcf2*-0x1,_0x25545f[_0x419cc1(0xb37)]],[0x2245+-0x1580+-0xaf5,'u8'],[0x2574+0x11f+-0x24bf,'i32'],[-0x21a3+0x306+0x2075,_0x25545f[_0x419cc1(0xb37)]],[0xe42+-0x557*-0x1+-0x1199,_0x25545f[_0x419cc1(0xb37)]],[-0x1e7b+0x9bf+0x16d0,'u8'],[0x25f7+-0x2cf*-0x7+-0x3784,'u8'],[0x2*0xb93+0xca3*-0x3+0x10e0,'u8'],[-0x101f*0x1+0x13c9*-0x1+0x2606*0x1,'u8'],[0x11*-0x115+0x5*-0x404+0x3*0xd88,'u8'],[0xe5a*0x1+0x22cb+-0x1*0x2ed5,_0x419cc1(0xbd8)],[-0xb83+-0x1e8d+0x2c68,'u8']],'GG_GameManager':[[-0x1*-0x1971+0x34*-0x4+-0x187d,'u8'],[-0x204e+-0x2*0x5cb+0x14*0x234,_0x419cc1(0xb98)],[-0x169*0x1+-0x594+-0x741*-0x1,'u8'],[0x130+-0x1*0x1bdd+-0x2*-0xd79,'u8'],[0xa*0x3cd+-0x1*0x97+-0x2523,_0x25545f['wENei']],[0xe3+0xac1*0x1+-0xb58,_0x419cc1(0xb98)],[-0x1243+-0x2670+0x23*0x1a1,'i32'],[-0x1ee3+0x1*0x266e+-0x1*0x737,'i32'],[-0x221f*0x1+-0x1010+0x3287,'u8'],[0x13*0x169+0x2*0xc23+-0x329d,'u8'],[-0x261+-0xf38+0x1*0x1211,_0x419cc1(0xb98)],[-0x33e+0x194+0x226,_0x419cc1(0xb98)],[-0x4*0x5f+0x211*-0xc+0x35b*0x8,_0x419cc1(0xbd8)],[0x1343+0x6b*0x30+0x7*-0x589,'u8'],[0x16*0xef+0x15*-0x153+-0x1*-0x7f9,_0x419cc1(0xbd8)],[0x12f*-0x1c+-0x1bda+-0x2*-0x1edd,'i32'],[-0x9d*-0xa+-0x1*0xcf9+0x797,'i32'],[-0x476+-0x1ae2+0x2040,_0x419cc1(0x631)],[-0xa22+0x571*-0x1+-0x3*-0x585,_0x419cc1(0x631)],[0x12*-0x1eb+0x2ca+0x20cc,_0x25545f['VsPit']],[-0x107c+0x16d9+-0x3*0x1bb,'u8'],[-0x474*0x6+-0x1*0x1d+0x1c05,_0x25545f[_0x419cc1(0xb37)]],[-0x17e9+0x24c4*-0x1+-0x3e11*-0x1,'u8'],[0x2176+0x1*-0xa5b+-0x2b*0x81,_0x25545f['wENei']],[0x7d8+-0x1*-0x137d+-0x185*0x11,'u8'],[-0x32b+0x39*-0x63+0x3d2*0x7,'u8'],[-0x1*0x27e+0x26cf*-0x1+0x2af1*0x1,'u8'],[-0x6*-0x1d9+-0x66*-0x19+-0x1364,_0x419cc1(0xbd8)],[0x1b9+-0x73*-0x1d+0x24*-0x5d,_0x419cc1(0xb98)],[0x913*0x3+0x632*-0x3+-0x251*0x3,'u8'],[-0x50a+0x478+0x1*0x243,'u8'],[0x1*-0x1957+-0x659*0x5+0x3acc,'i32'],[-0x1*-0x11fd+0x3b*-0xa7+0xb1e*0x2,_0x419cc1(0xbd8)],[0x583+-0x129f*-0x2+-0x2901,_0x25545f[_0x419cc1(0x9b0)]],[-0x1b3c+0x12c0+0xa40,_0x419cc1(0xbd8)],[0x2308+-0x92+-0xb2*0x2f,_0x25545f[_0x419cc1(0x9b0)]],[0x1007+0x529+-0x49*0x44,_0x25545f['erkzh']],[-0xd*-0x24d+-0x1*-0x127d+-0x2e96,_0x419cc1(0xbd8)]],'TDM_GameManager':[[0xc8f*0x1+-0x2400+0xf1*0x19,'u8'],[-0xea+0x21e8+-0x20de,'u8'],[-0x2*0x92f+-0x1*-0xc2+-0x11bd*-0x1,'u8'],[0x1*-0x1d18+-0x2238+-0x1*-0x3f74,'f32'],[-0xf4*-0x18+-0x6f9+-0xf8f,'u8'],[0x1163+-0x1*0x1fe7+0xee0,_0x419cc1(0xb98)],[-0x1269+0x5bc*-0x4+0xb*0x3cb,_0x419cc1(0xb98)],[-0x825+-0x2380+0x2c09*0x1,'i32'],[0x241d+0x44*-0x15+-0x1e21,'i32'],[-0x2437+-0x2*0x107+-0x7*-0x587,'u8'],[-0x16*-0xb+-0x188b+0x1806,'u8'],[-0x1914+-0x2705+0x4089,'f32'],[-0x2*0x326+0x6dc+0x1c*-0x1,'f32'],[0xbb5+0x1*0x27b+-0xdb8*0x1,_0x25545f[_0x419cc1(0xb37)]],[-0x236*0x2+0x1b90+-0x1698,'u8'],[0x190+0x79d+0x3*-0x2df,_0x419cc1(0x631)],[-0x7*0x2a+0x73d*-0x3+0x17b5*0x1,'obfI'],[-0x685*-0x3+-0x1ea2+-0x53*-0x25,_0x25545f['VsPit']],[-0x7d6+0xeb+0x7eb,_0x419cc1(0x631)],[-0x3c2+-0x1533+0x1f*0xd7,'u8'],[0x1*0x1f49+0x1101+-0x2eee,'u8'],[-0x1*-0x1a4d+0x168*-0xd+-0x1b*0x3f,'i32'],[-0x17*-0x5d+0x14a5+-0x1b94,'u8'],[-0x14*-0x1a9+-0x50f+-0x1aa1*0x1,'u8'],[-0x2*-0x12f4+-0x2063+-0x3fd,_0x419cc1(0xb98)],[0x1*0x1477+0xfa8+-0x35*0xa7,_0x25545f['erkzh']],[-0x1*-0xf53+0xb72+-0x1935,_0x419cc1(0xbd8)],[-0x35+0x3*-0x1c6+0x11*0x6b,'f32'],[0x9f7+0x83c+-0x109b,_0x25545f['erkzh']],[0x37*0xa3+0x5a5+-0x270e,_0x25545f[_0x419cc1(0xb37)]],[-0x1*-0x1912+0xd71+-0x24e3,'f32'],[-0x178e+0x2686*-0x1+-0x2*-0x1fdc,_0x419cc1(0xb98)],[-0x1*0x21f9+-0x2*-0x9d7+0xff3,_0x419cc1(0xbd8)],[-0x18ed*-0x1+0x17db+0x448*-0xb,'u8'],[-0xf9a+-0x1336+0x2481,'u8'],[-0xa39*-0x3+-0x7ea*0x3+-0x1*0x535,'f32']],'PhotonNetworkSync':[[0x20f9+0x286+-0x41*0x8b,'v3'],[0x1463+-0x1*-0x7eb+-0x18f*0x12,_0x25545f[_0x419cc1(0xb37)]],[0x166+0x7d*-0x5+0x14f,'u8'],[-0x3*0x20+0x952*0x3+-0x1b51,'u8'],[-0xe12+-0xfee+0x1e48,'v3'],[-0x12fc+0x16a*0x10+-0x350,'u8'],[-0x122b*-0x1+-0x487+-0xd4c,'i32'],[-0x1526+-0x1*0xa5e+0x1fe0,_0x419cc1(0xbd8)],[0x1fa3+0x1*-0x156a+-0x9d9,_0x25545f['wENei']],[-0x841*-0x1+0x301+-0xade,'f32'],[-0xf6d+-0x1*0x22f9+0x32ce,'f32'],[-0x3c4+-0x58f*-0x1+0x27*-0x9,'v3'],[0x2*-0xc8f+0xaa7+0xeef,'f32'],[0x2b*0x46+-0x14e1+0x99b,_0x419cc1(0xb98)],[-0x1*-0x227f+-0x3*-0x803+0x1d04*-0x2,_0x419cc1(0xbd8)],[-0x17dd*0x1+-0x1b05+0x336a*0x1,_0x419cc1(0xb98)]],'MouseLook':[[0x19a1+0x2*0xdbe+-0x3509*0x1,'f32'],[0xc4b+0x146+-0xd79,_0x25545f['wENei']],[0x1627+0x14*0x149+-0x2fbf*0x1,_0x25545f['wENei']],[0x2540+-0x1719+-0xe07,_0x419cc1(0xb98)],[-0x1835+-0x26cc+0x3f25,'f32'],[-0x95*-0x31+0x1bab+0x701*-0x8,_0x419cc1(0xb98)],[-0x13eb*0x1+0x1*0x2e9+0x2*0x899,_0x25545f[_0x419cc1(0x9b0)]],[-0x1640+-0x737+0x23*0xd9,'u8'],[0x3*-0x273+-0x2*0x1237+0x2bff,_0x25545f['wENei']],[-0x1*-0x10c9+0x1555*0x1+0xd*-0x2ea,_0x419cc1(0xb98)],[-0x1c83+0xf72+0x1*0xd51,'i32'],[-0x1920+0x145+0x181f,'u8'],[-0xf09+-0x7*0x295+0x2164,'v2']],'NetworkPlayerAnimations':[[0x198d*0x1+0xe4d*0x2+-0x357f,'v3'],[0x3b*0x89+-0x2481+0x5a2,'v3'],[-0x3*0x27+-0x1386+0x6e9*0x3,'u8'],[0x2023+0x9a2+0x1*-0x2901,_0x25545f[_0x419cc1(0xb37)]],[0x10ba*0x2+0x1*0x1b73+-0x3c1f,'i32'],[0x16d8+0x14*-0xd2+-0x5a4,_0x25545f[_0x419cc1(0x9b0)]],[0x1*-0x2093+-0x1c42+0x3da5,_0x25545f['wENei']],[-0x1d*0x6d+0x1c5d+-0x308*0x5,_0x25545f[_0x419cc1(0x9b0)]],[0x18ed+0x1ba4+-0x33b1,_0x419cc1(0xb98)],[0x135e+-0x1*0x2629+0x13b3,_0x25545f['wENei']],[0x1*0x102b+0x7*0x481+-0x2ec6,_0x419cc1(0xb98)],[0x4fa+0xba3+-0xfad,_0x419cc1(0xb98)],[0x426+-0xa9*-0x1+-0x3db*0x1,'f32'],[0x1d98*0x1+0x2350+-0x3ff0,_0x25545f[_0x419cc1(0x9b0)]],[0x1880+0x69*0x25+-0x26b1,_0x25545f[_0x419cc1(0x9b0)]],[-0x101c+0x260d+-0x14f1,'f32'],[-0x1*-0x5e+-0x16a+-0xc*-0x2c,_0x419cc1(0xb98)],[-0x2ef+0x5bc+-0x1c5,'i32'],[0x2*0x557+0xc61+-0x1603,'u8'],[0x943+-0x1549*-0x1+-0x4*0x75f,_0x25545f[_0x419cc1(0xb37)]],[0x81e*0x2+-0xb4b*-0x1+-0x1a73,_0x419cc1(0xbd8)],[0x23bc*0x1+0x2358+-0x117f*0x4,'u8'],[0x10c1*-0x1+0x13*-0xb5+0x1f4c,'f32'],[0x59e*0x2+-0xb8+-0x964,_0x25545f['wENei']],[-0x238b+-0x175c+0x329*0x13,_0x25545f[_0x419cc1(0x9b0)]],[0x1*-0x1205+-0x1813*-0x1+-0x4e6,_0x419cc1(0xb98)],[0x1*-0x13+-0x752*-0x2+-0x7f*0x1b,'u8'],[0x206a+-0x1984+-0x5ae,'u8'],[-0x1b22+0x18f*-0x6+0x11*0x238,'v3'],[-0x8*-0x19+-0xff9+-0x1079*-0x1,'v3'],[0x5*0x5bb+0x7*0x2d4+-0x2edf,'u8']],'NPC_Cotroller':[[0x9d3*0x3+0x2*-0x1151+0x53d,'v3'],[-0xf*-0x53+0x1*-0x1b73+0x16b6,_0x419cc1(0xb98)],[-0x941*0x4+0x17b3+-0x109*-0xd,_0x25545f['wENei']],[0xd51*-0x2+-0xabd*-0x3+-0x53f,'u8'],[-0x89*-0x43+-0x1612+-0xd72,'u8'],[-0x1a6e+0xd*-0x2b3+0x3de1,'v3'],[0x513*-0x1+0x1ea2+-0x18f3,'u8'],[-0x4*0x564+0x2d1+0x135f,_0x25545f[_0x419cc1(0x9b0)]],[0x1f04+-0x1*-0xb9d+-0x29fd,_0x25545f[_0x419cc1(0x9b0)]],[-0x1*0x80c+0x167*0x17+0x177d*-0x1,_0x25545f['wENei']],[-0x10da+0x130e+-0x178,_0x25545f['wENei']],[-0x29*-0x79+-0x15a5+0x1e*0x1a,'u8'],[-0x112f+0x97f*0x1+0x87c,_0x25545f[_0x419cc1(0x9b0)]],[-0x3*0x25b+0x352*0x2+0x145,_0x25545f[_0x419cc1(0x9b0)]],[-0x31*-0x74+0x1f4b+0x113*-0x31,_0x419cc1(0xb98)],[-0x6fb+0x679*0x6+-0x1efb,_0x25545f[_0x419cc1(0x9b0)]],[-0xd61+0x1015+-0x1d*0x10,'u8'],[0x2005+-0xa*-0x11b+-0x2a27,_0x419cc1(0xb98)],[-0x258c+0x13af*0x1+0x12cd*0x1,'v3'],[-0x11b5*0x2+-0x3*-0x59f+0x1389,_0x419cc1(0xb98)],[-0x1*0x17f3+-0x953+0x6b*0x52,_0x419cc1(0xbd8)],[-0x1*0x8b7+0x12d*-0xa+0x157d,_0x419cc1(0xb98)],[0x769+0x52d+-0xb8e,_0x25545f[_0x419cc1(0x9b0)]],[0xf6d*-0x1+0xc2a+0x44f,_0x419cc1(0xb98)],[-0x510*0x2+-0x1ef3+-0x1*-0x2a27,'v3'],[0x628+-0x6ad*-0x4+0x4*-0x7ef,_0x25545f[_0x419cc1(0x9b0)]],[0x1*-0x1c3d+-0x19f7+0xa1*0x58,'f32'],[-0x1f*-0x92+-0x1*0x1893+0x819,'v3'],[-0x8fb+0x1b77*0x1+-0x1138,'u8'],[-0x4c1*-0x1+-0x1257*0x1+-0x76f*-0x2,_0x25545f['wENei']],[0x1*-0x2521+0x13f0*-0x1+0xf5*0x3d,'v3'],[0xa7e*-0x3+0x10e4+0x3*0x552,'i32'],[0x7e2*-0x4+-0x87*-0x2+0xaa2*0x3,_0x25545f[_0x419cc1(0xb37)]],[-0x7c2+-0x13b8+0x1cea,_0x25545f['wENei']],[-0x134d+0x1ac2+-0x601,'u8'],[0x5*0x481+0x3*-0x5e2+-0x367,'v4'],[0x12a1+0x87*-0x47+-0xe*-0x174,_0x25545f[_0x419cc1(0x9b0)]],[0xb*0xb5+0x2603*-0x1+-0x153*-0x18,'f32'],[0x2175+-0x1*-0x80f+-0x9fd*0x4,_0x25545f[_0x419cc1(0x9b0)]],[-0x116d+0x3*-0xa57+0x320a,'u8'],[0x6b3+-0xbc5+-0x6b2*-0x1,'i32']],'TargetHealth':[[-0x32b*0x1+0x1675+-0x133a,'i32'],[0xfc4+-0xc9a+-0x18b*0x2,'i32'],[-0x1d5c+-0x3c1+0xb1b*0x3,'u8'],[-0x22cf*0x1+0x1515+0xdfe,'i32'],[-0x1eae+-0x149*0x4+0x241a,_0x419cc1(0xbd8)],[0xdc5+-0x15f0+0x877,_0x419cc1(0xbd8)],[-0x11a7+-0x3*0xa08+0x300f*0x1,_0x25545f['erkzh']],[-0x1f91*-0x1+-0x1db0+-0x15d,_0x25545f[_0x419cc1(0x9b0)]],[-0x2369+0x4bf*0x3+0x116*0x14,_0x25545f[_0x419cc1(0x9b0)]],[0xfdd+-0x7e2*0x4+-0x3*-0x569,'u8'],[0x260e+0xb*-0x6d+0x16d*-0x17,'f32'],[0x1067+0xd*0x245+-0x2d44,'u8'],[0xb9b*-0x2+0x3*0x8d+0x2f*0x79,_0x419cc1(0xbd8)],[0x3a*0x89+-0x172d*-0x1+0x3*-0x11d9,_0x25545f[_0x419cc1(0xb37)]],[0xb*0x157+0x3*-0x74b+0x7e4,_0x419cc1(0xb98)],[0xc11*0x1+0x721*-0x2+0x2fd,'u8']],'SectatorCamera':[[0x830+-0xa0e+0x53*0x6,_0x419cc1(0xb98)],[-0x1*-0x164c+0x24cb*0x1+-0x3aff,_0x419cc1(0xb98)],[-0x67a+0x6e8*0x4+-0x1*0x150a,_0x25545f['wENei']],[0x2195+-0x1fbe+0x1b7*-0x1,'v3'],[-0x57b+0x681*-0x4+0xb*0x2e1,'v3'],[0x1aca+0x5e8*-0x1+-0x149a,_0x25545f['erkzh']],[-0x1bc+0x1*0x983+-0x77b*0x1,_0x419cc1(0xbd8)],[-0x805*-0x3+-0x192c+0x16d,_0x419cc1(0xb98)],[0x16fe+-0x1559+-0x1*0x151,_0x419cc1(0xbd8)],[-0x1*-0x1f1b+0x19*0x187+0x1*-0x44f2,_0x419cc1(0xb98)],[0x6fa+-0x1788+0x5*0x362,'u8'],[-0x8*-0x21c+0x225a+0x196d*-0x2,'v3'],[0x164e+0x1*-0x9a5+-0x1*0xc3d,'v4'],[0xb*-0x143+0x1*0x37e+0xadf,'u8'],[0x2*0x783+-0xb8e+-0x2f8,'i32']],'UISettings':[[0x1d33+0xc*0x223+-0x36b7,_0x419cc1(0xbd8)],[-0xdf3+-0x32b*-0x4+0x16f,'f32'],[-0x778*-0x1+-0x1*-0x89e+-0x1*0xed2,'u8'],[-0x2*0x76f+0x290+-0x2f*-0x4a,_0x419cc1(0xbd8)],[-0x14d6+0xeef*-0x2+0x3408,'i32'],[-0x186a+-0x1*-0xe8d+0x13*0x97,_0x25545f['erkzh']],[0x60+-0x1b8c+-0x16*-0x14c,'u8'],[-0x24fb*0x1+0xe6b*-0x1+-0x1*-0x34c3,'u8'],[-0x1c28+-0x22cd+0x4053,'u8'],[-0xd*0x1a7+-0xe*-0x19e+-0x36*-0x1,'u8'],[0xb2+-0x1*0x183b+0x18e9,'u8'],[-0x389+-0x17e4+-0x1*-0x1cce,'u8'],[0xa00+0x1b92+-0x2430,'u8'],[-0x1f3*0xb+-0x158f+-0x1c*-0x199,'f32'],[0x146*0x6+-0xf*0x10f+0xa01,_0x25545f['wENei']],[-0x1561+-0x180d+0x2f86,'u8'],[-0x1bbc+0x61*-0x4d+0x3b69,'f32'],[-0xc*-0x42+0x55c+-0x175*0x4,_0x419cc1(0xbd8)],[0x1*0x1717+0x1ab7+0x5*-0x95e,'u8'],[0x8e1+-0x41c+-0x129,'u8'],[0x13b4+-0x61*-0x7+0x89*-0x23,'v2'],[-0x175c+0x621*0x6+-0x9c2,'v2'],[0xdd*-0x5+-0x21c1+0x2*0x14e1,'u8'],[0x26e+0x1aac+-0x1962,'u8'],[0x11*-0x5b+0x1*0x1787+-0xc*0x124,_0x25545f['wENei']],[0x1a54+-0x667*-0x2+0x11a9*-0x2,'v3'],[0x7*0x473+-0x8f*0x1+0xd*-0x20e,_0x25545f[_0x419cc1(0x9b0)]],[0x17d0+-0x71*0x31+0x1b5*0x1,'f32'],[0x25e1*-0x1+-0x269d*0x1+-0x29*-0x1f6,_0x25545f['wENei']],[-0x1*-0x1c6a+-0x1c79+0x155*0x3,'u8'],[-0x9*-0x19b+-0x1b7a*-0x1+-0x25fc,'u8'],[0x699*-0x2+-0x1bb6+0x74*0x63,'i32'],[-0x2*0x10e3+-0x112*0x20+-0x6*-0xc01,_0x25545f[_0x419cc1(0xb37)]],[0x13e*-0x1b+0x245b+-0x133*-0x1,_0x419cc1(0xbd8)],[0x1620+0x8c1+0x3*-0x8f3,_0x419cc1(0xbd8)],[-0x1*0xffd+0x902+0xb07,_0x419cc1(0xbd8)],[-0x2601+-0x244+0x2c55,_0x25545f['erkzh']],[0x2323+-0x1001+-0xf0e*0x1,_0x25545f[_0x419cc1(0xb37)]],[0xa*-0x113+-0x1cd+-0x1*-0x10a3,_0x25545f[_0x419cc1(0xb37)]],[-0x16ac+-0x7*-0x445+-0x109*0x3,'i32'],[0x13a2+-0x1*-0x92d+0x1*-0x18af,_0x25545f['erkzh']],[0xd4c+0xd4*0x6+-0x8*0x1be,'u8'],[-0x3*0x2ab+0xddd+0x187*-0x1,'u8'],[-0xa38+-0x6e*-0xc+-0x6*-0x191,'u8'],[0x79+0x248d+0x1*-0x20af,'u8'],[-0x806+-0x2180+0x2e12,_0x419cc1(0xb98)]]},_0x415dc6={},_0x5c7ec5={};function _0x402abd(_0x16897e,_0x46ee7a,_0x3439bd){var _0x50559d=_0x419cc1,_0x2f4169={'xWiJo':_0x25545f[_0x50559d(0x7b0)],'QwbmD':function(_0x4a5554,_0x3aaa31){return _0x4a5554!==_0x3aaa31;},'wSqPm':_0x25545f['sKWxo'],'PNNYF':function(_0x3d3ace){return _0x3d3ace();},'SqHpT':function(_0x343186,_0x4d659d){return _0x343186+_0x4d659d;}};return function(_0xa9e76d){var _0x2970cd=_0x50559d,_0x39fe0f={'Hmwqo':function(_0x41b01f,_0x21904a){return _0x41b01f/_0x21904a;},'Pokgd':function(_0xc95381,_0x417004){var _0x5774f5=_0x29e5;return _0x25545f[_0x5774f5(0x77a)](_0xc95381,_0x417004);},'ZSvqK':function(_0x3b78d8,_0x10c93b){var _0x33b114=_0x29e5;return _0x25545f[_0x33b114(0x771)](_0x3b78d8,_0x10c93b);},'obiUe':function(_0x4ace2c,_0x1a05ac){return _0x4ace2c*_0x1a05ac;},'WwMaw':function(_0x3cb671,_0x41909b){return _0x3cb671*_0x41909b;},'SVnot':function(_0x30f271,_0x417b1c){var _0x1e8f4=_0x29e5;return _0x25545f[_0x1e8f4(0x711)](_0x30f271,_0x417b1c);},'dhxXZ':_0x25545f['MvvJf'],'WHRSB':_0x2970cd(0x294)+'paren'+'t','Byaym':function(_0x11c7bb,_0x260fec){return _0x11c7bb!==_0x260fec;},'tIonQ':function(_0xfd5b40){return _0xfd5b40();},'FTRRp':function(_0x31a839,_0x3722f7){return _0x31a839-_0x3722f7;}};try{var _0x436a97=_0xa9e76d&&_0xa9e76d['val']?_0xa9e76d[_0x2970cd(0x163)]():0x1485+0x48b*-0x4+-0x259;if(!_0x436a97)return;var _0x814030=_0x5c7ec5[_0x16897e]||(_0x5c7ec5[_0x16897e]={}),_0x4bbc8b=_0x814030[_0x436a97];if(!_0x4bbc8b)_0x4bbc8b=_0x814030[_0x436a97]={'ptr':_0x436a97,'firstSeen':Date[_0x2970cd(0xc8f)](),'hits':0x0};_0x4bbc8b[_0x2970cd(0xa4e)]++;if(_0x3439bd){if(!_0x415dc6[_0x436a97])_0x415dc6[_0x436a97]={'ptr':_0x436a97,'kind':_0x16897e,'firstSeen':Date[_0x2970cd(0xc8f)](),'hits':0x0};_0x415dc6[_0x436a97]['hits']++;}else{var _0x2e860f=_0x2e79eb[_0x16897e];if(!_0x2e860f||_0x25545f['mTOYH'](_0x2e860f['ptr'],_0x436a97)){if(_0x25545f[_0x2970cd(0xbd6)](_0x2970cd(0x5cd),_0x2970cd(0x5cd))){var _0x221b80=(_0x2970cd(0xbd2)+_0x2970cd(0x4ef))['split']('|'),_0x13e30f=0x4*-0x410+0x1cba+-0xc7a;while(!![]){switch(_0x221b80[_0x13e30f++]){case'0':var _0x3fbacb=_0x58e63d['x']-_0x3cea7f['pos'][0x16f*-0x5+0x1816+-0x3d*0x47],_0x4d3580=_0x27a5e7['y']-_0x4c5581['pos'][-0x2353+-0x1*0x2405+-0xe45*-0x5],_0x69a555=_0x42fd90['z']-_0x2d8192['pos'][0x7*-0x556+-0x19c7+0x3f23];continue;case'1':if(_0x503dd6>-0x11*-0x204+0xd2b*0x2+-0x1e4d*0x2+0.5)_0x4bf5cc=_0x39fe0f['Hmwqo'](_0x5aec77,_0x503dd6)/(_0x1a8900*_0x6eb923);continue;case'2':var _0x503dd6=_0x39fe0f[_0x2970cd(0x371)](_0x39fe0f[_0x2970cd(0x984)](_0x3fbacb,_0x26e6e0[0x1ac5+0x26b1+-0x95a*0x7])+_0x39fe0f[_0x2970cd(0x311)](_0x4d3580,_0x26e6e0[0x26ba+0x2*-0x40f+0x1*-0x1e9b]),_0x69a555*_0x26e6e0[0x20c3*-0x1+-0x607*0x1+0x26cc]);continue;case'3':var _0x5aec77=_0x39fe0f[_0x2970cd(0x371)](_0x3fbacb*_0x401285[-0x4b5+-0x13*0x35+0x8a4],_0x4d3580*_0x401285[0x1*-0x1693+-0x1*0x8b7+0x1f4b])+_0x39fe0f[_0x2970cd(0x7fb)](_0x69a555,_0x401285[0x1f34+0x1*0x156b+-0x349d]);continue;case'4':var _0x26e6e0=_0xa714bb[_0x2970cd(0x2b7)],_0x401285=_0x301f56[_0x2970cd(0x963)];continue;}break;}}else{_0x2e79eb[_0x16897e]={'ptr':_0x436a97,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0x2e860f};try{if('wkVHX'===_0x2970cd(0x23c))_0x15705d[_0x2970cd(0xe00)+'onten'+'t']=_0x17590a[_0x2970cd(0x7dc)]&&_0x15ddcd[_0x2970cd(0x7dc)]['lengt'+'h']?_0x39fe0f[_0x2970cd(0x148)](_0x2970cd(0x899)+_0x2970cd(0x40d)+_0x2970cd(0x8eb)+_0x2970cd(0x70b),_0x4b6273[_0x2970cd(0x7dc)][_0x2970cd(0x5aa)](',\x20')):_0x2970cd(0x7a3)+_0x2970cd(0x39d)+'hile\x20'+_0x2970cd(0x52c)+'ng\x20/\x20'+_0x2970cd(0x26b)+_0x2970cd(0xdbc)+_0x2970cd(0x72b)+_0x2970cd(0xb21)+_0x2970cd(0x66e)+_0x2970cd(0x1b1)+'h\x20fie'+_0x2970cd(0x509)+_0x2970cd(0x1b1)+'h.';else{var _0x486f75=_0x23ed4d[_0x2970cd(0x3d0)+'r'](function(_0x2353a3){var _0x4829bd=_0x2970cd;if(_0x4829bd(0x715)===_0x2f4169['xWiJo'])return _0x2353a3[_0x4829bd(0x62a)]===_0x16897e;else _0x1cf5cc=_0x332746();})[-0x4*0xad+-0x1*-0x22c1+-0x200d*0x1];_0x35baed={'type':_0x16897e,'atMs':Date[_0x2970cd(0xc8f)]()-_0x5ec9af,'originalFunc':!!(_0x486f75&&_0x486f75[_0x2970cd(0xc8d)]&&_0x25545f[_0x2970cd(0xcec)](typeof _0x486f75['hook']['origi'+_0x2970cd(0x2cc)+'nc'],'funct'+'ion')),'resolveGameAtFire':!!_0x1b140c(),'gameSourceAtFire':_0x5c0a6e['sourc'+'e']};}}catch(_0x41794){}}}}if(_0x16897e===_0x25545f['GapTR']&&_0x241f20['on']){if(_0x25545f[_0x2970cd(0x27b)](_0x25545f[_0x2970cd(0x668)],_0x25545f['ctbyg']))try{_0x25545f[_0x2970cd(0x68d)](_0x4a3406,_0x436a97);}catch(_0x39d296){}else try{var _0x277c40=('1|6|5'+_0x2970cd(0x5a7)+_0x2970cd(0x4e8))[_0x2970cd(0xb76)]('|'),_0x2b8e58=-0x1550+0x19fe+-0x257*0x2;while(!![]){switch(_0x277c40[_0x2b8e58++]){case'0':var _0x52c756=!_0x3d18cd['on']?_0x2970cd(0x495)+'ff':_0x43cb30[_0x2970cd(0x3ca)]?_0x39fe0f[_0x2970cd(0x7e2)]:_0x2970cd(0x9e4)+'ap';continue;case'1':var _0x419a6a=_0x16682c&&_0x33897d['esp'];continue;case'2':_0x419a6a['style'][_0x2970cd(0xc44)+'round']=_0x316be3['on']?_0x23b8ff:_0x39fe0f['WHRSB'];continue;case'3':if(_0x39fe0f[_0x2970cd(0x7f0)](_0x52c756,_0x419a6a['textC'+'onten'+'t']))_0x419a6a[_0x2970cd(0xe00)+'onten'+'t']=_0x52c756;continue;case'4':_0x419a6a['style'][_0x2970cd(0x8d2)]=_0x366bae['on']?_0x2970cd(0x8a6)+'1b':'#f7ee'+'f5';continue;case'5':if(_0x1dcc11['boxes']&&!_0x39fe0f['tIonQ'](_0x11ba07))_0x1d908d[_0x2970cd(0x3ca)]=![];continue;case'6':if(!_0x419a6a)return;continue;}break;}}catch(_0xf7afe4){}}if(!_0x46ee7a){if(_0x2970cd(0xbc5)===_0x25545f[_0x2970cd(0x3fb)]){var _0x486f75=_0x23ed4d[_0x2970cd(0x3d0)+'r'](function(_0x9ff3e8){var _0x32ca87=_0x2970cd;if(_0x2f4169['QwbmD'](_0x2f4169[_0x32ca87(0x65e)],_0x32ca87(0x7f3)))return _0x9ff3e8[_0x32ca87(0x62a)]===_0x16897e;else{var _0x343dc1=(_0x32ca87(0xc7a)+'|4|3')['split']('|'),_0x414f06=0x2170+-0x2*0x2c0+0x2*-0xdf8;while(!![]){switch(_0x343dc1[_0x414f06++]){case'0':_0x2c3db8[_0x32ca87(0xa4e)]=_0x51c242[_0x5c21af[_0x76dd60]]['hits'];continue;case'1':var _0x2c3db8=_0x57c169('NPC_C'+_0x32ca87(0xddf)+_0x32ca87(0x36a),_0x58a3af[_0x3d9a6c[_0x2726ed]][_0x32ca87(0x936)]);continue;case'2':_0x2c3db8[_0x32ca87(0x738)+_0x32ca87(0xda2)+'s']=_0x39fe0f[_0x32ca87(0x2c1)](_0x361b39[_0x1d82ba[_0x1a9687]][_0x32ca87(0x738)+_0x32ca87(0x599)],_0x3b5a53);continue;case'3':_0xbe1607['bots'][_0x32ca87(0x90b)](_0x2c3db8);continue;case'4':if(_0x2c3db8[_0x32ca87(0x7e8)]['healt'+'h'])_0x2c3db8[_0x32ca87(0x80f)+'h']=_0x36acdd(_0x4b8f26(_0x2c3db8['refs']['healt'+'h'],-0x20a+0x10bd+-0xea3),_0x32ca87(0x78d)+_0x32ca87(0x929)+'pt',_0x32ca87(0x631));continue;}break;}}})[0xa8a+-0x1*-0x12e9+-0x7*0x435];if(_0x486f75&&_0x486f75['hook'])try{_0x486f75[_0x2970cd(0xc8d)][_0x2970cd(0x555)+'ed']=![];}catch(_0x37e412){}}else{var _0x35bd9a=_0x2f4169[_0x2970cd(0x2d4)](_0x57eeda);if(!_0x35bd9a)return null;return{'ptr':_0x2f4169['SqHpT']('0x',_0x35bd9a[_0x2970cd(0x936)][_0x2970cd(0x834)+'ing'](-0x26b9+0x1b*0x4e+0x1e8f)),'feet':_0x35bd9a['feet'],'eye':_0x35bd9a[_0x2970cd(0x553)],'posAt':_0x35bd9a['posAt'],'copies':_0x35bd9a[_0x2970cd(0x448)+'s'],'cluster':_0x35bd9a['clust'+'er'],'eyeHeight':_0x2e3c3d,'pitch':_0x35bd9a['pitch'],'yaw':_0x35bd9a[_0x2970cd(0x559)],'reach':_0x35bd9a[_0x2970cd(0x164)]};}}}catch(_0x2d71ad){}};}function _0xb0851f(){var _0x3bec44=_0x419cc1;if(_0x23ed4d['lengt'+'h'])return!![];if(!window['Unity'+_0x3bec44(0x3c8)+_0x3bec44(0xba2)]||!window['Unity'+'WebMo'+'dkit']['Runti'+'me'])return![];var _0x5da1a9=window['Unity'+_0x3bec44(0x3c8)+'dkit'][_0x3bec44(0x57d)+'me'];if(!_0x5da1a9['plugi'+'ns']||!_0x5da1a9['plugi'+'ns']['lengt'+'h'])return![];_0x265b56=window[_0x3bec44(0x571)+_0x3bec44(0x3c8)+_0x3bec44(0xba2)]['Value'+_0x3bec44(0x68b)+'er'],_0x235ba0=_0x235ba0||_0x5da1a9[_0x3bec44(0x691)+'ns'][_0x5da1a9[_0x3bec44(0x691)+'ns'][_0x3bec44(0xa1b)+'h']-(0x1*-0x19c6+0x624+0x1*0x13a3)];if(!_0x235ba0||typeof _0x235ba0[_0x3bec44(0x91a)+'refix']!==_0x3bec44(0x723)+_0x3bec44(0xc6b))return![];for(var _0x51ec59=-0x263c+0x363+0x22d9;_0x51ec59<_0x285d1f['lengt'+'h'];_0x51ec59++){var _0x1c4a35=_0x285d1f[_0x51ec59];try{if(_0x25545f[_0x3bec44(0x7c7)]===_0x25545f[_0x3bec44(0x45b)])return _0x25545f[_0x3bec44(0xdc2)](_0x274b59['round'](_0x32e4b0*(0x1*-0xdb2+0xfe+0xd18)),-0x3*0x49d+-0x13*-0x43+0x942);else{var _0x2794ce=_0x235ba0[_0x3bec44(0x91a)+'refix']({'typeName':_0x1c4a35[_0x3bec44(0x62a)],'methodName':_0x25545f[_0x3bec44(0x6b9)],'params':[_0x3bec44(0xbd8),_0x25545f[_0x3bec44(0xb37)]],'returnType':undefined},_0x402abd(_0x1c4a35['type'],_0x1c4a35[_0x3bec44(0xaf7)],_0x1c4a35['many']));_0x23ed4d[_0x3bec44(0x90b)]({'type':_0x1c4a35['type'],'hook':_0x2794ce,'keep':_0x1c4a35[_0x3bec44(0xaf7)]});}}catch(_0x508b9b){if(_0x25545f[_0x3bec44(0x196)]!==_0x25545f[_0x3bec44(0xa45)])_0x437528['push'](_0x25545f[_0x3bec44(0x9fc)](_0x1c4a35[_0x3bec44(0x62a)]+':\x20',String(_0x508b9b&&_0x508b9b[_0x3bec44(0x650)+'ge']||_0x508b9b)[_0x3bec44(0x634)](-0x2216*-0x1+0x6d3+-0x3*0xda3,0x1cc9+0x2c*-0xdd+0x1*0x9d3)));else return _0x25545f['VHKuK'](_0x5ef802['v'],_0x1dc3da)&&_0x1ef6dd(_0x1a20b9['v']);}}return _0x23ed4d[_0x3bec44(0xa1b)+'h']>0x76a*0x2+0x8c*-0x28+0xa4*0xb;}function _0x781082(_0x2c4511,_0x4305e1){var _0x39bd84=_0x419cc1,_0x5c1082={'tbIBK':function(_0xcc7404,_0x349ebf){var _0x1e7bcc=_0x29e5;return _0x25545f[_0x1e7bcc(0x216)](_0xcc7404,_0x349ebf);},'gyASR':function(_0x1d94b6,_0x54d958){return _0x1d94b6+_0x54d958;},'XleEV':function(_0x169705,_0x3ebbf2){return _0x25545f['LiiKG'](_0x169705,_0x3ebbf2);},'PquhM':function(_0x209ab0,_0x3ade51){return _0x209ab0===_0x3ade51;},'EPnWJ':_0x39bd84(0x376)+'t','sqNkl':_0x25545f[_0x39bd84(0x629)],'CbQUX':_0x39bd84(0x723)+'ion','HyRXh':_0x39bd84(0x2df),'axjfy':function(_0x7da292,_0x5466ed){var _0x194840=_0x39bd84;return _0x25545f[_0x194840(0x49c)](_0x7da292,_0x5466ed);},'hnpxy':function(_0x58fe78,_0x3c35c6){return _0x58fe78===_0x3c35c6;},'lUrnp':'udMbh','eZeBb':function(_0x4cd3ce,_0x303f14){return _0x25545f['XXfJs'](_0x4cd3ce,_0x303f14);},'xxeGU':function(_0x471f8f,_0x199674){var _0x4f097f=_0x39bd84;return _0x25545f[_0x4f097f(0x194)](_0x471f8f,_0x199674);},'puaWi':function(_0x333aa0,_0x384969){return _0x333aa0===_0x384969;},'biFYH':function(_0x42c43e,_0xd9f62e){return _0x42c43e!==_0xd9f62e;},'NjhYU':function(_0x43b039,_0x453ea3){return _0x43b039===_0x453ea3;},'fWFlo':_0x25545f['jbtLW'],'uYnqx':function(_0x1be1b9,_0x36702f){return _0x1be1b9-_0x36702f;},'mfCWL':function(_0x4e61f0,_0x2c9338){return _0x4e61f0===_0x2c9338;},'ymzEy':function(_0x5e6fed,_0x2aeb52){return _0x25545f['plEmC'](_0x5e6fed,_0x2aeb52);}};if('ymvrD'!==_0x25545f['vmYVl']){_0x38db64[_0x39bd84(0xe00)+'onten'+'t']='v'+(_0xe910da[_0x39bd84(0x7cc)+'on']||'?');var _0x334296=_0x868cb0,_0x55b5b8=_0xc758df[_0x39bd84(0x7cc)+'on']||'';_0x10c08e[_0x39bd84(0xbf4)]['color']=_0x5c1082[_0x39bd84(0xd13)](_0x55b5b8,_0x334296)?_0x417181:_0x39bd84(0x720)+'74',_0x4a9623[_0x39bd84(0xbf4)][_0x39bd84(0x90e)+'rColo'+'r']=_0x55b5b8===_0x334296?_0x39bd84(0xc31)+_0x39bd84(0x9ee)+'43,17'+'7,.35'+')':_0x39bd84(0x720)+'74';}else return function(){var _0x115ebe=_0x39bd84,_0x473c13={'uDfXO':function(_0x111973,_0x429073){var _0x379b26=_0x29e5;return _0x5c1082[_0x379b26(0xc77)](_0x111973,_0x429073);},'fAToO':function(_0x2f23c7,_0x54bb0e){return _0x2f23c7<_0x54bb0e;},'vGFMM':_0x5c1082[_0x115ebe(0x7b5)],'OdVoa':function(_0x219619,_0x5d14cb){return _0x219619+_0x5d14cb;},'hCKqC':_0x5c1082[_0x115ebe(0x5ae)],'PFnJB':function(_0x102c41,_0x632b45){return _0x102c41===_0x632b45;},'myYui':_0x5c1082['CbQUX']};if(_0x115ebe(0x2df)!==_0x5c1082['HyRXh']){var _0x29de4f=_0x559da9[_0x2e3781],_0x5a090f=typeof _0x5b5734[_0x29de4f];_0x5f20f0[_0x29de4f]=_0x473c13['uDfXO'](_0x5a090f,_0x115ebe(0x587)+_0x115ebe(0x1c3))?_0x115ebe(0x587)+_0x115ebe(0x1c3):_0x5a090f;}else try{if(_0x115ebe(0x556)==='FCymB'){var _0x30a90a=_0x53397a['keys'](_0x4a7a9d);for(var _0x4526d6=0x98d*0x1+0x395+-0xd22*0x1;_0x4526d6<_0x30a90a['lengt'+'h']&&_0x473c13[_0x115ebe(0x14e)](_0x4526d6,0x1b1+0x19d0+-0x39*0x71);_0x4526d6++){var _0x579553=_0x32e5e0[_0x30a90a[_0x4526d6]];if(_0x579553&&typeof _0x579553===_0x473c13['vGFMM']&&_0x579553[_0x115ebe(0xacf)+'e']&&_0x579553[_0x115ebe(0xacf)+'e'][_0x115ebe(0x859)+'8']&&_0x579553[_0x115ebe(0xacf)+'e'][_0x115ebe(0x859)+'8'][_0x115ebe(0xa39)+'r'])return _0x329b04[_0x115ebe(0x5fb)+'e']=_0x473c13[_0x115ebe(0xab2)](_0x473c13[_0x115ebe(0xbf0)]+_0x30a90a[_0x4526d6],_0x115ebe(0x998)+'le'),_0x579553;}}else{var _0x11e274=_0x4e4b2b[_0x4305e1]||(_0x4e4b2b[_0x4305e1]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x53d58e=arguments;if(_0x5c1082[_0x115ebe(0x52e)](_0x2c4511,_0x115ebe(0x5bd))){var _0xe1820b=_0x53d58e[0x2502*-0x1+-0x1f*-0x27+0x2049];if(_0xe1820b&&typeof _0xe1820b[_0x115ebe(0x163)]==='funct'+'ion'){if(_0x5c1082[_0x115ebe(0x6de)]('AhVEd',_0x5c1082['lUrnp'])){_0x309595['push']({'o':-(0x4a2*0x2+0x2267+-0x17*0x1e6),'v':0x0,'why':_0x5c1082['gyASR'](_0x115ebe(0xe02)+_0x115ebe(0x751)+'f\x20',_0x49e1e0)+(_0x115ebe(0x716)+_0x115ebe(0x8d1)+'loats'+'\x20agre'+'ed')});return;}else{var _0x15335c=_0xe1820b['val']();if(_0x5c1082[_0x115ebe(0x33a)](typeof _0x15335c,_0x115ebe(0x8fd)+'r')&&isFinite(_0x15335c)){if(_0x5c1082['xxeGU'](_0x11e274['lo'],null)||_0x15335c<_0x11e274['lo'])_0x11e274['lo']=_0x15335c;if(_0x5c1082['puaWi'](_0x11e274['hi'],null)||_0x15335c>_0x11e274['hi'])_0x11e274['hi']=_0x15335c;if(_0x5c1082[_0x115ebe(0x208)](_0x11e274[_0x115ebe(0xdd0)],null)){if(_0x5c1082[_0x115ebe(0x677)](_0x5c1082[_0x115ebe(0x1b4)],'GdQCu'))_0xa88521[_0x115ebe(0xa2e)]=0x25*-0x2b+0x2193+-0x1b11,_0x263cb9(),_0x5c1082[_0x115ebe(0x493)](_0x489885,_0x4aea09['cat']);else{var _0x17b239=Math[_0x115ebe(0x419)](_0x5c1082['uYnqx'](_0x15335c,_0x11e274[_0x115ebe(0xdd0)]));if(_0x17b239>_0x11e274[_0x115ebe(0xbfe)])_0x11e274[_0x115ebe(0xbfe)]=_0x17b239;}}_0x11e274[_0x115ebe(0xdd0)]=_0x15335c;}_0x11e274[_0x115ebe(0xa4e)]++;if(_0x53d58e[0x181*0x1+-0x1385+0x1*0x1205]&&_0x5c1082[_0x115ebe(0x52e)](typeof _0x53d58e[-0xf11+0x21b8+-0x12a6][_0x115ebe(0x163)],_0x5c1082[_0x115ebe(0x2d3)])){var _0x552e75=_0x53d58e[0x8b6+0xd8+-0x98d][_0x115ebe(0x163)]();if(_0x552e75)_0x3f442c=_0x552e75;}}}}else{_0x53d58e[-0x897+-0xa1c+0x2a*0x72]&&_0x5c1082[_0x115ebe(0xa7a)](typeof _0x53d58e[0x16*0x116+-0x1230+-0x5b3]['val'],_0x115ebe(0x723)+'ion')&&(_0x11e274[_0x115ebe(0x7ac)+'st']=_0x53d58e[-0x1*0xa7+0x1*0x22+-0x86*-0x1][_0x115ebe(0x163)](),_0x11e274[_0x115ebe(0xad7)+'ts']++);if(_0x53d58e[0x162b+0x399+-0xe*0x1d7]&&typeof _0x53d58e[0x35c*-0xb+0x1327+0x11cf]['val']==='funct'+_0x115ebe(0xc6b)){if(_0x5c1082[_0x115ebe(0x6bf)](_0x115ebe(0x4e0),'YuLij'))_0x11e274[_0x115ebe(0xdac)]=_0x53d58e[0x1*0x17d2+0x2*-0x92b+-0x57a][_0x115ebe(0x163)](),_0x11e274[_0x115ebe(0x8c6)+'its']++;else{if(_0x28b764===_0x280a55||_0x473c13[_0x115ebe(0x500)](_0x7671ce,null))return _0x4c285d;if(typeof _0x2f8911[_0x115ebe(0x163)]===_0x473c13['myYui'])try{return _0x2317a9[_0x115ebe(0x163)]();}catch(_0x143072){}if(_0x473c13[_0x115ebe(0xa00)](typeof _0x46b467,_0x473c13[_0x115ebe(0x7ae)]))return _0xf4baea;return _0x272aff;}}if(_0x53d58e[-0x1*-0x155f+0x123a+-0x5d*0x6d]&&_0x5c1082['ymzEy'](typeof _0x53d58e[0x1132+0x2a7*-0x4+-0x696][_0x115ebe(0x163)],'funct'+_0x115ebe(0xc6b))){var _0x5363b7=_0x53d58e[-0xf4*0x15+0x97*0x14+-0x838*-0x1]['val']();if(_0x5363b7)_0x3f442c=_0x5363b7;}}}}catch(_0x29c265){}};}function _0x54c03b(){var _0x3a0a53=_0x419cc1;if(_0x495306)return!![];if(!_0x235ba0||typeof _0x235ba0[_0x3a0a53(0x91a)+'ostfi'+'x']!==_0x3a0a53(0x723)+_0x3a0a53(0xc6b))return![];var _0x2bf358=_0x5bb211[_0x3a0a53(0xd14)+_0x3a0a53(0x6b4)]||[];for(var _0x32c298=-0x919+-0x1275+0x1b8e;_0x25545f['gQjlx'](_0x32c298,_0x2bf358[_0x3a0a53(0xa1b)+'h']);_0x32c298++){var _0x3b0ba3=_0x2bf358[_0x32c298];try{if(_0x3b0ba3[_0x3a0a53(0x86d)]===_0x25545f['vmfui']){if(_0x25545f[_0x3a0a53(0xd11)](_0x3a0a53(0x3ad),_0x25545f[_0x3a0a53(0xd00)]))try{_0x1d3cc7=_0x5b40ce[_0x3a0a53(0xbac)](_0x6dd1db)[_0x3a0a53(0x634)](-0xf98+-0x3*0x525+0x2f*0xa9,-0x10*0x83+0x1c2e+0x236*-0x9);}catch(_0x28645a){}else _0x235ba0['hookP'+'ostfi'+'x']({'typeName':_0x25545f[_0x3a0a53(0x86c)],'methodName':_0x3b0ba3[_0x3a0a53(0xc72)],'params':_0x3b0ba3['wasmP'+_0x3a0a53(0xc61)],'returnType':_0x3b0ba3['wasmR'+'et']},_0x781082(_0x3a0a53(0x5bd),_0x3b0ba3[_0x3a0a53(0xc72)]));}else{if(_0x3b0ba3[_0x3a0a53(0x86d)]===_0x3a0a53(0x6d4)&&_0x25545f['GKaub'](_0x3b0ba3['param'+'s']['lengt'+'h'],0x24*-0xb+0x2175+-0x2*0xff4)&&_0x3b0ba3[_0x3a0a53(0x654)+'s'][0x1*-0x62f+-0x19b*-0x18+-0x2059]===_0x25545f['vmfui']){if(_0x25545f[_0x3a0a53(0x49c)](_0x3a0a53(0x307),'IbsHc')){if(_0x5bdf7c)_0x552a6b['textC'+'onten'+'t']=_0x3a0a53(0x7e3)+'d';}else _0x235ba0[_0x3a0a53(0x91a)+_0x3a0a53(0xad9)]({'typeName':_0x3a0a53(0xd14)+_0x3a0a53(0x6b4),'methodName':_0x3b0ba3['name'],'params':_0x3b0ba3['wasmP'+_0x3a0a53(0xc61)],'returnType':undefined},_0x781082(_0x3a0a53(0xd4d),_0x3b0ba3['name']));}}}catch(_0x50236c){if(_0x3a0a53(0xd8c)===_0x25545f[_0x3a0a53(0xa88)]){var _0x346b4f=_0x42796d['root'];if(!_0x346b4f||!_0x346b4f[_0x3a0a53(0xbf4)])return;_0x4642d4['pos']?(_0x346b4f[_0x3a0a53(0xbf4)]['left']=_0x25545f['qMwYt'](_0x47bb29[_0x3a0a53(0x8a7)]['x'],'px'),_0x346b4f['style']['top']=_0x46cfb9[_0x3a0a53(0x8a7)]['y']+'px',_0x346b4f[_0x3a0a53(0xbf4)]['right']=_0x3a0a53(0x195),_0x346b4f['style']['botto'+'m']=_0x25545f['GqxRl']):(_0x346b4f['style'][_0x3a0a53(0x9df)]=_0x25545f[_0x3a0a53(0x98c)],_0x346b4f[_0x3a0a53(0xbf4)][_0x3a0a53(0x979)]='auto',_0x346b4f['style'][_0x3a0a53(0x963)]=_0x25545f['nafhY'],_0x346b4f[_0x3a0a53(0xbf4)]['botto'+'m']=_0x3a0a53(0xaef));}else _0x1c1df7['push'](_0x25545f[_0x3a0a53(0xa67)](String,_0x50236c&&_0x50236c[_0x3a0a53(0x650)+'ge']||_0x50236c)[_0x3a0a53(0x634)](0x1d9d+-0x2d*-0x1d+-0x22b6,0x151e+0x1343*-0x2+0x11e0));}}return _0x495306=!![],!![];}function _0x1cdc27(){var _0x2adf67=_0x419cc1,_0x520ca4=0x1b00+0xe52+-0x2952,_0x51b1f8=0xd*-0xfb+-0x14*-0xfa+-0x3*0x243,_0x314b7d=-0x2367+-0x177a+0x3ae1*0x1,_0x4c770e=0xd33*0x1+0x2*0xb29+-0x1b1*0x15,_0x1fd697=0x81b+-0x270f+0x1ef4;try{var _0x2dc0c2=window[_0x2adf67(0x571)+'WebMo'+_0x2adf67(0xba2)]&&window['Unity'+_0x2adf67(0x3c8)+_0x2adf67(0xba2)]['Runti'+'me'],_0x4c2fad=_0x235ba0||_0x2dc0c2&&_0x2dc0c2['plugi'+'ns']&&_0x2dc0c2['plugi'+'ns'][_0x2dc0c2['plugi'+'ns'][_0x2adf67(0xa1b)+'h']-(0x10e6+0x26d5*0x1+-0x37ba)];if(_0x4c2fad&&_0x4c2fad['hooks'])for(var _0x471157=0x102*-0x16+0x21a1+0xb75*-0x1;_0x25545f[_0x2adf67(0xaf1)](_0x471157,_0x4c2fad[_0x2adf67(0x414)]['lengt'+'h']);_0x471157++){var _0x1e8169=_0x4c2fad[_0x2adf67(0x414)][_0x471157];if(!_0x1e8169||_0x1e8169[_0x2adf67(0x47e)+'ame']!=='Mouse'+_0x2adf67(0x6b4))continue;_0x520ca4++;if(_0x1e8169['table'+'Index']!==undefined)_0x51b1f8++;if(_0x1e8169['appli'+'ed'])_0x314b7d++;}}catch(_0x123a2e){}for(var _0x5a99f5 in _0x4e4b2b){if(_0x25545f[_0x2adf67(0xa64)]===_0x2adf67(0x652)){_0x25545f[_0x2adf67(0x5f5)](_0x308dbc,_0x1dc2e7['cat']);try{var _0x1a563f=_0x4e3263['inner'+'Heigh'+'t']||-0x979+-0xec6+0x1b5f;if(_0x25545f[_0x2adf67(0xd1b)](_0x1a563f,-0x18cf+-0x3*0xb38+0x3ce3))_0x2916fd(![]);}catch(_0x435053){}}else{var _0x4a5e7b=_0x4e4b2b[_0x5a99f5];_0x4c770e+=_0x4a5e7b[_0x2adf67(0xa4e)]||-0x1c95*0x1+0x265c+-0x9c7,_0x1fd697+=_0x25545f[_0x2adf67(0x745)](_0x4a5e7b[_0x2adf67(0xad7)+'ts']||-0x134e+-0x1e95+0xb*0x489,_0x4a5e7b[_0x2adf67(0x8c6)+_0x2adf67(0x537)]||-0x3*-0x839+0x17ff+-0x1855*0x2);}}return{'registered':_0x495306,'total':_0x520ca4,'resolved':_0x51b1f8,'applied':_0x314b7d,'getterHits':_0x4c770e,'setterHits':_0x1fd697,'distinct':Object['keys'](_0x4e4b2b)['lengt'+'h'],'errorCount':_0x1c1df7['lengt'+'h'],'errors':_0x1c1df7['slice'](0x1cd2+-0x52f*0x1+0x3*-0x7e1,0x3c1+0x1*-0x21a3+0x1de6)};}function _0xcba669(){var _0x18382c=_0x419cc1;if('UuvKd'!==_0x25545f['vhSNb']){var _0x5772e0=null,_0x21a6ed=0x1*0x11b5+-0x4e+-0x1167;for(var _0x572fac in _0x4e4b2b){var _0x57329c=_0x4e4b2b[_0x572fac];if(_0x57329c[_0x18382c(0x8c6)+'its']&&_0x25545f[_0x18382c(0xb65)](_0x57329c['pairH'+_0x18382c(0x537)],_0x21a6ed)&&typeof _0x57329c[_0x18382c(0x7ac)+'st']===_0x25545f[_0x18382c(0x388)]&&_0x25545f[_0x18382c(0x67c)](typeof _0x57329c[_0x18382c(0xdac)],_0x25545f[_0x18382c(0x388)])&&isFinite(_0x57329c[_0x18382c(0x7ac)+'st'])&&_0x25545f['OVkbP'](isFinite,_0x57329c['setB'])){if(_0x18382c(0xdf7)!==_0x18382c(0x71a))_0x5772e0={'rawA':_0x57329c[_0x18382c(0x7ac)+'st'],'rawB':_0x57329c[_0x18382c(0xdac)],'hits':_0x57329c[_0x18382c(0x8c6)+'its'],'name':_0x572fac},_0x21a6ed=_0x57329c['pairH'+_0x18382c(0x537)];else{var _0x5e8a20=_0x108790[_0x18382c(0x571)+_0x18382c(0x3c8)+'dkit']&&_0x442d95['Unity'+_0x18382c(0x3c8)+'dkit'][_0x18382c(0x57d)+'me'];if(_0x5e8a20&&typeof _0x5e8a20['resol'+'veGam'+'e']===_0x25545f[_0x18382c(0x5b5)]){var _0x4c5a15=_0x5e8a20[_0x18382c(0x971)+_0x18382c(0x8e1)+'e']();if(_0x4c5a15)return _0x466351[_0x18382c(0x5fb)+'e']=_0x18382c(0x57d)+_0x18382c(0x951)+_0x18382c(0x898)+'Game('+')',_0x4c5a15;}if(_0x5e8a20&&_0x5e8a20['_game'])return _0x5da611['sourc'+'e']='Runti'+_0x18382c(0x7d4)+_0x18382c(0x15d),_0x5e8a20;}}}if(!_0x5772e0)return null;var _0x2f2913=_0x5772e0['rawA']>=-(0x1e6c+-0x1*-0x2608+-0x441a)&&_0x5772e0[_0x18382c(0x4ac)]<=-0x3*-0xc91+0x1*-0x1aae+-0xaab,_0x109e3c=_0x5772e0['rawB']>=-(-0x131e*0x1+-0x279*0xb+0x2eab)&&_0x5772e0[_0x18382c(0xb0b)]<=-0x1f41+0x1724+-0xc5*-0xb;return _0x2f2913!==_0x109e3c?(_0x5772e0[_0x18382c(0x4c0)]=_0x2f2913?_0x5772e0[_0x18382c(0x4ac)]:_0x5772e0[_0x18382c(0xb0b)],_0x5772e0[_0x18382c(0x559)]=_0x2f2913?_0x5772e0['rawB']:_0x5772e0[_0x18382c(0x4ac)],_0x5772e0[_0x18382c(0xc04)]=_0x2f2913?_0x18382c(0x47b):_0x18382c(0xa89)):(_0x5772e0['pitch']=null,_0x5772e0[_0x18382c(0x559)]=null,_0x5772e0['order']=_0x25545f['AUWwd'](_0x25545f['igNCp'](_0x25545f['cOsNh'],_0x2f2913?_0x25545f['USQON']:_0x18382c(0x33f)+'er\x20bo'+_0x18382c(0x480)),')')),_0x5772e0;}else return _0xb5b671[_0x18382c(0x419)](_0x489db7-_0x1e3d6b)<=_0x413fc2['max'](0xc2b+-0x1c32+0x1008,_0x42b050['abs'](_0x7be770)*(0x2c5*-0x3+0x504+0x3*0x119+0.6));}function _0x1a56b2(){var _0x210d1f=_0x419cc1,_0x571700=0x69f*-0x1+0x114+0x58b;for(var _0x57db2e=0x11ae+0x1*0x1ccf+-0x1*0x2e7d;_0x57db2e<_0x23ed4d['lengt'+'h'];_0x57db2e++){if(_0x23ed4d[_0x57db2e][_0x210d1f(0xc8d)]&&_0x23ed4d[_0x57db2e][_0x210d1f(0xc8d)]['table'+_0x210d1f(0x2ec)]!==undefined)_0x571700++;}return _0x571700;}function _0x54bdb9(){var _0x47b6e5=_0x419cc1,_0x57f828=0x1e6b+0x2*0x5bf+-0x29e9*0x1;for(var _0x874944=0xcfb*-0x2+-0x266d+0x4063;_0x874944<_0x23ed4d[_0x47b6e5(0xa1b)+'h'];_0x874944++){if(_0x23ed4d[_0x874944][_0x47b6e5(0xc8d)]&&_0x23ed4d[_0x874944][_0x47b6e5(0xc8d)]['appli'+'ed'])_0x57f828++;}return _0x57f828;}var _0x34b7fe=null,_0x14b2ed=[],_0x34bfa9={},_0x35baed=null;function _0x4b56cb(_0x54586f){var _0x5ec2af=_0x419cc1;try{if(_0x25545f[_0x5ec2af(0xa54)](!_0x265b56,!_0x54586f))return null;var _0x4c8c7e=new _0x265b56(_0x54586f)[_0x5ec2af(0xdb2)+_0x5ec2af(0xd6c)+'me']();return _0x25545f['XXfJs'](_0x4c8c7e,undefined)?null:_0x4c8c7e;}catch(_0x2c5372){return null;}}function _0x16ec12(_0x437b58,_0x19fe85,_0x207a26){var _0x215e4f=_0x419cc1,_0x4a6625=_0x25545f[_0x215e4f(0x7f7)](_0x53bb1f);if(!_0x4a6625)return null;if(_0x19fe85<-0x11*0x47+0x174*0x2+-0x1*-0x1cf||_0x19fe85+_0x25545f['oKvlV'](_0x207a26,-0x16*0xce+-0xda1+0x217*0xf)>_0x4a6625['byteL'+'ength'])return null;var _0x403d8d=[];for(var _0x491d1d=-0x25f*-0x9+-0x1*-0x1d93+0x13*-0x2ae;_0x491d1d<_0x207a26;_0x491d1d++)_0x403d8d['push'](_0x4a6625[_0x215e4f(0xc80)+'oat32'](_0x25545f['WVHXT'](_0x437b58,_0x19fe85)+_0x25545f['nfQmD'](_0x491d1d,-0xb3*0x12+-0x1*-0x174+0xb26),!![]));return _0x5c0a6e['ok']+=_0x207a26,_0x403d8d;}var _0x5aa699={'PhotonNetworkSync':[[_0x419cc1(0x17e),_0x25545f['BKVke']],[_0x419cc1(0x6d9),'healt'+'h'],[_0x419cc1(0x593),'trans'+'form'],['0x28',_0x25545f[_0x419cc1(0x46e)]],['0x30',_0x419cc1(0x351)+_0x419cc1(0x6b4)]],'NetworkPlayerAnimations':[[_0x419cc1(0x17e),_0x419cc1(0x147)+'le'],['0x18',_0x419cc1(0xb2a)]],'NPC_Cotroller':[[_0x419cc1(0xdf1),_0x419cc1(0x147)+'le'],[_0x25545f[_0x419cc1(0x9bc)],'targe'+'tHeal'+'th'],['0xd0',_0x419cc1(0x80f)+'h'],[_0x419cc1(0x758),'targe'+'tHeal'+_0x419cc1(0xc3f)],['0xe8','trans'+_0x419cc1(0x400)]],'EnemyBot':[[_0x419cc1(0x9d8),_0x25545f['nWxVb']]]},_0x584e71={'PhotonNetworkSync':[[_0x25545f[_0x419cc1(0x912)],_0x25545f[_0x419cc1(0x4de)]],[_0x419cc1(0x4be),_0x419cc1(0x157)+_0x419cc1(0x5bc)],[_0x25545f['hAzZp'],'id']]};function _0x66b2be(_0x512cfc,_0x3a094a){var _0x486e05=_0x419cc1,_0x59052b={'AroFz':function(_0x32397f,_0x1b5792,_0x577cf5,_0x308f80){return _0x32397f(_0x1b5792,_0x577cf5,_0x308f80);}};if('wKdeN'!=='wKdeN'){var _0x3e4759=_0x59052b['AroFz'](_0x2d500c,_0x25bdda,_0xb9084d,_0x23e22d);if(!_0x3e4759)return null;_0x3e4759['o']=_0x32a657,_0x3e4759['k']=_0x2b9ef9;var _0x1e431b=_0x484bf5([_0x3e4759]);if(!_0x1e431b[_0x486e05(0x1cf)][_0x486e05(0xa1b)+'h'])return null;return _0x1e431b[_0x486e05(0x1cf)][0x22ca+-0x47*-0x53+-0x1345*0x3];}else{var _0x199330=_0x3e1fdb[_0x512cfc]||[],_0x16eff6={'kind':_0x512cfc,'ptr':'0x'+_0x3a094a[_0x486e05(0x834)+_0x486e05(0x2fe)](-0x11e5+-0x1038+0x2a1*0xd),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x1bf772=0x4*-0x7c7+-0x8f5*0x1+-0xd5b*-0x3;_0x25545f['eXmCR'](_0x1bf772,_0x199330['lengt'+'h']);_0x1bf772++){if(_0x25545f['jZSdB'](_0x199330[_0x1bf772][-0x5*0x2ff+0x1f1*-0x1+0x10ed],'v3'))continue;var _0x1cd16e=_0x16ec12(_0x3a094a,_0x199330[_0x1bf772][-0x2036+0x24db+-0x29*0x1d],0x629+-0xd3*-0x2b+-0xa9*0x3f);if(!_0x1cd16e)continue;_0x16eff6['allVe'+'cs'][_0x486e05(0x90b)]({'o':'0x'+_0x199330[_0x1bf772][0x20b0+-0x2*0x273+-0x1bca][_0x486e05(0x834)+_0x486e05(0x2fe)](0x95f*0x1+-0x1818*0x1+0xec9),'v':_0x1cd16e});}var _0xc538ef=0x1b28+0x1125+0x407*-0xb,_0x1488c8=_0x25545f['RlKUm'](_0x25545f['aQKIi'](_0x512cfc,'@'),_0x3a094a),_0x1be027=_0x28ac5b(_0x16eff6[_0x486e05(0x9f8)+'cs'],_0x25545f[_0x486e05(0x5a0)](_0x313194),_0x59d27f[_0x1488c8]);_0x59d27f[_0x1488c8]=_0x1be027[_0x486e05(0x94e)]?{'o':_0x1be027['posAt']}:null,_0x16eff6[_0x486e05(0x8a7)]=_0x1be027[_0x486e05(0x8a7)],_0x16eff6[_0x486e05(0x94e)]=_0x1be027['posAt'],_0x16eff6[_0x486e05(0x646)]=_0x1be027[_0x486e05(0x646)],_0x16eff6[_0x486e05(0x837)+'dates']=_0x1be027[_0x486e05(0x837)+_0x486e05(0x35b)],_0x16eff6[_0x486e05(0x900)+'er']=_0x1be027[_0x486e05(0x900)+'er'],_0x16eff6['reach']=_0x1be027[_0x486e05(0x164)],void _0xc538ef;var _0x4b39c9=_0x5aa699[_0x512cfc],_0x5efc23=_0x584e71[_0x512cfc];if(_0x5efc23){_0x16eff6[_0x486e05(0xaf0)]={};for(var _0x4115cf=-0x1633+-0xb*0x119+0x2246;_0x4115cf<_0x5efc23[_0x486e05(0xa1b)+'h'];_0x4115cf++){var _0x1d39bc=_0x2ee0ee(_0x25545f['KmOvY'](_0x3a094a,parseInt(_0x5efc23[_0x4115cf][0x43d+0xcda+-0x1117],0x1755+0x8*-0x37+-0x158d)),_0x486e05(0xbd8));if(_0x25545f[_0x486e05(0xdc4)](_0x1d39bc,undefined))_0x16eff6['tag'][_0x5efc23[_0x4115cf][-0x257+0x31*0xbb+-0x1*0x2173]]=_0x1d39bc;}}if(_0x4b39c9)for(var _0x363283=-0x195f+-0xa36*-0x2+-0xb5*-0x7;_0x363283<_0x4b39c9['lengt'+'h'];_0x363283++){var _0xf211f9=_0x25545f[_0x486e05(0x60f)](_0x2ee0ee,_0x3a094a+parseInt(_0x4b39c9[_0x363283][0x1932+0x1b29+-0x345b],0x1ce+0x7ae+-0xc9*0xc),'u32');if(_0xf211f9)_0x16eff6[_0x486e05(0x7e8)][_0x4b39c9[_0x363283][0x13f7+-0x11dc+-0x21a]]=_0x25545f[_0x486e05(0xbca)]('0x',(_0xf211f9>>>-0xc5d*0x2+0x147+0x9*0x29b)[_0x486e05(0x834)+_0x486e05(0x2fe)](-0x1*-0x20d9+0xe7f*-0x2+0x3cb*-0x1));}return _0x16eff6[_0x486e05(0x177)+'rs']=_0x199330['filte'+'r'](function(_0x42984e){var _0x344f2d=_0x486e05;return _0x42984e[-0x51*0x3b+0x1*0x9c5+0x8e7]==='f32'||_0x42984e[0xeb4+0x3*-0xa93+0x1106]===_0x344f2d(0xbd8);})[_0x486e05(0x8fa)](function(_0x4c6ca1){var _0x1f1710=_0x486e05;if(_0x25545f[_0x1f1710(0xa4a)]===_0x25545f[_0x1f1710(0xa4a)])return{'o':'0x'+_0x4c6ca1[-0x687+-0xa08*0x2+0x1a97][_0x1f1710(0x834)+'ing'](0x139*-0x7+0x10ca+-0x82b),'v':_0x25545f[_0x1f1710(0xa48)](_0x2ee0ee,_0x3a094a+_0x4c6ca1[-0xbd0+-0x1e97+0x2a67],_0x4c6ca1[-0x19a4+0x17d5+0x1d0])};else try{var _0x4e01a6=_0x485101();return _0x4e01a6&&_0x4e01a6['feet']?_0x4e01a6[_0x1f1710(0x913)][0x248e+-0x1913*0x1+-0xb7a]:null;}catch(_0x4af412){return null;}})[_0x486e05(0x3d0)+'r'](function(_0x383503){return _0x383503['v']!==undefined&&isFinite(_0x383503['v']);})['slice'](-0x1bb*0x9+-0x1a3*-0x2+0xc4d,0x1e*0x7+0x19bf+0x1*-0x1a85),_0x16eff6;}}function _0x5c7d8e(){var _0x4155c0=_0x419cc1,_0x2e13eb={'Fssmv':function(_0x25198f,_0x58ecf3){return _0x25198f!==_0x58ecf3;},'lwZUF':_0x25545f['RydMd'],'hTnXi':function(_0x56eb7b){var _0x43963e=_0x29e5;return _0x25545f[_0x43963e(0x8b2)](_0x56eb7b);}},_0x209760={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x3ca0b8=_0x2e79eb['FPSco'+_0x4155c0(0x96e)+_0x4155c0(0x36a)]&&_0x2e79eb['FPSco'+_0x4155c0(0x96e)+_0x4155c0(0x36a)]['ptr']||0x2175+0x4b1+-0x2626,_0x33bf1c=_0x5c7ec5['Photo'+_0x4155c0(0x6f4)+_0x4155c0(0xcd1)+'nc']||{},_0x34f535=Object[_0x4155c0(0xbac)](_0x33bf1c);for(var _0x442526=-0x91*-0x9+-0x5c8+-0x19*-0x7;_0x25545f[_0x4155c0(0xa65)](_0x442526,_0x34f535['lengt'+'h'])&&_0x442526<-0xe11+-0x310*-0x5+-0x127;_0x442526++){if(_0x4155c0(0x8d0)!=='iIFkZ'){var _0x3293f4=_0x33bf1c[_0x34f535[_0x442526]],_0x199529=_0x66b2be(_0x25545f[_0x4155c0(0x6ca)],_0x3293f4[_0x4155c0(0x936)]);_0x199529[_0x4155c0(0xa4e)]=_0x3293f4['hits'],_0x199529['first'+_0x4155c0(0xda2)+'s']=_0x25545f[_0x4155c0(0x27e)](_0x3293f4[_0x4155c0(0x738)+'Seen'],_0x5ec9af),_0x199529[_0x4155c0(0xb64)+'al']=!!_0x3ca0b8&&_0x25545f[_0x4155c0(0xb2b)](_0x199529[_0x4155c0(0x7e8)]['fps'],_0x25545f['bWRVZ']('0x',_0x3ca0b8['toStr'+_0x4155c0(0x2fe)](0x2d4+0x48+-0x30c)));if(_0x199529['refs']['healt'+'h']){var _0x2d05c8=parseInt(_0x199529['refs'][_0x4155c0(0x80f)+'h'],0x5b4*0x2+0x2*-0xfc4+0x1430);_0x199529[_0x4155c0(0x80f)+'h']=_0x25545f[_0x4155c0(0x6ed)](_0x5b81d0,_0x2d05c8,_0x25545f[_0x4155c0(0x53e)],_0x25545f[_0x4155c0(0x47a)]);}_0x209760[_0x4155c0(0x6cf)+'rs']['push'](_0x199529);}else{var _0x60ed58=_0x37d77a[_0x5b72eb],_0x41150a=_0x5714e9[_0x2b9ac9];if(_0x60ed58!==_0x41150a)_0x75b695[_0x4155c0(0x90b)](_0x25545f[_0x4155c0(0x7a8)](_0x25545f[_0x4155c0(0xd35)](_0x4c93db,':\x20'),_0x60ed58)+_0x25545f['VeUSY']+_0x41150a);}}_0x209760['playe'+_0x4155c0(0x4b2)+'t']=_0x34f535[_0x4155c0(0xa1b)+'h'];var _0x49d54e=_0x5c7ec5['NPC_C'+'otrol'+'ler']||{},_0xd6ec0a=Object[_0x4155c0(0xbac)](_0x49d54e);for(var _0x28aa39=-0xf8d+0x22a9+-0x131c;_0x28aa39<_0xd6ec0a['lengt'+'h']&&_0x28aa39<-0x476+-0x124b+0x16d9;_0x28aa39++){if(_0x4155c0(0x908)===_0x4155c0(0x908)){var _0x30e38b=_0x66b2be(_0x25545f[_0x4155c0(0xa08)],_0x49d54e[_0xd6ec0a[_0x28aa39]]['ptr']);_0x30e38b[_0x4155c0(0xa4e)]=_0x49d54e[_0xd6ec0a[_0x28aa39]][_0x4155c0(0xa4e)],_0x30e38b['first'+_0x4155c0(0xda2)+'s']=_0x49d54e[_0xd6ec0a[_0x28aa39]][_0x4155c0(0x738)+'Seen']-_0x5ec9af;if(_0x30e38b[_0x4155c0(0x7e8)]['healt'+'h'])_0x30e38b[_0x4155c0(0x80f)+'h']=_0x25545f[_0x4155c0(0x6ed)](_0x5b81d0,_0x25545f['SKlGI'](parseInt,_0x30e38b['refs'][_0x4155c0(0x80f)+'h'],0x1e60+0xb29*-0x3+0x32b),_0x25545f[_0x4155c0(0x53e)],'obfI');_0x209760[_0x4155c0(0xc33)][_0x4155c0(0x90b)](_0x30e38b);}else return _0x2848db+_0x116fbe[_0x1a91fc][_0x4155c0(0xa1b)+'h'];}_0x209760['botCo'+_0x4155c0(0x150)]=_0xd6ec0a['lengt'+'h'];var _0x88b318=_0x5c7ec5[_0x4155c0(0x76b)+_0x4155c0(0x96e)+'ler']||{},_0x1416b9=Object[_0x4155c0(0xbac)](_0x88b318);for(var _0x2518e8=0xdc*0x19+0x1e8*0x11+-0x35e4;_0x25545f['twBxM'](_0x2518e8,_0x1416b9['lengt'+'h'])&&_0x25545f[_0x4155c0(0x92a)](_0x2518e8,0xe30*-0x2+-0x257a+0x41f2*0x1);_0x2518e8++){var _0x118ce7=_0x66b2be(_0x25545f[_0x4155c0(0xa23)],_0x88b318[_0x1416b9[_0x2518e8]]['ptr']);_0x118ce7['hits']=_0x88b318[_0x1416b9[_0x2518e8]][_0x4155c0(0xa4e)],_0x118ce7[_0x4155c0(0xb64)+'al']=_0x25545f[_0x4155c0(0x8a5)](_0x88b318[_0x1416b9[_0x2518e8]][_0x4155c0(0x936)],_0x3ca0b8),_0x209760[_0x4155c0(0x1d4)+'oller'+'s'][_0x4155c0(0x90b)](_0x118ce7);}_0x209760[_0x4155c0(0x1d4)+'oller'+_0x4155c0(0x4ed)]=_0x1416b9[_0x4155c0(0xa1b)+'h'];var _0x5d76b7=_0x209760[_0x4155c0(0x6cf)+'rs']['conca'+'t'](_0x209760[_0x4155c0(0xc33)]);for(var _0x366a5f=-0x1565+-0x1be*-0x8+0x53*0x17;_0x25545f[_0x4155c0(0xae2)](_0x366a5f,_0x5d76b7[_0x4155c0(0xa1b)+'h']);_0x366a5f++){if(_0x5d76b7[_0x366a5f][_0x4155c0(0xb64)+'al'])continue;_0x209760[_0x4155c0(0xb54)+'es'][_0x4155c0(0x90b)](_0x5d76b7[_0x366a5f]);}_0x209760[_0x4155c0(0xd6f)+'Count']=_0x209760[_0x4155c0(0xb54)+'es'][_0x4155c0(0xa1b)+'h'];var _0x2fbf7f={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x1af709={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x38f3fc in _0x2e79eb){if(_0x25545f[_0x4155c0(0x26e)](_0x4155c0(0x62e),_0x4155c0(0x62e)))try{var _0x33ce44=_0x25befe&&_0x135905[_0x4155c0(0x9db)];if(!_0x33ce44||_0x33ce44[_0x4155c0(0x375)+'ura']!==_0x14417a||_0x2e13eb[_0x4155c0(0xa8f)](_0x33ce44['kind'],_0x2e13eb[_0x4155c0(0x284)]))return;_0x434275(_0x33ce44['cmd'],_0x33ce44[_0x4155c0(0x67e)]);}catch(_0x9f74a0){}else{var _0x449b6a=_0x2e79eb[_0x38f3fc];if(!_0x449b6a||!_0x449b6a['ptr'])continue;if(!_0x25545f['lJSWy'](_0x38f3fc,_0x2fbf7f))continue;_0x209760['manag'+'ers'][_0x38f3fc]=_0x25545f[_0x4155c0(0xa7b)]('0x',_0x449b6a[_0x4155c0(0x936)][_0x4155c0(0x834)+'ing'](-0x11a7*-0x2+-0x6dd+-0x1c61));var _0xe61492=_0x2ee0ee(_0x449b6a[_0x4155c0(0x936)]+_0x2fbf7f[_0x38f3fc],_0x4155c0(0x7a2)),_0x162db6=_0x2ee0ee(_0x25545f['IpsHp'](_0x449b6a['ptr'],_0x1af709[_0x38f3fc]),_0x4155c0(0x7a2));if(_0xe61492&&_0x25545f['plEmC'](_0x209760['camer'+'a'],null)){if(_0x25545f[_0x4155c0(0xb75)](_0x4155c0(0x9f6),_0x4155c0(0xb29))){if(_0x1718b1&&!_0x101b8f()){_0x50e493();return;}_0x25545f[_0x4155c0(0x60f)](_0x19fc28,!![],_0x1b9644);}else _0x209760['camer'+'a']='0x'+(_0xe61492>>>0x1*-0x113d+-0x3*0x7de+-0x55*-0x7b)['toStr'+_0x4155c0(0x2fe)](0x1677+0x1e15+-0x347c),_0x209760[_0x4155c0(0xb9c)+'aFrom']=_0x38f3fc;}if(_0x162db6&&_0x209760[_0x4155c0(0x6cf)+_0x4155c0(0x9b2)]===null)_0x209760['playe'+'rList']='0x'+(_0x162db6>>>-0x180b+0x14ec+0x31f)[_0x4155c0(0x834)+_0x4155c0(0x2fe)](-0x25d7+0x1f09+0x6de);}}if(!_0x209760[_0x4155c0(0x6cf)+_0x4155c0(0x4b2)+'t']&&!_0x209760['botCo'+_0x4155c0(0x150)]&&!_0x209760[_0x4155c0(0xb9c)+'a'])_0x4155c0(0xcdc)===_0x4155c0(0xa0c)?_0x2e13eb['hTnXi'](_0x512a19):_0x209760[_0x4155c0(0x96f)]=_0x4155c0(0xb69)+_0x4155c0(0x420)+'etwor'+'kSync'+_0x4155c0(0x23a)+_0x4155c0(0x741)+'otrol'+'ler\x20a'+_0x4155c0(0xdc0)+_0x4155c0(0x4f4)+'\x20mana'+_0x4155c0(0x991)+'That\x20'+'is\x20wh'+'at\x20'+('the\x20l'+'obby\x20'+'looks'+_0x4155c0(0xa3a)+_0x4155c0(0xa90)+_0x4155c0(0x182)+'\x20reco'+_0x4155c0(0x588)+'IDE\x20a'+_0x4155c0(0xa22)+'\x20roun'+_0x4155c0(0x405)+_0x4155c0(0x68a)+_0x4155c0(0x168)+'.');else!_0x209760[_0x4155c0(0xd6f)+_0x4155c0(0x4ed)]&&(_0x209760[_0x4155c0(0x96f)]=_0x4155c0(0xcdb)+_0x4155c0(0x7ea)+_0x4155c0(0xc5a)+_0x4155c0(0x922)+'but\x20n'+_0x4155c0(0xc85)+'re\x20cl'+_0x4155c0(0x60c)+_0x4155c0(0x4a9)+_0x4155c0(0x438)+_0x4155c0(0x81e)+'yet\x20-'+_0x4155c0(0x77b)+'k\x20'+('isLoc'+'al\x20on'+_0x4155c0(0xde0)+_0x4155c0(0x4eb)+'y\x20in\x20'+_0x4155c0(0x6c2)+_0x4155c0(0xb01)));try{var _0xf259b2=window['Unity'+'WebMo'+'dkit']&&window[_0x4155c0(0x571)+_0x4155c0(0x3c8)+'dkit']['Runti'+'me'],_0xf27329=_0xf259b2&&_0xf259b2['inter'+_0x4155c0(0x1f3)+'smTyp'+'es']||[],_0x1f5877={};for(var _0x5daff2=0x235*0x1+-0x11d3+0x7cf*0x2;_0x5daff2<_0xf27329[_0x4155c0(0xa1b)+'h']&&_0x5daff2<-0x3*-0x24a+0x1*0x22af+-0x19ed;_0x5daff2++){var _0x57c92b=_0xf27329[_0x5daff2][_0x4155c0(0x654)+'s']['join'](',')+_0x25545f[_0x4155c0(0x84e)]+(_0xf27329[_0x5daff2]['retur'+_0x4155c0(0x1e0)]||_0x25545f[_0x4155c0(0x398)]);_0x1f5877[_0x57c92b]=_0x25545f['obOSr'](_0x1f5877[_0x57c92b]||0xa4d+-0x879+0x1*-0x1d4,-0xbf*0x11+0x571+0x73f);}_0x209760['wasmT'+_0x4155c0(0x3c3)]=_0x1f5877;}catch(_0x176c1d){}return _0x209760;}function _0x5b81d0(_0x5402cb,_0x5794c3,_0x38c6de){var _0x5dc1d2=_0x419cc1,_0xc337fd={'bsJjl':function(_0x133bdd,_0x5b7f5c){var _0x25a570=_0x29e5;return _0x25545f[_0x25a570(0x194)](_0x133bdd,_0x5b7f5c);}};try{var _0x1e09c5=_0x3e1fdb[_0x5794c3]||[];for(var _0x4ff35f=-0xab*-0x15+0x25e5*-0x1+-0x1a*-0xeb;_0x25545f['rgpil'](_0x4ff35f,_0x1e09c5['lengt'+'h']);_0x4ff35f++){if(_0x5dc1d2(0xb40)===_0x5dc1d2(0xb40)){if(_0x25545f['BhjrU'](_0x1e09c5[_0x4ff35f][-0x1b75+0x17*-0x3b+-0x20c3*-0x1],_0x38c6de))continue;var _0x2f78ed=_0x1e09c5[_0x4ff35f][0x12fd+-0x1952*-0x1+-0x2c4f];if(_0x25545f[_0x5dc1d2(0x3d4)](_0x38c6de[_0x5dc1d2(0x6b7)+'Of'](_0x25545f['WCNtY']),0x9b2+-0x84*-0x12+-0x12fa)){var _0x3a735f=_0x48abf1(_0x5402cb,_0x2f78ed,_0x38c6de);if(!_0x3a735f)return null;_0x3a735f['o']=_0x2f78ed,_0x3a735f['k']=_0x38c6de;var _0x81d75f=_0x3bcc52([_0x3a735f]);if(!_0x81d75f['rows'][_0x5dc1d2(0xa1b)+'h'])return null;return _0x81d75f[_0x5dc1d2(0x1cf)][0x1254+-0x478+0x6ee*-0x2];}var _0x53ed89=_0x25545f['nrffl'](_0x2ee0ee,_0x5402cb+_0x2f78ed,_0x38c6de);if(_0x25545f[_0x5dc1d2(0x98d)](_0x53ed89,undefined))return null;return{'o':'0x'+_0x2f78ed[_0x5dc1d2(0x834)+'ing'](-0x1*0x1ab7+0xa*0x56+0x176b),'v':_0x53ed89};}else{if(_0xc337fd[_0x5dc1d2(0x316)](_0x13adb7[_0x5dc1d2(0x86d)],_0x5dc1d2(0xa9c)))_0x227ab0[_0x5dc1d2(0x91a)+'ostfi'+'x']({'typeName':_0x5dc1d2(0xd14)+_0x5dc1d2(0x6b4),'methodName':_0x371803[_0x5dc1d2(0xc72)],'params':_0x31e597['wasmP'+_0x5dc1d2(0xc61)],'returnType':_0x303719['wasmR'+'et']},_0x48c2df(_0x5dc1d2(0x5bd),_0x56622c[_0x5dc1d2(0xc72)]));else _0xc337fd[_0x5dc1d2(0x316)](_0xcbc688['ret'],_0x5dc1d2(0x6d4))&&_0x527217['param'+'s'][_0x5dc1d2(0xa1b)+'h']===-0xb3*-0x2b+-0x477+-0x1999*0x1&&_0x3b08e0['param'+'s'][-0x2361*-0x1+0x14a*0x11+-0x394b]===_0x5dc1d2(0xa9c)&&_0x2b3962[_0x5dc1d2(0x91a)+_0x5dc1d2(0xad9)]({'typeName':_0x5dc1d2(0xd14)+_0x5dc1d2(0x6b4),'methodName':_0x30ae90[_0x5dc1d2(0xc72)],'params':_0x15a668['wasmP'+'arams'],'returnType':_0x53cfda},_0x5c6525(_0x5dc1d2(0xd4d),_0x62eb6a[_0x5dc1d2(0xc72)]));}}}catch(_0x41a27e){}return null;}function _0x409d10(){var _0x1ffb33=_0x419cc1,_0x5b4090={'woDqp':function(_0x3223ff,_0x2646c0){return _0x25545f['jVYAG'](_0x3223ff,_0x2646c0);},'kIqhP':function(_0x5dfa3f,_0x3616f4){var _0x8b78d7=_0x29e5;return _0x25545f[_0x8b78d7(0x55a)](_0x5dfa3f,_0x3616f4);},'oTycO':function(_0x5df11b,_0x2d2330){return _0x25545f['cjbqd'](_0x5df11b,_0x2d2330);},'CYxJj':function(_0xaf7fe9,_0x3f0540){return _0xaf7fe9-_0x3f0540;},'xaWJr':function(_0x1f3b58,_0x81fc4b){return _0x1f3b58>_0x81fc4b;}};if(_0x1ffb33(0x8e7)===_0x25545f[_0x1ffb33(0xc1d)])_0x4d583a=_0x5b4090[_0x1ffb33(0x2d9)](_0x36a2e1,_0x232996/_0x3f7da4*_0x5b4090[_0x1ffb33(0x8cd)](_0x7eca44,-0x1137+-0x125c+0x2399)),_0x56cdd3=_0x1c95fe+_0x5b4090[_0x1ffb33(0x21c)](_0x113532/_0x4d30be,_0x5b4090[_0x1ffb33(0x903)](_0x2be2bb,0x64c+-0x1c9*-0xf+-0x210d));else{var _0x1d3d5f={};_0x5c0a6e['ok']=-0xdc5+-0x5*0x15+0x79*0x1e,_0x5c0a6e[_0x1ffb33(0x92b)+'d']=-0x1944+0x4*0x9b9+-0x1b4*0x8,_0x5c0a6e['lastE'+_0x1ffb33(0x1e4)]=null;var _0x415f28=Object['keys'](_0x3e1fdb);for(var _0x1cb70f=0x382+0x7a8*-0x1+0x9*0x76;_0x1cb70f<_0x415f28[_0x1ffb33(0xa1b)+'h'];_0x1cb70f++){if(_0x25545f[_0x1ffb33(0xb84)](_0x1ffb33(0xda1),_0x25545f['mTiLR'])){var _0x354a3f=_0x415f28[_0x1cb70f],_0x590239=_0x2e79eb[_0x354a3f];if(!_0x590239||!_0x590239['ptr'])continue;var _0x1c0d52=_0x3e1fdb[_0x354a3f]||[],_0x373a5d=[];for(var _0x236a9d=-0x57*-0x34+-0x14c5*-0x1+-0x2671;_0x236a9d<_0x1c0d52[_0x1ffb33(0xa1b)+'h'];_0x236a9d++){var _0x15bb9f=_0x1c0d52[_0x236a9d][0x1*0x88c+0x1fb8+0x2*-0x1422],_0x22f378=_0x1c0d52[_0x236a9d][0xc66+0x25de+-0x3243];if(_0x22f378['index'+'Of'](_0x25545f[_0x1ffb33(0x310)])===0x722+0x1d3f+0x2461*-0x1){var _0x4e5f81=_0x48abf1(_0x590239[_0x1ffb33(0x936)],_0x15bb9f,_0x22f378);if(!_0x4e5f81)continue;_0x4e5f81['o']=_0x15bb9f,_0x4e5f81['k']=_0x22f378,_0x373a5d['push'](_0x4e5f81);}else{if(_0x1ffb33(0x515)==='aaJZx'){var _0x4e1127=_0x2ee0ee(_0x25545f['IKExL'](_0x590239['ptr'],_0x15bb9f),_0x22f378);if(_0x4e1127===undefined)continue;var _0x1e6222={'o':_0x15bb9f,'k':_0x22f378,'v':_0x4e1127};if(_0x22f378==='v2'||_0x22f378==='v3'||_0x22f378==='v4'){var _0x1202a8=_0x22f378==='v2'?-0x235+-0x60d+0x844:_0x22f378==='v3'?0x1f5a*-0x1+0x3*-0x27d+0x26d4:-0x12b9+0x3b*0x25+0xa36,_0x50eea3=_0x16ec12(_0x590239[_0x1ffb33(0x936)],_0x15bb9f,_0x1202a8);_0x50eea3&&(_0x1e6222[_0x1ffb33(0xbef)]=_0x50eea3,_0x1e6222['v']=_0x50eea3[0x86*-0xa+0x1d7c+-0x1840]);}_0x373a5d[_0x1ffb33(0x90b)](_0x1e6222);}else{var _0x2fe733=_0x5e4480[_0x1ffb33(0x419)](_0x5b4090[_0x1ffb33(0x8cd)](_0x1c2e1f,_0x3c781a[_0x1ffb33(0xdd0)]));if(_0x5b4090[_0x1ffb33(0x65a)](_0x2fe733,_0x15d047[_0x1ffb33(0xbfe)]))_0x824c43[_0x1ffb33(0xbfe)]=_0x2fe733;}}}if(_0x373a5d['lengt'+'h']){var _0x11dff3=_0x3bcc52(_0x373a5d);_0x1d3d5f[_0x354a3f]=_0x11dff3['rows'],_0x34bfa9[_0x354a3f]={'key':_0x11dff3[_0x1ffb33(0x365)],'sane':_0x11dff3['sane'],'checked':_0x11dff3[_0x1ffb33(0xa31)+'ed'],'keyConsistent':_0x11dff3[_0x1ffb33(0xcbc)+_0x1ffb33(0x167)+_0x1ffb33(0xba7)],'keySource':_0x11dff3[_0x1ffb33(0x9b1)+'urce']};}}else return _0x149d7e[_0x1ffb33(0x339)+'et']['api']='1',_0x59c166[_0x1ffb33(0x947)]=_0x328915,_0x203197['warn'](_0x25545f['uxFaK'],'color'+':'+_0x4a5ba2,_0x535b48),_0x307508;}return _0x1d3d5f;}}function _0x3bcc52(_0x2b7c88){var _0x5380c4=_0x419cc1,_0x5bd484=0xedc+-0xef*-0x7+-0x1565,_0x595d61=-0xb24+-0xdc3+-0x4b*-0x55,_0x217211=null;for(var _0x3221d1=-0xe85+0x1181+-0x2fc;_0x3221d1<_0x2b7c88[_0x5380c4(0xa1b)+'h'];_0x3221d1++){if(_0x25545f[_0x5380c4(0x3cc)](_0x5380c4(0xbb7),_0x5380c4(0xbb7))){var _0x5a2c5b=_0x2b7c88[_0x3221d1];if(_0x25545f[_0x5380c4(0x73d)](_0x5a2c5b['k'][_0x5380c4(0x6b7)+'Of'](_0x25545f['WCNtY']),-0x3e5*0x3+-0xc90+0x183f))continue;_0x5a2c5b['v']=_0x25545f['CSEzM'](_0x51de70,_0x5a2c5b['k'],_0x5a2c5b[_0x5380c4(0x987)+'n'],_0x5a2c5b[_0x5380c4(0xac3)+_0x5380c4(0x3ef)+'t0']),_0x5a2c5b['keyUs'+'ed']=_0x5a2c5b[_0x5380c4(0xac3)+'Offse'+'t0'],_0x5a2c5b[_0x5380c4(0x4f7)]=_0x25545f['NyZpP'](_0x25545f[_0x5380c4(0x9fc)]('hid=',_0x5a2c5b[_0x5380c4(0x987)+'n'])+(_0x5380c4(0x4d8)+'=')+_0x5a2c5b[_0x5380c4(0x1c2)]+(_0x5a2c5b[_0x5380c4(0x9fd)]?_0x25545f[_0x5380c4(0x5b1)]:'')+_0x5380c4(0xb2d),_0x5a2c5b[_0x5380c4(0xac3)+'Offse'+'t0'])+_0x25545f['yhRNR']+_0x5a2c5b['hex'];if(_0x25545f[_0x5380c4(0x4b4)](_0x217211,null))_0x217211=_0x5a2c5b[_0x5380c4(0xac3)+_0x5380c4(0x3ef)+'t0'];_0x595d61++,_0x1a2d67(_0x5a2c5b)?(_0x5bd484++,_0x5a2c5b[_0x5380c4(0x29e)]=!![]):_0x5a2c5b[_0x5380c4(0x29e)]=![],delete _0x5a2c5b[_0x5380c4(0x5e3)];}else return _0x6f9a0b['ident'+_0x5380c4(0x66c)]=![],_0x280d0c[_0x5380c4(0xdcf)]=_0x25545f[_0x5380c4(0xbca)](_0x25545f['MPJhj'],_0x43bf48['round'](_0x4f9701))+('\x20out\x20'+_0x5380c4(0x320)+'nge'),null;}return{'rows':_0x2b7c88,'key':_0x217211,'sane':_0x5bd484,'checked':_0x595d61,'keyConsistent':_0x289c31(_0x2b7c88),'keySource':_0x5380c4(0xdeb)+_0x5380c4(0x4cd)+_0x5380c4(0x323)+'idth)'};}function _0x289c31(_0x31b637){var _0x16a73f=_0x419cc1,_0x4e17e7={};for(var _0x504476=-0x26bc+0x1266+0x1456*0x1;_0x25545f['qKnJJ'](_0x504476,_0x31b637['lengt'+'h']);_0x504476++){var _0x3aee63=_0x31b637[_0x504476];if(_0x25545f[_0x16a73f(0x2fa)](_0x3aee63['k'][_0x16a73f(0x6b7)+'Of']('obf'),-0x75+-0x5ca+0x63f))continue;if(_0x4e17e7[_0x3aee63['k']]===undefined)_0x4e17e7[_0x3aee63['k']]=_0x3aee63['keyUs'+'ed'];else{if(_0x4e17e7[_0x3aee63['k']]!==_0x3aee63[_0x16a73f(0x7f5)+'ed'])return![];}}return!![];}function _0x1a2d67(_0x27fd10){var _0x11bc94=_0x419cc1,_0x532f87=_0x27fd10['v'];if(typeof _0x532f87!=='numbe'+'r'||!_0x25545f[_0x11bc94(0xa67)](isFinite,_0x532f87))return![];if(_0x25545f['LuQyD'](_0x27fd10['k'],'obfB'))return _0x25545f[_0x11bc94(0xb84)](_0x532f87,-0x2*0x569+-0x257b*-0x1+-0x1c7*0xf)||_0x25545f[_0x11bc94(0x95f)](_0x532f87,0x3*0x3a1+-0xb63+-0x81*-0x1);var _0x1ba3f0=_0x27fd10['fake'];if(_0x25545f[_0x11bc94(0x89d)](typeof _0x1ba3f0,_0x11bc94(0x8fd)+'r')||!_0x25545f[_0x11bc94(0xc4c)](isFinite,_0x1ba3f0))return!![];if(_0x27fd10[_0x11bc94(0x9fd)]===0x11b*-0x2+0xdf4+-0xbbd)return Math[_0x11bc94(0x419)](_0x532f87-_0x1ba3f0)<=Math['max'](0xe*-0x52+-0x12b6*-0x1+-0x14b*0xb,_0x25545f['qqKZv'](Math[_0x11bc94(0x419)](_0x1ba3f0),0x1e2+0x13f1+0x25*-0x97+0.6));return Math['abs'](_0x532f87)<0x4*0x13e36b21+0x6a1c235e+0x1*-0x7e0f05e2;}function _0xfc3383(){var _0x530ee8=_0x419cc1;if(_0x25545f[_0x530ee8(0x789)](_0x25545f[_0x530ee8(0xca2)],_0x25545f[_0x530ee8(0xca2)])){var _0x1cc92b=_0x379648['Photo'+'nNetw'+_0x530ee8(0xcd1)+'nc']||{};if(!_0x70e6cb[_0x530ee8(0xbac)](_0x1cc92b)[_0x530ee8(0xa1b)+'h'])return![];return!!_0x196221();}else{var _0x7c8217={};try{if(_0x25545f[_0x530ee8(0xdc4)](_0x530ee8(0x744),_0x530ee8(0x744)))_0x34ed16[_0x530ee8(0xc1b)+'ngs']['push'](_0x25545f['IEXpi']+_0x25545f['XSAJO']);else{var _0x52453c=window['Unity'+'WebMo'+_0x530ee8(0xba2)]&&window['Unity'+_0x530ee8(0x3c8)+'dkit'][_0x530ee8(0x57d)+'me'];_0x7c8217[_0x530ee8(0xaf0)]=_0x52453c&&_0x52453c[_0x530ee8(0x375)+'uraTa'+'g']||null,_0x7c8217[_0x530ee8(0x755)+_0x530ee8(0x69b)]=!!(_0x52453c&&_0xe105ec&&_0x25545f['ZoRwZ'](_0x52453c[_0x530ee8(0x375)+_0x530ee8(0x3be)+'g'],_0xe105ec)),_0x7c8217[_0x530ee8(0xdfc)+_0x530ee8(0xb86)+'e']=_0x52453c&&_0x52453c[_0x530ee8(0xd59)]?typeof _0x52453c['_game']:_0x25545f[_0x530ee8(0x9f7)],_0x7c8217[_0x530ee8(0x691)+_0x530ee8(0x525)+_0x530ee8(0xd9f)+_0x530ee8(0x457)+_0x530ee8(0xab7)]=!!(_0x235ba0&&_0x235ba0['_runt'+_0x530ee8(0x47f)]&&_0x25545f[_0x530ee8(0x3e5)](_0x235ba0[_0x530ee8(0x1b9)+'ime'],_0x52453c)),_0x7c8217['plugi'+_0x530ee8(0x525)+'imeGa'+'me']=_0x235ba0&&_0x235ba0['_runt'+_0x530ee8(0x47f)]&&_0x235ba0[_0x530ee8(0x1b9)+_0x530ee8(0x47f)][_0x530ee8(0xd59)]?typeof _0x235ba0[_0x530ee8(0x1b9)+_0x530ee8(0x47f)]['_game']:_0x25545f['TWYUB'];}}catch(_0x160216){_0x7c8217['error']=String(_0x160216&&_0x160216['messa'+'ge']||_0x160216);}return _0x7c8217;}}function _0x2c6c24(){var _0x5ba9f1=_0x419cc1,_0x3db41e=_0x25545f[_0x5ba9f1(0xcd2)][_0x5ba9f1(0xb76)]('|'),_0x2985c1=0x1e97*-0x1+0x3b0+-0x1ae7*-0x1;while(!![]){switch(_0x3db41e[_0x2985c1++]){case'0':var _0x902d94=_0x25545f[_0x5ba9f1(0x5c4)](_0x1b140c);continue;case'1':return _0xcdeb20;case'2':var _0xcdeb20={};continue;case'3':_0xcdeb20[_0x5ba9f1(0x467)+'Wrapp'+'er']=typeof _0x265b56;continue;case'4':var _0x50c114=[_0x5ba9f1(0x5ee)+_0x5ba9f1(0x78f)+'nce',_0x25545f[_0x5ba9f1(0xbd5)],_0x25545f[_0x5ba9f1(0xbf2)],_0x25545f['TcIxZ']];continue;case'5':try{_0xcdeb20[_0x5ba9f1(0xb1f)+'dule']=!!(_0x902d94&&_0x902d94[_0x5ba9f1(0xacf)+'e']),_0xcdeb20[_0x5ba9f1(0x6c4)+'8']=!!(_0x902d94&&_0x902d94[_0x5ba9f1(0xacf)+'e']&&_0x902d94[_0x5ba9f1(0xacf)+'e'][_0x5ba9f1(0x859)+'8']),_0xcdeb20[_0x5ba9f1(0x892)+'ytes']=_0xcdeb20[_0x5ba9f1(0x6c4)+'8']?_0x902d94[_0x5ba9f1(0xacf)+'e'][_0x5ba9f1(0x859)+'8'][_0x5ba9f1(0xa1b)+'h']:0x5*-0x358+-0x26d5+0x378d;}catch(_0x6c9d59){_0xcdeb20['hasMo'+'dule']=![],_0xcdeb20[_0x5ba9f1(0x6c4)+'8']=![],_0xcdeb20[_0x5ba9f1(0x892)+_0x5ba9f1(0x547)]=0x989*0x1+0xb*0xb+-0xa02;}continue;case'6':_0xcdeb20[_0x5ba9f1(0x8fb)+'ource']=_0x5c0a6e[_0x5ba9f1(0x5fb)+'e'];continue;case'7':for(var _0x5402e9=0x11*0x1f+0x201b*0x1+-0x222a;_0x5402e9<_0x50c114[_0x5ba9f1(0xa1b)+'h'];_0x5402e9++){var _0x86e5fb=_0x50c114[_0x5402e9],_0x38efa6=typeof window[_0x86e5fb];_0xcdeb20[_0x86e5fb]=_0x25545f[_0x5ba9f1(0x440)](_0x38efa6,_0x25545f[_0x5ba9f1(0x5d5)])?_0x25545f[_0x5ba9f1(0x5d5)]:_0x38efa6;}continue;}break;}}function _0xf46cb7(){var _0xe0f295=_0x419cc1,_0x508b31=(_0xe0f295(0x6eb)+_0xe0f295(0xd61)+_0xe0f295(0x1a3))['split']('|'),_0x65a75d=0xd55+0x10*0x44+-0x1195;while(!![]){switch(_0x508b31[_0x65a75d++]){case'0':if(_0xe588da[_0xe0f295(0xb9c)+'a'])_0x3a4cf8[_0xe0f295(0xd14)+'Look+'+_0xe0f295(0xb9c)+'a']=_0xe588da[_0xe0f295(0xb9c)+'a'];continue;case'1':if(!_0xe588da)return _0x3a4cf8;continue;case'2':var _0xe588da=_0x383ec9();continue;case'3':_0x3a4cf8['Mouse'+_0xe0f295(0xcc4)+'ptr']=_0xe588da['mouse'+_0xe0f295(0x6b4)];continue;case'4':var _0x3a4cf8={};continue;case'5':return _0x3a4cf8;case'6':for(var _0x49c5f6 in _0xe588da[_0xe0f295(0xa9c)+'s'])_0x3a4cf8[_0x25545f[_0xe0f295(0xb31)](_0xe0f295(0xd14)+_0xe0f295(0x80c),_0x49c5f6)]=_0xe588da[_0xe0f295(0xa9c)+'s'][_0x49c5f6];continue;}break;}}function _0x485d25(_0x9a8963){var _0x5f37f6=_0x419cc1,_0x14c4d0={};for(var _0x4efecd in _0x9a8963){if(_0x25545f['uLMPu'](_0x5f37f6(0xc17),_0x25545f['DLTOx'])){var _0x403b05=_0x9a8963[_0x4efecd];for(var _0x5bfcd9=-0x1a*0x146+-0xbf5*-0x2+0x932;_0x5bfcd9<_0x403b05[_0x5f37f6(0xa1b)+'h'];_0x5bfcd9++){_0x14c4d0[_0x4efecd+_0x25545f['HhNbh']+_0x403b05[_0x5bfcd9]['o'][_0x5f37f6(0x834)+'ing'](0xb53+0x22b*-0xc+0xec1*0x1)]=_0x403b05[_0x5bfcd9]['v'];}}else{if(_0x9b18ed[_0x3660ae][_0x5f37f6(0xc8d)]&&_0x3ffd7e[_0x237934][_0x5f37f6(0xc8d)][_0x5f37f6(0x145)+'ed'])_0x317f4b++;}}return _0x14c4d0;}function _0x40af97(_0x2dccc1,_0x653149){var _0x12515a=_0x419cc1,_0x2b9e3b={'YmxfQ':'#2a0f'+'1b','TqDdM':'#f7ee'+'f5','QxAZj':function(_0x407864,_0x3badd3){return _0x25545f['sXhIs'](_0x407864,_0x3badd3);},'UFioN':function(_0x511f98,_0x5762e7){var _0x26c23a=_0x29e5;return _0x25545f[_0x26c23a(0x531)](_0x511f98,_0x5762e7);}};if(_0x25545f['cvLKb']===_0x12515a(0x48e)){if(_0x25545f[_0x12515a(0xde8)](_0x2dccc1,_0x12515a(0x183))){_0x25545f[_0x12515a(0x6a7)](_0x257a7b,_0x653149&&_0x25545f[_0x12515a(0x49c)](typeof _0x653149['on'],_0x12515a(0x4d3)+'an')?_0x653149['on']:_0x241f20['on'],_0x653149&&_0x25545f[_0x12515a(0xd6b)](typeof _0x653149['facto'+'r'],_0x12515a(0x8fd)+'r')?_0x653149[_0x12515a(0x3f2)+'r']:_0x241f20['facto'+'r']);return;}if(_0x2dccc1!==_0x25545f[_0x12515a(0xc23)])return;var _0x4dc9c0=_0x25545f[_0x12515a(0xdca)](_0x409d10),_0x43e8b5=_0x485d25(_0x4dc9c0),_0x143dae=_0x25545f['aCIMV'](_0xf46cb7);for(var _0x4a97a8 in _0x143dae)_0x43e8b5[_0x4a97a8]=_0x143dae[_0x4a97a8];if(!_0x34b7fe){_0x34b7fe=_0x43e8b5,_0x14b2ed=[],_0x2b52f3(_0x25545f['ELFsd'],{'report':_0x4f4138()});return;}_0x14b2ed=[];for(var _0x23623d in _0x43e8b5){var _0x462e34=_0x34b7fe[_0x23623d],_0x1941f5=_0x43e8b5[_0x23623d];if(_0x462e34!==_0x1941f5)_0x14b2ed[_0x12515a(0x90b)](_0x25545f[_0x12515a(0x835)](_0x23623d+':\x20'+_0x462e34+'\x20->\x20',_0x1941f5));}_0x34b7fe=_0x43e8b5,_0x2b52f3(_0x25545f[_0x12515a(0x6c9)],{'report':_0x4f4138()});}else{_0x7eae3a['sp']&&(_0x4f7c22['sp'][_0x12515a(0xe00)+'onten'+'t']=_0x3cdd28['on']?_0x12515a(0x9fb)+_0x12515a(0x7ee):'Speed'+'\x20off',_0x4d0b15['sp'][_0x12515a(0xbf4)][_0x12515a(0xc44)+'round']=_0x246039['on']?_0x4b8186:'trans'+'paren'+'t',_0x505aaf['sp']['style'][_0x12515a(0x8d2)]=_0x262caa['on']?_0x2b9e3b['YmxfQ']:_0x2b9e3b['TqDdM']);if(_0x3a87b5['fx'])_0x3073d1['fx']['value']=_0x2b9e3b['QxAZj'](_0x159519,_0x12c663['facto'+'r']);if(_0x1593d2['fv'])_0x13d6f6['fv'][_0x12515a(0xe00)+'onten'+'t']=_0x2b9e3b[_0x12515a(0x2d1)](_0x1df29a[_0x12515a(0x3f2)+'r']['toFix'+'ed'](0x770*-0x2+-0xda+0xfbb),'x');}}var _0x2eb502=null;function _0x1f49f6(){var _0x53527f=_0x419cc1;if(_0x2eb502)return _0x2eb502;try{if('aRjcE'!=='NvVLf'){if(!document[_0x53527f(0x816)]||!document[_0x53527f(0x816)]['appen'+_0x53527f(0x48f)+'d'])return null;if(!document[_0x53527f(0x619)+'ement'+'ById'](_0x25545f['XWzHq'])){var _0x5f1ce2=document[_0x53527f(0x8e6)+_0x53527f(0x2c7)+_0x53527f(0xba7)](_0x25545f[_0x53527f(0x5e4)]);_0x5f1ce2['id']=_0x25545f['XWzHq'],_0x5f1ce2['textC'+_0x53527f(0x7d1)+'t']='#saku'+_0x53527f(0xcc3)+'-hud{'+_0x53527f(0x8f6)+_0x53527f(0x924)+'l}',(document[_0x53527f(0x169)]||document['docum'+'entEl'+'ement'])['appen'+'dChil'+'d'](_0x5f1ce2);}var _0x5bed2c=document[_0x53527f(0x8e6)+_0x53527f(0x2c7)+_0x53527f(0xba7)](_0x53527f(0x166));_0x5bed2c['id']=_0x53527f(0xa83)+'a-sw-'+_0x53527f(0x9ff),_0x5bed2c['style'][_0x53527f(0x31f)+'xt']=_0x25545f['gBztr'](_0x53527f(0x926)+'ion:f'+'ixed;'+_0x53527f(0x6e6)+'8px;b'+_0x53527f(0x528)+':8px;'+_0x53527f(0xa6f)+_0x53527f(0x9f0)+_0x53527f(0x699)+_0x53527f(0x152)+'ispla'+'y:fle'+'x;fle'+'x-dir'+_0x53527f(0x496)+_0x53527f(0xccc)+'umn;g'+_0x53527f(0xc5e)+'x;'+('backg'+'round'+_0x53527f(0x685)+_0x53527f(0x939)+_0x53527f(0x9d0)+_0x53527f(0x16e)+_0x53527f(0x90e)+'r:1px'+_0x53527f(0x657)+_0x53527f(0x9a6)+'a(255'+_0x53527f(0x65d)+_0x53527f(0x733)+_0x53527f(0xc22)+_0x53527f(0xc04)+_0x53527f(0xb53)+_0x53527f(0x647)+'px;')+(_0x53527f(0x5dc)+_0x53527f(0x39a)+_0x53527f(0x422)+_0x53527f(0xba4)+_0x53527f(0x620)+_0x53527f(0xa92)+_0x53527f(0x469)+'onosp'+_0x53527f(0xc6c)+_0x53527f(0x188)+'as,mo'+'nospa'+_0x53527f(0x15f)+_0x53527f(0xc6a)+'f7eef'+'5;'),_0x25545f['PVgcq']);var _0x25c563=_0x53527f(0x673)+_0x53527f(0x77e)+'a=\x22st'+_0x53527f(0x70e)+_0x53527f(0xc10)+_0x53527f(0x8d2)+_0x53527f(0x2c6)+_0x53527f(0x28c)+_0x53527f(0x87b)+_0x53527f(0x51a)+'90px;'+'\x22></d'+'iv>';_0x5bed2c[_0x53527f(0x260)+'HTML']=_0x25545f[_0x53527f(0xb2f)](_0x25545f[_0x53527f(0x380)](_0x25545f['zfrrN'](_0x25545f[_0x53527f(0x6e9)](_0x25545f['tyEtC'](_0x25545f['igNCp'](_0x25545f['EsslP'](_0x53527f(0x673)+'data-'+'a=\x22ba'+'r\x22\x20st'+_0x53527f(0xc10)+_0x53527f(0x747)+_0x53527f(0xd10)+_0x53527f(0x490)+_0x53527f(0xdb0)+_0x53527f(0x6ee)+_0x53527f(0xdab)+_0x53527f(0x653)+'nter;'+_0x53527f(0x226)+_0x53527f(0x7bb)+_0x53527f(0x6b1)+_0x53527f(0x25b)+_0x53527f(0x2d6)+'290px'+_0x53527f(0x9ac),_0x53527f(0x6ac)+'yle=\x22'+_0x53527f(0x8d2)+':')+_0xe38ae3,_0x25545f[_0x53527f(0x73e)]),_0x53527f(0x526)+_0x53527f(0x801)+_0x53527f(0x9e0)+_0x53527f(0xb27)+_0x53527f(0xbf4)+_0x53527f(0xc9d)+'kgrou'+_0x53527f(0x934)+'anspa'+_0x53527f(0x92f)+_0x53527f(0x90e)+_0x53527f(0xd57)+'\x20soli'+'d\x20rgb'+_0x53527f(0xd3b)+',143,'+'177,.'+'45);')+('color'+_0x53527f(0xa12)+_0x53527f(0xced)+_0x53527f(0xc04)+_0x53527f(0xb53)+_0x53527f(0xb4c)+'x;pad'+_0x53527f(0x6a5)+'2px\x208'+'px;cu'+_0x53527f(0x53a)+_0x53527f(0x18f)+'er;fo'+_0x53527f(0x281)+'herit'+';\x22>Sp'+_0x53527f(0xd85)+'ff</b'+'utton'+'>')+(_0x53527f(0xc7d)+'t\x20dat'+'a-a=\x22'+_0x53527f(0x221)+'ype=\x22'+'range'+_0x53527f(0x430)+_0x53527f(0x2cb)+'max=\x22'+_0x53527f(0xb46)+'ep=\x220'+_0x53527f(0xb85)+'alue='+'\x222\x22\x20s'+_0x53527f(0xad6)+_0x53527f(0x199)+_0x53527f(0xaa7)+'x;acc'+'ent-c'+_0x53527f(0x214))+_0xe38ae3+_0x25545f['QavNz'],_0x53527f(0xd03)+_0x53527f(0x456)+'-a=\x22f'+_0x53527f(0xc0e)+_0x53527f(0xc10)+_0x53527f(0x8d2)+_0x53527f(0x2e1)+_0x53527f(0x60a)+'in-wi'+'dth:3'+_0x53527f(0x453)+_0x53527f(0x5d2)+_0x53527f(0x473)+'n>')+(_0x53527f(0x526)+'on\x20da'+_0x53527f(0x9e0)+'\x22esp\x22'+_0x53527f(0x151)+'e=\x22ba'+'ckgro'+_0x53527f(0xc40)+_0x53527f(0x904)+_0x53527f(0x464)+';bord'+_0x53527f(0xd87)+_0x53527f(0x819)+_0x53527f(0x3c5)+'ba(25'+'5,143'+_0x53527f(0x64f)+_0x53527f(0xc20))+_0x25545f['Llzla'],_0x53527f(0x526)+_0x53527f(0x801)+_0x53527f(0x9e0)+_0x53527f(0xafa)+_0x53527f(0xcf7)+'le=\x22b'+_0x53527f(0xb70)+'ound:'+_0x53527f(0x294)+_0x53527f(0x3dc)+_0x53527f(0x70f)+'der:1'+_0x53527f(0x54c)+_0x53527f(0x463)+'gba(2'+'55,14'+'3,177'+_0x53527f(0xa42)+';')+(_0x53527f(0x8d2)+':#f7e'+_0x53527f(0xced)+'order'+'-radi'+_0x53527f(0xb4c)+'x;pad'+'ding:'+'2px\x207'+'px;cu'+'rsor:'+_0x53527f(0x18f)+'er;fo'+_0x53527f(0x281)+'herit'+';\x22>Sn'+'ap</b'+_0x53527f(0x856)+'>')+_0x25545f[_0x53527f(0xae5)]+_0x25545f['AMQry'],_0x25545f[_0x53527f(0x202)]),_0x25545f[_0x53527f(0x16b)])+('<div\x20'+_0x53527f(0x77e)+_0x53527f(0xab3)+_0x53527f(0x70e)+_0x53527f(0xc10)+_0x53527f(0x8d2)+_0x53527f(0x2c6)+_0x53527f(0x28c)+_0x53527f(0x87b)+'dth:2'+_0x53527f(0x203)+'\x22></d'+'iv>'),_0x5bed2c[_0x53527f(0x260)+_0x53527f(0x2e8)]=_0x25c563;var _0x32515c=function(_0x2831f6){var _0x552a00=_0x53527f;return _0x5bed2c[_0x552a00(0x1db)+'Selec'+'tor'](_0x25545f['aQKIi']('[data'+_0x552a00(0xa8a)+_0x2831f6,'\x22]'));},_0x53dd4d=_0x25545f['Tfnzp'](_0x32515c,'st'),_0x3e4d49=_0x32515c(_0x25545f[_0x53527f(0xc69)]),_0x1a0952=_0x32515c('sp'),_0x1c7a9d=_0x25545f[_0x53527f(0x9dd)](_0x32515c,'fx'),_0x37baa2=_0x32515c('fv'),_0x12e903=_0x25545f[_0x53527f(0xc71)](_0x32515c,_0x53527f(0x9ed));if(_0x1a0952)_0x1a0952['oncli'+'ck']=function(){_0x25545f['Fptlv'](_0x257a7b,!_0x241f20['on'],_0x241f20['facto'+'r']);};if(_0x1c7a9d)_0x1c7a9d[_0x53527f(0x829)+'ut']=function(){_0x257a7b(_0x241f20['on'],parseFloat(_0x1c7a9d['value'])||-0x1*-0xc67+0x73c*-0x1+-0x52a);};if(_0x32515c(_0x53527f(0x36f)))_0x25545f['JfrKR'](_0x32515c,_0x53527f(0x36f))[_0x53527f(0x523)+'ck']=function(){var _0x3a4202=_0x53527f;_0x25545f[_0x3a4202(0x44e)](_0x40af97,_0x3a4202(0x95e)+_0x3a4202(0x1e5));};var _0x34da80=_0x32515c(_0x25545f['SRerR']);if(_0x34da80)_0x34da80['oncli'+'ck']=function(){var _0x4eb9bf=_0x53527f;if(!_0x116441['on'])_0xd2405c(!![],![]);else{if(_0x116441[_0x4eb9bf(0x3ca)])_0xd2405c(![],![]);else{if(_0x25545f[_0x4eb9bf(0xdca)](_0x1e55f7))_0xd2405c(!![],!![]);else _0xd2405c(![],![]);}}};if(_0x25545f['lUfui'](_0x32515c,_0x53527f(0x615)))_0x32515c('fold')['oncli'+'ck']=function(){var _0x401c68=_0x53527f;if(!_0x12e903)return;var _0x471d4b=_0x25545f['eWuoU'](_0x12e903['style'][_0x401c68(0x747)+'ay'],_0x401c68(0x165));_0x12e903[_0x401c68(0xbf4)][_0x401c68(0x747)+'ay']=_0x471d4b?'':_0x25545f['TWYUB'],_0x32515c('fold')[_0x401c68(0xe00)+_0x401c68(0x7d1)+'t']=_0x471d4b?'-':'+';};return document['body'][_0x53527f(0xcad)+_0x53527f(0x48f)+'d'](_0x5bed2c),_0x2eb502={'el':_0x5bed2c,'st':_0x53dd4d,'st2':_0x3e4d49,'sp':_0x1a0952,'fx':_0x1c7a9d,'fv':_0x37baa2,'esp':_0x34da80},_0x2eb502;}else return _0x835205['error'+'s'][_0x53527f(0x90b)](_0x53527f(0xdc3)+_0x53527f(0xa72)+'call'),_0x358cea;}catch(_0x48e8f1){return console[_0x53527f(0x642)]('%c[sa'+'kura]'+'\x20in-f'+_0x53527f(0xb14)+_0x53527f(0x937)+'isabl'+'ed',_0x53527f(0x8d2)+':'+_0xe38ae3,_0x48e8f1),null;}}function _0x1e55f7(){var _0x158b1f=_0x419cc1;try{var _0x4a32c5=_0x25545f['dxguv'](_0x4452e2);if(_0x4a32c5[_0x158b1f(0x538)])return!![];var _0x509d68=_0x4e9051();return!!(_0x509d68&&_0x3231bb['ident'+_0x158b1f(0x66c)]);}catch(_0x64d38b){return![];}}function _0x5551fa(){var _0x563541=_0x419cc1;try{var _0x45717f=_0x2eb502&&_0x2eb502[_0x563541(0x363)];if(!_0x45717f)return;if(_0x116441[_0x563541(0x3ca)]&&!_0x1e55f7())_0x116441['boxes']=![];var _0x19a85b=!_0x116441['on']?_0x25545f['SjQTT']:_0x116441[_0x563541(0x3ca)]?_0x25545f[_0x563541(0x529)]:_0x563541(0x9e4)+'ap';if(_0x19a85b!==_0x45717f['textC'+'onten'+'t'])_0x45717f[_0x563541(0xe00)+_0x563541(0x7d1)+'t']=_0x19a85b;_0x45717f['style']['backg'+'round']=_0x116441['on']?_0xe38ae3:_0x563541(0x294)+_0x563541(0x3dc)+'t',_0x45717f[_0x563541(0xbf4)]['color']=_0x116441['on']?_0x25545f[_0x563541(0x2ab)]:_0x563541(0xad5)+'f5';}catch(_0x2acb3b){}}function _0xd2405c(_0x2a3530,_0x3a9f42){var _0x4abd64=_0x419cc1,_0x3ae7bb={'ZCgSM':_0x4abd64(0xca8)+_0x4abd64(0x5f8)+_0x4abd64(0x390)+'\x2060s\x20'+_0x4abd64(0x9b4)+_0x4abd64(0x259)+'t\x20inj'+_0x4abd64(0x3f1)+'?','uPjpf':'#ffb3'+'c7','vaPPI':function(_0x7ba874,_0x5d2fd5){return _0x7ba874+_0x5d2fd5;},'vspPI':function(_0x1094e2,_0x54a8c0){return _0x1094e2+_0x54a8c0;},'Rvtep':_0x4abd64(0x460)+_0x4abd64(0xbb3)+'rame\x20'+'never'+'\x20post'+_0x4abd64(0x972)+'singl'+'e\x20rep'+'ort.\x0a'+'\x0a','eZoNj':'This\x20'+_0x4abd64(0x328)+'\x20prov'+_0x4abd64(0x978)+'e\x20use'+'rscri'+_0x4abd64(0xddd)+_0x4abd64(0x705)+'alled'+_0x4abd64(0x888)+_0x4abd64(0x5ad)+_0x4abd64(0x381)+'\x20the\x20'+_0x4abd64(0xcea)+_0x4abd64(0x952),'oifbL':_0x4abd64(0x9be)+'e\x20rem'+'ainin'+_0x4abd64(0xa32)+'pects'+'\x20are:'+'\x0a\x0a','sJLIN':_0x25545f['ZloHP']};if(_0x25545f['TMwvp'](_0x4abd64(0x9c7),_0x25545f[_0x4abd64(0x3ae)])){if(_0x50b493)return;if(!_0x588a0d||!_0x19038b)return;_0x2993a6[_0x4abd64(0xe00)+_0x4abd64(0x7d1)+'t']=_0x3ae7bb['ZCgSM'],_0x1994fd[_0x4abd64(0xbf4)][_0x4abd64(0x8d2)]=_0x3ae7bb[_0x4abd64(0x2e0)],_0x278822['textC'+_0x4abd64(0x7d1)+'t']=_0x3ae7bb['vaPPI'](_0x3ae7bb[_0x4abd64(0x2da)](_0x3ae7bb['vspPI'](_0x3ae7bb[_0x4abd64(0x2da)](_0x3ae7bb[_0x4abd64(0x9d4)],_0x3ae7bb[_0x4abd64(0x1a8)])+_0x3ae7bb[_0x4abd64(0x186)],_0x3ae7bb[_0x4abd64(0x1f9)]),'\x20\x202.\x20'+'The\x20p'+_0x4abd64(0x44b)+_0x4abd64(0x24d)+'t\x20bee'+_0x4abd64(0xb09)+'oaded'+_0x4abd64(0xd9c)+_0x4abd64(0x3bc)+_0x4abd64(0x92d)+_0x4abd64(0x87e))+(_0x4abd64(0x2ca)+'Both\x20'+_0x4abd64(0xa83)+'a.ski'+_0x4abd64(0x36d)+'z.use'+_0x4abd64(0xa50)+_0x4abd64(0xb80)+_0x4abd64(0x5eb)+'d\x20dia'+_0x4abd64(0x735)+'ipt\x20a'+_0x4abd64(0x3c4)),_0x4abd64(0x22a)+'insta'+'lled\x20'+_0x4abd64(0xc8a)+_0x4abd64(0x63e)+_0x4abd64(0x79d)+'\x20UWMK'+_0x4abd64(0x58a)+'\x20patc'+_0x4abd64(0x815)+_0x4abd64(0x8b7)+'bly.i'+_0x4abd64(0xb2e)+_0x4abd64(0x567)+'.\x0a\x0a')+(_0x4abd64(0xb7a)+_0x4abd64(0x868)+_0x4abd64(0x4f4)+_0x4abd64(0x9d5)+_0x4abd64(0xb04)+_0x4abd64(0x888)+_0x4abd64(0x1b6)+_0x4abd64(0xb1b)+_0x4abd64(0x5d7)+_0x4abd64(0x3c0)+_0x4abd64(0x4e6));}else{_0x116441['on']=!!_0x2a3530,_0x116441['boxes']=!!_0x3a9f42,_0x25545f[_0x4abd64(0xdca)](_0x5551fa);try{var _0x9054ce=_0x1b8dc6();if(_0x9054ce&&_0x9054ce['el'])_0x9054ce['el'][_0x4abd64(0xbf4)][_0x4abd64(0x747)+'ay']=_0x116441['on']?'':_0x4abd64(0x165);var _0x65213c=_0x1e3610;if(_0x65213c&&_0x65213c['cv'])_0x65213c['cv']['style'][_0x4abd64(0x747)+'ay']=_0x116441['on']&&_0x116441['boxes']?'':_0x25545f[_0x4abd64(0x9f7)];}catch(_0xa673e4){}}}var _0x490f4c=-0x1*-0x2621+-0x9*0x1e2+-0x152d;function _0x257a7b(_0x36c430,_0x1af3c6){var _0x578917=_0x419cc1,_0xa0946f={'ssdgO':function(_0x3d9471,_0x186837){var _0x1c868c=_0x29e5;return _0x25545f[_0x1c868c(0x82a)](_0x3d9471,_0x186837);}};if(_0x25545f['mDZuV']('kDqTm',_0x25545f[_0x578917(0x719)])){var _0x2a8ebb=_0xa0946f['ssdgO'](_0x19cbea,'\x0a')+_0x92d189[_0x578917(0x6fb)+_0x578917(0x501)](_0x2f5c66,null,0x146d+-0x166*-0x7+-0x1e36)+'\x0a'+_0x3ba12f;if(_0xa708b8[_0x578917(0x172)+'oard']&&_0x17661f[_0x578917(0x172)+_0x578917(0x5e6)][_0x578917(0xc7c)+'Text'])_0x5b0375[_0x578917(0x172)+'oard'][_0x578917(0xc7c)+_0x578917(0x999)](_0x2a8ebb)['then'](function(){var _0x3d613a=_0x578917;_0x30ef32['textC'+_0x3d613a(0x7d1)+'t']=_0x3d613a(0x7e3)+'d';});else _0x3288ed[_0x578917(0xe00)+'onten'+'t']=_0x578917(0xdb5)+_0x578917(0xde1)+'block'+'ed\x20-\x20'+'open\x20'+_0x578917(0x19e)+'anel\x20'+'inste'+'ad';}else{var _0x3671a7=_0x241f20['on'];_0x241f20['on']=!!_0x36c430;if(_0x241f20['on']&&!_0x3671a7&&(_0x1af3c6===undefined||_0x1af3c6===null||Number(_0x1af3c6)===0x135d+-0xb8*0xb+-0xb74)){if(_0x25545f['gVxqd'](_0x578917(0xaf3),_0x578917(0xaf3)))_0x1af3c6=_0x490f4c;else return![];}_0x241f20['facto'+'r']=Math[_0x578917(0xc96)](_0x241f20[_0x578917(0x932)],Math['max'](_0x241f20['min'],_0x25545f['Tmxle'](Number,_0x1af3c6)||0x875*-0x3+-0x1*-0x1877+-0xe9*-0x1));if(!_0x241f20['on'])_0x550f12={};var _0x2ebdb6=_0x1f49f6();if(_0x2ebdb6){_0x2ebdb6['sp']&&(_0x2ebdb6['sp']['textC'+_0x578917(0x7d1)+'t']=_0x241f20['on']?_0x578917(0x9fb)+_0x578917(0x7ee):_0x25545f[_0x578917(0xa75)],_0x2ebdb6['sp'][_0x578917(0xbf4)][_0x578917(0xc44)+_0x578917(0x494)]=_0x241f20['on']?_0xe38ae3:_0x25545f[_0x578917(0x28d)],_0x2ebdb6['sp']['style'][_0x578917(0x8d2)]=_0x241f20['on']?_0x25545f[_0x578917(0x2ab)]:'#f7ee'+'f5');if(_0x2ebdb6['fx'])_0x2ebdb6['fx'][_0x578917(0x467)]=String(_0x241f20['facto'+'r']);if(_0x2ebdb6['fv'])_0x2ebdb6['fv']['textC'+_0x578917(0x7d1)+'t']=_0x25545f[_0x578917(0x659)](_0x241f20['facto'+'r']['toFix'+'ed'](-0xb8c+-0x2*-0x3b3+0x1*0x427),'x');}}}function _0x55f412(_0x538cd0){var _0x4068a8=_0x419cc1,_0xdc8c93=_0x1f49f6();if(!_0xdc8c93||!_0xdc8c93['st'])return;try{if(!_0x104fe0()&&!_0x3cf7e5){if(_0xdc8c93['el'])_0xdc8c93['el']['style'][_0x4068a8(0x747)+'ay']='none';return;}if(_0xdc8c93['el'])_0xdc8c93['el']['style'][_0x4068a8(0x747)+'ay']='';var _0x4c83ec=Object['keys'](_0x538cd0&&_0x538cd0[_0x4068a8(0xd7e)+'nces']||{})[_0x4068a8(0xa1b)+'h'],_0x3b01c2=_0x538cd0&&_0x538cd0['esp']||null,_0xd2cd0a=_0x3b01c2?_0x3b01c2[_0x4068a8(0xd6f)+_0x4068a8(0x4ed)]||-0x1463*-0x1+-0x181f+0x3bc:-0x3d*0x71+-0x1293+0x2d80,_0x36542a=_0x3b01c2?_0x3b01c2['botCo'+'unt']||0xa7a+-0x1078+0x5fe:-0x1*0xf62+-0x16f3+-0x2655*-0x1,_0x278a44=_0x2b173d?(_0x2b173d[_0x4068a8(0xa39)+'r']['byteL'+_0x4068a8(0x79e)]/(0xd79a+0x12b869+-0x52e9*0xb))['toFix'+'ed'](-0x2470+-0x67a*-0x4+0xa88)+'MB':_0x25545f[_0x4068a8(0xaad)],_0x271812=_0x25545f[_0x4068a8(0x636)](_0x25545f['qZQcO'](_0x25545f[_0x4068a8(0x739)]('v',_0x538cd0&&_0x538cd0['versi'+'on']||_0x4b2487)+('\x20\x20hoo'+_0x4068a8(0x7ad))+(_0x538cd0&&_0x538cd0[_0x4068a8(0x414)+'Appli'+'ed']||0x1a50*0x1+0x9*0x137+0x1*-0x253f)+'/'+(_0x538cd0&&_0x538cd0['hooks'+'Total']||0xb40+-0x476*0x7+-0x9fd*-0x2),_0x4068a8(0x714)+'s\x20')+_0x4c83ec+_0x25545f[_0x4068a8(0x247)]+_0x278a44+(_0x4068a8(0xdbf)+_0x4068a8(0x511)),_0x3cc99f);_0xdc8c93['st'][_0x4068a8(0xe00)+'onten'+'t']=_0x271812;var _0x184a93=_0xdc8c93[_0x4068a8(0x90d)];if(_0x184a93){if(_0x4068a8(0xa13)!==_0x25545f[_0x4068a8(0xac2)])_0x184a93['textC'+_0x4068a8(0x7d1)+'t']=_0x25545f['rMrEr'](_0xd2cd0a,-0x3*-0xc4f+-0x15b2+-0xf3b)?_0x25545f[_0x4068a8(0xb92)](_0x25545f['etFsS']('PLAYE'+'RS\x20'+_0xd2cd0a,_0x36542a?_0x25545f['gbKBV'](_0x25545f[_0x4068a8(0x946)]('\x20+\x20',_0x36542a),_0x25545f['CwTRN']):''),_0x3b01c2&&_0x3b01c2[_0x4068a8(0xb9c)+'a']?_0x4068a8(0x6f8)+'\x20'+_0x3b01c2['camer'+_0x4068a8(0x6c8)]:_0x25545f['oukHL']):_0x25545f[_0x4068a8(0x2bb)](_0x4068a8(0xcdd)+'emies'+'\x20yet\x20'+'(lobb'+_0x4068a8(0x395)+_0x4068a8(0xabf),_0x3b01c2&&_0x3b01c2['camer'+'a']?_0x3b01c2['camer'+'aFrom']:'-'),_0x184a93[_0x4068a8(0xbf4)]['color']=_0xd2cd0a>-0x1bfa+0x212a+-0x530?'#7ee0'+'a8':_0x4068a8(0xdd7)+'99';else{if(_0x3f9aa0==='speed'){_0x25545f['TDVZI'](_0x5d2623,_0x3d046c&&_0x25545f[_0x4068a8(0xcec)](typeof _0xf22193['on'],_0x25545f[_0x4068a8(0x973)])?_0x5d539f['on']:_0x375db2['on'],_0x5437b0&&typeof _0x59a14f['facto'+'r']===_0x25545f['mqoAS']?_0x270ab5['facto'+'r']:_0x27aab4[_0x4068a8(0x3f2)+'r']);return;}if(_0x56ecae!==_0x25545f[_0x4068a8(0xc23)])return;var _0x4ae4ed=_0x25545f[_0x4068a8(0x5a0)](_0x552f12),_0x38ab6f=_0x25545f['tUIgt'](_0x1351da,_0x4ae4ed),_0x4d1645=_0xef8cfc();for(var _0x15e51e in _0x4d1645)_0x38ab6f[_0x15e51e]=_0x4d1645[_0x15e51e];if(!_0x80c2a){_0x192cb2=_0x38ab6f,_0x109422=[],_0x25545f['LkSph'](_0x38fbf1,_0x4068a8(0x1f6)+'t',{'report':_0x33aa41()});return;}_0x3a6801=[];for(var _0x3f0df9 in _0x38ab6f){var _0x16c03c=_0x285bf4[_0x3f0df9],_0x6bc143=_0x38ab6f[_0x3f0df9];if(_0x16c03c!==_0x6bc143)_0x5ee029[_0x4068a8(0x90b)](_0x25545f[_0x4068a8(0xd55)](_0x25545f['WqZRF'](_0x3f0df9,':\x20')+_0x16c03c,_0x4068a8(0x34d))+_0x6bc143);}_0xee3950=_0x38ab6f,_0x25545f[_0x4068a8(0x1be)](_0xdd710f,_0x4068a8(0x1f6)+'t',{'report':_0x52881a()});}}}catch(_0x54fc59){}}window[_0x419cc1(0x204)+'entLi'+_0x419cc1(0x417)+'r']('keydo'+'wn',function(_0x1ccdd4){var _0x2c7f35=_0x419cc1,_0x50d05f={'TKNTO':function(_0x44bb7d,_0x55d436){return _0x44bb7d/_0x55d436;},'vGTrj':function(_0xd96d94,_0x16c502){var _0x293523=_0x29e5;return _0x25545f[_0x293523(0x62b)](_0xd96d94,_0x16c502);},'vrwZx':_0x2c7f35(0x93d)+_0x2c7f35(0x37d)+'\x20pane'+'l\x20upd'+_0x2c7f35(0xc2d)+_0x2c7f35(0xa35),'NghpE':_0x2c7f35(0x8d2)+':','HVxax':function(_0xcbe290,_0xf23083){return _0xcbe290(_0xf23083);}};if(!_0x1ccdd4)return;try{if(_0x2c7f35(0x977)!==_0x25545f['GQOsq']){if(_0x25545f['bXTra'](_0x1ccdd4[_0x2c7f35(0xa82)],'F9')){if(_0x25545f['fToiH'](_0x2c7f35(0x1ca),'mKMjA'))return _0x50d05f['TKNTO'](_0x3455c7['round'](_0x50d05f[_0x2c7f35(0xa97)](_0x2de061,0xd75+-0x11e6+-0x4d5*-0x1)),0x1f43*0x1+0x194a+-0x3829);else{_0x1ccdd4[_0x2c7f35(0x7bf)+_0x2c7f35(0xbe0)+_0x2c7f35(0x5c0)](),_0x25545f['HWckH'](_0x40af97,_0x25545f[_0x2c7f35(0xc23)]);return;}}if(_0x25545f['LuQyD'](_0x1ccdd4['code'],'F7')){if(_0x2c7f35(0xb16)===_0x2c7f35(0xb16)){_0x1ccdd4['preve'+_0x2c7f35(0xbe0)+_0x2c7f35(0x5c0)](),_0x257a7b(!_0x241f20['on'],_0x241f20['facto'+'r']);return;}else _0x1ad75d[_0x2c7f35(0x642)](_0x50d05f[_0x2c7f35(0x374)],_0x50d05f['NghpE']+_0x3d9dc2,_0x21ad74);}if(_0x1ccdd4[_0x2c7f35(0xa82)]==='F8'){_0x1ccdd4['preve'+_0x2c7f35(0xbe0)+_0x2c7f35(0x5c0)](),_0x257a7b(_0x241f20['on'],_0x241f20[_0x2c7f35(0x3f2)+'r']+(0xcd7*0x2+-0x1*-0x2dd+-0x1c8b*0x1+0.5));return;}if(_0x25545f['vmgEo'](_0x1ccdd4[_0x2c7f35(0xa82)],'F6')){_0x1ccdd4[_0x2c7f35(0x7bf)+'ntDef'+_0x2c7f35(0x5c0)](),_0x257a7b(_0x241f20['on'],_0x25545f['iCxvV'](_0x241f20[_0x2c7f35(0x3f2)+'r'],-0x49e+-0x3e8*0x3+0x1056+0.5));return;}if(_0x1ccdd4[_0x2c7f35(0xa82)]===_0x25545f[_0x2c7f35(0x7cd)]){_0x1ccdd4[_0x2c7f35(0x7bf)+'ntDef'+_0x2c7f35(0x5c0)](),_0x25545f[_0x2c7f35(0xcc5)](_0x27a635,!_0x3314c7['open']);return;}if(_0x1ccdd4['code']===_0x2c7f35(0xcc9)+_0x2c7f35(0x2c8)+'ht'){_0x1ccdd4[_0x2c7f35(0x7bf)+_0x2c7f35(0xbe0)+_0x2c7f35(0x5c0)](),_0x9e54cb[_0x2c7f35(0xa2e)]=Math[_0x2c7f35(0xc96)](0xb*0x9f+0x1622+0x5*-0x5af,_0x9e54cb[_0x2c7f35(0xa2e)]+(0x2*-0x4ea+0xf*0x1e6+-0x12a4)),_0x25545f[_0x2c7f35(0xc2b)](_0x4f1dfe);return;}if(_0x1ccdd4[_0x2c7f35(0xa82)]===_0x2c7f35(0xcc9)+'etLef'+'t'){_0x1ccdd4[_0x2c7f35(0x7bf)+_0x2c7f35(0xbe0)+_0x2c7f35(0x5c0)](),_0x9e54cb['fov']=Math['max'](-0x45*0x74+-0x2640+0x45a2,_0x9e54cb[_0x2c7f35(0xa2e)]-(0x14cb+0x19ba+-0x2e83)),_0x4f1dfe();return;}}else{var _0x3c980b=_0x5aadec['getIt'+'em'](_0x4a00d7);if(_0x3c980b)_0x39e284[_0x2c7f35(0xa2e)]=_0x2ccf74[_0x2c7f35(0xc96)](0x93f+-0xaa5+-0xa6*-0x3,_0x287c8a[_0x2c7f35(0x932)](-0x2229+0x1e32+-0xd1*-0x5,_0x50d05f[_0x2c7f35(0x58f)](_0x47b732,_0x3c980b)||0x24e9+-0xec4+-0x15cb));}}catch(_0x55b8af){}},!![]);var _0x116441={'on':!![],'span':0x50,'boxes':![]};function _0x383ec9(){var _0x1bbd1c=_0x419cc1,_0x17ec27={'NKJyi':_0x1bbd1c(0x2fb)+'ra-sw'+_0x1bbd1c(0x2ef)+'all:i'+_0x1bbd1c(0x924)+'l}','IQKin':function(_0xcbefdb,_0xaf301c){return _0x25545f['SQUmj'](_0xcbefdb,_0xaf301c);},'TgZIz':_0x25545f[_0x1bbd1c(0xaad)],'rQFeW':function(_0x3b601d,_0x155f86){return _0x3b601d+_0x155f86;},'SQDsv':'\x20+\x20','CEtxa':function(_0x517dd7,_0x1f827e){var _0x3c8134=_0x1bbd1c;return _0x25545f[_0x3c8134(0x3d8)](_0x517dd7,_0x1f827e);},'FNOxT':_0x25545f[_0x1bbd1c(0x39e)],'oIgcm':function(_0xf9aab9,_0x5d8eff){return _0xf9aab9>_0x5d8eff;},'QMLzN':_0x25545f['EQbmg'],'gsPHH':function(_0x34d642,_0x1cbec7){return _0x34d642+_0x1cbec7;},'dHtku':function(_0x3f71f4,_0x16bd46){return _0x3f71f4+_0x16bd46;},'QSnaE':function(_0x1e979c,_0x46b6cb){return _0x1e979c+_0x46b6cb;},'iShdz':function(_0xf0a298,_0x400800){var _0x49c8e0=_0x1bbd1c;return _0x25545f[_0x49c8e0(0xbb2)](_0xf0a298,_0x400800);},'rLVgZ':_0x1bbd1c(0x9da)+'ks\x20'};if('GDSFE'!==_0x1bbd1c(0x8c4)){var _0x727fca=_0x5c7ec5[_0x1bbd1c(0x75d)+_0x1bbd1c(0x6f4)+_0x1bbd1c(0xcd1)+'nc']||{},_0x5ebdfb=Object['keys'](_0x727fca);for(var _0x499f1c=-0xe9a+-0x215*0x11+-0x1*-0x31ff;_0x499f1c<_0x5ebdfb['lengt'+'h'];_0x499f1c++){if(_0x1bbd1c(0xc98)===_0x1bbd1c(0xc98)){var _0x1879e8=_0x727fca[_0x5ebdfb[_0x499f1c]][_0x1bbd1c(0x936)],_0x1dd3cd=_0x25545f[_0x1bbd1c(0x95d)](_0x2ee0ee,_0x1879e8+(0x191*0x1+0x1c70+-0x1dd1),_0x25545f['EPPYv']);if(!_0x1dd3cd)continue;var _0x236798=_0x3e1fdb[_0x1bbd1c(0xd14)+_0x1bbd1c(0x6b4)]||[],_0x40fc21={'mouseLook':'0x'+(_0x1dd3cd>>>0x812+0xb73+-0x1385)['toStr'+'ing'](0x1801+-0x5f7+-0x11fa),'floats':{},'camera':null,'vec2':null};for(var _0x3a421=-0x125*0x18+-0x1e89+0x3a01;_0x3a421<_0x236798[_0x1bbd1c(0xa1b)+'h'];_0x3a421++){if(_0x25545f[_0x1bbd1c(0x89d)](_0x25545f['cmzBy'],_0x25545f['cmzBy'])){var _0x231982=_0x1b5c50['abs'](_0x25545f[_0x1bbd1c(0x249)](_0x2f3c6c[_0x238dc8]['v'][-0xcc+0x1e13+-0xea3*0x2],_0x258f20));if(_0x231982<_0xcb6465)_0x591007=_0x231982;}else{if(_0x236798[_0x3a421][0x1*0x1065+0x25de+0x2*-0x1b21]!==_0x1bbd1c(0xb98))continue;_0x40fc21[_0x1bbd1c(0xa9c)+'s'][_0x25545f[_0x1bbd1c(0x454)]('0x',_0x236798[_0x3a421][-0x1ea1+-0x5*0x476+0x34ef*0x1]['toStr'+'ing'](-0x149d+-0x1ae*0x1+0x165b*0x1))]=_0x25545f[_0x1bbd1c(0x95d)](_0x2ee0ee,_0x25545f[_0x1bbd1c(0x444)](_0x1dd3cd,_0x236798[_0x3a421][0x36b+0xfd4+-0x133f]),_0x1bbd1c(0xb98));}}var _0x526baf=_0x2ee0ee(_0x25545f['OfxDn'](_0x1dd3cd,-0x14a5+-0xad9+0x1faa),_0x1bbd1c(0x7a2));if(_0x526baf)_0x40fc21[_0x1bbd1c(0xb9c)+'a']='0x'+_0x25545f[_0x1bbd1c(0xceb)](_0x526baf,-0x1c81+-0xa*-0x1a8+0xbf1)[_0x1bbd1c(0x834)+'ing'](0x25d+-0x5*-0x557+-0x1d00);var _0x59c98b=_0x16ec12(_0x1dd3cd,0x1a84+-0x5f2+0xe*-0x173,0x9fd+-0x236d+-0xcb9*-0x2);if(_0x59c98b)_0x40fc21[_0x1bbd1c(0x907)]=_0x59c98b;return _0x40fc21;}else{var _0x441026=_0x46f545['creat'+'eElem'+_0x1bbd1c(0xba7)](_0x1bbd1c(0xbf4));_0x441026['id']=_0x1bbd1c(0xa83)+_0x1bbd1c(0x84d)+_0x1bbd1c(0x3c2)+'ss',_0x441026[_0x1bbd1c(0xe00)+_0x1bbd1c(0x7d1)+'t']=_0x17ec27[_0x1bbd1c(0x520)],(_0x224b14[_0x1bbd1c(0x169)]||_0x750603['docum'+'entEl'+'ement'])[_0x1bbd1c(0xcad)+_0x1bbd1c(0x48f)+'d'](_0x441026);}}return null;}else{var _0x2d09ba=('7|5|9'+_0x1bbd1c(0x8d6)+'0|2|1'+'0|1|4'+'|3')['split']('|'),_0x2275c5=-0xad9+-0x2528+0x3001;while(!![]){switch(_0x2d09ba[_0x2275c5++]){case'0':var _0x1d4e9a=_0x3c7c60?_0x3c7c60[_0x1bbd1c(0xa01)+'unt']||0x83*-0x2f+0x19cb+-0x1be:0x1f3b+-0x1aea*0x1+-0x451;continue;case'1':_0x59e5f6['st'][_0x1bbd1c(0xe00)+'onten'+'t']=_0x7e16ff;continue;case'2':var _0x38ffcc=_0x195336?_0x17ec27[_0x1bbd1c(0x534)]((_0x17489a['buffe'+'r']['byteL'+_0x1bbd1c(0x79e)]/(-0x129ee2+-0x689ae*-0x4+-0x7f8a*-0x11))[_0x1bbd1c(0x5b7)+'ed'](-0x1683+-0x1*-0x7a7+0xedc),'MB'):_0x17ec27['TgZIz'];continue;case'3':_0x20741e&&(_0x20741e[_0x1bbd1c(0xe00)+'onten'+'t']=_0x1a07f8>-0x5de+0x22a6+-0xe64*0x2?_0x17ec27[_0x1bbd1c(0xc1f)](_0x1bbd1c(0x337)+_0x1bbd1c(0x604)+_0x1a07f8+(_0x1d4e9a?_0x17ec27['SQDsv']+_0x1d4e9a+'\x20bots':''),_0x3c7c60&&_0x3c7c60['camer'+'a']?_0x17ec27['CEtxa'](_0x17ec27['FNOxT'],_0x3c7c60['camer'+_0x1bbd1c(0x6c8)]):'\x20\x20cam'+'\x20-'):_0x17ec27[_0x1bbd1c(0x534)]('no\x20en'+_0x1bbd1c(0xce9)+_0x1bbd1c(0x445)+_0x1bbd1c(0x19a)+'y?)\x20\x20'+'cam\x20',_0x3c7c60&&_0x3c7c60[_0x1bbd1c(0xb9c)+'a']?_0x3c7c60['camer'+_0x1bbd1c(0x6c8)]:'-'),_0x20741e[_0x1bbd1c(0xbf4)]['color']=_0x17ec27['oIgcm'](_0x1a07f8,-0x207d*-0x1+0x407*-0x8+-0x45)?_0x17ec27[_0x1bbd1c(0x83d)]:'#8d7a'+'99');continue;case'4':var _0x20741e=_0x40b916['st2'];continue;case'5':if(_0x1ea79e['el'])_0x313e81['el'][_0x1bbd1c(0xbf4)]['displ'+'ay']='';continue;case'6':var _0x3c7c60=_0x57b9fe&&_0x3cb6e9['esp']||null;continue;case'7':if(!_0x20730f()&&!_0x54a5b4){if(_0x5afd2c['el'])_0x26c2ec['el'][_0x1bbd1c(0xbf4)]['displ'+'ay']=_0x1bbd1c(0x165);return;}continue;case'8':var _0x1a07f8=_0x3c7c60?_0x3c7c60[_0x1bbd1c(0xd6f)+_0x1bbd1c(0x4ed)]||0xad7+0xeef*0x2+-0x28b5:0x36e*0x7+0x34+0x1836*-0x1;continue;case'9':var _0x2273c1=_0x4efbb7['keys'](_0x1deb45&&_0x2a42ef['insta'+'nces']||{})[_0x1bbd1c(0xa1b)+'h'];continue;case'10':var _0x7e16ff=_0x17ec27[_0x1bbd1c(0x648)](_0x17ec27[_0x1bbd1c(0x961)](_0x17ec27[_0x1bbd1c(0xd36)](_0x17ec27['iShdz']('v',_0x5e657c&&_0xe890cb[_0x1bbd1c(0x7cc)+'on']||_0x370ec7)+_0x17ec27[_0x1bbd1c(0x85b)]+(_0x33023d&&_0x5009ef[_0x1bbd1c(0x414)+'Appli'+'ed']||0x1e4b+-0x1*0xaa9+-0x7*0x2ce),'/')+(_0x4b5efd&&_0x218395[_0x1bbd1c(0x414)+'Total']||0x2606+0x5c9+-0x2bcf)+('\x20\x20obj'+'s\x20')+_0x2273c1+(_0x1bbd1c(0x706)+'\x20'),_0x38ffcc),_0x1bbd1c(0xdbf)+_0x1bbd1c(0x511))+_0x19ac73;continue;}break;}}}var _0x5ac0b2=_0x419cc1(0xa83)+_0x419cc1(0x84d)+'fov',_0x9e54cb={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x506ff2=localStorage[_0x419cc1(0x611)+'em'](_0x5ac0b2);if(_0x506ff2)_0x9e54cb[_0x419cc1(0xa2e)]=Math[_0x419cc1(0xc96)](-0x1f32+0xea5+-0x3*-0x5b3,Math[_0x419cc1(0x932)](-0xcae+0xf08+-0x23c,parseFloat(_0x506ff2)||0x35d+0x24a0+-0x8b*0x49));}catch(_0x211c99){}function _0x4f1dfe(){var _0x4ce056=_0x419cc1;try{localStorage['setIt'+'em'](_0x5ac0b2,_0x25545f[_0x4ce056(0x649)](String,_0x9e54cb['fov']));}catch(_0x37fddb){}}var _0x117917=_0x25545f['YcJQu'],_0x149d5c=![];try{if(_0x419cc1(0x9c8)!==_0x25545f['TybBC'])localStorage[_0x419cc1(0x611)+'em'](_0x117917)!==null&&(localStorage['remov'+_0x419cc1(0x6a2)](_0x117917),_0x149d5c=!![]);else{_0x2757f4['on']=!!_0x5c277f,_0x551df5[_0x419cc1(0x3ca)]=!!_0x4fb7bf,_0x25545f['EtQve'](_0x451a3d);try{var _0x28a712=_0x2ce4a6();if(_0x28a712&&_0x28a712['el'])_0x28a712['el']['style']['displ'+'ay']=_0x2d1c90['on']?'':_0x419cc1(0x165);var _0x1663e4=_0x24bfd8;if(_0x1663e4&&_0x1663e4['cv'])_0x1663e4['cv']['style'][_0x419cc1(0x747)+'ay']=_0x203b7d['on']&&_0x3f9471['boxes']?'':_0x25545f[_0x419cc1(0x9f7)];}catch(_0x4513e1){}}}catch(_0x82963e){}var _0x1c2347=0x12a1+0x1aa+-0x1423,_0x3cf61c=-0x228d+-0x1434+0x36dd*0x1,_0x1c2347=-0x20*0x11+-0xe*-0x151+-0x1026,_0x3cf61c=0xb6d+-0x12e0+-0x183*-0x5,_0x162d88=-0x838+-0x187b+0x20df,_0x413700={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0x2a22d6(_0x534f9d){var _0x1f52bd=_0x419cc1;if(_0x25545f[_0x1f52bd(0x3e5)]('jHHYM',_0x25545f[_0x1f52bd(0x773)])){_0x12cfc5['error']=_0x1f52bd(0x57d)+_0x1f52bd(0x225)+_0x1f52bd(0x1fe)+'lugin'+'\x20unav'+'ailab'+'le';return;}else{if(_0x534f9d===undefined||_0x534f9d===null)return undefined;if(typeof _0x534f9d[_0x1f52bd(0x163)]===_0x25545f['ParqZ'])try{if(_0x25545f[_0x1f52bd(0x1d5)]===_0x25545f['HTPzk'])_0x65b499['canva'+'s']={'w':_0x267120&&_0x598e82['cv']?_0xa71842['cv']['width']:0x184f+0x11c7+0x2a16*-0x1,'h':_0xc987a2&&_0xd491c7['cv']?_0xf695cf['cv'][_0x1f52bd(0x5c7)+'t']:-0x1*0x783+0x7*-0x2ef+0x703*0x4,'innerW':_0x551c5e['inner'+'Width'],'innerH':_0x706463[_0x1f52bd(0x260)+_0x1f52bd(0xa0f)+'t'],'dpr':_0x14f13a[_0x1f52bd(0x1d3)+'ePixe'+_0x1f52bd(0xaa3)+'o']||-0x1ba7*-0x1+-0x19*0x115+-0x99};else return _0x534f9d[_0x1f52bd(0x163)]();}catch(_0xa31abc){}if(typeof _0x534f9d===_0x25545f['Izybx'])return undefined;return _0x534f9d;}}function _0x3b29e2(_0x2424b8,_0x25ccd8,_0x146db6){var _0x599cb7=_0x419cc1,_0x42702e={'quJeY':function(_0xe458c5,_0x1dfac3){var _0xc832a5=_0x29e5;return _0x25545f[_0xc832a5(0xe01)](_0xe458c5,_0x1dfac3);},'JFcam':function(_0xd73600,_0x44f55c){return _0xd73600*_0x44f55c;}};if(_0x25545f[_0x599cb7(0x896)]===_0x599cb7(0x45f))_0x113729=_0x190c8f[_0x599cb7(0x700)](_0x42702e[_0x599cb7(0x86e)](_0x42702e[_0x599cb7(0x600)](_0xae9b10['beari'+'ng'],_0x3dac06['PI']),0x13fa+0x19*0xe3+-0x67*0x67))/_0x42702e['JFcam'](_0x3e6548,_0x473664);else try{var _0x5ddd3b=window['Unity'+'WebMo'+_0x599cb7(0xba2)]&&window[_0x599cb7(0x571)+_0x599cb7(0x3c8)+_0x599cb7(0xba2)]['Runti'+'me'],_0x350bd4=_0x235ba0||_0x5ddd3b&&_0x5ddd3b['plugi'+'ns']&&_0x5ddd3b[_0x599cb7(0x691)+'ns'][_0x25545f[_0x599cb7(0x814)](_0x5ddd3b['plugi'+'ns'][_0x599cb7(0xa1b)+'h'],-0xd1d+-0xaf*0x3+0xf2b*0x1)];if(!_0x350bd4||typeof _0x350bd4['call']!==_0x25545f[_0x599cb7(0x5b5)])return _0x413700['error'+'s']['push'](_0x25545f[_0x599cb7(0x6ea)]),undefined;return _0x2a22d6(_0x350bd4[_0x599cb7(0xa77)](_0x2424b8,_0x25ccd8,_0x146db6||[]));}catch(_0x36ba91){if(_0x25545f[_0x599cb7(0x39c)]!=='zELmb'){if(_0x413700['error'+'s']['lengt'+'h']<0xb*0x355+0xfd*0x3+-0x4*0x9e6)_0x413700[_0x599cb7(0x97b)+'s'][_0x599cb7(0x90b)](_0x25545f[_0x599cb7(0x185)](_0x25545f[_0x599cb7(0x269)](_0x2424b8,'.')+_0x25ccd8,':\x20')+String(_0x36ba91&&_0x36ba91[_0x599cb7(0x650)+'ge']||_0x36ba91)['slice'](-0x1406+-0x28a+0x169*0x10,-0x1566+-0x203+0x17c3));return undefined;}else return _0x5c30f8('Mouse'+_0x599cb7(0x80c)+'0x2c\x20'+_0x599cb7(0x275)+_0x599cb7(0x4cc)+'objec'+_0x599cb7(0xd7a)+_0x599cb7(0x508)+'e');}}function _0x2bcc4a(){var _0x50551a=_0x419cc1;if(_0x25545f['ITtln']!==_0x50551a(0x425))_0x274d71(!_0x1ac9e5['on'],_0x572f9a['facto'+'r']);else{if(_0x413700[_0x50551a(0xc9b)+'ch'])return _0x413700['scrat'+'ch'];try{var _0x84f266=window[_0x50551a(0x571)+'WebMo'+'dkit']&&window['Unity'+_0x50551a(0x3c8)+_0x50551a(0xba2)][_0x50551a(0x57d)+'me'],_0x363d02=_0x235ba0||_0x84f266&&_0x84f266[_0x50551a(0x691)+'ns']&&_0x84f266['plugi'+'ns'][_0x25545f['tjRtN'](_0x84f266[_0x50551a(0x691)+'ns']['lengt'+'h'],-0x2694+0xa93*0x1+-0x2*-0xe01)];if(!_0x363d02||typeof _0x363d02[_0x50551a(0xd76)+'c']!==_0x25545f[_0x50551a(0x5b5)]){if(_0x25545f['gVxqd'](_0x50551a(0x5c3),_0x25545f[_0x50551a(0x3a4)]))_0x25545f['SsdWH'](_0x120bec);else return _0x413700['error'+'s'][_0x50551a(0x90b)](_0x50551a(0xdc3)+_0x50551a(0xa72)+'mallo'+'c'),0x2*-0x633+0x151*0x17+-0x11e1;}var _0x24e647=_0x2a22d6(_0x363d02['mallo'+'c'](0x14+0xa*-0x18d+0x7c7*0x2));if(_0x25545f[_0x50551a(0xd11)](typeof _0x24e647,_0x25545f[_0x50551a(0x388)])||!(_0x24e647>0x15b4+-0xe3*-0x17+-0x2a19)){if(_0x25545f['hHPeV'](_0x50551a(0x8e4),_0x25545f[_0x50551a(0x4b3)])){_0x33a71b['preve'+'ntDef'+_0x50551a(0x5c0)](),_0x18d42f(!_0xd226b4['open']);return;}else return _0x413700[_0x50551a(0x97b)+'s'][_0x50551a(0x90b)]('mallo'+'c\x20ret'+_0x50551a(0x865)+'\x20'+_0x24e647),-0xd57*0x2+-0x668+0x2116;}_0x413700[_0x50551a(0xc9b)+'ch']=_0x24e647;}catch(_0x2b3eba){if(_0x413700[_0x50551a(0x97b)+'s'][_0x50551a(0xa1b)+'h']<-0x86*0x2e+-0x16d+0x1*0x1987)_0x413700['error'+'s'][_0x50551a(0x90b)]('mallo'+'c:\x20'+_0x25545f[_0x50551a(0x5f5)](String,_0x2b3eba&&_0x2b3eba[_0x50551a(0x650)+'ge']||_0x2b3eba)[_0x50551a(0x634)](0x81e+0xc74*-0x1+-0x456*-0x1,-0x115b*-0x2+-0x1*-0x2039+-0x4295));return 0x1bd9*0x1+-0xfe5+0x3*-0x3fc;}return _0x413700[_0x50551a(0xc9b)+'ch'];}}function _0x57008a(_0x33e30c){var _0x137434=_0x419cc1,_0xc1bd9b=_0x25545f[_0x137434(0xac8)][_0x137434(0xb76)]('|'),_0x4a37ab=-0x266a+0x3f3*-0x2+0x2e50;while(!![]){switch(_0xc1bd9b[_0x4a37ab++]){case'0':return{'right':[0x1a8*-0xc+0x11f6+0x1eb-_0x25545f[_0x137434(0xd3a)](0xe7d+0x9ed+-0x1868,_0x25545f['FYntS'](_0x565609,_0x5e17db)),(-0x2*-0x1127+-0xe70+-0x13dc)*_0x25545f[_0x137434(0x200)](_0x440696,_0x53763e),(-0x1*0x1829+-0x483+-0x1cae*-0x1)*(_0x5ccd61-_0x4b363a)],'up':[(0x1*0x232d+0x1eba+-0x41e5)*(_0x440696-_0x53763e),_0x25545f['QjxGe'](-0x8*-0x385+0x23fb+-0x4022*0x1,(-0x8e0+0x21fa+0x2c*-0x92)*(_0x398821+_0x5e17db)),(-0x27b*-0x8+0x267c+-0x3a52)*_0x25545f[_0x137434(0x63f)](_0x2f0b80,_0x5bfcc0)],'fwd':[_0x25545f[_0x137434(0x805)](-0x2012*0x1+-0x2136+-0x2*-0x20a5,_0x5ccd61+_0x4b363a),(0x11b0+-0x1f5e+0x1b6*0x8)*(_0x2f0b80-_0x5bfcc0),0x1*-0x203d+-0x1*-0x8be+0x1780-_0x25545f[_0x137434(0x2b3)](0x1*-0x26e7+0x1237*-0x2+0x4b57*0x1,_0x398821+_0x565609)]};case'1':var _0x5bfcc0=_0x25545f[_0x137434(0x86f)](_0x236949,_0x3b2e32),_0x4b363a=_0x236949*_0x3de262,_0x53763e=_0x236949*_0xab23c8;continue;case'2':var _0x440696=_0x3b2e32*_0x3de262,_0x5ccd61=_0x25545f[_0x137434(0x2b3)](_0x3b2e32,_0xab23c8),_0x2f0b80=_0x3de262*_0xab23c8;continue;case'3':var _0x398821=_0x3b2e32*_0x3b2e32,_0x565609=_0x25545f[_0x137434(0x40f)](_0x3de262,_0x3de262),_0x5e17db=_0xab23c8*_0xab23c8;continue;case'4':var _0x3b2e32=_0x33e30c[-0x16e0+0x171f+-0x3f],_0x3de262=_0x33e30c[0x3fb*-0x3+0x6*-0x67a+0x32ce],_0xab23c8=_0x33e30c[0x3*-0x7bf+0x1*-0x1e01+-0x1aa*-0x20],_0x236949=_0x33e30c[0x22bc+-0x19bb*0x1+-0x8fe];continue;}break;}}var _0x393714=0x1*-0x7b2+0x10a8+0x2*-0x46c;function _0x2ad935(_0x340302){var _0x2f12cc=_0x419cc1;_0x413700['ok']=![],_0x413700['why']=_0x340302,_0x413700[_0x2f12cc(0x435)+'s']++;if(_0x25545f[_0x2f12cc(0x3d2)](_0x413700['misse'+'s'],_0x393714)){if('SLzXR'!==_0x25545f['TEbqS'])_0x5caec1['warni'+'ngs'][_0x2f12cc(0x90b)](_0x2f12cc(0x76d)+'\x20are\x20'+_0x2f12cc(0x145)+_0x2f12cc(0x688)+_0x2f12cc(0xcbd)+'FPSco'+'ntrol'+_0x2f12cc(0xdb9)+_0x2f12cc(0xc14)+_0x2f12cc(0xb51)+_0x2f12cc(0x409)+(_0x2f12cc(0xb7f)+_0x2f12cc(0xcb4)+_0x2f12cc(0x295)+'not\x20i'+'n\x20a\x20r'+'ound,'+'\x20or\x20t'+_0x2f12cc(0xce6)+_0x2f12cc(0x802)+'\x20on\x20t'+_0x2f12cc(0xafd)+_0x2f12cc(0x224)+_0x2f12cc(0x541)+'ad.'));else return _0x413700['quat']=null,_0x413700[_0x2f12cc(0x538)]=null,_0x413700[_0x2f12cc(0x8a7)]=null,_0x413700;}return _0x413700[_0x2f12cc(0x43e)]++,_0x413700;}function _0x8074e2(){var _0x5baa4f=_0x419cc1;_0x413700['tried']++,_0x413700['misse'+'s']=-0xc82*-0x3+-0x2139+-0x44d;var _0x1a8eb0=_0x25545f[_0x5baa4f(0x5f1)](_0x383ec9),_0xac4439=_0x1a8eb0&&_0x1a8eb0[_0x5baa4f(0x351)+'Look']?_0x25545f[_0x5baa4f(0xa47)](parseInt,_0x1a8eb0[_0x5baa4f(0x351)+_0x5baa4f(0x6b4)],-0xce2+-0x1*0x1b23+0x2815):_0x3f442c;if(!_0xac4439)return _0x25545f[_0x5baa4f(0xd28)](_0x2ad935,'no\x20Mo'+_0x5baa4f(0xd7f)+_0x5baa4f(0xa40)+'stanc'+'e');if(_0x25545f['hHgTb'](_0x3f442c,_0xac4439))_0x3f442c=_0xac4439;var _0x5820f5=_0x2ee0ee(_0x25545f['PuUgS'](_0xac4439,_0x162d88),_0x5baa4f(0xbd8));if(_0x25545f['xcBQF'](typeof _0x5820f5,_0x5baa4f(0x8fd)+'r')||!(_0x5820f5>-0x3*-0xbf5+0x1dc2+-0x41a1))return _0x2ad935('Mouse'+_0x5baa4f(0x80c)+_0x5baa4f(0xb4a)+'is\x20no'+_0x5baa4f(0x4cc)+_0x5baa4f(0x376)+'t\x20ref'+_0x5baa4f(0x508)+'e');_0x413700['camPt'+'r']=_0x5820f5;var _0x4a1e4b=_0x3b29e2('Compo'+'nent','get_t'+_0x5baa4f(0x8b3)+_0x5baa4f(0x543),[_0x5820f5]);if(typeof _0x4a1e4b!==_0x25545f['mqoAS']||!(_0x4a1e4b>-0x1ba5+-0x155b+-0x380*-0xe))return _0x413700['tfPtr']=-0x1*-0x77d+0xc9+-0x846,_0x25545f['eUyER'](_0x2ad935,'Compo'+'nent.'+_0x5baa4f(0x377)+'ransf'+'orm\x20r'+_0x5baa4f(0xa52)+_0x5baa4f(0x16c)+_0x4a1e4b);_0x413700['tfPtr']=_0x4a1e4b;var _0x1f5531=_0x25545f[_0x5baa4f(0x291)](_0x2bcc4a);if(!_0x1f5531)return _0x2ad935(_0x25545f['mCrKI']);var _0x1fe639=_0x25545f[_0x5baa4f(0x232)](_0x3b29e2,_0x5baa4f(0x512)+'a',_0x5baa4f(0x4aa)+_0x5baa4f(0xd32)+'fView',[_0x5820f5]);if(typeof _0x1fe639==='numbe'+'r'&&isFinite(_0x1fe639)&&_0x25545f[_0x5baa4f(0x302)](_0x1fe639,0x1554+-0x1a2a+-0x3*-0x19d)&&_0x25545f['rzjaW'](_0x1fe639,-0x10a9+-0x1*0x694+0x17f0))_0x413700[_0x5baa4f(0xa2e)]=_0x1fe639;_0x3b29e2('Trans'+_0x5baa4f(0x400),_0x5baa4f(0x4fb)+'otati'+'on',[_0x1f5531,_0x4a1e4b]);var _0x40ae23=[_0x2ee0ee(_0x1f5531,'f32'),_0x25545f[_0x5baa4f(0xd02)](_0x2ee0ee,_0x1f5531+(-0x94c+-0x399*-0x2+-0x21e*-0x1),_0x25545f['wENei']),_0x25545f[_0x5baa4f(0x51c)](_0x2ee0ee,_0x1f5531+(-0x619*0x5+-0x13*-0x4a+0x1907),_0x5baa4f(0xb98)),_0x2ee0ee(_0x25545f[_0x5baa4f(0xd35)](_0x1f5531,-0x15a6*-0x1+-0xeaf*-0x1+0x2449*-0x1),_0x25545f[_0x5baa4f(0x9b0)])],_0x17334d=-0x1c*0x12e+-0x98*-0xb+-0x20*-0xd4;for(var _0x5b7ee5=-0x2*-0x115+0x1b89+-0x1db3;_0x5b7ee5<0x87d*-0x3+-0x2f2*-0x9+0x1*-0x107;_0x5b7ee5++)_0x17334d+=_0x40ae23[_0x5b7ee5]*_0x40ae23[_0x5b7ee5];_0x17334d=Math[_0x5baa4f(0xc3e)](_0x17334d);var _0x1be3bf=isFinite(_0x17334d)&&_0x25545f['rgpil'](Math['abs'](_0x25545f[_0x5baa4f(0xb06)](_0x17334d,-0x1ea8+-0x14a3+0x334c)),0x71d+-0x2f*0x4+0x17*-0x47+0.02);_0x25545f['fbYBc'](_0x3b29e2,_0x25545f[_0x5baa4f(0x236)],_0x5baa4f(0xc7f)+'ositi'+'on',[_0x1f5531,_0x4a1e4b]);var _0x54c9a1=_0x25545f[_0x5baa4f(0x4c6)](_0x2ee0ee,_0x1f5531,_0x25545f['wENei']),_0x238cf3=_0x25545f['jRENF'](_0x2ee0ee,_0x25545f[_0x5baa4f(0x185)](_0x1f5531,-0x1f01*0x1+0x251*-0x6+0x3*0xef9),'f32'),_0x170ed6=_0x2ee0ee(_0x25545f['oizxV'](_0x1f5531,-0x24ba+0x2*-0xacf+0x3a60),_0x25545f['wENei']);_0x413700[_0x5baa4f(0x8a7)]=_0x25545f['GKaub'](typeof _0x54c9a1,'numbe'+'r')&&typeof _0x238cf3===_0x25545f[_0x5baa4f(0x388)]&&typeof _0x170ed6===_0x5baa4f(0x8fd)+'r'&&isFinite(_0x54c9a1)&&_0x25545f['KCyTX'](isFinite,_0x238cf3)&&isFinite(_0x170ed6)&&Math[_0x5baa4f(0x419)](_0x54c9a1)<0x3cb9+-0xef*0xf2+-0x1*-0x22bd5&&_0x25545f['qEAPq'](Math[_0x5baa4f(0x419)](_0x238cf3),-0x877a*0x3+0x32*0x77f+0x1a640)&&_0x25545f['eXmCR'](Math[_0x5baa4f(0x419)](_0x170ed6),-0x3e*0x51b+-0x14721*-0x1+0x17c09)?[_0x54c9a1,_0x238cf3,_0x170ed6]:null,_0x413700[_0x5baa4f(0x145)+'ed']++;if(_0x1be3bf){if(_0x25545f[_0x5baa4f(0x268)](_0x5baa4f(0x518),_0x5baa4f(0x518))){var _0x45d05c=_0x25545f[_0x5baa4f(0x80a)]['split']('|'),_0x45acac=-0x1*-0xfe+0x1*-0x1b6b+-0x7b*-0x37;while(!![]){switch(_0x45d05c[_0x45acac++]){case'0':_0x413700['sourc'+'e']=_0x5baa4f(0xb9c)+_0x5baa4f(0x3d5)+_0x5baa4f(0x410)+'m';continue;case'1':_0x413700[_0x5baa4f(0xdcf)]='';continue;case'2':_0x413700['basis']=_0x57008a(_0x40ae23);continue;case'3':return _0x413700;case'4':_0x413700['ok']=!![];continue;case'5':_0x413700[_0x5baa4f(0x6fa)]=_0x40ae23;continue;}break;}}else{if(_0x626ee4[_0x30ea2a][_0x5baa4f(0xc8d)]&&_0x4ff529[_0x169810][_0x5baa4f(0xc8d)][_0x5baa4f(0xdee)+_0x5baa4f(0x2ec)]!==_0x200483)_0x47ee83++;}}_0x413700[_0x5baa4f(0x6fa)]=null,_0x413700[_0x5baa4f(0x538)]=null;if(_0x25545f['kfTlI'](_0x413700['fov'],null))return _0x25545f[_0x5baa4f(0x89d)](_0x25545f[_0x5baa4f(0xcce)],'sOcpm')?_0x13d82a['span']:(_0x413700['ok']=!![],_0x413700['sourc'+'e']='camer'+_0x5baa4f(0xd37)+'\x20only',_0x413700['why']=_0x25545f[_0x5baa4f(0xd62)](_0x25545f[_0x5baa4f(0x88a)]+_0x25545f['dSvYr'](Math['round'](_0x25545f[_0x5baa4f(0x34a)](_0x17334d,-0xf4f*0x1+0x2253+-0x4*0x3c7)),0xb94+-0x8b*0xd+0x9d*-0x1),_0x25545f['XXBnE']),_0x413700);return _0x413700['ok']=![],_0x413700['sourc'+'e']=null,_0x413700[_0x5baa4f(0xdcf)]=_0x25545f['ZMeMX'](_0x5baa4f(0x8be)+_0x5baa4f(0xa16)+'nusab'+'le\x20(|'+'q|='+Math['round'](_0x17334d*(-0x3d1*-0x1+0x2ad+-0x296))/(0x7f2+-0x3*-0x17f+0x1*-0x887),_0x25545f[_0x5baa4f(0x4ce)]),_0x413700;}function _0x4452e2(){var _0xca191e=_0x419cc1;if(_0x25545f[_0xca191e(0x3f0)](_0x25545f[_0xca191e(0xa74)],_0x25545f[_0xca191e(0xa74)])){if(_0x413700['tried'])return _0x413700;return _0x8074e2();}else{var _0x1f1835=_0x4d03c4;if(_0x1f1835&&_0x1f1835['el'])_0x1f1835['el'][_0xca191e(0xbf4)]['displ'+'ay']=_0x257b5a?'':'none';var _0x54de2c=_0x810f27;if(_0x54de2c&&_0x54de2c['cv'])_0x54de2c['cv'][_0xca191e(0xbf4)][_0xca191e(0x747)+'ay']=_0x56287c?'':_0xca191e(0x165);}}var _0x3231bb={'pitch':null,'yaw':null,'identified':![],'why':_0x419cc1(0xcc0)+_0x419cc1(0xd7f)+'ok\x20ye'+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x4acd8c(_0x37a388){var _0x386bff=_0x419cc1,_0x273eb9={'qQlcz':function(_0x45f959,_0x33890e){return _0x45f959*_0x33890e;},'kZsoX':function(_0x10fff5,_0x1e30ba){return _0x25545f['KngTD'](_0x10fff5,_0x1e30ba);},'Xjjui':_0x386bff(0x8fd)+'r','iUzac':function(_0x3077ae,_0x405927){var _0x232683=_0x386bff;return _0x25545f[_0x232683(0x27d)](_0x3077ae,_0x405927);}};if(_0x25545f[_0x386bff(0x312)]!==_0x25545f[_0x386bff(0x2f6)]){var _0x2d466d=null,_0x1b5ad1=0x1*-0xbda+-0x8d9+0x1*0x14b3;for(var _0x4576e2 in _0x4e4b2b){var _0x44e068=_0x4e4b2b[_0x4576e2];if(!_0x44e068['hits']||_0x44e068['last']===null)continue;var _0x27e9b3=_0x25545f['kQUfz'](_0x2ee0ee,_0x3f442c+_0x37a388,_0x386bff(0xb98));if(_0x25545f['BhjrU'](typeof _0x27e9b3,'numbe'+'r'))continue;Math[_0x386bff(0x419)](_0x25545f[_0x386bff(0x27e)](_0x44e068['last'],_0x27e9b3))<-0x2233+0x8a7+-0x2*-0xcc6+0.001&&_0x44e068['hits']>_0x1b5ad1&&(_0x25545f[_0x386bff(0x2ac)]!=='UqGNS'?_0x272b05(_0x38e6e3['on'],_0x463f78(_0x58090e[_0x386bff(0x467)])||0x185*0x17+-0x25c4+-0x1*-0x2d2):(_0x2d466d=_0x4576e2,_0x1b5ad1=_0x44e068[_0x386bff(0xa4e)]));}return _0x2d466d;}else{if(_0x2641b3==='v3'){var _0x57692a=_0x483a63[_0xa90a6e][_0x386bff(0xbef)]||[_0x8033d6[_0x232797]['v'],0x61*0x32+-0x8*0x4b2+-0x94f*-0x2,0x44f*-0x1+0x713+-0x3b*0xc];return _0x57692a['map'](function(_0x357baf){var _0x18df68=_0x386bff;return _0x203b64['round'](_0x273eb9[_0x18df68(0x3a0)](_0x357baf,0x2*0xf9e+0x7c*0x1f+-0x2ddc))/(0x4c3*-0x6+0x3f9+0x18fd);})['join']('\x20\x20');}var _0x162de7=_0x39c8ec[_0x3a0e97]['v'];return _0x273eb9[_0x386bff(0xc21)](typeof _0x162de7,_0x273eb9['Xjjui'])?_0x273eb9[_0x386bff(0x262)](_0x190b2d[_0x386bff(0x494)](_0x162de7*(-0x2056+0x16e4+-0x1*-0xd5a)),0x1466+-0x1833+-0x1*-0x7b5):_0x442b0c(_0x162de7);}}function _0x19d586(_0x58610d){var _0x220458=_0x419cc1,_0x4f40aa=[],_0x46efef=_0x3e1fdb[_0x220458(0xd14)+'Look']||[];for(var _0x1117f1 in _0x4e4b2b){var _0x8a8e93=_0x4e4b2b[_0x1117f1];if(!_0x8a8e93[_0x220458(0xa4e)])continue;var _0x35956a=null;for(var _0x40e071=-0x1*-0x1623+-0x2b*0xe5+0x1054;_0x25545f[_0x220458(0x6cd)](_0x40e071,_0x46efef[_0x220458(0xa1b)+'h']);_0x40e071++){if(_0x46efef[_0x40e071][-0x3*-0xcab+0x3*-0x755+-0x11*0xf1]!==_0x25545f[_0x220458(0x9b0)])continue;var _0x438fae=_0x2ee0ee(_0x25545f[_0x220458(0x636)](_0x58610d,_0x46efef[_0x40e071][0xdaf+-0x65a+0x755*-0x1]),_0x220458(0xb98));if(typeof _0x438fae===_0x220458(0x8fd)+'r'&&Math['abs'](_0x25545f[_0x220458(0xc87)](_0x438fae,_0x8a8e93[_0x220458(0xdd0)]))<-0x111+0xa6+-0x1*-0x6b+0.001){_0x35956a=_0x25545f['jquin']('0x',_0x46efef[_0x40e071][-0xd*0x175+-0x1*-0x227f+0x7c7*-0x2][_0x220458(0x834)+'ing'](0x9*0x305+-0x1abc+-0x1*0x61));break;}}_0x4f40aa[_0x220458(0x90b)]({'name':_0x1117f1,'value':_0x8a8e93[_0x220458(0xdd0)],'matches':_0x35956a,'hits':_0x8a8e93['hits'],'lo':_0x8a8e93['lo'],'hi':_0x8a8e93['hi'],'travel':_0x8a8e93['lo']===null?-0x30c+0x13e2+0x1*-0x10d6:Math['round'](_0x25545f['oNtba'](_0x8a8e93['hi'],_0x8a8e93['lo'])*(-0xee5+-0x1*-0x1993+-0xa4a))/(0x1*0x1261+0x22b6+-0x34b3),'jump':_0x25545f['esKOP'](Math[_0x220458(0x494)](_0x8a8e93['jump']*(0x6*-0x421+0x27f*-0x6+0x2824)),-0x4d5+0xf4*-0x7+0xbe5),'set':_0x8a8e93['setHi'+'ts']?_0x8a8e93['setLa'+'st']:null});}return _0x4f40aa;}function _0x4e9051(){var _0x50f11f=_0x419cc1,_0x5919e4={'xYXdr':function(_0x49a7d4,_0x186782){return _0x49a7d4===_0x186782;},'pzmSn':function(_0x76bc99,_0x345507){return _0x76bc99>_0x345507;},'wQdSi':function(_0x4afccb,_0xd5d06c){return _0x4afccb===_0xd5d06c;},'sMCVN':function(_0x1d352b,_0x12be4b){return _0x1d352b===_0x12be4b;},'Tiyuh':function(_0x2cb06e,_0x514d45,_0x36de49){return _0x2cb06e(_0x514d45,_0x36de49);}},_0x4e22da=_0x25545f[_0x50f11f(0xd44)](_0x383ec9);if(!_0x4e22da||!_0x4e22da[_0x50f11f(0x351)+'Look'])return _0x3231bb['ident'+'ified']=![],_0x3231bb[_0x50f11f(0xdcf)]=_0x25545f[_0x50f11f(0x28f)],null;var _0x5d3141=parseInt(_0x4e22da['mouse'+_0x50f11f(0x6b4)],0x7ce+0x4*-0x8fb+0x1c2e);if(_0x3f442c!==_0x5d3141)_0x3f442c=_0x5d3141;_0x3231bb['gette'+'rs']=_0x25545f[_0x50f11f(0xc46)](_0x19d586,_0x5d3141);var _0x1e85da=_0xcba669(),_0x23c476=-0x1440+-0x459*-0x2+0xb8f,_0x52764c=-0x56*-0x12+-0x21d*0x7+0x919;function _0x33fa26(_0x8e7e00){var _0x54a5a9=_0x50f11f;return _0x8e7e00['lo']===null||_0x5919e4[_0x54a5a9(0x93b)](_0x8e7e00['hi'],null)?0x6e*-0x2f+0x1e6*0xd+-0x47c:_0x8e7e00['hi']-_0x8e7e00['lo'];}var _0x1bf678=null;for(var _0x8f8fdf in _0x4e4b2b){if(_0x50f11f(0xb9f)!==_0x50f11f(0x4bd)){var _0x205b24=_0x4e4b2b[_0x8f8fdf];if(!_0x205b24[_0x50f11f(0xa4e)]||_0x205b24[_0x50f11f(0xdd0)]===null)continue;if(_0x25545f[_0x50f11f(0xc18)](_0x33fa26,_0x205b24)<_0x23c476)continue;if(_0x205b24['jump']>_0x52764c)continue;var _0x7b52b=_0x2ee0ee(_0x3f442c+_0x1c2347,'f32');if(_0x25545f['LQMvM'](typeof _0x7b52b,'numbe'+'r')||Math[_0x50f11f(0x419)](_0x205b24[_0x50f11f(0xdd0)]-_0x7b52b)>=0x33*-0x3+0x1b9c+0x1cd*-0xf+0.001)continue;if(!_0x1bf678||_0x205b24[_0x50f11f(0xa4e)]>_0x4e4b2b[_0x1bf678]['hits'])_0x1bf678=_0x8f8fdf;}else{var _0xb17737=_0x59844d[_0x31cf44];_0xb17737[_0x50f11f(0x8c6)+_0x50f11f(0x537)]&&_0x5919e4[_0x50f11f(0xbab)](_0xb17737[_0x50f11f(0x8c6)+_0x50f11f(0x537)],_0x2acfbd)&&_0x5919e4['wQdSi'](typeof _0xb17737[_0x50f11f(0x7ac)+'st'],_0x50f11f(0x8fd)+'r')&&_0x5919e4['sMCVN'](typeof _0xb17737[_0x50f11f(0xdac)],_0x50f11f(0x8fd)+'r')&&_0x3a9514(_0xb17737[_0x50f11f(0x7ac)+'st'])&&_0x566cbe(_0xb17737['setB'])&&(_0x67ad8f={'rawA':_0xb17737['setLa'+'st'],'rawB':_0xb17737[_0x50f11f(0xdac)],'hits':_0xb17737[_0x50f11f(0x8c6)+'its'],'name':_0x360f02},_0x26a811=_0xb17737['pairH'+'its']);}}var _0x383afc=null;for(var _0x278d06 in _0x4e4b2b){if('jvcAy'===_0x50f11f(0x1f7)){if(_0x278d06===_0x1bf678)continue;var _0x29c95d=_0x4e4b2b[_0x278d06];if(!_0x29c95d['hits']||_0x25545f['IlKQe'](_0x29c95d['last'],null))continue;if(_0x25545f[_0x50f11f(0x4af)](_0x33fa26,_0x29c95d)<_0x23c476)continue;if(_0x29c95d['jump']>_0x52764c)continue;if(_0x29c95d[_0x50f11f(0xdd0)]>=-(-0x1a7a+-0x87a+0x234e)&&_0x25545f[_0x50f11f(0x3a2)](_0x29c95d['last'],0x23bf+0x2593+-0x48f8)){if(_0x25545f[_0x50f11f(0x31b)]!==_0x50f11f(0x63a))_0x5919e4[_0x50f11f(0x427)](_0x48e58a,_0x6f2721,_0x1be07c['boxes']);else{_0x383afc=_0x278d06;break;}}}else return _0x448b9d[_0x50f11f(0x5fb)+'e']=_0x50f11f(0x691)+_0x50f11f(0xc19)+_0x50f11f(0x5fa)+_0x50f11f(0x66a)+'e',_0x62bfa2[_0x50f11f(0xd59)];}_0x3231bb['yawGe'+'tter']=_0x1bf678,_0x3231bb['pitch'+_0x50f11f(0xada)+'r']=_0x383afc;var _0x132df8,_0x5cbd0e;if(_0x1e85da&&_0x1e85da[_0x50f11f(0x4c0)]!==null)_0x5cbd0e=_0x1e85da[_0x50f11f(0x4c0)],_0x132df8=_0x1e85da['yaw'],_0x3231bb[_0x50f11f(0x5fb)+'e']=_0x25545f[_0x50f11f(0x513)](_0x25545f[_0x50f11f(0xafb)](_0x25545f[_0x50f11f(0x35e)],_0x1e85da[_0x50f11f(0xc04)]),')');else _0x1bf678?_0x25545f[_0x50f11f(0xbfb)]===_0x50f11f(0xccf)?(_0x1ba8f0=_0x5919e4[_0x50f11f(0x427)](_0x394efa,_0x50f11f(0x3a7)+'on',![]),_0x6bcfd8[_0x50f11f(0x90b)](_0x372e95)):(_0x132df8=_0x4e4b2b[_0x1bf678]['last'],_0x3231bb['sourc'+'e']=_0x50f11f(0x8e3)+'r',_0x5cbd0e=_0x383afc?_0x4e4b2b[_0x383afc][_0x50f11f(0xdd0)]:_0x25545f[_0x50f11f(0xd02)](_0x2ee0ee,_0x25545f[_0x50f11f(0x9cd)](_0x5d3141,_0x3cf61c),_0x25545f[_0x50f11f(0x9b0)])):(_0x132df8=_0x2ee0ee(_0x5d3141+_0x1c2347,_0x50f11f(0xb98)),_0x5cbd0e=_0x2ee0ee(_0x5d3141+_0x3cf61c,_0x25545f[_0x50f11f(0x9b0)]),_0x3231bb[_0x50f11f(0x5fb)+'e']=_0x50f11f(0x2b8)+_0x50f11f(0x197)+'\x20(gue'+_0x50f11f(0xbad));_0x3231bb['rawYa'+'w']=_0x132df8,_0x3231bb[_0x50f11f(0xa8c)+_0x50f11f(0x3ff)]=_0x5cbd0e;if(_0x25545f[_0x50f11f(0x789)](typeof _0x132df8,'numbe'+'r')||!isFinite(_0x132df8)||typeof _0x5cbd0e!==_0x50f11f(0x8fd)+'r'||!_0x25545f['BdeaP'](isFinite,_0x5cbd0e))return _0x3231bb[_0x50f11f(0x9aa)+_0x50f11f(0x66c)]=![],_0x3231bb['why']=_0x50f11f(0xd4f)+_0x50f11f(0xa9c)+_0x50f11f(0xd65)+_0x50f11f(0x3df)+'le',null;if(_0x25545f[_0x50f11f(0x25a)](_0x5cbd0e,-(-0x86*0xb+-0x1*-0x527+0xf5))||_0x5cbd0e>0x39*-0xa7+-0x692+0x2c1b)return _0x3231bb['ident'+_0x50f11f(0x66c)]=![],_0x3231bb[_0x50f11f(0xdcf)]='pitch'+'\x20'+Math[_0x50f11f(0x494)](_0x5cbd0e)+(_0x50f11f(0xd2c)+'of\x20ra'+'nge'),null;return _0x3231bb['why']='',_0x3231bb['ident'+_0x50f11f(0x66c)]=!![],_0x3231bb['pitch']=_0x5cbd0e,_0x3231bb[_0x50f11f(0x559)]=_0x132df8,_0x3231bb;}function _0x5c3c9c(_0x1a04d8,_0x163ef7,_0xa0dc9f,_0x42e9f4){var _0xd863a5=_0x419cc1,_0xdc74f7=_0x4452e2(),_0x3c7469=null,_0x2a8895=_0x1a04d8,_0x10818e=_0x9e54cb[_0xd863a5(0xa2e)];if(_0xdc74f7['basis']){_0x3c7469=_0xdc74f7[_0xd863a5(0x538)];if(_0xdc74f7[_0xd863a5(0x8a7)])_0x2a8895=_0xdc74f7[_0xd863a5(0x8a7)];if(_0xdc74f7[_0xd863a5(0xa2e)]!==null)_0x10818e=_0xdc74f7[_0xd863a5(0xa2e)];}var _0x2789b8,_0x1bfa07,_0x2d43c5,_0x36d27d,_0x3d8c7b,_0x461fe0,_0x32e509,_0x43c7a7,_0x4c0f53;if(_0x3c7469){var _0x5f2da9=_0x25545f['xjJsd'][_0xd863a5(0xb76)]('|'),_0x363a4a=0x1777+0xe53+-0x25ca;while(!![]){switch(_0x5f2da9[_0x363a4a++]){case'0':_0x3d8c7b=_0x3c7469[_0xd863a5(0x963)][-0x1a1*0x17+0x19e7+-0x3*-0x3db];continue;case'1':_0x36d27d=_0x3c7469[_0xd863a5(0x963)][0x382+-0x767*-0x1+-0xae9];continue;case'2':_0x461fe0=_0x3c7469[_0xd863a5(0x963)][0x1812+0xcb5*-0x2+0x15a*0x1];continue;case'3':_0x32e509=_0x3c7469['up'][-0x6b*-0x29+-0x3e3+-0xd4*0x10];continue;case'4':_0x2789b8=_0x3c7469[_0xd863a5(0x2b7)][0x39*0x76+-0x162a+-0x41c];continue;case'5':_0x1bfa07=_0x3c7469[_0xd863a5(0x2b7)][0x2*-0x4d6+-0x91*-0x3a+0x15d*-0x11];continue;case'6':_0x2d43c5=_0x3c7469[_0xd863a5(0x2b7)][-0x10f*0x1b+0x26d2+-0xa3b];continue;case'7':_0x4c0f53=_0x3c7469['up'][0x12f6+-0x1657+-0x363*-0x1];continue;case'8':_0x43c7a7=_0x3c7469['up'][-0x5*-0x153+-0x1f7b+-0x18dd*-0x1];continue;}break;}}else{var _0x583308=_0x25545f[_0xd863a5(0x193)](_0x4e9051);if(!_0x583308)return null;var _0x3c38cf=_0x583308[_0xd863a5(0x4c0)]*Math['PI']/(0x24ff+0x1a1c+-0x3e67),_0xaae3fe=_0x25545f[_0xd863a5(0xe01)](_0x25545f[_0xd863a5(0xd3a)](_0x583308[_0xd863a5(0x559)],Math['PI']),-0x1a65+0xae8+0x1031),_0x128376=Math['cos'](_0x3c38cf);_0x2789b8=Math['sin'](_0xaae3fe)*_0x128376,_0x1bfa07=-Math['sin'](_0x3c38cf),_0x2d43c5=_0x25545f[_0xd863a5(0x771)](Math[_0xd863a5(0x981)](_0xaae3fe),_0x128376),_0x36d27d=_0x2d43c5,_0x3d8c7b=-0x3*0x826+0x1bf8+-0x29*0x16,_0x461fe0=-_0x2789b8,_0x32e509=_0x25545f['NQfDV'](_0x1bfa07*_0x461fe0,_0x25545f[_0xd863a5(0xd29)](_0x2d43c5,_0x3d8c7b)),_0x43c7a7=_0x25545f[_0xd863a5(0x27e)](_0x2d43c5*_0x36d27d,_0x2789b8*_0x461fe0),_0x4c0f53=_0x25545f[_0xd863a5(0x55a)](_0x2789b8*_0x3d8c7b,_0x25545f['MqlSv'](_0x1bfa07,_0x36d27d));}var _0x36a109=_0x163ef7[-0xa*0x337+-0x2*0x1e7+0x23f4]-_0x2a8895[-0x1785+-0x3*-0xca7+-0xe70],_0x5e778b=_0x163ef7[0x22*0x6a+0x17b*-0x13+0xe0e]-_0x2a8895[-0x1cd2+-0x2022+0x3cf5],_0x59d84a=_0x163ef7[0x7f*0x4d+0xba0+-0x6d*0x75]-_0x2a8895[-0x115*-0x5+-0x1e9a+0x1*0x1933],_0x14d14f=_0x25545f[_0xd863a5(0x2bf)](_0x36a109,_0x2789b8)+_0x5e778b*_0x1bfa07+_0x59d84a*_0x2d43c5;if(_0x14d14f<=0xb29+0x1*-0x1cfa+0x1*0x11d1+0.05)return null;var _0x31838c=_0x36a109*_0x36d27d+_0x5e778b*_0x3d8c7b+_0x25545f['TWqsG'](_0x59d84a,_0x461fe0),_0x3f7f0f=_0x25545f['SIxuX'](_0x25545f[_0xd863a5(0x6fd)](_0x36a109,_0x32e509),_0x5e778b*_0x43c7a7)+_0x59d84a*_0x4c0f53,_0x738f7c=_0xa0dc9f/_0x42e9f4,_0x199c89=_0x10818e*Math['PI']/(0x1afc+0x152d+-0x2f75),_0x55846e=Math[_0xd863a5(0x700)](_0x199c89/(-0x1e3a+0x2*0x107f+-0x2c2)),_0x1ae872=_0x25545f[_0xd863a5(0x570)](_0x31838c,_0x14d14f)/(_0x55846e*_0x738f7c),_0x122510=_0x25545f['nlyTN'](_0x3f7f0f,_0x14d14f)/_0x55846e;if(_0x25545f[_0xd863a5(0x286)](_0x1ae872,-(-0x25*0xdd+-0xb7a+0x2b6c+0.6000000000000001))||_0x25545f['rMrEr'](_0x1ae872,0x1b77*0x1+-0x24ba+0x1*0x944+0.6000000000000001)||_0x25545f[_0xd863a5(0xd98)](_0x122510,-(0x2*0x115d+0x24e0+0x1*-0x4799+0.6000000000000001))||_0x122510>-0x2*-0x115+-0x3c*-0x80+0x1*-0x2029+0.6000000000000001)return null;return{'x':_0x25545f[_0xd863a5(0xcff)](_0x1ae872*(-0xe45+-0x14c7+0x230c+0.5),0x1d66*0x1+0x28*0x73+-0x2f5e+0.5)*_0xa0dc9f,'y':_0x25545f[_0xd863a5(0xd3a)](0x3*-0x120+0x39f+-0x3f+0.5-_0x122510*(0x1*0x1368+-0x1*-0x25bf+-0x3927+0.5),_0x42e9f4),'z':_0x14d14f};}var _0x3314c7={'open':![],'cat':_0x25545f['vwfAO'],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x2ff245=_0x25545f[_0x419cc1(0x30b)],_0x3cf7e5=null,_0x34d419=[{'id':'comba'+'t','label':_0x419cc1(0xc81)},{'id':_0x419cc1(0x98f)+'ls','label':_0x25545f[_0x419cc1(0x61f)]},{'id':_0x419cc1(0x467)+'s','label':_0x25545f[_0x419cc1(0x5d4)]},{'id':_0x419cc1(0x482),'label':_0x419cc1(0x1ae)}],_0x39976a=_0x25545f['cGRhB'](_0x25545f[_0x419cc1(0x761)](_0x25545f['hikIf'](_0x25545f['JLUqB'](_0x25545f[_0x419cc1(0x753)](_0x25545f[_0x419cc1(0x800)](_0x25545f['ssUaz'](_0x25545f[_0x419cc1(0x77a)](_0x25545f[_0x419cc1(0xbc3)](_0x25545f[_0x419cc1(0x3ac)](_0x25545f['GtbBH'](_0x25545f['HeVxL'](_0x25545f[_0x419cc1(0x237)](_0x25545f['SQUmj'](_0x25545f['wuggR'](_0x25545f[_0x419cc1(0x560)](_0x25545f['YpweY'](_0x25545f['eOdJS'](_0x25545f[_0x419cc1(0xc3c)](_0x25545f['JLUqB'](_0x25545f[_0x419cc1(0x5b4)](_0x25545f[_0x419cc1(0x454)](_0x25545f[_0x419cc1(0xadc)](_0x25545f[_0x419cc1(0xd35)](_0x25545f['NdflC'](_0x25545f['BkKTu'](_0x25545f[_0x419cc1(0xd71)](_0x25545f[_0x419cc1(0x9cb)]+_0x25545f[_0x419cc1(0x542)],_0x419cc1(0x747)+'ay:fl'+_0x419cc1(0x490)+'p:10p'+_0x419cc1(0x749)+'ding:'+_0x419cc1(0xb9b)+'borde'+'r-rad'+'ius:2'+'2px;p'+_0x419cc1(0x797)+'r-eve'+_0x419cc1(0x3ee)+_0x419cc1(0x730)+_0x419cc1(0x498)+'x:214'+'74836'+_0x419cc1(0x68c)),_0x419cc1(0xc44)+_0x419cc1(0x494)+_0x419cc1(0x685)+'(24,1'+_0x419cc1(0xba9)+_0x419cc1(0xba8)+_0x419cc1(0xdb3)+_0x419cc1(0x9a2)+'ilter'+':blur'+'(22px'+_0x419cc1(0x6d7)+'urate'+_0x419cc1(0x591)+_0x419cc1(0x503)+_0x419cc1(0x722)+_0x419cc1(0xdb3)+_0x419cc1(0x9a2)+_0x419cc1(0x901)+':blur'+_0x419cc1(0xc52)+')\x20sat'+_0x419cc1(0xac4)+_0x419cc1(0x591)+');')+_0x25545f['WRFsd']+('opaci'+_0x419cc1(0x780)+'trans'+_0x419cc1(0xca4)+'trans'+_0x419cc1(0x6cb)+_0x419cc1(0x7a5)+');poi'+'nter-'+_0x419cc1(0x3a9)+_0x419cc1(0xc56)+'e;tra'+'nsiti'+_0x419cc1(0x14f)+_0x419cc1(0x886)+'\x20.35s'+_0x419cc1(0x8d9)+_0x419cc1(0x812)+_0x419cc1(0x59e)+'\x20.45s'+'\x20cubi'+'c-bez'+'ier(.'+'22,1,'+_0x419cc1(0xd5f)+');')+_0x25545f[_0x419cc1(0x1c7)]+_0x25545f['vqWHZ']+(_0x419cc1(0xdbb)+_0x419cc1(0x5a5)+_0x419cc1(0x750)+_0x419cc1(0x522)+_0x419cc1(0x950)+_0x419cc1(0xdb6)+'ectio'+_0x419cc1(0xccc)+_0x419cc1(0xc06)+'lign-'+_0x419cc1(0x16d)+_0x419cc1(0x99b)+'er;ga'+_0x419cc1(0xb12)+';widt'+_0x419cc1(0x359)+'x;fle'+'x:non'+_0x419cc1(0x470)+_0x419cc1(0x6a5)+_0x419cc1(0x680)+'0;')+_0x25545f[_0x419cc1(0xd12)]+(_0x419cc1(0x4c7)+_0x419cc1(0x7a6)+_0x419cc1(0x750)+'y:gri'+'d;pla'+_0x419cc1(0x6b6)+'ems:c'+'enter'+_0x419cc1(0xb35)+'h:32p'+'x;hei'+_0x419cc1(0xd20)+_0x419cc1(0x372)+_0x419cc1(0x52d)+_0x419cc1(0x2a7)+'om:6p'+_0x419cc1(0x958)),_0x25545f[_0x419cc1(0x630)])+_0x25545f[_0x419cc1(0xa85)],'backg'+_0x419cc1(0x494)+':tran'+'spare'+_0x419cc1(0x18a)+'lor:r'+_0x419cc1(0x37b)+_0x419cc1(0x3b4)+'8,242'+_0x419cc1(0xc38)+_0x419cc1(0xcd8)+_0x419cc1(0x909)+'nter;'+_0x419cc1(0x4db)+'size:'+_0x419cc1(0xb9b)+'font-'+'weigh'+'t:700'+_0x419cc1(0xba4)+_0x419cc1(0xb5e)+_0x419cc1(0x56b)+_0x419cc1(0x965)+';}')+('.mn-t'+_0x419cc1(0x664)+'ver{c'+_0x419cc1(0x214)+'rgba('+'246,2'+'38,24'+'2,.8)'+';}'),'.mn-t'+_0x419cc1(0x6f1)+_0x419cc1(0xd3e)+_0x419cc1(0x8d2)+':#ff6'+'b9d;b'+'ackgr'+'ound:'+_0x419cc1(0xc31)+_0x419cc1(0x9ee)+_0x419cc1(0x336)+'7,.1)'+';}')+_0x25545f[_0x419cc1(0x35a)],_0x25545f[_0x419cc1(0x827)])+(_0x419cc1(0x2a2)+_0x419cc1(0x95a)+_0x419cc1(0xcae)+_0x419cc1(0x763)+'n-wid'+_0x419cc1(0x5ed)+'}'),_0x25545f[_0x419cc1(0x48c)])+_0x25545f[_0x419cc1(0x2ea)],_0x419cc1(0x6e7)+'lose{'+'displ'+'ay:gr'+_0x419cc1(0x28e)+'ace-i'+_0x419cc1(0x82b)+_0x419cc1(0xdd4)+_0x419cc1(0x274)+_0x419cc1(0xb60)+_0x419cc1(0x497)+_0x419cc1(0xdc6)+_0x419cc1(0x84a)+'borde'+'r:0;b'+_0x419cc1(0xc04)+'-radi'+'us:8p'+_0x419cc1(0xd94)+_0x419cc1(0x955)+'nd:tr'+_0x419cc1(0x1cb)+_0x419cc1(0x92f)),_0x419cc1(0x8d2)+':inhe'+_0x419cc1(0x348)+_0x419cc1(0xaca)+'y:.45'+_0x419cc1(0xdbd)+_0x419cc1(0xd06)+_0x419cc1(0x7a7)+';}')+_0x25545f[_0x419cc1(0x4ee)],_0x419cc1(0x6e7)+_0x419cc1(0x6ce)+_0x419cc1(0xa49)+'idth:'+'14px;'+'heigh'+'t:14p'+_0x419cc1(0x5c8)+_0x419cc1(0xae0)+_0x419cc1(0x304)+'oke:c'+'urren'+'tColo'+'r;str'+_0x419cc1(0x89c)+'idth:'+'2;str'+_0x419cc1(0x18b)+'ineca'+_0x419cc1(0x35d)+'nd;}'),_0x25545f[_0x419cc1(0xb42)]),_0x25545f[_0x419cc1(0xda8)])+('.mn-c'+_0x419cc1(0xd91)+_0x419cc1(0xb87)+_0x419cc1(0xbf1)+_0x419cc1(0xde7)+_0x419cc1(0x477)+_0x419cc1(0x41e)+_0x419cc1(0xb77)),_0x25545f['yZZwN']),_0x25545f['Pfifh'])+_0x25545f[_0x419cc1(0xa60)],_0x419cc1(0xc0f)+_0x419cc1(0xa20)+_0x419cc1(0x764)+_0x419cc1(0x750)+_0x419cc1(0x522)+_0x419cc1(0x48d)+_0x419cc1(0x3e1)+'ems:c'+'enter'+_0x419cc1(0x8a8)+'8px;p'+_0x419cc1(0xd92)+_0x419cc1(0x240)+'x\x2012p'+_0x419cc1(0x958))+_0x25545f[_0x419cc1(0x781)]+('.sk-c'+_0x419cc1(0x180)+_0x419cc1(0x954)+_0x419cc1(0xd93)+'g{fon'+_0x419cc1(0x5ec)+'e:13p'+_0x419cc1(0x693)+_0x419cc1(0xcf5)+'ght:6'+_0x419cc1(0x707)+'lor:r'+'gba(2'+_0x419cc1(0x3b4)+'8,242'+_0x419cc1(0xa42)+';}'),_0x419cc1(0xc0f)+'ard.o'+'n\x20.sk'+'-card'+'-titl'+_0x419cc1(0x18e)+_0x419cc1(0x988)+_0x419cc1(0x214)+_0x419cc1(0x709)+_0x419cc1(0x876))+('.sk-m'+_0x419cc1(0x7ca)+_0x419cc1(0x5dc)+'ng:0\x20'+'12px\x20'+_0x419cc1(0xb9b)+'}'),'.sk-m'+'desc{'+'font-'+'size:'+_0x419cc1(0x8f3)+'opaci'+'ty:.4'+_0x419cc1(0x695)+_0x419cc1(0x8b9)+_0x419cc1(0x4b6)+_0x419cc1(0xd7c)+_0x419cc1(0xcf3)+_0x419cc1(0x368)+':pre-'+_0x419cc1(0x6b1)+'}')+(_0x419cc1(0xc0f)+'tl{di'+_0x419cc1(0xa15)+_0x419cc1(0x43d)+';alig'+'n-ite'+'ms:ce'+_0x419cc1(0x66d)+'gap:8'+'px;pa'+_0x419cc1(0x65c)+_0x419cc1(0x6ae)+_0x419cc1(0x279)+_0x419cc1(0x5ec)+'e:11.'+'5px;}')+('.sk-l'+_0x419cc1(0x82e)+'flex:'+_0x419cc1(0x87d)+'or:rg'+_0x419cc1(0xa8e)+_0x419cc1(0xc3d)+_0x419cc1(0x4a8)+'.75);'+'}')+(_0x419cc1(0x931)+'int{d'+'ispla'+_0x419cc1(0x71c)+_0x419cc1(0x1d1)+_0x419cc1(0x845)+_0x419cc1(0x6f9)+_0x419cc1(0x432)+_0x419cc1(0x886)+':.4;}'),_0x419cc1(0x6f7)+'witch'+_0x419cc1(0x91b)+_0x419cc1(0x1aa)+_0x419cc1(0x557)+'ive;w'+_0x419cc1(0x2d6)+'26px;'+_0x419cc1(0x5c7)+_0x419cc1(0x61d)+'x;bor'+_0x419cc1(0x609)+';bord'+_0x419cc1(0x446)+'dius:'+_0x419cc1(0xa81)+'backg'+_0x419cc1(0x494)+_0x419cc1(0x685)+_0x419cc1(0xc00)+_0x419cc1(0x49f)+'55,.0'+_0x419cc1(0x2ff)+'rsor:'+_0x419cc1(0x18f)+_0x419cc1(0x3b1)+_0x419cc1(0x33e)+'ne;}'),_0x419cc1(0x6f7)+_0x419cc1(0x56e)+_0x419cc1(0x81b)+_0x419cc1(0xa96)+'ntent'+':\x22\x22;p'+_0x419cc1(0x8f4)+_0x419cc1(0x9bf)+_0x419cc1(0x7dd)+'e;top'+':3px;'+_0x419cc1(0x6e6)+'3px;w'+_0x419cc1(0x2d6)+_0x419cc1(0x44a)+_0x419cc1(0x73b)+_0x419cc1(0xc9e)+'borde'+'r-rad'+'ius:5'+'0%;'),_0x25545f[_0x419cc1(0x492)])+_0x25545f['wRSsc']+_0x25545f['gOUjt']+_0x25545f[_0x419cc1(0x32e)]+(_0x419cc1(0x6f7)+_0x419cc1(0x233)+_0x419cc1(0xa5b)+_0x419cc1(0x6a8)+_0x419cc1(0x9b5)+_0x419cc1(0xbe1)+'none;'+_0x419cc1(0x678)+'rance'+':none'+';widt'+'h:96p'+'x;hei'+_0x419cc1(0x1c8)+_0x419cc1(0x8b4)+'ckgro'+_0x419cc1(0xc40)+_0x419cc1(0x904)+_0x419cc1(0x464)+';}'),'.sk-s'+_0x419cc1(0x233)+_0x419cc1(0x8f2)+_0x419cc1(0x722)+_0x419cc1(0xc9c)+'r-run'+_0x419cc1(0x461)+'-trac'+_0x419cc1(0xd4b)+_0x419cc1(0xc57)+_0x419cc1(0x6ef)+_0x419cc1(0x643)+_0x419cc1(0x6ab)+'s:2px'+';')+(_0x419cc1(0xc44)+_0x419cc1(0x494)+':line'+'ar-gr'+_0x419cc1(0xaaa)+_0x419cc1(0x50a)+_0x419cc1(0x9b7)+_0x419cc1(0xdf4)+_0x419cc1(0x231)+_0x419cc1(0x91d)+'var(-'+_0x419cc1(0x4a1)+'%)\x2010'+_0x419cc1(0x82f)+'-repe'+'at,rg'+_0x419cc1(0x8b5)+_0x419cc1(0x579)+_0x419cc1(0x748)+_0x419cc1(0xb99)+'}')+_0x25545f['UfXkc'],_0x419cc1(0x9e3)+'al{fo'+_0x419cc1(0x845)+_0x419cc1(0x30f)+_0x419cc1(0x475)+_0x419cc1(0x67a)+'ight:'+'600;m'+_0x419cc1(0x178)+'dth:3'+_0x419cc1(0xbe3)+'ext-a'+_0x419cc1(0x849)+'right'+_0x419cc1(0x833)+_0x419cc1(0x90a)+'a(246'+_0x419cc1(0x5c2)+'242,.'+_0x419cc1(0x893)),'.sk-n'+'ote{f'+'ont-s'+_0x419cc1(0x2de)+'1px;c'+_0x419cc1(0x214)+'rgba('+_0x419cc1(0x5a3)+'38,24'+_0x419cc1(0xcc7)+_0x419cc1(0xac6)+'ing:2'+'px\x200;'+_0x419cc1(0xd5d)+'-spac'+_0x419cc1(0x1d9)+_0x419cc1(0xc26)+';}'),_0x419cc1(0xab4)+_0x419cc1(0x844)+_0x419cc1(0x656)+'lor:#'+_0x419cc1(0x9ef)+_0x419cc1(0x306))+(_0x419cc1(0x98e)+_0x419cc1(0x72d)+_0x419cc1(0x794)+'elf:f'+'lex-s'+'tart;'+_0x419cc1(0x90e)+_0x419cc1(0xba1)+_0x419cc1(0xc04)+'-radi'+_0x419cc1(0xb7e)+_0x419cc1(0x749)+_0x419cc1(0x6a5)+_0x419cc1(0x8e0)+_0x419cc1(0x5f9)+'ackgr'+'ound:'+'#ff6b'+_0x419cc1(0x847)+_0x419cc1(0xc6a)+_0x419cc1(0x2d5)),_0x419cc1(0x4db)+_0x419cc1(0xd82)+_0x419cc1(0x775)+'x;fon'+_0x419cc1(0xcf5)+_0x419cc1(0x830)+'00;cu'+'rsor:'+'point'+'er;fo'+_0x419cc1(0x3f4)+'mily:'+_0x419cc1(0xac5)+_0x419cc1(0x324))+(_0x419cc1(0x98e)+'tn:ho'+_0x419cc1(0x54a)+'ilter'+_0x419cc1(0x41c)+'htnes'+_0x419cc1(0x4fc)+');}'),'.sk-p'+'re{fo'+_0x419cc1(0x459)+'px/1.'+_0x419cc1(0xc11)+_0x419cc1(0x563)+'pace,'+'Conso'+_0x419cc1(0x5de)+'onosp'+_0x419cc1(0x40a)+'hite-'+'space'+_0x419cc1(0x192)+'wrap;'+'word-'+_0x419cc1(0x6f0)+':brea'+'k-wor'+'d;mar'+_0x419cc1(0x674)+_0x419cc1(0x9af)+'ity:.'+'75;ma'+'x-hei'+'ght:2'+_0x419cc1(0xd47)+_0x419cc1(0xdce)+_0x419cc1(0x4f9)+_0x419cc1(0x272)),'#saku'+_0x419cc1(0x3f9)+_0x419cc1(0xc3a)+'ositi'+_0x419cc1(0x644)+_0x419cc1(0x327)+'op:12'+_0x419cc1(0x4bc)+'ght:1'+_0x419cc1(0x95c)+'-inde'+'x:214'+_0x419cc1(0x61a)+_0x419cc1(0xd0f)+_0x419cc1(0x53a)+'point'+_0x419cc1(0xcb0)+_0x419cc1(0x51a)+'6px;h'+_0x419cc1(0x73b)+_0x419cc1(0x4cb)+_0x419cc1(0x9af)+'ity:.'+_0x419cc1(0x681))+_0x25545f[_0x419cc1(0xc7b)],_0xe4bf89=_0x419cc1(0x1f2)+_0x419cc1(0xc90)+_0x419cc1(0x67f)+_0x419cc1(0x4e2)+_0x419cc1(0x1cd)+_0x419cc1(0x413)+_0x419cc1(0xaf2)+_0x419cc1(0xb0d)+_0x419cc1(0xbce)+_0x419cc1(0x358)+_0x419cc1(0xd8f)+_0x419cc1(0x9d2)+'5\x200-2'+'.5\x201.'+_0x419cc1(0x2e6)+_0x419cc1(0xd89)+_0x419cc1(0xbbd)+_0x419cc1(0xaa4)+_0x419cc1(0x7aa)+_0x419cc1(0x437)+'5-4\x207'+'.5z\x22\x20'+('fill='+_0x419cc1(0x8ba)+_0x419cc1(0x7eb)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+'troke'+'-widt'+_0x419cc1(0x241)+_0x419cc1(0xb3d)+_0x419cc1(0xd0e)+'necap'+'=\x22rou'+_0x419cc1(0xc27)+_0x419cc1(0xac9)+'-line'+_0x419cc1(0xd90)+_0x419cc1(0xb0a)+_0x419cc1(0x314))+_0x25545f[_0x419cc1(0xa34)],_0x3b713e=_0x25545f[_0x419cc1(0xa76)]+_0x25545f[_0x419cc1(0x581)]+('<circ'+'le\x20cx'+'=\x2212\x22'+'\x20cy=\x22'+_0x419cc1(0x43a)+_0x419cc1(0x189)+_0x419cc1(0xc53)+_0x419cc1(0x341)+_0x419cc1(0xbae)+_0x419cc1(0x30e)+'svg>');function _0x567ea8(_0xe66c0f,_0x291497,_0x3f9bce){var _0x252039=_0x419cc1;if(_0x25545f[_0x252039(0xd33)](_0x25545f['gHigj'],_0x252039(0xb48))){var _0x3843e7=document['creat'+'eElem'+_0x252039(0xba7)](_0xe66c0f);if(_0x291497)_0x3843e7[_0x252039(0x9ab)+_0x252039(0xc2c)]=_0x291497;if(_0x25545f[_0x252039(0x91f)](_0x3f9bce,null))_0x3843e7[_0x252039(0x260)+_0x252039(0x2e8)]=_0x3f9bce;return _0x3843e7;}else _0x35b61d('snaps'+'hot');}function _0x3fd396(_0x433952,_0x56d9e9){var _0x314411=_0x419cc1,_0x373c13=_0x25545f[_0x314411(0x637)]['split']('|'),_0x95263f=0x2547+0x4a1+-0x3*0xdf8;while(!![]){switch(_0x373c13[_0x95263f++]){case'0':_0x3a1aa6[_0x314411(0x169)]=_0x2a3128;continue;case'1':_0x3a1aa6[_0x314411(0x816)]=_0x178958;continue;case'2':var _0x2a3128=_0x567ea8(_0x314411(0x166),'sk-ca'+_0x314411(0xae7)+_0x314411(0x415),_0x25545f['aQKIi'](_0x314411(0x779)+_0x314411(0x187),_0x433952)+('</str'+_0x314411(0xc8e)));continue;case'3':var _0x178958=_0x567ea8(_0x314411(0x166),_0x25545f['KMNbJ']);continue;case'4':_0x3a1aa6[_0x314411(0xcad)+'dChil'+'d'](_0x97eae8);continue;case'5':return _0x3a1aa6;case'6':var _0x97eae8=_0x25545f[_0x314411(0x6be)](_0x567ea8,_0x314411(0x166),_0x25545f[_0x314411(0xb63)]);continue;case'7':var _0x3a1aa6=_0x25545f[_0x314411(0x88b)](_0x567ea8,_0x314411(0x166),'sk-ca'+'rd'+(_0x56d9e9?'\x20on':''));continue;case'8':_0x3a1aa6[_0x314411(0xcad)+'dChil'+'d'](_0x178958);continue;case'9':_0x97eae8[_0x314411(0xcad)+'dChil'+'d'](_0x2a3128);continue;}break;}}function _0x4c68ca(_0x57d8b0,_0x3b826f){var _0x3d2f9e=_0x419cc1,_0x33d03e={'gavRF':_0x3d2f9e(0x2bd)+_0x3d2f9e(0xa31)+'ed','UBPtE':'true'},_0x5cbbd7=_0x567ea8('butto'+'n',_0x3d2f9e(0x5b2)+_0x3d2f9e(0xca9));_0x5cbbd7['type']='butto'+'n';var _0x354d51=function(){var _0x503afe=_0x3d2f9e;_0x5cbbd7[_0x503afe(0x74a)+_0x503afe(0x3de)+'te'](_0x33d03e[_0x503afe(0xa21)],_0x57d8b0()?_0x33d03e[_0x503afe(0x75e)]:'false');};return _0x5cbbd7['oncli'+'ck']=function(){var _0x2eb6f6=_0x3d2f9e;_0x3b826f(!_0x57d8b0()),_0x25545f[_0x2eb6f6(0xdc1)](_0x354d51);},_0x354d51(),_0x5cbbd7[_0x3d2f9e(0xb2a)]=_0x354d51,_0x3314c7['syncs'][_0x3d2f9e(0x90b)](_0x354d51),_0x5cbbd7;}function _0x172f29(_0x5cef73,_0x1fe18f,_0x47d310,_0x533318,_0x3e1be8){var _0x2cdc37=_0x419cc1,_0x5482c9=_0x567ea8('div',_0x25545f['kkAYO']),_0xf6df80=document['creat'+_0x2cdc37(0x2c7)+'ent'](_0x25545f[_0x2cdc37(0x297)]);_0xf6df80[_0x2cdc37(0x62a)]=_0x25545f[_0x2cdc37(0x46d)],_0xf6df80['class'+_0x2cdc37(0xc2c)]=_0x25545f['UqsgU'],_0xf6df80['min']=String(_0x5cef73),_0xf6df80[_0x2cdc37(0x932)]=String(_0x1fe18f),_0xf6df80['step']=String(_0x47d310);var _0x3b3007=_0x567ea8('span',_0x2cdc37(0xdd8)+'l'),_0x532268=function(){var _0x43e528=_0x2cdc37,_0xfb04ef={'TPKSa':function(_0x3e1373,_0x381cd6){return _0x3e1373===_0x381cd6;},'qLSxm':function(_0x4d0a33,_0x4a1b4f){return _0x4d0a33(_0x4a1b4f);},'dcNtI':_0x43e528(0x294)+_0x43e528(0x3dc)+'t','ggGLh':_0x43e528(0x8a6)+'1b'};if(_0x25545f[_0x43e528(0xcd9)]===_0x25545f['Adnfk']){var _0x3c6e5d=_0x25545f[_0x43e528(0x74c)]['split']('|'),_0x362594=-0xaa8+0x3*0x28d+0x301;while(!![]){switch(_0x3c6e5d[_0x362594++]){case'0':_0xf6df80['style']['setPr'+_0x43e528(0xce1)+'y']('--p',_0x25545f[_0x43e528(0xdaf)](_0x30ea1d,'%'));continue;case'1':var _0x144755=_0x533318();continue;case'2':_0xf6df80['value']=String(_0x144755);continue;case'3':var _0x30ea1d=_0x25545f['LybMF'](_0x144755,_0x5cef73)/(_0x1fe18f-_0x5cef73)*(0x1dcb+0x1689+-0x33f0);continue;case'4':_0x3b3007['textC'+_0x43e528(0x7d1)+'t']=(_0x47d310<0xe15*-0x2+0x24dc*0x1+-0x8b1?_0x144755[_0x43e528(0x5b7)+'ed'](0x2*-0x18f+-0x2*0x19b+-0x1*-0x655):String(Math['round'](_0x144755)))+(_0xf6df80[_0x43e528(0x339)+'et'][_0x43e528(0x684)]||'');continue;}break;}}else{var _0x28155e=_0x5c5f45['on'];_0x5a75b7['on']=!!_0x45506b;_0x24da35['on']&&!_0x28155e&&(_0x2c7990===_0x3b802a||_0x57d1a0===null||_0xfb04ef[_0x43e528(0x3e4)](_0xfb04ef['qLSxm'](_0x4c18ec,_0x1b4a85),-0x1307*-0x1+0xa83+-0x1*0x1d89))&&(_0x136447=_0x5cb848);_0x586f01['facto'+'r']=_0x4b7648[_0x43e528(0xc96)](_0x328014['max'],_0x2d1c5d[_0x43e528(0x932)](_0xfb85ae['min'],_0x275099(_0x5d5ccd)||-0x22fd+-0x1be4+0x3ee2));if(!_0x351c86['on'])_0xca6150={};var _0x226032=_0x22841d();if(_0x226032){_0x226032['sp']&&(_0x226032['sp'][_0x43e528(0xe00)+_0x43e528(0x7d1)+'t']=_0x582d6e['on']?_0x43e528(0x9fb)+'\x20ON':_0x43e528(0x9fb)+'\x20off',_0x226032['sp'][_0x43e528(0xbf4)]['backg'+_0x43e528(0x494)]=_0x5ec57e['on']?_0x1fdfd6:_0xfb04ef[_0x43e528(0x5ff)],_0x226032['sp'][_0x43e528(0xbf4)]['color']=_0x55a3d8['on']?_0xfb04ef['ggGLh']:_0x43e528(0xad5)+'f5');if(_0x226032['fx'])_0x226032['fx'][_0x43e528(0x467)]=_0x3bca55(_0x2c4ab4[_0x43e528(0x3f2)+'r']);if(_0x226032['fv'])_0x226032['fv'][_0x43e528(0xe00)+_0x43e528(0x7d1)+'t']=_0x37be70[_0x43e528(0x3f2)+'r']['toFix'+'ed'](-0x255e+0xa12+0x1d*0xf1)+'x';}}};return _0xf6df80[_0x2cdc37(0x829)+'ut']=function(){var _0x13e906=_0x2cdc37;_0x3e1be8(_0x25545f['lgGtg'](parseFloat,_0xf6df80[_0x13e906(0x467)])||_0x5cef73),_0x532268();},_0x5482c9['appen'+'dChil'+'d'](_0xf6df80),_0x5482c9['appen'+_0x2cdc37(0x48f)+'d'](_0x3b3007),_0x5482c9[_0x2cdc37(0xb2a)]=_0x532268,_0x5482c9['input']=_0xf6df80,_0x532268(),_0x3314c7[_0x2cdc37(0x264)][_0x2cdc37(0x90b)](_0x532268),_0x5482c9;}function _0x230ae1(_0x526437,_0xdf5015){var _0x2beeed=_0x419cc1,_0x4d4032=_0x25545f['ZzWxM'](_0x567ea8,_0x25545f['FpfVl'],_0x25545f[_0x2beeed(0x768)]),_0x5d4868=_0x567ea8(_0x25545f[_0x2beeed(0x7c1)],_0x25545f['tzPeQ'],_0x526437+(_0xdf5015?_0x25545f[_0x2beeed(0xb2f)]('<span'+'\x20clas'+'s=\x27sk'+_0x2beeed(0x292)+'\x27>',_0xdf5015)+('</spa'+'n>'):''));return _0x4d4032[_0x2beeed(0xcad)+_0x2beeed(0x48f)+'d'](_0x5d4868),_0x4d4032;}function _0x19cfc9(_0x413f04,_0x31d77a,_0x1c8845,_0x2a72e1){var _0x53ac51=_0x419cc1,_0x1fc854=_0x413f04&&_0x413f04[_0x53ac51(0xd3c)+'y']&&_0x413f04['surve'+'y'][_0x31d77a];if(!_0x1fc854)return'-';for(var _0x231e01=0xb*-0x2a+0x1*-0x31d+0x4eb;_0x231e01<_0x1fc854['lengt'+'h'];_0x231e01++){if(_0x1fc854[_0x231e01]['o']===_0x1c8845){if(_0x2a72e1==='v3'){var _0x1bc92e=_0x1fc854[_0x231e01]['xyz']||[_0x1fc854[_0x231e01]['v'],0x1*-0x114d+0x1ba1+-0xa54,-0x2635+0x22b7*-0x1+0x48ec];return _0x1bc92e['map'](function(_0x285f61){var _0x60dea9=_0x53ac51;return _0x25545f['qfkrY'](Math[_0x60dea9(0x494)](_0x285f61*(-0x1*0x1e42+-0x5*0x21+-0x1f4b*-0x1)),0x220e+0x11*-0x163+-0xa17);})[_0x53ac51(0x5aa)]('\x20\x20');}var _0x580ada=_0x1fc854[_0x231e01]['v'];return _0x25545f[_0x53ac51(0x786)](typeof _0x580ada,'numbe'+'r')?_0x25545f['AlRfP'](Math[_0x53ac51(0x494)](_0x580ada*(0x256d*-0x1+-0xf38*0x2+0x47c5)),0x2f4+0x21d*-0xb+0x1833):_0x25545f['eUyER'](String,_0x580ada);}}return'-';}function _0xc04405(_0x6ba3c5){var _0x3fb2ed=_0x419cc1,_0x287cd9={'wgKgI':function(_0x436289,_0xadbfa1){return _0x25545f['uJKlp'](_0x436289,_0xadbfa1);},'yfUWf':_0x3fb2ed(0x1d0),'kkZes':function(_0x128dec,_0x8a10a5){return _0x128dec(_0x8a10a5);},'cbzNn':function(_0xc6be48,_0x57b5b8){return _0xc6be48!==_0x57b5b8;},'vhTMe':_0x25545f[_0x3fb2ed(0x287)],'jJjsw':_0x3fb2ed(0x923),'JHHiL':_0x3fb2ed(0xa7e),'NPbMh':function(_0x1b99a9){return _0x25545f['zGGke'](_0x1b99a9);},'ICDCg':function(_0x5a3d57,_0x141063){return _0x5a3d57+_0x141063;},'aDXIh':function(_0x494084,_0x49f4fb){var _0x4c278f=_0x3fb2ed;return _0x25545f[_0x4c278f(0x752)](_0x494084,_0x49f4fb);},'BvSPR':'\x20·\x20fo'+'v\x20','bNoqQ':_0x3fb2ed(0xcd3)+'am','ARBcl':function(_0x28f057,_0x1c67d2){return _0x28f057===_0x1c67d2;},'wkVdh':'obfI','XHipw':function(_0x20ce9b,_0x5df025){return _0x20ce9b&_0x5df025;},'HQoTt':function(_0x21e02a,_0x1c210e){return _0x21e02a^_0x1c210e;},'DsrDS':function(_0x528b3e,_0x17a5b0){return _0x528b3e|_0x17a5b0;},'bMYUl':_0x25545f[_0x3fb2ed(0xbc6)],'BLAca':function(_0x2cf61a,_0x179c76){return _0x2cf61a===_0x179c76;}},_0x2ce6f7=_0x3cf7e5,_0x4365bc=[],_0x1d5072;if(_0x6ba3c5===_0x25545f[_0x3fb2ed(0x5f0)]){var _0x589c3b=_0x3fd396('Speed'+'\x20hack',_0x241f20['on']),_0x666e53=_0x25545f['CSEzM'](_0x567ea8,_0x25545f[_0x3fb2ed(0x7c1)],_0x25545f['jZznw'],_0x241f20['on']?'x'+_0x241f20[_0x3fb2ed(0x3f2)+'r'][_0x3fb2ed(0x5b7)+'ed'](-0xc76+0x1*0x1b91+-0xf1a*0x1)+_0x3fb2ed(0x3e0)+_0x1968dd[_0x3fb2ed(0xa1b)+'h']+('\x20fiel'+'ds\x20·\x20')+_0x3cc99f+('\x20writ'+'es'):_0x25545f[_0x3fb2ed(0x791)]),_0x2f4bf1=_0x230ae1(_0x3fb2ed(0x205)+'ed');_0x2f4bf1[_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x4c68ca(function(){var _0xb37afb=_0x3fb2ed;if(_0xb37afb(0x902)!==_0xb37afb(0xb4f))return _0x241f20['on'];else _0x33cf3c[_0xb37afb(0x523)+'ck']=function(){_0xc2c2d4(_0x1caecf);};},function(_0x509932){var _0x81c173=_0x3fb2ed;_0x25545f[_0x81c173(0x206)](_0x257a7b,_0x509932,_0x241f20[_0x81c173(0x3f2)+'r']),_0x666e53[_0x81c173(0xe00)+_0x81c173(0x7d1)+'t']=_0x509932?_0x25545f[_0x81c173(0x217)](_0x25545f[_0x81c173(0xb58)]('x'+_0x241f20[_0x81c173(0x3f2)+'r'][_0x81c173(0x5b7)+'ed'](0x26c9+-0x28b+-0x243d)+_0x25545f[_0x81c173(0x254)]+_0x1968dd['lengt'+'h'],_0x25545f[_0x81c173(0xb43)])+_0x3cc99f,_0x25545f['DmcjD']):_0x81c173(0x49b)+_0x81c173(0x6c7)+_0x81c173(0xd26)+'ment-'+'speed'+_0x81c173(0x478)+'ds\x20on'+'ly.\x20H'+'eight'+',\x20ste'+_0x81c173(0xc05)+'\x20jump'+'\x20are\x20'+'refus'+_0x81c173(0x582);})),_0x589c3b[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x666e53),_0x589c3b[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x2f4bf1);var _0x32dc48=_0x172f29(0x12*0xc1+0x1*-0x1d6d+0xfdc,0x3c*-0x43+-0xb*-0x36e+-0x1601,0x1c12+0xd12+-0x4*0xa49+0.5,function(){var _0x544877=_0x3fb2ed;if(_0x287cd9['wgKgI'](_0x544877(0x1d0),_0x287cd9[_0x544877(0x569)]))return _0x241f20[_0x544877(0x3f2)+'r'];else try{return _0x3acdb7[_0x544877(0x163)]();}catch(_0x133b68){}},function(_0x13d490){_0x257a7b(_0x241f20['on'],_0x13d490);});_0x32dc48[_0x3fb2ed(0x404)]['datas'+'et'][_0x3fb2ed(0x684)]='x';var _0x2a8e8d=_0x230ae1('Multi'+'plier',_0x3fb2ed(0x941)+_0x3fb2ed(0x5b3)+'so\x20st'+_0x3fb2ed(0xbcb)+'is');_0x2a8e8d['appen'+'dChil'+'d'](_0x32dc48),_0x589c3b['body']['appen'+_0x3fb2ed(0x48f)+'d'](_0x2a8e8d);if(_0x20e579['lengt'+'h']){var _0x5eb1=_0x567ea8(_0x25545f['FpfVl'],_0x25545f[_0x3fb2ed(0xc43)],_0x25545f['zOAuj']+_0x20e579[_0x3fb2ed(0x634)](-0x1261+0x1f80+-0xd1f,-0x7f*0x1f+0x1266+-0x301)[_0x3fb2ed(0x8fa)](function(_0xa701bb){var _0x2b490b=_0x3fb2ed;return _0x25545f['kcNgf']('0x',_0xa701bb['o']<-0x525*-0x3+-0x9c0*0x2+0x15b*0x3?'?':_0xa701bb['o'][_0x2b490b(0x834)+'ing'](0xc73*-0x2+-0x22bd+0x3bb3))+'\x20('+_0xa701bb[_0x2b490b(0xdcf)]+')';})[_0x3fb2ed(0x5aa)]('\x20\x20'));_0x589c3b[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x5eb1);}_0x4365bc[_0x3fb2ed(0x90b)](_0x589c3b);var _0x56b89e=_0x3fd396('Bindi'+_0x3fb2ed(0xb8d)),_0x380293=_0x567ea8(_0x3fb2ed(0xcbe)+'n',_0x3fb2ed(0xb4e)+'n','Snaps'+'hot\x20n'+'ow\x20(F'+'9)');_0x380293['type']=_0x3fb2ed(0xcbe)+'n',_0x380293[_0x3fb2ed(0x523)+'ck']=function(){var _0xc28760=_0x3fb2ed;_0x287cd9['kkZes'](_0x40af97,'snaps'+_0xc28760(0x1e5));},_0x56b89e[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x25545f[_0x3fb2ed(0x4b8)](_0x567ea8,_0x25545f[_0x3fb2ed(0x7c1)],'sk-md'+'esc',_0x25545f[_0x3fb2ed(0x48b)])),_0x56b89e[_0x3fb2ed(0x816)]['appen'+'dChil'+'d'](_0x380293),_0x4365bc[_0x3fb2ed(0x90b)](_0x56b89e);}if(_0x25545f[_0x3fb2ed(0xdc8)](_0x6ba3c5,_0x25545f[_0x3fb2ed(0x9a9)])){var _0x30b3e4=_0x25545f[_0x3fb2ed(0x50c)](_0x3fd396,_0x3fb2ed(0x436),_0x116441['on']),_0x6c10e7=_0x25545f[_0x3fb2ed(0xa2c)](_0x230ae1,_0x25545f['zQmce']);_0x6c10e7[_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x4c68ca(function(){return _0x116441['on'];},function(_0x3447fb){_0xd2405c(_0x3447fb,_0x116441['boxes']);})),_0x30b3e4[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+'dChil'+'d'](_0x567ea8(_0x3fb2ed(0x166),'sk-md'+'esc',_0x3fb2ed(0xcaf)+_0x3fb2ed(0xa37)+_0x3fb2ed(0x59f)+_0x3fb2ed(0xd1d)+'\x20top-'+'right'+'.\x20Nee'+_0x3fb2ed(0x29c)+'ly\x20po'+'sitio'+_0x3fb2ed(0x3e7))),_0x30b3e4['body']['appen'+'dChil'+'d'](_0x6c10e7);var _0x77e0dd=_0x172f29(-0x7a9*-0x5+-0x837*0x3+-0xd80,0x18c0+-0x7a*-0x4d+-0x3cd2,0x24a*-0x2+0xd7*-0x14+0x156a,function(){var _0x1be771=_0x3fb2ed,_0x504126={'AIiMn':function(_0x2152b7,_0x9ead30){return _0x2152b7===_0x9ead30;}};if(_0x287cd9[_0x1be771(0x59a)]('MPIKD',_0x287cd9[_0x1be771(0x4f5)])){var _0x40324e=_0x504126[_0x1be771(0x89e)](_0x5ad91a,'v2')?0x1*-0xa40+-0x4b1*-0x4+-0x882:_0x34bba1==='v3'?-0x10b*-0x9+-0x97c*0x3+0x94*0x21:-0x1*0x172a+-0x15e8+0x2*0x168b,_0x5b1986=_0x311f45(_0x316a09[_0x1be771(0x936)],_0x24a8fe,_0x40324e);_0x5b1986&&(_0x285d1b[_0x1be771(0xbef)]=_0x5b1986,_0x54f1be['v']=_0x5b1986[-0x107*-0xa+0x15*0x44+-0xfda]);}else return _0x116441[_0x1be771(0xd70)];},function(_0x44b9f2){var _0x8d9db6=_0x3fb2ed;if(_0x8d9db6(0x1e1)===_0x8d9db6(0x1e1))_0x116441[_0x8d9db6(0xd70)]=_0x44b9f2;else return _0x812789[_0x8d9db6(0x482)]('PICKP'+_0x8d9db6(0xa3b),_0x2aa73e[_0x8d9db6(0x650)+'ge'],_0x8d784c(_0x2d4e65[_0x8d9db6(0xcc1)]||'')['split']('\x0a')[_0x8d9db6(0x634)](0x1*-0x1758+-0x67e*0x1+0x1*0x1dd6,0xbf7+0x1bee+0x27e1*-0x1)['join']('\x20|\x20')),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};});_0x77e0dd['input'][_0x3fb2ed(0x339)+'et'][_0x3fb2ed(0x684)]='m';var _0x3ace62=_0x230ae1(_0x3fb2ed(0x4f8),_0x3fb2ed(0x696)+_0x3fb2ed(0x9e2)+_0x3fb2ed(0xb67)+_0x3fb2ed(0x1e9)+'he\x20ra'+'dar');_0x3ace62['appen'+_0x3fb2ed(0x48f)+'d'](_0x77e0dd),_0x30b3e4[_0x3fb2ed(0x816)]['appen'+'dChil'+'d'](_0x3ace62),_0x4365bc['push'](_0x30b3e4);var _0x48835f=_0x3fd396('Boxes',_0x116441[_0x3fb2ed(0x3ca)]),_0x74d26e=_0x230ae1(_0x25545f['zQmce']);_0x74d26e[_0x3fb2ed(0xcad)+'dChil'+'d'](_0x4c68ca(function(){var _0x16eca4=_0x3fb2ed,_0x2f7baa={'vcqkl':function(_0x24f6a5,_0x4e452c){return _0x24f6a5<_0x4e452c;},'atlGm':function(_0x2203b6,_0x3a947a){return _0x2203b6(_0x3a947a);}};if(_0x287cd9[_0x16eca4(0x1ce)]!==_0x287cd9[_0x16eca4(0xcf4)])return _0x116441[_0x16eca4(0x3ca)];else{if(_0x2f7baa['vcqkl'](_0x21dc17[_0x16eca4(0x97b)+'s']['lengt'+'h'],-0xf61+-0x11a7+-0x1*-0x210e))_0x12a11f[_0x16eca4(0x97b)+'s'][_0x16eca4(0x90b)](_0x16eca4(0xd76)+_0x16eca4(0x418)+_0x2f7baa['atlGm'](_0x16d2e4,_0x5d3857&&_0x583e91[_0x16eca4(0x650)+'ge']||_0x2d989c)['slice'](0x220a+0xf9*-0x20+-0x1*0x2ea,0x395+-0xb*-0x1d1+-0x1736));return-0x16d9*-0x1+-0x23a8+0xccf*0x1;}},function(_0x1d1cf2){var _0x452baf=_0x3fb2ed;if(_0x1d1cf2&&!_0x1e55f7()){_0x5551fa();return;}_0x25545f[_0x452baf(0x8e5)](_0xd2405c,!![],_0x1d1cf2);}));var _0x2e1b37=_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0x519)+'s'];_0x48835f[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x567ea8(_0x25545f['FpfVl'],_0x3fb2ed(0xc62)+_0x3fb2ed(0xbbc),_0x2e1b37&&!_0x2e1b37[_0x3fb2ed(0x9aa)+'ified']?_0x3fb2ed(0xd30)+_0x3fb2ed(0x1a4)+_0x3fb2ed(0x4f0)+(_0x2e1b37[_0x3fb2ed(0xdcf)]||'view\x20'+'angle'+_0x3fb2ed(0xd48)+'denti'+'fied')+_0x25545f['eEelI']:_0x2e1b37&&!_0x2e1b37[_0x3fb2ed(0x905)+'ne']?_0x25545f['GtbBH']('Field'+_0x3fb2ed(0x1f0)+_0x3fb2ed(0x38e)+'s\x20'+Math[_0x3fb2ed(0x494)](_0x2e1b37[_0x3fb2ed(0xa2e)]),_0x3fb2ed(0x51b)+'tside'+_0x3fb2ed(0xdbe)+_0x3fb2ed(0xd08)+_0x3fb2ed(0x99c)+_0x3fb2ed(0x3e9)+_0x3fb2ed(0x9b6)+'below'+'.'):_0x25545f[_0x3fb2ed(0x443)])),_0x48835f[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+'dChil'+'d'](_0x74d26e);var _0xc4920e=_0x172f29(0xcfc+0x236*0x4+-0x1598,-0x17af+-0x2bf*-0x5+0x2*0x53b,0x1*0x229d+0x1d48+0x3fe3*-0x1,function(){return _0x9e54cb['fov'];},function(_0x59ae30){var _0x311493=_0x3fb2ed;_0x9e54cb[_0x311493(0xa2e)]=_0x59ae30,_0x4f1dfe();});_0xc4920e[_0x3fb2ed(0x404)][_0x3fb2ed(0x339)+'et'][_0x3fb2ed(0x684)]='°';var _0x4effaf=_0x230ae1(_0x25545f[_0x3fb2ed(0x6db)],'[\x20and'+'\x20]\x20al'+_0x3fb2ed(0x6ba)+_0x3fb2ed(0xbcb)+'is');_0x4effaf[_0x3fb2ed(0xcad)+'dChil'+'d'](_0xc4920e);var _0x2152b4=_0x25545f['ezRJD'](_0x230ae1,_0x3fb2ed(0x382)+_0x3fb2ed(0x5fd),_0x25545f[_0x3fb2ed(0xd24)]),_0x4200bb=_0x25545f[_0x3fb2ed(0xabc)](_0x567ea8,_0x25545f['nsUWw'],'sk-bt'+'n',_0x3fb2ed(0x382));_0x4200bb['addEv'+'entLi'+'stene'+'r']('click',function(){var _0x5c7a2c=_0x3fb2ed;_0x9e54cb['fov']=-0x2e7*-0x9+0x148f+-0x2e63,_0x287cd9[_0x5c7a2c(0x433)](_0x4f1dfe),_0x120e05(_0x3314c7[_0x5c7a2c(0x3d1)]);}),_0x2152b4['appen'+_0x3fb2ed(0x48f)+'d'](_0x4200bb),_0x48835f[_0x3fb2ed(0x816)]['appen'+'dChil'+'d'](_0x4effaf),_0x48835f[_0x3fb2ed(0x816)]['appen'+'dChil'+'d'](_0x2152b4);var _0xcb55bf=_0x2ce6f7&&_0x2ce6f7['view'];_0x48835f['body'][_0x3fb2ed(0xcad)+'dChil'+'d'](_0x25545f[_0x3fb2ed(0x3d9)](_0x567ea8,_0x3fb2ed(0x166),_0x3fb2ed(0x384)+'te',_0x25545f[_0x3fb2ed(0x14d)](_0x25545f[_0x3fb2ed(0x2bb)](_0x25545f[_0x3fb2ed(0x7a8)](_0x25545f['BglUt'](_0x3fb2ed(0x651)+'\x20',_0xcb55bf?_0xcb55bf['mouse'+_0x3fb2ed(0x6b4)]?_0x25545f['EsGNJ'](_0x25545f['ATfGF']+_0xcb55bf['mouse'+_0x3fb2ed(0x6b4)],_0xcb55bf['camer'+'a']?_0x25545f[_0x3fb2ed(0xa7b)](_0x25545f[_0x3fb2ed(0x22e)],_0xcb55bf['camer'+'a']):''):_0x25545f['AnZUR']:_0x3fb2ed(0xcc0)+'useLo'+_0x3fb2ed(0x974)+'t'),_0x2e1b37?'\x0a'+(_0x2e1b37['sourc'+'e']&&_0x2e1b37[_0x3fb2ed(0x5fb)+'e'][_0x3fb2ed(0x6b7)+'Of'](_0x3fb2ed(0x514)+'r\x20pai'+'r')===-0x112*-0x1+0x35d+-0x46f*0x1?_0x25545f[_0x3fb2ed(0x91e)](_0x25545f['sqvlE'](_0x25545f['FWTXl']+_0x2e1b37[_0x3fb2ed(0x5fb)+'e'][_0x3fb2ed(0x634)](0x18f3+0x1*-0xb45+0xda3*-0x1),'\x0ayaw\x20'+'\x20\x20'),Math[_0x3fb2ed(0x494)](_0x2e1b37[_0x3fb2ed(0x940)+'w']))+(_0x3fb2ed(0x683)+'h\x20')+Math['round'](_0x2e1b37[_0x3fb2ed(0xa8c)+_0x3fb2ed(0x3ff)]):_0x2e1b37['sourc'+'e']===_0x25545f[_0x3fb2ed(0x915)]?_0x25545f['jtjcP']('read\x20'+'from\x20'+_0x3fb2ed(0xd14)+_0x3fb2ed(0x407)+'gette'+_0x3fb2ed(0x9c1)+_0x3fb2ed(0x9f1)+_0x2e1b37['yawAt']+'\x20=\x20'+Math['round'](_0x2e1b37[_0x3fb2ed(0x940)+'w'])+(_0x3fb2ed(0x683)+'h\x20')+_0x2e1b37[_0x3fb2ed(0x4c0)+'At']+_0x3fb2ed(0x472),Math[_0x3fb2ed(0x494)](_0x2e1b37[_0x3fb2ed(0xa8c)+'tch'])):_0x3fb2ed(0x4ec)+_0x3fb2ed(0x776)+'rom\x20s'+_0x3fb2ed(0x8a0)+_0x3fb2ed(0x565)+'ets\x20+'+_0x3fb2ed(0x894)+'and\x20+'+'0x1C\x0a'+_0x3fb2ed(0x218)+'ngle\x20'+'hooks'+'\x20have'+'\x20not\x20'+'fired'+_0x3fb2ed(0x8b1)):''),_0x2e1b37&&_0x2e1b37['viewH'+_0x3fb2ed(0xd3d)]&&_0x2e1b37[_0x3fb2ed(0x2c9)+_0x3fb2ed(0xd3d)][_0x3fb2ed(0x145)+'ed']===-0x2408+-0x11*0x19+0x1*0x25b1&&_0x2e1b37['viewH'+_0x3fb2ed(0xd3d)][_0x3fb2ed(0xcd4)]>0x83c*0x4+-0x327*-0x9+-0x3d4f?_0x25545f['qdIDE'](_0x25545f[_0x3fb2ed(0xbbe)]('\x0ahook'+'s\x20reg'+'ister'+'ed\x20bu'+_0x3fb2ed(0xc1c)+_0x3fb2ed(0x9d6)+'lied\x20'+'('+_0x2e1b37['viewH'+_0x3fb2ed(0xd3d)][_0x3fb2ed(0x971)+'ved'],'/'),_0x2e1b37[_0x3fb2ed(0x2c9)+_0x3fb2ed(0xd3d)][_0x3fb2ed(0xcd4)])+('\x20reso'+_0x3fb2ed(0x17a)):_0x2e1b37&&_0x2e1b37[_0x3fb2ed(0x2c9)+'ooks']&&_0x2e1b37['viewH'+_0x3fb2ed(0xd3d)][_0x3fb2ed(0xcd4)]===-0x1a95+0x1a81+0x2*0xa?_0x25545f[_0x3fb2ed(0x835)](_0x25545f[_0x3fb2ed(0x3da)],_0x2e1b37[_0x3fb2ed(0x2c9)+_0x3fb2ed(0xd3d)][_0x3fb2ed(0x97b)+_0x3fb2ed(0x4ed)])+_0x25545f[_0x3fb2ed(0x694)]:''),_0x149d5c?_0x25545f[_0x3fb2ed(0x355)]:''))),_0x4365bc['push'](_0x48835f);}if(_0x6ba3c5===_0x3fb2ed(0x467)+'s'){var _0x1ebcb0=[[_0x25545f['ehuae'],_0x3fb2ed(0xd51)+'ON',_0x2ce6f7?_0x2ce6f7[_0x3fb2ed(0x7cc)+'on']:'-'],['Hooks',_0x3fb2ed(0x145)+'ed\x20/\x20'+_0x3fb2ed(0x692)+'tered',_0x2ce6f7?_0x2ce6f7['hooks'+_0x3fb2ed(0x1e3)+'ed']+_0x25545f[_0x3fb2ed(0xb50)]+_0x2ce6f7['hooks'+'Regis'+_0x3fb2ed(0x43b)+_0x3fb2ed(0x1fa)]:'-'],[_0x3fb2ed(0x18d),'from\x20'+_0x3fb2ed(0xd7e)+_0x3fb2ed(0xbdc)+_0x3fb2ed(0xd83),_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0x840)+'emory']&&_0x2ce6f7[_0x3fb2ed(0x840)+_0x3fb2ed(0x836)]['captu'+'red']?_0x25545f['SIxuX'](_0x25545f[_0x3fb2ed(0x2c3)](Math['round'](_0x2ce6f7[_0x3fb2ed(0x840)+_0x3fb2ed(0x836)]['bytes']/(0x931d6+0x7f3b0*-0x3+-0x2*-0xf549d))+(_0x3fb2ed(0x820)+'\x20'),_0x2ce6f7[_0x3fb2ed(0x840)+_0x3fb2ed(0x836)]['atMs']),'ms'):'-'],[_0x3fb2ed(0xcdb)+'rs',_0x25545f['mNyEM'],_0x2ce6f7&&_0x2ce6f7['esp']?_0x25545f[_0x3fb2ed(0xc99)](String,_0x2ce6f7[_0x3fb2ed(0x363)][_0x3fb2ed(0x6cf)+_0x3fb2ed(0x4b2)+'t']):'-'],['Enemi'+'es',_0x3fb2ed(0x592)+_0x3fb2ed(0x564)+_0x3fb2ed(0x7da)+'u',_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0x363)]?String(_0x2ce6f7[_0x3fb2ed(0x363)][_0x3fb2ed(0xd6f)+_0x3fb2ed(0x4ed)]):'-'],[_0x3fb2ed(0x512)+'a',_0x25545f[_0x3fb2ed(0xd5a)],_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0x363)]&&_0x2ce6f7['esp']['camer'+'a']?_0x2ce6f7[_0x3fb2ed(0x363)][_0x3fb2ed(0xb9c)+'a']+'\x20('+_0x2ce6f7['esp']['camer'+_0x3fb2ed(0x6c8)]+')':'-']];for(_0x1d5072=0xc00+-0x1540+-0x4a*-0x20;_0x1d5072<_0x1ebcb0['lengt'+'h'];_0x1d5072++){var _0xb8dcee=_0x25545f['vARrD'](_0x230ae1,_0x1ebcb0[_0x1d5072][0x9f0+0xe00+-0x8*0x2fe]),_0x31f5db=_0x567ea8(_0x25545f['yxFEJ'],_0x25545f[_0x3fb2ed(0x38a)]);_0x31f5db[_0x3fb2ed(0xbf4)]['minWi'+_0x3fb2ed(0xb3e)]='0',_0x31f5db[_0x3fb2ed(0xbf4)][_0x3fb2ed(0xcf9)]='1',_0x31f5db[_0x3fb2ed(0xbf4)][_0x3fb2ed(0x1b8)+_0x3fb2ed(0x1c6)]=_0x25545f[_0x3fb2ed(0x734)],_0x31f5db[_0x3fb2ed(0xe00)+_0x3fb2ed(0x7d1)+'t']=String(_0x1ebcb0[_0x1d5072][0x218+-0x131a*-0x1+-0x1c4*0xc]),_0x31f5db[_0x3fb2ed(0x339)+'et']['k']=_0x1ebcb0[_0x1d5072][-0x5d2+-0x2*-0x12cc+-0x1*0x1fc5],_0xb8dcee[_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x31f5db);var _0x1e5eed=_0x4365bc[_0x3fb2ed(0xa1b)+'h']?_0x4365bc[_0x4365bc[_0x3fb2ed(0xa1b)+'h']-(-0x21ac+-0x17*-0x115+0x8ca)]:null;!_0x1e5eed&&(_0x1e5eed=_0x3fd396('Sessi'+'on',![]),_0x4365bc['push'](_0x1e5eed)),_0x1e5eed[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0xb8dcee),_0x1e5eed[_0x3fb2ed(0x816)]['lastC'+_0x3fb2ed(0x27c)]['sp']=_0x31f5db;}var _0x530d81=_0x25545f['tASsF'](_0x3fd396,_0x25545f['TNEAA'],![]),_0x103ff4=[[_0x3fb2ed(0xa9e)+_0x3fb2ed(0xc6b),_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0x157)]&&_0x2ce6f7[_0x3fb2ed(0x157)][_0x3fb2ed(0x94e)]?_0x25545f['BTCyu']+_0x2ce6f7[_0x3fb2ed(0x157)][_0x3fb2ed(0x94e)]:'FPSco'+'ntrol'+_0x3fb2ed(0x36a),_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0x157)]&&_0x2ce6f7[_0x3fb2ed(0x157)][_0x3fb2ed(0x913)]?_0x2ce6f7[_0x3fb2ed(0x157)]['feet']['map'](function(_0xf10eca){var _0x34e1b8=_0x3fb2ed;if(_0x25545f['GKaub'](_0x25545f[_0x34e1b8(0xb9a)],_0x34e1b8(0x44f)))_0x3fdc53['lg'][_0x34e1b8(0xe00)+_0x34e1b8(0x7d1)+'t']=_0x287cd9['ICDCg'](_0x287cd9['ICDCg'](_0x287cd9[_0x34e1b8(0x59c)]('esp\x20',_0x5d690b)+'\x20·\x20'+_0x49064e[_0x34e1b8(0x494)](_0x27aed7[_0x34e1b8(0xd70)])+'m',_0x44ffa7[_0x34e1b8(0x3ca)]?_0x287cd9['aDXIh'](_0x287cd9['aDXIh'](_0x287cd9[_0x34e1b8(0x7b3)],_0x23e2ab[_0x34e1b8(0x494)](_0x407004['fov'])),'°'):''),_0x5d31c9!==null?_0x287cd9[_0x34e1b8(0x57c)]+_0x54c81b:'');else return Math[_0x34e1b8(0x494)](_0x25545f[_0x34e1b8(0x2dc)](_0xf10eca,0x2251+0x1290+-0x347d))/(-0xce3*0x2+-0x293*-0x7+0x825);})['join']('\x20\x20'):'-'],[_0x3fb2ed(0x552),_0x25545f[_0x3fb2ed(0x91c)](_0x25545f['sLHGu']('+',_0x2b8c14),'m'),_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0x157)]&&_0x2ce6f7[_0x3fb2ed(0x157)][_0x3fb2ed(0x553)]?_0x2ce6f7['local']['eye'][_0x3fb2ed(0x8fa)](function(_0x313d02){return Math['round'](_0x313d02*(0x1d2d*-0x1+-0x1099+0x2e2a))/(0x61*0x2b+-0xfd7+-0x10);})['join']('\x20\x20'):'-'],['Walk\x20'+_0x3fb2ed(0x183),_0x3fb2ed(0x17e),_0x19cfc9(_0x2ce6f7,'FPSco'+_0x3fb2ed(0x96e)+_0x3fb2ed(0x36a),-0xbf4+0x7*0x405+-0x101f)],['Sprin'+'t\x20spe'+'ed','0x40',_0x19cfc9(_0x2ce6f7,_0x3fb2ed(0x76b)+_0x3fb2ed(0x96e)+'ler',0xa9*0x33+0x1*-0xdfb+-0x1370)],[_0x25545f['WFUyC'],_0x25545f[_0x3fb2ed(0x21e)],_0x25545f['ddwWo'](_0x19cfc9,_0x2ce6f7,_0x3fb2ed(0x76b)+_0x3fb2ed(0x96e)+_0x3fb2ed(0x36a),-0x13c6+-0x1c*0x7d+-0x2*-0x1147)],['Healt'+'h',_0x25545f['RLUcv'],_0x25545f['CwvYE'](_0x19cfc9,_0x2ce6f7,_0x25545f['OEzWa'],0x2446*0x1+0x71*0xb+0x1*-0x2861)]];for(_0x1d5072=-0x13d+0x1fc1+-0x1e84;_0x1d5072<_0x103ff4[_0x3fb2ed(0xa1b)+'h'];_0x1d5072++){if(_0x3fb2ed(0xdef)!==_0x25545f[_0x3fb2ed(0x7ab)]){var _0x37f641=_0x3c156d[_0x5269cc],_0x141eaa=_0x538a9a(_0x326828,_0x2011bb,_0x37f641[_0x3fb2ed(0x672)]);if(!_0x141eaa)return null;var _0x2cb060=new _0x17808d(_0x141eaa[_0x3fb2ed(0xa39)+'r'],_0x141eaa[_0x3fb2ed(0x635)+_0x3fb2ed(0x83e)],_0x141eaa[_0x3fb2ed(0x603)+'ength']),_0x1cb8c8=_0x2cb060[_0x3fb2ed(0xc4f)+_0x3fb2ed(0x3c7)](_0x37f641['key'],!![]),_0x484b44=_0x2cb060[_0x3fb2ed(0xc4f)+'t32'](_0x37f641['hidde'+'n'],!![]),_0x34109e=_0x2cb060['getUi'+'nt8'](_0x37f641['inite'+'d'])&0x6c*0x8+-0xeca+0xb6b,_0xe5fc63=_0x3ec74c==='obfF'?_0x2cb060[_0x3fb2ed(0xc80)+'oat32'](_0x37f641[_0x3fb2ed(0x1c2)],!![]):_0x287cd9['ARBcl'](_0x281757,_0x287cd9[_0x3fb2ed(0xa68)])?_0x2cb060[_0x3fb2ed(0xc4f)+'t32'](_0x37f641[_0x3fb2ed(0x1c2)],!![]):_0x2cb060[_0x3fb2ed(0x489)+_0x3fb2ed(0x969)](_0x37f641['fake']),_0x4dbb9b=_0x287cd9[_0x3fb2ed(0x9dc)](_0x2cb060['getUi'+_0x3fb2ed(0x969)](_0x37f641[_0x3fb2ed(0x209)+'e']),-0x2306+-0x14+0x231b);return{'keyAtOffset0':_0x1cb8c8,'hidden':_0x484b44,'inited':_0x34109e,'fake':_0xe5fc63,'act':_0x4dbb9b,'hex':_0x5ba06f(_0x141eaa),'alt':_0x5f2b17===_0x3fb2ed(0x631)?_0x287cd9[_0x3fb2ed(0xd22)](_0x484b44,_0x287cd9['DsrDS'](_0xe5fc63,-0x2*-0xeb4+-0x271*0x10+-0x4d4*-0x2)):null};}else{var _0x13bc93=('3|4|5'+_0x3fb2ed(0x9de)+_0x3fb2ed(0x3db)+_0x3fb2ed(0x3a8))['split']('|'),_0x254fb2=-0x32b+-0x2*-0x631+-0x937;while(!![]){switch(_0x13bc93[_0x254fb2++]){case'0':_0x42f17a[_0x3fb2ed(0xbf4)][_0x3fb2ed(0x1b8)+_0x3fb2ed(0x1c6)]=_0x25545f[_0x3fb2ed(0x734)];continue;case'1':_0x42f17a[_0x3fb2ed(0xbf4)]['flex']='1';continue;case'2':_0x42f17a['datas'+'et']['k']=_0x103ff4[_0x1d5072][0x26*-0x4c+0x3b0+0x799];continue;case'3':var _0x404ce9=_0x230ae1(_0x103ff4[_0x1d5072][-0x764*0x1+-0x3e2+-0xd*-0xde]);continue;case'4':var _0x42f17a=_0x567ea8(_0x3fb2ed(0xd70),_0x25545f['cZGMt']);continue;case'5':_0x42f17a[_0x3fb2ed(0xbf4)][_0x3fb2ed(0x53d)+'dth']='0';continue;case'6':_0x42f17a['textC'+_0x3fb2ed(0x7d1)+'t']=String(_0x103ff4[_0x1d5072][-0x1*-0x745+-0x1f7*-0x3+0xd28*-0x1]);continue;case'7':_0x530d81[_0x3fb2ed(0x816)][_0x3fb2ed(0x7a9)+_0x3fb2ed(0x27c)]['sp']=_0x42f17a;continue;case'8':_0x404ce9['appen'+_0x3fb2ed(0x48f)+'d'](_0x42f17a);continue;case'9':_0x530d81[_0x3fb2ed(0x816)]['appen'+'dChil'+'d'](_0x404ce9);continue;}break;}}}_0x4365bc[_0x3fb2ed(0x90b)](_0x530d81);}if(_0x6ba3c5===_0x25545f['yhLhY']){if(_0x25545f[_0x3fb2ed(0xd68)](_0x3fb2ed(0x9ba),_0x25545f['jfnfP'])){if(_0x31b393['top']&&_0x1c7fed[_0x3fb2ed(0x979)]!==_0x1a3e54)_0x40f43d['top'][_0x3fb2ed(0x75c)+'essag'+'e'](_0x5c426a,'*');}else{var _0x1a2319=_0x25545f['ZedID'](_0x3fd396,_0x3fb2ed(0x4a5)+'ostic'+'s',![]),_0x9c9f85=_0x2ce6f7&&_0x2ce6f7[_0x3fb2ed(0xc1b)+_0x3fb2ed(0xb8d)]&&_0x2ce6f7['warni'+_0x3fb2ed(0xb8d)]['lengt'+'h']?_0x2ce6f7['warni'+_0x3fb2ed(0xb8d)][_0x3fb2ed(0x5aa)]('\x0a'):_0x25545f[_0x3fb2ed(0x263)];_0x1a2319['body']['appen'+_0x3fb2ed(0x48f)+'d'](_0x567ea8(_0x25545f[_0x3fb2ed(0x7c1)],_0x25545f['doAid'],_0x9c9f85)),_0x4365bc[_0x3fb2ed(0x90b)](_0x1a2319);var _0x4c15ff=_0x3fd396('Repor'+'t',![]),_0x2b50f4=_0x25545f['sWuaP'](_0x567ea8,_0x3fb2ed(0xcbe)+'n',_0x3fb2ed(0xb4e)+'n',_0x25545f[_0x3fb2ed(0xd5c)]);_0x2b50f4[_0x3fb2ed(0x62a)]='butto'+'n',_0x2b50f4['oncli'+'ck']=function(){var _0x1d71b1=_0x3fb2ed,_0x591315={'BflRj':_0x287cd9['bMYUl'],'CjTZY':function(_0x4e2bf6,_0x5662b6){return _0x4e2bf6<_0x5662b6;}};try{var _0x11ef00=_0x3912f5+'\x0a'+JSON[_0x1d71b1(0x6fb)+'gify'](_0x2ce6f7,null,-0x99a*-0x1+0x161*-0x10+-0x1*-0xc77)+'\x0a'+_0x32b98b;if(navigator[_0x1d71b1(0x172)+_0x1d71b1(0x5e6)]&&navigator['clipb'+_0x1d71b1(0x5e6)]['write'+_0x1d71b1(0x999)])navigator[_0x1d71b1(0x172)+_0x1d71b1(0x5e6)]['write'+'Text'](_0x11ef00)['then'](function(){var _0x471330=_0x1d71b1;_0x2b50f4['textC'+'onten'+'t']=_0x471330(0x7e3)+'d';});else _0x2b50f4[_0x1d71b1(0xe00)+_0x1d71b1(0x7d1)+'t']='Clipb'+_0x1d71b1(0xde1)+'block'+_0x1d71b1(0xbaf)+_0x1d71b1(0x4fa)+_0x1d71b1(0x19e)+_0x1d71b1(0x826)+_0x1d71b1(0x4f3)+'ad';}catch(_0x289343){if(_0x287cd9['BLAca'](_0x1d71b1(0x2d7),_0x1d71b1(0x2d7)))_0x2b50f4[_0x1d71b1(0xe00)+'onten'+'t']='Copy\x20'+_0x1d71b1(0x92b)+'d';else{var _0x57348b=_0x243778['query'+'Selec'+_0x1d71b1(0x572)+'l'](_0x591315[_0x1d71b1(0x92e)]);for(var _0x136b57=-0x76b*0x2+0x30a+0xbcc;_0x591315[_0x1d71b1(0x416)](_0x136b57,_0x57348b['lengt'+'h']);_0x136b57++){try{if(_0x57348b[_0x136b57][_0x1d71b1(0xb22)+'ntWin'+_0x1d71b1(0xbf9)])_0x57348b[_0x136b57][_0x1d71b1(0xb22)+_0x1d71b1(0x83f)+_0x1d71b1(0xbf9)]['postM'+_0x1d71b1(0x81f)+'e'](_0x1139af,'*');}catch(_0x3e590e){}}}}},_0x4c15ff[_0x3fb2ed(0x816)][_0x3fb2ed(0xcad)+_0x3fb2ed(0x48f)+'d'](_0x567ea8(_0x3fb2ed(0x166),_0x25545f[_0x3fb2ed(0x20f)],_0x25545f['SrxEI'])),_0x4c15ff['body']['appen'+_0x3fb2ed(0x48f)+'d'](_0x2b50f4),_0x4365bc['push'](_0x4c15ff);}}return _0x4365bc;}function _0x277b46(){if(_0x3314c7['open'])_0x27a635(!![]);}function _0x50e1e7(){var _0x26241d=_0x419cc1;try{var _0x3d9e45=localStorage[_0x26241d(0x611)+'em'](_0x2ff245);if(!_0x3d9e45)return;var _0x34cd1d=JSON['parse'](_0x3d9e45);if(_0x34cd1d&&_0x25545f[_0x26241d(0x737)](typeof _0x34cd1d['x'],_0x25545f[_0x26241d(0x388)])&&typeof _0x34cd1d['y']===_0x25545f[_0x26241d(0x388)])_0x3314c7['pos']=_0x34cd1d;}catch(_0x14fce6){}}function _0x44424d(){var _0x5a14f4=_0x419cc1,_0xaef225={'hjxUx':_0x25545f[_0x5a14f4(0x874)],'DClaA':'ESP\x20m'+'ap'};if(_0x5a14f4(0x53b)==='KEGWS'){var _0x21f0f0=_0x5eb76a&&_0x5ede7a['esp'];if(!_0x21f0f0)return;if(_0x5a65ef[_0x5a14f4(0x3ca)]&&!_0x370356())_0x136762['boxes']=![];var _0x116377=!_0x3adfa8['on']?_0xaef225[_0x5a14f4(0x9a3)]:_0x36bcae['boxes']?'ESP\x20b'+_0x5a14f4(0x645):_0xaef225[_0x5a14f4(0x175)];if(_0x116377!==_0x21f0f0['textC'+'onten'+'t'])_0x21f0f0[_0x5a14f4(0xe00)+'onten'+'t']=_0x116377;_0x21f0f0[_0x5a14f4(0xbf4)][_0x5a14f4(0xc44)+_0x5a14f4(0x494)]=_0x49341a['on']?_0x1788e2:'trans'+'paren'+'t',_0x21f0f0[_0x5a14f4(0xbf4)][_0x5a14f4(0x8d2)]=_0x1e168d['on']?_0x5a14f4(0x8a6)+'1b':_0x5a14f4(0xad5)+'f5';}else try{localStorage[_0x5a14f4(0xddb)+'em'](_0x2ff245,JSON['strin'+_0x5a14f4(0x501)](_0x3314c7[_0x5a14f4(0x8a7)]));}catch(_0x5b3f1f){}}function _0x10e874(){var _0x1ec080=_0x419cc1,_0x2ac5c8=_0x3314c7['root'];if(!_0x2ac5c8||!_0x2ac5c8['style'])return;_0x3314c7[_0x1ec080(0x8a7)]?(_0x2ac5c8['style'][_0x1ec080(0x9df)]=_0x25545f[_0x1ec080(0xac0)](_0x3314c7['pos']['x'],'px'),_0x2ac5c8[_0x1ec080(0xbf4)]['top']=_0x25545f[_0x1ec080(0x454)](_0x3314c7['pos']['y'],'px'),_0x2ac5c8[_0x1ec080(0xbf4)]['right']=_0x25545f[_0x1ec080(0x98c)],_0x2ac5c8['style'][_0x1ec080(0xb72)+'m']=_0x1ec080(0x195)):_0x25545f[_0x1ec080(0xb9e)](_0x1ec080(0xaa0),_0x25545f['EeROx'])?_0x4a8aa7[_0x1ec080(0x7bf)+'ntDef'+'ault']():(_0x2ac5c8[_0x1ec080(0xbf4)][_0x1ec080(0x9df)]=_0x25545f[_0x1ec080(0x98c)],_0x2ac5c8['style'][_0x1ec080(0x979)]=_0x25545f[_0x1ec080(0x98c)],_0x2ac5c8[_0x1ec080(0xbf4)]['right']=_0x1ec080(0xaef),_0x2ac5c8[_0x1ec080(0xbf4)]['botto'+'m']='24px');}function _0x15f937(_0x30479f,_0x113d10){var _0x29a9f5=_0x419cc1,_0x7bf39b={'eVPYI':function(_0x447283,_0x5a5424){return _0x447283-_0x5a5424;},'ogOtr':function(_0x8850f1,_0x70a421){return _0x25545f['YpjEl'](_0x8850f1,_0x70a421);},'bJXeL':'OaCkn','pTzxV':function(_0x11c649,_0x591597){var _0x287d22=_0x29e5;return _0x25545f[_0x287d22(0x975)](_0x11c649,_0x591597);},'HxCGl':function(_0x3b38a7,_0x8bff72){return _0x3b38a7-_0x8bff72;}};try{if(_0x29a9f5(0x369)!==_0x29a9f5(0xcbb)){var _0x286908=![],_0x53480e=-0x3*-0x212+0xec7+-0x14fd,_0x304ede=0x15ae+-0x98f*-0x1+0xb*-0x2d7;_0x113d10[_0x29a9f5(0xbf4)][_0x29a9f5(0xcd8)+'r']=_0x25545f[_0x29a9f5(0xb41)],_0x113d10['style'][_0x29a9f5(0x822)+_0x29a9f5(0x2dd)+'n']=_0x25545f[_0x29a9f5(0x9f7)];var _0x51e743=function(_0x1582be){var _0x2f1ece=_0x29a9f5;if('nNHEs'!==_0x25545f['lLRRN']){var _0x57fcfd=(_0x2f1ece(0xc91)+_0x2f1ece(0xbc7)+_0x2f1ece(0x1ad))[_0x2f1ece(0xb76)]('|'),_0x16e451=-0x170*0x15+0x969+0x14c7*0x1;while(!![]){switch(_0x57fcfd[_0x16e451++]){case'0':_0x304ede=(_0x1582be['clien'+'tY']||0x4*0x68e+-0x18b0+-0x188)-_0x4586a5['top'];continue;case'1':_0x113d10[_0x2f1ece(0xbf4)]['curso'+'r']=_0x2f1ece(0x81d)+'ing';continue;case'2':try{_0x1582be[_0x2f1ece(0x7bf)+_0x2f1ece(0xbe0)+_0x2f1ece(0x5c0)]();}catch(_0x7d51c4){}continue;case'3':_0x53480e=_0x25545f[_0x2f1ece(0xb06)](_0x1582be[_0x2f1ece(0x21a)+'tX']||-0x2050+0x3cb*-0x1+0x2c7*0xd,_0x4586a5[_0x2f1ece(0x9df)]);continue;case'4':(!_0x30479f[_0x2f1ece(0xbf4)][_0x2f1ece(0x9df)]||_0x30479f['style'][_0x2f1ece(0x9df)]==='auto')&&(_0x4586a5[_0x2f1ece(0x9df)]=_0x25545f['RywgZ']((window['inner'+_0x2f1ece(0x945)]||0xcf2+0x5*0x38b+-0x1*0x1ea9)-(_0x30479f[_0x2f1ece(0xdeb)+'tWidt'+'h']||0x1cce+0xc3*0x25+-0x3691),0x24e7+0x9*-0x305+0x336*-0x3));continue;case'5':_0x286908=!![];continue;case'6':var _0x4586a5={'left':parseFloat(_0x30479f[_0x2f1ece(0xbf4)][_0x2f1ece(0x9df)])||0x1*0x20c5+0xd59+0x1*-0x2e1e,'top':_0x25545f[_0x2f1ece(0x378)](parseFloat,_0x30479f['style'][_0x2f1ece(0x979)])||-0x52f*0x2+-0xaf*0x2f+0x2a7f};continue;case'7':(!_0x30479f[_0x2f1ece(0xbf4)][_0x2f1ece(0x979)]||_0x25545f[_0x2f1ece(0x194)](_0x30479f[_0x2f1ece(0xbf4)][_0x2f1ece(0x979)],'auto'))&&(_0x4586a5['top']=(window[_0x2f1ece(0x260)+'Heigh'+'t']||0xb1b*0x2+0x55*-0x1e+-0xc40)-(_0x30479f['offse'+_0x2f1ece(0xcdf)+'ht']||0x75c+0xf11+-0x31*0x6d)-(-0xb7*0x1b+0x18a+0x11db));continue;}break;}}else{_0x30e1e5[_0x224a0e]='0x'+_0x825f2[_0x19c6a3]['ptr']['toStr'+_0x2f1ece(0x2fe)](0x1*-0x1373+-0x17*-0x1a3+-0x1222);if(_0x61f78d[_0x225de1][_0x2f1ece(0xadd)+'ced'])_0xa6cd0e['push'](_0x213047);}},_0x5f5bf8=function(_0x1fe0b5){var _0x4ecbe8=_0x29a9f5;if(!_0x286908)return;var _0x12b0da=_0x30479f[_0x4ecbe8(0xdeb)+'tWidt'+'h']||0x1*0x1996+-0xdb+-0x1*0x164f,_0x143a8a=_0x30479f[_0x4ecbe8(0xdeb)+_0x4ecbe8(0xcdf)+'ht']||0x5b*-0x62+-0x13*-0x15b+0xaa5,_0x434aea=(_0x1fe0b5[_0x4ecbe8(0x21a)+'tX']||0x2321+-0x2448+0x127)-_0x53480e,_0x77999=_0x7bf39b['eVPYI'](_0x1fe0b5['clien'+'tY']||-0xe4e+0x145*0x10+-0x602,_0x304ede);_0x434aea=Math[_0x4ecbe8(0x932)](-0x574*-0x2+-0x1906+0xe26,Math[_0x4ecbe8(0xc96)](_0x7bf39b[_0x4ecbe8(0xdcb)]((window['inner'+'Width']||0x9*0x2f1+-0x184f+-0x22a)-_0x12b0da,-0x2ec*0xb+0x191b+-0x1*-0x711),_0x434aea)),_0x77999=Math['max'](0xa*-0x12f+-0x1f59+-0x1*-0x2b37,Math[_0x4ecbe8(0xc96)]((window['inner'+_0x4ecbe8(0xa0f)+'t']||0x2518*-0x1+0x7*0xf3+-0x1*-0x1e73)-_0x143a8a-(-0x52+-0x1*0x107+0x161),_0x77999)),_0x30479f['style']['left']=_0x434aea+'px',_0x30479f[_0x4ecbe8(0xbf4)][_0x4ecbe8(0x979)]=_0x77999+'px',_0x30479f[_0x4ecbe8(0xbf4)]['right']='auto',_0x30479f[_0x4ecbe8(0xbf4)][_0x4ecbe8(0xb72)+'m']=_0x4ecbe8(0x195),_0x3314c7[_0x4ecbe8(0x8a7)]={'x':_0x434aea,'y':_0x77999};},_0x5042e5=function(){var _0x4269b1=_0x29a9f5;if(_0x4269b1(0xbe6)!==_0x7bf39b['bJXeL']){_0x4ab107[_0x4269b1(0x90b)]('warni'+_0x4269b1(0xb8d));for(var _0x3add91=0xb*-0x1e6+-0xaeb+0x1fcd;_0x7bf39b[_0x4269b1(0x1ef)](_0x3add91,_0x15341b[_0x4269b1(0xc1b)+'ngs']['lengt'+'h']);_0x3add91++)_0x395f2c[_0x4269b1(0x90b)](_0x4269b1(0xd05)+_0x2d6441[_0x4269b1(0xc1b)+_0x4269b1(0xb8d)][_0x3add91]);}else{if(!_0x286908)return;_0x286908=![],_0x113d10['style']['curso'+'r']=_0x4269b1(0xd18),_0x44424d();}};_0x113d10[_0x29a9f5(0x204)+'entLi'+_0x29a9f5(0x417)+'r'](_0x25545f[_0x29a9f5(0xd99)],_0x51e743),window['addEv'+_0x29a9f5(0xb8e)+_0x29a9f5(0x417)+'r']('mouse'+'move',_0x5f5bf8),window['addEv'+_0x29a9f5(0xb8e)+'stene'+'r']('mouse'+'up',_0x5042e5),_0x113d10['addEv'+'entLi'+_0x29a9f5(0x417)+'r'](_0x29a9f5(0x822)+'start',_0x51e743,{'passive':![]}),window['addEv'+'entLi'+_0x29a9f5(0x417)+'r'](_0x25545f['MwyaX'],_0x5f5bf8,{'passive':![]}),window[_0x29a9f5(0x204)+_0x29a9f5(0xb8e)+_0x29a9f5(0x417)+'r'](_0x29a9f5(0x822)+'end',_0x5042e5);}else _0x946e[_0x29a9f5(0x9df)]=_0x7bf39b[_0x29a9f5(0x9d1)](_0x7bf39b[_0x29a9f5(0xabd)](_0x56a06f['inner'+_0x29a9f5(0x945)]||-0x1feb+0x17+0x1fd4,_0x537b87[_0x29a9f5(0xdeb)+'tWidt'+'h']||0x164e+-0x290+0x2e3*-0x6),-0x1fff+0xbd+0x1f5a*0x1);}catch(_0x5858fa){}}function _0x479656(){var _0x7a6181=_0x419cc1,_0x54f682={'tJaev':function(_0x776f0,_0x2561ff){return _0x25545f['lUfui'](_0x776f0,_0x2561ff);},'laGOI':_0x25545f['xPNJr']};if(_0x3314c7['built'])return _0x3314c7[_0x7a6181(0x914)];try{if(!document[_0x7a6181(0x816)]||!document[_0x7a6181(0x816)][_0x7a6181(0xcad)+_0x7a6181(0x48f)+'d'])return null;if(!document['getEl'+_0x7a6181(0x4d5)+'ById'](_0x25545f[_0x7a6181(0xb6d)])){if(_0x25545f[_0x7a6181(0xd11)](_0x7a6181(0x9e5),_0x25545f[_0x7a6181(0x792)])){var _0x9fe350=document[_0x7a6181(0x8e6)+_0x7a6181(0x2c7)+'ent'](_0x25545f['jOHWQ']);_0x9fe350['id']=_0x7a6181(0xa83)+_0x7a6181(0xd6d)+_0x7a6181(0x67b),_0x9fe350[_0x7a6181(0xe00)+'onten'+'t']=_0x39976a,(document['head']||document['docum'+_0x7a6181(0xa19)+'ement'])[_0x7a6181(0xcad)+'dChil'+'d'](_0x9fe350);}else _0x2277cc(_0x44f41f['on'],_0x374f2d);}var _0x54b007=_0x25545f[_0x7a6181(0xc93)](_0x567ea8,_0x25545f['FpfVl'],_0x7a6181(0x56d)+_0x7a6181(0x6e1));_0x54b007['id']=_0x7a6181(0xa83)+_0x7a6181(0xd6d)+_0x7a6181(0x8cf)+'t';var _0x4eccb9=_0x567ea8(_0x7a6181(0x166),_0x7a6181(0xa02)+'de'),_0x2915fc=_0x567ea8(_0x7a6181(0x166),_0x25545f[_0x7a6181(0x2ed)],_0x3b713e);_0x4eccb9[_0x7a6181(0xcad)+_0x7a6181(0x48f)+'d'](_0x2915fc);var _0x2705ad=_0x25545f['Vklbe'](_0x567ea8,_0x7a6181(0x166),_0x7a6181(0x483)+'in'),_0x10f5c3=_0x25545f[_0x7a6181(0x98a)](_0x567ea8,_0x7a6181(0x166),_0x25545f[_0x7a6181(0xdb1)]),_0x156201=_0x567ea8(_0x25545f[_0x7a6181(0x7c1)],_0x25545f[_0x7a6181(0x458)]),_0x14b9ba=_0x567ea8(_0x25545f['FpfVl'],_0x25545f['uOUtv'],'Sakur'+_0x7a6181(0x70a)+_0x7a6181(0x16a)+'z'),_0x25790f=_0x25545f[_0x7a6181(0xa0e)](_0x567ea8,_0x25545f[_0x7a6181(0x7c1)],_0x25545f[_0x7a6181(0xb02)],'start'+'ing…');_0x156201[_0x7a6181(0xcad)+'dChil'+'d'](_0x14b9ba),_0x156201[_0x7a6181(0xcad)+_0x7a6181(0x48f)+'d'](_0x25790f);var _0x30f5fa=_0x567ea8(_0x25545f['FpfVl'],'mn-cl'+'ose','<svg\x20'+'viewB'+'ox=\x220'+_0x7a6181(0x4e2)+'\x2024\x22>'+_0x7a6181(0x413)+'\x20d=\x22M'+'6\x206l1'+_0x7a6181(0x78e)+_0x7a6181(0x533)+_0x7a6181(0x703)+_0x7a6181(0xa55)+'vg>');_0x30f5fa['oncli'+'ck']=function(){_0x54f682['tJaev'](_0x27a635,![]);},_0x10f5c3['appen'+'dChil'+'d'](_0x156201),_0x10f5c3[_0x7a6181(0xcad)+_0x7a6181(0x48f)+'d'](_0x30f5fa);var _0x9fc24e=_0x25545f[_0x7a6181(0x1be)](_0x567ea8,'div',_0x25545f['pskWQ']);_0x2705ad[_0x7a6181(0xcad)+_0x7a6181(0x48f)+'d'](_0x10f5c3),_0x2705ad[_0x7a6181(0xcad)+_0x7a6181(0x48f)+'d'](_0x9fc24e),_0x54b007[_0x7a6181(0xcad)+'dChil'+'d'](_0x4eccb9),_0x54b007['appen'+_0x7a6181(0x48f)+'d'](_0x2705ad),document[_0x7a6181(0x816)]['appen'+_0x7a6181(0x48f)+'d'](_0x54b007),_0x3314c7[_0x7a6181(0x914)]=_0x54b007,_0x3314c7['cols']=_0x9fc24e,_0x3314c7[_0x7a6181(0x169)]=_0x14b9ba,_0x3314c7['sub']=_0x25790f,_0x50e1e7(),_0x10e874(),_0x25545f['GATmA'](_0x15f937,_0x54b007,_0x10f5c3);var _0x4e8569={};for(var _0x14b39d=-0xa58+-0x7a*0x10+0x11f8;_0x14b39d<_0x34d419['lengt'+'h'];_0x14b39d++){var _0x314023=_0x34d419[_0x14b39d],_0x230a80=_0x567ea8(_0x25545f['nsUWw'],_0x7a6181(0xd75)+'b',_0x25545f['qaEPU']+_0x314023[_0x7a6181(0xd8d)]+(_0x7a6181(0xc51)+_0x7a6181(0x408)));_0x230a80['type']=_0x25545f['nsUWw'],_0x230a80[_0x7a6181(0xb1c)]=_0x314023[_0x7a6181(0xd8d)],function(_0x327d70){var _0x462b6b=_0x7a6181;_0x462b6b(0xc42)!==_0x25545f['cVnfN']?_0x230a80['oncli'+'ck']=function(){_0x120e05(_0x327d70);}:_0x250e95['getIt'+'em'](_0x3c267a)!==null&&(_0x4bd830[_0x462b6b(0xab8)+_0x462b6b(0x6a2)](_0x3b6ed8),_0x1952d2=!![]);}(_0x314023['id']),_0x4e8569[_0x314023['id']]=_0x230a80,_0x4eccb9[_0x7a6181(0xcad)+'dChil'+'d'](_0x230a80);}_0x3314c7[_0x7a6181(0xcbe)+'ns']=_0x4e8569;var _0x23878c=_0x567ea8(_0x7a6181(0x166),null,_0xe4bf89);return _0x23878c['id']=_0x7a6181(0xa83)+'a-pet'+'al',_0x23878c[_0x7a6181(0xb1c)]=_0x25545f[_0x7a6181(0x309)],_0x23878c['onmou'+_0x7a6181(0xdd9)+'er']=function(){_0x23878c['style']['opaci'+'ty']='1';},_0x23878c[_0x7a6181(0x190)+'selea'+'ve']=function(){var _0x1267e0=_0x7a6181;_0x23878c['style'][_0x1267e0(0x285)+'ty']=_0x3314c7['open']?'1':'.5';},_0x23878c[_0x7a6181(0x523)+'ck']=function(_0x5a0fce){var _0x2e123c=_0x7a6181,_0x717281={'YsXxQ':function(_0x5edca8,_0x508e5c){return _0x5edca8>_0x508e5c;},'SjwjP':function(_0x27a9bb,_0x588323){return _0x27a9bb+_0x588323;},'trZMA':function(_0x12a6a3,_0x2baf60){var _0x1a2c42=_0x29e5;return _0x25545f[_0x1a2c42(0x229)](_0x12a6a3,_0x2baf60);}};if(_0x25545f['sHYAV']==='PJQOu'){if(_0x5a0fce&&_0x5a0fce[_0x2e123c(0x439)+_0x2e123c(0xdb7)+_0x2e123c(0x8a1)])_0x5a0fce[_0x2e123c(0x439)+_0x2e123c(0xdb7)+'ation']();_0x25545f[_0x2e123c(0xd7b)](_0x27a635,!_0x3314c7['open']);}else{var _0x5854a7=('6|2|1'+'|5|4|'+_0x2e123c(0x662))[_0x2e123c(0xb76)]('|'),_0x4c9ab7=0x1*-0x1ec+-0x1*-0x151+0x1*0x9b;while(!![]){switch(_0x5854a7[_0x4c9ab7++]){case'0':return _0x2df711;case'1':if(_0x17b041<0x45f+-0x125*0x1f+0x1f1c||_0x717281[_0x2e123c(0xc34)](_0x912af7+_0x133f25*(0x319*-0x4+-0x57a*-0x2+-0x174*-0x1),_0xcf55f6[_0x2e123c(0x603)+'ength']))return null;continue;case'2':if(!_0xcf55f6)return null;continue;case'3':_0x421f25['ok']+=_0x7cecb4;continue;case'4':for(var _0x4563c8=-0x2471+-0x10f4+0x3565;_0x4563c8<_0x426e33;_0x4563c8++)_0x2df711[_0x2e123c(0x90b)](_0xcf55f6[_0x2e123c(0xc80)+_0x2e123c(0x397)](_0x717281['SjwjP'](_0x717281['SjwjP'](_0x1c1773,_0x1fdd25),_0x717281['trZMA'](_0x4563c8,0x14f0+-0x955+-0xb97)),!![]));continue;case'5':var _0x2df711=[];continue;case'6':var _0xcf55f6=_0x25e846();continue;}break;}}},document['body'][_0x7a6181(0xcad)+_0x7a6181(0x48f)+'d'](_0x23878c),_0x3314c7[_0x7a6181(0x293)]=_0x23878c,_0x25545f['ZzWxM'](setInterval,function(){var _0x2602fc=_0x7a6181;try{if(!_0x3314c7[_0x2602fc(0x293)])return;var _0x21a21b=_0x104fe0();_0x3314c7['petal']['style'][_0x2602fc(0x285)+'ty']=_0x3314c7[_0x2602fc(0x4d2)]?'1':_0x21a21b?'.8':_0x54f682['laGOI'],_0x3314c7['petal']['title']=_0x21a21b?_0x2602fc(0x8ed)+'a\x20Ski'+_0x2602fc(0x16a)+_0x2602fc(0xa9a)+_0x2602fc(0xb4b):_0x2602fc(0x8ed)+'a\x20Ski'+_0x2602fc(0x16a)+'z\x20-\x20w'+_0x2602fc(0x63b)+_0x2602fc(0xc84)+_0x2602fc(0xdbe)+_0x2602fc(0xc5c)+_0x2602fc(0xc02)+'rt)';}catch(_0x45db95){}},-0x1c76+0x7*0xef+-0x18a9*-0x1),_0x3314c7['built']=!![],_0x120e05(_0x3314c7[_0x7a6181(0x3d1)]),_0x54b007;}catch(_0x508d04){return console['warn']('%c[sa'+_0x7a6181(0x37d)+'\x20menu'+_0x7a6181(0x97d)+_0x7a6181(0x44c)+'le',_0x25545f[_0x7a6181(0x99d)](_0x25545f['uZTOc'],_0xe38ae3),_0x508d04),null;}}function _0x120e05(_0x4da5a0){var _0x592a36=_0x419cc1;_0x3314c7['cat']=_0x4da5a0,_0x3314c7['syncs']=[];if(!_0x3314c7['cols'])return;var _0x37d6e0=null;for(var _0x4daa61=0x5*-0x602+-0x553*-0x5+0x36b;_0x25545f['gQjlx'](_0x4daa61,_0x34d419['lengt'+'h']);_0x4daa61++)if(_0x34d419[_0x4daa61]['id']===_0x4da5a0)_0x37d6e0=_0x34d419[_0x4daa61];_0x3314c7[_0x592a36(0x169)]['textC'+'onten'+'t']=_0x592a36(0x8ed)+'a\x20Ski'+'llWar'+'z\x20—\x20'+(_0x37d6e0&&_0x37d6e0[_0x592a36(0xd8d)]||'?');for(var _0x5e66f6 in _0x3314c7['butto'+'ns']){if(_0x3314c7['butto'+'ns'][_0x5e66f6]['class'+_0x592a36(0xa06)])_0x3314c7['butto'+'ns'][_0x5e66f6][_0x592a36(0x9ab)+_0x592a36(0xc2c)]=_0x25545f[_0x592a36(0x315)](_0x25545f[_0x592a36(0x808)],_0x5e66f6===_0x4da5a0?_0x25545f[_0x592a36(0xaa5)]:'');}var _0xc52456=[];try{_0xc52456=_0xc04405(_0x4da5a0);}catch(_0x45685c){if(_0x25545f['eCukW'](_0x25545f['cbAFe'],_0x592a36(0x7ec)))return _0x3bcd6a['type']===_0x487fbd;else _0xc52456=[];}while(_0x3314c7[_0x592a36(0xd3f)]['first'+_0x592a36(0x401)])_0x3314c7[_0x592a36(0xd3f)][_0x592a36(0xab8)+'eChil'+'d'](_0x3314c7[_0x592a36(0xd3f)]['first'+'Child']);for(var _0x17268d=-0x1*-0x449+-0x77a*-0x1+-0xbc3*0x1;_0x25545f[_0x592a36(0x2e7)](_0x17268d,_0xc52456['lengt'+'h']);_0x17268d++)_0x3314c7[_0x592a36(0xd3f)]['appen'+_0x592a36(0x48f)+'d'](_0xc52456[_0x17268d]);}function _0x27a635(_0x34d1fd){var _0x5a4b60=_0x419cc1;_0x3314c7[_0x5a4b60(0x4d2)]=!!_0x34d1fd;var _0x2b5389=_0x25545f[_0x5a4b60(0x852)](_0x479656);if(!_0x2b5389)return;_0x2b5389[_0x5a4b60(0x9ab)+_0x5a4b60(0xc2c)]=_0x25545f['NwfGt']+(_0x3314c7[_0x5a4b60(0x4d2)]?_0x5a4b60(0xb3c)+'n':'');if(_0x3314c7[_0x5a4b60(0x293)])_0x3314c7[_0x5a4b60(0x293)]['style'][_0x5a4b60(0x285)+'ty']=_0x3314c7[_0x5a4b60(0x4d2)]?'1':'.5';if(_0x3314c7[_0x5a4b60(0x4d2)]){_0x120e05(_0x3314c7[_0x5a4b60(0x3d1)]);try{var _0x1819e9=window[_0x5a4b60(0x260)+'Heigh'+'t']||0x29*-0x9a+0x1*-0xbf0+-0x6*-0x69f;if(_0x1819e9<-0x1372+-0x2320+0x38fe)_0x25545f['Tfnzp'](_0x45640f,![]);}catch(_0x30d59f){}}}function _0x3d665a(){var _0x35baf3=_0x419cc1,_0x367a9d={'GJCzS':function(_0x3ca641,_0x1dbb8f){return _0x25545f['FhQYU'](_0x3ca641,_0x1dbb8f);}};if(!_0x3314c7[_0x35baf3(0x4d2)]||!_0x3314c7[_0x35baf3(0x146)])return;try{if(_0x35baf3(0x1c9)!==_0x35baf3(0x1c9)){var _0xc75c6e=_0x5278e3[_0x21927a];if(!_0xc75c6e)return null;var _0x5a4ce9=_0x46bfe6(_0x25545f[_0x35baf3(0xabb)](_0x1b2984+_0x734b57,_0xc75c6e['key']),'u8'),_0x102996=_0x4e671a(_0x41c627+_0x419afb+_0xc75c6e[_0x35baf3(0x987)+'n'],_0x35baf3(0xbd8)),_0x3702cb=_0xe086d8(_0x25545f[_0x35baf3(0x841)](_0x25545f[_0x35baf3(0x47c)](_0x269b86,_0x2f0db7),_0xc75c6e[_0x35baf3(0x1b7)+'d']),'u8'),_0x2f29b4=_0x25545f['fOlVG'](_0x2cd137,_0x25545f['JAtql'](_0xb0a4cb,_0x4001f5)+_0xc75c6e[_0x35baf3(0x1c2)],_0x3d8848===_0x25545f[_0x35baf3(0xbe9)]?'f32':_0x39cc9f===_0x35baf3(0x631)?_0x35baf3(0xbd8):'u8'),_0x2d43ab=_0x25545f['XVfZX'](_0x479dda,_0x25545f[_0x35baf3(0x718)](_0x5badfb+_0x4c214a,_0xc75c6e[_0x35baf3(0x209)+'e']),'u8');if(_0x5a4ce9===_0x44cb5d||_0x102996===_0x1edb8f||_0x2f29b4===_0x45b815||_0x25545f['cBWXk'](_0x2d43ab,_0x4673ad))return null;_0x5a4ce9&=-0x7*0x2ef+0xbb4+-0x25*-0x44,_0x102996|=0x3*0xab9+-0x1e6b+-0x1c0,_0x3702cb=(_0x3702cb||-0x133f*-0x1+-0x33*0xb9+0x119c)&0x1ba6+0x166*0x10+-0x1*0x3205,_0x2d43ab&=0x1fe1+0x18f9+-0x38d9;var _0x46764b;if(_0x2b69d5===_0x25545f[_0x35baf3(0xbe9)])_0x46764b=_0x25545f['eUyER'](_0x159dda,_0x102996^_0x5a4ce9);else{if(_0x25545f['YzwZu'](_0x66d3cc,_0x25545f[_0x35baf3(0x47a)]))_0x46764b=_0x102996^_0x5a4ce9|0xd13*0x1+0x36+-0xd49;else _0x46764b=_0x25545f[_0x35baf3(0xa57)](_0x25545f['VHDKL'](_0x25545f[_0x35baf3(0x5f3)](_0x102996,_0x5a4ce9),-0xd1e+0x24a3*-0x1+-0xe8*-0x38),0x2*-0x6e7+-0x1e43*-0x1+0x17f*-0xb)?-0x2229+-0x1*-0xa21+0x1809:-0x1*-0x1311+0x869+0xdbd*-0x2;}return{'real':_0x46764b,'fake':_0x2f29b4,'act':_0x2d43ab,'init':_0x3702cb,'key':_0x5a4ce9,'hidden':_0x102996};}else{for(var _0x3d34fa=0x121d*0x1+-0x1213+-0xa;_0x3d34fa<_0x3314c7['syncs'][_0x35baf3(0xa1b)+'h'];_0x3d34fa++){try{_0x3314c7['syncs'][_0x3d34fa]();}catch(_0x1e2ffe){}}var _0x1d67e8=_0x3cf7e5;_0x3314c7['sub'][_0x35baf3(0xe00)+_0x35baf3(0x7d1)+'t']=_0x1d67e8?_0x25545f[_0x35baf3(0x444)](_0x25545f[_0x35baf3(0x7d5)](_0x25545f[_0x35baf3(0xb58)](_0x25545f['BwnPy']('v'+_0x1d67e8[_0x35baf3(0x7cc)+'on'],_0x25545f[_0x35baf3(0x7d2)])+_0x1d67e8['hooks'+'Appli'+'ed']+'/',_0x1d67e8['hooks'+'Total'])+('\x20\x20·\x20\x20'+_0x35baf3(0x6cf)+_0x35baf3(0x778))+(_0x1d67e8['esp']&&_0x1d67e8[_0x35baf3(0x363)][_0x35baf3(0x6cf)+_0x35baf3(0x4b2)+'t']||0x1384+0x5*0x26c+-0x10*0x1fa),_0x25545f[_0x35baf3(0x5ce)]),_0x1d67e8['wasmM'+_0x35baf3(0x836)]&&_0x1d67e8['wasmM'+'emory'][_0x35baf3(0x4d9)+_0x35baf3(0x318)]?Math['round'](_0x25545f['wFDOz'](_0x1d67e8[_0x35baf3(0x840)+_0x35baf3(0x836)][_0x35baf3(0x4d6)],-0xb1688+-0xb71*-0x89+0x14f70f))+'MB':'-'):_0x25545f['xnsts'];var _0x5d6810=_0x3314c7['cols']['query'+_0x35baf3(0x6ff)+_0x35baf3(0x572)+'l']?_0x3314c7[_0x35baf3(0xd3f)][_0x35baf3(0x1db)+'Selec'+_0x35baf3(0x572)+'l'](_0x25545f['GeWCz']):[];for(var _0x4aada0=-0x1*-0x1c87+0x265*0xb+0x124a*-0x3;_0x25545f[_0x35baf3(0x539)](_0x4aada0,_0x5d6810[_0x35baf3(0xa1b)+'h']);_0x4aada0++){var _0x3bbae9=_0x5d6810[_0x4aada0][_0x35baf3(0x339)+'et']['k'],_0x3deb01='';if(_0x25545f[_0x35baf3(0xdc8)](_0x3bbae9,_0x25545f['kcGac']))_0x3deb01=_0x1d67e8?_0x1d67e8['versi'+'on']:'-';else{if(_0x25545f[_0x35baf3(0x7e6)](_0x3bbae9,'appli'+'ed\x20/\x20'+_0x35baf3(0x692)+_0x35baf3(0x43b)))_0x3deb01=_0x1d67e8?_0x25545f[_0x35baf3(0x1d7)](_0x1d67e8[_0x35baf3(0x414)+_0x35baf3(0x1e3)+'ed'],'\x20/\x20')+_0x1d67e8['hooks'+_0x35baf3(0x393)+'tered'+'AtArm']:'-';else{if(_0x3bbae9===_0x35baf3(0x5af)+_0x35baf3(0xd7e)+_0x35baf3(0xbdc)+'e()')_0x3deb01=_0x1d67e8&&_0x1d67e8[_0x35baf3(0x840)+'emory']&&_0x1d67e8[_0x35baf3(0x840)+'emory'][_0x35baf3(0x4d9)+_0x35baf3(0x318)]?_0x25545f['FYntS'](Math[_0x35baf3(0x494)](_0x1d67e8['wasmM'+_0x35baf3(0x836)][_0x35baf3(0x4d6)]/(0x1*-0x194977+-0x7c316+0x310c8d)),_0x35baf3(0x820)+'\x20')+_0x1d67e8[_0x35baf3(0x840)+'emory'][_0x35baf3(0x6e3)]+'ms':'-';else{if(_0x25545f['aYnVw'](_0x3bbae9,'Photo'+'nNetw'+_0x35baf3(0xcd1)+'nc'))_0x3deb01=_0x1d67e8&&_0x1d67e8[_0x35baf3(0x363)]?_0x25545f[_0x35baf3(0x658)](String,_0x1d67e8[_0x35baf3(0x363)]['playe'+_0x35baf3(0x4b2)+'t']):'-';else{if(_0x3bbae9==='every'+'one\x20b'+'ut\x20yo'+'u')_0x3deb01=_0x1d67e8&&_0x1d67e8[_0x35baf3(0x363)]?String(_0x1d67e8['esp'][_0x35baf3(0xd6f)+_0x35baf3(0x4ed)]):'-';else{if(_0x3bbae9===_0x35baf3(0x4c8)+_0x35baf3(0x5d6)+_0x35baf3(0x682)+_0x35baf3(0x796))_0x3deb01=_0x1d67e8&&_0x1d67e8[_0x35baf3(0x363)]&&_0x1d67e8[_0x35baf3(0x363)][_0x35baf3(0xb9c)+'a']?_0x25545f['FWFnQ'](_0x25545f[_0x35baf3(0x6df)](_0x25545f['ZMFdr'](_0x1d67e8['esp'][_0x35baf3(0xb9c)+'a'],'\x20('),_0x1d67e8[_0x35baf3(0x363)][_0x35baf3(0xb9c)+_0x35baf3(0x6c8)]),')'):'-';else{if(_0x3bbae9===_0x35baf3(0x76b)+'ntrol'+'ler+0'+'x2E4')_0x3deb01=_0x1d67e8&&_0x1d67e8['local']&&_0x1d67e8['local']['feet']?_0x1d67e8['local'][_0x35baf3(0x913)][_0x35baf3(0x8fa)](function(_0x386fa1){var _0x3438ab=_0x35baf3;return Math[_0x3438ab(0x494)](_0x386fa1*(0x1*-0x221f+0x223f+0x22*0x2))/(0xf3b+0x1*-0x1de8+0xf11);})['join']('\x20\x20'):'-';else{if(_0x25545f[_0x35baf3(0xb88)](_0x3bbae9,'+0x29'+'8'))_0x3deb01=_0x1d67e8&&_0x1d67e8['local']&&_0x1d67e8[_0x35baf3(0x157)][_0x35baf3(0x553)]?_0x1d67e8[_0x35baf3(0x157)][_0x35baf3(0x553)][_0x35baf3(0x8fa)](function(_0x1806a6){return _0x367a9d['GJCzS'](Math['round'](_0x1806a6*(0xdd*0x29+-0x1*0x1a99+-0x10d*0x8)),-0x1c98+0x46+0x1cb6);})['join']('\x20\x20'):'-';else{if(_0x25545f[_0x35baf3(0x789)](_0x35baf3(0xc12),_0x35baf3(0xc12)))try{if(_0x44d098[_0x2eb27e][_0x35baf3(0xb22)+_0x35baf3(0x83f)+'dow'])_0x33eca[_0x38ff92][_0x35baf3(0xb22)+'ntWin'+_0x35baf3(0xbf9)][_0x35baf3(0x75c)+_0x35baf3(0x81f)+'e'](_0x3200b1,'*');}catch(_0x481922){}else{var _0x166d5e=_0x3bbae9['split']('+');_0x3deb01=_0x19cfc9(_0x1d67e8,_0x25545f['CFqxX'](_0x166d5e[-0xb2*-0x31+-0xec9*0x2+-0x480][_0x35baf3(0x6b7)+'Of'](_0x35baf3(0x78d)+'h'),-0x1*-0x1d3a+-0x259+0x1*-0x1ae1)?_0x25545f[_0x35baf3(0x53e)]:_0x35baf3(0x76b)+_0x35baf3(0x96e)+_0x35baf3(0x36a),_0x25545f[_0x35baf3(0xcc8)](parseInt,_0x166d5e[0x9c3+0x24fa+-0x2*0x175e],0x231f+0x1*0x2386+-0x4695));}}}}}}}}}if(_0x3deb01!==_0x5d6810[_0x4aada0]['textC'+'onten'+'t'])_0x5d6810[_0x4aada0]['textC'+'onten'+'t']=_0x3deb01;}}}catch(_0x15949d){}}function _0x313194(){var _0x32f410=_0x419cc1,_0x181d75={'nKLji':function(_0x1ea63a,_0x2a502){return _0x1ea63a<_0x2a502;},'DdWDr':function(_0x50585c,_0x556f55){return _0x50585c/_0x556f55;},'ohFaG':function(_0x1033e7,_0x2ed497){return _0x1033e7*_0x2ed497;},'ruPDc':function(_0x435e40,_0x8b7f19){var _0x8f658b=_0x29e5;return _0x25545f[_0x8f658b(0xbc9)](_0x435e40,_0x8b7f19);},'gzQzw':function(_0x1c4464,_0x3a293a){return _0x25545f['HTXOZ'](_0x1c4464,_0x3a293a);},'qHZmN':function(_0x3247b7,_0x104b23){return _0x25545f['wUZFC'](_0x3247b7,_0x104b23);},'MOJQH':function(_0x1cef89,_0x3a4e8f){return _0x1cef89+_0x3a4e8f;},'RedIZ':function(_0x457b95,_0x269c7d){return _0x457b95*_0x269c7d;},'RAYia':function(_0x2ed981,_0x1d96ee){return _0x2ed981-_0x1d96ee;}};if(_0x25545f[_0x32f410(0x4c4)](_0x32f410(0x713),_0x32f410(0x713)))_0x5c90ab['hookP'+'ostfi'+'x']({'typeName':'Mouse'+_0x32f410(0x6b4),'methodName':_0xda63a4['name'],'params':_0x43d081[_0x32f410(0xcfe)+'arams'],'returnType':_0x40a389[_0x32f410(0x2e4)+'et']},_0x25545f[_0x32f410(0xb38)](_0x5bff13,_0x25545f[_0x32f410(0x9e7)],_0x48184e[_0x32f410(0xc72)]));else try{if(_0x25545f['CuyQR'](_0x32f410(0x65b),'vcagU')){var _0x3694ba=_0x344051['basis']['fwd'];if(_0x181d75[_0x32f410(0x607)](_0x586c17['abs'](_0x3694ba[-0x716+-0x27+0x2*0x39f]),0x860+-0x29f*-0xb+-0x2535+0.01)){var _0x3ea0b7=_0x248428[_0x32f410(0x700)](_0x181d75[_0x32f410(0x2a0)](_0x181d75[_0x32f410(0x58c)](_0x585af9['fov'],_0x4e542a['PI'])/(-0xf2a+-0x57d+-0x47*-0x4d),0xf64+0x1f72+-0x2ed4)),_0x5194e9=-0x9ea+-0x24*-0x62+-0xc4*0x5,_0x57045e=-0xa4a*-0x3+0xd85+0x1a*-0x1b5,_0x5dae22=[_0x181d75[_0x32f410(0xb19)](_0x2cc0b1['pos'][-0x7d*-0x42+0x2686+-0x46c0],_0x181d75['gzQzw'](_0x3694ba[-0x1175+-0x2*-0xa0b+0x1*-0x2a1],_0x5194e9)),_0x181d75['qHZmN'](_0x181d75[_0x32f410(0x87f)](_0x42e44b['pos'][-0x186a+0xc52+0xc19*0x1],_0x3694ba[0x1e2d+0x9*-0x34b+-0x89]*_0x5194e9),_0x57045e),_0x181d75['MOJQH'](_0x3ba4b9[_0x32f410(0x8a7)][0x2417+0x208+-0x261d],_0x3694ba[0x20e7*0x1+-0x1c57*0x1+0x48e*-0x1]*_0x5194e9)],_0x488c61=_0x4ec7db(_0x3c2eb0['pos'],_0x5dae22,_0x3b6865,_0x131f0d[_0x32f410(0x22d)+'s']['h']);if(_0x488c61){var _0x23d655=(-0x77f*-0x1+-0x1c6*-0xc+-0x1cc7+0.5-_0x488c61['y']/_0x3bbc11[_0x32f410(0x22d)+'s']['h'])*(0x1*-0xe0f+-0x1269+0x2*0x103d),_0x1dd5e=_0x57045e/_0x5194e9/_0x3ea0b7;_0x531d61['verti'+_0x32f410(0x37c)]={'got':_0x44dd78[_0x32f410(0x494)](_0x23d655*(-0x6d7*-0x5+-0x5*-0x5d1+-0x3b60))/(-0x86a+0x2*0x632+-0x12),'want':_0x181d75[_0x32f410(0x2a0)](_0x464ddc['round'](_0x181d75[_0x32f410(0x257)](_0x1dd5e,0x5*-0x167+-0xf*-0x266+-0x190f)),-0x1*0x8d1+0xf19+-0x260),'off':_0x2058af[_0x32f410(0x494)](_0x181d75[_0x32f410(0x1dd)](_0x23d655,_0x1dd5e)*(-0xb29*0x1+-0x283+-0xb4*-0x19))/(0x1*0x1b8e+0x32*-0x11+0x4*-0x515)};}}}else{var _0x3bcc85=_0x25545f[_0x32f410(0xd07)](_0x43c5e2);return _0x3bcc85&&_0x3bcc85['feet']?_0x3bcc85['feet'][-0x1771+-0x7*-0x329+0x1*0x153]:null;}}catch(_0x4dda4f){if('xhjOX'==='xhjOX')return null;else{_0x414988[_0x32f410(0x7bf)+_0x32f410(0xbe0)+_0x32f410(0x5c0)](),_0x47125a(!_0x520553['on'],_0x551037[_0x32f410(0x3f2)+'r']);return;}}}var _0xe30aaa=0x1c49+0x8c3*0x1+-0x250a+0.5,_0x186a83=0x1*0x16b1+-0x156d*0x1+-0x13e+0.25,_0x59d27f={},_0x87db1a=null,_0x2b8c14=-0x6f3*0x2+0xa*0xad+0x725+0.8;function _0x28ac5b(_0x16bf34,_0xf74b55,_0x5532e0){var _0x487e1f=_0x419cc1,_0xf0412e={'bvPxV':function(_0x2e5bcd,_0x1cf51f,_0x5bfa0d){return _0x25545f['OhMYD'](_0x2e5bcd,_0x1cf51f,_0x5bfa0d);}};try{var _0x4b64f5=[],_0x39c28c,_0x268a77,_0x2e3250=_0xf74b55!==null&&_0x25545f['VHKuK'](_0xf74b55,undefined)&&isFinite(_0xf74b55),_0x233778=0x1d25+-0x1*0x2291+0x56c;for(_0x39c28c=0x1*-0x38f+-0x1*0x1e6+0x575;_0x39c28c<_0x16bf34['lengt'+'h'];_0x39c28c++){var _0x255920=_0x16bf34[_0x39c28c]['v'];if(!_0x255920)continue;var _0x12fbf0=Math[_0x487e1f(0xc3e)](_0x255920[0x1*0x1d15+-0xc90+-0x1085]*_0x255920[-0x1*-0xc77+0x677+-0x977*0x2]+_0x255920[0x2*-0xb8f+-0x2fc+0x1a1c]*_0x255920[0x1*0x1141+0x114*-0x24+0x1591*0x1]);if(_0x12fbf0>_0x233778)_0x233778=_0x12fbf0;}var _0x2090a1=_0x233778*(-0x4ee+-0xa*0x14d+0x11f0+0.25),_0x33dfed=-0x1d06+-0x191d+0x3623;_0x25545f[_0x487e1f(0xcfd)](typeof console,_0x487e1f(0x587)+_0x487e1f(0x1c3))&&console['log']&&!globalThis[_0x487e1f(0x639)+_0x487e1f(0xce7)]&&(globalThis[_0x487e1f(0x639)+_0x487e1f(0xce7)]=0x16af+0x127f*0x1+-0x292d,console[_0x487e1f(0x482)](_0x25545f['gDYqm'](_0x25545f[_0x487e1f(0x77a)](_0x25545f[_0x487e1f(0x8c3)](_0x25545f['tvDQF'](_0x487e1f(0xd46)+'n='+_0x16bf34[_0x487e1f(0xa1b)+'h'],_0x25545f[_0x487e1f(0xa6c)]),_0x233778['toFix'+'ed'](0xa*-0x2f2+0xdab*0x1+0xfcb))+(_0x487e1f(0x41a)+'r='),_0x2090a1[_0x487e1f(0x5b7)+'ed'](0xd29*0x2+0x258d*-0x1+0x15*0x89))+('\x20know'+'n=')+_0x2e3250,_0x487e1f(0xad4)+_0x487e1f(0x15c))+JSON[_0x487e1f(0x6fb)+_0x487e1f(0x501)](_0x16bf34[_0x487e1f(0x634)](0x1*-0x14ad+-0x26+0x14d3,0x2*-0x81+-0xf01+-0x1005*-0x1))));for(_0x39c28c=0xe0e+0x26a+0x11*-0xf8;_0x25545f[_0x487e1f(0xd98)](_0x39c28c,_0x16bf34[_0x487e1f(0xa1b)+'h']);_0x39c28c++){var _0x290d01=_0x16bf34[_0x39c28c]['v'];if(!_0x290d01)continue;if(_0x25545f['VFPMr'](_0x290d01[-0xce4+-0x12b6+0x1f9a],-0x1568+-0xe3b*0x1+0x23a3)&&_0x290d01[-0x1*0x174e+0xdc2+-0x5*-0x1e9]===-0x61*0x3+0x8a7+-0x784&&_0x290d01[-0x836+0x1f9d+0x35*-0x71]===-0x1b57+-0x2fb*-0x5+0x31c*0x4)continue;var _0x15b13f=Math[_0x487e1f(0xc3e)](_0x25545f[_0x487e1f(0xcbf)](_0x290d01[0xeec*0x1+-0x926*-0x2+-0x2138]*_0x290d01[0xa85+-0x990+-0xf5],_0x290d01[-0x1*-0xc7d+-0x10+0xb*-0x121]*_0x290d01[-0x7db*-0x4+-0xcd6*0x3+0x718]));if(_0x15b13f<_0x2090a1){if(_0x487e1f(0x3f8)!==_0x25545f[_0x487e1f(0x1ba)])_0x3e332d(_0x31579f);else{_0x33dfed++;continue;}}_0x4b64f5[_0x487e1f(0x90b)](_0x16bf34[_0x39c28c]);}if(!_0x4b64f5[_0x487e1f(0xa1b)+'h']){if(_0x25545f[_0x487e1f(0xb75)](_0x487e1f(0x697),_0x487e1f(0x8a2)))_0x514168['close']();else return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x33dfed,'ambiguous':![],'reach':0x0,'held':![]};}var _0x37951a=[];for(_0x39c28c=-0x2*0xdc2+0x319+0x186b;_0x25545f[_0x487e1f(0x7df)](_0x39c28c,_0x4b64f5['lengt'+'h']);_0x39c28c++){if(_0x487e1f(0x283)!==_0x487e1f(0x283)){var _0x3bbb4f=_0xf28e32[_0x4b2f10];_0x23c6fe+=_0x3bbb4f[_0x487e1f(0xa4e)]||-0x19a1+-0xa36*0x2+0x2e0d,_0x3ac249+=(_0x3bbb4f['setHi'+'ts']||-0x12bf+-0x429+0x16e8)+(_0x3bbb4f[_0x487e1f(0x8c6)+_0x487e1f(0x537)]||0xc*-0x4b+0x1d7d+-0x6d*0x3d);}else{var _0x47bcbd=_0x4b64f5[_0x39c28c]['v'],_0x3b0767=-(0x155c+0xafa*-0x1+-0xa61);for(_0x268a77=-0x1d*0x83+0xd64+0x173;_0x25545f[_0x487e1f(0x149)](_0x268a77,_0x37951a[_0x487e1f(0xa1b)+'h']);_0x268a77++){var _0x366210=_0x37951a[_0x268a77]['c'][0x36d*-0x3+0x3f4+0x653*0x1]['v'],_0x7bc464=_0x47bcbd[0x2c*0x83+-0x1*0x113b+-0x549]-_0x366210[-0x1b5b*0x1+-0x1eb9+0x3a14],_0xbadcdd=_0x47bcbd[-0xb*-0xb6+-0x718*-0x3+-0xbf*0x27]-_0x366210[0x1*0x520+-0xd5f+0xb0*0xc],_0x1f63fe=_0x47bcbd[0x1d1*-0x14+0xc3e*0x2+0xbda]-_0x366210[0x1340+0x89*0x29+0xd*-0x32b];if(_0x25545f[_0x487e1f(0xd29)](_0x7bc464,_0x7bc464)+_0xbadcdd*_0xbadcdd+_0x25545f[_0x487e1f(0x740)](_0x1f63fe,_0x1f63fe)<=_0x186a83){if(_0x25545f[_0x487e1f(0xb44)](_0x25545f[_0x487e1f(0xcaa)],_0x487e1f(0x20d)))return![];else{_0x3b0767=_0x268a77;break;}}}if(_0x25545f[_0x487e1f(0x959)](_0x3b0767,-(0x8*-0x6b+-0x526+0x87f)))_0x37951a[_0x487e1f(0x90b)]({'c':[_0x4b64f5[_0x39c28c]]});else _0x37951a[_0x3b0767]['c']['push'](_0x4b64f5[_0x39c28c]);}}var _0x1a75e7=_0x37951a[-0x2*-0x11fb+-0x5*0x250+-0x1866],_0x2b9c53=-Infinity;for(_0x268a77=0xec6+0x24b4+-0x337a;_0x25545f['pDnmQ'](_0x268a77,_0x37951a[_0x487e1f(0xa1b)+'h']);_0x268a77++){var _0x586592=_0x37951a[_0x268a77]['c'],_0x2b6e4f=_0x586592[_0x487e1f(0xa1b)+'h']*(0x157+0xe44+-0xbb3);if(_0x2e3250){if(_0x487e1f(0x7b1)!=='LIIlp'){var _0x2dd046=Infinity;for(var _0x8d5e73=0x24dc+0x255*-0x9+-0xfdf;_0x8d5e73<_0x586592[_0x487e1f(0xa1b)+'h'];_0x8d5e73++){var _0x3a5d27=Math[_0x487e1f(0x419)](_0x25545f[_0x487e1f(0x975)](_0x586592[_0x8d5e73]['v'][-0x2eb*0x1+0x1f0f*-0x1+0x21fb*0x1],_0xf74b55));if(_0x3a5d27<_0x2dd046)_0x2dd046=_0x3a5d27;}_0x2b6e4f-=_0x2dd046;}else{var _0x291207=_0x5bc6bc[_0x487e1f(0x1b9)+_0x487e1f(0x47f)];if(typeof _0x291207['resol'+_0x487e1f(0x8e1)+'e']===_0x487e1f(0x723)+'ion'){var _0x380a06=_0x291207[_0x487e1f(0x971)+'veGam'+'e']();if(_0x380a06)return _0x2a9bf9[_0x487e1f(0x5fb)+'e']=_0x25545f[_0x487e1f(0xab0)],_0x380a06;}if(_0x291207[_0x487e1f(0xd59)])return _0x1e0c36[_0x487e1f(0x5fb)+'e']=_0x25545f[_0x487e1f(0xb03)],_0x291207[_0x487e1f(0xd59)];}}else{var _0x3607f5=-0x20a6+0x2697+-0x75*0xd;for(var _0x40c723=-0x1ccb+0x45*0x71+-0x47*0x6;_0x40c723<_0x586592[_0x487e1f(0xa1b)+'h'];_0x40c723++){var _0x28bf15=Math[_0x487e1f(0xc3e)](_0x25545f['FWFnQ'](_0x586592[_0x40c723]['v'][0xa5d+-0xdd6+0x379*0x1]*_0x586592[_0x40c723]['v'][-0x11a8+0x1*-0x19df+0x2b87],_0x586592[_0x40c723]['v'][-0x26cd+0x15b2+0x111d]*_0x586592[_0x40c723]['v'][0x37b+0x1*0xd46+-0x3*0x595]));if(_0x25545f['yIcvS'](_0x28bf15,_0x3607f5))_0x3607f5=_0x28bf15;}_0x2b6e4f+=_0x3607f5;}_0x2b6e4f>_0x2b9c53&&(_0x487e1f(0x51d)!==_0x25545f['yAzyk']?_0x556173=_0x25c57d:(_0x2b9c53=_0x2b6e4f,_0x1a75e7=_0x37951a[_0x268a77]));}var _0x331b13=_0x1a75e7['c'][0x1dfe+-0x165*0x1c+0x90e],_0x1fd264=-(-0x14e5*0x1+0x1735+-0x1*0x24f);for(_0x268a77=-0x87c+-0xf3*-0x20+0x4*-0x579;_0x268a77<_0x1a75e7['c'][_0x487e1f(0xa1b)+'h'];_0x268a77++){var _0x51a940=_0x1a75e7['c'][_0x268a77]['v'],_0xf43cad=Math['sqrt'](_0x25545f['qqKZv'](_0x51a940[-0x245*0x3+-0x30a*-0x8+-0x1181],_0x51a940[-0x1e50+0x45*0x35+-0x1*-0x1007])+_0x51a940[-0x60*-0x36+0x65f*-0x6+0x1*0x11fc]*_0x51a940[-0x1ef2+-0x60*-0x11+0x1894]);(_0xf43cad>_0x1fd264||_0xf43cad===_0x1fd264&&_0x25545f[_0x487e1f(0xad2)](_0x51a940[-0x1a54+-0x1f*-0x92+-0x8a7*-0x1],_0x331b13['v'][-0x10cc+0x1d*0xb9+-0x428]))&&(_0x1fd264=_0xf43cad,_0x331b13=_0x1a75e7['c'][_0x268a77]);}var _0x5b11c3=![];if(_0x5532e0&&_0x5532e0['o'])for(_0x268a77=-0x210c+0x5c6*-0x1+0x1*0x26d2;_0x268a77<_0x1a75e7['c']['lengt'+'h'];_0x268a77++){if(_0x1a75e7['c'][_0x268a77]['o']!==_0x5532e0['o'])continue;if(_0x2e3250){if(_0x25545f[_0x487e1f(0x5c9)](_0x25545f[_0x487e1f(0x156)],_0x25545f[_0x487e1f(0x156)]))return _0x34dca6['sourc'+'e']=_0x25545f[_0x487e1f(0x349)](_0x487e1f(0x3d6)+'w.'+_0x155474[_0x112057],'.Modu'+'le'),_0x491959;else{var _0x21cfc5=Math[_0x487e1f(0x419)](_0x25545f[_0x487e1f(0x27e)](_0x1a75e7['c'][_0x268a77]['v'][0x411+0x46b+-0x87b],_0xf74b55)),_0x61602c=Infinity;for(var _0xdeadb2=-0x145*0xd+0x630+-0x8b*-0x13;_0xdeadb2<_0x1a75e7['c'][_0x487e1f(0xa1b)+'h'];_0xdeadb2++){if(_0x25545f['AUZSW'](_0x487e1f(0xc82),_0x25545f[_0x487e1f(0x69c)])){var _0x332257=Math['abs'](_0x1a75e7['c'][_0xdeadb2]['v'][0x1326+-0x1881+0x157*0x4]-_0xf74b55);if(_0x332257<_0x61602c)_0x61602c=_0x332257;}else{_0xd272c[_0x487e1f(0x7bf)+_0x487e1f(0xbe0)+'ault'](),_0xf0412e[_0x487e1f(0x4ae)](_0xf27df5,_0x3b37f7['on'],_0x4c2735[_0x487e1f(0x3f2)+'r']-(0xd41+-0x1529*-0x1+-0x226a+0.5));return;}}if(_0x21cfc5>_0x25545f['JgdGk'](_0x61602c,-0xb61+0x10*0x1+0xb51+0.35))break;}}_0x331b13=_0x1a75e7['c'][_0x268a77],_0x1fd264=Math['sqrt'](_0x25545f[_0x487e1f(0x9b8)](_0x331b13['v'][0x1bd*-0x5+-0x1ab6+0x2367],_0x331b13['v'][0xb4e+0x1176+0x1cc4*-0x1])+_0x331b13['v'][0x4*-0x98d+0x3f8+0x12*0x1e7]*_0x331b13['v'][-0x880+-0x1*-0x11ef+0x7f*-0x13]),_0x5b11c3=!![];break;}return{'pos':_0x331b13['v'],'posAt':_0x331b13['o'],'candidates':_0x4b64f5[_0x487e1f(0xa1b)+'h'],'cluster':_0x1a75e7['c']['lengt'+'h'],'groups':_0x37951a[_0x487e1f(0xa1b)+'h'],'held':_0x5b11c3,'discarded':_0x33dfed,'ambiguous':_0x37951a[_0x487e1f(0xa1b)+'h']>0xdd7+0x1492+-0x2268,'reach':_0x1fd264};}catch(_0x5ba086){if(_0x25545f[_0x487e1f(0xdc8)](_0x487e1f(0x29b),_0x487e1f(0xd63)))_0xc083df(_0x487e1f(0x183),{'on':_0x595502,'factor':_0x2a16d9(_0x5a765f[_0x487e1f(0x467)])||-0x13*-0x165+0x1*-0x1b86+0x108});else return console['log'](_0x25545f[_0x487e1f(0x1b3)],_0x5ba086[_0x487e1f(0x650)+'ge'],String(_0x5ba086['stack']||'')[_0x487e1f(0xb76)]('\x0a')[_0x487e1f(0x634)](0x13*-0xb3+-0x3*-0x561+-0x2da,-0x1587+0x6d*0x2f+0x188)[_0x487e1f(0x5aa)]('\x20|\x20')),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}}function _0x43c5e2(){var _0x337611=_0x419cc1,_0x353126={'bdOZy':function(_0x5b3fa0,_0x160715,_0x5e9fdc){return _0x5b3fa0(_0x160715,_0x5e9fdc);},'jMogX':_0x25545f[_0x337611(0x7c1)],'pYQHr':_0x337611(0x57f)+_0x337611(0x38d),'QACLS':function(_0x2a73aa,_0x1942d6){return _0x25545f['lSFJS'](_0x2a73aa,_0x1942d6);},'EVADd':_0x25545f[_0x337611(0x434)],'AETfo':_0x337611(0x473)+'n>','QHntV':function(_0x2e7ced,_0x3a2aa7){return _0x2e7ced!==_0x3a2aa7;},'mJMpq':'bRLjn','ZOEAV':function(_0x5e66c0,_0x46c918){return _0x25545f['vmgEo'](_0x5e66c0,_0x46c918);}},_0xf612df=_0x2e79eb[_0x337611(0x76b)+_0x337611(0x96e)+_0x337611(0x36a)];if(!_0xf612df||!_0xf612df[_0x337611(0x936)])return null;var _0x473837=_0x3e1fdb['FPSco'+'ntrol'+_0x337611(0x36a)]||[],_0x102d97=[];for(var _0x17b1c8=0x955*-0x1+0x848+0x10d;_0x17b1c8<_0x473837[_0x337611(0xa1b)+'h'];_0x17b1c8++){if(_0x473837[_0x17b1c8][0x1*-0x1ed6+-0x3*0xc5f+0x43f4]!=='v3')continue;var _0x1a7793=_0x25545f[_0x337611(0x6ed)](_0x16ec12,_0xf612df['ptr'],_0x473837[_0x17b1c8][0x51*-0x66+0x1192+0xeb4*0x1],0x8*0x257+-0x5ba+0xcfb*-0x1);if(_0x1a7793)_0x102d97['push']({'o':'0x'+_0x473837[_0x17b1c8][0x80*-0x1a+0x25eb+0x1*-0x18eb]['toStr'+'ing'](0x1b61+-0x167c+0x4d5*-0x1),'v':_0x1a7793});}var _0x37a788=_0x28ac5b(_0x102d97,null,_0x87db1a);if(!_0x37a788[_0x337611(0x8a7)])return null;_0x87db1a=_0x37a788[_0x337611(0x94e)]?{'o':_0x37a788[_0x337611(0x94e)]}:null;var _0x4b4587=_0x37a788[_0x337611(0x8a7)];return{'ptr':_0xf612df['ptr'],'feet':_0x4b4587,'posAt':_0x37a788[_0x337611(0x94e)],'candidates':_0x37a788[_0x337611(0x837)+_0x337611(0x35b)],'cluster':_0x37a788['clust'+'er'],'copies':_0x102d97['filte'+'r'](function(_0x33a321){var _0x485f07=_0x337611;if(_0x353126[_0x485f07(0x8b6)](_0x353126[_0x485f07(0xbd3)],_0x353126['mJMpq'])){var _0x515649=_0x353126['bdOZy'](_0x2f754e,_0x353126[_0x485f07(0xc74)],'sk-ct'+'l'),_0x7da94c=_0x4c5061(_0x485f07(0x166),_0x353126[_0x485f07(0x717)],_0x2d69ec+(_0x4eecbe?_0x353126[_0x485f07(0x49d)](_0x353126[_0x485f07(0x1ee)]+_0xad9b8,_0x353126[_0x485f07(0xc39)]):''));return _0x515649[_0x485f07(0xcad)+_0x485f07(0x48f)+'d'](_0x7da94c),_0x515649;}else return _0x33a321['v'][0x1*-0x10f3+0xb06+0x5ed]===_0x4b4587[-0x1f*-0x59+0x1021+0x11f*-0x18]&&_0x353126[_0x485f07(0x633)](_0x33a321['v'][0x1145*-0x1+-0x19a3*0x1+-0x34d*-0xd],_0x4b4587[-0xc7a*-0x2+0xb93+-0x2486])&&_0x33a321['v'][0xeda+-0x687*0x4+0xb44]===_0x4b4587[-0xca5+-0xdd8+-0x143*-0x15];})['map'](function(_0x41777e){return _0x41777e['o'];}),'eye':[_0x4b4587[0x1*-0x1efe+-0x212e+0x559*0xc],_0x4b4587[-0x5*0x449+-0x2205+0x3773]+_0x2b8c14,_0x4b4587[0x1*-0x180f+0x2577+0x1ea*-0x7]],'reach':_0x37a788[_0x337611(0x164)],'pitch':_0x2ee0ee(_0x25545f[_0x337611(0xb92)](_0xf612df[_0x337611(0x936)],0x25e*0x3+-0x1dfd*-0x1+0x18d*-0x17),_0x337611(0xb98)),'yaw':_0x25545f[_0x337611(0x72a)](_0x2ee0ee,_0xf612df[_0x337611(0x936)]+(-0x54f+-0x35*-0x3b+-0x19*0x38),_0x25545f[_0x337611(0x9b0)])};}function _0x233afb(){var _0x119bf6=_0x419cc1;if(_0x119bf6(0x80b)===_0x119bf6(0x2f8))_0x36adb7[_0x119bf6(0xd70)]=_0x4dff21;else{var _0x1e55b0=_0x25545f[_0x119bf6(0x7bc)](_0x43c5e2),_0x12028c=[],_0xaa7861=_0x5c7ec5[_0x119bf6(0x75d)+'nNetw'+_0x119bf6(0xcd1)+'nc']||{},_0x5152d4=Object[_0x119bf6(0xbac)](_0xaa7861);for(var _0x24afa0=-0x2043+-0x4*0x841+0x4147;_0x25545f['QubhL'](_0x24afa0,_0x5152d4[_0x119bf6(0xa1b)+'h'])&&_0x24afa0<-0x292+-0x1b01+0x1db3;_0x24afa0++){var _0x5981f8=_0xaa7861[_0x5152d4[_0x24afa0]],_0x2a5dc5=[],_0x11d658=_0x3e1fdb['Photo'+_0x119bf6(0x6f4)+_0x119bf6(0xcd1)+'nc']||[];for(var _0x89cb20=0x1aa9+0x282*-0xb+0x3*0x4f;_0x25545f[_0x119bf6(0x9a1)](_0x89cb20,_0x11d658[_0x119bf6(0xa1b)+'h']);_0x89cb20++){if(_0x11d658[_0x89cb20][0x1*0xda+0x2*-0x2de+0x8b*0x9]!=='v3')continue;var _0x32e3b1=_0x16ec12(_0x5981f8[_0x119bf6(0x936)],_0x11d658[_0x89cb20][0x66e+-0x1e*-0x34+-0xc86],-0x2179+-0x2*-0xb99+0xa4a);if(_0x32e3b1)_0x2a5dc5[_0x119bf6(0x90b)]({'o':_0x25545f[_0x119bf6(0x9fc)]('0x',_0x11d658[_0x89cb20][-0x22f6*0x1+0x2070+0x286][_0x119bf6(0x834)+_0x119bf6(0x2fe)](-0x19a4+-0xaab+0x245f)),'v':_0x32e3b1});}var _0x4aeb96=_0x28ac5b(_0x2a5dc5,_0x1e55b0?_0x1e55b0[_0x119bf6(0x913)][-0x2068+-0x1*-0xb95+-0xac*-0x1f]:null,_0x59d27f[_0x5152d4[_0x24afa0]]);_0x59d27f[_0x5152d4[_0x24afa0]]=_0x4aeb96[_0x119bf6(0x94e)]?{'o':_0x4aeb96[_0x119bf6(0x94e)]}:null;var _0x170dc2=_0x4aeb96[_0x119bf6(0x8a7)];if(!_0x170dc2)continue;var _0x4b2083={'ptr':_0x5981f8[_0x119bf6(0x936)],'x':_0x170dc2[0x1fb6+-0x23e9+-0xd7*-0x5],'y':_0x170dc2[-0x137*0x17+-0x15e5+0x3*0x109d],'z':_0x170dc2[-0x2d4*0x3+0xf3a+-0x6bc],'posAt':_0x4aeb96[_0x119bf6(0x94e)],'candidates':_0x4aeb96[_0x119bf6(0x837)+_0x119bf6(0x35b)],'cluster':_0x4aeb96[_0x119bf6(0x900)+'er'],'team':_0x2ee0ee(_0x5981f8[_0x119bf6(0x936)]+(-0x2702*-0x1+0xffb+-0x36a5),_0x25545f[_0x119bf6(0xb37)]),'localFlag':_0x25545f['sXTAY'](_0x2ee0ee,_0x25545f[_0x119bf6(0x8ff)](_0x5981f8[_0x119bf6(0x936)],-0x259*0x7+0x1985+-0x89a),_0x25545f[_0x119bf6(0xb37)])};if(_0x1e55b0){var _0x2773c7=_0x25545f['jtROI'](_0x170dc2[0x1*-0x2fb+-0x3*0x2b1+-0x11b*-0xa],_0x1e55b0[_0x119bf6(0x913)][0xa*0xf+0x13cf+-0x1465]),_0xd53b91=_0x170dc2[0xc46*-0x2+0x1d58+-0x265*0x2]-_0x1e55b0[_0x119bf6(0x913)][-0x742+-0x20fe+0x2842];_0x4b2083['d']=Math['sqrt'](_0x2773c7*_0x2773c7+_0x25545f['cjbqd'](_0xd53b91,_0xd53b91)),_0x4b2083[_0x119bf6(0xb5f)+'ng']=_0x25545f['cjbqd'](Math[_0x119bf6(0x9fa)](_0x2773c7,_0xd53b91),0x926*0x3+-0xe78+0x2*-0x623)/Math['PI'];}_0x12028c[_0x119bf6(0x90b)](_0x4b2083);}return{'me':_0x1e55b0,'list':_0x12028c};}}var _0x1ba09e=null;function _0x1b8dc6(){var _0x1d824f=_0x419cc1;if(_0x1ba09e)return _0x1ba09e;try{var _0x225dc0=(_0x1d824f(0x2f3)+_0x1d824f(0x181)+_0x1d824f(0xaa6)+_0x1d824f(0xb6f))['split']('|'),_0x3397a5=-0x1126+-0x1*-0x2351+-0x122b;while(!![]){switch(_0x225dc0[_0x3397a5++]){case'0':var _0x5f11d1={'cv':{'getContext':function(){return null;}},'el':_0x54acfd};continue;case'1':if(!_0x1ba09e['cv']||!_0x1ba09e['cv']['getCo'+'ntext'])_0x1ba09e=_0x5f11d1;continue;case'2':document['body']['appen'+_0x1d824f(0x48f)+'d'](_0x54acfd);continue;case'3':return _0x1ba09e;case'4':_0x54acfd[_0x1d824f(0x260)+_0x1d824f(0x2e8)]=_0x1d824f(0x5d8)+_0x1d824f(0x2bc)+'=\x22sak'+'ura-e'+'sp-cv'+_0x1d824f(0x3ed)+_0x1d824f(0xd21)+_0x1d824f(0x171)+_0x1d824f(0x73b)+'=\x22160'+_0x1d824f(0xcf7)+_0x1d824f(0xc92)+'ispla'+_0x1d824f(0x71c)+_0x1d824f(0x5b6)+_0x1d824f(0x727)+'as>'+(_0x1d824f(0x673)+_0x1d824f(0x817)+'akura'+'-esp-'+'lg\x22\x20s'+'tyle='+'\x22text'+_0x1d824f(0xbe2)+_0x1d824f(0x4f6)+'ter\x22>'+'</div'+'>');continue;case'5':var _0x54acfd=document['creat'+'eElem'+'ent'](_0x1d824f(0x166));continue;case'6':_0x1ba09e={'el':_0x54acfd,'cv':_0x54acfd[_0x1d824f(0x1db)+'Selec'+'tor'](_0x25545f[_0x1d824f(0xcf0)]),'lg':_0x54acfd['query'+'Selec'+_0x1d824f(0xad3)](_0x25545f[_0x1d824f(0x927)])};continue;case'7':_0x54acfd['id']='sakur'+_0x1d824f(0x248);continue;case'8':if(!document['body']||!document[_0x1d824f(0x816)]['appen'+'dChil'+'d'])return null;continue;case'9':_0x54acfd['style'][_0x1d824f(0x31f)+'xt']=_0x25545f[_0x1d824f(0x739)](_0x25545f[_0x1d824f(0xa09)](_0x25545f['hXvLn']+('backg'+'round'+':rgba'+'(21,1'+'2,29,'+_0x1d824f(0x1ea)+'borde'+_0x1d824f(0xd57)+_0x1d824f(0x657)+'d\x20rgb'+_0x1d824f(0xd3b)+_0x1d824f(0x65d)+_0x1d824f(0x733)+_0x1d824f(0x22c)+'rder-'+_0x1d824f(0x6ab)+'s:10p'+'x;'),_0x1d824f(0x5dc)+_0x1d824f(0xd73)+_0x1d824f(0x693)+_0x1d824f(0xa84)+_0x1d824f(0xbe4)+_0x1d824f(0x469)+'onosp'+'ace,C'+_0x1d824f(0x188)+_0x1d824f(0x505)+_0x1d824f(0xd5b)+_0x1d824f(0x15f)+_0x1d824f(0xc6a)+_0x1d824f(0x8c2)+'9;'),'user-'+'selec'+'t:non'+_0x1d824f(0x227)+_0x1d824f(0x722)+_0x1d824f(0x8bb)+_0x1d824f(0x2f1)+_0x1d824f(0x762)+'e;');continue;}break;}}catch(_0x143a2e){if('eigJa'===_0x25545f['KEBGI'])_0x1eaff5['st'][_0x1d824f(0x389)+_0x1d824f(0x8a4)+'n']=_0x1687db[_0x1d824f(0x2f7)+'d'](_0x5dc872),_0x2a2a38++,_0x28dac4['push']('0x'+_0xdb2c6['o']['toStr'+_0x1d824f(0x2fe)](0x18+-0x116+0x10e));else return null;}}var _0x1e3610=null;function _0x2854cb(){var _0x210cde=_0x419cc1;if(_0x1e3610)return _0x1e3610;try{var _0x4407fb=(_0x210cde(0x487)+_0x210cde(0x831)+_0x210cde(0x4cf))['split']('|'),_0x6e46cc=0x100a+0x1b02*-0x1+0xd*0xd8;while(!![]){switch(_0x4407fb[_0x6e46cc++]){case'0':var _0xbecd13=document[_0x210cde(0x8e6)+_0x210cde(0x2c7)+_0x210cde(0xba7)]('canva'+'s');continue;case'1':_0xbecd13['id']=_0x210cde(0xa83)+'a-box'+'es';continue;case'2':_0xbecd13[_0x210cde(0xbf4)][_0x210cde(0x31f)+'xt']=_0x25545f[_0x210cde(0x6dd)];continue;case'3':_0x1e3610={'cv':_0xbecd13};continue;case'4':return _0x1e3610;case'5':if(!document[_0x210cde(0x816)]||!document[_0x210cde(0x816)]['appen'+_0x210cde(0x48f)+'d'])return null;continue;case'6':document[_0x210cde(0x816)][_0x210cde(0xcad)+_0x210cde(0x48f)+'d'](_0xbecd13);continue;}break;}}catch(_0x9bc06f){return null;}}function _0x5d3b94(_0x178abf){var _0x392620=_0x419cc1,_0x1e2847={'YWVyv':function(_0x4ef170,_0x3062cd){return _0x4ef170-_0x3062cd;},'NSIyn':function(_0x415439,_0x38bfc7){return _0x415439+_0x38bfc7;},'TfcBR':_0x25545f['GqxRl']};try{if(_0x25545f[_0x392620(0xbdf)]!=='AEiva'){var _0x443b7a=Math['max'](-0x5*0x579+-0x64*-0x7+0x18a2,window['inner'+_0x392620(0x945)]||document['docum'+_0x392620(0xa19)+_0x392620(0x4d5)]['clien'+_0x392620(0x25c)+'h']||0xdef+-0x2*0x43+-0xd69),_0x41eb70=Math['max'](0x13ef+0x1*0x14b3+-0x28a1*0x1,window['inner'+_0x392620(0xa0f)+'t']||document['docum'+'entEl'+_0x392620(0x4d5)][_0x392620(0x21a)+_0x392620(0xcdf)+'ht']||-0x1*-0x22e9+0x120b+0xd3d*-0x4);return(_0x25545f[_0x392620(0xa46)](_0x178abf['cv'][_0x392620(0xdd5)],_0x443b7a)||_0x25545f[_0x392620(0x9ce)](_0x178abf['cv'][_0x392620(0x5c7)+'t'],_0x41eb70))&&(_0x178abf['cv']['width']=_0x443b7a,_0x178abf['cv'][_0x392620(0x5c7)+'t']=_0x41eb70),{'w':_0x443b7a,'h':_0x41eb70};}else{if(!_0x2db0e7)return;var _0x37753b=_0x7381d[_0x392620(0xdeb)+_0x392620(0x25c)+'h']||-0x2339*0x1+0x16e5+0xec0,_0x48173d=_0x5d0121[_0x392620(0xdeb)+_0x392620(0xcdf)+'ht']||0x109*-0xf+0x17a4+0x22f*-0x3,_0x51da31=(_0x5b6551[_0x392620(0x21a)+'tX']||-0xb4f+-0x8f9+0x1448)-_0x199fcc,_0x558301=(_0x40945e[_0x392620(0x21a)+'tY']||0x7ca*0x3+-0x3e4*0x1+-0x137a)-_0x1fc5a2;_0x51da31=_0xc1e3c6[_0x392620(0x932)](0xa60+0x1c0b*-0x1+0x11b3,_0x29ea5d['min'](_0x1e2847[_0x392620(0x85a)]((_0x46e70c['inner'+_0x392620(0x945)]||0x13*-0xd1+-0x20ee+0x3071*0x1)-_0x37753b,-0x24d4+-0x1*-0x1453+-0x583*-0x3),_0x51da31)),_0x558301=_0x4964b3['max'](-0x2123+0x2047+0xe4,_0x277698['min']((_0x2c55b9['inner'+_0x392620(0xa0f)+'t']||-0x55+-0x5e*0x61+0x23f3)-_0x48173d-(-0x1a23*0x1+0x10d3*0x1+0x958),_0x558301)),_0x3cd296['style']['left']=_0x51da31+'px',_0x8121da[_0x392620(0xbf4)]['top']=_0x1e2847[_0x392620(0x69e)](_0x558301,'px'),_0x2a721a[_0x392620(0xbf4)][_0x392620(0x963)]=_0x1e2847[_0x392620(0xded)],_0x16d6f1['style'][_0x392620(0xb72)+'m']=_0x1e2847[_0x392620(0xded)],_0x41f36b[_0x392620(0x8a7)]={'x':_0x51da31,'y':_0x558301};}}catch(_0x530bf8){return{'w':0x0,'h':0x0};}}function _0x1528cf(){var _0x2d94e0=_0x419cc1,_0x4c5423={'DMOUp':_0x25545f['mNyEM'],'slVeK':_0x25545f['OEzWa'],'bFkTg':_0x2d94e0(0x631)},_0xf04d19={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0x25545f[_0x2d94e0(0xb57)]!==_0x25545f[_0x2d94e0(0xb57)]?(_0x759f3a[_0x2d94e0(0xa2e)]=_0x2af5a6,_0x31a9ba()):_0xf04d19['canva'+'s']={'w':_0x1e3610&&_0x1e3610['cv']?_0x1e3610['cv'][_0x2d94e0(0xdd5)]:-0xa4d+-0x1b6c+0x25b9,'h':_0x1e3610&&_0x1e3610['cv']?_0x1e3610['cv'][_0x2d94e0(0x5c7)+'t']:0x4*-0x13f+0x24f4+-0x1ff8,'innerW':window[_0x2d94e0(0x260)+_0x2d94e0(0x945)],'innerH':window[_0x2d94e0(0x260)+_0x2d94e0(0xa0f)+'t'],'dpr':window['devic'+_0x2d94e0(0xa70)+'lRati'+'o']||0x6c1+-0x1867+0x11a7*0x1};}catch(_0x5726fd){}var _0xf49629=_0x233afb();if(!_0xf49629||!_0xf49629['me'])return _0xf04d19;var _0x51a407=_0xf04d19['canva'+'s']['w']||-0x9d*-0x3+0xe*-0x182+0x172d,_0x48eb47=_0xf04d19[_0x2d94e0(0x22d)+'s']['h']||-0x5+0x2*0xa67+-0x10e1,_0xf4c905=_0x25545f[_0x2d94e0(0xb61)](_0x51a407,_0x48eb47),_0x4199c4=Math['tan'](_0x25545f[_0x2d94e0(0xb61)](_0x9e54cb['fov']*Math['PI'],-0x23*0x23+0x2047+0x1*-0x1aca)/(0x16df+0x2b3*0x9+-0x3*0xfb8)),_0x1587ec=_0x25545f['dyydw'](_0x4452e2),_0x4c56f0=_0x1587ec[_0x2d94e0(0x538)];for(var _0x32c6f4=-0x392+0x1*-0x1f51+0x22e3;_0x25545f['vUMrN'](_0x32c6f4,_0xf49629[_0x2d94e0(0x1de)][_0x2d94e0(0xa1b)+'h'])&&_0x25545f[_0x2d94e0(0xd1b)](_0x32c6f4,-0x2*0x4cd+0x945+-0x3*-0x1f);_0x32c6f4++){if(_0x25545f[_0x2d94e0(0xdc8)](_0x25545f[_0x2d94e0(0x6d6)],'laztY'))return _0x1c006d[0x22cf+-0x149f+-0xe2f*0x1]===_0x25545f[_0x2d94e0(0x9b0)]||_0x1609f7[0x12a4*-0x1+-0x2597+-0x1*-0x383c]===_0x2d94e0(0xbd8);else{var _0x493708=_0xf49629['list'][_0x32c6f4];if(_0x25545f[_0x2d94e0(0xad1)](typeof _0x493708['d'],_0x25545f['mqoAS'])||_0x25545f[_0x2d94e0(0xdfa)](_0x493708['d'],-0x182b+-0x12b4+0x2adf+0.5))continue;var _0xaf57d6=_0x5c3c9c(_0xf49629['me']['eye'],[_0x493708['x'],_0x493708['y'],_0x493708['z']],_0x51a407,_0x48eb47);if(!_0xaf57d6)continue;var _0x2f4157=_0x25545f[_0x2d94e0(0x75b)](_0x25545f[_0x2d94e0(0x25f)](_0xaf57d6['x'],_0x51a407),-0x112e+0x125f*-0x1+0x1df*0x13+0.5)*(-0x1*-0x2+-0x5bd*0x1+0x5bd),_0x474b28=null;if(_0x4c56f0&&_0x1587ec[_0x2d94e0(0x8a7)]){var _0xdbb84b=_0x25545f[_0x2d94e0(0x6b8)]['split']('|'),_0x11aab5=0x6ed*-0x1+0x10bd+-0x9d0;while(!![]){switch(_0xdbb84b[_0x11aab5++]){case'0':var _0x4135a8=_0x493708['x']-_0x1587ec[_0x2d94e0(0x8a7)][0x1*0x751+0xc4c+0x139d*-0x1],_0x2fc8cd=_0x493708['y']-_0x1587ec[_0x2d94e0(0x8a7)][0x94f*-0x1+0x1*-0x2361+-0x1*-0x2cb1],_0x27966c=_0x493708['z']-_0x1587ec[_0x2d94e0(0x8a7)][0x201e+-0x1f45+-0xd7];continue;case'1':if(_0x25545f['yIcvS'](_0x2b9d52,-0x6b*-0x4a+-0x2f*-0x12+0x272*-0xe+0.5))_0x474b28=_0x25545f['JAFXZ'](_0x12f407,_0x2b9d52)/_0x25545f['SnrZM'](_0x4199c4,_0xf4c905);continue;case'2':var _0x2916e5=_0x4c56f0['fwd'],_0x56bb67=_0x4c56f0['right'];continue;case'3':var _0x12f407=_0x4135a8*_0x56bb67[0x1198*0x2+-0x4*-0x7f+-0x252c]+_0x2fc8cd*_0x56bb67[-0x2*0x1027+-0x4*-0x3a+0x1f67]+_0x27966c*_0x56bb67[0x22ff+0x2096+-0x1*0x4393];continue;case'4':var _0x2b9d52=_0x4135a8*_0x2916e5[0x2*0x111d+-0x3*-0x47a+-0x2fa8]+_0x25545f[_0x2d94e0(0xb8f)](_0x2fc8cd,_0x2916e5[-0x10b*0xe+0xc99+0x202])+_0x27966c*_0x2916e5[0xc14+-0x31b+-0x2fd*0x3];continue;}break;}}else _0x25545f[_0x2d94e0(0xb4d)](typeof _0x493708[_0x2d94e0(0xb5f)+'ng'],'numbe'+'r')&&(_0x474b28=_0x25545f[_0x2d94e0(0x3f3)](Math['tan'](_0x25545f['lqaeR'](_0x493708['beari'+'ng'],Math['PI'])/(0x1985*0x1+-0xa7*0x17+0x2*-0x4e8)),_0x4199c4*_0xf4c905));if(_0x474b28===null)continue;if(Math['abs'](_0x474b28)>0x2bc+-0x11*-0x1b1+-0x1f7d+0.8)continue;var _0x33e0b4=_0x2f4157-_0x474b28;_0xf04d19[_0x2d94e0(0x1cf)][_0x2d94e0(0x90b)]({'d':Math[_0x2d94e0(0x494)](_0x493708['d']),'bearing':Math['round'](_0x493708[_0x2d94e0(0xb5f)+'ng']),'at':Math['round'](_0x25545f[_0x2d94e0(0x8dc)](_0x2f4157,-0x1a9*-0x13+0x1cc4+-0x3867))/(-0x3*0x31f+-0x3*-0xb71+0x150e*-0x1),'want':_0x25545f[_0x2d94e0(0x858)](Math['round'](_0x25545f[_0x2d94e0(0x2b3)](_0x474b28,-0xb*0x32b+-0x2499+0x4b5a)),0x7fe+-0x11d+-0x2f9),'off':Math[_0x2d94e0(0x494)](_0x33e0b4*(0x1*0x65b+0x484*0x1+0x6f7*-0x1))/(0x1*-0x1370+0x1*0x16f7+0x61)});if(Math[_0x2d94e0(0x419)](_0x33e0b4)>Math['abs'](_0xf04d19[_0x2d94e0(0x471)+_0x2d94e0(0x333)])){if(_0x25545f[_0x2d94e0(0x532)]!=='UvVef'){var _0x1bc9ff=_0x42fca1[_0x4dfa0d[_0x1ef470]],_0x4c7c1c=_0x3eb409(_0x4c5423[_0x2d94e0(0x266)],_0x1bc9ff[_0x2d94e0(0x936)]);_0x4c7c1c['hits']=_0x1bc9ff[_0x2d94e0(0xa4e)],_0x4c7c1c['first'+_0x2d94e0(0xda2)+'s']=_0x1bc9ff[_0x2d94e0(0x738)+_0x2d94e0(0x599)]-_0x3046d8,_0x4c7c1c[_0x2d94e0(0xb64)+'al']=!!_0x567394&&_0x4c7c1c['refs'][_0x2d94e0(0x6c5)]==='0x'+_0x4047e1[_0x2d94e0(0x834)+_0x2d94e0(0x2fe)](0x18b6+0x1a2f+-0x32d5);if(_0x4c7c1c[_0x2d94e0(0x7e8)]['healt'+'h']){var _0x37dd4b=_0x1352ef(_0x4c7c1c[_0x2d94e0(0x7e8)][_0x2d94e0(0x80f)+'h'],0x147b+-0x1674+0x1*0x209);_0x4c7c1c[_0x2d94e0(0x80f)+'h']=_0x1ba1be(_0x37dd4b,_0x4c5423['slVeK'],_0x4c5423[_0x2d94e0(0x5dd)]);}_0x4f053e['playe'+'rs'][_0x2d94e0(0x90b)](_0x4c7c1c);}else _0xf04d19[_0x2d94e0(0x471)+_0x2d94e0(0x333)]=Math[_0x2d94e0(0x494)](_0x33e0b4*(0xd*0x8b+0x10f7+-0x141e))/(-0xe7f+-0x12+0x1*0x1279),_0xf04d19[_0x2d94e0(0x471)+_0x2d94e0(0x3bf)+'ng']=Math[_0x2d94e0(0x494)](_0x493708['beari'+'ng']);}}}if(_0x1587ec[_0x2d94e0(0x8a7)]&&_0x1587ec[_0x2d94e0(0x538)]&&_0x1587ec[_0x2d94e0(0xa2e)]){var _0x5850ef=_0x1587ec[_0x2d94e0(0x538)][_0x2d94e0(0x2b7)];if(Math[_0x2d94e0(0x419)](_0x5850ef[-0x1*-0x27b+0x1*0x1763+-0x1*0x19dd])<-0x1030+-0x14ac+0x126e*0x2+0.01){var _0x44f236=(_0x2d94e0(0x4e3)+'|1|0')[_0x2d94e0(0xb76)]('|'),_0x24cb43=0xc8a+-0x16e0+-0x2a*-0x3f;while(!![]){switch(_0x44f236[_0x24cb43++]){case'0':if(_0x483b46){var _0xb20e31=(-0x194*0x8+0x29*0x81+0xb*-0xbb+0.5-_0x25545f[_0x2d94e0(0x870)](_0x483b46['y'],_0xf04d19[_0x2d94e0(0x22d)+'s']['h']))*(0x2*0x714+-0xb22+-0xc1*0x4),_0xf06b76=_0x25545f['FhQYU'](_0x25545f[_0x2d94e0(0x853)](_0x2d9389,_0x3d96a1),_0x596ad8);_0xf04d19['verti'+'cal']={'got':_0x25545f[_0x2d94e0(0x704)](Math[_0x2d94e0(0x494)](_0xb20e31*(-0xf0d*-0x1+-0x2b4+-0x871)),-0xa1d+-0x1472+-0x3*-0xb7d),'want':Math[_0x2d94e0(0x494)](_0xf06b76*(-0x1*0x189d+0x180a+0x47b*0x1))/(-0xb88+-0x3*-0x3+0xf67),'off':Math[_0x2d94e0(0x494)](_0x25545f[_0x2d94e0(0x4d7)](_0xb20e31-_0xf06b76,-0x20c8+-0xd3+0x2583))/(-0x7a4*-0x4+-0x1727+-0x381)};}continue;case'1':var _0x483b46=_0x25545f[_0x2d94e0(0x8d7)](_0x5c3c9c,_0x1587ec[_0x2d94e0(0x8a7)],_0x5c3319,_0x51a407,_0xf04d19[_0x2d94e0(0x22d)+'s']['h']);continue;case'2':var _0x5c3319=[_0x1587ec[_0x2d94e0(0x8a7)][0xe*-0x25c+-0x194c+0x3a54]+_0x5850ef[-0x1*-0x41c+-0x407+0x15*-0x1]*_0x3d96a1,_0x25545f[_0x2d94e0(0xd62)](_0x25545f[_0x2d94e0(0x96a)](_0x1587ec['pos'][0x79d+0x1c0d*0x1+0x1*-0x23a9],_0x5850ef[-0x1*0x12d1+0x2*-0xe37+0x2f40]*_0x3d96a1),_0x2d9389),_0x25545f[_0x2d94e0(0xb66)](_0x1587ec[_0x2d94e0(0x8a7)][0x1c85+-0x1a18+-0x26b],_0x25545f[_0x2d94e0(0x9b8)](_0x5850ef[0x2012*0x1+0x1207+0x1*-0x3217],_0x3d96a1))];continue;case'3':var _0x596ad8=Math['tan'](_0x1587ec[_0x2d94e0(0xa2e)]*Math['PI']/(-0x1*0x18d9+-0x19c4+0x97*0x57)/(-0x1*-0x5+0x240*0x8+-0x1203));continue;case'4':var _0x3d96a1=0x43*-0x2d+-0x763*-0x5+-0x1*0x191e,_0x2d9389=0x19bb+-0x259*0x3+0x12af*-0x1;continue;}break;}}}return _0xf04d19;}var _0x15fdbf=0x259b+0x2091*0x1+-0x462b+0.75,_0x27d246=0x1*-0x1669+0x23cc+0x95*-0x17+0.25,_0x559e58=0x257*0x10+-0x1a1e*-0x1+-0x1*0x3f8e+0.42;function _0x1fdc7f(_0x38320e){var _0x568938=_0x419cc1,_0x1fbd03=_0x1e3610;if(!_0x1fbd03)return;var _0x42a6de=_0x1fbd03['cv'][_0x568938(0x6d1)+'ntext']&&_0x1fbd03['cv'][_0x568938(0x6d1)+_0x568938(0xc2f)]('2d');if(!_0x42a6de)return;var _0x305b63=_0x5d3b94(_0x1fbd03);_0x42a6de['clear'+_0x568938(0x16f)](-0x2522+0x70*-0x2+0x3cd*0xa,0x88*-0xc+0x9d9*0x2+0x1*-0xd52,_0x305b63['w'],_0x305b63['h']);if(!_0x116441['boxes']||!_0x38320e||!_0x38320e['me'])return;var _0x6c2032=_0x38320e['me'],_0x1d56c8=null,_0x1c8e1d=_0x5c7ec5[_0x568938(0x75d)+_0x568938(0x6f4)+_0x568938(0xcd1)+'nc']||{},_0x1434d2=Object[_0x568938(0xbac)](_0x1c8e1d);for(var _0x4054ee=0xec6+0x1af8*-0x1+-0x2*-0x619;_0x4054ee<_0x1434d2[_0x568938(0xa1b)+'h'];_0x4054ee++){var _0x2a115e=_0x16ec12(_0x1c8e1d[_0x1434d2[_0x4054ee]][_0x568938(0x936)],0x1*-0x9a+0xd*0x15c+-0x10de,0x8d0+-0x25a5+0x1cd8);if(_0x2a115e&&_0x2a115e[-0xd79+-0x3*-0x21d+0x722]===-0x982+0x1f4a+-0x15c8&&_0x2a115e[0x1b35+0x49*0x64+0x1bdc*-0x2]===-0x152f+-0xf*0xd3+0x1c4*0x13&&_0x2a115e[-0x15ed+-0x268+0x1857]===0xcd0+0x5*-0xb5+0x13*-0x7d){_0x1d56c8=_0x25545f[_0x568938(0x15a)](_0x2ee0ee,_0x25545f[_0x568938(0xa9d)](_0x1c8e1d[_0x1434d2[_0x4054ee]]['ptr'],-0xb*0xb5+0x1650+0x1*-0xe31),_0x568938(0xbd8));break;}}for(var _0x8b1206=0x5*0x1+0x779*-0x4+0x1*0x1ddf;_0x25545f[_0x568938(0xae2)](_0x8b1206,_0x38320e[_0x568938(0x1de)]['lengt'+'h']);_0x8b1206++){var _0x2d7c77=_0x38320e['list'][_0x8b1206],_0x1480f2=_0x25545f['bbKPc'](_0x1d56c8,null)&&_0x25545f['GyRLx'](_0x2d7c77[_0x568938(0x9e1)],_0x1d56c8),_0x183c9b=_0x5c3c9c(_0x6c2032[_0x568938(0x553)],[_0x2d7c77['x'],_0x25545f['eZqdy'](_0x2d7c77['y'],_0x27d246),_0x2d7c77['z']],_0x305b63['w'],_0x305b63['h']),_0x279d98=_0x5c3c9c(_0x6c2032[_0x568938(0x553)],[_0x2d7c77['x'],_0x2d7c77['y']+_0x15fdbf,_0x2d7c77['z']],_0x305b63['w'],_0x305b63['h']);if(_0x25545f[_0x568938(0xa54)](!_0x183c9b,!_0x279d98))continue;var _0x1e9396=Math['abs'](_0x25545f['ZnFJm'](_0x279d98['y'],_0x183c9b['y']));if(!_0x25545f[_0x568938(0x9e8)](_0x1e9396,0x4e5+0xe63+0x269*-0x8))continue;var _0x53c8d8=Math['max'](0x4*-0x2a8+-0x31b+0xdbd,Math[_0x568938(0xc96)](0x1d55+-0x1*-0x21d+-0x1f18,_0x25545f[_0x568938(0xd19)](_0x1e9396,_0x559e58)));if(_0x1e9396>0x2606+0x66*0x1a+0x2ebe*-0x1)continue;var _0x347bb0=(_0x183c9b['x']+_0x279d98['x'])/(-0x1c76+0x21a4+-0x52c*0x1),_0x4656ef=_0x25545f['NpiMy'](_0x183c9b['y']+_0x279d98['y'],0x1093*-0x2+0x3*-0x441+0x2deb);_0x42a6de[_0x568938(0xd74)+'eStyl'+'e']=_0x1480f2?'rgba('+_0x568938(0x589)+_0x568938(0x811)+_0x568938(0x32f):_0x25545f['fwxPU'],_0x42a6de[_0x568938(0x871)+_0x568938(0x93e)]=_0x1480f2?0x2457+-0x56*0x65+0x8*-0x4d:0x1*0x1d27+0x79b+-0xa8*0x38,_0x42a6de['strok'+'eRect'](_0x347bb0-_0x25545f['JJXEI'](_0x53c8d8,0x563+-0x62b+0xca),_0x4656ef-_0x1e9396/(-0x59*-0x33+-0xeb6+-0x303),_0x53c8d8,_0x1e9396),!_0x1480f2&&(_0x42a6de[_0x568938(0x73f)+'tyle']=_0x568938(0xc31)+_0x568938(0x9ee)+'10,11'+_0x568938(0xa98)+')',_0x42a6de[_0x568938(0x50e)]=_0x568938(0xcc6)+_0x568938(0x4fe)+'nospa'+_0x568938(0x7b4)+_0x568938(0x78b)+'s,mon'+'ospac'+'e',_0x42a6de[_0x568938(0x6f2)+_0x568938(0x267)](_0x25545f['cMJTT'](Math['round'](_0x2d7c77['d']||0x168b+0x1b98+0x5*-0xa07),'m'),_0x25545f['ifsgt'](_0x347bb0,_0x25545f[_0x568938(0x406)](_0x53c8d8,0x557*-0x5+0x446+0x1*0x166f)),_0x4656ef-_0x25545f[_0x568938(0x8f8)](_0x1e9396,0xce*-0x1b+-0x1bc6+0x3182)-(0x2551+0xdf6+-0x3344)));}}function _0x265e09(){var _0x217910=_0x419cc1,_0x2ef10a={'AQxub':function(_0xad9bc9,_0x4dc59a){return _0xad9bc9===_0x4dc59a;},'divtl':'obfF','PsTKZ':function(_0x445ecf,_0x387a4e){var _0x4fd696=_0x29e5;return _0x25545f[_0x4fd696(0xd58)](_0x445ecf,_0x387a4e);},'vYujw':function(_0x49ec9f,_0x3ff345){return _0x49ec9f|_0x3ff345;},'LwXBV':function(_0x1f39c5,_0x48093d){var _0x306c2e=_0x29e5;return _0x25545f[_0x306c2e(0x62f)](_0x1f39c5,_0x48093d);},'mSNGy':function(_0xe918d9,_0x180044){return _0xe918d9!==_0x180044;}};if(_0x217910(0x9f9)===_0x25545f[_0x217910(0xbb8)])_0x1b7d5d=_0x58b167(_0x4404cb);else{var _0x42f36c=_0x1b8dc6();if(!_0x42f36c||!_0x42f36c['cv'])return;try{var _0x2f8ca9=_0x42f36c['cv']['getCo'+'ntext']&&_0x42f36c['cv']['getCo'+'ntext']('2d');if(!_0x2f8ca9)return;var _0x4fe87f=_0x42f36c['cv']['width'],_0x1aef60=_0x25545f[_0x217910(0xabe)](_0x4fe87f,0x1fb5+0x6*0x243+-0x2d45),_0x4ff1d2=_0x233afb(),_0x1a05f4=_0x4ff1d2['me'];_0x2f8ca9[_0x217910(0x846)+_0x217910(0x16f)](-0x1fdc+0x11ef*0x2+-0x402,0x13b+0xc*-0x296+0x1dcd*0x1,_0x4fe87f,_0x4fe87f),_0x2f8ca9['strok'+_0x217910(0x350)+'e']=_0x25545f[_0x217910(0x943)],_0x2f8ca9[_0x217910(0x871)+'idth']=0x1f3*0x1+0x229e+-0x2490;for(var _0xdf904d=-0x1774*-0x1+0x1edf+-0x332*0x11;_0x25545f['OVTlC'](_0xdf904d,-0xa3e*0x1+0x5cd*-0x3+0x1ba8);_0xdf904d++){_0x2f8ca9['begin'+_0x217910(0x698)](),_0x2f8ca9[_0x217910(0x276)](_0x1aef60,_0x1aef60,_0x25545f['OqFAE'](_0x25545f['PWrMD'](_0x1aef60-(0x6*-0x16f+0x688+0x2*0x10b),_0xdf904d),-0xd*0x118+0x607*0x5+-0xfe8),-0x12f0*-0x2+0xd3*0x2e+-0x4bca,_0x25545f['TWqsG'](Math['PI'],0x16dd+0xf94+-0x266f*0x1)),_0x2f8ca9['strok'+'e']();}_0x2f8ca9[_0x217910(0x251)+'Path'](),_0x2f8ca9[_0x217910(0x85c)+'o'](-0x259*0x4+0x17*0x8b+-0x315,_0x1aef60),_0x2f8ca9['lineT'+'o'](_0x4fe87f-(-0xcf2*-0x2+-0x1257+-0x789*0x1),_0x1aef60),_0x2f8ca9[_0x217910(0x85c)+'o'](_0x1aef60,-0x187f*0x1+0x1f84+-0x701),_0x2f8ca9[_0x217910(0xa7c)+'o'](_0x1aef60,_0x4fe87f-(0x1b14*0x1+0x26a3+-0x5f9*0xb)),_0x2f8ca9[_0x217910(0xd74)+'e']();if(!_0x1a05f4){if(_0x42f36c['lg'])_0x42f36c['lg'][_0x217910(0xe00)+_0x217910(0x7d1)+'t']='';return;}var _0x1fd9d1=(_0x1aef60-(-0xa33+-0x885+-0x12be*-0x1))/_0x116441['span'],_0x58f2ff=null,_0x3d4153=_0x5c7ec5[_0x217910(0x75d)+'nNetw'+_0x217910(0xcd1)+'nc']||{},_0x59349b=Object['keys'](_0x3d4153);for(var _0x3c63d8=0x109a+-0x3b*0x4+-0xfae;_0x3c63d8<_0x59349b[_0x217910(0xa1b)+'h'];_0x3c63d8++){if(_0x217910(0xcf8)!=='UiXQe'){var _0x214314={'wKtGv':function(_0x26fe32,_0x4a4d4c){return _0x26fe32/_0x4a4d4c;}},_0x4df649=_0x581643[_0x22c41e]['xyz']||[_0xd83294[_0x5e9cf2]['v'],0x8e*0x3e+0x10*-0x244+0x7*0x44,0x1976+0x1907+0xa19*-0x5];return _0x4df649[_0x217910(0x8fa)](function(_0x29b87e){return _0x214314['wKtGv'](_0x53b87f['round'](_0x29b87e*(0x2*-0x6bf+-0x3a*0x63+0x2450)),-0x1eb6+0x25*-0x5+-0x1fd3*-0x1);})['join']('\x20\x20');}else{var _0x4373fe=_0x25545f[_0x217910(0xabc)](_0x16ec12,_0x3d4153[_0x59349b[_0x3c63d8]]['ptr'],-0x1c02+0xdfd*0x2+-0xf*-0x4,-0x6*-0x1a3+0x11c7+-0x1b96);if(_0x4373fe&&_0x25545f['bXTra'](_0x4373fe[0x1634+0xe11+-0x2445],-0x2246+0x718+0x1b2e)&&_0x4373fe[-0x9e6+0x1*0xf2a+-0x543]===0xae8*-0x2+0x7*0x8a+0x120a&&_0x4373fe[0x2*0x53e+0x1*0xed1+-0x194b]===-0x1*0x24fb+0x137b*0x1+0x1180){if(_0x25545f[_0x217910(0xbfc)](_0x25545f['pXXVJ'],'iQIFH')){_0x58f2ff=_0x25545f[_0x217910(0x441)](_0x2ee0ee,_0x25545f[_0x217910(0x531)](_0x3d4153[_0x59349b[_0x3c63d8]]['ptr'],0xb17+0x1220*-0x1+-0x1*-0x761),_0x25545f[_0x217910(0xb37)]);break;}else{var _0xe3f19f=_0x25545f[_0x217910(0x2a5)][_0x217910(0xb76)]('|'),_0x3ccb44=0xe*-0x26+0x2340+-0x212c;while(!![]){switch(_0xe3f19f[_0x3ccb44++]){case'0':if(_0x25545f[_0x217910(0x601)](_0x364bc2['k'],_0x217910(0xbd4)))return _0x25545f['PPpSO'](_0xa3d1e6,0x1*-0x1247+0x103a+-0x7*-0x4b)||_0xa3d1e6===0x262d+-0x6*0x254+-0x1834;continue;case'1':if(typeof _0xd761f7!==_0x217910(0x8fd)+'r'||!_0x445b7e(_0xd761f7))return!![];continue;case'2':if(_0x25545f[_0x217910(0xdc8)](_0x2f0d10[_0x217910(0x9fd)],-0x414+-0x2e*0xb1+0x23e3))return _0x2bc98b[_0x217910(0x419)](_0x25545f[_0x217910(0x1e2)](_0xa3d1e6,_0xd761f7))<=_0x1e8904[_0x217910(0x932)](-0x7*-0xc+0x7d*0xb+0xf3*-0x6,_0x426468['abs'](_0xd761f7)*(0x1a3*-0x2+-0x19b+0x4e1+0.6));continue;case'3':var _0xa3d1e6=_0x2fdef3['v'];continue;case'4':var _0xd761f7=_0x278cfc['fake'];continue;case'5':if(_0x25545f['glkNY'](typeof _0xa3d1e6,_0x217910(0x8fd)+'r')||!_0x4ee928(_0xa3d1e6))return![];continue;case'6':return _0x4f277b['abs'](_0xa3d1e6)<0x8642fe1*-0x9+-0x6c8da516+0xf3ae1dff;}break;}}}}}var _0x2d2eb0=-0x3c9*-0x5+-0x19b9+0x6cc;for(var _0x55deaf=0x523+-0x6c1*-0x3+-0x1966;_0x25545f[_0x217910(0x1a9)](_0x55deaf,_0x4ff1d2['list']['lengt'+'h']);_0x55deaf++){if(_0x25545f[_0x217910(0xbd1)]===_0x25545f[_0x217910(0x9f4)]){if(_0x2ef10a[_0x217910(0x32a)](_0xfe6b82,_0x2ef10a[_0x217910(0x530)]))return _0x156f0e(_0x2ef10a[_0x217910(0x399)](_0x26e653,_0x27811b));if(_0x2ef10a[_0x217910(0x32a)](_0x2bfde5,_0x217910(0x631)))return _0x2ef10a['vYujw'](_0x2ef10a['LwXBV'](_0x4ce9d0,_0x3d743d),-0x5a4+0x1a56+-0x14b2);return _0x2ef10a[_0x217910(0x806)](_0x2ef10a['PsTKZ'](_0x590783,_0x205f2a)&-0x6f2*-0x1+0x544+-0xb37,-0xc81+-0x252d+0x31ae)?-0x1718+-0x1*-0x1475+0xd*0x34:-0x17c9+-0x1ea1*-0x1+-0x6d8;}else{var _0x27c401=_0x4ff1d2[_0x217910(0x1de)][_0x55deaf],_0x3a76ee=_0x25545f['gMMPu'](_0x25545f[_0x217910(0xc75)](_0x27c401['x'],_0x1a05f4[_0x217910(0x913)][-0x8e*0x22+0x6ac+0xc30]),_0x1fd9d1),_0x1dfe03=_0x25545f[_0x217910(0xd29)](_0x25545f['QjxGe'](_0x27c401['z'],_0x1a05f4[_0x217910(0x913)][0x49*0x4f+-0x99a+-0xceb*0x1]),_0x1fd9d1),_0x1b0601=Math['sqrt'](_0x3a76ee*_0x3a76ee+_0x1dfe03*_0x1dfe03),_0x3053c3=_0x1aef60,_0x3dfc4a=_0x1aef60;_0x1b0601>_0x1aef60-(0x76e+-0x1*0x270d+-0x1fa5*-0x1)?(_0x3053c3=_0x25545f[_0x217910(0x32b)](_0x1aef60,_0x25545f[_0x217910(0x740)](_0x3a76ee/_0x1b0601,_0x1aef60-(-0x2f*0x47+0x11c*-0xe+-0xd*-0x233))),_0x3dfc4a=_0x25545f[_0x217910(0xa4f)](_0x1aef60,_0x25545f['czrmA'](_0x25545f[_0x217910(0x870)](_0x1dfe03,_0x1b0601),_0x1aef60-(0x1ad3+0x30a*-0x2+-0x14b9)))):_0x25545f[_0x217910(0x3bd)]===_0x217910(0x54e)?(_0x3053c3=_0x25545f[_0x217910(0x6c1)](_0x1aef60,_0x3a76ee),_0x3dfc4a=_0x25545f[_0x217910(0x451)](_0x1aef60,_0x1dfe03)):(_0x1ef05a['sp']['textC'+'onten'+'t']=_0x502869['on']?_0x25545f['wleox']:_0x217910(0x9fb)+_0x217910(0x76e),_0x15a6eb['sp'][_0x217910(0xbf4)][_0x217910(0xc44)+_0x217910(0x494)]=_0x505a59['on']?_0x3e84f4:'trans'+_0x217910(0x3dc)+'t',_0x2b0763['sp'][_0x217910(0xbf4)][_0x217910(0x8d2)]=_0x979288['on']?_0x217910(0x8a6)+'1b':_0x25545f[_0x217910(0x159)]);var _0x501174=_0x58f2ff!==null&&_0x27c401[_0x217910(0x9e1)]===_0x58f2ff;_0x2f8ca9[_0x217910(0x73f)+_0x217910(0xc9f)]=_0x501174?'#4f8f'+'6a':_0x25545f[_0x217910(0x84b)],_0x2f8ca9[_0x217910(0x251)+'Path'](),_0x2f8ca9['arc'](_0x3053c3,_0x3dfc4a,_0x501174?-0xa98*-0x3+0xfdd*0x1+-0x2fa3:-0x5*-0x28d+0x26ea+-0xcea*0x4+0.20000000000000018,-0xf02+-0x232b+0x322d,Math['PI']*(0x1*0x4ad+0x13f3*-0x1+-0x1*-0xf48)),_0x2f8ca9['fill'](),_0x2d2eb0++;}}_0x2f8ca9['fillS'+_0x217910(0xc9f)]=_0x217910(0xc4d)+'a8',_0x2f8ca9['begin'+_0x217910(0x698)](),_0x2f8ca9['arc'](_0x1aef60,_0x1aef60,0x17a+0x961+-0x1*0xad8,-0x11fb+0x174b+-0x550,_0x25545f[_0x217910(0x5bf)](Math['PI'],0x173f+0x7*0x36+0x3*-0x83d)),_0x2f8ca9['fill'](),_0x42f36c['lg']&&(_0x42f36c['lg'][_0x217910(0xe00)+_0x217910(0x7d1)+'t']=_0x25545f['FPtWz'](_0x25545f[_0x217910(0xbb9)]('esp\x20'+_0x2d2eb0+_0x25545f[_0x217910(0x80d)]+Math[_0x217910(0x494)](_0x116441['span'])+'m',_0x116441[_0x217910(0x3ca)]?_0x25545f['gbKBV'](_0x25545f['GPTfA']+Math[_0x217910(0x494)](_0x9e54cb['fov']),'°'):''),_0x58f2ff!==null?_0x25545f['vKXeX'](_0x25545f[_0x217910(0x37a)],_0x58f2ff):''));}catch(_0x741dfa){}}}function _0x104fe0(){var _0x398d45=_0x419cc1,_0x5b5790=_0x5c7ec5[_0x398d45(0x75d)+_0x398d45(0x6f4)+_0x398d45(0xcd1)+'nc']||{};if(!Object['keys'](_0x5b5790)['lengt'+'h'])return![];return!!_0x25545f[_0x398d45(0x58d)](_0x43c5e2);}function _0x45640f(_0x422d47){var _0x36a6b1=_0x419cc1;try{var _0x1a3849=_0x1ba09e;if(_0x1a3849&&_0x1a3849['el'])_0x1a3849['el'][_0x36a6b1(0xbf4)][_0x36a6b1(0x747)+'ay']=_0x422d47?'':_0x36a6b1(0x165);var _0x22bdab=_0x1e3610;if(_0x22bdab&&_0x22bdab['cv'])_0x22bdab['cv']['style'][_0x36a6b1(0x747)+'ay']=_0x422d47?'':_0x25545f[_0x36a6b1(0x9f7)];}catch(_0x400ccc){}}var _0x3836a6=-0x33*0x18+0x1*-0x529+0x9f1,_0x3ee658=-0x2192+-0xbff+-0x91d*-0x5;function _0x11e44f(_0x319a28){var _0x354f3a=_0x419cc1;typeof requestAnimationFrame==='funct'+_0x354f3a(0xc6b)?_0x3836a6=requestAnimationFrame(_0x1887f6):_0x3ee658=setTimeout(_0x1887f6,_0x319a28||-0x1bbb+-0xf26+0x1*0x2b13);}function _0x1887f6(){var _0x3ff331=_0x419cc1,_0x204952={'BgDaR':function(_0x7ffca2,_0x3f4477){return _0x7ffca2===_0x3f4477;},'rJahM':_0x3ff331(0xb34)};_0x3836a6=0x718+0x1*0x2429+-0x2b41;if(!_0x116441['on']||!_0x104fe0()){if(_0x3ff331(0xccd)===_0x25545f['XKZWW']){var _0x19a059=new _0xc6dd97('sakur'+_0x3ff331(0x8c0));_0x19a059[_0x3ff331(0x24c)+'sage']=function(_0x53b362){var _0x51d3ea=_0x3ff331,_0x4d7ccf=_0x53b362[_0x51d3ea(0x9db)];if(_0x4d7ccf&&_0x204952[_0x51d3ea(0x7d8)](_0x4d7ccf[_0x51d3ea(0x375)+'ura'],_0x1d30f9)&&_0x4d7ccf['kind']===_0x204952['rJahM'])_0x1c6fc1(_0x4d7ccf['cmd'],_0x4d7ccf[_0x51d3ea(0x67e)]);};}else{_0x25545f[_0x3ff331(0x669)](_0x45640f,![]),_0x25545f[_0x3ff331(0x329)](_0x11e44f,-0x26d0+-0x1820+0x16*0x2ea);return;}}_0x45640f(!![]),_0x5551fa(),_0x1b8dc6();if(_0x116441['boxes'])_0x25545f['NOnby'](_0x2854cb);var _0x2a714e=null;try{_0x8074e2();}catch(_0x2b489d){}try{if(_0x25545f['YHFhl']('DpKFk',_0x25545f['CJxXR']))_0x2a714e=_0x25545f[_0x3ff331(0x84f)](_0x233afb);else return{'o':'0x'+_0x29e3b1[-0x34f*-0x1+0x1597+-0x18e6*0x1][_0x3ff331(0x834)+'ing'](-0x44e+0x1ad5+-0x1677),'v':_0x54353f(_0x571e6e+_0x6577ff[0x1e4c+-0x379*-0x8+-0x3a14],_0x1c82b8[0x1b1b+-0xbc0+-0xf5a])};}catch(_0x341427){}try{_0x25545f[_0x3ff331(0x95b)](_0x265e09);}catch(_0x574c77){}try{_0x1fdc7f(_0x2a714e);}catch(_0x3df19b){}_0x11e44f(0x2498+0x139e*-0x1+0x35*-0x52);}function _0x4f4138(){var _0x187447=_0x419cc1,_0x5ece2b={'vfNgz':'Updat'+'e','DUtak':_0x25545f[_0x187447(0xb37)],'lGQHW':function(_0xde9632){return _0xde9632();},'JgPCN':function(_0x5e319c,_0x2969eb){return _0x5e319c===_0x2969eb;},'dCjsd':function(_0x3a9742){return _0x3a9742();},'VDmKk':function(_0x301145,_0x32e864,_0x112ff9,_0x2b6456,_0x28e330){return _0x301145(_0x32e864,_0x112ff9,_0x2b6456,_0x28e330);},'xWXFE':_0x187447(0xbeb),'EGPzM':function(_0x26bf37,_0x3388ec){return _0x26bf37/_0x3388ec;},'PtiCv':function(_0x115954,_0x294db7){return _0x115954-_0x294db7;},'JyHoj':function(_0x54b6fa,_0x3322d8){var _0x273196=_0x187447;return _0x25545f[_0x273196(0xcca)](_0x54b6fa,_0x3322d8);},'WBGUm':function(_0xb3c7e6,_0x1c8cc1){return _0xb3c7e6/_0x1c8cc1;},'cRfPa':function(_0x1530ef,_0x64df52){var _0x21479e=_0x187447;return _0x25545f[_0x21479e(0x996)](_0x1530ef,_0x64df52);},'RmRhU':function(_0x1ba359,_0x32a823){return _0x1ba359+_0x32a823;},'ftQJm':function(_0x54ddb8,_0x3f3c59){return _0x54ddb8<_0x3f3c59;},'svgzo':function(_0x2d7463,_0xadd7bf,_0x3e232d){return _0x25545f['GATmA'](_0x2d7463,_0xadd7bf,_0x3e232d);},'kUhYE':function(_0x11ea1b,_0x13ec5c){return _0x11ea1b!==_0x13ec5c;},'NwbFp':'sk-ca'+_0x187447(0x4e1)+'ad','vZezw':function(_0x6bc4f8,_0x5c06d6,_0x404ad3,_0x1e3cf6){var _0x39e383=_0x187447;return _0x25545f[_0x39e383(0xc07)](_0x6bc4f8,_0x5c06d6,_0x404ad3,_0x1e3cf6);},'vZKbj':_0x187447(0x191)+_0x187447(0xae7)+_0x187447(0x415),'GACoM':'div','oyNXL':_0x25545f[_0x187447(0x342)]},_0x161a79=window[_0x187447(0x571)+'WebMo'+'dkit']&&window['Unity'+'WebMo'+'dkit'][_0x187447(0x57d)+'me']||null,_0x273271=_0x161a79&&_0x161a79[_0x187447(0x235)+_0x187447(0x4e7)+'ext'],_0x4d931a=_0x273271&&_0x273271[_0x187447(0x2c5)+_0x187447(0x6b2)],_0x4b39f0={},_0x291d13=[];for(var _0x279ceb in _0x2e79eb){if(_0x25545f['GYCTj']===_0x187447(0x676)){_0x4b39f0[_0x279ceb]=_0x25545f[_0x187447(0x39b)]('0x',_0x2e79eb[_0x279ceb][_0x187447(0x936)][_0x187447(0x834)+_0x187447(0x2fe)](0x7e0+0x1*0x13df+-0x13*0x175));if(_0x2e79eb[_0x279ceb][_0x187447(0xadd)+_0x187447(0x2db)])_0x291d13[_0x187447(0x90b)](_0x279ceb);}else try{_0x397ed7();}catch(_0x3e936a){}}var _0x5c8a93={};for(var _0x57365a in _0x2e79eb)_0x5c8a93[_0x57365a]=_0x25545f['ZoKFt'](_0x4b56cb,_0x2e79eb[_0x57365a]['ptr']);var _0x1350df={},_0x20f7f2=null;try{if(_0x25545f[_0x187447(0xc1a)](_0x25545f[_0x187447(0x21f)],_0x187447(0x50d)))_0x1350df=_0x409d10();else{var _0x3ccb52=_0x4216d4[_0x187447(0x571)+'WebMo'+_0x187447(0xba2)]&&_0x3f3ffc['Unity'+_0x187447(0x3c8)+_0x187447(0xba2)][_0x187447(0x57d)+'me'];_0x1532be[_0x187447(0xaf0)]=_0x3ccb52&&_0x3ccb52['__sak'+_0x187447(0x3be)+'g']||null,_0x3f5da7['tagMa'+_0x187447(0x69b)]=!!(_0x3ccb52&&_0x5956e2&&_0x25545f[_0x187447(0x4b4)](_0x3ccb52[_0x187447(0x375)+'uraTa'+'g'],_0xc1d6ab)),_0x3e8723[_0x187447(0xdfc)+_0x187447(0xb86)+'e']=_0x3ccb52&&_0x3ccb52['_game']?typeof _0x3ccb52['_game']:_0x187447(0x165),_0x869d7a[_0x187447(0x691)+'nRunt'+'imeIs'+_0x187447(0x457)+'ted']=!!(_0xc4bd85&&_0x311c16['_runt'+_0x187447(0x47f)]&&_0x25545f['CFqxX'](_0x49e866['_runt'+'ime'],_0x3ccb52)),_0xf95d3d[_0x187447(0x691)+_0x187447(0x525)+_0x187447(0x742)+'me']=_0x5b6d84&&_0x1b1a03[_0x187447(0x1b9)+'ime']&&_0x2c4b4a[_0x187447(0x1b9)+'ime']['_game']?typeof _0x1d5ff9['_runt'+'ime'][_0x187447(0xd59)]:'none';}}catch(_0x4f08b7){_0x20f7f2=_0x25545f[_0x187447(0x854)](String,_0x4f08b7&&_0x4f08b7['messa'+'ge']||_0x4f08b7);}var _0x477901={'version':_0x4b2487,'when':new Date()['toISO'+_0x187447(0x14a)+'g'](),'elapsedMs':Date[_0x187447(0xc8f)]()-_0x5ec9af,'frame':location['href']['slice'](-0x235e+0x218a+0x1d4,-0x1*0x8cb+0x2477+-0x1b34),'host':_0x5d9c77,'frameRole':_0x4028d4,'uwmk':!!_0x161a79,'il2CppContext':!!_0x273271,'typeCount':_0x4d931a?Object['keys'](_0x4d931a)[_0x187447(0xa1b)+'h']:null,'arm':_0x4f85dc,'assemblies':_0x5b82b0,'hooksTotal':_0x23ed4d['lengt'+'h'],'hooksApplied':_0x25545f[_0x187447(0x5f1)](_0x54bdb9),'hooksResolved':_0x1a56b2(),'hooksRegisteredAtArm':_0x4f85dc['hooks'+_0x187447(0x393)+'tered']||0x1f*-0x7+0x213c*-0x1+0x2215,'hookErrors':_0x437528['slice'](-0x1*-0xaed+0x130d+-0x1dfa,0xc34+0x1*0x1de4+-0x2a10),'instances':_0x4b39f0,'classNames':_0x5c8a93,'instancesReplaced':_0x291d13,'hookFireProof':_0x35baed,'survey':_0x1350df,'actkKeys':_0x34bfa9,'surveyRows':Object[_0x187447(0xbac)](_0x1350df)[_0x187447(0x3d7)+'e'](function(_0x36d997,_0x2c6440){var _0x4847ab=_0x187447;return _0x36d997+_0x1350df[_0x2c6440][_0x4847ab(0xa1b)+'h'];},0x143f+0x5*0x105+-0x1958),'reads':{'ok':_0x5c0a6e['ok'],'failed':_0x5c0a6e['faile'+'d'],'lastError':_0x5c0a6e['lastE'+_0x187447(0x1e4)],'source':_0x5c0a6e['sourc'+'e']},'identity':_0xfc3383(),'globals':_0x2c6c24(),'wasmMemory':{'captured':!!_0x2b173d,'atMs':_0x7010d5,'bytes':(function(){var _0x3dea1d=_0x187447;if(_0x3dea1d(0xb20)===_0x25545f['jpVOh'])try{return _0x2b173d&&_0x2b173d[_0x3dea1d(0xa39)+'r']?_0x2b173d['buffe'+'r'][_0x3dea1d(0x603)+'ength']:0x422+-0x8*-0x2f4+-0x143*0x16;}catch(_0x348bdd){return 0x2*0x10b1+0x1308+-0x1*0x346a;}else{if(_0x247dd6[_0x3dea1d(0x506)])return _0x303fb5;return _0x2b412a();}}()),'exportKeys':_0x4c203c},'diff':_0x14b2ed[_0x187447(0x634)](-0xa76+0x3*0x251+0x1*0x383,0x34*-0xac+0x2295*-0x1+0x45ad),'speed':{'on':_0x241f20['on'],'factor':_0x241f20['facto'+'r'],'writes':_0x3cc99f,'scaled':_0x1968dd[_0x187447(0x634)](0x224a+-0x1*-0xc6d+0x1*-0x2eb7,-0x47*0x7f+-0xd*-0x2f7+-0x1a1*0x2),'skipped':_0x20e579[_0x187447(0x634)](-0x521+-0x1331+0x1852,0x1*0xba5+0x1d*0x1+-0xbb2)},'esp':_0x5c7d8e(),'view':_0x25545f['NAKLQ'](_0x383ec9),'camera':(function(){var _0x1a7910=_0x187447;try{var _0x1854f4=_0x8074e2();return{'ok':_0x1854f4['ok'],'source':_0x1854f4[_0x1a7910(0x5fb)+'e'],'why':_0x1854f4[_0x1a7910(0xdcf)],'tried':_0x1854f4[_0x1a7910(0x506)],'camPtr':_0x25545f[_0x1a7910(0x476)]('0x',_0x1854f4['camPt'+'r'][_0x1a7910(0x834)+'ing'](0x1c19*0x1+-0x15e2+0x4b*-0x15)),'tfPtr':_0x25545f['ITkiN']('0x',_0x1854f4[_0x1a7910(0x1f4)][_0x1a7910(0x834)+_0x1a7910(0x2fe)](-0xd3a+-0x230d+0x3057)),'fov':_0x1854f4[_0x1a7910(0xa2e)],'quat':_0x1854f4[_0x1a7910(0x6fa)],'pos':_0x1854f4['pos'],'basis':_0x1854f4[_0x1a7910(0x538)],'errors':_0x1854f4[_0x1a7910(0x97b)+'s']['slice'](-0xdd3*-0x1+0x1af*-0x2+-0xa75,-0x1c27+0x54*0x37+0x1*0xa1f)};}catch(_0x1630a6){return{'ok':![],'error':String(_0x1630a6&&_0x1630a6[_0x1a7910(0x650)+'ge']||_0x1630a6)[_0x1a7910(0x634)](0x145d+-0x83+-0x42*0x4d,-0x1cd9+0x2463+-0xb5*0xa)};}}()),'angles':(function(){var _0x36ee22=_0x187447,_0x2eaef1={'UUXrF':function(_0x305332,_0x49a92d){var _0x1ec749=_0x29e5;return _0x5ece2b[_0x1ec749(0xacd)](_0x305332,_0x49a92d);},'rAaHa':_0x36ee22(0xaee),'mVdVJ':function(_0x14bb60){var _0x47d977=_0x36ee22;return _0x5ece2b[_0x47d977(0x9fe)](_0x14bb60);}},_0x37be9e=_0x4e9051(),_0x22a01d=null,_0x28a028=null,_0x1c2b6e=_0x5ece2b[_0x36ee22(0x2af)](_0x43c5e2);if(_0x1c2b6e){var _0x13b775=_0x5ece2b[_0x36ee22(0xcba)](_0x5c3c9c,_0x1c2b6e[_0x36ee22(0x553)],[_0x1c2b6e[_0x36ee22(0x553)][0x1e23+0x25ed+0x10*-0x441],_0x1c2b6e[_0x36ee22(0x553)][-0x351*0x5+-0x28*0xde+0x2*0x19a3],_0x1c2b6e[_0x36ee22(0x553)][0x17b+-0x1caa+-0x1b31*-0x1]+(-0x12*-0x1b7+-0x378*-0x7+0x1*-0x3725)],0x1a21+-0x1d78+0x73f,0x1197*-0x1+-0x1*-0x86+0x14f9);if(_0x13b775){if(_0x5ece2b[_0x36ee22(0xa5a)]!=='RLJia'){var _0x11ee8d=_0x4441ba[_0x36ee22(0x91a)+'refix']({'typeName':_0x18fbd0[_0x36ee22(0x62a)],'methodName':_0x5ece2b[_0x36ee22(0x64a)],'params':[_0x5ece2b['DUtak'],_0x5ece2b[_0x36ee22(0xd27)]],'returnType':_0x8b355c},_0x46248b(_0x46a8ea[_0x36ee22(0x62a)],_0x22fa61[_0x36ee22(0xaf7)],_0xff532['many']));_0x4638fd['push']({'type':_0x575524['type'],'hook':_0x11ee8d,'keep':_0x380e0e[_0x36ee22(0xaf7)]});}else _0x22a01d=_0x13b775['x']/(0x19c9+-0x14c6+-0x11b),_0x28a028=_0x5ece2b[_0x36ee22(0xdfb)](_0x13b775['y'],-0x7a3+0x37*-0x6d+0xb3*0x32);}}var _0x186e22=null,_0x182d40=null;if(_0x1c2b6e){var _0x5502db=_0x5ece2b[_0x36ee22(0xcba)](_0x5c3c9c,_0x1c2b6e['eye'],[_0x1c2b6e[_0x36ee22(0x553)][-0x2*-0x1267+-0x1*-0x1934+-0x3e02],_0x1c2b6e[_0x36ee22(0x553)][-0xb*0x2+0x147a+-0x11*0x133]+(0x422+0x25*0xc+0x4*-0x175),_0x1c2b6e[_0x36ee22(0x553)][-0x20f+-0xba4+0xdb5]+(0x60*0x49+0xa8a+-0x1*0x25e0)],0xb8*-0x17+-0xd14+0x2184,-0x1a*0xeb+-0x3*0x457+0x28cb);if(_0x5502db)_0x186e22=_0x5ece2b[_0x36ee22(0xdfb)](_0x5502db['y'],-0x1b49+-0x1c5*-0x1+0x434*0x7);var _0xbbf0c3=_0x5c3c9c(_0x1c2b6e[_0x36ee22(0x553)],[_0x1c2b6e['eye'][0x18dd+0x1*-0x21ff+0x922],_0x5ece2b['PtiCv'](_0x1c2b6e['eye'][-0x9f*-0x9+-0x2a7*0xb+0x1797],-0x9e3*-0x3+-0x111d+0xc82*-0x1),_0x5ece2b[_0x36ee22(0xae8)](_0x1c2b6e[_0x36ee22(0x553)][-0x20aa+0xa99*0x1+0x1613*0x1],0x1cc5+0x977*-0x3+-0x56)],0x1f*-0x43+0x821+0x3e4,0x91+0x10ee*0x2+-0x1e85);if(_0xbbf0c3)_0x182d40=_0x5ece2b[_0x36ee22(0x4f1)](_0xbbf0c3['y'],0x17e3+0xdc4+-0x21bf);}return{'identified':_0x3231bb['ident'+_0x36ee22(0x66c)],'why':_0x3231bb[_0x36ee22(0xdcf)],'source':_0x3231bb['sourc'+'e'],'viewHooks':(function(){var _0x31ae9b=_0x36ee22,_0x1085e4={'HEwXX':function(_0x4ea401,_0x5a3e01){var _0x3bb98d=_0x29e5;return _0x2eaef1[_0x3bb98d(0xa17)](_0x4ea401,_0x5a3e01);},'deCEE':function(_0xd85cfd,_0x8ec282){var _0x2626f7=_0x29e5;return _0x2eaef1[_0x2626f7(0xa17)](_0xd85cfd,_0x8ec282);}};if(_0x31ae9b(0xd16)!==_0x2eaef1[_0x31ae9b(0x85d)])try{return _0x2eaef1[_0x31ae9b(0xc8c)](_0x1cdc27);}catch(_0x3c6748){return{'err':String(_0x3c6748&&_0x3c6748['messa'+'ge']),'stack':String(_0x3c6748&&_0x3c6748['stack'])};}else return _0x1085e4[_0x31ae9b(0x995)](_0xd1697['lo'],null)||_0x1085e4['deCEE'](_0x3c693a['hi'],null)?0x249e+0x1714+-0x3bb2:_0x527851['hi']-_0x297d14['lo'];}()),'setterPair':(function(){var _0x26e3cd=_0x36ee22,_0x3e120f=_0x5ece2b['lGQHW'](_0xcba669);return _0x3e120f?{'a':_0x3e120f[_0x26e3cd(0x4ac)],'b':_0x3e120f['rawB'],'hits':_0x3e120f['hits'],'order':_0x3e120f['order']}:null;}()),'yawAt':_0x3231bb[_0x36ee22(0xa69)+_0x36ee22(0x864)]||'0x28\x20'+_0x36ee22(0x1a0)+'s)','pitchAt':_0x3231bb['pitch'+_0x36ee22(0xada)+'r']||'0x1c\x20'+'(gues'+'s)','getters':_0x3231bb['gette'+'rs'],'rawPitch':_0x3231bb[_0x36ee22(0xa8c)+'tch'],'rawYaw':_0x3231bb['rawYa'+'w'],'pitch':_0x3231bb[_0x36ee22(0x4c0)],'yaw':_0x3231bb[_0x36ee22(0x559)],'legacyOffsetsCleared':_0x149d5c,'fov':_0x9e54cb[_0x36ee22(0xa2e)],'fovSane':_0x9e54cb[_0x36ee22(0xa2e)]>=-0x1*0x131c+0x2*-0x43c+-0x5*-0x590&&_0x5ece2b[_0x36ee22(0x1ed)](_0x9e54cb[_0x36ee22(0xa2e)],0xd1*-0x25+-0x21ca+-0x1*-0x406d),'centreX':_0x22a01d,'centreY':_0x28a028,'aboveY':_0x186e22,'belowY':_0x182d40,'projection':_0x5ece2b['dCjsd'](_0x1528cf)};}()),'fov':_0x9e54cb[_0x187447(0xa2e)],'espView':{'on':_0x116441['on'],'boxes':_0x116441[_0x187447(0x3ca)],'span':_0x116441[_0x187447(0xd70)]},'local':(function(){var _0x5cf449=_0x187447,_0x15b70c=_0x43c5e2();if(!_0x15b70c)return null;return{'ptr':_0x5ece2b['RmRhU']('0x',_0x15b70c['ptr'][_0x5cf449(0x834)+_0x5cf449(0x2fe)](-0x1*-0xab7+-0x2*0x607+0x167*0x1)),'feet':_0x15b70c[_0x5cf449(0x913)],'eye':_0x15b70c[_0x5cf449(0x553)],'posAt':_0x15b70c['posAt'],'copies':_0x15b70c[_0x5cf449(0x448)+'s'],'cluster':_0x15b70c['clust'+'er'],'eyeHeight':_0x2b8c14,'pitch':_0x15b70c[_0x5cf449(0x4c0)],'yaw':_0x15b70c['yaw'],'reach':_0x15b70c[_0x5cf449(0x164)]};}()),'uwmkLog':_0xd305da['slice'](0x2f*-0xd3+-0x5*-0x3b6+0x1*0x142f,-0x1fd2+-0x916+0x28fc),'warnings':[]};if(_0x20f7f2)_0x477901['warni'+_0x187447(0xb8d)][_0x187447(0x90b)](_0x187447(0xd3c)+_0x187447(0x4ca)+'led:\x20'+_0x20f7f2);if(_0x4f85dc['error'])_0x477901[_0x187447(0xc1b)+'ngs']['push'](_0x25545f[_0x187447(0xc36)]+_0x4f85dc[_0x187447(0x97b)]);if(_0x477901['surve'+'yRows']===0x1863+-0xaee*-0x1+0x2351*-0x1&&_0x25545f[_0x187447(0x850)](Object[_0x187447(0xbac)](_0x477901[_0x187447(0xd7e)+'nces'])[_0x187447(0xa1b)+'h'],0x6a7+0xa9b+-0x2f*0x5e)){if(_0x25545f['LNcyi']('IXAiM',_0x25545f[_0x187447(0xc64)]))_0x477901['warni'+_0x187447(0xb8d)][_0x187447(0x90b)](_0x25545f[_0x187447(0xc7e)](_0x25545f['WVHXT'](_0x25545f[_0x187447(0x234)],Object[_0x187447(0xbac)](_0x477901[_0x187447(0xd7e)+_0x187447(0x19c)])['lengt'+'h'])+_0x25545f[_0x187447(0x6bc)],_0x5c0a6e[_0x187447(0x36c)+_0x187447(0x1e4)]?_0x25545f['uBBmu']+_0x5c0a6e[_0x187447(0x36c)+'rror']:_0x25545f[_0x187447(0x335)]));else{var _0x1507a1=_0x1ec7f2['query'+_0x187447(0x6ff)+_0x187447(0x572)+'l'](_0x25545f['hmwiE']);for(var _0xe28c31=-0x1ff5+-0xc*-0x1a6+-0x40f*-0x3;_0x25545f['NGFRL'](_0xe28c31,_0x1507a1[_0x187447(0xa1b)+'h']);_0xe28c31++){try{if(_0x1507a1[_0xe28c31][_0x187447(0xb22)+_0x187447(0x83f)+_0x187447(0xbf9)])_0x1507a1[_0xe28c31]['conte'+_0x187447(0x83f)+'dow']['postM'+_0x187447(0x81f)+'e'](_0x3e24b8,'*');}catch(_0x4e67fb){}}}}if(_0x477901['ident'+_0x187447(0x347)]&&_0x477901[_0x187447(0x9aa)+_0x187447(0x347)][_0x187447(0x755)+_0x187447(0x69b)]===![]){if(_0x25545f[_0x187447(0x4c4)](_0x25545f[_0x187447(0xa0a)],_0x25545f['loDRl'])){_0x2482c3[_0x187447(0xaf0)]={};for(var _0xf2ebfb=0x15f+0x466+-0x7*0xd3;_0x5ece2b['ftQJm'](_0xf2ebfb,_0x569384[_0x187447(0xa1b)+'h']);_0xf2ebfb++){var _0x458465=_0x239861(_0x5ece2b[_0x187447(0xae8)](_0x5f53fa,_0x5ece2b[_0x187447(0x921)](_0x52c56d,_0xb3b873[_0xf2ebfb][-0x66*-0xe+-0x1f0b*-0x1+-0x249f],-0x46b+0x3*0x1b7+-0xaa)),_0x187447(0xbd8));if(_0x5ece2b['kUhYE'](_0x458465,_0x553907))_0x19920d['tag'][_0x3a68e2[_0xf2ebfb][0xde8+0x71*-0x17+-0x3c0]]=_0x458465;}}else _0x477901['warni'+'ngs']['push'](_0x25545f[_0x187447(0x29a)](_0x25545f['ZmHLa'](_0x25545f['LnbAE'](_0x25545f['TEJOK'],_0x25545f['eaSlY']),_0x187447(0xd50)+'ame\x20w'+'hile\x20'+_0x187447(0xce0)+_0x187447(0xbb1)+_0x187447(0xa2d)+'\x20it\x20i'+_0x187447(0x9a8)+_0x187447(0x74d)+_0x187447(0x6a0)+'able\x20'+'every'+_0x187447(0xc0c)+'r\x20'),_0x187447(0x8ed)+_0x187447(0x22b)+_0x187447(0x2ce)+_0x187447(0x9d9)+'n\x20Tam'+_0x187447(0x80e)+_0x187447(0x8ee)+_0x187447(0x7b2)+'ard-r'+'eload'+'.'));}if(_0x477901['ident'+_0x187447(0x347)]&&_0x477901['ident'+'ity']['plugi'+_0x187447(0x525)+_0x187447(0xd9f)+'Expor'+'ted']===![]){if(_0x25545f[_0x187447(0x5ba)]!==_0x187447(0xbba)){var _0x593bef=('9|0|8'+_0x187447(0xcb2)+_0x187447(0x74e)+'|7|3')[_0x187447(0xb76)]('|'),_0x3f7179=0x17f3+-0x440+0x1*-0x13b3;while(!![]){switch(_0x593bef[_0x3f7179++]){case'0':var _0xcafdc=_0x500589('div',_0x5ece2b[_0x187447(0xd69)]);continue;case'1':_0x3d3903['body']=_0x5ed1a8;continue;case'2':var _0x5ed1a8=_0x5ece2b[_0x187447(0x921)](_0x5306c1,_0x187447(0x166),_0x187447(0xd1c)+_0x187447(0x317));continue;case'3':return _0x3d3903;case'4':_0x3d3903[_0x187447(0xcad)+_0x187447(0x48f)+'d'](_0x5ed1a8);continue;case'5':_0xcafdc['appen'+_0x187447(0x48f)+'d'](_0x1fd036);continue;case'6':_0x3d3903['appen'+'dChil'+'d'](_0xcafdc);continue;case'7':_0x3d3903[_0x187447(0x169)]=_0x1fd036;continue;case'8':var _0x1fd036=_0x5ece2b[_0x187447(0x689)](_0x453dd2,_0x187447(0x166),_0x5ece2b['vZKbj'],_0x187447(0x779)+_0x187447(0x187)+_0x551721+(_0x187447(0x89f)+'ong>'));continue;case'9':var _0x3d3903=_0x335a01(_0x5ece2b[_0x187447(0x770)],_0x5ece2b[_0x187447(0x3eb)]+(_0x5aa6fb?_0x187447(0xa38):''));continue;}break;}}else _0x477901['warni'+'ngs'][_0x187447(0x90b)](_0x25545f['bWRVZ'](_0x25545f[_0x187447(0xbd9)],_0x25545f[_0x187447(0x549)]));}if(_0x477901[_0x187447(0x363)]&&_0x477901[_0x187447(0x363)][_0x187447(0x96f)])_0x477901[_0x187447(0xc1b)+_0x187447(0xb8d)]['push']('ESP:\x20'+_0x477901['esp']['note']);if(_0x477901[_0x187447(0x2b6)+'ls']&&!_0x477901['globa'+'ls']['heapU'+'8']){var _0x46f3f6='';_0x477901[_0x187447(0x40b)+_0x187447(0x2a8)+'oof']&&(_0x46f3f6=_0x25545f['LUAiF'](_0x25545f[_0x187447(0xb58)](_0x25545f[_0x187447(0x51e)](_0x25545f[_0x187447(0xaec)](_0x187447(0x5f4)+_0x187447(0xc5d)+_0x187447(0x869)+'t\x20',_0x477901['hookF'+'irePr'+'oof'][_0x187447(0x6e3)])+('ms\x20wi'+_0x187447(0x64d)+_0x187447(0x5f6)+'lFunc'+'='),_0x477901[_0x187447(0x40b)+_0x187447(0x2a8)+_0x187447(0x976)][_0x187447(0xd1e)+'nalFu'+'nc'])+(_0x187447(0x888)+_0x187447(0xc5c)+'resol'+_0x187447(0x616))+_0x477901[_0x187447(0x40b)+_0x187447(0x2a8)+_0x187447(0x976)][_0x187447(0x971)+_0x187447(0x8e1)+'eAtFi'+'re'],_0x187447(0x6aa)+_0x187447(0x61b))+(_0x477901['hookF'+_0x187447(0x2a8)+_0x187447(0x976)][_0x187447(0x8fb)+_0x187447(0x2a1)+_0x187447(0x17c)+'e']||_0x187447(0x165)),_0x25545f[_0x187447(0xa5f)])),_0x477901['warni'+_0x187447(0xb8d)][_0x187447(0x90b)](_0x25545f['LjrzQ'](_0x25545f['WFgCK']+(_0x477901['globa'+'ls'][_0x187447(0x8fb)+_0x187447(0x2a1)]||_0x187447(0x165))+_0x25545f['CrNpG'],_0x25545f[_0x187447(0x882)])+_0x46f3f6);}if(_0x477901[_0x187447(0x2b6)+'ls']&&!_0x477901['globa'+'ls'][_0x187447(0x467)+_0x187447(0x68b)+'er']||_0x477901[_0x187447(0x2b6)+'ls'][_0x187447(0x467)+_0x187447(0x68b)+'er']==='undef'+_0x187447(0x1c3)){if(_0x187447(0x305)===_0x25545f['kQYTt'])_0x477901['warni'+'ngs']['push']('windo'+'w.Uni'+'tyWeb'+'Modki'+'t.Val'+_0x187447(0x57b)+_0x187447(0x356)+_0x187447(0x3af)+'ssing'+'\x20-\x20ca'+'pture'+'\x20is\x20r'+_0x187447(0xe03)+'g\x20bli'+_0x187447(0xbf7));else{var _0x20512f=_0x2c4d0d(_0x25545f['iLuof'](_0x53dc19,_0x4e0b44(_0x505bca[_0x4a0945][-0x159+-0x3c*0x28+0xab9],0x112a*0x2+-0x5*0x10a+0x3d*-0x7a)),'i32');if(_0x20512f!==_0x1bb11a)_0x1a3347['tag'][_0x4fb879[_0x274270][0x1973+-0x1bcb+0x1*0x259]]=_0x20512f;}}if(_0x477901['hooks'+'Total']>0x17*0xfe+-0x10a4+-0x62e&&_0x477901['hooks'+'Appli'+'ed']===-0x1b38+0x2693*0x1+-0xb5b&&_0x4d931a){if(_0x477901[_0x187447(0x414)+_0x187447(0x3b0)+'ved']===0x20e0+-0x61+-0x207f){if(_0x25545f[_0x187447(0xa0b)]!==_0x25545f[_0x187447(0x1b0)])_0x477901[_0x187447(0xc1b)+_0x187447(0xb8d)]['push'](_0x25545f[_0x187447(0x349)](_0x25545f['ZmHLa'](_0x25545f['FUaoo']('0\x20of\x20'+_0x477901[_0x187447(0x414)+_0x187447(0x576)],_0x187447(0xa05)+_0x187447(0xc13)+'e\x20eve'+_0x187447(0xa1d)+'N\x20by\x20'+'UWMK.'+_0x187447(0x201)+_0x187447(0x19d)+_0x187447(0x9c5)+'\x20')+_0x25545f['vTLpV'],_0x25545f['owuaN'])+_0x25545f[_0x187447(0x21d)]+_0x477901[_0x187447(0x414)+_0x187447(0x393)+_0x187447(0x43b)+_0x187447(0x1fa)],_0x187447(0xa05)+_0x187447(0xde6)+'uring'+'\x20armi'+_0x187447(0x948)+'\x20docu'+_0x187447(0x8c7)+_0x187447(0xbd0)+'.'));else{var _0x397f2c=_0x454a8d['c'][_0x320945]['v'],_0xb1cc0b=_0x5668cb[_0x187447(0xc3e)](_0x25545f[_0x187447(0xb1a)](_0x397f2c[-0xf*0xe5+-0xd96+0x1b01],_0x397f2c[0x2*0x34b+-0x26c4+-0x6*-0x55d])+_0x25545f[_0x187447(0xbe5)](_0x397f2c[-0x1d63+-0x2114+-0x6f1*-0x9],_0x397f2c[-0x3*0x74b+0x4*-0x442+0x26eb]));(_0xb1cc0b>_0x5108f2||_0x25545f['uSciK'](_0xb1cc0b,_0x2ba4a5)&&_0x397f2c[-0x256b+0xe89+0x16e3]<_0x4a14fb['v'][0x791+0x203c+-0x27cc])&&(_0x42cf47=_0xb1cc0b,_0x37e3ab=_0x155773['c'][_0x3dd555]);}}else _0x477901[_0x187447(0xc1b)+'ngs']['push'](_0x25545f['QjbeU'](_0x25545f['cvQPy'],_0x477901[_0x187447(0x414)+_0x187447(0x3b0)+'ved'])+'\x20of\x20'+_0x477901['hooks'+_0x187447(0x576)]+('\x20hook'+_0x187447(0x785)+'o\x20a\x20t'+_0x187447(0x5ef)+_0x187447(0x6b7)+_0x187447(0xa62)+_0x187447(0x145)+_0x187447(0x223)+'ne.\x20T'+_0x187447(0x3d3)+_0x187447(0x75f)+_0x187447(0x174))+_0x25545f['jeYSS']);}return _0x477901[_0x187447(0x414)+'Appli'+'ed']>0xb7*0x2+0x82b+0x5b*-0x1b&&!_0x477901[_0x187447(0xd7e)+'nces'][_0x187447(0x76b)+_0x187447(0x96e)+_0x187447(0x36a)]&&_0x477901['warni'+_0x187447(0xb8d)]['push'](_0x25545f[_0x187447(0x659)](_0x187447(0x76d)+_0x187447(0x295)+_0x187447(0x145)+'ed\x20bu'+_0x187447(0xcbd)+_0x187447(0x76b)+_0x187447(0x96e)+_0x187447(0xdb9)+'as\x20fi'+'red\x20y'+_0x187447(0x409),_0x187447(0xb7f)+'r\x20you'+'\x20are\x20'+_0x187447(0x544)+_0x187447(0x9ca)+_0x187447(0xd4c)+_0x187447(0xc63)+_0x187447(0xce6)+'ok\x20is'+_0x187447(0x5da)+_0x187447(0xafd)+_0x187447(0x224)+_0x187447(0x541)+'ad.')),_0x477901[_0x187447(0xd7e)+_0x187447(0x7c9)+_0x187447(0x1a6)+'ed']['lengt'+'h']&&_0x477901[_0x187447(0xc1b)+_0x187447(0xb8d)]['push'](_0x25545f['sxNft']+_0x477901['insta'+_0x187447(0x7c9)+'eplac'+'ed']['join'](',\x20')),_0x477901;}function _0x5d71f0(_0x20c9c1){var _0x222d1a=_0x419cc1,_0x23d9a8={'npUiy':_0x25545f['XnkqT']};console['log'](_0x25545f[_0x222d1a(0x84c)],_0x25545f['Ilzxd'](_0x25545f[_0x222d1a(0x7c4)],_0xe38ae3)+(';font'+_0x222d1a(0xdda)+_0x222d1a(0xb47)+'0'),_0x20c9c1),console[_0x222d1a(0x482)](_0x3912f5+'\x0a'+JSON[_0x222d1a(0x6fb)+_0x222d1a(0x501)](_0x20c9c1,null,0x190f+0x22*-0xe1+-0x2*-0x26a)+'\x0a'+_0x32b98b),_0x3cf7e5=_0x20c9c1;try{if(_0x25545f[_0x222d1a(0xbfc)](_0x222d1a(0x4c3),'woToC'))_0x55f412(_0x20c9c1);else{var _0x1fc558='';for(var _0x33fa3e=0x2448+-0x3*-0x37c+-0x2ebc;_0x33fa3e<arguments[_0x222d1a(0xa1b)+'h'];_0x33fa3e++){var _0x319d26=arguments[_0x33fa3e];if(typeof _0x319d26==='strin'+'g')_0x1fc558+=_0x319d26;else{if(_0x319d26&&_0x319d26['messa'+'ge'])_0x1fc558+=_0x319d26[_0x222d1a(0x650)+'ge'];}}if(_0x1fc558[_0x222d1a(0x6b7)+'Of'](_0x2a5aed)!==-(0x8*0x304+-0x1*-0x169c+-0x2ebb))return _0x1dc24b[_0x222d1a(0x19d)](_0x146e3e,arguments);if(_0x1fc558['index'+'Of'](_0x23d9a8[_0x222d1a(0x5ab)])!==-(0x23b7+0x49*0x6b+-0x4239)){var _0x7c3f72=_0x1fc558['slice'](-0xf6e*0x2+0x244c+0x3*-0x1d0,0x20ef+0xa25+0x95*-0x48);if(_0x4cda5b[_0x222d1a(0x6b7)+'Of'](_0x7c3f72)===-(-0xbda+-0x1d8f+0x296a)&&_0x521ee9['lengt'+'h']<0x975*0x3+-0x2*-0x23b+0x1*-0x2099)_0xcc0d4b[_0x222d1a(0x90b)](_0x7c3f72);}}}catch(_0x962e7d){}_0x25545f[_0x222d1a(0x992)](_0x2b52f3,'repor'+'t',{'report':_0x20c9c1});}function _0x3d962c(){var _0x4ae335=_0x419cc1;if(_0x4ae335(0xa79)!==_0x4ae335(0x766))try{return _0x25545f[_0x4ae335(0x95b)](_0x4f4138);}catch(_0x33c373){return{'version':_0x4b2487,'when':new Date()[_0x4ae335(0x230)+_0x4ae335(0x14a)+'g'](),'elapsedMs':_0x25545f[_0x4ae335(0x79c)](Date[_0x4ae335(0xc8f)](),_0x5ec9af),'host':_0x5d9c77,'uwmk':!!(window[_0x4ae335(0x571)+_0x4ae335(0x3c8)+_0x4ae335(0xba2)]&&window['Unity'+_0x4ae335(0x3c8)+_0x4ae335(0xba2)]['Runti'+'me']),'il2CppContext':![],'arm':_0x4f85dc,'hooksTotal':_0x23ed4d['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x25545f['ZxNhu'](String,_0x33c373&&_0x33c373[_0x4ae335(0x650)+'ge']||_0x33c373)};}else return _0x3319fa[_0x4ae335(0x3ca)];}function _0x6414a2(){var _0x567209=_0x419cc1,_0x73dd0f={'dAGuw':function(_0x1c19f2,_0x505fa3){return _0x1c19f2+_0x505fa3;},'pVAoY':function(_0x58a7c5){return _0x58a7c5();},'zqXUG':function(_0x5b818e,_0x3cc955){return _0x25545f['jaqQe'](_0x5b818e,_0x3cc955);},'RMjKs':function(_0x558ea5,_0x333548,_0x27e4ef){var _0x4c276f=_0x29e5;return _0x25545f[_0x4c276f(0x992)](_0x558ea5,_0x333548,_0x27e4ef);}};if('dHVZt'===_0x567209(0xc8b)){var _0x4c8e80=0xd3a+0x1331+-0x206b;try{_0x567209(0x155)===_0x25545f[_0x567209(0x857)]?_0x1887f6():(_0x3016cd['camer'+'a']=_0x73dd0f[_0x567209(0xc73)]('0x',(_0x4ca3aa>>>-0x1*-0x2027+0x62*-0x3b+-0x991*0x1)[_0x567209(0x834)+'ing'](-0x287*0xf+0xc*0xd2+0x1c21)),_0x3d8f87[_0x567209(0xb9c)+'aFrom']=_0x10664d);}catch(_0x45e488){}try{_0x479656();}catch(_0x54c1c6){}_0x25545f['jRENF'](setInterval,_0x3d665a,0x101e*0x1+0x6*0x330+0x1f*-0x106),_0x5d71f0(_0x3d962c()),function _0x48fa6d(){var _0x3f87c8=_0x567209;if(!_0x23ed4d['lengt'+'h'])try{_0x73dd0f[_0x3f87c8(0x8b8)](_0xb0851f);}catch(_0x426dff){}_0x4c8e80++,_0x5d71f0(_0x3d962c());if(!_0x23ed4d['lengt'+'h']&&_0x73dd0f[_0x3f87c8(0x161)](_0x4c8e80,-0x1295+-0x715+-0x5*-0x55e))setTimeout(_0x48fa6d,-0x13d*0x9+0x1da7*-0x1+0x309c);else{if(!Object[_0x3f87c8(0xbac)](_0x2e79eb)[_0x3f87c8(0xa1b)+'h']&&_0x4c8e80<0x4dc+-0x1*-0xb59+0x3*-0x503)setTimeout(_0x48fa6d,0x2176+0x47*0x6b+-0x3753);else setTimeout(_0x48fa6d,0x1ca4+0xb*0x383+0x25*-0x1b1);}}();}else typeof _0x4c3fa3==='funct'+'ion'?_0x2a8c9a=_0x144220(_0x3482ac):_0x267905=_0x73dd0f[_0x567209(0xa56)](_0x32a0f0,_0x4761c5,_0x3d5bdf||-0x25f*0x3+-0x459+-0xba8*-0x1);}if(document[_0x419cc1(0x816)])_0x6414a2();else document[_0x419cc1(0x204)+'entLi'+_0x419cc1(0x417)+'r'](_0x419cc1(0x71b)+'ntent'+_0x419cc1(0x989)+'d',_0x6414a2,{'once':!![]});if(document['body'])try{_0x25545f[_0x419cc1(0x58d)](_0x1f49f6);}catch(_0x49e4d8){}else document['addEv'+'entLi'+'stene'+'r'](_0x25545f[_0x419cc1(0x2fc)],function(){var _0x548e7b=_0x419cc1;if(_0x25545f[_0x548e7b(0x42d)](_0x25545f['wIzFd'],'mTqBl'))return _0x25545f[_0x548e7b(0x8c5)](_0x163388);else try{_0x1f49f6();}catch(_0x4c8078){}},{'once':!![]});})()));function _0x1a7d(){var _0x13af5d=['nhW4Fde','yw5Nzsi','CZPUB24','z2H0oJi','DxjH','ihnRAxa','zsbWCMu','WPxcImkiWONcLa','z2fTzsa','B2SGzMK','yxa6nha','vwLmEgW','y29WEq','yxjHBxm','C2STBwq','ig9Yihq','zefbuui','WOVcJSkoWPhcHG','rviGD2K','ywrPDxm','WPdcJSkvWPpcJq','B2nJuvu','Bg9YoIm','Aw9U','ywnLlem','AwDUlwK','EvvzC2q','AxjZDca','Esb0Exa','tgLPs0C','BMfTzq','zefhDxC','AK1Vz1G','sLvPCLC','rfLJvvm','uhf1Ae0','iJ5VCgu','z2uUrgu','mxWWFdi','tNzICfK','D3jPDgu','pgLUChu','u0TPB1y','z2v0x3a','z2v0rMW','q01c','rK5Zr24','DcbPBMO','zYbMB3i','B25Lige','ywrKCMu','DgPsDe4','o3DVCMq','Dg9WoJe','4Ocuihr3BW','zeHwwNq','BvzKvKO','Ag9VAW','B25NpG','BM93','DMLLD0i','nxWXFdy','Bgu9iMq','yxDfCLC','BfHoA1C','WPdcKCkrWOBcIW','BwLU','ChG7Bwe','sLLlAKS','C1HOsxm','WOZcICkoWOBcHG','C2nYyxq','C2XPzgu','psjIywm','oJHWEdS','DhLSzq','BM9UztS','AwXLzcW','EMv1DKS','WONcJSkgWPxcJa','zM9YBtO','B250lxm','oIjjBNq','rMLLBgq','BM8GCMu','AxrJAa','zhHQsLG','v1bkzxm','mJbWEca','yxbWzw4','E2zSzxG','v29YBgq','zxi7D2K','zxrZigm','Fdv8mNW','BwuGlsa','CIb5B3u','icaO','WPxcJSkmWOZcKG','BM8GD2e','rvjsAKi','x19tquS','vKrTs2S','vgLqswq','A2v5q28','DcbUBYa','yNv0Dg8','zxrgC1m','BM8Gtw8','C3rHy2S','seffzKm','CMeTC3C','tg9VA0a','AvzKt1G','mtbWEca','mIWUnsK','vfjdEw8','qNjHy2S','wgDYrgq','WO7cJ8krWOJcJa','BJPJB2W','Cw91tLO','tvH3DKe','DwTfCwW','AxrPB24','B3jRu3K','z0vdufm','imk3ihrL','Dg90ywW','yMfZzq','igzPCNm','vg9Lr3m','y3vYC28','qwrUzMS','vvjbx1m','ugXHEwu','u2DRvNi','BM8Gzw4','nYWUnsK','DeHLAwC','DgHLig8','B3bLCNq','uw92tvi','DhjVEq','oM1PBIG','B24GDgG','AguGAg8','B2DNzwq','C1DVsuO','zw1Pzxm','Cg9YDge','v3HXBgi','wM9sD1O','zwy1o2i','r0TAueq','WOFcH8kjWPlcJq','Dwztrva','BwvTyMu','Aw50iIa','AgL0zs0','sKHiAuW','Dc13zwK','BwuOkq','iIbZDhK','vwLyuwu','zMXLEa','DcbTyxq','BwfYz2K','iefdveK','A2zuBeK','D2fZBva','B25Hyuq','rM1Trgq','zwvMntS','B1zzDMW','phnWyw4','B3DUkq','icaHia','B3i6Cg8','wvjjDfa','C2fUzsa','ihn0yxK','r0DIDgS','B206mxa','BuHjEfC','idrWEca','A2uTBgK','ndy7y3u','yxK6zMW','u05ZuwS','C3fitLu','DgjjqKS','tw91C2u','mtC1mZK1rNDdBxzS','v0jzvu4','lc4WnsK','z3jHyG','DMX2sfa','yxr1CMu','z1fQBhG','C2STBwi','Aw1HCcW','B3jPz2K','rvfWDfC','z2H0oJm','DgG9iJe','sffVvhq','mti4mZaYntz6wLHPtuG','EgPVCNu','nhW3Fde','ig1VDMu','rfv0ywS','t0vluvG','AKrIzKu','zxG7zMW','o2jHy2S','ig91Dca','ihjNyMe','igfYBwu','BgW6Aw4','tM90igq','mhb4ic0','AwvSze8','EKTYBw4','DciGC3q','rLLUDfm','uvnUyuu','ysbMB3y','nxb4o2i','WOJcJmkjWO7cLq','BMzrBuq','ysGYntu','C3vYDMu','B29RCW','DgL2zxS','y29SCW','yw55ihC','we5oBvi','kZb4','zt0Iy28','tK9UyNK','As1TB24','ufa+pIa','odbWEdS','CYb1BMK','o292zxi','nhb4idK','A3TOzwK','B3vUzcW','C2v0','y3vZ','DMLLDYa','DgHLigC','vKvsu0K','AwDesLi','CM1VBMS','mtaSmte','EMzYCK4','zKTlzLu','CJOXChG','vgzZyNy','x2DHBwu','u2XOvKK','BM9ZCge','u01MCg8','D2HPDgu','AgfIBgu','lJm2lde','kduWmha','Fdn8nNW','wfnmDNi','ChPJBNa','weHtAem','CYb1BNi','WO/cJmkgWOFcJG','mduPlda','ren1suC','tNDIrNa','u2v0tg8','yxLrDMC','yxnZtMe','ys1Tzw4','B24+','zw5LBxK','C3bHBG','DNzPBLi','DhrVBJ4','BMC6nha','C3rYB2S','Bw4TDge','BwfSBg8','EdTOzwK','B2TLpsi','EvviuLi','DcbYzwy','ELjRrKG','nNb4o3C','BeD2y1K','Aw5ZDge','DxnLtg8','ihDHCYa','EcbYz2i','C2L6ztO','zsGP','r1beAgm','zwvKig8','AwvK','zxi6mxa','zNKTy28','idqTnc4','mNWZFdq','DJiTDge','zM96tK4','BgfIzwW','ChGPo20','nc00lJu','AM9PBJ0','B2XZoJO','ywrKAw4','C3rYB24','EdTIywm','q29WEsa','ig9IAMu','DgnOige','Cuvbuhe','EvjXDNC','BM8Gseu','C28GAg8','ihnPBMm','A0r6BKy','o3rVCdO','Aw1Lsxm','BNrLCI0','tgzqzgK','u2vLBK0','AgLUDa','BwvHBNm','CNqP','DM1MDwK','qvD6zLC','ANHmvKK','zIb0Agu','zxGTzgK','BI1PDgu','C2v0qG','WPxcKSkgWORcJG','CJOJzJC','yKDNDuK','CdO2ChG','tufqsgu','z2v0q2W','yMfJA2q','oJrWEdS','q2XPCgi','Ec1KAxi','CM9WywC','C28GAxq','BgvYigG','icbVzMy','lM1Ulxm','DgLUzYa','o2n1CNm','ihrOzsa','icb3CMK','BMqGBM8','A2zsrKC','zMj3BgS','BM8GCgW','vKHlDuS','WPhcK8krWO/cJa','AwDODdO','WOBcLmkuWO7cJq','DuPlBha','WONcLmkmWOVcIq','vgjZA2m','zvzqwuK','Aw5Qzwm','qKTLtvi','B3zLCMy','D2H5','BgfZDa','B250lwy','wvzcq1i','Bwf4kdi','y2vUDgu','D2LKDgG','lxDPzhq','iZHKn2e','C2STDMe','C2vLBNq','lxDLAwC','C2v0sxq','n3b4o3a','ChqGsvm','yxa9iNi','B3rYB2W','igvHy2G','B2fYzca','yxiTDgG','ihjLywm','WPdcKCkkWO/cJa','q2Phq0y','khmPigq','CM9SBgi','r3b0v2m','mI4Xmc4','C3LZDgu','B2zMC2u','q1DwA0u','vgzJqLi','DgfIBgu','CwLcEeC','mNW2','mhG5oa','CIiGDhK','C1vZDNe','i2zMnMi','iJ54pc8','yxG9iJu','tLniz0i','BLbPDfa','EdOYmtq','B1Pozum','ruDqEK0','CNvUDgK','EfbosNi','ic8G','WONcISkgWPlcIq','Dgv4Dem','zfn2wxi','BM8Gz3i','Dw5UAw4','DxnPyMW','u0TjteW','yxbWBgK','yNvPBhq','y2fWC3u','u1zUB3q','Avv0t20','u3rYAw4','WPtcKmkjWO/cIq','CMeTBwu','rxnZBfa','zKfuB08','B246B3a','Dw50','ihn0EwW','nJq3o2q','Aw1WBge','AxrPywW','vMnLre0','DxbxrfC','Bg9JywW','WPpcLCkvWPpcIG','C1n1qKK','vMTSyMu','lxnUyxa','Bgu9','yw1L','DxrqB1G','y2u7y28','mNb4o2i','ENfyvuC','C09JCg0','DMfS','CMvHy2G','BM9Uzq','zgL2','BNnPC3q','ig1LBNu','AgvHza','BgXxyxi','DK9hy0G','zwqG','AxrLBxm','lJKYktS','uMvJDa','Aw1rzwe','nJaIigG','y2XPCgi','surwqMu','CMuG','renSyue','senovLe','C2nHBge','Aw4TD2K','zNjHBwu','BhzLzcK','B3r7ywW','qxrgAxi','AwXKlG','mhGXma','uw54A3y','yxjKlxq','FdL8nhW','BIb0Agu','C3bLzwq','vKLt','tNLACfa','B2LMyKW','BMC+','B25ZB2W','psiXlJi','BNq7y28','B2TLlwW','zsbVyMO','sgvHCa','zsbZDhi','Cg9PBNq','B25TB3u','C2STy2e','oNbYzs0','B3Lly0W','DvnJAuS','yxv0BW','uvvdvfK','idb4mJG','zgL1CZO','iNDPzhq','kgXVyMi','WO7cLCkoWOFcHG','BMnLCW','yxbWBhK','DgHLiha','WOVcLmktWOBcJa','kgD1zxm','WPdcK8kqWO/cIa','DgHLigW','mhW1','CMf3Aw4','mxW1','zxbSywm','z2H0oJy','zvPVtMO','u2jHsLe','DgLVBJO','DeXswvG','sKjMu1y','m3WWFdi','te9h','zwyYo2y','uNb5z0O','ihDOAwm','sLblsMy','BLnttMy','zLDgBg8','C3CYlxm','D2f0y2G','Aw5PDgu','Dgv4Dee','x3j1BNq','BNLkBKK','WOVcJ8kjWPpcLa','EK5ctgG','igLKpsi','EgDpu0i','BM90ig0','i3n3mI0','t05twwe','zMfRzq','Aw5Lza','DMvYzMW','WPtcKmkuWOZcLa','BgLNBG','rg9vtwu','z2H0oJG','EgnvB3y','y0jmy1q','yw5ZCge','psjZDZi','idi0iJ4','AKPQC3C','CM93CW','AND4yMi','y2S7zM8','BgqGB2y','zgv2Awm','y29UDhi','sg1eBMK','B20GDgG','vvHiuxC','wKDlr1m','ztPWCMu','zxiGCMu','CxvLCNK','WPxcKmktWPpcIG','uKfzAwe','BgLZDa','l3nWyw4','BLr5Cgu','swXuyue','wKPZvfq','qxbWBgK','CNjVCG','Ag90','zhjVCc0','E2zVBNq','WONcISktWPdcLq','B3nZihq','lJCYktS','B3i6i2y','BMnL','y1jMuge','rvzbrgq','B2DpDhi','ig9Mihy','v2zxsgC','phn2zYa','BMfSv2e','DgzqDhi','zwqGEwu','CMvWB3i','ANzJqxK','DuzRDvK','C0Pmsu4','qxrbCM0','Ate2','WOJcJ8kuWPxcIG','CgzMquG','zwf0zva','osWGDhu','yKLczuq','ifrOzsa','zgPtsgy','otbWEdS','ywrKrxy','rw5HyMW','wu9WC3u','DYaTidq','yMLgwuG','ywn0Axy','zM92igi','WOFcLmkrWPxcJW','qM90Aca','BuPUEfe','BNnWyxi','ALP6BNC','y1flCvm','WOFcJmkgWONcKa','D0ThAxu','B2jM','B2XVCJO','WOFcKSkiWOJcJa','BK1LCLO','qM9rtw0','DgHLige','oJm0ChG','y2XPzw4','WO/cJmkgWO7cJW','B1r5y08','rMfyz3K','r0j3uMi','v3bHrhi','ihDOAwW','zNGIihq','ELrOwui','zwqGBM8','B25Nig8','BwuUy3i','zMXLEc0','ztSTD2u','yxv0BZS','txfSu3y','icaGica','ys9vv00','ncK7yM8','y2fUDMe','s1vZv3G','DYW2mJa','Dg9ju08','owqPida','zMjzqMm','BgLKzxi','svjwt0q','AwWYq3a','vvvhv0S','wvDhBey','zxi7zM8','qxDHA2u','lcbUBYa','AwrKzw4','D3ntq0C','qwnfueG','WPxcLmklWPpcIG','zM9UDdO','zZOXmxa','Ad0ImIi','B3nLCY4','oY13zwi','Cg93ANC','WONcJCkkWORcKa','tND3shy','suXyCgi','ys1LC3a','uNL3z1O','zxjHia','DxjLzca','B25Tzxm','yxmGBM8','psjJB2W','WPdcImkpWONcIG','EwHmAfK','yMvNAw4','CMnNrMW','AwrLCG','DvHyzgW','mhG1oa','WPxcKSkjWPlcHW','uMvKsvO','yMHbzxC','BwuGBM8','qKDyDge','Bwf4lxC','DfDPzhq','rg9swMW','vgHLiha','qwXszLa','Aw5Uzxi','mJbWEcK','Avv6ywm','y2rZzvK','C3LUy3m','WPdcKCkoWO/cIq','re1pvxa','zxH0','wxP3wNu','AKrjuMy','WO/cI8koWO3cJW','C3bYAw4','WPlcImkqWOZcIa','i2zMyJm','sw52v2K','oMzPEgu','D257B3a','Fdj8nxW','DxrVo30','WPdcJmkkWORcKa','CJT3Awq','AxmGBM8','yxjJ','WO7cKSkqWOJcKq','WOBcI8krWOFcIG','mdTMB24','m3WWFde','DM1Nrw8','AgLSza','AeDAA1K','Aun4DLy','BfvmyKW','tgT6txC','BNq6Aw4','zMrNB3C','uwT3tve','BhDAvuy','B3bHy2K','wxbQrwW','vuDoy1m','AgLSzsa','Bc5ZAg8','C3rHDhu','u3jWD3K','ytK5o20','Bu5yBKq','Awq7CgW','qw5Avvi','mZe3odCWnxf6CentCa','zvnHEMm','lwHPBNq','Cgv0ywW','DhjHBNm','igfYzsa','yw5Jzsa','uwTACve','yZKIpNC','zvbSDwC','BvbstfG','yuLUDvq','zhmGB24','i2zMzdq','C2fUzq','WOBcJmkkWOFcIq','rgrxrhi','B3vYy2u','lM1Ulxq','yw4+','WOVcH8khWPlcKa','serHA0G','BgrZlIa','lwjVDhq','AxjLuhi','WPxcISkmWO/cLa','z0j6Dhi','EKTkALu','CvrRzwO','vgfTCgu','qKDnywy','zenQC2q','lxbHBMu','nZCSlJu','nYWUmZu','v013vvy','CMrLCJO','EtPUB24','z2XVyMe','zNDK','zMLLBgq','yxGTAgu','WOVcICkjWOJcKW','Cxn0q08','yxmGAwq','yxjPys0','EcaXmNa','BhfHzvi','CgT4rxi','rLrsuNa','lwzPCNm','zNvHwwy','qLzyt2m','C2nYAxa','oIm4zdC','zuvSzw0','zxrsAwC','DMLLD0G','icaZlIa','psiXiIa','BMfSrNu','qM90','sYbZy3i','CMvJDgK','ic0Gy2e','vuzPB04','whfdyxm','q2jrvvG','ue5owuy','zMzMoW','Awr0AdO','D3HOD1q','CM9SBgu','D29eCxa','DMfqueK','y2vK','z01nuhu','qwn0Aw8','AxPLoJe','wvnnEvm','DvbQCgy','oInIzge','quHUsNO','B25NlG','D2fZBvi','B3b7zgK','oc00lJu','qM1tD0G','sfrnta','DMD7D2K','q2vOwey','Bw4TDgK','sw5KzxG','sxLizMy','mtqZlde','lwH1zhS','BNuTCM8','C2vSzwm','AxvZoJK','ohW1FdC','z3fzDgi','WORcICkoWO3cJq','vvDiyuq','zNjVDw4','BfnfB28','WPlcKCkiWOZcKa','C25PyMq','i3nHA3u','su9jvwC','WO7cICktWPxcLa','Aw5N','nYK7y3u','A0LYuNe','Bw9YEvq','sgjzy3a','B3qGD2K','ztTZDhi','ver3Due','mZT9','zgjZEwy','yxjKlM8','Eu5AteW','mduPo30','zMzMtfe','wMXVsfa','khrOAxm','iI8+pc8','EMu6mte','v0noDfK','B2jPvwu','D2PlEK8','nJTMB24','zciVpG','BwjZvNa','yNnkAMW','B2r5','CMvK','DxfAug8','Dxm6n3a','vvjKv3K','icbMywm','q29TCgW','otK7Bwe','y3nZvgu','B2yGCMe','ndGZnJq','qxvVEeG','Aw50lxC','Axq7Fq','CgvZia','WPpcJ8kvWOFcJG','EgvKo3q','CgfUzwW','zvv5rvi','qvf4Dwi','zNPhAwO','oJeYmha','zxi7iJ4','vw5QAui','lc45kq','A2L0lxu','pt09','z215DKm','rgvSDge','AwzLig8','EgHxu3m','mdCSmtu','ueXbwuu','ywLUAw4','zgf0yxm','zvPLqMi','ktSGBM8','WPpcICkoWOBcKW','icbMAwu','zxG6BM8','BMvPDgG','B246y28','Bd0Ii2y','Dfnsuuy','B3vUzdO','Dhj1zq','WONcImktWOVcIW','rMnQEwK','Axr5','CML0o28','tLHuA0y','y2PICwq','iMjHy2S','Dc5wywW','ic0+ia','mJe0vM5dzenH','WPtcKmkjWOZcJG','zvn0EwW','Bw91C2u','rJKPpc8','n2e2ntG','tKjLugi','rgTqwNm','ChbLCIa','ktT9','ltiUns0','AdO2mNa','u0jQu3G','zgf0zxm','BwvHBG','CdPYB3u','s2zWqMm','lxyYE2e','tefzrvi','n2vLzJu','Dg87zMK','zxnW','ntuSmJu','A2v5','zsb3ywW','o2jVCMq','C3bHy2u','zfDUDMO','BgvY','BhvTBJS','BgfZDeu','BgX3yxi','BLbmDLm','C25HCa','igDSB2i','ug9Rz2q','mNb4o20','BgXLzca','DNj3wNG','x19ZywS','B2jQzwm','z2v0x3q','rMvYEgW','ywjSzwq','EfrMtfy','z2jHkdi','y2fS','A3vYyv0','zxj0Eq','v19F','rLH2vuq','BMCGB24','uMvZzxq','Ag92zxi','C2STBM8','zw50lwm','CNq7z2e','uxvIAeW','BxfVqvm','BgfZDfC','y1Phtxq','Bgnkzgq','WOZcICklWPlcKW','yMvS','Awv3igK','uKX0v2G','ywz0zxi','igvUzca','C1juALu','uMvNAxm','Ag9ZDa','Et8Pica','lNjLC28','B2f0mZi','sg53zgy','uhnus1O','BMC6nNa','tgndC1a','tMrjBw4','AwnLihC','CeHAyvi','mtjWEc8','CvfSy3O','oMnVBhu','z2PdBMu','BMCGlYa','zKnfA20','BgvJDdO','EwHws3e','u2vZC2K','FdL8nW','zxzLBNq','DMLLDY0','lwnOzwm','zuD3wwK','z21VEuS','vNfXB3K','AxmGBwK','uMvZB2W','zxi7zMW','ChrLza','AgrzCfe','ndySmJm','mtrWEdS','BxftvNC','mcaWida','AxbIB2e','C2TPBMC','lMrSBa','z2XdDu0','zsbPBNm','A2H0DeG','DxjHvge','qMvHCMK','BcbHz2e','yxjLzca','AhvKlwm','ExbLCW','CMuk','AwqGCMC','rNrNsNq','DdmY','v2vItw8','rvnqigi','yM94zxm','WOZcImkkWONcKG','wM9Mwfy','ufLPwK4','ihnVigu','wLLSz3u','zMLSDgu','y2f0','EuLJDLm','AguGC2K','shPSDLG','ysb0CMe','D2LUzg8','CMvKDwm','wePAu0i','q3D2wuu','tgDQC2C','nNWYFdG','CgfYzw4','BNvZywi','DhjPyNu','zwfKywi','ig9Uia','z24TAxq','zgf0zsa','EufkDxG','vfblu2e','teH0ywi','q1rTB2K','BNmU','nsWXndm','ifjLC2u','BKr2rg8','B3LoweW','WOJcI8kpWORcJG','iIb3Awq','BNrZoMe','t2zMC2u','vKzqtxi','zwn0zwq','zMfJDg8','q1vwA1C','BNqTzMe','WOFcJCkiWOBcIG','idGWChG','Bs11AsW','t0LAwg0','CMeTCgu','WOFcJCkpWO3cLq','ugvIrfi','mca0ChG','AgTWrMi','WPdcJCkuWOFcKq','DgnO','zM9YBq','q2HPBgq','DZiTB3u','WPhcLCkhWOJcKq','Aw5WDxq','zcWGBM8','AwXfzu4','tg9VAYa','BgW+','zxqUia','ywnLo3C','Ag9VA0y','ks4G','DNmGC24','B2LnvNO','yNn5yuu','BNnMB3i','vgHrshe','mhWXFdC','phbHDgG','Ag9VA3m','DgXL','q2PuwLK','C3rLBMu','yZOG','ywjZ','igzSB28','mhb4oW','oMjYAwC','C0HIu2O','zhrOoJG','rMvLtwG','B3rVBK4','pgnPCMm','Eca4ChG','lt4GDM8','vMfMuum','BfjwsNK','y3rZimk3','vgL5DwG','zxqSig8','nIiGC3q','iMzVBgq','nYWUncK','y1fktxG','q2DtAeW','BgvHCG','WO3cJ8kgWPlcJa','iIbTAw4','idzWEca','ChG7B3a','tLbItwG','BKTLr2G','BwLZC2u','uMfKyxi','ltiUnsa','CYbLBMu','C3rVCfa','mtaIihi','DgvYzwq','sgPcq00','oMzSzxG','C3rHBgu','z1nfCKK','r3LsthG','wMz4vuu','tMnrvuC','Cw1mt00','sKf0CwW','ihLLDca','zxiTCMe','AwqTDgu','y29WAwu','WORcK8kqWOBcJa','ohb4o2G','ywDLigG','ywLSywi','D2HLBIa','DMjqBfe','wMjfwvy','WONcJCkpWOFcKq','B2L6Efy','tvzpBMK','mhb4oYi','s21pDLK','Dgf0Dxm','igrHDge','rxHWB3i','ruLqwuy','BNq6mte','AxvZoJe','yNLttgC','zxjLzca','oYi+tM8','mNm7Cg8','wKn6r1a','vgHLigC','BMfIBgu','yMLRCfy','BgLKihi','yxjLBNq','WPxcJmkhWOBcHW','WO7cK8kvWO3cJG','DMfSDwu','WO7cHSknWOBcIq','ihvPlw0','rgHXwwW','WOZcICkrWPxcKa','DgHLigm','D1P0suS','EK5trKW','vMjAwM0','ztTWywq','D29YC3q','id0G','pc9ZCge','lJmPo2q','ChG7zM8','sMXQyKO','yxj7D2K','igzPzwW','igfWCgW','vNnqAxq','ysXI','ANrQy1a','iZaWmdS','DhLWzu4','Aw1L','Dw5Kzwq','BNrZoM4','Bg9N','Bw4TBwe','Bgu9iMi','zvn0CMu','DgLVBIK','nxWWFde','WOJcKmkvWO7cLa','z2v0vwK','Fdr8mhW','tLnszKC','vgzvEwm','EdTHBgK','BKjOtw0','zenOAwW','zxG7z2e','DMGGlsa','B3PzC2G','wgXLrvy','CM91BMq','rvnqig8','zwn0Aw8','ChG7Agu','lwLUzgu','AwzYyw0','WPlcI8kmWOJcIq','txvSDgK','yLHuCMe','uufdtfm','rxzQAwi','mJu1ldi','rg55D2e','lxaSnta','sfDJA0G','mtaWnZe1mZb3D3rXDe8','WO7cKmkrWPtcJG','rgLHz24','AwzMzxi','uK5MANm','ldi0mIW','AwvKige','z2v0x2y','ihbHC3q','CMf3qq','tLfhEum','yNzqEfy','zvfIC3a','C25szM4','rgzzCvO','CKnVDw4','teTRzLu','q2f2uwO','nJq2o3a','DhrVBtO','DhLWzum','C1D1yva','DwHtu3q','EIaTihC','DZOWidi','ChG7CMK','rMrqru4','mhG3yW','r0PTue0','CgL0y2G','tejoBva','WORcI8knWPtcJG','rvrAwxm','BvrpwuG','yMuGCMu','A1Dgwxm','lM1UlwW','B2zMihq','mcWUntu','EsbMywK','oJi2ChG','DcbHBIa','DcaWicG','sgrlANi','m3W0','DhKGAw4','BYb0Agu','B3bLBG','yM9VBgu','Fdf8nNW','zw1LBNq','yNL0zxm','sMj1s1O','igzHA2u','y2fWDhu','lcbZDgu','zM9UDc0','B3vUDa','DhbHC3m','wKDKq2S','vhnAzhq','wxvmAwO','CMqTAgu','idaGmJq','m3W0Fdi','icaGia','ihjLCg8','Aw4U','CenVBNq','mNW0','DY5vBMK','CNmP','igvUDhi','r1vfu1m','q291BNq','tvzdDhG','Fdn8mq','zY4G','v0jhvw0','v2vHCg8','Aw5ZDgu','igDHBwu','DMHutwu','BJPJzw4','CMf3','uMfUz2u','Bg93oMe','B3bLBIa','z2v0x3i','CYGXlJe','ifbpuLq','DwKTBw8','WORcH8ksWPxcHG','uezUsKi','z2LMEq','Dg1xv2C','ktSTD2u','uxfVDwi','yxmSBw8','DhjPzwq','WONcHSkuWPlcKG','zxjLBMm','BgqGAxm','DcGJzMy','WOVcImknWOFcKa','BxvJq0K','ruTrzNG','zM9UDa','mdaWo3u','BNqXnG','DgvZia','q2fTzxi','sxbZsha','C2v0Dgu','ywfkwNG','B3j5','BJWVyNu','D2XpB0S','yw5NBgu','zhrOoJi','WRaSig91','v1z0C2W','DvLWBMe','BLbPr2i','WPpcHSkiWO7cKa','tKTkEwK','WO7cK8ktWOVcIG','EtPMBgu','B25JBgK','svHbAu0','BLj1BNq','pgj1Dhq','igL0ige','B3r0B20','txz2sMy','zxiIlci','twXxt1e','D2fSA2K','yxjNAw4','yxHQzNK','C3nPBMC','zgL2DgW','DhbHuum','ruHdCw4','mtGGnIa','svflAw4','zYbMywK','WOVcKCknWORcIW','AxrZ','yMfZAxm','vwf4q2y','CNnVCJO','uxD3s1a','yxbWzxi','BwLUv2K','t0v6v2e','C2vYlxm','WOZcKmkjWOBcKG','DMvYBg8','tufKz0C','B3jT','BM90igK','DgLez2O','A3mGD2G','ExrLCW','Bgu9iM0','wfnbsK8','DMvYE2y','zgTPDc4','ChGGC28','yZfKo2m','Bu1bthy','WOJcLmknWO3cJa','jtTIywm','yM90Aca','rxLL','zxLL','icaGy28','zw5HyMW','z21SD24','CMvSyxq','ifnRAwW','Ewf3','tLfMrfy','zYbIBgK','zwruCxi','ifnxlva','WO7cJmkqWORcJa','nxWYFdq','zuzMtK4','zYbSB28','Dw5Kic4','Bw9UB3m','B25Ligi','ig9MzNm','zsGPlMu','DgLHDgu','ChG7y3u','Ewzvv2y','tLHAqKK','BhK6Aw4','o2zSzxG','Bw4TCge','D2L0y2G','yMfYzsa','CwzRCLK','vw5PDhK','Dg9YqwW','WOVcHSkuWPtcKq','WOZcH8kgWOZcKG','B2DVlxm','vg90ywW','y3qGzM8','B21Tyw4','nsWYntu','DgHLBG','DwvxCMe','yK5VCve','uNvUDgK','tNPPt3C','C2STBge','CefTsxO','CLDKyxe','zwqU','v1DSzKi','D2HVBgu','DgG6BwK','AxHLzdS','Dw5Kzwy','BIbjtLm','nZKSmtq','igjVDgG','zZO0ChG','B2HgyuC','v3fxy00','y2GGDgG','sfz4yxG','zNHusK0','kde1mcu','zxzLCNK','mhGYna','WPdcI8knWO3cKW','C2v0vwK','zxrL','Ec8XlJq','EM92q1C','u2vLBG','y2j6tM4','WOVcISkhWONcKq','suneq2C','CMfWoYi','C2zVCM0','zsbTAw4','yunjtvy','Fdn8nxW','CMfJDgu','mJq2ldi','WOVcKCkrWONcKq','AwrLE2q','WOFcI8kiWPdcJG','Fdb8m3W','wLbgCLm','yxr0zw0','AM9PBG','BNbvAxK','ksWGC28','CNvUBMK','C3foA2W','zNjVBsa','u2HHCNa','DhrPAfK','C2STC3C','rJyGywW','u2DNzha','ugfYCvO','y2SIpJW','Dg9gAxG','WO/cJmkgWPhcIq','Dte2','zK96wK0','WO/cLCkjWO7cIW','rMXHzW','z2v0','WORcJSksWPxcIW','vfDXC0C','yxvSDa','B2zM','ldiZocW','wvHzBwu','uKzbteS','CM5PBMC','EKLOuKe','AgvPz2G','EdTMAwW','qMHQCLu','ohr6sM5hwq','DxzUy1q','ChP3suG','z21sAfq','sevQr2m','Fdb8mq','ug5zrey','yYGXmda','pJiUmhG','DMvYEsa','rLH3Dvu','sMfoEge','AguGBgK','ihbHBMu','pgnHBNy','CMTqBge','ig9Uihq','sNvTCca','CgfKzgK','yKzRvgC','BgfZlg0','ig5Vigy','C0D4q0C','WPdcKCkvWOZcJG','WOBcJmkoWPtcKa','ywX0','AK9iv1e','v0TOveq','B2fYza','sKP1A3y','mNb4idC','A2TWsum','WPhcKSkpWPdcJG','AguGB2W','Dc1ZAxO','DgG6mdS','Dw5PDhK','ywjSzsa','DNDMqu8','tKfltfe','lxrVz2C','sNzLrLm','ieeGAg8','sMzYs1i','AwDPBMe','WPlcJmkjWORcKW','Cg9YDca','nNb4o2i','BNrPBwu','C291CMm','DhLxzwi','ihzPzxC','WOFcJSkjWO7cKq','zgnoDeK','sKzJyw0','q1zwBee','zwXHChm','yNL0zuW','uLmG','Dhj1zsi','WOJcH8ktWOZcLa','BKTmAMK','mxb4ihm','zgvYoJa','owm5o20','o21HEc0','yxnZAwy','zxiTC2u','y3rPB24','r0fuBue','oxW1Fde','z2v0sxq','zw50o2i','BxmGD2K','C2fNzq','zM9Sza','DMvKpq','zwn0ihC','nsWXmdC','z2v0rwW','nZq4mZy','CMnLoIa','owqIihm','DdOXnha','rvfbAfq','venWu3O','oJeXChG','DYGWida','Ee5VEfC','DLzJEem','BhDHCNO','psjTBI0','C2v0sw4','EwvYqw4','Dw5KoNi','ALLvEKO','DhLWzq','B0T2Bfy','q1bMBwq','B29RCYa','z1fqwuO','qKrls1K','EKvSy0S','B2jMsq','oJyYDMG','wK9fqvy','C2XPy2u','yNL0zu8','qNDUuhK','vhvAuwy','yxjTAw4','x19WCeW','ALfHr0C','ywL0Aw4','A2PlD28','z2fTzq','ignVCgK','zLzTtgC','uwD4sNi','DcbIzwu','D2fYBG','CMrLCI0','B246zMK','B3rO','AgvSza','Dxm6mta','z3nqseG','vgTKquG','DMzoz3O','yw5NzxS','vMLlqM0','DgGGB3i','EhjSzxG','lde3nYW','BwvZC2e','DMLLDZO','EwDJvNG','Bxm6y2u','CgfYyw0','DcaWida','CNj7y28','ihnVBgK','EMLtEw8','uKTvAhK','EgfxsNi','CefMAvq','zgrPBMC','lde0mYW','D1nXug0','zdP0CMe','zsDZig8','vhDrAfG','m3WW','uwP4r2u','ywi6Ag8','m3W1Fda','WOZcKCktWPxcHW','WPlcImklWPxcIq','y3rIEwC','C2L5reG','lL9Nyw0','WOVcKCksWO7cHW','AwzPzwq','BNrLCJS','BwfYA3m','WOBcJmkkWOVcHG','WOZcI8kpWO3cIa','C2LUz2W','C2L6zq','pgrPDIa','z2LUoJa','Bgv4oJe','yvDysKO','tMPOwvu','yxbWzwe','Aw5KB3C','BNqTD2u','Ds1JC3m','r0THDwi','DhPzvwW','yxjN','B3G9iJa','mtjWEca','mJG7','DMuGBwe','cNbPDgm','Dw5PDa','oNjNyMe','WOJcICkpWPhcLa','WOZcKCkmWORcJW','zwqGyNu','DLPLENC','Dcb0Agu','v3jHCha','ndC7','tM1Zzei','oJa7zgK','AgX4ALa','WO3cLmksWPpcKG','CgX1z2K','CMvNAxm','EdTMB24','wMzJAwK','o21HCMC','D29YBgq','zhHhqLO','ugf0Aa','ndC0odm','zuf0rMK','DgnOzxm','BxburLK','zsb0Age','tLnjEw4','ntyXmhrUrhDdAa','lIbeAxm','oJe7Dhi','zuL0zw0','WPtcJCkhWPtcJq','BKXHCLO','zgLUzZO','WPxcICklWO3cIG','BxfeBxa','A2L0lwe','cLSGif0','icHZB3u','CMfKAxu','pgiGC3q','WPpcI8kuWPtcLa','oJrWEca','AvPJu0C','zhnvDNe','D3jHCdS','DerHDge','wu1muwy','tg9VAW','ywLUE2y','y2uTAxq','Aw5KzxG','CMnjz20','qvn2DvO','C28GC3q','WOJcLmkoWOBcKa','BxjMBNe','C2vYAwy','vwjsA2e','EhHLr1u','WOJcKCklWOFcHW','v296qM8','yhbSyxK','teLwrsa','AgvHCfu','zNbZ','ruLnzgm','CgXPzxm','yuzYB20','ruXgC2q','Bu55ru0','Bgf0zvK','WPpcI8kmWO7cIq','tKDguKW','Bg9Zzsa','CgXHEwu','Dde2','z2v0q28','zM8Qksa','vgnWzui','DM9Pza','y0XprLC','AhzLsgS','ksbZyxq','ChPQtxm','mhGYma','ktTIB3i','u0TVteC','CgHVDg8','De9rEvC','Ag5WEhK','sLnYwMy','Bwf4lwG','BMvS','ihbYB3y','yxrnCW','WO3cJmkgWPtcJq','WPtcJCkrWPhcKa','BgvMDdO','lM1Ulwm','WOJcKCkvWPlcKG','zKv1rwe','ugryy2e','nhWYFde','CKnVBg8','vMP6q2q','o2fSAwC','ChG7yM8','yNjLywS','ywiUywm','zMLSBfq','rJKU','BK5LDhC','WOZcH8kvWPpcIW','tMv0D28','lNnRlxm','icbJyw0','EMu6mta','CxvHDa','C3rYAw4','C2v0ica','sfryt1O','vxbKyxq','u2vSzwm','DgfU','DJiTy3m','r2fTzq','nIaXoci','tNbPtxK','igLUC3q','icbTzw0','mda7y28','C2v0rMW','i2zMzJa','ysbtA2K','DdOG','Fdb8nq','WOFcICkjWPdcHW','mIiGC3q','DdTIB3i','idmWChG','yK9eww8','EeTJtNK','seDbCe8','icbVyMO','v2rArMm','ie9IC2m','CfLrshi','AhnsBey','Dezjyvq','wxbmrhm','re9nq28','EtPIBg8','WORcISklWO/cKG','lJa0ktS','AwqGzg8','i2zMnMu','zMXVDZO','yMTPDc0','zNvUy3q','Aw9UoMy','mNb4icm','nhWYFdC','l2nHBNy','AxmGyNu','wgDpEwy','wfzMwLG','lYbQDw0','ihbVC3q','Dg57ywW','m3b4o2y','vKuGDG','DxrVo3O','AZPICMu','CM9Rzs0','mtC3lc4','BvzOEwe','zYbZy3i','WPdcICkpWO7cKW','vLDAyMG','zMLYC3q','s01mz2y','z3jVDw4','zwLNAhq','B3qGica','ve13DNa','vNnbt0m','zMLSBfm','y3DXr0C','tLbdx0m','Aw1Lr2e','zxnVBhy','CxvjquS','r01JAKG','wwvLsxG','zgLZCgW','ldi1nsW','EdTWywq','C2v0qxq','mxW0Fdi','qvrMruK','AgfUzwq','nNW0Fde','mJrWEdS','AxnWBge','B3vWig8','Cu13wxq','sMDKr2S','zYdcTYa','DgfNtwe','BguGC2e','C3mGmhG','mhHKna','zsbUzxy','mmkWlcbW','C1bLwfa','Cg9ZDe0','ugHVDg8','vujqDeu','z25HDhu','ywXSzwq','zNvhz20','DdPUB24','oJe7BwK','zwfKE2q','AxrSzxS','EuPpz00','WOVcKSkjWPdcJq','zKDkwKK','CM9ZCY0','pc9WCMu','rLbty28','ywj7zgK','sg9VA3m','ig9MzG','ksbHBMq','r0fdB00','CxflwNy','ufjQzeO','Bg50yve','lc4WmJu','mteUnxa','su5higy','zZOXmha','CNmG','phn0CM8','CvPry08','ignOzwm','Dw1WAw4','BM8Gvxa','zgf0ys0','ywnRihq','DhK6mdS','ufPpAuC','o21PBI0','WPtcKmkvWPlcJG','lKHfqva','khmPihq','t2vIBvC','yMLUzgK','Aw9UoMW','AeHNvgi','u2nYzwu','BNnVBge','AvnTywK','sgvHBhq','mIaXmK0','sw5ZDge','WORcJmkgWPxcHW','zgHLtw0','vfvKt3y','o2jVEc0','AwDUlxm','WONcLmkrWOFcHW','BMfNzxi','B2LUDgu','Dxnxvei','y2TNCM8','B2jMrG','Ag90icG','shLksM0','zxmGB2y','zw5NDgG','D28GzMW','WPdcH8kjWOJcJG','EvrHCa','DtmY','rJKGDhC','BcXTAw4','kde4ChG','B2DVE2q','Aw50zxi','weftCxm','BgfZDem','nwmWidm','BvbbsxO','C2v0tge','A3mG','DKDgtu0','yxjKE2i','BxLyyxG','vNH2CK8','yw5KigG','qNztufi','y2uSq28','rvbUv0O','Axr5oJe','WPpcH8kpWO/cKW','DxjHx3m','DcbYzxa','lMn0B3i','D3jHCdO','yM5xwKO','vgHPCYa','WOZcHSkvWPhcIG','ChjLDMu','rurRvwK','rNbMvMW','WPxcJ8kgWOJcKq','lxGIihm','DvPut2m','sw9UwKu','WOBcISkpWO/cIq','DLv6vMy','yM9VBa','BMnLC1i','yM9KExS','w2fYAwe','DMvYC2K','wNL6wNK','ys1ZA2K','Cw9UEhi','C3bHCMu','B250zw4','txfNqMO','CI1Yywq','BwuUx2C','Cwrjreu','WPpcLmkhWOVcHG','B2TZihi','qMDeyvi','vxzwzwy','DxqGEw8','zfnUq0K','zgLMzG','C29SDxq','ys5ZA2K','DhDcEe0','t25bCha','idyWCYa','zgH4wfO','q29WAwu','WOVcHSkoWPxcKq','z2fcuuK','zeniy3C','ruvREKC','CMvMCW','BhvNAw4','CNmGyxi','iIbZDhi','C0HrChu','C2Pksuu','ie9o','oMLUC2u','qNLHEw0','lwTD','ieaG','whLnAuG','zw4Gyw4','A2v5vxm','yMX5lum','A2n5ruS','nsK7yM8','WO3cKCkoWORcIG','lsbvBMK','v3DnyxC','BxbSyxq','C2STy3q','ChG7Cge','rMvXtg8','zvrkExm','B24Gzge','B2SGAxm','zMXLEdO','WO7cLmktWPpcJq','u2PcA08','Bvnor3K','cNzPzxC','DKnSDMy','C3CYlwy','u0rrs2e','sKXJC00','tg9VAYS','EK1Ss2m','CgvYBw8','AgvHBhq','AxrOie0','mYWXmdy','lhrYyw4','ohj2DuLprG','AwzZz3q','Acbxzwi','yM9KEq','Awq9iNm','BM8TBwu','EcbZB2W','BY1MAwW','oJPHzNq','WOZcISkgWPdcHW','z3jHyMi','BwLLCYa','zxnZywC','ie1ciea','WO7cLmktWPtcJq','Dg91y2G','Ag1SDKe','DxrVo2i','zwqGDgG','yw5LBca','zKTnBvm','C3qGysa','B25PBNa','A2noz2y','DgvTCZO','oJK5oxa','cKLUC2u','ywjLBhS','mcuGBM8','z2H0oJC','Fdj8nNW','ztTTyxi','o2nVBg8','Dg9tDhi','ve5yrvq','zw1VCNK','y2fUzgK','Aw5MBW','rJKGihm','BgLUzwm','y2XVC2u','s0n5vfG','uu1mEK4','zMzZzxq','BNrxAw4','D2fZBu0','AwDoq3a','iIbZDgu','mxb4idy','B3rLlMu','BNqTC2K','y2XLyxi','owq7y28','WO3cLCktWPtcIW','BgLNBJO','mJHWEdS','s2vNB2e','r29tyum','ys1ZDY0','vMvvu1K','yxvlExq','CK1Yrxi','ndzWEdS','r2TRzLi','yuLHEuq','ChverNO','WOVcJmkhWO3cLq','Dxr0B24','suPOrNK','q0nSywi','sevbufu','wvDwExy','CKXwz1O','Bw92zvq','CKfHsge','WO7cLCkvWOZcJa','C3CYlwi','CIb0Agu','CMvWzwe','uIbbq1q','i2zMogy','DhrLCG','DxjUzwq','Axr0zwq','WPpcJmkrWPhcKW','zcb0Agu','CMvKige','BNTIywm','Aw50','rLbgreu','CMv0','CxvkzvK','CM9xvu8','D0zet3O','BgLUzvC','y2uGyM8','lxnOywq','u2Prvfq','tKzhz1a','zJu7Fq','Dw1KDe8','lcbuyw0','EcXJywW','B2X2zwq','yxGTD2K','WO3cK8kvWORcIa','mtTJB2W','BMCUcG','CuHABu4','msiGC3q','WO/cI8kiWOFcHG','Aw9ky2O','zciGC3q','WOJcJSkiWOVcKa','zsbYzxa','ywnPDhK','C2STCMe','igfUzca','zdDHotK','tgvqrLK','ALjftKy','igjVDhm','WO7cKCksWOFcIq','phbYzsa','lde1nYW','zwz0oMe','y2GUC3K','AgvHCei','ocK7Fq','mhGYoca','DwHtu3G','AuHky2m','tJWVyNu','C29SDMu','rgLMzIa','zg93oMK','yw5ZzM8','B2TLlxC','tMHyAhC','quLPtw4','pc9ZDhi','Dhj1y3q','yxrPB24','C1rny3y','zxHWB3i','CML0Dgu','qKv2AMS','iZjHmgy','Cg9Z','o2DHCdO','CMvSyxK','lJv6iIa','DeTvA3q','oMf1Dg8','WORcImksWPxcLa','WOVcLmkiWPdcIa','nZq4mJK','y3qOCYK','ihLLDa','DMvhuMK','CMfUC2y','ChG7yMe','yMeOmJu','uuHUDfy','qxnZzw0','CfzbB1K','Aw4TyM8','iM5VBMu','DxnLCI0','WONcKCkgWORcKq','ndHWEcK','CM90yxq','psiXlJu','ys1ZDW','Aw50BYa','yMrHowm','BKjlAMu','sMD0CMC','u3nKv0G','CgfPCKG','BwvUDc0','s2nyvMe','B2yGDMK','WPhcImksWO3cHW','WOJcKCkvWORcHW','WOJcISkiWPdcLa','A0LXAfa','Dg9dD2i','Ds1YB28','y0Duuxi','DxjLzey','y29SB3i','ywSTD28','Du1bBK4','lxnPEMu','Fdz8ohW','zxLKDLq','igj5igu','igvHC2u','WPxcISkrWPxcKG','WPlcI8kkWOFcJG','qNvqwNi','BI5OB28','ic8GrJy','sLHpDfy','ohb4ide','DMvhyw0','DhDPy2u','z2v0Dgu','B3ndBKO','A1fvzNO','y3jLyxq','rfPRD3O','WO/cLCkqWOFcJq','WONcImkrWPdcIG','BhLwvK8','yxbZAg8','w2rHDge','u2fRDxi','BMTLEsa','vhjHBNm','txb3reS','sw5Zzxi','oJOTD2u','mtfWEdS','B3nPDgK','u3fKuhC','ywXSoMK','Bwvnyw4','rMHrwvu','B24GAwq','BwfW','z2fTzvm','ldeWnYW','BNvTyMu','CI10Ahu','sLPvs2q','y2X1C3q','AwX0zxi','BgvHEfy','q1L4sMO','CMfUC3a','zM92u2e','yuj3zNO','DMvJmG','CuDKuNm','CJPWB2K','CJPYz2i','ChvZAa','iJ5ZywS','C3qY','yM9Yzgu','DxDTAW','zNv2ue8','EdTVDMu','Eezbz2q','zMvLDa','CM9VDa','A0fgrNK','lwjYzwe','CNnJCMK','wKjfsfi','WONcK8kuWO7cJa','Ag9VA1a','E3bVC2K','BNvpB0C','idaGlYa','qMTlvhu','vuPWv1u','zg93BG','C3zNEM8','C2vUDca','yxzVr28','BML0Awe','ANvZDgK','Cg9ZAxq','v2LwB3G','C2HHzg8','AfnJCMK','C2TfBLe','zMfPBgu','A3mUBgu','DgfSBgK','qMzSuMO','CMvUDdS','AhjLzG','lNnRlwG','Bwf4','WOVcICksWONcIW','BMq6Dhi','zgvYlxi','ChrY','sfveigq','BM8GC2m','kdiXlde','BwuGAw4','EfLyzhi','oxb4ide','jwnBC2e','Awr0Aa','seDSr28','CMf3wwe','rJGGlYa','Cw5UuKy','Eu16suS','zunOAwW','v2LKDgG','u1fvBwO','yxbP','BMCGyxq','Ag9Ksw4','WPdcJCklWPpcIG','yw5ZAxq','ndi4mtG3mZb6AhPWvxK','AwvSzca','Cg9Zqxq','B2XZE2y','EdTMBgu','BwuUCMu','BcWk','zxPet1a','AxrSzsa','A2DYB3u','oJCWmdS','lY0WlJu','EdT9','Bhvvr28','AxrSzxm','wMftCLG','mNb4o3O','quDws1G','C25HChm','BKLIuuy','nJiWChG','zeH0A3u','AxmGD2G','CMLNAhq','mhG1yW','AgvYAxq','wvjnC0y','zLn5y1O','odmWnJCWnMnqzLv5Bq','BNq4','uhvvz1m','WPtcHSkkWO/cJG','WOBcH8ktWOJcJW','WO3cLCkhWPpcKG','BNrYB2W','BM90zq','WPdcKmkpWO3cIG','CMvZB2W','zwqGysa','B1PLuxq','B2SGEwu','swzUseC','B29M','v1bNu0e','zxmGDgG','Dg9W','FdeZFdm','zxjYB3i','Eu1stgC','ihvUyxy','BMnLv3i','s21kq08','m3W2Fdi','y29Z','lM1UlwG','zuT3sgC','wLn2CuS','WOBcKmksWPhcKa','y29TyMe','AgLKzgu','B25NE2m','tg9Hzgu','t2Hnwuq','C0TfrLi','r3f4uMW','yLLcAwu','lNnRlwi','DMLZDwe','iJ5dB3a','z2vYlIa','uhP4whu','Cgrzu0O','nYWUnYK','sev3wfG','whPTC0K','DeftC0y','lK1Vzhu','vgv4Da','psjWywq','oMnLBNq','yMfUzc4','zK1lv2S','ucbVBJW','ztOXnha','B3qUBw4','wfPpCgW','CM9Wlwy','AgP4vxG','DgG6mJK','zsb1C2u','zcbYz2i','Dhm6yxu','CYbVCNa','DenPCgO','AwrLBNq','y2XHC3m','oYi+','Aw9UrM8','yxjHBMm','o29Wywm','D0vozwK','A2v5u28','CKXPC3q','lwL0zw0','4OcuigzYyq','ChbLyxi','DcbPDca','nMi5zcW','y3PYBue','C3CYlwG','u3j6zwC','rKnkDw0','zxj0wgK','DxPZvLy','C28GDgG','B246ywi','DfnLAeG','CNmkEwe','lGOkswy','BMDL','zYb3Agu','ihbHC3m','AKngBgq','wwvezLq','CuXktu4','WOZcHSkpWPhcJW','BIbHihi','r3H0t2i','wu5qy3K','tLzjAxy','CwLuD1i','CMDPBI0','mIWYosW','Cfr6Efy','ltqTnY4','Dgf5CYa','uNz0zxa','ihbHz2u','zsbHCha','pt09u0e','mhGXna','Axb0igK','icbOB28','zgf0yq','weHPChC','C1fwze4','Fdf8mhW','BgvMDa','DgeTyt0','DgvHBq','ihvUAxq','lNnRlxy','rvnqig0','De5zCwW','wffXy1C','sLDJDge','svHfBvm','BNLKswC','WPtcK8kiWOJcKW','ywqGzNi','WONcLCksWPdcHG','yMfY','mJu1lde','zMy3ytK','zxG6mJe','DYaGia','zwn0Aw4','qvDkz1C','sfjYq1C','Bg9ZztO','Dufmr2y','vfDzvui','ywXSvMu','zvj5vei','yxrHBJi','u3bLzwq','yLDsvLO','ywn0','BeDrsfC','AhvK','DurMwe8','yM90q28','Bw4TC2K','A05UEge','idfWEca','igHVB2S','tgLZDa','yMXLig4','zejdvxq','t1j5t20','Bg9euMW','s011v0C','CxvIzgW','ignSyxm','t0nJC20','sgvPz2G','A2vKihu','owq7Fq','oInMn2u','yMLksvu','WPhcKCkjWPhcKG','C3bSyxK','Aw9Uihu','vvvyCKy','mNWZFdG','zw50rwW','ihnRAwW','BgvUz3q','t0DpyKq','BIbtruu','Cd0Imc4','WPxcJSkpWOJcJq','yxjKlwG','z2f2uKy','igXPDMu','r2fWvfi','BNrLBNq','WORcKSklWO3cKq','mtu3lc4','WPlcLmkhWO3cJa','t25ezxm','yxjTzwq','BNqZmG','zJfIo2i','zvfAAg4','BgrPBMC','zM92','CdOXmha','DgXLCW','y2HLy2S','zYbZDxm','CNPjrfu','D3zKu1y','ywLSzwq','WOBcI8koWORcIq','lxnWywm','ig9U','yNvMzMu','igXPA2u','t1m+pG','CMvZCYa','uKfqueu','WOBcLCkvWPhcIq','qvDLsfC','B2SGAw4','WPhcI8kjWPtcKG','lc40nsK','Aw9SC0G','igzYyw0','CxLwtxm','tffnDK0','ALvkz24','wNPxEe0','C3zNE3C','CenPuMS','ywWGBM8','svLVzeO','nhWW','AgL0CW','r3rIqKG','CI5QCYa','WO/cKCkoWO3cHG','zxr1CM4','EeD4CLa','C3HQvha','lZ48l3m','uK1Qs3m','ten6AgO','Bgv4oJa','BNf1sMC','EfDyrKu','EY13zwi','CMfUihK','ywXPz24','iMrPC3a','twXxseW','AfHrtui','WONcICkoWPlcIq','igj1Dca','WOZcJ8kmWORcKq','sNfkwgK','CNPQyvC','AwnOlJW','wwvhAuC','D2TwzgG','Ewf3r2u','WPxcKSkiWOFcKG','BMfPs1i','wuPprMi','zwvKzwq','CMf0y2G','EI1PBMq','zvbPEgu','CgfYC2u','DwDPBI4','zxKGAxm','rLrdtxC','Aer2D20','y2ndy3O','y2fSBa','lJi4','ALbdCuu','Bwzdv0W','u1bSwxq','BgLUzvq','nhWXmhW','wKDXuhe','yKDNB0m','WO3cLmkvWOVcIG','otLWEdS','y29Kzq','C2fRDxi','DdOXmha','yNjmBgq','imk3ia','BhTWB3m','vuvIBM4','yIXH','lwe9iG','Cffvsee','CMf3ugK','veLwrq','yMeOmJq','rNnZBxy','ic0GCNu','CMeTzxm','lZeUndu','WPhcICkuWORcKG','BhvLpsi','CMvHzca','zxj7y28','DKDuCMO','nIWUotu','BhvLica','EIaOsw4','Cc1SzW','zMXVyxq','s2XJtwS','ug9ZAxq','AgvSBg8','vw5hs0e','ywqGzMe','EwTtuwC','BfjHDgK','idqGnc4','C21JzuS','mhWYFdy','AdO5mNa','oJi1ChG','qwTIt1K','ywrPzw4','lcbnzxq','oI40o30','ruHmy0S','mtjWEdS','zxi7Dxm','ugTeDuG','zMLYzsa','t2rwB2e','yt0IC3q','lNnRlw4','nsK7Dhi','ChGGlte','DgvK','CMvTB3y','WOJcKCkvWPpcHW','WOBcI8koWO/cHG','BwXTtfO','wgHtB2q','shHdr2W','D0rMzKq','y2fTia','sw52vwq','svPvrM8','r0TyCg4','A2v5qxq','DxjHDgu','Aw5Ozxi','o3bHzgq','D2XLB3G','ww5zrxO','DhjVA2u','CgfJAxq','nYWUmty','BhrLCJO','sMDqq04','BJOG','tw9KDwW','Cgu9iNi','DLP4Che','BM56qwS','Dg9Y','ihnHBxa','i2y3zwu','DhLSzt0','C2v0sgK','oImYyta','CMvMAxG','r2v0Dgu','qu5pveG','s0rxuLe','CMvWBge','zYbTyxi','BMrVDY4','BdPUB24','zxnWyxC','vwDXAvm','BwuGD2u','yMX5lMK','CNHwCg4','zcbPCYa','CMqTDgK','sNLiB2O','r2fTzsG','s1vsqs0','CMvUDca','Dhzeuuy','WPpcICkvWPlcKa','uNv0A0e','mJrWEa','DgfN','wujyBwm','igq9iK0','tMHSt0W','DeLMBvC','CIaO','z1fuseS','A2vLCa','tfHKqvO','EhbVCNq','iNnUyxa','vhPcAMG','igjSB2m','AguGD3i','CJTNyxa','nsWUmdi','BwvTB3i','zxjZyc4','EKfyz3q','uwDfyw0','ig9Uy2u','BKzcB2q','wuj2u1G','BIbZB20','zcb3yxm','BIbYzwW','iNjVDw4','CMf3qG','AgLZig0','mtiGmJe','CMfUz2u','WOBcImkvWPlcLa','Bwv0ywq','u2vNB2u','CdO0ChG','C3rHBMm','CMfTzsa','DdPTAw4','tefQvwW','CMvIDwK','BLzPzxC','CNvqrgm','qLHJB1q','ihrOAxm','DgL0Bgu','pZWVC3a','WPxcJSkpWOVcJq','AgfZtw8','z2T1zeu','CgLUzYa','y29UDgu','oM9Wywm','WOVcLCkkWOZcHG','E29Wywm','BM90ihi','iNnWiIa','nZq4mZa','CeH2uNe','C3LUyW','CgXfBum','Cw5ruuy','igSWpq','BNn0yw4','uuvxwfm','BgvKoIa','rgzdreu','qvbvoca','C29SAwq','y21K','o3DPzhq','mJu1lc4','zxjREMG','zK9SvKC','B2f0nJq','Bg9Hzhm','A2LUzYa','ihnOB3C','ihn0CM8','zhrO','Dhv5ALO','DuXlwLi','r1v3tLK','BM1qs3C','AujuDgC','BurADvy','WOBcK8kuWOVcKG','nsiGC3q','Ahq6nZa','rxbvwvK','WO/cJSkpWOBcKW','mhGYyYa','C2vYDcK','Dxm6nNa','wfHMsNm','C2STyNq','yMnrAu0','tev3AKy','CMvKihK','nZCSlJq','lxjHzgK','zw5LBwK','mcaWige','CLf4qwO','Afriq3G','AK5yzMy','WOJcKmkvWONcJq','r0DFr2e','BMD0AcW','WO/cImkpWONcIq','WOZcK8krWORcIq','lwzHBwK','yMvHCMK','DgG6mJG','zxnlt1a','igfYztO','yuXxzwi','AxnmB2m','sKXZvLa','sNHJtei','CYbHy3i','zvbYB3a','tM8GugG','A3nPvLa','DYbNBg8','ueLds1a','quv2uwe','AMjKC1K','Fdf8mW','ywnRz3i','WPtcISksWOFcKG','yM90Dg8','Dw1IE2i','zwXLy3q','s2z2y28','C3bSAxq','ChG7Fq','B2XLig4','Cw92D0y','uMvSB2e','CLL0rem','rvfIBwC','mJGPo30','Dxm6oha','rwL0Agu','qu5eihq','WPhcJ8kiWOBcKq','B3i6iZG','EuLyyMO','z2zczvG','lJuIihy','Bwvhyw0','lxDLyMS','zKzQv0u','lJuGms4','idaGyxu','mcaXChG','EdTHy2m','BMDZ','zw50tgK','tgLUtfm','Bgu7zMK','AwDUlwm','v1ziwfq','yMfS','D01rrgW','rw5LBxK','BvrXqMW','C3zNiIa','zJmY','lJa4ktS','u3Dnzha','mtbWEdS','y2fTzxi','lg1VBM8','qvz5Dgm','y1b4yMG','Cg56y20','CJOWo2i','zgTPDa','CMvHzhm','o2zVBNq','ifvxtuS','zLn0s3u','zw50','lJGYktS','nYWYmsW','igzVCIa','ChPTu24','A2v5CW','C3mP','zJzIowq','zwqGlsa','lJKPo2i','BMuGAg8','EhbiAxm','yw1Ligy','mNb4o3a','ihnPz24','A2vKpsi','EvrMwKK','vvHHBhy','zLPmsvK','CvrRD0e','CMvH','zxnJ','nxm0idi','tg5Iquu','WO7cLmklWPdcJG','sfnswKO','yKLitMG','zgvMAw4','rxnhtKO','mhW2FdC','yLHJrNC','Ag13Auu','Fdr8n3W','WORcImkhWPdcJW','y21xBwS','twzVqMu','zxaGDgG','ktTJB2W','C3jXtKG','yY0XlJu','zxHPC3q','C3rHCNq','u3zqy1O','nhWWFdi','BuPnChe','B2jMqG','qNrWzhi','rgHxtM0','AMvJDhm','AtmY','suvyCgK','BM9Yzwq','DgvZDa','BNrPyxq','v0fXtKy','Fdb8nNW','qLLKu2C','BNrezwy','yw5JztO','lwfSAwC','nhb4o3q','Ec8XlJm','sgD1AeS','t2fdA24','lM1Ulw0','uMvHC28','yxjsueO','ihvWk2q','uKXkAwe','mNW4Fda','WOJcLmkoWO3cKW','WOJcLmkuWO7cJG','EhL6','AenlCum','AxqTC2m','uKziBvK','twnUAMG','C3r5Bgu','A3mGD3i','BJ8PoIa','BMqU','WO7cI8koWPhcJa','zg93','CgrHDgu','DLLqv2i','BezyCKC','Exvmuu0','ANvTCa','BfDHCNO','kdi1nsW','icaYlIa','keLUC2u','icaGDMe','B3jKzxi','CcbHBMq','Dw1Uo2e','AMj1vfq','C2fmyNe','qNjLywS','yxjT','rfP2s0O','ig90Agu','WPtcH8kmWPhcIG','DIiGC3q','lNnRlwm','EwXLpsi','nsb1As0','q21rDKC','CYb3zxi','yxmGzMK','WPpcICkqWOZcJa','A2LUza','seLXB3G','u01HCvG','BI5FCNu','ALPtzei','D2fYBMK','DcbUB24','uu9PAwO','BNnLDca','CLfgzvC','lJq1ktS','A1PZB1G','nduPo2i','EKX4tei','B2XPzca','WO7cKSkrWOJcKG','lxDYyxa','BMqIihm','u0X6wfi','Ahq6mJq','WORcISkqWOJcJa','qxrfAfe','tMfTzq','yxrLigy','EwvZ','BNrLEhq','AdOWo30','CMDIysG','lxnWzwu','yM90CW','wxnyEfe','BM8GBgK','A0HyCNa','rxHkAee','lc40ktS','quvuzM8','DgfSE3a','CMq7zM8','svrRAu4','nIWYmZG','C3fYDa','DgGY','Dw5KoNq','BMPgANK','y2nWqMK','vKTfq3e','yMfJA2C','WOBcISkoWOVcIa','CLDezKy','BhqGC2K','WO3cLCkiWPlcJa','lwrPCMu','n3W2Fdi','BgfvtgC','BfvMDwK','iZDLzta','qKDyzw8','z2v0sw4','ysbZDge','pc9ZBwe','kdiYChG','iIbMAwW'];_0x1a7d=function(){return _0x13af5d;};return _0x1a7d();}
