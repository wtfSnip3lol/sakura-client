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

function _0x563b(_0x576603,_0x2e571a){_0x576603=_0x576603-(0x21f6+0x3*-0x123+-0x1*0x1ce5);var _0x4783e0=_0x4336();var _0x68cd05=_0x4783e0[_0x576603];if(_0x563b['LjYoJv']===undefined){var _0x21f44c=function(_0x6e0a71){var _0x2d4d8a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1b5d38='',_0x3e42e2='';for(var _0x3f27e8=-0x12d9*0x1+0x108e+0x1*0x24b,_0x2c43dc,_0xd09af4,_0x4bf516=-0x26de+-0x1070+0x1ba7*0x2;_0xd09af4=_0x6e0a71['charAt'](_0x4bf516++);~_0xd09af4&&(_0x2c43dc=_0x3f27e8%(-0xe37+0x21c0+0x13*-0x107)?_0x2c43dc*(0x1*-0x2364+0x4*-0x503+-0x58*-0xa2)+_0xd09af4:_0xd09af4,_0x3f27e8++%(-0x19d1+0x8*0x6b+-0x39*-0x65))?_0x1b5d38+=String['fromCharCode'](0x20*-0x27+-0x690+0x3*0x425&_0x2c43dc>>(-(0x2bb*-0x4+-0x2*0x434+0x5*0x3de)*_0x3f27e8&0x1259+-0x3*0x1f7+-0x2b*0x4a)):0xec*-0x5+-0x2425+0x28c1){_0xd09af4=_0x2d4d8a['indexOf'](_0xd09af4);}for(var _0xad2282=-0x11f2+-0x1b*0x35+-0x5*-0x4b5,_0xd1564d=_0x1b5d38['length'];_0xad2282<_0xd1564d;_0xad2282++){_0x3e42e2+='%'+('00'+_0x1b5d38['charCodeAt'](_0xad2282)['toString'](-0x1*-0x1ef6+0x1*-0xf07+-0xfdf))['slice'](-(-0x1844+0x24ec+-0xca6));}return decodeURIComponent(_0x3e42e2);};_0x563b['eTGBcP']=_0x21f44c,_0x563b['xJUcXm']={},_0x563b['LjYoJv']=!![];}var _0x3ab228=_0x4783e0[0xd*0x172+0x5a6+-0x1870],_0x434ab3=_0x576603+_0x3ab228,_0x575b7f=_0x563b['xJUcXm'][_0x434ab3];return!_0x575b7f?(_0x68cd05=_0x563b['eTGBcP'](_0x68cd05),_0x563b['xJUcXm'][_0x434ab3]=_0x68cd05):_0x68cd05=_0x575b7f,_0x68cd05;}(function(_0x326660,_0x467c34){var _0x57d29a=_0x563b,_0x2a0891=_0x326660();while(!![]){try{var _0x1f9618=parseInt(_0x57d29a(0xc12))/(0x1*0x7c5+-0x99b*0x2+0xb72)+parseInt(_0x57d29a(0x87f))/(0x8b9+0x346+-0xbfd)+parseInt(_0x57d29a(0x3f3))/(-0x1e87+-0x1*0x14a5+0x332f*0x1)*(-parseInt(_0x57d29a(0x788))/(0x4d*0x2f+-0x11a5+-0x16*-0x29))+-parseInt(_0x57d29a(0x88f))/(0xd*0xc5+-0x1c3*0xe+-0x757*-0x2)+parseInt(_0x57d29a(0xb98))/(0x971+-0x6*-0x476+-0x242f)*(-parseInt(_0x57d29a(0xd4b))/(-0x225e+0x416+0x1*0x1e4f))+-parseInt(_0x57d29a(0x252))/(0x17*0x196+-0x1b37*0x1+-0x93b)*(parseInt(_0x57d29a(0x590))/(0x1*0x1d04+-0x179*-0x2+0xb*-0x2e7))+-parseInt(_0x57d29a(0xace))/(-0x2498+0x12d1*0x2+-0x10*0x10)*(-parseInt(_0x57d29a(0x9bb))/(0x3*-0xb29+-0x23a9+0x452f));if(_0x1f9618===_0x467c34)break;else _0x2a0891['push'](_0x2a0891['shift']());}catch(_0x486247){_0x2a0891['push'](_0x2a0891['shift']());}}}(_0x4336,0x565*-0x328+-0xc01d9+0x33526*0xd),((()=>{'use strict';var _0xe93fad=_0x563b,_0x16a2b0={'DoLtK':function(_0x136c33,_0x4bbac8){return _0x136c33+_0x4bbac8;},'bzvIu':_0xe93fad(0xcd2)+'h=','zDftT':function(_0x150f5c,_0x33ac95){return _0x150f5c!==_0x33ac95;},'KhOqz':function(_0x4b09c4,_0x4cf776){return _0x4b09c4!==_0x4cf776;},'ReDgD':function(_0x1e250b,_0x28e67c){return _0x1e250b===_0x28e67c;},'JPYMB':_0xe93fad(0xe3c),'IqxmW':'mMZwF','ApykH':function(_0x2b50df,_0x3068c8){return _0x2b50df!==_0x3068c8;},'KRgwI':'uWqOu','trZth':function(_0x153d3d,_0x320ca3){return _0x153d3d===_0x320ca3;},'oUHAI':_0xe93fad(0x7f4)+'e','hZjuP':_0xe93fad(0x70f)+_0xe93fad(0x77c),'jvqNB':function(_0x32fd04,_0x27590e,_0x99acd6){return _0x32fd04(_0x27590e,_0x99acd6);},'ePZDT':function(_0x498bed,_0x412708){return _0x498bed*_0x412708;},'jTCOe':function(_0x4da238,_0x58c78c){return _0x4da238>_0x58c78c;},'Edtyr':function(_0x4b2864,_0x17d96b){return _0x4b2864===_0x17d96b;},'ylvyj':function(_0x186b6d,_0x4e11b3){return _0x186b6d(_0x4e11b3);},'izkwV':function(_0x234802,_0x5046a3){return _0x234802(_0x5046a3);},'LetCu':function(_0xe2092,_0x1bd1d5){return _0xe2092-_0x1bd1d5;},'muxrU':function(_0x15a8d4,_0x9e4508){return _0x15a8d4-_0x9e4508;},'kdahA':_0xe93fad(0xdbd)+_0xe93fad(0x6cf),'JWFfx':'LltJt','IHpjw':function(_0x5a7236,_0x3a2225){return _0x5a7236===_0x3a2225;},'PUmvG':'Ktezh','mCUsw':_0xe93fad(0xb32),'NJUrL':function(_0x421fbe,_0x5985e8){return _0x421fbe+_0x5985e8;},'YZUwp':function(_0x544d5f,_0x232f4b){return _0x544d5f+_0x232f4b;},'udWSS':_0xe93fad(0x2c7)+'round'+':rgba'+'(21,1'+_0xe93fad(0x454)+_0xe93fad(0xc73)+_0xe93fad(0x923)+':1px\x20'+_0xe93fad(0xb04)+_0xe93fad(0x78f)+_0xe93fad(0xade)+'143,1'+_0xe93fad(0x6d8)+_0xe93fad(0x95d)+'or:','XtUgl':'borde'+'r-rad'+_0xe93fad(0x8ee)+_0xe93fad(0x8fd)+_0xe93fad(0xcbf)+_0xe93fad(0x1ec)+'x\x2012p'+_0xe93fad(0x5a4)+_0xe93fad(0x624)+'x/1.4'+'\x20ui-m'+_0xe93fad(0x71e)+_0xe93fad(0x82d)+'onsol'+'as,mo'+_0xe93fad(0x86a)+_0xe93fad(0x745),'jAcIi':_0xe93fad(0x70f)+'a','PXJsm':'3|2|4'+_0xe93fad(0xde8),'gLHAj':_0xe93fad(0x8d9),'HnvGr':_0xe93fad(0x70f)+'a-sw-'+'v2','crGMi':function(_0x1d7df2){return _0x1d7df2();},'Hdszq':function(_0x34ca93,_0x3e6128){return _0x34ca93(_0x3e6128);},'mvwYe':'snaps'+_0xe93fad(0x256),'rnYhI':_0xe93fad(0x9eb)+'|0|9|'+'5|6|8'+_0xe93fad(0x4ab),'MJywr':function(_0x15cf33,_0x2901ce){return _0x15cf33|_0x2901ce;},'otgYx':function(_0x4134ab,_0x50ecdb){return _0x4134ab!==_0x50ecdb;},'ozPyQ':_0xe93fad(0x62d),'dVkkQ':_0xe93fad(0x83f)+'|3|2','mJcoy':function(_0x2d6adc,_0x5189ad){return _0x2d6adc||_0x5189ad;},'zLlER':_0xe93fad(0xcd7)+_0xe93fad(0x916)+'age\x20h'+'as\x20no'+_0xe93fad(0x26b)+'n\x20rel'+_0xe93fad(0xe28)+'\x20sinc'+'e\x20ins'+_0xe93fad(0x5aa)+'ng.\x0a','cdAHz':'no\x20re'+_0xe93fad(0xc99)+_0xe93fad(0x754)+_0xe93fad(0x3b5)+_0xe93fad(0xa99)+_0xe93fad(0xde3)+_0xe93fad(0xcdc)+_0xe93fad(0xb1a)+'?','lANci':'fvvoO','KzJTe':'wSqYs','vxcXv':_0xe93fad(0x8f5)+'255,1'+_0xe93fad(0x965)+'7,.35'+')','efxPW':_0xe93fad(0x42e)+'74','RgQCX':function(_0x13b409,_0x1a6b6a){return _0x13b409===_0x1a6b6a;},'sxfxq':'BZMQZ','ZJIjd':function(_0x2c15b0,_0x1a2fc2){return _0x2c15b0+_0x1a2fc2;},'woQUH':'LIVE\x20'+'·\x20','PzrYe':_0xe93fad(0x20e)+'8a','YlBWx':function(_0x540cdc,_0x2c5df4){return _0x540cdc===_0x2c5df4;},'QueDQ':_0xe93fad(0x862),'kmIet':'DoEXH','hBIoe':'trans'+_0xe93fad(0xe1b)+'t','MXwyp':'#2a0f'+'1b','tlDDy':_0xe93fad(0x1b2)+'f5','hUorX':_0xe93fad(0xd79)+_0xe93fad(0x845),'IBenq':_0xe93fad(0x407),'ZVhkh':_0xe93fad(0x83b),'fORiZ':'color'+':','Sgolc':function(_0x567ea1,_0xbc6fd7){return _0x567ea1+_0xbc6fd7;},'GOJXd':_0xe93fad(0xd7f),'rVngX':'texta'+'rea','lLuIt':'AWIfY','dRwMl':'copy','LsqvX':_0xe93fad(0x363)+'l','Phgml':function(_0x1384c0,_0x1292b3){return _0x1384c0+_0x1292b3;},'FZQsG':function(_0x295bcb,_0x2ee929){return _0x295bcb+_0x2ee929;},'Aunfm':_0xe93fad(0x9d6)+_0xe93fad(0xc8b)+_0xe93fad(0x7e4)+_0xe93fad(0x41d)+_0xe93fad(0xb2e)+'e,Con'+_0xe93fad(0xc6f)+_0xe93fad(0x250)+_0xe93fad(0x637)+_0xe93fad(0xbef)+'shado'+'w:0\x202'+'0px\x205'+'0px\x20-'+_0xe93fad(0x337)+_0xe93fad(0x84b),'sAinf':function(_0x4f5b8b,_0x1b9758){return _0x4f5b8b+_0x1b9758;},'KvWPs':function(_0xab801d,_0x24908d){return _0xab801d+_0x24908d;},'rOgpi':function(_0x32ee75,_0x21d53a){return _0x32ee75+_0x21d53a;},'kXiyH':function(_0xd45863,_0x215e01){return _0xd45863+_0x215e01;},'BsNIf':function(_0x356a6d,_0x1fb5d4){return _0x356a6d+_0x1fb5d4;},'vlvtn':function(_0x44cbe3,_0x2249ce){return _0x44cbe3+_0x2249ce;},'yNIkg':function(_0x1aa11c,_0x5e8cfd){return _0x1aa11c+_0x5e8cfd;},'OWhSp':_0xe93fad(0x58a)+'style'+_0xe93fad(0x796)+'ding:'+'9px\x201'+_0xe93fad(0xc92)+'order'+_0xe93fad(0x1c2)+'om:1p'+'x\x20sol'+'id\x20rg'+_0xe93fad(0xc41)+_0xe93fad(0x996)+',177,'+'.3);d'+_0xe93fad(0x3dc)+'y:fle'+'x;gap'+':8px;'+'align'+'-item'+'s:cen'+'ter;f'+_0xe93fad(0x34d)+_0xe93fad(0x35f)+_0xe93fad(0xc1b),'hAAOe':_0xe93fad(0x88d)+_0xe93fad(0x874)+'sw2-b'+_0xe93fad(0xc9d)+_0xe93fad(0x372)+_0xe93fad(0xc3e)+_0xe93fad(0x767)+'7a658'+_0xe93fad(0xc25)+_0xe93fad(0x940)+'e:11p'+_0xe93fad(0x563)+'ding:'+_0xe93fad(0xc51)+'px;bo'+_0xe93fad(0x54c)+_0xe93fad(0x5c9)+_0xe93fad(0x83d)+_0xe93fad(0x8f5)+'255,1'+_0xe93fad(0x965)+_0xe93fad(0x28c)+_0xe93fad(0xbf4)+_0xe93fad(0x52d)+'adius'+_0xe93fad(0xa91)+'x;\x22>v'+_0xe93fad(0x4e3)+'an>','npPhQ':_0xe93fad(0xe02)+'on\x20id'+_0xe93fad(0x1ff)+_0xe93fad(0x986)+_0xe93fad(0x36a)+_0xe93fad(0x291)+'\x22back'+'groun'+_0xe93fad(0xe48)+_0xe93fad(0xaf4)+'ent;b'+'order'+':1px\x20'+_0xe93fad(0xb04)+_0xe93fad(0x78f)+'(255,'+'143,1'+'77,.4'+_0xe93fad(0x95d)+'or:#f'+'7eef5'+_0xe93fad(0xc67)+_0xe93fad(0xa83)+_0xe93fad(0x53a)+'7px;p'+_0xe93fad(0x6bc)+_0xe93fad(0xdec)+_0xe93fad(0x43f)+'curso'+'r:poi'+'nter;'+_0xe93fad(0xb4f)+_0xe93fad(0x60f)+_0xe93fad(0x208),'ontWg':_0xe93fad(0xb43)+'>','yXeJB':_0xe93fad(0x58a)+_0xe93fad(0xb25)+_0xe93fad(0x95c)+'dy\x22\x20s'+_0xe93fad(0x291)+_0xe93fad(0xb17)+_0xe93fad(0x4e9)+'one;\x22'+'>','aGBVJ':'<butt'+'on\x20id'+_0xe93fad(0x1ff)+'-spee'+_0xe93fad(0x476)+'yle=\x22'+'backg'+'round'+':tran'+'spare'+'nt;bo'+_0xe93fad(0x54c)+_0xe93fad(0x5c9)+_0xe93fad(0x83d)+_0xe93fad(0x8f5)+_0xe93fad(0x6b2)+'43,17'+'7,.4)'+';colo'+'r:#f7'+'eef5;'+_0xe93fad(0x9fb)+'r-rad'+'ius:7'+_0xe93fad(0x333)+'dding'+_0xe93fad(0xa81)+_0xe93fad(0x9f3)+_0xe93fad(0x90c)+'r:poi'+_0xe93fad(0x50f)+_0xe93fad(0xa12)+'ed\x20of'+_0xe93fad(0x7f3)+'tton>','aDJgJ':'<span'+'\x20id=\x22'+_0xe93fad(0x6be)+_0xe93fad(0xdc7)+'label'+'\x22\x20sty'+_0xe93fad(0xb70)+'olor:'+_0xe93fad(0x7be)+_0xe93fad(0xd15)+_0xe93fad(0xcb7)+'th:34'+'px;\x22>'+'1.0x<'+'/span'+'>','ASvpv':_0xe93fad(0xcab)+'id=\x22s'+_0xe93fad(0x6d4)+'t\x22\x20st'+_0xe93fad(0x9f1)+'margi'+'n:0;p'+_0xe93fad(0x6bc)+'g:10p'+_0xe93fad(0xda5)+_0xe93fad(0x925)+_0xe93fad(0x3d5)+':auto'+_0xe93fad(0x536)+':1\x201\x20'+'auto;'+_0xe93fad(0x726)+_0xe93fad(0x817)+'e:pre'+_0xe93fad(0x831)+_0xe93fad(0xa3d)+'-brea'+'k:bre'+'ak-wo'+'rd;fo'+_0xe93fad(0xa47)+_0xe93fad(0x3d7)+';','LyUCQ':'max-h'+'eight'+_0xe93fad(0x90d)+';\x22>No'+'\x20repo'+'rt\x20ye'+'t.\x0a\x0aT'+'his\x20p'+'anel\x20'+'updat'+'es\x20it'+'self\x20'+_0xe93fad(0x4a7)+'the\x20g'+_0xe93fad(0x69e)+_0xe93fad(0x47d)+_0xe93fad(0xcfa)+_0xe93fad(0x1bf)+_0xe93fad(0xca8)+_0xe93fad(0x30a)+_0xe93fad(0x467)+_0xe93fad(0x2f8)+'\x20it\x20s'+'tays\x20'+_0xe93fad(0x6de)+',\x20Tam'+_0xe93fad(0x6b3)+_0xe93fad(0xd2b)+_0xe93fad(0xbf0)+_0xe93fad(0xcdc)+'ectin'+_0xe93fad(0x9ce)+_0xe93fad(0xad0)+'\x20cros'+'s-ori'+_0xe93fad(0x527)+_0xe93fad(0x69e)+'rame.'+_0xe93fad(0x971)+'>','HHAjz':_0xe93fad(0x7d6)+'statu'+'s','mnLSH':_0xe93fad(0x7d6)+_0xe93fad(0xbc1),'EgAFr':_0xe93fad(0x7d6)+_0xe93fad(0xd1a),'KGvaO':'#sw2-'+_0xe93fad(0x69f),'sPVcl':_0xe93fad(0x7d6)+_0xe93fad(0xa51)+'r','cMDFf':function(_0x3b56b0){return _0x3b56b0();},'isjSG':_0xe93fad(0x41c),'rrzmp':function(_0x484376,_0x2e8a25){return _0x484376(_0x2e8a25);},'uRZRu':function(_0x35d170,_0x3e35c6){return _0x35d170+_0x3e35c6;},'vBaSj':function(_0x2cfec4,_0xfa4aeb){return _0x2cfec4+_0xfa4aeb;},'tseCK':'frame'+_0xe93fad(0x7de),'zwmcx':_0xe93fad(0x988),'stiKU':function(_0x316d87,_0x4ef25b){return _0x316d87+_0x4ef25b;},'jLOGf':function(_0x35d135,_0x47c936){return _0x35d135+_0x47c936;},'nfJYM':function(_0x3d4896,_0x1c8db2){return _0x3d4896+_0x1c8db2;},'ymFHV':'uwmk\x20'+_0xe93fad(0x7de),'dCdUn':_0xe93fad(0x93d),'GChIf':function(_0x1563eb,_0x3c5f59){return _0x1563eb!=_0x3c5f59;},'eLJWa':function(_0x3c728a,_0x5e51c2){return _0x3c728a+_0x5e51c2;},'pxHNc':_0xe93fad(0x714)+_0xe93fad(0x6d7),'jXlIp':_0xe93fad(0xaa2),'FRqaT':_0xe93fad(0x631)+_0xe93fad(0xcdb)+_0xe93fad(0x4eb)+_0xe93fad(0x5f2)+'e\x20gam'+_0xe93fad(0x7e8)+'wn\x20Up'+_0xe93fad(0x215)+_0xe93fad(0xc10)+'thing'+'\x20capt'+_0xe93fad(0xb06)+'means','Qdgld':function(_0x5f0666,_0xfb3b53){return _0x5f0666<_0xfb3b53;},'kAWGM':'FSwzc','qGoOx':'REPWA','VaVoZ':function(_0x4e4e0a,_0x2800f1){return _0x4e4e0a+_0x2800f1;},'wOsco':function(_0x2453e6,_0x3341a3){return _0x2453e6+_0x3341a3;},'tsjJQ':_0xe93fad(0xab0),'RixDz':function(_0x9b541b,_0x55051f){return _0x9b541b/_0x55051f;},'SewXz':function(_0x168f22,_0x3b4d4d){return _0x168f22+_0x3b4d4d;},'yuDci':function(_0xdf082e,_0x54a041){return _0xdf082e(_0x54a041);},'vKcIj':'\x20\x20!\x20','XbURY':_0xe93fad(0x3fd),'CpULw':function(_0x45cd82){return _0x45cd82();},'jEVGX':function(_0x376159,_0x29903c){return _0x376159(_0x29903c);},'GPtWT':_0xe93fad(0x94c),'WCzWh':'SuSgq','eVBes':function(_0x110ccd,_0x5ae57f){return _0x110ccd!==_0x5ae57f;},'HtCcf':function(_0x34dca9,_0x1bfb5f,_0x32fcbd){return _0x34dca9(_0x1bfb5f,_0x32fcbd);},'ajSCt':function(_0x4cacf7,_0x1db4ba){return _0x4cacf7===_0x1db4ba;},'uMsDk':function(_0x408251,_0x3b1016){return _0x408251===_0x3b1016;},'lLWDl':function(_0x580659,_0x1c48e1,_0x18f4ed){return _0x580659(_0x1c48e1,_0x18f4ed);},'KqRpK':function(_0x4145da,_0x4cda1c){return _0x4145da===_0x4cda1c;},'YNmFX':function(_0x5f20cf,_0x5d7f86){return _0x5f20cf<_0x5d7f86;},'BIwcq':function(_0x34a38f,_0x1fabbe){return _0x34a38f+_0x1fabbe;},'OLHLw':_0xe93fad(0xb3d),'toOYN':'error','ajFYh':'info','RWBYf':function(_0xb18ee7,_0x1287e1){return _0xb18ee7<_0x1287e1;},'TINdX':_0xe93fad(0x26a),'mPJpb':function(_0x2b5c3e,_0x5aa3ad){return _0x2b5c3e+_0x5aa3ad;},'tqFIT':function(_0x2ec5af,_0x591859){return _0x2ec5af*_0x591859;},'mReDP':function(_0x379c7a,_0x2ec95d){return _0x379c7a*_0x2ec95d;},'aDAfH':function(_0x2426ca,_0x16c88f){return _0x2426ca*_0x16c88f;},'sVfyJ':function(_0x3b3151,_0x4d6668){return _0x3b3151/_0x4d6668;},'bSCTr':function(_0x4bc31e,_0x1ee7e2){return _0x4bc31e-_0x1ee7e2;},'UNVIE':'Runti'+'me.cr'+'eateP'+_0xe93fad(0x6cb)+'\x20unav'+_0xe93fad(0x705)+'le','aqTpS':'sakur'+_0xe93fad(0x294)+_0xe93fad(0xdb5)+'z','WNBma':function(_0x392805,_0xddb71c){return _0x392805+_0xddb71c;},'yvzfD':function(_0x3b1a1c){return _0x3b1a1c();},'SncKC':function(_0x23185f,_0x3a3c53){return _0x23185f===_0x3a3c53;},'YFrQa':_0xe93fad(0xaf3),'mBTiB':_0xe93fad(0x594),'cwnDo':_0xe93fad(0x5b5),'XuifF':_0xe93fad(0x84c)+_0xe93fad(0xd10),'gLsYU':_0xe93fad(0x6c1),'MPwBc':function(_0x2ffffe,_0x1eb978){return _0x2ffffe/_0x1eb978;},'rQwQP':function(_0x451b86,_0x16512d){return _0x451b86===_0x16512d;},'weTVF':_0xe93fad(0xd64),'gqrKL':'undef'+_0xe93fad(0x4ba),'XpiJL':_0xe93fad(0x84d)+_0xe93fad(0x263)+'e','jrTqf':_0xe93fad(0x84d)+'ntiat'+'eStre'+'aming','JlcCX':function(_0x8b6ebf,_0x451b98){return _0x8b6ebf<_0x451b98;},'PAetb':function(_0x2d94b2,_0x2ef689){return _0x2d94b2===_0x2ef689;},'HsPvE':function(_0xaf8f8d,_0x539cda){return _0xaf8f8d!==_0x539cda;},'ofBFn':_0xe93fad(0x8c1),'XVahB':function(_0x5ea564,_0x9e12ad){return _0x5ea564+_0x9e12ad;},'EpOKm':'mBGTG','JgUJE':function(_0x56df75,_0x46d811){return _0x56df75(_0x46d811);},'nWPBr':function(_0x23a90a,_0x385302){return _0x23a90a===_0x385302;},'UlOfG':_0xe93fad(0x94b)+_0xe93fad(0x2df)+'ntime'+_0xe93fad(0xaa1)+'lveGa'+_0xe93fad(0x404),'gCojq':function(_0x260873,_0x5cc8fd){return _0x260873!==_0x5cc8fd;},'svBml':_0xe93fad(0x2ed),'bATKs':_0xe93fad(0xd71)+'w\x20glo'+'bal','DwjxH':'qiPgk','iWOBE':'rMZEu','HwHoi':function(_0x4e45e7,_0x50a47c){return _0x4e45e7+_0x50a47c;},'EnuxV':_0xe93fad(0xd71)+'w.','aqhSz':'.Modu'+'le','JfMDk':function(_0x173938){return _0x173938();},'dsJCR':function(_0x40942d){return _0x40942d();},'UGJNz':function(_0x59bc20,_0x2efda0){return _0x59bc20+_0x2efda0;},'puhpk':_0xe93fad(0x77b)+_0xe93fad(0x69e)+'rame\x20'+'never'+'\x20post'+_0xe93fad(0x283)+_0xe93fad(0x651)+_0xe93fad(0x881)+_0xe93fad(0xab8)+'\x0a','VnohL':function(_0x40512d,_0x37f20b){return _0x40512d<_0x37f20b;},'XJSZS':function(_0x5bd0e2,_0x38add4){return _0x5bd0e2+_0x38add4;},'UAiBB':'i16','rfPAF':_0xe93fad(0x93a),'NSaqT':'i32','SUIkU':_0xe93fad(0x7cf),'ZrjYi':function(_0x23c4ce,_0x2e7209){return _0x23c4ce+_0x2e7209;},'JpTKi':function(_0xdca3c1,_0x507d1c){return _0xdca3c1|_0x507d1c;},'BDlZF':'RkzUe','AFyDw':function(_0x418bc9,_0xa1baa9){return _0x418bc9<_0xa1baa9;},'GyxZS':function(_0x373db4,_0x288c8f){return _0x373db4+_0x288c8f;},'xvjWs':_0xe93fad(0xb5d)+_0xe93fad(0xd3e)+_0xe93fad(0xb8f)+'0x','FgRcT':function(_0x122c69,_0x43c407){return _0x122c69===_0x43c407;},'qDCax':function(_0x4bbaf,_0x3beca1){return _0x4bbaf+_0x3beca1;},'oKMHl':function(_0x12f6fe,_0xeca29f){return _0x12f6fe===_0xeca29f;},'BKhaQ':_0xe93fad(0xbac),'pRNye':function(_0xb563af,_0x2b0af2){return _0xb563af&_0x2b0af2;},'WKMRA':function(_0x340ce7,_0x7aa77b){return _0x340ce7^_0x7aa77b;},'Rigko':function(_0x8e6c91,_0x54dcb6,_0x278573){return _0x8e6c91(_0x54dcb6,_0x278573);},'aGwYW':function(_0x167237,_0x220cb2,_0x32d1de){return _0x167237(_0x220cb2,_0x32d1de);},'mESUl':function(_0x2285cb,_0xc60a08){return _0x2285cb+_0xc60a08;},'wJcgn':function(_0x4da2a5,_0x39fe60){return _0x4da2a5+_0x39fe60;},'FkpBJ':function(_0x4d3975,_0x10f8c9){return _0x4d3975===_0x10f8c9;},'bOngN':function(_0xef6e7c,_0x445753){return _0xef6e7c+_0x445753;},'cTFAw':_0xe93fad(0x385),'zQpjX':_0xe93fad(0x9b9),'UatjQ':function(_0x2f25b1,_0x354d2e){return _0x2f25b1^_0x354d2e;},'pOsyo':function(_0x61b464,_0x5b0d1f){return _0x61b464^_0x5b0d1f;},'lMEPR':function(_0x1e6fed,_0x5b669d,_0xdea398,_0x1482a3){return _0x1e6fed(_0x5b669d,_0xdea398,_0x1482a3);},'Giwoj':function(_0x175e44,_0x1e6a9d){return _0x175e44|_0x1e6a9d;},'ikNMz':function(_0x517dd7,_0x4f6c94){return _0x517dd7+_0x4f6c94;},'uiZsg':function(_0x5df250,_0x4705f9){return _0x5df250+_0x4705f9;},'XKAVs':function(_0x1a2007,_0x19a90e){return _0x1a2007|_0x19a90e;},'CRQKM':'none','bBXBf':function(_0x22c1d3,_0x18a7b2){return _0x22c1d3+_0x18a7b2;},'QsJNL':_0xe93fad(0xddb),'cTxly':function(_0x499a39,_0x41b984){return _0x499a39<_0x41b984;},'zfNyO':'XOqdW','Getvz':function(_0x39790c,_0x40caae){return _0x39790c>_0x40caae;},'RFFre':function(_0x4a6bae,_0x2c1a13){return _0x4a6bae-_0x2c1a13;},'QjBvD':_0xe93fad(0x578),'ochzU':'\x20Obsc'+_0xe93fad(0x43e)+_0xe93fad(0xa2e)+'\x20agre'+'ed','KNCWN':function(_0x46eb24,_0xe81c45){return _0x46eb24===_0xe81c45;},'BivYb':_0xe93fad(0xb9c),'WoquU':function(_0x3f7129,_0x167cad){return _0x3f7129!==_0x167cad;},'yVjGU':function(_0xa42ceb,_0x434e57,_0x5932b1,_0x58c0df,_0x2da62e){return _0xa42ceb(_0x434e57,_0x5932b1,_0x58c0df,_0x2da62e);},'xyJyC':function(_0x268b76,_0x31291f){return _0x268b76+_0x31291f;},'jfzOX':_0xe93fad(0xc1e),'bGLjB':function(_0x30790f,_0x515b8a){return _0x30790f(_0x515b8a);},'aIXEm':_0xe93fad(0x887)+_0xe93fad(0xb54)+_0xe93fad(0x521)+_0xe93fad(0xaed)+',\x20no\x20'+'NPC_C'+'otrol'+'ler\x20a'+_0xe93fad(0x5de)+_0xe93fad(0xc8e)+'\x20mana'+_0xe93fad(0xc24)+'That\x20'+_0xe93fad(0x80b)+'at\x20','ELHsP':'the\x20l'+'obby\x20'+'looks'+'\x20like'+'\x20-\x20ru'+_0xe93fad(0xa5a)+_0xe93fad(0x847)+_0xe93fad(0x359)+_0xe93fad(0xa18)+'\x20live'+_0xe93fad(0x449)+_0xe93fad(0x99b)+_0xe93fad(0xce9)+'\x20menu'+'.','reCSe':_0xe93fad(0xdf0),'lvQIr':_0xe93fad(0xa0d),'ZSgVG':'lRKiD','QZuOe':_0xe93fad(0x51c),'Krutu':'JSHGF','DyrST':function(_0x157503,_0x5c382c){return _0x157503!==_0x5c382c;},'xkwGz':_0xe93fad(0x34c),'ZCBuA':function(_0xbe4c2d,_0x5512f9){return _0xbe4c2d+_0x5512f9;},'xgCxx':function(_0x47616a,_0x4c1644){return _0x47616a===_0x4c1644;},'KvvFo':function(_0x559fe3,_0x4df680){return _0x559fe3===_0x4df680;},'rkoam':_0xe93fad(0x373),'hbzGR':function(_0x21aa50,_0x2eefb4){return _0x21aa50===_0x2eefb4;},'JDLVw':_0xe93fad(0xa38)+'r','iptdv':_0xe93fad(0x1cb),'Jkjag':function(_0x8c1b92,_0x4d216d){return _0x8c1b92!==_0x4d216d;},'FKJin':'aFQVH','cQFyy':_0xe93fad(0x504),'DmcLb':function(_0x2e6452,_0x57f041,_0x2bde99){return _0x2e6452(_0x57f041,_0x2bde99);},'hyrJi':_0xe93fad(0x913),'LQcDB':'Mouse'+'Look','TUwyW':function(_0x27cb6d,_0x2da2c4,_0x5d030d){return _0x27cb6d(_0x2da2c4,_0x5d030d);},'Dozvd':_0xe93fad(0x409),'qFigm':function(_0x23b658,_0x4127b0){return _0x23b658<_0x4127b0;},'ljJPw':_0xe93fad(0x329),'oNHgY':function(_0x2cb2b4,_0x472bbd){return _0x2cb2b4(_0x472bbd);},'XhMsy':function(_0x1f0687,_0x19b7c7){return _0x1f0687===_0x19b7c7;},'zCwmu':_0xe93fad(0xb96),'pkUJI':function(_0x5ba3b8,_0x14775a){return _0x5ba3b8>=_0x14775a;},'xWYhs':'a,b','vATYk':'Qxhux','wMNii':function(_0x4cfcdd,_0x23f7ff){return _0x4cfcdd||_0x23f7ff;},'mRTny':_0xe93fad(0x4c3)+_0xe93fad(0x60d)+_0xe93fad(0x999),'ngLxV':function(_0x1f20f2,_0x4df215){return _0x1f20f2+_0x4df215;},'QDQLV':_0xe93fad(0x4c3)+'Look+','qDLja':'\x20A\x20ho'+_0xe93fad(0x37d)+_0xe93fad(0x7f5)+'t\x20','zLwIN':'),\x20so'+'\x20the\x20'+_0xe93fad(0xb46)+_0xe93fad(0xd51)+'exist'+_0xe93fad(0xae8)+'en\x20an'+'d\x20is\x20'+'not\x20r'+_0xe93fad(0x225)+_0xe93fad(0xdf8)+_0xe93fad(0x90e),'raGCT':function(_0x4b2058,_0x43e555){return _0x4b2058+_0x43e555;},'lSvoA':function(_0x500f4f,_0x4bdfeb){return _0x500f4f+_0x4bdfeb;},'YgiaX':_0xe93fad(0xdc9),'rrDRK':_0xe93fad(0x8e1),'IAzQT':function(_0x2f51aa,_0xc6275d){return _0x2f51aa<_0xc6275d;},'jfGBK':function(_0x403b59,_0x451fce){return _0x403b59!==_0x451fce;},'aBaDQ':'MFKmR','OtZXm':_0xe93fad(0x8c8)+'|2|3|'+_0xe93fad(0xadc),'HFJCe':function(_0x167bfb,_0x4494a3,_0x4a699a){return _0x167bfb(_0x4494a3,_0x4a699a);},'oWdDi':_0xe93fad(0xc9b)+_0xe93fad(0x9c3)+_0xe93fad(0xbc0)+'nc','BsgUt':function(_0x2717aa,_0x1ebe56){return _0x2717aa===_0x1ebe56;},'aaflr':function(_0x1287f3,_0x6493b){return _0x1287f3<_0x6493b;},'qkcQI':function(_0x189c81,_0x4c891a,_0x38127b,_0x1c07b2){return _0x189c81(_0x4c891a,_0x38127b,_0x1c07b2);},'WFSMT':function(_0x2cc160,_0x9484ab){return _0x2cc160<_0x9484ab;},'IFifB':'FPSco'+'ntrol'+_0xe93fad(0x313),'umpxk':function(_0x38172e,_0x3573d9){return _0x38172e<_0x3573d9;},'osXNf':function(_0x5c6629,_0x24b367){return _0x5c6629 in _0x24b367;},'lWKut':function(_0x2108e0,_0x49eba3,_0x279635){return _0x2108e0(_0x49eba3,_0x279635);},'jijrG':function(_0x23d5ad,_0x10f029){return _0x23d5ad===_0x10f029;},'XDOfF':'sHxAI','MEqZa':function(_0x1dc619,_0x243fab){return _0x1dc619>>>_0x243fab;},'neoON':function(_0x41b4c5,_0x30a13b){return _0x41b4c5===_0x30a13b;},'JscgA':function(_0x378d94,_0x127a69){return _0x378d94>>>_0x127a69;},'BFxTE':_0xe93fad(0x7f9),'pyIqb':function(_0x545f54,_0x5b0ad3){return _0x545f54+_0x5b0ad3;},'DIdsj':_0xe93fad(0x89c),'varms':function(_0x34e166,_0x22dbe8){return _0x34e166+_0x22dbe8;},'MWXUv':_0xe93fad(0xa13),'XfzYm':function(_0x48937f,_0x494db9){return _0x48937f<_0x494db9;},'PtmpP':function(_0x5e4027,_0x14c486,_0x11ac8c,_0x544f3d){return _0x5e4027(_0x14c486,_0x11ac8c,_0x544f3d);},'QQpek':function(_0x73e1f3,_0x873f83){return _0x73e1f3+_0x873f83;},'nzizi':'vomfW','nyWiP':function(_0x3987ec,_0x76b6fc){return _0x3987ec===_0x76b6fc;},'IWiQO':function(_0x2189fb,_0x514a9f){return _0x2189fb===_0x514a9f;},'damDW':function(_0x363f2c,_0x521794){return _0x363f2c===_0x521794;},'Hsbrc':function(_0x143c4e,_0x2def81){return _0x143c4e(_0x2def81);},'CXEsQ':function(_0x10b413,_0x21f643){return _0x10b413===_0x21f643;},'GRNoJ':_0xe93fad(0x570),'JTwnM':_0xe93fad(0x8dc)+'=','odECm':'\x20ACTI'+'VE','iSNAx':'offse'+'t\x200\x20('+'int-w'+'idth)','CxUyl':function(_0xd91c14,_0x353d4b){return _0xd91c14!==_0x353d4b;},'AFVsB':function(_0x2e2d20,_0x48209c){return _0x2e2d20!==_0x48209c;},'TAPAk':function(_0x54f98c,_0x385058){return _0x54f98c!==_0x385058;},'VGQOa':function(_0x4db38a,_0x4ba51c){return _0x4db38a===_0x4ba51c;},'gmoQE':_0xe93fad(0x406),'tzahC':function(_0x190684,_0x411e2b){return _0x190684(_0x411e2b);},'GmcZk':_0xe93fad(0xada)+'t','zoSDk':'%c[sa'+'kura]'+_0xe93fad(0x577)+_0xe93fad(0xa4e)+_0xe93fad(0xe3b)+_0xe93fad(0x240),'IsuVh':function(_0xf00aa7,_0x16480a){return _0xf00aa7!==_0x16480a;},'nsaak':_0xe93fad(0xd9b),'XjcgA':_0xe93fad(0x321)+'Insta'+'nceWr'+'apper','cxiEg':function(_0x160383,_0x60266e){return _0x160383<_0x60266e;},'FAVHm':function(_0xab1493,_0x96d6a9){return _0xab1493===_0x96d6a9;},'posTA':function(_0x1bed71,_0x4640b3){return _0x1bed71!==_0x4640b3;},'PpNZt':'YkjPq','xtWkJ':'ZYFjs','FVRnX':function(_0x4ac683,_0x48fd2b){return _0x4ac683===_0x48fd2b;},'HYLpp':_0xe93fad(0xcfd),'Jpasf':function(_0x29d47c,_0x135cea,_0x16ee38){return _0x29d47c(_0x135cea,_0x16ee38);},'RmICb':'ZWaya','tPKCk':function(_0x42c870,_0x4ad886,_0x2bedec){return _0x42c870(_0x4ad886,_0x2bedec);},'zoogK':_0xe93fad(0xafd),'SxKpt':function(_0x5d8efa,_0x489448){return _0x5d8efa!==_0x489448;},'PJJhC':function(_0x1bc498,_0x23f744,_0x3f6286){return _0x1bc498(_0x23f744,_0x3f6286);},'uIWhF':'[data'+'-a=\x22','DNlBo':function(_0x3c8ebc,_0x4435d4){return _0x3c8ebc+_0x4435d4;},'BwhoI':_0xe93fad(0x39f)+'a8','lchMR':_0xe93fad(0x405),'UsuRP':function(_0x4d5b16){return _0x4d5b16();},'SXCMo':function(_0xc78845,_0x179f06,_0x3f79aa){return _0xc78845(_0x179f06,_0x3f79aa);},'fUenb':'sakur'+'a-sw-'+'hud-c'+'ss','TcVRu':function(_0x19751b,_0x61f57d){return _0x19751b!==_0x61f57d;},'yiTuK':_0xe93fad(0x6e1),'vAnWq':function(_0x10783e,_0x519c97){return _0x10783e+_0x519c97;},'mPFyM':function(_0x1d9a49,_0x58d335){return _0x1d9a49+_0x58d335;},'XiyFV':_0xe93fad(0x3ab)+_0xe93fad(0x4d0)+':0\x2010'+'px\x2030'+'px\x20-1'+_0xe93fad(0x8f9)+_0xe93fad(0xab1)+_0xe93fad(0xb85)+'elect'+_0xe93fad(0x53e)+_0xe93fad(0x1c7)+_0xe93fad(0xa1e)+'ser-s'+_0xe93fad(0xbdb)+_0xe93fad(0x53e)+';','nBLZG':'<div\x20'+'data-'+'a=\x22st'+_0xe93fad(0x85b)+_0xe93fad(0x9f1)+'color'+':#8d7'+'a99;m'+_0xe93fad(0xa56)+_0xe93fad(0x816)+'90px;'+_0xe93fad(0x70a)+'iv>','jMgpY':function(_0x4de306,_0x2931d1){return _0x4de306+_0x2931d1;},'SzcKS':function(_0x293f80,_0x56152d){return _0x293f80+_0x56152d;},'qyyVc':function(_0x2ebe79,_0x414e2d){return _0x2ebe79+_0x414e2d;},'Zlijq':function(_0x16c29b,_0x12db7a){return _0x16c29b+_0x12db7a;},'lVLTy':_0xe93fad(0x58a)+_0xe93fad(0xda2)+_0xe93fad(0x46c)+_0xe93fad(0xc8f)+'yle=\x22'+_0xe93fad(0x957)+_0xe93fad(0xd0e)+_0xe93fad(0x49d)+_0xe93fad(0xcf3)+';alig'+_0xe93fad(0xacf)+_0xe93fad(0x648)+_0xe93fad(0x50f)+_0xe93fad(0x865)+'wrap:'+'wrap;'+'max-w'+_0xe93fad(0x537)+_0xe93fad(0xe3a)+_0xe93fad(0x350),'qAIcq':_0xe93fad(0x7a6)+_0xe93fad(0x71a)+_0xe93fad(0x8f3)+_0xe93fad(0x923)+_0xe93fad(0x654)+'us:6p'+'x;pad'+_0xe93fad(0xdf1)+_0xe93fad(0x546)+'px;cu'+_0xe93fad(0x8b5)+'point'+_0xe93fad(0xa9c)+_0xe93fad(0xa47)+'herit'+';\x22>Sp'+_0xe93fad(0xd72)+_0xe93fad(0x9c8)+_0xe93fad(0x5e7)+'>','doqob':';\x22>','dGJlg':'<butt'+_0xe93fad(0xbed)+'ta-a='+_0xe93fad(0x1f1)+_0xe93fad(0x3d4)+'le=\x22b'+_0xe93fad(0xd0f)+_0xe93fad(0x600)+_0xe93fad(0xd0c)+_0xe93fad(0xe1b)+_0xe93fad(0xdac)+_0xe93fad(0xd39)+_0xe93fad(0xe44)+_0xe93fad(0x7dd)+'gba(2'+_0xe93fad(0xb78)+_0xe93fad(0x63f)+',.45)'+';','PGZhd':'color'+':#f7e'+'ef5;b'+'order'+'-radi'+'us:6p'+'x;pad'+_0xe93fad(0xdf1)+_0xe93fad(0x1da)+_0xe93fad(0x480)+_0xe93fad(0x8b5)+_0xe93fad(0x94d)+_0xe93fad(0xa9c)+'nt:in'+_0xe93fad(0x3d7)+_0xe93fad(0xe38)+_0xe93fad(0x9b1)+_0xe93fad(0x5e7)+'>','qyXNr':_0xe93fad(0xe02)+_0xe93fad(0xbed)+'ta-a='+_0xe93fad(0xe4e)+_0xe93fad(0x3d4)+'le=\x22m'+'argin'+'-left'+_0xe93fad(0x4c6)+';back'+_0xe93fad(0xa54)+_0xe93fad(0xe48)+'nspar'+_0xe93fad(0x6aa)+_0xe93fad(0x923)+_0xe93fad(0x402)+_0xe93fad(0xb04)+'\x20rgba'+'(255,'+_0xe93fad(0xbf8)+_0xe93fad(0xbee)+_0xe93fad(0x31e),'bDGrl':_0xe93fad(0x2cc),'HxROa':function(_0x27fa6f,_0x294d18){return _0x27fa6f(_0x294d18);},'JOQWg':_0xe93fad(0xd1a),'TMQwj':function(_0x1b0e92,_0x53096a){return _0x1b0e92(_0x53096a);},'BjOzH':_0xe93fad(0xce7),'xwqHR':_0xe93fad(0x583)+_0xe93fad(0xda4)+_0xe93fad(0x29e)+_0xe93fad(0x47d)+_0xe93fad(0x1fe)+'isabl'+'ed','QvScG':function(_0x567334,_0x5c8d44){return _0x567334+_0x5c8d44;},'hrjyP':function(_0x1c589d,_0x13bf38){return _0x1c589d!==_0x13bf38;},'ubpXT':'qtiQq','QFVGo':function(_0x266c3d,_0x57e831){return _0x266c3d/_0x57e831;},'NBJpv':function(_0x1c850e,_0x3224f3){return _0x1c850e*_0x3224f3;},'Pyecx':function(_0x4a4782,_0x44077){return _0x4a4782-_0x44077;},'KVJZC':function(_0x5aaaed,_0x1fa8f8){return _0x5aaaed*_0x1fa8f8;},'UfSMd':function(_0x4fde02,_0x1a3811){return _0x4fde02-_0x1a3811;},'trPMo':function(_0x221e80,_0x9693ba){return _0x221e80+_0x9693ba;},'rwDbx':function(_0x21a7fe,_0x53046b){return _0x21a7fe*_0x53046b;},'IERXt':function(_0x13b4b4,_0x361f84){return _0x13b4b4/_0x361f84;},'fvsZl':_0xe93fad(0xdaa),'Lsorw':function(_0x279b27){return _0x279b27();},'sNStz':'ESP\x20o'+'ff','NoWIi':'ESP\x20m'+'ap','vCchk':'warni'+'ngs','vZmjS':function(_0x104c19,_0x2ef8d0){return _0x104c19!==_0x2ef8d0;},'HZPHs':_0xe93fad(0xa67)+_0xe93fad(0x72a)+'solve'+'Game('+')','lNuij':function(_0xf7592d,_0x56bf64){return _0xf7592d===_0x56bf64;},'wJOhb':function(_0x1bab43,_0x4aedb3){return _0x1bab43===_0x4aedb3;},'aUMBp':function(_0x431f22){return _0x431f22();},'NWBeG':function(_0x720b43,_0x39bf2d){return _0x720b43+_0x39bf2d;},'mVJkL':'\x20\x20obj'+'s\x20','XfgKd':function(_0x1c4188,_0x381894){return _0x1c4188>_0x381894;},'FpTTK':function(_0x36b8a3,_0x192c4c){return _0x36b8a3+_0x192c4c;},'pVsCK':'PLAYE'+_0xe93fad(0x860),'WwhTf':function(_0x468abe,_0xcede9){return _0x468abe+_0xcede9;},'NCtWg':_0xe93fad(0xc5d),'VmxXP':_0xe93fad(0x57b),'YRtRx':function(_0xf4662c,_0x2b4e79){return _0xf4662c+_0x2b4e79;},'cBySU':_0xe93fad(0x821)+'\x20','YEMvu':'\x20\x20cam'+'\x20-','FdEwV':_0xe93fad(0x7dc)+_0xe93fad(0x827)+_0xe93fad(0x9da)+_0xe93fad(0x850)+'y?)\x20\x20'+_0xe93fad(0x899),'TSEMu':'#8d7a'+'99','zBhdm':_0xe93fad(0xa19)+'n','hmwSO':function(_0x52f1da,_0x3e5d1a){return _0x52f1da===_0x3e5d1a;},'jyiBv':function(_0x27ded8,_0x15872d){return _0x27ded8+_0x15872d;},'IpCdn':function(_0x35ab4e,_0x28a615){return _0x35ab4e===_0x28a615;},'FywvE':'Brack'+'etLef'+'t','aqpbl':function(_0x2a6091){return _0x2a6091();},'jNHYQ':function(_0x161104,_0x4b0c04){return _0x161104/_0x4b0c04;},'nBYjR':_0xe93fad(0x21b),'hckOm':function(_0x20418b,_0xd72266){return _0x20418b+_0xd72266;},'NREJe':function(_0x3956ff,_0x1a6718){return _0x3956ff>>>_0x1a6718;},'luynz':function(_0x13f410,_0x3dc6ad){return _0x13f410<_0x3dc6ad;},'awGyO':_0xe93fad(0xba8),'QCheD':function(_0x455027,_0x5167d2){return _0x455027!==_0x5167d2;},'rMBXt':'f32','cFvCq':function(_0x3cf490,_0x1ff26e,_0x411c42){return _0x3cf490(_0x1ff26e,_0x411c42);},'UVBAJ':function(_0x2f3576,_0x12c512){return _0x2f3576+_0x12c512;},'mPVuO':function(_0x2f7fb2,_0x54e45a,_0x13ec66,_0x398d83){return _0x2f7fb2(_0x54e45a,_0x13ec66,_0x398d83);},'JLVtq':_0xe93fad(0x985)+_0xe93fad(0x1af)+'urned'+'\x20','SPnvG':function(_0x4ef3b6,_0xa67d60){return _0x4ef3b6!==_0xa67d60;},'LhWYt':_0xe93fad(0x92b)+'g\x20·\x20','HQBWA':function(_0x361394,_0x29481b){return _0x361394===_0x29481b;},'tHNWW':_0xe93fad(0x7ac)+'t','BOMKr':function(_0x460c77,_0x225cea){return _0x460c77!==_0x225cea;},'LvJKE':function(_0x1f6de5,_0x5b8537){return _0x1f6de5+_0x5b8537;},'flzdS':function(_0x253f4a,_0x4cf47f){return _0x253f4a+_0x4cf47f;},'hJYNp':function(_0x3b98a5,_0x11d9ab){return _0x3b98a5+_0x11d9ab;},'OydSa':function(_0x214131,_0x451ed2){return _0x214131+_0x451ed2;},'ifahT':function(_0x306777,_0x4d732f){return _0x306777(_0x4d732f);},'AYoaq':_0xe93fad(0xcc9)+_0xe93fad(0x57a),'bpMvf':function(_0x2e2c74,_0x7d3f6d){return _0x2e2c74*_0x7d3f6d;},'pMJeV':function(_0x4ae378,_0x566689){return _0x4ae378+_0x566689;},'nwGCW':function(_0xda307e,_0x4eff13){return _0xda307e*_0x4eff13;},'xzJJO':function(_0xd27345,_0x1a8bef){return _0xd27345*_0x1a8bef;},'ZORlo':function(_0x52f3b6,_0x31ecab){return _0x52f3b6-_0x31ecab;},'mQXmH':function(_0x2f13a0,_0x39cc2d){return _0x2f13a0*_0x39cc2d;},'fCnMl':function(_0x9faf24,_0x4d6670){return _0x9faf24*_0x4d6670;},'ldPJs':'5|7|6'+_0xe93fad(0xe46)+_0xe93fad(0x28d)+'|8|0','muPsG':function(_0xc13ca1,_0x3af89e){return _0xc13ca1+_0x3af89e;},'awPqg':_0xe93fad(0x9ad)+_0xe93fad(0x6f7)+'ixed;'+_0xe93fad(0x41c)+':12px'+_0xe93fad(0xbd0)+_0xe93fad(0x7c4)+_0xe93fad(0x780)+_0xe93fad(0x9e1)+'47483'+_0xe93fad(0x8d8)+'ointe'+'r-eve'+_0xe93fad(0x290)+_0xe93fad(0x81a),'KMPlS':function(_0xf489b,_0x1cc943){return _0xf489b===_0x1cc943;},'iXMYV':_0xe93fad(0xb6b),'ojfSI':_0xe93fad(0x64a)+'useLo'+'ok\x20in'+_0xe93fad(0x7bc)+'e','yVHiq':function(_0x15a578,_0x116372){return _0x15a578+_0x116372;},'TswNL':function(_0x557a23,_0x1fcaa3){return _0x557a23!==_0x1fcaa3;},'hhjoX':function(_0x347e81,_0x6b85f2){return _0x347e81>_0x6b85f2;},'GMKfS':'Mouse'+'Look+'+_0xe93fad(0x7e2)+'is\x20no'+_0xe93fad(0xbe5)+'objec'+'t\x20ref'+_0xe93fad(0x802)+'e','RELVx':_0xe93fad(0x595)+_0xe93fad(0x3df),'BMOCK':'get_t'+_0xe93fad(0x678)+'orm','xhFlu':function(_0xbc374){return _0xbc374();},'FOULl':function(_0x364fee,_0x51a0a5,_0x201814,_0x1db76b){return _0x364fee(_0x51a0a5,_0x201814,_0x1db76b);},'eVWLD':_0xe93fad(0x969)+'a','QsbuF':'get_r'+_0xe93fad(0xcbd)+'on','ZqfSQ':'get_p'+'ositi'+'on','PJhYM':function(_0x52e63e,_0x1493d3){return _0x52e63e(_0x1493d3);},'AadvH':_0xe93fad(0x843)+_0xe93fad(0xe2d)+_0xe93fad(0x1ad)+'m','IZCEP':function(_0x119676,_0x5b7aec){return _0x119676*_0x5b7aec;},'dklrk':_0xe93fad(0xb55)+_0xe93fad(0x9bf)+'nusab'+_0xe93fad(0xb27)+'q|=','HfmIr':function(_0x24086f,_0x57f7eb){return _0x24086f/_0x57f7eb;},'LCXMr':function(_0x4e1f0b){return _0x4e1f0b();},'NlFfF':'yNBJD','XmsjI':function(_0x2e996a,_0x5bec82){return _0x2e996a===_0x5bec82;},'Zraxv':function(_0x22b3ce,_0x304ae3){return _0x22b3ce<_0x304ae3;},'JoFYp':function(_0x3d6c4,_0x591b08){return _0x3d6c4+_0x591b08;},'zEpxw':_0xe93fad(0xdd5),'svrzS':_0xe93fad(0x4cb),'eEyKD':_0xe93fad(0x425),'xDoAj':function(_0x59caaa,_0x562c01){return _0x59caaa!==_0x562c01;},'NIVbn':function(_0x4a6854,_0x1d10d0){return _0x4a6854/_0x1d10d0;},'iCfSM':function(_0x55c505,_0x552c74){return _0x55c505===_0x552c74;},'SZvCF':function(_0x44137a){return _0x44137a();},'jMKJy':_0xe93fad(0x7bf),'nxwjP':function(_0x2b7538){return _0x2b7538();},'AlQuQ':_0xe93fad(0x64a)+'useLo'+_0xe93fad(0x95b)+'t','GLpGX':function(_0x267f25,_0x5239e0){return _0x267f25+_0x5239e0;},'ctHOM':function(_0x24d6c8,_0x4c237b){return _0x24d6c8<_0x4c237b;},'WGFMM':function(_0x5ce0ca,_0x429a06){return _0x5ce0ca!==_0x429a06;},'qYGoe':function(_0x155638,_0x29a2d1){return _0x155638===_0x29a2d1;},'TPBFq':'kUPYl','yPaCj':_0xe93fad(0xa2b),'okkun':function(_0x4a228d,_0x1b4385,_0x112cdf){return _0x4a228d(_0x1b4385,_0x112cdf);},'iVQft':function(_0xd3b200,_0x5891d3){return _0xd3b200+_0x5891d3;},'JJCjJ':function(_0x6dc5bd,_0x29bd4f){return _0x6dc5bd(_0x29bd4f);},'nGiYi':function(_0x2962c0,_0xcdd763){return _0x2962c0+_0xcdd763;},'vwzBQ':function(_0x35af4c,_0x20dcd1){return _0x35af4c!==_0x20dcd1;},'rZdXV':_0xe93fad(0x7fc)+'|1|12'+_0xe93fad(0x61c)+'5|11|'+_0xe93fad(0xadb)+'|10','LtKIn':function(_0x5bb271,_0x1fbd8b){return _0x5bb271*_0x1fbd8b;},'BzWAn':function(_0xeea750){return _0xeea750();},'sTuhQ':function(_0xa89e71,_0x5141c7){return _0xa89e71*_0x5141c7;},'HMPKd':function(_0x201b17,_0x31d074){return _0x201b17*_0x31d074;},'eYzlu':function(_0x13937f,_0x3d7ad9){return _0x13937f+_0x3d7ad9;},'PPzlK':function(_0x8132d9,_0x30fee9){return _0x8132d9/_0x30fee9;},'JZOVX':function(_0xe14385,_0x2f2c1e){return _0xe14385/_0x2f2c1e;},'esUKE':function(_0x226d12,_0x298ddc){return _0x226d12/_0x298ddc;},'ubJzA':function(_0x4f07ea,_0x262266){return _0x4f07ea*_0x262266;},'oJaGO':function(_0x52a5a0,_0x8c9279){return _0x52a5a0*_0x8c9279;},'McXMI':function(_0x135eaf,_0x46707a,_0x58938d){return _0x135eaf(_0x46707a,_0x58938d);},'vdauB':function(_0x261a83,_0x182549){return _0x261a83===_0x182549;},'ZNgmO':function(_0x4dc32e,_0x3a8d84){return _0x4dc32e+_0x3a8d84;},'dAMKw':_0xe93fad(0x5e4)+'rd','rkEUd':_0xe93fad(0x265)+_0xe93fad(0x555),'hymyw':_0xe93fad(0x603)+'check'+'ed','GBTTN':function(_0x432088,_0x4edc16){return _0x432088(_0x4edc16);},'hgtXh':_0xe93fad(0x24f)+'itch','qPult':function(_0x3a7e3a){return _0x3a7e3a();},'yHTMk':function(_0x34f0e2,_0x27143e){return _0x34f0e2<_0x27143e;},'krduk':_0xe93fad(0x466),'uJxnp':'input','HKOJH':_0xe93fad(0x5b0),'ZWWvc':function(_0x315519,_0x367d43){return _0x315519(_0x367d43);},'bTSyt':_0xe93fad(0xc38)+'bel','NyNuD':'AuzuM','BZlwJ':'IGTOl','MVBaL':function(_0x41da32,_0x28f810){return _0x41da32/_0x28f810;},'XOBzK':_0xe93fad(0x9d8),'PSqrf':function(_0x5d4d4b){return _0x5d4d4b();},'nWitW':_0xe93fad(0x5d3),'nSEbC':function(_0xa75be7,_0x4ec1e3){return _0xa75be7+_0x4ec1e3;},'GJewo':_0xe93fad(0xad3),'CJnVL':_0xe93fad(0x75c)+'ds\x20·\x20','atdLx':_0xe93fad(0x375)+'es','iLLnN':_0xe93fad(0x81c),'ihPqd':function(_0x5edfbe,_0x54f520){return _0x5edfbe+_0x54f520;},'tcvsa':function(_0x4a9bd8,_0xca68f5){return _0x4a9bd8*_0xca68f5;},'WNIdK':_0xe93fad(0x2a0)+'rce:\x20','eRPIH':_0xe93fad(0xa1c),'llHvp':'comba'+'t','hJtGZ':'Speed'+_0xe93fad(0xd2d),'ePhtw':function(_0x1b8746,_0x5733af){return _0x1b8746+_0x5733af;},'jGLEq':function(_0x4f149f,_0x39bf7f){return _0x4f149f+_0x39bf7f;},'AsQBD':_0xe93fad(0xbcd)+_0xe93fad(0x7eb)+_0xe93fad(0x906)+_0xe93fad(0x2c1)+_0xe93fad(0x69f)+_0xe93fad(0x75c)+_0xe93fad(0x9d0)+'ly.\x20H'+_0xe93fad(0x368)+_0xe93fad(0xb4b)+_0xe93fad(0x2e7)+'\x20jump'+'\x20are\x20'+_0xe93fad(0x22b)+_0xe93fad(0x45c),'XgazQ':function(_0x41b906,_0x1024c8){return _0x41b906+_0x1024c8;},'AcrFG':function(_0x1b4b5b,_0xd3898d){return _0x1b4b5b(_0xd3898d);},'eqNpv':'Snaps'+'hot\x20n'+'ow\x20(F'+'9)','KzMBS':'sk-md'+'esc','swaAZ':'Radar','sEYNh':'Range','wQwoy':'world'+_0xe93fad(0xb08)+_0xe93fad(0xd75)+_0xe93fad(0x8eb)+_0xe93fad(0x947)+_0xe93fad(0x593),'bXtsB':_0xe93fad(0x1ce)+'ese\x20t'+'wo\x20fl'+_0xe93fad(0x2fa)+'are\x20n'+_0xe93fad(0x725)+'tch\x20a'+'nd\x20ya'+'w.\x20Pr'+'ess\x20F'+_0xe93fad(0xaf8)+_0xe93fad(0x9e4)+_0xe93fad(0x446)+'0°,\x20p'+'ress\x20'+_0xe93fad(0x70c),'NeOeu':function(_0x20f175,_0x485f9f){return _0x20f175+_0x485f9f;},'ytQql':function(_0x38574b,_0x9a26dd){return _0x38574b+_0x9a26dd;},'grEgl':'[\x20and'+_0xe93fad(0x259)+_0xe93fad(0xba9)+'ep\x20th'+'is','PPXhv':_0xe93fad(0x34e)+'ack\x20t'+_0xe93fad(0xc86)+'\x20offs'+_0xe93fad(0x535)+_0xe93fad(0x21d),'Omvzb':'click','rbIxp':'sk-no'+'te','Hqtzo':function(_0x4c9852,_0x53f734){return _0x4c9852===_0x53f734;},'wmLHM':'sette'+'r\x20pai'+'r','wGcLb':function(_0x5d58e7,_0x28bdde){return _0x5d58e7+_0x28bdde;},'noPlZ':_0xe93fad(0x97c)+'r','YMswo':function(_0x1d19b5,_0x24d4c1){return _0x1d19b5+_0x24d4c1;},'wIxOR':function(_0x3aa7c3,_0x587497){return _0x3aa7c3+_0x587497;},'QsHGv':function(_0x1dc32f,_0x4891cb){return _0x1dc32f+_0x4891cb;},'agsqS':'read\x20'+'from\x20'+'Mouse'+_0xe93fad(0x7b0)+_0xe93fad(0x97c)+_0xe93fad(0x24c)+'w\x20\x20\x20','HkNjK':_0xe93fad(0x2de),'SmBQd':_0xe93fad(0x28e)+'ING\x20f'+_0xe93fad(0x39b)+_0xe93fad(0x4b7)+'\x20offs'+_0xe93fad(0x246)+_0xe93fad(0xa28)+_0xe93fad(0xaaf)+_0xe93fad(0x367)+_0xe93fad(0xa3c)+_0xe93fad(0x554)+_0xe93fad(0x4b5)+_0xe93fad(0x1fc)+'\x20not\x20'+_0xe93fad(0xbe4)+'\x20yet','AKJze':_0xe93fad(0xa84)+'\x20hook'+_0xe93fad(0xbd4)+_0xe93fad(0x23c)+'er\x20re'+_0xe93fad(0x1b7)+'red\x20(','ZQTmo':_0xe93fad(0x794)+_0xe93fad(0xb9b),'VTmfb':'\x0a(cle'+_0xe93fad(0xac9)+_0xe93fad(0x338)+'le\x20sa'+_0xe93fad(0x234)+_0xe93fad(0x559)+'tion)','QsxmM':_0xe93fad(0xcea)+'ON','gnPci':_0xe93fad(0x39d)+'ed\x20/\x20'+'regis'+'tered','Yeaus':function(_0x5194d3,_0x4005d8){return _0x5194d3+_0x4005d8;},'FXSMx':'\x20MB\x20@'+'\x20','HwawP':'Playe'+'rs','RtbGy':_0xe93fad(0xd16)+'es','skNzI':'off\x20t'+'he\x20li'+_0xe93fad(0xde9)+_0xe93fad(0xb13),'UsnQg':_0xe93fad(0x72b)+'l','WagwR':function(_0x2ccf52,_0x59fb7f){return _0x2ccf52-_0x59fb7f;},'dJfEt':_0xe93fad(0x60c)+_0xe93fad(0xd10),'tWAIm':function(_0x44ef7b,_0x39e8a0){return _0x44ef7b+_0x39e8a0;},'eAKTo':function(_0x35e675,_0x2335f6){return _0x35e675+_0x2335f6;},'nBvEi':_0xe93fad(0xb1c)+_0xe93fad(0x69f),'HCeKY':'0x10','FuLJc':function(_0x5a2213,_0x369764,_0x13d40c,_0x235f46){return _0x5a2213(_0x369764,_0x13d40c,_0x235f46);},'YzzlX':function(_0x1eadd5,_0x1881e0,_0x27eb57,_0xb701e7){return _0x1eadd5(_0x1881e0,_0x27eb57,_0xb701e7);},'zHLCn':_0xe93fad(0xdde)+_0xe93fad(0x1a9)+'pt','uoreS':'log','yuxbf':_0xe93fad(0x5a8)+_0xe93fad(0x6cd)+'s','wTzKG':'sk-pr'+'e','LFURE':function(_0x33d415,_0x3b3994,_0x2e815d,_0x1e66ec){return _0x33d415(_0x3b3994,_0x2e815d,_0x1e66ec);},'ForLt':'Paste'+'\x20the\x20'+_0xe93fad(0xa06)+'\x20thin'+_0xe93fad(0xdc3)+'n\x20som'+_0xe93fad(0x596)+_0xe93fad(0xdd6)+'ks\x20wr'+_0xe93fad(0x617),'aGfZj':function(_0x54868c,_0x56adae){return _0x54868c(_0x56adae);},'rPmvB':function(_0x239c51,_0x378df0){return _0x239c51===_0x378df0;},'FtXBs':'xofAP','ZuAYn':_0xe93fad(0xa02),'hPEPW':_0xe93fad(0x2a1),'diYxd':_0xe93fad(0x91f)+'ing','UJUfe':function(_0x3d0545,_0x2d9b3c){return _0x3d0545===_0x2d9b3c;},'pWbwk':function(_0x3e423e,_0x5f17e0){return _0x3e423e===_0x5f17e0;},'FtKms':function(_0x263c65,_0x4a3334){return _0x263c65-_0x4a3334;},'RmLmA':_0xe93fad(0x3f5)+_0xe93fad(0x2f7)+_0xe93fad(0x643)+'|3|4','Nfsgh':function(_0x976a4,_0x308049){return _0x976a4-_0x308049;},'YEZXX':function(_0x5d8edc,_0x42b650){return _0x5d8edc+_0x42b650;},'YYwvQ':function(_0x80ff89,_0x35905c){return _0x80ff89-_0x35905c;},'rKfhX':function(_0x41a569,_0x29eb4f){return _0x41a569-_0x29eb4f;},'HGJeX':function(_0x1de43e,_0x146f3e){return _0x1de43e===_0x146f3e;},'rCPir':function(_0x23001d,_0x3e714c){return _0x23001d===_0x3e714c;},'BCApC':_0xe93fad(0x4ca)+_0xe93fad(0xb3f),'lDHLN':'mouse'+'up','TPLUE':_0xe93fad(0xc74)+'start','KpwSK':'touch'+_0xe93fad(0xb3f),'CcDQO':function(_0x3f1334,_0x359bac){return _0x3f1334(_0x359bac);},'zTmly':_0xe93fad(0x595)+_0xe93fad(0xd49)+_0xe93fad(0xda6)+_0xe93fad(0x678)+_0xe93fad(0x5ad)+_0xe93fad(0xa6f)+_0xe93fad(0xb7e),'SSkTk':function(_0x2b36b8){return _0x2b36b8();},'fjUXQ':'.28','gaoTA':_0xe93fad(0x70f)+_0xe93fad(0x1ae)+'u-css','tRzfd':function(_0x2d88b7,_0x429917){return _0x2d88b7!==_0x429917;},'PazkG':_0xe93fad(0x2b1),'NlvwB':function(_0x1872bf,_0xab1b4d,_0x39b4ef){return _0x1872bf(_0xab1b4d,_0x39b4ef);},'yObMK':function(_0x1bb3db,_0x2466cf,_0x1b4dc0){return _0x1bb3db(_0x2466cf,_0x1b4dc0);},'NHLnL':function(_0x4e52ac,_0x23c2a9,_0x4dfdd1,_0x3f15de){return _0x4e52ac(_0x23c2a9,_0x4dfdd1,_0x3f15de);},'sZEYG':_0xe93fad(0x826)+'b','aWTMl':_0xe93fad(0x34f)+'ing…','ttXFd':'mn-cl'+'ose','rrnAq':_0xe93fad(0x277)+_0xe93fad(0x4df)+_0xe93fad(0x2d3)+_0xe93fad(0x9bd)+'\x2024\x22>'+'<path'+_0xe93fad(0x71d)+_0xe93fad(0x2c2)+'2\x2012M'+_0xe93fad(0xc3b)+_0xe93fad(0xa86)+'/></s'+'vg>','WdsUn':function(_0x5023a3,_0x55c07d,_0x2c88){return _0x5023a3(_0x55c07d,_0x2c88);},'ctlRD':_0xe93fad(0x722)+'l>','LSJim':function(_0x516710,_0x89322a,_0x480986,_0x305cd8){return _0x516710(_0x89322a,_0x480986,_0x305cd8);},'hOHpN':'sakur'+_0xe93fad(0x808)+'al','cBlGq':function(_0x2ea6c9,_0x3259a3){return _0x2ea6c9+_0x3259a3;},'OEvAH':function(_0x38a950){return _0x38a950();},'wWzco':function(_0x2611eb,_0x544740){return _0x2611eb===_0x544740;},'UpUBG':function(_0x54d5b6,_0x133076){return _0x54d5b6===_0x133076;},'jqOZL':function(_0x11a543,_0x29cdc3){return _0x11a543!==_0x29cdc3;},'sDvrM':'CTGPP','fpEvV':function(_0x2e34e0,_0x4136d7){return _0x2e34e0+_0x4136d7;},'tpCtm':function(_0x46520d,_0x19667e){return _0x46520d!==_0x19667e;},'ncoKc':_0xe93fad(0x73e),'rgeJf':'mn-pa'+'nel','RPIGc':function(_0x16b9a5,_0xf84c5c){return _0x16b9a5(_0xf84c5c);},'fIlAV':function(_0xb704f2,_0x5c1626){return _0xb704f2(_0x5c1626);},'qlhAT':function(_0x527f5b,_0x16ca1c){return _0x527f5b+_0x16ca1c;},'hGZJC':function(_0x42624e,_0x3398d9){return _0x42624e+_0x3398d9;},'dXGqp':_0xe93fad(0x275)+'hooks'+'\x20','hOaQL':'\x20\x20·\x20\x20'+_0xe93fad(0xd93)+_0xe93fad(0x5a7),'tZqPB':_0xe93fad(0x79b)+_0xe93fad(0x4ce)+'r\x20the'+'\x20firs'+_0xe93fad(0x886)+_0xe93fad(0x23b),'fSQBg':'[data'+_0xe93fad(0x68e),'nlOzW':_0xe93fad(0x5e3)+_0xe93fad(0x84d)+'ntiat'+'e()','KlhfS':function(_0x566706,_0x3b1cef){return _0x566706+_0x3b1cef;},'fiCJi':function(_0x5bd30b,_0x4f3357){return _0x5bd30b+_0x4f3357;},'nAxkv':function(_0x512df5,_0x460031){return _0x512df5+_0x460031;},'ziDuI':function(_0x353084,_0x5b1005){return _0x353084===_0x5b1005;},'FtsDe':_0xe93fad(0x6b0)+'8','kdRNs':function(_0x4e9182,_0x28ba57,_0x43024b){return _0x4e9182(_0x28ba57,_0x43024b);},'buSAO':_0xe93fad(0x7a9),'NZCHc':function(_0x40078c,_0x5addfe,_0x6c26ba){return _0x40078c(_0x5addfe,_0x6c26ba);},'vnSAA':'posit'+_0xe93fad(0x6f7)+'ixed;'+'left:'+'12px;'+_0xe93fad(0x4a9)+_0xe93fad(0x1f3)+_0xe93fad(0x356)+_0xe93fad(0x230)+'74829'+_0xe93fad(0x4bd)+'rsor:'+'point'+_0xe93fad(0xcda)+_0xe93fad(0x822)+'lect:'+_0xe93fad(0xdce),'SlrVx':function(_0x620e2a,_0x394e7a){return _0x620e2a<_0x394e7a;},'NLYPb':function(_0x17139e,_0x35afc4){return _0x17139e*_0x35afc4;},'NxUWB':function(_0x18ecef,_0x54a194){return _0x18ecef>_0x54a194;},'TRnsU':function(_0x185b3d,_0xb911b0){return _0x185b3d+_0xb911b0;},'mFIcc':function(_0x355f3f,_0x9d5459){return _0x355f3f<_0x9d5459;},'BFITs':function(_0x274476,_0x25011f){return _0x274476===_0x25011f;},'TaCWn':function(_0x58a0c5,_0x7c86df){return _0x58a0c5===_0x7c86df;},'Vjeyc':function(_0x2ef64c,_0x43b4fe){return _0x2ef64c*_0x43b4fe;},'jLbDq':function(_0x1e9382,_0x30a31f){return _0x1e9382<_0x30a31f;},'YCdQE':function(_0x4fad8e,_0x462fa5){return _0x4fad8e<=_0x462fa5;},'gtSEh':function(_0x3d4cbd,_0x5aff5d){return _0x3d4cbd!==_0x5aff5d;},'YoPgF':_0xe93fad(0xb68),'UhGLs':_0xe93fad(0x9ae),'duffp':function(_0x54e060,_0x4b7ac0){return _0x54e060<_0x4b7ac0;},'XYcKi':function(_0x44c925,_0x7831b2){return _0x44c925+_0x7831b2;},'JCUof':function(_0x122cfe,_0x4167c3){return _0x122cfe*_0x4167c3;},'kUpuA':_0xe93fad(0x785),'MmuAx':_0xe93fad(0x472),'pzdSL':function(_0xab2340,_0x26cf70){return _0xab2340<_0x26cf70;},'mjgGH':_0xe93fad(0x6ae),'Btkqg':function(_0x2ee58d,_0x205b38){return _0x2ee58d>_0x205b38;},'AJyyB':function(_0x2b7e56,_0x2ddb60){return _0x2b7e56>_0x2ddb60;},'UqkfN':'JgMut','yhaZI':function(_0x2fc73c,_0x5a484a){return _0x2fc73c<_0x5a484a;},'BFtqE':_0xe93fad(0x858),'iFAfV':'VPOhZ','iFBBg':function(_0x10997a,_0x1e87d8){return _0x10997a+_0x1e87d8;},'XXqnk':function(_0xda493){return _0xda493();},'buusC':function(_0x55ca74,_0x3d731a){return _0x55ca74<_0x3d731a;},'pyxJI':function(_0x3b560c,_0xaff869){return _0x3b560c!==_0xaff869;},'CpBML':function(_0x2e0e75,_0x1ce3cc,_0x979ef5,_0xedae3c){return _0x2e0e75(_0x1ce3cc,_0x979ef5,_0xedae3c);},'JAter':function(_0x248c8f,_0x1a6bfb){return _0x248c8f*_0x1a6bfb;},'QIyKQ':'iuZkd','zpNWy':_0xe93fad(0x6db),'SiQHz':'backg'+'round'+':rgba'+_0xe93fad(0x38c)+'2,29,'+_0xe93fad(0x54d)+'borde'+_0xe93fad(0xcae)+_0xe93fad(0xe40)+_0xe93fad(0x2ec)+_0xe93fad(0x377)+',143,'+_0xe93fad(0xdea)+_0xe93fad(0x66c)+_0xe93fad(0x775)+_0xe93fad(0x401)+_0xe93fad(0xb73)+'x;','IzPfz':_0xe93fad(0x92d)+_0xe93fad(0x4ec)+_0xe93fad(0xac3)+_0xe93fad(0xb7f)+_0xe93fad(0x716)+'user-'+'selec'+_0xe93fad(0xac3)+'e;','zxUri':function(_0x38a7ac,_0x240fa9){return _0x38a7ac+_0x240fa9;},'pzkSp':_0xe93fad(0x691)+'ra-es'+_0xe93fad(0x57e),'CYLYH':function(_0x17687d,_0x4f1d9e){return _0x17687d===_0x4f1d9e;},'QqHcr':'\x20/\x20','ahcxX':function(_0x18daf2,_0x57fefc){return _0x18daf2+_0x57fefc;},'OBJYt':_0xe93fad(0x539)+'s','PFTHT':_0xe93fad(0x49a),'RGTUC':function(_0xa83ade,_0x1c08d3){return _0xa83ade!==_0x1c08d3;},'zSdme':function(_0x206e9a,_0x54236e){return _0x206e9a===_0x54236e;},'nZOLf':function(_0x53c5f7,_0x58d352){return _0x53c5f7-_0x58d352;},'xpbXU':'2|4|0'+_0xe93fad(0xbcb),'fkQrk':function(_0x4b3455,_0x11a461){return _0x4b3455+_0x11a461;},'MFUAR':function(_0x35f69b,_0x99bcae){return _0x35f69b*_0x99bcae;},'FHSYr':function(_0x22ffd3,_0x5ac4ce){return _0x22ffd3>_0x5ac4ce;},'zblCx':function(_0x20339a,_0x335a73){return _0x20339a-_0x335a73;},'uStdU':function(_0x52130a,_0x44872a){return _0x52130a===_0x44872a;},'yEmfO':function(_0x56d2d5,_0x25b02e){return _0x56d2d5/_0x25b02e;},'Exruh':function(_0x11c9ec,_0x3153cc){return _0x11c9ec*_0x3153cc;},'aZUhZ':function(_0x34e0fc,_0x29d874){return _0x34e0fc-_0x29d874;},'IOTHj':function(_0x2e3497,_0x5f2b0f){return _0x2e3497*_0x5f2b0f;},'AbCon':function(_0x5c0f6c,_0x459341){return _0x5c0f6c*_0x459341;},'VPCzi':function(_0x2c69f5,_0x53c887){return _0x2c69f5+_0x53c887;},'KazQA':_0xe93fad(0x26d),'GVxPq':function(_0x1928b8,_0x387234){return _0x1928b8*_0x387234;},'lPqMT':function(_0x3d759d,_0x4639f){return _0x3d759d-_0x4639f;},'ckCIr':function(_0x2bcefc,_0x59edec){return _0x2bcefc*_0x59edec;},'kAojZ':function(_0x39473b,_0x52522b){return _0x39473b-_0x52522b;},'keVKU':function(_0x37a622,_0x211a65){return _0x37a622!==_0x211a65;},'pKRdp':function(_0x33d02c,_0x536afe){return _0x33d02c<_0x536afe;},'PlDEp':function(_0x3ad01d,_0xf41d8a){return _0x3ad01d===_0xf41d8a;},'cagcw':function(_0xa8a522,_0x37ad6b){return _0xa8a522===_0x37ad6b;},'JMUDM':function(_0xc1d0f0,_0x58ec2d,_0x43d5a6,_0x59cb67,_0x526b75){return _0xc1d0f0(_0x58ec2d,_0x43d5a6,_0x59cb67,_0x526b75);},'POnnX':function(_0x2e5e3b,_0x212c56){return _0x2e5e3b/_0x212c56;},'WkolC':_0xe93fad(0x8f5)+'255,1'+_0xe93fad(0xa7c)+_0xe93fad(0x571)+')','toExr':function(_0x56fcae,_0x2a59a2){return _0x56fcae/_0x2a59a2;},'tsnUv':_0xe93fad(0x47c),'zyGQI':function(_0x10b584,_0x3c8266){return _0x10b584!==_0x3c8266;},'iFJIT':function(_0x50b05d,_0x1ea696){return _0x50b05d(_0x1ea696);},'KsZUh':function(_0x1d104f,_0x3ab583){return _0x1d104f<_0x3ab583;},'YBrTA':_0xe93fad(0x31b),'JMtac':function(_0xc05ecf,_0x172b7e){return _0xc05ecf/_0x172b7e;},'oePLX':function(_0x1838e8,_0x286c79){return _0x1838e8!==_0x286c79;},'aIVto':'JcRjM','qZYcV':_0xe93fad(0x55b),'EJoqd':_0xe93fad(0xa26),'sOCsV':_0xe93fad(0xd73),'bTpGT':_0xe93fad(0x79c),'ubnVY':function(_0x1d62d0,_0x54c768){return _0x1d62d0/_0x54c768;},'jFnoO':function(_0x8a58c4,_0x238e1a){return _0x8a58c4!==_0x238e1a;},'TdLbX':function(_0x41d398,_0x152257){return _0x41d398===_0x152257;},'reMCU':_0xe93fad(0xdf5)+'6a','LZXqZ':'\x20·\x20','EbzEv':_0xe93fad(0x1b1)+'v\x20','xDPIJ':_0xe93fad(0x873),'kGjbD':function(_0x9005e9,_0x51ce19){return _0x9005e9===_0x51ce19;},'aetvP':_0xe93fad(0x4c9),'gXrnn':function(_0x28795e,_0x3b0a12){return _0x28795e(_0x3b0a12);},'LyhEd':function(_0x4c8859){return _0x4c8859();},'RJPGw':function(_0x195e7f,_0x2541ab){return _0x195e7f===_0x2541ab;},'MLYCm':'FKuWv','mcYNv':function(_0x53ed28){return _0x53ed28();},'CNFIv':function(_0x4ead5d,_0x56c608){return _0x4ead5d(_0x56c608);},'zjqYO':_0xe93fad(0xd52)+'|3|0|'+_0xe93fad(0xad8),'ULmOy':function(_0x1dab9,_0x34684a){return _0x1dab9/_0x34684a;},'GvSZx':function(_0x253146){return _0x253146();},'ICwXg':function(_0x3dde55,_0x36e640){return _0x3dde55(_0x36e640);},'mTLJh':function(_0x3e826d){return _0x3e826d();},'xbtir':function(_0x565430,_0x3f5a18){return _0x565430(_0x3f5a18);},'qRAbL':_0xe93fad(0x8a6),'sQhzb':function(_0x3672a7,_0x268ee8){return _0x3672a7-_0x268ee8;},'RrTjp':function(_0x20d4c1){return _0x20d4c1();},'EhgaO':function(_0x3ac3b1){return _0x3ac3b1();},'PbGGY':_0xe93fad(0x371)+_0xe93fad(0x92b)+'g\x20fai'+_0xe93fad(0x344),'gurba':function(_0x263caf,_0x44f80a){return _0x263caf+_0x44f80a;},'dVNJA':'No\x20re'+_0xe93fad(0x801)+_0xe93fad(0xd6e)+'\x20so\x20e'+_0xe93fad(0x40b)+'offse'+_0xe93fad(0xb8a)+_0xe93fad(0x8b0)+_0xe93fad(0x91b)+_0xe93fad(0x5e5)+'e.','iIIJl':function(_0x3eae7f,_0x40a745){return _0x3eae7f+_0x40a745;},'bdLPp':'repla'+'ced\x20b'+'y\x20a\x20d'+_0xe93fad(0x6e7)+_0xe93fad(0x1ee)+'nstan'+'ce,\x20s'+_0xe93fad(0xdd8)+_0xe93fad(0x9c4)+_0xe93fad(0xcd4)+_0xe93fad(0x868)+'wrong'+'\x20obje'+_0xe93fad(0x27e)+'r\x20','kqjGR':'UsaIc','owRKb':_0xe93fad(0x94b)+'n._ru'+_0xe93fad(0x8fb)+'\x20is\x20n'+'ot\x20wi'+_0xe93fad(0xd1d)+_0xe93fad(0x262)+_0xe93fad(0xc5c)+_0xe93fad(0xc66)+_0xe93fad(0xa67)+_0xe93fad(0xb0d)+'the\x20p'+_0xe93fad(0x6cb)+_0xe93fad(0xa6d)+_0xe93fad(0xb95)+'\x20','nvwyJ':_0xe93fad(0x633),'oIMKs':'zuTFH','iLLRp':function(_0x4fbadc,_0x2ca93a){return _0x4fbadc+_0x2ca93a;},'xKkrP':function(_0x3a4b64,_0x38dd21){return _0x3a4b64+_0x38dd21;},'DlLJS':function(_0x23e87a,_0x177c38){return _0x23e87a+_0x177c38;},'pyaBs':function(_0x1721d5,_0xf79841){return _0x1721d5+_0xf79841;},'MnQkQ':'Heap\x20'+_0xe93fad(0x6b6)+_0xe93fad(0x86c)+_0xe93fad(0xb39)+_0xe93fad(0xa08)+_0xe93fad(0x9af)+'a\x20gam'+_0xe93fad(0x619)+'ect\x20w'+_0xe93fad(0xd94)+'odule'+_0xe93fad(0x2a6)+_0xe93fad(0x5e0)+'\x20reac'+_0xe93fad(0xab9)+'.','ompLA':'windo'+_0xe93fad(0x8c9)+_0xe93fad(0xd59)+'Modki'+_0xe93fad(0x990)+_0xe93fad(0x614)+_0xe93fad(0x1d7)+_0xe93fad(0x5bf)+_0xe93fad(0x6b7)+'\x20-\x20ca'+_0xe93fad(0x86e)+_0xe93fad(0x39c)+_0xe93fad(0xe33)+'g\x20bli'+'nd.','rmCQo':function(_0x69b49e,_0x435089){return _0x69b49e>_0x435089;},'WbIJk':function(_0x3fd660,_0x47474e){return _0x3fd660+_0x47474e;},'HfFbr':_0xe93fad(0x766)+_0xe93fad(0x9df)+_0xe93fad(0x4d9)+'ered\x20'+_0xe93fad(0x754)+_0xe93fad(0x9ba)+'re\x20ig'+'nored'+_0xe93fad(0x3e5)+_0xe93fad(0xcc4)+_0xe93fad(0x4b6)+'f\x20the'+'\x20page'+'.\x20','lSolF':_0xe93fad(0xa7b)+_0xe93fad(0xa75)+'\x20','oaQQb':function(_0x4a2039,_0x5cd19d){return _0x4a2039+_0x5cd19d;},'wTfIp':_0xe93fad(0xcc7)+_0xe93fad(0xb31)+'appli'+_0xe93fad(0x376)+'t\x20no\x20'+_0xe93fad(0xb1f)+_0xe93fad(0xc4b)+'ler\x20h'+_0xe93fad(0x819)+'red\x20y'+'et.\x20','cUHsg':_0xe93fad(0x6da)+_0xe93fad(0x55c)+'\x20are\x20'+_0xe93fad(0xa3b)+'n\x20a\x20r'+'ound,'+_0xe93fad(0x83e)+'he\x20ho'+_0xe93fad(0x63e)+'\x20on\x20t'+_0xe93fad(0xb0b)+_0xe93fad(0x657)+'verlo'+'ad.','UTkmo':_0xe93fad(0x3b0)+_0xe93fad(0x459)+_0xe93fad(0x68d)+'irst\x20'+'captu'+_0xe93fad(0x3b7)+_0xe93fad(0x7d2)+_0xe93fad(0xdf2),'ApBZs':'ItsFf','ahRJr':function(_0x4a920f,_0x24a012){return _0x4a920f-_0x24a012;},'SVWXA':function(_0x492631,_0x20da66){return _0x492631(_0x20da66);},'snwWr':function(_0x18a137,_0xab1f72){return _0x18a137+_0xab1f72;},'VVlJR':'OTjOv','pBZch':_0xe93fad(0xc53),'Srtyn':function(_0x5028a3){return _0x5028a3();},'IXRjQ':function(_0x353929,_0x12f453){return _0x353929<_0x12f453;},'uBMKK':function(_0x2d33d2,_0xcd0b8a,_0x318a58){return _0x2d33d2(_0xcd0b8a,_0x318a58);},'OtmTP':function(_0x2462f8,_0x546754,_0x455186){return _0x2462f8(_0x546754,_0x455186);},'euabO':_0xe93fad(0xd93)+'r','uTCHo':_0xe93fad(0xcf7)+'b1','FaHAE':'===SA'+_0xe93fad(0xb29)+'SKILL'+_0xe93fad(0x58f)+_0xe93fad(0x9c9)+_0xe93fad(0xc48),'EUNwF':function(_0x2ba32f,_0x6073f2){return _0x2ba32f+_0x6073f2;},'gfbUu':';font'+_0xe93fad(0xd25)+_0xe93fad(0x674)+'0','mprFo':_0xe93fad(0x70f)+_0xe93fad(0xbb6)+_0xe93fad(0xcbe)+'-hidd'+'en','djuVn':'DOMCo'+'ntent'+'Loade'+'d','wrFwM':_0xe93fad(0x6b5)+'ge','YcVtQ':_0xe93fad(0x6ff),'FdRme':_0xe93fad(0x8af)+_0xe93fad(0x5e2)+'\u008f','NCzSB':_0xe93fad(0x900)+_0xe93fad(0x462),'yQVnz':'\u0088\u0091\u008b\u0087\u0087'+'\u008e\u008f\u0091\u0088\u008c'+'\u0095','oFpTW':_0xe93fad(0x2cb)+_0xe93fad(0xae2)+'\u008a','DftBl':_0xe93fad(0xcf2)+'\u0089\u008d\u008f\u0087\u0091'+'\u0093','vnGoN':'.ctor','AIhzZ':_0xe93fad(0x803)+_0xe93fad(0x8f8)+'\u008e','ZLPor':_0xe93fad(0x8a8)+_0xe93fad(0x82f)+'\u0088','lHKCU':_0xe93fad(0x5fc)+_0xe93fad(0xdb0)+'\u008a','yLzvn':'\u0089\u0091\u0086\u0093\u008f'+_0xe93fad(0x5ff)+'\u008d','yjwWf':'\u008e\u0092\u0091\u0088\u0092'+_0xe93fad(0x786)+'\u008b','rAfnY':'\u008e\u0093\u008f\u008d\u0088'+'\u0088\u0090\u0095\u0089\u008d'+'\u008a','AaJOY':'\u0087\u008f\u008d\u008b\u0092'+_0xe93fad(0x507)+'\u008c','tqTFT':'\u008a\u0086\u008a\u008b\u0086'+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','NSqyg':_0xe93fad(0x7ab)+'\u0090\u008b\u008d\u008d\u0093'+'\u008e','NPMgL':_0xe93fad(0x70b)+_0xe93fad(0xe36)+'\u008b','NJgiA':_0xe93fad(0x463)+_0xe93fad(0x8d0)+'\u008a','JcIqm':_0xe93fad(0x36e)+_0xe93fad(0xd53)+'\u008a','fGgzb':'bool','hafKZ':_0xe93fad(0x49c)+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','jENPl':_0xe93fad(0x213)+_0xe93fad(0x38d)+'\u0092','zKJVe':_0xe93fad(0x5a1)+'\u0090\u0089\u008f\u008e\u0093'+'\u008e','KVGaL':'\u0091\u0088\u0095\u0088\u0088'+_0xe93fad(0x2db)+'\u0089','MrWWJ':'\u0087\u008d\u0095\u008d\u0087'+_0xe93fad(0x644)+'\u008f','cQWhQ':_0xe93fad(0xe01)+_0xe93fad(0x998)+'\u0094','UYbNr':_0xe93fad(0xb1e)+_0xe93fad(0x8bc)+'\u0089','eiOko':_0xe93fad(0x81b)+'\u008d\u0095\u0093\u0094\u008b'+'\u0091','FgmzZ':_0xe93fad(0x7c9)+_0xe93fad(0x364)+'\u008a','MSvnh':'\u0087\u008b\u0088\u0090\u008e'+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','YhJYk':_0xe93fad(0x304)+'\u008c\u0090\u0087\u008c\u0086'+'\u0087','InFGA':'\u008c\u0089\u0091\u0095\u0090'+_0xe93fad(0xb42)+'\u0087','Mjwmc':_0xe93fad(0x1ab)+_0xe93fad(0x9a3)+'\u0087','TSctz':'\u0094\u008d\u0087\u0094\u008d'+_0xe93fad(0xc7d)+'\u0094','ZPrII':_0xe93fad(0x9a9)+'\u0093\u0086\u0087\u008c\u008a'+'\u008d','kyjdl':_0xe93fad(0xc20)+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','CFUnr':'\u0089\u0086\u0090\u0088\u008c'+'\u0088\u008e\u0088\u008b\u0090'+'\u008b','atzSy':'\u0091\u0093\u0091\u008f\u008c'+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','ctEmM':'\u0087\u0093\u0093\u0087\u0087'+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','aBfaw':_0xe93fad(0x515)+_0xe93fad(0x420)+'\u0092','awWZf':'\u0095\u0090\u0093\u0093\u008a'+_0xe93fad(0xe22)+'\u0086','QiLNE':_0xe93fad(0xa41)+_0xe93fad(0xabf)+'\u0095','POlFq':_0xe93fad(0x4e0)+_0xe93fad(0x204)+'\u008f','TTqFI':_0xe93fad(0x4a5)+_0xe93fad(0x6fe)+'\u008c','ZZzSY':_0xe93fad(0x6d0)+'\u0089\u0093\u0094\u008e\u008c'+'\u0095','NQZwD':_0xe93fad(0xd3a)+_0xe93fad(0x2a5)+'\u0090','sxpuA':_0xe93fad(0xb5a)+_0xe93fad(0x42a)+'\u008a','YnLIy':_0xe93fad(0x499)+_0xe93fad(0x94f)+'\u0089','Yriie':'\u0087\u0091\u0091\u0090\u0091'+_0xe93fad(0x22c)+'\u0086','LnSHT':_0xe93fad(0xbfe)+'\u0088\u0094\u008d\u008d\u008c'+'\u008c','InTNT':'\u008b\u0086\u008e\u0095\u0091'+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','gNzNb':_0xe93fad(0x3a9)+_0xe93fad(0xdab)+'\u0093','Krxfs':'\u008b\u0088\u008d\u0087\u0090'+_0xe93fad(0xc72)+'\u0094','gOgmz':_0xe93fad(0x763)+_0xe93fad(0xe25)+'\u008c','iYtYI':_0xe93fad(0xa43)+_0xe93fad(0x339)+'\u0088','wqUxp':_0xe93fad(0x358)+'\u0088\u0094\u0094\u008e\u008e'+'\u008a','RRfBd':_0xe93fad(0xabb)+'\u0094\u0089\u0093\u0088\u0093'+'\u0089','nsdIr':_0xe93fad(0x61b)+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','wUiZa':_0xe93fad(0x771),'KHPrY':'\u0086\u0090\u0086\u008c\u0090'+_0xe93fad(0x2bc)+'\u008b','YiIUT':'\u0087\u0087\u0089\u0092\u008d'+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','XkyDk':_0xe93fad(0x626)+_0xe93fad(0x378)+'\u008e','NKSBJ':_0xe93fad(0xbe3)+_0xe93fad(0x9b3)+'\u008e','ehakT':_0xe93fad(0xdfb)+_0xe93fad(0xaaa)+'\u0094','CExIn':_0xe93fad(0xd21)+'\u0086\u008a\u0095\u0094\u008e'+'\u008f','QXqQh':_0xe93fad(0xc5e)+'\u0088\u0094\u008e\u008d\u0093'+'\u008a','KVdVX':'\u0095\u008e\u008f\u008b\u008d'+_0xe93fad(0x5b9)+'\u0094','jKpXf':_0xe93fad(0xdca)+_0xe93fad(0xa1d)+'\u008c','SaOiH':_0xe93fad(0xba5)+_0xe93fad(0x6fd)+'\u008e','AfQFi':_0xe93fad(0x928)+_0xe93fad(0x8ce)+'\u0086','HDpYh':_0xe93fad(0x1f4)+_0xe93fad(0x981)+'\u0095','BQnbA':_0xe93fad(0x48b)+_0xe93fad(0xcf8)+'\u0092','mLuvb':'TDM_G'+_0xe93fad(0x842)+_0xe93fad(0xb13),'qGvQt':_0xe93fad(0x21f)+'bly-C'+'Sharp'+'.dll','krfpQ':'ch.sy'+'cofor'+_0xe93fad(0x2dd)+_0xe93fad(0xbca)+'ll','hjVMw':'cInpu'+_0xe93fad(0x719),'BKLEb':_0xe93fad(0x46e),'vDrqT':_0xe93fad(0x910)+'h','LdeDy':'0x24','HBOkI':'0x30','oSHuX':_0xe93fad(0x9b2)+'le','tKLDc':_0xe93fad(0x3e7),'jrTiD':_0xe93fad(0x3ad),'nMvNp':_0xe93fad(0x40d),'GHPCS':_0xe93fad(0x2f0),'GBjFP':_0xe93fad(0xd08)+'Flag','AXTVT':_0xe93fad(0x1c6),'lNpFP':'keydo'+'wn','zXhva':_0xe93fad(0x70f)+_0xe93fad(0xbb6)+_0xe93fad(0x4a0)+_0xe93fad(0x8e6),'lsWDZ':'slufE','pseOA':'CMB','LJbIw':'visua'+'ls','hHtBC':'LOG','HWWNj':function(_0x37a3b3,_0x4ee752){return _0x37a3b3+_0x4ee752;},'XVAMV':function(_0x2102a6,_0xe43c6f){return _0x2102a6+_0xe43c6f;},'EpvZw':function(_0x4ba896,_0x2c1146){return _0x4ba896+_0x2c1146;},'NQRBq':function(_0x2e5f72,_0x156235){return _0x2e5f72+_0x156235;},'IQZJQ':function(_0x1ff990,_0x2584f8){return _0x1ff990+_0x2584f8;},'hyVRM':function(_0x233654,_0x59606f){return _0x233654+_0x59606f;},'BKZwO':function(_0x43c8b8,_0x16de5e){return _0x43c8b8+_0x16de5e;},'hwHcU':function(_0x7e3bde,_0x129c72){return _0x7e3bde+_0x129c72;},'CMYxH':function(_0x50406f,_0x490cbd){return _0x50406f+_0x490cbd;},'pxQqD':function(_0x4e78fb,_0x4cb203){return _0x4e78fb+_0x4cb203;},'VwhPh':function(_0x35ee38,_0x191900){return _0x35ee38+_0x191900;},'ETbCz':function(_0x42d858,_0x22ed3c){return _0x42d858+_0x22ed3c;},'GNAXK':_0xe93fad(0x691)+_0xe93fad(0x494)+'nu-ro'+_0xe93fad(0x2f1)+'l:ini'+_0xe93fad(0x51a),'xOXSW':_0xe93fad(0x2c7)+'round'+':rgba'+'(24,1'+'7,21,'+_0xe93fad(0xbea)+_0xe93fad(0xdc8)+_0xe93fad(0x233)+'ilter'+_0xe93fad(0x89e)+'(22px'+_0xe93fad(0x35a)+_0xe93fad(0x360)+'(150%'+_0xe93fad(0x269)+_0xe93fad(0x716)+_0xe93fad(0xdc8)+'rop-f'+_0xe93fad(0x919)+':blur'+_0xe93fad(0x750)+_0xe93fad(0x35a)+'urate'+'(150%'+');','gFZvu':_0xe93fad(0x691)+_0xe93fad(0x494)+_0xe93fad(0xaa9)+'ot.mn'+'-pane'+'l.sho'+_0xe93fad(0xa6b)+'acity'+_0xe93fad(0xd84)+_0xe93fad(0x820)+_0xe93fad(0xe0b)+'ne;po'+_0xe93fad(0xa11)+_0xe93fad(0x4d4)+'ts:au'+_0xe93fad(0x6e8),'AnPxL':_0xe93fad(0x898)+_0xe93fad(0x572)+'ispla'+'y:fle'+_0xe93fad(0x488)+'x-dir'+'ectio'+_0xe93fad(0x688)+_0xe93fad(0x460)+'lign-'+_0xe93fad(0x720)+':cent'+_0xe93fad(0xd1e)+_0xe93fad(0x979)+';widt'+_0xe93fad(0x6f9)+_0xe93fad(0x488)+_0xe93fad(0x67d)+_0xe93fad(0x7a3)+_0xe93fad(0xdf1)+_0xe93fad(0xd70)+'0;','YWJdB':'backg'+'round'+_0xe93fad(0xc64)+_0xe93fad(0x9f5)+_0xe93fad(0xa61)+_0xe93fad(0x829)+'gba(2'+_0xe93fad(0xd1b)+_0xe93fad(0x9f2)+',.4);'+'curso'+'r:poi'+_0xe93fad(0x50f)+_0xe93fad(0xdd1)+'size:'+'10px;'+_0xe93fad(0xdd1)+'weigh'+_0xe93fad(0xae1)+_0xe93fad(0x7d3)+_0xe93fad(0x7ca)+'ly:in'+'herit'+';}','RlzuX':_0xe93fad(0x31c)+_0xe93fad(0x5f8)+'tive{'+_0xe93fad(0x7a6)+_0xe93fad(0xd2c)+'b9d;b'+'ackgr'+'ound:'+'rgba('+'255,1'+'07,15'+_0xe93fad(0xc17)+';}','ujFuW':_0xe93fad(0xb74)+'ain{f'+_0xe93fad(0x818)+';min-'+_0xe93fad(0x80d)+_0xe93fad(0xc62)+'splay'+_0xe93fad(0x87e)+';flex'+'-dire'+'ction'+_0xe93fad(0x8cf)+_0xe93fad(0xd7a),'IWDTF':_0xe93fad(0xc2a)+_0xe93fad(0x6df)+_0xe93fad(0xb21)+_0xe93fad(0x537)+'14px;'+'heigh'+_0xe93fad(0x901)+_0xe93fad(0x3f6)+_0xe93fad(0x217)+_0xe93fad(0xbaf)+'oke:c'+'urren'+'tColo'+'r;str'+_0xe93fad(0x343)+'idth:'+_0xe93fad(0x770)+'oke-l'+_0xe93fad(0x812)+'p:rou'+'nd;}','plcfP':_0xe93fad(0xc2a)+'ols{f'+'lex:1'+';min-'+'heigh'+_0xe93fad(0x601)+_0xe93fad(0x302)+'ow-y:'+'auto;'+_0xe93fad(0x957)+'ay:gr'+_0xe93fad(0x32e)+_0xe93fad(0x75f)+_0xe93fad(0x289)+'e-col'+'umns:'+_0xe93fad(0x51b)+'t(aut'+_0xe93fad(0x77a)+_0xe93fad(0x485)+_0xe93fad(0x9ff)+'50px,'+'1fr))'+';','sCKUc':'.mn-c'+_0xe93fad(0x607)+'-webk'+'it-sc'+'rollb'+'ar{wi'+'dth:8'+_0xe93fad(0x2a7),'uwivo':_0xe93fad(0xc2a)+'ols::'+'-webk'+'it-sc'+'rollb'+_0xe93fad(0x65d)+'umb{b'+'ackgr'+'ound:'+_0xe93fad(0x8f5)+_0xe93fad(0xa8b)+_0xe93fad(0x518)+_0xe93fad(0x1d6)+_0xe93fad(0xbf4)+'der-r'+_0xe93fad(0xd68)+':4px;'+'}','MZAbu':_0xe93fad(0x4b1)+_0xe93fad(0x211)+_0xe93fad(0xcb5)+'flex:'+'1;min'+_0xe93fad(0x6b4)+'h:0;}','zhfiX':_0xe93fad(0xa58)+'int{d'+_0xe93fad(0x3dc)+'y:blo'+'ck;fo'+'nt-si'+_0xe93fad(0x9d2)+_0xe93fad(0x634)+_0xe93fad(0xa93)+_0xe93fad(0xcee),'IworW':_0xe93fad(0xc28)+_0xe93fad(0x2c5)+_0xe93fad(0x957)+'ay:fl'+_0xe93fad(0xc1f)+'ign-i'+'tems:'+_0xe93fad(0xdad)+_0xe93fad(0x4d2)+_0xe93fad(0x1ca)+'}','yUhPI':_0xe93fad(0x2c7)+_0xe93fad(0x921)+':line'+'ar-gr'+_0xe93fad(0x8fc)+_0xe93fad(0xcf5)+'6b9d,'+'#ff6b'+_0xe93fad(0x25e)+_0xe93fad(0x9f0)+_0xe93fad(0x59f)+_0xe93fad(0xaa7)+_0xe93fad(0xa78)+_0xe93fad(0x62e)+_0xe93fad(0x53f)+'at,rg'+_0xe93fad(0xc41)+_0xe93fad(0x547)+_0xe93fad(0x8cd)+_0xe93fad(0xced)+'}','xVPrP':'.sk-n'+'ote{f'+'ont-s'+'ize:1'+'1px;c'+'olor:'+'rgba('+_0xe93fad(0xd85)+_0xe93fad(0x29b)+'2,.5)'+_0xe93fad(0xc97)+_0xe93fad(0xb4c)+'px\x200;'+_0xe93fad(0x726)+_0xe93fad(0x817)+_0xe93fad(0xb49)+_0xe93fad(0x831)+';}','MvCdP':_0xe93fad(0xa88)+_0xe93fad(0x1e6)+_0xe93fad(0x561)+'ilter'+':brig'+'htnes'+_0xe93fad(0x45a)+_0xe93fad(0xe24),'ZaFih':_0xe93fad(0x6d1)+'re{fo'+_0xe93fad(0x6c0)+'px/1.'+_0xe93fad(0xa5c)+_0xe93fad(0x5f4)+_0xe93fad(0x222)+_0xe93fad(0x564)+'las,m'+_0xe93fad(0x71e)+'ace;w'+'hite-'+'space'+_0xe93fad(0xc85)+_0xe93fad(0x461)+_0xe93fad(0xc0c)+'break'+_0xe93fad(0xbf2)+_0xe93fad(0x9fc)+_0xe93fad(0x2b5)+'gin:0'+_0xe93fad(0x5bd)+_0xe93fad(0x90f)+_0xe93fad(0x484)+_0xe93fad(0xaec)+_0xe93fad(0x267)+_0xe93fad(0xd3f)+'overf'+_0xe93fad(0x3ed)+_0xe93fad(0x30e),'JvLdO':_0xe93fad(0x691)+_0xe93fad(0xdfa)+'tal{p'+_0xe93fad(0xa6a)+'on:fi'+_0xe93fad(0x80e)+_0xe93fad(0xc3f)+'px;ri'+_0xe93fad(0xa72)+'2px;z'+_0xe93fad(0x356)+_0xe93fad(0x230)+'74836'+_0xe93fad(0x522)+_0xe93fad(0x8b5)+'point'+_0xe93fad(0x7ec)+_0xe93fad(0x816)+'6px;h'+'eight'+':26px'+';opac'+'ity:.'+_0xe93fad(0x609),'xbpZY':'trans'+_0xe93fad(0x3a0)+_0xe93fad(0xcaa)+_0xe93fad(0x4cf)+_0xe93fad(0x8b7)+_0xe93fad(0xa11)+_0xe93fad(0x4d4)+'ts:au'+_0xe93fad(0x36f)+_0xe93fad(0xc80)+_0xe93fad(0x544)+'shado'+_0xe93fad(0xac6)+'\x204px\x20'+_0xe93fad(0x8f5)+_0xe93fad(0x6b2)+_0xe93fad(0x74f)+_0xe93fad(0xb45)+');}','AnjDw':'fill='+'\x22none'+'\x22\x20str'+_0xe93fad(0xac2)+'#ff6b'+'9d\x22\x20s'+'troke'+'-widt'+_0xe93fad(0xd90)+'\x20stro'+_0xe93fad(0x8a0)+'necap'+'=\x22rou'+'nd\x22\x20s'+_0xe93fad(0x503)+_0xe93fad(0x38f)+_0xe93fad(0x1bc)+_0xe93fad(0x509)+'d\x22/>','QRbvV':'<svg\x20'+_0xe93fad(0xb2d)+'=\x22mn-'+_0xe93fad(0xd0a)+'svg\x22\x20'+'viewB'+'ox=\x220'+_0xe93fad(0x9bd)+_0xe93fad(0x6c5)+_0xe93fad(0x7fe)+'\x20d=\x22M'+'12\x2021'+_0xe93fad(0xcad)+_0xe93fad(0x3b6)+'4-4.5'+'-4-7.'+_0xe93fad(0x927)+'.5\x201.'+'8-4.5'+'\x204-4.'+_0xe93fad(0x1b6)+'\x204\x204.'+'5c0\x203'+_0xe93fad(0x973)+_0xe93fad(0x471)+'.5z\x22\x20','dbaev':_0xe93fad(0x312)+'le\x20cx'+'=\x2212\x22'+'\x20cy=\x22'+'10\x22\x20r'+'=\x221.2'+'\x22\x20fil'+'l=\x22#f'+_0xe93fad(0x59e)+_0xe93fad(0x854)+'svg>','RvTJO':function(_0x52b547){return _0x52b547();}};var _0x3ba4a1=location[_0xe93fad(0x8b9)+_0xe93fad(0x322)]||'',_0x38878d=/(^|\.)www\.crazygames\.com$/['test'](_0x3ba4a1),_0x3d51a4=/(^|\.)games\.crazygames\.com$/[_0xe93fad(0x930)](_0x3ba4a1),_0x541354=/(^|\.)crazygames\.com$/[_0xe93fad(0x930)](_0x3ba4a1)&&!_0x38878d&&!_0x3d51a4,_0x59696c=_0x38878d?'porta'+'l':_0x3d51a4?'wrapp'+'er':_0x16a2b0[_0xe93fad(0x221)];if(!_0x38878d&&!_0x3d51a4&&!_0x541354)return;var _0x39f871=_0x16a2b0['uTCHo'],_0x1e279d=_0xe93fad(0x214)+_0xe93fad(0x540)+_0xe93fad(0x2aa),_0x5f1817=_0x16a2b0['FaHAE'],_0x1db09e='===SA'+_0xe93fad(0xb29)+_0xe93fad(0xc0b)+_0xe93fad(0x58f)+_0xe93fad(0x661)+'=',_0x412872=_0xe93fad(0x3d6)+'2';if(_0x3d51a4){if(_0xe93fad(0x23d)!=='mheDb'){window[_0xe93fad(0x557)+_0xe93fad(0x6a2)+_0xe93fad(0xcb1)+'r']('messa'+'ge',function(_0x189dac){var _0x502480=_0xe93fad,_0x477f72={'PPxaW':function(_0x32ce28){return _0x32ce28();},'rqQuy':function(_0x5a9cd8,_0x5443d8){return _0x16a2b0['DoLtK'](_0x5a9cd8,_0x5443d8);},'wfyaA':function(_0x269e79,_0x3bc552){var _0x558199=_0x563b;return _0x16a2b0[_0x558199(0x1f0)](_0x269e79,_0x3bc552);},'sopbr':_0x16a2b0[_0x502480(0x1d4)]},_0x4965e6=_0x189dac[_0x502480(0x69c)];if(!_0x4965e6||_0x16a2b0['zDftT'](_0x4965e6['__sak'+'ura'],_0x1e279d))return;try{if(window[_0x502480(0xe1b)+'t']&&_0x16a2b0[_0x502480(0xd17)](window[_0x502480(0xe1b)+'t'],window))window[_0x502480(0xe1b)+'t'][_0x502480(0xc60)+'essag'+'e'](_0x4965e6,'*');if(window[_0x502480(0xe0f)]&&window[_0x502480(0xe0f)]!==window)window[_0x502480(0xe0f)][_0x502480(0xc60)+_0x502480(0xbbc)+'e'](_0x4965e6,'*');}catch(_0x2f5720){}if(_0x4965e6&&_0x16a2b0[_0x502480(0x6fc)](_0x4965e6['kind'],_0x16a2b0[_0x502480(0x5ea)])){if(_0x16a2b0['IqxmW']!=='dKYjT')try{if(_0x16a2b0[_0x502480(0x953)](_0x502480(0x99e),_0x16a2b0[_0x502480(0xa92)]))_0x477f72[_0x502480(0x3af)](_0x34d1f7);else{var _0x1a1d2f=document['query'+'Selec'+_0x502480(0xaf2)+'l'](_0x502480(0x7f4)+'e');for(var _0x5c9f76=0x1f*0x13b+-0xcf9*0x1+-0x192c;_0x5c9f76<_0x1a1d2f['lengt'+'h'];_0x5c9f76++){try{if(_0x1a1d2f[_0x5c9f76]['conte'+'ntWin'+_0x502480(0x63c)])_0x1a1d2f[_0x5c9f76][_0x502480(0x3d2)+_0x502480(0xd50)+'dow']['postM'+'essag'+'e'](_0x4965e6,'*');}catch(_0x3f9d23){}}}}catch(_0x15c7d4){}else _0x189eb8[_0x502480(0x210)+_0x502480(0x98d)]=-0x1b*0x75+-0x4*0x28+0xcf8,_0x2542f1[_0x502480(0xe34)](_0x477f72[_0x502480(0xa0e)](_0x477f72['wfyaA'](_0x477f72['wfyaA']('PP>>\x20'+'n='+_0x959ede['lengt'+'h']+_0x477f72['sopbr']+_0xd618ed['toFix'+'ed'](-0x1eda*0x1+-0x709*-0x4+-0xe8*-0x3)+(_0x502480(0x3c5)+'r='),_0xe35032['toFix'+'ed'](-0x3*0x67b+0x2583+-0x2*0x908)),_0x502480(0x4e7)+'n='),_0x2ac34b)+(_0x502480(0x6b1)+'le=')+_0x9ccd67[_0x502480(0x453)+'gify'](_0x1e6d63[_0x502480(0x616)](-0x3*-0xc54+-0x1*-0x26a5+-0x4ba1,0x1ad9+0x1628+0x1*-0x30ff)));}}),console['log']('%c[sa'+'kura]'+_0xe93fad(0x943)+_0xe93fad(0xdba)+_0xe93fad(0xd6c)+'IVE\x20('+_0xe93fad(0xb8e)+'\x20up+d'+'own)',_0x16a2b0[_0xe93fad(0xab3)]('color'+':',_0x39f871));return;}else{if(_0x3f22fd[_0xe93fad(0x64c)]===_0xe93fad(0x913))_0x5b9436[_0xe93fad(0x7c6)+_0xe93fad(0xe15)+'x']({'typeName':_0xe93fad(0x4c3)+'Look','methodName':_0x8cde28[_0xe93fad(0x528)],'params':_0x1891d0['wasmP'+'arams'],'returnType':_0x23efbc['wasmR'+'et']},_0x5a5bb3(_0xe93fad(0xc00),_0x266595[_0xe93fad(0x528)]));else _0x16a2b0['trZth'](_0x21f043[_0xe93fad(0x64c)],_0xe93fad(0x6ff))&&_0x23994a['param'+'s'][_0xe93fad(0x516)+'h']===-0x26bf+-0x14*-0x1ef+0x14*0x1&&_0x16a2b0[_0xe93fad(0x27c)](_0x1229ce[_0xe93fad(0x2a8)+'s'][0x24aa+-0x1cdd+0x7cd*-0x1],_0xe93fad(0x913))&&_0x17daaa[_0xe93fad(0x7c6)+'refix']({'typeName':_0xe93fad(0x4c3)+_0xe93fad(0xa5b),'methodName':_0x5b930f[_0xe93fad(0x528)],'params':_0x162828['wasmP'+_0xe93fad(0x423)],'returnType':_0x1b3e7e},_0x2c7443('set',_0x22da67[_0xe93fad(0x528)]));}}if(_0x38878d){console[_0xe93fad(0xe34)]('%c[sa'+_0xe93fad(0xda4)+_0xe93fad(0xc56)+_0xe93fad(0xa95)+_0xe93fad(0x5ce),_0x16a2b0['fORiZ']+_0x39f871+_0x16a2b0[_0xe93fad(0xc89)],{'host':_0x3ba4a1});var _0x55a567={'set':function(){},'command':function(){}};function _0x39dd68(_0x272fd1,_0x8ecf06){var _0xe1a469=_0xe93fad,_0x344bac={'__sakura':_0x1e279d,'kind':_0x16a2b0['JPYMB'],'cmd':_0x272fd1,'arg':_0x8ecf06};try{var _0x33f0b5=document['query'+_0xe1a469(0x97e)+_0xe1a469(0xaf2)+'l'](_0x16a2b0[_0xe1a469(0xa4a)]);for(var _0x34640d=0x11f3*0x1+0xa*0xdd+-0x1a95;_0x34640d<_0x33f0b5['lengt'+'h'];_0x34640d++){try{if(_0x33f0b5[_0x34640d]['conte'+_0xe1a469(0xd50)+_0xe1a469(0x63c)])_0x33f0b5[_0x34640d][_0xe1a469(0x3d2)+'ntWin'+_0xe1a469(0x63c)]['postM'+'essag'+'e'](_0x344bac,'*');}catch(_0x22b9bc){}}}catch(_0x2b69ac){}try{var _0x36b4a2=new BroadcastChannel(_0x16a2b0['hZjuP']);_0x36b4a2['postM'+'essag'+'e'](_0x344bac),_0x16a2b0[_0xe1a469(0x483)](setTimeout,function(){try{_0x36b4a2['close']();}catch(_0x2d58b7){}},-0x1*0xb23+0x1*-0x249b+0x4*0xc2e);}catch(_0x1d0ba0){}}var _0x3e3fca=_0x16a2b0[_0xe93fad(0x33a)];function _0x1c2d79(){var _0x2f2f90=_0xe93fad;try{return _0x16a2b0[_0x2f2f90(0xafa)](localStorage[_0x2f2f90(0x445)+'em'](_0x3e3fca),'1');}catch(_0x5110d5){if(_0x2f2f90(0x29d)===_0x2f2f90(0x7fb)){var _0x50f941=_0x329791['c'][_0x50f0ed]['v'],_0x5509b2=_0x45953f[_0x2f2f90(0x94a)](_0x50f941[0x1*-0x2537+-0x265*-0x7+0x1474]*_0x50f941[0x95b*0x2+0x13*0x161+-0x2ce9]+_0x16a2b0[_0x2f2f90(0x5bb)](_0x50f941[0x929*-0x2+-0x9*0x29d+0x29d9],_0x50f941[0x15*-0x143+0x1*-0x13e8+-0x1*-0x2e69]));(_0x16a2b0[_0x2f2f90(0x62f)](_0x5509b2,_0x5b1eb3)||_0x16a2b0['Edtyr'](_0x5509b2,_0x2f47ca)&&_0x50f941[-0x1a3d+0x4*-0x638+0x331e]<_0x1abb6f['v'][-0x1020+0x650*0x6+-0x15bf])&&(_0x53e035=_0x5509b2,_0x2f60cd=_0x114b13['c'][_0x572ecd]);}else return![];}}function _0x29f850(_0x45702d){var _0x5e5137=_0xe93fad;if(_0x5e5137(0x1e4)!=='WhjYz'){try{_0x45702d?localStorage[_0x5e5137(0x96e)+'em'](_0x3e3fca,'1'):localStorage['remov'+_0x5e5137(0x5f1)](_0x3e3fca);}catch(_0x89bc5){}try{if(_0x16a2b0['trZth'](_0x16a2b0[_0x5e5137(0xa4b)],_0x5e5137(0x893))){var _0x3c263b=_0x526322();_0x484e05['value']=_0x16a2b0['ylvyj'](_0x138ab7,_0x3c263b),_0x28afb5['textC'+'onten'+'t']=(_0x5261a6<0x1e88+-0x1149+-0xd3e?_0x3c263b[_0x5e5137(0xb65)+'ed'](0x1*0x1555+-0xc13+-0x941):_0x16a2b0[_0x5e5137(0xa14)](_0x265546,_0x5f4fc3['round'](_0x3c263b)))+(_0x290717[_0x5e5137(0x56a)+'et'][_0x5e5137(0xc5f)]||'');var _0x992681=_0x16a2b0['LetCu'](_0x3c263b,_0x3ec675)/_0x16a2b0[_0x5e5137(0xb18)](_0x5cd223,_0x5ae393)*(-0x137*0x1+0x160*0x10+0xe3*-0x17);_0x40930e[_0x5e5137(0x8d9)][_0x5e5137(0x98f)+_0x5e5137(0x824)+'y'](_0x5e5137(0x466),_0x16a2b0[_0x5e5137(0x1f0)](_0x992681,'%'));}else{var _0x3ebe13=document['getEl'+_0x5e5137(0x99f)+_0x5e5137(0x512)](_0x5e5137(0x70f)+'a-sw-'+'v2');if(_0x3ebe13)_0x3ebe13[_0x5e5137(0x3b8)+'e']();}}catch(_0x21cab3){}try{var _0x4b5cea=document[_0x5e5137(0xd22)+_0x5e5137(0x99f)+'ById'](_0x5e5137(0x70f)+_0x5e5137(0xbb6)+'v2-ta'+'b');if(_0x45702d&&!_0x4b5cea&&document[_0x5e5137(0xbc1)]){if(_0x16a2b0['IHpjw'](_0x16a2b0[_0x5e5137(0xd9a)],'LsEJl')){var _0x19d9cb=_0x4c926a['creat'+_0x5e5137(0xc69)+_0x5e5137(0xcb8)]('style');_0x19d9cb['id']='sakur'+_0x5e5137(0xbb6)+'hud-c'+'ss',_0x19d9cb[_0x5e5137(0x4ff)+'onten'+'t']=_0x5e5137(0x691)+_0x5e5137(0xa5e)+_0x5e5137(0xb4e)+'all:i'+_0x5e5137(0x7bd)+'l}',(_0x3c8f96['head']||_0x8fce50['docum'+_0x5e5137(0xccd)+_0x5e5137(0x99f)])[_0x5e5137(0x28a)+'dChil'+'d'](_0x19d9cb);}else{var _0x214498=('1|5|2'+'|3|0|'+'4')[_0x5e5137(0x388)]('|'),_0x4da6b5=-0x24a6+-0x1*-0x2239+0x26d;while(!![]){switch(_0x214498[_0x4da6b5++]){case'0':_0x3b116c['oncli'+'ck']=function(){_0x16a2b0['izkwV'](_0x29f850,![]),_0x74b3e4();};continue;case'1':var _0x3b116c=document[_0x5e5137(0x2a2)+'eElem'+'ent'](_0x16a2b0['mCUsw']);continue;case'2':_0x3b116c['style']['cssTe'+'xt']=_0x16a2b0[_0x5e5137(0x2f2)](_0x16a2b0['YZUwp'](_0x5e5137(0x9ad)+_0x5e5137(0x6f7)+'ixed;'+'left:'+_0x5e5137(0x992)+'top:1'+'2px;z'+'-inde'+_0x5e5137(0x230)+'74829'+_0x5e5137(0x4bd)+_0x5e5137(0x8b5)+'point'+'er;us'+_0x5e5137(0x822)+_0x5e5137(0x66d)+'none;'+_0x16a2b0[_0x5e5137(0x4c7)],_0x39f871)+';',_0x16a2b0['XtUgl']);continue;case'3':_0x3b116c[_0x5e5137(0x4ff)+_0x5e5137(0x2bf)+'t']=_0x16a2b0['jAcIi'];continue;case'4':document[_0x5e5137(0xbc1)][_0x5e5137(0x28a)+_0x5e5137(0xe08)+'d'](_0x3b116c);continue;case'5':_0x3b116c['id']=_0x5e5137(0x70f)+'a-sw-'+_0x5e5137(0x1e0)+'b';continue;}break;}}}else!_0x45702d&&_0x4b5cea&&_0x4b5cea[_0x5e5137(0x3b8)+'e']();}catch(_0x116648){}}else return _0x529de7[_0x5e5137(0xe34)](_0x16a2b0[_0x5e5137(0xdae)],_0x5db086['messa'+'ge'],_0x53da63(_0x180958['stack']||'')[_0x5e5137(0x388)]('\x0a')['slice'](-0x2*0x3cb+0x19fe*-0x1+-0x2194*-0x1,0x47*0x7f+-0x1453+-0xee2)['join']('\x20|\x20')),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};}function _0x4c32a6(){var _0x5400b9=_0xe93fad,_0x2adf2f=_0x16a2b0[_0x5400b9(0xaf7)]['split']('|'),_0x4bafa1=-0x1*0x95f+0xc1*0x23+0x2*-0x882;while(!![]){switch(_0x2adf2f[_0x4bafa1++]){case'0':if(!document['body']||!document['body'][_0x5400b9(0x28a)+_0x5400b9(0xe08)+'d'])return null;continue;case'1':try{if(!document['getEl'+_0x5400b9(0x99f)+_0x5400b9(0x512)](_0x5400b9(0x70f)+'a-sw-'+_0x5400b9(0xc93)+'s')){var _0x44d0e3=document[_0x5400b9(0x2a2)+'eElem'+_0x5400b9(0xcb8)](_0x16a2b0[_0x5400b9(0x433)]);_0x44d0e3['id']='sakur'+'a-sw-'+'v2-cs'+'s',_0x44d0e3[_0x5400b9(0x4ff)+_0x5400b9(0x2bf)+'t']=_0x5400b9(0x691)+_0x5400b9(0xa5e)+_0x5400b9(0xd8b)+'ll:in'+_0x5400b9(0xa03)+'}',(document['head']||document[_0x5400b9(0xdc1)+_0x5400b9(0xccd)+_0x5400b9(0x99f)])[_0x5400b9(0x28a)+'dChil'+'d'](_0x44d0e3);}return _0x70ee5d=document[_0x5400b9(0x2a2)+'eElem'+_0x5400b9(0xcb8)](_0x5400b9(0xb32)),_0x70ee5d['id']='sakur'+'a-sw-'+'v2',document[_0x5400b9(0xbc1)]['appen'+_0x5400b9(0xe08)+'d'](_0x70ee5d),_0x70ee5d;}catch(_0x26df9c){return null;}continue;case'2':var _0x70ee5d=document[_0x5400b9(0xd22)+_0x5400b9(0x99f)+_0x5400b9(0x512)](_0x16a2b0['HnvGr']);continue;case'3':if(_0x16a2b0[_0x5400b9(0x76e)](_0x1c2d79))return null;continue;case'4':if(_0x70ee5d)return _0x70ee5d;continue;}break;}}function _0x74b3e4(){var _0x2837f8=_0xe93fad,_0x4e03fa=_0x16a2b0['crGMi'](_0x4c32a6);if(!_0x4e03fa)return _0x55a567;if(_0x4e03fa['datas'+'et']['api'])return _0x4e03fa['api'];try{return _0x16a2b0[_0x2837f8(0x4aa)](_0x248a54,_0x4e03fa);}catch(_0x335bee){return _0x4e03fa[_0x2837f8(0x56a)+'et']['api']='1',_0x4e03fa['api']=_0x55a567,console[_0x2837f8(0xb3d)](_0x2837f8(0x583)+_0x2837f8(0xda4)+'\x20pane'+_0x2837f8(0x762)+'abled',_0x16a2b0[_0x2837f8(0x411)](_0x2837f8(0x7a6)+':',_0x39f871),_0x335bee),_0x55a567;}}function _0x248a54(_0x221c7b){var _0x4a2cc9=_0xe93fad,_0x690ec={'MnxyG':_0x16a2b0[_0x4a2cc9(0x59d)],'epVKR':'#150c'+'1d','SZoLz':function(_0x4aa206,_0x596caf,_0x2cf422){return _0x4aa206(_0x596caf,_0x2cf422);},'OJLNm':function(_0x362a28,_0x510cf6){return _0x362a28(_0x510cf6);},'oEIAk':_0x4a2cc9(0xd79)+_0x4a2cc9(0x224),'cXoUj':_0x16a2b0['MXwyp'],'BJqtC':_0x4a2cc9(0x1b2)+'f5','fbOkg':function(_0x5d8aac){return _0x5d8aac();},'JjmvT':_0x16a2b0[_0x4a2cc9(0xc9c)],'jbpKq':_0x16a2b0[_0x4a2cc9(0xa77)],'nVGiz':_0x16a2b0['dRwMl'],'XKZpk':_0x4a2cc9(0xb32),'mZvZk':_0x16a2b0[_0x4a2cc9(0x524)],'jusNd':function(_0x435294,_0x2572db,_0x35e047,_0x187d9a){return _0x435294(_0x2572db,_0x35e047,_0x187d9a);},'niFwp':function(_0x4d75ab,_0x47da48){return _0x4d75ab+_0x47da48;}};_0x221c7b['style'][_0x4a2cc9(0x82b)+'xt']=_0x16a2b0['Phgml'](_0x16a2b0[_0x4a2cc9(0xe3e)](_0x4a2cc9(0x9ad)+_0x4a2cc9(0x6f7)+_0x4a2cc9(0x2f3)+_0x4a2cc9(0xcff)+_0x4a2cc9(0x992)+'top:1'+_0x4a2cc9(0x1f3)+'-inde'+_0x4a2cc9(0x230)+'74830'+'00;ma'+'x-wid'+_0x4a2cc9(0x330)+'n(52v'+_0x4a2cc9(0xb3e)+_0x4a2cc9(0x3f2)+_0x4a2cc9(0x328)+_0x4a2cc9(0xc2b)+_0x4a2cc9(0x8e4)+('backg'+'round'+':#150'+_0x4a2cc9(0xb2c)+_0x4a2cc9(0x904)+_0x4a2cc9(0x1b2)+_0x4a2cc9(0x591)+_0x4a2cc9(0x54c)+_0x4a2cc9(0x5c9)+_0x4a2cc9(0x83d)+'rgba('+'255,1'+_0x4a2cc9(0x965)+_0x4a2cc9(0xb7c)+';bord'+'er-ra'+'dius:'+'14px;'),_0x16a2b0[_0x4a2cc9(0xc14)]),'displ'+_0x4a2cc9(0xd0e)+_0x4a2cc9(0x5b7)+'ex-di'+_0x4a2cc9(0x247)+'on:co'+'lumn;'+_0x4a2cc9(0xad5)+_0x4a2cc9(0x2bd)+_0x4a2cc9(0x9e7)+';'),_0x221c7b['inner'+'HTML']=_0x16a2b0['Sgolc'](_0x16a2b0[_0x4a2cc9(0x696)](_0x16a2b0[_0x4a2cc9(0x7fd)](_0x16a2b0[_0x4a2cc9(0x487)](_0x16a2b0['kXiyH'](_0x16a2b0['BsNIf'](_0x16a2b0[_0x4a2cc9(0x487)](_0x16a2b0['vlvtn'](_0x16a2b0[_0x4a2cc9(0x7ba)](_0x16a2b0['YZUwp'](_0x16a2b0[_0x4a2cc9(0x2f2)](_0x16a2b0['OWhSp'],_0x4a2cc9(0x40a)+'yle=\x22'+'color'+':')+_0x39f871,'\x22>sak'+_0x4a2cc9(0x24b)+'\x20skil'+_0x4a2cc9(0x23a)+'</b>')+_0x16a2b0[_0x4a2cc9(0x875)],'<span'+'\x20id=\x22'+'sw2-s'+_0x4a2cc9(0x1a8)+'\x22\x20sty'+'le=\x22c'+'olor:'+_0x4a2cc9(0x7be)+'c9\x22>w'+_0x4a2cc9(0x1b9)+'g\x20for'+_0x4a2cc9(0xc8e)+_0x4a2cc9(0xd80)+'e…</s'+'pan>')+('<butt'+'on\x20id'+_0x4a2cc9(0x1ff)+_0x4a2cc9(0x47f)+_0x4a2cc9(0x3d4)+_0x4a2cc9(0x3aa)+_0x4a2cc9(0x3dc)+'y:non'+_0x4a2cc9(0xc57)+_0x4a2cc9(0x807)+_0x4a2cc9(0xd81)+'uto;b'+'ackgr'+_0x4a2cc9(0x600))+_0x39f871,_0x4a2cc9(0xc67)+_0x4a2cc9(0x7d9)+'color'+':#2a0'+_0x4a2cc9(0xcb3)+_0x4a2cc9(0x923)+_0x4a2cc9(0x654)+_0x4a2cc9(0xcec)+_0x4a2cc9(0x563)+_0x4a2cc9(0xdf1)+'4px\x201'+_0x4a2cc9(0x8b8)+'ont-w'+'eight'+_0x4a2cc9(0x575)+'curso'+'r:poi'+_0x4a2cc9(0x50f)+_0x4a2cc9(0xb69)+_0x4a2cc9(0x541)+'N</bu'+_0x4a2cc9(0x208)),_0x16a2b0[_0x4a2cc9(0x852)])+('<butt'+'on\x20id'+_0x4a2cc9(0x1ff)+_0x4a2cc9(0x959)+_0x4a2cc9(0x291)+_0x4a2cc9(0x97f)+_0x4a2cc9(0xa54)+_0x4a2cc9(0xe48)+'nspar'+_0x4a2cc9(0x6aa)+_0x4a2cc9(0x923)+_0x4a2cc9(0x402)+_0x4a2cc9(0xb04)+'\x20rgba'+'(255,'+_0x4a2cc9(0xbf8)+_0x4a2cc9(0xbee)+_0x4a2cc9(0x95d)+'or:#f'+_0x4a2cc9(0x866)+_0x4a2cc9(0xc67)+_0x4a2cc9(0xa83)+_0x4a2cc9(0x53a)+_0x4a2cc9(0xa60)+_0x4a2cc9(0x6bc)+'g:4px'+'\x208px;'+_0x4a2cc9(0x90c)+_0x4a2cc9(0x641)+'nter;'+'\x22>x</'+'butto'+'n>'),_0x16a2b0[_0x4a2cc9(0x431)]),_0x16a2b0[_0x4a2cc9(0x636)]),_0x4a2cc9(0x58a)+'style'+'=\x22pad'+'ding:'+_0x4a2cc9(0x72e)+'2px;b'+_0x4a2cc9(0x923)+_0x4a2cc9(0x1c2)+'om:1p'+'x\x20sol'+_0x4a2cc9(0x3ce)+_0x4a2cc9(0xc41)+_0x4a2cc9(0x996)+_0x4a2cc9(0x432)+_0x4a2cc9(0xacd)+_0x4a2cc9(0x957)+_0x4a2cc9(0xd0e)+_0x4a2cc9(0x49d)+_0x4a2cc9(0xe1f)+';alig'+_0x4a2cc9(0xacf)+_0x4a2cc9(0x648)+_0x4a2cc9(0x50f)+'flex:'+_0x4a2cc9(0x1d1)+_0x4a2cc9(0xaac)+_0x4a2cc9(0x7c2)+_0x4a2cc9(0xa59)+_0x4a2cc9(0xa8c)+'>'),_0x16a2b0['aGBVJ'])+(_0x4a2cc9(0x72d)+_0x4a2cc9(0x1e2)+'\x22sw2-'+'facto'+_0x4a2cc9(0x1dd)+_0x4a2cc9(0x4bf)+'ange\x22'+_0x4a2cc9(0x671)+'\x221\x22\x20m'+_0x4a2cc9(0xac8)+'\x22\x20ste'+_0x4a2cc9(0x379)+_0x4a2cc9(0x474)+_0x4a2cc9(0x8ab)+'1\x22\x20st'+_0x4a2cc9(0x9f1)+'width'+_0x4a2cc9(0x4d8)+_0x4a2cc9(0x457)+_0x4a2cc9(0x4ae)+'olor:'),_0x39f871)+_0x4a2cc9(0x350)+_0x16a2b0['aDJgJ']+('<butt'+'on\x20id'+_0x4a2cc9(0x1ff)+'-snap'+_0x4a2cc9(0x3d4)+_0x4a2cc9(0x3bb)+_0x4a2cc9(0xd0f)+'ound:'+'trans'+_0x4a2cc9(0xe1b)+'t;bor'+'der:1'+_0x4a2cc9(0xe44)+'lid\x20r'+_0x4a2cc9(0x219)+_0x4a2cc9(0xb78)+_0x4a2cc9(0x63f)+',.4);'+_0x4a2cc9(0x7a6)+':#f7e'+_0x4a2cc9(0x8f3)+'order'+_0x4a2cc9(0x654)+'us:7p'+_0x4a2cc9(0x563)+'ding:'+_0x4a2cc9(0x7a7)+_0x4a2cc9(0x480)+_0x4a2cc9(0x8b5)+_0x4a2cc9(0x94d)+_0x4a2cc9(0x825)+'Snaps'+'hot\x20('+'F9)</'+'butto'+'n>')+('<span'+_0x4a2cc9(0x874)+_0x4a2cc9(0x994)+_0x4a2cc9(0x9d7)+'style'+_0x4a2cc9(0x37b)+_0x4a2cc9(0xa5f)+_0x4a2cc9(0x260)+_0x4a2cc9(0x71b)+'twice'+'\x20whil'+'e\x20wal'+'king\x20'+_0x4a2cc9(0x22a)+'intin'+_0x4a2cc9(0x50c)+'umpin'+_0x4a2cc9(0xccc)+_0x4a2cc9(0xcc5)+'ich\x20f'+_0x4a2cc9(0xde6)+_0x4a2cc9(0x80b)+'ich.<'+_0x4a2cc9(0x3c8)+'>')+(_0x4a2cc9(0xb43)+'>'),_0x16a2b0[_0x4a2cc9(0x292)])+_0x16a2b0['LyUCQ']+('</div'+'>');var _0x58ef29=_0x221c7b['query'+'Selec'+_0x4a2cc9(0x9ab)](_0x16a2b0[_0x4a2cc9(0x510)]),_0x4f46f9=_0x221c7b['query'+_0x4a2cc9(0x97e)+_0x4a2cc9(0x9ab)]('#sw2-'+'build'),_0x4d307a=_0x221c7b['query'+_0x4a2cc9(0x97e)+_0x4a2cc9(0x9ab)](_0x4a2cc9(0x7d6)+'out'),_0x2de667=_0x221c7b[_0x4a2cc9(0x87a)+_0x4a2cc9(0x97e)+_0x4a2cc9(0x9ab)](_0x4a2cc9(0x7d6)+'copy'),_0x44907d=_0x221c7b[_0x4a2cc9(0x87a)+_0x4a2cc9(0x97e)+_0x4a2cc9(0x9ab)]('#sw2-'+'x'),_0x479248=_0x221c7b[_0x4a2cc9(0x87a)+'Selec'+'tor'](_0x4a2cc9(0x7d6)+_0x4a2cc9(0x4da)+'e'),_0xde925f=_0x221c7b['query'+'Selec'+_0x4a2cc9(0x9ab)](_0x16a2b0[_0x4a2cc9(0xd8f)]),_0x3876a9=_0x221c7b[_0x4a2cc9(0x87a)+_0x4a2cc9(0x97e)+_0x4a2cc9(0x9ab)](_0x16a2b0['EgAFr']),_0x117446=_0x221c7b[_0x4a2cc9(0x87a)+'Selec'+'tor'](_0x16a2b0[_0x4a2cc9(0xd3d)]),_0x550a2c=_0x221c7b['query'+'Selec'+_0x4a2cc9(0x9ab)](_0x16a2b0[_0x4a2cc9(0x9fa)]),_0x388baf=_0x221c7b['query'+_0x4a2cc9(0x97e)+_0x4a2cc9(0x9ab)]('#sw2-'+_0x4a2cc9(0xa51)+'rlabe'+'l'),_0x181847=_0x221c7b[_0x4a2cc9(0x87a)+_0x4a2cc9(0x97e)+_0x4a2cc9(0x9ab)](_0x4a2cc9(0x7d6)+'hint'),_0x387aed=null,_0x1dde3b=![];function _0x6d0bb0(){var _0x31dce8=_0x4a2cc9;if(_0xde925f)_0xde925f['style'][_0x31dce8(0x957)+'ay']=_0x1dde3b?'':_0x31dce8(0xaeb);if(_0x479248)_0x479248[_0x31dce8(0x4ff)+_0x31dce8(0x2bf)+'t']=_0x1dde3b?'close':_0x690ec[_0x31dce8(0x853)];_0x221c7b['style']['width']=_0x1dde3b?'min(5'+'2vw,6'+'20px)':_0x31dce8(0xa02),_0x221c7b[_0x31dce8(0x8d9)][_0x31dce8(0x2c7)+'round']=_0x1dde3b?_0x690ec[_0x31dce8(0x428)]:'rgba('+_0x31dce8(0x6f5)+_0x31dce8(0xbdc)+'9)';}if(_0x479248)_0x479248[_0x4a2cc9(0x317)+'ck']=function(){_0x1dde3b=!_0x1dde3b,_0x6d0bb0();};_0x16a2b0['cMDFf'](_0x6d0bb0);if(_0x44907d)_0x44907d[_0x4a2cc9(0x317)+'ck']=function(){_0x29f850(!![]);};if(_0x3876a9)_0x3876a9['oncli'+'ck']=function(){var _0x32935f=_0x4a2cc9;_0x16a2b0[_0x32935f(0x630)](_0x39dd68,_0x16a2b0[_0x32935f(0x6bb)]);};var _0x241970=![];function _0x46dafa(){var _0x4dda01=_0x4a2cc9;_0x690ec['SZoLz'](_0x39dd68,_0x4dda01(0x69f),{'on':_0x241970,'factor':_0x690ec[_0x4dda01(0x545)](parseFloat,_0x550a2c[_0x4dda01(0x61e)])||-0x3*0x948+0x397*0x3+0x88a*0x2});}if(_0x117446)_0x117446['oncli'+'ck']=function(){var _0x4b2178=_0x4a2cc9;_0x241970=!_0x241970,_0x117446[_0x4b2178(0x4ff)+_0x4b2178(0x2bf)+'t']=_0x241970?_0x4b2178(0xd79)+_0x4b2178(0x845):_0x690ec[_0x4b2178(0xd32)],_0x117446[_0x4b2178(0x8d9)][_0x4b2178(0x2c7)+_0x4b2178(0x921)]=_0x241970?_0x39f871:'trans'+_0x4b2178(0xe1b)+'t',_0x117446[_0x4b2178(0x8d9)][_0x4b2178(0x7a6)]=_0x241970?_0x690ec[_0x4b2178(0x2ef)]:_0x690ec[_0x4b2178(0x4d6)],_0x690ec[_0x4b2178(0x56c)](_0x46dafa);};if(_0x550a2c)_0x550a2c[_0x4a2cc9(0x244)+'ut']=function(){var _0x34ace1=_0x4a2cc9;if(_0x388baf)_0x388baf['textC'+_0x34ace1(0x2bf)+'t']=(parseFloat(_0x550a2c['value'])||-0x23b0+-0x1*-0x7a5+0x1c0c)['toFix'+'ed'](0xf1a*-0x2+0x1f9d+-0x168)+'x';_0x46dafa();};if(_0x2de667)_0x2de667[_0x4a2cc9(0x317)+'ck']=function(){var _0x36d45d=_0x4a2cc9,_0x77914a={'txwSx':_0x16a2b0['rnYhI'],'RHvvb':function(_0x51ceab,_0x482e30){return _0x51ceab===_0x482e30;},'JcSQt':function(_0x44ec8e,_0x2e42a1){return _0x16a2b0['MJywr'](_0x44ec8e,_0x2e42a1);},'CTEOe':function(_0x345a8c,_0x43092f){return _0x345a8c&_0x43092f;},'xVfJp':function(_0x1f8db1,_0x9cf323,_0x76853b,_0x4585e5){return _0x1f8db1(_0x9cf323,_0x76853b,_0x4585e5);},'zmGvY':'obfI'},_0x3287e2=_0x16a2b0[_0x36d45d(0x2f2)](_0x16a2b0[_0x36d45d(0x1f0)](_0x5f1817+'\x0a'+(_0x387aed?JSON[_0x36d45d(0x453)+_0x36d45d(0x731)](_0x387aed,null,-0x1346+0x2167+-0xe20):''),'\x0a'),_0x1db09e),_0x1582c0=function(){var _0x314ab4=_0x36d45d;if(_0x2de667)_0x2de667[_0x314ab4(0x4ff)+'onten'+'t']=_0x314ab4(0x9ed)+'d';};if(navigator[_0x36d45d(0xbc6)+_0x36d45d(0x478)]&&navigator[_0x36d45d(0xbc6)+_0x36d45d(0x478)][_0x36d45d(0x9b4)+_0x36d45d(0x4f2)]){if(_0x16a2b0[_0x36d45d(0xbe7)]('kuaDu',_0x16a2b0['ozPyQ']))navigator[_0x36d45d(0xbc6)+'oard']['write'+'Text'](_0x3287e2)[_0x36d45d(0xe3d)](_0x1582c0,function(){_0x690ec['fbOkg'](_0x15198c);});else{var _0x4b5d45=_0x77914a[_0x36d45d(0x43d)]['split']('|'),_0xbd297e=-0xe8+0x703*-0x3+0x15f1;while(!![]){switch(_0x4b5d45[_0xbd297e++]){case'0':var _0x1c99fb=new _0x4e3526(_0x1f6ab6[_0x36d45d(0xa76)+'r'],_0x1f6ab6['byteO'+'ffset'],_0x1f6ab6[_0x36d45d(0x88c)+'ength']);continue;case'1':return{'keyAtOffset0':_0x1ad0fa,'hidden':_0x26f3e6,'inited':_0x1dede6,'fake':_0x42d111,'act':_0x4a7a90,'hex':_0x5d6e9f(_0x1f6ab6),'alt':_0x77914a[_0x36d45d(0x8aa)](_0x47f67c,'obfI')?_0x26f3e6^_0x77914a['JcSQt'](_0x42d111,0x1*0x1e07+-0x11c2+-0x3*0x417):null};case'2':var _0x4a7a90=_0x77914a[_0x36d45d(0xc43)](_0x1c99fb['getUi'+'nt8'](_0x42fbf2[_0x36d45d(0x93e)+'e']),-0x4d*-0x42+0x185e+0xebd*-0x3);continue;case'3':if(!_0x1f6ab6)return null;continue;case'4':var _0x1f6ab6=_0x77914a[_0x36d45d(0x81f)](_0x28b6fb,_0x5b6f79,_0x1bbb8a,_0x42fbf2['size']);continue;case'5':var _0x26f3e6=_0x1c99fb[_0x36d45d(0xd7c)+'t32'](_0x42fbf2['hidde'+'n'],!![]);continue;case'6':var _0x1dede6=_0x77914a[_0x36d45d(0xc43)](_0x1c99fb['getUi'+'nt8'](_0x42fbf2[_0x36d45d(0x486)+'d']),0x2b*0x41+0x119*-0x9+0x1*-0x109);continue;case'7':var _0x42fbf2=_0x5e688c[_0x5b6505];continue;case'8':var _0x42d111=_0x1f7e08==='obfF'?_0x1c99fb[_0x36d45d(0x717)+_0x36d45d(0x32a)](_0x42fbf2[_0x36d45d(0x551)],!![]):_0xd8265f===_0x77914a[_0x36d45d(0x1e3)]?_0x1c99fb[_0x36d45d(0xd7c)+_0x36d45d(0x310)](_0x42fbf2[_0x36d45d(0x551)],!![]):_0x1c99fb[_0x36d45d(0xe06)+'nt8'](_0x42fbf2['fake']);continue;case'9':var _0x1ad0fa=_0x1c99fb[_0x36d45d(0xd7c)+_0x36d45d(0x310)](_0x42fbf2[_0x36d45d(0x203)],!![]);continue;}break;}}}else _0x15198c();function _0x15198c(){var _0x116d07=_0x36d45d,_0x37e797=document[_0x116d07(0x2a2)+_0x116d07(0xc69)+_0x116d07(0xcb8)](_0x690ec[_0x116d07(0x2c0)]);_0x37e797[_0x116d07(0x61e)]=_0x3287e2;if(!document['body'])return;document[_0x116d07(0xbc1)][_0x116d07(0x28a)+'dChil'+'d'](_0x37e797),_0x37e797['selec'+'t']();try{'gKDfk'===_0x690ec[_0x116d07(0x40e)]?(_0x2016b3['remov'+_0x116d07(0x5f1)](_0xef0b7d),_0x5e556c=!![]):(document[_0x116d07(0x7a0)+_0x116d07(0x70e)+'d'](_0x690ec[_0x116d07(0xaab)]),_0x1582c0());}catch(_0x3eb081){}_0x37e797[_0x116d07(0x3b8)+'e']();}};_0x16a2b0['jvqNB'](setTimeout,function(){var _0x599398=_0x4a2cc9,_0x109214=_0x16a2b0['dVkkQ'][_0x599398(0x388)]('|'),_0x2a6627=-0x407*-0x7+-0x1b81+-0xb0;while(!![]){switch(_0x109214[_0x2a6627++]){case'0':if(_0x16a2b0[_0x599398(0x579)](!_0x58ef29,!_0x4d307a))return;continue;case'1':if(_0x387aed)return;continue;case'2':_0x4d307a['textC'+_0x599398(0x2bf)+'t']=_0x599398(0x77b)+_0x599398(0x69e)+_0x599398(0x47d)+'never'+'\x20post'+_0x599398(0x283)+_0x599398(0x651)+_0x599398(0x881)+'ort.\x0a'+'\x0a'+(_0x599398(0x5bc)+'panel'+_0x599398(0x442)+'es\x20th'+_0x599398(0xdf4)+_0x599398(0x72f)+'pt\x20IS'+_0x599398(0xd83)+_0x599398(0x8ca)+'\x20and\x20'+'runni'+_0x599398(0xe03)+'\x20the\x20'+_0x599398(0x7b9)+_0x599398(0x7ee))+('so\x20th'+_0x599398(0x9db)+'ainin'+_0x599398(0x8ff)+_0x599398(0x64b)+_0x599398(0x22e)+'\x0a\x0a')+(_0x599398(0x53d)+_0x599398(0x7ea)+'rmonk'+_0x599398(0x75b)+'\x20not\x20'+_0x599398(0x22d)+_0x599398(0x5f9)+_0x599398(0xb59)+'the\x20c'+_0x599398(0x32b)+'origi'+_0x599398(0x2ca)+'ame.\x0a')+_0x16a2b0[_0x599398(0x2e5)]+(_0x599398(0x6ba)+_0x599398(0x7d8)+_0x599398(0x70f)+_0x599398(0xdc6)+'llwar'+_0x599398(0xb86)+_0x599398(0x682)+_0x599398(0xcc6)+_0x599398(0x7f8)+_0x599398(0x2ac)+_0x599398(0x2da)+'ipt\x20a'+'re\x0a')+('\x20\x20\x20\x20\x20'+_0x599398(0x84d)+'lled\x20'+_0x599398(0xdd0)+'\x20copi'+_0x599398(0x341)+'\x20UWMK'+'\x20both'+_0x599398(0xb6a)+_0x599398(0xc94)+_0x599398(0x21f)+'bly.i'+'nstan'+_0x599398(0xd35)+_0x599398(0x2b6))+(_0x599398(0xd63)+'d\x20the'+'\x20game'+_0x599398(0x836)+'\x20once'+_0x599398(0x9f8)+_0x599398(0x684)+'\x20this'+'\x20pane'+_0x599398(0x41f)+'in.');continue;case'3':_0x58ef29['style']['color']=_0x599398(0xc27)+'c7';continue;case'4':_0x58ef29['textC'+_0x599398(0x2bf)+'t']=_0x16a2b0[_0x599398(0xe43)];continue;}break;}},-0x112d8+0x1281c*-0x1+-0xc7*-0x40c);var _0x48cf72={'set':function(_0x4971ad){var _0x4a7dc6=_0x4a2cc9,_0x1530f8={'locjc':function(_0x3ca9ba,_0x345891){return _0x3ca9ba+_0x345891;},'XdEfT':_0x4a7dc6(0x539)+'s','ulxaI':_0x4a7dc6(0x9ad)+_0x4a7dc6(0x6f7)+_0x4a7dc6(0x2f3)+'left:'+'0;top'+_0x4a7dc6(0xc7f)+_0x4a7dc6(0xd12)+':2147'+_0x4a7dc6(0x8ba)+'5;poi'+_0x4a7dc6(0x308)+_0x4a7dc6(0xda1)+_0x4a7dc6(0x685)+'e;','GhuFK':function(_0x3c7701,_0x1f7008){var _0x39252e=_0x4a7dc6;return _0x16a2b0[_0x39252e(0x1f0)](_0x3c7701,_0x1f7008);}};if(_0x16a2b0[_0x4a7dc6(0xc82)]!==_0x16a2b0[_0x4a7dc6(0x3ac)]){_0x387aed=_0x4971ad;if(_0x2de667)_0x2de667['style'][_0x4a7dc6(0x957)+'ay']='';if(_0x4f46f9){if('spOcV'===_0x4a7dc6(0xc6d)){var _0x4189a2=(_0x4a7dc6(0x94e)+_0x4a7dc6(0x444))[_0x4a7dc6(0x388)]('|'),_0x3c359f=0x8*0x425+-0xd6a*0x1+-0x13be*0x1;while(!![]){switch(_0x4189a2[_0x3c359f++]){case'0':_0x4f46f9[_0x4a7dc6(0x4ff)+_0x4a7dc6(0x2bf)+'t']='v'+(_0x4971ad[_0x4a7dc6(0xd87)+'on']||'?');continue;case'1':var _0x418b66=_0x412872;continue;case'2':_0x4f46f9['style'][_0x4a7dc6(0x9fb)+'rColo'+'r']=_0x5ae679===_0x418b66?_0x16a2b0['vxcXv']:_0x16a2b0['efxPW'];continue;case'3':_0x4f46f9['style'][_0x4a7dc6(0x7a6)]=_0x16a2b0[_0x4a7dc6(0x773)](_0x5ae679,_0x418b66)?_0x39f871:_0x16a2b0[_0x4a7dc6(0xa1f)];continue;case'4':var _0x5ae679=_0x4971ad[_0x4a7dc6(0xd87)+'on']||'';continue;}break;}}else{if(_0x317181)_0xac71a9[_0x4a7dc6(0x4ff)+_0x4a7dc6(0x2bf)+'t']=_0x1530f8[_0x4a7dc6(0xd76)]((_0x1c1a7d(_0x28486b[_0x4a7dc6(0x61e)])||0x13da+-0x1546+0x16d)['toFix'+'ed'](0x65*-0x3b+-0x1c5c+0x33a4),'x');_0x35099f();}}var _0x18fc49=_0x4971ad['insta'+_0x4a7dc6(0x4fc)]&&_0x4971ad[_0x4a7dc6(0x84d)+_0x4a7dc6(0x4fc)][_0x4a7dc6(0xb1f)+_0x4a7dc6(0xc4b)+_0x4a7dc6(0x313)],_0x353dab=Math['round']((_0x4971ad[_0x4a7dc6(0x7aa)+_0x4a7dc6(0x7e0)]||-0x1*0x83+0x198b+0x164*-0x12)/(-0x2451+-0xeae+0xf*0x3a9));if(_0x58ef29){if(_0x16a2b0['Edtyr'](_0x16a2b0[_0x4a7dc6(0xd8e)],'BZMQZ')){var _0x1f6180,_0xb96aa9;if(_0x18fc49&&_0x4971ad[_0x4a7dc6(0xab4)+'y']&&_0x4971ad[_0x4a7dc6(0xab4)+'y'][_0x4a7dc6(0xb1f)+_0x4a7dc6(0xc4b)+_0x4a7dc6(0x313)])_0x1f6180=_0x16a2b0[_0x4a7dc6(0x270)](_0x16a2b0['woQUH']+Object['keys'](_0x4971ad[_0x4a7dc6(0x84d)+_0x4a7dc6(0x4fc)])[_0x4a7dc6(0x516)+'h'],'\x20obje'+_0x4a7dc6(0x93f)+'\x20')+_0x353dab+'s',_0xb96aa9=_0x4a7dc6(0x39f)+'a8';else{if(_0x16a2b0[_0x4a7dc6(0x62f)](_0x4971ad[_0x4a7dc6(0x4b5)+_0x4a7dc6(0x4b8)+'ed'],0x1*0x1f33+0x247*0x3+-0x2608))_0x1f6180=_0x16a2b0[_0x4a7dc6(0x1f0)](_0x4a7dc6(0x4b5)+_0x4a7dc6(0x98c)+_0x4a7dc6(0x96c),_0x353dab)+'s',_0xb96aa9=_0x16a2b0[_0x4a7dc6(0x56f)];else{if(_0x4971ad['scrip'+_0x4a7dc6(0x1d2)]){if(_0x16a2b0['YlBWx'](_0x16a2b0[_0x4a7dc6(0x7a5)],_0x16a2b0['kmIet'])){if(!_0x5466a6['body']||!_0xc2026[_0x4a7dc6(0xbc1)]['appen'+_0x4a7dc6(0xe08)+'d'])return null;var _0x4550ac=_0x54976f[_0x4a7dc6(0x2a2)+_0x4a7dc6(0xc69)+_0x4a7dc6(0xcb8)](_0x1530f8['XdEfT']);return _0x4550ac['id']=_0x4a7dc6(0x70f)+'a-box'+'es',_0x4550ac['style'][_0x4a7dc6(0x82b)+'xt']=_0x1530f8['ulxaI'],_0x51fa5e[_0x4a7dc6(0xbc1)][_0x4a7dc6(0x28a)+_0x4a7dc6(0xe08)+'d'](_0x4550ac),_0x1817c9={'cv':_0x4550ac},_0x4c5342;}else _0x1f6180=_0x4a7dc6(0xdfd)+_0x4a7dc6(0x382)+_0x4a7dc6(0x54e)+'·\x20'+_0x353dab+'s',_0xb96aa9='#ffd4'+'8a';}else _0x1f6180=(_0x4971ad[_0x4a7dc6(0xcc8)]&&_0x4971ad['arm']['ok']?'armed'+'\x20·\x20':_0x4a7dc6(0x92b)+'g\x20·\x20')+_0x353dab+'s',_0xb96aa9=_0x16a2b0['PzrYe'];}}_0x58ef29['textC'+'onten'+'t']=_0x1f6180,_0x58ef29['style']['color']=_0xb96aa9;}else _0x2db830[_0x4a7dc6(0x539)+'s']={'w':_0x1c11dc&&_0x16703c['cv']?_0x501dbd['cv']['width']:-0x1f86+-0xbf6+0x2b7c,'h':_0x310e69&&_0x21dd04['cv']?_0x1f86f6['cv']['heigh'+'t']:-0xf9d*-0x1+0x22e8*0x1+-0x59d*0x9,'innerW':_0x30ced6[_0x4a7dc6(0xcf9)+_0x4a7dc6(0x68b)],'innerH':_0x69307a[_0x4a7dc6(0xcf9)+_0x4a7dc6(0xc21)+'t'],'dpr':_0x1cd226[_0x4a7dc6(0x80a)+_0x4a7dc6(0xa9b)+'lRati'+'o']||0x1592+-0x1545+-0x4c};}_0x181847&&(_0x181847['textC'+'onten'+'t']=_0x4971ad['diff']&&_0x4971ad['diff'][_0x4a7dc6(0x516)+'h']?_0x4a7dc6(0xa32)+_0x4a7dc6(0xd78)+_0x4a7dc6(0x3fb)+_0x4a7dc6(0x5b3)+_0x4971ad[_0x4a7dc6(0x6c3)]['join'](',\x20'):_0x4a7dc6(0x3d3)+'ice\x20w'+_0x4a7dc6(0x47a)+_0x4a7dc6(0x57d)+_0x4a7dc6(0x91c)+_0x4a7dc6(0x933)+_0x4a7dc6(0x5f9)+_0x4a7dc6(0x1c5)+_0x4a7dc6(0x553)+'marks'+_0x4a7dc6(0x4ee)+_0x4a7dc6(0x59c)+_0x4a7dc6(0xdb3)+'\x20whic'+'h.');if(_0x4971ad['speed']&&_0x117446){var _0x37e23e=(_0x4a7dc6(0xc3c)+'|2|0')[_0x4a7dc6(0x388)]('|'),_0x214be5=0x2478+-0x25f7+0x17f;while(!![]){switch(_0x37e23e[_0x214be5++]){case'0':_0x388baf&&_0x4971ad[_0x4a7dc6(0x69f)]['facto'+'r']&&(_0x388baf[_0x4a7dc6(0x4ff)+_0x4a7dc6(0x2bf)+'t']=Number(_0x4971ad[_0x4a7dc6(0x69f)]['facto'+'r'])[_0x4a7dc6(0xb65)+'ed'](0x17f*0x18+-0x12a0*0x1+-0x1*0x1147)+'x');continue;case'1':_0x117446[_0x4a7dc6(0x8d9)][_0x4a7dc6(0x2c7)+_0x4a7dc6(0x921)]=_0x241970?_0x39f871:_0x16a2b0[_0x4a7dc6(0x667)];continue;case'2':_0x117446[_0x4a7dc6(0x8d9)][_0x4a7dc6(0x7a6)]=_0x241970?_0x16a2b0['MXwyp']:_0x16a2b0[_0x4a7dc6(0x550)];continue;case'3':_0x241970=!!_0x4971ad[_0x4a7dc6(0x69f)]['on'];continue;case'4':_0x117446['textC'+_0x4a7dc6(0x2bf)+'t']=_0x241970?_0x16a2b0['hUorX']:_0x4a7dc6(0xd79)+_0x4a7dc6(0x224);continue;}break;}}if(_0x4d307a)try{_0x4d307a[_0x4a7dc6(0x4ff)+'onten'+'t']=_0x36cd6a(_0x4971ad);}catch(_0x1e496b){if(_0x16a2b0['IBenq']===_0x16a2b0[_0x4a7dc6(0x774)]){var _0x286211={'tcTxD':function(_0x4ae43f,_0x541965){return _0x1530f8['locjc'](_0x4ae43f,_0x541965);},'WswTo':function(_0x2f4e85,_0x2deea3){return _0x1530f8['locjc'](_0x2f4e85,_0x2deea3);}},_0x4ea87f=_0x3ad896(_0x4a7dc6(0xb32),'sk-no'+'te',_0x1530f8['GhuFK'](_0x4a7dc6(0xb91)+'ed:\x20',_0x33c25e[_0x4a7dc6(0x616)](-0x1f32+-0x86*-0x24+-0x33*-0x3e,0xa3b+0x1179*0x1+-0x8*0x376)[_0x4a7dc6(0x357)](function(_0x429d30){var _0x19877c=_0x4a7dc6;return _0x286211[_0x19877c(0x496)](_0x286211[_0x19877c(0x741)]('0x',_0x429d30['o']<-0xc5b+0x2356+0x16fb*-0x1?'?':_0x429d30['o'][_0x19877c(0x5f3)+'ing'](0x6ca+-0xaad+-0x151*-0x3))+'\x20(',_0x429d30['why'])+')';})['join']('\x20\x20')));_0x4e0d48[_0x4a7dc6(0xbc1)][_0x4a7dc6(0x28a)+'dChil'+'d'](_0x4ea87f);}else _0x4d307a['textC'+'onten'+'t']=JSON[_0x4a7dc6(0x453)+'gify'](_0x4971ad,null,0x632+0x8e9+0x78d*-0x2);}console[_0x4a7dc6(0xe34)](_0x4a7dc6(0x583)+'kura]'+_0x4a7dc6(0xe1c)+_0x4a7dc6(0x857)+_0x4a7dc6(0xd96)+'rt',_0x16a2b0['fORiZ']+_0x39f871+(_0x4a7dc6(0x7d3)+_0x4a7dc6(0xd25)+_0x4a7dc6(0x674)+'0'),_0x4971ad),console['log'](_0x16a2b0[_0x4a7dc6(0x4e4)](_0x5f1817+'\x0a'+JSON['strin'+'gify'](_0x4971ad,null,0x19e6+-0xfb8+-0xa2d),'\x0a')+_0x1db09e);}else{var _0x2dd662=_0x690ec[_0x4a7dc6(0x254)](_0x443b25,_0x690ec[_0x4a7dc6(0x4e6)],_0x690ec[_0x4a7dc6(0x7c7)]),_0x561f66=_0x690ec['jusNd'](_0x2ad721,_0x690ec['XKZpk'],_0x4a7dc6(0xc38)+_0x4a7dc6(0x3d0),_0x690ec[_0x4a7dc6(0x7d4)](_0x781c9f,_0x33335e?'<span'+_0x4a7dc6(0xb3c)+_0x4a7dc6(0xb7b)+_0x4a7dc6(0x848)+'\x27>'+_0x3eba15+(_0x4a7dc6(0x9d4)+'n>'):''));return _0x2dd662[_0x4a7dc6(0x28a)+_0x4a7dc6(0xe08)+'d'](_0x561f66),_0x2dd662;}}};return _0x221c7b[_0x4a2cc9(0x56a)+'et'][_0x4a2cc9(0xab6)]='1',_0x221c7b[_0x4a2cc9(0xab6)]=_0x48cf72,_0x48cf72;}function _0x36cd6a(_0x4ee1b7){var _0x1c5176=_0xe93fad,_0x201d35=[];_0x201d35['push'](_0x16a2b0['uRZRu'](_0x16a2b0[_0x1c5176(0x4e4)](_0x16a2b0['vBaSj'](_0x16a2b0['tseCK'],_0x4ee1b7['host']||'?'),_0x16a2b0['zwmcx']),Math[_0x1c5176(0x921)]((_0x4ee1b7['elaps'+'edMs']||-0xfca+0x195+0xe35*0x1)/(0x1f72+0x7d3*-0x2+-0x5f2*0x2)))+'s)'),_0x201d35[_0x1c5176(0x8f2)](_0x16a2b0['stiKU'](_0x16a2b0['jLOGf'](_0x16a2b0[_0x1c5176(0x922)](_0x16a2b0[_0x1c5176(0x288)],_0x4ee1b7[_0x1c5176(0x395)]?_0x16a2b0[_0x1c5176(0x44f)]:'no')+('\x20\x20\x20co'+_0x1c5176(0x908)+'\x20'),_0x4ee1b7[_0x1c5176(0x3a2)+'pCont'+_0x1c5176(0xd67)]?_0x16a2b0[_0x1c5176(0x44f)]:'no'),_0x1c5176(0xca2)+_0x1c5176(0xa5d))+(_0x16a2b0[_0x1c5176(0x9a1)](_0x4ee1b7[_0x1c5176(0x895)+_0x1c5176(0xd7e)],null)?_0x4ee1b7[_0x1c5176(0x895)+'ount']:'?')),_0x201d35[_0x1c5176(0x8f2)](_0x16a2b0[_0x1c5176(0x9e9)](_0x1c5176(0x4b5)+'\x20\x20\x20\x20'+_0x4ee1b7['hooks'+'Appli'+'ed']+'/',_0x4ee1b7[_0x1c5176(0x4b5)+_0x1c5176(0x5b6)])+_0x16a2b0[_0x1c5176(0x33f)]),_0x201d35[_0x1c5176(0x8f2)]('');var _0x1f6b8b=_0x4ee1b7[_0x1c5176(0x84d)+_0x1c5176(0x4fc)]||{},_0x268100=Object[_0x1c5176(0x227)](_0x1f6b8b);if(!_0x268100['lengt'+'h']){if(_0x16a2b0[_0x1c5176(0x647)]!==_0x1c5176(0xaa2))return new _0x20ca1c(_0x325250['buffe'+'r'],_0x1f2621[_0x1c5176(0xca4)+'ffset'],_0x550861['byteL'+_0x1c5176(0xb9e)]);else _0x201d35[_0x1c5176(0x8f2)]('no\x20li'+_0x1c5176(0xe0a)+_0x1c5176(0x272)+_0x1c5176(0x837)+_0x1c5176(0xb06)+_0x1c5176(0xdcf)),_0x201d35[_0x1c5176(0x8f2)](''),_0x201d35[_0x1c5176(0x8f2)](_0x16a2b0['FRqaT']),_0x201d35[_0x1c5176(0x8f2)](_0x1c5176(0x628)+_0x1c5176(0x473)+'ran\x20y'+'et,\x20o'+_0x1c5176(0x9ac)+_0x1c5176(0x40c)+_0x1c5176(0xae7)+_0x1c5176(0x65b)+'not\x20m'+'atch.');}for(var _0x6cb858=-0x1*-0x1154+-0xd*-0x61+-0x1641;_0x16a2b0['Qdgld'](_0x6cb858,_0x268100['lengt'+'h']);_0x6cb858++){var _0xf0090e=_0x268100[_0x6cb858];_0x201d35[_0x1c5176(0x8f2)](_0xf0090e+_0x1c5176(0x606)+_0x1f6b8b[_0xf0090e]);}_0x201d35['push']('');var _0x3bc7fe=_0x4ee1b7['surve'+'y']||{},_0x371291=Object['keys'](_0x3bc7fe);for(var _0x112fe2=0x1a2+0x22df+0x7*-0x537;_0x16a2b0[_0x1c5176(0x958)](_0x112fe2,_0x371291['lengt'+'h']);_0x112fe2++){if(_0x16a2b0['kAWGM']!==_0x16a2b0[_0x1c5176(0x311)]){var _0x3a9f47=_0x371291[_0x112fe2],_0x376c2f=_0x3bc7fe[_0x3a9f47];if(!_0x376c2f||!_0x376c2f[_0x1c5176(0x516)+'h'])continue;_0x201d35[_0x1c5176(0x8f2)](_0x16a2b0[_0x1c5176(0x411)](_0x16a2b0[_0x1c5176(0xa63)](_0x16a2b0['wOsco'](_0x16a2b0['tsjJQ'],_0x3a9f47),'\x20'),new Array(Math['max'](0x4e1*0x1+0x114d+-0x162d,0x1951+-0x95a+-0xfd5-_0x3a9f47['lengt'+'h']))[_0x1c5176(0xa7a)]('─'))),_0x201d35['push']('\x20\x20off'+_0x1c5176(0xb61)+'\x20kind'+_0x1c5176(0x4fd)+'\x20\x20\x20va'+_0x1c5176(0x8da)+_0x1c5176(0x4fd)+_0x1c5176(0x4fd)+_0x1c5176(0x2d0));for(var _0x18b6a8=0xefd*-0x1+-0x1dd7+0x2cd4;_0x18b6a8<_0x376c2f[_0x1c5176(0x516)+'h'];_0x18b6a8++){var _0x2ba2c9=_0x376c2f[_0x18b6a8],_0x5e3c46=typeof _0x2ba2c9['v']==='numbe'+'r'?_0x16a2b0[_0x1c5176(0x8e7)](Math[_0x1c5176(0x921)](_0x2ba2c9['v']*(0x177+-0xc97*0x2+0x1b9f)),0x1*-0x1bc3+0x1436+0xb75*0x1):_0x2ba2c9['v'];_0x201d35[_0x1c5176(0x8f2)](_0x16a2b0['VaVoZ'](_0x16a2b0['yNIkg'](_0x16a2b0['SewXz']('\x20\x20',('0x'+_0x2ba2c9['o']['toStr'+_0x1c5176(0xc36)](-0x45f*0x1+-0xc7*0x1+0x536))['padEn'+'d'](0x813+0x1485+-0x1c90))+'\x20'+_0x2ba2c9['k']['padEn'+'d'](0x1*-0x1b18+0x8f8+0x122b)+'\x20',_0x16a2b0[_0x1c5176(0x7b6)](String,_0x5e3c46)[_0x1c5176(0x815)+'d'](0x1*-0x279+0x24dc+-0x2253)),'\x20')+(_0x2ba2c9[_0x1c5176(0x2d0)]||''));}_0x201d35['push']('');}else{var _0x35b831=_0x16a2b0[_0x1c5176(0x630)](_0x335cb0,_0xabe337[_0x4fa50f][0x1a87*-0x1+0x445*0x7+0xa*-0x56]),_0x56d28d=_0x16a2b0[_0x1c5176(0x483)](_0x1c7c62,_0x1c5176(0x8e2),_0x1c5176(0x72b)+'l');_0x56d28d['style'][_0x1c5176(0x1f6)+_0x1c5176(0x711)]='0',_0x56d28d[_0x1c5176(0x8d9)][_0x1c5176(0xa4f)]='1',_0x56d28d[_0x1c5176(0x8d9)][_0x1c5176(0x468)+_0x1c5176(0x610)]=_0x16a2b0[_0x1c5176(0xdfc)],_0x56d28d[_0x1c5176(0x4ff)+_0x1c5176(0x2bf)+'t']=_0x16a2b0['rrzmp'](_0x3a48e3,_0x260148[_0x108edf][-0x88*-0x46+0x1290+0xb26*-0x5]),_0x56d28d[_0x1c5176(0x56a)+'et']['k']=_0x25b7a3[_0x5976a7][-0x1813+-0x10bb*-0x1+-0xd1*-0x9],_0x35b831[_0x1c5176(0x28a)+_0x1c5176(0xe08)+'d'](_0x56d28d),_0x40c582[_0x1c5176(0xbc1)]['appen'+'dChil'+'d'](_0x35b831),_0x10df6a[_0x1c5176(0xbc1)][_0x1c5176(0xd97)+_0x1c5176(0x73c)]['sp']=_0x56d28d;}}if(_0x4ee1b7[_0x1c5176(0xbd9)+_0x1c5176(0xda8)]&&_0x4ee1b7[_0x1c5176(0xbd9)+_0x1c5176(0xda8)][_0x1c5176(0x516)+'h']){_0x201d35[_0x1c5176(0x8f2)]('warni'+_0x1c5176(0xda8));for(var _0x489673=-0x4f*-0x25+-0x26b*0x2+0x151*-0x5;_0x489673<_0x4ee1b7[_0x1c5176(0xbd9)+_0x1c5176(0xda8)][_0x1c5176(0x516)+'h'];_0x489673++)_0x201d35[_0x1c5176(0x8f2)](_0x16a2b0[_0x1c5176(0x6f4)]+_0x4ee1b7['warni'+'ngs'][_0x489673]);}return _0x201d35[_0x1c5176(0xa7a)]('\x0a');}window['addEv'+_0xe93fad(0x6a2)+_0xe93fad(0xcb1)+'r']('messa'+'ge',function(_0x4e7864){var _0x2d0b9c=_0xe93fad,_0x206902=_0x4e7864['data'];if(!_0x206902||_0x206902['__sak'+'ura']!==_0x1e279d)return;try{if(_0x206902[_0x2d0b9c(0x61f)]===_0x16a2b0[_0x2d0b9c(0x209)]){_0x16a2b0['CpULw'](_0x74b3e4)[_0x2d0b9c(0x409)]({'host':_0x206902[_0x2d0b9c(0x1d3)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x206902[_0x2d0b9c(0x61f)]==='repor'+'t')_0x74b3e4()[_0x2d0b9c(0x409)](_0x206902[_0x2d0b9c(0xada)+'t']);}catch(_0x27b106){console[_0x2d0b9c(0xb3d)]('%c[sa'+_0x2d0b9c(0xda4)+'\x20pane'+'l\x20upd'+_0x2d0b9c(0xe3b)+'ailed','color'+':'+_0x39f871,_0x27b106);}});function _0x287bc6(){var _0x321b3f=_0xe93fad;_0x16a2b0[_0x321b3f(0x6a6)](_0x29f850,!![]);}if(document['body'])_0x287bc6();else document[_0xe93fad(0x557)+_0xe93fad(0x6a2)+'stene'+'r'](_0x16a2b0[_0xe93fad(0xb2b)],_0x287bc6,{'once':!![]});return;}window[_0xe93fad(0x805)+'URA_S'+_0xe93fad(0x46b)]=window[_0xe93fad(0x805)+_0xe93fad(0x50d)+_0xe93fad(0x46b)]||{'at':Date[_0xe93fad(0x5a3)]()};function _0x467987(_0x5c86f7,_0x4dd96a){var _0x24b849=_0xe93fad,_0x418baf={'__sakura':_0x1e279d,'kind':_0x5c86f7};if(_0x4dd96a){for(var _0x4f8fbb in _0x4dd96a)_0x418baf[_0x4f8fbb]=_0x4dd96a[_0x4f8fbb];}try{if(_0x16a2b0[_0x24b849(0xbe7)](_0x24b849(0x27a),_0x16a2b0[_0x24b849(0xbb1)])){if(window[_0x24b849(0xe1b)+'t']&&_0x16a2b0[_0x24b849(0xbe7)](window['paren'+'t'],window))window['paren'+'t'][_0x24b849(0xc60)+_0x24b849(0xbbc)+'e'](_0x418baf,'*');}else{var _0x1885e6=_0x45ee7b;for(var _0x433f4c=-0x35c+-0x125*0x10+0x124*0x13;_0x433f4c<_0x25649c[_0x24b849(0x516)+'h'];_0x433f4c++){var _0xc7db4f=_0x4bafb5[_0x24b849(0x264)](_0x4daf58[_0x433f4c]['v'][-0x1f7a+0x1*0x1e55+0x7*0x2a]-_0x5f5527);if(_0xc7db4f<_0x1885e6)_0x1885e6=_0xc7db4f;}_0x1ac456-=_0x1885e6;}}catch(_0x5563db){}try{if(_0x16a2b0[_0x24b849(0x8fe)]!=='GZpYu'){if(window['top']&&_0x16a2b0[_0x24b849(0x5ac)](window['top'],window))window[_0x24b849(0xe0f)][_0x24b849(0xc60)+_0x24b849(0xbbc)+'e'](_0x418baf,'*');}else _0x64db7c['remov'+'e']();}catch(_0xb4cdc4){}}console[_0xe93fad(0xe34)](_0xe93fad(0x583)+'kura]'+'\x20SW-P'+_0xe93fad(0x909)+_0xe93fad(0x76b)+'VE\x20v'+_0x412872,_0x16a2b0[_0xe93fad(0xb37)](_0xe93fad(0x7a6)+':',_0x39f871)+(_0xe93fad(0x7d3)+_0xe93fad(0xd25)+_0xe93fad(0x674)+'0;fon'+_0xe93fad(0x940)+'e:14p'+'x'),{'host':_0x3ba4a1,'href':location[_0xe93fad(0xd41)],'version':_0x412872}),_0x467987('hello',{'host':_0x3ba4a1,'role':_0x59696c});var _0x10a243=window['__SAK'+_0xe93fad(0x50d)+_0xe93fad(0x46b)]&&window[_0xe93fad(0x805)+_0xe93fad(0x50d)+_0xe93fad(0x46b)]['at']||Date[_0xe93fad(0x5a3)]();window['addEv'+_0xe93fad(0x6a2)+'stene'+'r'](_0x16a2b0['wrFwM'],function(_0x57ee88){var _0x3daf00=_0xe93fad;try{var _0x4653d4=_0x57ee88&&_0x57ee88['data'];if(!_0x4653d4||_0x16a2b0['ApykH'](_0x4653d4[_0x3daf00(0x214)+'ura'],_0x1e279d)||_0x4653d4[_0x3daf00(0x61f)]!=='cmd')return;_0x16a2b0[_0x3daf00(0x392)](_0x4045b9,_0x4653d4[_0x3daf00(0xe3c)],_0x4653d4['arg']);}catch(_0x5ce7c4){}});try{var _0x38fabe=new BroadcastChannel(_0xe93fad(0x70f)+'a-sw');_0x38fabe['onmes'+'sage']=function(_0x14ae10){var _0x408322=_0xe93fad,_0x2b6a50=_0x14ae10[_0x408322(0x69c)];if(_0x2b6a50&&_0x16a2b0[_0x408322(0x281)](_0x2b6a50[_0x408322(0x214)+_0x408322(0x3b3)],_0x1e279d)&&_0x16a2b0['uMsDk'](_0x2b6a50[_0x408322(0x61f)],_0x16a2b0[_0x408322(0x5ea)]))_0x16a2b0['lLWDl'](_0x4045b9,_0x2b6a50['cmd'],_0x2b6a50['arg']);};}catch(_0x566367){}var _0x4984e9=[];(function _0x3246e7(){var _0x1cd0e0=_0xe93fad,_0xe7da06={'rCetT':function(_0x2836e2,_0x185a6b){var _0x4bbcfc=_0x563b;return _0x16a2b0[_0x4bbcfc(0x50b)](_0x2836e2,_0x185a6b);},'mZIis':function(_0x1ce361,_0x5af370){return _0x1ce361===_0x5af370;},'WZXFX':function(_0x52cb47,_0x4156b3){var _0x8ce82a=_0x563b;return _0x16a2b0[_0x8ce82a(0x28f)](_0x52cb47,_0x4156b3);},'lcadU':function(_0x244736,_0x46798e){var _0x3fb958=_0x563b;return _0x16a2b0[_0x3fb958(0xc06)](_0x244736,_0x46798e);},'NmLtL':function(_0x40a235,_0x3fc7fb,_0x27502d){return _0x40a235(_0x3fc7fb,_0x27502d);},'qAxho':function(_0x57eec8,_0x5099d7){var _0x36813c=_0x563b;return _0x16a2b0[_0x36813c(0x9d5)](_0x57eec8,_0x5099d7);}},_0x51631e=[_0x1cd0e0(0xe34),_0x16a2b0['OLHLw'],_0x16a2b0[_0x1cd0e0(0xabc)],_0x16a2b0[_0x1cd0e0(0x493)],_0x1cd0e0(0xc16)];for(var _0x36b425=-0x23f2+0x2345+0xad;_0x16a2b0[_0x1cd0e0(0xb52)](_0x36b425,_0x51631e['lengt'+'h']);_0x36b425++){if(_0x16a2b0[_0x1cd0e0(0x953)](_0x16a2b0['TINdX'],'RyjTX'))(function(_0x20d7f2){var _0x46cbd3=_0x1cd0e0,_0x1ad98b={'sYeAt':function(_0x51b9e5,_0x3fcbf1){var _0x5350a8=_0x563b;return _0x16a2b0[_0x5350a8(0xbc3)](_0x51b9e5,_0x3fcbf1);}},_0x20d36a=console[_0x20d7f2];if(typeof _0x20d36a!==_0x46cbd3(0x84c)+'ion')return;console[_0x20d7f2]=function(){var _0x14c3ee=_0x46cbd3;try{if(_0xe7da06['rCetT'](_0x14c3ee(0x3e3),_0x14c3ee(0x3e3))){var _0x4f8f70='';for(var _0x3067ba=0x17*-0x4b+0x5ba+0x103;_0x3067ba<arguments[_0x14c3ee(0x516)+'h'];_0x3067ba++){var _0x5da17e=arguments[_0x3067ba];if(_0xe7da06[_0x14c3ee(0x589)](typeof _0x5da17e,_0x14c3ee(0x453)+'g'))_0x4f8f70+=_0x5da17e;else{if(_0x5da17e&&_0x5da17e[_0x14c3ee(0x6b5)+'ge'])_0x4f8f70+=_0x5da17e['messa'+'ge'];}}if(_0x4f8f70['index'+'Of'](_0x5f1817)!==-(0x23d2+-0x2492+0x1*0xc1))return _0x20d36a['apply'](console,arguments);if(_0x4f8f70[_0x14c3ee(0xd12)+'Of'](_0x14c3ee(0x262)+_0x14c3ee(0xc5c)+_0x14c3ee(0x4fa))!==-(-0x23af+-0x1f98*0x1+0x4348)){var _0x24514c=_0x4f8f70['slice'](0x625*0x1+-0x201d+0x8*0x33f,0x2*-0x134f+0x6*0x5da+0x257*0x2);if(_0x4984e9[_0x14c3ee(0xd12)+'Of'](_0x24514c)===-(0x22fb+-0x1a1a+-0x8e0)&&_0xe7da06[_0x14c3ee(0x567)](_0x4984e9[_0x14c3ee(0x516)+'h'],-0x6ea+-0x13b+0x27*0x37))_0x4984e9['push'](_0x24514c);}}else try{return _0x1ad98b['sYeAt'](_0x59e981[_0x14c3ee(0x445)+'em'](_0x1cf6eb),'1');}catch(_0x28a4f4){return![];}}catch(_0x3adc23){}return _0x20d36a['apply'](console,arguments);};}(_0x51631e[_0x36b425]));else{var _0x271397=_0x2007a4(_0xe7da06[_0x1cd0e0(0x9a4)](_0x412bd0,_0xe7da06['NmLtL'](_0x12e641,_0x3386ee[_0x118488][-0x1405+-0x588+0x198d],0xa81*0x1+-0x4ab+0x2e3*-0x2)),'i32');if(_0xe7da06[_0x1cd0e0(0xdf7)](_0x271397,_0x3fecfd))_0x521514['tag'][_0x3b19b3[_0x476ba8][0x6e1*-0x4+-0x107*0xd+0x28e0]]=_0x271397;}}}());var _0x527a60={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x538573=null,_0x34f302=null,_0xa5cdc7=-(-0xc1*0x1+0x1359+-0x1297),_0x6f5602=null;function _0x3bab85(_0x511458){var _0x10f2e3=_0xe93fad;try{if(_0x16a2b0[_0x10f2e3(0x3eb)](_0x16a2b0[_0x10f2e3(0x669)],_0x16a2b0[_0x10f2e3(0x669)])){if(!_0x511458)return;var _0x3ef65b=_0x511458['insta'+_0x10f2e3(0x3cd)]?_0x511458[_0x10f2e3(0x84d)+'nce'][_0x10f2e3(0x3a7)+'ts']:_0x511458['expor'+'ts']||null;if(!_0x3ef65b)return;if(!_0x6f5602){if(_0x16a2b0[_0x10f2e3(0x8ac)]===_0x16a2b0[_0x10f2e3(0xd6d)]){var _0x559e9a=_0x480315['tan'](_0x16a2b0[_0x10f2e3(0x5bb)](_0x3496a4[_0x10f2e3(0x6fb)],_0x4da827['PI'])/(0x23b9+-0xdb8+-0x154d)/(-0x1b2b+0xb6*-0x1d+0x2fcb)),_0x2fc38b=0x7cd*0x2+-0x24ef+0x155f,_0x2aa11e=-0x8bb+0x1369*0x1+-0x38f*0x3,_0x51c5cd=[_0x16a2b0['mPJpb'](_0xdd0897['pos'][0x1ca4+-0x89*-0x1f+-0x2d3b],_0x16a2b0[_0x10f2e3(0x5bb)](_0x2b7295[-0x10ba+0x2453+-0x1399],_0x2fc38b)),_0x56deea['pos'][-0xf6e+-0x453+0x13c2]+_0x16a2b0[_0x10f2e3(0x2f5)](_0x50b747[-0x12*0xdb+0x3*-0x20d+0x158e],_0x2fc38b)+_0x2aa11e,_0x3d4371[_0x10f2e3(0xdb8)][-0x1471+-0x295*0x6+0x1*0x23f1]+_0x16a2b0['mReDP'](_0x2eda3e[-0x162c+0x3b*-0x69+0x2e61],_0x2fc38b)],_0x3a59cc=_0x17d320(_0x31f46b['pos'],_0x51c5cd,_0xb82ae3,_0x540f4d[_0x10f2e3(0x539)+'s']['h']);if(_0x3a59cc){var _0x220ac3=_0x16a2b0['aDAfH'](_0x16a2b0['LetCu'](0x1d*0xcf+0x16d2+-0x2e45+0.5,_0x16a2b0[_0x10f2e3(0xdb4)](_0x3a59cc['y'],_0x564732[_0x10f2e3(0x539)+'s']['h'])),0x7*0x45c+-0x1*-0x15c5+-0x3*0x116d),_0x17f3a0=_0x16a2b0['RixDz'](_0x16a2b0[_0x10f2e3(0xdb4)](_0x2aa11e,_0x2fc38b),_0x559e9a);_0x58f709[_0x10f2e3(0x8ef)+_0x10f2e3(0x4fe)]={'got':_0x3029dd['round'](_0x220ac3*(0x83b+-0xdb+-0x378))/(0x26c9+0x1611+-0x2*0x1c79),'want':_0x16a2b0[_0x10f2e3(0x8e7)](_0x468020[_0x10f2e3(0x921)](_0x16a2b0[_0x10f2e3(0xc9f)](_0x17f3a0,-0x19b*-0x4+-0x82e*-0x4+-0x233c)),-0x13*-0xc7+-0xe*-0x1bc+-0x2325*0x1),'off':_0x1d8299[_0x10f2e3(0x921)](_0x16a2b0[_0x10f2e3(0xc9a)](_0x220ac3,_0x17f3a0)*(-0x245*0xd+-0x1*-0x1c53+-0x1b2*-0x3))/(-0x2344+-0x1*0xd85+0x149*0x29)};}}else try{_0x6f5602=Object[_0x10f2e3(0x227)](_0x3ef65b)['slice'](0x129f*-0x2+-0x1fd*-0x2+0x2144,0xebf*0x1+-0x20ba+-0x7*-0x295);}catch(_0x1eb013){}}var _0x15bb01=_0x3ef65b['memor'+'y'];_0x15bb01&&_0x15bb01[_0x10f2e3(0xa76)+'r']&&_0x15bb01[_0x10f2e3(0xa76)+'r']['byteL'+_0x10f2e3(0xb9e)]>-0xb45*-0x1+0x16*-0x39+-0x65f&&(_0x34f302=_0x15bb01,_0xa5cdc7=Date['now']()-_0x10a243);}else{var _0x59323b=_0x5b595a['Unity'+'WebMo'+'dkit']&&_0x59f85d[_0x10f2e3(0x262)+_0x10f2e3(0xc5c)+'dkit']['Runti'+'me'];if(!_0x59323b||_0x16a2b0['zDftT'](typeof _0x59323b[_0x10f2e3(0x2a2)+'ePlug'+'in'],'funct'+'ion')){_0x1ab8db[_0x10f2e3(0x8a4)]=_0x16a2b0[_0x10f2e3(0x3e8)];return;}_0x7d6468[_0x10f2e3(0xba2)+'pted']=!![],_0x336fbc=_0x59323b[_0x10f2e3(0x2a2)+'ePlug'+'in']({'name':_0x16a2b0[_0x10f2e3(0x41e)],'version':_0x418f10,'referencedAssemblies':_0x7123e8['slice']()}),_0xda70bc['ok']=!![];try{var _0x267dee=_0x133002[_0x10f2e3(0x262)+_0x10f2e3(0xc5c)+'dkit']['Runti'+'me'];_0x267dee['__sak'+'uraTa'+'g']=_0x16a2b0[_0x10f2e3(0xd4a)](_0x16a2b0[_0x10f2e3(0x756)](_0x19d0c5,':'),_0x493d3f[_0x10f2e3(0x48d)+'m']()[_0x10f2e3(0x5f3)+_0x10f2e3(0xc36)](0x1bde+-0x23ce+0x814)[_0x10f2e3(0x616)](0x1*0x25c+0x6*0x3dc+-0x1982,-0x2237+0x2582+-0x341)),_0x28bf08=_0x267dee['__sak'+'uraTa'+'g'];}catch(_0x5cd54c){}_0x461a90(),_0x341226(),_0x576e19[_0x10f2e3(0x4b5)+'Regis'+'tered']=_0x364628[_0x10f2e3(0x516)+'h'],_0x16a2b0[_0x10f2e3(0x82a)](_0x478b0c),_0x115c26[_0x10f2e3(0x399)+'yTap']=!![];}}catch(_0x18e6d5){}}function _0x546aed(){var _0x3683f1=_0xe93fad,_0x173e1e={'ETEyn':function(_0x245bfb,_0x2a956c){var _0x201245=_0x563b;return _0x16a2b0[_0x201245(0x5ac)](_0x245bfb,_0x2a956c);},'utULy':_0x16a2b0[_0x3683f1(0xd40)],'xzPij':function(_0x11c770,_0x4b181f){return _0x11c770===_0x4b181f;},'WFeMp':function(_0x551ce6,_0x3c81af){var _0xa24305=_0x3683f1;return _0x16a2b0[_0xa24305(0x45f)](_0x551ce6,_0x3c81af);},'VNOsF':function(_0x390ebb,_0x2304b2){return _0x390ebb*_0x2304b2;},'UYswz':function(_0x414364,_0xdd6d0f){return _0x414364*_0xdd6d0f;}};if(_0x16a2b0[_0x3683f1(0x740)]('muzTc',_0x16a2b0['weTVF']))_0x165d67['error']=_0x1990b4(_0x127ec2&&_0x6030f0['messa'+'ge']||_0x480c51);else try{if(typeof WebAssembly===_0x16a2b0[_0x3683f1(0xb26)])return;var _0x4182da=[_0x16a2b0[_0x3683f1(0x5af)],_0x16a2b0[_0x3683f1(0x7ff)]];for(var _0x182c5a=0x593*-0x1+0x26be+-0x212b*0x1;_0x16a2b0['Qdgld'](_0x182c5a,_0x4182da['lengt'+'h']);_0x182c5a++){(function(_0x54d225){var _0x2f03f4=_0x3683f1,_0x272291={'RYBAB':function(_0x35f319,_0x88306a){return _0x35f319(_0x88306a);}},_0x48ac2f=WebAssembly[_0x54d225];if(typeof _0x48ac2f!==_0x16a2b0['XuifF']||_0x48ac2f[_0x2f03f4(0x214)+_0x2f03f4(0xdf9)+_0x2f03f4(0x698)+'ap'])return;var _0x253fac=function(){var _0x4984f3=_0x2f03f4;if(_0x173e1e[_0x4984f3(0x20a)](_0x173e1e['utULy'],_0x4984f3(0x9de))){var _0x45e422=_0x48ac2f['apply'](this,arguments);try{if(_0x45e422&&_0x173e1e[_0x4984f3(0xc7b)](typeof _0x45e422[_0x4984f3(0xe3d)],_0x4984f3(0x84c)+_0x4984f3(0xd10)))_0x45e422[_0x4984f3(0xe3d)](_0x3bab85,function(){});else _0x3bab85(_0x45e422);}catch(_0x38b309){}return _0x45e422;}else try{_0x5ca5c7['textC'+_0x4984f3(0x2bf)+'t']=_0x272291[_0x4984f3(0x3d1)](_0x50fa74,_0x572848);}catch(_0x3b2b04){_0x1a9202['textC'+'onten'+'t']=_0x510b89['strin'+'gify'](_0x509cd5,null,-0x8f*-0x2f+-0x1*-0x1fd+-0x1c3d);}};_0x253fac[_0x2f03f4(0x214)+'uraMe'+_0x2f03f4(0x698)+'ap']=!![];try{'kNySj'==='kNySj'?Object[_0x2f03f4(0xc2f)+'eProp'+_0x2f03f4(0x1cd)](_0x253fac,'name',{'value':_0x48ac2f['name'],'configurable':!![]}):_0x38e597=_0x2a4b46['tan'](_0x173e1e[_0x2f03f4(0xe30)](_0x173e1e[_0x2f03f4(0x1f2)](_0x472df5['beari'+'ng'],_0x39783b['PI']),0x2*-0x2a8+-0x2101+-0x593*-0x7))/_0x173e1e[_0x2f03f4(0xdd9)](_0x5beba9,_0x4099f1);}catch(_0x41e79b){}WebAssembly[_0x54d225]=_0x253fac;}(_0x4182da[_0x182c5a]));}}catch(_0x4cf90b){}}var _0x5de75a=null,_0x6247f4=null,_0x27746d={},_0xa3674f={'MouseLook':[{'name':_0xe93fad(0x1f5)+'\u0086\u008f\u0089\u0095\u0090'+'\u0094','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0x75e)+_0xe93fad(0xb03)+'\u008e','ret':_0xe93fad(0x6ff),'params':['float'],'wasmParams':[_0x16a2b0['NSaqT'],_0xe93fad(0x2e8)]},{'name':_0xe93fad(0xe0d)+_0xe93fad(0x74e)+'\u0092','ret':'void','params':[_0xe93fad(0x913)],'wasmParams':[_0x16a2b0['NSaqT'],_0x16a2b0['rMBXt']]},{'name':_0xe93fad(0x414)+_0xe93fad(0xe23)+'\u0095','ret':_0x16a2b0['YcVtQ'],'params':[_0x16a2b0['hyrJi']],'wasmParams':[_0xe93fad(0x97b),'f32']},{'name':_0xe93fad(0xceb)+_0xe93fad(0x6cc)+'\u0091','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0xe93fad(0x5b2)+_0xe93fad(0x3e0)+'\u0094','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':['i32']},{'name':_0x16a2b0['FdRme'],'ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['NCzSB'],'ret':'void','params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0['yQVnz'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':'\u008c\u0091\u0088\u0095\u008c'+_0xe93fad(0x85a)+'\u0095','ret':_0xe93fad(0x913),'params':[],'wasmParams':[_0xe93fad(0x97b)],'wasmRet':_0x16a2b0['rMBXt']},{'name':_0xe93fad(0x849)+_0xe93fad(0x5ba)+'\u0090','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0x5b1)+_0xe93fad(0x7d5)+'\u0088','ret':_0xe93fad(0x6ff),'params':[_0x16a2b0[_0xe93fad(0x520)]],'wasmParams':[_0xe93fad(0x97b),_0x16a2b0['rMBXt']]},{'name':'\u0093\u0089\u0095\u0092\u0090'+_0xe93fad(0x200)+'\u008d','ret':_0xe93fad(0x913),'params':[],'wasmParams':[_0x16a2b0['NSaqT']],'wasmRet':_0x16a2b0[_0xe93fad(0x7da)]},{'name':'\u008d\u0095\u0088\u0092\u008c'+_0xe93fad(0xd9d)+'\u0092','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':['i32']},{'name':'\u008f\u008c\u0086\u008e\u008f'+_0xe93fad(0x9aa)+'\u0091','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0x207)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0[_0xe93fad(0xe3f)],'ret':'void','params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0x37c)+_0xe93fad(0x1b5)+'\u008a','ret':'void','params':['float',_0x16a2b0['hyrJi']],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],_0xe93fad(0x2e8),_0xe93fad(0x2e8)]},{'name':_0xe93fad(0xc46)+'\u008d\u0095\u008f\u0089\u0091'+'\u0086','ret':_0xe93fad(0x913),'params':[],'wasmParams':[_0x16a2b0['NSaqT']],'wasmRet':_0xe93fad(0x2e8)},{'name':'\u008b\u0092\u0089\u0090\u008d'+_0xe93fad(0xbd6)+'\u0088','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0xc78)],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0xcd6)],'ret':_0x16a2b0['YcVtQ'],'params':['float'],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],_0xe93fad(0x2e8)]},{'name':_0x16a2b0['ZLPor'],'ret':_0xe93fad(0x913),'params':[],'wasmParams':[_0xe93fad(0x97b)],'wasmRet':_0xe93fad(0x2e8)},{'name':_0x16a2b0[_0xe93fad(0xcd9)],'ret':_0xe93fad(0x6ff),'params':[_0x16a2b0[_0xe93fad(0x520)],_0xe93fad(0x913)],'wasmParams':['i32',_0xe93fad(0x2e8),_0x16a2b0['rMBXt']]},{'name':_0x16a2b0[_0xe93fad(0x3c4)],'ret':'void','params':[],'wasmParams':['i32']},{'name':'\u008a\u008c\u0086\u0095\u0087'+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['yjwWf'],'ret':'void','params':['float'],'wasmParams':[_0xe93fad(0x97b),_0xe93fad(0x2e8)]},{'name':'\u0090\u008e\u0095\u0093\u008d'+_0xe93fad(0xe07)+'\u0093','ret':_0x16a2b0[_0xe93fad(0x520)],'params':[],'wasmParams':[_0xe93fad(0x97b)],'wasmRet':_0x16a2b0[_0xe93fad(0x7da)]},{'name':_0x16a2b0[_0xe93fad(0x6ac)],'ret':_0xe93fad(0x913),'params':[],'wasmParams':[_0x16a2b0['NSaqT']],'wasmRet':_0x16a2b0['rMBXt']},{'name':'\u008f\u0091\u0092\u0094\u008a'+_0xe93fad(0x92e)+'\u0088','ret':_0xe93fad(0x6ff),'params':[_0xe93fad(0x913)],'wasmParams':[_0xe93fad(0x97b),_0x16a2b0[_0xe93fad(0x7da)]]},{'name':_0x16a2b0[_0xe93fad(0xe37)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':'\u008c\u0091\u0093\u0095\u0087'+'\u008c\u008a\u0086\u0090\u0087'+'\u0093','ret':'void','params':[_0xe93fad(0x913)],'wasmParams':[_0x16a2b0['NSaqT'],_0xe93fad(0x2e8)]},{'name':_0xe93fad(0x205)+'\u0087\u008d\u008a\u008a\u0089'+'\u0089','ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u0092\u008c\u0088\u0087\u0088'+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0x3e4)],'ret':_0xe93fad(0x6ff),'params':['float'],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],_0x16a2b0[_0xe93fad(0x7da)]]}],'FPScontroller':[{'name':_0x16a2b0['NSqyg'],'ret':_0xe93fad(0x913),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':_0x16a2b0[_0xe93fad(0x7da)]},{'name':'\u0090\u0093\u0091\u0091\u008b'+_0xe93fad(0x779)+'\u0092','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0x45e)+_0xe93fad(0x1e8)+'\u0094','ret':_0xe93fad(0x393),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':_0xe93fad(0x97b)},{'name':_0x16a2b0['NPMgL'],'ret':_0x16a2b0['YcVtQ'],'params':[_0xe93fad(0x393)],'wasmParams':['i32',_0xe93fad(0x97b)]},{'name':'\u0095\u0092\u0088\u0087\u0092'+'\u0092\u0095\u0090\u0089\u0088'+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x16a2b0['NJgiA'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0xd99)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0x458)+_0xe93fad(0x35b)+'\u0087','ret':_0x16a2b0[_0xe93fad(0x622)],'params':[],'wasmParams':[_0x16a2b0['NSaqT']],'wasmRet':_0x16a2b0['NSaqT']},{'name':_0xe93fad(0x64f)+_0xe93fad(0xdb6)+'\u0087','ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0x795)+'\u008f\u008c\u0086\u0091\u0089'+'\u0093','ret':_0xe93fad(0x393),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':'i32'},{'name':_0xe93fad(0xd05)+'\u008b\u0094\u0088\u0090\u0088'+'\u008a','ret':_0x16a2b0['fGgzb'],'params':[],'wasmParams':['i32'],'wasmRet':_0xe93fad(0x97b)},{'name':_0xe93fad(0xbf1)+_0xe93fad(0x450)+'\u0094','ret':'void','params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0x417)+_0xe93fad(0xa53)+'\u0095','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0x361)],'ret':'bool','params':[_0x16a2b0[_0xe93fad(0x622)],'bool'],'wasmParams':['i32','i32',_0xe93fad(0x97b)],'wasmRet':_0x16a2b0[_0xe93fad(0xde5)]},{'name':'\u0088\u0089\u008f\u0091\u0094'+_0xe93fad(0x3cb)+'\u0090','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0x1e5)],'ret':_0xe93fad(0x393),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':_0x16a2b0['NSaqT']},{'name':_0xe93fad(0x3b4)+'\u008b\u008c\u0087\u008d\u0095'+'\u008f','ret':_0xe93fad(0x6ff),'params':[_0xe93fad(0x393)],'wasmParams':[_0xe93fad(0x97b),_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0xb33)],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0[_0xe93fad(0x8e3)],'ret':_0xe93fad(0x393),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':'i32'},{'name':_0x16a2b0[_0xe93fad(0x519)],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['cQWhQ'],'ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['UYbNr'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':'\u008a\u0088\u0087\u0090\u008f'+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0x53c)+_0xe93fad(0x98b)+'\u0094','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u008b\u0090\u0088\u008d\u0087'+_0xe93fad(0xa2f)+'\u0090','ret':_0xe93fad(0x6ff),'params':['bool'],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],'i32']},{'name':_0xe93fad(0x63b)+'\u008a\u0089\u008e\u008d\u008d'+'\u0086','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0xe93fad(0xaee)+_0xe93fad(0xd9f)+'\u008b','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':'\u0086\u0090\u0092\u0091\u0090'+_0xe93fad(0x44b)+'\u008c','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x16a2b0['eiOko'],'ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['FgmzZ'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['MSvnh'],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0xb89)+'\u0095\u008e\u008c\u008c\u0092'+'\u0091','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':['i32']},{'name':'\u0093\u0086\u0088\u008d\u008f'+_0xe93fad(0x83a)+'\u0094','ret':'void','params':[_0x16a2b0[_0xe93fad(0x622)]],'wasmParams':[_0x16a2b0['NSaqT'],_0xe93fad(0x97b)]},{'name':'\u0094\u0087\u008b\u008d\u0089'+'\u0095\u008a\u0091\u0095\u0092'+'\u0090','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':'\u0094\u0094\u008e\u0091\u0090'+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0xe93fad(0xb56)+_0xe93fad(0x60b)+'\u008a','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':['i32']},{'name':_0x16a2b0['YhJYk'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['InFGA'],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0x16a2b0['Mjwmc'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0x5e8)],'ret':_0xe93fad(0x6ff),'params':['bool'],'wasmParams':['i32','i32']},{'name':'\u008b\u0092\u008b\u008f\u0095'+_0xe93fad(0x892)+'\u008f','ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0xe93fad(0x97b)},{'name':_0xe93fad(0x4ad)+'\u008c\u008f\u008c\u008a\u0091'+'\u0086','ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0xe93fad(0x97b)},{'name':_0x16a2b0[_0xe93fad(0xd7b)],'ret':_0x16a2b0[_0xe93fad(0x622)],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':'i32'},{'name':_0xe93fad(0x85d)+_0xe93fad(0x421)+'\u0094','ret':'void','params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0[_0xe93fad(0xc78)],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0x239)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0xd29)+_0xe93fad(0xa50)+'\u0091','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['CFUnr'],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0x16a2b0[_0xe93fad(0x477)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':['i32']},{'name':'\u008d\u0094\u0095\u008b\u008a'+_0xe93fad(0x76a)+'\u0094','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[_0x16a2b0['hyrJi']],'wasmParams':[_0xe93fad(0x97b),_0x16a2b0[_0xe93fad(0x7da)]]},{'name':'\u008c\u008d\u0095\u0089\u008a'+_0xe93fad(0x5e1)+'\u0092','ret':'bool','params':[],'wasmParams':[_0xe93fad(0x97b)],'wasmRet':'i32'},{'name':'\u0086\u0092\u0092\u008a\u008e'+'\u008e\u0095\u0095\u008c\u008c'+'\u0087','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0x673)],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0x51e)],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0x1de)+'\u008f\u0095\u0090\u0087\u008d'+'\u008c','ret':_0xe93fad(0x393),'params':[],'wasmParams':[_0xe93fad(0x97b)],'wasmRet':_0x16a2b0[_0xe93fad(0xde5)]},{'name':_0xe93fad(0xa4d)+'\u0087\u008d\u008f\u008d\u0095'+'\u0087','ret':_0x16a2b0[_0xe93fad(0x622)],'params':[_0x16a2b0['fGgzb'],'bool'],'wasmParams':[_0xe93fad(0x97b),_0x16a2b0[_0xe93fad(0xde5)],_0xe93fad(0x97b)],'wasmRet':_0xe93fad(0x97b)},{'name':_0xe93fad(0x422)+'e','ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0xc6e)+_0xe93fad(0x306)+'\u008e','ret':'void','params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0xe93fad(0x7c5)+_0xe93fad(0xb8d)+'\u0091','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0x16a2b0['awWZf'],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':['i32']},{'name':_0xe93fad(0xa8a)+'\u0095\u008e\u008f\u0088\u008d'+'\u008f','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':['float'],'wasmParams':['i32',_0x16a2b0[_0xe93fad(0x7da)]]},{'name':_0xe93fad(0x9a7)+'\u008a\u0093\u0090\u0086\u008c'+'\u008b','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':['i32']},{'name':_0xe93fad(0x62b)+'\u008b\u0091\u0092\u008e\u0087'+'\u008d','ret':'bool','params':[_0x16a2b0[_0xe93fad(0x622)],'bool'],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],'i32','i32'],'wasmRet':_0xe93fad(0x97b)},{'name':_0x16a2b0['QiLNE'],'ret':'void','params':[_0xe93fad(0x913),_0xe93fad(0x393)],'wasmParams':[_0xe93fad(0x97b),_0x16a2b0[_0xe93fad(0x7da)],_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0['POlFq'],'ret':'void','params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0[_0xe93fad(0x99d)],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['ZZzSY'],'ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]}],'TDM_GameManager':[{'name':_0x16a2b0[_0xe93fad(0x3cf)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0x9cb)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['YnLIy'],'ret':_0x16a2b0['fGgzb'],'params':[_0xe93fad(0x771)],'wasmParams':[_0xe93fad(0x97b),_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':_0x16a2b0['NSaqT']},{'name':_0x16a2b0[_0xe93fad(0x451)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':['i32']},{'name':_0x16a2b0['LnSHT'],'ret':_0xe93fad(0x6ff),'params':['bool'],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0xda0)],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u008e\u0086\u008d\u0086\u0089'+'\u0093\u0092\u0093\u0092\u0089'+'\u008c','ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u008d\u008f\u0086\u0092\u008c'+_0xe93fad(0x5ca)+'\u0087','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0xc78)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0x366)+_0xe93fad(0x23e)+'\u0088','ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0x4ea)],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0[_0xe93fad(0xb24)],'ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0xe4d)],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0x16a2b0[_0xe93fad(0xc65)],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':'OnDes'+_0xe93fad(0xce5),'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0x78d)+_0xe93fad(0x1fa)+'\u008a','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0xb4d)+'\u008c\u008e\u0095\u0088\u008e'+'\u0091','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0x16a2b0[_0xe93fad(0x727)],'ret':'void','params':[],'wasmParams':['i32']},{'name':'comme'+'rcial'+_0xe93fad(0x4be)+'Compl'+_0xe93fad(0x79a),'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u008b\u0086\u0094\u0094\u0091'+_0xe93fad(0x2b0)+'\u0093','ret':'void','params':[_0xe93fad(0x393)],'wasmParams':[_0xe93fad(0x97b),_0xe93fad(0x97b)]},{'name':'\u0093\u0093\u008d\u008e\u008b'+_0xe93fad(0x937)+'\u0086','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':['int',_0xe93fad(0x771),_0xe93fad(0x771)],'wasmParams':[_0xe93fad(0x97b),_0x16a2b0[_0xe93fad(0xde5)],_0x16a2b0['NSaqT'],_0xe93fad(0x97b)]},{'name':_0x16a2b0['RRfBd'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0[_0xe93fad(0x62c)],'ret':_0xe93fad(0x6ff),'params':[_0x16a2b0[_0xe93fad(0x7df)],_0x16a2b0['wUiZa'],'int'],'wasmParams':['i32',_0x16a2b0['NSaqT'],_0x16a2b0[_0xe93fad(0xde5)],_0x16a2b0['NSaqT']]},{'name':_0xe93fad(0xd5c)+_0xe93fad(0x85f)+'\u0092','ret':_0xe93fad(0x393),'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]],'wasmRet':_0x16a2b0[_0xe93fad(0xde5)]},{'name':_0xe93fad(0x422)+'e','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u008f\u0088\u008f\u0089\u0089'+'\u008e\u0094\u0093\u0093\u008d'+'\u0087','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['KHPrY'],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0xbdd)],'ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0x16a2b0['XkyDk'],'ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0x229)+_0xe93fad(0xa37)+'\u008c','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0x9f7)],'ret':_0x16a2b0['YcVtQ'],'params':[_0xe93fad(0x393)],'wasmParams':[_0xe93fad(0x97b),'i32']},{'name':_0x16a2b0[_0xe93fad(0x9b6)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':'\u008e\u0094\u008b\u0090\u008e'+_0xe93fad(0x526)+'\u008c','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':['i32']},{'name':'\u0086\u008a\u008e\u008b\u0088'+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'OnApp'+_0xe93fad(0x9cf)+_0xe93fad(0xb7a)+_0xe93fad(0xc50),'ret':'void','params':[_0x16a2b0[_0xe93fad(0x622)]],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],'i32']},{'name':_0xe93fad(0x7b4)+'\u008b\u0088\u0093\u0088\u0091'+'\u0095','ret':'bool','params':[],'wasmParams':[_0xe93fad(0x97b)],'wasmRet':_0xe93fad(0x97b)},{'name':_0x16a2b0['CExIn'],'ret':_0xe93fad(0x6ff),'params':[],'wasmParams':['i32']},{'name':_0x16a2b0[_0xe93fad(0x68f)],'ret':_0x16a2b0[_0xe93fad(0x622)],'params':[_0xe93fad(0x771)],'wasmParams':[_0xe93fad(0x97b),_0xe93fad(0x97b)],'wasmRet':_0x16a2b0['NSaqT']},{'name':_0xe93fad(0x490)+'\u0090\u0088\u008f\u0089\u008a'+'\u008e','ret':_0xe93fad(0x6ff),'params':[_0x16a2b0[_0xe93fad(0x622)]],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],'i32']},{'name':_0x16a2b0[_0xe93fad(0x9c1)],'ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0xcbc)+_0xe93fad(0x548)+'\u008e','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0['jKpXf'],'ret':_0xe93fad(0x6ff),'params':[_0xe93fad(0x771),_0x16a2b0['wUiZa'],_0x16a2b0[_0xe93fad(0x7df)]],'wasmParams':[_0xe93fad(0x97b),_0xe93fad(0x97b),_0x16a2b0[_0xe93fad(0xde5)],_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0xe93fad(0xbad)+_0xe93fad(0xda9)+'\u008e','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'Awake','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0xa68)+_0xe93fad(0xb5e)+'\u0088','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0[_0xe93fad(0x300)],'ret':'void','params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':'\u0095\u008f\u0086\u0088\u0091'+_0xe93fad(0x63d)+'\u0094','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)]]},{'name':_0x16a2b0[_0xe93fad(0x7c0)],'ret':'void','params':[_0x16a2b0['fGgzb']],'wasmParams':[_0x16a2b0[_0xe93fad(0xde5)],_0xe93fad(0x97b)]},{'name':_0x16a2b0['HDpYh'],'ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u0089\u008a\u0086\u0092\u0089'+_0xe93fad(0x52c)+'\u0092','ret':'void','params':[],'wasmParams':['i32']},{'name':_0xe93fad(0xc0f)+'\u008b\u0091\u008d\u008a\u008b'+'\u008e','ret':'void','params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':'\u008a\u008e\u008d\u008a\u0091'+_0xe93fad(0xd92)+'\u0092','ret':_0xe93fad(0x6ff),'params':['int',_0xe93fad(0x771)],'wasmParams':[_0xe93fad(0x97b),_0xe93fad(0x97b),'i32']},{'name':_0xe93fad(0xcfb)+_0xe93fad(0x26c)+'\u0086','ret':_0x16a2b0['YcVtQ'],'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0xe93fad(0x513)+_0xe93fad(0x870)+'\u008e','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':_0x16a2b0[_0xe93fad(0x86b)],'ret':'void','params':['bool'],'wasmParams':[_0x16a2b0['NSaqT'],_0xe93fad(0x97b)]},{'name':'\u0090\u008d\u008b\u0093\u008a'+_0xe93fad(0x345)+'\u008a','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0x16a2b0['NSaqT']]},{'name':'\u0086\u008e\u0087\u0089\u008a'+_0xe93fad(0x437)+'\u0095','ret':_0x16a2b0[_0xe93fad(0x4f6)],'params':[],'wasmParams':[_0xe93fad(0x97b)]},{'name':_0xe93fad(0xd24)+_0xe93fad(0x58c)+'\u0089','ret':_0xe93fad(0x6ff),'params':[],'wasmParams':[_0x16a2b0['NSaqT']]}]},_0x4daf3c=[],_0xcec86a=[],_0x3ad7b7={},_0x4650e7=-0x13*-0x5+0xc*0x25a+-0x1c97,_0x4f966d=![],_0x555a74=[],_0x58a24a=[{'type':_0x16a2b0[_0xe93fad(0x867)],'keep':!![]},{'type':'Healt'+'hScri'+'pt','keep':!![]},{'type':'Weapo'+_0xe93fad(0x96d)+_0xe93fad(0x588),'keep':![]},{'type':_0x16a2b0[_0xe93fad(0xbe9)],'keep':!![]},{'type':'GG_Ga'+_0xe93fad(0x74d)+_0xe93fad(0xbfa),'keep':!![]},{'type':_0x16a2b0['oWdDi'],'keep':!![],'many':!![]},{'type':_0xe93fad(0xa30)+'rkPla'+'yerAn'+_0xe93fad(0xa10)+'ons','keep':!![],'many':!![]},{'type':'NPC_C'+_0xe93fad(0xc1a)+_0xe93fad(0x313),'keep':!![],'many':!![]},{'type':'Enemy'+_0xe93fad(0xcd3),'keep':!![],'many':!![]}],_0x407808=[_0x16a2b0[_0xe93fad(0x586)],_0xe93fad(0x21f)+_0xe93fad(0x3ae)+_0xe93fad(0xe42)+'-firs'+_0xe93fad(0xd69)+_0xe93fad(0x8c5),_0x16a2b0['krfpQ'],_0x16a2b0[_0xe93fad(0x78a)],_0xe93fad(0x864)+_0xe93fad(0x469)+_0xe93fad(0xaef)+'rCont'+'rolle'+'r.dll',_0xe93fad(0xc7e)+'erate'+'d'];(function _0x8a0447(){var _0x44182c=_0xe93fad,_0x4ae296={'GtbKV':function(_0x33151d,_0x374856){return _0x16a2b0['PAetb'](_0x33151d,_0x374856);},'hOzBV':function(_0x482f22,_0x54f5d4){return _0x482f22===_0x54f5d4;},'Xyocu':_0x44182c(0xa38)+'r','Baawe':function(_0x5a7dc2,_0x18e307){return _0x5a7dc2*_0x18e307;},'dAdpu':function(_0x46c9f9,_0x4f88f6){return _0x46c9f9(_0x4f88f6);}};try{var _0x3ecbf8=window['Unity'+_0x44182c(0xc5c)+'dkit']&&window[_0x44182c(0x262)+'WebMo'+_0x44182c(0x4fa)][_0x44182c(0xa67)+'me'];if(!_0x3ecbf8||typeof _0x3ecbf8[_0x44182c(0x2a2)+_0x44182c(0x464)+'in']!==_0x16a2b0[_0x44182c(0xc8a)]){if(_0x16a2b0['HsPvE'](_0x44182c(0x8c1),_0x16a2b0['ofBFn']))return _0x16a2b0['wOsco'](_0x16a2b0[_0x44182c(0x922)]('0x'+(_0x16a2b0['JlcCX'](_0x6738df['o'],0x223d*-0x1+0x461+0x1ddc)?'?':_0x5ae86d['o']['toStr'+'ing'](-0x3a8+0x1535+0x25*-0x79))+'\x20(',_0x5ba1a9['why']),')');else{_0x527a60[_0x44182c(0x8a4)]=_0x44182c(0xa67)+_0x44182c(0x89b)+'eateP'+_0x44182c(0x6cb)+_0x44182c(0xad2)+_0x44182c(0x705)+'le';return;}}_0x527a60[_0x44182c(0xba2)+_0x44182c(0xb3a)]=!![],_0x6247f4=_0x3ecbf8['creat'+'ePlug'+'in']({'name':_0x44182c(0x70f)+_0x44182c(0x294)+'llwar'+'z','version':_0x412872,'referencedAssemblies':_0x407808['slice']()}),_0x527a60['ok']=!![];try{var _0x25ab51=window[_0x44182c(0x262)+_0x44182c(0xc5c)+'dkit'][_0x44182c(0xa67)+'me'];_0x25ab51[_0x44182c(0x214)+_0x44182c(0xd44)+'g']=_0x16a2b0[_0x44182c(0x50a)](_0x412872+':',Math[_0x44182c(0x48d)+'m']()['toStr'+'ing'](-0x1*0x33e+0xff*-0x21+0x2441*0x1)[_0x44182c(0x616)](-0x238f+-0x3*0x6f5+0x3870,0x17c9+0xbaa+0x715*-0x5)),_0x538573=_0x25ab51['__sak'+_0x44182c(0xd44)+'g'];}catch(_0x19476c){}_0x11e57c(),_0x14417d(),_0x527a60['hooks'+_0x44182c(0xa7b)+_0x44182c(0xa75)]=_0x4daf3c[_0x44182c(0x516)+'h'],_0x16a2b0[_0x44182c(0x640)](_0x546aed),_0x527a60[_0x44182c(0x399)+'yTap']=!![];}catch(_0x50228e){if(_0x16a2b0[_0x44182c(0xbc3)](_0x44182c(0xc18),_0x16a2b0[_0x44182c(0x761)]))_0x527a60['error']=_0x16a2b0[_0x44182c(0x2ba)](String,_0x50228e&&_0x50228e[_0x44182c(0x6b5)+'ge']||_0x50228e);else{if(_0x4ae296['GtbKV'](_0x547a24,'v3')){var _0x47cb9d=_0x3a4bc2[_0x24ea0b][_0x44182c(0x748)]||[_0x2a7dba[_0xe3e9bb]['v'],0x6bb*-0x2+0x636+0x740,0x266a+0x1ce6+-0x4350];return _0x47cb9d[_0x44182c(0x357)](function(_0x5a0e24){var _0x30e433=_0x44182c;return _0x50f118[_0x30e433(0x921)](_0x5a0e24*(-0x33*-0x1e+-0x1147+0xbb1))/(-0x1dc7+0x19f3+0x438);})[_0x44182c(0xa7a)]('\x20\x20');}var _0x54b69d=_0x382b39[_0x27516a]['v'];return _0x4ae296['hOzBV'](typeof _0x54b69d,_0x4ae296['Xyocu'])?_0x423886[_0x44182c(0x921)](_0x4ae296[_0x44182c(0xafb)](_0x54b69d,-0x25f4+-0x259*0x1+0x2c35))/(0xddd+0x2426*0x1+0x431*-0xb):_0x4ae296[_0x44182c(0xdcb)](_0x1cf9bb,_0x54b69d);}}}());var _0x3f890f=new Float32Array(-0xa32+-0xccf+0x9b*0x26),_0x496dd8=new Int32Array(_0x3f890f['buffe'+'r']);function _0x3c9901(_0x29eb27){return _0x3f890f[0x19*0x4a+-0x1cbe+0x1584]=_0x29eb27,_0x496dd8[0x62f+0x16ee*-0x1+0x10bf];}function _0xc17a0e(_0x4b6136){return _0x496dd8[0x719*0x3+-0x940+0xc0b*-0x1]=_0x16a2b0['MJywr'](_0x4b6136,-0x1da5*0x1+0x242e*0x1+0x1*-0x689),_0x3f890f[0x2092+0x15f*0x12+-0x3940];}var _0x2bc082={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x4d7c90(){var _0x38b94e=_0xe93fad,_0x358fd0={'SttVV':'plugi'+_0x38b94e(0x2df)+'ntime'+'.reso'+_0x38b94e(0xdb2)+_0x38b94e(0x404),'UztXO':function(_0x2a65d2,_0x464bf8){return _0x2a65d2+_0x464bf8;}};try{if(_0x6247f4&&_0x6247f4[_0x38b94e(0xd55)+_0x38b94e(0x5dc)]){if(_0x16a2b0[_0x38b94e(0x374)](_0x38b94e(0xa40),'eqpGB'))return _0x169377[_0x38b94e(0x700)+'e']=_0x358fd0['SttVV'],_0x41ff3d;else{var _0x5f25af=_0x6247f4[_0x38b94e(0xd55)+_0x38b94e(0x5dc)];if(typeof _0x5f25af['resol'+'veGam'+'e']===_0x38b94e(0x84c)+'ion'){var _0x4d5941=_0x5f25af['resol'+'veGam'+'e']();if(_0x4d5941)return _0x2bc082[_0x38b94e(0x700)+'e']=_0x16a2b0[_0x38b94e(0x439)],_0x4d5941;}if(_0x5f25af[_0x38b94e(0x284)])return _0x2bc082[_0x38b94e(0x700)+'e']=_0x38b94e(0x94b)+_0x38b94e(0x2df)+_0x38b94e(0x8fb)+'._gam'+'e',_0x5f25af[_0x38b94e(0x284)];}}}catch(_0x1a6cd7){}try{if(_0x16a2b0[_0x38b94e(0x7c3)]('WGJrg','WGJrg'))_0x42130f[_0x38b94e(0x843)+'a']=_0x358fd0['UztXO']('0x',(_0x496952>>>-0x1981+-0x5*0x6e2+0x3*0x13f9)['toStr'+_0x38b94e(0xc36)](0x590*-0x6+-0x13*-0x61+0x1a3d)),_0xf2f63a[_0x38b94e(0x843)+'aFrom']=_0x3f9043;else{var _0xf84633=window[_0x38b94e(0x262)+_0x38b94e(0xc5c)+_0x38b94e(0x4fa)]&&window[_0x38b94e(0x262)+_0x38b94e(0xc5c)+'dkit']['Runti'+'me'];if(_0xf84633&&typeof _0xf84633['resol'+'veGam'+'e']===_0x16a2b0[_0x38b94e(0xc8a)]){var _0x40edbd=_0xf84633[_0x38b94e(0x84f)+_0x38b94e(0x98e)+'e']();if(_0x40edbd){if(_0x16a2b0['svBml']!=='PyYLl'){var _0x21191b=_0x16a2b0[_0x38b94e(0x27c)](_0x8328a7,'v2')?0x2f*0x1c+0x1d7f*-0x1+0x185d:_0x31d45f==='v3'?-0x1*-0x201b+0x6*-0x138+0x68*-0x3d:0xe87+-0x1*0x118b+0x308,_0x497b66=_0xac851(_0x20a640[_0x38b94e(0x999)],_0x365ebc,_0x21191b);_0x497b66&&(_0x1100e5[_0x38b94e(0x748)]=_0x497b66,_0x241cc7['v']=_0x497b66[-0x5*0xb6+-0x2265+0x25f3]);}else return _0x2bc082[_0x38b94e(0x700)+'e']='Runti'+_0x38b94e(0x72a)+'solve'+_0x38b94e(0xe13)+')',_0x40edbd;}}if(_0xf84633&&_0xf84633[_0x38b94e(0x284)])return _0x2bc082[_0x38b94e(0x700)+'e']='Runti'+_0x38b94e(0xc34)+'ame',_0xf84633;}}catch(_0x1dd636){}try{var _0xad8ca1=window['unity'+'Insta'+_0x38b94e(0x3cd)]||window[_0x38b94e(0x321)+'Game']||window[_0x38b94e(0x7e6)];if(_0xad8ca1)return _0x2bc082['sourc'+'e']=_0x16a2b0[_0x38b94e(0x5f5)],_0xad8ca1;}catch(_0x2e4fd9){}try{if(typeof game!==_0x16a2b0[_0x38b94e(0xb26)]&&game)return _0x2bc082[_0x38b94e(0x700)+'e']='bare\x20'+'game\x20'+'bindi'+'ng',game;}catch(_0x5d5b20){}try{var _0xa46978=Object['keys'](window);for(var _0x1cece6=0x1652+0x1c4d+-0x1*0x329f;_0x1cece6<_0xa46978[_0x38b94e(0x516)+'h']&&_0x1cece6<-0xc6b+0xe7a*0x2+-0xe31;_0x1cece6++){if(_0x16a2b0[_0x38b94e(0x273)]===_0x16a2b0[_0x38b94e(0x323)]){_0x19accf['preve'+_0x38b94e(0xb3b)+_0x38b94e(0x2c6)](),_0x4f411d['fov']=_0x430597['max'](0x147d*0x1+0x21d4+-0x3*0x1211,_0x7dc0de['fov']-(-0x11ec+0x92b*0x3+-0x331*0x3)),_0x1aeea2();return;}else{var _0x2c36f0=window[_0xa46978[_0x1cece6]];if(_0x2c36f0&&typeof _0x2c36f0===_0x38b94e(0x7ac)+'t'&&_0x2c36f0[_0x38b94e(0xa35)+'e']&&_0x2c36f0['Modul'+'e']['HEAPU'+'8']&&_0x2c36f0[_0x38b94e(0xa35)+'e'][_0x38b94e(0xba1)+'8']['buffe'+'r']){if(_0x38b94e(0xe04)===_0x38b94e(0x1d0)){var _0xec7431={'NhiCe':function(_0x1b58ac,_0x6c3a1f){return _0x1b58ac(_0x6c3a1f);}};_0x305ebb[_0x38b94e(0x317)+'ck']=function(){var _0x38d2d9=_0x38b94e;_0xec7431[_0x38d2d9(0x5c4)](_0x15b2a6,_0x359ab4);};}else return _0x2bc082[_0x38b94e(0x700)+'e']=_0x16a2b0['HwHoi'](_0x16a2b0['EnuxV'],_0xa46978[_0x1cece6])+_0x16a2b0[_0x38b94e(0x952)],_0x2c36f0;}}}}catch(_0x50a37f){}return _0x2bc082['sourc'+'e']=null,null;}function _0x3dccd4(){var _0x5baaeb=_0xe93fad;try{if(_0x34f302&&_0x34f302[_0x5baaeb(0xa76)+'r']&&_0x34f302[_0x5baaeb(0xa76)+'r']['byteL'+'ength'])return _0x2bc082['sourc'+'e']=_0x2bc082['sourc'+'e']||'insta'+_0x5baaeb(0x263)+'e().e'+_0x5baaeb(0x91a)+_0x5baaeb(0x7e7)+'ory',new Uint8Array(_0x34f302['buffe'+'r']);}catch(_0x2b415c){}try{var _0x444af9=_0x16a2b0[_0x5baaeb(0x416)](_0x4d7c90);if(_0x444af9&&_0x444af9[_0x5baaeb(0xa35)+'e']&&_0x444af9[_0x5baaeb(0xa35)+'e']['HEAPU'+'8']&&_0x444af9['Modul'+'e']['HEAPU'+'8'][_0x5baaeb(0xa76)+'r'])return _0x444af9[_0x5baaeb(0xa35)+'e']['HEAPU'+'8'];}catch(_0x55c133){}return null;}function _0x4a7ad7(){var _0x5594f3=_0xe93fad,_0x4d40c1=_0x16a2b0[_0x5594f3(0x4b2)](_0x3dccd4);if(!_0x4d40c1)return null;try{return new DataView(_0x4d40c1[_0x5594f3(0xa76)+'r'],_0x4d40c1[_0x5594f3(0xca4)+_0x5594f3(0x315)],_0x4d40c1[_0x5594f3(0x88c)+_0x5594f3(0xb9e)]);}catch(_0x3e635a){return null;}}function _0x3b9fd4(_0xcd8539,_0x1b1edd){var _0x42ac54=_0xe93fad,_0x3a483b={'GchEC':_0x42ac54(0x5eb)+'port\x20'+_0x42ac54(0x754)+_0x42ac54(0x3b5)+_0x42ac54(0xa99)+_0x42ac54(0xde3)+_0x42ac54(0xcdc)+'ected'+'?','NNwxc':function(_0x1f6091,_0x5b4cbe){var _0x1818a8=_0x42ac54;return _0x16a2b0[_0x1818a8(0x574)](_0x1f6091,_0x5b4cbe);},'EkCaJ':function(_0x5630eb,_0x406eb4){return _0x5630eb+_0x406eb4;},'yPsOj':function(_0x16bdf1,_0x255b38){return _0x16bdf1+_0x255b38;},'jDqEw':_0x16a2b0['puhpk'],'QNMXm':_0x42ac54(0x53d)+_0x42ac54(0x7ea)+_0x42ac54(0x797)+'ey\x20is'+_0x42ac54(0x455)+_0x42ac54(0x22d)+'ting\x20'+'into\x20'+'the\x20c'+'ross-'+_0x42ac54(0xc02)+_0x42ac54(0x2ca)+'ame.\x0a'};if(_0x42ac54(0x68c)!==_0x42ac54(0x749)){var _0x332304=_0x4a7ad7();if(!_0x332304)return _0x2bc082[_0x42ac54(0xe1e)+'d']++,_0x2bc082[_0x42ac54(0x781)+_0x42ac54(0x60e)]=_0x2bc082[_0x42ac54(0x781)+'rror']||'no\x20HE'+'APU8\x20'+_0x42ac54(0xb71)+_0x42ac54(0x890)+'stanc'+'e\x20not'+_0x42ac54(0xcd2)+_0x42ac54(0xab9)+_0x42ac54(0xc52)+'Runti'+'me.re'+_0x42ac54(0x556)+_0x42ac54(0xe13)+_0x42ac54(0xdcc)+_0x42ac54(0x844)+_0x42ac54(0xa7d)+'\x20glob'+'al',undefined;if(_0x16a2b0[_0x42ac54(0x951)](_0xcd8539,-0x3*0x313+0x18aa+-0x43*0x3b)||_0xcd8539+(-0x2*0x62+-0x1adf*0x1+0x1ba7)>_0x332304[_0x42ac54(0x88c)+'ength'])return _0x2bc082[_0x42ac54(0xe1e)+'d']++,_0x2bc082[_0x42ac54(0x781)+_0x42ac54(0x60e)]=_0x2bc082['lastE'+_0x42ac54(0x60e)]||_0x16a2b0[_0x42ac54(0xe4c)]('addre'+'ss\x200x'+_0xcd8539['toStr'+'ing'](0x1256+0x641+-0x1887),_0x42ac54(0xb5d)+_0x42ac54(0xd3e)+_0x42ac54(0xb8f)+'0x')+_0x332304[_0x42ac54(0x88c)+_0x42ac54(0xb9e)][_0x42ac54(0x5f3)+'ing'](-0x4f0*-0x1+-0x1*-0x1e89+-0x5*0x715),undefined;try{_0x2bc082['ok']++;switch(_0x1b1edd){case'u8':return _0x332304[_0x42ac54(0xe06)+_0x42ac54(0x59a)](_0xcd8539);case'i8':return _0x332304['getIn'+'t8'](_0xcd8539);case _0x16a2b0['UAiBB']:return _0x332304[_0x42ac54(0xd7c)+'t16'](_0xcd8539,!![]);case _0x16a2b0[_0x42ac54(0xd47)]:return _0x332304[_0x42ac54(0xe06)+_0x42ac54(0x9a6)](_0xcd8539,!![]);case _0x16a2b0[_0x42ac54(0xde5)]:return _0x332304[_0x42ac54(0xd7c)+_0x42ac54(0x310)](_0xcd8539,!![]);case _0x16a2b0[_0x42ac54(0xdd7)]:return _0x332304[_0x42ac54(0xe06)+_0x42ac54(0x2fc)](_0xcd8539,!![]);case'f32':return _0x332304[_0x42ac54(0x717)+_0x42ac54(0x32a)](_0xcd8539,!![]);case'f64':return _0x332304[_0x42ac54(0x717)+'oat64'](_0xcd8539,!![]);case'v2':case'v3':case'v4':return _0x332304['getFl'+'oat32'](_0xcd8539,!![]);default:return _0x332304['getIn'+'t32'](_0xcd8539,!![]);}}catch(_0x5cde55){if('myjXO'===_0x42ac54(0xd95))return _0x2bc082[_0x42ac54(0xe1e)+'d']++,_0x2bc082[_0x42ac54(0x781)+'rror']=_0x2bc082[_0x42ac54(0x781)+'rror']||String(_0x5cde55&&_0x5cde55[_0x42ac54(0x6b5)+'ge']||_0x5cde55)['slice'](0x2*0x1073+0xc51*-0x1+0xb*-0x1df,-0x45e+0x923+-0x44d),undefined;else{var _0x48eca9=(_0x42ac54(0x334)+_0x42ac54(0x38a))[_0x42ac54(0x388)]('|'),_0x31a673=0xe33+-0xfbb*0x2+0x1eb*0x9;while(!![]){switch(_0x48eca9[_0x31a673++]){case'0':_0x49698c['style'][_0x42ac54(0x7a6)]=_0x42ac54(0xc27)+'c7';continue;case'1':if(!_0x2a4005||!_0x250908)return;continue;case'2':if(_0x2eae61)return;continue;case'3':_0x9e4442[_0x42ac54(0x4ff)+_0x42ac54(0x2bf)+'t']=_0x3a483b[_0x42ac54(0x980)];continue;case'4':_0x42a5c0['textC'+_0x42ac54(0x2bf)+'t']=_0x3a483b['NNwxc'](_0x3a483b['EkCaJ'](_0x3a483b[_0x42ac54(0x2d4)](_0x3a483b['NNwxc'](_0x3a483b['yPsOj'](_0x3a483b['jDqEw'],'This\x20'+_0x42ac54(0xcbe)+_0x42ac54(0x442)+_0x42ac54(0x89d)+_0x42ac54(0xdf4)+_0x42ac54(0x72f)+'pt\x20IS'+_0x42ac54(0xd83)+_0x42ac54(0x8ca)+_0x42ac54(0x9f8)+'runni'+_0x42ac54(0xe03)+'\x20the\x20'+_0x42ac54(0x7b9)+_0x42ac54(0x7ee)),_0x42ac54(0xa98)+_0x42ac54(0x9db)+_0x42ac54(0x44e)+'g\x20sus'+_0x42ac54(0x64b)+'\x20are:'+'\x0a\x0a'),_0x3a483b['QNMXm'])+(_0x42ac54(0xcd7)+_0x42ac54(0x916)+_0x42ac54(0x29f)+_0x42ac54(0xe45)+'t\x20bee'+'n\x20rel'+_0x42ac54(0xe28)+_0x42ac54(0xdee)+'e\x20ins'+_0x42ac54(0x5aa)+'ng.\x0a')+('\x20\x203.\x20'+_0x42ac54(0x7d8)+_0x42ac54(0x70f)+_0x42ac54(0xdc6)+_0x42ac54(0xdb5)+_0x42ac54(0xb86)+'r.js\x20'+_0x42ac54(0xcc6)+_0x42ac54(0x7f8)+_0x42ac54(0x2ac)+_0x42ac54(0x2da)+_0x42ac54(0x739)+_0x42ac54(0xd2f)),_0x42ac54(0x4fd)+_0x42ac54(0x84d)+_0x42ac54(0x963)+'—\x20two'+'\x20copi'+_0x42ac54(0x341)+'\x20UWMK'+_0x42ac54(0x8d1)+_0x42ac54(0xb6a)+'h\x20Web'+_0x42ac54(0x21f)+_0x42ac54(0xa09)+'nstan'+_0x42ac54(0xd35)+_0x42ac54(0x2b6)),'Reloa'+_0x42ac54(0xe4f)+'\x20game'+'\x20page'+_0x42ac54(0x83c)+'\x20and\x20'+_0x42ac54(0x684)+_0x42ac54(0x21a)+_0x42ac54(0x577)+_0x42ac54(0x41f)+_0x42ac54(0x8fa));continue;}break;}}}}else{var _0x4b0c71=_0x2d049e['Photo'+_0x42ac54(0x9c3)+'orkSy'+'nc']||{};if(!_0x583fd5[_0x42ac54(0x227)](_0x4b0c71)['lengt'+'h'])return![];return!!_0x16a2b0[_0x42ac54(0x4b2)](_0x2dee11);}}function _0x161673(_0x2f64ca,_0x36cc57,_0x3fe6c5){var _0x49d89e=_0xe93fad,_0x58b6ae=_0x16a2b0[_0x49d89e(0x416)](_0x4a7ad7);if(!_0x58b6ae||_0x16a2b0[_0x49d89e(0x958)](_0x2f64ca,0x3*0x7fa+0x65*-0x56+-0x100*-0xa)||_0x16a2b0['jTCOe'](_0x16a2b0[_0x49d89e(0x2ae)](_0x2f64ca,0x1*0x4a8+-0x6ab*-0x1+-0xb4f),_0x58b6ae['byteL'+'ength']))return![];try{switch(_0x36cc57){case'u8':case'i8':_0x58b6ae[_0x49d89e(0xafc)+_0x49d89e(0x59a)](_0x2f64ca,_0x3fe6c5&-0x2489+-0xb27*-0x1+-0x8cb*-0x3);break;case _0x16a2b0['UAiBB']:case _0x16a2b0[_0x49d89e(0xd47)]:_0x58b6ae['setIn'+_0x49d89e(0xa9d)](_0x2f64ca,_0x16a2b0[_0x49d89e(0x335)](_0x3fe6c5,-0x2029*0x1+-0xe2f+0x8*0x5cb),!![]);break;case'i32':case'u32':_0x58b6ae[_0x49d89e(0x948)+_0x49d89e(0x310)](_0x2f64ca,_0x3fe6c5|-0x187b+-0x493+0x1d0e,!![]);break;case _0x49d89e(0x2e8):_0x58b6ae[_0x49d89e(0x80f)+'oat32'](_0x2f64ca,_0x3fe6c5,!![]);break;default:_0x58b6ae['setIn'+_0x49d89e(0x310)](_0x2f64ca,_0x16a2b0['MJywr'](_0x3fe6c5,0x21da+-0x4b8*-0x3+-0x3002),!![]);}return!![];}catch(_0x4bd157){return![];}}var _0x2bb749={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':'i32'},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x5d7d4b(_0x3078ed){var _0x3828af=_0xe93fad,_0x4f4833='';for(var _0x1262ee=-0x973+-0xac5*-0x1+-0x152;_0x16a2b0[_0x3828af(0xb52)](_0x1262ee,_0x3078ed[_0x3828af(0x516)+'h']);_0x1262ee++){var _0x2980eb=_0x3078ed[_0x1262ee]['toStr'+_0x3828af(0xc36)](-0x1428+0x24fb+0x7*-0x265);_0x4f4833+=(_0x2980eb['lengt'+'h']<0x19dd+0x12ff+0x2cda*-0x1?'0':'')+_0x2980eb;}return _0x4f4833;}function _0x44c518(_0x56c6b4,_0x72ad22,_0x14804b){var _0x3dd468=_0xe93fad,_0x2ee227={'EyzJN':'bare\x20'+'game\x20'+'bindi'+'ng'};if(_0x3dd468(0xa3a)===_0x16a2b0['BDlZF']){var _0x47c6b7=_0x4a7ad7();if(!_0x47c6b7)return _0x2bc082['faile'+'d']++,_0x2bc082[_0x3dd468(0x781)+_0x3dd468(0x60e)]=_0x2bc082['lastE'+_0x3dd468(0x60e)]||'no\x20HE'+_0x3dd468(0xba7)+_0x3dd468(0xb71)+'ty\x20in'+_0x3dd468(0x7bc)+_0x3dd468(0x679)+'\x20reac'+'hable'+_0x3dd468(0xc52)+_0x3dd468(0xa67)+_0x3dd468(0x72a)+_0x3dd468(0x556)+_0x3dd468(0xe13)+_0x3dd468(0xdcc)+_0x3dd468(0x844)+_0x3dd468(0xa7d)+'\x20glob'+'al',null;if(_0x16a2b0[_0x3dd468(0xb81)](_0x72ad22,-0x467+0x22e1+-0x1e7a)||_0x72ad22+_0x14804b>_0x47c6b7[_0x3dd468(0x88c)+_0x3dd468(0xb9e)]){if(_0x3dd468(0x611)!==_0x3dd468(0x6a1))return _0x2bc082[_0x3dd468(0xe1e)+'d']++,_0x2bc082[_0x3dd468(0x781)+'rror']=_0x2bc082['lastE'+_0x3dd468(0x60e)]||_0x16a2b0['GyxZS'](_0x16a2b0['GyxZS'](_0x3dd468(0xcb6)+'ss\x200x',(_0x56c6b4+_0x72ad22)[_0x3dd468(0x5f3)+_0x3dd468(0xc36)](-0x174+0x1*-0x1456+0x15da))+_0x16a2b0[_0x3dd468(0x8dd)],_0x47c6b7[_0x3dd468(0x88c)+'ength']['toStr'+_0x3dd468(0xc36)](0xe7f+-0xb92*0x1+-0x2dd)),null;else _0x22cd7d=_0x1eb9ad['fwd'][0x9*-0xa3+-0x8c5*0x3+0x200a],_0x23efd5=_0xcb9782[_0x3dd468(0x5a2)][-0x5*-0x182+-0xb7*-0x35+0x6*-0x792],_0x258434=_0x27a501[_0x3dd468(0x5a2)][-0xaf6+-0x1228+-0x3a4*-0x8],_0x56f2fe=_0x4bc8f5['right'][-0x1*0x449+0xfef+-0xba6],_0x932db4=_0x12c63b[_0x3dd468(0x41c)][-0x1032+0xc*-0x1a7+0x17*0x191],_0x39d5fe=_0x5d41d2[_0x3dd468(0x41c)][-0x1d3a*0x1+-0x257*-0x9+0x82d],_0x52fa71=_0x319a74['up'][-0x9ed+-0x8a6+0x1293],_0xaa852f=_0x19c28a['up'][0xfe2+0x37*0x4f+0x122*-0x1d],_0x1df4d5=_0x453570['up'][-0x1*-0x1dd1+-0x1*0x2415+0x646];}try{if(_0x16a2b0['FgRcT'](_0x3dd468(0x926),_0x3dd468(0x926))){var _0x3d9af9=new Uint8Array(_0x14804b);for(var _0x1f2c9d=0x16e4+0x20bf+-0x37a3;_0x1f2c9d<_0x14804b;_0x1f2c9d++)_0x3d9af9[_0x1f2c9d]=_0x47c6b7['getUi'+'nt8'](_0x16a2b0['qDCax'](_0x56c6b4,_0x72ad22)+_0x1f2c9d);return _0x2bc082['ok']++,_0x3d9af9;}else{var _0x4194e0=_0x16a2b0[_0x3dd468(0x82a)](_0xd045bc);if(!_0x4194e0)return null;return{'ptr':'0x'+_0x4194e0['ptr'][_0x3dd468(0x5f3)+_0x3dd468(0xc36)](0x1c6e+0x331+0x3*-0xa85),'feet':_0x4194e0[_0x3dd468(0x954)],'eye':_0x4194e0['eye'],'posAt':_0x4194e0['posAt'],'copies':_0x4194e0['copie'+'s'],'cluster':_0x4194e0['clust'+'er'],'eyeHeight':_0x3640ea,'pitch':_0x4194e0['pitch'],'yaw':_0x4194e0['yaw'],'reach':_0x4194e0[_0x3dd468(0x5f6)]};}}catch(_0x38ec5a){return _0x16a2b0[_0x3dd468(0x410)](_0x3dd468(0xbac),_0x16a2b0[_0x3dd468(0x87d)])?(_0x2bc082['faile'+'d']++,_0x2bc082[_0x3dd468(0x781)+_0x3dd468(0x60e)]=_0x2bc082['lastE'+'rror']||String(_0x38ec5a&&_0x38ec5a[_0x3dd468(0x6b5)+'ge']||_0x38ec5a)[_0x3dd468(0x616)](0x1*0xfeb+0x1*0x18d7+-0x28c2,0x136e+0x1d08+-0x1*0x2ffe),null):(_0x4b28ac[_0x3dd468(0x700)+'e']=_0x2ee227[_0x3dd468(0x447)],_0x2d467a);}}else _0x292d67++,_0x1c0d5e[_0x3dd468(0xbcc)]=!![];}function _0x32b6fa(_0x32ca1d,_0x21e42e,_0x2307ad){var _0x831f77=_0xe93fad,_0x50550b=_0x2bb749[_0x2307ad],_0xba1f37=_0x44c518(_0x32ca1d,_0x21e42e,_0x50550b[_0x831f77(0x440)]);if(!_0xba1f37)return null;var _0xafcbb6=new DataView(_0xba1f37[_0x831f77(0xa76)+'r'],_0xba1f37[_0x831f77(0xca4)+'ffset'],_0xba1f37[_0x831f77(0x88c)+_0x831f77(0xb9e)]),_0x54ffed=_0xafcbb6[_0x831f77(0xd7c)+'t32'](_0x50550b[_0x831f77(0x203)],!![]),_0xe0d4b4=_0xafcbb6[_0x831f77(0xd7c)+_0x831f77(0x310)](_0x50550b[_0x831f77(0xd4e)+'n'],!![]),_0x4261a9=_0xafcbb6[_0x831f77(0xe06)+_0x831f77(0x59a)](_0x50550b['inite'+'d'])&-0x1c90*0x1+-0x14de+0x1*0x316f,_0x4ca2d8=_0x2307ad===_0x831f77(0x385)?_0xafcbb6['getFl'+'oat32'](_0x50550b['fake'],!![]):_0x2307ad===_0x831f77(0x9b9)?_0xafcbb6[_0x831f77(0xd7c)+_0x831f77(0x310)](_0x50550b['fake'],!![]):_0xafcbb6[_0x831f77(0xe06)+'nt8'](_0x50550b[_0x831f77(0x551)]),_0x16ba3c=_0x16a2b0[_0x831f77(0x793)](_0xafcbb6[_0x831f77(0xe06)+_0x831f77(0x59a)](_0x50550b[_0x831f77(0x93e)+'e']),-0x1*0x1b83+0x4*0x643+0x2*0x13c);return{'keyAtOffset0':_0x54ffed,'hidden':_0xe0d4b4,'inited':_0x4261a9,'fake':_0x4ca2d8,'act':_0x16ba3c,'hex':_0x5d7d4b(_0xba1f37),'alt':_0x2307ad===_0x831f77(0x9b9)?_0xe0d4b4^(_0x4ca2d8|0x1d94+-0xef6+-0x2*0x74f):null};}function _0x1e46e0(_0x4338bc,_0x14732d,_0x4b3fef){var _0x48c0f2=_0xe93fad;if(_0x4338bc===_0x48c0f2(0x385))return _0xc17a0e(_0x14732d^_0x4b3fef);if(_0x4338bc===_0x48c0f2(0x9b9))return _0x14732d^_0x4b3fef|0xa38+-0x1*-0xe1b+0x1df*-0xd;return(_0x16a2b0['WKMRA'](_0x14732d,_0x4b3fef)&0x1d*-0xb9+-0x3b*-0x2c+0xbd0)!==0x5f3*0x1+-0x1*-0x97f+-0x7b9*0x2?0x853+-0x12e9*0x1+-0xa97*-0x1:0xf39+-0x180f+0xae*0xd;}function _0x448585(_0x477f69,_0x3fbfad,_0x3aa846){var _0x451f24=_0xe93fad,_0x1819ba=(_0x451f24(0xdaf)+_0x451f24(0xac1)+_0x451f24(0x764)+_0x451f24(0xc84)+_0x451f24(0xacb)+'|10|1'+_0x451f24(0xd27))[_0x451f24(0x388)]('|'),_0x2fc975=0x1486+0x23e1+-0x3867;while(!![]){switch(_0x1819ba[_0x2fc975++]){case'0':var _0x580470=_0x16a2b0['Rigko'](_0x3b9fd4,_0x16a2b0[_0x451f24(0x756)](_0x477f69,_0x3fbfad)+_0x278934['key'],'u8');continue;case'1':if(!_0x278934)return null;continue;case'2':var _0xdfdcdc=_0x16a2b0[_0x451f24(0xb80)](_0x3b9fd4,_0x477f69+_0x3fbfad+_0x278934[_0x451f24(0x486)+'d'],'u8');continue;case'3':_0xdfdcdc=(_0xdfdcdc||-0x12dd+0x14db+-0xaa*0x3)&-0xaca+-0x14e9+0x1fb4;continue;case'4':var _0xc6b5e2=_0x3b9fd4(_0x16a2b0[_0x451f24(0x87b)](_0x16a2b0['wJcgn'](_0x477f69,_0x3fbfad),_0x278934[_0x451f24(0x93e)+'e']),'u8');continue;case'5':_0x3b6725|=0x2644+-0x154*0xc+-0x2*0xb2a;continue;case'6':_0xc6b5e2&=-0x21f0+0x34f*0x3+-0x2*-0xc02;continue;case'7':if(_0x580470===undefined||_0x16a2b0[_0x451f24(0xafa)](_0x3b6725,undefined)||_0x16a2b0[_0x451f24(0x3eb)](_0x1dafdb,undefined)||_0x16a2b0['FkpBJ'](_0xc6b5e2,undefined))return null;continue;case'8':_0x580470&=-0x1175+0xc60+0x614;continue;case'9':var _0x3b6725=_0x3b9fd4(_0x16a2b0[_0x451f24(0x7ad)](_0x477f69+_0x3fbfad,_0x278934['hidde'+'n']),_0x451f24(0x97b));continue;case'10':var _0x163a1c;continue;case'11':var _0x278934=_0x2bb749[_0x3aa846];continue;case'12':return{'real':_0x163a1c,'fake':_0x1dafdb,'act':_0xc6b5e2,'init':_0xdfdcdc,'key':_0x580470,'hidden':_0x3b6725};case'13':if(_0x16a2b0['IHpjw'](_0x3aa846,_0x16a2b0[_0x451f24(0x86f)]))_0x163a1c=_0xc17a0e(_0x3b6725^_0x580470);else{if(_0x3aa846===_0x16a2b0[_0x451f24(0x4e5)])_0x163a1c=_0x16a2b0[_0x451f24(0xbc8)](_0x3b6725,_0x580470)|-0x31*0x6d+0x86d+0xc70;else _0x163a1c=_0x16a2b0[_0x451f24(0x793)](_0x16a2b0[_0x451f24(0x98a)](_0x3b6725,_0x580470),0x1bd6+0x1482+-0x2f59)!==-0x1ce9+0x11*0x148+0x721?-0x3*-0x8c6+0x10cc+-0x2b1d:0x9e1+-0xf38+0x1*0x557;}continue;case'14':var _0x1dafdb=_0x3b9fd4(_0x477f69+_0x3fbfad+_0x278934[_0x451f24(0x551)],_0x3aa846==='obfF'?_0x451f24(0x2e8):_0x16a2b0['KqRpK'](_0x3aa846,_0x16a2b0['zQpjX'])?_0x16a2b0['NSaqT']:'u8');continue;}break;}}function _0x3db94c(_0x348709,_0x3424fe,_0x4fa4a6,_0x4e74b3){var _0x538c03=_0xe93fad,_0x2447c9=('0|7|1'+_0x538c03(0xdb9)+'4|5|3')[_0x538c03(0x388)]('|'),_0x5e9ef3=0x1e07+0x6a*-0x2f+-0x21d*0x5;while(!![]){switch(_0x2447c9[_0x5e9ef3++]){case'0':var _0x2c4bd2=_0x2bb749[_0x4fa4a6];continue;case'1':if(!_0xdc41c6)return![];continue;case'2':var _0x49ce26=_0x2c4bd2['keyTy'+'pe']==='u8'?_0x48a28d['getUi'+_0x538c03(0x59a)](_0x2c4bd2[_0x538c03(0x203)]):_0x48a28d['getIn'+_0x538c03(0x310)](_0x2c4bd2[_0x538c03(0x203)],!![]);continue;case'3':return _0x161673(_0x348709+_0x3424fe+_0x2c4bd2['hidde'+'n'],_0x16a2b0[_0x538c03(0xde5)],_0x55b38c^_0x49ce26)&&_0x16a2b0[_0x538c03(0x2ff)](_0x161673,_0x16a2b0[_0x538c03(0x88a)](_0x16a2b0['HwHoi'](_0x348709,_0x3424fe),_0x2c4bd2[_0x538c03(0x551)]),_0x16a2b0[_0x538c03(0x50b)](_0x4fa4a6,_0x16a2b0[_0x538c03(0x86f)])?'f32':_0x4fa4a6===_0x538c03(0x9b9)?_0x538c03(0x97b):'u8',_0x4fa4a6==='obfF'?_0x4e74b3:_0x4fa4a6===_0x538c03(0x9b9)?_0x16a2b0[_0x538c03(0x938)](_0x4e74b3,-0x120a+-0x1ecb+0x1b*0x1cf):_0x4e74b3?-0x3f9*-0x1+0x4c7*0x1+-0x8bf*0x1:0x1f*0x53+-0x1f49+-0x4*-0x54f)&&_0x161673(_0x16a2b0['ikNMz'](_0x16a2b0[_0x538c03(0xdeb)](_0x348709,_0x3424fe),_0x2c4bd2['activ'+'e']),'u8',0x26de+-0x637+0x283*-0xd);case'4':var _0x55b38c;continue;case'5':if(_0x4fa4a6==='obfF')_0x55b38c=_0x16a2b0['rrzmp'](_0x3c9901,_0x4e74b3);else{if(_0x4fa4a6===_0x538c03(0x9b9))_0x55b38c=_0x16a2b0[_0x538c03(0x3da)](_0x4e74b3,-0x51c+0x1089+-0xb6d);else _0x55b38c=(_0x4e74b3?-0x1915+-0xc*0xf8+0x24b6:-0x1eb*0x2+0x3f*-0x3b+0x125b)&-0xd*0xb+-0x14*-0x135+-0x1696;}continue;case'6':var _0x48a28d=new DataView(_0xdc41c6['buffe'+'r'],_0xdc41c6['byteO'+_0x538c03(0x315)],_0xdc41c6['byteL'+_0x538c03(0xb9e)]);continue;case'7':var _0xdc41c6=_0x44c518(_0x348709,_0x3424fe,_0x2c4bd2[_0x538c03(0x440)]);continue;}break;}}var _0xdd6062={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0xc02e6=-0x1d*0xb5+-0x1708+0x2b89+0.03,_0x23eca4=-0xfb7+0x14*0xe9+-0x27b,_0x10b4b7={},_0x5c5c3d=0x19c*-0x2+-0x3*0xc2c+0x9ef*0x4,_0x633a1d=[],_0x1e4c35=[];function _0x3d5f14(_0x5a72cc){var _0x2c5455=_0xe93fad,_0x2d1d9b={'PiPIE':function(_0x396ddf,_0xc4009b){return _0x16a2b0['bBXBf'](_0x396ddf,_0xc4009b);},'pXnQk':'addre'+'ss\x200x'},_0x9b8a13=_0x41d8ba[_0x2c5455(0xb1f)+_0x2c5455(0xc4b)+_0x2c5455(0x313)]||[],_0x3c9849=[];_0x1e4c35=[],_0x633a1d=[];for(var _0x173c69=0x2295+-0x1c*0x15d+0x397;_0x173c69<_0x9b8a13['lengt'+'h'];_0x173c69++){if(_0x16a2b0[_0x2c5455(0x27c)](_0x2c5455(0xddb),_0x16a2b0['QsJNL'])){var _0x241fb3=_0x9b8a13[_0x173c69][0x20fd+-0x158*0x12+-0x8cd];if(_0x9b8a13[_0x173c69][-0x357*0x3+-0x20dc+-0x2*-0x1571]!==_0x16a2b0[_0x2c5455(0x86f)])continue;var _0x139b79=_0x32b6fa(_0x5a72cc,_0x241fb3,_0x16a2b0[_0x2c5455(0x86f)]);if(!_0x139b79||_0x139b79[_0x2c5455(0x486)+'d']!==-0x4*-0x9ad+0x7*-0x574+-0x87)continue;var _0x40c6b6=_0x1e46e0(_0x16a2b0[_0x2c5455(0x86f)],_0x139b79[_0x2c5455(0xd4e)+'n'],_0x139b79[_0x2c5455(0x73a)+'Offse'+'t0']);if(typeof _0x40c6b6!=='numbe'+'r'||!isFinite(_0x40c6b6))continue;var _0x28fd7b=_0x5a72cc+':'+_0x241fb3,_0x2a2b8f=_0x10b4b7[_0x28fd7b];if(!_0x2a2b8f||_0x16a2b0[_0x2c5455(0xa3e)](_0x40c6b6,_0x2a2b8f['lastW'+_0x2c5455(0xb14)+'n']))_0x2a2b8f=_0x10b4b7[_0x28fd7b]={'base':_0x40c6b6,'lastWritten':null};var _0x2d46ca=_0x2a2b8f[_0x2c5455(0xa1b)],_0x733f4d=Math[_0x2c5455(0x264)](_0x2d46ca);if(_0x733f4d<-0x1fe1+0x15f5+0x9ec+0.0001||_0x733f4d>0x2ff08+0xfbfb*-0x2+0x7f8e){_0x1e4c35[_0x2c5455(0x8f2)]({'o':_0x241fb3,'v':_0x40c6b6,'why':_0x2c5455(0x52f)+_0x2c5455(0x9a8)+'e'});continue;}_0x3c9849[_0x2c5455(0x8f2)]({'o':_0x241fb3,'v':_0x40c6b6,'a':_0x733f4d,'base':_0x2d46ca,'key':_0x28fd7b,'st':_0x2a2b8f});}else{if(_0x2c5583[_0x2c5455(0xe0f)]&&_0x5129c3['top']!==_0x4ec945)_0x2a3908[_0x2c5455(0xe0f)]['postM'+'essag'+'e'](_0x5ef708,'*');}}var _0x47e609=[];for(var _0x7fd7a1=0x334+0x13f3*-0x1+0x10bf;_0x16a2b0['cTxly'](_0x7fd7a1,_0x3c9849['lengt'+'h']);_0x7fd7a1++){var _0x3e4054=_0x3c9849[_0x7fd7a1]['a'],_0x4e6921=null;for(var _0x44ef11=0xfb3+-0x13e1+0x42e;_0x44ef11<_0x47e609[_0x2c5455(0x516)+'h'];_0x44ef11++){if(_0x2c5455(0xb79)!==_0x16a2b0[_0x2c5455(0x6e3)]){var _0x567e6a=_0x16a2b0['RixDz'](_0x47e609[_0x44ef11]['mean'],_0x3e4054);if(_0x16a2b0[_0x2c5455(0x645)](_0x567e6a,_0x16a2b0['RFFre'](-0x3db+-0x3bf+-0x3*-0x289,_0xc02e6))&&_0x567e6a<-0x1b43+0x1bbc+0x1e*-0x4+_0xc02e6){_0x4e6921=_0x47e609[_0x44ef11];break;}}else return _0x22e41f[_0x2c5455(0xe1e)+'d']++,_0xd206f8[_0x2c5455(0x781)+_0x2c5455(0x60e)]=_0x223ef7[_0x2c5455(0x781)+_0x2c5455(0x60e)]||_0x2d1d9b[_0x2c5455(0x8d5)](_0x2d1d9b[_0x2c5455(0x3fc)]+(_0x1206d2+_0x26f7ec)[_0x2c5455(0x5f3)+'ing'](-0xf6f+-0x9b3+0x1932)+(_0x2c5455(0xb5d)+'\x20heap'+_0x2c5455(0xb8f)+'0x'),_0x4daf65[_0x2c5455(0x88c)+_0x2c5455(0xb9e)]['toStr'+_0x2c5455(0xc36)](0x9d4+0xa63*-0x2+0x1*0xb02)),null;}!_0x4e6921&&(_0x16a2b0['SncKC'](_0x16a2b0[_0x2c5455(0x629)],'JtlGC')?(_0x4d6a32['hasMo'+_0x2c5455(0x2bb)]=![],_0x3723f4['heapU'+'8']=![],_0xd858c8[_0x2c5455(0x6a4)+'ytes']=-0x9*-0x1e7+0x1*-0x1c32+-0x9*-0x13b):(_0x4e6921={'mean':_0x3e4054,'members':[]},_0x47e609['push'](_0x4e6921)));_0x4e6921[_0x2c5455(0xa90)+'rs'][_0x2c5455(0x8f2)](_0x3c9849[_0x7fd7a1]),_0x4e6921[_0x2c5455(0x76c)]=-0x31a*-0x5+0x28f*0x1+-0x1*0x1211;for(var _0x2d53b8=0x1*-0x2383+0x1ba7*0x1+0x7dc;_0x2d53b8<_0x4e6921[_0x2c5455(0xa90)+'rs'][_0x2c5455(0x516)+'h'];_0x2d53b8++)_0x4e6921[_0x2c5455(0x76c)]+=_0x4e6921[_0x2c5455(0xa90)+'rs'][_0x2d53b8]['a'];_0x4e6921[_0x2c5455(0x76c)]/=_0x4e6921[_0x2c5455(0xa90)+'rs']['lengt'+'h'];}var _0x5cb750=[];for(var _0x50f307=0x1aed*0x1+0x6ad*-0x2+-0x8b*0x19;_0x50f307<_0x47e609['lengt'+'h'];_0x50f307++){if(_0x47e609[_0x50f307]['membe'+'rs'][_0x2c5455(0x516)+'h']>=_0x23eca4)_0x5cb750[_0x2c5455(0x8f2)](_0x47e609[_0x50f307]);}if(!_0x5cb750[_0x2c5455(0x516)+'h']){_0x1e4c35['push']({'o':-(-0x1*0x106e+-0x14ec+0x255b),'v':0x0,'why':_0x16a2b0[_0x2c5455(0x349)](_0x2c5455(0x846)+_0x2c5455(0xd11)+'f\x20'+_0x23eca4,_0x16a2b0[_0x2c5455(0x8f4)])});return;}var _0x14812a=_0x5cb750[0x10*0x73+0x1*0x1d5+-0x1*0x905][_0x2c5455(0x76c)];for(var _0x51469a=-0xe5c+-0x5cf*0x1+0x1*0x142b;_0x51469a<_0x5cb750['lengt'+'h'];_0x51469a++)if(_0x5cb750[_0x51469a]['mean']<_0x14812a)_0x14812a=_0x5cb750[_0x51469a]['mean'];var _0x54e7dd=_0x14812a*(-0x1099+-0x8db+-0xb5*-0x24+0.5);for(var _0x3b295d=0x1c67+0x5*-0x80+0x13*-0x15d;_0x16a2b0[_0x2c5455(0x951)](_0x3b295d,_0x47e609[_0x2c5455(0x516)+'h']);_0x3b295d++){if(_0x16a2b0[_0x2c5455(0x9e5)](_0x16a2b0['BivYb'],_0x2c5455(0xb9c))){if(_0x47e609[_0x3b295d][_0x2c5455(0xa90)+'rs']['lengt'+'h']>=_0x23eca4)continue;for(var _0x17c592=-0x13cb+0x2439+-0x57a*0x3;_0x17c592<_0x47e609[_0x3b295d][_0x2c5455(0xa90)+'rs']['lengt'+'h'];_0x17c592++){_0x1e4c35['push']({'o':_0x47e609[_0x3b295d][_0x2c5455(0xa90)+'rs'][_0x17c592]['o'],'v':_0x47e609[_0x3b295d]['membe'+'rs'][_0x17c592]['v'],'why':'singl'+_0x2c5455(0xce2)});}}else typeof _0x4350a4===_0x16a2b0['XuifF']?_0x2e02ba=_0x169816(_0x5a7c55):_0x14fbe5=_0x21f901(_0x5f439c,_0x736d22||-0x161d+-0x1d11*0x1+0x3360);}for(var _0x4f4194=0x1593+-0x112c+0x31*-0x17;_0x4f4194<_0x5cb750[_0x2c5455(0x516)+'h'];_0x4f4194++){if(_0x16a2b0[_0x2c5455(0x340)]('GWHzj','GWHzj'))_0x4f54ce();else{var _0x37e973=_0x5cb750[_0x4f4194]['membe'+'rs'];for(var _0x3bb8d3=0x1*-0x6c1+-0x1a7*0x7+0x1*0x1252;_0x16a2b0['AFyDw'](_0x3bb8d3,_0x37e973[_0x2c5455(0x516)+'h']);_0x3bb8d3++){var _0x158b68=_0x37e973[_0x3bb8d3];if(_0x158b68['a']<_0x54e7dd){_0x1e4c35['push']({'o':_0x158b68['o'],'v':_0x158b68['v'],'why':'below'+_0x2c5455(0x3c5)+'r\x20'+_0x54e7dd[_0x2c5455(0xb65)+'ed'](0x1cef+-0x863+-0x148a)});continue;}var _0x4fa9c3=_0x158b68[_0x2c5455(0xa1b)]*_0xdd6062['facto'+'r'];if(_0x16a2b0['yVjGU'](_0x3db94c,_0x5a72cc,_0x158b68['o'],_0x2c5455(0x385),_0x4fa9c3)){if(_0x2c5455(0x301)!=='zzKat')_0x158b68['st'][_0x2c5455(0x811)+_0x2c5455(0xb14)+'n']=Math['froun'+'d'](_0x4fa9c3),_0x5c5c3d++,_0x633a1d[_0x2c5455(0x8f2)](_0x16a2b0[_0x2c5455(0x715)]('0x',_0x158b68['o']['toStr'+_0x2c5455(0xc36)](-0x2f*-0xd1+-0x153f+-0x1110)));else{if(_0x2f1ae7['el'])_0x5143ac['el'][_0x2c5455(0x8d9)][_0x2c5455(0x957)+'ay']=_0x16a2b0[_0x2c5455(0xe11)];return;}}}}}}var _0x41d8ba={'FPScontroller':[[-0x1*-0x2386+-0xcc*0x11+-0x1*0x15ea,'obfF'],[0x7c*-0x1+0x9e6+-0x942,_0xe93fad(0x385)],[-0x1a0+-0x17e8+0x339*0x8,_0xe93fad(0x385)],[-0x269f+0x21d7*0x1+0x520,_0x16a2b0['cTFAw']],[0x3*-0x45f+-0x1*-0x7b4+0x5d9,_0xe93fad(0x385)],[-0x1a2e+-0x1045+0x2afb,_0xe93fad(0x385)],[0x306+0x24*0x2b+-0x872,'obfF'],[0xf1*0x17+0xc45+-0x2134,'obfB'],[-0x1cdd+-0x2*-0x565+0x12d7,_0xe93fad(0x385)],[-0x3b7+0x14a4+-0x1011*0x1,'i32'],[0x1c48+-0x20f9+0x591,'v3'],[-0x5a9*0x1+0xe1f+-0xa*0xc1,'u8'],[0x12ed+-0x8*-0x2+0x1*-0x120d,_0x16a2b0['cTFAw']],[-0x146c+0x2*-0xfd+0x176e,_0xe93fad(0x97b)],[-0x1b72+-0xe*0x266+0x3e12,'u8'],[-0x1247+-0x19c*-0x10+-0x669,_0x16a2b0[_0xe93fad(0xde5)]],[0x133e+-0x1ac7+0x5*0x1b9,'u8'],[-0x1*0x611+-0xc92+0x13b8,'u8'],[0x3*0x8f5+0x1*-0x109d+-0x926,'obfF'],[-0x1*0x1d7+-0x74b*-0x4+0x1*-0x1a21,_0xe93fad(0x385)],[-0x4c3*-0x7+-0x1070+-0xf99,_0xe93fad(0x2e8)],[0xfc9+-0x1d94+0xf1b,'f32'],[0x1*-0x95f+-0x4b*-0x38+-0x5b5,'v3'],[0x29b*0x1+0x205e+-0x1*0x2199,'v3'],[-0x8ec+-0xa91*0x3+-0x1*-0x2a0b,'f32'],[0x1582+0xfd6+-0x18*0x17f,_0xe93fad(0x2e8)],[-0xc80+-0xd44+0x1b4c,'u8'],[-0x3d*0x17+-0x1189+-0x624*-0x4,_0xe93fad(0x2e8)],[0x254f+-0x48d*0x1+-0x1f2a,'v3'],[-0x43c*-0x8+-0x1237*-0x2+-0x44aa,'u8'],[-0x1*0x1085+0x6dd+0x2*0x5ae,_0x16a2b0[_0xe93fad(0x7da)]],[-0x1*0x209c+-0x395*-0x1+0x1ebf,_0xe93fad(0x2e8)],[0x1948*-0x1+0x261d+-0xb19,'u8'],[-0x2532+-0x537+-0x2*-0x1613,'u8'],[0x155+-0xdd5*0x2+-0x4f*-0x5b,'obfF'],[0x1*0x16e8+-0x16b7+0x1a7,'f32'],[0x1*0x7f7+-0x170d+0x3*0x5a6,'u8'],[0x1628+0x2*-0x1208+0xfc8,'obfF'],[0x2519*0x1+0xd*0x12e+-0x1*0x3277,'v3'],[0x9a1+-0x2e*0xd9+0x1f65,_0x16a2b0[_0xe93fad(0x885)]],[0x21e5+-0x1d*0xdf+-0x68a,_0xe93fad(0x2e8)],[0x24b6+0x2501*-0x1+0x267,_0xe93fad(0x2e8)],[0x4*0x397+-0xa95+-0x17b,_0x16a2b0['rMBXt']],[-0x1*0x1507+-0x18c6+0x301d,_0x16a2b0[_0xe93fad(0x7da)]],[-0x9f7+-0x4*0x71f+0x28c7,_0x16a2b0[_0xe93fad(0x7da)]],[0x4*-0x137+0x2078+0x21*-0xc4,_0x16a2b0[_0xe93fad(0x7da)]],[0x2413*-0x1+0xb3a+0x1b35,'u8'],[0x90e+0xc12+-0x12c3,'u8'],[-0x292+0x15da+-0x1b1*0xa,'u8'],[-0x40f+0x3*-0x752+-0x1c65*-0x1,_0x16a2b0[_0xe93fad(0x7da)]],[-0xc3a+0x122b+-0x38d,'u8'],[0x149d+-0x20b8+-0x3a0*-0x4,'u8'],[0x1b9f+0x152c*0x1+-0x1*0x2e63,_0xe93fad(0x2e8)],[0x2579*0x1+-0x1a67+-0x36*0x29,_0x16a2b0['rMBXt']],[-0x1d5+0x6*-0x603+0x2857,_0x16a2b0['rMBXt']],[0xec7+0x4*0x71b+0x3*-0xd95,_0x16a2b0['rMBXt']],[0x20bf+0x3a1*0x1+-0x21e8,_0xe93fad(0x2e8)],[0x1632+-0x25e4+0x122e,_0x16a2b0[_0xe93fad(0x7da)]],[0x221+-0x39f*0x3+0xb3c*0x1,'f32'],[-0x1*0x2372+-0x9ae+0x2fa4,'v3'],[-0x134+0xf49+-0xb81,'u8'],[0x1cb8+-0xd62+-0x65f*0x2,'v3'],[-0x33*-0x31+-0x22*-0x4+-0x7a7*0x1,_0xe93fad(0x2e8)],[0xb*0x10d+0x1e9b*-0x1+0x15b8,'v3'],[0xbb2+0x1229+-0x1b23,_0x16a2b0[_0xe93fad(0x7da)]],[-0x214+-0x4f*0x37+-0x15c9*-0x1,_0xe93fad(0x2e8)],[0x11cb+-0x2364+0x1459,_0xe93fad(0x2e8)],[0xa*0x209+-0x1ee2+0x17*0x94,'u8'],[-0x1ba3+-0x1e5e+0x3cc6*0x1,'u8'],[0x1ea7+0x1d3d+-0x5*0xb6c,_0xe93fad(0x2e8)],[-0xa6*-0x7+0x1c9e+0x454*-0x7,_0xe93fad(0x2e8)],[-0xbde+-0x1f5*-0x8+-0x2e*0x5,'v3'],[-0x2*0xb2b+0xf*-0x1a3+-0x1*-0x31d3,'v3'],[0x35*-0x15+0x12d4+-0x147*0x9,'f32'],[-0x152f+0x22c5+0x21e*-0x5,'f32'],[-0x1d5d*0x1+0x12cc*-0x1+-0x18d*-0x21,'f32'],[-0xa55+-0x1af*0x11+0x29fc,'f32'],[0xada+0xd80+0x3*-0x71a,'v3'],[-0x47*0x17+-0x127*0x7+0x118a,'u8'],[0x1386+-0x252+-0xb*0x148,'v3'],[0x3a6+-0x2695+0x1*0x2617,_0x16a2b0[_0xe93fad(0xde5)]],[-0x2*0x937+0x623+0x6b*0x25,_0x16a2b0[_0xe93fad(0x7da)]],[-0x2409+0xdf0+0x1*0x1949,_0x16a2b0[_0xe93fad(0x7da)]],[0x1174+-0x2*-0x30a+-0x1454,_0x16a2b0[_0xe93fad(0x7da)]],[0x1*-0x21dd+-0x9*0x146+0x308f,'f32'],[0xde9+-0x26*-0x1f+-0xf43,'u8'],[0x23c3+0xab*0xf+-0x2a87,'u8'],[-0x1fb8+-0x1*-0x5b1+0x1*0x1d53,'u8'],[0x230e*0x1+0x6bd+-0x267e*0x1,'u8'],[-0x1ec2+-0x988*-0x4+-0xd0*0x5,'u8'],[-0x101c+0x20c5+-0xd59,_0x16a2b0[_0xe93fad(0x7da)]],[0x392*0x9+0xa0a+-0x26d8,_0xe93fad(0x2e8)],[0xf7a+-0x1702+-0x57*-0x20,_0x16a2b0['rMBXt']],[0x2286+0x7*0x39+0x1*-0x20b9,_0x16a2b0['rMBXt']],[-0x18e*-0x18+0x856+-0x2a46*0x1,_0xe93fad(0x2e8)],[-0x12a8+0x1c7a+-0x337*0x2,'u8'],[-0xfe*0x1c+-0x1b*0x57+0x1*0x285d,'f32'],[-0x15*0x8f+-0x4*0xe+0xf5f,'f32'],[-0x2*-0x3bf+-0x3e*0x18+0x1c2,'u8'],[0x2484+0x1a3*-0x10+-0x36e*0x2,'v3'],[0x386*0x1+-0x187f+0x187d,'v3'],[-0x1*-0x1f8a+-0x2*0xc56+0x1*-0x34e,'v3'],[-0x1*-0xcb7+0xb8a*0x1+-0x14a5,_0x16a2b0['rMBXt']],[-0x1714+-0x948+0x524*0x7,'f32'],[0x13d5+0x1*0x16bd+-0x3*0xcfa,_0xe93fad(0x2e8)],[-0xb83+0x1c65+0x1*-0xd3a,'v3'],[0xd3c*-0x1+0x1ee1+-0x53*0x2b,_0xe93fad(0x97b)],[-0x164*-0xe+0xcf+-0x108f,'u8'],[0x38*-0x8c+0x1*-0x1638+0x1*0x3894,_0x16a2b0[_0xe93fad(0xde5)]],[-0x14e*-0x13+0x146d+-0x2977*0x1,_0x16a2b0[_0xe93fad(0x7da)]],[0x1*-0x2624+0x394*-0x7+0x42f4,_0xe93fad(0x2e8)],[0x5*0x503+0x1865+0x2*-0x16d6,_0x16a2b0['rMBXt']],[-0x262f+0xbc3*-0x1+0x35be,_0xe93fad(0x2e8)],[-0x49*-0x15+-0x685+0x458,'v3'],[0x2260+-0x1*0x1e5+-0x1c9f,_0x16a2b0[_0xe93fad(0xde5)]],[0x124*0xe+0x95*0x2c+0x26*-0xfe,'u8'],[0x293*0x8+0x3*-0x4de+0x21d*-0x1,'u8'],[0x1*0x7b2+-0x14b*-0x1+-0x1*0x51b,'u8'],[0x57b+0x1*0xc2d+0x4*-0x371,_0xe93fad(0x2e8)],[0xf5a+0x13aa+-0x1f1c,_0x16a2b0['NSaqT']]],'HealthScript':[[-0xc*0x5+0x1*-0x1f1b+0x1faf*0x1,'u8'],[-0x1*0x245f+-0x1fe7*0x1+0xa*0x6dd,_0xe93fad(0x97b)],[-0x1ad1+-0xe81+0x29d2,_0x16a2b0[_0xe93fad(0x7da)]],[-0x1f91+0x11fc+0xe19,_0xe93fad(0x2e8)],[-0x1*-0x1b54+-0x2ba+-0x1812,_0x16a2b0[_0xe93fad(0x7da)]],[-0xd4*-0x13+0x7a0+0xb68*-0x2,_0x16a2b0[_0xe93fad(0x7da)]],[0xf*0x18d+-0xf56+0x1d*-0x41,_0x16a2b0['rMBXt']],[-0x1a3c+0x1*-0x162a+0x2*0x187d,_0x16a2b0['rMBXt']],[-0x825+-0x11a+0x1*0x9df,_0x16a2b0['NSaqT']],[0x8f1+0x1344*-0x1+0xaf7,_0x16a2b0[_0xe93fad(0xde5)]],[-0x10a*0x5+0x11*0x55+0x35*0x1,'u8'],[-0xa7*-0x1+0x4*0x4a2+-0x1286,'u8'],[0x38*-0x72+-0x89+0x1*0x1a23,'u8'],[0x7*0x65+0x2342+-0x255a,'u8'],[0x12bf+0x1660+-0x285f,'obfI'],[0x45*0x83+0x1*-0xe12+-0x1469,_0x16a2b0[_0xe93fad(0x4e5)]],[-0x1*-0x51f+0x9*-0x3e1+0x1eb2*0x1,'obfI'],[-0x291+-0x1*0x2a5+0x319*0x2,_0xe93fad(0x9b9)],[-0x1ff*0xd+0x260d+-0xb0a,_0xe93fad(0x9b9)],[-0xd54*-0x2+-0x239f+0xa1b*0x1,_0x16a2b0[_0xe93fad(0x885)]],[0x1*-0x15b6+-0xb9+0x1*0x179f,_0x16a2b0[_0xe93fad(0x86f)]],[-0x2*0x41b+-0x14bb+0x1e39,'f32'],[-0x105e+0xd46+-0x1*-0x464,'f32'],[-0x118a+0x30f+0x137*0xd,_0xe93fad(0x2e8)],[0x1a9d+-0xbb3*0x1+-0xd96,_0x16a2b0['rMBXt']],[0x1cf5+0x1*-0x172f+0x2*-0x235,'f32'],[0x2067+-0x722*-0x2+0x2d4b*-0x1,'v3'],[0x1e1f+-0x1*-0xb11+0x6a0*-0x6,_0x16a2b0['rMBXt']],[0x1a6f+0x15b*-0x1c+-0x23*-0x5f,_0xe93fad(0x2e8)],[0x5*0x6d7+0x21e4+0x4297*-0x1,'u8'],[-0xed*0x2a+-0x10c+-0x1*-0x297a,'u8'],[-0x1494+0x197a+-0x356,_0x16a2b0['NSaqT']]],'PlayerConfig':[],'WeaponManager':[[0xaf8+-0x239*-0x8+-0x1ca8,_0x16a2b0[_0xe93fad(0xde5)]],[-0x19e7+0x5*-0x21d+0x2494,_0xe93fad(0x97b)],[0x1a7b*0x1+0xd1*0x1+-0x1b2c,'u8'],[0x91d*-0x2+-0x284*-0x7+0xc2,_0x16a2b0[_0xe93fad(0xde5)]],[0xb*0x151+0xebb*0x2+-0x2b8d,'obfF'],[-0x7ee*-0x4+0x13*-0x17b+-0x31b,'f32'],[-0x22af+-0x1d6f+0x40a2,'i32'],[-0x2503+0x1fec+-0x59f*-0x1,'u8'],[-0x2389+0x1857+0xbbb,'u8'],[0x35b*0x3+0xeb3+0x9b*-0x28,_0xe93fad(0x97b)],[0x75b+0x8fe+-0xfc9,_0xe93fad(0x2e8)],[0x17bb+0xadc+0x3c7*-0x9,_0x16a2b0[_0xe93fad(0x7da)]],[-0x169*0x1+0x3c0+-0x1ab,_0xe93fad(0x97b)],[-0x40c+0x6f1*0x4+-0x16fc,'u8'],[-0x17*-0xcf+-0x16f0+0x533,_0x16a2b0[_0xe93fad(0x4e5)]],[-0x4*0x4+-0xcc4+0xdc4,_0x16a2b0[_0xe93fad(0x4e5)]],[-0x3f2+-0xea+0x2*0x2f0,'f32'],[-0x21*-0x49+-0x1d9+-0x688,_0xe93fad(0x2e8)],[0x1362+-0x6bb*0x3+0x1*0x1db,_0x16a2b0[_0xe93fad(0x7da)]],[0xd31+0x327*0x1+-0x7a0*0x2,_0xe93fad(0x2e8)],[0xb7*-0x2+-0x566+0x7f4,_0xe93fad(0x2e8)],[0xd*-0xf7+-0xe2*0x21+0x2ad5,'u8'],[-0x3be+-0x68*-0x58+-0x1ed6,_0xe93fad(0x9b9)],[0x304+0x23a3+-0x2567,_0xe93fad(0x9b9)],[0x131d+0x25ed+0x1bdb*-0x2,_0x16a2b0[_0xe93fad(0x4e5)]],[-0x1e7c+-0x1495+0x3479,_0xe93fad(0x46e)],[-0x982+0x1e44+0x134e*-0x1,_0xe93fad(0x46e)],[0x1df*-0x14+0x3*-0xcd+0x2953,_0x16a2b0['BKLEb']],[0xc08*-0x2+-0x19d0+0x336c,'obfB'],[0x6*0x511+0x389+-0x204b,_0x16a2b0[_0xe93fad(0x885)]],[-0xf5a+0x2d7*-0x2+0x16b8,_0x16a2b0[_0xe93fad(0x4e5)]],[0x371+0x1fb8+-0x215d,'i32'],[-0x160c+0x2e7*0x1+0x14f5*0x1,'u8'],[-0x3bf+-0xafb+0x108e,_0xe93fad(0x97b)],[0x262d+-0x35e*-0x5+-0x352b,_0xe93fad(0x97b)],[-0x11be+-0x1bd4+-0x2*-0x17c9,_0xe93fad(0x97b)],[0x12b5+-0x152+-0x1*0xf4f,'u8'],[0x12e*-0x21+0xa37+0x1ed3,'u8'],[0x77*-0x52+0x418+0x2423,'u8'],[-0xa39*-0x3+-0x197*0xf+-0x4b4,'u8'],[0x1*0x1a99+-0x17d*-0x11+0x31c7*-0x1,'u8'],[-0x17a4+0x1ad8*0x1+-0xe4,_0xe93fad(0x97b)],[-0xf*0x287+-0x14af+0x3cf0,'u8']],'GG_GameManager':[[-0x9*-0x3b0+0x56c+0x8*-0x4cf,'u8'],[-0x6*-0x146+0x16a7+-0xb*0x2bd,_0x16a2b0['rMBXt']],[-0x1d5c+0x2fb*-0x7+-0xa19*-0x5,'u8'],[0x3*-0x905+-0x4*0x1e0+0x22d4,'u8'],[-0x19b*0x3+0x2138+0x17*-0x139,_0x16a2b0['rMBXt']],[-0x3eb*0x9+0xc56+-0x4a5*-0x5,'f32'],[0x1fe7+-0x1e0a+-0x18d,_0xe93fad(0x97b)],[0x560+-0x709*-0x1+-0xc15,_0x16a2b0['NSaqT']],[0x3b5*0x7+-0x5*-0x7b8+-0x4033,'u8'],[0x4db+-0x6bb*0x5+0x1d40,'u8'],[0x243d+-0x9*0x301+-0x8bc,'f32'],[0x13d4+0x137*0x1+0x13*-0x115,'f32'],[-0x1cb4*-0x1+0xe4d*0x1+-0x2a71,_0xe93fad(0x97b)],[0x12a+0x181*-0x3+-0xf*-0x43,'u8'],[0x656*-0x4+0x3a*-0x9f+0x3e12,_0xe93fad(0x97b)],[-0x4f*-0xd+0x5f5*-0x4+-0x148d*-0x1,_0x16a2b0[_0xe93fad(0xde5)]],[-0xbd4*0x1+-0x1cd9+0x12f*0x23,_0xe93fad(0x97b)],[0x74b*-0x5+-0x1*0x1da5+-0x4*-0x10c1,_0x16a2b0[_0xe93fad(0x4e5)]],[0x1*0x2461+0x1497+-0x37fc,'obfI'],[-0x11ec+-0xf4*0x19+0x2ad0,_0x16a2b0['zQpjX']],[-0x1a5c+-0x44c+0x1fd4,'u8'],[0x1f*0x135+0x1758+-0x3b93,'i32'],[0x1*-0xdd+0x678+-0x437,'u8'],[0x2d+0x1*-0x1e5d+0x2*0xfd0,_0x16a2b0[_0xe93fad(0x7da)]],[0x224f+0xf0e+-0x2fdd,'u8'],[0x94*-0x2+0x1751+0x14a1*-0x1,'u8'],[-0x1*0xaba+0x2*-0x47+-0x1*-0xcec,'u8'],[-0xf17+0x61e+0xaa1,'i32'],[0x1501+0x39*0xac+0x39a1*-0x1,_0x16a2b0[_0xe93fad(0x7da)]],[0x2*0x373+0x1be*0x16+0x2b8a*-0x1,'u8'],[0x10e6+0x122*0xb+-0x1bab,'u8'],[-0xd9*0x29+-0x2e5+0x1*0x275e,_0x16a2b0[_0xe93fad(0xde5)]],[-0x377+0x70c+-0x1d9,'i32'],[0x1e42+0x25*-0xd+-0x1aa1,_0xe93fad(0x2e8)],[-0x193e+-0x71e+0x2220,_0xe93fad(0x97b)],[-0x12e7+-0x41f+0x18ce,'f32'],[0x4*-0x3b3+-0x2151+0x31e9,_0xe93fad(0x97b)],[-0x23e9+0x2a*-0xdd+-0x18a9*-0x3,_0xe93fad(0x97b)]],'TDM_GameManager':[[-0x1826+-0xa93+0x22d1,'u8'],[-0x1*0x13d9+0x3*-0x527+0x716*0x5,'u8'],[-0x212e+0x3*-0x827+0x39c4,'u8'],[-0x61+0x8*-0x3c8+-0x1*-0x1ec5,_0x16a2b0[_0xe93fad(0x7da)]],[-0x4*-0x7b9+-0x1a3d+0x44f*-0x1,'u8'],[0x1*0x2363+0x1ae3*0x1+-0x3dea,_0x16a2b0['rMBXt']],[0x335+0x1ae*-0x13+0x1d15,'f32'],[0x766+-0x1838+0x89b*0x2,_0xe93fad(0x97b)],[-0xc7e+-0x267+-0xf4d*-0x1,_0xe93fad(0x97b)],[-0x3*-0x7c3+-0x1*0x983+-0x1*0xd5a,'u8'],[0x1*-0x25bb+-0x1*-0x1693+0xf95,'u8'],[0x1*-0xeed+-0x1c1d+-0x15bd*-0x2,_0x16a2b0['rMBXt']],[-0x1*-0x1025+0x28b+-0x123c,'f32'],[-0x1*0x1075+-0x2d*-0x67+0x2*-0x97,_0xe93fad(0x97b)],[-0xc81+-0x1*-0xae8+0x225,'u8'],[0x29*-0x51+-0x712+0x5*0x41f,'obfI'],[-0xf*-0x112+-0x15*0x107+0x65d,_0x16a2b0[_0xe93fad(0x4e5)]],[-0x1*0xa73+0x1*0x1cdd+-0x117e*0x1,_0xe93fad(0x9b9)],[0x2*-0xa99+0x26a8+-0x1076,_0x16a2b0['zQpjX']],[-0xa22+0xac*0x13+-0x18e,'u8'],[0x9*-0x114+-0x12c0+0x1dd0,'u8'],[-0xfde+-0x1*-0x98c+0x7b2*0x1,_0xe93fad(0x97b)],[0x25ca+0x1*0xb3e+-0x2f9c,'u8'],[-0xe18+0x12a*-0x1d+0x315e,'u8'],[0x4da*-0x6+-0x1*0x559+0x23fd,_0xe93fad(0x2e8)],[-0x6e0+-0xe*-0xdb+0x46*-0xd,_0x16a2b0['NSaqT']],[0x15f1+0x4ea*-0x6+-0x3f*-0x25,_0x16a2b0[_0xe93fad(0xde5)]],[-0x1ac7+0x15b2*-0x1+0x320d,_0x16a2b0['rMBXt']],[0x4*-0x7e3+-0x112b+0x324f,_0x16a2b0[_0xe93fad(0xde5)]],[-0x2*-0x949+-0x11*-0x13a+-0x25d0,_0xe93fad(0x97b)],[0x18f*0xc+0x2498*-0x1+0x1384,_0x16a2b0[_0xe93fad(0x7da)]],[0x2537+-0xc0d+0x2*-0xbc3,_0x16a2b0['rMBXt']],[0x196f+-0x7db*0x2+-0x811,'i32'],[0xbe3*0x3+0x242a+0x201*-0x23,'u8'],[-0x12a9+-0x1902+0x2d5c,'u8'],[0x946+-0x15d*0x15+0x1513,_0x16a2b0[_0xe93fad(0x7da)]]],'PhotonNetworkSync':[[0x234c+-0x1783+-0x5*0x251,'v3'],[-0xab1+0x218f*-0x1+0x1*0x2c80,_0x16a2b0['NSaqT']],[-0x394*-0x8+0x20eb+-0x3d47,'u8'],[-0x7*0x170+0x4bb*0x1+0x2cd*0x2,'u8'],[0x3b9*0xa+-0xd9d+0x7c7*-0x3,'v3'],[-0x2*0x493+-0xf5+-0xa6f*-0x1,'u8'],[0x17b5+-0x55d*-0x3+-0x19*0x194,_0x16a2b0['NSaqT']],[0x1537*-0x1+-0xbc3*0x2+0x2d19,_0xe93fad(0x97b)],[-0xfaf*-0x1+-0x1*0x1837+0x8e8,'f32'],[-0x648+0x1063+-0x9b7,_0x16a2b0['rMBXt']],[0xab3*0x3+0xc1*0x9+0xa*-0x3d9,_0xe93fad(0x2e8)],[0xb14+0x2a2*0x5+-0x17d2,'v3'],[-0x56e+0x92*-0x15+0x11e0,'f32'],[0x7cd*0x3+0x3*0x1f2+-0x1b1*0x11,_0x16a2b0[_0xe93fad(0x7da)]],[-0xd53*0x1+-0x1717*-0x1+0x251*-0x4,_0x16a2b0[_0xe93fad(0xde5)]],[0x5b2+-0x26db+0x21b1,_0x16a2b0[_0xe93fad(0x7da)]]],'MouseLook':[[0x6*-0x1fd+0xb*-0x56+0xfb4,_0xe93fad(0x2e8)],[-0xa53+0xe7b+0x208*-0x2,_0x16a2b0['rMBXt']],[-0x142*0x1+-0x1*0x1b42+0x1ca0,_0x16a2b0[_0xe93fad(0x7da)]],[0x1*0x1835+-0x2121+0x90c,_0x16a2b0['rMBXt']],[0xa26+0x1*-0x1740+0xd3e*0x1,'f32'],[0xf69+-0xee7+-0x5a,_0x16a2b0['rMBXt']],[-0x5f*-0x32+0x1*-0x35b+-0x501*0x3,'f32'],[-0x257+0x2*-0x1304+0x2893,'u8'],[0x1f29+-0x26bf+0x1*0x7ce,_0x16a2b0[_0xe93fad(0x7da)]],[-0x1*-0x144d+0x1*0xc5b+-0x4*0x81b,'f32'],[0x1a6*-0x11+0x601+0x1645,_0x16a2b0[_0xe93fad(0xde5)]],[0x13*0xe9+-0x6ad*-0x2+0x4d*-0x65,'u8'],[0x6*-0x616+0x26b1+-0x1e5,'v2']],'NetworkPlayerAnimations':[[0x29b*0xd+-0x2231+-0x7d*-0x2,'v3'],[-0x24ae+-0x378*0x4+0x12*0x2d9,'v3'],[0xcaa+-0x24ec+0xc81*0x2,'u8'],[0x2a0*0x6+0x4*-0x12c+-0xa4c,'i32'],[-0xf1e+0x812+0x1*0x7d4,'i32'],[0x10bc+-0x1*0xd0a+-0x2*0x173,_0x16a2b0['rMBXt']],[-0x55*0x48+-0x5f7*0x4+0x1*0x3094,_0x16a2b0['rMBXt']],[0x3*-0xc3+0x2e9*-0x4+0xec9*0x1,'f32'],[0x21ad+0x96*0xd+-0x286b,_0xe93fad(0x2e8)],[0x1aab+-0x614+0x1*-0x13af,_0x16a2b0[_0xe93fad(0x7da)]],[-0x1a71+-0x38+0x1b95,_0x16a2b0['rMBXt']],[0x13*0x89+-0x38f+-0x1*0x5ac,_0x16a2b0[_0xe93fad(0x7da)]],[-0x23*0x2f+0xdc4+-0x663*0x1,_0x16a2b0[_0xe93fad(0x7da)]],[-0x26ba+0x1256*-0x2+-0x2e*-0x1a9,_0x16a2b0[_0xe93fad(0x7da)]],[-0xa85+0x911*0x1+0x9c*0x4,_0x16a2b0[_0xe93fad(0x7da)]],[-0x1f26+-0xbc3+0x2be9,_0xe93fad(0x2e8)],[0x16b5*0x1+0x6a2*0x3+-0x2997,_0x16a2b0['rMBXt']],[-0x1341+0xcfd+-0x4*-0x1d3,'i32'],[0x26cd+0x158*0xa+-0x3331,'u8'],[-0x135f+0x543+0x4*0x3cb,'i32'],[-0x12e6+0x1*-0x32c+0x1726,_0xe93fad(0x97b)],[0x51*-0x77+-0x1d9c+0x445b,'u8'],[-0xd8e*-0x2+-0x1a3*0xf+0x173*-0x1,_0xe93fad(0x2e8)],[-0xe99+-0x17d6+0x278f*0x1,_0x16a2b0[_0xe93fad(0x7da)]],[-0x1879+0x24c4+-0x1*0xb27,_0xe93fad(0x2e8)],[-0x231a*-0x1+0x6e2+0x4*-0xa35,_0x16a2b0[_0xe93fad(0x7da)]],[0x10d7*-0x1+-0x119*-0x1a+-0x23*0x4d,'u8'],[-0x17*0x16f+-0x186d+0x9c5*0x6,'u8'],[0xbc6+0x2551*0x1+-0x1*0x2fdb,'v3'],[0x128b+0x2709*0x1+0xc*-0x4b1,'v3'],[-0x1*-0x2703+0x84f+0x493*-0xa,'u8']],'NPC_Cotroller':[[-0xa3*0xe+0x170f*0x1+-0xe11,'v3'],[0x6d1+0x244f+0x2*-0x1580,_0x16a2b0['rMBXt']],[-0xb13*-0x1+0x1d8a+-0x2879,_0xe93fad(0x2e8)],[0x917+-0xffd*0x1+-0x39e*-0x2,'u8'],[0x2430+-0xc7*-0x15+-0x342c,'u8'],[-0x1d28+0xd2b+-0x117*-0xf,'v3'],[-0x15c7+0x21ac+0x3*-0x3c3,'u8'],[0x1*-0x1f7+0x19fb+-0x1764,_0xe93fad(0x2e8)],[-0x2052+0x4a*-0x73+0x4234,_0xe93fad(0x2e8)],[-0xb10+0x17ae+-0x5f3*0x2,_0xe93fad(0x2e8)],[-0x790+0x3*-0x9f3+0x2625,_0x16a2b0['rMBXt']],[-0x24fb*-0x1+0x60f+-0x2a42,'u8'],[-0x55*0xe+0x9b4+-0x442,'f32'],[-0x5*0x141+0x14a3+-0x6c3*0x2,_0xe93fad(0x2e8)],[0xe*0x15b+0x20a4+-0x32c2,_0x16a2b0[_0xe93fad(0x7da)]],[-0x233e+-0xd*-0x9e+0x1c18,_0x16a2b0[_0xe93fad(0x7da)]],[0x79e+-0x1460*-0x1+-0x1b1a,'u8'],[0xf38+0x3*0x677+-0x21b1,_0x16a2b0[_0xe93fad(0x7da)]],[-0x7*0x543+0x239a+-0xf*-0x25,'v3'],[-0xdd9*0x1+0xe27*-0x1+0x6a*0x46,'f32'],[-0x1639+-0x1*0x1c3a+-0x3373*-0x1,'i32'],[0x1cdd*0x1+0x1*-0x697+0x6*-0x38b,_0x16a2b0[_0xe93fad(0x7da)]],[0x256d+-0x2448+-0x1d*0x1,'f32'],[0xa9*0x16+0x965+-0x16df,'f32'],[-0x337*-0xb+0x6*-0x14+0xb*-0x313,'v3'],[-0x1cad*-0x1+-0x126*-0x5+-0x214b,_0x16a2b0['rMBXt']],[0x1*-0x64c+-0xdd6+0x1546,_0xe93fad(0x2e8)],[-0x1a6b*0x1+-0x1*-0x11de+-0x9c1*-0x1,'v3'],[-0xfd1*0x2+0x36*-0x95+0x4054,'u8'],[-0x6a3*0x3+0x14*0x10c+0x41,_0x16a2b0[_0xe93fad(0x7da)]],[0x1*0x25ce+-0x2557+0xd9,'v3'],[0xc0d+-0xafc+-0x4f*-0x1,'i32'],[0x106e+-0x172+-0xd90,_0xe93fad(0x97b)],[0x1a9b+0x1acc+0x35*-0xfb,_0x16a2b0[_0xe93fad(0x7da)]],[0x9f4+0x1*0x1707+0x1*-0x1f87,'u8'],[0x4*0x22f+0x35*0x2b+-0x102b,'v4'],[0x9a+-0x579*-0x1+-0x48b,_0xe93fad(0x2e8)],[0x12f7*-0x1+-0x3*-0xf+0x26*0x89,_0xe93fad(0x2e8)],[-0xa06+0xb81+0x15,'f32'],[-0x1*-0xf56+0x1f7b+0xf13*-0x3,'u8'],[0xa74+0x6f4+-0x3f2*0x4,'i32']],'TargetHealth':[[0xd7*0x2+-0x642+0x4a4,_0x16a2b0['NSaqT']],[0x1*0x1d83+-0x17*-0x68+-0x26c7,'i32'],[-0x1*-0x61a+0x1*0x1ad7+-0x20bd,'u8'],[0x1d58+0x1*-0x567+-0x17ad,_0xe93fad(0x97b)],[-0x1291+-0x1*0x234d+0xef*0x3a,_0xe93fad(0x97b)],[0x1dda+-0x267b*-0x1+-0x4409,_0x16a2b0['NSaqT']],[0x18d6+0x3b*-0x35+-0xc4f,_0x16a2b0['NSaqT']],[0xe7a+0x6e5*-0x5+-0x59*-0x3b,_0xe93fad(0x2e8)],[-0x1b83+-0x1*-0xc46+-0xfc9*-0x1,_0xe93fad(0x2e8)],[0x7c4*-0x3+0x1ea+-0x1*-0x15f2,'u8'],[-0x188f+0x1*0x389+-0x229*-0xa,'f32'],[-0x173*-0x19+-0x9*0x5+0x3*-0xbce,'u8'],[0x1*0x1381+-0x5*0x167+-0xbd6*0x1,'i32'],[0x65f*-0x5+0x5*-0xb+0x105f*0x2,_0x16a2b0[_0xe93fad(0xde5)]],[-0x1963+-0x2*0xd7f+0xcb*0x43,'f32'],[-0xb2f*-0x1+0x15d*0xb+-0x1962,'u8']],'SectatorCamera':[[0xbdf+0x1*-0xbe9+0x1e,_0x16a2b0['rMBXt']],[0x993*0x3+0x15d*-0x1c+0x98b,'f32'],[-0x49*-0x1b+-0x72d+-0x6a,_0x16a2b0[_0xe93fad(0x7da)]],[0x2*0x12c0+-0x23b3+-0x1ad,'v3'],[-0xc87+0xaea+0x1c9,'v3'],[-0x399+0xd73*0x1+-0x4c9*0x2,_0xe93fad(0x97b)],[0x52*-0xc+-0x14c4+0x18e8,_0x16a2b0[_0xe93fad(0xde5)]],[-0xe19+-0x1f4*0xa+0x21f1*0x1,'f32'],[-0x5*-0x32f+0x23*0xdb+0x2*-0x16c4,_0x16a2b0[_0xe93fad(0xde5)]],[-0x185b+-0x12ed+0x2ba0,_0x16a2b0['rMBXt']],[0x11b9+-0x26c0+0x1563,'u8'],[-0x1*0x1d53+0xccf+0x10e4,'v3'],[0x439+0x2*-0x1352+-0x1*-0x22d7,'v4'],[-0x280*0x7+-0x19*-0x14e+-0xea2,'u8'],[0x1082+-0x15fc+0x5fa,_0x16a2b0['NSaqT']]],'UISettings':[[0x2*0x5f1+0x14*-0x76+-0x28a,_0xe93fad(0x97b)],[0x2207+0x181+-0x2360,'f32'],[0xa30+-0x11d*-0x21+-0x2da9,'u8'],[0x1356*-0x2+0x187f+-0x1*-0xf75,_0x16a2b0[_0xe93fad(0xde5)]],[0x287*-0xd+0x939*0x1+0x2c6*0x9,_0x16a2b0['NSaqT']],[-0x1ac8*-0x1+0x8f9*0x1+-0x2269,_0xe93fad(0x97b)],[-0x14b3+-0xfbc+0x183*0x19,'u8'],[0x2*0x968+-0x67*-0x49+-0x2ed2,'u8'],[0x19a8+-0x3*-0x223+0x1d*-0x10f,'u8'],[-0x19a*-0x7+-0x73*-0x25+-0x1a76,'u8'],[-0x138b+-0x1f80+0x346b,'u8'],[-0x1780+0x2603+-0xd22,'u8'],[0x1863+-0xcf7+-0xa0a,'u8'],[-0x1dd0+0x687+0x3*0x857,_0x16a2b0['rMBXt']],[0x3e+0x2022+-0x6*0x51a,_0x16a2b0[_0xe93fad(0x7da)]],[-0x19c6+0x1b*-0xd9+-0x3d*-0xd5,'u8'],[-0x2b1+0x683*0x1+-0x152,_0xe93fad(0x2e8)],[-0x17*-0x11+-0x4c*0x25+0xc15,'i32'],[-0x5*0x655+-0x9*0x275+0x38be,'u8'],[-0xf9+0x1726+-0x2a7*0x7,'u8'],[0x270d+0x1e5*-0x1+-0x94*0x3a,'v2'],[-0x6c5*-0x1+-0x11*0xd3+0x3*0x3a2,'v2'],[0x482+-0x4a7+0x3d5,'u8'],[-0x2a*0x2a+0x64d*0x1+0x44f,'u8'],[-0x17d3+-0x5d9+0x2178,_0xe93fad(0x2e8)],[0x319*0x2+0x1409+-0x166b*0x1,'v3'],[0xc5*-0xb+0x1fd4+-0x67f*0x3,_0xe93fad(0x2e8)],[0x35*0x13+-0x2277+0x226c,'f32'],[-0x257f+0x1*0x329+0x131f*0x2,_0x16a2b0[_0xe93fad(0x7da)]],[-0x33d+0xa21+-0x1c*0x1b,'u8'],[-0x71d*-0x1+-0x357*0xa+0x1e3a,'u8'],[-0x185c+-0x1127+0x2d77,_0xe93fad(0x97b)],[-0x1b15+0x32a+-0x1*-0x1beb,_0xe93fad(0x97b)],[-0x22ae+0x1688+0x102a,_0x16a2b0['NSaqT']],[0x3a*-0xaa+-0x1721+0x41ad,_0x16a2b0[_0xe93fad(0xde5)]],[-0x259d*0x1+-0x1*0x16ff+0x40a8,_0xe93fad(0x97b)],[-0x1bc2+0x4*0x581+-0xa*-0xfb,_0xe93fad(0x97b)],[0x4ed+-0xc34+-0x11*-0xab,_0x16a2b0['NSaqT']],[-0x1d*0xa1+0x1*-0x1a17+-0x6*-0x812,_0x16a2b0[_0xe93fad(0xde5)]],[-0x1683*0x1+0x1629+0x476,_0x16a2b0[_0xe93fad(0xde5)]],[0x361*0x1+0x51c*-0x1+0x5db*0x1,_0x16a2b0[_0xe93fad(0xde5)]],[-0x58f*0x5+0x6be*0x4+0x1*0x527,'u8'],[-0xb49+-0xa2f+-0x5*-0x529,'u8'],[0xbbf*-0x1+0x145a+-0x445,'u8'],[-0xfa6+-0x2*-0x751+0x1*0x55b,'u8'],[0x19a1+-0x1*-0x1115+-0xa*0x3d1,_0x16a2b0[_0xe93fad(0x7da)]]]},_0x3a3349={},_0x3736fb={};function _0x347cdb(_0x5b857a,_0x485a1c,_0x45f7b9){var _0x1c0fdc=_0xe93fad,_0x582e89={'FBqWV':function(_0x56ec1e,_0x4b8a7a,_0x3c261f){return _0x16a2b0['jvqNB'](_0x56ec1e,_0x4b8a7a,_0x3c261f);}};if(_0x1c0fdc(0xaf5)==='wGOhK'){if(!_0x2315d9)return;_0x270fa1=![],_0x47c772['style']['curso'+'r']=_0x16a2b0[_0x1c0fdc(0x4ed)],_0x35cbee();}else return function(_0x1479f3){var _0x2d3a2e=_0x1c0fdc,_0x42aff0={'VCPqJ':function(_0x436a8f,_0x55f711){var _0x3e98c0=_0x563b;return _0x16a2b0[_0x3e98c0(0x3f0)](_0x436a8f,_0x55f711);},'wsFBt':function(_0x293fe6,_0x529d85){return _0x293fe6/_0x529d85;},'emQvb':_0x16a2b0['aIXEm'],'DzfnN':_0x16a2b0[_0x2d3a2e(0xb35)]};try{var _0x752818=_0x1479f3&&_0x1479f3[_0x2d3a2e(0x9ee)]?_0x1479f3[_0x2d3a2e(0x9ee)]():0x1*0x1ff5+-0x1*-0x1f0d+-0x1f81*0x2;if(!_0x752818)return;var _0x354625=_0x3736fb[_0x5b857a]||(_0x3736fb[_0x5b857a]={}),_0x481b38=_0x354625[_0x752818];if(!_0x481b38)_0x481b38=_0x354625[_0x752818]={'ptr':_0x752818,'firstSeen':Date[_0x2d3a2e(0x5a3)](),'hits':0x0};_0x481b38['hits']++;if(_0x45f7b9){if(_0x16a2b0['reCSe']!=='EsGbY'){var _0x17bf9e=('3|1|5'+_0x2d3a2e(0x436)+'2|4')['split']('|'),_0x31c835=-0x269*0x1+0x6*0x48b+-0x18d9;while(!![]){switch(_0x17bf9e[_0x31c835++]){case'0':_0x432146['k']=_0x398af7;continue;case'1':if(!_0x432146)return null;continue;case'2':if(!_0x5b3773[_0x2d3a2e(0x5ed)]['lengt'+'h'])return null;continue;case'3':var _0x432146=_0x359c97(_0x22319c,_0x4a56e9,_0x4363f4);continue;case'4':return _0x5b3773[_0x2d3a2e(0x5ed)][0xe5*0x7+0x171b+-0x1d5e];case'5':_0x432146['o']=_0x548298;continue;case'6':var _0x5b3773=_0x42aff0['VCPqJ'](_0x2121cd,[_0x432146]);continue;}break;}}else{if(!_0x3a3349[_0x752818])_0x3a3349[_0x752818]={'ptr':_0x752818,'kind':_0x5b857a,'firstSeen':Date['now'](),'hits':0x0};_0x3a3349[_0x752818][_0x2d3a2e(0x489)]++;}}else{var _0x2b1296=_0x27746d[_0x5b857a];if(!_0x2b1296||_0x2b1296[_0x2d3a2e(0x999)]!==_0x752818){_0x27746d[_0x5b857a]={'ptr':_0x752818,'firstSeen':Date[_0x2d3a2e(0x5a3)](),'hits':0x0,'replaced':!!_0x2b1296};try{if('XhCLf'===_0x16a2b0[_0x2d3a2e(0x253)]){var _0x647990=_0x4daf3c[_0x2d3a2e(0xb7d)+'r'](function(_0x22c636){return _0x22c636['type']===_0x5b857a;})[-0x1f84*-0x1+-0xa7f+0x1*-0x1505];_0x3ee706={'type':_0x5b857a,'atMs':_0x16a2b0['RFFre'](Date[_0x2d3a2e(0x5a3)](),_0x10a243),'originalFunc':!!(_0x647990&&_0x647990[_0x2d3a2e(0x7b8)]&&typeof _0x647990['hook'][_0x2d3a2e(0xc02)+_0x2d3a2e(0x960)+'nc']===_0x2d3a2e(0x84c)+_0x2d3a2e(0xd10)),'resolveGameAtFire':!!_0x4d7c90(),'gameSourceAtFire':_0x2bc082['sourc'+'e']};}else return _0x42aff0[_0x2d3a2e(0x4b0)](_0x2410be[_0x2d3a2e(0x921)](_0x6564ac*(-0x1dc6+0xbe1+0x1249)),0x1508+0x64*0x52+-0x34ac);}catch(_0x244fd8){}}}if(_0x5b857a==='FPSco'+'ntrol'+_0x2d3a2e(0x313)&&_0xdd6062['on'])try{_0x16a2b0['ZSgVG']===_0x2d3a2e(0x5d8)?_0x16a2b0[_0x2d3a2e(0x36c)](_0x3d5f14,_0x752818):(_0x7d34e5['setLa'+'st']=_0x2099ed[0x2*0x149+-0xe16*0x2+0x1*0x199b][_0x2d3a2e(0x9ee)](),_0xf8060d[_0x2d3a2e(0xc2c)+'ts']++);}catch(_0xcf7d3c){}if(!_0x485a1c){var _0x647990=_0x4daf3c['filte'+'r'](function(_0x14e409){return _0x14e409['type']===_0x5b857a;})[0x1*0x15b0+0x4f0+-0x1aa0];if(_0x647990&&_0x647990[_0x2d3a2e(0x7b8)]){if(_0x2d3a2e(0x4af)===_0x2d3a2e(0xb2a)){_0x3d026b['preve'+'ntDef'+'ault'](),_0x582e89[_0x2d3a2e(0x88b)](_0x515ac4,!_0x335ce8['on'],_0xae0e45[_0x2d3a2e(0xa51)+'r']);return;}else try{_0x2d3a2e(0xb9a)===_0x16a2b0[_0x2d3a2e(0xbf7)]?_0x1cf80c[_0x2d3a2e(0x6c6)]=_0x42aff0[_0x2d3a2e(0x3f9)]+_0x42aff0[_0x2d3a2e(0x351)]:_0x647990['hook']['enabl'+'ed']=![];}catch(_0x500986){}}}}catch(_0x5cfd6c){}};}function _0x11e57c(){var _0x301451=_0xe93fad;if(_0x16a2b0[_0x301451(0xccf)]===_0x301451(0x3ca)){if(_0x4daf3c['lengt'+'h'])return!![];if(!window['Unity'+_0x301451(0xc5c)+'dkit']||!window['Unity'+'WebMo'+_0x301451(0x4fa)][_0x301451(0xa67)+'me'])return![];var _0x3c3dd8=window['Unity'+'WebMo'+_0x301451(0x4fa)][_0x301451(0xa67)+'me'];if(!_0x3c3dd8[_0x301451(0x94b)+'ns']||!_0x3c3dd8[_0x301451(0x94b)+'ns'][_0x301451(0x516)+'h'])return![];_0x5de75a=window[_0x301451(0x262)+_0x301451(0xc5c)+_0x301451(0x4fa)][_0x301451(0x7f1)+_0x301451(0x76f)+'er'],_0x6247f4=_0x6247f4||_0x3c3dd8['plugi'+'ns'][_0x3c3dd8[_0x301451(0x94b)+'ns']['lengt'+'h']-(0x1d5f+0x229d+0x1*-0x3ffb)];if(!_0x6247f4||typeof _0x6247f4[_0x301451(0x7c6)+_0x301451(0x2d8)]!==_0x16a2b0[_0x301451(0xc8a)])return![];for(var _0x18f4d3=-0x1c*-0x5b+0x1848+-0x1c*0x139;_0x16a2b0['RWBYf'](_0x18f4d3,_0x58a24a[_0x301451(0x516)+'h']);_0x18f4d3++){var _0x44ef74=_0x58a24a[_0x18f4d3];try{var _0x2a524b=_0x6247f4[_0x301451(0x7c6)+'refix']({'typeName':_0x44ef74[_0x301451(0x712)],'methodName':'Updat'+'e','params':[_0x16a2b0[_0x301451(0xde5)],_0x16a2b0[_0x301451(0xde5)]],'returnType':undefined},_0x347cdb(_0x44ef74['type'],_0x44ef74[_0x301451(0x6f2)],_0x44ef74[_0x301451(0xc54)]));_0x4daf3c['push']({'type':_0x44ef74['type'],'hook':_0x2a524b,'keep':_0x44ef74['keep']});}catch(_0x279dcd){if(_0x16a2b0[_0x301451(0x34a)]('IfDYf',_0x16a2b0['xkwGz']))return null;else _0xcec86a['push'](_0x44ef74['type']+':\x20'+String(_0x279dcd&&_0x279dcd[_0x301451(0x6b5)+'ge']||_0x279dcd)[_0x301451(0x616)](0x1fa*0x5+-0x5b3*-0x5+-0x2661,0x4c7+-0x2*-0x615+0x1051*-0x1));}}return _0x16a2b0['Getvz'](_0x4daf3c[_0x301451(0x516)+'h'],0x517*0x4+0x644+-0x1aa0);}else return _0x560bf2[_0x301451(0xbd7)];}function _0x4b917b(_0x312eaf,_0x3033c2){var _0x4935a7=_0xe93fad,_0x34657f={'nkojb':function(_0x477193,_0x471709){return _0x477193<_0x471709;},'iGtUh':function(_0x3d90f2,_0x41e2e9,_0x1b98bd){return _0x3d90f2(_0x41e2e9,_0x1b98bd);},'TQiMh':function(_0x272271,_0x46aab6){return _0x272271!==_0x46aab6;},'meYTm':function(_0x53d344,_0x182d51){var _0x1f46e0=_0x563b;return _0x16a2b0[_0x1f46e0(0x721)](_0x53d344,_0x182d51);}};if(_0x4935a7(0x1bb)===_0x4935a7(0x3e6))try{_0x40a5a2();}catch(_0x3c65b4){}else return function(){var _0x2a593c=_0x4935a7,_0x361f02={'xqJsj':function(_0xc4ee,_0xe63679){return _0xc4ee+_0xe63679;},'GnVtK':_0x2a593c(0xe47)+_0x2a593c(0xae4)+'\x20but\x20'+_0x2a593c(0xb6d)+_0x2a593c(0x475)+'lds.\x20','ljomB':function(_0x5ccd19,_0x15ce07){return _0x16a2b0['ZCBuA'](_0x5ccd19,_0x15ce07);}};try{var _0x41096b=_0x3ad7b7[_0x3033c2]||(_0x3ad7b7[_0x3033c2]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0,'setB':null,'pairHits':0x0,'lo':null,'hi':null,'jump':0x0}),_0x256227=arguments;if(_0x16a2b0[_0x2a593c(0xd7d)](_0x312eaf,'get')){var _0x5056a4=_0x256227[-0xb*-0x12e+-0x11*0x3a+-0x920];if(_0x5056a4&&_0x16a2b0['KvvFo'](typeof _0x5056a4['val'],_0x16a2b0[_0x2a593c(0xc8a)])){if('vaitw'!==_0x16a2b0[_0x2a593c(0x41b)]){_0x3a2371[_0x5397e8]={'ptr':_0x1c1f73,'firstSeen':_0x23f25c[_0x2a593c(0x5a3)](),'hits':0x0,'replaced':!!_0x58f73c};try{var _0xa7afdf=_0x5501c1[_0x2a593c(0xb7d)+'r'](function(_0x1f56d8){var _0x4d4dd5=_0x2a593c;return _0x1f56d8[_0x4d4dd5(0x712)]===_0x4818c2;})[-0x62*-0x3+-0x4*-0x55d+-0x1*0x169a];_0x24096e={'type':_0x2b62a9,'atMs':_0x2a27fb[_0x2a593c(0x5a3)]()-_0x373493,'originalFunc':!!(_0xa7afdf&&_0xa7afdf['hook']&&typeof _0xa7afdf[_0x2a593c(0x7b8)][_0x2a593c(0xc02)+_0x2a593c(0x960)+'nc']===_0x2a593c(0x84c)+'ion'),'resolveGameAtFire':!!_0x308c9a(),'gameSourceAtFire':_0x190ea5[_0x2a593c(0x700)+'e']};}catch(_0x44f9ca){}}else{var _0x2c4b51=_0x5056a4[_0x2a593c(0x9ee)]();if(_0x16a2b0[_0x2a593c(0x25c)](typeof _0x2c4b51,_0x16a2b0['JDLVw'])&&_0x16a2b0['rrzmp'](isFinite,_0x2c4b51)){if('hnxYJ'!==_0x16a2b0['iptdv']){if(_0x41096b['lo']===null||_0x16a2b0[_0x2a593c(0x287)](_0x2c4b51,_0x41096b['lo']))_0x41096b['lo']=_0x2c4b51;if(_0x41096b['hi']===null||_0x16a2b0[_0x2a593c(0x645)](_0x2c4b51,_0x41096b['hi']))_0x41096b['hi']=_0x2c4b51;if(_0x16a2b0['HsPvE'](_0x41096b['last'],null)){if(_0x16a2b0['Jkjag'](_0x16a2b0[_0x2a593c(0x686)],'aFQVH')){_0x4c1f97['tag']={};for(var _0x636132=0x11*0x127+-0x422+-0xf75;_0x34657f[_0x2a593c(0xb2f)](_0x636132,_0x191e00['lengt'+'h']);_0x636132++){var _0x20b494=_0x34657f[_0x2a593c(0x280)](_0x4232fb,_0x3bf6de+_0x34657f['iGtUh'](_0x39ae27,_0x3aed0d[_0x636132][-0x1936+-0x73*-0x49+-0x795],-0x117f+-0x192a+0x2ab9*0x1),_0x2a593c(0x97b));if(_0x34657f[_0x2a593c(0xc1c)](_0x20b494,_0x4c5ec7))_0x53e0ce['tag'][_0x3e2efd[_0x636132][-0x283*0x7+-0x155+0xa7*0x1d]]=_0x20b494;}}else{var _0x43246d=Math['abs'](_0x16a2b0['bSCTr'](_0x2c4b51,_0x41096b['last']));if(_0x16a2b0[_0x2a593c(0x62f)](_0x43246d,_0x41096b['jump']))_0x41096b[_0x2a593c(0x1dc)]=_0x43246d;}}_0x41096b['last']=_0x2c4b51;}else return _0x22dff8[_0x2a593c(0xb3d)](_0x2a593c(0x583)+_0x2a593c(0xda4)+'\x20menu'+'\x20unav'+_0x2a593c(0x705)+'le',_0x34657f[_0x2a593c(0x81e)](_0x2a593c(0x7a6)+':',_0x52b408),_0x112e33),null;}_0x41096b[_0x2a593c(0x489)]++;if(_0x256227[-0x80e*0x1+0xd05*0x3+-0x1f00]&&typeof _0x256227[-0x1ffa+-0x9*0x3bf+-0x6*-0xaf3][_0x2a593c(0x9ee)]===_0x16a2b0[_0x2a593c(0xc8a)]){var _0x5d4160=_0x256227[0x20fc+0x41*-0x2+-0x2079][_0x2a593c(0x9ee)]();if(_0x5d4160)_0x4650e7=_0x5d4160;}}}}else{_0x256227[-0x1*0x1a35+-0x33*0x36+-0x1c*-0x152]&&typeof _0x256227[-0x1*0x5a8+-0x1c91+0x2*0x111d][_0x2a593c(0x9ee)]===_0x16a2b0['XuifF']&&(_0x16a2b0['gCojq'](_0x2a593c(0x1b4),_0x2a593c(0x1b4))?_0x13e913[_0x2a593c(0xbd9)+'ngs'][_0x2a593c(0x8f2)](_0x361f02[_0x2a593c(0x216)](_0x361f02[_0x2a593c(0x216)]('captu'+_0x2a593c(0x531)+_0x2d28c7['keys'](_0x2be8b4[_0x2a593c(0x84d)+_0x2a593c(0x4fc)])[_0x2a593c(0x516)+'h'],_0x361f02['GnVtK']),_0x543a00['lastE'+_0x2a593c(0x60e)]?_0x361f02['ljomB']('Reaso'+_0x2a593c(0x30d),_0x260843['lastE'+_0x2a593c(0x60e)]):_0x2a593c(0x271)+_0x2a593c(0x801)+'iled,'+_0x2a593c(0x231)+'very\x20'+'offse'+_0x2a593c(0xb8a)+'\x20skip'+'ped\x20b'+'y\x20typ'+'e.')):(_0x41096b[_0x2a593c(0x3cc)+'st']=_0x256227[-0x8d*-0x1d+-0x1be8+0xbf0]['val'](),_0x41096b[_0x2a593c(0xc2c)+'ts']++));_0x256227[-0x9be+-0xed3+0x3*0x831]&&typeof _0x256227[-0x1*0x926+-0xef5+0x181d]['val']==='funct'+_0x2a593c(0xd10)&&(_0x41096b['setB']=_0x256227[-0x1*-0x24e1+-0x1*0x2326+-0x1b9][_0x2a593c(0x9ee)](),_0x41096b['pairH'+_0x2a593c(0xb83)]++);if(_0x256227[0x94f*0x4+-0x2d*-0x84+-0x4*0xf1c]&&typeof _0x256227[-0x267e+0x4e4*0x5+0xe0a]['val']==='funct'+_0x2a593c(0xd10)){var _0x525017=_0x256227[-0x23ef*-0x1+0x85*0x37+-0x167*0x2e]['val']();if(_0x525017)_0x4650e7=_0x525017;}}}catch(_0x47289e){}};}function _0x14417d(){var _0x25a967=_0xe93fad;if(_0x25a967(0x504)!==_0x16a2b0[_0x25a967(0xb28)]){var _0x33398f={'xfMMn':function(_0x5228ca,_0x186955){var _0x196b9e=_0x25a967;return _0x16a2b0[_0x196b9e(0x6d9)](_0x5228ca,_0x186955);}};if(_0x16a2b0['hbzGR'](_0xbfc8a5[_0x2cccc8]['o'],_0x5dc793)){if(_0x3e00b3==='v3'){var _0x9be7bb=_0x575abd[_0xc5a33d][_0x25a967(0x748)]||[_0x5d7fa0[_0x380c5c]['v'],0x1dae+-0x2050+0x2a2,0x32*-0x7b+0x70a+0x10fc];return _0x9be7bb[_0x25a967(0x357)](function(_0x5e7195){var _0x488599=_0x25a967;return _0x5c2b07[_0x488599(0x921)](_0x33398f['xfMMn'](_0x5e7195,0x4bb+-0x1cf*-0x7+-0x1100))/(-0x1e33+0x5a5+0x18f2);})['join']('\x20\x20');}var _0x21485e=_0x278035[_0x57c57f]['v'];return typeof _0x21485e===_0x16a2b0[_0x25a967(0xb00)]?_0x5201a9[_0x25a967(0x921)](_0x21485e*(-0x57e*-0x1+-0x25*0x2+-0x14c))/(-0x1b*0x58+0x3e5*-0x5+0x20a9):_0x16a2b0[_0x25a967(0x630)](_0x65f91c,_0x21485e);}}else{if(_0x4f966d)return!![];if(!_0x6247f4||typeof _0x6247f4[_0x25a967(0x7c6)+_0x25a967(0xe15)+'x']!==_0x25a967(0x84c)+_0x25a967(0xd10))return![];var _0x3ca668=_0xa3674f[_0x25a967(0x4c3)+_0x25a967(0xa5b)]||[];for(var _0x237f5c=-0x829*-0x2+0x7e5+-0x1837;_0x237f5c<_0x3ca668[_0x25a967(0x516)+'h'];_0x237f5c++){var _0x4d4004=_0x3ca668[_0x237f5c];try{if(_0x4d4004['ret']===_0x25a967(0x913))_0x6247f4[_0x25a967(0x7c6)+_0x25a967(0xe15)+'x']({'typeName':_0x25a967(0x4c3)+'Look','methodName':_0x4d4004[_0x25a967(0x528)],'params':_0x4d4004[_0x25a967(0x206)+_0x25a967(0x423)],'returnType':_0x4d4004[_0x25a967(0xc98)+'et']},_0x16a2b0['DmcLb'](_0x4b917b,_0x25a967(0xc00),_0x4d4004[_0x25a967(0x528)]));else _0x4d4004[_0x25a967(0x64c)]==='void'&&_0x4d4004['param'+'s']['lengt'+'h']===0x1c4d+0x1669+0x32b5*-0x1&&_0x4d4004['param'+'s'][-0x2a+0x504+-0x1*0x4da]===_0x16a2b0[_0x25a967(0x520)]&&_0x6247f4['hookP'+_0x25a967(0x2d8)]({'typeName':_0x16a2b0[_0x25a967(0x841)],'methodName':_0x4d4004['name'],'params':_0x4d4004['wasmP'+_0x25a967(0x423)],'returnType':undefined},_0x16a2b0[_0x25a967(0x772)](_0x4b917b,_0x16a2b0[_0x25a967(0xde7)],_0x4d4004[_0x25a967(0x528)]));}catch(_0x1cdd68){_0x555a74['push'](String(_0x1cdd68&&_0x1cdd68['messa'+'ge']||_0x1cdd68)[_0x25a967(0x616)](0x3a5+-0x2228+0x1e83,0xde7+0x11ef+0x1f5e*-0x1));}}return _0x4f966d=!![],!![];}}function _0x50449f(){var _0x1562e3=_0xe93fad;if('XqNCi'!==_0x16a2b0[_0x1562e3(0xb8b)]){var _0x418355=-0x23cf+-0x554*-0x2+-0x89*-0x2f,_0x8a84=0x173f+-0x2663*0x1+0xcc*0x13,_0x12738f=-0x975+0x2112+-0xd*0x1d1,_0x52f44e=0x16a9+-0x112e+0x17*-0x3d,_0x1840ef=-0x7*-0x525+-0x1e65+-0x59e;try{var _0x421418=window[_0x1562e3(0x262)+'WebMo'+_0x1562e3(0x4fa)]&&window[_0x1562e3(0x262)+'WebMo'+_0x1562e3(0x4fa)][_0x1562e3(0xa67)+'me'],_0x23e534=_0x6247f4||_0x421418&&_0x421418[_0x1562e3(0x94b)+'ns']&&_0x421418[_0x1562e3(0x94b)+'ns'][_0x421418['plugi'+'ns']['lengt'+'h']-(0x19f1+0xf1b*-0x1+-0xad5)];if(_0x23e534&&_0x23e534[_0x1562e3(0x4b5)])for(var _0x147c93=-0x1dc1+0x719*0x5+-0x5bc;_0x147c93<_0x23e534['hooks'][_0x1562e3(0x516)+'h'];_0x147c93++){var _0x5dcf3c=_0x23e534[_0x1562e3(0x4b5)][_0x147c93];if(!_0x5dcf3c||_0x16a2b0[_0x1562e3(0x6dc)](_0x5dcf3c[_0x1562e3(0xb10)+_0x1562e3(0x322)],_0x1562e3(0x4c3)+'Look'))continue;_0x418355++;if(_0x5dcf3c['table'+_0x1562e3(0xb19)]!==undefined)_0x8a84++;if(_0x5dcf3c['appli'+'ed'])_0x12738f++;}}catch(_0x301cde){}for(var _0x22e23f in _0x3ad7b7){var _0x1520b0=_0x3ad7b7[_0x22e23f];_0x52f44e+=_0x1520b0[_0x1562e3(0x489)]||-0x5d4*0x1+-0x1b4a+0x211e,_0x1840ef+=(_0x1520b0['setHi'+'ts']||-0xf13*0x1+0x2*-0xa0d+-0x709*-0x5)+(_0x1520b0[_0x1562e3(0x758)+_0x1562e3(0xb83)]||0xf45*0x1+-0x6f8+0x7d*-0x11);}return{'registered':_0x4f966d,'total':_0x418355,'resolved':_0x8a84,'applied':_0x12738f,'getterHits':_0x52f44e,'setterHits':_0x1840ef,'distinct':Object[_0x1562e3(0x227)](_0x3ad7b7)[_0x1562e3(0x516)+'h'],'errorCount':_0x555a74['lengt'+'h'],'errors':_0x555a74['slice'](0xc13+0x165+0x2*-0x6bc,0x21f6+-0x18fa+-0x8f8)};}else{var _0x16bf54=_0x197311[_0x1562e3(0x87a)+'Selec'+_0x1562e3(0xaf2)+'l']('ifram'+'e');for(var _0x4e9509=-0x755*-0x2+0x9d9*-0x1+-0x4d1;_0x16a2b0[_0x1562e3(0x331)](_0x4e9509,_0x16bf54[_0x1562e3(0x516)+'h']);_0x4e9509++){try{if(_0x16bf54[_0x4e9509][_0x1562e3(0x3d2)+_0x1562e3(0xd50)+_0x1562e3(0x63c)])_0x16bf54[_0x4e9509]['conte'+'ntWin'+'dow'][_0x1562e3(0xc60)+_0x1562e3(0xbbc)+'e'](_0x28de3d,'*');}catch(_0x4bedc5){}}}}function _0x4eb21c(){var _0x40c5cb=_0xe93fad,_0x29710d=null,_0x1ce4b2=-0x83*-0x36+0x9*0x67+-0x1f41;for(var _0x423ebf in _0x3ad7b7){var _0xd56026=_0x3ad7b7[_0x423ebf];if(_0xd56026[_0x40c5cb(0x758)+_0x40c5cb(0xb83)]&&_0xd56026[_0x40c5cb(0x758)+_0x40c5cb(0xb83)]>_0x1ce4b2&&_0x16a2b0[_0x40c5cb(0x336)](typeof _0xd56026[_0x40c5cb(0x3cc)+'st'],_0x16a2b0['JDLVw'])&&typeof _0xd56026[_0x40c5cb(0x9b0)]===_0x16a2b0[_0x40c5cb(0xb00)]&&_0x16a2b0[_0x40c5cb(0x6a6)](isFinite,_0xd56026[_0x40c5cb(0x3cc)+'st'])&&isFinite(_0xd56026[_0x40c5cb(0x9b0)])){if(_0x16a2b0[_0x40c5cb(0x8c6)]==='gQVEP'){_0x16a2b0['bGLjB'](_0x50a747,_0x2183d5['cat']);try{var _0x1d61d1=_0xa0653f[_0x40c5cb(0xcf9)+'Heigh'+'t']||0x89c+-0x110e+0xb92;if(_0x16a2b0[_0x40c5cb(0x958)](_0x1d61d1,-0x44*0x2b+0x18d7*-0x1+0x26af))_0x16a2b0[_0x40c5cb(0xa9a)](_0x4fa918,![]);}catch(_0x515e4b){}}else _0x29710d={'rawA':_0xd56026['setLa'+'st'],'rawB':_0xd56026['setB'],'hits':_0xd56026['pairH'+_0x40c5cb(0xb83)],'name':_0x423ebf},_0x1ce4b2=_0xd56026['pairH'+'its'];}}if(!_0x29710d)return null;var _0x54a84e=_0x29710d[_0x40c5cb(0x7d1)]>=-(-0x2*0xf7d+0x67*-0x6+0x21be)&&_0x29710d[_0x40c5cb(0x7d1)]<=0x1b61+0x13f1+-0x2ef8,_0x4bc315=_0x16a2b0[_0x40c5cb(0x236)](_0x29710d['rawB'],-(0x1a64+-0xd91+0x67*-0x1f))&&_0x29710d[_0x40c5cb(0x6b8)]<=-0x2069*0x1+0x1856+0x86d*0x1;return _0x16a2b0[_0x40c5cb(0xd17)](_0x54a84e,_0x4bc315)?(_0x29710d['pitch']=_0x54a84e?_0x29710d[_0x40c5cb(0x7d1)]:_0x29710d['rawB'],_0x29710d['yaw']=_0x54a84e?_0x29710d['rawB']:_0x29710d['rawA'],_0x29710d['order']=_0x54a84e?_0x16a2b0[_0x40c5cb(0xccb)]:_0x40c5cb(0x5d5)):(_0x29710d['pitch']=null,_0x29710d[_0x40c5cb(0x704)]=null,_0x29710d[_0x40c5cb(0x923)]=_0x16a2b0['mPJpb'](_0x40c5cb(0xc01)+_0x40c5cb(0x9d9)+'\x20('+(_0x54a84e?'both\x20'+_0x40c5cb(0x889)+'ed':_0x40c5cb(0x1ea)+_0x40c5cb(0xc8c)+'unded'),')')),_0x29710d;}function _0x473035(){var _0x11f9e2=_0xe93fad,_0x1927d1=-0x1*0x1071+0xfd7*-0x1+0x2048;for(var _0x122087=0x390+0x1116+-0x14a6;_0x16a2b0[_0x11f9e2(0x28f)](_0x122087,_0x4daf3c['lengt'+'h']);_0x122087++){if(_0x4daf3c[_0x122087][_0x11f9e2(0x7b8)]&&_0x4daf3c[_0x122087][_0x11f9e2(0x7b8)][_0x11f9e2(0x6d6)+_0x11f9e2(0xb19)]!==undefined)_0x1927d1++;}return _0x1927d1;}function _0x1cff12(){var _0xc909ad=_0xe93fad,_0x56d17e={'Mtqyb':function(_0x606bde,_0x590571){return _0x606bde!==_0x590571;}},_0x47b84a=-0x1*-0x1f71+-0x24d3*-0x1+-0x101*0x44;for(var _0x4eebba=-0x4e2+-0x1fa1+0x2cf*0xd;_0x4eebba<_0x4daf3c['lengt'+'h'];_0x4eebba++){if(_0x16a2b0['vATYk']===_0x16a2b0['vATYk']){if(_0x4daf3c[_0x4eebba][_0xc909ad(0x7b8)]&&_0x4daf3c[_0x4eebba][_0xc909ad(0x7b8)]['appli'+'ed'])_0x47b84a++;}else{_0xa0edc5=_0xc89d93[_0xc909ad(0xcf6)];if(_0x274bc1[_0xc909ad(0xdb8)])_0x1693dd=_0x139f79['pos'];if(_0x56d17e['Mtqyb'](_0x25f096['fov'],null))_0x272a7f=_0x49402c['fov'];}}return _0x47b84a;}var _0x1c5110=null,_0x500c84=[],_0x12ba14={},_0x3ee706=null;function _0x361432(_0x37ed2c){var _0x24a038=_0xe93fad,_0x5bc9dc={'sKefp':_0x16a2b0[_0x24a038(0xde5)],'SAoMd':function(_0x53ef2c,_0x4d6ab9,_0x3b0db5,_0x251c84){var _0xee036a=_0x24a038;return _0x16a2b0[_0xee036a(0x2ff)](_0x53ef2c,_0x4d6ab9,_0x3b0db5,_0x251c84);},'ndThU':function(_0x427827,_0x2878e3){return _0x427827+_0x2878e3;}};try{if(_0x16a2b0[_0x24a038(0xe35)](!_0x5de75a,!_0x37ed2c))return null;var _0x35afbe=new _0x5de75a(_0x37ed2c)['getCl'+_0x24a038(0x47e)+'me']();return _0x35afbe===undefined?null:_0x35afbe;}catch(_0x4ee61f){if(_0x16a2b0[_0x24a038(0x9e5)](_0x24a038(0x2b4),'psYYr')){var _0x2c3ba4=_0x449b67[_0x347ed3];try{var _0x33c8de=_0x120528['hookP'+_0x24a038(0x2d8)]({'typeName':_0x2c3ba4[_0x24a038(0x712)],'methodName':'Updat'+'e','params':[_0x5bc9dc[_0x24a038(0xded)],_0x24a038(0x97b)],'returnType':_0x23e498},_0x5bc9dc[_0x24a038(0x74c)](_0xf91f0d,_0x2c3ba4[_0x24a038(0x712)],_0x2c3ba4[_0x24a038(0x6f2)],_0x2c3ba4[_0x24a038(0xc54)]));_0x250fc2[_0x24a038(0x8f2)]({'type':_0x2c3ba4[_0x24a038(0x712)],'hook':_0x33c8de,'keep':_0x2c3ba4[_0x24a038(0x6f2)]});}catch(_0x3f1848){_0x74958d['push'](_0x5bc9dc[_0x24a038(0xc26)](_0x2c3ba4[_0x24a038(0x712)]+':\x20',_0x3068a2(_0x3f1848&&_0x3f1848['messa'+'ge']||_0x3f1848)['slice'](-0x2c0+0xc59+-0x999,0x2*0x687+-0x8b*-0x26+-0x2110)));}}else return null;}}function _0x2563bb(_0x5ceea0,_0xe530ac,_0x466c2d){var _0x46d172=_0xe93fad,_0x26075f=_0x4a7ad7();if(!_0x26075f)return null;if(_0xe530ac<-0x1c8d*-0x1+0x39d*-0x3+-0x11b6||_0xe530ac+_0x466c2d*(-0x1c22+0x1b68+0xbe)>_0x26075f[_0x46d172(0x88c)+_0x46d172(0xb9e)])return null;var _0x56f5c0=[];for(var _0x255f96=-0x965+0x1f71+-0x160c;_0x255f96<_0x466c2d;_0x255f96++)_0x56f5c0['push'](_0x26075f[_0x46d172(0x717)+_0x46d172(0x32a)](_0x16a2b0['bOngN'](_0x5ceea0+_0xe530ac,_0x255f96*(-0x3*0x1f1+0x1df0+-0x1819)),!![]));return _0x2bc082['ok']+=_0x466c2d,_0x56f5c0;}var _0x483ad4={'PhotonNetworkSync':[[_0xe93fad(0x505),_0xe93fad(0x413)+'nView'],[_0xe93fad(0x7a2),_0x16a2b0[_0xe93fad(0x50e)]],[_0x16a2b0['LdeDy'],_0xe93fad(0xd0c)+_0xe93fad(0xcf0)],[_0xe93fad(0xddf),'fps'],[_0x16a2b0['HBOkI'],'mouse'+'Look']],'NetworkPlayerAnimations':[[_0x16a2b0[_0xe93fad(0xb57)],_0x16a2b0['oSHuX']],[_0x16a2b0[_0xe93fad(0xe2f)],_0xe93fad(0x662)]],'NPC_Cotroller':[[_0x16a2b0['jrTiD'],_0x16a2b0[_0xe93fad(0x4c4)]],['0xb4','targe'+_0xe93fad(0x3ba)+'th'],[_0x16a2b0[_0xe93fad(0x511)],_0x16a2b0['vDrqT']],[_0x16a2b0['GHPCS'],_0xe93fad(0x4d5)+_0xe93fad(0x3ba)+'th2'],['0xe8',_0xe93fad(0xd0c)+'form']],'EnemyBot':[['0x14','trans'+'form']]},_0x2af7ec={'PhotonNetworkSync':[[_0xe93fad(0x5fe),'team'],[_0xe93fad(0x897),_0x16a2b0[_0xe93fad(0xbb0)]],[_0x16a2b0[_0xe93fad(0xa74)],'id']]};function _0x10567b(_0x4766bc,_0x560be0){var _0x300d2d=_0xe93fad,_0x9da4db={'jbIeN':function(_0x584c73,_0x324567){return _0x584c73(_0x324567);},'HwRyn':function(_0x45672b){return _0x45672b();},'reyjo':function(_0x44a927,_0x2e8c59){return _0x44a927&&_0x2e8c59;},'ccKOL':function(_0x21e964,_0x16749b){return _0x16a2b0['lSvoA'](_0x21e964,_0x16749b);},'Zponf':_0x300d2d(0x9ad)+'ion:f'+'ixed;'+'left:'+_0x300d2d(0x992)+_0x300d2d(0x4a9)+_0x300d2d(0x1f3)+'-inde'+'x:214'+_0x300d2d(0x2e0)+'99;cu'+_0x300d2d(0x8b5)+_0x300d2d(0x94d)+_0x300d2d(0xcda)+_0x300d2d(0x822)+_0x300d2d(0x66d)+_0x300d2d(0xdce),'AeRyc':_0x16a2b0['XtUgl'],'MPwZY':_0x300d2d(0x84d)+'ntiat'+_0x300d2d(0x894)+_0x300d2d(0x91a)+'s.mem'+_0x300d2d(0x757),'fMgwP':_0x300d2d(0x2e8),'YgqgR':function(_0x4a77b9,_0x35bb6c){return _0x4a77b9===_0x35bb6c;},'FBGgH':function(_0x54c148,_0x4236d3){return _0x16a2b0['Jkjag'](_0x54c148,_0x4236d3);}};if('hJEgG'!=='vtipe'){var _0x219a36=_0x41d8ba[_0x4766bc]||[],_0x305bea={'kind':_0x4766bc,'ptr':'0x'+_0x560be0[_0x300d2d(0x5f3)+_0x300d2d(0xc36)](0x1*0x2dd+0x2b*0x6d+-0x1c*0xc1),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x3b30b0=0x26cf+-0x2*0x10a9+0x5*-0x119;_0x3b30b0<_0x219a36[_0x300d2d(0x516)+'h'];_0x3b30b0++){if(_0x219a36[_0x3b30b0][0x2*0x1a5+-0x1620*0x1+0x5b*0x35]!=='v3')continue;var _0x2be1ab=_0x2563bb(_0x560be0,_0x219a36[_0x3b30b0][0x289*-0x5+0x5*-0xa4+0xf*0x10f],-0x2429*0x1+0x1*-0x233a+-0x26*-0x1e1);if(!_0x2be1ab)continue;_0x305bea[_0x300d2d(0x642)+'cs'][_0x300d2d(0x8f2)]({'o':'0x'+_0x219a36[_0x3b30b0][0x33a+0x1dc4+-0x107f*0x2]['toStr'+'ing'](-0x3*0x413+0xa8+-0xba1*-0x1),'v':_0x2be1ab});}var _0x57cc63=0x352*-0x5+-0x3cd+-0x1467*-0x1,_0x2186a5=_0x4766bc+'@'+_0x560be0,_0x390ef4=_0x36c8a1(_0x305bea[_0x300d2d(0x642)+'cs'],_0x2f9671(),_0x5bb316[_0x2186a5]);_0x5bb316[_0x2186a5]=_0x390ef4[_0x300d2d(0x568)]?{'o':_0x390ef4['posAt']}:null,_0x305bea['pos']=_0x390ef4[_0x300d2d(0xdb8)],_0x305bea['posAt']=_0x390ef4[_0x300d2d(0x568)],_0x305bea[_0x300d2d(0x9c5)]=_0x390ef4['held'],_0x305bea[_0x300d2d(0x279)+_0x300d2d(0x394)]=_0x390ef4[_0x300d2d(0x279)+_0x300d2d(0x394)],_0x305bea[_0x300d2d(0xa01)+'er']=_0x390ef4[_0x300d2d(0xa01)+'er'],_0x305bea[_0x300d2d(0x5f6)]=_0x390ef4[_0x300d2d(0x5f6)],void _0x57cc63;var _0xefd008=_0x483ad4[_0x4766bc],_0x10bd93=_0x2af7ec[_0x4766bc];if(_0x10bd93){if('eEcWr'!==_0x16a2b0[_0x300d2d(0x676)]){var _0x4ce3a6=_0x466573[_0x300d2d(0xd22)+'ement'+_0x300d2d(0x512)](_0x300d2d(0x70f)+_0x300d2d(0xbb6)+_0x300d2d(0x1e0)+'b');if(_0x9da4db['reyjo'](_0x296484,!_0x4ce3a6)&&_0x3f581e[_0x300d2d(0xbc1)]){var _0x1f178a=_0x4a3c02[_0x300d2d(0x2a2)+'eElem'+'ent'](_0x300d2d(0xb32));_0x1f178a['id']='sakur'+'a-sw-'+_0x300d2d(0x1e0)+'b',_0x1f178a[_0x300d2d(0x8d9)][_0x300d2d(0x82b)+'xt']=_0x9da4db[_0x300d2d(0x44c)](_0x9da4db[_0x300d2d(0x580)]+(_0x300d2d(0x2c7)+_0x300d2d(0x921)+_0x300d2d(0xaca)+_0x300d2d(0x38c)+_0x300d2d(0x454)+'.9);b'+'order'+':1px\x20'+_0x300d2d(0xb04)+_0x300d2d(0x78f)+'(255,'+_0x300d2d(0xbf8)+'77,.5'+_0x300d2d(0x95d)+_0x300d2d(0x6d3))+_0x11a561+';',_0x9da4db['AeRyc']),_0x1f178a['textC'+_0x300d2d(0x2bf)+'t']=_0x300d2d(0x70f)+'a',_0x1f178a[_0x300d2d(0x317)+'ck']=function(){var _0x8695e5=_0x300d2d;_0x9da4db[_0x8695e5(0x915)](_0x1768d6,![]),_0x9da4db['HwRyn'](_0x568bb4);},_0x3e0109['body'][_0x300d2d(0x28a)+_0x300d2d(0xe08)+'d'](_0x1f178a);}else!_0x4f5568&&_0x4ce3a6&&_0x4ce3a6[_0x300d2d(0x3b8)+'e']();}else{_0x305bea[_0x300d2d(0xc87)]={};for(var _0x380e12=0x1684+-0x2ee*0x9+0x3da;_0x380e12<_0x10bd93['lengt'+'h'];_0x380e12++){if('RYyrS'!==_0x300d2d(0xb36)){var _0x5414a1={},_0x900b0a=_0x5148c5();if(!_0x900b0a)return _0x5414a1;_0x5414a1[_0x16a2b0['mRTny']]=_0x900b0a['mouse'+_0x300d2d(0xa5b)];for(var _0x4e6bed in _0x900b0a[_0x300d2d(0x913)+'s'])_0x5414a1[_0x16a2b0['ngLxV'](_0x16a2b0['QDQLV'],_0x4e6bed)]=_0x900b0a[_0x300d2d(0x913)+'s'][_0x4e6bed];if(_0x900b0a[_0x300d2d(0x843)+'a'])_0x5414a1['Mouse'+_0x300d2d(0x4db)+_0x300d2d(0x843)+'a']=_0x900b0a[_0x300d2d(0x843)+'a'];return _0x5414a1;}else{var _0x221ef=_0x3b9fd4(_0x560be0+parseInt(_0x10bd93[_0x380e12][0x3*0xb5+0x158a*-0x1+0x136b],0x1*0x1d0b+0x164d+-0x669*0x8),_0x16a2b0[_0x300d2d(0xde5)]);if(_0x221ef!==undefined)_0x305bea[_0x300d2d(0xc87)][_0x10bd93[_0x380e12][0x1ff9+-0x2b*0x27+-0x196b]]=_0x221ef;}}}}if(_0xefd008){if(_0x16a2b0['KNCWN'](_0x16a2b0['rrDRK'],_0x300d2d(0x8e1)))for(var _0x180e10=-0x542*0x1+0x1c1e+-0x16dc*0x1;_0x16a2b0[_0x300d2d(0x929)](_0x180e10,_0xefd008['lengt'+'h']);_0x180e10++){if(_0x16a2b0['jfGBK'](_0x16a2b0[_0x300d2d(0x63a)],'fsuIb')){var _0xfee7f0=_0x3b9fd4(_0x16a2b0['yNIkg'](_0x560be0,parseInt(_0xefd008[_0x180e10][-0x13*-0x199+0x187b+0x2*-0x1b6b],-0x10e+-0x1b4a+0x1c68)),_0x300d2d(0x7cf));if(_0xfee7f0)_0x305bea[_0x300d2d(0x8f6)][_0xefd008[_0x180e10][0x1092+-0x1d7b*0x1+-0xcea*-0x1]]='0x'+(_0xfee7f0>>>0xf6*-0xc+-0x1d6a+0x1479*0x2)['toStr'+_0x300d2d(0xc36)](0x60d+-0x9*0x3ab+0x902*0x3);}else{var _0x3d664f='';_0x2d5783[_0x300d2d(0x54a)+'irePr'+_0x300d2d(0x4b4)]&&(_0x3d664f=_0x16a2b0['GyxZS'](_0x16a2b0[_0x300d2d(0x922)](_0x16a2b0[_0x300d2d(0x4e4)](_0x16a2b0[_0x300d2d(0x65a)](_0x16a2b0[_0x300d2d(0x9e2)]+_0x585073['hookF'+_0x300d2d(0x8be)+_0x300d2d(0x4b4)][_0x300d2d(0x6e9)],'ms\x20wi'+'th\x20or'+_0x300d2d(0x3ee)+_0x300d2d(0x6ca)+'='),_0x5dbac2[_0x300d2d(0x54a)+_0x300d2d(0x8be)+_0x300d2d(0x4b4)]['origi'+_0x300d2d(0x960)+'nc'])+('\x20and\x20'+_0x300d2d(0x2d9)+_0x300d2d(0x84f)+_0x300d2d(0x67c))+_0x1c579d['hookF'+'irePr'+'oof']['resol'+'veGam'+'eAtFi'+'re'],'\x20(sou'+_0x300d2d(0x8a9)),_0x368399[_0x300d2d(0x54a)+'irePr'+_0x300d2d(0x4b4)][_0x300d2d(0x549)+_0x300d2d(0x7b7)+_0x300d2d(0xd5e)+'e']||_0x16a2b0['CRQKM'])+_0x16a2b0[_0x300d2d(0x755)]),_0x6a4431[_0x300d2d(0xbd9)+'ngs'][_0x300d2d(0x8f2)](_0x300d2d(0x262)+_0x300d2d(0xd83)+_0x300d2d(0x5a5)+'not\x20r'+'esolv'+_0x300d2d(0x9a0)+_0x300d2d(0x3a5)+_0x300d2d(0x8b6)+'\x20'+(_0x55cd6e['globa'+'ls']['gameS'+'ource']||_0x300d2d(0xaeb))+_0x300d2d(0xdbc)+('Heap\x20'+_0x300d2d(0x6b6)+_0x300d2d(0x86c)+_0x300d2d(0xb39)+_0x300d2d(0xa08)+_0x300d2d(0x9af)+_0x300d2d(0xa70)+'e\x20obj'+_0x300d2d(0xc45)+_0x300d2d(0xd94)+'odule'+_0x300d2d(0x2a6)+_0x300d2d(0x5e0)+_0x300d2d(0xcd2)+_0x300d2d(0xab9)+'.')+_0x3d664f);}}else{if(_0x27f6c1&&_0x2890e5[_0x300d2d(0xa76)+'r']&&_0x1e83c2['buffe'+'r'][_0x300d2d(0x88c)+'ength'])return _0x4e291a['sourc'+'e']=_0x2f54d3[_0x300d2d(0x700)+'e']||_0x9da4db['MPwZY'],new _0x8218d8(_0x1d0dcb[_0x300d2d(0xa76)+'r']);}}return _0x305bea['scala'+'rs']=_0x219a36[_0x300d2d(0xb7d)+'r'](function(_0x151bdd){var _0x2ec11b=_0x300d2d;return _0x151bdd[-0x86b*0x3+0x1af*0x16+0x2*-0x5e4]===_0x9da4db[_0x2ec11b(0x30f)]||_0x9da4db['YgqgR'](_0x151bdd[-0x582+0x186+0x3fd],_0x2ec11b(0x97b));})[_0x300d2d(0x357)](function(_0x3637e8){return{'o':_0x16a2b0['raGCT']('0x',_0x3637e8[-0xbd3+-0xb*-0x27e+-0xf97]['toStr'+'ing'](0x2026+-0x102d*0x1+0x1*-0xfe9)),'v':_0x3b9fd4(_0x560be0+_0x3637e8[0x221b*-0x1+0x1*0x104b+0x11d0],_0x3637e8[-0xd11+0x86*0x1+0xb*0x124])};})[_0x300d2d(0xb7d)+'r'](function(_0x333571){return _0x9da4db['FBGgH'](_0x333571['v'],undefined)&&isFinite(_0x333571['v']);})['slice'](-0x2192+0x178+0x201a,-0x1099+-0x151e+0x565*0x7),_0x305bea;}else _0x4256b2=_0x34992c(_0x43d550);}function _0x220e05(){var _0x2e8391=_0xe93fad,_0x1ec2bd={'dTRfk':_0x16a2b0[_0x2e8391(0x86f)],'nlblW':function(_0x2041f6,_0x21a467){return _0x2041f6^_0x21a467;},'xdBhP':function(_0x3ba5c4,_0x12ad3e){return _0x16a2b0['JpTKi'](_0x3ba5c4,_0x12ad3e);},'mCmrU':function(_0x1a9aad,_0x3c6274){return _0x1a9aad!==_0x3c6274;}},_0x4aa0cf={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x380da6=_0x27746d['FPSco'+'ntrol'+'ler']&&_0x27746d['FPSco'+_0x2e8391(0xc4b)+'ler']['ptr']||0x1034+0x220a+-0x3b*0xda,_0x114646=_0x3736fb[_0x2e8391(0xc9b)+'nNetw'+'orkSy'+'nc']||{},_0x19ab57=Object[_0x2e8391(0x227)](_0x114646);for(var _0x435f55=-0x80f*-0x2+0x2123*0x1+0x106b*-0x3;_0x435f55<_0x19ab57[_0x2e8391(0x516)+'h']&&_0x435f55<0x383*-0x3+-0x775+0x1*0x1216;_0x435f55++){if(_0x2e8391(0x92f)===_0x2e8391(0x5cd))try{_0x4b494b['setIt'+'em'](_0x1e845a,_0x5b93c3[_0x2e8391(0x453)+'gify'](_0x816fa2[_0x2e8391(0xdb8)]));}catch(_0x267f5c){}else{var _0x2a881d=_0x16a2b0[_0x2e8391(0x299)][_0x2e8391(0x388)]('|'),_0xb05967=-0x1*-0x631+0x12af+0x10*-0x18e;while(!![]){switch(_0x2a881d[_0xb05967++]){case'0':var _0x525896=_0x114646[_0x19ab57[_0x435f55]];continue;case'1':var _0x4a50ba=_0x16a2b0['HFJCe'](_0x10567b,_0x16a2b0['oWdDi'],_0x525896['ptr']);continue;case'2':_0x4a50ba[_0x2e8391(0x675)+'SeenM'+'s']=_0x16a2b0[_0x2e8391(0xc9a)](_0x525896[_0x2e8391(0x675)+_0x2e8391(0x85c)],_0x10a243);continue;case'3':_0x4a50ba[_0x2e8391(0x49b)+'al']=!!_0x380da6&&_0x16a2b0[_0x2e8391(0xa1a)](_0x4a50ba[_0x2e8391(0x8f6)]['fps'],'0x'+_0x380da6[_0x2e8391(0x5f3)+'ing'](-0x2*-0x31b+-0x5*-0x473+-0x1c65));continue;case'4':_0x4aa0cf[_0x2e8391(0xd93)+'rs'][_0x2e8391(0x8f2)](_0x4a50ba);continue;case'5':if(_0x4a50ba['refs']['healt'+'h']){var _0x52c968=_0x16a2b0[_0x2e8391(0x483)](parseInt,_0x4a50ba[_0x2e8391(0x8f6)][_0x2e8391(0x910)+'h'],0x631+0x1*0xd4f+0x1*-0x1370);_0x4a50ba[_0x2e8391(0x910)+'h']=_0x16a2b0[_0x2e8391(0x2ff)](_0x37bc9e,_0x52c968,_0x2e8391(0xdde)+_0x2e8391(0x1a9)+'pt',_0x16a2b0['zQpjX']);}continue;case'6':_0x4a50ba[_0x2e8391(0x489)]=_0x525896[_0x2e8391(0x489)];continue;}break;}}}_0x4aa0cf[_0x2e8391(0xd93)+_0x2e8391(0xd86)+'t']=_0x19ab57[_0x2e8391(0x516)+'h'];var _0xa7c21e=_0x3736fb[_0x2e8391(0x39a)+'otrol'+_0x2e8391(0x313)]||{},_0x4929a7=Object[_0x2e8391(0x227)](_0xa7c21e);for(var _0x1cf95f=0x26f5+-0x5f*0x68+-0x5d;_0x1cf95f<_0x4929a7[_0x2e8391(0x516)+'h']&&_0x16a2b0[_0x2e8391(0x43b)](_0x1cf95f,-0xc5a+0x1754+-0xae2);_0x1cf95f++){var _0x4e2c04=_0x16a2b0['Rigko'](_0x10567b,_0x2e8391(0x39a)+_0x2e8391(0xc1a)+_0x2e8391(0x313),_0xa7c21e[_0x4929a7[_0x1cf95f]][_0x2e8391(0x999)]);_0x4e2c04[_0x2e8391(0x489)]=_0xa7c21e[_0x4929a7[_0x1cf95f]][_0x2e8391(0x489)],_0x4e2c04['first'+'SeenM'+'s']=_0xa7c21e[_0x4929a7[_0x1cf95f]][_0x2e8391(0x675)+'Seen']-_0x10a243;if(_0x4e2c04['refs']['healt'+'h'])_0x4e2c04['healt'+'h']=_0x16a2b0[_0x2e8391(0x912)](_0x37bc9e,parseInt(_0x4e2c04['refs'][_0x2e8391(0x910)+'h'],0x2241+-0x5a5*0x2+-0x16e7),'Healt'+_0x2e8391(0x1a9)+'pt','obfI');_0x4aa0cf[_0x2e8391(0x3b1)]['push'](_0x4e2c04);}_0x4aa0cf[_0x2e8391(0x9d3)+_0x2e8391(0xd6a)]=_0x4929a7[_0x2e8391(0x516)+'h'];var _0x4e3a5e=_0x3736fb[_0x2e8391(0xb1f)+_0x2e8391(0xc4b)+_0x2e8391(0x313)]||{},_0x344ff5=Object['keys'](_0x4e3a5e);for(var _0x10df4f=-0x36d*0x1+-0x1039+0x1f7*0xa;_0x16a2b0[_0x2e8391(0xd6f)](_0x10df4f,_0x344ff5['lengt'+'h'])&&_0x16a2b0[_0x2e8391(0x43b)](_0x10df4f,0xd*-0xbf+0x1*0xdab+0x2*-0x1f0);_0x10df4f++){var _0x4c4ebe=_0x10567b(_0x16a2b0[_0x2e8391(0x867)],_0x4e3a5e[_0x344ff5[_0x10df4f]]['ptr']);_0x4c4ebe['hits']=_0x4e3a5e[_0x344ff5[_0x10df4f]][_0x2e8391(0x489)],_0x4c4ebe[_0x2e8391(0x49b)+'al']=_0x16a2b0[_0x2e8391(0x9e5)](_0x4e3a5e[_0x344ff5[_0x10df4f]][_0x2e8391(0x999)],_0x380da6),_0x4aa0cf[_0x2e8391(0xc22)+_0x2e8391(0x500)+'s']['push'](_0x4c4ebe);}_0x4aa0cf['contr'+_0x2e8391(0x500)+'Count']=_0x344ff5['lengt'+'h'];var _0xb36265=_0x4aa0cf[_0x2e8391(0xd93)+'rs'][_0x2e8391(0x9ca)+'t'](_0x4aa0cf[_0x2e8391(0x3b1)]);for(var _0x1442b1=0x3e1+0x649*0x4+-0x187*0x13;_0x16a2b0[_0x2e8391(0x2f9)](_0x1442b1,_0xb36265['lengt'+'h']);_0x1442b1++){if(_0xb36265[_0x1442b1][_0x2e8391(0x49b)+'al'])continue;_0x4aa0cf[_0x2e8391(0x743)+'es']['push'](_0xb36265[_0x1442b1]);}_0x4aa0cf[_0x2e8391(0x506)+_0x2e8391(0x791)]=_0x4aa0cf[_0x2e8391(0x743)+'es'][_0x2e8391(0x516)+'h'];var _0x25b7c0={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0xb17ac2={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x2f04ea in _0x27746d){var _0x6ae13c=_0x27746d[_0x2f04ea];if(!_0x6ae13c||!_0x6ae13c[_0x2e8391(0x999)])continue;if(!_0x16a2b0['osXNf'](_0x2f04ea,_0x25b7c0))continue;_0x4aa0cf['manag'+_0x2e8391(0x8d7)][_0x2f04ea]='0x'+_0x6ae13c['ptr'][_0x2e8391(0x5f3)+'ing'](-0x114c+-0x101e*0x1+0x5*0x6b2);var _0x24c899=_0x16a2b0['aGwYW'](_0x3b9fd4,_0x16a2b0['uiZsg'](_0x6ae13c['ptr'],_0x25b7c0[_0x2f04ea]),'u32'),_0x3b2f30=_0x16a2b0[_0x2e8391(0xb1b)](_0x3b9fd4,_0x6ae13c['ptr']+_0xb17ac2[_0x2f04ea],_0x2e8391(0x7cf));_0x24c899&&_0x16a2b0[_0x2e8391(0xb1d)](_0x4aa0cf['camer'+'a'],null)&&(_0x16a2b0[_0x2e8391(0x710)]==='QwNhz'?_0x47977a=_0x43bc4b['keys'](_0x4fe22f)['slice'](-0x20a1+0x7b*-0x1b+0x2d9a,-0x228+0x76+0x1*0x1ca):(_0x4aa0cf[_0x2e8391(0x843)+'a']='0x'+_0x16a2b0[_0x2e8391(0x9fe)](_0x24c899,-0x1b48+0xfa+0x1a4e)[_0x2e8391(0x5f3)+_0x2e8391(0xc36)](-0xacb+-0xd4*-0x10+0x265*-0x1),_0x4aa0cf['camer'+_0x2e8391(0x2b3)]=_0x2f04ea));if(_0x3b2f30&&_0x16a2b0['neoON'](_0x4aa0cf[_0x2e8391(0xd93)+_0x2e8391(0x914)],null))_0x4aa0cf[_0x2e8391(0xd93)+_0x2e8391(0x914)]=_0x16a2b0['lSvoA']('0x',_0x16a2b0[_0x2e8391(0x2b2)](_0x3b2f30,-0x33*-0xa7+0x24d6+-0x1*0x461b)[_0x2e8391(0x5f3)+_0x2e8391(0xc36)](0x3b*0x15+0xe5a+-0x53*0x3b));}if(!_0x4aa0cf['playe'+_0x2e8391(0xd86)+'t']&&!_0x4aa0cf['botCo'+_0x2e8391(0xd6a)]&&!_0x4aa0cf[_0x2e8391(0x843)+'a'])_0x16a2b0['BFxTE']===_0x2e8391(0x7f9)?_0x4aa0cf[_0x2e8391(0x6c6)]=_0x16a2b0['pyIqb']('No\x20Ph'+'otonN'+_0x2e8391(0x521)+_0x2e8391(0xaed)+',\x20no\x20'+'NPC_C'+_0x2e8391(0xc1a)+_0x2e8391(0x33b)+_0x2e8391(0x5de)+_0x2e8391(0xc8e)+_0x2e8391(0x730)+_0x2e8391(0xc24)+'That\x20'+_0x2e8391(0x80b)+_0x2e8391(0xb67),_0x2e8391(0xcc4)+_0x2e8391(0xd02)+_0x2e8391(0x736)+_0x2e8391(0xcaf)+_0x2e8391(0x398)+_0x2e8391(0xa5a)+'\x20reco'+'n\x20INS'+_0x2e8391(0xa18)+_0x2e8391(0xb64)+_0x2e8391(0x449)+'d,\x20no'+'t\x20the'+_0x2e8391(0xd5f)+'.'):(_0x167c2a[_0x2e8391(0x6fb)]=_0x281c6f,_0x5f2b76());else{if(!_0x4aa0cf['enemy'+'Count']){if(_0x16a2b0['DIdsj']==='jSfUR')_0x4aa0cf[_0x2e8391(0x6c6)]=_0x16a2b0['varms']('Playe'+_0x2e8391(0x851)+_0x2e8391(0x6af)+_0x2e8391(0x693)+'but\x20n'+'one\x20a'+_0x2e8391(0xe05)+'assif'+_0x2e8391(0x856)+'s\x20ene'+_0x2e8391(0x982)+'yet\x20-'+'\x20chec'+'k\x20','isLoc'+'al\x20on'+_0x2e8391(0x5fa)+'\x20entr'+_0x2e8391(0x64e)+'`play'+'ers`.');else{if(_0x59c484===_0x1ec2bd['dTRfk'])return _0x22f7fe(_0x1ec2bd[_0x2e8391(0x54f)](_0x106a59,_0x3834f8));if(_0x7f418d===_0x2e8391(0x9b9))return _0x1ec2bd[_0x2e8391(0x4d3)](_0x1ec2bd[_0x2e8391(0x54f)](_0x7ba868,_0x5eb39e),0x1d9+0x36*0x15+-0x647);return _0x1ec2bd[_0x2e8391(0xcca)]((_0x33527a^_0x4b4732)&-0x147b+0x944+-0x61b*-0x2,0x1580+-0xaf*0xd+0xc9d*-0x1)?-0xef9+-0xa33+0x192d:-0x1*0x163c+0x1*0x10e8+0x1f*0x2c;}}}try{var _0x1bad11=('4|2|3'+'|0|1')['split']('|'),_0x565c7e=0x106+0x790+-0x896;while(!![]){switch(_0x1bad11[_0x565c7e++]){case'0':for(var _0x21c637=-0x218a+0x12e7+-0x1*-0xea3;_0x21c637<_0x49ab6c[_0x2e8391(0x516)+'h']&&_0x21c637<0x1d28+-0xe*-0x18d+-0x233e;_0x21c637++){var _0x336637=_0x16a2b0['UGJNz'](_0x49ab6c[_0x21c637][_0x2e8391(0x2a8)+'s'][_0x2e8391(0xa7a)](','),_0x16a2b0['MWXUv'])+(_0x49ab6c[_0x21c637]['retur'+_0x2e8391(0x255)]||_0x2e8391(0x6ff));_0xf4f5aa[_0x336637]=_0x16a2b0[_0x2e8391(0x87b)](_0xf4f5aa[_0x336637]||0x1*-0x616+0x2e8+0x32e,0xd*-0x17+-0x13c9+0x14f5*0x1);}continue;case'1':_0x4aa0cf[_0x2e8391(0x855)+_0x2e8391(0x708)]=_0xf4f5aa;continue;case'2':var _0x49ab6c=_0x3d0afd&&_0x3d0afd[_0x2e8391(0xa11)+_0x2e8391(0x73b)+_0x2e8391(0xbfd)+'es']||[];continue;case'3':var _0xf4f5aa={};continue;case'4':var _0x3d0afd=window['Unity'+'WebMo'+_0x2e8391(0x4fa)]&&window[_0x2e8391(0x262)+_0x2e8391(0xc5c)+_0x2e8391(0x4fa)]['Runti'+'me'];continue;}break;}}catch(_0x15918e){}return _0x4aa0cf;}function _0x37bc9e(_0x4c1677,_0x4d7c20,_0x58051f){var _0x41ceda=_0xe93fad;try{var _0xe549f9=_0x41d8ba[_0x4d7c20]||[];for(var _0x32fc8c=0x1f85*0x1+-0x23ac*0x1+-0x427*-0x1;_0x16a2b0[_0x41ceda(0x492)](_0x32fc8c,_0xe549f9['lengt'+'h']);_0x32fc8c++){if(_0x16a2b0['zDftT'](_0xe549f9[_0x32fc8c][-0x2e6+-0x1846+0x1b2d],_0x58051f))continue;var _0x3f2074=_0xe549f9[_0x32fc8c][0x2d4*-0x2+-0x1*-0x67f+-0x2b*0x5];if(_0x58051f['index'+'Of'](_0x41ceda(0xca6))===0x1f3d+-0x183*-0xc+-0x1*0x3161){var _0x296931=_0x16a2b0[_0x41ceda(0xabd)](_0x32b6fa,_0x4c1677,_0x3f2074,_0x58051f);if(!_0x296931)return null;_0x296931['o']=_0x3f2074,_0x296931['k']=_0x58051f;var _0x3c7c21=_0x5194ee([_0x296931]);if(!_0x3c7c21[_0x41ceda(0x5ed)]['lengt'+'h'])return null;return _0x3c7c21[_0x41ceda(0x5ed)][-0x419*0x1+-0x1e5a+0x2273];}var _0x15f9ba=_0x16a2b0['HFJCe'](_0x3b9fd4,_0x16a2b0[_0x41ceda(0x5a6)](_0x4c1677,_0x3f2074),_0x58051f);if(_0x15f9ba===undefined)return null;return{'o':'0x'+_0x3f2074[_0x41ceda(0x5f3)+'ing'](0x1400+-0x111*-0x12+-0x2722),'v':_0x15f9ba};}}catch(_0x46fb31){}return null;}function _0x1c43d3(){var _0x4f43d1=_0xe93fad,_0x3f2969={'jMjVR':'auto','xSizg':_0x4f43d1(0x2a1)},_0x5e74c1={};_0x2bc082['ok']=0x223*-0x2+0x1dc5+-0x197f,_0x2bc082['faile'+'d']=0x971*0x1+-0x1*0x1669+0xcf8,_0x2bc082[_0x4f43d1(0x781)+'rror']=null;var _0x46c2c7=Object['keys'](_0x41d8ba);for(var _0x646788=0x16ae+-0x1*0x202e+0x980;_0x646788<_0x46c2c7[_0x4f43d1(0x516)+'h'];_0x646788++){var _0x26c98f=_0x46c2c7[_0x646788],_0x1fcf99=_0x27746d[_0x26c98f];if(!_0x1fcf99||!_0x1fcf99['ptr'])continue;var _0x124e47=_0x41d8ba[_0x26c98f]||[],_0x44684c=[];for(var _0x19510f=0x214+0x2fc*0x1+0x1*-0x510;_0x19510f<_0x124e47[_0x4f43d1(0x516)+'h'];_0x19510f++){if('RDwoy'===_0x16a2b0[_0x4f43d1(0x2e1)])_0x5ecd25();else{var _0x47db30=_0x124e47[_0x19510f][0x11a7+-0x1ee6+-0xd3f*-0x1],_0x238e58=_0x124e47[_0x19510f][0xcdc*-0x1+-0x1fd*-0x11+-0x14f0];if(_0x238e58[_0x4f43d1(0xd12)+'Of'](_0x4f43d1(0xca6))===-0x447+-0x5b+0x4a2){var _0x1057c1=_0x16a2b0[_0x4f43d1(0xabd)](_0x32b6fa,_0x1fcf99['ptr'],_0x47db30,_0x238e58);if(!_0x1057c1)continue;_0x1057c1['o']=_0x47db30,_0x1057c1['k']=_0x238e58,_0x44684c[_0x4f43d1(0x8f2)](_0x1057c1);}else{if(_0x4f43d1(0x501)!==_0x4f43d1(0x501))_0x33b1d5[_0x4f43d1(0x8d9)][_0x4f43d1(0x470)]=_0x4f43d1(0xa02),_0x106f75['style'][_0x4f43d1(0xe0f)]=_0x3f2969['jMjVR'],_0xd0b00f[_0x4f43d1(0x8d9)]['right']='24px',_0x16011c['style'][_0x4f43d1(0x46f)+'m']=_0x3f2969[_0x4f43d1(0x75d)];else{var _0x34b3ec=_0x3b9fd4(_0x1fcf99['ptr']+_0x47db30,_0x238e58);if(_0x16a2b0['neoON'](_0x34b3ec,undefined))continue;var _0x1f87fd={'o':_0x47db30,'k':_0x238e58,'v':_0x34b3ec};if(_0x16a2b0[_0x4f43d1(0x8b3)](_0x238e58,'v2')||_0x16a2b0[_0x4f43d1(0x42b)](_0x238e58,'v3')||_0x238e58==='v4'){var _0x1e9379=_0x16a2b0[_0x4f43d1(0xd54)](_0x238e58,'v2')?-0x1*-0x11f5+0xb65*-0x1+-0x68e:_0x16a2b0[_0x4f43d1(0x5fd)](_0x238e58,'v3')?-0x3*0xb1b+0x299+0x1ebb:0x19a8+0x9d*0x3f+-0xcdb*0x5,_0x4ad55b=_0x2563bb(_0x1fcf99['ptr'],_0x47db30,_0x1e9379);_0x4ad55b&&(_0x1f87fd[_0x4f43d1(0x748)]=_0x4ad55b,_0x1f87fd['v']=_0x4ad55b[0xf9d+-0xefd+-0xa0]);}_0x44684c['push'](_0x1f87fd);}}}}if(_0x44684c['lengt'+'h']){var _0x3275f3=_0x5194ee(_0x44684c);_0x5e74c1[_0x26c98f]=_0x3275f3['rows'],_0x12ba14[_0x26c98f]={'key':_0x3275f3['key'],'sane':_0x3275f3[_0x4f43d1(0xbcc)],'checked':_0x3275f3['check'+'ed'],'keyConsistent':_0x3275f3['keyCo'+_0x4f43d1(0x4e2)+_0x4f43d1(0xcb8)],'keySource':_0x3275f3['keySo'+_0x4f43d1(0xe0c)]};}}return _0x5e74c1;}function _0x5194ee(_0x47f66b){var _0x47271d=_0xe93fad,_0x466a6e=-0x3*-0x5a8+-0xee3+-0x215,_0xcda895=-0x15db+0x2*-0x54b+0x2071*0x1,_0x157548=null;for(var _0x3e307d=-0x136*-0x1+0xdb1*0x1+0x6d*-0x23;_0x3e307d<_0x47f66b[_0x47271d(0x516)+'h'];_0x3e307d++){if(_0x16a2b0[_0x47271d(0xa71)]('opzGy',_0x47271d(0x332)))_0x2d1d20=_0x16a2b0[_0x47271d(0x4cc)](_0x115c1c,_0xe31334&&_0x1835bc[_0x47271d(0x6b5)+'ge']||_0x4fc791);else{var _0xc9903=_0x47f66b[_0x3e307d];if(_0xc9903['k']['index'+'Of'](_0x47271d(0xca6))!==-0x343*0x2+-0x108+0x3c7*0x2)continue;_0xc9903['v']=_0x1e46e0(_0xc9903['k'],_0xc9903['hidde'+'n'],_0xc9903['keyAt'+_0x47271d(0x584)+'t0']),_0xc9903[_0x47271d(0x7db)+'ed']=_0xc9903[_0x47271d(0x73a)+'Offse'+'t0'],_0xc9903[_0x47271d(0x2d0)]=_0x16a2b0[_0x47271d(0xbd1)]+_0xc9903['hidde'+'n']+_0x16a2b0['JTwnM']+_0xc9903[_0x47271d(0x551)]+(_0xc9903[_0x47271d(0x32d)]?_0x16a2b0['odECm']:'')+'\x20k0='+_0xc9903[_0x47271d(0x73a)+_0x47271d(0x584)+'t0']+_0x47271d(0xe12)+_0xc9903[_0x47271d(0x58b)];if(_0x16a2b0[_0x47271d(0xa71)](_0x157548,null))_0x157548=_0xc9903['keyAt'+'Offse'+'t0'];_0xcda895++,_0x568f40(_0xc9903)?(_0x466a6e++,_0xc9903[_0x47271d(0xbcc)]=!![]):_0xc9903[_0x47271d(0xbcc)]=![],delete _0xc9903[_0x47271d(0x599)];}}return{'rows':_0x47f66b,'key':_0x157548,'sane':_0x466a6e,'checked':_0xcda895,'keyConsistent':_0x16a2b0['rrzmp'](_0x58b64b,_0x47f66b),'keySource':_0x16a2b0[_0x47271d(0x64d)]};}function _0x58b64b(_0x391a27){var _0x36a1f4=_0xe93fad,_0x40cd0d={};for(var _0x168131=0x164e+0xb*-0x2d5+0x8d9;_0x168131<_0x391a27[_0x36a1f4(0x516)+'h'];_0x168131++){var _0x10816f=_0x391a27[_0x168131];if(_0x16a2b0['CxUyl'](_0x10816f['k'][_0x36a1f4(0xd12)+'Of'](_0x36a1f4(0xca6)),-0x12af*0x1+-0xfb9+-0x5bc*-0x6))continue;if(_0x40cd0d[_0x10816f['k']]===undefined)_0x40cd0d[_0x10816f['k']]=_0x10816f[_0x36a1f4(0x7db)+'ed'];else{if(_0x16a2b0[_0x36a1f4(0xd0d)](_0x40cd0d[_0x10816f['k']],_0x10816f[_0x36a1f4(0x7db)+'ed']))return![];}}return!![];}function _0x568f40(_0x2a57e9){var _0x50d0e3=_0xe93fad,_0x1e7132=('2|0|4'+'|6|1|'+'3|5')['split']('|'),_0x521e08=-0x13be+-0x1941+0x2cff*0x1;while(!![]){switch(_0x1e7132[_0x521e08++]){case'0':if(typeof _0x4792f1!==_0x16a2b0['JDLVw']||!_0x16a2b0['bGLjB'](isFinite,_0x4792f1))return![];continue;case'1':if(_0x16a2b0[_0x50d0e3(0x93b)](typeof _0x21575a,_0x16a2b0['JDLVw'])||!isFinite(_0x21575a))return!![];continue;case'2':var _0x4792f1=_0x2a57e9['v'];continue;case'3':if(_0x16a2b0[_0x50d0e3(0x27c)](_0x2a57e9['act'],0x7a5*-0x5+0xc76+0x19c4))return Math[_0x50d0e3(0x264)](_0x16a2b0[_0x50d0e3(0xc9a)](_0x4792f1,_0x21575a))<=Math['max'](-0x25eb+-0x3*-0x109+0x1*0x22d1,Math[_0x50d0e3(0x264)](_0x21575a)*(-0x2005*-0x1+-0x11*-0x23c+0x1*-0x4601+0.6));continue;case'4':if(_0x2a57e9['k']===_0x50d0e3(0x46e))return _0x16a2b0[_0x50d0e3(0xd18)](_0x4792f1,-0xf82+0x23*-0xe5+-0x31f*-0xf)||_0x4792f1===0x2326+0x34c*-0x2+-0x1c8d;continue;case'5':return Math['abs'](_0x4792f1)<0xd514*-0x440b+0x147c96b4+-0xc351f*-0x7d8;case'6':var _0x21575a=_0x2a57e9[_0x50d0e3(0x551)];continue;}break;}}function _0x4a4a19(){var _0x5f32c5=_0xe93fad,_0x4ae59c={};try{var _0x1b8d34=window[_0x5f32c5(0x262)+_0x5f32c5(0xc5c)+_0x5f32c5(0x4fa)]&&window['Unity'+'WebMo'+'dkit']['Runti'+'me'];_0x4ae59c[_0x5f32c5(0xc87)]=_0x1b8d34&&_0x1b8d34[_0x5f32c5(0x214)+_0x5f32c5(0xd44)+'g']||null,_0x4ae59c['tagMa'+'tches']=!!(_0x1b8d34&&_0x538573&&_0x1b8d34['__sak'+_0x5f32c5(0xd44)+'g']===_0x538573),_0x4ae59c[_0x5f32c5(0x1bd)+_0x5f32c5(0x3ec)+'e']=_0x1b8d34&&_0x1b8d34[_0x5f32c5(0x284)]?typeof _0x1b8d34[_0x5f32c5(0x284)]:_0x5f32c5(0xaeb),_0x4ae59c[_0x5f32c5(0x94b)+_0x5f32c5(0x6f1)+_0x5f32c5(0x387)+'Expor'+'ted']=!!(_0x6247f4&&_0x6247f4[_0x5f32c5(0xd55)+_0x5f32c5(0x5dc)]&&_0x6247f4[_0x5f32c5(0xd55)+_0x5f32c5(0x5dc)]===_0x1b8d34),_0x4ae59c['plugi'+_0x5f32c5(0x6f1)+_0x5f32c5(0xd03)+'me']=_0x6247f4&&_0x6247f4[_0x5f32c5(0xd55)+'ime']&&_0x6247f4['_runt'+_0x5f32c5(0x5dc)]['_game']?typeof _0x6247f4[_0x5f32c5(0xd55)+'ime']['_game']:_0x5f32c5(0xaeb);}catch(_0x145f47){if(_0x5f32c5(0x55f)===_0x16a2b0[_0x5f32c5(0xa25)]){var _0xca9659=_0x1b29fd[_0x5f32c5(0x2a2)+_0x5f32c5(0xc69)+'ent'](_0x5f32c5(0x8d9));_0xca9659['id']=_0x5f32c5(0x70f)+'a-sw-'+_0x5f32c5(0xc93)+'s',_0xca9659[_0x5f32c5(0x4ff)+'onten'+'t']='#saku'+_0x5f32c5(0xa5e)+'-v2{a'+'ll:in'+'itial'+'}',(_0x16165e[_0x5f32c5(0x57f)]||_0xa94132[_0x5f32c5(0xdc1)+'entEl'+_0x5f32c5(0x99f)])['appen'+'dChil'+'d'](_0xca9659);}else _0x4ae59c[_0x5f32c5(0x8a4)]=_0x16a2b0[_0x5f32c5(0xb84)](String,_0x145f47&&_0x145f47[_0x5f32c5(0x6b5)+'ge']||_0x145f47);}return _0x4ae59c;}function _0x5e65c9(){var _0x232300=_0xe93fad;if(_0x16a2b0[_0x232300(0x8bd)](_0x16a2b0['nsaak'],_0x16a2b0[_0x232300(0xae0)]))try{if(_0x256dc1[_0x5c963b]['conte'+_0x232300(0xd50)+_0x232300(0x63c)])_0x5371a3[_0x3951d1]['conte'+_0x232300(0xd50)+'dow']['postM'+_0x232300(0xbbc)+'e'](_0x268a7c,'*');}catch(_0x45c9ca){}else{var _0x4b8bfe=['unity'+_0x232300(0xa87)+'nce',_0x232300(0x321)+'Game','game',_0x16a2b0[_0x232300(0xd28)]],_0x3fcda6={};for(var _0x4458f3=0x5*-0x6bb+0x26c2*0x1+-0x51b;_0x16a2b0[_0x232300(0x903)](_0x4458f3,_0x4b8bfe['lengt'+'h']);_0x4458f3++){var _0x2b93b3=_0x4b8bfe[_0x4458f3],_0xfd5edc=typeof window[_0x2b93b3];_0x3fcda6[_0x2b93b3]=_0x16a2b0['FAVHm'](_0xfd5edc,_0x232300(0x2ad)+'ined')?_0x232300(0x2ad)+'ined':_0xfd5edc;}var _0xd9824f=_0x4d7c90();_0x3fcda6['gameS'+'ource']=_0x2bc082[_0x232300(0x700)+'e'];try{if(_0x16a2b0[_0x232300(0x7ed)](_0x16a2b0['PpNZt'],_0x16a2b0['xtWkJ']))_0x3fcda6[_0x232300(0x6e5)+_0x232300(0x2bb)]=!!(_0xd9824f&&_0xd9824f[_0x232300(0xa35)+'e']),_0x3fcda6[_0x232300(0x9f4)+'8']=!!(_0xd9824f&&_0xd9824f[_0x232300(0xa35)+'e']&&_0xd9824f['Modul'+'e'][_0x232300(0xba1)+'8']),_0x3fcda6['heapB'+_0x232300(0x266)]=_0x3fcda6['heapU'+'8']?_0xd9824f['Modul'+'e'][_0x232300(0xba1)+'8']['lengt'+'h']:0x2322+-0x1*-0x21e9+-0xdcf*0x5;else{var _0x58abcb=_0x5658b9['data'];if(!_0x58abcb||_0x58abcb[_0x232300(0x214)+'ura']!==_0x52c8aa)return;try{if(_0x58abcb['kind']===_0x232300(0x3fd)){_0x302102()[_0x232300(0x409)]({'host':_0x58abcb['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x58abcb['kind']===_0x16a2b0[_0x232300(0x9fd)])_0x3c6c83()[_0x232300(0x409)](_0x58abcb[_0x232300(0xada)+'t']);}catch(_0x1ced71){_0x220d7d[_0x232300(0xb3d)](_0x16a2b0[_0x232300(0xc3a)],_0x16a2b0[_0x232300(0xd58)]+_0x1e1bd1,_0x1ced71);}}}catch(_0x483fbd){_0x3fcda6[_0x232300(0x6e5)+'dule']=![],_0x3fcda6['heapU'+'8']=![],_0x3fcda6['heapB'+_0x232300(0x266)]=0x8*0x1f6+-0x175*0x17+0x11d3;}return _0x3fcda6[_0x232300(0x61e)+_0x232300(0x76f)+'er']=typeof _0x5de75a,_0x3fcda6;}}function _0x1fe7cf(){var _0x373fe1=_0xe93fad,_0x37166f={},_0x4cc0e0=_0x30c6b3();if(!_0x4cc0e0)return _0x37166f;_0x37166f[_0x16a2b0[_0x373fe1(0xba0)]]=_0x4cc0e0['mouse'+_0x373fe1(0xa5b)];for(var _0x47e29b in _0x4cc0e0[_0x373fe1(0x913)+'s'])_0x37166f[_0x373fe1(0x4c3)+_0x373fe1(0x4db)+_0x47e29b]=_0x4cc0e0[_0x373fe1(0x913)+'s'][_0x47e29b];if(_0x4cc0e0['camer'+'a'])_0x37166f[_0x373fe1(0x4c3)+'Look+'+'camer'+'a']=_0x4cc0e0['camer'+'a'];return _0x37166f;}function _0x42e057(_0x3bbda3){var _0x102e48=_0xe93fad,_0x527404={};for(var _0x24a14c in _0x3bbda3){if(_0x16a2b0['FVRnX'](_0x102e48(0x523),'ssGQB'))return _0x500992&&_0x5b24d6[_0x102e48(0xa76)+'r']?_0x2b81b8['buffe'+'r'][_0x102e48(0x88c)+_0x102e48(0xb9e)]:0x16*-0x17f+0x1b*-0x139+0x41ed;else{var _0x5c54ad=_0x3bbda3[_0x24a14c];for(var _0x4fb32d=0x1*-0x1085+0x1521+-0x3b*0x14;_0x4fb32d<_0x5c54ad['lengt'+'h'];_0x4fb32d++){_0x527404[_0x24a14c+_0x16a2b0[_0x102e48(0x2b8)]+_0x5c54ad[_0x4fb32d]['o'][_0x102e48(0x5f3)+'ing'](-0x1*0x26cb+0x145b+-0x4a0*-0x4)]=_0x5c54ad[_0x4fb32d]['v'];}}}return _0x527404;}function _0x4045b9(_0x33da54,_0x495ca1){var _0x337627=_0xe93fad,_0x140ed4={'NUkYf':function(_0x2dd4c6){return _0x16a2b0['cMDFf'](_0x2dd4c6);},'arhec':_0x337627(0xa67)+_0x337627(0xc34)+_0x337627(0x322)};if(_0x33da54===_0x337627(0x69f)){_0x16a2b0[_0x337627(0xe0e)](_0xd0a7f2,_0x495ca1&&_0x16a2b0[_0x337627(0xd7d)](typeof _0x495ca1['on'],_0x337627(0xbbb)+'an')?_0x495ca1['on']:_0xdd6062['on'],_0x495ca1&&typeof _0x495ca1['facto'+'r']===_0x16a2b0[_0x337627(0xb00)]?_0x495ca1[_0x337627(0xa51)+'r']:_0xdd6062[_0x337627(0xa51)+'r']);return;}if(_0x33da54!=='snaps'+_0x337627(0x256))return;var _0x355136=_0x16a2b0['crGMi'](_0x1c43d3),_0x327666=_0x42e057(_0x355136),_0x4a44d7=_0x1fe7cf();for(var _0x35672d in _0x4a44d7)_0x327666[_0x35672d]=_0x4a44d7[_0x35672d];if(!_0x1c5110){if(_0x16a2b0[_0x337627(0x798)]!==_0x16a2b0[_0x337627(0x798)])_0x5a6548[_0x337627(0x7a0)+_0x337627(0x70e)+'d'](_0x337627(0xd9e)),_0x140ed4[_0x337627(0x1f9)](_0x39c1c4);else{_0x1c5110=_0x327666,_0x500c84=[],_0x16a2b0['tPKCk'](_0x467987,'repor'+'t',{'report':_0x16a2b0['yvzfD'](_0x155c10)});return;}}_0x500c84=[];for(var _0x2ae737 in _0x327666){if('kQxmp'!==_0x16a2b0[_0x337627(0xe31)]){var _0x58f78b=_0x1c5110[_0x2ae737],_0x3f2eb4=_0x327666[_0x2ae737];if(_0x16a2b0['SxKpt'](_0x58f78b,_0x3f2eb4))_0x500c84['push'](_0x16a2b0[_0x337627(0xd42)](_0x2ae737+':\x20',_0x58f78b)+_0x16a2b0[_0x337627(0x8e8)]+_0x3f2eb4);}else return _0x46464f['sourc'+'e']=_0x140ed4[_0x337627(0x883)],_0x16736a;}_0x1c5110=_0x327666,_0x16a2b0[_0x337627(0xd6b)](_0x467987,_0x337627(0xada)+'t',{'report':_0x155c10()});}var _0x455486=null;function _0x3c6164(){var _0x4b5d27=_0xe93fad,_0xaee372={'pLvVJ':function(_0x348236,_0x55dd6c,_0x2ef5d2){return _0x348236(_0x55dd6c,_0x2ef5d2);},'qCFlj':function(_0xe0ddbe,_0xfa1600){return _0x16a2b0['VGQOa'](_0xe0ddbe,_0xfa1600);},'lZPEV':_0x4b5d27(0xab5),'SLdMP':_0x16a2b0['CRQKM'],'unxDj':function(_0x3c7e88,_0x5aa71c){return _0x3c7e88===_0x5aa71c;}};if(_0x455486)return _0x455486;try{if(!document[_0x4b5d27(0xbc1)]||!document[_0x4b5d27(0xbc1)][_0x4b5d27(0x28a)+'dChil'+'d'])return null;if(!document['getEl'+_0x4b5d27(0x99f)+_0x4b5d27(0x512)](_0x16a2b0[_0x4b5d27(0x8e9)])){if(_0x16a2b0[_0x4b5d27(0x419)](_0x16a2b0[_0x4b5d27(0x1c3)],'NvcRc'))_0xaee372[_0x4b5d27(0xae9)](_0x43b6a3,_0x2063db['on'],_0x2c9e20);else{var _0x234d88=document[_0x4b5d27(0x2a2)+'eElem'+_0x4b5d27(0xcb8)]('style');_0x234d88['id']=_0x4b5d27(0x70f)+_0x4b5d27(0xbb6)+_0x4b5d27(0x623)+'ss',_0x234d88[_0x4b5d27(0x4ff)+_0x4b5d27(0x2bf)+'t']=_0x4b5d27(0x691)+_0x4b5d27(0xa5e)+_0x4b5d27(0xb4e)+'all:i'+_0x4b5d27(0x7bd)+'l}',(document[_0x4b5d27(0x57f)]||document[_0x4b5d27(0xdc1)+'entEl'+'ement'])['appen'+_0x4b5d27(0xe08)+'d'](_0x234d88);}}var _0x3af830=document[_0x4b5d27(0x2a2)+_0x4b5d27(0xc69)+'ent'](_0x16a2b0['mCUsw']);_0x3af830['id']='sakur'+'a-sw-'+_0x4b5d27(0x22f),_0x3af830['style']['cssTe'+'xt']=_0x16a2b0['vAnWq'](_0x16a2b0['mPFyM']('posit'+_0x4b5d27(0x6f7)+_0x4b5d27(0x2f3)+'left:'+_0x4b5d27(0xaa5)+_0x4b5d27(0xd26)+_0x4b5d27(0x1ca)+'z-ind'+'ex:21'+_0x4b5d27(0x418)+_0x4b5d27(0x532)+'ispla'+'y:fle'+'x;fle'+'x-dir'+'ectio'+'n:col'+_0x4b5d27(0x77f)+_0x4b5d27(0x347)+'x;','backg'+'round'+_0x4b5d27(0xaca)+'(21,1'+'2,29,'+'.92);'+_0x4b5d27(0x9fb)+'r:1px'+_0x4b5d27(0xe40)+'d\x20rgb'+'a(255'+_0x4b5d27(0xd66)+'177,.'+'45);b'+'order'+_0x4b5d27(0x654)+'us:10'+_0x4b5d27(0x8ae))+('paddi'+_0x4b5d27(0x747)+_0x4b5d27(0x33c)+';font'+_0x4b5d27(0x776)+_0x4b5d27(0x3a1)+_0x4b5d27(0xd56)+'onosp'+'ace,C'+_0x4b5d27(0xdcd)+_0x4b5d27(0x6dd)+'nospa'+_0x4b5d27(0xbba)+'lor:#'+_0x4b5d27(0x800)+'5;'),_0x16a2b0[_0x4b5d27(0xd98)]);var _0x2de6f5=_0x16a2b0[_0x4b5d27(0xc90)];_0x3af830['inner'+_0x4b5d27(0xc09)]=_0x16a2b0[_0x4b5d27(0x316)](_0x16a2b0['WNBma'](_0x16a2b0[_0x4b5d27(0x9e6)](_0x16a2b0[_0x4b5d27(0x983)](_0x16a2b0['KvWPs'](_0x16a2b0[_0x4b5d27(0xc47)](_0x16a2b0[_0x4b5d27(0xb37)](_0x16a2b0['qyyVc'](_0x16a2b0['lVLTy'],_0x4b5d27(0x40a)+'yle=\x22'+_0x4b5d27(0x7a6)+':')+_0x39f871+(_0x4b5d27(0x869)+_0x4b5d27(0x2d2)+'b>')+('<butt'+'on\x20da'+_0x4b5d27(0x3dd)+'\x22sp\x22\x20'+'style'+_0x4b5d27(0x832)+_0x4b5d27(0xd1f)+_0x4b5d27(0xbd8)+_0x4b5d27(0xcc3)+_0x4b5d27(0x3c6)+'borde'+_0x4b5d27(0xcae)+_0x4b5d27(0xe40)+_0x4b5d27(0x2ec)+_0x4b5d27(0x377)+',143,'+_0x4b5d27(0xdea)+_0x4b5d27(0xa97))+_0x16a2b0['qAIcq'],_0x4b5d27(0x72d)+_0x4b5d27(0x218)+_0x4b5d27(0xa4c)+'fx\x22\x20t'+_0x4b5d27(0x438)+_0x4b5d27(0x5b0)+_0x4b5d27(0x99a)+_0x4b5d27(0xd2e)+_0x4b5d27(0xd8d)+_0x4b5d27(0x1df)+'ep=\x220'+_0x4b5d27(0xd4f)+_0x4b5d27(0x27f)+'\x222\x22\x20s'+_0x4b5d27(0x291)+'\x22widt'+_0x4b5d27(0xc4e)+_0x4b5d27(0x457)+'ent-c'+_0x4b5d27(0x904))+_0x39f871+_0x16a2b0['doqob']+('<span'+_0x4b5d27(0x888)+_0x4b5d27(0x278)+'v\x22\x20st'+'yle=\x22'+_0x4b5d27(0x7a6)+':#bda'+'9c9;m'+_0x4b5d27(0x298)+_0x4b5d27(0xd57)+'0px;\x22'+_0x4b5d27(0x3f4)+_0x4b5d27(0x9d4)+'n>'),'<butt'+_0x4b5d27(0xbed)+'ta-a='+_0x4b5d27(0x3db)+_0x4b5d27(0x372)+_0x4b5d27(0x8a3)+_0x4b5d27(0x3f8)+_0x4b5d27(0xc42)+_0x4b5d27(0x424)+_0x4b5d27(0x8f1)+';bord'+_0x4b5d27(0x9ef)+'x\x20sol'+_0x4b5d27(0x3ce)+_0x4b5d27(0xc41)+_0x4b5d27(0x996)+_0x4b5d27(0x432)+_0x4b5d27(0xadf))+(_0x4b5d27(0x7a6)+_0x4b5d27(0x71a)+_0x4b5d27(0x8f3)+'order'+_0x4b5d27(0x654)+'us:6p'+'x;pad'+_0x4b5d27(0xdf1)+_0x4b5d27(0x1da)+'px;cu'+'rsor:'+'point'+_0x4b5d27(0xa9c)+_0x4b5d27(0xa47)+_0x4b5d27(0x3d7)+_0x4b5d27(0xc91)+_0x4b5d27(0x8b2)+'/butt'+_0x4b5d27(0x78e)),_0x16a2b0[_0x4b5d27(0x320)]),_0x16a2b0[_0x4b5d27(0x452)]),_0x16a2b0['qyXNr']),'color'+':#f7e'+_0x4b5d27(0x8f3)+_0x4b5d27(0x923)+_0x4b5d27(0x654)+'us:6p'+_0x4b5d27(0x563)+_0x4b5d27(0xdf1)+_0x4b5d27(0xc51)+'px;cu'+_0x4b5d27(0x8b5)+_0x4b5d27(0x94d)+_0x4b5d27(0xa9c)+_0x4b5d27(0xa47)+'herit'+_0x4b5d27(0x61a)+'/butt'+_0x4b5d27(0x78e))+(_0x4b5d27(0xb43)+'>'),'<div\x20'+'data-'+'a=\x22st'+_0x4b5d27(0x3d4)+_0x4b5d27(0xb70)+_0x4b5d27(0x904)+'#8d7a'+_0x4b5d27(0x268)+'x-wid'+_0x4b5d27(0x95f)+_0x4b5d27(0x6ec)+_0x4b5d27(0x2a3)+'v>')+_0x16a2b0[_0x4b5d27(0xc90)],_0x3af830['inner'+_0x4b5d27(0xc09)]=_0x2de6f5;var _0x535870=function(_0x237c86){var _0x1f8e0f=_0x4b5d27;return _0x3af830[_0x1f8e0f(0x87a)+_0x1f8e0f(0x97e)+_0x1f8e0f(0x9ab)](_0x16a2b0[_0x1f8e0f(0xc3d)]+_0x237c86+'\x22]');},_0x2e9d8a=_0x535870('st'),_0x3dd05f=_0x535870(_0x16a2b0[_0x4b5d27(0xa2d)]),_0x1089f5=_0x535870('sp'),_0x3c6ede=_0x16a2b0['HxROa'](_0x535870,'fx'),_0x440ca6=_0x535870('fv'),_0x23b39b=_0x535870('bar');if(_0x1089f5)_0x1089f5[_0x4b5d27(0x317)+'ck']=function(){var _0x42da18=_0x4b5d27;_0xd0a7f2(!_0xdd6062['on'],_0xdd6062[_0x42da18(0xa51)+'r']);};if(_0x3c6ede)_0x3c6ede[_0x4b5d27(0x244)+'ut']=function(){var _0x39e544=_0x4b5d27;_0xd0a7f2(_0xdd6062['on'],parseFloat(_0x3c6ede[_0x39e544(0x61e)])||0x171d+0x943*-0x3+0x3*0x18f);};if(_0x16a2b0[_0x4b5d27(0x7b6)](_0x535870,_0x16a2b0[_0x4b5d27(0x82e)]))_0x535870(_0x16a2b0[_0x4b5d27(0x82e)])['oncli'+'ck']=function(){_0x4045b9('snaps'+'hot');};var _0x93a57c=_0x16a2b0['TMQwj'](_0x535870,_0x16a2b0[_0x4b5d27(0x48f)]);if(_0x93a57c)_0x93a57c[_0x4b5d27(0x317)+'ck']=function(){var _0x592abd=_0x4b5d27,_0x7e06a5={'qmwrN':function(_0x3eab4d,_0xb0b1d6){var _0x2aedcb=_0x563b;return _0x16a2b0[_0x2aedcb(0x778)](_0x3eab4d,_0xb0b1d6);},'gtkUK':_0x592abd(0xc6b)+'·\x20','hWxEU':_0x16a2b0[_0x592abd(0xcf4)]};if(_0x16a2b0[_0x592abd(0x66a)]===_0x16a2b0[_0x592abd(0x66a)]){if(!_0x159712['on'])_0x5411b1(!![],![]);else{if(_0x159712['boxes'])_0x5411b1(![],![]);else{if(_0x16a2b0[_0x592abd(0x5a0)](_0x2ab8cc))_0x5411b1(!![],!![]);else _0x16a2b0['SXCMo'](_0x5411b1,![],![]);}}}else _0xc80f41=_0x7e06a5[_0x592abd(0x9c6)](_0x7e06a5[_0x592abd(0x9c6)](_0x7e06a5[_0x592abd(0x9c6)](_0x7e06a5[_0x592abd(0x977)],_0x1e7b9e[_0x592abd(0x227)](_0x402883[_0x592abd(0x84d)+_0x592abd(0x4fc)])[_0x592abd(0x516)+'h'])+('\x20obje'+_0x592abd(0x93f)+'\x20'),_0x4a3d34),'s'),_0x359a9c=_0x7e06a5[_0x592abd(0x6c7)];};if(_0x535870('fold'))_0x535870('fold')['oncli'+'ck']=function(){var _0x25431e=_0x4b5d27;if(_0xaee372[_0x25431e(0xdd4)](_0x25431e(0xab5),_0xaee372[_0x25431e(0x7ce)])){if(!_0x23b39b)return;var _0x1ca17d=_0x23b39b['style']['displ'+'ay']===_0xaee372[_0x25431e(0xe10)];_0x23b39b[_0x25431e(0x8d9)]['displ'+'ay']=_0x1ca17d?'':'none',_0x535870('fold')[_0x25431e(0x4ff)+'onten'+'t']=_0x1ca17d?'-':'+';}else _0x244434(_0x4b33c6);};return document[_0x4b5d27(0xbc1)]['appen'+'dChil'+'d'](_0x3af830),_0x455486={'el':_0x3af830,'st':_0x2e9d8a,'st2':_0x3dd05f,'sp':_0x1089f5,'fx':_0x3c6ede,'fv':_0x440ca6,'esp':_0x93a57c},_0x455486;}catch(_0x369353){return'IxaBJ'==='IxaBJ'?(console[_0x4b5d27(0xb3d)](_0x16a2b0[_0x4b5d27(0x1cc)],_0x16a2b0[_0x4b5d27(0xad1)](_0x16a2b0['fORiZ'],_0x39f871),_0x369353),null):_0xaee372['unxDj'](_0x505654[-0xf57+0x1b65+-0x1*0xc0d],'f32')||_0x106a89[-0x6a*0x3e+-0xf26+-0x5d5*-0x7]===_0x4b5d27(0x97b);}}function _0x2ab8cc(){var _0x5e88e3=_0xe93fad;if(_0x16a2b0['hrjyP']('qtiQq',_0x16a2b0[_0x5e88e3(0xd01)]))return _0xed6eda['sourc'+'e']=_0x16a2b0[_0x5e88e3(0x5c5)]('windo'+'w.'+_0xd56d3e[_0x2d1b15],_0x5e88e3(0xbb2)+'le'),_0x1511c9;else try{var _0x41e1e9=_0x16a2b0['JfMDk'](_0x3d0c4b);if(_0x41e1e9[_0x5e88e3(0xcf6)])return!![];var _0x3ffb94=_0x235a3e();return!!(_0x3ffb94&&_0x321b7e['ident'+_0x5e88e3(0xde4)]);}catch(_0x2a586e){return![];}}function _0x3ea381(){var _0x5ce441=_0xe93fad;try{if(_0x16a2b0[_0x5ce441(0x3fe)]===_0x16a2b0[_0x5ce441(0x3fe)]){var _0x55316c=_0x455486&&_0x455486[_0x5ce441(0xce7)];if(!_0x55316c)return;if(_0x159712['boxes']&&!_0x16a2b0[_0x5ce441(0x29a)](_0x2ab8cc))_0x159712['boxes']=![];var _0x2cb77c=!_0x159712['on']?_0x16a2b0[_0x5ce441(0xde2)]:_0x159712[_0x5ce441(0xbd7)]?_0x5ce441(0xb01)+_0x5ce441(0xcb9):_0x16a2b0[_0x5ce441(0x6d5)];if(_0x2cb77c!==_0x55316c['textC'+'onten'+'t'])_0x55316c[_0x5ce441(0x4ff)+_0x5ce441(0x2bf)+'t']=_0x2cb77c;_0x55316c[_0x5ce441(0x8d9)][_0x5ce441(0x2c7)+'round']=_0x159712['on']?_0x39f871:_0x5ce441(0xd0c)+_0x5ce441(0xe1b)+'t',_0x55316c[_0x5ce441(0x8d9)][_0x5ce441(0x7a6)]=_0x159712['on']?_0x16a2b0[_0x5ce441(0x6a7)]:_0x16a2b0['tlDDy'];}else{var _0x489497=_0x569e9e(),_0x3a5178=null,_0x4dbe15=_0x960f73,_0x3ddffe=_0xda041c[_0x5ce441(0x6fb)];if(_0x489497[_0x5ce441(0xcf6)]){_0x3a5178=_0x489497['basis'];if(_0x489497[_0x5ce441(0xdb8)])_0x4dbe15=_0x489497[_0x5ce441(0xdb8)];if(_0x489497[_0x5ce441(0x6fb)]!==null)_0x3ddffe=_0x489497['fov'];}var _0x5af3cc,_0x2cc39c,_0x20da4f,_0x40ffe6,_0x29b875,_0x15a2e5,_0x117d11,_0x2a70fe,_0x18a9a4;if(_0x3a5178)_0x5af3cc=_0x3a5178[_0x5ce441(0x5a2)][-0xc26+0xfa9+0x1d*-0x1f],_0x2cc39c=_0x3a5178[_0x5ce441(0x5a2)][-0x145f+0x23d8*0x1+0x5a*-0x2c],_0x20da4f=_0x3a5178[_0x5ce441(0x5a2)][-0x222f+0x16f1+0xb40],_0x40ffe6=_0x3a5178[_0x5ce441(0x41c)][-0x1*-0x10c9+-0x617+-0xab2],_0x29b875=_0x3a5178['right'][-0x6af+-0xc87+-0x1*-0x1337],_0x15a2e5=_0x3a5178[_0x5ce441(0x41c)][0xb7a*-0x2+0x38*0x65+0xde],_0x117d11=_0x3a5178['up'][-0x2*0x1b7+-0x739*-0x1+-0x1*0x3cb],_0x2a70fe=_0x3a5178['up'][0xb*0x219+-0x1*-0x2162+-0x3874*0x1],_0x18a9a4=_0x3a5178['up'][-0xac6+-0x77d+-0x1245*-0x1];else{var _0x573096=(_0x5ce441(0xc3c)+_0x5ce441(0xa23)+_0x5ce441(0xaa0)+'0|12|'+_0x5ce441(0xc8d)+_0x5ce441(0xa20))[_0x5ce441(0x388)]('|'),_0x15b80c=-0x1*-0x778+-0x2*-0x928+-0x19c8;while(!![]){switch(_0x573096[_0x15b80c++]){case'0':_0x40ffe6=_0x20da4f;continue;case'1':var _0x716a84=_0x16a2b0[_0x5ce441(0x2f5)](_0x2d79b6[_0x5ce441(0x2d7)],_0x1fc09b['PI'])/(0x3*0x59a+0x790+0x2*-0xbd5),_0x171f0c=_0x16a2b0['QFVGo'](_0x16a2b0[_0x5ce441(0xd82)](_0x2d79b6[_0x5ce441(0x704)],_0x3a5117['PI']),0x2*-0x147+0x183f+-0x14fd);continue;case'2':_0x117d11=_0x16a2b0[_0x5ce441(0x48e)](_0x2cc39c*_0x15a2e5,_0x20da4f*_0x29b875);continue;case'3':var _0x2d79b6=_0x16a2b0['crGMi'](_0x4dc458);continue;case'4':if(!_0x2d79b6)return null;continue;case'5':_0x20da4f=_0x16a2b0[_0x5ce441(0x4c2)](_0x2e51cb[_0x5ce441(0xce4)](_0x171f0c),_0x86b647);continue;case'6':_0x18a9a4=_0x5af3cc*_0x29b875-_0x2cc39c*_0x40ffe6;continue;case'7':_0x2cc39c=-_0x4b5b87[_0x5ce441(0xb6c)](_0x716a84);continue;case'8':_0x2a70fe=_0x20da4f*_0x40ffe6-_0x5af3cc*_0x15a2e5;continue;case'9':_0x5af3cc=_0x375f38['sin'](_0x171f0c)*_0x86b647;continue;case'10':var _0x86b647=_0x14567d[_0x5ce441(0xce4)](_0x716a84);continue;case'11':_0x15a2e5=-_0x5af3cc;continue;case'12':_0x29b875=-0x587+0xf1*-0x26+0x6d*0x61;continue;}break;}}var _0x1e4f00=_0x16a2b0[_0x5ce441(0x8a7)](_0x36f2e1[-0x241*0xa+-0x219b*-0x1+0xb11*-0x1],_0x4dbe15[0x17*0x149+0x127+0x1*-0x1eb6]),_0x3c9bd3=_0x4547f0[0xe28+0x1a5d*-0x1+0xc36]-_0x4dbe15[0xe39*0x2+-0x2704+0xa93*0x1],_0x498dd0=_0x3c00c6[-0xd86+-0x143*-0x8+0x1b8*0x2]-_0x4dbe15[-0x7*0x4e1+-0x1ddc+-0x9*-0x71d],_0x4bc219=_0x16a2b0[_0x5ce441(0x5c0)](_0x1e4f00*_0x5af3cc,_0x16a2b0['KVJZC'](_0x3c9bd3,_0x2cc39c))+_0x498dd0*_0x20da4f;if(_0x4bc219<=-0x1*-0x323+0x105f+0x9c1*-0x2+0.05)return null;var _0x54ac39=_0x16a2b0[_0x5ce441(0xe3e)](_0x1e4f00*_0x40ffe6,_0x3c9bd3*_0x29b875)+_0x498dd0*_0x15a2e5,_0x12338c=_0x16a2b0[_0x5ce441(0x487)](_0x1e4f00*_0x117d11+_0x16a2b0[_0x5ce441(0xa42)](_0x3c9bd3,_0x2a70fe),_0x16a2b0[_0x5ce441(0xc9f)](_0x498dd0,_0x18a9a4)),_0x3f0e51=_0x204007/_0x1ffaf3,_0x59441c=_0x3ddffe*_0x57fcc4['PI']/(0xcb5*-0x1+0x187c+-0xb13),_0x176aea=_0x4bdab0[_0x5ce441(0xb88)](_0x59441c/(-0x241e+0x10e6+0x133a)),_0x1e72f9=_0x16a2b0[_0x5ce441(0x687)](_0x16a2b0['IERXt'](_0x54ac39,_0x4bc219),_0x176aea*_0x3f0e51),_0x49608e=_0x16a2b0['sVfyJ'](_0x12338c,_0x4bc219)/_0x176aea;if(_0x1e72f9<-(-0x1*0x491+-0x1*0x13f3+0x1885+0.6000000000000001)||_0x16a2b0[_0x5ce441(0x62f)](_0x1e72f9,0x2391+0x67*-0x1f+-0x1717+0.6000000000000001)||_0x49608e<-(-0x2e3+0x142a+-0x1146+0.6000000000000001)||_0x16a2b0[_0x5ce441(0x645)](_0x49608e,0xc3a*0x3+0x5c1*-0x4+0xda9*-0x1+0.6000000000000001))return null;return{'x':(_0x1e72f9*(0x1d7b+0x1f0e+0x3c89*-0x1+0.5)+(0x73d+-0x1d2b+-0xaf7*-0x2+0.5))*_0x2080a0,'y':(0x24f+0x2286+-0x24d5+0.5-_0x16a2b0['rwDbx'](_0x49608e,-0x23f7+-0x1ad7+0x1f67*0x2+0.5))*_0xf38a5c,'z':_0x4bc219};}}catch(_0x5ad825){}}function _0x5411b1(_0x587f48,_0x100b3d){var _0x5693a0=_0xe93fad;_0x159712['on']=!!_0x587f48,_0x159712[_0x5693a0(0xbd7)]=!!_0x100b3d,_0x3ea381();try{if(_0x16a2b0[_0x5693a0(0x354)](_0x5693a0(0x73d),_0x5693a0(0x285))){var _0x273fb8=_0x106110();if(_0x273fb8&&_0x273fb8['el'])_0x273fb8['el']['style'][_0x5693a0(0x957)+'ay']=_0x159712['on']?'':_0x16a2b0[_0x5693a0(0xe11)];var _0x5de866=_0x63d6b5;if(_0x5de866&&_0x5de866['cv'])_0x5de866['cv'][_0x5693a0(0x8d9)]['displ'+'ay']=_0x159712['on']&&_0x159712[_0x5693a0(0xbd7)]?'':_0x5693a0(0xaeb);}else{_0x429355['push'](_0x16a2b0[_0x5693a0(0x25b)]);for(var _0x460978=-0x3d*-0x7c+-0x1*-0x757+-0x24e3;_0x460978<_0x39f293[_0x5693a0(0xbd9)+_0x5693a0(0xda8)]['lengt'+'h'];_0x460978++)_0x20d87e[_0x5693a0(0x8f2)](_0x16a2b0[_0x5693a0(0x5a6)](_0x5693a0(0xbda),_0x261fcf[_0x5693a0(0xbd9)+_0x5693a0(0xda8)][_0x460978]));}}catch(_0x48dd99){}}var _0x343e1b=-0x1aef+-0xdb9*0x1+0x28aa;function _0xd0a7f2(_0x15580e,_0x2e0a23){var _0x1d1376=_0xe93fad,_0x4e0382=_0xdd6062['on'];_0xdd6062['on']=!!_0x15580e;if(_0xdd6062['on']&&!_0x4e0382&&(_0x16a2b0[_0x1d1376(0x4a8)](_0x2e0a23,undefined)||_0x16a2b0[_0x1d1376(0x46a)](_0x2e0a23,null)||Number(_0x2e0a23)===-0x202*0x4+-0x4e*0x6d+-0x1*-0x293f)){if('flYZw'===_0x1d1376(0x9cc)){var _0x229434=_0xd92993['resol'+_0x1d1376(0x98e)+'e']();if(_0x229434)return _0x243f73['sourc'+'e']=_0x16a2b0[_0x1d1376(0xba3)],_0x229434;}else _0x2e0a23=_0x343e1b;}_0xdd6062['facto'+'r']=Math[_0x1d1376(0xe2c)](_0xdd6062['max'],Math['max'](_0xdd6062[_0x1d1376(0xe2c)],Number(_0x2e0a23)||0x1efd+0xc1f*0x1+0x89f*-0x5));if(!_0xdd6062['on'])_0x10b4b7={};var _0x356fda=_0x3c6164();if(_0x356fda){if(_0x1d1376(0xa27)==='AIBwx'){_0x356fda['sp']&&(_0x356fda['sp']['textC'+_0x1d1376(0x2bf)+'t']=_0xdd6062['on']?_0x1d1376(0xd79)+_0x1d1376(0x845):_0x1d1376(0xd79)+_0x1d1376(0x224),_0x356fda['sp'][_0x1d1376(0x8d9)][_0x1d1376(0x2c7)+_0x1d1376(0x921)]=_0xdd6062['on']?_0x39f871:_0x16a2b0['hBIoe'],_0x356fda['sp'][_0x1d1376(0x8d9)]['color']=_0xdd6062['on']?_0x1d1376(0x78b)+'1b':'#f7ee'+'f5');if(_0x356fda['fx'])_0x356fda['fx']['value']=String(_0xdd6062['facto'+'r']);if(_0x356fda['fv'])_0x356fda['fv'][_0x1d1376(0x4ff)+'onten'+'t']=_0xdd6062[_0x1d1376(0xa51)+'r'][_0x1d1376(0xb65)+'ed'](-0x1ad4+0x9*-0x6+-0x2b*-0xa1)+'x';}else{var _0x910d51=_0x992ffb[_0x258844[_0x4cc188]],_0x1d6021=_0x16a2b0['HtCcf'](_0x453434,_0x1d1376(0xc9b)+'nNetw'+'orkSy'+'nc',_0x910d51[_0x1d1376(0x999)]);_0x1d6021[_0x1d1376(0x489)]=_0x910d51['hits'],_0x1d6021['first'+'SeenM'+'s']=_0x910d51['first'+_0x1d1376(0x85c)]-_0x640bbd,_0x1d6021[_0x1d1376(0x49b)+'al']=!!_0xdd6802&&_0x16a2b0['IHpjw'](_0x1d6021[_0x1d1376(0x8f6)][_0x1d1376(0xc15)],_0x16a2b0[_0x1d1376(0x6ab)]('0x',_0x22a187[_0x1d1376(0x5f3)+'ing'](0x619*0x3+0xa1*0x3b+-0x3756)));if(_0x1d6021[_0x1d1376(0x8f6)]['healt'+'h']){var _0x2000de=_0x1655c3(_0x1d6021[_0x1d1376(0x8f6)]['healt'+'h'],-0x24a1+-0x7a6*0x2+0x33fd*0x1);_0x1d6021[_0x1d1376(0x910)+'h']=_0x4c4b2b(_0x2000de,_0x1d1376(0xdde)+_0x1d1376(0x1a9)+'pt','obfI');}_0x1201f2[_0x1d1376(0xd93)+'rs'][_0x1d1376(0x8f2)](_0x1d6021);}}}function _0x3f561d(_0x3fd290){var _0x1972bf=_0xe93fad,_0x26db65=_0x3c6164();if(!_0x26db65||!_0x26db65['st'])return;try{if(!_0x16a2b0[_0x1972bf(0x2e9)](_0x3d07d3)&&!_0xe0efbf){if(_0x26db65['el'])_0x26db65['el'][_0x1972bf(0x8d9)][_0x1972bf(0x957)+'ay']=_0x16a2b0['CRQKM'];return;}if(_0x26db65['el'])_0x26db65['el'][_0x1972bf(0x8d9)][_0x1972bf(0x957)+'ay']='';var _0x3484ee=Object[_0x1972bf(0x227)](_0x3fd290&&_0x3fd290['insta'+_0x1972bf(0x4fc)]||{})['lengt'+'h'],_0x364928=_0x3fd290&&_0x3fd290[_0x1972bf(0xce7)]||null,_0x4c7d1b=_0x364928?_0x364928['enemy'+_0x1972bf(0x791)]||0x11c1+-0x1e3e+-0x17*-0x8b:0x71*0x43+-0xe3*0x1d+-0x3dc*0x1,_0x2a8082=_0x364928?_0x364928[_0x1972bf(0x9d3)+'unt']||0x1ed6+0x1775+-0x29*0x153:-0x2593+-0x917*-0x3+0xa4e,_0x5e88a4=_0x34f302?(_0x34f302[_0x1972bf(0xa76)+'r'][_0x1972bf(0x88c)+_0x1972bf(0xb9e)]/(-0x33d*0x193+0x9*-0x36d43+0x2*0x19f831))['toFix'+'ed'](-0xcd5+-0x2*-0x129a+0x16f*-0x11)+'MB':_0x1972bf(0x241)+'m',_0x46074b=_0x16a2b0[_0x1972bf(0x65a)](_0x16a2b0[_0x1972bf(0x655)]('v'+(_0x3fd290&&_0x3fd290['versi'+'on']||_0x412872),_0x1972bf(0x346)+'ks\x20')+(_0x3fd290&&_0x3fd290['hooks'+'Appli'+'ed']||0x20af+-0x968+-0x1747)+'/'+(_0x3fd290&&_0x3fd290['hooks'+'Total']||0x1949*0x1+0x170e+-0x3057)+_0x16a2b0[_0x1972bf(0x386)],_0x3484ee)+('\x20\x20mem'+'\x20')+_0x5e88a4+(_0x1972bf(0x514)+_0x1972bf(0x42c))+_0x5c5c3d;_0x26db65['st'][_0x1972bf(0x4ff)+'onten'+'t']=_0x46074b;var _0x46631d=_0x26db65[_0x1972bf(0x2cc)];_0x46631d&&(_0x46631d[_0x1972bf(0x4ff)+_0x1972bf(0x2bf)+'t']=_0x16a2b0[_0x1972bf(0x7f7)](_0x4c7d1b,-0x2dd*-0xb+0x11d2+-0x5*0x9dd)?_0x16a2b0['Sgolc'](_0x16a2b0['FpTTK'](_0x16a2b0[_0x1972bf(0x4a1)]+_0x4c7d1b,_0x2a8082?_0x16a2b0[_0x1972bf(0xc96)](_0x16a2b0[_0x1972bf(0xbdf)],_0x2a8082)+_0x16a2b0['VmxXP']:''),_0x364928&&_0x364928[_0x1972bf(0x843)+'a']?_0x16a2b0['YRtRx'](_0x16a2b0[_0x1972bf(0xbe1)],_0x364928['camer'+'aFrom']):_0x16a2b0['YEMvu']):_0x16a2b0[_0x1972bf(0xcc0)]+(_0x364928&&_0x364928[_0x1972bf(0x843)+'a']?_0x364928['camer'+_0x1972bf(0x2b3)]:'-'),_0x46631d[_0x1972bf(0x8d9)]['color']=_0x4c7d1b>-0x2340+0x1*0x254e+-0x107*0x2?'#7ee0'+'a8':_0x16a2b0[_0x1972bf(0x723)]);}catch(_0x3a7f0a){}}window['addEv'+'entLi'+_0xe93fad(0xcb1)+'r'](_0x16a2b0[_0xe93fad(0x26e)],function(_0x1a6cfc){var _0xef5210=_0xe93fad,_0x1bdda9={'qQBUK':_0xef5210(0x508),'hyZfr':function(_0x2fa270){return _0x2fa270();}};if(!_0x1a6cfc)return;try{if(_0x16a2b0[_0xef5210(0x876)](_0x1a6cfc[_0xef5210(0xc68)],'F9')){if(_0x16a2b0['lNuij']('RGgvJ',_0xef5210(0x68a))){_0x1a6cfc['preve'+'ntDef'+_0xef5210(0x2c6)](),_0x4045b9(_0x16a2b0[_0xef5210(0x6bb)]);return;}else{var _0x467bf3=('2|6|4'+_0xef5210(0x598)+_0xef5210(0x79f))[_0xef5210(0x388)]('|'),_0x1ec859=-0x1*-0x1aeb+0x1e6+-0x1cd1;while(!![]){switch(_0x467bf3[_0x1ec859++]){case'0':_0x5504bf[_0xef5210(0x276)]['push'](_0x30ed65);continue;case'1':_0x1b5288['oncli'+'ck']=function(){var _0x54c9ed=_0xef5210;_0x26824d(!_0x1bdda9['hyZfr'](_0x127285)),_0x1bdda9[_0x54c9ed(0x325)](_0x30ed65);};continue;case'2':var _0x1b5288=_0x34d528(_0x16a2b0['zBhdm'],'sk-sw'+'itch');continue;case'3':return _0x1b5288;case'4':var _0x30ed65=function(){var _0x3900e8=_0xef5210;_0x1b5288['setAt'+'tribu'+'te'](_0x3900e8(0x603)+_0x3900e8(0x355)+'ed',_0x331273()?_0x1bdda9['qQBUK']:_0x3900e8(0x4fb));};continue;case'5':_0x1b5288['sync']=_0x30ed65;continue;case'6':_0x1b5288['type']=_0xef5210(0xa19)+'n';continue;case'7':_0x30ed65();continue;}break;}}}if(_0x1a6cfc[_0xef5210(0xc68)]==='F7'){_0x1a6cfc['preve'+_0xef5210(0xb3b)+'ault'](),_0x16a2b0[_0xef5210(0x702)](_0xd0a7f2,!_0xdd6062['on'],_0xdd6062['facto'+'r']);return;}if(_0x1a6cfc[_0xef5210(0xc68)]==='F8'){_0x1a6cfc[_0xef5210(0x42d)+_0xef5210(0xb3b)+'ault'](),_0xd0a7f2(_0xdd6062['on'],_0x16a2b0['jyiBv'](_0xdd6062[_0xef5210(0xa51)+'r'],0x1656+0x19cc+-0x3022+0.5));return;}if(_0x16a2b0['IpCdn'](_0x1a6cfc[_0xef5210(0xc68)],'F6')){_0x1a6cfc[_0xef5210(0x42d)+'ntDef'+_0xef5210(0x2c6)](),_0xd0a7f2(_0xdd6062['on'],_0xdd6062['facto'+'r']-(0x5ba+-0x1*-0x1c2d+-0x21e7+0.5));return;}if(_0x1a6cfc[_0xef5210(0xc68)]===_0xef5210(0x7af)+'t'){_0x1a6cfc[_0xef5210(0x42d)+'ntDef'+_0xef5210(0x2c6)](),_0x16a2b0[_0xef5210(0x6a6)](_0x2c2155,!_0x3bc5eb[_0xef5210(0xd7f)]);return;}if(_0x16a2b0['FgRcT'](_0x1a6cfc['code'],'Brack'+_0xef5210(0x482)+'ht')){_0x1a6cfc[_0xef5210(0x42d)+_0xef5210(0xb3b)+_0xef5210(0x2c6)](),_0x40148d[_0xef5210(0x6fb)]=Math['min'](0x236c+-0x194a+-0x996,_0x40148d[_0xef5210(0x6fb)]+(0xc1a*0x1+0x78b+-0x13a3)),_0x23602b();return;}if(_0x1a6cfc[_0xef5210(0xc68)]===_0x16a2b0[_0xef5210(0xdf6)]){_0x1a6cfc[_0xef5210(0x42d)+_0xef5210(0xb3b)+_0xef5210(0x2c6)](),_0x40148d[_0xef5210(0x6fb)]=Math['max'](0xde+0x31*-0x60+0x11a0,_0x40148d[_0xef5210(0x6fb)]-(-0xa1c+-0x8*-0xf1+-0x296*-0x1)),_0x16a2b0['aqpbl'](_0x23602b);return;}}catch(_0x30d495){}},!![]);var _0x159712={'on':!![],'span':0x50,'boxes':![]};function _0x30c6b3(){var _0x14c04c=_0xe93fad;if('phRsB'===_0x16a2b0['nBYjR'])try{var _0x5c681e=_0x4c1e65;if(_0x5c681e&&_0x5c681e['el'])_0x5c681e['el']['style'][_0x14c04c(0x957)+'ay']=_0x408039?'':_0x16a2b0[_0x14c04c(0xe11)];var _0x5a6f18=_0x943927;if(_0x5a6f18&&_0x5a6f18['cv'])_0x5a6f18['cv'][_0x14c04c(0x8d9)]['displ'+'ay']=_0x56179c?'':_0x16a2b0['CRQKM'];}catch(_0x4ea3dd){}else{var _0x526e6f=_0x3736fb['Photo'+_0x14c04c(0x9c3)+_0x14c04c(0xbc0)+'nc']||{},_0xae499b=Object[_0x14c04c(0x227)](_0x526e6f);for(var _0x1f9578=-0x13f7+0xbeb+-0x2*-0x406;_0x1f9578<_0xae499b['lengt'+'h'];_0x1f9578++){var _0x36f3ea=_0x526e6f[_0xae499b[_0x1f9578]]['ptr'],_0x41a5dc=_0x3b9fd4(_0x16a2b0[_0x14c04c(0xb44)](_0x36f3ea,0xfc3*-0x1+-0x3*0xba3+0x10f4*0x3),'u32');if(!_0x41a5dc)continue;var _0x433f4f=_0x41d8ba[_0x14c04c(0x4c3)+'Look']||[],_0x267cd5={'mouseLook':'0x'+_0x16a2b0['NREJe'](_0x41a5dc,0x7d7*-0x4+-0x1864+0x37c*0x10)['toStr'+_0x14c04c(0xc36)](-0x19b5+0x1840+0x185),'floats':{},'camera':null,'vec2':null};for(var _0x5f0a2f=-0x25a2*0x1+0x2395*-0x1+0x4937*0x1;_0x16a2b0[_0x14c04c(0xb92)](_0x5f0a2f,_0x433f4f['lengt'+'h']);_0x5f0a2f++){if(_0x16a2b0[_0x14c04c(0x7f6)]!=='VZcGq'){var _0x23b0e5=_0x512bdb(_0x42fc0c[_0x14c04c(0x38b)],[_0x469643[_0x14c04c(0x38b)][-0x69c+0x997+-0x2fb],_0x44253b[_0x14c04c(0x38b)][0xba0+-0x1*0x1dd5+0x2a*0x6f],_0x16a2b0['WwhTf'](_0x3d35a5[_0x14c04c(0x38b)][0x27*0x29+0x58*-0x3c+0xe63],-0x158c+-0x6*-0x5b2+-0xc9f)],0x1852+-0x3*-0xa1f+-0x32c7,0xcf9+0x21db*0x1+0xabb*-0x4);_0x23b0e5&&(_0x33782e=_0x23b0e5['x']/(-0x1096+0xec7+-0x13*-0x4d),_0x40c990=_0x16a2b0['jNHYQ'](_0x23b0e5['y'],0x254c+-0x1*0x25b9+0x455));}else{if(_0x16a2b0[_0x14c04c(0x752)](_0x433f4f[_0x5f0a2f][0x1*-0xfd4+0x958+0x67d],_0x16a2b0[_0x14c04c(0x7da)]))continue;_0x267cd5['float'+'s']['0x'+_0x433f4f[_0x5f0a2f][-0x7e5*-0x2+-0x26cd+0x2b*0x89][_0x14c04c(0x5f3)+_0x14c04c(0xc36)](-0x1e*0xf5+0x1*-0x13f9+0x30bf)]=_0x16a2b0[_0x14c04c(0x96b)](_0x3b9fd4,_0x16a2b0[_0x14c04c(0x978)](_0x41a5dc,_0x433f4f[_0x5f0a2f][-0x4*0x15e+-0x37*0x7a+0x1fae]),_0x16a2b0['rMBXt']);}}var _0x26bb88=_0x16a2b0[_0x14c04c(0xc9e)](_0x3b9fd4,_0x16a2b0[_0x14c04c(0x32f)](_0x41a5dc,-0x11a5*0x2+-0x551*0x1+0xd*0x323),'u32');if(_0x26bb88)_0x267cd5['camer'+'a']='0x'+(_0x26bb88>>>0x1f05+0xdc7+-0x2ccc)[_0x14c04c(0x5f3)+_0x14c04c(0xc36)](-0x2206+-0x553+-0xab*-0x3b);var _0x13a5cf=_0x16a2b0[_0x14c04c(0xa94)](_0x2563bb,_0x41a5dc,0xaa*0x25+-0x869*0x4+0x95a,0xf*0x220+0x1bd6+-0x3bb4);if(_0x13a5cf)_0x267cd5[_0x14c04c(0xbc7)]=_0x13a5cf;return _0x267cd5;}return null;}}var _0x5ab171=_0xe93fad(0x70f)+'a-sw-'+_0xe93fad(0x6fb),_0x40148d={'pitch':null,'yaw':null,'fov':0x5a,'known':![]};try{var _0x52a522=localStorage[_0xe93fad(0x445)+'em'](_0x5ab171);if(_0x52a522)_0x40148d[_0xe93fad(0x6fb)]=Math['min'](0x1*-0x417+0x2573+-0x20d0,Math['max'](0x2*-0x4d2+-0x1*-0x805+0x1bd,parseFloat(_0x52a522)||0x1*0xc14+-0x17b5+0xbfb));}catch(_0x402dff){}function _0x23602b(){var _0x53330b=_0xe93fad;if(_0x53330b(0x790)===_0x53330b(0x582))_0x58ba56['preve'+_0x53330b(0xb3b)+'ault']();else try{localStorage[_0x53330b(0x96e)+'em'](_0x5ab171,String(_0x40148d['fov']));}catch(_0x5eaabd){}}var _0x4adcbf=_0x16a2b0['zXhva'],_0x1c4e05=![];try{if(_0xe93fad(0x1aa)!==_0x16a2b0[_0xe93fad(0xd65)]){var _0x485a8c=('3|2|5'+_0xe93fad(0x3ff)+'0')[_0xe93fad(0x388)]('|'),_0x3143ab=-0x6ff+0x6*-0x3ab+0x1d01;while(!![]){switch(_0x485a8c[_0x3143ab++]){case'0':_0x3934a1[_0xe93fad(0x78c)+'ch']=_0x38d2b3;continue;case'1':if(typeof _0x38d2b3!==_0x16a2b0['JDLVw']||!(_0x38d2b3>0x8a*-0x26+-0xfb2+-0x1a5*-0x16))return _0x33ff79[_0xe93fad(0x8a4)+'s'][_0xe93fad(0x8f2)](_0x16a2b0['HwHoi'](_0x16a2b0['JLVtq'],_0x38d2b3)),-0x26ca+-0x25*0x6a+-0x1b0e*-0x2;continue;case'2':var _0x1c60e6=_0x224cae||_0x42ce6f&&_0x42ce6f['plugi'+'ns']&&_0x42ce6f['plugi'+'ns'][_0x42ce6f['plugi'+'ns'][_0xe93fad(0x516)+'h']-(0x1*-0x1860+0x147d+0x3e4)];continue;case'3':var _0x42ce6f=_0x590d77[_0xe93fad(0x262)+_0xe93fad(0xc5c)+'dkit']&&_0x3cd643[_0xe93fad(0x262)+_0xe93fad(0xc5c)+_0xe93fad(0x4fa)][_0xe93fad(0xa67)+'me'];continue;case'4':var _0x38d2b3=_0x1240fb(_0x1c60e6[_0xe93fad(0x985)+'c'](0x9fd*0x1+-0x23d1+-0x1*-0x19f4));continue;case'5':if(!_0x1c60e6||_0x16a2b0[_0xe93fad(0xb9d)](typeof _0x1c60e6[_0xe93fad(0x985)+'c'],_0x16a2b0[_0xe93fad(0xc8a)]))return _0x501f42[_0xe93fad(0x8a4)+'s']['push'](_0xe93fad(0xaf9)+_0xe93fad(0xaf1)+_0xe93fad(0x985)+'c'),0x1c33+0x6ee+-0x1*0x2321;continue;}break;}}else _0x16a2b0[_0xe93fad(0x863)](localStorage['getIt'+'em'](_0x4adcbf),null)&&(localStorage[_0xe93fad(0x3b8)+_0xe93fad(0x5f1)](_0x4adcbf),_0x1c4e05=!![]);}catch(_0x584f6f){}var _0x251a21=-0x2379+0x4*0x3fd+0x13ad,_0x277b44=0xc3b+-0x2*0x1136+0x164d,_0x251a21=0x171a+0xfa5+0x1*-0x2697,_0x277b44=-0x9a9*0x1+0x26a1+-0x1cdc,_0x67b524=-0x19*-0x1d+-0x5b1+-0x2*-0x184,_0xd8eecf={'tried':0x0,'ok':![],'why':'','source':null,'camPtr':0x0,'tfPtr':0x0,'scratch':0x0,'fov':null,'quat':null,'pos':null,'basis':null,'errors':[],'applied':0x0,'misses':0x0,'stale':0x0};function _0x5787dc(_0x4539b1){var _0x259824=_0xe93fad;if('pfvuZ'!==_0x259824(0x4c0)){if(_0x16a2b0['SncKC'](_0x4539b1,undefined)||_0x4539b1===null)return undefined;if(_0x16a2b0[_0x259824(0x362)](typeof _0x4539b1[_0x259824(0x9ee)],'funct'+_0x259824(0xd10)))try{return _0x4539b1['val']();}catch(_0x729ff2){}if(typeof _0x4539b1===_0x16a2b0['tHNWW'])return undefined;return _0x4539b1;}else _0x1c51cc=(_0x111449[_0x259824(0xcc8)]&&_0x25fa0f[_0x259824(0xcc8)]['ok']?_0x259824(0xaa3)+_0x259824(0xd04):_0x16a2b0[_0x259824(0x5a9)])+_0x48eb19+'s',_0x432a33='#ffd4'+'8a';}function _0x4512c5(_0xacf560,_0x5eff79,_0x73b2e6){var _0x78b342=_0xe93fad;if(_0x16a2b0['ApykH'](_0x78b342(0xbf6),'QtHIt'))try{var _0x5bdd64=window[_0x78b342(0x262)+'WebMo'+'dkit']&&window['Unity'+'WebMo'+'dkit'][_0x78b342(0xa67)+'me'],_0x39a13c=_0x6247f4||_0x5bdd64&&_0x5bdd64[_0x78b342(0x94b)+'ns']&&_0x5bdd64[_0x78b342(0x94b)+'ns'][_0x5bdd64[_0x78b342(0x94b)+'ns'][_0x78b342(0x516)+'h']-(0x17*-0xc5+0xd*0xcb+0x765)];if(!_0x39a13c||_0x16a2b0[_0x78b342(0x694)](typeof _0x39a13c['call'],_0x78b342(0x84c)+_0x78b342(0xd10)))return _0xd8eecf[_0x78b342(0x8a4)+'s'][_0x78b342(0x8f2)](_0x78b342(0xaf9)+'ugin.'+'call'),undefined;return _0x5787dc(_0x39a13c[_0x78b342(0x42f)](_0xacf560,_0x5eff79,_0x73b2e6||[]));}catch(_0x44b746){if(_0x16a2b0[_0x78b342(0x2f9)](_0xd8eecf['error'+'s']['lengt'+'h'],-0xd24+-0x45d*-0x4+-0xb7*0x6))_0xd8eecf[_0x78b342(0x8a4)+'s']['push'](_0x16a2b0[_0x78b342(0xb37)](_0x16a2b0['LvJKE'](_0x16a2b0['flzdS'](_0xacf560,'.')+_0x5eff79,':\x20'),String(_0x44b746&&_0x44b746[_0x78b342(0x6b5)+'ge']||_0x44b746)['slice'](0x840+-0x1c63+0x1423,0x304+0xb8a+-0x65*0x24)));return undefined;}else{var _0x18c44c=_0x19b1cc[-0x1*0x49+0x2637+-0x25ee][_0x78b342(0x9ee)]();if(_0x18c44c)_0x53c712=_0x18c44c;}}function _0x4d7004(){var _0x44e7ef=_0xe93fad,_0x1e0b49={'muWmd':function(_0x5ac813,_0x12e893){var _0x24ea2d=_0x563b;return _0x16a2b0[_0x24ea2d(0xb07)](_0x5ac813,_0x12e893);}};if(_0xd8eecf[_0x44e7ef(0x78c)+'ch'])return _0xd8eecf['scrat'+'ch'];try{var _0x403347=window[_0x44e7ef(0x262)+'WebMo'+_0x44e7ef(0x4fa)]&&window[_0x44e7ef(0x262)+_0x44e7ef(0xc5c)+'dkit']['Runti'+'me'],_0x7fa780=_0x6247f4||_0x403347&&_0x403347['plugi'+'ns']&&_0x403347['plugi'+'ns'][_0x403347[_0x44e7ef(0x94b)+'ns'][_0x44e7ef(0x516)+'h']-(0xb*0xa8+0x26c0+-0x29*0x11f)];if(!_0x7fa780||_0x16a2b0[_0x44e7ef(0x9d5)](typeof _0x7fa780['mallo'+'c'],_0x44e7ef(0x84c)+'ion'))return _0xd8eecf[_0x44e7ef(0x8a4)+'s']['push']('no\x20pl'+_0x44e7ef(0xaf1)+'mallo'+'c'),0x1dcb*-0x1+-0x229a+0x23*0x1d7;var _0x564bf6=_0x5787dc(_0x7fa780[_0x44e7ef(0x985)+'c'](0x35b*-0x5+0x66*-0x5d+0x35f5));if(_0x16a2b0[_0x44e7ef(0x7ed)](typeof _0x564bf6,_0x44e7ef(0xa38)+'r')||!(_0x564bf6>-0x18c3+0xfea*-0x1+0x28ad))return _0xd8eecf[_0x44e7ef(0x8a4)+'s']['push'](_0x16a2b0[_0x44e7ef(0xad7)]+_0x564bf6),-0x869*0x3+-0x1c06+0x3541;_0xd8eecf[_0x44e7ef(0x78c)+'ch']=_0x564bf6;}catch(_0x54e60c){if(_0x44e7ef(0x6e4)===_0x44e7ef(0xc71)){if(_0x27b6d0[_0x44e7ef(0x8a4)+'s'][_0x44e7ef(0x516)+'h']<-0x372+0x1723+-0x13ab)_0x472ac8[_0x44e7ef(0x8a4)+'s']['push'](_0x1e0b49[_0x44e7ef(0x86d)](_0x1e0b49['muWmd'](_0x3d557f,'.'),_0xc9c919)+':\x20'+_0x141a90(_0x3e123f&&_0x222b12[_0x44e7ef(0x6b5)+'ge']||_0x152d08)[_0x44e7ef(0x616)](-0x1f4c*-0x1+-0x1537+-0xa15,-0xf9e+-0x6b3+0x16ab));return _0x5c13f0;}else{if(_0xd8eecf[_0x44e7ef(0x8a4)+'s'][_0x44e7ef(0x516)+'h']<-0x7*-0x127+0x15aa+-0x1db5)_0xd8eecf[_0x44e7ef(0x8a4)+'s']['push'](_0x16a2b0['OydSa']('mallo'+_0x44e7ef(0x384),_0x16a2b0[_0x44e7ef(0x75a)](String,_0x54e60c&&_0x54e60c[_0x44e7ef(0x6b5)+'ge']||_0x54e60c)[_0x44e7ef(0x616)](0x213b+-0x1*-0x224f+-0x438a,-0x1f26*0x1+0x113d+0xe43)));return 0x377*-0x4+-0x123*-0xb+0x15b*0x1;}}return _0xd8eecf[_0x44e7ef(0x78c)+'ch'];}function _0x3a6e11(_0x4b62b5){var _0x1f7989=_0xe93fad,_0x2d8f67=_0x16a2b0[_0x1f7989(0x1be)][_0x1f7989(0x388)]('|'),_0x30f9f4=-0x469*0x3+-0x2681*0x1+-0x764*-0x7;while(!![]){switch(_0x2d8f67[_0x30f9f4++]){case'0':var _0x1fa950=_0x35c03f*_0x35c03f,_0x12f51f=_0x112486*_0x112486,_0x52e58d=_0x52c425*_0x52c425;continue;case'1':var _0x35c03f=_0x4b62b5[0x117e+-0xfc7+-0x1b7],_0x112486=_0x4b62b5[0x21b6+0x35a+0x35*-0xb3],_0x52c425=_0x4b62b5[0x1*-0x301+-0x1fca+0x22cd],_0xbbc0c=_0x4b62b5[-0xefd+-0x1b19*-0x1+-0xc19];continue;case'2':return{'right':[-0x1*-0x17c5+-0x84*-0x3d+-0x3738-_0x16a2b0['bpMvf'](-0x2ec+0x1eb1+-0x1bc3*0x1,_0x16a2b0['pMJeV'](_0x12f51f,_0x52e58d)),(0x35*-0xb5+-0x1280+0x37fb)*(_0x22eafc+_0x6c2eda),_0x16a2b0[_0x1f7989(0xa42)](0x197*-0xd+-0x20e+0x16bb,_0x16a2b0[_0x1f7989(0xc9a)](_0x46ec72,_0x22915c))],'up':[_0x16a2b0[_0x1f7989(0x1fb)](0x1697+0x1e2*0x2+0x13*-0x163,_0x16a2b0['Pyecx'](_0x22eafc,_0x6c2eda)),0x11e1+0x829+-0x1a09-(0x201e+0x89d+-0x19*0x1a1)*_0x16a2b0[_0x1f7989(0x978)](_0x1fa950,_0x52e58d),_0x16a2b0[_0x1f7989(0xe19)](0x22d*0x5+0xa9*0x25+-0x234c,_0x64eba4+_0x2f6d5d)],'fwd':[(-0x1907*0x1+0x11b1+-0x8*-0xeb)*(_0x46ec72+_0x22915c),(-0x2509+0xf4+-0x2417*-0x1)*_0x16a2b0['ZORlo'](_0x64eba4,_0x2f6d5d),0x2423+-0x12*-0x221+-0x4a74-(-0x3ef*0x1+0x125*0x1f+-0x1f8a*0x1)*_0x16a2b0[_0x1f7989(0x806)](_0x1fa950,_0x12f51f)]};case'3':var _0x22eafc=_0x35c03f*_0x112486,_0x46ec72=_0x35c03f*_0x52c425,_0x64eba4=_0x16a2b0[_0x1f7989(0xa04)](_0x112486,_0x52c425);continue;case'4':var _0x2f6d5d=_0xbbc0c*_0x35c03f,_0x22915c=_0xbbc0c*_0x112486,_0x6c2eda=_0x16a2b0['fCnMl'](_0xbbc0c,_0x52c425);continue;}break;}}var _0xf9cf0a=0x175+0x1d75+-0x1ecc;function _0x3212d1(_0x33c5ae){var _0x2041d5=_0xe93fad,_0x16e868={'GHSkt':_0x16a2b0['ldPJs'],'UOkes':_0x2041d5(0x6ee)+'as\x20id'+'=\x22sak'+_0x2041d5(0x1c1)+_0x2041d5(0x699)+_0x2041d5(0xb40)+'th=\x221'+_0x2041d5(0x502)+_0x2041d5(0x368)+_0x2041d5(0xd13)+'\x22\x20sty'+_0x2041d5(0x3aa)+_0x2041d5(0x3dc)+'y:blo'+_0x2041d5(0x759)+_0x2041d5(0x52e)+_0x2041d5(0x38e),'EeaDR':function(_0x5bc956,_0x9a476e){return _0x16a2b0['muPsG'](_0x5bc956,_0x9a476e);},'waLfK':function(_0x20c3c1,_0x89f48f){var _0x1c13fd=_0x2041d5;return _0x16a2b0[_0x1c13fd(0x6b9)](_0x20c3c1,_0x89f48f);},'MiuBy':_0x16a2b0['awPqg']};_0xd8eecf['ok']=![],_0xd8eecf['why']=_0x33c5ae,_0xd8eecf[_0x2041d5(0x31f)+'s']++;if(_0xd8eecf[_0x2041d5(0x31f)+'s']>_0xf9cf0a){if(_0x16a2b0['KMPlS'](_0x16a2b0[_0x2041d5(0xb51)],_0x16a2b0['iXMYV']))return _0xd8eecf[_0x2041d5(0x6d2)]=null,_0xd8eecf['basis']=null,_0xd8eecf['pos']=null,_0xd8eecf;else{var _0x31ee1f=_0x16e868['GHSkt'][_0x2041d5(0x388)]('|'),_0x584f2f=0x803+0x16d8+-0x1edb;while(!![]){switch(_0x31ee1f[_0x584f2f++]){case'0':return _0xfeb23f;case'1':_0x331672[_0x2041d5(0xcf9)+_0x2041d5(0xc09)]=_0x16e868[_0x2041d5(0x2ee)]+('<div\x20'+'id=\x22s'+_0x2041d5(0x97a)+_0x2041d5(0x602)+_0x2041d5(0x71f)+_0x2041d5(0x291)+_0x2041d5(0xa79)+'-alig'+_0x2041d5(0x5f7)+'ter\x22>'+_0x2041d5(0xb43)+'>');continue;case'2':_0x331672['style']['cssTe'+'xt']=_0x16e868[_0x2041d5(0xac5)](_0x16e868['waLfK'](_0x16e868[_0x2041d5(0x4dc)],_0x2041d5(0x2c7)+'round'+_0x2041d5(0xaca)+_0x2041d5(0x38c)+'2,29,'+_0x2041d5(0x54d)+_0x2041d5(0x9fb)+'r:1px'+_0x2041d5(0xe40)+_0x2041d5(0x2ec)+'a(255'+',143,'+'177,.'+'4);bo'+_0x2041d5(0x775)+_0x2041d5(0x401)+_0x2041d5(0xb73)+'x;'),'paddi'+'ng:4p'+_0x2041d5(0x5a4)+'t:10p'+'x/1.3'+'\x20ui-m'+_0x2041d5(0x71e)+_0x2041d5(0x82d)+_0x2041d5(0xdcd)+'as,mo'+_0x2041d5(0x86a)+_0x2041d5(0xbba)+_0x2041d5(0x767)+'bda9c'+'9;')+('user-'+_0x2041d5(0x4ec)+_0x2041d5(0xac3)+'e;-we'+_0x2041d5(0x716)+'user-'+_0x2041d5(0x4ec)+_0x2041d5(0xac3)+'e;');continue;case'3':var _0x86e722={'cv':{'getContext':function(){return null;}},'el':_0x331672};continue;case'4':_0x554b38={'el':_0x331672,'cv':_0x331672['query'+'Selec'+'tor'](_0x2041d5(0x691)+'ra-es'+'p-cv'),'lg':_0x331672[_0x2041d5(0x87a)+_0x2041d5(0x97e)+_0x2041d5(0x9ab)](_0x2041d5(0x691)+'ra-es'+_0x2041d5(0x57e))};continue;case'5':if(!_0x6bdb1a[_0x2041d5(0xbc1)]||!_0x3f2a99[_0x2041d5(0xbc1)]['appen'+'dChil'+'d'])return null;continue;case'6':_0x331672['id']=_0x2041d5(0x70f)+'a-esp';continue;case'7':var _0x331672=_0x57bd59[_0x2041d5(0x2a2)+'eElem'+_0x2041d5(0xcb8)]('div');continue;case'8':if(!_0x5c3b6d['cv']||!_0x5cc51c['cv']['getCo'+_0x2041d5(0x908)])_0xa22b5a=_0x86e722;continue;case'9':_0x3dc756[_0x2041d5(0xbc1)]['appen'+_0x2041d5(0xe08)+'d'](_0x331672);continue;}break;}}}return _0xd8eecf['stale']++,_0xd8eecf;}function _0x3429a8(){var _0x52c3d1=_0xe93fad;_0xd8eecf[_0x52c3d1(0xde1)]++,_0xd8eecf['misse'+'s']=-0x2*0xae2+0xff7+0x3*0x1ef;var _0x38e453=_0x30c6b3(),_0x94f87=_0x38e453&&_0x38e453[_0x52c3d1(0x4ca)+_0x52c3d1(0xa5b)]?parseInt(_0x38e453[_0x52c3d1(0x4ca)+_0x52c3d1(0xa5b)],-0x1829+-0x18f9+0x3132):_0x4650e7;if(!_0x94f87)return _0x3212d1(_0x16a2b0['ojfSI']);if(_0x16a2b0[_0x52c3d1(0xb9d)](_0x4650e7,_0x94f87))_0x4650e7=_0x94f87;var _0x2dd005=_0x16a2b0['tPKCk'](_0x3b9fd4,_0x16a2b0['yVHiq'](_0x94f87,_0x67b524),_0x16a2b0[_0x52c3d1(0xde5)]);if(_0x16a2b0[_0x52c3d1(0xddc)](typeof _0x2dd005,_0x52c3d1(0xa38)+'r')||!_0x16a2b0['hhjoX'](_0x2dd005,-0x18d*-0x11+0x20cf+-0x3b2c))return _0x3212d1(_0x16a2b0['GMKfS']);_0xd8eecf['camPt'+'r']=_0x2dd005;var _0x1c9d6f=_0x4512c5(_0x16a2b0[_0x52c3d1(0x90b)],_0x16a2b0[_0x52c3d1(0x443)],[_0x2dd005]);if(typeof _0x1c9d6f!==_0x16a2b0['JDLVw']||!(_0x1c9d6f>0x81d+0x25ad+-0x2dca))return _0xd8eecf['tfPtr']=0x5ff+-0x1a90*-0x1+-0x208f,_0x16a2b0[_0x52c3d1(0xb84)](_0x3212d1,_0x52c3d1(0x595)+_0x52c3d1(0xd49)+_0x52c3d1(0xda6)+'ransf'+_0x52c3d1(0x5ad)+_0x52c3d1(0xa6f)+_0x52c3d1(0xb7e)+_0x1c9d6f);_0xd8eecf['tfPtr']=_0x1c9d6f;var _0x455068=_0x16a2b0[_0x52c3d1(0xdbf)](_0x4d7004);if(!_0x455068)return _0x3212d1(_0x52c3d1(0x23f)+'ratch'+_0x52c3d1(0x809)+'er');var _0xabd6fb=_0x16a2b0[_0x52c3d1(0x5c6)](_0x4512c5,_0x16a2b0['eVWLD'],_0x52c3d1(0xcb0)+_0x52c3d1(0x664)+_0x52c3d1(0xaf6),[_0x2dd005]);if(typeof _0xabd6fb===_0x52c3d1(0xa38)+'r'&&isFinite(_0xabd6fb)&&_0xabd6fb>-0x566+-0x1f92+0x24f9&&_0x16a2b0[_0x52c3d1(0x287)](_0xabd6fb,0x909*-0x1+-0x13a*-0x1e+-0x1b10))_0xd8eecf['fov']=_0xabd6fb;_0x4512c5('Trans'+_0x52c3d1(0xcf0),_0x16a2b0['QsbuF'],[_0x455068,_0x1c9d6f]);var _0x218d9e=[_0x16a2b0[_0x52c3d1(0xe0e)](_0x3b9fd4,_0x455068,_0x16a2b0['rMBXt']),_0x3b9fd4(_0x16a2b0[_0x52c3d1(0xdeb)](_0x455068,-0x13*0x169+-0x1*-0x1e4d+-0x37e),_0x52c3d1(0x2e8)),_0x3b9fd4(_0x455068+(0x1b*0xa2+0xc5*-0xb+-0x897),'f32'),_0x3b9fd4(_0x455068+(0x128f*0x1+-0x1e49+0x16*0x89),_0x16a2b0[_0x52c3d1(0x7da)])],_0x457fbb=0xa51+0x2b8+-0xd09;for(var _0x32009f=0x6b*-0x30+0x15fb+0x1*-0x1eb;_0x32009f<0x1a6c+0x1*-0x15d3+-0x495;_0x32009f++)_0x457fbb+=_0x218d9e[_0x32009f]*_0x218d9e[_0x32009f];_0x457fbb=Math[_0x52c3d1(0x94a)](_0x457fbb);var _0x53491c=isFinite(_0x457fbb)&&_0x16a2b0['umpxk'](Math[_0x52c3d1(0x264)](_0x457fbb-(-0x717+0x8c9*-0x3+-0x1*-0x2173)),-0x41b*0x5+0x142b+0x2*0x2e+0.02);_0x4512c5('Trans'+_0x52c3d1(0xcf0),_0x16a2b0[_0x52c3d1(0xd37)],[_0x455068,_0x1c9d6f]);var _0x404278=_0x3b9fd4(_0x455068,_0x52c3d1(0x2e8)),_0x4d1103=_0x16a2b0[_0x52c3d1(0x483)](_0x3b9fd4,_0x16a2b0[_0x52c3d1(0x8ec)](_0x455068,0x1f9f+0x4ac+-0x2447),_0x16a2b0['rMBXt']),_0x19f95f=_0x3b9fd4(_0x455068+(0x1*-0x10ce+0x1f4e+-0xe78*0x1),'f32');_0xd8eecf['pos']=typeof _0x404278==='numbe'+'r'&&typeof _0x4d1103===_0x52c3d1(0xa38)+'r'&&typeof _0x19f95f===_0x16a2b0[_0x52c3d1(0xb00)]&&_0x16a2b0[_0x52c3d1(0x2ba)](isFinite,_0x404278)&&_0x16a2b0['PJhYM'](isFinite,_0x4d1103)&&isFinite(_0x19f95f)&&Math[_0x52c3d1(0x264)](_0x404278)<0x88*-0x68+-0x9*0x1e5f+-0x27*-0x1271&&Math['abs'](_0x4d1103)<0x1*0x21faf+-0x3a*0xb63+0x1fb5f&&Math['abs'](_0x19f95f)<-0x109b*-0x1a+0x1*0x5461+0x7d7f*-0x1?[_0x404278,_0x4d1103,_0x19f95f]:null,_0xd8eecf[_0x52c3d1(0x39d)+'ed']++;if(_0x53491c)return _0xd8eecf[_0x52c3d1(0x6d2)]=_0x218d9e,_0xd8eecf['basis']=_0x3a6e11(_0x218d9e),_0xd8eecf['ok']=!![],_0xd8eecf[_0x52c3d1(0x1c9)]='',_0xd8eecf[_0x52c3d1(0x700)+'e']=_0x16a2b0[_0x52c3d1(0x2c3)],_0xd8eecf;_0xd8eecf['quat']=null,_0xd8eecf['basis']=null;if(_0xd8eecf['fov']!==null)return _0x16a2b0[_0x52c3d1(0x1fd)]('eSuKP','eSuKP')?![]:(_0xd8eecf['ok']=!![],_0xd8eecf['sourc'+'e']=_0x52c3d1(0x843)+'a\x20fov'+_0x52c3d1(0x744),_0xd8eecf['why']=_0x52c3d1(0xb55)+'ion\x20u'+'nusab'+'le\x20(|'+_0x52c3d1(0x946)+_0x16a2b0[_0x52c3d1(0x8e7)](Math['round'](_0x16a2b0[_0x52c3d1(0xcdf)](_0x457fbb,-0xc41*-0x3+0x11d*-0xd+-0x1262)),-0xb4d*0x3+-0xdb2*-0x1+0x181d*0x1)+(_0x52c3d1(0x91e)+'ov\x20on'+'ly'),_0xd8eecf);return _0xd8eecf['ok']=![],_0xd8eecf['sourc'+'e']=null,_0xd8eecf['why']=_0x16a2b0[_0x52c3d1(0x7a8)]+_0x16a2b0[_0x52c3d1(0x307)](Math[_0x52c3d1(0x921)](_0x16a2b0[_0x52c3d1(0x6d9)](_0x457fbb,0x3*0x3c1+-0x12*-0x162+-0x41*0x7f)),0x5c2+-0x4d8+0x1*0x2fe)+(')\x20and'+'\x20no\x20f'+'ov'),_0xd8eecf;}function _0x3d0c4b(){var _0x59be80=_0xe93fad;if(_0xd8eecf[_0x59be80(0xde1)])return _0xd8eecf;return _0x16a2b0[_0x59be80(0x1ed)](_0x3429a8);}var _0x321b7e={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+_0xe93fad(0x4c8)+'ok\x20ye'+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x45dd32(_0x30f54f){var _0x562ed9=_0xe93fad,_0x52e954=null,_0x5f10bb=0x9*-0x13+0x1396+-0x12eb;for(var _0x4748a6 in _0x3ad7b7){if(_0x16a2b0[_0x562ed9(0x972)]!==_0x562ed9(0x5d0)){var _0x7be991=_0x3ad7b7[_0x4748a6];if(!_0x7be991[_0x562ed9(0x489)]||_0x16a2b0[_0x562ed9(0x592)](_0x7be991[_0x562ed9(0xabe)],null))continue;var _0x35b531=_0x3b9fd4(_0x4650e7+_0x30f54f,_0x16a2b0[_0x562ed9(0x7da)]);if(_0x16a2b0[_0x562ed9(0x9d5)](typeof _0x35b531,_0x16a2b0[_0x562ed9(0xb00)]))continue;_0x16a2b0[_0x562ed9(0xd5b)](Math[_0x562ed9(0x264)](_0x7be991[_0x562ed9(0xabe)]-_0x35b531),-0x12e+-0x24f3+0x2621+0.001)&&_0x7be991[_0x562ed9(0x489)]>_0x5f10bb&&(_0x52e954=_0x4748a6,_0x5f10bb=_0x7be991[_0x562ed9(0x489)]);}else _0x3478aa=_0x2fbb1e;}return _0x52e954;}function _0xd69789(_0x5c5993){var _0x842609=_0xe93fad,_0x38ca86={'QuCGN':_0x842609(0x583)+'kura]'+'\x20pane'+'l\x20upd'+_0x842609(0xe3b)+_0x842609(0x240),'fRSbV':function(_0x53fec6,_0x393490){return _0x16a2b0['JoFYp'](_0x53fec6,_0x393490);},'UGrow':_0x842609(0x7a6)+':'};if(_0x16a2b0[_0x842609(0xd36)]!==_0x842609(0x39e)){var _0x44fbac=[],_0x480127=_0x41d8ba['Mouse'+'Look']||[];for(var _0x5890db in _0x3ad7b7){if(_0x16a2b0[_0x842609(0xddc)](_0x16a2b0[_0x842609(0x4a4)],_0x16a2b0[_0x842609(0xc61)])){var _0x3ba979=_0x3ad7b7[_0x5890db];if(!_0x3ba979[_0x842609(0x489)])continue;var _0x5c5ad7=null;for(var _0x228acb=0xc95+0x2d*-0x76+0x829;_0x228acb<_0x480127['lengt'+'h'];_0x228acb++){if(_0x16a2b0[_0x842609(0x737)](_0x480127[_0x228acb][0x2*-0xd4+-0x1b*-0x28+-0x28f],_0x842609(0x2e8)))continue;var _0x3e29b2=_0x3b9fd4(_0x5c5993+_0x480127[_0x228acb][-0x1330+0x696+0xc9a],_0x842609(0x2e8));if(typeof _0x3e29b2===_0x842609(0xa38)+'r'&&Math['abs'](_0x3e29b2-_0x3ba979[_0x842609(0xabe)])<-0x149*0x5+-0x240+0x8ad+0.001){_0x5c5ad7='0x'+_0x480127[_0x228acb][0x12ea+-0x2579+0x128f*0x1][_0x842609(0x5f3)+_0x842609(0xc36)](-0x1*0x3c7+0x1a8a+-0x1bf*0xd);break;}}_0x44fbac[_0x842609(0x8f2)]({'name':_0x5890db,'value':_0x3ba979['last'],'matches':_0x5c5ad7,'hits':_0x3ba979[_0x842609(0x489)],'lo':_0x3ba979['lo'],'hi':_0x3ba979['hi'],'travel':_0x3ba979['lo']===null?0xe56+0x66f*0x2+-0x1b34:Math[_0x842609(0x921)](_0x16a2b0[_0x842609(0x8a7)](_0x3ba979['hi'],_0x3ba979['lo'])*(0x21f9+-0x1324+-0xe71))/(0x1782+0x1052+-0x2770),'jump':_0x16a2b0[_0x842609(0x390)](Math[_0x842609(0x921)](_0x3ba979['jump']*(-0x1753+-0x98+0x184f)),-0x93e+0x5e*0x16+0x18e),'set':_0x3ba979['setHi'+'ts']?_0x3ba979[_0x842609(0x3cc)+'st']:null});}else _0x182c92=_0x3db051();}return _0x44fbac;}else _0x884ebc['warn'](_0x38ca86[_0x842609(0x7ae)],_0x38ca86['fRSbV'](_0x38ca86[_0x842609(0x7cc)],_0x251b06),_0x4ea0f7);}function _0x235a3e(){var _0x410015=_0xe93fad,_0xcbfb8b={'KiXOG':function(_0x318b2d){var _0x58a598=_0x563b;return _0x16a2b0[_0x58a598(0x5ab)](_0x318b2d);},'sujxr':function(_0x47d175,_0x2b2d24){var _0x178cfb=_0x563b;return _0x16a2b0[_0x178cfb(0x30b)](_0x47d175,_0x2b2d24);},'ITuPX':'Diff\x20'+_0x410015(0xd78)+_0x410015(0x3fb)+'t:\x20'};if(_0x16a2b0['jMKJy']===_0x16a2b0['jMKJy']){var _0x2bf94c=_0x16a2b0[_0x410015(0x942)](_0x30c6b3);if(!_0x2bf94c||!_0x2bf94c['mouse'+'Look'])return _0x321b7e['ident'+'ified']=![],_0x321b7e[_0x410015(0x1c9)]=_0x16a2b0['AlQuQ'],null;var _0x31890a=_0x16a2b0['cFvCq'](parseInt,_0x2bf94c['mouse'+_0x410015(0xa5b)],0x25fe+-0x1d10+-0x8de);if(_0x4650e7!==_0x31890a)_0x4650e7=_0x31890a;_0x321b7e[_0x410015(0x97c)+'rs']=_0xd69789(_0x31890a);var _0x1acdda=_0x4eb21c(),_0x4bc45a=-0x26fe+0x213b+0x3*0x1ec,_0x20962f=0x1d06*-0x1+-0x2*-0x535+0x329*0x6;function _0x57b10a(_0x1e9b12){var _0xa797a9=_0x410015,_0xbbb28f={'rVgjQ':'Runti'+'me.re'+'solve'+'Game('+')'};return'Fcfad'!==_0xa797a9(0x7f0)?(_0x82892[_0xa797a9(0x700)+'e']=_0xbbb28f['rVgjQ'],_0x2ad13d):_0x1e9b12['lo']===null||_0x16a2b0[_0xa797a9(0x6ed)](_0x1e9b12['hi'],null)?0x64*0x19+-0x1b36+0x1172:_0x1e9b12['hi']-_0x1e9b12['lo'];}var _0x385629=null;for(var _0x52dda0 in _0x3ad7b7){var _0x269b38=_0x3ad7b7[_0x52dda0];if(!_0x269b38['hits']||_0x16a2b0[_0x410015(0xd45)](_0x269b38[_0x410015(0xabe)],null))continue;if(_0x57b10a(_0x269b38)<_0x4bc45a)continue;if(_0x269b38['jump']>_0x20962f)continue;var _0x3c2ade=_0x16a2b0[_0x410015(0xc9e)](_0x3b9fd4,_0x16a2b0['GLpGX'](_0x4650e7,_0x251a21),_0x16a2b0['rMBXt']);if(typeof _0x3c2ade!==_0x410015(0xa38)+'r'||Math[_0x410015(0x264)](_0x269b38['last']-_0x3c2ade)>=0x1e7e*-0x1+-0xba2+0x4*0xa88+0.001)continue;if(!_0x385629||_0x16a2b0['XfgKd'](_0x269b38['hits'],_0x3ad7b7[_0x385629][_0x410015(0x489)]))_0x385629=_0x52dda0;}var _0x5c1a54=null;for(var _0x27e96d in _0x3ad7b7){if(_0x27e96d===_0x385629)continue;var _0xd9a5da=_0x3ad7b7[_0x27e96d];if(!_0xd9a5da['hits']||_0x16a2b0[_0x410015(0x3eb)](_0xd9a5da['last'],null))continue;if(_0x16a2b0[_0x410015(0x768)](_0x57b10a(_0xd9a5da),_0x4bc45a))continue;if(_0xd9a5da[_0x410015(0x1dc)]>_0x20962f)continue;if(_0xd9a5da[_0x410015(0xabe)]>=-(-0x8*0x45b+0x8b6+0x1a7c)&&_0xd9a5da[_0x410015(0xabe)]<=0x2006+-0x1cd0+-0x2dc){_0x5c1a54=_0x27e96d;break;}}_0x321b7e[_0x410015(0x4e1)+'tter']=_0x385629,_0x321b7e['pitch'+_0x410015(0x20c)+'r']=_0x5c1a54;var _0x373657,_0x5ec164;if(_0x1acdda&&_0x16a2b0['WGFMM'](_0x1acdda['pitch'],null))_0x16a2b0['qYGoe'](_0x16a2b0['TPBFq'],_0x16a2b0[_0x410015(0x495)])?(_0x4676a8(![]),_0xcbfb8b[_0x410015(0xa0f)](_0x3a09b3)):(_0x5ec164=_0x1acdda[_0x410015(0x2d7)],_0x373657=_0x1acdda['yaw'],_0x321b7e['sourc'+'e']=_0x410015(0x646)+_0x410015(0x4f5)+_0x410015(0x689)+_0x1acdda[_0x410015(0x923)]+')');else _0x385629?(_0x373657=_0x3ad7b7[_0x385629][_0x410015(0xabe)],_0x321b7e[_0x410015(0x700)+'e']=_0x410015(0x97c)+'r',_0x5ec164=_0x5c1a54?_0x3ad7b7[_0x5c1a54]['last']:_0x3b9fd4(_0x31890a+_0x277b44,_0x410015(0x2e8))):(_0x373657=_0x16a2b0[_0x410015(0x9b7)](_0x3b9fd4,_0x16a2b0[_0x410015(0x713)](_0x31890a,_0x251a21),_0x16a2b0[_0x410015(0x7da)]),_0x5ec164=_0x3b9fd4(_0x16a2b0['yVHiq'](_0x31890a,_0x277b44),_0x410015(0x2e8)),_0x321b7e['sourc'+'e']='field'+_0x410015(0x27b)+_0x410015(0x777)+_0x410015(0x6a5));_0x321b7e['rawYa'+'w']=_0x373657,_0x321b7e['rawPi'+'tch']=_0x5ec164;if(typeof _0x373657!==_0x16a2b0[_0x410015(0xb00)]||!isFinite(_0x373657)||_0x16a2b0['TAPAk'](typeof _0x5ec164,'numbe'+'r')||!_0x16a2b0[_0x410015(0x7b5)](isFinite,_0x5ec164))return _0x321b7e[_0x410015(0x91d)+_0x410015(0xde4)]=![],_0x321b7e['why']=_0x410015(0x1cf)+_0x410015(0x913)+_0x410015(0xc95)+_0x410015(0x7cb)+'le',null;if(_0x5ec164<-(-0x857*-0x3+0x2a*-0xd7+-0x3*-0x389)||_0x5ec164>0x1d75*0x1+0x1003+-0x32*0xe7)return _0x321b7e[_0x410015(0x91d)+'ified']=![],_0x321b7e[_0x410015(0x1c9)]=_0x16a2b0['nGiYi'](_0x410015(0x2d7)+'\x20'+Math[_0x410015(0x921)](_0x5ec164),_0x410015(0x872)+_0x410015(0x587)+_0x410015(0x9a5)),null;return _0x321b7e[_0x410015(0x1c9)]='',_0x321b7e[_0x410015(0x91d)+_0x410015(0xde4)]=!![],_0x321b7e[_0x410015(0x2d7)]=_0x5ec164,_0x321b7e[_0x410015(0x704)]=_0x373657,_0x321b7e;}else _0x5c6244[_0x410015(0x4ff)+_0x410015(0x2bf)+'t']=_0x3c381e[_0x410015(0x6c3)]&&_0x5ec1ac['diff']['lengt'+'h']?_0xcbfb8b['sujxr'](_0xcbfb8b['ITuPX'],_0xc86ade[_0x410015(0x6c3)][_0x410015(0xa7a)](',\x20')):_0x410015(0x3d3)+'ice\x20w'+_0x410015(0x47a)+_0x410015(0x57d)+_0x410015(0x91c)+_0x410015(0x933)+_0x410015(0x5f9)+'/\x20jum'+'ping\x20'+'marks'+_0x410015(0x4ee)+_0x410015(0x59c)+'ld\x20is'+_0x410015(0x4ee)+'h.';}function _0x38e575(_0x33f5c2,_0x2f513e,_0x320f28,_0x40f34c){var _0x5cb6d5=_0xe93fad,_0x33feac=_0x16a2b0['nxwjP'](_0x3d0c4b),_0x333c94=null,_0x24bcfb=_0x33f5c2,_0x4f3d88=_0x40148d[_0x5cb6d5(0x6fb)];if(_0x33feac[_0x5cb6d5(0xcf6)]){_0x333c94=_0x33feac[_0x5cb6d5(0xcf6)];if(_0x33feac['pos'])_0x24bcfb=_0x33feac['pos'];if(_0x16a2b0['vwzBQ'](_0x33feac['fov'],null))_0x4f3d88=_0x33feac[_0x5cb6d5(0x6fb)];}var _0x443e7f,_0x56ddd0,_0x3ac755,_0x187a54,_0x3022f4,_0x6ac5fe,_0x32b0d3,_0xdb0a89,_0xc0a93f;if(_0x333c94)_0x443e7f=_0x333c94[_0x5cb6d5(0x5a2)][-0x1a7b+0x1770+0x30b*0x1],_0x56ddd0=_0x333c94[_0x5cb6d5(0x5a2)][0x3c9+0x68b+-0xa53],_0x3ac755=_0x333c94['fwd'][0x1bf8+0x272+-0x2*0xf34],_0x187a54=_0x333c94['right'][0xd14+0x47*-0x5e+0xcfe],_0x3022f4=_0x333c94['right'][-0x21aa*-0x1+0x1b83*0x1+0xa32*-0x6],_0x6ac5fe=_0x333c94['right'][-0x1*0x14b0+-0x56*-0x53+-0x730],_0x32b0d3=_0x333c94['up'][-0x49*0x4e+-0x2*-0x1b5+0x12d4],_0xdb0a89=_0x333c94['up'][0x1cf*-0x2+-0x217b+0x251a],_0xc0a93f=_0x333c94['up'][-0x1ff0+0xc82*-0x2+0x38f6*0x1];else{var _0x76b570=_0x16a2b0['rZdXV'][_0x5cb6d5(0x388)]('|'),_0x87da22=-0x733+-0x57e+0xab*0x13;while(!![]){switch(_0x76b570[_0x87da22++]){case'0':_0x56ddd0=-Math['sin'](_0xf3cd99);continue;case'1':var _0x54a806=Math['cos'](_0xf3cd99);continue;case'2':_0xdb0a89=_0x3ac755*_0x187a54-_0x16a2b0['LtKIn'](_0x443e7f,_0x6ac5fe);continue;case'3':if(!_0x127400)return null;continue;case'4':_0x3ac755=Math['cos'](_0x82b78f)*_0x54a806;continue;case'5':_0x187a54=_0x3ac755;continue;case'6':var _0x127400=_0x16a2b0[_0x5cb6d5(0x293)](_0x235a3e);continue;case'7':var _0xf3cd99=_0x16a2b0[_0x5cb6d5(0x650)](_0x127400[_0x5cb6d5(0x2d7)],Math['PI'])/(0xca1+-0x8b*0x1f+0x4e8),_0x82b78f=_0x16a2b0[_0x5cb6d5(0x45f)](_0x127400['yaw']*Math['PI'],-0x1f0f*0x1+-0x10*0x14c+-0x3483*-0x1);continue;case'8':_0x32b0d3=_0x56ddd0*_0x6ac5fe-_0x16a2b0['sTuhQ'](_0x3ac755,_0x3022f4);continue;case'9':_0x6ac5fe=-_0x443e7f;continue;case'10':_0xc0a93f=_0x16a2b0['mReDP'](_0x443e7f,_0x3022f4)-_0x16a2b0[_0x5cb6d5(0x4b3)](_0x56ddd0,_0x187a54);continue;case'11':_0x3022f4=0x1*-0x1d3d+0x25bd+0x80*-0x11;continue;case'12':_0x443e7f=Math[_0x5cb6d5(0xb6c)](_0x82b78f)*_0x54a806;continue;}break;}}var _0x3af1da=_0x16a2b0['LetCu'](_0x2f513e[-0x13dc+-0x8fe+-0x3*-0x99e],_0x24bcfb[0x4c1*-0x2+-0xed7*0x1+0x1859]),_0x27bc3f=_0x16a2b0[_0x5cb6d5(0x5cb)](_0x2f513e[-0x1*-0x2413+0x1412+-0x3824],_0x24bcfb[-0x8f0+-0x13ea+0x1cdb]),_0x563a20=_0x2f513e[0x5*-0x157+-0x126f+0xc92*0x2]-_0x24bcfb[-0x1516*-0x1+0x10*0x1be+-0x34*0xf1],_0x53f054=_0x3af1da*_0x443e7f+_0x27bc3f*_0x56ddd0+_0x563a20*_0x3ac755;if(_0x53f054<=-0x20*-0xd4+0xd1*-0x2d+-0xa3d*-0x1+0.05)return null;var _0x224709=_0x3af1da*_0x187a54+_0x27bc3f*_0x3022f4+_0x563a20*_0x6ac5fe,_0x500ade=_0x16a2b0[_0x5cb6d5(0x92a)](_0x3af1da*_0x32b0d3,_0x27bc3f*_0xdb0a89)+_0x563a20*_0xc0a93f,_0x1b4026=_0x320f28/_0x40f34c,_0x610984=_0x16a2b0[_0x5cb6d5(0x4f8)](_0x16a2b0['aDAfH'](_0x4f3d88,Math['PI']),0x1*-0x58+0x1c8c+-0x1b80),_0x38f89d=Math[_0x5cb6d5(0xb88)](_0x16a2b0['NIVbn'](_0x610984,-0x2610+0xf7c+0x62*0x3b)),_0x206302=_0x16a2b0[_0x5cb6d5(0x3b2)](_0x16a2b0[_0x5cb6d5(0x59b)](_0x224709,_0x53f054),_0x16a2b0[_0x5cb6d5(0xc9f)](_0x38f89d,_0x1b4026)),_0x3c3485=_0x16a2b0['esUKE'](_0x500ade,_0x53f054)/_0x38f89d;if(_0x206302<-(0x1ccd+-0xf37+-0xd95+0.6000000000000001)||_0x206302>0x1*0x1c8d+-0x1*-0xf29+0x43*-0xa7+0.6000000000000001||_0x16a2b0['WFSMT'](_0x3c3485,-(0x13ec+0x3*0x2ab+-0x4*0x6fb+0.6000000000000001))||_0x3c3485>-0x1b08+-0x577*-0x2+0x7*0x24d+0.6000000000000001)return null;return{'x':_0x16a2b0[_0x5cb6d5(0xcb4)](_0x16a2b0[_0x5cb6d5(0x20d)](_0x206302,0x18bf+0xbb4+-0x2473+0.5)+(0x1e2f*-0x1+-0xb38+0x2967*0x1+0.5),_0x320f28),'y':(0x1d8d+0x315*-0x8+-0x4e5*0x1+0.5-_0x3c3485*(0x691*0x2+0x147*-0x11+0x895+0.5))*_0x40f34c,'z':_0x53f054};}var _0x3bc5eb={'open':![],'cat':_0x16a2b0['llHvp'],'built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x4f75fe=_0xe93fad(0x70f)+_0xe93fad(0xbb6)+_0xe93fad(0x2e4)+_0xe93fad(0xdb8),_0xe0efbf=null,_0x151b07=[{'id':_0x16a2b0[_0xe93fad(0xb87)],'label':_0x16a2b0[_0xe93fad(0x365)]},{'id':_0x16a2b0['LJbIw'],'label':_0xe93fad(0x1f7)},{'id':_0xe93fad(0x61e)+'s','label':_0xe93fad(0xc19)},{'id':_0xe93fad(0xe34),'label':_0x16a2b0['hHtBC']}],_0x4bd350=_0x16a2b0[_0xe93fad(0x53b)](_0x16a2b0[_0xe93fad(0xd07)](_0x16a2b0[_0xe93fad(0x411)](_0x16a2b0[_0xe93fad(0xad1)](_0x16a2b0['EpvZw'](_0x16a2b0[_0xe93fad(0x7e1)](_0x16a2b0['iVQft'](_0x16a2b0[_0xe93fad(0x349)](_0x16a2b0[_0xe93fad(0xd77)](_0x16a2b0[_0xe93fad(0x950)](_0x16a2b0['HwHoi'](_0x16a2b0['DoLtK'](_0x16a2b0[_0xe93fad(0xb09)](_0x16a2b0[_0xe93fad(0xb09)](_0x16a2b0['DoLtK'](_0x16a2b0[_0xe93fad(0xe2b)](_0x16a2b0['hwHcU'](_0x16a2b0[_0xe93fad(0x880)](_0x16a2b0[_0xe93fad(0xda3)](_0x16a2b0[_0xe93fad(0x974)](_0x16a2b0[_0xe93fad(0xc06)](_0x16a2b0['VwhPh'](_0x16a2b0[_0xe93fad(0xcc1)](_0x16a2b0['GNAXK']+('#saku'+_0xe93fad(0x494)+_0xe93fad(0xaa9)+'ot.mn'+'-pane'+'l{pos'+_0xe93fad(0x3a0)+_0xe93fad(0x309)+'d;rig'+_0xe93fad(0x823)+_0xe93fad(0x245)+_0xe93fad(0xb62)+_0xe93fad(0x3bd)+_0xe93fad(0x80d)+_0xe93fad(0xdff)+'620px'+_0xe93fad(0x1f8)+'(100v'+'w\x20-\x204'+_0xe93fad(0xa05)+_0xe93fad(0x840)+'heigh'+'t:min'+'(500p'+_0xe93fad(0x7bb)+'c(100'+_0xe93fad(0x5d9)+'48px)'+');')+(_0xe93fad(0x957)+'ay:fl'+_0xe93fad(0x49d)+'p:10p'+'x;pad'+'ding:'+'10px;'+_0xe93fad(0x9fb)+_0xe93fad(0xb6e)+_0xe93fad(0x3c0)+_0xe93fad(0x249)+_0xe93fad(0xa73)+'r-eve'+_0xe93fad(0x3a8)+_0xe93fad(0x566)+_0xe93fad(0x356)+'x:214'+_0xe93fad(0x7b2)+_0xe93fad(0xb0a))+_0x16a2b0[_0xe93fad(0xb38)]+(_0xe93fad(0x3ab)+_0xe93fad(0x4d0)+_0xe93fad(0x25d)+_0xe93fad(0x408)+_0xe93fad(0x78f)+'(255,'+_0xe93fad(0xa8b)+'55,.0'+'6),in'+'set\x200'+'\x201px\x20'+'0\x20rgb'+'a(255'+',255,'+'255,.'+_0xe93fad(0x4dd)+_0xe93fad(0xd14)+'\x2080px'+_0xe93fad(0x78f)+'(0,0,'+'0,.55'+');'),_0xe93fad(0x232)+_0xe93fad(0x2c8)+_0xe93fad(0xd0c)+_0xe93fad(0x8c3)+_0xe93fad(0xd0c)+'lateY'+_0xe93fad(0x5c2)+_0xe93fad(0xd61)+_0xe93fad(0x308)+_0xe93fad(0xda1)+_0xe93fad(0x685)+_0xe93fad(0x69d)+_0xe93fad(0x1c0)+_0xe93fad(0xd48)+_0xe93fad(0xa93)+_0xe93fad(0x6ea)+_0xe93fad(0xad9)+_0xe93fad(0x37e)+'sform'+_0xe93fad(0x8ad)+_0xe93fad(0xac7)+'c-bez'+'ier(.'+'22,1,'+'.36,1'+');')+(_0xe93fad(0x7a6)+':#f6e'+_0xe93fad(0x5ee)+_0xe93fad(0x56e)+_0xe93fad(0x497)+'3px;f'+_0xe93fad(0xca7)+'amily'+_0xe93fad(0xb50)+'er\x22,\x22'+_0xe93fad(0xaea)+'\x20UI\x22,'+'syste'+_0xe93fad(0x5df)+_0xe93fad(0x8c4)+_0xe93fad(0xc40)+';}')+_0x16a2b0[_0xe93fad(0x2b9)]+_0x16a2b0['AnPxL']+('borde'+_0xe93fad(0xb6e)+'ius:1'+'6px;b'+_0xe93fad(0xd0f)+_0xe93fad(0x600)+_0xe93fad(0x8f5)+'255,2'+_0xe93fad(0x518)+'5,.02'+'5);bo'+_0xe93fad(0x435)+_0xe93fad(0x74a)+_0xe93fad(0x932)+_0xe93fad(0x639)+_0xe93fad(0x5e6)+'rgba('+_0xe93fad(0xa8b)+'55,25'+_0xe93fad(0x1d5)+_0xe93fad(0xe24)),_0xe93fad(0x677)+_0xe93fad(0x72c)+'ispla'+'y:gri'+_0xe93fad(0x84e)+_0xe93fad(0x9c7)+_0xe93fad(0xd31)+'enter'+_0xe93fad(0xc13)+'h:32p'+_0xe93fad(0xa2c)+_0xe93fad(0xc23)+_0xe93fad(0xe49)+_0xe93fad(0xb05)+_0xe93fad(0x1c2)+'om:6p'+'x;}'),'.mn-l'+_0xe93fad(0x25f)+_0xe93fad(0x961)+_0xe93fad(0x816)+_0xe93fad(0x934)+'eight'+_0xe93fad(0xe39)+';over'+_0xe93fad(0x24a)+'visib'+'le;fi'+_0xe93fad(0xc80)+'drop-'+'shado'+_0xe93fad(0xac6)+'\x204px\x20'+'rgba('+'255,1'+_0xe93fad(0x74f)+'7,.8)'+_0xe93fad(0xe24)),_0xe93fad(0x31c)+_0xe93fad(0x703)+_0xe93fad(0x55a)+_0xe93fad(0x87e)+';alig'+_0xe93fad(0xacf)+_0xe93fad(0x648)+_0xe93fad(0x50f)+'justi'+_0xe93fad(0xca9)+_0xe93fad(0x8db)+':cent'+_0xe93fad(0x7ec)+_0xe93fad(0xc0d)+_0xe93fad(0x562)+'eight'+_0xe93fad(0xc4a)+';bord'+'er:0;'+_0xe93fad(0x9fb)+'r-rad'+_0xe93fad(0x638)+_0xe93fad(0x60a))+_0x16a2b0[_0xe93fad(0xe26)]+('.mn-t'+_0xe93fad(0x5d6)+_0xe93fad(0x597)+_0xe93fad(0x904)+_0xe93fad(0x8f5)+_0xe93fad(0xd85)+'38,24'+'2,.8)'+';}'),_0x16a2b0['RlzuX'])+_0x16a2b0[_0xe93fad(0x9be)]+(_0xe93fad(0x31c)+_0xe93fad(0x3f1)+_0xe93fad(0x55a)+':flex'+';alig'+'n-ite'+'ms:ce'+_0xe93fad(0x50f)+_0xe93fad(0x830)+'2px;p'+_0xe93fad(0x6bc)+_0xe93fad(0xd3b)+_0xe93fad(0x29c)+'12px;'+'user-'+'selec'+_0xe93fad(0xac3)+'e;}')+(_0xe93fad(0x31c)+_0xe93fad(0x46d)+'{flex'+':1;mi'+'n-wid'+'th:0;'+'}')+('.mn-h'+'{font'+_0xe93fad(0x935)+_0xe93fad(0x52b)+_0xe93fad(0x7d3)+'-weig'+'ht:65'+_0xe93fad(0x6bd)),'.mn-s'+_0xe93fad(0x3a3)+'nt-si'+'ze:11'+_0xe93fad(0x634)+_0xe93fad(0xa93)+_0xe93fad(0xcee)),_0xe93fad(0xc2a)+'lose{'+_0xe93fad(0x957)+_0xe93fad(0x79e)+'id;pl'+_0xe93fad(0x89f)+_0xe93fad(0xe32)+_0xe93fad(0xdad)+_0xe93fad(0x4c5)+'th:28'+_0xe93fad(0xc6a)+_0xe93fad(0xc2b)+'28px;'+'borde'+_0xe93fad(0x2d1)+'order'+_0xe93fad(0x654)+_0xe93fad(0x891)+_0xe93fad(0x3be)+_0xe93fad(0xd1f)+_0xe93fad(0xbd8)+_0xe93fad(0xcc3)+_0xe93fad(0x3c6)),'color'+_0xe93fad(0x680)+_0xe93fad(0xba4)+_0xe93fad(0x668)+_0xe93fad(0x5c1)+_0xe93fad(0xa0c)+'or:po'+_0xe93fad(0xa11)+';}'),'.mn-c'+_0xe93fad(0x81d)+_0xe93fad(0xbc4)+'{opac'+'ity:1'+_0xe93fad(0x804)+_0xe93fad(0xa54)+'d:rgb'+'a(255'+',255,'+_0xe93fad(0x58d)+_0xe93fad(0xb11))+_0x16a2b0['IWDTF']+_0x16a2b0['plcfP'],_0xe93fad(0xae5)+_0xe93fad(0xa7f)+'s:sta'+'rt;al'+'ign-c'+'onten'+'t:sta'+_0xe93fad(0x1b3)+_0xe93fad(0x9f6)+_0xe93fad(0x563)+_0xe93fad(0xdf1)+_0xe93fad(0xaa4)+_0xe93fad(0x29c)+_0xe93fad(0x6bd))+_0x16a2b0[_0xe93fad(0xc31)]+_0x16a2b0['uwivo']+(_0xe93fad(0x4b1)+'ard{b'+_0xe93fad(0x923)+'-radi'+_0xe93fad(0x2fe)+_0xe93fad(0xa17)+_0xe93fad(0x3f8)+'und:r'+'gba(2'+_0xe93fad(0x518)+_0xe93fad(0x547)+',.025'+_0xe93fad(0x4e8)+_0xe93fad(0x5b4)+'ow:in'+'set\x200'+_0xe93fad(0xcbb)+'1px\x20r'+_0xe93fad(0x219)+'55,25'+_0xe93fad(0x547)+',.05)'+';}'),'.sk-c'+_0xe93fad(0x839)+_0xe93fad(0x25a)+_0xe93fad(0xd1f)+'nd:rg'+_0xe93fad(0xc41)+'5,255'+_0xe93fad(0x8cd)+_0xe93fad(0xd9c)+_0xe93fad(0x3ab)+_0xe93fad(0x4d0)+_0xe93fad(0x51f)+'t\x200\x200'+_0xe93fad(0xe20)+_0xe93fad(0xa00)+_0xe93fad(0x377)+',107,'+'157,.'+'28);}'),_0xe93fad(0x4b1)+'ard-h'+'ead{d'+_0xe93fad(0x3dc)+_0xe93fad(0x48c)+_0xe93fad(0x621)+_0xe93fad(0x62a)+_0xe93fad(0xd31)+_0xe93fad(0x8ed)+_0xe93fad(0x403)+_0xe93fad(0x58e)+_0xe93fad(0x6bc)+'g:11p'+_0xe93fad(0xda5)+_0xe93fad(0xa2a))+_0x16a2b0[_0xe93fad(0xbbd)],'.sk-c'+_0xe93fad(0x211)+'itle\x20'+'stron'+_0xe93fad(0x2e6)+'t-siz'+'e:13p'+_0xe93fad(0x5a4)+_0xe93fad(0x690)+'ght:6'+_0xe93fad(0x7fa)+_0xe93fad(0x829)+'gba(2'+'46,23'+'8,242'+_0xe93fad(0x861)+';}')+('.sk-c'+_0xe93fad(0x839)+'n\x20.sk'+'-card'+_0xe93fad(0xa55)+_0xe93fad(0x96f)+_0xe93fad(0xb99)+_0xe93fad(0x904)+'#fff0'+_0xe93fad(0x697))+(_0xe93fad(0x2cf)+_0xe93fad(0x97d)+_0xe93fad(0xcbf)+'ng:0\x20'+_0xe93fad(0xd70)+_0xe93fad(0x9f3)+'}'),_0xe93fad(0x2cf)+_0xe93fad(0x7d0)+'font-'+_0xe93fad(0x318)+_0xe93fad(0x1e1)+_0xe93fad(0x232)+_0xe93fad(0x69b)+_0xe93fad(0x3c2)+'in-bo'+'ttom:'+'6px;w'+'hite-'+'space'+_0xe93fad(0xc85)+'wrap;'+'}'),'.sk-c'+_0xe93fad(0xd89)+_0xe93fad(0x55a)+_0xe93fad(0x87e)+_0xe93fad(0xb0c)+_0xe93fad(0xacf)+_0xe93fad(0x648)+_0xe93fad(0x50f)+_0xe93fad(0x6ad)+'px;pa'+_0xe93fad(0xd33)+':4px\x20'+_0xe93fad(0x7c1)+'t-siz'+'e:11.'+_0xe93fad(0xbc2)),'.sk-l'+'abel{'+_0xe93fad(0xa52)+_0xe93fad(0x732)+_0xe93fad(0x4f1)+'ba(24'+_0xe93fad(0x30c)+_0xe93fad(0x295)+_0xe93fad(0x924)+'}'),_0x16a2b0[_0xe93fad(0xce3)]),_0xe93fad(0x99c)+'witch'+'{posi'+_0xe93fad(0xa48)+_0xe93fad(0xab2)+_0xe93fad(0xd46)+_0xe93fad(0x537)+_0xe93fad(0x542)+_0xe93fad(0x9e0)+'t:14p'+_0xe93fad(0xa36)+_0xe93fad(0x681)+_0xe93fad(0xc67)+_0xe93fad(0xa83)+_0xe93fad(0x53a)+'99px;'+_0xe93fad(0x2c7)+_0xe93fad(0x921)+_0xe93fad(0xaca)+_0xe93fad(0xade)+_0xe93fad(0xa8b)+'55,.0'+_0xe93fad(0x383)+'rsor:'+_0xe93fad(0x94d)+_0xe93fad(0x434)+'ex:no'+'ne;}')+(_0xe93fad(0x99c)+_0xe93fad(0x792)+_0xe93fad(0x828)+_0xe93fad(0xdc4)+_0xe93fad(0x8db)+':\x22\x22;p'+_0xe93fad(0xa6a)+_0xe93fad(0xc29)+'solut'+'e;top'+':3px;'+'left:'+'3px;w'+_0xe93fad(0x537)+'8px;h'+_0xe93fad(0x368)+_0xe93fad(0x1ca)+'borde'+'r-rad'+'ius:5'+_0xe93fad(0xbaa)),_0xe93fad(0x2c7)+'round'+':rgba'+_0xe93fad(0xade)+'255,2'+'55,.2'+_0xe93fad(0xc76)+'ansit'+'ion:l'+_0xe93fad(0x993)+_0xe93fad(0x4f0)+_0xe93fad(0x3f8)+_0xe93fad(0xa29)+_0xe93fad(0x1ef))+(_0xe93fad(0x99c)+'witch'+_0xe93fad(0x2d6)+_0xe93fad(0x66f)+'ked=\x22'+_0xe93fad(0x8d4)+_0xe93fad(0xc44)+'kgrou'+'nd:rg'+_0xe93fad(0xc41)+_0xe93fad(0x73f)+',157,'+_0xe93fad(0xe29)+'}')+(_0xe93fad(0x99c)+'witch'+_0xe93fad(0x2d6)+_0xe93fad(0x66f)+_0xe93fad(0x652)+_0xe93fad(0x8d4)+_0xe93fad(0xb20)+_0xe93fad(0x962)+_0xe93fad(0xe14)+_0xe93fad(0xe17)+_0xe93fad(0xd0f)+_0xe93fad(0x600)+_0xe93fad(0x65c)+'9d;}'),_0x16a2b0[_0xe93fad(0xb9f)]),'.sk-s'+_0xe93fad(0x945)+_0xe93fad(0x342)+_0xe93fad(0x6e2)+_0xe93fad(0x706)+'ance:'+_0xe93fad(0xdce)+_0xe93fad(0xd4c)+_0xe93fad(0x991)+_0xe93fad(0x53e)+_0xe93fad(0xc13)+_0xe93fad(0xd8a)+_0xe93fad(0xa2c)+_0xe93fad(0xb5b)+_0xe93fad(0xa17)+_0xe93fad(0x3f8)+_0xe93fad(0xc42)+'ransp'+_0xe93fad(0x8f1)+';}'),'.sk-s'+_0xe93fad(0x945)+_0xe93fad(0x5c3)+_0xe93fad(0x716)+'slide'+'r-run'+_0xe93fad(0xd88)+_0xe93fad(0x74b)+'k{hei'+_0xe93fad(0x267)+'px;bo'+'rder-'+_0xe93fad(0x401)+'s:2px'+';')+_0x16a2b0['yUhPI']+(_0xe93fad(0x99c)+'lider'+_0xe93fad(0x5c3)+_0xe93fad(0x716)+_0xe93fad(0x1d9)+_0xe93fad(0x627)+'mb{-w'+'ebkit'+'-appe'+'aranc'+_0xe93fad(0x538)+'e;wid'+'th:6p'+_0xe93fad(0xa2c)+_0xe93fad(0x576)+'px;ma'+_0xe93fad(0x976)+_0xe93fad(0x917)+'2px;b'+_0xe93fad(0x923)+_0xe93fad(0x654)+_0xe93fad(0x282)+_0xe93fad(0x2c4)+_0xe93fad(0xd1f)+'nd:#f'+'f6b9d'+';}')+(_0xe93fad(0x8b4)+_0xe93fad(0x47b)+'nt-si'+'ze:11'+_0xe93fad(0xd60)+_0xe93fad(0xa49)+'ight:'+'600;m'+_0xe93fad(0x298)+_0xe93fad(0xd57)+_0xe93fad(0xd38)+_0xe93fad(0x565)+'lign:'+_0xe93fad(0x41c)+_0xe93fad(0xbde)+_0xe93fad(0x8d2)+_0xe93fad(0xc0a)+_0xe93fad(0x4f7)+_0xe93fad(0xcdd)+_0xe93fad(0x882))+_0x16a2b0[_0xe93fad(0x353)]+('.sk-n'+'ote.e'+_0xe93fad(0x80c)+'lor:#'+'ff7a9'+_0xe93fad(0x49e))+(_0xe93fad(0xa88)+_0xe93fad(0xd19)+'ign-s'+_0xe93fad(0x49f)+_0xe93fad(0xd1c)+'tart;'+'borde'+_0xe93fad(0x2d1)+'order'+_0xe93fad(0x654)+_0xe93fad(0x891)+_0xe93fad(0x563)+_0xe93fad(0xdf1)+_0xe93fad(0x72e)+_0xe93fad(0xa46)+_0xe93fad(0xd0f)+'ound:'+_0xe93fad(0x65c)+'9d;co'+_0xe93fad(0x767)+'fff;')+('font-'+'size:'+'11.5p'+_0xe93fad(0x5a4)+'t-wei'+_0xe93fad(0xc37)+'00;cu'+'rsor:'+'point'+'er;fo'+_0xe93fad(0x2a4)+'mily:'+_0xe93fad(0xb6f)+_0xe93fad(0xcf1))+_0x16a2b0[_0xe93fad(0xc59)],_0x16a2b0[_0xe93fad(0x261)])+_0x16a2b0[_0xe93fad(0x604)]+_0x16a2b0['xbpZY'],_0x507082=_0xe93fad(0x277)+'viewB'+_0xe93fad(0x2d3)+_0xe93fad(0x9bd)+_0xe93fad(0x6c5)+_0xe93fad(0x7fe)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+'-2.5-'+_0xe93fad(0x37a)+'-4-7.'+'5\x200-2'+'.5\x201.'+'8-4.5'+'\x204-4.'+_0xe93fad(0x1b6)+_0xe93fad(0x8f0)+'5c0\x203'+_0xe93fad(0x973)+'5-4\x207'+'.5z\x22\x20'+_0x16a2b0['AnjDw']+(_0xe93fad(0x312)+_0xe93fad(0x4ef)+_0xe93fad(0x481)+_0xe93fad(0xb8c)+'10\x22\x20r'+'=\x221.5'+'\x22\x20fil'+'l=\x22#f'+_0xe93fad(0x59e)+'\x22/></'+'svg>'),_0x6de3=_0x16a2b0['QRbvV']+('fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0xe93fad(0x503)+_0xe93fad(0x6b4)+'h=\x221.'+'6\x22\x20st'+_0xe93fad(0xcde)+'linec'+'ap=\x22r'+_0xe93fad(0x2c9)+'\x20stro'+'ke-li'+'nejoi'+_0xe93fad(0x8b1)+_0xe93fad(0xa8d)+'>')+_0x16a2b0[_0xe93fad(0x4b9)];function _0x5a81ad(_0x599ec2,_0x4c80f2,_0x22b1d6){var _0x576037=_0xe93fad;if(_0x16a2b0[_0x576037(0x5e9)]('cHonx',_0x576037(0xbe8))){var _0x280b51=document[_0x576037(0x2a2)+'eElem'+_0x576037(0xcb8)](_0x599ec2);if(_0x4c80f2)_0x280b51[_0x576037(0xb2d)+'Name']=_0x4c80f2;if(_0x22b1d6!=null)_0x280b51[_0x576037(0xcf9)+'HTML']=_0x22b1d6;return _0x280b51;}else{_0xa26da7=_0x2c3671,_0x447949=[],_0x16a2b0['McXMI'](_0x198faf,_0x16a2b0['GmcZk'],{'report':_0x2fc207()});return;}}function _0x186ba2(_0x45f5de,_0x565f64){var _0x3ca72d=_0xe93fad,_0x1794bb=_0x5a81ad('div',_0x16a2b0['ZNgmO'](_0x16a2b0['dAMKw'],_0x565f64?'\x20on':'')),_0x405a9d=_0x5a81ad(_0x3ca72d(0xb32),'sk-ca'+'rd-he'+'ad'),_0x4602da=_0x5a81ad(_0x16a2b0[_0x3ca72d(0xde0)],_0x3ca72d(0x5e4)+_0x3ca72d(0xbbe)+'tle',_0x16a2b0[_0x3ca72d(0x32f)](_0x16a2b0['kXiyH'](_0x16a2b0[_0x3ca72d(0x1e7)],_0x45f5de),_0x3ca72d(0x683)+'ong>'));_0x405a9d['appen'+_0x3ca72d(0xe08)+'d'](_0x4602da);var _0x399456=_0x5a81ad('div',_0x3ca72d(0x2b7)+_0x3ca72d(0x327));return _0x1794bb['appen'+'dChil'+'d'](_0x405a9d),_0x1794bb[_0x3ca72d(0x28a)+_0x3ca72d(0xe08)+'d'](_0x399456),_0x1794bb[_0x3ca72d(0xbc1)]=_0x399456,_0x1794bb[_0x3ca72d(0x57f)]=_0x4602da,_0x1794bb;}function _0x5b5732(_0xbee445,_0x170a43){var _0x50fd58=_0xe93fad,_0x2a24df={'kHUHs':_0x16a2b0[_0x50fd58(0xca1)],'AkQVj':function(_0x332355,_0x55c2c0){var _0x2965a4=_0x50fd58;return _0x16a2b0[_0x2965a4(0xbc5)](_0x332355,_0x55c2c0);}},_0x533737=_0x5a81ad(_0x50fd58(0xa19)+'n',_0x16a2b0[_0x50fd58(0x5ec)]);_0x533737[_0x50fd58(0x712)]=_0x16a2b0[_0x50fd58(0x32c)];var _0x55752e=function(){var _0x50ac17=_0x50fd58;_0x533737['setAt'+_0x50ac17(0x2f4)+'te'](_0x2a24df['kHUHs'],_0xbee445()?'true':'false');};return _0x533737[_0x50fd58(0x317)+'ck']=function(){var _0x32f336=_0x50fd58;_0x2a24df[_0x32f336(0xc33)](_0x170a43,!_0xbee445()),_0x55752e();},_0x16a2b0['qPult'](_0x55752e),_0x533737[_0x50fd58(0x662)]=_0x55752e,_0x3bc5eb[_0x50fd58(0x276)]['push'](_0x55752e),_0x533737;}function _0x3794a8(_0x89ec5b,_0x23aa42,_0x666ed9,_0x13a8e5,_0x374591){var _0x35c6b3=_0xe93fad,_0x560c9a=_0x5a81ad(_0x16a2b0[_0x35c6b3(0xde0)],'sk-ra'+'nge'),_0x1dfdab=document[_0x35c6b3(0x2a2)+'eElem'+'ent'](_0x16a2b0[_0x35c6b3(0xa15)]);_0x1dfdab['type']=_0x16a2b0[_0x35c6b3(0x9d1)],_0x1dfdab[_0x35c6b3(0xb2d)+'Name']=_0x35c6b3(0x220)+_0x35c6b3(0xd00),_0x1dfdab[_0x35c6b3(0xe2c)]=String(_0x89ec5b),_0x1dfdab['max']=_0x16a2b0[_0x35c6b3(0xc07)](String,_0x23aa42),_0x1dfdab[_0x35c6b3(0x6e6)]=_0x16a2b0[_0x35c6b3(0xc07)](String,_0x666ed9);var _0x74d484=_0x5a81ad('span','sk-va'+'l'),_0x5282fc=function(){var _0x1355cb=_0x35c6b3,_0x389e18=_0x13a8e5();_0x1dfdab['value']=String(_0x389e18),_0x74d484[_0x1355cb(0x4ff)+'onten'+'t']=(_0x16a2b0[_0x1355cb(0xe2a)](_0x666ed9,0xfa*-0x9+0x21b3+-0x18e8)?_0x389e18['toFix'+'ed'](-0x1139*0x2+0xa6*0x35+0x15):_0x16a2b0[_0x1355cb(0xa9a)](String,Math[_0x1355cb(0x921)](_0x389e18)))+(_0x1dfdab[_0x1355cb(0x56a)+'et'][_0x1355cb(0xc5f)]||'');var _0x2bef9f=(_0x389e18-_0x89ec5b)/(_0x23aa42-_0x89ec5b)*(0x1389*-0x1+0x1a60+-0x673);_0x1dfdab[_0x1355cb(0x8d9)]['setPr'+'opert'+'y'](_0x16a2b0['krduk'],_0x2bef9f+'%');};return _0x1dfdab[_0x35c6b3(0x244)+'ut']=function(){var _0xd03f78=_0x35c6b3;_0x16a2b0['ylvyj'](_0x374591,parseFloat(_0x1dfdab[_0xd03f78(0x61e)])||_0x89ec5b),_0x16a2b0[_0xd03f78(0xae6)](_0x5282fc);},_0x560c9a[_0x35c6b3(0x28a)+'dChil'+'d'](_0x1dfdab),_0x560c9a[_0x35c6b3(0x28a)+'dChil'+'d'](_0x74d484),_0x560c9a[_0x35c6b3(0x662)]=_0x5282fc,_0x560c9a[_0x35c6b3(0xcd5)]=_0x1dfdab,_0x5282fc(),_0x3bc5eb['syncs']['push'](_0x5282fc),_0x560c9a;}function _0x5c08dd(_0x4df366,_0x338c67){var _0x5b8972=_0xe93fad;if(_0x5b8972(0xdbe)!==_0x5b8972(0xdbe))return _0x1bb428['val']();else{var _0x2d2c5d=_0x5a81ad(_0x16a2b0[_0x5b8972(0xde0)],_0x16a2b0[_0x5b8972(0x524)]),_0x252caf=_0x5a81ad(_0x16a2b0[_0x5b8972(0xde0)],_0x16a2b0['bTSyt'],_0x4df366+(_0x338c67?_0x5b8972(0x88d)+_0x5b8972(0xb3c)+_0x5b8972(0xb7b)+'-hint'+'\x27>'+_0x338c67+('</spa'+'n>'):''));return _0x2d2c5d['appen'+'dChil'+'d'](_0x252caf),_0x2d2c5d;}}function _0x33e6df(_0x38050a,_0x4cdbf3,_0x1cba41,_0x31b240){var _0x3e3be1=_0xe93fad;if(_0x16a2b0['NyNuD']!=='AuzuM')return-0x213a+0x389+0x1*0x1db1;else{var _0x3177e4=_0x38050a&&_0x38050a[_0x3e3be1(0xab4)+'y']&&_0x38050a[_0x3e3be1(0xab4)+'y'][_0x4cdbf3];if(!_0x3177e4)return'-';for(var _0x30852d=0x1*-0x769+0x1d7b+0x2*-0xb09;_0x30852d<_0x3177e4['lengt'+'h'];_0x30852d++){if(_0x16a2b0['XmsjI'](_0x3177e4[_0x30852d]['o'],_0x1cba41)){if(_0x31b240==='v3'){if(_0x3e3be1(0x838)===_0x16a2b0[_0x3e3be1(0xa44)]){var _0x47f09d=_0x3177e4[_0x30852d][_0x3e3be1(0x748)]||[_0x3177e4[_0x30852d]['v'],-0x17ae+-0x41+0x1*0x17ef,-0x9*-0x2f3+-0xa1f+-0x106c];return _0x47f09d['map'](function(_0x4d2b22){return Math['round'](_0x4d2b22*(0x1*0x22bf+-0x97*0x22+-0x7*0x20b))/(-0x1717+0x157*0x12+0x1*-0xa3);})[_0x3e3be1(0xa7a)]('\x20\x20');}else try{_0x24e994=_0x2e7f2b['keys'](_0x119573)[_0x3e3be1(0x616)](0x22b8+-0xacb+-0x19*0xf5,0x19*-0x101+-0x1d50+-0x1*-0x3681);}catch(_0x985287){}}var _0x14a18d=_0x3177e4[_0x30852d]['v'];return typeof _0x14a18d===_0x3e3be1(0xa38)+'r'?_0x16a2b0[_0x3e3be1(0xddd)](Math[_0x3e3be1(0x921)](_0x16a2b0[_0x3e3be1(0x4b3)](_0x14a18d,-0x57d+0xfc*0x10+-0x65b)),-0x585+0x2329+-0x3d*0x6c):String(_0x14a18d);}}return'-';}}function _0x4d4f38(_0x2139d8){var _0x49b4b7=_0xe93fad,_0x59d239={'GViQd':function(_0x34b261,_0x4d1db3){var _0x565ac3=_0x563b;return _0x16a2b0[_0x565ac3(0x28f)](_0x34b261,_0x4d1db3);},'yEKuU':_0x49b4b7(0x85e),'cKbQA':function(_0x3ffc63,_0x310bb6){var _0x4c506d=_0x49b4b7;return _0x16a2b0[_0x4c506d(0x9ec)](_0x3ffc63,_0x310bb6);},'AsVja':function(_0x3bf68b){var _0x481af7=_0x49b4b7;return _0x16a2b0[_0x481af7(0xdbf)](_0x3bf68b);},'llJWF':function(_0x4074f8,_0x3cc25e){return _0x4074f8+_0x3cc25e;},'xTbPe':function(_0x49d5b2,_0x363c82){return _0x49d5b2+_0x363c82;},'ldaID':_0x16a2b0[_0x49b4b7(0xbff)],'HFqBX':_0x49b4b7(0x456),'wpjiZ':'Copie'+'d','TZMmv':function(_0x218cc2,_0xa0eb74){return _0x218cc2<=_0xa0eb74;},'WppyZ':_0x16a2b0['eRPIH']};if('GaXXa'!==_0x49b4b7(0xc55))return _0x131a16[_0x49b4b7(0x87a)+_0x49b4b7(0x97e)+'tor'](_0x49b4b7(0xa69)+_0x49b4b7(0x6c8)+_0x32c880+'\x22]');else{var _0x3a925d=_0xe0efbf,_0x4e382c=[],_0x2841b5;if(_0x2139d8===_0x16a2b0[_0x49b4b7(0xb87)]){var _0x227ca3=_0x16a2b0[_0x49b4b7(0x9b8)](_0x186ba2,_0x16a2b0[_0x49b4b7(0xc4f)],_0xdd6062['on']),_0x393ed5=_0x5a81ad(_0x49b4b7(0xb32),_0x49b4b7(0x7ef)+_0x49b4b7(0x27d),_0xdd6062['on']?_0x16a2b0[_0x49b4b7(0x4bc)](_0x16a2b0[_0x49b4b7(0xc0e)](_0x16a2b0[_0x49b4b7(0x9e9)]('x'+_0xdd6062[_0x49b4b7(0xa51)+'r'][_0x49b4b7(0xb65)+'ed'](0xe*0xd9+0x11*0x14f+0x2*-0x110e),_0x16a2b0[_0x49b4b7(0x902)]),_0x633a1d[_0x49b4b7(0x516)+'h'])+(_0x49b4b7(0x75c)+'ds\x20·\x20'),_0x5c5c3d)+(_0x49b4b7(0x375)+'es'):_0x16a2b0['AsQBD']),_0x5a1dc7=_0x5c08dd(_0x49b4b7(0x5ef)+'ed');_0x5a1dc7['appen'+_0x49b4b7(0xe08)+'d'](_0x5b5732(function(){var _0x332a14=_0x49b4b7,_0x131199={'lNUwO':function(_0x29cc94,_0x30ce82){return _0x29cc94===_0x30ce82;}};if(_0x16a2b0['XOBzK']!==_0x16a2b0['XOBzK']){var _0x29dfe4=_0x33388a[_0x332a14(0x616)](-0x21e5+-0xf55+0x313a,0x23d4+0xfa7+0x3*-0x10c5);if(_0x131199['lNUwO'](_0xc229f6['index'+'Of'](_0x29dfe4),-(0x8d0+-0x10ed+0x81e))&&_0x5045f1['lengt'+'h']<0x4ac+0x1620+-0x1a90)_0x2c0db0[_0x332a14(0x8f2)](_0x29dfe4);}else return _0xdd6062['on'];},function(_0x5601d5){var _0x5ad616=_0x49b4b7,_0x17521e={'VPoam':'6|0|1'+'|5|3|'+_0x5ad616(0x498),'PBBQF':function(_0x1fc1a2,_0xb02910){return _0x16a2b0['Zraxv'](_0x1fc1a2,_0xb02910);},'wAEAs':function(_0x299b1b,_0xe4f080){return _0x299b1b>_0xe4f080;},'HmcAc':function(_0x1fd039,_0x3ff129){var _0x49b3f8=_0x5ad616;return _0x16a2b0[_0x49b3f8(0x5bb)](_0x1fd039,_0x3ff129);},'PjWrz':function(_0x5cb893,_0x591230){return _0x16a2b0['NWBeG'](_0x5cb893,_0x591230);},'DlYAs':function(_0x1d1e2c,_0x25a6bc){return _0x16a2b0['pMJeV'](_0x1d1e2c,_0x25a6bc);},'kMBCI':function(_0x371545){var _0xd67112=_0x5ad616;return _0x16a2b0[_0xd67112(0xb90)](_0x371545);}};if(_0x16a2b0['nWitW']!==_0x5ad616(0x5d3)){var _0x45c9e3=_0x17521e[_0x5ad616(0x348)]['split']('|'),_0x1c05d3=0x1*-0x27d+0xe1a+-0xb9d;while(!![]){switch(_0x45c9e3[_0x1c05d3++]){case'0':if(!_0x461aef)return null;continue;case'1':if(_0x17521e['PBBQF'](_0x153d14,0x1383+0x1ab3+-0x2e36)||_0x17521e['wAEAs'](_0x4a3cd9+_0x17521e['HmcAc'](_0x51a27b,-0x1a61+-0x10f8+0x2b5d),_0x461aef['byteL'+_0x5ad616(0xb9e)]))return null;continue;case'2':_0x1c23ab['ok']+=_0x31b760;continue;case'3':for(var _0x1f33c0=-0x228*-0x5+-0x644+0x484*-0x1;_0x1f33c0<_0x46bf9b;_0x1f33c0++)_0x2f95db['push'](_0x461aef['getFl'+_0x5ad616(0x32a)](_0x17521e[_0x5ad616(0xab7)](_0x17521e['DlYAs'](_0x1c3777,_0x57ace1),_0x1f33c0*(0x1*0x6a5+-0x11e0+0xb3f)),!![]));continue;case'4':return _0x2f95db;case'5':var _0x2f95db=[];continue;case'6':var _0x461aef=_0x17521e['kMBCI'](_0x21ad8c);continue;}break;}}else _0xd0a7f2(_0x5601d5,_0xdd6062['facto'+'r']),_0x393ed5[_0x5ad616(0x4ff)+'onten'+'t']=_0x5601d5?_0x16a2b0[_0x5ad616(0x77e)](_0x16a2b0['GLpGX']('x'+_0xdd6062['facto'+'r']['toFix'+'ed'](-0x19*0x122+-0x196f+0x35c2),_0x16a2b0['GJewo'])+_0x633a1d[_0x5ad616(0x516)+'h'],_0x16a2b0[_0x5ad616(0x2a9)])+_0x5c5c3d+_0x16a2b0[_0x5ad616(0x941)]:'Multi'+'plies'+'\x20move'+_0x5ad616(0x2c1)+_0x5ad616(0x69f)+'\x20fiel'+'ds\x20on'+_0x5ad616(0x3bc)+'eight'+_0x5ad616(0xb4b)+'p\x20and'+_0x5ad616(0x9e3)+'\x20are\x20'+'refus'+_0x5ad616(0x45c);})),_0x227ca3['body'][_0x49b4b7(0x28a)+'dChil'+'d'](_0x393ed5),_0x227ca3[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+'dChil'+'d'](_0x5a1dc7);var _0x13caff=_0x3794a8(0x1f27+0x5fb+-0x2521*0x1,0xd96+-0x15a*0x5+-0x6cf,-0x1*-0x1d71+0x1443+-0x31b4*0x1+0.5,function(){var _0x289ba1=_0x49b4b7,_0x423fa1={'kTrPu':function(_0x26ba76,_0x341f1d){return _0x59d239['GViQd'](_0x26ba76,_0x341f1d);},'lIgRb':function(_0x5e1754,_0x4d89d5){return _0x5e1754+_0x4d89d5;}};if(_0x59d239[_0x289ba1(0x2dc)]!=='RONmv'){var _0x251fbc=_0x29c81d[_0x289ba1(0x262)+_0x289ba1(0xc5c)+_0x289ba1(0x4fa)]&&_0x4010bf[_0x289ba1(0x262)+_0x289ba1(0xc5c)+'dkit'][_0x289ba1(0xa67)+'me'],_0x33a4eb=_0x251fbc&&_0x251fbc[_0x289ba1(0xa11)+_0x289ba1(0x73b)+'smTyp'+'es']||[],_0x3a1529={};for(var _0x135c73=-0x404+0x2*-0xf4f+0x1151*0x2;_0x423fa1['kTrPu'](_0x135c73,_0x33a4eb[_0x289ba1(0x516)+'h'])&&_0x135c73<-0x203e+-0x83*-0x29+0x1ae3;_0x135c73++){var _0x2d5d58=_0x423fa1[_0x289ba1(0x738)](_0x423fa1[_0x289ba1(0x738)](_0x33a4eb[_0x135c73][_0x289ba1(0x2a8)+'s'][_0x289ba1(0xa7a)](','),'\x20->\x20'),_0x33a4eb[_0x135c73]['retur'+'nType']||_0x289ba1(0x6ff));_0x3a1529[_0x2d5d58]=(_0x3a1529[_0x2d5d58]||0x15ea+0x49b*0x6+-0x318c)+(-0x174b+0x2*-0x26b+-0x1c22*-0x1);}_0x7f6d9d[_0x289ba1(0x855)+'ypes']=_0x3a1529;}else return _0xdd6062['facto'+'r'];},function(_0x4ba4fe){_0x16a2b0['PJJhC'](_0xd0a7f2,_0xdd6062['on'],_0x4ba4fe);});_0x13caff[_0x49b4b7(0xcd5)]['datas'+'et'][_0x49b4b7(0xc5f)]='x';var _0x94ff52=_0x16a2b0[_0x49b4b7(0xc75)](_0x5c08dd,_0x49b4b7(0xbcd)+_0x49b4b7(0xdda),_0x49b4b7(0x833)+_0x49b4b7(0x66e)+_0x49b4b7(0xba9)+_0x49b4b7(0x735)+'is');_0x94ff52[_0x49b4b7(0x28a)+'dChil'+'d'](_0x13caff),_0x227ca3[_0x49b4b7(0xbc1)]['appen'+_0x49b4b7(0xe08)+'d'](_0x94ff52);if(_0x1e4c35[_0x49b4b7(0x516)+'h']){var _0x2a6ab8=_0x5a81ad(_0x16a2b0[_0x49b4b7(0xde0)],_0x49b4b7(0x569)+'te',_0x16a2b0['XgazQ']('Refus'+_0x49b4b7(0x55e),_0x1e4c35[_0x49b4b7(0x616)](0xbb1*0x3+0x190f*-0x1+-0xa04,0x2af*0xd+-0xd2d*-0x1+0xa4*-0x4b)['map'](function(_0x5d4b45){var _0x409931=_0x49b4b7;if(_0x16a2b0['iLLnN']===_0x409931(0x430))_0x464bad[_0x409931(0xaba)+'Delta']=_0x1fadae['round'](_0x59d239[_0x409931(0x31d)](_0x1e54b1,0x17aa+-0x2*0x10bb+0xdb4))/(0xfbd+0x149a+-0x206f),_0x5dc623['worst'+_0x409931(0xbf3)+'ng']=_0x5eccf1['round'](_0x21720f[_0x409931(0x665)+'ng']);else return _0x16a2b0['ZCBuA'](_0x16a2b0[_0x409931(0x922)](_0x16a2b0['ihPqd']('0x'+(_0x5d4b45['o']<0x1*0x1fa6+-0x15a*0x2+-0x1cf2?'?':_0x5d4b45['o'][_0x409931(0x5f3)+'ing'](-0x20b3*-0x1+-0x4b6+0x1*-0x1bed)),'\x20('),_0x5d4b45['why']),')');})[_0x49b4b7(0xa7a)]('\x20\x20')));_0x227ca3[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x2a6ab8);}_0x4e382c[_0x49b4b7(0x8f2)](_0x227ca3);var _0x55d014=_0x16a2b0[_0x49b4b7(0x70d)](_0x186ba2,'Bindi'+'ngs'),_0x2fa07a=_0x5a81ad(_0x49b4b7(0xa19)+'n',_0x49b4b7(0xd06)+'n',_0x16a2b0[_0x49b4b7(0xad4)]);_0x2fa07a['type']=_0x49b4b7(0xa19)+'n',_0x2fa07a[_0x49b4b7(0x317)+'ck']=function(){var _0x4d60cd=_0x49b4b7;_0x4045b9('snaps'+_0x4d60cd(0x256));},_0x55d014[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x5a81ad(_0x49b4b7(0xb32),_0x16a2b0['KzMBS'],_0x49b4b7(0xd23)+_0x49b4b7(0x787)+'ot\x20\x20\x20'+_0x49b4b7(0xc08)+'speed'+'\x20on/o'+'ff\x0aF8'+_0x49b4b7(0xb5f)+_0x49b4b7(0x859)+_0x49b4b7(0x879)+'/-0.5'+_0x49b4b7(0xb4a)+'\x20\x20fie'+'ld\x20of'+_0x49b4b7(0x955)+_0x49b4b7(0xbbf)+_0x49b4b7(0xcac)+_0x49b4b7(0xb02)+'enu')),_0x55d014[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+'dChil'+'d'](_0x2fa07a),_0x4e382c['push'](_0x55d014);}if(_0x16a2b0[_0x49b4b7(0xbc3)](_0x2139d8,_0x49b4b7(0x4a2)+'ls')){var _0x559805=_0x16a2b0[_0x49b4b7(0xc75)](_0x186ba2,_0x16a2b0['swaAZ'],_0x159712['on']),_0x176350=_0x5c08dd(_0x49b4b7(0x5ef)+'ed');_0x176350['appen'+_0x49b4b7(0xe08)+'d'](_0x5b5732(function(){return _0x159712['on'];},function(_0xd3fcd9){var _0x596f6d=_0x49b4b7;_0x5411b1(_0xd3fcd9,_0x159712[_0x596f6d(0xbd7)]);})),_0x559805[_0x49b4b7(0xbc1)]['appen'+_0x49b4b7(0xe08)+'d'](_0x5a81ad(_0x16a2b0['mCUsw'],_0x16a2b0['KzMBS'],'World'+_0x49b4b7(0x817)+'e\x20min'+'imap,'+'\x20top-'+_0x49b4b7(0x41c)+'.\x20Nee'+_0x49b4b7(0x9d0)+'ly\x20po'+'sitio'+_0x49b4b7(0x810))),_0x559805[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x176350);var _0x3422b4=_0x3794a8(0x1895+0x9b5+-0x1*0x2222,0x1f7e+-0x1*-0xeaa+-0x2*0x16c4,-0x2*0x6bb+0x207d*0x1+-0x12fd,function(){return _0x159712['span'];},function(_0x1c8a17){var _0x35af46=_0x49b4b7;_0x159712[_0x35af46(0x8e2)]=_0x1c8a17;});_0x3422b4['input'][_0x49b4b7(0x56a)+'et'][_0x49b4b7(0xc5f)]='m';var _0x5d3874=_0x16a2b0['SXCMo'](_0x5c08dd,_0x16a2b0['sEYNh'],_0x16a2b0['wQwoy']);_0x5d3874[_0x49b4b7(0x28a)+'dChil'+'d'](_0x3422b4),_0x559805[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+'dChil'+'d'](_0x5d3874),_0x4e382c[_0x49b4b7(0x8f2)](_0x559805);var _0x121cd0=_0x186ba2('Boxes',_0x159712['boxes']),_0x5efac0=_0x5c08dd(_0x49b4b7(0x5ef)+'ed');_0x5efac0[_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x5b5732(function(){return _0x159712['boxes'];},function(_0xa29f37){if(_0xa29f37&&!_0x2ab8cc()){_0x59d239['AsVja'](_0x3ea381);return;}_0x5411b1(!![],_0xa29f37);}));var _0x5cf644=_0x3a925d&&_0x3a925d['angle'+'s'];_0x121cd0[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x5a81ad(_0x49b4b7(0xb32),_0x16a2b0[_0x49b4b7(0xaa8)],_0x5cf644&&!_0x5cf644[_0x49b4b7(0x91d)+_0x49b4b7(0xde4)]?'Not\x20d'+'rawin'+_0x49b4b7(0x3c1)+(_0x5cf644[_0x49b4b7(0x1c9)]||'view\x20'+_0x49b4b7(0xc04)+_0x49b4b7(0x479)+_0x49b4b7(0x7a4)+_0x49b4b7(0xe41))+_0x16a2b0['bXtsB']:_0x5cf644&&!_0x5cf644['fovSa'+'ne']?_0x16a2b0['NeOeu'](_0x16a2b0[_0x49b4b7(0x391)](_0x49b4b7(0xa6e)+'\x20of\x20v'+'iew\x20i'+'s\x20',Math[_0x49b4b7(0x921)](_0x5cf644['fov'])),'°,\x20ou'+'tside'+'\x20the\x20'+_0x49b4b7(0x659)+'band.'+'\x20Rese'+_0x49b4b7(0x543)+_0x49b4b7(0x784)+'.'):'Scree'+_0x49b4b7(0x728)+_0x49b4b7(0xc79)+_0x49b4b7(0x258)+_0x49b4b7(0x397)+_0x49b4b7(0xde6)+'of\x20vi'+_0x49b4b7(0x37f)+_0x49b4b7(0x3a4)+_0x49b4b7(0x1ac)+'ad\x20fr'+'om\x20th'+'is\x20bu'+'ild,\x20'+'so\x20it'+_0x49b4b7(0x5be)+_0x49b4b7(0x257)+'\x20by\x20e'+'ye.')),_0x121cd0[_0x49b4b7(0xbc1)]['appen'+'dChil'+'d'](_0x5efac0);var _0x4e00ee=_0x3794a8(-0x2*-0x551+0xabc+0x43a*-0x5,-0x3b*-0xa1+0x1*0x13c1+-0x385a,0x15c7+-0x679+-0xf4c,function(){return _0x40148d['fov'];},function(_0x1ed13d){var _0x258887=_0x49b4b7;_0x40148d[_0x258887(0x6fb)]=_0x1ed13d,_0x23602b();});_0x4e00ee['input']['datas'+'et'][_0x49b4b7(0xc5f)]='°';var _0xddfc00=_0x5c08dd('Field'+'\x20of\x20v'+_0x49b4b7(0xca5),_0x16a2b0['grEgl']);_0xddfc00[_0x49b4b7(0x28a)+'dChil'+'d'](_0x4e00ee);var _0x1a2fbe=_0x5c08dd(_0x49b4b7(0x3e9)+_0x49b4b7(0x955),_0x16a2b0[_0x49b4b7(0x911)]),_0x3caf7c=_0x5a81ad(_0x16a2b0['zBhdm'],'sk-bt'+'n','Reset');_0x3caf7c[_0x49b4b7(0x557)+_0x49b4b7(0x6a2)+_0x49b4b7(0xcb1)+'r'](_0x16a2b0[_0x49b4b7(0xbb8)],function(){var _0x198f3c=_0x49b4b7;_0x40148d[_0x198f3c(0x6fb)]=0x1*0x1da7+-0x117*0x1f+0x46d*0x1,_0x59d239[_0x198f3c(0x5dd)](_0x23602b),_0x322ea4(_0x3bc5eb['cat']);}),_0x1a2fbe[_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x3caf7c),_0x121cd0['body'][_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0xddfc00),_0x121cd0[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+'dChil'+'d'](_0x1a2fbe);var _0x3671b7=_0x3a925d&&_0x3a925d[_0x49b4b7(0xe4b)];_0x121cd0['body']['appen'+'dChil'+'d'](_0x5a81ad(_0x16a2b0['mCUsw'],_0x16a2b0[_0x49b4b7(0x6a3)],_0x49b4b7(0x6c4)+'\x20'+(_0x3671b7?_0x3671b7[_0x49b4b7(0x4ca)+_0x49b4b7(0xa5b)]?_0x16a2b0[_0x49b4b7(0xd4a)](_0x49b4b7(0x4c3)+_0x49b4b7(0x7b0),_0x3671b7['mouse'+'Look'])+(_0x3671b7['camer'+'a']?_0x49b4b7(0x821)+'era\x20'+_0x3671b7['camer'+'a']:''):'no\x20Mo'+_0x49b4b7(0x4c8)+'ok\x20ye'+'t':_0x49b4b7(0x64a)+_0x49b4b7(0x4c8)+_0x49b4b7(0x95b)+'t')+(_0x5cf644?'\x0a'+(_0x5cf644[_0x49b4b7(0x700)+'e']&&_0x16a2b0[_0x49b4b7(0x8de)](_0x5cf644[_0x49b4b7(0x700)+'e'][_0x49b4b7(0xd12)+'Of'](_0x16a2b0['wmLHM']),0x573+0xd*0xee+-0x1189)?_0x16a2b0[_0x49b4b7(0x76d)](_0x49b4b7(0x5e3)+'SetLo'+_0x49b4b7(0x649)+'les'+_0x5cf644[_0x49b4b7(0x700)+'e'][_0x49b4b7(0x616)](0x22a2+0xf9*-0x7+-0x1bc8)+(_0x49b4b7(0xe21)+'\x20\x20')+Math[_0x49b4b7(0x921)](_0x5cf644[_0x49b4b7(0x226)+'w'])+(_0x49b4b7(0xe16)+'h\x20'),Math[_0x49b4b7(0x921)](_0x5cf644['rawPi'+_0x49b4b7(0x36b)])):_0x16a2b0[_0x49b4b7(0x281)](_0x5cf644['sourc'+'e'],_0x16a2b0[_0x49b4b7(0x552)])?_0x16a2b0[_0x49b4b7(0xbd3)](_0x16a2b0[_0x49b4b7(0x660)](_0x16a2b0[_0x49b4b7(0xce6)](_0x16a2b0[_0x49b4b7(0x92c)],_0x5cf644[_0x49b4b7(0xbb4)]),_0x16a2b0['HkNjK'])+Math['round'](_0x5cf644['rawYa'+'w']),_0x49b4b7(0xe16)+'h\x20')+_0x5cf644['pitch'+'At']+_0x49b4b7(0x2de)+Math[_0x49b4b7(0x921)](_0x5cf644[_0x49b4b7(0x533)+'tch']):_0x16a2b0[_0x49b4b7(0x238)]):'')+(_0x5cf644&&_0x5cf644['viewH'+_0x49b4b7(0x40f)]&&_0x5cf644[_0x49b4b7(0x441)+_0x49b4b7(0x40f)][_0x49b4b7(0x39d)+'ed']===-0x1290+-0x1575+0x2805&&_0x5cf644['viewH'+'ooks']['total']>0x5*0x65+-0x1ba+0x9*-0x7?_0x16a2b0['NWBeG']('\x0ahook'+'s\x20reg'+'ister'+_0x49b4b7(0x376)+_0x49b4b7(0x672)+_0x49b4b7(0xb77)+_0x49b4b7(0x9c0)+'('+_0x5cf644['viewH'+'ooks'][_0x49b4b7(0x84f)+'ved']+'/'+_0x5cf644['viewH'+_0x49b4b7(0x40f)][_0x49b4b7(0xb60)],'\x20reso'+'lved)'):_0x5cf644&&_0x5cf644[_0x49b4b7(0x441)+_0x49b4b7(0x40f)]&&_0x5cf644[_0x49b4b7(0x441)+'ooks']['total']===-0xde6*-0x1+-0x7d6*0x4+0x1172?_0x16a2b0['AKJze']+_0x5cf644[_0x49b4b7(0x441)+_0x49b4b7(0x40f)][_0x49b4b7(0x8a4)+'Count']+_0x16a2b0['ZQTmo']:'')+(_0x1c4e05?_0x16a2b0['VTmfb']:''))),_0x4e382c['push'](_0x121cd0);}if(_0x2139d8==='value'+'s'){var _0x8e2f6b=[['Build',_0x16a2b0[_0x49b4b7(0x8e5)],_0x3a925d?_0x3a925d[_0x49b4b7(0xd87)+'on']:'-'],['Hooks',_0x16a2b0['gnPci'],_0x3a925d?_0x16a2b0['Yeaus'](_0x3a925d[_0x49b4b7(0x4b5)+'Appli'+'ed']+_0x49b4b7(0xcc2),_0x3a925d['hooks'+_0x49b4b7(0xa7b)+_0x49b4b7(0xa75)+'AtArm']):'-'],[_0x49b4b7(0x5d4),_0x49b4b7(0x5e3)+'insta'+_0x49b4b7(0x263)+_0x49b4b7(0xd5d),_0x3a925d&&_0x3a925d[_0x49b4b7(0x223)+_0x49b4b7(0xd74)]&&_0x3a925d[_0x49b4b7(0x223)+'emory']['captu'+_0x49b4b7(0x707)]?Math['round'](_0x3a925d['wasmM'+'emory']['bytes']/(-0x4975*-0x53+-0xe92a7*0x1+0xd837*0x8))+_0x16a2b0['FXSMx']+_0x3a925d[_0x49b4b7(0x223)+_0x49b4b7(0xd74)][_0x49b4b7(0x6e9)]+'ms':'-'],[_0x16a2b0[_0x49b4b7(0x984)],_0x49b4b7(0xc9b)+'nNetw'+_0x49b4b7(0xbc0)+'nc',_0x3a925d&&_0x3a925d[_0x49b4b7(0xce7)]?String(_0x3a925d[_0x49b4b7(0xce7)]['playe'+'rCoun'+'t']):'-'],[_0x16a2b0[_0x49b4b7(0x1c8)],_0x49b4b7(0xa9f)+'one\x20b'+_0x49b4b7(0x5cc)+'u',_0x3a925d&&_0x3a925d[_0x49b4b7(0xce7)]?_0x16a2b0['PJhYM'](String,_0x3a925d['esp'][_0x49b4b7(0x506)+'Count']):'-'],[_0x16a2b0[_0x49b4b7(0x718)],_0x16a2b0['skNzI'],_0x3a925d&&_0x3a925d[_0x49b4b7(0xce7)]&&_0x3a925d[_0x49b4b7(0xce7)][_0x49b4b7(0x843)+'a']?_0x16a2b0[_0x49b4b7(0x9e9)](_0x3a925d['esp']['camer'+'a'],'\x20(')+_0x3a925d[_0x49b4b7(0xce7)][_0x49b4b7(0x843)+'aFrom']+')':'-']];for(_0x2841b5=0x9e8+-0x3f*0x6b+0x5*0x349;_0x2841b5<_0x8e2f6b['lengt'+'h'];_0x2841b5++){var _0x5c54d2=_0x5c08dd(_0x8e2f6b[_0x2841b5][-0x2*0x4f+-0x26fc+0x13cd*0x2]),_0x48d765=_0x5a81ad(_0x49b4b7(0x8e2),_0x16a2b0[_0x49b4b7(0xc30)]);_0x48d765['style'][_0x49b4b7(0x1f6)+'dth']='0',_0x48d765[_0x49b4b7(0x8d9)]['flex']='1',_0x48d765[_0x49b4b7(0x8d9)]['textA'+_0x49b4b7(0x610)]=_0x49b4b7(0x41c),_0x48d765[_0x49b4b7(0x4ff)+_0x49b4b7(0x2bf)+'t']=String(_0x8e2f6b[_0x2841b5][-0x5a*-0x52+-0x6f7*0x5+-0x601*-0x1]),_0x48d765[_0x49b4b7(0x56a)+'et']['k']=_0x8e2f6b[_0x2841b5][0x5b0+-0x34*0x13+0x1*-0x1d3],_0x5c54d2['appen'+_0x49b4b7(0xe08)+'d'](_0x48d765);var _0x3dfcdd=_0x4e382c[_0x49b4b7(0x516)+'h']?_0x4e382c[_0x16a2b0[_0x49b4b7(0xa8e)](_0x4e382c['lengt'+'h'],-0x1c5b+0x794*-0x1+0x23f0)]:null;!_0x3dfcdd&&(_0x3dfcdd=_0x186ba2(_0x49b4b7(0x2ea)+'on',![]),_0x4e382c['push'](_0x3dfcdd)),_0x3dfcdd[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+'dChil'+'d'](_0x5c54d2),_0x3dfcdd['body'][_0x49b4b7(0xd97)+_0x49b4b7(0x73c)]['sp']=_0x48d765;}var _0xc8cbae=_0x186ba2('Playe'+'r',![]),_0x571fff=[[_0x16a2b0[_0x49b4b7(0xc35)],_0x3a925d&&_0x3a925d[_0x49b4b7(0xd08)]&&_0x3a925d['local'][_0x49b4b7(0x568)]?_0x49b4b7(0xb1f)+_0x49b4b7(0xc4b)+_0x49b4b7(0xb75)+_0x3a925d[_0x49b4b7(0xd08)][_0x49b4b7(0x568)]:_0x16a2b0[_0x49b4b7(0x867)],_0x3a925d&&_0x3a925d['local']&&_0x3a925d['local']['feet']?_0x3a925d['local'][_0x49b4b7(0x954)]['map'](function(_0x5114a9){var _0x2f9da9=_0x49b4b7;if(_0x59d239[_0x2f9da9(0x2fd)]!==_0x59d239[_0x2f9da9(0x2fd)])_0x57edc2=_0x59d239[_0x2f9da9(0x6a9)](_0x59d239['xTbPe'](_0x2f9da9(0xb66)+_0x2f9da9(0x37d)+_0x2f9da9(0x7f5)+'t\x20'+_0x9a83c9[_0x2f9da9(0x54a)+_0x2f9da9(0x8be)+'oof'][_0x2f9da9(0x6e9)]+(_0x2f9da9(0x799)+_0x2f9da9(0xb97)+_0x2f9da9(0x3ee)+'lFunc'+'='),_0x59c78f[_0x2f9da9(0x54a)+'irePr'+_0x2f9da9(0x4b4)][_0x2f9da9(0xc02)+'nalFu'+'nc'])+('\x20and\x20'+_0x2f9da9(0x2d9)+_0x2f9da9(0x84f)+_0x2f9da9(0x67c))+_0x57369d[_0x2f9da9(0x54a)+_0x2f9da9(0x8be)+'oof'][_0x2f9da9(0x84f)+_0x2f9da9(0x98e)+'eAtFi'+'re']+_0x59d239[_0x2f9da9(0xa96)],_0x22fff1[_0x2f9da9(0x54a)+_0x2f9da9(0x8be)+_0x2f9da9(0x4b4)]['gameS'+_0x2f9da9(0x7b7)+_0x2f9da9(0xd5e)+'e']||'none')+(_0x2f9da9(0xae3)+_0x2f9da9(0x868)+_0x2f9da9(0xb46)+_0x2f9da9(0xd51)+_0x2f9da9(0x9bc)+_0x2f9da9(0xae8)+'en\x20an'+_0x2f9da9(0x1ba)+'not\x20r'+_0x2f9da9(0x225)+_0x2f9da9(0xdf8)+'ow.');else return Math[_0x2f9da9(0x921)](_0x59d239[_0x2f9da9(0x31d)](_0x5114a9,-0x34*0x8+-0x1875*-0x1+-0x1671))/(-0x172a+0x1*0x1363+0x42b);})[_0x49b4b7(0xa7a)]('\x20\x20'):'-'],[_0x49b4b7(0xa64),_0x16a2b0[_0x49b4b7(0x8a2)](_0x16a2b0[_0x49b4b7(0x529)]('+',_0x30f2af),'m'),_0x3a925d&&_0x3a925d[_0x49b4b7(0xd08)]&&_0x3a925d['local']['eye']?_0x3a925d[_0x49b4b7(0xd08)][_0x49b4b7(0x38b)]['map'](function(_0x54d7de){var _0x139067=_0x49b4b7;return _0x16a2b0['IERXt'](Math[_0x139067(0x921)](_0x16a2b0['nwGCW'](_0x54d7de,0x347*0x1+0x1221+-0x1504)),-0xc1c+-0x262e+0x32ae);})['join']('\x20\x20'):'-'],[_0x16a2b0[_0x49b4b7(0x5c8)],_0x16a2b0[_0x49b4b7(0xb57)],_0x33e6df(_0x3a925d,_0x49b4b7(0xb1f)+_0x49b4b7(0xc4b)+_0x49b4b7(0x313),0x1d29+-0x2333+0x1*0x61a)],[_0x49b4b7(0x905)+_0x49b4b7(0x55d)+'ed','0x40',_0x16a2b0[_0x49b4b7(0xba6)](_0x33e6df,_0x3a925d,_0x49b4b7(0xb1f)+_0x49b4b7(0xc4b)+'ler',-0x1*0x17c8+0x156c+0x1*0x29c)],[_0x49b4b7(0x8df)+_0x49b4b7(0x9e0)+'t',_0x49b4b7(0xd8c),_0x33e6df(_0x3a925d,_0x16a2b0[_0x49b4b7(0x867)],0x6*0x1ed+-0x11d3+0x761)],[_0x49b4b7(0xdde)+'h',_0x49b4b7(0xdde)+_0x49b4b7(0x1a9)+_0x49b4b7(0xbe0)+'C0',_0x16a2b0[_0x49b4b7(0x742)](_0x33e6df,_0x3a925d,_0x16a2b0['zHLCn'],0xf0a+-0x303*0x4+-0x29*0xe)]];for(_0x2841b5=-0x5*-0x4c9+-0xa0b*0x2+-0x3d7;_0x2841b5<_0x571fff[_0x49b4b7(0x516)+'h'];_0x2841b5++){var _0x508bb4=_0x16a2b0[_0x49b4b7(0xa14)](_0x5c08dd,_0x571fff[_0x2841b5][0x204b*-0x1+-0xa8d+-0x392*-0xc]),_0x2463a1=_0x5a81ad('span',_0x49b4b7(0x72b)+'l');_0x2463a1[_0x49b4b7(0x8d9)]['minWi'+_0x49b4b7(0x711)]='0',_0x2463a1['style'][_0x49b4b7(0xa4f)]='1',_0x2463a1[_0x49b4b7(0x8d9)]['textA'+_0x49b4b7(0x610)]='right',_0x2463a1[_0x49b4b7(0x4ff)+_0x49b4b7(0x2bf)+'t']=_0x16a2b0[_0x49b4b7(0xc07)](String,_0x571fff[_0x2841b5][0x1049+0x74d*0x1+-0x3*0x7dc]),_0x2463a1[_0x49b4b7(0x56a)+'et']['k']=_0x571fff[_0x2841b5][0x100+0x42*0x2+-0x9*0x2b],_0x508bb4[_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x2463a1),_0xc8cbae['body'][_0x49b4b7(0x28a)+_0x49b4b7(0xe08)+'d'](_0x508bb4),_0xc8cbae[_0x49b4b7(0xbc1)]['lastC'+_0x49b4b7(0x73c)]['sp']=_0x2463a1;}_0x4e382c[_0x49b4b7(0x8f2)](_0xc8cbae);}if(_0x2139d8===_0x16a2b0[_0x49b4b7(0x4ac)]){var _0x2bd200=_0x186ba2(_0x49b4b7(0x35e)+_0x49b4b7(0x202)+'s',![]),_0x3c36b0=_0x3a925d&&_0x3a925d[_0x49b4b7(0xbd9)+_0x49b4b7(0xda8)]&&_0x3a925d[_0x49b4b7(0xbd9)+'ngs'][_0x49b4b7(0x516)+'h']?_0x3a925d['warni'+'ngs'][_0x49b4b7(0xa7a)]('\x0a'):_0x16a2b0['yuxbf'];_0x2bd200['body'][_0x49b4b7(0x28a)+'dChil'+'d'](_0x5a81ad('div',_0x16a2b0[_0x49b4b7(0xc83)],_0x3c36b0)),_0x4e382c[_0x49b4b7(0x8f2)](_0x2bd200);var _0x2cf7d=_0x186ba2(_0x49b4b7(0x79d)+'t',![]),_0x58e802=_0x16a2b0['PtmpP'](_0x5a81ad,_0x49b4b7(0xa19)+'n',_0x49b4b7(0xd06)+'n',_0x49b4b7(0x396)+'JSON\x20'+_0x49b4b7(0x6ce)+'ipboa'+'rd');_0x58e802['type']='butto'+'n',_0x58e802['oncli'+'ck']=function(){var _0x36c857=_0x49b4b7,_0x5afe61={'CNpIG':function(_0x39bad2,_0x28301e){var _0x5c0259=_0x563b;return _0x59d239[_0x5c0259(0xe18)](_0x39bad2,_0x28301e);}};try{var _0x428dfd=_0x5f1817+'\x0a'+JSON[_0x36c857(0x453)+'gify'](_0x3a925d,null,0x1720+0x1*-0x14fc+-0x223)+'\x0a'+_0x1db09e;if(navigator[_0x36c857(0xbc6)+_0x36c857(0x478)]&&navigator[_0x36c857(0xbc6)+_0x36c857(0x478)][_0x36c857(0x9b4)+_0x36c857(0x4f2)]){if(_0x59d239['WppyZ']===_0x59d239['WppyZ'])navigator[_0x36c857(0xbc6)+_0x36c857(0x478)][_0x36c857(0x9b4)+_0x36c857(0x4f2)](_0x428dfd)[_0x36c857(0xe3d)](function(){var _0x27fc4a=_0x36c857;_0x58e802[_0x27fc4a(0x4ff)+'onten'+'t']=_0x59d239['wpjiZ'];});else return _0x5afe61['CNpIG'](_0x249a97['abs'](_0x511db8-_0x55e643),_0x43c5f7['max'](-0x1*-0x25e2+-0x62f*0x5+-0x6f6,_0x464eb7[_0x36c857(0x264)](_0x310dba)*(0x8d*-0x45+0x2559+-0x2a*-0x4+0.6)));}else _0x58e802[_0x36c857(0x4ff)+_0x36c857(0x2bf)+'t']='Clipb'+'oard\x20'+_0x36c857(0x67f)+_0x36c857(0x51d)+_0x36c857(0xbeb)+_0x36c857(0x7e5)+_0x36c857(0xcb2)+'inste'+'ad';}catch(_0x502fce){_0x58e802['textC'+_0x36c857(0x2bf)+'t']='Copy\x20'+_0x36c857(0xe1e)+'d';}},_0x2cf7d[_0x49b4b7(0xbc1)][_0x49b4b7(0x28a)+'dChil'+'d'](_0x16a2b0[_0x49b4b7(0xc77)](_0x5a81ad,'div','sk-md'+_0x49b4b7(0x27d),_0x16a2b0[_0x49b4b7(0x9c2)])),_0x2cf7d[_0x49b4b7(0xbc1)]['appen'+'dChil'+'d'](_0x58e802),_0x4e382c['push'](_0x2cf7d);}return _0x4e382c;}}function _0x3cbf4e(){var _0x1f7b67=_0xe93fad;if(_0x3bc5eb['open'])_0x16a2b0[_0x1f7b67(0xa8f)](_0x2c2155,!![]);}function _0xf59019(){var _0x268183=_0xe93fad;if(_0x268183(0x89a)!=='SBXUr')try{var _0x51751f=localStorage[_0x268183(0x445)+'em'](_0x4f75fe);if(!_0x51751f)return;var _0x3e1639=JSON[_0x268183(0x52a)](_0x51751f);if(_0x3e1639&&typeof _0x3e1639['x']===_0x16a2b0[_0x268183(0xb00)]&&typeof _0x3e1639['y']===_0x268183(0xa38)+'r')_0x3bc5eb[_0x268183(0xdb8)]=_0x3e1639;}catch(_0x7c6097){}else{if(_0x33ef90[_0x268183(0xe1b)+'t']&&_0x5355a7[_0x268183(0xe1b)+'t']!==_0x6d8c3e)_0x4aa103[_0x268183(0xe1b)+'t']['postM'+_0x268183(0xbbc)+'e'](_0x4d9127,'*');}}function _0x2701b6(){var _0x61ef8d=_0xe93fad;try{if(_0x16a2b0['rPmvB'](_0x61ef8d(0xc88),_0x16a2b0[_0x61ef8d(0x3fa)])){var _0x437136=_0x29e482[_0x61ef8d(0x84f)+_0x61ef8d(0x98e)+'e']();if(_0x437136)return _0x43ace2['sourc'+'e']='plugi'+_0x61ef8d(0x2df)+'ntime'+'.reso'+_0x61ef8d(0xdb2)+_0x61ef8d(0x404),_0x437136;}else localStorage[_0x61ef8d(0x96e)+'em'](_0x4f75fe,JSON[_0x61ef8d(0x453)+_0x61ef8d(0x731)](_0x3bc5eb[_0x61ef8d(0xdb8)]));}catch(_0x323a4f){}}function _0x5870a2(){var _0x368766=_0xe93fad,_0x20e8fb=_0x3bc5eb[_0x368766(0x613)];if(!_0x20e8fb||!_0x20e8fb[_0x368766(0x8d9)])return;_0x3bc5eb[_0x368766(0xdb8)]?(_0x20e8fb['style']['left']=_0x3bc5eb['pos']['x']+'px',_0x20e8fb['style'][_0x368766(0xe0f)]=_0x3bc5eb['pos']['y']+'px',_0x20e8fb[_0x368766(0x8d9)][_0x368766(0x41c)]=_0x16a2b0[_0x368766(0xcce)],_0x20e8fb['style'][_0x368766(0x46f)+'m']=_0x16a2b0[_0x368766(0xcce)]):(_0x20e8fb[_0x368766(0x8d9)][_0x368766(0x470)]=_0x16a2b0['ZuAYn'],_0x20e8fb[_0x368766(0x8d9)][_0x368766(0xe0f)]='auto',_0x20e8fb['style']['right']='24px',_0x20e8fb['style'][_0x368766(0x46f)+'m']=_0x16a2b0[_0x368766(0xa16)]);}function _0x748b59(_0x348d92,_0x1a2d51){var _0x2dc8b3=_0xe93fad;try{var _0x3b043d=![],_0x4639fd=0x239a+-0x19de+-0x4de*0x2,_0x5632c1=-0x3c7*-0x2+-0x5a7*0x5+0x14b5;_0x1a2d51['style']['curso'+'r']=_0x16a2b0[_0x2dc8b3(0x4ed)],_0x1a2d51[_0x2dc8b3(0x8d9)][_0x2dc8b3(0xc74)+_0x2dc8b3(0xac0)+'n']=_0x2dc8b3(0xaeb);var _0x2df5ed=function(_0x29e56c){var _0x517575=_0x2dc8b3;_0x3b043d=!![],_0x1a2d51[_0x517575(0x8d9)][_0x517575(0x90c)+'r']=_0x16a2b0[_0x517575(0xb41)];var _0x6666f7={'left':parseFloat(_0x348d92[_0x517575(0x8d9)]['left'])||-0x1b2f+-0x117+0x1c46,'top':parseFloat(_0x348d92[_0x517575(0x8d9)]['top'])||-0x162f+-0x1*0x449+-0xf2*-0x1c};(!_0x348d92['style']['left']||_0x16a2b0[_0x517575(0x2f6)](_0x348d92[_0x517575(0x8d9)][_0x517575(0x470)],_0x517575(0xa02)))&&(_0x517575(0xc70)!==_0x517575(0xd3c)?_0x6666f7[_0x517575(0x470)]=_0x16a2b0['RFFre']((window[_0x517575(0xcf9)+'Width']||-0x36*-0x14+-0x268b+0x65*0x57)-(_0x348d92['offse'+_0x517575(0xb76)+'h']||0x51b+-0x2*-0xfb5+-0x2219),-0x1374+0x2061+-0xcd5):_0x5163ff());(!_0x348d92[_0x517575(0x8d9)][_0x517575(0xe0f)]||_0x16a2b0['pWbwk'](_0x348d92[_0x517575(0x8d9)]['top'],'auto'))&&(_0x6666f7['top']=_0x16a2b0['FtKms']((window[_0x517575(0xcf9)+_0x517575(0xc21)+'t']||0x8*0x3d6+-0x8c6+-0x15ea)-(_0x348d92[_0x517575(0xbd2)+_0x517575(0x352)+'ht']||-0xd7e+-0x1*-0x18e3+-0x9d5*0x1),0x12f*0x14+-0x2666+0xed2));_0x4639fd=(_0x29e56c['clien'+'tX']||-0x424+0x1301+-0xedd)-_0x6666f7[_0x517575(0x470)],_0x5632c1=(_0x29e56c['clien'+'tY']||0xd5c+0x126d*-0x1+0x511)-_0x6666f7[_0x517575(0xe0f)];try{_0x29e56c['preve'+_0x517575(0xb3b)+_0x517575(0x2c6)]();}catch(_0x928761){}},_0x56914b=function(_0x56d45a){var _0x2e1ec6=_0x2dc8b3,_0x396675=_0x16a2b0[_0x2e1ec6(0x2ab)]['split']('|'),_0x67bf63=-0x873+-0x21d1*-0x1+-0x195e;while(!![]){switch(_0x396675[_0x67bf63++]){case'0':_0x5f7978=Math[_0x2e1ec6(0x429)](-0x25fb+0x256*0xd+0x7a5,Math['min'](_0x16a2b0['Nfsgh'](window[_0x2e1ec6(0xcf9)+_0x2e1ec6(0x68b)]||0x264c+0xa55+-0xd3*0x3b,_0x1ff1b1)-(-0x1*-0xec2+0x238b+-0x3245),_0x5f7978));continue;case'1':var _0x5f7978=(_0x56d45a['clien'+'tX']||-0x6*0x169+0x575+0x301*0x1)-_0x4639fd,_0x2b2219=(_0x56d45a[_0x2e1ec6(0x3e1)+'tY']||-0xb*0x2e0+0x1*-0x1a3+0x2143)-_0x5632c1;continue;case'2':_0x348d92['style']['top']=_0x16a2b0[_0x2e1ec6(0xe3e)](_0x2b2219,'px');continue;case'3':_0x348d92['style']['botto'+'m']='auto';continue;case'4':_0x3bc5eb[_0x2e1ec6(0xdb8)]={'x':_0x5f7978,'y':_0x2b2219};continue;case'5':_0x348d92[_0x2e1ec6(0x8d9)][_0x2e1ec6(0x470)]=_0x16a2b0[_0x2e1ec6(0xafe)](_0x5f7978,'px');continue;case'6':if(!_0x3b043d)return;continue;case'7':_0x348d92['style'][_0x2e1ec6(0x41c)]=_0x2e1ec6(0xa02);continue;case'8':_0x2b2219=Math['max'](0x1b9f+-0x1*0x11a8+0x9ef*-0x1,Math[_0x2e1ec6(0xe2c)](_0x16a2b0[_0x2e1ec6(0x274)](_0x16a2b0[_0x2e1ec6(0x9cd)](window[_0x2e1ec6(0xcf9)+_0x2e1ec6(0xc21)+'t']||-0x6ee*0x2+-0x252e*-0x1+-0x1752,_0xa52a70),0x267e+-0x2335+0x77*-0x7),_0x2b2219));continue;case'9':var _0x1ff1b1=_0x348d92[_0x2e1ec6(0xbd2)+_0x2e1ec6(0xb76)+'h']||0xd6d+-0x9e*-0x18+-0x1*0x19d1,_0xa52a70=_0x348d92[_0x2e1ec6(0xbd2)+'tHeig'+'ht']||-0x82b*0x1+0x20d+0x1*0x7ae;continue;}break;}},_0x54b1a0=function(){var _0x8205a8=_0x2dc8b3,_0x53bd4f={'xJJxJ':function(_0x3162cf,_0x35f8f5){return _0x3162cf(_0x35f8f5);},'SsakJ':function(_0x3c2e89,_0x277abb){var _0xfd8286=_0x563b;return _0x16a2b0[_0xfd8286(0x2eb)](_0x3c2e89,_0x277abb);},'yjUFy':function(_0xefcf77,_0x2b7010){var _0x4211bc=_0x563b;return _0x16a2b0[_0x4211bc(0x5da)](_0xefcf77,_0x2b7010);},'vPHQU':function(_0x504ab4,_0x977d6d){return _0x504ab4!==_0x977d6d;},'QCAxX':_0x16a2b0['JDLVw'],'qZdsg':function(_0x60e973,_0x58a329){return _0x60e973<=_0x58a329;}};if(_0x16a2b0['FVRnX'](_0x8205a8(0xaf0),_0x8205a8(0xaf0))){if(!_0x3b043d)return;_0x3b043d=![],_0x1a2d51[_0x8205a8(0x8d9)]['curso'+'r']='grab',_0x2701b6();}else{var _0x2d7c0d=_0x134774['v'];if(typeof _0x2d7c0d!=='numbe'+'r'||!_0x53bd4f[_0x8205a8(0x560)](_0x315857,_0x2d7c0d))return![];if(_0x53bd4f['SsakJ'](_0x3b3816['k'],_0x8205a8(0x46e)))return _0x53bd4f[_0x8205a8(0xa24)](_0x2d7c0d,0x329+-0x2313*-0x1+0x1*-0x263c)||_0x53bd4f['yjUFy'](_0x2d7c0d,-0x7f*-0x20+0x22c7+-0x2*0x1953);var _0x3b8c7a=_0x88a82f[_0x8205a8(0x551)];if(_0x53bd4f[_0x8205a8(0x4c1)](typeof _0x3b8c7a,_0x53bd4f[_0x8205a8(0x5f0)])||!_0x473650(_0x3b8c7a))return!![];if(_0x53bd4f['SsakJ'](_0xaca042[_0x8205a8(0x32d)],0x35b*-0x6+-0x1529+0x294c))return _0x53bd4f['qZdsg'](_0x2e5aa[_0x8205a8(0x264)](_0x2d7c0d-_0x3b8c7a),_0x19e2c3[_0x8205a8(0x429)](-0x180e+0x1*-0x25c9+0x7bb*0x8,_0x3776b0['abs'](_0x3b8c7a)*(0x3*0x269+0x22a3+0x2e*-0xe9+0.6)));return _0x53e468[_0x8205a8(0x264)](_0x2d7c0d)<-0x7c8cfef*0x1+0x1864ab6*0x27+0xb*0xb890bf;}};_0x1a2d51['addEv'+'entLi'+'stene'+'r']('mouse'+'down',_0x2df5ed),window['addEv'+'entLi'+'stene'+'r'](_0x16a2b0['BCApC'],_0x56914b),window[_0x2dc8b3(0x557)+'entLi'+_0x2dc8b3(0xcb1)+'r'](_0x16a2b0[_0x2dc8b3(0x412)],_0x54b1a0),_0x1a2d51[_0x2dc8b3(0x557)+_0x2dc8b3(0x6a2)+_0x2dc8b3(0xcb1)+'r'](_0x16a2b0['TPLUE'],_0x2df5ed,{'passive':![]}),window[_0x2dc8b3(0x557)+_0x2dc8b3(0x6a2)+'stene'+'r'](_0x16a2b0[_0x2dc8b3(0x663)],_0x56914b,{'passive':![]}),window[_0x2dc8b3(0x557)+'entLi'+'stene'+'r'](_0x2dc8b3(0xc74)+_0x2dc8b3(0x6e0),_0x54b1a0);}catch(_0x53c1af){}}function _0x3d0c28(){var _0x1bda20=_0xe93fad,_0x548e5d={'DxMMY':_0x1bda20(0xb32),'wWZYQ':'sakur'+_0x1bda20(0x303),'fNcnd':function(_0x192a86,_0x49a24b){return _0x192a86+_0x49a24b;},'phUMM':function(_0x4f979c,_0x2a50b7){return _0x4f979c+_0x2a50b7;},'QBjgX':_0x16a2b0[_0x1bda20(0x201)],'FXUux':_0x1bda20(0xcbf)+_0x1bda20(0x1ec)+_0x1bda20(0x5a4)+'t:10p'+_0x1bda20(0x944)+'\x20ui-m'+_0x1bda20(0x71e)+_0x1bda20(0x82d)+'onsol'+_0x1bda20(0x6dd)+'nospa'+_0x1bda20(0xbba)+_0x1bda20(0x767)+_0x1bda20(0x9a2)+'9;','EOshO':function(_0x4c8da5,_0x50f8d7){var _0x16b6b2=_0x1bda20;return _0x16a2b0[_0x16b6b2(0x9f9)](_0x4c8da5,_0x50f8d7);},'GrKUg':function(_0x412bd3){var _0xb3ca35=_0x1bda20;return _0x16a2b0[_0xb3ca35(0xbce)](_0x412bd3);},'IFtAA':_0x16a2b0[_0x1bda20(0x605)],'OsPwg':_0x1bda20(0xbd5)+'a\x20Ski'+_0x1bda20(0xc2d)+_0x1bda20(0x6c9)+'aitin'+_0x1bda20(0xdc5)+_0x1bda20(0x868)+_0x1bda20(0x2d9)+_0x1bda20(0x248)+_0x1bda20(0x6a8)};if(_0x16a2b0[_0x1bda20(0x8a1)](_0x1bda20(0xcd0),_0x1bda20(0x765))){if(_0x3bc5eb[_0x1bda20(0xb95)])return _0x3bc5eb[_0x1bda20(0x613)];try{if(!document[_0x1bda20(0xbc1)]||!document[_0x1bda20(0xbc1)][_0x1bda20(0x28a)+_0x1bda20(0xe08)+'d'])return null;if(!document[_0x1bda20(0xd22)+_0x1bda20(0x99f)+'ById'](_0x16a2b0[_0x1bda20(0x769)])){if(_0x16a2b0[_0x1bda20(0xd0b)](_0x16a2b0['PazkG'],_0x16a2b0['PazkG'])){if(_0x2aecca)return _0x492622;try{if(!_0x4a3c2b['body']||!_0x4d52ce[_0x1bda20(0xbc1)]['appen'+_0x1bda20(0xe08)+'d'])return null;var _0x2b8ba1=_0x15f755[_0x1bda20(0x2a2)+'eElem'+'ent'](_0x548e5d[_0x1bda20(0x8bb)]);_0x2b8ba1['id']=_0x548e5d['wWZYQ'],_0x2b8ba1[_0x1bda20(0x8d9)][_0x1bda20(0x82b)+'xt']=_0x548e5d['fNcnd'](_0x548e5d['phUMM'](_0x548e5d[_0x1bda20(0x6f3)]+('backg'+'round'+':rgba'+'(21,1'+_0x1bda20(0x454)+_0x1bda20(0x54d)+'borde'+'r:1px'+_0x1bda20(0xe40)+'d\x20rgb'+_0x1bda20(0x377)+_0x1bda20(0xd66)+'177,.'+'4);bo'+_0x1bda20(0x775)+_0x1bda20(0x401)+'s:10p'+'x;'),_0x548e5d[_0x1bda20(0xad6)]),'user-'+_0x1bda20(0x4ec)+_0x1bda20(0xac3)+_0x1bda20(0xb7f)+'bkit-'+_0x1bda20(0x92d)+'selec'+_0x1bda20(0xac3)+'e;'),_0x2b8ba1[_0x1bda20(0xcf9)+_0x1bda20(0xc09)]='<canv'+_0x1bda20(0x8ea)+'=\x22sak'+_0x1bda20(0x1c1)+'sp-cv'+_0x1bda20(0xb40)+_0x1bda20(0x746)+'60\x22\x20h'+'eight'+_0x1bda20(0xd13)+_0x1bda20(0x3d4)+_0x1bda20(0x3aa)+'ispla'+'y:blo'+_0x1bda20(0x759)+_0x1bda20(0x52e)+'as>'+(_0x1bda20(0x58a)+_0x1bda20(0xb25)+'akura'+_0x1bda20(0x602)+_0x1bda20(0x71f)+'tyle='+_0x1bda20(0xa79)+_0x1bda20(0x43c)+_0x1bda20(0x5f7)+'ter\x22>'+'</div'+'>');var _0x11e482={'cv':{'getContext':function(){return null;}},'el':_0x2b8ba1};_0x21beeb[_0x1bda20(0xbc1)]['appen'+_0x1bda20(0xe08)+'d'](_0x2b8ba1),_0x461118={'el':_0x2b8ba1,'cv':_0x2b8ba1['query'+'Selec'+_0x1bda20(0x9ab)](_0x1bda20(0x691)+'ra-es'+_0x1bda20(0xb22)),'lg':_0x2b8ba1['query'+'Selec'+_0x1bda20(0x9ab)](_0x1bda20(0x691)+'ra-es'+'p-lg')};if(!_0x16d303['cv']||!_0x13910f['cv'][_0x1bda20(0x9ea)+_0x1bda20(0x908)])_0x429794=_0x11e482;return _0x2a4527;}catch(_0x16856c){return null;}}else{var _0x2826bd=document[_0x1bda20(0x2a2)+_0x1bda20(0xc69)+_0x1bda20(0xcb8)](_0x16a2b0[_0x1bda20(0x433)]);_0x2826bd['id']='sakur'+_0x1bda20(0x1ae)+_0x1bda20(0x67e),_0x2826bd[_0x1bda20(0x4ff)+'onten'+'t']=_0x4bd350,(document[_0x1bda20(0x57f)]||document[_0x1bda20(0xdc1)+_0x1bda20(0xccd)+'ement'])[_0x1bda20(0x28a)+_0x1bda20(0xe08)+'d'](_0x2826bd);}}var _0xab12f5=_0x5a81ad(_0x16a2b0[_0x1bda20(0xde0)],'mn-pa'+_0x1bda20(0x21e));_0xab12f5['id']='sakur'+'a-men'+_0x1bda20(0x6eb)+'t';var _0x24f2fe=_0x16a2b0['NlvwB'](_0x5a81ad,'div','mn-si'+'de'),_0x246ace=_0x5a81ad(_0x1bda20(0xb32),'mn-lo'+'go',_0x6de3);_0x24f2fe[_0x1bda20(0x28a)+_0x1bda20(0xe08)+'d'](_0x246ace);var _0xe46a5f=_0x5a81ad(_0x16a2b0['mCUsw'],_0x1bda20(0x95a)+'in'),_0x46ef9d=_0x5a81ad('div',_0x1bda20(0xbe2)+'p'),_0x180446=_0x16a2b0[_0x1bda20(0xd62)](_0x5a81ad,_0x1bda20(0xb32),'mn-ti'+'tles'),_0x2d343c=_0x16a2b0['mPVuO'](_0x5a81ad,_0x1bda20(0xb32),_0x1bda20(0xb12),'Sakur'+_0x1bda20(0x65f)+'llWar'+'z'),_0x361f5a=_0x16a2b0['NHLnL'](_0x5a81ad,_0x16a2b0[_0x1bda20(0xde0)],_0x16a2b0[_0x1bda20(0x24e)],_0x16a2b0[_0x1bda20(0x936)]);_0x180446['appen'+'dChil'+'d'](_0x2d343c),_0x180446[_0x1bda20(0x28a)+_0x1bda20(0xe08)+'d'](_0x361f5a);var _0x230608=_0x5a81ad('div',_0x16a2b0[_0x1bda20(0xa21)],_0x16a2b0[_0x1bda20(0x71c)]);_0x230608[_0x1bda20(0x317)+'ck']=function(){_0x548e5d['EOshO'](_0x2c2155,![]);},_0x46ef9d[_0x1bda20(0x28a)+'dChil'+'d'](_0x180446),_0x46ef9d['appen'+'dChil'+'d'](_0x230608);var _0x43a43a=_0x16a2b0[_0x1bda20(0x9b7)](_0x5a81ad,_0x1bda20(0xb32),_0x1bda20(0xdc2)+'ls');_0xe46a5f['appen'+'dChil'+'d'](_0x46ef9d),_0xe46a5f[_0x1bda20(0x28a)+'dChil'+'d'](_0x43a43a),_0xab12f5[_0x1bda20(0x28a)+'dChil'+'d'](_0x24f2fe),_0xab12f5[_0x1bda20(0x28a)+'dChil'+'d'](_0xe46a5f),document[_0x1bda20(0xbc1)]['appen'+'dChil'+'d'](_0xab12f5),_0x3bc5eb['root']=_0xab12f5,_0x3bc5eb[_0x1bda20(0x3ea)]=_0x43a43a,_0x3bc5eb['head']=_0x2d343c,_0x3bc5eb['sub']=_0x361f5a,_0xf59019(),_0x5870a2(),_0x16a2b0[_0x1bda20(0xc7a)](_0x748b59,_0xab12f5,_0x46ef9d);var _0x1fdd4c={};for(var _0x3950f6=0x1c66+-0x1a3*-0x7+-0x27db;_0x16a2b0[_0x1bda20(0xb52)](_0x3950f6,_0x151b07['lengt'+'h']);_0x3950f6++){var _0x494a0f=_0x151b07[_0x3950f6],_0x4bb26e=_0x5a81ad(_0x16a2b0[_0x1bda20(0x32c)],_0x1bda20(0xbec)+'b',_0x16a2b0[_0x1bda20(0xbb5)]+_0x494a0f[_0x1bda20(0xa0a)]+('</sma'+_0x1bda20(0x692)));_0x4bb26e['type']=_0x1bda20(0xa19)+'n',_0x4bb26e[_0x1bda20(0x67a)]=_0x494a0f['label'],function(_0x34b833){var _0x208632=_0x1bda20,_0x2dd41f={'zDEEz':function(_0x1c3038,_0x38eda8){return _0x1c3038(_0x38eda8);}};_0x4bb26e[_0x208632(0x317)+'ck']=function(){var _0x4128df=_0x208632;_0x2dd41f[_0x4128df(0x491)](_0x322ea4,_0x34b833);};}(_0x494a0f['id']),_0x1fdd4c[_0x494a0f['id']]=_0x4bb26e,_0x24f2fe['appen'+'dChil'+'d'](_0x4bb26e);}_0x3bc5eb[_0x1bda20(0xa19)+'ns']=_0x1fdd4c;var _0x5a60bc=_0x16a2b0[_0x1bda20(0xb82)](_0x5a81ad,_0x16a2b0[_0x1bda20(0xde0)],null,_0x507082);return _0x5a60bc['id']=_0x16a2b0[_0x1bda20(0x28b)],_0x5a60bc['title']=_0x1bda20(0xbd5)+'a\x20Ski'+_0x1bda20(0xc2d)+'z\x20(In'+_0x1bda20(0x3f7),_0x5a60bc['onmou'+_0x1bda20(0xa9e)+'er']=function(){var _0x5880f8=_0x1bda20;_0x5a60bc['style'][_0x5880f8(0x232)+'ty']='1';},_0x5a60bc[_0x1bda20(0x87c)+'selea'+'ve']=function(){var _0x3f445f=_0x1bda20;_0x5a60bc[_0x3f445f(0x8d9)]['opaci'+'ty']=_0x3bc5eb[_0x3f445f(0xd7f)]?'1':'.5';},_0x5a60bc[_0x1bda20(0x317)+'ck']=function(_0x163900){var _0x8aff29=_0x1bda20;if(_0x163900&&_0x163900[_0x8aff29(0xce0)+_0x8aff29(0xcef)+'ation'])_0x163900[_0x8aff29(0xce0)+_0x8aff29(0xcef)+_0x8aff29(0x44d)]();_0x2c2155(!_0x3bc5eb['open']);},document['body']['appen'+_0x1bda20(0xe08)+'d'](_0x5a60bc),_0x3bc5eb['petal']=_0x5a60bc,setInterval(function(){var _0x242bb7=_0x1bda20;if('wpcNt'===_0x242bb7(0x4a6))try{if(!_0x3bc5eb[_0x242bb7(0xd91)])return;var _0x2260fc=_0x548e5d['GrKUg'](_0x3d07d3);_0x3bc5eb[_0x242bb7(0xd91)][_0x242bb7(0x8d9)][_0x242bb7(0x232)+'ty']=_0x3bc5eb[_0x242bb7(0xd7f)]?'1':_0x2260fc?'.8':_0x548e5d['IFtAA'],_0x3bc5eb[_0x242bb7(0xd91)]['title']=_0x2260fc?_0x242bb7(0xbd5)+_0x242bb7(0x65f)+'llWar'+_0x242bb7(0x8f7)+_0x242bb7(0x3f7):_0x548e5d['OsPwg'];}catch(_0x1d8a0c){}else{var _0x2d0012=new _0x35204f(_0x1c8ed5);for(var _0x3283df=-0x1820+-0x2*0x712+0x4*0x991;_0x3283df<_0x419017;_0x3283df++)_0x2d0012[_0x3283df]=_0x5413cc[_0x242bb7(0xe06)+_0x242bb7(0x59a)](_0x49f8a7+_0x25784d+_0x3283df);return _0x39bcd0['ok']++,_0x2d0012;}},0x1*-0x1d1+-0x7*0x2ad+-0x1748*-0x1),_0x3bc5eb['built']=!![],_0x16a2b0[_0x1bda20(0x9f9)](_0x322ea4,_0x3bc5eb[_0x1bda20(0x3de)]),_0xab12f5;}catch(_0x28f208){return console['warn'](_0x1bda20(0x583)+_0x1bda20(0xda4)+'\x20menu'+'\x20unav'+_0x1bda20(0x705)+'le',_0x16a2b0['cBlGq'](_0x16a2b0[_0x1bda20(0xd58)],_0x39f871),_0x28f208),null;}}else return _0x2a7cf7['tfPtr']=0x1331+-0xe96*0x1+-0x49b,_0x16a2b0[_0x1bda20(0x9f9)](_0x106f54,_0x16a2b0[_0x1bda20(0x922)](_0x16a2b0['zTmly'],_0x2c21ff));}function _0x322ea4(_0x324950){var _0xc8f7fc=_0xe93fad,_0x23ff9b={'JBLxm':function(_0x3ccb99){return _0x16a2b0['OEvAH'](_0x3ccb99);}};_0x3bc5eb[_0xc8f7fc(0x3de)]=_0x324950,_0x3bc5eb[_0xc8f7fc(0x276)]=[];if(!_0x3bc5eb[_0xc8f7fc(0x3ea)])return;var _0x3a4821=null;for(var _0x50b14d=-0x233f+0x4d5*0x5+0x56*0x21;_0x50b14d<_0x151b07[_0xc8f7fc(0x516)+'h'];_0x50b14d++)if(_0x16a2b0['wWzco'](_0x151b07[_0x50b14d]['id'],_0x324950))_0x3a4821=_0x151b07[_0x50b14d];_0x3bc5eb['head'][_0xc8f7fc(0x4ff)+_0xc8f7fc(0x2bf)+'t']=_0xc8f7fc(0xbd5)+'a\x20Ski'+_0xc8f7fc(0xc2d)+'z\x20—\x20'+(_0x3a4821&&_0x3a4821[_0xc8f7fc(0xa0a)]||'?');for(var _0x1ad461 in _0x3bc5eb[_0xc8f7fc(0xa19)+'ns']){if(_0x3bc5eb[_0xc8f7fc(0xa19)+'ns'][_0x1ad461][_0xc8f7fc(0xb2d)+_0xc8f7fc(0xa22)])_0x3bc5eb['butto'+'ns'][_0x1ad461][_0xc8f7fc(0xb2d)+'Name']='mn-ta'+'b'+(_0x16a2b0[_0xc8f7fc(0x729)](_0x1ad461,_0x324950)?_0xc8f7fc(0xb23)+'ve':'');}var _0xc29045=[];try{_0xc29045=_0x4d4f38(_0x324950);}catch(_0x111012){_0x16a2b0['jqOZL'](_0x16a2b0[_0xc8f7fc(0xaa6)],_0x16a2b0[_0xc8f7fc(0xaa6)])?(_0x3baabe(!_0x44c797()),_0x23ff9b[_0xc8f7fc(0x2cd)](_0x11bad4)):_0xc29045=[];}while(_0x3bc5eb['cols'][_0xc8f7fc(0x675)+_0xc8f7fc(0x783)])_0x3bc5eb[_0xc8f7fc(0x3ea)][_0xc8f7fc(0x3b8)+'eChil'+'d'](_0x3bc5eb[_0xc8f7fc(0x3ea)][_0xc8f7fc(0x675)+'Child']);for(var _0x1c0043=-0x430+0xb5+0x51*0xb;_0x16a2b0[_0xc8f7fc(0x951)](_0x1c0043,_0xc29045[_0xc8f7fc(0x516)+'h']);_0x1c0043++)_0x3bc5eb[_0xc8f7fc(0x3ea)][_0xc8f7fc(0x28a)+_0xc8f7fc(0xe08)+'d'](_0xc29045[_0x1c0043]);}function _0x2c2155(_0x4f8153){var _0x3a6202=_0xe93fad;if(_0x16a2b0['tpCtm'](_0x16a2b0[_0x3a6202(0x4cd)],_0x16a2b0[_0x3a6202(0x4cd)]))_0x1bfc53['st'][_0x3a6202(0x811)+'ritte'+'n']=_0x33e0cb[_0x3a6202(0x966)+'d'](_0x3dd349),_0x4eb16a++,_0x5bfbe1['push'](_0x16a2b0['fpEvV']('0x',_0x9498a2['o'][_0x3a6202(0x5f3)+_0x3a6202(0xc36)](0x1d08+0x1*0x17d5+0x78b*-0x7)));else{_0x3bc5eb[_0x3a6202(0xd7f)]=!!_0x4f8153;var _0x42c991=_0x16a2b0['aUMBp'](_0x3d0c28);if(!_0x42c991)return;_0x42c991[_0x3a6202(0xb2d)+_0x3a6202(0xa31)]=_0x16a2b0[_0x3a6202(0x655)](_0x16a2b0['rgeJf'],_0x3bc5eb['open']?_0x3a6202(0x1eb)+'n':'');if(_0x3bc5eb[_0x3a6202(0xd91)])_0x3bc5eb[_0x3a6202(0xd91)][_0x3a6202(0x8d9)][_0x3a6202(0x232)+'ty']=_0x3bc5eb[_0x3a6202(0xd7f)]?'1':'.5';if(_0x3bc5eb[_0x3a6202(0xd7f)]){_0x16a2b0['RPIGc'](_0x322ea4,_0x3bc5eb[_0x3a6202(0x3de)]);try{var _0x107b19=window[_0x3a6202(0xcf9)+_0x3a6202(0xc21)+'t']||-0x1*-0xa13+0x2d*0x1b+-0xbb2;if(_0x107b19<-0x9b2*0x1+-0x9bd*-0x1+-0x1*-0x261)_0x16a2b0[_0x3a6202(0x326)](_0x423ed6,![]);}catch(_0x1522e4){}}}}function _0x55ec0d(){var _0x354317=_0xe93fad,_0x132fcb={'hLKDk':function(_0x41389f,_0x26aed1){return _0x41389f/_0x26aed1;},'nnXlI':function(_0x5b886b,_0x30a6cc){return _0x5b886b/_0x30a6cc;}};if(_0x354317(0x69a)==='umQbZ')_0x2383cf=_0x43acc0,_0x5da549=_0x21b7de['hits'];else{if(!_0x3bc5eb['open']||!_0x3bc5eb[_0x354317(0xb95)])return;try{for(var _0x116d8f=-0x226+-0x859*-0x4+-0xf9f*0x2;_0x116d8f<_0x3bc5eb[_0x354317(0x276)]['lengt'+'h'];_0x116d8f++){try{_0x3bc5eb['syncs'][_0x116d8f]();}catch(_0x3c3170){}}var _0x2d2018=_0xe0efbf;_0x3bc5eb[_0x354317(0x517)]['textC'+_0x354317(0x2bf)+'t']=_0x2d2018?_0x16a2b0['YZUwp'](_0x16a2b0['Yeaus'](_0x16a2b0[_0x354317(0xbf5)](_0x16a2b0['uRZRu'](_0x16a2b0[_0x354317(0xda3)](_0x16a2b0[_0x354317(0x5c5)](_0x16a2b0[_0x354317(0x5a6)](_0x16a2b0[_0x354317(0x3c9)]('v',_0x2d2018['versi'+'on']),_0x16a2b0['dXGqp']),_0x2d2018[_0x354317(0x4b5)+_0x354317(0x4b8)+'ed']),'/'),_0x2d2018['hooks'+'Total']),_0x16a2b0['hOaQL']),_0x2d2018[_0x354317(0xce7)]&&_0x2d2018['esp'][_0x354317(0xd93)+_0x354317(0xd86)+'t']||0x25*-0xff+-0x179c*0x1+0x3c77*0x1)+(_0x354317(0x275)+'heap\x20'),_0x2d2018['wasmM'+_0x354317(0xd74)]&&_0x2d2018['wasmM'+'emory'][_0x354317(0x5db)+_0x354317(0x707)]?Math[_0x354317(0x921)](_0x16a2b0[_0x354317(0x45f)](_0x2d2018['wasmM'+_0x354317(0xd74)][_0x354317(0xc05)],-0x1a0a4*0x13+0x83e7d+0x26adaf))+'MB':'-'):_0x16a2b0[_0x354317(0x2fb)];var _0x9e18ca=_0x3bc5eb['cols'][_0x354317(0x87a)+'Selec'+_0x354317(0xaf2)+'l']?_0x3bc5eb[_0x354317(0x3ea)]['query'+'Selec'+_0x354317(0xaf2)+'l'](_0x16a2b0['fSQBg']):[];for(var _0x746b58=0x1c69+0x1*-0x125b+0x2*-0x507;_0x746b58<_0x9e18ca['lengt'+'h'];_0x746b58++){var _0x584dbe=_0x9e18ca[_0x746b58][_0x354317(0x56a)+'et']['k'],_0x2d2c75='';if(_0x584dbe===_0x354317(0xcea)+'ON')_0x2d2c75=_0x2d2018?_0x2d2018[_0x354317(0xd87)+'on']:'-';else{if(_0x584dbe==='appli'+'ed\x20/\x20'+_0x354317(0x20b)+_0x354317(0xa75))_0x2d2c75=_0x2d2018?_0x2d2018['hooks'+_0x354317(0x4b8)+'ed']+_0x354317(0xcc2)+_0x2d2018['hooks'+'Regis'+_0x354317(0xa75)+'AtArm']:'-';else{if(_0x584dbe===_0x16a2b0['nlOzW'])_0x2d2c75=_0x2d2018&&_0x2d2018[_0x354317(0x223)+'emory']&&_0x2d2018[_0x354317(0x223)+_0x354317(0xd74)][_0x354317(0x5db)+'red']?_0x16a2b0[_0x354317(0xc4d)](Math[_0x354317(0x921)](_0x2d2018[_0x354317(0x223)+_0x354317(0xd74)]['bytes']/(-0x1516c6+-0x368c*0x17+0x6*0x6ff8f))+('\x20MB\x20@'+'\x20')+_0x2d2018[_0x354317(0x223)+_0x354317(0xd74)]['atMs'],'ms'):'-';else{if(_0x584dbe===_0x354317(0xc9b)+_0x354317(0x9c3)+'orkSy'+'nc')_0x2d2c75=_0x2d2018&&_0x2d2018['esp']?String(_0x2d2018['esp'][_0x354317(0xd93)+_0x354317(0xd86)+'t']):'-';else{if(_0x584dbe==='every'+_0x354317(0x760)+_0x354317(0x5cc)+'u')_0x2d2c75=_0x2d2018&&_0x2d2018['esp']?String(_0x2d2018[_0x354317(0xce7)]['enemy'+'Count']):'-';else{if(_0x16a2b0[_0x354317(0x612)](_0x584dbe,_0x16a2b0['skNzI']))_0x2d2c75=_0x2d2018&&_0x2d2018['esp']&&_0x2d2018[_0x354317(0xce7)]['camer'+'a']?_0x16a2b0['fiCJi'](_0x16a2b0[_0x354317(0x585)](_0x2d2018[_0x354317(0xce7)][_0x354317(0x843)+'a'],'\x20(')+_0x2d2018[_0x354317(0xce7)]['camer'+_0x354317(0x2b3)],')'):'-';else{if(_0x16a2b0[_0x354317(0x6ed)](_0x584dbe,'FPSco'+_0x354317(0xc4b)+'ler+0'+'x2E4'))_0x2d2c75=_0x2d2018&&_0x2d2018['local']&&_0x2d2018[_0x354317(0xd08)]['feet']?_0x2d2018[_0x354317(0xd08)][_0x354317(0x954)][_0x354317(0x357)](function(_0x240998){var _0x473df4=_0x354317;return _0x132fcb[_0x473df4(0x695)](Math['round'](_0x240998*(-0x9d*0x38+0xc70+0x164c)),0x9ae+-0xc3e*0x1+-0x6*-0x7e);})['join']('\x20\x20'):'-';else{if(_0x16a2b0['ziDuI'](_0x584dbe,_0x16a2b0[_0x354317(0x6ef)]))_0x2d2c75=_0x2d2018&&_0x2d2018[_0x354317(0xd08)]&&_0x2d2018[_0x354317(0xd08)][_0x354317(0x38b)]?_0x2d2018[_0x354317(0xd08)]['eye'][_0x354317(0x357)](function(_0x26a08d){var _0x458c8b=_0x354317;return _0x132fcb[_0x458c8b(0x5d7)](Math[_0x458c8b(0x921)](_0x26a08d*(-0xb*0x315+0x6b6*-0x4+0x3d23)),-0x175*-0xe+-0xa81*0x1+0x981*-0x1);})[_0x354317(0xa7a)]('\x20\x20'):'-';else{var _0x215820=_0x584dbe['split']('+');_0x2d2c75=_0x33e6df(_0x2d2018,_0x215820[-0x2282+0x19f*0x2+0x1f44][_0x354317(0xd12)+'Of']('Healt'+'h')===-0xca*-0x2f+0x7*0x1+-0x251d?_0x354317(0xdde)+_0x354317(0x1a9)+'pt':_0x354317(0xb1f)+'ntrol'+_0x354317(0x313),_0x16a2b0[_0x354317(0x4bb)](parseInt,_0x215820[-0x26ff+-0x1394+0xa3*0x5c],-0x1267+-0x18d2+-0x1*-0x2b49));}}}}}}}}if(_0x2d2c75!==_0x9e18ca[_0x746b58][_0x354317(0x4ff)+_0x354317(0x2bf)+'t'])_0x9e18ca[_0x746b58]['textC'+'onten'+'t']=_0x2d2c75;}}catch(_0xcb20d1){}}}function _0x2f9671(){var _0x11944c=_0xe93fad;if(_0x16a2b0[_0x11944c(0x243)]!=='wCCPY')return _0x4af949['facto'+'r'];else try{var _0x55ada8=_0x1d272f();return _0x55ada8&&_0x55ada8['feet']?_0x55ada8[_0x11944c(0x954)][0xff6+0x1a39+-0x2a2e]:null;}catch(_0x46fe75){return null;}}var _0x210c63=0x2220+-0xef*-0x14+-0x34ca+0.5,_0x26c4ef=-0x241*-0xa+0x10c9+-0x274d+0.25,_0x5bb316={},_0x59f49b=null,_0x30f2af=0xc4*-0x31+0x1*0x242f+0x6*0x39+0.8;function _0x36c8a1(_0x43587e,_0x9f42cd,_0x8d8309){var _0x357b57=_0xe93fad,_0x8f1348={'qWuIQ':function(_0x4a2b6a){return _0x4a2b6a();},'IiwIx':function(_0x5cb023,_0x31f6b8){return _0x16a2b0['uiZsg'](_0x5cb023,_0x31f6b8);},'OduRw':_0x16a2b0['vnSAA']};try{var _0x73f20b=[],_0x4dd2dc,_0x28bbc3,_0x3cb5a5=_0x9f42cd!==null&&_0x9f42cd!==undefined&&_0x16a2b0['PJhYM'](isFinite,_0x9f42cd),_0x3ebd62=0x1*0x1bb9+0xf2e+-0x15*0x20b;for(_0x4dd2dc=-0xca9+-0x3f8+-0x10a1*-0x1;_0x16a2b0[_0x357b57(0x625)](_0x4dd2dc,_0x43587e[_0x357b57(0x516)+'h']);_0x4dd2dc++){var _0x4e56ce=_0x43587e[_0x4dd2dc]['v'];if(!_0x4e56ce)continue;var _0x220767=Math['sqrt'](_0x4e56ce[0x26c8+0x236a+-0x4a32]*_0x4e56ce[-0x11f*0xf+0x6*0x49d+-0xadd]+_0x16a2b0[_0x357b57(0x7b3)](_0x4e56ce[-0x21e8+0x2*0x12d6+-0x3c2*0x1],_0x4e56ce[0x4ff+-0x4*-0x151+0x23*-0x4b]));if(_0x16a2b0['NxUWB'](_0x220767,_0x3ebd62))_0x3ebd62=_0x220767;}var _0x455adc=_0x16a2b0['LtKIn'](_0x3ebd62,-0x2564+0x19d1*-0x1+0x3f35+0.25),_0x950081=0x15f9+-0x1a2c+0x433;typeof console!==_0x16a2b0['gqrKL']&&console['log']&&!globalThis[_0x357b57(0x210)+'ogged']&&(globalThis[_0x357b57(0x210)+_0x357b57(0x98d)]=-0x1bc+0x1fc2+-0x1e05*0x1,console['log'](_0x16a2b0[_0x357b57(0xdeb)](_0x16a2b0[_0x357b57(0x4de)](_0x16a2b0[_0x357b57(0x77e)]('PP>>\x20'+'n='+_0x43587e['lengt'+'h']+_0x16a2b0[_0x357b57(0x1d4)]+_0x3ebd62[_0x357b57(0xb65)+'ed'](-0x2463+0x1*-0x677+-0x1a6*-0x1a)+(_0x357b57(0x3c5)+'r=')+_0x455adc[_0x357b57(0xb65)+'ed'](-0x263d+-0x63c+0x2c7b),_0x357b57(0x4e7)+'n='),_0x3cb5a5)+('\x20samp'+_0x357b57(0x324)),JSON['strin'+'gify'](_0x43587e['slice'](0x9f5+-0x15df+-0x5*-0x262,-0x104a+0x65f+-0xb*-0xe7)))));for(_0x4dd2dc=-0x145e+0x15*-0xd2+0x2598;_0x16a2b0[_0x357b57(0xac4)](_0x4dd2dc,_0x43587e[_0x357b57(0x516)+'h']);_0x4dd2dc++){var _0x5639fd=_0x43587e[_0x4dd2dc]['v'];if(!_0x5639fd)continue;if(_0x16a2b0[_0x357b57(0xb94)](_0x5639fd[-0x2181+-0x2*-0x793+0x25*0x7f],-0x1b62+0x1ab1+0x1*0xb1)&&_0x16a2b0[_0x357b57(0x1b0)](_0x5639fd[0x24fb+-0x1*0x2005+-0x4f5],-0x473*-0x4+0xaf6*0x1+0x332*-0x9)&&_0x5639fd[-0x1*-0x1f01+0x1ed9+-0x3dd8]===-0x29*-0x2c+-0x59d+-0x16f)continue;var _0x94c54d=Math[_0x357b57(0x94a)](_0x16a2b0[_0x357b57(0x920)](_0x5639fd[-0x1735+-0xce9+-0x1*-0x241e],_0x5639fd[0x126e+0x2*-0x1381+0x1494])+_0x16a2b0['HMPKd'](_0x5639fd[-0x1a04+-0x24ac+0x2*0x1f59],_0x5639fd[0xa12+0xb*-0x27f+0x1165*0x1]));if(_0x16a2b0['jLbDq'](_0x94c54d,_0x455adc)){_0x950081++;continue;}_0x73f20b['push'](_0x43587e[_0x4dd2dc]);}if(!_0x73f20b[_0x357b57(0x516)+'h'])return{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'discarded':_0x950081,'ambiguous':![],'reach':0x0,'held':![]};var _0x1591c8=[];for(_0x4dd2dc=-0x1*-0x2324+0xd29+-0x304d;_0x4dd2dc<_0x73f20b[_0x357b57(0x516)+'h'];_0x4dd2dc++){var _0x3812c6=_0x73f20b[_0x4dd2dc]['v'],_0x1dd6ce=-(0xb5f*-0x2+-0x10d2*-0x1+0x5ed);for(_0x28bbc3=-0x1e1b+-0x3*0x685+0x31aa;_0x28bbc3<_0x1591c8[_0x357b57(0x516)+'h'];_0x28bbc3++){var _0x1d2786=_0x1591c8[_0x28bbc3]['c'][0x1a71+0x178e+0x1*-0x31ff]['v'],_0x184490=_0x3812c6[-0x1dad+-0x1*-0x1139+0xc74]-_0x1d2786[0x9c7+-0xfe3+0x61c],_0x355cc0=_0x3812c6[0x64d*0x4+0x21e9+-0x3b1c]-_0x1d2786[0x28*-0x32+-0x26c2+0x2e93],_0x4a3be8=_0x16a2b0[_0x357b57(0x5fb)](_0x3812c6[0xa39+-0x59d+-0x49a],_0x1d2786[0x686+-0x1*-0x6e1+-0xd65]);if(_0x16a2b0[_0x357b57(0xb63)](_0x184490*_0x184490+_0x355cc0*_0x355cc0+_0x4a3be8*_0x4a3be8,_0x26c4ef)){if(_0x16a2b0[_0x357b57(0xcba)]('GyebG',_0x16a2b0[_0x357b57(0xdb1)])){if(_0x18e550&&_0x26eda0[_0x357b57(0xce0)+'ropag'+_0x357b57(0x44d)])_0xb14c68[_0x357b57(0xce0)+_0x357b57(0xcef)+_0x357b57(0x44d)]();_0x58e38d(!_0x5bc87a[_0x357b57(0xd7f)]);}else{_0x1dd6ce=_0x28bbc3;break;}}}if(_0x1dd6ce===-(-0x630+0x2c5*-0x5+-0x1e*-0xab))_0x1591c8[_0x357b57(0x8f2)]({'c':[_0x73f20b[_0x4dd2dc]]});else _0x1591c8[_0x1dd6ce]['c']['push'](_0x73f20b[_0x4dd2dc]);}var _0x32dea2=_0x1591c8[-0x1dd5+-0x1a0c+0x1*0x37e1],_0x444ab8=-Infinity;for(_0x28bbc3=0x1*-0x1a21+0x14e3*0x1+-0x1*-0x53e;_0x28bbc3<_0x1591c8[_0x357b57(0x516)+'h'];_0x28bbc3++){if(_0x16a2b0['VGQOa'](_0x16a2b0[_0x357b57(0x896)],_0x16a2b0[_0x357b57(0x896)])){var _0x3d1254=_0x1591c8[_0x28bbc3]['c'],_0x50a708=_0x3d1254[_0x357b57(0x516)+'h']*(-0x3*0x639+-0xf08+0x259b);if(_0x3cb5a5){var _0x2290be=Infinity;for(var _0x45f8aa=0x714+-0x1993*-0x1+-0x20a7;_0x45f8aa<_0x3d1254['lengt'+'h'];_0x45f8aa++){var _0x1dde10=Math[_0x357b57(0x264)](_0x16a2b0['muxrU'](_0x3d1254[_0x45f8aa]['v'][0x1*0x1064+0x16ee*-0x1+0x68b*0x1],_0x9f42cd));if(_0x1dde10<_0x2290be)_0x2290be=_0x1dde10;}_0x50a708-=_0x2290be;}else{var _0x5af30d=-0x83*-0x1c+0xce3+-0x1b37;for(var _0x577bb8=0x15f3*0x1+0x1bba+-0x31ad;_0x16a2b0[_0x357b57(0xa3f)](_0x577bb8,_0x3d1254['lengt'+'h']);_0x577bb8++){var _0x534fb2=Math[_0x357b57(0x94a)](_0x16a2b0[_0x357b57(0xe1a)](_0x16a2b0[_0x357b57(0xa42)](_0x3d1254[_0x577bb8]['v'][0x23d*-0xb+-0xc4f+0x24ee],_0x3d1254[_0x577bb8]['v'][-0x1*-0x626+-0x1677+0x1*0x1051]),_0x3d1254[_0x577bb8]['v'][0x17f*-0xd+0x147*-0x1b+-0x5*-0xaca]*_0x3d1254[_0x577bb8]['v'][0x164*0x6+-0x151a*0x1+0x331*0x4]));if(_0x534fb2>_0x5af30d)_0x5af30d=_0x534fb2;}_0x50a708+=_0x5af30d;}_0x50a708>_0x444ab8&&(_0x444ab8=_0x50a708,_0x32dea2=_0x1591c8[_0x28bbc3]);}else return![];}var _0x1d2aef=_0x32dea2['c'][0x8a*-0x39+-0x11c6+-0x3080*-0x1],_0x4702f7=-(-0x1775*0x1+0x3b*0x17+0x1229);for(_0x28bbc3=0x19f4+0x7*0x225+-0x28f7*0x1;_0x28bbc3<_0x32dea2['c']['lengt'+'h'];_0x28bbc3++){var _0x41db44=_0x32dea2['c'][_0x28bbc3]['v'],_0x23c4d2=Math[_0x357b57(0x94a)](_0x16a2b0[_0x357b57(0x920)](_0x41db44[-0x1f7*-0x5+-0x114c+0x779],_0x41db44[-0x92d+0x318+0x615])+_0x16a2b0['JCUof'](_0x41db44[-0x219e+-0x6*0x26b+-0x3d*-0xca],_0x41db44[-0x202f*-0x1+-0xc*-0x7e+0x2615*-0x1]));(_0x23c4d2>_0x4702f7||_0x16a2b0['rQwQP'](_0x23c4d2,_0x4702f7)&&_0x41db44[0x24a*-0x5+-0x1*-0x20b1+-0x153e]<_0x1d2aef['v'][0x267d+0xade*0x1+-0x315a])&&(_0x4702f7=_0x23c4d2,_0x1d2aef=_0x32dea2['c'][_0x28bbc3]);}var _0x113c33=![];if(_0x8d8309&&_0x8d8309['o']){if(_0x16a2b0[_0x357b57(0xc5a)]!==_0x16a2b0['MmuAx'])for(_0x28bbc3=-0x1*0x623+-0x4*0x966+0x2bbb;_0x16a2b0['pzdSL'](_0x28bbc3,_0x32dea2['c'][_0x357b57(0x516)+'h']);_0x28bbc3++){if(_0x357b57(0x2ce)!==_0x357b57(0x2ce)){var _0x483d39=_0x49a932();if(_0x483d39&&_0x483d39['el'])_0x483d39['el']['style'][_0x357b57(0x957)+'ay']=_0x5b61ec['on']?'':_0x357b57(0xaeb);var _0x43d1f3=_0x408af9;if(_0x43d1f3&&_0x43d1f3['cv'])_0x43d1f3['cv'][_0x357b57(0x8d9)][_0x357b57(0x957)+'ay']=_0x81e669['on']&&_0xe3b6ce[_0x357b57(0xbd7)]?'':_0x16a2b0['CRQKM'];}else{if(_0x16a2b0['TAPAk'](_0x32dea2['c'][_0x28bbc3]['o'],_0x8d8309['o']))continue;if(_0x3cb5a5){var _0x287cd5=Math['abs'](_0x32dea2['c'][_0x28bbc3]['v'][0x3*-0x283+-0x21d+0x1*0x9a7]-_0x9f42cd),_0x5586a5=Infinity;for(var _0x53b27f=-0x11ed+-0x2*0x114d+0x11*0x317;_0x53b27f<_0x32dea2['c'][_0x357b57(0x516)+'h'];_0x53b27f++){if(_0x16a2b0['TswNL'](_0x16a2b0['mjgGH'],_0x16a2b0[_0x357b57(0x615)]))try{_0x2d24fa[_0x357b57(0x276)][_0x181f76]();}catch(_0x45f445){}else{var _0xd02050=Math[_0x357b57(0x264)](_0x32dea2['c'][_0x53b27f]['v'][0xa1*-0x17+0x2f*0xb0+-0x2*0x8ec]-_0x9f42cd);if(_0x16a2b0[_0x357b57(0xb52)](_0xd02050,_0x5586a5))_0x5586a5=_0xd02050;}}if(_0x16a2b0[_0x357b57(0xa65)](_0x287cd5,_0x5586a5+(-0xb*-0x37e+0x289*-0xb+-0xb*0xf5+0.35)))break;}_0x1d2aef=_0x32dea2['c'][_0x28bbc3],_0x4702f7=Math[_0x357b57(0x94a)](_0x1d2aef['v'][0x129*-0x1f+0x10fe+0x12f9]*_0x1d2aef['v'][0x1c74+-0x1526+0x37*-0x22]+_0x16a2b0[_0x357b57(0x835)](_0x1d2aef['v'][-0xe90+-0x1336*0x2+0x34fe],_0x1d2aef['v'][0x1f36+-0x1e42*-0x1+-0x1*0x3d76])),_0x113c33=!![];break;}}else _0x16a2b0[_0x357b57(0x33d)](_0x4ab5a9,_0x6b8af1['on'],_0x508793(_0x402f1c['value'])||-0xb*0x11f+0x5*0x6dd+-0x15fb*0x1);}return{'pos':_0x1d2aef['v'],'posAt':_0x1d2aef['o'],'candidates':_0x73f20b[_0x357b57(0x516)+'h'],'cluster':_0x32dea2['c'][_0x357b57(0x516)+'h'],'groups':_0x1591c8['lengt'+'h'],'held':_0x113c33,'discarded':_0x950081,'ambiguous':_0x16a2b0['AJyyB'](_0x1591c8['lengt'+'h'],-0x3e*-0x1d+0x1b3+-0x8b8),'reach':_0x4702f7};}catch(_0x2ad25d){if(_0x16a2b0[_0x357b57(0x465)]!==_0x357b57(0x93c))return console['log'](_0x16a2b0[_0x357b57(0xdae)],_0x2ad25d[_0x357b57(0x6b5)+'ge'],String(_0x2ad25d[_0x357b57(0x877)]||'')['split']('\x0a')['slice'](0x697+0x629+-0xcc0,-0x871+0x112f*-0x1+-0xcd2*-0x2)[_0x357b57(0xa7a)]('\x20|\x20')),{'pos':null,'posAt':null,'candidates':0x0,'cluster':0x0,'groups':0x0,'held':![],'discarded':0x0,'ambiguous':![],'reach':0x0};else{var _0x856e4=(_0x357b57(0x956)+_0x357b57(0x35c)+_0x357b57(0x6a0))[_0x357b57(0x388)]('|'),_0x23590b=-0x6d+-0x22cd*-0x1+0x2c*-0xc8;while(!![]){switch(_0x856e4[_0x23590b++]){case'0':_0x1643cc['id']='sakur'+'a-sw-'+_0x357b57(0x1e0)+'b';continue;case'1':_0x796d47['body']['appen'+_0x357b57(0xe08)+'d'](_0x1643cc);continue;case'2':var _0x4c0386={'QNhzf':function(_0x16f6ca){var _0x5be680=_0x357b57;return _0x8f1348[_0x5be680(0xbc9)](_0x16f6ca);}};continue;case'3':_0x1643cc[_0x357b57(0x317)+'ck']=function(){var _0x5c6e8c=_0x357b57;_0x550f48(![]),_0x4c0386[_0x5c6e8c(0x814)](_0x59125c);};continue;case'4':var _0x1643cc=_0x4ae602[_0x357b57(0x2a2)+_0x357b57(0xc69)+'ent'](_0x357b57(0xb32));continue;case'5':_0x1643cc['style'][_0x357b57(0x82b)+'xt']=_0x8f1348[_0x357b57(0x995)](_0x8f1348[_0x357b57(0x995)](_0x8f1348['OduRw'],_0x357b57(0x2c7)+'round'+_0x357b57(0xaca)+_0x357b57(0x38c)+'2,29,'+'.9);b'+_0x357b57(0x923)+_0x357b57(0x402)+'solid'+_0x357b57(0x78f)+_0x357b57(0xade)+_0x357b57(0xbf8)+_0x357b57(0x6d8)+_0x357b57(0x95d)+_0x357b57(0x6d3))+_0x3529cc,';')+('borde'+'r-rad'+'ius:9'+_0x357b57(0x8fd)+_0x357b57(0xcbf)+_0x357b57(0x1ec)+_0x357b57(0xda5)+_0x357b57(0x5a4)+_0x357b57(0x624)+_0x357b57(0x67b)+'\x20ui-m'+'onosp'+'ace,C'+_0x357b57(0xdcd)+'as,mo'+_0x357b57(0x86a)+'ce;');continue;case'6':_0x1643cc[_0x357b57(0x4ff)+'onten'+'t']='sakur'+'a';continue;}break;}}}}function _0x1d272f(){var _0x30943f=_0xe93fad,_0xf5542b={'yjBGC':function(_0x5bf86c,_0x5b3b7a){return _0x5bf86c===_0x5b3b7a;},'oQQne':_0x16a2b0['BFtqE'],'UWHEC':_0x30943f(0xa7e)};if(_0x30943f(0x724)===_0x16a2b0[_0x30943f(0x7e9)]){var _0x32fd22=_0x27746d['FPSco'+'ntrol'+'ler'];if(!_0x32fd22||!_0x32fd22[_0x30943f(0x999)])return null;var _0x54c21b=_0x41d8ba['FPSco'+_0x30943f(0xc4b)+_0x30943f(0x313)]||[],_0xf5740f=[];for(var _0x18404b=-0xeae+0x641*-0x1+0x14ef;_0x16a2b0[_0x30943f(0xd6f)](_0x18404b,_0x54c21b[_0x30943f(0x516)+'h']);_0x18404b++){if(_0x54c21b[_0x18404b][-0x116e+0x2210+-0x10a1]!=='v3')continue;var _0x3c2620=_0x2563bb(_0x32fd22[_0x30943f(0x999)],_0x54c21b[_0x18404b][-0x32b*0x9+0xf*0x13+-0x1*-0x1b66],-0x2*-0x7e4+0x1aaa+0x33*-0xd5);if(_0x3c2620)_0xf5740f[_0x30943f(0x8f2)]({'o':'0x'+_0x54c21b[_0x18404b][-0x2515+0x1*-0x16d7+0x3bec][_0x30943f(0x5f3)+_0x30943f(0xc36)](0x1331*-0x1+-0x7*-0x38b+-0x4*0x163),'v':_0x3c2620});}var _0x2f207=_0x36c8a1(_0xf5740f,null,_0x59f49b);if(!_0x2f207[_0x30943f(0xdb8)])return null;_0x59f49b=_0x2f207[_0x30943f(0x568)]?{'o':_0x2f207[_0x30943f(0x568)]}:null;var _0x15bbef=_0x2f207[_0x30943f(0xdb8)];return{'ptr':_0x32fd22['ptr'],'feet':_0x15bbef,'posAt':_0x2f207['posAt'],'candidates':_0x2f207[_0x30943f(0x279)+'dates'],'cluster':_0x2f207['clust'+'er'],'copies':_0xf5740f[_0x30943f(0xb7d)+'r'](function(_0x3c3749){var _0x36e321=_0x30943f;if(_0xf5542b['oQQne']===_0xf5542b['oQQne'])return _0xf5542b[_0x36e321(0x975)](_0x3c3749['v'][-0x270d+-0x2335+0x4a42],_0x15bbef[0x1*0x170f+-0x89d+-0x2b*0x56])&&_0x3c3749['v'][-0x143b+0xc54+-0x4*-0x1fa]===_0x15bbef[0x1421+-0x153a+0x11a]&&_0x3c3749['v'][-0x94c+0x15cd*0x1+-0x1c9*0x7]===_0x15bbef[-0x1e7e+0x3*-0xa22+0x3ce6];else{var _0x4f757d=arguments[_0x3641bd];if(_0xf5542b[_0x36e321(0x975)](typeof _0x4f757d,'strin'+'g'))_0x195586+=_0x4f757d;else{if(_0x4f757d&&_0x4f757d[_0x36e321(0x6b5)+'ge'])_0x3973e0+=_0x4f757d['messa'+'ge'];}}})['map'](function(_0x4d6b74){var _0x3d6017=_0x30943f,_0xe0564a={'Inmil':_0x3d6017(0xcfd)};if(_0xf5542b['UWHEC']!==_0x3d6017(0xcfc))return _0x4d6b74['o'];else _0x18f058[_0x2ad55e+_0xe0564a[_0x3d6017(0xcd8)]+_0x16c881[_0x418aca]['o']['toStr'+'ing'](-0x4*0x83e+-0x1f3f+-0x4047*-0x1)]=_0x37a16d[_0x57726f]['v'];}),'eye':[_0x15bbef[0x8e*0x37+0x57*0x5d+-0x3e1d],_0x15bbef[0x1a*0xa7+-0x31*-0x43+-0x1dc8]+_0x30f2af,_0x15bbef[0x6d7+0x148e+-0x1b63]],'reach':_0x2f207[_0x30943f(0x5f6)],'pitch':_0x3b9fd4(_0x32fd22[_0x30943f(0x999)]+(-0x2249+-0x1*-0x124+0x2291),_0x16a2b0['rMBXt']),'yaw':_0x3b9fd4(_0x16a2b0['iFBBg'](_0x32fd22['ptr'],-0x2*-0x8b9+-0x20e+-0xdf4),_0x30943f(0x2e8))};}else{var _0x316584=0x441+0x2561*-0x1+-0xa*-0x350;for(var _0x481cf4=0x1157+-0x22ad+-0x8ab*-0x2;_0x16a2b0[_0x30943f(0x84a)](_0x481cf4,_0x4d1e69['lengt'+'h']);_0x481cf4++){var _0xa8e4a7=_0x234a0f[_0x30943f(0x94a)](_0x16a2b0[_0x30943f(0x650)](_0x916ceb[_0x481cf4]['v'][0x4cb*-0x7+-0x2*-0x3fd+0x1993*0x1],_0x4bb033[_0x481cf4]['v'][0x91*-0x3a+0x3de+0x1c*0x109])+_0x2b4da3[_0x481cf4]['v'][0x10*0x49+-0x2d*-0xb7+-0x77*0x4f]*_0x240aa6[_0x481cf4]['v'][0x2161+-0x4*-0x6b+0x1*-0x230b]);if(_0xa8e4a7>_0x316584)_0x316584=_0xa8e4a7;}_0x769ed8+=_0x316584;}}function _0x50270f(){var _0x2549ed=_0xe93fad,_0x2cbd91=_0x16a2b0['XXqnk'](_0x1d272f),_0x14f6d7=[],_0x138f34=_0x3736fb['Photo'+_0x2549ed(0x9c3)+_0x2549ed(0xbc0)+'nc']||{},_0x2d8087=Object['keys'](_0x138f34);for(var _0x42a0fd=-0x26fd+0x142b*0x1+0x2*0x969;_0x42a0fd<_0x2d8087[_0x2549ed(0x516)+'h']&&_0x16a2b0[_0x2549ed(0xbf9)](_0x42a0fd,-0x103b+0x19f3+-0x998);_0x42a0fd++){var _0x31c748=_0x138f34[_0x2d8087[_0x42a0fd]],_0x4e0212=[],_0x3fc139=_0x41d8ba[_0x2549ed(0xc9b)+_0x2549ed(0x9c3)+_0x2549ed(0xbc0)+'nc']||[];for(var _0x38c08a=0x1253+-0x1615+-0x1*-0x3c2;_0x38c08a<_0x3fc139['lengt'+'h'];_0x38c08a++){if(_0x16a2b0[_0x2549ed(0x863)](_0x3fc139[_0x38c08a][0x111*-0x13+0x29e*0xa+-0x5e8],'v3'))continue;var _0x2718ab=_0x16a2b0[_0x2549ed(0x296)](_0x2563bb,_0x31c748[_0x2549ed(0x999)],_0x3fc139[_0x38c08a][-0x2117+-0x120c+0x3323],-0x50*0x14+0x2071+-0x1a2e);if(_0x2718ab)_0x4e0212['push']({'o':_0x16a2b0[_0x2549ed(0x713)]('0x',_0x3fc139[_0x38c08a][0x1bc6*-0x1+0x9*-0x237+-0x1*-0x2fb5][_0x2549ed(0x5f3)+_0x2549ed(0xc36)](0x40b+0x1f02+-0x22fd*0x1)),'v':_0x2718ab});}var _0x3025a9=_0x36c8a1(_0x4e0212,_0x2cbd91?_0x2cbd91['feet'][0xab*0x1+0x3*0x9dd+-0x5*0x60d]:null,_0x5bb316[_0x2d8087[_0x42a0fd]]);_0x5bb316[_0x2d8087[_0x42a0fd]]=_0x3025a9['posAt']?{'o':_0x3025a9[_0x2549ed(0x568)]}:null;var _0x3b7b56=_0x3025a9['pos'];if(!_0x3b7b56)continue;var _0x1f2788={'ptr':_0x31c748['ptr'],'x':_0x3b7b56[-0x1*-0x13e1+0x1*-0x496+0x105*-0xf],'y':_0x3b7b56[0x1602+-0x1f3e+0x93d],'z':_0x3b7b56[-0x5*0x466+-0xfbb*0x2+0x6*0x8e9],'posAt':_0x3025a9[_0x2549ed(0x568)],'candidates':_0x3025a9[_0x2549ed(0x279)+_0x2549ed(0x394)],'cluster':_0x3025a9['clust'+'er'],'team':_0x3b9fd4(_0x31c748['ptr']+(0x3cb*0xa+0x1c3c+-0x41d2),_0x16a2b0[_0x2549ed(0xde5)]),'localFlag':_0x16a2b0['okkun'](_0x3b9fd4,_0x31c748[_0x2549ed(0x999)]+(0x7d6+-0xbfa+0x4a0),_0x2549ed(0x97b))};if(_0x2cbd91){if(_0x2549ed(0xce1)!=='TUANL')return _0x1e4d4f[_0x2549ed(0x8a4)+'s']['push']('no\x20pl'+_0x2549ed(0xaf1)+_0x2549ed(0x42f)),_0x559f40;else{var _0xc1582b=_0x3b7b56[0x27f*-0x9+-0x659+0x39a*0x8]-_0x2cbd91[_0x2549ed(0x954)][0xef5+-0xb1b*-0x3+-0x3046],_0xc0aa5e=_0x3b7b56[0xd6*0x1b+-0x1d20+0x690]-_0x2cbd91[_0x2549ed(0x954)][0x1*0x188b+0xc80+-0x2509];_0x1f2788['d']=Math[_0x2549ed(0x94a)](_0x16a2b0[_0x2549ed(0xcb4)](_0xc1582b,_0xc1582b)+_0xc0aa5e*_0xc0aa5e),_0x1f2788['beari'+'ng']=_0x16a2b0[_0x2549ed(0x3b2)](_0x16a2b0['JAter'](Math[_0x2549ed(0xa89)](_0xc1582b,_0xc0aa5e),0x1a7e+-0x1*0x59a+0x1*-0x1430),Math['PI']);}}_0x14f6d7[_0x2549ed(0x8f2)](_0x1f2788);}return{'me':_0x2cbd91,'list':_0x14f6d7};}var _0x4205ff=null;function _0x106110(){var _0xe474df=_0xe93fad;if(_0x4205ff)return _0x4205ff;try{if(_0x16a2b0[_0xe474df(0x8c2)]!==_0x16a2b0['zpNWy']){if(!document['body']||!document[_0xe474df(0xbc1)]['appen'+'dChil'+'d'])return null;var _0x314e16=document['creat'+'eElem'+'ent']('div');_0x314e16['id']='sakur'+'a-esp',_0x314e16[_0xe474df(0x8d9)]['cssTe'+'xt']=_0x16a2b0['qyyVc']('posit'+_0xe474df(0x6f7)+_0xe474df(0x2f3)+_0xe474df(0x41c)+_0xe474df(0x834)+_0xe474df(0xbd0)+'46px;'+_0xe474df(0x780)+'ex:21'+'47483'+_0xe474df(0x8d8)+_0xe474df(0xa73)+_0xe474df(0x88e)+_0xe474df(0x290)+_0xe474df(0x81a),_0x16a2b0[_0xe474df(0x48a)])+(_0xe474df(0xcbf)+_0xe474df(0x1ec)+_0xe474df(0x5a4)+'t:10p'+_0xe474df(0x944)+_0xe474df(0xd56)+_0xe474df(0x71e)+'ace,C'+'onsol'+_0xe474df(0x6dd)+_0xe474df(0x86a)+_0xe474df(0xbba)+_0xe474df(0x767)+'bda9c'+'9;')+_0x16a2b0[_0xe474df(0x8a5)],_0x314e16[_0xe474df(0xcf9)+'HTML']=_0x16a2b0[_0xe474df(0xdf3)](_0xe474df(0x6ee)+'as\x20id'+_0xe474df(0x939)+_0xe474df(0x1c1)+_0xe474df(0x699)+_0xe474df(0xb40)+_0xe474df(0x746)+'60\x22\x20h'+'eight'+_0xe474df(0xd13)+_0xe474df(0x3d4)+'le=\x22d'+_0xe474df(0x3dc)+'y:blo'+'ck\x22><'+'/canv'+_0xe474df(0x38e),_0xe474df(0x58a)+'id=\x22s'+_0xe474df(0x97a)+_0xe474df(0x602)+_0xe474df(0x71f)+_0xe474df(0x291)+_0xe474df(0xa79)+'-alig'+_0xe474df(0x5f7)+_0xe474df(0x389)+_0xe474df(0xb43)+'>');var _0x568e89={'cv':{'getContext':function(){return null;}},'el':_0x314e16};document[_0xe474df(0xbc1)][_0xe474df(0x28a)+_0xe474df(0xe08)+'d'](_0x314e16),_0x4205ff={'el':_0x314e16,'cv':_0x314e16[_0xe474df(0x87a)+'Selec'+'tor'](_0xe474df(0x691)+'ra-es'+'p-cv'),'lg':_0x314e16[_0xe474df(0x87a)+'Selec'+_0xe474df(0x9ab)](_0x16a2b0[_0xe474df(0x8d3)])};if(!_0x4205ff['cv']||!_0x4205ff['cv']['getCo'+_0xe474df(0x908)])_0x4205ff=_0x568e89;return _0x4205ff;}else return _0x11c9a2[_0xe474df(0xe1e)+'d']++,_0x3e0c30[_0xe474df(0x781)+_0xe474df(0x60e)]=_0x40e1c6[_0xe474df(0x781)+'rror']||_0x255a60(_0x378111&&_0x685428[_0xe474df(0x6b5)+'ge']||_0x50ec6d)[_0xe474df(0x616)](-0x433*0x4+-0x5*0x469+-0x33*-0xc3,-0x3*-0x847+0xcc8+-0x2525*0x1),_0xff3151;}catch(_0x4c877b){return null;}}var _0x63d6b5=null;function _0x547d41(){var _0xa18f26=_0xe93fad;if(_0x63d6b5)return _0x63d6b5;try{if(!document['body']||!document['body'][_0xa18f26(0x28a)+'dChil'+'d'])return null;var _0x10882d=document[_0xa18f26(0x2a2)+_0xa18f26(0xc69)+'ent'](_0x16a2b0[_0xa18f26(0xd43)]);return _0x10882d['id']=_0xa18f26(0x70f)+_0xa18f26(0x212)+'es',_0x10882d[_0xa18f26(0x8d9)]['cssTe'+'xt']='posit'+'ion:f'+'ixed;'+'left:'+_0xa18f26(0x1e9)+':0;z-'+'index'+':2147'+'48364'+'5;poi'+'nter-'+'event'+'s:non'+'e;',document[_0xa18f26(0xbc1)]['appen'+'dChil'+'d'](_0x10882d),_0x63d6b5={'cv':_0x10882d},_0x63d6b5;}catch(_0x3132b8){if(_0x16a2b0[_0xa18f26(0x871)]==='SOOUQ')return null;else{var _0x29c359=(_0xa18f26(0x534)+_0xa18f26(0xbcb))['split']('|'),_0x52d2be=0x125*-0x1e+0x71e*0x1+0x1b38;while(!![]){switch(_0x29c359[_0x52d2be++]){case'0':var _0x252a97={'xXSOC':function(_0x399e59,_0x4c5324){return _0x399e59/_0x4c5324;}};continue;case'1':if(_0x265f5f!==_0x190f22[_0xf255d5]['textC'+'onten'+'t'])_0x3acd02[_0x356f88]['textC'+_0xa18f26(0x2bf)+'t']=_0x265f5f;continue;case'2':var _0x265f5f='';continue;case'3':if(_0x1a6af3===_0xa18f26(0xcea)+'ON')_0x265f5f=_0x1f22dc?_0x5b9134[_0xa18f26(0xd87)+'on']:'-';else{if(_0x16a2b0['CYLYH'](_0x1a6af3,'appli'+_0xa18f26(0xa33)+_0xa18f26(0x20b)+_0xa18f26(0xa75)))_0x265f5f=_0x53b9fb?_0x26cf07[_0xa18f26(0x4b5)+_0xa18f26(0x4b8)+'ed']+_0x16a2b0['QqHcr']+_0x5da2fb[_0xa18f26(0x4b5)+'Regis'+_0xa18f26(0xa75)+_0xa18f26(0xa0b)]:'-';else{if(_0x1a6af3===_0xa18f26(0x5e3)+_0xa18f26(0x84d)+'ntiat'+_0xa18f26(0xd5d))_0x265f5f=_0x28f079&&_0x34d592['wasmM'+_0xa18f26(0xd74)]&&_0x4f058b[_0xa18f26(0x223)+_0xa18f26(0xd74)][_0xa18f26(0x5db)+'red']?_0x16a2b0[_0xa18f26(0x6fa)](_0x16a2b0['XJSZS'](_0x210f23[_0xa18f26(0x921)](_0x5761c7[_0xa18f26(0x223)+'emory'][_0xa18f26(0xc05)]/(-0x1*0x1af877+0x181583+0x9717a*0x2))+_0x16a2b0[_0xa18f26(0x33e)],_0x4b2eb1[_0xa18f26(0x223)+'emory'][_0xa18f26(0x6e9)]),'ms'):'-';else{if(_0x1a6af3===_0xa18f26(0xc9b)+_0xa18f26(0x9c3)+_0xa18f26(0xbc0)+'nc')_0x265f5f=_0x462322&&_0x584fb4['esp']?_0x23584f(_0x2569c2['esp'][_0xa18f26(0xd93)+'rCoun'+'t']):'-';else{if(_0x1a6af3===_0xa18f26(0xa9f)+_0xa18f26(0x760)+_0xa18f26(0x5cc)+'u')_0x265f5f=_0x3c5d51&&_0x11c416[_0xa18f26(0xce7)]?_0x4a31c9(_0x5d9955[_0xa18f26(0xce7)][_0xa18f26(0x506)+'Count']):'-';else{if(_0x1a6af3===_0x16a2b0['skNzI'])_0x265f5f=_0x38ac0d&&_0x386b00[_0xa18f26(0xce7)]&&_0x4acbdc[_0xa18f26(0xce7)][_0xa18f26(0x843)+'a']?_0x16a2b0[_0xa18f26(0x380)](_0x27a74e[_0xa18f26(0xce7)][_0xa18f26(0x843)+'a']+'\x20('+_0x37787c[_0xa18f26(0xce7)][_0xa18f26(0x843)+_0xa18f26(0x2b3)],')'):'-';else{if(_0x1a6af3===_0xa18f26(0xb1f)+'ntrol'+'ler+0'+_0xa18f26(0x305))_0x265f5f=_0xe87b6a&&_0x147eb8['local']&&_0x251014['local']['feet']?_0x4ecd48[_0xa18f26(0xd08)][_0xa18f26(0x954)]['map'](function(_0x414e9d){var _0x1edf0e=_0xa18f26;return _0x252a97[_0x1edf0e(0xc11)](_0x4e432b[_0x1edf0e(0x921)](_0x414e9d*(0x1ccb+0x1*0x192f+-0x3596)),-0x1b35*0x1+0xb*-0x79+0x20cc);})[_0xa18f26(0xa7a)]('\x20\x20'):'-';else{if(_0x1a6af3===_0x16a2b0['FtsDe'])_0x265f5f=_0x4ce1ba&&_0xb1c789[_0xa18f26(0xd08)]&&_0x59b7f5[_0xa18f26(0xd08)][_0xa18f26(0x38b)]?_0x1cf82e['local'][_0xa18f26(0x38b)][_0xa18f26(0x357)](function(_0x29faea){return _0x3e4f02['round'](_0x29faea*(0x203b+-0x12ab+-0xd2c))/(-0x1681+0x64d*0x3+0x1ff*0x2);})[_0xa18f26(0xa7a)]('\x20\x20'):'-';else{var _0x54b8f5=_0x1a6af3[_0xa18f26(0x388)]('+');_0x265f5f=_0x16a2b0[_0xa18f26(0x912)](_0x2a92df,_0x203e85,_0x54b8f5[0x10+0x36d*-0x3+0xa37]['index'+'Of'](_0xa18f26(0xdde)+'h')===-0x487*-0x7+-0x7*0xd3+-0x4f*0x54?'Healt'+_0xa18f26(0x1a9)+'pt':_0xa18f26(0xb1f)+'ntrol'+_0xa18f26(0x313),_0x16a2b0['PJJhC'](_0x34e38b,_0x54b8f5[0x1*0x235d+0x1a1d+-0x1*0x3d79],0x5*0x50f+-0xc*0x2af+0x6f9));}}}}}}}}continue;case'4':var _0x1a6af3=_0x180e08[_0x3ec483]['datas'+'et']['k'];continue;}break;}}}}function _0x10eb0b(_0x421a47){var _0x4eeb01=_0xe93fad;try{var _0x4005eb=Math['max'](-0x14*-0x1+0x1*0x1a5+0xa*-0x2c,window[_0x4eeb01(0xcf9)+_0x4eeb01(0x68b)]||document[_0x4eeb01(0xdc1)+_0x4eeb01(0xccd)+_0x4eeb01(0x99f)][_0x4eeb01(0x3e1)+'tWidt'+'h']||-0x7f*0x3+-0x3df*0x7+0x1c96),_0x2dce60=Math[_0x4eeb01(0x429)](-0x1e6*-0x5+-0x1dd1+0x1454,window[_0x4eeb01(0xcf9)+'Heigh'+'t']||document['docum'+'entEl'+'ement'][_0x4eeb01(0x3e1)+_0x4eeb01(0x352)+'ht']||-0xe17+0x7*-0x529+0x3236);return(_0x421a47['cv'][_0x4eeb01(0x80d)]!==_0x4005eb||_0x16a2b0['RGTUC'](_0x421a47['cv'][_0x4eeb01(0x9e0)+'t'],_0x2dce60))&&(_0x421a47['cv'][_0x4eeb01(0x80d)]=_0x4005eb,_0x421a47['cv'][_0x4eeb01(0x9e0)+'t']=_0x2dce60),{'w':_0x4005eb,'h':_0x2dce60};}catch(_0x272872){return{'w':0x0,'h':0x0};}}function _0x348a20(){var _0x78a640=_0xe93fad,_0x2b1785={'ZiZhw':function(_0x53f7b5,_0x3a4d5a){return _0x16a2b0['zSdme'](_0x53f7b5,_0x3a4d5a);},'GMbWK':function(_0x158770,_0x138389){return _0x158770===_0x138389;}};if(_0x78a640(0x666)==='PqCuH')return _0x37282d(_0x2af0a2);else{var _0xc90cec={'rows':[],'worstBearing':null,'worstDelta':0x0,'canvas':null};try{_0xc90cec[_0x78a640(0x539)+'s']={'w':_0x63d6b5&&_0x63d6b5['cv']?_0x63d6b5['cv']['width']:0x1*-0x2396+0x4*0x971+0x6*-0x5d,'h':_0x63d6b5&&_0x63d6b5['cv']?_0x63d6b5['cv'][_0x78a640(0x9e0)+'t']:0x14e6+-0x8f6+-0xbf0,'innerW':window[_0x78a640(0xcf9)+_0x78a640(0x68b)],'innerH':window['inner'+'Heigh'+'t'],'dpr':window['devic'+_0x78a640(0xa9b)+_0x78a640(0x8cb)+'o']||-0x1d*0x1d+0x1f03+-0x1bb9};}catch(_0x34c708){}var _0x3c02c0=_0x50270f();if(!_0x3c02c0||!_0x3c02c0['me'])return _0xc90cec;var _0x3677ee=_0xc90cec[_0x78a640(0x539)+'s']['w']||-0x7f6+-0x11db+-0x43f*-0x7,_0x5cf2a4=_0xc90cec[_0x78a640(0x539)+'s']['h']||-0x5*-0x1+-0xb*0xf1+-0x2*-0x71f,_0xc06a09=_0x3677ee/_0x5cf2a4,_0x1ab5de=Math['tan'](_0x40148d['fov']*Math['PI']/(0x2148+-0x100d+0x1087*-0x1)/(-0x10*0x49+-0x1d2b+-0x3*-0xb3f)),_0x18be00=_0x3d0c4b(),_0x35ab8f=_0x18be00[_0x78a640(0xcf6)];for(var _0x5efc44=0xbb0+-0x1b11+0xf61;_0x5efc44<_0x3c02c0[_0x78a640(0xd2a)][_0x78a640(0x516)+'h']&&_0x5efc44<0x13e5+0x100*-0x10+-0x3dd*0x1;_0x5efc44++){var _0x173cf4=_0x3c02c0['list'][_0x5efc44];if(typeof _0x173cf4['d']!==_0x16a2b0[_0x78a640(0xb00)]||_0x173cf4['d']<-0xb47+-0xd1*-0x2c+-0x18a5+0.5)continue;var _0x1491ba=_0x38e575(_0x3c02c0['me'][_0x78a640(0x38b)],[_0x173cf4['x'],_0x173cf4['y'],_0x173cf4['z']],_0x3677ee,_0x5cf2a4);if(!_0x1491ba)continue;var _0x29ddd9=_0x16a2b0[_0x78a640(0x987)](_0x1491ba['x']/_0x3677ee,0x45d*-0x2+-0x262f+0x2ee9+0.5)*(0x30f+-0x1005*-0x1+-0x2*0x989),_0x5b8cd0=null;if(_0x35ab8f&&_0x18be00[_0x78a640(0xdb8)]){var _0x1ee219=_0x16a2b0['xpbXU']['split']('|'),_0x100e8b=0x2*-0x1003+0xbb3+0x1453;while(!![]){switch(_0x1ee219[_0x100e8b++]){case'0':var _0x12ac92=_0x16a2b0[_0x78a640(0x701)](_0x16a2b0['NWBeG'](_0x16a2b0[_0x78a640(0xbb7)](_0x59d262,_0xfc0726[-0x887*-0x2+-0x58+-0x10b6]),_0x54588b*_0xfc0726[0x6*0x379+-0xc5c+-0x879]),_0x3d996e*_0xfc0726[-0x1f00+0xc*0x2f1+-0x44a]);continue;case'1':if(_0x16a2b0[_0x78a640(0x653)](_0x12ac92,-0x8f4*0x1+-0x17fa+0x20ee+0.5))_0x5b8cd0=_0x316f5e/_0x12ac92/(_0x1ab5de*_0xc06a09);continue;case'2':var _0xfc0726=_0x35ab8f[_0x78a640(0x5a2)],_0x1730a0=_0x35ab8f[_0x78a640(0x41c)];continue;case'3':var _0x316f5e=_0x59d262*_0x1730a0[-0xec8+-0x1*0xfd2+0x2*0xf4d]+_0x54588b*_0x1730a0[-0xa*0x361+0x2573+-0x3a8]+_0x16a2b0[_0x78a640(0x733)](_0x3d996e,_0x1730a0[-0x204+0x1*-0x3d+-0x243*-0x1]);continue;case'4':var _0x59d262=_0x16a2b0['zblCx'](_0x173cf4['x'],_0x18be00[_0x78a640(0xdb8)][-0x171*-0x11+-0x67*0x4+-0x16e5]),_0x54588b=_0x16a2b0[_0x78a640(0x8a7)](_0x173cf4['y'],_0x18be00[_0x78a640(0xdb8)][-0x8df+0x14c2+-0xbe2]),_0x3d996e=_0x173cf4['z']-_0x18be00[_0x78a640(0xdb8)][-0x17*0x5+0xc82+-0xc0d*0x1];continue;}break;}}else _0x16a2b0[_0x78a640(0x44a)](typeof _0x173cf4['beari'+'ng'],'numbe'+'r')&&(_0x5b8cd0=_0x16a2b0['yEmfO'](Math[_0x78a640(0xb88)](_0x16a2b0[_0x78a640(0xd30)](_0x173cf4['beari'+'ng'],Math['PI'])/(0x1c90+-0xde1+-0xdfb)),_0x1ab5de*_0xc06a09));if(_0x5b8cd0===null)continue;if(Math[_0x78a640(0x264)](_0x5b8cd0)>-0x1f7e+0x9d*0x2f+0x2ab+0.8)continue;var _0x50691f=_0x16a2b0[_0x78a640(0xbb9)](_0x29ddd9,_0x5b8cd0);_0xc90cec[_0x78a640(0x5ed)][_0x78a640(0x8f2)]({'d':Math[_0x78a640(0x921)](_0x173cf4['d']),'bearing':Math['round'](_0x173cf4[_0x78a640(0x665)+'ng']),'at':Math[_0x78a640(0x921)](_0x29ddd9*(-0x1675+0x994+0x10c9*0x1))/(-0x23a7+0x6c5+0x20ca),'want':_0x16a2b0[_0x78a640(0xdb4)](Math[_0x78a640(0x921)](_0x5b8cd0*(-0x111+0x527+-0x17*0x2)),-0x820+0x2*-0xdbf+0x2786),'off':Math['round'](_0x16a2b0['IOTHj'](_0x50691f,-0x1a4a+0x2047+-0x215))/(-0xc8d+0x1d77*-0x1+0x2*0x16f6)}),Math[_0x78a640(0x264)](_0x50691f)>Math[_0x78a640(0x264)](_0xc90cec['worst'+_0x78a640(0x7d7)])&&(_0xc90cec[_0x78a640(0xaba)+'Delta']=Math[_0x78a640(0x921)](_0x50691f*(-0x1950+-0x1279+0x2fb1))/(-0x25ea+0x26+0x1*0x29ac),_0xc90cec['worst'+_0x78a640(0xbf3)+'ng']=Math[_0x78a640(0x921)](_0x173cf4[_0x78a640(0x665)+'ng']));}if(_0x18be00['pos']&&_0x18be00[_0x78a640(0xcf6)]&&_0x18be00[_0x78a640(0x6fb)]){var _0x196a18=_0x18be00[_0x78a640(0xcf6)]['fwd'];if(Math[_0x78a640(0x264)](_0x196a18[-0xc0f*-0x1+0x28e*0xf+-0x3260])<0x268a+-0x2475+0x29*-0xd+0.01){var _0x25c306=Math[_0x78a640(0xb88)](_0x16a2b0['sVfyJ'](_0x18be00[_0x78a640(0x6fb)]*Math['PI'],-0x1eb8+0x2362+-0x1a*0x27)/(0x125f*-0x2+-0x1d7*-0x11+0x579)),_0x3fe8b3=0x25*0xbf+0x1065+-0x1*0x2bf6,_0x3d5075=0x2*-0x4f0+-0x234d+0x2d2e*0x1,_0x2efca8=[_0x18be00[_0x78a640(0xdb8)][0xf91+-0x1*-0x1240+0x1*-0x21d1]+_0x16a2b0['AbCon'](_0x196a18[-0x464+-0xb3*0xa+0x5b1*0x2],_0x3fe8b3),_0x18be00['pos'][0x1c67+0x8e7+-0x425*0x9]+_0x196a18[0x1d4c+0x1*-0x1614+-0x737]*_0x3fe8b3+_0x3d5075,_0x16a2b0[_0x78a640(0xbb3)](_0x18be00['pos'][-0x14ed+0x240e+-0xf1f*0x1],_0x196a18[-0x171f+-0x1915+-0xbb*-0x42]*_0x3fe8b3)],_0x2c4a89=_0x16a2b0[_0x78a640(0x709)](_0x38e575,_0x18be00[_0x78a640(0xdb8)],_0x2efca8,_0x3677ee,_0xc90cec['canva'+'s']['h']);if(_0x2c4a89){if(_0x78a640(0xc2e)===_0x16a2b0['KazQA']){if(_0x14c021===_0x10f654||_0x2b1785[_0x78a640(0x1db)](_0x1df4df,null))return _0xd6b3c8;if(typeof _0x3166ca['val']==='funct'+'ion')try{return _0x5380d4[_0x78a640(0x9ee)]();}catch(_0x26916f){}if(_0x2b1785['GMbWK'](typeof _0x6c6540,'objec'+'t'))return _0x1cffa2;return _0x432cb6;}else{var _0x4762de=_0x16a2b0[_0x78a640(0x54b)](_0x16a2b0['lPqMT'](0x1b37*-0x1+-0x1770+0x32a7+0.5,_0x2c4a89['y']/_0xc90cec['canva'+'s']['h']),-0x18b8+-0xffe+0x28b8),_0x206a99=_0x16a2b0['IERXt'](_0x3d5075,_0x3fe8b3)/_0x25c306;_0xc90cec['verti'+_0x78a640(0x4fe)]={'got':Math[_0x78a640(0x921)](_0x16a2b0[_0x78a640(0x620)](_0x4762de,0x2*-0xe5+-0x446*0x7+0x239c))/(-0x238d+-0x1df*0x5+0x30d0),'want':Math['round'](_0x206a99*(0x9f*0x3d+0x3d3*-0x2+-0x9*0x2ed))/(0x4c6+0x9*0x2c8+0x55*-0x4e),'off':Math[_0x78a640(0x921)](_0x16a2b0[_0x78a640(0xc5b)](_0x4762de,_0x206a99)*(-0x1*0x21cb+-0x2133+-0x2*-0x2373))/(-0x20d7+0x42d+-0x2*-0x1049)};}}}}return _0xc90cec;}}var _0x2f41c3=0x22c0*0x1+-0xfd5+0x64e*-0x3+0.75,_0xfa6c37=-0x1ccf+-0x6b*0x29+0x16f9*0x2+0.25,_0x5d4d4f=-0x2051+0x17b9*0x1+0x16*0x64+0.42;function _0x26a6c1(_0x14bb6c){var _0x139759=_0xe93fad,_0x282d4c={'HyCMF':function(_0x3eabfe,_0x435fb9){return _0x16a2b0['keVKU'](_0x3eabfe,_0x435fb9);}},_0x2e905a=_0x63d6b5;if(!_0x2e905a)return;var _0x4a722a=_0x2e905a['cv'][_0x139759(0x9ea)+'ntext']&&_0x2e905a['cv']['getCo'+'ntext']('2d');if(!_0x4a722a)return;var _0x104c6a=_0x10eb0b(_0x2e905a);_0x4a722a[_0x139759(0x41a)+_0x139759(0x6f8)](0x25dc*-0x1+-0x1fc3+-0x27*-0x1c9,-0x91b+-0x45*0x47+-0x1c3e*-0x1,_0x104c6a['w'],_0x104c6a['h']);if(!_0x159712[_0x139759(0xbd7)]||!_0x14bb6c||!_0x14bb6c['me'])return;var _0x19bb65=_0x14bb6c['me'],_0x42da2e=null,_0x161782=_0x3736fb['Photo'+'nNetw'+_0x139759(0xbc0)+'nc']||{},_0x13ce4f=Object['keys'](_0x161782);for(var _0x22bb95=-0x29*0xdb+0xa12+0x1901;_0x16a2b0[_0x139759(0xb48)](_0x22bb95,_0x13ce4f[_0x139759(0x516)+'h']);_0x22bb95++){var _0x4c881b=_0x2563bb(_0x161782[_0x13ce4f[_0x22bb95]]['ptr'],-0x21d*-0xd+-0x19c0+-0x185,-0x1*0x1eab+-0x17b6+0x3664);if(_0x4c881b&&_0x16a2b0['PlDEp'](_0x4c881b[-0xc0f*-0x3+0x73*0x11+-0x2bd0],-0x3f5+-0xc13+-0xc*-0x156)&&_0x4c881b[0xbdf+0x103*-0x1c+0x2b*0x62]===0x1103+-0x1*0x2404+-0x3cd*-0x5&&_0x4c881b[0x4*0x4cc+0x191c+-0x1625*0x2]===-0x1*0x1f34+-0x1a0b*-0x1+0x529){_0x42da2e=_0x3b9fd4(_0x161782[_0x13ce4f[_0x22bb95]][_0x139759(0x999)]+(0xcfe+-0xf*-0x289+-0x32ad),_0x16a2b0[_0x139759(0xde5)]);break;}}for(var _0x9b087a=0x23eb+-0x1*-0x2611+-0x766*0xa;_0x16a2b0['buusC'](_0x9b087a,_0x14bb6c[_0x139759(0xd2a)]['lengt'+'h']);_0x9b087a++){if(_0x139759(0x7c8)!=='SRVSv'){var _0x33f9d8=_0x14bb6c['list'][_0x9b087a],_0x1ae42c=_0x42da2e!==null&&_0x16a2b0['cagcw'](_0x33f9d8[_0x139759(0xb72)],_0x42da2e),_0x38e45f=_0x16a2b0[_0x139759(0x709)](_0x38e575,_0x19bb65['eye'],[_0x33f9d8['x'],_0x16a2b0['FtKms'](_0x33f9d8['y'],_0xfa6c37),_0x33f9d8['z']],_0x104c6a['w'],_0x104c6a['h']),_0x4d9bc3=_0x16a2b0['JMUDM'](_0x38e575,_0x19bb65['eye'],[_0x33f9d8['x'],_0x33f9d8['y']+_0x2f41c3,_0x33f9d8['z']],_0x104c6a['w'],_0x104c6a['h']);if(!_0x38e45f||!_0x4d9bc3)continue;var _0x1acc29=Math[_0x139759(0x264)](_0x16a2b0[_0x139759(0xc5b)](_0x4d9bc3['y'],_0x38e45f['y']));if(!_0x16a2b0['Getvz'](_0x1acc29,0x1*-0x697+0x1*-0x139a+0x5*0x53d))continue;var _0x552f2f=Math[_0x139759(0x429)](-0x1345+-0x1970+-0x2cb7*-0x1,Math[_0x139759(0xe2c)](-0x679+0x1749+-0x1076,_0x1acc29*_0x5d4d4f));if(_0x1acc29>0x1*-0x57+-0x7*0x288+0x13b3)continue;var _0x4b116f=_0x16a2b0['POnnX'](_0x38e45f['x']+_0x4d9bc3['x'],-0x1ecb+0x1f21+-0x54),_0x3f8842=_0x16a2b0[_0x139759(0x8e7)](_0x38e45f['y']+_0x4d9bc3['y'],-0x148*0x19+-0x1607+0x3611);_0x4a722a['strok'+_0x139759(0x3c3)+'e']=_0x1ae42c?'rgba('+_0x139759(0x2d5)+_0x139759(0xa6c)+',.9)':_0x16a2b0[_0x139759(0x9b5)],_0x4a722a[_0x139759(0xcd1)+_0x139759(0x415)]=_0x1ae42c?-0x79f+-0xf4f+0x67*0x39:-0x356+0x96*0x2+0x22c,_0x4a722a['strok'+'eRect'](_0x4b116f-_0x552f2f/(-0x211b+-0x1401+-0x1a8f*-0x2),_0x16a2b0[_0x139759(0xd09)](_0x3f8842,_0x16a2b0['toExr'](_0x1acc29,0x177c+-0x2288+0x5*0x236)),_0x552f2f,_0x1acc29);if(!_0x1ae42c){if(_0x139759(0x734)!==_0x16a2b0[_0x139759(0xaad)])_0x4a722a[_0x139759(0xda7)+_0x139759(0xc03)]=_0x139759(0x8f5)+'255,1'+_0x139759(0xa7c)+_0x139759(0x571)+')',_0x4a722a[_0x139759(0x5cf)]=_0x139759(0x31a)+'ui-mo'+'nospa'+_0x139759(0xdbb)+_0x139759(0xa45)+'s,mon'+'ospac'+'e',_0x4a722a['fillT'+_0x139759(0xd67)](Math['round'](_0x33f9d8['d']||0xd*-0x139+-0x5*-0x4c3+0x3f5*-0x2)+'m',_0x4b116f-_0x16a2b0['QFVGo'](_0x552f2f,-0xaf2+0x2*0x11a+0x8c0),_0x16a2b0[_0x139759(0xc9a)](_0x3f8842,_0x16a2b0[_0x139759(0x4f4)](_0x1acc29,0x7f*-0x15+-0x1a22+-0x1*-0x248f))-(-0xa0d+0x3*-0x763+0x71*0x49));else{_0x24feea[_0x139759(0x8a4)]='Runti'+'me.cr'+'eateP'+_0x139759(0x6cb)+_0x139759(0xad2)+'ailab'+'le';return;}}}else{var _0x1040e3=_0x279e6a[_0x139759(0x429)](-0x1e2a+-0x3*-0x109+0x1b10*0x1,_0x2ac41a['inner'+_0x139759(0x68b)]||_0x1c97c7[_0x139759(0xdc1)+_0x139759(0xccd)+'ement'][_0x139759(0x3e1)+_0x139759(0xb76)+'h']||0x21ee+0x233*-0x1+-0x1*0x1fbb),_0x58f30e=_0x365eed['max'](0x238b+0x1*0x12fb+-0x3685,_0x4a1bb0[_0x139759(0xcf9)+'Heigh'+'t']||_0x4c6a49['docum'+_0x139759(0xccd)+_0x139759(0x99f)][_0x139759(0x3e1)+'tHeig'+'ht']||0x43*0x6+-0x4f*-0x1+-0x1*0x1e1);return(_0x4cd0ee['cv'][_0x139759(0x80d)]!==_0x1040e3||_0x282d4c[_0x139759(0xca3)](_0x512512['cv']['heigh'+'t'],_0x58f30e))&&(_0x49b195['cv']['width']=_0x1040e3,_0x5b9fb3['cv']['heigh'+'t']=_0x58f30e),{'w':_0x1040e3,'h':_0x58f30e};}}}function _0x527a11(){var _0x37ea73=_0xe93fad,_0x3cad92={'dYsOX':function(_0x111c3a,_0x2f61d6){return _0x16a2b0['KsZUh'](_0x111c3a,_0x2f61d6);}},_0x4de434=_0x106110();if(!_0x4de434||!_0x4de434['cv'])return;try{if(_0x16a2b0[_0x37ea73(0x381)]==='kqPUx')_0x16a2b0['zyGQI'](_0x3d90d1[_0x37ea73(0x445)+'em'](_0x5cf834),null)&&(_0x43e3e4[_0x37ea73(0x3b8)+'eItem'](_0x5a9746),_0x1cd6e6=!![]);else{var _0x5651ab=_0x4de434['cv'][_0x37ea73(0x9ea)+_0x37ea73(0x908)]&&_0x4de434['cv'][_0x37ea73(0x9ea)+'ntext']('2d');if(!_0x5651ab)return;var _0x12e99d=_0x4de434['cv']['width'],_0x5cce7c=_0x16a2b0['JMtac'](_0x12e99d,-0x308*-0x7+-0x1*0x23b4+-0xa*-0x173),_0x4b360a=_0x50270f(),_0x536cbc=_0x4b360a['me'];_0x5651ab[_0x37ea73(0x41a)+'Rect'](-0x265*0x10+-0x901+0x1*0x2f51,0x4cf*0x7+0x325+0x24ce*-0x1,_0x12e99d,_0x12e99d),_0x5651ab[_0x37ea73(0x1c4)+'eStyl'+'e']='rgba('+_0x37ea73(0x6b2)+'43,17'+_0x37ea73(0xd34)+')',_0x5651ab['lineW'+'idth']=0x47*-0x40+-0x2168+-0x3329*-0x1;for(var _0x23b3a0=0x1279*0x2+-0x1*-0x582+-0x2a73;_0x23b3a0<=-0xb3*-0x10+-0xf*0x3b+0x13*-0x68;_0x23b3a0++){if(_0x16a2b0[_0x37ea73(0x34b)](_0x16a2b0[_0x37ea73(0x997)],_0x16a2b0['qZYcV']))_0x5651ab[_0x37ea73(0xe4a)+_0x37ea73(0x35d)](),_0x5651ab[_0x37ea73(0x658)](_0x5cce7c,_0x5cce7c,_0x16a2b0[_0x37ea73(0xa04)](_0x5cce7c-(-0x10e1*-0x1+-0x1f24+0x11*0xd7),_0x23b3a0)/(0x160d+0x233b+-0x3945),0x2*-0xe87+-0x60f+0x231d,_0x16a2b0['xzJJO'](Math['PI'],-0xbf*-0xb+-0x10aa+0x877)),_0x5651ab[_0x37ea73(0x1c4)+'e']();else return _0x2144fd[_0x37ea73(0x921)](_0x3f96b0*(-0x200e+0x35*0x5d+0xb*0x133))/(-0x14e1*0x1+0x1d52+-0x80d);}_0x5651ab['begin'+'Path'](),_0x5651ab['moveT'+'o'](0x1fc7+0x9*0x25e+-0x8f*0x5f,_0x5cce7c),_0x5651ab[_0x37ea73(0xb0e)+'o'](_0x12e99d-(-0xd61+-0x2269+0x2fce),_0x5cce7c),_0x5651ab[_0x37ea73(0x4d7)+'o'](_0x5cce7c,-0x1e70*-0x1+0x6d5+-0x2541),_0x5651ab[_0x37ea73(0xb0e)+'o'](_0x5cce7c,_0x12e99d-(-0x2512+0x13*-0x105+0x61*0x95)),_0x5651ab[_0x37ea73(0x1c4)+'e']();if(!_0x536cbc){if(_0x4de434['lg'])_0x4de434['lg'][_0x37ea73(0x4ff)+'onten'+'t']='';return;}var _0x5eb111=_0x16a2b0[_0x37ea73(0x4f8)](_0x5cce7c-(0x1*0xe59+0x10fd+-0x1f50),_0x159712[_0x37ea73(0x8e2)]),_0x3faea5=null,_0x1b3e6a=_0x3736fb[_0x37ea73(0xc9b)+_0x37ea73(0x9c3)+_0x37ea73(0xbc0)+'nc']||{},_0x1ce427=Object['keys'](_0x1b3e6a);for(var _0x5b812a=0x1174+0x2c2*0x2+0xc4*-0x1e;_0x5b812a<_0x1ce427['lengt'+'h'];_0x5b812a++){if(_0x16a2b0[_0x37ea73(0x26f)]!==_0x37ea73(0xa26))try{if(_0x5cc01d[_0x1e3233]['conte'+_0x37ea73(0xd50)+_0x37ea73(0x63c)])_0x142ed8[_0x1d73e4][_0x37ea73(0x3d2)+'ntWin'+_0x37ea73(0x63c)][_0x37ea73(0xc60)+_0x37ea73(0xbbc)+'e'](_0x469efb,'*');}catch(_0x52d5b8){}else{var _0x49f053=_0x2563bb(_0x1b3e6a[_0x1ce427[_0x5b812a]]['ptr'],-0x23c2+-0x21*-0xcd+0x989*0x1,-0x2*0x985+-0x2*0x10a6+-0x1*-0x3459);if(_0x49f053&&_0x49f053[-0x12d7*0x2+-0x1*0x1ada+0x4088]===0x1d1*0xf+-0x262*0x4+-0x11b7&&_0x49f053[0x223f+-0x25bc+0x37e]===0x20cb+0xc28*-0x3+-0x3ad*-0x1&&_0x49f053[-0x2*-0xcbe+0x1d3+-0x1b4d]===0x1e49+-0x1d97+-0xb2*0x1){_0x3faea5=_0x16a2b0['yObMK'](_0x3b9fd4,_0x1b3e6a[_0x1ce427[_0x5b812a]][_0x37ea73(0x999)]+(0x78*-0x35+0x15a*0x2+0x1*0x167c),_0x16a2b0['NSaqT']);break;}}}var _0x2a41c5=0x199*0xb+0x2378+-0x350b;for(var _0x2e1053=-0x6*0x27d+-0x4*-0x3b7+0x12;_0x16a2b0[_0x37ea73(0xa3f)](_0x2e1053,_0x4b360a[_0x37ea73(0xd2a)][_0x37ea73(0x516)+'h']);_0x2e1053++){if(_0x16a2b0[_0x37ea73(0x95e)]===_0x16a2b0[_0x37ea73(0x314)]){var _0x3b8477=_0x314bfb['query'+_0x37ea73(0x97e)+'torAl'+'l'](_0x37ea73(0x7f4)+'e');for(var _0x302087=0x1015+-0x2587+0x16e*0xf;_0x3cad92['dYsOX'](_0x302087,_0x3b8477[_0x37ea73(0x516)+'h']);_0x302087++){try{if(_0x3b8477[_0x302087][_0x37ea73(0x3d2)+_0x37ea73(0xd50)+_0x37ea73(0x63c)])_0x3b8477[_0x302087]['conte'+'ntWin'+'dow']['postM'+_0x37ea73(0xbbc)+'e'](_0x33c48c,'*');}catch(_0x30dfda){}}}else{var _0x49e0eb=_0x4b360a[_0x37ea73(0xd2a)][_0x2e1053],_0x3d632a=_0x16a2b0[_0x37ea73(0xc5b)](_0x49e0eb['x'],_0x536cbc[_0x37ea73(0x954)][0x31+-0xb17+0x1f*0x5a])*_0x5eb111,_0x2c58c8=_0x16a2b0['muxrU'](_0x49e0eb['z'],_0x536cbc[_0x37ea73(0x954)][-0x8*0x105+0x2647+-0x1e1d])*_0x5eb111,_0x2de0d5=Math[_0x37ea73(0x94a)](_0x16a2b0[_0x37ea73(0x92a)](_0x16a2b0['JAter'](_0x3d632a,_0x3d632a),_0x2c58c8*_0x2c58c8)),_0x185d33=_0x5cce7c,_0x1310e4=_0x5cce7c;if(_0x2de0d5>_0x5cce7c-(-0xdee+0x1a2c+-0x11*0xb8)){if(_0x16a2b0[_0x37ea73(0xdb7)](_0x37ea73(0x782),_0x37ea73(0x782)))_0x185d33=_0x5cce7c+_0x3d632a/_0x2de0d5*(_0x5cce7c-(0x24de+-0x1d*0x4f+-0x25*0xc1)),_0x1310e4=_0x16a2b0[_0x37ea73(0x5d1)](_0x5cce7c,_0x16a2b0[_0x37ea73(0x66b)](_0x2c58c8,_0x2de0d5)*(_0x5cce7c-(-0x95*-0x2f+-0xe98+0xcbd*-0x1)));else{var _0x3de570=_0x15fb75[_0x37ea73(0x445)+'em'](_0x11001f);if(_0x3de570)_0xb2f9ba['fov']=_0x35b462[_0x37ea73(0xe2c)](-0x25ef*0x1+-0xda8+0x3423,_0x532360[_0x37ea73(0x429)](-0x9f3+0x1859+0x1c9*-0x8,_0x16a2b0['iFJIT'](_0x193fd0,_0x3de570)||0x477*0x7+0x5*0x63a+-0x1*0x3e09));}}else _0x185d33=_0x5cce7c+_0x3d632a,_0x1310e4=_0x16a2b0[_0x37ea73(0xbf5)](_0x5cce7c,_0x2c58c8);var _0x177d89=_0x16a2b0[_0x37ea73(0x286)](_0x3faea5,null)&&_0x16a2b0[_0x37ea73(0x82c)](_0x49e0eb[_0x37ea73(0xb72)],_0x3faea5);_0x5651ab[_0x37ea73(0xda7)+'tyle']=_0x177d89?_0x16a2b0[_0x37ea73(0x237)]:_0x37ea73(0x42e)+'74',_0x5651ab[_0x37ea73(0xe4a)+_0x37ea73(0x35d)](),_0x5651ab[_0x37ea73(0x658)](_0x185d33,_0x1310e4,_0x177d89?0x20*0x8e+0x12f8+-0x24b6:0x8c*0x23+0x1b1*-0x11+0x16*0x70+0.20000000000000018,-0x151c+0x2*0x272+0x1038,_0x16a2b0[_0x37ea73(0x6c2)](Math['PI'],0x2f*-0x91+-0x463*-0x5+0x4b2*0x1)),_0x5651ab[_0x37ea73(0xb15)](),_0x2a41c5++;}}_0x5651ab[_0x37ea73(0xda7)+'tyle']=_0x37ea73(0x39f)+'a8',_0x5651ab[_0x37ea73(0xe4a)+_0x37ea73(0x35d)](),_0x5651ab['arc'](_0x5cce7c,_0x5cce7c,0xd*-0x29b+0xb1a*0x2+-0x1a*-0x73,-0x4a1+-0x12f+0x8*0xba,_0x16a2b0['sTuhQ'](Math['PI'],0x3*0x4d5+0x1eb8+-0x2d35*0x1)),_0x5651ab['fill'](),_0x4de434['lg']&&(_0x4de434['lg']['textC'+_0x37ea73(0x2bf)+'t']=_0x16a2b0[_0x37ea73(0xbcf)](_0x37ea73(0x635)+_0x2a41c5,_0x16a2b0['LZXqZ'])+Math['round'](_0x159712[_0x37ea73(0x8e2)])+'m'+(_0x159712['boxes']?_0x16a2b0['EbzEv']+Math['round'](_0x40148d['fov'])+'°':'')+(_0x3faea5!==null?_0x37ea73(0x96a)+'am'+_0x3faea5:''));}}catch(_0x437f10){}}function _0x3d07d3(){var _0x42ff33=_0xe93fad,_0x5c8415=_0x3736fb[_0x42ff33(0xc9b)+'nNetw'+_0x42ff33(0xbc0)+'nc']||{};if(!Object[_0x42ff33(0x227)](_0x5c8415)['lengt'+'h'])return![];return!!_0x16a2b0['aqpbl'](_0x1d272f);}function _0x423ed6(_0x2984ce){var _0x1b1145=_0xe93fad;try{var _0x3c33bf=_0x4205ff;if(_0x3c33bf&&_0x3c33bf['el'])_0x3c33bf['el'][_0x1b1145(0x8d9)]['displ'+'ay']=_0x2984ce?'':_0x1b1145(0xaeb);var _0x5c7579=_0x63d6b5;if(_0x5c7579&&_0x5c7579['cv'])_0x5c7579['cv'][_0x1b1145(0x8d9)][_0x1b1145(0x957)+'ay']=_0x2984ce?'':_0x1b1145(0xaeb);}catch(_0x2fa4bd){}}var _0x1beaa6=-0x9*-0x62+0x156c*0x1+0x2*-0xc6f,_0x27641a=0x2308+0x12d+-0x2435;function _0x2a2fd0(_0x29809f){var _0x48a9de=_0xe93fad;'cOSHa'!==_0x16a2b0[_0x48a9de(0xc58)]?_0x4f7fe6[_0x48a9de(0x7c6)+'refix']({'typeName':_0x48a9de(0x4c3)+_0x48a9de(0xa5b),'methodName':_0x375589[_0x48a9de(0x528)],'params':_0x4ebe0d[_0x48a9de(0x206)+_0x48a9de(0x423)],'returnType':_0x437bc4},_0x4a9682(_0x48a9de(0x409),_0x4ea37e[_0x48a9de(0x528)])):_0x16a2b0[_0x48a9de(0x918)](typeof requestAnimationFrame,'funct'+_0x48a9de(0xd10))?_0x1beaa6=_0x16a2b0[_0x48a9de(0x6a6)](requestAnimationFrame,_0x38dc2c):_0x27641a=setTimeout(_0x38dc2c,_0x29809f||0x13c*-0x9+0xec*0xe+-0x1*0x19a);}function _0x38dc2c(){var _0x5d845f=_0xe93fad,_0x37621a={'HoJPL':_0x5d845f(0xaeb)};_0x1beaa6=-0x1dc0+-0x2*0x74a+0x2c54;if(!_0x159712['on']||!_0x16a2b0['CpULw'](_0x3d07d3)){if(_0x5d845f(0xcfe)===_0x16a2b0['aetvP'])return _0xed872f[0x7*0x517+0xca8*0x3+0x53*-0xe3]=_0x325f3c,_0xc8091f[0x12ad+0x6ca*-0x4+0x87b];else{_0x16a2b0[_0x5d845f(0x228)](_0x423ed6,![]),_0x16a2b0[_0x5d845f(0xc4c)](_0x2a2fd0,-0x1d7d*0x1+-0xda*0x5+0x7*0x4fd);return;}}_0x16a2b0[_0x5d845f(0x6a6)](_0x423ed6,!![]),_0x3ea381(),_0x106110();if(_0x159712['boxes'])_0x16a2b0['LyhEd'](_0x547d41);var _0x1b817c=null;try{if(_0x16a2b0[_0x5d845f(0x670)](_0x16a2b0['MLYCm'],'FKuWv'))_0x3429a8();else{var _0xf2ea2b=_0x324a54;if(_0xf2ea2b&&_0xf2ea2b['el'])_0xf2ea2b['el'][_0x5d845f(0x8d9)]['displ'+'ay']=_0x40a630?'':_0x37621a[_0x5d845f(0x369)];var _0x4325de=_0x26d4d0;if(_0x4325de&&_0x4325de['cv'])_0x4325de['cv'][_0x5d845f(0x8d9)]['displ'+'ay']=_0x2b697c?'':_0x5d845f(0xaeb);}}catch(_0x3687ba){}try{_0x1b817c=_0x16a2b0[_0x5d845f(0x77d)](_0x50270f);}catch(_0x2b715a){}try{_0x16a2b0['mcYNv'](_0x527a11);}catch(_0x31d5c7){}try{_0x16a2b0[_0x5d845f(0x3bf)](_0x26a6c1,_0x1b817c);}catch(_0x1eb981){}_0x2a2fd0(-0x1eef*-0x1+-0x1468+-0xa87);}function _0x155c10(){var _0x2b0264=_0xe93fad,_0x529269={'oJrRc':function(_0x32f963,_0x395cbf){return _0x32f963===_0x395cbf;},'CfqEc':_0x16a2b0[_0x2b0264(0xe11)],'aaVtN':function(_0x42cb70,_0x26f396){return _0x16a2b0['HxROa'](_0x42cb70,_0x26f396);}};if(_0x16a2b0['qRAbL']!==_0x2b0264(0x90a)){var _0x82e334=window[_0x2b0264(0x262)+'WebMo'+'dkit']&&window['Unity'+'WebMo'+_0x2b0264(0x4fa)][_0x2b0264(0xa67)+'me']||null,_0x4e8def=_0x82e334&&_0x82e334[_0x2b0264(0x3a2)+_0x2b0264(0xd20)+_0x2b0264(0xd67)],_0x52dd1d=_0x4e8def&&_0x4e8def['scrip'+_0x2b0264(0x1d2)],_0x1ba78b={},_0x251831=[];for(var _0x5d581e in _0x27746d){_0x1ba78b[_0x5d581e]='0x'+_0x27746d[_0x5d581e]['ptr'][_0x2b0264(0x5f3)+'ing'](-0x1*-0xea7+-0x1*-0x159d+-0x2434);if(_0x27746d[_0x5d581e][_0x2b0264(0xdfe)+_0x2b0264(0xacc)])_0x251831[_0x2b0264(0x8f2)](_0x5d581e);}var _0x2cd16b={};for(var _0x4d44b9 in _0x27746d)_0x2cd16b[_0x4d44b9]=_0x361432(_0x27746d[_0x4d44b9][_0x2b0264(0x999)]);var _0x42ccb6={},_0x5c92c4=null;try{_0x42ccb6=_0x1c43d3();}catch(_0x2e68f2){_0x5c92c4=String(_0x2e68f2&&_0x2e68f2[_0x2b0264(0x6b5)+'ge']||_0x2e68f2);}var _0x26f0c6={'version':_0x412872,'when':new Date()[_0x2b0264(0xa39)+_0x2b0264(0x970)+'g'](),'elapsedMs':_0x16a2b0[_0x2b0264(0x2e3)](Date[_0x2b0264(0x5a3)](),_0x10a243),'frame':location['href']['slice'](0xad2+0x1*-0x17c6+0xcf4,-0x1e6*-0x1+0x56e+0x1b7*-0x4),'host':_0x3ba4a1,'frameRole':_0x59696c,'uwmk':!!_0x82e334,'il2CppContext':!!_0x4e8def,'typeCount':_0x52dd1d?Object['keys'](_0x52dd1d)[_0x2b0264(0x516)+'h']:null,'arm':_0x527a60,'assemblies':_0x407808,'hooksTotal':_0x4daf3c[_0x2b0264(0x516)+'h'],'hooksApplied':_0x1cff12(),'hooksResolved':_0x16a2b0[_0x2b0264(0x949)](_0x473035),'hooksRegisteredAtArm':_0x527a60[_0x2b0264(0x4b5)+_0x2b0264(0xa7b)+_0x2b0264(0xa75)]||-0x252+-0x2*-0xd51+-0xc28*0x2,'hookErrors':_0xcec86a[_0x2b0264(0x616)](-0x1bfe+0xf38+0x221*0x6,0x1565+0x2*0xcb1+-0x2ebf),'instances':_0x1ba78b,'classNames':_0x2cd16b,'instancesReplaced':_0x251831,'hookFireProof':_0x3ee706,'survey':_0x42ccb6,'actkKeys':_0x12ba14,'surveyRows':Object[_0x2b0264(0x227)](_0x42ccb6)['reduc'+'e'](function(_0x3454ae,_0x5cc36b){var _0x55e5df=_0x2b0264;return _0x3454ae+_0x42ccb6[_0x5cc36b][_0x55e5df(0x516)+'h'];},0x65+-0x1cb8+0x1*0x1c53),'reads':{'ok':_0x2bc082['ok'],'failed':_0x2bc082['faile'+'d'],'lastError':_0x2bc082[_0x2b0264(0x781)+_0x2b0264(0x60e)],'source':_0x2bc082['sourc'+'e']},'identity':_0x16a2b0[_0x2b0264(0x942)](_0x4a4a19),'globals':_0x5e65c9(),'wasmMemory':{'captured':!!_0x34f302,'atMs':_0xa5cdc7,'bytes':(function(){var _0x4ed193=_0x2b0264;try{return _0x34f302&&_0x34f302['buffe'+'r']?_0x34f302[_0x4ed193(0xa76)+'r'][_0x4ed193(0x88c)+'ength']:0x1759+0x4aa*0x4+0x1*-0x2a01;}catch(_0x36f15a){return 0x111e*0x1+-0x2*0x111+0xe*-0x112;}}()),'exportKeys':_0x6f5602},'diff':_0x500c84[_0x2b0264(0x616)](-0x21c7*-0x1+0x609*-0x4+0x1*-0x9a3,0xba9+0x170d*0x1+-0x1*0x228e),'speed':{'on':_0xdd6062['on'],'factor':_0xdd6062['facto'+'r'],'writes':_0x5c5c3d,'scaled':_0x633a1d['slice'](-0x1*0x247+-0x1*0x5a1+0x7e8,-0x3*0x90e+0x24e1+-0x9a7),'skipped':_0x1e4c35['slice'](0x101f+-0x1*-0x1005+-0x2024,-0x2*-0x1037+-0x2689*-0x1+-0xa21*0x7)},'esp':_0x16a2b0[_0x2b0264(0x931)](_0x220e05),'view':_0x16a2b0[_0x2b0264(0x3ef)](_0x30c6b3),'camera':(function(){var _0x1fb776=_0x2b0264;if('bHPJE'==='EInlK'){if(!_0x5a3b97)return;var _0x52cd36=_0x529269[_0x1fb776(0x297)](_0x4fbebd['style'][_0x1fb776(0x957)+'ay'],_0x529269['CfqEc']);_0xd52e9d[_0x1fb776(0x8d9)][_0x1fb776(0x957)+'ay']=_0x52cd36?'':_0x1fb776(0xaeb),_0x529269[_0x1fb776(0xc49)](_0x3d920e,_0x1fb776(0x907))[_0x1fb776(0x4ff)+_0x1fb776(0x2bf)+'t']=_0x52cd36?'-':'+';}else try{var _0x2f46db=_0x3429a8();return{'ok':_0x2f46db['ok'],'source':_0x2f46db['sourc'+'e'],'why':_0x2f46db[_0x1fb776(0x1c9)],'tried':_0x2f46db[_0x1fb776(0xde1)],'camPtr':_0x16a2b0['BsNIf']('0x',_0x2f46db[_0x1fb776(0x878)+'r']['toStr'+'ing'](-0x24f9+0x9fa+-0x3*-0x905)),'tfPtr':'0x'+_0x2f46db['tfPtr'][_0x1fb776(0x5f3)+_0x1fb776(0xc36)](-0x1c6b*-0x1+0x5c*0x1c+-0x266b),'fov':_0x2f46db[_0x1fb776(0x6fb)],'quat':_0x2f46db[_0x1fb776(0x6d2)],'pos':_0x2f46db['pos'],'basis':_0x2f46db['basis'],'errors':_0x2f46db['error'+'s'][_0x1fb776(0x616)](-0x1090+0x892*-0x1+0x1922,0x1e3b+0x3*-0xcf7+0x1*0x8ae)};}catch(_0x382e36){return{'ok':![],'error':String(_0x382e36&&_0x382e36[_0x1fb776(0x6b5)+'ge']||_0x382e36)['slice'](-0x68e+-0xb*0x209+-0x1f*-0xef,-0x1793+0x29a+0x1571*0x1)};}}()),'angles':(function(){var _0x399856=_0x2b0264,_0x2b889f=_0x16a2b0['zjqYO']['split']('|'),_0x48cd8a=-0x1d36+-0x10eb+0x2e21;while(!![]){switch(_0x2b889f[_0x48cd8a++]){case'0':if(_0x2a02fe){var _0x1adc5c=_0x16a2b0[_0x399856(0x709)](_0x38e575,_0x2a02fe[_0x399856(0x38b)],[_0x2a02fe['eye'][-0x54f*0x4+-0xc70+0x21ac],_0x2a02fe[_0x399856(0x38b)][-0x9fc+-0x64*0x55+0x2b31],_0x16a2b0['KvWPs'](_0x2a02fe['eye'][0x1b*-0xb5+-0x14d3+0x27ec],0xee3+-0x1*-0x138f+-0x2271)],-0x151e+0x10b0+0x61*0x16,-0xac*0x7+-0x734+0x2*0x7e8);_0x1adc5c&&(_0x24f4e0=_0x1adc5c['x']/(-0xf*0xd+0x4*-0x4b1+-0x1*-0x176f),_0x31d040=_0x1adc5c['y']/(0x153*0xb+0x16fb+-0x21a4));}continue;case'1':return{'identified':_0x321b7e[_0x399856(0x91d)+_0x399856(0xde4)],'why':_0x321b7e[_0x399856(0x1c9)],'source':_0x321b7e['sourc'+'e'],'viewHooks':(function(){var _0x4229b6=_0x399856;try{return _0x51e3ba[_0x4229b6(0xa57)](_0x50449f);}catch(_0x6af4a9){return{'err':String(_0x6af4a9&&_0x6af4a9[_0x4229b6(0x6b5)+'ge']),'stack':_0x51e3ba[_0x4229b6(0x427)](String,_0x6af4a9&&_0x6af4a9['stack'])};}}()),'setterPair':(function(){var _0xc7f2e1=_0x399856,_0x59ee0b=_0x4eb21c();return _0x59ee0b?{'a':_0x59ee0b['rawA'],'b':_0x59ee0b['rawB'],'hits':_0x59ee0b['hits'],'order':_0x59ee0b[_0xc7f2e1(0x923)]}:null;}()),'yawAt':_0x321b7e['yawGe'+_0x399856(0xca0)]||_0x399856(0xa28)+_0x399856(0x65e)+'s)','pitchAt':_0x321b7e['pitch'+'Gette'+'r']||_0x399856(0xbae)+_0x399856(0x65e)+'s)','getters':_0x321b7e[_0x399856(0x97c)+'rs'],'rawPitch':_0x321b7e['rawPi'+_0x399856(0x36b)],'rawYaw':_0x321b7e['rawYa'+'w'],'pitch':_0x321b7e[_0x399856(0x2d7)],'yaw':_0x321b7e['yaw'],'legacyOffsetsCleared':_0x1c4e05,'fov':_0x40148d[_0x399856(0x6fb)],'fovSane':_0x40148d[_0x399856(0x6fb)]>=0x791*-0x1+-0x267*0x4+0x1169&&_0x40148d['fov']<=-0x8*-0x33a+-0x4e5+0x5*-0x419,'centreX':_0x24f4e0,'centreY':_0x31d040,'aboveY':_0xec0c1d,'belowY':_0x37ac8d,'projection':_0x348a20()};case'2':if(_0x2a02fe){var _0x33a055=_0x38e575(_0x2a02fe[_0x399856(0x38b)],[_0x2a02fe[_0x399856(0x38b)][-0x213*-0xb+-0xecc+-0x805],_0x2a02fe[_0x399856(0x38b)][0x6*0x507+0x2*0xc9d+0x3763*-0x1]+(0x14b*-0xd+-0x543+0x161c),_0x2a02fe[_0x399856(0x38b)][0x3*0xa59+0x5*0x326+-0x2ec7]+(-0x1d10+-0x92d+0x2647*0x1)],-0x2579+-0x1b88+-0x17*-0x2ff,0x1434+0x3e6+0xeb*-0x16);if(_0x33a055)_0xec0c1d=_0x33a055['y']/(0x1f19+-0x3*-0xc61+-0x4054);var _0x1f2d3c=_0x38e575(_0x2a02fe['eye'],[_0x2a02fe[_0x399856(0x38b)][-0x5*0x35e+0x1*-0x21a1+0x3277],_0x2a02fe[_0x399856(0x38b)][-0x8c0*-0x1+-0x2259+-0x1*-0x199a]-(-0x2040+0x1e49+0x201),_0x2a02fe['eye'][0x23*0x53+0x765+0xda*-0x16]+(0x9*0x3df+0x1*0x17b+-0x2448)],-0x4*-0x1c0+0x87d*-0x3+0x165f,0xa51*-0x1+0x1d+0xe1c);if(_0x1f2d3c)_0x37ac8d=_0x16a2b0['ULmOy'](_0x1f2d3c['y'],0x2*0x296+-0x69f+0x3*0x1c9);}continue;case'3':var _0x2a02fe=_0x1d272f();continue;case'4':var _0x2fa2aa=_0x16a2b0[_0x399856(0xdef)](_0x235a3e);continue;case'5':var _0x24f4e0=null,_0x31d040=null;continue;case'6':var _0xec0c1d=null,_0x37ac8d=null;continue;case'7':var _0x51e3ba={'SDKQo':function(_0x228b2c){return _0x228b2c();},'OaPpZ':function(_0x15f4b9,_0x574e47){var _0xeb3943=_0x399856;return _0x16a2b0[_0xeb3943(0xa85)](_0x15f4b9,_0x574e47);}};continue;}break;}}()),'fov':_0x40148d[_0x2b0264(0x6fb)],'espView':{'on':_0x159712['on'],'boxes':_0x159712['boxes'],'span':_0x159712['span']},'local':(function(){var _0xeb15d8=_0x2b0264,_0x2fa260=_0x16a2b0[_0xeb15d8(0x426)](_0x1d272f);if(!_0x2fa260)return null;return{'ptr':'0x'+_0x2fa260['ptr']['toStr'+'ing'](-0x2a6+-0x1b32*0x1+0x1de8),'feet':_0x2fa260[_0xeb15d8(0x954)],'eye':_0x2fa260['eye'],'posAt':_0x2fa260[_0xeb15d8(0x568)],'copies':_0x2fa260[_0xeb15d8(0xe00)+'s'],'cluster':_0x2fa260[_0xeb15d8(0xa01)+'er'],'eyeHeight':_0x30f2af,'pitch':_0x2fa260['pitch'],'yaw':_0x2fa260['yaw'],'reach':_0x2fa260[_0xeb15d8(0x5f6)]};}()),'uwmkLog':_0x4984e9['slice'](-0x2d4*-0x9+-0x81b+-0x1*0x1159,-0x1abd*-0x1+0x1704+0x1*-0x31ad),'warnings':[]};if(_0x5c92c4)_0x26f0c6['warni'+'ngs'][_0x2b0264(0x8f2)](_0x16a2b0[_0x2b0264(0xb47)](_0x2b0264(0xab4)+'y\x20fai'+_0x2b0264(0x344),_0x5c92c4));if(_0x527a60['error'])_0x26f0c6[_0x2b0264(0xbd9)+_0x2b0264(0xda8)]['push'](_0x16a2b0['PbGGY']+_0x527a60['error']);_0x26f0c6[_0x2b0264(0xab4)+_0x2b0264(0xb53)]===0x2*0xf6c+0x249*-0x1+-0x3*0x985&&Object['keys'](_0x26f0c6['insta'+'nces'])[_0x2b0264(0x516)+'h']>0x55f*0x1+-0x11*-0x242+-0x1e7*0x17&&_0x26f0c6['warni'+_0x2b0264(0xda8)]['push'](_0x16a2b0['FpTTK'](_0x16a2b0['gurba'](_0x2b0264(0x5db)+_0x2b0264(0x531),Object['keys'](_0x26f0c6[_0x2b0264(0x84d)+_0x2b0264(0x4fc)])['lengt'+'h']),_0x2b0264(0xe47)+'ct(s)'+_0x2b0264(0xdc0)+'read\x20'+'0\x20fie'+_0x2b0264(0xe2e))+(_0x2bc082['lastE'+'rror']?_0x16a2b0[_0x2b0264(0x1f0)](_0x2b0264(0x7cd)+_0x2b0264(0x30d),_0x2bc082[_0x2b0264(0x781)+_0x2b0264(0x60e)]):_0x16a2b0[_0x2b0264(0xc32)]));_0x26f0c6[_0x2b0264(0x91d)+_0x2b0264(0xa62)]&&_0x26f0c6[_0x2b0264(0x91d)+'ity'][_0x2b0264(0x5c7)+'tches']===![]&&_0x26f0c6[_0x2b0264(0xbd9)+_0x2b0264(0xda8)][_0x2b0264(0x8f2)](_0x16a2b0['iIIJl'](_0x16a2b0[_0x2b0264(0x5ae)](_0x2b0264(0xd4d)+_0x2b0264(0x4f3)+_0x2b0264(0x751)+_0x2b0264(0x989)+_0x2b0264(0x3d9)+_0x2b0264(0x3d8)+'ndow.'+_0x2b0264(0x262)+'WebMo'+_0x2b0264(0xc66)+_0x2b0264(0xb34)+'Runti'+_0x2b0264(0x3e2)+'\x20arme'+_0x2b0264(0xa80)+'\x20',_0x16a2b0[_0x2b0264(0xbe6)])+(_0x2b0264(0x618)+_0x2b0264(0x558)+'hile\x20'+_0x2b0264(0xaff)+_0x2b0264(0x8bf)+'lding'+_0x2b0264(0x964)+'s\x20orp'+_0x2b0264(0x632)+_0x2b0264(0xc39)+_0x2b0264(0xb58)+'every'+'\x20othe'+'r\x20'),_0x2b0264(0xbd5)+_0x2b0264(0xadd)+_0x2b0264(0x2e2)+_0x2b0264(0x8e0)+_0x2b0264(0x45d)+_0x2b0264(0x6b3)+_0x2b0264(0xd2b)+'and\x20h'+_0x2b0264(0x4a3)+_0x2b0264(0x813)+'.'));_0x26f0c6['ident'+_0x2b0264(0xa62)]&&_0x26f0c6[_0x2b0264(0x91d)+_0x2b0264(0xa62)][_0x2b0264(0x94b)+_0x2b0264(0x6f1)+_0x2b0264(0x387)+'Expor'+_0x2b0264(0x968)]===![]&&(_0x16a2b0['kqjGR']==='UsaIc'?_0x26f0c6['warni'+'ngs'][_0x2b0264(0x8f2)](_0x16a2b0[_0x2b0264(0x370)]+(_0x2b0264(0x525)+_0x2b0264(0x789)+'diffe'+_0x2b0264(0x251)+'Runti'+_0x2b0264(0x21c)+_0x2b0264(0x7bc)+'e\x20tha'+_0x2b0264(0xa5a)+_0x2b0264(0x7f2)+'al\x20no'+_0x2b0264(0xc7c)+_0x2b0264(0x5b8))):_0x376cb3=_0x529269['aaVtN'](_0x4cc856,_0x5b6dbe));if(_0x26f0c6['esp']&&_0x26f0c6[_0x2b0264(0xce7)][_0x2b0264(0x6c6)])_0x26f0c6[_0x2b0264(0xbd9)+_0x2b0264(0xda8)][_0x2b0264(0x8f2)](_0x16a2b0[_0x2b0264(0x2be)]+_0x26f0c6[_0x2b0264(0xce7)][_0x2b0264(0x6c6)]);if(_0x26f0c6[_0x2b0264(0xa07)+'ls']&&!_0x26f0c6[_0x2b0264(0xa07)+'ls'][_0x2b0264(0x9f4)+'8']){var _0x32f308='';if(_0x26f0c6['hookF'+'irePr'+'oof']){if('gZHpu'!==_0x16a2b0[_0x2b0264(0xc81)])_0x32f308=_0x16a2b0['NWBeG'](_0x16a2b0[_0x2b0264(0x32f)](_0x16a2b0[_0x2b0264(0xa63)](_0x16a2b0[_0x2b0264(0x656)](_0x16a2b0[_0x2b0264(0x4d1)]('\x20A\x20ho'+_0x2b0264(0x37d)+_0x2b0264(0x7f5)+'t\x20',_0x26f0c6[_0x2b0264(0x54a)+_0x2b0264(0x8be)+'oof'][_0x2b0264(0x6e9)])+(_0x2b0264(0x799)+'th\x20or'+'igina'+_0x2b0264(0x6ca)+'='),_0x26f0c6['hookF'+_0x2b0264(0x8be)+'oof'][_0x2b0264(0xc02)+'nalFu'+'nc']),'\x20and\x20'+_0x2b0264(0x2d9)+_0x2b0264(0x84f)+_0x2b0264(0x67c)),_0x26f0c6[_0x2b0264(0x54a)+'irePr'+'oof']['resol'+_0x2b0264(0x98e)+_0x2b0264(0xb93)+'re']),_0x16a2b0[_0x2b0264(0xbff)])+(_0x26f0c6['hookF'+_0x2b0264(0x8be)+_0x2b0264(0x4b4)]['gameS'+_0x2b0264(0x7b7)+_0x2b0264(0xd5e)+'e']||'none')+('),\x20so'+_0x2b0264(0x868)+'refer'+_0x2b0264(0xd51)+'exist'+_0x2b0264(0xae8)+_0x2b0264(0x3c7)+_0x2b0264(0x1ba)+_0x2b0264(0x400)+_0x2b0264(0x225)+_0x2b0264(0xdf8)+'ow.');else{var _0x543fdb={'XeCxw':function(_0x1649af,_0x20989b){var _0x29cb5f=_0x2b0264;return _0x16a2b0[_0x29cb5f(0x1b0)](_0x1649af,_0x20989b);},'UzYfA':_0x16a2b0['JPYMB'],'gEKJl':function(_0x30d350,_0x15d59f,_0x3e942b){return _0x30d350(_0x15d59f,_0x3e942b);}},_0x5664ee=new _0x9beb8d(_0x2b0264(0x70f)+'a-sw');_0x5664ee['onmes'+'sage']=function(_0x4833c3){var _0x5cb0e3=_0x2b0264,_0x296f8c=_0x4833c3['data'];if(_0x296f8c&&_0x543fdb[_0x5cb0e3(0x530)](_0x296f8c['__sak'+'ura'],_0x3fcdd2)&&_0x296f8c[_0x5cb0e3(0x61f)]===_0x543fdb[_0x5cb0e3(0x8cc)])_0x543fdb[_0x5cb0e3(0xbab)](_0x495c63,_0x296f8c['cmd'],_0x296f8c[_0x5cb0e3(0x608)]);};}}_0x26f0c6[_0x2b0264(0xbd9)+_0x2b0264(0xda8)][_0x2b0264(0x8f2)](_0x16a2b0[_0x2b0264(0x9dd)](_0x16a2b0[_0x2b0264(0x9e8)](_0x2b0264(0x262)+_0x2b0264(0xd83)+'ance\x20'+_0x2b0264(0x400)+'esolv'+'ed\x20ye'+'t\x20(so'+'urce:'+'\x20'+(_0x26f0c6[_0x2b0264(0xa07)+'ls'][_0x2b0264(0x549)+_0x2b0264(0x7b7)]||_0x16a2b0[_0x2b0264(0xe11)]),_0x2b0264(0xdbc)),_0x16a2b0[_0x2b0264(0xa34)])+_0x32f308);}return(_0x26f0c6[_0x2b0264(0xa07)+'ls']&&!_0x26f0c6[_0x2b0264(0xa07)+'ls']['value'+'Wrapp'+'er']||_0x26f0c6['globa'+'ls'][_0x2b0264(0x61e)+_0x2b0264(0x76f)+'er']===_0x2b0264(0x2ad)+'ined')&&_0x26f0c6[_0x2b0264(0xbd9)+'ngs']['push'](_0x16a2b0['ompLA']),_0x16a2b0[_0x2b0264(0x3a6)](_0x26f0c6[_0x2b0264(0x4b5)+'Total'],0x1bb2+-0x2483+0x25*0x3d)&&_0x26f0c6[_0x2b0264(0x4b5)+_0x2b0264(0x4b8)+'ed']===0x16ba+0xc7*0x1b+0x13*-0x24d&&_0x52dd1d&&(_0x26f0c6['hooks'+'Resol'+'ved']===0x74b+-0x1a6c+0x3b*0x53?_0x26f0c6[_0x2b0264(0xbd9)+'ngs']['push'](_0x16a2b0['WbIJk'](_0x2b0264(0x1b8)+_0x26f0c6['hooks'+_0x2b0264(0x5b6)]+(_0x2b0264(0xb5c)+_0x2b0264(0xbd4)+_0x2b0264(0xe1d)+_0x2b0264(0xe27)+_0x2b0264(0xdd3)+'UWMK.'+_0x2b0264(0xb34)+_0x2b0264(0x20f)+_0x2b0264(0x8c0)+'\x20')+(_0x2b0264(0x967)+'once\x20'+_0x2b0264(0x753)+'g\x20Web'+_0x2b0264(0x21f)+_0x2b0264(0xa09)+'nstan'+'tiate'+'\x20and\x20'+_0x2b0264(0x573)+_0x2b0264(0xc1d)+_0x2b0264(0x94b)+_0x2b0264(0x3b9)+_0x2b0264(0x7a1)+'ngth,'+'\x20')+_0x16a2b0['HfFbr']+_0x16a2b0[_0x2b0264(0x235)]+_0x26f0c6[_0x2b0264(0x4b5)+'Regis'+'tered'+_0x2b0264(0xa0b)],_0x2b0264(0xb5c)+'(s)\x20d'+_0x2b0264(0x6f6)+_0x2b0264(0xa66)+'ng\x20at'+_0x2b0264(0x319)+_0x2b0264(0x2c1)+_0x2b0264(0x34f)+'.')):_0x26f0c6[_0x2b0264(0xbd9)+'ngs']['push'](_0x16a2b0[_0x2b0264(0x242)](_0x16a2b0['ngLxV']('UWMK\x20'+_0x2b0264(0x84f)+'ved\x20'+_0x26f0c6[_0x2b0264(0x4b5)+_0x2b0264(0xa82)+_0x2b0264(0x45b)]+_0x2b0264(0x56b),_0x26f0c6[_0x2b0264(0x4b5)+_0x2b0264(0x5b6)]),'\x20hook'+_0x2b0264(0xd5a)+_0x2b0264(0x56d)+'able\x20'+_0x2b0264(0xd12)+_0x2b0264(0xdc0)+_0x2b0264(0x39d)+'ed\x20no'+_0x2b0264(0x43a)+_0x2b0264(0xdd2)+'gnatu'+_0x2b0264(0x6f0))+('(this'+_0x2b0264(0x7b1)+_0x2b0264(0x884)+_0x2b0264(0x24d)+'->\x20vo'+'id\x20do'+_0x2b0264(0x9dc)+'t\x20mat'+_0x2b0264(0xce8)+_0x2b0264(0xe09)+'ild.'))),_0x26f0c6[_0x2b0264(0x4b5)+'Appli'+'ed']>0x12*0x51+-0x2df+0xf1*-0x3&&!_0x26f0c6[_0x2b0264(0x84d)+_0x2b0264(0x4fc)][_0x2b0264(0xb1f)+'ntrol'+_0x2b0264(0x313)]&&_0x26f0c6[_0x2b0264(0xbd9)+'ngs'][_0x2b0264(0x8f2)](_0x16a2b0[_0x2b0264(0x448)]+_0x16a2b0['cUHsg']),_0x26f0c6[_0x2b0264(0x84d)+_0x2b0264(0xbfc)+'eplac'+'ed'][_0x2b0264(0x516)+'h']&&_0x26f0c6[_0x2b0264(0xbd9)+_0x2b0264(0xda8)][_0x2b0264(0x8f2)](_0x16a2b0[_0x2b0264(0x8c7)]+_0x26f0c6[_0x2b0264(0x84d)+_0x2b0264(0xbfc)+_0x2b0264(0xc6c)+'ed']['join'](',\x20')),_0x26f0c6;}else _0x16a2b0['xbtir'](_0x3785fb,_0x4bef86);}function _0x51e87b(_0x5ae594){var _0x4dc0ae=_0xe93fad,_0x1fe29b={'sxfWE':_0x4dc0ae(0xe3c)};console[_0x4dc0ae(0xe34)](_0x4dc0ae(0x583)+'kura]'+'\x20Skil'+_0x4dc0ae(0x857)+'\x20repo'+'rt',_0x4dc0ae(0x7a6)+':'+_0x39f871+(';font'+'-weig'+_0x4dc0ae(0x674)+'0'),_0x5ae594),console[_0x4dc0ae(0xe34)](_0x16a2b0[_0x4dc0ae(0xbcf)](_0x5f1817+'\x0a',JSON[_0x4dc0ae(0x453)+'gify'](_0x5ae594,null,0x3*0x665+0x1766+-0xaa5*0x4))+'\x0a'+_0x1db09e),_0xe0efbf=_0x5ae594;try{if('uqIbU'!=='ycUVo')_0x3f561d(_0x5ae594);else{var _0x5496e6=_0x29b7f0&&_0x589907['data'];if(!_0x5496e6||_0x5496e6[_0x4dc0ae(0x214)+'ura']!==_0xcf6a89||_0x5496e6['kind']!==_0x1fe29b[_0x4dc0ae(0xbfb)])return;_0x21e6f9(_0x5496e6[_0x4dc0ae(0xe3c)],_0x5496e6['arg']);}}catch(_0x24a424){}_0x16a2b0[_0x4dc0ae(0x4bb)](_0x467987,_0x16a2b0['GmcZk'],{'report':_0x5ae594});}function _0x561d14(){var _0x186760=_0xe93fad;if('ItsFf'===_0x16a2b0[_0x186760(0xb0f)])try{return _0x155c10();}catch(_0x56ef51){return{'version':_0x412872,'when':new Date()[_0x186760(0xa39)+'Strin'+'g'](),'elapsedMs':_0x16a2b0['ahRJr'](Date[_0x186760(0x5a3)](),_0x10a243),'host':_0x3ba4a1,'uwmk':!!(window[_0x186760(0x262)+_0x186760(0xc5c)+'dkit']&&window[_0x186760(0x262)+'WebMo'+_0x186760(0x4fa)][_0x186760(0xa67)+'me']),'il2CppContext':![],'arm':_0x527a60,'hooksTotal':_0x4daf3c[_0x186760(0x516)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x16a2b0[_0x186760(0x8d6)](String,_0x56ef51&&_0x56ef51[_0x186760(0x6b5)+'ge']||_0x56ef51)};}else return _0x23b8ee[_0x186760(0x6d2)]=null,_0x5e8dd3[_0x186760(0xcf6)]=null,_0x55e23d[_0x186760(0xdb8)]=null,_0x40b33;}function _0x22bc16(){var _0x414ee9=_0xe93fad,_0x521856=-0x5*-0x731+-0x5b8+-0x1*0x1e3d;try{_0x38dc2c();}catch(_0x33e0d7){}try{_0x3d0c28();}catch(_0x2a83a0){}_0x16a2b0[_0x414ee9(0xaae)](setInterval,_0x55ec0d,0x1c05+-0x1e18+0x35*0x1b),_0x16a2b0[_0x414ee9(0x8d6)](_0x51e87b,_0x561d14()),function _0x31092d(){var _0x14076c=_0x414ee9,_0x28d3f1={'ZGLAk':function(_0x2ad7d4,_0x28b713){return _0x2ad7d4===_0x28b713;},'noweL':function(_0x3a261f,_0x21e11b){return _0x16a2b0['snwWr'](_0x3a261f,_0x21e11b);},'dTdOm':_0x16a2b0[_0x14076c(0x7e3)],'DCLQG':function(_0x104544,_0x333fb6){var _0x18b702=_0x14076c;return _0x16a2b0[_0x18b702(0x57c)](_0x104544,_0x333fb6);}};if(_0x16a2b0[_0x14076c(0x61d)]!==_0x14076c(0x6bf))return _0x28d3f1[_0x14076c(0xb30)](_0x3dd1ff['lo'],null)||_0x595b95['hi']===null?0x21+-0x1*-0x2291+-0x1*0x22b2:_0x4e757a['hi']-_0x11b8ce['lo'];else{if(!_0x4daf3c['lengt'+'h']){if(_0x14076c(0xc53)!==_0x16a2b0[_0x14076c(0x5d2)])_0x3a480c['lg'][_0x14076c(0x4ff)+_0x14076c(0x2bf)+'t']='esp\x20'+_0x18bc0a+_0x14076c(0xd04)+_0x2fa929['round'](_0x2f44de[_0x14076c(0x8e2)])+'m'+(_0x11f12a[_0x14076c(0xbd7)]?_0x28d3f1[_0x14076c(0x36d)](_0x28d3f1['dTdOm']+_0x5ea2fa[_0x14076c(0x921)](_0x326875[_0x14076c(0x6fb)]),'°'):'')+(_0x13aa22!==null?_0x28d3f1['DCLQG'](_0x14076c(0x96a)+'am',_0x3bcb9f):'');else try{_0x11e57c();}catch(_0x4594f7){}}_0x521856++,_0x51e87b(_0x16a2b0[_0x14076c(0xc63)](_0x561d14));if(!_0x4daf3c['lengt'+'h']&&_0x16a2b0[_0x14076c(0x581)](_0x521856,-0x1404+-0x265+0x1795))_0x16a2b0['McXMI'](setTimeout,_0x31092d,0x1732*-0x1+-0x17*0xba+0x2fb8);else{if(!Object[_0x14076c(0x227)](_0x27746d)['lengt'+'h']&&_0x16a2b0[_0x14076c(0x4f9)](_0x521856,0x1c80+-0x3cd*0x5+0x853*-0x1))setTimeout(_0x31092d,0x194d+0x1f85+-0x3102);else _0x16a2b0[_0x14076c(0x1d8)](setTimeout,_0x31092d,-0x62b+0x49*-0x81+0x2fa4);}}}();}if(document['body'])_0x22bc16();else document['addEv'+_0xe93fad(0x6a2)+_0xe93fad(0xcb1)+'r'](_0xe93fad(0x2af)+'ntent'+_0xe93fad(0xb16)+'d',_0x22bc16,{'once':!![]});if(document['body'])try{_0x16a2b0['RvTJO'](_0x3c6164);}catch(_0xbcb903){}else document[_0xe93fad(0x557)+_0xe93fad(0x6a2)+_0xe93fad(0xcb1)+'r']('DOMCo'+'ntent'+'Loade'+'d',function(){try{_0x3c6164();}catch(_0x1bdd5f){}},{'once':!![]});})()));function _0x4336(){var _0x5b783e=['i2zMogy','WONcLmkoWPpcJW','Aw5Uzxi','Bg9Hzhm','WOJcLmkoWOBcKa','vwHPCfG','kZb4','ExnyEvy','BgvMDdO','AwrLCG','DwjWwfq','B2jIEsa','Aw1Lr2e','imk3ia','WO7cI8koWPhcJa','C2STyNq','wfzbtvy','Bg9JywW','EMjSq3G','Bg9NBY0','Dfj6zMq','DhjHBNm','quzwC0i','yxK6zMW','ywnRz3i','Aw9U','B3vWig8','Aw5KzxG','psiXnJa','idmWChG','yZK7BwK','rw5LBwK','s2HpCxO','vKDrt2e','Dg57ywW','C25HCa','ndySmJm','Bgv4lxm','BMrVDY4','zxi7z2e','A2DYB3u','CenVBNq','WOBcHSkmWPtcIW','z2v0rwW','rJKGihm','WO7cLmktWPtcJq','lxDLAwC','B3r0B20','m3WXmG','wgPJz0e','WOFcLCkpWO3cJG','BgLZDa','BMTLEsa','oInMzJy','igHHy2S','psiXiIa','CMuk','rxHYDwG','zw1ZoMm','B0vjqwS','zgrPBMC','nYWUmty','DgLHDgu','EKvWEhC','wNfMu1e','nhb4o3q','zgvYoJe','WO7cKCksWOFcIq','zZO2ChG','t29iEwW','s0D2yu8','igHLyxa','odbWEdS','z0XZwvu','AhjLzG','CMfhq1q','t0jkwxq','DxjHvge','wwXcv3G','AxzLo3C','CMzqquy','B246B3a','BMvUDc4','v05cBwe','ndm1nfH3zhndBG','yxbWzwe','qu5pveG','AgLKzgu','lJuIihy','BNrxAw4','zw5Jzsa','n3W0Fdu','WONcKCkgWORcKq','svDPuu8','x3j1BNq','ihvPlw0','zhrOoJm','zK9sAvO','DhLxzwi','khmPihq','wNjHEhy','WPtcHSkkWO/cJG','zsGP','qxrgAxi','ig1LBNu','ChG7zM8','ktTWB2K','Eu9ItuS','uMvSB2e','u3nXtha','BhnxrfO','lde0mYW','zxH0','ywrPDxm','DhbHC3m','Dw50','uePkAem','uIbbq1q','y3DUrg8','AwXLzcW','v0zttvq','mtjWEca','D2LUzg8','zwvKig8','Ae1JCwC','zw1VCNK','CYbHy3i','Bg9JAMm','svfAsLe','DNmGC24','u3bLzwq','Bw47Fq','wLbYsuK','z2v0sw4','EgDdEhG','B3vUDa','B3bLBG','igzYyw0','zwz0oMe','tKjkChy','igLUC3q','oJe7Dhi','mJq2ldi','CKnVDw4','DMvYC2K','BMfIBgu','DgX7zgK','AdO5nNa','lxyYE2e','mhGXmum','Bwf4psi','C3HMEhe','Bw5mu0G','Ad0ImIi','Cgv0ywW','WORcJmkvWPpcJq','CgXHEwu','AxrOie0','BxLQwe8','ihjLCg8','BgfZDem','wgL5rLy','sMnjCw0','ufvTDKC','q1nQvuK','lJa0ktS','WOZcKmkjWOBcKG','y29WEq','WPlcLmkhWO3cJa','sw5utLq','zxzLBNq','zgf0ys0','yKjyqMy','A3vYyv0','EcaXmNa','z2v0x3q','zMLSBfm','BMDZ','WPpcI8kuWPtcLa','qxHeq3i','WONcJmknWOVcJW','DdTIB3i','y2vUDgu','A2rHAee','mtf8mxW','WOVcLmktWOBcJa','ww9qz0y','BhzLr2e','BgqGAxm','C1zMEuO','BgX3yxi','WOZcImkkWONcKG','rKfwsg0','Cg9Z','Fdz8mNW','uKfqueu','y2uSq28','ks4G','ueLds1a','qKPREfu','EgHgBhu','igj1Dca','zg9JDw0','Bw4Ty28','zYb3Agu','zxj7y28','zYbMB3i','ys5ZA2K','ywn0B3i','yMfJA2q','zuvJv3i','WORcISklWO/cKG','zefKChu','ksbVCIa','B25ZB2W','BM9UztS','Ewv0lG','4Ocuihr3BW','zM9UDc0','AguGC2K','tIbIEsa','CungBgO','Cxf0EeW','zYbSB28','u1vjA1u','BYb3zsa','vvLZD3O','CgXPzxi','uhHVANy','vhn3tKW','tvzcyuW','sgvHBhq','mhGYoa','BunvC3C','DhjPzwq','C05tDhO','BwuGBM8','AwzPzwq','tLnHCvq','AwvSzca','rg96DMq','Fdb8mq','DMuGBwe','mtC3lc4','DwLAC2C','zZO0ChG','C0TLzNa','ihnPBMm','r3ztwNG','rxnhyLK','zgLUzZO','BJ8PoIa','ENHvCMK','zsb1C2u','iZrMogy','rNL3DKu','Cuf4Ag8','yMXLig4','DxjHtwu','CMeTCgu','WOBcJ8kvWOBcHW','AxnQu0C','Bwv0ywq','CMvWBge','oM1PBIG','y29WAwu','WOJcH8ktWOZcLa','pgj1Dhq','BMCGB24','rhjJreS','CMuGy2W','z2v0vwK','WONcLmkmWOVcIq','zenOAwW','AxmGyNu','DMuGB2i','CM06BM8','DxjJzq','WO3cKCkoWORcIG','sNbHC2y','Dg9W','u0XKtva','q1jrs00','igHLEd0','r2fTzsG','zwz0oJe','B3n0zMK','cNbPDgm','nxb4o2i','vfPnBxy','EhPksK8','wfLJs2K','CgfYzw4','ifnRAwW','zsbLDMu','zMfPBgu','CdO4ChG','idaGmxa','cNLHDYa','WPtcISksWOFcKG','WO7cKmkrWPtcJG','ktT9','WPhcKCkjWPhcKG','wvDkzei','BIbtruu','B2fKzwq','lJi1ktS','EuHutwS','wgDHELe','BwLU','ysb0CMe','BgrZlIa','DeTmrgm','v0zLtxa','EM9Vz0S','DgvTCZO','Dw5UAw4','Bg9N','D01oAwK','WOBcI8krWOFcIG','qwfkt1K','oYi+u24','oJi1ChG','mJKWChG','yxrLigy','y21K','DgHLBG','rLPrC0C','rgz0qMW','ihnVBgK','zMLLza','u2HHCNa','y2rbshO','ChGGC28','yxmGBM8','Fdj8mxW','ig9IAMu','zdP0CMe','mNb4o20','yMvNAw4','DMLLDW','wePtwLm','z09NBxO','iMzVBgq','zcb0Agu','Dgf0Dxm','AfnJCMK','C2X1zKu','WPlcJmkjWORcKW','yMuGCMu','BNnMB3i','ys1Tzw4','yYbYzxq','vgfdv24','imk3igzV','i2y3zwu','CNq7z2e','ELPmCLq','WORcKSksWORcKW','nxm0idi','z2LZDgu','mcbVzIa','ywL0Aw4','zcbPCYa','ufrtu04','AM9PBJ0','CNvUDgK','qvLVyxe','iokaLcbUBW','BNnPDgK','DxjHlwu','lwjVDhq','EwLuDuS','C3rYB2S','lYbQDw0','mhG1yW','oY13zwi','uNrIr3K','D2H5','oJHWEdS','ELbcuu8','EhDXsfi','zxj0Eq','ic0GDgG','DMLLDYa','qMjjuui','mcaWige','DerHDge','Ag9ZDa','yNP2sxu','nsWUmdu','nsWUmdG','ChbLCIa','Dujns0S','C2XPzgu','mNb4idC','wMLAAhC','ANvTCa','CIiGDhK','WOVcKmknWPxcHG','nsiGC3q','DJiTDge','mtfWEdS','DcbPzd0','EM1hDLK','DuP4Cwu','AKvougW','Dg46Ag8','CMTfvwq','WPtcKmkuWOZcLa','mdT0B3a','BMvPDgG','ihnOB3C','BMC6nha','tenytxi','zw50igK','mNm7Fq','rg9mDeS','iNnUyxa','vK5pC0y','mNb4o3O','WOJcJ8kuWPxcIG','WOVcH8khWPlcKa','BwLUv2K','vKLt','lgnHBgm','tLvRwwy','WOZcJ8kgWPxcLa','BNDhq1C','igHHDMu','AMzhqKS','sfveigq','psjZDZi','WPlcI8ktWOVcKG','yxDqCwC','B3n0Awm','A2v5','WPpcImktWOJcLq','WOZcICkoWOBcHG','D2fZBva','B0zWvfC','DhrVBJ4','wgjvuLK','rvrfEw4','CMvNAxm','r2v0Dgu','B0PHr08','i2zMzdq','yxbWBhK','x19WCeW','yxjKlxq','ys1IB3G','WONcICkoWPlcIq','x19ZywS','zgf0zsG','EhfkC2O','BdPUB24','DcbKyxq','z2jHkdi','ihrOAxm','Cg5UDui','BwuGAw4','BgvHCG','BMvS','qxnZzw0','C2STC2W','zxvHyK8','CgfJzsW','D2fZBu0','ig9MzG','zwfJAge','CMf3wwe','A2v5CW','z1HYBM4','WO7cKSkqWOJcKq','lYbZChi','CMvMDxm','WPtcI8kgWORcJG','Aw5Qzwm','igfYztO','AhvK','EdOYmtq','ihnVigu','B3bHy2K','CM9Wlwy','DMvKigm','BfnVBey','CgTvsKK','CMvnq1u','u21cuwq','A3LQzgW','BhDHCNO','B3j04OcM','zsbUzxy','ELvlCfO','WORcISkqWOJcJa','BM8GC2m','ywLSzwq','BM8TBwu','B2fruwi','yNvtqu8','B25PBNa','ChG7yM8','zxrZicS','CMvJDgK','keLUC2u','mNb4o3a','zMXVDZO','DxjHimk3','CNmkEwe','zM8Qksa','C1PfwuC','C2STC3C','lg1VBM8','CMvUDca','oezfy1fKqq','Bhzrsxi','u1PVthO','BLr5Cgu','Ag90','Axr0zwq','EgvZlIa','if0GywW','BNTIywm','DKnJAgS','Agj6r1i','oJaGmca','owqPida','B2DVlxm','zdDHotK','wMfgAwG','vw5PDhK','BNrPyxq','ywjZ','phn0CM8','ExrLCW','z2H0oJi','otK7Bwe','ktSTD2u','ve9Qswu','DcbIzwu','WPlcKCkuWO3cKW','qKzzvfe','Be5WrLa','ruPVCwq','wKPjAMq','tM8GCMu','AMvJDhm','rhDQEeG','wvL3DLe','icdcTYaG','C3LUy3m','phn2zYa','lwe9iMy','y2fUzgK','z1nWvwi','idb4mJG','DhjADgG','zxnJ','y3qGzM8','ywX1zt0','AuD0vwG','ywPtq3q','Dxm6nta','zwqGysa','x2DHBwu','qLHqvgC','AKzUB08','y1r4BhK','Ew1gsfy','BxbSyxq','yxbWzw4','Ae9iCe4','nYWUmZu','m3W5Fdq','r1vfu1m','wu5TrLG','BNrZoM4','DhLSzt0','qvn2Chy','qNPxqw4','ys1ZA2K','ldi0mIW','q3bctuW','B0PYuMm','Aw4TD2K','t3rAwg0','thnVCNC','mZGSmJq','idzWEca','wK1XA0e','igLUlwy','ywDLigG','icHZB3u','mJrWEa','y3jLyxq','pJWVzgK','BNqTzMe','WOBcLmkuWO7cJq','lKHfqva','ChG7Fq','CgfYyw0','q0PUvKW','D192mG','uM1mBue','zcbKAwe','Dw5Kzwy','wNjQwwK','re9nq28','WPdcKCkkWO/cJa','D29rBhO','sNnJz0e','yuzYB20','u0f0q28','zdTTyxi','lGOk','C2STBwi','sfLmCha','z0zADNu','sMDvsKu','zhvSzq','WPxcJmkhWOBcHW','Bg93oMG','BNz3EuO','B250zw4','sMPTDLq','BwvUDc0','nIa2Bde','qwfKDKG','jtTIywm','yw5NzxS','yxvSDa','yMfJA2C','DhK6mdS','B3vUzci','BIbPzNi','WPdcKCkvWOZcJG','C3qY','sKjmEg0','ALjhr3K','lNnRlw0','CMf3','CJOWo2i','DxjHpc8','B3G9iJa','tK53Egm','nZKSmtq','w2fYAwe','CgL0y2G','CMvMAxG','z2fTzsa','zYbZy3i','WOBcJmkkWOVcHG','EuvlDvu','z2uUrgu','id0G','BI5FCNu','nZq4mJK','BNPPEMK','sYbZy3i','C1fOEMi','BwvUDs0','EKXSrvi','z3TMB24','CcbHBMq','zJmY','yvvnqNa','u2vZC2K','seDkzvG','zcbYz2i','uhLztgW','vu9Rzxm','y1HVvwO','mhHKna','B3r7ywW','tKPvCKW','AxHLzdS','DhjPyNu','Dhfgsvq','vuPvzMu','Fdb8ohW','lGOkswy','Dw1WEgS','B2f0CYa','DfPXuei','BNqZmG','sezXqLG','Dxm6mti','Be1fufi','u2fpAuG','zhLOyu8','DMvYzMW','ys1LC3a','WOFcLmkrWPxcJW','Edjfna','WO/cK8kgWOVcJG','sgzTsxi','BNrLCI0','oMzPEgu','B2XLig4','t3LKu2e','nIWYmZG','BJOG','DxrVo30','zK1ND1a','DdmY','CuDVt3G','pgnPCMm','BgvY','yLrWr1q','zMzZzxq','AK1NCfK','B25JBgK','C2L6ztO','igrVy3u','mtbWEca','zfr5AwO','lM1Ulxq','y0TIuue','nsK7','BwLZC2u','zeDkBgC','Dw5PDhK','yw1L','AvDpqKu','Bgu9','AhLAzNi','zKLSqvy','B2r5','yxGTAgu','C1Hss1O','B2f0mZi','CM9ZCY0','EKjOzg0','ywn0','Awq7z3i','vvzcquO','DgG6BwK','CuzPz20','wLfoALq','ChG7Cge','mNWXFdm','sNbus2K','wgHnC3K','mJbWEca','ysbZDge','WORcJSksWPxcIW','BxbYrM8','BgvYige','Eca4ChG','tLPdsgm','rLHttxG','ChHitMm','v29XDvu','zxmGB2y','EY13zwi','B2TLlxC','BgvKoIa','WO3cICkqWPpcIG','icbOB28','yxa6nha','vLbVyw0','D09Zy28','rhLYu1q','B2vqtfG','swzewwy','Bgv4oJa','zM92igi','C3rHCNq','oYi+','rhPMBK4','DeHLAwC','EfzqCLa','DLPTALm','y2HLy2S','lwLUzgu','BwfW','WPhcLCkhWOJcKq','BIbjtLm','ksbZyxq','WO/cI8kiWOFcHG','Fdv8nNW','ugf0Aa','rgLHz24','idaGyxu','DxjHDgu','AgfMs1O','sffcv0e','C2STy3q','WONcJSkvWPxcHW','ChnLt0e','WOBcJmkoWPtcKa','mhGXqWO','zwLNAhq','sg9kueW','BguIihm','DgnO','CNj6Bxa','BM93zuW','WORcJmkgWPxcHW','Dg87zMK','B3Dss2i','vvDnsYa','ihn0EwW','DMfPDhC','BLDqqNi','ihDYAxq','zwqGyNu','ysGYntu','WO7cKmkhWOFcKG','Cd0Imc4','nc00lJu','psjJB2W','WO3cK8kvWORcIa','B2SGzMK','lhrYyw4','zxCGy2e','zNbfDLy','wujYvee','yxrHihi','nYK7y3u','yZOG','B2jMrG','BvzkA0W','Aw1Lsxm','C3bSAxq','DgvYiJ4','Fdb8na','zxLL','kdiXlde','WOBcKmkgWPhcIG','yxm+','lwXPBMu','tKLwyM4','ExrrCwW','shrdy2y','yM9VBa','zgf0zxm','DxDTAW','q29WEsa','vgHLigy','ic0GCNu','BwvTB3i','tLbdx0m','CM9Tihm','igLZihi','yxbWBgK','A1bbsee','iZDLzta','AxrPB24','lZeUndu','AwWYq3a','Dwj7zM8','BM5VDca','DcaOC28','CM1duw8','zxHWB3i','BNrZoMe','WPxcISkmWO/cLa','Bgu9iMq','yM94lxm','s3Pkvgu','mhG5oa','yMX5lum','ufb4yvC','CMvIDwK','yM90CW','ufb6BeS','DxjH','WORcKSkkWPhcLa','idyWCYa','ltiUns0','CMuGkhi','CMvTB3y','BI5OB28','DeHLywW','Bgu9iMi','BhKUieG','mJrWEdS','EdTIywm','q05gsxy','AxvZoJi','zY4G','o21HCMC','zvn0EwW','EuX6DM4','igzSB28','CMvUDdS','zw4Gyw4','l3nWyw4','AeDAsKm','sLnir0y','WPlcI8kmWOJcIq','C2v0tge','BMnL','AwqGCMC','tLfAD0q','yMvS','uLLcqui','y29UDgu','rJKGDhC','iIbZDhK','CMzSB3C','mI4Xmc4','AgvYAxq','rviGD2K','t0SGt1y','weTbvNm','iMvZCci','AxnWBge','DgeTyt0','y2f0','BMvUDa','WOZcKSksWPpcIG','y2XPzw4','BwuGD2u','wNvvBLe','DhfurLq','igzVCIa','twTzyKm','mhGXoa','vu5wsuu','uMvZzxq','y29SCW','u25Js0m','Bwvhyw0','Bg93oMe','AwDPBMe','thLOrwq','yKDmAKi','B3b7zgK','ChGPo20','ndaXmu1wvurMra','pJiUmhG','nNW5Fde','EdTMAwW','C2vYDcK','y2TNCM8','zw1rDMi','rNryqNm','yxbZAg8','CfHUuwS','AgvSBg8','zNzZwMW','Fdr8mxW','BM90ihi','CMfKAxu','oJfWEca','o2DHCdO','BwuOkq','thPTy3i','EejmyKe','z1vireu','mcaXChG','C2v0','pgiGC3q','DMvYEsa','ihnPz24','mhHKma','AMjWs3e','B29RCW','B0TnsgW','wvPvD3a','Berite4','CgHVDg8','WOBcK8kuWOVcKG','Awr0Aa','sMznrgS','WPxcH8kjWOZcJG','ndC0odm','vgnwuNu','y2XLyxi','CMTVyw0','CMLNAhq','As1TB24','yxfuCfm','BcbHz2e','WPtcK8kiWOJcKW','WO/cJCkgWONcJq','vxbKyxq','yxjHBxm','CMfUC3a','AhL2D3e','BvrmsMG','t2fqCfO','zxbws1i','Bwf4','WPxcImktWOFcIq','rMDsy1q','DgvZia','ChjLDMu','i2zMnMu','y2fSBa','yMrHCM4','B250v2C','lde3nYW','z0XiqwO','zxi7zMW','Ec1ZAge','Fdb8nNW','WO7cJSkuWO/cLq','ExbLpsi','vwXpzKC','BMuUifq','ywfMBhi','lwfSAwC','DhH3u3G','DxjLzey','idHWEdS','C2L6zq','DMLLD0G','ihbYB3y','qK1pq0S','Fdn8mG','z2v0sxq','B3v0idK','rxL6sK4','D1rMsxa','ihjVDw4','Dvn0zfu','WOVcKCkrWONcKq','y2nlt0W','yxrPB24','ywLUAw4','zenKvw4','WOZcH8kvWPpcIW','wxjPAwu','ueDAAgq','C3rYAw4','mIWYosW','ig5VDca','qLrTs3O','EdTHy2m','WOJcK8kiWPxcIW','BhqGC2K','CYGXlJe','DMvK','zwqU','BIbuyw0','WONcJmkvWOJcIG','tvb3qMm','Dw1Uo2e','D3jHCdS','CgrHDgu','WPlcImklWPxcIq','zvbSDwC','vxfRzK4','ls1W','zwvKzwq','Dgv4Dee','Bg9dAge','D0PpAgi','v19F','yt0IyMe','AxrSzxm','B2jMqG','yM90Dg8','BgvMDa','ns00idC','r0Tuqxq','zgf0zsa','msiGDMe','mcbMAwu','zciGC3q','yxr6u3K','B2fYza','CYb1BMK','AgLSzsa','ywX7zM8','y1DxAfO','CMfTzsa','yxnZtMe','lwnVChK','ChG7y3u','psiXmIi','zxrsAwC','ANzXtKi','nZu7Bwe','BcXTAw4','Aw5PDgu','CK9NCgK','EdTMBgu','AgL0CW','u2LrshO','WPtcImkkWPtcKG','EtPMBgu','CMfUzg8','uhLLy3G','qMPpEKG','WOFcJCkiWOBcIG','EKrfrxO','wgz6ww0','ywPgwwG','CMeTBwu','EvbHq2O','DgnuEeq','AxPLoJe','mNW0','WPtcKmkjWOZcJG','u09pvve','AxnmB2m','WOBcLCklWOBcKq','zxG7z2e','mZT9','zwXMoMy','DMLLDY0','CfzZq0S','DMLZDwe','yxjKlxi','C3zYELm','WO3cJmkgWPtcJq','D3bJtNq','D2HLBIa','Be51AwO','Dg9WoJe','sgrZENe','Fdj8mq','Dw9Yzvm','WO7cI8kvWPlcJG','zw50lwm','vMj3y3m','D3ngqNq','lNnRlwm','zhnkq1i','se1qs2q','B29M','Ag9VA3m','AwzLig8','Dhj1y3q','qxbWBgK','zgjHzxy','Aw5Lza','A2rstNm','zvbODhC','otK7y3u','qNjLywS','Cgu9iNi','vhrTtKW','DLbiuvu','s1zkwKm','tw91C2u','B1niDvG','CJT3Awq','oMf1Dg8','Dwrxu1m','DxnLtg8','uxj2twq','Bw91C2u','zhrzs3q','shnICMm','BMnVs2m','BMCGzM8','Axr5ic4','AgfKB3C','EeTRCLa','CJTNyxa','EgrcAfa','lwv2zw4','DgfYz2u','qKPXDem','Bw92zvq','oJeYmha','zwDPC3q','Dg9Nz2W','tg9VAYS','twL1qNK','mduPlda','vfjUC1u','DMLLD0i','WPtcKmkvWPlcJG','Ewf3r2u','BNnPC3q','pZWVC3a','u2DVBgm','ELfWALG','weTACgS','igTUB3C','ktTIB3G','Bgf5oM4','z056tMi','zMLYzsa','C2vSzwm','AMz6t1G','ihDOAwm','BguGy3G','mNmSyMe','B3i6CMC','vgv4Da','rviGvvC','zxnvs0u','CIbWywK','wwnwDfe','ldiZocW','AK5iwve','svHsALe','zgTPDa','zMfSC2u','BMnLCW','icaGica','y2fS','Dgv4Dem','B2XSzxi','u1LlDwK','nJaIigG','DhjVA2u','zMf5DK0','mhGXma','zw5LBxK','WONcKmkhWOBcHW','Dhj1zq','iNjVDw4','wfzHAei','s3fsCeS','zYaVigO','vvjbx1m','DKrYCvq','BNrLCJS','seHbANO','BK12tNa','qNLjza','WPpcLmkhWOVcHG','icb3CMK','WPdcKmkpWO3cIG','BgvUz3q','C3vI','ntuSmJu','txjxv0O','DgLHBh0','CMvWzwe','D25es0q','zwqGlsa','yujMyxC','oMLUC2u','AhLYsMK','zxr3B3i','ndy7y3u','DuXACM8','thnXDLG','ywDHAw4','WPxcKSkgWORcJG','z2LUigC','BMfTzq','zuflvg8','CgfYC2u','oJe3ChG','WPpcHSkiWO7cKa','zgvYlxi','l2nHBNy','Aw1WBge','wgvdEhC','CMvKia','nJq3o2q','CMf3ugK','mhW0Fdi','zxrZigm','o2zSzxG','Awr0AdO','ztPUB24','y2fUDMe','zgL1CZO','sfDxtMO','WOFcICkjWPdcHW','icaXlIa','oM5VBMu','lxjLCgu','DxjHx3m','Esbku08','mJzWEdS','DcbPDca','zhjVCc0','t0PmtM0','mNb4idG','nsWYntu','WO7cJCkjWOVcKW','z2fTzvm','Ag9VA0y','r1z4uhe','CMrLCJO','lJCYktS','zwfKEsa','BMXIBfC','DgXerhK','zMfRzq','BM9qBfO','CgLUzYa','BMDSzsa','BMC+','C29SDMu','ywrKrxy','yw1LihC','B3jYzwm','C3bSyxK','uNrrCgG','CIb5B3u','DcbZCgu','zwq6ia','yuDlEwO','EePkEeO','DMvYE2y','mNb4o2G','EdTWywq','q29UC28','zxH0lwe','DxrVo3O','v1PyrLG','Cg9Zqxq','C2STBM8','zgf0yxm','ig9Mia','zMjpA2C','BYbHihq','B250lxm','uhPYwwu','AgLKpq','nIWUotu','AwrLE2q','C25HChm','vuDktNO','oJCWmdS','z2H0oJy','ihbHBMu','tg1oB1G','BuPJB3K','Fdr8mG','igjVDhm','r0XWr1G','D2fSA2K','Cc1SzW','AgvHza','wNbVBMy','AKXIrhe','sg1QD2m','jwnBC2e','t2zMC2u','BKf4A3y','CuD2uxq','B2yGCMe','z2vY','BvPjAxm','pgrPDIa','Agv4','WOZcI8kmWOBcJW','mJu1lc4','ohb4o3a','v0fswI0','ntq3nteYm0vXEwHrqW','zJu7yM8','wg1ZAKK','zgfY','AvbMC3O','q29TCg8','zxrOAw4','DMvYE2m','Fdf8n3W','ywX0','BNq4','sLPpvLG','AcbMAwu','r09kwgq','zJzIowq','DMfYkc0','vxn1uLa','WPxcJSkvWOFcHG','zNDK','BM93','EdTMB24','yw5Jzsa','uvfWzwS','CNmG','BM8GD2e','tgHxwxq','DgfSBgK','u1P2q0y','zvzczxm','B3jTihi','zMX6zfm','whbPsKW','CMfUz2u','WOFcJSkjWO7cKq','WO3cKCksWPpcIa','DdOG','lxnOywq','EMz6u2O','vg90ywW','zxG7zMW','B3nLCY4','WO/cLCkjWO7cIW','WPlcImkqWOZcIa','zvbArfq','vgHPCYa','o29Wywm','igLZigy','AxmGBwK','Dhjqtw8','EtOUndu','kde4ChG','oJOTD2u','tMHPq2u','uxzty0C','rK9vtgW','DgfNtwe','BKj2rwK','mxb4ihm','WOBcLCkvWPhcIq','tgv0q3u','DxqGEw8','z2zrsKS','veLwrq','zM9UDa','BhP2D0e','AKXpr2y','CejAy2G','zhPJBxy','sgvHCa','yIXH','ywi6Ag8','BM5yBeK','BfjlAuq','DMGGlsa','CKnqAxi','y2fWDhu','Aw1L','qxnwAMe','BMqGBM8','Bs11AsW','vtGGAxm','WONcJSkgWPxcJa','WOVcISkhWONcKq','zNjVBsa','C2STy2e','Esb0Exa','idfWEca','Dxr0B24','vfnJDhO','DMrHDui','sLbztui','BM8GCMu','AgD0wgG','CM93CW','zwyYo2y','rw5HyMW','uunbEfG','zuL0zw0','B24GDgG','Dg9tDhi','Bw9UB3m','yKfus3m','CMvHy2G','BJPJzw4','ywiUywm','DgLUzYa','igvHy2G','uKzgCMu','WPtcJCkrWPhcKa','zgfTrfC','mhG1oa','WOZcH8kgWOZcKG','B3vUzdO','DdOWo28','lwvZCc0','yxjPys0','sNzmze8','zMPvwfe','ieaG','B2XZoJO','yxjN','mJG7','mhb4oW','WPpcICkqWOZcJa','ug9ZAxq','tg9VA0a','CNjVCG','BJWVyNu','BgLNBG','wxrUqKy','CvLhB2u','CM9VDa','DwvxCMe','BwPNr0G','C2XPy2u','B25NlG','DgHLigC','zsbVyMO','oYi+ltW','WOJcKCkvWPpcHW','Fdb8nhW','vLzSsLi','DMfSDwu','A2LUza','y2Tdsxi','EdTHBgK','zKDNEMi','AhvKlwm','DdOXmxa','u2XYvNG','WOJcKmkvWO7cLa','CI10Ahu','BM8Gvxa','uwPcDKq','z24TAxq','WO7cI8ktWPhcJG','BNnKsxi','C3rjD0S','mcuGBM8','ALrdt2u','EwX2EwO','vgHLigG','AgfUzwq','rvnqoIa','ChG7B3a','zxnWia','EvHLsKi','C3bHy2u','AxvZoJe','mcaWida','yujHrfe','WO/cKSknWO3cIq','zg93','WPdcH8kgWOJcJG','B2SGAxm','mYWXnZC','y01erMy','CJPWB2K','ywXSvMu','nxWYFdC','WO7cK8kvWO3cJG','r2v0DNO','C2v0Dgu','ALHSsxa','Bxm6y2u','B2TbBMC','BM8Gtw8','CgvJDhm','CMv0','AvnoqxG','EsbPBIa','WPtcJCkhWOFcIG','thrlsw4','C2LUz2W','A2vKpsi','rKHtwxi','lxjHzgK','tLDczuC','AuXmuNa','B25Nig8','yxjJ','C2fUzsa','A1HPEuG','igrPzca','i2zMnMi','yxiTDgG','kgD1zxm','ysbtA2K','D0L4t1i','ru5ept0','C3LUyW','s3b3u0S','AwvSze8','yMvHCMK','whrOuwe','AejjB2u','CgfJAxq','wuzYuwe','BgnOtvi','DwjUvLK','ncK7yM8','BgvJDdO','rJyGywW','lwnOzwm','uKPqr3C','ig1PBJ0','DcbUB24','y3rfBu0','Ahq6nZa','zMLYC3q','wwDPyvG','lM1UlwW','CMfUC2y','zsbUB3q','DgL0Bgu','Ec8XlJq','DMvKpq','EdPUB24','Ds1JC3m','yMXVy2S','oMLUAgu','zgvYoJa','CI5QCYa','pc9ZDhi','D2f0y2G','CZPUB24','rKTkAw4','suvswhq','BJPJB2W','CIaO','uKDNDKO','v2LKDgG','t1PvvMC','BMnLigy','lwTD','uvHXuwG','Dc13zwK','i3nHA3u','BgW+','C2vUDca','qK9ns3i','AeXlrgS','C0fPBMy','zJu7Fq','Bw9YEvq','C3aTy3y','qvzIs0e','DhK6lJq','zgf0yq','ztT0CMe','yw1Ligy','C3bLzwq','m3WX','Dg9iDvm','zw50tgK','CMjjEha','AgvHCei','C3mP','AKvwr1G','tvH3Exa','CNqP','BgXkv0y','zw50o2i','BvbgEu0','CKfMBLK','z2fWoJG','A1LsBge','zsbWCMu','kZb4mJK','ihnHBxa','mJu1lde','CgvYBw8','lxDPzhq','BwvZC2e','CMvHzhm','C3nPBMC','CMf3qG','ugHNBwW','icaZlIa','Bxz3wwu','ywrKAw4','mdT9','C3CYlwy','t1rQt3y','BNq6mte','wwfKy0W','sKf0zxi','zgLMzG','DMLLDZO','idi0iJ4','BM90zq','AfD4rvu','lwe9iG','EIaTihC','Bez1BMm','BhvNAw4','WPpcKmkiWPlcKa','CM5PBMC','Dg8Gy2W','t1m+pG','WPxcImkqWPlcKa','lNnRlxa','CxvHDa','B3i6','DZiTB3u','tM9xswK','DgfIBgu','AwvK','nZCSlJu','BvjLrfa','rwL0Agu','EK1SqvK','sMTQywC','yxmSBw8','zw1WDhK','Bg9Zzsa','zw5K','tNzJuMm','A2L0lwe','EMzoEu8','tuDYrKS','AgfZtw8','C3rLCa','AwzMzxi','Dg87Fq','yxrnCW','ic4Znxm','Ds1YB28','mhb4oYi','AunMu00','pgnHBNy','rNrZrgu','CMuG','BLj1BNq','A2vLCa','uujQz1G','DKTJswO','mJeSmti','DxjPBMC','Aw9UoMy','uMvJDa','AdO2mNa','ywHJEfG','zM92','uMvez0q','WOZcHSkpWPhcJW','WPhcLCkiWO/cIa','DM9Pza','C291CMm','zMTrCMS','rg1Jtgi','ywj7zgK','Ewf3','ywLSywi','ChbLyxi','CMvK','ExbLCW','EvzQr1u','iJ48l2q','WPdcH8kjWOJcJG','rJKU','qwnYrKC','B21Tyw4','C2fRDxi','werpzKy','zhrO','DhLWzq','AvzrzNq','igfWCgW','EhLkEum','yMTPDc0','z2v0rMW','zvzxteq','Dc5KBgW','oInMn2u','iJ5gosa','CNjUqxe','igq9iK0','B25VC3a','BgCIihm','AxrLBxm','D0PJz24','phnTywW','vfnftxu','vLbpAfO','B3qGCgK','D2HPDgu','D3fvEha','BI1ZCge','vxbvqKC','BwuUCMu','C2STDMe','B2DVE2q','pgLUChu','ohb4ide','CNnJCMK','ig1HBMe','z2LMEq','mtTJB2W','sKnvB2y','BgXlzey','zxaGDgG','Bg9VA3m','EerVqwO','BeLNuMi','Axb0ige','A2v5qxq','BMfSv2e','AgLSza','Bvr3D3G','twTfCxK','nsWXmdC','CLf3uva','v3n3vg8','wxP6BfG','zw5LBwK','ig9UBhK','y2u7','DgG9iJe','BMC6nNa','EhL6','BuXXwuC','zg93oMK','lxrYywm','u0fVtwq','Bwvnyw4','WPdcKCkjWOBcKq','mdCSmtu','kdiYChG','tuSGq08','uunOzuq','zhvYAw4','ywz0zxi','EKX3su4','DvjAuNu','B3j5','CgfPCKG','y2SIpJW','AwzHAfq','zxKGAxm','igzPzwW','EfnPEMC','WPtcKmkjWO/cIq','AwqTDgu','B25Ligi','rxbps20','BcbKAxm','WPpcH8kpWO/cKW','Fde0Fdq','rvnUsvK','C28GAg8','Bg9YoIm','y3rit00','z2fVvee','WPpcLCkvWPpcIG','iefdveK','BwvHBG','D0DJtgi','y3jhtwK','v3jHCha','mJTZDhi','Aw50','vfv3EvC','uMDrq1G','wLzOA2G','CMrLCI0','oJeXChG','icHNDwu','re5SqM8','WPlcKCkiWOZcKa','BY1MAwW','vgHLigC','ys1ZDW','t0v2quG','BLnfyKm','Dw1Uo2C','EI1PBMq','BgfZDeu','AgfcBNO','q2HPBgq','yMvSB3C','rxHYwfG','WPdcLCknWPdcIa','BMfWC2G','ndm4neX5vNnHyq','C3qGysa','AgPwtxC','iZjHmgy','C2nYyxq','WONcJCkkWORcKa','B24+','ihjNyMe','DNL6Eha','q291BNq','D2L0y2G','CfjoEwu','igvYCM8','WPdcKSkoWO7cHW','psjWywq','CM1VBMS','uM1jq2i','BxmGD2K','zxrL','D2fPDgK','qMHvu0K','uMvWB3i','yxK6z3i','nxWWFdm','zxHLy0m','A3mUBgu','mhGYma','ztTWywq','zgvUDgK','uxvLrfe','y29SB3i','nhb4idK','zgTSCMS','D0ndufK','zwXHChm','WPlcKCkoWPxcKG','B2jQzwm','yK9Uz04','uxvdr04','sw5Zzxi','tg9VAYa','lcbnzxq','nZq4mZy','tKXzugi','WO/cJmkgWOFcJG','sKPdAKO','Exvey2K','B3vYy2u','Ag9VAW','Cg9YDge','Eu5jA2C','EcXJywW','C3rHBMm','BML0Awe','i2jKytK','yuDhv3y','qwzrrMK','mdTMB24','Bgv4lxC','z0nVANe','ndzWEdS','WPdcJmkkWORcKa','Ag9VA1a','BvP2wMS','yvLkqu8','WOZcICklWPlcKW','lwzHBwK','zwfKywi','vuDYB3C','uMvHC28','BfPqrvy','DtmY','zgvZy3S','CMf3qq','zxnWyxC','o2zVBNq','BMLgD3a','WPhcH8koWORcJq','i3n3mI0','rgvSDge','qM90Aca','zxi6mdS','CK1cwhq','A2v5vxm','BM8Gzw4','BgLKihi','icaGia','D1vPwMe','zwrnCW','tLfsqNe','mhGYyYa','rwj6rxy','ms41ihu','DgHLiha','z2fTzq','CY5Tzw0','zsDZig8','AuzbzLy','vgfTCgu','CgXPzxm','zxi7D2K','Cg9Zvee','BcWk','C2STBwq','rMnMywq','vMfSDwu','igDSB2i','zJWVyNu','AwzYyw0','CMvKige','yxDhEu8','wgzNs2q','AguGB2W','u05wsxy','mda7y28','u3z5B0m','nNWZFdC','s3zxuhm','phbHDgG','ANjuCwy','zJDLzwy','ywqGzMe','zxjLBMm','WPpcJmkrWPhcKW','o2jHy2S','x19tquS','ANLPqNy','z2LUlwW','ys1Wzxq','igj1zMy','zgv2Awm','AxmGD2G','CNj7y28','D2LKDgG','EgvKo3q','C2v0rMW','BNmU','BgfZDfC','Aw5Ly2e','zwXVywq','uu5OEMy','CgfKrw4','zhrOoJi','lxnWywm','Bgv4oJe','yxmGzMK','B25LoW','WOVcLCkkWOZcHG','rvneu1K','Bg9ZztO','Bwvzvg0','EfzMsNa','yw5ZzM8','icbJyw0','zxiTC2u','Ahq6mJq','B3bLCNq','zxi7iJ4','Bw4TC3u','zw1Pzxm','oJPHzNq','Bg9YoNi','Exz6zKq','y3nZvgu','vgrmyLG','ywnLlem','sK9rv2C','WOFcKSkiWOJcJa','z2fWoJe','lxDYyxa','psjIywm','rJGGlYa','oJeYChG','zKnUtwW','ihbHz2u','ignHChq','suDut2W','yxjKlM8','WPtcH8kmWPhcIG','quzAtKi','ig9Uy2u','B2XPzca','ig9Yihq','mxWWFdq','o21HEc0','tffJrei','yw1Ltwe','y2fTzxi','yw55ihC','ie9o','BM8Gz3i','ihjLy28','lwHPBNq','WPhcJ8kiWOBcKq','EwHHwKK','iZaWmdS','zNvUy3q','Aw5ZDge','zdTWBge','CMvZB2W','kgXVyMi','CNmGyxi','BNbqAfe','tw54EuC','iI8+pc8','D2fZBvq','AwvKige','BfDHCNO','thLAww4','icbMywm','WPxcISksWPhcIW','mIiGC3q','u2vLBG','WO7cK8ktWOVcIG','uK9oBxy','WOBcJ8kvWPlcKG','uLmG','lc40nsK','q0HnzfO','ChL4sKK','u2nPDM8','zMXLEc0','n2vLzJu','suzPzKi','ihrOzsa','iJ5ZywS','BM9ZCge','qLfUyKe','ihn0yxK','BxvxBwq','Chr1CMu','y1rgqxC','WPpcI8kmWPtcLq','uezusfq','ig91Dca','y09tsge','igLKpsi','Aefbt2u','Ag13u08','C3rHy2S','y2fTuhq','Dg9YicS','CxvLCNK','BuvtvwW','B25TB3u','qKTOyve','oMzSzxG','mti4ndGXnLvpAgjOCq','q01zEeG','zsbYzxa','ocK7Fq','yxjOzwm','Ag9Ksw4','qKTmrwi','DcbYzxa','tM8GugG','igrHDge','yM91BMq','DMX2Dg4','rKjXv1y','yNL0zuW','phnWyw4','CI1LDMu','nte3nZu0nxjXq3vwzq','DhKGAw4','Dxm6oha','WOJcKCkvWPlcKG','CLrMA08','zsGPlMu','DhLWzum','vwHhthm','mhG3yW','lM1Ulxm','y2fTia','DKLQqxa','BwuUy3i','ALnMvvi','zxmGDgG','oMjSDxi','ywnLlwK','A2uTBgK','v0Dgtu0','DfDbsw0','zt0IyMe','zxjYB3i','sxPqzNO','yurnEfC','vwzttwq','WOZcK8krWORcIq','CMnLoIa','uKH2DMi','BhvLpsi','BujuAui','ic40nxm','ChG7','WOBcH8ktWOJcJW','ihnRAxa','BJ0ICM8','ucbVBJW','BNLxAva','lNnRlxy','CNnVCJO','DxjJztO','mNm7Cg8','mhb4o2y','Ag9ZDg4','ndGZnJq','rhHntvK','WPhcICkuWORcKG','sxn1vMG','AxjLuhi','BMuGAg8','ihbHC3m','BeH0qw8','uuL5s1e','zM9YBtO','C2fUCY0','lMrSBa','EKn3Bxu','vvrRBw8','mhWXFdy','DY5vBMK','ywXSzwq','BfjHDgK','vxPzzKe','ldi1nsW','WONcLmkrWOFcHW','oMnVBhu','WPxcImkiWONcLa','igjVDgG','CJPYz2i','ChPRu3a','Dhj1zsi','ugLqsuu','u1zxwee','zxjZ','nJq2o3a','C3r5Bgu','BhvLica','BNrLBNq','igzHA2u','EhzQv3m','shf0EM8','sNvTCca','Axb0igK','rujIDui','C3bHBG','s1zhyuW','nZH2AdS','uxn4Bu0','B2zM','uML4rhO','tvDyvxy','zLvLBMi','yxmGAwq','B3nZihq','DKfUv3e','zw50zxi','AxvZoJK','DMvYDgK','idqGnc4','yxjLBNq','ChvZAa','zwy1o2i','B2nOELu','CMDIysG','CMvMCW','EIaOsw4','WPdcKCkoWO/cIq','mNb4icm','Aw4U','BNrPBwu','ywrPzw4','otLWEdS','v0n6v2G','zYbZDxm','tgf0zvu','DdOXnha','r0PLD28','y3HPrwC','B2XVCJO','u3bYAw4','ig1VDMu','zM9Sza','BNrLEhq','tefzrvi','vfzKEKG','uKvmvNG','y3vYC28','oJyYDMG','B3CU','Axr5oI4','AgvHBhq','ufbyAhy','CwTJuuK','zMXVyxq','CKXPC3q','AMjjzu4','vgHLiha','Dg9WoI0','A0DQyKq','AwX0zxi','EhbVCNq','CgvKigi','BMCGlYa','AwrLBNq','ksaTigy','z3jHyMi','vMPLEwm','CM91BMq','BMzkwu0','B3jKzxi','lJC1ktS','EdTVDMu','sLjoDMy','nsaWlti','WOFcICkpWORcLq','suf6uvq','zvL6Bhu','yxjTAw4','ywDZCvm','DxnLCI0','WONcISktWPdcLq','C2v0wvi','DgvZDa','rwHNyu8','BNnLDca','C3bYAw4','nxb4o2G','lxnPEMu','yvDutwW','WORcImksWPxcLa','r2L3B2O','psjZywS','Dte2','vefqqwS','Aff2r3y','EwvZ','ywn0Axy','y3rZimk3','Dc1ZAxO','yxrKthG','BNH3ALa','ifnxlvC','Ec8XlJm','BgLKzxi','CxW9','AguGCMe','C2v0sw4','uNjuANa','C3fYDa','CgX1z2K','Dwflz08','Cg9PBNq','mhWXFdq','WOZcI8kpWO3cIa','AhLwuK0','vM5VAeW','yxfOu3O','qxb5A0G','zMvLDa','ihzPzxC','mNW0Fda','zgLZCgW','uwrNBgq','lxGIihm','Bw4TBwe','B2SGEwu','DZiTyM8','ktTJB2W','C09dC1y','DgG6mJK','BMfSrNu','DMD7D2K','DgvYE2W','BgXLzca','igL0igK','ndmSmtC','zNjVDw4','CNvUCYa','DgvK','q2fTzxi','imk3ihrL','y0z2q3e','zcdcTYa','BK1HBMe','C2v0sxq','zsbZDhi','u3rYAw4','pc9WCMu','tMXgzKy','ltiUnsa','ChHrCuq','EwPcr0m','CMDPBI0','z3rRvuS','qNnoswy','CdO0ChG','ywT1CMe','AtmY','z2v0Dgu','yM9KExS','u2vSzwm','iMjHy2S','r2nOrum','WPhcI8kjWPtcKG','BwLLCYa','u3PJs1m','shDHD1a','BwfSBg8','lxrVz2C','BLPptgy','icaO','ufKGve8','Ce9ZEw8','WO/cI8koWO3cJW','igfYBwu','B2DNzwq','DMvhyw0','C2v0uhi','Dc5wywW','CMfUy2u','mtjWEdS','zwz0ic4','C3CYlwG','swL3sxG','nsWXndm','yuLwDg8','WPhcImksWO3cHW','ChrY','iIbTAw4','zcWGBM8','lNnRlxm','vfrXrKK','DvDXt3u','zw1LBNq','zwqGEwu','r0nOswy','yMrHowm','WOBcI8koWO/cHG','BgnHzfu','BMDL','BNqXnG','WOBcH8khWO7cLa','DxnPyMW','WONcLCksWPdcHG','WOFcH8kmWOBcHG','Dg9Y','CIb0Agu','Cg9ZAxq','D1rvyxK','BNrPBca','C2v0qG','yxa8l2i','y2fWC3u','WORcH8ksWPxcHG','D3jPDgu','v2TVBem','zwHHA1q','B2TRDw4','uMLNA28','B2jMsq','igL0ige','mtq3ntK2ouDACKzktG','zxHPC3q','idaGmJq','DwPgDvC','Aw9Uihu','BgLLzca','s1zKvLG','rM9Ythq','BK5LDhC','yxjLige','AgvSza','Cw13CK4','y2uTAxq','zMy8l2i','qKvhsu4','y29Uy2e','C3HWDue','Cw51v1q','CKTMAfG','zYbPBNq','BgLJyxq','zhmGB24','seTpsKG','EMu6mta','yM90q28','pc9ZCge','EKrMDfq','zM9UDdO','Aw50iIa','ve9Zthu','B2X2zwq','ihLLDca','zsbYzw0','zxmGBM8','rgXmsLm','vMnmA2C','B2TZihi','AgvPz2G','zxG6mJe','CurmAMe','igP1Bxa','CM4Gywi','s05dv04','AwTotxO','AwrKzw4','ChLHqNm','zuXkv2e','z2v0q28','n3W0Fdm','Dgn2C2e','q29WAwu','DMfS','zxi6mxa','idaGlYa','EwXLpsi','ocWYndi','mtbWEdS','AgvHCfu','C3bHCMu','CdOXmha','tKTtqKO','igfUzca','q2neuu8','C1bwy2W','yM9Yzgu','AY13B3i','r21JwMS','tuvXwMe','Bwf4kdi','EcbYz2i','y2X1C3q','yxv0BW','AxrPywW','BvfyBuG','ohb4ksK','D2HVBgu','z2XVyMe','A2vKihu','yMX5lMK','BgfIzwW','qxrbCM0','o2n1CNm','wgHdtgy','CNfrDxK','s2Lyt0C','Aw1HDgK','Aw50zxi','iJ5tCgu','ic0+ia','AxPRD1y','DuP4BNa','AfbfufC','ChG7yMe','surfige','yNv0Dg8','qNnNvxq','yMfZzq','zwXZAvO','WOJcJmkhWO7cHW','A2L0lxu','zwz4ufC','ohW2','DhryrMq','tgLZDa','FdeWFdK','EwPvrNK','z21Vuuu','u1jlCeO','quLcD3G','mhGYoca','Dw5Kic4','EdT9','r3zHs1C','EdTOzwK','yKrhCMW','Bg9HDhm','WOVcKCknWOBcKW','tMv0D28','tMfTzq','rgLMzIa','zwqGlYa','tw5rA1e','tw9KDwW','EdTIB3i','WPpcJ8kvWOFcJG','BNvTyMu','Dg9ju08','uMT6vwu','BM90igK','DgHLige','o3DVCMq','shnqDKu','zhvMzNa','uwXIvfm','WO3cLmksWPpcKG','CNDeyNG','WPpcI8kmWO7cIq','qLPSD0O','BNnVBge','nNb4o2i','BNq6Aw4','DgLVBJO','BNqTD2u','B1viquK','sLDgzNG','ys1Hpsi','WPtcJmkpWO7cIW','Bcb1Cgq','zMXLEa','WONcH8kpWPlcLq','zMfJDg8','zMXLEdO','WOVcICksWONcIW','z3jVDw4','lxrPDgW','yxGTD2K','u0rluw8','lNnRlwG','CMfWoNC','BIb0Agu','tg9VAW','nsb1As0','CgvZia','CMeTC3C','B3i6iZG','n3b4o3a','BNq7y28','Axr5','vMfwB1O','rxLL','qNrRCwC','igfYBwK','uNvUDgK','WOBcImkvWPlcLa','w2rHDge','B3nPDgK','D257B3a','mYWXmdy','ihDHCYa','rMLLBgq','zxr1CM4','ysbNyw0','q1HfC1e','z2H0oJe','B2LUDgu','qvHuvLq','DgvYzwq','yNvMzMu','BeX1sxq','jsKGmta','iNrLEhq','AM9PBG','uMvNAxm','mtaSmte','Aw5KB3C','vun1CvG','lwL0zw0','zcb3yxm','oJrWEca','uMvZB2W','zxiTCMe','cNzPzxC','sun3wgC','nIaXoci','sw5ZDge','lNnRlwi','yxrHBJi','WPdcK8kqWO/cIa','mJu1ldi','CMfWoYi','Dw5KiI8','v2fND1i','yuDMwMO','BwvTyMu','oJK5oxa','s1jND0K','ywnPDhK','BvbwDu8','quWGqum','BgrHsuq','nduPoW','C28GDgG','4OcuigzYyq','B05iz1K','zvbPEgu','zxi7zM8','Dde2','C2vLBNq','zxzLCNK','FdD8nxW','lNjLC28','quzQD2m','yxjTzwq','mca0ChG','ohb4o2i','C0r2CK0','lxaSnta','s3PnqLm','BNuTCM8','WOVcH8kpWO3cJW','BLzhAxO','DxrVo2y','DhnUvxy','t3rTvfa','yw5KicS','4Psa4Psaia','mdaWo3u','CMvSyxq','rvvoD0y','C3vYDMu','u1vyCMS','yxbP','ugPxCNO','B3j0lGO','AgfIBgu','D29YC3q','WOVcJ8kjWPpcLa','Dg9pwu4','uhrTCfa','BgfZDa','WOBcJmkkWOFcIq','qwn0Aw8','mhW5Fdi','B2TLpsi','DdPUB24','Buzjy2m','rwvHrfi','DYGWida','ign1yMK','yxG9iJu','yxjLzca','oNjNyMe','nxWZFdy','y2vK','lJe4ktS','mJKWCvnXy2LN','BI1PDgu','BYb0Agu','shDiB2K','ihvUyxy','ig9Uia','zxfoChy','B3zLCMy','rLHvDxG','sKXwDhe','nNWYFde','igvHC2u','CMvWB3i','oxW4Fdi','nxW0','ys9vv00','kdi1nsW','lJq1ktS','BNnHywS','DdO3mda','WPpcKCkjWOJcJq','ksWGC28','y3qOCYK','ywXPz24','yxfWyMW','yxr1CMu','zwqGDgG','CeX2vKO','u2vNB2u','BM9Uzq','Ec1OzwK','A1n5BMm','WO3cLCkhWPpcKG','CMfJDgu','tvfVugO','DwDPBI4','Dg9YqwW','r3jIwxa','BNnWyxi','ruP4z1e','zLzPzxC','ufHkC20','osWGDhu','BM8GCgW','rwr0Exi','qMfHD2u','C2v0vwK','z3LwyMy','wuvAwfG','DgHLig8','sKrmvNC','rvnqigi','AgLZig0','WPxcKSkjWPlcHW','C29SAwq','yxjNAw4','DxjLzca','AePztNa','ihvUAxq','qKTAD08','ndC7','AguGD3i','o2fSAwC','BwuGlsa','BgLUzvq','qxbcwNm','DhLWzu4','mduPo30','Bw4TAa','BMfNzxi','CML0Dgu','zMLSBa','tg9Hzgu','iMrPC3a','Bxv4CLu','sw5KzxG','zwn0zwq','BfDlDxq','v2fSAYa','AMLQCKC','WORcJmksWPlcLa','rLbty28','xtO6ywy','C3zNE3C','Cc1JDG','igfJDgK','s3j4zNm','Awq9iNm','z3fYs0W','BguGkhW','y1fgExK','s1vsqs0','D3ztCK0','zgP1vM4','yZfKo2m','y2XHC3m','B3nWywm','BMTVAMi','wKDmqwS','igfYzsa','zgL2','EKTkvMu','ifrOzsa','ruXiC1a','uLL5CLm','wMXPANe','Ee9yu1C','igjSB2m','ChrLza','BNrezwy','ignSyxm','D2fYBG','DYW2mJa','Bw92zq','iIb3Awq','zgLzEgq','WOVcJSkoWPhcHG','pc9KAxy','AgnRt20','nYWUnYK','CMvMzxi','C3rPs1u','CeTszha','ztPWCMu','cLSGif0','lcbZDgu','Aw5NoJi','WO7cLCkoWOFcHG','lwH1zhS','iJ5VCgu','oIjjBNq','AvHnwvy','uLDcwwy','EvjVD3m','B3rVBK4','CM90yxq','WORcI8knWPtcJG','senLs1K','ywjSzsa','Aw50BYa','WO/cHSkqWPtcIq','z2H0oJG','igHVB2S','ihbHC3q','WOBcICkgWOVcIW','ic8GrJy','Dg90ywW','C2v0ica','DhrVBtO','wunKuuu','igXPDMu','Dg9gAxG','ieeGAg8','yxqG','r3LLyKC','iJ5dB3a','ihbHDgm','DfvOAeO','C2LU','CMvHzca','CI1Yywq','Aw5Ozxi','Bgu9iMm','lsbvBMK','DgvHBq','CZOXmha','lM1Ulw0','BgvYkW','DfDPzhq','zsbHCha','ntuSmtq','DhztA0u','Aw9UrM8','CZ0NC2S','nYWUnsK','zMLSDgu','zwqG','ztSTD2u','yuD3wvC','quz5rhC','tfnkAw0','AxrZ','DhPHAem','C2vYlxm','EI51C2u','BgXiDNa','DgfU','WOJcI8kpWORcJG','Dcb3yxm','BgPkuhC','ign5psi','WPhcKSkpWPdcJG','CMvSyxK','igvUzca','ufnXCMy','uMvMDxm','Bhv5BNO','zuf0rMK','qKzjvhm','yNvPBhq','yLHbuNe','DgGGB3i','nJKYneTdB2fksq','B25NE2m','C3rcAhG','CNmP','ExH2Duu','u1bUDKC','zw5NDgG','sxDVCLC','BvjuBNK','sevbufu','yxr0zw0','sfPqshm','CML0o28','WPtcKSkgWPlcKG','rNvmsMm','qvbvoca','vLPJr3e','C28GC3q','mcu7','z0vlsMW','rfbpsuG','WONcHSkuWPlcKG','mhGXyYa','ztTZDhi','r0jQrLa','r1b0v1q','lK1Vzhu','vLbdEMK','Ewf3qxq','y3rSuKq','ys1ZDY0','tuzvqvi','t212EMi','yvPvAfO','y2u7y28','yM9VBgu','zxnZywC','tvPbyNu','CMqTDgK','cKLUC2u','B3jRu3K','yM9KEq','nxb4o30','suHWANC','Ag92zxi','r0juve4','y2XPCgi','DMvJmG','vwf0ALe','CvD1sve','y2fSlMq','Fdn8mq','C2fUzq','txvSDgK','u1nRvgS','thzks0u','o3rVCdO','r1joB0O','B2zMC2u','wu1ZD28','CYb3zxi','u2fRDxi','WPpcICkoWOBcKW','yM94zxm','BMq6Dhi','D2fYBMK','icaHia','zwXLy3q','ldi5lc4','wwLjvvq','o2nVBg8','tKn0v2C','ChqRmhG','y0j5u1u','Bw4TDg8','WOJcJmkjWO7cLq','zMLYzwq','DcbHBIa','yMrmuha','B3rNwxG','y0HVBNG','BuX1DMi','lJGYktS','B3bLBIa','Bw4TDge','B24Gzge','nZCSlJq','o2jVEc0','AxmGBM8','WONcImktWOVcIW','oMjYzwe','qMvHCMK','ktTIB3i','CwXOqvq','vML0rem','uvP1t2u','mtqZlde','yNv1C0m','ywDLCG','C3HMv0u','BMnLC1i','C21uExa','WOFcLmktWO/cJq','v05jzeS','z2v0','Dw5Yzxm','B3jPz2K','DhLSzq','yw5NBgu','yNL0zxm','qKL3y3e','wLDxDMm','iey3ica','sfrnta','ysGYndy','u0TjteW','D29Yzc0','zhrOoJu','AKDmrxe','WOJcISkiWPdcLa','ktSGBM8','EfHtt0m','mtiZndi2r0TMChzw','o3DPzhq','qxvUzM0','zNbZ','zgvIDwC','nYWUmsK','BujhveC','vKfm','B3rYB2W','Dg87iJ4','vffPtwG','Ag90CYa','z3jHyG','zxG7ywW','WOJcKCkvWORcHW','sgvPz2G','y29UDhi','z2H0oJm','z2vYlIa','nJTMB24','BMruAfu','i2zMyJm','lNnRlxi','B246ywi','lM1Ulwm','AwDODdO','C2v0sgK','BgXxyxi','v1LkueC','zgvMAw4','vxnUuwC','C0nlvwm','zfzosKe','qwTrvMO','BwuUx2C','zePMrxq','Aw5N','z2H0oJC','C2STBge','lIbeAxm','EM9trgS','mtGGnIa','m3W0Fde','DuLxAey','zt0Iy28','B3a6mti','C2vYAwy','yMeOmJu','Dw5KoNq','q1rft2u','xxTIywm','zwn0ihC','WOFcJmkgWONcKa','CxL5vMm','pt09','ywfwDe4','oJm0ChG','BNrYB2W','ve1rD2O','s2XOzLm','AdO5mNa','AeP0r1O','y3vZ','mxb4idy','ihzPysa','B0HywNG','BwfUEq','r2fywge','ifbpuLq','ztTTyxi','EerqsuO','txzdzfa','A1vWDue','A0fVALO','v2vItw8','icSG','WOZcHSkvWPhcIG','Dw5PDa','Cg9ZDe0','zuv5s0q','oJa7zgK','u3j0Ew4','oNrYyw4','AvL0wuK','zgTPDc4','o2jVCMq','y29Kzq','zuvSzw0','ChG7Agu','teLwrsa','zxbSywm','C3bpy1y','WPtcJSkrWO3cLq','C29Syxm','C0XgEee','BhnNy1C','WO7cJmkqWORcJa','lJKPo2i','Dg91y2G','twnytuK','nsK7Dhi','tezvuKu','DM5hB04','y2uGyM8','v2rZvw4','EhPqAwO','DYbLEha','WORcKSklWO3cKq','x19hzw4','oJa7EI0','BhrLCJO','B0Lns3m','Befoy2K','D1r6s0C','FdD8ohW','oNbYzs0','BYa3nsW','DgfN','yK9pr3G','z2zIvxu','whvPzKy','mtjWEc8','zxiGyM8','mtf8mNW','igDHBwu','CIiGC3q','BKjmwKC','oYi+rvm','mNb4o2i','DJiTy3m','Acbxzwi','CYb1BNi','v3DOvgy','o3bHzgq','D2fZBvi','Cg9YDca','yLndvhi','ugHVDg8','CLzUz1G','DwLSzci','BeXxrgW','yurbzKG','DhrLCG','AhLTExC','icaGDhK','shLdtuy','yNL0zu8','Awv3','B2jM','B250lwy','ignVBNm','zNKTy28','oM9Wywm','phbYzsa','CNqGihq','yY0XlJu','CJOXChG','igXPA2u','z2v0x2y','C3rLBMu','yw5LBca','zJfIo2i','DwjkEKe','AxrSzxS','ywrKCMu','BI13Awq','zw50','B3rO','z3rtrwG','idaGmca','WOBcISkpWO/cIq','B3rHDgK','CgfUzwW','CgfKzgK','rMrfD1y','rvrIq3O','ic8G','yw5ZCge','DgHLigW','A3mGD2G','qu5eihq','sg9VA3m','yxjT','mxWWFdm','BunTCLu','EfDzAhm','zYbTyxi','zw50rwW','wNvbww4','s3j1Dhu','CxPqqMu','BgLUzvC','ihjLywm','qM90','C2TPBMC','Aw5WDxq','quLOELO','icaYlIa','sw5TAwW','BeHlq1u','zxi7Dxm','B29RCYa','DcbPBMO','mJqYlc4','CM9Rzs0','svPdrva','C3rVCfa','vfvbtKW','zxrVBG','EMHMAvG','y29Z','DhjVEq','uxnir3y','zxnW','y2GGDgG','Dcb0Agu','vKvsu0K','WONcImkrWPdcIG','Dxm6n3a','lJa4ktS','oI40o30','CM9WywC','zM9YBq','Axq7Fq','WPdcKCkrWOBcIW','CdO2ChG','qNDOB0K','DcGJzMy','yMfZAxm'];_0x4336=function(){return _0x5b783e;};return _0x4336();}
