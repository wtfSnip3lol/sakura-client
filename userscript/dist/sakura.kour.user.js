// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.8.0
// @description  Sakura menu for KourStrike.io — combat/movement/visuals over UWMK hooks + overlay
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
// @match        https://overtide.io/*
// @match        https://www.overtide.io/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

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
function _0x4a0e(_0x62f819,_0x71d0ff){_0x62f819=_0x62f819-(-0x24a2+-0x1*-0x1615+0x19*0xa9);var _0x1df897=_0xd524();var _0x4b584a=_0x1df897[_0x62f819];if(_0x4a0e['pTBaOv']===undefined){var _0x6bbe73=function(_0x2afd10){var _0x188c22='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x41d2c6='',_0x46bc58='';for(var _0x419955=0x4*-0x968+0x25ae+-0xe,_0x24cad1,_0x134044,_0x2f4096=0x1*0x248e+0xb*0x22a+-0x3c5c;_0x134044=_0x2afd10['charAt'](_0x2f4096++);~_0x134044&&(_0x24cad1=_0x419955%(-0x8fd+0x1ec5*-0x1+-0x1*-0x27c6)?_0x24cad1*(-0x1711+0x1*0x59+0x28*0x93)+_0x134044:_0x134044,_0x419955++%(0xd1b*-0x1+-0x1443+0x2162*0x1))?_0x41d2c6+=String['fromCharCode'](0x1*-0xf3d+0x142c+-0x3f0&_0x24cad1>>(-(0x1340+0xe9b+-0x6c5*0x5)*_0x419955&-0x1*0x11ff+-0x2112+-0x3317*-0x1)):-0x69c*0x2+0x3*-0xb69+-0x1*-0x2f73){_0x134044=_0x188c22['indexOf'](_0x134044);}for(var _0x17756d=-0x1a37+-0x1*0x6a1+0x20d8,_0x30084b=_0x41d2c6['length'];_0x17756d<_0x30084b;_0x17756d++){_0x46bc58+='%'+('00'+_0x41d2c6['charCodeAt'](_0x17756d)['toString'](0x6*-0x1da+0x2705*-0x1+0x3231))['slice'](-(0x86*-0x2e+-0x1*0x349+0x1b5f));}return decodeURIComponent(_0x46bc58);};_0x4a0e['TzMLWu']=_0x6bbe73,_0x4a0e['JMGwCW']={},_0x4a0e['pTBaOv']=!![];}var _0xc497fe=_0x1df897[-0x2451+0x2*0x4b9+0x8f5*0x3],_0x100c62=_0x62f819+_0xc497fe,_0xfa4ad1=_0x4a0e['JMGwCW'][_0x100c62];return!_0xfa4ad1?(_0x4b584a=_0x4a0e['TzMLWu'](_0x4b584a),_0x4a0e['JMGwCW'][_0x100c62]=_0x4b584a):_0x4b584a=_0xfa4ad1,_0x4b584a;}function _0xd524(){var _0x3d3a2f=['icaGlM0','nxWYmhW','zgrPBMC','A2uTBgK','Aw5KzxG','CLLKzKK','Dgv4Dc0','Fdb8ohW','B3zLCMW','mJu1ldi','y2XHC3m','zhr0Ewi','z24TAxq','C3r5Bgu','CM91BMq','ihbVC2K','r2jcEgO','idjWEdS','tvLLCMi','Bg9Hzc4','yxjLBNq','z2v0sxq','zM9YBtO','zwXHDgK','BM9UztS','uu5bB3u','ndu3mJeZmKL3z3nkqW','iokaLcb0zq','ztOGmtC','DZOGAw4','ALD3Cum','ywn0A0S','B2f0Eq','zgvYlxi','rgfUz2u','y3jLzw4','u2fRDxi','AwXS','zvzHBhu','lYbhCMe','Bwf0y2G','zJDHotm','AxHLzdS','BgvZiem','ywrK','ohb4oYa','DgLVBI4','mJqSmtC','igHLAwC','CMvHzhK','ywXSihq','iJeYiIa','zM9UDc0','oYbMB24','qxbdzwS','CIdIGjqG','lxnOywq','Bw4TBg8','BM9szwm','iIbZDhi','C2fMzu0','B25PBNa','wfPxDwG','tM8GuMu','DgL0Bgu','ihrOAxm','B3i6icm','A1rHvMu','AxrJAa','B246ihi','y2fWu2G','zsWGDhi','B2fKzwq','ndGZnJq','B3bHy2K','u2vNB2u','ywLYlG','nc00lJu','A2Pjqvu','zw1LBNq','uLfqwgi','igfIC28','DdOGmJG','ChG7cIa','EdSGFqO','CMLNAhq','Bg93zxi','ExHsreG','EdSGyMe','odGWmtqWz3rJEKXq','ltqTnY4','wLnozK4','BfjIwLi','q21JDuW','A3nty2e','i2zMyJm','zw50tgK','AsXZyw4','BMCGzM8','BgLKzxi','rNjHBwu','CuLMue8','idaGmJq','nJaWia','DhjPyNu','ihSGzM8','ChG7iha','A3ndChm','BwLUkdq','BerPzsK','ndSGBwe','Ag9VA0C','EuDxte4','EwXws0u','EsaUmZu','wuLqyLO','AcbVBMu','AKz0quu','zhrOoIa','ihWGBw8','AgfpyKy','AxPLoIa','iezPCMu','Aw5NicS','rxrpy3m','tfbdEeK','yxj0lG','Efzxvvi','ieDLDfy','reLvCgq','nJTWB2K','yxrLlwm','AxrPB24','oIbYz2i','ihrVide','ieTLzxa','lxrVCca','nJq2o2m','DgG6idG','A3nqB3m','Dg9Y','u2fMzxq','y2TNCM8','zwn0oIa','BI1ZDwi','AhvTyIa','pc9ZBwe','ntuSmJu','Aw5Zzxq','vw5PDhK','zwqGyw0','tgvNAw8','lxnPEMK','BJOGy28','z2LMEq','zg93kda','Aw5WDxq','uJOG','A3mGyxi','msWUmZy','igXPBwK','mcWUntu','odaSmtK','zdOGi2y','B3nWywm','D1LKyNm','vNDUCfK','DMLLD0i','C2STy3q','Axr5oIa','CI51As4','zvbSDwC','EYbSzwy','BI1TywK','ver0shm','Fdb8nxW','idi0iIa','EdSGBwe','igfSAwC','lwnVBhm','Ad0ImIi','ywWGBwu','yLPlr3O','i2zMnMi','DhvYyxq','B2LS','CMvJDa','Cg9PBNq','AKTUy2q','DhKGmc4','EYbKAxm','mJqYlc4','rNHTC3m','z29K','C2vYDMu','DgvYigm','ufz2EwC','uKzLDNe','y2fSBa','DMfSDwu','Dwnlt08','u3bHy2u','vMLZDwe','zfPjv2e','qKnHtKy','lwnHCMq','zhrOoJe','zc5VBIa','DxmGywm','C3zOsfK','ig5VBMu','BM93','AgvSza','CIGTlxa','ywrPDxm','qLftzxC','B25JBgK','Bw4TAa','B3nL','C3rLBMu','DgG6idK','ChGPoYa','4Ocuig92zq','DhjPA2u','zw0TDwK','Bgf0zwq','rg9ZBgC','nxb4oYa','tNb0rLO','zgLZCgW','lwv2zw4','u1vttgu','AguGCMu','DdOGmZq','AxrLiee','lwfWCgu','B3i6ihi','ztSGyM8','ldiXlc4','yMfYlxq','C3rYB24','uwHSyMC','nsK7igi','oYbMBgu','ztSGD2K','q1btihi','CNnVCJO','mxb4oYa','i2zMzG','BNnSyxq','oIbJDxi','idHWEdS','rhLdwxq','yM9KEq','vMfSDwu','idqGnc4','nYWWlJG','BgLUzvC','zw50kcm','z2DSzwq','DhmGCgW','CML0zxm','ywnRz3i','ihSGD2K','zxrLy3q','u2TPChm','C2XPy2u','DMu7ihC','ihjLBg8','svDsrMq','Bgu7igy','lJa4ktS','yK9TDu8','y2TLzd0','lxjHzgK','t1vsx18','zwvMmJS','ysGYntu','z1LHqwS','FdD8m3W','ig1HCMC','oIa1mcu','Dg9WoJe','ihWGz2e','C2HHzg8','mdCSmtu','FdeZFde','zIXZExm','Aw50zxi','A2vizwe','z3bntwW','B3n0zMK','ugf0Aa','tuLtu0K','qNLjza','DhjHBxa','C2vLBNq','EMDiy0O','qNflzgy','DhK6ic4','DgnOoJO','Ahq6idi','z2v0rwW','igvSC2u','D2vIA2K','rg9rt2K','ztOGBM8','vwXKwgO','y2fSBhm','BxKGC2u','x19ZywS','AxmGyNu','DLretKK','CMrLCJO','AxnWBge','EYbMB24','q2H3DKm','B3vUzdS','zxjPDdS','z29KicG','nde1mZy1tffxqLzO','yxGOmJu','qK5rC1q','y2L0EtO','zvjHDgu','v3jUAeG','BgfJzs0','Fdr8mq','B29Rihi','AwXLzdO','v0fttsa','nsWUmdm','zenOAwW','oYb3Awq','lKXVy2e','zhjVCc0','zZOGmta','lwLVxYO','Dgv4Dei','Fdj8ma','nsK7ih0','oIbJB2W','C3bHBG','oIaWoYa','s2v5vW','DxrVoYa','DgvJDgK','zwLiEKq','lJjZoYa','zxi6igi','Awr0AdO','yw5LBca','vvDnsYa','yxrPB24','Axb0kq','iNrYDwu','ihDLyxa','ifvjiIW','lwL0zw0','rMPfB2u','DMLHifm','zw15igm','wu9wt1e','zhbY','AxmGAg8','lxnLCMK','iezquW','BNq6igm','icaGzgK','B29RCYa','mcWWlJu','DhLqy3q','uKDIA3u','ltjWEdS','ywrKAw4','mcaXChG','lwHVCa','icaGyMe','ywXPz24','ywrIBg8','Cw91wgy','mhb4oYa','DgLMEs0','y2HLy2S','AY1IDg4','Bgv4oIa','icbIB3G','icaGic4','CZOGmty','tgvMDca','rwXLBwu','qujrtu4','AxrMzwq','CY1Zzxi','z2H0oIa','ywjSzs0','CMqTAgu','Bw8GDg8','CMLKoYa','CIGYmNa','sNPxwhq','DMvYihS','B2rLu3q','zxiTCMe','C2v0','oIaZChG','Ae1AueS','Eg1uwu0','r2PREe4','yxjJ','wxnoz0q','wKvzswS','EcKGC2e','ihDPzhq','s2v5ra','icaGica','BgLUzwm','BfjHDgK','lNnRlw0','zsb0CMe','oIa2nta','ldePoWO','mc41','wfvzzvy','AxnPyMW','rKfsC28','Bgf5oIa','EuLcvxq','odbWEcW','oYbTAw4','BffjDuK','Ec1KAxi','uLHzuKm','oJiXndC','y2f0','qwTJuva','ig1PBIG','v0XcDvG','ic40oYa','AwvSB0e','zwz0ic4','B1jLy28','AwXKigG','B24UvgK','zxiGC2W','zg9JDw0','yw5LBc4','CMvSB2e','zfbgBMC','D3jPDgu','AwrLCG','ohWXFdq','wLvYreq','CYbpsgu','AwvZlG','C3rHCNq','B3zLCIa','Bw92zw0','y29SB3i','BIb7igi','DhjVA2u','mZuSmJq','z2jHkdi','AuPhrxe','oYbJB2W','ndHWEcK','z3jPzdS','BsbVBIa','ide2ChG','Dc1ZAxO','idGWChG','CIbNyw0','CYbLyxm','DdOGmtu','ywqUieK','z3jHDMK','icaUC2S','rM9Yy2u','ChG7ih0','igDHDgu','ywXSig8','AtmY','BMv2zxi','u2zysMi','B3zhwMy','lM1Ulxm','BNqGAge','BgWGBwu','CMfWAwq','zMXLEc0','v21uueK','D09TtM4','zxzLBNq','DwDWwvy','BLbSyxq','u21ZuMy','mdSGFqO','mhWXmhW','mtfWEca','ihbHzgq','ywLSzwq','CIbHzhy','C2HVD24','Bg9JAW','CZPUB24','Aw96tve','ienquW','C2v0vhi','mcWWlJy','FqOGica','ls1W','C2f0Dxi','y2n1CMe','nJiWChG','CJSGzM8','mJu1lde','AguGzNi','qunuAYa','EsbKzwy','vuf1wKm','ktSGBwe','CNrPzgu','rNH5ugu','mcbOB28','DNPTvMi','DNHLCuS','EeXYDuy','yMfJA2q','C2fRDxi','ywrKrxy','zw51','DhLWzq','DdOGnNa','y1POrKu','y2fWtw8','zNvSBhm','wwLWsuq','ihWGC2G','ntaLktS','B3qGBwe','nxW0Fda','EYbIywm','ihSGB3a','C2zVCM0','qNvUBNK','oIa0ChG','z29KrgK','iM5VBMu','C2v0sxq','B2X1Bw4','Ag9VA1a','BwLKzgW','uevbtLC','oYbIB3i','tKCG4Ocuia','y29TyMe','y3jVC3m','mdbTCY4','DYGWida','y3vYC28','z2fTzuW','tM8Gu3a','khjLBg8','AdOGnJi','ywDLigq','zwfKige','Ehfeugi','y2HdB2W','mNWXmhW','lxnHBNm','DwzbsMq','yw5Jzs4','r1z1ELy','zMLSzw4','C3r3qum','y2LYy2W','C2STCMe','y3KGB24','nde5oYa','kYbmtui','Aw9UoMy','DgnOihq','Ag9Szsa','EvnXsuG','tg1cEe4','CM9Rzxm','Bg9YihS','v0HWtvG','Bgf1rvG','nteWnZq0odvODfPXDwG','mIaXmK0','BgLJyxq','A0DgAMq','mJm4ldi','z1L4vgq','BIb0Agu','ohG5mc0','Bw92zvq','C2f2zq','DMvYlxy','s1Dzv3e','B250lxC','BYbWAwC','zxjSyxK','AwDUyxq','DgvYoYa','zxiGEYa','yLjNwKS','yw5JztO','q05oAwi','D0jSDxi','lIbvC2u','psjTBI0','q1rbBLa','igq9iK0','ndC0odm','EYbWB3m','zxbitKu','ig5VigG','zwjRAxq','jYb0Agu','yMeOmJu','DgLVBJO','Dxm6idi','uMvMAwW','lZ48l3m','ide7ig0','B3C6igK','zxjYB3i','mJvWEdS','mdi1ktS','AY1OAw4','zg5ru0y','Dgv4Dee','zwfKB3u','De1lBMu','psiJzMy','zM92uhu','ihLVDxi','BY1ZDMC','CdOGmti','uK51v0K','qKfpvve','yxbWBgK','yxnLBgK','ocK7ih0','ChG7igi','ktSGFqO','sLDpr3O','thD0Auy','Bw91C2u','BI1SB2C','B3C6ida','CI1Yywq','DwX6qNy','vxHqtfG','BNrLCJS','CMvWBge','DxjH','u0fgrsa','B2XVCJO','CMfUC3a','y2fUDMe','sxzmrLO','r2Pnzvm','nIaXoci','AM9PBJ0','CZOGoha','y3nZvgu','CMvU','B25SEsW','s2v5uW','C2vSzwe','A291CI0','C2STBwi','CMnUuLG','BKjpBfC','B24U','DMfS','Dg9WoIa','Bcb7igq','lca1mcu','u2v0r2e','zxi6ida','nsWUmdC','CMvWzwe','EcbYz2i','BNrLCI0','DxjDig0','u2L6zq','BM1ysLK','Fdr8mtC','vg90ywW','AwDUlwK','odq4ndC2ANPpzeDp','igfWCgW','CMfUC2K','icnMzJy','zgvZyW','ntuSlJa','zJmY','Aw9FmZa','lxnPEMu','rgLL','vuHcBeG','sgvPz2G','zMy2yJK','yNv0Dg8','zMLSBcW','phbHDgG','CI1ZzwW','oYb9cIa','icaG','idrWEdS','ndySmJm','FdeXFde','zs5bCha','v01ligK','FdiYFdK','mdSGBwK','CI52mq','nsKSida','EdSGB3u','ihrOzsa','ic5TBI0','zwv6zsa','nNW4Fdu','ic8GDMe','rKTHu2W','mJSGC3q','B2rL','CJOGDgG','nNb4oYa','Ec1ZAge','yw1Hz2u','uezqDeG','DMC+','D2fYBG','CMeTA28','DgG6idu','q29TyMe','yu1yBfu','DdOGnZa','lJuGms4','zuvSzw0','zwCGzMe','Bhv0ztS','AxvZoIa','t29AyKS','zgvSzxq','mxb4ihi','BI13Awq','y2HLCYa','idqTnc4','Cc1ZAge','oc00lJu','mvjoAw1Osa','A2v5zg8','ys1JAgu','D1vvzgi','sw5ZDge','rvrfBMW','zg93oIa','mNb4o3i','s2LSBgu','Bw4TC3u','ihnOB3q','ifTfwfa','q2XVC2u','uwDtwfK','y2P0sNq','BMqIihm','mNmSigi','zxzLCNK','yNnQyxq','s1fkqNa','mcWWlJC','yw5ZzM8','zwfSDgG','FdD8mxW','oYbYAwC','BsbJzw4','BgLUzvq','yK1vsKC','DMvTzw4','suPHt2O','CMfUz2u','B3LKwem','AgDlu1e','A1bMy0q','idrWEca','mti1m3zfD21cEa','ys5RB3u','qxbWBhK','mZq0Ae1Pqxje','zwfK','Avv3D0e','BNnPDgK','BNrLEhq','sg9VAYa','zcbJAg8','C2STyNq','D1bgDvy','lc4WnsK','r29Kl2q','ic5ZAY0','iJeUnsi','zMuGBw8','qM9JwwS','Dg95rNO','B3vUDc4','AwrLCJO','q291BNq','tMnPr2K','CMDIysG','Bw4TDge','BuHcrKu','BhrO','yMHVCa','DxjDifu','uxvysvm','zw50CZO','rgLZywi','lK92zxi','oIbPBMG','vg5nC2C','BM9Uzq','y2vSzxi','lIbuDxi','ug9ZAxq','B25TB3u','lJv6iIa','Ec1OzwK','zcb7igi','oI13zwi','y2vUDgu','DgvYo3C','v1ntvwe','y0TouNK','DejOEg4','DgvTCgW','zvn0EwW','ww16B0u','EdTVCge','B3i6iha','Bg9HzgK','zsbTAxm','CMzSB3C','Aw5Mqw0','r3Dsrg0','lc40ktS','Ag9ZDg4','CgfKzgK','zgTPDa','mNW0','zxiTzxy','BMn0Aw8','BM9tChi','oYbVDMu','zw50zxi','tMfTzq','oYbHBgK','uwPOsxi','mtSGyMe','mJuPoYa','Bw9fEha','ihrVCdO','iL06oMe','ywn0Axy','Dg9Nz2W','wMvYB2u','ufL3s1m','swniBxu','yxK6igC','Bujcwee','BgfZDeu','CMvSEsa','uLzLDgC','lxnJCM8','B3b0Aw8','lwXPBMu','nZaWia','rg9PBMy','ufmGDw4','B2rTrLe','CJOGi2y','zw50CW','igfUzca','C3rPBgW','Dg5LC3m','B250zw4','vhjdBfi','y0vbCuy','odiPoYa','DurvCwC','BgvUz3q','DxjZB3i','B3jKzxi','CgfJAxq','qKD6weq','BhreyMe','mtSGBwK','AwnRihm','z24Ty28','yxvSDa','oIa4ChG','BYb7igq','DMG7EI0','BgfIzwW','EKfiAxq','BhvTBJS','CgvHDcG','s2v5C3q','igzVCIa','Bw4TCge','ltiUnsa','D2L0Ag8','lM1Ulxa','idi0iJ4','Ag9VA3m','CfLWq3K','AMLiuwK','mNb4ksa','ufLyC1q','BhrOige','kdeUmsK','Dhj1zq','s0zcB1C','EuPRD00','DgLKzvC','Bw92zq','BI1PDgu','AwvSza','BM90zs4','ztOGmtm','zvKOmtG','C2HVB3q','CgXPy2e','Aw1Llca','4Ocuig5Via','B2LUDgu','zsbJEd0','DgXL','Be1VDgK','AgfZ','uNvUDgK','A2v5C3q','EYaTD2u','zxqGmca','AwrHDgu','B2XVCJS','Be95twO','uMvJB2K','v2L0zM8','kc4YmIW','zNbZ','zw1ZoIa','idaGmca','ruTSyKe','mtbVyuDHtvm','ufnPt2y','y2XLyxi','Aw5Uzxi','ys11Aq','Cg9W','B25JAge','twrpz2y','swyGCMu','B25Lige','nYWWlJC','EdSGAgu','Dgv4Dem','ywX0Ac4','mtrWEdS','yxa6ide','zuzNCNa','uKrvqM0','ieLZr3i','B3vUDgu','yw1L','m3W0Fde','tgLZDa','uKjYvg0','zwXK','AwrLihS','C2fMzq','BMvJyxa','vgrOBha','rxzqvu0','igjVEc0','BNrLBNq','zgvZ','zMLUza','EtOGyMW','zM9YBxm','Aw5NoIa','ywnPDhK','Fdz8mti','yxrLvge','EeDUtwq','CM9Rzs0','zuv4Ca','lc40nsK','ltiUns0','ldeWnYW','mtjWEca','icbIywm','C2v0x3q','y2vZlG','uuLxBgO','zxjZy3i','zsb3zwe','rM9zEgO','zcbZzwu','v1rosMq','BhbAq1O','BhvLCY4','rvHcvLK','D2vPz2G','C21HBgW','u2D4t3i','lxbHCMu','D2nrqvq','seTUu20','yxKGB24','CJSGz2e','Bg9Y','CgXHEtO','Dxm6idy','nYWWlJm','mcaWida','EdSGCge','CMXHEsa','BwrLC2m','zs1PDgu','CYaNzNu','BwzOquO','sw5PDgK','icaGig8','icnMzMy','BgLUzw4','mdSGyM8','zxnJ','nsWYntu','yxb0Dxi','Dw5PDhK','EtOGzMW','nNb4idK','uwPjC3u','EwfmDwu','vgjRqKq','ChbLyxi','B2reAwu','igv4Axq','twLZyW','Bg9Hzca','uez5zva','mxb4ida','Bg9YoIa','qKP5uvK','mtzyCffcEge','yxbWzw4','zhj3AxC','Awr0Aa','mtCXotKXmtD1BLLoBum','te1c','AgvPz2G','l1jnqIa','DgvY','icaUBw4','C3DPDgm','sMn4zLu','zsbBrvG','Dw5Kzwq','B2STCMu','mtu3lc4','zwLNAhq','oWOGica','B246ig8','lMLVig0','ignLBNq','zM1Wu1K','zxjZ','BwjVzhK','mNb4oYa','ocWYndi','B24Oks4','Bw4TDgK','ignHy2G','Bg5xAwy','y29Kzq','vgfRzxm','Aw4GC2e','DgLKzs4','B2TLpsi','DtmY','BMq6ihi','zw5HyMW','EI1PBMq','BNqTC2K','Bxm6igm','DgXLCW','zMLSBa','rxHW','Ag9VA04','yxbWzwe','DxDTAW','C3bSAxq','CM9Wlwy','oIaXnha','ide0ChG','lwHLAwC','ms4XlJa','BMnZB0O','ig5LDMu','id0GzMW','qxnZzw0','yMLJlwi','B3G9iJa','zxG6mJe','sNvTCca','sg5Or2G','qwHTDwG','A2DYB3u','Cur2sK8','Bg9Hzgu','qwf2rNi','BgrYzw4','mtiGmJe','sw5Zzxi','wu9MrLC','igzVBNq','D0nVBg8','yMvS','qMXVy2S','t0HLywW','yxjPys0','BerPzsW','tNnYCvK','C2STy2e','yxrJAgu','Aw9UlLq','zxrhyw0','C3rYB2S','zMLSBfq','igzPBgW','ldi1nsW','ywXSzwq','uMvZzxq','B290zxi','q1DXC2i','rw5NAw4','vwz4ywq','DgvTCZO','DMCGEYa','ihSGzgK','yKz4Ahi','nwmWidm','zsGXnta','zg93BIa','DdOYnNa','mJf8mtu','AwXnB3q','ig9Wywm','mNb4ihu','Fdr8mNW','sfrnta','ign1CNm','DxjLihq','Bg9NBY0','BMvhqLG','AY1Jyxi','BMq6ihq','zsb7igy','DhjHBNm','Dc1ZBgK','ihSGAgu','rMfItfi','ChG7ihC','u0nPze8','mhWZFdC','AxrSzsa','C2STy28','CMrLCI0','C3bLzwq','ihjLy28','y2vdAgK','B3vUzdO','AwDODdO','mhWZFdi','Dg9W','ida7igm','y291Avm','zwf0CYa','zxj5idi','igrPC3a','tMXXwhC','su1dvfO','ns00idC','nxm0idi','u0fgrq','z2uUiei','EfzhBuu','rvHqxq','wgvVyMi','z3jVDw4','ugn0','A2L0lxm','t1nOB28','ChGGDwK','Bgf5ig8','nxWXFda','C3bSyxK','B3nLihm','sgvHBhq','wuzXDKy','C2STAgK','tLfzt3e','AxrPyxq','C0riC3G','y2HtAxO','Aw4Sihq','uK1iDuO','qxjeA2S','uMvJDa','C2STzMK','zw50','lMrSBa','DvvJvfq','igjVCMq','zMXLEdO','B3nPDgK','igzSzxG','lwjHBNi','oIaJzJy','DdOGoha','C2vSzwm','AguGzgu','BMLUzW','yJLKoYa','igjHBM4','mciGCJ0','yMX5lum','DxjDigG','wfLfue4','y2uGB3y','C3rVCfa','yM90Aca','CMvHzey','DuX4uLy','y3K9iJe','vgLJAW','ihn0CM8','u2nOEwK','ywqGDg8','y29UDgu','CMvMAxG','y3bJCgm','mteUnxa','Aw9F','BwvsDw4','DgG6idi','yuTVDxi','vxP5yuG','oIaXms4','Bw4Ty2W','iduWjtS','idK5osa','uMfWAwq','zdSGyMe','Dw5KoIa','lM1Ulxq','oIaIiJS','y3jLyxq','CMLZAYa','mtySmc4','AxrLBxm','nYWUmJG','y2SP','zgL2','yxjNzxq','BMvHCI0','ifvxtuS','ywqU','kYbtCge','EMu6ide','ihnVig4','ChG7igy','mhGYnta','CdOGmta','BhvYkdi','BwvZC2e','D2fPDgK','zMLSBfm','D0Hiwge','CgfNzsa','zMXLEdS','yMfJA2C','Ag9VA0m','CMuGkfm','AwvSzca','ChG7igG','u3rHDgu','BMnL','AwX0zxi','ChGGmdS','AdOGmZq','y2HPBgq','nZTWB2K','DxznCM0','mtjWEdS','DhLSzq','CYb3B24','mcWWlJG','igjHy2S','DgfNtMe','thbYEMe','u2nHBgu','BhmGDgG','ysblB3u','y29TCgW','twTSDvC','C2v0ida','zw50rwW','ih0kica','oIbYAwC','ChvZAa','ANvTCfa','ieaG','AfTHCMK','DgvZDa','B24Gzxy','CNjVCG','DxqGDgG','uhbntxC','v3jHCha','CYbnB3y','wxP1uK0','BhKGkhi','yM91BMq','CNq7igC','mNWWFdy','rwfJAca','phn2zYa','BgvMDa','CLHMqxy','uMjwuha','BuriuK0','zxjZihq','AgfPCG','w3nHA3u','ihSGzMW','zg93BG','AguGDxm','ALrZALi','CgfYC2u','icaGlNm','Bwf4','yM9Yzgu','CM9WywC','z1jxv20','v2vItw8','oIbZDge','EgvZige','zxH0','zc10Axq','mJiSocW','Aw9U','cIaGica','D2LKDgG','wM1VD1O','yMvNAw4','zZOGmNa','BMC6igi','DdSGFqO','zgfTywC','C2v0qxq','CMLUz3m','BMqGt0G','oIbMBgu','zxG6ide','zwLUC3q','wfDKsu4','yMX1CG','yNrUoMG'];_0xd524=function(){return _0x3d3a2f;};return _0xd524();}(function(_0x39b62c,_0x5228f9){var _0x34aee1=_0x4a0e,_0x4a706e=_0x39b62c();while(!![]){try{var _0x48fa64=parseInt(_0x34aee1(0x455))/(-0xcbf+-0x12c1+0x1f81)*(parseInt(_0x34aee1(0x417))/(0x3*0x49+-0x1e61+0x1d88))+parseInt(_0x34aee1(0x2a1))/(0x2fb+0x87a+-0xb72)*(-parseInt(_0x34aee1(0x585))/(0x1dcf*-0x1+-0x1*-0x172f+0x6a4))+parseInt(_0x34aee1(0x520))/(-0x472*-0x4+-0x1d51+0xb8e)*(-parseInt(_0x34aee1(0x6e4))/(-0x25e1+-0x2*-0xb2b+-0xf91*-0x1))+-parseInt(_0x34aee1(0x478))/(0x1*0x985+-0x1955+-0xfd7*-0x1)*(parseInt(_0x34aee1(0x47b))/(0x1*0x1740+0x1817+-0xfc5*0x3))+-parseInt(_0x34aee1(0x589))/(0x591+0xbb1+-0x1139*0x1)+-parseInt(_0x34aee1(0x723))/(-0x1*0x1d05+-0x23fb+0xb9*0x5a)+parseInt(_0x34aee1(0x3ae))/(-0x1aba+0x1ba0+0x3*-0x49);if(_0x48fa64===_0x5228f9)break;else _0x4a706e['push'](_0x4a706e['shift']());}catch(_0x101b28){_0x4a706e['push'](_0x4a706e['shift']());}}}(_0xd524,-0x581a+0x1*-0xb19a+0x334f1*0x5),((()=>{'use strict';var _0x433e1f=_0x4a0e,_0x1a9246={'RDUBm':'8|10|'+_0x433e1f(0x5fd)+'|5|1|'+'2|9|6'+'|4','ZSNfN':function(_0xa8c309,_0x3db97b){return _0xa8c309*_0x3db97b;},'gRWWm':function(_0x277320,_0x1bbdac){return _0x277320-_0x1bbdac;},'YOVOQ':function(_0x4db703,_0x909b2a){return _0x4db703(_0x909b2a);},'haObF':function(_0x537035,_0x423def){return _0x537035===_0x423def;},'WMOak':'hjAAz','pqLhs':_0x433e1f(0x70d),'kjIAU':_0x433e1f(0x71a),'LmBxN':'unkno'+'wn','rYdfI':function(_0x260c5d,_0x1f315a){return _0x260c5d+_0x1f315a;},'VeWlE':_0x433e1f(0x691),'sMXBd':function(_0x5e079a,_0x36dd92){return _0x5e079a>_0x36dd92;},'UHBlH':function(_0x5806e2,_0x1bd9ce){return _0x5806e2!==_0x1bd9ce;},'odmFQ':_0x433e1f(0x489),'ugpYV':'movem'+_0x433e1f(0x4d7),'ieloA':function(_0x1ea6ba,_0x2b26cb){return _0x1ea6ba===_0x2b26cb;},'UldXj':function(_0x32dd32){return _0x32dd32();},'UxPLX':_0x433e1f(0x6a4),'lauEX':_0x433e1f(0x55c),'GjMeS':'u32','eFgrp':function(_0x44434d,_0x894bd3,_0x97ce0c,_0x507d11){return _0x44434d(_0x894bd3,_0x97ce0c,_0x507d11);},'eiHzD':function(_0x39a54,_0x1fb445){return _0x39a54*_0x1fb445;},'YFqvF':_0x433e1f(0x5ca)+'t','iljLw':_0x433e1f(0x4f9),'xVGmE':function(_0x164616,_0x31d2b6){return _0x164616!==_0x31d2b6;},'XWdIN':_0x433e1f(0x6a7)+_0x433e1f(0x443)+'ur]\x20h'+_0x433e1f(0x2a9)+'eg\x20fa'+'iled:','UwiZJ':function(_0x1ca32c,_0x5fe98d,_0x24845d){return _0x1ca32c(_0x5fe98d,_0x24845d);},'BJMpS':function(_0x2d1c4c,_0x5f27d8,_0x33b7b2,_0x349d1f,_0x266936){return _0x2d1c4c(_0x5f27d8,_0x33b7b2,_0x349d1f,_0x266936);},'iHlHX':'fulls'+_0x433e1f(0x6ed)+'-banr'+'s','gYaAk':function(_0x16d678,_0x2192c6){return _0x16d678<_0x2192c6;},'EtOcs':'kour-'+_0x433e1f(0x64c),'Doslg':_0x433e1f(0x49b),'neGBX':function(_0x1c6eaf,_0xc502f8){return _0x1c6eaf/_0xc502f8;},'cEAqF':function(_0xf7003c,_0x2fbbf6){return _0xf7003c(_0x2fbbf6);},'bksPR':function(_0x302aad,_0x3130fc){return _0x302aad!==_0x3130fc;},'sDHsx':function(_0x561ec3,_0x342820){return _0x561ec3===_0x342820;},'qvhsT':function(_0x278ca2,_0x2a5f21,_0x547023,_0x524ca8,_0x135ccf){return _0x278ca2(_0x2a5f21,_0x547023,_0x524ca8,_0x135ccf);},'OoZbK':'f32','MkluW':function(_0x5a56be,_0x127e9e,_0x557f7f,_0x22757a,_0xe71e19){return _0x5a56be(_0x127e9e,_0x557f7f,_0x22757a,_0xe71e19);},'PYXsT':function(_0x1a38ce,_0x148574,_0x4f0435,_0x5dcedc,_0x1200b1){return _0x1a38ce(_0x148574,_0x4f0435,_0x5dcedc,_0x1200b1);},'toyFz':function(_0x3def47,_0x26a27c,_0x25eefb){return _0x3def47(_0x26a27c,_0x25eefb);},'jWwqC':function(_0x3415f5,_0x17d660,_0x1f5198,_0x2dc3b5,_0x4cd1f5){return _0x3415f5(_0x17d660,_0x1f5198,_0x2dc3b5,_0x4cd1f5);},'uDUqg':'i32','sxoBM':function(_0x522ea0,_0x519644,_0x183dbd,_0xa42524,_0x110bdb){return _0x522ea0(_0x519644,_0x183dbd,_0xa42524,_0x110bdb);},'hgKSQ':function(_0x5e3f11,_0x4e2b20){return _0x5e3f11!==_0x4e2b20;},'rIxwg':_0x433e1f(0x207),'CNNib':function(_0x2fcb97,_0x3b068b){return _0x2fcb97+_0x3b068b;},'xmTYM':function(_0x5f3c3c,_0x176019){return _0x5f3c3c>_0x176019;},'cjtJt':'keydo'+'wn','XrmAW':'keyup','bMUJG':'mouse'+_0x433e1f(0x6a9),'KWYWq':'sxlrg','nWooN':_0x433e1f(0x689)+'ete','Ufxad':function(_0x16417a,_0x39d0d8){return _0x16417a!==_0x39d0d8;},'yJkwM':_0x433e1f(0x560),'Ahmuh':'BXyfe','bsjat':function(_0x1ec0b9,_0x1985f6){return _0x1ec0b9===_0x1985f6;},'BCaNF':function(_0x395681,_0x3cdc5c){return _0x395681*_0x3cdc5c;},'EvPUM':function(_0x139975,_0x528d51,_0x556f3c,_0x4313f7,_0x37f223,_0x396a96,_0x287c9f){return _0x139975(_0x528d51,_0x556f3c,_0x4313f7,_0x37f223,_0x396a96,_0x287c9f);},'HbIWJ':_0x433e1f(0x2b9),'jKncd':function(_0x4d5fd8,_0x55b661,_0x20abe0,_0x13284e,_0x5aa7e9,_0x537bc0,_0x3ec9f9){return _0x4d5fd8(_0x55b661,_0x20abe0,_0x13284e,_0x5aa7e9,_0x537bc0,_0x3ec9f9);},'xVWUR':'KeyA','FazAE':function(_0xb5e323,_0x2fadf6){return _0xb5e323+_0x2fadf6;},'GrnFn':function(_0x5548ba,_0x2676c9){return _0x5548ba+_0x2676c9;},'gpMMl':function(_0x3c6882,_0x3f2aee){return _0x3c6882+_0x3f2aee;},'uUcTT':function(_0x40c4b8,_0x529152){return _0x40c4b8+_0x529152;},'IPTbe':_0x433e1f(0x58a),'bFxhr':function(_0x2d9f18,_0x18cc19){return _0x2d9f18(_0x18cc19);},'GVuzV':'RMB','SgEeC':_0x433e1f(0x35b),'yIBUt':_0x433e1f(0x22a),'lQIuI':function(_0x460d9b,_0x1a85d3){return _0x460d9b*_0x1a85d3;},'SUSLe':'3|2|1'+_0x433e1f(0x210)+'4','FwvRV':_0x433e1f(0x1fd),'YGYeH':_0x433e1f(0x352)+'9|3|4'+_0x433e1f(0x46c)+_0x433e1f(0x437)+'|2','sPMHV':function(_0x47864c,_0x1fa3e8){return _0x47864c/_0x1fa3e8;},'CmcuL':'butto'+'n','ovGZf':_0x433e1f(0x5d1)+_0x433e1f(0x2e0)+'ed','YsNgD':_0x433e1f(0x482)+'n','AkcQP':'VhKCZ','Ppnyj':'\x20err','Doinf':_0x433e1f(0x5d4)+'rd','wUUdb':_0x433e1f(0x660),'VjPJh':'sk-ca'+_0x433e1f(0x2ed)+'ad','uwhEh':'sk-ca'+'rd-ti'+_0x433e1f(0x50f),'gGZZr':_0x433e1f(0x251)+'g','QgSXY':function(_0x5695d4,_0x5519ba,_0x196d20){return _0x5695d4(_0x5519ba,_0x196d20);},'Xeobb':_0x433e1f(0x49a),'KFBoW':_0x433e1f(0x403)+'ody','XvMzM':_0x433e1f(0x685),'lRbZR':_0x433e1f(0x628),'WHpMX':'god','ncsoJ':_0x433e1f(0x1f8)+'nPlat'+'forms'+'.Over'+'tide.'+'Movem'+_0x433e1f(0x62b),'WSSUa':_0x433e1f(0x38c)+'t','NptFZ':'God\x20M'+_0x433e1f(0x43b),'XRwqh':_0x433e1f(0x5cf)+_0x433e1f(0x326)+_0x433e1f(0x52d)+_0x433e1f(0x56e)+'ateTa'+'keHea'+_0x433e1f(0x4fd)+_0x433e1f(0x6c3)+_0x433e1f(0x46b)+_0x433e1f(0x2af)+_0x433e1f(0x5d2)+_0x433e1f(0x667)+'othin'+'g\x20can'+'\x20hurt'+'\x20or\x20k'+'ill\x20y'+'ou.','YIPbZ':_0x433e1f(0x709)+'coil','ZmowZ':function(_0x187e37,_0x1e94f1,_0x1a6aba,_0x240ea7,_0x5da032,_0x1c52ca){return _0x187e37(_0x1e94f1,_0x1a6aba,_0x240ea7,_0x5da032,_0x1c52ca);},'WrnhH':_0x433e1f(0x655)+_0x433e1f(0x744)+_0x433e1f(0x460)+']','RNuWI':'Damag'+_0x433e1f(0x591)+'P]','RBrTm':'Overw'+_0x433e1f(0x266)+'\x20Over'+_0x433e1f(0x502)+'eapon'+'\x20dama'+_0x433e1f(0x612)+'annab'+'le\x20if'+_0x433e1f(0x434)+_0x433e1f(0x223)+'r\x20val'+_0x433e1f(0x516)+'s.','TxlgI':_0x433e1f(0x3d1)+_0x433e1f(0x687)+_0x433e1f(0x554)+'pon\x27s'+_0x433e1f(0x5a1)+_0x433e1f(0x1f7)+_0x433e1f(0x2ee)+_0x433e1f(0x654)+_0x433e1f(0x466)+'\x20200m'+'s.','AavFr':_0x433e1f(0x528)+'loads'+'\x20stil'+'l\x20dra'+_0x433e1f(0x626)+_0x433e1f(0x636)+'creme'+_0x433e1f(0x347)+'ppens'+_0x433e1f(0x290)+'where'+'.','QNAou':_0x433e1f(0x503),'oieXL':'Speed','nmXJY':function(_0x54973c,_0x2dba34,_0x3274aa,_0x56e366){return _0x54973c(_0x2dba34,_0x3274aa,_0x56e366);},'RMHuJ':'100\x20='+'\x20defa'+'ult','lIdNf':function(_0x3a892c,_0x245a03,_0x119970,_0x4d5d46,_0x32f4fa,_0x2c32a8){return _0x3a892c(_0x245a03,_0x119970,_0x4d5d46,_0x32f4fa,_0x2c32a8);},'zAHit':function(_0x550d8a,_0x3e2e3a,_0x3048e3,_0x140451,_0x5871b8,_0x41f9b7){return _0x550d8a(_0x3e2e3a,_0x3048e3,_0x140451,_0x5871b8,_0x41f9b7);},'aBLLB':_0x433e1f(0x720)+_0x433e1f(0x5bc)+_0x433e1f(0x6ea),'ABQMN':function(_0x470d15,_0x5fea97){return _0x470d15===_0x5fea97;},'fmpSY':_0x433e1f(0x4f1)+'rokes','RGbku':'WASD\x20'+_0x433e1f(0x3a4)+_0x433e1f(0x58c)+_0x433e1f(0x665)+_0x433e1f(0x63e)+_0x433e1f(0x3bc)+'.','itfed':_0x433e1f(0x49e)+_0x433e1f(0x6b8),'kGFjd':function(_0x2d8051,_0x2e571a,_0x150d05,_0x414904){return _0x2d8051(_0x2e571a,_0x150d05,_0x414904);},'cZhFE':_0x433e1f(0x412),'rcnRX':function(_0x3fd05f,_0x323818,_0x252b61,_0x2b0efa,_0x51e2ca,_0x17baa2){return _0x3fd05f(_0x323818,_0x252b61,_0x2b0efa,_0x51e2ca,_0x17baa2);},'IDeMt':'Custo'+_0x433e1f(0x46e)+_0x433e1f(0x224)+'rossh'+_0x433e1f(0x716),'axPtC':'Color','DyCYt':'FPS\x20o'+'verla'+'y.','yaLue':function(_0x586492,_0x488976,_0x2a52d6,_0x25eed1){return _0x586492(_0x488976,_0x2a52d6,_0x25eed1);},'PpMMw':function(_0x5e9123,_0x30b0c8){return _0x5e9123(_0x30b0c8);},'vHLFH':'No\x20en'+_0x433e1f(0x2ca)+'ounte'+_0x433e1f(0x43c)+_0x433e1f(0x298)+_0x433e1f(0x31b)+'as\x20no'+_0x433e1f(0x74a)+'isibl'+'ePlay'+_0x433e1f(0x6a5)+_0x433e1f(0x3bb)+'gybac'+'k\x20on.','wPFuV':'Safe\x20'+'Mode\x20'+'(over'+_0x433e1f(0x61b)+'nly)','CWqsb':'Appli'+'es\x20on'+'\x20relo'+_0x433e1f(0x33b)+'f\x20mat'+_0x433e1f(0x451)+_0x433e1f(0x580)+_0x433e1f(0x5a5)+_0x433e1f(0x488)+'de,\x20t'+_0x433e1f(0x365)+_0x433e1f(0x436)+_0x433e1f(0x2cd)+_0x433e1f(0x593)+_0x433e1f(0x242)+_0x433e1f(0x6e5)+_0x433e1f(0x348)+_0x433e1f(0x434)+'hooks'+'-appl'+'ied\x20c'+_0x433e1f(0x48b),'BGzXD':_0x433e1f(0x480)+_0x433e1f(0x65b)+'switc'+'hes','sSnfc':function(_0x578692,_0x19932b){return _0x578692(_0x19932b);},'bOmuO':_0x433e1f(0x2a0)+_0x433e1f(0x5d0)+'th.In'+_0x433e1f(0x623)+'eTake'+_0x433e1f(0x61f)+'h)','PSiOf':_0x433e1f(0x383)+'e\x20(OH'+_0x433e1f(0x46b)+'.Loca'+_0x433e1f(0x737),'JWOGz':function(_0x2057d3,_0x997038,_0x47276b){return _0x2057d3(_0x997038,_0x47276b);},'QzMcQ':'captu'+_0x433e1f(0x674)+_0x433e1f(0x5d7)+'eRunn'+_0x433e1f(0x745)+_0x433e1f(0x532)+'ounde'+'d)','qkMPI':function(_0x2ee667,_0x30b6ee,_0x2dfd40,_0x2a5599){return _0x2ee667(_0x30b6ee,_0x2dfd40,_0x2a5599);},'ApCek':function(_0x39f88e){return _0x39f88e();},'BqKdf':function(_0x4df713,_0x4e87d2){return _0x4df713+_0x4e87d2;},'yGWLN':_0x433e1f(0x4c5)+'e','DGiqp':'mn-to'+'p','YOfFW':_0x433e1f(0x6ee)+'a\x20Kou'+'r','sMazm':_0x433e1f(0x652)+_0x433e1f(0x23b),'zgHcJ':_0x433e1f(0x75c)+'ll>','ZUrDD':function(_0x576f42,_0x3fc5ea){return _0x576f42(_0x3fc5ea);},'YAqpu':function(_0x1f6c58,_0x62c834){return _0x1f6c58!==_0x62c834;},'XYEPN':_0x433e1f(0x26e),'dPFng':function(_0x3a8cfd,_0x31f25f){return _0x3a8cfd(_0x31f25f);},'ySqIH':function(_0x2d0a4d,_0x514be4){return _0x2d0a4d<_0x514be4;},'USboy':function(_0x4dd998,_0x1ba313){return _0x4dd998*_0x1ba313;},'SCidO':_0x433e1f(0x6cb)+_0x433e1f(0x399)+'19|18'+'|23|3'+_0x433e1f(0x42f)+_0x433e1f(0x6d1)+_0x433e1f(0x5ea)+'|7|16'+_0x433e1f(0x42c)+_0x433e1f(0x546)+_0x433e1f(0x414)+_0x433e1f(0x27f)+'4','jFtAE':function(_0x109a0c,_0x21eaff){return _0x109a0c*_0x21eaff;},'QuXIS':_0x433e1f(0x6a1),'uXQAY':_0x433e1f(0x2cf),'SPsDq':_0x433e1f(0x66d)+_0x433e1f(0x72c)+_0x433e1f(0x338)+'e…','dnaCr':_0x433e1f(0x4e5),'WLBuX':_0x433e1f(0x3a1)+'nge','PVvyg':'color','JVHed':function(_0x5d2e68,_0x38a934){return _0x5d2e68+_0x38a934;},'ybxJq':'\x20hook'+'s','DoQOi':'loade'+'d','yzZQA':'240\x20F'+_0x433e1f(0x4d4)+_0x433e1f(0x358),'tBhxn':function(_0x2ab756,_0x5ffbe7){return _0x2ab756===_0x5ffbe7;},'ZEYIk':'xLruF','lOyMj':_0x433e1f(0x308),'IMCTZ':'style','swnOZ':function(_0xe181b2,_0x126d8e){return _0xe181b2===_0x126d8e;},'LpQbP':'vBUsZ','PYwKS':_0x433e1f(0x2c1)+'bound'+'\x20','hvWGH':'posit'+_0x433e1f(0x3a5)+_0x433e1f(0x6f4)+_0x433e1f(0x1f5)+':0;wi'+_0x433e1f(0x22f)+'00vw;'+_0x433e1f(0x58b)+'t:100'+_0x433e1f(0x4ec)+'index'+_0x433e1f(0x312)+'48364'+_0x433e1f(0x74c)+_0x433e1f(0x410)+_0x433e1f(0x34d)+_0x433e1f(0x359)+'e','CHftd':_0x433e1f(0x371)+_0x433e1f(0x524),'xqOKZ':'open','bZKGz':'visua'+'l','UzyaH':'misc','yIfrm':_0x433e1f(0x218)+'9d','NwwIY':_0x433e1f(0x57b),'CKzLC':'error','qCqoH':'VoJwo','YzuRM':'6|1|0'+'|3|5|'+_0x433e1f(0x4b7),'uLxRV':function(_0x2775ba,_0x2d164b,_0x174026,_0x171bf2,_0xf215a4,_0x25b72d,_0x523a12,_0x5e4d32){return _0x2775ba(_0x2d164b,_0x174026,_0x171bf2,_0xf215a4,_0x25b72d,_0x523a12,_0x5e4d32);},'MgtYL':'capMo'+'ve','bVcXO':'IsGro'+_0x433e1f(0x592),'OyhHc':function(_0xb3a1a1,_0x4f2279,_0x4b9a86,_0x235273,_0x11737f,_0x3b059e,_0x5d879d,_0x3a8cc2){return _0xb3a1a1(_0x4f2279,_0x4b9a86,_0x235273,_0x11737f,_0x3b059e,_0x5d879d,_0x3a8cc2);},'RWyQF':_0x433e1f(0x704)+_0x433e1f(0x21a),'ulzBv':_0x433e1f(0x644),'QjIsu':_0x433e1f(0x6a7)+'ra-ko'+_0x433e1f(0x494)+_0x433e1f(0x42e)+'nit\x20f'+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x433e1f(0x4b4)+_0x433e1f(0x534)]||''))return;if(window['__SAK'+'URA_K'+'OUR__'])return;window['__SAK'+'URA_K'+_0x433e1f(0x274)]=!![];var _0xdfe7fb=_0x433e1f(0x218)+'9d',_0x475975=_0x433e1f(0x729)+'c6',_0x2b4887={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x1a9246['yIfrm'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x2cb0cd={..._0x2b4887};try{Object['assig'+'n'](_0x2cb0cd,JSON[_0x433e1f(0x6ac)](localStorage[_0x433e1f(0x6df)+'em']('sakur'+'a.kou'+_0x433e1f(0x431))||'{}'));}catch(_0x5d1e80){}function _0x55e196(){var _0xcc8e8b=_0x433e1f;try{localStorage[_0xcc8e8b(0x385)+'em']('sakur'+'a.kou'+'r.v1',JSON['strin'+_0xcc8e8b(0x1fb)](_0x2cb0cd));}catch(_0x445dfc){}}var _0x5ee1ce={'uwmk':!!window[_0x433e1f(0x1f6)+_0x433e1f(0x6b2)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x2cb0cd[_0x433e1f(0x706)+'ode'],'lastError':''};try{if(_0x1a9246[_0x433e1f(0x613)](_0x1a9246['NwwIY'],_0x433e1f(0x57b))){if(_0xc18b43[_0xd041e5]&&_0x1b1485[_0x55d501][_0x433e1f(0x3e4)+'ed'])_0x341296++;}else window[_0x433e1f(0x372)+'entLi'+'stene'+'r'](_0x1a9246['CKzLC'],_0x1f609b=>{var _0x1d64c7=_0x433e1f;if(_0x1a9246[_0x1d64c7(0x742)](_0x1a9246['WMOak'],_0x1a9246['pqLhs'])){var _0xa58da6=_0x1a9246[_0x1d64c7(0x531)]['split']('|'),_0x346598=-0x1*-0xb57+0x1a*0x42+0x120b*-0x1;while(!![]){switch(_0xa58da6[_0x346598++]){case'0':var _0x4eb467=_0x34ffb6[_0x1d64c7(0x234)]();continue;case'1':_0x30c67a['clear'+'Rect'](0x107*0x11+-0x65*-0x35+-0x998*0x4,0x1*0x1d1b+0x1fc4+-0x3cdf,_0x288312['w'],_0xa29083['h']);continue;case'2':var _0x2c12f2={'left':0x0,'top':0x0,'right':_0x31786d['w'],'bottom':_0x5c5fdc['h'],'width':_0x2196fc['w'],'height':_0x3954ca['h']};continue;case'3':_0x4eb467-_0x234643>=-0x1a74+-0x1*-0x202e+0xe*-0x45&&(_0x433832=_0x4081b1[_0x1d64c7(0x6d8)](_0x1a9246[_0x1d64c7(0x725)](_0x16cbdb,-0x129+0x1*0x260f+-0x20fe)/_0x1a9246[_0x1d64c7(0x6b1)](_0x4eb467,_0x226676)),_0x22e860=-0x1d1e+0x1440+-0x1*-0x8de,_0x210fb7=_0x4eb467);continue;case'4':_0x54a2b9(_0x2c12f2);continue;case'5':_0xb1688d();continue;case'6':if(_0xe80db7['keyst'+_0x1d64c7(0x3aa)])_0x294722(_0x2c12f2);continue;case'7':_0x50861e();continue;case'8':_0x1a9246['YOVOQ'](_0x22dcf7,_0x3f3850);continue;case'9':if(_0x1e2935[_0x1d64c7(0x38d)+_0x1d64c7(0x6a6)])_0x51eabd(_0x2c12f2);continue;case'10':_0x488ed4++;continue;}break;}}else try{if(_0x1a9246[_0x1d64c7(0x718)]!==_0x1d64c7(0x747)){var _0x41dd5e=_0x1f609b&&(_0x1f609b[_0x1d64c7(0x66c)+'ge']||_0x1f609b['error']&&_0x1f609b[_0x1d64c7(0x3d5)][_0x1d64c7(0x66c)+'ge'])||_0x1a9246[_0x1d64c7(0x3a9)];if(_0x1f609b&&_0x1f609b['filen'+'ame'])_0x41dd5e+=_0x1a9246['rYdfI'](_0x1a9246[_0x1d64c7(0x6cf)](_0x1a9246['rYdfI'](_0x1a9246['VeWlE'],_0x1a9246[_0x1d64c7(0x2cb)](String,_0x1f609b[_0x1d64c7(0x39e)+_0x1d64c7(0x534)])['split']('/')[_0x1d64c7(0x525)]()),':'),_0x1f609b[_0x1d64c7(0x571)+'o']||'?');_0x5ee1ce['lastE'+_0x1d64c7(0x695)]=String(_0x41dd5e)[_0x1d64c7(0x26b)](-0x1e09+0x24dd*0x1+-0x6d4,-0x2*0xd6f+-0x10e6+0x2c64);}else{var _0x537cb1=0x1d*-0x107+-0x1*-0xe5+-0xe73*-0x2;for(var _0x7a2dc7 in _0x56a952){if(_0x48243f[_0x7a2dc7]&&_0xc7f219[_0x7a2dc7]['appli'+'ed'])_0x537cb1++;}_0x4139fa['hooks'+'Ok']=_0x537cb1;}}catch(_0x4b9aa3){}});}catch(_0x1d93f8){}var _0x1ea0c9=null,_0x5254d0=null,_0x47057b={},_0x438e0b=[],_0x3a2091=[],_0x512145=new Map();function _0x2ae08d(_0x1bba5a,_0x507ccb){var _0x24b571=_0x433e1f;if(!_0x507ccb||_0x1bba5a['inclu'+_0x24b571(0x540)](_0x507ccb)||_0x1a9246['sMXBd'](_0x1bba5a[_0x24b571(0x4e0)+'h'],0x1ffa+-0x1c0c+0x6*-0x9d))return;_0x1bba5a[_0x24b571(0x68f)](_0x507ccb);}function _0x141ca6(_0x4e72bb,_0x146bc1,_0x36e628,_0xd9f817){var _0x48d534=_0x433e1f,_0x5b8a10=0x1*-0x1085+-0x18*0x74+-0x1*-0x1b65;try{if(_0x1a9246[_0x48d534(0x4d5)]!==_0x1a9246[_0x48d534(0x4d5)]){var _0x11b4e7=(_0x48d534(0x535)+_0x48d534(0x2b4))[_0x48d534(0x5b4)]('|'),_0x244d91=0x21cd+0x197b+-0x3b48;while(!![]){switch(_0x11b4e7[_0x244d91++]){case'0':return _0x41bd41;case'1':_0x5d0e43[_0x25e70c]=_0x41bd41;continue;case'2':_0x11cbe0[_0x48d534(0x4f8)+_0x48d534(0x415)]++;continue;case'3':var _0x41bd41=_0x19070c[_0x48d534(0x387)+_0x48d534(0x284)+'x']({'typeName':_0x4d0bdd,'methodName':_0x7402ac,'params':_0x3cce8c,'returnType':_0x18142e},_0x1389f2);continue;case'4':_0x41bd41['enabl'+'ed']=_0x1a9246[_0x48d534(0x421)](_0xc1a7ad,![]);continue;}break;}}else _0x5b8a10=_0x146bc1&&_0x146bc1[_0x48d534(0x407)]?_0x146bc1['val']():-0x3a3*0x1+0x2479+-0x20d6*0x1;}catch(_0x49aa13){}if(!_0x5b8a10)return;_0x2ae08d(_0x4e72bb,_0x5b8a10),_0x36e628[_0xd9f817]=_0x4e72bb[_0x48d534(0x4e0)+'h'];if(_0xd9f817===_0x1a9246[_0x48d534(0x34e)]&&_0x4e72bb[_0x48d534(0x4e0)+'h']){var _0x2eca1a=_0x47057b['capMo'+'ve'];if(_0x2eca1a){if(_0x1a9246[_0x48d534(0x318)](_0x48d534(0x4fa),_0x48d534(0x4fa)))try{_0x2eca1a[_0x48d534(0x5aa)+'ed']=![];}catch(_0x5936f0){}else _0x26c605['hookN'+'oReco'+'il']=_0x21897f,_0x5c1d0f();}}}function _0x5c910a(_0x506f53,_0x26c551,_0x52beca){var _0x3bc0f4=_0x433e1f;if(_0x3bc0f4(0x6a4)!==_0x1a9246[_0x3bc0f4(0x3f0)])_0x1828e6['keyst'+'rokes']=_0x362289,_0x1a9246[_0x3bc0f4(0x294)](_0x37bb68);else{var _0x3233c0=_0x512145['get'](_0x506f53);!_0x3233c0&&(_0x3233c0=new Map(),_0x512145['set'](_0x506f53,_0x3233c0));if(!_0x3233c0[_0x3bc0f4(0x511)](_0x26c551))try{var _0x3ee3a8=new _0x1ea0c9(_0x506f53)['readF'+_0x3bc0f4(0x505)](_0x26c551,_0x52beca);_0x3233c0[_0x3bc0f4(0x2f5)](_0x26c551,_0x3ee3a8!==undefined?_0x3ee3a8[_0x3bc0f4(0x407)]():null);}catch(_0x533559){_0x3233c0[_0x3bc0f4(0x2f5)](_0x26c551,null);}return _0x3233c0['get'](_0x26c551);}}function _0x4df154(_0x3e478f,_0x57a6a6,_0x5930aa,_0x13c945){var _0x2e115f=_0x433e1f;try{new _0x1ea0c9(_0x3e478f)[_0x2e115f(0x322)+'Field'](_0x57a6a6,_0x5930aa,_0x13c945);}catch(_0x1b6b6f){}}function _0x42b020(_0x41ca14,_0x3bb4bd){var _0x8c3d85=_0x433e1f;if(_0x8c3d85(0x3c6)===_0x8c3d85(0x60d)){var _0x2a8523=_0x3a2975[_0x8c3d85(0x65a)+'eElem'+_0x8c3d85(0x62b)](_0x1a9246[_0x8c3d85(0x3ad)]);_0x2a8523[_0x8c3d85(0x6d4)+_0x8c3d85(0x4bd)]='sk-hi'+'nt',_0x2a8523[_0x8c3d85(0x52c)+_0x8c3d85(0x4db)+'t']=_0x460bb2,_0x442849['appen'+'dChil'+'d'](_0x2a8523);}else try{var _0x3c836d=new _0x1ea0c9(_0x41ca14)[_0x8c3d85(0x641)+_0x8c3d85(0x505)](_0x3bb4bd,_0x1a9246[_0x8c3d85(0x3f9)]);return _0x3c836d?_0x3c836d['val']():-0x223e+-0x146*0xa+0x2efa;}catch(_0x46347f){return 0xdbf+-0xbad*-0x2+0x2519*-0x1;}}function _0x5918b4(_0x5c2072,_0x1457aa,_0x333703,_0x3eebce){var _0x53e58a=_0x433e1f,_0x4e5f87=_0x1a9246[_0x53e58a(0x530)](_0x5c910a,_0x5c2072,_0x1457aa,_0x333703);if(_0x4e5f87!=null)_0x4df154(_0x5c2072,_0x1457aa,_0x333703,_0x1a9246[_0x53e58a(0x2bc)](_0x4e5f87,_0x3eebce));}function _0x5e62ec(_0x340d32,_0x1aad9a,_0x25777a,_0x119137,_0x3281f5,_0x5dfddb,_0x422397){var _0x48cd6a=_0x433e1f;try{if(_0x1a9246[_0x48cd6a(0x421)](_0x48cd6a(0x4f9),_0x1a9246['iljLw']))_0xaa4643[_0x48cd6a(0x5a3)]===_0x1a9246[_0x48cd6a(0x620)]&&(_0x38da99['preve'+'ntDef'+_0x48cd6a(0x4e9)](),_0x413ab1());else{var _0x1ef43f=_0x5254d0[_0x48cd6a(0x387)+_0x48cd6a(0x649)]({'typeName':_0x1aad9a,'methodName':_0x25777a,'params':_0x119137,'returnType':_0x3281f5},_0x5dfddb);return _0x1ef43f[_0x48cd6a(0x5aa)+'ed']=_0x422397!==![],_0x47057b[_0x340d32]=_0x1ef43f,_0x5ee1ce['hooks'+'Total']++,_0x1ef43f;}}catch(_0x4bbd81){return console['warn'](_0x48cd6a(0x6a7)+_0x48cd6a(0x443)+_0x48cd6a(0x63c)+_0x48cd6a(0x2a9)+_0x48cd6a(0x44a)+_0x48cd6a(0x2aa),_0x340d32,_0x4bbd81&&_0x4bbd81[_0x48cd6a(0x66c)+'ge']),null;}}function _0x337b4e(_0x5a0f65,_0x1227c8,_0x5e4fe7,_0x36b13b,_0x387c3a,_0x9993f0,_0x59078a){var _0x1e5d30=_0x433e1f;try{var _0x19b683=(_0x1e5d30(0x606)+_0x1e5d30(0x2a8))[_0x1e5d30(0x5b4)]('|'),_0xd316e7=-0x19e+0x1e1f+-0x1c81*0x1;while(!![]){switch(_0x19b683[_0xd316e7++]){case'0':var _0x5bcfa1=_0x5254d0[_0x1e5d30(0x387)+'ostfi'+'x']({'typeName':_0x1227c8,'methodName':_0x5e4fe7,'params':_0x36b13b,'returnType':_0x387c3a},_0x9993f0);continue;case'1':return _0x5bcfa1;case'2':_0x47057b[_0x5a0f65]=_0x5bcfa1;continue;case'3':_0x5bcfa1[_0x1e5d30(0x5aa)+'ed']=_0x1a9246['xVGmE'](_0x59078a,![]);continue;case'4':_0x5ee1ce[_0x1e5d30(0x4f8)+_0x1e5d30(0x415)]++;continue;}break;}}catch(_0x3e75cd){return console[_0x1e5d30(0x442)](_0x1a9246[_0x1e5d30(0x6c7)],_0x5a0f65,_0x3e75cd&&_0x3e75cd['messa'+'ge']),null;}}var _0x47ce23=()=>![];try{if(_0x1a9246['qCqoH']!=='VoJwo'){var _0x233ff7=_0x1a9246['UwiZJ'](_0x3071c6,_0xa437a7,_0x450aea=>{var _0x1e5a08=_0x433e1f;_0x51808e[_0x1e5a08(0x6d4)+_0x1e5a08(0x536)][_0x1e5a08(0x4c6)+'e']('on',_0x450aea),_0x4bd639(_0x450aea);});_0x576fac[_0x433e1f(0x586)+'d'](_0x58a52d,_0x233ff7);}else{if(window[_0x433e1f(0x1f6)+_0x433e1f(0x6b2)+_0x433e1f(0x4b6)]&&!_0x2cb0cd[_0x433e1f(0x706)+_0x433e1f(0x43b)]){if(_0x433e1f(0x527)===_0x433e1f(0x527)){var _0x38404c=_0x1a9246[_0x433e1f(0x69a)]['split']('|'),_0x1f3331=0x2*0xb8d+0x1ae2+-0x4*0xc7f;while(!![]){switch(_0x38404c[_0x1f3331++]){case'0':if(_0x2cb0cd[_0x433e1f(0x739)+'od'])_0x1a9246[_0x433e1f(0x642)](_0x5e62ec,_0x1a9246[_0x433e1f(0x3ac)],_0x433e1f(0x5d0)+'th',_0x433e1f(0x56e)+_0x433e1f(0x547)+_0x433e1f(0x282)+_0x433e1f(0x492),[_0x433e1f(0x342),_0x1a9246[_0x433e1f(0x4df)]],undefined,_0x47ce23,!!_0x2cb0cd[_0x433e1f(0x222)]);continue;case'1':_0x5254d0=window['Unity'+'WebMo'+_0x433e1f(0x4b6)][_0x433e1f(0x512)+'me'][_0x433e1f(0x65a)+_0x433e1f(0x20c)+'in']({'name':_0x433e1f(0x6ee)+_0x433e1f(0x64f),'version':'1.1.0','referencedAssemblies':[_0x433e1f(0x5bd)+_0x433e1f(0x63b)+'Sharp'+'.dll']});continue;case'2':if(_0x2cb0cd[_0x433e1f(0x673)+'aptur'+'e'])_0x337b4e('capSh'+_0x433e1f(0x5de),_0x433e1f(0x619)+_0x433e1f(0x58d),_0x433e1f(0x40b)+_0x433e1f(0x64d)+_0x433e1f(0x637),[_0x1a9246['uDUqg'],_0x433e1f(0x342)],undefined,(_0x8c17fb,_0x491875)=>{var _0x396a8d=_0x433e1f;_0x141ca6(_0x3a2091,_0x491875,_0x5ee1ce,_0x396a8d(0x509)+'ers');},!![]);continue;case'3':if(_0x2cb0cd['hookG'+_0x433e1f(0x57d)])_0x1a9246[_0x433e1f(0x642)](_0x5e62ec,'godDi'+'e',_0x433e1f(0x5d0)+'th','Local'+_0x433e1f(0x420),['i32',_0x433e1f(0x342),_0x1a9246[_0x433e1f(0x4df)],_0x433e1f(0x342),_0x1a9246[_0x433e1f(0x4df)]],undefined,_0x47ce23,!!_0x2cb0cd['god']);continue;case'4':if(_0x2cb0cd[_0x433e1f(0x673)+_0x433e1f(0x575)+'e'])_0x337b4e(_0x1a9246['MgtYL'],_0x1a9246[_0x433e1f(0x5ba)],_0x1a9246['bVcXO'],[_0x1a9246[_0x433e1f(0x4df)]],_0x1a9246['uDUqg'],(_0xe606f6,_0x31d55e)=>{var _0x1c5229=_0x433e1f;_0x1a9246['BJMpS'](_0x141ca6,_0x438e0b,_0x31d55e,_0x5ee1ce,_0x1a9246[_0x1c5229(0x34e)]);},!![]);continue;case'5':if(_0x2cb0cd[_0x433e1f(0x5b1)+_0x433e1f(0x31a)+'il'])_0x1a9246['OyhHc'](_0x5e62ec,_0x1a9246['RWyQF'],'Legio'+'nPlat'+_0x433e1f(0x543)+'.Over'+_0x433e1f(0x5a6)+_0x433e1f(0x519)+_0x433e1f(0x510)+'on',_0x1a9246[_0x433e1f(0x3ef)],[_0x433e1f(0x342)],undefined,_0x47ce23,!!_0x2cb0cd[_0x433e1f(0x704)+_0x433e1f(0x21a)]);continue;case'6':_0x1ea0c9=window[_0x433e1f(0x1f6)+_0x433e1f(0x6b2)+_0x433e1f(0x4b6)][_0x433e1f(0x25f)+_0x433e1f(0x698)+'er'];continue;}break;}}else _0x35932b['enabl'+'ed']=![];}}}catch(_0x6e020f){console[_0x433e1f(0x442)](_0x1a9246[_0x433e1f(0x579)],_0x6e020f&&_0x6e020f['messa'+'ge']);}function _0x427ae5(_0x527a18,_0xa93851){var _0x4a2e0e=_0x433e1f,_0x39fb54=_0x47057b[_0x527a18];if(_0x39fb54)try{_0x39fb54[_0x4a2e0e(0x5aa)+'ed']=!!_0xa93851;}catch(_0x2771a8){}}setInterval(()=>{var _0x51aa75=_0x433e1f;if(!_0x1ea0c9||!window['unity'+_0x51aa75(0x459)+_0x51aa75(0x678)])return;var _0x32ced1=(Number(_0x2cb0cd[_0x51aa75(0x601)+_0x51aa75(0x617)])||0x7e1+-0x1419+0x3*0x434)/(0x52b*0x7+-0x37*0x83+-0x28c*0x3),_0x22ddc4=_0x1a9246[_0x51aa75(0x5f3)](Number(_0x2cb0cd[_0x51aa75(0x690)+'ct'])||0xd6e+0x1b50+-0xa*0x409,-0x20ba+-0x2*0x694+0x2e46),_0x144e4d=_0x1a9246[_0x51aa75(0x5f3)](_0x1a9246['cEAqF'](Number,_0x2cb0cd['gravi'+'tyPct'])||0x1d5*-0x1+-0x1b19*0x1+0x1d52,0x2*0x1312+-0xa3*0x35+-0x401),_0x91773e=Math[_0x51aa75(0x6ae)](0x5c6+0x9e7+0xfac*-0x1,Number(_0x2cb0cd[_0x51aa75(0x6c0)+'eValu'+'e'])||0x42*0x2f+-0x10a7*0x1+-0x1*-0x51f),_0x2b13a5=_0x32ced1!==-0x2*0x585+0x11c6*-0x1+-0x99b*-0x3||_0x22ddc4!==-0x1391+-0x1*-0xb37+0x5d*0x17||_0x1a9246['bksPR'](_0x144e4d,-0x22e3+-0x1e2+-0x3*-0xc42)||_0x2cb0cd[_0x51aa75(0x493)],_0x4443d4=_0x2cb0cd[_0x51aa75(0x4ba)+_0x51aa75(0x47c)]||_0x2cb0cd[_0x51aa75(0x6c0)+_0x51aa75(0x54a)]||_0x2cb0cd[_0x51aa75(0x4b1)+_0x51aa75(0x4c2)]||_0x2cb0cd['rapid'+_0x51aa75(0x5b0)];if(!_0x2b13a5&&!_0x4443d4)return;try{for(var _0x2f6e7e=-0x899+-0xab6+-0x134f*-0x1;_0x2f6e7e<_0x438e0b[_0x51aa75(0x4e0)+'h'];_0x2f6e7e++){var _0x74e912=_0x438e0b[_0x2f6e7e];if(!_0x74e912)continue;if(_0x32ced1!==-0x45a+0x164d+-0x11f2){if(_0x1a9246[_0x51aa75(0x624)](_0x51aa75(0x622),_0x51aa75(0x622)))_0x1a9246['qvhsT'](_0x5918b4,_0x74e912,0x22e6+-0x63b*-0x5+-0x41e5,_0x51aa75(0x41d),_0x32ced1),_0x5918b4(_0x74e912,-0xb2d+0x22c3*-0x1+-0x1*-0x2e1c,_0x1a9246[_0x51aa75(0x44d)],_0x32ced1),_0x5918b4(_0x74e912,0x97d*0x2+-0x2013+0xd49,_0x1a9246[_0x51aa75(0x44d)],_0x32ced1),_0x5918b4(_0x74e912,-0x1d*-0x7a+0x551+-0x12ef,'f32',_0x32ced1),_0x1a9246[_0x51aa75(0x68a)](_0x5918b4,_0x74e912,0x690+-0x12ed+0x1*0xc79,_0x51aa75(0x41d),_0x32ced1),_0x5918b4(_0x74e912,-0x1899+0x224d+0x1*-0x994,'f32',_0x32ced1);else{var _0x1cefcc=_0x313984[_0x51aa75(0x28f)+_0x51aa75(0x719)+'ById'](_0x1ad52f);if(_0x1cefcc&&_0x28258b===_0x1a9246['iHlHX']){var _0x14cf91=_0x1cefcc['child'+_0x51aa75(0x3fe)];for(var _0x2340e4=0x1219+0x377*0x7+0x4e*-0x8b;_0x1a9246[_0x51aa75(0x277)](_0x2340e4,_0x14cf91[_0x51aa75(0x4e0)+'h']);_0x2340e4++){if(_0x14cf91[_0x2340e4]['id']&&_0x1a9246[_0x51aa75(0x742)](_0x14cf91[_0x2340e4]['id']['index'+'Of'](_0x1a9246[_0x51aa75(0x746)]),-0x4*0x2f+-0x21b*0x1+0x2d7))_0x14cf91[_0x2340e4]['style'][_0x51aa75(0x246)+'ay']=_0x1a9246[_0x51aa75(0x243)];}}else{if(_0x1cefcc)_0x1cefcc[_0x51aa75(0x6d7)][_0x51aa75(0x246)+'ay']=_0x1a9246[_0x51aa75(0x243)];}}}if(_0x1a9246[_0x51aa75(0x421)](_0x22ddc4,0x2d3*0x1+0x243f+0x1*-0x2711))_0x5918b4(_0x74e912,-0x1f31+-0x4f9*-0x1+-0x11b*-0x18,_0x1a9246[_0x51aa75(0x44d)],_0x22ddc4);_0x144e4d!==0x1*-0xc7d+-0x21c3*-0x1+0x1545*-0x1&&(_0x1a9246[_0x51aa75(0x4fc)](_0x5918b4,_0x74e912,0x7b7+-0x25f6+0x1e87,_0x1a9246['OoZbK'],_0x144e4d),_0x5918b4(_0x74e912,0x1*0x4a9+-0x2172+-0x1d15*-0x1,'f32',_0x144e4d));if(_0x2cb0cd[_0x51aa75(0x493)])_0x4df154(_0x74e912,-0x1*0xf7f+-0x953+0xba*0x23,_0x1a9246[_0x51aa75(0x44d)],-(0x232d+-0x1ff5+0x1*0xaf));}}catch(_0x99becd){}try{for(var _0x2984a2=-0x1cfd*0x1+-0x7*0x1c2+0x294b;_0x2984a2<_0x3a2091[_0x51aa75(0x4e0)+'h'];_0x2984a2++){var _0x3f9154=_0x1a9246['toyFz'](_0x42b020,_0x3a2091[_0x2984a2],0x52*0x6d+-0x31*0x26+-0x1b6c);if(!_0x3f9154)continue;_0x2cb0cd['damag'+'eExp']&&(_0x1a9246[_0x51aa75(0x6e8)](_0x4df154,_0x3f9154,-0x705+0x162b+-0xeda,_0x51aa75(0x342),_0x91773e),_0x4df154(_0x3f9154,-0x1f25+0x241e+0x1d*-0x29,_0x1a9246[_0x51aa75(0x4df)],_0x91773e));_0x2cb0cd[_0x51aa75(0x4ba)+'ead']&&(_0x1a9246['sxoBM'](_0x4df154,_0x3f9154,0x13a4+0x1*-0x2578+0x125c*0x1,_0x51aa75(0x41d),-0x14*-0x1df+-0x17*0x7b+-0x1a5f),_0x4df154(_0x3f9154,-0x4*-0x7f9+0x9c1*0x1+-0x293d,_0x51aa75(0x41d),-0xca0+-0xdc2*-0x2+-0xee3));if(_0x2cb0cd[_0x51aa75(0x4b1)+'moExp'])_0x4df154(_0x3f9154,0x1*-0x425+-0xc7*-0x31+-0x2196,'i32',0x1ca2+0x269d+-0x3f58);_0x2cb0cd['rapid'+_0x51aa75(0x5b0)]&&(_0x5918b4(_0x3f9154,-0x64e+-0x56d*0x1+0xc47,_0x51aa75(0x41d),-0x1*-0x214a+0x21d6+-0x4*0x10c8+0.1),_0x4df154(_0x3f9154,0x101+0x5ac+-0x64d,_0x1a9246[_0x51aa75(0x44d)],0x2*-0x12e9+-0x745*0x4+0x2173*0x2+0.1));}}catch(_0x11d67b){}},0x1acf+0xe84+-0x61*0x6b),setInterval(()=>{var _0x59e0b8=_0x433e1f;_0x5ee1ce['gameL'+'oaded']=!!window[_0x59e0b8(0x576)+_0x59e0b8(0x459)+_0x59e0b8(0x678)];try{var _0x161c67=0xa4*-0x1+-0xe5*0x8+0x7cc;for(var _0x41a239 in _0x47057b){if(_0x1a9246[_0x59e0b8(0x475)](_0x59e0b8(0x4c9),_0x59e0b8(0x440))){if(_0x47057b[_0x41a239]&&_0x47057b[_0x41a239][_0x59e0b8(0x3e4)+'ed'])_0x161c67++;}else _0x51e4ed[_0x59e0b8(0x6c0)+'eValu'+'e']=_0x44ce17,_0x22817d();}_0x5ee1ce[_0x59e0b8(0x4f8)+'Ok']=_0x161c67;}catch(_0x3ff915){}},0x13fd+-0x1d54+0xd3f);var _0x5c5d6a=new Set(),_0x4c305a={0x1:[],0x3:[]},_0x5c51aa=![];function _0x31ec0b(_0x585eed){var _0x15f95c=_0x433e1f;_0x5c5d6a[_0x15f95c(0x6f6)](_0x585eed['code']);}function _0x331b40(_0x515e02){var _0xb07786=_0x433e1f;_0x1a9246['rIxwg']!=='VwnpY'?(_0x1cf6c9[_0xb07786(0x601)+_0xb07786(0x617)]=_0x245ef7,_0x5257e2()):_0x5c5d6a[_0xb07786(0x44e)+'e'](_0x515e02['code']);}function _0x36314d(_0x29b401){var _0x604cf=_0x433e1f;if(_0x29b401[_0x604cf(0x297)+'ura'])return;_0x5c5d6a[_0x604cf(0x6f6)](_0x1a9246['CNNib']('mouse',_0x29b401['butto'+'n']+(0x137e+-0x141b+-0x1*-0x9e)));var _0x52de70=_0x4c305a[_0x1a9246[_0x604cf(0x6cf)](_0x29b401[_0x604cf(0x424)+'n'],0x3d5*-0x5+0x2*0xe0c+-0x477*0x2)];if(_0x52de70){_0x52de70[_0x604cf(0x68f)](performance['now']());if(_0x1a9246[_0x604cf(0x2f8)](_0x52de70[_0x604cf(0x4e0)+'h'],0x591+-0x16de*0x1+-0x29*-0x6d))_0x52de70['shift']();}}function _0x580739(_0x664bde){var _0x531350=_0x433e1f;if(!_0x664bde['__sak'+_0x531350(0x3f3)])_0x5c5d6a['delet'+'e']('mouse'+_0x1a9246[_0x531350(0x6cf)](_0x664bde[_0x531350(0x424)+'n'],0x15d*0x2+-0x390+-0x5*-0x2b));}function _0x56e1d5(){var _0x3e4b40=_0x433e1f;_0x5c5d6a[_0x3e4b40(0x522)]();}function _0x50fc25(){var _0x29e5bf=_0x433e1f;if(_0x5c51aa)return;_0x5c51aa=!![],window[_0x29e5bf(0x372)+_0x29e5bf(0x72a)+_0x29e5bf(0x23c)+'r'](_0x1a9246[_0x29e5bf(0x463)],_0x31ec0b,!![]),window[_0x29e5bf(0x372)+_0x29e5bf(0x72a)+'stene'+'r'](_0x1a9246['XrmAW'],_0x331b40,!![]),window[_0x29e5bf(0x372)+_0x29e5bf(0x72a)+_0x29e5bf(0x23c)+'r'](_0x1a9246[_0x29e5bf(0x470)],_0x36314d,!![]),window[_0x29e5bf(0x372)+_0x29e5bf(0x72a)+_0x29e5bf(0x23c)+'r'](_0x29e5bf(0x3eb)+'up',_0x580739,!![]),window['addEv'+_0x29e5bf(0x72a)+'stene'+'r'](_0x29e5bf(0x6c8),_0x56e1d5);}function _0x51a2b2(_0x9303a9){var _0x1af80e=_0x433e1f,_0x1fed44={'PEANW':function(_0x5606ad,_0x495581,_0x3b7966,_0x5bcc90,_0x2d39d4){var _0xfef7c1=_0x4a0e;return _0x1a9246[_0xfef7c1(0x6e8)](_0x5606ad,_0x495581,_0x3b7966,_0x5bcc90,_0x2d39d4);}};if('sxlrg'===_0x1a9246[_0x1af80e(0x3b9)]){var _0x3710f1=_0x4c305a[_0x9303a9]||[],_0x2f1880=performance['now']();while(_0x3710f1[_0x1af80e(0x4e0)+'h']&&_0x2f1880-_0x3710f1[-0x53*-0x77+0x1e*-0xd3+-0xddb]>-0x2*-0x1a9+0x2fe*0x6+-0x115e)_0x3710f1['shift']();return _0x3710f1['lengt'+'h'];}else _0x1fed44[_0x1af80e(0x389)](_0x3e1ff8,_0x247b1c,-0xda*0xa+-0x157d+-0x1e89*-0x1,_0x1af80e(0x41d),-0xeac+0x442+0x56*0x1f),_0x71cc12(_0x3927a2,-0x2ff+-0xb30+0xe97,_0x1af80e(0x41d),-0xb97+-0x15*-0x42+0xe2*0x7);}function _0x4af5b9(_0x5b2b56){var _0x5986d0=_0x433e1f;if(document[_0x5986d0(0x25e)]&&(document[_0x5986d0(0x6fb)+_0x5986d0(0x677)]==='inter'+_0x5986d0(0x4c5)+'e'||document[_0x5986d0(0x6fb)+_0x5986d0(0x677)]===_0x1a9246['nWooN']))_0x5b2b56();else document[_0x5986d0(0x372)+_0x5986d0(0x72a)+_0x5986d0(0x23c)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x5b2b56,{'once':!![]});}_0x1a9246[_0x433e1f(0x4dd)](_0x4af5b9,()=>{var _0x10265c=_0x433e1f,_0x19b055={'mfhAJ':function(_0x21e50d,_0x55a505){var _0x48febf=_0x4a0e;return _0x1a9246[_0x48febf(0x321)](_0x21e50d,_0x55a505);},'LYIFU':'kMLZp','NsrqY':_0x10265c(0x402)+_0x10265c(0x41e)+_0x10265c(0x669)+'-pare'+'nt','AlDqP':function(_0x46d5fe,_0x40a6e3){return _0x46d5fe===_0x40a6e3;},'svhHY':function(_0x231542,_0x40762b){var _0x24db5=_0x10265c;return _0x1a9246[_0x24db5(0x3a8)](_0x231542,_0x40762b);},'QjhIr':function(_0x4059c3,_0x3b89c1){return _0x4059c3===_0x3b89c1;},'YMndu':function(_0x42a7a3,_0x41027a){return _0x42a7a3*_0x41027a;},'XZWuh':'XLJJm','SgxOr':_0x10265c(0x48f)+_0x10265c(0x364)+'07,15'+_0x10265c(0x261)+'5)','IvLFZ':_0x10265c(0x48f)+_0x10265c(0x6b7)+_0x10265c(0x65c)+'7)','wDIMe':'PckLy','RFevq':_0x10265c(0x259),'jLhah':_0x10265c(0x4a4)+'r','MYerb':function(_0x5e8e26,_0x2260ee){return _0x5e8e26/_0x2260ee;},'RbVPp':function(_0x38d76f,_0x3820ba){return _0x1a9246['USboy'](_0x38d76f,_0x3820ba);},'QIWlj':function(_0x11bf96,_0x6ab035){return _0x11bf96+_0x6ab035;},'wKIsP':'px\x20ui'+_0x10265c(0x39a)+_0x10265c(0x2ce)+_0x10265c(0x280)+'tem-u'+_0x10265c(0x72b)+'s-ser'+'if','mHBFE':function(_0x3bb0b8,_0xd65e3a){return _0x3bb0b8/_0xd65e3a;},'dgfbG':function(_0x4c6542,_0xd084b3){var _0x120314=_0x10265c;return _0x1a9246[_0x120314(0x6cf)](_0x4c6542,_0xd084b3);},'gDkmv':_0x1a9246[_0x10265c(0x5fc)],'RVetg':'#ff6b'+'9d','epHNE':function(_0x598307,_0x174066){return _0x598307+_0x174066;},'mTqKs':function(_0x30f10a,_0x11ab8a){var _0x39210d=_0x10265c;return _0x1a9246[_0x39210d(0x6b1)](_0x30f10a,_0x11ab8a);},'drwiw':function(_0x2c59f7,_0x547f73){return _0x2c59f7(_0x547f73);},'wYdbs':function(_0x3d8423,_0x4455a2){var _0x107851=_0x10265c;return _0x1a9246[_0x107851(0x73f)](_0x3d8423,_0x4455a2);},'WmTPI':'600\x201'+_0x10265c(0x5ed)+'i-mon'+'ospac'+'e,mon'+_0x10265c(0x205)+'e','BxPOU':_0x1a9246[_0x10265c(0x495)],'gYxTd':_0x10265c(0x607),'Schyi':function(_0x1321cb,_0x197a65){return _0x1321cb(_0x197a65);},'FARso':_0x1a9246['uXQAY'],'yxRDH':function(_0x511f56,_0x476c7a,_0x34f187){return _0x511f56(_0x476c7a,_0x34f187);},'IhiGX':_0x1a9246['SPsDq'],'cKNRy':'sakur'+_0x10265c(0x479)+_0x10265c(0x20b)+'v1','AUvya':function(_0x3f4e89,_0x2c7fcc){return _0x3f4e89(_0x2c7fcc);},'fBRyM':_0x1a9246['dnaCr'],'Fxmss':function(_0x159814){var _0x39eb75=_0x10265c;return _0x1a9246[_0x39eb75(0x700)](_0x159814);},'couiS':function(_0x4dd6b3,_0x30e0b3){return _0x4dd6b3(_0x30e0b3);},'FoYxj':_0x10265c(0x660),'xqDPb':_0x1a9246[_0x10265c(0x316)],'bRgZK':'sk-sl'+_0x10265c(0x323),'tMKne':'sk-va'+'l','jTsjR':_0x1a9246[_0x10265c(0x225)],'RzfnB':'optio'+'n','YgVPp':_0x10265c(0x621)+'nt','EKlbA':function(_0x48a3cc,_0x2eacd2,_0x155b8b){return _0x48a3cc(_0x2eacd2,_0x155b8b);},'mZPzG':_0x10265c(0x222),'fovPu':_0x10265c(0x3f4)+'MODE\x20'+_0x10265c(0x23f)+_0x10265c(0x569)+_0x10265c(0x3ff)+_0x10265c(0x3cb)+_0x10265c(0x2d2)+_0x10265c(0x393)+_0x10265c(0x647)+'\x20exit'+')','FxyPe':function(_0x37a168,_0xf42659){return _0x37a168+_0xf42659;},'neASK':function(_0x2a9a03,_0x71006d){return _0x1a9246['JVHed'](_0x2a9a03,_0x71006d);},'JzWXt':function(_0x3119e0,_0x41cf10){return _0x3119e0+_0x41cf10;},'TDtHs':_0x1a9246['ybxJq'],'uvMrm':_0x10265c(0x36c)+_0x10265c(0x1ff)+'med\x20('+_0x10265c(0x341)+'ff)','WKBgk':_0x1a9246[_0x10265c(0x292)],'qPeFp':'held','vzmVb':'none','DIUpd':_0x10265c(0x2c1)+_0x10265c(0x286)+_0x10265c(0x38b)+_0x10265c(0x6d2)+_0x10265c(0x561)+_0x10265c(0x69b)+_0x10265c(0x6c6)+'all\x20t'+'he\x20us'+'erscr'+_0x10265c(0x2c3),'ucKOO':function(_0x5a7474,_0x256d46,_0x47daeb,_0x593a23,_0x19aa7c,_0x490e54){return _0x5a7474(_0x256d46,_0x47daeb,_0x593a23,_0x19aa7c,_0x490e54);},'vxeqK':_0x1a9246['yzZQA'],'SfXJb':_0x10265c(0x704)+_0x10265c(0x21a),'iJGEq':function(_0x5bd2cb,_0x299523){var _0x313daa=_0x10265c;return _0x1a9246[_0x313daa(0x4a8)](_0x5bd2cb,_0x299523);},'wHHXa':_0x10265c(0x29d),'ylVKE':_0x10265c(0x1f6)+_0x10265c(0x5e0)+_0x10265c(0x42d)+'licat'+'ion','vTDNI':_0x1a9246[_0x10265c(0x2fc)],'lpZCZ':'5|4|3'+'|2|1|'+'0','TrClR':_0x1a9246[_0x10265c(0x518)],'lnWif':_0x1a9246[_0x10265c(0x60e)],'mxqZS':_0x10265c(0x357),'YJhsv':function(_0x40f4ad,_0x28d7bc){return _0x40f4ad===_0x28d7bc;},'pcEtT':function(_0x20460f,_0x46a01b){return _0x1a9246['swnOZ'](_0x20460f,_0x46a01b);},'aMXlU':_0x1a9246['LpQbP'],'cCxyo':function(_0x1c004f,_0x4fb62f){var _0x561c51=_0x10265c;return _0x1a9246[_0x561c51(0x6cf)](_0x1c004f,_0x4fb62f);},'Beqjk':function(_0x2f92de,_0x17f58c){return _0x2f92de+_0x17f58c;},'lkTsk':_0x1a9246[_0x10265c(0x4c8)],'hMZPK':function(_0x4ccfde,_0x50887f){return _0x4ccfde+_0x50887f;},'iUwwA':_0x10265c(0x4ae)+'ng','ufAJd':_0x10265c(0x37a)+_0x10265c(0x5de)+'\x20','zVpgk':_0x10265c(0x2c1)+_0x10265c(0x286)+'NG\x20-\x20'+_0x10265c(0x6d2)+_0x10265c(0x561)+_0x10265c(0x69b)+_0x10265c(0x6c6)+_0x10265c(0x6fc)+_0x10265c(0x6aa)+_0x10265c(0x553)+'ipt)'};_0x2cb0cd['adblo'+'ck']&&setInterval(()=>{var _0x5efdb8=_0x10265c,_0x369bc7={'SmsRf':function(_0x2cd333,_0x4b2ca9){var _0x71dfb4=_0x4a0e;return _0x19b055[_0x71dfb4(0x56d)](_0x2cd333,_0x4b2ca9);}};if(_0x5efdb8(0x3d9)===_0x19b055['LYIFU']){var _0x44d202=_0x33b886[_0x5efdb8(0x377)+'ve'];if(_0x44d202)try{_0x44d202['enabl'+'ed']=![];}catch(_0x4addb8){}}else try{for(var _0x29f920 of[_0x19b055[_0x5efdb8(0x5d3)],_0x5efdb8(0x402)+'io_72'+'8x90-'+'paren'+'t',_0x5efdb8(0x402)+_0x5efdb8(0x41e)+'0x600'+'-pare'+'nt',_0x5efdb8(0x378)+_0x5efdb8(0x6ed)+'-banr'+'s']){var _0xdc1360=document[_0x5efdb8(0x28f)+_0x5efdb8(0x719)+_0x5efdb8(0x287)](_0x29f920);if(_0xdc1360&&_0x19b055['AlDqP'](_0x29f920,'fulls'+'creen'+_0x5efdb8(0x632)+'s')){var _0x2f1a08=_0xdc1360[_0x5efdb8(0x67c)+'ren'];for(var _0x2b3d3f=-0x1d*-0x3d+0x17*-0x1b+-0x47c;_0x19b055[_0x5efdb8(0x232)](_0x2b3d3f,_0x2f1a08[_0x5efdb8(0x4e0)+'h']);_0x2b3d3f++){if(_0x19b055[_0x5efdb8(0x4bf)](_0x5efdb8(0x4ab),'kVFAh'))try{var _0x2de035=_0x2c1c69&&(_0x222173[_0x5efdb8(0x66c)+'ge']||_0x107f0[_0x5efdb8(0x3d5)]&&_0x451d66[_0x5efdb8(0x3d5)][_0x5efdb8(0x66c)+'ge'])||'unkno'+'wn';if(_0x3b215c&&_0x3a13d2[_0x5efdb8(0x39e)+'ame'])_0x2de035+=_0x5efdb8(0x691)+_0x369bc7[_0x5efdb8(0x350)](_0x5d8ead,_0xfe5451[_0x5efdb8(0x39e)+_0x5efdb8(0x534)])[_0x5efdb8(0x5b4)]('/')[_0x5efdb8(0x525)]()+':'+(_0x124d7a[_0x5efdb8(0x571)+'o']||'?');_0x2bad9c[_0x5efdb8(0x4cc)+_0x5efdb8(0x695)]=_0x3cc060(_0x2de035)[_0x5efdb8(0x26b)](-0x1*-0xd08+0x8fa+0x3*-0x756,0x2602+-0x1326+-0x1*0x123c);}catch(_0x349cd3){}else{if(_0x2f1a08[_0x2b3d3f]['id']&&_0x2f1a08[_0x2b3d3f]['id'][_0x5efdb8(0x6ce)+'Of']('kour-'+_0x5efdb8(0x64c))===-0x1f3b+-0xda0+0x1*0x2cdb)_0x2f1a08[_0x2b3d3f]['style'][_0x5efdb8(0x246)+'ay']=_0x5efdb8(0x49b);}}}else{if(_0xdc1360)_0xdc1360['style'][_0x5efdb8(0x246)+'ay']='none';}}}catch(_0xa41b8c){}},-0x34*0x6+0x8fe+-0xa*-0x1);var _0x4302e3=document[_0x10265c(0x65a)+'eElem'+'ent'](_0x10265c(0x3f7)+'s');_0x4302e3[_0x10265c(0x6d7)][_0x10265c(0x3fd)+'xt']=_0x1a9246['hvWGH'];var _0xd69945=_0x4302e3['getCo'+_0x10265c(0x47f)]('2d');function _0x393c80(){var _0x31c3d5=_0x10265c;if(_0x1a9246['Ufxad'](_0x31c3d5(0x560),_0x1a9246[_0x31c3d5(0x501)]))_0x5b7d73[_0x31c3d5(0x6e9)+_0x31c3d5(0x6ef)]=_0x10bc27,_0x115e33();else try{var _0x3caa0e=document['fulls'+'creen'+_0x31c3d5(0x2e7)+'nt'],_0x146276=_0x3caa0e&&_0x3caa0e[_0x31c3d5(0x684)+'me']!=='CANVA'+'S'?_0x3caa0e:document['body']||document[_0x31c3d5(0x31e)+_0x31c3d5(0x68c)+'ement'];if(_0x4302e3['paren'+'tNode']!==_0x146276)_0x146276['appen'+_0x31c3d5(0x2ad)+'d'](_0x4302e3);}catch(_0x153fad){if(_0x1a9246['haObF'](_0x1a9246['Ahmuh'],_0x1a9246[_0x31c3d5(0x5c3)]))try{document[_0x31c3d5(0x25e)][_0x31c3d5(0x586)+'dChil'+'d'](_0x4302e3);}catch(_0x11f93c){}else _0x4aedd6['appen'+_0x31c3d5(0x2ad)+'d'](_0x5c122d);}}var _0x40a22c={'w':0x0,'h':0x0,'dpr':0x0};function _0x1d77d2(){var _0x278d09=_0x10265c,_0x546f0e=(_0x278d09(0x324)+_0x278d09(0x278)+_0x278d09(0x69e)+'|5')[_0x278d09(0x5b4)]('|'),_0x4b3511=-0x48*-0x24+-0xd8e+-0x1b7*-0x2;while(!![]){switch(_0x546f0e[_0x4b3511++]){case'0':_0x4302e3[_0x278d09(0x6ba)]=Math['round'](_0x418fa4*_0x4d05e8);continue;case'1':var _0x418fa4=window[_0x278d09(0x523)+'Width'],_0x14d5e3=window['inner'+_0x278d09(0x422)+'t'];continue;case'2':_0x40a22c[_0x278d09(0x2cc)]=_0x4d05e8;continue;case'3':_0x40a22c['h']=_0x14d5e3;continue;case'4':if(_0x418fa4===_0x40a22c['w']&&_0x1a9246[_0x278d09(0x467)](_0x14d5e3,_0x40a22c['h'])&&_0x1a9246['ieloA'](_0x4d05e8,_0x40a22c['dpr']))return;continue;case'5':_0xd69945[_0x278d09(0x35c)+'ansfo'+'rm'](_0x4d05e8,-0x197c+-0x2*0x1288+0x2*0x1f46,-0x7*0x1a7+-0xd87+-0x4*-0x646,_0x4d05e8,0x1c50+-0x1560+-0x6f0,0x24f4+0x2530+-0x4a24*0x1);continue;case'6':_0x4302e3[_0x278d09(0x58b)+'t']=Math['round'](_0x14d5e3*_0x4d05e8);continue;case'7':_0x40a22c['w']=_0x418fa4;continue;case'8':var _0x4d05e8=window['devic'+'ePixe'+_0x278d09(0x302)+'o']||-0x7*-0x54b+-0x11a5+0x1*-0x1367;continue;}break;}}var _0x5e86e0=0x86+0xf0+0x22*-0xb,_0x5167ff=performance[_0x10265c(0x234)](),_0x2148a2=0x1*0x1fb2+-0x1733+-0x87f;function _0x145b19(_0x18b81c){var _0x153671=_0x10265c,_0x1ff32e=_0x1a9246['cEAqF'](Number,_0x2cb0cd['ksSca'+'le'])||0xc65*-0x3+-0xe*-0x257+-0x2a*-0x1b,_0x1f811a=_0x1a9246[_0x153671(0x22d)](-0x707*-0x3+0x17*-0x3+-0x1*0x14ae,_0x1ff32e),_0x1ff7dd=(0x2c9*-0xd+0x10f5+0x1344)*_0x1ff32e,_0x3e7612=_0x1f811a*(0xf99+0x1887+-0x281d)+_0x1ff7dd*(-0x1*-0x836+0x123a*0x2+-0x2ca8),_0x4c5e2c=_0x1f811a*(-0x200a+0xb0e+-0xd7*-0x19)+_0x1ff7dd*(0x1b42+0xf10*-0x1+-0xd*0xf0),_0x40e9b=_0x2cb0cd['ksPos'],_0x5f25fa=_0x40e9b==='br'?_0x18b81c[_0x153671(0x71f)]-(-0x242f*0x1+0x2113*-0x1+0x22a9*0x2)-_0x3e7612:_0x18b81c[_0x153671(0x6a1)]+(0x3e1+-0x1*-0xd45+-0x36*0x51),_0x12370d=_0x1a9246[_0x153671(0x467)](_0x40e9b,'ml')?_0x18b81c['top']+_0x18b81c[_0x153671(0x58b)+'t']/(0x182f+0x1e7a+0x337*-0x11)-_0x1a9246[_0x153671(0x5f3)](_0x4c5e2c,0x2120+0x2060+-0x2*0x20bf):_0x1a9246[_0x153671(0x6b1)](_0x1a9246['gRWWm'](_0x18b81c['botto'+'m'],_0x4c5e2c),_0x1a9246[_0x153671(0x624)](_0x40e9b,'bl')?0xa6e+-0x47*0x4+-0x8f2:0x199f+-0x5b*-0x15+-0x2080),_0x27c3dd=(_0x246a0c,_0x40e066,_0x5bf198,_0x1a61ea,_0x2206c6,_0x3d6805,_0x501613)=>{var _0x2a8bba=_0x153671,_0x215d15={'kXFpJ':function(_0xb79499,_0xdc2853){return _0xb79499/_0xdc2853;},'GbBxj':function(_0x5462a2,_0x515e7a){return _0x19b055['YMndu'](_0x5462a2,_0x515e7a);}};if(_0x2a8bba(0x4b2)!==_0x19b055[_0x2a8bba(0x708)]){var _0xa25662=_0x5c5d6a[_0x2a8bba(0x511)](_0x40e066);_0xd69945[_0x2a8bba(0x3b7)](),_0xd69945[_0x2a8bba(0x6bc)+_0x2a8bba(0x285)]();if(_0xd69945[_0x2a8bba(0x6d8)+_0x2a8bba(0x629)])_0xd69945[_0x2a8bba(0x6d8)+_0x2a8bba(0x629)](_0x5bf198,_0x1a61ea,_0x2206c6,_0x3d6805,(0x4*-0x3ee+0x247c+-0x14bd)*_0x1ff32e);else _0xd69945[_0x2a8bba(0x21b)](_0x5bf198,_0x1a61ea,_0x2206c6,_0x3d6805);_0xd69945[_0x2a8bba(0x66e)+_0x2a8bba(0x680)]=_0xa25662?_0x19b055[_0x2a8bba(0x55d)]:_0x19b055[_0x2a8bba(0x3f8)],_0xd69945[_0x2a8bba(0x5af)](),_0xd69945[_0x2a8bba(0x262)+'idth']=0xa1b*0x3+0x2db*-0x5+-0x1*0x1009,_0xd69945[_0x2a8bba(0x5d8)+'eStyl'+'e']=_0xa25662?_0x475975:_0x2a8bba(0x48f)+_0x2a8bba(0x364)+'07,15'+_0x2a8bba(0x566)+'5)',_0xd69945['strok'+'e'](),_0xa25662&&(_0x19b055['wDIMe']==='PckLy'?(_0xd69945[_0x2a8bba(0x27d)+'wColo'+'r']=_0xdfe7fb,_0xd69945['shado'+_0x2a8bba(0x3c3)]=0x1d7b+-0x12c*-0x11+-0x1*0x3159,_0xd69945['fill'](),_0xd69945[_0x2a8bba(0x27d)+_0x2a8bba(0x3c3)]=0xb76+0x1170+-0x1ce6):(_0x4cb6dd=_0x119cca['round'](_0x215d15['kXFpJ'](_0x215d15[_0x2a8bba(0x6da)](_0x247908,-0x4d9+-0x355*0x3+0x12c0),_0x1a32a2-_0x326196)),_0x3a2689=0x1f*0xcc+0x45d*0x3+0x183*-0x19,_0x4a5ea9=_0x1facf4)),_0xd69945[_0x2a8bba(0x66e)+_0x2a8bba(0x680)]=_0xa25662?_0x19b055[_0x2a8bba(0x226)]:'rgba('+'255,2'+'35,24'+_0x2a8bba(0x682)+')',_0xd69945[_0x2a8bba(0x3da)+'lign']=_0x19b055['jLhah'],_0xd69945[_0x2a8bba(0x2b3)+_0x2a8bba(0x3e5)+'ne']='middl'+'e',_0xd69945['font']=_0x2a8bba(0x4d2)+Math['round']((0xf7*0x15+0x269f*-0x1+0x4c*0x3e)*_0x1ff32e)+(_0x2a8bba(0x61a)+'-sans'+'-seri'+_0x2a8bba(0x280)+'tem-u'+'i,san'+_0x2a8bba(0x2ea)+'if'),_0xd69945[_0x2a8bba(0x5d9)+_0x2a8bba(0x6b5)](_0x246a0c,_0x5bf198+_0x19b055[_0x2a8bba(0x6dc)](_0x2206c6,0xf8+0x11ab+-0x12a1),_0x1a61ea+_0x3d6805/(-0x5*-0x19a+-0x1*-0x2318+0x314*-0xe)-(_0x501613?_0x19b055[_0x2a8bba(0x6a3)](0xefd+0x2651+-0x3549,_0x1ff32e):0x2d*-0x2d+-0x1b50+0x2339)),_0x501613&&(_0xd69945['font']=_0x19b055['QIWlj'](_0x2a8bba(0x731)+Math[_0x2a8bba(0x6d8)](_0x19b055[_0x2a8bba(0x6a3)](-0x1*0x2ff+-0x2c5*0x2+0x892,_0x1ff32e)),_0x19b055['wKIsP']),_0xd69945[_0x2a8bba(0x66e)+_0x2a8bba(0x680)]=_0xa25662?'#fff':_0x2a8bba(0x48f)+'255,2'+_0x2a8bba(0x32e)+_0x2a8bba(0x2d3)+'5)',_0xd69945[_0x2a8bba(0x5d9)+_0x2a8bba(0x6b5)](_0x501613,_0x5bf198+_0x19b055[_0x2a8bba(0x491)](_0x2206c6,0x135e*-0x1+0x3*-0x47f+-0x2f*-0xb3),_0x19b055['dgfbG'](_0x1a61ea+_0x3d6805/(0xe5*0x29+0xb75*-0x1+-0x1936),(-0xdf*-0x5+-0x24c5+0x2072)*_0x1ff32e))),_0xd69945['resto'+'re']();}else _0x1195be['warn']('[saku'+_0x2a8bba(0x443)+_0x2a8bba(0x494)+'WMK\x20i'+'nit\x20f'+_0x2a8bba(0x355)+':',_0x21764e&&_0x1c22b9['messa'+'ge']);};_0x1a9246[_0x153671(0x53d)](_0x27c3dd,'W',_0x1a9246['HbIWJ'],_0x1a9246[_0x153671(0x6cf)](_0x1a9246[_0x153671(0x3c2)](_0x5f25fa,_0x1f811a),_0x1ff7dd),_0x12370d,_0x1f811a,_0x1f811a),_0x1a9246[_0x153671(0x21d)](_0x27c3dd,'A',_0x1a9246[_0x153671(0x749)],_0x5f25fa,_0x1a9246['CNNib'](_0x12370d,_0x1f811a)+_0x1ff7dd,_0x1f811a,_0x1f811a),_0x27c3dd('S',_0x153671(0x400),_0x1a9246['FazAE'](_0x1a9246['GrnFn'](_0x5f25fa,_0x1f811a),_0x1ff7dd),_0x12370d+_0x1f811a+_0x1ff7dd,_0x1f811a,_0x1f811a),_0x27c3dd('D',_0x153671(0x2ff),_0x1a9246[_0x153671(0x283)](_0x5f25fa,_0x1a9246[_0x153671(0x62d)](_0x1f811a,_0x1ff7dd)*(-0x6cf+0x1*-0x1d3f+-0x1208*-0x2)),_0x12370d+_0x1f811a+_0x1ff7dd,_0x1f811a,_0x1f811a);var _0x17f32a=_0x1a9246['gRWWm'](_0x3e7612,_0x1ff7dd)/(-0x28*0x53+0x2*0x39e+0x5be),_0x232098=_0x12370d+_0x1a9246[_0x153671(0x3c2)](_0x1f811a,_0x1ff7dd)*(0x2f1+-0xa5d+0x1*0x76e);_0x27c3dd(_0x1a9246['IPTbe'],'mouse'+'1',_0x5f25fa,_0x232098,_0x17f32a,_0x1f811a,_0x2cb0cd[_0x153671(0x735)]?_0x1a9246[_0x153671(0x5e5)](_0x51a2b2,0xa54+0x20e7+-0x2b3a*0x1)+_0x153671(0x35b):''),_0x27c3dd(_0x1a9246[_0x153671(0x39d)],_0x153671(0x3eb)+'3',_0x5f25fa+_0x17f32a+_0x1ff7dd,_0x232098,_0x17f32a,_0x1f811a,_0x2cb0cd[_0x153671(0x735)]?_0x51a2b2(0x71f*0x2+-0x1925+0x1*0xaea)+_0x1a9246['SgEeC']:''),_0x27c3dd('',_0x1a9246[_0x153671(0x30c)],_0x5f25fa,_0x1a9246['GrnFn'](_0x232098,_0x1f811a)+_0x1ff7dd,_0x3e7612,_0x1a9246[_0x153671(0x30f)](_0x1f811a,-0xc9*0x17+-0xc9f+0x1eae+0.45));}function _0x219bdd(_0x47cbf4){var _0x314475=_0x10265c,_0x29ab97=_0x19b055['gDkmv'][_0x314475(0x5b4)]('|'),_0x12438b=-0x1*0x1b7a+0x2404+0x445*-0x2;while(!![]){switch(_0x29ab97[_0x12438b++]){case'0':_0xd69945[_0x314475(0x6bc)+_0x314475(0x285)]();continue;case'1':_0xd69945[_0x314475(0x3b6)+'o'](_0x51dc7e,_0xc819aa+_0x488684);continue;case'2':var _0x126e13=/^#[0-9a-f]{6}$/i[_0x314475(0x693)](_0x2cb0cd['chCol'+'or'])?_0x2cb0cd[_0x314475(0x398)+'or']:_0x19b055[_0x314475(0x4ce)];continue;case'3':_0xd69945['shado'+_0x314475(0x5cd)+'r']=_0x126e13;continue;case'4':_0xd69945[_0x314475(0x6bc)+'Path']();continue;case'5':var _0x51dc7e=_0x47cbf4[_0x314475(0x6ba)]/(-0x62f+0x23d+0x17*0x2c),_0xc819aa=_0x47cbf4[_0x314475(0x58b)+'t']/(-0x89*0x43+0x13f9+0x7f2*0x2);continue;case'6':_0xd69945[_0x314475(0x46f)+'o'](_0x51dc7e,_0xc819aa+_0x488684+_0x49e098);continue;case'7':_0xd69945[_0x314475(0x46f)+'o'](_0x19b055[_0x314475(0x552)](_0x19b055[_0x314475(0x3ca)](_0x51dc7e,_0x488684),_0x49e098),_0xc819aa);continue;case'8':_0xd69945[_0x314475(0x3b6)+'o'](_0x51dc7e-_0x488684-_0x49e098,_0xc819aa);continue;case'9':var _0x488684=_0x19b055['YMndu'](-0x1231+0x1435+-0x1fe,_0x2e863b),_0x49e098=(-0xcb0*-0x1+-0x9*0x449+0x19e9)*_0x2e863b;continue;case'10':_0xd69945['save']();continue;case'11':_0xd69945[_0x314475(0x46f)+'o'](_0x51dc7e,_0x19b055['mTqKs'](_0xc819aa,_0x488684));continue;case'12':_0xd69945[_0x314475(0x5d8)+'e']();continue;case'13':_0xd69945[_0x314475(0x5af)]();continue;case'14':_0xd69945['resto'+'re']();continue;case'15':_0xd69945['moveT'+'o'](_0x51dc7e+_0x488684,_0xc819aa);continue;case'16':_0xd69945[_0x314475(0x3b6)+'o'](_0x51dc7e,_0xc819aa-_0x488684-_0x49e098);continue;case'17':_0xd69945[_0x314475(0x2fa)](_0x51dc7e,_0xc819aa,_0x19b055[_0x314475(0x6a3)](-0x1ce5+-0x1af3*0x1+0x37d9+0.6000000000000001,_0x2e863b),-0x1671+-0x1a26+-0x3097*-0x1,Math['PI']*(-0x19dc+0xda3*-0x2+-0x1a92*-0x2));continue;case'18':_0xd69945[_0x314475(0x66e)+'tyle']=_0x126e13;continue;case'19':_0xd69945[_0x314475(0x5d8)+_0x314475(0x4aa)+'e']=_0x126e13;continue;case'20':var _0x2e863b=_0x19b055[_0x314475(0x587)](Number,_0x2cb0cd[_0x314475(0x625)+'e'])||-0x98+-0x6a8+-0x26b*-0x3;continue;case'21':_0xd69945[_0x314475(0x46f)+'o'](_0x51dc7e-_0x488684,_0xc819aa);continue;case'22':_0xd69945['shado'+_0x314475(0x3c3)]=-0x3*0x37c+0xc*-0x14b+0x19fe;continue;case'23':_0xd69945['lineW'+_0x314475(0x588)]=Math[_0x314475(0x6ae)](-0x59*0x6b+-0x16d*-0x2+0x225a+0.5,_0x19b055[_0x314475(0x206)](0x63c+-0x1*-0x4f7+-0xb31,_0x2e863b));continue;}break;}}function _0x4428ac(_0x2c3ebb){var _0x565fed=_0x10265c,_0x55f7bc={'Qhlbg':function(_0x16546d,_0x1959b9){return _0x16546d===_0x1959b9;},'lmjIV':_0x565fed(0x45a),'nNmnf':function(_0x1d756b,_0x4b7d45){return _0x1d756b||_0x4b7d45;}};_0xd69945[_0x565fed(0x3b7)](),_0xd69945['font']=_0x19b055[_0x565fed(0x34b)],_0xd69945['textA'+'lign']=_0x19b055['BxPOU'],_0xd69945[_0x565fed(0x2b3)+_0x565fed(0x3e5)+'ne']=_0x19b055[_0x565fed(0x3b3)];var _0x1d439d=0x119*0x1f+-0x14eb+0x3*-0x450,_0xd03250=0x4f*-0x5+0xc2*0xb+-0x6bf,_0x5075cd=(_0x54395d,_0x4faf7f)=>{var _0x6b98a0=_0x565fed,_0x42be81={'wOmNn':_0x6b98a0(0x371)+'a.kou'+'r.ui.'+'v1'};if(_0x55f7bc[_0x6b98a0(0x252)](_0x55f7bc['lmjIV'],_0x6b98a0(0x468)))try{_0x3aed54['setIt'+'em'](_0x42be81[_0x6b98a0(0x34c)],_0xfec99e['strin'+'gify'](_0x2d6790));}catch(_0x13e64c){}else _0xd69945['fillS'+_0x6b98a0(0x680)]=_0x55f7bc['nNmnf'](_0x4faf7f,'rgba('+'255,2'+_0x6b98a0(0x32e)+_0x6b98a0(0x469)+'5)'),_0xd69945['fillT'+'ext'](_0x54395d,_0xd03250,_0x1d439d),_0x1d439d+=0x3f*0x76+-0x407*0x1+-0x18f3;};_0x5075cd('SAKUR'+'A\x20KOU'+'R\x20v1.'+'1',_0x565fed(0x218)+'9d');if(_0x2cb0cd[_0x565fed(0x51c)])_0x19b055[_0x565fed(0x646)](_0x5075cd,_0x19b055['QIWlj'](_0x2148a2,_0x19b055[_0x565fed(0x30a)]));if(!_0x5ee1ce[_0x565fed(0x391)+_0x565fed(0x712)])_0x19b055[_0x565fed(0x721)](_0x5075cd,_0x19b055['IhiGX'],_0x565fed(0x48f)+'255,1'+_0x565fed(0x203)+_0x565fed(0x35d)+')');_0xd69945['resto'+'re']();}function _0x143b5b(){var _0x476f7d=_0x10265c,_0x32397d={'wEvxc':_0x1a9246[_0x476f7d(0x248)],'xGnMd':_0x1a9246['FwvRV']};if(_0x476f7d(0x3ea)===_0x476f7d(0x3ea)){var _0x68e25=_0x1a9246['YGYeH'][_0x476f7d(0x5b4)]('|'),_0x2371d5=-0x1fb*-0xa+-0x8ba*-0x4+-0x36b6;while(!![]){switch(_0x68e25[_0x2371d5++]){case'0':_0x1a9246[_0x476f7d(0x2cb)](requestAnimationFrame,_0x143b5b);continue;case'1':_0xd69945['clear'+_0x476f7d(0x629)](-0x1ad6+-0xf68+-0x2*-0x151f,0x1795*0x1+-0x2*0x39b+0x1*-0x105f,_0x40a22c['w'],_0x40a22c['h']);continue;case'2':_0x4428ac(_0x41967a);continue;case'3':_0x43bcdd-_0x5167ff>=-0x3*0x1b2+0x217e+-0x1a74&&(_0x2148a2=Math['round'](_0x1a9246['sPMHV'](_0x5e86e0*(0x1*-0x63d+0x20f*-0x5+0x1470),_0x43bcdd-_0x5167ff)),_0x5e86e0=-0x124e+0x1a2*0x8+-0x7a*-0xb,_0x5167ff=_0x43bcdd);continue;case'4':_0x1d77d2();continue;case'5':if(_0x2cb0cd['keyst'+_0x476f7d(0x3aa)])_0x145b19(_0x41967a);continue;case'6':var _0x41967a={'left':0x0,'top':0x0,'right':_0x40a22c['w'],'bottom':_0x40a22c['h'],'width':_0x40a22c['w'],'height':_0x40a22c['h']};continue;case'7':_0x393c80();continue;case'8':if(_0x2cb0cd[_0x476f7d(0x38d)+'hair'])_0x219bdd(_0x41967a);continue;case'9':var _0x43bcdd=performance[_0x476f7d(0x234)]();continue;case'10':_0x5e86e0++;continue;}break;}}else{var _0xd058d8=_0x32397d['wEvxc']['split']('|'),_0x5767dd=-0x1*-0x589+-0x20d2*-0x1+-0x265b;while(!![]){switch(_0xd058d8[_0x5767dd++]){case'0':_0x426825['value']=/^#[0-9a-f]{6}$/i['test'](_0x600bfc)?_0x3dac17:_0x476f7d(0x218)+'9d';continue;case'1':_0x426825['class'+_0x476f7d(0x4bd)]=_0x476f7d(0x5ff)+_0x476f7d(0x563);continue;case'2':_0x426825['type']='color';continue;case'3':var _0x426825=_0x43d1e9['creat'+'eElem'+_0x476f7d(0x62b)](_0x32397d[_0x476f7d(0x548)]);continue;case'4':return _0x426825;case'5':_0x426825['oninp'+'ut']=()=>_0x317898(_0x426825['value']);continue;}break;}}}var _0x233e03=document[_0x10265c(0x65a)+'eElem'+_0x10265c(0x62b)](_0x1a9246[_0x10265c(0x458)]);_0x233e03['id']=_0x1a9246['CHftd'],_0x233e03['style'][_0x10265c(0x3fd)+'xt']='posit'+_0x10265c(0x3a5)+_0x10265c(0x6f4)+'inset'+':0;z-'+_0x10265c(0x6ce)+':2147'+_0x10265c(0x713)+_0x10265c(0x67d)+'nter-'+'event'+'s:non'+'e;';var _0x105f80=_0x233e03['attac'+'hShad'+'ow']({'mode':_0x1a9246['xqOKZ']});(document['body']||document[_0x10265c(0x31e)+_0x10265c(0x68c)+'ement'])[_0x10265c(0x586)+_0x10265c(0x2ad)+'d'](_0x233e03);var _0x16405e=![],_0xbc46eb={};try{_0xbc46eb=JSON[_0x10265c(0x6ac)](localStorage['getIt'+'em'](_0x10265c(0x371)+_0x10265c(0x479)+'r.ui.'+'v1')||'{}');}catch(_0x2cf233){}function _0x466253(){var _0x19a389=_0x10265c;if(_0x19a389(0x35a)==='bNpnS'){var _0x448187=_0x17a399[_0x1381ee];if(_0x448187)try{_0x448187[_0x19a389(0x5aa)+'ed']=!!_0x240066;}catch(_0x54e653){}}else try{localStorage['setIt'+'em'](_0x19b055[_0x19a389(0x4a7)],JSON['strin'+_0x19a389(0x1fb)](_0xbc46eb));}catch(_0x18ca53){}}function _0x5c9270(_0x1d6fee,_0x5710a4){var _0x4ff895=_0x10265c,_0x863580=document[_0x4ff895(0x65a)+'eElem'+_0x4ff895(0x62b)](_0x4ff895(0x424)+'n');return _0x863580[_0x4ff895(0x374)]=_0x1a9246['CmcuL'],_0x863580['class'+_0x4ff895(0x4bd)]='sk-sw'+_0x4ff895(0x70e),_0x863580['setAt'+'tribu'+'te']('role',_0x4ff895(0x58f)+'h'),_0x863580[_0x4ff895(0x6c1)+_0x4ff895(0x732)+'te'](_0x1a9246[_0x4ff895(0x345)],String(!!_0x1d6fee)),_0x863580[_0x4ff895(0x239)+'ck']=_0xa2aa76=>{var _0x9f57ac=_0x4ff895;_0xa2aa76[_0x9f57ac(0x63f)+'ropag'+'ation']();var _0x1acafe=_0x863580['getAt'+_0x9f57ac(0x732)+'te'](_0x9f57ac(0x5d1)+_0x9f57ac(0x2e0)+'ed')!==_0x9f57ac(0x4ff);_0x863580['setAt'+'tribu'+'te']('aria-'+_0x9f57ac(0x2e0)+'ed',_0x19b055['AUvya'](String,_0x1acafe)),_0x5710a4(_0x1acafe);},_0x863580;}function _0x31fecc(_0x4e75cf,_0x31582a,_0x3a4c2c,_0x14c7f0,_0x53caeb){var _0x5c4b56=_0x10265c,_0x1185d6={'oyVws':function(_0x5c10cf,_0x3e1f55){return _0x5c10cf(_0x3e1f55);},'BQSew':function(_0xfb0cf4,_0x574776){return _0x19b055['epHNE'](_0xfb0cf4,_0x574776);},'YipID':function(_0x4ce210,_0x11592c){return _0x4ce210*_0x11592c;},'rkwzk':function(_0x44e3bf,_0x2b453d){return _0x44e3bf-_0x2b453d;},'dZIWa':function(_0x406b7a,_0x3f47f0){return _0x406b7a-_0x3f47f0;}};if(_0x5c4b56(0x48e)!==_0x5c4b56(0x474)){var _0xf6a869=document['creat'+_0x5c4b56(0x449)+_0x5c4b56(0x62b)](_0x19b055[_0x5c4b56(0x555)]);_0xf6a869[_0x5c4b56(0x6d4)+'Name']=_0x19b055[_0x5c4b56(0x397)];var _0x80f5c2=document['creat'+'eElem'+_0x5c4b56(0x62b)](_0x5c4b56(0x1fd));_0x80f5c2[_0x5c4b56(0x374)]=_0x5c4b56(0x473),_0x80f5c2[_0x5c4b56(0x6d4)+'Name']=_0x19b055[_0x5c4b56(0x3c0)],_0x80f5c2['min']=_0x31582a,_0x80f5c2[_0x5c4b56(0x6ae)]=_0x3a4c2c,_0x80f5c2['step']=_0x14c7f0,_0x80f5c2[_0x5c4b56(0x228)]=_0x4e75cf;var _0x121936=document[_0x5c4b56(0x65a)+'eElem'+'ent'](_0x5c4b56(0x2b7));_0x121936[_0x5c4b56(0x6d4)+_0x5c4b56(0x4bd)]=_0x19b055[_0x5c4b56(0x3dc)],_0x121936['textC'+_0x5c4b56(0x4db)+'t']=String(_0x4e75cf);var _0x30556a=()=>{var _0x4040c3=_0x5c4b56;_0x121936[_0x4040c3(0x52c)+_0x4040c3(0x4db)+'t']=_0x1185d6['oyVws'](String,_0x80f5c2['value']),_0xf6a869[_0x4040c3(0x6d7)]['setPr'+'opert'+'y'](_0x4040c3(0x35f),_0x1185d6[_0x4040c3(0x238)](_0x1185d6[_0x4040c3(0x379)](_0x1185d6['rkwzk'](_0x80f5c2[_0x4040c3(0x228)],_0x31582a)/_0x1185d6[_0x4040c3(0x22c)](_0x3a4c2c,_0x31582a),0x15b*0x1+-0x6e1*0x1+0x1*0x5ea),'%'));};return _0x80f5c2[_0x5c4b56(0x707)+'ut']=()=>{var _0x99fd90=_0x5c4b56;if(_0x19b055['fBRyM']!==_0x99fd90(0x311))_0x19b055[_0x99fd90(0x221)](_0x30556a),_0x19b055[_0x99fd90(0x646)](_0x53caeb,_0x19b055[_0x99fd90(0x609)](Number,_0x80f5c2[_0x99fd90(0x228)]));else{_0x1da91e[_0x99fd90(0x68f)](_0x566b7b[_0x99fd90(0x234)]());if(_0x2c3999['lengt'+'h']>0x19db+-0x1221+-0x11*0x72)_0xd2047b['shift']();}},_0x30556a(),_0xf6a869[_0x5c4b56(0x586)+'d'](_0x80f5c2,_0x121936),_0xf6a869;}else{var _0x16db9d=new _0x52130f(_0x3c0d58)[_0x5c4b56(0x641)+'ield'](_0x491ae6,_0x2e3be5);_0x28f099['set'](_0x126f27,_0x16db9d!==_0x293313?_0x16db9d[_0x5c4b56(0x407)]():null);}}function _0x330aa6(_0x499a55,_0x34c696){var _0x535517=_0x10265c,_0x528891=(_0x535517(0x61c)+_0x535517(0x5ee)+'3')['split']('|'),_0x124024=0x1ec9*-0x1+0x1*-0x133d+0x151*0x26;while(!![]){switch(_0x528891[_0x124024++]){case'0':_0x280b0['class'+_0x535517(0x4bd)]=_0x535517(0x5ff)+_0x535517(0x563);continue;case'1':_0x280b0[_0x535517(0x374)]=_0x19b055[_0x535517(0x6ab)];continue;case'2':_0x280b0[_0x535517(0x707)+'ut']=()=>_0x34c696(_0x280b0[_0x535517(0x228)]);continue;case'3':return _0x280b0;case'4':_0x280b0[_0x535517(0x228)]=/^#[0-9a-f]{6}$/i['test'](_0x499a55)?_0x499a55:_0x19b055['RVetg'];continue;case'5':var _0x280b0=document[_0x535517(0x65a)+_0x535517(0x449)+_0x535517(0x62b)](_0x535517(0x1fd));continue;}break;}}function _0x2d4977(_0x54df50,_0x51d658,_0xd8746){var _0x8d9c26=_0x10265c,_0x1dae04=document['creat'+_0x8d9c26(0x449)+_0x8d9c26(0x62b)](_0x8d9c26(0x635)+'t');_0x1dae04[_0x8d9c26(0x6d4)+_0x8d9c26(0x4bd)]=_0x8d9c26(0x62a)+_0x8d9c26(0x538);for(var [_0x3c80f6,_0x25335e]of _0x51d658){var _0x173640=document['creat'+_0x8d9c26(0x449)+_0x8d9c26(0x62b)](_0x19b055['RzfnB']);_0x173640['value']=_0x3c80f6,_0x173640['textC'+_0x8d9c26(0x4db)+'t']=_0x25335e,_0x1dae04['appen'+'dChil'+'d'](_0x173640);}return _0x1dae04[_0x8d9c26(0x228)]=_0x54df50,_0x1dae04[_0x8d9c26(0x526)+'nge']=()=>_0xd8746(_0x1dae04['value']),_0x1dae04;}function _0x328fe1(_0xa8d240,_0xf8a43f){var _0x31d63b=_0x10265c;if('eOMqf'==='hnTcF')_0x4cbe2f['assig'+'n'](_0x54045c,_0x357e2f[_0x31d63b(0x6ac)](_0x4da340[_0x31d63b(0x6df)+'em']('sakur'+'a.kou'+_0x31d63b(0x431))||'{}'));else{var _0x3bee7c=document[_0x31d63b(0x65a)+'eElem'+_0x31d63b(0x62b)]('butto'+'n');return _0x3bee7c[_0x31d63b(0x374)]=_0x1a9246[_0x31d63b(0x727)],_0x3bee7c[_0x31d63b(0x6d4)+_0x31d63b(0x4bd)]=_0x1a9246[_0x31d63b(0x2fb)],_0x3bee7c['textC'+'onten'+'t']=_0xa8d240,_0x3bee7c[_0x31d63b(0x239)+'ck']=_0x2ca944=>{var _0x2ad3e3=_0x31d63b;_0x2ca944[_0x2ad3e3(0x63f)+'ropag'+'ation'](),_0x19b055['Fxmss'](_0xf8a43f);},_0x3bee7c;}}function _0x4619b5(_0x5e2b13,_0x35bd8b,_0x138ffd){var _0xd1b1a4=_0x10265c,_0x449350=document[_0xd1b1a4(0x65a)+_0xd1b1a4(0x449)+_0xd1b1a4(0x62b)](_0x19b055[_0xd1b1a4(0x555)]);_0x449350['class'+_0xd1b1a4(0x4bd)]=_0xd1b1a4(0x209)+'l';var _0x1f317c=document[_0xd1b1a4(0x65a)+'eElem'+'ent'](_0xd1b1a4(0x2b7));_0x1f317c[_0xd1b1a4(0x6d4)+_0xd1b1a4(0x4bd)]='sk-la'+_0xd1b1a4(0x5ce),_0x1f317c['textC'+_0xd1b1a4(0x4db)+'t']=_0x5e2b13;if(_0x35bd8b){var _0x289028=document[_0xd1b1a4(0x65a)+_0xd1b1a4(0x449)+'ent']('small');_0x289028[_0xd1b1a4(0x6d4)+'Name']=_0x19b055['YgVPp'],_0x289028['textC'+_0xd1b1a4(0x4db)+'t']=_0x35bd8b,_0x1f317c[_0xd1b1a4(0x586)+_0xd1b1a4(0x2ad)+'d'](_0x289028);}return _0x449350[_0xd1b1a4(0x586)+'d'](_0x1f317c,_0x138ffd),_0x449350;}function _0x9f4083(_0x5499a6,_0x2d1a34){var _0x103a97=_0x10265c,_0x12c825={'HnhGh':_0x103a97(0x5a8)};if('VhKCZ'!==_0x1a9246[_0x103a97(0x314)]){var _0x1a2052=new _0x43f711(_0x49b645)['readF'+'ield'](_0x158395,_0x12c825[_0x103a97(0x5c2)]);return _0x1a2052?_0x1a2052['val']():0x1*-0x26cb+-0x4*-0x166+0x2133;}else{var _0x33e018=document['creat'+_0x103a97(0x449)+_0x103a97(0x62b)]('div');return _0x33e018['class'+_0x103a97(0x4bd)]='sk-no'+'te'+(_0x2d1a34?_0x1a9246['Ppnyj']:''),_0x33e018['textC'+'onten'+'t']=_0x5499a6,_0x33e018;}}function _0x414710(_0x1b00aa,_0x279ec9,_0x139c0f,_0x9e4532,_0x312cfe){var _0x3cc98e=_0x10265c,_0x3996f3=document[_0x3cc98e(0x65a)+'eElem'+'ent']('div');_0x3996f3[_0x3cc98e(0x6d4)+'Name']=_0x1a9246[_0x3cc98e(0x283)](_0x1a9246[_0x3cc98e(0x4d3)],_0x139c0f?'\x20on':'');var _0x9b1d3f=document[_0x3cc98e(0x65a)+_0x3cc98e(0x449)+_0x3cc98e(0x62b)](_0x1a9246[_0x3cc98e(0x458)]);_0x9b1d3f[_0x3cc98e(0x6d4)+_0x3cc98e(0x4bd)]=_0x1a9246['VjPJh'];var _0x2a081b=document['creat'+'eElem'+_0x3cc98e(0x62b)](_0x1a9246['wUUdb']);_0x2a081b[_0x3cc98e(0x6d4)+'Name']=_0x1a9246['uwhEh'];var _0x110a4f=document['creat'+_0x3cc98e(0x449)+_0x3cc98e(0x62b)](_0x1a9246['gGZZr']);_0x110a4f[_0x3cc98e(0x52c)+_0x3cc98e(0x4db)+'t']=_0x1b00aa,_0x2a081b[_0x3cc98e(0x586)+'dChil'+'d'](_0x110a4f);if(_0x9e4532){var _0x143fbe=_0x1a9246[_0x3cc98e(0x462)](_0x5c9270,_0x139c0f,_0x2b3cf2=>{var _0x4de338=_0x3cc98e;_0x3996f3[_0x4de338(0x6d4)+_0x4de338(0x536)][_0x4de338(0x4c6)+'e']('on',_0x2b3cf2),_0x19b055[_0x4de338(0x646)](_0x9e4532,_0x2b3cf2);});_0x9b1d3f[_0x3cc98e(0x586)+'d'](_0x2a081b,_0x143fbe);}else'uYCST'!==_0x1a9246[_0x3cc98e(0x615)]?_0x9b1d3f['appen'+'dChil'+'d'](_0x2a081b):(_0x448cf3[_0x3cc98e(0x222)]=_0x374c0f,_0x10cf39(),_0x19b055['EKlbA'](_0x52bfff,_0x19b055['mZPzG'],_0x2929ae),_0x19b055[_0x3cc98e(0x51f)](_0x27055d,'godDi'+'e',_0x168e79));_0x3996f3[_0x3cc98e(0x586)+'dChil'+'d'](_0x9b1d3f);if(_0x312cfe&&_0x312cfe[_0x3cc98e(0x4e0)+'h']){var _0x292c11=('2|3|1'+'|7|6|'+_0x3cc98e(0x37d))[_0x3cc98e(0x5b4)]('|'),_0x3505c8=0xa7+-0xbd7*0x2+0x1707;while(!![]){switch(_0x292c11[_0x3505c8++]){case'0':_0x3996f3[_0x3cc98e(0x586)+_0x3cc98e(0x2ad)+'d'](_0x26dee0);continue;case'1':var _0x27bfeb=document[_0x3cc98e(0x65a)+_0x3cc98e(0x449)+'ent'](_0x1a9246['wUUdb']);continue;case'2':var _0x26dee0=document[_0x3cc98e(0x65a)+_0x3cc98e(0x449)+_0x3cc98e(0x62b)](_0x3cc98e(0x660));continue;case'3':_0x26dee0['class'+_0x3cc98e(0x4bd)]=_0x1a9246[_0x3cc98e(0x500)];continue;case'4':for(var _0x3b5132 of _0x312cfe)_0x26dee0['appen'+_0x3cc98e(0x2ad)+'d'](_0x3b5132);continue;case'5':_0x26dee0[_0x3cc98e(0x586)+_0x3cc98e(0x2ad)+'d'](_0x27bfeb);continue;case'6':_0x27bfeb[_0x3cc98e(0x52c)+_0x3cc98e(0x4db)+'t']=_0x279ec9;continue;case'7':_0x27bfeb[_0x3cc98e(0x6d4)+'Name']='sk-md'+_0x3cc98e(0x573);continue;}break;}}return _0x3996f3;}var _0x39056e=[{'id':_0x1a9246[_0x10265c(0x4a6)],'label':_0x10265c(0x445)+'t'},{'id':_0x1a9246[_0x10265c(0x6e3)],'label':'Move'},{'id':_0x1a9246[_0x10265c(0x217)],'label':_0x10265c(0x22b)+'l'},{'id':_0x1a9246[_0x10265c(0x650)],'label':_0x10265c(0x57f)},{'id':_0x10265c(0x53a),'label':_0x10265c(0x757)+'y'}];function _0x1a1a32(){var _0x27bd8d=_0x10265c,_0x56436c=_0x5ee1ce[_0x27bd8d(0x706)+_0x27bd8d(0x43b)]?_0x19b055[_0x27bd8d(0x3de)]:_0x5ee1ce[_0x27bd8d(0x5b3)]?_0x19b055[_0x27bd8d(0x36b)](_0x19b055['neASK'](_0x19b055[_0x27bd8d(0x2f1)](_0x19b055[_0x27bd8d(0x2f1)](_0x27bd8d(0x2c1)+_0x27bd8d(0x69c)+'\x20',_0x5ee1ce[_0x27bd8d(0x4f8)+_0x27bd8d(0x415)]?_0x19b055[_0x27bd8d(0x552)](_0x5ee1ce[_0x27bd8d(0x4f8)+'Ok'],'/')+_0x5ee1ce[_0x27bd8d(0x4f8)+_0x27bd8d(0x415)]+_0x19b055[_0x27bd8d(0x20f)]:_0x19b055['uvMrm']),_0x27bd8d(0x27c)+'me\x20')+(_0x5ee1ce[_0x27bd8d(0x391)+_0x27bd8d(0x712)]?_0x19b055['WKBgk']:'loadi'+'ng')+(_0x27bd8d(0x37a)+'ooter'+'\x20'),_0x5ee1ce[_0x27bd8d(0x509)+_0x27bd8d(0x59b)]?_0x19b055['qPeFp']:_0x19b055[_0x27bd8d(0x36d)]),_0x27bd8d(0x741)+_0x27bd8d(0x471)+'t\x20')+(_0x5ee1ce[_0x27bd8d(0x32a)+'ents']?'held':'none'):_0x19b055[_0x27bd8d(0x74b)];if(_0x5ee1ce[_0x27bd8d(0x4cc)+_0x27bd8d(0x695)])_0x56436c+='\x20|\x20ER'+'R:\x20'+_0x5ee1ce[_0x27bd8d(0x4cc)+_0x27bd8d(0x695)];return _0x19b055[_0x27bd8d(0x229)](_0x414710,'Statu'+'s',_0x56436c,_0x5ee1ce[_0x27bd8d(0x5b3)],null,[_0x4619b5(_0x19b055[_0x27bd8d(0x36e)],_0x27bd8d(0x295)+'\x20Unit'+'yEngi'+'ne.Ap'+_0x27bd8d(0x50a)+_0x27bd8d(0x6f8)+'set_t'+_0x27bd8d(0x661)+_0x27bd8d(0x72e)+'Rate',_0x328fe1(_0x27bd8d(0x47a),()=>{var _0x58b959=_0x27bd8d;try{if(_0x5254d0)_0x5254d0['call'](_0x58b959(0x1f6)+_0x58b959(0x5e0)+_0x58b959(0x42d)+_0x58b959(0x3b0)+'ion',_0x58b959(0x550)+'arget'+'Frame'+'Rate',[-0x2f4+0x1b60+-0x177c]);}catch(_0x507afc){}}))]);}function _0x3b381d(_0x6dd868){var _0x36caf9=_0x10265c,_0x199407={'GjkxN':function(_0x5414ea){return _0x5414ea();},'WeeKw':function(_0x4c3039){return _0x4c3039();},'aQnqk':_0x36caf9(0x590),'PhYRQ':_0x36caf9(0x72f),'dttyb':function(_0xcdc76c,_0x21bf07){return _0xcdc76c===_0x21bf07;},'BNQsT':_0x1a9246['XvMzM'],'uxSQE':_0x1a9246[_0x36caf9(0x726)],'LOWlM':_0x36caf9(0x509)+_0x36caf9(0x59b),'aONUa':_0x36caf9(0x6ee)+_0x36caf9(0x64f),'mBBXA':_0x1a9246['WHpMX'],'Tdhlp':'Initi'+'ateTa'+_0x36caf9(0x282)+'lth','usjEO':_0x1a9246[_0x36caf9(0x5ba)],'SLXGW':'mHHyq','Witfo':function(_0xd5e835,_0x13ea86){return _0xd5e835(_0x13ea86);},'KBuUD':function(_0x2fb264){return _0x2fb264();},'gIakq':function(_0x270a51,_0x2def0e){var _0x31e9ae=_0x36caf9;return _0x1a9246[_0x31e9ae(0x421)](_0x270a51,_0x2def0e);}};if(_0x1a9246['bsjat'](_0x6dd868,_0x1a9246[_0x36caf9(0x4a6)]))return[_0x1a1a32(),_0x414710(_0x1a9246[_0x36caf9(0x245)],_0x1a9246['XRwqh'],_0x2cb0cd[_0x36caf9(0x222)],_0x1eb6c2=>{var _0x327800=_0x36caf9;_0x2cb0cd['god']=_0x1eb6c2,_0x55e196(),_0x19b055[_0x327800(0x51f)](_0x427ae5,_0x19b055['mZPzG'],_0x1eb6c2),_0x427ae5('godDi'+'e',_0x1eb6c2);},[]),_0x414710(_0x1a9246[_0x36caf9(0x73d)],'Skips'+'\x20Reco'+_0x36caf9(0x5eb)+_0x36caf9(0x5d6)+_0x36caf9(0x4e7)+'o\x20the'+_0x36caf9(0x602)+'il\x20sp'+_0x36caf9(0x6c2)+_0x36caf9(0x5bb)+_0x36caf9(0x356)+_0x36caf9(0x39c),_0x2cb0cd['noRec'+_0x36caf9(0x21a)],_0x3b812c=>{var _0x585e19=_0x36caf9;_0x2cb0cd[_0x585e19(0x704)+'oil']=_0x3b812c,_0x55e196(),_0x19b055[_0x585e19(0x51f)](_0x427ae5,_0x19b055[_0x585e19(0x344)],_0x3b812c);},[]),_0x414710(_0x36caf9(0x392)+'read',_0x36caf9(0x4c7)+'s\x20spr'+_0x36caf9(0x396)+'nd\x20ma'+_0x36caf9(0x6b4)+_0x36caf9(0x361)+_0x36caf9(0x3a2)+_0x36caf9(0x3df)+_0x36caf9(0x2c5)+_0x36caf9(0x694)+_0x36caf9(0x60b)+_0x36caf9(0x38e),_0x2cb0cd['noSpr'+_0x36caf9(0x47c)],_0x228586=>{var _0x4418b2=_0x36caf9;_0x2cb0cd[_0x4418b2(0x4ba)+'ead']=_0x228586,_0x199407[_0x4418b2(0x2f9)](_0x55e196);},[]),_0x1a9246['ZmowZ'](_0x414710,_0x1a9246[_0x36caf9(0x2a6)],_0x36caf9(0x686)+'s\x20Ove'+_0x36caf9(0x36a)+'Weapo'+'n.fir'+_0x36caf9(0x2a5)+_0x36caf9(0x750)+'0%.\x20S'+'erver'+'\x20may\x20'+_0x36caf9(0x4d9)+_0x36caf9(0x340)+_0x36caf9(0x45f)+'s.',_0x2cb0cd[_0x36caf9(0x349)+_0x36caf9(0x5b0)],_0x5e6aa1=>{_0x2cb0cd['rapid'+'Exp']=_0x5e6aa1,_0x55e196();},[]),_0x414710(_0x1a9246[_0x36caf9(0x3e2)],_0x1a9246[_0x36caf9(0x537)],_0x2cb0cd[_0x36caf9(0x6c0)+'eExp'],_0x3c86ea=>{var _0x1203b3=_0x36caf9;_0x2cb0cd[_0x1203b3(0x6c0)+_0x1203b3(0x54a)]=_0x3c86ea,_0x199407['WeeKw'](_0x55e196);},[_0x4619b5('Damag'+'e\x20val'+'ue',null,_0x1a9246[_0x36caf9(0x6bb)](_0x31fecc,_0x2cb0cd[_0x36caf9(0x6c0)+_0x36caf9(0x6f0)+'e'],-0x1f48+0x3*0x759+-0x7d*-0x13,-0x1ea1+-0x122b*-0x1+0xe6a,0x7*0x3df+-0xe2c+-0xce8,_0xdf57e5=>{var _0x55eb79=_0x36caf9;_0x2cb0cd[_0x55eb79(0x6c0)+'eValu'+'e']=_0xdf57e5,_0x55e196();}))]),_0x414710('Infin'+_0x36caf9(0x24b)+'mmo\x20['+_0x36caf9(0x614),_0x1a9246['TxlgI'],_0x2cb0cd['infAm'+'moExp'],_0xa492ca=>{var _0x1ac13f=_0x36caf9;_0x2cb0cd[_0x1ac13f(0x4b1)+_0x1ac13f(0x4c2)]=_0xa492ca,_0x55e196();},[_0x9f4083(_0x1a9246[_0x36caf9(0x5c7)])])];if(_0x6dd868===_0x1a9246[_0x36caf9(0x6e3)])return[_0x414710(_0x1a9246['oieXL'],_0x36caf9(0x686)+'s\x20all'+'\x20four'+'\x20Move'+'ment\x20'+_0x36caf9(0x601)+_0x36caf9(0x201)+_0x36caf9(0x265)+_0x36caf9(0x231)+_0x36caf9(0x49c)+_0x36caf9(0x2c2)+'.',_0x1a9246[_0x36caf9(0x5e1)](_0x2cb0cd[_0x36caf9(0x601)+'Pct'],0xa5e*0x3+0x100+-0x1fb6),null,[_0x1a9246[_0x36caf9(0x413)](_0x4619b5,'Speed'+'\x20%',_0x1a9246[_0x36caf9(0x627)],_0x31fecc(_0x2cb0cd[_0x36caf9(0x601)+_0x36caf9(0x617)],0xc91*0x3+0xb6b+-0x1876*0x2,-0x2b+0x10c1+-0x7b5*0x2,-0x17*0x141+0x10*0x146+0xb5*0xc,_0x585d86=>{var _0x279a32=_0x36caf9;_0x199407['aQnqk']===_0x199407['PhYRQ']?_0x444d3a[_0x279a32(0x385)+'em'](_0x279a32(0x371)+'a.kou'+_0x279a32(0x431),_0x3dd8d4['strin'+_0x279a32(0x1fb)](_0x41c246)):(_0x2cb0cd[_0x279a32(0x601)+'Pct']=_0x585d86,_0x199407['GjkxN'](_0x55e196));}))]),_0x1a9246['lIdNf'](_0x414710,_0x36caf9(0x5c1)+_0x36caf9(0x6f1)+'vity','Scale'+_0x36caf9(0x699)+_0x36caf9(0x719)+'.jump'+_0x36caf9(0x33e)+_0x36caf9(0x4d8)+_0x36caf9(0x640)+_0x36caf9(0x33c)+'ty\x20va'+_0x36caf9(0x559),_0x2cb0cd['jumpP'+'ct']!==-0x26fe+-0xf9*0x1d+-0xd*-0x533||_0x2cb0cd[_0x36caf9(0x33c)+'tyPct']!==0x21ea+-0x1*0x1b62+-0x624,null,[_0x1a9246[_0x36caf9(0x413)](_0x4619b5,_0x36caf9(0x5c1)+'%',null,_0x1a9246[_0x36caf9(0x4ee)](_0x31fecc,_0x2cb0cd['jumpP'+'ct'],-0x2435*0x1+0x18ef+-0xb78*-0x1,-0x2157+-0x236*-0xa+0x5*0x27b,0x23d0+-0x316*0x1+0xae7*-0x3,_0x218fe4=>{var _0x4a8c58=_0x36caf9;_0x199407[_0x4a8c58(0x6d5)](_0x199407[_0x4a8c58(0x2a3)],_0x199407[_0x4a8c58(0x2a3)])?(_0x2cb0cd[_0x4a8c58(0x690)+'ct']=_0x218fe4,_0x199407[_0x4a8c58(0x2f9)](_0x55e196)):(_0x35fe68[_0x4a8c58(0x739)+'od']=_0x555294,_0x231a45[_0x4a8c58(0x739)+'odDie']=_0x28f9bc,_0x5dc85c['hookN'+'oReco'+'il']=_0x11baf0,_0x573e74[_0x4a8c58(0x673)+'aptur'+'e']=_0x551798,_0x4fec75(),_0x26df3a[_0x4a8c58(0x320)+'d']());})),_0x4619b5('Gravi'+'ty\x20%',_0x1a9246['aBLLB'],_0x31fecc(_0x2cb0cd[_0x36caf9(0x33c)+_0x36caf9(0x2d4)],-0xd4d+0x1acf+0xd78*-0x1,-0x259*0x4+0x1*-0xafd+0x1529,-0xc71+-0xa1a+0x26*0x98,_0x56a3a6=>{var _0x10c11d=_0x36caf9,_0x3fc2a8={'FabLR':function(_0x74f879,_0x280987){return _0x74f879===_0x280987;},'qouXf':'kour-'+'io_'};if(_0x199407['uxSQE']!=='ArDkk')for(var _0x2ccd48 of['kour-'+'io_30'+_0x10c11d(0x669)+'-pare'+'nt',_0x10c11d(0x402)+'io_72'+_0x10c11d(0x3b5)+'paren'+'t',_0x10c11d(0x402)+_0x10c11d(0x41e)+'0x600'+_0x10c11d(0x55e)+'nt',_0x10c11d(0x378)+_0x10c11d(0x6ed)+_0x10c11d(0x632)+'s']){var _0x5a8ad1=_0x30f487[_0x10c11d(0x28f)+_0x10c11d(0x719)+_0x10c11d(0x287)](_0x2ccd48);if(_0x5a8ad1&&_0x2ccd48===_0x10c11d(0x378)+_0x10c11d(0x6ed)+'-banr'+'s'){var _0x59ae6f=_0x5a8ad1['child'+'ren'];for(var _0x5d3104=-0x1ade+-0x25*-0x70+0xaae;_0x5d3104<_0x59ae6f[_0x10c11d(0x4e0)+'h'];_0x5d3104++){if(_0x59ae6f[_0x5d3104]['id']&&_0x3fc2a8[_0x10c11d(0x5fa)](_0x59ae6f[_0x5d3104]['id']['index'+'Of'](_0x3fc2a8[_0x10c11d(0x2dd)]),0x1e2*0x3+0x8df+0x7*-0x213))_0x59ae6f[_0x5d3104]['style'][_0x10c11d(0x246)+'ay']=_0x10c11d(0x49b);}}else{if(_0x5a8ad1)_0x5a8ad1['style'][_0x10c11d(0x246)+'ay']=_0x10c11d(0x49b);}}else _0x2cb0cd['gravi'+_0x10c11d(0x2d4)]=_0x56a3a6,_0x55e196();}))]),_0x1a9246[_0x36caf9(0x4ee)](_0x414710,_0x36caf9(0x381)+_0x36caf9(0x2d9),_0x36caf9(0x4c7)+_0x36caf9(0x699)+'ement'+'.last'+'JumpT'+'ime\x20s'+'o\x20the'+'\x20jump'+'\x20cool'+_0x36caf9(0x5e8)+_0x36caf9(0x343)+_0x36caf9(0x418)+_0x36caf9(0x327),_0x2cb0cd['bhop'],_0x3151a3=>{var _0x436769=_0x36caf9;_0x19b055[_0x436769(0x330)](_0x436769(0x2c8),'rPwhN')?(_0x799e90['chCol'+'or']=_0x53f209,_0x4ae54f()):(_0x2cb0cd[_0x436769(0x493)]=_0x3151a3,_0x55e196());},[])];if(_0x1a9246[_0x36caf9(0x2e8)](_0x6dd868,'visua'+'l')){if(_0x36caf9(0x472)==='CCbLZ')_0x13856d[_0x36caf9(0x522)]();else return[_0x414710(_0x1a9246[_0x36caf9(0x59a)],_0x1a9246[_0x36caf9(0x2d5)],_0x2cb0cd['keyst'+_0x36caf9(0x3aa)],_0x5455ac=>{var _0x584b2d=_0x36caf9;_0x2cb0cd[_0x584b2d(0x513)+'rokes']=_0x5455ac,_0x55e196();},[_0x1a9246['nmXJY'](_0x4619b5,_0x1a9246[_0x36caf9(0x2e9)],null,_0x1a9246[_0x36caf9(0x3b1)](_0x2d4977,_0x2cb0cd['ksPos'],[['bl','Botto'+'m\x20lef'+'t'],['br','Botto'+'m\x20rig'+'ht'],['ml',_0x36caf9(0x2e6)+_0x36caf9(0x388)+'e']],_0xa4544d=>{var _0x34e4a9=_0x36caf9;_0x2cb0cd[_0x34e4a9(0x755)]=_0xa4544d,_0x55e196();})),_0x1a9246[_0x36caf9(0x413)](_0x4619b5,_0x1a9246[_0x36caf9(0x376)],null,_0x1a9246[_0x36caf9(0x404)](_0x31fecc,_0x2cb0cd['ksSca'+'le'],-0x1f3b+-0x335+0x2270+0.6,-0x25fe+0x31c*0x6+0x1357+0.6000000000000001,0x1*-0x2056+-0x555+0x25ab+0.05,_0x3a4d78=>{var _0xc012c0=_0x36caf9;_0xc012c0(0x405)!==_0x19b055[_0xc012c0(0x66f)]?(_0x2cb0cd[_0xc012c0(0x728)+'le']=_0x3a4d78,_0x55e196()):_0x34ee8c['enabl'+'ed']=!!_0xe78e73;})),_0x1a9246['eFgrp'](_0x4619b5,_0x36caf9(0x256)+_0x36caf9(0x3db)+'t',null,_0x5c9270(_0x2cb0cd['ksCps'],_0x399710=>{_0x2cb0cd['ksCps']=_0x399710,_0x55e196();}))]),_0x414710('Cross'+_0x36caf9(0x6a6),_0x1a9246['IDeMt'],_0x2cb0cd[_0x36caf9(0x38d)+_0x36caf9(0x6a6)],_0x1d8d27=>{var _0x2d5a41=_0x36caf9;_0x2cb0cd[_0x2d5a41(0x38d)+'hair']=_0x1d8d27,_0x55e196();},[_0x4619b5(_0x36caf9(0x412),null,_0x31fecc(_0x2cb0cd[_0x36caf9(0x625)+'e'],-0x16a2+0x1*-0x47e+0x1b20+0.5,0x1fc7*0x1+-0x137b+-0x1*0xc4a+0.5,0xd43+0xa2+-0x1*0xde5+0.1,_0xa69129=>{var _0x49651a=_0x36caf9,_0x1d7afb={'GFcoB':function(_0x3a4a91,_0x55a6f3,_0x36af10,_0x3d4af5,_0x1f26c9){return _0x3a4a91(_0x55a6f3,_0x36af10,_0x3d4af5,_0x1f26c9);},'Odrhp':_0x199407['LOWlM'],'iVbud':_0x199407['aONUa'],'EXBVY':_0x199407[_0x49651a(0x4cb)],'UWHlO':'OHeal'+'th','OGgmF':_0x199407[_0x49651a(0x53c)],'FKaSl':_0x49651a(0x342),'WTNJd':_0x49651a(0x383)+'e','BAOUQ':function(_0x579e70,_0x89869f,_0x3371ae,_0x142de1,_0x13dbdb,_0x203856,_0x88e93a,_0x2aca8a){return _0x579e70(_0x89869f,_0x3371ae,_0x142de1,_0x13dbdb,_0x203856,_0x88e93a,_0x2aca8a);},'wcQAT':'noRec'+_0x49651a(0x21a),'kPfcD':_0x49651a(0x1f8)+_0x49651a(0x34f)+_0x49651a(0x543)+_0x49651a(0x498)+_0x49651a(0x5a6)+_0x49651a(0x519)+_0x49651a(0x510)+'on','vlhaP':_0x49651a(0x644),'stwAC':_0x49651a(0x710)+_0x49651a(0x5de),'cpcpc':_0x199407['usjEO']};if(_0x199407['SLXGW']===_0x49651a(0x581)){if(_0xc83c48['Unity'+_0x49651a(0x6b2)+_0x49651a(0x4b6)]&&!_0x20cafe['safeM'+_0x49651a(0x43b)]){_0x40754d=_0x4ae627[_0x49651a(0x1f6)+'WebMo'+'dkit'][_0x49651a(0x25f)+_0x49651a(0x698)+'er'],_0x45a7ce=_0x532aa6[_0x49651a(0x1f6)+_0x49651a(0x6b2)+'dkit'][_0x49651a(0x512)+'me']['creat'+'ePlug'+'in']({'name':_0x1d7afb['iVbud'],'version':_0x49651a(0x5b9),'referencedAssemblies':['Assem'+_0x49651a(0x63b)+'Sharp'+_0x49651a(0x62c)]});if(_0xf7bc6a[_0x49651a(0x739)+'od'])_0x26f5b9(_0x1d7afb[_0x49651a(0x55a)],_0x1d7afb['UWHlO'],_0x1d7afb['OGgmF'],[_0x49651a(0x342),_0x1d7afb[_0x49651a(0x439)]],_0x596641,_0x2682fe,!!_0x889c07[_0x49651a(0x222)]);if(_0x223824[_0x49651a(0x739)+_0x49651a(0x57d)])_0x3dec92(_0x1d7afb[_0x49651a(0x557)],'OHeal'+'th','Local'+'Die',[_0x49651a(0x342),_0x49651a(0x342),_0x1d7afb[_0x49651a(0x439)],_0x1d7afb[_0x49651a(0x439)],_0x1d7afb['FKaSl']],_0x2bb293,_0x2e0385,!!_0x59caa6['god']);if(_0x346d51['hookN'+_0x49651a(0x31a)+'il'])_0x1d7afb[_0x49651a(0x3e3)](_0x45f47d,_0x1d7afb[_0x49651a(0x55f)],_0x1d7afb[_0x49651a(0x476)],_0x1d7afb['vlhaP'],[_0x1d7afb['FKaSl']],_0x3a9ef5,_0x347c9f,!!_0x1cc1d6[_0x49651a(0x704)+_0x49651a(0x21a)]);if(_0x3ce907['hookC'+'aptur'+'e'])_0x19f3e6(_0x1d7afb[_0x49651a(0x39f)],_0x49651a(0x619)+_0x49651a(0x58d),_0x49651a(0x40b)+_0x49651a(0x64d)+_0x49651a(0x637),[_0x49651a(0x342),_0x1d7afb['FKaSl']],_0x1ee626,(_0x48e5bd,_0xce909b)=>{_0x1d7afb['GFcoB'](_0x3a64e7,_0x2af566,_0xce909b,_0x543aea,_0x1d7afb['Odrhp']);},!![]);if(_0x161a21['hookC'+_0x49651a(0x575)+'e'])_0x44d966(_0x49651a(0x377)+'ve',_0x1d7afb[_0x49651a(0x64a)],'IsGro'+'unded',[_0x49651a(0x342)],_0x49651a(0x342),(_0x4c3624,_0x31614a)=>{var _0x58749a=_0x49651a;_0x5b4088(_0x2e9a39,_0x31614a,_0x1544e6,_0x58749a(0x32a)+'ents');},!![]);}}else _0x2cb0cd['chSiz'+'e']=_0xa69129,_0x55e196();})),_0x1a9246[_0x36caf9(0x3b1)](_0x4619b5,_0x1a9246['axPtC'],null,_0x330aa6(_0x2cb0cd[_0x36caf9(0x398)+'or'],_0x4583eb=>{var _0x11b398=_0x36caf9,_0x27d0ad={'UAuZC':_0x19b055[_0x11b398(0x73b)],'IjPtk':_0x11b398(0x550)+'arget'+'Frame'+'Rate'};if('sdtXT'===_0x11b398(0x5c5)){if(_0x179258)_0xb86af2[_0x11b398(0x227)](_0x27d0ad[_0x11b398(0x368)],_0x27d0ad['IjPtk'],[0x6bd+-0x9a9*0x4+-0x1*-0x20d7]);}else _0x2cb0cd[_0x11b398(0x398)+'or']=_0x4583eb,_0x19b055[_0x11b398(0x221)](_0x55e196);}))]),_0x1a9246[_0x36caf9(0x6bb)](_0x414710,_0x36caf9(0x48d)+_0x36caf9(0x59b),_0x1a9246[_0x36caf9(0x25d)],_0x2cb0cd['fps'],null,[_0x1a9246[_0x36caf9(0x57a)](_0x4619b5,'FPS\x20c'+_0x36caf9(0x533)+'r',null,_0x5c9270(_0x2cb0cd['fps'],_0x5cc87c=>{_0x2cb0cd['fps']=_0x5cc87c,_0x199407['WeeKw'](_0x55e196);})),_0x1a9246[_0x36caf9(0x697)](_0x9f4083,_0x1a9246['vHLFH'])])];}if(_0x6dd868==='misc')return[_0x414710('Adblo'+'ck','Hides'+'\x20kour'+_0x36caf9(0x2b2)+_0x36caf9(0x639)+_0x36caf9(0x31d)+'ots.',_0x2cb0cd[_0x36caf9(0x2dc)+'ck'],_0x5cebbf=>{_0x2cb0cd['adblo'+'ck']=_0x5cebbf,_0x55e196();},[_0x9f4083(_0x36caf9(0x5a4)+'\x20effe'+'ct\x20on'+_0x36caf9(0x26d)+'ad\x20wh'+'en\x20to'+_0x36caf9(0x264)+'.')])];return[_0x414710(_0x1a9246[_0x36caf9(0x483)],_0x36caf9(0x26a)+_0x36caf9(0x663)+'\x20enti'+_0x36caf9(0x4cd)+_0x36caf9(0x50c)+_0x36caf9(0x2ab)+_0x36caf9(0x4f8)+_0x36caf9(0x3c4)+_0x36caf9(0x70b)+'\x20if\x20m'+_0x36caf9(0x5d5)+_0x36caf9(0x681)+'\x27t\x20st'+_0x36caf9(0x748),_0x2cb0cd['safeM'+_0x36caf9(0x43b)],_0x2e7095=>{var _0x4444d2=_0x36caf9;_0x2cb0cd[_0x4444d2(0x706)+'ode']=_0x2e7095,_0x55e196(),location[_0x4444d2(0x320)+'d']();},[_0x9f4083(_0x1a9246[_0x36caf9(0x5df)])]),_0x414710(_0x1a9246[_0x36caf9(0x4e4)],_0x36caf9(0x69f)+'one\x20i'+'nstal'+'ls\x20a\x20'+_0x36caf9(0x2ab)+_0x36caf9(0x288)+'oline'+_0x36caf9(0x4f2)+'the\x20w'+_0x36caf9(0x3a7)+_0x36caf9(0x670)+_0x36caf9(0x6dd)+'\x20ALL\x20'+'OFF\x20b'+_0x36caf9(0x367)+'ault\x20'+'-\x20a\x20s'+_0x36caf9(0x3bd)+_0x36caf9(0x5f1)+'hat\x20d'+'oes\x20n'+_0x36caf9(0x37c)+_0x36caf9(0x3a6)+_0x36caf9(0x249)+_0x36caf9(0x216)+'thod\x20'+'throw'+_0x36caf9(0x56c)+_0x36caf9(0x4b9)+'n\x20sig'+'natur'+_0x36caf9(0x4af)+_0x36caf9(0x6f2)+_0x36caf9(0x3cd)+'\x20mome'+'nt\x20it'+'\x20is\x20c'+_0x36caf9(0x5dc)+_0x36caf9(0x49d)+_0x36caf9(0x3b4)+_0x36caf9(0x334)+_0x36caf9(0x529)+'t\x20a\x20t'+_0x36caf9(0x50b)+_0x36caf9(0x320)+'d,\x20an'+_0x36caf9(0x556)+'\x20whic'+_0x36caf9(0x73e)+'\x20your'+'\x20buil'+_0x36caf9(0x481)+'kes\x20o'+'n.',_0x2cb0cd[_0x36caf9(0x739)+'od']||_0x2cb0cd['hookG'+'odDie']||_0x2cb0cd[_0x36caf9(0x5b1)+'oReco'+'il']||_0x2cb0cd[_0x36caf9(0x673)+_0x36caf9(0x575)+'e'],_0x3bbb3f=>{var _0x2c6984=_0x36caf9;if(_0x2c6984(0x36f)!==_0x19b055[_0x2c6984(0x299)]){var _0x5e193f=('1|4|5'+'|2|3|'+'0')[_0x2c6984(0x5b4)]('|'),_0x4d344c=-0x115b+0x169a+-0x53f;while(!![]){switch(_0x5e193f[_0x4d344c++]){case'0':_0x57ce8f[_0x2c6984(0x3f2)+'ceChi'+'ldren'](..._0x199407[_0x2c6984(0x51a)](_0x5cd875,_0x4670b2));continue;case'1':_0x3df703[_0x2c6984(0x313)]=_0x4cdfa8;continue;case'2':_0x57a0c0['textC'+_0x2c6984(0x4db)+'t']='Sakur'+_0x2c6984(0x688)+'r\x20—\x20'+_0x8763ea['label'];continue;case'3':for(var [_0x2f9357,_0x3a06ce]of _0x1e07b0)_0x3a06ce['class'+_0x2c6984(0x536)][_0x2c6984(0x4c6)+'e']('activ'+'e',_0x199407['dttyb'](_0x2f9357,_0x45cabb));continue;case'4':_0x199407['KBuUD'](_0x16af09);continue;case'5':var _0x8763ea=_0x4a1610[_0x2c6984(0x541)](_0x4586c1=>_0x4586c1['id']===_0x14ab1a)||_0x57de36[-0x11f9+0x38b*0x7+0x17*-0x4c];continue;}break;}}else{var _0x3080f8=_0x19b055[_0x2c6984(0x558)][_0x2c6984(0x5b4)]('|'),_0x3ff8d7=0x1cdf*0x1+-0x20b0+-0x1*-0x3d1;while(!![]){switch(_0x3080f8[_0x3ff8d7++]){case'0':location['reloa'+'d']();continue;case'1':_0x19b055['Fxmss'](_0x55e196);continue;case'2':_0x2cb0cd['hookC'+'aptur'+'e']=_0x3bbb3f;continue;case'3':_0x2cb0cd['hookN'+_0x2c6984(0x31a)+'il']=_0x3bbb3f;continue;case'4':_0x2cb0cd['hookG'+_0x2c6984(0x57d)]=_0x3bbb3f;continue;case'5':_0x2cb0cd[_0x2c6984(0x739)+'od']=_0x3bbb3f;continue;}break;}}},[_0x1a9246['sSnfc'](_0x9f4083,'Appli'+'es\x20on'+'\x20relo'+_0x36caf9(0x664)),_0x4619b5(_0x1a9246[_0x36caf9(0x271)],null,_0x1a9246[_0x36caf9(0x48a)](_0x5c9270,_0x2cb0cd['hookG'+'od'],_0x2c977e=>{_0x2cb0cd['hookG'+'od']=_0x2c977e,_0x55e196();})),_0x4619b5(_0x1a9246[_0x36caf9(0x521)],null,_0x5c9270(_0x2cb0cd['hookG'+_0x36caf9(0x57d)],_0x3ff08f=>{var _0x115b91=_0x36caf9;_0x199407['gIakq']('DDecz','DDecz')?(_0x399252[_0x115b91(0x704)+'oil']=_0x1bf74c,_0x13d1f4(),_0x39c68a(_0x115b91(0x704)+'oil',_0x4ea69b)):(_0x2cb0cd['hookG'+'odDie']=_0x3ff08f,_0x55e196());})),_0x1a9246['kGFjd'](_0x4619b5,'noRec'+'oil\x20('+_0x36caf9(0x519)+_0x36caf9(0x510)+_0x36caf9(0x31c)+_0x36caf9(0x65f),null,_0x1a9246[_0x36caf9(0x3e9)](_0x5c9270,_0x2cb0cd['hookN'+_0x36caf9(0x31a)+'il'],_0x9edc52=>{var _0xd5cd72=_0x36caf9;_0x2cb0cd[_0xd5cd72(0x5b1)+_0xd5cd72(0x31a)+'il']=_0x9edc52,_0x55e196();})),_0x4619b5(_0x1a9246['QzMcQ'],'no\x20ch'+_0x36caf9(0x60a)+'work\x20'+_0x36caf9(0x4f5)+_0x36caf9(0x696)+'is',_0x5c9270(_0x2cb0cd[_0x36caf9(0x673)+'aptur'+'e'],_0x26f5c2=>{var _0x34a910=_0x36caf9;_0x2cb0cd[_0x34a910(0x673)+_0x34a910(0x575)+'e']=_0x26f5c2,_0x55e196();}))]),_0x414710(_0x36caf9(0x366)+_0x36caf9(0x45d)+'r',_0x36caf9(0x497)+_0x36caf9(0x6f5)+_0x36caf9(0x2f3)+_0x36caf9(0x395)+_0x36caf9(0x269)+'ors\x20a'+'t\x20sta'+'rtup\x20'+_0x36caf9(0x2c9)+'topDe'+_0x36caf9(0x2bb)+_0x36caf9(0x59f)+_0x36caf9(0x751)+'\x20ON.',_0x2cb0cd[_0x36caf9(0x6e9)+_0x36caf9(0x6ef)],_0x555538=>{var _0x1a1141=_0x36caf9;_0x2cb0cd[_0x1a1141(0x6e9)+'ill']=_0x555538,_0x55e196();},[_0x1a9246[_0x36caf9(0x3e9)](_0x9f4083,_0x36caf9(0x485)+_0x36caf9(0x43f)+'/rapi'+'d\x20gre'+'atly\x20'+'raise'+'\x20ban\x20'+_0x36caf9(0x65b)+'even\x20'+'with\x20'+'this\x20'+_0x36caf9(0x406),!![])]),_0x1a9246['lIdNf'](_0x414710,_0x36caf9(0x6ec)+'r','These'+'\x20leav'+'e\x20ser'+_0x36caf9(0x3b8)+_0x36caf9(0x309)+_0x36caf9(0x304)+_0x36caf9(0x551),!![],null,[_0x1a9246['qkMPI'](_0x4619b5,'Wipe\x20'+_0x36caf9(0x296)+'tting'+'s',null,_0x328fe1(_0x36caf9(0x5dd),()=>{var _0x3b7f2b=_0x36caf9;_0x2cb0cd={..._0x2b4887},_0x19b055[_0x3b7f2b(0x221)](_0x55e196),location['reloa'+'d']();}))])];}var _0x392934=null;function _0x22d9a6(_0x56f351){var _0x5c061d=_0x10265c;_0x16405e=_0x56f351;if(!_0x392934){if(_0x19b055[_0x5c061d(0x4dc)]!==_0x19b055['TrClR'])_0x184162[_0x5c061d(0x2f5)](_0x6f7e6d,null);else{var _0x22d10a=document[_0x5c061d(0x65a)+'eElem'+'ent'](_0x19b055[_0x5c061d(0x5a2)]);_0x22d10a['textC'+_0x5c061d(0x4db)+'t']=_0x11b77b,_0x105f80['appen'+'dChil'+'d'](_0x22d10a),_0x392934=_0x357d0e(),_0x105f80['appen'+'dChil'+'d'](_0x392934),requestAnimationFrame(()=>_0x392934[_0x5c061d(0x6d4)+_0x5c061d(0x536)]['add'](_0x5c061d(0x357)));}}_0x392934['class'+'List'][_0x5c061d(0x4c6)+'e'](_0x19b055['mxqZS'],_0x56f351);}function _0xfeb0b1(){_0x22d9a6(!_0x16405e);}function _0x357d0e(){var _0x480bc0=_0x10265c,_0x55a49e={'BkSWr':function(_0x281264){var _0x3da4d5=_0x4a0e;return _0x1a9246[_0x3da4d5(0x700)](_0x281264);},'rXfAv':function(_0x10b0cf,_0x3d0473){var _0x39f086=_0x4a0e;return _0x1a9246[_0x39f086(0x28b)](_0x10b0cf,_0x3d0473);},'BJyQY':_0x1a9246[_0x480bc0(0x73a)]},_0x43a118=document[_0x480bc0(0x65a)+'eElem'+'ent'](_0x1a9246[_0x480bc0(0x458)]);_0x43a118['class'+'Name']=_0x480bc0(0x4f3)+'nel';var _0x321542=document['creat'+'eElem'+'ent']('nav');_0x321542['class'+'Name']='mn-si'+'de';var _0x1f51be=document[_0x480bc0(0x65a)+_0x480bc0(0x449)+_0x480bc0(0x62b)]('div');_0x1f51be[_0x480bc0(0x6d4)+'Name']=_0x480bc0(0x703)+'go',_0x1f51be[_0x480bc0(0x523)+_0x480bc0(0x5ef)]=_0x480bc0(0x6a0)+'viewB'+'ox=\x220'+_0x480bc0(0x730)+_0x480bc0(0x211)+_0x480bc0(0x6d4)+_0x480bc0(0x3c5)+_0x480bc0(0x5f2)+'svg\x22>'+'<path'+_0x480bc0(0x3c7)+'12\x2021'+'c-1.5'+'-2.5-'+_0x480bc0(0x717)+_0x480bc0(0x724)+'5\x200-2'+_0x480bc0(0x448)+'8-4.5'+_0x480bc0(0x452)+_0x480bc0(0x610)+_0x480bc0(0x260)+'5c0\x203'+_0x480bc0(0x4f4)+_0x480bc0(0x60f)+_0x480bc0(0x4a0)+'fill='+_0x480bc0(0x384)+'\x22\x20str'+_0x480bc0(0x5a7)+'#ff6b'+'9d\x22\x20s'+_0x480bc0(0x32d)+'-widt'+'h=\x222\x22'+_0x480bc0(0x645)+'ke-li'+'necap'+'=\x22rou'+_0x480bc0(0x464)+_0x480bc0(0x32d)+_0x480bc0(0x4d1)+_0x480bc0(0x3fb)+'\x22roun'+'d\x22/><'+_0x480bc0(0x3a0)+_0x480bc0(0x50e)+_0x480bc0(0x6fd)+_0x480bc0(0x643)+'0\x22\x20r='+_0x480bc0(0x487)+'\x20fill'+_0x480bc0(0x3dd)+'6b9d\x22'+_0x480bc0(0x3d2)+_0x480bc0(0x441),_0x321542[_0x480bc0(0x586)+'dChil'+'d'](_0x1f51be);var _0x128d09=document['creat'+_0x480bc0(0x449)+'ent'](_0x1a9246[_0x480bc0(0x458)]);_0x128d09['class'+_0x480bc0(0x4bd)]='mn-ma'+'in';var _0x315672=document[_0x480bc0(0x65a)+'eElem'+_0x480bc0(0x62b)]('heade'+'r');_0x315672['class'+'Name']=_0x1a9246['DGiqp'];var _0x1573a3=document[_0x480bc0(0x65a)+'eElem'+'ent']('div');_0x1573a3['class'+'Name']=_0x480bc0(0x5a0)+_0x480bc0(0x5ae);var _0x3182d9=document[_0x480bc0(0x65a)+_0x480bc0(0x449)+'ent']('h2');_0x3182d9[_0x480bc0(0x6d4)+'Name']=_0x480bc0(0x23a),_0x3182d9['textC'+_0x480bc0(0x4db)+'t']=_0x1a9246[_0x480bc0(0x5cb)];var _0x29db12=document[_0x480bc0(0x65a)+_0x480bc0(0x449)+_0x480bc0(0x62b)](_0x1a9246['lauEX']);_0x29db12['class'+_0x480bc0(0x4bd)]=_0x480bc0(0x45e)+'b',_0x29db12['textC'+'onten'+'t']='kours'+_0x480bc0(0x240)+_0x480bc0(0x598)+_0x480bc0(0x373),_0x1573a3[_0x480bc0(0x586)+'d'](_0x3182d9,_0x29db12);var _0x52390d=document['creat'+'eElem'+_0x480bc0(0x62b)](_0x480bc0(0x424)+'n');_0x52390d['type']=_0x1a9246[_0x480bc0(0x727)],_0x52390d[_0x480bc0(0x6d4)+_0x480bc0(0x4bd)]=_0x1a9246['sMazm'],_0x52390d['title']=_0x480bc0(0x461),_0x52390d['inner'+_0x480bc0(0x5ef)]='<svg\x20'+_0x480bc0(0x208)+_0x480bc0(0x5bf)+_0x480bc0(0x730)+_0x480bc0(0x4f7)+_0x480bc0(0x426)+'\x20d=\x22M'+'6\x206l1'+_0x480bc0(0x3af)+'18\x206\x20'+_0x480bc0(0x3fa)+_0x480bc0(0x3d2)+'vg>',_0x52390d['oncli'+'ck']=()=>_0x22d9a6(![]),_0x315672['appen'+'d'](_0x1573a3,_0x52390d);var _0x3d229e=document['creat'+_0x480bc0(0x449)+_0x480bc0(0x62b)](_0x480bc0(0x660));_0x3d229e[_0x480bc0(0x6d4)+_0x480bc0(0x4bd)]='mn-co'+'ls',_0x128d09[_0x480bc0(0x586)+'d'](_0x315672,_0x3d229e),_0x43a118['appen'+'d'](_0x321542,_0x128d09);var _0x391371=new Map();for(var _0x4a3538 of _0x39056e){var _0x3ce6c3=document['creat'+_0x480bc0(0x449)+_0x480bc0(0x62b)](_0x480bc0(0x424)+'n');_0x3ce6c3['type']=_0x1a9246['CmcuL'],_0x3ce6c3[_0x480bc0(0x6d4)+_0x480bc0(0x4bd)]=_0x480bc0(0x490)+'b',_0x3ce6c3[_0x480bc0(0x70a)]=_0x4a3538[_0x480bc0(0x4ed)],_0x3ce6c3[_0x480bc0(0x523)+_0x480bc0(0x5ef)]='<smal'+'l>'+_0x4a3538['label']+_0x1a9246[_0x480bc0(0x28a)],_0x3ce6c3[_0x480bc0(0x239)+'ck']=(_0xa46f7b=>()=>_0x5f0c1a(_0xa46f7b))(_0x4a3538['id']),_0x391371['set'](_0x4a3538['id'],_0x3ce6c3),_0x321542[_0x480bc0(0x586)+_0x480bc0(0x2ad)+'d'](_0x3ce6c3);}function _0x5f0c1a(_0x2b7398){var _0x225c82=_0x480bc0;_0xbc46eb[_0x225c82(0x313)]=_0x2b7398,_0x55a49e['BkSWr'](_0x466253);var _0x3788b0=_0x39056e['find'](_0x2e09ca=>_0x2e09ca['id']===_0x2b7398)||_0x39056e[0x1*0x17b3+0x71*0x49+-0x37ec];_0x3182d9['textC'+_0x225c82(0x4db)+'t']=_0x55a49e[_0x225c82(0x6a2)](_0x225c82(0x6ee)+'a\x20Kou'+_0x225c82(0x701),_0x3788b0['label']);for(var [_0x3b9d52,_0x255879]of _0x391371)_0x255879['class'+_0x225c82(0x536)]['toggl'+'e'](_0x55a49e[_0x225c82(0x584)],_0x3b9d52===_0x2b7398);_0x3d229e[_0x225c82(0x3f2)+_0x225c82(0x603)+_0x225c82(0x5c8)](..._0x3b381d(_0x2b7398));}return _0x1a9246[_0x480bc0(0x325)](_0x5f0c1a,_0xbc46eb['cat']||_0x480bc0(0x38c)+'t'),setInterval(()=>{var _0x11399a=_0x480bc0;if(!_0x16405e)return;var _0x27f9a0=_0x3d229e[_0x11399a(0x67c)+_0x11399a(0x3fe)];for(var _0x229cf9=-0x1336+-0x175*-0xd+0x45;_0x19b055[_0x11399a(0x232)](_0x229cf9,_0x27f9a0['lengt'+'h']);_0x229cf9++){var _0x3bd786=_0x27f9a0[_0x229cf9]['query'+'Selec'+_0x11399a(0x756)](_0x11399a(0x303)+_0x11399a(0x41b));_0x3bd786&&(_0x19b055['iJGEq'](_0x3bd786[_0x11399a(0x52c)+_0x11399a(0x4db)+'t']['index'+'Of']('UWMK'),0x1*-0x1dfe+0x1*-0x91d+0x271b)||_0x19b055['YJhsv'](_0x3bd786[_0x11399a(0x52c)+_0x11399a(0x4db)+'t']['index'+'Of'](_0x11399a(0x611)),0x39a+-0x21f1+0x1e57))&&(_0x19b055['pcEtT'](_0x19b055['aMXlU'],_0x19b055[_0x11399a(0x446)])?_0x3bd786[_0x11399a(0x52c)+_0x11399a(0x4db)+'t']=_0x5ee1ce['safeM'+_0x11399a(0x43b)]?'SAFE\x20'+'MODE\x20'+'-\x20ove'+_0x11399a(0x569)+_0x11399a(0x3ff)+'\x20no\x20h'+'ooks\x20'+_0x11399a(0x393)+_0x11399a(0x647)+_0x11399a(0x57e)+')':_0x5ee1ce[_0x11399a(0x5b3)]?_0x19b055['FxyPe'](_0x19b055['cCxyo'](_0x19b055[_0x11399a(0x36b)](_0x19b055['Beqjk'](_0x19b055['lkTsk']+(_0x5ee1ce['hooks'+'Total']?_0x19b055[_0x11399a(0x2f7)](_0x5ee1ce['hooks'+'Ok']+'/'+_0x5ee1ce['hooks'+_0x11399a(0x415)],'\x20hook'+'s'):_0x19b055[_0x11399a(0x67e)]),'\x20|\x20ga'+'me\x20')+(_0x5ee1ce['gameL'+_0x11399a(0x712)]?_0x11399a(0x5c6)+'d':_0x19b055[_0x11399a(0x47d)]),_0x19b055[_0x11399a(0x39b)]),_0x5ee1ce[_0x11399a(0x509)+'ers']?'held':'none')+('\x20|\x20mo'+'vemen'+'t\x20')+(_0x5ee1ce['movem'+_0x11399a(0x4d7)]?_0x11399a(0x235):_0x19b055[_0x11399a(0x36d)]),_0x5ee1ce[_0x11399a(0x4cc)+'rror']?_0x19b055[_0x11399a(0x2f7)]('\x20|\x20ER'+_0x11399a(0x1fe),_0x5ee1ce[_0x11399a(0x4cc)+'rror']):''):_0x19b055['zVpgk']:(_0x452a42['ksSca'+'le']=_0x35da8e,_0x98b214()));}},-0x2623*-0x1+0x2595*0x1+0x2*-0x23e8),_0x43a118;}var _0x11b77b=_0x10265c(0x6b9)+':host'+'\x20{\x20al'+'l:\x20in'+'itial'+_0x10265c(0x428)+'\x20\x20\x20*\x20'+'{\x20box'+_0x10265c(0x1f9)+_0x10265c(0x6be)+_0x10265c(0x4e2)+'-box;'+_0x10265c(0x279)+'in:\x200'+_0x10265c(0x6ff)+'t-fam'+'ily:\x20'+'\x22Inte'+'r\x22,\x20\x22'+_0x10265c(0x715)+_0x10265c(0x2c6)+'\x20syst'+_0x10265c(0x241)+',\x20san'+_0x10265c(0x2ea)+'if;\x20}'+'\x0a\x20\x20\x20\x20'+_0x10265c(0x4f6)+_0x10265c(0x2c0)+_0x10265c(0x3c9)+_0x10265c(0x74e)+':\x20abs'+'olute'+_0x10265c(0x46d)+_0x10265c(0x28e)+'4px;\x20'+'botto'+'m:\x2024'+_0x10265c(0x5fb)+_0x10265c(0x2bf)+_0x10265c(0x315)+_0x10265c(0x362)+',\x20cal'+'c(100'+'vw\x20-\x20'+_0x10265c(0x332)+_0x10265c(0x369)+_0x10265c(0x4a1)+_0x10265c(0x2eb)+_0x10265c(0x736)+_0x10265c(0x30d)+'\x20calc'+'(100v'+'h\x20-\x204'+'8px))'+';\x0a\x20\x20\x20'+_0x10265c(0x2d1)+_0x10265c(0x61d)+_0x10265c(0x6c4)+'x;\x20ga'+_0x10265c(0x66a)+'px;\x20p'+_0x10265c(0x2d7)+_0x10265c(0x2b1)+_0x10265c(0x3e7)+_0x10265c(0x4e2)+_0x10265c(0x273)+_0x10265c(0x3d0)+_0x10265c(0x59d)+_0x10265c(0x21c)+_0x10265c(0x4b8)+_0x10265c(0x496)+'\x20auto'+_0x10265c(0x596)+_0x10265c(0x2da)+'ckgro'+'und:\x20'+_0x10265c(0x48f)+_0x10265c(0x6f9)+_0x10265c(0x24f)+_0x10265c(0x4de)+_0x10265c(0x370)+_0x10265c(0x5b5)+_0x10265c(0x679)+':\x20blu'+_0x10265c(0x2f0)+_0x10265c(0x2fd)+_0x10265c(0x219)+_0x10265c(0x5e7)+'%);\x20-'+'webki'+'t-bac'+'kdrop'+'-filt'+_0x10265c(0x2be)+_0x10265c(0x66b)+_0x10265c(0x4fb)+_0x10265c(0x360)+'ate(1'+_0x10265c(0x37b)+'\x0a\x20\x20\x20\x20'+_0x10265c(0x2e3)+_0x10265c(0x702)+_0x10265c(0x3ed)+_0x10265c(0x51e)+_0x10265c(0x44f)+'gba(2'+'55,25'+'5,255'+',.06)'+',\x20ins'+_0x10265c(0x515)+_0x10265c(0x582)+'\x20rgba'+'(255,'+_0x10265c(0x6d3)+'55,.0'+_0x10265c(0x432)+'\x2030px'+_0x10265c(0x337)+'\x20rgba'+'(0,0,'+_0x10265c(0x202)+');\x0a\x20\x20'+_0x10265c(0x56f)+_0x10265c(0x4e3)+'y:\x200;'+'\x20tran'+_0x10265c(0x380)+':\x20tra'+_0x10265c(0x25a)+_0x10265c(0x508)+_0x10265c(0x23e)+_0x10265c(0x21c)+_0x10265c(0x4b8)+_0x10265c(0x496)+_0x10265c(0x233)+';\x20tra'+'nsiti'+_0x10265c(0x597)+_0x10265c(0x4e3)+_0x10265c(0x73c)+_0x10265c(0x339)+_0x10265c(0x711)+_0x10265c(0x46a)+'rm\x20.4'+'5s\x20cu'+_0x10265c(0x5be)+'ezier'+_0x10265c(0x51b)+_0x10265c(0x200)+_0x10265c(0x306)+_0x10265c(0x300)+'\x20colo'+'r:\x20#f'+'6eef2'+_0x10265c(0x6ff)+_0x10265c(0x336)+_0x10265c(0x507)+_0x10265c(0x33f)+_0x10265c(0x6b9)+_0x10265c(0x4f6)+_0x10265c(0x31f)+'shown'+_0x10265c(0x37f)+_0x10265c(0x545)+':\x201;\x20'+'trans'+_0x10265c(0x6e0)+'\x20none'+';\x20poi'+_0x10265c(0x410)+_0x10265c(0x34d)+'s:\x20au'+'to;\x20}'+_0x10265c(0x6b9)+_0x10265c(0x346)+_0x10265c(0x539)+_0x10265c(0x60c)+'lay:\x20'+_0x10265c(0x671)+_0x10265c(0x631)+'-dire'+'ction'+_0x10265c(0x2b6)+'umn;\x20'+_0x10265c(0x2db)+_0x10265c(0x2c7)+'s:\x20ce'+'nter;'+'\x20gap:'+_0x10265c(0x42a)+'\x20widt'+_0x10265c(0x394)+_0x10265c(0x668)+_0x10265c(0x2e2)+_0x10265c(0x6e2)+'\x20padd'+_0x10265c(0x544)+_0x10265c(0x54e)+(_0x10265c(0x572)+_0x10265c(0x600)+'radiu'+_0x10265c(0x2e5)+_0x10265c(0x71d)+_0x10265c(0x300)+_0x10265c(0x672)+_0x10265c(0x6d8)+_0x10265c(0x74f)+_0x10265c(0x276)+_0x10265c(0x5db)+'255,.'+_0x10265c(0x3d7)+_0x10265c(0x53e)+_0x10265c(0x27d)+_0x10265c(0x6e7)+_0x10265c(0x68b)+_0x10265c(0x51e)+'1px\x20r'+'gba(2'+_0x10265c(0x1f4)+'5,255'+',.05)'+';\x20}\x0a\x20'+_0x10265c(0x6ca)+_0x10265c(0x3ec)+_0x10265c(0x4eb)+_0x10265c(0x29b)+'y:\x20gr'+'id;\x20p'+_0x10265c(0x2a7)+'items'+':\x20cen'+_0x10265c(0x3be)+_0x10265c(0x6ba)+':\x2032p'+_0x10265c(0x52b)+'ight:'+'\x2032px'+_0x10265c(0x428)+_0x10265c(0x6ca)+'n-log'+_0x10265c(0x3e0)+'\x20{\x20wi'+_0x10265c(0x740)+_0x10265c(0x3d6)+_0x10265c(0x6fa)+'ht:\x202'+_0x10265c(0x244)+'overf'+'low:\x20'+'visib'+_0x10265c(0x26f)+_0x10265c(0x679)+':\x20dro'+_0x10265c(0x453)+_0x10265c(0x1fc)+'\x200\x204p'+_0x10265c(0x40f)+'a(255'+_0x10265c(0x54d)+'157,.'+'8));\x20'+'}\x0a\x20\x20\x20'+_0x10265c(0x435)+'tab\x20{'+'\x20disp'+_0x10265c(0x30b)+_0x10265c(0x671)+_0x10265c(0x213)+_0x10265c(0x504)+_0x10265c(0x5ad)+_0x10265c(0x4bc)+';\x20jus'+_0x10265c(0x2df)+_0x10265c(0x648)+_0x10265c(0x2d0)+_0x10265c(0x4bc)+_0x10265c(0x2ae)+_0x10265c(0x444)+_0x10265c(0x59d)+_0x10265c(0x58b)+_0x10265c(0x24a)+_0x10265c(0x3e7)+_0x10265c(0x4e2)+_0x10265c(0x2b8)+_0x10265c(0x6af)+_0x10265c(0x3ee)+'ius:\x20'+'10px;'+_0x10265c(0x6b9)+_0x10265c(0x54f)+_0x10265c(0x5c4)+_0x10265c(0x5f5)+_0x10265c(0x3f6)+_0x10265c(0x6de)+';\x20col'+'or:\x20r'+_0x10265c(0x32f)+_0x10265c(0x42b)+'8,242'+_0x10265c(0x4b3)+_0x10265c(0x5f0)+_0x10265c(0x4ad)+_0x10265c(0x50d)+_0x10265c(0x363)+_0x10265c(0x5ac)+'ze:\x201'+'0px;\x20'+_0x10265c(0x6fe)+_0x10265c(0x55b)+'t:\x2070'+_0x10265c(0x351)+_0x10265c(0x2e4)+_0x10265c(0x490)+'b:hov'+_0x10265c(0x3bf)+_0x10265c(0x32b)+_0x10265c(0x74f)+'a(246'+',238,'+'242,.'+_0x10265c(0x3e6)+_0x10265c(0x6b9)+_0x10265c(0x658)+'ab.ac'+'tive\x20'+'{\x20col'+_0x10265c(0x70c)+_0x10265c(0x423)+_0x10265c(0x656)+_0x10265c(0x758)+_0x10265c(0x657)+_0x10265c(0x48f)+_0x10265c(0x364)+'07,15'+'7,.1)'+';\x20}\x0a\x20'+_0x10265c(0x6ca)+_0x10265c(0x20e)+'n\x20{\x20f'+_0x10265c(0x2e2)+_0x10265c(0x4e6)+'n-wid'+'th:\x200'+';\x20dis'+_0x10265c(0x564)+_0x10265c(0x631)+_0x10265c(0x254)+_0x10265c(0x310)+'ectio'+_0x10265c(0x1fa)+_0x10265c(0x4ef)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x10265c(0x752)+_0x10265c(0x21f)+'play:'+_0x10265c(0x631)+_0x10265c(0x4be)+_0x10265c(0x6d6)+'ems:\x20'+'cente'+_0x10265c(0x562)+_0x10265c(0x3e1)+_0x10265c(0x734)+_0x10265c(0x2d7)+'g:\x206p'+'x\x206px'+'\x2012px'+';\x20use'+_0x10265c(0x427)+_0x10265c(0x759)+_0x10265c(0x6e2)+_0x10265c(0x68d)+_0x10265c(0x58e)+'-titl'+'es\x20{\x20'+_0x10265c(0x62f)+_0x10265c(0x3d3)+'in-wi'+'dth:\x20'+_0x10265c(0x351)+'\x20\x20\x20\x20.'+'mn-h\x20'+_0x10265c(0x29c)+'t-siz'+_0x10265c(0x6e6)+_0x10265c(0x668)+_0x10265c(0x3ba)+_0x10265c(0x595)+_0x10265c(0x305)+_0x10265c(0x428)+'\x20\x20\x20.m'+_0x10265c(0x75a)+'\x20{\x20fo'+_0x10265c(0x5ac)+'ze:\x201'+_0x10265c(0x258)+'opaci')+('ty:\x20.'+'4;\x20}\x0a'+_0x10265c(0x2e4)+_0x10265c(0x652)+'ose\x20{'+_0x10265c(0x60c)+_0x10265c(0x30b)+_0x10265c(0x333)+'\x20plac'+_0x10265c(0x56b)+'ms:\x20c'+_0x10265c(0x4bc)+';\x20wid'+_0x10265c(0x64e)+_0x10265c(0x6f7)+'heigh'+_0x10265c(0x71c)+_0x10265c(0x3e7)+_0x10265c(0x4e2)+_0x10265c(0x2b8)+_0x10265c(0x6af)+_0x10265c(0x3ee)+_0x10265c(0x44c)+_0x10265c(0x6f7)+_0x10265c(0x672)+_0x10265c(0x6d8)+':\x20tra'+'nspar'+'ent;\x20'+_0x10265c(0x32b)+_0x10265c(0x499)+_0x10265c(0x29f)+_0x10265c(0x5ec)+_0x10265c(0x20a)+'.45;\x20'+_0x10265c(0x390)+'r:\x20po'+'inter'+_0x10265c(0x428)+_0x10265c(0x6ca)+'n-clo'+'se:ho'+_0x10265c(0x2f2)+'\x20opac'+'ity:\x20'+_0x10265c(0x4c0)+'ckgro'+_0x10265c(0x657)+_0x10265c(0x48f)+_0x10265c(0x6d3)+_0x10265c(0x1f4)+'5,.05'+_0x10265c(0x3e8)+'\x20\x20\x20\x20.'+_0x10265c(0x652)+_0x10265c(0x61e)+_0x10265c(0x5e3)+_0x10265c(0x6ba)+_0x10265c(0x5b6)+_0x10265c(0x52b)+_0x10265c(0x605)+_0x10265c(0x5b7)+';\x20fil'+'l:\x20no'+'ne;\x20s'+'troke'+_0x10265c(0x25b)+'rentC'+_0x10265c(0x517)+_0x10265c(0x645)+'ke-wi'+_0x10265c(0x740)+_0x10265c(0x43a)+_0x10265c(0x549)+_0x10265c(0x301)+'ap:\x20r'+_0x10265c(0x29e)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x10265c(0x214)+_0x10265c(0x6a8)+'ex:\x201'+_0x10265c(0x30e)+_0x10265c(0x5b8)+'ht:\x200'+_0x10265c(0x4bb)+_0x10265c(0x4b0)+'-y:\x20a'+_0x10265c(0x2ba)+_0x10265c(0x246)+_0x10265c(0x4ca)+_0x10265c(0x2ef)+'grid-'+_0x10265c(0x4a9)+_0x10265c(0x74d)+_0x10265c(0x386)+'s:\x20re'+_0x10265c(0x4f0)+'auto-'+_0x10265c(0x425)+'\x20minm'+_0x10265c(0x2a2)+'0px,\x20'+'1fr))'+_0x10265c(0x4be)+'gn-it'+_0x10265c(0x51d)+'start'+';\x20ali'+_0x10265c(0x4e8)+_0x10265c(0x53f)+_0x10265c(0x6b3)+_0x10265c(0x69d)+_0x10265c(0x52f)+_0x10265c(0x2de)+'paddi'+'ng:\x200'+_0x10265c(0x477)+'6px\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-col'+'s::-w'+_0x10265c(0x3cc)+_0x10265c(0x4cf)+'llbar'+_0x10265c(0x268)+_0x10265c(0x740)+_0x10265c(0x6f7)+'}\x0a\x20\x20\x20'+'\x20.mn-'+'cols:'+_0x10265c(0x4a3)+_0x10265c(0x618)+'croll'+_0x10265c(0x250)+'humb\x20'+_0x10265c(0x37e)+'kgrou'+_0x10265c(0x5a9)+'gba(2'+_0x10265c(0x1f4)+'5,255'+',.08)'+_0x10265c(0x38a)+_0x10265c(0x6eb)+_0x10265c(0x237)+_0x10265c(0x382)+_0x10265c(0x428)+'\x20\x20\x20.s'+'k-car'+_0x10265c(0x4a2)+_0x10265c(0x4e2)+_0x10265c(0x273)+'us:\x201'+'2px;\x20'+'backg'+_0x10265c(0x6d8)+':\x20rgb'+'a(255'+_0x10265c(0x5db)+'255,.'+_0x10265c(0x3d7)+_0x10265c(0x53e)+_0x10265c(0x27d)+_0x10265c(0x6e7)+'set\x200'+_0x10265c(0x51e)+'1px\x20r'+_0x10265c(0x32f)+'55,25'+'5,255'+_0x10265c(0x484)+_0x10265c(0x428)+'\x20\x20\x20.s'+_0x10265c(0x5f4)+_0x10265c(0x230)+_0x10265c(0x37e)+_0x10265c(0x5c4)+_0x10265c(0x5a9)+'gba(2'+'55,25'+_0x10265c(0x574)+',.04)'+';\x20box'+_0x10265c(0x702)+_0x10265c(0x3d4)+'nset\x20'+_0x10265c(0x567)+'\x201px\x20'+_0x10265c(0x48f)+_0x10265c(0x364)+_0x10265c(0x27e)+_0x10265c(0x65e)+');\x20}\x0a'+_0x10265c(0x2e4)+_0x10265c(0x5d4)+_0x10265c(0x2ed)+'ad\x20{\x20'+_0x10265c(0x246))+('ay:\x20f'+'lex;\x20'+'align'+_0x10265c(0x2c7)+'s:\x20ce'+'nter;'+'\x20gap:'+_0x10265c(0x25c)+'\x20padd'+'ing:\x20'+_0x10265c(0x353)+_0x10265c(0x67f)+_0x10265c(0x68d)+_0x10265c(0x33d)+_0x10265c(0x22e)+'-titl'+_0x10265c(0x5f6)+'lex:\x20'+_0x10265c(0x4e6)+'n-wid'+'th:\x200'+_0x10265c(0x428)+'\x20\x20\x20.s'+_0x10265c(0x5f4)+_0x10265c(0x6b6)+'le\x20st'+'rong\x20'+_0x10265c(0x29c)+'t-siz'+'e:\x2013'+'px;\x20f'+'ont-w'+_0x10265c(0x595)+':\x20600'+_0x10265c(0x331)+_0x10265c(0x24d)+_0x10265c(0x32f)+_0x10265c(0x42b)+'8,242'+_0x10265c(0x54b)+';\x20}\x0a\x20'+_0x10265c(0x6ad)+'k-car'+_0x10265c(0x230)+'.sk-c'+'ard-t'+_0x10265c(0x5fe)+_0x10265c(0x251)+'g\x20{\x20c'+_0x10265c(0x3f5)+_0x10265c(0x570)+'0f5;\x20'+_0x10265c(0x35e)+_0x10265c(0x486)+_0x10265c(0x59c)+'\x20{\x20pa'+_0x10265c(0x6cc)+':\x200\x201'+'2px\x201'+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x10265c(0x486)+_0x10265c(0x56a)+'\x20{\x20fo'+_0x10265c(0x5ac)+_0x10265c(0x666)+_0x10265c(0x258)+'opaci'+_0x10265c(0x28c)+_0x10265c(0x738)+'rgin-'+'botto'+'m:\x206p'+_0x10265c(0x71e)+_0x10265c(0x2e4)+'sk-ct'+_0x10265c(0x409)+_0x10265c(0x29b)+_0x10265c(0x577)+'ex;\x20a'+'lign-'+_0x10265c(0x65d)+':\x20cen'+'ter;\x20'+'gap:\x20'+_0x10265c(0x6f7)+_0x10265c(0x4b5)+'ng:\x204'+_0x10265c(0x67a)+_0x10265c(0x5cc)+_0x10265c(0x41f)+_0x10265c(0x651)+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x10265c(0x486)+_0x10265c(0x4ed)+'\x20{\x20fl'+_0x10265c(0x6c5)+_0x10265c(0x331)+_0x10265c(0x24d)+_0x10265c(0x32f)+_0x10265c(0x42b)+_0x10265c(0x59e)+',.75)'+_0x10265c(0x428)+_0x10265c(0x6ad)+_0x10265c(0x3d8)+'t\x20{\x20d'+_0x10265c(0x29b)+_0x10265c(0x542)+'ock;\x20'+'font-'+'size:'+'\x2010px'+';\x20opa'+_0x10265c(0x2a4)+_0x10265c(0x317)+_0x10265c(0x35e)+'\x20.sk-'+'switc'+'h\x20{\x20p'+_0x10265c(0x630)+_0x10265c(0x70f)+_0x10265c(0x6e1)+_0x10265c(0x26c)+'idth:'+'\x2026px'+';\x20hei'+_0x10265c(0x2eb)+_0x10265c(0x52e)+_0x10265c(0x62e)+_0x10265c(0x40c)+';\x20bor'+_0x10265c(0x6eb)+_0x10265c(0x237)+':\x2099p'+_0x10265c(0x722)+_0x10265c(0x758)+'und:\x20'+_0x10265c(0x48f)+_0x10265c(0x6d3)+'55,25'+_0x10265c(0x40d)+');\x20cu'+'rsor:'+'\x20poin'+_0x10265c(0x3be)+_0x10265c(0x62f)+'\x20none'+';\x20}\x0a\x20'+_0x10265c(0x6ad)+'k-swi'+_0x10265c(0x28d)+'after'+'\x20{\x20co'+_0x10265c(0x53f)+_0x10265c(0x659)+_0x10265c(0x6d9)+_0x10265c(0x3cf)+_0x10265c(0x71b)+_0x10265c(0x44b)+_0x10265c(0x4c3)+'\x203px;'+'\x20left'+_0x10265c(0x2f6)+';\x20wid'+_0x10265c(0x754)+_0x10265c(0x676)+_0x10265c(0x595)+_0x10265c(0x4ea)+';\x20bor'+_0x10265c(0x6eb)+'adius'+_0x10265c(0x27a)+';\x20bac'+_0x10265c(0x5c4)+_0x10265c(0x5a9)+_0x10265c(0x32f)+'55,25'+_0x10265c(0x574)+',.25)'+';\x20tra'+_0x10265c(0x47e)+'on:\x20l'+_0x10265c(0x319)+_0x10265c(0x465)+'ackgr'+'ound\x20'+_0x10265c(0x2bd)+_0x10265c(0x35e)+_0x10265c(0x486)+'switc'+'h[ari'+_0x10265c(0x457)+_0x10265c(0x272)+_0x10265c(0x2c4)+'\x22]\x20{\x20'+_0x10265c(0x672)+_0x10265c(0x6d8)+':\x20rgb')+('a(255'+_0x10265c(0x54d)+_0x10265c(0x594)+_0x10265c(0x4c1)+_0x10265c(0x35e)+_0x10265c(0x486)+'switc'+_0x10265c(0x692)+_0x10265c(0x457)+'cked='+_0x10265c(0x2c4)+_0x10265c(0x4c4)+'fter\x20'+_0x10265c(0x20d)+_0x10265c(0x33a)+_0x10265c(0x3e7)+_0x10265c(0x267)+_0x10265c(0x604)+_0x10265c(0x41a)+_0x10265c(0x638)+'}\x0a\x20\x20\x20'+_0x10265c(0x486)+'field'+'\x20{\x20ba'+'ckgro'+_0x10265c(0x657)+_0x10265c(0x48f)+'255,2'+'55,25'+_0x10265c(0x2ac)+_0x10265c(0x253)+_0x10265c(0x4e2)+':\x200;\x20'+_0x10265c(0x6af)+_0x10265c(0x3ee)+_0x10265c(0x44c)+_0x10265c(0x43d)+'color'+_0x10265c(0x633)+_0x10265c(0x275)+_0x10265c(0x354)+_0x10265c(0x544)+_0x10265c(0x578)+_0x10265c(0x668)+'ont-s'+_0x10265c(0x743)+_0x10265c(0x64b)+_0x10265c(0x433)+'tline'+':\x20non'+_0x10265c(0x24e)+_0x10265c(0x43e)+_0x10265c(0x45b)+_0x10265c(0x1f5)+'\x200\x200\x20'+_0x10265c(0x2d8)+'\x20rgba'+'(255,'+'255,2'+_0x10265c(0x41c)+_0x10265c(0x2b5)+_0x10265c(0x6b9)+'.sk-f'+_0x10265c(0x675)+_0x10265c(0x4d0)+_0x10265c(0x32c)+'ackgr'+'ound:'+'\x20#221'+_0x10265c(0x3a3)+'}\x0a\x20\x20\x20'+_0x10265c(0x486)+_0x10265c(0x473)+_0x10265c(0x5e4)+'splay'+':\x20fle'+'x;\x20al'+_0x10265c(0x416)+_0x10265c(0x5e2)+_0x10265c(0x599)+'er;\x20g'+'ap:\x208'+'px;\x20}'+_0x10265c(0x6b9)+'.sk-s'+_0x10265c(0x72d)+'\x20{\x20-w'+_0x10265c(0x3cc)+_0x10265c(0x24c)+'aranc'+_0x10265c(0x293)+'ne;\x20a'+_0x10265c(0x57c)+_0x10265c(0x3c1)+'\x20none'+';\x20wid'+_0x10265c(0x23d)+_0x10265c(0x2de)+_0x10265c(0x58b)+_0x10265c(0x634)+_0x10265c(0x722)+_0x10265c(0x758)+'und:\x20'+_0x10265c(0x5f7)+'paren'+_0x10265c(0x6bf)+_0x10265c(0x2e4)+'sk-sl'+_0x10265c(0x48c)+_0x10265c(0x4a3)+_0x10265c(0x618)+'lider'+'-runn'+_0x10265c(0x2ec)+'track'+_0x10265c(0x5f9)+_0x10265c(0x605)+_0x10265c(0x6db)+_0x10265c(0x62e)+_0x10265c(0x2f4)+'dius:'+_0x10265c(0x6db)+_0x10265c(0x683)+_0x10265c(0x616)+'d:\x20li'+_0x10265c(0x662)+'gradi'+_0x10265c(0x263)+'ff6b9'+'d,\x20#f'+'f6b9d'+')\x200\x200'+_0x10265c(0x438)+_0x10265c(0x236)+_0x10265c(0x40a)+')\x20100'+'%\x20no-'+_0x10265c(0x40e)+'t,\x20rg'+_0x10265c(0x3ce)+_0x10265c(0x574)+',255,'+_0x10265c(0x270)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-slid'+'er::-'+_0x10265c(0x291)+_0x10265c(0x5f8)+'der-t'+_0x10265c(0x75b)+_0x10265c(0x514)+'bkit-'+_0x10265c(0x5b2)+'rance'+':\x20non'+_0x10265c(0x255)+_0x10265c(0x740)+_0x10265c(0x43d)+_0x10265c(0x58b)+_0x10265c(0x375)+_0x10265c(0x212)+'rgin-'+_0x10265c(0x408)+_0x10265c(0x2d6)+_0x10265c(0x62e)+_0x10265c(0x2f4)+'dius:'+_0x10265c(0x653)+_0x10265c(0x683)+_0x10265c(0x616)+_0x10265c(0x204)+'f6b9d'+_0x10265c(0x428)+_0x10265c(0x6ad)+'k-val'+_0x10265c(0x733)+_0x10265c(0x5ac)+'ze:\x201'+_0x10265c(0x258)+'font-'+'weigh'+'t:\x2060'+_0x10265c(0x430)+_0x10265c(0x450)+_0x10265c(0x64e)+_0x10265c(0x6f7)+_0x10265c(0x6d0)+_0x10265c(0x2db)+_0x10265c(0x68e)+'ht;\x20c'+_0x10265c(0x3f5)+'\x20rgba'+'(246,'+_0x10265c(0x3b2)+'42,.8'+_0x10265c(0x3e8)+_0x10265c(0x2e4)+_0x10265c(0x5ff)+_0x10265c(0x3ab))+(_0x10265c(0x2fe)+_0x10265c(0x67b)+'px;\x20h'+'eight'+':\x2022p'+'x;\x20bo'+_0x10265c(0x29a)+'\x200;\x20b'+_0x10265c(0x4e2)+'-radi'+_0x10265c(0x565)+_0x10265c(0x3e7)+_0x10265c(0x267)+'ound:'+_0x10265c(0x233)+';\x20pad'+'ding:'+_0x10265c(0x608)+_0x10265c(0x4e1)+':\x20poi'+_0x10265c(0x3f1)+_0x10265c(0x68d)+'\x20\x20.sk'+'-note'+_0x10265c(0x733)+'nt-si'+_0x10265c(0x666)+_0x10265c(0x258)+_0x10265c(0x32b)+':\x20rgb'+'a(246'+',238,'+_0x10265c(0x220)+'5);\x20p'+'addin'+_0x10265c(0x6bd)+'x\x200;\x20'+_0x10265c(0x35e)+_0x10265c(0x486)+_0x10265c(0x506)+'err\x20{'+'\x20colo'+_0x10265c(0x4d6)+_0x10265c(0x6f3)+_0x10265c(0x428)+_0x10265c(0x6ad)+_0x10265c(0x2e1)+'\x20{\x20al'+'ign-s'+'elf:\x20'+_0x10265c(0x34a)+_0x10265c(0x328)+_0x10265c(0x38a)+'der:\x20'+_0x10265c(0x572)+_0x10265c(0x600)+'radiu'+_0x10265c(0x3fc)+_0x10265c(0x568)+_0x10265c(0x6cc)+_0x10265c(0x4ea)+_0x10265c(0x335)+';\x20bac'+_0x10265c(0x5c4)+'nd:\x20#'+'ff6b9'+'d;\x20co'+_0x10265c(0x583)+'#fff;'+_0x10265c(0x5cc)+_0x10265c(0x41f)+_0x10265c(0x651)+_0x10265c(0x244)+_0x10265c(0x6fe)+'weigh'+_0x10265c(0x447)+'0;\x20cu'+_0x10265c(0x257)+'\x20poin'+_0x10265c(0x3be)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x10265c(0x6c9)+_0x10265c(0x329)+'{\x20fil'+'ter:\x20'+'brigh'+_0x10265c(0x4da)+_0x10265c(0x4fe)+_0x10265c(0x428)+_0x10265c(0x429));window['addEv'+'entLi'+'stene'+'r'](_0x10265c(0x456)+'wn',_0x5b2a70=>{var _0x3d767b=_0x10265c;if(_0x5b2a70['code']==='Inser'+'t'){if(_0x1a9246['YAqpu'](_0x3d767b(0x26e),_0x1a9246[_0x3d767b(0x63d)])){if(!_0xf5d4a2[_0x3d767b(0x297)+'ura'])_0x34a64d[_0x3d767b(0x44e)+'e'](_0x3d767b(0x3eb)+(_0x26853b['butto'+'n']+(0x10a0+-0x1a93+-0x5b*-0x1c)));}else _0x5b2a70['preve'+'ntDef'+_0x3d767b(0x4e9)](),_0xfeb0b1();}},!![]);var _0x6a20a7=document[_0x10265c(0x65a)+_0x10265c(0x449)+_0x10265c(0x62b)](_0x1a9246[_0x10265c(0x458)]);_0x6a20a7[_0x10265c(0x6d7)]['cssTe'+'xt']='posit'+'ion:f'+_0x10265c(0x6f4)+_0x10265c(0x27b)+_0x10265c(0x45c)+_0x10265c(0x605)+'12px;'+_0x10265c(0x5ab)+_0x10265c(0x5c0)+_0x10265c(0x3c8)+_0x10265c(0x753)+_0x10265c(0x4e1)+':poin'+_0x10265c(0x4a5)+'idth:'+'26px;'+_0x10265c(0x58b)+_0x10265c(0x5e9)+_0x10265c(0x4ac)+_0x10265c(0x2a4)+'0.5;t'+_0x10265c(0x419)+_0x10265c(0x3cf)+'opaci'+_0x10265c(0x21e)+'2s;po'+_0x10265c(0x281)+_0x10265c(0x247)+'ts:au'+'to;fi'+'lter:'+_0x10265c(0x2b0)+_0x10265c(0x27d)+_0x10265c(0x38f)+'\x204px\x20'+_0x10265c(0x48f)+_0x10265c(0x364)+'07,15'+_0x10265c(0x52a)+'))',_0x6a20a7[_0x10265c(0x523)+_0x10265c(0x5ef)]=_0x10265c(0x6a0)+'viewB'+'ox=\x220'+'\x200\x2024'+_0x10265c(0x4f7)+'<path'+_0x10265c(0x3c7)+_0x10265c(0x5c9)+'c-1.5'+_0x10265c(0x54c)+_0x10265c(0x717)+'-4-7.'+'5\x200-2'+'.5\x201.'+_0x10265c(0x454)+'\x204-4.'+'5s4\x202'+_0x10265c(0x260)+_0x10265c(0x5e6)+'-2.5\x20'+'5-4\x207'+_0x10265c(0x4a0)+'fill='+_0x10265c(0x384)+_0x10265c(0x705)+_0x10265c(0x5a7)+'#ff6b'+'9d\x22\x20s'+'troke'+'-widt'+_0x10265c(0x215)+'\x20stro'+_0x10265c(0x6cd)+_0x10265c(0x53b)+'=\x22rou'+_0x10265c(0x464)+_0x10265c(0x32d)+'-line'+_0x10265c(0x3fb)+'\x22roun'+'d\x22/><'+'circl'+_0x10265c(0x50e)+'\x2212\x22\x20'+_0x10265c(0x643)+_0x10265c(0x63a)+_0x10265c(0x487)+_0x10265c(0x5da)+'=\x22#ff'+'6b9d\x22'+'/></s'+_0x10265c(0x441),_0x6a20a7[_0x10265c(0x70a)]=_0x10265c(0x6ee)+_0x10265c(0x688)+'r',_0x6a20a7[_0x10265c(0x49f)+_0x10265c(0x289)+'er']=()=>_0x6a20a7[_0x10265c(0x6d7)][_0x10265c(0x714)+'ty']='1',_0x6a20a7['onmou'+_0x10265c(0x401)+'ve']=()=>_0x6a20a7[_0x10265c(0x6d7)][_0x10265c(0x714)+'ty']=_0x10265c(0x307),_0x6a20a7[_0x10265c(0x239)+'ck']=_0x15cae1=>{var _0x268003=_0x10265c;_0x15cae1['stopP'+_0x268003(0x6b0)+_0x268003(0x2c2)](),_0xfeb0b1();},document[_0x10265c(0x25e)]['appen'+_0x10265c(0x2ad)+'d'](_0x6a20a7),_0x1a9246[_0x10265c(0x294)](_0x50fc25),requestAnimationFrame(_0x143b5b),console['log']('[saku'+'ra-ko'+_0x10265c(0x411)+'enu\x20r'+'eady.'+_0x10265c(0x663)+':',_0x5ee1ce['uwmk']);});})()));
