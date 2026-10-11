// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.9.9
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

function _0x1d88(_0x5850a5,_0x16ce77){_0x5850a5=_0x5850a5-(-0x26*-0xaa+0x1c58+-0x113f*0x3);var _0x509899=_0x581c();var _0x46aac5=_0x509899[_0x5850a5];if(_0x1d88['kDcrvJ']===undefined){var _0x4261d9=function(_0x3bd41b){var _0x1c4c4f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1ac903='',_0x66e4ca='';for(var _0x2431a1=-0x14e8+0x11b5*0x2+0x26b*-0x6,_0xc35de2,_0xcfb742,_0x487ab6=0x8a6*-0x4+0x164*0x12+0x10*0x99;_0xcfb742=_0x3bd41b['charAt'](_0x487ab6++);~_0xcfb742&&(_0xc35de2=_0x2431a1%(-0x1*0x157+0x15*-0x1ae+0x24a1)?_0xc35de2*(0x3b*0x7+-0x1fdf+0x1e82)+_0xcfb742:_0xcfb742,_0x2431a1++%(0x788*-0x2+0x47b*-0x1+0x138f))?_0x1ac903+=String['fromCharCode'](-0x25f5*0x1+-0x1d11+0x62f*0xb&_0xc35de2>>(-(0x2*-0x483+0x99*-0xb+-0xf9b*-0x1)*_0x2431a1&0x1e*-0x87+-0x3bb+-0x1393*-0x1)):0x212e+0x9*-0x28e+0x4*-0x28c){_0xcfb742=_0x1c4c4f['indexOf'](_0xcfb742);}for(var _0x1f2289=0xb15+-0x7c5*0x2+0x475,_0x59fc81=_0x1ac903['length'];_0x1f2289<_0x59fc81;_0x1f2289++){_0x66e4ca+='%'+('00'+_0x1ac903['charCodeAt'](_0x1f2289)['toString'](0x3*0xdd+0x1b01*-0x1+-0x187a*-0x1))['slice'](-(-0x337+0x9fa+-0x6c1));}return decodeURIComponent(_0x66e4ca);};_0x1d88['clfPFm']=_0x4261d9,_0x1d88['FDPfRR']={},_0x1d88['kDcrvJ']=!![];}var _0x279e14=_0x509899[-0xb*-0x382+-0x1763*-0x1+-0xc65*0x5],_0x31ae30=_0x5850a5+_0x279e14,_0xa36894=_0x1d88['FDPfRR'][_0x31ae30];return!_0xa36894?(_0x46aac5=_0x1d88['clfPFm'](_0x46aac5),_0x1d88['FDPfRR'][_0x31ae30]=_0x46aac5):_0x46aac5=_0xa36894,_0x46aac5;}(function(_0xd394b,_0x3702a4){var _0x379f15=_0x1d88,_0x9deb=_0xd394b();while(!![]){try{var _0x59adc8=-parseInt(_0x379f15(0xaf6))/(-0x315*-0x9+0x19a0+-0x355c)+parseInt(_0x379f15(0xc2d))/(-0x12*0x9d+-0x29*-0x9b+-0xdc7*0x1)+parseInt(_0x379f15(0xbae))/(0x21d8+0x1115+-0x32ea*0x1)+parseInt(_0x379f15(0xcbf))/(-0x20a0+0x173f+0x965)*(parseInt(_0x379f15(0x4f8))/(0x3*0x8d3+-0x1dbb+-0x347*-0x1))+-parseInt(_0x379f15(0xdac))/(0xd03*-0x1+-0x1606+0x230f)+parseInt(_0x379f15(0x966))/(0xe0e+-0xbb*-0x3+-0xad*0x18)*(-parseInt(_0x379f15(0xbbc))/(0x91e+-0x1f*-0x68+0x19*-0xde))+parseInt(_0x379f15(0xb21))/(0x1c33+0x10f1*0x1+-0x9*0x503)*(-parseInt(_0x379f15(0x8d5))/(-0x153b*0x1+-0xac7+0x4*0x803));if(_0x59adc8===_0x3702a4)break;else _0x9deb['push'](_0x9deb['shift']());}catch(_0x2ea8b8){_0x9deb['push'](_0x9deb['shift']());}}}(_0x581c,0x4755b+0x904c4+0x2*-0x45297),((()=>{'use strict';var _0x3b5618=_0x1d88,_0x4830a0={'GujuA':function(_0x495fa0){return _0x495fa0();},'JCtzb':function(_0x544463,_0x2b876f){return _0x544463!==_0x2b876f;},'LLSFx':function(_0x19d26d,_0x4ff95c){return _0x19d26d===_0x4ff95c;},'LToCM':_0x3b5618(0xaf0),'FyvzN':'jdpQk','MCYEm':'FEFRL','snauQ':_0x3b5618(0xd79)+'e','MtPMf':_0x3b5618(0x81f),'zEoof':_0x3b5618(0xb0e),'VJMAN':_0x3b5618(0xd04),'sJgAp':function(_0x57fd3f,_0x2f45a8){return _0x57fd3f+_0x2f45a8;},'HFQPS':_0x3b5618(0xbd1)+'ok\x20fi'+'red\x20a'+'t\x20','WPdWE':_0x3b5618(0x402)+_0x3b5618(0x38d)+_0x3b5618(0x658)+_0x3b5618(0xda5)+'=','gfoyK':_0x3b5618(0x8b9)+_0x3b5618(0x267),'dmlfp':'xtopm','OiRDQ':'sakur'+_0x3b5618(0xaeb)+_0x3b5618(0x6b5)+'b','lDHKE':'RjugA','xEWux':_0x3b5618(0xc6f),'iorLN':'borde'+_0x3b5618(0x7d8)+_0x3b5618(0xa3d)+_0x3b5618(0x62e)+'paddi'+_0x3b5618(0x231)+_0x3b5618(0xd48)+'x;fon'+_0x3b5618(0x6ea)+_0x3b5618(0x982)+'\x20ui-m'+'onosp'+'ace,C'+'onsol'+'as,mo'+_0x3b5618(0x49b)+'ce;','XrLpF':_0x3b5618(0x978)+_0x3b5618(0xaeb)+_0x3b5618(0xd8b)+'s','VVcSf':_0x3b5618(0x9b7)+_0x3b5618(0x74b)+_0x3b5618(0x99e)+_0x3b5618(0x629)+_0x3b5618(0x8f0)+'}','KjBbS':'zdfXj','kgxBJ':_0x3b5618(0xa29),'QHgyv':'close','xZOla':_0x3b5618(0x536)+_0x3b5618(0x23f)+_0x3b5618(0xbc9)+'9)','wXtTz':_0x3b5618(0xdbb)+'b','vBhBr':function(_0x2e135d,_0x3f42f5){return _0x2e135d(_0x3f42f5);},'PcXmy':'snaps'+'hot','cjQOv':_0x3b5618(0x6d1)+'a\x20Ski'+'llWar'+_0x3b5618(0x501),'NkkXx':function(_0x5b558c,_0xfa81d7){return _0x5b558c===_0xfa81d7;},'eSoWh':function(_0x3105a4,_0x44af3c){return _0x3105a4+_0x44af3c;},'SUcND':_0x3b5618(0x679),'aoAfJ':_0x3b5618(0xd55)+_0x3b5618(0x84e)+_0x3b5618(0x5a9)+_0x3b5618(0xa5a)+_0x3b5618(0x51e)+'n\x20rel'+_0x3b5618(0x56a)+_0x3b5618(0x505)+'e\x20ins'+_0x3b5618(0x71b)+_0x3b5618(0xa3b),'vrFTJ':'\x20\x203.\x20'+_0x3b5618(0x769)+'sakur'+'a.ski'+_0x3b5618(0x415)+'z.use'+_0x3b5618(0xb98)+_0x3b5618(0x584)+'he\x20ol'+'d\x20dia'+'g\x20scr'+'ipt\x20a'+'re\x0a','dEmtv':function(_0x3d8928,_0xc09c3d){return _0x3d8928||_0xc09c3d;},'QRQTk':function(_0x200143,_0x29b994){return _0x200143!==_0x29b994;},'NTkFt':_0x3b5618(0xce8)+'|0|4','KjzWH':'#ff6e'+'74','cdMWf':function(_0x5c5ade,_0x538154){return _0x5c5ade+_0x538154;},'Crvsk':function(_0x14fa23,_0x14f54b){return _0x14fa23===_0x14f54b;},'TdWPy':_0x3b5618(0x536)+_0x3b5618(0x537)+_0x3b5618(0x554)+_0x3b5618(0xd6e)+')','aGJWc':function(_0x5e70bf,_0x453e84){return _0x5e70bf/_0x453e84;},'IUZtI':function(_0x5eb09e,_0x457c72){return _0x5eb09e+_0x457c72;},'sENLX':function(_0x52519d,_0x525d04){return _0x52519d+_0x525d04;},'TdpsI':'\x20obje'+_0x3b5618(0x764)+'\x20','SIjBZ':_0x3b5618(0x290)+'a8','btIRE':function(_0x16cd2c,_0x1c2966){return _0x16cd2c+_0x1c2966;},'SCSIl':'BlOHy','BKbny':function(_0xe1aaeb,_0x202cf6){return _0xe1aaeb+_0x202cf6;},'APqbg':'metad'+_0x3b5618(0xb59)+'eady\x20'+'·\x20','SaJkB':'armed'+'\x20·\x20','NOMyU':_0x3b5618(0xce5)+'g\x20·\x20','cvuxS':'Diff\x20'+'vs\x20sn'+'apsho'+_0x3b5618(0x284),'mKtwV':_0x3b5618(0xabc)+'ice\x20w'+'hile\x20'+_0x3b5618(0x597)+_0x3b5618(0xafd)+_0x3b5618(0x9a0)+_0x3b5618(0x73e)+_0x3b5618(0xd0c)+_0x3b5618(0x57c)+'marks'+'\x20whic'+_0x3b5618(0x4e5)+'ld\x20is'+_0x3b5618(0x599)+'h.','pNCne':_0x3b5618(0x2ed)+_0x3b5618(0x4fa),'JDDuM':'#f7ee'+'f5','xkZaW':function(_0x454853,_0xa56c18){return _0x454853(_0xa56c18);},'KRiOK':_0x3b5618(0x6fb)+'kura]'+_0x3b5618(0xcd8)+_0x3b5618(0x3fb)+'\x20repo'+'rt','vzhcH':function(_0x4c092b,_0x595aff){return _0x4c092b+_0x595aff;},'uaazo':'\x20Obsc'+'uredF'+'loats'+_0x3b5618(0xa96)+'ed','EXadl':'backg'+_0x3b5618(0x8dd)+_0x3b5618(0xb7f)+_0x3b5618(0x784)+'olor:'+'#f7ee'+_0x3b5618(0xcc2)+'rder:'+_0x3b5618(0xa4d)+'olid\x20'+_0x3b5618(0x536)+_0x3b5618(0x537)+'43,17'+_0x3b5618(0x76b)+';bord'+_0x3b5618(0xa24)+'dius:'+_0x3b5618(0x2cf),'pTWLG':_0x3b5618(0x3eb)+_0x3b5618(0x56d)+_0x3b5618(0x5c2)+'i-mon'+_0x3b5618(0xdbd)+'e,Con'+'solas'+',mono'+_0x3b5618(0x1dd)+_0x3b5618(0xda9)+'shado'+'w:0\x202'+_0x3b5618(0x830)+_0x3b5618(0x2ce)+'20px\x20'+_0x3b5618(0xb93),'ewNsT':function(_0x4e0d7d,_0x3696cc){return _0x4e0d7d+_0x3696cc;},'Ffozr':function(_0x58f8d7,_0x2e0195){return _0x58f8d7+_0x2e0195;},'QbLAV':function(_0x400209,_0xf1f7e){return _0x400209+_0xf1f7e;},'aXROb':function(_0x2c2bed,_0x211676){return _0x2c2bed+_0x211676;},'NyAyW':'<span'+_0x3b5618(0x4f1)+'sw2-b'+'uild\x22'+_0x3b5618(0x262)+_0x3b5618(0xce6)+_0x3b5618(0x598)+_0x3b5618(0x912)+'6;fon'+'t-siz'+_0x3b5618(0xd47)+_0x3b5618(0xa40)+_0x3b5618(0xbc7)+'1px\x206'+_0x3b5618(0xa16)+'rder:'+_0x3b5618(0xa4d)+'olid\x20'+_0x3b5618(0x536)+'255,1'+_0x3b5618(0x554)+'7,.35'+_0x3b5618(0x5f6)+'der-r'+_0x3b5618(0x388)+_0x3b5618(0xdb4)+_0x3b5618(0xcdf)+'?</sp'+'an>','QAVOl':'<butt'+_0x3b5618(0xb1d)+_0x3b5618(0x237)+_0x3b5618(0x437)+'tyle='+_0x3b5618(0xc86)+_0x3b5618(0xa49)+'d:tra'+_0x3b5618(0xcf5)+'ent;b'+'order'+':1px\x20'+_0x3b5618(0x416)+'\x20rgba'+_0x3b5618(0x271)+_0x3b5618(0x974)+_0x3b5618(0x531)+');col'+_0x3b5618(0x260)+'7eef5'+';bord'+_0x3b5618(0xa24)+'dius:'+_0x3b5618(0x644)+'addin'+_0x3b5618(0xa33)+_0x3b5618(0xa15)+_0x3b5618(0xca5)+_0x3b5618(0x2b2)+_0x3b5618(0xa87)+'\x22>x</'+'butto'+'n>','bHnHc':_0x3b5618(0x52f)+'id=\x22s'+_0x3b5618(0x296)+'dy\x22\x20s'+_0x3b5618(0x72e)+_0x3b5618(0x6d9)+_0x3b5618(0x9ef)+_0x3b5618(0xc90)+'>','nVRCj':_0x3b5618(0x52f)+_0x3b5618(0x86d)+'=\x22pad'+'ding:'+_0x3b5618(0x90b)+_0x3b5618(0x7c9)+_0x3b5618(0xbe5)+_0x3b5618(0x257)+'om:1p'+'x\x20sol'+'id\x20rg'+_0x3b5618(0x9ad)+_0x3b5618(0xc91)+_0x3b5618(0xc98)+_0x3b5618(0xb97)+_0x3b5618(0x95b)+_0x3b5618(0x664)+'ex;ga'+_0x3b5618(0x6b6)+';alig'+_0x3b5618(0x42f)+'ms:ce'+_0x3b5618(0xa87)+_0x3b5618(0xa6e)+'0\x200\x20a'+_0x3b5618(0xa92)+_0x3b5618(0x3a5)+_0x3b5618(0xa99)+_0x3b5618(0x737)+'>','AGRmi':'<inpu'+_0x3b5618(0x24c)+'\x22sw2-'+_0x3b5618(0x5db)+_0x3b5618(0x8f9)+_0x3b5618(0x74f)+'ange\x22'+_0x3b5618(0x947)+_0x3b5618(0xb1b)+_0x3b5618(0x55c)+_0x3b5618(0x5b0)+_0x3b5618(0x7d5)+_0x3b5618(0x500)+_0x3b5618(0x48f)+_0x3b5618(0x812)+_0x3b5618(0x589)+_0x3b5618(0x430)+':120p'+_0x3b5618(0x28a)+_0x3b5618(0x849)+_0x3b5618(0xa83),'OWTNf':_0x3b5618(0x26f),'qaPYT':_0x3b5618(0xca1)+_0x3b5618(0xb1d)+'=\x22sw2'+_0x3b5618(0x997)+'\x22\x20sty'+_0x3b5618(0x48e)+'ackgr'+'ound:'+_0x3b5618(0x934)+_0x3b5618(0x406)+'t;bor'+_0x3b5618(0x4f0)+_0x3b5618(0x6e4)+'lid\x20r'+'gba(2'+_0x3b5618(0x660)+'3,177'+',.4);'+_0x3b5618(0xccd)+_0x3b5618(0x245)+_0x3b5618(0x716)+_0x3b5618(0xbe5)+'-radi'+'us:7p'+'x;pad'+_0x3b5618(0xbc7)+_0x3b5618(0x5c3)+'px;cu'+_0x3b5618(0xd7d)+_0x3b5618(0x652)+_0x3b5618(0x410)+'Snaps'+_0x3b5618(0x93c)+_0x3b5618(0x8ff)+'butto'+'n>','oCxua':_0x3b5618(0xa52)+_0x3b5618(0x39a)+_0x3b5618(0x7b0)+'t\x22\x20st'+_0x3b5618(0x589)+_0x3b5618(0xc57)+'n:0;p'+_0x3b5618(0x985)+'g:10p'+_0x3b5618(0xd48)+_0x3b5618(0x4ef)+_0x3b5618(0x90a)+':auto'+_0x3b5618(0x307)+_0x3b5618(0x58a)+_0x3b5618(0x73b)+_0x3b5618(0x2ea)+'-spac'+'e:pre'+'-wrap'+';word'+'-brea'+_0x3b5618(0xb8a)+_0x3b5618(0x2b9)+_0x3b5618(0x6c0)+_0x3b5618(0x429)+_0x3b5618(0xb70)+';','PZiZo':_0x3b5618(0x661)+'>','AdAKS':'#sw2-'+'build','rkLFw':_0x3b5618(0x79d)+'body','qZpPW':_0x3b5618(0x79d)+_0x3b5618(0xa75),'MKHle':_0x3b5618(0x79d)+'speed','LBoOh':_0x3b5618(0x79d)+'hint','YahdD':function(_0x3c6f3b){return _0x3c6f3b();},'AuQQr':function(_0x2a6b0d){return _0x2a6b0d();},'WHWja':function(_0x27b0f5,_0x549c16){return _0x27b0f5+_0x549c16;},'yCApc':function(_0x14677a,_0xdd5d05){return _0x14677a+_0xdd5d05;},'hwuFQ':_0x3b5618(0x9c3)+_0x3b5618(0xd3f),'hNJSW':_0x3b5618(0x1f2),'ftblC':_0x3b5618(0xb20)+_0x3b5618(0x8de),'ewWqt':function(_0x57439e,_0x4b875e){return _0x57439e!=_0x4b875e;},'VXIzE':function(_0xaf4577,_0x31acd6){return _0xaf4577+_0x31acd6;},'YWJbh':function(_0xfba58,_0x5397e3){return _0xfba58+_0x5397e3;},'qrGkc':_0x3b5618(0xc64)+'\x20\x20\x20\x20','QiGQJ':_0x3b5618(0x495),'QmgLJ':'no\x20Up'+'date\x20'+_0x3b5618(0x677)+_0x3b5618(0x4b3)+_0x3b5618(0xc39)+'\x20sign'+'ature'+_0x3b5618(0x72c)+_0x3b5618(0x65e)+_0x3b5618(0xb58),'PCJGI':function(_0xe39509,_0x5b8d2a){return _0xe39509<_0x5b8d2a;},'pZGao':function(_0x274039,_0x11b380){return _0x274039===_0x11b380;},'dXzsT':_0x3b5618(0x23e),'QtEJU':function(_0x1fba8b,_0x11f0b8){return _0x1fba8b<_0x11f0b8;},'ZVxCB':'LYNqE','EqENS':'numbe'+'r','dFiMo':_0x3b5618(0x7fa)+_0x3b5618(0x88b),'VhowZ':function(_0xe34ed8,_0x33d85f){return _0xe34ed8+_0x33d85f;},'BFzbL':_0x3b5618(0xb06),'djqbm':function(_0x4d425d,_0x4d86e6){return _0x4d425d!==_0x4d86e6;},'rBvTk':'rPwiw','lhZTS':_0x3b5618(0x8d9),'YbigH':function(_0x7a3749){return _0x7a3749();},'sddst':_0x3b5618(0x609)+'t','MuVOT':function(_0xe8889,_0x652c68){return _0xe8889!==_0x652c68;},'abeps':'gnMCa','GNdni':function(_0x4e5084,_0x280766){return _0x4e5084===_0x280766;},'HoteJ':function(_0x337b96,_0xbc7ff6,_0x512ac2){return _0x337b96(_0xbc7ff6,_0x512ac2);},'vHxbm':'oDElM','Kekpr':_0x3b5618(0x615),'VLtcS':function(_0x1f7d68,_0x5b1afd){return _0x1f7d68<_0x5b1afd;},'qVuXP':function(_0x3bb749,_0xda6987){return _0x3bb749<_0xda6987;},'jFdYH':function(_0x1967f0,_0x1cb948){return _0x1967f0===_0x1cb948;},'rjwiP':'RZtQf','LYiLZ':_0x3b5618(0xc65),'lKrKt':function(_0x1294b8,_0x15076a){return _0x1294b8===_0x15076a;},'NYlPS':_0x3b5618(0x57b)+'ntiat'+'e','VYgeq':function(_0x4b00a6,_0x41c12d){return _0x4b00a6!==_0x41c12d;},'InMaF':'Runti'+_0x3b5618(0xb6d)+_0x3b5618(0x1db)+'lugin'+_0x3b5618(0x5aa)+'ailab'+'le','LavMu':_0x3b5618(0x978)+_0x3b5618(0x393)+_0x3b5618(0x415)+'z','MBtNG':function(_0x480ac6,_0x20ccff){return _0x480ac6+_0x20ccff;},'HbQAv':function(_0x1c565e,_0xe27d60){return _0x1c565e===_0xe27d60;},'XBafO':_0x3b5618(0xab1),'KszSD':_0x3b5618(0x796),'wgEAZ':'plugi'+'n._ru'+'ntime'+'.reso'+_0x3b5618(0x933)+_0x3b5618(0x7bf),'JsTkF':'plugi'+'n._ru'+_0x3b5618(0xd66)+'._gam'+'e','WaKfM':function(_0x286415,_0xd1456b){return _0x286415===_0xd1456b;},'rWtvK':_0x3b5618(0xd1f),'sXMrh':_0x3b5618(0xa13)+_0x3b5618(0xb75)+_0x3b5618(0x806),'TUFgV':function(_0x1d06b2,_0x206d9c){return _0x1d06b2===_0x206d9c;},'RfYYn':'bxSVK','ZryNJ':function(_0x3e6312,_0x10d6a9){return _0x3e6312!==_0x10d6a9;},'MCYRg':'undef'+'ined','LimaO':'bare\x20'+_0x3b5618(0x2b4)+_0x3b5618(0x261)+'ng','saBYk':function(_0x126e6b,_0x2aed6d){return _0x126e6b===_0x2aed6d;},'XjjYR':function(_0x12968b,_0x2219ef){return _0x12968b+_0x2219ef;},'bpFyt':function(_0x42888f,_0x3ecbe8){return _0x42888f+_0x3ecbe8;},'URpLX':_0x3b5618(0x47a)+'w.','wrzOF':function(_0x49b1f8,_0x322f51){return _0x49b1f8*_0x322f51;},'FRNgU':function(_0x1b386c,_0x48ddf3){return _0x1b386c-_0x48ddf3;},'bIVBY':'--p','SHQcg':'uoICe','VuNCc':_0x3b5618(0xa79),'QRhVq':function(_0x125703,_0x4126b6){return _0x125703(_0x4126b6);},'quQHl':function(_0x190418,_0x30c92e){return _0x190418===_0x30c92e;},'HFBGZ':function(_0x6cc3fe,_0xacbdbe){return _0x6cc3fe(_0xacbdbe);},'cYbww':function(_0x3c4715,_0x1da39d){return _0x3c4715(_0x1da39d);},'QjGZK':'PjDUG','bnPBf':'no\x20HE'+'APU8\x20'+_0x3b5618(0x8c6)+_0x3b5618(0x400)+'stanc'+_0x3b5618(0xa82)+_0x3b5618(0x320)+_0x3b5618(0x217)+'\x20via\x20'+'Runti'+'me.re'+_0x3b5618(0x7f3)+'Game('+_0x3b5618(0x36b)+_0x3b5618(0x278)+'indow'+_0x3b5618(0x2c0)+'al','HwXkO':function(_0x57098d,_0x5d853c){return _0x57098d>_0x5d853c;},'chuqG':_0x3b5618(0x705),'IFxnS':_0x3b5618(0x454),'BtTWJ':_0x3b5618(0xb3a)+_0x3b5618(0xdbf),'pTUsr':function(_0x477b7b,_0x2f54aa){return _0x477b7b!==_0x2f54aa;},'Seqsa':'i16','xNURH':_0x3b5618(0x835),'AEkaN':'f64','WxnhB':function(_0x2a2777,_0x50db52){return _0x2a2777&_0x50db52;},'NXLUd':function(_0x452ca8,_0x489107){return _0x452ca8|_0x489107;},'krlpP':_0x3b5618(0xacf),'hlsmk':function(_0x96059a,_0x1e9e33){return _0x96059a+_0x1e9e33;},'OlzOc':function(_0x49ee7b,_0x425032){return _0x49ee7b===_0x425032;},'KZzdZ':_0x3b5618(0x61c),'UfkJh':function(_0x2f2579,_0x1fc731){return _0x2f2579^_0x1fc731;},'GZRQu':'obfF','JKFZH':function(_0x3edf89,_0x211aad){return _0x3edf89===_0x211aad;},'RKQaJ':function(_0x45eb8d,_0x385923){return _0x45eb8d^_0x385923;},'JuFOI':function(_0x356c56,_0x254d24,_0x526785){return _0x356c56(_0x254d24,_0x526785);},'bvLEB':function(_0x55b3d2,_0x5dbf61){return _0x55b3d2===_0x5dbf61;},'SLnLe':function(_0x10145c,_0x1a8aff){return _0x10145c===_0x1a8aff;},'JCodD':function(_0xed44a0,_0x22009c,_0x462e3e){return _0xed44a0(_0x22009c,_0x462e3e);},'yYyHS':function(_0x2a0392,_0x1b4e1a){return _0x2a0392+_0x1b4e1a;},'wfEmX':function(_0x1fa2c2,_0x5decf8,_0x5c7ac2){return _0x1fa2c2(_0x5decf8,_0x5c7ac2);},'nogkX':function(_0x118945,_0x110870){return _0x118945+_0x110870;},'xjPIu':_0x3b5618(0x7f5),'vFGHV':function(_0x3b74eb,_0x532a6e){return _0x3b74eb+_0x532a6e;},'VVOOe':function(_0x42f01c,_0x706e99){return _0x42f01c===_0x706e99;},'Ohhxg':function(_0x5a3917,_0x24d58e){return _0x5a3917^_0x24d58e;},'mnJpg':function(_0xc15d35,_0x36bd91){return _0xc15d35+_0x36bd91;},'uMqaG':function(_0x492a92,_0x50dff7,_0x4cb04e,_0x3f9596){return _0x492a92(_0x50dff7,_0x4cb04e,_0x3f9596);},'SVVBa':function(_0x1acdd0,_0x38e4e8){return _0x1acdd0^_0x38e4e8;},'RZlNB':function(_0x5dc58a,_0x316bd0){return _0x5dc58a+_0x316bd0;},'VbJIe':_0x3b5618(0xd49),'lMfDq':function(_0x53c100,_0x3a2d4f){return _0x53c100(_0x3a2d4f);},'LsPih':function(_0x373b0a,_0x1cbdfb){return _0x373b0a!==_0x1cbdfb;},'roLsT':function(_0x30c4dc,_0x1e6c52,_0xeb61e9,_0x5ca3dd){return _0x30c4dc(_0x1e6c52,_0xeb61e9,_0x5ca3dd);},'TnOZO':_0x3b5618(0xa01)+_0x3b5618(0x794)+'e','aDIPJ':function(_0x4a16dc,_0x81c766){return _0x4a16dc===_0x81c766;},'kMwha':_0x3b5618(0x904),'aQURO':_0x3b5618(0xd1e),'QCTmM':function(_0x5ac72a,_0x1d5558){return _0x5ac72a<_0x1d5558;},'JidRM':function(_0x2f7be1,_0x30286a){return _0x2f7be1>=_0x30286a;},'CuCUz':function(_0x439cbe,_0x2283e1){return _0x439cbe+_0x2283e1;},'wAbbw':function(_0x126a8e,_0x1f2b08){return _0x126a8e<_0x1f2b08;},'LeVrB':function(_0xfd5421,_0xe3324){return _0xfd5421<_0xe3324;},'icqHW':function(_0x52c1a7,_0x3c6430){return _0x52c1a7+_0x3c6430;},'KNPLn':'trUHv','NAvem':_0x3b5618(0xb3f)+_0x3b5618(0x60b)+_0x3b5618(0x4c0),'JmGCw':'lBwMz','WyBCv':_0x3b5618(0x822),'lAxpc':function(_0x2c1633,_0xaab4ae){return _0x2c1633+_0xaab4ae;},'wIgbz':_0x3b5618(0x978)+_0x3b5618(0x8af),'Ggvsz':_0x3b5618(0x582)+_0x3b5618(0xda0)+'=\x22sak'+'ura-e'+_0x3b5618(0xce3)+_0x3b5618(0x942)+_0x3b5618(0x983)+_0x3b5618(0x4d3)+_0x3b5618(0x479)+_0x3b5618(0xb2c)+_0x3b5618(0x4ab)+'le=\x22d'+'ispla'+_0x3b5618(0x813)+_0x3b5618(0x85f)+_0x3b5618(0x291)+'as>','aFREx':'<div\x20'+_0x3b5618(0x39a)+_0x3b5618(0xbf8)+'-esp-'+'lg\x22\x20s'+_0x3b5618(0x72e)+_0x3b5618(0xac6)+_0x3b5618(0x30c)+_0x3b5618(0xcfd)+_0x3b5618(0x22f)+_0x3b5618(0x661)+'>','TwVAX':'#saku'+_0x3b5618(0x91a)+_0x3b5618(0x6c9),'chyPV':function(_0x5b3c0e,_0x4b7a8f){return _0x5b3c0e-_0x4b7a8f;},'mEXkn':function(_0x372c48,_0x138ecb){return _0x372c48!==_0x138ecb;},'ifaoX':_0x3b5618(0x711)+'ion','WPZun':function(_0x149822,_0xee0ff3){return _0x149822<_0xee0ff3;},'QHEDw':_0x3b5618(0x6d0),'ZccaN':_0x3b5618(0x44e)+'e','XhMvR':_0x3b5618(0xcc6),'exiXm':function(_0x20233a,_0x118e80){return _0x20233a===_0x118e80;},'MqRbk':function(_0x5c2f29,_0x1cd219){return _0x5c2f29-_0x1cd219;},'jadsI':_0x3b5618(0x88a),'qEtYo':'Mouse'+_0x3b5618(0x55a),'Nlxry':_0x3b5618(0xa34),'VrUHo':function(_0x126822,_0x30e2dd){return _0x126822===_0x30e2dd;},'MsNEL':function(_0x3612c8,_0x3ee3d){return _0x3612c8===_0x3ee3d;},'TEOen':_0x3b5618(0xa5e),'BmcUe':_0x3b5618(0x678),'YjpWK':_0x3b5618(0xa97),'mOGYp':function(_0x466d46,_0x12bcf7){return _0x466d46+_0x12bcf7;},'uFHbx':function(_0x46cfc8,_0x368f41){return _0x46cfc8+_0x368f41;},'XDGiA':'auto','LUONZ':function(_0x3cbf68,_0x49e3b5){return _0x3cbf68===_0x49e3b5;},'NNLhH':'RPyFV','oUDBv':function(_0x5ba9bc,_0x1847b3,_0x1015da){return _0x5ba9bc(_0x1847b3,_0x1015da);},'WjYLw':function(_0x1daa7c){return _0x1daa7c();},'VSFOv':function(_0x1803d1,_0x60e3c8,_0x48e495){return _0x1803d1(_0x60e3c8,_0x48e495);},'bYtdM':function(_0x43fd3c,_0x89bd0c){return _0x43fd3c>>>_0x89bd0c;},'RxUcF':_0x3b5618(0x36f)+'WebMo'+'dkit','PXntL':function(_0x7deefe,_0x364ac2){return _0x7deefe<_0x364ac2;},'MPPLi':'Photo'+_0x3b5618(0xa2c)+'orkSy'+'nc','REeXy':function(_0x169ce4,_0x237f78,_0x56c0da){return _0x169ce4(_0x237f78,_0x56c0da);},'qVPgI':_0x3b5618(0x2ad)+_0x3b5618(0x725)+'pt','FUsIp':function(_0x5c02bb,_0x73aee1){return _0x5c02bb<_0x73aee1;},'poosi':_0x3b5618(0x78e),'OdocK':function(_0x2c567f,_0x555913){return _0x2c567f in _0x555913;},'ULPLs':function(_0x338202,_0x431b0e,_0x541f7d){return _0x338202(_0x431b0e,_0x541f7d);},'SHpyt':function(_0x3e4d19,_0x5ececc){return _0x3e4d19>>>_0x5ececc;},'cOVom':function(_0x3eb322,_0x3e4bd9){return _0x3eb322>>>_0x3e4bd9;},'WGefR':function(_0x1eaedd,_0xba8496){return _0x1eaedd+_0xba8496;},'KqLjG':function(_0x3d7a73,_0x5e414c){return _0x3d7a73<_0x5e414c;},'jFzbk':function(_0x4e5f73,_0x1c1012){return _0x4e5f73+_0x1c1012;},'NYevd':function(_0x16f7a1,_0x316d95){return _0x16f7a1===_0x316d95;},'HrzkK':function(_0x404509,_0x38dce4){return _0x404509===_0x38dce4;},'WYXDL':'\x20show'+'n','SdXuF':_0x3b5618(0x667),'OcDMy':function(_0x216ec1,_0x1b9a66){return _0x216ec1+_0x1b9a66;},'lFfQO':function(_0x1bb935,_0xaa2d08){return _0x1bb935+_0xaa2d08;},'uJMgJ':function(_0x56f51d,_0x580093){return _0x56f51d+_0x580093;},'vOqMO':'hid=','yyLoQ':'\x20fake'+'=','BqrWW':_0x3b5618(0x9f7),'ewdCx':_0x3b5618(0xb50),'EVbPC':function(_0x55a0f1,_0x22fed1){return _0x55a0f1(_0x22fed1);},'QRdRK':'offse'+'t\x200\x20('+'int-w'+_0x3b5618(0x638),'RxkBA':function(_0x14bb3e,_0x496c57){return _0x14bb3e<_0x496c57;},'pOuog':function(_0xf1a62a,_0x495b1e){return _0xf1a62a!==_0x495b1e;},'TIZGK':'1|0|5'+_0x3b5618(0x956)+'2|3','ghwAe':function(_0x44dd32,_0x47668d){return _0x44dd32<=_0x47668d;},'IIOVs':function(_0x18dec6,_0x30178b){return _0x18dec6-_0x30178b;},'oDDSb':function(_0x49189e,_0x2a4942){return _0x49189e===_0x2a4942;},'YDUff':function(_0x16ee2a,_0x2d3601){return _0x16ee2a!==_0x2d3601;},'ruCMF':function(_0x376c40,_0x21d06a){return _0x376c40/_0x21d06a;},'uHixI':'gwHuN','FuDYp':_0x3b5618(0xc99)+_0x3b5618(0x673)+'3','JrryD':function(_0x9b9075,_0x165343){return _0x9b9075&&_0x165343;},'LFDrW':function(_0x44b629,_0x137f2d){return _0x44b629===_0x137f2d;},'thvWL':function(_0x5b1c44,_0x283b7e){return _0x5b1c44===_0x283b7e;},'NfPHZ':_0x3b5618(0xbb1),'ZwjbE':_0x3b5618(0x370)+_0x3b5618(0x5da)+'nce','lWZUQ':_0x3b5618(0x370)+_0x3b5618(0x5da)+_0x3b5618(0xc50)+'apper','VtUus':'Mouse'+_0x3b5618(0x832)+_0x3b5618(0x77c)+'a','DqEbA':_0x3b5618(0x7c4),'mvPqV':'10|9|'+_0x3b5618(0x648)+_0x3b5618(0x595)+_0x3b5618(0xa61)+'|1','stSrs':function(_0x4a4c3c,_0x1cd714){return _0x4a4c3c+_0x1cd714;},'oryTT':function(_0x4993b5,_0x2385e1){return _0x4993b5+_0x2385e1;},'EmLns':function(_0x3dfb70){return _0x3dfb70();},'tDDop':'boole'+'an','SBynI':_0x3b5618(0x2f6),'RXuEM':function(_0x3bbd5f,_0x16bea3,_0xef0784){return _0x3bbd5f(_0x16bea3,_0xef0784);},'fTJis':'.28','kvZPq':'RXDsN','BuOGm':function(_0x3ccfa3){return _0x3ccfa3();},'cGAJn':_0x3b5618(0x9e6),'WBgzB':'UKClL','JydAt':'backg'+_0x3b5618(0x8dd)+':rgba'+_0x3b5618(0x522)+_0x3b5618(0x754)+'.92);'+'borde'+'r:1px'+_0x3b5618(0x66a)+'d\x20rgb'+_0x3b5618(0x229)+_0x3b5618(0x21a)+'177,.'+_0x3b5618(0x6ac)+'order'+_0x3b5618(0x72b)+'us:10'+'px;','LvRFE':function(_0xb8e722,_0x3e37b5){return _0xb8e722+_0x3e37b5;},'CrUjl':function(_0x321d7c,_0x2889ca){return _0x321d7c+_0x2889ca;},'OeDAo':function(_0x5f15fa,_0x7703a8){return _0x5f15fa+_0x7703a8;},'oemQh':_0x3b5618(0x52f)+'data-'+_0x3b5618(0xbe4)+'r\x22\x20st'+_0x3b5618(0x589)+_0x3b5618(0x95b)+_0x3b5618(0x664)+_0x3b5618(0x472)+'p:6px'+_0x3b5618(0xac4)+_0x3b5618(0x42f)+'ms:ce'+'nter;'+_0x3b5618(0x877)+_0x3b5618(0x438)+_0x3b5618(0x91f)+_0x3b5618(0xa36)+_0x3b5618(0xc30)+_0x3b5618(0x302)+_0x3b5618(0x26f),'leBlY':'<butt'+_0x3b5618(0x346)+_0x3b5618(0xd3c)+_0x3b5618(0xa6f)+_0x3b5618(0x86d)+'=\x22bac'+_0x3b5618(0xa4c)+_0x3b5618(0x353)+_0x3b5618(0x9d6)+_0x3b5618(0x27e)+_0x3b5618(0x68a)+_0x3b5618(0x53a)+_0x3b5618(0x66a)+_0x3b5618(0x701)+'a(255'+',143,'+_0x3b5618(0x635)+_0x3b5618(0x7e8),'rYeHa':_0x3b5618(0xc08)+_0x3b5618(0x1f7)+_0x3b5618(0xad5)+_0x3b5618(0xcd4)+_0x3b5618(0xcee)+'range'+_0x3b5618(0xb6b)+'=\x221\x22\x20'+_0x3b5618(0x5de)+'5\x22\x20st'+'ep=\x220'+_0x3b5618(0x485)+_0x3b5618(0x728)+_0x3b5618(0x279)+_0x3b5618(0x72e)+_0x3b5618(0x2a3)+'h:92p'+'x;acc'+_0x3b5618(0x849)+_0x3b5618(0xa83),'jEACw':_0x3b5618(0xca1)+_0x3b5618(0x346)+_0x3b5618(0xd3c)+_0x3b5618(0x221)+'\x20styl'+'e=\x22ba'+_0x3b5618(0x94c)+_0x3b5618(0x243)+'ransp'+'arent'+';bord'+_0x3b5618(0xaaf)+'x\x20sol'+_0x3b5618(0x7c1)+_0x3b5618(0x9ad)+'5,143'+_0x3b5618(0xc98)+_0x3b5618(0x578),'OLlRt':'<div\x20'+_0x3b5618(0xc00)+'a=\x22st'+_0x3b5618(0x4ab)+_0x3b5618(0x2c6)+_0x3b5618(0xa83)+_0x3b5618(0x7e5)+_0x3b5618(0x969)+_0x3b5618(0x6f6)+_0x3b5618(0xd01)+'0px;\x22'+_0x3b5618(0xd93)+'v>','fiKmY':_0x3b5618(0x52f)+_0x3b5618(0xc00)+'a=\x22st'+_0x3b5618(0x901)+_0x3b5618(0x589)+'color'+_0x3b5618(0x88f)+'a99;m'+'ax-wi'+_0x3b5618(0x326)+_0x3b5618(0x1f9)+'\x22></d'+_0x3b5618(0x6c4),'EGUmB':_0x3b5618(0xa75),'emiro':function(_0x5cbbb1,_0x533b4d){return _0x5cbbb1(_0x533b4d);},'NjJRo':'esp','jQjrA':_0x3b5618(0x6fb)+_0x3b5618(0xcef)+_0x3b5618(0x88c)+'rame\x20'+_0x3b5618(0x275)+_0x3b5618(0xd12)+'ed','ejFqW':'ESP\x20o'+'ff','LFeVf':_0x3b5618(0xb48)+'ap','Lkauc':function(_0x1ec5ca){return _0x1ec5ca();},'cQoWf':function(_0x1e7d75,_0x2df385){return _0x1e7d75===_0x2df385;},'gdsHB':function(_0x2baa67,_0x53be21){return _0x2baa67/_0x53be21;},'gNlUi':function(_0x1edaae,_0x155983){return _0x1edaae+_0x155983;},'iELPm':function(_0x40dd31,_0x68a617){return _0x40dd31+_0x68a617;},'JSOlg':function(_0x191073,_0x3bb460){return _0x191073+_0x3bb460;},'yFMHg':function(_0x45bc7a,_0x7adf5a){return _0x45bc7a+_0x7adf5a;},'YfePB':_0x3b5618(0xb51)+'tes\x20','yhtnU':_0x3b5618(0x8eb)+_0x3b5618(0xa0d),'gRqRU':function(_0x5b58bc,_0x5b15ae){return _0x5b58bc+_0x5b15ae;},'fBcar':_0x3b5618(0x998)+'\x20-','YZEZb':_0x3b5618(0x7e5)+'99','CwNvg':function(_0x2154bb){return _0x2154bb();},'xTFbd':_0x3b5618(0x3a7)+'|4|0','uvaMa':_0x3b5618(0xcff)+_0x3b5618(0x538)+'s)','oQVir':function(_0x45e175,_0xdfbd18){return _0x45e175+_0xdfbd18;},'IdwBg':function(_0x3e652e,_0x158b41,_0x3a8ebb){return _0x3e652e(_0x158b41,_0x3a8ebb);},'eFSRI':function(_0x19b598,_0x14e454){return _0x19b598===_0x14e454;},'ZqLvX':function(_0x2d72bc,_0x224e0f){return _0x2d72bc!==_0x224e0f;},'ULRkJ':function(_0x428591,_0x155c12){return _0x428591^_0x155c12;},'GvHGK':function(_0x5e687e,_0x203394){return _0x5e687e===_0x203394;},'CZGFU':_0x3b5618(0x3ce),'KfCeD':'pWpPY','fFVJU':'SYetx','UglgS':_0x3b5618(0xc69),'OFmBH':function(_0x3c9dbb,_0x21c812){return _0x3c9dbb===_0x21c812;},'nEOAM':'FipJd','fogPT':_0x3b5618(0x972),'CIbrs':function(_0x32c886,_0x49c105,_0x15ebe5){return _0x32c886(_0x49c105,_0x15ebe5);},'hDTha':_0x3b5618(0x4e4),'LYBLb':function(_0x3c7fc9){return _0x3c7fc9();},'AjPPr':function(_0x33b417){return _0x33b417();},'PHLue':function(_0x82d8ed,_0x3ec4b4){return _0x82d8ed+_0x3ec4b4;},'pcHzX':function(_0x4defa9,_0x588603){return _0x4defa9<_0x588603;},'ezEVn':function(_0x8dfa80,_0x281e2f){return _0x8dfa80+_0x281e2f;},'QIEdL':function(_0x3a8b56,_0x5aa533,_0x4f82de,_0x274259){return _0x3a8b56(_0x5aa533,_0x4f82de,_0x274259);},'KCRUG':function(_0xf62190,_0x166d9b){return _0xf62190+_0x166d9b;},'mwYFw':function(_0x7a4413,_0xb13e87){return _0x7a4413-_0xb13e87;},'DrFXd':'XCZfO','DpWCv':function(_0x290a9f,_0x36c0c3,_0x24f7d4){return _0x290a9f(_0x36c0c3,_0x24f7d4);},'VYpHW':function(_0x52f43a,_0x54f83a){return _0x52f43a(_0x54f83a);},'GgUEr':'gette'+'r','PmMIK':'field'+'\x200x28'+'\x20(gue'+'ss)','xidSy':function(_0x4c20a0,_0x26cc69){return _0x4c20a0!==_0x26cc69;},'siSYC':function(_0x7b8fd7,_0xc79ff2){return _0x7b8fd7===_0xc79ff2;},'wdwnC':_0x3b5618(0x5b9)+'float'+'s\x20unr'+'eadab'+'le','leSKO':_0x3b5618(0x9e4),'DlfHe':function(_0x33c780,_0x5651a2){return _0x33c780+_0x5651a2;},'tZByn':_0x3b5618(0xb03)+_0x3b5618(0x1f3)+'nge','hbbiG':function(_0x4ace7e,_0x503042){return _0x4ace7e*_0x503042;},'nEdXP':'lTkiS','cuJqb':function(_0x1062db,_0x575982){return _0x1062db*_0x575982;},'fdxAI':function(_0x124219,_0x426990){return _0x124219*_0x426990;},'wLqvF':function(_0x388478,_0x54303b){return _0x388478-_0x54303b;},'Kdamb':function(_0x25ba23,_0x37bac6){return _0x25ba23+_0x37bac6;},'BiLho':function(_0xa783c,_0x4185ed){return _0xa783c*_0x4185ed;},'zGTPo':function(_0x398ee2,_0x360fd1){return _0x398ee2+_0x360fd1;},'CYQaF':function(_0x57acac,_0x40bcb4){return _0x57acac*_0x40bcb4;},'xWMMY':function(_0x490204,_0x127bf0){return _0x490204*_0x127bf0;},'uKIcE':function(_0x47918d,_0x1ed548){return _0x47918d/_0x1ed548;},'KYlrl':function(_0x92a04b,_0x5f4f43){return _0x92a04b/_0x5f4f43;},'mldAK':function(_0x5ba1cd,_0x26275){return _0x5ba1cd/_0x26275;},'YEcLC':function(_0x402b2d,_0x420c34){return _0x402b2d*_0x420c34;},'WGTDl':function(_0x53241a,_0x316815){return _0x53241a!==_0x316815;},'LDNAX':_0x3b5618(0x408),'hWVBm':'Tkrrc','MCZGR':'sk-ca'+'rd-ti'+_0x3b5618(0x3b8),'exDwA':function(_0x2cf9af,_0x170892){return _0x2cf9af+_0x170892;},'xpfLa':function(_0x161fd6,_0x53df77,_0x56367f){return _0x161fd6(_0x53df77,_0x56367f);},'IWWVg':_0x3b5618(0x69a)+_0x3b5618(0xd9f)+'ad','ZbcJp':_0x3b5618(0x6dd)+_0x3b5618(0x6f5),'heClR':'\x20on','BexXr':function(_0x5638bb,_0x476261){return _0x5638bb!==_0x476261;},'Ubsll':function(_0x1f11ba,_0x116a7f,_0x4eef85){return _0x1f11ba(_0x116a7f,_0x4eef85);},'QytGe':_0x3b5618(0x35f)+'n','KwrRB':function(_0x519ae9){return _0x519ae9();},'fNhfu':function(_0x10280e,_0x48dc98){return _0x10280e+_0x48dc98;},'SygDh':function(_0x2c3e86,_0x1bb2fd){return _0x2c3e86*_0x1bb2fd;},'wuGnh':function(_0x53b5d8,_0x78c182){return _0x53b5d8*_0x78c182;},'DHJev':function(_0x552321,_0x576e28){return _0x552321*_0x576e28;},'PoNLK':function(_0x3d1497,_0x4cf4ef){return _0x3d1497/_0x4cf4ef;},'VllPP':function(_0x4fee10,_0x353405){return _0x4fee10<_0x353405;},'uMnPd':function(_0x448fec,_0x2cbe7c){return _0x448fec/_0x2cbe7c;},'bkypW':function(_0x2956eb,_0x1e14da){return _0x2956eb-_0x1e14da;},'PKFqo':function(_0x5b543c,_0x2ec536){return _0x5b543c*_0x2ec536;},'guaBv':function(_0x48434d,_0x27932a){return _0x48434d*_0x27932a;},'CQysz':function(_0x207fa7,_0x4cff70){return _0x207fa7-_0x4cff70;},'mDPRO':function(_0x4b89ca,_0x43451b){return _0x4b89ca*_0x43451b;},'CikCt':function(_0x285f73,_0x50f3b0){return _0x285f73+_0x50f3b0;},'jkBaW':function(_0x410ed6,_0xd1bb82){return _0x410ed6+_0xd1bb82;},'XHKSF':function(_0x11562b){return _0x11562b();},'hSNgq':function(_0x3a81bf,_0x2ff36a){return _0x3a81bf(_0x2ff36a);},'MXkJY':function(_0x5e5d60,_0x50afb1){return _0x5e5d60<_0x50afb1;},'ZCZIi':function(_0x2a7f89,_0x4f92a2){return _0x2a7f89*_0x4f92a2;},'vWnKU':function(_0x870667,_0x51859f){return _0x870667-_0x51859f;},'eysHp':function(_0x1b54f4,_0x530466){return _0x1b54f4-_0x530466;},'PjjKg':function(_0xa1accb,_0x1d01d9){return _0xa1accb+_0x1d01d9;},'KZYos':function(_0x24da4f,_0x613634){return _0x24da4f(_0x613634);},'YLwAn':_0x3b5618(0x6b2),'duTuF':'sk-sl'+'ider','DAEdK':_0x3b5618(0xb9b)+'l','fyNtW':_0x3b5618(0xb7d)+_0x3b5618(0x3b6),'UsmOh':_0x3b5618(0x836),'GEqcQ':function(_0x192259,_0x5e72a5){return _0x192259<_0x5e72a5;},'GamVP':function(_0x2af0f5,_0x4db2c7){return _0x2af0f5(_0x4db2c7);},'XxVHL':_0x3b5618(0x99d),'Jarsx':_0x3b5618(0x405)+_0x3b5618(0x70d),'KWXUf':_0x3b5618(0x5a7)+'es','YOkCj':function(_0x4d1dff){return _0x4d1dff();},'UjCwr':function(_0x3c0266){return _0x3c0266();},'NnTzi':_0x3b5618(0x4b5),'CBCVR':function(_0x562fd9,_0x372ad6){return _0x562fd9(_0x372ad6);},'tWTOS':'mxFsh','UiDhT':'Copy\x20'+'faile'+'d','seqdO':function(_0x49b9ef,_0x1878f9,_0x4b7fda){return _0x49b9ef(_0x1878f9,_0x4b7fda);},'zTMqb':'Speed'+'\x20hack','otOBC':'sk-md'+'esc','OUDpL':_0x3b5618(0x1d9)+'ed','OspfM':'sk-no'+'te','eWXwC':function(_0x5f033a,_0x10c26d){return _0x5f033a+_0x10c26d;},'tAUIf':'Bindi'+'ngs','mIpux':'sk-bt'+'n','VNBFj':_0x3b5618(0x8b3)+'napsh'+'ot\x20\x20\x20'+_0x3b5618(0xcd7)+'speed'+_0x3b5618(0xc60)+'ff\x0aF8'+_0x3b5618(0xbee)+_0x3b5618(0xcb0)+_0x3b5618(0x702)+'/-0.5'+'\x0a[\x20\x20]'+'\x20\x20fie'+'ld\x20of'+'\x20view'+_0x3b5618(0x5e7)+_0x3b5618(0xcb1)+'his\x20m'+'enu','JdLaW':_0x3b5618(0xad6)+'ls','DvXBp':_0x3b5618(0x384),'uxyPp':function(_0x525ac0,_0x2c40a6,_0x20280b){return _0x525ac0(_0x2c40a6,_0x20280b);},'GiHVY':'World'+_0x3b5618(0x9d1)+_0x3b5618(0x7b8)+_0x3b5618(0xab0)+_0x3b5618(0x929)+_0x3b5618(0x9a3)+'.\x20Nee'+_0x3b5618(0xc03)+'ly\x20po'+'sitio'+_0x3b5618(0x310),'WmWCp':function(_0x26cc32,_0x241fda,_0x4e0452,_0x28273b,_0x4361bd,_0x4bced0){return _0x26cc32(_0x241fda,_0x4e0452,_0x28273b,_0x4361bd,_0x4bced0);},'xuaff':_0x3b5618(0x7a6)+_0x3b5618(0x98b)+'s\x20acr'+'oss\x20t'+'he\x20ra'+_0x3b5618(0x875),'fihgY':_0x3b5618(0xd15),'hDRPJ':'\x20-\x20th'+'ese\x20t'+_0x3b5618(0x657)+_0x3b5618(0xdb8)+_0x3b5618(0x2ba)+'ot\x20pi'+_0x3b5618(0xaa2)+'nd\x20ya'+_0x3b5618(0xd75)+_0x3b5618(0xd41)+_0x3b5618(0x4cb)+'rn\x20ab'+_0x3b5618(0x36c)+_0x3b5618(0x71a)+'ress\x20'+_0x3b5618(0xd4d),'HhJxu':_0x3b5618(0x246)+_0x3b5618(0x954)+_0x3b5618(0xab5)+'xes.\x20'+_0x3b5618(0x5ba)+_0x3b5618(0x87d)+_0x3b5618(0xc4a)+'ew\x20ca'+_0x3b5618(0x3e7)+_0x3b5618(0x903)+_0x3b5618(0x342)+_0x3b5618(0xca7)+_0x3b5618(0x328)+'ild,\x20'+_0x3b5618(0x46a)+'\x20is\x20f'+_0x3b5618(0xa5c)+_0x3b5618(0x335)+_0x3b5618(0xb14),'aGFvT':function(_0x20825b,_0x1a4a55,_0x38d931){return _0x20825b(_0x1a4a55,_0x38d931);},'RUdPA':_0x3b5618(0xa69)+'\x20','MrQTi':function(_0x2b0790,_0x2c9a8b){return _0x2b0790+_0x2c9a8b;},'LtFQE':function(_0x23635e,_0x44889a){return _0x23635e+_0x44889a;},'evRBK':_0x3b5618(0x998)+_0x3b5618(0xcd5),'awOhw':function(_0x45d9db,_0x5588d9){return _0x45d9db+_0x5588d9;},'MNErO':function(_0x4941ec,_0x467b85){return _0x4941ec+_0x467b85;},'KZdWh':_0x3b5618(0x96f)+'\x20','beLSO':_0x3b5618(0x61f)+'s','WyFvX':'VERSI'+'ON','jMcms':_0x3b5618(0xa68),'rawTc':_0x3b5618(0x7e0)+_0x3b5618(0xdae)+_0x3b5618(0x2ef)+_0x3b5618(0x5bd),'iHlxj':function(_0x4d993,_0x55ea64){return _0x4d993+_0x55ea64;},'CPoJn':_0x3b5618(0x93d),'nehbG':function(_0xeae8a0,_0x18bcd8){return _0xeae8a0+_0x18bcd8;},'rtyVw':function(_0xa556f7,_0x2ccbf8){return _0xa556f7+_0x2ccbf8;},'Rnhpz':_0x3b5618(0x9d7)+'\x20','dvmxA':function(_0x4c0255,_0x306078){return _0x4c0255(_0x306078);},'uMMEB':'Enemi'+'es','ctJYk':'Camer'+'a','KgkXK':function(_0x594f36,_0x3d7cfa){return _0x594f36+_0x3d7cfa;},'grPkY':_0x3b5618(0x9a3),'qyQGw':function(_0x55397b,_0x3ee36b,_0x25707b){return _0x55397b(_0x3ee36b,_0x25707b);},'fIWVw':_0x3b5618(0xc49)+'on','ygACa':function(_0x473b33,_0x3d2473,_0x5c29d7){return _0x473b33(_0x3d2473,_0x5c29d7);},'lgiyG':_0x3b5618(0xb3f)+_0x3b5618(0x60b)+'ler+','KNoDD':function(_0x406aea,_0x5885d7){return _0x406aea+_0x5885d7;},'qIkmZ':function(_0x4c51e8,_0x1f0990){return _0x4c51e8+_0x1f0990;},'DwyvF':_0x3b5618(0x7ed)+_0x3b5618(0xdc5),'OGpBV':function(_0x2790e0,_0x6d4c80,_0x17370e,_0x462a39){return _0x2790e0(_0x6d4c80,_0x17370e,_0x462a39);},'XfTIG':'Healt'+'hScri'+_0x3b5618(0x3ef)+'C0','ONnAz':function(_0x263032,_0x1ff758,_0x123347,_0x36c288){return _0x263032(_0x1ff758,_0x123347,_0x36c288);},'EcjbY':function(_0x222582,_0xecfd64){return _0x222582<_0xecfd64;},'xbjQu':function(_0x3ea422,_0x474162){return _0x3ea422===_0x474162;},'jAhie':function(_0x2479ad,_0xf1baff){return _0x2479ad!==_0xf1baff;},'NAkwd':_0x3b5618(0xcac)+_0x3b5618(0x6cc)+_0x3b5618(0x8ba)+_0x3b5618(0xc56)+_0x3b5618(0x633)+_0x3b5618(0x838)+_0x3b5618(0xd0d)+'g\x20loo'+_0x3b5618(0xa74)+_0x3b5618(0xb19),'YCNXT':function(_0x26a4bc,_0x44f4d7){return _0x26a4bc===_0x44f4d7;},'OLGoP':'RHJLa','NnoEl':'ESP\x20b'+_0x3b5618(0x618),'pLKKW':_0x3b5618(0xc4b)+'1b','ugZPj':function(_0xffa153,_0x23612c){return _0xffa153+_0x23612c;},'Hblts':_0x3b5618(0xd60),'MsbDi':function(_0x158cc5,_0x473ea6){return _0x158cc5-_0x473ea6;},'HvGvy':'grab','OUEqt':'mouse'+'down','yfVUK':_0x3b5618(0x2a8)+'up','WDyYf':_0x3b5618(0x8e2)+'start','qlNYa':_0x3b5618(0x8e2)+_0x3b5618(0x4d0),'cxzdU':'VplwR','lQRAA':_0x3b5618(0x83c),'pbPUg':'NtIxd','oorsb':function(_0x37cfcb){return _0x37cfcb();},'VYyTs':_0x3b5618(0x6d1)+'a\x20Ski'+_0x3b5618(0x5f4)+'z\x20(In'+_0x3b5618(0x329),'yIzyz':_0x3b5618(0xc04)+_0x3b5618(0xcb3)+'1|2','INzgP':_0x3b5618(0x978)+'a-men'+'u-css','RqBqW':_0x3b5618(0x7c0)+_0x3b5618(0x203),'xysTy':'mn-to'+'p','wPtNU':function(_0x144701,_0x267036,_0x9addac,_0x2b6945){return _0x144701(_0x267036,_0x9addac,_0x2b6945);},'wNolS':'start'+_0x3b5618(0xbfe),'sjJOY':_0x3b5618(0xc55)+'ls','tmAsk':function(_0x271014){return _0x271014();},'SmFiR':function(_0x51a94b){return _0x51a94b();},'qJNKD':'<smal'+'l>','LtBIe':_0x3b5618(0xac0)+'ll>','nFmOd':function(_0x2e4de4,_0x4d1323){return _0x2e4de4!==_0x4d1323;},'oPCWi':'OuGsS','UYTpz':function(_0x559628,_0x3a8114){return _0x559628*_0x3a8114;},'gNlxm':_0x3b5618(0x8b1)+'|1|3|'+'5','KmWOF':function(_0x7932b0,_0x2aa00b){return _0x7932b0+_0x2aa00b;},'yrRLT':'backg'+_0x3b5618(0x8dd)+':rgba'+_0x3b5618(0x522)+'2,29,'+_0x3b5618(0x75f)+'order'+_0x3b5618(0xc17)+'solid'+_0x3b5618(0x899)+_0x3b5618(0x271)+_0x3b5618(0x974)+_0x3b5618(0x6ba)+_0x3b5618(0x5bb)+_0x3b5618(0x5f2),'oIDCx':function(_0xd9870c,_0x5923a1){return _0xd9870c+_0x5923a1;},'IoPug':_0x3b5618(0x9b9),'VCpZx':_0x3b5618(0xa9e),'dSTSk':function(_0x3a4f7f,_0x16b8f2){return _0x3a4f7f+_0x16b8f2;},'bIjIW':_0x3b5618(0x93b),'McMxw':function(_0x5abfa1,_0x364f11){return _0x5abfa1===_0x364f11;},'pqkjg':_0x3b5618(0x55d),'mWFRn':_0x3b5618(0x978)+'a-sw-'+'v2','bfLdM':'SpfwA','FvOdL':function(_0x548100,_0x4d1647){return _0x548100+_0x4d1647;},'mlSLc':'\x20\x20·\x20\x20'+'playe'+_0x3b5618(0xa67),'CBOiY':_0x3b5618(0x6d5)+_0x3b5618(0x844),'opFou':_0x3b5618(0x460),'HpOei':_0x3b5618(0x694),'tiFSL':_0x3b5618(0x447)+'insta'+_0x3b5618(0xdb5)+_0x3b5618(0x576),'hCipb':function(_0xb71c84,_0x5c6df0){return _0xb71c84/_0x5c6df0;},'LFoDq':function(_0x224265,_0x176ecb){return _0x224265(_0x176ecb);},'oqUab':'off\x20t'+'he\x20li'+_0x3b5618(0xa51)+_0x3b5618(0x47e),'KZLfq':function(_0x42affd,_0xc81ea){return _0x42affd+_0xc81ea;},'sDnSl':function(_0x3f380d,_0x403bd6){return _0x3f380d===_0x403bd6;},'NUQyu':'FPSco'+'ntrol'+_0x3b5618(0x6a5)+'x2E4','JvlDW':function(_0x368f82){return _0x368f82();},'tBwpP':_0x3b5618(0xb9c),'hRsPb':function(_0x49f852){return _0x49f852();},'fmCAz':function(_0x4fd33d,_0x2ee4b2){return _0x4fd33d===_0x2ee4b2;},'tUqrA':_0x3b5618(0xcb9),'pJFwV':function(_0x3cb9fb,_0x132677){return _0x3cb9fb-_0x132677;},'Gjryp':function(_0x449085,_0x1076c6){return _0x449085===_0x1076c6;},'XRygA':function(_0x385d42,_0xe379e3){return _0x385d42<_0xe379e3;},'AbWSk':function(_0x52664d,_0x466a0e){return _0x52664d<_0x466a0e;},'pjwAu':'ppmRg','QgEuK':function(_0x273b90,_0x12a6e6){return _0x273b90===_0x12a6e6;},'sdLwG':_0x3b5618(0xbde),'ewgCT':function(_0x39ddaf,_0x1ee652,_0xb23f40){return _0x39ddaf(_0x1ee652,_0xb23f40);},'gxHBg':_0x3b5618(0x39b),'GNTrw':function(_0x5936fa,_0x2613fe,_0x4834ef){return _0x5936fa(_0x2613fe,_0x4834ef);},'Gavha':function(_0x2b1a1d,_0x77594f,_0x4c7185,_0x34c194){return _0x2b1a1d(_0x77594f,_0x4c7185,_0x34c194);},'ofvzI':function(_0x31f524,_0x18b1a3){return _0x31f524!==_0x18b1a3;},'RjfOQ':function(_0x1fd95b,_0x5cdf29){return _0x1fd95b<_0x5cdf29;},'VguGe':function(_0x4fd636,_0x28f8c5,_0x28f41d){return _0x4fd636(_0x28f8c5,_0x28f41d);},'mKVlr':function(_0x43ed84,_0x467427,_0x3e6044){return _0x43ed84(_0x467427,_0x3e6044);},'cOCML':function(_0x30cd99,_0x16968f){return _0x30cd99-_0x16968f;},'yOmRy':function(_0x2d2a0e,_0x1e542d){return _0x2d2a0e-_0x1e542d;},'VaSAD':_0x3b5618(0x516),'QkrEv':'backg'+'round'+_0x3b5618(0x624)+_0x3b5618(0x522)+_0x3b5618(0x754)+_0x3b5618(0x347)+_0x3b5618(0x68a)+_0x3b5618(0x53a)+'\x20soli'+'d\x20rgb'+_0x3b5618(0x229)+',143,'+_0x3b5618(0x635)+_0x3b5618(0x5cd)+'rder-'+_0x3b5618(0xd3b)+_0x3b5618(0x4de)+'x;','qLbER':_0x3b5618(0x98a)+_0x3b5618(0x231)+'x;fon'+_0x3b5618(0xbcf)+_0x3b5618(0x948)+'\x20ui-m'+'onosp'+_0x3b5618(0xa0c)+_0x3b5618(0x344)+_0x3b5618(0xb9a)+'nospa'+'ce;co'+_0x3b5618(0x598)+'bda9c'+'9;','wXFJl':_0x3b5618(0x7c8)+_0x3b5618(0x910)+'3','pgGMq':function(_0x483fd3,_0x51b14c){return _0x483fd3+_0x51b14c;},'aoFFI':function(_0x4eb10d,_0x4d84e5){return _0x4eb10d+_0x4d84e5;},'MrDrj':'uebAY','ellwI':_0x3b5618(0x6c7)+'ion:f'+'ixed;'+_0x3b5618(0xb05)+_0x3b5618(0xbdf)+_0x3b5618(0x9c5)+_0x3b5618(0x227)+':2147'+_0x3b5618(0xd4b)+'5;poi'+_0x3b5618(0x2e5)+_0x3b5618(0x871)+'s:non'+'e;','IwOTo':function(_0x3ec410,_0x3cc2d8){return _0x3ec410!==_0x3cc2d8;},'FdTbb':function(_0x449f2e,_0x2c2f6e){return _0x449f2e+_0x2c2f6e;},'RsjeW':function(_0x240aa8,_0x1caf11){return _0x240aa8(_0x1caf11);},'Wtqli':_0x3b5618(0x7d0),'Hmrac':function(_0x5ac795,_0x564cc6){return _0x5ac795===_0x564cc6;},'sPeIZ':'PCoFC','DgKiM':function(_0x2f8cc5,_0x3fa68f){return _0x2f8cc5+_0x3fa68f;},'WSJAB':_0x3b5618(0xb17),'VShGb':_0x3b5618(0x536)+_0x3b5618(0x537)+_0x3b5618(0x3f2)+'6,.95'+')','bGhNi':function(_0x29d576,_0x38c2a6){return _0x29d576+_0x38c2a6;},'CHjVe':function(_0x2a255b,_0x340dc0){return _0x2a255b<_0x340dc0;},'hZXaa':function(_0xf35ce8,_0x50ef66){return _0xf35ce8===_0x50ef66;},'uTMbY':function(_0x5de8d4){return _0x5de8d4();},'UyaDl':function(_0x4f466c,_0x567ed6){return _0x4f466c/_0x567ed6;},'hWyAl':_0x3b5618(0x536)+_0x3b5618(0x537)+'43,17'+'7,.16'+')','ChVda':function(_0x22b834,_0x54ed72){return _0x22b834/_0x54ed72;},'UQWuF':function(_0x1eff59,_0x346265){return _0x1eff59*_0x346265;},'iAqRU':'mXlyQ','iDvWV':function(_0x1ed231,_0x455d01,_0x25d901){return _0x1ed231(_0x455d01,_0x25d901);},'oVHrE':_0x3b5618(0x5f1),'lonut':function(_0xd3a877,_0x5d53a4){return _0xd3a877>_0x5d53a4;},'qXpXd':function(_0x413690,_0x5e87df){return _0x413690-_0x5e87df;},'XccgO':function(_0x52f860,_0x228c63){return _0x52f860===_0x228c63;},'BoaSC':function(_0x55d0aa,_0x47bb62){return _0x55d0aa+_0x47bb62;},'dggdF':function(_0x38fde0,_0x127af7){return _0x38fde0!==_0x127af7;},'jgkGt':_0x3b5618(0xc8a),'NFlde':function(_0x75dd7c,_0x4e50f6){return _0x75dd7c+_0x4e50f6;},'JDdch':function(_0x15f6d3,_0x393a6a){return _0x15f6d3+_0x393a6a;},'nyIxV':function(_0x27940c,_0x5f57d0){return _0x27940c+_0x5f57d0;},'CGWZJ':'\x20·\x20fo'+'v\x20','fLLEC':function(_0xa6760,_0x42668e){return _0xa6760+_0x42668e;},'fqSwo':_0x3b5618(0xcfb)+'am','jxJZi':_0x3b5618(0x937),'UTMdU':function(_0x466c91,_0x4b3cbd){return _0x466c91(_0x4b3cbd);},'mCQNa':function(_0x3dc723,_0x212bf7,_0x504ac8){return _0x3dc723(_0x212bf7,_0x504ac8);},'xzsGa':function(_0x9870cc,_0x4c39f3){return _0x9870cc(_0x4c39f3);},'TndKK':function(_0x2e19e2){return _0x2e19e2();},'Clcph':function(_0x3e7f6a){return _0x3e7f6a();},'KyptK':_0x3b5618(0x8a2),'arnSb':function(_0x5efe79){return _0x5efe79();},'gmnnl':function(_0x40bd5f,_0x5547ed,_0x2daff8,_0x685269,_0x4b55ed){return _0x40bd5f(_0x5547ed,_0x2daff8,_0x685269,_0x4b55ed);},'HsewZ':function(_0x5f4455,_0x354338){return _0x5f4455+_0x354338;},'uRaft':function(_0x5cad2c,_0x1b340e){return _0x5cad2c(_0x1b340e);},'wnkvV':function(_0x403d44){return _0x403d44();},'edQak':function(_0x22b2eb,_0x569a5d){return _0x22b2eb+_0x569a5d;},'gmeED':function(_0xff43a9,_0x32bd95){return _0xff43a9+_0x32bd95;},'KFbOR':function(_0x2542ef,_0xffcbc9){return _0x2542ef+_0xffcbc9;},'BwWGL':'Reaso'+_0x3b5618(0x81d),'nKwTe':_0x3b5618(0x6d1)+_0x3b5618(0x7be)+'K\x20scr'+'ipt\x20i'+_0x3b5618(0x3f1)+_0x3b5618(0x43f)+'nkey\x20'+'and\x20h'+_0x3b5618(0xa78)+_0x3b5618(0x5e6)+'.','aDMVw':function(_0x13c24e,_0x58c648){return _0x13c24e!==_0x58c648;},'tRLnO':function(_0x8424be,_0x59db1b){return _0x8424be===_0x59db1b;},'bfxnU':function(_0x1b2eee,_0x49fd14){return _0x1b2eee+_0x49fd14;},'TfiZA':function(_0x1d4ecb,_0x48e3ff){return _0x1d4ecb+_0x48e3ff;},'wqFyp':_0x3b5618(0xd52)+'game\x20'+_0x3b5618(0x8c9)+_0x3b5618(0x5ee),'Isrix':_0x3b5618(0x27f)+_0x3b5618(0x6cc)+'refer'+'ence\x20'+'exist'+_0x3b5618(0xcbc)+'en\x20an'+_0x3b5618(0x92b)+_0x3b5618(0x82b)+_0x3b5618(0xd86)+_0x3b5618(0xc9a)+_0x3b5618(0x64f),'LiamG':_0x3b5618(0x5b7)+_0x3b5618(0x380)+_0x3b5618(0xd59)+_0x3b5618(0x63c)+_0x3b5618(0x814)+_0x3b5618(0x928)+'a\x20gam'+_0x3b5618(0xc47)+_0x3b5618(0xbab)+_0x3b5618(0xd81)+'odule'+_0x3b5618(0xda2)+_0x3b5618(0x3f5)+'\x20reac'+'hable'+'.','OBdXh':function(_0x4632e2,_0x8c586a){return _0x4632e2===_0x8c586a;},'emTYn':function(_0x38bd89,_0x38d76f){return _0x38bd89===_0x38d76f;},'ttWMy':'\x20hook'+_0x3b5618(0x4ee)+'e\x20eve'+_0x3b5618(0x4be)+'N\x20by\x20'+_0x3b5618(0x5ed)+'\x20The\x20'+'apply'+_0x3b5618(0xd08)+'\x20','QQApv':'so\x20ho'+_0x3b5618(0xaa1)+_0x3b5618(0xd58)+_0x3b5618(0x467)+_0x3b5618(0x858)+_0x3b5618(0xbd0)+_0x3b5618(0x9ee)+'nored'+_0x3b5618(0x29f)+'the\x20l'+_0x3b5618(0xbbf)+_0x3b5618(0xbb4)+'\x20page'+'.\x20','bjrOo':_0x3b5618(0x33f)+_0x3b5618(0x444)+'uring'+_0x3b5618(0xb0a)+_0x3b5618(0xb91)+_0x3b5618(0x8f6)+'ment-'+_0x3b5618(0xb08)+'.','cjJbQ':function(_0x16fe95,_0x57d2de){return _0x16fe95+_0x57d2de;},'fzNWh':_0x3b5618(0xc7a)+_0x3b5618(0x8c9)+_0x3b5618(0xc8f),'UoUZd':_0x3b5618(0x363),'aPvSW':'\x20hook'+_0x3b5618(0x979)+_0x3b5618(0x395)+_0x3b5618(0x92a)+_0x3b5618(0x227)+'\x20but\x20'+_0x3b5618(0x7e0)+_0x3b5618(0x89f)+'ne.\x20T'+'he\x20si'+_0x3b5618(0x693)+_0x3b5618(0x559),'cvUFw':_0x3b5618(0x315)+_0x3b5618(0x314)+_0x3b5618(0xa7a)+'not\x20i'+'n\x20a\x20r'+_0x3b5618(0xc84)+_0x3b5618(0x401)+_0x3b5618(0xc53)+'ok\x20is'+'\x20on\x20t'+'he\x20wr'+_0x3b5618(0x2c7)+'verlo'+'ad.','twuSD':_0x3b5618(0x4b1)+_0x3b5618(0x3d3)+'nce\x20f'+'irst\x20'+'captu'+_0x3b5618(0xbb0)+_0x3b5618(0xab4)+_0x3b5618(0xa56),'krCBK':_0x3b5618(0x934)+_0x3b5618(0x406)+'t','AIXhT':_0x3b5618(0xb1f),'KtCIi':_0x3b5618(0x256)+'-weig'+_0x3b5618(0x6ca)+'0','aasYY':function(_0x962b04,_0x7f389d){return _0x962b04===_0x7f389d;},'dzQZP':_0x3b5618(0x77a),'Nhwpm':function(_0xc0380){return _0xc0380();},'CuaLm':_0x3b5618(0x3db),'iOuNd':'UobxK','XCcJI':_0x3b5618(0xb8e),'JXTRf':'wrapp'+'er','PfJQS':'%c[sa'+'kura]'+_0x3b5618(0x3de)+_0x3b5618(0x734)+'R\x20ACT'+'IVE\x20('+'relay'+_0x3b5618(0x1e2)+_0x3b5618(0x266),'prXsP':_0x3b5618(0x6fb)+_0x3b5618(0xcef)+_0x3b5618(0xa66)+'AL\x20AC'+_0x3b5618(0x25c),'KlIWu':function(_0x2d2763){return _0x2d2763();},'CISNa':_0x3b5618(0x7d3)+'ge','aiEFk':_0x3b5618(0xbc2),'wXWFS':'sakur'+'a-sw','ZCNmc':'\u008b\u0087\u0087\u0092\u0090'+_0x3b5618(0xa41)+'\u0094','CVbPD':_0x3b5618(0x775)+_0x3b5618(0x80a)+'\u008e','ggmTa':_0x3b5618(0x927),'eoEKP':_0x3b5618(0x811)+'\u008b\u008a\u0087\u0089\u0091'+'\u008f','ltazA':_0x3b5618(0xb86)+_0x3b5618(0x54a),'pCtkr':'\u0088\u0091\u008b\u0087\u0087'+_0x3b5618(0x936)+'\u0095','bVKMb':'\u008c\u0091\u0088\u0095\u008c'+_0x3b5618(0x4cc)+'\u0095','tTPJh':'\u0093\u0089\u0095\u0092\u0090'+'\u0092\u008b\u0093\u008b\u0092'+'\u008d','JsBWa':'\u008d\u0095\u0088\u0092\u008c'+_0x3b5618(0x455)+'\u0092','YXkNP':_0x3b5618(0x4ae)+_0x3b5618(0x8d2)+'\u008a','zezUO':_0x3b5618(0x43e)+'\u0089\u008d\u008f\u0087\u0091'+'\u0093','DoFVQ':'\u008d\u0093\u0095\u008a\u0088'+_0x3b5618(0x7a7)+'\u008a','msNXp':_0x3b5618(0x9b0)+'\u0093\u0089\u008e\u0086\u0093'+'\u0088','ZachK':'\u008c\u0093\u0091\u008a\u0089'+_0x3b5618(0x9de)+'\u0088','kfAcb':_0x3b5618(0x4da)+_0x3b5618(0x5f3)+'\u008a','kfGdH':_0x3b5618(0x4aa)+_0x3b5618(0x541)+'\u0089','NHkpv':'\u0092\u008c\u0088\u0087\u0088'+'\u008c\u008a\u0089\u0090\u008c'+'\u0090','XDBqJ':_0x3b5618(0xbd7)+_0x3b5618(0x3e6)+'\u0092','LtUoB':_0x3b5618(0x793)+_0x3b5618(0xb28)+'\u008b','MBOIN':'\u008a\u008c\u0086\u0095\u0087'+'\u0089\u0091\u0086\u008a\u0091'+'\u008a','uzWYd':'\u0088\u0093\u0088\u0095\u008b'+'\u008f\u008b\u0088\u0087\u0086'+'\u0087','tlbzC':_0x3b5618(0xca0),'nlwtj':_0x3b5618(0xca3)+'\u0095\u0089\u008b\u008d\u008a'+'\u008b','tpMgD':_0x3b5618(0x7fe)+'\u0091\u0088\u0092\u008d\u0087'+'\u0094','ZHYbx':_0x3b5618(0xc13)+_0x3b5618(0x6f8)+'\u0090','taQKV':'\u008f\u0092\u008d\u008d\u0089'+'\u008a\u0089\u008e\u008d\u008d'+'\u0086','dAmzU':_0x3b5618(0x481)+'\u0092\u0094\u0087\u008d\u008c'+'\u008b','xgPvT':_0x3b5618(0xc7e)+'\u008b\u0091\u0091\u0089\u0091'+'\u008c','Theuz':_0x3b5618(0xc59)+_0x3b5618(0x747)+'\u008f','mUlTA':_0x3b5618(0x42b)+_0x3b5618(0xbb9)+'\u0086','sJmip':_0x3b5618(0x826)+'\u008f\u008d\u0086\u0089\u008d'+'\u0094','kFLnY':_0x3b5618(0xcae)+_0x3b5618(0x750)+'\u0091','NdVif':'\u0091\u0093\u0091\u008f\u008c'+'\u0095\u0094\u008b\u0093\u008a'+'\u008f','vyDdW':'\u008c\u008d\u0095\u0089\u008a'+_0x3b5618(0xdc6)+'\u0092','aUUpR':_0x3b5618(0xc14)+'\u008e\u0089\u0093\u0095\u0094'+'\u0094','cmoAt':'\u0094\u008c\u008f\u008e\u008b'+'\u0087\u008d\u008f\u008d\u0095'+'\u0087','fslol':'\u0095\u0090\u0093\u0093\u008a'+'\u0094\u008a\u0092\u0087\u0092'+'\u0086','isEgd':'\u0090\u0093\u0090\u008f\u0088'+'\u0095\u008e\u008f\u0088\u008d'+'\u008f','EjFGm':'\u008d\u0094\u0092\u0093\u0092'+'\u0086\u008c\u008a\u0087\u0089'+'\u0095','ojFNI':'int','rhOIu':_0x3b5618(0x941)+'\u0094\u008b\u0086\u008a\u008e'+'\u0086','GIfFZ':_0x3b5618(0xb64)+_0x3b5618(0xcf4)+'\u008c','eWGuu':'\u008b\u0086\u008e\u0095\u0091'+'\u0090\u008d\u0094\u0087\u0091'+'\u0094','LRIsO':'\u0086\u008c\u008e\u0094\u0090'+_0x3b5618(0x9ce)+'\u0088','bmmsG':_0x3b5618(0x5c9)+'\u0089\u008c\u008d\u008b\u008f'+'\u0093','qkPOl':_0x3b5618(0x3b0)+'\u0091\u0091\u0089\u0091\u0092'+'\u008c','oToXk':_0x3b5618(0xaa3)+_0x3b5618(0x767)+'\u008a','MlhPi':'\u0093\u0093\u008d\u008e\u008b'+_0x3b5618(0x7cc)+'\u0086','GqQjV':_0x3b5618(0xd02)+_0x3b5618(0x28b)+'\u0087','ckFny':'\u0086\u0090\u0086\u008c\u0090'+_0x3b5618(0x860)+'\u008b','SVZqE':_0x3b5618(0x9b6)+'\u008f\u008e\u008f\u0086\u0093'+'\u0092','ZWGas':_0x3b5618(0x4a4)+_0x3b5618(0x704)+'\u008c','Heobt':_0x3b5618(0x220)+'\u0086\u008a\u0095\u0094\u008e'+'\u008f','HyZiX':'\u0086\u008a\u008f\u008f\u0089'+_0x3b5618(0x52a)+'\u008e','vtrzK':'\u0089\u0086\u0094\u0092\u0092'+_0x3b5618(0x22c)+'\u008e','mhrLF':_0x3b5618(0xd91)+_0x3b5618(0x5b5)+'\u0094','slHLv':_0x3b5618(0xa65)+'\u0089\u0094\u0091\u0087\u0087'+'\u0086','GMfwv':'\u0088\u008f\u0094\u0095\u008a'+_0x3b5618(0x7a9)+'\u0095','xWfiX':'\u008a\u008e\u008d\u008a\u0091'+_0x3b5618(0x1eb)+'\u0092','AYzXs':_0x3b5618(0x647)+_0x3b5618(0x3c3)+'\u008e','TiPLR':_0x3b5618(0xd2c)+'\u0089\u0094\u008e\u0093\u008f'+'\u0092','tCMAT':_0x3b5618(0x97c)+_0x3b5618(0x2de)+'\u0095','mzOVr':'TDM_G'+'ameMa'+'nager','XNDUs':_0x3b5618(0x412)+_0x3b5618(0xa3e)+_0x3b5618(0x821),'tfMPn':_0x3b5618(0x60a)+_0x3b5618(0xbdd)+_0x3b5618(0xd14)+_0x3b5618(0x468),'nTexQ':'cInpu'+_0x3b5618(0x281),'cGEit':_0x3b5618(0x9a5),'BeBQs':'photo'+_0x3b5618(0xd33),'Vanvq':'healt'+'h','hksRe':_0x3b5618(0xb37),'zikZn':'fps','meNAk':'0x18','fVFKd':_0x3b5618(0x808),'drWJM':_0x3b5618(0x206),'jjfDm':_0x3b5618(0x1f5),'OEGmu':'targe'+_0x3b5618(0x7b6)+_0x3b5618(0x557),'sOrAO':_0x3b5618(0x934)+_0x3b5618(0x44d),'yvxFH':'team','XYPXL':_0x3b5618(0x654),'UQbfW':'keydo'+'wn','BXNSq':'sakur'+_0x3b5618(0xaeb)+_0x3b5618(0xc8c)+'off','VCxca':function(_0xc5f2df,_0x19a1e8){return _0xc5f2df===_0x19a1e8;},'uwcaS':_0x3b5618(0xa0a),'wdJBD':'rjilu','ZmeRC':function(_0x5df08d,_0x1637d4){return _0x5df08d===_0x1637d4;},'JgxNt':_0x3b5618(0x50c),'hnKVl':'LOG','kAVAa':function(_0x5f19b7,_0x4f0c71){return _0x5f19b7+_0x4f0c71;},'WvpWX':function(_0x102e60,_0x2a0480){return _0x102e60+_0x2a0480;},'PnRnH':function(_0x1d5e4b,_0x273ac1){return _0x1d5e4b+_0x273ac1;},'SjlQY':function(_0x54ffd4,_0x204f03){return _0x54ffd4+_0x204f03;},'WgwTd':function(_0x3f23e1,_0x4df14b){return _0x3f23e1+_0x4df14b;},'BnfzX':function(_0x3d2eaf,_0x36fb72){return _0x3d2eaf+_0x36fb72;},'jwRxw':function(_0x367404,_0x4e3b95){return _0x367404+_0x4e3b95;},'yZhjW':_0x3b5618(0x9b7)+_0x3b5618(0xc72)+_0x3b5618(0x4dd)+_0x3b5618(0xd06)+_0x3b5618(0xa55)+_0x3b5618(0xb76)+_0x3b5618(0x8b7)+_0x3b5618(0x8bf)+_0x3b5618(0x210)+_0x3b5618(0xaea)+_0x3b5618(0xa16)+_0x3b5618(0x9b8)+_0x3b5618(0xba0)+_0x3b5618(0x430)+_0x3b5618(0xc97)+_0x3b5618(0x71d)+_0x3b5618(0xb71)+_0x3b5618(0xd30)+_0x3b5618(0x7ad)+_0x3b5618(0xd6a)+_0x3b5618(0x1e3)+_0x3b5618(0x464)+_0x3b5618(0x71f)+_0x3b5618(0x765)+'x,cal'+_0x3b5618(0x4bb)+'vh\x20-\x20'+'48px)'+');','YHjMO':_0x3b5618(0x95b)+'ay:fl'+_0x3b5618(0x472)+'p:10p'+'x;pad'+_0x3b5618(0xbc7)+'10px;'+_0x3b5618(0x68a)+_0x3b5618(0x7d8)+_0x3b5618(0xcbd)+_0x3b5618(0x8e3)+'ointe'+_0x3b5618(0xa7b)+'nts:a'+_0x3b5618(0x82a)+_0x3b5618(0x64a)+'x:214'+'74836'+_0x3b5618(0xd24),'KNzyX':'backg'+'round'+':rgba'+_0x3b5618(0x851)+_0x3b5618(0x863)+_0x3b5618(0x71c)+_0x3b5618(0x204)+_0x3b5618(0x368)+_0x3b5618(0x7aa)+':blur'+'(22px'+_0x3b5618(0xcf2)+_0x3b5618(0x483)+_0x3b5618(0x882)+');-we'+_0x3b5618(0x568)+'backd'+_0x3b5618(0x368)+'ilter'+_0x3b5618(0xc0d)+'(22px'+_0x3b5618(0xcf2)+_0x3b5618(0x483)+_0x3b5618(0x882)+');','MmUyq':_0x3b5618(0x3e9)+_0x3b5618(0xb09)+_0x3b5618(0x96a)+'y:fle'+_0x3b5618(0x61d)+'x-dir'+'ectio'+_0x3b5618(0xd9b)+'umn;a'+_0x3b5618(0xbfa)+_0x3b5618(0x8d4)+':cent'+_0x3b5618(0xb30)+'p:4px'+';widt'+'h:62p'+_0x3b5618(0x61d)+_0x3b5618(0xa64)+_0x3b5618(0x778)+'ding:'+'12px\x20'+'0;','FpCxM':_0x3b5618(0x2d9)+'ogo{d'+_0x3b5618(0x96a)+'y:gri'+_0x3b5618(0x825)+_0x3b5618(0x867)+'ems:c'+_0x3b5618(0x637)+_0x3b5618(0xb82)+_0x3b5618(0x905)+_0x3b5618(0x2ec)+'ght:3'+_0x3b5618(0xb9e)+'argin'+_0x3b5618(0x257)+'om:6p'+'x;}','Asxvy':_0x3b5618(0xb39)+_0x3b5618(0x365)+'tive{'+_0x3b5618(0xccd)+':#ff6'+'b9d;b'+'ackgr'+'ound:'+_0x3b5618(0x536)+_0x3b5618(0x537)+'07,15'+'7,.1)'+';}','rNmeS':_0x3b5618(0xb39)+_0x3b5618(0x461)+_0x3b5618(0xdbc)+_0x3b5618(0x669)+_0x3b5618(0xac4)+_0x3b5618(0x42f)+_0x3b5618(0x394)+'nter;'+_0x3b5618(0x39c)+_0x3b5618(0x8e3)+'addin'+'g:6px'+'\x206px\x20'+'12px;'+_0x3b5618(0x919)+_0x3b5618(0xb57)+_0x3b5618(0x56f)+_0x3b5618(0xb26),'faOAs':_0x3b5618(0xb39)+'itles'+_0x3b5618(0x29b)+':1;mi'+_0x3b5618(0xd28)+_0x3b5618(0xaa5)+'}','tLIOI':_0x3b5618(0x5b4)+'{font'+'-size'+_0x3b5618(0xd13)+_0x3b5618(0x256)+_0x3b5618(0xbf7)+'ht:65'+'0;}','aRlGd':_0x3b5618(0xa70)+'lose{'+_0x3b5618(0x95b)+_0x3b5618(0xa89)+_0x3b5618(0xa02)+'ace-i'+'tems:'+_0x3b5618(0x542)+'r;wid'+'th:28'+_0x3b5618(0x855)+'ight:'+'28px;'+'borde'+_0x3b5618(0xb00)+'order'+'-radi'+_0x3b5618(0x738)+'x;bac'+_0x3b5618(0xa4c)+'nd:tr'+_0x3b5618(0x9d6)+'rent;','JwvMI':_0x3b5618(0xa70)+'ols::'+_0x3b5618(0x4ba)+'it-sc'+_0x3b5618(0x2fa)+_0x3b5618(0x9ec)+_0x3b5618(0x3d5)+_0x3b5618(0x7e9),'HxOuF':_0x3b5618(0x3e1)+_0x3b5618(0x7dd)+'font-'+_0x3b5618(0x78f)+'11px;'+_0x3b5618(0x640)+'ty:.4'+_0x3b5618(0x719)+_0x3b5618(0xafc)+_0x3b5618(0x9b8)+_0x3b5618(0x45e)+_0x3b5618(0x399)+_0x3b5618(0x1dd)+_0x3b5618(0x77e)+_0x3b5618(0x91f)+'}','ocXeV':_0x3b5618(0x708)+'tl{di'+'splay'+_0x3b5618(0x669)+';alig'+_0x3b5618(0x42f)+'ms:ce'+'nter;'+_0x3b5618(0x7c3)+'px;pa'+_0x3b5618(0xa23)+_0x3b5618(0xb69)+_0x3b5618(0xca9)+_0x3b5618(0x4a7)+_0x3b5618(0x36e)+'5px;}','VloqA':_0x3b5618(0x288)+_0x3b5618(0x31e)+'flex:'+_0x3b5618(0x82d)+'or:rg'+'ba(24'+'6,238'+_0x3b5618(0x528)+_0x3b5618(0xad9)+'}','hbRWw':_0x3b5618(0xc02)+_0x3b5618(0x6ff)+_0x3b5618(0x96a)+'y:blo'+_0x3b5618(0x3c6)+_0x3b5618(0xc5b)+'ze:10'+_0x3b5618(0x3fd)+_0x3b5618(0x2dd)+_0x3b5618(0xb33),'UJjJK':'.sk-s'+'witch'+_0x3b5618(0x436)+_0x3b5618(0xc2b)+_0x3b5618(0xd20)+_0x3b5618(0x407)+']::af'+'ter{l'+'eft:1'+'5px;b'+'ackgr'+_0x3b5618(0xa9c)+_0x3b5618(0xa88)+'9d;}','jRVam':_0x3b5618(0x761)+'ange{'+'displ'+'ay:fl'+_0x3b5618(0xcad)+_0x3b5618(0xc75)+_0x3b5618(0xc40)+'cente'+_0x3b5618(0x4b6)+_0x3b5618(0x26b)+'}','vqfil':'.sk-s'+'lider'+_0x3b5618(0x20b)+_0x3b5618(0xd83)+_0x3b5618(0xbcc)+_0x3b5618(0x9ac)+_0x3b5618(0x34a)+_0x3b5618(0xc87)+'rance'+_0x3b5618(0x9dc)+_0x3b5618(0xb82)+_0x3b5618(0xc96)+_0x3b5618(0x2ec)+'ght:8'+'px;ba'+_0x3b5618(0x94c)+'und:t'+_0x3b5618(0xaa4)+_0x3b5618(0x1e9)+';}','ngSJJ':_0x3b5618(0xd18)+_0x3b5618(0x3a1)+'ont-s'+_0x3b5618(0xae6)+_0x3b5618(0x914)+_0x3b5618(0xa83)+'rgba('+'246,2'+'38,24'+_0x3b5618(0xa12)+_0x3b5618(0x543)+_0x3b5618(0xaab)+_0x3b5618(0x3ca)+_0x3b5618(0x2ea)+'-spac'+_0x3b5618(0xab8)+_0x3b5618(0xd85)+';}','mVPDo':'.sk-n'+'ote.e'+_0x3b5618(0x1fb)+'lor:#'+_0x3b5618(0xb87)+_0x3b5618(0x3f8),'czJJN':'.sk-b'+_0x3b5618(0xb5c)+'ver{f'+_0x3b5618(0x7aa)+_0x3b5618(0x3b1)+_0x3b5618(0x895)+_0x3b5618(0x911)+_0x3b5618(0xc26),'uwlwg':'<circ'+_0x3b5618(0xc54)+'=\x2212\x22'+'\x20cy=\x22'+_0x3b5618(0xa59)+'=\x221.5'+_0x3b5618(0x2db)+_0x3b5618(0x35a)+_0x3b5618(0x7ba)+'\x22/></'+'svg>','xXyJW':'<circ'+_0x3b5618(0xc54)+_0x3b5618(0x990)+_0x3b5618(0x710)+_0x3b5618(0xa59)+_0x3b5618(0x69e)+_0x3b5618(0x2db)+_0x3b5618(0x35a)+_0x3b5618(0x7ba)+_0x3b5618(0x323)+_0x3b5618(0x55e)};var _0x55cced=location['hostn'+_0x3b5618(0x806)]||'',_0x527e80=/(^|\.)www\.crazygames\.com$/['test'](_0x55cced),_0x16e718=/(^|\.)games\.crazygames\.com$/[_0x3b5618(0x698)](_0x55cced),_0x55a283=/(^|\.)crazygames\.com$/[_0x3b5618(0x698)](_0x55cced)&&!_0x527e80&&!_0x16e718,_0x98b56=_0x527e80?'porta'+'l':_0x16e718?_0x4830a0['JXTRf']:'playe'+'r';if(!_0x527e80&&!_0x16e718&&!_0x55a283)return;var _0xf63150='#ff8f'+'b1',_0x5002e1=_0x3b5618(0x688)+_0x3b5618(0x309)+_0x3b5618(0xad1),_0x14987d=_0x3b5618(0x289)+'KURA-'+'SKILL'+_0x3b5618(0xc35)+_0x3b5618(0x5e0)+_0x3b5618(0xa25),_0x538b47=_0x3b5618(0x289)+_0x3b5618(0x1fa)+_0x3b5618(0xba9)+_0x3b5618(0xc35)+'END=='+'=',_0x5c1a61='2.9.9';if(_0x16e718){window[_0x3b5618(0x6e0)+'entLi'+_0x3b5618(0x76f)+'r'](_0x3b5618(0x7d3)+'ge',function(_0x1a1d80){var _0x363bc7=_0x3b5618,_0xb7dcbc={'BPmVS':function(_0x3b0c6f){var _0x13ffdf=_0x1d88;return _0x4830a0[_0x13ffdf(0x1e0)](_0x3b0c6f);},'ZYjrB':function(_0x5940de,_0x218adb,_0x527466){return _0x5940de(_0x218adb,_0x527466);}},_0x17edea=_0x1a1d80[_0x363bc7(0xcb8)];if(!_0x17edea||_0x4830a0['JCtzb'](_0x17edea[_0x363bc7(0x688)+_0x363bc7(0xa42)],_0x5002e1))return;try{if(window['paren'+'t']&&window[_0x363bc7(0x406)+'t']!==window)window[_0x363bc7(0x406)+'t'][_0x363bc7(0x223)+'essag'+'e'](_0x17edea,'*');if(window['top']&&window['top']!==window)window['top'][_0x363bc7(0x223)+_0x363bc7(0xbbd)+'e'](_0x17edea,'*');}catch(_0x519629){}if(_0x17edea&&_0x4830a0['LLSFx'](_0x17edea['kind'],'cmd')){if(_0x4830a0[_0x363bc7(0x7f4)](_0x4830a0[_0x363bc7(0x7ee)],'ufbRa')){if(!_0x1ad2aa['on'])_0x5f8100(!![],![]);else{if(_0x3d21fa['boxes'])_0x240f68(![],![]);else{if(_0xb7dcbc[_0x363bc7(0xd82)](_0x23db20))_0xb7dcbc['ZYjrB'](_0x291640,!![],!![]);else _0xb7dcbc['ZYjrB'](_0x44d442,![],![]);}}}else try{if(_0x4830a0['FyvzN']!==_0x4830a0['MCYEm']){var _0x5b0ea3=document[_0x363bc7(0xcc7)+_0x363bc7(0xdb3)+'torAl'+'l'](_0x4830a0['snauQ']);for(var _0x3b559b=-0x1967*0x1+0xa0b+0xf5c;_0x3b559b<_0x5b0ea3[_0x363bc7(0x853)+'h'];_0x3b559b++){if(_0x4830a0[_0x363bc7(0xcea)]==='FEtqV')return _0x3cc78c[_0x363bc7(0x53e)+_0x363bc7(0xb43)]=![],_0x25e3a4[_0x363bc7(0x760)]=_0x363bc7(0x592)+'useLo'+_0x363bc7(0xd6c)+'t',null;else try{if(_0x363bc7(0xb0e)===_0x4830a0['zEoof']){if(_0x5b0ea3[_0x3b559b][_0x363bc7(0x5e4)+_0x363bc7(0xb78)+_0x363bc7(0x98d)])_0x5b0ea3[_0x3b559b]['conte'+'ntWin'+_0x363bc7(0x98d)][_0x363bc7(0x223)+_0x363bc7(0xbbd)+'e'](_0x17edea,'*');}else _0x487ab6[_0x363bc7(0x885)]();}catch(_0x37d4bb){}}}else return{'w':0x0,'h':0x0};}catch(_0x317971){}}}),console[_0x3b5618(0x90e)](_0x4830a0[_0x3b5618(0x9cf)],_0x4830a0[_0x3b5618(0x331)](_0x3b5618(0xccd)+':',_0xf63150));return;}if(_0x527e80){console['log'](_0x4830a0['prXsP'],'color'+':'+_0xf63150+(_0x3b5618(0x256)+'-weig'+'ht:70'+'0'),{'host':_0x55cced});var _0x250772={'set':function(){},'command':function(){}};function _0x40b35e(_0x3d5238,_0x117cd0){var _0x3a7f78=_0x3b5618,_0x29301f={'__sakura':_0x5002e1,'kind':_0x4830a0[_0x3a7f78(0xad4)],'cmd':_0x3d5238,'arg':_0x117cd0};try{var _0x316947=document[_0x3a7f78(0xcc7)+'Selec'+'torAl'+'l'](_0x3a7f78(0xd79)+'e');for(var _0x4d0d82=0x1da0+0x830+-0x25d0;_0x4d0d82<_0x316947[_0x3a7f78(0x853)+'h'];_0x4d0d82++){try{if(_0x316947[_0x4d0d82][_0x3a7f78(0x5e4)+'ntWin'+_0x3a7f78(0x98d)])_0x316947[_0x4d0d82][_0x3a7f78(0x5e4)+_0x3a7f78(0xb78)+'dow'][_0x3a7f78(0x223)+'essag'+'e'](_0x29301f,'*');}catch(_0x128bfc){}}}catch(_0x305e28){}try{var _0x58056c=new BroadcastChannel(_0x3a7f78(0x978)+_0x3a7f78(0x1f6));_0x58056c[_0x3a7f78(0x223)+'essag'+'e'](_0x29301f),setTimeout(function(){try{_0x58056c['close']();}catch(_0x339451){}},-0x1*-0x1a21+-0x39e+-0x1589);}catch(_0x26d1b4){}}var _0x245406='sakur'+_0x3b5618(0xaeb)+'panel'+_0x3b5618(0x4b7)+'en';function _0x51da80(){var _0x29a299=_0x3b5618;if('BLCSy'!==_0x29a299(0xb49))try{return _0x4830a0[_0x29a299(0x306)]('sxWZS',_0x29a299(0x7ce))?localStorage[_0x29a299(0xa27)+'em'](_0x245406)==='1':_0x152611[_0x29a299(0x8dd)](_0x61c011*(-0x172b+-0xb6b*-0x2+0xb9))/(-0x267+-0x1f7*-0x13+-0x228a);}catch(_0x294fe6){return![];}else return null;}function _0x31ad03(_0x5a6eab){var _0x2a5909=_0x3b5618,_0x40d2e4={'qPBMl':function(_0xc76e0b,_0x5a5bbc){return _0xc76e0b(_0x5a5bbc);},'XJril':function(_0x4e84dd){return _0x4e84dd();}};try{if(_0x4830a0[_0x2a5909(0x8a7)]!==_0x2a5909(0x513)){var _0x2cad94=_0x34f4e8[_0x2a5909(0x1d7)](-0x4*0x6a7+-0x1*0xabb+0x2557,0x1fde*-0x1+0x17bd+-0x1*-0x94d);if(_0x2b4256['index'+'Of'](_0x2cad94)===-(0x1*-0x1f7f+-0x76f*0x1+0x26ef*0x1)&&_0x3aaef4['lengt'+'h']<0x77*0x7+-0x89c+-0x35*-0x1b)_0x42c208[_0x2a5909(0xbb7)](_0x2cad94);}else _0x5a6eab?localStorage['setIt'+'em'](_0x245406,'1'):localStorage['remov'+_0x2a5909(0xa94)](_0x245406);}catch(_0x22a5ea){}try{var _0x3d6373=document['getEl'+'ement'+_0x2a5909(0x83e)]('sakur'+_0x2a5909(0xaeb)+'v2');if(_0x3d6373)_0x3d6373[_0x2a5909(0x594)+'e']();}catch(_0x5a1115){}try{if(_0x2a5909(0x873)==='QlRKS'){var _0x2db16d=document['getEl'+'ement'+_0x2a5909(0x83e)](_0x4830a0['OiRDQ']);if(_0x5a6eab&&!_0x2db16d&&document[_0x2a5909(0x84b)]){if('BXDZM'!==_0x4830a0['lDHKE']){var _0x5ee86f=document[_0x2a5909(0x839)+'eElem'+_0x2a5909(0xbdc)](_0x4830a0['xEWux']);_0x5ee86f['id']=_0x2a5909(0x978)+_0x2a5909(0xaeb)+_0x2a5909(0x6b5)+'b',_0x5ee86f[_0x2a5909(0x86d)][_0x2a5909(0xd9e)+'xt']=_0x4830a0['sJgAp'](_0x4830a0[_0x2a5909(0x3be)]('posit'+'ion:f'+'ixed;'+_0x2a5909(0xb05)+'12px;'+_0x2a5909(0xae3)+_0x2a5909(0x630)+'-inde'+'x:214'+_0x2a5909(0x8fe)+_0x2a5909(0x848)+_0x2a5909(0xd7d)+'point'+_0x2a5909(0xc45)+'er-se'+_0x2a5909(0x63e)+_0x2a5909(0x34a)+(_0x2a5909(0x7e1)+'round'+':rgba'+_0x2a5909(0x522)+'2,29,'+_0x2a5909(0x75f)+'order'+_0x2a5909(0xc17)+_0x2a5909(0x416)+'\x20rgba'+'(255,'+'143,1'+_0x2a5909(0x6ba)+_0x2a5909(0x5bb)+_0x2a5909(0x5f2)),_0xf63150),';')+_0x4830a0[_0x2a5909(0xc38)],_0x5ee86f['textC'+_0x2a5909(0x3b9)+'t']='sakur'+'a',_0x5ee86f[_0x2a5909(0x93e)+'ck']=function(){_0x40d2e4['qPBMl'](_0x31ad03,![]),_0x40d2e4['XJril'](_0x384412);},document[_0x2a5909(0x84b)][_0x2a5909(0x69b)+_0x2a5909(0x79e)+'d'](_0x5ee86f);}else return _0x2d83aa['type']===_0x2e8a43;}else!_0x5a6eab&&_0x2db16d&&_0x2db16d['remov'+'e']();}else _0x30304b=_0x4830a0[_0x2a5909(0x3be)](_0x4830a0['HFQPS']+_0x326281[_0x2a5909(0xc41)+_0x2a5909(0xb9f)+_0x2a5909(0xcbe)]['atMs']+_0x4830a0['WPdWE']+_0x4bf328['hookF'+'irePr'+_0x2a5909(0xcbe)]['origi'+'nalFu'+'nc']+(_0x2a5909(0xd52)+_0x2a5909(0x2b4)+'resol'+'ved=')+_0x11e8f8[_0x2a5909(0xc41)+_0x2a5909(0xb9f)+_0x2a5909(0xcbe)][_0x2a5909(0x8c9)+_0x2a5909(0x68d)+'eAtFi'+'re'],_0x4830a0['gfoyK'])+(_0x52b70e[_0x2a5909(0xc41)+_0x2a5909(0xb9f)+'oof'][_0x2a5909(0x770)+_0x2a5909(0x879)+_0x2a5909(0x2fe)+'e']||_0x2a5909(0xa29))+(_0x2a5909(0x27f)+_0x2a5909(0x6cc)+_0x2a5909(0x715)+_0x2a5909(0x634)+_0x2a5909(0x253)+_0x2a5909(0xcbc)+_0x2a5909(0xd64)+'d\x20is\x20'+_0x2a5909(0x82b)+_0x2a5909(0xd86)+_0x2a5909(0xc9a)+'ow.');}catch(_0x450c6e){}}function _0x2501b0(){var _0x35f18e=_0x3b5618;if(_0x51da80())return null;var _0x393500=document['getEl'+'ement'+_0x35f18e(0x83e)](_0x35f18e(0x978)+'a-sw-'+'v2');if(_0x393500)return _0x393500;if(!document['body']||!document['body'][_0x35f18e(0x69b)+_0x35f18e(0x79e)+'d'])return null;try{var _0x386168=(_0x35f18e(0xbb5)+'|4|3')[_0x35f18e(0x8a1)]('|'),_0x3325d3=-0x1e5b*-0x1+0x7f*0xd+-0x24ce;while(!![]){switch(_0x386168[_0x3325d3++]){case'0':_0x393500=document[_0x35f18e(0x839)+_0x35f18e(0xcdd)+_0x35f18e(0xbdc)](_0x4830a0['xEWux']);continue;case'1':_0x393500['id']=_0x35f18e(0x978)+_0x35f18e(0xaeb)+'v2';continue;case'2':if(!document['getEl'+_0x35f18e(0x56e)+_0x35f18e(0x83e)](_0x4830a0['XrLpF'])){var _0x22f747=document[_0x35f18e(0x839)+_0x35f18e(0xcdd)+'ent'](_0x35f18e(0x86d));_0x22f747['id']='sakur'+_0x35f18e(0xaeb)+_0x35f18e(0xd8b)+'s',_0x22f747[_0x35f18e(0x2a0)+_0x35f18e(0x3b9)+'t']=_0x4830a0['VVcSf'],(document[_0x35f18e(0xd42)]||document['docum'+'entEl'+_0x35f18e(0x56e)])[_0x35f18e(0x69b)+_0x35f18e(0x79e)+'d'](_0x22f747);}continue;case'3':return _0x393500;case'4':document['body']['appen'+_0x35f18e(0x79e)+'d'](_0x393500);continue;}break;}}catch(_0x332881){if(_0x4830a0['LLSFx'](_0x35f18e(0x60c),_0x35f18e(0x60c)))return null;else _0x45838e(!_0x5e9b83()),_0x3940df();}}function _0x384412(){var _0x13b809=_0x3b5618,_0x876cb1=_0x4830a0[_0x13b809(0x1e0)](_0x2501b0);if(!_0x876cb1)return _0x250772;if(_0x876cb1[_0x13b809(0x7a8)+'et']['api'])return _0x876cb1['api'];try{return _0xecc476(_0x876cb1);}catch(_0x5259ea){if(_0x13b809(0x9dd)===_0x4830a0[_0x13b809(0x425)])_0x2e28e2=_0x4dd76d,_0x1190eb=_0x236f16['now']()-_0x369cd1;else return _0x876cb1[_0x13b809(0x7a8)+'et']['api']='1',_0x876cb1['api']=_0x250772,console['warn'](_0x13b809(0x6fb)+'kura]'+'\x20pane'+_0x13b809(0x4af)+'abled','color'+':'+_0xf63150,_0x5259ea),_0x250772;}}function _0xecc476(_0x4f5150){var _0x8f8d47=_0x3b5618,_0x4d8979={'wohsi':function(_0x1e7d48,_0x42b867){return _0x1e7d48(_0x42b867);},'xlRih':function(_0x36a828,_0x1e7afb){return _0x36a828+_0x1e7afb;},'tUcjy':_0x4830a0[_0x8f8d47(0xa8e)],'NIPkc':'3|4|0'+'|2|1','BqFRO':function(_0x31c405,_0x5f0b7a){return _0x31c405+_0x5f0b7a;}};_0x4f5150[_0x8f8d47(0x86d)][_0x8f8d47(0xd9e)+'xt']=_0x8f8d47(0x6c7)+'ion:f'+'ixed;'+_0x8f8d47(0xb05)+_0x8f8d47(0xb0b)+_0x8f8d47(0xae3)+'2px;z'+_0x8f8d47(0x64a)+_0x8f8d47(0xc27)+_0x8f8d47(0x50d)+'00;ma'+'x-wid'+_0x8f8d47(0x2dc)+'n(52v'+_0x8f8d47(0x49a)+_0x8f8d47(0x3c7)+'ax-he'+'ight:'+_0x8f8d47(0x5b8)+_0x4830a0[_0x8f8d47(0x5b2)]+_0x4830a0['pTWLG']+(_0x8f8d47(0x95b)+_0x8f8d47(0x664)+_0x8f8d47(0x78c)+_0x8f8d47(0xc7b)+'recti'+_0x8f8d47(0xc11)+'lumn;'+_0x8f8d47(0xb95)+_0x8f8d47(0x792)+'idden'+';'),_0x4f5150[_0x8f8d47(0x34b)+_0x8f8d47(0x802)]=_0x4830a0[_0x8f8d47(0xccb)](_0x4830a0['BKbny'](_0x4830a0[_0x8f8d47(0x3be)](_0x4830a0['ewNsT'](_0x4830a0['Ffozr'](_0x4830a0[_0x8f8d47(0x235)](_0x4830a0['aXROb'](_0x8f8d47(0x52f)+'style'+_0x8f8d47(0x6be)+_0x8f8d47(0xbc7)+'9px\x201'+_0x8f8d47(0x7c9)+_0x8f8d47(0xbe5)+_0x8f8d47(0x257)+'om:1p'+_0x8f8d47(0x519)+_0x8f8d47(0x7c1)+_0x8f8d47(0x9ad)+_0x8f8d47(0xc91)+',177,'+_0x8f8d47(0xc1c)+_0x8f8d47(0x96a)+'y:fle'+_0x8f8d47(0x4c8)+':8px;'+_0x8f8d47(0x8d6)+_0x8f8d47(0xb32)+'s:cen'+'ter;f'+'lex:0'+'\x200\x20au'+'to;\x22>'+(_0x8f8d47(0x753)+_0x8f8d47(0x589)+_0x8f8d47(0xccd)+':')+_0xf63150+(_0x8f8d47(0xd5f)+'ura\x20·'+_0x8f8d47(0x4ed)+'lwarz'+_0x8f8d47(0x63b))+_0x4830a0['NyAyW'],_0x8f8d47(0xbaa)+_0x8f8d47(0x4f1)+'sw2-s'+'tatus'+_0x8f8d47(0x4ab)+_0x8f8d47(0x2c6)+'olor:'+_0x8f8d47(0x544)+_0x8f8d47(0x74c)+_0x8f8d47(0x8f1)+'g\x20for'+'\x20game'+_0x8f8d47(0xda7)+_0x8f8d47(0x2a7)+_0x8f8d47(0xdc7))+(_0x8f8d47(0xca1)+_0x8f8d47(0xb1d)+'=\x22sw2'+_0x8f8d47(0x67a)+'\x22\x20sty'+'le=\x22d'+_0x8f8d47(0x96a)+_0x8f8d47(0x515)+_0x8f8d47(0x6a2)+_0x8f8d47(0x84d)+'eft:a'+'uto;b'+'ackgr'+'ound:')+_0xf63150+(_0x8f8d47(0x506)+_0x8f8d47(0x4ea)+'color'+_0x8f8d47(0x87a)+'f1b;b'+_0x8f8d47(0xbe5)+'-radi'+'us:7p'+_0x8f8d47(0xa40)+'ding:'+'4px\x201'+'0px;f'+_0x8f8d47(0x939)+'eight'+':700;'+'curso'+_0x8f8d47(0x2b2)+'nter;'+'\x22>Cop'+_0x8f8d47(0x5d6)+'N</bu'+_0x8f8d47(0xa2e)),_0x8f8d47(0xca1)+'on\x20id'+_0x8f8d47(0x237)+_0x8f8d47(0x2f7)+_0x8f8d47(0xc23)+'tyle='+'\x22back'+_0x8f8d47(0xa49)+'d:tra'+_0x8f8d47(0xcf5)+_0x8f8d47(0x7b9)+_0x8f8d47(0xbe5)+':1px\x20'+_0x8f8d47(0x416)+_0x8f8d47(0x899)+_0x8f8d47(0x271)+'143,1'+_0x8f8d47(0x531)+');col'+'or:#f'+_0x8f8d47(0xb13)+_0x8f8d47(0x506)+'er-ra'+_0x8f8d47(0x9d4)+_0x8f8d47(0x644)+'addin'+'g:4px'+_0x8f8d47(0xa15)+'curso'+'r:poi'+_0x8f8d47(0xa87)+_0x8f8d47(0x530)+_0x8f8d47(0xcb4)+_0x8f8d47(0xa2e))+_0x4830a0['QAVOl']+('</div'+'>'),_0x4830a0['bHnHc']),_0x4830a0[_0x8f8d47(0x815)])+(_0x8f8d47(0xca1)+_0x8f8d47(0xb1d)+_0x8f8d47(0x237)+'-spee'+_0x8f8d47(0x1e7)+_0x8f8d47(0x589)+'backg'+'round'+':tran'+_0x8f8d47(0xb2e)+_0x8f8d47(0xb7e)+'rder:'+'1px\x20s'+'olid\x20'+_0x8f8d47(0x536)+'255,1'+_0x8f8d47(0x554)+'7,.4)'+';colo'+_0x8f8d47(0xaf3)+_0x8f8d47(0x943)+_0x8f8d47(0x68a)+'r-rad'+_0x8f8d47(0xb4b)+_0x8f8d47(0x2b6)+_0x8f8d47(0xa23)+':4px\x20'+'10px;'+_0x8f8d47(0xca5)+'r:poi'+'nter;'+'\x22>Spe'+'ed\x20of'+_0x8f8d47(0x9f4)+_0x8f8d47(0xa2e))+_0x4830a0[_0x8f8d47(0x8cb)],_0xf63150)+_0x4830a0['OWTNf'],'<span'+'\x20id=\x22'+_0x8f8d47(0x355)+_0x8f8d47(0xc83)+_0x8f8d47(0xb1e)+'\x22\x20sty'+_0x8f8d47(0x2c6)+_0x8f8d47(0xa83)+'#bda9'+_0x8f8d47(0x874)+_0x8f8d47(0xd28)+_0x8f8d47(0x4f4)+_0x8f8d47(0x535)+_0x8f8d47(0x5d9)+_0x8f8d47(0x40b)+'>')+_0x4830a0[_0x8f8d47(0x7f0)]+(_0x8f8d47(0xbaa)+_0x8f8d47(0x4f1)+'sw2-h'+_0x8f8d47(0x7c6)+_0x8f8d47(0x86d)+_0x8f8d47(0x443)+'or:#8'+_0x8f8d47(0xb54)+'\x22>F9\x20'+_0x8f8d47(0x992)+_0x8f8d47(0xd73)+_0x8f8d47(0x26c)+'king\x20'+_0x8f8d47(0xcc9)+_0x8f8d47(0xc0b)+_0x8f8d47(0x791)+_0x8f8d47(0x585)+'g\x20mar'+'ks\x20wh'+_0x8f8d47(0x98e)+_0x8f8d47(0x87d)+_0x8f8d47(0x3d8)+_0x8f8d47(0x5a5)+_0x8f8d47(0x40b)+'>')+(_0x8f8d47(0x661)+'>')+_0x4830a0[_0x8f8d47(0x391)]+(_0x8f8d47(0xc0a)+_0x8f8d47(0x479)+_0x8f8d47(0x26d)+_0x8f8d47(0xabf)+'\x20repo'+_0x8f8d47(0x42c)+'t.\x0a\x0aT'+_0x8f8d47(0x25f)+_0x8f8d47(0xc8b)+_0x8f8d47(0x3bc)+'es\x20it'+_0x8f8d47(0x603)+'when\x20'+'the\x20g'+_0x8f8d47(0x496)+_0x8f8d47(0x489)+'loads'+'\x20—\x20no'+'\x20cons'+_0x8f8d47(0x20a)+_0x8f8d47(0x64b)+_0x8f8d47(0xbea)+_0x8f8d47(0x7b1)+'tays\x20'+'empty'+',\x20Tam'+_0x8f8d47(0x43f)+_0x8f8d47(0x5a1)+_0x8f8d47(0x742)+_0x8f8d47(0x312)+_0x8f8d47(0xa47)+_0x8f8d47(0x2c4)+_0x8f8d47(0xb7a)+'\x20cros'+_0x8f8d47(0xa30)+'gin\x20g'+'ame\x20f'+_0x8f8d47(0xda3)+_0x8f8d47(0x474)+'>'),_0x4830a0[_0x8f8d47(0x4fc)]);var _0x948466=_0x4f5150['query'+'Selec'+_0x8f8d47(0x390)](_0x8f8d47(0x79d)+_0x8f8d47(0x435)+'s'),_0xa8293a=_0x4f5150[_0x8f8d47(0xcc7)+_0x8f8d47(0xdb3)+_0x8f8d47(0x390)](_0x4830a0[_0x8f8d47(0x40d)]),_0x2b2da2=_0x4f5150[_0x8f8d47(0xcc7)+_0x8f8d47(0xdb3)+'tor']('#sw2-'+'out'),_0x5da9a4=_0x4f5150[_0x8f8d47(0xcc7)+_0x8f8d47(0xdb3)+_0x8f8d47(0x390)](_0x8f8d47(0x79d)+_0x8f8d47(0x2d1)),_0x2d6b26=_0x4f5150[_0x8f8d47(0xcc7)+_0x8f8d47(0xdb3)+'tor'](_0x8f8d47(0x79d)+'x'),_0x14b808=_0x4f5150[_0x8f8d47(0xcc7)+'Selec'+_0x8f8d47(0x390)](_0x8f8d47(0x79d)+_0x8f8d47(0x21d)+'e'),_0xe5ec67=_0x4f5150[_0x8f8d47(0xcc7)+_0x8f8d47(0xdb3)+'tor'](_0x4830a0[_0x8f8d47(0x54f)]),_0x5166ba=_0x4f5150['query'+_0x8f8d47(0xdb3)+'tor'](_0x4830a0['qZpPW']),_0x28538f=_0x4f5150['query'+'Selec'+'tor'](_0x4830a0[_0x8f8d47(0x7a2)]),_0x2eb71c=_0x4f5150['query'+_0x8f8d47(0xdb3)+'tor'](_0x8f8d47(0x79d)+_0x8f8d47(0x5db)+'r'),_0x3496d8=_0x4f5150['query'+_0x8f8d47(0xdb3)+'tor']('#sw2-'+_0x8f8d47(0x5db)+_0x8f8d47(0x41a)+'l'),_0x54bb0f=_0x4f5150['query'+_0x8f8d47(0xdb3)+_0x8f8d47(0x390)](_0x4830a0['LBoOh']),_0x99603a=null,_0x5f13af=![];function _0x310af4(){var _0x4999ea=_0x8f8d47;if(_0xe5ec67)_0xe5ec67[_0x4999ea(0x86d)][_0x4999ea(0x95b)+'ay']=_0x5f13af?'':_0x4830a0[_0x4999ea(0x72d)];if(_0x14b808)_0x14b808['textC'+_0x4999ea(0x3b9)+'t']=_0x5f13af?_0x4830a0['QHgyv']:'open';_0x4f5150['style'][_0x4999ea(0x430)]=_0x5f13af?_0x4999ea(0x2fd)+'2vw,6'+_0x4999ea(0x831):_0x4999ea(0x379),_0x4f5150[_0x4999ea(0x86d)]['backg'+'round']=_0x5f13af?_0x4999ea(0x773)+'1d':_0x4830a0['xZOla'];}if(_0x14b808)_0x14b808[_0x8f8d47(0x93e)+'ck']=function(){var _0x20b12b=_0x8f8d47;if(_0x20b12b(0x946)!=='VlnmN')_0x5f13af=!_0x5f13af,_0x310af4();else return _0x1865cd['o'];};_0x4830a0[_0x8f8d47(0x856)](_0x310af4);if(_0x2d6b26)_0x2d6b26['oncli'+'ck']=function(){_0x31ad03(!![]);};if(_0x5166ba)_0x5166ba[_0x8f8d47(0x93e)+'ck']=function(){var _0x37d97c=_0x8f8d47,_0x5e4fcf={'PoZln':function(_0x261ab5,_0xfb5c4e,_0x2dbf86,_0x3af324){return _0x261ab5(_0xfb5c4e,_0x2dbf86,_0x3af324);},'OCiRt':_0x4830a0['wXtTz'],'TBKXa':function(_0xc44289,_0x42a8ab){return _0xc44289+_0x42a8ab;}};if(_0x37d97c(0xc06)===_0x37d97c(0x34c)){var _0x3fd062=_0x3b6cd2[_0x1f0a17],_0x5aea96=_0x5e4fcf[_0x37d97c(0x7d1)](_0x3f2704,_0x37d97c(0x35f)+'n',_0x5e4fcf[_0x37d97c(0xbed)],_0x5e4fcf[_0x37d97c(0x3d1)](_0x5e4fcf[_0x37d97c(0x3d1)](_0x37d97c(0x263)+'l>',_0x3fd062[_0x37d97c(0xb1e)]),_0x37d97c(0xac0)+_0x37d97c(0xc9c)));_0x5aea96['type']=_0x37d97c(0x35f)+'n',_0x5aea96[_0x37d97c(0x6e9)]=_0x3fd062['label'],function(_0x3ec091){_0x5aea96['oncli'+'ck']=function(){_0x235695(_0x3ec091);};}(_0x3fd062['id']),_0x1e331e[_0x3fd062['id']]=_0x5aea96,_0x3e61b6[_0x37d97c(0x69b)+'dChil'+'d'](_0x5aea96);}else _0x4830a0[_0x37d97c(0xd2a)](_0x40b35e,_0x4830a0[_0x37d97c(0x236)]);};var _0x419169=![];function _0x4d8399(){var _0x133204=_0x8f8d47;_0x40b35e('speed',{'on':_0x419169,'factor':_0x4d8979[_0x133204(0x76a)](parseFloat,_0x2eb71c[_0x133204(0x61f)])||0x208d+-0x270f+-0x683*-0x1});}if(_0x28538f)_0x28538f[_0x8f8d47(0x93e)+'ck']=function(){var _0xf740b7=_0x8f8d47,_0x380a76=(_0xf740b7(0x906)+'|1|3')[_0xf740b7(0x8a1)]('|'),_0x2f5394=0x25a5+0x1030+-0x35d5;while(!![]){switch(_0x380a76[_0x2f5394++]){case'0':_0x28538f[_0xf740b7(0x86d)]['backg'+'round']=_0x419169?_0xf63150:_0xf740b7(0x934)+'paren'+'t';continue;case'1':_0x28538f[_0xf740b7(0x86d)]['color']=_0x419169?'#2a0f'+'1b':'#f7ee'+'f5';continue;case'2':_0x28538f[_0xf740b7(0x2a0)+'onten'+'t']=_0x419169?_0xf740b7(0x2ed)+_0xf740b7(0x4fa):'Speed'+'\x20off';continue;case'3':_0x4d8399();continue;case'4':_0x419169=!_0x419169;continue;}break;}};if(_0x2eb71c)_0x2eb71c[_0x8f8d47(0x5c4)+'ut']=function(){var _0x337f46=_0x8f8d47;if(_0x3496d8)_0x3496d8['textC'+_0x337f46(0x3b9)+'t']=(_0x4d8979['wohsi'](parseFloat,_0x2eb71c['value'])||0x1d91*0x1+0x1*-0x2287+0x4f7)[_0x337f46(0xa08)+'ed'](-0x2198+-0x7ed*0x1+0x2986)+'x';_0x4d8399();};if(_0x5da9a4)_0x5da9a4[_0x8f8d47(0x93e)+'ck']=function(){var _0x535e3c=_0x8f8d47,_0x4880b2={'zFdfm':function(_0x37d8ef,_0x5e0c3b){return _0x37d8ef<_0x5e0c3b;},'edrkp':_0x4830a0['cjQOv'],'uIQSD':function(_0x2008c5,_0x1ff87a){return _0x4830a0['NkkXx'](_0x2008c5,_0x1ff87a);},'AwZeG':_0x535e3c(0x21e),'SQVSL':_0x535e3c(0x9b5)+'ve'},_0xe174c9=_0x4830a0[_0x535e3c(0xccb)](_0x14987d+'\x0a'+(_0x99603a?JSON[_0x535e3c(0xda6)+_0x535e3c(0x795)](_0x99603a,null,-0x1*-0x18c2+-0xe2*-0x1f+-0x341f):'')+'\x0a',_0x538b47),_0x56d500=function(){var _0x322283=_0x535e3c;if(_0x322283(0x21e)!==_0x4880b2[_0x322283(0xb5e)]){_0x375f33[_0x322283(0x44c)]=_0x2ad205,_0x17148e['syncs']=[];if(!_0x53443f[_0x322283(0xcc8)])return;var _0x1543e9=null;for(var _0x529c3d=0x1696+0x22cf*0x1+-0x1*0x3965;_0x4880b2['zFdfm'](_0x529c3d,_0x58fa8b['lengt'+'h']);_0x529c3d++)if(_0x3273fd[_0x529c3d]['id']===_0x544b95)_0x1543e9=_0x4f7aed[_0x529c3d];_0x46ef0f['head']['textC'+_0x322283(0x3b9)+'t']=_0x4880b2[_0x322283(0x7df)]+(_0x1543e9&&_0x1543e9[_0x322283(0xb1e)]||'?');for(var _0x345a8f in _0x33e29a[_0x322283(0x35f)+'ns']){if(_0xda376e[_0x322283(0x35f)+'ns'][_0x345a8f][_0x322283(0xc12)+_0x322283(0xcba)])_0x57d6b2['butto'+'ns'][_0x345a8f]['class'+_0x322283(0xbce)]='mn-ta'+'b'+(_0x4880b2['uIQSD'](_0x345a8f,_0x56107c)?_0x322283(0x9b5)+'ve':'');}var _0x4b1f0d=[];try{_0x4b1f0d=_0x4c0459(_0x18a7fd);}catch(_0x52a386){_0x4b1f0d=[];}while(_0x3fe2f0[_0x322283(0xcc8)]['first'+_0x322283(0x805)])_0x490d4c[_0x322283(0xcc8)][_0x322283(0x594)+_0x322283(0x4e0)+'d'](_0x2915af['cols']['first'+'Child']);for(var _0x1a2275=0x137f+-0x1*0x1129+-0x256;_0x1a2275<_0x4b1f0d[_0x322283(0x853)+'h'];_0x1a2275++)_0x58d4b2['cols']['appen'+_0x322283(0x79e)+'d'](_0x4b1f0d[_0x1a2275]);}else{if(_0x5da9a4)_0x5da9a4[_0x322283(0x2a0)+_0x322283(0x3b9)+'t']=_0x322283(0x878)+'d';}};if(navigator[_0x535e3c(0x87e)+_0x535e3c(0x359)]&&navigator['clipb'+_0x535e3c(0x359)][_0x535e3c(0x9bc)+'Text']){if('ZnCaJ'===_0x4830a0['SUcND']){_0x48ea2a[_0x535e3c(0xbb7)]({'o':-(-0x1a7b+-0x10dd+0x2b59),'v':0x0,'why':_0x4d8979[_0x535e3c(0x9f6)](_0x535e3c(0x729)+'oup\x20o'+'f\x20'+_0x3aacdb,_0x4d8979[_0x535e3c(0xbb8)])});return;}else navigator['clipb'+_0x535e3c(0x359)][_0x535e3c(0x9bc)+'Text'](_0xe174c9)[_0x535e3c(0xb5d)](_0x56d500,function(){var _0x4cc043=_0x535e3c;if('KxWdz'===_0x4cc043(0xb1a)){var _0x520005=_0x55345f[_0x4cc043(0x370)+'Insta'+'nce']||_0x183286['unity'+'Game']||_0x2c3cc2['game'];if(_0x520005)return _0x4bc83d['sourc'+'e']='windo'+_0x4cc043(0xd54)+_0x4cc043(0xbda),_0x520005;}else _0x19d5f7();});}else _0x19d5f7();function _0x19d5f7(){var _0x13dfff=_0x535e3c,_0x4edde5=document[_0x13dfff(0x839)+_0x13dfff(0xcdd)+'ent'](_0x13dfff(0xc01)+'rea');_0x4edde5[_0x13dfff(0x61f)]=_0xe174c9;if(!document[_0x13dfff(0x84b)])return;document['body'][_0x13dfff(0x69b)+_0x13dfff(0x79e)+'d'](_0x4edde5),_0x4edde5[_0x13dfff(0xb57)+'t']();try{if('MfEVY'!==_0x13dfff(0x6bb))document['execC'+'omman'+'d'](_0x13dfff(0x2d1)),_0x56d500();else{if(_0x7df0ed['butto'+'ns'][_0x3f78f9][_0x13dfff(0xc12)+_0x13dfff(0xcba)])_0x5e1163[_0x13dfff(0x35f)+'ns'][_0x400afe][_0x13dfff(0xc12)+'Name']=_0x13dfff(0xdbb)+'b'+(_0xdc3959===_0x464a8a?_0x4880b2[_0x13dfff(0x420)]:'');}}catch(_0x1b2758){}_0x4edde5[_0x13dfff(0x594)+'e']();}};setTimeout(function(){var _0x4011a4=_0x8f8d47,_0x2a4ab5=(_0x4011a4(0xaa0)+'|3|0')[_0x4011a4(0x8a1)]('|'),_0x3815ed=-0x25e9+0x7c7+0x1e22;while(!![]){switch(_0x2a4ab5[_0x3815ed++]){case'0':_0x2b2da2['textC'+_0x4011a4(0x3b9)+'t']=_0x4830a0['eSoWh'](_0x4830a0['eSoWh'](_0x4830a0['sJgAp'](_0x4011a4(0xb4f)+_0x4011a4(0x496)+_0x4011a4(0x489)+_0x4011a4(0x67e)+'\x20post'+_0x4011a4(0x1f4)+_0x4011a4(0x34f)+'e\x20rep'+_0x4011a4(0x65a)+'\x0a'+(_0x4011a4(0x9d9)+_0x4011a4(0x732)+_0x4011a4(0x4dc)+'es\x20th'+_0x4011a4(0xacb)+'rscri'+'pt\x20IS'+_0x4011a4(0x864)+_0x4011a4(0xc88)+'\x20and\x20'+'runni'+_0x4011a4(0x507)+'\x20the\x20'+_0x4011a4(0xc93)+'l,\x0a'),_0x4011a4(0xd1a)+_0x4011a4(0xd19)+'ainin'+_0x4011a4(0x534)+_0x4011a4(0xaa9)+_0x4011a4(0x4eb)+'\x0a\x0a')+('\x20\x201.\x20'+_0x4011a4(0x803)+_0x4011a4(0xb84)+_0x4011a4(0xa8b)+'\x20not\x20'+_0x4011a4(0x727)+_0x4011a4(0x73e)+_0x4011a4(0x6c3)+_0x4011a4(0x600)+'ross-'+_0x4011a4(0x8bd)+_0x4011a4(0x54c)+_0x4011a4(0xd5e))+_0x4830a0[_0x4011a4(0xb02)],_0x4830a0['vrFTJ']),_0x4011a4(0x4db)+'insta'+_0x4011a4(0x37c)+'—\x20two'+'\x20copi'+'es\x20of'+'\x20UWMK'+_0x4011a4(0x672)+_0x4011a4(0x47d)+'h\x20Web'+_0x4011a4(0x60a)+_0x4011a4(0x76d)+_0x4011a4(0x9da)+_0x4011a4(0xada)+_0x4011a4(0xd7c))+('Reloa'+_0x4011a4(0xd5a)+'\x20game'+_0x4011a4(0xd87)+_0x4011a4(0x736)+_0x4011a4(0xd52)+'watch'+_0x4011a4(0x48c)+_0x4011a4(0x3ee)+_0x4011a4(0x3af)+'in.');continue;case'1':_0x948466['textC'+_0x4011a4(0x3b9)+'t']=_0x4011a4(0xb29)+_0x4011a4(0x950)+_0x4011a4(0x858)+'\x2060s\x20'+_0x4011a4(0x2b0)+_0x4011a4(0x4ec)+_0x4011a4(0x312)+_0x4011a4(0xac1)+'?';continue;case'2':if(_0x4830a0[_0x4011a4(0x222)](!_0x948466,!_0x2b2da2))return;continue;case'3':_0x948466[_0x4011a4(0x86d)][_0x4011a4(0xccd)]='#ffb3'+'c7';continue;case'4':if(_0x99603a)return;continue;}break;}},0x1c770+-0xfb*-0x14+-0x1*0xf0ac);var _0xcd7a7a={'set':function(_0x4f2f8c){var _0x36ac9a=_0x8f8d47,_0x164d40={'tRDVM':function(_0x57dd10,_0x5da12d){return _0x57dd10===_0x5da12d;},'eZXUD':'funct'+'ion','FuqJE':function(_0x453785,_0x46bf87){return _0x453785(_0x46bf87);}};if(_0x4830a0['QRQTk'](_0x36ac9a(0x440),'RMUZt'))_0x505ce6[_0x36ac9a(0x615)]=_0x5c1e4b(_0x3db2dd&&_0x52f058['messa'+'ge']||_0x4de3eb);else{_0x99603a=_0x4f2f8c;if(_0x5da9a4)_0x5da9a4['style']['displ'+'ay']='';if(_0xa8293a){var _0x556e63=_0x4830a0['NTkFt'][_0x36ac9a(0x8a1)]('|'),_0x3a1440=-0x987*-0x1+0x26ca+0x6e7*-0x7;while(!![]){switch(_0x556e63[_0x3a1440++]){case'0':_0xa8293a[_0x36ac9a(0x86d)][_0x36ac9a(0xccd)]=_0x24c398===_0x12e10f?_0xf63150:_0x4830a0['KjzWH'];continue;case'1':var _0x24c398=_0x4f2f8c[_0x36ac9a(0x9f3)+'on']||'';continue;case'2':var _0x12e10f=_0x5c1a61;continue;case'3':_0xa8293a[_0x36ac9a(0x2a0)+_0x36ac9a(0x3b9)+'t']=_0x4830a0[_0x36ac9a(0xb16)]('v',_0x4f2f8c['versi'+'on']||'?');continue;case'4':_0xa8293a['style'][_0x36ac9a(0x68a)+_0x36ac9a(0xd3d)+'r']=_0x4830a0['Crvsk'](_0x24c398,_0x12e10f)?_0x4830a0['TdWPy']:_0x36ac9a(0x50e)+'74';continue;}break;}}var _0x275e0d=_0x4f2f8c['insta'+_0x36ac9a(0x989)]&&_0x4f2f8c[_0x36ac9a(0x57b)+_0x36ac9a(0x989)]['FPSco'+_0x36ac9a(0x60b)+'ler'],_0x55c3a2=Math['round'](_0x4830a0[_0x36ac9a(0x31b)](_0x4f2f8c['elaps'+'edMs']||0x1c67+0x7ed*0x2+-0x2c41*0x1,0x1c07+0x1*0x2135+-0xc*0x4c7));if(_0x948466){var _0x2e1b16,_0x4bd282;if(_0x275e0d&&_0x4f2f8c[_0x36ac9a(0xd97)+'y']&&_0x4f2f8c['surve'+'y'][_0x36ac9a(0xb3f)+'ntrol'+'ler'])_0x2e1b16=_0x4830a0[_0x36ac9a(0x4a8)](_0x4830a0['sENLX'](_0x4830a0[_0x36ac9a(0x4a8)]('LIVE\x20'+'·\x20',Object[_0x36ac9a(0xb8c)](_0x4f2f8c['insta'+'nces'])['lengt'+'h']),_0x4830a0[_0x36ac9a(0x9d0)])+_0x55c3a2,'s'),_0x4bd282=_0x4830a0['SIjBZ'];else{if(_0x4f2f8c[_0x36ac9a(0xc64)+_0x36ac9a(0x780)+'ed']>0x567*-0x2+-0x1*-0x13b2+-0x8e4)_0x2e1b16=_0x4830a0['btIRE'](_0x36ac9a(0xc64)+'\x20arme'+'d\x20·\x20',_0x55c3a2)+'s',_0x4bd282='#ffd4'+'8a';else _0x4f2f8c['scrip'+'tData']?_0x4830a0['SCSIl']!==_0x4830a0[_0x36ac9a(0x561)]?_0x4f0248['span']=_0x5b0187:(_0x2e1b16=_0x4830a0['BKbny'](_0x4830a0['APqbg']+_0x55c3a2,'s'),_0x4bd282=_0x36ac9a(0x6a3)+'8a'):(_0x2e1b16=_0x4830a0[_0x36ac9a(0xb16)](_0x4f2f8c[_0x36ac9a(0x372)]&&_0x4f2f8c[_0x36ac9a(0x372)]['ok']?_0x4830a0[_0x36ac9a(0xbc6)]:_0x4830a0['NOMyU'],_0x55c3a2)+'s',_0x4bd282='#ffd4'+'8a');}_0x948466[_0x36ac9a(0x2a0)+_0x36ac9a(0x3b9)+'t']=_0x2e1b16,_0x948466[_0x36ac9a(0x86d)][_0x36ac9a(0xccd)]=_0x4bd282;}_0x54bb0f&&(_0x54bb0f['textC'+'onten'+'t']=_0x4f2f8c[_0x36ac9a(0x3b7)]&&_0x4f2f8c[_0x36ac9a(0x3b7)][_0x36ac9a(0x853)+'h']?_0x4830a0['cvuxS']+_0x4f2f8c[_0x36ac9a(0x3b7)][_0x36ac9a(0xbe3)](',\x20'):_0x4830a0[_0x36ac9a(0x7da)]);if(_0x4f2f8c[_0x36ac9a(0xdc5)]&&_0x28538f){if('ZFNDA'!==_0x36ac9a(0x38c))_0x419169=!!_0x4f2f8c[_0x36ac9a(0xdc5)]['on'],_0x28538f['textC'+'onten'+'t']=_0x419169?_0x4830a0[_0x36ac9a(0xc37)]:_0x36ac9a(0x2ed)+'\x20off',_0x28538f[_0x36ac9a(0x86d)][_0x36ac9a(0x7e1)+_0x36ac9a(0x8dd)]=_0x419169?_0xf63150:_0x36ac9a(0x934)+'paren'+'t',_0x28538f[_0x36ac9a(0x86d)][_0x36ac9a(0xccd)]=_0x419169?_0x36ac9a(0xc4b)+'1b':_0x4830a0[_0x36ac9a(0x5ad)],_0x3496d8&&_0x4f2f8c['speed']['facto'+'r']&&(_0x3496d8['textC'+'onten'+'t']=_0x4830a0['xkZaW'](Number,_0x4f2f8c['speed']['facto'+'r'])['toFix'+'ed'](-0x105d+-0x17*-0xef+0x1*-0x51b)+'x');else{var _0x20dad1=_0x4d8979[_0x36ac9a(0x722)][_0x36ac9a(0x8a1)]('|'),_0x201267=-0x11f8+-0x135e+0x426*0x9;while(!![]){switch(_0x20dad1[_0x201267++]){case'0':var _0xad1733=_0x1e03fe['versi'+'on']||'';continue;case'1':_0xb0230[_0x36ac9a(0x86d)]['borde'+'rColo'+'r']=_0xad1733===_0xfd3bd2?'rgba('+'255,1'+_0x36ac9a(0x554)+_0x36ac9a(0xd6e)+')':_0x36ac9a(0x50e)+'74';continue;case'2':_0x2d579d[_0x36ac9a(0x86d)][_0x36ac9a(0xccd)]=_0xad1733===_0xfd3bd2?_0x15aa08:'#ff6e'+'74';continue;case'3':_0x386dee['textC'+_0x36ac9a(0x3b9)+'t']=_0x4d8979['BqFRO']('v',_0x2bccd2['versi'+'on']||'?');continue;case'4':var _0xfd3bd2=_0x198dac;continue;}break;}}}if(_0x2b2da2)try{if(_0x36ac9a(0x962)===_0x36ac9a(0x4f9)){var _0x24fd64=_0x1373fd[_0x36ac9a(0x692)](this,arguments);try{if(_0x24fd64&&_0x164d40[_0x36ac9a(0xb18)](typeof _0x24fd64['then'],_0x164d40['eZXUD']))_0x24fd64[_0x36ac9a(0xb5d)](_0x52d67e,function(){});else _0x164d40['FuqJE'](_0x6ae22a,_0x24fd64);}catch(_0x1b5813){}return _0x24fd64;}else _0x2b2da2[_0x36ac9a(0x2a0)+_0x36ac9a(0x3b9)+'t']=_0x550093(_0x4f2f8c);}catch(_0x553c00){_0x2b2da2['textC'+_0x36ac9a(0x3b9)+'t']=JSON[_0x36ac9a(0xda6)+'gify'](_0x4f2f8c,null,0xa91*-0x1+0x23f*-0xb+-0xb*-0x335);}console['log'](_0x4830a0['KRiOK'],_0x4830a0[_0x36ac9a(0xa63)](_0x4830a0[_0x36ac9a(0x208)]('color'+':',_0xf63150),_0x36ac9a(0x256)+'-weig'+_0x36ac9a(0x6ca)+'0'),_0x4f2f8c),console[_0x36ac9a(0x90e)](_0x14987d+'\x0a'+JSON['strin'+_0x36ac9a(0x795)](_0x4f2f8c,null,-0x6*0x446+-0x70f*-0x1+0x1296)+'\x0a'+_0x538b47);}}};return _0x4f5150[_0x8f8d47(0x7a8)+'et']['api']='1',_0x4f5150[_0x8f8d47(0x565)]=_0xcd7a7a,_0xcd7a7a;}function _0x550093(_0x7b0636){var _0xf007ae=_0x3b5618,_0x31235e={'CvZwP':function(_0x1a6c88){return _0x4830a0['AuQQr'](_0x1a6c88);},'SkiNF':function(_0x51fc78){return _0x51fc78();},'QfMaG':function(_0xa2a0e3){var _0x428565=_0x1d88;return _0x4830a0[_0x428565(0x1e0)](_0xa2a0e3);},'Hegex':_0xf007ae(0x2f1)+'|4|2|'+_0xf007ae(0x8cd)+'|8','QCeYK':'true'},_0x439078=[];_0x439078[_0xf007ae(0xbb7)](_0x4830a0['sENLX'](_0x4830a0['WHWja'](_0xf007ae(0xbe1)+'\x20\x20\x20\x20'+(_0x7b0636['host']||'?')+'\x20\x20(',Math['round']((_0x7b0636['elaps'+'edMs']||-0x10c4+0xa5f+-0x1*-0x665)/(-0x2*0xc65+-0x3*-0x4eb+0xdf1))),'s)')),_0x439078[_0xf007ae(0xbb7)](_0x4830a0[_0xf007ae(0x854)](_0x4830a0['aXROb'](_0x4830a0[_0xf007ae(0x504)],_0x7b0636[_0xf007ae(0x9a1)]?_0x4830a0['hNJSW']:'no')+(_0xf007ae(0x9f2)+_0xf007ae(0x680)+'\x20'),_0x7b0636[_0xf007ae(0x453)+_0xf007ae(0x2d3)+_0xf007ae(0xc3e)]?_0xf007ae(0x1f2):'no')+_0x4830a0['ftblC']+(_0x4830a0['ewWqt'](_0x7b0636['typeC'+_0xf007ae(0x9eb)],null)?_0x7b0636['typeC'+_0xf007ae(0x9eb)]:'?')),_0x439078[_0xf007ae(0xbb7)](_0x4830a0['VXIzE'](_0x4830a0['YWJbh'](_0x4830a0['qrGkc'],_0x7b0636[_0xf007ae(0xc64)+_0xf007ae(0x780)+'ed'])+'/'+_0x7b0636['hooks'+'Total'],_0xf007ae(0x49e)+_0xf007ae(0x3c2))),_0x439078[_0xf007ae(0xbb7)]('');var _0x322b44=_0x7b0636[_0xf007ae(0x57b)+_0xf007ae(0x989)]||{},_0x3c9108=Object['keys'](_0x322b44);if(!_0x3c9108['lengt'+'h']){if(_0x4830a0['QiGQJ']===_0x4830a0['QiGQJ'])_0x439078[_0xf007ae(0xbb7)](_0xf007ae(0x57f)+_0xf007ae(0xc3a)+_0xf007ae(0xaf8)+_0xf007ae(0xa44)+_0xf007ae(0xc24)+'yet.'),_0x439078[_0xf007ae(0xbb7)](''),_0x439078['push'](_0xf007ae(0x3c1)+'ooks\x20'+'fire\x20'+'on\x20th'+_0xf007ae(0x439)+_0xf007ae(0x529)+'wn\x20Up'+_0xf007ae(0xd8f)+_0xf007ae(0xcc3)+'thing'+_0xf007ae(0xa44)+_0xf007ae(0xc24)+_0xf007ae(0xa38)),_0x439078[_0xf007ae(0xbb7)](_0x4830a0['QmgLJ']);else{if(_0x16a571&&_0x1d4f30['buffe'+'r']&&_0xea6840[_0xf007ae(0xd7a)+'r'][_0xf007ae(0xd84)+_0xf007ae(0xcfe)])return _0x3702d6['sourc'+'e']=_0x2f8d0e['sourc'+'e']||'insta'+_0xf007ae(0xdb5)+_0xf007ae(0xd26)+_0xf007ae(0x374)+_0xf007ae(0x8a6)+_0xf007ae(0x59f),new _0x176d8c(_0x57d27e[_0xf007ae(0xd7a)+'r']);}}for(var _0xc8cc36=0x11ac+0x946+-0x1af2;_0x4830a0['PCJGI'](_0xc8cc36,_0x3c9108[_0xf007ae(0x853)+'h']);_0xc8cc36++){if(_0x4830a0[_0xf007ae(0xc05)](_0xf007ae(0x8e1),'DroZm')){var _0x494b4e=_0x3c9108[_0xc8cc36];_0x439078[_0xf007ae(0xbb7)](_0x494b4e+_0x4830a0[_0xf007ae(0xbd4)]+_0x322b44[_0x494b4e]);}else _0x4e4624['fov']=_0x58a1b4,_0x31235e[_0xf007ae(0x940)](_0x5ea06f);}_0x439078['push']('');var _0x4bf7c5=_0x7b0636[_0xf007ae(0xd97)+'y']||{},_0x44b0ae=Object['keys'](_0x4bf7c5);for(var _0x441271=0x1*-0x17c5+-0x213*-0x3+0x118c;_0x4830a0[_0xf007ae(0x93f)](_0x441271,_0x44b0ae['lengt'+'h']);_0x441271++){var _0x1f4c52=_0x44b0ae[_0x441271],_0x4e7db5=_0x4bf7c5[_0x1f4c52];if(!_0x4e7db5||!_0x4e7db5['lengt'+'h'])continue;_0x439078[_0xf007ae(0xbb7)](_0xf007ae(0x744)+_0x1f4c52+'\x20'+new Array(Math['max'](-0x6*0x56b+0x668+0x1a1b,-0x28b+-0x48a+0x1*0x737-_0x1f4c52[_0xf007ae(0x853)+'h']))['join']('─')),_0x439078['push'](_0xf007ae(0x31f)+_0xf007ae(0xce9)+'\x20kind'+_0xf007ae(0x4db)+_0xf007ae(0xad7)+_0xf007ae(0x89a)+'\x20\x20\x20\x20\x20'+_0xf007ae(0x4db)+'raw');for(var _0x52cbab=0x220f+0x1*-0x1b88+-0x1*0x687;_0x52cbab<_0x4e7db5[_0xf007ae(0x853)+'h'];_0x52cbab++){if('LYNqE'===_0x4830a0[_0xf007ae(0xd0a)]){var _0x27d715=_0x4e7db5[_0x52cbab],_0x6807f4=_0x4830a0[_0xf007ae(0x306)](typeof _0x27d715['v'],_0x4830a0[_0xf007ae(0xcdb)])?Math['round'](_0x27d715['v']*(-0x2*0xea8+0x1d44+0x3f4))/(-0x2*-0xb65+-0x132f+0x4d):_0x27d715['v'];_0x439078[_0xf007ae(0xbb7)](_0x4830a0[_0xf007ae(0x4a8)](_0x4830a0['WHWja']('\x20\x20',_0x4830a0[_0xf007ae(0x619)]('0x',_0x27d715['o']['toStr'+_0xf007ae(0x9f5)](-0x1038+-0xd00+0x1d48))['padEn'+'d'](-0xbab+0x1*-0x2c5+0x8*0x1cf))+'\x20'+_0x27d715['k']['padEn'+'d'](0x228f+0x2b*0x53+-0xf*0x33b)+'\x20',String(_0x6807f4)[_0xf007ae(0x889)+'d'](0x1*-0x12dd+0x1bc9+-0xc*0xbd))+'\x20'+(_0x27d715['raw']||''));}else{var _0xc8e7f1=_0x31235e[_0xf007ae(0x977)][_0xf007ae(0x8a1)]('|'),_0x29e78d=-0x4f4+-0x1c1c+0x2110;while(!![]){switch(_0xc8e7f1[_0x29e78d++]){case'0':var _0x3b807c=_0x233e1c(_0xf007ae(0x35f)+'n','sk-sw'+_0xf007ae(0x6fd));continue;case'1':_0x3b807c[_0xf007ae(0x808)]=_0x254b47;continue;case'2':_0x3b807c['oncli'+'ck']=function(){var _0x2a9ee8=_0xf007ae;_0x1c84ca(!_0x31235e['SkiNF'](_0x59cab5)),_0x31235e[_0x2a9ee8(0xb4d)](_0x254b47);};continue;case'3':var _0x40d1fb={'XhrFF':'aria-'+'check'+'ed','hYrwv':_0x31235e[_0xf007ae(0x252)],'tcEYG':'false'};continue;case'4':var _0x254b47=function(){var _0x154988=_0xf007ae;_0x3b807c[_0x154988(0xa9b)+_0x154988(0x300)+'te'](_0x40d1fb['XhrFF'],_0x56e96f()?_0x40d1fb['hYrwv']:_0x40d1fb[_0x154988(0x89e)]);};continue;case'5':_0x3ab72f[_0xf007ae(0x1f1)][_0xf007ae(0xbb7)](_0x254b47);continue;case'6':_0x254b47();continue;case'7':_0x3b807c['type']='butto'+'n';continue;case'8':return _0x3b807c;}break;}}}_0x439078[_0xf007ae(0xbb7)]('');}if(_0x7b0636[_0xf007ae(0x7fa)+_0xf007ae(0x88b)]&&_0x7b0636[_0xf007ae(0x7fa)+_0xf007ae(0x88b)][_0xf007ae(0x853)+'h']){_0x439078[_0xf007ae(0xbb7)](_0x4830a0['dFiMo']);for(var _0x47e9e8=-0x6*-0x158+-0xc7*0xd+0x1*0x20b;_0x47e9e8<_0x7b0636[_0xf007ae(0x7fa)+_0xf007ae(0x88b)]['lengt'+'h'];_0x47e9e8++)_0x439078[_0xf007ae(0xbb7)](_0x4830a0['VhowZ'](_0x4830a0['BFzbL'],_0x7b0636['warni'+'ngs'][_0x47e9e8]));}return _0x439078[_0xf007ae(0xbe3)]('\x0a');}window['addEv'+'entLi'+'stene'+'r']('messa'+'ge',function(_0x3ac386){var _0x5b26a1=_0x3b5618,_0x253a3d={'uurOV':function(_0x1aa78f,_0x2c4c83){return _0x1aa78f+_0x2c4c83;},'gkBAz':'plugi'+_0x5b26a1(0x295)+'ntime'+'\x20is\x20n'+'ot\x20wi'+_0x5b26a1(0x7c7)+'Unity'+_0x5b26a1(0xa86)+'dkit.'+'Runti'+'me\x20-\x20'+_0x5b26a1(0xd03)+'lugin'+_0x5b26a1(0x47f)+_0x5b26a1(0x52d)+'\x20','pkJds':_0x5b26a1(0x6a3)+'8a'};if(_0x4830a0['Crvsk'](_0x5b26a1(0x4fe),_0x5b26a1(0x21f)))_0x58efe0[_0x5753e4+'+0x'+_0xb9c34e[_0x28dd27]['o']['toStr'+'ing'](0x1*0x17ef+0xf33+-0xd06*0x3)]=_0x217a78[_0xea3627]['v'];else{var _0x4980fd=_0x3ac386['data'];if(!_0x4980fd||_0x4830a0[_0x5b26a1(0x91c)](_0x4980fd[_0x5b26a1(0x688)+_0x5b26a1(0xa42)],_0x5002e1))return;try{if(_0x4830a0['rBvTk']==='rPwiw'){if(_0x4980fd['kind']===_0x4830a0[_0x5b26a1(0x632)]){_0x4830a0[_0x5b26a1(0x691)](_0x384412)[_0x5b26a1(0xa5e)]({'host':_0x4980fd['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x4980fd['kind']===_0x4830a0['sddst'])_0x384412()[_0x5b26a1(0xa5e)](_0x4980fd[_0x5b26a1(0x609)+'t']);}else _0x5e8a64[_0x5b26a1(0x7fa)+_0x5b26a1(0x88b)][_0x5b26a1(0xbb7)](_0x253a3d[_0x5b26a1(0xc77)](_0x253a3d['gkBAz'],_0x5b26a1(0x22e)+'st\x20a\x20'+'diffe'+_0x5b26a1(0xb1c)+_0x5b26a1(0xa13)+'me\x20in'+_0x5b26a1(0x616)+_0x5b26a1(0xbc5)+'n\x20the'+'\x20glob'+'al\x20no'+_0x5b26a1(0x60f)+_0x5b26a1(0x2a1)));}catch(_0x39a3ee){_0x4830a0[_0x5b26a1(0xd8a)](_0x4830a0[_0x5b26a1(0xba3)],_0x4830a0[_0x5b26a1(0xba3)])?(_0x253896=_0x253a3d[_0x5b26a1(0xc77)](_0x19c199[_0x5b26a1(0x372)]&&_0x5ca5ce[_0x5b26a1(0x372)]['ok']?_0x5b26a1(0x3e8)+_0x5b26a1(0xcc4):'armin'+_0x5b26a1(0x6a0),_0x3add0d)+'s',_0x1dff03=_0x253a3d['pkJds']):console[_0x5b26a1(0xbfd)]('%c[sa'+'kura]'+'\x20pane'+_0x5b26a1(0x387)+'ate\x20f'+'ailed','color'+':'+_0xf63150,_0x39a3ee);}}});function _0x562752(){_0x31ad03(!![]);}if(document[_0x3b5618(0x84b)])_0x4830a0[_0x3b5618(0xa14)](_0x562752);else document[_0x3b5618(0x6e0)+_0x3b5618(0xbd8)+_0x3b5618(0x76f)+'r'](_0x3b5618(0xc20)+'ntent'+'Loade'+'d',_0x562752,{'once':!![]});return;}window['__SAK'+_0x3b5618(0x4ad)+_0x3b5618(0x6f9)]=window[_0x3b5618(0xb92)+'URA_S'+_0x3b5618(0x6f9)]||{'at':Date[_0x3b5618(0xb6c)]()};function _0x1cedca(_0x5c00f3,_0x37df94){var _0x44fb55=_0x3b5618,_0x27fb8f={'__sakura':_0x5002e1,'kind':_0x5c00f3};if(_0x37df94){for(var _0x4bf876 in _0x37df94)_0x27fb8f[_0x4bf876]=_0x37df94[_0x4bf876];}try{if(window[_0x44fb55(0x406)+'t']&&window[_0x44fb55(0x406)+'t']!==window)window[_0x44fb55(0x406)+'t']['postM'+'essag'+'e'](_0x27fb8f,'*');}catch(_0x44a3d3){}try{if(window[_0x44fb55(0x5d1)]&&_0x4830a0['JCtzb'](window[_0x44fb55(0x5d1)],window))window['top'][_0x44fb55(0x223)+_0x44fb55(0xbbd)+'e'](_0x27fb8f,'*');}catch(_0x53eff9){}}console[_0x3b5618(0x90e)](_0x3b5618(0x6fb)+_0x3b5618(0xcef)+_0x3b5618(0x1df)+_0x3b5618(0x448)+_0x3b5618(0x984)+_0x3b5618(0x58f)+_0x5c1a61,_0x4830a0[_0x3b5618(0xdb1)]('color'+':',_0xf63150)+(_0x3b5618(0x256)+'-weig'+_0x3b5618(0x6ca)+_0x3b5618(0xca9)+_0x3b5618(0x4a7)+'e:14p'+'x'),{'host':_0x55cced,'href':location['href'],'version':_0x5c1a61}),_0x1cedca(_0x3b5618(0x8d9),{'host':_0x55cced,'role':_0x98b56});var _0x3ebd36=window[_0x3b5618(0xb92)+_0x3b5618(0x4ad)+_0x3b5618(0x6f9)]&&window['__SAK'+_0x3b5618(0x4ad)+'W__']['at']||Date[_0x3b5618(0xb6c)]();window['addEv'+'entLi'+_0x3b5618(0x76f)+'r'](_0x4830a0[_0x3b5618(0x958)],function(_0x20b806){var _0xac689a=_0x3b5618;try{var _0xda7cb=_0x20b806&&_0x20b806[_0xac689a(0xcb8)];if(!_0xda7cb||_0xda7cb[_0xac689a(0x688)+'ura']!==_0x5002e1||_0xda7cb['kind']!==_0x4830a0[_0xac689a(0xad4)])return;_0x287a45(_0xda7cb['cmd'],_0xda7cb[_0xac689a(0x963)]);}catch(_0x410b1d){}});try{if(_0x4830a0[_0x3b5618(0x80f)]('osFMj',_0x4830a0[_0x3b5618(0x332)]))try{_0x5c32e2();}catch(_0xec0ff0){}else{var _0x291586=new BroadcastChannel(_0x4830a0[_0x3b5618(0x5fb)]);_0x291586[_0x3b5618(0x503)+_0x3b5618(0xbb3)]=function(_0x550b6f){var _0x16b748=_0x3b5618,_0x5353c0=_0x550b6f[_0x16b748(0xcb8)];if(_0x5353c0&&_0x4830a0[_0x16b748(0x70a)](_0x5353c0['__sak'+'ura'],_0x5002e1)&&_0x5353c0[_0x16b748(0x646)]===_0x4830a0['VJMAN'])_0x4830a0[_0x16b748(0xa7f)](_0x287a45,_0x5353c0[_0x16b748(0xd04)],_0x5353c0[_0x16b748(0x963)]);};}}catch(_0x4b29a6){}var _0xafbef8=[];(function _0x3bf302(){var _0x3ea2a8=_0x3b5618,_0x4c574b=[_0x3ea2a8(0x90e),_0x3ea2a8(0xbfd),_0x4830a0['Kekpr'],'info',_0x3ea2a8(0x5d8)];for(var _0x2bb389=0x341+0x1*-0x19f1+0x84*0x2c;_0x4830a0[_0x3ea2a8(0x4c5)](_0x2bb389,_0x4c574b[_0x3ea2a8(0x853)+'h']);_0x2bb389++){(function(_0x4433dc){var _0x4073dc=_0x3ea2a8,_0x150526={'bFOtZ':'funct'+'ion','hqZPr':_0x4830a0['vHxbm'],'pNQpA':'oIafl','RGLUi':_0x4073dc(0xda6)+'g','oDNcs':function(_0x7b006,_0x3fd5f7){return _0x7b006!==_0x3fd5f7;},'CKQaJ':function(_0x1468ee,_0x1ec3dc){return _0x1468ee===_0x1ec3dc;}},_0x20d5c7=console[_0x4433dc];if(_0x4830a0[_0x4073dc(0xd8a)](typeof _0x20d5c7,'funct'+_0x4073dc(0x9fd)))return;console[_0x4433dc]=function(){var _0x15ac8d=_0x4073dc,_0x38bb14={'dRJDw':_0x150526[_0x15ac8d(0x857)],'zSUgj':function(_0x4af9f1){return _0x4af9f1();}};if(_0x150526[_0x15ac8d(0x63a)]!==_0x150526[_0x15ac8d(0xcce)]){try{var _0x1a0d57='';for(var _0x23c033=-0x1ebc+0x1030+0x62*0x26;_0x23c033<arguments[_0x15ac8d(0x853)+'h'];_0x23c033++){var _0x7c0d67=arguments[_0x23c033];if(typeof _0x7c0d67===_0x150526[_0x15ac8d(0xc3f)])_0x1a0d57+=_0x7c0d67;else{if(_0x7c0d67&&_0x7c0d67[_0x15ac8d(0x7d3)+'ge'])_0x1a0d57+=_0x7c0d67['messa'+'ge'];}}if(_0x1a0d57[_0x15ac8d(0x227)+'Of'](_0x14987d)!==-(0xa5c+0x3a9+-0xe04))return _0x20d5c7['apply'](console,arguments);if(_0x150526['oDNcs'](_0x1a0d57['index'+'Of']('Unity'+_0x15ac8d(0xa86)+'dkit'),-(0x5b8+0xd45*-0x1+0x78e))){if(_0x150526[_0x15ac8d(0x525)]('ooIuG','ooIuG')){var _0x38f3e3=_0x1a0d57['slice'](-0x4a3*0x2+0x3e*0x28+-0x6a,-0x186b+-0x120*0xc+-0x2717*-0x1);if(_0xafbef8[_0x15ac8d(0x227)+'Of'](_0x38f3e3)===-(0xda+0x2*-0x30d+0x5*0x10d)&&_0xafbef8[_0x15ac8d(0x853)+'h']<-0xd26+0x3*0x391+0x2af)_0xafbef8['push'](_0x38f3e3);}else _0x198832=_0x546bac(_0x4d9880&&_0x2f6130['messa'+'ge']||_0x296a33);}}catch(_0xf10171){}return _0x20d5c7[_0x15ac8d(0x692)](console,arguments);}else{var _0x14a103={'VgFDN':function(_0x2223ce,_0x2bef6f){return _0x2223ce===_0x2bef6f;}},_0x5463f9=_0x17a94c['filte'+'r'](function(_0x1193c3){var _0x4368b0=_0x15ac8d;return _0x14a103[_0x4368b0(0x4b8)](_0x1193c3['type'],_0x385580);})[-0x1d3d+-0xa1a+0x2757*0x1];_0x533ba1={'type':_0x47a32b,'atMs':_0x5513dd['now']()-_0x3dad25,'originalFunc':!!(_0x5463f9&&_0x5463f9[_0x15ac8d(0x617)]&&typeof _0x5463f9[_0x15ac8d(0x617)]['origi'+_0x15ac8d(0x2eb)+'nc']===_0x38bb14[_0x15ac8d(0xbf9)]),'resolveGameAtFire':!!_0x38bb14['zSUgj'](_0x3f3fb6),'gameSourceAtFire':_0x11d27c[_0x15ac8d(0xc74)+'e']};}};}(_0x4c574b[_0x2bb389]));}}());var _0x1360e2={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x25d5b1=null,_0x1a58cb=null,_0x15e2cf=-(0x1*-0x26c6+0x2420+0x61*0x7),_0x59f975=null;function _0x46fc15(_0x282039){var _0x3bdbb3=_0x3b5618;try{if(_0x3bdbb3(0x752)==='xUfVZ'){var _0xbc53df=-0x6c0+0xcd8+-0x2*0x30c;for(var _0x416f23=0x113d*-0x1+0x4f6*0x2+0x751;_0x4830a0['qVuXP'](_0x416f23,_0x43dae9[_0x3bdbb3(0x853)+'h']);_0x416f23++){if(_0x55546f[_0x416f23][_0x3bdbb3(0x617)]&&_0x559669[_0x416f23][_0x3bdbb3(0x617)]['table'+_0x3bdbb3(0xc7f)]!==_0x56e6f2)_0xbc53df++;}return _0xbc53df;}else{if(!_0x282039)return;var _0x2fe98d=_0x282039[_0x3bdbb3(0x57b)+'nce']?_0x282039['insta'+'nce'][_0x3bdbb3(0xa19)+'ts']:_0x282039['expor'+'ts']||null;if(!_0x2fe98d)return;if(!_0x59f975)try{_0x59f975=Object[_0x3bdbb3(0xb8c)](_0x2fe98d)['slice'](-0x1a97*0x1+0x944+0x1153,-0x1197+-0x1b4e+0x2cfd);}catch(_0x4d0020){}var _0x1474da=_0x2fe98d[_0x3bdbb3(0x29e)+'y'];_0x1474da&&_0x1474da[_0x3bdbb3(0xd7a)+'r']&&_0x1474da['buffe'+'r']['byteL'+_0x3bdbb3(0xcfe)]>-0x1*-0x10e4+0x1*0x5ce+-0x16b2&&(_0x1a58cb=_0x1474da,_0x15e2cf=Date[_0x3bdbb3(0xb6c)]()-_0x3ebd36);}}catch(_0x5ec70e){}}function _0x2b006e(){var _0xe5dcd9=_0x3b5618;try{if(_0x4830a0[_0xe5dcd9(0x305)](typeof WebAssembly,_0xe5dcd9(0x97e)+_0xe5dcd9(0x8c2)))return;var _0x55a3e8=[_0x4830a0['NYlPS'],_0xe5dcd9(0x57b)+_0xe5dcd9(0xdb5)+'eStre'+_0xe5dcd9(0xc6d)];for(var _0x4470a7=0x1696+0xeca+-0x2560;_0x4830a0['qVuXP'](_0x4470a7,_0x55a3e8[_0xe5dcd9(0x853)+'h']);_0x4470a7++){(function(_0x1e1c6a){var _0x11df52=_0xe5dcd9,_0x5b256a={'pCbfa':function(_0x3f2292,_0x192e70){var _0x5bed3f=_0x1d88;return _0x4830a0[_0x5bed3f(0xd88)](_0x3f2292,_0x192e70);}},_0x3dab6d=WebAssembly[_0x1e1c6a];if(_0x4830a0[_0x11df52(0xd8a)](typeof _0x3dab6d,_0x11df52(0x711)+'ion')||_0x3dab6d[_0x11df52(0x688)+_0x11df52(0x6df)+_0x11df52(0x33d)+'ap'])return;var _0x577956=function(){var _0x5ac2f0=_0x11df52,_0x360d45=_0x3dab6d[_0x5ac2f0(0x692)](this,arguments);try{if(_0x360d45&&_0x5b256a[_0x5ac2f0(0xb63)](typeof _0x360d45['then'],_0x5ac2f0(0x711)+_0x5ac2f0(0x9fd)))_0x360d45['then'](_0x46fc15,function(){});else _0x46fc15(_0x360d45);}catch(_0x5dee2e){}return _0x360d45;};_0x577956[_0x11df52(0x688)+_0x11df52(0x6df)+'moryT'+'ap']=!![];try{if(_0x4830a0[_0x11df52(0xc5e)]===_0x4830a0['LYiLZ']){if(_0x1e1953[_0x51c0e1][_0x11df52(0x617)]&&_0x1bf249[_0x54c1e6][_0x11df52(0x617)][_0x11df52(0x7e0)+'ed'])_0x39af64++;}else Object[_0x11df52(0x60d)+_0x11df52(0xa39)+_0x11df52(0xb0f)](_0x577956,_0x11df52(0x450),{'value':_0x3dab6d['name'],'configurable':!![]});}catch(_0x5a8942){}WebAssembly[_0x1e1c6a]=_0x577956;}(_0x55a3e8[_0x4470a7]));}}catch(_0x54c252){}}var _0x5c6c66=null,_0x2535a1=null,_0x199537={},_0x33d3f8={'MouseLook':[{'name':_0x4830a0[_0x3b5618(0x265)],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x4830a0['CVbPD'],'ret':'void','params':[_0x3b5618(0x927)],'wasmParams':[_0x3b5618(0x7f5),_0x3b5618(0xd49)]},{'name':'\u008d\u0091\u008e\u008a\u008a'+'\u0090\u0091\u0089\u0086\u0091'+'\u0092','ret':_0x4830a0['gxHBg'],'params':[_0x3b5618(0x927)],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0['VbJIe']]},{'name':_0x3b5618(0x3ea)+_0x3b5618(0x94a)+'\u0095','ret':_0x3b5618(0x39b),'params':[_0x4830a0[_0x3b5618(0xc8d)]],'wasmParams':['i32',_0x3b5618(0xd49)]},{'name':_0x3b5618(0xb45)+'\u0093\u0090\u0088\u0092\u0090'+'\u0091','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x610)+_0x3b5618(0xa84)+'\u0094','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x4830a0['eoEKP'],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0['ltazA'],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x4830a0['pCtkr'],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x4830a0[_0x3b5618(0x41d)],'ret':'float','params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':'f32'},{'name':'\u0091\u008f\u0088\u0086\u0091'+_0x3b5618(0xac9)+'\u0090','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0087\u008e\u0089\u008e\u0091'+_0x3b5618(0xafa)+'\u0088','ret':_0x3b5618(0x39b),'params':['float'],'wasmParams':[_0x4830a0['xjPIu'],_0x3b5618(0xd49)]},{'name':_0x4830a0[_0x3b5618(0x3bf)],'ret':'float','params':[],'wasmParams':['i32'],'wasmRet':'f32'},{'name':_0x4830a0[_0x3b5618(0x321)],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u008f\u008c\u0086\u008e\u008f'+_0x3b5618(0x9b1)+'\u0091','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0['YXkNP'],'ret':'void','params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0['zezUO'],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0x3ba)],'ret':_0x3b5618(0x39b),'params':[_0x4830a0['ggmTa'],_0x3b5618(0x927)],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0['VbJIe'],_0x3b5618(0xd49)]},{'name':'\u0087\u008c\u0086\u0089\u0090'+_0x3b5618(0x9b2)+'\u0086','ret':_0x4830a0['ggmTa'],'params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':_0x3b5618(0xd49)},{'name':_0x4830a0[_0x3b5618(0x2d4)],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'.ctor','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0093\u008c\u0091\u0091\u0093'+_0x3b5618(0x5e9)+'\u008e','ret':_0x3b5618(0x39b),'params':[_0x4830a0['ggmTa']],'wasmParams':['i32',_0x4830a0[_0x3b5618(0xc18)]]},{'name':_0x4830a0['ZachK'],'ret':_0x3b5618(0x927),'params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':_0x4830a0[_0x3b5618(0xc18)]},{'name':'\u0094\u008d\u0091\u0091\u0090'+'\u008b\u0094\u0093\u0086\u008c'+'\u008a','ret':'void','params':[_0x4830a0[_0x3b5618(0xc8d)],_0x4830a0[_0x3b5618(0xc8d)]],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0['VbJIe'],_0x4830a0['VbJIe']]},{'name':_0x3b5618(0x562)+_0x3b5618(0x367)+'\u008d','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x62b)+_0x3b5618(0x955)+'\u008a','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x959)+_0x3b5618(0x6ce)+'\u008b','ret':_0x3b5618(0x39b),'params':[_0x4830a0['ggmTa']],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)],'f32']},{'name':'\u0090\u008e\u0095\u0093\u008d'+'\u0089\u0094\u008c\u008b\u0089'+'\u0093','ret':_0x4830a0[_0x3b5618(0xc8d)],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]],'wasmRet':_0x3b5618(0xd49)},{'name':_0x4830a0[_0x3b5618(0xbc4)],'ret':_0x4830a0[_0x3b5618(0xc8d)],'params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':'f32'},{'name':_0x3b5618(0x8d1)+'\u0089\u008a\u0093\u0090\u0095'+'\u0088','ret':_0x4830a0['gxHBg'],'params':[_0x4830a0['ggmTa']],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)],_0x4830a0[_0x3b5618(0xc18)]]},{'name':_0x3b5618(0x2e6)+'\u0089\u0090\u0087\u0086\u0087'+'\u008c','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u008c\u0091\u0093\u0095\u0087'+'\u008c\u008a\u0086\u0090\u0087'+'\u0093','ret':'void','params':['float'],'wasmParams':[_0x4830a0['xjPIu'],_0x3b5618(0xd49)]},{'name':_0x4830a0['kfGdH'],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0['NHkpv'],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x9aa)+'\u008f\u0091\u008e\u008d\u0086'+'\u008d','ret':_0x3b5618(0x39b),'params':[_0x3b5618(0x927)],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0['VbJIe']]}],'FPScontroller':[{'name':'\u0092\u0091\u008e\u0095\u0092'+_0x3b5618(0x377)+'\u008e','ret':_0x4830a0[_0x3b5618(0xc8d)],'params':[],'wasmParams':[_0x4830a0['xjPIu']],'wasmRet':_0x3b5618(0xd49)},{'name':_0x4830a0['XDBqJ'],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x682)+_0x3b5618(0xd57)+'\u0094','ret':_0x3b5618(0xca0),'params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':_0x3b5618(0x7f5)},{'name':_0x4830a0[_0x3b5618(0x7ef)],'ret':_0x3b5618(0x39b),'params':['bool'],'wasmParams':[_0x4830a0['xjPIu'],_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x32c)+_0x3b5618(0x622)+'\u0092','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':'\u0092\u0088\u008b\u0095\u0089'+_0x3b5618(0x572)+'\u008a','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x4830a0['MBOIN'],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0x924)],'ret':_0x4830a0['tlbzC'],'params':[],'wasmParams':['i32'],'wasmRet':_0x4830a0[_0x3b5618(0x37f)]},{'name':_0x3b5618(0x508)+_0x3b5618(0xb07)+'\u0087','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0xa58)+_0x3b5618(0x862)+'\u0093','ret':_0x3b5618(0xca0),'params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':_0x3b5618(0x7f5)},{'name':_0x3b5618(0x2f2)+_0x3b5618(0x2bb)+'\u008a','ret':'bool','params':[],'wasmParams':['i32'],'wasmRet':_0x4830a0['xjPIu']},{'name':'\u0089\u0088\u0093\u008b\u008b'+_0x3b5618(0x700)+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x545)+'\u008b\u0089\u0092\u0089\u008b'+'\u0095','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0xa2a)],'ret':_0x3b5618(0xca0),'params':[_0x3b5618(0xca0),_0x4830a0['tlbzC']],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0[_0x3b5618(0x37f)],_0x4830a0[_0x3b5618(0x37f)]],'wasmRet':_0x4830a0[_0x3b5618(0x37f)]},{'name':_0x3b5618(0x477)+_0x3b5618(0x9c0)+'\u0090','ret':'void','params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':'\u0089\u0089\u008e\u0092\u0089'+_0x3b5618(0x81a)+'\u0092','ret':'bool','params':[],'wasmParams':[_0x4830a0['xjPIu']],'wasmRet':_0x3b5618(0x7f5)},{'name':'\u008a\u0092\u008a\u0091\u0094'+'\u008b\u008c\u0087\u008d\u0095'+'\u008f','ret':_0x3b5618(0x39b),'params':[_0x4830a0[_0x3b5618(0x2d7)]],'wasmParams':['i32',_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x8c7)+'\u0090\u0089\u008f\u008e\u0093'+'\u008e','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':['i32']},{'name':'\u0091\u0088\u0095\u0088\u0088'+_0x3b5618(0x556)+'\u0089','ret':_0x4830a0[_0x3b5618(0x2d7)],'params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':_0x4830a0['xjPIu']},{'name':_0x3b5618(0xb62)+_0x3b5618(0x8da)+'\u008f','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0xd77)],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x487)+'\u0091\u0089\u0094\u008a\u0092'+'\u0089','ret':'void','params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x3b5618(0x4e9)+'\u0086\u008b\u008e\u008a\u0089'+'\u008b','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0xcf6)+_0x3b5618(0x45f)+'\u0094','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0['ZHYbx'],'ret':_0x3b5618(0x39b),'params':['bool'],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)],'i32']},{'name':_0x4830a0[_0x3b5618(0xcec)],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0x8be)],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':['i32']},{'name':_0x4830a0[_0x3b5618(0x9f0)],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x240)+_0x3b5618(0x5ff)+'\u0091','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x3b5618(0x2e4)+_0x3b5618(0x4a3)+'\u008a','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':'\u0087\u008b\u0088\u0090\u008e'+'\u008b\u0089\u0089\u0088\u0093'+'\u0092','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':'\u0088\u008b\u008f\u008a\u008e'+_0x3b5618(0x952)+'\u0091','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':['i32']},{'name':'\u0093\u0086\u0088\u008d\u008f'+_0x3b5618(0x86c)+'\u0094','ret':_0x3b5618(0x39b),'params':['bool'],'wasmParams':[_0x3b5618(0x7f5),'i32']},{'name':_0x3b5618(0x7c2)+_0x3b5618(0xa4b)+'\u0090','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x3b5618(0xb65)+'\u008c\u0091\u008c\u008a\u008f'+'\u0095','ret':'void','params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':'\u008a\u008b\u008d\u0094\u008e'+_0x3b5618(0x724)+'\u008a','ret':'void','params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0087\u0094\u0091\u0095\u008f'+_0x3b5618(0x5eb)+'\u0087','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u008c\u0089\u0091\u0095\u0090'+'\u008b\u008e\u008e\u0091\u0086'+'\u0087','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0xd6b)+'\u0086\u008b\u008e\u008f\u0086'+'\u0087','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0094\u008d\u0087\u0094\u008d'+_0x3b5618(0x80e)+'\u0094','ret':'void','params':[_0x4830a0[_0x3b5618(0x2d7)]],'wasmParams':[_0x3b5618(0x7f5),'i32']},{'name':_0x4830a0['Theuz'],'ret':_0x4830a0[_0x3b5618(0x2d7)],'params':[],'wasmParams':['i32'],'wasmRet':'i32'},{'name':_0x4830a0[_0x3b5618(0x58e)],'ret':'bool','params':[],'wasmParams':[_0x4830a0['xjPIu']],'wasmRet':_0x4830a0[_0x3b5618(0x37f)]},{'name':_0x3b5618(0x859)+_0x3b5618(0x212)+'\u008d','ret':'bool','params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':'i32'},{'name':_0x4830a0[_0x3b5618(0x317)],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x3b5618(0x994),'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x50b)+'\u0092\u008b\u008a\u0087\u008e'+'\u008b','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0[_0x3b5618(0xdc8)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0089\u0086\u0090\u0088\u008c'+'\u0088\u008e\u0088\u008b\u0090'+'\u008b','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0[_0x3b5618(0x397)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0xb9d)+_0x3b5618(0x675)+'\u0094','ret':_0x4830a0['gxHBg'],'params':[_0x4830a0[_0x3b5618(0xc8d)]],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)],_0x4830a0['VbJIe']]},{'name':_0x4830a0[_0x3b5618(0x97f)],'ret':'bool','params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]],'wasmRet':_0x4830a0['xjPIu']},{'name':_0x3b5618(0x3d0)+_0x3b5618(0xd4f)+'\u0087','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x4830a0[_0x3b5618(0x36d)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0090\u0090\u008f\u008d\u008a'+'\u0094\u0093\u0088\u0088\u0093'+'\u0092','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u008b\u0090\u008d\u0095\u0086'+_0x3b5618(0xbf2)+'\u008c','ret':_0x3b5618(0xca0),'params':[],'wasmParams':['i32'],'wasmRet':_0x4830a0['xjPIu']},{'name':_0x4830a0['cmoAt'],'ret':'bool','params':[_0x3b5618(0xca0),'bool'],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)],_0x4830a0[_0x3b5618(0x37f)],_0x3b5618(0x7f5)],'wasmRet':'i32'},{'name':_0x4830a0[_0x3b5618(0x75e)],'ret':'void','params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0094\u008e\u0091\u008d\u0095'+'\u008f\u0093\u0086\u008b\u008e'+'\u008e','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x891)+'\u0091\u0092\u008f\u0090\u008e'+'\u0091','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x4830a0[_0x3b5618(0x38a)],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0[_0x3b5618(0x4b9)],'ret':_0x4830a0['gxHBg'],'params':[_0x4830a0[_0x3b5618(0xc8d)]],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0[_0x3b5618(0xc18)]]},{'name':'\u0086\u0087\u0087\u008e\u0094'+_0x3b5618(0x452)+'\u008b','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0xd40)+_0x3b5618(0x5e5)+'\u008d','ret':_0x3b5618(0xca0),'params':[_0x4830a0[_0x3b5618(0x2d7)],_0x4830a0[_0x3b5618(0x2d7)]],'wasmParams':['i32',_0x3b5618(0x7f5),'i32'],'wasmRet':_0x4830a0[_0x3b5618(0x37f)]},{'name':_0x4830a0[_0x3b5618(0x463)],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[_0x3b5618(0x927),'bool'],'wasmParams':[_0x4830a0['xjPIu'],'f32',_0x4830a0['xjPIu']]},{'name':_0x3b5618(0x6ad)+_0x3b5618(0xb24)+'\u008f','ret':'void','params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x44f)+_0x3b5618(0x493)+'\u008c','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':'\u0095\u0088\u0090\u0092\u0090'+_0x3b5618(0xa8f)+'\u0095','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0['xjPIu']]}],'TDM_GameManager':[{'name':_0x3b5618(0x34e)+'\u0086\u0094\u0094\u008e\u008d'+'\u0090','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x999)+'\u0095\u0088\u0093\u0087\u0089'+'\u008a','ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x55b)+'\u008c\u008b\u008f\u008d\u0088'+'\u0089','ret':_0x4830a0['tlbzC'],'params':[_0x4830a0['ojFNI']],'wasmParams':[_0x4830a0['xjPIu'],'i32'],'wasmRet':_0x3b5618(0x7f5)},{'name':_0x4830a0[_0x3b5618(0x676)],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':['i32']},{'name':_0x4830a0[_0x3b5618(0x6c5)],'ret':'void','params':[_0x4830a0[_0x3b5618(0x2d7)]],'wasmParams':['i32',_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x4830a0[_0x3b5618(0x2f8)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':'\u008e\u0086\u008d\u0086\u0089'+_0x3b5618(0x97d)+'\u008c','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x8b6)+'\u0086\u0095\u0095\u0091\u0089'+'\u0087','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'.ctor','ret':'void','params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0['LRIsO'],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0[_0x3b5618(0x34d)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':'\u008b\u0088\u008d\u0087\u0090'+'\u008e\u008c\u0090\u008a\u008c'+'\u0094','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0[_0x3b5618(0x915)],'ret':'void','params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0093\u008b\u008c\u008e\u0089'+_0x3b5618(0xcbb)+'\u0088','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':'OnDes'+'troy','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x6f1)+_0x3b5618(0xbf4)+'\u008a','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x44b)+_0x3b5618(0x75b)+'\u0091','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':['i32']},{'name':_0x4830a0['oToXk'],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x893)+_0x3b5618(0x612)+_0x3b5618(0xd00)+'Compl'+'ete','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x3b5618(0xd53)+_0x3b5618(0xb53)+'\u0093','ret':_0x4830a0[_0x3b5618(0xd72)],'params':['bool'],'wasmParams':[_0x3b5618(0x7f5),_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0x20c)],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':['int',_0x4830a0['ojFNI'],_0x4830a0[_0x3b5618(0xc9e)]],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0['xjPIu'],_0x3b5618(0x7f5),_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x57d)+'\u0094\u0089\u0093\u0088\u0093'+'\u0089','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x9f8)+'\u0091\u0089\u0093\u0089\u0089'+'\u008c','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[_0x3b5618(0x5a0),_0x4830a0[_0x3b5618(0xc9e)],_0x3b5618(0x5a0)],'wasmParams':['i32','i32',_0x3b5618(0x7f5),_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x868)+_0x3b5618(0xdab)+'\u0092','ret':_0x4830a0[_0x3b5618(0x2d7)],'params':[],'wasmParams':[_0x3b5618(0x7f5)],'wasmRet':'i32'},{'name':_0x4830a0[_0x3b5618(0x75e)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':['i32']},{'name':_0x4830a0[_0x3b5618(0x294)],'ret':'void','params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0[_0x3b5618(0x322)],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':['i32']},{'name':_0x4830a0['SVZqE'],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x316)+'\u008e\u0090\u0087\u0087\u0092'+'\u008e','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':['i32']},{'name':_0x4830a0['ZWGas'],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0088\u008c\u0089\u008e\u0095'+'\u008a\u0087\u0092\u0095\u0086'+'\u008e','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[_0x4830a0['tlbzC']],'wasmParams':[_0x3b5618(0x7f5),_0x3b5618(0x7f5)]},{'name':_0x3b5618(0x249)+'\u008b\u0087\u008f\u008d\u008f'+'\u0094','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x3b5618(0x3cd)+'\u0095\u0092\u0086\u008a\u008e'+'\u008c','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':'\u0086\u008a\u008e\u008b\u0088'+'\u008e\u008f\u008c\u0088\u0086'+'\u0091','ret':'void','params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x3b5618(0x573)+_0x3b5618(0xba4)+'ionFo'+'cus','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[_0x4830a0['tlbzC']],'wasmParams':[_0x3b5618(0x7f5),'i32']},{'name':'\u008f\u008c\u0086\u0087\u008e'+'\u008b\u0088\u0093\u0088\u0091'+'\u0095','ret':'bool','params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]],'wasmRet':_0x3b5618(0x7f5)},{'name':_0x4830a0[_0x3b5618(0x298)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x21b)+'\u0088\u0094\u008e\u008d\u0093'+'\u008a','ret':'bool','params':[_0x4830a0['ojFNI']],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)],_0x4830a0['xjPIu']],'wasmRet':_0x4830a0[_0x3b5618(0x37f)]},{'name':'\u0087\u008d\u0088\u0086\u008a'+'\u0090\u0088\u008f\u0089\u008a'+'\u008e','ret':_0x4830a0[_0x3b5618(0xd72)],'params':[_0x3b5618(0xca0)],'wasmParams':[_0x3b5618(0x7f5),_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0xc16)+_0x3b5618(0x707)+'\u0094','ret':'void','params':[],'wasmParams':['i32']},{'name':_0x4830a0[_0x3b5618(0x4c3)],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x3b5618(0x398)+_0x3b5618(0x3dd)+'\u008c','ret':_0x3b5618(0x39b),'params':[_0x3b5618(0x5a0),'int',_0x4830a0[_0x3b5618(0xc9e)]],'wasmParams':[_0x4830a0['xjPIu'],_0x3b5618(0x7f5),_0x4830a0[_0x3b5618(0x37f)],_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0x1da)],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':['i32']},{'name':_0x3b5618(0x7d9),'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0086\u0088\u0095\u0092\u0094'+_0x3b5618(0x2ac)+'\u0088','ret':'void','params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x3b5618(0xd71)+_0x3b5618(0x7db)+'\u008e','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0['mhrLF'],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x4830a0['slHLv'],'ret':_0x3b5618(0x39b),'params':[_0x4830a0[_0x3b5618(0x2d7)]],'wasmParams':[_0x4830a0['xjPIu'],_0x3b5618(0x7f5)]},{'name':_0x4830a0['GMfwv'],'ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0089\u008a\u0086\u0092\u0089'+_0x3b5618(0x4c1)+'\u0092','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u0088\u008a\u0088\u0090\u0094'+'\u008b\u0091\u008d\u008a\u008b'+'\u008e','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0[_0x3b5618(0xd7f)],'ret':'void','params':[_0x3b5618(0x5a0),'int'],'wasmParams':['i32',_0x4830a0[_0x3b5618(0x37f)],_0x3b5618(0x7f5)]},{'name':_0x3b5618(0xb3e)+_0x3b5618(0xa18)+'\u0086','ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x4830a0['xjPIu']]},{'name':_0x4830a0['AYzXs'],'ret':_0x4830a0['gxHBg'],'params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':_0x4830a0['TiPLR'],'ret':_0x4830a0[_0x3b5618(0xd72)],'params':[_0x4830a0[_0x3b5618(0x2d7)]],'wasmParams':[_0x4830a0['xjPIu'],_0x4830a0[_0x3b5618(0x37f)]]},{'name':'\u0090\u008d\u008b\u0093\u008a'+_0x3b5618(0x8c1)+'\u008a','ret':_0x3b5618(0x39b),'params':[],'wasmParams':[_0x4830a0[_0x3b5618(0x37f)]]},{'name':_0x4830a0[_0x3b5618(0xc5c)],'ret':'void','params':[],'wasmParams':[_0x3b5618(0x7f5)]},{'name':'\u008e\u0094\u0093\u0094\u008d'+_0x3b5618(0x8e4)+'\u0089','ret':'void','params':[],'wasmParams':[_0x3b5618(0x7f5)]}]},_0x12f58=[],_0x4ae9a9=[],_0x5a137b={},_0x35c7f2=0x23a1+-0x161+0x224*-0x10,_0x33059d=![],_0x185635=[],_0x157f2c=[{'type':'FPSco'+'ntrol'+'ler','keep':!![]},{'type':_0x4830a0[_0x3b5618(0x6f7)],'keep':!![]},{'type':_0x3b5618(0x626)+_0x3b5618(0x9e8)+'ger','keep':![]},{'type':_0x4830a0[_0x3b5618(0x99a)],'keep':!![]},{'type':_0x4830a0['XNDUs'],'keep':!![]},{'type':_0x3b5618(0xd7b)+'nNetw'+_0x3b5618(0x6e7)+'nc','keep':!![],'many':!![]},{'type':'Netwo'+'rkPla'+'yerAn'+_0x3b5618(0xaf7)+_0x3b5618(0xbbb),'keep':!![],'many':!![]},{'type':_0x3b5618(0x7bb)+_0x3b5618(0xaad)+_0x3b5618(0x4c0),'keep':!![],'many':!![]},{'type':_0x3b5618(0x6ee)+'Bot','keep':!![],'many':!![]}],_0x108c2e=[_0x4830a0[_0x3b5618(0x967)],_0x3b5618(0x60a)+_0x3b5618(0xbdd)+_0x3b5618(0xd14)+_0x3b5618(0x645)+'tpass'+_0x3b5618(0x468),_0x3b5618(0xb22)+'cofor'+'ge.De'+'cal.d'+'ll',_0x4830a0[_0x3b5618(0x6cd)],_0x3b5618(0xd43)+_0x3b5618(0x274)+'racte'+_0x3b5618(0x45c)+'rolle'+_0x3b5618(0x35c),_0x3b5618(0x51f)+'erate'+'d'];(function _0xcd5125(){var _0xb27669=_0x3b5618;try{if(_0x4830a0[_0xb27669(0xd17)](_0xb27669(0xd2d),'ioKls'))return _0x360f68[_0xb27669(0xc74)+'e']=_0x3e4ecf[_0xb27669(0xc74)+'e']||'insta'+_0xb27669(0xdb5)+_0xb27669(0xd26)+'xport'+'s.mem'+_0xb27669(0x59f),new _0x36c2e9(_0x312279[_0xb27669(0xd7a)+'r']);else{var _0x168ed5=window[_0xb27669(0x36f)+_0xb27669(0xa86)+_0xb27669(0xd45)]&&window[_0xb27669(0x36f)+_0xb27669(0xa86)+_0xb27669(0xd45)][_0xb27669(0xa13)+'me'];if(!_0x168ed5||typeof _0x168ed5['creat'+_0xb27669(0xd22)+'in']!==_0xb27669(0x711)+'ion'){_0x1360e2[_0xb27669(0x615)]=_0x4830a0[_0xb27669(0x308)];return;}_0x1360e2['attem'+_0xb27669(0xa32)]=!![],_0x2535a1=_0x168ed5['creat'+_0xb27669(0xd22)+'in']({'name':_0x4830a0[_0xb27669(0x4e3)],'version':_0x5c1a61,'referencedAssemblies':_0x108c2e[_0xb27669(0x1d7)]()}),_0x1360e2['ok']=!![];try{var _0x50000f=window['Unity'+_0xb27669(0xa86)+'dkit']['Runti'+'me'];_0x50000f[_0xb27669(0x688)+_0xb27669(0xaee)+'g']=_0x4830a0[_0xb27669(0xa93)](_0x4830a0['sENLX'](_0x5c1a61,':'),Math[_0xb27669(0x2aa)+'m']()[_0xb27669(0x8a8)+'ing'](0x7*0x24d+0x1b37+-0x2b2e)['slice'](-0x13fa+0x26f6+-0x12fa,-0xb*-0x347+0x1c1e+-0x4021*0x1)),_0x25d5b1=_0x50000f[_0xb27669(0x688)+_0xb27669(0xaee)+'g'];}catch(_0x2ac482){}_0x3d8564(),_0x4830a0[_0xb27669(0x8a9)](_0x4e7ded),_0x1360e2[_0xb27669(0xc64)+_0xb27669(0xaac)+_0xb27669(0x5bd)]=_0x12f58['lengt'+'h'],_0x2b006e(),_0x1360e2[_0xb27669(0x29e)+'yTap']=!![];}}catch(_0x5c56fd){_0x1360e2[_0xb27669(0x615)]=_0x4830a0[_0xb27669(0xb4a)](String,_0x5c56fd&&_0x5c56fd['messa'+'ge']||_0x5c56fd);}}());var _0x17a97f=new Float32Array(-0x7b8+0x241c+-0x1c63),_0x1d6d0d=new Int32Array(_0x17a97f[_0x3b5618(0xd7a)+'r']);function _0x1e620d(_0x11b41b){return _0x17a97f[0x60d*0x2+-0x72b+0x1*-0x4ef]=_0x11b41b,_0x1d6d0d[-0x9b*-0x11+-0x434*-0x8+0x2beb*-0x1];}function _0x138a63(_0x153fb9){return _0x1d6d0d[-0xfbb+-0x2594+0x354f]=_0x153fb9|-0x22*-0xdb+-0x24a2*0x1+0x78c,_0x17a97f[-0x6ec+-0x9f9+0x10e5];}var _0x3d795f={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0xc0bf3e(){var _0x1a0ed3=_0x3b5618,_0x17bccc={'hguju':_0x1a0ed3(0xd50)+_0x1a0ed3(0x2b4)+_0x1a0ed3(0x261)+'ng'};try{if(_0x2535a1&&_0x2535a1[_0x1a0ed3(0x684)+_0x1a0ed3(0xa9f)]){if(_0x4830a0[_0x1a0ed3(0x269)](_0x4830a0[_0x1a0ed3(0x4a1)],_0x1a0ed3(0x666)))try{if(_0x245acb[_0x2bc369][_0x1a0ed3(0x5e4)+_0x1a0ed3(0xb78)+_0x1a0ed3(0x98d)])_0x3bde0b[_0x1227db]['conte'+_0x1a0ed3(0xb78)+_0x1a0ed3(0x98d)]['postM'+_0x1a0ed3(0xbbd)+'e'](_0x2a310e,'*');}catch(_0x529702){}else{var _0x1649ed=_0x2535a1['_runt'+_0x1a0ed3(0xa9f)];if(typeof _0x1649ed[_0x1a0ed3(0x8c9)+'veGam'+'e']==='funct'+'ion'){var _0x5b0608=_0x1649ed[_0x1a0ed3(0x8c9)+_0x1a0ed3(0x68d)+'e']();if(_0x5b0608){if(_0x4830a0['KszSD']!==_0x4830a0[_0x1a0ed3(0x87b)])try{_0x7e960f[_0x1a0ed3(0xa04)+'em'](_0x5c9dd9,_0x670929[_0x1a0ed3(0xda6)+_0x1a0ed3(0x795)](_0x224d95['pos']));}catch(_0x4cdbcf){}else return _0x3d795f[_0x1a0ed3(0xc74)+'e']=_0x4830a0['wgEAZ'],_0x5b0608;}}if(_0x1649ed[_0x1a0ed3(0xdb9)])return _0x3d795f[_0x1a0ed3(0xc74)+'e']=_0x4830a0[_0x1a0ed3(0xb25)],_0x1649ed[_0x1a0ed3(0xdb9)];}}}catch(_0xb05bb2){}try{var _0x205741=window[_0x1a0ed3(0x36f)+'WebMo'+'dkit']&&window[_0x1a0ed3(0x36f)+_0x1a0ed3(0xa86)+'dkit'][_0x1a0ed3(0xa13)+'me'];if(_0x205741&&_0x4830a0[_0x1a0ed3(0xb79)](typeof _0x205741[_0x1a0ed3(0x8c9)+'veGam'+'e'],_0x1a0ed3(0x711)+'ion')){if(_0x4830a0[_0x1a0ed3(0x627)]!=='qLgZA'){var _0x132ec4=_0x205741[_0x1a0ed3(0x8c9)+'veGam'+'e']();if(_0x132ec4)return _0x3d795f[_0x1a0ed3(0xc74)+'e']=_0x1a0ed3(0xa13)+'me.re'+_0x1a0ed3(0x7f3)+_0x1a0ed3(0x623)+')',_0x132ec4;}else return _0x1915b8['sourc'+'e']=_0x17bccc['hguju'],_0x3ea0e9;}if(_0x205741&&_0x205741[_0x1a0ed3(0xdb9)])return _0x3d795f['sourc'+'e']=_0x4830a0['sXMrh'],_0x205741;}catch(_0x2d132b){}try{if(_0x4830a0['TUFgV'](_0x4830a0['RfYYn'],'bxSVK')){var _0x2a0e26=window['unity'+_0x1a0ed3(0x5da)+'nce']||window[_0x1a0ed3(0x370)+'Game']||window[_0x1a0ed3(0x8b5)];if(_0x2a0e26)return _0x3d795f[_0x1a0ed3(0xc74)+'e']=_0x1a0ed3(0x47a)+_0x1a0ed3(0xd54)+_0x1a0ed3(0xbda),_0x2a0e26;}else _0x4a9750=_0x280cbf[_0x5d9ca9][_0x1a0ed3(0xad8)],_0x455688[_0x1a0ed3(0xc74)+'e']=_0x1a0ed3(0x720)+'r';}catch(_0x1dafbf){}try{if(_0x4830a0[_0x1a0ed3(0xa53)](typeof game,_0x4830a0['MCYRg'])&&game)return _0x3d795f[_0x1a0ed3(0xc74)+'e']=_0x4830a0[_0x1a0ed3(0x1e6)],game;}catch(_0x235980){}try{var _0x3e33cc=Object[_0x1a0ed3(0xb8c)](window);for(var _0x492529=0x14e4+-0x109*0x25+0x1169;_0x492529<_0x3e33cc[_0x1a0ed3(0x853)+'h']&&_0x492529<0xa59*0x3+-0xf*-0x22f+-0x3d74;_0x492529++){var _0x1783ea=window[_0x3e33cc[_0x492529]];if(_0x1783ea&&_0x4830a0[_0x1a0ed3(0x5ca)](typeof _0x1783ea,_0x1a0ed3(0x3c4)+'t')&&_0x1783ea['Modul'+'e']&&_0x1783ea['Modul'+'e'][_0x1a0ed3(0x865)+'8']&&_0x1783ea['Modul'+'e']['HEAPU'+'8'][_0x1a0ed3(0xd7a)+'r'])return _0x3d795f['sourc'+'e']=_0x4830a0[_0x1a0ed3(0x418)](_0x4830a0[_0x1a0ed3(0xb31)](_0x4830a0['URpLX'],_0x3e33cc[_0x492529]),_0x1a0ed3(0x9d8)+'le'),_0x1783ea;}}catch(_0x1d0a52){}return _0x3d795f['sourc'+'e']=null,null;}function _0x33c45b(){var _0x590088=_0x3b5618,_0x3b2300={'ALfpP':function(_0x303c38,_0x4fb2cd){return _0x303c38||_0x4fb2cd;},'RyesA':function(_0x28b228,_0x502da9){return _0x4830a0['jFdYH'](_0x28b228,_0x502da9);},'wRviN':function(_0x31a4f4,_0x406db8){return _0x31a4f4(_0x406db8);},'oQUyq':function(_0x36807c,_0x56487c){return _0x4830a0['xkZaW'](_0x36807c,_0x56487c);},'SPqxY':function(_0x2b1968,_0x1d1aed){var _0x3955c9=_0x1d88;return _0x4830a0[_0x3955c9(0x718)](_0x2b1968,_0x1d1aed);},'yvwev':function(_0x591d16,_0x3fdd58){return _0x4830a0['FRNgU'](_0x591d16,_0x3fdd58);},'okpCs':_0x4830a0[_0x590088(0x94f)],'bSZcC':function(_0x346375,_0xd61b66){return _0x346375+_0xd61b66;},'QlPHq':_0x590088(0x37e),'DzzyY':function(_0x331261){return _0x331261();},'gcIyx':function(_0x483368,_0x35a574,_0x1b06dc){return _0x483368(_0x35a574,_0x1b06dc);}};if('uoICe'===_0x4830a0['SHQcg']){try{if(_0x1a58cb&&_0x1a58cb['buffe'+'r']&&_0x1a58cb[_0x590088(0xd7a)+'r']['byteL'+_0x590088(0xcfe)]){if(_0x4830a0[_0x590088(0x75c)]==='Wvisy')try{if(_0x3b2300[_0x590088(0x674)](!_0x190948,!_0x4206aa))return null;var _0x39dc32=new _0x21dced(_0x57754a)[_0x590088(0x1e4)+'assNa'+'me']();return _0x3b2300['RyesA'](_0x39dc32,_0x25f7cd)?null:_0x39dc32;}catch(_0x276be1){return null;}else return _0x3d795f['sourc'+'e']=_0x3d795f['sourc'+'e']||_0x590088(0x57b)+_0x590088(0xdb5)+_0x590088(0xd26)+_0x590088(0x374)+'s.mem'+_0x590088(0x59f),new Uint8Array(_0x1a58cb[_0x590088(0xd7a)+'r']);}}catch(_0x1f5aff){}try{var _0xb1723d=_0xc0bf3e();if(_0xb1723d&&_0xb1723d[_0x590088(0xa09)+'e']&&_0xb1723d[_0x590088(0xa09)+'e'][_0x590088(0x865)+'8']&&_0xb1723d[_0x590088(0xa09)+'e'][_0x590088(0x865)+'8']['buffe'+'r'])return _0xb1723d[_0x590088(0xa09)+'e']['HEAPU'+'8'];}catch(_0x5f157a){}return null;}else{var _0x1ccfa3=('14|3|'+'5|10|'+_0x590088(0x9e0)+_0x590088(0x65d)+'15|7|'+'9|13|'+_0x590088(0xca2)+'6|8|4')[_0x590088(0x8a1)]('|'),_0x4827a6=-0x10cc+-0x21c3+-0x2b*-0x12d;while(!![]){switch(_0x1ccfa3[_0x4827a6++]){case'0':_0x1f0fda['input']=_0x7f6965;continue;case'1':var _0x249ed9=_0x38f195(_0x3b2300['QlPHq'],'sk-va'+'l');continue;case'2':_0x7f6965[_0x590088(0x8ae)]=_0x3c5440(_0x4b3d86);continue;case'3':var _0x7f6965=_0x15d77b[_0x590088(0x839)+_0x590088(0xcdd)+'ent'](_0x590088(0x4ac));continue;case'4':return _0x1f0fda;case'5':_0x7f6965['type']=_0x590088(0xcd1);continue;case'6':_0x3b2300[_0x590088(0x383)](_0x352f62);continue;case'7':_0x7f6965[_0x590088(0x5c4)+'ut']=function(){var _0x79f077=_0x590088;_0x18623c(_0x3f4574(_0x7f6965[_0x79f077(0x61f)])||_0x15fdd3),_0x352f62();};continue;case'8':_0x554052[_0x590088(0x1f1)]['push'](_0x352f62);continue;case'9':_0x1f0fda['appen'+'dChil'+'d'](_0x7f6965);continue;case'10':_0x7f6965[_0x590088(0xc12)+_0x590088(0xbce)]=_0x590088(0x3bd)+_0x590088(0xc3b);continue;case'11':_0x1f0fda[_0x590088(0x808)]=_0x352f62;continue;case'12':_0x7f6965[_0x590088(0xc28)]=_0x426142(_0x49bf4c);continue;case'13':_0x1f0fda[_0x590088(0x69b)+_0x590088(0x79e)+'d'](_0x249ed9);continue;case'14':var _0x1f0fda=_0x3b2300[_0x590088(0xbff)](_0x3b379c,_0x590088(0xc6f),'sk-ra'+_0x590088(0x712));continue;case'15':var _0x352f62=function(){var _0x36ddd1=_0x590088,_0xe791b7=_0x3538d2();_0x7f6965['value']=_0x3b2300['wRviN'](_0xed65cf,_0xe791b7),_0x249ed9['textC'+_0x36ddd1(0x3b9)+'t']=(_0x582c77<-0xd*0x181+0x1d66*0x1+-0x9d8?_0xe791b7[_0x36ddd1(0xa08)+'ed'](0x17fc+-0xa41+-0xdba):_0x3b2300[_0x36ddd1(0x7ff)](_0x17f8e8,_0x140ddb['round'](_0xe791b7)))+(_0x7f6965[_0x36ddd1(0x7a8)+'et'][_0x36ddd1(0x949)]||'');var _0x4e0a55=_0x3b2300[_0x36ddd1(0x6a9)]((_0xe791b7-_0x52e06b)/_0x3b2300['yvwev'](_0x29f1cc,_0x5e255b),-0x17a2+-0xa54+0x225a);_0x7f6965['style'][_0x36ddd1(0x6f4)+_0x36ddd1(0x6a1)+'y'](_0x3b2300[_0x36ddd1(0x268)],_0x3b2300['bSZcC'](_0x4e0a55,'%'));};continue;case'16':_0x7f6965[_0x590088(0x706)]=_0x3b2300[_0x590088(0x7ff)](_0x923086,_0x29ec63);continue;}break;}}}function _0x3ea2b7(){var _0x2ed67e=_0x3b5618,_0x37eaaf=_0x33c45b();if(!_0x37eaaf)return null;try{return new DataView(_0x37eaaf[_0x2ed67e(0xd7a)+'r'],_0x37eaaf[_0x2ed67e(0xd5c)+_0x2ed67e(0x297)],_0x37eaaf[_0x2ed67e(0xd84)+_0x2ed67e(0xcfe)]);}catch(_0x2ec1f3){return null;}}function _0x118468(_0x2c7f35,_0x1f773c){var _0x5c17c8=_0x3b5618,_0x2832ce={'IelZC':function(_0x1b4c10,_0x2da2fb){return _0x1b4c10+_0x2da2fb;}},_0x45f999=_0x3ea2b7();if(!_0x45f999){if(_0x4830a0[_0x5c17c8(0x272)]!==_0x5c17c8(0x95f))_0x3f2b9a['camer'+'a']=_0x2832ce[_0x5c17c8(0xbc8)]('0x',(_0x5aaa7d>>>-0x146c+0x1*0x1e6b+-0x9ff)[_0x5c17c8(0x8a8)+_0x5c17c8(0x9f5)](-0x4a*0x72+-0x83*-0x2f+0x55*0x1b)),_0x364263[_0x5c17c8(0x77c)+_0x5c17c8(0x8ad)]=_0x53c448;else return _0x3d795f[_0x5c17c8(0xd63)+'d']++,_0x3d795f[_0x5c17c8(0xc95)+_0x5c17c8(0x6a4)]=_0x3d795f['lastE'+'rror']||_0x4830a0[_0x5c17c8(0x560)],undefined;}if(_0x2c7f35<0x17bf+-0x9c3*0x4+0xf4d||_0x4830a0[_0x5c17c8(0xb94)](_0x2c7f35+(0x1d91+0x21ed+-0x3f7a),_0x45f999[_0x5c17c8(0xd84)+'ength'])){if(_0x4830a0['djqbm'](_0x4830a0['chuqG'],_0x4830a0[_0x5c17c8(0xbba)]))return _0x3d795f[_0x5c17c8(0xd63)+'d']++,_0x3d795f[_0x5c17c8(0xc95)+'rror']=_0x3d795f[_0x5c17c8(0xc95)+_0x5c17c8(0x6a4)]||_0x4830a0[_0x5c17c8(0xa2f)](_0x4830a0['BtTWJ']+_0x2c7f35[_0x5c17c8(0x8a8)+_0x5c17c8(0x9f5)](0x26b+-0x2172+0x1f17)+(_0x5c17c8(0xd8d)+'\x20heap'+_0x5c17c8(0x264)+'0x'),_0x45f999['byteL'+_0x5c17c8(0xcfe)]['toStr'+'ing'](-0x11*0xc5+-0xd7f+0xdc*0x1f)),undefined;else{var _0x334a91=_0x26105c['getIt'+'em'](_0x175ea6);if(_0x334a91){var _0xede266=_0x2f38d8[_0x5c17c8(0xa85)](_0x334a91);if(typeof _0xede266['y']===_0x4830a0['EqENS']&&_0x4830a0[_0x5c17c8(0x7fc)](_0x4fe891,_0xede266['y']))_0x1c8d58[_0x5c17c8(0x569)+'f']=_0xede266['y'];if(_0x4830a0[_0x5c17c8(0x77f)](typeof _0xede266['p'],_0x5c17c8(0x9fc)+'r')&&_0x4830a0[_0x5c17c8(0x59b)](_0x33f77a,_0xede266['p']))_0x5c55a6[_0x5c17c8(0x913)+'Off']=_0xede266['p'];}}}try{if(_0x4830a0[_0x5c17c8(0x670)](_0x5c17c8(0xd92),_0x5c17c8(0xd92)))_0x48f964[_0x5c17c8(0xbb7)](_0x4830a0[_0x5c17c8(0x235)](_0x491f61[_0x5c17c8(0x73a)],':\x20')+_0x4830a0[_0x5c17c8(0x28d)](_0x53dc93,_0x234033&&_0x245a1e['messa'+'ge']||_0x3ae191)[_0x5c17c8(0x1d7)](0x17b*0x1+-0x8*-0x1+-0x3*0x81,0x3*0x332+-0xa82+-0xc6*-0x2));else{_0x3d795f['ok']++;switch(_0x1f773c){case'u8':return _0x45f999[_0x5c17c8(0xd98)+_0x5c17c8(0x6f2)](_0x2c7f35);case'i8':return _0x45f999[_0x5c17c8(0xc80)+'t8'](_0x2c7f35);case _0x4830a0[_0x5c17c8(0x2d2)]:return _0x45f999['getIn'+'t16'](_0x2c7f35,!![]);case _0x5c17c8(0x5a6):return _0x45f999['getUi'+'nt16'](_0x2c7f35,!![]);case'i32':return _0x45f999['getIn'+'t32'](_0x2c7f35,!![]);case _0x4830a0[_0x5c17c8(0xabd)]:return _0x45f999[_0x5c17c8(0xd98)+'nt32'](_0x2c7f35,!![]);case _0x5c17c8(0xd49):return _0x45f999[_0x5c17c8(0x91e)+'oat32'](_0x2c7f35,!![]);case _0x4830a0[_0x5c17c8(0x5a8)]:return _0x45f999['getFl'+'oat64'](_0x2c7f35,!![]);case'v2':case'v3':case'v4':return _0x45f999[_0x5c17c8(0x91e)+_0x5c17c8(0x30e)](_0x2c7f35,!![]);default:return _0x45f999['getIn'+_0x5c17c8(0xd9d)](_0x2c7f35,!![]);}}}catch(_0x3bd4a5){return _0x3d795f['faile'+'d']++,_0x3d795f[_0x5c17c8(0xc95)+_0x5c17c8(0x6a4)]=_0x3d795f[_0x5c17c8(0xc95)+_0x5c17c8(0x6a4)]||String(_0x3bd4a5&&_0x3bd4a5['messa'+'ge']||_0x3bd4a5)['slice'](0x1ded+-0x228*-0x2+0x1*-0x223d,-0x11*-0x241+-0x138d+-0x124c),undefined;}}function _0x6ae407(_0x9176fa,_0x153414,_0x127ef5){var _0x7f24d=_0x3b5618,_0x40ff44=_0x3ea2b7();if(!_0x40ff44||_0x4830a0[_0x7f24d(0x93f)](_0x9176fa,-0x60d*0x2+0x1865+-0xc4b)||_0x4830a0[_0x7f24d(0xa2f)](_0x9176fa,-0xdd7*-0x1+-0xed*0x8+-0x66b)>_0x40ff44['byteL'+_0x7f24d(0xcfe)])return![];try{switch(_0x153414){case'u8':case'i8':_0x40ff44['setUi'+_0x7f24d(0x6f2)](_0x9176fa,_0x4830a0[_0x7f24d(0x5cf)](_0x127ef5,-0x1001+0x1055+0xab));break;case _0x4830a0[_0x7f24d(0x2d2)]:case _0x7f24d(0x5a6):_0x40ff44[_0x7f24d(0x86f)+_0x7f24d(0xd1b)](_0x9176fa,_0x127ef5|-0x1193*0x1+-0xa4*-0x9+-0x1*-0xbcf,!![]);break;case'i32':case _0x7f24d(0x835):_0x40ff44[_0x7f24d(0x86f)+_0x7f24d(0xd9d)](_0x9176fa,_0x4830a0['NXLUd'](_0x127ef5,-0x104e*0x1+-0x12a7+0x1d7*0x13),!![]);break;case _0x7f24d(0xd49):_0x40ff44['setFl'+'oat32'](_0x9176fa,_0x127ef5,!![]);break;default:_0x40ff44[_0x7f24d(0x86f)+'t32'](_0x9176fa,_0x127ef5|0xd*-0x2a5+0x70+0x21f1,!![]);}return!![];}catch(_0x51b74f){return![];}}var _0x59d687={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x3b5618(0x7f5)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x4830a0['xjPIu']},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x2c0af5(_0x49cda2){var _0x485cb6=_0x3b5618,_0x13c10a='';for(var _0x45a480=0x63+-0x18*0x167+0x3*0xb17;_0x45a480<_0x49cda2['lengt'+'h'];_0x45a480++){var _0x1f56ca=_0x49cda2[_0x45a480][_0x485cb6(0x8a8)+'ing'](0x1aa7+-0x14ce+-0x5c9);_0x13c10a+=(_0x1f56ca[_0x485cb6(0x853)+'h']<-0x1e9+0xdd1+-0xbe6*0x1?'0':'')+_0x1f56ca;}return _0x13c10a;}function _0x4ff6e7(_0x540d07,_0x1f87c1,_0x326d3c){var _0x4af367=_0x3b5618,_0xc32d38=_0x3ea2b7();if(!_0xc32d38){if(_0x4af367(0x663)===_0x4830a0[_0x4af367(0x993)]){var _0x429375=new _0x4d0fc2(_0x570496);for(var _0x928757=-0x1*0xb8f+0x25d1+-0x1a42;_0x928757<_0x2e4aeb;_0x928757++)_0x429375[_0x928757]=_0x12645e[_0x4af367(0xd98)+_0x4af367(0x6f2)](_0x1a498c+_0x158049+_0x928757);return _0x2d6698['ok']++,_0x429375;}else return _0x3d795f['faile'+'d']++,_0x3d795f['lastE'+_0x4af367(0x6a4)]=_0x3d795f[_0x4af367(0xc95)+_0x4af367(0x6a4)]||'no\x20HE'+'APU8\x20'+_0x4af367(0x8c6)+_0x4af367(0x400)+_0x4af367(0x616)+'e\x20not'+_0x4af367(0x320)+_0x4af367(0x217)+_0x4af367(0x345)+'Runti'+'me.re'+_0x4af367(0x7f3)+_0x4af367(0x623)+')\x20or\x20'+'any\x20w'+_0x4af367(0xc2f)+_0x4af367(0x2c0)+'al',null;}if(_0x1f87c1<-0x3*-0x547+-0x6aa*-0x1+-0x167f||_0x1f87c1+_0x326d3c>_0xc32d38[_0x4af367(0xd84)+'ength'])return _0x3d795f['faile'+'d']++,_0x3d795f[_0x4af367(0xc95)+'rror']=_0x3d795f[_0x4af367(0xc95)+_0x4af367(0x6a4)]||_0x4830a0['QbLAV'](_0x4830a0['BtTWJ']+(_0x540d07+_0x1f87c1)[_0x4af367(0x8a8)+_0x4af367(0x9f5)](0x1858+0x2025+0x1*-0x386d)+('\x20past'+'\x20heap'+_0x4af367(0x264)+'0x'),_0xc32d38['byteL'+_0x4af367(0xcfe)][_0x4af367(0x8a8)+'ing'](0x19b9+0x1*-0x159b+-0x40e)),null;try{var _0x3a9a28=new Uint8Array(_0x326d3c);for(var _0x53026f=0x1*0xf7f+-0x17b9+0x36*0x27;_0x4830a0['VLtcS'](_0x53026f,_0x326d3c);_0x53026f++)_0x3a9a28[_0x53026f]=_0xc32d38['getUi'+'nt8'](_0x4830a0[_0x4af367(0x71e)](_0x540d07,_0x1f87c1)+_0x53026f);return _0x3d795f['ok']++,_0x3a9a28;}catch(_0x334a8a){return _0x3d795f[_0x4af367(0xd63)+'d']++,_0x3d795f[_0x4af367(0xc95)+'rror']=_0x3d795f[_0x4af367(0xc95)+_0x4af367(0x6a4)]||String(_0x334a8a&&_0x334a8a[_0x4af367(0x7d3)+'ge']||_0x334a8a)[_0x4af367(0x1d7)](0x1e*-0x7b+0x224*0x1+-0x2*-0x623,-0x1*-0x1c9b+-0x13a8*-0x1+-0x2fcb),null;}}function _0x1bc03e(_0x2c6661,_0xc07d57,_0x44a078){var _0x1643e6=_0x3b5618;if(_0x1643e6(0x3d9)===_0x1643e6(0x3d9)){var _0x46f474=_0x59d687[_0x44a078],_0x4b9f53=_0x4ff6e7(_0x2c6661,_0xc07d57,_0x46f474[_0x1643e6(0x5f7)]);if(!_0x4b9f53)return null;var _0x526413=new DataView(_0x4b9f53['buffe'+'r'],_0x4b9f53['byteO'+_0x1643e6(0x297)],_0x4b9f53['byteL'+_0x1643e6(0xcfe)]),_0x16b884=_0x526413['getIn'+'t32'](_0x46f474[_0x1643e6(0x362)],!![]),_0x3de119=_0x526413['getIn'+_0x1643e6(0xd9d)](_0x46f474[_0x1643e6(0x779)+'n'],!![]),_0x3e00f3=_0x526413['getUi'+'nt8'](_0x46f474[_0x1643e6(0x3f7)+'d'])&-0x19*-0x128+-0x12ad+0x2*-0x51d,_0x238e5f=_0x4830a0['OlzOc'](_0x44a078,_0x1643e6(0x23d))?_0x526413['getFl'+'oat32'](_0x46f474['fake'],!![]):_0x44a078===_0x4830a0['KZzdZ']?_0x526413[_0x1643e6(0xc80)+'t32'](_0x46f474['fake'],!![]):_0x526413['getUi'+_0x1643e6(0x6f2)](_0x46f474[_0x1643e6(0x389)]),_0x38a46c=_0x4830a0['WxnhB'](_0x526413[_0x1643e6(0xd98)+_0x1643e6(0x6f2)](_0x46f474[_0x1643e6(0xb2f)+'e']),-0x14*-0x8e+0x65*0xe+0x109d*-0x1);return{'keyAtOffset0':_0x16b884,'hidden':_0x3de119,'inited':_0x3e00f3,'fake':_0x238e5f,'act':_0x38a46c,'hex':_0x2c0af5(_0x4b9f53),'alt':_0x44a078===_0x1643e6(0x61c)?_0x4830a0['UfkJh'](_0x3de119,_0x238e5f|0x1e0a*0x1+-0x1172+-0x326*0x4):null};}else return _0x537d1d[_0x1643e6(0x913)+'Off'];}function _0x21acef(_0x5d60dc,_0x2c0ae4,_0x4680e1){var _0x1bbfb1=_0x3b5618;if(_0x5d60dc===_0x4830a0['GZRQu'])return _0x138a63(_0x2c0ae4^_0x4680e1);if(_0x4830a0[_0x1bbfb1(0xbf3)](_0x5d60dc,_0x1bbfb1(0x61c)))return _0x4830a0[_0x1bbfb1(0xbd9)](_0x2c0ae4^_0x4680e1,-0x310+0x1f2b+-0x1c1b);return _0x4830a0['WxnhB'](_0x4830a0['RKQaJ'](_0x2c0ae4,_0x4680e1),-0x1d2+0x2*0xd8b+-0x1845*0x1)!==-0x77f*0x3+-0xf25*0x1+0x1*0x25a2?-0xb53*0x1+-0x1475+0x1*0x1fc9:-0x8*-0x1f7+-0x1*-0x571+-0x1529;}function _0x3484b5(_0x2fcfd5,_0x2cff62,_0x1481df){var _0x1eb4d5=_0x3b5618;if(_0x1eb4d5(0x7cf)!==_0x1eb4d5(0x7cf))try{return _0x384e5e&&_0x3c0db4[_0x1eb4d5(0xd7a)+'r']?_0x15034a[_0x1eb4d5(0xd7a)+'r'][_0x1eb4d5(0xd84)+'ength']:-0xb12+-0x1*-0x2116+0x1604*-0x1;}catch(_0x19ec63){return-0x1*-0x2641+0x146c+-0x685*0x9;}else{var _0x232cca=('6|3|2'+_0x1eb4d5(0xc4c)+'|9|10'+'|4|7|'+'12|1|'+'14|5|'+_0x1eb4d5(0x31c))[_0x1eb4d5(0x8a1)]('|'),_0x4f90bd=0x1772+0x2f*0x8b+-0x30f7;while(!![]){switch(_0x232cca[_0x4f90bd++]){case'0':return{'real':_0x29e64e,'fake':_0x287054,'act':_0x1ddd63,'init':_0x573a04,'key':_0x4d0586,'hidden':_0x42e48c};case'1':_0x573a04=(_0x573a04||-0x13fa*-0x1+0x1*0x38c+-0x1*0x1786)&-0x8f1+-0x1*-0x98f+-0x9d;continue;case'2':var _0x4d0586=_0x4830a0[_0x1eb4d5(0xd25)](_0x118468,_0x4830a0['MBtNG'](_0x2fcfd5+_0x2cff62,_0x2c079b['key']),'u8');continue;case'3':if(!_0x2c079b)return null;continue;case'4':if(_0x4d0586===undefined||_0x4830a0[_0x1eb4d5(0x714)](_0x42e48c,undefined)||_0x4830a0[_0x1eb4d5(0x7eb)](_0x287054,undefined)||_0x4830a0[_0x1eb4d5(0x70a)](_0x1ddd63,undefined))return null;continue;case'5':var _0x29e64e;continue;case'6':var _0x2c079b=_0x59d687[_0x1481df];continue;case'7':_0x4d0586&=0x746+0x1*0x200d+-0x1*0x2654;continue;case'8':var _0x573a04=_0x4830a0[_0x1eb4d5(0x431)](_0x118468,_0x4830a0[_0x1eb4d5(0x4df)](_0x2fcfd5,_0x2cff62)+_0x2c079b[_0x1eb4d5(0x3f7)+'d'],'u8');continue;case'9':var _0x287054=_0x4830a0[_0x1eb4d5(0x2c8)](_0x118468,_0x4830a0['nogkX'](_0x2fcfd5+_0x2cff62,_0x2c079b[_0x1eb4d5(0x389)]),_0x1481df===_0x4830a0['GZRQu']?'f32':_0x1481df===_0x4830a0[_0x1eb4d5(0x6f3)]?_0x4830a0['xjPIu']:'u8');continue;case'10':var _0x1ddd63=_0x118468(_0x4830a0[_0x1eb4d5(0x418)](_0x4830a0['vFGHV'](_0x2fcfd5,_0x2cff62),_0x2c079b[_0x1eb4d5(0xb2f)+'e']),'u8');continue;case'11':if(_0x4830a0['VVOOe'](_0x1481df,_0x1eb4d5(0x23d)))_0x29e64e=_0x4830a0[_0x1eb4d5(0x7fc)](_0x138a63,_0x42e48c^_0x4d0586);else{if(_0x1481df===_0x1eb4d5(0x61c))_0x29e64e=_0x4830a0[_0x1eb4d5(0xbd9)](_0x42e48c^_0x4d0586,-0x1*0xfd3+-0x1*-0x443+0xb90);else _0x29e64e=_0x4830a0['WxnhB'](_0x4830a0[_0x1eb4d5(0x604)](_0x42e48c,_0x4d0586),0x952*0x3+0x1*-0x4ac+-0x164b)!==0x798+0x1278+0x1a10*-0x1?-0x1*0x264c+0x17f5+0xe58:0x491+-0x50b*0x1+-0x1*-0x7a;}continue;case'12':_0x42e48c|=-0x10ab+0x105e+0x4d;continue;case'13':var _0x42e48c=_0x118468(_0x4830a0['btIRE'](_0x4830a0[_0x1eb4d5(0x95c)](_0x2fcfd5,_0x2cff62),_0x2c079b['hidde'+'n']),'i32');continue;case'14':_0x1ddd63&=0x1a6b+-0x1*-0x1ab1+0x1*-0x351b;continue;}break;}}}function _0x56a9b2(_0x3eb480,_0xd97497,_0x3987d6,_0x924329){var _0x199967=_0x3b5618,_0x2a1d9a=_0x59d687[_0x3987d6],_0x1462ea=_0x4ff6e7(_0x3eb480,_0xd97497,_0x2a1d9a['size']);if(!_0x1462ea)return![];var _0x397380=new DataView(_0x1462ea['buffe'+'r'],_0x1462ea['byteO'+'ffset'],_0x1462ea[_0x199967(0xd84)+'ength']),_0x2b86c7=_0x2a1d9a[_0x199967(0xa62)+'pe']==='u8'?_0x397380['getUi'+'nt8'](_0x2a1d9a[_0x199967(0x362)]):_0x397380['getIn'+'t32'](_0x2a1d9a[_0x199967(0x362)],!![]),_0x22c9e2;if(_0x3987d6===_0x199967(0x23d))_0x22c9e2=_0x4830a0['xkZaW'](_0x1e620d,_0x924329);else{if(_0x4830a0[_0x199967(0x8aa)](_0x3987d6,_0x4830a0['KZzdZ']))_0x22c9e2=_0x924329|-0x411+0x5f6*0x6+-0x1fb3;else _0x22c9e2=(_0x924329?-0x3d*0x22+0x1f9*0x7+0x49*-0x14:-0x8c2+-0xd*0x177+0x1bcd)&0xe*0x1f3+0x1*-0x121b+-0x83*0x10;}return _0x4830a0['uMqaG'](_0x6ae407,_0x4830a0[_0x199967(0xa93)](_0x3eb480,_0xd97497)+_0x2a1d9a['hidde'+'n'],_0x4830a0[_0x199967(0x37f)],_0x4830a0[_0x199967(0xaec)](_0x22c9e2,_0x2b86c7))&&_0x4830a0[_0x199967(0x6e3)](_0x6ae407,_0x4830a0[_0x199967(0xa9a)](_0x3eb480+_0xd97497,_0x2a1d9a[_0x199967(0x389)]),_0x3987d6===_0x199967(0x23d)?_0x4830a0[_0x199967(0xc18)]:_0x4830a0[_0x199967(0x8aa)](_0x3987d6,_0x199967(0x61c))?_0x199967(0x7f5):'u8',_0x4830a0['quQHl'](_0x3987d6,_0x4830a0['GZRQu'])?_0x924329:_0x4830a0[_0x199967(0x909)](_0x3987d6,_0x4830a0[_0x199967(0x6f3)])?_0x924329|0x6*-0x57+-0x18c2*0x1+0x1acc:_0x924329?-0x1843+0x25d8+-0xd94:-0x1e7*0x6+-0x102*-0x9+0x258)&&_0x6ae407(_0x4830a0['mnJpg'](_0x3eb480,_0xd97497)+_0x2a1d9a[_0x199967(0xb2f)+'e'],'u8',-0x531*0x1+-0x1a23+-0x191*-0x14);}var _0x328f9c={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x279e20=0x1bac+0x26af+-0x1*0x425b+0.03,_0xbc3635=-0x1a46+0x1b49+-0x101*0x1,_0xfe740c={},_0x177880=-0x1c40+0x2227+0x1*-0x5e7,_0x48fe2f=[],_0x4ac976=[];function _0x472a63(_0x1554df){var _0x32af1c=_0x3b5618,_0x14de89={'Trvyy':'singl'+'eton','POpMi':_0x32af1c(0x57f)+'ve\x20ob'+_0x32af1c(0xaf8)+_0x32af1c(0xa44)+'ured\x20'+_0x32af1c(0x6fc),'DvJoV':'no\x20Up'+_0x32af1c(0x85a)+'ran\x20y'+_0x32af1c(0x4b3)+_0x32af1c(0xc39)+_0x32af1c(0x8cc)+_0x32af1c(0x327)+'\x20did\x20'+_0x32af1c(0x65e)+'atch.'},_0x2bc97e=_0xf4ed7['FPSco'+_0x32af1c(0x60b)+_0x32af1c(0x4c0)]||[],_0x53d344=[];_0x4ac976=[],_0x48fe2f=[];for(var _0x73b96f=-0x139*0x9+-0x1*-0x1666+-0xb65*0x1;_0x73b96f<_0x2bc97e['lengt'+'h'];_0x73b96f++){var _0x2d4e2c=_0x2bc97e[_0x73b96f][-0x23af+0x1*0xd95+0x161a*0x1];if(_0x4830a0['LsPih'](_0x2bc97e[_0x73b96f][-0x4*0x236+0x1*0x1166+-0x1*0x88d],'obfF'))continue;var _0x3e0038=_0x1bc03e(_0x1554df,_0x2d4e2c,_0x32af1c(0x23d));if(!_0x3e0038||_0x3e0038[_0x32af1c(0x3f7)+'d']!==0x3b9+0x648+-0xa00)continue;var _0x2d0516=_0x4830a0[_0x32af1c(0xc31)](_0x21acef,_0x32af1c(0x23d),_0x3e0038[_0x32af1c(0x779)+'n'],_0x3e0038['keyAt'+'Offse'+'t0']);if(_0x4830a0[_0x32af1c(0xa6d)](typeof _0x2d0516,_0x4830a0['EqENS'])||!isFinite(_0x2d0516))continue;var _0x3c660e=_0x1554df+':'+_0x2d4e2c,_0x177731=_0xfe740c[_0x3c660e];if(!_0x177731||_0x4830a0['JCtzb'](_0x2d0516,_0x177731['lastW'+_0x32af1c(0x5bf)+'n']))_0x177731=_0xfe740c[_0x3c660e]={'base':_0x2d0516,'lastWritten':null};var _0x463195=_0x177731['base'],_0x577e1c=Math['abs'](_0x463195);if(_0x577e1c<0x31e+-0x868+0x54a+0.0001||_0x4830a0[_0x32af1c(0xb94)](_0x577e1c,-0x4b3*0x9+0x4a95+-0x3bb9*-0x6)){_0x4ac976[_0x32af1c(0xbb7)]({'o':_0x2d4e2c,'v':_0x2d0516,'why':_0x4830a0['TnOZO']});continue;}_0x53d344[_0x32af1c(0xbb7)]({'o':_0x2d4e2c,'v':_0x2d0516,'a':_0x577e1c,'base':_0x463195,'key':_0x3c660e,'st':_0x177731});}var _0x5b36fd=[];for(var _0x3710cf=0x2d6+0x1fd1+-0x22a7;_0x3710cf<_0x53d344['lengt'+'h'];_0x3710cf++){if(_0x4830a0['aDIPJ'](_0x4830a0['kMwha'],_0x4830a0[_0x32af1c(0x68c)])){var _0x55c1ac=_0x53d344[_0x3710cf]['a'],_0x26e96d=null;for(var _0x19b1ed=0x1713+-0x1da*0x5+0x49b*-0x3;_0x19b1ed<_0x5b36fd[_0x32af1c(0x853)+'h'];_0x19b1ed++){if(_0x4830a0['aQURO']!==_0x32af1c(0x90c)){var _0x2e96fb=_0x5b36fd[_0x19b1ed][_0x32af1c(0xd44)]/_0x55c1ac;if(_0x4830a0['HwXkO'](_0x2e96fb,-0x1*0x1159+-0xd92+0xf76*0x2-_0x279e20)&&_0x2e96fb<-0x1d25*-0x1+-0x4f+-0x79*0x3d+_0x279e20){_0x26e96d=_0x5b36fd[_0x19b1ed];break;}}else _0x2c57cc[_0x32af1c(0xbb7)]({'o':_0x13a3b1[_0x179c3d][_0x32af1c(0x570)+'rs'][_0x31d4bc]['o'],'v':_0x4f77f1[_0x279e6c][_0x32af1c(0x570)+'rs'][_0x570d86]['v'],'why':_0x14de89['Trvyy']});}if(!_0x26e96d){if('wEMFw'===_0x32af1c(0x3d4)){var _0x1a9520=_0x10cb74[_0x32af1c(0xa85)](_0x4e98c8);if(_0x4830a0[_0x32af1c(0x269)](typeof _0x1a9520['y'],'numbe'+'r')&&_0x4830a0[_0x32af1c(0x2b8)](_0x68150c,_0x1a9520['y']))_0x144e23[_0x32af1c(0x569)+'f']=_0x1a9520['y'];if(typeof _0x1a9520['p']===_0x4830a0['EqENS']&&_0x18648a(_0x1a9520['p']))_0x5c7fc0['pitch'+_0x32af1c(0x7dc)]=_0x1a9520['p'];}else _0x26e96d={'mean':_0x55c1ac,'members':[]},_0x5b36fd[_0x32af1c(0xbb7)](_0x26e96d);}_0x26e96d['membe'+'rs'][_0x32af1c(0xbb7)](_0x53d344[_0x3710cf]),_0x26e96d[_0x32af1c(0xd44)]=0x2186+-0x245d+-0x1*-0x2d7;for(var _0x3f2e98=-0x7dc*0x1+-0x1*-0x2683+-0x1ea7;_0x4830a0[_0x32af1c(0x771)](_0x3f2e98,_0x26e96d[_0x32af1c(0x570)+'rs'][_0x32af1c(0x853)+'h']);_0x3f2e98++)_0x26e96d[_0x32af1c(0xd44)]+=_0x26e96d[_0x32af1c(0x570)+'rs'][_0x3f2e98]['a'];_0x26e96d['mean']/=_0x26e96d[_0x32af1c(0x570)+'rs'][_0x32af1c(0x853)+'h'];}else _0x1707b7[_0x32af1c(0xbb7)](_0x14de89['POpMi']),_0x539e37['push'](''),_0x314fe9[_0x32af1c(0xbb7)](_0x32af1c(0x3c1)+'ooks\x20'+_0x32af1c(0xd0f)+_0x32af1c(0x4d8)+_0x32af1c(0x439)+_0x32af1c(0x529)+'wn\x20Up'+_0x32af1c(0xd8f)+_0x32af1c(0xcc3)+_0x32af1c(0xdaf)+_0x32af1c(0xa44)+_0x32af1c(0xc24)+'means'),_0x59a112[_0x32af1c(0xbb7)](_0x14de89['DvJoV']);}var _0x47ce26=[];for(var _0x24c5c5=-0x3*-0x76d+0x6fb+0x217*-0xe;_0x4830a0['qVuXP'](_0x24c5c5,_0x5b36fd[_0x32af1c(0x853)+'h']);_0x24c5c5++){if(_0x4830a0[_0x32af1c(0x68e)](_0x5b36fd[_0x24c5c5][_0x32af1c(0x570)+'rs']['lengt'+'h'],_0xbc3635))_0x47ce26['push'](_0x5b36fd[_0x24c5c5]);}if(!_0x47ce26[_0x32af1c(0x853)+'h']){_0x4ac976['push']({'o':-(0x1d3*0x3+0x9*-0x275+0x10a5),'v':0x0,'why':_0x4830a0['CuCUz'](_0x32af1c(0x729)+_0x32af1c(0x30d)+'f\x20',_0xbc3635)+(_0x32af1c(0x3b4)+'uredF'+'loats'+_0x32af1c(0xa96)+'ed')});return;}var _0x82f2f1=_0x47ce26[-0x1682*0x1+0x277*-0x2+0x1b70][_0x32af1c(0xd44)];for(var _0x45c914=0x2ba*0xd+-0x9a3+-0x19cf;_0x45c914<_0x47ce26['lengt'+'h'];_0x45c914++)if(_0x4830a0[_0x32af1c(0x93f)](_0x47ce26[_0x45c914]['mean'],_0x82f2f1))_0x82f2f1=_0x47ce26[_0x45c914]['mean'];var _0x2d5d35=_0x82f2f1*(0x1c*0x131+-0x1ffd+-0x15f+0.5);for(var _0x449afb=-0x1bb1+-0x44b*-0x1+0x1766;_0x4830a0[_0x32af1c(0x325)](_0x449afb,_0x5b36fd[_0x32af1c(0x853)+'h']);_0x449afb++){if(_0x5b36fd[_0x449afb][_0x32af1c(0x570)+'rs']['lengt'+'h']>=_0xbc3635)continue;for(var _0x3c46b1=-0x2294+-0x58d+0x2821;_0x3c46b1<_0x5b36fd[_0x449afb][_0x32af1c(0x570)+'rs']['lengt'+'h'];_0x3c46b1++){_0x4ac976['push']({'o':_0x5b36fd[_0x449afb]['membe'+'rs'][_0x3c46b1]['o'],'v':_0x5b36fd[_0x449afb]['membe'+'rs'][_0x3c46b1]['v'],'why':'singl'+'eton'});}}for(var _0x1bf05b=0x5*0x2cc+-0x11b3*-0x1+0x1*-0x1faf;_0x1bf05b<_0x47ce26['lengt'+'h'];_0x1bf05b++){var _0x383801=_0x47ce26[_0x1bf05b][_0x32af1c(0x570)+'rs'];for(var _0x1ae0b9=0x2ce+-0x2507+-0x2239*-0x1;_0x4830a0['LeVrB'](_0x1ae0b9,_0x383801[_0x32af1c(0x853)+'h']);_0x1ae0b9++){var _0xf121f0=_0x383801[_0x1ae0b9];if(_0xf121f0['a']<_0x2d5d35){_0x4ac976['push']({'o':_0xf121f0['o'],'v':_0xf121f0['v'],'why':_0x4830a0[_0x32af1c(0x499)](_0x32af1c(0x524)+_0x32af1c(0x975)+'r\x20',_0x2d5d35['toFix'+'ed'](0x22d6+0x5*0x4cd+-0x3ad5))});continue;}var _0x18ff8e=_0xf121f0['base']*_0x328f9c['facto'+'r'];_0x56a9b2(_0x1554df,_0xf121f0['o'],'obfF',_0x18ff8e)&&(_0xf121f0['st'][_0x32af1c(0xb10)+_0x32af1c(0x5bf)+'n']=Math['froun'+'d'](_0x18ff8e),_0x177880++,_0x48fe2f['push']('0x'+_0xf121f0['o'][_0x32af1c(0x8a8)+_0x32af1c(0x9f5)](-0x70*0x49+-0xd*-0x209+0x1d9*0x3)));}}}var _0xf4ed7={'FPScontroller':[[-0xaa1+0x2*-0x51b+0x14e7,_0x3b5618(0x23d)],[-0x1*-0x1d1+-0x132e+-0xf*-0x12b,_0x4830a0[_0x3b5618(0xdc2)]],[0x57*0x2d+0xa*0xee+-0x1857,'obfF'],[0x48c+0x2449+-0x287d,_0x4830a0['GZRQu']],[-0x33c+-0x26f*0xe+0x12df*0x2,_0x3b5618(0x23d)],[-0x1*-0x1ec6+0xde8+-0x2c26,_0x3b5618(0x23d)],[0x1229+-0xae+0x5*-0x35f,_0x4830a0[_0x3b5618(0xdc2)]],[0xd2*0x12+-0x1db0+-0x16*-0xb6,_0x4830a0['cGEit']],[-0x1de1*-0x1+-0x233b*0x1+0x61e,_0x4830a0[_0x3b5618(0xdc2)]],[-0xe59+0x4*0x7dd+0x103f*-0x1,_0x4830a0['xjPIu']],[-0x1*0x87b+-0x1f0d+0x6*0x6bc,'v3'],[-0x38*-0x9f+-0x49a*-0x5+0xfb*-0x3a,'u8'],[0xc16+-0x262+-0xb*0xcc,_0x4830a0[_0x3b5618(0xdc2)]],[-0x62e+-0x41b+0xb51,_0x4830a0[_0x3b5618(0x37f)]],[-0x1aa8+-0x1*0x18f2+-0x1*-0x34a6,'u8'],[-0x101*0xa+-0x204a+0xad9*0x4,'i32'],[-0x5a+-0x2fe*-0x8+-0x1682,'u8'],[0x11f9+-0x39e*-0x6+-0x2698,'u8'],[-0x27b+0x1f79+0xa6*-0x2b,_0x4830a0[_0x3b5618(0xdc2)]],[-0x6ca+0x878+-0x7a,_0x4830a0[_0x3b5618(0xdc2)]],[0x985*-0x1+-0x1c64+0x1*0x2735,_0x4830a0[_0x3b5618(0xc18)]],[0x246d+0xbd7+0x14*-0x259,'f32'],[-0x1ab0+0x5*0x13e+0x15ce,'v3'],[-0x509*0x1+-0x1*-0x1565+-0x4*0x3bf,'v3'],[0x1728+0x9eb+-0x1fa7,'f32'],[-0x187c+-0x1ba6+-0x1ac9*-0x2,_0x4830a0['VbJIe']],[-0x23f7+-0x691*0x1+0xb04*0x4,'u8'],[-0x1145*-0x1+0x5*0x5cf+-0x2cc4,'f32'],[0x6c*0x53+0x1b+0x1*-0x2187,'v3'],[0x6*-0x16d+-0x2f*-0x30+0x3*0x76,'u8'],[0x1ce5+0x1*0x1ac7+-0x35f8,'f32'],[-0x1*-0x13f9+-0xa9*-0x2f+-0x3148,_0x4830a0[_0x3b5618(0xc18)]],[0xecf*-0x2+-0x1d93+0x3ced,'u8'],[-0x1*0x127f+0x1*-0x110c+0x2548*0x1,'u8'],[0x3*-0x7db+0x17*0x192+-0x7*0x18b,_0x4830a0[_0x3b5618(0xdc2)]],[-0x1add+0xc85+0x1030,_0x3b5618(0xd49)],[-0xec*0x20+0x146f+0xaed,'u8'],[0x1110+-0x33a*0x3+0x1e*-0x2f,'obfF'],[0x90c+-0x8a5+0x191*0x1,'v3'],[0x19ea+-0x1*-0x1645+0x8b*-0x55,'obfB'],[0x1ab+0x1ba9+0xa6*-0x2a,_0x3b5618(0xd49)],[0x238c+-0x676+-0x1afa,'f32'],[0x2bd*-0x8+-0x1851*-0x1+-0x1d,'f32'],[0x9*-0x43f+0xb03*0x2+-0x62b*-0x3,'f32'],[-0x3*-0xa04+0xc7*-0x17+-0x9d7,'f32'],[-0xebd+0x423+0xcf2,'f32'],[0x97*0x7+-0x2*0xd7f+0xb*0x24b,'u8'],[0x29*-0x3b+0x10a6+-0x26b*0x2,'u8'],[-0x1*-0x1b83+-0xfc4*-0x2+-0x38ad,'u8'],[-0x332*-0xc+0xa63+-0x2e5b*0x1,_0x3b5618(0xd49)],[0x6*-0x558+0xef3*-0x2+0x405a,'u8'],[-0x330+0x135b+-0xdc6,'u8'],[0x12e*0x11+0x1024+0x32*-0xad,_0x4830a0['VbJIe']],[0x7fb+-0x1*-0x1b99+-0x2128,'f32'],[-0x152c+0x6a6+0x10f6,_0x4830a0[_0x3b5618(0xc18)]],[-0x185f+0x1*0xcfb+-0x1*-0xdd8,_0x4830a0['VbJIe']],[-0x713*-0x3+-0x5*-0x5e4+-0x3035,_0x3b5618(0xd49)],[0x31*-0xb7+0x1*0x1037+0x154c,'f32'],[0x1*0x6fb+0xa8e+0x3*-0x503,_0x4830a0['VbJIe']],[-0xfe6+-0x25c8+0x3832,'v3'],[-0x745*-0x2+-0x129d+0x6a7,'u8'],[-0x2679+0x79c+0x5*0x6b1,'v3'],[0xfd3+0xce6+-0x1a15,_0x3b5618(0xd49)],[0x16f+0xb5b+-0xa1e,'v3'],[0x2428+0x271+-0x23e1,_0x4830a0[_0x3b5618(0xc18)]],[0x127*0x5+-0x2*0x1358+0x23a9,'f32'],[0x5*0xe5+0x1d7c+0x3*-0xa67,_0x3b5618(0xd49)],[0x52*0x64+-0x1be+-0xd*0x21e,'u8'],[-0xa8b*0x1+-0x2*0x26e+0x4*0x48b,'u8'],[-0x1b88+0x10b4+0xd9c,_0x3b5618(0xd49)],[-0x1f08+0x1*0xdf3+0x1*0x13f1,_0x3b5618(0xd49)],[-0x12e2*-0x1+0x16*0x125+0x41e*-0xa,'v3'],[-0x1dde+0x8a5*0x3+0x6df,'v3'],[-0x463*0x2+-0x6*0x4e1+0x2908,_0x3b5618(0xd49)],[-0x2c*-0x26+-0x1ed9+-0x25*-0xbd,_0x4830a0[_0x3b5618(0xc18)]],[-0xf30+0x21ee+0x16e*-0xb,_0x4830a0[_0x3b5618(0xc18)]],[0x1da5+0x2fb+-0x1d98,'f32'],[-0xcc3+-0x2*-0x1d+0xf95,'v3'],[-0xa1*-0x3a+-0x1*0xcdd+-0x1485,'u8'],[-0x8*0x258+-0x81e+-0xefd*-0x2,'v3'],[0xb1f*0x3+-0x1722+-0x713*0x1,_0x4830a0[_0x3b5618(0x37f)]],[0x4*0x4f+0xb81+0x1*-0x991,_0x3b5618(0xd49)],[0x232e+0xb*0x186+-0x30c0,_0x4830a0[_0x3b5618(0xc18)]],[-0x7d1*-0x1+0x4f8+-0x995,_0x4830a0[_0x3b5618(0xc18)]],[0x21ae+0x5*-0x35f+-0xd97,'f32'],[0x858+-0x16e1+0x11c9,'u8'],[0x72b+0x21c4*-0x1+0x1dda,'u8'],[0x2*-0xa03+-0x2fe+0x1a5*0x10,'u8'],[-0x55*-0x11+0x362*-0x4+-0x8*-0x166,'u8'],[-0x358*0x7+0xb7d+0xf39,'u8'],[-0x124e+0x7*-0x3e5+-0x3*-0x104b,'f32'],[0x1dc+-0x3b*0x43+0x10e9,_0x4830a0[_0x3b5618(0xc18)]],[-0x1565*0x1+-0x1*-0x1d24+-0x467,_0x4830a0['VbJIe']],[-0x22e1+0x1dd6+0x867,_0x3b5618(0xd49)],[0x2f*-0x47+0x2*0x723+0x223*0x1,_0x3b5618(0xd49)],[0x257*-0x5+-0x52*0x65+-0x15b*-0x23,'u8'],[0x22b1*-0x1+0xab+0x256e,_0x3b5618(0xd49)],[0xfe*0x27+-0xde7*-0x2+-0x2*0x1f8a,'f32'],[0x1097+-0x784+-0x5a3,'u8'],[0x61b+0x2*-0x5cf+-0x1*-0x8fb,'v3'],[0x32*-0x6c+-0x2*-0x4ae+0x2*0x7a0,'v3'],[0x2c3*-0x7+0x18*0xa2+0x1*0x7b5,'v3'],[0x1*-0x1e7f+0x182e+0x7*0x16b,_0x4830a0[_0x3b5618(0xc18)]],[0xb29+0x1*0x1cd+0x5*-0x1de,_0x4830a0[_0x3b5618(0xc18)]],[-0x15a6*0x1+-0x1*0x1f75+0x38bf,_0x4830a0[_0x3b5618(0xc18)]],[-0xb6e+-0x4*-0x79f+-0xdb*0x12,'v3'],[0x8ad*-0x4+0x1*0x20b9+0x5af,_0x4830a0[_0x3b5618(0x37f)]],[-0xc67*-0x1+0xb5*-0x17+-0x184*-0x5,'u8'],[-0x21b5+0x240c+0x165,_0x3b5618(0x7f5)],[0x18f1+-0x1*-0x26c+-0x179d,'f32'],[-0xa*-0x265+-0x9e3*-0x3+-0x31d7,_0x3b5618(0xd49)],[0x1cd*-0x6+0x4fc+0x99a,_0x3b5618(0xd49)],[0xf7*-0x1a+-0xb67+0x1*0x2849,_0x4830a0[_0x3b5618(0xc18)]],[0x1424*0x1+0xab2+-0x3*0x902,'v3'],[0x155c+-0x19c2+0x2*0x421,_0x4830a0[_0x3b5618(0x37f)]],[-0x10f1+0x2126+-0xc55,'u8'],[-0x4fd+-0x2680+-0x2*-0x17af,'u8'],[0x1*0x2239+-0x81c*-0x1+-0x2673,'u8'],[0x14b*-0x17+-0x48+-0x1*-0x21e9,_0x4830a0[_0x3b5618(0xc18)]],[-0x1dab+0x1*0x47f+0x1d14,_0x3b5618(0x7f5)]],'HealthScript':[[-0x5*-0x781+0x2*-0x10a9+0x1*-0x3db,'u8'],[-0x8e*-0x35+0x13be+-0x30c8,'i32'],[-0x5*-0x5ab+0x29*0x3d+-0x259c,_0x4830a0[_0x3b5618(0xc18)]],[0x1*-0x1e6d+-0x4e5*-0x5+0x5c*0x12,_0x3b5618(0xd49)],[0x1*0xfc5+0x65b*0x4+-0x1*0x28a9,_0x3b5618(0xd49)],[0x1a42+0xe92*0x1+-0x2848,_0x4830a0[_0x3b5618(0xc18)]],[0x5d*0x52+-0x1b0a+-0x230,'f32'],[0x1af0+0xb1*0x10+-0x1df*0x14,_0x4830a0[_0x3b5618(0xc18)]],[0x16e7+-0x83*0x2b+0x5*-0xe,'i32'],[-0x26e2+-0xf19+0x369f,'i32'],[0xdf0+0xcee*-0x3+-0x1982*-0x1,'u8'],[-0x1001+0x280+-0x715*-0x2,'u8'],[0x599*0x2+0x338+-0x28*0x58,'u8'],[-0x1*-0x115+0x760+-0x7ca,'u8'],[0x1b30+0x1*0x4e1+-0x1*0x1f51,_0x3b5618(0x61c)],[0x2*0xbb7+0x757+0x16d*-0x15,_0x4830a0[_0x3b5618(0x6f3)]],[-0x1f29+-0xfd*0x20+0x3fb1,_0x3b5618(0x61c)],[0x208b+-0x89*-0x2f+-0x38b6*0x1,'obfI'],[0x26ad+0x59b+-0x159c*0x2,'obfI'],[0x10ec+-0x87f+0x5*-0x175,_0x3b5618(0x9a5)],[0x1422+-0x131d+0x2b,_0x3b5618(0x23d)],[-0x3*-0xb0f+0x1*-0x2677+0x692,_0x4830a0['VbJIe']],[0x1d+0x1375+-0x1246,_0x4830a0['VbJIe']],[0x1b*-0xad+0x4*-0x8e7+0x372b,_0x3b5618(0xd49)],[0xc1b+-0xf*-0x279+0x17ef*-0x2,_0x4830a0[_0x3b5618(0xc18)]],[-0xf85+0x1*0x1773+-0x692,_0x4830a0['VbJIe']],[-0x1d29+0x1*-0x13d+0x1fc6,'v3'],[-0x18*0x19c+0x68*-0x33+0x3cc8,_0x3b5618(0xd49)],[0x1*0x1f1b+0x10a8+-0x2e4b,_0x3b5618(0xd49)],[-0x2114+-0x2*0x110e+0x44b0,'u8'],[-0x32*0x47+0xf7*0x17+-0x6c7,'u8'],[0xb5d*-0x2+-0x1d1e+0x3568*0x1,_0x4830a0['xjPIu']]],'PlayerConfig':[],'WeaponManager':[[0xfa9*0x1+-0x208f+0x10fe,'i32'],[-0xf3d+-0x2*-0x1206+-0x14b3,_0x4830a0[_0x3b5618(0x37f)]],[-0xdfd*-0x1+0x202b+0x1eb*-0x18,'u8'],[-0xb57*-0x2+0x7d1*0x1+-0x1e5b,_0x4830a0[_0x3b5618(0x37f)]],[0x1ff+0x2d1*0x7+-0x1552,_0x4830a0[_0x3b5618(0xdc2)]],[-0x4bb+0x1964+-0x142d,'f32'],[-0xea2*0x2+-0xbc5+0x3c7*0xb,_0x3b5618(0x7f5)],[0x99*0x1f+0x1*0x37d+0x226*-0xa,'u8'],[0x19*-0x131+0x712+0x1740,'u8'],[-0xa67+0x461*-0x5+0x20d8,_0x3b5618(0x7f5)],[0x1fab+0x6bf*0x5+-0x40d6,_0x4830a0[_0x3b5618(0xc18)]],[-0x49*0x67+-0xbaf*-0x3+-0x516,_0x3b5618(0xd49)],[-0x6e*-0x2b+-0xa*0x2ad+-0xc*-0xbf,_0x3b5618(0x7f5)],[0x1deb+-0x18ce+0x1*-0x461,'u8'],[0x74d+0x1*0x1cf+-0x840,_0x4830a0[_0x3b5618(0x6f3)]],[-0x3dd*0x8+-0x1733+0x370b,_0x3b5618(0x61c)],[-0x1*-0xb5+-0x348+-0x397*-0x1,_0x3b5618(0xd49)],[0x1aa*-0x10+0x1*0x26c5+-0xb1d,_0x4830a0[_0x3b5618(0xc18)]],[0x4*-0x6b7+-0x12ad+-0x2e95*-0x1,'f32'],[0x1*0x1159+0x28d*0xa+-0x29c3,_0x3b5618(0xd49)],[-0x8*0xe3+-0x1*-0x200a+-0x1*0x17d2,_0x4830a0['VbJIe']],[-0x1*0x1e8f+0x19d8+0x3*0x1f5,'u8'],[-0x2396+0x1*0xa75+0x1a4d,'obfI'],[-0x1dfb*0x1+-0xbc*0x13+0x2d2f*0x1,_0x3b5618(0x61c)],[0x198+-0x395+-0x1*-0x351,_0x4830a0['KZzdZ']],[0x1b49+-0x143b+0x3*-0x1e2,_0x4830a0['cGEit']],[-0x8*0x347+-0x4c5*-0x4+0x898,_0x3b5618(0x9a5)],[0x2*0xc87+-0x7*-0x28b+-0x295b,'obfB'],[0x18cd+0x2*0x734+-0x25a9,_0x4830a0[_0x3b5618(0x324)]],[-0x1*0x2168+-0x1dd*0x1+0x24e9,_0x3b5618(0x9a5)],[-0x15ea*-0x1+0x24c4+-0x38fe,_0x3b5618(0x61c)],[0x4c0*0x1+-0x222c+0x6*0x534,_0x3b5618(0x7f5)],[0x2355+-0xf33+-0x1*0x1252,'u8'],[-0x7*-0x30a+0x1be+-0x1530,_0x3b5618(0x7f5)],[0x2210+0x15f1+-0x3629,_0x3b5618(0x7f5)],[0xd*0x61+-0x219d*-0x1+0x1245*-0x2,_0x3b5618(0x7f5)],[0xb1*-0x29+0xec9+0x1c*0x8f,'u8'],[-0x515+0x1185+-0xa54,'u8'],[-0x2597+0x1625+0x118f,'u8'],[0x38b*0x9+0x958+0x13*-0x20f,'u8'],[0x2*0xeb7+0x1bcc*-0x1+0x1*0x7d,'u8'],[-0xe8b*0x2+-0x1d4c+0x1c9*0x22,_0x3b5618(0x7f5)],[-0x2157+0x1b91+0x2*0x40f,'u8']],'GG_GameManager':[[-0x2f*-0x80+-0x2457+0x1*0xcfb,'u8'],[-0x157f+-0x1488+0x2a33,_0x3b5618(0xd49)],[-0x878+-0xf91+0x184d,'u8'],[0xbf3*-0x2+-0x18cb*-0x1+0x14*-0x8,'u8'],[-0x1*-0x155f+-0x719*-0x5+-0xc*0x4b7,_0x3b5618(0xd49)],[-0x31c*-0x4+-0xfe+0x593*-0x2,'f32'],[-0xd08+-0x1187*-0x2+0x7*-0x31a,'i32'],[-0x1eee+-0x1c*-0x112+0x14a,_0x4830a0[_0x3b5618(0x37f)]],[-0xc*0x13+0x14c9+0x1c7*-0xb,'u8'],[-0x1*0xacd+-0x19a1+-0x1*-0x24e2,'u8'],[0x10d3*-0x2+0xd*-0x4d+0x127*0x21,_0x3b5618(0xd49)],[-0x8*-0xf7+-0x686+0xd*-0xe,_0x4830a0[_0x3b5618(0xc18)]],[-0x1e0e+-0x2659+0x217*0x21,_0x4830a0['xjPIu']],[-0x1*0x2447+-0x24aa+0x4985,'u8'],[-0xad0+0x9b8*0x1+0x1*0x1cc,_0x4830a0[_0x3b5618(0x37f)]],[-0x2*0xca9+0x1dfd*-0x1+0x380b,_0x4830a0[_0x3b5618(0x37f)]],[0x12cc+-0x164*0xd+0x1*0x8,_0x4830a0[_0x3b5618(0x37f)]],[0x17fb+0x1f98+0x5*-0xaef,_0x4830a0[_0x3b5618(0x6f3)]],[-0x1*-0xe41+-0x7*-0x4c1+-0x2e8c,_0x3b5618(0x61c)],[0xc8f+-0x5*-0x494+-0x2263,'obfI'],[0xe16+0x1*0x2547+0x10bb*-0x3,'u8'],[0x6a1*-0x3+-0xcd4+-0x21*-0x107,'i32'],[-0x1fc9+-0x2039+0x4166,'u8'],[-0x14b5+0xda*0xb+0xcc7,'f32'],[0x1*-0x54d+0xecf+-0x802,'u8'],[0x23fe+0x8b*0x9+-0x2759,'u8'],[0x18fb+0x22b3+-0x187*0x26,'u8'],[-0x302+0x2a3+0x207,'i32'],[0x39*0x3f+0x6ec+-0x1347,_0x4830a0[_0x3b5618(0xc18)]],[0x79*-0x45+0x95*0x29+0xa7*0x10,'u8'],[-0x2*-0x4eb+0x1c3+0x1*-0x9e8,'u8'],[0x7*0x2ef+0x1985+-0x2*0x162b,_0x3b5618(0x7f5)],[0xa89*0x3+0x6e4+-0x24c3,_0x4830a0[_0x3b5618(0x37f)]],[-0xdee+0x125b*0x1+-0x89*0x5,_0x3b5618(0xd49)],[0x149a+-0x1*-0x84e+-0x1b24,_0x4830a0['xjPIu']],[0x31*-0x9+0x531*0x7+-0x20d6,'f32'],[-0x2*0x81d+0x24f0+-0x6*0x327,'i32'],[0x24fc+0x1c4*-0xd+0x17*-0x88,_0x4830a0[_0x3b5618(0x37f)]]],'TDM_GameManager':[[0x206d+-0x3ae*-0x2+-0x27b1,'u8'],[-0x8a7*-0x1+0x242b+0x2*-0x1659,'u8'],[0x11b7+-0x256a+0x13d4,'u8'],[-0x4c*0x13+-0x1c8d+0x2255,_0x4830a0['VbJIe']],[0x101*0x25+0x21bc+-0x4689,'u8'],[0xf27+-0xbb1+0x18d*-0x2,_0x3b5618(0xd49)],[-0x71*-0x34+0x1d6f+-0x3403,_0x4830a0[_0x3b5618(0xc18)]],[0x2321+-0x1a9*0x9+-0x13cc,_0x4830a0[_0x3b5618(0x37f)]],[-0x194b+0x1*0x692+-0x3b*-0x53,_0x3b5618(0x7f5)],[0x20c9+0x12cb+-0x3328,'u8'],[-0x9*0x32f+0x1272+0xaa2,'u8'],[0x24d6+0x37+-0x7*0x53b,_0x4830a0[_0x3b5618(0xc18)]],[0x10e+-0x5b*-0x4a+-0x1ae8,_0x3b5618(0xd49)],[-0x79d*-0x4+-0x1*0x171a+-0x6e2*0x1,_0x3b5618(0x7f5)],[-0xd82+-0x8*0x3d1+-0x164b*-0x2,'u8'],[0x1b44+-0x1bc+-0x18f8,_0x4830a0['KZzdZ']],[-0x1*-0x5d5+-0x247b+-0x1f7e*-0x1,_0x4830a0['KZzdZ']],[0x7d*-0x26+0x1c80+-0x2*0x483,_0x3b5618(0x61c)],[0x1073+0xc45*0x2+-0x1d*0x161,_0x3b5618(0x61c)],[0x103d*-0x2+-0x20e4+0x87*0x7e,'u8'],[0x7fb*0x3+-0x1b1*-0x10+-0x31a5,'u8'],[-0x1cc3*0x1+-0x1d2b+0x2*0x1da7,_0x3b5618(0x7f5)],[-0x17*0x43+0x34c+0x425,'u8'],[0x179*0xd+-0x97b+0x2*-0x413,'u8'],[0x24b9+-0x1*-0x18c8+-0x3bf9*0x1,_0x3b5618(0xd49)],[-0x1*0x259f+-0x76a+0x1*0x2e95,_0x4830a0['xjPIu']],[0x1ef1+0x2*0xe6+-0x15b*0x17,_0x4830a0[_0x3b5618(0x37f)]],[-0x4a*-0xe+-0x1115+0xe9d,_0x4830a0['VbJIe']],[-0x202c+0xba7*0x1+0x161d,_0x4830a0[_0x3b5618(0x37f)]],[-0x1519+-0x2*0x27a+0x1ba9,_0x3b5618(0x7f5)],[-0x1*0x1af1+-0x19*-0xa+-0x1*-0x1b97,_0x3b5618(0xd49)],[-0x534+-0x19f1+0x20c9,_0x4830a0[_0x3b5618(0xc18)]],[0xf44+0xef1+-0x1c8d,_0x3b5618(0x7f5)],[-0x10ef+-0x1d35+0x2fd4,'u8'],[0x1964+0x737*0x2+-0xe3*0x2b,'u8'],[0x5a8+0x1c3d*0x1+-0x202d,_0x3b5618(0xd49)]],'PhotonNetworkSync':[[-0x176d+-0xfbf+0xd2*0x30,'v3'],[-0x147*0x1+-0x1153+0x12da*0x1,'i32'],[-0x1551+0x1*0xf34+0x661*0x1,'u8'],[0x1*0x23a5+0xb2*0x2+-0x2d4*0xd,'u8'],[-0x1e81+0x125b+0xc6e,'v3'],[-0x323*0x9+0x45f+-0x90*-0x2b,'u8'],[0x47*0x73+0x21b4+-0x4141,_0x4830a0[_0x3b5618(0x37f)]],[0x53*0x1+-0x3*0x3a3+0xaf2,_0x4830a0[_0x3b5618(0x37f)]],[-0x2647+0x1d1+0x24d6,_0x3b5618(0xd49)],[0x1ada+-0x26c0+0x16*0x8f,_0x3b5618(0xd49)],[-0x20ce+-0x957+0x1*0x2a8d,_0x4830a0['VbJIe']],[0x343+-0x1*-0x199+-0x470,'v3'],[0x43*-0x82+-0xcc7+0x1*0x2f45,_0x4830a0[_0x3b5618(0xc18)]],[-0x29*0x53+-0x1*-0x893+0x4a*0x12,_0x4830a0[_0x3b5618(0xc18)]],[0x103e+0x1f1f+0x535*-0x9,_0x3b5618(0x7f5)],[0x16ee+0x7*-0x269+-0x587,'f32']],'MouseLook':[[0x59*0x26+-0x1*-0xe41+0x1*-0x1b63,_0x3b5618(0xd49)],[0x142+0xb7*-0x13+0x1*0xc6b,_0x3b5618(0xd49)],[0xde8+-0x1712+-0x2*-0x4a3,_0x4830a0[_0x3b5618(0xc18)]],[0x700*-0x3+0x2a*0x76+0x1c4,_0x4830a0['VbJIe']],[-0x14e*0x13+0x872+0xa*0x1a6,_0x3b5618(0xd49)],[0x1d28+-0x1f65+0x1*0x265,_0x3b5618(0xd49)],[-0x220*0x8+0x222c+-0x10fc,'f32'],[0x1df8+0x8f*0x26+-0x32fe,'u8'],[0x531*-0x6+-0x7f7+0x2755*0x1,'f32'],[0x2540+-0x76c+-0xecc*0x2,_0x4830a0[_0x3b5618(0xc18)]],[-0x1216+-0x3*-0x6a+0x1118,'i32'],[-0x157a+0x8f3+0x5*0x28f,'u8'],[-0x1e40+0x58*0x60+-0x278,'v2']],'NetworkPlayerAnimations':[[0x5d4+-0x1171+0xc45,'v3'],[-0x2d+0x1*-0x1007+0x10e8,'v3'],[0x201e+0xd81*0x1+0x15*-0x223,'u8'],[-0x2*0x695+0x67a*-0x1+0x1468,'i32'],[0xe*0x178+-0x1301+0xc7*-0x1,_0x4830a0[_0x3b5618(0x37f)]],[-0x2258+-0x1567*0x1+0x388b,_0x4830a0['VbJIe']],[-0x11b1+-0x18a0+0x2b21,_0x4830a0['VbJIe']],[0x98*-0x2+-0x2*0x7d1+-0x49*-0x3e,_0x4830a0[_0x3b5618(0xc18)]],[-0x52*0x67+0xb*-0x2dd+0x415d,_0x3b5618(0xd49)],[0x579*0x4+-0x91*-0x39+0xd*-0x419,'f32'],[0x1d28+0x5ac+-0x21e8,'f32'],[0x1a53+-0x1042+-0x921,_0x4830a0['VbJIe']],[0x8d1+0x2273+-0x2a50,_0x3b5618(0xd49)],[0x65*0x7+0x9dc*-0x3+-0x1*-0x1bc9,_0x3b5618(0xd49)],[-0x11*-0x77+0x20d2+0x1*-0x27bd,'f32'],[0x120d*-0x1+0x20d0+-0x10f*0xd,_0x4830a0[_0x3b5618(0xc18)]],[-0x2*0x117a+-0xe89+0x3281,_0x4830a0[_0x3b5618(0xc18)]],[0x1*0xc3e+0x21f6+-0x1c*0x19d,_0x3b5618(0x7f5)],[-0xdde+-0x1*0xa93+-0x105*-0x19,'u8'],[0x162+0x2*0x3f1+-0x834,_0x4830a0[_0x3b5618(0x37f)]],[-0x2a6+0x1d4d*-0x1+0x2107,_0x4830a0[_0x3b5618(0x37f)]],[0x1e*-0x147+0xb2a+-0x2*-0xe20,'u8'],[-0x1f06+-0x1*-0x1393+-0xc8f*-0x1,_0x4830a0[_0x3b5618(0xc18)]],[0x4*0x8ba+0x1f*0xa1+-0x3547,_0x3b5618(0xd49)],[-0x35*0xb5+-0x2006+0x46a3,_0x4830a0[_0x3b5618(0xc18)]],[-0xc2a+-0x1*-0xe41+-0xef,'f32'],[0x3f0*0x2+0xb93+0x1*-0x1247,'u8'],[0x1*-0x1c1b+0xe72+0xee1,'u8'],[-0x1380+-0x3*-0x1cc+0x8*0x1eb,'v3'],[0x1f11+-0x1f22+0xf*0x17,'v3'],[0xff6+-0x1bde+0x2*0x6be,'u8']],'NPC_Cotroller':[[-0x1736*-0x1+-0x3*-0x911+-0x10c7*0x3,'v3'],[0x1*0x261d+0x658+-0x9*0x4ed,_0x3b5618(0xd49)],[0x1b*-0x6d+-0xd31+-0x1*-0x18d4,_0x4830a0['VbJIe']],[0xf2b+-0x4*0x4f+0xd99*-0x1,'u8'],[-0xc38+0x329+0x6*0x191,'u8'],[0x1*-0xc1+0x1*0x213c+-0x201f*0x1,'v3'],[-0x1db2+-0x2344+0x4192,'u8'],[-0xa*0x244+0x3*0x95a+-0x4c6,_0x3b5618(0xd49)],[-0x2*-0x3fa+0x1f3d+-0x268d,_0x4830a0['VbJIe']],[-0xcd*-0x21+-0xc77*0x2+-0xc7*0x1,_0x3b5618(0xd49)],[-0x1*-0x92f+0x1*-0x1fac+0x29*0x91,_0x3b5618(0xd49)],[0x4ee+-0x1e4+-0x242,'u8'],[-0x3*0x65a+0x158+0x1282,_0x4830a0['VbJIe']],[-0xcb*-0x2e+-0x26a+0x4*-0x84e,_0x3b5618(0xd49)],[-0x1*-0x154f+-0x2604+0x5db*0x3,'f32'],[0xc85+0x695*0x5+-0x2c8e,_0x3b5618(0xd49)],[-0x1579+-0x25*-0x84+-0x349*-0x1,'u8'],[-0xd*-0x26b+-0x2c0+-0x1bc3,_0x3b5618(0xd49)],[-0x4d*0x6b+-0x1*-0xe5c+0x12c3,'v3'],[-0x1ec1+0xff2+-0xfcb*-0x1,_0x4830a0[_0x3b5618(0xc18)]],[0x2697+0x25f*0x1+-0x27f6,'i32'],[0x61*-0x1d+0xb*0x2a1+-0x10ea,_0x4830a0[_0x3b5618(0xc18)]],[0x1fde+0x1729+-0x35ff*0x1,_0x4830a0[_0x3b5618(0xc18)]],[-0x1f64+0x1285+0x1fd*0x7,_0x3b5618(0xd49)],[0x143e+0x56*0x10+-0x188a,'v3'],[-0x948+-0x1ad6+0x253e,_0x3b5618(0xd49)],[-0x18c5*0x1+0x1*0x6db+0x130e,_0x4830a0[_0x3b5618(0xc18)]],[0x1cc1+-0x5*-0x727+-0x3f50,'v3'],[0x9*0x24f+-0x5e7*-0x1+-0x196a,'u8'],[-0x2376+0x1*0x19d1+0xaed,_0x3b5618(0xd49)],[0x2674+-0x1be9+-0x1*0x93b,'v3'],[-0x189f+-0x25d3+0x3fd2,_0x4830a0['xjPIu']],[-0x1e86+-0xda*0x14+-0x187d*-0x2,_0x4830a0[_0x3b5618(0x37f)]],[0x2*-0x9a8+0x24f7+-0x1037,'f32'],[0x24f*0x6+0x2533+-0x3199,'u8'],[-0x79a+-0x1*0x13f9+-0x1d0b*-0x1,'v4'],[0x161f+0x2442+0x4d*-0xbd,_0x3b5618(0xd49)],[-0x790*0x3+0x1*0x5cf+-0x126d*-0x1,_0x3b5618(0xd49)],[-0x95*0x2a+0xe*-0x8f+0x21d4*0x1,'f32'],[-0xb20+-0xb0d+0x17c5,'u8'],[0xcac*0x1+-0x47b*0x5+0xb5b,'i32']],'TargetHealth':[[-0x13*-0x91+0xa46+-0x14f9,_0x3b5618(0x7f5)],[-0x2*0x1139+-0x1*-0x17b3+0x11*0xa3,_0x4830a0[_0x3b5618(0x37f)]],[-0x8*-0x25+-0xe7*0x1+-0xd,'u8'],[-0x58f+0x22fb+-0xc*0x26e,_0x4830a0['xjPIu']],[0x17*-0xf1+-0x21a8+-0x7*-0x7f1,'i32'],[0x1874+0x1424+0x5a*-0x7e,'i32'],[-0x2*0xb1f+-0x1b90+0x503*0xa,'i32'],[0x2173+0x2f*-0x4f+-0x126e,'f32'],[0x16bf+-0xc0a*0x1+-0xa29,_0x3b5618(0xd49)],[0x16*0xe9+0x1566+-0x28dc,'u8'],[0x17*-0x1a3+-0x1f14+0x454d,_0x4830a0[_0x3b5618(0xc18)]],[0x1a*0x33+0xc2*-0xb+0x3cc,'u8'],[0x5b0+0x7*-0xca+0x7e,'i32'],[-0xd11+-0x189b*0x1+0x2*0x132c,'i32'],[-0x24a8+0x2b*0x8+0x2410,'f32'],[-0x68a+0x4*0x538+-0x1*0xd8a,'u8']],'SectatorCamera':[[0x1574+-0x1667+0x107,_0x3b5618(0xd49)],[-0x176f+-0x1d38+0x34bf,_0x4830a0['VbJIe']],[0xef9+0x1477+-0x2354*0x1,_0x4830a0[_0x3b5618(0xc18)]],[0x1*-0x149d+0xcd*-0x1d+0x2bf6,'v3'],[-0x155d+-0x1*-0x49d+-0x5a4*-0x3,'v3'],[-0x1bf3+-0x262+0x1e9d,_0x3b5618(0x7f5)],[-0x5*-0x44d+0x19bb*0x1+-0x2ef0,_0x3b5618(0x7f5)],[-0x1d6d+0x10*-0x67+0x242d,_0x3b5618(0xd49)],[0x25e+0x1249+0x1*-0x1453,_0x4830a0[_0x3b5618(0x37f)]],[-0x7b*-0x47+-0x17*0xa3+-0x1320,'f32'],[-0xaa6*0x2+0x143*0x15+0xb1*-0x7,'u8'],[-0x1d6b+-0x33a*-0x7+0x735,'v3'],[-0x3eb+0x67*-0x47+0x20e8,'v4'],[-0x4d5+-0x35f*-0x7+-0x1248,'u8'],[-0x19ac+0x2*0xf9+-0x1bb*-0xe,_0x4830a0[_0x3b5618(0x37f)]]],'UISettings':[[-0x1da2+0xfe+0x1cc4,_0x3b5618(0x7f5)],[-0x2611+-0x1148+-0x1*-0x3781,_0x3b5618(0xd49)],[-0x200d+0x7*-0x413+-0x62f*-0xa,'u8'],[-0x1*0x1fe7+0x1*-0x1459+0x8*0x6b1,_0x4830a0['xjPIu']],[-0x3*0x965+0xb27+0x125c,_0x3b5618(0x7f5)],[-0x575*-0x7+-0x25*0xc7+-0x818,_0x4830a0[_0x3b5618(0x37f)]],[0x7a0*-0x1+-0x1982+-0x373*-0xa,'u8'],[-0xd48*0x1+0x1be3+-0x5*0x2a6,'u8'],[0x239d+0x1475*-0x1+-0x161*0xa,'u8'],[0x2070+0xbb*0xf+-0x2a06,'u8'],[0x17ac+0x85*0xd+-0x43*0x6f,'u8'],[-0x15c3+-0x1fc8+-0x14*-0x2bf,'u8'],[-0x638+0x25*0xc3+-0x1495*0x1,'u8'],[-0x866+-0x67*-0x47+-0x126f,_0x4830a0['VbJIe']],[0x1d*0x7d+0x1725+-0x238a,_0x3b5618(0xd49)],[-0x2466+0x2*0x137f+-0x80,'u8'],[0x2248+0xd21*-0x1+-0x12a7,_0x3b5618(0xd49)],[0xf7*-0x25+-0x3bd+0x2a10,_0x4830a0[_0x3b5618(0x37f)]],[0x1a44+-0xec*0x22+-0x19c*-0x5,'u8'],[-0x82a+-0x1f9e+0x2b64,'u8'],[-0x237e+0x15fc+-0x102*-0x11,'v2'],[-0x1118+-0x3f5*0x5+0x2889,'v2'],[0x1*-0x3cd+0x16c3+-0xf46,'u8'],[0x1705+-0xf11+-0x21e*0x2,'u8'],[0x37b+-0x1*-0x3a4+0x353*-0x1,_0x4830a0[_0x3b5618(0xc18)]],[0x247f+-0x109a+0xb3*-0x17,'v3'],[-0x2*-0x6b0+0x1a96+-0x2*0x120b,_0x4830a0[_0x3b5618(0xc18)]],[-0x17db+-0x163b+0x31fa,'f32'],[-0x44*-0x3b+-0x1*-0x305+-0xec9*0x1,_0x4830a0[_0x3b5618(0xc18)]],[-0xb*0x1e9+-0x8*-0x26a+0x5a3,'u8'],[0x1f81+-0x6*0x46+-0x19ec,'u8'],[-0x1*0x19b+-0x247d+-0x12*-0x256,_0x3b5618(0x7f5)],[0xa2a*-0x3+-0x1b5c+0x3dda,_0x4830a0[_0x3b5618(0x37f)]],[0x16e6+-0x1d*0xb3+0x165,'i32'],[0x76*-0x37+-0xed+0x1e4f,'i32'],[-0x2266+-0x15a8+0x3c1a,_0x4830a0[_0x3b5618(0x37f)]],[-0x99b*0x1+0x4f2*0x2+0x3c7,_0x3b5618(0x7f5)],[-0x1909+-0x1c1d+0x393a,'i32'],[-0x2*-0x283+-0x17b8+0x16ca,'i32'],[-0x8ac+0x1*-0x124f+0x1f17,_0x3b5618(0x7f5)],[0x2264+0x25d0+-0x1*0x4414,'i32'],[-0xf*-0x21e+0x14*0x1df+-0x40da,'u8'],[0x2*0x46f+-0x17a7+0x131e,'u8'],[-0x1b8d+-0xa9e+0x2a81,'u8'],[-0x4ed+-0x8a*-0x24+-0xa24,'u8'],[0x13c2+-0x3*-0xa1d+-0x2d8d,'f32']]},_0x4d894f={},_0x42506f={};function _0xdfdcce(_0x110f52,_0x59ef1e,_0x4e191c){var _0x410f92=_0x3b5618,_0x14c6ff={'lsveK':function(_0x2365b8,_0x1fc678){return _0x4830a0['lAxpc'](_0x2365b8,_0x1fc678);},'MoLPd':function(_0xcd622d,_0x5433e5){return _0x4830a0['RZlNB'](_0xcd622d,_0x5433e5);}};if(_0x410f92(0x5d2)===_0x410f92(0xaed))_0x36aa4e[_0x410f92(0x7fa)+_0x410f92(0x88b)][_0x410f92(0xbb7)](_0x14c6ff[_0x410f92(0x887)](_0x410f92(0x8dc)+_0x410f92(0x6ed)+_0x3038aa['keys'](_0x58d1b0['insta'+_0x410f92(0x989)])[_0x410f92(0x853)+'h'],_0x410f92(0x930)+_0x410f92(0x8c0)+_0x410f92(0xd7e)+'read\x20'+_0x410f92(0x211)+_0x410f92(0xb0d))+(_0x134cd3['lastE'+_0x410f92(0x6a4)]?_0x14c6ff[_0x410f92(0x957)](_0x410f92(0x3f6)+'n:\x20',_0x2ba4c1[_0x410f92(0xc95)+_0x410f92(0x6a4)]):_0x410f92(0xc4e)+'ad\x20fa'+_0x410f92(0x5c6)+_0x410f92(0x334)+_0x410f92(0x82e)+_0x410f92(0x739)+_0x410f92(0x1e8)+_0x410f92(0x5ae)+_0x410f92(0x270)+'y\x20typ'+'e.'));else return function(_0x3bf983){var _0x5ea557=_0x410f92,_0x2535ee={'BgHQU':function(_0x4167e0,_0x15f408){return _0x4167e0===_0x15f408;},'xrmEU':function(_0x2c2f94,_0x9bf1cf){var _0x16ed1a=_0x1d88;return _0x4830a0[_0x16ed1a(0x305)](_0x2c2f94,_0x9bf1cf);},'cjECm':function(_0xe95679,_0x3a3db4){return _0xe95679(_0x3a3db4);}};try{var _0x2575d3=_0x3bf983&&_0x3bf983[_0x5ea557(0x318)]?_0x3bf983[_0x5ea557(0x318)]():0x1b25+-0x1*0x1c45+0x120;if(!_0x2575d3)return;var _0x3bbd49=_0x42506f[_0x110f52]||(_0x42506f[_0x110f52]={}),_0x73549f=_0x3bbd49[_0x2575d3];if(!_0x73549f)_0x73549f=_0x3bbd49[_0x2575d3]={'ptr':_0x2575d3,'firstSeen':Date['now'](),'hits':0x0};_0x73549f[_0x5ea557(0x8f7)]++;if(_0x4e191c){if(!_0x4d894f[_0x2575d3])_0x4d894f[_0x2575d3]={'ptr':_0x2575d3,'kind':_0x110f52,'firstSeen':Date['now'](),'hits':0x0};_0x4d894f[_0x2575d3]['hits']++;}else{if(_0x4830a0[_0x5ea557(0xd56)]===_0x4830a0['KNPLn']){var _0x5e53d6=_0x199537[_0x110f52];if(!_0x5e53d6||_0x4830a0[_0x5ea557(0x91c)](_0x5e53d6[_0x5ea557(0xc63)],_0x2575d3)){_0x199537[_0x110f52]={'ptr':_0x2575d3,'firstSeen':Date[_0x5ea557(0xb6c)](),'hits':0x0,'replaced':!!_0x5e53d6};try{var _0x252b65=_0x12f58[_0x5ea557(0x6a7)+'r'](function(_0x5d9b40){var _0x36ccf5=_0x5ea557;return _0x2535ee[_0x36ccf5(0x740)](_0x5d9b40[_0x36ccf5(0x73a)],_0x110f52);})[0x10a6+-0x4*0x1af+-0x6*0x1a7];_0x52b212={'type':_0x110f52,'atMs':Date[_0x5ea557(0xb6c)]()-_0x3ebd36,'originalFunc':!!(_0x252b65&&_0x252b65[_0x5ea557(0x617)]&&typeof _0x252b65['hook'][_0x5ea557(0x8bd)+'nalFu'+'nc']===_0x5ea557(0x711)+_0x5ea557(0x9fd)),'resolveGameAtFire':!!_0xc0bf3e(),'gameSourceAtFire':_0x3d795f[_0x5ea557(0xc74)+'e']};}catch(_0x66476d){}}}else _0x10569f['st']['lastW'+_0x5ea557(0x5bf)+'n']=_0x1f5c1d[_0x5ea557(0x3ec)+'d'](_0x7f7b1e),_0x56c183++,_0x2bfca7[_0x5ea557(0xbb7)]('0x'+_0x1a10c1['o']['toStr'+'ing'](-0x3*-0xc8a+-0x1ffd+-0x5*0x11d));}if(_0x110f52===_0x4830a0[_0x5ea557(0x510)]&&_0x328f9c['on'])try{if(_0x4830a0['JmGCw']===_0x5ea557(0x366)){if(_0x3c5f01&&_0x2535ee[_0x5ea557(0x5d4)](typeof _0xbe6852['then'],_0x5ea557(0x711)+'ion'))_0x4222d0[_0x5ea557(0xb5d)](_0x35c962,function(){});else _0x2535ee['cjECm'](_0x58491c,_0x2c1c27);}else _0x4830a0[_0x5ea557(0x28d)](_0x472a63,_0x2575d3);}catch(_0x2c29a6){}if(!_0x59ef1e){if(_0x5ea557(0x822)!==_0x4830a0['WyBCv'])_0x27f989=_0x14a740();else{var _0x252b65=_0x12f58['filte'+'r'](function(_0x3cdacd){return _0x3cdacd['type']===_0x110f52;})[0xbee+-0x1*-0x1937+0x1*-0x2525];if(_0x252b65&&_0x252b65[_0x5ea557(0x617)])try{_0x252b65['hook'][_0x5ea557(0x6e5)+'ed']=![];}catch(_0x4ac9c7){}}}}catch(_0x541b89){}};}function _0x3d8564(){var _0x34086c=_0x3b5618,_0xed09dc={'edSuX':function(_0xb6d603,_0x3944cd){return _0xb6d603+_0x3944cd;}};if(_0x12f58['lengt'+'h'])return!![];if(!window[_0x34086c(0x36f)+'WebMo'+_0x34086c(0xd45)]||!window[_0x34086c(0x36f)+_0x34086c(0xa86)+'dkit']['Runti'+'me'])return![];var _0x43b5b4=window[_0x34086c(0x36f)+_0x34086c(0xa86)+'dkit']['Runti'+'me'];if(!_0x43b5b4['plugi'+'ns']||!_0x43b5b4[_0x34086c(0xa4a)+'ns'][_0x34086c(0x853)+'h'])return![];_0x5c6c66=window[_0x34086c(0x36f)+'WebMo'+_0x34086c(0xd45)][_0x34086c(0x304)+_0x34086c(0x58d)+'er'],_0x2535a1=_0x2535a1||_0x43b5b4['plugi'+'ns'][_0x4830a0[_0x34086c(0xceb)](_0x43b5b4['plugi'+'ns'][_0x34086c(0x853)+'h'],0x1*0x4bb+0xff9+-0x2f5*0x7)];if(!_0x2535a1||_0x4830a0[_0x34086c(0x5c1)](typeof _0x2535a1['hookP'+'refix'],_0x4830a0[_0x34086c(0x579)]))return![];for(var _0x428949=-0x1*-0x8be+0xf84+0x40b*-0x6;_0x4830a0[_0x34086c(0x896)](_0x428949,_0x157f2c['lengt'+'h']);_0x428949++){if(_0x34086c(0x9ca)===_0x4830a0[_0x34086c(0x2e8)])return _0x8bdbf9[_0x34086c(0xc74)+'e']=_0xed09dc['edSuX'](_0x34086c(0x47a)+'w.'+_0x3ce1e4[_0x495d2f],'.Modu'+'le'),_0x32f4fe;else{var _0xf243a5=_0x157f2c[_0x428949];try{var _0x2e2cfa=_0x2535a1[_0x34086c(0xa46)+_0x34086c(0x2a5)]({'typeName':_0xf243a5[_0x34086c(0x73a)],'methodName':_0x4830a0['ZccaN'],'params':[_0x4830a0[_0x34086c(0x37f)],_0x4830a0['xjPIu']],'returnType':undefined},_0xdfdcce(_0xf243a5['type'],_0xf243a5[_0x34086c(0xa72)],_0xf243a5[_0x34086c(0x40a)]));_0x12f58[_0x34086c(0xbb7)]({'type':_0xf243a5['type'],'hook':_0x2e2cfa,'keep':_0xf243a5[_0x34086c(0xa72)]});}catch(_0x4db984){if(_0x34086c(0x67c)===_0x4830a0[_0x34086c(0xd16)]){if(_0x507078)return _0x3a9ca7;try{if(!_0x2ac2d7[_0x34086c(0x84b)]||!_0x891c4e['body'][_0x34086c(0x69b)+_0x34086c(0x79e)+'d'])return null;var _0x53187c=_0x96f901['creat'+_0x34086c(0xcdd)+'ent'](_0x34086c(0xc6f));_0x53187c['id']=_0x4830a0[_0x34086c(0x9e1)],_0x53187c['style']['cssTe'+'xt']='posit'+_0x34086c(0x491)+_0x34086c(0x3fe)+'right'+_0x34086c(0x68b)+_0x34086c(0xb77)+'46px;'+'z-ind'+'ex:21'+_0x34086c(0xd76)+'646;p'+_0x34086c(0xcb6)+'r-eve'+_0x34086c(0x671)+'one;'+('backg'+'round'+':rgba'+_0x34086c(0x522)+_0x34086c(0x754)+_0x34086c(0x347)+'borde'+_0x34086c(0x53a)+_0x34086c(0x66a)+_0x34086c(0x701)+'a(255'+',143,'+'177,.'+'4);bo'+'rder-'+_0x34086c(0xd3b)+'s:10p'+'x;')+(_0x34086c(0x98a)+_0x34086c(0x231)+_0x34086c(0x6d3)+'t:10p'+_0x34086c(0x948)+_0x34086c(0xae8)+'onosp'+_0x34086c(0xa0c)+_0x34086c(0x344)+'as,mo'+_0x34086c(0x49b)+_0x34086c(0xc0f)+_0x34086c(0x598)+_0x34086c(0x7bc)+'9;')+(_0x34086c(0x919)+_0x34086c(0xb57)+'t:non'+'e;-we'+_0x34086c(0x568)+_0x34086c(0x919)+_0x34086c(0xb57)+_0x34086c(0x56f)+'e;'),_0x53187c[_0x34086c(0x34b)+'HTML']=_0x4830a0['hlsmk'](_0x4830a0[_0x34086c(0x824)],_0x4830a0['aFREx']);var _0x41dc2b={'cv':{'getContext':function(){return null;}},'el':_0x53187c};_0x1b678f[_0x34086c(0x84b)][_0x34086c(0x69b)+'dChil'+'d'](_0x53187c),_0x3db304={'el':_0x53187c,'cv':_0x53187c['query'+'Selec'+_0x34086c(0x390)](_0x4830a0['TwVAX']),'lg':_0x53187c[_0x34086c(0xcc7)+_0x34086c(0xdb3)+_0x34086c(0x390)]('#saku'+_0x34086c(0x91a)+'p-lg')};if(!_0x6f1d04['cv']||!_0x28562a['cv']['getCo'+'ntext'])_0x160d3b=_0x41dc2b;return _0x41e98a;}catch(_0x34d4cd){return null;}}else _0x4ae9a9[_0x34086c(0xbb7)](_0xf243a5['type']+':\x20'+String(_0x4db984&&_0x4db984['messa'+'ge']||_0x4db984)[_0x34086c(0x1d7)](-0x25fc+0x691*-0x2+0x331e,-0x2b8*-0xd+0x118b+-0x3443));}}}return _0x12f58['lengt'+'h']>-0xb*0x109+0xe26*-0x1+0x1989;}function _0x555240(_0x276058,_0x3cfa24){var _0x3b495d=_0x3b5618,_0x2e7438={'EZFOf':_0x3b495d(0x711)+_0x3b495d(0x9fd),'ZNmNl':function(_0x582f95,_0x2ff1e1){return _0x4830a0['exiXm'](_0x582f95,_0x2ff1e1);},'WiLIj':_0x3b495d(0x95d),'Jcbpm':'xybyG'};return function(){var _0xeebae7=_0x3b495d;try{var _0x2181d4=_0x5a137b[_0x3cfa24]||(_0x5a137b[_0x3cfa24]={'last':null,'hits':0x0,'setLast':null,'setHits':0x0}),_0x1c9283=arguments;if(_0x276058===_0xeebae7(0xa34)){var _0x590b69=_0x1c9283[0x13e1+0x81a+0x227*-0xd];if(_0x590b69&&typeof _0x590b69['val']===_0x2e7438['EZFOf']){_0x2181d4['last']=_0x590b69['val'](),_0x2181d4['hits']++;if(_0x1c9283[-0x1*-0x1d41+-0x20da+0x39a]&&typeof _0x1c9283[-0x25cd+0x2e6+-0x45d*-0x8]['val']===_0x2e7438[_0xeebae7(0x932)]){var _0xae31e9=_0x1c9283[-0x4*0x3d7+-0x7cd+-0x2*-0xb95][_0xeebae7(0x318)]();if(_0xae31e9)_0x35c7f2=_0xae31e9;}}}else{if(_0x2e7438[_0xeebae7(0x59d)](_0x2e7438[_0xeebae7(0x42e)],_0xeebae7(0x218))){var _0x19a991=_0x22d5c8();if(!_0x19a991)return null;return{'ptr':'0x'+_0x19a991[_0xeebae7(0xc63)]['toStr'+'ing'](-0x9*0x445+-0x3c4*0x3+0x31c9),'feet':_0x19a991[_0xeebae7(0x251)],'eye':_0x19a991['eye'],'posAt':_0x19a991['posAt'],'copies':_0x19a991['copie'+'s'],'cluster':_0x19a991['clust'+'er'],'eyeHeight':_0x4d7210,'pitch':_0x19a991[_0xeebae7(0x913)],'yaw':_0x19a991['yaw'],'reach':_0x19a991[_0xeebae7(0xc92)]};}else{if(_0x1c9283[0x6a*0x37+-0xff*-0x22+-0x38a3]&&typeof _0x1c9283[-0x96+-0xa2d*-0x2+0x1*-0x13c3]['val']==='funct'+'ion'){if(_0x2e7438[_0xeebae7(0x3da)]==='xybyG')_0x2181d4['setLa'+'st']=_0x1c9283[0x13+0x1de8+-0x4ff*0x6][_0xeebae7(0x318)](),_0x2181d4[_0xeebae7(0xc9d)+'ts']++;else return![];}if(_0x1c9283[0x55*-0x73+-0x5a1+0x2bd0]&&typeof _0x1c9283[0x49*0x74+0x72a*-0x1+-0xcf5*0x2]['val']===_0xeebae7(0x711)+_0xeebae7(0x9fd)){var _0x74b872=_0x1c9283[-0x6b*-0x35+0x3f8*-0x5+-0x1*0x24f]['val']();if(_0x74b872)_0x35c7f2=_0x74b872;}}}}catch(_0x411869){}};}function _0x4e7ded(){var _0x4462bb=_0x3b5618,_0x1505af={'NsdQb':function(_0xbf6b9e,_0x676186){return _0x4830a0['chyPV'](_0xbf6b9e,_0x676186);},'KmerA':function(_0x5bd89f,_0x546c5e){return _0x5bd89f-_0x546c5e;},'Sftss':function(_0x5afd85,_0x28442d){return _0x5afd85-_0x28442d;},'VGcjp':function(_0x521bf4,_0x2dbc6a){return _0x4830a0['MqRbk'](_0x521bf4,_0x2dbc6a);},'gVmUp':function(_0x2f3977,_0x1cd9ad){return _0x2f3977-_0x1cd9ad;},'KvURS':function(_0x3c700c,_0x5235a4){return _0x3c700c+_0x5235a4;},'WvyfW':_0x4462bb(0x379)};if(_0x4462bb(0x99f)===_0x4830a0[_0x4462bb(0xcde)]){if(!_0x576edc)return;var _0x50441d=_0x1ea4c1['offse'+_0x4462bb(0xaff)+'h']||-0x5*0x35d+0x127d*0x2+-0x11bd,_0x49cd9e=_0x259cec['offse'+_0x4462bb(0xa54)+'ht']||-0xd3*0xa+-0x1ca9+0x2b*0xe5,_0x5439d8=(_0x3c7e97['clien'+'tX']||-0x833*0x3+0x1*-0x17ee+-0x102d*-0x3)-_0xce4ff0,_0x428515=_0x1505af['NsdQb'](_0x34be70[_0x4462bb(0xace)+'tY']||-0x30b*0x1+-0x2541+-0x2*-0x1426,_0x595a77);_0x5439d8=_0x4defa2[_0x4462bb(0x8ae)](-0x2473+-0x21c2+0x463d,_0x5db0eb['min'](_0x1505af['KmerA'](_0x1505af['Sftss'](_0x271e88[_0x4462bb(0x34b)+_0x4462bb(0x8e6)]||-0x1164+-0x4f5+0x3*0x773,_0x50441d),-0x1af*-0x8+0x5*0x581+-0x28f5),_0x5439d8)),_0x428515=_0x5f5035[_0x4462bb(0x8ae)](0x257*0xd+-0xb1c+-0x5*0x3db,_0x47a694[_0x4462bb(0xc28)](_0x1505af[_0x4462bb(0xb3c)](_0x1505af['gVmUp'](_0x18960c['inner'+_0x4462bb(0x6b9)+'t']||0x2695+0x2167+-0x47fc,_0x49cd9e),-0x4dd*0x1+0x24d5+0x124*-0x1c),_0x428515)),_0x3d6f5a['style'][_0x4462bb(0x5d0)]=_0x1505af['KvURS'](_0x5439d8,'px'),_0x4878fc['style']['top']=_0x1505af[_0x4462bb(0x5ea)](_0x428515,'px'),_0x1163bd['style']['right']=_0x1505af['WvyfW'],_0x212455['style']['botto'+'m']=_0x4462bb(0x379),_0x22ab92[_0x4462bb(0x550)]={'x':_0x5439d8,'y':_0x428515};}else{if(_0x33059d)return!![];if(!_0x2535a1||typeof _0x2535a1[_0x4462bb(0xa46)+'ostfi'+'x']!==_0x4462bb(0x711)+_0x4462bb(0x9fd))return![];var _0x3c547a=_0x33d3f8['Mouse'+_0x4462bb(0x55a)]||[];for(var _0x195be0=-0x3*0x5b4+-0x2352+-0x3*-0x117a;_0x195be0<_0x3c547a[_0x4462bb(0x853)+'h'];_0x195be0++){var _0xb65da0=_0x3c547a[_0x195be0];try{if(_0x4830a0[_0x4462bb(0x361)](_0xb65da0[_0x4462bb(0xdc3)],'float'))_0x2535a1['hookP'+'ostfi'+'x']({'typeName':_0x4830a0['qEtYo'],'methodName':_0xb65da0[_0x4462bb(0x450)],'params':_0xb65da0['wasmP'+'arams'],'returnType':_0xb65da0[_0x4462bb(0x74e)+'et']},_0x555240(_0x4830a0[_0x4462bb(0x33c)],_0xb65da0[_0x4462bb(0x450)]));else _0x4830a0['VrUHo'](_0xb65da0[_0x4462bb(0xdc3)],_0x4462bb(0x39b))&&_0xb65da0[_0x4462bb(0xd05)+'s']['lengt'+'h']===-0x937*-0x2+-0x1159+-0x114&&_0x4830a0[_0x4462bb(0xa28)](_0xb65da0[_0x4462bb(0xd05)+'s'][0x201a+-0xd32+0x25d*-0x8],_0x4462bb(0x927))&&_0x2535a1['hookP'+_0x4462bb(0x2a5)]({'typeName':_0x4462bb(0xd31)+'Look','methodName':_0xb65da0[_0x4462bb(0x450)],'params':_0xb65da0['wasmP'+'arams'],'returnType':undefined},_0x4830a0[_0x4462bb(0xa7f)](_0x555240,_0x4830a0['TEOen'],_0xb65da0['name']));}catch(_0x5e4445){_0x185635[_0x4462bb(0xbb7)](String(_0x5e4445&&_0x5e4445['messa'+'ge']||_0x5e4445)[_0x4462bb(0x1d7)](0x2286+0x2579+0x7*-0xa49,0xb*0x36d+-0x6*-0x3c4+0xfb*-0x3d));}}return _0x33059d=!![],!![];}}function _0x184bde(){var _0x1d4f61=_0x3b5618;if('kEVak'===_0x4830a0[_0x1d4f61(0x807)]){if(_0x821403[_0xd3dffe][_0x1d4f61(0x617)]&&_0xaa7728[_0x1b9175][_0x1d4f61(0x617)]['table'+'Index']!==_0x3db0c3)_0x1e3eb7++;}else{var _0x257cbc=0x1e2c*-0x1+0x2277*-0x1+0x40a3*0x1;for(var _0x2d85a5=-0x836+0x2*0xf95+-0x16f4;_0x2d85a5<_0x12f58['lengt'+'h'];_0x2d85a5++){if(_0x12f58[_0x2d85a5]['hook']&&_0x12f58[_0x2d85a5]['hook'][_0x1d4f61(0xc36)+'Index']!==undefined)_0x257cbc++;}return _0x257cbc;}}function _0x2aa6ac(){var _0x4a3791=_0x3b5618,_0x58ea2e={'nAccW':function(_0x8e69e5,_0x3c2598){return _0x8e69e5!==_0x3c2598;}};if(_0x4a3791(0x4e1)===_0x4a3791(0x3d2)){if(_0x5d2815[_0x4a3791(0x406)+'t']&&_0x58ea2e[_0x4a3791(0x3a2)](_0x3d33dd[_0x4a3791(0x406)+'t'],_0x2e0d5b))_0x4a2b86['paren'+'t'][_0x4a3791(0x223)+_0x4a3791(0xbbd)+'e'](_0x5d8461,'*');if(_0x26462b['top']&&_0x364d5a[_0x4a3791(0x5d1)]!==_0x3d437d)_0xa64491['top'][_0x4a3791(0x223)+_0x4a3791(0xbbd)+'e'](_0x31a830,'*');}else{var _0x2789dd=-0x65d+0x5e1+-0x2*-0x3e;for(var _0x5a187a=0x1225+0x248d+-0x36b2;_0x4830a0[_0x4a3791(0x771)](_0x5a187a,_0x12f58[_0x4a3791(0x853)+'h']);_0x5a187a++){if(_0x12f58[_0x5a187a][_0x4a3791(0x617)]&&_0x12f58[_0x5a187a]['hook'][_0x4a3791(0x7e0)+'ed'])_0x2789dd++;}return _0x2789dd;}}var _0x18690d=null,_0x412040=[],_0x19ec28={},_0x52b212=null;function _0x45dc2d(_0x5046f7){var _0x32934d=_0x3b5618;try{if(!_0x5c6c66||!_0x5046f7)return null;var _0x38df0a=new _0x5c6c66(_0x5046f7)[_0x32934d(0x1e4)+'assNa'+'me']();return _0x38df0a===undefined?null:_0x38df0a;}catch(_0x5b3bd2){return null;}}function _0x32a80c(_0x27b9bf,_0x4f4558,_0x2d4532){var _0x4db4f1=_0x3b5618;if(_0x4db4f1(0x9e3)!==_0x4830a0[_0x4db4f1(0x414)]){var _0x3960c5=_0x3ea2b7();if(!_0x3960c5)return null;if(_0x4f4558<0x202e+-0x26*0x1a+0x91*-0x32||_0x4830a0['QbLAV'](_0x4f4558,_0x4830a0[_0x4db4f1(0x718)](_0x2d4532,0x35*0x71+0x1a20+-0x3181))>_0x3960c5[_0x4db4f1(0xd84)+'ength'])return null;var _0x123216=[];for(var _0x213d49=-0x251d+0x1733*0x1+-0x6f5*-0x2;_0x213d49<_0x2d4532;_0x213d49++)_0x123216[_0x4db4f1(0xbb7)](_0x3960c5['getFl'+'oat32'](_0x4830a0['mOGYp'](_0x27b9bf,_0x4f4558)+_0x213d49*(0x2043*0x1+0x191f+-0x395e),!![]));return _0x3d795f['ok']+=_0x2d4532,_0x123216;}else try{_0x2431a1['close']();}catch(_0x5d3d5c){}}var _0x3fde57={'PhotonNetworkSync':[[_0x3b5618(0xc21),_0x4830a0['BeBQs']],[_0x3b5618(0xbd6),_0x4830a0['Vanvq']],['0x24','trans'+_0x3b5618(0x44d)],[_0x4830a0[_0x3b5618(0xc46)],_0x4830a0[_0x3b5618(0x24a)]],['0x30',_0x3b5618(0x2a8)+'Look']],'NetworkPlayerAnimations':[['0x10',_0x3b5618(0x9a9)+'le'],[_0x4830a0['meNAk'],_0x4830a0['fVFKd']]],'NPC_Cotroller':[[_0x4830a0['drWJM'],_0x3b5618(0x9a9)+'le'],[_0x3b5618(0xc1a),_0x3b5618(0x5a3)+'tHeal'+'th'],[_0x4830a0['jjfDm'],'healt'+'h'],[_0x3b5618(0x66c),_0x4830a0[_0x3b5618(0xd90)]],[_0x3b5618(0x98c),_0x4830a0[_0x3b5618(0x9db)]]],'EnemyBot':[[_0x3b5618(0x7c5),_0x4830a0[_0x3b5618(0x9db)]]]},_0x9f8b90={'PhotonNetworkSync':[[_0x3b5618(0x47c),_0x4830a0[_0x3b5618(0xbaf)]],[_0x3b5618(0xa1a),'local'+'Flag'],[_0x4830a0[_0x3b5618(0x699)],'id']]};function _0x2c7584(_0x58988f,_0x34f86a){var _0x51eb72=_0x3b5618,_0x31b1d6={'baybP':function(_0x9699d5,_0x179109){return _0x9699d5!==_0x179109;}},_0x30cfee=_0xf4ed7[_0x58988f]||[],_0xeb67d9={'kind':_0x58988f,'ptr':'0x'+_0x34f86a[_0x51eb72(0x8a8)+'ing'](0x43*-0x4d+0x1650+-0x219),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x362dc3=0x1*-0x10e3+-0xbf1*-0x1+-0x2*-0x279;_0x362dc3<_0x30cfee['lengt'+'h'];_0x362dc3++){if(_0x4830a0['LsPih'](_0x30cfee[_0x362dc3][0x52+-0x4f*0x7+0x2*0xec],'v3'))continue;var _0x354b5e=_0x32a80c(_0x34f86a,_0x30cfee[_0x362dc3][0x1ee2*-0x1+0x1bae+0x334],-0x1d44+-0x1a4d+-0x1bca*-0x2);if(!_0x354b5e)continue;_0xeb67d9[_0x51eb72(0xa43)+'cs']['push']({'o':'0x'+_0x30cfee[_0x362dc3][-0x1460+0x9*0x2d9+-0x541][_0x51eb72(0x8a8)+'ing'](-0x70d+0xcf0+0x1*-0x5d3),'v':_0x354b5e});}var _0x5aaee4=-0x1342+-0x2298+0x35da,_0x5d5fd5=_0x4830a0[_0x51eb72(0x59a)](_0xbbdea3,_0xeb67d9['allVe'+'cs'],_0x4830a0[_0x51eb72(0x4c2)](_0x28cdcf));_0xeb67d9[_0x51eb72(0x550)]=_0x5d5fd5[_0x51eb72(0x550)],_0xeb67d9['posAt']=_0x5d5fd5['posAt'],_0xeb67d9['inBan'+'d']=_0x5d5fd5['inBan'+'d'],_0xeb67d9[_0x51eb72(0x411)+'er']=_0x5d5fd5[_0x51eb72(0x411)+'er'],_0xeb67d9[_0x51eb72(0xc92)]=_0x5d5fd5['reach'],void _0x5aaee4;var _0x318bf6=_0x3fde57[_0x58988f],_0x3da428=_0x9f8b90[_0x58988f];if(_0x3da428){_0xeb67d9['tag']={};for(var _0x298db5=0xc81+-0x95*-0x15+-0x18ba;_0x4830a0[_0x51eb72(0x771)](_0x298db5,_0x3da428['lengt'+'h']);_0x298db5++){if('efwXJ'===_0x51eb72(0xd1d)){var _0x27e5e7=_0x5567c5[_0x51eb72(0x839)+_0x51eb72(0xcdd)+_0x51eb72(0xbdc)](_0x4f8bb0);if(_0x75ccbb)_0x27e5e7['class'+'Name']=_0x5e9d2e;if(_0x52002c!=null)_0x27e5e7[_0x51eb72(0x34b)+'HTML']=_0x5ed7e7;return _0x27e5e7;}else{var _0x12cda3=_0x118468(_0x34f86a+parseInt(_0x3da428[_0x298db5][0xfa6*0x1+0x2dc+0x1282*-0x1],0xe4d*0x2+0xb*-0x10f+-0x10e5),_0x51eb72(0x7f5));if(_0x4830a0[_0x51eb72(0x7f4)](_0x12cda3,undefined))_0xeb67d9[_0x51eb72(0x92f)][_0x3da428[_0x298db5][0xb4d+-0x120*0x4+-0x2*0x366]]=_0x12cda3;}}}if(_0x318bf6){if(_0x4830a0[_0x51eb72(0x7f4)](_0x51eb72(0x783),_0x51eb72(0x798)))for(var _0x3f1cda=-0xe8a+-0x6d1+0x1*0x155b;_0x3f1cda<_0x318bf6[_0x51eb72(0x853)+'h'];_0x3f1cda++){var _0x2f77e0=_0x118468(_0x34f86a+_0x4830a0[_0x51eb72(0x74d)](parseInt,_0x318bf6[_0x3f1cda][-0x214*0xc+0x1*0x2285+-0x995],0x6dd+-0x2147+0xd3d*0x2),_0x51eb72(0x835));if(_0x2f77e0)_0xeb67d9[_0x51eb72(0x72f)][_0x318bf6[_0x3f1cda][-0x7bf+-0x1*0x1710+-0x88*-0x3a]]='0x'+_0x4830a0[_0x51eb72(0x8f3)](_0x2f77e0,-0x1a97+0x1f47+0x4b0*-0x1)['toStr'+_0x51eb72(0x9f5)](0x1694+0x7*0x21d+-0x254f);}else{var _0x135e7b=_0x1669c5['root'];if(!_0x135e7b||!_0x135e7b[_0x51eb72(0x86d)])return;_0x264175[_0x51eb72(0x550)]?(_0x135e7b[_0x51eb72(0x86d)][_0x51eb72(0x5d0)]=_0x15d44f[_0x51eb72(0x550)]['x']+'px',_0x135e7b['style'][_0x51eb72(0x5d1)]=_0x4830a0['uFHbx'](_0xb05d41[_0x51eb72(0x550)]['y'],'px'),_0x135e7b['style'][_0x51eb72(0x9a3)]=_0x4830a0[_0x51eb72(0xa03)],_0x135e7b['style']['botto'+'m']=_0x4830a0['XDGiA']):(_0x135e7b[_0x51eb72(0x86d)][_0x51eb72(0x5d0)]='auto',_0x135e7b[_0x51eb72(0x86d)]['top']=_0x51eb72(0x379),_0x135e7b[_0x51eb72(0x86d)][_0x51eb72(0x9a3)]='24px',_0x135e7b['style']['botto'+'m']='24px');}}return _0xeb67d9[_0x51eb72(0x73d)+'rs']=_0x30cfee['filte'+'r'](function(_0x1d1f47){var _0x33255c=_0x51eb72,_0x1bb8e7={'OrGJi':'plugi'+_0x33255c(0x295)+'ntime'+'._gam'+'e'};return _0x4830a0[_0x33255c(0x6ec)]('RPyFV',_0x4830a0['NNLhH'])?_0x1d1f47[-0x2218+0xdd3+0x1446]===_0x4830a0[_0x33255c(0xc18)]||_0x4830a0['TUFgV'](_0x1d1f47[0x1102+0x1f22+-0x3023],_0x33255c(0x7f5)):(_0x2ceec6[_0x33255c(0xc74)+'e']=_0x1bb8e7[_0x33255c(0x247)],_0x55c5cd[_0x33255c(0xdb9)]);})['map'](function(_0x3e9af7){var _0x4b64ba=_0x51eb72;return{'o':'0x'+_0x3e9af7[0x300+0xa*-0x49+-0x26][_0x4b64ba(0x8a8)+'ing'](-0x540+-0x4f*0x65+0x247b*0x1),'v':_0x118468(_0x34f86a+_0x3e9af7[0x70d+-0x1e63*-0x1+-0x2570],_0x3e9af7[-0x1c*0x39+-0x1d87+0x6*0x5f6])};})[_0x51eb72(0x6a7)+'r'](function(_0x283cc5){return _0x31b1d6['baybP'](_0x283cc5['v'],undefined)&&isFinite(_0x283cc5['v']);})['slice'](0x2384+0x2*-0x1241+-0x7f*-0x2,-0x1b7*0x13+0x8b4*-0x1+0x2955),_0xeb67d9;}function _0x561999(){var _0x14d5b5=_0x3b5618,_0x2f5357={'WYOqV':function(_0x21d357,_0x861174){return _0x21d357<_0x861174;},'trklO':function(_0x39562a,_0xc46a0c){var _0x4d2efa=_0x1d88;return _0x4830a0[_0x4d2efa(0xa6d)](_0x39562a,_0xc46a0c);},'zNcaX':_0x4830a0[_0x14d5b5(0x25a)],'kMOnf':'sakur'+_0x14d5b5(0x870)+'u-css'},_0xedd999={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x457d1a=_0x199537[_0x14d5b5(0xb3f)+_0x14d5b5(0x60b)+_0x14d5b5(0x4c0)]&&_0x199537[_0x14d5b5(0xb3f)+_0x14d5b5(0x60b)+'ler']['ptr']||-0x2287+-0x12c5+0x354c,_0x4ef69b=_0x42506f['Photo'+_0x14d5b5(0xa2c)+'orkSy'+'nc']||{},_0x14f1f4=Object[_0x14d5b5(0xb8c)](_0x4ef69b);for(var _0x1ce54d=0x1*0x793+0x557*0x2+0x1*-0x1241;_0x4830a0[_0x14d5b5(0x819)](_0x1ce54d,_0x14f1f4[_0x14d5b5(0x853)+'h'])&&_0x1ce54d<-0xb67+-0x1e6c+0xdb*0x31;_0x1ce54d++){var _0x52694c=_0x4ef69b[_0x14f1f4[_0x1ce54d]],_0x44bed3=_0x4830a0['JuFOI'](_0x2c7584,_0x4830a0[_0x14d5b5(0xba8)],_0x52694c['ptr']);_0x44bed3[_0x14d5b5(0x8f7)]=_0x52694c['hits'],_0x44bed3['first'+_0x14d5b5(0x87c)+'s']=_0x52694c[_0x14d5b5(0xad0)+'Seen']-_0x3ebd36,_0x44bed3['isLoc'+'al']=!!_0x457d1a&&_0x44bed3['refs'][_0x14d5b5(0x63f)]==='0x'+_0x457d1a[_0x14d5b5(0x8a8)+_0x14d5b5(0x9f5)](0x17ee+0x133f+0x27*-0x11b);if(_0x44bed3[_0x14d5b5(0x72f)][_0x14d5b5(0xb3d)+'h']){var _0x550714=_0x4830a0[_0x14d5b5(0xd25)](parseInt,_0x44bed3['refs'][_0x14d5b5(0xb3d)+'h'],0x1c96+-0xa*-0x3d0+0x382*-0x13);_0x44bed3[_0x14d5b5(0xb3d)+'h']=_0x2f0299(_0x550714,_0x14d5b5(0x2ad)+'hScri'+'pt',_0x14d5b5(0x61c));}_0xedd999['playe'+'rs'][_0x14d5b5(0xbb7)](_0x44bed3);}_0xedd999['playe'+_0x14d5b5(0x980)+'t']=_0x14f1f4[_0x14d5b5(0x853)+'h'];var _0x5875f5=_0x42506f[_0x14d5b5(0x7bb)+_0x14d5b5(0xaad)+_0x14d5b5(0x4c0)]||{},_0x5c2e24=Object[_0x14d5b5(0xb8c)](_0x5875f5);for(var _0xf91aae=-0xb97+-0x177a+0x2311;_0xf91aae<_0x5c2e24[_0x14d5b5(0x853)+'h']&&_0xf91aae<-0x17*0x9a+0x1*0x39c+0x529*0x2;_0xf91aae++){if(_0x4830a0[_0x14d5b5(0xd88)]('GERil','DGCqC')){var _0x399895='';for(var _0xd10e8d=-0x233*-0x10+0x1fa0+-0x42d0;_0x2f5357[_0x14d5b5(0xc78)](_0xd10e8d,arguments[_0x14d5b5(0x853)+'h']);_0xd10e8d++){var _0x220c6e=arguments[_0xd10e8d];if(typeof _0x220c6e===_0x14d5b5(0xda6)+'g')_0x399895+=_0x220c6e;else{if(_0x220c6e&&_0x220c6e[_0x14d5b5(0x7d3)+'ge'])_0x399895+=_0x220c6e[_0x14d5b5(0x7d3)+'ge'];}}if(_0x2f5357['trklO'](_0x399895[_0x14d5b5(0x227)+'Of'](_0x5a56b3),-(0x39*0x9e+-0x1*0x1156+-0x11d7)))return _0x1d54be[_0x14d5b5(0x692)](_0x24f94d,arguments);if(_0x399895[_0x14d5b5(0x227)+'Of'](_0x2f5357['zNcaX'])!==-(0xd37*0x2+0x63*-0x16+-0x11eb)){var _0x3c5ac7=_0x399895[_0x14d5b5(0x1d7)](0x199*0xe+0x45*0x48+0x14e3*-0x2,-0x3*-0x559+0x2*0xa96+0x240b*-0x1);if(_0x1fb8bc['index'+'Of'](_0x3c5ac7)===-(-0xef2*0x1+-0x9*-0x310+-0xc9d)&&_0x2f5357['WYOqV'](_0x487f1d[_0x14d5b5(0x853)+'h'],0xcde+0xccb+-0x11b*0x17))_0x1b5260['push'](_0x3c5ac7);}}else{var _0x269bab=_0x4830a0[_0x14d5b5(0x2c8)](_0x2c7584,'NPC_C'+'otrol'+'ler',_0x5875f5[_0x5c2e24[_0xf91aae]]['ptr']);_0x269bab[_0x14d5b5(0x8f7)]=_0x5875f5[_0x5c2e24[_0xf91aae]]['hits'],_0x269bab['first'+_0x14d5b5(0x87c)+'s']=_0x4830a0[_0x14d5b5(0xade)](_0x5875f5[_0x5c2e24[_0xf91aae]][_0x14d5b5(0xad0)+'Seen'],_0x3ebd36);if(_0x269bab[_0x14d5b5(0x72f)]['healt'+'h'])_0x269bab['healt'+'h']=_0x2f0299(_0x4830a0['REeXy'](parseInt,_0x269bab['refs'][_0x14d5b5(0xb3d)+'h'],-0x8*0x374+-0x1ca2+0x3852),_0x4830a0[_0x14d5b5(0x6f7)],_0x14d5b5(0x61c));_0xedd999[_0x14d5b5(0x790)][_0x14d5b5(0xbb7)](_0x269bab);}}_0xedd999['botCo'+_0x14d5b5(0x965)]=_0x5c2e24[_0x14d5b5(0x853)+'h'];var _0x17e722=_0x42506f['FPSco'+'ntrol'+_0x14d5b5(0x4c0)]||{},_0x3c9bca=Object['keys'](_0x17e722);for(var _0xc6577c=0x18af+0x368+-0x31f*0x9;_0x4830a0['FUsIp'](_0xc6577c,_0x3c9bca[_0x14d5b5(0x853)+'h'])&&_0x4830a0[_0x14d5b5(0xdc4)](_0xc6577c,0x1*0x116a+-0x56*-0x6a+-0x34ee);_0xc6577c++){if(_0x4830a0['poosi']!==_0x14d5b5(0xd89)){var _0x2e7bb4=_0x2c7584('FPSco'+'ntrol'+_0x14d5b5(0x4c0),_0x17e722[_0x3c9bca[_0xc6577c]]['ptr']);_0x2e7bb4[_0x14d5b5(0x8f7)]=_0x17e722[_0x3c9bca[_0xc6577c]][_0x14d5b5(0x8f7)],_0x2e7bb4[_0x14d5b5(0xcf3)+'al']=_0x17e722[_0x3c9bca[_0xc6577c]][_0x14d5b5(0xc63)]===_0x457d1a,_0xedd999[_0x14d5b5(0x749)+'oller'+'s'][_0x14d5b5(0xbb7)](_0x2e7bb4);}else{var _0x32b26b=_0x17ba89[_0x14d5b5(0x839)+'eElem'+_0x14d5b5(0xbdc)]('style');_0x32b26b['id']=_0x2f5357['kMOnf'],_0x32b26b['textC'+_0x14d5b5(0x3b9)+'t']=_0x5851fd,(_0x141a7a[_0x14d5b5(0xd42)]||_0x585798[_0x14d5b5(0xbf0)+_0x14d5b5(0x8e7)+_0x14d5b5(0x56e)])[_0x14d5b5(0x69b)+'dChil'+'d'](_0x32b26b);}}_0xedd999['contr'+_0x14d5b5(0xd5d)+'Count']=_0x3c9bca[_0x14d5b5(0x853)+'h'];var _0x42acfc=_0xedd999['playe'+'rs']['conca'+'t'](_0xedd999['bots']);for(var _0x2695fb=-0x4*-0x48e+-0x1*-0xecb+0x3ab*-0x9;_0x2695fb<_0x42acfc['lengt'+'h'];_0x2695fb++){if(_0x42acfc[_0x2695fb]['isLoc'+'al'])continue;_0xedd999['enemi'+'es'][_0x14d5b5(0xbb7)](_0x42acfc[_0x2695fb]);}_0xedd999['enemy'+'Count']=_0xedd999['enemi'+'es'][_0x14d5b5(0x853)+'h'];var _0x31e3c2={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x410d89={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x510e32 in _0x199537){var _0x9dfce5=_0x199537[_0x510e32];if(!_0x9dfce5||!_0x9dfce5['ptr'])continue;if(!_0x4830a0['OdocK'](_0x510e32,_0x31e3c2))continue;_0xedd999[_0x14d5b5(0xc2c)+_0x14d5b5(0x35d)][_0x510e32]='0x'+_0x9dfce5[_0x14d5b5(0xc63)]['toStr'+_0x14d5b5(0x9f5)](0x18d*0x11+-0x14b*-0x11+0xc*-0x406);var _0x1c19dc=_0x118468(_0x4830a0[_0x14d5b5(0x4df)](_0x9dfce5[_0x14d5b5(0xc63)],_0x31e3c2[_0x510e32]),_0x14d5b5(0x835)),_0x1b25c5=_0x4830a0['ULPLs'](_0x118468,_0x9dfce5[_0x14d5b5(0xc63)]+_0x410d89[_0x510e32],_0x4830a0[_0x14d5b5(0xabd)]);_0x1c19dc&&_0x4830a0[_0x14d5b5(0xbf3)](_0xedd999[_0x14d5b5(0x77c)+'a'],null)&&(_0xedd999[_0x14d5b5(0x77c)+'a']='0x'+_0x4830a0[_0x14d5b5(0xbca)](_0x1c19dc,-0x50f+0xd*0x21+0x362*0x1)['toStr'+_0x14d5b5(0x9f5)](-0x17*-0x139+0x2*0xc5+-0x1d99),_0xedd999['camer'+'aFrom']=_0x510e32);if(_0x1b25c5&&_0xedd999['playe'+_0x14d5b5(0x54d)]===null)_0xedd999['playe'+'rList']='0x'+_0x4830a0['cOVom'](_0x1b25c5,0x18a*-0x7+-0x9a4+-0x43*-0x4e)['toStr'+'ing'](-0x16b8+0x9c2+0x2*0x683);}if(!_0xedd999['playe'+_0x14d5b5(0x980)+'t']&&!_0xedd999['botCo'+'unt']&&!_0xedd999['camer'+'a'])_0xedd999[_0x14d5b5(0xc6e)]=_0x4830a0[_0x14d5b5(0xa7c)](_0x14d5b5(0xaba)+'otonN'+'etwor'+_0x14d5b5(0x4d1)+',\x20no\x20'+'NPC_C'+_0x14d5b5(0xaad)+'ler\x20a'+'nd\x20no'+_0x14d5b5(0xd67)+_0x14d5b5(0x1ea)+_0x14d5b5(0x3ac)+'That\x20'+'is\x20wh'+'at\x20',_0x14d5b5(0xdba)+_0x14d5b5(0x75d)+'looks'+_0x14d5b5(0x3f9)+'\x20-\x20ru'+_0x14d5b5(0x3d7)+_0x14d5b5(0x745)+_0x14d5b5(0xbf6)+'IDE\x20a'+'\x20live'+'\x20roun'+'d,\x20no'+_0x14d5b5(0x995)+_0x14d5b5(0xbe9)+'.');else!_0xedd999[_0x14d5b5(0xad3)+'Count']&&(_0xedd999[_0x14d5b5(0xc6e)]=_0x14d5b5(0x590)+_0x14d5b5(0x386)+_0x14d5b5(0x45b)+_0x14d5b5(0x3dc)+_0x14d5b5(0x799)+_0x14d5b5(0x46b)+_0x14d5b5(0x880)+'assif'+_0x14d5b5(0x99c)+_0x14d5b5(0x5ce)+_0x14d5b5(0x313)+_0x14d5b5(0x8db)+_0x14d5b5(0x276)+'k\x20'+(_0x14d5b5(0xcf3)+_0x14d5b5(0x7b3)+_0x14d5b5(0x898)+_0x14d5b5(0x83a)+'y\x20in\x20'+_0x14d5b5(0x580)+'ers`.'));try{var _0x2b2a2e=window[_0x14d5b5(0x36f)+_0x14d5b5(0xa86)+'dkit']&&window[_0x14d5b5(0x36f)+_0x14d5b5(0xa86)+_0x14d5b5(0xd45)]['Runti'+'me'],_0x59ffea=_0x2b2a2e&&_0x2b2a2e['inter'+'nalWa'+_0x14d5b5(0x748)+'es']||[],_0x1e2638={};for(var _0x3811a1=0x43*-0x77+0x4*0x655+0x5d1*0x1;_0x3811a1<_0x59ffea[_0x14d5b5(0x853)+'h']&&_0x4830a0[_0x14d5b5(0x41b)](_0x3811a1,-0x22ae+0x1530+-0xe8f*-0x2);_0x3811a1++){var _0x3bf7a1=_0x4830a0[_0x14d5b5(0xcab)](_0x59ffea[_0x3811a1][_0x14d5b5(0xd05)+'s']['join'](',')+'\x20->\x20',_0x59ffea[_0x3811a1][_0x14d5b5(0x3ff)+_0x14d5b5(0x2da)]||'void');_0x1e2638[_0x3bf7a1]=_0x4830a0[_0x14d5b5(0xd69)](_0x1e2638[_0x3bf7a1]||0x651+0x1d4f+0x8*-0x474,-0x6be+0x1ba6+-0x14e7);}_0xedd999['wasmT'+'ypes']=_0x1e2638;}catch(_0x2467c4){}return _0xedd999;}function _0x2f0299(_0xe442ff,_0x5e8ff9,_0x398d2d){var _0x45fae6=_0x3b5618;try{var _0x42baf8=_0xf4ed7[_0x5e8ff9]||[];for(var _0x89f4e5=0x1172+-0x5b6+-0xbbc;_0x89f4e5<_0x42baf8[_0x45fae6(0x853)+'h'];_0x89f4e5++){if(_0x42baf8[_0x89f4e5][-0x600+0x1792+-0x3*0x5db]!==_0x398d2d)continue;var _0x1872f9=_0x42baf8[_0x89f4e5][0x61+0x497+0x18*-0x35];if(_0x4830a0[_0x45fae6(0x8c5)](_0x398d2d[_0x45fae6(0x227)+'Of']('obf'),0x2467*0x1+-0x1*-0x9a9+-0x2e10)){var _0x37e09e=_0x1bc03e(_0xe442ff,_0x1872f9,_0x398d2d);if(!_0x37e09e)return null;_0x37e09e['o']=_0x1872f9,_0x37e09e['k']=_0x398d2d;var _0x41da72=_0x345489([_0x37e09e]);if(!_0x41da72[_0x45fae6(0x976)][_0x45fae6(0x853)+'h'])return null;return _0x41da72[_0x45fae6(0x976)][0x13fd+-0x1*0xd9a+-0x663];}var _0x5baa9c=_0x118468(_0xe442ff+_0x1872f9,_0x398d2d);if(_0x4830a0[_0x45fae6(0xa28)](_0x5baa9c,undefined))return null;return{'o':'0x'+_0x1872f9[_0x45fae6(0x8a8)+_0x45fae6(0x9f5)](0x713*-0x1+0x8*-0x46a+0x2a73*0x1),'v':_0x5baa9c};}}catch(_0x4342bc){}return null;}function _0x1d5cd1(){var _0x45bf20=_0x3b5618,_0x4ced5c={};_0x3d795f['ok']=0x4b7*0x3+-0x1ea6+0x1081,_0x3d795f[_0x45bf20(0xd63)+'d']=-0x682*0x2+-0x2701+0x3405,_0x3d795f[_0x45bf20(0xc95)+_0x45bf20(0x6a4)]=null;var _0x1b3c46=Object[_0x45bf20(0xb8c)](_0xf4ed7);for(var _0x577060=0x1*-0x19d8+0x4*0x7a9+-0x2*0x266;_0x577060<_0x1b3c46['lengt'+'h'];_0x577060++){var _0x2746e2=_0x1b3c46[_0x577060],_0x286137=_0x199537[_0x2746e2];if(!_0x286137||!_0x286137[_0x45bf20(0xc63)])continue;var _0x22ffd2=_0xf4ed7[_0x2746e2]||[],_0x47c76b=[];for(var _0x449bee=0x9a0+-0x1be8+0x1248;_0x449bee<_0x22ffd2[_0x45bf20(0x853)+'h'];_0x449bee++){var _0x16e316=_0x22ffd2[_0x449bee][0x114a+0x2234+-0x337e],_0x5219d0=_0x22ffd2[_0x449bee][0x76*-0x12+0xb98+-0x34b];if(_0x5219d0[_0x45bf20(0x227)+'Of'](_0x45bf20(0x667))===-0x83*0x19+-0xe2b*-0x1+-0x10*0x16){var _0x583dcd=_0x4830a0[_0x45bf20(0x6e3)](_0x1bc03e,_0x286137[_0x45bf20(0xc63)],_0x16e316,_0x5219d0);if(!_0x583dcd)continue;_0x583dcd['o']=_0x16e316,_0x583dcd['k']=_0x5219d0,_0x47c76b[_0x45bf20(0xbb7)](_0x583dcd);}else{var _0x1adc20=_0x118468(_0x286137[_0x45bf20(0xc63)]+_0x16e316,_0x5219d0);if(_0x1adc20===undefined)continue;var _0x283a56={'o':_0x16e316,'k':_0x5219d0,'v':_0x1adc20};if(_0x5219d0==='v2'||_0x5219d0==='v3'||_0x5219d0==='v4'){if('WMJqy'==='WMJqy'){var _0x19e47f=_0x4830a0['HbQAv'](_0x5219d0,'v2')?-0x1e*0xd+0x12b7*-0x1+0x143f:_0x5219d0==='v3'?0xb6b+-0x92*-0x13+-0x163e:0x64d*0x1+0x15f9+0x2*-0xe21,_0x3ae0af=_0x4830a0[_0x45bf20(0x6e3)](_0x32a80c,_0x286137[_0x45bf20(0xc63)],_0x16e316,_0x19e47f);if(_0x3ae0af){if(_0x4830a0[_0x45bf20(0x3e3)](_0x45bf20(0xb35),_0x45bf20(0xb35)))_0x283a56[_0x45bf20(0x5bc)]=_0x3ae0af,_0x283a56['v']=_0x3ae0af[-0x1*0x146e+0x150b+-0x1*0x9d];else{_0x381f29['preve'+_0x45bf20(0xc67)+'ault'](),_0xd38f57(!_0x4d5bf7['open']);return;}}}else{_0x1673c1[_0x45bf20(0x615)]=_0x45bf20(0xa13)+'me.cr'+'eateP'+'lugin'+'\x20unav'+'ailab'+'le';return;}}_0x47c76b[_0x45bf20(0xbb7)](_0x283a56);}}if(_0x47c76b[_0x45bf20(0x853)+'h']){var _0x43e780=_0x345489(_0x47c76b);_0x4ced5c[_0x2746e2]=_0x43e780['rows'],_0x19ec28[_0x2746e2]={'key':_0x43e780[_0x45bf20(0x362)],'sane':_0x43e780[_0x45bf20(0x80c)],'checked':_0x43e780['check'+'ed'],'keyConsistent':_0x43e780[_0x45bf20(0xbe0)+_0x45bf20(0x422)+'ent'],'keySource':_0x43e780['keySo'+_0x45bf20(0x333)]};}}return _0x4ced5c;}function _0x345489(_0x5aa4c5){var _0x588bdc=_0x3b5618,_0x196930={'OrvMM':function(_0x39cd0d){return _0x39cd0d();},'QCOMV':_0x588bdc(0x7c0)+_0x588bdc(0x203),'lIINH':_0x4830a0[_0x588bdc(0x894)]},_0x3cbf80=0x12a*-0x1+-0x103*-0x7+0x1f9*-0x3,_0x5de951=-0x984+-0x19*-0x9e+-0x5ea*0x1,_0x2c0fd9=null;for(var _0x589e48=-0x251*-0xd+0xb06*0x2+-0x3429;_0x4830a0['LeVrB'](_0x589e48,_0x5aa4c5['lengt'+'h']);_0x589e48++){var _0x2282dc=_0x5aa4c5[_0x589e48];if(_0x2282dc['k'][_0x588bdc(0x227)+'Of'](_0x4830a0['SdXuF'])!==0x1404*-0x1+0x12b3+-0x1*-0x151)continue;_0x2282dc['v']=_0x4830a0[_0x588bdc(0xc31)](_0x21acef,_0x2282dc['k'],_0x2282dc['hidde'+'n'],_0x2282dc['keyAt'+'Offse'+'t0']),_0x2282dc[_0x588bdc(0x97b)+'ed']=_0x2282dc['keyAt'+'Offse'+'t0'],_0x2282dc[_0x588bdc(0x1e5)]=_0x4830a0[_0x588bdc(0x7f9)](_0x4830a0[_0x588bdc(0x228)](_0x4830a0['uJMgJ'](_0x4830a0['vOqMO'],_0x2282dc['hidde'+'n'])+_0x4830a0['yyLoQ']+_0x2282dc[_0x588bdc(0x389)]+(_0x2282dc[_0x588bdc(0x53f)]?_0x588bdc(0x984)+'VE':''),'\x20k0=')+_0x2282dc['keyAt'+'Offse'+'t0'],_0x4830a0[_0x588bdc(0x244)])+_0x2282dc[_0x588bdc(0xc5d)];if(_0x2c0fd9===null)_0x2c0fd9=_0x2282dc[_0x588bdc(0x7a0)+_0x588bdc(0xa2b)+'t0'];_0x5de951++;if(_0x4b45b3(_0x2282dc)){if('XsDsF'===_0x4830a0[_0x588bdc(0x5b6)]){_0x387593[_0x588bdc(0x97a)]=!!_0x2f885a;var _0x1cb87c=_0x196930[_0x588bdc(0x4bd)](_0x5d170b);if(!_0x1cb87c)return;_0x1cb87c['class'+_0x588bdc(0xbce)]=_0x196930[_0x588bdc(0x469)]+(_0x10b1bc['open']?_0x196930['lIINH']:'');if(_0x106f48[_0x588bdc(0x3a3)])_0x3b2f07['petal']['style'][_0x588bdc(0x640)+'ty']=_0x4eec62[_0x588bdc(0x97a)]?'1':'.5';if(_0x44017b[_0x588bdc(0x97a)]){_0x2c333d(_0x83e070[_0x588bdc(0x44c)]);try{var _0x18cd99=_0x2ec17b['inner'+'Heigh'+'t']||-0x119c+-0x140b+0x3b5*0xb;if(_0x18cd99<0xcb8+-0x24a1*0x1+0x1a55)_0x1805a1(![]);}catch(_0x26ca76){}}}else _0x3cbf80++,_0x2282dc[_0x588bdc(0x80c)]=!![];}else _0x2282dc[_0x588bdc(0x80c)]=![];delete _0x2282dc['alt'];}return{'rows':_0x5aa4c5,'key':_0x2c0fd9,'sane':_0x3cbf80,'checked':_0x5de951,'keyConsistent':_0x4830a0[_0x588bdc(0x2e0)](_0x2a7f5e,_0x5aa4c5),'keySource':_0x4830a0[_0x588bdc(0x50a)]};}function _0x2a7f5e(_0xc8b2c3){var _0x4daded=_0x3b5618,_0x26ec8a={};for(var _0x32397b=0x12d9+-0x39e*0x5+-0xc3;_0x4830a0['RxkBA'](_0x32397b,_0xc8b2c3[_0x4daded(0x853)+'h']);_0x32397b++){var _0x21091f=_0xc8b2c3[_0x32397b];if(_0x4830a0['pOuog'](_0x21091f['k']['index'+'Of']('obf'),0x24b1+0x657*0x5+-0x4464))continue;if(_0x4830a0['NkkXx'](_0x26ec8a[_0x21091f['k']],undefined))_0x26ec8a[_0x21091f['k']]=_0x21091f[_0x4daded(0x97b)+'ed'];else{if(_0x26ec8a[_0x21091f['k']]!==_0x21091f[_0x4daded(0x97b)+'ed'])return![];}}return!![];}function _0x4b45b3(_0x1e8990){var _0x1975de=_0x3b5618,_0x3d8451=_0x4830a0[_0x1975de(0x828)]['split']('|'),_0x24365e=-0x4*0x548+0x23b*-0xb+0x2da9;while(!![]){switch(_0x3d8451[_0x24365e++]){case'0':if(typeof _0x161588!==_0x4830a0[_0x1975de(0xcdb)]||!_0x4830a0['lMfDq'](isFinite,_0x161588))return![];continue;case'1':var _0x161588=_0x1e8990['v'];continue;case'2':if(_0x1e8990['act']===0x1*0x264e+0x110b*0x1+0xa1*-0x58)return _0x4830a0['ghwAe'](Math[_0x1975de(0xaef)](_0x4830a0['IIOVs'](_0x161588,_0x254d94)),Math[_0x1975de(0x8ae)](-0x13a*0x16+0x4de*-0x1+0x1fdb,Math[_0x1975de(0xaef)](_0x254d94)*(-0x2095+0x668+-0x1a2d*-0x1+0.6)));continue;case'3':return Math[_0x1975de(0xaef)](_0x161588)<0x908*-0x46396+0x2e62f12b+0x4ce1caf*0xb;case'4':var _0x254d94=_0x1e8990[_0x1975de(0x389)];continue;case'5':if(_0x4830a0[_0x1975de(0x226)](_0x1e8990['k'],_0x1975de(0x9a5)))return _0x4830a0[_0x1975de(0xa28)](_0x161588,0x122*-0x22+-0xeed+-0x1*-0x3571)||_0x161588===-0x1ea4+0x2120+-0x27b;continue;case'6':if(_0x4830a0['YDUff'](typeof _0x254d94,_0x4830a0['EqENS'])||!isFinite(_0x254d94))return!![];continue;}break;}}function _0x25226d(){var _0x3a50de=_0x3b5618,_0x57ca9b={'JeNDw':function(_0x38fc3d,_0x1d366d){return _0x4830a0['ruCMF'](_0x38fc3d,_0x1d366d);},'OsaRP':function(_0x124e7b,_0x588d92){return _0x4830a0['yYyHS'](_0x124e7b,_0x588d92);}},_0x44fe1f={};try{if(_0x4830a0[_0x3a50de(0x306)](_0x4830a0['uHixI'],'DDIlo')){if(_0x21791b==='v3'){var _0x239a94=_0x1ef0f1[_0x514e9d][_0x3a50de(0x5bc)]||[_0x3e6d58[_0x51faad]['v'],-0x2*-0x1034+-0x2bc*0x4+-0x1578,0x3*0x5a7+0x2600+0x1*-0x36f5];return _0x239a94[_0x3a50de(0x586)](function(_0x1106df){return _0x57ca9b['JeNDw'](_0x26565d['round'](_0x1106df*(0x65*0x47+0x1f7*-0x11+0x5c8)),-0x15a*0x6+0x217a+-0x2e*0x8b);})[_0x3a50de(0xbe3)]('\x20\x20');}var _0x2ce9c5=_0x478a57[_0x2c022a]['v'];return typeof _0x2ce9c5==='numbe'+'r'?_0x117055['round'](_0x2ce9c5*(-0x1a8c+0x1*-0x23e7+0x425b*0x1))/(-0x16e8+0x2ed*0x1+-0x1*-0x17e3):_0x3e718d(_0x2ce9c5);}else{var _0x1dd1da=_0x4830a0[_0x3a50de(0x621)][_0x3a50de(0x8a1)]('|'),_0x2bc9ec=-0x1cca+0x11a8*0x1+0xb22;while(!![]){switch(_0x1dd1da[_0x2bc9ec++]){case'0':_0x44fe1f[_0x3a50de(0xa57)+_0x3a50de(0xd34)+'e']=_0x58d82e&&_0x58d82e['_game']?typeof _0x58d82e[_0x3a50de(0xdb9)]:_0x3a50de(0xa29);continue;case'1':_0x44fe1f[_0x3a50de(0x2ae)+_0x3a50de(0xadd)]=!!(_0x4830a0[_0x3a50de(0x6eb)](_0x58d82e,_0x25d5b1)&&_0x4830a0[_0x3a50de(0xc1e)](_0x58d82e['__sak'+_0x3a50de(0xaee)+'g'],_0x25d5b1));continue;case'2':var _0x58d82e=window['Unity'+_0x3a50de(0xa86)+_0x3a50de(0xd45)]&&window[_0x3a50de(0x36f)+_0x3a50de(0xa86)+_0x3a50de(0xd45)][_0x3a50de(0xa13)+'me'];continue;case'3':_0x44fe1f[_0x3a50de(0xa4a)+_0x3a50de(0x490)+_0x3a50de(0x87f)+'me']=_0x2535a1&&_0x2535a1['_runt'+_0x3a50de(0xa9f)]&&_0x2535a1[_0x3a50de(0x684)+_0x3a50de(0xa9f)][_0x3a50de(0xdb9)]?typeof _0x2535a1['_runt'+'ime'][_0x3a50de(0xdb9)]:_0x4830a0[_0x3a50de(0x72d)];continue;case'4':_0x44fe1f[_0x3a50de(0x92f)]=_0x58d82e&&_0x58d82e[_0x3a50de(0x688)+'uraTa'+'g']||null;continue;case'5':_0x44fe1f[_0x3a50de(0xa4a)+'nRunt'+_0x3a50de(0x8b2)+_0x3a50de(0x921)+_0x3a50de(0xd29)]=!!(_0x2535a1&&_0x2535a1[_0x3a50de(0x684)+_0x3a50de(0xa9f)]&&_0x2535a1[_0x3a50de(0x684)+_0x3a50de(0xa9f)]===_0x58d82e);continue;}break;}}}catch(_0xfa6a33){if(_0x4830a0['thvWL'](_0x4830a0['NfPHZ'],_0x4830a0['NfPHZ']))_0x44fe1f[_0x3a50de(0x615)]=String(_0xfa6a33&&_0xfa6a33['messa'+'ge']||_0xfa6a33);else{var _0x49daf9=_0x3d4ffb[_0x250bd1];_0x4ffa03[_0x3a50de(0xbb7)](_0x57ca9b[_0x3a50de(0x216)](_0x49daf9+'\x20@\x20',_0x1691f6[_0x49daf9]));}}return _0x44fe1f;}function _0x21abdf(){var _0x47a4c4=_0x3b5618,_0x26d3dc={'kpXez':function(_0x2d66bd,_0x48c404){return _0x2d66bd*_0x48c404;}};if(_0x47a4c4(0x7ea)!=='pLqVK'){var _0x4dcc19=[_0x4830a0['ZwjbE'],'unity'+'Game','game',_0x4830a0[_0x47a4c4(0x786)]],_0x1300c1={};for(var _0x3e5f9d=-0x1*0x16e5+-0x2162+0x3847;_0x3e5f9d<_0x4dcc19[_0x47a4c4(0x853)+'h'];_0x3e5f9d++){var _0x569a3a=_0x4dcc19[_0x3e5f9d],_0x18158f=typeof window[_0x569a3a];_0x1300c1[_0x569a3a]=_0x18158f===_0x47a4c4(0x97e)+'ined'?_0x47a4c4(0x97e)+'ined':_0x18158f;}var _0x38d333=_0x4830a0[_0x47a4c4(0x691)](_0xc0bf3e);_0x1300c1[_0x47a4c4(0x770)+'ource']=_0x3d795f[_0x47a4c4(0xc74)+'e'];try{_0x1300c1[_0x47a4c4(0x816)+_0x47a4c4(0x900)]=!!(_0x38d333&&_0x38d333[_0x47a4c4(0xa09)+'e']),_0x1300c1[_0x47a4c4(0xc1f)+'8']=!!(_0x38d333&&_0x38d333[_0x47a4c4(0xa09)+'e']&&_0x38d333[_0x47a4c4(0xa09)+'e'][_0x47a4c4(0x865)+'8']),_0x1300c1['heapB'+'ytes']=_0x1300c1[_0x47a4c4(0xc1f)+'8']?_0x38d333[_0x47a4c4(0xa09)+'e']['HEAPU'+'8'][_0x47a4c4(0x853)+'h']:-0x1*-0x33+-0x1*-0x511+-0x544;}catch(_0x1de9ec){_0x1300c1[_0x47a4c4(0x816)+_0x47a4c4(0x900)]=![],_0x1300c1['heapU'+'8']=![],_0x1300c1[_0x47a4c4(0x1ed)+_0x47a4c4(0x25b)]=-0x22c1+0x28a+-0xabd*-0x3;}return _0x1300c1[_0x47a4c4(0x61f)+_0x47a4c4(0x58d)+'er']=typeof _0x5c6c66,_0x1300c1;}else return _0x5e3dfd['round'](_0x26d3dc['kpXez'](_0x4c6032,-0x17f0+0x1785+0xcf))/(0x1*-0x215b+-0x106*-0xd+0x1471);}function _0x18d9dc(){var _0x48ff11=_0x3b5618,_0x28cf41={},_0x2766ee=_0x4830a0['YbigH'](_0x785804);if(!_0x2766ee)return _0x28cf41;_0x28cf41[_0x48ff11(0xd31)+_0x48ff11(0x9c9)+_0x48ff11(0xc63)]=_0x2766ee[_0x48ff11(0x2a8)+_0x48ff11(0x55a)];for(var _0xb04afe in _0x2766ee[_0x48ff11(0x927)+'s'])_0x28cf41[_0x48ff11(0xd31)+'Look+'+_0xb04afe]=_0x2766ee[_0x48ff11(0x927)+'s'][_0xb04afe];if(_0x2766ee[_0x48ff11(0x77c)+'a'])_0x28cf41[_0x4830a0['VtUus']]=_0x2766ee['camer'+'a'];return _0x28cf41;}function _0x1ee38b(_0x5b10d8){var _0x2d942b=_0x3b5618,_0x1c1a32={};for(var _0x5072ac in _0x5b10d8){if(_0x4830a0[_0x2d942b(0x83d)]!==_0x2d942b(0x7c4))_0xafeff1['top']=(_0x59ce8e[_0x2d942b(0x34b)+'Heigh'+'t']||0x179d+-0xce*-0x13+0x1*-0x26e7)-(_0xc3cf4a['offse'+'tHeig'+'ht']||-0x60+0x1287+-0x1*0x1097)-(-0x1407+-0x863+0x2*0xe41);else{var _0x36badd=_0x5b10d8[_0x5072ac];for(var _0x4bb39f=-0xa5c+0x165c+-0xc00;_0x4830a0[_0x2d942b(0x93f)](_0x4bb39f,_0x36badd[_0x2d942b(0x853)+'h']);_0x4bb39f++){_0x1c1a32[_0x4830a0[_0x2d942b(0xd69)](_0x5072ac,_0x2d942b(0x8d8))+_0x36badd[_0x4bb39f]['o'][_0x2d942b(0x8a8)+'ing'](-0x1337*-0x1+-0x568*0x4+0x279)]=_0x36badd[_0x4bb39f]['v'];}}}return _0x1c1a32;}function _0x287a45(_0x1fc63f,_0x24478a){var _0x59a332=_0x3b5618,_0x47f7f1=_0x4830a0['mvPqV'][_0x59a332(0x8a1)]('|'),_0x35285a=-0x244d+-0xf32+0x337f;while(!![]){switch(_0x47f7f1[_0x35285a++]){case'0':if(!_0x18690d){_0x18690d=_0x1fe588,_0x412040=[],_0x1cedca('repor'+'t',{'report':_0xb2d088()});return;}continue;case'1':_0x4830a0[_0x59a332(0xd25)](_0x1cedca,_0x59a332(0x609)+'t',{'report':_0xb2d088()});continue;case'2':var _0x4cd750=_0x4830a0['AuQQr'](_0x18d9dc);continue;case'3':for(var _0x5b3257 in _0x4cd750)_0x1fe588[_0x5b3257]=_0x4cd750[_0x5b3257];continue;case'4':_0x412040=[];continue;case'5':for(var _0x2301f9 in _0x1fe588){var _0x3aada3=_0x18690d[_0x2301f9],_0x15eb5d=_0x1fe588[_0x2301f9];if(_0x4830a0[_0x59a332(0xa6d)](_0x3aada3,_0x15eb5d))_0x412040['push'](_0x4830a0[_0x59a332(0x418)](_0x4830a0[_0x59a332(0xa6b)](_0x4830a0['oryTT'](_0x2301f9,':\x20'),_0x3aada3)+'\x20->\x20',_0x15eb5d));}continue;case'6':_0x18690d=_0x1fe588;continue;case'7':var _0x1fe588=_0x1ee38b(_0x3647c3);continue;case'8':var _0x3647c3=_0x4830a0['EmLns'](_0x1d5cd1);continue;case'9':if(_0x4830a0[_0x59a332(0xa53)](_0x1fc63f,_0x4830a0[_0x59a332(0x236)]))return;continue;case'10':if(_0x1fc63f===_0x59a332(0xdc5)){_0x17e3ce(_0x24478a&&typeof _0x24478a['on']===_0x4830a0['tDDop']?_0x24478a['on']:_0x328f9c['on'],_0x24478a&&typeof _0x24478a['facto'+'r']==='numbe'+'r'?_0x24478a[_0x59a332(0x5db)+'r']:_0x328f9c[_0x59a332(0x5db)+'r']);return;}continue;}break;}}var _0x2990ce=null;function _0x5b6492(){var _0x40bf67=_0x3b5618,_0xc36e9a={'ITIGf':function(_0x45215f,_0x3a3763,_0x5adb8a){var _0x219125=_0x1d88;return _0x4830a0[_0x219125(0xd23)](_0x45215f,_0x3a3763,_0x5adb8a);},'MInoj':function(_0xf0bf21,_0x4ba991,_0x29a7ed){return _0xf0bf21(_0x4ba991,_0x29a7ed);},'IpXqV':function(_0x4909d3){return _0x4830a0['YahdD'](_0x4909d3);},'yBmQZ':_0x4830a0[_0x40bf67(0x233)],'lJnZD':_0x4830a0[_0x40bf67(0x7cb)],'nCGlE':function(_0x33133b,_0x3eab4b){return _0x4830a0['HFBGZ'](_0x33133b,_0x3eab4b);},'tbgeT':function(_0x33605d){var _0xd01025=_0x40bf67;return _0x4830a0[_0xd01025(0x2bf)](_0x33605d);}};if(_0x2990ce)return _0x2990ce;try{if(!document[_0x40bf67(0x84b)]||!document[_0x40bf67(0x84b)]['appen'+_0x40bf67(0x79e)+'d'])return null;if(!document[_0x40bf67(0x2e9)+_0x40bf67(0x56e)+'ById']('sakur'+_0x40bf67(0xaeb)+_0x40bf67(0x820)+'ss')){if(_0x4830a0['VVOOe'](_0x4830a0[_0x40bf67(0x4a2)],_0x4830a0['WBgzB'])){_0x2c3c65['on']=!!_0x46a5b8,_0x45ea90['boxes']=!!_0x3dac40,_0x56f9f0();try{var _0xfbb3a7=_0x4ee546();if(_0xfbb3a7&&_0xfbb3a7['el'])_0xfbb3a7['el'][_0x40bf67(0x86d)]['displ'+'ay']=_0x25784d['on']?'':_0x40bf67(0xa29);var _0x233e39=_0x48913a;if(_0x233e39&&_0x233e39['cv'])_0x233e39['cv']['style']['displ'+'ay']=_0x37511d['on']&&_0x15f1c7['boxes']?'':_0x40bf67(0xa29);}catch(_0x5aecfe){}}else{var _0x67eec2=document['creat'+'eElem'+_0x40bf67(0xbdc)]('style');_0x67eec2['id']=_0x40bf67(0x978)+'a-sw-'+'hud-c'+'ss',_0x67eec2[_0x40bf67(0x2a0)+_0x40bf67(0x3b9)+'t']=_0x40bf67(0x9b7)+'ra-sw'+_0x40bf67(0xaa7)+_0x40bf67(0xc43)+_0x40bf67(0xb83)+'l}',(document[_0x40bf67(0xd42)]||document[_0x40bf67(0xbf0)+'entEl'+_0x40bf67(0x56e)])['appen'+_0x40bf67(0x79e)+'d'](_0x67eec2);}}var _0x3606a6=document['creat'+_0x40bf67(0xcdd)+'ent'](_0x4830a0['xEWux']);_0x3606a6['id']=_0x40bf67(0x978)+_0x40bf67(0xaeb)+_0x40bf67(0xafe),_0x3606a6[_0x40bf67(0x86d)][_0x40bf67(0xd9e)+'xt']=_0x4830a0['MBtNG'](_0x40bf67(0x6c7)+_0x40bf67(0x491)+_0x40bf67(0x3fe)+_0x40bf67(0xb05)+_0x40bf67(0xa0e)+'ottom'+':8px;'+_0x40bf67(0xb11)+'ex:21'+'47483'+_0x40bf67(0x83f)+_0x40bf67(0x96a)+_0x40bf67(0x886)+'x;fle'+'x-dir'+'ectio'+'n:col'+_0x40bf67(0x908)+'ap:4p'+'x;'+_0x4830a0[_0x40bf67(0xd21)]+(_0x40bf67(0x98a)+'ng:6p'+'x\x208px'+';font'+':11px'+'/1.45'+_0x40bf67(0xae8)+_0x40bf67(0xcfa)+'ace,C'+'onsol'+_0x40bf67(0xb9a)+_0x40bf67(0x49b)+'ce;co'+_0x40bf67(0x598)+'f7eef'+'5;'),'box-s'+_0x40bf67(0x726)+_0x40bf67(0x520)+_0x40bf67(0x785)+_0x40bf67(0x8ab)+_0x40bf67(0x5be)+_0x40bf67(0x8ce)+_0x40bf67(0x28c)+_0x40bf67(0x9c4)+_0x40bf67(0x9dc)+_0x40bf67(0xd2b)+'kit-u'+'ser-s'+'elect'+':none'+';');var _0x25f1b8='<div\x20'+_0x40bf67(0xc00)+_0x40bf67(0x9ea)+'2\x22\x20st'+_0x40bf67(0x589)+'color'+':#8d7'+_0x40bf67(0x59e)+_0x40bf67(0x215)+_0x40bf67(0x326)+_0x40bf67(0x1f9)+_0x40bf67(0xa90)+_0x40bf67(0x6c4);_0x3606a6['inner'+_0x40bf67(0x802)]=_0x4830a0[_0x40bf67(0x8c4)](_0x4830a0[_0x40bf67(0x4df)](_0x4830a0['CrUjl'](_0x4830a0[_0x40bf67(0x235)](_0x4830a0[_0x40bf67(0xa5d)](_0x4830a0[_0x40bf67(0xa6a)](_0x4830a0[_0x40bf67(0x690)](_0x4830a0['LvRFE'](_0x4830a0[_0x40bf67(0x872)]+(_0x40bf67(0x753)+_0x40bf67(0x589)+'color'+':'),_0xf63150)+(_0x40bf67(0xd5f)+'ura</'+'b>'),_0x4830a0['leBlY'])+('color'+_0x40bf67(0x245)+'ef5;b'+_0x40bf67(0xbe5)+_0x40bf67(0x72b)+'us:6p'+_0x40bf67(0xa40)+_0x40bf67(0xbc7)+_0x40bf67(0x43c)+_0x40bf67(0xb04)+_0x40bf67(0xd7d)+'point'+'er;fo'+_0x40bf67(0x429)+'herit'+';\x22>Sp'+'eed\x20o'+'ff</b'+_0x40bf67(0x2c3)+'>')+_0x4830a0[_0x40bf67(0x843)]+_0xf63150,_0x4830a0[_0x40bf67(0xa06)])+(_0x40bf67(0xbaa)+_0x40bf67(0x7f6)+'-a=\x22f'+_0x40bf67(0x86a)+_0x40bf67(0x589)+'color'+':#bda'+_0x40bf67(0x5dc)+'in-wi'+'dth:3'+_0x40bf67(0x758)+'>2.0x'+'</spa'+'n>')+_0x4830a0['jEACw']+(_0x40bf67(0xccd)+':#f7e'+_0x40bf67(0x716)+_0x40bf67(0xbe5)+_0x40bf67(0x72b)+_0x40bf67(0x9f1)+_0x40bf67(0xa40)+'ding:'+'2px\x207'+_0x40bf67(0xb04)+'rsor:'+'point'+_0x40bf67(0x45a)+'nt:in'+_0x40bf67(0xb70)+_0x40bf67(0xae1)+_0x40bf67(0x81c)+'/butt'+_0x40bf67(0x22d)),_0x40bf67(0xca1)+_0x40bf67(0x346)+_0x40bf67(0xd3c)+_0x40bf67(0x39d)+'\x22\x20sty'+_0x40bf67(0x48e)+_0x40bf67(0x61e)+'ound:'+_0x40bf67(0x934)+_0x40bf67(0x406)+_0x40bf67(0x9ff)+'der:1'+'px\x20so'+_0x40bf67(0xd65)+_0x40bf67(0x46e)+'55,14'+_0x40bf67(0x1ee)+_0x40bf67(0x6d2)+';')+(_0x40bf67(0xccd)+_0x40bf67(0x245)+'ef5;b'+'order'+_0x40bf67(0x72b)+'us:6p'+'x;pad'+_0x40bf67(0xbc7)+_0x40bf67(0x23a)+_0x40bf67(0xb04)+_0x40bf67(0xd7d)+'point'+_0x40bf67(0x45a)+_0x40bf67(0x429)+_0x40bf67(0xb70)+';\x22>Sn'+_0x40bf67(0x95a)+'utton'+'>'),_0x40bf67(0xca1)+'on\x20da'+_0x40bf67(0xd3c)+_0x40bf67(0x8f4)+'\x22\x20sty'+_0x40bf67(0x46f)+'argin'+_0x40bf67(0xa81)+_0x40bf67(0x30b)+_0x40bf67(0xa3f)+'groun'+_0x40bf67(0xadc)+'nspar'+_0x40bf67(0x7b9)+_0x40bf67(0xbe5)+_0x40bf67(0xc17)+_0x40bf67(0x416)+'\x20rgba'+_0x40bf67(0x271)+_0x40bf67(0x974)+'77,.4'+_0x40bf67(0x457))+(_0x40bf67(0xccd)+':#f7e'+'ef5;b'+_0x40bf67(0xbe5)+_0x40bf67(0x72b)+_0x40bf67(0x9f1)+'x;pad'+_0x40bf67(0xbc7)+_0x40bf67(0x602)+'px;cu'+_0x40bf67(0xd7d)+_0x40bf67(0x652)+_0x40bf67(0x45a)+_0x40bf67(0x429)+_0x40bf67(0xb70)+_0x40bf67(0xce4)+_0x40bf67(0x607)+_0x40bf67(0x22d)),_0x4830a0['PZiZo']),_0x4830a0[_0x40bf67(0x23b)]),_0x4830a0['fiKmY']),_0x3606a6[_0x40bf67(0x34b)+'HTML']=_0x25f1b8;var _0x21f390=function(_0x5e1773){var _0x5762d1=_0x40bf67;return _0x3606a6[_0x5762d1(0xcc7)+_0x5762d1(0xdb3)+'tor']('[data'+'-a=\x22'+_0x5e1773+'\x22]');},_0x800197=_0x21f390('st'),_0xf53944=_0x4830a0['lMfDq'](_0x21f390,'st2'),_0xf09b14=_0x4830a0['cYbww'](_0x21f390,'sp'),_0x416890=_0x21f390('fx'),_0x228de2=_0x21f390('fv'),_0x49499c=_0x21f390('bar');if(_0xf09b14)_0xf09b14[_0x40bf67(0x93e)+'ck']=function(){var _0x18c2ff=_0x40bf67;_0xc36e9a[_0x18c2ff(0xd6d)](_0x17e3ce,!_0x328f9c['on'],_0x328f9c[_0x18c2ff(0x5db)+'r']);};if(_0x416890)_0x416890['oninp'+'ut']=function(){_0xc36e9a['MInoj'](_0x17e3ce,_0x328f9c['on'],parseFloat(_0x416890['value'])||0xf91*-0x2+-0x1*0x21ea+-0x15*-0x319);};if(_0x21f390(_0x40bf67(0xa75)))_0x21f390(_0x4830a0['EGUmB'])[_0x40bf67(0x93e)+'ck']=function(){var _0x4735f1=_0x40bf67;if(_0xc36e9a['lJnZD']==='RXDsN')_0xc36e9a['nCGlE'](_0x287a45,_0x4735f1(0xc82)+_0x4735f1(0x209));else try{if(!_0x793da7['petal'])return;var _0xaa57af=_0xc36e9a[_0x4735f1(0xc0e)](_0x444184);_0xcb9bcf['petal']['style']['opaci'+'ty']=_0x1221a9['open']?'1':_0xaa57af?'.8':_0xc36e9a[_0x4735f1(0x7f7)],_0x2bfa46[_0x4735f1(0x3a3)][_0x4735f1(0x6e9)]=_0xaa57af?_0x4735f1(0x6d1)+'a\x20Ski'+_0x4735f1(0x5f4)+_0x4735f1(0x8ee)+_0x4735f1(0x329):_0x4735f1(0x6d1)+'a\x20Ski'+_0x4735f1(0x5f4)+'z\x20-\x20w'+_0x4735f1(0x8f1)+_0x4735f1(0xb5b)+'\x20the\x20'+_0x4735f1(0x2b4)+'(Inse'+_0x4735f1(0x3fc);}catch(_0x5e26e5){}};var _0x2a7a43=_0x4830a0['emiro'](_0x21f390,_0x4830a0[_0x40bf67(0x923)]);if(_0x2a7a43)_0x2a7a43[_0x40bf67(0x93e)+'ck']=function(){var _0x1ac3ef=_0x40bf67;if(!_0x1c4e9c['on'])_0x2d1a41(!![],![]);else{if(_0x1c4e9c[_0x1ac3ef(0x96d)])_0xc36e9a['ITIGf'](_0x2d1a41,![],![]);else{if(_0xc36e9a['tbgeT'](_0x3ccc4d))_0xc36e9a[_0x1ac3ef(0xd6d)](_0x2d1a41,!![],!![]);else _0x2d1a41(![],![]);}}};if(_0x21f390(_0x40bf67(0x2f6)))_0x4830a0[_0x40bf67(0x280)](_0x21f390,_0x40bf67(0x2f6))['oncli'+'ck']=function(){var _0x21fe00=_0x40bf67;if(!_0x49499c)return;var _0x7c3378=_0x4830a0['HrzkK'](_0x49499c[_0x21fe00(0x86d)]['displ'+'ay'],_0x4830a0['kgxBJ']);_0x49499c['style']['displ'+'ay']=_0x7c3378?'':'none',_0x21f390(_0x4830a0[_0x21fe00(0x5fa)])[_0x21fe00(0x2a0)+'onten'+'t']=_0x7c3378?'-':'+';};return document[_0x40bf67(0x84b)]['appen'+_0x40bf67(0x79e)+'d'](_0x3606a6),_0x2990ce={'el':_0x3606a6,'st':_0x800197,'st2':_0xf53944,'sp':_0xf09b14,'fx':_0x416890,'fv':_0x228de2,'esp':_0x2a7a43},_0x2990ce;}catch(_0x120d7c){return console['warn'](_0x4830a0[_0x40bf67(0x475)],_0x4830a0['bpFyt'](_0x40bf67(0xccd)+':',_0xf63150),_0x120d7c),null;}}function _0x3ccc4d(){var _0x46c4e1=_0x3b5618;try{var _0x1f0d2f=_0x3a5a5d();return!!(_0x1f0d2f&&_0x5d05c4[_0x46c4e1(0x53e)+'ified']);}catch(_0x2111e2){return![];}}function _0x2c1f84(){var _0x5ba394=_0x3b5618;try{var _0x162905=_0x2990ce&&_0x2990ce[_0x5ba394(0x787)];if(!_0x162905)return;if(_0x1c4e9c['boxes']&&!_0x4830a0['YahdD'](_0x3ccc4d))_0x1c4e9c['boxes']=![];var _0x1249c7=!_0x1c4e9c['on']?_0x4830a0[_0x5ba394(0x970)]:_0x1c4e9c['boxes']?'ESP\x20b'+'oth':_0x4830a0['LFeVf'];if(_0x1249c7!==_0x162905[_0x5ba394(0x2a0)+'onten'+'t'])_0x162905['textC'+'onten'+'t']=_0x1249c7;_0x162905['style'][_0x5ba394(0x7e1)+_0x5ba394(0x8dd)]=_0x1c4e9c['on']?_0xf63150:'trans'+_0x5ba394(0x406)+'t',_0x162905[_0x5ba394(0x86d)][_0x5ba394(0xccd)]=_0x1c4e9c['on']?_0x5ba394(0xc4b)+'1b':_0x5ba394(0x64c)+'f5';}catch(_0x2e0be7){}}function _0x2d1a41(_0x1eb4c7,_0x3f81ee){var _0x39e512=_0x3b5618;_0x1c4e9c['on']=!!_0x1eb4c7,_0x1c4e9c['boxes']=!!_0x3f81ee,_0x2c1f84();try{var _0x5784a7=_0x4830a0[_0x39e512(0x3d6)](_0x47e4c2);if(_0x5784a7&&_0x5784a7['el'])_0x5784a7['el'][_0x39e512(0x86d)][_0x39e512(0x95b)+'ay']=_0x1c4e9c['on']?'':_0x4830a0['kgxBJ'];var _0x41e8fa=_0x51561f;if(_0x41e8fa&&_0x41e8fa['cv'])_0x41e8fa['cv'][_0x39e512(0x86d)][_0x39e512(0x95b)+'ay']=_0x1c4e9c['on']&&_0x1c4e9c[_0x39e512(0x96d)]?'':_0x39e512(0xa29);}catch(_0x395084){}}var _0x382441=0xec3+0x916+-0x17d7;function _0x17e3ce(_0x3a1145,_0x1eae2c){var _0x6e962f=_0x3b5618,_0x286494=(_0x6e962f(0xd35)+'|1|3|'+_0x6e962f(0x32f))[_0x6e962f(0x8a1)]('|'),_0x2af441=0x1651*0x1+-0x1012+-0x63f;while(!![]){switch(_0x286494[_0x2af441++]){case'0':_0x328f9c['on']=!!_0x3a1145;continue;case'1':_0x328f9c[_0x6e962f(0x5db)+'r']=Math['min'](_0x328f9c['max'],Math[_0x6e962f(0x8ae)](_0x328f9c[_0x6e962f(0xc28)],Number(_0x1eae2c)||-0x1*-0x2461+0x15a8+0x8*-0x741));continue;case'2':if(_0x19beda){_0x19beda['sp']&&(_0x19beda['sp']['textC'+_0x6e962f(0x3b9)+'t']=_0x328f9c['on']?_0x6e962f(0x2ed)+_0x6e962f(0x4fa):_0x6e962f(0x2ed)+'\x20off',_0x19beda['sp'][_0x6e962f(0x86d)][_0x6e962f(0x7e1)+_0x6e962f(0x8dd)]=_0x328f9c['on']?_0xf63150:_0x6e962f(0x934)+_0x6e962f(0x406)+'t',_0x19beda['sp'][_0x6e962f(0x86d)]['color']=_0x328f9c['on']?_0x6e962f(0xc4b)+'1b':_0x4830a0['JDDuM']);if(_0x19beda['fx'])_0x19beda['fx']['value']=String(_0x328f9c['facto'+'r']);if(_0x19beda['fv'])_0x19beda['fv'][_0x6e962f(0x2a0)+'onten'+'t']=_0x328f9c[_0x6e962f(0x5db)+'r']['toFix'+'ed'](0x1661+0x13*-0x164+0x40c)+'x';}continue;case'3':if(!_0x328f9c['on'])_0xfe740c={};continue;case'4':var _0x19beda=_0x4830a0['YahdD'](_0x5b6492);continue;case'5':_0x328f9c['on']&&!_0x358ffb&&(_0x4830a0['GNdni'](_0x1eae2c,undefined)||_0x1eae2c===null||_0x4830a0[_0x6e962f(0x51c)](Number(_0x1eae2c),0x52*-0x5+-0x1df2+0xc5*0x29))&&(_0x1eae2c=_0x382441);continue;case'6':var _0x358ffb=_0x328f9c['on'];continue;}break;}}function _0x20d6c2(_0x47cbc3){var _0x40fb71=_0x3b5618,_0x1170c7=_0x4830a0[_0x40fb71(0x3d6)](_0x5b6492);if(!_0x1170c7||!_0x1170c7['st'])return;try{if(!_0x212618()&&!_0xdb433){if(_0x1170c7['el'])_0x1170c7['el'][_0x40fb71(0x86d)][_0x40fb71(0x95b)+'ay']=_0x4830a0[_0x40fb71(0x72d)];return;}if(_0x1170c7['el'])_0x1170c7['el']['style']['displ'+'ay']='';var _0x428c4e=Object['keys'](_0x47cbc3&&_0x47cbc3[_0x40fb71(0x57b)+_0x40fb71(0x989)]||{})[_0x40fb71(0x853)+'h'],_0xc5863c=_0x47cbc3&&_0x47cbc3[_0x40fb71(0x787)]||null,_0x198066=_0xc5863c?_0xc5863c[_0x40fb71(0xad3)+'Count']||-0x51*0x3f+-0x1f*0x15+0x167a:0xb*0x182+-0x52*0x41+0x43c,_0x570d07=_0xc5863c?_0xc5863c[_0x40fb71(0x250)+'unt']||-0x140+0x32*-0x20+0xf*0x80:0x1*-0x1692+-0x147a+0x5*0x89c,_0x7cd9fb=_0x1a58cb?_0x4830a0['gdsHB'](_0x1a58cb['buffe'+'r']['byteL'+_0x40fb71(0xcfe)],0xec542+0xef*0x15ba+0x1*-0x130de8)[_0x40fb71(0xa08)+'ed'](0x1cae+-0x182*0x1+-0x1b2c)+'MB':_0x40fb71(0x98f)+'m',_0x2165b7=_0x4830a0[_0x40fb71(0xb89)](_0x4830a0[_0x40fb71(0xa00)](_0x4830a0[_0x40fb71(0x833)](_0x4830a0[_0x40fb71(0x50f)]('v',_0x47cbc3&&_0x47cbc3[_0x40fb71(0x9f3)+'on']||_0x5c1a61),'\x20\x20hoo'+'ks\x20'),_0x47cbc3&&_0x47cbc3[_0x40fb71(0xc64)+'Appli'+'ed']||-0x9*-0x19+-0x2*-0x67e+-0xddd)+'/'+(_0x47cbc3&&_0x47cbc3[_0x40fb71(0xc64)+_0x40fb71(0x8ec)]||-0x2319+-0x1bec+-0x11*-0x3b5)+('\x20\x20obj'+'s\x20'),_0x428c4e)+(_0x40fb71(0x845)+'\x20')+_0x7cd9fb+_0x4830a0[_0x40fb71(0x4fb)]+_0x177880;_0x1170c7['st']['textC'+'onten'+'t']=_0x2165b7;var _0x1054a5=_0x1170c7['st2'];_0x1054a5&&(_0x1054a5[_0x40fb71(0x2a0)+_0x40fb71(0x3b9)+'t']=_0x198066>-0x3ad*0x1+-0x17a1+0x1b4e?_0x4830a0['yCApc'](_0x4830a0['yhtnU'],_0x198066)+(_0x570d07?_0x4830a0[_0x40fb71(0xb8f)](_0x4830a0[_0x40fb71(0x7f9)](_0x40fb71(0x5cc),_0x570d07),_0x40fb71(0x5ef)):'')+(_0xc5863c&&_0xc5863c[_0x40fb71(0x77c)+'a']?_0x40fb71(0x998)+'\x20'+_0xc5863c[_0x40fb71(0x77c)+'aFrom']:_0x4830a0['fBcar']):_0x40fb71(0x766)+_0x40fb71(0xd38)+_0x40fb71(0x67f)+'(lobb'+'y?)\x20\x20'+'cam\x20'+(_0xc5863c&&_0xc5863c['camer'+'a']?_0xc5863c[_0x40fb71(0x77c)+_0x40fb71(0x8ad)]:'-'),_0x1054a5['style'][_0x40fb71(0xccd)]=_0x198066>-0x16*-0x1a6+0x1*-0x1ada+0xa*-0xf1?_0x40fb71(0x290)+'a8':_0x4830a0[_0x40fb71(0x22b)]);}catch(_0x416af7){}}window['addEv'+'entLi'+'stene'+'r'](_0x4830a0[_0x3b5618(0xc44)],function(_0x3c7686){var _0x150613=_0x3b5618,_0x4f7dcc={'iXmbV':function(_0x29144e,_0x4c2a71){var _0x11d6ac=_0x1d88;return _0x4830a0[_0x11d6ac(0xa7c)](_0x29144e,_0x4c2a71);},'GkrJG':'i32','GxKOq':function(_0x1adc79,_0x117833){return _0x1adc79+_0x117833;},'zYJol':function(_0x266204,_0x36477c,_0xdbc8e1){return _0x4830a0['IdwBg'](_0x266204,_0x36477c,_0xdbc8e1);},'OboZE':function(_0x56a4ef,_0x96168){return _0x56a4ef===_0x96168;},'usnZo':_0x150613(0xd49),'IoyiA':_0x4830a0['KZzdZ'],'lzFKo':function(_0x34272b,_0x97d12e,_0x37aac8){return _0x34272b(_0x97d12e,_0x37aac8);},'UaLWj':function(_0x4e7de5,_0x15689b){var _0x21471e=_0x150613;return _0x4830a0[_0x21471e(0xa6b)](_0x4e7de5,_0x15689b);},'lAtFe':function(_0x2a0a16,_0x47aed2){var _0x485a35=_0x150613;return _0x4830a0[_0x485a35(0x80f)](_0x2a0a16,_0x47aed2);},'PRzho':function(_0xa31809,_0x3a669d){return _0xa31809&_0x3a669d;},'uUpmR':function(_0x200cb1,_0x317cef){var _0x84a2fe=_0x150613;return _0x4830a0[_0x84a2fe(0x549)](_0x200cb1,_0x317cef);},'LebET':function(_0xa2e7bf,_0x1868d4){var _0x5ccbce=_0x150613;return _0x4830a0[_0x5ccbce(0x403)](_0xa2e7bf,_0x1868d4);},'VxlTP':function(_0x18c098){return _0x18c098();}};if(_0x4830a0[_0x150613(0x49d)](_0x4830a0[_0x150613(0x80b)],_0x150613(0x3ce))){if(!_0x3c7686)return;try{if(_0x4830a0[_0x150613(0x944)]!=='Rdcag'){if(_0x3c7686[_0x150613(0xc29)]==='F9'){if(_0x4830a0[_0x150613(0x5c1)](_0x150613(0x8bc),'wiAQz')){_0x3c7686[_0x150613(0xc5f)+_0x150613(0xc67)+_0x150613(0x746)](),_0x287a45(_0x150613(0xc82)+_0x150613(0x209));return;}else{var _0x52aec2=_0x361c4f[_0x150613(0x36f)+'WebMo'+'dkit']&&_0x48848a[_0x150613(0x36f)+'WebMo'+'dkit']['Runti'+'me'];if(!_0x52aec2||typeof _0x52aec2['creat'+_0x150613(0xd22)+'in']!=='funct'+_0x150613(0x9fd)){_0x74964c[_0x150613(0x615)]=_0x150613(0xa13)+_0x150613(0xb6d)+_0x150613(0x1db)+_0x150613(0x3ad)+_0x150613(0x5aa)+_0x150613(0x931)+'le';return;}_0x367c23[_0x150613(0x4bf)+_0x150613(0xa32)]=!![],_0x1e4736=_0x52aec2['creat'+'ePlug'+'in']({'name':_0x4830a0['LavMu'],'version':_0x2bb509,'referencedAssemblies':_0x306579[_0x150613(0x1d7)]()}),_0x7b60c2['ok']=!![];try{var _0x3fd2f7=_0x3fb6a6['Unity'+_0x150613(0xa86)+'dkit'][_0x150613(0xa13)+'me'];_0x3fd2f7['__sak'+'uraTa'+'g']=_0x97b552+':'+_0x5d938c['rando'+'m']()[_0x150613(0x8a8)+_0x150613(0x9f5)](0x9cb+-0xcee+0x347*0x1)['slice'](0x10f*0x1c+0x2192+0x652*-0xa,-0x2*-0x684+0x62c+-0x132a),_0x54c7ba=_0x3fd2f7[_0x150613(0x688)+_0x150613(0xaee)+'g'];}catch(_0x206f04){}_0x537dc2(),_0x4830a0[_0x150613(0xab6)](_0x526b15),_0x39b67a[_0x150613(0xc64)+_0x150613(0xaac)+'tered']=_0x123168['lengt'+'h'],_0x4830a0['WjYLw'](_0x605a29),_0x1b9ab9['memor'+_0x150613(0x960)]=!![];}}if(_0x3c7686[_0x150613(0xc29)]==='F7'){if(_0x150613(0xb80)===_0x4830a0['fFVJU']){_0x3c7686['preve'+'ntDef'+_0x150613(0x746)](),_0x17e3ce(!_0x328f9c['on'],_0x328f9c[_0x150613(0x5db)+'r']);return;}else{var _0x481459=_0x2a0881[_0x1648e3];if(!_0x481459)return null;var _0x2e57bd=_0x4eecae(_0x4f7dcc[_0x150613(0x79a)](_0xb465ec,_0x2ec795)+_0x481459['key'],'u8'),_0xcf100e=_0x416d80(_0x4f7dcc[_0x150613(0x79a)](_0x15c249,_0x54ea38)+_0x481459[_0x150613(0x779)+'n'],_0x4f7dcc['GkrJG']),_0x1d68eb=_0x52a4b8(_0x4f7dcc['GxKOq'](_0x2f94b9+_0x374b3b,_0x481459[_0x150613(0x3f7)+'d']),'u8'),_0x21c92c=_0x4f7dcc[_0x150613(0x2b1)](_0x54d949,_0x585f19+_0x3119b6+_0x481459[_0x150613(0x389)],_0x4f7dcc[_0x150613(0xa0b)](_0x2cef70,'obfF')?_0x4f7dcc[_0x150613(0xa60)]:_0x13f3b1===_0x4f7dcc[_0x150613(0x498)]?_0x150613(0x7f5):'u8'),_0x1d31f1=_0x4f7dcc['lzFKo'](_0x326c4b,_0x4f7dcc[_0x150613(0x4e6)](_0x4f7dcc[_0x150613(0xc4d)](_0x43ad00,_0x1e8bf9),_0x481459['activ'+'e']),'u8');if(_0x2e57bd===_0x37ab48||_0x4f7dcc['lAtFe'](_0xcf100e,_0x4197e2)||_0x4f7dcc['lAtFe'](_0x21c92c,_0x26c9aa)||_0x1d31f1===_0xc57e25)return null;_0x2e57bd&=-0x1*0xa99+-0x1853+0x23eb*0x1,_0xcf100e|=0x1709*-0x1+0x829*0x1+0xee0,_0x1d68eb=_0x4f7dcc[_0x150613(0x4d2)](_0x1d68eb||-0x1a*-0x12e+-0xbaf+-0x1*0x12fd,0x475+0x249b+-0x1c9*0x17),_0x1d31f1&=0xd14+-0xd03+-0x10;var _0x4f9a33;if(_0x3be0d3===_0x150613(0x23d))_0x4f9a33=_0x329a31(_0xcf100e^_0x2e57bd);else{if(_0x3df41d===_0x4f7dcc[_0x150613(0x498)])_0x4f9a33=_0xcf100e^_0x2e57bd|0x1cae+-0x3*0x731+-0x71b;else _0x4f9a33=_0x4f7dcc['uUpmR'](_0x4f7dcc['LebET'](_0xcf100e,_0x2e57bd)&-0x1*0x1f0b+-0xdea+-0xad*-0x44,-0x114d+0x1441+-0x2f4)?0xb*-0x30a+-0x200f*-0x1+0x160:0x38e*0x3+-0x6d1+-0x3d9;}return{'real':_0x4f9a33,'fake':_0x21c92c,'act':_0x1d31f1,'init':_0x1d68eb,'key':_0x2e57bd,'hidden':_0xcf100e};}}if(_0x3c7686[_0x150613(0xc29)]==='F8'){if(_0x4830a0['exiXm'](_0x4830a0['UglgS'],_0x4830a0[_0x150613(0x2be)])){_0x3c7686['preve'+_0x150613(0xc67)+'ault'](),_0x17e3ce(_0x328f9c['on'],_0x328f9c[_0x150613(0x5db)+'r']+(0x170c+-0x1*0x20c5+0x9b9*0x1+0.5));return;}else _0x33a279[_0x150613(0x87e)+_0x150613(0x359)]['write'+_0x150613(0xc66)](_0x55375a)[_0x150613(0xb5d)](function(){var _0x41fa17=_0x150613;_0x56538c[_0x41fa17(0x2a0)+'onten'+'t']=_0x41fa17(0x878)+'d';});}if(_0x4830a0['OFmBH'](_0x3c7686[_0x150613(0xc29)],'F6')){if(_0x4830a0[_0x150613(0x5e2)]===_0x4830a0['fogPT']){var _0x5f08df=_0x46c00c(_0x150613(0xb3f)+_0x150613(0x60b)+_0x150613(0x4c0),_0x52f687[_0x96bcba[_0x24eaa7]]['ptr']);_0x5f08df['hits']=_0x3bb655[_0x1e908a[_0x372cf4]][_0x150613(0x8f7)],_0x5f08df[_0x150613(0xcf3)+'al']=_0x647d99[_0xde0451[_0x1f869f]][_0x150613(0xc63)]===_0x16e7d5,_0x429b02['contr'+'oller'+'s']['push'](_0x5f08df);}else{_0x3c7686[_0x150613(0xc5f)+'ntDef'+_0x150613(0x746)](),_0x4830a0[_0x150613(0x6bc)](_0x17e3ce,_0x328f9c['on'],_0x328f9c[_0x150613(0x5db)+'r']-(0x1*-0x2e3+0x37*-0x47+0x1224+0.5));return;}}if(_0x4830a0['OFmBH'](_0x3c7686[_0x150613(0xc29)],_0x150613(0x27c)+'t')){if('pgZvA'===_0x4830a0[_0x150613(0x48d)]){var _0x16e848=_0x4830a0[_0x150613(0xd0b)][_0x150613(0x8a1)]('|'),_0x24e64c=0xd*0x18+0x17d1+0x11*-0x179;while(!![]){switch(_0x16e848[_0x24e64c++]){case'0':return{'identified':_0x340559[_0x150613(0x53e)+'ified'],'why':_0x1588ab['why'],'source':_0x19404b['sourc'+'e'],'yawAt':_0x1989bb['yawGe'+_0x150613(0x497)]||_0x4830a0['uvaMa'],'pitchAt':_0x1f2e36[_0x150613(0x913)+_0x150613(0x9e2)+'r']||_0x150613(0x776)+'(gues'+'s)','getters':_0x5e1364['gette'+'rs'],'rawPitch':_0x22be7e[_0x150613(0x66f)+_0x150613(0x9a4)],'rawYaw':_0x905fcd[_0x150613(0x79c)+'w'],'pitch':_0x15aebf[_0x150613(0x913)],'yaw':_0x16a4bd[_0x150613(0x202)],'pitchOff':_0x1ccdfd[_0x150613(0x913)+'Off'],'yawOff':_0x5df562[_0x150613(0x569)+'f'],'fov':_0x424db5['fov'],'fovSane':_0x3c2324['fov']>=0x47f*-0x7+-0x19eb+0x39a0&&_0x5bf52f[_0x150613(0x7cd)]<=0x3*-0x92b+-0x2b*-0x4+-0x1*-0x1b43,'centreX':_0x40a066,'centreY':_0x63e214};case'1':var _0x51f24f=_0x3831fe();continue;case'2':var _0x40a066=null,_0x63e214=null;continue;case'3':var _0xdec84e=_0x4830a0[_0x150613(0x8a9)](_0x324d26);continue;case'4':if(_0xdec84e){var _0x5b9a03=_0x5c9ff1(_0xdec84e[_0x150613(0x419)],[_0xdec84e[_0x150613(0x419)][-0x3*0xa2b+0xb3*0x2d+-0xf6],_0xdec84e['eye'][-0x1*-0xfc8+-0x17e7*0x1+-0x20*-0x41],_0x4830a0[_0x150613(0x459)](_0xdec84e[_0x150613(0x419)][0x807+-0x1162+0x95d],-0x30*0x1+-0x1*-0x20c3+0xb*-0x2f6)],-0x26f2+0x1c44+0x2*0x74b,-0x986+-0x163a+0x23a8);_0x5b9a03&&(_0x40a066=_0x4830a0['aGJWc'](_0x5b9a03['x'],0x27*-0x76+0x980+0x631*0x2),_0x63e214=_0x5b9a03['y']/(-0x109*-0xa+0x1f3d+-0x25af));}continue;}break;}}else{_0x3c7686['preve'+_0x150613(0xc67)+'ault'](),_0x4830a0['HFBGZ'](_0x2619d5,!_0x4718de['open']);return;}}if(_0x3c7686[_0x150613(0xc29)]===_0x150613(0x6ae)+_0x150613(0x433)+'ht'){_0x3c7686['preve'+'ntDef'+_0x150613(0x746)](),_0x4b6821[_0x150613(0x7cd)]=Math[_0x150613(0xc28)](0x8c6+0x118b+0x9*-0x2dd,_0x4b6821['fov']+(0x6e*0x55+-0x11d7+-0x12ad)),_0x4830a0[_0x150613(0xaae)](_0x110724);return;}if(_0x3c7686[_0x150613(0xc29)]===_0x150613(0x6ae)+'etLef'+'t'){if(_0x150613(0x72a)===_0x150613(0x41c))_0x346ceb(_0x4d8a7a,_0x39b11c[_0x150613(0x96d)]);else{_0x3c7686[_0x150613(0xc5f)+_0x150613(0xc67)+'ault'](),_0x4b6821['fov']=Math['max'](-0x1663+0x4ae*-0x6+0x3295,_0x4b6821[_0x150613(0x7cd)]-(0x13d1+0x3*-0x506+-0x4bd*0x1)),_0x4830a0[_0x150613(0x9c1)](_0x110724);return;}}}else return _0x4a282e['span'];}catch(_0x2a32dc){}}else try{var _0x2324b8=_0x4f7dcc['VxlTP'](_0x42bfda);return _0x2324b8&&_0x2324b8['feet']?_0x2324b8['feet'][-0x236e+-0x1bf5+0x3f64]:null;}catch(_0x1bdaef){return null;}},!![]);var _0x1c4e9c={'on':!![],'span':0x50,'boxes':![]};function _0x785804(){var _0xf5a61b=_0x3b5618,_0x4c435b=_0x42506f[_0xf5a61b(0xd7b)+_0xf5a61b(0xa2c)+'orkSy'+'nc']||{},_0x46744d=Object['keys'](_0x4c435b);for(var _0x4dae19=-0x1*0xeb1+0x6f1+0x7c0;_0x4dae19<_0x46744d['lengt'+'h'];_0x4dae19++){var _0x497aaa=_0x4c435b[_0x46744d[_0x4dae19]]['ptr'],_0x36ac4a=_0x118468(_0x4830a0['PHLue'](_0x497aaa,-0x18f8*0x1+-0x1*-0x2635+-0xd0d),_0xf5a61b(0x835));if(!_0x36ac4a)continue;var _0x46e53d=_0xf4ed7['Mouse'+_0xf5a61b(0x55a)]||[],_0x1ba026={'mouseLook':'0x'+(_0x36ac4a>>>0x1907+-0x4*0x47+-0x17eb)[_0xf5a61b(0x8a8)+'ing'](0x249e+0x9e*-0x1+0x2e*-0xc8),'floats':{},'camera':null,'vec2':null};for(var _0x102e0d=-0x2*-0x3c7+0x2*-0xf75+0x175c;_0x4830a0[_0xf5a61b(0x986)](_0x102e0d,_0x46e53d['lengt'+'h']);_0x102e0d++){if(_0x46e53d[_0x102e0d][-0x1037+0x1af+-0x1*-0xe89]!==_0xf5a61b(0xd49))continue;_0x1ba026[_0xf5a61b(0x927)+'s'][_0x4830a0[_0xf5a61b(0x619)]('0x',_0x46e53d[_0x102e0d][-0xc12+-0x1*0x523+-0x371*-0x5]['toStr'+_0xf5a61b(0x9f5)](0x1ff4*0x1+0x21a9+-0xad*0x61))]=_0x4830a0['REeXy'](_0x118468,_0x36ac4a+_0x46e53d[_0x102e0d][-0x21a*-0x3+-0x122*0x13+0x79c*0x2],_0x4830a0['VbJIe']);}var _0xfa96b8=_0x4830a0[_0xf5a61b(0x601)](_0x118468,_0x4830a0['ezEVn'](_0x36ac4a,-0x279*-0x2+-0x21e4+0x2*0xe8f),_0x4830a0['xNURH']);if(_0xfa96b8)_0x1ba026[_0xf5a61b(0x77c)+'a']='0x'+(_0xfa96b8>>>-0xbc2*0x1+-0x3d1*0x5+-0x1ed7*-0x1)[_0xf5a61b(0x8a8)+_0xf5a61b(0x9f5)](-0x3b*0x1f+-0x25eb+0x2d20);var _0x53c803=_0x4830a0['QIEdL'](_0x32a80c,_0x36ac4a,0xd9*-0xe+-0x953+0x1579*0x1,0xc*0x2b6+-0x25*0x8a+-0xe6*0xe);if(_0x53c803)_0x1ba026[_0xf5a61b(0x9a6)]=_0x53c803;return _0x1ba026;}return null;}var _0x896921=_0x3b5618(0x978)+_0x3b5618(0xaeb)+_0x3b5618(0x7cd),_0x5255e9=_0x4830a0['BXNSq'],_0x4b6821={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{if(_0x4830a0[_0x3b5618(0x373)](_0x4830a0[_0x3b5618(0x41f)],_0x4830a0[_0x3b5618(0x591)])){_0x22b62d[_0x3b5618(0xc5f)+_0x3b5618(0xc67)+_0x3b5618(0x746)](),_0x2bce29(_0x3b5618(0xc82)+_0x3b5618(0x209));return;}else{var _0x423d1e=localStorage[_0x3b5618(0xa27)+'em'](_0x896921);if(_0x423d1e)_0x4b6821[_0x3b5618(0x7cd)]=Math[_0x3b5618(0xc28)](-0x133d*-0x1+0x183f+0x30*-0xe5,Math[_0x3b5618(0x8ae)](0x2275+-0xc3*0x4+-0x1f4b,_0x4830a0[_0x3b5618(0xb4a)](parseFloat,_0x423d1e)||0xfc1+0x14f*-0x6+-0x1*0x78d));}}catch(_0x21adab){}try{var _0x5c5d9f=localStorage['getIt'+'em'](_0x5255e9);if(_0x5c5d9f){var _0x4d7c66=JSON[_0x3b5618(0xa85)](_0x5c5d9f);if(typeof _0x4d7c66['y']===_0x3b5618(0x9fc)+'r'&&isFinite(_0x4d7c66['y']))_0x4b6821[_0x3b5618(0x569)+'f']=_0x4d7c66['y'];if(_0x4830a0['ZmeRC'](typeof _0x4d7c66['p'],_0x4830a0[_0x3b5618(0xcdb)])&&isFinite(_0x4d7c66['p']))_0x4b6821['pitch'+_0x3b5618(0x7dc)]=_0x4d7c66['p'];}}catch(_0x2f7bb1){}function _0x110724(){var _0x55925a=_0x3b5618,_0x1a41d9={'XOiEi':function(_0x3a96a0,_0x4623e3){return _0x3a96a0+_0x4623e3;},'oozhk':'paddi'+'ng:4p'+_0x55925a(0x6d3)+_0x55925a(0xbcf)+_0x55925a(0x948)+_0x55925a(0xae8)+_0x55925a(0xcfa)+_0x55925a(0xa0c)+_0x55925a(0x344)+_0x55925a(0xb9a)+_0x55925a(0x49b)+_0x55925a(0xc0f)+_0x55925a(0x598)+'bda9c'+'9;','zDTqx':function(_0xf986f1,_0x505b62){var _0x5148fe=_0x55925a;return _0x4830a0[_0x5148fe(0x917)](_0xf986f1,_0x505b62);},'gDDTr':_0x55925a(0x582)+'as\x20id'+_0x55925a(0x8ca)+_0x55925a(0x608)+_0x55925a(0xce3)+'\x22\x20wid'+_0x55925a(0x983)+_0x55925a(0x4d3)+'eight'+'=\x22160'+'\x22\x20sty'+'le=\x22d'+_0x55925a(0x96a)+_0x55925a(0x813)+'ck\x22><'+_0x55925a(0x291)+'as>','MUjdY':'<div\x20'+'id=\x22s'+'akura'+'-esp-'+'lg\x22\x20s'+_0x55925a(0x72e)+_0x55925a(0xac6)+'-alig'+_0x55925a(0xcfd)+_0x55925a(0x22f)+'</div'+'>'};if(_0x4830a0['GNdni']('OwVHb',_0x55925a(0xac8))){if(!_0x2f13d4['body']||!_0x2bb7db['body'][_0x55925a(0x69b)+'dChil'+'d'])return null;var _0x226fa1=_0x209cbf['creat'+'eElem'+'ent'](_0x55925a(0xc6f));_0x226fa1['id']='sakur'+_0x55925a(0x8af),_0x226fa1['style'][_0x55925a(0xd9e)+'xt']=_0x1a41d9[_0x55925a(0xca6)]('posit'+'ion:f'+_0x55925a(0x3fe)+'right'+_0x55925a(0x68b)+_0x55925a(0xb77)+_0x55925a(0x2ff)+'z-ind'+_0x55925a(0xb41)+'47483'+_0x55925a(0x91d)+'ointe'+'r-eve'+'nts:n'+_0x55925a(0x5b1)+(_0x55925a(0x7e1)+'round'+_0x55925a(0x624)+_0x55925a(0x522)+'2,29,'+_0x55925a(0x347)+_0x55925a(0x68a)+'r:1px'+_0x55925a(0x66a)+_0x55925a(0x701)+_0x55925a(0x229)+',143,'+_0x55925a(0x635)+'4);bo'+_0x55925a(0xdc1)+'radiu'+'s:10p'+'x;')+_0x1a41d9['oozhk'],_0x55925a(0x919)+_0x55925a(0xb57)+_0x55925a(0x56f)+'e;-we'+_0x55925a(0x568)+_0x55925a(0x919)+'selec'+_0x55925a(0x56f)+'e;'),_0x226fa1[_0x55925a(0x34b)+_0x55925a(0x802)]=_0x1a41d9[_0x55925a(0xc1d)](_0x1a41d9[_0x55925a(0xa0f)],_0x1a41d9[_0x55925a(0x2c1)]);var _0x128a15={'cv':{'getContext':function(){return null;}},'el':_0x226fa1};_0x3824bc['body'][_0x55925a(0x69b)+'dChil'+'d'](_0x226fa1),_0x5b11fc={'el':_0x226fa1,'cv':_0x226fa1['query'+'Selec'+_0x55925a(0x390)]('#saku'+_0x55925a(0x91a)+_0x55925a(0x6c9)),'lg':_0x226fa1['query'+_0x55925a(0xdb3)+'tor'](_0x55925a(0x9b7)+_0x55925a(0x91a)+_0x55925a(0x3ab))};if(!_0x3dab5c['cv']||!_0x46fc82['cv'][_0x55925a(0xa48)+_0x55925a(0x680)])_0x100e95=_0x128a15;return _0x1e78c2;}else try{localStorage['setIt'+'em'](_0x896921,String(_0x4b6821[_0x55925a(0x7cd)]));}catch(_0x51fae4){}}function _0x37f5a8(){var _0xeb53b0=_0x3b5618;try{localStorage['setIt'+'em'](_0x5255e9,JSON['strin'+'gify']({'y':_0x4b6821[_0xeb53b0(0x569)+'f'],'p':_0x4b6821[_0xeb53b0(0x913)+'Off']}));}catch(_0x568084){}}var _0x163eb8=-0xbb*-0x1d+0x2f8+-0x17ff*0x1,_0xf54465=0x1*-0x2ed+0x1+0x308,_0x163eb8=-0x1529+-0x2419+-0x1*-0x396a,_0xf54465=0x1a71+-0x5cd+-0x1488,_0x5d05c4={'pitch':null,'yaw':null,'identified':![],'why':'no\x20Mo'+_0x3b5618(0x697)+_0x3b5618(0xd6c)+'t','source':null,'yawGetter':null,'pitchGetter':null,'getters':[]};function _0x3016f4(_0x14a34c){var _0x2bd3be=_0x3b5618,_0x563748={'GyFXx':_0x2bd3be(0x536)+_0x2bd3be(0x537)+_0x2bd3be(0x3f2)+'6,.95'+')','vLXRL':function(_0x42b8da,_0x246297){return _0x42b8da/_0x246297;},'xEmxn':function(_0x99fbf7,_0x3adc59){return _0x4830a0['mwYFw'](_0x99fbf7,_0x3adc59);}},_0x3fba0f=null,_0x106d52=-0x4*-0x83+0x29*0x44+-0x1*0xcf0;for(var _0x48927e in _0x5a137b){var _0x41806b=_0x5a137b[_0x48927e];if(!_0x41806b[_0x2bd3be(0x8f7)]||_0x41806b[_0x2bd3be(0xad8)]===null)continue;var _0x136428=_0x118468(_0x35c7f2+_0x14a34c,_0x4830a0[_0x2bd3be(0xc18)]);if(typeof _0x136428!==_0x2bd3be(0x9fc)+'r')continue;Math[_0x2bd3be(0xaef)](_0x41806b[_0x2bd3be(0xad8)]-_0x136428)<-0x18ac+-0x6*-0x633+-0x1*0xc86+0.001&&_0x4830a0[_0x2bd3be(0xb94)](_0x41806b[_0x2bd3be(0x8f7)],_0x106d52)&&(_0x4830a0[_0x2bd3be(0x659)]!==_0x2bd3be(0x9cb)?(_0x2c2321[_0x2bd3be(0x38f)+'tyle']=_0x563748[_0x2bd3be(0xc25)],_0x2f5329[_0x2bd3be(0x5cb)]='10px\x20'+_0x2bd3be(0x695)+_0x2bd3be(0x49b)+_0x2bd3be(0x8d3)+'nsola'+_0x2bd3be(0xb73)+_0x2bd3be(0xdbd)+'e',_0x1c04d9[_0x2bd3be(0x441)+'ext'](_0x3674dc[_0x2bd3be(0x8dd)](_0x2fa304['d']||0x2158+0x2f*0x71+-0xe3*0x3d)+'m',_0x4c9b85-_0x563748[_0x2bd3be(0x7e7)](_0x29266e,-0x1df1+0x7*-0x522+0x41e1),_0x563748['xEmxn'](_0x563748[_0x2bd3be(0x713)](_0x4e6b50,_0x563748[_0x2bd3be(0x7e7)](_0x24bdb4,-0x2a7+-0x1b96+-0x10b*-0x1d)),-0x56*0x16+-0x25b+0x9c2))):(_0x3fba0f=_0x48927e,_0x106d52=_0x41806b['hits']));}return _0x3fba0f;}function _0x181af9(_0xc88c87){var _0x3e5c5e=_0x3b5618,_0x598a56=[],_0x58a8e0=_0xf4ed7['Mouse'+'Look']||[];for(var _0x5c1820 in _0x5a137b){var _0x22f486=_0x5a137b[_0x5c1820];if(!_0x22f486['hits'])continue;var _0x33dd93=null;for(var _0x7bb9dc=-0x1ba5+0xc*-0x117+-0x28b9*-0x1;_0x7bb9dc<_0x58a8e0['lengt'+'h'];_0x7bb9dc++){if(_0x4830a0['mEXkn'](_0x58a8e0[_0x7bb9dc][-0x86b*0x1+-0x59e+0xe0a],_0x4830a0['VbJIe']))continue;var _0x3f30a5=_0x4830a0[_0x3e5c5e(0xc34)](_0x118468,_0xc88c87+_0x58a8e0[_0x7bb9dc][-0x1*0x1ea1+-0x2a1+0x2142],_0x4830a0[_0x3e5c5e(0xc18)]);if(_0x4830a0[_0x3e5c5e(0xb79)](typeof _0x3f30a5,_0x4830a0[_0x3e5c5e(0xcdb)])&&Math['abs'](_0x4830a0[_0x3e5c5e(0x777)](_0x3f30a5,_0x22f486['last']))<0x2df+-0x604+0x325+0.001){_0x33dd93='0x'+_0x58a8e0[_0x7bb9dc][0x69f+-0x198d+0x12ee]['toStr'+'ing'](0x24da+0x1a93+-0x1*0x3f5d);break;}}_0x598a56[_0x3e5c5e(0xbb7)]({'name':_0x5c1820,'value':_0x22f486[_0x3e5c5e(0xad8)],'matches':_0x33dd93,'hits':_0x22f486['hits'],'set':_0x22f486[_0x3e5c5e(0xc9d)+'ts']?_0x22f486[_0x3e5c5e(0x511)+'st']:null});}return _0x598a56;}function _0x3a5a5d(){var _0xbf9d25=_0x3b5618,_0x3084f6={'SGfUU':'copy','gMYPc':'texta'+'rea'},_0x5d98f3=_0x785804();if(!_0x5d98f3||!_0x5d98f3[_0xbf9d25(0x2a8)+'Look'])return _0x5d05c4[_0xbf9d25(0x53e)+'ified']=![],_0x5d05c4['why']=_0xbf9d25(0x592)+'useLo'+_0xbf9d25(0xd6c)+'t',null;var _0x4a9c71=_0x4830a0['CIbrs'](parseInt,_0x5d98f3['mouse'+'Look'],0x1*-0x16c2+-0x43f*-0x9+-0xf65);if(_0x35c7f2!==_0x4a9c71)_0x35c7f2=_0x4a9c71;_0x5d05c4[_0xbf9d25(0x720)+'rs']=_0x4830a0[_0xbf9d25(0x916)](_0x181af9,_0x4a9c71);var _0x121246=_0x3016f4(_0x163eb8),_0x5d01ca=null;for(var _0x9dbaef in _0x5a137b){if(_0xbf9d25(0x834)===_0xbf9d25(0x462)){var _0x2d727e=(_0xbf9d25(0x2e1)+_0xbf9d25(0x282)+_0xbf9d25(0xa95))[_0xbf9d25(0x8a1)]('|'),_0x386d07=-0x57f+0xc33+-0x6b4;while(!![]){switch(_0x2d727e[_0x386d07++]){case'0':_0xd6bb5e['selec'+'t']();continue;case'1':_0x341b8d[_0xbf9d25(0x84b)][_0xbf9d25(0x69b)+_0xbf9d25(0x79e)+'d'](_0xd6bb5e);continue;case'2':if(!_0x4c4e25['body'])return;continue;case'3':_0xd6bb5e[_0xbf9d25(0x594)+'e']();continue;case'4':try{_0x513f0f[_0xbf9d25(0x58b)+_0xbf9d25(0x375)+'d'](_0x3084f6['SGfUU']),_0x1a107d();}catch(_0x11cdc2){}continue;case'5':var _0xd6bb5e=_0x56aaf0[_0xbf9d25(0x839)+_0xbf9d25(0xcdd)+_0xbf9d25(0xbdc)](_0x3084f6[_0xbf9d25(0x523)]);continue;case'6':_0xd6bb5e['value']=_0x22795c;continue;}break;}}else{if(_0x9dbaef===_0x121246)continue;var _0x2af504=_0x5a137b[_0x9dbaef];if(!_0x2af504['hits']||_0x2af504[_0xbf9d25(0xad8)]===null)continue;if(_0x4830a0['JidRM'](_0x2af504['last'],-(0x2067+0x8*0x1a1+-0x2d15))&&_0x2af504[_0xbf9d25(0xad8)]<=-0x8af+-0x1fc1+0x28ca){_0x5d01ca=_0x9dbaef;break;}}}_0x5d05c4['yawGe'+'tter']=_0x121246,_0x5d05c4[_0xbf9d25(0x913)+_0xbf9d25(0x9e2)+'r']=_0x5d01ca;var _0x3b7ebf,_0x35798d;_0x121246?(_0x3b7ebf=_0x5a137b[_0x121246][_0xbf9d25(0xad8)],_0x5d05c4[_0xbf9d25(0xc74)+'e']=_0x4830a0['GgUEr']):(_0x3b7ebf=_0x118468(_0x4a9c71+_0x163eb8,_0x4830a0[_0xbf9d25(0xc18)]),_0x5d05c4[_0xbf9d25(0xc74)+'e']=_0x4830a0['PmMIK']);if(_0x5d01ca)_0x35798d=_0x5a137b[_0x5d01ca]['last'];else _0x35798d=_0x118468(_0x4a9c71+_0xf54465,_0xbf9d25(0xd49));_0x5d05c4[_0xbf9d25(0x79c)+'w']=_0x3b7ebf,_0x5d05c4['rawPi'+_0xbf9d25(0x9a4)]=_0x35798d;if(_0x4830a0['xidSy'](typeof _0x3b7ebf,_0xbf9d25(0x9fc)+'r')||!isFinite(_0x3b7ebf)||_0x4830a0['YDUff'](typeof _0x35798d,_0xbf9d25(0x9fc)+'r')||!_0x4830a0['EVbPC'](isFinite,_0x35798d)){if(_0x4830a0['siSYC']('InvOO',_0xbf9d25(0x2c2)))_0x4d5fbe[_0xbf9d25(0x60d)+'eProp'+'erty'](_0x276b93,_0xbf9d25(0x450),{'value':_0x4ba773[_0xbf9d25(0x450)],'configurable':!![]});else return _0x5d05c4['ident'+_0xbf9d25(0xb43)]=![],_0x5d05c4[_0xbf9d25(0x760)]=_0x4830a0['wdwnC'],null;}if(_0x35798d<-(0x1f03+-0x1*-0x1e66+-0x7*0x8b9)||_0x35798d>0x212d+-0xa*-0x141+-0x2d5d){if(_0x4830a0['leSKO']===_0xbf9d25(0x9e4))return _0x5d05c4['ident'+_0xbf9d25(0xb43)]=![],_0x5d05c4[_0xbf9d25(0x760)]=_0x4830a0['DlfHe'](_0xbf9d25(0x913)+'\x20',Math[_0xbf9d25(0x8dd)](_0x35798d))+_0x4830a0[_0xbf9d25(0x8c8)],null;else _0x3272d9['warni'+'ngs'][_0xbf9d25(0xbb7)]('windo'+_0xbf9d25(0xd27)+_0xbf9d25(0x2bc)+_0xbf9d25(0x551)+'t.Val'+'ueWra'+_0xbf9d25(0x65f)+_0xbf9d25(0x311)+'ssing'+'\x20-\x20ca'+_0xbf9d25(0x8fa)+_0xbf9d25(0x709)+_0xbf9d25(0x7ae)+'g\x20bli'+_0xbf9d25(0x6a8));}return _0x5d05c4['why']='',_0x5d05c4['ident'+_0xbf9d25(0xb43)]=!![],_0x5d05c4['pitch']=_0x35798d+_0x4b6821['pitch'+_0xbf9d25(0x7dc)],_0x5d05c4[_0xbf9d25(0x202)]=_0x3b7ebf+_0x4b6821[_0xbf9d25(0x569)+'f'],_0x5d05c4;}function _0x631e84(_0x55f166,_0x4a294,_0x56c4b0,_0x1130d6){var _0x5497e8=_0x3b5618,_0x2df4fb={'WVrcF':function(_0x2cf71c,_0x122723){return _0x4830a0['hbbiG'](_0x2cf71c,_0x122723);},'AfPqu':function(_0x18cd5d,_0x27d13c){var _0x5a4c9a=_0x1d88;return _0x4830a0[_0x5a4c9a(0x80f)](_0x18cd5d,_0x27d13c);},'uUrgv':function(_0x21831f,_0x365265){return _0x21831f<_0x365265;}};if(_0x4830a0['nEdXP']!=='znyYD'){var _0x3aecb3=_0x3a5a5d();if(!_0x3aecb3)return null;var _0x9395ac=_0x4830a0[_0x5497e8(0x254)](_0x3aecb3[_0x5497e8(0x913)],Math['PI'])/(0x1ece+-0x3d1+-0x1a49),_0x36d73a=_0x3aecb3[_0x5497e8(0x202)]*Math['PI']/(-0x6f*0x4d+-0x1ae4+0x3cfb*0x1),_0x1bee82=Math['cos'](_0x9395ac),_0x2421b2=_0x4830a0[_0x5497e8(0x8b0)](Math[_0x5497e8(0x5f8)](_0x36d73a),_0x1bee82),_0x32b546=-Math[_0x5497e8(0x5f8)](_0x9395ac),_0x272426=Math[_0x5497e8(0x847)](_0x36d73a)*_0x1bee82,_0x50aff2=_0x272426,_0x24e520=-0xd77+0xa3b+0x33c,_0x4db455=-_0x2421b2,_0x55752f=_0x4a294[-0x3*0x463+0x71a+-0x60f*-0x1]-_0x55f166[-0x68+-0x883+0x8eb],_0x298fb6=_0x4830a0['wLqvF'](_0x4a294[-0x1ea6+-0x2021+0x8*0x7d9],_0x55f166[0x223b*-0x1+0x2bd+0x1f7f]),_0x5ea048=_0x4a294[0x88b+0xe6+-0x73*0x15]-_0x55f166[-0xdab*-0x1+-0x19c7+-0xc1e*-0x1],_0x4b8ea6=_0x4830a0['Kdamb'](_0x4830a0[_0x5497e8(0xae0)](_0x55752f,_0x2421b2)+_0x298fb6*_0x32b546,_0x5ea048*_0x272426);if(_0x4b8ea6<=0x1e3b+-0x1041+-0xdfa+0.05)return null;var _0xd1c0df=_0x4830a0['VhowZ'](_0x4830a0[_0x5497e8(0xc1b)](_0x55752f*_0x50aff2,_0x4830a0['fdxAI'](_0x298fb6,_0x24e520)),_0x5ea048*_0x4db455),_0x297323=_0x4830a0['bpFyt'](_0x4830a0[_0x5497e8(0x8fd)](_0x55752f,_0x24e520*_0x272426-_0x4830a0[_0x5497e8(0xa1f)](_0x4db455,_0x32b546))+_0x298fb6*_0x4830a0[_0x5497e8(0xade)](_0x4db455*_0x2421b2,_0x50aff2*_0x272426),_0x5ea048*(_0x4830a0[_0x5497e8(0xa1f)](_0x50aff2,_0x32b546)-_0x4830a0[_0x5497e8(0x8fd)](_0x24e520,_0x2421b2))),_0x2cc840=_0x4830a0[_0x5497e8(0x364)](_0x56c4b0,_0x1130d6),_0x258628=_0x4830a0[_0x5497e8(0xa1c)](_0x4b6821[_0x5497e8(0x7cd)]*Math['PI'],0x13bb+-0x1379+-0x72*-0x1),_0x11e865=Math[_0x5497e8(0x20f)](_0x258628/(-0xf80+-0x998+0x191a)),_0x5ae1e3=_0x4830a0[_0x5497e8(0x611)](_0xd1c0df,_0x4b8ea6)/_0x4830a0[_0x5497e8(0x2df)](_0x11e865,_0x2cc840),_0x5e68ea=_0x4830a0[_0x5497e8(0x364)](_0x297323/_0x4b8ea6,_0x11e865);if(_0x4830a0[_0x5497e8(0x41b)](_0x5ae1e3,-(0x23e8+0x47e+-0x17f*0x1b+0.6000000000000001))||_0x4830a0[_0x5497e8(0xb94)](_0x5ae1e3,-0x1*-0x2405+-0xa26+-0x19de+0.6000000000000001)||_0x5e68ea<-(-0x137*-0xf+0x18*-0x39+-0x670*0x2+0.6000000000000001)||_0x5e68ea>-0x1e5f+-0x1*-0x141b+0xb*0xef+0.6000000000000001)return null;return{'x':(_0x4830a0[_0x5497e8(0xcb5)](_0x5ae1e3,0x665*0x2+0x214d+-0x2e17+0.5)+(0x1c8*0x10+-0x26c2*0x1+0xa42+0.5))*_0x56c4b0,'y':_0x4830a0['CYQaF'](_0x4830a0[_0x5497e8(0x643)](0xf74+-0x23af+0x143b+0.5,_0x5e68ea*(0xe49+-0x1e9f+0x29*0x66+0.5)),_0x1130d6),'z':_0x4b8ea6};}else{var _0x1aec3f=_0x5f1781['c'][_0x3d7253]['v'],_0x494c9d=_0x2df4fb[_0x5497e8(0xa45)](_0x1aec3f[0x1bb*0x9+-0x197*-0x11+0x7*-0x616],_0x1aec3f[-0x2350+0x2444+-0xf4])+_0x1aec3f[0x2512+0x9c+-0x96b*0x4]*_0x1aec3f[-0x8b2+-0x2*-0x5d0+0x44*-0xb];(_0x494c9d>_0x38791c||_0x2df4fb[_0x5497e8(0x518)](_0x494c9d,_0x514bda)&&_0x2df4fb['uUrgv'](_0x1aec3f[-0x559+0x95c+0x3*-0x156],_0x75b583['v'][-0x1cf3+-0x5b*0x45+0x357b]))&&(_0x1dc666=_0x494c9d,_0x5d2f9b=_0x5827f7['c'][_0x1b993d]);}}var _0x4718de={'open':![],'cat':'comba'+'t','built':![],'root':null,'cols':null,'head':null,'sub':null,'syncs':[],'pos':null},_0x21a893='sakur'+'a-sw-'+'menu-'+_0x3b5618(0x550),_0xdb433=null,_0x214307=[{'id':_0x3b5618(0x665)+'t','label':_0x4830a0[_0x3b5618(0xbfb)]},{'id':_0x3b5618(0xad6)+'ls','label':_0x3b5618(0x7e2)},{'id':_0x4830a0['beLSO'],'label':_0x3b5618(0xd94)},{'id':_0x3b5618(0x90e),'label':_0x4830a0['hnKVl']}],_0x471868=_0x4830a0[_0x3b5618(0xb55)](_0x4830a0['WvpWX'](_0x4830a0[_0x3b5618(0xb55)](_0x4830a0[_0x3b5618(0xbc1)](_0x4830a0[_0x3b5618(0x527)](_0x4830a0['ewNsT'](_0x4830a0[_0x3b5618(0x5f9)](_0x4830a0[_0x3b5618(0x442)](_0x4830a0['gRqRU'](_0x4830a0['oIDCx'](_0x4830a0[_0x3b5618(0x96c)](_0x4830a0[_0x3b5618(0xa6a)](_0x4830a0[_0x3b5618(0x418)](_0x4830a0['oQVir'](_0x4830a0[_0x3b5618(0x9b3)](_0x4830a0['jwRxw'](_0x4830a0[_0x3b5618(0x418)](_0x3b5618(0x9b7)+'ra-me'+'nu-ro'+'ot{al'+_0x3b5618(0x6d6)+_0x3b5618(0xd80),_0x4830a0['yZhjW'])+_0x4830a0['YHjMO'],_0x4830a0[_0x3b5618(0x445)]),'box-s'+'hadow'+':0\x200\x20'+_0x3b5618(0x4a5)+'\x20rgba'+_0x3b5618(0x271)+'255,2'+'55,.0'+_0x3b5618(0xa2d)+'set\x200'+'\x201px\x20'+_0x3b5618(0x32a)+_0x3b5618(0x229)+_0x3b5618(0x70c)+_0x3b5618(0xbc0)+'05),0'+_0x3b5618(0xc9f)+_0x3b5618(0x26a)+'\x20rgba'+_0x3b5618(0x6da)+_0x3b5618(0x9ab)+');')+(_0x3b5618(0x640)+_0x3b5618(0xa17)+'trans'+'form:'+_0x3b5618(0x934)+'lateY'+'(18px'+_0x3b5618(0x922)+'nter-'+_0x3b5618(0x871)+'s:non'+'e;tra'+_0x3b5618(0x9d2)+_0x3b5618(0xb96)+'acity'+'\x20.35s'+_0x3b5618(0x6bd)+',tran'+'sform'+_0x3b5618(0xd9c)+_0x3b5618(0x41e)+_0x3b5618(0x639)+'ier(.'+_0x3b5618(0x7d4)+_0x3b5618(0xb81)+');')+(_0x3b5618(0xccd)+':#f6e'+'ef2;f'+_0x3b5618(0x907)+'ize:1'+_0x3b5618(0x43b)+'ont-f'+_0x3b5618(0x1fc)+_0x3b5618(0x4f6)+'er\x22,\x22'+'Segoe'+_0x3b5618(0x817)+'syste'+_0x3b5618(0x9c8)+_0x3b5618(0x2e7)+'serif'+';}')+('#saku'+'ra-me'+_0x3b5618(0x4dd)+_0x3b5618(0xd06)+'-pane'+'l.sho'+_0x3b5618(0xd10)+_0x3b5618(0x2dd)+_0x3b5618(0x5a2)+_0x3b5618(0xd1c)+_0x3b5618(0x89c)+_0x3b5618(0x446)+_0x3b5618(0x46d)+_0x3b5618(0xaf5)+_0x3b5618(0xc71)+_0x3b5618(0x1f0)),_0x4830a0[_0x3b5618(0xae4)])+('borde'+'r-rad'+'ius:1'+_0x3b5618(0xb68)+_0x3b5618(0x61e)+_0x3b5618(0xa9c)+'rgba('+_0x3b5618(0x6ef)+_0x3b5618(0x9df)+_0x3b5618(0x837)+_0x3b5618(0x7f8)+_0x3b5618(0x20d)+'dow:i'+_0x3b5618(0x6fa)+_0x3b5618(0xcc1)+_0x3b5618(0x9e9)+_0x3b5618(0x536)+_0x3b5618(0x6ef)+_0x3b5618(0x9df)+_0x3b5618(0x30f)+');}'),_0x4830a0['FpCxM'])+(_0x3b5618(0x2d9)+'ogo-s'+_0x3b5618(0x492)+'dth:2'+_0x3b5618(0x78a)+_0x3b5618(0x479)+_0x3b5618(0x961)+';over'+'flow:'+'visib'+_0x3b5618(0xc48)+'lter:'+_0x3b5618(0xd09)+'shado'+_0x3b5618(0xa98)+'\x204px\x20'+_0x3b5618(0x536)+_0x3b5618(0x537)+'07,15'+'7,.8)'+_0x3b5618(0xc26)),_0x3b5618(0xb39)+'ab{di'+'splay'+_0x3b5618(0x669)+';alig'+_0x3b5618(0x42f)+'ms:ce'+'nter;'+'justi'+_0x3b5618(0x892)+_0x3b5618(0xd2e)+_0x3b5618(0x743)+_0x3b5618(0xa31)+_0x3b5618(0xd6f)+_0x3b5618(0x434)+'eight'+_0x3b5618(0xa1e)+_0x3b5618(0x506)+'er:0;'+_0x3b5618(0x68a)+'r-rad'+_0x3b5618(0xbbe)+_0x3b5618(0xb4c))+('backg'+_0x3b5618(0x8dd)+':tran'+_0x3b5618(0xb2e)+_0x3b5618(0x42a)+_0x3b5618(0x54e)+'gba(2'+_0x3b5618(0x5b3)+_0x3b5618(0x29d)+_0x3b5618(0x2fc)+_0x3b5618(0xca5)+'r:poi'+'nter;'+'font-'+_0x3b5618(0x78f)+_0x3b5618(0x340)+'font-'+'weigh'+_0x3b5618(0x53c)+_0x3b5618(0x256)+_0x3b5618(0x7d6)+_0x3b5618(0x22a)+'herit'+';}')+(_0x3b5618(0xb39)+'ab:ho'+_0x3b5618(0x774)+_0x3b5618(0xa83)+_0x3b5618(0x536)+_0x3b5618(0x2a4)+_0x3b5618(0x829)+_0x3b5618(0x9bd)+';}')+_0x4830a0[_0x3b5618(0x36a)]+('.mn-m'+_0x3b5618(0x8e5)+'lex:1'+';min-'+'width'+_0x3b5618(0x44a)+_0x3b5618(0xdbc)+_0x3b5618(0x669)+_0x3b5618(0x307)+_0x3b5618(0xd99)+'ction'+_0x3b5618(0x655)+'mn;}'),_0x4830a0[_0x3b5618(0xcaa)])+_0x4830a0[_0x3b5618(0x57a)]+_0x4830a0['tLIOI']+('.mn-s'+'ub{fo'+'nt-si'+'ze:11'+_0x3b5618(0x3fd)+'acity'+_0x3b5618(0xb33)),_0x4830a0[_0x3b5618(0x213)]),_0x3b5618(0xccd)+_0x3b5618(0xaa8)+_0x3b5618(0x69f)+_0x3b5618(0x89b)+'y:.45'+_0x3b5618(0x241)+'or:po'+'inter'+';}')+('.mn-c'+_0x3b5618(0x6f0)+_0x3b5618(0x3e4)+_0x3b5618(0x3e5)+_0x3b5618(0x2bd)+';back'+_0x3b5618(0xa49)+_0x3b5618(0x6fe)+_0x3b5618(0x229)+',255,'+'255,.'+_0x3b5618(0x649))+(_0x3b5618(0xa70)+_0x3b5618(0x881)+_0x3b5618(0xd51)+_0x3b5618(0xc30)+_0x3b5618(0x2cf)+_0x3b5618(0x464)+'t:14p'+_0x3b5618(0xb8d)+_0x3b5618(0x91b)+_0x3b5618(0xcd6)+_0x3b5618(0x37b)+'urren'+_0x3b5618(0x28f)+'r;str'+'oke-w'+_0x3b5618(0xc30)+'2;str'+'oke-l'+_0x3b5618(0x423)+_0x3b5618(0x730)+'nd;}')+(_0x3b5618(0xa70)+'ols{f'+_0x3b5618(0x371)+_0x3b5618(0x319)+'heigh'+_0x3b5618(0xc19)+_0x3b5618(0x466)+'ow-y:'+_0x3b5618(0x73b)+_0x3b5618(0x95b)+_0x3b5618(0xa89)+'id;gr'+_0x3b5618(0x890)+_0x3b5618(0x283)+'e-col'+_0x3b5618(0x996)+_0x3b5618(0x93a)+_0x3b5618(0xccc)+'o-fil'+'l,min'+'max(2'+_0x3b5618(0x772)+'1fr))'+';')+('align'+'-item'+_0x3b5618(0x482)+_0x3b5618(0x4cf)+'ign-c'+_0x3b5618(0x3b9)+'t:sta'+'rt;ga'+_0x3b5618(0x1d8)+_0x3b5618(0xa40)+'ding:'+_0x3b5618(0xa21)+_0x3b5618(0xb60)+_0x3b5618(0x66e))+_0x4830a0[_0x3b5618(0x4f2)],_0x3b5618(0xa70)+'ols::'+_0x3b5618(0x4ba)+'it-sc'+_0x3b5618(0x2fa)+_0x3b5618(0x70f)+'umb{b'+_0x3b5618(0x61e)+'ound:'+_0x3b5618(0x536)+_0x3b5618(0x6ef)+_0x3b5618(0x9df)+'5,.08'+');bor'+_0x3b5618(0xa9d)+'adius'+_0x3b5618(0x8b4)+'}'),_0x3b5618(0x708)+_0x3b5618(0x1fe)+_0x3b5618(0xbe5)+'-radi'+_0x3b5618(0x48b)+_0x3b5618(0xa8a)+_0x3b5618(0x94c)+'und:r'+'gba(2'+'55,25'+'5,255'+_0x3b5618(0x66b)+_0x3b5618(0x242)+'-shad'+_0x3b5618(0x4c9)+_0x3b5618(0xb7c)+_0x3b5618(0x65b)+_0x3b5618(0xa11)+'gba(2'+'55,25'+_0x3b5618(0x8ac)+',.05)'+';}'),_0x3b5618(0x708)+'ard.o'+_0x3b5618(0x631)+_0x3b5618(0xa4c)+_0x3b5618(0x8bb)+_0x3b5618(0x9ad)+'5,255'+_0x3b5618(0x70c)+'.04);'+'box-s'+_0x3b5618(0x726)+':inse'+_0x3b5618(0x432)+_0x3b5618(0x1e1)+_0x3b5618(0x1fd)+_0x3b5618(0x229)+_0x3b5618(0x392)+_0x3b5618(0x341)+_0x3b5618(0x476))+(_0x3b5618(0x708)+_0x3b5618(0x88e)+_0x3b5618(0x64d)+_0x3b5618(0x96a)+_0x3b5618(0x886)+_0x3b5618(0x339)+_0x3b5618(0x82c)+_0x3b5618(0x7a3)+_0x3b5618(0x637)+_0x3b5618(0x4e7)+'8px;p'+_0x3b5618(0x985)+'g:11p'+'x\x2012p'+_0x3b5618(0x532))+('.sk-c'+_0x3b5618(0x540)+'itle{'+'flex:'+'1;min'+_0x3b5618(0x512)+_0x3b5618(0x8a4))+(_0x3b5618(0x708)+_0x3b5618(0x540)+_0x3b5618(0x5dd)+_0x3b5618(0x35e)+_0x3b5618(0x470)+'t-siz'+'e:13p'+_0x3b5618(0x6d3)+_0x3b5618(0x77b)+_0x3b5618(0xdad)+_0x3b5618(0x299)+_0x3b5618(0x54e)+_0x3b5618(0x46e)+'46,23'+'8,242'+',.45)'+';}')+(_0x3b5618(0x708)+_0x3b5618(0x6af)+_0x3b5618(0x558)+'-card'+'-titl'+_0x3b5618(0x277)+_0x3b5618(0x521)+_0x3b5618(0xa83)+_0x3b5618(0xb2a)+_0x3b5618(0xae9))+('.sk-m'+_0x3b5618(0xaf9)+'paddi'+_0x3b5618(0x733)+'12px\x20'+_0x3b5618(0x340)+'}'),_0x4830a0[_0x3b5618(0x8cf)]),_0x4830a0[_0x3b5618(0x991)])+_0x4830a0['VloqA']+_0x4830a0[_0x3b5618(0xd0e)],_0x3b5618(0x4d5)+_0x3b5618(0x338)+_0x3b5618(0xb56)+_0x3b5618(0xab2)+'relat'+_0x3b5618(0x376)+'idth:'+_0x3b5618(0x424)+_0x3b5618(0x464)+'t:14p'+_0x3b5618(0xa3a)+_0x3b5618(0xb47)+_0x3b5618(0x506)+_0x3b5618(0xa24)+'dius:'+'99px;'+_0x3b5618(0x7e1)+_0x3b5618(0x8dd)+':rgba'+_0x3b5618(0x271)+'255,2'+_0x3b5618(0x4d6)+_0x3b5618(0x723)+_0x3b5618(0xd7d)+'point'+'er;fl'+_0x3b5618(0x3fa)+_0x3b5618(0x850))+('.sk-s'+_0x3b5618(0x338)+'::aft'+_0x3b5618(0x6e1)+'ntent'+_0x3b5618(0x214)+'ositi'+_0x3b5618(0x70e)+_0x3b5618(0x94d)+_0x3b5618(0x7bd)+':3px;'+_0x3b5618(0xb05)+_0x3b5618(0x605)+'idth:'+_0x3b5618(0x2c9)+'eight'+_0x3b5618(0x26b)+'borde'+_0x3b5618(0x7d8)+_0x3b5618(0x2f9)+'0%;')+(_0x3b5618(0x7e1)+'round'+_0x3b5618(0x624)+'(255,'+_0x3b5618(0x6ef)+_0x3b5618(0x230)+_0x3b5618(0x5fc)+_0x3b5618(0x6aa)+_0x3b5618(0x593)+'eft\x20.'+_0x3b5618(0xc4f)+_0x3b5618(0x94c)+_0x3b5618(0xae2)+_0x3b5618(0x9c6))+(_0x3b5618(0x4d5)+_0x3b5618(0x338)+'[aria'+'-chec'+_0x3b5618(0xd20)+'true\x22'+_0x3b5618(0x6e8)+_0x3b5618(0xa4c)+_0x3b5618(0x8bb)+_0x3b5618(0x9ad)+_0x3b5618(0xda4)+',157,'+_0x3b5618(0x90f)+'}')+_0x4830a0[_0x3b5618(0xc79)]+_0x4830a0['jRVam'],_0x4830a0[_0x3b5618(0x852)])+(_0x3b5618(0x4d5)+_0x3b5618(0x27a)+'::-we'+_0x3b5618(0x568)+_0x3b5618(0x6cf)+_0x3b5618(0xbe8)+'nable'+_0x3b5618(0xd8e)+'k{hei'+'ght:2'+'px;bo'+_0x3b5618(0xdc1)+'radiu'+_0x3b5618(0x763)+';')+(_0x3b5618(0x7e1)+'round'+':line'+_0x3b5618(0x62d)+'adien'+_0x3b5618(0xa6c)+_0x3b5618(0x7a1)+'#ff6b'+'9d)\x200'+'\x200\x20/\x20'+_0x3b5618(0xb3b)+'-p,50'+'%)\x2010'+'0%\x20no'+'-repe'+_0x3b5618(0xd3a)+_0x3b5618(0x9ad)+'5,255'+_0x3b5618(0x70c)+'.08);'+'}')+(_0x3b5618(0x4d5)+'lider'+_0x3b5618(0xced)+'bkit-'+_0x3b5618(0x6cf)+_0x3b5618(0x2cc)+_0x3b5618(0x625)+'ebkit'+_0x3b5618(0x3f4)+'aranc'+_0x3b5618(0x3e0)+'e;wid'+'th:6p'+_0x3b5618(0x2ec)+'ght:6'+_0x3b5618(0xc81)+_0x3b5618(0x7ec)+_0x3b5618(0x6d8)+'2px;b'+_0x3b5618(0xbe5)+_0x3b5618(0x72b)+_0x3b5618(0x3f0)+_0x3b5618(0x9c2)+_0x3b5618(0xa4c)+_0x3b5618(0xd32)+'f6b9d'+';}')+('.sk-v'+_0x3b5618(0xba7)+_0x3b5618(0xc5b)+_0x3b5618(0x3c0)+'px;fo'+_0x3b5618(0x2f3)+'ight:'+_0x3b5618(0xc68)+_0x3b5618(0xcdc)+'dth:3'+'4px;t'+_0x3b5618(0x61b)+_0x3b5618(0x54b)+'right'+_0x3b5618(0x575)+_0x3b5618(0xcc5)+_0x3b5618(0x2a9)+',238,'+'242,.'+_0x3b5618(0xb90))+_0x4830a0[_0x3b5618(0x43a)]+_0x4830a0[_0x3b5618(0x92d)]+(_0x3b5618(0x5e1)+_0x3b5618(0x219)+_0x3b5618(0xccf)+_0x3b5618(0x4cd)+'lex-s'+'tart;'+_0x3b5618(0x68a)+_0x3b5618(0xb00)+_0x3b5618(0xbe5)+_0x3b5618(0x72b)+_0x3b5618(0x738)+'x;pad'+_0x3b5618(0xbc7)+_0x3b5618(0x90b)+_0x3b5618(0xb68)+'ackgr'+'ound:'+_0x3b5618(0xa88)+_0x3b5618(0x4d4)+'lor:#'+_0x3b5618(0x78b))+(_0x3b5618(0x687)+_0x3b5618(0x78f)+'11.5p'+_0x3b5618(0x6d3)+_0x3b5618(0x77b)+_0x3b5618(0x348)+_0x3b5618(0x9cd)+'rsor:'+_0x3b5618(0x652)+_0x3b5618(0x45a)+_0x3b5618(0x614)+'mily:'+_0x3b5618(0xc15)+_0x3b5618(0xab7)),_0x4830a0[_0x3b5618(0xc09)])+('.sk-p'+'re{fo'+'nt:11'+_0x3b5618(0xd37)+_0x3b5618(0xbb2)+'monos'+_0x3b5618(0x426)+_0x3b5618(0x509)+_0x3b5618(0x5df)+_0x3b5618(0xcfa)+_0x3b5618(0x587)+_0x3b5618(0x399)+_0x3b5618(0x1dd)+_0x3b5618(0x77e)+_0x3b5618(0x91f)+_0x3b5618(0x409)+'break'+':brea'+_0x3b5618(0x65c)+_0x3b5618(0xa07)+'gin:0'+_0x3b5618(0x628)+'ity:.'+_0x3b5618(0x517)+'x-hei'+'ght:2'+_0x3b5618(0x7b5)+'overf'+_0x3b5618(0xce2)+_0x3b5618(0xabe))+(_0x3b5618(0x9b7)+_0x3b5618(0x897)+'tal{p'+_0x3b5618(0xbad)+_0x3b5618(0xa8c)+_0x3b5618(0x9c7)+_0x3b5618(0x53d)+_0x3b5618(0x5d5)+_0x3b5618(0x5af)+_0x3b5618(0x630)+'-inde'+_0x3b5618(0xc27)+'74836'+_0x3b5618(0xc85)+_0x3b5618(0xd7d)+_0x3b5618(0x652)+'er;wi'+'dth:2'+_0x3b5618(0xd4e)+'eight'+':26px'+_0x3b5618(0x628)+'ity:.'+'28;')+('trans'+_0x3b5618(0x8b7)+_0x3b5618(0x473)+'ity\x20.'+_0x3b5618(0x2a2)+_0x3b5618(0x46d)+'-even'+'ts:au'+'to;fi'+_0x3b5618(0x73c)+'drop-'+'shado'+_0x3b5618(0xa98)+'\x204px\x20'+_0x3b5618(0x536)+'255,1'+'07,15'+_0x3b5618(0x7b2)+');}'),_0x4fb3f9=_0x4830a0[_0x3b5618(0x418)](_0x3b5618(0x801)+'viewB'+_0x3b5618(0xc2a)+'\x200\x2024'+'\x2024\x22>'+_0x3b5618(0x32d)+_0x3b5618(0x4ff)+'12\x2021'+_0x3b5618(0x8f8)+_0x3b5618(0x2d0)+'4-4.5'+_0x3b5618(0x3b3)+_0x3b5618(0x988)+_0x3b5618(0x92e)+_0x3b5618(0xd4c)+_0x3b5618(0x9b4)+'5s4\x202'+'\x204\x204.'+_0x3b5618(0xc94)+_0x3b5618(0x735)+'5-4\x207'+'.5z\x22\x20',_0x3b5618(0xb36)+_0x3b5618(0xd07)+'\x22\x20str'+_0x3b5618(0x918)+'#ff6b'+'9d\x22\x20s'+'troke'+'-widt'+_0x3b5618(0x3a8)+'\x20stro'+_0x3b5618(0xd39)+_0x3b5618(0x96e)+'=\x22rou'+_0x3b5618(0x8b8)+_0x3b5618(0x8a5)+'-line'+'join='+_0x3b5618(0x3bb)+_0x3b5618(0x681))+_0x4830a0[_0x3b5618(0x86b)],_0x370697=_0x3b5618(0x801)+'class'+_0x3b5618(0x2d8)+_0x3b5618(0xb01)+_0x3b5618(0xacd)+_0x3b5618(0x7b7)+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+'<path'+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x3b5618(0x2d0)+_0x3b5618(0xa22)+_0x3b5618(0x3b3)+_0x3b5618(0x988)+_0x3b5618(0x92e)+_0x3b5618(0xd4c)+'\x204-4.'+_0x3b5618(0xbac)+'\x204\x204.'+_0x3b5618(0xc94)+_0x3b5618(0x735)+'5-4\x207'+'.5z\x22\x20'+('fill='+'\x22none'+_0x3b5618(0x29a)+_0x3b5618(0x918)+_0x3b5618(0xa88)+'9d\x22\x20s'+'troke'+_0x3b5618(0x512)+'h=\x221.'+'6\x22\x20st'+_0x3b5618(0x35b)+_0x3b5618(0x99b)+_0x3b5618(0x7ca)+_0x3b5618(0x788)+_0x3b5618(0x7a4)+_0x3b5618(0xd39)+_0x3b5618(0x9ed)+'n=\x22ro'+'und\x22/'+'>')+_0x4830a0[_0x3b5618(0x62c)];function _0x39523d(_0x12d0ac,_0x43c9ec,_0x41c7a9){var _0x4cec9d=_0x3b5618;if(_0x4830a0[_0x4cec9d(0x96b)](_0x4830a0['LDNAX'],_0x4830a0[_0x4cec9d(0x56c)])){var _0x3e5146=document[_0x4cec9d(0x839)+_0x4cec9d(0xcdd)+_0x4cec9d(0xbdc)](_0x12d0ac);if(_0x43c9ec)_0x3e5146['class'+_0x4cec9d(0xbce)]=_0x43c9ec;if(_0x41c7a9!=null)_0x3e5146[_0x4cec9d(0x34b)+_0x4cec9d(0x802)]=_0x41c7a9;return _0x3e5146;}else{_0x323115['preve'+_0x4cec9d(0xc67)+'ault'](),_0x4680ad['fov']=_0x21ee44[_0x4cec9d(0x8ae)](0x464+-0x2ad+-0x199,_0x5b11e2[_0x4cec9d(0x7cd)]-(0xca5+0x9*0x31+0x72e*-0x2)),_0x36a68a();return;}}function _0x3c9f67(_0x43b020,_0x39597e){var _0x3ffa9d=_0x3b5618,_0x367494=(_0x3ffa9d(0x301)+'|6|2|'+'4|7|5'+_0x3ffa9d(0x4ce))[_0x3ffa9d(0x8a1)]('|'),_0x161bd9=-0x59*-0x3c+0x58c*-0x7+0xc8*0x17;while(!![]){switch(_0x367494[_0x161bd9++]){case'0':var _0x4cf926=_0x39523d('div',_0x4830a0[_0x3ffa9d(0x2cb)],_0x4830a0['exDwA'](_0x3ffa9d(0xc10)+'ng>',_0x43b020)+(_0x3ffa9d(0x3ae)+_0x3ffa9d(0xdaa)));continue;case'1':var _0x2e8677=_0x4830a0[_0x3ffa9d(0x225)](_0x39523d,_0x4830a0['xEWux'],_0x4830a0[_0x3ffa9d(0x7fd)]);continue;case'2':var _0xf4515=_0x39523d(_0x3ffa9d(0xc6f),_0x4830a0[_0x3ffa9d(0xc89)]);continue;case'3':var _0x539909=_0x39523d(_0x4830a0[_0x3ffa9d(0x451)],_0x3ffa9d(0x69a)+'rd'+(_0x39597e?_0x4830a0[_0x3ffa9d(0xb66)]:''));continue;case'4':_0x539909['appen'+_0x3ffa9d(0x79e)+'d'](_0x2e8677);continue;case'5':_0x539909[_0x3ffa9d(0x84b)]=_0xf4515;continue;case'6':_0x2e8677[_0x3ffa9d(0x69b)+_0x3ffa9d(0x79e)+'d'](_0x4cf926);continue;case'7':_0x539909[_0x3ffa9d(0x69b)+_0x3ffa9d(0x79e)+'d'](_0xf4515);continue;case'8':return _0x539909;case'9':_0x539909['head']=_0x4cf926;continue;}break;}}function _0x44feb0(_0x532c57,_0x38a2c5){var _0x5a59ae=_0x3b5618,_0x323a08={'tXVHx':'Copie'+'d','CVriq':_0x5a59ae(0x4b2),'IzQQT':'true','REoWt':_0x5a59ae(0x6cb)},_0x2ce090=_0x4830a0[_0x5a59ae(0x7de)](_0x39523d,_0x4830a0[_0x5a59ae(0xdb6)],_0x5a59ae(0x79b)+_0x5a59ae(0x6fd));_0x2ce090['type']=_0x4830a0[_0x5a59ae(0xdb6)];var _0x37efba=function(){var _0x3a73ca=_0x5a59ae;'WvBVv'===_0x323a08['CVriq']?_0x2ce090['setAt'+'tribu'+'te'](_0x3a73ca(0xd9a)+_0x3a73ca(0x352)+'ed',_0x532c57()?_0x323a08[_0x3a73ca(0x866)]:_0x323a08['REoWt']):_0x59342f['textC'+_0x3a73ca(0x3b9)+'t']=_0x323a08[_0x3a73ca(0xd78)];};return _0x2ce090['oncli'+'ck']=function(){var _0x296b18=_0x5a59ae;if(_0x4830a0[_0x296b18(0x32b)](_0x296b18(0xb85),_0x296b18(0x762)))_0x38a2c5(!_0x532c57()),_0x37efba();else return _0x5cc877['on'];},_0x4830a0[_0x5a59ae(0x83b)](_0x37efba),_0x2ce090['sync']=_0x37efba,_0x4718de['syncs'][_0x5a59ae(0xbb7)](_0x37efba),_0x2ce090;}function _0xac7307(_0x4b5031,_0x43bb19,_0x304886,_0x284d77,_0x69cad9){var _0x315afb=_0x3b5618;if(_0x4830a0['YLwAn']!==_0x315afb(0x6b2)){var _0x412980=(_0x315afb(0x33b)+_0x315afb(0x2a6)+_0x315afb(0x343)+_0x315afb(0x827)+_0x315afb(0x81e)+_0x315afb(0xc3c)+_0x315afb(0xab9)+_0x315afb(0x6ab)+'4|1')['split']('|'),_0x5cdff8=0xabf+-0x3*0x3ab+0x2*0x21;while(!![]){switch(_0x412980[_0x5cdff8++]){case'0':var _0x338561=_0x4830a0[_0x315afb(0x331)](_0x4830a0['SygDh'](_0x6deffe,_0x36d3f8),_0x19c78c*_0x49c939)+_0x2b0a83*_0x2cd2ab;continue;case'1':return{'x':(_0x1f859a*(0x1c9e+-0x19b5+0x95*-0x5+0.5)+(-0x362+-0x2285+0x1f*0x139+0.5))*_0x440bc9,'y':_0x4830a0[_0x315afb(0x273)](0x136d+-0xd5b+-0x612+0.5-_0x4830a0[_0x315afb(0xb67)](_0x2ed417,0x228b+0x2*-0xef+0x5*-0x689+0.5),_0x43cb69),'z':_0x338561};case'2':var _0x1645e9=_0x4830a0[_0x315afb(0x31b)](_0x18ec50,_0xdff06f);continue;case'3':var _0x2055fb=_0x40136c['tan'](_0x4830a0[_0x315afb(0xbe6)](_0x2a9e5b,-0x1*0xe3b+-0x11a0+0x1fdd));continue;case'4':if(_0x4830a0['VllPP'](_0x1f859a,-(0x17*0x125+-0x2*-0xf2c+-0x38aa+0.6000000000000001))||_0x1f859a>-0xefe+-0x17*0x15d+0x2e5a+0.6000000000000001||_0x4830a0[_0x315afb(0x1ef)](_0x2ed417,-(0x4*-0x2a9+-0x2a*-0xb3+0x1*-0x12b9+0.6000000000000001))||_0x2ed417>-0x13f1+-0x12a4+0x2696+0.6000000000000001)return null;continue;case'5':var _0x271070=_0x2cd2ab,_0x4b14d2=0x210f+0x59*0x2e+0x310d*-0x1,_0x54978b=-_0x36d3f8;continue;case'6':var _0x1f859a=_0x4830a0['uMnPd'](_0x2b40ba/_0x338561,_0x2055fb*_0x1645e9);continue;case'7':var _0x2c4f25=_0x4c8a72['cos'](_0x544ac3);continue;case'8':var _0x6deffe=_0x4830a0[_0x315afb(0xd61)](_0x396633[-0x1c7d+0x136f+-0x487*-0x2],_0x229ccf[-0x1691+-0xef+0x1780]),_0x19c78c=_0x145d13[0x1345+-0x1*0x3fb+-0x2b*0x5b]-_0x300832[0x187d+-0x1a39+0x1*0x1bd],_0x2b0a83=_0x2efec7[-0x6*-0x5ba+0x714+-0x296e*0x1]-_0x2ae3e2[0xbf3+-0x12b2*0x2+0x1973*0x1];continue;case'9':if(_0x4830a0['ghwAe'](_0x338561,0xc3*0x25+0x75a+-0x2389+0.05))return null;continue;case'10':var _0x1aeba4=_0x4830a0['GujuA'](_0x64798c);continue;case'11':var _0x170945=_0x4830a0[_0x315afb(0x861)](_0x6deffe,_0x4830a0[_0x315afb(0x846)](_0x4830a0['SygDh'](_0x4b14d2,_0x2cd2ab),_0x54978b*_0x49c939))+_0x4830a0['guaBv'](_0x19c78c,_0x4830a0['CQysz'](_0x4830a0[_0x315afb(0x718)](_0x54978b,_0x36d3f8),_0x271070*_0x2cd2ab))+_0x2b0a83*(_0x271070*_0x49c939-_0x4830a0[_0x315afb(0xae0)](_0x4b14d2,_0x36d3f8));continue;case'12':var _0x544ac3=_0x4830a0[_0x315afb(0xc61)](_0x1aeba4['pitch'],_0x51e448['PI'])/(-0x20a7+0x3*0x1f1+0x371*0x8),_0x1a7b5=_0x1aeba4[_0x315afb(0x202)]*_0x1b6b78['PI']/(-0x200b+0x3f*-0xc+0x2bf*0xd);continue;case'13':var _0x2ed417=_0x170945/_0x338561/_0x2055fb;continue;case'14':var _0x36d3f8=_0x26d674[_0x315afb(0x5f8)](_0x1a7b5)*_0x2c4f25,_0x49c939=-_0xcc447c['sin'](_0x544ac3),_0x2cd2ab=_0x14a73f[_0x315afb(0x847)](_0x1a7b5)*_0x2c4f25;continue;case'15':if(!_0x1aeba4)return null;continue;case'16':var _0x2a9e5b=_0x4830a0[_0x315afb(0x254)](_0x23a672[_0x315afb(0x7cd)],_0x2fc478['PI'])/(-0x2*-0x21d+0x11e1+-0x1567);continue;case'17':var _0x2b40ba=_0x4830a0['CikCt'](_0x4830a0[_0x315afb(0xcda)](_0x6deffe*_0x271070,_0x19c78c*_0x4b14d2),_0x4830a0['wuGnh'](_0x2b0a83,_0x54978b));continue;}break;}}else{var _0xf5cbbc=_0x39523d('div','sk-ra'+_0x315afb(0x712)),_0x1d824a=document[_0x315afb(0x839)+_0x315afb(0xcdd)+'ent'](_0x315afb(0x4ac));_0x1d824a[_0x315afb(0x73a)]=_0x315afb(0xcd1),_0x1d824a['class'+'Name']=_0x4830a0['duTuF'],_0x1d824a['min']=String(_0x4b5031),_0x1d824a[_0x315afb(0x8ae)]=String(_0x43bb19),_0x1d824a['step']=_0x4830a0[_0x315afb(0x28d)](String,_0x304886);var _0x45485b=_0x4830a0[_0x315afb(0xbfc)](_0x39523d,'span',_0x4830a0[_0x315afb(0xca4)]),_0xff1e52=function(){var _0x21c558=_0x315afb,_0x210505=_0x4830a0[_0x21c558(0x6bf)](_0x284d77);_0x1d824a[_0x21c558(0x61f)]=_0x4830a0['hSNgq'](String,_0x210505),_0x45485b['textC'+_0x21c558(0x3b9)+'t']=(_0x4830a0['MXkJY'](_0x304886,-0x221*0xd+0x1214+0x99a)?_0x210505['toFix'+'ed'](0x17d7*0x1+-0x1*-0x6fd+0xd*-0x25f):String(Math['round'](_0x210505)))+(_0x1d824a['datas'+'et'][_0x21c558(0x949)]||'');var _0x52be92=_0x4830a0['ZCZIi'](_0x4830a0[_0x21c558(0x6db)](_0x210505,_0x4b5031)/_0x4830a0['eysHp'](_0x43bb19,_0x4b5031),-0x1*-0x34b+-0x2096+0x1daf);_0x1d824a[_0x21c558(0x86d)][_0x21c558(0x6f4)+'opert'+'y']('--p',_0x4830a0['PjjKg'](_0x52be92,'%'));};return _0x1d824a['oninp'+'ut']=function(){var _0x304a54=_0x315afb;_0x69cad9(_0x4830a0[_0x304a54(0xb27)](parseFloat,_0x1d824a['value'])||_0x4b5031),_0xff1e52();},_0xf5cbbc[_0x315afb(0x69b)+_0x315afb(0x79e)+'d'](_0x1d824a),_0xf5cbbc['appen'+'dChil'+'d'](_0x45485b),_0xf5cbbc[_0x315afb(0x808)]=_0xff1e52,_0xf5cbbc[_0x315afb(0x4ac)]=_0x1d824a,_0xff1e52(),_0x4718de['syncs']['push'](_0xff1e52),_0xf5cbbc;}}function _0x31b7dc(_0x27e0a6,_0x17ccf1){var _0x3855c3=_0x3b5618,_0x190659=_0x4830a0[_0x3855c3(0x225)](_0x39523d,'div','sk-ct'+'l'),_0x8c99e7=_0x39523d(_0x4830a0[_0x3855c3(0x451)],_0x4830a0['fyNtW'],_0x4830a0[_0x3855c3(0xa6b)](_0x27e0a6,_0x17ccf1?_0x4830a0['PjjKg'](_0x3855c3(0xbaa)+'\x20clas'+_0x3855c3(0x478)+_0x3855c3(0xadb)+'\x27>'+_0x17ccf1,_0x3855c3(0x51b)+'n>'):''));return _0x190659['appen'+_0x3855c3(0x79e)+'d'](_0x8c99e7),_0x190659;}function _0x44733d(_0x2011a0,_0x44ae11,_0xa3b96e,_0x15581c){var _0x586aeb=_0x3b5618,_0x3a0e46={'MhDrw':function(_0x22fd22,_0x575771){return _0x22fd22===_0x575771;},'uCjKd':_0x4830a0['ifaoX'],'NHCHT':function(_0xa892b1,_0x27f432){return _0xa892b1/_0x27f432;}};if(_0x4830a0[_0x586aeb(0x4f5)]!==_0x586aeb(0x836)){var _0x2edff2=_0x57a4a2[0x1ee*0x7+0x13bd+-0x213f];if(_0x2edff2&&typeof _0x2edff2[_0x586aeb(0x318)]===_0x586aeb(0x711)+'ion'){_0x21496c[_0x586aeb(0xad8)]=_0x2edff2[_0x586aeb(0x318)](),_0x275c02[_0x586aeb(0x8f7)]++;if(_0x535fd7[-0x155*-0xd+0x6b1*-0x4+0x974]&&_0x3a0e46['MhDrw'](typeof _0xf84694[-0xe2a+-0x1*-0x1c67+-0xe3c][_0x586aeb(0x318)],_0x3a0e46['uCjKd'])){var _0x29e568=_0x327d2a[-0x1da9*-0x1+0x2*0xee+-0x1f84][_0x586aeb(0x318)]();if(_0x29e568)_0x2c1d09=_0x29e568;}}}else{var _0x281fc6=_0x2011a0&&_0x2011a0[_0x586aeb(0xd97)+'y']&&_0x2011a0[_0x586aeb(0xd97)+'y'][_0x44ae11];if(!_0x281fc6)return'-';for(var _0x25839d=-0x9*0x1ba+-0xf59+0x1ee3*0x1;_0x4830a0[_0x586aeb(0xcfc)](_0x25839d,_0x281fc6['lengt'+'h']);_0x25839d++){if(_0x281fc6[_0x25839d]['o']===_0xa3b96e){if(_0x4830a0[_0x586aeb(0x6ec)](_0x15581c,'v3')){var _0x40055b=_0x281fc6[_0x25839d][_0x586aeb(0x5bc)]||[_0x281fc6[_0x25839d]['v'],0xf25*-0x1+0xbd7*0x1+0x34e,-0x1*0x229d+0xba5*0x1+0x31*0x78];return _0x40055b['map'](function(_0x55f0f3){var _0x113278=_0x586aeb;return _0x3a0e46[_0x113278(0x583)](Math[_0x113278(0x8dd)](_0x55f0f3*(0x1523+0x13d8+-0x2897)),-0x222f+-0xe1f+0x30b2);})[_0x586aeb(0xbe3)]('\x20\x20');}var _0x402427=_0x281fc6[_0x25839d]['v'];return typeof _0x402427===_0x586aeb(0x9fc)+'r'?Math['round'](_0x402427*(0xc17+0x18ab+-0x3a*0x91))/(-0xf6f+0xf63+0x3f4):_0x4830a0[_0x586aeb(0x68f)](String,_0x402427);}}return'-';}}function _0x532a3c(_0x52a54b){var _0x475fa9=_0x3b5618,_0x1a6527={'wVPCB':function(_0x3cad85,_0x38dcd5){return _0x4830a0['NYevd'](_0x3cad85,_0x38dcd5);},'EWPVB':_0x475fa9(0x97e)+_0x475fa9(0x8c2),'bmINg':function(_0x309b7a,_0x27c733){return _0x309b7a+_0x27c733;},'ayggK':function(_0x201d54,_0x1c1872){return _0x4830a0['CBCVR'](_0x201d54,_0x1c1872);},'oHuKf':function(_0x9e850c,_0x575ad2){return _0x9e850c+_0x575ad2;},'uZLaZ':_0x475fa9(0x502),'BREmj':_0x475fa9(0x382),'tOZNp':function(_0x3a5d80,_0x4313e4,_0x1d6841){return _0x3a5d80(_0x4313e4,_0x1d6841);},'htxHI':_0x4830a0['xNURH'],'BbFbC':function(_0x4ac77f,_0x1ea923){return _0x4ac77f>>>_0x1ea923;},'HJdpZ':_0x4830a0['tWTOS'],'afpib':function(_0x138fb2){return _0x138fb2();},'YxuSt':_0x475fa9(0x878)+'d','DIMml':function(_0x220158,_0x4833f7,_0x2faf9d){return _0x220158(_0x4833f7,_0x2faf9d);},'VBPmD':'objec'+'t','DEWro':_0x4830a0[_0x475fa9(0x360)]},_0x5158ea=_0xdb433,_0x58dfcc=[],_0x3c90a6;if(_0x52a54b===_0x475fa9(0x665)+'t'){var _0x2a4af5=_0x4830a0[_0x475fa9(0xa05)](_0x3c9f67,_0x4830a0['zTMqb'],_0x328f9c['on']),_0x24f1a4=_0x39523d(_0x475fa9(0xc6f),_0x4830a0[_0x475fa9(0xb2d)],_0x328f9c['on']?_0x4830a0['eSoWh'](_0x4830a0[_0x475fa9(0x854)]('x',_0x328f9c[_0x475fa9(0x5db)+'r'][_0x475fa9(0xa08)+'ed'](-0x14f6+0x478*0x2+0x1*0xc07))+'\x20on\x20',_0x48fe2f['lengt'+'h'])+_0x4830a0['Jarsx']+_0x177880+('\x20writ'+'es'):_0x475fa9(0x689)+_0x475fa9(0x77d)+'\x20move'+_0x475fa9(0x28e)+'speed'+_0x475fa9(0x405)+_0x475fa9(0xc03)+'ly.\x20H'+_0x475fa9(0x479)+_0x475fa9(0xcd0)+_0x475fa9(0x567)+_0x475fa9(0x1ff)+_0x475fa9(0xa7a)+'refus'+'ed.'),_0x2b6f35=_0x31b7dc(_0x4830a0[_0x475fa9(0x55f)]);_0x2b6f35[_0x475fa9(0x69b)+'dChil'+'d'](_0x44feb0(function(){return _0x328f9c['on'];},function(_0x482c7c){var _0x2bdb0e=_0x475fa9;_0x17e3ce(_0x482c7c,_0x328f9c[_0x2bdb0e(0x5db)+'r']),_0x24f1a4[_0x2bdb0e(0x2a0)+_0x2bdb0e(0x3b9)+'t']=_0x482c7c?_0x4830a0['fNhfu']('x'+_0x328f9c[_0x2bdb0e(0x5db)+'r'][_0x2bdb0e(0xa08)+'ed'](0x1165+-0x13*-0xe3+0x1*-0x223d)+_0x4830a0[_0x2bdb0e(0xcf8)]+_0x48fe2f['lengt'+'h']+_0x4830a0['Jarsx']+_0x177880,_0x4830a0[_0x2bdb0e(0x703)]):_0x2bdb0e(0x689)+'plies'+_0x2bdb0e(0x552)+'ment-'+_0x2bdb0e(0xdc5)+'\x20fiel'+_0x2bdb0e(0xc03)+_0x2bdb0e(0x350)+'eight'+',\x20ste'+'p\x20and'+_0x2bdb0e(0x1ff)+_0x2bdb0e(0xa7a)+'refus'+_0x2bdb0e(0xdb7);})),_0x2a4af5[_0x475fa9(0x84b)]['appen'+'dChil'+'d'](_0x24f1a4),_0x2a4af5[_0x475fa9(0x84b)]['appen'+_0x475fa9(0x79e)+'d'](_0x2b6f35);var _0x30b381=_0xac7307(0x895+-0x4*0x2fb+0x358,-0xc1d+0x489+-0x1*-0x799,0x40d+-0xb*0x116+-0x2f*-0x2b+0.5,function(){var _0x57e9e5=_0x475fa9,_0x34c5f9={'xvPtC':function(_0x50ade7,_0x51615f){return _0x1a6527['wVPCB'](_0x50ade7,_0x51615f);},'ZaWei':_0x1a6527[_0x57e9e5(0x5e3)]};if(_0x57e9e5(0xb52)===_0x57e9e5(0xb52))return _0x328f9c['facto'+'r'];else{var _0x45a721=_0x5d3c4e[_0x1e2db0],_0x5ad638=typeof _0x2206f5[_0x45a721];_0x1f34b4[_0x45a721]=_0x34c5f9['xvPtC'](_0x5ad638,_0x34c5f9['ZaWei'])?_0x57e9e5(0x97e)+_0x57e9e5(0x8c2):_0x5ad638;}},function(_0x173f38){_0x17e3ce(_0x328f9c['on'],_0x173f38);});_0x30b381[_0x475fa9(0x4ac)]['datas'+'et'][_0x475fa9(0x949)]='x';var _0x183960=_0x31b7dc(_0x475fa9(0x689)+_0x475fa9(0x3a6),'F8\x20/\x20'+_0x475fa9(0xce7)+_0x475fa9(0xc7d)+'ep\x20th'+'is');_0x183960['appen'+_0x475fa9(0x79e)+'d'](_0x30b381),_0x2a4af5[_0x475fa9(0x84b)]['appen'+'dChil'+'d'](_0x183960);if(_0x4ac976[_0x475fa9(0x853)+'h']){var _0x4bb74c=_0x39523d(_0x475fa9(0xc6f),_0x4830a0[_0x475fa9(0xac5)],_0x4830a0[_0x475fa9(0x33e)](_0x475fa9(0x2f0)+_0x475fa9(0xbdb),_0x4ac976[_0x475fa9(0x1d7)](-0xfa*-0xd+-0x1bba+0xf08,0x1*0x56f+-0x2119+0x1bae)['map'](function(_0x422e59){var _0x4813ba=_0x475fa9;return _0x1a6527[_0x4813ba(0xcf1)](_0x1a6527['bmINg'](_0x1a6527['bmINg']('0x',_0x422e59['o']<0x194f+0x11f3+-0x2b42?'?':_0x422e59['o']['toStr'+'ing'](-0x3e9+-0x1*-0x238f+0x1*-0x1f96)),'\x20('),_0x422e59[_0x4813ba(0x760)])+')';})['join']('\x20\x20')));_0x2a4af5['body'][_0x475fa9(0x69b)+'dChil'+'d'](_0x4bb74c);}_0x58dfcc['push'](_0x2a4af5);var _0x43a706=_0x3c9f67(_0x4830a0['tAUIf']),_0x361511=_0x39523d('butto'+'n',_0x4830a0[_0x475fa9(0x6c1)],_0x475fa9(0x3ed)+_0x475fa9(0xd5b)+_0x475fa9(0xb12)+'9)');_0x361511[_0x475fa9(0x73a)]=_0x4830a0[_0x475fa9(0xdb6)],_0x361511[_0x475fa9(0x93e)+'ck']=function(){var _0x495977=_0x475fa9;_0x1a6527[_0x495977(0x26e)](_0x287a45,'snaps'+_0x495977(0x209));},_0x43a706['body']['appen'+'dChil'+'d'](_0x39523d(_0x4830a0['xEWux'],_0x475fa9(0x21c)+'esc',_0x4830a0['VNBFj'])),_0x43a706[_0x475fa9(0x84b)][_0x475fa9(0x69b)+_0x475fa9(0x79e)+'d'](_0x361511),_0x58dfcc[_0x475fa9(0xbb7)](_0x43a706);}if(_0x52a54b===_0x4830a0[_0x475fa9(0x46c)]){if('HQdKq'===_0x4830a0['DvXBp'])return null;else{var _0x4b4b1b=_0x4830a0[_0x475fa9(0x2ca)](_0x3c9f67,_0x475fa9(0x1f8),_0x1c4e9c['on']),_0x5270d9=_0x31b7dc(_0x475fa9(0x1d9)+'ed');_0x5270d9['appen'+'dChil'+'d'](_0x44feb0(function(){return _0x1c4e9c['on'];},function(_0x222d8f){var _0x16bdc4=_0x475fa9;_0x2d1a41(_0x222d8f,_0x1c4e9c[_0x16bdc4(0x96d)]);})),_0x4b4b1b['body'][_0x475fa9(0x69b)+'dChil'+'d'](_0x4830a0[_0x475fa9(0xc31)](_0x39523d,_0x475fa9(0xc6f),_0x475fa9(0x21c)+_0x475fa9(0xb74),_0x4830a0['GiHVY'])),_0x4b4b1b[_0x475fa9(0x84b)][_0x475fa9(0x69b)+_0x475fa9(0x79e)+'d'](_0x5270d9);var _0x4b2852=_0x4830a0['WmWCp'](_0xac7307,-0x817+0x222c+-0x19ed,0x16cc+0xc*0x2af+-0x3660,0x14f8+0x150b+0x1*-0x29f9,function(){return _0x1c4e9c['span'];},function(_0x130f37){var _0x2f6571=_0x475fa9,_0x421f43={'rKQdK':function(_0x53175a,_0x132e06,_0x3feb09){return _0x53175a(_0x132e06,_0x3feb09);},'zbFlN':_0x2f6571(0xc6f),'uvayM':function(_0x3ff227,_0x20b1f4){var _0x17f29f=_0x2f6571;return _0x1a6527[_0x17f29f(0xb23)](_0x3ff227,_0x20b1f4);},'zkzsk':_0x2f6571(0x3ae)+'ong>','Hhgmx':'sk-ca'+'rd','YytFU':_0x1a6527[_0x2f6571(0xa91)]};if(_0x2f6571(0xd74)!==_0x1a6527[_0x2f6571(0xbf1)])_0x1c4e9c['span']=_0x130f37;else{var _0xa64118=('8|6|3'+_0x2f6571(0x7a5)+'7|5|9'+'|2|1')[_0x2f6571(0x8a1)]('|'),_0x3e6783=0x203a+0xff*-0x3+0x1f3*-0xf;while(!![]){switch(_0xa64118[_0x3e6783++]){case'0':var _0x361302=_0x421f43[_0x2f6571(0xce1)](_0x352878,_0x2f6571(0xc6f),_0x2f6571(0x6dd)+_0x2f6571(0x6f5));continue;case'1':return _0x57a14f;case'2':_0x57a14f['head']=_0x10ad7f;continue;case'3':var _0x10ad7f=_0x50dcae(_0x421f43[_0x2f6571(0x596)],'sk-ca'+_0x2f6571(0x2d5)+'tle',_0x421f43[_0x2f6571(0x800)](_0x421f43['uvayM']('<stro'+'ng>',_0x362e59),_0x421f43[_0x2f6571(0x29c)]));continue;case'4':_0x161cae[_0x2f6571(0x69b)+'dChil'+'d'](_0x10ad7f);continue;case'5':_0x57a14f['appen'+_0x2f6571(0x79e)+'d'](_0x361302);continue;case'6':var _0x161cae=_0x4a1315('div','sk-ca'+_0x2f6571(0xd9f)+'ad');continue;case'7':_0x57a14f[_0x2f6571(0x69b)+'dChil'+'d'](_0x161cae);continue;case'8':var _0x57a14f=_0xc86ee2(_0x421f43[_0x2f6571(0x596)],_0x421f43['uvayM'](_0x421f43[_0x2f6571(0x6c2)],_0x37485b?_0x421f43['YytFU']:''));continue;case'9':_0x57a14f['body']=_0x361302;continue;}break;}}});_0x4b2852['input'][_0x475fa9(0x7a8)+'et'][_0x475fa9(0x949)]='m';var _0xbcf476=_0x31b7dc('Range',_0x4830a0[_0x475fa9(0xca8)]);_0xbcf476['appen'+_0x475fa9(0x79e)+'d'](_0x4b2852),_0x4b4b1b[_0x475fa9(0x84b)]['appen'+_0x475fa9(0x79e)+'d'](_0xbcf476),_0x58dfcc['push'](_0x4b4b1b);var _0x363065=_0x3c9f67(_0x4830a0['fihgY'],_0x1c4e9c['boxes']),_0x37d97d=_0x31b7dc('Enabl'+'ed');_0x37d97d['appen'+_0x475fa9(0x79e)+'d'](_0x4830a0[_0x475fa9(0x7de)](_0x44feb0,function(){var _0x53b111=_0x475fa9;if(_0x53b111(0x981)===_0x53b111(0x981))return _0x1c4e9c[_0x53b111(0x96d)];else{_0x7aefbc=_0xaffab3,_0x46d99c=[],_0x3e735e(_0x53b111(0x609)+'t',{'report':_0x5761a7()});return;}},function(_0x4989d7){var _0x27d386=_0x475fa9;if(_0x1a6527[_0x27d386(0xd46)](_0x1a6527['HJdpZ'],_0x27d386(0x577))){var _0x3c94dd=_0x1a6527[_0x27d386(0x547)](_0x5a30f6,_0x411966+_0x3d9239(_0x365368[_0x2a5711][-0x2f1*0x3+0xbe6+-0x313],0x37*0x79+-0x1586+0x1*-0x469),_0x1a6527[_0x27d386(0x5c0)]);if(_0x3c94dd)_0x1d075f['refs'][_0x4e9553[_0x54840e][0x1dd0+0x1b34+-0x825*0x7]]='0x'+_0x1a6527['BbFbC'](_0x3c94dd,0x1198+-0x1975+0x7dd)[_0x27d386(0x8a8)+'ing'](-0xd08+0xa*0x256+-0xa44);}else{if(_0x4989d7&&!_0x1a6527[_0x27d386(0x6b0)](_0x3ccc4d)){_0x2c1f84();return;}_0x2d1a41(!![],_0x4989d7);}}));var _0x49b79c=_0x5158ea&&_0x5158ea['angle'+'s'];_0x363065[_0x475fa9(0x84b)]['appen'+'dChil'+'d'](_0x39523d(_0x4830a0[_0x475fa9(0x451)],_0x475fa9(0x21c)+'esc',_0x49b79c&&!_0x49b79c[_0x475fa9(0x53e)+_0x475fa9(0xb43)]?_0x4830a0['OeDAo'](_0x475fa9(0x926)+'rawin'+_0x475fa9(0x456),_0x49b79c['why']||_0x475fa9(0x5b9)+_0x475fa9(0x781)+'s\x20uni'+_0x475fa9(0xb88)+_0x475fa9(0x255))+_0x4830a0[_0x475fa9(0xa20)]:_0x49b79c&&!_0x49b79c['fovSa'+'ne']?_0x475fa9(0x884)+'\x20of\x20v'+'iew\x20i'+'s\x20'+Math['round'](_0x49b79c['fov'])+('°,\x20ou'+_0x475fa9(0xacc)+_0x475fa9(0x6cc)+'sane\x20'+_0x475fa9(0x789)+'\x20Rese'+'t\x20it\x20'+'below'+'.'):_0x4830a0[_0x475fa9(0xa4f)])),_0x363065[_0x475fa9(0x84b)][_0x475fa9(0x69b)+_0x475fa9(0x79e)+'d'](_0x37d97d);var _0x413541=_0xac7307(-0x5b*0x44+0x707*0x1+0x1161,0x167*-0xb+0x175a+-0x76b,-0x2201+-0x37*0x62+0x7f*0x6f,function(){var _0x140820=_0x475fa9;return _0x4b6821[_0x140820(0x7cd)];},function(_0x14d02e){var _0x131f64=_0x475fa9;_0x4b6821['fov']=_0x14d02e,_0x1a6527[_0x131f64(0x6b0)](_0x110724);});_0x413541[_0x475fa9(0x4ac)][_0x475fa9(0x7a8)+'et']['unit']='°';var _0x41498e=_0x4830a0['aGFvT'](_0x31b7dc,'Field'+_0x475fa9(0x239)+_0x475fa9(0x69d),'[\x20and'+_0x475fa9(0x80d)+_0x475fa9(0xc7d)+_0x475fa9(0x61a)+'is');_0x41498e['appen'+_0x475fa9(0x79e)+'d'](_0x413541);var _0x18b4d4=_0x31b7dc('Reset'+_0x475fa9(0xda8),'fov\x20b'+_0x475fa9(0x3a9)+'o\x2075,'+'\x20offs'+_0x475fa9(0x27d)+_0x475fa9(0xba6)),_0x130d46=_0x39523d('butto'+'n',_0x4830a0[_0x475fa9(0x6c1)],_0x475fa9(0x3b2));_0x130d46[_0x475fa9(0x6e0)+_0x475fa9(0xbd8)+_0x475fa9(0x76f)+'r']('click',function(){var _0x3b8f3c=_0x475fa9;if(_0x4830a0[_0x3b8f3c(0xbf3)](_0x3b8f3c(0x9a8),'xIrLi')){var _0x493d03=(_0x3b8f3c(0xc52)+'|4|5|'+'2')[_0x3b8f3c(0x8a1)]('|'),_0x1de3c2=-0x8b7+-0x3c2+0x67*0x1f;while(!![]){switch(_0x493d03[_0x1de3c2++]){case'0':_0x4b6821[_0x3b8f3c(0x913)+'Off']=0x38e*0x8+-0x4*-0x7fd+0xf19*-0x4;continue;case'1':_0x4b6821[_0x3b8f3c(0x569)+'f']=-0x1e01+0x1b62+0x29f;continue;case'2':_0x2702da(_0x4718de['cat']);continue;case'3':_0x4b6821[_0x3b8f3c(0x7cd)]=-0x2*-0x109d+0x1ed*-0x3+-0x1b28;continue;case'4':_0x4830a0[_0x3b8f3c(0x5ec)](_0x110724);continue;case'5':_0x4830a0['UjCwr'](_0x37f5a8);continue;}break;}}else{if(_0x4ceb5d)_0x3cbb6d[_0x3b8f3c(0x2a0)+_0x3b8f3c(0x3b9)+'t']=_0x1a6527['YxuSt'];}}),_0x18b4d4[_0x475fa9(0x69b)+_0x475fa9(0x79e)+'d'](_0x130d46),_0x363065[_0x475fa9(0x84b)]['appen'+_0x475fa9(0x79e)+'d'](_0x41498e),_0x363065[_0x475fa9(0x84b)][_0x475fa9(0x69b)+'dChil'+'d'](_0x18b4d4);var _0xf411=_0x4830a0[_0x475fa9(0x4a0)](_0xac7307,-(-0x2096+-0x463*0x4+0x879*0x6),-0x2cc*-0x1+-0x1*0x249b+0x2283,-0x356+0x1f99+-0x1c42,function(){return _0x4b6821['yawOf'+'f'];},function(_0x49d141){var _0xefa7fe=_0x475fa9;_0x4b6821[_0xefa7fe(0x569)+'f']=_0x49d141,_0x37f5a8(),_0x2c1f84();});_0xf411[_0x475fa9(0x4ac)]['datas'+'et'][_0x475fa9(0x949)]='°';var _0x77a9d6=_0x31b7dc('Yaw\x20c'+_0x475fa9(0x686)+'tion',_0x475fa9(0xa7d)+'boxes'+_0x475fa9(0xbd2)+_0x475fa9(0x207));_0x77a9d6[_0x475fa9(0x69b)+_0x475fa9(0x79e)+'d'](_0xf411),_0x363065[_0x475fa9(0x84b)]['appen'+_0x475fa9(0x79e)+'d'](_0x77a9d6);var _0x479d4a=_0x4830a0[_0x475fa9(0x4a0)](_0xac7307,-(0x2685+0xbb0+-0x1*0x31db),0x10*0x97+0x38b+-0xca1,-0x14f*0x7+-0x91c+-0x923*-0x2,function(){var _0x56c315=_0x475fa9;if(_0x4830a0[_0x56c315(0x6e6)]===_0x56c315(0xae7))try{_0x3afd4d=_0x3ecc49['keys'](_0x26ce56)['slice'](0xbb0+-0x7*-0x3fd+-0x279b,0x1*0x1f54+0x1*-0x28f+-0x98f*0x3);}catch(_0x44bb8f){}else return _0x4b6821['pitch'+'Off'];},function(_0x46118c){var _0x45b246=_0x475fa9;_0x4b6821[_0x45b246(0x913)+_0x45b246(0x7dc)]=_0x46118c,_0x37f5a8(),_0x2c1f84();});_0x479d4a['input'][_0x475fa9(0x7a8)+'et'][_0x475fa9(0x949)]='°';var _0x566832=_0x4830a0[_0x475fa9(0x7de)](_0x31b7dc,'Pitch'+_0x475fa9(0x945)+'ectio'+'n','pitch'+_0x475fa9(0xabb)+_0x475fa9(0x40e)+'fied');_0x566832[_0x475fa9(0x69b)+'dChil'+'d'](_0x479d4a),_0x363065['body'][_0x475fa9(0x69b)+'dChil'+'d'](_0x566832);var _0x3c4785=_0x5158ea&&_0x5158ea['view'];_0x363065['body'][_0x475fa9(0x69b)+'dChil'+'d'](_0x4830a0[_0x475fa9(0x427)](_0x39523d,'div',_0x4830a0[_0x475fa9(0xac5)],_0x4830a0['RUdPA']+(_0x3c4785?_0x3c4785[_0x475fa9(0x2a8)+_0x475fa9(0x55a)]?_0x4830a0[_0x475fa9(0x6c6)](_0x4830a0[_0x475fa9(0xa5d)](_0x475fa9(0xd31)+'Look\x20',_0x3c4785[_0x475fa9(0x2a8)+'Look']),_0x3c4785[_0x475fa9(0x77c)+'a']?_0x4830a0[_0x475fa9(0x63d)](_0x4830a0['evRBK'],_0x3c4785['camer'+'a']):''):_0x475fa9(0x592)+_0x475fa9(0x697)+_0x475fa9(0xd6c)+'t':'no\x20Mo'+_0x475fa9(0x697)+'ok\x20ye'+'t')+(_0x49b79c?_0x4830a0[_0x475fa9(0xccb)]('\x0a',_0x49b79c['sourc'+'e']===_0x475fa9(0x720)+'r'?_0x4830a0[_0x475fa9(0x7f2)](_0x4830a0[_0x475fa9(0x690)](_0x4830a0['MNErO'](_0x475fa9(0xb4e)+_0x475fa9(0x447)+_0x475fa9(0xd31)+_0x475fa9(0xac3)+'gette'+'rs\x20-\x20'+'yaw\x20',_0x49b79c[_0x475fa9(0xc42)])+'=',Math[_0x475fa9(0x8dd)](_0x49b79c[_0x475fa9(0x79c)+'w']))+(_0x49b79c[_0x475fa9(0x569)+'f']?_0x4830a0[_0x475fa9(0x619)](_0x4830a0[_0x475fa9(0x797)]('\x20',_0x49b79c[_0x475fa9(0x569)+'f']>-0x2240+-0xef*0x26+0x1fe*0x23?'+':''),Math['round'](_0x49b79c[_0x475fa9(0x569)+'f'])):''),_0x475fa9(0x935)+'h\x20')+_0x49b79c[_0x475fa9(0x913)+'At']+'='+Math[_0x475fa9(0x8dd)](_0x49b79c[_0x475fa9(0x66f)+'tch']):_0x475fa9(0x20e)+'ING\x20f'+_0x475fa9(0x78d)+_0x475fa9(0xc76)+'\x20offs'+_0x475fa9(0xbe7)+'+0x28'+_0x475fa9(0xd52)+'+0x1C'+'.\x0aThe'+'\x20angl'+_0x475fa9(0x6b1)+_0x475fa9(0xbeb)+'are\x20h'+_0x475fa9(0x88d)+_0x475fa9(0xd7e)+_0x475fa9(0xd8c)+_0x475fa9(0x57e)+_0x475fa9(0x369)):'')+(_0x4b6821[_0x475fa9(0x913)+'Off']||_0x4b6821[_0x475fa9(0x569)+'f']?_0x4830a0['CuCUz'](_0x475fa9(0x935)+'h\x20'+Math[_0x475fa9(0x8dd)](_0x4b6821['pitch'+'Off']),_0x4830a0[_0x475fa9(0x76e)])+Math[_0x475fa9(0x8dd)](_0x4b6821[_0x475fa9(0x569)+'f']):''))),_0x58dfcc[_0x475fa9(0xbb7)](_0x363065);}}if(_0x52a54b===_0x4830a0[_0x475fa9(0x533)]){if('cIOae'!=='CsCzM'){var _0x417e46=[[_0x475fa9(0xd70),_0x4830a0['WyFvX'],_0x5158ea?_0x5158ea['versi'+'on']:'-'],[_0x4830a0[_0x475fa9(0xc22)],_0x4830a0['rawTc'],_0x5158ea?_0x4830a0['iHlxj'](_0x5158ea[_0x475fa9(0xc64)+_0x475fa9(0x780)+'ed'],'\x20/\x20')+_0x5158ea[_0x475fa9(0xc64)+'Regis'+'tered'+_0x475fa9(0xb40)]:'-'],[_0x4830a0[_0x475fa9(0x8fb)],_0x475fa9(0x447)+_0x475fa9(0x57b)+_0x475fa9(0xdb5)+'e()',_0x5158ea&&_0x5158ea[_0x475fa9(0xb38)+_0x475fa9(0x64e)]&&_0x5158ea[_0x475fa9(0xb38)+_0x475fa9(0x64e)]['captu'+_0x475fa9(0xa10)]?_0x4830a0['nehbG'](_0x4830a0[_0x475fa9(0x606)](_0x4830a0[_0x475fa9(0x7f2)](Math[_0x475fa9(0x8dd)](_0x5158ea[_0x475fa9(0xb38)+_0x475fa9(0x64e)]['bytes']/(0x125e86+-0x170a7e+0x14abf8)),_0x4830a0[_0x475fa9(0xaca)]),_0x5158ea[_0x475fa9(0xb38)+_0x475fa9(0x64e)]['atMs']),'ms'):'-'],[_0x475fa9(0x590)+'rs',_0x475fa9(0xd7b)+_0x475fa9(0xa2c)+_0x475fa9(0x6e7)+'nc',_0x5158ea&&_0x5158ea[_0x475fa9(0x787)]?_0x4830a0['dvmxA'](String,_0x5158ea[_0x475fa9(0x787)]['playe'+'rCoun'+'t']):'-'],[_0x4830a0[_0x475fa9(0x7e3)],_0x475fa9(0xba5)+'one\x20b'+_0x475fa9(0x51d)+'u',_0x5158ea&&_0x5158ea['esp']?String(_0x5158ea['esp'][_0x475fa9(0xad3)+'Count']):'-'],[_0x4830a0[_0x475fa9(0x842)],_0x475fa9(0x759)+'he\x20li'+'ve\x20ma'+_0x475fa9(0x47e),_0x5158ea&&_0x5158ea[_0x475fa9(0x787)]&&_0x5158ea[_0x475fa9(0x787)]['camer'+'a']?_0x4830a0['KgkXK'](_0x5158ea[_0x475fa9(0x787)]['camer'+'a']+'\x20(',_0x5158ea[_0x475fa9(0x787)]['camer'+'aFrom'])+')':'-']];for(_0x3c90a6=-0x1663+-0x1ae7+0x314a;_0x4830a0['LeVrB'](_0x3c90a6,_0x417e46[_0x475fa9(0x853)+'h']);_0x3c90a6++){var _0x4a2225=_0x31b7dc(_0x417e46[_0x3c90a6][-0xb*-0x2a4+0x20fb+0xc9*-0x4f]),_0x3c9774=_0x39523d('span','sk-va'+'l');_0x3c9774['style']['minWi'+'dth']='0',_0x3c9774[_0x475fa9(0x86d)]['flex']='1',_0x3c9774[_0x475fa9(0x86d)][_0x475fa9(0x3c8)+'lign']=_0x4830a0[_0x475fa9(0x6b7)],_0x3c9774['textC'+_0x475fa9(0x3b9)+'t']=String(_0x417e46[_0x3c90a6][0xbe1+-0x15a1+-0x1*-0x9c2]),_0x3c9774[_0x475fa9(0x7a8)+'et']['k']=_0x417e46[_0x3c90a6][-0xb84+0xa7b+0x10a],_0x4a2225['appen'+_0x475fa9(0x79e)+'d'](_0x3c9774);var _0x56b555=_0x58dfcc['lengt'+'h']?_0x58dfcc[_0x58dfcc['lengt'+'h']-(-0xc66+-0x4fb*0x7+0x2f44)]:null;!_0x56b555&&(_0x56b555=_0x4830a0[_0x475fa9(0xb61)](_0x3c9f67,_0x4830a0[_0x475fa9(0x925)],![]),_0x58dfcc['push'](_0x56b555)),_0x56b555[_0x475fa9(0x84b)]['appen'+_0x475fa9(0x79e)+'d'](_0x4a2225),_0x56b555[_0x475fa9(0x84b)][_0x475fa9(0x37d)+_0x475fa9(0x782)]['sp']=_0x3c9774;}var _0x166324=_0x4830a0[_0x475fa9(0xc8e)](_0x3c9f67,'Playe'+'r',![]),_0x134479=[[_0x475fa9(0xc0c)+_0x475fa9(0x9fd),_0x5158ea&&_0x5158ea[_0x475fa9(0x971)]&&_0x5158ea['local'][_0x475fa9(0xd2f)]?_0x4830a0['lgiyG']+_0x5158ea['local'][_0x475fa9(0xd2f)]:_0x4830a0['NAvem'],_0x5158ea&&_0x5158ea['local']&&_0x5158ea['local'][_0x475fa9(0x251)]?_0x5158ea['local'][_0x475fa9(0x251)][_0x475fa9(0x586)](function(_0x2133c5){var _0x294690=_0x475fa9;return Math[_0x294690(0x8dd)](_0x2133c5*(-0xa19+0xaa9+-0x2c))/(0xa3d+0x1*0x243b+-0x2e14);})['join']('\x20\x20'):'-'],[_0x475fa9(0x378),_0x4830a0[_0x475fa9(0xd11)](_0x4830a0[_0x475fa9(0x24f)]('+',_0x5f3de2),'m'),_0x5158ea&&_0x5158ea['local']&&_0x5158ea[_0x475fa9(0x971)]['eye']?_0x5158ea[_0x475fa9(0x971)]['eye'][_0x475fa9(0x586)](function(_0x28d619){var _0x4ec489=_0x475fa9,_0x1af804={'vbMFI':_0x4ec489(0x6fb)+_0x4ec489(0xcef)+_0x4ec489(0x88c)+_0x4ec489(0x489)+_0x4ec489(0x275)+'isabl'+'ed','LegwQ':function(_0x221dfd,_0x378c34){return _0x221dfd+_0x378c34;},'pjmHV':_0x4ec489(0xccd)+':'};return'fIXLc'===_0x4ec489(0x7e6)?Math[_0x4ec489(0x8dd)](_0x28d619*(-0xac*0xb+0x1fff+-0x1837))/(0x67b+0x4fd*0x1+0x2c5*-0x4):(_0x21487c['warn'](_0x1af804[_0x4ec489(0xaf2)],_0x1af804[_0x4ec489(0xd3e)](_0x1af804[_0x4ec489(0xa77)],_0x12ab27),_0x2035eb),null);})['join']('\x20\x20'):'-'],[_0x4830a0['DwyvF'],'0x10',_0x44733d(_0x5158ea,_0x4830a0[_0x475fa9(0x510)],-0x1*-0xb93+-0xb*-0x2c9+-0x2a26)],[_0x475fa9(0x39f)+_0x475fa9(0xb8b)+'ed','0x40',_0x4830a0[_0x475fa9(0xae5)](_0x44733d,_0x5158ea,_0x475fa9(0xb3f)+_0x475fa9(0x60b)+'ler',-0x185*-0x7+0xf95+-0x19f8)],[_0x475fa9(0xd36)+'heigh'+'t','0x11C',_0x4830a0['OGpBV'](_0x44733d,_0x5158ea,_0x4830a0[_0x475fa9(0x510)],-0x1*0x3b9+-0x1f3d+0x1*0x2412)],['Healt'+'h',_0x4830a0[_0x475fa9(0x721)],_0x4830a0[_0x475fa9(0x488)](_0x44733d,_0x5158ea,_0x475fa9(0x2ad)+'hScri'+'pt',-0x249*0x1+0x1e3a+-0x1b31)]];for(_0x3c90a6=-0xdbb+0x126*-0x19+0x109*0x29;_0x4830a0['EcjbY'](_0x3c90a6,_0x134479['lengt'+'h']);_0x3c90a6++){var _0x354d81=_0x31b7dc(_0x134479[_0x3c90a6][-0x5*0x2cf+-0x10b8+0x177*0x15]),_0x1de989=_0x4830a0['VSFOv'](_0x39523d,_0x475fa9(0x37e),'sk-va'+'l');_0x1de989['style']['minWi'+_0x475fa9(0xb5a)]='0',_0x1de989[_0x475fa9(0x86d)]['flex']='1',_0x1de989[_0x475fa9(0x86d)][_0x475fa9(0x3c8)+'lign']=_0x4830a0[_0x475fa9(0x6b7)],_0x1de989['textC'+_0x475fa9(0x3b9)+'t']=String(_0x134479[_0x3c90a6][0x67*0x44+-0x2*-0x125+-0x1da4]),_0x1de989['datas'+'et']['k']=_0x134479[_0x3c90a6][0x1a1*-0x2+0x5*-0x271+-0x108*-0xf],_0x354d81[_0x475fa9(0x69b)+_0x475fa9(0x79e)+'d'](_0x1de989),_0x166324[_0x475fa9(0x84b)][_0x475fa9(0x69b)+'dChil'+'d'](_0x354d81),_0x166324[_0x475fa9(0x84b)][_0x475fa9(0x37d)+_0x475fa9(0x782)]['sp']=_0x1de989;}_0x58dfcc['push'](_0x166324);}else{_0x10e6da['preve'+_0x475fa9(0xc67)+'ault'](),_0x1a6527[_0x475fa9(0x47b)](_0x2abea1,_0x54513c['on'],_0x2849ef['facto'+'r']-(-0x94*0x43+0xfa8+-0x1c*-0xd3+0.5));return;}}if(_0x4830a0[_0x475fa9(0x2f5)](_0x52a54b,_0x475fa9(0x90e))){if(_0x4830a0[_0x475fa9(0xdbe)]('OijNb',_0x475fa9(0x751))){_0x41419e(_0xe4fb5c[_0x475fa9(0x44c)]);try{var _0x5bf902=_0x1aae36['inner'+'Heigh'+'t']||-0x107*-0x17+0x7*0x53b+-0x391e;if(_0x4830a0[_0x475fa9(0x1ef)](_0x5bf902,0x2*0xdc6+0x2044+-0x3964))_0x3ba244(![]);}catch(_0x26b918){}}else{var _0x376a32=_0x3c9f67(_0x475fa9(0x486)+_0x475fa9(0xba1)+'s',![]),_0x485580=_0x5158ea&&_0x5158ea[_0x475fa9(0x7fa)+'ngs']&&_0x5158ea[_0x475fa9(0x7fa)+_0x475fa9(0x88b)][_0x475fa9(0x853)+'h']?_0x5158ea[_0x475fa9(0x7fa)+'ngs']['join']('\x0a'):'no\x20wa'+_0x475fa9(0xcb2)+'s';_0x376a32[_0x475fa9(0x84b)][_0x475fa9(0x69b)+_0x475fa9(0x79e)+'d'](_0x39523d('div','sk-pr'+'e',_0x485580)),_0x58dfcc[_0x475fa9(0xbb7)](_0x376a32);var _0x665cfd=_0x3c9f67(_0x475fa9(0x8f2)+'t',![]),_0x3a1271=_0x39523d('butto'+'n',_0x4830a0['mIpux'],_0x475fa9(0x3c5)+_0x475fa9(0x9e7)+'to\x20cl'+'ipboa'+'rd');_0x3a1271[_0x475fa9(0x73a)]='butto'+'n',_0x3a1271[_0x475fa9(0x93e)+'ck']=function(){var _0x3da19b=_0x475fa9,_0x46677c={'csdwg':function(_0x18f1ed,_0x59b1db){return _0x18f1ed===_0x59b1db;},'KHoiY':'Copie'+'d','MHzDt':_0x1a6527[_0x3da19b(0x6b8)],'tDjmP':function(_0x78bacc,_0x4dc364){return _0x78bacc+_0x4dc364;},'pEBgn':function(_0x132033,_0x286305){return _0x132033+_0x286305;},'tHqbR':'windo'+'w.','TenZg':_0x3da19b(0x9d8)+'le'};try{if(_0x3da19b(0xa71)==='Wtafy'){var _0xb71388=_0x19f3e6[_0x3da19b(0x36f)+_0x3da19b(0xa86)+_0x3da19b(0xd45)]&&_0x296317['Unity'+_0x3da19b(0xa86)+_0x3da19b(0xd45)]['Runti'+'me'];if(_0xb71388&&_0x46677c['csdwg'](typeof _0xb71388[_0x3da19b(0x8c9)+'veGam'+'e'],_0x3da19b(0x711)+_0x3da19b(0x9fd))){var _0x59241b=_0xb71388['resol'+'veGam'+'e']();if(_0x59241b)return _0x1bead3[_0x3da19b(0xc74)+'e']=_0x3da19b(0xa13)+_0x3da19b(0x25e)+_0x3da19b(0x7f3)+_0x3da19b(0x623)+')',_0x59241b;}if(_0xb71388&&_0xb71388[_0x3da19b(0xdb9)])return _0xc74533['sourc'+'e']=_0x3da19b(0xa13)+'me._g'+'ame',_0xb71388;}else{var _0x369cd3=_0x1a6527['oHuKf'](_0x14987d+'\x0a'+JSON['strin'+'gify'](_0x5158ea,null,0xdc1+0x5*0x458+0xe3*-0x28),'\x0a')+_0x538b47;if(navigator[_0x3da19b(0x87e)+_0x3da19b(0x359)]&&navigator['clipb'+'oard'][_0x3da19b(0x9bc)+_0x3da19b(0xc66)]){if(_0x1a6527['wVPCB'](_0x3da19b(0xc51),_0x3da19b(0xc51)))navigator['clipb'+'oard'][_0x3da19b(0x9bc)+'Text'](_0x369cd3)[_0x3da19b(0xb5d)](function(){var _0x5282b2=_0x3da19b;_0x3a1271['textC'+_0x5282b2(0x3b9)+'t']=_0x46677c['KHoiY'];});else{var _0x2cadee=_0x155929[_0x52c3c7[_0x95d087]];if(_0x2cadee&&typeof _0x2cadee===_0x46677c['MHzDt']&&_0x2cadee[_0x3da19b(0xa09)+'e']&&_0x2cadee[_0x3da19b(0xa09)+'e']['HEAPU'+'8']&&_0x2cadee[_0x3da19b(0xa09)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x3358a7[_0x3da19b(0xc74)+'e']=_0x46677c[_0x3da19b(0x818)](_0x46677c[_0x3da19b(0x6b3)](_0x46677c[_0x3da19b(0x539)],_0x52d57f[_0x5d8831]),_0x46677c[_0x3da19b(0x6d7)]),_0x2cadee;}}else _0x3a1271[_0x3da19b(0x2a0)+'onten'+'t']=_0x3da19b(0x2c5)+_0x3da19b(0xb6e)+'block'+_0x3da19b(0xd95)+'open\x20'+_0x3da19b(0xd03)+_0x3da19b(0xc8b)+_0x3da19b(0x9e5)+'ad';}}catch(_0x25e881){_0x3a1271[_0x3da19b(0x2a0)+'onten'+'t']=_0x1a6527['DEWro'];}},_0x665cfd[_0x475fa9(0x84b)]['appen'+'dChil'+'d'](_0x39523d(_0x475fa9(0xc6f),_0x4830a0['otOBC'],_0x4830a0[_0x475fa9(0x7d2)])),_0x665cfd[_0x475fa9(0x84b)]['appen'+'dChil'+'d'](_0x3a1271),_0x58dfcc[_0x475fa9(0xbb7)](_0x665cfd);}}return _0x58dfcc;}function _0x4448ec(){var _0x1f6622=_0x3b5618;if(_0x4718de[_0x1f6622(0x97a)])_0x2619d5(!![]);}function _0x256aee(){var _0x90dd78=_0x3b5618;try{var _0x175993=localStorage[_0x90dd78(0xa27)+'em'](_0x21a893);if(!_0x175993)return;var _0x4bae9a=JSON[_0x90dd78(0xa85)](_0x175993);if(_0x4bae9a&&_0x4830a0['YCNXT'](typeof _0x4bae9a['x'],_0x90dd78(0x9fc)+'r')&&typeof _0x4bae9a['y']==='numbe'+'r')_0x4718de[_0x90dd78(0x550)]=_0x4bae9a;}catch(_0xe4da83){}}function _0x442b53(){var _0x340d60=_0x3b5618,_0x314560={'gZyQz':_0x340d60(0xa29)};if(_0x4830a0[_0x340d60(0xa1b)]==='XeHGi'){var _0x4e0181={'adsxv':_0x340d60(0xd04)},_0x3792af=new _0x1bcca8(_0x340d60(0x978)+'a-sw');_0x3792af[_0x340d60(0x503)+_0x340d60(0xbb3)]=function(_0x533dd3){var _0x110a9d=_0x340d60,_0x370a09=_0x533dd3['data'];if(_0x370a09&&_0x370a09[_0x110a9d(0x688)+_0x110a9d(0xa42)]===_0x387d05&&_0x370a09[_0x110a9d(0x646)]===_0x4e0181[_0x110a9d(0x428)])_0x3c8b77(_0x370a09[_0x110a9d(0xd04)],_0x370a09[_0x110a9d(0x963)]);};}else try{if(_0x340d60(0x82f)!==_0x340d60(0x43d))localStorage[_0x340d60(0xa04)+'em'](_0x21a893,JSON[_0x340d60(0xda6)+_0x340d60(0x795)](_0x4718de['pos']));else{var _0xb09444=_0x469492;if(_0xb09444&&_0xb09444['el'])_0xb09444['el'][_0x340d60(0x86d)][_0x340d60(0x95b)+'ay']=_0x209b50?'':_0x340d60(0xa29);var _0x2f9b6b=_0x1a4a77;if(_0x2f9b6b&&_0x2f9b6b['cv'])_0x2f9b6b['cv']['style'][_0x340d60(0x95b)+'ay']=_0x83ad2b?'':_0x314560['gZyQz'];}}catch(_0x323d22){}}function _0x48cf84(){var _0x20ba88=_0x3b5618,_0x5d22d4={'VwyYr':_0x4830a0['NnoEl'],'CWhJo':_0x4830a0[_0x20ba88(0x24b)],'lloMU':_0x4830a0[_0x20ba88(0xa1d)]};if(_0x4830a0[_0x20ba88(0xd17)](_0x20ba88(0x883),'QIbli'))try{var _0x6636f=_0x435a58&&_0x51a93f[_0x20ba88(0x787)];if(!_0x6636f)return;if(_0x9133f2['boxes']&&!_0x1baf48())_0x1339d9['boxes']=![];var _0x13e539=!_0x9bd3ab['on']?_0x20ba88(0x85c)+'ff':_0x4aabe0[_0x20ba88(0x96d)]?_0x5d22d4[_0x20ba88(0x38e)]:_0x5d22d4['CWhJo'];if(_0x13e539!==_0x6636f['textC'+_0x20ba88(0x3b9)+'t'])_0x6636f['textC'+_0x20ba88(0x3b9)+'t']=_0x13e539;_0x6636f[_0x20ba88(0x86d)][_0x20ba88(0x7e1)+_0x20ba88(0x8dd)]=_0x2dc052['on']?_0x4123dc:'trans'+'paren'+'t',_0x6636f['style'][_0x20ba88(0xccd)]=_0x500396['on']?_0x5d22d4[_0x20ba88(0x973)]:_0x20ba88(0x64c)+'f5';}catch(_0x18eb11){}else{var _0x15aa4d=_0x4718de[_0x20ba88(0x2e3)];if(!_0x15aa4d||!_0x15aa4d[_0x20ba88(0x86d)])return;_0x4718de[_0x20ba88(0x550)]?(_0x15aa4d['style'][_0x20ba88(0x5d0)]=_0x4718de[_0x20ba88(0x550)]['x']+'px',_0x15aa4d[_0x20ba88(0x86d)][_0x20ba88(0x5d1)]=_0x4830a0[_0x20ba88(0x6c8)](_0x4718de[_0x20ba88(0x550)]['y'],'px'),_0x15aa4d[_0x20ba88(0x86d)][_0x20ba88(0x9a3)]=_0x4830a0['XDGiA'],_0x15aa4d[_0x20ba88(0x86d)]['botto'+'m']='auto'):(_0x15aa4d[_0x20ba88(0x86d)][_0x20ba88(0x5d0)]=_0x20ba88(0x379),_0x15aa4d[_0x20ba88(0x86d)]['top']='auto',_0x15aa4d[_0x20ba88(0x86d)][_0x20ba88(0x9a3)]=_0x4830a0['Hblts'],_0x15aa4d['style']['botto'+'m']=_0x4830a0[_0x20ba88(0x349)]);}}function _0x599bd5(_0x278b7e,_0x412d9d){var _0x4f6578=_0x3b5618;try{var _0x1b0494=![],_0x4ca242=0x15ed+-0x1*-0x1fe7+0x35*-0x104,_0x5d4a50=0x8*0x6d+-0xf7*-0x3+-0x1*0x64d;_0x412d9d['style']['curso'+'r']=_0x4830a0['HvGvy'],_0x412d9d[_0x4f6578(0x86d)][_0x4f6578(0x8e2)+_0x4f6578(0x566)+'n']='none';var _0x413fd0=function(_0x41082b){var _0x20c49d=_0x4f6578,_0x31b605=(_0x20c49d(0x238)+_0x20c49d(0xbec)+_0x20c49d(0x60e))['split']('|'),_0x58f7a7=-0x1*0x574+0x85e+-0x2ea;while(!![]){switch(_0x31b605[_0x58f7a7++]){case'0':_0x1b0494=!![];continue;case'1':(!_0x278b7e['style']['top']||_0x278b7e[_0x20c49d(0x86d)]['top']===_0x4830a0[_0x20c49d(0xa03)])&&(_0xc0ab0d['top']=_0x4830a0[_0x20c49d(0xade)](window[_0x20c49d(0x34b)+_0x20c49d(0x6b9)+'t']||0x1*0x1e8b+-0x1b33+-0x1*0x358,_0x278b7e[_0x20c49d(0x739)+_0x20c49d(0xa54)+'ht']||-0x1a96+-0xa15+-0x263b*-0x1)-(-0x28b*-0x6+0x1822*-0x1+0x8f8));continue;case'2':var _0xc0ab0d={'left':parseFloat(_0x278b7e['style']['left'])||0x1cd2+0x1728+0x1*-0x33fa,'top':parseFloat(_0x278b7e[_0x20c49d(0x86d)][_0x20c49d(0x5d1)])||-0x1aaf+0x1929+0x186};continue;case'3':_0x5d4a50=(_0x41082b[_0x20c49d(0xace)+'tY']||-0x7dc*-0x1+0xdd8+0x73c*-0x3)-_0xc0ab0d['top'];continue;case'4':_0x4ca242=(_0x41082b['clien'+'tX']||0x3*0xf7+-0x21d1+0x1eec)-_0xc0ab0d[_0x20c49d(0x5d0)];continue;case'5':_0x412d9d[_0x20c49d(0x86d)]['curso'+'r']=_0x20c49d(0x2b3)+_0x20c49d(0x9f5);continue;case'6':try{_0x41082b[_0x20c49d(0xc5f)+_0x20c49d(0xc67)+_0x20c49d(0x746)]();}catch(_0x3d4120){}continue;case'7':(!_0x278b7e['style'][_0x20c49d(0x5d0)]||_0x278b7e['style'][_0x20c49d(0x5d0)]===_0x20c49d(0x379))&&(_0xc0ab0d['left']=_0x4830a0[_0x20c49d(0xa7e)](window['inner'+'Width']||-0x75*0x9+-0x997+0xdb4,_0x278b7e[_0x20c49d(0x739)+_0x20c49d(0xaff)+'h']||-0x14e6+0x3d7*-0x1+0x199*0x11)-(0x4b5+-0x22c7+0xc6*0x27));continue;}break;}},_0x556657=function(_0x5236df){var _0x52f3d3=_0x4f6578;if('xTree'===_0x52f3d3(0xc6b)){var _0x71b492=(_0x52f3d3(0x84f)+_0x52f3d3(0x3cb)+_0x52f3d3(0xac7)+'|6|2')[_0x52f3d3(0x8a1)]('|'),_0x283cf1=-0x263d+-0x2385+0x49c2;while(!![]){switch(_0x71b492[_0x283cf1++]){case'0':_0x278b7e[_0x52f3d3(0x86d)][_0x52f3d3(0x9a3)]=_0x52f3d3(0x379);continue;case'1':var _0x4e99ee=_0x278b7e['offse'+_0x52f3d3(0xaff)+'h']||0x170f+0x103c+-0x24df,_0x35220a=_0x278b7e['offse'+'tHeig'+'ht']||-0x579+0xd0*0x7+0x159;continue;case'2':_0x4718de['pos']={'x':_0xa12cc4,'y':_0x43a67b};continue;case'3':_0x278b7e[_0x52f3d3(0x86d)][_0x52f3d3(0x5d1)]=_0x43a67b+'px';continue;case'4':if(!_0x1b0494)return;continue;case'5':_0x43a67b=Math['max'](0xd96+-0x1e7f*-0x1+-0x219*0x15,Math[_0x52f3d3(0xc28)]((window[_0x52f3d3(0x34b)+'Heigh'+'t']||-0x11f2*0x1+0x1424*-0x1+-0xf*-0x28a)-_0x35220a-(0x958+-0x38*0xa3+0x1a58),_0x43a67b));continue;case'6':_0x278b7e['style'][_0x52f3d3(0xafb)+'m']='auto';continue;case'7':var _0xa12cc4=(_0x5236df['clien'+'tX']||0x8a+0x1c44+-0x1cce)-_0x4ca242,_0x43a67b=(_0x5236df[_0x52f3d3(0xace)+'tY']||0x1a10+-0x4b*-0x9+-0x1cb3)-_0x5d4a50;continue;case'8':_0x278b7e[_0x52f3d3(0x86d)][_0x52f3d3(0x5d0)]=_0x4830a0[_0x52f3d3(0xda1)](_0xa12cc4,'px');continue;case'9':_0xa12cc4=Math[_0x52f3d3(0x8ae)](-0xf7*-0x13+0x35e+-0x15ab,Math[_0x52f3d3(0xc28)](_0x4830a0['CQysz'](window[_0x52f3d3(0x34b)+_0x52f3d3(0x8e6)]||0x22d8+0x1d4b*0x1+-0x4023,_0x4e99ee)-(0xde*0x1+-0x304*0xc+-0x5*-0x712),_0xa12cc4));continue;}break;}}else return _0x1862dc['sourc'+'e']=_0x52f3d3(0xa4a)+_0x52f3d3(0x295)+'ntime'+'.reso'+'lveGa'+_0x52f3d3(0x7bf),_0x44765f;},_0x595081=function(){var _0x5ea676=_0x4f6578;if(!_0x1b0494)return;_0x1b0494=![],_0x412d9d['style'][_0x5ea676(0xca5)+'r']=_0x4830a0[_0x5ea676(0x8e0)],_0x442b53();};_0x412d9d[_0x4f6578(0x6e0)+_0x4f6578(0xbd8)+'stene'+'r'](_0x4830a0[_0x4f6578(0x964)],_0x413fd0),window[_0x4f6578(0x6e0)+_0x4f6578(0xbd8)+'stene'+'r']('mouse'+'move',_0x556657),window[_0x4f6578(0x6e0)+_0x4f6578(0xbd8)+_0x4f6578(0x76f)+'r'](_0x4830a0[_0x4f6578(0xc33)],_0x595081),_0x412d9d['addEv'+_0x4f6578(0xbd8)+_0x4f6578(0x76f)+'r'](_0x4830a0[_0x4f6578(0x24d)],_0x413fd0,{'passive':![]}),window[_0x4f6578(0x6e0)+_0x4f6578(0xbd8)+'stene'+'r'](_0x4830a0[_0x4f6578(0xab3)],_0x556657,{'passive':![]}),window['addEv'+_0x4f6578(0xbd8)+'stene'+'r'](_0x4f6578(0x8e2)+_0x4f6578(0x4a6),_0x595081);}catch(_0x3d1a2a){}}function _0x5bbd72(){var _0x21bf4a=_0x3b5618,_0x3c9738={'ViQFy':function(_0x4afe82,_0x463597){var _0x5d862b=_0x1d88;return _0x4830a0[_0x5d862b(0x5c1)](_0x4afe82,_0x463597);},'DyPPA':'uWYum'};if(_0x4718de[_0x21bf4a(0x52d)])return _0x4718de['root'];try{if(!document['body']||!document[_0x21bf4a(0x84b)][_0x21bf4a(0x69b)+_0x21bf4a(0x79e)+'d'])return null;if(!document[_0x21bf4a(0x2e9)+'ement'+_0x21bf4a(0x83e)](_0x4830a0['INzgP'])){var _0x4ef11f=document[_0x21bf4a(0x839)+_0x21bf4a(0xcdd)+_0x21bf4a(0xbdc)](_0x21bf4a(0x86d));_0x4ef11f['id']=_0x4830a0[_0x21bf4a(0x4c4)],_0x4ef11f[_0x21bf4a(0x2a0)+_0x21bf4a(0x3b9)+'t']=_0x471868,(document[_0x21bf4a(0xd42)]||document['docum'+'entEl'+_0x21bf4a(0x56e)])[_0x21bf4a(0x69b)+_0x21bf4a(0x79e)+'d'](_0x4ef11f);}var _0x5825a0=_0x39523d(_0x4830a0['xEWux'],_0x4830a0['RqBqW']);_0x5825a0['id']='sakur'+'a-men'+_0x21bf4a(0x385)+'t';var _0x3d7c61=_0x39523d(_0x21bf4a(0xc6f),_0x21bf4a(0x756)+'de'),_0x527db1=_0x39523d(_0x21bf4a(0xc6f),'mn-lo'+'go',_0x370697);_0x3d7c61[_0x21bf4a(0x69b)+'dChil'+'d'](_0x527db1);var _0x370864=_0x39523d(_0x4830a0['xEWux'],'mn-ma'+'in'),_0xc8ba44=_0x39523d('div',_0x4830a0['xysTy']),_0x3af675=_0x39523d('div',_0x21bf4a(0x205)+_0x21bf4a(0x94e)),_0x91c231=_0x4830a0['wPtNU'](_0x39523d,_0x4830a0[_0x21bf4a(0x451)],'mn-h','Sakur'+'a\x20Ski'+_0x21bf4a(0x5f4)+'z'),_0x6f0e40=_0x4830a0['ONnAz'](_0x39523d,_0x4830a0['xEWux'],_0x21bf4a(0x7e4)+'b',_0x4830a0['wNolS']);_0x3af675[_0x21bf4a(0x69b)+_0x21bf4a(0x79e)+'d'](_0x91c231),_0x3af675[_0x21bf4a(0x69b)+'dChil'+'d'](_0x6f0e40);var _0x2de870=_0x39523d('div',_0x21bf4a(0xbcd)+'ose','<svg\x20'+_0x21bf4a(0x7b7)+'ox=\x220'+_0x21bf4a(0x685)+'\x2024\x22>'+'<path'+_0x21bf4a(0x4ff)+_0x21bf4a(0xaaa)+_0x21bf4a(0x49f)+'18\x206\x20'+_0x21bf4a(0x5fd)+_0x21bf4a(0x330)+'vg>');_0x2de870[_0x21bf4a(0x93e)+'ck']=function(){var _0x42768a=_0x21bf4a;_0x4830a0[_0x42768a(0xd2a)](_0x2619d5,![]);},_0xc8ba44[_0x21bf4a(0x69b)+_0x21bf4a(0x79e)+'d'](_0x3af675),_0xc8ba44[_0x21bf4a(0x69b)+'dChil'+'d'](_0x2de870);var _0x1ea554=_0x4830a0['VSFOv'](_0x39523d,'div',_0x4830a0['sjJOY']);_0x370864[_0x21bf4a(0x69b)+_0x21bf4a(0x79e)+'d'](_0xc8ba44),_0x370864['appen'+'dChil'+'d'](_0x1ea554),_0x5825a0[_0x21bf4a(0x69b)+'dChil'+'d'](_0x3d7c61),_0x5825a0[_0x21bf4a(0x69b)+_0x21bf4a(0x79e)+'d'](_0x370864),document[_0x21bf4a(0x84b)][_0x21bf4a(0x69b)+_0x21bf4a(0x79e)+'d'](_0x5825a0),_0x4718de['root']=_0x5825a0,_0x4718de[_0x21bf4a(0xcc8)]=_0x1ea554,_0x4718de[_0x21bf4a(0xd42)]=_0x91c231,_0x4718de['sub']=_0x6f0e40,_0x4830a0['tmAsk'](_0x256aee),_0x4830a0[_0x21bf4a(0x7f1)](_0x48cf84),_0x4830a0[_0x21bf4a(0x225)](_0x599bd5,_0x5825a0,_0xc8ba44);var _0x58c9f8={};for(var _0x38aedc=0x1f25+-0x1b4f+-0x3d6;_0x4830a0[_0x21bf4a(0x771)](_0x38aedc,_0x214307[_0x21bf4a(0x853)+'h']);_0x38aedc++){var _0x43d0da=_0x214307[_0x38aedc],_0x2c27c3=_0x4830a0[_0x21bf4a(0x488)](_0x39523d,_0x4830a0['QytGe'],_0x4830a0[_0x21bf4a(0x656)],_0x4830a0[_0x21bf4a(0x9bf)](_0x4830a0[_0x21bf4a(0xa63)](_0x4830a0[_0x21bf4a(0xbd5)],_0x43d0da['label']),_0x4830a0[_0x21bf4a(0x4fd)]));_0x2c27c3['type']='butto'+'n',_0x2c27c3[_0x21bf4a(0x6e9)]=_0x43d0da['label'],function(_0x1a2422){var _0x124518={'RmnQK':function(_0xde30d2,_0x36fff2){return _0xde30d2(_0x36fff2);}};_0x2c27c3['oncli'+'ck']=function(){var _0xf5c27e=_0x1d88;'KoHEy'!==_0xf5c27e(0x32e)?_0x232d18(_0x14bd51):_0x124518['RmnQK'](_0x2702da,_0x1a2422);};}(_0x43d0da['id']),_0x58c9f8[_0x43d0da['id']]=_0x2c27c3,_0x3d7c61[_0x21bf4a(0x69b)+'dChil'+'d'](_0x2c27c3);}_0x4718de['butto'+'ns']=_0x58c9f8;var _0x3f8f54=_0x4830a0[_0x21bf4a(0x488)](_0x39523d,_0x4830a0['xEWux'],null,_0x4fb3f9);return _0x3f8f54['id']='sakur'+'a-pet'+'al',_0x3f8f54[_0x21bf4a(0x6e9)]=_0x4830a0[_0x21bf4a(0x85d)],_0x3f8f54[_0x21bf4a(0x564)+_0x21bf4a(0x90d)+'er']=function(){var _0x1c839e=_0x21bf4a;if(_0x4830a0[_0x1c839e(0x8aa)](_0x1c839e(0x9bb),_0x4830a0[_0x1c839e(0x25d)]))_0x3f8f54['style'][_0x1c839e(0x640)+'ty']='1';else{var _0x117fcc=_0x61f62f();return _0x117fcc&&_0x117fcc['feet']?_0x117fcc[_0x1c839e(0x251)][0x119*0x16+0x1*-0x1c22+0x3fd*0x1]:null;}},_0x3f8f54[_0x21bf4a(0x564)+_0x21bf4a(0x358)+'ve']=function(){var _0xbc7b43=_0x21bf4a;_0x3f8f54[_0xbc7b43(0x86d)]['opaci'+'ty']=_0x4718de[_0xbc7b43(0x97a)]?'1':'.5';},_0x3f8f54[_0x21bf4a(0x93e)+'ck']=function(_0x2e6e8b){var _0x59b778=_0x21bf4a;if(_0x3c9738['ViQFy'](_0x3c9738['DyPPA'],_0x3c9738[_0x59b778(0x9a2)]))_0x15f3b9['yawOf'+'f']=_0x439a38,_0x194ce4(),_0x12c49c();else{if(_0x2e6e8b&&_0x2e6e8b[_0x59b778(0x84c)+_0x59b778(0x8e9)+_0x59b778(0x413)])_0x2e6e8b['stopP'+_0x59b778(0x8e9)+_0x59b778(0x413)]();_0x2619d5(!_0x4718de['open']);}},document[_0x21bf4a(0x84b)][_0x21bf4a(0x69b)+'dChil'+'d'](_0x3f8f54),_0x4718de[_0x21bf4a(0x3a3)]=_0x3f8f54,_0x4830a0['DpWCv'](setInterval,function(){var _0xc1366f=_0x21bf4a,_0x285906={'LTfVg':function(_0x1fd9e2,_0x25da93){return _0x1fd9e2(_0x25da93);}};if(_0x4830a0['NkkXx']('KdSrY',_0x4830a0['lQRAA']))try{if(_0x4830a0[_0xc1366f(0xcf9)]===_0x4830a0[_0xc1366f(0xcf9)]){if(!_0x4718de['petal'])return;var _0x574df5=_0x4830a0[_0xc1366f(0x968)](_0x212618);_0x4718de[_0xc1366f(0x3a3)][_0xc1366f(0x86d)]['opaci'+'ty']=_0x4718de['open']?'1':_0x574df5?'.8':_0x4830a0['fTJis'],_0x4718de['petal'][_0xc1366f(0x6e9)]=_0x574df5?_0x4830a0['VYyTs']:_0xc1366f(0x6d1)+_0xc1366f(0x56b)+_0xc1366f(0x5f4)+'z\x20-\x20w'+'aitin'+_0xc1366f(0xb5b)+'\x20the\x20'+_0xc1366f(0x2b4)+_0xc1366f(0xcca)+_0xc1366f(0x3fc);}else try{_0x46da71['setIt'+'em'](_0x1d994f,_0x285906['LTfVg'](_0x2ce2d6,_0x3ec705['fov']));}catch(_0x50d91c){}}catch(_0x2a5226){}else _0x3e4eaf(!![]);},-0x2325+-0x2051*-0x1+0x10*0x59),_0x4718de[_0x21bf4a(0x52d)]=!![],_0x2702da(_0x4718de[_0x21bf4a(0x44c)]),_0x5825a0;}catch(_0x4c6d51){if(_0x4830a0['nFmOd'](_0x4830a0[_0x21bf4a(0x2fb)],_0x21bf4a(0x2ee))){if(_0x4227e3)return _0x50bde4;try{var _0x429494=_0x4830a0[_0x21bf4a(0xbef)][_0x21bf4a(0x8a1)]('|'),_0x3fbc3f=-0x7d9*-0x3+0x1d13+-0x349e;while(!![]){switch(_0x429494[_0x3fbc3f++]){case'0':_0x11e381['style'][_0x21bf4a(0xd9e)+'xt']=_0x21bf4a(0x6c7)+'ion:f'+_0x21bf4a(0x3fe)+_0x21bf4a(0xb05)+_0x21bf4a(0xbdf)+_0x21bf4a(0x9c5)+_0x21bf4a(0x227)+_0x21bf4a(0x731)+_0x21bf4a(0xd4b)+_0x21bf4a(0x351)+_0x21bf4a(0x2e5)+'event'+_0x21bf4a(0xc58)+'e;';continue;case'1':_0x44da9e={'cv':_0x11e381};continue;case'2':return _0x5248f1;case'3':var _0x11e381=_0x1a2921['creat'+'eElem'+_0x21bf4a(0xbdc)]('canva'+'s');continue;case'4':_0x11e381['id']=_0x21bf4a(0x978)+_0x21bf4a(0x8f5)+'es';continue;case'5':if(!_0x143c13[_0x21bf4a(0x84b)]||!_0xafbbd7['body'][_0x21bf4a(0x69b)+'dChil'+'d'])return null;continue;case'6':_0x1a4fda[_0x21bf4a(0x84b)][_0x21bf4a(0x69b)+'dChil'+'d'](_0x11e381);continue;}break;}}catch(_0x470adb){return null;}}else return console['warn']('%c[sa'+'kura]'+_0x21bf4a(0xbe9)+_0x21bf4a(0x5aa)+_0x21bf4a(0x931)+'le',_0x21bf4a(0xccd)+':'+_0xf63150,_0x4c6d51),null;}}function _0x2702da(_0x4b91d7){var _0x2ef783=_0x3b5618;_0x4718de[_0x2ef783(0x44c)]=_0x4b91d7,_0x4718de['syncs']=[];if(!_0x4718de['cols'])return;var _0x27ae6e=null;for(var _0x243682=-0x1521*-0x1+0x29*0x7a+-0x1*0x28ab;_0x243682<_0x214307[_0x2ef783(0x853)+'h'];_0x243682++)if(_0x214307[_0x243682]['id']===_0x4b91d7)_0x27ae6e=_0x214307[_0x243682];_0x4718de['head']['textC'+'onten'+'t']=_0x4830a0['oIDCx']('Sakur'+'a\x20Ski'+_0x2ef783(0x5f4)+_0x2ef783(0x501),_0x27ae6e&&_0x27ae6e[_0x2ef783(0xb1e)]||'?');for(var _0x396eba in _0x4718de[_0x2ef783(0x35f)+'ns']){if(_0x4830a0['IoPug']===_0x4830a0['VCpZx'])try{var _0x5073c4=_0x2d196f['max'](-0x188b+-0x104b*-0x1+0x841,_0x299e6e[_0x2ef783(0x34b)+_0x2ef783(0x8e6)]||_0x27375b['docum'+'entEl'+_0x2ef783(0x56e)][_0x2ef783(0xace)+_0x2ef783(0xaff)+'h']||0x1*0x43f+-0x1c6*0xd+0x12cf),_0x240a51=_0x1fe815['max'](-0xf65+0x258b+-0x1*0x1625,_0x230b5b[_0x2ef783(0x34b)+'Heigh'+'t']||_0x13cb52['docum'+_0x2ef783(0x8e7)+_0x2ef783(0x56e)][_0x2ef783(0xace)+_0x2ef783(0xa54)+'ht']||0x17*0x9c+-0x185c+-0xa58*-0x1);return(_0x4830a0[_0x2ef783(0x5c1)](_0x4323fc['cv'][_0x2ef783(0x430)],_0x5073c4)||_0xd68be9['cv'][_0x2ef783(0x464)+'t']!==_0x240a51)&&(_0x2ad9ea['cv']['width']=_0x5073c4,_0x5a92ff['cv']['heigh'+'t']=_0x240a51),{'w':_0x5073c4,'h':_0x240a51};}catch(_0x51634a){return{'w':0x0,'h':0x0};}else{if(_0x4718de[_0x2ef783(0x35f)+'ns'][_0x396eba][_0x2ef783(0xc12)+_0x2ef783(0xcba)])_0x4718de[_0x2ef783(0x35f)+'ns'][_0x396eba][_0x2ef783(0xc12)+_0x2ef783(0xbce)]=_0x4830a0['dSTSk']('mn-ta'+'b',_0x4830a0[_0x2ef783(0x823)](_0x396eba,_0x4b91d7)?'\x20acti'+'ve':'');}}var _0x1ea593=[];try{if(_0x4830a0[_0x2ef783(0xa5f)](_0x4830a0[_0x2ef783(0xc6c)],_0x4830a0[_0x2ef783(0xc6c)]))_0x1ea593=_0x4830a0['QRhVq'](_0x532a3c,_0x4b91d7);else return _0x53fa93[_0x2ef783(0x8dd)](_0x4830a0[_0x2ef783(0x4f3)](_0x3b855e,0x1966+-0x1221+-0x6e1))/(0x25ad+-0x570+0x1*-0x1fd9);}catch(_0x463941){if(_0x4830a0['McMxw'](_0x4830a0[_0x2ef783(0xac2)],'novKH')){var _0x3b87e7=_0x4830a0['gNlxm'][_0x2ef783(0x8a1)]('|'),_0x4fe6a9=0x1*-0x1aff+-0xb*0x16b+0x2*0x154c;while(!![]){switch(_0x3b87e7[_0x4fe6a9++]){case'0':_0x196280[_0x2ef783(0x86d)][_0x2ef783(0xd9e)+'xt']=_0x4830a0[_0x2ef783(0x833)](_0x4830a0['stSrs'](_0x4830a0[_0x2ef783(0xbc1)]('posit'+'ion:f'+_0x2ef783(0x3fe)+'left:'+'12px;'+'top:1'+_0x2ef783(0x630)+_0x2ef783(0x64a)+'x:214'+'74829'+'99;cu'+'rsor:'+_0x2ef783(0x652)+'er;us'+_0x2ef783(0x8ed)+_0x2ef783(0x63e)+'none;'+_0x4830a0['yrRLT'],_0x4d8df1),';'),_0x2ef783(0x68a)+_0x2ef783(0x7d8)+_0x2ef783(0xa3d)+_0x2ef783(0x62e)+'paddi'+_0x2ef783(0x231)+'x\x2012p'+_0x2ef783(0x6d3)+_0x2ef783(0x6ea)+_0x2ef783(0x982)+_0x2ef783(0xae8)+_0x2ef783(0xcfa)+_0x2ef783(0xa0c)+_0x2ef783(0x344)+'as,mo'+'nospa'+'ce;');continue;case'1':_0x196280[_0x2ef783(0x2a0)+'onten'+'t']='sakur'+'a';continue;case'2':var _0x196280=_0x1433e0[_0x2ef783(0x839)+_0x2ef783(0xcdd)+_0x2ef783(0xbdc)](_0x4830a0['xEWux']);continue;case'3':_0x196280['oncli'+'ck']=function(){_0x4fe418(![]),_0x158309();};continue;case'4':_0x196280['id']=_0x2ef783(0x978)+'a-sw-'+'v2-ta'+'b';continue;case'5':_0x4f17d7[_0x2ef783(0x84b)][_0x2ef783(0x69b)+_0x2ef783(0x79e)+'d'](_0x196280);continue;}break;}}else _0x1ea593=[];}while(_0x4718de[_0x2ef783(0xcc8)][_0x2ef783(0xad0)+'Child'])_0x4718de['cols'][_0x2ef783(0x594)+'eChil'+'d'](_0x4718de['cols'][_0x2ef783(0xad0)+_0x2ef783(0x805)]);for(var _0x546fb7=0x237d+-0xc97+-0x16e6;_0x546fb7<_0x1ea593[_0x2ef783(0x853)+'h'];_0x546fb7++)_0x4718de[_0x2ef783(0xcc8)][_0x2ef783(0x69b)+'dChil'+'d'](_0x1ea593[_0x546fb7]);}function _0x2619d5(_0x2fa924){var _0x5d9ad4=_0x3b5618,_0x3ba2d4={'oqPDk':function(_0x5dfb4a){var _0x163fef=_0x1d88;return _0x4830a0[_0x163fef(0x1e0)](_0x5dfb4a);},'gsyNF':_0x4830a0[_0x5d9ad4(0x8fc)],'jBOAg':'sakur'+_0x5d9ad4(0xaeb)+'v2-cs'+'s','XkKeO':_0x5d9ad4(0x86d)};if(_0x4830a0['bfLdM']===_0x5d9ad4(0xa80)){_0x4718de[_0x5d9ad4(0x97a)]=!!_0x2fa924;var _0x36a25e=_0x5bbd72();if(!_0x36a25e)return;_0x36a25e[_0x5d9ad4(0xc12)+'Name']='mn-pa'+'nel'+(_0x4718de[_0x5d9ad4(0x97a)]?'\x20show'+'n':'');if(_0x4718de['petal'])_0x4718de[_0x5d9ad4(0x3a3)]['style'][_0x5d9ad4(0x640)+'ty']=_0x4718de[_0x5d9ad4(0x97a)]?'1':'.5';if(_0x4718de[_0x5d9ad4(0x97a)]){_0x2702da(_0x4718de[_0x5d9ad4(0x44c)]);try{var _0x4b4e59=window['inner'+_0x5d9ad4(0x6b9)+'t']||0xf1c*0x1+0x3*0x189+-0x89*0x1f;if(_0x4b4e59<0x413*-0x7+-0x12fe*0x1+0x31ef)_0x36d52f(![]);}catch(_0xd86abf){}}}else{if(_0x3ba2d4[_0x5d9ad4(0x5d3)](_0x25da86))return null;var _0x283cb6=_0x4b798c['getEl'+_0x5d9ad4(0x56e)+_0x5d9ad4(0x83e)](_0x5d9ad4(0x978)+'a-sw-'+'v2');if(_0x283cb6)return _0x283cb6;if(!_0x103209[_0x5d9ad4(0x84b)]||!_0x4ad710['body']['appen'+_0x5d9ad4(0x79e)+'d'])return null;try{var _0x56a1f4=('4|1|3'+'|2|0')['split']('|'),_0x738dad=0x2247+-0x250f+-0x164*-0x2;while(!![]){switch(_0x56a1f4[_0x738dad++]){case'0':return _0x283cb6;case'1':_0x283cb6=_0x493c0c[_0x5d9ad4(0x839)+_0x5d9ad4(0xcdd)+'ent']('div');continue;case'2':_0x571125[_0x5d9ad4(0x84b)]['appen'+_0x5d9ad4(0x79e)+'d'](_0x283cb6);continue;case'3':_0x283cb6['id']=_0x3ba2d4[_0x5d9ad4(0x840)];continue;case'4':if(!_0x58d81f[_0x5d9ad4(0x2e9)+_0x5d9ad4(0x56e)+_0x5d9ad4(0x83e)](_0x3ba2d4[_0x5d9ad4(0xcb7)])){var _0xea7920=_0x9c8b86['creat'+_0x5d9ad4(0xcdd)+'ent'](_0x3ba2d4['XkKeO']);_0xea7920['id']=_0x5d9ad4(0x978)+'a-sw-'+_0x5d9ad4(0xd8b)+'s',_0xea7920['textC'+_0x5d9ad4(0x3b9)+'t']='#saku'+_0x5d9ad4(0x74b)+_0x5d9ad4(0x99e)+_0x5d9ad4(0x629)+'itial'+'}',(_0x47ba82['head']||_0x32f57d['docum'+'entEl'+_0x5d9ad4(0x56e)])['appen'+_0x5d9ad4(0x79e)+'d'](_0xea7920);}continue;}break;}}catch(_0x5e5546){return null;}}}function _0x1f2ae7(){var _0x37b8d2=_0x3b5618,_0x5a7fb3={'Kyolf':function(_0x49ffde,_0x2f5172,_0x452dab){return _0x49ffde(_0x2f5172,_0x452dab);},'zqDTi':function(_0x2f9a77,_0x51f238,_0x41fc17){return _0x2f9a77(_0x51f238,_0x41fc17);}};if(!_0x4718de[_0x37b8d2(0x97a)]||!_0x4718de['built'])return;try{for(var _0x15450a=0x1a79+-0x1cd3+0x25a;_0x15450a<_0x4718de[_0x37b8d2(0x1f1)][_0x37b8d2(0x853)+'h'];_0x15450a++){try{_0x4718de[_0x37b8d2(0x1f1)][_0x15450a]();}catch(_0x12260c){}}var _0x4a08ac=_0xdb433;_0x4718de[_0x37b8d2(0xcf0)][_0x37b8d2(0x2a0)+_0x37b8d2(0x3b9)+'t']=_0x4a08ac?_0x4830a0['yFMHg'](_0x4830a0[_0x37b8d2(0x8c3)]('v'+_0x4a08ac['versi'+'on']+(_0x37b8d2(0x357)+_0x37b8d2(0xc64)+'\x20')+_0x4a08ac[_0x37b8d2(0xc64)+_0x37b8d2(0x780)+'ed'],'/')+_0x4a08ac['hooks'+'Total']+_0x4830a0['mlSLc']+(_0x4a08ac[_0x37b8d2(0x787)]&&_0x4a08ac[_0x37b8d2(0x787)][_0x37b8d2(0xb2b)+'rCoun'+'t']||0x1170+0x755+-0x18c5),'\x20\x20·\x20\x20'+_0x37b8d2(0xb15))+(_0x4a08ac[_0x37b8d2(0xb38)+_0x37b8d2(0x64e)]&&_0x4a08ac[_0x37b8d2(0xb38)+_0x37b8d2(0x64e)]['captu'+_0x37b8d2(0xa10)]?Math[_0x37b8d2(0x8dd)](_0x4830a0['uMnPd'](_0x4a08ac['wasmM'+_0x37b8d2(0x64e)][_0x37b8d2(0x4ca)],0x1a*-0x11ee6+-0x3cb57*-0x2+0x12c657*0x2))+'MB':'-'):'waiti'+_0x37b8d2(0xb6f)+_0x37b8d2(0xc39)+'\x20firs'+_0x37b8d2(0x4e8)+'ort…';var _0x1ea299=_0x4718de[_0x37b8d2(0xcc8)][_0x37b8d2(0xcc7)+_0x37b8d2(0xdb3)+'torAl'+'l']?_0x4718de['cols']['query'+'Selec'+'torAl'+'l'](_0x4830a0['CBOiY']):[];for(var _0x12cd7e=-0x5b3*-0x4+0x10dc+0x34e*-0xc;_0x4830a0['pcHzX'](_0x12cd7e,_0x1ea299[_0x37b8d2(0x853)+'h']);_0x12cd7e++){if(_0x4830a0['GNdni'](_0x4830a0[_0x37b8d2(0xcc0)],_0x37b8d2(0x2ab))){_0x5a7fb3[_0x37b8d2(0x69c)](_0x311aa0,_0x4fbf71&&typeof _0x473458['on']==='boole'+'an'?_0xf2ac1d['on']:_0x100314['on'],_0x22ebc9&&typeof _0x3e2613['facto'+'r']===_0x37b8d2(0x9fc)+'r'?_0x38ca65[_0x37b8d2(0x5db)+'r']:_0x529a90['facto'+'r']);return;}else{var _0xecf74a=_0x1ea299[_0x12cd7e][_0x37b8d2(0x7a8)+'et']['k'],_0x18428c='';if(_0xecf74a==='VERSI'+'ON')_0x18428c=_0x4a08ac?_0x4a08ac[_0x37b8d2(0x9f3)+'on']:'-';else{if(_0x4830a0[_0x37b8d2(0x51c)](_0xecf74a,_0x4830a0[_0x37b8d2(0xbcb)]))_0x18428c=_0x4a08ac?_0x4a08ac[_0x37b8d2(0xc64)+_0x37b8d2(0x780)+'ed']+_0x4830a0[_0x37b8d2(0x7fb)]+_0x4a08ac[_0x37b8d2(0xc64)+_0x37b8d2(0xaac)+_0x37b8d2(0x5bd)+_0x37b8d2(0xb40)]:'-';else{if(_0x4830a0[_0x37b8d2(0x2f5)](_0xecf74a,_0x4830a0['tiFSL']))_0x18428c=_0x4a08ac&&_0x4a08ac['wasmM'+_0x37b8d2(0x64e)]&&_0x4a08ac[_0x37b8d2(0xb38)+'emory']['captu'+'red']?Math[_0x37b8d2(0x8dd)](_0x4830a0[_0x37b8d2(0x548)](_0x4a08ac['wasmM'+_0x37b8d2(0x64e)][_0x37b8d2(0x4ca)],-0x1*-0x143d92+-0xc69b5*-0x1+-0x10a747))+_0x4830a0[_0x37b8d2(0xaca)]+_0x4a08ac[_0x37b8d2(0xb38)+_0x37b8d2(0x64e)]['atMs']+'ms':'-';else{if(_0xecf74a===_0x4830a0['MPPLi'])_0x18428c=_0x4a08ac&&_0x4a08ac[_0x37b8d2(0x787)]?String(_0x4a08ac[_0x37b8d2(0x787)]['playe'+_0x37b8d2(0x980)+'t']):'-';else{if(_0xecf74a==='every'+_0x37b8d2(0xa50)+'ut\x20yo'+'u')_0x18428c=_0x4a08ac&&_0x4a08ac[_0x37b8d2(0x787)]?_0x4830a0[_0x37b8d2(0xcf7)](String,_0x4a08ac[_0x37b8d2(0x787)][_0x37b8d2(0xad3)+_0x37b8d2(0x4b4)]):'-';else{if(_0xecf74a===_0x4830a0[_0x37b8d2(0x484)])_0x18428c=_0x4a08ac&&_0x4a08ac['esp']&&_0x4a08ac['esp'][_0x37b8d2(0x77c)+'a']?_0x4830a0[_0x37b8d2(0x4c6)](_0x4a08ac[_0x37b8d2(0x787)][_0x37b8d2(0x77c)+'a']+'\x20(',_0x4a08ac[_0x37b8d2(0x787)]['camer'+_0x37b8d2(0x8ad)])+')':'-';else{if(_0x4830a0[_0x37b8d2(0x23c)](_0xecf74a,_0x4830a0[_0x37b8d2(0x5d7)]))_0x18428c=_0x4a08ac&&_0x4a08ac[_0x37b8d2(0x971)]&&_0x4a08ac['local'][_0x37b8d2(0x251)]?_0x4a08ac[_0x37b8d2(0x971)]['feet'][_0x37b8d2(0x586)](function(_0x47ee5a){return Math['round'](_0x47ee5a*(0x5f*0x3d+-0x11*0x130+-0x20f))/(0x1b3+0x454*-0x3+0xbad);})['join']('\x20\x20'):'-';else{if(_0xecf74a===_0x37b8d2(0x902)+'8')_0x18428c=_0x4a08ac&&_0x4a08ac['local']&&_0x4a08ac[_0x37b8d2(0x971)][_0x37b8d2(0x419)]?_0x4a08ac['local'][_0x37b8d2(0x419)][_0x37b8d2(0x586)](function(_0x226ba8){return Math['round'](_0x226ba8*(-0x2340+0x1f50+0x454))/(0x2133*0x1+-0x7*-0x51b+-0x448c);})[_0x37b8d2(0xbe3)]('\x20\x20'):'-';else{if(_0x37b8d2(0x809)!=='ExFcT'){_0x30c376[_0x37b8d2(0xc5f)+'ntDef'+'ault'](),_0x5a7fb3['zqDTi'](_0x50b07a,!_0x57afce['on'],_0x492d9e['facto'+'r']);return;}else{var _0xe1ef99=_0xecf74a[_0x37b8d2(0x8a1)]('+');_0x18428c=_0x44733d(_0x4a08ac,_0xe1ef99[0x4c*-0x3e+-0x226c+-0x1*-0x34d4][_0x37b8d2(0x227)+'Of'](_0x37b8d2(0x2ad)+'h')===-0x136d*-0x1+0x1*-0x26ad+0x1340?_0x37b8d2(0x2ad)+'hScri'+'pt':_0x4830a0['NAvem'],_0x4830a0['aGFvT'](parseInt,_0xe1ef99[0x30*-0xce+0x3*-0x46f+0x11*0x30e],-0x2*0xef6+-0x3ef*-0x1+0x1a0d));}}}}}}}}}if(_0x4830a0[_0x37b8d2(0x670)](_0x18428c,_0x1ea299[_0x12cd7e][_0x37b8d2(0x2a0)+_0x37b8d2(0x3b9)+'t']))_0x1ea299[_0x12cd7e][_0x37b8d2(0x2a0)+'onten'+'t']=_0x18428c;}}}catch(_0x54d495){}}function _0x28cdcf(){var _0x37f5d7=_0x3b5618,_0x44a9af={'dzfRD':function(_0x5a458,_0x551a50){return _0x5a458+_0x551a50;},'wMnSF':function(_0x91202e,_0x440dee){var _0x5e32ad=_0x1d88;return _0x4830a0[_0x5e32ad(0x71e)](_0x91202e,_0x440dee);},'exNok':function(_0x5ab992,_0x4e4924){return _0x5ab992*_0x4e4924;},'mQyFo':function(_0x3575e4){var _0x590423=_0x1d88;return _0x4830a0[_0x590423(0x1dc)](_0x3575e4);}};if('UaUBo'!==_0x4830a0[_0x37f5d7(0x9f9)])try{var _0x52b160=_0x4830a0[_0x37f5d7(0x4a9)](_0x4d56f0);return _0x52b160&&_0x52b160[_0x37f5d7(0x251)]?_0x52b160['feet'][-0x603+0xd*0x22f+-0xf9*0x17]:null;}catch(_0x534233){return null;}else{var _0x257e2f=('5|2|0'+_0x37f5d7(0xc32)+_0x37f5d7(0xa76))[_0x37f5d7(0x8a1)]('|'),_0x2a15e2=0x1cf*-0x5+0x9*0xe5+0xfe;while(!![]){switch(_0x257e2f[_0x2a15e2++]){case'0':if(_0x200c69<-0x1494+0x2*0x5ed+0x8ba||_0x44a9af[_0x37f5d7(0x841)](_0x203fb4,_0xaa7964*(-0x2*-0x739+-0x1dae+-0x8*-0x1e8))>_0x5ded3e[_0x37f5d7(0xd84)+_0x37f5d7(0xcfe)])return null;continue;case'1':for(var _0x46d8db=-0x9ef+0x16*-0x12c+0x23b7*0x1;_0x46d8db<_0x52e674;_0x46d8db++)_0x28afdb[_0x37f5d7(0xbb7)](_0x5ded3e[_0x37f5d7(0x91e)+'oat32'](_0x44a9af['wMnSF'](_0x4037df,_0x12215a)+_0x44a9af[_0x37f5d7(0x38b)](_0x46d8db,0x68*0x1+-0x22b6+-0x1129*-0x2),!![]));continue;case'2':if(!_0x5ded3e)return null;continue;case'3':var _0x28afdb=[];continue;case'4':return _0x28afdb;case'5':var _0x5ded3e=_0x44a9af['mQyFo'](_0xb82426);continue;case'6':_0x384005['ok']+=_0xbc4040;continue;}break;}}}var _0x1d3ffe=-0x1aa0+0x2*-0x490+0x23c2+0.5,_0x54979c=0x22cf+-0x4ed*-0x5+-0x3b6a+0.25,_0x5f3de2=0x1bf4*-0x1+0x7e2*0x1+0x1413+0.8;function _0xbbdea3(_0x167b87,_0x2f26bb){var _0x4025ea=_0x3b5618,_0x56405e={'HZBGN':function(_0xe24391,_0x25b070){return _0xe24391(_0x25b070);}},_0x585852=[],_0x1641a1,_0x222bc8,_0x5255b5=_0x4830a0[_0x4025ea(0x5c1)](_0x2f26bb,null)&&_0x4830a0[_0x4025ea(0x96b)](_0x2f26bb,undefined)&&isFinite(_0x2f26bb);for(_0x1641a1=-0x657*0x1+0xbd*0x2f+-0xb*0x294;_0x4830a0['MXkJY'](_0x1641a1,_0x167b87[_0x4025ea(0x853)+'h']);_0x1641a1++){var _0x535cec=_0x167b87[_0x1641a1]['v'];if(!_0x535cec)continue;if(_0x535cec[0xe2b+-0x65+-0xdc6]===-0x2b3*0xd+-0x1e90+0x157*0x31&&_0x4830a0['fmCAz'](_0x535cec[-0x55c*-0x3+-0x2*-0xf67+-0x2ee1],0x1a00+-0x786+-0x127a)&&_0x535cec[-0xc08+-0x2557+-0x1*-0x3161]===-0xa7*-0x2f+-0x416+-0x1a93)continue;if(_0x5255b5&&Math[_0x4025ea(0xaef)](_0x535cec[0x1c64+0x1*0xa3f+0x2b*-0xe6]-_0x2f26bb)>_0x1d3ffe)continue;_0x585852[_0x4025ea(0xbb7)](_0x167b87[_0x1641a1]);}if(!_0x585852[_0x4025ea(0x853)+'h'])for(_0x1641a1=0x298+-0x34c*-0x1+0x1a*-0x3a;_0x4830a0[_0x4025ea(0x4f7)](_0x1641a1,_0x167b87[_0x4025ea(0x853)+'h']);_0x1641a1++){var _0x9a972a=_0x167b87[_0x1641a1]['v'];if(!_0x9a972a)continue;if(_0x9a972a[-0x22eb+-0x10f0*0x1+-0x213*-0x19]===0x34*0x20+-0x9a3+0x323&&_0x9a972a[0x3*-0x279+0x93*0xd+-0x1*0xb]===-0x1523+-0x649+-0x87*-0x34&&_0x4830a0[_0x4025ea(0xc1e)](_0x9a972a[0x3b*0x91+-0x390*0x7+0x3*-0x2d3],0x39e*-0x7+-0xf*0x1a+0x1ad8))continue;_0x585852['push'](_0x167b87[_0x1641a1]);}if(!_0x585852[_0x4025ea(0x853)+'h'])return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};var _0x45064c=[];for(_0x1641a1=0x2016*0x1+0x2636+0x199*-0x2c;_0x1641a1<_0x585852[_0x4025ea(0x853)+'h'];_0x1641a1++){var _0x254419=_0x585852[_0x1641a1]['v'],_0x21b14c=-(-0x7df+0x130*-0x1f+0x2cb0);for(_0x222bc8=0x973+-0x268c+0x1d19;_0x222bc8<_0x45064c[_0x4025ea(0x853)+'h'];_0x222bc8++){if(_0x4025ea(0x381)!==_0x4830a0[_0x4025ea(0x641)]){var _0x1cd653=_0x45064c[_0x222bc8]['c'][-0x228f*0x1+0xd9*-0x14+0x3383]['v'],_0x4516f7=_0x254419[-0x681+-0x1*-0x764+-0xe3]-_0x1cd653[0x277*-0xb+-0x16fb+0x1*0x3218],_0x5d6c62=_0x254419[-0x10af+-0x85*0x1b+0x1eb7*0x1]-_0x1cd653[0x414+0x83*0x11+0xa*-0x147],_0x198481=_0x4830a0[_0x4025ea(0x613)](_0x254419[-0x1*0x18c1+0x7*0x576+-0xd77],_0x1cd653[-0x16d3+0x9*0x1f+0x15be]);if(_0x4516f7*_0x4516f7+_0x4830a0['cuJqb'](_0x5d6c62,_0x5d6c62)+_0x198481*_0x198481<=_0x54979c){if(_0x4830a0['HrzkK']('HPWcu','mShRL'))return _0x36b1fc&&_0x4c8d44[_0x4025ea(0xd7a)+'r']?_0x4941f0[_0x4025ea(0xd7a)+'r'][_0x4025ea(0xd84)+_0x4025ea(0xcfe)]:0x2ff+-0x167f+0x1380;else{_0x21b14c=_0x222bc8;break;}}}else{var _0x8e787d=_0x269e68[0x16d1+-0x3c3+-0x130e]['val']();if(_0x8e787d)_0x127190=_0x8e787d;}}if(_0x4830a0[_0x4025ea(0x39e)](_0x21b14c,-(-0x6f3+-0x1*0x26ed+0x2de1)))_0x45064c['push']({'c':[_0x585852[_0x1641a1]]});else _0x45064c[_0x21b14c]['c'][_0x4025ea(0xbb7)](_0x585852[_0x1641a1]);}var _0x328f4b=_0x45064c[-0xef*-0x2+0x1*0x20cc+-0x22aa];for(_0x222bc8=0x1d74+0x689+-0x23fc;_0x4830a0['XRygA'](_0x222bc8,_0x45064c[_0x4025ea(0x853)+'h']);_0x222bc8++)if(_0x4830a0['HwXkO'](_0x45064c[_0x222bc8]['c'][_0x4025ea(0x853)+'h'],_0x328f4b['c'][_0x4025ea(0x853)+'h']))_0x328f4b=_0x45064c[_0x222bc8];var _0x36835f=_0x328f4b['c'][0xa3*0x15+0x22f1+-0x3050],_0x10c9f7=-(-0x24*0xe8+-0x1f12+0x3fb3);for(_0x222bc8=0x303*0xb+-0x668+-0x1ab9;_0x4830a0[_0x4025ea(0x259)](_0x222bc8,_0x328f4b['c'][_0x4025ea(0x853)+'h']);_0x222bc8++){if(_0x4025ea(0x66d)!==_0x4830a0[_0x4025ea(0xb42)])_0x18f5aa[_0x4025ea(0x86d)]['opaci'+'ty']=_0x13b2db[_0x4025ea(0x97a)]?'1':'.5';else{var _0x36e025=_0x328f4b['c'][_0x222bc8]['v'],_0x449e2d=_0x4830a0[_0x4025ea(0x833)](_0x4830a0['SygDh'](_0x36e025[0x275+-0x139f+0x112a],_0x36e025[-0x83a+-0x6ed+0xf27]),_0x36e025[0x3*-0x4c9+-0x1*0x20d7+0x2f34*0x1]*_0x36e025[-0x14*0x16f+0x1dcb+0x1*-0x11d]);(_0x449e2d>_0x10c9f7||_0x4830a0[_0x4025ea(0xadf)](_0x449e2d,_0x10c9f7)&&_0x4830a0['GEqcQ'](_0x36e025[-0x1*-0x463+-0xc08+0xb2*0xb],_0x36835f['v'][0x8*-0x301+0x2582+-0xd79]))&&(_0x4025ea(0xbde)===_0x4830a0[_0x4025ea(0x234)]?(_0x10c9f7=_0x449e2d,_0x36835f=_0x328f4b['c'][_0x222bc8]):_0x56405e['HZBGN'](_0x4d2253,_0x4025ea(0xc82)+_0x4025ea(0x209)));}}return{'pos':_0x36835f['v'],'posAt':_0x36835f['o'],'inBand':_0x5255b5?_0x585852[_0x4025ea(0x853)+'h']:0x3d*0x4a+-0x2020+0xe7e,'cluster':_0x328f4b['c'][_0x4025ea(0x853)+'h'],'groups':_0x45064c[_0x4025ea(0x853)+'h'],'reach':Math[_0x4025ea(0x45d)](_0x10c9f7)};}function _0x4d56f0(){var _0x56160b=_0x3b5618,_0x316980={'CWjba':function(_0x4eb2a2,_0x416187){return _0x4eb2a2===_0x416187;}},_0x53639e=_0x199537[_0x56160b(0xb3f)+_0x56160b(0x60b)+_0x56160b(0x4c0)];if(!_0x53639e||!_0x53639e[_0x56160b(0xc63)])return null;var _0x2214d7=_0xf4ed7[_0x56160b(0xb3f)+'ntrol'+_0x56160b(0x4c0)]||[],_0x5dc02b=[];for(var _0x20a2a9=0x1dc5+-0x1eaa+-0xe5*-0x1;_0x20a2a9<_0x2214d7[_0x56160b(0x853)+'h'];_0x20a2a9++){if(_0x56160b(0x651)===_0x56160b(0x651)){if(_0x2214d7[_0x20a2a9][-0x2671+0x22*0xd8+0x9c2*0x1]!=='v3')continue;var _0x5d7fdc=_0x4830a0['Gavha'](_0x32a80c,_0x53639e[_0x56160b(0xc63)],_0x2214d7[_0x20a2a9][-0xf2*0x3+0x22d3+-0x1ffd],0xf19+0x61b+0x19*-0xd9);if(_0x5d7fdc)_0x5dc02b[_0x56160b(0xbb7)]({'o':'0x'+_0x2214d7[_0x20a2a9][-0x405*0x1+-0x4e9+0x8ee][_0x56160b(0x8a8)+_0x56160b(0x9f5)](0x1*-0x102b+-0x1*0x218f+0x2*0x18e5),'v':_0x5d7fdc});}else{if(_0x581577[_0x56160b(0xdc3)]===_0x56160b(0x927))_0x2c1087[_0x56160b(0xa46)+'ostfi'+'x']({'typeName':_0x56160b(0xd31)+_0x56160b(0x55a),'methodName':_0x21537e[_0x56160b(0x450)],'params':_0x2395f7['wasmP'+_0x56160b(0x70b)],'returnType':_0xb0abd6[_0x56160b(0x74e)+'et']},_0x4830a0[_0x56160b(0x494)](_0x3adc89,_0x4830a0[_0x56160b(0x33c)],_0x103f78[_0x56160b(0x450)]));else _0x4830a0[_0x56160b(0x80f)](_0x24bb30['ret'],_0x4830a0[_0x56160b(0xd72)])&&_0x4830a0[_0x56160b(0x305)](_0x291f08[_0x56160b(0xd05)+'s'][_0x56160b(0x853)+'h'],0x15b3+0x59*-0x59+0x107*0x9)&&_0x2ec610[_0x56160b(0xd05)+'s'][-0x22d*-0x5+-0x1*-0xf76+0x265*-0xb]==='float'&&_0x2c29fc[_0x56160b(0xa46)+_0x56160b(0x2a5)]({'typeName':_0x4830a0[_0x56160b(0x5c7)],'methodName':_0x162b1a[_0x56160b(0x450)],'params':_0x130c56[_0x56160b(0x696)+_0x56160b(0x70b)],'returnType':_0x2789a5},_0x4830a0[_0x56160b(0x58c)](_0x3046bc,_0x4830a0['TEOen'],_0xa876d5[_0x56160b(0x450)]));}}var _0x449e55=_0x4830a0[_0x56160b(0xa05)](_0xbbdea3,_0x5dc02b,null);if(!_0x449e55[_0x56160b(0x550)])return null;var _0x2cb457=_0x449e55[_0x56160b(0x550)];return{'ptr':_0x53639e['ptr'],'feet':_0x2cb457,'posAt':_0x449e55['posAt'],'inBand':_0x449e55['inBan'+'d'],'cluster':_0x449e55[_0x56160b(0x411)+'er'],'copies':_0x5dc02b['filte'+'r'](function(_0x230641){var _0x277997=_0x56160b;return _0x316980[_0x277997(0x3df)](_0x230641['v'][-0x19fb+0x6*-0x5d9+0x3d11*0x1],_0x2cb457[0xa3*0x35+-0x186+-0x49*0x71])&&_0x230641['v'][0x48+-0xd2c+0x1*0xce5]===_0x2cb457[-0x1c16+0x2264+-0x64d]&&_0x230641['v'][-0x2620+-0x5*0x43f+0x3b5d]===_0x2cb457[0x21b5+-0xac*0x3+-0x1faf*0x1];})[_0x56160b(0x586)](function(_0xf45178){return _0xf45178['o'];}),'eye':[_0x2cb457[-0xa*0x233+0x1b74+-0x576],_0x2cb457[-0x23cb+0x25f0+-0x89*0x4]+_0x5f3de2,_0x2cb457[0x1dfc+0x183d+0x3637*-0x1]],'reach':_0x449e55[_0x56160b(0xc92)],'pitch':_0x118468(_0x53639e[_0x56160b(0xc63)]+(-0x2*0x10a3+0xc83*-0x1+0x2f35),_0x4830a0[_0x56160b(0xc18)]),'yaw':_0x4830a0['JuFOI'](_0x118468,_0x53639e[_0x56160b(0xc63)]+(0x477+-0x11a5+0x1*0xe9e),'f32')};}function _0x20cb3f(){var _0x4011a8=_0x3b5618,_0x2aca25={'NcbZs':'#2a0f'+'1b','YDHhV':'#f7ee'+'f5'};if(_0x4830a0['ofvzI'](_0x4011a8(0x42d),'TftGK')){_0x37a887['sp']&&(_0x20b8ae['sp']['textC'+_0x4011a8(0x3b9)+'t']=_0x497136['on']?'Speed'+'\x20ON':'Speed'+_0x4011a8(0x465),_0x48a892['sp']['style'][_0x4011a8(0x7e1)+'round']=_0x57a470['on']?_0xed4fd6:_0x4011a8(0x934)+_0x4011a8(0x406)+'t',_0x20f75f['sp'][_0x4011a8(0x86d)][_0x4011a8(0xccd)]=_0x1599be['on']?_0x2aca25['NcbZs']:_0x2aca25[_0x4011a8(0x668)]);if(_0x284a49['fx'])_0x2d625e['fx'][_0x4011a8(0x61f)]=_0x3a2451(_0x3cd36b[_0x4011a8(0x5db)+'r']);if(_0x5ab5e3['fv'])_0x1a717c['fv']['textC'+_0x4011a8(0x3b9)+'t']=_0x11878c['facto'+'r']['toFix'+'ed'](0x1*-0x1b59+0x2025+-0x1*0x4cb)+'x';}else{var _0x1394f3=_0x4d56f0(),_0x52d39c=[],_0x551e23=_0x42506f['Photo'+_0x4011a8(0xa2c)+_0x4011a8(0x6e7)+'nc']||{},_0x34c8bb=Object[_0x4011a8(0xb8c)](_0x551e23);for(var _0x14676d=0xf17+-0x1d7*-0xc+-0x252b;_0x14676d<_0x34c8bb['lengt'+'h']&&_0x4830a0[_0x4011a8(0x3cc)](_0x14676d,-0xa26+0x291*-0xa+0x23f0);_0x14676d++){var _0x1dd09d=_0x551e23[_0x34c8bb[_0x14676d]],_0x5628f8=[],_0x2c5d18=_0xf4ed7['Photo'+_0x4011a8(0xa2c)+_0x4011a8(0x6e7)+'nc']||[];for(var _0x4ef5e2=0xb*-0x65+0x99e*0x1+-0x547;_0x4830a0[_0x4011a8(0x4f7)](_0x4ef5e2,_0x2c5d18['lengt'+'h']);_0x4ef5e2++){if(_0x2c5d18[_0x4ef5e2][0x22ae+-0x7*-0x65+0x8*-0x4ae]!=='v3')continue;var _0x3d1609=_0x32a80c(_0x1dd09d[_0x4011a8(0xc63)],_0x2c5d18[_0x4ef5e2][0x7*0x95+-0x1d61+0x194e],0x22db+0xee9*0x1+-0x31c1);if(_0x3d1609)_0x5628f8[_0x4011a8(0xbb7)]({'o':'0x'+_0x2c5d18[_0x4ef5e2][0x4*-0x324+0x13*0x1d6+0x1652*-0x1][_0x4011a8(0x8a8)+_0x4011a8(0x9f5)](-0xe8b*0x1+0x16*0xbb+-0x177),'v':_0x3d1609});}var _0x4d6731=_0x4830a0[_0x4011a8(0xbd3)](_0xbbdea3,_0x5628f8,_0x1394f3?_0x1394f3['feet'][0x15*-0x186+-0x26e+0x226d]:null),_0x451324=_0x4d6731[_0x4011a8(0x550)];if(!_0x451324)continue;var _0x74faf5={'ptr':_0x1dd09d['ptr'],'x':_0x451324[0x329*0xb+-0x1197+-0x112c],'y':_0x451324[-0x2246*0x1+-0x12d5*-0x1+0x6*0x293],'z':_0x451324[0x3e2*-0x1+-0x1b55+0x1f39],'posAt':_0x4d6731[_0x4011a8(0xd2f)],'inBand':_0x4d6731['inBan'+'d'],'cluster':_0x4d6731['clust'+'er'],'team':_0x4830a0[_0x4011a8(0xc62)](_0x118468,_0x1dd09d['ptr']+(-0x1*-0x129a+-0x1a7b*0x1+0x839),_0x4830a0[_0x4011a8(0x37f)]),'localFlag':_0x118468(_0x4830a0[_0x4011a8(0xa63)](_0x1dd09d[_0x4011a8(0xc63)],-0x13*0x112+-0x1*0x77c+0x1c4e),'i32')};if(_0x1394f3){var _0x18014e=_0x4830a0['cOCML'](_0x451324[0x47*-0x8b+0x200d+0x34*0x20],_0x1394f3[_0x4011a8(0x251)][0x53*0x16+-0x2e*-0xd9+-0x2e20]),_0x490246=_0x4830a0[_0x4011a8(0x3a0)](_0x451324[-0x4a*0x6f+-0x17fe+0x3816],_0x1394f3['feet'][-0x125*0xa+0x1a*0x49+0x2f*0x16]);_0x74faf5['d']=Math[_0x4011a8(0x45d)](_0x18014e*_0x18014e+_0x490246*_0x490246),_0x74faf5['beari'+'ng']=Math['atan2'](_0x18014e,_0x490246)*(-0x1*0xf7c+-0xa76*0x2+0x251c)/Math['PI'];}_0x52d39c['push'](_0x74faf5);}return{'me':_0x1394f3,'list':_0x52d39c};}}var _0x46d7d1=null;function _0x47e4c2(){var _0x36ef4f=_0x3b5618,_0x2391a2={'ovirg':function(_0x4a825f,_0x53d370){return _0x4a825f!==_0x53d370;}};if(_0x46d7d1)return _0x46d7d1;try{if(_0x4830a0[_0x36ef4f(0x3c9)]==='KiIOG'){if(!document['body']||!document['body']['appen'+_0x36ef4f(0x79e)+'d'])return null;var _0x43cc73=document[_0x36ef4f(0x839)+_0x36ef4f(0xcdd)+_0x36ef4f(0xbdc)](_0x4830a0[_0x36ef4f(0x451)]);_0x43cc73['id']='sakur'+_0x36ef4f(0x8af),_0x43cc73['style'][_0x36ef4f(0xd9e)+'xt']=_0x4830a0[_0x36ef4f(0x499)]('posit'+'ion:f'+_0x36ef4f(0x3fe)+_0x36ef4f(0x9a3)+':12px'+_0x36ef4f(0xb77)+_0x36ef4f(0x2ff)+_0x36ef4f(0xb11)+_0x36ef4f(0xb41)+_0x36ef4f(0xd76)+_0x36ef4f(0x91d)+_0x36ef4f(0xcb6)+_0x36ef4f(0xa7b)+_0x36ef4f(0x671)+'one;'+_0x4830a0[_0x36ef4f(0x62f)]+_0x4830a0[_0x36ef4f(0x40c)],_0x36ef4f(0x919)+_0x36ef4f(0xb57)+'t:non'+_0x36ef4f(0x73f)+_0x36ef4f(0x568)+'user-'+'selec'+'t:non'+'e;'),_0x43cc73[_0x36ef4f(0x34b)+_0x36ef4f(0x802)]=_0x4830a0[_0x36ef4f(0x7f2)]('<canv'+_0x36ef4f(0xda0)+'=\x22sak'+'ura-e'+_0x36ef4f(0xce3)+_0x36ef4f(0x942)+_0x36ef4f(0x983)+'60\x22\x20h'+_0x36ef4f(0x479)+_0x36ef4f(0xb2c)+_0x36ef4f(0x4ab)+'le=\x22d'+_0x36ef4f(0x96a)+'y:blo'+_0x36ef4f(0x85f)+'/canv'+_0x36ef4f(0xd4a),'<div\x20'+'id=\x22s'+_0x36ef4f(0xbf8)+_0x36ef4f(0x421)+'lg\x22\x20s'+_0x36ef4f(0x72e)+_0x36ef4f(0xac6)+'-alig'+_0x36ef4f(0xcfd)+'ter\x22>'+'</div'+'>');var _0x3cb058={'cv':{'getContext':function(){var _0x5040bd=_0x36ef4f;if(_0x2391a2['ovirg']('bHOBx',_0x5040bd(0x4b0)))_0xa705a1=!_0x107707,_0x3d6acc();else return null;}},'el':_0x43cc73};document[_0x36ef4f(0x84b)][_0x36ef4f(0x69b)+_0x36ef4f(0x79e)+'d'](_0x43cc73),_0x46d7d1={'el':_0x43cc73,'cv':_0x43cc73[_0x36ef4f(0xcc7)+_0x36ef4f(0xdb3)+'tor'](_0x4830a0[_0x36ef4f(0x67d)]),'lg':_0x43cc73[_0x36ef4f(0xcc7)+_0x36ef4f(0xdb3)+_0x36ef4f(0x390)](_0x36ef4f(0x9b7)+_0x36ef4f(0x91a)+'p-lg')};if(!_0x46d7d1['cv']||!_0x46d7d1['cv'][_0x36ef4f(0xa48)+'ntext'])_0x46d7d1=_0x3cb058;return _0x46d7d1;}else{if(!_0xf09b20[_0x343871])_0x48658e[_0xe1ff96]={'ptr':_0xf8ea7,'kind':_0x3030cf,'firstSeen':_0x136329[_0x36ef4f(0xb6c)](),'hits':0x0};_0x4b6411[_0x585b84][_0x36ef4f(0x8f7)]++;}}catch(_0x7f1680){return null;}}var _0x51561f=null;function _0x4618ee(){var _0x185ba0=_0x3b5618;if(_0x51561f)return _0x51561f;try{if('qhmRl'!==_0x4830a0[_0x185ba0(0x810)]){var _0x3b523c=('5|2|4'+_0x185ba0(0xc32)+'0|6')['split']('|'),_0x2e5b4f=0x7*0x4c3+-0x1fd+-0x1f58;while(!![]){switch(_0x3b523c[_0x2e5b4f++]){case'0':_0x51561f={'cv':_0x299a7a};continue;case'1':document['body'][_0x185ba0(0x69b)+_0x185ba0(0x79e)+'d'](_0x299a7a);continue;case'2':var _0x299a7a=document[_0x185ba0(0x839)+'eElem'+_0x185ba0(0xbdc)](_0x185ba0(0xd68)+'s');continue;case'3':_0x299a7a[_0x185ba0(0x86d)][_0x185ba0(0xd9e)+'xt']=_0x4830a0['ellwI'];continue;case'4':_0x299a7a['id']='sakur'+_0x185ba0(0x8f5)+'es';continue;case'5':if(!document[_0x185ba0(0x84b)]||!document['body']['appen'+'dChil'+'d'])return null;continue;case'6':return _0x51561f;}break;}}else{var _0x324247=_0x22b4fc[_0x185ba0(0x2e9)+_0x185ba0(0x56e)+_0x185ba0(0x83e)](_0x185ba0(0x978)+'a-sw-'+_0x185ba0(0x6b5)+'b');if(_0x1580a2&&!_0x324247&&_0x287a75['body']){var _0x407c50=_0x4830a0['wXFJl'][_0x185ba0(0x8a1)]('|'),_0x12c375=-0x86d*0x2+-0x2328+0x3402;while(!![]){switch(_0x407c50[_0x12c375++]){case'0':_0x12c214['style'][_0x185ba0(0xd9e)+'xt']=_0x4830a0[_0x185ba0(0x449)](_0x4830a0[_0x185ba0(0x8d0)](_0x4830a0[_0x185ba0(0x92c)](_0x185ba0(0x6c7)+'ion:f'+_0x185ba0(0x3fe)+_0x185ba0(0xb05)+_0x185ba0(0xb0b)+_0x185ba0(0xae3)+_0x185ba0(0x630)+_0x185ba0(0x64a)+'x:214'+_0x185ba0(0x8fe)+'99;cu'+_0x185ba0(0xd7d)+'point'+_0x185ba0(0xc45)+'er-se'+'lect:'+_0x185ba0(0x34a),_0x185ba0(0x7e1)+_0x185ba0(0x8dd)+_0x185ba0(0x624)+_0x185ba0(0x522)+'2,29,'+_0x185ba0(0x75f)+_0x185ba0(0xbe5)+':1px\x20'+'solid'+'\x20rgba'+_0x185ba0(0x271)+_0x185ba0(0x974)+'77,.5'+_0x185ba0(0x5bb)+_0x185ba0(0x5f2)),_0x208c8e)+';',_0x185ba0(0x68a)+'r-rad'+_0x185ba0(0xa3d)+'99px;'+_0x185ba0(0x98a)+'ng:4p'+_0x185ba0(0xd48)+'x;fon'+_0x185ba0(0x6ea)+'x/1.4'+'\x20ui-m'+_0x185ba0(0xcfa)+_0x185ba0(0xa0c)+'onsol'+'as,mo'+_0x185ba0(0x49b)+'ce;');continue;case'1':_0x12c214['id']=_0x185ba0(0x978)+'a-sw-'+_0x185ba0(0x6b5)+'b';continue;case'2':_0x12c214[_0x185ba0(0x93e)+'ck']=function(){_0x234219(![]),_0x110d78();};continue;case'3':_0x1cb9bf[_0x185ba0(0x84b)]['appen'+'dChil'+'d'](_0x12c214);continue;case'4':var _0x12c214=_0x38401a[_0x185ba0(0x839)+_0x185ba0(0xcdd)+'ent'](_0x4830a0['xEWux']);continue;case'5':_0x12c214[_0x185ba0(0x2a0)+'onten'+'t']='sakur'+'a';continue;}break;}}else _0x4830a0['JrryD'](!_0x584238,_0x324247)&&_0x324247['remov'+'e']();}}catch(_0x247223){return null;}}function _0x1a2028(_0x83bb14){var _0xa6532f=_0x3b5618;try{var _0x45575c=Math[_0xa6532f(0x8ae)](0x121c+0x2339+-0x3554,window[_0xa6532f(0x34b)+_0xa6532f(0x8e6)]||document[_0xa6532f(0xbf0)+'entEl'+_0xa6532f(0x56e)]['clien'+_0xa6532f(0xaff)+'h']||-0x1e25+-0x1e66+-0x3c8b*-0x1),_0x3941fa=Math[_0xa6532f(0x8ae)](-0x1c28+0xc74*-0x1+-0x25*-0x119,window['inner'+'Heigh'+'t']||document['docum'+_0xa6532f(0x8e7)+_0xa6532f(0x56e)][_0xa6532f(0xace)+_0xa6532f(0xa54)+'ht']||0x527*-0x7+-0x18ac+0x3cbd);return(_0x83bb14['cv']['width']!==_0x45575c||_0x4830a0[_0xa6532f(0x4e2)](_0x83bb14['cv'][_0xa6532f(0x464)+'t'],_0x3941fa))&&(_0x83bb14['cv'][_0xa6532f(0x430)]=_0x45575c,_0x83bb14['cv']['heigh'+'t']=_0x3941fa),{'w':_0x45575c,'h':_0x3941fa};}catch(_0x2c4944){return{'w':0x0,'h':0x0};}}function _0xef9c05(_0x3c2747){var _0x96ed4e=_0x3b5618,_0xca3d8e=_0x51561f;if(!_0xca3d8e)return;var _0x3914a9=_0xca3d8e['cv']['getCo'+'ntext']&&_0xca3d8e['cv']['getCo'+'ntext']('2d');if(!_0x3914a9)return;var _0x153a03=_0x1a2028(_0xca3d8e);_0x3914a9['clear'+_0x96ed4e(0x8ea)](0xdd+-0x1*0x2641+0x2564,0x7c*-0x43+0x616*-0x5+0x3ee2*0x1,_0x153a03['w'],_0x153a03['h']);if(!_0x1c4e9c['boxes']||!_0x3c2747||!_0x3c2747['me'])return;var _0xa466b6=_0x3c2747['me'],_0x2795bd=null,_0x359104=_0x42506f[_0x96ed4e(0xd7b)+'nNetw'+'orkSy'+'nc']||{},_0x9643d7=Object['keys'](_0x359104);for(var _0x43afa9=-0xbf6+0x44*0x7b+-0x14b6;_0x43afa9<_0x9643d7[_0x96ed4e(0x853)+'h'];_0x43afa9++){if(_0x96ed4e(0x7d0)===_0x4830a0[_0x96ed4e(0x5e8)]){var _0x5460d6=_0x32a80c(_0x359104[_0x9643d7[_0x43afa9]][_0x96ed4e(0xc63)],-0x3bb*0xa+-0x1d9e+-0x4*-0x10c8,-0x7a3+-0xf88+0x102*0x17);if(_0x5460d6&&_0x5460d6[-0x2*-0xd47+0x1786*-0x1+-0x308]===-0x1*-0x13c5+-0x1360*0x1+-0x65&&_0x4830a0[_0x96ed4e(0x953)](_0x5460d6[0x6b*0x4f+-0x4*0x3a4+-0x1274],-0x31*0x8b+0x1a2*0xb+0x8a5)&&_0x4830a0[_0x96ed4e(0xc7c)](_0x5460d6[-0xfb1+0x18f0+-0x93d],0x7ef*0x3+0xa9f+-0x226c*0x1)){_0x2795bd=_0x118468(_0x4830a0[_0x96ed4e(0x71e)](_0x359104[_0x9643d7[_0x43afa9]][_0x96ed4e(0xc63)],0x233+-0x1*0x2029+-0x35e*-0x9),_0x96ed4e(0x7f5));break;}}else{if(_0x1a2f8a['lengt'+'h'])return!![];if(!_0x422d59[_0x96ed4e(0x36f)+_0x96ed4e(0xa86)+_0x96ed4e(0xd45)]||!_0x41a2df['Unity'+'WebMo'+'dkit'][_0x96ed4e(0xa13)+'me'])return![];var _0x5ba6a9=_0x40e6df[_0x96ed4e(0x36f)+'WebMo'+_0x96ed4e(0xd45)][_0x96ed4e(0xa13)+'me'];if(!_0x5ba6a9[_0x96ed4e(0xa4a)+'ns']||!_0x5ba6a9['plugi'+'ns']['lengt'+'h'])return![];_0x11f49a=_0x17687e[_0x96ed4e(0x36f)+_0x96ed4e(0xa86)+'dkit']['Value'+'Wrapp'+'er'],_0x3ac5aa=_0x590275||_0x5ba6a9[_0x96ed4e(0xa4a)+'ns'][_0x5ba6a9['plugi'+'ns'][_0x96ed4e(0x853)+'h']-(-0x8e*0xb+0x1*0x21d+-0x7*-0x92)];if(!_0x55e206||typeof _0x4621d5[_0x96ed4e(0xa46)+_0x96ed4e(0x2a5)]!==_0x96ed4e(0x711)+'ion')return![];for(var _0x5b0ddc=0x1*-0x22d+-0x1482+0x16af;_0x5b0ddc<_0x8f0b89['lengt'+'h'];_0x5b0ddc++){var _0xd3e4b8=_0x5540de[_0x5b0ddc];try{var _0x4c97ae=_0x1e6815['hookP'+_0x96ed4e(0x2a5)]({'typeName':_0xd3e4b8[_0x96ed4e(0x73a)],'methodName':'Updat'+'e','params':['i32',_0x4830a0['xjPIu']],'returnType':_0x3f8865},_0x4830a0[_0x96ed4e(0xae5)](_0x5bcdcd,_0xd3e4b8['type'],_0xd3e4b8[_0x96ed4e(0xa72)],_0xd3e4b8['many']));_0x37b00b[_0x96ed4e(0xbb7)]({'type':_0xd3e4b8[_0x96ed4e(0x73a)],'hook':_0x4c97ae,'keep':_0xd3e4b8[_0x96ed4e(0xa72)]});}catch(_0x202a6b){_0x591ee7['push'](_0x4830a0['FdTbb'](_0x4830a0[_0x96ed4e(0xccb)](_0xd3e4b8['type'],':\x20'),_0x4830a0['RsjeW'](_0x453a03,_0x202a6b&&_0x202a6b['messa'+'ge']||_0x202a6b)[_0x96ed4e(0x1d7)](-0x24b3*0x1+-0x67*0x12+0x2bf1,-0x1*0xa92+0x1*0x25dc+-0x1aaa)));}}return _0x158d81[_0x96ed4e(0x853)+'h']>-0x498+-0x1*0x6df+-0xb77*-0x1;}}for(var _0x1b077e=-0x275*-0xb+-0x4dc*-0x8+0x41e7*-0x1;_0x1b077e<_0x3c2747[_0x96ed4e(0xaf1)]['lengt'+'h'];_0x1b077e++){if(_0x4830a0['sPeIZ']==='PCoFC'){var _0x1e32ca=_0x3c2747['list'][_0x1b077e],_0x4e3f04=_0x4830a0[_0x96ed4e(0x4e2)](_0x2795bd,null)&&_0x1e32ca[_0x96ed4e(0x52e)]===_0x2795bd,_0x43a7fc=_0x631e84(_0xa466b6['eye'],[_0x1e32ca['x'],_0x1e32ca['y']-(0x1135+-0x3a1*-0x3+0x1a7*-0x11),_0x1e32ca['z']],_0x153a03['w'],_0x153a03['h']),_0x29478e=_0x631e84(_0xa466b6[_0x96ed4e(0x419)],[_0x1e32ca['x'],_0x4830a0[_0x96ed4e(0x63d)](_0x1e32ca['y'],-0x95+-0x1*-0x1865+0x6*-0x3f8+0.8),_0x1e32ca['z']],_0x153a03['w'],_0x153a03['h']);if(!_0x43a7fc||!_0x29478e)continue;var _0x155275=Math['min'](_0x43a7fc['x'],_0x29478e['x']),_0x3c455f=Math[_0x96ed4e(0x8ae)](_0x43a7fc['x'],_0x29478e['x']),_0x5ca1b5=Math[_0x96ed4e(0xc28)](_0x43a7fc['y'],_0x29478e['y']),_0x3a4496=Math['max'](_0x43a7fc['y'],_0x29478e['y']),_0x4eba90=Math['max'](-0x12f*0xe+0x3*0xc99+0x1536*-0x1,Math[_0x96ed4e(0xc28)](-0xc5e+-0x3*0x76b+0x22db,_0x3c455f-_0x155275)),_0x12623b=Math['max'](0x1552*0x1+-0x2a7*0x5+-0x809,Math[_0x96ed4e(0xc28)](0xc9*-0x2+0x60d*0x3+0x1*-0x1009,_0x4830a0[_0x96ed4e(0xa7e)](_0x3a4496,_0x5ca1b5))),_0x5351a7=_0x4830a0[_0x96ed4e(0x548)](_0x4830a0[_0x96ed4e(0x6c8)](_0x155275,_0x3c455f),-0x1a0*-0x15+0xf1*-0x7+-0x1b87),_0x1b3a99=_0x4830a0[_0x96ed4e(0x5ab)](_0x5ca1b5,_0x3a4496)/(0x166a+0xb29+-0x2191);_0x3914a9['strok'+'eStyl'+'e']=_0x4e3f04?'rgba('+'79,14'+'3,106'+',.9)':_0x96ed4e(0x536)+_0x96ed4e(0x537)+_0x96ed4e(0x3f2)+'6,.95'+')',_0x3914a9['lineW'+_0x96ed4e(0x37a)]=_0x4e3f04?-0x11*0x22+-0x1cdf+-0x1*-0x1f22:0x1c99+-0x2*0x12f7+0x957,_0x3914a9[_0x96ed4e(0xb5f)+_0x96ed4e(0x5ac)](_0x5351a7-_0x4830a0['ruCMF'](_0x4eba90,0x2088+-0x1f1e*-0x1+0xfe9*-0x4),_0x1b3a99-_0x4830a0['ruCMF'](_0x12623b,-0x1*0xed5+-0x1ca3*0x1+0xf*0x2e6),_0x4eba90,_0x12623b);if(!_0x4e3f04){if(_0x4830a0[_0x96ed4e(0x670)]('JdiJY',_0x4830a0['WSJAB']))try{_0x173933[_0x96ed4e(0x1f1)][_0x123efe]();}catch(_0x11f361){}else _0x3914a9[_0x96ed4e(0x38f)+'tyle']=_0x4830a0[_0x96ed4e(0x920)],_0x3914a9[_0x96ed4e(0x5cb)]='10px\x20'+'ui-mo'+'nospa'+'ce,Co'+'nsola'+_0x96ed4e(0xb73)+_0x96ed4e(0xdbd)+'e',_0x3914a9[_0x96ed4e(0x441)+'ext'](_0x4830a0['bGhNi'](Math[_0x96ed4e(0x8dd)](_0x1e32ca['d']||0x893+-0xaf3+0x260),'m'),_0x4830a0[_0x96ed4e(0x3a0)](_0x5351a7,_0x4eba90/(-0x1321+-0x1665+-0x531*-0x8)),_0x1b3a99-_0x12623b/(-0x2*0x693+-0x2d9*0x3+0x5*0x457)-(0xe*-0x251+0x26c1+-0x650));}}else return{'pos':null,'posAt':null,'inBand':0x0,'cluster':0x0,'reach':0x0};}}function _0x3a7150(){var _0x285ba1=_0x3b5618,_0xdbf8e7=_0x47e4c2();if(!_0xdbf8e7||!_0xdbf8e7['cv'])return;try{var _0x577f4f=_0xdbf8e7['cv'][_0x285ba1(0xa48)+_0x285ba1(0x680)]&&_0xdbf8e7['cv'][_0x285ba1(0xa48)+_0x285ba1(0x680)]('2d');if(!_0x577f4f)return;var _0x4ae3d3=_0xdbf8e7['cv']['width'],_0x16fe0d=_0x4830a0[_0x285ba1(0xa1c)](_0x4ae3d3,0x1d3f+0x2b*0xe5+-0x43b4),_0x1a3ce5=_0x20cb3f(),_0x5d551b=_0x1a3ce5['me'];_0x577f4f[_0x285ba1(0x51a)+'Rect'](0x2658+0x1*0x1c5d+-0x42b5,-0xae7*0x1+0x19e8+0x1*-0xf01,_0x4ae3d3,_0x4ae3d3),_0x577f4f['strok'+'eStyl'+'e']=_0x4830a0[_0x285ba1(0x9ba)],_0x577f4f[_0x285ba1(0xa73)+_0x285ba1(0x37a)]=-0x65*0x20+-0x1d1f+0x29c0;for(var _0x10b917=0x50b*0x2+0xff*0x4+-0xe11;_0x10b917<=-0x7a*0x2b+-0x1ccb+-0x5*-0x9dc;_0x10b917++){_0x577f4f[_0x285ba1(0x2b5)+'Path'](),_0x577f4f[_0x285ba1(0x6e2)](_0x16fe0d,_0x16fe0d,_0x4830a0['ChVda']((_0x16fe0d-(-0x33*0x5a+0x52b*0x1+-0x1*-0xcc7))*_0x10b917,0xce1+0x8f1+-0x15cf),0x143f+0x141b*0x1+-0x285a,_0x4830a0['UQWuF'](Math['PI'],-0x1*0xab5+-0x1930+-0x65*-0x5b)),_0x577f4f['strok'+'e']();}_0x577f4f['begin'+_0x285ba1(0xbf5)](),_0x577f4f['moveT'+'o'](-0x3e6*-0x4+0x17a4+-0x1f6*0x14,_0x16fe0d),_0x577f4f['lineT'+'o'](_0x4ae3d3-(0x2441+-0x5*-0x55b+-0x3f04),_0x16fe0d),_0x577f4f[_0x285ba1(0x9fa)+'o'](_0x16fe0d,-0xa*-0x116+0x679*-0x1+-0x45f),_0x577f4f[_0x285ba1(0x85b)+'o'](_0x16fe0d,_0x4830a0['IIOVs'](_0x4ae3d3,-0x1125+-0xa7*0x35+0x33bc)),_0x577f4f['strok'+'e']();if(!_0x5d551b){if(_0xdbf8e7['lg'])_0xdbf8e7['lg']['textC'+'onten'+'t']='';return;}var _0x22eee0=_0x4830a0[_0x285ba1(0x9be)](_0x16fe0d,0xa94+-0x9bd+-0xb*0x13)/_0x1c4e9c[_0x285ba1(0x37e)],_0x890dc6=null,_0x1cab87=_0x42506f[_0x285ba1(0xd7b)+_0x285ba1(0xa2c)+'orkSy'+'nc']||{},_0x2c8727=Object[_0x285ba1(0xb8c)](_0x1cab87);for(var _0x3feb54=-0x1011+-0x1*-0x238d+-0x137c;_0x3feb54<_0x2c8727[_0x285ba1(0x853)+'h'];_0x3feb54++){if('LvLui'===_0x4830a0[_0x285ba1(0x75a)]){var _0x439a51=_0x3d057a['keys'](_0x4951fb);for(var _0x2ec7a7=-0xd*-0x14b+-0xa71+-0xa3*0xa;_0x4830a0[_0x285ba1(0x471)](_0x2ec7a7,_0x439a51[_0x285ba1(0x853)+'h'])&&_0x2ec7a7<-0x163c+-0x4b3+0x5*0x5db;_0x2ec7a7++){var _0xcd3e97=_0x1fe4c0[_0x439a51[_0x2ec7a7]];if(_0xcd3e97&&_0x4830a0['hZXaa'](typeof _0xcd3e97,_0x285ba1(0x3c4)+'t')&&_0xcd3e97['Modul'+'e']&&_0xcd3e97['Modul'+'e'][_0x285ba1(0x865)+'8']&&_0xcd3e97[_0x285ba1(0xa09)+'e'][_0x285ba1(0x865)+'8'][_0x285ba1(0xd7a)+'r'])return _0x41d7f7['sourc'+'e']=_0x4830a0[_0x285ba1(0xcda)](_0x285ba1(0x47a)+'w.',_0x439a51[_0x2ec7a7])+('.Modu'+'le'),_0xcd3e97;}}else{var _0x2200bc=_0x32a80c(_0x1cab87[_0x2c8727[_0x3feb54]]['ptr'],0x3*0x8e7+-0xc7d+-0x27*0x5c,-0x1*-0x18c3+0xb3*0x1+-0x5*0x517);if(_0x2200bc&&_0x2200bc[-0x1*0x3e1+-0x2*0x73d+0x7f*0x25]===-0x4f*-0xc+-0x5b4+0x200&&_0x2200bc[-0x1*0x120b+0x1874+-0xa4*0xa]===0x2300+-0x1b*0x15d+0x1cf&&_0x2200bc[0x2*-0x857+-0x2a5+0x1355]===0x2453*-0x1+-0x91d+0x2d70){_0x890dc6=_0x4830a0[_0x285ba1(0x4d9)](_0x118468,_0x1cab87[_0x2c8727[_0x3feb54]][_0x285ba1(0xc63)]+(0x1*0xf9e+0x9*-0x35+-0xd69*0x1),_0x285ba1(0x7f5));break;}}}var _0x822132=0x925*0x2+-0x4*0x1e7+-0x557*0x2;for(var _0x49d62a=-0xf1d*-0x2+-0x392+-0x1aa8;_0x49d62a<_0x1a3ce5['list'][_0x285ba1(0x853)+'h'];_0x49d62a++){if(_0x285ba1(0x5f1)!==_0x4830a0[_0x285ba1(0x286)])_0x3fa4c9=_0x4830a0['uTMbY'](_0x45bb61);else{var _0x387c08=_0x1a3ce5['list'][_0x49d62a],_0xbda366=(_0x387c08['x']-_0x5d551b[_0x285ba1(0x251)][-0x1738+0x1b77*0x1+-0x43f])*_0x22eee0,_0x1dc1a5=(_0x387c08['z']-_0x5d551b['feet'][-0xcb4+-0x2*0x1204+0x30be])*_0x22eee0,_0x43b82b=Math[_0x285ba1(0x45d)](_0x4830a0['SygDh'](_0xbda366,_0xbda366)+_0x4830a0[_0x285ba1(0x8fd)](_0x1dc1a5,_0x1dc1a5)),_0x233db5=_0x16fe0d,_0x1c7d81=_0x16fe0d;if(_0x4830a0['lonut'](_0x43b82b,_0x4830a0[_0x285ba1(0x987)](_0x16fe0d,-0x14f0+-0x11*-0x1d1+-0x9eb))){if(_0x4830a0['XccgO'](_0x285ba1(0x248),_0x285ba1(0xc3d)))return _0x2c3ed9[_0x285ba1(0xc74)+'e']=_0x4830a0[_0x285ba1(0xdb2)],_0x18db15;else _0x233db5=_0x16fe0d+_0xbda366/_0x43b82b*(_0x16fe0d-(-0x2587+-0x129*0x17+-0x403c*-0x1)),_0x1c7d81=_0x4830a0['BoaSC'](_0x16fe0d,_0x1dc1a5/_0x43b82b*(_0x16fe0d-(0x1df*0x7+-0x1828+0xb15)));}else _0x233db5=_0x16fe0d+_0xbda366,_0x1c7d81=_0x16fe0d+_0x1dc1a5;var _0x307bdc=_0x4830a0['xidSy'](_0x890dc6,null)&&_0x387c08[_0x285ba1(0x52e)]===_0x890dc6;_0x577f4f[_0x285ba1(0x38f)+'tyle']=_0x307bdc?_0x285ba1(0xb34)+'6a':'#ff6e'+'74',_0x577f4f[_0x285ba1(0x2b5)+_0x285ba1(0xbf5)](),_0x577f4f['arc'](_0x233db5,_0x1c7d81,_0x307bdc?0x2550+-0x1df7+-0x757:0xcf4+-0x205a+-0x1*-0x1369+0.20000000000000018,-0x1cf5+-0xc6d+0x2962,_0x4830a0[_0x285ba1(0x861)](Math['PI'],0x11a6*-0x2+-0xa4c*-0x2+0xeb6)),_0x577f4f[_0x285ba1(0xb0c)](),_0x822132++;}}_0x577f4f['fillS'+_0x285ba1(0x40f)]=_0x285ba1(0x290)+'a8',_0x577f4f[_0x285ba1(0x2b5)+'Path'](),_0x577f4f['arc'](_0x16fe0d,_0x16fe0d,0x188d+-0xc6+-0x17c4,-0x10*-0x197+-0x158c+0x6*-0xa6,Math['PI']*(0x111d*-0x1+0x5ee+0xb31)),_0x577f4f[_0x285ba1(0xb0c)]();if(_0xdbf8e7['lg']){if(_0x4830a0['dggdF']('GgNWR',_0x4830a0['jgkGt'])){var _0x21f662=_0x6a6b50(_0x2d98d6[_0x285ba1(0x419)],[_0xc1cd42['eye'][-0x3ef+0x25b8+-0x3*0xb43],_0x27ada4[_0x285ba1(0x419)][-0xf82+0x1235+0x45*-0xa],_0x12f07e[_0x285ba1(0x419)][-0x20b2+0x19d7+0x6dd]+(-0xe02+0x1d74+-0xf71)],0x74a+0x245e+-0x27c0,0x193*0xd+-0x1*-0xf8b+-0x201a);_0x21f662&&(_0x7041fc=_0x4830a0[_0x285ba1(0x31b)](_0x21f662['x'],-0x59f+-0x2220+0x2ba7),_0x551011=_0x4830a0['UyaDl'](_0x21f662['y'],-0x56*0x17+0xc48+0xa6*-0x1));}else _0xdbf8e7['lg'][_0x285ba1(0x2a0)+_0x285ba1(0x3b9)+'t']=_0x4830a0[_0x285ba1(0x208)](_0x4830a0[_0x285ba1(0x9fb)](_0x4830a0[_0x285ba1(0x62a)](_0x4830a0['mnJpg']('esp\x20',_0x822132),'\x20·\x20'),Math['round'](_0x1c4e9c[_0x285ba1(0x37e)]))+'m',_0x1c4e9c['boxes']?_0x4830a0[_0x285ba1(0x404)](_0x4830a0['nyIxV'](_0x4830a0[_0x285ba1(0x31d)],Math[_0x285ba1(0x8dd)](_0x4b6821[_0x285ba1(0x7cd)])),'°'):'')+(_0x890dc6!==null?_0x4830a0['fLLEC'](_0x4830a0[_0x285ba1(0xbb6)],_0x890dc6):'');}}catch(_0x2a14f9){}}function _0x212618(){var _0x214b2d=_0x3b5618,_0x493263=_0x42506f['Photo'+_0x214b2d(0xa2c)+'orkSy'+'nc']||{};if(!Object['keys'](_0x493263)[_0x214b2d(0x853)+'h'])return![];return!!_0x4d56f0();}function _0x36d52f(_0x124ece){var _0x189026=_0x3b5618;if(_0x189026(0x757)===_0x4830a0['jxJZi'])_0x52d65b[_0x189026(0x87e)+_0x189026(0x359)]['write'+_0x189026(0xc66)](_0x5ed948)[_0x189026(0xb5d)](_0x56caf1,function(){_0x40cd55();});else try{var _0x3c4e3d=_0x46d7d1;if(_0x3c4e3d&&_0x3c4e3d['el'])_0x3c4e3d['el']['style'][_0x189026(0x95b)+'ay']=_0x124ece?'':_0x189026(0xa29);var _0x591cc9=_0x51561f;if(_0x591cc9&&_0x591cc9['cv'])_0x591cc9['cv'][_0x189026(0x86d)]['displ'+'ay']=_0x124ece?'':_0x4830a0['kgxBJ'];}catch(_0x157629){}}function _0x1416b7(){var _0x90619d=_0x3b5618;if(!_0x1c4e9c['on']||!_0x212618()){_0x4830a0[_0x90619d(0x30a)](_0x36d52f,![]),_0x4830a0['mCQNa'](setTimeout,_0x1416b7,-0x26e1+-0x1c4*-0xf+0xd91);return;}_0x4830a0[_0x90619d(0xa35)](_0x36d52f,!![]),_0x4830a0[_0x90619d(0x9a7)](_0x2c1f84),_0x4830a0['oorsb'](_0x47e4c2);if(_0x1c4e9c['boxes'])_0x4830a0[_0x90619d(0x9a7)](_0x4618ee);var _0x1859e2=null;try{_0x1859e2=_0x20cb3f();}catch(_0x14f436){}try{if(_0x4830a0['OlzOc'](_0x90619d(0x571),_0x90619d(0x571)))_0x4830a0[_0x90619d(0x636)](_0x3a7150);else return _0x55ecf3['abs'](_0x3b8f45-_0x5e048e)<=_0x54f2fe['max'](-0x5ef+0x25b3+-0x1fc3,_0x4830a0['ZCZIi'](_0x369b33[_0x90619d(0xaef)](_0x29c5d2),0xf79+-0x15a5+-0x316*-0x2+0.6));}catch(_0x4bde55){}try{if('cEzJv'!==_0x4830a0[_0x90619d(0x258)])_0xef9c05(_0x1859e2);else return _0x41bc47['faile'+'d']++,_0x499a48['lastE'+_0x90619d(0x6a4)]=_0x2c737e[_0x90619d(0xc95)+_0x90619d(0x6a4)]||_0x4830a0['xkZaW'](_0xd1f9a6,_0x4970fc&&_0x456b42[_0x90619d(0x7d3)+'ge']||_0x3bd7cf)[_0x90619d(0x1d7)](-0xf3*0x10+-0x1*-0x14f3+-0x5c3,-0x8*0x3d7+0xe1d+0x1113),_0x175b92;}catch(_0x4817ea){}setTimeout(_0x1416b7,-0x26f2+-0x1141+0x3865);}function _0xb2d088(){var _0xab23f6=_0x3b5618,_0x64378b={'qCiJi':function(_0x23dd60,_0x42e377){return _0x4830a0['mOGYp'](_0x23dd60,_0x42e377);},'miToY':function(_0x1e2ef1,_0x50e3f2){return _0x1e2ef1!==_0x50e3f2;},'xJVQq':_0xab23f6(0xc6a),'xqCJF':function(_0x4debc5,_0x17f026){return _0x4debc5!==_0x17f026;},'DqTMz':_0xab23f6(0xc9b),'MTYlN':function(_0x36185d){return _0x36185d();},'cMpfJ':function(_0x48704a,_0x1cf066,_0x49ba4b,_0x3342f8,_0x2dc2e7){return _0x4830a0['gmnnl'](_0x48704a,_0x1cf066,_0x49ba4b,_0x3342f8,_0x2dc2e7);},'gfjgo':function(_0x3adf86,_0x532fc9){return _0x3adf86+_0x532fc9;},'xEmyN':_0x4830a0[_0xab23f6(0x7ac)],'sQyIy':function(_0x484fd0,_0x524634){return _0x484fd0<=_0x524634;},'mkjGg':function(_0xc51452,_0x23e9bf){return _0xc51452+_0x23e9bf;},'YSfAe':function(_0x30e093,_0x31c6e3){var _0xe39be3=_0xab23f6;return _0x4830a0[_0xe39be3(0x3f3)](_0x30e093,_0x31c6e3);},'deKwu':_0x4830a0['gfoyK'],'HBHzn':_0x4830a0['kgxBJ']},_0x22e68e=window[_0xab23f6(0x36f)+_0xab23f6(0xa86)+'dkit']&&window['Unity'+'WebMo'+'dkit']['Runti'+'me']||null,_0x38e51a=_0x22e68e&&_0x22e68e[_0xab23f6(0x453)+'pCont'+_0xab23f6(0xc3e)],_0x5a9b93=_0x38e51a&&_0x38e51a[_0xab23f6(0x5c5)+_0xab23f6(0x285)],_0x391d48={},_0x440fde=[];for(var _0x7e9c4b in _0x199537){_0x391d48[_0x7e9c4b]=_0x4830a0[_0xab23f6(0x24f)]('0x',_0x199537[_0x7e9c4b][_0xab23f6(0xc63)]['toStr'+'ing'](0x15ca*-0x1+-0x617*-0x5+-0x899));if(_0x199537[_0x7e9c4b][_0xab23f6(0x336)+_0xab23f6(0xb99)])_0x440fde['push'](_0x7e9c4b);}var _0xb8f76c={};for(var _0x2b5306 in _0x199537)_0xb8f76c[_0x2b5306]=_0x4830a0['uRaft'](_0x45dc2d,_0x199537[_0x2b5306]['ptr']);var _0x20db8b={},_0x2b6bec=null;try{if(_0xab23f6(0x683)==='qZHmT')_0x20db8b=_0x4830a0['AjPPr'](_0x1d5cd1);else{_0x5c5b0d[-0x6*-0x33d+0x145*-0x17+0x9c6]&&_0x4830a0[_0xab23f6(0x361)](typeof _0x1cf99d[0x1a55+-0x21fd+0x1*0x7a9][_0xab23f6(0x318)],_0x4830a0[_0xab23f6(0x579)])&&(_0x322ab0['setLa'+'st']=_0x276620[-0x20f5+-0x1*-0x1f7+0x1eff][_0xab23f6(0x318)](),_0x3a85c6['setHi'+'ts']++);if(_0x443e6c[0xe*-0x23b+0x5*0x533+-0xd*-0x67]&&typeof _0x3b3324[-0xb9c+0x17c7+-0xc2b][_0xab23f6(0x318)]==='funct'+_0xab23f6(0x9fd)){var _0x34de13=_0x169af9[-0x17a0+0x250d+0x1*-0xd6d]['val']();if(_0x34de13)_0x303d09=_0x34de13;}}}catch(_0x2d0938){if(_0xab23f6(0x9ae)===_0xab23f6(0xcaf))return null;else _0x2b6bec=String(_0x2d0938&&_0x2d0938[_0xab23f6(0x7d3)+'ge']||_0x2d0938);}var _0x4206e9={'version':_0x5c1a61,'when':new Date()['toISO'+_0xab23f6(0x356)+'g'](),'elapsedMs':Date[_0xab23f6(0xb6c)]()-_0x3ebd36,'frame':location[_0xab23f6(0xb6a)][_0xab23f6(0x1d7)](0xc7a*-0x2+0x1*0x5e7+0x130d,0x1129+-0x2e*-0x59+-0x20af),'host':_0x55cced,'frameRole':_0x98b56,'uwmk':!!_0x22e68e,'il2CppContext':!!_0x38e51a,'typeCount':_0x5a9b93?Object[_0xab23f6(0xb8c)](_0x5a9b93)['lengt'+'h']:null,'arm':_0x1360e2,'assemblies':_0x108c2e,'hooksTotal':_0x12f58[_0xab23f6(0x853)+'h'],'hooksApplied':_0x2aa6ac(),'hooksResolved':_0x184bde(),'hooksRegisteredAtArm':_0x1360e2[_0xab23f6(0xc64)+_0xab23f6(0xaac)+'tered']||-0x1935+0x1a0d+-0x48*0x3,'hookErrors':_0x4ae9a9['slice'](0x93f*-0x3+0xb56+0x1067,0x4*0x35+0x693+-0x75f*0x1),'instances':_0x391d48,'classNames':_0xb8f76c,'instancesReplaced':_0x440fde,'hookFireProof':_0x52b212,'survey':_0x20db8b,'actkKeys':_0x19ec28,'surveyRows':Object[_0xab23f6(0xb8c)](_0x20db8b)['reduc'+'e'](function(_0x3dc030,_0x518be1){var _0x599b20=_0xab23f6;return _0x3dc030+_0x20db8b[_0x518be1][_0x599b20(0x853)+'h'];},-0x19*0x3+-0x262d+0x99e*0x4),'reads':{'ok':_0x3d795f['ok'],'failed':_0x3d795f[_0xab23f6(0xd63)+'d'],'lastError':_0x3d795f['lastE'+_0xab23f6(0x6a4)],'source':_0x3d795f[_0xab23f6(0xc74)+'e']},'identity':_0x4830a0[_0xab23f6(0x83b)](_0x25226d),'globals':_0x21abdf(),'wasmMemory':{'captured':!!_0x1a58cb,'atMs':_0x15e2cf,'bytes':(function(){var _0x49a798=_0xab23f6,_0x2e8763={'ThECi':function(_0x493b8b,_0xc6f440){return _0x493b8b+_0xc6f440;},'EcOwF':function(_0x5e9e17,_0x27333f){return _0x64378b['qCiJi'](_0x5e9e17,_0x27333f);}};if(_0x64378b['miToY'](_0x64378b[_0x49a798(0x6de)],_0x49a798(0x6b4)))try{if(_0x64378b['xqCJF'](_0x64378b['DqTMz'],_0x64378b[_0x49a798(0x337)]))_0x18d97e[_0x49a798(0x80c)]=![];else return _0x1a58cb&&_0x1a58cb[_0x49a798(0xd7a)+'r']?_0x1a58cb[_0x49a798(0xd7a)+'r'][_0x49a798(0xd84)+_0x49a798(0xcfe)]:-0x25*-0x63+0x21c6+-0x1*0x3015;}catch(_0x556740){return 0x513*0x1+0x1b8e+-0x20a1;}else _0x3320c4[_0x49a798(0x7fa)+_0x49a798(0x88b)][_0x49a798(0xbb7)](_0x2e8763[_0x49a798(0xdc0)](_0x2e8763['ThECi'](_0x2e8763[_0x49a798(0x2cd)](_0x49a798(0xc7a)+'resol'+_0x49a798(0xc8f),_0x161a1e['hooks'+_0x49a798(0x888)+'ved'])+_0x49a798(0x363),_0x13553f[_0x49a798(0xc64)+_0x49a798(0x8ec)])+(_0x49a798(0x33f)+'(s)\x20t'+_0x49a798(0x395)+_0x49a798(0x92a)+_0x49a798(0x227)+_0x49a798(0xd7e)+'appli'+'ed\x20no'+_0x49a798(0x354)+_0x49a798(0x9d5)+'gnatu'+_0x49a798(0x559)),'(this'+',\x20Met'+'hodIn'+_0x49a798(0x232)+_0x49a798(0x7af)+'id\x20do'+'es\x20no'+_0x49a798(0x3cf)+_0x49a798(0x653)+'is\x20bu'+'ild.'));}()),'exportKeys':_0x59f975},'diff':_0x412040['slice'](-0x13*-0x119+0x18c+-0x1667,0x1fb8+-0x6*0x146+-0x17ec),'speed':{'on':_0x328f9c['on'],'factor':_0x328f9c[_0xab23f6(0x5db)+'r'],'writes':_0x177880,'scaled':_0x48fe2f[_0xab23f6(0x1d7)](-0xe06+0x22b0+-0x14aa,-0x1*0xbbc+-0xd5*-0xd+0xfb*0x1),'skipped':_0x4ac976['slice'](0xcfb+0x15e9+0xe*-0x27e,0x260e+0xc45+-0x3243)},'esp':_0x4830a0[_0xab23f6(0x396)](_0x561999),'view':_0x785804(),'angles':(function(){var _0x20b186=_0xab23f6,_0x592c97={'CrAmR':function(_0x464458){return _0x64378b['MTYlN'](_0x464458);}};if(_0x20b186(0x4c7)==='KuXJA'){var _0x52f8ba=('3|2|1'+_0x20b186(0xb7b))[_0x20b186(0x8a1)]('|'),_0x47d458=-0x22e*-0x3+0x14b*-0x5+-0x13;while(!![]){switch(_0x52f8ba[_0x47d458++]){case'0':if(_0x258fb4){var _0x5109f2=_0x64378b['cMpfJ'](_0x631e84,_0x258fb4['eye'],[_0x258fb4[_0x20b186(0x419)][0x112*0xf+-0x9*-0x1eb+-0x2151*0x1],_0x258fb4['eye'][0x1*0x224f+0x1b64+-0x3db2],_0x64378b[_0x20b186(0xcd3)](_0x258fb4[_0x20b186(0x419)][-0x1d42+-0x1b76+0x38ba],0x1*-0x1957+-0x1a5d*0x1+-0x7*-0x763)],0x17b*0x13+0x1b65+0x2*-0x19cf,0x72+0x9*0x22b+-0x100d);_0x5109f2&&(_0x5027fb=_0x5109f2['x']/(0x9ce+0x2054+-0x3*0xcbe),_0x17e13b=_0x5109f2['y']/(0x83f*0x3+-0x2*-0xea8+-0x3225));}continue;case'1':var _0x258fb4=_0x4d56f0();continue;case'2':var _0x5027fb=null,_0x17e13b=null;continue;case'3':var _0x254adf=_0x3a5a5d();continue;case'4':return{'identified':_0x5d05c4[_0x20b186(0x53e)+_0x20b186(0xb43)],'why':_0x5d05c4['why'],'source':_0x5d05c4['sourc'+'e'],'yawAt':_0x5d05c4['yawGe'+_0x20b186(0x497)]||_0x64378b['xEmyN'],'pitchAt':_0x5d05c4[_0x20b186(0x913)+_0x20b186(0x9e2)+'r']||_0x20b186(0x776)+'(gues'+'s)','getters':_0x5d05c4[_0x20b186(0x720)+'rs'],'rawPitch':_0x5d05c4['rawPi'+_0x20b186(0x9a4)],'rawYaw':_0x5d05c4[_0x20b186(0x79c)+'w'],'pitch':_0x5d05c4[_0x20b186(0x913)],'yaw':_0x5d05c4[_0x20b186(0x202)],'pitchOff':_0x4b6821[_0x20b186(0x913)+_0x20b186(0x7dc)],'yawOff':_0x4b6821[_0x20b186(0x569)+'f'],'fov':_0x4b6821[_0x20b186(0x7cd)],'fovSane':_0x4b6821[_0x20b186(0x7cd)]>=-0x792+0x141a+-0x1*0xc4c&&_0x64378b[_0x20b186(0x8e8)](_0x4b6821['fov'],-0x12*-0x7+0x1*0x1951+-0x1961),'centreX':_0x5027fb,'centreY':_0x17e13b};}break;}}else _0x3a1ab7['fov']=-0x17*0xef+-0x988*-0x2+0x2b4,_0x386849[_0x20b186(0x913)+'Off']=-0xb7*-0x2+-0x3cd+-0x1*-0x25f,_0x1404f1[_0x20b186(0x569)+'f']=0x1*0x243d+0x11ea+-0x3627,_0x5a2309(),_0x592c97[_0x20b186(0x1de)](_0xaf7050),_0x276de1(_0x325c32[_0x20b186(0x44c)]);}()),'fov':_0x4b6821['fov'],'espView':{'on':_0x1c4e9c['on'],'boxes':_0x1c4e9c['boxes'],'span':_0x1c4e9c[_0xab23f6(0x37e)]},'local':(function(){var _0x12dc19=_0xab23f6,_0x42338a=_0x4830a0[_0x12dc19(0xcd9)](_0x4d56f0);if(!_0x42338a)return null;return{'ptr':'0x'+_0x42338a[_0x12dc19(0xc63)]['toStr'+_0x12dc19(0x9f5)](-0x1*0xe3a+-0x16ff*0x1+0x775*0x5),'feet':_0x42338a[_0x12dc19(0x251)],'eye':_0x42338a['eye'],'posAt':_0x42338a[_0x12dc19(0xd2f)],'copies':_0x42338a[_0x12dc19(0x200)+'s'],'cluster':_0x42338a[_0x12dc19(0x411)+'er'],'eyeHeight':_0x5f3de2,'pitch':_0x42338a['pitch'],'yaw':_0x42338a[_0x12dc19(0x202)],'reach':_0x42338a[_0x12dc19(0xc92)]};}()),'uwmkLog':_0xafbef8['slice'](-0x9b0*-0x1+0x1*0x1c4f+-0x25ff,0x1*0x102b+0x357+-0x67a*0x3),'warnings':[]};if(_0x2b6bec)_0x4206e9[_0xab23f6(0x7fa)+'ngs']['push']('surve'+_0xab23f6(0x8a3)+'led:\x20'+_0x2b6bec);if(_0x1360e2[_0xab23f6(0x615)])_0x4206e9[_0xab23f6(0x7fa)+'ngs'][_0xab23f6(0xbb7)](_0x4830a0['edQak'](_0xab23f6(0xc7a)+_0xab23f6(0xce5)+_0xab23f6(0xc5a)+_0xab23f6(0x8df),_0x1360e2[_0xab23f6(0x615)]));_0x4830a0[_0xab23f6(0x588)](_0x4206e9[_0xab23f6(0xd97)+'yRows'],-0xc96+-0xe9a+0x3a*0x78)&&Object['keys'](_0x4206e9[_0xab23f6(0x57b)+_0xab23f6(0x989)])['lengt'+'h']>0x1203+0x10d0+-0x22d3&&_0x4206e9[_0xab23f6(0x7fa)+_0xab23f6(0x88b)]['push'](_0x4830a0[_0xab23f6(0x869)](_0x4830a0[_0xab23f6(0x94b)](_0xab23f6(0x8dc)+'red\x20'+Object[_0xab23f6(0xb8c)](_0x4206e9[_0xab23f6(0x57b)+_0xab23f6(0x989)])[_0xab23f6(0x853)+'h'],'\x20obje'+'ct(s)'+_0xab23f6(0xd7e)+'read\x20'+_0xab23f6(0x211)+'lds.\x20'),_0x3d795f[_0xab23f6(0xc95)+'rror']?_0x4830a0[_0xab23f6(0x31a)]+_0x3d795f[_0xab23f6(0xc95)+'rror']:_0xab23f6(0xc4e)+_0xab23f6(0x6d4)+_0xab23f6(0x5c6)+_0xab23f6(0x334)+_0xab23f6(0x82e)+'offse'+_0xab23f6(0x1e8)+'\x20skip'+_0xab23f6(0x270)+_0xab23f6(0x4d7)+'e.'));_0x4206e9['ident'+_0xab23f6(0x4bc)]&&_0x4206e9[_0xab23f6(0x53e)+_0xab23f6(0x4bc)]['tagMa'+'tches']===![]&&_0x4206e9['warni'+_0xab23f6(0x88b)][_0xab23f6(0xbb7)](_0xab23f6(0x804)+_0xab23f6(0xa4e)+_0xab23f6(0x74a)+_0xab23f6(0xc70)+_0xab23f6(0x938)+_0xab23f6(0x6dc)+'ndow.'+_0xab23f6(0x36f)+'WebMo'+'dkit.'+_0xab23f6(0x79f)+_0xab23f6(0xa13)+_0xab23f6(0x526)+_0xab23f6(0x563)+_0xab23f6(0x768)+'\x20'+(_0xab23f6(0x336)+_0xab23f6(0x52c)+'y\x20a\x20d'+'iffer'+_0xab23f6(0x48a)+_0xab23f6(0x9da)+'ce,\x20s'+_0xab23f6(0xba2)+_0xab23f6(0x620)+_0xab23f6(0x5a4)+_0xab23f6(0x6cc)+'wrong'+_0xab23f6(0x930)+_0xab23f6(0x9cc)+'r\x20')+(_0xab23f6(0x67b)+'ame\x20w'+_0xab23f6(0xb44)+'the\x20o'+'ne\x20ho'+_0xab23f6(0x33a)+'\x20it\x20i'+_0xab23f6(0x581)+'haned'+_0xab23f6(0x5c8)+_0xab23f6(0x92a)+_0xab23f6(0xba5)+_0xab23f6(0x8d7)+'r\x20')+_0x4830a0[_0xab23f6(0x81b)]);_0x4206e9['ident'+_0xab23f6(0x4bc)]&&_0x4206e9['ident'+_0xab23f6(0x4bc)][_0xab23f6(0xa4a)+'nRunt'+_0xab23f6(0x8b2)+'Expor'+_0xab23f6(0xd29)]===![]&&_0x4206e9[_0xab23f6(0x7fa)+_0xab23f6(0x88b)][_0xab23f6(0xbb7)](_0xab23f6(0xa4a)+'n._ru'+'ntime'+_0xab23f6(0x2b7)+_0xab23f6(0xa5b)+_0xab23f6(0x7c7)+_0xab23f6(0x36f)+_0xab23f6(0xa86)+'dkit.'+'Runti'+_0xab23f6(0x1ec)+_0xab23f6(0xd03)+_0xab23f6(0x3ad)+_0xab23f6(0x47f)+_0xab23f6(0x52d)+'\x20'+(_0xab23f6(0x22e)+_0xab23f6(0x7b4)+_0xab23f6(0xaf4)+'rent\x20'+_0xab23f6(0xa13)+_0xab23f6(0x27b)+_0xab23f6(0x616)+_0xab23f6(0xbc5)+_0xab23f6(0x3d7)+'\x20glob'+_0xab23f6(0xc07)+'w\x20exp'+_0xab23f6(0x2a1)));if(_0x4206e9['esp']&&_0x4206e9['esp']['note'])_0x4206e9[_0xab23f6(0x7fa)+_0xab23f6(0x88b)][_0xab23f6(0xbb7)](_0x4830a0[_0xab23f6(0x854)](_0xab23f6(0x3e2),_0x4206e9['esp'][_0xab23f6(0xc6e)]));if(_0x4206e9[_0xab23f6(0x2f4)+'ls']&&!_0x4206e9['globa'+'ls'][_0xab23f6(0xc1f)+'8']){if(_0x4830a0[_0xab23f6(0x9fe)](_0xab23f6(0x717),_0xab23f6(0x717))){var _0x3a07ff=_0x58e20e();if(!_0x3a07ff)return _0x5a08c3;if(_0x3a07ff[_0xab23f6(0x7a8)+'et'][_0xab23f6(0x565)])return _0x3a07ff[_0xab23f6(0x565)];try{return _0x4a093c(_0x3a07ff);}catch(_0x7b58f7){return _0x3a07ff['datas'+'et']['api']='1',_0x3a07ff['api']=_0x464f53,_0x470447[_0xab23f6(0xbfd)]('%c[sa'+'kura]'+_0xab23f6(0x3ee)+'l\x20dis'+_0xab23f6(0x662),_0xab23f6(0xccd)+':'+_0x5b5261,_0x7b58f7),_0x529bf7;}}else{var _0x580349='';_0x4206e9['hookF'+_0xab23f6(0xb9f)+_0xab23f6(0xcbe)]&&(_0x4830a0[_0xab23f6(0xaa6)](_0xab23f6(0x8a0),'tWNkZ')?_0x580349=_0x4830a0[_0xab23f6(0x89d)](_0x4830a0[_0xab23f6(0x8ef)](_0x4830a0[_0xab23f6(0xa2f)](_0x4830a0['fLLEC'](_0x4830a0['KmWOF'](_0x4830a0['WGefR'](_0x4830a0['HFQPS'],_0x4206e9[_0xab23f6(0xc41)+_0xab23f6(0xb9f)+_0xab23f6(0xcbe)][_0xab23f6(0x480)]),_0x4830a0[_0xab23f6(0x3aa)]),_0x4206e9[_0xab23f6(0xc41)+_0xab23f6(0xb9f)+'oof'][_0xab23f6(0x8bd)+_0xab23f6(0x2eb)+'nc']),_0x4830a0[_0xab23f6(0xbe2)]),_0x4206e9[_0xab23f6(0xc41)+_0xab23f6(0xb9f)+_0xab23f6(0xcbe)][_0xab23f6(0x8c9)+_0xab23f6(0x68d)+_0xab23f6(0x417)+'re'])+('\x20(sou'+'rce:\x20')+(_0x4206e9['hookF'+'irePr'+'oof']['gameS'+'ource'+_0xab23f6(0x2fe)+'e']||_0xab23f6(0xa29)),_0x4830a0[_0xab23f6(0x7d7)]):_0x5a1876[_0xab23f6(0x617)][_0xab23f6(0x6e5)+'ed']=![]),_0x4206e9[_0xab23f6(0x7fa)+_0xab23f6(0x88b)]['push'](_0x4830a0[_0xab23f6(0x224)](_0xab23f6(0x36f)+'\x20inst'+_0xab23f6(0x84a)+'not\x20r'+'esolv'+'ed\x20ye'+_0xab23f6(0xc2e)+_0xab23f6(0x5fe)+'\x20'+(_0x4206e9['globa'+'ls']['gameS'+_0xab23f6(0x879)]||_0x4830a0['kgxBJ'])+').\x20'+_0x4830a0['LiamG'],_0x580349));}}(_0x4206e9[_0xab23f6(0x2f4)+'ls']&&!_0x4206e9[_0xab23f6(0x2f4)+'ls'][_0xab23f6(0x61f)+'Wrapp'+'er']||_0x4830a0[_0xab23f6(0x59c)](_0x4206e9[_0xab23f6(0x2f4)+'ls']['value'+_0xab23f6(0x58d)+'er'],'undef'+_0xab23f6(0x8c2)))&&_0x4206e9[_0xab23f6(0x7fa)+'ngs']['push']('windo'+_0xab23f6(0xd27)+'tyWeb'+_0xab23f6(0x551)+'t.Val'+_0xab23f6(0x546)+'pper\x20'+_0xab23f6(0x311)+_0xab23f6(0x292)+'\x20-\x20ca'+'pture'+_0xab23f6(0x709)+_0xab23f6(0x7ae)+_0xab23f6(0x876)+_0xab23f6(0x6a8));_0x4206e9[_0xab23f6(0xc64)+_0xab23f6(0x8ec)]>0x3*-0x9f+-0x2240+0x241d&&_0x4830a0['emTYn'](_0x4206e9['hooks'+_0xab23f6(0x780)+'ed'],-0x1*-0x1e5f+0x2*0x10a9+-0x3*0x153b)&&_0x5a9b93&&(_0xab23f6(0xce0)!==_0xab23f6(0xce0)?_0x25630e['textC'+_0xab23f6(0x3b9)+'t']=_0x57b790(_0x2f7377):_0x4206e9[_0xab23f6(0xc64)+_0xab23f6(0x888)+_0xab23f6(0xbc3)]===-0x21e*-0x1+-0x228f*0x1+0x2071?_0x4830a0[_0xab23f6(0x293)](_0xab23f6(0xd62),_0xab23f6(0x650))?_0x5e19ce['preve'+'ntDef'+_0xab23f6(0x746)]():_0x4206e9['warni'+'ngs'][_0xab23f6(0xbb7)](_0x4830a0[_0xab23f6(0xa7c)](_0x4830a0[_0xab23f6(0xa26)](_0xab23f6(0xb46)+_0x4206e9[_0xab23f6(0xc64)+'Total']+_0x4830a0[_0xab23f6(0x553)]+(_0xab23f6(0x9af)+'once\x20'+'durin'+_0xab23f6(0x7ab)+_0xab23f6(0x60a)+'bly.i'+'nstan'+'tiate'+_0xab23f6(0xd52)+_0xab23f6(0xc82)+'hots\x20'+'plugi'+_0xab23f6(0x3a4)+'ks.le'+'ngth,'+'\x20'),_0x4830a0[_0xab23f6(0x755)]),_0xab23f6(0xaac)+_0xab23f6(0x5bd)+'\x20')+_0x4206e9['hooks'+'Regis'+_0xab23f6(0x5bd)+_0xab23f6(0xb40)]+_0x4830a0[_0xab23f6(0x2d6)]):_0x4206e9[_0xab23f6(0x7fa)+_0xab23f6(0x88b)][_0xab23f6(0xbb7)](_0x4830a0['uJMgJ'](_0x4830a0[_0xab23f6(0xa6b)](_0x4830a0[_0xab23f6(0xdb1)](_0x4830a0[_0xab23f6(0x6a6)],_0x4206e9[_0xab23f6(0xc64)+'Resol'+'ved'])+_0x4830a0[_0xab23f6(0x52b)]+_0x4206e9[_0xab23f6(0xc64)+'Total'],_0x4830a0['aPvSW']),_0xab23f6(0xb72)+',\x20Met'+'hodIn'+_0xab23f6(0x232)+_0xab23f6(0x7af)+'id\x20do'+'es\x20no'+_0xab23f6(0x3cf)+_0xab23f6(0x653)+_0xab23f6(0x328)+'ild.')));if(_0x4206e9[_0xab23f6(0xc64)+_0xab23f6(0x780)+'ed']>0x92*0x3b+0xc74+-0x2e1a&&!_0x4206e9['insta'+'nces'][_0xab23f6(0xb3f)+_0xab23f6(0x60b)+_0xab23f6(0x4c0)]){if(_0xab23f6(0x5f0)!==_0xab23f6(0x5f0)){var _0x3c0e3d='';_0x56025e[_0xab23f6(0xc41)+'irePr'+'oof']&&(_0x3c0e3d=_0x64378b['mkjGg'](_0x64378b['qCiJi'](_0x64378b['qCiJi'](_0x64378b[_0xab23f6(0xd96)](_0xab23f6(0xbd1)+_0xab23f6(0x741)+_0xab23f6(0xa3c)+'t\x20',_0x53be5a[_0xab23f6(0xc41)+_0xab23f6(0xb9f)+_0xab23f6(0xcbe)][_0xab23f6(0x480)])+('ms\x20wi'+_0xab23f6(0x38d)+_0xab23f6(0x658)+_0xab23f6(0xda5)+'=')+_0x2db4c8[_0xab23f6(0xc41)+_0xab23f6(0xb9f)+'oof']['origi'+_0xab23f6(0x2eb)+'nc'],'\x20and\x20'+_0xab23f6(0x2b4)+'resol'+_0xab23f6(0x5ee))+_0x17df85[_0xab23f6(0xc41)+'irePr'+_0xab23f6(0xcbe)][_0xab23f6(0x8c9)+_0xab23f6(0x68d)+_0xab23f6(0x417)+'re']+_0x64378b[_0xab23f6(0x2e2)],_0x530b70[_0xab23f6(0xc41)+'irePr'+_0xab23f6(0xcbe)][_0xab23f6(0x770)+'ource'+_0xab23f6(0x2fe)+'e']||_0x64378b['HBHzn']),'),\x20so'+_0xab23f6(0x6cc)+'refer'+'ence\x20'+'exist'+'ed\x20th'+_0xab23f6(0xd64)+'d\x20is\x20'+_0xab23f6(0x82b)+'eacha'+'ble\x20n'+'ow.')),_0x544882[_0xab23f6(0x7fa)+_0xab23f6(0x88b)][_0xab23f6(0xbb7)](_0x64378b['gfjgo'](_0xab23f6(0x36f)+'\x20inst'+_0xab23f6(0x84a)+_0xab23f6(0x82b)+_0xab23f6(0xc73)+_0xab23f6(0x86e)+_0xab23f6(0xc2e)+_0xab23f6(0x5fe)+'\x20'+(_0x5df6fb[_0xab23f6(0x2f4)+'ls']['gameS'+_0xab23f6(0x879)]||'none')+').\x20',_0xab23f6(0x5b7)+_0xab23f6(0x380)+'\x20stay'+_0xab23f6(0x63c)+'ked\x20u'+'ntil\x20'+_0xab23f6(0xad2)+_0xab23f6(0xc47)+_0xab23f6(0xbab)+_0xab23f6(0xd81)+_0xab23f6(0x303)+_0xab23f6(0xda2)+'U8\x20is'+'\x20reac'+_0xab23f6(0x217)+'.')+_0x3c0e3d);}else _0x4206e9['warni'+'ngs']['push'](_0xab23f6(0xa68)+'\x20are\x20'+_0xab23f6(0x7e0)+'ed\x20bu'+_0xab23f6(0x3b5)+_0xab23f6(0xb3f)+'ntrol'+'ler\x20h'+_0xab23f6(0xcd2)+'red\x20y'+'et.\x20'+_0x4830a0[_0xab23f6(0x201)]);}return _0x4206e9['insta'+_0xab23f6(0x642)+_0xab23f6(0x95e)+'ed'][_0xab23f6(0x853)+'h']&&_0x4206e9[_0xab23f6(0x7fa)+'ngs']['push'](_0x4830a0['DlfHe'](_0x4830a0[_0xab23f6(0x76c)],_0x4206e9[_0xab23f6(0x57b)+_0xab23f6(0x642)+'eplac'+'ed'][_0xab23f6(0xbe3)](',\x20'))),_0x4206e9;}function _0x5ed0f0(_0x5f54de){var _0x3f95ca=_0x3b5618,_0xa6932c={'cuiRV':_0x4830a0['krCBK'],'SNqon':_0x3f95ca(0x64c)+'f5','RuaXe':'Speed'+_0x3f95ca(0x4fa)};if(_0x4830a0[_0x3f95ca(0x287)]===_0x3f95ca(0xb1f)){console['log'](_0x4830a0[_0x3f95ca(0x24e)],_0x3f95ca(0xccd)+':'+_0xf63150+_0x4830a0['KtCIi'],_0x5f54de),console[_0x3f95ca(0x90e)](_0x4830a0['gNlUi'](_0x4830a0[_0x3f95ca(0x8ef)](_0x14987d+'\x0a',JSON['strin'+'gify'](_0x5f54de,null,-0x1*-0x1a03+-0x9e+-0xfa*0x1a))+'\x0a',_0x538b47)),_0xdb433=_0x5f54de;try{if(_0x4830a0['aasYY'](_0x4830a0[_0x3f95ca(0x49c)],_0x4830a0[_0x3f95ca(0x49c)]))_0x20d6c2(_0x5f54de);else try{if(_0x24acea[_0x27aa3c][_0x3f95ca(0x5e4)+_0x3f95ca(0xb78)+_0x3f95ca(0x98d)])_0x41a9b7[_0x3149bb][_0x3f95ca(0x5e4)+'ntWin'+_0x3f95ca(0x98d)][_0x3f95ca(0x223)+'essag'+'e'](_0x5b56e6,'*');}catch(_0x2a7fbf){}}catch(_0x561eb0){}_0x1cedca(_0x3f95ca(0x609)+'t',{'report':_0x5f54de});}else{var _0x23a077=(_0x3f95ca(0x8b1)+'|3|1')[_0x3f95ca(0x8a1)]('|'),_0x3453e5=-0x872+0x1d25+-0x14b3;while(!![]){switch(_0x23a077[_0x3453e5++]){case'0':_0x1abe1c[_0x3f95ca(0x86d)]['backg'+_0x3f95ca(0x8dd)]=_0x522ea4?_0x2575f7:_0xa6932c[_0x3f95ca(0x2af)];continue;case'1':_0x2bb920();continue;case'2':_0x2d4237=!_0x101ad5;continue;case'3':_0x4e329e['style']['color']=_0xfa25ee?_0x3f95ca(0xc4b)+'1b':_0xa6932c[_0x3f95ca(0x85e)];continue;case'4':_0x37be87[_0x3f95ca(0x2a0)+_0x3f95ca(0x3b9)+'t']=_0x2d5318?_0xa6932c[_0x3f95ca(0xa8d)]:_0x3f95ca(0x2ed)+_0x3f95ca(0x465);continue;}break;}}}function _0x1ed63a(){var _0x28bc7b=_0x3b5618;try{return _0x4830a0['Nhwpm'](_0xb2d088);}catch(_0x272749){if(_0x4830a0[_0x28bc7b(0x458)]!==_0x28bc7b(0xdb0))return{'version':_0x5c1a61,'when':new Date()[_0x28bc7b(0x9d3)+_0x28bc7b(0x356)+'g'](),'elapsedMs':_0x4830a0['MqRbk'](Date[_0x28bc7b(0xb6c)](),_0x3ebd36),'host':_0x55cced,'uwmk':!!(window[_0x28bc7b(0x36f)+_0x28bc7b(0xa86)+'dkit']&&window[_0x28bc7b(0x36f)+_0x28bc7b(0xa86)+_0x28bc7b(0xd45)]['Runti'+'me']),'il2CppContext':![],'arm':_0x1360e2,'hooksTotal':_0x12f58['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x4830a0[_0x28bc7b(0x59b)](String,_0x272749&&_0x272749[_0x28bc7b(0x7d3)+'ge']||_0x272749)};else{_0x2382fd();return;}}}function _0x5127f6(){var _0x1cf2b4=_0x3b5618,_0x2bde00=0x13f9+0x1*0x837+-0x1c30;try{_0x1416b7();}catch(_0x29de7c){}try{_0x5bbd72();}catch(_0x3e2a0e){}setInterval(_0x1f2ae7,-0xa9*-0x6+0xc11+0x1*-0xc83),_0x5ed0f0(_0x4830a0[_0x1cf2b4(0x514)](_0x1ed63a)),function _0x3dd22b(){var _0x54d60e=_0x1cf2b4,_0x3d10d9={'DvUbl':function(_0x259786,_0x473fad){var _0x4a41f0=_0x1d88;return _0x4830a0[_0x4a41f0(0x951)](_0x259786,_0x473fad);}};if(!_0x12f58['lengt'+'h']){if(_0x54d60e(0x574)!==_0x54d60e(0x574))_0x4c1d13(_0x46496a['on'],_0x34ffd6);else try{if(_0x4830a0[_0x54d60e(0x53b)]!==_0x4830a0['XCcJI'])_0x3d8564();else{if(!_0x27dc45||!_0x15ef74)return null;var _0x48c7c5=new _0x1dd5b9(_0x100525)['getCl'+'assNa'+'me']();return _0x3d10d9[_0x54d60e(0x555)](_0x48c7c5,_0x2d6476)?null:_0x48c7c5;}}catch(_0xd6b3f){}}_0x2bde00++,_0x5ed0f0(_0x1ed63a());if(!_0x12f58['lengt'+'h']&&_0x2bde00<0x2252+-0xb2d*-0x2+-0x3*0x1280)_0x4830a0[_0x54d60e(0x225)](setTimeout,_0x3dd22b,-0x4*0x35f+-0x25d3+0x3b1f);else{if(!Object['keys'](_0x199537)[_0x54d60e(0x853)+'h']&&_0x4830a0['RxkBA'](_0x2bde00,0xd38+-0xd*-0x1c+0x4*-0x35e))setTimeout(_0x3dd22b,0xfe*-0x25+0x24f1+-0x1*-0x795);else setTimeout(_0x3dd22b,0x236a+-0x4*-0x3be+-0x16d9*0x2);}}();}if(document[_0x3b5618(0x84b)])_0x5127f6();else document[_0x3b5618(0x6e0)+_0x3b5618(0xbd8)+_0x3b5618(0x76f)+'r'](_0x3b5618(0xc20)+'ntent'+_0x3b5618(0x5f5)+'d',_0x5127f6,{'once':!![]});if(document[_0x3b5618(0x84b)])try{_0x5b6492();}catch(_0x260aa5){}else document['addEv'+_0x3b5618(0xbd8)+_0x3b5618(0x76f)+'r'](_0x3b5618(0xc20)+_0x3b5618(0xd2e)+_0x3b5618(0x5f5)+'d',function(){var _0x18758f=_0x3b5618;try{_0x4830a0[_0x18758f(0xa37)](_0x5b6492);}catch(_0x1e8622){}},{'once':!![]});})()));function _0x581c(){var _0x1ce977=['zxnVBhy','C291CMm','AwDUlwK','Dhj1y3q','DxvYt1y','v1LpCvy','vuPQsKS','vvDnsYa','zxGTzgK','zxHPwg0','C28GC3q','WOBcKmksWPhcKa','sw5KzxG','z2v0sw4','ChG7Bwe','C25HChm','ywn0B3i','B3vUzcW','ndy7y3u','iMjHy2S','yxbWzwe','ywXSzwq','wMjJsNa','r2Dov1i','yw5LBca','DMLLDY0','z2DTvge','EwDbq2e','DMvKia','B25LoYi','nsWXndm','CMvHy2G','Cg9YDge','nwmWidm','BgfZDeu','AdO5nNa','oM1PBIG','lde3nYW','mNW0Fde','yMXLig4','zLPNvLK','BgW+','C2v0sgK','B2PgtKK','idmWChG','yM9VBa','pgj1Dhq','mtf8mhW','WOBcLCklWOBcKq','reffzeS','y3vYC28','we9PrwK','B20GDgG','EhvHzMy','mdTMB24','CK5Tzvm','AKz6yMS','ugfZDgu','zxG7ywW','WOFcLCkpWO3cJG','ug92vuy','icbMywm','CNqGihq','CM5PBMC','Fdb8nNW','BJWVyNu','wuvJtem','B2LUDgu','AKjpqwC','zgf0yq','qMj3sxi','tgLZDa','WORcJSksWPxcIW','zwqGDgG','AxvZoJi','B29M','mtG5mta0og5owxP3rW','B3bgB3u','mcaWida','zJu7yM8','ktSGBM8','imk3ia','CJPYz2i','vMDqvxi','CxvLCNK','y29SCW','lYbZChi','keLUC2u','zvnVv2G','DcHHDxq','y29SB3i','Ce5rCee','AwDUlxm','lcbZDgu','CMfUz2u','yxmGzMK','z2zQz28','zNGIihq','zxjHia','ztTZDhi','iey3ica','ifnRAwW','yxjUu2i','AMTcyvC','rxfftLm','Aw4TD2K','zuvSzw0','AMfKC0K','EdSIpNy','s3nJCKW','CKTrzeS','Bg93oMe','C3aTy3y','oYi+ltW','yxjTAw4','zt0Iy28','rJyGywW','m3WYFde','C2v0ica','txrqtwy','y2H5ufy','Dgfrs1y','oJOTD2u','ExbLpsi','A3vYyv0','C3vI','yM1jtMC','ksbZyxq','AxnmB2m','WOJcLmknWO3cJa','BNnWyxi','WOFcICkjWPdcHW','tezVrhe','whHwseW','CgjqvwC','B25VC3a','imk3ihrL','r0vXy1e','BJPJzw4','zw5NDgG','mhGYoca','qNjLywS','DgG6mJK','WO/cImkpWONcIq','DgHLiha','y21K','CgfYyw0','B3qUBw4','iM5VBMu','ihbHC3m','zhjVCc0','wLz4q0i','EfrgyMq','lYbQDw0','zxrOAw4','Agjsv3C','zMLYzsa','D257B3a','s05Vreq','AxnHyMW','oJe3ChG','u2HHCNa','qM94zxm','wgHnDLi','vLLNzxe','lNnRlw4','zsbYzw0','C28GDgG','Dde2','yw5ZzM8','qxLWzM8','CMv6D0K','AhbfDK0','A2vKpsi','sNLKqxq','zvbSDwC','uLH1ru0','ndC7','sNvgt0K','zsGPlMu','DY5vBMK','BI13Awq','DgvK','DKjOqNi','oY13zwi','WPtcImkkWPtcKG','Aw9lBhm','BNrLBNq','Cg9Zqxq','kdeWmhy','tw91C2u','BMq6i2y','BLzPzxC','Bwvhyw0','nNWWFdu','sNvTCca','ChGVms4','zw1Pzxm','A2uTBgK','yxqSCMC','CMfKAxu','DgeTyt0','CKnVBg8','tgvND1e','icaGia','WO7cI8ktWPhcJG','zxnZiey','AgvHza','u2nPDM8','BwvHBG','zgTPDa','D1zqq0i','ztOXmxa','EcaXmNa','zJmY','yxm+','ndGZnJq','oc00lJu','rJKU','nNb4o2G','WO7cLCkvWOZcJa','yMfYzsa','C3zNE3C','igfUzca','WOVcHSkuWPtcKq','DYbNBg8','icaYlIa','s05qtg4','WPtcKmkuWOZcLa','zwDPC3q','ihn0yxK','zcb0Agu','Ag90ig4','yNL0zu8','B2XSzxi','yw1LlGO','iJ5ZywS','mJrWEa','yMT5CfC','BMfZvwq','zMfPBgu','zw4Gyw4','BgLKihi','BNrPBwu','igDHBwu','y2fUDMe','Bu9hwxa','ohb4ksK','WPlcJmkjWORcKW','B2SGEwu','svrjr2y','nYWUmZu','zhrOoJu','qNvPBgq','WPtcKSkgWPlcKG','z3HiqMC','ihDOAwW','tMnYueC','DY4Guhi','ndC0odm','Dhbnz0q','DfHwshG','AwzYyw0','yNvMzMu','ugHVDg8','lGOk','CNnVCJO','igj1Dca','EfDMAvG','DgLHBh0','AxrOie0','qLbTvLm','A2L0lwe','yNL0zuW','lxDYyxa','zwfJAge','ihbHz2u','AKzKwuG','BhP6twy','txvwt1q','DJiTy3m','Agf2zsa','ihbHC3q','lxrYywm','zgf0zsG','t0vhBxu','WPxcJ8kgWOJcKq','rMDJvva','pJWVzgK','vKfm','zwqGlsa','wvnMqwu','C3vYDMu','z2v0vwK','lwrPCMu','yxjPys0','BJPJB2W','ic40nxm','DdmY','y3nZvgu','CMqTAgu','yxmGAwq','rgXMsgu','lKHfqva','CMfTzs4','nsWXmdC','Bez1BMm','C3rYAw4','igzYyw0','ihzPzxC','o2jVEc0','B25NpG','WOBcJ8kvWPlcKG','nJu0nduWzxHVAvf0','z2H0oJy','zwqGlYa','DgHPBMC','EvDbrg4','y2PkyLe','C1HnCMG','u2vSzwm','oJK5oxa','BNrPyxq','uxL0r2u','zwqU','B2f0CYa','x2DHBwu','DgHLigW','Bw4TDge','C3bSyxK','B3nWywm','AKfOAwu','C3mGmhG','vgHfq2K','CMrLCI0','r1Psuxu','CMv0','rLvZsxa','C3bLzwq','WONcJSkgWPxcJa','CgfUpG','A0zmBLK','C2XPy2u','CdOXmha','rw5HyMW','DNrYEKS','zwf0zva','sNzSrfC','C3bHy2u','q3jbBvi','ifnxlva','r3vQDue','idaGmxa','ihvWk2q','o21HEc0','z2v0q2W','CMf3','tgLTyu8','zciGC3q','Dcb3yxm','yxjLBNq','ig1HBMe','WORcJmkvWPpcJq','BwuGlsa','AgvHCei','mYWXnZC','Cvz1wfa','Dg87Fq','C3LUy3m','EwvZ','B2yGCMe','zwqGysa','mhHKma','ys1ZDW','DcbKyxq','uMfKyxi','otbWEdS','s1vsqs0','CNj7y28','yw1PBhK','EcbYz2i','yxjKE2i','igP1Bxa','y29WAwu','y3zvrNC','Ewf3','BMvS','yMfJA2q','Bw4TDgK','mhG5oa','ihvW','DNPOy0G','Ag90','B2XLig4','EY13zwi','twXOugK','Ec1ZAge','r1vfu1m','DgfU','zdTYAwC','mcbMAwu','WPpcHSkhWOZcIG','yvjSr2q','oIiIo3a','yxGTD2K','t3nHuLa','AgfIBgu','CvHPs0q','Dg57ywW','lde0mYW','WOZcHSkvWPhcIG','C2STBwq','Dg9Nz2W','DMjWugy','CKr1t2y','WOBcHSkmWPtcIW','iMvZCci','zevTDhy','Cg9ZDe0','zxHeD0e','EhbMtge','B0reu2i','Aw5KzxG','BezMuu8','ysGYntu','BhK6Aw4','wvPfwMi','WPpcI8kuWPtcLa','B24+','ywDHAw4','DgvYiJ4','ntuSlJi','BMC6nha','zM8Qksa','zLrkAxm','C2rmD0C','uwjmqvy','ugnyBxK','psjZDZi','mhW1Fdi','ig9Mihy','mNb4idC','t0XSuNq','C0rUu2W','B2jMrG','ieaG','mJeSmti','WOVcLCkkWOZcHG','o2n1CNm','ktTIB3G','Dw5KoNq','qNfYv1C','oInMn2u','u2nYzwu','t3jhsMK','rhLAuMy','WOBcJ8kvWOBcHW','EMLRwM4','tezLvMy','DcbPzd0','v0r5wwy','s1jPt0S','CuLRBvO','yM90q28','zMvLDa','uunLwuS','zxHPC3q','y3vkCwi','zMLLza','o2zVBNq','lwjVDhq','s3LWDeS','qwjxu2S','uNHvy0y','ExrLCW','veLwrq','y3H6zfu','BwuUCMu','AgLZiha','B3i6i2y','yMLUzgK','ihn0EwW','phnTywW','igvUzca','wKnoBwm','B3DUkq','CMnLoIa','B2TWq3m','sgjrqxy','idGWChG','oJHWEdS','zsb3ywW','oJyYDMG','yxLNz0S','oYi+','CgvKigi','kdi1nsW','uwPhwKS','D3vhBMG','Bg9dAge','sfveigq','ignOzwm','zsbZDhi','yw55ihC','iJiIihm','BgLKzxi','BwuGAw4','sw5Zzxi','zxrZigm','CMvUDdS','ksWGC28','zw1PCM8','Dc5KBgW','Fdf8mhW','BxbSyxq','DdOG','DerHDge','B1ziCKu','quLyAfq','lNnRlwW','pt09u0e','EdTHy2m','WO7cLmktWPpcJq','C2vYlxm','y1LID3C','BwvUDc0','DenVBg8','iZDLzta','l2nHBNy','C3nPBMC','AfPyywe','r3frALy','BI5FCNu','DZiTyM8','zMzZzxq','sgvVyNq','mda7y28','iIbZDhi','E2zSzxG','EMT6C2S','ocWYndi','BwvTB3i','igzVCIa','Dgv4Dem','B3nLCY4','mNm7Cg8','iNDPzhq','mJq2ldi','CMvMAxG','FdeYFdC','zEkaPJWVCW','Bw91C2u','ysGYndy','CMfUzg8','yuD1C1O','WOBcICkgWOVcIW','sgvHBhq','DgfNtwe','y3vPuLy','4OcuigzYyq','ELLkB2W','CJPWB2K','z3jHyMi','z2fTzsa','yMvNAw4','ChG7Cge','igLZig4','Be1Mrhe','ywSTD28','yxjLig4','WOVcLmkiWPdcIa','DhLxzwi','Axr5oJe','vwDSz1m','qNvpr20','igDSB2i','tvvQzfK','rvLxyMK','Dxr0B24','zYbPBNq','q2XPCgi','Bgu9iMm','B25Nig8','D2zfBvG','ohb4o2G','DxH5uha','tunAr1i','CI10Ahu','rwnpD0y','mhb4ic0','mtrWEdS','ltiUns0','y29WEq','u2vXC2e','CenVBNq','Bxnowha','CMqTDgK','yMPYt28','DgXIEKm','psjTBI0','lM1UlwW','BLr5Cgu','iIbMAwW','DgG6BwK','ywnPDhK','WO7cJSkuWO/cLq','AgjIAuC','rvzIuem','nxW2Fdi','zgvlD3u','CM9VDa','WOZcICklWPlcKW','BNrLCI0','WOFcJ8knWOVcKG','C2fUCY0','uuHfrhC','z2v0rwW','D2HPDgu','BMfSrNu','EdTOzwK','u3bLzwq','t3vhC1m','CMvNAxm','uMvMDxm','m3WWFdC','WO7cI8koWPhcJa','BNqTD2u','z2XVyMe','EgjQuxu','zM9Sza','lxrVz2C','zvDhDxu','AxvZoJu','CM9SBgi','B1bdv2K','lc40ktS','BwLUkdu','qxrgAxi','ndzWEdS','DhjPyNu','m3WXFda','mJKWChG','B2r1Bgu','vMfSDwu','BeTYs3q','teXtrNG','o2zSzxG','sw5nyuy','DxjHx3m','vvrnzfu','oMf1Dg8','lwfSAwC','B3vWig8','B2f0mZi','nsWUmdu','BNmU','AxmGBwK','DcbPBMO','BwLLCYa','CIb5B3u','rwL0Agu','WOJcKmkvWO7cLa','C0PTAxa','DMfS','o21PBI0','qNDxr0W','yuDkv2m','mtf8ma','q0DxwKO','ywjLBhS','icbVzMy','ihjLywm','sNncv2e','y2TgBNK','iI8+pc8','y0DfAxq','D0fIyNC','zhrOoJi','yxr1CMu','AxmGyNu','C2vYDcK','mcbYz2i','qMv4whi','WPxcKSkiWOFcKG','phbHDgG','s29irxK','nhWY','lZ48l3m','zK5OzNu','ywLfrMS','DxjJzq','ihnVigu','igj5igu','CMvWBge','rhfutxO','D2L0y2G','EdTHBgK','BgrPBMC','mtb8mtu','tMX4CNK','Bw9YEvq','zvDyD0m','igHVB2S','mtbWEdS','mtu3lc4','ywqGzNi','Fde0Fdu','B25ZB2W','ihzPysa','B24Gzge','lJCYktS','z2H0oJC','sgjSDhm','BM9UztS','Aw5Uzxi','A01SzwK','yM1TC0C','WO7cKCksWOFcIq','C2LUz2W','BhKUieG','ntTWB2K','y2HLy2S','BMq6Dhi','BMuUifq','C3CYlwy','u3rYAw4','icdcTYaG','C2vSzwe','B2fYza','Bd0Ii2y','CM9Rzs0','CI5KBgW','zxjZ','C3rYB24','yNv0Dg8','vwLeAfq','yurjueO','A2v5','ig9Mia','DuTjy0u','ywiUywm','ELPpBu0','WOZcH8kgWOZcKG','CM9Wlwy','AxjLzc4','qxn4DNK','ksbVCIa','B3v0idK','yvvvCfi','ztOXms4','vw5PDhK','Dw5PDhK','Bgv4oJe','yxjT','vKn4y2e','EhbVCNq','B21Tyw4','AxzLo3C','WPdcI8knWO3cKW','rxLL','yxv0BW','Awr0Aa','B2TLoMm','BgXLzca','BgfZDem','C3bHBG','EgPqsxu','CMvHzhm','yvjfyuO','u1fdteG','rhP6EvK','Eg5TB2u','Ds1YB28','CNmGyxi','Bcb1Cgq','ywrPDxm','zMfRzq','zNnSB2W','zxHoB2S','t2v0Dgy','DgGGB3i','vND5wxi','zMLSBfm','Dg9Y','B0n4Dwe','ldeWnYW','ys1ZA2K','Bxm6y2u','BYbHihq','D25RDLy','tMrwAwy','WORcISklWO/cKG','AgL0zs0','Awq9iNm','DM9Pza','z2fWoJe','iNnUyxa','r2PYExa','u3bYAw4','Eu9TuNK','B3rLE2y','BKfJy1C','Cgv0ywW','BI5OB28','Bgv4lxC','CgXPzxi','mxWYFdm','Ad0ImIi','ywnRihq','v1bKv0u','Cc1SzW','z2vYlIa','BhvNAw4','pc9ZDhi','BcbHz2e','WPpcH8kpWO/cKW','oMjYAwC','uMvZzxq','ltqTnY4','ie9IC2m','DcbUBYa','yMvS','zgLMzG','DgXL','B250zw4','rg9gvLe','iNjVDw4','DxbKyxq','C2STC2W','C0PNqxa','DfrqsMG','EMu6mte','vgHLigG','AwvK','WPpcI8kmWPtcLq','B2jQzwm','q29WEsa','y2S7zM8','ChGPo20','Dgv4Dee','vMftquq','ChGGmdS','FdL8nxW','uMPMt1e','WO7cLmklWPdcJG','DMfTDwe','DcbTyxq','WOBcKSksWORcJG','vejlwge','y29Kyu8','BhqGC2K','suDhr0e','zhrOoJG','tgTHDwm','BIb0Agu','AxmGD2G','BujqC2e','sMnICg0','vvr1qLi','C2vUDca','WOJcJmkhWO7cHW','ifnxlvC','q1DQyMe','ztPUB24','lNnRlw0','rvnqoIa','shj6A0S','Ag92zxi','E29Wywm','WPlcKCkiWOZcKa','BM5VDca','yxjTzwq','lM1Ulxm','WOBcK8kuWOVcKG','zM9UDdO','zNjVDw4','u25HChm','ihbHBMu','ChqRmhG','Dxm6nta','BIbuyw0','mtaSmte','shnLD1O','lwfWCgu','vtGGAxm','uMvHC28','Aw5PDgu','mZT9','igXPA2u','zxG6BM8','BfDHCNO','CNqP','ChG7B3a','AxHLzdS','CMv0Dxi','DhKGAw4','ig9Yihq','BxmGD2K','vuXsA0O','sKrKy2G','igzPzwW','CgfYzw4','Dhj1zsi','EuvJy2e','D29Yzc0','BwfUEq','l3nWyw4','CuXIrvi','qwrbs1m','BNzLCMK','DhLSzq','zxi7iJ4','y2X1C3q','r0DFr2e','yxrPB24','wwPWv0S','BgX3yxi','C29SAwq','zuf0rMK','wgPQwvi','zxLL','CMXHyMu','s3fmAKC','zwfYAvm','yLzltwi','ign1yMK','DxDJyvm','u1fwu0W','lwvZCc0','BNnPC3q','Aw5Ly2e','mJzWEdS','s2PcyLm','CgfJzsW','uuLfzeW','ywrZEhy','BNq6Aw4','BNq7y28','WO7cI8kvWPlcJG','CNqGEwu','vgz0r0S','v2LmswO','BI1PDgu','D2LKDgG','sKnVzeq','DcaWida','zxrsAwC','mNb4o2G','C3rHDhu','w2fYAwe','lxGIihm','D3jHCdO','zsbNyw0','BMDtsKO','m3b4o2y','mNb4idG','sKD4vuu','WPdcKCkrWOBcIW','CgvYBw8','uK1vwNq','zMLSBfq','u2PSuvK','psjJB2W','khmPigq','s056EvG','BMu7Cg8','zNjVBsa','tefzrvi','CgDhtxe','oJa7zgK','WO7cLCkoWOFcHG','y2f0','zM9YBq','vxbKyxq','WO3cJmkgWPtcJq','BMfTzq','EevxDxG','WORcK8kqWOBcJa','AwWYq3a','zgXpt0G','WOZcKmkjWOBcKG','zY4G','nsK7','q3vHtg0','B1fwAxi','zxi7zM8','zsbWCMu','CKnVBNq','C3fYDa','nNb4o3C','WO/cI8koWO3cJW','qvrgz3q','B3b7zgK','z1HJs1y','rwPgr20','AgvPz2G','ig9MzG','DMvYzMW','zxjLzca','lMrSBa','uunptvy','C28GAxq','B25Lige','sMrmyvC','Aw50zxi','z2jHkdi','Bgu9iM0','z3TMB24','q0HQvMu','zxG7z2e','oM9Wywm','pc9WCMu','ALfQCKe','mJGPo30','WOJcICkpWPhcLa','CZ0NC2S','zwLNAhq','D2LUzg8','reLnBwW','mhG1oa','ihbHDgm','BMfNzxi','ihDHCYa','yxrnCW','WO3cLCkhWPpcKG','CZPZDge','DxjHDgu','B3fvywi','lJuIihy','rgLHz24','WORcJmksWPlcLa','t05UqxO','CMfTzsa','zw50igK','Dxm6mti','ihrOAxm','AeruAge','Bgu9iMi','BhvLpsi','BLj1BNq','Aw9UoMy','DMD7D2K','WPhcLCkiWO/cIa','zxDNq1q','rvPJzNm','yw1Ligy','DhrLCG','sw95Aue','AwnXsfC','DYW2mJa','BM9ZCge','zhPrwLa','r3zir0S','igfWCgW','mIaXmK0','v21xq3a','wejHzK8','y0DbsM4','WONcJSkvWPxcHW','WO7cKSkqWOJcKq','mcaXChG','zw5K','Dc1ZAxO','svvADeK','AfjZugi','WOZcICkoWOBcHG','iIbZDhK','Aw5WDxq','vvjbx1m','WPdcKCkvWOZcJG','BcbKAxm','yKHpqNG','CMvIDwK','v3zcvNy','zxqSig8','q291BNq','AwfSwKO','CJTNyxa','lwHPzgq','vMDgre4','Axnfz2q','lxDLyMS','yYGXmda','Axr5','t3j2tu0','BIbtruu','yxr0zw0','BgvY','WPpcHSkiWO7cKa','v2PzthC','shLAAvG','su56z1a','vKX0y1m','s1PmzNe','s3vysKe','EdTNyxa','B3C6Aw4','yNL0zxm','osWGDhu','WPxcISksWPhcIW','zwXMoMy','FdL8oa','CNq7ywW','Bw92zq','A1n5BMm','ufj6Ag8','nJaIigG','owq7y28','lNnRlxm','ntuSlJa','Esb0Exa','B24GDgG','Aur2v1y','WO7cK8kpWO3cIa','icaGica','ihbYB3y','BNuTCM8','CZOXmha','EvL5sfm','zunOAwW','ENbJz1C','sxDpvg8','tgf2txu','DNnZCei','AcbMAwu','r3Hlt3e','o2DHCdO','DcbYzxa','WORcImkhWPdcJW','zxi6mdS','igfYztO','BwuGBM8','ihnRAwW','CYb3zxi','EdTVDMu','zgvYoJe','igLKpsi','sND2tuK','vvLuChO','DgG6mZq','vxnTt2G','oIjjBNq','vMXSufa','nwT2sKHvtG','tK56s0O','ie9o','wwzLuei','ufPPwM8','thrcswu','u29hsLC','igq9iK0','msiGDMe','EIdIGjqG','ig9U','B25Tzxm','AhD1rLe','ihnPBMm','o2jVCMq','BMCGB24','WPtcJCkhWOFcIG','q29UC28','uvjKuKS','WOJcKCkvWORcHW','q01c','nZq4mZa','i2zMnMu','EuznsgC','tKf2zw0','C2v0tge','lxDPzhq','EhrVCg0','DvrnyLK','EtPUB24','s2Ljt0C','nZu7Bwe','qwzqCxu','EcbZB2W','y2XLyxi','pc9ZCge','y1fVv2y','DxqGEw8','DcbIzwu','x19hzw4','oJaGmta','B25NE2m','kdiXlde','z01zugm','yMvSB3C','q0TryuO','BwuGD2u','v0HxAMe','ldi0mIW','zsDZig8','WO7cJCkjWOVcKW','vw9vwMq','y2vKigi','yNvPBhq','DgvHBq','pgrPDIa','iJ5VCgu','nZCSlJq','EdT9','yMvmu08','zYbZDxm','ChG7iJ4','CMDIysG','mJu1lde','kgD1zxm','DeHXyLi','CJOXChG','Au91tMq','DdO3mda','B3a6mti','AwrLBNq','ywn0','yxjKlxq','WOFcJCkkWORcIq','y2vUDgu','o3bHzgq','i2jKytK','WPxcH8kjWOZcJG','DwvxCMe','De9AtNa','AenPCgi','wNfmDLG','CgrHDgu','BgLNBJO','BIbPzNi','CKXPC3q','Bg9YoNi','CMTmrNC','Cg9Z','tw9KA2K','ig1VDMu','DhrxtxK','ndmSmtC','rhzvyMW','WOBcJmkkWOVcHG','DgGY','BIaUC2S','CMuG','tg9VAW','WPtcKmkjWOZcJG','yxG9iJu','Ehr4q04','C3zNpG','t1veCeW','yM5qqMy','u0ntswW','WONcKCkgWPpcJW','igfYBwu','B25TB3u','yxbP','qwn0Aw8','CcbHBMq','yMTPDc0','Ewf3t2y','B2fKzwq','ysbtA2K','AfDwqM0','mtjWEc8','zw1LBNq','DdPUB24','BwvTyMu','zfLewg4','WPxcImkiWONcLa','t25bCha','u3P5BKC','o2nVBg8','zsGP','ruPMB2y','lJq1ktS','AwzHB1G','zMfpqxm','Aw5ZDge','CgLUzYa','WOVcJ8kjWPpcLa','BM90igy','BM8GBgK','yhbSyxK','CYbVCNa','pgnHBNy','tKHdsfq','qu5eihq','Dw1WAw4','BwfW','ywnLo3C','C2Ltwum','EwXLpsi','oJeGmsa','zxHLy0m','r05uCNC','v3jHCha','BvvSvee','vKuGDG','ugXHEwu','D2rkqKq','BM8Gtw8','Aw9UoMW','CMvTB3y','Fdn8mhW','EMjgBe4','D2fSA2K','Bg9YoIm','ihDOAwm','B1veqNy','sezcr1O','t0jKwgG','wK5TtMW','ytK5o20','B3j5','Aw50','BMTLEsa','oJe7Dhi','DgfYz2u','C2TPBMC','AwnOlJW','Dte2','ihDYAxq','quvRyu4','ywDLigG','ihvUyxy','rgDlAu0','zvjLy3q','sKreDu0','ihnRAxa','z2H0oJe','iIbZDgu','B25LoW','rvHHzgW','ndySmJm','lM1UlwG','WPdcH8kgWOJcJG','zxDKq3G','sgvHCca','nZH2AdS','DMLLDYa','vgHLigy','ktTJB2W','EhL6','DgvYzwq','mNb4icm','CML0Dgu','Ahr4seK','BuvyA24','ms41ihu','nhb4idK','B25PBNa','C2nYAxa','AwXLzcW','Cuv0ww8','lIbeAxm','WPxcISkmWO/cLa','C2fcwwS','zM9UDa','icSG','ncK7yM8','CYbLBMu','v3HUAei','BgvMDa','Dg9W','rMLmuLC','B3fqrgS','EhjTrvu','ChG7CMK','Esbku08','tLvrExu','zgvIDwC','ms4WEdW','sw5ZDge','zMfJDg8','owm5o20','AxrSzsa','Bwf4psi','BgfZlg0','qKvhsu4','lNnRlwi','BKvpqu0','rvDqvKi','y29UDgu','WOVcKCksWO7cHW','zwXVywq','cKLUC2u','v3rXBgK','WPdcKCkoWO/cIq','s3zvuLm','WOZcKmkhWOZcHG','wu9Rq2O','vvDnsY4','DMvKpq','igjVDhm','yM11C3u','ANHStuK','B3i6','WOJcKmkvWONcJq','BgXxyxi','tg9Hzgu','ktTIB3i','C2L6zq','C2LU','ug5sBKG','u0j5BKK','D1HxrLm','nsK7Dhi','nIaXoci','DxjJztO','WO3cLCktWPtcIW','DgHLigm','uKvLwhK','mxb4idy','C2vSzIa','t2HOEgC','m3b4o3C','CNr5vNC','l2j1Dhq','DxjHlwu','CMvWB3i','qxnZzw0','BNrYB2W','zNjTDei','zgvMAw4','nhWZFdy','DYbLEha','WO3cKCksWPpcIa','BwXKquS','CMnPywW','CePgD1y','BNqTzMe','zxjYB3i','C3rHBMm','Ag9VAW','B3rO','yvHst2i','zxaGDgG','zxH0lwe','B2jMsq','EdTMBgu','ywnRz3i','DMfSDwu','yxjLige','rNvewxa','WPlcLCkqWONcIa','r2fTzsG','oNjNyMe','Bwj7lxC','v2vHCg8','CLD0DKS','o29Wywm','BgW6Aw4','q2LRq3q','WORcJmkgWPxcHW','EfH5sLC','yxiTz3i','otLWEdS','uwTYrxy','mNb4o3O','BNTIywm','BgHAvfm','zYb3Agu','zw5Jzsa','mtC3lc4','q2XJCgG','zw50zxi','Awr0AcK','yY1IzxO','AhfAuhi','pc9IpG','igjSB2m','thrguuu','BgvJDdO','zNbZ','B3bHy2K','DfvXCKe','BMnLC1i','suLpvNm','n3b4o3a','lwzPCNm','A2LUza','WPpcLmkhWOVcHG','ohW3Fdi','mduPo30','lwLUzgu','zwvKzwq','i2y3zwu','zwfKE2q','zw1VCNK','B3CU','vLH1tMS','zuXMsuC','Cg9PBNq','y2GGDgG','mhG1yW','oMnVBhu','D1H0vhO','D28GzMW','AwDPBMe','rhjgwgq','B3j0lGO','idaGmca','AY13B3i','mtz8mxW','BM90ig0','ChbLCIa','ntuSmtq','pc9KAxy','ywjSzwq','y3Ddz2y','yxK6zMW','y29TyMe','sNDyuwe','B2jM','wuriAfy','oMzSzxG','ihnVBgK','lc4WmJu','mhHKna','ChbTuMC','mdT9','CMf3ugK','CfrvC3i','BNrZoM4','igjVDgG','Fdb8nxW','quXMCfa','WPpcLCkvWPpcIG','CMHpsxu','CMfUihK','D3feDhi','y1jWqwu','lwnVChK','DgHLigC','C2L4tw0','vhDwqvG','BMv2zxi','ihLLDca','BNrLEhq','zciVpG','WONcJmkvWOJcIG','CvPiBvq','x3j1BNq','idaGmJq','B3jYzwm','zM9UDc0','x19ZywS','txvSDgK','yM9Yzgu','oJeYChG','A013Age','DMvhyw0','sMLKuK0','r2fTvLa','Bef4Cgm','wwjPz0G','yxbWBhK','z25HDhu','ic8G','DwKTBw8','D2fZBva','DxnLtg8','DgvZDa','wfLqweW','C2STy2e','yxbWzw4','s3LVBgy','Awv3','psiXlJi','CML0o28','zYdcTYa','B3bLCNq','ztTTyxi','i2zMzdq','CNjVCG','BgvYkZa','zNPov2G','zMLSDgu','BMqU','u1bXEfK','yw5ZAxq','nNWXm3W','nduPo2i','WPtcKmkvWPlcJG','qNjHy2S','yxjKlM8','ywzWAwi','zsbNzxq','yuXnCKK','Cevcz24','t0HlCgi','DJiTDge','CdO4ChG','z3jqA1K','vKjqBuq','sgvPz2G','nZCSlJu','B2D6qxG','q0LICNm','igvHC2u','psjWywq','weHlu0y','CMq7zM8','BuLWDxG','sgHNBxG','Aw50BYa','Axy+','r0LMrLO','txjrvgK','Cg9ZAxq','DwDAugO','Cc1JDG','Ahq6nZa','zMfSC2u','ihrOzsa','BLrLEfe','WPdcLCknWPdcIa','C2XPzgu','vvPdt2W','u2fRDxi','lc40nsK','EdTMB24','ywqGzMe','w2rHDge','BdPPBMK','vgvUwMC','Dg9WoI0','iMrPC3a','kdaSmcW','DLDUs1u','rviGD2K','C2STBwi','EePwuxe','DxjHtwu','ywrKrxy','zxj7y28','yxjJ','Du1XyuC','ChGGC28','zw5HyMW','tM5uEMK','B3jRu3K','xxTIywm','DgL0Bgu','DdOXmxa','sNjYEuq','tfvptLO','CMvKia','rw5LBxK','mJu1ldi','Bg9ZztO','WONcJCkkWORcKa','BNq4','s1P6zfO','C2v0uhi','B2r5','Ec13Awq','Cvzqz0K','WOVcKCknWOBcKW','v19F','BNnLDca','jwnBC2e','Ewv0lG','AxrJAa','zdPYz2i','Aw50E2q','WOZcH8kvWPpcIW','zcbYz2i','Dg9YicS','s1Dyvwy','WPpcJ8kvWOFcJG','AgXWD2O','C3rLCa','WO/cLCkjWO7cIW','lNnRlwm','igLZihi','r05KBMK','yxjHBxm','ldi1nsW','zhmGWRCG','B246ywi','yxiTDgG','ign5psi','zNvUy3q','BMDL','EevTEg4','yNzmrui','CMvMzxi','zwy1o2i','t3riquK','D3j6t0y','o21HCMC','mmkWlcbW','DgfSBgK','lJGYktS','nJiWChG','AgXZBwS','DdPTAw4','z2v0Dgu','wgzusuC','tKLqA2m','nYK7y3u','WPpcICkqWOZcJa','AfnJCMK','AgfKB3C','Aw5Qzwm','ywX1zt0','BM8Gz3i','we9NuuC','lxjHzgK','igrPzca','A2D4qKO','DhLSzt0','CMvMCW','CdPYB3u','oJiXndC','CgfUzwW','BMC6mca','uKfqueu','ltiUnsa','ig9Uy2u','CMfWoYi','Dxm6oha','B2zMC2u','DhLWzq','yxv0BZS','BhrLCJO','C2nHBge','DgLUzYa','ztSTD2u','qMDiuvu','B2SGzMK','AxmGBM8','oMnLBNq','4Psa4Psaia','ihjLy28','yxvSDa','WOJcKCkvWPlcKG','C21uExa','y29UDhi','tuSGq08','CMeTC3C','yZKIpNC','vLngt3y','D2fZBvi','Cgu9iNi','WONcH8kpWPlcLq','t2LQtMi','EM95wNq','pgiGC3q','mIWYosW','uvfbChy','Bw4TC2K','y2Pxz2S','mhb4oYi','B2zMihq','AufXuLu','WOZcJSkvWOJcJG','vNvoq2m','B2jIEsa','wMnJyu4','lJKPo2i','D2H5','lNnRlxi','BujWr0C','CZOYChG','y3rZimk3','kduWmha','BM8Gzw4','WOJcLmkuWO7cJG','zcb3yxm','qM90Aca','D29OC2K','nYWUnsK','DhD1u0q','yMX5lMK','s1PKv2G','C3rLBMu','z2fTzvm','uunuBu0','ntbWEcW','iZe1mgm','DMvYE2m','WPtcKmkjWO/cIq','mhGXyYa','BxDzrNC','ztTWywq','AgLKzgu','ExDTtwO','Dc13zwK','y2fTzxi','CgXPzxm','oNbYzs0','CxvrsgW','qxbWBgK','yw5NBgu','AgLSza','t25UrKK','yZfKo2m','ChGGmZa','BfDAvve','zxnW','B3vUzci','yMfUzc4','nxb4o2G','zMzMoW','zxG7zMW','CM9Tihm','rhHQvum','C2L6ztO','yM90CW','zYaVigO','Bg93oMG','WPdcH8kjWOJcJG','DxnPyMW','z2LMEq','tNLtt2u','zxDoC1q','zwP5ChG','yNv0ig4','AvHTyLy','C2STC3C','CMf3wwe','i3n3mI0','zenOAwW','ifrOzsa','A2v5qxq','nMi5zcW','tuTiBgu','zw1ZoMm','ihn0CM8','Fdr8mhW','D29YBgq','WORcKSksWORcKW','zgf0yxm','WPhcI8kjWPtcKG','AwX0zxi','zYbxzwi','DxzHtwe','DYaTidq','Dw5UAw4','lt4GDM8','DZiTB3u','igL0ihm','nYWUnYK','ywWGB24','C3qGysa','odbWEdS','DeHLywW','DMLLD0i','zsbTAw4','zw50o2i','zJzIowq','tLbdx0m','yMrHowm','ztT0B3a','ys9vv00','BwuOkq','Bw4TCge','AwqGCMC','WPtcH8klWO3cIq','z2fWoJG','qu1xtK4','mhGXna','Aw50iIa','BMrVDY4','nhWXFda','mNb4o2i','yxa9iNi','A3zAuhe','WORcImksWPxcLa','zM92','C3HxwLm','rMX6t3a','D0vVAwm','ug9ABg4','tKfRD2q','BwvZC2e','mJiSmsW','Cd0Imc4','lwzHBwK','sxnYAxG','CI1Yywq','qxDHA2u','BuT0D1y','WOZcHSkpWPhcJW','t2zM','zgvZy3S','vwjZBgW','zwrYA3a','yxbWBgK','yMfJA2C','vKLt','Du1nrui','Bw4TC3u','iZHKn2e','zKLytgm','DKXyuKW','nduPoW','ChG7Fq','qwvUyvu','u0XUtgu','CMDPBI0','v2fSAYa','tfrVq00','thrvB0i','Cwfqwvq','u21gAvi','yxDpAhC','C29SDMu','sKn0EMi','AtmY','igrHDge','EujTuvO','nsK7yM8','t2netxK','D2fYBMK','shbpzwK','uvjOvNe','svDxvMC','WOJcH8ktWOZcLa','B1fvExe','DxzHEu0','phn2zYa','sfrnta','vgfTCgu','qu5pveG','q2HPBgq','yw1L','qM1Jvwu','C3LUyW','rxHgy1q','WPxcKSkjWPlcHW','q1PhrLu','C2fUzq','if0GywW','WORcKSklWO3cKq','zuztuKK','txjeCMO','WOBcH8ktWOJcJW','msiGC3q','EtPIBg8','A2vKihu','BLzsq2O','AgfZtw8','ifvjiIW','DerQBva','ufHUDeW','WOBcKmkgWPhcIG','BKT3vgu','ucbVBJW','BJOG','oxWXn3W','BMPcD0m','AhvKlwm','ywDLCG','AgXgu1G','vNjvsg8','r2D2C3O','zdTWBge','WO7cK8ktWOVcIG','FdH8mhW','veLAr0S','mZGSmJq','DxrVo3O','BM90ihi','z24TAxq','mtTJB2W','DMvYEsa','qxrzBw4','mhb4idu','mJbWEcK','tg9VAYS','sLnpBgC','zvfcD2W','DtmY','Awjnt0y','nsWUmdi','BIbZB20','y3jLyxq','igvUDhi','s3DYuKi','s2rtCLK','rhffyKe','qNLjza','nJq3o2q','z3n5tKy','zhPMuKq','y3rkwwS','CLLLsge','lwTD','icbTzw0','D0XXDKy','y29Z','otK7y3u','zw50lwm','yw5Jzsa','yM9KEq','C3rVCfa','z2LUlwW','vgHLiha','nhWXFdC','BMu7Fq','kdi0lde','DNfMAwW','BgvUz3q','EunbCgm','ChG7Agu','wwfOzeq','yKzpDfO','ywz0zxi','WONcLCksWPdcHG','zgf0zsa','BgLUzvq','rvnqig8','vLL5vhm','u05XB24','y2SIpJW','WPxcJmkhWOBcHW','ueTgCw8','WO/cJmkgWPhcIq','nYWYmsW','igLUC3q','sevbufu','sxPruvq','y2uTAxq','WPtcHSkkWO/cJG','z21Lruq','DIiGC3q','DxDSD2C','WPtcH8kmWPhcIG','C3r5Bgu','zwqGEwu','C2v0sw4','ys1Tzw4','zxzLBNq','B2vTuwG','uwXss1m','yZK7BwK','zgfY','zYbIBgK','zMXLEc0','q29WAwu','B3vYy2u','oImYyta','s3n6u0q','u2vLBK0','AwvSzca','y2XPCgi','Aw1Lr2e','CMuGy2W','Bg9Zzsa','kde1mcu','uuLIBgK','rMLLBgq','y2XVC2u','EtPMBgu','Bhn2zuS','uMvZB2W','CgfKrw4','DuTIwLO','BMDZ','igLUlwy','B29Rzwq','yxjKlwG','oIm4zdC','AwqTDgu','WPdcJmkkWORcKa','zNKTy28','y29TBwu','v1LyreW','AhrUzxm','v1bADw4','CMeTCgu','igvHy2G','ihjNyMe','BhvLica','CgfJAxq','CM06BM8','yMz4BLu','DgnfwuC','zwqGBM8','DfDoA1O','C3bSAxq','zevWz3e','EsbMywK','AdOWo30','DhjVA2u','CY5Tzw0','zg1SzNa','Dg9tDhi','qxvruxi','q3j2C2S','ChGGlte','nsWYntu','yuzYB20','Bwf4','ys1LC3a','zMr4quK','mNW0Fda','Aw1Lsxm','rJKGihm','oJrWEdS','z2fTzq','WO3cJ8kgWPlcJa','AxrPB24','BMqIihm','icHZB3u','D2HVBgu','BMq6CMC','DgPuuwe','B3jPz2K','zefTELu','oMzPEgu','y3qOCYK','WO3cICkqWPpcIG','Aw5Lza','rNzpzeW','thzsrKu','tLLLDMq','lsbvBMK','WPxcJSkvWOFcHG','DfPcEw4','CMvZB2W','psjZywS','quDsBwK','ihnPz24','nNWXFdu','mdaWo3u','shHpDuy','DuPnz0O','WO/cKCksWPtcIG','WPpcKCkjWOJcJq','y2uSq28','AxrLBxm','mtbcr3zqDMK','ywXPz24','ig90Agu','kZb4','AgvSBg8','WO7cK8kvWO3cJG','Ewv0ic0','y2fWDhu','CM91BMq','CgvZia','BgvKoIa','shzhDNK','rhjVwM0','Dg91y2G','mNb4o3a','WOZcI8kmWOBcJW','ywLUE2y','v2LKDgG','zw50rwW','C1f5sxK','CM9WywC','uMvJDa','ueXbwuu','vg90ywW','zxiTC2u','EIaOsw4','vgzPwKe','AxrPywW','ywL0Aw4','uMvWB3i','yLL0ze0','iMzVBgq','ys1IB3G','igrVy3u','AgL0CW','yY0XlJu','CIiGDhK','Chr1CMu','q1bVsM4','BvDguM4','q1Lryuy','nZq4mJK','rJKPpc8','zhvSzq','mIiGC3q','kZb4mJK','yMuGCMu','vvjsBLm','AdOZmNa','nhWYFda','B250lxm','Dw1Uo2C','vLzpt2u','CMzSB3C','ohb4ide','zfvODfy','C2vLBNq','Bg9N','lJi1ktS','Fdv8mNW','CYGXlJe','n2e2ntG','CgL0y2G','mxb4o2m','CwTqt2W','vLLWsfC','s0nsvuC','B2TLpsi','DxnLCI0','CMeTzxm','BdPUB24','zgPXyM0','nJq2o3a','z2v0rMW','D3jHCdS','vLnOr2i','rxHWB3i','ktTWB2K','tMPkuM8','DxPxwwq','zKLxvNC','tM90igq','zMXVyxq','BNrPBca','ihrVCc0','ywjSzsa','zcbPCYa','yw9grKK','Bvzqrg8','lJuGms4','DgfN','ig9IAMu','ywLSywi','rvPgt2y','BhzLr2e','DhjHBNm','cNbPDgm','WO7cJ8krWOJcJa','Cxrdyxi','t0SGt1y','B250lxC','CMvWzwe','v0rqwgi','Ag90icG','sgvHCa','B25JBgK','uxrfsLu','q3zAD1a','WOFcKCkrWPdcKq','iIb3Awq','zwvMntS','s2zdzuq','ignVCNi','tfjkuu4','ig1PBJ0','Ec8XlJm','Dw5PDa','WO7cKmkrWPtcJG','s0zIt1i','y2TNCM8','C29SDxq','DgXLCW','yKLwqLK','Cg9YDca','twnnEhC','WPxcJSkmWOZcKG','sg1Yywm','BI1ZCge','WONcKCkgWORcKq','Fdr8nNW','tw9mugq','q0LttMe','WO7cKSkrWOJcKG','yxa8l2i','zgLZCgW','Bw5kCgC','BNnvu2O','zxbSywm','ugPevuC','EvrHCa','oJi1ChG','ugrTBhy','yxjN','t1vfCxq','Dw50','n09dB25HyG','Dgznug4','B29YC2i','otK7Bwe','AxnWBge','v0DurgW','v2D3vgq','yM94zxm','BMvJyxa','icb5yxC','zwPgCvC','Bg9JywW','DMvoq0e','BgXVtvu','mtqZlde','igzSB28','CM93CW','sgvNzxG','C2fRDxi','khmPihq','B3bLBG','A2v5vxm','WOBcJSkhWONcIG','WPpcKSktWPlcIq','Dw5Kzwy','DNLezfC','CKnVDw4','Bvziv2C','Ec8XlJq','DgG9iJe','iefdveK','ywrKAw4','CgniELG','CvHWwgq','nsaWlti','BMnLCW','CgfKzgK','ihvUAxq','mhHLoa','zg93','AwnOigy','BM8TBwu','psiXmIi','B2nyzvy','DhDPy2u','A3jSCfa','lMn0B3i','Dcb0Agu','Dw1UCZO','lxnUyxa','icbJyw0','WO/cHSkqWPtcIq','BxPpvNi','BgLUzwm','AwvKige','ig9Uia','lxyYE2e','z1PoEuS','C3bYAw4','DxDTAW','rhLquee','CMLNAhq','DgnO','B2jMqG','DMvJmG','vg5Ks0S','EeLYtgK','y2fWC3u','WORcHSkkWOVcHG','mcWUntu','yw5JztO','yMeOmJu','zMznrLy','CNvUCYa','WOVcKSkjWPdcJq','WOFcH8kmWOBcHG','WO3cLCkpWONcKq','qM5MELG','idqTnc4','igfJDgK','WOFcH8kjWPlcJq','i3nHA3u','DhrVBtO','EfrICgS','AfD5qwW','vNbSD1i','D3jPDgu','mIWUocK','rLjoz1u','DuziyNG','WPlcI8kmWOJcIq','qwPquhi','jtTIywm','DxDTAYa','zwXLy3q','oJa7EI0','mNm7Fq','EgvKo3q','Bs11AsW','tg9VA0a','sfrfv1a','wenAzK8','y3qGzM8','mda7y3u','WORcISkqWOJcJa','ugzkuvm','vgrWC0K','lxnWywm','BNnPDgK','Dg9ju08','zgL1CZO','AguGC2K','yw5ZCge','ie1ciea','lK1Vzhu','vgHPCYa','BNn0yw4','C09Yqu8','oM5VBMu','zuzVtgy','WOFcKSkiWOJcJa','ntuSmJu','mtj8mNW','D0LNyNO','r2v0Dgu','Ae1Qz0S','z0fJyM0','Aw5ZDgu','z1jewK0','sLnptIa','BK1HBMe','idfWEca','yt0IC3q','B3vUDa','yxj7D2K','BMvQB2K','CMuGAwC','Bgf5oM4','EgDqDLq','Dxm6nNa','icaGy28','DMvYC2K','zJWVyNu','Aw5N','EgXsAwG','igHLEd0','WOJcKCkvWPpcHW','Dej3Cfa','Bw92zvq','tKzSzgu','BNvTyMu','Aw9U','yurnvNC','DdTIB3i','Auvmug0','Aw1WBge','Awq7CgW','werhAue','C2v0sxq','C2vXze8','t1DutMy','zdTTyxi','Dg9gAxG','tw9KDwW','yuvhzNm','t2jVwKu','ywnLlem','uLmG','ohb4o2i','z0revhi','CMvK','mxb4ihi','mIWUnsK','uNvUDgK','s2Xjv3u','idHWEdS','ChG7yM8','DhK6mdS','WPlcKCkuWO3cKW','zxHWB3i','mhG3yW','t0XhB1a','s1LSCMW','CeXls1C','oJm0ChG','EfDntvK','AersueO','mca0ChG','nc00lJu','zgrPBMC','zxiTCMe','pt09','rMruyMi','z2v0sxq','txnoruW','BM9Uzq','BMX3DgO','t2zMC2u','BK5LDhC','nIKSAw4','DhrVBJ4','rMzVENi','CY1VCMK','zxi7D2K','ChrLza','zZO0ChG','z2v0','EhPZr2e','Bwf4lxC','vwPdD3i','BwvHBNm','zvbYB3a','EdTIB3i','BMCUcG','CMvKige','AxvZoJK','Bwvnyw4','o2jHy2S','EdTWywq','WOBcJ8kjWPxcKa','DxjH','ywXSvMu','ignHChq','v1zYy0y','Ag9VA1a','zwn0Aw4','z2v0q28','z3jVDw4','CgX1z2K','WPxcISkrWPxcKG','A2DYB3u','mxb4ihm','rviGvvC','sgHkEhu','B25Ligi','DMuGBwe','phbYzsa','wNj5tKO','DeHLAwC','lxbHBMu','BJ8PoIa','CNvUDgK','WPdcKSkoWO7cHW','mtaIihi','yxmGBM8','B3qGD2K','Axr0zwq','DKzhsfy','C2v0','vfvgz1y','DxnUwM8','nhW1Fdy','A2v5vhK','C0votfG','EdPUB24','WOFcICkpWORcLq','ifbpuLq','CNmG','sg9VA3m','DMLLDZO','t2veqw8','C3rtCNm','DcGJzMy','thnqAwG','zMXLEdO','iNnWiIa','lM1Ulwm','ueP6DMy','A2vLCa','BgLUzvC','A3mGD3i','C25HCa','nNW0','CgPTsfy','yxjKlxi','DgHRzvm','igfYzsa','CI1LDMu','v0DLzLi','mcbPzIa','txnIrgK','sg90zuO','u3bMD0e','lwXLzNq','zsbUB3q','B2XVCJO','WOZcKSksWPpcIG','CgfYC2u','v2vItw8','BNrLCJS','i2zMnMi','yxK6z3i','ChG7yMe','zxKGAxm','B246zMK','uNvHwgu','DwfHEM8','WONcK8kuWO7cJa','iJ48l2q','DvPmyvO','DxrVo2y','tuj0tKC','zuL0zw0','nhWZ','igfNCMu','uwXksve','DYGWida','CMfWoNC','uLPStKi','C2v0qxq','B3vUzdO','zgvYlxi','AhnYt3K','Aw1L','nhWYFde','B2TZihi','DgnOige','WPhcLCkhWOJcKq','CMfUC3a','DgG6mdS','DfjmBK8','lwH1zhS','oMLUAgu','CgvJDhm','nIa2Bde','Aw5NoJi','uMvNAxm','B3rYB2W','tfLctgi','zxi6mxa','Aw1HCcW','Avf3uMW','DgLVBJO','CwXowwe','zxnWyxC','y2uGyM8','q3DoDMC','Axq7Fq','ztPWCMu','mtz8m3W','tM8GugG','igLZihu','rJKGDhC','Ee5vuKG','DxrVo30','oYi+tM8','pc9ZBwe','zwn0zwq','ChfRAMC','tg9VAYa','o2fSAwC','t3nWzK0','iNrLEhq','ohWZFda','A3D6C2W','WPlcImkqWOZcIa','uM5OChO','zsb1C2u','DhnPzgu','C3zNiIa','y2XPzw4','Bgvgthq','zMLYC3q','D192mG','ysbNyw0','zw5LBxK','vKPnqu4','ys1Hpsi','DMLZDwe','icaGDMe','BgfZDa','lJC1ktS','DgLHDgu','lwHPBNq','zdP0CMe','DgnOzxm','txfsyMS','uwDfDuS','qMLmAg8','oYi+rvm','Dw5Kic4','Dg9WoJe','tw1vExe','t0DWqLy','AxPLoJe','DgXJALe','ihvPlw0','zJu7Fq','Ahq6mJq','ys1ZDY0','u1zwqMe','yMjwrwW','DxjHvge','ywjZ','DwzIuMe','BgLZDa','DMjnrKK','CJOJzJC','zgLMzMu','lwv2zw4','mtK0ntu3vNf1AMf5','Aw1HDgK','AMvJDhm','yM9KExS','WPhcH8koWORcJq','yM90Dg8','Aw4TyM8','BMCGlYa','AhvK','DfDPzhq','CJOWo2i','Bg9NBY0','yw9bzKO','ig91Dca','ChG7y3u','BgvMDdO','icaHia','WOZcImkkWONcKG','C3rHCNq','AwrLE2q','igfYBwK','mtjWEdS','zMLSBa','BgrZlIa','Ahf3AeK','zxj0Eq','BgfZDfC','EI1PBMq','B3CGkey','n2vLzJu','EwuU','AgvHCca','y2rnv2y','sMrPsLK','DfjevK0','B25NlG','EMvurvC','iJeIig0','CMvUDca','B24GAwq','BgfIzwW','zfvVvgm','icaGDhK','mZzwr0LxBK0','y2GUC3K','B0H1s2y','WPpcImktWOJcLq','sNnuA0y','ztT9','s1PzB3m','WOBcI8krWOFcIG','BM8GCMu','i2zMzJa','CgXHEwu','psiXnJa','B3rpqKm','C3bHCMu','ywn0Axy','zxi7z2e','yNbgExq','lwL0zw0','oI40o30','iZrMogy','ve5wC2O','zMLSBd0','mhGYoa','D2fZBu0','lM1Ulxq','ywrKCMu','DMfYkc0','vKDJANa','AgvHBhq','WOJcLmkoWOBcKa','rLbty28','qxrbCM0','zxG6mJe','CgP3qxu','AwzPzwq','AgLSzsa','WONcImkrWPdcIG','mcbVzIa','zgvYoJa','rvnqig0','u1LAAfy','EgTAyvC','AxvZoJC','mhb4oW','uwznyuC','CMvHzca','vgHLigC','DuTzz20','icb3CMK','z3Hzthq','WPdcKCkkWO/cJa','zdDHotK','A0fwqwe','E3bVC2K','C2vSzwm','yxrJAc4','yxrHihi','zhrO','zYbMB3i','Dg46Ag8','DgHLBG','qxDAzuC','C3rYB2S','idzWEca','CxLrr3C','WOFcJCkvWO3cHW','CenIzMe','WOFcLmktWO/cJq','WPtcLmkoWPhcKa','AgvdBfi','reHkzxy','nNb4o2i','oJrWEca','AhjLzG','iIbTAw4','BM93','BwuUy3i','B2fYzca','BMCGzM8','AgvYAxq','lgnHBgm','khrOAxm','CYXTB24','zxnJ','BwuUx2C','BhTWB3m','o3rVCdO','BNrxAw4','v2flzK0','BYb0Agu','Fdb8na','C2v0ida','C2STBge','BNq7yM8','oImXnta','u1LLDhG','lJm2lde','o3DPzhq','BML0Awe','CM1VBMS','vLzoDw4','tgf0zvu','zMy3ytK','zgvUDgK','z05SvwK','AZPICMu','DcbZCgu','A2v5CW','EdTMAwW','BM9ky2W','z1jXuLu','ocK7Fq','BMCGyxq','x19tquS','iZaWmdS','shDyA08','B3zLCMy','B246B3a','lJe4ktS','CI5QCYa','y2vK','yxmSBw8','C2STDMe','t3b6v2S','WO3cLmkvWOVcIG','mNb4o20','AxjLuhi','mJrWEdS','B3n0Awm','BYb3zsa','ywjLChm','BgLJyxq','zxzLCNK','BgvHCG','ywX7zM8','tvbqtgK','u0TjteW','phnWyw4','zwn0ihC','nxm0idi','B3nPDgK','ndi2ntq5B1DVENHQ','Exz4rKG','CMuGkhi','DhPbCuC','nsb1As0','C2fNzq','zIb0Agu','mNWWFde','zNftD28','ChvZAa','DfvJANK','WOZcJ8kmWORcKq','suz4BLm','B25Z','ndm1nZCZnLPjCKXpBW','zxnZywC','AxvZoJe','AwzLig8','mJu1lc4','s21xt0y','D2Hfvwq','DMvK','A2zby2i','zsb0Age','u2fkA0i','zgLUzZO','swvSwKm','ldi5lc4','u0HWExq','CMf3vgm','ChbLyxi','Bw4Ty2W','tMfTzq','DdOXmha','igL0ige','ieeGAg8','igXPBMu','vMD1r2u','zfH6C1q','CuPos0q','mhGYma','WPdcK8krWPhcIW','zw50tgK','tLHmvwq','yMfS','zwq6ia','zw50','yMX5lum','BNHlqNa','mdT0B3a','A2v5q28','zNjHBwu','D3fgExa','AM9PBG','yt0IyMe','B3jKzxi','ug9oteS','zxrZoIa','CI1YDw4','ig1LBNu','lGOkswy','DgvYCYa','FdD8mxW','t0nPuNq','ic8GrJy','EuL6ExO','zg9JDw0','qLjfBwO','WO/cLCkqWOFcJq','sKTgwKG','WOZcJ8kgWPxcLa','ugf0Aa','BIbjtLm','lxDLAwC','ywT1CMe','zfjkrhC','BgLNBI0','sMD4tNq','vuXqthm','D2fYBG','Aw5N4OcM','z2njExG','zgf0ys0','Dgv4Dge','lNnRlwG','zhmGB24','nxWZFdq','CfPhyw8','zLvqqLq','ywWGBM8','pgLUChu','y3PksK4','Bwf4lwG','Aw50Aw4','ug9ZAxq','oMjSDxi','sxbyCvy','y2u7y28','phn0CM8','B246y28','y2XHC3m','WOVcKmkiWO3cHW','WOFcK8ktWOFcHW','Aw5Ozxi','WPxcJSkpWOVcJq','oJfWEca','vMjkswu','DdOWo28','mhHIna','EKDuug8','lJmPo2q','EKruCxG','tezeCLC','AgvHCfu','re9nq28','mhGXma','AK1JBxm','BguIihm','DxjLzca','r3LgwhG','ktT9','EdOYmtq','BwLU','y29Kzq','B3G9iJa','lwnOzwm','BwfUywC','mteWmdeZmgjVBNnduq','DcaOC28','Aw5KB3C','Awr0AdO','CM9mC1q','Fdn8mxW','EwzwvuS','rhbxq3y','v0fswI0','DgfIBgu','Ce5dBMu','Aw9Yte4','CIb0Agu','DMuGB2i','AwrLCG','mtf8mNW','rKzZzey','zxH0','uKDmvwK','DgvTCZO','Ag9VA0y','Ewf3qxq','ywXSoMK','vvfIzLC','zxi7Dxm','AgTZuMu','zsbVyMO','Bgu7zMK','u2vZC2K','B2yGDMK','iZjHmgy','FdeZFdG','vwfmv2O','tM8GCMu','mNmSyMe','BMnLv3i','zwP0wgu','m3WWFde','AguGAg8','BguGy3G','Bw4Ty28','ihrOAw4','BwfYz2K','CZPUB24','WOVcKSklWO/cLq','zYbMywK','BNqTC2K','Dennqvq','Agv4','CMP3Ava','ChjLDMu','ig9Ul28','BurquK8','BuTwBhi','ChrY','Ag9VA3m','CeLbzuq','vgv4Da','BNrezwy','nJaWo20','u2zMDgS','D0HZyui','EfrYzwu','yKLQsvC','yw1PBMC','BM90zq','zgL2','ufKGve8','Dhm6yxu','CMeTBwu'];_0x581c=function(){return _0x1ce977;};return _0x581c();}
