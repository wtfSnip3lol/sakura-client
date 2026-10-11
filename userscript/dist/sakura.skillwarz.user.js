// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.2.2
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

function _0x4dfd(_0x2ce64c,_0x53121b){_0x2ce64c=_0x2ce64c-(0x27a*-0x7+-0x42c+0x171a);var _0x189b02=_0x465d();var _0x1845a4=_0x189b02[_0x2ce64c];if(_0x4dfd['UCKLfa']===undefined){var _0x3fb43d=function(_0x22d853){var _0x16fca7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2ef8ee='',_0x1aac8c='';for(var _0x539793=0x2593*-0x1+-0x4db*-0x3+0x1702,_0x1a5acf,_0x1ed2d6,_0x1b19e5=0x249c+-0x2b*-0x85+-0x3af3*0x1;_0x1ed2d6=_0x22d853['charAt'](_0x1b19e5++);~_0x1ed2d6&&(_0x1a5acf=_0x539793%(0x19*0x32+0x3f*-0x8f+-0x1e53*-0x1)?_0x1a5acf*(-0x1e2d+0x107e*0x2+0x83*-0x5)+_0x1ed2d6:_0x1ed2d6,_0x539793++%(-0x1c0d+0x22d2+-0x7*0xf7))?_0x2ef8ee+=String['fromCharCode'](0x16f0*0x1+-0x3*0x3a3+-0xb08&_0x1a5acf>>(-(0x2b*0xc6+-0x31c*0x5+-0x19c*0xb)*_0x539793&0x17d*0x4+0x203b+-0x1*0x2629)):0x390*-0x4+0xb99*-0x1+0x1fd*0xd){_0x1ed2d6=_0x16fca7['indexOf'](_0x1ed2d6);}for(var _0x242e25=-0xa9c+0x2390+-0x18f4,_0x2243e4=_0x2ef8ee['length'];_0x242e25<_0x2243e4;_0x242e25++){_0x1aac8c+='%'+('00'+_0x2ef8ee['charCodeAt'](_0x242e25)['toString'](0xcd1*0x2+-0x229*-0x4+-0x2236))['slice'](-(0x910+0x1d84+0x2*-0x1349));}return decodeURIComponent(_0x1aac8c);};_0x4dfd['YirnaS']=_0x3fb43d,_0x4dfd['mGcwZy']={},_0x4dfd['UCKLfa']=!![];}var _0x3f5e3d=_0x189b02[-0xfe*0xd+0x193d+-0x75*0x1b],_0x4c5b2b=_0x2ce64c+_0x3f5e3d,_0x23188b=_0x4dfd['mGcwZy'][_0x4c5b2b];return!_0x23188b?(_0x1845a4=_0x4dfd['YirnaS'](_0x1845a4),_0x4dfd['mGcwZy'][_0x4c5b2b]=_0x1845a4):_0x1845a4=_0x23188b,_0x1845a4;}(function(_0xa80f9e,_0x3e30c1){var _0xc93db4=_0x4dfd,_0x1b7e0c=_0xa80f9e();while(!![]){try{var _0x20d075=parseInt(_0xc93db4(0x55b))/(0x414+-0xb*0x1cd+-0x26*-0x6a)+-parseInt(_0xc93db4(0x311))/(-0x1486+0x5*-0x5b3+-0xa3*-0x4d)*(parseInt(_0xc93db4(0x454))/(-0x43*0x19+-0x22d*-0x5+-0x1b*0x29))+parseInt(_0xc93db4(0x2a3))/(-0x1*-0x1fae+-0x1855+-0x755*0x1)+parseInt(_0xc93db4(0x1d1))/(-0x8e1*0x1+0x263*0x1+0x683)*(parseInt(_0xc93db4(0x390))/(-0x1*-0x1609+-0x2e*0x68+0x353*-0x1))+parseInt(_0xc93db4(0x3f6))/(-0x115d+0xc6d+0x4f7*0x1)+parseInt(_0xc93db4(0x527))/(0xf09+0x34*0x88+0x2aa1*-0x1)+-parseInt(_0xc93db4(0x55d))/(-0x9*0x2ea+0x1*0xc9b+0xda8);if(_0x20d075===_0x3e30c1)break;else _0x1b7e0c['push'](_0x1b7e0c['shift']());}catch(_0x123ccb){_0x1b7e0c['push'](_0x1b7e0c['shift']());}}}(_0x465d,-0x443b3+-0x7374d+0xfacb2),((()=>{'use strict';var _0x5aa51a=_0x4dfd,_0x40b937={'HqYcu':function(_0x25d79a,_0x3cbc45){return _0x25d79a!==_0x3cbc45;},'EKEkZ':_0x5aa51a(0x29c)+_0x5aa51a(0x34d),'WsyLi':'ifram'+'e','KVcWD':function(_0x10bd0f,_0x3b4e49){return _0x10bd0f<_0x3b4e49;},'hDLLH':_0x5aa51a(0x404)+_0x5aa51a(0x43e),'VKcFD':function(_0x5e65aa,_0x283296,_0x425409){return _0x5e65aa(_0x283296,_0x425409);},'bKPsP':_0x5aa51a(0x648)+_0x5aa51a(0x371),'KdSxD':'sakur'+_0x5aa51a(0x4f5)+'v2-cs'+'s','cFrJb':_0x5aa51a(0x5f5),'ynpEa':_0x5aa51a(0x494)+':','cCjCR':'snaps'+'hot','gkSPi':_0x5aa51a(0x36e),'FMoGg':function(_0x6bfdb5,_0x2d934f){return _0x6bfdb5+_0x2d934f;},'JoPNf':_0x5aa51a(0x661),'VdJWr':function(_0x52ef93){return _0x52ef93();},'odQcf':function(_0x21b84f,_0x2480df){return _0x21b84f+_0x2480df;},'AMKJe':function(_0x1f130a,_0x6878dc){return _0x1f130a+_0x6878dc;},'CPkkR':_0x5aa51a(0x52b)+_0x5aa51a(0x521)+'rame\x20'+_0x5aa51a(0x5e2)+'\x20post'+_0x5aa51a(0x5de)+'singl'+_0x5aa51a(0x24f)+_0x5aa51a(0x355)+'\x0a','MvzKA':'\x20\x20\x20\x20\x20'+'insta'+'lled\x20'+_0x5aa51a(0x274)+_0x5aa51a(0x58e)+'es\x20of'+_0x5aa51a(0x3e1)+_0x5aa51a(0x583)+'\x20patc'+_0x5aa51a(0x31f)+_0x5aa51a(0x4c4)+_0x5aa51a(0x258)+_0x5aa51a(0x56e)+'tiate'+'.\x0a\x0a','ywwlJ':function(_0x3ac51c,_0x157f41){return _0x3ac51c===_0x157f41;},'tuYKJ':'hewQp','TFxHW':_0x5aa51a(0x40a),'IlTTb':'#ff6e'+'74','LZGFZ':function(_0x5a1f63,_0x869248){return _0x5a1f63===_0x869248;},'FmyAp':function(_0x237b2c,_0x5e37fb){return _0x237b2c/_0x5e37fb;},'ViVvV':'fnqBA','udlYv':function(_0x48561d,_0x26d3c4){return _0x48561d>_0x26d3c4;},'IWVHw':_0x5aa51a(0x623)+_0x5aa51a(0x1cc)+_0x5aa51a(0x1a3),'osuIU':'#ffd4'+'8a','lCrAP':function(_0x356520,_0xdc210c){return _0x356520+_0xdc210c;},'JAROS':_0x5aa51a(0x38b)+'g\x20·\x20','QqYlo':_0x5aa51a(0x636)+_0x5aa51a(0x541)+_0x5aa51a(0x666)+_0x5aa51a(0x601)+'ng\x20/\x20'+_0x5aa51a(0x378)+_0x5aa51a(0x30b)+_0x5aa51a(0x37b)+'ping\x20'+'marks'+'\x20whic'+'h\x20fie'+_0x5aa51a(0x4aa)+_0x5aa51a(0x428)+'h.','lTUhr':'Speed'+_0x5aa51a(0x275),'keFOQ':_0x5aa51a(0x37a)+'1b','SdKgw':_0x5aa51a(0x639)+_0x5aa51a(0x554)+'\x20Skil'+'lWarz'+_0x5aa51a(0x5c8)+'rt','qCYql':';font'+_0x5aa51a(0x565)+_0x5aa51a(0x285)+'0','nFYqK':'#f7ee'+'f5','USaXb':function(_0x4a317f,_0xee2e9a){return _0x4a317f+_0xee2e9a;},'SCCcf':_0x5aa51a(0x413)+'12px/'+'1.5\x20u'+_0x5aa51a(0x2df)+'ospac'+_0x5aa51a(0x227)+'solas'+',mono'+_0x5aa51a(0x28d)+_0x5aa51a(0x4e8)+_0x5aa51a(0x631)+_0x5aa51a(0x55f)+_0x5aa51a(0x20d)+'0px\x20-'+_0x5aa51a(0x43c)+_0x5aa51a(0x5b9),'FCFkO':_0x5aa51a(0x420)+_0x5aa51a(0x61f)+_0x5aa51a(0x2b9)+'ex-di'+_0x5aa51a(0x5ce)+'on:co'+'lumn;'+_0x5aa51a(0x27f)+_0x5aa51a(0x3b0)+_0x5aa51a(0x629)+';','RFbOk':function(_0x33176c,_0x817bad){return _0x33176c+_0x817bad;},'iIQWp':function(_0x1495e4,_0x3d4136){return _0x1495e4+_0x3d4136;},'aSnDw':function(_0x4d6642,_0x2113be){return _0x4d6642+_0x2113be;},'IOLPY':_0x5aa51a(0x400)+_0x5aa51a(0x5d7)+_0x5aa51a(0x496)+'ding:'+_0x5aa51a(0x1a9)+'2px;b'+_0x5aa51a(0x546)+'-bott'+'om:1p'+_0x5aa51a(0x5d0)+_0x5aa51a(0x556)+_0x5aa51a(0x65d)+'5,143'+',177,'+_0x5aa51a(0x460)+_0x5aa51a(0x28f)+'y:fle'+_0x5aa51a(0x3f5)+':8px;'+_0x5aa51a(0x33c)+_0x5aa51a(0x4d2)+_0x5aa51a(0x2c0)+'ter;f'+'lex:0'+_0x5aa51a(0x4fd)+_0x5aa51a(0x5ba),'XaCqA':'<span'+_0x5aa51a(0x34a)+_0x5aa51a(0x455)+_0x5aa51a(0x5b4)+_0x5aa51a(0x5e6)+_0x5aa51a(0x203)+_0x5aa51a(0x307)+'7a658'+_0x5aa51a(0x2b0)+'t-siz'+_0x5aa51a(0x2be)+_0x5aa51a(0x1cf)+'ding:'+'1px\x206'+'px;bo'+_0x5aa51a(0x451)+'1px\x20s'+'olid\x20'+_0x5aa51a(0x3b9)+_0x5aa51a(0x214)+'43,17'+_0x5aa51a(0x505)+_0x5aa51a(0x2e7)+_0x5aa51a(0x4d6)+'adius'+_0x5aa51a(0x295)+_0x5aa51a(0x1f8)+_0x5aa51a(0x4f6)+_0x5aa51a(0x375),'lHIKB':'<butt'+_0x5aa51a(0x508)+'=\x22sw2'+_0x5aa51a(0x1c6)+_0x5aa51a(0x238)+'\x22back'+_0x5aa51a(0x2e4)+'d:tra'+_0x5aa51a(0x42a)+_0x5aa51a(0x2de)+_0x5aa51a(0x546)+_0x5aa51a(0x383)+_0x5aa51a(0x330)+_0x5aa51a(0x495)+'(255,'+'143,1'+_0x5aa51a(0x2e6)+_0x5aa51a(0x2e1)+_0x5aa51a(0x2b3)+'7eef5'+';bord'+_0x5aa51a(0x2bf)+'dius:'+_0x5aa51a(0x5f4)+'addin'+_0x5aa51a(0x3b7)+_0x5aa51a(0x30c)+'curso'+_0x5aa51a(0x43b)+'nter;'+_0x5aa51a(0x2a9)+'butto'+'n>','fsvIg':_0x5aa51a(0x3ea),'eznXG':'<span'+_0x5aa51a(0x34a)+'sw2-f'+'actor'+'label'+'\x22\x20sty'+'le=\x22c'+_0x5aa51a(0x1bb)+'#bda9'+_0x5aa51a(0x1a6)+'n-wid'+_0x5aa51a(0x382)+_0x5aa51a(0x36a)+_0x5aa51a(0x26b)+_0x5aa51a(0x401)+'>','EqatS':_0x5aa51a(0x43f)+_0x5aa51a(0x508)+_0x5aa51a(0x200)+_0x5aa51a(0x325)+_0x5aa51a(0x4a9)+'le=\x22b'+_0x5aa51a(0x3c0)+_0x5aa51a(0x60b)+_0x5aa51a(0x525)+'paren'+_0x5aa51a(0x4af)+'der:1'+_0x5aa51a(0x3a3)+'lid\x20r'+_0x5aa51a(0x5bb)+_0x5aa51a(0x3e9)+_0x5aa51a(0x530)+',.4);'+_0x5aa51a(0x494)+':#f7e'+'ef5;b'+_0x5aa51a(0x546)+'-radi'+'us:7p'+_0x5aa51a(0x1cf)+'ding:'+'4px\x209'+'px;cu'+'rsor:'+'point'+_0x5aa51a(0x1e5)+'Snaps'+_0x5aa51a(0x5fe)+'F9)</'+_0x5aa51a(0x3de)+'n>','pPKFq':_0x5aa51a(0x399)+'\x20id=\x22'+'sw2-h'+_0x5aa51a(0x3f0)+_0x5aa51a(0x5d7)+_0x5aa51a(0x3a7)+_0x5aa51a(0x3f2)+_0x5aa51a(0x2b8)+_0x5aa51a(0x39d)+_0x5aa51a(0x34e)+_0x5aa51a(0x346)+_0x5aa51a(0x48e)+'king\x20'+_0x5aa51a(0x49f)+'intin'+'g\x20/\x20j'+'umpin'+'g\x20mar'+'ks\x20wh'+_0x5aa51a(0x328)+_0x5aa51a(0x642)+_0x5aa51a(0x45e)+_0x5aa51a(0x2f2)+_0x5aa51a(0x401)+'>','MexuR':'#sw2-'+'statu'+'s','rEuqL':_0x5aa51a(0x5ef)+_0x5aa51a(0x36c),'GLdhq':'#sw2-'+_0x5aa51a(0x22b),'KtzQQ':_0x5aa51a(0x5ef)+_0x5aa51a(0x582),'cnIcN':_0x5aa51a(0x5ef)+_0x5aa51a(0x3af)+'r','usNVv':'\x20\x20(','cqsJE':function(_0x31a89d,_0xc1f87a){return _0x31a89d+_0xc1f87a;},'HfYqc':function(_0x520b12,_0x534988){return _0x520b12+_0x534988;},'puCGL':'yes','JqhwH':_0x5aa51a(0x3a9)+_0x5aa51a(0x323)+'\x20','RUAJN':'\x20\x20\x20ty'+_0x5aa51a(0x45c),'DCQvl':function(_0x251596,_0x349b95){return _0x251596!=_0x349b95;},'tCNTy':function(_0x35b1a2,_0x1dfa13){return _0x35b1a2+_0x1dfa13;},'ujVwR':_0x5aa51a(0x623)+'\x20\x20\x20\x20','KokSV':_0x5aa51a(0x450)+_0x5aa51a(0x3b4),'gNbua':'The\x20h'+'ooks\x20'+'fire\x20'+'on\x20th'+_0x5aa51a(0x256)+_0x5aa51a(0x1c4)+_0x5aa51a(0x517)+'date('+_0x5aa51a(0x4d0)+'thing'+'\x20capt'+_0x5aa51a(0x364)+_0x5aa51a(0x4a2),'AXTnn':'no\x20Up'+_0x5aa51a(0x543)+_0x5aa51a(0x1ac)+'et,\x20o'+_0x5aa51a(0x3a5)+_0x5aa51a(0x379)+'ature'+_0x5aa51a(0x2e5)+_0x5aa51a(0x5eb)+_0x5aa51a(0x38c),'rMvnq':_0x5aa51a(0x439),'SmXrX':'numbe'+'r','eKFUv':function(_0x400e45,_0x4096f8){return _0x400e45+_0x4096f8;},'jlULk':_0x5aa51a(0x5f1)+'ngs','avHpe':_0x5aa51a(0x5b5)+_0x5aa51a(0x1f7),'GnLvy':_0x5aa51a(0x1aa)+'g','bwWOU':_0x5aa51a(0x49e)+_0x5aa51a(0x482)+_0x5aa51a(0x21d),'CiYld':function(_0x52ed49,_0x3b9029){return _0x52ed49!==_0x3b9029;},'NhPWc':function(_0x1d00fe,_0x110f52){return _0x1d00fe!==_0x110f52;},'DeBKG':'HxjQt','VssZX':'repor'+'t','iAqUP':_0x5aa51a(0x5ac),'RpkYA':'OmCsW','uKcve':function(_0x1f965f,_0x3cad0e){return _0x1f965f!==_0x3cad0e;},'JRGLJ':function(_0x4d5452,_0x158f62){return _0x4d5452===_0x158f62;},'cGbJu':function(_0x191342,_0x141471){return _0x191342+_0x141471;},'gOJko':function(_0xb8a69b,_0x5619ae){return _0xb8a69b+_0x5619ae;},'MnaAN':_0x5aa51a(0x52e)+_0x5aa51a(0x5f2),'ipDco':_0x5aa51a(0x2ce),'eADwn':function(_0x473453,_0x5d1417){return _0x473453<_0x5d1417;},'XBnKd':_0x5aa51a(0x36f),'lhXbI':_0x5aa51a(0x426),'SYdrk':function(_0x3ad7b0,_0x4ed539){return _0x3ad7b0>>>_0x4ed539;},'jGoLJ':function(_0x2f210c,_0x376d35){return _0x2f210c!==_0x376d35;},'BmWrx':_0x5aa51a(0x60d),'eQHbq':_0x5aa51a(0x438)+_0x5aa51a(0x5dd),'EHGOQ':_0x5aa51a(0x552)+'ntiat'+'eStre'+_0x5aa51a(0x276),'wmYQw':function(_0x764b34,_0x207e68){return _0x764b34!==_0x207e68;},'dOqLZ':_0x5aa51a(0x473),'TDJWe':function(_0x1d9fd3,_0x119722){return _0x1d9fd3!==_0x119722;},'cUByn':_0x5aa51a(0x1f3),'qtjGd':_0x5aa51a(0x4e1),'YSMun':'Runti'+_0x5aa51a(0x621)+'eateP'+_0x5aa51a(0x353)+'\x20unav'+_0x5aa51a(0x20c)+'le','djNra':'sakur'+_0x5aa51a(0x58f)+_0x5aa51a(0x419)+'z','BPfZZ':function(_0x4f993a){return _0x4f993a();},'vvBPH':function(_0x5cb344,_0x34b54d){return _0x5cb344|_0x34b54d;},'cClcs':function(_0x43464c,_0x7d89e){return _0x43464c===_0x7d89e;},'ZGYjp':_0x5aa51a(0x481),'JStmb':_0x5aa51a(0x568)+_0x5aa51a(0x405)+'ntime'+_0x5aa51a(0x280)+_0x5aa51a(0x462)+_0x5aa51a(0x3da),'TzINu':_0x5aa51a(0x568)+'n._ru'+_0x5aa51a(0x600)+'._gam'+'e','hIagf':'windo'+_0x5aa51a(0x5cb)+_0x5aa51a(0x47e),'zQqXa':_0x5aa51a(0x3d0),'DtWuw':function(_0x422800,_0x5d59c0){return _0x422800===_0x5d59c0;},'gIyIZ':'windo'+'w.','PekMG':_0x5aa51a(0x664)+'le','AhfTw':'insta'+_0x5aa51a(0x471)+_0x5aa51a(0x529)+_0x5aa51a(0x385)+'s.mem'+_0x5aa51a(0x1eb),'rzFRo':function(_0x2c81ab,_0x434455){return _0x2c81ab&&_0x434455;},'JVCvY':function(_0x1d8b8e,_0x179c8a){return _0x1d8b8e===_0x179c8a;},'VMrmN':_0x5aa51a(0x2d6),'MNpVC':function(_0x391da4,_0x127236){return _0x391da4(_0x127236);},'cIkVH':'dWhZm','vbKEa':function(_0xb83048,_0x39ffed){return _0xb83048+_0x39ffed;},'SSsWb':function(_0x205315,_0x48aec5){return _0x205315!==_0x48aec5;},'gJuVk':_0x5aa51a(0x286),'RbRWt':_0x5aa51a(0x66d),'aJWwy':_0x5aa51a(0x650)+'Tampe'+_0x5aa51a(0x2e8)+_0x5aa51a(0x3f8)+'\x20not\x20'+_0x5aa51a(0x268)+_0x5aa51a(0x30b)+_0x5aa51a(0x3aa)+'the\x20c'+_0x5aa51a(0x5f6)+_0x5aa51a(0x202)+_0x5aa51a(0x1f5)+'ame.\x0a','qvvDM':function(_0xbef5a7){return _0xbef5a7();},'udpue':function(_0x3fc358,_0x677f91){return _0x3fc358|_0x677f91;},'xUayF':function(_0x4effdb,_0x44a52a){return _0x4effdb<_0x44a52a;},'PlRaj':function(_0x32bf1a,_0x2fa221){return _0x32bf1a===_0x2fa221;},'GNuRC':'zQmqO','EDeCZ':function(_0x162ab7,_0x3068ef){return _0x162ab7<_0x3068ef;},'scNtP':function(_0x476196,_0x265db3){return _0x476196+_0x265db3;},'ORxGp':function(_0x1ed1a3,_0x217732){return _0x1ed1a3+_0x217732;},'JqdvT':_0x5aa51a(0x3fe)+_0x5aa51a(0x3d3),'fweIA':function(_0x2429ef,_0x26bd69){return _0x2429ef+_0x26bd69;},'tDBXH':'9|6|1'+'|8|7|'+_0x5aa51a(0x2e9)+_0x5aa51a(0x468),'BeXkw':'obfI','IBjka':function(_0xc50f50,_0x20ab2e){return _0xc50f50^_0x20ab2e;},'oLJrf':function(_0x3a6ace,_0x3e989e){return _0x3a6ace&_0x3e989e;},'OFgZv':'JqHfz','FeUfr':function(_0x50f36c,_0x3b48fc){return _0x50f36c===_0x3b48fc;},'NTMvU':function(_0x4d4467,_0x454d86){return _0x4d4467|_0x454d86;},'zQsBM':function(_0x415b97,_0x1cabff){return _0x415b97^_0x1cabff;},'wOUsj':function(_0x4f44f9,_0x7c553a){return _0x4f44f9^_0x7c553a;},'JOfRD':function(_0x5580be,_0x330d5f){return _0x5580be===_0x330d5f;},'BJNUz':function(_0x370d4c,_0x364135){return _0x370d4c+_0x364135;},'RbCno':function(_0xcfa3e8,_0x352c9c){return _0xcfa3e8+_0x352c9c;},'ulWaT':function(_0x29bd44,_0x527bb9){return _0x29bd44&_0x527bb9;},'EgVZh':function(_0x3549a6,_0x44bd9e){return _0x3549a6||_0x44bd9e;},'oxeNN':function(_0x219be6,_0x20522e){return _0x219be6&_0x20522e;},'vLreK':function(_0x15ad12,_0x5bd6f5,_0xe4bda8){return _0x15ad12(_0x5bd6f5,_0xe4bda8);},'vaJTl':function(_0x3e3daa,_0x379246){return _0x3e3daa+_0x379246;},'KhzuS':function(_0x2a07fb,_0x192315){return _0x2a07fb(_0x192315);},'mfElm':function(_0x4e4349,_0x2544de){return _0x4e4349===_0x2544de;},'EGWrK':_0x5aa51a(0x5cd),'KXKgA':function(_0x331b7e,_0x4570a5){return _0x331b7e===_0x4570a5;},'IsWRU':function(_0x5154b0,_0x39356a){return _0x5154b0+_0x39356a;},'qznVe':function(_0x211aa6,_0xc12673){return _0x211aa6!==_0xc12673;},'MjYtx':function(_0xec9c7e,_0xd155b0){return _0xec9c7e+_0xd155b0;},'ohsla':function(_0x4bf03f,_0x43d0f0){return _0x4bf03f+_0x43d0f0;},'UnTJl':_0x5aa51a(0x406),'PNfBI':function(_0x2faab7,_0x4a3967){return _0x2faab7!==_0x4a3967;},'isUCu':function(_0x436bb7,_0x1b6940){return _0x436bb7<_0x1b6940;},'tROnD':_0x5aa51a(0x25d)+'e','NKcDR':function(_0x23ba99,_0x78bfa5){return _0x23ba99(_0x78bfa5);},'ltOkd':_0x5aa51a(0x1b5)+'t','XJADi':function(_0x5cc496,_0x26ce31){return _0x5cc496+_0x26ce31;},'YCNDj':function(_0x18ff2d,_0x26089a){return _0x18ff2d<_0x26089a;},'mKDPl':function(_0x36ad6e,_0x1afe48){return _0x36ad6e!==_0x1afe48;},'DzYif':function(_0x48c64e,_0x5149df){return _0x48c64e<_0x5149df;},'xTXZq':function(_0x106add,_0x10a362){return _0x106add(_0x10a362);},'LUCVo':'FOujO','ZGLzA':_0x5aa51a(0x536),'ilYXa':_0x5aa51a(0x31b),'cifAd':_0x5aa51a(0x456)+'|3|0|'+'1|5','zXZBU':function(_0x36e2cf,_0x4218ee){return _0x36e2cf+_0x4218ee;},'hVuEs':function(_0x55dad3,_0x427c00){return _0x55dad3<_0x427c00;},'ZulNY':function(_0x5bd231,_0xc1513a){return _0x5bd231+_0xc1513a;},'PajXR':function(_0x692d4c,_0xded617,_0x372e77){return _0x692d4c(_0xded617,_0x372e77);},'EyUBP':function(_0x179a8b,_0x32904a){return _0x179a8b(_0x32904a);},'koMrY':function(_0x3aee7b,_0x2a1754){return _0x3aee7b<_0x2a1754;},'wfCbk':function(_0x37f266,_0x23026d,_0x59c02e,_0x1d7fc7){return _0x37f266(_0x23026d,_0x59c02e,_0x1d7fc7);},'ZbcZo':'BIjJA','OQtFd':function(_0x58d255,_0x2a9388){return _0x58d255+_0x2a9388;},'kfTRL':function(_0x47fdb3,_0x5d57c4){return _0x47fdb3>>>_0x5d57c4;},'xlpAK':'Enemy'+_0x5aa51a(0x56c)+_0x5aa51a(0x24a)+'_Game'+_0x5aa51a(0x638)+_0x5aa51a(0x42f)+_0x5aa51a(0x491)+')\x20nev'+_0x5aa51a(0x2f1)+_0x5aa51a(0x1e3)+'\x20no\x20e'+'nemie'+'s\x20and'+_0x5aa51a(0x2cc),'ybowM':function(_0x26daf3,_0x5738fd){return _0x26daf3<_0x5738fd;},'VTeeq':'void','sPDCL':'no\x20li'+_0x5aa51a(0x389)+'jects'+_0x5aa51a(0x3d1)+_0x5aa51a(0x364)+'yet.','BpORC':function(_0x22edd3,_0x59555a){return _0x22edd3<_0x59555a;},'RiBAh':function(_0x38010d,_0x468568){return _0x38010d<_0x468568;},'FgUfo':'obf','aEmrM':function(_0x3b9891,_0x29a43a){return _0x3b9891===_0x29a43a;},'GdlnQ':function(_0x37cff5,_0x1f3d47){return _0x37cff5===_0x1f3d47;},'KEUbW':'kgopy','beoAL':function(_0x3e453e,_0x333337){return _0x3e453e<_0x333337;},'OwkmB':function(_0x2a11e7,_0x19613a){return _0x2a11e7!==_0x19613a;},'QamyK':function(_0xce9ff,_0x389f11){return _0xce9ff+_0x389f11;},'MiEsQ':function(_0x5a8ac9,_0x395c44){return _0x5a8ac9+_0x395c44;},'EDvWa':function(_0x1e10c8,_0x2a722f){return _0x1e10c8+_0x2a722f;},'JMfgs':function(_0x433f6f,_0x2c42b7){return _0x433f6f===_0x2c42b7;},'dYLLo':function(_0x551f13,_0x13d743){return _0x551f13(_0x13d743);},'DKsas':_0x5aa51a(0x4f1),'LNRKJ':function(_0x43d283,_0x3d35f3){return _0x43d283!==_0x3d35f3;},'AbQiU':function(_0x484bcf,_0x1108ce){return _0x484bcf!==_0x1108ce;},'QcQZs':'obfB','JhtLf':function(_0x4b841f,_0x2f9d08){return _0x4b841f(_0x2f9d08);},'VzBJg':function(_0x3b1422,_0xf54a7d){return _0x3b1422===_0xf54a7d;},'liXsX':function(_0x17bc61,_0x1e457f){return _0x17bc61<=_0x1e457f;},'sMOTT':function(_0x3e8147,_0x682cf8){return _0x3e8147-_0x682cf8;},'yIaml':'%c[sa'+_0x5aa51a(0x554)+_0x5aa51a(0x23a)+_0x5aa51a(0x557)+'abled','wnXoW':function(_0x3d350d,_0x1cf701){return _0x3d350d!==_0x1cf701;},'gccLv':_0x5aa51a(0x271),'NQlpc':function(_0x2e6267,_0x282006){return _0x2e6267===_0x282006;},'ppjbS':function(_0x498768,_0x557a8e){return _0x498768===_0x557a8e;},'ciPLe':function(_0x31e70f,_0x1bf41f){return _0x31e70f-_0x1bf41f;},'VDdHo':function(_0x534da7,_0x13e2fe){return _0x534da7!==_0x13e2fe;},'AiWFP':'unity'+_0x5aa51a(0x534)+_0x5aa51a(0x2af),'xZVDU':_0x5aa51a(0x55c)+'Insta'+'nceWr'+'apper','egahA':function(_0x26356b){return _0x26356b();},'KRdyH':'+0x','Hehvx':_0x5aa51a(0x1d8)+'an','uIRsq':function(_0x5e5e4e,_0x22d6ed,_0x1f0652){return _0x5e5e4e(_0x22d6ed,_0x1f0652);},'ZFEfk':function(_0xbf1a57,_0x50cfdb){return _0xbf1a57+_0x50cfdb;},'GvqDl':function(_0x151d0e,_0x41346c){return _0x151d0e+_0x41346c;},'cAlax':function(_0x456747,_0x380cfd){return _0x456747===_0x380cfd;},'dIobi':function(_0x5d5bc4,_0x5465e0){return _0x5d5bc4(_0x5465e0);},'jzfDU':function(_0x578fb9,_0x5adf34){return _0x578fb9-_0x5adf34;},'oFUje':'surve'+_0x5aa51a(0x64c)+'led:\x20','KlxKl':_0x5aa51a(0x2a1),'HgVNj':function(_0x3bbe24,_0x1194b5){return _0x3bbe24+_0x1194b5;},'rxWPj':_0x5aa51a(0x598)+_0x5aa51a(0x647),'RsvcX':_0x5aa51a(0x29d)+_0x5aa51a(0x394)+_0x5aa51a(0x232)+'read\x20'+'0\x20fie'+_0x5aa51a(0x46c),'mZiVA':_0x5aa51a(0x641)+_0x5aa51a(0x1e1)+_0x5aa51a(0x432)+_0x5aa51a(0x592)+_0x5aa51a(0x59e)+'offse'+'t\x20was'+'\x20skip'+'ped\x20b'+_0x5aa51a(0x5fc)+'e.','mQiQK':_0x5aa51a(0x4ca)+_0x5aa51a(0x2b7)+'MK\x20CO'+'PY\x20TO'+'OK\x20OV'+'ER\x20wi'+_0x5aa51a(0x48b)+_0x5aa51a(0x49e)+_0x5aa51a(0x482)+_0x5aa51a(0x1b9)+_0x5aa51a(0x5c7)+'Runti'+'me\x20we'+'\x20arme'+'d\x20was'+'\x20','JqUGf':'the\x20g'+'ame\x20w'+_0x5aa51a(0x666)+_0x5aa51a(0x429)+_0x5aa51a(0x48f)+'lding'+'\x20it\x20i'+_0x5aa51a(0x352)+_0x5aa51a(0x2d7)+_0x5aa51a(0x1b8)+'able\x20'+_0x5aa51a(0x343)+'\x20othe'+'r\x20','csIUs':_0x5aa51a(0x659)+_0x5aa51a(0x54b)+_0x5aa51a(0x407)+'ipt\x20i'+'n\x20Tam'+'permo'+'nkey\x20'+_0x5aa51a(0x366)+_0x5aa51a(0x519)+_0x5aa51a(0x2b6)+'.','FasrH':_0x5aa51a(0x4cb)+'st\x20a\x20'+_0x5aa51a(0x318)+_0x5aa51a(0x26d)+'Runti'+_0x5aa51a(0x25c)+_0x5aa51a(0x60f)+_0x5aa51a(0x501)+_0x5aa51a(0x514)+'\x20glob'+'al\x20no'+'w\x20exp'+_0x5aa51a(0x3d9),'HieeH':function(_0x4e356d,_0x3d7632){return _0x4e356d+_0x3d7632;},'pHzlx':'ESP:\x20','kZSop':function(_0x4c6c4f,_0xc921b7){return _0x4c6c4f+_0xc921b7;},'ldmDZ':'\x20A\x20ho'+_0x5aa51a(0x387)+_0x5aa51a(0x510)+'t\x20','bUiyo':_0x5aa51a(0x395)+_0x5aa51a(0x62f)+_0x5aa51a(0x4fc)+'ence\x20'+_0x5aa51a(0x1cd)+_0x5aa51a(0x55e)+_0x5aa51a(0x397)+_0x5aa51a(0x535)+'not\x20r'+'eacha'+'ble\x20n'+_0x5aa51a(0x46f),'Vcnnl':_0x5aa51a(0x52a),'OCzbe':_0x5aa51a(0x304)+'reads'+_0x5aa51a(0x5d1)+_0x5aa51a(0x50d)+_0x5aa51a(0x393)+_0x5aa51a(0x5b2)+_0x5aa51a(0x57c)+'e\x20obj'+_0x5aa51a(0x220)+_0x5aa51a(0x51b)+_0x5aa51a(0x465)+_0x5aa51a(0x4fe)+'U8\x20is'+'\x20reac'+_0x5aa51a(0x5e0)+'.','vszbd':_0x5aa51a(0x19c)+_0x5aa51a(0x349)+_0x5aa51a(0x3a1)+_0x5aa51a(0x35e)+'t.Val'+_0x5aa51a(0x35c)+'pper\x20'+_0x5aa51a(0x5a6)+_0x5aa51a(0x33a)+_0x5aa51a(0x3b8)+_0x5aa51a(0x3e8)+_0x5aa51a(0x391)+'unnin'+_0x5aa51a(0x526)+_0x5aa51a(0x59a),'CuTdb':function(_0x488c04,_0x54e121){return _0x488c04>_0x54e121;},'pEGkj':function(_0x1bf58f,_0x410958){return _0x1bf58f===_0x410958;},'qPEXN':function(_0x454906,_0x21b490){return _0x454906!==_0x21b490;},'LDACw':function(_0x22503f,_0x208336){return _0x22503f+_0x208336;},'CqGbi':'\x20hook'+_0x5aa51a(0x4b4)+_0x5aa51a(0x436)+_0x5aa51a(0x665)+'N\x20by\x20'+_0x5aa51a(0x245)+_0x5aa51a(0x5c7)+'apply'+_0x5aa51a(0x3f9)+'\x20','cxQBT':'Regis'+_0x5aa51a(0x4e6)+'\x20','feUWV':function(_0x4f6895,_0x1ea6c0){return _0x4f6895+_0x1ea6c0;},'YjjNL':'UWMK\x20'+_0x5aa51a(0x52f)+_0x5aa51a(0x32e),'mVtPy':'\x20hook'+'(s)\x20t'+'o\x20a\x20t'+'able\x20'+_0x5aa51a(0x5cf)+_0x5aa51a(0x232)+'appli'+_0x5aa51a(0x58b)+'ne.\x20T'+_0x5aa51a(0x210)+'gnatu'+_0x5aa51a(0x512),'XurEr':function(_0x5316d7,_0x4bbf74){return _0x5316d7+_0x4bbf74;},'Oaoof':'Eithe'+_0x5aa51a(0x25a)+'\x20are\x20'+'not\x20i'+_0x5aa51a(0x4b1)+'ound,'+'\x20or\x20t'+'he\x20ho'+'ok\x20is'+_0x5aa51a(0x509)+_0x5aa51a(0x5db)+'ong\x20o'+'verlo'+'ad.','buKIb':'rebui'+'lt\x20si'+'nce\x20f'+_0x5aa51a(0x4c1)+'captu'+_0x5aa51a(0x620)+'espaw'+'n?):\x20','Hmedw':function(_0x1b6763,_0x4f37bd){return _0x1b6763+_0x4f37bd;},'SHJLc':function(_0x4a3dac,_0x3cf568){return _0x4a3dac+_0x3cf568;},'NFMoU':function(_0xadf4fb,_0x5a0c2a){return _0xadf4fb===_0x5a0c2a;},'uhVlK':_0x5aa51a(0x55c)+'Game','nIyVK':_0x5aa51a(0x329),'DnPiD':function(_0x1c6624,_0x436ad2){return _0x1c6624===_0x436ad2;},'ngPRh':'SbRXx','WxxqG':_0x5aa51a(0x2c2)+'l','qbrJF':_0x5aa51a(0x61e)+'r','jVUfv':function(_0x27f8ca,_0x6be1fc){return _0x27f8ca&&_0x6be1fc;},'nBdTi':_0x5aa51a(0x408)+'KURA-'+_0x5aa51a(0x2f9)+_0x5aa51a(0x4cd)+'END=='+'=','qBLdm':function(_0x14278b,_0x257359){return _0x14278b!==_0x257359;},'iAfHq':'messa'+'ge','wEDDq':'%c[sa'+'kura]'+_0x5aa51a(0x1d6)+_0x5aa51a(0x474)+_0x5aa51a(0x1de),'qAYgq':function(_0xaa2638,_0xeb234c){return _0xaa2638+_0xeb234c;},'ODzoz':'hello','EZpfP':_0x5aa51a(0x434),'HXhxz':_0x5aa51a(0x272)+_0x5aa51a(0x470)+'ler','knDrc':_0x5aa51a(0x1bd)+'hScri'+'pt','atRPO':'Weapo'+'nMana'+'ger','HMxqV':_0x5aa51a(0x334)+_0x5aa51a(0x31a)+_0x5aa51a(0x56b),'XedVK':'Enemy'+_0x5aa51a(0x3b6),'XDjmP':_0x5aa51a(0x4c4)+'bly-C'+'Sharp'+'.dll','FhGHo':'ch.sy'+'cofor'+_0x5aa51a(0x4d8)+_0x5aa51a(0x668)+'ll','fWVzl':_0x5aa51a(0x3dc)+_0x5aa51a(0x39b),'VRyhm':'__Gen'+'erate'+'d','WBpCF':'keydo'+'wn'};var _0x464711=location[_0x5aa51a(0x3b1)+'ame']||'',_0x58c46b=/(^|\.)www\.crazygames\.com$/[_0x5aa51a(0x5ab)](_0x464711),_0x147f91=/(^|\.)games\.crazygames\.com$/['test'](_0x464711),_0x561cb7=/(^|\.)crazygames\.com$/['test'](_0x464711)&&!_0x58c46b&&!_0x147f91,_0x447760=_0x58c46b?_0x40b937[_0x5aa51a(0x66a)]:_0x147f91?'wrapp'+'er':_0x40b937['qbrJF'];if(_0x40b937['jVUfv'](!_0x58c46b,!_0x147f91)&&!_0x561cb7)return;var _0x363dbc=_0x5aa51a(0x23d)+'b1',_0x9f5c8f='__sak'+'ura_s'+'w_v2',_0x141300=_0x5aa51a(0x408)+_0x5aa51a(0x247)+_0x5aa51a(0x2f9)+'WARZ-'+'BEGIN'+_0x5aa51a(0x547),_0x544bec=_0x40b937[_0x5aa51a(0x2f0)],_0x527f5d='2.2.2';if(_0x147f91){if(_0x40b937[_0x5aa51a(0x4ba)]('MUBmq',_0x5aa51a(0x321))){window[_0x5aa51a(0x209)+_0x5aa51a(0x4bc)+_0x5aa51a(0x63e)+'r'](_0x40b937[_0x5aa51a(0x21c)],function(_0x461a5d){var _0x3813a2=_0x5aa51a,_0xe9d0c4=_0x461a5d[_0x3813a2(0x216)];if(!_0xe9d0c4||_0xe9d0c4['__sak'+'ura']!==_0x9f5c8f)return;try{if(window[_0x3813a2(0x430)+'t']&&_0x40b937[_0x3813a2(0x2e2)](window['paren'+'t'],window))window[_0x3813a2(0x430)+'t']['postM'+_0x3813a2(0x3ce)+'e'](_0xe9d0c4,'*');if(window['top']&&window[_0x3813a2(0x49b)]!==window)window['top'][_0x3813a2(0x40e)+_0x3813a2(0x3ce)+'e'](_0xe9d0c4,'*');}catch(_0x30c3cc){}}),console[_0x5aa51a(0x609)](_0x5aa51a(0x639)+'kura]'+_0x5aa51a(0x669)+_0x5aa51a(0x1df)+'R\x20ACT'+'IVE\x20('+'relay'+'\x20only'+')',_0x5aa51a(0x494)+':'+_0x363dbc);return;}else{var _0x1b73ee=_0x88d828['creat'+'eElem'+_0x5aa51a(0x5a5)](_0x40b937[_0x5aa51a(0x403)]);_0x1b73ee['value']=_0x7f47dd;if(!_0x3e5aa3['body'])return;_0x21a36f['body'][_0x5aa51a(0x607)+_0x5aa51a(0x2ee)+'d'](_0x1b73ee),_0x1b73ee[_0x5aa51a(0x26a)+'t']();try{_0x3ee3e6['execC'+_0x5aa51a(0x587)+'d'](_0x5aa51a(0x22b)),_0x3709f4();}catch(_0x30ec0a){}_0x1b73ee[_0x5aa51a(0x358)+'e']();}}if(_0x58c46b){console[_0x5aa51a(0x609)](_0x40b937[_0x5aa51a(0x64b)],_0x40b937[_0x5aa51a(0x2c4)](_0x40b937[_0x5aa51a(0x445)],_0x363dbc)+(';font'+_0x5aa51a(0x565)+'ht:70'+'0'),{'host':_0x464711});var _0x307adf={'set':function(){},'command':function(){}};function _0x36e58a(_0x4de85b,_0x1c4bdd){var _0x4ab60e=_0x5aa51a,_0x231b78={'__sakura':_0x9f5c8f,'kind':'cmd','cmd':_0x4de85b,'arg':_0x1c4bdd};try{if('qCoUD'!==_0x4ab60e(0x2fc))return _0x287e26(_0x56a28c);else{var _0x3b2c96=document[_0x4ab60e(0x3fb)+_0x4ab60e(0x1e6)+'torAl'+'l'](_0x40b937['WsyLi']);for(var _0x7fe265=0x1*-0xc5+-0x23*-0x43+-0x864;_0x40b937[_0x4ab60e(0x65b)](_0x7fe265,_0x3b2c96[_0x4ab60e(0x614)+'h']);_0x7fe265++){try{if(_0x3b2c96[_0x7fe265][_0x4ab60e(0x37d)+_0x4ab60e(0x4db)+'dow'])_0x3b2c96[_0x7fe265][_0x4ab60e(0x37d)+_0x4ab60e(0x4db)+'dow'][_0x4ab60e(0x40e)+_0x4ab60e(0x3ce)+'e'](_0x231b78,'*');}catch(_0x517e30){}}}}catch(_0xfc1c08){}try{var _0xca497=new BroadcastChannel(_0x40b937['hDLLH']);_0xca497[_0x4ab60e(0x40e)+_0x4ab60e(0x3ce)+'e'](_0x231b78),_0x40b937[_0x4ab60e(0x205)](setTimeout,function(){var _0x4c94fb=_0x4ab60e;try{if(_0x4c94fb(0x5d9)!==_0x4c94fb(0x1e0))_0xca497['close']();else return new _0xa2bae(_0x25f012['buffe'+'r'],_0x4791d2['byteO'+_0x4c94fb(0x2c3)],_0x48c207[_0x4c94fb(0x484)+_0x4c94fb(0x20f)]);}catch(_0x4a20df){}},0x95e+0x1*0x1b73+-0x23d7);}catch(_0x17a99f){}}function _0x22cac4(){var _0xc76c76=_0x5aa51a,_0x467aa8={'txHSU':function(_0x230855){return _0x230855();}},_0x2f2e04=document['getEl'+_0xc76c76(0x52c)+_0xc76c76(0x5b1)]('sakur'+_0xc76c76(0x4f5)+'v2');if(_0x2f2e04)return _0x2f2e04;if(!document[_0xc76c76(0x32c)]||!document[_0xc76c76(0x32c)][_0xc76c76(0x607)+'dChil'+'d'])return null;try{if('bMpmY'!==_0xc76c76(0x3a8)){var _0xbea939=_0x40b937[_0xc76c76(0x63c)]['split']('|'),_0x1bac23=-0x1739+0x17b7+-0x7e;while(!![]){switch(_0xbea939[_0x1bac23++]){case'0':_0x2f2e04['id']=_0xc76c76(0x404)+_0xc76c76(0x4f5)+'v2';continue;case'1':return _0x2f2e04;case'2':_0x2f2e04=document[_0xc76c76(0x46d)+_0xc76c76(0x4a4)+'ent']('div');continue;case'3':document[_0xc76c76(0x32c)][_0xc76c76(0x607)+'dChil'+'d'](_0x2f2e04);continue;case'4':if(!document['getEl'+_0xc76c76(0x52c)+_0xc76c76(0x5b1)]('sakur'+_0xc76c76(0x4f5)+_0xc76c76(0x354)+'s')){var _0x17270b=document[_0xc76c76(0x46d)+'eElem'+'ent'](_0xc76c76(0x5d7));_0x17270b['id']=_0x40b937['KdSxD'],_0x17270b['textC'+_0xc76c76(0x504)+'t']=_0xc76c76(0x5d6)+_0xc76c76(0x4b9)+_0xc76c76(0x5ad)+'ll:in'+'itial'+'}',(document['head']||document[_0xc76c76(0x3dd)+'entEl'+_0xc76c76(0x52c)])['appen'+'dChil'+'d'](_0x17270b);}continue;}break;}}else _0x14870d=_0x467aa8['txHSU'](_0x1e7d20);}catch(_0x3b8e38){return null;}}function _0x512ddf(){var _0x431058=_0x5aa51a;if(_0x40b937['cFrJb']===_0x40b937[_0x431058(0x338)]){var _0x49610f=_0x22cac4();if(!_0x49610f)return _0x307adf;if(_0x49610f['datas'+'et']['api'])return _0x49610f[_0x431058(0x1c8)];try{return _0x206965(_0x49610f);}catch(_0x1f1ee7){return _0x49610f[_0x431058(0x29f)+'et']['api']='1',_0x49610f['api']=_0x307adf,console['warn'](_0x431058(0x639)+'kura]'+_0x431058(0x23a)+'l\x20dis'+'abled',_0x40b937['ynpEa']+_0x363dbc,_0x1f1ee7),_0x307adf;}}else try{return _0x2d0dcd&&_0x340773['buffe'+'r']?_0xb22672[_0x431058(0x41f)+'r']['byteL'+_0x431058(0x20f)]:-0x78c+0x1e15+0x3*-0x783;}catch(_0x4e623e){return-0x7*0x54d+0x7c7*0x4+0x1*0x5ff;}}function _0x206965(_0x2c7d55){var _0x1bcf8f=_0x5aa51a,_0x37abb3={'YnfYL':_0x1bcf8f(0x423),'nhOSm':_0x40b937['lTUhr'],'RywtH':'Speed'+'\x20off','wVIJP':'trans'+_0x1bcf8f(0x430)+'t','pRPOQ':_0x40b937[_0x1bcf8f(0x610)],'QPOOW':function(_0x5a72e3,_0x2e65c6){return _0x5a72e3|_0x2e65c6;},'AVglW':function(_0x3a675e,_0x4fc9ee){return _0x3a675e+_0x4fc9ee;}};_0x2c7d55[_0x1bcf8f(0x5d7)]['cssTe'+'xt']=_0x40b937[_0x1bcf8f(0x500)](_0x1bcf8f(0x447)+_0x1bcf8f(0x62c)+_0x1bcf8f(0x291)+'left:'+_0x1bcf8f(0x532)+_0x1bcf8f(0x4f7)+'2px;z'+_0x1bcf8f(0x5b8)+'x:214'+'74830'+_0x1bcf8f(0x417)+'dth:m'+_0x1bcf8f(0x4d3)+_0x1bcf8f(0x367)+_0x1bcf8f(0x5bd)+_0x1bcf8f(0x23f)+_0x1bcf8f(0x2f8)+':78vh'+';'+('backg'+_0x1bcf8f(0x37f)+_0x1bcf8f(0x29e)+_0x1bcf8f(0x47a)+'olor:'+'#f7ee'+'f5;bo'+_0x1bcf8f(0x451)+'1px\x20s'+_0x1bcf8f(0x66f)+'rgba('+'255,1'+'43,17'+'7,.5)'+';bord'+'er-ra'+_0x1bcf8f(0x65f)+_0x1bcf8f(0x2f5)),_0x40b937[_0x1bcf8f(0x292)])+_0x40b937[_0x1bcf8f(0x56a)],_0x2c7d55[_0x1bcf8f(0x2fd)+_0x1bcf8f(0x40f)]=_0x40b937[_0x1bcf8f(0x65e)](_0x40b937[_0x1bcf8f(0x21a)](_0x40b937['FMoGg'](_0x40b937['iIQWp'](_0x40b937['USaXb'](_0x40b937[_0x1bcf8f(0x21a)](_0x40b937[_0x1bcf8f(0x1ee)](_0x40b937[_0x1bcf8f(0x34f)](_0x40b937['IOLPY']+(_0x1bcf8f(0x64f)+_0x1bcf8f(0x618)+_0x1bcf8f(0x494)+':'),_0x363dbc)+('\x22>sak'+'ura\x20·'+'\x20skil'+_0x1bcf8f(0x63d)+'</b>')+_0x40b937['XaCqA'],_0x1bcf8f(0x399)+_0x1bcf8f(0x34a)+_0x1bcf8f(0x4e0)+'tatus'+_0x1bcf8f(0x4a9)+_0x1bcf8f(0x213)+_0x1bcf8f(0x1bb)+_0x1bcf8f(0x1ec)+'c9\x22>w'+'aitin'+'g\x20for'+'\x20game'+_0x1bcf8f(0x657)+'e…</s'+_0x1bcf8f(0x2a5)),_0x1bcf8f(0x43f)+'on\x20id'+'=\x22sw2'+_0x1bcf8f(0x4b2)+'\x22\x20sty'+'le=\x22d'+_0x1bcf8f(0x28f)+'y:non'+'e;mar'+_0x1bcf8f(0x2d0)+'eft:a'+'uto;b'+_0x1bcf8f(0x3c0)+'ound:')+_0x363dbc+(';bord'+_0x1bcf8f(0x266)+_0x1bcf8f(0x494)+':#2a0'+_0x1bcf8f(0x555)+_0x1bcf8f(0x546)+_0x1bcf8f(0x269)+'us:7p'+'x;pad'+_0x1bcf8f(0x5aa)+_0x1bcf8f(0x3bd)+_0x1bcf8f(0x225)+_0x1bcf8f(0x46b)+_0x1bcf8f(0x2f8)+':700;'+_0x1bcf8f(0x2d5)+_0x1bcf8f(0x43b)+_0x1bcf8f(0x288)+_0x1bcf8f(0x649)+'y\x20JSO'+'N</bu'+_0x1bcf8f(0x2bb))+_0x40b937[_0x1bcf8f(0x34b)],_0x1bcf8f(0x1ba)+'>')+(_0x1bcf8f(0x400)+_0x1bcf8f(0x5d7)+_0x1bcf8f(0x496)+_0x1bcf8f(0x5aa)+'8px\x201'+_0x1bcf8f(0x4de)+_0x1bcf8f(0x546)+_0x1bcf8f(0x2ae)+'om:1p'+_0x1bcf8f(0x5d0)+'id\x20rg'+_0x1bcf8f(0x65d)+'5,143'+',177,'+_0x1bcf8f(0x63b)+_0x1bcf8f(0x420)+'ay:fl'+_0x1bcf8f(0x37e)+'p:8px'+_0x1bcf8f(0x29b)+_0x1bcf8f(0x3c8)+'ms:ce'+_0x1bcf8f(0x288)+_0x1bcf8f(0x448)+_0x1bcf8f(0x599)+'uto;f'+'lex-w'+'rap:w'+_0x1bcf8f(0x3a2)+'>'),'<butt'+_0x1bcf8f(0x508)+_0x1bcf8f(0x200)+'-spee'+_0x1bcf8f(0x55a)+'yle=\x22'+_0x1bcf8f(0x5c2)+'round'+':tran'+'spare'+_0x1bcf8f(0x576)+_0x1bcf8f(0x451)+'1px\x20s'+_0x1bcf8f(0x66f)+_0x1bcf8f(0x3b9)+_0x1bcf8f(0x214)+'43,17'+_0x1bcf8f(0x569)+';colo'+_0x1bcf8f(0x1fe)+'eef5;'+_0x1bcf8f(0x459)+'r-rad'+'ius:7'+_0x1bcf8f(0x2ac)+'dding'+_0x1bcf8f(0x590)+'10px;'+_0x1bcf8f(0x2d5)+'r:poi'+_0x1bcf8f(0x288)+_0x1bcf8f(0x31d)+'ed\x20of'+'f</bu'+_0x1bcf8f(0x2bb))+('<inpu'+'t\x20id='+_0x1bcf8f(0x316)+'facto'+_0x1bcf8f(0x3a6)+_0x1bcf8f(0x461)+_0x1bcf8f(0x644)+'\x20min='+_0x1bcf8f(0x215)+'ax=\x225'+_0x1bcf8f(0x1ab)+_0x1bcf8f(0x594)+'1\x22\x20va'+_0x1bcf8f(0x574)+_0x1bcf8f(0x597)+_0x1bcf8f(0x618)+_0x1bcf8f(0x4e9)+_0x1bcf8f(0x50e)+_0x1bcf8f(0x22d)+'ent-c'+'olor:')+_0x363dbc+_0x40b937['fsvIg'],_0x40b937['eznXG']),_0x40b937[_0x1bcf8f(0x1e7)])+_0x40b937['pPKFq'],_0x1bcf8f(0x1ba)+'>')+(_0x1bcf8f(0x37c)+_0x1bcf8f(0x53f)+_0x1bcf8f(0x254)+_0x1bcf8f(0x5a4)+_0x1bcf8f(0x618)+_0x1bcf8f(0x4fa)+_0x1bcf8f(0x458)+_0x1bcf8f(0x255)+_0x1bcf8f(0x550)+'x\x2012p'+_0x1bcf8f(0x66b)+'rflow'+_0x1bcf8f(0x372)+_0x1bcf8f(0x3e7)+_0x1bcf8f(0x2aa)+_0x1bcf8f(0x351)+_0x1bcf8f(0x4c6)+_0x1bcf8f(0x3e4)+'e:pre'+_0x1bcf8f(0x2da)+_0x1bcf8f(0x314)+_0x1bcf8f(0x559)+_0x1bcf8f(0x357)+'ak-wo'+'rd;fo'+'nt:in'+'herit'+';')+(_0x1bcf8f(0x23f)+_0x1bcf8f(0x2f8)+_0x1bcf8f(0x475)+';\x22>No'+_0x1bcf8f(0x5c8)+'rt\x20ye'+'t.\x0a\x0aT'+_0x1bcf8f(0x4dc)+_0x1bcf8f(0x1c5)+_0x1bcf8f(0x388)+_0x1bcf8f(0x463)+'self\x20'+_0x1bcf8f(0x278)+'the\x20g'+'ame\x20f'+_0x1bcf8f(0x20e)+'loads'+'\x20—\x20no'+_0x1bcf8f(0x25e)+_0x1bcf8f(0x1b0)+_0x1bcf8f(0x523)+'.\x0a\x0aIf'+'\x20it\x20s'+'tays\x20'+'empty'+_0x1bcf8f(0x43d)+_0x1bcf8f(0x374)+_0x1bcf8f(0x48d)+_0x1bcf8f(0x1dc)+'t\x20inj'+_0x1bcf8f(0x53c)+_0x1bcf8f(0x5f7)+'o\x20the'+_0x1bcf8f(0x2bd)+_0x1bcf8f(0x363)+_0x1bcf8f(0x53d)+_0x1bcf8f(0x521)+_0x1bcf8f(0x663)+'</pre'+'>');var _0x9b876f=_0x2c7d55['query'+_0x1bcf8f(0x1e6)+'tor'](_0x40b937[_0x1bcf8f(0x290)]),_0x102a68=_0x2c7d55[_0x1bcf8f(0x3fb)+_0x1bcf8f(0x1e6)+_0x1bcf8f(0x5c5)](_0x40b937['rEuqL']),_0x1700ce=_0x2c7d55['query'+'Selec'+'tor'](_0x1bcf8f(0x5ef)+_0x1bcf8f(0x4cf)),_0x2f18f7=_0x2c7d55[_0x1bcf8f(0x3fb)+'Selec'+_0x1bcf8f(0x5c5)](_0x40b937[_0x1bcf8f(0x628)]),_0x23c3ee=_0x2c7d55[_0x1bcf8f(0x3fb)+'Selec'+_0x1bcf8f(0x5c5)](_0x1bcf8f(0x5ef)+'x'),_0x2d3a2d=_0x2c7d55[_0x1bcf8f(0x3fb)+_0x1bcf8f(0x1e6)+_0x1bcf8f(0x5c5)](_0x40b937[_0x1bcf8f(0x4ec)]),_0x22f8da=_0x2c7d55['query'+'Selec'+'tor']('#sw2-'+'speed'),_0x5b0f55=_0x2c7d55[_0x1bcf8f(0x3fb)+_0x1bcf8f(0x1e6)+_0x1bcf8f(0x5c5)](_0x40b937['cnIcN']),_0x5e24f2=_0x2c7d55[_0x1bcf8f(0x3fb)+'Selec'+_0x1bcf8f(0x5c5)](_0x1bcf8f(0x5ef)+_0x1bcf8f(0x3af)+_0x1bcf8f(0x281)+'l'),_0x58ae29=_0x2c7d55[_0x1bcf8f(0x3fb)+'Selec'+'tor'](_0x1bcf8f(0x5ef)+_0x1bcf8f(0x549)),_0x38b54f=null;if(_0x23c3ee)_0x23c3ee[_0x1bcf8f(0x310)+'ck']=function(){var _0x4c95c1=_0x1bcf8f,_0x59d523={'ViAye':function(_0x196d12,_0x5b9d48){return _0x196d12(_0x5b9d48);}};if(_0x37abb3['YnfYL']===_0x4c95c1(0x45d))try{return _0x2ba306();}catch(_0x5396fb){return{'version':_0xfa6f10,'when':new _0x66ba40()[_0x4c95c1(0x440)+'Strin'+'g'](),'elapsedMs':_0x142030[_0x4c95c1(0x35f)]()-_0x1a74dc,'host':_0xac7f97,'uwmk':!!(_0x5d3de5['Unity'+'WebMo'+'dkit']&&_0x560203[_0x4c95c1(0x49e)+_0x4c95c1(0x482)+_0x4c95c1(0x21d)]['Runti'+'me']),'il2CppContext':![],'arm':_0x2684c1,'hooksTotal':_0x35fe31[_0x4c95c1(0x614)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x59d523['ViAye'](_0x2ff9fa,_0x5396fb&&_0x5396fb['messa'+'ge']||_0x5396fb)};}else try{_0x2c7d55[_0x4c95c1(0x358)+'e']();}catch(_0x237c4d){}};if(_0x2d3a2d)_0x2d3a2d[_0x1bcf8f(0x310)+'ck']=function(){var _0x17a9b3=_0x1bcf8f;_0x36e58a(_0x40b937[_0x17a9b3(0x27e)]);};var _0x1b8ccf=![];function _0x1b9e8c(){var _0x582e5a=_0x1bcf8f;_0x36e58a(_0x582e5a(0x1b7),{'on':_0x1b8ccf,'factor':parseFloat(_0x5b0f55['value'])||0x7c9+-0x13*0x89+0x263});}if(_0x22f8da)_0x22f8da['oncli'+'ck']=function(){var _0x5f2871=_0x1bcf8f;_0x1b8ccf=!_0x1b8ccf,_0x22f8da['textC'+_0x5f2871(0x504)+'t']=_0x1b8ccf?_0x37abb3[_0x5f2871(0x331)]:_0x37abb3['RywtH'],_0x22f8da['style'][_0x5f2871(0x5c2)+_0x5f2871(0x37f)]=_0x1b8ccf?_0x363dbc:_0x37abb3['wVIJP'],_0x22f8da['style'][_0x5f2871(0x494)]=_0x1b8ccf?'#2a0f'+'1b':_0x37abb3[_0x5f2871(0x4c3)],_0x1b9e8c();};if(_0x5b0f55)_0x5b0f55['oninp'+'ut']=function(){var _0x15ae3d=_0x1bcf8f;if(_0x5e24f2)_0x5e24f2['textC'+'onten'+'t']=(parseFloat(_0x5b0f55[_0x15ae3d(0x319)])||0x8e*0x36+0x3*-0x42b+-0x1172)[_0x15ae3d(0x253)+'ed'](0xa*-0x40+0x1090+-0xe0f)+'x';_0x1b9e8c();};if(_0x2f18f7)_0x2f18f7[_0x1bcf8f(0x310)+'ck']=function(){var _0x254631=_0x1bcf8f,_0x1a4706={'PWqci':_0x40b937[_0x254631(0x54e)],'sdTjn':_0x254631(0x23b),'FvjbR':_0x254631(0x29c)+'rea'},_0x2e15e7=_0x40b937['FMoGg'](_0x141300+'\x0a',_0x38b54f?JSON[_0x254631(0x1aa)+_0x254631(0x589)](_0x38b54f,null,0x5*-0x14b+0x76d+-0xf5*0x1):'')+'\x0a'+_0x544bec,_0x3a63fa=function(){var _0x3b4cdf=_0x254631;if(_0x2f18f7)_0x2f18f7['textC'+_0x3b4cdf(0x504)+'t']=_0x3b4cdf(0x4b6)+'d';};if(navigator['clipb'+_0x254631(0x294)]&&navigator[_0x254631(0x335)+_0x254631(0x294)]['write'+'Text']){if(_0x40b937['HqYcu'](_0x40b937[_0x254631(0x59c)],_0x254631(0x661)))return _0x4674ff[0x1*0x135b+-0x19e3+0x688]=_0x37abb3[_0x254631(0x5c9)](_0x2e60e1,-0x15af+-0x2262+0x1cf*0x1f),_0x439f02[0x1*-0x1f46+0x1246+-0x8*-0x1a0];else navigator[_0x254631(0x335)+_0x254631(0x294)]['write'+'Text'](_0x2e15e7)[_0x254631(0x224)](_0x3a63fa,function(){_0x377ab5();});}else _0x40b937['VdJWr'](_0x377ab5);function _0x377ab5(){var _0x457259=_0x254631;if(_0x1a4706[_0x457259(0x1ff)]==='arRtv'){var _0x7d7894=document[_0x457259(0x46d)+_0x457259(0x4a4)+'ent'](_0x1a4706[_0x457259(0x1f1)]);_0x7d7894['value']=_0x2e15e7;if(!document['body'])return;document['body'][_0x457259(0x607)+_0x457259(0x2ee)+'d'](_0x7d7894),_0x7d7894['selec'+'t']();try{document['execC'+'omman'+'d']('copy'),_0x3a63fa();}catch(_0x4bbed9){}_0x7d7894[_0x457259(0x358)+'e']();}else _0x2f1683['defin'+'eProp'+'erty'](_0x193167,_0x1a4706[_0x457259(0x262)],{'value':_0x21b271[_0x457259(0x36e)],'configurable':!![]});}};_0x40b937['VKcFD'](setTimeout,function(){var _0x59f498=_0x1bcf8f;if(_0x38b54f)return;if(!_0x9b876f||!_0x1700ce)return;_0x9b876f[_0x59f498(0x5f0)+_0x59f498(0x504)+'t']=_0x59f498(0x5d3)+_0x59f498(0x228)+'after'+'\x2060s\x20'+_0x59f498(0x5f3)+_0x59f498(0x1fb)+'t\x20inj'+_0x59f498(0x596)+'?',_0x9b876f[_0x59f498(0x5d7)][_0x59f498(0x494)]=_0x59f498(0x57e)+'c7',_0x1700ce['textC'+_0x59f498(0x504)+'t']=_0x40b937['FMoGg'](_0x40b937['odQcf'](_0x40b937[_0x59f498(0x65e)](_0x40b937[_0x59f498(0x3f4)](_0x40b937[_0x59f498(0x211)],'This\x20'+_0x59f498(0x1b3)+'\x20prov'+_0x59f498(0x4d5)+_0x59f498(0x207)+_0x59f498(0x3d5)+_0x59f498(0x283)+_0x59f498(0x46a)+'alled'+'\x20and\x20'+'runni'+_0x59f498(0x3d8)+_0x59f498(0x62f)+_0x59f498(0x2c2)+_0x59f498(0x41b)),_0x59f498(0x44e)+_0x59f498(0x3bb)+_0x59f498(0x32f)+_0x59f498(0x414)+_0x59f498(0x3ab)+'\x20are:'+'\x0a\x0a')+('\x20\x201.\x20'+_0x59f498(0x5ca)+_0x59f498(0x2e8)+_0x59f498(0x3f8)+_0x59f498(0x39a)+'injec'+'ting\x20'+_0x59f498(0x3aa)+_0x59f498(0x4a6)+_0x59f498(0x5f6)+'origi'+_0x59f498(0x1f5)+_0x59f498(0x467))+(_0x59f498(0x1a4)+_0x59f498(0x317)+_0x59f498(0x2fe)+_0x59f498(0x298)+_0x59f498(0x47b)+_0x59f498(0x56f)+'oaded'+'\x20sinc'+_0x59f498(0x2ef)+_0x59f498(0x1ea)+_0x59f498(0x44f)),'\x20\x203.\x20'+_0x59f498(0x345)+'sakur'+_0x59f498(0x320)+_0x59f498(0x419)+_0x59f498(0x31e)+_0x59f498(0x2b5)+'AND\x20t'+'he\x20ol'+_0x59f498(0x2ab)+'g\x20scr'+_0x59f498(0x542)+_0x59f498(0x301)),_0x40b937[_0x59f498(0x466)])+(_0x59f498(0x20a)+_0x59f498(0x3e3)+'\x20game'+'\x20page'+_0x59f498(0x626)+'\x20and\x20'+_0x59f498(0x602)+_0x59f498(0x486)+'\x20pane'+_0x59f498(0x1dd)+_0x59f498(0x3c7));},-0x192a7+0x291*-0x8+0x2918f);var _0x3b43dd={'set':function(_0xa46979){var _0x2d5d3b=_0x1bcf8f;if(_0x40b937['ywwlJ'](_0x40b937[_0x2d5d3b(0x3d2)],_0x40b937[_0x2d5d3b(0x51a)]))_0x382764[_0x2d5d3b(0x358)+'e']();else{_0x38b54f=_0xa46979;if(_0x2f18f7)_0x2f18f7[_0x2d5d3b(0x5d7)]['displ'+'ay']='';if(_0x102a68){if(_0x2d5d3b(0x58a)!=='QCRSL'){_0x102a68[_0x2d5d3b(0x5f0)+'onten'+'t']=_0x40b937['AMKJe']('v',_0xa46979[_0x2d5d3b(0x27b)+'on']||'?');var _0x56a480=_0x527f5d,_0x49da6b=_0xa46979[_0x2d5d3b(0x27b)+'on']||'';_0x102a68['style']['color']=_0x40b937[_0x2d5d3b(0x62b)](_0x49da6b,_0x56a480)?_0x363dbc:_0x40b937[_0x2d5d3b(0x655)],_0x102a68[_0x2d5d3b(0x5d7)]['borde'+'rColo'+'r']=_0x40b937['LZGFZ'](_0x49da6b,_0x56a480)?'rgba('+_0x2d5d3b(0x214)+'43,17'+'7,.35'+')':'#ff6e'+'74';}else return 0x469*0x2+-0x753*0x5+0x1bcd;}var _0x26a86d=_0xa46979['insta'+_0x2d5d3b(0x617)]&&_0xa46979[_0x2d5d3b(0x552)+_0x2d5d3b(0x617)][_0x2d5d3b(0x272)+_0x2d5d3b(0x470)+_0x2d5d3b(0x35d)],_0x3ffc98=Math['round'](_0x40b937[_0x2d5d3b(0x289)](_0xa46979[_0x2d5d3b(0x1f6)+_0x2d5d3b(0x32b)]||-0x2a*-0xd3+-0x3*0x9fb+-0x39*0x15,-0x10*0x211+0x268+0x2290));if(_0x9b876f){if(_0x2d5d3b(0x381)!==_0x40b937['ViVvV'])return _0x3198d9&&_0x4e1256[_0x2d5d3b(0x41f)+'r']?_0xa4c537['buffe'+'r'][_0x2d5d3b(0x484)+_0x2d5d3b(0x20f)]:-0x1*0x32a+-0x16*0x1a8+0x112*0x25;else{var _0x36c14f,_0x68d843;if(_0x26a86d&&_0xa46979['surve'+'y']&&_0xa46979[_0x2d5d3b(0x3fc)+'y'][_0x2d5d3b(0x272)+_0x2d5d3b(0x470)+'ler'])_0x36c14f=_0x40b937[_0x2d5d3b(0x65e)](_0x40b937[_0x2d5d3b(0x65e)]('LIVE\x20'+'·\x20',Object['keys'](_0xa46979[_0x2d5d3b(0x552)+'nces'])[_0x2d5d3b(0x614)+'h'])+(_0x2d5d3b(0x29d)+'cts\x20·'+'\x20'),_0x3ffc98)+'s',_0x68d843='#7ee0'+'a8';else{if(_0x40b937['udlYv'](_0xa46979[_0x2d5d3b(0x623)+_0x2d5d3b(0x416)+'ed'],-0xba7+-0x5e*0x12+-0x5*-0x3a7))_0x36c14f=_0x40b937[_0x2d5d3b(0x65e)](_0x40b937[_0x2d5d3b(0x1c9)]+_0x3ffc98,'s'),_0x68d843=_0x2d5d3b(0x2a2)+'8a';else _0xa46979[_0x2d5d3b(0x347)+_0x2d5d3b(0x277)]?(_0x36c14f=_0x40b937[_0x2d5d3b(0x3f4)]('metad'+'ata\x20r'+_0x2d5d3b(0x4d9)+'·\x20'+_0x3ffc98,'s'),_0x68d843=_0x40b937[_0x2d5d3b(0x493)]):(_0x36c14f=_0x40b937['lCrAP']((_0xa46979['arm']&&_0xa46979['arm']['ok']?'armed'+'\x20·\x20':_0x40b937[_0x2d5d3b(0x59f)])+_0x3ffc98,'s'),_0x68d843=_0x2d5d3b(0x2a2)+'8a');}_0x9b876f['textC'+'onten'+'t']=_0x36c14f,_0x9b876f[_0x2d5d3b(0x5d7)][_0x2d5d3b(0x494)]=_0x68d843;}}_0x58ae29&&(_0x58ae29['textC'+_0x2d5d3b(0x504)+'t']=_0xa46979['diff']&&_0xa46979[_0x2d5d3b(0x640)]['lengt'+'h']?_0x40b937['odQcf']('Diff\x20'+_0x2d5d3b(0x633)+_0x2d5d3b(0x4b8)+'t:\x20',_0xa46979['diff'][_0x2d5d3b(0x653)](',\x20')):_0x40b937['QqYlo']);if(_0xa46979['speed']&&_0x22f8da){_0x1b8ccf=!!_0xa46979['speed']['on'],_0x22f8da['textC'+_0x2d5d3b(0x504)+'t']=_0x1b8ccf?_0x40b937['lTUhr']:'Speed'+_0x2d5d3b(0x622),_0x22f8da[_0x2d5d3b(0x5d7)][_0x2d5d3b(0x5c2)+'round']=_0x1b8ccf?_0x363dbc:_0x2d5d3b(0x525)+'paren'+'t',_0x22f8da['style']['color']=_0x1b8ccf?_0x40b937['keFOQ']:_0x2d5d3b(0x22a)+'f5';if(_0x5e24f2&&_0xa46979[_0x2d5d3b(0x1b7)][_0x2d5d3b(0x3af)+'r']){if('yFQoi'===_0x2d5d3b(0x464))return _0x37abb3[_0x2d5d3b(0x1b6)](_0x496066,_0xe63ccc[_0x4c9707][_0x2d5d3b(0x614)+'h']);else _0x5e24f2['textC'+'onten'+'t']=Number(_0xa46979[_0x2d5d3b(0x1b7)]['facto'+'r'])[_0x2d5d3b(0x253)+'ed'](0x2435+-0x1*0xd42+-0x16f2)+'x';}}if(_0x1700ce)try{_0x1700ce[_0x2d5d3b(0x5f0)+_0x2d5d3b(0x504)+'t']=_0x3dad56(_0xa46979);}catch(_0x3cffcc){_0x1700ce['textC'+_0x2d5d3b(0x504)+'t']=JSON['strin'+_0x2d5d3b(0x589)](_0xa46979,null,0x3bb+-0xe8e*-0x1+-0x1248);}console['log'](_0x40b937['SdKgw'],_0x40b937[_0x2d5d3b(0x34f)]('color'+':',_0x363dbc)+_0x40b937[_0x2d5d3b(0x522)],_0xa46979),console[_0x2d5d3b(0x609)](_0x40b937[_0x2d5d3b(0x34f)](_0x141300+'\x0a'+JSON['strin'+_0x2d5d3b(0x589)](_0xa46979,null,-0x123e+-0x143*0x1c+0x3593),'\x0a')+_0x544bec);}}};return _0x2c7d55[_0x1bcf8f(0x29f)+'et']['api']='1',_0x2c7d55[_0x1bcf8f(0x1c8)]=_0x3b43dd,_0x3b43dd;}function _0x3dad56(_0x992f00){var _0x41aff9=_0x5aa51a,_0x276212={'tiJPf':function(_0x2ed237){return _0x2ed237();}},_0x1e238a=[];_0x1e238a[_0x41aff9(0x361)](_0x40b937[_0x41aff9(0x3f4)](_0x40b937['odQcf'](_0x41aff9(0x3a4)+'\x20\x20\x20\x20'+(_0x992f00[_0x41aff9(0x1d9)]||'?'),_0x40b937['usNVv']),Math[_0x41aff9(0x37f)]((_0x992f00[_0x41aff9(0x1f6)+_0x41aff9(0x32b)]||0xb0f+0x51a+-0x15*0xc5)/(-0x137f*0x1+0xde6+-0x981*-0x1)))+'s)'),_0x1e238a[_0x41aff9(0x361)](_0x40b937[_0x41aff9(0x4df)](_0x40b937[_0x41aff9(0x34f)](_0x40b937['HfYqc']('uwmk\x20'+'\x20\x20\x20\x20',_0x992f00['uwmk']?_0x40b937['puCGL']:'no'),_0x40b937[_0x41aff9(0x38f)])+(_0x992f00[_0x41aff9(0x409)+'pCont'+_0x41aff9(0x222)]?_0x41aff9(0x3f1):'no'),_0x40b937[_0x41aff9(0x61b)])+(_0x40b937[_0x41aff9(0x242)](_0x992f00[_0x41aff9(0x51d)+_0x41aff9(0x340)],null)?_0x992f00[_0x41aff9(0x51d)+_0x41aff9(0x340)]:'?')),_0x1e238a[_0x41aff9(0x361)](_0x40b937['USaXb'](_0x40b937[_0x41aff9(0x5a2)](_0x40b937[_0x41aff9(0x2d2)]+_0x992f00['hooks'+'Appli'+'ed'],'/'),_0x992f00['hooks'+_0x41aff9(0x646)])+_0x40b937[_0x41aff9(0x581)]),_0x1e238a[_0x41aff9(0x361)]('');var _0x53d39b=_0x992f00[_0x41aff9(0x552)+_0x41aff9(0x617)]||{},_0x82f7a6=Object['keys'](_0x53d39b);!_0x82f7a6['lengt'+'h']&&(_0x1e238a['push'](_0x41aff9(0x3d4)+_0x41aff9(0x389)+'jects'+_0x41aff9(0x3d1)+_0x41aff9(0x364)+_0x41aff9(0x442)),_0x1e238a['push'](''),_0x1e238a[_0x41aff9(0x361)](_0x40b937['gNbua']),_0x1e238a[_0x41aff9(0x361)](_0x40b937[_0x41aff9(0x21e)]));for(var _0x58ddd0=0xa6+0x7e6+-0x88c;_0x58ddd0<_0x82f7a6[_0x41aff9(0x614)+'h'];_0x58ddd0++){var _0x4231a5=_0x82f7a6[_0x58ddd0];_0x1e238a[_0x41aff9(0x361)](_0x40b937[_0x41aff9(0x34f)](_0x4231a5,_0x40b937['rMvnq'])+_0x53d39b[_0x4231a5]);}_0x1e238a[_0x41aff9(0x361)]('');var _0x54d5e5=_0x992f00['surve'+'y']||{},_0x27cf82=Object[_0x41aff9(0x3ff)](_0x54d5e5);for(var _0x265055=0xc42+0x1*-0xaf4+-0x14e;_0x265055<_0x27cf82[_0x41aff9(0x614)+'h'];_0x265055++){var _0x4781bf=_0x27cf82[_0x265055],_0x4f08c7=_0x54d5e5[_0x4781bf];if(!_0x4f08c7||!_0x4f08c7[_0x41aff9(0x614)+'h'])continue;_0x1e238a[_0x41aff9(0x361)](_0x41aff9(0x48a)+_0x4781bf+'\x20'+new Array(Math['max'](0xa*0xc4+-0x23e3*0x1+-0x1a*-0x116,-0x41*0x78+0x9fe+0x149c-_0x4781bf['lengt'+'h']))[_0x41aff9(0x653)]('─')),_0x1e238a[_0x41aff9(0x361)](_0x41aff9(0x545)+_0x41aff9(0x656)+_0x41aff9(0x54d)+'\x20\x20\x20\x20\x20'+_0x41aff9(0x39e)+'lue\x20\x20'+'\x20\x20\x20\x20\x20'+_0x41aff9(0x4ef)+'raw');for(var _0x564d3c=0x2*-0x1f3+-0x24c2+0x28a8;_0x564d3c<_0x4f08c7[_0x41aff9(0x614)+'h'];_0x564d3c++){var _0x476fd6=_0x4f08c7[_0x564d3c],_0x32af6f=typeof _0x476fd6['v']===_0x40b937['SmXrX']?_0x40b937[_0x41aff9(0x289)](Math[_0x41aff9(0x37f)](_0x476fd6['v']*(0x4a*0x53+-0x1719+0x303)),-0x1*-0x20ff+-0x8cf+-0x1448):_0x476fd6['v'];_0x1e238a[_0x41aff9(0x361)](_0x40b937['eKFUv']('\x20\x20'+('0x'+_0x476fd6['o']['toStr'+_0x41aff9(0x2cf)](-0x99a+0x24a9+-0x1aff))[_0x41aff9(0x53b)+'d'](-0xc*-0x25f+0xb4d*-0x3+0x57b)+'\x20'+_0x476fd6['k']['padEn'+'d'](0xddf+-0x1dd8+0x1004)+'\x20'+String(_0x32af6f)['padEn'+'d'](0xff9+-0x1*0x111f+-0x2*-0x9b)+'\x20',_0x476fd6['raw']||''));}_0x1e238a[_0x41aff9(0x361)]('');}if(_0x992f00['warni'+'ngs']&&_0x992f00[_0x41aff9(0x5f1)+_0x41aff9(0x313)][_0x41aff9(0x614)+'h']){if(_0x40b937[_0x41aff9(0x2e2)](_0x41aff9(0x396),_0x41aff9(0x396)))_0x1b1527[_0x41aff9(0x335)+_0x41aff9(0x294)][_0x41aff9(0x22e)+'Text'](_0x5edebe)['then'](_0x2e16bb,function(){_0x276212['tiJPf'](_0x32591f);});else{_0x1e238a[_0x41aff9(0x361)](_0x40b937[_0x41aff9(0x518)]);for(var _0x56029f=-0x1*-0xedf+-0x2621+0x1*0x1742;_0x40b937[_0x41aff9(0x65b)](_0x56029f,_0x992f00['warni'+_0x41aff9(0x313)]['lengt'+'h']);_0x56029f++)_0x1e238a['push'](_0x40b937[_0x41aff9(0x5c4)]('\x20\x20!\x20',_0x992f00['warni'+'ngs'][_0x56029f]));}}return _0x1e238a['join']('\x0a');}window['addEv'+_0x5aa51a(0x4bc)+_0x5aa51a(0x63e)+'r']('messa'+'ge',function(_0x40f811){var _0x4e867d=_0x5aa51a,_0x173967={'LCOgI':function(_0x21d1b0,_0x354e07){return _0x21d1b0===_0x354e07;},'QjLvF':_0x40b937[_0x4e867d(0x613)],'AIPCM':_0x40b937[_0x4e867d(0x3b3)]};if(_0x4e867d(0x1e9)==='tYaoV'){var _0x2c55fb=_0x40f811['data'];if(!_0x2c55fb||_0x40b937[_0x4e867d(0x60c)](_0x2c55fb['__sak'+'ura'],_0x9f5c8f))return;try{if(_0x40b937['NhPWc']('HxjQt',_0x40b937['DeBKG']))_0x4f698a=_0x40b937[_0x4e867d(0x5c4)](_0x5b75f5[_0x4e867d(0x566)]&&_0x2355f3['arm']['ok']?_0x40b937['avHpe']:_0x40b937[_0x4e867d(0x59f)],_0x5f4216)+'s',_0x2841a1=_0x40b937[_0x4e867d(0x493)];else{if(_0x2c55fb[_0x4e867d(0x31c)]===_0x4e867d(0x520)){_0x512ddf()['set']({'host':_0x2c55fb[_0x4e867d(0x1d9)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2c55fb['kind']===_0x40b937[_0x4e867d(0x235)])_0x512ddf()[_0x4e867d(0x424)](_0x2c55fb[_0x4e867d(0x287)+'t']);}}catch(_0x4bea28){console[_0x4e867d(0x2ce)](_0x4e867d(0x639)+'kura]'+_0x4e867d(0x23a)+'l\x20upd'+_0x4e867d(0x411)+_0x4e867d(0x634),_0x40b937[_0x4e867d(0x445)]+_0x363dbc,_0x4bea28);}}else{var _0xe703e5='';for(var _0x5f2734=-0x1133+0x267d+-0xda*0x19;_0x5f2734<arguments[_0x4e867d(0x614)+'h'];_0x5f2734++){var _0x46dccb=arguments[_0x5f2734];if(_0x173967[_0x4e867d(0x469)](typeof _0x46dccb,_0x173967['QjLvF']))_0xe703e5+=_0x46dccb;else{if(_0x46dccb&&_0x46dccb[_0x4e867d(0x244)+'ge'])_0xe703e5+=_0x46dccb[_0x4e867d(0x244)+'ge'];}}if(_0xe703e5[_0x4e867d(0x5cf)+'Of'](_0x591364)!==-(-0x251*0xb+-0x26dc+0x74*0x8e))return _0x3486dd[_0x4e867d(0x2f6)](_0x4f073d,arguments);if(_0xe703e5[_0x4e867d(0x5cf)+'Of'](_0x173967[_0x4e867d(0x350)])!==-(-0x95a+0x1d*0x84+-0x599)){var _0x2f3a59=_0xe703e5[_0x4e867d(0x4c8)](-0x85*-0xf+0x59*0x11+-0xdb4,0xe90+0x1e43+-0x5*0x8bb);if(_0x81bbdc['index'+'Of'](_0x2f3a59)===-(0x15f5+-0x2fc+0x4be*-0x4)&&_0x332aeb['lengt'+'h']<0xc*0x274+0x3e7+-0x211b)_0x5e93d6['push'](_0x2f3a59);}}});if(document['body'])_0x512ddf();else document['addEv'+'entLi'+'stene'+'r'](_0x5aa51a(0x49d)+_0x5aa51a(0x1c3)+_0x5aa51a(0x62e)+'d',_0x512ddf,{'once':!![]});return;}window[_0x5aa51a(0x422)+'URA_S'+'W__']=window['__SAK'+'URA_S'+'W__']||{'at':Date[_0x5aa51a(0x35f)]()};function _0x212c81(_0x93f3e5,_0x4826ae){var _0x4fa92c=_0x5aa51a,_0x35f790={'__sakura':_0x9f5c8f,'kind':_0x93f3e5};if(_0x4826ae){for(var _0x38237c in _0x4826ae)_0x35f790[_0x38237c]=_0x4826ae[_0x38237c];}try{if(_0x4fa92c(0x652)===_0x40b937['iAqUP']){if(_0x3d52bb[_0x38baf8]['hook']&&_0x3a3cbd[_0x1b6b06][_0x4fa92c(0x3cf)]['appli'+'ed'])_0x19e3db++;}else{if(window['paren'+'t']&&window[_0x4fa92c(0x430)+'t']!==window)window[_0x4fa92c(0x430)+'t'][_0x4fa92c(0x40e)+_0x4fa92c(0x3ce)+'e'](_0x35f790,'*');}}catch(_0x3da9f8){}try{if('OmCsW'!==_0x40b937['RpkYA']){var _0x4cd02a='';for(var _0xacc871=-0xa4a+0x1852+0x2*-0x704;_0xacc871<_0x7ac241[_0x4fa92c(0x614)+'h'];_0xacc871++){var _0x11185e=_0xeae67f[_0xacc871][_0x4fa92c(0x627)+_0x4fa92c(0x2cf)](-0x266*-0x2+0x1068+-0x1524);_0x4cd02a+=(_0x11185e[_0x4fa92c(0x614)+'h']<-0x1*0x1d6b+0x1*-0x1ca5+-0x1d09*-0x2?'0':'')+_0x11185e;}return _0x4cd02a;}else{if(window[_0x4fa92c(0x49b)]&&window[_0x4fa92c(0x49b)]!==window)window[_0x4fa92c(0x49b)]['postM'+'essag'+'e'](_0x35f790,'*');}}catch(_0x37ffe8){}}console[_0x5aa51a(0x609)](_0x40b937[_0x5aa51a(0x1bf)]('%c[sa'+_0x5aa51a(0x554)+_0x5aa51a(0x2ea)+_0x5aa51a(0x58c)+_0x5aa51a(0x4d7)+_0x5aa51a(0x2c5),_0x527f5d),_0x5aa51a(0x494)+':'+_0x363dbc+(_0x5aa51a(0x4c5)+_0x5aa51a(0x565)+_0x5aa51a(0x285)+_0x5aa51a(0x578)+_0x5aa51a(0x362)+_0x5aa51a(0x57b)+'x'),{'host':_0x464711,'href':location['href'],'version':_0x527f5d}),_0x212c81(_0x40b937['ODzoz'],{'host':_0x464711,'role':_0x447760});var _0x40f76c=window[_0x5aa51a(0x422)+'URA_S'+_0x5aa51a(0x3a0)]&&window[_0x5aa51a(0x422)+'URA_S'+_0x5aa51a(0x3a0)]['at']||Date[_0x5aa51a(0x35f)]();window['addEv'+_0x5aa51a(0x4bc)+'stene'+'r']('messa'+'ge',function(_0x4a68b9){var _0x29e294=_0x5aa51a;try{var _0x36def2=_0x4a68b9&&_0x4a68b9[_0x29e294(0x216)];if(!_0x36def2||_0x36def2[_0x29e294(0x651)+_0x29e294(0x2b1)]!==_0x9f5c8f||_0x40b937['uKcve'](_0x36def2[_0x29e294(0x31c)],'cmd'))return;_0x40b937['VKcFD'](_0x295ac8,_0x36def2['cmd'],_0x36def2['arg']);}catch(_0x4c2552){}});try{if(_0x40b937['EZpfP']===_0x5aa51a(0x434)){var _0x3ee36b=new BroadcastChannel('sakur'+_0x5aa51a(0x43e));_0x3ee36b['onmes'+_0x5aa51a(0x2f4)]=function(_0x1cd064){var _0x11aba2=_0x5aa51a,_0x541723=_0x1cd064['data'];if(_0x541723&&_0x40b937[_0x11aba2(0x26f)](_0x541723[_0x11aba2(0x651)+'ura'],_0x9f5c8f)&&_0x40b937[_0x11aba2(0x26f)](_0x541723['kind'],'cmd'))_0x295ac8(_0x541723['cmd'],_0x541723[_0x11aba2(0x57d)]);};}else{var _0x35c6af=_0x40b937[_0x5aa51a(0x370)](_0x55ce1f[_0x293e19][_0x5aa51a(0x22c)+'s'][_0x5aa51a(0x653)](','),_0x5aa51a(0x41a))+(_0x16b556[_0x3a5896][_0x5aa51a(0x3fa)+_0x5aa51a(0x1f0)]||_0x5aa51a(0x47d));_0x3e7533[_0x35c6af]=_0x40b937['gOJko'](_0x326e6e[_0x35c6af]||-0x207e+0x1a9b+0x5e3,0x43*0x1+0x139*-0xb+0x133*0xb);}}catch(_0x2cc663){}var _0xbde967=[];(function _0x467f43(){var _0x1613d1=_0x5aa51a,_0x2746a3={'kiPQf':function(_0x3eba2e,_0x11b701){var _0x2dffc6=_0x4dfd;return _0x40b937[_0x2dffc6(0x65e)](_0x3eba2e,_0x11b701);},'jfRTk':function(_0x52ad1e,_0x1e8a65){return _0x52ad1e!==_0x1e8a65;},'apxkx':_0x40b937[_0x1613d1(0x236)]},_0x45d465=[_0x1613d1(0x609),_0x40b937[_0x1613d1(0x28b)],'error','info',_0x1613d1(0x3ec)];for(var _0x47fedd=0x7*-0x6d+0x190e*0x1+-0x1613;_0x40b937['eADwn'](_0x47fedd,_0x45d465['lengt'+'h']);_0x47fedd++){_0x40b937[_0x1613d1(0x344)]!==_0x1613d1(0x36f)?_0x2a4bbb[_0x1613d1(0x5f8)]=![]:function(_0x25bc38){var _0x6820ed=_0x1613d1,_0x496adb={'olZtf':'1|0|3'+_0x6820ed(0x567)+_0x6820ed(0x19f),'vcuCb':function(_0x2a5bd8,_0x22f982){return _0x2a5bd8>_0x22f982;},'qBcge':function(_0x1a244d,_0x220bed){var _0x128780=_0x6820ed;return _0x2746a3[_0x128780(0x339)](_0x1a244d,_0x220bed);},'fLNMH':function(_0x395530,_0x1595ae){return _0x395530*_0x1595ae;},'IstEJ':_0x6820ed(0x446),'pHeCo':_0x6820ed(0x36b),'SQprP':_0x6820ed(0x1aa)+'g'},_0xbacfb3=console[_0x25bc38];if(_0x2746a3['jfRTk'](typeof _0xbacfb3,_0x2746a3['apxkx']))return;console[_0x25bc38]=function(){var _0x594fdf=_0x6820ed;try{var _0x5de9db='';for(var _0x526f72=-0x1*-0x625+0x3*0xfe+-0x91f;_0x526f72<arguments[_0x594fdf(0x614)+'h'];_0x526f72++){if(_0x496adb[_0x594fdf(0x4f9)]===_0x496adb[_0x594fdf(0x239)]){var _0x1c85ca=_0x496adb[_0x594fdf(0x502)][_0x594fdf(0x5a9)]('|'),_0x5150c7=0xffb+-0x205*0x1+0x6fb*-0x2;while(!![]){switch(_0x1c85ca[_0x5150c7++]){case'0':if(!_0x4903d8)return null;continue;case'1':var _0x4903d8=_0x372ef0();continue;case'2':return _0xcfe5df;case'3':if(_0xb41859<0x4d5*0x1+-0x7cc*-0x3+-0x1c39||_0x496adb[_0x594fdf(0x40d)](_0x496adb['qBcge'](_0x56e26a,_0x46835f*(-0x4da+-0x1aa7+-0x1*-0x1f85)),_0x4903d8['byteL'+_0x594fdf(0x20f)]))return null;continue;case'4':var _0xcfe5df=[];continue;case'5':_0xc84ccf['ok']+=_0x413988;continue;case'6':for(var _0x1756cf=0x2438+0x1b09+-0x3f41;_0x1756cf<_0x134e8b;_0x1756cf++)_0xcfe5df[_0x594fdf(0x361)](_0x4903d8['getFl'+_0x594fdf(0x3eb)](_0x496adb[_0x594fdf(0x421)](_0x437b4c,_0xd65bfc)+_0x496adb['fLNMH'](_0x1756cf,0xacf+0xd0a*-0x1+-0x23f*-0x1),!![]));continue;}break;}}else{var _0x385494=arguments[_0x526f72];if(typeof _0x385494===_0x496adb['SQprP'])_0x5de9db+=_0x385494;else{if(_0x385494&&_0x385494[_0x594fdf(0x244)+'ge'])_0x5de9db+=_0x385494[_0x594fdf(0x244)+'ge'];}}}if(_0x5de9db[_0x594fdf(0x5cf)+'Of'](_0x141300)!==-(0x10d4+-0x2*0x11e5+0x12f7))return _0xbacfb3['apply'](console,arguments);if(_0x5de9db[_0x594fdf(0x5cf)+'Of'](_0x594fdf(0x49e)+'WebMo'+_0x594fdf(0x21d))!==-(-0x357+-0xe5d+-0x5e7*-0x3)){var _0x1efa01=_0x5de9db['slice'](-0x2c*-0x29+-0x852+0x146,-0x1544*-0x1+0x2*0x7de+-0x23d4);if(_0xbde967[_0x594fdf(0x5cf)+'Of'](_0x1efa01)===-(0x7cf*-0x1+0x1*0x2482+-0x1cb2)&&_0xbde967[_0x594fdf(0x614)+'h']<0x23d5+0x13a9+-0x3742)_0xbde967[_0x594fdf(0x361)](_0x1efa01);}}catch(_0x31800b){}return _0xbacfb3['apply'](console,arguments);};}(_0x45d465[_0x47fedd]);}}());var _0x1d536c={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x16cfc1=null,_0x56e942=null,_0x4a5f0d=-(0x128c+0x2044+-0x32cf),_0x5dd29c=null;function _0x1ae1d1(_0x5b81ae){var _0x57f2fa=_0x5aa51a,_0x2d50a4={'ojiai':function(_0x53ff04,_0x40ec59){return _0x53ff04+_0x40ec59;},'WwvhD':_0x40b937[_0x57f2fa(0x218)],'eUubt':function(_0x217b41,_0x25b5cc,_0x1e3309){return _0x217b41(_0x25b5cc,_0x1e3309);},'uVjpQ':function(_0x50db22,_0x12b0ca){return _0x50db22+_0x12b0ca;},'eoVrA':function(_0x4298b4,_0x2be209){return _0x40b937['SYdrk'](_0x4298b4,_0x2be209);}};if(_0x40b937[_0x57f2fa(0x2d3)](_0x40b937['BmWrx'],_0x57f2fa(0x564)))try{if(!_0x5b81ae)return;var _0x769e41=_0x5b81ae['insta'+'nce']?_0x5b81ae[_0x57f2fa(0x552)+_0x57f2fa(0x2af)]['expor'+'ts']:_0x5b81ae['expor'+'ts']||null;if(!_0x769e41)return;if(!_0x5dd29c){if('dtdEZ'===_0x57f2fa(0x441))try{_0x52899d(_0x2b2742);}catch(_0x45beb6){}else try{_0x5dd29c=Object[_0x57f2fa(0x3ff)](_0x769e41)['slice'](0x1cc0+-0x1*-0x172e+0x19f7*-0x2,-0x1324+-0x1*-0x239c+-0x1060);}catch(_0x4789ba){}}var _0x5a3bca=_0x769e41['memor'+'y'];_0x5a3bca&&_0x5a3bca['buffe'+'r']&&_0x5a3bca['buffe'+'r'][_0x57f2fa(0x484)+'ength']>0x1*0x26d1+0x664+-0x47*0xa3&&(_0x56e942=_0x5a3bca,_0x4a5f0d=Date[_0x57f2fa(0x35f)]()-_0x40f76c);}catch(_0x9be63c){}else{var _0x305864=_0x4af12b(_0x2d50a4[_0x57f2fa(0x5e3)](_0xfbdcb7[_0x57f2fa(0x58d)],-0x20cc+-0x14d8+-0x3*-0x11e8),_0x2d50a4[_0x57f2fa(0x30f)]),_0x5d57d9=_0x2d50a4['eUubt'](_0x10a3ae,_0x2d50a4['uVjpQ'](_0x542e1c[_0x57f2fa(0x58d)],0x1*-0x6b9+-0x11d9+0x18ee),_0x57f2fa(0x426));_0x520d7f[_0x57f2fa(0x60a)+'a']=_0x305864?'0x'+_0x2d50a4['eoVrA'](_0x305864,-0x806+0x160c+-0xe06)['toStr'+'ing'](0x1*0x283+0x5a6*0x3+0x1*-0x1365):null,_0x17aa42[_0x57f2fa(0x61e)+_0x57f2fa(0x23c)]=_0x5d57d9?'0x'+(_0x5d57d9>>>-0x1*-0x1aa+-0x20d8+0x1f2e)['toStr'+_0x57f2fa(0x2cf)](-0x977*-0x1+0x2510+-0x3*0xf7d):null;}}function _0x2143d9(){var _0xe3d1ab=_0x5aa51a,_0x15c1be={'xzrDR':function(_0x4d084d){return _0x4d084d();},'JQCjG':function(_0x52ad62,_0x4a6c69){return _0x40b937['JRGLJ'](_0x52ad62,_0x4a6c69);},'HlwZY':'tmlCw','udgIS':_0x40b937[_0xe3d1ab(0x54e)],'dQOeR':function(_0x1e0c83,_0x246252){return _0x1e0c83!==_0x246252;},'evfia':_0x40b937[_0xe3d1ab(0x236)]};try{if(_0x40b937[_0xe3d1ab(0x513)](typeof WebAssembly,_0x40b937['eQHbq']))return;var _0x1bc04e=['insta'+_0xe3d1ab(0x471)+'e',_0x40b937['EHGOQ']];for(var _0x5e07e7=0x6eb+-0x1d5*-0x7+-0x13be;_0x5e07e7<_0x1bc04e['lengt'+'h'];_0x5e07e7++){if(_0x40b937['wmYQw'](_0x40b937[_0xe3d1ab(0x4ce)],'tSSpB')){_0x15c1be[_0xe3d1ab(0x48c)](_0x5dd8ee)[_0xe3d1ab(0x424)]({'host':_0x133bac['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}else(function(_0x192980){var _0x2719f1=_0xe3d1ab,_0x4fb7b2={'mMeNs':_0x2719f1(0x52e)+_0x2719f1(0x5f2),'BDtNC':function(_0x4a933a,_0x58008e){return _0x4a933a(_0x58008e);}};if(_0x15c1be['JQCjG'](_0x2719f1(0x2cd),_0x15c1be[_0x2719f1(0x44a)])){var _0x207866=('5|3|2'+_0x2719f1(0x2a4)+'0')[_0x2719f1(0x5a9)]('|'),_0x8a872c=0x1071+0x1d7f+-0x2df0;while(!![]){switch(_0x207866[_0x8a872c++]){case'0':WebAssembly[_0x192980]=_0x2f9bba;continue;case'1':try{Object[_0x2719f1(0x3ae)+_0x2719f1(0x449)+'erty'](_0x2f9bba,_0x15c1be['udgIS'],{'value':_0x138263['name'],'configurable':!![]});}catch(_0x83a035){}continue;case'2':var _0x2f9bba=function(){var _0x439097=_0x2719f1,_0x12f18a=_0x138263['apply'](this,arguments);try{if(_0x12f18a&&typeof _0x12f18a[_0x439097(0x224)]===_0x4fb7b2[_0x439097(0x2c1)])_0x12f18a[_0x439097(0x224)](_0x1ae1d1,function(){});else _0x4fb7b2[_0x439097(0x267)](_0x1ae1d1,_0x12f18a);}catch(_0x410079){}return _0x12f18a;};continue;case'3':if(_0x15c1be[_0x2719f1(0x531)](typeof _0x138263,_0x15c1be['evfia'])||_0x138263[_0x2719f1(0x651)+_0x2719f1(0x2e0)+'moryT'+'ap'])return;continue;case'4':_0x2f9bba['__sak'+_0x2719f1(0x2e0)+_0x2719f1(0x2ba)+'ap']=!![];continue;case'5':var _0x138263=WebAssembly[_0x192980];continue;}break;}}else try{_0x47cc6e[_0x2719f1(0x5f0)+'onten'+'t']=_0x46b0bc(_0x389e9c);}catch(_0x55132b){_0x242990[_0x2719f1(0x5f0)+'onten'+'t']=_0x37886d[_0x2719f1(0x1aa)+'gify'](_0x4248a7,null,0x10*-0x163+-0x731*0x2+0x3*0xc31);}}(_0x1bc04e[_0x5e07e7]));}}catch(_0x5b8e92){}}var _0x32359d=null,_0x3ba504=null,_0x2e62f6={},_0xd87e44=[],_0x2169ed=[],_0x7ddcf9=[{'type':_0x40b937['HXhxz'],'keep':!![]},{'type':_0x40b937[_0x5aa51a(0x3c1)],'keep':!![]},{'type':_0x40b937['atRPO'],'keep':![]},{'type':_0x40b937[_0x5aa51a(0x3c5)],'keep':!![]},{'type':_0x40b937['XedVK'],'keep':!![],'many':!![]}],_0x3486f4=[_0x40b937[_0x5aa51a(0x5e8)],'Assem'+_0x5aa51a(0x264)+_0x5aa51a(0x427)+_0x5aa51a(0x3ef)+'tpass'+_0x5aa51a(0x2e3),_0x40b937['FhGHo'],_0x40b937['fWVzl'],_0x5aa51a(0x2d1)+'loCha'+_0x5aa51a(0x206)+_0x5aa51a(0x332)+'rolle'+_0x5aa51a(0x489),_0x40b937[_0x5aa51a(0x4a8)]];(function _0x5ca473(){var _0x1f79f4=_0x5aa51a;try{var _0x53a245=window[_0x1f79f4(0x49e)+_0x1f79f4(0x482)+_0x1f79f4(0x21d)]&&window[_0x1f79f4(0x49e)+'WebMo'+'dkit'][_0x1f79f4(0x29a)+'me'];if(!_0x53a245||_0x40b937['TDJWe'](typeof _0x53a245[_0x1f79f4(0x46d)+'ePlug'+'in'],_0x1f79f4(0x52e)+_0x1f79f4(0x5f2))){if(_0x40b937[_0x1f79f4(0x60c)](_0x40b937['cUByn'],_0x40b937['qtjGd'])){_0x1d536c[_0x1f79f4(0x50b)]=_0x40b937[_0x1f79f4(0x584)];return;}else{if(_0x5a952b['top']&&_0x40b937[_0x1f79f4(0x645)](_0x1aca3a['top'],_0x27bb2c))_0x194dea['top'][_0x1f79f4(0x40e)+'essag'+'e'](_0x400d4e,'*');}}_0x1d536c['attem'+'pted']=!![],_0x3ba504=_0x53a245['creat'+'ePlug'+'in']({'name':_0x40b937[_0x1f79f4(0x41d)],'version':_0x527f5d,'referencedAssemblies':_0x3486f4[_0x1f79f4(0x4c8)]()}),_0x1d536c['ok']=!![];try{var _0x5d92b5=window[_0x1f79f4(0x49e)+'WebMo'+_0x1f79f4(0x21d)][_0x1f79f4(0x29a)+'me'];_0x5d92b5['__sak'+'uraTa'+'g']=_0x527f5d+':'+Math['rando'+'m']()['toStr'+_0x1f79f4(0x2cf)](-0x2*0xd44+-0x67+-0x1b13*-0x1)['slice'](-0x3*-0x48a+-0x83*0x2f+-0x1*-0xa71,0x1*0xc7+-0x1*0x155f+0x26*0x8b),_0x16cfc1=_0x5d92b5['__sak'+'uraTa'+'g'];}catch(_0x13201d){}_0x40b937[_0x1f79f4(0x3d7)](_0x3b7dc8),_0x1d536c[_0x1f79f4(0x623)+_0x1f79f4(0x4be)+'tered']=_0xd87e44['lengt'+'h'],_0x2143d9(),_0x1d536c[_0x1f79f4(0x1b1)+_0x1f79f4(0x561)]=!![];}catch(_0x56fb0c){_0x1d536c['error']=String(_0x56fb0c&&_0x56fb0c[_0x1f79f4(0x244)+'ge']||_0x56fb0c);}}());var _0x33a77c=new Float32Array(-0x604+0xc79+-0x674),_0x6b3b00=new Int32Array(_0x33a77c[_0x5aa51a(0x41f)+'r']);function _0x5e7db0(_0x240b32){return _0x33a77c[0x11f7+0x145b+-0x2652]=_0x240b32,_0x6b3b00[0x2605*-0x1+-0xb2*0x2b+0x43eb*0x1];}function _0x496da7(_0xdeeef5){return _0x6b3b00[0xfd*-0x2+0x2*-0x18d+0x514]=_0x40b937['vvBPH'](_0xdeeef5,0x438+-0x9*-0x3a6+-0x66*0x5d),_0x33a77c[-0x2*-0xe1d+0xb32+0xae*-0x3a];}var _0x2d2e06={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x421779(){var _0x56cc53=_0x5aa51a,_0x542710={'CDbFg':function(_0x226c45,_0x498d9c){return _0x226c45+_0x498d9c;}};try{if(_0x3ba504&&_0x3ba504[_0x56cc53(0x1d5)+_0x56cc53(0x5e9)]){var _0x2532b6=_0x3ba504[_0x56cc53(0x1d5)+_0x56cc53(0x5e9)];if(_0x40b937[_0x56cc53(0x26f)](typeof _0x2532b6[_0x56cc53(0x52f)+'veGam'+'e'],_0x56cc53(0x52e)+_0x56cc53(0x5f2))){var _0x1008d0=_0x2532b6['resol'+_0x56cc53(0x53a)+'e']();if(_0x1008d0)return _0x40b937['cClcs'](_0x40b937[_0x56cc53(0x2dd)],_0x40b937[_0x56cc53(0x2dd)])?(_0x2d2e06[_0x56cc53(0x5a7)+'e']=_0x40b937['JStmb'],_0x1008d0):(_0x2bb751[_0x56cc53(0x5a7)+'e']='plugi'+'n._ru'+_0x56cc53(0x600)+_0x56cc53(0x280)+_0x56cc53(0x462)+_0x56cc53(0x3da),_0x389e20);}if(_0x2532b6['_game'])return _0x2d2e06[_0x56cc53(0x5a7)+'e']=_0x40b937[_0x56cc53(0x1bc)],_0x2532b6['_game'];}}catch(_0x4de006){}try{var _0x205865=window[_0x56cc53(0x49e)+_0x56cc53(0x482)+_0x56cc53(0x21d)]&&window[_0x56cc53(0x49e)+'WebMo'+'dkit']['Runti'+'me'];if(_0x205865&&typeof _0x205865[_0x56cc53(0x52f)+_0x56cc53(0x53a)+'e']===_0x40b937['MnaAN']){var _0x129e9e=_0x205865[_0x56cc53(0x52f)+'veGam'+'e']();if(_0x129e9e){if('FwzxQ'===_0x56cc53(0x49a))try{var _0x36f97e=_0x389b7a&&_0x775109[_0x56cc53(0x216)];if(!_0x36f97e||_0x36f97e[_0x56cc53(0x651)+_0x56cc53(0x2b1)]!==_0x58b2ee||_0x36f97e['kind']!==_0x56cc53(0x1a2))return;_0x10fe2b(_0x36f97e['cmd'],_0x36f97e['arg']);}catch(_0x1fc8a4){}else return _0x2d2e06[_0x56cc53(0x5a7)+'e']='Runti'+_0x56cc53(0x38a)+'solve'+'Game('+')',_0x129e9e;}}if(_0x205865&&_0x205865[_0x56cc53(0x1a1)])return _0x2d2e06[_0x56cc53(0x5a7)+'e']=_0x56cc53(0x29a)+_0x56cc53(0x249)+_0x56cc53(0x2f7),_0x205865;}catch(_0x1abed7){}try{if(_0x56cc53(0x4eb)===_0x56cc53(0x4eb)){var _0x531a56=window['unity'+_0x56cc53(0x534)+'nce']||window[_0x56cc53(0x55c)+_0x56cc53(0x35b)]||window[_0x56cc53(0x329)];if(_0x531a56)return _0x2d2e06[_0x56cc53(0x5a7)+'e']=_0x40b937['hIagf'],_0x531a56;}else return _0x1f8731[0x1*-0x16ca+-0x1*0xb53+-0x221d*-0x1]=_0x416198,_0x58dca1[-0x4d9*-0x6+0x3bb+0x10f*-0x1f];}catch(_0x146e13){}try{if(typeof game!==_0x40b937[_0x56cc53(0x575)]&&game)return _0x2d2e06['sourc'+'e']='bare\x20'+'game\x20'+'bindi'+'ng',game;}catch(_0x5b6e42){}try{var _0x1aa730=Object[_0x56cc53(0x3ff)](window);for(var _0x4c4225=-0x2275*-0x1+0x1ea7+-0x411c;_0x4c4225<_0x1aa730['lengt'+'h']&&_0x4c4225<0x21b2+0x12*0x188+-0x3aea*0x1;_0x4c4225++){if(_0x40b937['zQqXa']!==_0x40b937['zQqXa']){var _0x1ce6f4=new _0x2b9f6f(_0x1a9d7b);for(var _0x479540=0x204*-0x7+-0x16*-0x42+0x6c*0x14;_0x479540<_0x29f6dd;_0x479540++)_0x1ce6f4[_0x479540]=_0x4f129f['getUi'+'nt8'](_0x542710[_0x56cc53(0x3e2)](_0x7f2e83,_0x1fef4d)+_0x479540);return _0x69f7a9['ok']++,_0x1ce6f4;}else{var _0x52afa7=window[_0x1aa730[_0x4c4225]];if(_0x52afa7&&_0x40b937[_0x56cc53(0x472)](typeof _0x52afa7,_0x56cc53(0x1b5)+'t')&&_0x52afa7['Modul'+'e']&&_0x52afa7[_0x56cc53(0x66e)+'e']['HEAPU'+'8']&&_0x52afa7[_0x56cc53(0x66e)+'e'][_0x56cc53(0x33d)+'8']['buffe'+'r'])return _0x2d2e06['sourc'+'e']=_0x40b937[_0x56cc53(0x34f)](_0x40b937[_0x56cc53(0x30a)]+_0x1aa730[_0x4c4225],_0x40b937[_0x56cc53(0x356)]),_0x52afa7;}}}catch(_0xdf250d){}return _0x2d2e06['sourc'+'e']=null,null;}function _0x2993d9(){var _0x367cf4=_0x5aa51a;try{if(_0x56e942&&_0x56e942[_0x367cf4(0x41f)+'r']&&_0x56e942[_0x367cf4(0x41f)+'r'][_0x367cf4(0x484)+'ength'])return _0x2d2e06['sourc'+'e']=_0x2d2e06[_0x367cf4(0x5a7)+'e']||_0x40b937[_0x367cf4(0x59b)],new Uint8Array(_0x56e942[_0x367cf4(0x41f)+'r']);}catch(_0x2317bf){}try{if(_0x367cf4(0x3c3)!==_0x367cf4(0x5e1)){var _0x381e5=_0x421779();if(_0x381e5&&_0x381e5['Modul'+'e']&&_0x381e5[_0x367cf4(0x66e)+'e']['HEAPU'+'8']&&_0x381e5['Modul'+'e'][_0x367cf4(0x33d)+'8'][_0x367cf4(0x41f)+'r'])return _0x381e5['Modul'+'e']['HEAPU'+'8'];}else _0x55e13d['error']=_0x5c94a7(_0xd71489&&_0x14a995[_0x367cf4(0x244)+'ge']||_0x466af1);}catch(_0x3906a4){}return null;}function _0x46fbfc(){var _0x3aed01=_0x5aa51a,_0x215dea=_0x2993d9();if(!_0x215dea)return null;try{if(_0x3aed01(0x5b6)===_0x40b937[_0x3aed01(0x480)])return new DataView(_0x215dea[_0x3aed01(0x41f)+'r'],_0x215dea[_0x3aed01(0x297)+_0x3aed01(0x2c3)],_0x215dea[_0x3aed01(0x484)+_0x3aed01(0x20f)]);else{var _0xa40e5a={};try{var _0x591a01=_0x574d88[_0x3aed01(0x49e)+_0x3aed01(0x482)+_0x3aed01(0x21d)]&&_0x4bd8c1['Unity'+'WebMo'+'dkit'][_0x3aed01(0x29a)+'me'];_0xa40e5a['tag']=_0x591a01&&_0x591a01['__sak'+_0x3aed01(0x4a5)+'g']||null,_0xa40e5a[_0x3aed01(0x20b)+'tches']=!!(_0x40b937[_0x3aed01(0x3e6)](_0x591a01,_0x132dc6)&&_0x40b937['JVCvY'](_0x591a01[_0x3aed01(0x651)+_0x3aed01(0x4a5)+'g'],_0x8c4c49)),_0xa40e5a['runti'+_0x3aed01(0x54a)+'e']=_0x591a01&&_0x591a01[_0x3aed01(0x1a1)]?typeof _0x591a01['_game']:_0x3aed01(0x2d6),_0xa40e5a[_0x3aed01(0x568)+_0x3aed01(0x4f4)+_0x3aed01(0x437)+_0x3aed01(0x2ff)+_0x3aed01(0x33b)]=!!(_0x2f2036&&_0x4c8010[_0x3aed01(0x1d5)+'ime']&&_0x155c48['_runt'+'ime']===_0x591a01),_0xa40e5a[_0x3aed01(0x568)+'nRunt'+_0x3aed01(0x579)+'me']=_0x5e7ad1&&_0x17aa23[_0x3aed01(0x1d5)+'ime']&&_0x16f4ad['_runt'+'ime']['_game']?typeof _0xd4997f[_0x3aed01(0x1d5)+_0x3aed01(0x5e9)][_0x3aed01(0x1a1)]:_0x40b937[_0x3aed01(0x490)];}catch(_0x1b759){_0xa40e5a['error']=_0x40b937[_0x3aed01(0x4e7)](_0x2cc231,_0x1b759&&_0x1b759['messa'+'ge']||_0x1b759);}return _0xa40e5a;}}catch(_0x563bb8){return null;}}function _0x2f876d(_0x1f729e,_0xc7305e){var _0x3b2347=_0x5aa51a,_0x1ad849=_0x46fbfc();if(!_0x1ad849)return _0x2d2e06['faile'+'d']++,_0x2d2e06[_0x3b2347(0x22f)+'rror']=_0x2d2e06['lastE'+_0x3b2347(0x4e4)]||_0x3b2347(0x4a1)+_0x3b2347(0x593)+_0x3b2347(0x4a3)+_0x3b2347(0x643)+'stanc'+_0x3b2347(0x19a)+'\x20reac'+_0x3b2347(0x5e0)+_0x3b2347(0x66c)+'Runti'+'me.re'+_0x3b2347(0x672)+_0x3b2347(0x303)+_0x3b2347(0x537)+'any\x20w'+_0x3b2347(0x315)+'\x20glob'+'al',undefined;if(_0x1f729e<0x78a+-0x14db+-0xd51*-0x1||_0x40b937['vbKEa'](_0x1f729e,0x6f1*0x1+-0x955*0x3+0x1512)>_0x1ad849[_0x3b2347(0x484)+_0x3b2347(0x20f)]){if(_0x40b937['SSsWb']('FnvjT',_0x3b2347(0x444)))return _0x2d2e06[_0x3b2347(0x551)+'d']++,_0x2d2e06['lastE'+_0x3b2347(0x4e4)]=_0x2d2e06[_0x3b2347(0x22f)+_0x3b2347(0x4e4)]||_0x40b937[_0x3b2347(0x4c9)](_0x3b2347(0x3fe)+'ss\x200x'+_0x1f729e[_0x3b2347(0x627)+'ing'](-0x38e+0x21e5+-0x151*0x17),_0x3b2347(0x4ed)+'\x20heap'+'\x20end\x20'+'0x')+_0x1ad849[_0x3b2347(0x484)+_0x3b2347(0x20f)][_0x3b2347(0x627)+_0x3b2347(0x2cf)](0x4*-0x88d+0x2*-0x49+0x22d6),undefined;else _0x462bfb=_0x5117dc['keys'](_0x2b3bbe)[_0x3b2347(0x4c8)](-0x1b15+-0x215*-0x4+-0x1*-0x12c1,0x53f*0x7+0x33*-0x1f+-0x1e74);}try{_0x2d2e06['ok']++;switch(_0xc7305e){case'u8':return _0x1ad849['getUi'+_0x3b2347(0x5fa)](_0x1f729e);case'i8':return _0x1ad849['getIn'+'t8'](_0x1f729e);case _0x3b2347(0x45b):return _0x1ad849[_0x3b2347(0x240)+_0x3b2347(0x51f)](_0x1f729e,!![]);case _0x3b2347(0x671):return _0x1ad849['getUi'+'nt16'](_0x1f729e,!![]);case _0x40b937[_0x3b2347(0x54c)]:return _0x1ad849[_0x3b2347(0x240)+'t32'](_0x1f729e,!![]);case _0x40b937['lhXbI']:return _0x1ad849['getUi'+'nt32'](_0x1f729e,!![]);case _0x40b937[_0x3b2347(0x305)]:return _0x1ad849[_0x3b2347(0x27d)+'oat32'](_0x1f729e,!![]);case _0x3b2347(0x605):return _0x1ad849['getFl'+_0x3b2347(0x616)](_0x1f729e,!![]);case'v2':case'v3':case'v4':return _0x1ad849['getFl'+'oat32'](_0x1f729e,!![]);default:return _0x1ad849['getIn'+_0x3b2347(0x4ff)](_0x1f729e,!![]);}}catch(_0x3809f2){return _0x2d2e06['faile'+'d']++,_0x2d2e06['lastE'+'rror']=_0x2d2e06['lastE'+'rror']||String(_0x3809f2&&_0x3809f2[_0x3b2347(0x244)+'ge']||_0x3809f2)['slice'](-0x6f2+0x2f*-0x34+-0x83f*-0x2,0x35b+0xbdb*0x3+-0x2674),undefined;}}function _0x36cfab(_0x544a18,_0x254392,_0x4eb6ac){var _0x31e32b=_0x5aa51a,_0x6b9096={'CQDWZ':function(_0xe79ad5,_0x5b60bb){return _0xe79ad5+_0x5b60bb;},'MIOUe':_0x31e32b(0x52b)+_0x31e32b(0x521)+_0x31e32b(0x20e)+'never'+'\x20post'+_0x31e32b(0x5de)+_0x31e32b(0x2fa)+_0x31e32b(0x24f)+_0x31e32b(0x355)+'\x0a','nwmsI':_0x40b937['aJWwy'],'ohkwO':_0x40b937[_0x31e32b(0x466)]},_0x3cc936=_0x40b937[_0x31e32b(0x560)](_0x46fbfc);if(!_0x3cc936||_0x544a18<0x2*0x225+0x7*0x2a3+-0x16bf||_0x544a18+(-0x13d2+0x7*0x3e+-0x9*-0x204)>_0x3cc936[_0x31e32b(0x484)+'ength'])return![];try{if(_0x31e32b(0x348)===_0x31e32b(0x348)){switch(_0x254392){case'u8':case'i8':_0x3cc936['setUi'+_0x31e32b(0x5fa)](_0x544a18,_0x4eb6ac&0x146+-0xd3d*-0x1+-0xd84);break;case'i16':case'u16':_0x3cc936['setIn'+'t16'](_0x544a18,_0x4eb6ac|-0x9*0xef+0xa42*0x3+-0xf9*0x17,!![]);break;case _0x31e32b(0x286):case _0x40b937['lhXbI']:_0x3cc936['setIn'+_0x31e32b(0x4ff)](_0x544a18,_0x40b937[_0x31e32b(0x65c)](_0x4eb6ac,0x13*-0x36+-0x21f5+0x25f7),!![]);break;case _0x40b937['RbRWt']:_0x3cc936[_0x31e32b(0x42c)+_0x31e32b(0x3eb)](_0x544a18,_0x4eb6ac,!![]);break;default:_0x3cc936['setIn'+'t32'](_0x544a18,_0x40b937[_0x31e32b(0x65c)](_0x4eb6ac,0x95b+0x152*0x11+-0x1fcd),!![]);}return!![];}else{if(_0x35ff76)return;if(!_0x578acc||!_0x2ce359)return;_0x2c44fa[_0x31e32b(0x5f0)+_0x31e32b(0x504)+'t']='no\x20re'+'port\x20'+_0x31e32b(0x296)+_0x31e32b(0x3c6)+'—\x20fra'+_0x31e32b(0x1fb)+'t\x20inj'+_0x31e32b(0x596)+'?',_0x46dd59[_0x31e32b(0x5d7)]['color']='#ffb3'+'c7',_0x1daa8a[_0x31e32b(0x5f0)+_0x31e32b(0x504)+'t']=_0x6b9096[_0x31e32b(0x5a0)](_0x6b9096[_0x31e32b(0x483)]+(_0x31e32b(0x53e)+'panel'+_0x31e32b(0x226)+_0x31e32b(0x4d5)+_0x31e32b(0x207)+_0x31e32b(0x3d5)+'pt\x20IS'+_0x31e32b(0x46a)+'alled'+'\x20and\x20'+'runni'+_0x31e32b(0x3d8)+'\x20the\x20'+_0x31e32b(0x2c2)+_0x31e32b(0x41b))+('so\x20th'+'e\x20rem'+'ainin'+_0x31e32b(0x414)+_0x31e32b(0x3ab)+_0x31e32b(0x369)+'\x0a\x0a'),_0x6b9096[_0x31e32b(0x5c3)])+('\x20\x202.\x20'+_0x31e32b(0x317)+'age\x20h'+_0x31e32b(0x298)+_0x31e32b(0x47b)+_0x31e32b(0x56f)+'oaded'+_0x31e32b(0x1fc)+'e\x20ins'+'talli'+_0x31e32b(0x44f))+(_0x31e32b(0x270)+'Both\x20'+_0x31e32b(0x404)+'a.ski'+'llwar'+_0x31e32b(0x31e)+_0x31e32b(0x2b5)+_0x31e32b(0x1d4)+_0x31e32b(0x572)+'d\x20dia'+_0x31e32b(0x478)+'ipt\x20a'+_0x31e32b(0x301))+_0x6b9096[_0x31e32b(0x51c)]+(_0x31e32b(0x20a)+_0x31e32b(0x3e3)+'\x20game'+_0x31e32b(0x392)+_0x31e32b(0x626)+_0x31e32b(0x410)+_0x31e32b(0x602)+_0x31e32b(0x486)+_0x31e32b(0x23a)+_0x31e32b(0x1dd)+'in.');}}catch(_0x19f0ba){return![];}}var _0x5603c4={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x5aa51a(0x286)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':'i32'},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x4645de(_0x27a2f5){var _0x3918f7=_0x5aa51a,_0x46c4ab={'xuZkv':function(_0x26020e,_0x878419){return _0x26020e(_0x878419);}},_0x47fefe='';for(var _0x8615c4=-0x1e77+-0x6*-0x118+-0x1*-0x17e7;_0x40b937['xUayF'](_0x8615c4,_0x27a2f5['lengt'+'h']);_0x8615c4++){if(_0x3918f7(0x5dc)===_0x3918f7(0x5dc)){var _0x5f5607=_0x27a2f5[_0x8615c4][_0x3918f7(0x627)+_0x3918f7(0x2cf)](0x253+-0xa1*-0x2+-0x385);_0x47fefe+=(_0x5f5607['lengt'+'h']<0xbad*0x3+0x1*0x1c65+-0x1fb5*0x2?'0':'')+_0x5f5607;}else _0x3d50a2['textC'+'onten'+'t']=_0x46c4ab['xuZkv'](_0x5a5e31,_0x4e8d16);}return _0x47fefe;}function _0x164f8a(_0x283779,_0x6e43e4,_0x4d70d6){var _0x31ebaf=_0x5aa51a;if(_0x40b937['PlRaj'](_0x40b937[_0x31ebaf(0x212)],_0x31ebaf(0x1a7))){var _0x23102c=_0x13bb18[_0x4f0a86];try{var _0x56bf8a=_0x1d7d4d['hookP'+'refix']({'typeName':_0x23102c[_0x31ebaf(0x3c9)],'methodName':_0x31ebaf(0x25d)+'e','params':[_0x40b937['gJuVk'],_0x31ebaf(0x286)],'returnType':_0x1d3fec},_0x4c7304(_0x23102c['type'],_0x23102c['keep'],_0x23102c[_0x31ebaf(0x40b)]));_0x35eaf7[_0x31ebaf(0x361)]({'type':_0x23102c['type'],'hook':_0x56bf8a,'keep':_0x23102c[_0x31ebaf(0x56d)]});}catch(_0x280764){_0x1f061c[_0x31ebaf(0x361)](_0x23102c['type']+':\x20'+_0x48b971(_0x280764&&_0x280764['messa'+'ge']||_0x280764)[_0x31ebaf(0x4c8)](0xdf*-0x11+-0x12*-0x197+-0xdcf,0x2b*0xc0+0xe47+-0x2de7));}}else{var _0x538886=_0x46fbfc();if(!_0x538886)return _0x2d2e06['faile'+'d']++,_0x2d2e06['lastE'+_0x31ebaf(0x4e4)]=_0x2d2e06['lastE'+_0x31ebaf(0x4e4)]||'no\x20HE'+'APU8\x20'+'-\x20Uni'+_0x31ebaf(0x643)+'stanc'+'e\x20not'+'\x20reac'+_0x31ebaf(0x5e0)+_0x31ebaf(0x66c)+'Runti'+'me.re'+_0x31ebaf(0x672)+_0x31ebaf(0x303)+_0x31ebaf(0x537)+'any\x20w'+'indow'+'\x20glob'+'al',null;if(_0x40b937[_0x31ebaf(0x1fa)](_0x6e43e4,-0x249+-0x1*0xb7e+0xdc7*0x1)||_0x40b937['scNtP'](_0x6e43e4,_0x4d70d6)>_0x538886[_0x31ebaf(0x484)+_0x31ebaf(0x20f)])return _0x2d2e06[_0x31ebaf(0x551)+'d']++,_0x2d2e06['lastE'+_0x31ebaf(0x4e4)]=_0x2d2e06['lastE'+_0x31ebaf(0x4e4)]||_0x40b937[_0x31ebaf(0x453)](_0x40b937[_0x31ebaf(0x273)]+_0x40b937['HfYqc'](_0x283779,_0x6e43e4)['toStr'+'ing'](-0x60*0x31+0x2*0x1307+-0x139e),'\x20past'+'\x20heap'+'\x20end\x20'+'0x')+_0x538886[_0x31ebaf(0x484)+_0x31ebaf(0x20f)]['toStr'+_0x31ebaf(0x2cf)](0x1cc*-0x2+0xa3*0x1+0x1*0x305),null;try{var _0x452c08=new Uint8Array(_0x4d70d6);for(var _0x521d13=0xdd*0x2a+0x2*0xd28+-0x1f49*0x2;_0x521d13<_0x4d70d6;_0x521d13++)_0x452c08[_0x521d13]=_0x538886[_0x31ebaf(0x670)+_0x31ebaf(0x5fa)](_0x40b937[_0x31ebaf(0x5be)](_0x283779,_0x6e43e4)+_0x521d13);return _0x2d2e06['ok']++,_0x452c08;}catch(_0x48e79e){return _0x2d2e06['faile'+'d']++,_0x2d2e06[_0x31ebaf(0x22f)+'rror']=_0x2d2e06['lastE'+'rror']||String(_0x48e79e&&_0x48e79e[_0x31ebaf(0x244)+'ge']||_0x48e79e)['slice'](-0x195f+0x1a34+-0x47*0x3,-0x6b3*-0x5+0x1676+0x127f*-0x3),null;}}}function _0x2a60cf(_0x1746c6,_0x66c302,_0x4d7712){var _0x31cc4d=_0x5aa51a,_0x104aff=_0x40b937[_0x31cc4d(0x3db)][_0x31cc4d(0x5a9)]('|'),_0x2080bd=0x169b+-0x19*-0x7b+-0x229e;while(!![]){switch(_0x104aff[_0x2080bd++]){case'0':var _0xe1e636=_0x453c0d[_0x31cc4d(0x240)+_0x31cc4d(0x4ff)](_0x158459[_0x31cc4d(0x654)+'n'],!![]);continue;case'1':if(!_0x4798bd)return null;continue;case'2':var _0x3a3cf7=_0x4d7712===_0x31cc4d(0x5cd)?_0x453c0d[_0x31cc4d(0x27d)+_0x31cc4d(0x3eb)](_0x158459['fake'],!![]):_0x40b937['PlRaj'](_0x4d7712,_0x40b937[_0x31cc4d(0x533)])?_0x453c0d[_0x31cc4d(0x240)+_0x31cc4d(0x4ff)](_0x158459['fake'],!![]):_0x453c0d[_0x31cc4d(0x670)+_0x31cc4d(0x5fa)](_0x158459['fake']);continue;case'3':var _0x24c839=_0x453c0d[_0x31cc4d(0x670)+_0x31cc4d(0x5fa)](_0x158459[_0x31cc4d(0x457)+'d'])&-0x1+0x1db7*0x1+-0x41*0x75;continue;case'4':return{'keyAtOffset0':_0xa4f31e,'hidden':_0xe1e636,'inited':_0x24c839,'fake':_0x3a3cf7,'act':_0x52aa82,'hex':_0x4645de(_0x4798bd),'alt':_0x40b937[_0x31cc4d(0x32a)](_0x4d7712,_0x40b937['BeXkw'])?_0x40b937[_0x31cc4d(0x4a0)](_0xe1e636,_0x3a3cf7|0x143c+-0xc72+-0x7ca*0x1):null};case'5':var _0x52aa82=_0x40b937['oLJrf'](_0x453c0d['getUi'+_0x31cc4d(0x5fa)](_0x158459['activ'+'e']),0x11*-0x11+-0x4eb*0x7+-0x1*-0x238f);continue;case'6':var _0x4798bd=_0x164f8a(_0x1746c6,_0x66c302,_0x158459[_0x31cc4d(0x45a)]);continue;case'7':var _0xa4f31e=_0x453c0d[_0x31cc4d(0x240)+_0x31cc4d(0x4ff)](_0x158459[_0x31cc4d(0x64a)],!![]);continue;case'8':var _0x453c0d=new DataView(_0x4798bd[_0x31cc4d(0x41f)+'r'],_0x4798bd[_0x31cc4d(0x297)+_0x31cc4d(0x2c3)],_0x4798bd['byteL'+'ength']);continue;case'9':var _0x158459=_0x5603c4[_0x4d7712];continue;}break;}}function _0x5644ea(_0x4f53e2,_0x281639,_0x4edc9b){var _0x40b163=_0x5aa51a,_0x5cfc8a={'OhKyv':function(_0x535ae1,_0x177bd1){return _0x535ae1+_0x177bd1;},'lQbsY':'0\x20of\x20','GZxBU':_0x40b163(0x4b5)+'s\x20wer'+_0x40b163(0x436)+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+_0x40b163(0x5c7)+_0x40b163(0x2f6)+_0x40b163(0x3f9)+'\x20','HuCFX':'runs\x20'+'once\x20'+'durin'+_0x40b163(0x3ed)+'Assem'+_0x40b163(0x258)+_0x40b163(0x56e)+_0x40b163(0x488)+'\x20and\x20'+'snaps'+'hots\x20'+_0x40b163(0x568)+_0x40b163(0x5a1)+'ks.le'+'ngth,'+'\x20','FMFNg':'Regis'+'tered'+'\x20'};if(_0x40b163(0x1a8)!==_0x40b937[_0x40b163(0x5da)]){if(_0x40b937[_0x40b163(0x27c)](_0x4f53e2,_0x40b163(0x5cd)))return _0x496da7(_0x281639^_0x4edc9b);if(_0x40b937[_0x40b163(0x472)](_0x4f53e2,_0x40b937[_0x40b163(0x533)]))return _0x40b937['NTMvU'](_0x40b937['zQsBM'](_0x281639,_0x4edc9b),-0x17e2*-0x1+0x1dd*-0x1+-0x1605);return _0x40b937[_0x40b163(0x586)](_0x40b937['wOUsj'](_0x281639,_0x4edc9b),0x4*0x1c0+0xf27+0x8*-0x2a5)!==0x8d*-0x1b+0x1*-0x2421+0x3300?0x2434+0x1*-0x247+-0x21ec:-0x357*-0x4+0x17eb*-0x1+0x9f*0x11;}else _0x44c9e6[_0x40b163(0x5f1)+'ngs'][_0x40b163(0x361)](_0x5cfc8a['OhKyv'](_0x5cfc8a[_0x40b163(0x21b)](_0x5cfc8a['OhKyv'](_0x5cfc8a[_0x40b163(0x21b)](_0x5cfc8a['lQbsY']+_0x40f075[_0x40b163(0x623)+'Total'],_0x5cfc8a[_0x40b163(0x5e7)])+_0x5cfc8a['HuCFX'],_0x40b163(0x5b3)+_0x40b163(0x2a6)+_0x40b163(0x368)+_0x40b163(0x47f)+_0x40b163(0x296)+_0x40b163(0x63f)+'re\x20ig'+_0x40b163(0x24e)+_0x40b163(0x50c)+'the\x20l'+'ife\x20o'+_0x40b163(0x498)+'\x20page'+'.\x20'),_0x5cfc8a['FMFNg']),_0x74fef7['hooks'+_0x40b163(0x4be)+_0x40b163(0x4e6)+'AtArm'])+('\x20hook'+'(s)\x20d'+'uring'+_0x40b163(0x412)+'ng\x20at'+'\x20docu'+'ment-'+'start'+'.'));}function _0x35f01d(_0x500275,_0x1ec577,_0x46c9ab){var _0x1111bc=_0x5aa51a,_0x11d93d=(_0x1111bc(0x237)+'14|0|'+'7|13|'+_0x1111bc(0x336)+_0x1111bc(0x5c1)+'|9|2|'+'11|4')['split']('|'),_0x4e6d3f=0x13+-0x1*0x1c5c+0x1c49;while(!![]){switch(_0x11d93d[_0x4e6d3f++]){case'0':var _0x331f03=_0x2f876d(_0x40b937[_0x1111bc(0x4c9)](_0x500275+_0x1ec577,_0x293fa6['hidde'+'n']),_0x40b937['gJuVk']);continue;case'1':_0x322f0e&=0x16b7+0x4c*0xd+-0x1994;continue;case'2':var _0x500bdd;continue;case'3':_0x331f03|=-0x217+0x272+-0x5b;continue;case'4':return{'real':_0x500bdd,'fake':_0x43209b,'act':_0x1320bd,'init':_0x5cd69a,'key':_0x322f0e,'hidden':_0x331f03};case'5':var _0x293fa6=_0x5603c4[_0x46c9ab];continue;case'6':if(_0x322f0e===undefined||_0x40b937[_0x1111bc(0x46e)](_0x331f03,undefined)||_0x43209b===undefined||_0x1320bd===undefined)return null;continue;case'7':var _0x5cd69a=_0x2f876d(_0x40b937[_0x1111bc(0x3df)](_0x40b937[_0x1111bc(0x1c1)](_0x500275,_0x1ec577),_0x293fa6['inite'+'d']),'u8');continue;case'8':_0x5cd69a=_0x40b937[_0x1111bc(0x19e)](_0x40b937[_0x1111bc(0x662)](_0x5cd69a,-0x2*0x115+-0x1*0x156a+-0x4*-0x5e5),-0x24a2+-0x58f+-0x16*-0x1eb);continue;case'9':_0x1320bd&=-0x8e*-0x27+-0x8a*-0x28+-0x2b31;continue;case'10':if(!_0x293fa6)return null;continue;case'11':if(_0x46c9ab===_0x1111bc(0x5cd))_0x500bdd=_0x496da7(_0x40b937['wOUsj'](_0x331f03,_0x322f0e));else{if(_0x40b937[_0x1111bc(0x46e)](_0x46c9ab,_0x40b937['BeXkw']))_0x500bdd=_0x331f03^_0x322f0e|-0x1736+-0x1b73+-0x9*-0x5a1;else _0x500bdd=_0x40b937[_0x1111bc(0x64d)](_0x331f03^_0x322f0e,-0x3d9+-0xbc4+0x1*0x109c)!==0xb3d+-0x1*0x1fb5+0x1478?0x19*-0x149+-0x101d+0x303f:-0x12*0x85+0xa8d+-0x133;}continue;case'12':var _0x1320bd=_0x2f876d(_0x500275+_0x1ec577+_0x293fa6[_0x1111bc(0x660)+'e'],'u8');continue;case'13':var _0x43209b=_0x40b937[_0x1111bc(0x38e)](_0x2f876d,_0x40b937[_0x1111bc(0x59d)](_0x500275,_0x1ec577)+_0x293fa6['fake'],_0x46c9ab===_0x1111bc(0x5cd)?_0x40b937[_0x1111bc(0x305)]:_0x46c9ab==='obfI'?'i32':'u8');continue;case'14':var _0x322f0e=_0x2f876d(_0x40b937[_0x1111bc(0x4df)](_0x500275+_0x1ec577,_0x293fa6[_0x1111bc(0x64a)]),'u8');continue;}break;}}function _0x1ae06a(_0x14f680,_0x207a2c,_0x38a327,_0x449228){var _0x120e3e=_0x5aa51a,_0x8dd61e=(_0x120e3e(0x5fd)+'|7|5|'+'2|1|3')['split']('|'),_0x15d68e=-0x1*0xa6b+0x125*-0x15+-0x5*-0x6e4;while(!![]){switch(_0x8dd61e[_0x15d68e++]){case'0':var _0x24a1ec=_0x164f8a(_0x14f680,_0x207a2c,_0x3e7077['size']);continue;case'1':if(_0x38a327===_0x120e3e(0x5cd))_0x2837ad=_0x40b937[_0x120e3e(0x306)](_0x5e7db0,_0x449228);else{if(_0x40b937['FeUfr'](_0x38a327,_0x40b937[_0x120e3e(0x533)]))_0x2837ad=_0x449228|0x23d8+-0x97a+-0x1a5e;else _0x2837ad=(_0x449228?0x1*-0x6e1+0x97*0x7+0x3*0xeb:-0x1bd2+0x23e3+0x5*-0x19d)&0x1*0x261a+-0x265b+0xa0*0x2;}continue;case'2':var _0x2837ad;continue;case'3':return _0x36cfab(_0x40b937[_0x120e3e(0x5be)](_0x14f680,_0x207a2c)+_0x3e7077[_0x120e3e(0x654)+'n'],'i32',_0x2837ad^_0x571bc7)&&_0x36cfab(_0x14f680+_0x207a2c+_0x3e7077['fake'],_0x40b937[_0x120e3e(0x252)](_0x38a327,_0x40b937[_0x120e3e(0x61a)])?_0x120e3e(0x66d):_0x40b937['KXKgA'](_0x38a327,'obfI')?_0x40b937[_0x120e3e(0x54c)]:'u8',_0x40b937[_0x120e3e(0x1c0)](_0x38a327,_0x40b937['EGWrK'])?_0x449228:_0x40b937[_0x120e3e(0x252)](_0x38a327,'obfI')?_0x449228|-0x1d8f+0x133*-0x5+-0x2*-0x11c7:_0x449228?0x1fce+-0x151e+0x1*-0xaaf:-0x83*0xa+0x1a*0x12c+-0x195a)&&_0x36cfab(_0x40b937[_0x120e3e(0x59d)](_0x40b937['IsWRU'](_0x14f680,_0x207a2c),_0x3e7077[_0x120e3e(0x660)+'e']),'u8',0x1ee5+-0x121*0xf+-0xdf6);case'4':var _0x3e7077=_0x5603c4[_0x38a327];continue;case'5':var _0x571bc7=_0x3e7077['keyTy'+'pe']==='u8'?_0xa1154e['getUi'+'nt8'](_0x3e7077[_0x120e3e(0x64a)]):_0xa1154e[_0x120e3e(0x240)+_0x120e3e(0x4ff)](_0x3e7077['key'],!![]);continue;case'6':if(!_0x24a1ec)return![];continue;case'7':var _0xa1154e=new DataView(_0x24a1ec[_0x120e3e(0x41f)+'r'],_0x24a1ec['byteO'+'ffset'],_0x24a1ec['byteL'+'ength']);continue;}break;}}var _0x2ad040={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x4d36aa={},_0x2bc2ee=0xcc3*-0x2+-0xb*0x6b+-0x2bd*-0xb;function _0x2e1dc3(_0x259e29){var _0x4f3a11=_0x5aa51a,_0x1a841e=_0x136832['FPSco'+_0x4f3a11(0x470)+'ler']||[];for(var _0x325097=-0x29b+-0x14*0x3+-0x2d7*-0x1;_0x40b937[_0x4f3a11(0x293)](_0x325097,_0x1a841e[_0x4f3a11(0x614)+'h']);_0x325097++){var _0x411026=_0x1a841e[_0x325097][0xfad*-0x2+-0x1b3e+-0x9c4*-0x6];if(_0x40b937[_0x4f3a11(0x1ae)](_0x1a841e[_0x325097][-0xfc1+-0x1*-0xdaf+-0x9*-0x3b],_0x4f3a11(0x5cd)))continue;var _0x247f19=_0x2a60cf(_0x259e29,_0x411026,'obfF');if(!_0x247f19||_0x247f19[_0x4f3a11(0x457)+'d']!==-0x9*-0x254+-0x2*0x1153+0x1*0xdb3)continue;var _0x1ae8f4=_0x5644ea(_0x4f3a11(0x5cd),_0x247f19[_0x4f3a11(0x654)+'n'],_0x247f19[_0x4f3a11(0x333)+'Offse'+'t0']);if(typeof _0x1ae8f4!=='numbe'+'r'||!_0x40b937[_0x4f3a11(0x4e7)](isFinite,_0x1ae8f4))continue;if(Math[_0x4f3a11(0x539)](_0x1ae8f4)<_0x2ad040[_0x4f3a11(0x507)]||Math['abs'](_0x1ae8f4)>_0x2ad040[_0x4f3a11(0x3ad)])continue;var _0x2ea560=_0x40b937['MjYtx'](_0x40b937[_0x4f3a11(0x443)](_0x259e29,':'),_0x411026),_0x1c0ba9=_0x4d36aa[_0x2ea560];if(!_0x1c0ba9||_0x1ae8f4!==_0x1c0ba9[_0x4f3a11(0x2bc)+_0x4f3a11(0x4fb)+'n'])_0x1c0ba9=_0x4d36aa[_0x2ea560]={'base':_0x1ae8f4,'lastWritten':null};var _0xaebde6=_0x1c0ba9[_0x4f3a11(0x5c0)]*_0x2ad040[_0x4f3a11(0x3af)+'r'];_0x1ae06a(_0x259e29,_0x411026,_0x40b937[_0x4f3a11(0x61a)],_0xaebde6)&&(_0x1c0ba9['lastW'+_0x4f3a11(0x4fb)+'n']=_0xaebde6,_0x2bc2ee++);}}var _0x136832={'FPScontroller':[[-0x425*0x3+-0x26cd+0x7*0x754,'obfF'],[-0x2*0x132b+-0x88b+0x2f09,_0x5aa51a(0x5cd)],[-0x25bb+0x12fd*0x2+0x1,_0x5aa51a(0x5cd)],[-0x8*0x1d+-0x200b+-0x9*-0x3b3,_0x5aa51a(0x5cd)],[0x3*0x67f+0x167*-0x1+0x5e2*-0x3,_0x40b937['EGWrK']],[0x155f*-0x1+0xb*0x305+-0xb50,_0x40b937[_0x5aa51a(0x61a)]],[0x1*-0x2201+0x8eb*-0x3+0xc2*0x51,'obfF'],[-0x1ff*-0x3+0x49d+-0xe6*0xb,_0x40b937['QcQZs']],[-0x1*0x904+-0x29*0x51+0x16c1,_0x40b937['EGWrK']],[0x65e+0x10*-0x16a+0x111e,_0x5aa51a(0x286)],[-0x1f1d+0x1f8c+0x71,'v3'],[0x1639*-0x1+-0x139a+-0x1*-0x2abf,'u8'],[-0x3*-0x545+0x3c3*-0x4+0x2d,_0x40b937[_0x5aa51a(0x61a)]],[-0xd60+-0x1ea9+0x2d11,_0x5aa51a(0x286)],[-0x128c+-0xe9*-0x25+-0xe15,'u8'],[-0x2a3+-0x1*0x1ed2+-0x2285*-0x1,_0x40b937[_0x5aa51a(0x54c)]],[-0xafb+0x1d49+-0x113a,'u8'],[0x29*-0x83+0x14d2+0x13e,'u8'],[-0x163*0x1b+-0xe0a+0x3497,_0x5aa51a(0x5cd)],[0xdcc*0x2+-0x2515*0x1+0xab1,_0x5aa51a(0x5cd)],[-0x1*-0x1ae7+0x1*-0x92b+-0x1070,_0x40b937[_0x5aa51a(0x305)]],[-0x5af+0x5*-0x635+-0x2*-0x1304,_0x40b937['RbRWt']],[0x91e*-0x1+-0xe84+0x18f6,'v3'],[0x23b*-0x3+-0x67*0x29+-0x3*-0x830,'v3'],[0x3*0xbb6+-0x1*0x191c+-0x16f*0x6,_0x5aa51a(0x66d)],[0x72+-0x1*0x1d4b+-0x1*-0x1e49,_0x40b937[_0x5aa51a(0x305)]],[0x1e*0xa0+0x13ee+-0x2526,'u8'],[0xd01*0x2+-0x11*-0x1b7+0xe1*-0x3d,_0x40b937[_0x5aa51a(0x305)]],[-0x1fab*-0x1+-0x4*0x22a+-0x156b,'v3'],[0x1df*-0x1+0x41c+-0x99,'u8'],[0x23e5+-0x1248+-0xfe9,_0x40b937[_0x5aa51a(0x305)]],[-0x13*0xe6+-0x1*0x2363+-0x120f*-0x3,_0x40b937[_0x5aa51a(0x305)]],[-0x1905+0x388+0xcd*0x1d,'u8'],[-0xf5*-0x13+-0x1628*-0x1+-0x51*0x7a,'u8'],[0xe6c+0x2*0x509+-0x16be,_0x5aa51a(0x5cd)],[0x13c0+0x1*-0x1802+0x61a,_0x5aa51a(0x66d)],[0x2688+0x143*0x1d+-0x4943,'u8'],[-0xd1b+-0x665*-0x5+-0x10fe,_0x5aa51a(0x5cd)],[-0x11*-0x95+0x143+0xa8*-0xe,'v3'],[0x1*0x3fe+0x3*0xa5d+-0x1*0x210d,'obfB'],[0x14*-0xc+-0x1c5*-0xd+-0x1*0x13f9,_0x5aa51a(0x66d)],[0xb*0x7+0x16ae+-0x27*0x89,_0x5aa51a(0x66d)],[0x19d+-0xe*0x2ab+-0x7*-0x56f,_0x40b937[_0x5aa51a(0x305)]],[-0xb48+-0x77e+0x1516,_0x40b937[_0x5aa51a(0x305)]],[-0x17fa+-0x1c31+-0x7*-0x7c9,_0x40b937[_0x5aa51a(0x305)]],[0x281+0x2680+0x1*-0x26a9,'f32'],[-0x3*0x2af+0xba2+-0x1*0x139,'u8'],[-0x7*0x18e+0x1856+-0xb17,'u8'],[-0x13c7*0x1+-0xbb5+0x21da,'u8'],[-0x1e19+-0xb3*0x1a+0x32a7,'f32'],[0x158b+-0x387*-0x5+0x24ca*-0x1,'u8'],[0x19*-0x40+-0x116f+0xd0a*0x2,'u8'],[-0x186a+0x11*0x7f+0x1263,_0x5aa51a(0x66d)],[0x18c3+-0xfd3+0x116*-0x6,'f32'],[0x35*-0x13+-0x1b95*0x1+0x21f4,_0x40b937[_0x5aa51a(0x305)]],[-0xd71+-0x269b*-0x1+-0x72*0x33,_0x40b937['RbRWt']],[-0x179a*-0x1+0x1dfa+-0x331c,_0x5aa51a(0x66d)],[-0x1*-0x125+0x14d0+-0x1379,_0x40b937['RbRWt']],[-0xb75+0x13f*-0x19+-0xb47*-0x4,_0x40b937[_0x5aa51a(0x305)]],[0x1650+-0x29*0x3d+-0xa07,'v3'],[-0x5d1*0x1+0x184b+-0xfe6,'u8'],[0x18e4+0x4bb+-0x1b07,'v3'],[0x1d4d+0x259*-0x2+-0x15f7,'f32'],[-0x1*0x203b+0x8d9+0xa*0x29b,'v3'],[-0x4bf+0x97c+-0x2f*0xb,_0x5aa51a(0x66d)],[-0x1bfd+-0x1539+0x3d*0xda,'f32'],[0x12d0+0x2071+0x3081*-0x1,'f32'],[-0x221e+0xa79+0x1a69,'u8'],[0x1b49+-0x1575+-0x30f,'u8'],[0xb4c+-0x8*-0x430+-0x1*0x2a04,_0x5aa51a(0x66d)],[0x12de+0x1*-0x17d4+-0x11e*-0x7,_0x40b937[_0x5aa51a(0x305)]],[-0xc26*0x2+-0xf68+0xaa6*0x4,'v3'],[-0x764+0x1*-0x24bb+0x6b9*0x7,'v3'],[-0x1745+0x8b*-0x1a+-0x27*-0x109,_0x5aa51a(0x66d)],[-0xc89*0x1+0xbc1*-0x1+0x1b4a,_0x40b937[_0x5aa51a(0x305)]],[0x1fac+-0x1a*0x43+0xaed*-0x2,'f32'],[0x129b+-0x74b+-0x848,'f32'],[-0x1163+-0x6af+0x1b1e,'v3'],[0x1485+-0x1b*0x35+-0x25e*0x5,'u8'],[0x1a7a*0x1+-0x176b+-0xd*-0x1,'v3'],[0x25ab+0x1f00+-0x4183,_0x5aa51a(0x286)],[0x3b*-0x92+-0x1d92+0x1*0x4264,_0x40b937['RbRWt']],[0x3*-0x3b3+-0x8b*-0x2c+0x1*-0x99b,_0x40b937[_0x5aa51a(0x305)]],[0x17*0x2b+-0x2162+0x20b9,_0x5aa51a(0x66d)],[-0x141e+-0x9a3+0x20fd,_0x40b937[_0x5aa51a(0x305)]],[-0xb*-0x9d+0xe4+-0x463*0x1,'u8'],[0xf*0x122+0x1*-0x26c9+0x190c*0x1,'u8'],[-0xd77+0x8*0x233+0x47*-0x3,'u8'],[-0x1*-0x1a14+0x1c6f+-0x3336,'u8'],[0x11e0+-0x1*-0x9c7+-0x1859*0x1,'u8'],[-0x1e+-0x1702*-0x1+-0x1394,_0x40b937['RbRWt']],[-0x2159+0x3be*-0x1+0x3*0xd79,'f32'],[-0x1*0x695+0x83*-0xd+-0x2*-0x84a,_0x5aa51a(0x66d)],[-0x11f5+-0x75*-0x9+-0x2*-0x89a,_0x40b937[_0x5aa51a(0x305)]],[0x1678+-0x973+-0x337*0x3,_0x40b937['RbRWt']],[-0x167*0xd+-0xf45+-0x6*-0x626,'u8'],[0x240f+-0x1f18+-0x18f,'f32'],[0x97c+0x198f+-0x1f9f,'f32'],[-0x91d*0x2+-0x1b78+0x3122,'u8'],[0x224*0xb+-0x2420+0x100c,'v3'],[-0x1*-0x22e1+-0x4f0+-0x1a6d,'v3'],[-0x4a0*-0x1+-0x238a*-0x1+-0x249a*0x1,'v3'],[-0x1*-0x160f+-0xe*-0x161+0x78d*-0x5,_0x5aa51a(0x66d)],[-0x13d2+0x1*-0x1e9b+0x360d,'f32'],[-0x3b*-0x97+-0xca7*-0x1+-0x2bd0,'f32'],[0x1130+0x1378+0x8*-0x420,'v3'],[0x1e3f+0x1*0xd5d+0x1*-0x27e8,_0x5aa51a(0x286)],[0x1433*-0x1+-0x18fd*-0x1+-0x112*0x1,'u8'],[-0x92+-0x293*0xd+0x25c5,'i32'],[-0x233+0x1*-0x4ac+0xa9f*0x1,_0x5aa51a(0x66d)],[-0x1*-0x1d07+0x556*-0x4+-0x3eb,_0x5aa51a(0x66d)],[-0x8d1*-0x2+0x164b+-0x2425,_0x40b937['RbRWt']],[-0xb*-0x247+0xc81+0x1d*-0x12a,'f32'],[0xa82+-0x351*0x5+0x9e3,'v3'],[0xbb3+0x13a5+-0x1b7c,_0x40b937['gJuVk']],[-0x1653+-0x1b*-0x3+0x19e2,'u8'],[-0x80+0x8cf+0xbd*-0x6,'u8'],[0x1e4+0x763+-0x565,'u8'],[-0x4a0*0x7+-0x340*-0x5+0x1404,_0x5aa51a(0x66d)],[-0xfa5+0x1*-0x745+0x1ad2,'i32']],'HealthScript':[[-0x30*0x1d+0x7c4+0x1fc*-0x1,'u8'],[0x139+-0x259*-0xd+0xfb1*-0x2,_0x5aa51a(0x286)],[-0x11*0x61+-0xe39+-0x6*-0x387,_0x5aa51a(0x66d)],[0x1e34+0x2e*0x20+-0x2370,_0x5aa51a(0x66d)],[-0x1*0x16a9+0x219a+-0xa69,_0x40b937[_0x5aa51a(0x305)]],[-0x1*-0xb17+0x10b3+0xd9f*-0x2,'f32'],[-0x7b+-0x6d8+0x2a1*0x3,_0x5aa51a(0x66d)],[0x6f*-0x53+-0x2226+0x1*0x46b7,'f32'],[0x1*0x624+0x26*0x94+-0x1b7c,_0x40b937[_0x5aa51a(0x54c)]],[-0x119e+0x1669+-0x427,_0x5aa51a(0x286)],[0xabd*-0x3+0x1dc4+0x1*0x31b,'u8'],[-0x24fe+0x472*0x1+0x2135,'u8'],[-0x5c6+-0x16b6+0x1d26,'u8'],[-0x1b26+0x1c7*0x7+0xf60,'u8'],[0x8cc+0x21b7*0x1+-0x29c3,_0x40b937['BeXkw']],[-0x21bf+-0x85d+0x2af0,_0x40b937[_0x5aa51a(0x533)]],[-0x3*-0x769+0x2625+0xad*-0x58,_0x40b937['BeXkw']],[0x1972+-0x16d+-0x1709,'obfI'],[-0x2*-0x5b3+0x1966*0x1+-0x23bc,_0x5aa51a(0x246)],[-0x149e+-0x999+-0x15d*-0x17,_0x40b937[_0x5aa51a(0x1a0)]],[-0x2282+0xf92*-0x1+0x304*0x11,_0x40b937[_0x5aa51a(0x61a)]],[-0xa3f*-0x1+-0xa10+0x119*0x1,'f32'],[0x1121+0x187b+-0x102*0x28,_0x40b937['RbRWt']],[-0x311*0x9+-0x1037+0x2d20,_0x40b937['RbRWt']],[0x1*0x89+-0x13e+0x209,_0x5aa51a(0x66d)],[0x55d*-0x6+-0xcff+0x2e89,_0x40b937['RbRWt']],[-0x17a+-0x2*-0x905+-0x144*0xc,'v3'],[0x1227+-0x16d8+0x20b*0x3,_0x5aa51a(0x66d)],[0x15b1+-0x1*-0x267c+0x85*-0x71,_0x5aa51a(0x66d)],[0x23be+0x1c2f+0x3e6d*-0x1,'u8'],[-0xc25+-0x2344+0x30f5,'u8'],[-0x263e+0x1364+0x146a,_0x5aa51a(0x286)]],'PlayerConfig':[],'WeaponManager':[[-0xe51+-0x15*0x10b+0xa6*0x38,_0x5aa51a(0x286)],[0x32c+0x45*0x89+-0x27fd,_0x40b937[_0x5aa51a(0x54c)]],[-0x2493+-0x284+0x1*0x2737,'u8'],[-0x1*0x1016+-0x61*0x1e+0x1b98,'i32'],[0xc81+0x1b6d*0x1+-0x6*0x697,_0x5aa51a(0x5cd)],[0x15f5+-0x7a*0x33+0x2d5,_0x40b937[_0x5aa51a(0x305)]],[0x3b*0xc+0x1*0x112a+-0x136a,_0x40b937['gJuVk']],[-0x23a8+-0x11*-0x1bb+0x6c5*0x1,'u8'],[0x43*-0x3+-0x1112+-0x16*-0xd6,'u8'],[-0x1daf+0x37f*0x7+-0x2e1*-0x2,'i32'],[0x7*-0xfe+-0xce9*0x1+-0x146b*-0x1,_0x40b937[_0x5aa51a(0x305)]],[-0x1d2f*-0x1+-0xd53+-0xf44,'f32'],[-0x6ad+0x13*-0x1cf+0x29b6,_0x40b937[_0x5aa51a(0x54c)]],[0x263e+-0x2688+0x106,'u8'],[-0x12a+0x1*-0xabd+0x1b*0x79,_0x5aa51a(0x246)],[-0x2c*0x3c+-0x217*-0x1+0x929*0x1,_0x40b937['BeXkw']],[-0x13d1+-0x14ba+0x298f,_0x5aa51a(0x66d)],[0x623*0x2+-0x4*0x2f+0xa82*-0x1,_0x5aa51a(0x66d)],[0x1*-0x189f+-0x2220+-0x3bcb*-0x1,_0x5aa51a(0x66d)],[0x2*0xf0d+-0x27*0x73+0x1*-0xb7d,_0x5aa51a(0x66d)],[0x19c5+0x24f0+0x3*-0x1487,_0x5aa51a(0x66d)],[-0x4e*-0x4c+-0x1788+0x188,'u8'],[0x425*0x1+-0xe31+-0x2ce*-0x4,_0x40b937[_0x5aa51a(0x533)]],[0x1*0x1107+0x24e+-0x1215,_0x40b937['BeXkw']],[-0x7eb*-0x1+0x1c12+-0x22a9,_0x5aa51a(0x246)],[0xe72+-0xb01+-0x1*0x209,_0x5aa51a(0x398)],[0x39*-0x11+-0x40d+0x52*0x1d,'obfB'],[0x1ac9*0x1+0x1*-0x38e+-0x15bb,_0x40b937[_0x5aa51a(0x1a0)]],[-0x15fa+0x230d+-0xb87,_0x40b937[_0x5aa51a(0x1a0)]],[-0x1f2f+0xe6+0xb*0x2e7,_0x40b937[_0x5aa51a(0x1a0)]],[-0xa6*-0x2f+0x2*-0xe64+-0x2,_0x40b937['BeXkw']],[0x14b9*0x1+-0x120e*-0x1+0x1*-0x24fb,_0x40b937[_0x5aa51a(0x54c)]],[-0xd49*0x1+-0x2*0x86b+0x221*0xf,'u8'],[-0x106*-0x1+-0x7b*0x40+0x1f8e,'i32'],[-0x2431+-0x1c5*0x7+0x1c*0x1cd,_0x40b937['gJuVk']],[-0x1a73+0x1*-0xf04+0x1*0x2b77,'i32'],[0x2d2+0x1*-0x3c2+0x304,'u8'],[0xd*-0x95+-0x785+0x1132,'u8'],[-0x4bb+0x1aaf+-0x69d*0x3,'u8'],[0x20f6+0x2359*0x1+-0x4231,'u8'],[0x24a7+0xaa5+-0x2d2d,'u8'],[0x2293+-0x8ed+0x67*-0x3a,_0x5aa51a(0x286)],[0x22c4+-0x3*0x90a+0x2*-0x2a7,'u8']],'GG_GameManager':[[-0x21*-0x118+-0x813+-0x1*0x1be1,'u8'],[0x259*0x3+0x1*0x1f67+-0x2*0x1323,_0x5aa51a(0x66d)],[-0x2*-0x125c+-0x2bc*-0x5+-0x3220,'u8'],[0x11e5+0x1962+0x44d*-0xa,'u8'],[0x2710+-0x118+-0x18*0x192,_0x5aa51a(0x66d)],[0x22a6+0x1*-0x19eb+-0x86f,'f32'],[0x4b+-0x1*0x385+-0x12e*-0x3,_0x40b937['gJuVk']],[0x89*0x3b+0x104c+-0x3*0xfd9,_0x40b937['gJuVk']],[-0xf6d+0x1*0x20c9+-0x2c*0x63,'u8'],[-0x251c+-0x7*0x358+0x3cf8,'u8'],[-0x1854+-0x5*0x6d+-0x1aed*-0x1,_0x40b937['RbRWt']],[-0x1*0x21e5+-0x8b+0x1e*0x12a,_0x5aa51a(0x66d)],[-0x11da+-0x2*0xc2b+-0x18*-0x1c8,'i32'],[-0x1b1d*0x1+-0x1b20+-0x1*-0x36d1,'u8'],[0xcda*0x1+0xfe+0x2*-0x692,_0x40b937[_0x5aa51a(0x54c)]],[0xb8*-0x8+-0x147a+-0x1*-0x1af6,_0x40b937['gJuVk']],[0x273+0x1a86+-0x1c39,_0x5aa51a(0x286)],[0x1c1c+-0x7d4+-0x1360,_0x40b937[_0x5aa51a(0x533)]],[-0x56a*0x1+0x10bc+0x17a*-0x7,_0x40b937[_0x5aa51a(0x533)]],[0x549*0x5+-0x2*0xd21+0x1*0xe5,_0x5aa51a(0x246)],[0x7*0x3fd+-0x16e0+-0x3df,'u8'],[0x868+0xb6b+0x12a3*-0x1,'i32'],[0x2b*0x4+-0x13f3+0x8f*0x25,'u8'],[-0x5c*0x3a+-0x1e8+0xac*0x24,'f32'],[0x128b*0x1+-0xd34+-0x3d7,'u8'],[-0x4*0xd+0x1d7d+-0x1bc1,'u8'],[-0x1003+0x5*-0x1e4+0x1b1b,'u8'],[0x1b62+0x1c21+-0x35db,_0x5aa51a(0x286)],[-0x61*0x67+0x1dae+0xb05,_0x40b937[_0x5aa51a(0x305)]],[0x1*-0x1ffd+0x1*0x2003+0x1*0x1aa,'u8'],[0x2aa*-0x4+-0x1*-0x153e+0xb*-0xcf,'u8'],[0x6e5*-0x5+0xb14+0x1*0x191d,_0x5aa51a(0x286)],[0x3*-0x8ef+0x49*0x71+-0x3b0*0x1,_0x40b937['gJuVk']],[0x3b2*-0x5+-0x1f51+0xd*0x3f7,_0x5aa51a(0x66d)],[0xff8+-0x1e8d+-0x5*-0x345,'i32'],[0xb1*-0x29+0x5c6*0x2+-0x1*-0x1295,_0x40b937['RbRWt']],[-0x491+-0x537+0xb94,_0x5aa51a(0x286)],[0x665*0x5+-0x20a8+-0x47*-0x9,_0x40b937[_0x5aa51a(0x54c)]]],'EnemyBot':[[-0x265a+-0xc3*-0x5+0x6ef*0x5,'f32'],[-0xb80+0x637*-0x1+0x1*0x11db,'v3'],[-0x3b6+-0x1*0x932+0xd18,'u8'],[0xeff*-0x1+0x8d1+-0x56*-0x13,_0x40b937[_0x5aa51a(0x305)]],[-0xa09*0x1+-0x2389+0x2dca,_0x40b937[_0x5aa51a(0x305)]],[-0x162+0x319+-0x17b,'u8'],[-0x1*0x227a+0x2155+0x169,'f32'],[0x2381+-0x1e4d+-0x7*0xb4,_0x5aa51a(0x66d)],[-0x127d+0x1*0x17db+-0x512,'u8'],[0x1d02+0x1*0x137d+-0x3032,'u8']]},_0x1cce04={};function _0xc6e7e0(_0x5487a4,_0x1b316e,_0xb2a26a){var _0x1a0c36=_0x5aa51a,_0x4e6066={'GERSe':function(_0x1cb55,_0x240519){return _0x1cb55===_0x240519;},'tTqQK':function(_0x1d1754,_0x18743e){return _0x1d1754!==_0x18743e;},'ETOoH':function(_0x31a465,_0x389f3b){var _0xa5a8bc=_0x4dfd;return _0x40b937[_0xa5a8bc(0x3df)](_0x31a465,_0x389f3b);},'eqOeE':_0x1a0c36(0x624)+_0x1a0c36(0x1db)+_0x1a0c36(0x604)+'fo*)\x20'+'->\x20vo'+_0x1a0c36(0x64e)+'es\x20no'+_0x1a0c36(0x299)+_0x1a0c36(0x33e)+_0x1a0c36(0x4ae)+_0x1a0c36(0x2c9),'IXSsT':_0x1a0c36(0x57a),'qHYGn':_0x1a0c36(0x50f),'lRhPG':_0x40b937[_0x1a0c36(0x236)],'Sebql':function(_0x53b7ff,_0x33481d){return _0x53b7ff(_0x33481d);},'RtKQD':_0x40b937[_0x1a0c36(0x3e5)]};return function(_0x3231c2){var _0x4ea065=_0x1a0c36,_0x2d2caf={'NtMoU':function(_0x35cfae,_0x5dacc3){return _0x4e6066['ETOoH'](_0x35cfae,_0x5dacc3);},'dOuHd':'\x20hook'+_0x4ea065(0x233)+_0x4ea065(0x1f4)+'able\x20'+_0x4ea065(0x5cf)+_0x4ea065(0x232)+_0x4ea065(0x3bf)+_0x4ea065(0x58b)+_0x4ea065(0x302)+_0x4ea065(0x210)+_0x4ea065(0x4d1)+_0x4ea065(0x512),'eQKcA':_0x4e6066['eqOeE']};if(_0x4e6066['tTqQK'](_0x4ea065(0x32d),'YMQgS'))try{if(_0x4ea065(0x57a)===_0x4e6066['IXSsT']){var _0x32a3a5=_0x3231c2&&_0x3231c2[_0x4ea065(0x47c)]?_0x3231c2[_0x4ea065(0x47c)]():0x58*-0x37+-0x3a*-0x6e+-0x604;if(!_0x32a3a5)return;if(_0xb2a26a){if(!_0x1cce04[_0x32a3a5])_0x1cce04[_0x32a3a5]={'ptr':_0x32a3a5,'firstSeen':Date['now'](),'hits':0x0};_0x1cce04[_0x32a3a5][_0x4ea065(0x28a)]++;}else{var _0x11111d=_0x2e62f6[_0x5487a4];if(!_0x11111d||_0x4e6066[_0x4ea065(0x248)](_0x11111d['ptr'],_0x32a3a5)){_0x2e62f6[_0x5487a4]={'ptr':_0x32a3a5,'firstSeen':Date[_0x4ea065(0x35f)](),'hits':0x0,'replaced':!!_0x11111d};try{if('mqJdA'===_0x4e6066[_0x4ea065(0x57f)])_0x4cf309[_0x4ea065(0x300)]=_0x4ea065(0x538)+'Bot\x20a'+_0x4ea065(0x24a)+'_Game'+'Manag'+'er\x20Up'+'date('+_0x4ea065(0x3cb)+'er\x20fi'+_0x4ea065(0x1e3)+'\x20no\x20e'+_0x4ea065(0x2d8)+_0x4ea065(0x1be)+_0x4ea065(0x2cc)+('GG_Ga'+_0x4ea065(0x31a)+_0x4ea065(0x3c2)+'\x20whic'+_0x4ea065(0x452)+'what\x20'+'a\x20lob'+_0x4ea065(0x26e)+'oks\x20l'+_0x4ea065(0x4f2)+_0x4ea065(0x21f)+_0x4ea065(0x44b)+_0x4ea065(0x5b7)+_0x4ea065(0x4ee)+_0x4ea065(0x2c6)+_0x4ea065(0x50a)+_0x4ea065(0x1e4));else{var _0x5007d7=_0xd87e44[_0x4ea065(0x39c)+'r'](function(_0x19ea38){var _0x1d665d=_0x4ea065;return _0x4e6066[_0x1d665d(0x377)](_0x19ea38[_0x1d665d(0x3c9)],_0x5487a4);})[0x1*-0x41d+0x6*-0x5db+-0x11*-0x24f];_0x4d1795={'type':_0x5487a4,'atMs':Date[_0x4ea065(0x35f)]()-_0x40f76c,'originalFunc':!!(_0x5007d7&&_0x5007d7[_0x4ea065(0x3cf)]&&_0x4e6066[_0x4ea065(0x377)](typeof _0x5007d7['hook'][_0x4ea065(0x202)+_0x4ea065(0x528)+'nc'],_0x4e6066[_0x4ea065(0x1b2)])),'resolveGameAtFire':!!_0x421779(),'gameSourceAtFire':_0x2d2e06[_0x4ea065(0x5a7)+'e']};}}catch(_0x4e7fd0){}}}if(_0x4e6066['GERSe'](_0x5487a4,'FPSco'+'ntrol'+'ler')&&_0x2ad040['on'])try{_0x4e6066['Sebql'](_0x2e1dc3,_0x32a3a5);}catch(_0x5b7cf4){}if(!_0x1b316e){if(_0x4ea065(0x5e4)===_0x4ea065(0x5d4))_0x2482dd['push'](_0x2f4b55['type']+':\x20'+_0x15ceb4(_0x499a33&&_0x423d2f[_0x4ea065(0x244)+'ge']||_0x5b9c30)['slice'](0x61+0xf84+-0xfe5,-0x2*-0x833+0x2*0x4c3+0x653*-0x4));else{var _0x5007d7=_0xd87e44[_0x4ea065(0x39c)+'r'](function(_0x1ef01b){return _0x1ef01b['type']===_0x5487a4;})[0x1*-0x12c1+0x16c9+-0x4*0x102];if(_0x5007d7&&_0x5007d7[_0x4ea065(0x3cf)]){if(_0x4e6066[_0x4ea065(0x248)](_0x4e6066['RtKQD'],'KmXoS'))_0x5b90b6[_0x4ea065(0x5f1)+'ngs'][_0x4ea065(0x361)](_0x2d2caf['NtMoU']('UWMK\x20'+_0x4ea065(0x52f)+_0x4ea065(0x32e)+_0x37b769['hooks'+'Resol'+_0x4ea065(0x615)],_0x4ea065(0x1d7))+_0x300a1c[_0x4ea065(0x623)+'Total']+_0x2d2caf[_0x4ea065(0x4c0)]+_0x2d2caf[_0x4ea065(0x1ef)]);else try{_0x5007d7[_0x4ea065(0x3cf)][_0x4ea065(0x250)+'ed']=![];}catch(_0x505470){}}}}}else{var _0x4ea3af=_0x2188b1[_0x4ea065(0x216)];if(!_0x4ea3af||_0x4e6066[_0x4ea065(0x248)](_0x4ea3af[_0x4ea065(0x651)+_0x4ea065(0x2b1)],_0x3e81e1))return;try{if(_0x89d3d6['paren'+'t']&&_0x4e6066[_0x4ea065(0x248)](_0x16cad0['paren'+'t'],_0x4ef8f6))_0x3a3c4b[_0x4ea065(0x430)+'t'][_0x4ea065(0x40e)+_0x4ea065(0x3ce)+'e'](_0x4ea3af,'*');if(_0x592322[_0x4ea065(0x49b)]&&_0x543628['top']!==_0x32d6f4)_0x9dc5df[_0x4ea065(0x49b)][_0x4ea065(0x40e)+'essag'+'e'](_0x4ea3af,'*');}catch(_0x58e5b4){}}}catch(_0x172958){}else _0x3bdc24[_0x4ea065(0x45f)]=_0x355877,_0x4ece1e['v']=_0x5c5ac5[-0xd8+-0x1afc+0x1a*0x112];};}function _0x3b7dc8(){var _0x3e336b=_0x5aa51a;if(_0xd87e44['lengt'+'h'])return!![];if(!window[_0x3e336b(0x49e)+_0x3e336b(0x482)+_0x3e336b(0x21d)]||!window[_0x3e336b(0x49e)+'WebMo'+'dkit']['Runti'+'me'])return![];var _0x3b8011=window[_0x3e336b(0x49e)+_0x3e336b(0x482)+_0x3e336b(0x21d)][_0x3e336b(0x29a)+'me'];if(!_0x3b8011[_0x3e336b(0x568)+'ns']||!_0x3b8011[_0x3e336b(0x568)+'ns'][_0x3e336b(0x614)+'h'])return![];_0x32359d=window[_0x3e336b(0x49e)+'WebMo'+_0x3e336b(0x21d)]['Value'+_0x3e336b(0x573)+'er'],_0x3ba504=_0x3ba504||_0x3b8011[_0x3e336b(0x568)+'ns'][_0x3b8011[_0x3e336b(0x568)+'ns'][_0x3e336b(0x614)+'h']-(0x3*0x523+0x1*-0x92b+-0x63d*0x1)];if(!_0x3ba504||_0x40b937[_0x3e336b(0x3b5)](typeof _0x3ba504['hookP'+'refix'],_0x3e336b(0x52e)+_0x3e336b(0x5f2)))return![];for(var _0x1f2dbf=0x1205+0x2491+-0x22*0x19b;_0x40b937[_0x3e336b(0x497)](_0x1f2dbf,_0x7ddcf9['lengt'+'h']);_0x1f2dbf++){var _0x5d8002=_0x7ddcf9[_0x1f2dbf];try{var _0x36a6e1=_0x3ba504['hookP'+'refix']({'typeName':_0x5d8002[_0x3e336b(0x3c9)],'methodName':_0x40b937['tROnD'],'params':['i32',_0x40b937[_0x3e336b(0x54c)]],'returnType':undefined},_0xc6e7e0(_0x5d8002['type'],_0x5d8002[_0x3e336b(0x56d)],_0x5d8002[_0x3e336b(0x40b)]));_0xd87e44['push']({'type':_0x5d8002[_0x3e336b(0x3c9)],'hook':_0x36a6e1,'keep':_0x5d8002['keep']});}catch(_0x7c8578){_0x2169ed[_0x3e336b(0x361)](_0x40b937[_0x3e336b(0x5c4)](_0x5d8002[_0x3e336b(0x3c9)],':\x20')+_0x40b937[_0x3e336b(0x4ac)](String,_0x7c8578&&_0x7c8578['messa'+'ge']||_0x7c8578)['slice'](-0x2456*-0x1+-0x14fe+-0xf58,-0x713+0x88f*-0x1+0x1042));}}return _0x40b937['udlYv'](_0xd87e44[_0x3e336b(0x614)+'h'],-0x22+0x63d*-0x6+0x2590);}function _0x32a3a7(){var _0x17a3b7=_0x5aa51a,_0x3ff540=0x1c0f+0x26eb+-0x42fa;for(var _0x14cc5f=0x128d+0x508+-0x1795;_0x40b937[_0x17a3b7(0x337)](_0x14cc5f,_0xd87e44[_0x17a3b7(0x614)+'h']);_0x14cc5f++){if(_0x40b937['LZGFZ']('IoCOu','PSBmL')){var _0x3d67ae=_0x39041a[_0x1cdd14[_0x1b007b]];if(_0x3d67ae&&typeof _0x3d67ae===_0x40b937['ltOkd']&&_0x3d67ae['Modul'+'e']&&_0x3d67ae[_0x17a3b7(0x66e)+'e'][_0x17a3b7(0x33d)+'8']&&_0x3d67ae['Modul'+'e'][_0x17a3b7(0x33d)+'8']['buffe'+'r'])return _0x490670[_0x17a3b7(0x5a7)+'e']=_0x40b937[_0x17a3b7(0x1f2)](_0x17a3b7(0x19c)+'w.',_0x2c5f46[_0x2cd07c])+(_0x17a3b7(0x664)+'le'),_0x3d67ae;}else{if(_0xd87e44[_0x14cc5f][_0x17a3b7(0x3cf)]&&_0x40b937[_0x17a3b7(0x1ce)](_0xd87e44[_0x14cc5f]['hook'][_0x17a3b7(0x632)+_0x17a3b7(0x380)],undefined))_0x3ff540++;}}return _0x3ff540;}function _0x25584c(){var _0x39b155=_0x5aa51a,_0x22f30e=-0x119b+0x1704+0x1*-0x569;for(var _0xb57a2b=0x7d5*-0x4+0xa2a+0x2b*0x7e;_0x40b937[_0x39b155(0x25b)](_0xb57a2b,_0xd87e44[_0x39b155(0x614)+'h']);_0xb57a2b++){if(_0xd87e44[_0xb57a2b][_0x39b155(0x3cf)]&&_0xd87e44[_0xb57a2b][_0x39b155(0x3cf)]['appli'+'ed'])_0x22f30e++;}return _0x22f30e;}var _0x2c2752=null,_0xc53b1b=[],_0x32b6b3={},_0x4d1795=null;function _0xeaf1f9(_0x562ed9){var _0x91ed92=_0x5aa51a;if('wWBVm'===_0x91ed92(0x384))try{if(_0x40b937[_0x91ed92(0x3f3)]===_0x91ed92(0x261)){if(!_0x32359d||!_0x562ed9)return null;var _0x35f34a=new _0x32359d(_0x562ed9)[_0x91ed92(0x386)+'assNa'+'me']();return _0x35f34a===undefined?null:_0x35f34a;}else{var _0x1bc951=_0x45aa42[_0x91ed92(0x52f)+'veGam'+'e']();if(_0x1bc951)return _0x3bf49b[_0x91ed92(0x5a7)+'e']=_0x91ed92(0x568)+'n._ru'+_0x91ed92(0x600)+_0x91ed92(0x280)+_0x91ed92(0x462)+'me()',_0x1bc951;}}catch(_0x49dd95){return null;}else _0x29d22d['textC'+'onten'+'t']=_0x40b937[_0x91ed92(0x5d2)](_0x2e4737,_0x3b7fa0[_0x91ed92(0x1b7)][_0x91ed92(0x3af)+'r'])['toFix'+'ed'](-0x1*0x1c4c+0x2614+-0x9c7)+'x';}function _0x2d7e8b(_0x1f635b,_0xba9c53,_0x447bcf){var _0x2c5aa0=_0x5aa51a,_0x428c2a={'ebsPZ':'#saku'+_0x2c5aa0(0x4b9)+'-v2{a'+_0x2c5aa0(0x4b7)+_0x2c5aa0(0x585)+'}'};if(_0x40b937[_0x2c5aa0(0x62d)]!==_0x40b937['ilYXa']){var _0x2d58d6=_0x40b937['cifAd']['split']('|'),_0x71af20=0x55*-0x47+-0x26d6+0x3e69;while(!![]){switch(_0x2d58d6[_0x71af20++]){case'0':for(var _0x1d31eb=0x2*0x693+-0x1fcd*-0x1+-0x2cf3;_0x1d31eb<_0x447bcf;_0x1d31eb++)_0x373932[_0x2c5aa0(0x361)](_0x56c93c[_0x2c5aa0(0x27d)+_0x2c5aa0(0x3eb)](_0x40b937['zXZBU'](_0x1f635b+_0xba9c53,_0x1d31eb*(0xf47+0x1e9f+-0x7*0x68e)),!![]));continue;case'1':_0x2d2e06['ok']+=_0x447bcf;continue;case'2':if(!_0x56c93c)return null;continue;case'3':var _0x373932=[];continue;case'4':var _0x56c93c=_0x46fbfc();continue;case'5':return _0x373932;case'6':if(_0x40b937[_0x2c5aa0(0x251)](_0xba9c53,0x1737+0x5a0+-0x1cd7)||_0x40b937[_0x2c5aa0(0x312)](_0x40b937['ZulNY'](_0xba9c53,_0x447bcf*(0x984*-0x1+0xd16+-0x38e)),_0x56c93c['byteL'+_0x2c5aa0(0x20f)]))return null;continue;}break;}}else{var _0x2a5890=_0x2fb89b[_0x2c5aa0(0x46d)+_0x2c5aa0(0x4a4)+'ent'](_0x2c5aa0(0x5d7));_0x2a5890['id']='sakur'+_0x2c5aa0(0x4f5)+'v2-cs'+'s',_0x2a5890['textC'+'onten'+'t']=_0x428c2a[_0x2c5aa0(0x5f9)],(_0x37b992[_0x2c5aa0(0x553)]||_0x239052[_0x2c5aa0(0x3dd)+_0x2c5aa0(0x2ca)+_0x2c5aa0(0x52c)])[_0x2c5aa0(0x607)+_0x2c5aa0(0x2ee)+'d'](_0x2a5890);}}function _0x33fa20(){var _0x34767a=_0x5aa51a,_0x4f7b01={'thdYw':function(_0x4492f2,_0x50cea4){return _0x4492f2===_0x50cea4;}},_0xdfd233={'enemies':[],'camera':null,'playerList':null,'wasmTypes':null},_0x2c84ab=Object['keys'](_0x1cce04);for(var _0x25d0fc=0x2b*0xd+0x382+-0x5b1;_0x40b937[_0x34767a(0x257)](_0x25d0fc,_0x2c84ab['lengt'+'h'])&&_0x25d0fc<0x5b1+0x88a+-0xe23;_0x25d0fc++){var _0x2efafe=_0x1cce04[_0x2c84ab[_0x25d0fc]],_0x1a0728=_0x136832['Enemy'+_0x34767a(0x3b6)]||[],_0x3ac621={'ptr':_0x40b937[_0x34767a(0x540)]('0x',_0x2efafe[_0x34767a(0x58d)][_0x34767a(0x627)+'ing'](-0x11cc+0x48b+0xd51)),'hits':_0x2efafe[_0x34767a(0x28a)],'pos':null};for(var _0x24a5dd=0x2*-0xfee+0x9cf+0x160d;_0x40b937['isUCu'](_0x24a5dd,_0x1a0728[_0x34767a(0x614)+'h']);_0x24a5dd++){if(_0x1a0728[_0x24a5dd][-0x275+0x1f5f+0x1*-0x1ce9]!=='v3')continue;_0x3ac621[_0x34767a(0x2ec)]=_0x40b937['wfCbk'](_0x2d7e8b,_0x2efafe[_0x34767a(0x58d)],_0x1a0728[_0x24a5dd][-0x1*-0x22c7+0x1a5*0x7+-0x2e4a],0x1a3*-0x8+0x1161*-0x1+-0x79f*-0x4),_0x3ac621[_0x34767a(0x630)]=_0x40b937[_0x34767a(0x3f4)]('0x',_0x1a0728[_0x24a5dd][-0x12df*0x1+-0xa0e+0x1ced]['toStr'+_0x34767a(0x2cf)](0x3*0x579+0xd9*-0xd+-0x556));break;}_0x3ac621[_0x34767a(0x44c)+'rs']=_0x1a0728['filte'+'r'](function(_0xc66ce9){var _0x53dda1=_0x34767a;return _0x4f7b01[_0x53dda1(0x4d4)](_0xc66ce9[0x45a*0x1+-0x1f3+-0x1*0x266],_0x53dda1(0x66d));})[_0x34767a(0x402)](function(_0x137854){var _0x2bde32=_0x34767a;return{'o':_0x137854[0x2324+-0x256d+0x249],'v':_0x40b937[_0x2bde32(0x324)](_0x2f876d,_0x40b937['gOJko'](_0x2efafe['ptr'],_0x137854[0xa3+-0x1*0x612+0x56f]),_0x40b937[_0x2bde32(0x305)])};})['filte'+'r'](function(_0x224c61){return _0x224c61['v']!==undefined&&isFinite(_0x224c61['v']);})['slice'](-0x27*0xc5+-0x1306+0x3109,-0xd9a+-0x3*0x68e+0x10a5*0x2),_0xdfd233[_0x34767a(0x1d3)+'es'][_0x34767a(0x361)](_0x3ac621);}_0xdfd233[_0x34767a(0x51e)+_0x34767a(0x28c)]=_0x2c84ab['lengt'+'h'];var _0x36b892=_0x2e62f6[_0x34767a(0x334)+'meMan'+'ager'];if(_0x36b892&&_0x36b892['ptr']){if(_0x34767a(0x24b)===_0x40b937['ZbcZo']){var _0xbfbca9=_0x40b937['EyUBP'](_0x45548f,_0x1f395b);_0x1a62e4[_0x1c7285]=_0xbfbca9[_0x34767a(0x208)],_0x24234c[_0x5cc487]={'key':_0xbfbca9[_0x34767a(0x64a)],'sane':_0xbfbca9[_0x34767a(0x5f8)],'checked':_0xbfbca9[_0x34767a(0x637)+'ed'],'keyConsistent':_0xbfbca9[_0x34767a(0x2c8)+_0x34767a(0x619)+_0x34767a(0x5a5)],'keySource':_0xbfbca9['keySo'+_0x34767a(0x223)]};}else{var _0x8fc816=_0x2f876d(_0x36b892[_0x34767a(0x58d)]+(-0x54f*-0x1+0x218e*0x1+0x1*-0x26c9),_0x40b937[_0x34767a(0x218)]),_0x536f70=_0x2f876d(_0x40b937[_0x34767a(0x2c4)](_0x36b892[_0x34767a(0x58d)],-0x8e6*0x2+-0x1939+0x5*0x8ad),_0x34767a(0x426));_0xdfd233[_0x34767a(0x60a)+'a']=_0x8fc816?'0x'+(_0x8fc816>>>-0x1aa*0x6+-0x1*-0x1cd7+-0x3*0x649)['toStr'+_0x34767a(0x2cf)](-0x12a*0x1f+0x1c5+-0xd*-0x2a5):null,_0xdfd233['playe'+'rList']=_0x536f70?'0x'+_0x40b937[_0x34767a(0x1af)](_0x536f70,0x12e*-0x1d+-0x119b*-0x1+-0x27*-0x6d)[_0x34767a(0x627)+_0x34767a(0x2cf)](0x1*0x22dc+0x1*-0x14cb+-0xef*0xf):null;}}else _0xdfd233[_0x34767a(0x300)]=_0x40b937[_0x34767a(0x241)]+(_0x34767a(0x334)+_0x34767a(0x31a)+_0x34767a(0x3c2)+_0x34767a(0x428)+_0x34767a(0x452)+_0x34767a(0x3fd)+_0x34767a(0x327)+'by\x20lo'+_0x34767a(0x4bd)+_0x34767a(0x4f2)+_0x34767a(0x21f)+'he\x20re'+_0x34767a(0x5b7)+_0x34767a(0x4ee)+_0x34767a(0x2c6)+_0x34767a(0x50a)+'tch.');try{var _0x51a149=(_0x34767a(0x485)+_0x34767a(0x3ba))[_0x34767a(0x5a9)]('|'),_0x495ba3=0xcfe+-0x6*-0x1d1+0x4*-0x5f9;while(!![]){switch(_0x51a149[_0x495ba3++]){case'0':_0xdfd233['wasmT'+_0x34767a(0x562)]=_0x33ff1c;continue;case'1':for(var _0x235cb2=0x1*0x2037+0x1*0xe37+0x2a*-0x11b;_0x40b937[_0x34767a(0x4ab)](_0x235cb2,_0x523638['lengt'+'h'])&&_0x40b937[_0x34767a(0x1fa)](_0x235cb2,-0xf34+0x1*0xd7e+0x1156);_0x235cb2++){var _0x163f6f=_0x523638[_0x235cb2][_0x34767a(0x22c)+'s'][_0x34767a(0x653)](',')+_0x34767a(0x41a)+(_0x523638[_0x235cb2][_0x34767a(0x3fa)+'nType']||_0x40b937['VTeeq']);_0x33ff1c[_0x163f6f]=(_0x33ff1c[_0x163f6f]||0x1*0x1682+0x2b4*0x7+-0x296e)+(-0x163b+-0x6*0x679+0x2*0x1e89);}continue;case'2':var _0x33ff1c={};continue;case'3':var _0x5680fe=window[_0x34767a(0x49e)+_0x34767a(0x482)+_0x34767a(0x21d)]&&window['Unity'+_0x34767a(0x482)+_0x34767a(0x21d)][_0x34767a(0x29a)+'me'];continue;case'4':var _0x523638=_0x5680fe&&_0x5680fe['inter'+_0x34767a(0x425)+_0x34767a(0x61c)+'es']||[];continue;}break;}}catch(_0x391b05){}return _0xdfd233;}function _0x1d63f8(){var _0x13c6e2=_0x5aa51a,_0x59fe9a={};_0x2d2e06['ok']=0x23d*0x8+0x8f*0x11+0x131*-0x17,_0x2d2e06[_0x13c6e2(0x551)+'d']=-0x1*-0x109c+-0x1*-0x1c42+0x1*-0x2cde,_0x2d2e06[_0x13c6e2(0x22f)+_0x13c6e2(0x4e4)]=null;var _0xdd4537=Object[_0x13c6e2(0x3ff)](_0x136832);for(var _0x81c145=0x1798+0xfe6+-0x3*0xd2a;_0x40b937[_0x13c6e2(0x1a5)](_0x81c145,_0xdd4537['lengt'+'h']);_0x81c145++){var _0x4c9c45=_0xdd4537[_0x81c145],_0x4371b2=_0x2e62f6[_0x4c9c45];if(!_0x4371b2||!_0x4371b2['ptr'])continue;var _0x29b6ea=_0x136832[_0x4c9c45]||[],_0x4c22f3=[];for(var _0x1255bb=-0x2415*-0x1+-0x360*-0x7+-0xf*0x3fb;_0x40b937[_0x13c6e2(0x4b0)](_0x1255bb,_0x29b6ea[_0x13c6e2(0x614)+'h']);_0x1255bb++){var _0x7ea57e=_0x29b6ea[_0x1255bb][0x16a9+0x729+-0x1*0x1dd2],_0x6314c2=_0x29b6ea[_0x1255bb][-0x1178*-0x1+-0x14*0x22+-0xecf];if(_0x6314c2['index'+'Of'](_0x40b937['FgUfo'])===0x2395*-0x1+0xf5*-0x25+0x46fe){var _0x482ba9=_0x2a60cf(_0x4371b2['ptr'],_0x7ea57e,_0x6314c2);if(!_0x482ba9)continue;_0x482ba9['o']=_0x7ea57e,_0x482ba9['k']=_0x6314c2,_0x4c22f3['push'](_0x482ba9);}else{var _0x112b65=_0x2f876d(_0x4371b2['ptr']+_0x7ea57e,_0x6314c2);if(_0x40b937['aEmrM'](_0x112b65,undefined))continue;var _0x48d2db={'o':_0x7ea57e,'k':_0x6314c2,'v':_0x112b65};if(_0x40b937[_0x13c6e2(0x32a)](_0x6314c2,'v2')||_0x40b937['GdlnQ'](_0x6314c2,'v3')||_0x40b937[_0x13c6e2(0x472)](_0x6314c2,'v4')){var _0x919750=_0x6314c2==='v2'?0x14d5+-0x3*-0xf6+-0x17b5:_0x6314c2==='v3'?-0x2411+-0x500+-0x1de*-0x16:0x7*-0x2a7+-0x32*-0x7+0xd*0x153,_0x282d05=_0x2d7e8b(_0x4371b2['ptr'],_0x7ea57e,_0x919750);_0x282d05&&(_0x48d2db['xyz']=_0x282d05,_0x48d2db['v']=_0x282d05[0x2349+-0x2659+0x7*0x70]);}_0x4c22f3[_0x13c6e2(0x361)](_0x48d2db);}}if(_0x4c22f3[_0x13c6e2(0x614)+'h']){if('VRydV'!==_0x40b937[_0x13c6e2(0x24d)]){var _0x5aa874=_0x2e0ea7(_0x4c22f3);_0x59fe9a[_0x4c9c45]=_0x5aa874[_0x13c6e2(0x208)],_0x32b6b3[_0x4c9c45]={'key':_0x5aa874['key'],'sane':_0x5aa874[_0x13c6e2(0x5f8)],'checked':_0x5aa874['check'+'ed'],'keyConsistent':_0x5aa874[_0x13c6e2(0x2c8)+_0x13c6e2(0x619)+'ent'],'keySource':_0x5aa874['keySo'+_0x13c6e2(0x223)]};}else _0x56fb1c[_0x13c6e2(0x361)](_0x40b937['sPDCL']),_0x2e2b29[_0x13c6e2(0x361)](''),_0x59bb48['push'](_0x13c6e2(0x5cc)+_0x13c6e2(0x2a0)+_0x13c6e2(0x5df)+'on\x20th'+_0x13c6e2(0x256)+_0x13c6e2(0x1c4)+'wn\x20Up'+'date('+_0x13c6e2(0x4d0)+'thing'+_0x13c6e2(0x3d1)+'ured\x20'+'means'),_0x387bd5[_0x13c6e2(0x361)](_0x40b937[_0x13c6e2(0x21e)]);}}return _0x59fe9a;}function _0x2e0ea7(_0x333378){var _0x860157=_0x5aa51a,_0xfebc91=-0x26d5+0x3*-0x61b+-0x26*-0x181,_0x46a6c5=0x2319+-0x16*-0xce+0x78b*-0x7,_0x4dc67a=null;for(var _0x1d2673=0x2573*-0x1+-0x12b6+0x3829;_0x40b937[_0x860157(0x219)](_0x1d2673,_0x333378[_0x860157(0x614)+'h']);_0x1d2673++){var _0x40d7bb=_0x333378[_0x1d2673];if(_0x40b937[_0x860157(0x5bc)](_0x40d7bb['k'][_0x860157(0x5cf)+'Of'](_0x40b937[_0x860157(0x2eb)]),0x1705+0x164+-0x1869))continue;_0x40d7bb['v']=_0x40b937[_0x860157(0x28e)](_0x5644ea,_0x40d7bb['k'],_0x40d7bb['hidde'+'n'],_0x40d7bb['keyAt'+'Offse'+'t0']),_0x40d7bb['keyUs'+'ed']=_0x40d7bb[_0x860157(0x333)+_0x860157(0x5a8)+'t0'],_0x40d7bb[_0x860157(0x27a)]=_0x40b937['QamyK'](_0x40b937[_0x860157(0x3df)](_0x40b937[_0x860157(0x231)](_0x40b937['EDvWa'](_0x40b937['cGbJu']('hid=',_0x40d7bb[_0x860157(0x654)+'n'])+(_0x860157(0x2db)+'=')+_0x40d7bb['fake'],_0x40d7bb[_0x860157(0x418)]?_0x860157(0x4d7)+'VE':''),'\x20k0='),_0x40d7bb[_0x860157(0x333)+_0x860157(0x5a8)+'t0'])+_0x860157(0x39f),_0x40d7bb[_0x860157(0x359)]);if(_0x40b937['JMfgs'](_0x4dc67a,null))_0x4dc67a=_0x40d7bb['keyAt'+_0x860157(0x5a8)+'t0'];_0x46a6c5++,_0x19df3c(_0x40d7bb)?(_0xfebc91++,_0x40d7bb[_0x860157(0x5f8)]=!![]):_0x40d7bb['sane']=![],delete _0x40d7bb[_0x860157(0x36d)];}return{'rows':_0x333378,'key':_0x4dc67a,'sane':_0xfebc91,'checked':_0x46a6c5,'keyConsistent':_0x40b937[_0x860157(0x1da)](_0x59f22c,_0x333378),'keySource':'offse'+_0x860157(0x263)+_0x860157(0x243)+_0x860157(0x41c)};}function _0x59f22c(_0x34787f){var _0xb5631=_0x5aa51a,_0x43ef17={};for(var _0x599694=-0x36d*0x2+0x10a6+-0x1*0x9cc;_0x599694<_0x34787f[_0xb5631(0x614)+'h'];_0x599694++){if(_0xb5631(0x4f1)===_0x40b937['DKsas']){var _0x3b8ca5=_0x34787f[_0x599694];if(_0x40b937[_0xb5631(0x503)](_0x3b8ca5['k'][_0xb5631(0x5cf)+'Of'](_0xb5631(0x1c7)),0x708+-0x6f6+-0x12))continue;if(_0x40b937['JRGLJ'](_0x43ef17[_0x3b8ca5['k']],undefined))_0x43ef17[_0x3b8ca5['k']]=_0x3b8ca5['keyUs'+'ed'];else{if(_0x43ef17[_0x3b8ca5['k']]!==_0x3b8ca5['keyUs'+'ed'])return![];}}else _0x5b8f82['hasMo'+'dule']=!!(_0x15ea9d&&_0x2e23f0[_0xb5631(0x66e)+'e']),_0x1de6af['heapU'+'8']=!!(_0x366edf&&_0x4e009b['Modul'+'e']&&_0xb47bce[_0xb5631(0x66e)+'e'][_0xb5631(0x33d)+'8']),_0x1545a5[_0xb5631(0x198)+_0xb5631(0x1d0)]=_0x34b9ad['heapU'+'8']?_0x259b1c[_0xb5631(0x66e)+'e']['HEAPU'+'8'][_0xb5631(0x614)+'h']:0x26e0+0x1d0+-0x28b0;}return!![];}function _0x19df3c(_0x86b0c3){var _0x269b9d=_0x5aa51a,_0x35f48a={'hjpVu':_0x40b937[_0x269b9d(0x490)],'JMgkv':function(_0x16ce60,_0x269770){return _0x16ce60&&_0x269770;}},_0xc0aea0=_0x86b0c3['v'];if(_0x40b937[_0x269b9d(0x3e0)](typeof _0xc0aea0,_0x269b9d(0x5d5)+'r')||!isFinite(_0xc0aea0))return![];if(_0x86b0c3['k']===_0x40b937[_0x269b9d(0x1a0)])return _0x40b937['KXKgA'](_0xc0aea0,-0x469*0x6+0xdbd+-0x1*-0xcb9)||_0xc0aea0===-0x210b+0x594*0x5+0x528;var _0x491116=_0x86b0c3[_0x269b9d(0x40c)];if(typeof _0x491116!=='numbe'+'r'||!_0x40b937[_0x269b9d(0x4da)](isFinite,_0x491116))return!![];if(_0x40b937[_0x269b9d(0x49c)](_0x86b0c3[_0x269b9d(0x418)],-0x83*0x13+0x249+0x7f*0xf)){if(_0x269b9d(0x4f3)==='vBwiz'){var _0x1dcb42=(_0x269b9d(0x1fd)+_0x269b9d(0x2d4)+'1')['split']('|'),_0x4a3e16=-0x2269+-0x24df+-0x1*-0x4748;while(!![]){switch(_0x1dcb42[_0x4a3e16++]){case'0':_0x41255f[_0x269b9d(0x568)+_0x269b9d(0x4f4)+_0x269b9d(0x437)+_0x269b9d(0x2ff)+'ted']=!!(_0x1212f1&&_0x4371c3['_runt'+'ime']&&_0x3a8d57['_runt'+'ime']===_0x54da4e);continue;case'1':_0x288955['plugi'+_0x269b9d(0x4f4)+'imeGa'+'me']=_0x10f58f&&_0x53f1bb['_runt'+_0x269b9d(0x5e9)]&&_0x38780e['_runt'+'ime'][_0x269b9d(0x1a1)]?typeof _0x3f29c5['_runt'+_0x269b9d(0x5e9)][_0x269b9d(0x1a1)]:_0x269b9d(0x2d6);continue;case'2':_0x226c17[_0x269b9d(0x492)+_0x269b9d(0x54a)+'e']=_0x54da4e&&_0x54da4e['_game']?typeof _0x54da4e['_game']:_0x35f48a['hjpVu'];continue;case'3':_0x19b4a1[_0x269b9d(0x5a3)]=_0x54da4e&&_0x54da4e[_0x269b9d(0x651)+'uraTa'+'g']||null;continue;case'4':var _0x54da4e=_0x1f150f['Unity'+_0x269b9d(0x482)+_0x269b9d(0x21d)]&&_0x13117e['Unity'+'WebMo'+_0x269b9d(0x21d)][_0x269b9d(0x29a)+'me'];continue;case'5':_0x454832[_0x269b9d(0x20b)+_0x269b9d(0x44d)]=!!(_0x35f48a['JMgkv'](_0x54da4e,_0x1291ee)&&_0x54da4e[_0x269b9d(0x651)+'uraTa'+'g']===_0x3d7890);continue;}break;}}else return _0x40b937['liXsX'](Math[_0x269b9d(0x539)](_0x40b937[_0x269b9d(0x558)](_0xc0aea0,_0x491116)),Math[_0x269b9d(0x3ad)](-0x1829+-0x3f6+0x1c20,Math[_0x269b9d(0x539)](_0x491116)*(-0x9f5+0x186a+-0xe75+0.6)));}return Math['abs'](_0xc0aea0)<0xd445afd*0x1+0xfe6e618*0x1+0x1e6f88eb;}function _0x339b2d(){var _0x464984=_0x5aa51a,_0x4a7680={'eSIiU':function(_0x4d8415,_0x497996){return _0x4d8415(_0x497996);},'mVcFp':_0x40b937['yIaml'],'BuEeH':_0x464984(0x494)+':','YdjRg':function(_0x63a87a,_0x1a80e7,_0x11e86c){return _0x63a87a(_0x1a80e7,_0x11e86c);}};if(_0x40b937['wnXoW'](_0x40b937[_0x464984(0x2d9)],'xdbRU')){var _0xa66ebd=_0x3c026c();if(!_0xa66ebd)return _0x5e4ee5;if(_0xa66ebd[_0x464984(0x29f)+'et'][_0x464984(0x1c8)])return _0xa66ebd[_0x464984(0x1c8)];try{return _0x4a7680['eSIiU'](_0x3842af,_0xa66ebd);}catch(_0x519628){return _0xa66ebd['datas'+'et']['api']='1',_0xa66ebd['api']=_0x37d8f8,_0x2a1b01['warn'](_0x4a7680[_0x464984(0x373)],_0x4a7680[_0x464984(0x4f0)]+_0x23e746,_0x519628),_0x47cc33;}}else{var _0x32e751={};try{var _0x52ac47=window[_0x464984(0x49e)+'WebMo'+'dkit']&&window['Unity'+_0x464984(0x482)+'dkit'][_0x464984(0x29a)+'me'];_0x32e751[_0x464984(0x5a3)]=_0x52ac47&&_0x52ac47[_0x464984(0x651)+'uraTa'+'g']||null,_0x32e751[_0x464984(0x20b)+_0x464984(0x44d)]=!!(_0x52ac47&&_0x16cfc1&&_0x40b937[_0x464984(0x252)](_0x52ac47['__sak'+_0x464984(0x4a5)+'g'],_0x16cfc1)),_0x32e751[_0x464984(0x492)+'meGam'+'e']=_0x52ac47&&_0x52ac47[_0x464984(0x1a1)]?typeof _0x52ac47['_game']:_0x40b937['VMrmN'],_0x32e751[_0x464984(0x568)+_0x464984(0x4f4)+_0x464984(0x437)+_0x464984(0x2ff)+_0x464984(0x33b)]=!!(_0x3ba504&&_0x3ba504[_0x464984(0x1d5)+'ime']&&_0x40b937[_0x464984(0x4e3)](_0x3ba504[_0x464984(0x1d5)+_0x464984(0x5e9)],_0x52ac47)),_0x32e751[_0x464984(0x568)+'nRunt'+_0x464984(0x579)+'me']=_0x3ba504&&_0x3ba504[_0x464984(0x1d5)+_0x464984(0x5e9)]&&_0x3ba504['_runt'+'ime']['_game']?typeof _0x3ba504['_runt'+'ime'][_0x464984(0x1a1)]:_0x464984(0x2d6);}catch(_0x30f6fa){if(_0x464984(0x2b2)==='MeluU'){var _0x39a689=_0xaf65ed['data'];if(_0x39a689&&_0x39a689['__sak'+'ura']===_0x12833a&&_0x39a689['kind']===_0x464984(0x1a2))_0x4a7680[_0x464984(0x5e5)](_0x2764c9,_0x39a689[_0x464984(0x1a2)],_0x39a689[_0x464984(0x57d)]);}else _0x32e751['error']=_0x40b937[_0x464984(0x4e7)](String,_0x30f6fa&&_0x30f6fa[_0x464984(0x244)+'ge']||_0x30f6fa);}return _0x32e751;}}function _0x11be42(){var _0x1bf1c6=_0x5aa51a,_0x31a8e8={'lDnws':function(_0x318099,_0x58169c){return _0x40b937['ppjbS'](_0x318099,_0x58169c);},'jNBFk':function(_0x263807,_0x314f45){return _0x40b937['ciPLe'](_0x263807,_0x314f45);},'vgbCW':function(_0xbc2fab){return _0x40b937['VdJWr'](_0xbc2fab);}};if(_0x40b937['VDdHo']('bTQTX',_0x1bf1c6(0x433))){var _0x3bb876=[_0x40b937[_0x1bf1c6(0x376)],'unity'+_0x1bf1c6(0x35b),_0x1bf1c6(0x329),_0x40b937[_0x1bf1c6(0x4c7)]],_0xb71061={};for(var _0x58402c=-0x1*0x19c6+-0xd07+0xcef*0x3;_0x58402c<_0x3bb876[_0x1bf1c6(0x614)+'h'];_0x58402c++){var _0x176f36=_0x3bb876[_0x58402c],_0x1f0eb0=typeof window[_0x176f36];_0xb71061[_0x176f36]=_0x40b937[_0x1bf1c6(0x252)](_0x1f0eb0,_0x1bf1c6(0x438)+_0x1bf1c6(0x5dd))?_0x40b937[_0x1bf1c6(0x575)]:_0x1f0eb0;}var _0x4ae268=_0x40b937[_0x1bf1c6(0x479)](_0x421779);_0xb71061['gameS'+_0x1bf1c6(0x4ad)]=_0x2d2e06['sourc'+'e'];try{_0xb71061[_0x1bf1c6(0x52d)+_0x1bf1c6(0x322)]=!!(_0x4ae268&&_0x4ae268['Modul'+'e']),_0xb71061[_0x1bf1c6(0x1b4)+'8']=!!(_0x4ae268&&_0x4ae268['Modul'+'e']&&_0x4ae268[_0x1bf1c6(0x66e)+'e']['HEAPU'+'8']),_0xb71061['heapB'+_0x1bf1c6(0x1d0)]=_0xb71061[_0x1bf1c6(0x1b4)+'8']?_0x4ae268['Modul'+'e'][_0x1bf1c6(0x33d)+'8']['lengt'+'h']:0x141e+-0x10d5+-0x1*0x349;}catch(_0x198c6e){if(_0x1bf1c6(0x234)!==_0x1bf1c6(0x234)){var _0x4cba0a={'tkYBa':function(_0x59db60,_0x32dace){return _0x31a8e8['lDnws'](_0x59db60,_0x32dace);}};_0x1a0648[_0x4d7966]={'ptr':_0x2bb98f,'firstSeen':_0x2bf20e['now'](),'hits':0x0,'replaced':!!_0x18f9df};try{var _0x4c9b80=_0x43c458['filte'+'r'](function(_0x4393){var _0x50f14a=_0x1bf1c6;return _0x4cba0a['tkYBa'](_0x4393[_0x50f14a(0x3c9)],_0x31d4ea);})[0x2179+0x5*0x5fe+0x3f6f*-0x1];_0x52840d={'type':_0xed83c8,'atMs':_0x31a8e8['jNBFk'](_0x1a99e3[_0x1bf1c6(0x35f)](),_0xd82e20),'originalFunc':!!(_0x4c9b80&&_0x4c9b80[_0x1bf1c6(0x3cf)]&&typeof _0x4c9b80[_0x1bf1c6(0x3cf)]['origi'+'nalFu'+'nc']===_0x1bf1c6(0x52e)+_0x1bf1c6(0x5f2)),'resolveGameAtFire':!!_0x31a8e8['vgbCW'](_0x569baa),'gameSourceAtFire':_0x2ba976[_0x1bf1c6(0x5a7)+'e']};}catch(_0xab57b){}}else _0xb71061[_0x1bf1c6(0x52d)+'dule']=![],_0xb71061['heapU'+'8']=![],_0xb71061[_0x1bf1c6(0x198)+_0x1bf1c6(0x1d0)]=-0x751+-0x154f+0x1ca0;}return _0xb71061[_0x1bf1c6(0x319)+'Wrapp'+'er']=typeof _0x32359d,_0xb71061;}else{var _0x1a39ec=new _0x1ad10a(_0x40b937[_0x1bf1c6(0x415)]);_0x1a39ec[_0x1bf1c6(0x40e)+_0x1bf1c6(0x3ce)+'e'](_0x102e4e),_0x338195(function(){var _0x59d89d=_0x1bf1c6;try{_0x1a39ec[_0x59d89d(0x19b)]();}catch(_0x105745){}},0x41b*0x1+-0x1777*0x1+0x1456);}}function _0x5389cc(_0x4522a3){var _0x35a3e5=_0x5aa51a,_0x114dbb={};for(var _0x5227f3 in _0x4522a3){var _0x27b3c7=_0x4522a3[_0x5227f3];for(var _0x162d73=0x13ab+0x4a6+-0x81b*0x3;_0x40b937[_0x35a3e5(0x337)](_0x162d73,_0x27b3c7[_0x35a3e5(0x614)+'h']);_0x162d73++){_0x114dbb[_0x5227f3+_0x40b937[_0x35a3e5(0x260)]+_0x27b3c7[_0x162d73]['o']['toStr'+'ing'](0x169+0xb4e*-0x3+0x18d*0x15)]=_0x27b3c7[_0x162d73]['v'];}}return _0x114dbb;}function _0x295ac8(_0x16719b,_0x4745bd){var _0x26308b=_0x5aa51a;if(_0x40b937['ywwlJ'](_0x16719b,'speed')){if(_0x4745bd&&_0x40b937[_0x26308b(0x252)](typeof _0x4745bd['on'],_0x40b937['Hehvx']))_0x2ad040['on']=_0x4745bd['on'];if(_0x4745bd&&typeof _0x4745bd['facto'+'r']===_0x26308b(0x5d5)+'r'){if('qenZn'!=='pHRGn')_0x2ad040[_0x26308b(0x3af)+'r']=Math[_0x26308b(0x507)](-0x10f8+-0x460+0x1*0x155d,Math['max'](-0xe11+-0x1*-0xc9+0xd49*0x1,_0x4745bd[_0x26308b(0x3af)+'r']));else{if(_0x315661&&_0x40b937[_0x26308b(0x32a)](typeof _0x11cb56['on'],'boole'+'an'))_0x1b717c['on']=_0x4a0025['on'];_0x573c7e&&typeof _0x4e387b[_0x26308b(0x3af)+'r']===_0x40b937['SmXrX']&&(_0x557cb2[_0x26308b(0x3af)+'r']=_0x280b6c[_0x26308b(0x507)](-0x20c0*0x1+0x140c+0xcb9,_0x121c47[_0x26308b(0x3ad)](0xd*-0x2ab+-0x23*-0x47+0x1*0x18fb,_0x1f7f19[_0x26308b(0x3af)+'r'])));if(!_0xe08cce['on'])_0x425203={};return;}}if(!_0x2ad040['on'])_0x4d36aa={};return;}if(_0x40b937[_0x26308b(0x2d3)](_0x16719b,_0x26308b(0x33f)+_0x26308b(0x5ee)))return;var _0xec79e7=_0x1d63f8(),_0x44b7db=_0x5389cc(_0xec79e7);if(!_0x2c2752){_0x2c2752=_0x44b7db,_0xc53b1b=[],_0x40b937[_0x26308b(0x204)](_0x212c81,_0x26308b(0x287)+'t',{'report':_0x1ef472()});return;}_0xc53b1b=[];for(var _0x440c81 in _0x44b7db){var _0x51e7b9=_0x2c2752[_0x440c81],_0x3ece73=_0x44b7db[_0x440c81];if(_0x51e7b9!==_0x3ece73)_0xc53b1b[_0x26308b(0x361)](_0x40b937['ZFEfk'](_0x40b937[_0x26308b(0x308)](_0x440c81+':\x20'+_0x51e7b9,'\x20->\x20'),_0x3ece73));}_0x2c2752=_0x44b7db,_0x212c81(_0x26308b(0x287)+'t',{'report':_0x1ef472()});}window[_0x5aa51a(0x209)+_0x5aa51a(0x4bc)+_0x5aa51a(0x63e)+'r'](_0x40b937['WBpCF'],function(_0x344bc7){var _0x414429=_0x5aa51a,_0x29c6a4={'lhCkk':'obfI','GlRNo':function(_0x382cfd,_0x3ced0f){return _0x382cfd&_0x3ced0f;}};if(_0x344bc7&&_0x40b937[_0x414429(0x477)](_0x344bc7['code'],'F9')){if(_0x414429(0x265)!==_0x414429(0x608))_0x344bc7[_0x414429(0x487)+'ntDef'+_0x414429(0x515)](),_0x40b937['dIobi'](_0x295ac8,_0x40b937['cCjCR']);else{var _0x25287a=(_0x414429(0x2dc)+_0x414429(0x62a)+'9|7|6'+'|3|1')['split']('|'),_0x4dd385=0x15d*0x16+0x47*-0x6d+0x3d;while(!![]){switch(_0x25287a[_0x4dd385++]){case'0':var _0x32f621=_0xef8942(_0x5337b5,_0x159e2e,_0x3b4255[_0x414429(0x45a)]);continue;case'1':return{'keyAtOffset0':_0x48d62b,'hidden':_0x2034dc,'inited':_0x5019c5,'fake':_0x594cf1,'act':_0x475eca,'hex':_0x43d942(_0x32f621),'alt':_0x108482===_0x29c6a4['lhCkk']?_0x2034dc^(_0x594cf1|0x2b*-0x5a+0x22ae+0x10*-0x139):null};case'2':var _0x564818=new _0x29eee1(_0x32f621[_0x414429(0x41f)+'r'],_0x32f621['byteO'+_0x414429(0x2c3)],_0x32f621['byteL'+'ength']);continue;case'3':var _0x475eca=_0x29c6a4[_0x414429(0x3ee)](_0x564818[_0x414429(0x670)+'nt8'](_0x3b4255['activ'+'e']),0x1447*-0x1+-0x607+-0x543*-0x5);continue;case'4':var _0x48d62b=_0x564818[_0x414429(0x240)+'t32'](_0x3b4255['key'],!![]);continue;case'5':if(!_0x32f621)return null;continue;case'6':var _0x594cf1=_0x5a94a8==='obfF'?_0x564818['getFl'+'oat32'](_0x3b4255[_0x414429(0x40c)],!![]):_0x3be4b2===_0x414429(0x246)?_0x564818[_0x414429(0x240)+_0x414429(0x4ff)](_0x3b4255[_0x414429(0x40c)],!![]):_0x564818[_0x414429(0x670)+_0x414429(0x5fa)](_0x3b4255[_0x414429(0x40c)]);continue;case'7':var _0x5019c5=_0x564818[_0x414429(0x670)+'nt8'](_0x3b4255['inite'+'d'])&0xb2c+0x3eb+0xf16*-0x1;continue;case'8':var _0x3b4255=_0x41061a[_0x30b278];continue;case'9':var _0x2034dc=_0x564818[_0x414429(0x240)+_0x414429(0x4ff)](_0x3b4255['hidde'+'n'],!![]);continue;}break;}}}},!![]);function _0x1ef472(){var _0x13a492=_0x5aa51a,_0x348818={'UCPri':_0x13a492(0x19c)+_0x13a492(0x349)+'tyWeb'+'Modki'+_0x13a492(0x5ae)+'ueWra'+_0x13a492(0x5fb)+'is\x20mi'+_0x13a492(0x33a)+'\x20-\x20ca'+'pture'+_0x13a492(0x391)+_0x13a492(0x4c2)+_0x13a492(0x526)+'nd.'},_0x3f8a16=window[_0x13a492(0x49e)+_0x13a492(0x482)+_0x13a492(0x21d)]&&window['Unity'+_0x13a492(0x482)+'dkit'][_0x13a492(0x29a)+'me']||null,_0x277829=_0x3f8a16&&_0x3f8a16[_0x13a492(0x409)+'pCont'+'ext'],_0x208626=_0x277829&&_0x277829['scrip'+_0x13a492(0x277)],_0x2645b2={},_0x5190d7=[];for(var _0xb0891f in _0x2e62f6){_0x2645b2[_0xb0891f]='0x'+_0x2e62f6[_0xb0891f][_0x13a492(0x58d)]['toStr'+_0x13a492(0x2cf)](0x7b*-0x3a+0xc*0x21a+0x15b*0x2);if(_0x2e62f6[_0xb0891f]['repla'+_0x13a492(0x3cc)])_0x5190d7[_0x13a492(0x361)](_0xb0891f);}var _0x49a898={};for(var _0x52bf61 in _0x2e62f6)_0x49a898[_0x52bf61]=_0xeaf1f9(_0x2e62f6[_0x52bf61][_0x13a492(0x58d)]);var _0x16d03e={},_0x2ccda7=null;try{_0x16d03e=_0x40b937['VdJWr'](_0x1d63f8);}catch(_0x573065){if(_0x13a492(0x4e5)===_0x13a492(0x1e2)){var _0x224ee0=_0x185c90[_0x26cdb6],_0x49e21d=typeof _0x34c851[_0x224ee0];_0x1b9e2c[_0x224ee0]=_0x49e21d===_0x13a492(0x438)+_0x13a492(0x5dd)?'undef'+'ined':_0x49e21d;}else _0x2ccda7=String(_0x573065&&_0x573065['messa'+'ge']||_0x573065);}var _0x3ce742={'version':_0x527f5d,'when':new Date()[_0x13a492(0x440)+_0x13a492(0x4cc)+'g'](),'elapsedMs':_0x40b937[_0x13a492(0x23e)](Date[_0x13a492(0x35f)](),_0x40f76c),'frame':location[_0x13a492(0x19d)]['slice'](-0x1*-0x1b3e+-0x717+0x43*-0x4d,-0xea*0x1b+-0x133*-0x8+0xf8e),'host':_0x464711,'frameRole':_0x447760,'uwmk':!!_0x3f8a16,'il2CppContext':!!_0x277829,'typeCount':_0x208626?Object[_0x13a492(0x3ff)](_0x208626)['lengt'+'h']:null,'arm':_0x1d536c,'assemblies':_0x3486f4,'hooksTotal':_0xd87e44[_0x13a492(0x614)+'h'],'hooksApplied':_0x40b937[_0x13a492(0x4bf)](_0x25584c),'hooksResolved':_0x32a3a7(),'hooksRegisteredAtArm':_0x1d536c['hooks'+'Regis'+'tered']||-0x1*0xbf+0x1e52+0x43*-0x71,'hookErrors':_0x2169ed['slice'](-0x233*0x1+-0x1*0x13a+0x36d,0x4bb*-0x4+0x25e4+-0x12f0),'instances':_0x2645b2,'classNames':_0x49a898,'instancesReplaced':_0x5190d7,'hookFireProof':_0x4d1795,'survey':_0x16d03e,'actkKeys':_0x32b6b3,'surveyRows':Object['keys'](_0x16d03e)[_0x13a492(0x2ad)+'e'](function(_0x4ca888,_0x16db45){var _0x164105=_0x13a492;return _0x4ca888+_0x16d03e[_0x16db45][_0x164105(0x614)+'h'];},-0x1*0x389+-0x1ae9+0x1e72),'reads':{'ok':_0x2d2e06['ok'],'failed':_0x2d2e06[_0x13a492(0x551)+'d'],'lastError':_0x2d2e06[_0x13a492(0x22f)+'rror'],'source':_0x2d2e06[_0x13a492(0x5a7)+'e']},'identity':_0x339b2d(),'globals':_0x11be42(),'wasmMemory':{'captured':!!_0x56e942,'atMs':_0x4a5f0d,'bytes':(function(){var _0x439d4d=_0x13a492,_0x33d935={'pFTMc':function(_0x20873d,_0x3518b6){return _0x20873d!==_0x3518b6;}};if(_0x439d4d(0x42d)!==_0x439d4d(0x42d)){if(_0x4e3cfd[_0x192a38]['hook']&&_0x33d935['pFTMc'](_0x4b727c[_0x21ee78][_0x439d4d(0x3cf)][_0x439d4d(0x632)+_0x439d4d(0x380)],_0x38570c))_0x43e091++;}else try{return _0x56e942&&_0x56e942[_0x439d4d(0x41f)+'r']?_0x56e942[_0x439d4d(0x41f)+'r'][_0x439d4d(0x484)+_0x439d4d(0x20f)]:0x12fd+-0x1b4f+0x1*0x852;}catch(_0x2f918a){return 0x1306+-0x17ae+-0x8*-0x95;}}()),'exportKeys':_0x5dd29c},'diff':_0xc53b1b[_0x13a492(0x4c8)](-0xcf1+-0x1*0x1e97+0x2b88,-0x2394+-0x2420*0x1+-0x12*-0x3fe),'speed':{'on':_0x2ad040['on'],'factor':_0x2ad040['facto'+'r'],'writes':_0x2bc2ee},'esp':_0x33fa20(),'uwmkLog':_0xbde967[_0x13a492(0x4c8)](-0x1e50+0x2262+-0x412,-0x343*0x7+0x26f0+-0x1007),'warnings':[]};if(_0x2ccda7)_0x3ce742[_0x13a492(0x5f1)+_0x13a492(0x313)][_0x13a492(0x361)](_0x40b937[_0x13a492(0x4e2)]+_0x2ccda7);if(_0x1d536c[_0x13a492(0x50b)])_0x3ce742[_0x13a492(0x5f1)+_0x13a492(0x313)]['push'](_0x40b937[_0x13a492(0x21a)](_0x13a492(0x3bc)+'armin'+_0x13a492(0x43a)+'led:\x20',_0x1d536c[_0x13a492(0x50b)]));if(_0x3ce742[_0x13a492(0x3fc)+_0x13a492(0x431)]===0x8*0x342+0x2619+-0x4029&&_0x40b937['udlYv'](Object['keys'](_0x3ce742[_0x13a492(0x552)+'nces'])[_0x13a492(0x614)+'h'],-0x965+0x1ef3+-0x1f*0xb2)){if('tCtgc'!==_0x40b937['KlxKl']){var _0x5153e6={};for(var _0x4935f2 in _0x5b189b){var _0x35325f=_0x1f6993[_0x4935f2];for(var _0x261374=0x207c+-0x2*0xb06+0x1*-0xa70;_0x261374<_0x35325f[_0x13a492(0x614)+'h'];_0x261374++){_0x5153e6[_0x4935f2+_0x13a492(0x38d)+_0x35325f[_0x261374]['o']['toStr'+_0x13a492(0x2cf)](0xe2+0x15b1+-0x1683)]=_0x35325f[_0x261374]['v'];}}return _0x5153e6;}else _0x3ce742['warni'+_0x13a492(0x313)][_0x13a492(0x361)](_0x40b937['scNtP'](_0x40b937[_0x13a492(0x544)](_0x40b937['rxWPj'],Object[_0x13a492(0x3ff)](_0x3ce742['insta'+'nces'])['lengt'+'h']),_0x40b937['RsvcX'])+(_0x2d2e06[_0x13a492(0x22f)+'rror']?_0x40b937[_0x13a492(0x1ee)](_0x13a492(0x282)+'n:\x20',_0x2d2e06[_0x13a492(0x22f)+_0x13a492(0x4e4)]):_0x40b937['mZiVA']));}_0x3ce742[_0x13a492(0x577)+_0x13a492(0x606)]&&_0x3ce742[_0x13a492(0x577)+'ity']['tagMa'+_0x13a492(0x44d)]===![]&&_0x3ce742['warni'+'ngs']['push'](_0x40b937['aSnDw'](_0x40b937[_0x13a492(0x2ed)]+(_0x13a492(0x26c)+_0x13a492(0x571)+_0x13a492(0x595)+_0x13a492(0x2f3)+_0x13a492(0x635)+'nstan'+_0x13a492(0x2a8)+_0x13a492(0x221)+_0x13a492(0x3ca)+_0x13a492(0x41e)+'\x20the\x20'+'wrong'+'\x20obje'+_0x13a492(0x199)+'r\x20')+_0x40b937['JqUGf'],_0x40b937[_0x13a492(0x1f9)]));_0x3ce742[_0x13a492(0x577)+_0x13a492(0x606)]&&_0x3ce742[_0x13a492(0x577)+'ity'][_0x13a492(0x568)+'nRunt'+_0x13a492(0x437)+'Expor'+'ted']===![]&&_0x3ce742[_0x13a492(0x5f1)+'ngs'][_0x13a492(0x361)](_0x13a492(0x568)+_0x13a492(0x405)+'ntime'+_0x13a492(0x309)+'ot\x20wi'+'ndow.'+_0x13a492(0x49e)+_0x13a492(0x482)+'dkit.'+_0x13a492(0x29a)+_0x13a492(0x5d8)+'the\x20p'+'lugin'+_0x13a492(0x4bb)+'built'+'\x20'+_0x40b937['FasrH']);if(_0x3ce742[_0x13a492(0x3ac)]&&_0x3ce742[_0x13a492(0x3ac)]['note'])_0x3ce742[_0x13a492(0x5f1)+_0x13a492(0x313)]['push'](_0x40b937[_0x13a492(0x2c7)](_0x40b937[_0x13a492(0x279)],_0x3ce742['esp']['note']));if(_0x3ce742['globa'+'ls']&&!_0x3ce742['globa'+'ls']['heapU'+'8']){var _0x2b0d36='';_0x3ce742['hookF'+'irePr'+'oof']&&(_0x2b0d36=_0x40b937[_0x13a492(0x308)](_0x40b937[_0x13a492(0x5c4)](_0x40b937[_0x13a492(0x4f8)](_0x40b937['ldmDZ']+_0x3ce742[_0x13a492(0x65a)+_0x13a492(0x360)+_0x13a492(0x30e)][_0x13a492(0x42b)]+('ms\x20wi'+'th\x20or'+'igina'+'lFunc'+'='),_0x3ce742[_0x13a492(0x65a)+'irePr'+'oof'][_0x13a492(0x202)+_0x13a492(0x528)+'nc'])+(_0x13a492(0x410)+'game\x20'+_0x13a492(0x52f)+'ved='),_0x3ce742[_0x13a492(0x65a)+_0x13a492(0x360)+_0x13a492(0x30e)][_0x13a492(0x52f)+'veGam'+_0x13a492(0x603)+'re'])+(_0x13a492(0x3b2)+_0x13a492(0x511))+(_0x3ce742[_0x13a492(0x65a)+'irePr'+_0x13a492(0x30e)][_0x13a492(0x229)+'ource'+_0x13a492(0x3f7)+'e']||_0x40b937[_0x13a492(0x490)]),_0x40b937[_0x13a492(0x30d)])),_0x3ce742['warni'+'ngs'][_0x13a492(0x361)](_0x40b937['scNtP'](_0x40b937['GvqDl'](_0x40b937['ORxGp']('Unity'+'\x20inst'+_0x13a492(0x1ad)+_0x13a492(0x201)+_0x13a492(0x342)+_0x13a492(0x570)+_0x13a492(0x5b0)+_0x13a492(0x499)+'\x20',_0x3ce742['globa'+'ls']['gameS'+_0x13a492(0x4ad)]||_0x40b937[_0x13a492(0x490)]),_0x40b937['Vcnnl']),_0x40b937[_0x13a492(0x24c)])+_0x2b0d36);}return(_0x3ce742['globa'+'ls']&&!_0x3ce742[_0x13a492(0x35a)+'ls'][_0x13a492(0x319)+'Wrapp'+'er']||_0x3ce742[_0x13a492(0x35a)+'ls'][_0x13a492(0x319)+'Wrapp'+'er']==='undef'+'ined')&&_0x3ce742[_0x13a492(0x5f1)+'ngs']['push'](_0x40b937[_0x13a492(0x60e)]),_0x40b937[_0x13a492(0x1cb)](_0x3ce742[_0x13a492(0x623)+_0x13a492(0x646)],-0x1d12+0x824+-0x8d*-0x26)&&_0x3ce742[_0x13a492(0x623)+'Appli'+'ed']===-0x1ec8+0x2*-0x2e7+-0x619*-0x6&&_0x208626&&(_0x40b937[_0x13a492(0x217)](_0x3ce742['hooks'+_0x13a492(0x3cd)+_0x13a492(0x615)],0x9*-0x12e+-0xa04+0x14a2)?_0x40b937[_0x13a492(0x5af)](_0x13a492(0x2cb),_0x13a492(0x625))?_0x3ce742['warni'+_0x13a492(0x313)][_0x13a492(0x361)](_0x40b937['LDACw'](_0x13a492(0x230)+_0x3ce742['hooks'+'Total']+_0x40b937['CqGbi']+('runs\x20'+_0x13a492(0x435)+_0x13a492(0x1ed)+'g\x20Web'+'Assem'+_0x13a492(0x258)+'nstan'+_0x13a492(0x488)+'\x20and\x20'+'snaps'+_0x13a492(0x5ff)+_0x13a492(0x568)+'n.hoo'+_0x13a492(0x326)+'ngth,'+'\x20'),'so\x20ho'+'oks\x20r'+_0x13a492(0x368)+_0x13a492(0x47f)+_0x13a492(0x296)+_0x13a492(0x63f)+_0x13a492(0x4a7)+_0x13a492(0x24e)+_0x13a492(0x50c)+'the\x20l'+'ife\x20o'+_0x13a492(0x498)+_0x13a492(0x392)+'.\x20')+_0x40b937[_0x13a492(0x34c)]+_0x3ce742['hooks'+_0x13a492(0x4be)+'tered'+'AtArm']+(_0x13a492(0x4b5)+_0x13a492(0x3c4)+_0x13a492(0x365)+'\x20armi'+_0x13a492(0x3be)+_0x13a492(0x2fb)+_0x13a492(0x5ed)+_0x13a492(0x2b4)+'.')):_0x2cd965['warni'+'ngs']['push'](_0x348818[_0x13a492(0x580)]):_0x3ce742[_0x13a492(0x5f1)+'ngs'][_0x13a492(0x361)](_0x40b937['tCNTy'](_0x40b937[_0x13a492(0x1c2)](_0x40b937['YjjNL'],_0x3ce742[_0x13a492(0x623)+_0x13a492(0x3cd)+_0x13a492(0x615)])+'\x20of\x20',_0x3ce742['hooks'+'Total'])+_0x40b937[_0x13a492(0x5ec)]+(_0x13a492(0x624)+_0x13a492(0x1db)+'hodIn'+_0x13a492(0x341)+_0x13a492(0x1d2)+_0x13a492(0x64e)+'es\x20no'+_0x13a492(0x299)+_0x13a492(0x33e)+'is\x20bu'+_0x13a492(0x2c9)))),_0x40b937['CuTdb'](_0x3ce742[_0x13a492(0x623)+_0x13a492(0x416)+'ed'],-0x49*-0x2+0x924+0x1*-0x9b6)&&!_0x3ce742[_0x13a492(0x552)+'nces']['FPSco'+'ntrol'+_0x13a492(0x35d)]&&_0x3ce742[_0x13a492(0x5f1)+_0x13a492(0x313)][_0x13a492(0x361)](_0x40b937[_0x13a492(0x259)](_0x13a492(0x54f)+'\x20are\x20'+'appli'+_0x13a492(0x5bf)+_0x13a492(0x5ea)+'FPSco'+'ntrol'+_0x13a492(0x3d6)+'as\x20fi'+_0x13a492(0x42e)+_0x13a492(0x4ea),_0x40b937['Oaoof'])),_0x3ce742[_0x13a492(0x552)+'ncesR'+'eplac'+'ed']['lengt'+'h']&&_0x3ce742[_0x13a492(0x5f1)+'ngs'][_0x13a492(0x361)](_0x40b937[_0x13a492(0x516)]+_0x3ce742[_0x13a492(0x552)+_0x13a492(0x506)+_0x13a492(0x63a)+'ed'][_0x13a492(0x653)](',\x20')),_0x3ce742;}function _0x91b538(_0x50f6e5){var _0x5a6afc=_0x5aa51a;console['log'](_0x5a6afc(0x639)+'kura]'+'\x20Skil'+_0x5a6afc(0x1ca)+_0x5a6afc(0x5c8)+'rt',_0x40b937['Hmedw'](_0x40b937[_0x5a6afc(0x445)]+_0x363dbc,';font'+_0x5a6afc(0x565)+_0x5a6afc(0x285)+'0'),_0x50f6e5),console['log'](_0x40b937[_0x5a6afc(0x284)](_0x141300+'\x0a'+JSON[_0x5a6afc(0x1aa)+'gify'](_0x50f6e5,null,-0x1*0x1d97+0x2*-0x1384+0x44a0)+'\x0a',_0x544bec)),_0x212c81(_0x5a6afc(0x287)+'t',{'report':_0x50f6e5});}function _0x54a522(){var _0x3b71c1=_0x5aa51a,_0x22fbfa={'rgNOL':function(_0xc6aba5,_0x351db8){return _0xc6aba5+_0x351db8;},'JRQaO':_0x3b71c1(0x38d)};if(_0x3b71c1(0x588)===_0x3b71c1(0x588))try{if(_0x40b937['HqYcu']('JqgMt',_0x3b71c1(0x4b3)))return _0x1ef472();else _0x2ef951++,_0xfef712[_0x3b71c1(0x5f8)]=!![];}catch(_0x275e90){if(_0x40b937[_0x3b71c1(0x658)](_0x3b71c1(0x591),_0x3b71c1(0x591)))return{'version':_0x527f5d,'when':new Date()[_0x3b71c1(0x440)+_0x3b71c1(0x4cc)+'g'](),'elapsedMs':Date['now']()-_0x40f76c,'host':_0x464711,'uwmk':!!(window[_0x3b71c1(0x49e)+_0x3b71c1(0x482)+_0x3b71c1(0x21d)]&&window[_0x3b71c1(0x49e)+'WebMo'+'dkit'][_0x3b71c1(0x29a)+'me']),'il2CppContext':![],'arm':_0x1d536c,'hooksTotal':_0xd87e44[_0x3b71c1(0x614)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x40b937[_0x3b71c1(0x611)](String,_0x275e90&&_0x275e90[_0x3b71c1(0x244)+'ge']||_0x275e90)};else{if(!_0x44a88c[_0x4f1ab5])_0x399f3e[_0x3c014d]={'ptr':_0xccf440,'firstSeen':_0x26663d[_0x3b71c1(0x35f)](),'hits':0x0};_0x5bb764[_0x421c5d][_0x3b71c1(0x28a)]++;}}else _0x4b876a[_0x22fbfa['rgNOL'](_0x37c9b0,_0x22fbfa[_0x3b71c1(0x548)])+_0x5672e7[_0x3cd1cc]['o'][_0x3b71c1(0x627)+'ing'](0x1d2+0x5c5+0x1*-0x787)]=_0x38944e[_0x42f666]['v'];}function _0x549e55(){var _0x230366=_0x5aa51a,_0x3c9673={'GIiFF':function(_0x2a4615,_0x92a463){var _0x5a30b8=_0x4dfd;return _0x40b937[_0x5a30b8(0x65e)](_0x2a4615,_0x92a463);},'zxvpq':_0x40b937['ldmDZ'],'eGzgA':'\x20(sou'+'rce:\x20','ArCyq':_0x40b937['bUiyo'],'PsVyb':'PswSY','ljkvV':function(_0x23c1cc){return _0x23c1cc();},'xMjnU':function(_0x293d91,_0x4250ca){return _0x293d91<_0x4250ca;},'ihWdV':function(_0x495b76,_0x4c3ed7){return _0x495b76<_0x4c3ed7;}};if(_0x40b937[_0x230366(0x26f)](_0x40b937['ngPRh'],_0x230366(0x4dd))){var _0x29c572=['unity'+_0x230366(0x534)+_0x230366(0x2af),_0x40b937['uhVlK'],_0x40b937['nIyVK'],'unity'+_0x230366(0x534)+_0x230366(0x667)+_0x230366(0x612)],_0x3b409f={};for(var _0x358c1b=-0x55*0x15+-0x407*0x5+0x1b1c;_0x40b937[_0x230366(0x497)](_0x358c1b,_0x29c572[_0x230366(0x614)+'h']);_0x358c1b++){var _0xaf8116=_0x29c572[_0x358c1b],_0x17f7fa=typeof _0x551d34[_0xaf8116];_0x3b409f[_0xaf8116]=_0x40b937[_0x230366(0x1e8)](_0x17f7fa,_0x40b937[_0x230366(0x575)])?'undef'+'ined':_0x17f7fa;}var _0x3eba63=_0x40b937['egahA'](_0x130ab5);_0x3b409f[_0x230366(0x229)+'ource']=_0x35bebc[_0x230366(0x5a7)+'e'];try{_0x3b409f[_0x230366(0x52d)+_0x230366(0x322)]=!!(_0x3eba63&&_0x3eba63['Modul'+'e']),_0x3b409f['heapU'+'8']=!!(_0x3eba63&&_0x3eba63[_0x230366(0x66e)+'e']&&_0x3eba63['Modul'+'e'][_0x230366(0x33d)+'8']),_0x3b409f[_0x230366(0x198)+'ytes']=_0x3b409f[_0x230366(0x1b4)+'8']?_0x3eba63[_0x230366(0x66e)+'e'][_0x230366(0x33d)+'8'][_0x230366(0x614)+'h']:0x2482+0x100a+-0x348c;}catch(_0x3666ca){_0x3b409f[_0x230366(0x52d)+_0x230366(0x322)]=![],_0x3b409f['heapU'+'8']=![],_0x3b409f['heapB'+_0x230366(0x1d0)]=0xff0+0x1*0xaa2+-0x1a92;}return _0x3b409f['value'+_0x230366(0x573)+'er']=typeof _0x3c83d3,_0x3b409f;}else{var _0x359385=-0x1ded+-0x1814+-0x7*-0x7b7;_0x40b937[_0x230366(0x4da)](_0x91b538,_0x40b937['BPfZZ'](_0x54a522)),function _0x8cdcea(){var _0x5af017=_0x230366;if(!_0xd87e44['lengt'+'h']){if(_0x3c9673['PsVyb']==='PswSY')try{_0x3c9673[_0x5af017(0x25f)](_0x3b7dc8);}catch(_0x15450a){}else _0x532ca7=_0x3c9673['GIiFF'](_0x3c9673[_0x5af017(0x524)](_0x3c9673['zxvpq'],_0x4a4dbc['hookF'+'irePr'+_0x5af017(0x30e)][_0x5af017(0x42b)])+(_0x5af017(0x476)+'th\x20or'+'igina'+'lFunc'+'=')+_0x2c07f4[_0x5af017(0x65a)+'irePr'+_0x5af017(0x30e)]['origi'+_0x5af017(0x528)+'nc']+(_0x5af017(0x410)+_0x5af017(0x2a7)+_0x5af017(0x52f)+_0x5af017(0x563))+_0x327538['hookF'+_0x5af017(0x360)+_0x5af017(0x30e)][_0x5af017(0x52f)+_0x5af017(0x53a)+'eAtFi'+'re']+_0x3c9673[_0x5af017(0x5c6)],_0x35b619[_0x5af017(0x65a)+'irePr'+'oof'][_0x5af017(0x229)+'ource'+'AtFir'+'e']||'none')+_0x3c9673['ArCyq'];}_0x359385++,_0x91b538(_0x54a522());if(!_0xd87e44['lengt'+'h']&&_0x3c9673['xMjnU'](_0x359385,0xbf2+-0x2517+-0x1*-0x1a51))setTimeout(_0x8cdcea,-0x20e*0x2+-0x12*0x5e+0x1288);else{if(!Object['keys'](_0x2e62f6)[_0x5af017(0x614)+'h']&&_0x3c9673[_0x5af017(0x61d)](_0x359385,0x3*-0xfb+-0x25cf+0x29ec))setTimeout(_0x8cdcea,0x20bf*-0x1+-0xac9+-0x66b*-0x8);else setTimeout(_0x8cdcea,-0x10d4+0x331*-0x1+0x18b5);}}();}}if(document[_0x5aa51a(0x32c)])_0x549e55();else document['addEv'+_0x5aa51a(0x4bc)+'stene'+'r'](_0x5aa51a(0x49d)+'ntent'+_0x5aa51a(0x62e)+'d',_0x549e55,{'once':!![]});})()));function _0x465d(){var _0x16d61b=['DenovhK','DgfN','DciGC3q','zw50','AxmGBwK','C291CMm','t2zMC2u','C3bSAxq','zgLUzZO','DgvZDa','z2T3BMK','lxyYE2e','Dc5wywW','Cvbfwe4','DcaOC28','qNLjza','BNrPBca','C28GAg8','DwLSzci','yxjTzwq','zfDOwM0','y29UieK','lwLUzgu','iZaWmdS','Dg87iJ4','z2jHkdi','t3DRBui','mhb4ktS','zNDLsue','zwqGyNu','yMfZzq','mxWZFdG','yMfJA2C','BNDTC0K','zuTgvxy','Dg9Y','zuD6z0e','ifrOzsa','ihjLCg8','uvbpt1C','vgfTCgu','DYbNBg8','vgHLigG','B2jMrG','CMvJDgK','Aw5KzxG','EcbZB2W','ihn0yxK','EfrywNe','BM8GCMu','AuTHDu8','BNvTyMu','i3nHA3u','C3r5Bgu','BwuGlsa','zgffvuK','t0zNwNy','AguGD3i','tKreru0','Aw5Lza','zwqGysa','zMLYzsa','AgfIBgu','zwH3Bxq','BMv2zxi','B2PPywK','BKP5B3q','wwrQuMC','ihn0EwW','r1P4qLu','werQBva','Aw1L','DcbUBYa','BM90ig0','Bvz0uhK','BwvUDc0','Ag90','i3n3mI0','Dgv4Dem','D2fYBMK','Aw9U','4OcuigzYyq','n3b4o3a','vuHezvG','CM9ZCY0','zYbPBNq','C2fUzq','zwjZufO','BNq4','ChbLCIa','Esb0Exa','nhWWFdy','Ag90icG','Ag90CYa','BNrPBwu','D2fSA2K','D2f0y2G','zuf0rMK','Ag9Ksw4','zJy0','Axr5','yxbWzw4','vNnYqLy','Bg9N','y2fTzxi','B3vUzdO','q2LzBgq','vfvoDLm','DNn6yMq','C3rHBMm','BKzzCuS','zeLVyMK','yxbWzxi','r25mDNK','BgvUz3q','DMvK','B2f0nJq','BMnLCW','EwXLpsi','BNnPC3q','ruDxCKS','uLvbsK4','C21uExa','AwHxzfy','CgXHEwu','yxK6zMW','CMuGkhi','BwuUy3i','ig9MzG','Ag9VA3m','khrOAxm','twzlC1i','ig9Uy2u','Dg9tDhi','r0XKAhe','AwrKzw4','Fdj8nhW','ExD3BeO','Aw9UoMy','wKDmEKe','tg9Hzgu','ihrOzsa','Cg9Zqxq','C2HHzg8','DgfIBgu','DNmGC24','ywLSzwq','zw50igK','rJKGDhC','y2HLy2S','twfUywC','jwnBC2e','zxbSywm','lJe4ktS','yKTqC1a','BhDHCNO','C3rLBMu','igL0ige','zgLMzG','tM8GCMu','AwvSzca','DhKGAw4','yw5Nzsi','tMHqv2m','vg90ywW','CMvKia','nhWYFda','iJ5dB3a','A2v5','D0verhe','EsbMywK','B3HLtK4','AwqGzg8','pgiGC3q','icaXlIa','x19ZywS','BNnpzLK','AM9PBG','AgLKzgu','swXuvgi','C2v0ica','igzYyw0','tKznB1u','u2fRDxi','Ag9VA0y','s1zJv0q','DwrWDwu','yMeOmJu','rK1Vr2C','zgL1CZO','ywn0Axy','C0LOweK','rwDwwMG','CMfTzs4','lK1Vzhu','BIbtruu','AgLSzsa','BMnLv3i','y2fSlMq','ifnxlvC','v3H4CuC','EdTVDMu','ihzPysa','zJmY','tw9KDwW','B2XPzca','z2v0vwK','Dte2','C29SDMu','AgvHCei','y3qGzM8','zsbUB3q','y2XVC2u','D2LUzg8','AhjLzG','DwXxyvq','nxWY','uwnrwNm','x2DHBwu','y21K','zcdcTYa','icaYlIa','qNbpuKm','yZK7BwK','BejfthK','u053uxK','oxb4ide','C3rYAw4','iIbZDgu','CMfUihK','yw5Jzsa','CxPUvMu','A2zuuKW','B2XLig4','BwvTB3i','BfjOueC','CgfUzwW','AgvHCfu','B2jQzwm','qvzNBfC','C3bLzwq','lIbeAxm','zgTPDc4','pc9KAxy','B2XVCJO','vhPjtNu','sgvHBhq','CYbHBMq','Cufzz3e','s1Hlz0e','uMjdBM8','zMvvv1y','BNrLBNq','zsDZig8','yw5LBca','lxGIihm','B2jM','yxbP','svDwshC','BfDHCNO','q3vuzgi','igfYBwu','zxHPC3q','BuTeugW','EdTWywq','ExrLCW','mta0nwjTyKrbBq','lt4GDM8','zw5LBwK','qu5eihq','x3j1BNq','ifbpuLq','ig9Mia','yM9VBgu','Ag9ZDa','zfLmtg8','lcbnzxq','AxmGBM8','BcbHz2e','veLwrq','uKfqueu','u3P3Chy','ywqGzMe','BwvyEMO','CMvKic0','DgnOlG','zxi7iJ4','u2vSzwm','rxfHDfm','rg5qAuq','DfLHB1y','DgfSBgK','B3j5','i2jKytK','zhvYAw4','yvnUrhC','zvfly0e','BLr5Cgu','rNzQyLi','wePbrgK','DvvezgK','BYbHihq','BIbPzNi','zwXHChm','imk3ia','EdSIpNy','y3njvxm','rurLq1O','BwuGBM8','ihnPBMm','nhWZFdu','CJOJzJC','C2ruAM4','psjZDZi','BM90ihi','B3jPz2K','zt0Iy28','DuLsC3e','vKTJrKq','CMfJDgu','zsb1C2u','CM93CW','ywrKrxy','uMvSB2e','DgfNtwe','ywLSywi','mhb4idu','CMfTzsa','zw5NDgG','AguGC2K','q1bRA1i','r051uKm','Bgu9iMm','mJu1lde','iJeIig0','zgf0yq','CevhA2O','BgHyyKK','yMvVquW','uKzIt2S','t2HlExy','AufMshe','zgTPDa','qvHuBM4','uNvUihq','zwn0ihC','BYb3zsa','zxH0','DxjJzq','DgHLBG','mhb4o2y','ihbYB3y','zsXdB24','Cg9YDca','z2fTzvm','i2y3zwu','y29WEq','CgfYyw0','EdTHy2m','D3jPDgu','BgfZDeu','mcbVzIa','twLfC1e','igj1Dca','khmPihq','vNPnuxG','vNnZwLG','tw5Hqu4','nxWXmhW','DhLSzt0','CeHLq28','ihbHBMu','yxjsDhy','CKXPC3q','i2zMogy','ANPMrfu','Bwf4lwG','z2v0sw4','EgXWquS','renrDMW','Aw50lxC','BwvZC2e','vvDnsY4','B2jMsq','s1vsqs0','DfrXuuS','BwuUx2C','BMqGr0C','Ag5ks0i','t0n6yMu','s0vvyLC','BM9Yzwq','zsbYzxa','zw5HyMW','Afz1rxm','BwzfBg0','Dg9gAxG','DZiTB3u','ywrKAw4','zsbNyw0','A29nCLK','yMX5lMK','whvYrxi','CIb5B3u','rhPzAwy','BwuGAw4','vxbKyxq','ignVBNm','BgPRDLy','s1jKEuG','rK91AK8','ufDXy2K','DcaWicG','yMX5lum','s05tyLq','zxi6mdS','qKr0tKm','Aw5Qzwm','lxjHzgK','C2vSzwm','ms4WEdW','CMvWBge','CMvUDca','yNKGBg8','sLjhteO','icaZlIa','EgrIuLu','rLbty28','sNfKDLq','4Ocuihr3BW','ie9o','yw1PBMC','DerHDge','D2HLBIa','CeH6BhG','CMf3','DMvYC2K','rMvvzNi','z2v0rMW','y0nQq1i','B3zLCMy','lNjLC28','CMXHyMu','uMvHC28','ChqGsvm','u0Hktgm','Ahq6nZa','AtmY','CMvWB3i','BNrLCJS','rM15qxa','AgL0CW','Axbey28','q291BNq','C3bHy2u','D2zdyMS','AxnWBge','twv4Dvi','AxHLzdS','u0ndy2y','zufeD24','B2fYza','oJK5oxa','ywz0zxi','yNL0zu8','yxmGBM8','DcbTyxq','uNvUDgK','o2fSAwC','Dgv4Dge','ig9IAMu','oImXnta','zgf0yxm','B29RCYa','Den0z2m','i2zMzdq','ntG1mMHmsgXeyq','Fdr8mxW','CgfUpG','B2TZihi','z2fTzsa','y2uSihm','iJ54pc8','oJeGmsa','zcbKAwe','ChG7Cge','CMvKDwm','lwjVDhq','BMnL','nJTMB24','DxjH','BMH1t0O','B3i6i2y','C3rHCNq','CI5QCYa','zwXVywq','rviGvvC','zdDHotK','zxG7zMW','Bw9YEvq','DhrVBJ4','BgfZDfC','ignYB3m','ztOXmxa','zxiTCMe','CZPJzw4','Bu1LtNm','Cg9YDge','zMzZzxq','t1f0rMq','vKuGDG','igeGBgK','sgLLzuG','A2v5q28','AwXKlG','zw50rwW','DuPiy2K','ig5Via','Dg1Sq3C','D2fYBG','Aw5N','z2LUlwW','u2nPDM8','DwPwD1i','AKDVteO','Fdj8mhW','y3vYC28','BM9Uzq','AgfUzwq','BMvTAwu','z2nJthy','lxDYyxa','igzHA2u','ohWWFdu','wKDzANa','zw50o2i','As1TB24','DxjHtwu','ktTJB2W','shfzy3u','lMrSBa','z3jVDw4','igrPzca','nZCSlJq','ktTIB3i','CM1VBMS','mhWZFdi','ifnxlva','rMDvzM8','Cg9Z','BvfPuuS','zenOAwW','zsbPBNm','BKjKvgK','zxiGzMK','AwnOlJW','AwzMzxi','C2fNzq','mtrWEdS','yxbWBhK','yw1L','zwLNAhq','u0TjteW','C2LUz2W','igrVy3u','CunVvuq','Aw5Uzxi','ywDLigG','rxHWB3i','BM90zq','CMuk','BMuUifq','r2fTzsG','sgvHCca','uMjsv3q','s2H6Dvm','Bg9YoIm','r3zXrgW','igLZig4','z0L5svO','DgLUzYa','idHWEdS','yLvPEw8','B29M','v3D2Aeq','B25JBgK','nJKXmJC0ALHNqvHm','DwrSwxy','BMDZ','o3DVCMq','Aw5KB3C','iNn3mI0','vgHLiha','zgLMzMu','DMfSDwu','Bwvnyw4','Durhvfq','A2LUza','iJ5tCgu','EI51C2u','Acbxzwi','ys5ZA2K','Cw9iyvG','zhvSzq','BNrLEhq','ugfQwfi','lxnUyxa','A3mUBgu','ysbSB2i','AwnOigy','z2fTzq','sLzdDLK','zwrnCW','yM9KEq','u0zNvva','DMvKia','ywLUAw4','C29SAwq','BMHpu20','CKnVBNq','A2v5qxq','r0DFr2e','y2XPCgi','mtj8nNW','wunorgO','y0zYsMi','A2Lquwy','C3nPBMC','DgvK','ywXPz24','sevbufu','y2GGDgG','C25HChm','B3vUDa','zM8Qksa','zxnVBhy','zxzLCNK','wejUs2q','qM90Aca','ihDOAwW','C2nYAxa','zKXZvfC','DY5vBMK','igLKpsi','BeHjs0i','y3HrqLq','CMvH','DhDPy2u','B2rry2y','quLqq00','yxv0BZS','CYbVCNa','BhvNAw4','DJiTy3m','B3j0lGO','ugvRtuC','AZPICMu','CMvTB3y','Agv4','z2XVyMe','r2fTzq','DwvxCMe','BgvY','tw9KA2K','BM93','AxjLuhi','ChvZAa','Dc1ZAxO','CY1VCMK','DxjLzca','DxjPBMC','yw5KigG','DNCSnJi','zwDPC3q','igfYztO','ChG7iJ4','rgjUu24','yNvPBgq','ywX0','BMfTzq','AKTUsNC','y0DIsNu','Fdn8mq','oMf1Dg8','BvzJrNa','CgvYBw8','yw4+','qwLxrLa','r0vsu2u','C3bYAw4','ihnPz24','iZjHmgy','lYbQDw0','phbYzsa','y29UDgu','zxG7z2e','CM91BMq','sw5KzxG','zM5XqKe','DgG6mZq','oJfWEca','D1DcvM0','EhbVCNq','z2v0q2W','B2SGzMK','DxbKyxq','DMuGB2i','BwuUCMu','yxjTAw4','yxrJAc4','kZb4','DKXYzuS','sNfOD0G','ntqXog56uvnSuG','igLZihi','ihbHz2u','A2vKihu','y3qOCYK','ksWGC28','zMnMtNC','zw4Gyw4','B2jMqG','phnWyw4','ig5VDca','Dc5KBgW','zMLSDgu','iJ5gosa','icaGDMe','igHLEd0','v19F','DhLxzwi','CMfWoYi','ChGGC28','zNjHBwu','CIb0Agu','CIiGDhK','psjJB2W','zg12y1G','icaGy28','Aw50BYa','CgvJDhm','zxnW','Bwf4','zgvMAw4','zMfJDg8','Bg93oMG','Ag9ZDg4','icHZB3u','yNDxt1u','AwvK','ue5MqKK','qM90','zZO0ChG','ic0Gy2e','CMDIysG','Fdf8ma','zsbYzw0','vvDnsYa','nhb4ide','BMCGyxq','yxbWBgK','ywnRz3i','A25eCMm','ywDLCIW','Aejts0W','khmPigq','se14Cvy','idyWCYa','Aw4U','BI1PDgu','DhLWzq','yxjLige','ksbUzxy','y2vK','uMvZB2W','zxnZywC','Ag9VAW','r1PUEwO','ignHChq','Dhvzs0O','C3mGmhG','BM8GBgK','CNnJCMK','BgvYigG','qLbMwLO','BMCGB24','B3nLCY4','BwuOkq','DercweG','y0LUChu','zg9JDw0','yNv0Dg8','qKPovxO','qwjrAvu','ifvxtuS','q0rIrMC','zcb0Agu','lxnWywm','vw5usMW','CNPguM8','o2zSzxG','Chr1CMu','ntuSmtq','oYi+','B2f0mZi','zgvIDwC','zYbxzwi','r2XstM8','lwzPCNm','Aw50iIa','EwvZ','B3i6iZG','tfvdvM8','qu1lsMu','EdTNyxa','mJG2mZKWm1jxBw9Hzq','qxrgAxi','zxKGAxm','ihbHC3m','CMv0Dxi','CxvLCNK','C3vYDMu','D2HHDca','ywrKCMu','A2v5CW','pgrPDIa','l3nWyw4','BwfW','ruTfA1O','C2fRDxi','BI5FCNu','s21yB1m','sYbZy3i','pt09u0e','AwWYq3a','vvjcDvO','BwfUEq','zMfRzq','DMn1q2i','Cg9ZDe0','sfrnta','igfUzca','yxrLigy','igfYBwK','zM9UDdO','zYbZDxm','AermteG','qxbWBgK','mda7D2K','ywn0','BgX3yxi','ic0+ia','BcWk','Awr0AcK','zgPoCMe','C2TPBMC','yNvMzMu','zgLZCgW','CujJz2u','x19tquS','vLn5Dg0','C2v0','BMfSv2e','DtmY','u2HHCNa','ihDOAwm','DgHLig8','BNnWyxi','yxrnCW','C2v0rMW','BKXsAMy','CMvKihK','zxiGvxa','CgfYzw4','EvjVD3m','AwXLzcW','yLzdvMS','q0LlBMe','B25Jzsa','zsbLDMu','Aw1Lsxm','Dw5Kzwy','ieaG','zYbMywK','CJPWB2K','mJbWEca','lcbuyw0','ys1ZDW','pgj1Dhq','Dg9ju08','sKLcwLG','Ewv0lG','B2HZBge','ruznBwi','Ew5Wrwe','EhboA2K','Cg9ZAxq','zMXLEdO','zvbYB3a','sgX3wLK','AguGCMu','C2nHBge','DgnOzxm','C28GDgG','BMCUcG','igfWCgW','CMrLCJO','AcbPCYa','t1j4r3a','m2PqrNvvEa','C3CYlwi','nhWYFdy','Aw5PDgu','BJOWo3a','yM9Yzgu','C2L6zq','Ate2','CgvZia','sgDfBxq','AxmGD2G','EhL6','lJmPo2q','Cgu9iNi','BhzLr2e','zxmGAxq','Ee55DKS','B2r1Bgu','txz6s0e','yw1LlGO','Fdv8na','tenpz0K','igLUC3q','B250lxC','BgrZlIa','y3jLyxq','sK9MuKq','B3CU','BNrYB2W','BNrPyxq','rhrxDxC','DfntCei','quWGqum','oJyYDMG','BxmGD2K','y0fSyxG','zYbZy3i','zwDHAee','yZfKo2m','DcbIzwu','DMfS','DM9Pza','yMfS','zxjLzca','y0LRvKG','ywXLwxu','v2vItw8','tuLpvwu','yNL0zuW','m3W0Fdi','ihrOAxm','ChjLDMu','DgLHDgu','CI5KBgW','4Psa4Psaia','BMrVDY4','EhPYrfi','BMTLEsa','zsb3ywW','BMuGAg8','vK1YBu4','zgf0zsG','CNvUDgK','B3n1svu','y29SB3i','ihjNyMe','psjWywq','Axnvq3u','zIb0Agu','DxjJztO','DxzMsxm','Dg9W','vNPcsMC','re9nq28','vw5PDhK','lYbZChi','sujQA2e','BM8Gseu','BwvHBNm','lsbvBMK','zuvSzw0','DxjHvge','DgHLigm','CMuGAwC','vLj5Ag0','iIbZDhK','BgqGAxm','EwjVD00','tKTJrfi','B3vYy2u','AxmGyNu','DdTIB3i','uMLcqwG','BIbHihi','lwnVChK','rhnbzvy','CYb3zxi','igHVB2S','q29WAwu','BgW6Aw4','yxbZAg8','CMeTC3C','Cujmzg0','ihDHCYa','zw50tgK','B2TZigW','uMvNAxm','vMrkv3i','ze91sgq','AxjZDca','Dw5UAw4','Cfjqt1e','qxnZzw0','o2zVBNq','D2HPDgu','EfPwrfu','C2XPy2u','DMjlrwe','qu5pveG','ywDHAw4','u3rYAw4','v0fswI0','ze9XtfO','B3v0','ktSGBM8','z25HDhu','lwL0zw0','Aw4Onti','DgHKwxC','zxmGDgG','zgvYlxi','iefdveK','z2uUrgu','zwfKEsa','sMH0tgy','BNrxAw4','AgLZiha','rwfOyum','mNb4o2i','y3fZsKu','C3CYlxm','zNvQrgi','B0zvAMu','tLfSCgm','CNjVCG','veXqvMS','DgvYzwq','tu5WvKm','o2jVEc0','D2LKDgG','zxqUia','A1bfrvi','s3r6uve','ihbHC3q','tLnjreu','icaGica','qNvfzuG','D2nACKm','AwTLlIa','yMjzC0q','BLj1BNq','ys1ZDY0','pZWVC3a','Dg9WoJe','A1PtB3a','sxn0ruO','BwfYz2K','CML0Dgu','CMvMzxi','idaGyxu','lKHfqva','DdmY','vvnHwgi','zsb0Age','B2XADgy','te5ss0O','B250zw4','nYWUmZu','BMnLC1i','BwLU','B24GAwq','ig9Uihq','DMuGBwe','zxjYB3i','igzVCIa','igjSB2m','oJeYmha','DM5hDey','CMvKige','CMnLoIa','CMuG','tfPhrLO','BIb0Agu','yxvSDa','yNvlswi','D24Gvxa','AMXvtgS','yxjKlxi','vez4sfC','AxrOie0','B2HRD08','DhLWzum','zw5LBxK','Dde2','AgvSBg8','yw1Ligy','CunzCwW','zwvKzwq','r0LPrKy','DhjHBNm','zYbIBgK','mZa0mdy0ohvwzgnprq','BMfSrNu','zsGPlMu','ks4G','vgHLigC','zw1LBNq','AgfZtw8','zNvUy3q','CMvZB2W','mYWXnZC','zffpzvi','mtjWEdS','qMvyA3C','sw5ZDge','zcbPCYa','B1fnD0i','ksbVCIa','rw5LBxK','ywjZ','DMvhyw0','CgfKrw4','zwn0Aw4','z2LUigC','vgHPCYa','Awq9iNm','twPzDhG','AwnLihC','Axb0ige','zgf0zsa','sgDwtMO','icbVzMy','B3jKzxi','pt09','sLjryu8','AgLUDa','Bwvhyw0','ys9vv00','z0P1vMS','igTPBMq','z2TtugK','sg9VA3m','zZOXmha','zMfPBgu','Aw5ZDge','AgvHza','A3vYyv0','zJfIo2i','AwqGCMC','BcbKAxm','C01pvfq','lwjYzwe','zciGC3q','ntq3mJDYB1PPruu','Dw5PDhK','mZCYmJyXnK1Qs3DWrW','zwqGDgG','DZOWidi','Cxz2re0','EvrHCa','ExbLCW','DMvKpq','CgHMCxm','lxDLAwC','yxjT','Fdr8nNW','CgX1z2K','nYWUncK','rKngA08','ywDLCG','qM90ige','A2vLCa','BNn0yw4','BIbYzwW','zwqGEwu','y2vKigi','AguGB2W','v3jHCha','BhvLpsi','zvfiyNe','BNq7yM8','AwrLBNq','mdTMB24','Aw1Lr2e','qLP5C2W','ztOXnha','ysbNyw0','yxjN','i2zMyJm','CuHzr24','vunqCMK','s29Ru1y','C25HCa','igjVDgG','wvnnDw4','AxrPywW','B0XkCMy','B21Tyw4','B0zgBvO','z2LMEq','sK95AvK','zwqGBM8','tefzrvi','ChrY','ignVCgK','ys1ZA2K','oJrWEca','t0XNALC','ihnVigu','qvbvoca','Cd0Imc4','EsbHigq','zwn0zwq','msiGC3q','y2fWDhu','mcaWige','BMqU','qwHMvhC','sM9qtMy','DMfkvgW','DMvYEsa','sKfst1m','q1fev1O','BI5OB28'];_0x465d=function(){return _0x16d61b;};return _0x465d();}
