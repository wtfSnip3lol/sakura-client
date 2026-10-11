// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.3.0
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
function _0x4216(_0x2dbac2,_0x5d5c63){_0x2dbac2=_0x2dbac2-(-0xba8+0x289*0x5+-0x2a);var _0x5384df=_0x24ab();var _0x464489=_0x5384df[_0x2dbac2];if(_0x4216['wGvdoK']===undefined){var _0x4f3b7f=function(_0x2c5337){var _0x8b88b7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x686295='',_0x5a9c07='';for(var _0x467458=0x1804+-0xc*0x1d1+0x8*-0x47,_0x520444,_0x3c11f1,_0x459648=-0x8f*0x2f+-0x20da+-0x1*-0x3b1b;_0x3c11f1=_0x2c5337['charAt'](_0x459648++);~_0x3c11f1&&(_0x520444=_0x467458%(-0x29*-0x22+0x7*-0x7+-0x95*0x9)?_0x520444*(0x2*-0x12ce+-0x6f6+0x2cd2)+_0x3c11f1:_0x3c11f1,_0x467458++%(-0xed9+0x1*0x12ef+-0x2*0x209))?_0x686295+=String['fromCharCode'](0x963+0x15c9+-0x1e2d&_0x520444>>(-(-0xb0*-0x13+0xccc+0x19da*-0x1)*_0x467458&0x1a*0x12+-0xcd4+0xb06)):0x1b72+0x4d6+0x8*-0x409){_0x3c11f1=_0x8b88b7['indexOf'](_0x3c11f1);}for(var _0x308a00=-0x1033*-0x1+-0x1*-0x18e5+0x2*-0x148c,_0x233411=_0x686295['length'];_0x308a00<_0x233411;_0x308a00++){_0x5a9c07+='%'+('00'+_0x686295['charCodeAt'](_0x308a00)['toString'](-0x2455*-0x1+-0x1bf5+0x13*-0x70))['slice'](-(0x22be+-0xc16+-0x16a6));}return decodeURIComponent(_0x5a9c07);};_0x4216['zRToYg']=_0x4f3b7f,_0x4216['iAKjUr']={},_0x4216['wGvdoK']=!![];}var _0x2e510e=_0x5384df[0xee0+-0x27*0x77+0x341],_0x12619=_0x2dbac2+_0x2e510e,_0x17a5f7=_0x4216['iAKjUr'][_0x12619];return!_0x17a5f7?(_0x464489=_0x4216['zRToYg'](_0x464489),_0x4216['iAKjUr'][_0x12619]=_0x464489):_0x464489=_0x17a5f7,_0x464489;}function _0x24ab(){var _0x2ed0b0=['vgLjrNq','mciGCJ0','kdi1nsW','igTVDxi','D29YAYa','z3jHDMK','zsb2ywW','uNHRrKG','A2v5C3q','rvHqxq','CMLKoYa','mcWWlJu','u3rHDgu','D2DpBNu','rvfYzuu','Dw5PDhK','t3zLCNC','zKz4EMq','ihrOzsa','wuPlBKG','CMrLCJO','B2vZig4','sw5Zzxi','DujrqMG','wNzOque','CMeTA28','A0nHtwy','tKCGlsa','uhj4vhi','oJa7EI0','AgfZ','ihDLyxa','zxG6mJe','y29SB3i','zw50tgK','ihn0AwW','ic8GDMe','Dg9W','ihWGBw8','BxrPzgi','igfSAwC','zxG7ige','C2HHzg8','BgLNBI0','phnTywW','ihnOB3q','y29Kzq','vLbrtge','EYbMB24','idi0iJ4','ihSGzMW','Bgf5ig8','nJqXAhHRAvPs','C3bLzwq','C2HVB3q','C2v0vhi','sxfLse0','ihSGzgK','DxmGywm','q2XVC2u','AY1Jyxi','weXNv00','BgLUzvq','BwLKzgW','v2vItw8','4Ocuig5Via','B24Oks4','vK9ZuMG','D0nVBg8','y29TyMe','icbIB3G','D2vPz2G','rKXdDvG','AxrPywW','oWOGica','yxvSDa','wg5HtNa','zhrOoJe','C3DPDgm','Awr0AdO','ihbHzgq','FqOGica','nNb4ida','mdCSmtu','Dg9KDgu','zIXZExm','BKHbEwG','ugn0','y2vdAgK','BM9tChi','rLfdC1a','y3jLBwu','A2uTD2K','BML0igy','vhPryLu','wNbzu0e','yxrLvge','AwTzuLq','AfTHCMK','oYbJB2W','rgXIwu4','BhmGysa','z3r3zgS','BI1SB2C','C2STBwi','lwzPBhq','l3jHCgK','ihjNyMe','Cc1ZAge','Bg9Hzgu','CMvWzwe','iJeUnsi','lwL0zw0','DMfSDwu','veP6A2q','ndiSlJG','yNv0Dg8','BsbJzw4','Bxm6igm','CZOGyxu','ocK7ih0','CdOGmti','vNfiy2q','Bg93oIa','zMuGBw8','sKXRr24','CMXHEsa','C2fMzu0','CNjVCG','sNvTCca','zxjZy3i','Cw5oD2e','B246ihi','zwj4Ewm','ndSGFqO','C2v0sxq','CMvSEsa','yxa6ide','u2fMzxq','zwCGzMe','DgfNtMe','BgTIt3u','u2HHCNa','zvbSDwC','vg1zsfG','BgLKzxi','zM9YBxm','oIbZDge','zgvYlxi','rMPtEfO','tLndCee','rKneywG','txrfsLe','ChGGmdS','sLnqCMy','r1f2Dwm','yxnLBgK','zw50zxi','icaUC2S','oIbJzw4','qNLjza','yJLKoYa','mJSGC3q','B3G9iJa','rhnMswu','z2LMEq','ug9ZAxq','lxnOywq','BM9Uzq','CfHYB2y','CMLNAhq','nYWWlJm','tM8GuMu','DxrVoYa','zsbJEd0','su1cr3u','mJiSocW','DhrPBMC','lNnRlxm','vw5PDhK','BKHlAKe','DxjDig0','BvDIvMi','y29TCgW','m3WYFdq','i2zMyJm','zxnJ','mcWWlJC','ywDLigq','Aw5Mqw0','EcKGC2e','Aw50zxi','z29KrgK','vMfSDwu','ie1VDMu','ugf0Aa','B3C6ida','DgvTlxu','DgvTCZO','ywn0A0S','wwvfDeG','ig9YigS','Ag9VA04','oYb1C2u','mJqWiey','EdSGz2e','BIb7igy','oYbYAwC','A3nty2e','icnMzJy','oJiXndC','B3bHy2K','DxjZB3i','zgrPBMC','DgvYoYa','ugzMBeS','uhHNBxy','DxjLihq','sgfLsw4','ksaWida','zJDHotm','mdbTCY4','u3zIuxy','BMX5kq','yM9Yzgu','CMvSB2e','zvKOmtG','nZK5mteYngHlrg1jCG','C3bSyxK','Cgz2uxy','B290zxi','A3mGyxi','yMvNAw4','kdaSmcW','ig9Wywm','uwLPqMC','nxmGy3u','u2fRDxi','Bw4TC3u','Fdv8mxW','uhvAte0','AxrJAa','BNnPDgK','Fdj8mhW','mNWZFdK','DgG6idG','C2vSzwm','EgvZige','lwv2zw4','wu1YEhy','jsbUBY0','CfvRB2q','idmWChG','zxfIuNa','AgvZ','ys5RB3u','C3Dtu2m','EgnVr3O','ywnesNi','C2STy3q','CM9WywC','wgjkDuq','AsXZyw4','r3n5vwG','AwWGC3a','oIaWoYa','yxjLBNq','B2STCMu','ue1RrxK','ieDLDfy','wNzoz1i','lw5VDgu','Bw4Ty2W','CMvMAxG','nZe3m0DothPIza','B2f0Eq','B3jKzxi','thHLAei','igjVCMq','yM90Dg8','AcaTidq','lxDPzhq','iNrYDwu','DLfpEMe','mhG2mda','ls1W','q1rNBfi','Bu9sEfC','wwHor08','igjHBIa','DdOGnNa','CI52mq','y1DWD24','D1z2vgy','vg90ywW','zMLSBfq','Aw5Uzxi','AwDUlxm','oYbOzwK','mJm4ldi','oIbPBMG','r29jq1y','CZOGmty','rNf4q1K','sLrnBKC','BMfUuKu','BMfwrfi','EI1PBMq','ywXSig8','zvrHA2u','AgvSza','B29Rihi','zwjRAxq','DfD0uMO','mNW1Fdm','EdSGywW','BsbVBIa','zIbTyxq','ldiZocW','CMvJDa','yw5Uywi','mtn8ma','icaGyMe','DMLLD0i','BgfZDeu','B3vUDc4','t0HLywW','Dxm6ide','oIaYmNa','C2v0','mdSGFqO','zw0TDwK','igzSzxG','mIaXmK0','DgHYB3C','u2fMzsa','C2STy28','zfPgv20','oIaXms4','D2TwrK4','zcWGi2y','Axb0kq','zgvZ','mtr8mtu','DfvZr2S','nsWUmdu','rwXLBwu','ndGZnJq','mtj8mtm','zxrL','C3H2Avq','sfrnta','mcWWlJG','BhzXBMy','B3i6ihi','AwDODdO','BNnSyxq','BMuUqxa','u3bLzwq','nsWUmdm','ztSGyM8','C3bHBG','oIa2mda','zvjHDgu','CY1Zzxi','vNfdBLu','zxzLCNK','lYbhCMe','z29KicG','mNb4ksa','oIbMBgu','A0XNDgu','ig5VBMu','D2L0Aca','C2HPzNq','CI51As4','icaGic4','B2PmEu4','z0fmweK','oIbWB2K','B3uU','oYbMAwW','ldePoWO','re10qLO','mdSGyM8','C2STyNq','q0XpuNm','DhKGDMe','DMG7EI0','yNDUsxe','i2zMzG','zw50kcm','mxb4oYa','vvPPz1u','zNrLCIa','BgXIyxi','mhGYnta','ywrPDxm','oIa2nta','CuPotLi','s2r3D2O','mwzYksK','y2HPBgq','mNWWFdm','ie92zxi','BNrLEhq','uhLzufC','DhjPyNu','oIa4ChG','mNmSigi','B2rLu3q','igzPBgW','BwuG','C2STAgK','lxbHCMu','y3jVC3m','lxnHBNm','zu91BvO','DhLWzq','lIbuDxi','t2fSyKe','x19ZywS','z24Ty28','lc43nsK','renNtM4','DZOGAw4','m3WYFdu','igf1Dg8','tMjNA3G','CMvUDem','ignVBg8','DMLZAwi','sNfTv0y','DgLWD3i','Ag9VA0m','AY1ZD2K','zenOAwW','oIbYz2i','sxnhCM8','ndySmJm','igDHCdO','AxrPB24','B1bOyuS','AguGDxm','BgLNBG','yMX5lum','v1bcEKq','idqTnc4','BYb0Agu','zMy2yJK','igzVBNq','yxv0BY0','yxKGB24','zgTPDa','rK5KBe0','Dvf0AK8','BerPzsW','sLrODfu','mtqXody0oxHzwuncDq','idaGmJq','B250zw4','Dg87zMK','vKXmu1O','ihrVCdO','r2Tzwgq','AhHOtue','odbWEcW','AxrPyxq','u2jMtfa','rMHquvG','zw1ZoIa','tfjwrum','Aw1Llca','wgfPr00','EtOGmdS','lxjHzgK','AwXS','s2v5qq','BIbZAwC','wLvfv0u','Eca2ChG','BYbWAwC','C0P6zuS','A2vizwe','wLLJvxm','s2LSBgu','zMX1tfK','DgG6idu','BuTrEeG','yMHVCa','vvDnsYa','Ag9ZDg4','yvb2rxG','Dg9WoIa','CgvHDcG','Bcb7igq','lxnPEMK','BM9szwm','Bg9NBY0','DvnhzK4','wK5OuKO','ntuSlJa','oIaZmNa','DMfS','nYWUmJG','DgvY','B3vUzdO','EhrIzKu','CMfUC3a','jsK7ic0','AdOGmZq','igfUzca','zgvSzxq','zfnTqwi','yujJDgu','zcbNCMu','iezquW','CKLJB1q','zgvZyW','CJSGz2e','Aw46ida','tKrlvwO','y2XHC3m','lxnJCM8','vgLYr0K','igvYCG','CIiSici','vvDnsW','Bg9HzgK','oYb9cIa','mJqYlc4','C3rYB24','Bw92zw0','EdTVCge','lcbPBNm','lwfWCgu','Ewvur2K','BM93','BNrLBNq','ida7igm','DgnOihq','ywjSzs0','DM1Usg0','y2HLCYa','DdSGFqO','mtu3lc4','qvnNrLe','B3jZige','B25SEsW','zhjVCc0','AwrLihS','zgfTywC','CuL2z1C','odiPoYa','Bw91C2u','mNb4oYa','ANvTCfa','ihSGB3a','ihbVAw4','DhKGmc4','EdSGyMe','uvbQDwi','DMvTzw4','BJOGy28','ChG7iha','tgjPzxC','idqGnc4','Fdf8nhW','BwvKicG','yuTVDxi','B24Gzxy','mJu1lc4','y3jLzw4','Aw9U','uJOG','igH1CNq','z3LIywm','DfL3uhG','B2XPBMu','CZO6lxC','vwjwtha','tw92zw0','igj1AwW','EYbIB3G','tw9Kzsa','seTzA2q','BI13Awq','Bhfjz0W','CMvZDg8','nZaWia','sgLKzxm','zZOGmta','igjVEc0','C2u6Ag8','D2vIA2K','nJaWide','zNPbAxG','zKrdq2G','zwz0ic4','igrPC3a','z2v0','4Ocuig92zq','BMv2zxi','yMfYlxq','CxDps0m','lK92zxi','wwfTAMW','yxa6idG','Bw8GDg8','oIaIiJS','zMyP','icaGig8','icaGlM0','B3zLCIa','AwvKigm','ufLACfu','BfjzALe','D211ywW','DgXPBMu','ihWGrvi','igjHy2S','uNvUDgK','Fdb8nNW','DhjVA2u','v2vHCg8','z3jVDw4','vK5ZtvC','thHvsfe','ig5VigG','rLbtig8','kg92zxi','lxnSAwq','ihWGz2e','CMLZAYa','y0DiAxy','sxbwqLi','A2uTBgK','C3rHCNq','oYbIB3i','CNP3vfG','y0P5ue0','zxH0','B3i6iha','DgnOoJO','oYbVDMu','yxjKlxq','Be1VDgK','zJzIowq','zMXLEdO','DdOXmda','nsWUmdC','A2vZig8','zNvSBhm','BguGAwy','ysGYndy','Aw5WDxq','y2fSBhm','vgLJAW','ihSGzM8','EdSGyM8','qM90Dg8','qLjyvvC','tfrTENK','idmYChG','Dhm6yxu','zciVpJW','q291BNq','mhWWFde','y2fSBa','r3ntzfe','ihSGD2K','CMrLCI0','Aw4Sihq','DMrREvi','j3qGC3q','CI1Yywq','nsK7igi','BwvsDw4','lwXPBMu','BvLdueK','BIb7igi','lM1Ulxq','zgLZCgW','mhb4lca','rMLLBgq','lxj1BM4','oYbMB24','B3vUDgu','AxnPyMW','uxbrwuq','mcWWlJy','BM9Asuy','n3W5Fdy','CgfKzgK','zw50rwW','BMvJyxa','sfP0vwu','zwn0oIa','EgLeDuO','DYGWida','Aw9FmZa','BM9UztS','CM9Rzs0','AwHQsgC','u1jmBMi','vMzZBve','DhLqy3q','DcbZDge','thjouNe','CM9UzYa','lJa4ktS','B3qGBwe','A3fmtgG','lwnHCMq','kc4YmIW','kdi0nIW','A2DYB3u','oIbYAwC','ufmGDw4','lZ48l3m','qsblt1u','Bg9Hzca','BhrLCJO','ChG7cIa','AhHlrxq','CMDIysG','ChGPoYa','zg9JDw0','yM90Aca','zufqr3u','ms4XlJa','mxb4ida','zc5VBIa','yxrJAgu','ns00idC','DgTqExC','sNPnzu8','ywqGEYa','zgv1sgG','nZm3nduYoevyrxDcrG','DgHPCYa','zwXK','B2LSicG','i2zMzJS','zgHLCxa','uMvJB2K','yw5JztO','ExHnAfG','yM9KEq','yM91BMq','zu5cB0u','qxfYEMq','nxb4oYa','q0fovKe','Dg9Wrgu','nsWYntu','igDHDgu','lxnPEMu','CMuGkfm','q29TyMe','twrIAhu','vgHLC2u','DgDkqNi','ywnPDhK','Bw4TCge','rhvyr0K','z1bgtwq','vLfAtva','BI1PDgu','ChG7igy','DgfIihS','AwvSza','ihnVig4','vuX3vNO','ktSGy3u','rg91Egi','ihn5C3q','AxmGAg8','Agf0igq','Bw92zvq','y2LYy2W','nsKSida','BNn0ywW','Ag1sqM4','sgvPz2G','Aw9UlLq','BxjNswm','yw5ZzM8','zKnMAKm','tvn0CwC','C3rLBMu','FdL8nW','tg9JywW','ztOGmtm','Dgv4Dc0','oc00lJu','ztOGBM8','yxmGBM8','B2LAAgO','DdOGmtu','C3r5Bgu','s3v4sgG','mtSGBwK','yxa6ihi','zg5myLu','idrWEca','x19tquS','AxmGyNu','yJPOB3y','ign1CNm','nwmWidm','Dhj1zq','D0zuDgy','n3W2Fde','qwD4uNu','CMLxrM4','owqIihm','mtr8mte','lM1Ulxa','lwLVxYO','ywrKrxy','rxHW','ChvZAa','tfPRuvi','nJq2o2m','Fde0Fde','wKDoEu4','Aw5NicS','yxrUCgy','FdL8ohW','y2fWDhu','zfPRquK','zwfK','ig5LDMu','ANfirMO','zsGXnta','C3rYB2S','ieaG','B250lxm','EhjxEhi','re9OB1q','zg93BIa','B3n0zMK','phn2zYa','z2v0qxq','sgXkz3G','ifTfwfa','A3nqB3m','re9nq28','D2fPDgK','Bw4TDge','rKX3zuO','zgv2Awm','AwvZlG','rMLosLG','Aw5KzxG','v3jHCha','ihrOAxm','DgLKzs4','BMC6idq','ywXku2W','ldeWnYW','t0zgigi','sgvHBhq','BfvUtLe','C2STC2W','icbIywm','CM9Rzxm','EuvUz2K','u2nHBgu','Bgv4oIa','mc41o3q','yxDQtfm','ywn0Axy','BMq6icm','Ce94s1K','z3jPzc0','B25JAge','zYbJyw4','q3PmqwO','mxb4ihi','ChbLBNm','zxmGEYa','mtjWEdS','B3i6icm','BhvYkdi','Dc1ZAxO','BNrLCJS','qunuAYa','mhb4oYa','AxrfExi','icaGica','zxzLBNq','mtrWEdS','z2fTzuW','BgvZiem','mNW0Fde','z2jHkdi','Bw4TAa','rfD1BeS','BMDL','CMfUy2u','CYaNzNu','zwfKige','vgXLsfu','rfzhEKW','icaGzgK','AguGCMu','v2LWzsa','yxrfEeu','oYb0CMe','CgfJAxq','i2zMnMi','y3nZvgu','Bg9Y','ntuSmJu','D2LKDgG','zguSihq','y3jLyxq','ChG7igG','iduWjtS','DgLVBJO','zg93BG','BNrezwy','BNnLDca','Bw92zq','lJv6iIa','B246ig8','zYb7igm','tgvNAw8','pc9ZBwe','ihjLBg8','nsaWlti','BgWGBwu','psjYB3u','zM9UDa','Dw5Kzwq','oYbVCge','B3rOAw4','sNnKAxy','yvrPyvm','uezst2q','CNq7igC','B25LigK','y2fWtw8','BK90uwS','whDHr2e','qxbWBgK','y2L0EtO','ywqGDg8','C2STy2e','AwXLzdO','nsK7ih0','CdOGmta','zxmGB24','nNb4idK','B2fKzwq','tgLZDa','yMX1CG','v0ntqLG','nhWXn3W','idHWEdS','AxHLzdS','A3ndChm','oIb0CMe','B21YtNi','u2TPChm','DhvYyxq','BdOGBM8','mte5otjIrNPRtwy','mdSGBwK','r29Kie0','uMvMAwW','ihLVDxi','A0rUCvO','zc10Axq','BLbSyxq','BYb7igq','swT3wfu','ihSGy28','BNnWyxi','oIbJB2W','q3vZDg8','BwXoBuu','B3b0Aw8','igvSC2u','CNfsA00','C2STBwq','ywXSzwq','DgHLihC','y2TLzd0','lxnLCMK','Fdb8oxW','ChGGDwK','icaUBw4','EMz3Bem','yNjPz2G','zcWGyw4','rgLZywi','ifvjiIW','u05JCxm','Bg9Hzc4','DMLZDwe','CMDmrwm','DvnjChO','AMrrCgC','zJmY','wLvHCwq','CI1ZzwW','vgfRzxm','B3rZlG','EdSGAgu','lMrSBa','zwfSDgG','BgLUzvC','ktSGFqO','cIaGica','CgfNzsa','zxjYB3i','y2HtAxO','AtmY','y2n1CMe','mdi1ktS','txjdzNC','zNbZ','ic5TBI0','Dgv4Dei','yxbWzw4','Aw4GC2e','C2zVCM0','yvb2BKe','zgL1CZO','DgvTCgW','zvzHBhu','mdb2DZS','Bg9JAW','mcaWida','zwn0Aw8','yw55Dfu','zwLNAhq','B29RCYa','u2vSzwm','CMvWBge','AwXKigG','DgG6idi','DMvYihS','C2L6ztO','CMDPBI0','DhjHBNm','AYbVBI4','B0vAqMq','y2TNCM8','lwjVEdS','q1H4Ew0','C3bSAxq','q0H6wgu','BhvTBJS','rgviAgC','B25PBNa','DgHVzca','rLzOEui','oYbIB3G','CMfWAwq','igjHBM4','lKXVy2e','lMLVig0','BhrO','Dc1Myw0','zsXTB24','yNrUoMG','yxrPB24','AhrgAwO','CxvLCNK','mZuSmJq','msWUmZy','EwX1u3a','uMf0zq','mJu1ldi','Ad0ImIi','DxDTAW','BwvZC2e','BMCGzM8','vNzmu1C','Cg5YrhG','yxb0Dxi','lMP1Bxa','DhjHBxa','wennqLy','qMXVy2S','BMnL','z2v0rwW','wKHHBhO','ihWGC2G','EcbYz2i','ywrKAw4','zuv4Ca','sLfgywy','nZTWB2K','qvb4vMC','ys1JAgu','B2reAwu','Dg9Y','B3zLCMW','uvb4ruS','weLxr2m','ignHBgm','C2HVD24','rwfJAca','zwfWB24','oYb3Awq','AKLIseG','qwrIBg8','DxjH','zxj2zxi','y1HkDem','zxi6igi','z0rsC1q','Ag9VA1a','rwTjuLC','DwXSEfC','vgXSuNu','uvziAvq','DhLSzq','Awq7iha','rxn3q2W','zw50CW','u1Lzq1q','EsbKzwy','ywnRz3i','vhPACuG','qwvruKG','mc41','BM90zs4','AxnWBge','zM9YBtO','oIbKCM8','rNjHBwu','DML0Eq','uuLWyvq','DhLTsfq','mJuPoYa','Dc1Iywm','qwnNvuq','C2STBM8','mZeYodK3mhLLsuPqwa','BsbYAwC','DePLEMi','CvbryLi','zw50','yxjPys0','oIaZChG','ysblB3u','zxPkyvG','ihn0CM8','zdSGy28','txbKu0K','zMXLEdS','Ahq7igm','yxnZAwC','y3KGB24','zxqGmca','A2L0lxm','zhrOoIa','igrLzMe','mJu1lde','C2vSzwe','yxvSDca','odi1BMfQCfvL','tLzjq1y','Aw9FnZi','DxjDigG','Bg9YihS','B24UvgK','ntq0ngvRzer4Bq','tuLtu0K','ywqGD2G','u3r4yNq','s2v5C3q','ocWYndi','y3K9iJe','FdeXFdy','C21HBgW','B3nWywm','lJuGms4','iNjVDw4','CZOGCMu','Ahq6idi','yMjTsfa','C2vYDMu','CZPUB24','EMu6ide','zcbZzwu','w3nHA3u','EYbKAxm','zLDLsfe','yxK6igC','D2L0Ag8','igHVB2S','zhbY','Bhziq1e','CgfYC2u','A2zjuvG','Bhv0ztS','A2v5zg8','yw1L','BhHhyNu','ChG7ihC','zg93oIa','vvjbx0S','q1P6zuO','mcbOB28','igv4Axq','Dcb7igq','nMi5zci','D21gwxa','tg9Hzgu','yxjNzxq','te1c','uNP3qNu','CgXHEtO','u2D2vxO','yMTPDc0','zwXHDgK','Ag9Szsa','s05AAKK','rxzPwe4','C3rVCfa','ywXSihq','y2f0','Aw9F','nJTWB2K','zwLUC3q','t1vsx18','lNnRlw0','oYbIywm','C2r6uhK','mZiZnefwBgLpvW','DMvYlxy','AwrLCJO','s2v5vW','Durowuu','Cg5UthC','rw55B1O','idaGmca','ih0kica','mtySmc4','B3bLBG','zvn0EwW','EMrltKq','tM8Gu3a','Bg93zxi','B3vUzgu','CM91BMq','mNb4ihu','Cg9PBNq','kYbtCge','ywqUieK','rMvquuS','ywX0Ac4','BfDZqwe','Aw5NoIa','vwnnwfi','wKzrz2C','BM8Gy2G','igP1Bxa','tMfTzq','iokaLcb0zq','BwjVzhK','AguGzNi','kYbmtui','mJvWEdS','ic5ZAY0','B2LS','zMLSBd0','B1zxseG','C3rPBgW','AfnOywq','r29Kl2q','BhKGkhi','u0fgrsa','CJOGi2y','EYbIywm','CYbpDMu','u2njA2G','ida7igi','AgvPz2G','zw50CZO','ignHy2G','sw9cvg8','CMfKAxu','BhvLCY4','BNqGAxq','CMzSB3C','tu9ersa','lsbHihm','y2HdB2W','Dw1UoYa','BgvMDa','lc4YnsK','khjLBg8','lcbZyw4','iIbZDhi','B1jLy28','BNqTC2K','yw5LBc4','z2v0sxq','ve9suwi','B250lxC','txnVEve','ChG7igi','BMu7ihm','Dgv4Dem','EdSGFqO','zZOGmNa','B2rL','qLLTDfi','AxrSzsa','ltjWEdS','kdeUmsK','zsbZzxi','zxj5idi','ywrIBg8','A01RqNC','C2v0x3q','idfWEca','Bw4Ty28','BgvUz3q','igq9iK0','Dg87ih0','zxiTCMe','oYbHBgK','nNb4oYa','igfWCgW','yxbWBgK','zMLSzw4','DMu7ihC','ktSkica','C2fRDxi','zsb7igy','CgfYzw4','rLznt3u','veL0Bee','zvj1BM4','qMfRsxi','oIbUB24','lxK6ige','sK1rA3C','v0fttsa','thnctLC','tKLyEuO','ysGYntu','ltiUns0','mtGGnIa','C3rYAw4','zw51ihi','zZOGnNa','AY1OAw4','DhK6ic4','A2XZwvK','yYGXmda','B2TLpsi','lMXHC3q','BMf0Dxi','Fdz8n3W','C2vLBNq','y3Lirfe','y2XLyxi','EYbWB3m','EtOGyMW','BgfIzwW','AhvTyIa','zMLSBa','z2jtyK0','s21zr04','CYbHBgW','lwHVCa','ihDOAwm','EYbSzwy','zxzLBIa','mtiGmJe','lc40ktS','y2vUDgu','ywnvt3u','icnMzMy','DdOGmJG','lsbVDMu','A291CI0','runtsfe','Bgf5oIa','z29K','idrWEdS','AxvZoIa','u2L6zq','Dgv4Dee','Cg9ZAxq','Ag9VA3m','zxiGC2W','ig9U','id0GzMW','lM1Ulxm','CgXPy2e','yxbWzwe','CMLUz3m','zw5HyMW','uK1c','nhb4oYa','B3nPDgK','AwX5oIa','Bw4TBwe','C2f2zq','lc4WnsK','DgLVBI4','AxPLoIa','Cg9W','AgfPCG','qxLfzgC','Dg9Nz2W','Au1XwMC','zw1LBNq','zKL0yvy','zhnJELG','rgfTywC','D0jSDxi','yxj0lG','yw5LBca','ihrYyw4','EdSGCge','Bw9fEha','DgL0Bgu','ywWGBwu','B2XVCJO','DMDmvu8','iM5VBMu','icaGlNm','B3C6igK','ohb4oYa','Bwf4','s2v5uW','ltqTnY4','BNrLCI0','oIbJDxi','zxjSyxK','C2STC3C','nc00lJu','ChvvD2u','rMPusfy','z2H0oIa','z2DSzwq','mJqSmtC','Bw4TDg8','mhW4Fde','EeHLyNq','t1nOB28','CNnVCJO','D2fYBG','rLbtigm','wMvYB2u','ksaXmda','Axr5oIa','DgLMEs0','zMLSBfm','nxWXmNW','AM9PBJ0','BMqIihm','ihbSywm','uMvZzxq','BNzgtui','DgvZDa','zuvSzw0','AY1IDg4','zgL2','u0fgrq','rfjxu2O','uMvJDa','s0zxu3O','CMrOv1m','yNnLBfa','oYbQDxm','B2LUDgu','mdSGy3u','CMvHzhK','EYbMAwW','qNLizgy','Aw9UoMy','zM9UDc0','BgLUzw4','zxjZ','B25JBgK','Ag9VA0C','sxfiDxO','uIb2ms4'];_0x24ab=function(){return _0x2ed0b0;};return _0x24ab();}(function(_0x58aaf8,_0x14295f){var _0x47e3a9=_0x4216,_0x2b4cb7=_0x58aaf8();while(!![]){try{var _0x3e3c50=parseInt(_0x47e3a9(0x539))/(0xa46+0x117a*0x2+-0x2d39)*(-parseInt(_0x47e3a9(0x406))/(0x201f+0x1107+-0x3124))+parseInt(_0x47e3a9(0xfc))/(-0x17*-0x7c+0x245c+-0x2f7d)+-parseInt(_0x47e3a9(0x3c7))/(0xe6d*-0x1+-0x31*0xa7+0x2*0x1734)*(-parseInt(_0x47e3a9(0x3c1))/(0x38f*0x3+0x246b+0xd*-0x39f))+parseInt(_0x47e3a9(0x5e8))/(0x383+0x887+0x602*-0x2)+-parseInt(_0x47e3a9(0x215))/(0x931*0x3+-0xae*0x8+-0x161c)+parseInt(_0x47e3a9(0x2fb))/(-0x1*-0xe55+-0x1*-0x1fb7+-0x14*0x24d)*(parseInt(_0x47e3a9(0x617))/(0x2cd*0x7+0xb*0x31+-0x15ad))+-parseInt(_0x47e3a9(0x3aa))/(0x5*0x1bb+0x245e+-0x2cfb);if(_0x3e3c50===_0x14295f)break;else _0x2b4cb7['push'](_0x2b4cb7['shift']());}catch(_0x26cb34){_0x2b4cb7['push'](_0x2b4cb7['shift']());}}}(_0x24ab,0x2f480+-0x18e933*0x1+0x227c26),((()=>{'use strict';var _0x1babda=_0x4216,_0x3c9206={'abcbx':_0x1babda(0x277),'pOxKY':function(_0x434660,_0x522628){return _0x434660===_0x522628;},'PMkEy':function(_0x29e74b){return _0x29e74b();},'wZRnq':_0x1babda(0x49f),'aPvEx':'Initi'+_0x1babda(0x565)+_0x1babda(0x115)+_0x1babda(0x35c),'qIvgW':_0x1babda(0x32e),'XLgWM':'capSh'+_0x1babda(0x5eb),'VNsMW':'SetGa'+_0x1babda(0x1d7)+'ning','GZgbO':'noRec'+_0x1babda(0x42a),'JzMeO':'Tick','SFyIY':_0x1babda(0x64b)+'th','mKQxH':_0x1babda(0x24a)+'Die','TJlXC':_0x1babda(0x5f2)+_0x1babda(0x16b),'MStqg':'Assem'+_0x1babda(0xef)+_0x1babda(0x593)+_0x1babda(0x326),'swSSc':function(_0x4a10ba,_0x155f60,_0x8fe04f,_0x154355,_0x35df85){return _0x4a10ba(_0x155f60,_0x8fe04f,_0x154355,_0x35df85);},'rgLEc':'movem'+_0x1babda(0x397),'TJzkd':_0x1babda(0x269),'nOEQI':'JIMWU','cyHDQ':function(_0x5d61f9,_0x4f10e8){return _0x5d61f9*_0x4f10e8;},'iMqZg':function(_0x5a0e0f,_0x4a7e11){return _0x5a0e0f-_0x4a7e11;},'ZYcUs':'sk-co'+_0x1babda(0x2c4),'ZUaqd':function(_0x4b3594,_0x7776a7){return _0x4b3594(_0x7776a7);},'QaWaD':function(_0x11d82f,_0x422d0f){return _0x11d82f/_0x422d0f;},'wRPEE':_0x1babda(0x44e),'MtEJQ':'HZfZB','qAUEQ':'wqCeY','HaeIn':_0x1babda(0x292),'xgEqR':function(_0x2065d9,_0x253ea2){return _0x2065d9!==_0x253ea2;},'kMNRv':function(_0x351b17,_0x466d07){return _0x351b17(_0x466d07);},'NIXyJ':function(_0x19cbcc,_0x2acbca){return _0x19cbcc/_0x2acbca;},'YKTiz':function(_0x59c7d9,_0x5a585b){return _0x59c7d9(_0x5a585b);},'bksiF':function(_0x7c6cc4,_0x2c73ea){return _0x7c6cc4!==_0x2c73ea;},'LxehB':'rhiJw','bxPTS':function(_0xb22ef,_0x89fcd5,_0x288eb0,_0xc1169b,_0x28b9eb){return _0xb22ef(_0x89fcd5,_0x288eb0,_0xc1169b,_0x28b9eb);},'RzwBu':_0x1babda(0x320),'ezJaX':function(_0x1a0a33,_0x20ca28,_0x3ecf1d,_0x13b275,_0x4fd9be){return _0x1a0a33(_0x20ca28,_0x3ecf1d,_0x13b275,_0x4fd9be);},'GoICV':function(_0x32f6cf,_0x6e7203){return _0x32f6cf!==_0x6e7203;},'VQZMP':function(_0x34f174,_0x46799e,_0x67b7a8,_0xe246ad,_0x352654){return _0x34f174(_0x46799e,_0x67b7a8,_0xe246ad,_0x352654);},'HlJgx':function(_0x3073e1,_0x8b5ccf){return _0x3073e1<_0x8b5ccf;},'lWsAa':_0x1babda(0x455),'klsYY':function(_0x111317,_0x2f986d,_0x374639,_0x17ec20,_0x461fc9){return _0x111317(_0x2f986d,_0x374639,_0x17ec20,_0x461fc9);},'PFROd':function(_0x519cb3,_0x4c4e35,_0x5989cb,_0x293727,_0x36cb5b){return _0x519cb3(_0x4c4e35,_0x5989cb,_0x293727,_0x36cb5b);},'DVGzL':_0x1babda(0x25e),'BTgOD':function(_0x1f1e19,_0x47cc83){return _0x1f1e19+_0x47cc83;},'FiNJX':function(_0x1ae41f,_0x2412c9){return _0x1ae41f+_0x2412c9;},'IpVBR':_0x1babda(0x2f0),'rzwTX':'mouse'+_0x1babda(0x2cc),'nYNST':_0x1babda(0x566),'MpdSI':function(_0x5eff9c,_0x4d8502){return _0x5eff9c===_0x4d8502;},'CZzeJ':_0x1babda(0x5bc)+_0x1babda(0x662),'itEyr':function(_0x28c615,_0x110f65){return _0x28c615-_0x110f65;},'FVMOu':function(_0x3bfe8a,_0x328aae){return _0x3bfe8a-_0x328aae;},'Douxb':function(_0x43b790,_0xac647f){return _0x43b790+_0xac647f;},'dheqp':function(_0x1e7fba,_0xfee38){return _0x1e7fba+_0xfee38;},'yxMhX':function(_0xc90d45,_0x1fc85d){return _0xc90d45*_0x1fc85d;},'DOhoT':'11|4|'+'13|5|'+'12|16'+_0x1babda(0x26f)+'3|1|1'+_0x1babda(0x2f2)+_0x1babda(0x25f)+_0x1babda(0x1cd)+'5|2','FCDah':function(_0x423ad6){return _0x423ad6();},'IoBTo':function(_0x3a3469,_0x480510){return _0x3a3469(_0x480510);},'KFHxK':function(_0x54b597,_0xf0bf0b){return _0x54b597+_0xf0bf0b;},'FLweJ':'range','PuZLM':'sk-ra'+_0x1babda(0x2b6),'QPxEK':_0x1babda(0x66e),'TirGI':_0x1babda(0x293)+'ider','bwnIq':'sk-va'+'l','lvHCQ':'sk-fi'+_0x1babda(0x217),'TllRu':'sk-ct'+'l','SNcqs':_0x1babda(0x4f0),'VqCnU':function(_0x5b76f9,_0x39c7d0){return _0x5b76f9+_0x39c7d0;},'yluSp':_0x1babda(0x13f),'cZJNJ':function(_0x5c2529,_0x3ce1bd){return _0x5c2529+_0x3ce1bd;},'wgOnu':function(_0x4e63b2,_0x4376dd){return _0x4e63b2+_0x4376dd;},'pVikg':function(_0x2b2586,_0x3f89ec){return _0x2b2586+_0x3f89ec;},'tYwPx':'UWMK\x20'+_0x1babda(0x21f)+'\x20','msluP':function(_0x12f07a,_0x4363ca){return _0x12f07a+_0x4363ca;},'OalbA':'\x20|\x20ga'+'me\x20','OeCPj':_0x1babda(0x63b),'fCfjC':_0x1babda(0x5ad),'kqLLh':_0x1babda(0x11c)+_0x1babda(0x3c8)+'NG\x20—\x20'+_0x1babda(0x380)+_0x1babda(0xf6)+'ly\x20(r'+_0x1babda(0x401)+_0x1babda(0x3fd)+'he\x20us'+_0x1babda(0x587)+_0x1babda(0x65a),'eqbRp':_0x1babda(0x19d)+_0x1babda(0x170),'vgLUO':_0x1babda(0x5d1)+_0x1babda(0x200)+_0x1babda(0x33d),'tWtRj':function(_0x7b97c4,_0x19f648){return _0x7b97c4!==_0x19f648;},'oVWHH':_0x1babda(0x29a),'pXrof':'style','omrNr':function(_0x4b8b43){return _0x4b8b43();},'DeHhg':'mn-lo'+'go','MZxfu':_0x1babda(0x4b2)+'in','eNBoE':_0x1babda(0x2b4),'PYZpU':'qtHkz','wunNM':_0x1babda(0x579)+'n','NDKUj':_0x1babda(0x49c)+_0x1babda(0x3c3)+'8x90-'+_0x1babda(0x46d)+'t','XIWGc':_0x1babda(0x49c)+_0x1babda(0x1ee)+_0x1babda(0x621)+_0x1babda(0x6a3)+'nt','CzLAj':_0x1babda(0x207)+_0x1babda(0x5b5)+_0x1babda(0x40f)+'7)','DRWSj':_0x1babda(0x207)+_0x1babda(0x367)+'35,24'+_0x1babda(0x510)+'5)','ullxW':'middl'+'e','nHAyh':'mouse'+'1','PrxTr':function(_0x5bd0ba,_0x168cd6){return _0x5bd0ba*_0x168cd6;},'BfBSw':function(_0x5e88f7,_0xb5b46d){return _0x5e88f7===_0xb5b46d;},'YJKnH':function(_0xe3de43,_0x3ba972){return _0xe3de43+_0x3ba972;},'xcoGz':function(_0x62bdce,_0xc470c0){return _0x62bdce(_0xc470c0);},'QiiBg':function(_0x954b3,_0x1f8eca){return _0x954b3+_0x1f8eca;},'TYYBK':'KeyW','uEvgL':'SAKUR'+_0x1babda(0x202)+_0x1babda(0x504)+'1','EviXN':_0x1babda(0x185)+_0x1babda(0x417)+'i-mon'+_0x1babda(0x3d0)+_0x1babda(0x35e)+_0x1babda(0x3d0)+'e','mYCPI':function(_0x59d316,_0xabd6ea){return _0x59d316>=_0xabd6ea;},'tJezb':function(_0x48d480,_0x5a844f){return _0x48d480(_0x5a844f);},'Yamjl':function(_0x1fde00,_0x235c32){return _0x1fde00!==_0x235c32;},'ULwVz':_0x1babda(0x3af)+'check'+'ed','TORQb':'inter'+'activ'+'e','uXGIT':'zIllJ','FLCuX':function(_0x2368f8){return _0x2368f8();},'eFyvD':'tEoZJ','DMtBZ':_0x1babda(0x1c7),'EnyoZ':function(_0x4446a3){return _0x4446a3();},'JILlW':_0x1babda(0x56d)+'ody','BmdLa':'sk-bt'+'n','GbPbG':'ZFQgg','fMMae':function(_0x589423){return _0x589423();},'aTiaS':_0x1babda(0x2cf),'gwoPT':'WASD\x20'+_0x1babda(0x427)+'/RMB\x20'+_0x1babda(0x419)+'ce\x20ov'+_0x1babda(0x4d3)+'.','XtPtu':function(_0x5418bb,_0x32734a,_0x37ecbd,_0xf20ac){return _0x5418bb(_0x32734a,_0x37ecbd,_0xf20ac);},'XwaGa':_0x1babda(0x389)+'ck','fiUcJ':_0x1babda(0x654)+_0x1babda(0x17a)+_0x1babda(0x1a8)+_0x1babda(0x538)+_0x1babda(0x5e4),'EIZRS':function(_0x355356,_0x324de7,_0x377456,_0x2fd82e){return _0x355356(_0x324de7,_0x377456,_0x2fd82e);},'htFij':_0x1babda(0x421)+'eats\x20'+_0x1babda(0x509)+_0x1babda(0x3de)+'ut\x20th'+'is','mMfAw':function(_0x1c707a,_0x11f14e,_0x441790){return _0x1c707a(_0x11f14e,_0x441790);},'nanRE':_0x1babda(0x431)+_0x1babda(0x43f)+_0x1babda(0x49b)+_0x1babda(0x583)+'only,'+'\x20no\x20h'+'ooks\x20'+_0x1babda(0x445)+_0x1babda(0x2e7)+'\x20exit'+')','anytU':'\x20|\x20sh'+_0x1babda(0x5eb)+'\x20','ldwix':function(_0x4c8997,_0x434080,_0x2eefbb){return _0x4c8997(_0x434080,_0x2eefbb);},'dZFWm':_0x1babda(0x46b)+'a.kou'+_0x1babda(0x67c)+'v1','HZtUe':_0x1babda(0x54a)+'t','Kdwwj':_0x1babda(0x229)+'t','TLPoX':'misc','pOpQK':'Misc','IMBGu':'safe','Ifyeh':_0x1babda(0x58f)+'y','WPBzD':_0x1babda(0x5f2)+_0x1babda(0x3b1)+'r','caHQH':_0x1babda(0x3da)+'ra-ko'+_0x1babda(0x5ba)+_0x1babda(0x47c)+'eady.'+'\x20UWMK'+':','rqRkM':_0x1babda(0x5be)+'c6','cKTfv':_0x1babda(0x32c),'lhFWU':_0x1babda(0x20c),'sxviT':function(_0xcfc2ae,_0x20a38f,_0x5abe54,_0x118df5,_0x4676b2,_0x5836f6,_0x208eea,_0x38913a){return _0xcfc2ae(_0x20a38f,_0x5abe54,_0x118df5,_0x4676b2,_0x5836f6,_0x208eea,_0x38913a);},'tUsGk':_0x1babda(0x5c5)+'e','qwOKC':_0x1babda(0x4de)+_0x1babda(0x12b),'DlbYN':function(_0x1a7fd7,_0x2a3eaf,_0x55f398,_0x4ac2df,_0x595e6a,_0xa29724,_0x350e7c,_0x591e40){return _0x1a7fd7(_0x2a3eaf,_0x55f398,_0x4ac2df,_0x595e6a,_0xa29724,_0x350e7c,_0x591e40);},'NdjYM':_0x1babda(0x2e2)+'ve','XaiGM':_0x1babda(0xe8)+_0x1babda(0x2da),'DuXGI':'[saku'+'ra-ko'+'ur]\x20U'+'WMK\x20i'+_0x1babda(0x562)+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x1babda(0x4ed)](location[_0x1babda(0x11d)+_0x1babda(0x3e6)]||''))return;if(window['__SAK'+_0x1babda(0x3ea)+_0x1babda(0x402)])return;window[_0x1babda(0x258)+_0x1babda(0x3ea)+_0x1babda(0x402)]=!![];var _0x1fb110=_0x1babda(0x2c2)+'9d',_0x239fbb=_0x3c9206[_0x1babda(0x30c)],_0x581add={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x170730={..._0x581add};try{Object[_0x1babda(0x3b8)+'n'](_0x170730,JSON[_0x1babda(0x3e2)](localStorage['getIt'+'em'](_0x1babda(0x46b)+_0x1babda(0x604)+'r.v1')||'{}'));}catch(_0xeb6da1){}function _0x26bb6f(){var _0x46d1ab=_0x1babda;try{'IqHuz'!==_0x46d1ab(0x503)?(_0x937133[_0x46d1ab(0x584)+_0x46d1ab(0x454)]=_0x28c784,_0x46d437(),_0x7935fc['reloa'+'d']()):localStorage['setIt'+'em'](_0x46d1ab(0x46b)+_0x46d1ab(0x604)+_0x46d1ab(0x628),JSON[_0x46d1ab(0x47b)+'gify'](_0x170730));}catch(_0x57d770){}}var _0x1ed0a9={'uwmk':!!window['Unity'+_0x1babda(0x545)+_0x1babda(0xf7)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x170730[_0x1babda(0x584)+_0x1babda(0x454)],'lastError':''};try{window[_0x1babda(0x266)+'entLi'+'stene'+'r'](_0x3c9206['cKTfv'],_0x51af67=>{var _0x5a877e=_0x1babda;try{var _0x48f079=_0x51af67&&(_0x51af67['messa'+'ge']||_0x51af67['error']&&_0x51af67['error']['messa'+'ge'])||'unkno'+'wn';if(_0x51af67&&_0x51af67['filen'+'ame'])_0x48f079+=_0x3c9206['abcbx']+String(_0x51af67[_0x5a877e(0x468)+'ame'])[_0x5a877e(0x350)]('/')[_0x5a877e(0x4b7)]()+':'+(_0x51af67[_0x5a877e(0x4ff)+'o']||'?');_0x1ed0a9['lastE'+_0x5a877e(0x585)]=String(_0x48f079)['slice'](0x3*-0xaed+0x243c+-0x375,0x1fa8*0x1+-0x1c88*-0x1+-0x3b90);}catch(_0x16ebfc){}});}catch(_0x33bcb2){}var _0x288370=null,_0x27de58=null,_0x2ea271={},_0x1a0d25=[],_0x17007b=[],_0x21cca1=new Map();function _0x1cbfb0(_0x393f8b,_0x936fc4){var _0x5d0bb9=_0x1babda;if(_0x3c9206[_0x5d0bb9(0x29d)](_0x5d0bb9(0x167),'QVibv'))try{_0x546b40[_0x5d0bb9(0x21e)][_0x5d0bb9(0x335)+'dChil'+'d'](_0x4c5642);}catch(_0x1bcd23){}else{if(!_0x936fc4||_0x393f8b['inclu'+'des'](_0x936fc4)||_0x393f8b[_0x5d0bb9(0x460)+'h']>0x1d*0xd+0x538+-0x671*0x1)return;_0x393f8b['push'](_0x936fc4);}}function _0x5a6e93(_0x13c562,_0x5d9480,_0x15ae2b,_0x75889c){var _0x52e166=_0x1babda,_0x50e4f2={'jIbHH':function(_0x259ef8,_0x515eed,_0x450735,_0x2b8287,_0x4334f4){return _0x3c9206['swSSc'](_0x259ef8,_0x515eed,_0x450735,_0x2b8287,_0x4334f4);},'RxkFH':_0x3c9206['rgLEc'],'tipwr':function(_0x3c9606,_0x2513d2){return _0x3c9606>_0x2513d2;}};if('QPBxO'!=='uUVdU'){var _0x11ce2c=0x5*0x30d+0x1e4a+-0x2d8b;try{_0x3c9206[_0x52e166(0x29d)](_0x3c9206[_0x52e166(0x577)],_0x3c9206[_0x52e166(0x577)])?_0x11ce2c=_0x5d9480&&_0x5d9480['val']?_0x5d9480[_0x52e166(0x129)]():-0x1685+0x17*0x87+0x299*0x4:(_0xd68ace['damag'+_0x52e166(0x379)]=_0x2dd4f1,_0x3c9206[_0x52e166(0x611)](_0x8c4ab));}catch(_0x4157d5){}if(!_0x11ce2c)return;_0x1cbfb0(_0x13c562,_0x11ce2c),_0x15ae2b[_0x75889c]=_0x13c562[_0x52e166(0x460)+'h'];if(_0x75889c===_0x3c9206[_0x52e166(0x31d)]&&_0x13c562[_0x52e166(0x460)+'h']){if(_0x52e166(0x435)==='orzsV')_0x156969['shado'+_0x52e166(0x549)+'r']=_0x594011,_0x464d6c[_0x52e166(0x52f)+_0x52e166(0x4c0)]=-0x29*0xf3+0x17*-0x1a3+-0x6*-0xcc5,_0x21efd5[_0x52e166(0x48d)](),_0xce7ba['shado'+'wBlur']=-0x9*-0x28e+-0x4*-0x53c+-0x2bee;else{var _0x35201f=_0x2ea271['capMo'+'ve'];if(_0x35201f){if(_0x3c9206['nOEQI']!=='UspKZ')try{_0x35201f[_0x52e166(0x4ad)+'ed']=![];}catch(_0x4c22db){}else{if(_0x2b8417[_0x52e166(0x5b8)+'WebMo'+_0x52e166(0xf7)]&&!_0x402b6b[_0x52e166(0x584)+_0x52e166(0x454)]){var _0x325e04=('3|6|0'+'|4|2|'+'1|5')[_0x52e166(0x350)]('|'),_0x4b4a57=0x1b2+0x0+0x1f*-0xe;while(!![]){switch(_0x325e04[_0x4b4a57++]){case'0':if(_0x5cb432['hookG'+'od'])_0x5214a9(_0x3c9206['wZRnq'],_0x52e166(0x64b)+'th',_0x3c9206[_0x52e166(0x11e)],[_0x52e166(0x32e),_0x3c9206[_0x52e166(0x15a)]],_0x21b6d2,_0x228b9b,!!_0x2b24cd[_0x52e166(0x49f)]);continue;case'1':if(_0x558929[_0x52e166(0xe4)+_0x52e166(0x36e)+'e'])_0xcc77fe(_0x3c9206[_0x52e166(0x542)],_0x52e166(0x4de)+'ter',_0x3c9206[_0x52e166(0x1a4)],[_0x52e166(0x32e),_0x3c9206['qIvgW']],_0x2ce014,(_0x8c9cd7,_0x2c3129)=>{var _0x41119b=_0x52e166;_0x50e4f2[_0x41119b(0x388)](_0x32d712,_0x1f7290,_0x2c3129,_0x36e450,'shoot'+'ers');},!![]);continue;case'2':if(_0x42d854['hookN'+_0x52e166(0x448)+'il'])_0x3e1d6f(_0x3c9206['GZgbO'],_0x52e166(0x2d3)+_0x52e166(0x302)+_0x52e166(0x597)+'.Over'+_0x52e166(0x28c)+'Recoi'+_0x52e166(0x1b8)+'on',_0x3c9206[_0x52e166(0x212)],[_0x52e166(0x32e)],_0x50f3aa,_0x15296d,!!_0x248f96[_0x52e166(0x123)+'oil']);continue;case'3':_0x249c3e=_0x357932['Unity'+_0x52e166(0x545)+'dkit']['Value'+_0x52e166(0x28a)+'er'];continue;case'4':if(_0x163076[_0x52e166(0x502)+_0x52e166(0x37e)])_0x3bd53d('godDi'+'e',_0x3c9206['SFyIY'],_0x3c9206[_0x52e166(0x11a)],[_0x3c9206[_0x52e166(0x15a)],'i32','i32','i32',_0x3c9206[_0x52e166(0x15a)]],_0x4098be,_0x11944b,!!_0x533f32[_0x52e166(0x49f)]);continue;case'5':if(_0x530d02[_0x52e166(0xe4)+'aptur'+'e'])_0x1c8e8b(_0x52e166(0x2e2)+'ve','Legio'+_0x52e166(0x302)+_0x52e166(0x597)+'.Over'+'tide.'+'Movem'+'ent','IsGro'+_0x52e166(0x2da),['i32'],'i32',(_0x19a02a,_0x346c24)=>{var _0x306ba1=_0x52e166;_0x175907(_0x34b5fb,_0x346c24,_0x3eabf6,_0x50e4f2[_0x306ba1(0x50c)]);},!![]);continue;case'6':_0x354c0f=_0x5359f5['Unity'+_0x52e166(0x545)+_0x52e166(0xf7)][_0x52e166(0x19f)+'me'][_0x52e166(0x2c8)+_0x52e166(0x594)+'in']({'name':_0x3c9206['TJlXC'],'version':_0x52e166(0x20c),'referencedAssemblies':[_0x3c9206[_0x52e166(0x247)]]});continue;}break;}}}}}}}else{if(!_0xd0001a||_0x38ea['inclu'+_0x52e166(0x65b)](_0x353248)||_0x50e4f2[_0x52e166(0xe3)](_0x494fdc[_0x52e166(0x460)+'h'],-0x96b+-0x1*0x2306+-0x2a1*-0x11))return;_0x555220[_0x52e166(0x268)](_0x4efd4a);}}function _0xdc5d61(_0x414710,_0x4dfc60,_0x308b14){var _0xaeb6c2=_0x1babda,_0x47f75a={'oiZhj':_0x3c9206[_0xaeb6c2(0x116)],'CLORs':function(_0x1bceef,_0x3d221a){var _0xbd0857=_0xaeb6c2;return _0x3c9206[_0xbd0857(0x321)](_0x1bceef,_0x3d221a);},'zfwlC':function(_0x28e9eb,_0x3c8c89){return _0x28e9eb>=_0x3c8c89;},'hxKEt':function(_0x12e3ca,_0x742b46){return _0x3c9206['QaWaD'](_0x12e3ca,_0x742b46);},'KfYyA':function(_0x5f3cc4){return _0x5f3cc4();},'PyYPW':function(_0x2f5f54){return _0x2f5f54();}};if(_0xaeb6c2(0x19a)!=='lRYjQ')_0x55accd=_0x5d93e2[_0xaeb6c2(0x416)](_0x3c9206[_0xaeb6c2(0x487)](_0x570a85,-0xd12+-0x35*-0x9+-0x1*-0xf1d)/_0x3c9206['iMqZg'](_0x59fc6d,_0x170c0d)),_0x76fb25=-0x205a*0x1+0x9*0x176+0x1334,_0x159daa=_0x338f5a;else{var _0x3b1707=_0x21cca1[_0xaeb6c2(0x18a)](_0x414710);!_0x3b1707&&(_0x3b1707=new Map(),_0x21cca1[_0xaeb6c2(0x64e)](_0x414710,_0x3b1707));if(!_0x3b1707[_0xaeb6c2(0x523)](_0x4dfc60))try{if(_0x3c9206['wRPEE']===_0x3c9206[_0xaeb6c2(0x59d)]){var _0x4822f2=_0x1bfab9['creat'+'eElem'+_0xaeb6c2(0x3ae)]('input');return _0x4822f2[_0xaeb6c2(0x6a7)]='color',_0x4822f2['class'+'Name']=_0x47f75a[_0xaeb6c2(0x250)],_0x4822f2[_0xaeb6c2(0x576)]=/^#[0-9a-f]{6}$/i[_0xaeb6c2(0x4ed)](_0x6f5b92)?_0x26a138:_0xaeb6c2(0x2c2)+'9d',_0x4822f2[_0xaeb6c2(0x354)+'ut']=()=>_0x1f223f(_0x4822f2[_0xaeb6c2(0x576)]),_0x4822f2;}else{var _0x1812f5=new _0x288370(_0x414710)['readF'+_0xaeb6c2(0x235)](_0x4dfc60,_0x308b14);_0x3b1707[_0xaeb6c2(0x64e)](_0x4dfc60,_0x1812f5!==undefined?_0x1812f5['val']():null);}}catch(_0x573c8a){if(_0x3c9206['qAUEQ']===_0xaeb6c2(0x187)){_0x47f75a[_0xaeb6c2(0x687)](_0x17c4ec,_0xe381ef),_0x2bbf2a++;var _0x520772=_0x4def8f['now']();_0x47f75a[_0xaeb6c2(0x315)](_0x520772-_0x3e1f1a,0x6c5+0x16dd+-0x1*0x1bae)&&(_0x547e7a=_0x2b97f2[_0xaeb6c2(0x416)](_0x47f75a[_0xaeb6c2(0x206)](_0x6f46dd*(0x1*0x1fe9+0x1ffe+-0x3bff),_0x520772-_0x178686)),_0x528f4b=0x7*0x50f+0x14*0x18a+-0x4231,_0x1f6bc5=_0x520772);_0x47f75a['KfYyA'](_0x5db08d),_0x47f75a[_0xaeb6c2(0x69b)](_0x1d790c),_0x991672['clear'+_0xaeb6c2(0x4f3)](-0xb9*-0x13+0xb*-0x185+0x2fc,0x1a6e+0x5bf*0x1+-0x1*0x202d,_0x73871c['w'],_0x4fc01e['h']);var _0x55e39b={'left':0x0,'top':0x0,'right':_0x1522f5['w'],'bottom':_0x4d13c6['h'],'width':_0x10d65c['w'],'height':_0x538451['h']};if(_0x573f71[_0xaeb6c2(0x6a4)+_0xaeb6c2(0x4b8)])_0x1f264f(_0x55e39b);if(_0x18ad06[_0xaeb6c2(0x50d)+_0xaeb6c2(0x295)])_0x51c2a7(_0x55e39b);_0x47f75a['CLORs'](_0x380607,_0x55e39b);}else _0x3b1707[_0xaeb6c2(0x64e)](_0x4dfc60,null);}return _0x3b1707[_0xaeb6c2(0x18a)](_0x4dfc60);}}function _0x1adb6c(_0x192a0d,_0x416e3c,_0x204a46,_0x113b09){var _0x5e72a3=_0x1babda;try{new _0x288370(_0x192a0d)['write'+_0x5e72a3(0x1de)](_0x416e3c,_0x204a46,_0x113b09);}catch(_0x268f97){}}function _0xe79576(_0x1f293f,_0x1d31e3){var _0x346ebd=_0x1babda;try{var _0x5b4de9=new _0x288370(_0x1f293f)['readF'+_0x346ebd(0x235)](_0x1d31e3,'u32');return _0x5b4de9?_0x5b4de9['val']():-0xd19*0x2+0x1d29+-0x2f7;}catch(_0x466c52){return 0x2*-0xf76+-0x61*0x40+-0x372c*-0x1;}}function _0x76cf89(_0x566303,_0x44931f,_0x29c232,_0x112393){var _0x2f6308=_0xdc5d61(_0x566303,_0x44931f,_0x29c232);if(_0x2f6308!=null)_0x3c9206['swSSc'](_0x1adb6c,_0x566303,_0x44931f,_0x29c232,_0x3c9206['cyHDQ'](_0x2f6308,_0x112393));}function _0x90fa2e(_0x3013ad,_0x38679d,_0xb07424,_0x4b1b03,_0x1fb589,_0x26f141,_0x9e4f67){var _0x592785=_0x1babda,_0x2c1f75={'TzZqH':function(_0xcbb381){return _0xcbb381();}};if(_0x3c9206[_0x592785(0x29d)](_0x3c9206[_0x592785(0x5df)],_0x592785(0x563)))_0x4582f4[_0x592785(0x5cf)+_0x592785(0x448)+'il']=_0x4c7464,_0x2c1f75[_0x592785(0x39b)](_0x48b151);else try{var _0x3b4490=_0x27de58['hookP'+_0x592785(0x616)]({'typeName':_0x38679d,'methodName':_0xb07424,'params':_0x4b1b03,'returnType':_0x1fb589},_0x26f141);return _0x3b4490['enabl'+'ed']=_0x9e4f67!==![],_0x2ea271[_0x3013ad]=_0x3b4490,_0x1ed0a9[_0x592785(0x4a5)+_0x592785(0x62b)]++,_0x3b4490;}catch(_0x446577){return console[_0x592785(0x4e0)]('[saku'+'ra-ko'+_0x592785(0x3c4)+_0x592785(0x63c)+_0x592785(0x590)+_0x592785(0x2e9),_0x3013ad,_0x446577&&_0x446577[_0x592785(0x36a)+'ge']),null;}}function _0x40006c(_0x314af2,_0x1cb1ae,_0x3d5cfd,_0x5bcb50,_0x4e5b2c,_0x2f22cc,_0x1cf746){var _0x10d85a=_0x1babda;try{var _0x22510b=_0x27de58['hookP'+'ostfi'+'x']({'typeName':_0x1cb1ae,'methodName':_0x3d5cfd,'params':_0x5bcb50,'returnType':_0x4e5b2c},_0x2f22cc);return _0x22510b[_0x10d85a(0x4ad)+'ed']=_0x3c9206['xgEqR'](_0x1cf746,![]),_0x2ea271[_0x314af2]=_0x22510b,_0x1ed0a9['hooks'+'Total']++,_0x22510b;}catch(_0x2e3322){return console[_0x10d85a(0x4e0)]('[saku'+_0x10d85a(0x51e)+_0x10d85a(0x3c4)+_0x10d85a(0x63c)+_0x10d85a(0x590)+'iled:',_0x314af2,_0x2e3322&&_0x2e3322[_0x10d85a(0x36a)+'ge']),null;}}var _0x44e85d=()=>![];try{if(window[_0x1babda(0x5b8)+_0x1babda(0x545)+_0x1babda(0xf7)]&&!_0x170730['safeM'+_0x1babda(0x454)]){_0x288370=window[_0x1babda(0x5b8)+'WebMo'+_0x1babda(0xf7)][_0x1babda(0x5c6)+_0x1babda(0x28a)+'er'],_0x27de58=window['Unity'+_0x1babda(0x545)+'dkit']['Runti'+'me']['creat'+'ePlug'+'in']({'name':'Sakur'+'aKour','version':_0x3c9206['lhFWU'],'referencedAssemblies':['Assem'+'bly-C'+_0x1babda(0x593)+_0x1babda(0x326)]});if(_0x170730['hookG'+'od'])_0x3c9206['sxviT'](_0x90fa2e,'god','OHeal'+'th','Initi'+_0x1babda(0x565)+'keHea'+'lth',['i32',_0x3c9206[_0x1babda(0x15a)]],undefined,_0x44e85d,!!_0x170730[_0x1babda(0x49f)]);if(_0x170730[_0x1babda(0x502)+'odDie'])_0x90fa2e(_0x3c9206[_0x1babda(0x65d)],'OHeal'+'th',_0x3c9206['mKQxH'],[_0x1babda(0x32e),'i32','i32',_0x3c9206[_0x1babda(0x15a)],_0x1babda(0x32e)],undefined,_0x44e85d,!!_0x170730['god']);if(_0x170730[_0x1babda(0x5cf)+_0x1babda(0x448)+'il'])_0x90fa2e(_0x1babda(0x123)+'oil','Legio'+_0x1babda(0x302)+'forms'+'.Over'+'tide.'+'Recoi'+'lMoti'+'on',_0x1babda(0x1c3),[_0x1babda(0x32e)],undefined,_0x44e85d,!!_0x170730[_0x1babda(0x123)+'oil']);if(_0x170730[_0x1babda(0xe4)+_0x1babda(0x36e)+'e'])_0x3c9206[_0x1babda(0x663)](_0x40006c,_0x3c9206[_0x1babda(0x542)],_0x3c9206[_0x1babda(0x18e)],_0x3c9206['VNsMW'],[_0x1babda(0x32e),_0x3c9206[_0x1babda(0x15a)]],undefined,(_0x4f5c8a,_0x12ac68)=>{var _0x2d6e64=_0x1babda;_0x5a6e93(_0x17007b,_0x12ac68,_0x1ed0a9,_0x2d6e64(0x53b)+_0x2d6e64(0x500));},!![]);if(_0x170730['hookC'+_0x1babda(0x36e)+'e'])_0x3c9206[_0x1babda(0x569)](_0x40006c,_0x3c9206['NdjYM'],'Legio'+'nPlat'+_0x1babda(0x597)+_0x1babda(0x18f)+_0x1babda(0x28c)+_0x1babda(0x177)+_0x1babda(0x3ae),_0x3c9206[_0x1babda(0x10b)],[_0x3c9206[_0x1babda(0x15a)]],'i32',(_0x166611,_0x15434e)=>{var _0x2b74ef=_0x1babda,_0x5d0b67={'KhrCo':'unkno'+'wn','fBpYP':function(_0x302eda,_0x1b9fa1){return _0x302eda(_0x1b9fa1);},'Aqrzd':'error'};'cwMtG'==='IZHkr'?_0x391ec5['addEv'+'entLi'+_0x2b74ef(0x248)+'r'](_0x5d0b67[_0x2b74ef(0x221)],_0x116844=>{var _0x2ca99d=_0x2b74ef;try{var _0x3c2d02=_0x116844&&(_0x116844[_0x2ca99d(0x36a)+'ge']||_0x116844[_0x2ca99d(0x32c)]&&_0x116844[_0x2ca99d(0x32c)]['messa'+'ge'])||_0x5d0b67['KhrCo'];if(_0x116844&&_0x116844[_0x2ca99d(0x468)+_0x2ca99d(0x3e6)])_0x3c2d02+='\x20@\x20'+_0x5d0b67['fBpYP'](_0xfd55cf,_0x116844[_0x2ca99d(0x468)+'ame'])['split']('/')['pop']()+':'+(_0x116844[_0x2ca99d(0x4ff)+'o']||'?');_0x3fa1ac[_0x2ca99d(0x649)+'rror']=_0x3f4f3d(_0x3c2d02)['slice'](-0x11*-0x116+-0x1cac+0x2*0x51b,-0xd7*0xc+-0x3*-0x14b+-0x1*-0x6d3);}catch(_0x488d1a){}}):_0x5a6e93(_0x1a0d25,_0x15434e,_0x1ed0a9,'movem'+_0x2b74ef(0x397));},!![]);}}catch(_0x512bc2){console['warn'](_0x3c9206[_0x1babda(0x22f)],_0x512bc2&&_0x512bc2[_0x1babda(0x36a)+'ge']);}function _0x3b1256(_0xe54357,_0x5b6806){var _0x7d0c4e=_0x1babda,_0x32b079=_0x2ea271[_0xe54357];if(_0x32b079)try{_0x32b079[_0x7d0c4e(0x4ad)+'ed']=!!_0x5b6806;}catch(_0xc7a239){}}setInterval(()=>{var _0x4c3ddc=_0x1babda;if(!_0x288370||!window['unity'+'Insta'+_0x4c3ddc(0x373)])return;var _0x3c5432=(Number(_0x170730[_0x4c3ddc(0x53a)+'Pct'])||-0x1*0x1c0b+-0x71*0x1f+-0x2a1e*-0x1)/(-0x1d22+-0x246a+0x41f0),_0x2a56d2=(_0x3c9206['kMNRv'](Number,_0x170730[_0x4c3ddc(0x15e)+'ct'])||-0xb71+-0x1b75+0x274a)/(0x201*-0xf+0x1071+0xe02),_0x524c2d=_0x3c9206[_0x4c3ddc(0x477)](_0x3c9206['YKTiz'](Number,_0x170730[_0x4c3ddc(0x50a)+_0x4c3ddc(0x1f4)])||-0x2151+0xc14+-0x31*-0x71,0x3*-0x4b4+0xdd1+-0x5*-0x23),_0x102ab6=Math['max'](-0x35*0x7a+-0xb87+0x24ca,Number(_0x170730[_0x4c3ddc(0x159)+'eValu'+'e'])||0x216b+-0x18b7*-0x1+-0x398c),_0x1b28c1=_0x3c5432!==0x2369+-0xaab+0x3*-0x83f||_0x3c9206['bksiF'](_0x2a56d2,-0x169c+-0x1*-0x15a5+-0x3e*-0x4)||_0x524c2d!==0xc38+0x1f*0x8e+-0x1*0x1d69||_0x170730[_0x4c3ddc(0x11b)],_0x502f47=_0x170730[_0x4c3ddc(0x55e)+'ead']||_0x170730['damag'+_0x4c3ddc(0x379)]||_0x170730[_0x4c3ddc(0x5c2)+'moExp']||_0x170730[_0x4c3ddc(0x358)+_0x4c3ddc(0x267)];if(!_0x1b28c1&&!_0x502f47)return;try{if(_0x4c3ddc(0xde)===_0x3c9206[_0x4c3ddc(0x61a)])_0x7971d6['assig'+'n'](_0x3ea56e,_0x14ce50['parse'](_0xec7bc7[_0x4c3ddc(0x44b)+'em']('sakur'+_0x4c3ddc(0x604)+_0x4c3ddc(0x628))||'{}'));else for(var _0x4fc199=-0x2400+0xe76+-0x2*-0xac5;_0x4fc199<_0x1a0d25['lengt'+'h'];_0x4fc199++){var _0x4164f0=_0x1a0d25[_0x4fc199];if(!_0x4164f0)continue;_0x3c5432!==-0x1eb0+-0x6bc+-0x2e1*-0xd&&(_0x3c9206['bxPTS'](_0x76cf89,_0x4164f0,0x134b*-0x2+0x268*-0x3+0x2df6,_0x3c9206['RzwBu'],_0x3c5432),_0x76cf89(_0x4164f0,0x1cac*0x1+0x165a+0x236*-0x17,_0x3c9206['RzwBu'],_0x3c5432),_0x3c9206[_0x4c3ddc(0x3b2)](_0x76cf89,_0x4164f0,0x134d+-0x2535+0x1218,_0x4c3ddc(0x320),_0x3c5432),_0x76cf89(_0x4164f0,0x1713+-0x11*-0x2b+-0x19ba,_0x4c3ddc(0x320),_0x3c5432),_0x76cf89(_0x4164f0,-0xed0+-0x1f2+0x22*0x7f,_0x4c3ddc(0x320),_0x3c5432),_0x76cf89(_0x4164f0,-0x3*0xa9d+-0x26ed+0x2*0x2372,_0x4c3ddc(0x320),_0x3c5432));if(_0x2a56d2!==-0xfbb+0x1*0x1804+-0x848)_0x3c9206['swSSc'](_0x76cf89,_0x4164f0,0x2330+0x166f*-0x1+0x5*-0x27d,_0x3c9206['RzwBu'],_0x2a56d2);_0x3c9206[_0x4c3ddc(0x632)](_0x524c2d,-0x230c+0x1*0x4f4+0x1e19)&&(_0x3c9206[_0x4c3ddc(0x231)](_0x76cf89,_0x4164f0,-0x93a*-0x2+-0xbc1+0x1f*-0x35,'f32',_0x524c2d),_0x76cf89(_0x4164f0,0x5b*-0x3+-0x1*0x1f67+-0x24*-0xe9,_0x4c3ddc(0x320),_0x524c2d));if(_0x170730[_0x4c3ddc(0x11b)])_0x3c9206['bxPTS'](_0x1adb6c,_0x4164f0,-0x6b+0x19*0x7+0x58,'f32',-(0xdd8+-0x7c1*0x3+0xd52));}}catch(_0xe88782){}try{for(var _0x35812a=-0x7*-0x105+0x1eee+0x5*-0x79d;_0x3c9206['HlJgx'](_0x35812a,_0x17007b[_0x4c3ddc(0x460)+'h']);_0x35812a++){var _0x4d3713=_0xe79576(_0x17007b[_0x35812a],-0x1e2+0x21f+-0x5);if(!_0x4d3713)continue;_0x170730[_0x4c3ddc(0x159)+_0x4c3ddc(0x379)]&&(_0x3c9206[_0x4c3ddc(0x29d)](_0x4c3ddc(0x34f),_0x3c9206[_0x4c3ddc(0x41d)])?(_0x5ea6ff['ksSca'+'le']=_0x290760,_0x5b9c45()):(_0x1adb6c(_0x4d3713,0x4a0+0x163*-0xb+0xaed*0x1,_0x3c9206[_0x4c3ddc(0x15a)],_0x102ab6),_0x3c9206[_0x4c3ddc(0x480)](_0x1adb6c,_0x4d3713,0x20d3+0x1c02+0x3*-0x142b,_0x4c3ddc(0x32e),_0x102ab6)));_0x170730[_0x4c3ddc(0x55e)+_0x4c3ddc(0x272)]&&(_0x3c9206[_0x4c3ddc(0x605)](_0x1adb6c,_0x4d3713,0x199*0x3+0xda1+-0x11e4,_0x3c9206[_0x4c3ddc(0x3f4)],-0xdc*-0x12+-0x54*-0x3e+-0x23d*0x10),_0x3c9206[_0x4c3ddc(0x2df)](_0x1adb6c,_0x4d3713,0x1f45+0x1a8e+-0x1*0x396b,_0x3c9206[_0x4c3ddc(0x3f4)],0x1fcc+-0xa67*0x3+0x96*-0x1));if(_0x170730[_0x4c3ddc(0x5c2)+'moExp'])_0x1adb6c(_0x4d3713,-0x19e1+0xc56*-0x3+0x3f3f,_0x3c9206[_0x4c3ddc(0x15a)],0x1*0x957+0x1*0x1621+-0x1b91);_0x170730[_0x4c3ddc(0x358)+'Exp']&&(_0x76cf89(_0x4d3713,0x18a9+0x248b+0xf2a*-0x4,_0x3c9206['RzwBu'],-0x9b2+0x19*-0x1f+-0xcb9*-0x1+0.1),_0x1adb6c(_0x4d3713,-0x1*0x1257+0x361+0x2*0x7ab,_0x4c3ddc(0x320),-0x1cdd+0x3c*-0x4a+0x2e35+0.1));}}catch(_0x2f9185){}},0x17*-0x1d+0x1*-0x1ca5+-0x401*-0x8),setInterval(()=>{var _0x1afaa=_0x1babda;_0x1ed0a9['gameL'+_0x1afaa(0x2ee)]=!!window[_0x1afaa(0x514)+'Insta'+'nce'];try{var _0x446c47=-0x1f77+-0x6a3+-0x130d*-0x2;for(var _0x24fe8b in _0x2ea271){if(_0x2ea271[_0x24fe8b]&&_0x2ea271[_0x24fe8b]['appli'+'ed'])_0x446c47++;}_0x1ed0a9[_0x1afaa(0x4a5)+'Ok']=_0x446c47;}catch(_0x231942){}},-0x9b*0x1d+-0x16b7+0x2c2e);var _0x318f24=new Set(),_0x1e9487={0x1:[],0x3:[]},_0x2736fe=![];function _0xf64141(_0x38e82d){var _0x3d3d6f=_0x1babda;_0x318f24['add'](_0x38e82d[_0x3d3d6f(0x533)]);}function _0x4d65af(_0x3b271f){var _0x3310a5=_0x1babda;_0x318f24[_0x3310a5(0x132)+'e'](_0x3b271f[_0x3310a5(0x533)]);}function _0x30274c(_0xa4707f){var _0x19f56b=_0x1babda;if(_0x3c9206[_0x19f56b(0x2bb)]===_0x3c9206[_0x19f56b(0x2bb)]){if(_0xa4707f[_0x19f56b(0x6aa)+_0x19f56b(0x38a)])return;_0x318f24['add'](_0x3c9206['BTgOD'](_0x19f56b(0x15c),_0xa4707f[_0x19f56b(0x579)+'n']+(-0x1fb6+0x25af+-0x8*0xbf)));var _0x1763e4=_0x1e9487[_0xa4707f['butto'+'n']+(0x6*-0x445+-0x1f88+0x3*0x130d)];if(_0x1763e4){if(_0x19f56b(0x256)==='qeMKH')_0x5babe8=new _0x5ecf2e(),_0x2da8f7['set'](_0x278a2d,_0x472d82);else{_0x1763e4['push'](performance['now']());if(_0x1763e4['lengt'+'h']>-0xf77*-0x1+-0x1ea2+0xf53)_0x1763e4['shift']();}}}else _0x1088de[_0x19f56b(0x132)+'e'](_0x261836['code']);}function _0x576297(_0x355069){var _0x378340=_0x1babda;if(!_0x355069[_0x378340(0x6aa)+'ura'])_0x318f24[_0x378340(0x132)+'e'](_0x3c9206['FiNJX']('mouse',_0x3c9206[_0x378340(0x288)](_0x355069['butto'+'n'],0x8*0x31d+0x2491+-0x3d78)));}function _0xb0db03(){var _0x4e5ee2=_0x1babda;_0x4e5ee2(0x2f1)!==_0x4e5ee2(0x2f1)?_0x161a60(!_0xf14746):_0x318f24[_0x4e5ee2(0x488)]();}function _0x23c6c3(){var _0x83370d=_0x1babda,_0x2e420e=(_0x83370d(0x5bd)+_0x83370d(0x5f4)+'6|0')['split']('|'),_0x3a2b8c=-0x243*-0x3+-0x49e*-0x7+-0x271b;while(!![]){switch(_0x2e420e[_0x3a2b8c++]){case'0':window[_0x83370d(0x266)+'entLi'+_0x83370d(0x248)+'r'](_0x3c9206[_0x83370d(0x1ad)],_0xb0db03);continue;case'1':window['addEv'+_0x83370d(0x527)+_0x83370d(0x248)+'r'](_0x3c9206[_0x83370d(0x1b1)],_0x30274c,!![]);continue;case'2':_0x2736fe=!![];continue;case'3':if(_0x2736fe)return;continue;case'4':window[_0x83370d(0x266)+'entLi'+_0x83370d(0x248)+'r']('keydo'+'wn',_0xf64141,!![]);continue;case'5':window[_0x83370d(0x266)+_0x83370d(0x527)+_0x83370d(0x248)+'r']('keyup',_0x4d65af,!![]);continue;case'6':window[_0x83370d(0x266)+_0x83370d(0x527)+_0x83370d(0x248)+'r']('mouse'+'up',_0x576297,!![]);continue;}break;}}function _0x206911(_0x44ebc5){var _0x1d7a50=_0x1babda,_0x35a1d6=_0x1e9487[_0x44ebc5]||[],_0x3860e5=performance[_0x1d7a50(0x14b)]();while(_0x35a1d6[_0x1d7a50(0x460)+'h']&&_0x3c9206[_0x1d7a50(0x4bb)](_0x3860e5,_0x35a1d6[0x2*-0x304+-0x1*-0x26e1+0x20d9*-0x1])>0x7d9+0x21f+-0x610)_0x35a1d6[_0x1d7a50(0x67b)]();return _0x35a1d6['lengt'+'h'];}function _0x216e09(_0x352314){var _0xcd6ce6=_0x1babda;if(_0x3c9206['nYNST']!==_0xcd6ce6(0x1f2)){if(document[_0xcd6ce6(0x21e)]&&(document[_0xcd6ce6(0x4fa)+_0xcd6ce6(0x511)]===_0xcd6ce6(0x5c4)+'activ'+'e'||_0x3c9206[_0xcd6ce6(0x3b5)](document[_0xcd6ce6(0x4fa)+_0xcd6ce6(0x511)],_0x3c9206[_0xcd6ce6(0x3eb)])))_0x352314();else document['addEv'+_0xcd6ce6(0x527)+_0xcd6ce6(0x248)+'r'](_0xcd6ce6(0x282)+_0xcd6ce6(0x14c)+_0xcd6ce6(0x3f1)+'d',_0x352314,{'once':!![]});}else _0x4304e5['ksPos']=_0x8f5e85,_0x579f29();}_0x216e09(()=>{var _0x2eb896=_0x1babda,_0x7fa5cf={'mlNmE':_0x3c9206[_0x2eb896(0x13b)],'AYwrY':_0x3c9206[_0x2eb896(0x382)],'vdkyR':_0x2eb896(0x1be)+_0x2eb896(0x16e)+'-banr'+'s','WbbMl':_0x2eb896(0x230),'atExE':function(_0x1a128c,_0x522c58){var _0x1cd493=_0x2eb896;return _0x3c9206[_0x1cd493(0x27f)](_0x1a128c,_0x522c58);},'Jsdiv':function(_0x1b9f7a,_0x4b33c9){return _0x1b9f7a===_0x4b33c9;},'JTaFZ':_0x2eb896(0x49c)+_0x2eb896(0x3ff),'GkYXd':_0x2eb896(0x207)+'255,1'+_0x2eb896(0x558)+'7,0.8'+'5)','iOYQz':_0x3c9206[_0x2eb896(0x2a1)],'nvFMB':function(_0x1a122e,_0x32d0dd){return _0x1a122e+_0x32d0dd;},'JTMnG':function(_0x5137be,_0x35e7f6){return _0x5137be-_0x35e7f6;},'DCgNn':function(_0x55e8a6,_0x4a08d8){return _0x55e8a6/_0x4a08d8;},'wpswR':'600\x20','kCaMf':_0x3c9206[_0x2eb896(0x4f2)],'NVICV':function(_0x5a2a9b,_0x2f1880){return _0x5a2a9b+_0x2f1880;},'SbfLP':_0x3c9206[_0x2eb896(0x391)],'LsBNW':_0x2eb896(0x17f),'VXXKf':function(_0x321b74,_0x5aee70){return _0x321b74+_0x5aee70;},'LrtSu':'KeyD','puUwe':function(_0x55f19e,_0x488149){return _0x55f19e+_0x488149;},'cGHiv':_0x3c9206[_0x2eb896(0x55b)],'VqHcd':'\x20CPS','IqeHM':function(_0x866360,_0x8526e8){return _0x866360!==_0x8526e8;},'xHebt':function(_0x274206,_0x4f23f6){return _0x274206*_0x4f23f6;},'rIcoT':'5|8|1'+_0x2eb896(0x485)+_0x2eb896(0x2b2)+_0x2eb896(0x5f9)+_0x2eb896(0x26b)+'1|10|'+_0x2eb896(0x646),'uQtjO':function(_0x1d003a,_0x286466){return _0x1d003a+_0x286466;},'AyEdg':function(_0x40c015,_0x18b259){var _0x3c474b=_0x2eb896;return _0x3c9206[_0x3c474b(0x521)](_0x40c015,_0x18b259);},'VvLSW':function(_0x206480,_0x59a28c){return _0x206480/_0x59a28c;},'aBcte':function(_0x32383a,_0x344446){var _0x5228aa=_0x2eb896;return _0x3c9206[_0x5228aa(0x46e)](_0x32383a,_0x344446);},'MrCfw':function(_0x1d081c,_0xb249fb){return _0x3c9206['BfBSw'](_0x1d081c,_0xb249fb);},'IkwXU':'KeyA','XjoUG':'rgba('+_0x2eb896(0x3be)+_0x2eb896(0x558)+_0x2eb896(0x5b0)+'5)','YhNGO':'cente'+'r','oGWqy':function(_0x422ae6,_0x4cd1bd){var _0x40623a=_0x2eb896;return _0x3c9206[_0x40623a(0x487)](_0x422ae6,_0x4cd1bd);},'ojLyN':function(_0x280600,_0xb40863){return _0x280600/_0xb40863;},'VOsRh':function(_0x4a0cfc,_0x631bf8){return _0x4a0cfc(_0x631bf8);},'JSPrf':function(_0x46fc47,_0x5adbed,_0x21320e,_0x2fa0cd,_0x4c7760,_0x361ea3,_0x455c63){return _0x46fc47(_0x5adbed,_0x21320e,_0x2fa0cd,_0x4c7760,_0x361ea3,_0x455c63);},'SYYCT':'KeyS','ztDkq':_0x2eb896(0x3f3),'UbVLp':function(_0x3abae2,_0x52e8c1){var _0x44f1b6=_0x2eb896;return _0x3c9206[_0x44f1b6(0x518)](_0x3abae2,_0x52e8c1);},'ZpYSA':function(_0x49707b,_0x517b44){var _0x21de6a=_0x2eb896;return _0x3c9206[_0x21de6a(0x606)](_0x49707b,_0x517b44);},'bUlgh':function(_0xd9dc15,_0x2f1fbd){return _0xd9dc15-_0x2f1fbd;},'QxlnQ':function(_0x46314d,_0x43c30c){var _0x246f82=_0x2eb896;return _0x3c9206[_0x246f82(0x5f0)](_0x46314d,_0x43c30c);},'LZlfC':_0x3c9206['TYYBK'],'wVvTf':function(_0x3e7272,_0x5e6db3){return _0x3e7272+_0x5e6db3;},'alJSl':function(_0x33d2c8,_0x59c8c6){return _0x33d2c8(_0x59c8c6);},'jqHFj':_0x3c9206['uEvgL'],'pUkod':_0x3c9206[_0x2eb896(0x3fb)],'LrNRq':function(_0x466a4c,_0x2ecc4f){var _0x4898dc=_0x2eb896;return _0x3c9206[_0x4898dc(0x1d9)](_0x466a4c,_0x2ecc4f);},'vXovf':function(_0x573010){return _0x573010();},'aPvnA':function(_0x585669,_0x1762a1){var _0x1131c7=_0x2eb896;return _0x3c9206[_0x1131c7(0x3ac)](_0x585669,_0x1762a1);},'GsyUh':'NhHYK','rLVpl':function(_0x445d92,_0x34d1e0){var _0x163e4b=_0x2eb896;return _0x3c9206[_0x163e4b(0x190)](_0x445d92,_0x34d1e0);},'gDRsT':_0x3c9206[_0x2eb896(0x237)],'Mdbhu':_0x3c9206['wunNM'],'vPzeD':'role','Ktxry':_0x2eb896(0x553)+'h','jSigA':_0x3c9206[_0x2eb896(0x44c)],'LxUHQ':_0x3c9206[_0x2eb896(0x3eb)],'WPXtF':_0x3c9206['uXGIT'],'fFxzd':'yKBaj','gtwdk':_0x3c9206[_0x2eb896(0x116)],'atnpf':function(_0x4c244c,_0x2b7d0f,_0x3efc77,_0x27a928,_0x4fcdb0){return _0x4c244c(_0x2b7d0f,_0x3efc77,_0x27a928,_0x4fcdb0);},'DBxcZ':'sk-ca'+'rd','UZigU':_0x3c9206[_0x2eb896(0x31a)],'UVuUO':_0x2eb896(0x2e8)+'rd-he'+'ad','JQFaf':_0x2eb896(0x145)+'g','TUAIJ':'Unity'+'Engin'+'e.App'+'licat'+'ion','VLLSZ':function(_0x335614){return _0x335614();},'kLgte':_0x2eb896(0x572)+'d','aTZLr':function(_0x4c587c){return _0x4c587c();},'yyEni':function(_0x3be8e5,_0x2cb595){return _0x3be8e5!==_0x2cb595;},'eOumZ':_0x2eb896(0x51c),'DTpZx':function(_0x3bcdf7){return _0x3bcdf7();},'CzpJu':function(_0x160880){var _0x25cd3a=_0x2eb896;return _0x3c9206[_0x25cd3a(0x54d)](_0x160880);},'qJNNR':function(_0x1c1c5a){return _0x1c1c5a();},'Goklh':function(_0x54a7a1){return _0x54a7a1();},'pFgjP':_0x3c9206['eFyvD'],'UCiYy':_0x3c9206[_0x2eb896(0x684)],'UcMXR':'PIFQL','eklRy':function(_0x2fe456){var _0x225a0b=_0x2eb896;return _0x3c9206[_0x225a0b(0x40c)](_0x2fe456);},'XliUT':_0x3c9206['JILlW'],'uNdzK':'SAFE','ZGNyN':function(_0x5bdb5a,_0x232a69){return _0x5bdb5a+_0x232a69;},'KBGwG':function(_0x62091a,_0xdc5f3c){var _0x347685=_0x2eb896;return _0x3c9206[_0x347685(0x239)](_0x62091a,_0xdc5f3c);},'EkIRW':function(_0x2f7e2b,_0x2aa802){return _0x2f7e2b+_0x2aa802;},'KUqsV':'APHxP','KFWSz':_0x3c9206['BmdLa'],'rScYk':_0x3c9206['GbPbG'],'oqKDP':function(_0x2087c1){return _0x3c9206['fMMae'](_0x2087c1);},'OeDNC':_0x2eb896(0x2fd)+_0x2eb896(0x454),'mrgIc':function(_0x495047,_0x43f2c6,_0x351490,_0x263caa,_0x208ce6,_0x107899){return _0x495047(_0x43f2c6,_0x351490,_0x263caa,_0x208ce6,_0x107899);},'kDnqZ':'Rapid'+'\x20Fire'+_0x2eb896(0x280)+']','cJyPM':'Damag'+'e\x20[EX'+'P]','nHKjA':function(_0x274e34,_0x5b34db,_0x20d6e6,_0x505263,_0x55adb8,_0x53173a){return _0x274e34(_0x5b34db,_0x20d6e6,_0x505263,_0x55adb8,_0x53173a);},'dLtpL':_0x2eb896(0x2fe)+'ls\x20th'+'e\x20wea'+'pon\x27s'+_0x2eb896(0x439)+'ed\x20am'+_0x2eb896(0x192)+'\x20999\x20'+_0x2eb896(0x673)+'\x20200m'+'s.','gTuQx':_0x3c9206[_0x2eb896(0x2de)],'tRoLH':_0x2eb896(0x66b),'IEhDJ':function(_0x3bf337,_0x4ca711){return _0x3c9206['Yamjl'](_0x3bf337,_0x4ca711);},'AgxRu':_0x2eb896(0x66b)+'\x20%','aUEQH':'100\x20='+_0x2eb896(0x3bd)+'ult','EQreE':_0x2eb896(0x586)+_0x2eb896(0x674)+_0x2eb896(0x3a3),'lkbOu':'Scale'+'s\x20Mov'+_0x2eb896(0x4bc)+_0x2eb896(0x36f)+'Force'+_0x2eb896(0x131)+_0x2eb896(0x20a)+_0x2eb896(0x50a)+_0x2eb896(0x688)+_0x2eb896(0x43c),'wmual':function(_0x5ecc4f,_0x294e16,_0x438b7e,_0x30f338){return _0x5ecc4f(_0x294e16,_0x438b7e,_0x30f338);},'VPQLa':_0x2eb896(0x414)+_0x2eb896(0x4a8)+_0x2eb896(0x618),'gbSbM':function(_0x58353f,_0x88e728,_0x316791,_0x2b5f09,_0x59327e,_0x30e81c){return _0x58353f(_0x88e728,_0x316791,_0x2b5f09,_0x59327e,_0x30e81c);},'gALXI':_0x2eb896(0x31c)+'l','zdKND':_0x3c9206['gwoPT'],'TItlA':_0x2eb896(0x1c6)+'m\x20lef'+'t','JThtU':function(_0x5b5ef7,_0x566a73,_0x56d7d2,_0x4f39d5){return _0x5b5ef7(_0x566a73,_0x56d7d2,_0x4f39d5);},'WOaiH':'CPS\x20r'+'eadou'+'t','BhWEc':function(_0x1575a6,_0x555bda,_0x31b0ff){return _0x1575a6(_0x555bda,_0x31b0ff);},'yzjTM':'Size','FFTSd':function(_0x3d3aff,_0x1d5312,_0x45c496){return _0x3d3aff(_0x1d5312,_0x45c496);},'hKesG':function(_0xe1b6ea,_0x5e2bba,_0x1cedab,_0x4d3f26){return _0x3c9206['XtPtu'](_0xe1b6ea,_0x5e2bba,_0x1cedab,_0x4d3f26);},'QpQYD':_0x2eb896(0x4e1)+_0x2eb896(0x1e1)+'r','APxVg':function(_0x6f1004,_0x21cdfd){return _0x6f1004(_0x21cdfd);},'DWulK':_0x2eb896(0x3ca),'fzAix':_0x3c9206[_0x2eb896(0x2e4)],'iWkvV':_0x2eb896(0x323)+'\x20effe'+'ct\x20on'+_0x2eb896(0x2d5)+_0x2eb896(0x3c9)+'en\x20to'+_0x2eb896(0x4d9)+'.','wONkI':_0x3c9206['fiUcJ'],'rdhWS':'Skips'+'\x20UWMK'+'\x20enti'+_0x2eb896(0x58d)+_0x2eb896(0x546)+_0x2eb896(0x475)+_0x2eb896(0x4a5)+'.\x20Use'+_0x2eb896(0x28b)+'\x20if\x20m'+_0x2eb896(0x20f)+'s\x20won'+_0x2eb896(0x1d4)+_0x2eb896(0x4c1),'NSCpA':function(_0x3a5261,_0x135ce4,_0x14777a,_0x4e8900){return _0x3a5261(_0x135ce4,_0x14777a,_0x4e8900);},'TFtDe':function(_0x5b2896,_0x2dd390,_0x40b883,_0x513f6d){return _0x3c9206['EIZRS'](_0x5b2896,_0x2dd390,_0x40b883,_0x513f6d);},'vQOza':'noRec'+_0x2eb896(0x218)+_0x2eb896(0x21b)+_0x2eb896(0x1b8)+_0x2eb896(0x3c6)+'ck)','mWbVb':function(_0x309212,_0x1c0d59,_0x3a2fc5){return _0x309212(_0x1c0d59,_0x3a2fc5);},'cWpwn':_0x2eb896(0x270)+_0x2eb896(0x228)+'etGam'+_0x2eb896(0x470)+_0x2eb896(0x26d)+'\x20IsGr'+_0x2eb896(0x415)+'d)','wVEwL':_0x3c9206[_0x2eb896(0x361)],'JqmWF':'Dange'+'r','acUOu':function(_0x5c03b3,_0x5db4bd,_0x1a161e){return _0x3c9206['mMfAw'](_0x5c03b3,_0x5db4bd,_0x1a161e);},'VErFz':_0x2eb896(0x4eb),'VfsmQ':function(_0x23115b,_0xb00d1){return _0x23115b+_0xb00d1;},'YeEtH':'<smal'+'l>','dXcaT':_0x2eb896(0x403)+'desc','deuHh':'UWMK','NxNSX':_0x3c9206[_0x2eb896(0x636)],'xiDuJ':function(_0x486d19,_0x35b42b){var _0x5b92d8=_0x2eb896;return _0x3c9206[_0x5b92d8(0x672)](_0x486d19,_0x35b42b);},'fluLY':function(_0x3d6e8d,_0x50cbcf){return _0x3d6e8d+_0x50cbcf;},'UzYil':function(_0x4667f5,_0x255383){return _0x4667f5+_0x255383;},'fWeHQ':'0\x20hoo'+'ks\x20ar'+_0x2eb896(0x16a)+_0x2eb896(0x639)+_0x2eb896(0x194),'utLLp':_0x3c9206[_0x2eb896(0x340)],'naVDR':_0x2eb896(0x5ad),'wkVFN':'\x20|\x20mo'+_0x2eb896(0x164)+'t\x20','gbLdR':'\x20|\x20ER'+'R:\x20','nYeBJ':function(_0x28ac5d,_0x1a3eee,_0x4581dc){return _0x3c9206['ldwix'](_0x28ac5d,_0x1a3eee,_0x4581dc);},'Pxgmv':'iELiS','LTmzy':_0x2eb896(0x103)};_0x170730[_0x2eb896(0x45b)+'ck']&&setInterval(()=>{var _0x522c39=_0x2eb896;try{for(var _0x5221eb of[_0x522c39(0x49c)+'io_30'+_0x522c39(0x691)+_0x522c39(0x6a3)+'nt',_0x7fa5cf[_0x522c39(0x309)],_0x7fa5cf['AYwrY'],_0x7fa5cf[_0x522c39(0x1d3)]]){if(_0x522c39(0x230)===_0x7fa5cf['WbbMl']){var _0x3495f6=document[_0x522c39(0x374)+_0x522c39(0x4bc)+_0x522c39(0x5a5)](_0x5221eb);if(_0x3495f6&&_0x5221eb===_0x522c39(0x1be)+_0x522c39(0x16e)+'-banr'+'s'){var _0x458697=_0x3495f6['child'+'ren'];for(var _0x2ce876=0x25c6+0x1dfe+-0x43c4;_0x7fa5cf[_0x522c39(0x2bf)](_0x2ce876,_0x458697['lengt'+'h']);_0x2ce876++){if(_0x458697[_0x2ce876]['id']&&_0x7fa5cf['Jsdiv'](_0x458697[_0x2ce876]['id']['index'+'Of'](_0x7fa5cf['JTaFZ']),-0x43a+0xb*0x1f2+0x1*-0x112c))_0x458697[_0x2ce876][_0x522c39(0x252)][_0x522c39(0x1dc)+'ay']='none';}}else{if(_0x3495f6)_0x3495f6[_0x522c39(0x252)][_0x522c39(0x1dc)+'ay']=_0x522c39(0x5ad);}}else _0x2366db['hookG'+'od']=_0x42526c,_0x3d212a['hookG'+'odDie']=_0x1e1592,_0x21cf89[_0x522c39(0x5cf)+'oReco'+'il']=_0x8328f1,_0x38b5cf[_0x522c39(0xe4)+'aptur'+'e']=_0x45867b,_0x8e8f37(),_0x2e96fe[_0x522c39(0x5e6)+'d']();}}catch(_0x278b7e){}},-0x126*0xd+0x25c7+0xf09*-0x1);var _0x35e5cd=document['creat'+'eElem'+_0x2eb896(0x3ae)]('canva'+'s');_0x35e5cd['style'][_0x2eb896(0x2c3)+'xt']=_0x2eb896(0x4a4)+'ion:f'+_0x2eb896(0x2f4)+'inset'+':0;wi'+_0x2eb896(0x552)+_0x2eb896(0x33c)+_0x2eb896(0x437)+_0x2eb896(0x1bb)+_0x2eb896(0x689)+'index'+_0x2eb896(0x5d7)+_0x2eb896(0x660)+_0x2eb896(0x400)+'nter-'+_0x2eb896(0x2ae)+_0x2eb896(0x3d7)+'e';var _0x215d1f=_0x35e5cd['getCo'+_0x2eb896(0x69a)]('2d');function _0xfb8a83(){var _0x7a0b7a=_0x2eb896;try{var _0x34b755=document['fulls'+_0x7a0b7a(0x16e)+_0x7a0b7a(0x65f)+'nt'],_0x469af3=_0x34b755&&_0x34b755[_0x7a0b7a(0x591)+'me']!==_0x7a0b7a(0x223)+'S'?_0x34b755:document[_0x7a0b7a(0x21e)]||document['docum'+_0x7a0b7a(0x1e8)+_0x7a0b7a(0x4bc)];if(_0x35e5cd['paren'+'tNode']!==_0x469af3)_0x469af3['appen'+_0x7a0b7a(0xe6)+'d'](_0x35e5cd);}catch(_0x126e8e){try{document['body']['appen'+'dChil'+'d'](_0x35e5cd);}catch(_0x1fa72a){}}}var _0xa39db3={'w':0x0,'h':0x0,'dpr':0x0};function _0x23f327(){var _0x2daae4=_0x2eb896,_0x30768e={'BakIr':_0x7fa5cf[_0x2daae4(0x102)],'FqxCY':_0x7fa5cf['iOYQz'],'fItaV':function(_0x13b395,_0x516f33){var _0x390803=_0x2daae4;return _0x7fa5cf[_0x390803(0x4ec)](_0x13b395,_0x516f33);},'ufFNe':function(_0x342e3d,_0x1442c9){var _0x5b8471=_0x2daae4;return _0x7fa5cf[_0x5b8471(0x635)](_0x342e3d,_0x1442c9);},'pnnLw':function(_0x2456a7,_0x57dc1b){return _0x2456a7+_0x57dc1b;},'KuxHh':function(_0x2f94f1,_0x32eea8){return _0x7fa5cf['DCgNn'](_0x2f94f1,_0x32eea8);},'ihjHg':function(_0x1f7325,_0x4ee187){return _0x1f7325*_0x4ee187;},'BoNsH':function(_0x197814,_0xfc0aa1){return _0x197814+_0xfc0aa1;},'FePQK':function(_0xf675b2,_0x4e53da){var _0x3a2064=_0x2daae4;return _0x7fa5cf[_0x3a2064(0x4ec)](_0xf675b2,_0x4e53da);},'lonvD':_0x7fa5cf['wpswR'],'TmYHX':function(_0x204c51,_0x9426be){return _0x204c51*_0x9426be;},'ZHalz':_0x7fa5cf[_0x2daae4(0x51f)],'kZiSh':function(_0x119468,_0x27d081){var _0x5583d2=_0x2daae4;return _0x7fa5cf[_0x5583d2(0x3c2)](_0x119468,_0x27d081);},'YsjSQ':_0x7fa5cf[_0x2daae4(0x106)],'qeodU':_0x7fa5cf[_0x2daae4(0x476)],'ECSHQ':'px\x20ui'+'-sans'+_0x2daae4(0x311)+_0x2daae4(0x55a)+_0x2daae4(0x5ca)+'i,san'+'s-ser'+'if','JMQkw':function(_0x1e4f10,_0x37952e){return _0x1e4f10+_0x37952e;},'oPhaK':function(_0x2fe2f0,_0x2d70c9){return _0x2fe2f0*_0x2d70c9;},'kMkBw':function(_0x44fd6e,_0x441e4b){return _0x44fd6e===_0x441e4b;},'ASgFQ':function(_0x1f7446,_0x5f3529){return _0x1f7446-_0x5f3529;},'AcgUD':function(_0xe4bd95,_0x34024c){return _0xe4bd95-_0x34024c;},'noZIF':function(_0x17df6c,_0xaaa279){return _0x7fa5cf['VXXKf'](_0x17df6c,_0xaaa279);},'SgvUz':function(_0x4e7c3c,_0x49375a){return _0x4e7c3c-_0x49375a;},'FNdlM':function(_0x50cce4,_0x464916){return _0x50cce4+_0x464916;},'XnaNp':_0x2daae4(0x4cf),'mtidb':function(_0x21cc67,_0x42b3b4){var _0x6baeee=_0x2daae4;return _0x7fa5cf[_0x6baeee(0x4ec)](_0x21cc67,_0x42b3b4);},'EswCl':function(_0x45dd9b,_0x5087c5){return _0x45dd9b+_0x5087c5;},'kfIQX':function(_0x956cde,_0x4c794e){return _0x956cde+_0x4c794e;},'dsczX':function(_0x3fdddd,_0x730902){return _0x3fdddd+_0x730902;},'SvbQv':_0x7fa5cf['LrtSu'],'tgJBr':function(_0x3958b7,_0x3fa911){return _0x7fa5cf['VXXKf'](_0x3958b7,_0x3fa911);},'FQCsP':function(_0x3e2f08,_0xc17d50){return _0x3e2f08+_0xc17d50;},'FjTHV':function(_0x5a221e,_0x56d703){return _0x7fa5cf['puUwe'](_0x5a221e,_0x56d703);},'kZeiD':_0x7fa5cf[_0x2daae4(0x1ac)],'bKlqk':'RMB','zapLw':_0x2daae4(0x15c)+'3','nOtQk':_0x7fa5cf[_0x2daae4(0x57f)],'dSmAb':function(_0x187211,_0x570fa9,_0x33e5b2,_0x54517a,_0x416dc6,_0x1259a0,_0x39ee24){return _0x187211(_0x570fa9,_0x33e5b2,_0x54517a,_0x416dc6,_0x1259a0,_0x39ee24);},'pbRnz':'Space'};if(_0x7fa5cf[_0x2daae4(0x53d)]('KmYGN',_0x2daae4(0x48f))){var _0x3e95fc=_0x4a5df0(_0x4e442f['ksSca'+'le'])||-0x9ec+0x11*0x119+-0x8bc,_0x54d69c=(0x359*0xb+-0x3*-0x47b+-0x9*0x592)*_0x3e95fc,_0xefbec5=(0x209*0x1+0x4bc*0x3+-0x1039)*_0x3e95fc,_0x441a9f=_0x54d69c*(0x1*0xcae+-0x10b*-0x18+-0x25b3)+_0x30768e[_0x2daae4(0x1f1)](_0xefbec5,-0x1ff4+-0x1cca+0x1*0x3cc0),_0x4df7d4=_0x30768e[_0x2daae4(0x474)](_0x30768e['oPhaK'](_0x54d69c,-0x2703+-0xbeb*0x3+0x84f*0x9),_0xefbec5*(0x1611+-0x515*0x5+0x35a)),_0x5ca045=_0x299318[_0x2daae4(0x281)],_0x27b656=_0x30768e[_0x2daae4(0x45c)](_0x5ca045,'br')?_0x30768e[_0x2daae4(0x154)](_0x1f5f42[_0x2daae4(0x5af)],-0x2517+-0x1*0x1ef5+-0x5ad*-0xc)-_0x441a9f:_0x1c60e7[_0x2daae4(0x443)]+(-0x542+0x227*-0xa+-0x2*-0xd6c),_0x43e262=_0x5ca045==='ml'?_0x30768e[_0x2daae4(0x3a8)](_0x30768e[_0x2daae4(0x1e5)](_0x18fd9f['top'],_0x1373dc[_0x2daae4(0x437)+'t']/(-0x1b95+0x1efd+0x3a*-0xf)),_0x4df7d4/(-0x251*-0x4+0xd1d+0x775*-0x3)):_0x30768e[_0x2daae4(0x3f6)](_0x2b20d0[_0x2daae4(0x61c)+'m']-_0x4df7d4,_0x5ca045==='bl'?-0x70*0x2f+-0x2561+0x3a51:0x1af4+0x1093*-0x1+-0x1*0x9cb),_0x596e0f=(_0x1543e0,_0x499921,_0x1d2671,_0x3c9d1e,_0x4f69ee,_0x5d3a38,_0x8d0d7a)=>{var _0x5b5182=_0x2daae4,_0x27c6d7=(_0x5b5182(0x65c)+_0x5b5182(0x3ce)+_0x5b5182(0x312)+_0x5b5182(0x661)+'|1|8|'+'16|4|'+'7|10|'+_0x5b5182(0x63f))['split']('|'),_0x2d461a=-0x3e*-0x1+0x1*-0x16d8+-0x1*-0x169a;while(!![]){switch(_0x27c6d7[_0x2d461a++]){case'0':_0x5100d3[_0x5b5182(0x4e6)+_0x5b5182(0x394)]=_0x2da20f?_0x30768e[_0x5b5182(0x471)]:_0x30768e[_0x5b5182(0x634)];continue;case'1':_0x592f82[_0x5b5182(0x276)+'e']();continue;case'2':_0xf920ef['fillT'+'ext'](_0x1543e0,_0x30768e[_0x5b5182(0x4bd)](_0x1d2671,_0x4f69ee/(-0x18b4+-0x140e*-0x1+0x12a*0x4)),_0x30768e['ufFNe'](_0x30768e[_0x5b5182(0x40b)](_0x3c9d1e,_0x30768e[_0x5b5182(0x253)](_0x5d3a38,-0x9b5*0x1+0x332+0x685)),_0x8d0d7a?_0x30768e[_0x5b5182(0x1f1)](-0x709*-0x4+-0x535+-0x16ea,_0x3e95fc):-0x1dde+-0xe67+-0x653*-0x7));continue;case'3':_0x58be00['resto'+'re']();continue;case'4':_0x38d2d2[_0x5b5182(0x4a3)+_0x5b5182(0xee)]=_0x5b5182(0x497)+'r';continue;case'5':_0x8d0d7a&&(_0x31d25e[_0x5b5182(0x2d9)]=_0x30768e['BoNsH'](_0x30768e[_0x5b5182(0x41b)](_0x30768e['lonvD'],_0x1eecdf[_0x5b5182(0x416)](_0x30768e[_0x5b5182(0x595)](-0x531+-0x6b3+0xbed,_0x3e95fc))),'px\x20ui'+'-sans'+'-seri'+_0x5b5182(0x55a)+'tem-u'+'i,san'+_0x5b5182(0x671)+'if'),_0x22bd57[_0x5b5182(0x4e6)+_0x5b5182(0x394)]=_0x2da20f?'#fff':_0x30768e[_0x5b5182(0x375)],_0x2b2d81['fillT'+_0x5b5182(0x1b3)](_0x8d0d7a,_0x1d2671+_0x4f69ee/(-0x21c6+0x2*-0x12aa+0x471c),_0x30768e['kZiSh'](_0x3c9d1e+_0x5d3a38/(-0x1*0xc49+0x1850+-0xc05),_0x30768e[_0x5b5182(0x595)](0x2264+0x47a*-0x5+0xdb*-0xe,_0x3e95fc))));continue;case'6':if(_0x5e20f8[_0x5b5182(0x416)+'Rect'])_0x2ae200['round'+'Rect'](_0x1d2671,_0x3c9d1e,_0x4f69ee,_0x5d3a38,(-0xbe8+-0x3f*-0x16+0x1*0x685)*_0x3e95fc);else _0x809f2e[_0x5b5182(0x644)](_0x1d2671,_0x3c9d1e,_0x4f69ee,_0x5d3a38);continue;case'7':_0x2cc320[_0x5b5182(0x334)+_0x5b5182(0x5a1)+'ne']=_0x30768e['YsjSQ'];continue;case'8':_0x2da20f&&(_0x59627a['shado'+_0x5b5182(0x549)+'r']=_0x4a2a0a,_0x38ba27[_0x5b5182(0x52f)+'wBlur']=-0xefc+0x1*0x1447+-0x1bf*0x3,_0x46250d['fill'](),_0x353923['shado'+'wBlur']=-0x1832*0x1+0x1*-0x38b+-0x93f*-0x3);continue;case'9':_0x5c3d54[_0x5b5182(0x48d)]();continue;case'10':_0x32ad0f[_0x5b5182(0x2d9)]=_0x30768e['qeodU']+_0x281b1a['round']((-0xbaf+-0x207e+0x2c39)*_0x3e95fc)+_0x30768e[_0x5b5182(0x49d)];continue;case'11':_0x5df1c9[_0x5b5182(0x5ed)+'Path']();continue;case'12':_0x1dc440[_0x5b5182(0x328)+'idth']=-0xbf5+-0x439+0x102f;continue;case'13':_0x2189e4[_0x5b5182(0x276)+_0x5b5182(0x411)+'e']=_0x2da20f?_0x44111f:_0x5b5182(0x207)+'255,1'+_0x5b5182(0x558)+'7,0.3'+'5)';continue;case'14':var _0x2da20f=_0x1296e9['has'](_0x499921);continue;case'15':_0x42bcc6[_0x5b5182(0x4b3)]();continue;case'16':_0x4662d0['fillS'+_0x5b5182(0x394)]=_0x2da20f?'#fff':_0x5b5182(0x207)+_0x5b5182(0x367)+_0x5b5182(0x363)+_0x5b5182(0x665)+')';continue;}break;}};_0x596e0f('W',_0x2daae4(0x409),_0x30768e[_0x2daae4(0xf8)](_0x27b656+_0x54d69c,_0xefbec5),_0x43e262,_0x54d69c,_0x54d69c),_0x596e0f('A',_0x2daae4(0x10f),_0x27b656,_0x43e262+_0x54d69c+_0xefbec5,_0x54d69c,_0x54d69c),_0x596e0f('S',_0x30768e[_0x2daae4(0x551)],_0x30768e[_0x2daae4(0x52c)](_0x30768e[_0x2daae4(0x396)](_0x27b656,_0x54d69c),_0xefbec5),_0x30768e[_0x2daae4(0x3e3)](_0x30768e[_0x2daae4(0x4be)](_0x43e262,_0x54d69c),_0xefbec5),_0x54d69c,_0x54d69c),_0x596e0f('D',_0x30768e[_0x2daae4(0x5e3)],_0x30768e[_0x2daae4(0x22c)](_0x27b656,(_0x54d69c+_0xefbec5)*(-0xa11+-0xf83+0x1996)),_0x30768e[_0x2daae4(0x55f)](_0x43e262+_0x54d69c,_0xefbec5),_0x54d69c,_0x54d69c);var _0x14db63=(_0x441a9f-_0xefbec5)/(0x15b6+0x1a3*0x3+-0x1a9d),_0x493c51=_0x30768e[_0x2daae4(0x4d7)](_0x43e262,_0x30768e[_0x2daae4(0xec)](_0x30768e['noZIF'](_0x54d69c,_0xefbec5),0xcf9+-0x2*0x497+-0x1*0x3c9));_0x596e0f('LMB',_0x30768e['kZeiD'],_0x27b656,_0x493c51,_0x14db63,_0x54d69c,_0x1c938b['ksCps']?_0x5edd44(-0x3*-0x148+0x331+-0x28*0x2d)+'\x20CPS':''),_0x596e0f(_0x30768e['bKlqk'],_0x30768e['zapLw'],_0x30768e['kZiSh'](_0x27b656+_0x14db63,_0xefbec5),_0x493c51,_0x14db63,_0x54d69c,_0x3a3bc1[_0x2daae4(0x2f5)]?_0x5cb80a(-0x53*0x35+0xb34+-0x2*-0x2ff)+_0x30768e[_0x2daae4(0x2e3)]:''),_0x30768e[_0x2daae4(0x133)](_0x596e0f,'',_0x30768e['pbRnz'],_0x27b656,_0x30768e[_0x2daae4(0x52c)](_0x493c51,_0x54d69c)+_0xefbec5,_0x441a9f,_0x54d69c*(-0x5*-0x5d1+-0x210e+0x3f9+0.45));}else{var _0x73edf8=window[_0x2daae4(0x286)+'ePixe'+'lRati'+'o']||0x1*0x260f+0x2545+0xb*-0x6d9,_0x578597=window[_0x2daae4(0x62d)+'Width'],_0x3f6c56=window['inner'+_0x2daae4(0x242)+'t'];if(_0x578597===_0xa39db3['w']&&_0x3f6c56===_0xa39db3['h']&&_0x73edf8===_0xa39db3[_0x2daae4(0x3e0)])return;_0xa39db3['w']=_0x578597,_0xa39db3['h']=_0x3f6c56,_0xa39db3['dpr']=_0x73edf8,_0x35e5cd['width']=Math[_0x2daae4(0x416)](_0x578597*_0x73edf8),_0x35e5cd[_0x2daae4(0x437)+'t']=Math['round'](_0x7fa5cf[_0x2daae4(0x4dd)](_0x3f6c56,_0x73edf8)),_0x215d1f[_0x2daae4(0x53c)+'ansfo'+'rm'](_0x73edf8,-0x1*-0x1a61+-0x15b*-0x7+-0x2*0x11ef,0x247b+0x265f+-0x4ada,_0x73edf8,0x1030+0x18be+-0x28ee,0x287+0x2ea*-0x8+0x14c9);}}var _0x217022=0xac7+0x20b1+0x1ac*-0x1a,_0xd7ab09=performance[_0x2eb896(0x14b)](),_0x3055a8=-0x1*0x1f76+0x268b+-0x31*0x25;function _0x4600ba(_0x374412){var _0x465c76=_0x2eb896,_0x56078f=_0x7fa5cf[_0x465c76(0x137)]['split']('|'),_0x220367=0x1d81+0x1*0x170e+-0x348f;while(!![]){switch(_0x56078f[_0x220367++]){case'0':_0x7ce70f('','Space',_0x28fd2c,_0x7fa5cf[_0x465c76(0xf9)](_0x54c31a,_0x3d453a)+_0x2af216,_0x14829e,_0x3d453a*(-0x9c7*0x2+-0x14c5+0x2853+0.45));continue;case'1':var _0x14829e=_0x3d453a*(-0x1867*-0x1+-0x13fc+-0x468)+_0x2af216*(0x9ff+0x2cf+-0xfc*0xd),_0x50f872=_0x7fa5cf[_0x465c76(0x4b9)](_0x3d453a,0x2087+-0x3b*-0x1+-0x20bf)+_0x2af216*(-0x9*-0x337+-0x98f*0x1+-0x135e);continue;case'2':var _0x4d87c2=_0x18628e==='ml'?_0x7fa5cf['JTMnG'](_0x374412[_0x465c76(0x52a)]+_0x374412[_0x465c76(0x437)+'t']/(-0x2075+0x1*-0x7eb+0x3*0xd76),_0x7fa5cf[_0x465c76(0x36c)](_0x50f872,-0x1*0x181c+-0x1*-0x250a+-0xcec)):_0x7fa5cf[_0x465c76(0x134)](_0x374412['botto'+'m']-_0x50f872,_0x7fa5cf['MrCfw'](_0x18628e,'bl')?-0x1*0x1f9c+-0xa57*0x3+0x7f*0x7f:-0x1*-0x10f1+-0x1dee+0x2b7*0x5);continue;case'3':_0x7ce70f('A',_0x7fa5cf[_0x465c76(0x304)],_0x28fd2c,_0x7fa5cf['uQtjO'](_0x4d87c2+_0x3d453a,_0x2af216),_0x3d453a,_0x3d453a);continue;case'4':var _0x7ce70f=(_0x915609,_0x5a56c6,_0x179e19,_0xd0b1de,_0xa1e398,_0xf475eb,_0x5da25a)=>{var _0x58268e=_0x465c76,_0x163e63=_0x335258['KpgRi']['split']('|'),_0x2b713b=0x711+0x11fc*-0x1+0xaeb;while(!![]){switch(_0x163e63[_0x2b713b++]){case'0':_0x215d1f['strok'+'e']();continue;case'1':_0x215d1f['fillS'+'tyle']=_0x58c92c?_0x335258['RmGPn']:_0x335258['XzzlU'];continue;case'2':_0x215d1f[_0x58268e(0x5ed)+_0x58268e(0x5c8)]();continue;case'3':_0x215d1f[_0x58268e(0x276)+_0x58268e(0x411)+'e']=_0x58c92c?_0x239fbb:_0x335258[_0x58268e(0x20b)];continue;case'4':if(_0x215d1f[_0x58268e(0x416)+'Rect'])_0x215d1f[_0x58268e(0x416)+_0x58268e(0x4f3)](_0x179e19,_0xd0b1de,_0xa1e398,_0xf475eb,(0x2223+0x4*-0x744+-0x50c)*_0x5db992);else _0x215d1f[_0x58268e(0x644)](_0x179e19,_0xd0b1de,_0xa1e398,_0xf475eb);continue;case'5':_0x58c92c&&(_0x215d1f[_0x58268e(0x52f)+_0x58268e(0x549)+'r']=_0x1fb110,_0x215d1f['shado'+_0x58268e(0x4c0)]=-0xca4*0x1+-0x765*-0x2+0x2*-0x10c,_0x215d1f[_0x58268e(0x48d)](),_0x215d1f['shado'+'wBlur']=0x665+-0x13*-0x6d+-0xe7c);continue;case'6':_0x215d1f[_0x58268e(0x328)+'idth']=-0x15c7+0x20f2+-0x595*0x2;continue;case'7':_0x215d1f[_0x58268e(0x4e6)+_0x58268e(0x394)]=_0x58c92c?_0x335258[_0x58268e(0x5fe)]:'rgba('+_0x58268e(0x5b5)+'16,0.'+'7)';continue;case'8':_0x215d1f['textB'+_0x58268e(0x5a1)+'ne']=_0x58268e(0x544)+'e';continue;case'9':_0x215d1f[_0x58268e(0x48d)]();continue;case'10':_0x215d1f[_0x58268e(0x4a3)+'lign']=_0x335258[_0x58268e(0x163)];continue;case'11':_0x215d1f['save']();continue;case'12':_0x215d1f[_0x58268e(0x62c)+'ext'](_0x915609,_0x335258['tymHT'](_0x179e19,_0xa1e398/(-0x3f9*0x3+-0x157*0x3+0xff2)),_0xd0b1de+_0xf475eb/(0x16e2+0x162+-0xcf*0x1e)-(_0x5da25a?_0x335258['OitUN'](-0x21a+0x789+-0x56a,_0x5db992):-0x1f23+0x61*0x43+-0xb8*-0x8));continue;case'13':_0x215d1f[_0x58268e(0x17e)+'re']();continue;case'14':var _0x58c92c=_0x318f24['has'](_0x5a56c6);continue;case'15':_0x215d1f[_0x58268e(0x2d9)]=_0x335258[_0x58268e(0x3a5)](_0x335258[_0x58268e(0x31f)](_0x335258['jeiPz'],Math['round'](_0x335258[_0x58268e(0x14a)](0xc*0x175+-0x1c84+0x4*0x2c5,_0x5db992))),'px\x20ui'+'-sans'+_0x58268e(0x311)+_0x58268e(0x55a)+_0x58268e(0x5ca)+_0x58268e(0x60b)+_0x58268e(0x671)+'if');continue;case'16':_0x5da25a&&(_0x215d1f['font']=_0x335258[_0x58268e(0x1cf)]+Math[_0x58268e(0x416)](_0x335258['eKgmV'](-0x2b*-0x93+-0x2656+0xce*0x11,_0x5db992))+(_0x58268e(0x313)+_0x58268e(0x6a5)+'-seri'+_0x58268e(0x55a)+'tem-u'+_0x58268e(0x60b)+'s-ser'+'if'),_0x215d1f[_0x58268e(0x4e6)+'tyle']=_0x58c92c?_0x335258['RmGPn']:'rgba('+_0x58268e(0x367)+'35,24'+'0,0.5'+'5)',_0x215d1f['fillT'+_0x58268e(0x1b3)](_0x5da25a,_0x179e19+_0x335258[_0x58268e(0x613)](_0xa1e398,0x16bc+-0xde5+-0x8d5),_0xd0b1de+_0xf475eb/(0xb10+-0xdc6*-0x2+0xb7*-0x36)+(-0x3c3+0x353+-0x4*-0x1e)*_0x5db992));continue;}break;}};continue;case'5':var _0x335258={'KpgRi':_0x465c76(0x263)+'|2|4|'+_0x465c76(0x1e6)+'|3|0|'+'5|1|1'+_0x465c76(0x4dc)+_0x465c76(0x4e7)+'16|13','RmGPn':_0x465c76(0x68b),'XzzlU':_0x465c76(0x207)+_0x465c76(0x367)+'35,24'+'0,0.8'+')','eAPGu':_0x7fa5cf['XjoUG'],'YMrxv':_0x7fa5cf['GkYXd'],'QPjub':_0x7fa5cf[_0x465c76(0x625)],'tymHT':function(_0x2f679f,_0x4d6a12){return _0x2f679f+_0x4d6a12;},'OitUN':function(_0x8f027e,_0x1be0f0){var _0x149f41=_0x465c76;return _0x7fa5cf[_0x149f41(0x4dd)](_0x8f027e,_0x1be0f0);},'jdQpg':function(_0x31ad87,_0x69d6a1){return _0x31ad87+_0x69d6a1;},'jeiPz':'700\x20','yeTGi':function(_0x223dec,_0x54a5aa){return _0x223dec*_0x54a5aa;},'GsSdQ':_0x7fa5cf['wpswR'],'eKgmV':function(_0x3401bd,_0x30cb35){return _0x7fa5cf['oGWqy'](_0x3401bd,_0x30cb35);},'ZvNgR':function(_0x15205b,_0x564391){var _0x5e94c4=_0x465c76;return _0x7fa5cf[_0x5e94c4(0x67e)](_0x15205b,_0x564391);}};continue;case'6':var _0x18628e=_0x170730[_0x465c76(0x281)];continue;case'7':var _0x28fd2c=_0x18628e==='br'?_0x7fa5cf[_0x465c76(0x635)](_0x374412['right']-(0x553*0x5+0x1c52+-0x36e1),_0x14829e):_0x374412[_0x465c76(0x443)]+(-0x1*-0x179f+-0x244f+0xcc0);continue;case'8':var _0x5db992=_0x7fa5cf[_0x465c76(0x548)](Number,_0x170730[_0x465c76(0x5d5)+'le'])||0x2*0x49+-0x69+-0x5*0x8,_0x3d453a=(-0x4b9+-0x2*-0x281+-0x3*0xd)*_0x5db992,_0x2af216=_0x7fa5cf[_0x465c76(0x4dd)](0x234d+0x2260+-0x419*0x11,_0x5db992);continue;case'9':_0x7fa5cf[_0x465c76(0x59f)](_0x7ce70f,'S',_0x7fa5cf[_0x465c76(0x398)],_0x28fd2c+_0x3d453a+_0x2af216,_0x7fa5cf['puUwe'](_0x4d87c2,_0x3d453a)+_0x2af216,_0x3d453a,_0x3d453a);continue;case'10':_0x7ce70f(_0x7fa5cf['ztDkq'],'mouse'+'1',_0x28fd2c,_0x54c31a,_0x136d6c,_0x3d453a,_0x170730['ksCps']?_0x7fa5cf[_0x465c76(0x176)](_0x7fa5cf[_0x465c76(0x564)](_0x206911,-0xf*-0x289+0x4*-0x70d+-0x9d2),_0x7fa5cf[_0x465c76(0x57f)]):'');continue;case'11':var _0x136d6c=_0x7fa5cf['bUlgh'](_0x14829e,_0x2af216)/(-0x2211*0x1+0x80c+0x1a07),_0x54c31a=_0x4d87c2+_0x7fa5cf['oGWqy'](_0x7fa5cf['QxlnQ'](_0x3d453a,_0x2af216),0x1a21*-0x1+-0x873*0x3+0x2*0x19be);continue;case'12':_0x7ce70f('W',_0x7fa5cf['LZlfC'],_0x7fa5cf[_0x465c76(0x4ec)](_0x28fd2c,_0x3d453a)+_0x2af216,_0x4d87c2,_0x3d453a,_0x3d453a);continue;case'13':_0x7ce70f(_0x465c76(0x4ae),_0x465c76(0x15c)+'3',_0x7fa5cf['nvFMB'](_0x28fd2c,_0x136d6c)+_0x2af216,_0x54c31a,_0x136d6c,_0x3d453a,_0x170730['ksCps']?_0x206911(0x2201+-0x11dc+-0x127*0xe)+_0x7fa5cf[_0x465c76(0x57f)]:'');continue;case'14':_0x7ce70f('D',_0x7fa5cf['LrtSu'],_0x7fa5cf['uQtjO'](_0x28fd2c,_0x7fa5cf[_0x465c76(0x4d6)](_0x3d453a,_0x2af216)*(-0x3d1+0x1bd9*0x1+-0x1806)),_0x7fa5cf[_0x465c76(0x62a)](_0x4d87c2,_0x3d453a)+_0x2af216,_0x3d453a,_0x3d453a);continue;}break;}}function _0x3bee98(_0x441ad9){var _0x37e894=_0x2eb896,_0x6b7262=_0x441ad9['width']/(0x5a*0x49+-0x8ce+-0x10da),_0x4c0429=_0x441ad9['heigh'+'t']/(-0x1*0x355+-0x313*-0x5+-0x28*0x4d),_0x507add=Number(_0x170730[_0x37e894(0x32d)+'e'])||0x1ed4*0x1+-0x5d*0x62+0x4c7,_0x145aa1=/^#[0-9a-f]{6}$/i['test'](_0x170730[_0x37e894(0x441)+'or'])?_0x170730[_0x37e894(0x441)+'or']:_0x37e894(0x2c2)+'9d';_0x215d1f['save'](),_0x215d1f['strok'+'eStyl'+'e']=_0x145aa1,_0x215d1f['fillS'+_0x37e894(0x394)]=_0x145aa1,_0x215d1f['lineW'+'idth']=Math[_0x37e894(0x4ce)](0x1*-0xc4f+-0x2*-0xac9+-0x18b*0x6+0.5,(-0x26a3+0x16a9+0xffc)*_0x507add),_0x215d1f['shado'+'wColo'+'r']=_0x145aa1,_0x215d1f['shado'+'wBlur']=-0xdb8+0x5a3*0x2+-0x13c*-0x2;var _0x335eb5=(-0xa*0x35f+-0x24da+0x2*0x234b)*_0x507add,_0x4ca6d3=(-0x805*-0x1+-0xe98+0x69b)*_0x507add;_0x215d1f[_0x37e894(0x5ed)+_0x37e894(0x5c8)](),_0x215d1f[_0x37e894(0x23d)+'o'](_0x3c9206[_0x37e894(0x2ac)](_0x3c9206['FVMOu'](_0x6b7262,_0x335eb5),_0x4ca6d3),_0x4c0429),_0x215d1f[_0x37e894(0x543)+'o'](_0x6b7262-_0x335eb5,_0x4c0429),_0x215d1f['moveT'+'o'](_0x3c9206['FiNJX'](_0x6b7262,_0x335eb5),_0x4c0429),_0x215d1f[_0x37e894(0x543)+'o'](_0x3c9206['Douxb'](_0x3c9206['Douxb'](_0x6b7262,_0x335eb5),_0x4ca6d3),_0x4c0429),_0x215d1f[_0x37e894(0x23d)+'o'](_0x6b7262,_0x4c0429-_0x335eb5-_0x4ca6d3),_0x215d1f[_0x37e894(0x543)+'o'](_0x6b7262,_0x4c0429-_0x335eb5),_0x215d1f[_0x37e894(0x23d)+'o'](_0x6b7262,_0x4c0429+_0x335eb5),_0x215d1f[_0x37e894(0x543)+'o'](_0x6b7262,_0x3c9206[_0x37e894(0x21a)](_0x4c0429,_0x335eb5)+_0x4ca6d3),_0x215d1f[_0x37e894(0x276)+'e'](),_0x215d1f[_0x37e894(0x5ed)+'Path'](),_0x215d1f['arc'](_0x6b7262,_0x4c0429,(-0x1*-0x11b+0x1e47+0x1*-0x1f61+0.6000000000000001)*_0x507add,0x239+0xbb1+-0x1*0xdea,_0x3c9206[_0x37e894(0x21d)](Math['PI'],0x47*-0x19+-0x1aa8+0x2199)),_0x215d1f['fill'](),_0x215d1f[_0x37e894(0x17e)+'re']();}function _0x132adb(_0x2f5e01){var _0x5270ec=_0x2eb896,_0x4460fe=('3|6|8'+_0x5270ec(0x5f8)+'4|5|1'+_0x5270ec(0x249))[_0x5270ec(0x350)]('|'),_0x3c42b8=0x5d1+-0x1ef5+0x1924;while(!![]){switch(_0x4460fe[_0x3c42b8++]){case'0':var _0x4f24dd=-0x614+0x1af9+-0x5*0x425,_0x31e21a=-0x1f20+0x622+0xa*0x281;continue;case'1':if(_0x170730['fps'])_0x7fa5cf[_0x5270ec(0x28e)](_0x2598e4,_0x3055a8+_0x5270ec(0x136));continue;case'2':_0x215d1f['textB'+'aseli'+'ne']=_0x5270ec(0x52a);continue;case'3':_0x215d1f['save']();continue;case'4':var _0x2598e4=(_0xc3f647,_0x126621)=>{var _0x3edecc=_0x5270ec;_0x215d1f['fillS'+'tyle']=_0x126621||_0x3edecc(0x207)+_0x3edecc(0x367)+_0x3edecc(0x363)+_0x3edecc(0x5c0)+'5)',_0x215d1f['fillT'+_0x3edecc(0x1b3)](_0xc3f647,_0x31e21a,_0x4f24dd),_0x4f24dd+=0x1ce2+0x2bd*0x3+-0x2509*0x1;};continue;case'5':_0x2598e4(_0x7fa5cf[_0x5270ec(0x274)],_0x5270ec(0x2c2)+'9d');continue;case'6':_0x215d1f[_0x5270ec(0x2d9)]=_0x7fa5cf[_0x5270ec(0x600)];continue;case'7':_0x215d1f['resto'+'re']();continue;case'8':_0x215d1f['textA'+_0x5270ec(0xee)]='left';continue;case'9':if(!_0x1ed0a9[_0x5270ec(0x2b0)+_0x5270ec(0x2ee)])_0x2598e4(_0x5270ec(0x283)+_0x5270ec(0x36b)+'r\x20gam'+'e…',_0x5270ec(0x207)+_0x5270ec(0x3be)+'80,19'+_0x5270ec(0x1e4)+')');continue;}break;}}function _0x1b1e7b(){var _0x42fc55=_0x2eb896;requestAnimationFrame(_0x1b1e7b),_0x217022++;var _0x44e0fb=performance[_0x42fc55(0x14b)]();_0x7fa5cf[_0x42fc55(0x1f6)](_0x44e0fb-_0xd7ab09,0x976+0x1*-0xa3f+0x2bd)&&(_0x3055a8=Math[_0x42fc55(0x416)](_0x7fa5cf[_0x42fc55(0x6ad)](_0x7fa5cf['xHebt'](_0x217022,-0x1272+-0x4f2+0x2*0xda6),_0x44e0fb-_0xd7ab09)),_0x217022=-0x4*-0x420+0x241c+0x25*-0x16c,_0xd7ab09=_0x44e0fb);_0x23f327(),_0x7fa5cf['vXovf'](_0xfb8a83),_0x215d1f['clear'+_0x42fc55(0x4f3)](-0x2247+0x23c9*0x1+-0x182,-0x5cd+-0x225a+-0x13*-0x21d,_0xa39db3['w'],_0xa39db3['h']);var _0x44c176={'left':0x0,'top':0x0,'right':_0xa39db3['w'],'bottom':_0xa39db3['h'],'width':_0xa39db3['w'],'height':_0xa39db3['h']};if(_0x170730['cross'+'hair'])_0x7fa5cf[_0x42fc55(0x338)](_0x3bee98,_0x44c176);if(_0x170730[_0x42fc55(0x50d)+'rokes'])_0x4600ba(_0x44c176);_0x132adb(_0x44c176);}var _0x5d7d74=document[_0x2eb896(0x2c8)+_0x2eb896(0x4ee)+_0x2eb896(0x3ae)](_0x3c9206['SNcqs']);_0x5d7d74['id']=_0x2eb896(0x46b)+'a-ui',_0x5d7d74[_0x2eb896(0x252)][_0x2eb896(0x2c3)+'xt']=_0x2eb896(0x4a4)+_0x2eb896(0x4fd)+_0x2eb896(0x2f4)+'inset'+_0x2eb896(0x522)+_0x2eb896(0x289)+':2147'+_0x2eb896(0x660)+_0x2eb896(0x37b)+'nter-'+_0x2eb896(0x2ae)+'s:non'+'e;';var _0x355675=_0x5d7d74['attac'+_0x2eb896(0x42e)+'ow']({'mode':_0x2eb896(0x410)});(document[_0x2eb896(0x21e)]||document[_0x2eb896(0x209)+'entEl'+_0x2eb896(0x4bc)])['appen'+_0x2eb896(0xe6)+'d'](_0x5d7d74);var _0x2ec466=![],_0x14f986={};try{_0x14f986=JSON[_0x2eb896(0x3e2)](localStorage['getIt'+'em'](_0x3c9206[_0x2eb896(0x656)])||'{}');}catch(_0x62b691){}function _0x2e3549(){var _0x4410c9=_0x2eb896;try{localStorage[_0x4410c9(0x58c)+'em'](_0x4410c9(0x46b)+_0x4410c9(0x604)+'r.ui.'+'v1',JSON[_0x4410c9(0x47b)+_0x4410c9(0x5aa)](_0x14f986));}catch(_0x3bd589){}}function _0x107356(_0x55a58e,_0x248897){var _0x3ede66=_0x2eb896,_0x7b2535={'TleHU':function(_0x4dd4e1,_0x2ca835){return _0x4dd4e1(_0x2ca835);},'lxGbu':function(_0x3c6e08,_0x6ca1cf){return _0x3c6e08===_0x6ca1cf;},'JLkGn':_0x7fa5cf[_0x3ede66(0x60c)],'qeNGt':function(_0x1cafd2,_0x4d25fc){return _0x7fa5cf['rLVpl'](_0x1cafd2,_0x4d25fc);},'ebxyc':_0x7fa5cf[_0x3ede66(0x38e)],'AoCTB':_0x3ede66(0x25d)},_0x137511=document['creat'+_0x3ede66(0x4ee)+_0x3ede66(0x3ae)]('butto'+'n');return _0x137511['type']=_0x7fa5cf['Mdbhu'],_0x137511[_0x3ede66(0x13c)+_0x3ede66(0x423)]=_0x3ede66(0x4d4)+_0x3ede66(0x5f6),_0x137511['setAt'+_0x3ede66(0x69c)+'te'](_0x7fa5cf['vPzeD'],_0x7fa5cf['Ktxry']),_0x137511['setAt'+'tribu'+'te'](_0x7fa5cf['gDRsT'],_0x7fa5cf['ZpYSA'](String,!!_0x55a58e)),_0x137511[_0x3ede66(0x501)+'ck']=_0x21b186=>{var _0x394ea4=_0x3ede66;if(_0x7b2535[_0x394ea4(0x3e7)]('NhHYK',_0x7b2535[_0x394ea4(0x582)])){_0x21b186['stopP'+_0x394ea4(0x609)+_0x394ea4(0x360)]();var _0x9a93ed=_0x7b2535['qeNGt'](_0x137511[_0x394ea4(0x27e)+_0x394ea4(0x69c)+'te'](_0x7b2535['ebxyc']),_0x7b2535['AoCTB']);_0x137511['setAt'+_0x394ea4(0x69c)+'te'](_0x7b2535[_0x394ea4(0x58a)],String(_0x9a93ed)),_0x248897(_0x9a93ed);}else _0x5a29b2(),_0x7b2535[_0x394ea4(0x2ba)](_0x1a327e,_0x15b157(_0x3180d8['value']));},_0x137511;}function _0x119321(_0x1fcd84,_0x1e6a3b,_0x22f3a4,_0x42566a,_0x3d5e3a){var _0xc67b19=_0x2eb896,_0x29bce6=_0x3c9206[_0xc67b19(0x27a)]['split']('|'),_0x2af738=0x1*-0xa6+-0x11*0x206+0x2*0x1186;while(!![]){switch(_0x29bce6[_0x2af738++]){case'0':_0x3c9206[_0xc67b19(0x59c)](_0x5d3d19);continue;case'1':_0x343e14[_0xc67b19(0x576)]=_0x1fcd84;continue;case'2':return _0x10553a;case'3':_0x343e14['step']=_0x42566a;continue;case'4':var _0x10553a=document['creat'+_0xc67b19(0x4ee)+_0xc67b19(0x3ae)](_0xc67b19(0x4f0));continue;case'5':var _0x343e14=document[_0xc67b19(0x2c8)+_0xc67b19(0x4ee)+_0xc67b19(0x3ae)]('input');continue;case'6':var _0x5d3d19=()=>{var _0x50fe36=_0xc67b19;_0x57e049[_0x50fe36(0x451)+_0x50fe36(0xfe)+'t']=String(_0x343e14[_0x50fe36(0x576)]),_0x10553a[_0x50fe36(0x252)]['setPr'+'opert'+'y'](_0x50fe36(0x622),_0x2c1d0c[_0x50fe36(0x4fc)](_0x2c1d0c['ovJRx'](_0x343e14['value'],_0x1e6a3b)/(_0x22f3a4-_0x1e6a3b)*(0x7*0x293+0x1c87*0x1+0x1c*-0x1a6),'%'));};continue;case'7':_0x57e049[_0xc67b19(0x451)+_0xc67b19(0xfe)+'t']=_0x3c9206[_0xc67b19(0x43a)](String,_0x1fcd84);continue;case'8':_0x343e14[_0xc67b19(0x4ce)]=_0x22f3a4;continue;case'9':_0x343e14['min']=_0x1e6a3b;continue;case'10':_0x343e14[_0xc67b19(0x354)+'ut']=()=>{var _0x5631e9=_0xc67b19;_0x5d3d19(),_0x2c1d0c['ujTcr'](_0x3d5e3a,Number(_0x343e14[_0x5631e9(0x576)]));};continue;case'11':var _0x2c1d0c={'ByHdf':function(_0x540e7a,_0x2e9867){return _0x3c9206['KFHxK'](_0x540e7a,_0x2e9867);},'ovJRx':function(_0x55dae0,_0x58d251){return _0x55dae0-_0x58d251;},'ujTcr':function(_0x3492f6,_0x37fa1b){return _0x3492f6(_0x37fa1b);}};continue;case'12':_0x343e14[_0xc67b19(0x6a7)]=_0x3c9206[_0xc67b19(0x285)];continue;case'13':_0x10553a[_0xc67b19(0x13c)+'Name']=_0x3c9206[_0xc67b19(0x5f5)];continue;case'14':var _0x57e049=document[_0xc67b19(0x2c8)+_0xc67b19(0x4ee)+'ent'](_0x3c9206[_0xc67b19(0x381)]);continue;case'15':_0x10553a[_0xc67b19(0x335)+'d'](_0x343e14,_0x57e049);continue;case'16':_0x343e14[_0xc67b19(0x13c)+'Name']=_0x3c9206[_0xc67b19(0x13e)];continue;case'17':_0x57e049[_0xc67b19(0x13c)+'Name']=_0x3c9206[_0xc67b19(0x68a)];continue;}break;}}function _0x13e416(_0x44fc4a,_0x24cb3e){var _0x9118c4=_0x2eb896,_0x4d98d6={'FVhyB':_0x7fa5cf['jSigA'],'pfvQv':_0x7fa5cf[_0x9118c4(0x1a5)],'hVVwj':function(_0x4f1bc7){return _0x7fa5cf['vXovf'](_0x4f1bc7);}};if(_0x7fa5cf['WPXtF']!==_0x7fa5cf[_0x9118c4(0x516)]){var _0x4e1a9f=('2|0|4'+'|3|1|'+'5')[_0x9118c4(0x350)]('|'),_0x140a1a=-0x2127+0xaf6+0x1*0x1631;while(!![]){switch(_0x4e1a9f[_0x140a1a++]){case'0':_0x59f568[_0x9118c4(0x6a7)]=_0x9118c4(0x526);continue;case'1':_0x59f568['oninp'+'ut']=()=>_0x24cb3e(_0x59f568[_0x9118c4(0x576)]);continue;case'2':var _0x59f568=document[_0x9118c4(0x2c8)+_0x9118c4(0x4ee)+'ent'](_0x9118c4(0x1c1));continue;case'3':_0x59f568[_0x9118c4(0x576)]=/^#[0-9a-f]{6}$/i['test'](_0x44fc4a)?_0x44fc4a:_0x9118c4(0x2c2)+'9d';continue;case'4':_0x59f568['class'+'Name']=_0x7fa5cf[_0x9118c4(0x56b)];continue;case'5':return _0x59f568;}break;}}else{if(_0x2277f8['body']&&(_0x39f684['ready'+_0x9118c4(0x511)]===_0x4d98d6[_0x9118c4(0x356)]||_0x33f8f9['ready'+_0x9118c4(0x511)]===_0x4d98d6[_0x9118c4(0x5ea)]))_0x4d98d6['hVVwj'](_0x49d679);else _0x532e75[_0x9118c4(0x266)+_0x9118c4(0x527)+_0x9118c4(0x248)+'r'](_0x9118c4(0x282)+_0x9118c4(0x14c)+'Loade'+'d',_0x1bbff4,{'once':!![]});}}function _0x2cae57(_0xa34142,_0x573550,_0x1831a9){var _0x5d6d7c=_0x2eb896,_0x2537b7=document[_0x5d6d7c(0x2c8)+'eElem'+_0x5d6d7c(0x3ae)](_0x5d6d7c(0x5fb)+'t');_0x2537b7[_0x5d6d7c(0x13c)+_0x5d6d7c(0x423)]=_0x3c9206[_0x5d6d7c(0x3e1)];for(var [_0x1eca4d,_0x35090e]of _0x573550){var _0x5cfbb0=document[_0x5d6d7c(0x2c8)+_0x5d6d7c(0x4ee)+'ent'](_0x5d6d7c(0x30a)+'n');_0x5cfbb0[_0x5d6d7c(0x576)]=_0x1eca4d,_0x5cfbb0['textC'+_0x5d6d7c(0xfe)+'t']=_0x35090e,_0x2537b7[_0x5d6d7c(0x335)+_0x5d6d7c(0xe6)+'d'](_0x5cfbb0);}return _0x2537b7[_0x5d6d7c(0x576)]=_0xa34142,_0x2537b7[_0x5d6d7c(0x29f)+_0x5d6d7c(0x2b6)]=()=>_0x1831a9(_0x2537b7[_0x5d6d7c(0x576)]),_0x2537b7;}function _0xdd826(_0x189c1a,_0x4196aa){var _0xb03592=_0x2eb896,_0x45c08e={'riWFn':_0xb03592(0x114),'dZkAI':function(_0x438bfb){var _0x33be18=_0xb03592;return _0x3c9206[_0x33be18(0x59c)](_0x438bfb);}},_0x3f91fe=document[_0xb03592(0x2c8)+_0xb03592(0x4ee)+_0xb03592(0x3ae)](_0xb03592(0x579)+'n');return _0x3f91fe[_0xb03592(0x6a7)]=_0xb03592(0x579)+'n',_0x3f91fe[_0xb03592(0x13c)+'Name']=_0xb03592(0x686)+'n',_0x3f91fe['textC'+'onten'+'t']=_0x189c1a,_0x3f91fe[_0xb03592(0x501)+'ck']=_0x41c3f6=>{var _0x4107aa=_0xb03592;'sJzeK'===_0x45c08e[_0x4107aa(0x261)]?(_0x41c3f6[_0x4107aa(0x3fc)+'ropag'+_0x4107aa(0x360)](),_0x45c08e[_0x4107aa(0x271)](_0x4196aa)):(_0x291cf2[_0x4107aa(0x55e)+'ead']=_0x4267a6,_0x7a0de9());},_0x3f91fe;}function _0x1dd67b(_0xb65db1,_0x2d9801,_0x382928){var _0x35bb06=_0x2eb896,_0x114b2d=document[_0x35bb06(0x2c8)+_0x35bb06(0x4ee)+'ent'](_0x35bb06(0x4f0));_0x114b2d[_0x35bb06(0x13c)+_0x35bb06(0x423)]=_0x3c9206[_0x35bb06(0x392)];var _0x137231=document['creat'+'eElem'+_0x35bb06(0x3ae)](_0x3c9206[_0x35bb06(0x381)]);_0x137231[_0x35bb06(0x13c)+_0x35bb06(0x423)]='sk-la'+'bel',_0x137231['textC'+_0x35bb06(0xfe)+'t']=_0xb65db1;if(_0x2d9801){var _0x24c87b=document[_0x35bb06(0x2c8)+_0x35bb06(0x4ee)+'ent'](_0x35bb06(0x3cf));_0x24c87b[_0x35bb06(0x13c)+_0x35bb06(0x423)]=_0x35bb06(0x6a2)+'nt',_0x24c87b[_0x35bb06(0x451)+_0x35bb06(0xfe)+'t']=_0x2d9801,_0x137231['appen'+_0x35bb06(0xe6)+'d'](_0x24c87b);}return _0x114b2d[_0x35bb06(0x335)+'d'](_0x137231,_0x382928),_0x114b2d;}function _0x2a025a(_0x31fe00,_0xe8a772){var _0x55f99b=_0x2eb896,_0x35829c=document[_0x55f99b(0x2c8)+'eElem'+_0x55f99b(0x3ae)](_0x3c9206[_0x55f99b(0x31a)]);return _0x35829c[_0x55f99b(0x13c)+'Name']=_0x3c9206[_0x55f99b(0x672)](_0x55f99b(0x3a9)+'te',_0xe8a772?_0x3c9206[_0x55f99b(0x365)]:''),_0x35829c[_0x55f99b(0x451)+_0x55f99b(0xfe)+'t']=_0x31fe00,_0x35829c;}function _0x31437d(_0x2d796d,_0xe59eba,_0x4c44e5,_0x322384,_0x2b4f84){var _0x59d10f=_0x2eb896,_0x7cfa5f={'mORxW':function(_0x4f2eaa,_0x2e6d49,_0x51dcc3,_0xa37ea6,_0x7b8320){var _0x328103=_0x4216;return _0x7fa5cf[_0x328103(0x26e)](_0x4f2eaa,_0x2e6d49,_0x51dcc3,_0xa37ea6,_0x7b8320);},'xrWxr':'shoot'+_0x59d10f(0x500),'pnrDx':function(_0x5689c8,_0x423848){return _0x5689c8===_0x423848;},'ZvhAA':'uSIpz','CHzXe':function(_0x17d8d4,_0x287c6d){var _0x36819a=_0x59d10f;return _0x7fa5cf[_0x36819a(0x548)](_0x17d8d4,_0x287c6d);}},_0x241f6a=document['creat'+_0x59d10f(0x4ee)+'ent'](_0x59d10f(0x4f0));_0x241f6a[_0x59d10f(0x13c)+_0x59d10f(0x423)]=_0x7fa5cf['DBxcZ']+(_0x4c44e5?_0x59d10f(0x4a7):'');var _0x1cf1d4=document['creat'+'eElem'+_0x59d10f(0x3ae)](_0x7fa5cf[_0x59d10f(0x68e)]);_0x1cf1d4[_0x59d10f(0x13c)+_0x59d10f(0x423)]=_0x7fa5cf['UVuUO'];var _0x17efc4=document[_0x59d10f(0x2c8)+_0x59d10f(0x4ee)+_0x59d10f(0x3ae)](_0x59d10f(0x4f0));_0x17efc4['class'+'Name']='sk-ca'+'rd-ti'+'tle';var _0x15b8ba=document['creat'+_0x59d10f(0x4ee)+_0x59d10f(0x3ae)](_0x7fa5cf[_0x59d10f(0x37a)]);_0x15b8ba['textC'+_0x59d10f(0xfe)+'t']=_0x2d796d,_0x17efc4['appen'+_0x59d10f(0xe6)+'d'](_0x15b8ba);if(_0x322384){var _0x556fe5=_0x107356(_0x4c44e5,_0x541e6e=>{var _0x4a05b5=_0x59d10f;_0x7cfa5f[_0x4a05b5(0x36d)](_0x7cfa5f[_0x4a05b5(0x51d)],_0x4a05b5(0x31e))?(_0x241f6a[_0x4a05b5(0x13c)+_0x4a05b5(0x2ef)][_0x4a05b5(0x4ba)+'e']('on',_0x541e6e),_0x7cfa5f[_0x4a05b5(0x351)](_0x322384,_0x541e6e)):_0x7cfa5f[_0x4a05b5(0x624)](_0x2126de,_0x5573db,_0x22ca44,_0x67ba03,_0x7cfa5f[_0x4a05b5(0x279)]);});_0x1cf1d4['appen'+'d'](_0x17efc4,_0x556fe5);}else _0x1cf1d4[_0x59d10f(0x335)+_0x59d10f(0xe6)+'d'](_0x17efc4);_0x241f6a[_0x59d10f(0x335)+'dChil'+'d'](_0x1cf1d4);if(_0x2b4f84&&_0x2b4f84[_0x59d10f(0x460)+'h']){var _0x1f5ed4=document['creat'+'eElem'+_0x59d10f(0x3ae)](_0x59d10f(0x4f0));_0x1f5ed4[_0x59d10f(0x13c)+_0x59d10f(0x423)]=_0x59d10f(0x56d)+'ody';var _0x3eaf83=document['creat'+_0x59d10f(0x4ee)+'ent'](_0x7fa5cf[_0x59d10f(0x68e)]);_0x3eaf83['class'+'Name']=_0x59d10f(0x30d)+_0x59d10f(0x5bf),_0x3eaf83[_0x59d10f(0x451)+_0x59d10f(0xfe)+'t']=_0xe59eba,_0x1f5ed4[_0x59d10f(0x335)+_0x59d10f(0xe6)+'d'](_0x3eaf83);for(var _0x523574 of _0x2b4f84)_0x1f5ed4[_0x59d10f(0x335)+_0x59d10f(0xe6)+'d'](_0x523574);_0x241f6a[_0x59d10f(0x335)+_0x59d10f(0xe6)+'d'](_0x1f5ed4);}return _0x241f6a;}var _0x1f7869=[{'id':_0x3c9206[_0x2eb896(0x1ea)],'label':_0x3c9206[_0x2eb896(0x695)]},{'id':_0x2eb896(0x2cf),'label':'Move'},{'id':'visua'+'l','label':'Visua'+'l'},{'id':_0x3c9206['TLPoX'],'label':_0x3c9206['pOpQK']},{'id':_0x3c9206[_0x2eb896(0x5b4)],'label':_0x3c9206['Ifyeh']}];function _0x215262(){var _0x43eb38=_0x2eb896,_0x5ea2d0=_0x1ed0a9['safeM'+_0x43eb38(0x454)]?_0x43eb38(0x431)+'MODE\x20'+_0x43eb38(0x18b)+_0x43eb38(0x583)+_0x43eb38(0x156)+_0x43eb38(0x1a6)+_0x43eb38(0x342)+'(relo'+_0x43eb38(0x2e7)+'\x20exit'+')':_0x1ed0a9[_0x43eb38(0x369)]?_0x3c9206['cZJNJ'](_0x3c9206[_0x43eb38(0x512)](_0x3c9206['pVikg'](_0x3c9206[_0x43eb38(0x173)]+(_0x1ed0a9['hooks'+_0x43eb38(0x62b)]?_0x3c9206['msluP'](_0x3c9206['dheqp'](_0x1ed0a9['hooks'+'Ok'],'/'),_0x1ed0a9['hooks'+'Total'])+('\x20hook'+'s'):_0x43eb38(0x3ec)+'ks\x20ar'+_0x43eb38(0x16a)+_0x43eb38(0x639)+_0x43eb38(0x194))+_0x3c9206[_0x43eb38(0x6a9)],_0x1ed0a9['gameL'+_0x43eb38(0x2ee)]?'loade'+'d':'loadi'+'ng')+('\x20|\x20sh'+_0x43eb38(0x5eb)+'\x20')+(_0x1ed0a9[_0x43eb38(0x53b)+_0x43eb38(0x500)]?_0x3c9206['OeCPj']:_0x3c9206[_0x43eb38(0x246)]),_0x43eb38(0x52b)+'vemen'+'t\x20'),_0x1ed0a9[_0x43eb38(0x146)+'ents']?_0x43eb38(0x63b):_0x43eb38(0x5ad)):_0x3c9206[_0x43eb38(0x1fa)];if(_0x1ed0a9['lastE'+_0x43eb38(0x585)])_0x5ea2d0+=_0x3c9206[_0x43eb38(0x21a)](_0x3c9206[_0x43eb38(0x602)],_0x1ed0a9['lastE'+_0x43eb38(0x585)]);return _0x31437d('Statu'+'s',_0x5ea2d0,_0x1ed0a9['uwmk'],null,[_0x1dd67b(_0x3c9206[_0x43eb38(0x4c9)],_0x43eb38(0x1c2)+'\x20Unit'+_0x43eb38(0x296)+_0x43eb38(0x66a)+_0x43eb38(0x4aa)+_0x43eb38(0x4b5)+_0x43eb38(0x45d)+_0x43eb38(0x3f2)+_0x43eb38(0x3a2)+'Rate',_0xdd826('Apply',()=>{var _0xd65051=_0x43eb38;if(_0x7fa5cf['IqeHM'](_0xd65051(0x211),'tkPyw')){var _0xa5449a=_0x2fce3d[_0x5c6704];if(_0xa5449a)try{_0xa5449a[_0xd65051(0x4ad)+'ed']=!!_0xfee4f3;}catch(_0x3b71bb){}}else try{if(_0x27de58)_0x27de58[_0xd65051(0x1ce)](_0x7fa5cf['TUAIJ'],_0xd65051(0x45d)+'arget'+'Frame'+_0xd65051(0x366),[0x8bf*0x4+-0x274+0xfcc*-0x2]);}catch(_0x466414){}}))]);}function _0xd04128(_0x41c42f){var _0x143c0e=_0x2eb896,_0x206d53={'FjSxZ':function(_0x38ce5b){return _0x38ce5b();},'xtbfE':_0x143c0e(0x5c5)+'e','ZNhRJ':_0x7fa5cf['XliUT'],'QDxok':_0x7fa5cf[_0x143c0e(0x68e)],'QVHiT':function(_0x520b7f,_0x4733c9){var _0x1d9201=_0x143c0e;return _0x7fa5cf[_0x1d9201(0x2dd)](_0x520b7f,_0x4733c9);},'AeQRH':_0x143c0e(0x34c),'SLtbE':_0x143c0e(0x5a9),'bbmHP':_0x143c0e(0x403)+'desc','lqIgL':_0x7fa5cf['uNdzK'],'UtBdA':_0x143c0e(0x431)+_0x143c0e(0x43f)+'-\x20ove'+_0x143c0e(0x583)+_0x143c0e(0x156)+'\x20no\x20h'+'ooks\x20'+_0x143c0e(0x445)+_0x143c0e(0x2e7)+_0x143c0e(0x3ed)+')','uDNYE':function(_0x5ccc7b,_0x2fcb4a){var _0x17fa6b=_0x143c0e;return _0x7fa5cf[_0x17fa6b(0x26c)](_0x5ccc7b,_0x2fcb4a);},'sdzPy':function(_0x5c7216,_0x3fd845){return _0x7fa5cf['KBGwG'](_0x5c7216,_0x3fd845);},'GxiKV':_0x143c0e(0x11c)+_0x143c0e(0x21f)+'\x20','uSGfN':_0x143c0e(0x142)+'ng','JZPYD':_0x143c0e(0x376)+_0x143c0e(0x5eb)+'\x20','TiIFt':'none','XCMBV':function(_0x8f734d,_0x5e0cd1){return _0x7fa5cf['EkIRW'](_0x8f734d,_0x5e0cd1);},'bselP':_0x143c0e(0x19d)+'R:\x20','qnNwa':_0x143c0e(0x11c)+_0x143c0e(0x3c8)+_0x143c0e(0x520)+_0x143c0e(0x380)+_0x143c0e(0xf6)+'ly\x20(r'+_0x143c0e(0x401)+_0x143c0e(0x3fd)+'he\x20us'+_0x143c0e(0x587)+'ipt)','vKQjD':function(_0xb31867){return _0xb31867();},'dTjUZ':_0x7fa5cf['KUqsV'],'KNZjI':function(_0x591f62){return _0x591f62();},'dGElP':_0x7fa5cf[_0x143c0e(0x4f4)],'cXJtC':_0x7fa5cf['Mdbhu'],'SnHYv':function(_0x59e4c9){return _0x59e4c9();},'muoss':function(_0x2a0730,_0x3c7f43){return _0x2a0730===_0x3c7f43;},'lvqnf':_0x7fa5cf['rScYk'],'FhPQX':function(_0x3c1d3b){return _0x7fa5cf['oqKDP'](_0x3c1d3b);},'wmFYp':function(_0x153c92){return _0x153c92();},'LRVEC':function(_0x13718b,_0x23f8ae,_0x575a24,_0x5dcd29,_0x3225ac){return _0x13718b(_0x23f8ae,_0x575a24,_0x5dcd29,_0x3225ac);},'hdDwV':function(_0x48e092,_0xbd166b){var _0x53172=_0x143c0e;return _0x7fa5cf[_0x53172(0x53d)](_0x48e092,_0xbd166b);},'xOvCF':'Tpxwv'};if(_0x41c42f===_0x143c0e(0x54a)+'t')return[_0x215262(),_0x31437d(_0x7fa5cf['OeDNC'],_0x143c0e(0x372)+'s\x20OHe'+_0x143c0e(0x41c)+'Initi'+'ateTa'+_0x143c0e(0x115)+'lth\x20a'+'nd\x20OH'+_0x143c0e(0x327)+'.Loca'+_0x143c0e(0xfa)+_0x143c0e(0x236)+_0x143c0e(0x2dc)+_0x143c0e(0x2a0)+_0x143c0e(0x171)+_0x143c0e(0x5ce)+'ill\x20y'+_0x143c0e(0x681),_0x170730[_0x143c0e(0x49f)],_0x2c4a62=>{var _0x3c661d=_0x143c0e;_0x170730['god']=_0x2c4a62,_0x206d53[_0x3c661d(0x59a)](_0x26bb6f),_0x3b1256('god',_0x2c4a62),_0x3b1256(_0x206d53[_0x3c661d(0x12d)],_0x2c4a62);},[]),_0x7fa5cf['mrgIc'](_0x31437d,_0x143c0e(0x5b1)+'coil',_0x143c0e(0x2f8)+'\x20Reco'+'ilMot'+_0x143c0e(0x243)+'ick\x20s'+_0x143c0e(0xf2)+'\x20reco'+_0x143c0e(0x60d)+_0x143c0e(0x4ac)+_0x143c0e(0x273)+'r\x20adv'+'ance.',_0x170730[_0x143c0e(0x123)+_0x143c0e(0x42a)],_0x4fd88d=>{var _0x48c651=_0x143c0e;_0x170730[_0x48c651(0x123)+'oil']=_0x4fd88d,_0x7fa5cf[_0x48c651(0x100)](_0x26bb6f),_0x3b1256(_0x48c651(0x123)+_0x48c651(0x42a),_0x4fd88d);},[]),_0x31437d(_0x143c0e(0x413)+'read',_0x143c0e(0x4e2)+'s\x20spr'+_0x143c0e(0x2b9)+'nd\x20ma'+_0x143c0e(0x5fc)+_0x143c0e(0x32f)+_0x143c0e(0x3b9)+'\x20your'+_0x143c0e(0x524)+_0x143c0e(0x16c)+_0x143c0e(0x45a)+_0x143c0e(0x5e2),_0x170730[_0x143c0e(0x55e)+_0x143c0e(0x272)],_0x47e5cc=>{var _0x169e9d=_0x143c0e;if(_0x206d53[_0x169e9d(0x393)](_0x206d53[_0x169e9d(0x39c)],_0x206d53['SLtbE'])){var _0x4a5569=('7|0|5'+_0x169e9d(0x169)+'3|2|6')['split']('|'),_0x2a3043=0x2*0xddc+-0x1*-0x46a+-0x2022;while(!![]){switch(_0x4a5569[_0x2a3043++]){case'0':_0x452445[_0x169e9d(0x13c)+'Name']=_0x206d53[_0x169e9d(0x126)];continue;case'1':_0x1f716b[_0x169e9d(0x13c)+_0x169e9d(0x423)]='sk-md'+_0x169e9d(0x5bf);continue;case'2':for(var _0x537893 of _0x2588c8)_0x452445[_0x169e9d(0x335)+'dChil'+'d'](_0x537893);continue;case'3':_0x452445[_0x169e9d(0x335)+'dChil'+'d'](_0x1f716b);continue;case'4':_0x1f716b[_0x169e9d(0x451)+_0x169e9d(0xfe)+'t']=_0x1ac43b;continue;case'5':var _0x1f716b=_0x25a858['creat'+_0x169e9d(0x4ee)+_0x169e9d(0x3ae)]('div');continue;case'6':_0x236b77['appen'+'dChil'+'d'](_0x452445);continue;case'7':var _0x452445=_0xb6ea62['creat'+_0x169e9d(0x4ee)+'ent'](_0x206d53['QDxok']);continue;}break;}}else _0x170730[_0x169e9d(0x55e)+_0x169e9d(0x272)]=_0x47e5cc,_0x26bb6f();},[]),_0x31437d(_0x7fa5cf[_0x143c0e(0x300)],_0x143c0e(0x297)+_0x143c0e(0x434)+'rtide'+_0x143c0e(0x1a2)+'n.fir'+_0x143c0e(0x670)+'\x20to\x201'+'0%.\x20S'+_0x143c0e(0x38b)+'\x20may\x20'+_0x143c0e(0x42d)+_0x143c0e(0x226)+_0x143c0e(0x532)+'s.',_0x170730[_0x143c0e(0x358)+'Exp'],_0x34f9f4=>{var _0x143dc4=_0x143c0e;_0x170730[_0x143dc4(0x358)+_0x143dc4(0x267)]=_0x34f9f4,_0x26bb6f();},[]),_0x7fa5cf['mrgIc'](_0x31437d,_0x7fa5cf[_0x143c0e(0x1b2)],_0x143c0e(0x515)+'rites'+_0x143c0e(0x699)+'tideW'+_0x143c0e(0x386)+'\x20dama'+'ge.\x20B'+_0x143c0e(0x645)+_0x143c0e(0x1bf)+_0x143c0e(0x517)+_0x143c0e(0x3d6)+'r\x20val'+'idate'+'s.',_0x170730['damag'+'eExp'],_0x1a3382=>{_0x170730['damag'+'eExp']=_0x1a3382,_0x26bb6f();},[_0x1dd67b(_0x143c0e(0x4bf)+_0x143c0e(0x50b)+'ue',null,_0x7fa5cf['mrgIc'](_0x119321,_0x170730[_0x143c0e(0x159)+_0x143c0e(0x33b)+'e'],0xc7*-0x15+0x156f+-0x512,-0x2*-0xa3+0x1c9d+0x1*-0x1bef,-0x1d*-0x77+0x119+-0xe8f,_0x3114dc=>{var _0xb0c10e=_0x143c0e;_0xb0c10e(0x111)===_0xb0c10e(0x559)?(_0x4b6863[_0xb0c10e(0x53a)+_0xb0c10e(0x55c)]=_0xb1f373,_0x11cdbc()):(_0x170730[_0xb0c10e(0x159)+'eValu'+'e']=_0x3114dc,_0x26bb6f());}))]),_0x7fa5cf[_0x143c0e(0x5b9)](_0x31437d,'Infin'+'ite\x20A'+'mmo\x20['+_0x143c0e(0x50e),_0x7fa5cf['dLtpL'],_0x170730[_0x143c0e(0x5c2)+_0x143c0e(0x4c5)],_0x2ddbe3=>{var _0x101434=_0x143c0e;if('iTmag'==='iTmag')_0x170730[_0x101434(0x5c2)+_0x101434(0x4c5)]=_0x2ddbe3,_0x26bb6f();else{var _0xfb2c20=_0x5d077b[_0x3edb51]['query'+_0x101434(0x343)+_0x101434(0x37f)](_0x206d53[_0x101434(0x3d5)]);_0xfb2c20&&(_0x206d53[_0x101434(0x393)](_0xfb2c20[_0x101434(0x451)+'onten'+'t'][_0x101434(0x289)+'Of'](_0x101434(0x141)),0x1*-0x21b+-0x14dc+0x16f7)||_0x206d53['QVHiT'](_0xfb2c20['textC'+'onten'+'t']['index'+'Of'](_0x206d53[_0x101434(0x17d)]),0x6*-0x3b3+0xa1e+-0x4*-0x305))&&(_0xfb2c20[_0x101434(0x451)+_0x101434(0xfe)+'t']=_0xb8fb42['safeM'+'ode']?_0x206d53['UtBdA']:_0x5d2061[_0x101434(0x369)]?_0x206d53[_0x101434(0x40a)](_0x206d53[_0x101434(0x405)](_0x206d53['GxiKV']+(_0x54bfcf[_0x101434(0x4a5)+'Total']?_0xa2bc84['hooks'+'Ok']+'/'+_0x33ce48[_0x101434(0x4a5)+_0x101434(0x62b)]+('\x20hook'+'s'):_0x101434(0x3ec)+_0x101434(0x5ec)+'med\x20('+'all\x20o'+_0x101434(0x194))+(_0x101434(0x1aa)+_0x101434(0x6a1)),_0x3140f0['gameL'+_0x101434(0x2ee)]?'loade'+'d':_0x206d53[_0x101434(0x125)])+_0x206d53['JZPYD']+(_0x3ab278[_0x101434(0x53b)+'ers']?'held':_0x206d53[_0x101434(0x505)]),'\x20|\x20mo'+_0x101434(0x164)+'t\x20')+(_0x4effc0[_0x101434(0x146)+'ents']?'held':_0x101434(0x5ad))+(_0x494d59[_0x101434(0x649)+_0x101434(0x585)]?_0x206d53[_0x101434(0x371)](_0x206d53[_0x101434(0x4f6)],_0x88a685['lastE'+'rror']):''):_0x206d53[_0x101434(0x588)]);}},[_0x2a025a('If\x20re'+'loads'+_0x143c0e(0x528)+'l\x20dra'+_0x143c0e(0x1d2)+'he\x20de'+_0x143c0e(0x560)+'nt\x20ha'+_0x143c0e(0x2a3)+_0x143c0e(0x30b)+'where'+'.')])];if(_0x7fa5cf[_0x143c0e(0x2dd)](_0x41c42f,_0x7fa5cf['gTuQx']))return[_0x7fa5cf['mrgIc'](_0x31437d,_0x7fa5cf['tRoLH'],'Scale'+_0x143c0e(0x490)+'\x20four'+_0x143c0e(0x5c7)+'ment\x20'+'speed'+'\x20limi'+'ts\x20pl'+_0x143c0e(0x53f)+'celer'+'ation'+'.',_0x7fa5cf['IEhDJ'](_0x170730[_0x143c0e(0x53a)+'Pct'],0x1fb0+-0x1*0x811+0x173b*-0x1),null,[_0x1dd67b(_0x7fa5cf[_0x143c0e(0x260)],_0x7fa5cf['aUEQH'],_0x119321(_0x170730['speed'+'Pct'],0x192d*-0x1+0x109*-0x5+0x1e8c,0x477+-0x1aa7+0x175c,-0x7*0x54d+-0x25ab+0x4acb,_0x122da7=>{var _0x632269=_0x143c0e;_0x170730[_0x632269(0x53a)+'Pct']=_0x122da7,_0x26bb6f();}))]),_0x31437d(_0x7fa5cf[_0x143c0e(0x513)],_0x7fa5cf[_0x143c0e(0x592)],_0x170730['jumpP'+'ct']!==-0x16b*-0x13+-0x1f70+0x4e3||_0x170730['gravi'+_0x143c0e(0x1f4)]!==0xd8*0x23+0x23cf*0x1+0xd*-0x4ff,null,[_0x1dd67b(_0x143c0e(0x586)+'%',null,_0x119321(_0x170730['jumpP'+'ct'],0x1874+-0x1f7*-0xa+-0x2be8,0x94d*-0x2+0xebf+-0x3*-0x1ad,-0xb28+-0x89*0x1+-0x2*-0x5db,_0x176eb8=>{var _0x41b7e8=_0x143c0e,_0x39d70f={'PfflK':function(_0x11590d,_0x16bfaf){var _0x5cb8e6=_0x4216;return _0x7fa5cf[_0x5cb8e6(0x2bf)](_0x11590d,_0x16bfaf);},'NUsFG':_0x41b7e8(0x403)+_0x41b7e8(0x138),'HKYkd':_0x41b7e8(0x141),'qPQbR':_0x41b7e8(0x4f1),'xhrim':'SAFE\x20'+_0x41b7e8(0x43f)+_0x41b7e8(0x49b)+_0x41b7e8(0x583)+'only,'+_0x41b7e8(0x1a6)+_0x41b7e8(0x342)+'(relo'+_0x41b7e8(0x2e7)+_0x41b7e8(0x3ed)+')','CTglR':function(_0x3c2516,_0x13f8ba){var _0x2663cb=_0x41b7e8;return _0x7fa5cf[_0x2663cb(0x3c2)](_0x3c2516,_0x13f8ba);},'erwfw':function(_0x561033,_0x4ee035){return _0x561033+_0x4ee035;},'OhCdj':_0x7fa5cf[_0x41b7e8(0x678)],'yZNqd':_0x41b7e8(0x63b),'zTjPN':'UWMK\x20'+_0x41b7e8(0x3c8)+'NG\x20-\x20'+'overl'+_0x41b7e8(0xf6)+_0x41b7e8(0x430)+_0x41b7e8(0x401)+_0x41b7e8(0x3fd)+_0x41b7e8(0xed)+_0x41b7e8(0x587)+_0x41b7e8(0x65a)};if(_0x7fa5cf['Jsdiv']('DRCtW','orrRb')){if(!_0x27f6a4)return;var _0x93f717=_0x31df6f[_0x41b7e8(0x697)+'ren'];for(var _0x2a624f=0x1dc6+-0x1756+0x338*-0x2;_0x39d70f[_0x41b7e8(0x5dc)](_0x2a624f,_0x93f717[_0x41b7e8(0x460)+'h']);_0x2a624f++){var _0x1c5ec5=_0x93f717[_0x2a624f][_0x41b7e8(0x362)+_0x41b7e8(0x343)+_0x41b7e8(0x37f)](_0x39d70f['NUsFG']);_0x1c5ec5&&(_0x1c5ec5['textC'+_0x41b7e8(0xfe)+'t'][_0x41b7e8(0x289)+'Of'](_0x39d70f[_0x41b7e8(0x17b)])===0x25db+-0x2*-0xedb+0x9a7*-0x7||_0x1c5ec5[_0x41b7e8(0x451)+'onten'+'t']['index'+'Of'](_0x39d70f[_0x41b7e8(0x3ad)])===0x133f+-0x266a+0x132b)&&(_0x1c5ec5['textC'+_0x41b7e8(0xfe)+'t']=_0x523e78[_0x41b7e8(0x584)+'ode']?_0x39d70f['xhrim']:_0x3ac9d7[_0x41b7e8(0x369)]?_0x39d70f[_0x41b7e8(0x623)]('UWMK\x20'+'bound'+'\x20'+(_0x3071af[_0x41b7e8(0x4a5)+_0x41b7e8(0x62b)]?_0x39d70f['erwfw'](_0x304f6f['hooks'+'Ok']+'/'+_0x100f68['hooks'+'Total'],_0x41b7e8(0x3df)+'s'):_0x41b7e8(0x3ec)+_0x41b7e8(0x5ec)+_0x41b7e8(0x16a)+_0x41b7e8(0x639)+'ff)')+('\x20|\x20ga'+_0x41b7e8(0x6a1)),_0x13460a[_0x41b7e8(0x2b0)+_0x41b7e8(0x2ee)]?_0x39d70f['OhCdj']:_0x41b7e8(0x142)+'ng')+(_0x41b7e8(0x376)+'ooter'+'\x20')+(_0x51bd99['shoot'+_0x41b7e8(0x500)]?_0x41b7e8(0x63b):_0x41b7e8(0x5ad))+(_0x41b7e8(0x52b)+_0x41b7e8(0x164)+'t\x20')+(_0xb975b4[_0x41b7e8(0x146)+'ents']?_0x39d70f['yZNqd']:'none')+(_0x2c589b[_0x41b7e8(0x649)+_0x41b7e8(0x585)]?'\x20|\x20ER'+_0x41b7e8(0x170)+_0x2fcc18['lastE'+'rror']:''):_0x39d70f['zTjPN']);}}else _0x170730[_0x41b7e8(0x15e)+'ct']=_0x176eb8,_0x26bb6f();})),_0x7fa5cf[_0x143c0e(0x19b)](_0x1dd67b,'Gravi'+'ty\x20%',_0x7fa5cf[_0x143c0e(0x534)],_0x7fa5cf['nHKjA'](_0x119321,_0x170730['gravi'+'tyPct'],-0x1400*-0x1+0x189d*0x1+-0x1*0x2c93,-0x21*0x8f+0x1b4f*-0x1+0x2e86,0x158*-0xf+-0x1e3b+-0x1*-0x3268,_0x384c01=>{var _0x3cba9f=_0x143c0e;_0x170730['gravi'+_0x3cba9f(0x1f4)]=_0x384c01,_0x206d53['vKQjD'](_0x26bb6f);}))]),_0x7fa5cf[_0x143c0e(0x48e)](_0x31437d,'Bunny'+_0x143c0e(0x491),_0x143c0e(0x4e2)+'s\x20Mov'+_0x143c0e(0x4bc)+_0x143c0e(0x483)+'JumpT'+'ime\x20s'+_0x143c0e(0xf2)+_0x143c0e(0x422)+'\x20cool'+_0x143c0e(0x27b)+_0x143c0e(0x18c)+_0x143c0e(0x466)+_0x143c0e(0x287),_0x170730[_0x143c0e(0x11b)],_0x208ac0=>{_0x170730['bhop']=_0x208ac0,_0x26bb6f();},[])];if(_0x7fa5cf[_0x143c0e(0x331)](_0x41c42f,_0x7fa5cf[_0x143c0e(0x67f)]))return[_0x7fa5cf[_0x143c0e(0x244)](_0x31437d,_0x143c0e(0x3cb)+'rokes',_0x7fa5cf[_0x143c0e(0x412)],_0x170730['keyst'+_0x143c0e(0x295)],_0x37fc76=>{var _0x4fb47b=_0x143c0e;_0x170730[_0x4fb47b(0x50d)+_0x4fb47b(0x295)]=_0x37fc76,_0x7fa5cf['aTZLr'](_0x26bb6f);},[_0x1dd67b(_0x143c0e(0x5ab)+_0x143c0e(0x16f),null,_0x2cae57(_0x170730[_0x143c0e(0x281)],[['bl',_0x7fa5cf[_0x143c0e(0x46f)]],['br',_0x143c0e(0x1c6)+_0x143c0e(0x3ab)+'ht'],['ml','Left\x20'+_0x143c0e(0x544)+'e']],_0x42e8fc=>{var _0x51542c=_0x143c0e;_0x206d53['QVHiT']('APHxP',_0x206d53['dTjUZ'])?(_0x170730[_0x51542c(0x281)]=_0x42e8fc,_0x26bb6f()):_0xfc6436[_0x51542c(0x533)]==='Inser'+'t'&&(_0x43b9f5['preve'+_0x51542c(0x2cd)+_0x51542c(0x550)](),_0x9e6951());})),_0x1dd67b(_0x143c0e(0x4a2),null,_0x7fa5cf[_0x143c0e(0x5b9)](_0x119321,_0x170730['ksSca'+'le'],-0x1d81+-0x4*-0x7eb+-0x3*0xb9+0.6,-0xf7d*-0x1+0x3d*0x13+-0x1403+0.6000000000000001,-0x5ab+-0x22d4+0x287f*0x1+0.05,_0x5a6f3f=>{var _0x79245e=_0x143c0e;_0x7fa5cf['yyEni'](_0x79245e(0x51c),_0x7fa5cf[_0x79245e(0x6a6)])?(_0x5865e7['damag'+_0x79245e(0x33b)+'e']=_0x37b33a,_0x206d53['FjSxZ'](_0x1d3cb6)):(_0x170730[_0x79245e(0x5d5)+'le']=_0x5a6f3f,_0x7fa5cf['DTpZx'](_0x26bb6f));})),_0x7fa5cf[_0x143c0e(0xfb)](_0x1dd67b,_0x7fa5cf['WOaiH'],null,_0x7fa5cf['BhWEc'](_0x107356,_0x170730[_0x143c0e(0x2f5)],_0x5cf89b=>{_0x170730['ksCps']=_0x5cf89b,_0x7fa5cf['CzpJu'](_0x26bb6f);}))]),_0x31437d('Cross'+'hair',_0x143c0e(0x308)+_0x143c0e(0x57a)+'ter\x20c'+'rossh'+'air.',_0x170730[_0x143c0e(0x6a4)+_0x143c0e(0x4b8)],_0x5e3a26=>{var _0x393197=_0x143c0e;_0x170730[_0x393197(0x6a4)+'hair']=_0x5e3a26,_0x7fa5cf[_0x393197(0x694)](_0x26bb6f);},[_0x1dd67b(_0x7fa5cf['yzjTM'],null,_0x119321(_0x170730[_0x143c0e(0x32d)+'e'],0x1*0x180d+0xe26+-0x2633+0.5,0x1d63+-0x1c67+-0xfa+0.5,-0x1afa+0x18d0+-0x22a*-0x1+0.1,_0x5541ca=>{_0x170730['chSiz'+'e']=_0x5541ca,_0x7fa5cf['Goklh'](_0x26bb6f);})),_0x1dd67b('Color',null,_0x7fa5cf['FFTSd'](_0x13e416,_0x170730['chCol'+'or'],_0x4ad831=>{var _0x4a9ed3=_0x143c0e;_0x170730[_0x4a9ed3(0x441)+'or']=_0x4ad831,_0x206d53[_0x4a9ed3(0x3fa)](_0x26bb6f);}))]),_0x31437d(_0x143c0e(0x1cc)+_0x143c0e(0x500),_0x143c0e(0x1a7)+'verla'+'y.',_0x170730[_0x143c0e(0x332)],null,[_0x7fa5cf['hKesG'](_0x1dd67b,_0x7fa5cf[_0x143c0e(0x1e3)],null,_0x107356(_0x170730[_0x143c0e(0x332)],_0x3ccc3c=>{_0x170730['fps']=_0x3ccc3c,_0x26bb6f();})),_0x7fa5cf[_0x143c0e(0x37c)](_0x2a025a,'No\x20en'+'emy\x20c'+_0x143c0e(0x1e1)+'r:\x20th'+_0x143c0e(0x259)+_0x143c0e(0x345)+_0x143c0e(0x24f)+_0x143c0e(0x612)+_0x143c0e(0x1e2)+'ePlay'+'ers\x20t'+_0x143c0e(0x113)+_0x143c0e(0x172)+_0x143c0e(0x34b))])];if(_0x41c42f==='misc'){if(_0x143c0e(0x241)!==_0x7fa5cf[_0x143c0e(0x2b5)])return[_0x31437d(_0x7fa5cf[_0x143c0e(0x186)],_0x143c0e(0x180)+_0x143c0e(0x508)+_0x143c0e(0x265)+_0x143c0e(0x359)+_0x143c0e(0x4a6)+_0x143c0e(0x324),_0x170730[_0x143c0e(0x45b)+'ck'],_0x517270=>{var _0x356dbf=_0x143c0e;_0x7fa5cf['pFgjP']===_0x356dbf(0x60a)?_0x3e6182=_0x362e96&&_0x238d2c[_0x356dbf(0x129)]?_0x31639b[_0x356dbf(0x129)]():0x1*-0x381+-0xb5a+0xedb:(_0x170730['adblo'+'ck']=_0x517270,_0x26bb6f());},[_0x2a025a(_0x7fa5cf['iWkvV'])])];else{var _0x2ee91a=(_0x143c0e(0xdc)+_0x143c0e(0x1a0)+'1|4')[_0x143c0e(0x350)]('|'),_0x1b4102=0x365+-0xc*-0x32b+-0x1*0x2969;while(!![]){switch(_0x2ee91a[_0x1b4102++]){case'0':_0x13ad51['class'+_0x143c0e(0x423)]=_0x206d53['dGElP'];continue;case'1':_0x13ad51[_0x143c0e(0x501)+'ck']=_0x50eaa1=>{var _0x5a7b48=_0x143c0e;_0x50eaa1[_0x5a7b48(0x3fc)+'ropag'+_0x5a7b48(0x360)](),_0x41b83e[_0x5a7b48(0x150)](_0xd6031);};continue;case'2':var _0x13ad51=_0x4ba732['creat'+_0x143c0e(0x4ee)+_0x143c0e(0x3ae)](_0x206d53[_0x143c0e(0x38c)]);continue;case'3':var _0x41b83e={'vmnHm':function(_0x94196c){return _0x206d53['SnHYv'](_0x94196c);}};continue;case'4':return _0x13ad51;case'5':_0x13ad51[_0x143c0e(0x6a7)]=_0x143c0e(0x579)+'n';continue;case'6':_0x13ad51['textC'+'onten'+'t']=_0x22952f;continue;}break;}}}return[_0x7fa5cf['nHKjA'](_0x31437d,_0x7fa5cf['wONkI'],_0x7fa5cf[_0x143c0e(0x4f5)],_0x170730[_0x143c0e(0x584)+'ode'],_0x47198a=>{var _0x31e1d0=_0x143c0e;if(_0x206d53['muoss'](_0x206d53[_0x31e1d0(0x666)],_0x31e1d0(0x420)))_0x170730[_0x31e1d0(0x584)+'ode']=_0x47198a,_0x206d53['FhPQX'](_0x26bb6f),location['reloa'+'d']();else{var _0x532f31=-0x7*-0x196+0x8c*-0x31+-0x62*-0x29;for(var _0x3a3b65 in _0x8f0607){if(_0x8b906f[_0x3a3b65]&&_0x5d287c[_0x3a3b65][_0x31e1d0(0x467)+'ed'])_0x532f31++;}_0x122b7e['hooks'+'Ok']=_0x532f31;}},[_0x7fa5cf['ZpYSA'](_0x2a025a,'Appli'+'es\x20on'+_0x143c0e(0x2d5)+_0x143c0e(0x41a)+_0x143c0e(0x642)+_0x143c0e(0x151)+_0x143c0e(0x203)+_0x143c0e(0x336)+_0x143c0e(0x581)+_0x143c0e(0x2c7)+_0x143c0e(0x426)+'eeze\x20'+_0x143c0e(0x23b)+_0x143c0e(0x610)+'lated'+_0x143c0e(0x424)+_0x143c0e(0x2d7)+'\x20the\x20'+'hooks'+'-appl'+_0x143c0e(0x198)+_0x143c0e(0x64a))]),_0x31437d('Hook\x20'+'risk\x20'+'switc'+_0x143c0e(0x603),_0x143c0e(0x385)+_0x143c0e(0x2e1)+_0x143c0e(0x240)+_0x143c0e(0x56a)+'WASM\x20'+_0x143c0e(0x370)+_0x143c0e(0x174)+'\x20for\x20'+_0x143c0e(0x30f)+_0x143c0e(0x3f9)+_0x143c0e(0x32b)+_0x143c0e(0x31b)+'\x20ALL\x20'+_0x143c0e(0x290)+_0x143c0e(0x399)+_0x143c0e(0x3c0)+_0x143c0e(0x440)+'ignat'+_0x143c0e(0x5de)+_0x143c0e(0x23c)+_0x143c0e(0x51a)+_0x143c0e(0x1f9)+_0x143c0e(0x14e)+_0x143c0e(0x2bd)+_0x143c0e(0x4c7)+_0x143c0e(0x355)+_0x143c0e(0x653)+_0x143c0e(0x2b8)+'nctio'+_0x143c0e(0x110)+_0x143c0e(0x484)+'e\x20mis'+'match'+'\x27\x20the'+'\x20mome'+_0x143c0e(0x43d)+'\x20is\x20c'+_0x143c0e(0x30e)+_0x143c0e(0x6a8)+'n\x20the'+_0x143c0e(0x641)+'one\x20a'+'t\x20a\x20t'+_0x143c0e(0x10a)+'reloa'+_0x143c0e(0x317)+_0x143c0e(0x3d9)+_0x143c0e(0x492)+'h\x20one'+_0x143c0e(0x2ff)+_0x143c0e(0x178)+'d\x20cho'+_0x143c0e(0x1bd)+'n.',_0x170730['hookG'+'od']||_0x170730['hookG'+'odDie']||_0x170730['hookN'+_0x143c0e(0x448)+'il']||_0x170730[_0x143c0e(0xe4)+_0x143c0e(0x36e)+'e'],_0xf8c098=>{var _0x1b867e=_0x143c0e;if(_0x7fa5cf['UCiYy']===_0x7fa5cf[_0x1b867e(0x41f)])try{_0x5c6e61[_0x1b867e(0x4ad)+'ed']=!!_0x2f62c6;}catch(_0x4cdbf5){}else _0x170730[_0x1b867e(0x502)+'od']=_0xf8c098,_0x170730[_0x1b867e(0x502)+_0x1b867e(0x37e)]=_0xf8c098,_0x170730[_0x1b867e(0x5cf)+'oReco'+'il']=_0xf8c098,_0x170730[_0x1b867e(0xe4)+'aptur'+'e']=_0xf8c098,_0x7fa5cf['eklRy'](_0x26bb6f),location[_0x1b867e(0x5e6)+'d']();},[_0x7fa5cf['alJSl'](_0x2a025a,_0x143c0e(0x2e5)+_0x143c0e(0x2ec)+_0x143c0e(0x2d5)+'ad.'),_0x7fa5cf['NSCpA'](_0x1dd67b,_0x143c0e(0x675)+'OHeal'+'th.In'+_0x143c0e(0x105)+_0x143c0e(0x63a)+_0x143c0e(0x291)+'h)',null,_0x7fa5cf['FFTSd'](_0x107356,_0x170730['hookG'+'od'],_0x188e03=>{_0x170730['hookG'+'od']=_0x188e03,_0x26bb6f();})),_0x1dd67b('godDi'+'e\x20(OH'+'ealth'+_0x143c0e(0x35a)+'lDie)',null,_0x107356(_0x170730[_0x143c0e(0x502)+'odDie'],_0x187bd8=>{var _0x222210=_0x143c0e;_0x170730[_0x222210(0x502)+_0x222210(0x37e)]=_0x187bd8,_0x206d53[_0x222210(0x3f0)](_0x26bb6f);})),_0x7fa5cf['TFtDe'](_0x1dd67b,_0x7fa5cf[_0x143c0e(0x620)],null,_0x7fa5cf[_0x143c0e(0x5bb)](_0x107356,_0x170730[_0x143c0e(0x5cf)+_0x143c0e(0x448)+'il'],_0x54584a=>{var _0x22f822=_0x143c0e;_0x170730[_0x22f822(0x5cf)+'oReco'+'il']=_0x54584a,_0x7fa5cf['Goklh'](_0x26bb6f);})),_0x1dd67b(_0x7fa5cf[_0x143c0e(0x629)],_0x7fa5cf['wVEwL'],_0x107356(_0x170730[_0x143c0e(0xe4)+_0x143c0e(0x36e)+'e'],_0x4d15ba=>{var _0x1ee07d=_0x143c0e;_0x170730['hookC'+'aptur'+'e']=_0x4d15ba,_0x206d53[_0x1ee07d(0x107)](_0x26bb6f);}))]),_0x31437d(_0x143c0e(0x2aa)+_0x143c0e(0x117)+'r',_0x143c0e(0x318)+_0x143c0e(0x2b1)+_0x143c0e(0x69f)+_0x143c0e(0x5c1)+'etect'+_0x143c0e(0x155)+_0x143c0e(0x1f5)+'rtup\x20'+'via\x20S'+_0x143c0e(0x224)+'tecti'+_0x143c0e(0x547)+'\x20Keep'+'\x20ON.',_0x170730[_0x143c0e(0x5cc)+_0x143c0e(0x10e)],_0x556a9e=>{var _0xd4daac=_0x143c0e,_0xe4792e={'GQvuc':_0xd4daac(0x320),'eisUa':function(_0x21013d,_0x2edfb6,_0x341da2,_0xc21108,_0x2dc521){var _0x64c3ce=_0xd4daac;return _0x206d53[_0x64c3ce(0x109)](_0x21013d,_0x2edfb6,_0x341da2,_0xc21108,_0x2dc521);}};_0x206d53['hdDwV']('Tpxwv',_0x206d53['xOvCF'])?(_0xbaa9bb(_0x3f6205,-0x33a*-0x5+-0x1d09+0xd73,_0xe4792e[_0xd4daac(0x5a0)],0x2d*0xc1+-0x1bb*-0xb+0x34f6*-0x1+0.1),_0xe4792e['eisUa'](_0x47da48,_0x474967,0x12f*0x10+0x114a+-0x23da,_0xe4792e['GQvuc'],-0x15e4+-0x1d*0x63+0x5*0x69f+0.1)):(_0x170730['actkK'+'ill']=_0x556a9e,_0x26bb6f());},[_0x2a025a(_0x143c0e(0x42f)+'amage'+_0x143c0e(0x56f)+_0x143c0e(0x135)+'atly\x20'+'raise'+_0x143c0e(0x626)+_0x143c0e(0x1ab)+_0x143c0e(0x494)+_0x143c0e(0x67a)+_0x143c0e(0x216)+'on.',!![])]),_0x31437d(_0x7fa5cf[_0x143c0e(0xe2)],_0x143c0e(0x22b)+'\x20leav'+_0x143c0e(0x459)+_0x143c0e(0x407)+_0x143c0e(0x1e2)+'e\x20tra'+'ces.',!![],null,[_0x7fa5cf[_0x143c0e(0x59b)](_0x1dd67b,_0x143c0e(0x2be)+'my\x20se'+_0x143c0e(0x5b6)+'s',null,_0x7fa5cf[_0x143c0e(0x498)](_0xdd826,_0x7fa5cf['VErFz'],()=>{_0x170730={..._0x581add},_0x26bb6f(),location['reloa'+'d']();}))])];}var _0x4a4ac5=null;function _0x4db1d0(_0x546d06){var _0x29303e=_0x2eb896;if(_0x3c9206[_0x29303e(0x63e)](_0x3c9206['oVWHH'],_0x3c9206[_0x29303e(0x42c)])){var _0x42f070=(_0x29303e(0x698)+'|4|1')[_0x29303e(0x350)]('|'),_0x230b18=0x5c1*-0x1+0x12b6+-0xcf5;while(!![]){switch(_0x42f070[_0x230b18++]){case'0':_0x15f543[_0x29303e(0x4ad)+'ed']=_0x24fb92!==![];continue;case'1':return _0x15f543;case'2':var _0x15f543=_0x22ae9e[_0x29303e(0x38f)+_0x29303e(0x27c)+'x']({'typeName':_0x4cee86,'methodName':_0x386d1f,'params':_0x50e4f6,'returnType':_0xdc4d8d},_0x4a5f5a);continue;case'3':_0x4638d6[_0x528560]=_0x15f543;continue;case'4':_0x1e2eb4[_0x29303e(0x4a5)+_0x29303e(0x62b)]++;continue;}break;}}else{_0x2ec466=_0x546d06;if(!_0x4a4ac5){var _0x4164a2=document[_0x29303e(0x2c8)+'eElem'+'ent'](_0x3c9206[_0x29303e(0x5ae)]);_0x4164a2['textC'+_0x29303e(0xfe)+'t']=_0x26a4e3,_0x355675['appen'+_0x29303e(0xe6)+'d'](_0x4164a2),_0x4a4ac5=_0x3c9206[_0x29303e(0x2f7)](_0x935b2a),_0x355675[_0x29303e(0x335)+'dChil'+'d'](_0x4a4ac5),requestAnimationFrame(()=>_0x4a4ac5['class'+_0x29303e(0x2ef)]['add'](_0x29303e(0x384)));}_0x4a4ac5[_0x29303e(0x13c)+_0x29303e(0x2ef)][_0x29303e(0x4ba)+'e'](_0x29303e(0x384),_0x546d06);}}function _0x41be0d(){_0x4db1d0(!_0x2ec466);}function _0x935b2a(){var _0x2ac0ef=_0x2eb896,_0x54a921={'BUYGu':_0x2ac0ef(0x29b)+'e'},_0x576db2=document['creat'+_0x2ac0ef(0x4ee)+'ent'](_0x2ac0ef(0x4f0));_0x576db2['class'+'Name']=_0x2ac0ef(0x22e)+'nel';var _0x3bd7d8=document[_0x2ac0ef(0x2c8)+'eElem'+'ent']('nav');_0x3bd7d8[_0x2ac0ef(0x13c)+_0x2ac0ef(0x423)]='mn-si'+'de';var _0x2f7b89=document['creat'+_0x2ac0ef(0x4ee)+_0x2ac0ef(0x3ae)](_0x3c9206[_0x2ac0ef(0x31a)]);_0x2f7b89['class'+'Name']=_0x3c9206[_0x2ac0ef(0x353)],_0x2f7b89[_0x2ac0ef(0x62d)+'HTML']=_0x2ac0ef(0x27d)+_0x2ac0ef(0x648)+'ox=\x220'+'\x200\x2024'+'\x2024\x22\x20'+_0x2ac0ef(0x13c)+'=\x22mn-'+_0x2ac0ef(0x124)+'svg\x22>'+'<path'+_0x2ac0ef(0x461)+_0x2ac0ef(0x495)+'c-1.5'+_0x2ac0ef(0x479)+_0x2ac0ef(0x4d5)+_0x2ac0ef(0x4d0)+_0x2ac0ef(0x2d6)+_0x2ac0ef(0x3d1)+'8-4.5'+_0x2ac0ef(0xf1)+'5s4\x202'+'\x204\x204.'+_0x2ac0ef(0x25c)+'-2.5\x20'+_0x2ac0ef(0x210)+_0x2ac0ef(0x2d0)+_0x2ac0ef(0x42b)+_0x2ac0ef(0x4ca)+'\x22\x20str'+_0x2ac0ef(0x482)+'#ff6b'+_0x2ac0ef(0x262)+_0x2ac0ef(0x1a1)+_0x2ac0ef(0x61e)+'h=\x222\x22'+_0x2ac0ef(0x3b3)+'ke-li'+'necap'+_0x2ac0ef(0x2d8)+_0x2ac0ef(0x4e9)+_0x2ac0ef(0x1a1)+_0x2ac0ef(0x1d8)+'join='+_0x2ac0ef(0x3d2)+'d\x22/><'+_0x2ac0ef(0x23e)+_0x2ac0ef(0x5b3)+'\x2212\x22\x20'+'cy=\x221'+_0x2ac0ef(0x506)+'\x221.5\x22'+_0x2ac0ef(0x6a0)+'=\x22#ff'+'6b9d\x22'+_0x2ac0ef(0x201)+'vg>',_0x3bd7d8[_0x2ac0ef(0x335)+'dChil'+'d'](_0x2f7b89);var _0xe967e5=document['creat'+'eElem'+_0x2ac0ef(0x3ae)]('div');_0xe967e5[_0x2ac0ef(0x13c)+_0x2ac0ef(0x423)]=_0x3c9206['MZxfu'];var _0x3f4db6=document['creat'+'eElem'+_0x2ac0ef(0x3ae)]('heade'+'r');_0x3f4db6['class'+_0x2ac0ef(0x423)]=_0x2ac0ef(0x4db)+'p';var _0x56d826=document[_0x2ac0ef(0x2c8)+_0x2ac0ef(0x4ee)+'ent'](_0x3c9206[_0x2ac0ef(0x31a)]);_0x56d826['class'+_0x2ac0ef(0x423)]='mn-ti'+'tles';var _0x2edd2f=document['creat'+_0x2ac0ef(0x4ee)+_0x2ac0ef(0x3ae)]('h2');_0x2edd2f[_0x2ac0ef(0x13c)+'Name']=_0x3c9206[_0x2ac0ef(0x220)],_0x2edd2f[_0x2ac0ef(0x451)+'onten'+'t']=_0x2ac0ef(0x5f2)+'a\x20Kou'+'r';var _0x653705=document[_0x2ac0ef(0x2c8)+_0x2ac0ef(0x4ee)+_0x2ac0ef(0x3ae)](_0x2ac0ef(0x3cf));_0x653705['class'+_0x2ac0ef(0x423)]=_0x2ac0ef(0x5f3)+'b',_0x653705[_0x2ac0ef(0x451)+'onten'+'t']='kours'+'trike'+_0x2ac0ef(0x35b)+'enu',_0x56d826['appen'+'d'](_0x2edd2f,_0x653705);var _0x211d91=document[_0x2ac0ef(0x2c8)+'eElem'+_0x2ac0ef(0x3ae)](_0x2ac0ef(0x579)+'n');_0x211d91[_0x2ac0ef(0x6a7)]=_0x2ac0ef(0x579)+'n',_0x211d91[_0x2ac0ef(0x13c)+_0x2ac0ef(0x423)]=_0x2ac0ef(0x615)+'ose',_0x211d91['title']=_0x2ac0ef(0x540),_0x211d91[_0x2ac0ef(0x62d)+_0x2ac0ef(0x664)]='<svg\x20'+_0x2ac0ef(0x648)+_0x2ac0ef(0x5a8)+_0x2ac0ef(0xfd)+_0x2ac0ef(0x536)+'<path'+'\x20d=\x22M'+'6\x206l1'+_0x2ac0ef(0x652)+_0x2ac0ef(0x47a)+'6\x2018\x22'+'/></s'+'vg>',_0x211d91['oncli'+'ck']=()=>_0x4db1d0(![]),_0x3f4db6[_0x2ac0ef(0x335)+'d'](_0x56d826,_0x211d91);var _0x59da17=document[_0x2ac0ef(0x2c8)+'eElem'+'ent']('div');_0x59da17[_0x2ac0ef(0x13c)+_0x2ac0ef(0x423)]=_0x2ac0ef(0x45f)+'ls',_0xe967e5[_0x2ac0ef(0x335)+'d'](_0x3f4db6,_0x59da17),_0x576db2[_0x2ac0ef(0x335)+'d'](_0x3bd7d8,_0xe967e5);var _0x318e2c=new Map();for(var _0x3020c8 of _0x1f7869){if(_0x2ac0ef(0x607)===_0x3c9206[_0x2ac0ef(0x199)]){var _0x3e2ed5=_0x5c53ab[_0x2ac0ef(0x2c8)+_0x2ac0ef(0x4ee)+'ent'](_0x7fa5cf[_0x2ac0ef(0x22a)]);_0x3e2ed5[_0x2ac0ef(0x6a7)]=_0x2ac0ef(0x579)+'n',_0x3e2ed5[_0x2ac0ef(0x13c)+_0x2ac0ef(0x423)]='mn-ta'+'b',_0x3e2ed5['title']=_0x418260['label'],_0x3e2ed5['inner'+_0x2ac0ef(0x664)]=_0x7fa5cf[_0x2ac0ef(0x1f3)](_0x7fa5cf[_0x2ac0ef(0x5cd)]+_0x35e799['label'],_0x2ac0ef(0x2d4)+'ll>'),_0x3e2ed5[_0x2ac0ef(0x501)+'ck']=(_0x287b9c=>()=>_0x4988d1(_0x287b9c))(_0x140778['id']),_0x4a8fa5[_0x2ac0ef(0x64e)](_0x1b51f1['id'],_0x3e2ed5),_0x4a38ec[_0x2ac0ef(0x335)+'dChil'+'d'](_0x3e2ed5);}else{var _0x3998df=document[_0x2ac0ef(0x2c8)+'eElem'+'ent'](_0x3c9206['wunNM']);_0x3998df['type']=_0x2ac0ef(0x579)+'n',_0x3998df['class'+'Name']=_0x2ac0ef(0x284)+'b',_0x3998df[_0x2ac0ef(0x4c6)]=_0x3020c8['label'],_0x3998df[_0x2ac0ef(0x62d)+_0x2ac0ef(0x664)]=_0x3c9206[_0x2ac0ef(0x288)](_0x2ac0ef(0x531)+'l>',_0x3020c8[_0x2ac0ef(0x48b)])+('</sma'+'ll>'),_0x3998df['oncli'+'ck']=(_0x1f630d=>()=>_0x4bd05a(_0x1f630d))(_0x3020c8['id']),_0x318e2c['set'](_0x3020c8['id'],_0x3998df),_0x3bd7d8['appen'+_0x2ac0ef(0xe6)+'d'](_0x3998df);}}function _0x4bd05a(_0x47588d){var _0x763ef=_0x2ac0ef;_0x14f986[_0x763ef(0x3fe)]=_0x47588d,_0x2e3549();var _0x5c5c78=_0x1f7869['find'](_0x1642bc=>_0x1642bc['id']===_0x47588d)||_0x1f7869[0x2577+-0xfad*-0x1+-0x26*0x166];_0x2edd2f['textC'+_0x763ef(0xfe)+'t']=_0x763ef(0x5f2)+'a\x20Kou'+'r\x20—\x20'+_0x5c5c78[_0x763ef(0x48b)];for(var [_0x2c736a,_0x1b4fdf]of _0x318e2c)_0x1b4fdf[_0x763ef(0x13c)+_0x763ef(0x2ef)][_0x763ef(0x4ba)+'e'](_0x54a921['BUYGu'],_0x2c736a===_0x47588d);_0x59da17[_0x763ef(0x344)+_0x763ef(0x55d)+'ldren'](..._0xd04128(_0x47588d));}return _0x4bd05a(_0x14f986[_0x2ac0ef(0x3fe)]||'comba'+'t'),setInterval(()=>{var _0x11bf2e=_0x2ac0ef;if(!_0x2ec466)return;var _0x334ca2=_0x59da17['child'+'ren'];for(var _0x424d7b=-0x1*-0x2dd+-0xa3*-0x4+-0x569;_0x424d7b<_0x334ca2[_0x11bf2e(0x460)+'h'];_0x424d7b++){var _0x26a7e0=_0x334ca2[_0x424d7b][_0x11bf2e(0x362)+_0x11bf2e(0x343)+_0x11bf2e(0x37f)](_0x7fa5cf['dXcaT']);_0x26a7e0&&(_0x26a7e0['textC'+_0x11bf2e(0xfe)+'t'][_0x11bf2e(0x289)+'Of'](_0x7fa5cf[_0x11bf2e(0x214)])===-0xe28+0x69f+0x3*0x283||_0x7fa5cf[_0x11bf2e(0x2dd)](_0x26a7e0[_0x11bf2e(0x451)+_0x11bf2e(0xfe)+'t']['index'+'Of'](_0x11bf2e(0x4f1)),0x1bed+0x1ef2+0x869*-0x7))&&(_0x26a7e0[_0x11bf2e(0x451)+'onten'+'t']=_0x1ed0a9['safeM'+_0x11bf2e(0x454)]?_0x7fa5cf['NxNSX']:_0x1ed0a9[_0x11bf2e(0x369)]?_0x7fa5cf[_0x11bf2e(0x1ec)](_0x7fa5cf[_0x11bf2e(0x118)](_0x7fa5cf['fluLY']('UWMK\x20'+'bound'+'\x20',_0x1ed0a9[_0x11bf2e(0x4a5)+_0x11bf2e(0x62b)]?_0x7fa5cf[_0x11bf2e(0x390)](_0x7fa5cf['UzYil'](_0x1ed0a9[_0x11bf2e(0x4a5)+'Ok'],'/')+_0x1ed0a9[_0x11bf2e(0x4a5)+'Total'],'\x20hook'+'s'):_0x7fa5cf[_0x11bf2e(0x3dc)])+(_0x11bf2e(0x1aa)+_0x11bf2e(0x6a1))+(_0x1ed0a9[_0x11bf2e(0x2b0)+_0x11bf2e(0x2ee)]?_0x7fa5cf[_0x11bf2e(0x678)]:_0x11bf2e(0x142)+'ng'),_0x7fa5cf['utLLp'])+(_0x1ed0a9['shoot'+_0x11bf2e(0x500)]?'held':_0x7fa5cf[_0x11bf2e(0x637)])+_0x7fa5cf[_0x11bf2e(0x658)],_0x1ed0a9[_0x11bf2e(0x146)+_0x11bf2e(0x397)]?_0x11bf2e(0x63b):'none')+(_0x1ed0a9[_0x11bf2e(0x649)+'rror']?_0x7fa5cf['gbLdR']+_0x1ed0a9[_0x11bf2e(0x649)+_0x11bf2e(0x585)]:''):_0x11bf2e(0x11c)+_0x11bf2e(0x3c8)+_0x11bf2e(0x520)+'overl'+'ay\x20on'+_0x11bf2e(0x430)+'einst'+_0x11bf2e(0x3fd)+'he\x20us'+_0x11bf2e(0x587)+_0x11bf2e(0x65a));}},-0x4*0x5e9+-0xb*0x153+0x2a1d),_0x576db2;}var _0x26a4e3=_0x2eb896(0x32a)+':host'+'\x20{\x20al'+'l:\x20in'+_0x2eb896(0x54e)+_0x2eb896(0x143)+'\x20\x20\x20*\x20'+_0x2eb896(0x179)+_0x2eb896(0x122)+'ng:\x20b'+_0x2eb896(0x619)+_0x2eb896(0x34e)+'\x20marg'+_0x2eb896(0x13a)+';\x20fon'+_0x2eb896(0x35d)+_0x2eb896(0x4b1)+'\x22Inte'+_0x2eb896(0x140)+'Segoe'+_0x2eb896(0x319)+_0x2eb896(0x23a)+_0x2eb896(0x650)+_0x2eb896(0x446)+_0x2eb896(0x671)+'if;\x20}'+_0x2eb896(0x32a)+'.mn-p'+_0x2eb896(0x4c2)+_0x2eb896(0x489)+_0x2eb896(0xeb)+':\x20abs'+'olute'+_0x2eb896(0x5d4)+'ht:\x202'+_0x2eb896(0x4af)+'botto'+'m:\x2024'+_0x2eb896(0x3e8)+_0x2eb896(0x554)+'\x20min('+'620px'+',\x20cal'+_0x2eb896(0x481)+'vw\x20-\x20'+'48px)'+');\x20ma'+'x-hei'+_0x2eb896(0x4d8)+'min(4'+_0x2eb896(0x104)+_0x2eb896(0x383)+'(100v'+_0x2eb896(0x61d)+'8px))'+';\x0a\x20\x20\x20'+_0x2eb896(0x2bc)+_0x2eb896(0x5e9)+_0x2eb896(0x677)+_0x2eb896(0x5d2)+_0x2eb896(0x2eb)+_0x2eb896(0x166)+_0x2eb896(0x378)+_0x2eb896(0x181)+_0x2eb896(0x44f)+'order'+_0x2eb896(0x10d)+'us:\x202'+'2px;\x20'+_0x2eb896(0x418)+'er-ev'+_0x2eb896(0x438)+_0x2eb896(0xdd)+_0x2eb896(0x54f)+_0x2eb896(0x647)+_0x2eb896(0x34d)+'und:\x20'+'rgba('+_0x2eb896(0x4da)+',21,.'+_0x2eb896(0x15b)+'backd'+'rop-f'+'ilter'+':\x20blu'+'r(22p'+_0x2eb896(0x5c3)+_0x2eb896(0x2f9)+_0x2eb896(0x275)+_0x2eb896(0x12f)+_0x2eb896(0x184)+_0x2eb896(0x3a7)+'kdrop'+_0x2eb896(0x56e)+_0x2eb896(0x38d)+_0x2eb896(0x2a7)+_0x2eb896(0x676)+'satur'+'ate(1'+'50%);'+_0x2eb896(0x32a)+_0x2eb896(0x54b)+_0x2eb896(0x5ac)+_0x2eb896(0x5c9)+_0x2eb896(0x40d)+'1px\x20r'+'gba(2'+_0x2eb896(0x2c5)+_0x2eb896(0x225)+',.06)'+_0x2eb896(0x148)+_0x2eb896(0x3ba)+_0x2eb896(0x20d)+'\x20rgba'+_0x2eb896(0x507)+'255,2'+_0x2eb896(0x127)+_0x2eb896(0x23f)+_0x2eb896(0x601)+'\x2080px'+'\x20rgba'+_0x2eb896(0x5ee)+'0,.55'+_0x2eb896(0x46a)+_0x2eb896(0x195)+_0x2eb896(0x2c1)+_0x2eb896(0x10c)+_0x2eb896(0x4c3)+_0x2eb896(0x337)+_0x2eb896(0x2f6)+_0x2eb896(0x669)+_0x2eb896(0x5e7)+_0x2eb896(0x208)+'point'+'er-ev'+_0x2eb896(0x438)+_0x2eb896(0x679)+';\x20tra'+_0x2eb896(0x5f7)+_0x2eb896(0x2d1)+_0x2eb896(0x2c1)+'y\x20.35'+'s\x20eas'+'e,\x20tr'+_0x2eb896(0x245)+'rm\x20.4'+_0x2eb896(0x5f1)+'bic-b'+'ezier'+_0x2eb896(0x1fc)+_0x2eb896(0x364)+_0x2eb896(0x683)+'\x20\x20\x20\x20\x20'+_0x2eb896(0xe0)+'r:\x20#f'+'6eef2'+_0x2eb896(0x1e0)+_0x2eb896(0x2a8)+'e:\x2013'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x2eb896(0x264)+_0x2eb896(0x44a)+'shown'+_0x2eb896(0x15f)+_0x2eb896(0x22d)+':\x201;\x20'+_0x2eb896(0x34a)+_0x2eb896(0x3a0)+_0x2eb896(0x679)+';\x20poi'+_0x2eb896(0x4d1)+_0x2eb896(0x2ae)+_0x2eb896(0x57c)+_0x2eb896(0x462)+_0x2eb896(0x32a)+_0x2eb896(0x4a9)+_0x2eb896(0x158)+_0x2eb896(0x189)+_0x2eb896(0x49e)+'flex;'+_0x2eb896(0x651)+'-dire'+'ction'+_0x2eb896(0x307)+_0x2eb896(0x442)+'align'+_0x2eb896(0x575)+'s:\x20ce'+_0x2eb896(0x2a9)+'\x20gap:'+_0x2eb896(0x4a0)+'\x20widt'+'h:\x2062'+_0x2eb896(0x233)+_0x2eb896(0x298)+_0x2eb896(0x1ef)+'\x20padd'+_0x2eb896(0x41e)+'12px\x20'+(_0x2eb896(0x685)+_0x2eb896(0x1d1)+_0x2eb896(0x43b)+_0x2eb896(0x633)+_0x2eb896(0x205)+_0x2eb896(0x2ad)+'backg'+'round'+_0x2eb896(0xe7)+_0x2eb896(0x478)+',255,'+_0x2eb896(0x16d)+_0x2eb896(0x330)+_0x2eb896(0x182)+_0x2eb896(0x52f)+_0x2eb896(0xdb)+'set\x200'+_0x2eb896(0x40d)+_0x2eb896(0x2a2)+'gba(2'+_0x2eb896(0x2c5)+_0x2eb896(0x225)+_0x2eb896(0x4b4)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x2eb896(0x303)+_0x2eb896(0x39f)+'y:\x20gr'+_0x2eb896(0x395)+'lace-'+'items'+_0x2eb896(0x5a4)+_0x2eb896(0x5db)+'width'+_0x2eb896(0x128)+_0x2eb896(0x325)+'ight:'+_0x2eb896(0x1c9)+_0x2eb896(0x143)+_0x2eb896(0x196)+_0x2eb896(0x56c)+'o-svg'+_0x2eb896(0x1d0)+'dth:\x20'+_0x2eb896(0x428)+'\x20heig'+_0x2eb896(0x3d4)+'5px;\x20'+'overf'+_0x2eb896(0x580)+_0x2eb896(0xe1)+'le;\x20f'+'ilter'+_0x2eb896(0x3a1)+_0x2eb896(0x571)+'dow(0'+'\x200\x204p'+_0x2eb896(0x377)+'a(255'+_0x2eb896(0x28f)+_0x2eb896(0x153)+'8));\x20'+'}\x0a\x20\x20\x20'+_0x2eb896(0x333)+_0x2eb896(0x234)+_0x2eb896(0x189)+_0x2eb896(0x49e)+_0x2eb896(0x3b6)+_0x2eb896(0x52d)+_0x2eb896(0x232)+_0x2eb896(0x57b)+'enter'+_0x2eb896(0x4f7)+_0x2eb896(0x4e5)+'conte'+'nt:\x20c'+_0x2eb896(0x5a2)+_0x2eb896(0x387)+_0x2eb896(0x119)+_0x2eb896(0x15d)+'heigh'+'t:\x2034'+_0x2eb896(0x44f)+'order'+_0x2eb896(0x60e)+_0x2eb896(0x5e5)+_0x2eb896(0x1d5)+'ius:\x20'+'10px;'+'\x0a\x20\x20\x20\x20'+_0x2eb896(0x294)+_0x2eb896(0x1fe)+'nd:\x20t'+_0x2eb896(0x12e)+_0x2eb896(0x60f)+_0x2eb896(0x568)+_0x2eb896(0x667)+'gba(2'+_0x2eb896(0xe9)+_0x2eb896(0x3cc)+_0x2eb896(0x496)+_0x2eb896(0x25b)+_0x2eb896(0x1b4)+_0x2eb896(0x4f8)+'r;\x20fo'+_0x2eb896(0x449)+'ze:\x201'+_0x2eb896(0x2ab)+'font-'+'weigh'+'t:\x2070'+_0x2eb896(0x64f)+'\x20\x20\x20\x20.'+'mn-ta'+_0x2eb896(0x25a)+'er\x20{\x20'+_0x2eb896(0x526)+_0x2eb896(0xe7)+_0x2eb896(0x1c0)+',238,'+_0x2eb896(0x144)+_0x2eb896(0x57d)+_0x2eb896(0x32a)+_0x2eb896(0x1db)+'ab.ac'+'tive\x20'+'{\x20col'+_0x2eb896(0x2a6)+_0x2eb896(0xf3)+'d;\x20ba'+'ckgro'+'und:\x20'+_0x2eb896(0x207)+_0x2eb896(0x3be)+_0x2eb896(0x558)+'7,.1)'+';\x20}\x0a\x20'+_0x2eb896(0x196)+'n-mai'+_0x2eb896(0x5d3)+_0x2eb896(0x298)+'1;\x20mi'+_0x2eb896(0x17c)+'th:\x200'+';\x20dis'+_0x2eb896(0x3f5)+_0x2eb896(0x651)+';\x20fle'+'x-dir'+_0x2eb896(0x33f)+_0x2eb896(0x165)+_0x2eb896(0x352)+'\x20}\x0a\x20\x20'+_0x2eb896(0x314)+'-top\x20'+_0x2eb896(0x3db)+_0x2eb896(0x3f5)+_0x2eb896(0x651)+_0x2eb896(0x464)+'gn-it'+'ems:\x20'+'cente'+_0x2eb896(0x139)+_0x2eb896(0x57e)+'px;\x20p'+_0x2eb896(0x378)+_0x2eb896(0x47d)+_0x2eb896(0x112)+'\x2012px'+_0x2eb896(0x5d0)+_0x2eb896(0x322)+_0x2eb896(0x1eb)+'none;'+_0x2eb896(0x40e)+'\x20\x20.mn'+'-titl'+_0x2eb896(0x2a4)+'flex:'+'\x201;\x20m'+'in-wi'+_0x2eb896(0x3bc)+_0x2eb896(0x64f)+_0x2eb896(0x67d)+'mn-h\x20'+'{\x20fon'+_0x2eb896(0x2a8)+'e:\x2017'+'px;\x20f'+'ont-w'+_0x2eb896(0x341)+_0x2eb896(0x693)+';\x20}\x0a\x20'+_0x2eb896(0x196)+'n-sub'+_0x2eb896(0x1c4)+_0x2eb896(0x449)+_0x2eb896(0x3d8)+_0x2eb896(0x68d)+'opaci')+(_0x2eb896(0x47f)+_0x2eb896(0x58b)+_0x2eb896(0x67d)+_0x2eb896(0x615)+'ose\x20{'+_0x2eb896(0x189)+_0x2eb896(0x49e)+'grid;'+_0x2eb896(0x4ea)+'e-ite'+_0x2eb896(0x57b)+_0x2eb896(0x5a2)+_0x2eb896(0x387)+_0x2eb896(0x346)+_0x2eb896(0x4cd)+_0x2eb896(0x437)+_0x2eb896(0x49a)+_0x2eb896(0x44f)+'order'+':\x200;\x20'+'borde'+'r-rad'+_0x2eb896(0x4a1)+_0x2eb896(0x4cd)+'backg'+'round'+':\x20tra'+_0x2eb896(0x306)+'ent;\x20'+'color'+_0x2eb896(0x631)+'erit;'+_0x2eb896(0x5ef)+_0x2eb896(0x4e4)+'.45;\x20'+'curso'+'r:\x20po'+_0x2eb896(0x5c4)+';\x20}\x0a\x20'+_0x2eb896(0x196)+'n-clo'+_0x2eb896(0x183)+_0x2eb896(0x347)+_0x2eb896(0x5ef)+_0x2eb896(0x4e4)+'1;\x20ba'+_0x2eb896(0x34d)+'und:\x20'+'rgba('+'255,2'+_0x2eb896(0x2c5)+_0x2eb896(0x65e)+_0x2eb896(0x329)+_0x2eb896(0x67d)+'mn-cl'+'ose\x20s'+'vg\x20{\x20'+_0x2eb896(0x2c6)+':\x2014p'+_0x2eb896(0x325)+_0x2eb896(0x668)+'\x2014px'+_0x2eb896(0x682)+_0x2eb896(0x2fa)+_0x2eb896(0x450)+_0x2eb896(0x1a1)+_0x2eb896(0x4d2)+_0x2eb896(0xdf)+'olor;'+'\x20stro'+_0x2eb896(0x561)+'dth:\x20'+_0x2eb896(0x5a7)+_0x2eb896(0x1f0)+'linec'+_0x2eb896(0x255)+'ound;'+_0x2eb896(0x40e)+_0x2eb896(0x314)+'-cols'+_0x2eb896(0x537)+'ex:\x201'+';\x20min'+'-heig'+'ht:\x200'+_0x2eb896(0x1b6)+_0x2eb896(0x43e)+_0x2eb896(0x473)+_0x2eb896(0x5b2)+_0x2eb896(0x1dc)+_0x2eb896(0x3dd)+_0x2eb896(0x50f)+_0x2eb896(0x29e)+_0x2eb896(0x33a)+'ate-c'+'olumn'+_0x2eb896(0x3d3)+_0x2eb896(0x120)+_0x2eb896(0xf5)+'fill,'+'\x20minm'+'ax(25'+_0x2eb896(0x1dd)+_0x2eb896(0x696)+';\x20ali'+'gn-it'+_0x2eb896(0x108)+_0x2eb896(0x1af)+_0x2eb896(0x464)+_0x2eb896(0x6ab)+_0x2eb896(0x14c)+_0x2eb896(0x598)+_0x2eb896(0x2e0)+_0x2eb896(0x58e)+_0x2eb896(0x2ab)+_0x2eb896(0x1e7)+'ng:\x200'+_0x2eb896(0x257)+_0x2eb896(0x557)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-col'+_0x2eb896(0x175)+_0x2eb896(0x63d)+_0x2eb896(0x13d)+_0x2eb896(0x690)+_0x2eb896(0x1d0)+_0x2eb896(0x3bc)+_0x2eb896(0x4cd)+'}\x0a\x20\x20\x20'+_0x2eb896(0x333)+'cols:'+':-web'+_0x2eb896(0x3bb)+'croll'+_0x2eb896(0x18d)+_0x2eb896(0x48c)+'{\x20bac'+'kgrou'+'nd:\x20r'+'gba(2'+'55,25'+_0x2eb896(0x225)+',.08)'+_0x2eb896(0x1b0)+_0x2eb896(0x599)+'adius'+':\x204px'+_0x2eb896(0x143)+'\x20\x20\x20.s'+'k-car'+'d\x20{\x20b'+'order'+_0x2eb896(0x10d)+_0x2eb896(0x64c)+_0x2eb896(0x15d)+'backg'+_0x2eb896(0x416)+':\x20rgb'+'a(255'+',255,'+'255,.'+'025);'+'\x20box-'+_0x2eb896(0x52f)+_0x2eb896(0xdb)+'set\x200'+_0x2eb896(0x40d)+_0x2eb896(0x2a2)+_0x2eb896(0x2b3)+_0x2eb896(0x2c5)+_0x2eb896(0x225)+',.05)'+';\x20}\x0a\x20'+_0x2eb896(0x4cb)+_0x2eb896(0x541)+_0x2eb896(0x20e)+_0x2eb896(0x433)+'kgrou'+'nd:\x20r'+'gba(2'+_0x2eb896(0x2c5)+_0x2eb896(0x225)+',.04)'+_0x2eb896(0x357)+_0x2eb896(0x5ac)+_0x2eb896(0x4cc)+_0x2eb896(0x2ce)+_0x2eb896(0x33e)+_0x2eb896(0x45e)+_0x2eb896(0x207)+'255,1'+'07,15'+_0x2eb896(0x12a)+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ca'+'rd-he'+_0x2eb896(0x213)+'displ')+('ay:\x20f'+'lex;\x20'+'align'+_0x2eb896(0x575)+'s:\x20ce'+_0x2eb896(0x2a9)+_0x2eb896(0xea)+_0x2eb896(0x2f3)+_0x2eb896(0x555)+_0x2eb896(0x41e)+'11px\x20'+_0x2eb896(0x2a5)+_0x2eb896(0x40e)+_0x2eb896(0x5a3)+_0x2eb896(0x1fb)+'-titl'+_0x2eb896(0x46c)+'lex:\x20'+_0x2eb896(0x254)+_0x2eb896(0x17c)+'th:\x200'+_0x2eb896(0x143)+_0x2eb896(0x4cb)+_0x2eb896(0x541)+_0x2eb896(0x301)+'le\x20st'+_0x2eb896(0x1f7)+_0x2eb896(0x535)+'t-siz'+_0x2eb896(0x24b)+'px;\x20f'+_0x2eb896(0x44d)+_0x2eb896(0x341)+_0x2eb896(0x66f)+_0x2eb896(0x568)+'or:\x20r'+'gba(2'+'46,23'+_0x2eb896(0x3cc)+',.45)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x2eb896(0x20e)+'.sk-c'+_0x2eb896(0x1b7)+_0x2eb896(0x456)+_0x2eb896(0x145)+_0x2eb896(0x2d2)+_0x2eb896(0x4c8)+_0x2eb896(0x499)+'0f5;\x20'+_0x2eb896(0x556)+_0x2eb896(0x429)+_0x2eb896(0x425)+'\x20{\x20pa'+_0x2eb896(0x5da)+':\x200\x201'+'2px\x201'+'0px;\x20'+_0x2eb896(0x556)+_0x2eb896(0x429)+'mdesc'+'\x20{\x20fo'+_0x2eb896(0x449)+_0x2eb896(0x3d8)+_0x2eb896(0x68d)+'opaci'+'ty:\x20.'+'4;\x20ma'+'rgin-'+_0x2eb896(0x61c)+'m:\x206p'+_0x2eb896(0x452)+'\x20\x20\x20\x20.'+_0x2eb896(0x608)+_0x2eb896(0x121)+_0x2eb896(0x39f)+'y:\x20fl'+_0x2eb896(0x52e)+_0x2eb896(0x530)+'items'+':\x20cen'+_0x2eb896(0x5db)+'gap:\x20'+_0x2eb896(0x4cd)+_0x2eb896(0x1e7)+_0x2eb896(0x28d)+_0x2eb896(0x59e)+_0x2eb896(0xf4)+'-size'+_0x2eb896(0x657)+_0x2eb896(0x222)+_0x2eb896(0x556)+_0x2eb896(0x429)+'label'+'\x20{\x20fl'+'ex:\x201'+_0x2eb896(0x568)+_0x2eb896(0x667)+_0x2eb896(0x2b3)+_0x2eb896(0xe9)+'8,242'+_0x2eb896(0x6ac)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2eb896(0x47e)+_0x2eb896(0x3ee)+'ispla'+_0x2eb896(0x48a)+'ock;\x20'+_0x2eb896(0x4fe)+_0x2eb896(0x348)+'\x2010px'+_0x2eb896(0x2db)+'city:'+'\x20.4;\x20'+_0x2eb896(0x556)+'\x20.sk-'+_0x2eb896(0x553)+'h\x20{\x20p'+_0x2eb896(0x4b0)+_0x2eb896(0x589)+_0x2eb896(0x3f8)+_0x2eb896(0x469)+'idth:'+'\x2026px'+_0x2eb896(0x62f)+_0x2eb896(0x4d8)+_0x2eb896(0x2af)+'\x20bord'+'er:\x200'+_0x2eb896(0x1b0)+'der-r'+'adius'+':\x2099p'+_0x2eb896(0x162)+_0x2eb896(0x34d)+'und:\x20'+'rgba('+'255,2'+_0x2eb896(0x2c5)+_0x2eb896(0x1bc)+_0x2eb896(0x238)+_0x2eb896(0x4df)+_0x2eb896(0x160)+_0x2eb896(0x5db)+_0x2eb896(0x1ba)+'\x20none'+_0x2eb896(0x143)+_0x2eb896(0x4cb)+_0x2eb896(0xe5)+_0x2eb896(0x1b5)+'after'+_0x2eb896(0x305)+_0x2eb896(0x14c)+_0x2eb896(0x193)+'\x20posi'+_0x2eb896(0x2cb)+'\x20abso'+_0x2eb896(0x3e4)+_0x2eb896(0x101)+'\x203px;'+'\x20left'+_0x2eb896(0x3b0)+';\x20wid'+_0x2eb896(0x5fa)+_0x2eb896(0x2c9)+_0x2eb896(0x341)+':\x208px'+';\x20bor'+_0x2eb896(0x599)+_0x2eb896(0x692)+':\x2050%'+';\x20bac'+'kgrou'+'nd:\x20r'+_0x2eb896(0x2b3)+_0x2eb896(0x2c5)+_0x2eb896(0x225)+_0x2eb896(0x444)+_0x2eb896(0x2c0)+_0x2eb896(0x5f7)+'on:\x20l'+_0x2eb896(0x188)+_0x2eb896(0x69e)+_0x2eb896(0x39a)+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x2eb896(0x567)+_0x2eb896(0x37d)+'cked='+_0x2eb896(0x61f)+'\x22]\x20{\x20'+'backg'+_0x2eb896(0x416)+':\x20rgb')+(_0x2eb896(0x478)+',107,'+_0x2eb896(0x153)+_0x2eb896(0x3a6)+_0x2eb896(0x556)+'\x20.sk-'+'switc'+'h[ari'+_0x2eb896(0x37d)+_0x2eb896(0x310)+_0x2eb896(0x61f)+'\x22]::a'+_0x2eb896(0x68f)+_0x2eb896(0x493)+_0x2eb896(0x251)+'px;\x20b'+'ackgr'+'ound:'+_0x2eb896(0x5d6)+_0x2eb896(0x5a6)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'field'+'\x20{\x20ba'+_0x2eb896(0x34d)+'und:\x20'+_0x2eb896(0x207)+_0x2eb896(0x367)+_0x2eb896(0x2c5)+_0x2eb896(0x66c)+_0x2eb896(0x1d6)+'order'+':\x200;\x20'+'borde'+_0x2eb896(0x1d5)+'ius:\x20'+_0x2eb896(0x465)+_0x2eb896(0x526)+':\x20#f6'+'eef2;'+'\x20padd'+_0x2eb896(0x41e)+_0x2eb896(0x2ed)+_0x2eb896(0x233)+_0x2eb896(0x278)+_0x2eb896(0x4b6)+'11.5p'+'x;\x20ou'+_0x2eb896(0x19c)+_0x2eb896(0x472)+_0x2eb896(0x66d)+'x-sha'+_0x2eb896(0x3e9)+'inset'+_0x2eb896(0x40d)+'0\x201px'+'\x20rgba'+'(255,'+'255,2'+'55,.0'+_0x2eb896(0x2ea)+_0x2eb896(0x32a)+'.sk-f'+'ield\x20'+_0x2eb896(0x30a)+_0x2eb896(0x1da)+_0x2eb896(0x39a)+'ound:'+'\x20#221'+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'range'+_0x2eb896(0x53e)+_0x2eb896(0x5e9)+_0x2eb896(0x677)+_0x2eb896(0x640)+'ign-i'+_0x2eb896(0x5cb)+'\x20cent'+'er;\x20g'+_0x2eb896(0x191)+'px;\x20}'+_0x2eb896(0x32a)+_0x2eb896(0x5b7)+_0x2eb896(0x596)+'\x20{\x20-w'+_0x2eb896(0x63d)+_0x2eb896(0x149)+'aranc'+_0x2eb896(0x24e)+'ne;\x20a'+'ppear'+_0x2eb896(0x21c)+'\x20none'+';\x20wid'+'th:\x209'+'0px;\x20'+'heigh'+'t:\x208p'+'x;\x20ba'+'ckgro'+'und:\x20'+_0x2eb896(0x34a)+'paren'+_0x2eb896(0x152)+_0x2eb896(0x67d)+_0x2eb896(0x293)+_0x2eb896(0x408)+':-web'+_0x2eb896(0x3bb)+_0x2eb896(0x596)+_0x2eb896(0x1df)+_0x2eb896(0x14f)+'track'+'\x20{\x20he'+_0x2eb896(0x668)+'\x202px;'+'\x20bord'+'er-ra'+'dius:'+'\x202px;'+_0x2eb896(0x19e)+_0x2eb896(0x1a3)+'d:\x20li'+'near-'+'gradi'+_0x2eb896(0x68c)+'ff6b9'+_0x2eb896(0x659)+'f6b9d'+_0x2eb896(0x5e0)+_0x2eb896(0x529)+'r(--p'+',\x2050%'+_0x2eb896(0x4e3)+_0x2eb896(0x5ff)+_0x2eb896(0x573)+'t,\x20rg'+'ba(25'+_0x2eb896(0x225)+',255,'+_0x2eb896(0x1f8)+_0x2eb896(0x40e)+_0x2eb896(0x5a3)+_0x2eb896(0x1a9)+'er::-'+'webki'+'t-sli'+'der-t'+'humb\x20'+'{\x20-we'+_0x2eb896(0x3f7)+_0x2eb896(0x4ab)+_0x2eb896(0x2b7)+':\x20non'+'e;\x20wi'+_0x2eb896(0x3bc)+_0x2eb896(0x465)+_0x2eb896(0x437)+_0x2eb896(0x627)+'x;\x20ma'+_0x2eb896(0x349)+_0x2eb896(0x11f)+_0x2eb896(0x457)+_0x2eb896(0x61b)+_0x2eb896(0x463)+_0x2eb896(0x339)+_0x2eb896(0x2ca)+_0x2eb896(0x19e)+_0x2eb896(0x1a3)+'d:\x20#f'+_0x2eb896(0x1b9)+';\x20}\x0a\x20'+_0x2eb896(0x4cb)+'k-val'+_0x2eb896(0x1c4)+_0x2eb896(0x449)+_0x2eb896(0x3d8)+'1px;\x20'+_0x2eb896(0x4fe)+_0x2eb896(0x54c)+'t:\x2060'+_0x2eb896(0x2fc)+_0x2eb896(0x17c)+_0x2eb896(0x346)+_0x2eb896(0x4cd)+_0x2eb896(0x24c)+'align'+_0x2eb896(0x1ff)+_0x2eb896(0x3b7)+_0x2eb896(0x4c8)+_0x2eb896(0x570)+_0x2eb896(0x1fd)+_0x2eb896(0x630)+_0x2eb896(0x578)+');\x20}\x0a'+_0x2eb896(0x67d)+_0x2eb896(0x655)+_0x2eb896(0x3c5))+('\x20widt'+_0x2eb896(0x130)+_0x2eb896(0x2c9)+_0x2eb896(0x341)+_0x2eb896(0x64d)+_0x2eb896(0x1c5)+_0x2eb896(0x519)+_0x2eb896(0x436)+_0x2eb896(0x619)+_0x2eb896(0x10d)+'us:\x206'+_0x2eb896(0x44f)+'ackgr'+_0x2eb896(0x12c)+_0x2eb896(0x679)+';\x20pad'+'ding:'+_0x2eb896(0x14d)+_0x2eb896(0x5d9)+_0x2eb896(0x680)+_0x2eb896(0x2a9)+_0x2eb896(0x40e)+_0x2eb896(0x5a3)+_0x2eb896(0x614)+_0x2eb896(0x1c4)+_0x2eb896(0x449)+_0x2eb896(0x3d8)+'1px;\x20'+_0x2eb896(0x526)+_0x2eb896(0xe7)+'a(246'+_0x2eb896(0x643)+'242,.'+'5);\x20p'+_0x2eb896(0x378)+_0x2eb896(0x453)+'x\x200;\x20'+_0x2eb896(0x556)+'\x20.sk-'+_0x2eb896(0x39e)+'err\x20{'+'\x20colo'+_0x2eb896(0x432)+_0x2eb896(0x5e1)+';\x20}\x0a\x20'+_0x2eb896(0x4cb)+_0x2eb896(0x4ef)+'\x20{\x20al'+_0x2eb896(0x62e)+'elf:\x20'+'flex-'+_0x2eb896(0x1af)+';\x20bor'+'der:\x20'+'0;\x20bo'+_0x2eb896(0x1d1)+'radiu'+'s:\x208p'+_0x2eb896(0x4c4)+_0x2eb896(0x5da)+_0x2eb896(0x69d)+'\x2016px'+_0x2eb896(0x404)+_0x2eb896(0x1fe)+_0x2eb896(0x29c)+_0x2eb896(0xf3)+_0x2eb896(0x3b4)+'lor:\x20'+_0x2eb896(0x219)+'\x20font'+_0x2eb896(0x227)+_0x2eb896(0x657)+_0x2eb896(0x222)+_0x2eb896(0x4fe)+_0x2eb896(0x54c)+'t:\x2070'+_0x2eb896(0x4f9)+_0x2eb896(0x4df)+'\x20poin'+_0x2eb896(0x5db)+_0x2eb896(0x556)+_0x2eb896(0x429)+_0x2eb896(0x35f)+_0x2eb896(0x197)+_0x2eb896(0x4fb)+'ter:\x20'+_0x2eb896(0x316)+'tness'+_0x2eb896(0x458)+_0x2eb896(0x143)+'\x20\x20\x20');window[_0x2eb896(0x266)+'entLi'+'stene'+'r'](_0x2eb896(0x3e5)+'wn',_0x5359f8=>{var _0xb5dcb4=_0x2eb896,_0x28891a={'wQftY':function(_0x2949f7,_0x421716){return _0x2949f7(_0x421716);}};if(_0xb5dcb4(0x3a4)==='PBhNY')try{_0x5da36d[_0xb5dcb4(0x4ad)+'ed']=![];}catch(_0x2b0a14){}else{if(_0x5359f8[_0xb5dcb4(0x533)]===_0xb5dcb4(0x51b)+'t'){if(_0x7fa5cf[_0xb5dcb4(0x331)](_0x7fa5cf[_0xb5dcb4(0x5dd)],_0x7fa5cf[_0xb5dcb4(0x1c8)])){var _0x4afcbc=_0x7fa5cf['nYeBJ'](_0x40922a,_0x2e73b9,_0x42b6e7=>{var _0x46f52a=_0xb5dcb4;_0x48cf81['class'+'List'][_0x46f52a(0x4ba)+'e']('on',_0x42b6e7),_0x28891a['wQftY'](_0x483c26,_0x42b6e7);});_0x214dc9[_0xb5dcb4(0x335)+'d'](_0x5ba4a2,_0x4afcbc);}else _0x5359f8['preve'+_0xb5dcb4(0x2cd)+_0xb5dcb4(0x550)](),_0x41be0d();}}},!![]);var _0x25c147=document['creat'+'eElem'+_0x2eb896(0x3ae)](_0x3c9206[_0x2eb896(0x31a)]);_0x25c147[_0x2eb896(0x252)][_0x2eb896(0x2c3)+'xt']=_0x2eb896(0x4a4)+'ion:f'+_0x2eb896(0x2f4)+'top:1'+'2px;r'+_0x2eb896(0x668)+_0x2eb896(0x2a5)+_0x2eb896(0x638)+_0x2eb896(0x525)+'47483'+_0x2eb896(0x26a)+_0x2eb896(0x5d9)+':poin'+'ter;w'+'idth:'+'26px;'+_0x2eb896(0x437)+'t:26p'+_0x2eb896(0x147)+_0x2eb896(0x2e6)+_0x2eb896(0x299)+'ransi'+_0x2eb896(0x2cb)+'opaci'+_0x2eb896(0x161)+'2s;po'+_0x2eb896(0x5c4)+_0x2eb896(0x5fd)+_0x2eb896(0x1ca)+_0x2eb896(0xff)+_0x2eb896(0x204)+_0x2eb896(0x157)+'shado'+_0x2eb896(0x1ed)+'\x204px\x20'+_0x2eb896(0x207)+_0x2eb896(0x3be)+_0x2eb896(0x558)+'7,0.7'+'))',_0x25c147[_0x2eb896(0x62d)+_0x2eb896(0x664)]='<svg\x20'+'viewB'+'ox=\x220'+_0x2eb896(0xfd)+'\x2024\x22>'+'<path'+_0x2eb896(0x461)+_0x2eb896(0x495)+'c-1.5'+_0x2eb896(0x479)+_0x2eb896(0x4d5)+'-4-7.'+_0x2eb896(0x2d6)+_0x2eb896(0x3d1)+_0x2eb896(0x24d)+'\x204-4.'+'5s4\x202'+_0x2eb896(0x168)+_0x2eb896(0x25c)+'-2.5\x20'+_0x2eb896(0x210)+'.5z\x22\x20'+_0x2eb896(0x42b)+_0x2eb896(0x4ca)+_0x2eb896(0x447)+_0x2eb896(0x482)+_0x2eb896(0x2c2)+_0x2eb896(0x262)+_0x2eb896(0x1a1)+'-widt'+_0x2eb896(0x368)+'\x20stro'+_0x2eb896(0x1ae)+_0x2eb896(0x1e9)+_0x2eb896(0x2d8)+'nd\x22\x20s'+_0x2eb896(0x1a1)+_0x2eb896(0x1d8)+_0x2eb896(0x4e8)+_0x2eb896(0x3d2)+_0x2eb896(0x1cb)+_0x2eb896(0x23e)+'e\x20cx='+'\x2212\x22\x20'+_0x2eb896(0x3cd)+_0x2eb896(0x506)+_0x2eb896(0x574)+'\x20fill'+'=\x22#ff'+_0x2eb896(0x3ef)+_0x2eb896(0x201)+'vg>',_0x25c147['title']=_0x3c9206[_0x2eb896(0xf0)],_0x25c147['onmou'+_0x2eb896(0x486)+'er']=()=>_0x25c147[_0x2eb896(0x252)][_0x2eb896(0x5d8)+'ty']='1',_0x25c147['onmou'+_0x2eb896(0x3bf)+'ve']=()=>_0x25c147['style']['opaci'+'ty']=_0x2eb896(0x39d),_0x25c147['oncli'+'ck']=_0x356e04=>{var _0x2afe57=_0x2eb896;_0x356e04[_0x2afe57(0x3fc)+'ropag'+_0x2afe57(0x360)](),_0x3c9206[_0x2afe57(0x2f7)](_0x41be0d);},document['body']['appen'+'dChil'+'d'](_0x25c147),_0x23c6c3(),requestAnimationFrame(_0x1b1e7b),console['log'](_0x3c9206['caHQH'],_0x1ed0a9[_0x2eb896(0x369)]);});})()));
