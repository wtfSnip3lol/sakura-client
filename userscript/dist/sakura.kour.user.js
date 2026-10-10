// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.6.0
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
function _0x3f95(_0x3f9edc,_0x3cc3c3){_0x3f9edc=_0x3f9edc-(0x12*-0x124+-0x8*0x3e6+0xbb*0x49);var _0x371fb5=_0x3870();var _0x59003c=_0x371fb5[_0x3f9edc];if(_0x3f95['ljGLDS']===undefined){var _0x574d68=function(_0x289025){var _0x5487ef='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4c6b73='',_0x169b7d='';for(var _0x42ff4a=0xeef+-0x11*-0x1f3+-0x3012*0x1,_0x2088bb,_0x2a649c,_0x34abdf=-0xbcd+0x5*0x698+0x1*-0x152b;_0x2a649c=_0x289025['charAt'](_0x34abdf++);~_0x2a649c&&(_0x2088bb=_0x42ff4a%(0x7*0x123+0x146b+-0x1c5c)?_0x2088bb*(-0x21f7+0x1c0b+0x5*0x13c)+_0x2a649c:_0x2a649c,_0x42ff4a++%(0x2335+-0x59f*0x2+0x17f3*-0x1))?_0x4c6b73+=String['fromCharCode'](-0x1d30+0x2a*0x17+0x1*0x1a69&_0x2088bb>>(-(-0x1bff+-0x1*-0x1ed1+0x12*-0x28)*_0x42ff4a&-0x891+0x1231*-0x1+0x1ac8)):-0x334+0x1a7b*0x1+-0x1747){_0x2a649c=_0x5487ef['indexOf'](_0x2a649c);}for(var _0x1c8ef8=0x2287+-0x220d+-0x7a,_0x36c386=_0x4c6b73['length'];_0x1c8ef8<_0x36c386;_0x1c8ef8++){_0x169b7d+='%'+('00'+_0x4c6b73['charCodeAt'](_0x1c8ef8)['toString'](-0x1953+-0x25*-0x4d+0xe42))['slice'](-(-0x79*-0x2+0x9d*0x3+-0x2c7));}return decodeURIComponent(_0x169b7d);};_0x3f95['xhJJLr']=_0x574d68,_0x3f95['BQmGhe']={},_0x3f95['ljGLDS']=!![];}var _0x25e155=_0x371fb5[0x136*-0x9+0x21*0x4b+0x13b],_0xaf2952=_0x3f9edc+_0x25e155,_0x231ad0=_0x3f95['BQmGhe'][_0xaf2952];return!_0x231ad0?(_0x59003c=_0x3f95['xhJJLr'](_0x59003c),_0x3f95['BQmGhe'][_0xaf2952]=_0x59003c):_0x59003c=_0x231ad0,_0x59003c;}(function(_0x3e6b55,_0x2678d2){var _0x305eab=_0x3f95,_0x527b33=_0x3e6b55();while(!![]){try{var _0x29710c=parseInt(_0x305eab(0x63b))/(0x100d+-0x137d+-0x1*-0x371)*(-parseInt(_0x305eab(0x2ef))/(0x1360+-0x174e+0x3f0))+parseInt(_0x305eab(0x323))/(-0x1cc1+-0x1cdb+0xb*0x53d)*(parseInt(_0x305eab(0x54f))/(-0x1af*0x17+-0x6*0x595+0xb*0x691))+parseInt(_0x305eab(0x508))/(0xda5+-0x12c6+-0x1*-0x526)*(-parseInt(_0x305eab(0x299))/(0xb0b*-0x3+-0x1387*-0x1+0x10*0xda))+-parseInt(_0x305eab(0x1bc))/(0x1686+0x21b+0x2f*-0x86)+-parseInt(_0x305eab(0x6cf))/(0x1006+0xbd1*-0x1+-0x42d)*(-parseInt(_0x305eab(0x45f))/(0x2196*0x1+-0x1c6a+0x1*-0x523))+-parseInt(_0x305eab(0x326))/(0x211f+-0x1b22+-0x1*0x5f3)*(-parseInt(_0x305eab(0x571))/(-0x1*-0x1bc7+0x1*-0x1397+-0x1*0x825))+-parseInt(_0x305eab(0x52a))/(0xd79*-0x1+-0xbbc*-0x1+-0x1*-0x1c9)*(-parseInt(_0x305eab(0x56c))/(-0x1a57+0x1f8a+-0x526));if(_0x29710c===_0x2678d2)break;else _0x527b33['push'](_0x527b33['shift']());}catch(_0x532eac){_0x527b33['push'](_0x527b33['shift']());}}}(_0x3870,-0x35a9+-0x144b*0x29+-0xd*-0x803b),((()=>{'use strict';var _0x1a654c=_0x3f95,_0x49251a={'pkuHR':function(_0x21c1ab){return _0x21c1ab();},'FNUxv':function(_0x23193e,_0x17b51f){return _0x23193e!==_0x17b51f;},'FLjGn':'KvOUm','UgjxZ':'PlxOP','dxAre':_0x1a654c(0x426)+_0x1a654c(0x4eb)+_0x1a654c(0x4a7),'UxOJc':function(_0x395046,_0x5ce9b4){return _0x395046+_0x5ce9b4;},'XPAwk':function(_0x25bc15,_0xece674){return _0x25bc15(_0xece674);},'tVbgm':function(_0x539578,_0x1125fa){return _0x539578+_0x1125fa;},'JOsLF':_0x1a654c(0x345)+'s','jqcrj':'held','UBITW':'\x20|\x20ER'+_0x1a654c(0x324),'gbdKC':'nJawU','WyYcn':_0x1a654c(0x618)+'n','tdePh':function(_0x5aefd2){return _0x5aefd2();},'EQnoR':'STkKs','QoknR':_0x1a654c(0x540),'NuAVB':_0x1a654c(0x1c1)+'ents','DOUgV':function(_0x4a7cdc,_0x55d0c4){return _0x4a7cdc!==_0x55d0c4;},'jxSiC':_0x1a654c(0x555)+'|11|1'+'0|4|7'+'|15|0'+_0x1a654c(0x6b5)+_0x1a654c(0x3b6)+_0x1a654c(0x666)+'6|1|8','NQwHd':_0x1a654c(0x6d4)+_0x1a654c(0x483)+_0x1a654c(0x58e)+'7,0.3'+'5)','njdIF':_0x1a654c(0x241),'elEQE':function(_0x45a688,_0x293713){return _0x45a688/_0x293713;},'MVhMP':'rgba('+_0x1a654c(0x35c)+_0x1a654c(0x6b9)+'7)','mBLLH':_0x1a654c(0x288)+'r','MXxGR':_0x1a654c(0x21b),'GwcSV':function(_0x16684b,_0x5e9172){return _0x16684b(_0x5e9172);},'ddtJm':function(_0x188c35,_0x4e1d4c){return _0x188c35*_0x4e1d4c;},'GEnTs':function(_0x15e388,_0x309bd1){return _0x15e388*_0x309bd1;},'WFJYB':function(_0x1e823a,_0x549552){return _0x1e823a*_0x549552;},'ArNjY':function(_0x42b4e2,_0x446e9f){return _0x42b4e2===_0x446e9f;},'BMylK':function(_0x1ea04d,_0x31d906){return _0x1ea04d+_0x31d906;},'EhCrp':function(_0x48b1b1,_0x2f3342,_0x529036,_0x358b3b,_0x313514,_0x3ddcc6,_0x5668ba){return _0x48b1b1(_0x2f3342,_0x529036,_0x358b3b,_0x313514,_0x3ddcc6,_0x5668ba);},'qTBPQ':_0x1a654c(0x30e),'acbAa':function(_0x1cbd8d,_0x180650){return _0x1cbd8d+_0x180650;},'LNWaa':function(_0x2b649a,_0x182084){return _0x2b649a+_0x182084;},'kfPmM':function(_0x47018a,_0x333c16){return _0x47018a/_0x333c16;},'oghuX':function(_0x49791c,_0x213df1){return _0x49791c*_0x213df1;},'IQUbZ':function(_0x968702,_0x7e8532){return _0x968702+_0x7e8532;},'AbfGQ':function(_0x312e00,_0x4c79b2,_0x1eb459,_0x100d6f,_0xb0c02f,_0x4a98df,_0x49294a,_0x2f5b2c){return _0x312e00(_0x4c79b2,_0x1eb459,_0x100d6f,_0xb0c02f,_0x4a98df,_0x49294a,_0x2f5b2c);},'oaUJG':'RMB','VvjiA':_0x1a654c(0x317)+'3','BbFpc':function(_0x2a430f,_0xc6643b){return _0x2a430f(_0xc6643b);},'xrhWT':_0x1a654c(0x5c2),'sFFHc':_0x1a654c(0x6a8),'imYUt':function(_0x2580c2,_0x137694,_0x507db5,_0x5d483b,_0x467a00){return _0x2580c2(_0x137694,_0x507db5,_0x5d483b,_0x467a00);},'OwyZS':'[saku'+_0x1a654c(0x4cb)+'ur]\x20h'+'ook\x20r'+_0x1a654c(0x564)+_0x1a654c(0x357),'mWjYg':_0x1a654c(0x33a),'tMVbX':'kQoOt','BwNkl':'BqzTa','SxlvN':function(_0x5d315e,_0x55a044){return _0x5d315e(_0x55a044);},'mkqZv':function(_0x5640dd,_0xba37c3){return _0x5640dd(_0xba37c3);},'pfHkP':function(_0xa7bb3d,_0x5ee740){return _0xa7bb3d(_0x5ee740);},'dZksh':function(_0x35b12b,_0x973b13){return _0x35b12b(_0x973b13);},'beFdg':function(_0x59da4f,_0x5d9fed){return _0x59da4f!==_0x5d9fed;},'iQPJE':_0x1a654c(0x4b9),'TeaTD':function(_0x7fa1ea,_0x4a73e3,_0x31b84f,_0x2201e6,_0x5b2c88){return _0x7fa1ea(_0x4a73e3,_0x31b84f,_0x2201e6,_0x5b2c88);},'GcJNI':function(_0x3a6a0b,_0xbe165,_0x2876ce,_0x26d498,_0x402be7){return _0x3a6a0b(_0xbe165,_0x2876ce,_0x26d498,_0x402be7);},'uCDJJ':function(_0x5ac7da,_0x1c9e8e,_0x342a2d,_0x3e2fe1,_0x4d0534){return _0x5ac7da(_0x1c9e8e,_0x342a2d,_0x3e2fe1,_0x4d0534);},'drahD':function(_0x95f02a,_0x2b8b1a,_0x4c31e9,_0x3a7ddc,_0x15dac9){return _0x95f02a(_0x2b8b1a,_0x4c31e9,_0x3a7ddc,_0x15dac9);},'UgwxW':function(_0x449483,_0x3eab09){return _0x449483<_0x3eab09;},'ucLkP':function(_0x20e8e1,_0x45754e,_0x468ab8){return _0x20e8e1(_0x45754e,_0x468ab8);},'jyEWx':_0x1a654c(0x4a8),'vrUQh':function(_0x29e40c,_0x265854,_0x4e5d73,_0x30e022,_0x195f98){return _0x29e40c(_0x265854,_0x4e5d73,_0x30e022,_0x195f98);},'eliGZ':function(_0x3b645e,_0x120606){return _0x3b645e!==_0x120606;},'juVwn':_0x1a654c(0x296),'SxFgU':function(_0x40de91){return _0x40de91();},'PbucO':function(_0x4072a5,_0x400e24){return _0x4072a5+_0x400e24;},'eJvzA':function(_0x105086,_0x4e5df5){return _0x105086>_0x4e5df5;},'tMTCI':function(_0x4b8436,_0x2b08db){return _0x4b8436+_0x2b08db;},'vFmDy':_0x1a654c(0x317),'LXyan':'IcnEr','OTHfG':'keydo'+'wn','keHRN':function(_0xc697e1,_0x121868){return _0xc697e1>_0x121868;},'vzIiU':function(_0x525d94,_0x2c284d){return _0x525d94===_0x2c284d;},'wedLa':_0x1a654c(0x360)+'activ'+'e','DtSjJ':function(_0x46c649,_0x260621){return _0x46c649===_0x260621;},'tqqiJ':'vSjRW','BgFeC':'CANVA'+'S','RvLoM':function(_0xe00242,_0x59af90){return _0xe00242(_0x59af90);},'MftnW':_0x1a654c(0x2f0)+'9d','RCqqG':function(_0x5a5ba1,_0x446493){return _0x5a5ba1*_0x446493;},'HQdGj':function(_0x1f29e2,_0x1a0c56){return _0x1f29e2-_0x1a0c56;},'wtbEL':function(_0x174115,_0x2f1932){return _0x174115+_0x2f1932;},'IwcYg':function(_0x82a61e,_0x53704f){return _0x82a61e-_0x53704f;},'zbDpq':function(_0x495bca,_0x52ada6){return _0x495bca-_0x52ada6;},'NfQlI':function(_0x409cb7,_0x51407b){return _0x409cb7*_0x51407b;},'HyDnM':_0x1a654c(0x6d4)+_0x1a654c(0x483)+_0x1a654c(0x29c)+_0x1a654c(0x579)+')','PeVOh':function(_0x8d3a41,_0x5298c0){return _0x8d3a41>=_0x5298c0;},'xqVJn':function(_0x18ecc4,_0x1a04e2){return _0x18ecc4*_0x1a04e2;},'Pydvz':function(_0x4c7531){return _0x4c7531();},'qgHcS':'kour-'+_0x1a654c(0x6f8)+'8x90-'+_0x1a654c(0x486)+'t','FkoWn':function(_0x4aeb08,_0x39d03d){return _0x4aeb08===_0x39d03d;},'IbtDf':_0x1a654c(0x549),'Mkcqx':'calls'+_0x1a654c(0x3c9)+'yEngi'+'ne.Ap'+'plica'+_0x1a654c(0x5e6)+'set_t'+'arget'+_0x1a654c(0x33b)+_0x1a654c(0x3da),'pzlkM':function(_0x466520,_0x5c5397){return _0x466520/_0x5c5397;},'fFrwk':'input','hQoHH':'span','CYeTn':_0x1a654c(0x5fa),'OHSPs':_0x1a654c(0x694)+_0x1a654c(0x668)+'ad','YGGxP':_0x1a654c(0x5ca),'ZMcxa':_0x1a654c(0x308)+'ody','ZsBlx':_0x1a654c(0x25f)+'MODE\x20'+_0x1a654c(0x596)+'rlay\x20'+'only,'+_0x1a654c(0x67f)+'ooks\x20'+_0x1a654c(0x3e4)+_0x1a654c(0x4aa)+_0x1a654c(0x2f7)+')','FRXMY':function(_0x3212a3,_0x43ed08){return _0x3212a3+_0x43ed08;},'koaCr':'\x20|\x20mo'+'vemen'+'t\x20','qCiUm':_0x1a654c(0x521)+_0x1a654c(0x4b1)+_0x1a654c(0x328)+_0x1a654c(0x3ce)+'ay\x20on'+_0x1a654c(0x4e0)+_0x1a654c(0x6c5)+_0x1a654c(0x1fc)+'he\x20us'+_0x1a654c(0x4e4)+_0x1a654c(0x259),'mBupb':'240\x20F'+_0x1a654c(0x58b)+'lock','FNsil':'Apply','rvvaf':function(_0x580bb5,_0xede4d5){return _0x580bb5(_0xede4d5);},'nQCSS':'QSseJ','RSGst':'Inser'+'t','mUrCB':_0x1a654c(0x6c9)+_0x1a654c(0x64d)+'-banr'+'s','VUxuU':'Assem'+'bly-C'+_0x1a654c(0x544)+_0x1a654c(0x53e),'ZoqLA':'SetGa'+'meRun'+_0x1a654c(0x51b),'VOdvj':'IsGro'+_0x1a654c(0x6e2),'BkTEX':function(_0xb1c159,_0xf8a75){return _0xb1c159*_0xf8a75;},'SuOyl':function(_0x9ddf35,_0x4c6897){return _0x9ddf35+_0x4c6897;},'lvSMT':_0x1a654c(0x317)+'1','NfXbD':_0x1a654c(0x408),'OEyKL':function(_0x437e34,_0x1ce12f){return _0x437e34+_0x1ce12f;},'rXkqp':'switc'+'h','akkPM':function(_0x2959b5){return _0x2959b5();},'eLdhJ':'vywwz','SpQJI':_0x1a654c(0x69c)+'te','Fqvxg':function(_0x35ef89){return _0x35ef89();},'gYMqJ':function(_0x2845c5){return _0x2845c5();},'IVAXQ':function(_0x2f13c0,_0x4a1b3a,_0x2ea4ab,_0x55e62f,_0x4d31d9,_0x4966ce){return _0x2f13c0(_0x4a1b3a,_0x2ea4ab,_0x55e62f,_0x4d31d9,_0x4966ce);},'oGQRI':_0x1a654c(0x3ee)+_0x1a654c(0x3d9),'ZPQSc':'Damag'+_0x1a654c(0x54c)+'ue','SpIEM':function(_0x10d73e,_0xb5bf03,_0x497a69,_0x1e9b9c){return _0x10d73e(_0xb5bf03,_0x497a69,_0x1e9b9c);},'nUrgU':_0x1a654c(0x66e)+'\x20defa'+_0x1a654c(0x469),'GcmvZ':_0x1a654c(0x30f)+_0x1a654c(0x6d8),'RmFaY':'No\x20en'+_0x1a654c(0x292)+_0x1a654c(0x1e5)+'r:\x20th'+_0x1a654c(0x50b)+_0x1a654c(0x697)+'as\x20no'+_0x1a654c(0x484)+_0x1a654c(0x3cc)+'ePlay'+_0x1a654c(0x19d)+'o\x20pig'+'gybac'+'k\x20on.','EXuSl':_0x1a654c(0x4d0)+'\x20effe'+_0x1a654c(0x20a)+_0x1a654c(0x2de)+'ad\x20wh'+'en\x20to'+_0x1a654c(0x474)+'.','ZFpKk':_0x1a654c(0x2d1)+_0x1a654c(0x22c)+'\x20enti'+_0x1a654c(0x200)+_0x1a654c(0x202)+'WASM\x20'+'hooks'+'.\x20Use'+'\x20this'+'\x20if\x20m'+_0x1a654c(0x472)+'s\x20won'+'\x27t\x20st'+_0x1a654c(0x2cb),'SecIA':_0x1a654c(0x491)+_0x1a654c(0x2bb)+_0x1a654c(0x2de)+'ad.\x20I'+'f\x20mat'+_0x1a654c(0x4c9)+_0x1a654c(0x4dc)+_0x1a654c(0x413)+_0x1a654c(0x1e0)+'de,\x20t'+_0x1a654c(0x1fa)+'eeze\x20'+'is\x20ho'+_0x1a654c(0x6bb)+'lated'+'\x20—\x20te'+'ll\x20me'+_0x1a654c(0x3e0)+'hooks'+_0x1a654c(0x606)+_0x1a654c(0x38e)+'ount.','jPBBc':function(_0x2b14aa,_0x5614c3){return _0x2b14aa+_0x5614c3;},'mkHqD':_0x1a654c(0x442)+'d','JubbJ':_0x1a654c(0x44c),'mRvYU':_0x1a654c(0x568)+_0x1a654c(0x5c0)+'r','sMJwe':'mn-su'+'b','rGloI':function(_0x45b3fa,_0x480dc2){return _0x45b3fa+_0x480dc2;},'yqLdx':_0x1a654c(0x5dc)+'s','IbpDn':'posit'+'ion:f'+_0x1a654c(0x5d6)+'inset'+_0x1a654c(0x2dd)+'dth:1'+'00vw;'+'heigh'+'t:100'+'vh;z-'+_0x1a654c(0x209)+_0x1a654c(0x590)+'48364'+_0x1a654c(0x420)+_0x1a654c(0x689)+_0x1a654c(0x44d)+_0x1a654c(0x43a)+'e','sqSkv':'sakur'+'a-ui','vTEzu':_0x1a654c(0x2a9),'uTODO':_0x1a654c(0x551),'WtVMo':_0x1a654c(0x426)+_0x1a654c(0x4eb)+_0x1a654c(0x2e5)+'v1','buwTv':_0x1a654c(0x446)+'t','CWxpG':_0x1a654c(0x57d),'AoBMl':function(_0x5d6621){return _0x5d6621();},'kUrjO':'QqAPQ','QfbPY':'QPJBf','PaQfN':_0x1a654c(0x586),'TkBZc':_0x1a654c(0x4a6)+'th','FSyBP':_0x1a654c(0x453)+_0x1a654c(0x2b3)+'forms'+_0x1a654c(0x669)+'tide.'+_0x1a654c(0x62b)+'lMoti'+'on','eKrbw':function(_0x2396fe,_0x52b5ec){return _0x2396fe(_0x52b5ec);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x1a654c(0x62e)](location[_0x1a654c(0x36e)+'ame']||''))return;if(window[_0x1a654c(0x373)+_0x1a654c(0x6f1)+_0x1a654c(0x539)])return;window[_0x1a654c(0x373)+_0x1a654c(0x6f1)+_0x1a654c(0x539)]=!![];var _0x11df8c='#ff6b'+'9d',_0x48f427='#ffb3'+'c6',_0x29d035={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x49251a['MftnW'],'adblock':!![],'actkKill':!![],'safeMode':![]},_0x145617={..._0x29d035};try{_0x1a654c(0x5f8)!==_0x49251a[_0x1a654c(0x3a2)]?Object[_0x1a654c(0x255)+'n'](_0x145617,JSON['parse'](localStorage['getIt'+'em'](_0x1a654c(0x426)+_0x1a654c(0x4eb)+'r.v1')||'{}')):new _0xca47be(_0x1d63d8)[_0x1a654c(0x5f5)+'Field'](_0x126873,_0x41be33,_0x22420b);}catch(_0x54a371){}function _0x29e202(){var _0xb858a0=_0x1a654c;try{_0x49251a[_0xb858a0(0x49b)](_0x49251a[_0xb858a0(0x5d1)],_0x49251a['UgjxZ'])?localStorage[_0xb858a0(0x5eb)+'em'](_0x49251a['dxAre'],JSON[_0xb858a0(0x370)+'gify'](_0x145617)):(_0x1dcfb7[_0xb858a0(0x556)+_0xb858a0(0x257)+_0xb858a0(0x1d3)](),_0x49251a['pkuHR'](_0x15d539));}catch(_0x3b46bd){}}var _0x1ea0a1={'uwmk':!!window[_0x1a654c(0x45d)+'WebMo'+_0x1a654c(0x211)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x145617['safeM'+_0x1a654c(0x274)],'lastError':''};try{window[_0x1a654c(0x4f4)+_0x1a654c(0x459)+'stene'+'r'](_0x1a654c(0x258),_0x508a65=>{var _0xfef20e=_0x1a654c;try{var _0x192a32=_0x508a65&&(_0x508a65['messa'+'ge']||_0x508a65[_0xfef20e(0x258)]&&_0x508a65[_0xfef20e(0x258)][_0xfef20e(0x251)+'ge'])||'unkno'+'wn';if(_0x508a65&&_0x508a65['filen'+'ame'])_0x192a32+=_0x49251a['UxOJc'](_0x49251a[_0xfef20e(0x32f)](_0xfef20e(0x41c)+_0x49251a['XPAwk'](String,_0x508a65['filen'+_0xfef20e(0x5e4)])['split']('/')['pop'](),':'),_0x508a65[_0xfef20e(0x493)+'o']||'?');_0x1ea0a1[_0xfef20e(0x52e)+_0xfef20e(0x567)]=String(_0x192a32)['slice'](0x12*-0x1cf+0x1808+-0x1*-0x886,-0x1bd0+0x1bbd*0x1+0xb3);}catch(_0x303e9d){}});}catch(_0x57c05){}var _0x216215=null,_0x2898bd=null,_0x83ba3={},_0x3b830c=[],_0xb444c2=[],_0x1da404=new Map();function _0x18e076(_0xa472b6,_0x1f39be){var _0x59487e=_0x1a654c,_0x38327e={'uZiiJ':_0x59487e(0x25f)+_0x59487e(0x25e)+'-\x20ove'+_0x59487e(0x548)+'only,'+_0x59487e(0x67f)+_0x59487e(0x627)+_0x59487e(0x3e4)+_0x59487e(0x4aa)+_0x59487e(0x2f7)+')','tTnqx':function(_0x37f402,_0x47a4b4){return _0x37f402+_0x47a4b4;},'NYtDh':function(_0x506ca8,_0x51a5bc){var _0x2645c5=_0x59487e;return _0x49251a[_0x2645c5(0x283)](_0x506ca8,_0x51a5bc);},'vJJqa':function(_0x1eb2ce,_0x2ee934){return _0x1eb2ce+_0x2ee934;},'EeOEZ':_0x49251a['JOsLF'],'JYMIk':'loade'+'d','vYIYi':_0x59487e(0x2ba)+_0x59487e(0x702)+'t\x20','nRqEK':_0x49251a[_0x59487e(0x3eb)],'dYxFV':'none','UWwbX':_0x49251a[_0x59487e(0x542)],'FcvbY':_0x59487e(0x521)+_0x59487e(0x4b1)+'NG\x20-\x20'+_0x59487e(0x3ce)+_0x59487e(0x5b4)+'ly\x20(r'+_0x59487e(0x6c5)+_0x59487e(0x1fc)+'he\x20us'+'erscr'+_0x59487e(0x259)};if(_0x49251a[_0x59487e(0x4c6)]!==_0x49251a[_0x59487e(0x4c6)])_0x3a7650['textC'+_0x59487e(0x30b)+'t']=_0x128532['safeM'+_0x59487e(0x274)]?_0x38327e[_0x59487e(0x6aa)]:_0x3f474d['uwmk']?_0x38327e['tTnqx'](_0x38327e['NYtDh'](_0x38327e[_0x59487e(0x692)]('UWMK\x20'+_0x59487e(0x41b)+'\x20'+_0x45754a[_0x59487e(0x515)+'Ok']+'/'+_0xe4bd4f['hooks'+_0x59487e(0x409)],_0x38327e['EeOEZ']),_0x59487e(0x45c)+_0x59487e(0x1a7))+(_0xe9deb6[_0x59487e(0x2af)+_0x59487e(0x662)]?_0x38327e[_0x59487e(0x298)]:_0x59487e(0x32d)+'ng')+('\x20|\x20sh'+_0x59487e(0x543)+'\x20')+(_0x393543[_0x59487e(0x2b7)+'ers']?_0x59487e(0x541):_0x59487e(0x549))+_0x38327e[_0x59487e(0x270)]+(_0x3bd98d[_0x59487e(0x1c1)+_0x59487e(0x37e)]?_0x38327e['nRqEK']:_0x38327e[_0x59487e(0x53b)]),_0x280a20['lastE'+_0x59487e(0x567)]?_0x38327e['UWwbX']+_0x565a21['lastE'+'rror']:''):_0x38327e[_0x59487e(0x5fc)];else{if(!_0x1f39be||_0xa472b6['inclu'+_0x59487e(0x561)](_0x1f39be)||_0xa472b6[_0x59487e(0x388)+'h']>-0xeb5+-0xbcc+0x3*0x8eb)return;_0xa472b6['push'](_0x1f39be);}}function _0x146208(_0x1dfdd2,_0x4ab7c8,_0x118040,_0x2e6e0d){var _0x19109d=_0x1a654c,_0x896bf2={'UzboJ':function(_0x4438d8){var _0x15d1ff=_0x3f95;return _0x49251a[_0x15d1ff(0x329)](_0x4438d8);}};if(_0x49251a[_0x19109d(0x2fd)]!==_0x49251a['QoknR']){var _0x355cfa=('2|0|1'+'|3|4|'+'5')[_0x19109d(0x61d)]('|'),_0x4af35e=0x2541+-0xe96*0x2+-0x815;while(!![]){switch(_0x355cfa[_0x4af35e++]){case'0':try{_0x438732=_0x4ab7c8&&_0x4ab7c8[_0x19109d(0x4c3)]?_0x4ab7c8['val']():0xa*-0x217+0x6d*-0xf+0x1b49*0x1;}catch(_0x4997d7){}continue;case'1':if(!_0x438732)return;continue;case'2':var _0x438732=-0x12ba+0xc*0x24b+0xa*-0xe1;continue;case'3':_0x18e076(_0x1dfdd2,_0x438732);continue;case'4':_0x118040[_0x2e6e0d]=_0x1dfdd2['lengt'+'h'];continue;case'5':if(_0x2e6e0d===_0x49251a[_0x19109d(0x37f)]&&_0x1dfdd2[_0x19109d(0x388)+'h']){var _0x45d424=_0x83ba3['capMo'+'ve'];if(_0x45d424)try{_0x45d424[_0x19109d(0x61b)+'ed']=![];}catch(_0x4ef8dd){}}continue;}break;}}else{var _0x2dfb4e=('4|5|2'+_0x19109d(0x3c4)+'0')[_0x19109d(0x61d)]('|'),_0x1baaae=0x11c*-0x9+-0x14f5+-0x59*-0x59;while(!![]){switch(_0x2dfb4e[_0x1baaae++]){case'0':return _0x4bb95e;case'1':_0x4bb95e[_0x19109d(0x1c4)+'ck']=_0x198ed1=>{var _0x255bb7=_0x19109d;_0x198ed1[_0x255bb7(0x556)+'ropag'+_0x255bb7(0x1d3)](),_0x896bf2[_0x255bb7(0x3e2)](_0x4b42de);};continue;case'2':_0x4bb95e[_0x19109d(0x6dd)+_0x19109d(0x3e9)]=_0x19109d(0x67b)+'n';continue;case'3':_0x4bb95e['textC'+'onten'+'t']=_0x2a1d3d;continue;case'4':var _0x4bb95e=_0x19782c[_0x19109d(0x44f)+'eElem'+_0x19109d(0x6e9)](_0x19109d(0x618)+'n');continue;case'5':_0x4bb95e[_0x19109d(0x2a8)]=_0x49251a[_0x19109d(0x236)];continue;}break;}}}function _0x40f936(_0x5434ee,_0x272420,_0xed684a){var _0x3cc6e4=_0x1a654c,_0x424218=_0x1da404[_0x3cc6e4(0x36d)](_0x5434ee);!_0x424218&&(_0x424218=new Map(),_0x1da404[_0x3cc6e4(0x1f8)](_0x5434ee,_0x424218));if(!_0x424218[_0x3cc6e4(0x5b3)](_0x272420))try{var _0x1307de=new _0x216215(_0x5434ee)['readF'+'ield'](_0x272420,_0xed684a);_0x424218['set'](_0x272420,_0x1307de!==undefined?_0x1307de['val']():null);}catch(_0x52eff8){if(_0x49251a[_0x3cc6e4(0x5b1)](_0x3cc6e4(0x518),_0x3cc6e4(0x487)))_0x424218[_0x3cc6e4(0x1f8)](_0x272420,null);else try{_0x1e4265['enabl'+'ed']=![];}catch(_0x21dd0a){}}return _0x424218[_0x3cc6e4(0x36d)](_0x272420);}function _0x6beecb(_0x5b7484,_0x48ee2d,_0xe575c9,_0xb50903){var _0x5bb477=_0x1a654c;try{new _0x216215(_0x5b7484)[_0x5bb477(0x5f5)+_0x5bb477(0x5e2)](_0x48ee2d,_0xe575c9,_0xb50903);}catch(_0x29f065){}}function _0x3df8aa(_0x37cf02,_0x24ca18){var _0x4bdf27=_0x1a654c;try{var _0x811fdb=new _0x216215(_0x37cf02)['readF'+_0x4bdf27(0x249)](_0x24ca18,_0x4bdf27(0x33a));return _0x811fdb?_0x811fdb['val']():0x238f+-0x7c8+-0x1bc7;}catch(_0x1dabb6){if(_0x49251a[_0x4bdf27(0x1cc)]!==_0x4bdf27(0x46d))return 0x270e+0xe83+0x1*-0x3591;else{var _0x28f223={'iiZwK':_0x49251a['jxSiC'],'ubgPU':_0x49251a['NQwHd'],'DJerO':_0x49251a['njdIF'],'tqaoG':_0x4bdf27(0x6d4)+_0x4bdf27(0x6e0)+_0x4bdf27(0x63f)+'0,0.5'+'5)','jgiaI':function(_0x1d22de,_0x142289){var _0xa82ab1=_0x4bdf27;return _0x49251a[_0xa82ab1(0x215)](_0x1d22de,_0x142289);},'FQOpS':function(_0x34e035,_0x279ee2){return _0x34e035+_0x279ee2;},'sUVPK':function(_0x56fb0a,_0x2a34bf){return _0x56fb0a*_0x2a34bf;},'EhPpo':_0x49251a[_0x4bdf27(0x3a0)],'VUJUN':function(_0x5bad4a,_0x3d6e62){return _0x5bad4a*_0x3d6e62;},'DwDPj':_0x49251a[_0x4bdf27(0x6c8)],'yRCoX':_0x49251a['MXxGR'],'OzeqZ':_0x4bdf27(0x587)+_0x4bdf27(0x5ae)+'-seri'+_0x4bdf27(0x642)+_0x4bdf27(0x356)+_0x4bdf27(0x21f)+_0x4bdf27(0x53d)+'if'},_0x30e0c3=_0x49251a['GwcSV'](_0x2b18fb,_0x391e9d[_0x4bdf27(0x51a)+'le'])||-0x2294+-0x1be2+0x3e77,_0x129108=_0x49251a[_0x4bdf27(0x275)](-0x1d27+-0x231*-0x1+0x6c6*0x4,_0x30e0c3),_0x59ec27=_0x49251a[_0x4bdf27(0x4ae)](0x1*-0x26da+-0xd02+0x20*0x19f,_0x30e0c3),_0x1682e8=_0x49251a['tVbgm'](_0x129108*(0x250d+-0x150c+-0xffe),_0x49251a[_0x4bdf27(0x3c6)](_0x59ec27,-0x8ef*-0x1+0x65*0x1f+-0x1528*0x1)),_0x4f346d=_0x129108*(0x13ce+-0x1*-0x116e+0x1*-0x2539)+_0x59ec27*(0x151*-0x6+-0x12d+0x1d1*0x5),_0x578d81=_0x484f33[_0x4bdf27(0x234)],_0x25cc85=_0x49251a['ArNjY'](_0x578d81,'br')?_0xe64ee2['right']-(0x342+0x45a*0x1+-0x2*0x3c6)-_0x1682e8:_0x49251a['BMylK'](_0x5702dc[_0x4bdf27(0x5ac)],-0x22e1*-0x1+0x15a8+-0x3879),_0x3de0b6=_0x578d81==='ml'?_0x526555[_0x4bdf27(0x557)]+_0x4431bb['heigh'+'t']/(0x7a9+0xa21*0x2+-0x1be9)-_0x4f346d/(0x30*0x10+0x26*0x4f+-0xeb8):_0x785448[_0x4bdf27(0x47e)+'m']-_0x4f346d-(_0x578d81==='bl'?-0x1*0x821+0x1e5*0x1+0x8d*0xc:0x19c8+0x2333*-0x1+0xa01),_0x24be59=(_0xd405a6,_0x1e0188,_0x589d7f,_0xc36f94,_0x22b135,_0x34df57,_0x146eb0)=>{var _0x218f75=_0x4bdf27,_0x1b35e2=_0x28f223[_0x218f75(0x3b5)]['split']('|'),_0x59c91b=0xba+0x7*0x52f+0x5*-0x767;while(!![]){switch(_0x1b35e2[_0x59c91b++]){case'0':_0x699e4['strok'+_0x218f75(0x6f2)+'e']=_0x542251?_0x2543f8:_0x28f223[_0x218f75(0x631)];continue;case'1':_0x146eb0&&(_0x5a9d40['font']=_0x28f223[_0x218f75(0x501)]+_0x3a7a7e[_0x218f75(0x365)]((0x4*0x2e6+0x1*-0x25f9+0x1a6a)*_0x30e0c3)+(_0x218f75(0x587)+'-sans'+_0x218f75(0x480)+'f,sys'+_0x218f75(0x356)+_0x218f75(0x21f)+_0x218f75(0x53d)+'if'),_0x2b2ec5[_0x218f75(0x431)+_0x218f75(0x3dd)]=_0x542251?_0x218f75(0x21b):_0x28f223[_0x218f75(0x412)],_0x321dda[_0x218f75(0x451)+_0x218f75(0x3c8)](_0x146eb0,_0x589d7f+_0x28f223['jgiaI'](_0x22b135,0x22*0x31+0x1b67+0x21e7*-0x1),_0x28f223[_0x218f75(0x3ef)](_0xc36f94+_0x34df57/(0x16e5+-0xef*-0x19+-0x2e3a),_0x28f223['sUVPK'](0x126b+-0x7*0x174+-0x837,_0x30e0c3))));continue;case'2':_0x2cf2cb[_0x218f75(0x699)+'aseli'+'ne']=_0x218f75(0x3f6)+'e';continue;case'3':_0x1c62cb['strok'+'e']();continue;case'4':_0x2cf688[_0x218f75(0x431)+_0x218f75(0x3dd)]=_0x542251?'rgba('+_0x218f75(0x483)+'07,15'+'7,0.8'+'5)':_0x28f223['EhPpo'];continue;case'5':_0x542251&&(_0x704276['shado'+'wColo'+'r']=_0x5d4a64,_0x3eab33['shado'+'wBlur']=-0x1583*-0x1+-0x23d8+0xe63,_0x39c253[_0x218f75(0x535)](),_0x4296a6['shado'+_0x218f75(0x406)]=-0x1f9d+0x9cc*0x1+0x15d1);continue;case'6':_0x2da878['fillT'+_0x218f75(0x3c8)](_0xd405a6,_0x589d7f+_0x22b135/(-0x38d+0x1683+0x1*-0x12f4),_0x28f223[_0x218f75(0x3ef)](_0xc36f94,_0x34df57/(0x7*-0x311+0x1801+-0x9*0x48))-(_0x146eb0?_0x28f223['VUJUN'](-0xa*0xb2+0x1bc6+-0x14cd,_0x30e0c3):-0x1*0x1d02+-0x19c6+-0x2*-0x1b64));continue;case'7':_0x180721[_0x218f75(0x535)]();continue;case'8':_0x2e25b1[_0x218f75(0x294)+'re']();continue;case'9':_0x4f2cc6['textA'+_0x218f75(0x684)]=_0x28f223[_0x218f75(0x43d)];continue;case'10':if(_0x3c19dd[_0x218f75(0x365)+_0x218f75(0x3d2)])_0x507734[_0x218f75(0x365)+_0x218f75(0x3d2)](_0x589d7f,_0xc36f94,_0x22b135,_0x34df57,(-0x1dac+0x1149+0xc6a)*_0x30e0c3);else _0x1b70b1[_0x218f75(0x3e5)](_0x589d7f,_0xc36f94,_0x22b135,_0x34df57);continue;case'11':_0x3ea781['begin'+_0x218f75(0x321)]();continue;case'12':_0x281655[_0x218f75(0x431)+'tyle']=_0x542251?_0x28f223[_0x218f75(0x4c5)]:_0x218f75(0x6d4)+_0x218f75(0x6e0)+'35,24'+'0,0.8'+')';continue;case'13':_0x4da351['font']=_0x218f75(0x39d)+_0x2df3b9[_0x218f75(0x365)](_0x28f223[_0x218f75(0x597)](-0x5f3*0x3+0x1*0x1996+-0xb*0xb3,_0x30e0c3))+_0x28f223['OzeqZ'];continue;case'14':var _0x542251=_0x2744f6['has'](_0x1e0188);continue;case'15':_0x3fb433[_0x218f75(0x362)+_0x218f75(0x635)]=0x43d+-0x1eb3+0x1a77;continue;case'16':_0x4ee3f3[_0x218f75(0x378)]();continue;}break;}};_0x49251a[_0x4bdf27(0x46e)](_0x24be59,'W','KeyW',_0x25cc85+_0x129108+_0x59ec27,_0x3de0b6,_0x129108,_0x129108),_0x24be59('A',_0x49251a['qTBPQ'],_0x25cc85,_0x49251a[_0x4bdf27(0x1a0)](_0x49251a[_0x4bdf27(0x3f8)](_0x3de0b6,_0x129108),_0x59ec27),_0x129108,_0x129108),_0x49251a[_0x4bdf27(0x46e)](_0x24be59,'S','KeyS',_0x25cc85+_0x129108+_0x59ec27,_0x3de0b6+_0x129108+_0x59ec27,_0x129108,_0x129108),_0x49251a['EhCrp'](_0x24be59,'D','KeyD',_0x25cc85+_0x49251a[_0x4bdf27(0x283)](_0x129108,_0x59ec27)*(-0x9fa+0x4f*-0x3d+0x1ccf),_0x49251a[_0x4bdf27(0x3f8)](_0x3de0b6+_0x129108,_0x59ec27),_0x129108,_0x129108);var _0x4dcaff=_0x49251a[_0x4bdf27(0x4d3)](_0x1682e8-_0x59ec27,-0x62d*-0x1+0x3*0x6ff+-0x1b28),_0x4dfc1c=_0x49251a[_0x4bdf27(0x32f)](_0x3de0b6,_0x49251a['oghuX'](_0x49251a[_0x4bdf27(0x3a4)](_0x129108,_0x59ec27),-0x1be9+-0xb7c+0x7*0x5a1));_0x24be59('LMB','mouse'+'1',_0x25cc85,_0x4dfc1c,_0x4dcaff,_0x129108,_0x235693['ksCps']?_0xa4e59c(-0x24aa+-0x22c2+0x476d)+_0x4bdf27(0x408):''),_0x49251a[_0x4bdf27(0x2c3)](_0x24be59,_0x49251a[_0x4bdf27(0x260)],_0x49251a[_0x4bdf27(0x519)],_0x25cc85+_0x4dcaff+_0x59ec27,_0x4dfc1c,_0x4dcaff,_0x129108,_0x37c935['ksCps']?_0x49251a['UxOJc'](_0x49251a[_0x4bdf27(0x57a)](_0x4d8394,0x1*-0x17d3+-0x17*-0x42+-0x8f4*-0x2),_0x4bdf27(0x408)):''),_0x24be59('',_0x49251a['xrhWT'],_0x25cc85,_0x49251a[_0x4bdf27(0x3a4)](_0x4dfc1c+_0x129108,_0x59ec27),_0x1682e8,_0x129108*(0x1eb3+-0x1c43+-0x270+0.45));}}}function _0x248f1e(_0x2c5813,_0x1e8a74,_0x2bcb5d,_0xeeda41){var _0x2b04f1=_0x1a654c,_0xca79f7=_0x40f936(_0x2c5813,_0x1e8a74,_0x2bcb5d);if(_0xca79f7!=null)_0x49251a[_0x2b04f1(0x2c5)](_0x6beecb,_0x2c5813,_0x1e8a74,_0x2bcb5d,_0xca79f7*_0xeeda41);}function _0x441627(_0x47a3ed,_0x466927,_0x30d2b3,_0x52916e,_0x3ccfb4,_0x19382c,_0x53a515){var _0x2ddbd6=_0x1a654c;try{var _0x295344=_0x2898bd['hookP'+_0x2ddbd6(0x2ed)]({'typeName':_0x466927,'methodName':_0x30d2b3,'params':_0x52916e,'returnType':_0x3ccfb4},_0x19382c);return _0x295344[_0x2ddbd6(0x61b)+'ed']=_0x53a515!==![],_0x83ba3[_0x47a3ed]=_0x295344,_0x1ea0a1[_0x2ddbd6(0x515)+_0x2ddbd6(0x409)]++,_0x295344;}catch(_0x2ad457){return console[_0x2ddbd6(0x3c5)](_0x49251a['OwyZS'],_0x47a3ed,_0x2ad457&&_0x2ad457['messa'+'ge']),null;}}function _0x423d35(_0x1d360c,_0x449d39,_0x37d5e4,_0x12cd25,_0x218adf,_0x2c0f82,_0x75ed87){var _0x316b7f=_0x1a654c;try{var _0x3202ed=_0x2898bd[_0x316b7f(0x28e)+'ostfi'+'x']({'typeName':_0x449d39,'methodName':_0x37d5e4,'params':_0x12cd25,'returnType':_0x218adf},_0x2c0f82);return _0x3202ed['enabl'+'ed']=_0x75ed87!==![],_0x83ba3[_0x1d360c]=_0x3202ed,_0x1ea0a1[_0x316b7f(0x515)+_0x316b7f(0x409)]++,_0x3202ed;}catch(_0x5a527a){return console[_0x316b7f(0x3c5)]('[saku'+'ra-ko'+'ur]\x20h'+_0x316b7f(0x700)+_0x316b7f(0x564)+_0x316b7f(0x357),_0x1d360c,_0x5a527a&&_0x5a527a['messa'+'ge']),null;}}var _0x1ddc87=()=>![];try{if(window[_0x1a654c(0x45d)+_0x1a654c(0x311)+_0x1a654c(0x211)]&&!_0x145617[_0x1a654c(0x448)+_0x1a654c(0x274)]){if(_0x49251a['QfbPY']===_0x1a654c(0x6f7)){var _0x41a0d8=(_0x1a654c(0x56d)+'|5|4|'+'2')['split']('|'),_0x312d4f=-0x2f5*0x3+0xa09*-0x1+0x12e8;while(!![]){switch(_0x41a0d8[_0x312d4f++]){case'0':_0x216215=window['Unity'+_0x1a654c(0x311)+_0x1a654c(0x211)][_0x1a654c(0x49e)+'Wrapp'+'er'];continue;case'1':_0x2898bd=window['Unity'+'WebMo'+_0x1a654c(0x211)]['Runti'+'me'][_0x1a654c(0x44f)+'ePlug'+'in']({'name':_0x1a654c(0x568)+_0x1a654c(0x1bf),'version':_0x49251a['PaQfN'],'referencedAssemblies':['Assem'+_0x1a654c(0x4e9)+'Sharp'+_0x1a654c(0x53e)]});continue;case'2':_0x423d35(_0x1a654c(0x203)+'ve',_0x1a654c(0x453)+_0x1a654c(0x2b3)+_0x1a654c(0x3ba)+'.Over'+_0x1a654c(0x593)+_0x1a654c(0x347)+_0x1a654c(0x6e9),'IsGro'+_0x1a654c(0x6e2),[_0x1a654c(0x4a8)],_0x49251a[_0x1a654c(0x604)],(_0x271d0c,_0x31d930)=>{var _0x45bf7c=_0x1a654c;_0x146208(_0x3b830c,_0x31d930,_0x1ea0a1,'movem'+_0x45bf7c(0x37e));},!![]);continue;case'3':_0x49251a['AbfGQ'](_0x441627,_0x1a654c(0x291),_0x49251a['TkBZc'],'Initi'+_0x1a654c(0x6ee)+_0x1a654c(0x40f)+'lth',[_0x1a654c(0x4a8),_0x1a654c(0x4a8)],undefined,_0x1ddc87,!!_0x145617['god']);continue;case'4':_0x423d35(_0x1a654c(0x3a6)+_0x1a654c(0x543),'OShoo'+_0x1a654c(0x611),_0x1a654c(0x6ca)+_0x1a654c(0x640)+'ning',[_0x49251a['jyEWx'],_0x1a654c(0x4a8)],undefined,(_0x4e7c55,_0x4328ea)=>{var _0x3a4def=_0x1a654c;_0x146208(_0xb444c2,_0x4328ea,_0x1ea0a1,_0x3a4def(0x2b7)+'ers');},!![]);continue;case'5':_0x441627(_0x1a654c(0x628)+_0x1a654c(0x5d4),_0x49251a[_0x1a654c(0x6cd)],'Tick',['i32'],undefined,_0x1ddc87,!!_0x145617['noRec'+'oil']);continue;}break;}}else _0xc9c3a2[_0x1a654c(0x61b)+'ed']=![];}}catch(_0x4b435c){console[_0x1a654c(0x3c5)](_0x1a654c(0x5af)+_0x1a654c(0x4cb)+'ur]\x20U'+_0x1a654c(0x450)+_0x1a654c(0x57c)+_0x1a654c(0x4f6)+':',_0x4b435c&&_0x4b435c['messa'+'ge']);}function _0x284ad4(_0x15a64e,_0x249181){var _0x4c0f08=_0x1a654c;if(_0x49251a[_0x4c0f08(0x574)]===_0x49251a[_0x4c0f08(0x1d2)])try{var _0x397a1a=new _0x24dac7(_0x55bea3)['readF'+_0x4c0f08(0x249)](_0x3fbb89,_0x49251a['mWjYg']);return _0x397a1a?_0x397a1a['val']():-0xade+0x1409*0x1+0x1*-0x92b;}catch(_0xdfcccd){return-0x25a7*0x1+0xe6b*0x2+0x8d1;}else{var _0x4acbaf=_0x83ba3[_0x15a64e];if(_0x4acbaf)try{_0x4acbaf[_0x4c0f08(0x61b)+'ed']=!!_0x249181;}catch(_0x514a72){}}}_0x49251a[_0x1a654c(0x1a8)](setInterval,()=>{var _0x56c0a3=_0x1a654c;if(!_0x216215||!window['unity'+'Insta'+_0x56c0a3(0x4c1)])return;var _0x599b13=(_0x49251a[_0x56c0a3(0x3b7)](Number,_0x145617['speed'+_0x56c0a3(0x5c5)])||-0x5*-0xa3+-0xe20*-0x2+-0x1f0b)/(-0x1e*-0xd4+-0x2d*-0x5+-0x1955),_0x1a6f47=(_0x49251a[_0x56c0a3(0x616)](Number,_0x145617[_0x56c0a3(0x422)+'ct'])||0x101f+0x1b7d+-0x2b38)/(0x21d*0xb+-0x1*0x23b+-0x14a0),_0x555400=(_0x49251a[_0x56c0a3(0x59d)](Number,_0x145617[_0x56c0a3(0x6a9)+_0x56c0a3(0x505)])||0x17c4+-0x1*-0x211+0x1*-0x1971)/(0x1*0x2141+-0xc2*0x1e+-0xa21),_0x24431d=Math['max'](0x1b6*-0x13+-0x4fd+-0x10*-0x258,_0x49251a[_0x56c0a3(0x316)](Number,_0x145617['damag'+_0x56c0a3(0x4d5)+'e'])||-0x2*0x343+-0x16c9+0x1*0x1de5),_0x343e8a=_0x599b13!==0x1e73*0x1+0x222c+-0x409e||_0x49251a['beFdg'](_0x1a6f47,0x443*-0x5+-0x73*-0xa+0x869*0x2)||_0x555400!==0x2369+0x1cb5+-0x401d||_0x145617['bhop'],_0xa7c420=_0x145617['noSpr'+_0x56c0a3(0x3d0)]||_0x145617[_0x56c0a3(0x32e)+_0x56c0a3(0x1dd)]||_0x145617['infAm'+'moExp']||_0x145617['rapid'+_0x56c0a3(0x4de)];if(!_0x343e8a&&!_0xa7c420)return;try{for(var _0x5103b6=-0x981+0x425+0x55c;_0x5103b6<_0x3b830c[_0x56c0a3(0x388)+'h'];_0x5103b6++){var _0xe1915=_0x3b830c[_0x5103b6];if(!_0xe1915)continue;_0x599b13!==-0x16*0x189+0x1c79+0x54e&&(_0x56c0a3(0x273)!=='GpKSL'?(_0xa7cc51[_0x56c0a3(0x287)+'ill']=_0x119e90,_0x378a81()):(_0x248f1e(_0xe1915,-0xda*0x25+0x1de7*0x1+0x1c3*0x1,_0x56c0a3(0x4b9),_0x599b13),_0x49251a[_0x56c0a3(0x2c5)](_0x248f1e,_0xe1915,-0x1fca+-0x1b8b+0x3b81*0x1,_0x49251a[_0x56c0a3(0x6e8)],_0x599b13),_0x49251a['TeaTD'](_0x248f1e,_0xe1915,-0x2*-0x598+0x941+-0x1441,_0x56c0a3(0x4b9),_0x599b13),_0x248f1e(_0xe1915,-0x1cfa+0x886+0x14a8,_0x49251a[_0x56c0a3(0x6e8)],_0x599b13),_0x49251a[_0x56c0a3(0x2c5)](_0x248f1e,_0xe1915,-0x4*-0x686+0x1*0x3f9+0x1df5*-0x1,'f32',_0x599b13),_0x49251a[_0x56c0a3(0x475)](_0x248f1e,_0xe1915,-0x1216+-0x1df8+0x302e,_0x56c0a3(0x4b9),_0x599b13)));if(_0x1a6f47!==0x1464+-0x71*0x33+-0x44*-0x8)_0x49251a[_0x56c0a3(0x244)](_0x248f1e,_0xe1915,0x1*-0x6b1+0x1721+0x158*-0xc,_0x49251a[_0x56c0a3(0x6e8)],_0x1a6f47);_0x555400!==-0x1c3*0x8+-0x1fee+0x2e07&&(_0x49251a[_0x56c0a3(0x2c5)](_0x248f1e,_0xe1915,0x125+-0xe13+0x69b*0x2,_0x56c0a3(0x4b9),_0x555400),_0x49251a['TeaTD'](_0x248f1e,_0xe1915,0xb*-0x7a+-0x10*-0x201+0xd43*-0x2,_0x49251a['iQPJE'],_0x555400));if(_0x145617[_0x56c0a3(0x52d)])_0x49251a[_0x56c0a3(0x4fc)](_0x6beecb,_0xe1915,-0x83*-0x37+-0x9*0x309+-0x38,_0x49251a[_0x56c0a3(0x6e8)],-(-0x229*-0x7+-0xf32*-0x1+-0xe*0x1e3));}}catch(_0x459c25){}try{for(var _0x3bf7cc=-0x4*-0x8bb+-0x1822+0xaca*-0x1;_0x49251a['UgwxW'](_0x3bf7cc,_0xb444c2['lengt'+'h']);_0x3bf7cc++){var _0x34b38e=_0x49251a[_0x56c0a3(0x1a8)](_0x3df8aa,_0xb444c2[_0x3bf7cc],-0x20*-0x12a+0xfc1+-0x34c9);if(!_0x34b38e)continue;_0x145617['damag'+_0x56c0a3(0x1dd)]&&(_0x6beecb(_0x34b38e,0x1fca+0xdec+-0x2d6a,_0x49251a['jyEWx'],_0x24431d),_0x6beecb(_0x34b38e,0x7*0x155+-0x1b1*0x3+-0x3ec,_0x56c0a3(0x4a8),_0x24431d));_0x145617[_0x56c0a3(0x343)+_0x56c0a3(0x3d0)]&&(_0x49251a['vrUQh'](_0x6beecb,_0x34b38e,-0x9*0x3f6+0x2353+0xdb,_0x56c0a3(0x4b9),-0x5e*-0x2e+-0x13a*0x1d+-0x63a*-0x3),_0x6beecb(_0x34b38e,0x380+-0xd43+-0x1*-0xa2b,'f32',-0x37+-0x22*-0x2+-0xc));if(_0x145617['infAm'+_0x56c0a3(0x1cf)])_0x49251a['GcJNI'](_0x6beecb,_0x34b38e,-0x2205+-0xbd7*0x1+0x2e38,_0x56c0a3(0x4a8),0x131b*-0x1+0x1c30+-0x52e);_0x145617[_0x56c0a3(0x3e7)+_0x56c0a3(0x4de)]&&(_0x49251a[_0x56c0a3(0x250)]('kWRHi',_0x56c0a3(0x5c9))?(_0x4b8c0f(_0xef9106,0x1b8c+-0x65*0x1c+-0x2*0x7fc,_0x56c0a3(0x4b9),0x1c15+0x1663+-0x3278),_0x558589(_0x457857,0xb*-0xff+0xd53+-0x1f6,'f32',-0x783+-0x1*-0xa57+-0x2d3*0x1)):(_0x248f1e(_0x34b38e,-0x11*-0x164+0x1b7*-0x7+-0xb17,_0x49251a['iQPJE'],-0x10d1+0x584+-0x1*-0xb4d+0.1),_0x6beecb(_0x34b38e,-0x15d5+0x31a*0x2+0x1001,_0x49251a['iQPJE'],0x232*-0x2+0x6f*-0x16+0xdee+0.1)));}}catch(_0x11681f){}},-0x1*-0x2c3+-0x1*0x7+-0x1f4),setInterval(()=>{var _0x4a4726=_0x1a654c,_0x2f1e3a={'XVEFd':function(_0x533865,_0xd5dc5){return _0x533865+_0xd5dc5;}};_0x1ea0a1[_0x4a4726(0x2af)+_0x4a4726(0x662)]=!!window[_0x4a4726(0x670)+_0x4a4726(0x2f9)+_0x4a4726(0x4c1)];try{if(_0x49251a['juVwn']!==_0x4a4726(0x497)){var _0x8e06e2=0x1*-0xfbb+-0x4ae*-0x8+-0x15b5;for(var _0x431d8b in _0x83ba3){if(_0x83ba3[_0x431d8b]&&_0x83ba3[_0x431d8b][_0x4a4726(0x68c)+'ed'])_0x8e06e2++;}_0x1ea0a1['hooks'+'Ok']=_0x8e06e2;}else _0xe20d06[_0x4a4726(0x4f4)+_0x4a4726(0x459)+_0x4a4726(0x4fe)+'r'](_0x4a4726(0x258),_0x423c29=>{var _0x5548c0=_0x4a4726;try{var _0x1aba55=_0x423c29&&(_0x423c29[_0x5548c0(0x251)+'ge']||_0x423c29['error']&&_0x423c29[_0x5548c0(0x258)]['messa'+'ge'])||_0x5548c0(0x57f)+'wn';if(_0x423c29&&_0x423c29[_0x5548c0(0x4d1)+'ame'])_0x1aba55+=_0x2f1e3a[_0x5548c0(0x671)](_0x5548c0(0x41c),_0x49e1e7(_0x423c29['filen'+'ame'])[_0x5548c0(0x61d)]('/')[_0x5548c0(0x667)]())+':'+(_0x423c29[_0x5548c0(0x493)+'o']||'?');_0x54854e['lastE'+_0x5548c0(0x567)]=_0x3f646b(_0x1aba55)[_0x5548c0(0x32c)](0x1*-0x174d+-0x22d*0x6+0x1*0x245b,0x9e9*-0x3+0x6*-0x5de+0x418f);}catch(_0x2b6891){}});}catch(_0x3636d){}},-0xad*0x17+0xfa1*-0x1+-0x14*-0x1c1);var _0x510255=new Set(),_0x47acd0={0x1:[],0x3:[]},_0x5d04b9=![];function _0x4436e7(_0x9e76f7){var _0x218ed1=_0x1a654c;_0x510255['add'](_0x9e76f7[_0x218ed1(0x5d2)]);}function _0x4076b7(_0x297225){var _0x331da9=_0x1a654c;_0x510255[_0x331da9(0x6a0)+'e'](_0x297225[_0x331da9(0x5d2)]);}function _0x18d40d(_0x4ad07f){var _0x2000d8=_0x1a654c,_0x2756e6={'PoLFL':function(_0xcf2394){return _0x49251a['SxFgU'](_0xcf2394);}};if(_0x4ad07f[_0x2000d8(0x585)+_0x2000d8(0x4c0)])return;_0x510255[_0x2000d8(0x538)](_0x2000d8(0x317)+_0x49251a['PbucO'](_0x4ad07f[_0x2000d8(0x618)+'n'],0x77b+-0x2486+0x1d0c));var _0x11947f=_0x47acd0[_0x4ad07f['butto'+'n']+(-0x10cd+0xc83*0x1+0x9d*0x7)];if(_0x11947f){if(_0x49251a[_0x2000d8(0x463)](_0x2000d8(0x27a),_0x2000d8(0x27a))){_0x11947f['push'](performance[_0x2000d8(0x341)]());if(_0x49251a[_0x2000d8(0x526)](_0x11947f[_0x2000d8(0x388)+'h'],0xb*0x9d+0x1a83+-0x211a))_0x11947f[_0x2000d8(0x21d)]();}else _0x4e277b={..._0x207e99},_0x2756e6[_0x2000d8(0x51e)](_0x90b2a1),_0x2ad40f[_0x2000d8(0x4cd)+'d']();}}function _0x3bf24a(_0xe139da){var _0x43dc84=_0x1a654c;if(_0x43dc84(0x35e)!==_0x43dc84(0x35e))try{_0x406657[_0x43dc84(0x5eb)+'em'](_0x43dc84(0x426)+_0x43dc84(0x4eb)+_0x43dc84(0x4a7),_0x3e2f89[_0x43dc84(0x370)+_0x43dc84(0x447)](_0x7b6314));}catch(_0xa7a9e4){}else{if(!_0xe139da[_0x43dc84(0x585)+_0x43dc84(0x4c0)])_0x510255[_0x43dc84(0x6a0)+'e'](_0x49251a['tMTCI'](_0x49251a[_0x43dc84(0x3a1)],_0xe139da[_0x43dc84(0x618)+'n']+(0x2*0x2+-0x1b5b+0x1b58)));}}function _0x408266(){var _0x113ea1=_0x1a654c;_0x510255[_0x113ea1(0x1a4)]();}function _0x350f94(){var _0x33e4be=_0x1a654c;if(_0x33e4be(0x59e)!==_0x49251a[_0x33e4be(0x419)]){if(_0x5d04b9)return;_0x5d04b9=!![],window[_0x33e4be(0x4f4)+_0x33e4be(0x459)+_0x33e4be(0x4fe)+'r'](_0x49251a[_0x33e4be(0x1ef)],_0x4436e7,!![]),window[_0x33e4be(0x4f4)+_0x33e4be(0x459)+'stene'+'r'](_0x33e4be(0x5e1),_0x4076b7,!![]),window[_0x33e4be(0x4f4)+_0x33e4be(0x459)+_0x33e4be(0x4fe)+'r'](_0x33e4be(0x317)+'down',_0x18d40d,!![]),window['addEv'+'entLi'+_0x33e4be(0x4fe)+'r'](_0x33e4be(0x317)+'up',_0x3bf24a,!![]),window[_0x33e4be(0x4f4)+_0x33e4be(0x459)+'stene'+'r'](_0x33e4be(0x68f),_0x408266);}else _0x39afc4['ksSca'+'le']=_0x1f3897,_0xeca8a9();}function _0x624c7e(_0x226833){var _0x502784=_0x1a654c,_0x547147=_0x47acd0[_0x226833]||[],_0x853b5f=performance[_0x502784(0x341)]();while(_0x547147[_0x502784(0x388)+'h']&&_0x49251a[_0x502784(0x295)](_0x853b5f-_0x547147[0x7f0*0x4+-0x1891+0x265*-0x3],-0x166a+-0x114f+0x2ba1))_0x547147['shift']();return _0x547147[_0x502784(0x388)+'h'];}function _0xad4c41(_0x27b818){var _0x5b2c8e=_0x1a654c;if(document[_0x5b2c8e(0x33d)]&&(_0x49251a['vzIiU'](document[_0x5b2c8e(0x1c5)+_0x5b2c8e(0x514)],_0x49251a[_0x5b2c8e(0x4cc)])||_0x49251a[_0x5b2c8e(0x22d)](document[_0x5b2c8e(0x1c5)+_0x5b2c8e(0x514)],'compl'+_0x5b2c8e(0x40b))))_0x49251a['SxFgU'](_0x27b818);else document[_0x5b2c8e(0x4f4)+_0x5b2c8e(0x459)+_0x5b2c8e(0x4fe)+'r'](_0x5b2c8e(0x34d)+'ntent'+'Loade'+'d',_0x27b818,{'once':!![]});}_0x49251a[_0x1a654c(0x3f3)](_0xad4c41,()=>{var _0x3f86fb=_0x1a654c,_0x223fb1={'gTtbc':function(_0x504c10,_0x9b1871){var _0x166186=_0x3f95;return _0x49251a[_0x166186(0x22d)](_0x504c10,_0x9b1871);},'rjGll':_0x49251a[_0x3f86fb(0x235)],'cuNfA':'kour-'+_0x3f86fb(0x26a),'LelBx':_0x49251a['IbtDf'],'DGOzW':_0x3f86fb(0x586),'jmmBS':_0x49251a[_0x3f86fb(0x349)],'msZuX':'god','vHHKn':_0x49251a[_0x3f86fb(0x64c)],'UlZFg':_0x3f86fb(0x4a8),'zYjPC':_0x49251a['VOdvj'],'xhOuH':function(_0xca0442,_0x581cd7){return _0xca0442!==_0x581cd7;},'kbEzJ':function(_0x1abe82,_0x465720){return _0x1abe82===_0x465720;},'DJriK':function(_0x574107,_0x42e692){return _0x574107>_0x42e692;},'eMJEG':'Ytelk','vjNDy':_0x3f86fb(0x6d4)+_0x3f86fb(0x35c)+'16,0.'+'7)','OFPWW':_0x49251a[_0x3f86fb(0x5ce)],'zWRKL':'rgba('+_0x3f86fb(0x6e0)+'35,24'+_0x3f86fb(0x65c)+')','opIYB':function(_0x5afcf8,_0x225f78){return _0x5afcf8+_0x225f78;},'TTTcF':function(_0x3100b6,_0x2c0f19){return _0x3100b6*_0x2c0f19;},'ccwCZ':function(_0x218b31,_0x2fc71e){return _0x218b31+_0x2fc71e;},'epCca':'px\x20ui'+'-sans'+_0x3f86fb(0x480)+_0x3f86fb(0x642)+'tem-u'+_0x3f86fb(0x21f)+_0x3f86fb(0x53d)+'if','NQjVe':function(_0x4581f9,_0x1f888c){return _0x4581f9/_0x1f888c;},'CeDIm':function(_0xe0ed7d,_0x54417e){return _0xe0ed7d+_0x54417e;},'cCBBY':function(_0x4bfcf8,_0x1b8b7f){return _0x4bfcf8(_0x1b8b7f);},'OVdON':function(_0x5f10e8,_0x10237b){var _0x180791=_0x3f86fb;return _0x49251a[_0x180791(0x66d)](_0x5f10e8,_0x10237b);},'eCcLu':function(_0x5ca9a0,_0x50a3ab){var _0x197146=_0x3f86fb;return _0x49251a[_0x197146(0x32f)](_0x5ca9a0,_0x50a3ab);},'ylvbF':function(_0x597cfc,_0x2f3810){return _0x597cfc*_0x2f3810;},'HIytK':function(_0x524c1f,_0x273f5d){return _0x524c1f-_0x273f5d;},'ctUoG':function(_0x84072c,_0x3aa4a0){return _0x84072c+_0x3aa4a0;},'BxEWc':function(_0x2d5a72,_0x2dfe72){return _0x2d5a72-_0x2dfe72;},'JEpms':function(_0x5ce3e6,_0xda19cd){var _0x20f3b0=_0x3f86fb;return _0x49251a[_0x20f3b0(0x283)](_0x5ce3e6,_0xda19cd);},'GWiPq':function(_0x17fc47,_0x37a840){return _0x49251a['elEQE'](_0x17fc47,_0x37a840);},'ljrcT':_0x3f86fb(0x4ec),'GIzeY':function(_0x14da01,_0x146763,_0x11a3fc,_0x2124ab,_0x2395bd,_0x4dae21,_0x42b189){return _0x14da01(_0x146763,_0x11a3fc,_0x2124ab,_0x2395bd,_0x4dae21,_0x42b189);},'jZTnF':function(_0x48346f,_0x5a5878,_0x10cf1b,_0x36c6f8,_0x661332,_0x2437d7,_0x254c7f){return _0x49251a['EhCrp'](_0x48346f,_0x5a5878,_0x10cf1b,_0x36c6f8,_0x661332,_0x2437d7,_0x254c7f);},'qqmEQ':'KeyS','SPwKq':function(_0x40a460,_0x880fba){var _0x20a835=_0x3f86fb;return _0x49251a[_0x20a835(0x4c4)](_0x40a460,_0x880fba);},'pRQOp':function(_0x4b9464,_0x50d96a){return _0x4b9464+_0x50d96a;},'URyoj':function(_0x5f73c5,_0x27a80b){return _0x5f73c5+_0x27a80b;},'ahtmi':function(_0x26776e,_0x35dfc3){return _0x26776e+_0x35dfc3;},'IjTZq':function(_0x506efc,_0x1a5047,_0x25819b,_0xebb1ef,_0x25d113,_0x177800,_0x4b9786,_0x337217){return _0x506efc(_0x1a5047,_0x25819b,_0xebb1ef,_0x25d113,_0x177800,_0x4b9786,_0x337217);},'hcber':_0x3f86fb(0x3ae),'vdYNv':_0x49251a['lvSMT'],'uhwRf':_0x49251a['NfXbD'],'aCYHF':function(_0x54facf,_0x3d6a75){var _0x43c06e=_0x3f86fb;return _0x49251a[_0x43c06e(0x4a2)](_0x54facf,_0x3d6a75);},'Hiaex':function(_0x448dac,_0x5a3ab7){return _0x448dac+_0x5a3ab7;},'IvwHo':function(_0x22566d,_0x37e272){var _0x26965a=_0x3f86fb;return _0x49251a[_0x26965a(0x3c6)](_0x22566d,_0x37e272);},'KpXgn':function(_0x4a61bb,_0x379feb){return _0x4a61bb||_0x379feb;},'rGqKI':_0x3f86fb(0x2b7)+'ers','ASFyF':_0x3f86fb(0x6d4)+_0x3f86fb(0x483)+'07,15'+_0x3f86fb(0x5a3)+'5)','TFRAa':_0x3f86fb(0x6d4)+'255,1'+_0x3f86fb(0x58e)+_0x3f86fb(0x4fd)+'5)','krhug':_0x3f86fb(0x3f6)+'e','taulQ':function(_0x43d014,_0x1e062a){var _0x37895b=_0x3f86fb;return _0x49251a[_0x37895b(0x64e)](_0x43d014,_0x1e062a);},'AQdIK':function(_0x1e8a56,_0x596954){return _0x1e8a56/_0x596954;},'XFdmt':_0x49251a[_0x3f86fb(0x423)],'fMFvk':'aria-'+'check'+'ed','qxEgY':'Eqiye','dNcHr':'uPYKb','xrhJJ':_0x49251a['rXkqp'],'Opfjg':_0x3f86fb(0x22e)+_0x3f86fb(0x4dd),'aRiIA':function(_0x25e2df){var _0x169e63=_0x3f86fb;return _0x49251a[_0x169e63(0x615)](_0x25e2df);},'ZHGXZ':'unkno'+'wn','rzroT':_0x3f86fb(0x41c),'DffvI':_0x3f86fb(0x2fc),'VZVek':'input','WhhBO':'#ff6b'+'9d','IRuIJ':function(_0x207142,_0x4ab990){var _0x4e51c6=_0x3f86fb;return _0x49251a[_0x4e51c6(0x22d)](_0x207142,_0x4ab990);},'PUzyI':_0x3f86fb(0x6ec),'bTEWZ':_0x3f86fb(0x1d5)+'|3|5|'+'0','gDIlV':'optio'+'n','MnONF':function(_0x443291,_0x43a386){return _0x443291===_0x43a386;},'zHTnf':_0x49251a[_0x3f86fb(0x307)],'KzDDg':'5|2|1'+'|3|4|'+'0','qyFvX':_0x49251a[_0x3f86fb(0x236)],'OfqgW':_0x3f86fb(0x5fa),'aLHRl':_0x49251a[_0x3f86fb(0x2bf)],'kVPWV':_0x49251a[_0x3f86fb(0x664)],'iSvqm':function(_0x1dbdbd){return _0x1dbdbd();},'RUgnN':function(_0x5abd18){return _0x49251a['Fqvxg'](_0x5abd18);},'DJXxr':'</sma'+_0x3f86fb(0x626),'YjkWb':function(_0x454221,_0x4dff3e,_0x4095a9){var _0xa6ec44=_0x3f86fb;return _0x49251a[_0xa6ec44(0x1a8)](_0x454221,_0x4dff3e,_0x4095a9);},'wYuQh':_0x3f86fb(0x64a),'auXKd':'600\x201'+_0x3f86fb(0x54e)+_0x3f86fb(0x3cd)+_0x3f86fb(0x1e6)+'e,mon'+'ospac'+'e','EhOLm':'style','OgEbl':'shown','GFVgz':'ITBaN','YHXia':function(_0xe69b5a){var _0xf707ec=_0x3f86fb;return _0x49251a[_0xf707ec(0x319)](_0xe69b5a);},'CJsea':_0x3f86fb(0x208),'abARx':function(_0x862753,_0x48af56){return _0x862753!==_0x48af56;},'PXBDu':_0x3f86fb(0x5c6)+'t','QqNaB':function(_0x493877,_0x427b69,_0x52580b,_0x53f9de,_0x15bcc0,_0x288dd3){return _0x493877(_0x427b69,_0x52580b,_0x53f9de,_0x15bcc0,_0x288dd3);},'JSBlF':_0x3f86fb(0x2f5)+_0x3f86fb(0x274),'nSdbc':_0x3f86fb(0x3af)+_0x3f86fb(0x500)+'alth.'+'Initi'+_0x3f86fb(0x6ee)+_0x3f86fb(0x40f)+'lth,\x20'+_0x3f86fb(0x6c1)+'unnel'+_0x3f86fb(0x2b6)+_0x3f86fb(0x31f)+'age\x20g'+_0x3f86fb(0x415)+'hroug'+'h.','YhZli':function(_0x2bceda,_0xd838d8,_0x3c480e,_0xb76e90,_0x5a31d8,_0x486071){return _0x49251a['IVAXQ'](_0x2bceda,_0xd838d8,_0x3c480e,_0xb76e90,_0x5a31d8,_0x486071);},'BINiF':_0x49251a[_0x3f86fb(0x5dd)],'tBZTv':'Scale'+_0x3f86fb(0x68a)+'rtide'+'Weapo'+'n.fir'+_0x3f86fb(0x619)+_0x3f86fb(0x509)+_0x3f86fb(0x310)+'erver'+_0x3f86fb(0x467)+_0x3f86fb(0x594)+_0x3f86fb(0x363)+'\x20shot'+'s.','yWHBV':_0x3f86fb(0x60f)+'rites'+'\x20Over'+_0x3f86fb(0x2e2)+_0x3f86fb(0x25d)+'\x20dama'+'ge.\x20B'+_0x3f86fb(0x4a3)+'le\x20if'+_0x3f86fb(0x3e0)+'serve'+_0x3f86fb(0x4d2)+'idate'+'s.','sBeTt':_0x49251a[_0x3f86fb(0x2aa)],'ECmwh':function(_0x59d39e,_0xf0f912){return _0x59d39e(_0xf0f912);},'zLnVS':'Speed','oRcWq':_0x3f86fb(0x5de)+'s\x20all'+_0x3f86fb(0x252)+'\x20Move'+'ment\x20'+_0x3f86fb(0x3a7)+'\x20limi'+'ts\x20pl'+_0x3f86fb(0x19e)+_0x3f86fb(0x254)+_0x3f86fb(0x1d3)+'.','jPJrx':function(_0x5cdfd1,_0xaf59fb,_0x56333f,_0x60e1d7){var _0x52863b=_0x3f86fb;return _0x49251a[_0x52863b(0x43e)](_0x5cdfd1,_0xaf59fb,_0x56333f,_0x60e1d7);},'lpxeL':_0x3f86fb(0x1f9)+'\x20%','jkXSk':_0x49251a[_0x3f86fb(0x457)],'cPOmo':'Scale'+_0x3f86fb(0x207)+'ement'+_0x3f86fb(0x3df)+_0x3f86fb(0x27e)+_0x3f86fb(0x53a)+'both\x20'+'gravi'+_0x3f86fb(0x41f)+_0x3f86fb(0x42c),'QClbm':function(_0x1092bb,_0x184f6a){return _0x1092bb!==_0x184f6a;},'YwtFW':_0x3f86fb(0x55e)+_0x3f86fb(0x6a3),'iiKnb':'lower'+'\x20=\x20fl'+_0x3f86fb(0x676),'SSwND':'visua'+'l','EcSbI':function(_0x4a6e8d,_0xb4469,_0x1f04f3,_0x24ccbf,_0x3ac9bd,_0x4767be){return _0x49251a['IVAXQ'](_0x4a6e8d,_0xb4469,_0x1f04f3,_0x24ccbf,_0x3ac9bd,_0x4767be);},'PYTIT':_0x3f86fb(0x2f3)+_0x3f86fb(0x3bf)+'/RMB\x20'+_0x3f86fb(0x366)+_0x3f86fb(0x402)+'erlay'+'.','UXsrx':_0x49251a[_0x3f86fb(0x266)],'ZQsXH':function(_0x364b23,_0x4c861f,_0xaa77cf,_0xae29a0){return _0x364b23(_0x4c861f,_0xaa77cf,_0xae29a0);},'MpvXz':'Custo'+_0x3f86fb(0x6f3)+_0x3f86fb(0x578)+'rossh'+_0x3f86fb(0x4e6),'oSBtu':_0x3f86fb(0x30a),'hrZrZ':_0x3f86fb(0x69e),'LviZv':_0x49251a['RmFaY'],'ebuIM':'misc','muTVD':_0x3f86fb(0x33e)+'ck','rjfsy':_0x49251a[_0x3f86fb(0x390)],'kghNY':_0x49251a['ZFpKk'],'luhBV':_0x49251a[_0x3f86fb(0x52c)],'SSuqY':'Disab'+'les\x20C'+_0x3f86fb(0x4c7)+_0x3f86fb(0x546)+'etect'+_0x3f86fb(0x26b)+'t\x20sta'+_0x3f86fb(0x5b2)+_0x3f86fb(0x6fe)+'topDe'+_0x3f86fb(0x704)+'on().'+_0x3f86fb(0x2fa)+'\x20ON.','mrujw':'These'+_0x3f86fb(0x663)+_0x3f86fb(0x1ca)+'ver-v'+_0x3f86fb(0x3cc)+_0x3f86fb(0x1f7)+_0x3f86fb(0x1f3),'iUCdt':function(_0x4559b7,_0x344f42){return _0x4559b7(_0x344f42);},'VXiQr':function(_0x33e0ce,_0x426758){var _0x43986c=_0x3f86fb;return _0x49251a[_0x43986c(0x5ab)](_0x33e0ce,_0x426758);},'WQEuJ':_0x49251a[_0x3f86fb(0x3f1)],'UJVTI':'\x20|\x20sh'+'ooter'+'\x20','ZzQUC':'\x20|\x20mo'+'vemen'+'t\x20','usPBj':_0x3f86fb(0x2bc),'ABAqs':_0x3f86fb(0x496)+'in','sgwfA':'mn-to'+'p','YSbIF':_0x49251a['JubbJ'],'EjPAd':_0x49251a[_0x3f86fb(0x646)],'DBGZt':_0x49251a[_0x3f86fb(0x698)],'OxYUe':function(_0x34f81f,_0x1d38c9){var _0x87cd86=_0x3f86fb;return _0x49251a[_0x87cd86(0x1d6)](_0x34f81f,_0x1d38c9);}};_0x145617[_0x3f86fb(0x2f4)+'ck']&&setInterval(()=>{var _0x33db5e=_0x3f86fb;try{for(var _0x5115d6 of[_0x33db5e(0x2da)+'io_30'+'0x250'+'-pare'+'nt',_0x33db5e(0x2da)+'io_72'+'8x90-'+'paren'+'t','kour-'+'io_30'+_0x33db5e(0x4d7)+_0x33db5e(0x2a7)+'nt','fulls'+_0x33db5e(0x64d)+_0x33db5e(0x6bc)+'s']){var _0xed16e5=document[_0x33db5e(0x43c)+'ement'+_0x33db5e(0x6df)](_0x5115d6);if(_0xed16e5&&_0x223fb1[_0x33db5e(0x320)](_0x5115d6,_0x223fb1[_0x33db5e(0x318)])){var _0x1c5cca=_0xed16e5['child'+'ren'];for(var _0x4667fb=-0x1*-0x1df9+-0x1ce5+-0x114;_0x4667fb<_0x1c5cca['lengt'+'h'];_0x4667fb++){if(_0x1c5cca[_0x4667fb]['id']&&_0x223fb1[_0x33db5e(0x320)](_0x1c5cca[_0x4667fb]['id'][_0x33db5e(0x209)+'Of'](_0x223fb1['cuNfA']),-0x2502+0x2c*-0x99+0x3f4e))_0x1c5cca[_0x4667fb]['style'][_0x33db5e(0x560)+'ay']=_0x33db5e(0x549);}}else{if(_0xed16e5)_0xed16e5[_0x33db5e(0x2f8)]['displ'+'ay']=_0x223fb1['LelBx'];}}}catch(_0x15c023){}},0x14b+0xb*0x2ef+0x8*-0x338);var _0x1c9255=document[_0x3f86fb(0x44f)+_0x3f86fb(0x5ff)+'ent'](_0x49251a['yqLdx']);_0x1c9255['style']['cssTe'+'xt']=_0x49251a['IbpDn'];var _0x48f746=_0x1c9255[_0x3f86fb(0x281)+'ntext']('2d');function _0x53ff73(){var _0x4b1cd1=_0x3f86fb,_0x3695d7={'XXecx':function(_0x1c02b9,_0x39b7f2,_0x580a44,_0x523fbd,_0x598f54){return _0x1c02b9(_0x39b7f2,_0x580a44,_0x523fbd,_0x598f54);}};if(_0x49251a[_0x4b1cd1(0x54b)]==='oiClh'){var _0x9743a8={'LfVKK':_0x4b1cd1(0x1c1)+'ents'};_0x47164c=_0x2c0712[_0x4b1cd1(0x45d)+'WebMo'+'dkit'][_0x4b1cd1(0x49e)+_0x4b1cd1(0x31e)+'er'],_0x258f39=_0x14f684[_0x4b1cd1(0x45d)+_0x4b1cd1(0x311)+'dkit'][_0x4b1cd1(0x612)+'me']['creat'+_0x4b1cd1(0x5a1)+'in']({'name':'Sakur'+_0x4b1cd1(0x1bf),'version':_0x223fb1[_0x4b1cd1(0x224)],'referencedAssemblies':[_0x223fb1[_0x4b1cd1(0x213)]]}),_0x383b95(_0x223fb1[_0x4b1cd1(0x1b3)],_0x4b1cd1(0x4a6)+'th',_0x4b1cd1(0x6db)+_0x4b1cd1(0x6ee)+_0x4b1cd1(0x40f)+'lth',[_0x4b1cd1(0x4a8),_0x4b1cd1(0x4a8)],_0x7a81c8,_0x4dac4c,!!_0x3c3481[_0x4b1cd1(0x291)]),_0x250220('noRec'+_0x4b1cd1(0x5d4),_0x4b1cd1(0x453)+_0x4b1cd1(0x2b3)+'forms'+_0x4b1cd1(0x669)+_0x4b1cd1(0x593)+_0x4b1cd1(0x62b)+'lMoti'+'on','Tick',['i32'],_0x3cc0a0,_0x145f6b,!!_0x3b9d1b[_0x4b1cd1(0x628)+'oil']),_0x21a33a(_0x4b1cd1(0x3a6)+_0x4b1cd1(0x543),'OShoo'+_0x4b1cd1(0x611),_0x223fb1[_0x4b1cd1(0x5f0)],[_0x223fb1[_0x4b1cd1(0x248)],_0x4b1cd1(0x4a8)],_0x55a58b,(_0x506172,_0x2b4f32)=>{var _0x44b314=_0x4b1cd1;_0x3695d7[_0x44b314(0x5a4)](_0x49c1ed,_0x39c595,_0x2b4f32,_0x4e6471,_0x44b314(0x2b7)+_0x44b314(0x25c));},!![]),_0x31e10f(_0x4b1cd1(0x203)+'ve',_0x4b1cd1(0x453)+_0x4b1cd1(0x2b3)+_0x4b1cd1(0x3ba)+_0x4b1cd1(0x669)+_0x4b1cd1(0x593)+'Movem'+'ent',_0x223fb1['zYjPC'],['i32'],_0x223fb1['UlZFg'],(_0x54a562,_0x29c2fb)=>{_0x59f0d5(_0x10a28b,_0x29c2fb,_0x54c894,_0x9743a8['LfVKK']);},!![]);}else try{var _0x1fb830=document['fulls'+_0x4b1cd1(0x64d)+_0x4b1cd1(0x31a)+'nt'],_0x2186af=_0x1fb830&&_0x1fb830['tagNa'+'me']!==_0x49251a['BgFeC']?_0x1fb830:document['body']||document['docum'+_0x4b1cd1(0x3f4)+'ement'];if(_0x49251a[_0x4b1cd1(0x49b)](_0x1c9255[_0x4b1cd1(0x486)+_0x4b1cd1(0x52f)],_0x2186af))_0x2186af['appen'+_0x4b1cd1(0x23c)+'d'](_0x1c9255);}catch(_0x198945){try{document[_0x4b1cd1(0x33d)]['appen'+_0x4b1cd1(0x23c)+'d'](_0x1c9255);}catch(_0x74b4ec){}}}var _0x57e4ad={'w':0x0,'h':0x0,'dpr':0x0};function _0x59afc3(){var _0xdcaebc=_0x3f86fb;if(_0x223fb1['xhOuH'](_0xdcaebc(0x460),_0xdcaebc(0x460))){var _0x252256=(_0xdcaebc(0x3e3)+'|0|1|'+'2')['split']('|'),_0x23647a=-0x3b9*-0x4+0x26a9+-0x358d*0x1;while(!![]){switch(_0x252256[_0x23647a++]){case'0':_0x264de9=_0x1642fe();continue;case'1':_0x51445d[_0xdcaebc(0x67d)+_0xdcaebc(0x23c)+'d'](_0x504d1e);continue;case'2':_0x5c4add(()=>_0x476d6a[_0xdcaebc(0x6dd)+_0xdcaebc(0x4ea)][_0xdcaebc(0x538)](_0xdcaebc(0x4a0)));continue;case'3':var _0xae29d1=_0x897957[_0xdcaebc(0x44f)+'eElem'+'ent'](_0xdcaebc(0x2f8));continue;case'4':_0xae29d1[_0xdcaebc(0x48d)+_0xdcaebc(0x30b)+'t']=_0x3c83bc;continue;case'5':_0x573140[_0xdcaebc(0x67d)+_0xdcaebc(0x23c)+'d'](_0xae29d1);continue;}break;}}else{var _0x1d83df=window['devic'+_0xdcaebc(0x701)+'lRati'+'o']||-0x8*-0xad+-0x11dd+0xc76,_0x1a967a=window['inner'+_0xdcaebc(0x6ab)],_0x49c4f4=window['inner'+_0xdcaebc(0x30d)+'t'];if(_0x1a967a===_0x57e4ad['w']&&_0x49c4f4===_0x57e4ad['h']&&_0x223fb1[_0xdcaebc(0x40c)](_0x1d83df,_0x57e4ad[_0xdcaebc(0x2dc)]))return;_0x57e4ad['w']=_0x1a967a,_0x57e4ad['h']=_0x49c4f4,_0x57e4ad[_0xdcaebc(0x2dc)]=_0x1d83df,_0x1c9255[_0xdcaebc(0x1ee)]=Math[_0xdcaebc(0x365)](_0x1a967a*_0x1d83df),_0x1c9255['heigh'+'t']=Math[_0xdcaebc(0x365)](_0x49c4f4*_0x1d83df),_0x48f746['setTr'+'ansfo'+'rm'](_0x1d83df,-0x1071+-0x1*0x84a+-0x18bb*-0x1,0x841+0x7*0x1d2+-0x14ff,_0x1d83df,0x13df+-0x88*0xb+0x15*-0xab,0x1ad6+0x19f3*-0x1+0xe3*-0x1);}}var _0x5eeae0=0x92+-0x147d+-0x13eb*-0x1,_0x3b027b=performance['now'](),_0xa26c2c=-0x112*-0xd+-0x277*0xd+0x1221;function _0x4885f8(_0x90f55a){var _0x21e1bc=_0x3f86fb,_0x119bc2=_0x223fb1[_0x21e1bc(0x464)](Number,_0x145617[_0x21e1bc(0x51a)+'le'])||0x1*-0x1835+-0x13b2+0x28*0x119,_0x269a80=(-0x1aad*0x1+-0xa42+0xc5b*0x3)*_0x119bc2,_0x268448=_0x223fb1[_0x21e1bc(0x342)](-0xb*-0x2ff+0x37*0x55+-0x3334,_0x119bc2),_0x2ad4bc=_0x269a80*(0x85d*-0x2+0x10c5+-0x8)+_0x223fb1['OVdON'](_0x268448,0x1041+0x7*0x97+0x20*-0xa3),_0x8324e9=_0x223fb1[_0x21e1bc(0x545)](_0x223fb1['ylvbF'](_0x269a80,-0xac*0x16+-0x1005+0x1ed0),_0x268448*(-0x3*0x917+0x558+-0x1*-0x15ef)),_0x5e7406=_0x145617[_0x21e1bc(0x234)],_0x5debb9=_0x5e7406==='br'?_0x223fb1['HIytK'](_0x90f55a['right'],-0x2*-0xe83+0x17a3+-0x3499)-_0x2ad4bc:_0x223fb1['ctUoG'](_0x90f55a[_0x21e1bc(0x5ac)],0xba5+0x2*0x34b+-0x1*0x122b),_0x349b59=_0x5e7406==='ml'?_0x223fb1['BxEWc'](_0x223fb1['JEpms'](_0x90f55a['top'],_0x223fb1['GWiPq'](_0x90f55a[_0x21e1bc(0x62d)+'t'],-0xaba+-0x24a+0xd06)),_0x8324e9/(0x23+0x1*0x3d+0x2f*-0x2)):_0x90f55a[_0x21e1bc(0x47e)+'m']-_0x8324e9-(_0x223fb1[_0x21e1bc(0x40c)](_0x5e7406,'bl')?-0x7*0x3d+-0x1e90+0x1*0x209b:0x6f1+-0x996*0x1+0x33b),_0x4b5662=(_0x14d3aa,_0x336cc1,_0x2d4069,_0xf0a47e,_0x1913d0,_0x1fb724,_0x5e326f)=>{var _0x4a99a4=_0x21e1bc,_0x59c28a={'HziBF':function(_0x20211a,_0x42fcf4){var _0x3085ac=_0x3f95;return _0x223fb1[_0x3085ac(0x68e)](_0x20211a,_0x42fcf4);}};if(_0x223fb1[_0x4a99a4(0x22a)]!=='Ytelk'){_0xf1fb01['push'](_0x49cc8d[_0x4a99a4(0x341)]());if(_0x59c28a['HziBF'](_0x3a79c9['lengt'+'h'],0x2*-0xe87+-0x1b1f*0x1+0x3855))_0x3a1575[_0x4a99a4(0x21d)]();}else{var _0x56d437=_0x510255['has'](_0x336cc1);_0x48f746[_0x4a99a4(0x378)](),_0x48f746['begin'+'Path']();if(_0x48f746['round'+'Rect'])_0x48f746[_0x4a99a4(0x365)+_0x4a99a4(0x3d2)](_0x2d4069,_0xf0a47e,_0x1913d0,_0x1fb724,(-0x4*-0x5cb+0xa1*0x23+-0x2d28)*_0x119bc2);else _0x48f746[_0x4a99a4(0x3e5)](_0x2d4069,_0xf0a47e,_0x1913d0,_0x1fb724);_0x48f746[_0x4a99a4(0x431)+_0x4a99a4(0x3dd)]=_0x56d437?_0x4a99a4(0x6d4)+_0x4a99a4(0x483)+'07,15'+_0x4a99a4(0x5a3)+'5)':_0x223fb1['vjNDy'],_0x48f746['fill'](),_0x48f746['lineW'+'idth']=0x2f4+-0x1e95*0x1+0x1ba2,_0x48f746[_0x4a99a4(0x303)+_0x4a99a4(0x6f2)+'e']=_0x56d437?_0x48f427:_0x4a99a4(0x6d4)+_0x4a99a4(0x483)+_0x4a99a4(0x58e)+'7,0.3'+'5)',_0x48f746[_0x4a99a4(0x303)+'e'](),_0x56d437&&(_0x48f746[_0x4a99a4(0x228)+_0x4a99a4(0x636)+'r']=_0x11df8c,_0x48f746[_0x4a99a4(0x228)+'wBlur']=-0x475*0x1+0x5*-0x48a+0xc7*0x23,_0x48f746[_0x4a99a4(0x535)](),_0x48f746[_0x4a99a4(0x228)+_0x4a99a4(0x406)]=0x23*0xb2+-0x49*-0x6+0x1*-0x1a0c),_0x48f746[_0x4a99a4(0x431)+'tyle']=_0x56d437?_0x223fb1['OFPWW']:_0x223fb1[_0x4a99a4(0x55d)],_0x48f746[_0x4a99a4(0x2cf)+'lign']='cente'+'r',_0x48f746['textB'+_0x4a99a4(0x1a9)+'ne']=_0x4a99a4(0x3f6)+'e',_0x48f746[_0x4a99a4(0x335)]=_0x223fb1[_0x4a99a4(0x1f4)]('700\x20'+Math[_0x4a99a4(0x365)]((0xc4c+0x1*-0x3d+0x4b*-0x29)*_0x119bc2),_0x4a99a4(0x587)+_0x4a99a4(0x5ae)+_0x4a99a4(0x480)+'f,sys'+_0x4a99a4(0x356)+_0x4a99a4(0x21f)+_0x4a99a4(0x53d)+'if'),_0x48f746['fillT'+_0x4a99a4(0x3c8)](_0x14d3aa,_0x2d4069+_0x1913d0/(0x1a6a+-0x457+0x10d*-0x15),_0xf0a47e+_0x1fb724/(-0xb0b+0x2430+0x1ad*-0xf)-(_0x5e326f?_0x223fb1['TTTcF'](-0xc4f*-0x1+0x139+-0xd83,_0x119bc2):0x1071+0x233c+-0x33ad)),_0x5e326f&&(_0x48f746[_0x4a99a4(0x335)]=_0x223fb1[_0x4a99a4(0x217)](_0x4a99a4(0x241)+Math[_0x4a99a4(0x365)]((0x68e+0x4db+-0xb60)*_0x119bc2),_0x223fb1[_0x4a99a4(0x524)]),_0x48f746['fillS'+_0x4a99a4(0x3dd)]=_0x56d437?_0x4a99a4(0x21b):_0x4a99a4(0x6d4)+'255,2'+'35,24'+_0x4a99a4(0x6bd)+'5)',_0x48f746['fillT'+'ext'](_0x5e326f,_0x2d4069+_0x223fb1[_0x4a99a4(0x24b)](_0x1913d0,-0x6a3*-0x3+-0x19d+-0x124a),_0x223fb1[_0x4a99a4(0x217)](_0x223fb1[_0x4a99a4(0x206)](_0xf0a47e,_0x1fb724/(0x263a*-0x1+0x1*0x18f6+0x1*0xd46)),_0x223fb1['TTTcF'](-0x1d81+0x1*0xc32+0x1157,_0x119bc2)))),_0x48f746[_0x4a99a4(0x294)+'re']();}};_0x4b5662('W',_0x223fb1[_0x21e1bc(0x2e8)],_0x223fb1[_0x21e1bc(0x545)](_0x5debb9,_0x269a80)+_0x268448,_0x349b59,_0x269a80,_0x269a80),_0x223fb1[_0x21e1bc(0x4f5)](_0x4b5662,'A',_0x21e1bc(0x30e),_0x5debb9,_0x349b59+_0x269a80+_0x268448,_0x269a80,_0x269a80),_0x223fb1[_0x21e1bc(0x238)](_0x4b5662,'S',_0x223fb1['qqmEQ'],_0x223fb1[_0x21e1bc(0x638)](_0x5debb9,_0x269a80)+_0x268448,_0x223fb1['pRQOp'](_0x349b59+_0x269a80,_0x268448),_0x269a80,_0x269a80),_0x4b5662('D','KeyD',_0x5debb9+_0x223fb1['URyoj'](_0x269a80,_0x268448)*(0x10d9*-0x1+-0x47d+0xaac*0x2),_0x223fb1[_0x21e1bc(0x1f4)](_0x223fb1['ahtmi'](_0x349b59,_0x269a80),_0x268448),_0x269a80,_0x269a80);var _0x1439e6=(_0x2ad4bc-_0x268448)/(0xd1e+-0x1864+-0x2*-0x5a4),_0x1260d4=_0x349b59+(_0x269a80+_0x268448)*(0x1139+0x1024+-0x1*0x215b);_0x223fb1['IjTZq'](_0x4b5662,_0x223fb1['hcber'],_0x223fb1[_0x21e1bc(0x23d)],_0x5debb9,_0x1260d4,_0x1439e6,_0x269a80,_0x145617['ksCps']?_0x223fb1['ahtmi'](_0x223fb1['cCBBY'](_0x624c7e,0x1646+0x22f5+0x19*-0x24a),_0x223fb1[_0x21e1bc(0x223)]):''),_0x4b5662('RMB','mouse'+'3',_0x223fb1[_0x21e1bc(0x649)](_0x5debb9+_0x1439e6,_0x268448),_0x1260d4,_0x1439e6,_0x269a80,_0x145617[_0x21e1bc(0x4a1)]?_0x223fb1[_0x21e1bc(0x44b)](_0x624c7e(0xd6*0x1b+0x4*0x665+0x1*-0x3023),_0x21e1bc(0x408)):''),_0x4b5662('',_0x21e1bc(0x5c2),_0x5debb9,_0x1260d4+_0x269a80+_0x268448,_0x2ad4bc,_0x223fb1['IvwHo'](_0x269a80,-0x25c8+-0xf51+0x3519+0.45));}function _0x3dac67(_0x1136bd){var _0x43597f=_0x3f86fb,_0x187a60=_0x1136bd[_0x43597f(0x1ee)]/(0x1c73*-0x1+-0x1*-0x1822+0x1*0x453),_0x6a3b0d=_0x49251a[_0x43597f(0x215)](_0x1136bd[_0x43597f(0x62d)+'t'],0xe9e+-0x7d2+-0x2*0x365),_0x4da284=_0x49251a[_0x43597f(0x2e9)](Number,_0x145617[_0x43597f(0x613)+'e'])||0x2632+-0xe3*-0x1d+-0x3fe8,_0x382ef8=/^#[0-9a-f]{6}$/i[_0x43597f(0x62e)](_0x145617[_0x43597f(0x4be)+'or'])?_0x145617['chCol'+'or']:_0x49251a[_0x43597f(0x6b0)];_0x48f746[_0x43597f(0x378)](),_0x48f746[_0x43597f(0x303)+_0x43597f(0x6f2)+'e']=_0x382ef8,_0x48f746[_0x43597f(0x431)+'tyle']=_0x382ef8,_0x48f746[_0x43597f(0x362)+_0x43597f(0x635)]=Math['max'](-0x9*-0xca+-0x281*0x6+-0x7ed*-0x1+0.5,_0x49251a[_0x43597f(0x275)](0x1*-0x16e1+0x716+-0x329*-0x5,_0x4da284)),_0x48f746[_0x43597f(0x228)+'wColo'+'r']=_0x382ef8,_0x48f746[_0x43597f(0x228)+_0x43597f(0x406)]=0x1911+0x47*-0x77+0x7f6;var _0x660769=(0x1254+-0x100f+0x17*-0x19)*_0x4da284,_0x1d3c06=_0x49251a['RCqqG'](-0x2225+-0x336*0x2+0x2899,_0x4da284);_0x48f746['begin'+_0x43597f(0x321)](),_0x48f746['moveT'+'o'](_0x187a60-_0x660769-_0x1d3c06,_0x6a3b0d),_0x48f746[_0x43597f(0x2c4)+'o'](_0x49251a[_0x43597f(0x1ab)](_0x187a60,_0x660769),_0x6a3b0d),_0x48f746['moveT'+'o'](_0x187a60+_0x660769,_0x6a3b0d),_0x48f746[_0x43597f(0x2c4)+'o'](_0x49251a[_0x43597f(0x364)](_0x49251a['wtbEL'](_0x187a60,_0x660769),_0x1d3c06),_0x6a3b0d),_0x48f746['moveT'+'o'](_0x187a60,_0x49251a[_0x43597f(0x268)](_0x6a3b0d-_0x660769,_0x1d3c06)),_0x48f746[_0x43597f(0x2c4)+'o'](_0x187a60,_0x49251a['zbDpq'](_0x6a3b0d,_0x660769)),_0x48f746[_0x43597f(0x444)+'o'](_0x187a60,_0x6a3b0d+_0x660769),_0x48f746[_0x43597f(0x2c4)+'o'](_0x187a60,_0x49251a['PbucO'](_0x49251a[_0x43597f(0x2d7)](_0x6a3b0d,_0x660769),_0x1d3c06)),_0x48f746[_0x43597f(0x303)+'e'](),_0x48f746['begin'+_0x43597f(0x321)](),_0x48f746['arc'](_0x187a60,_0x6a3b0d,_0x49251a['NfQlI'](0x19a6+-0x17e9*0x1+0xde*-0x2+0.6000000000000001,_0x4da284),-0x2*0xe4b+-0x7a*-0x7+0x1940,Math['PI']*(0x2*-0x175+-0xfc5+0x5*0x3bd)),_0x48f746[_0x43597f(0x535)](),_0x48f746[_0x43597f(0x294)+'re']();}function _0x5127ee(_0x37d039){var _0x4c6a22=_0x3f86fb,_0x27a31a=(_0x4c6a22(0x3a3)+'|5|7|'+_0x4c6a22(0x445)+_0x4c6a22(0x47b))[_0x4c6a22(0x61d)]('|'),_0x1472df=0x1*0x71+-0x1*0xb45+0xad4;while(!![]){switch(_0x27a31a[_0x1472df++]){case'0':if(_0x145617['fps'])_0x49251a[_0x4c6a22(0x284)](_0x1c350b,_0xa26c2c+'\x20FPS');continue;case'1':var _0x1c350b=(_0x3c41c0,_0x57a6f1)=>{var _0x3ee2fa=_0x4c6a22;_0x48f746['fillS'+_0x3ee2fa(0x3dd)]=_0x223fb1[_0x3ee2fa(0x65f)](_0x57a6f1,'rgba('+_0x3ee2fa(0x6e0)+_0x3ee2fa(0x63f)+'0,0.7'+'5)'),_0x48f746['fillT'+'ext'](_0x3c41c0,_0xd4f9b7,_0x5dad85),_0x5dad85+=0x380+-0xcb2+0x3*0x316;};continue;case'2':_0x48f746['textA'+_0x4c6a22(0x684)]='left';continue;case'3':_0x49251a[_0x4c6a22(0x1a8)](_0x1c350b,_0x4c6a22(0x58f)+_0x4c6a22(0x3c2)+'R\x20v1.'+'1','#ff6b'+'9d');continue;case'4':_0x48f746['font']=_0x4c6a22(0x4d4)+'2px\x20u'+'i-mon'+_0x4c6a22(0x1e6)+_0x4c6a22(0x47a)+'ospac'+'e';continue;case'5':_0x48f746['textB'+'aseli'+'ne']=_0x4c6a22(0x557);continue;case'6':_0x48f746[_0x4c6a22(0x294)+'re']();continue;case'7':var _0x5dad85=0x880+0x7*0x181+-0x12db,_0xd4f9b7=-0x5*-0x363+0xe2d+-0x1f10;continue;case'8':if(!_0x1ea0a1[_0x4c6a22(0x2af)+'oaded'])_0x1c350b(_0x4c6a22(0x1e1)+_0x4c6a22(0x1eb)+'r\x20gam'+'e…',_0x49251a[_0x4c6a22(0x6fd)]);continue;case'9':_0x48f746['save']();continue;}break;}}function _0x77b0b9(){var _0xac6d36=_0x3f86fb;_0x49251a[_0xac6d36(0x284)](requestAnimationFrame,_0x77b0b9),_0x5eeae0++;var _0x2cc009=performance[_0xac6d36(0x341)]();_0x49251a[_0xac6d36(0x4f2)](_0x2cc009-_0x3b027b,0x1*-0x5b+-0x8db+0xb2a)&&(_0xa26c2c=Math[_0xac6d36(0x365)](_0x49251a['kfPmM'](_0x49251a['xqVJn'](_0x5eeae0,0x1e86+0x1f6f+-0x547*0xb),_0x2cc009-_0x3b027b)),_0x5eeae0=-0x961*-0x3+0x19e4+0x1*-0x3607,_0x3b027b=_0x2cc009);_0x59afc3(),_0x49251a[_0xac6d36(0x27c)](_0x53ff73),_0x48f746[_0xac6d36(0x1a4)+_0xac6d36(0x3d2)](0x14f8+0x1*-0x1553+0x5b,0x243b+0x3e4+-0x281f*0x1,_0x57e4ad['w'],_0x57e4ad['h']);var _0x41166e={'left':0x0,'top':0x0,'right':_0x57e4ad['w'],'bottom':_0x57e4ad['h'],'width':_0x57e4ad['w'],'height':_0x57e4ad['h']};if(_0x145617[_0xac6d36(0x6e7)+'hair'])_0x3dac67(_0x41166e);if(_0x145617['keyst'+_0xac6d36(0x5be)])_0x4885f8(_0x41166e);_0x5127ee(_0x41166e);}var _0x1f1870=document['creat'+'eElem'+_0x3f86fb(0x6e9)]('div');_0x1f1870['id']=_0x49251a['sqSkv'],_0x1f1870[_0x3f86fb(0x2f8)][_0x3f86fb(0x2d3)+'xt']='posit'+_0x3f86fb(0x32a)+_0x3f86fb(0x5d6)+'inset'+_0x3f86fb(0x26c)+'index'+_0x3f86fb(0x590)+'48364'+_0x3f86fb(0x6ff)+_0x3f86fb(0x689)+_0x3f86fb(0x44d)+'s:non'+'e;';var _0x21b0a0=_0x1f1870[_0x3f86fb(0x346)+'hShad'+'ow']({'mode':_0x49251a['vTEzu']});(document['body']||document[_0x3f86fb(0x218)+'entEl'+'ement'])[_0x3f86fb(0x67d)+'dChil'+'d'](_0x1f1870);var _0x47938a=![],_0x46b4cb={};try{if(_0x3f86fb(0x551)===_0x49251a[_0x3f86fb(0x5a6)])_0x46b4cb=JSON['parse'](localStorage[_0x3f86fb(0x4b6)+'em'](_0x49251a[_0x3f86fb(0x385)])||'{}');else for(var _0x343903 of['kour-'+_0x3f86fb(0x2bd)+'0x250'+_0x3f86fb(0x2a7)+'nt',_0x49251a[_0x3f86fb(0x56a)],'kour-'+_0x3f86fb(0x2bd)+_0x3f86fb(0x4d7)+_0x3f86fb(0x2a7)+'nt',_0x3f86fb(0x6c9)+_0x3f86fb(0x64d)+'-banr'+'s']){var _0x584e36=_0x49693f['getEl'+_0x3f86fb(0x6c2)+_0x3f86fb(0x6df)](_0x343903);if(_0x584e36&&_0x49251a[_0x3f86fb(0x350)](_0x343903,'fulls'+_0x3f86fb(0x64d)+_0x3f86fb(0x6bc)+'s')){var _0x51298d=_0x584e36[_0x3f86fb(0x6d5)+_0x3f86fb(0x3c1)];for(var _0xdb665c=-0x82*-0x37+0xe77+-0x2a65;_0x49251a['UgwxW'](_0xdb665c,_0x51298d['lengt'+'h']);_0xdb665c++){if(_0x51298d[_0xdb665c]['id']&&_0x51298d[_0xdb665c]['id']['index'+'Of'](_0x3f86fb(0x2da)+_0x3f86fb(0x26a))===0xf15+-0x1*-0xac1+-0x1*0x19d6)_0x51298d[_0xdb665c]['style'][_0x3f86fb(0x560)+'ay']=_0x3f86fb(0x549);}}else{if(_0x584e36)_0x584e36[_0x3f86fb(0x2f8)][_0x3f86fb(0x560)+'ay']=_0x49251a['IbtDf'];}}}catch(_0x51ee5e){}function _0x567a79(){var _0x4bdc6a=_0x3f86fb;try{'BGzgf'!=='xSvFu'?localStorage[_0x4bdc6a(0x5eb)+'em'](_0x4bdc6a(0x426)+_0x4bdc6a(0x4eb)+_0x4bdc6a(0x2e5)+'v1',JSON['strin'+'gify'](_0x46b4cb)):_0x7bdc60(_0x4827f9,_0x428344,_0x50004e,_0x223fb1['rGqKI']);}catch(_0x42a93c){}}function _0x13f390(_0x1f4f98,_0x2a3d8e){var _0x340735=_0x3f86fb,_0xb75d3a={'cFnSR':_0x223fb1['fMFvk']};if(_0x223fb1['qxEgY']!==_0x223fb1['dNcHr']){var _0x4fc089=(_0x340735(0x1a6)+_0x340735(0x473)+'2|1')[_0x340735(0x61d)]('|'),_0x355e27=0x42c+0x5f2*-0x1+0x1c6;while(!![]){switch(_0x4fc089[_0x355e27++]){case'0':_0x39cef0[_0x340735(0x4e8)+'tribu'+'te'](_0x340735(0x675)+'check'+'ed',String(!!_0x1f4f98));continue;case'1':return _0x39cef0;case'2':_0x39cef0[_0x340735(0x1c4)+'ck']=_0x51835d=>{var _0x26dc08=_0x340735;_0x51835d[_0x26dc08(0x556)+_0x26dc08(0x257)+_0x26dc08(0x1d3)]();var _0x570da5=_0x39cef0['getAt'+_0x26dc08(0x1df)+'te'](_0xb75d3a['cFnSR'])!=='true';_0x39cef0[_0x26dc08(0x4e8)+_0x26dc08(0x1df)+'te'](_0xb75d3a[_0x26dc08(0x4ff)],String(_0x570da5)),_0x2a3d8e(_0x570da5);};continue;case'3':var _0x39cef0=document[_0x340735(0x44f)+_0x340735(0x5ff)+'ent']('butto'+'n');continue;case'4':_0x39cef0[_0x340735(0x4e8)+_0x340735(0x1df)+'te'](_0x340735(0x430),_0x223fb1[_0x340735(0x387)]);continue;case'5':_0x39cef0[_0x340735(0x6dd)+_0x340735(0x3e9)]=_0x223fb1[_0x340735(0x60e)];continue;case'6':_0x39cef0[_0x340735(0x2a8)]=_0x340735(0x618)+'n';continue;}break;}}else{var _0x23270f=_0x2d627f[_0x340735(0x5b3)](_0x4c8e05);_0x176602['save'](),_0x5e698f[_0x340735(0x1f1)+_0x340735(0x321)]();if(_0x949a[_0x340735(0x365)+_0x340735(0x3d2)])_0x42657c['round'+_0x340735(0x3d2)](_0xec85fe,_0x383e22,_0x5c9120,_0x527c84,_0x223fb1[_0x340735(0x19f)](-0xade*-0x3+-0x1c56+-0x43d,_0x1adb80));else _0x3bd734[_0x340735(0x3e5)](_0x39c69b,_0x153e74,_0x2cc113,_0x4b5538);_0x631ad5[_0x340735(0x431)+'tyle']=_0x23270f?_0x223fb1[_0x340735(0x66f)]:_0x340735(0x6d4)+_0x340735(0x35c)+'16,0.'+'7)',_0x37b66e[_0x340735(0x535)](),_0x3f9621[_0x340735(0x362)+'idth']=0xf96+0x1b2f+-0x2ac4,_0x290afb[_0x340735(0x303)+'eStyl'+'e']=_0x23270f?_0x214ab3:_0x223fb1['TFRAa'],_0x3c534c[_0x340735(0x303)+'e'](),_0x23270f&&(_0x212e88['shado'+_0x340735(0x636)+'r']=_0x3c637f,_0x12a051[_0x340735(0x228)+_0x340735(0x406)]=0x1*0x2216+-0xd43+-0x14c5,_0x1fb9b6[_0x340735(0x535)](),_0x267812['shado'+_0x340735(0x406)]=0x813+0x1*-0x1279+0xa66),_0x591f11['fillS'+_0x340735(0x3dd)]=_0x23270f?_0x223fb1['OFPWW']:_0x340735(0x6d4)+_0x340735(0x6e0)+'35,24'+_0x340735(0x65c)+')',_0x11fa9d[_0x340735(0x2cf)+'lign']=_0x340735(0x288)+'r',_0x176da1[_0x340735(0x699)+_0x340735(0x1a9)+'ne']=_0x223fb1['krhug'],_0x3709d6[_0x340735(0x335)]=_0x223fb1['JEpms'](_0x223fb1['taulQ']('700\x20',_0x2e485b[_0x340735(0x365)]((0x16b6+0x159+0x2ab*-0x9)*_0x47c1e5)),'px\x20ui'+'-sans'+_0x340735(0x480)+_0x340735(0x642)+'tem-u'+_0x340735(0x21f)+'s-ser'+'if'),_0x382fb1[_0x340735(0x451)+_0x340735(0x3c8)](_0x57dcc0,_0x256b40+_0x30af94/(-0x1*0x1459+0x22bc+-0xe61),_0x223fb1['ctUoG'](_0x5a51c8,_0x223fb1['AQdIK'](_0x448d6c,-0x2*-0x10d3+-0x515*-0x3+-0x30e3))-(_0x2eee2a?_0x223fb1['ylvbF'](-0xd09+0x22a*0x5+0x34*0xb,_0x21ac3b):-0x1e9e+-0x71a*0x4+0x3b06)),_0x472fec&&(_0x1c84ba[_0x340735(0x335)]=_0x223fb1['ctUoG'](_0x223fb1[_0x340735(0x1dc)]+_0x25317a['round']((0x38*0x77+-0x15*0x1f+-0x1774)*_0x4b20e9),_0x340735(0x587)+_0x340735(0x5ae)+'-seri'+_0x340735(0x642)+_0x340735(0x356)+_0x340735(0x21f)+_0x340735(0x53d)+'if'),_0x2885d1[_0x340735(0x431)+_0x340735(0x3dd)]=_0x23270f?_0x340735(0x21b):_0x340735(0x6d4)+'255,2'+_0x340735(0x63f)+_0x340735(0x6bd)+'5)',_0x5de47b['fillT'+_0x340735(0x3c8)](_0x1bbeb1,_0x1cd33f+_0x223fb1['GWiPq'](_0x2f797d,0x1d09+-0x23*0x7f+0x2*-0x5d5),_0x492731+_0x42ad32/(-0x69e+-0x75f*0x3+0x1cbd)+(-0x1446+-0x2*-0x3df+0xc90)*_0x417425)),_0x2faff3[_0x340735(0x294)+'re']();}}function _0x2fb5fd(_0x226196,_0x1673b3,_0x21d809,_0x4f985f,_0x19fcf7){var _0x30b5bc=_0x3f86fb,_0x39cd51={'fLHmL':function(_0x3c1ac9,_0x4a1cd9){return _0x3c1ac9+_0x4a1cd9;},'VjgrY':function(_0x127020,_0x46f354){return _0x127020+_0x46f354;},'WtjRa':_0x49251a[_0x30b5bc(0x36a)],'MFXBG':_0x30b5bc(0x541),'hyYSp':function(_0x331763,_0x1ea9bd,_0x5174fa,_0x48ce8c){return _0x331763(_0x1ea9bd,_0x5174fa,_0x48ce8c);},'WGJTM':_0x49251a['Mkcqx'],'zxBSl':function(_0x13b667,_0x200c81){return _0x13b667(_0x200c81);},'hMPuC':function(_0x4fe238,_0x272121){return _0x49251a['pzlkM'](_0x4fe238,_0x272121);},'qsbEG':function(_0x1fa570,_0x582303){return _0x1fa570-_0x582303;}},_0x4b18e2=document['creat'+'eElem'+_0x30b5bc(0x6e9)](_0x30b5bc(0x5fa));_0x4b18e2['class'+_0x30b5bc(0x3e9)]=_0x30b5bc(0x3f7)+_0x30b5bc(0x552);var _0x5a2db2=document[_0x30b5bc(0x44f)+_0x30b5bc(0x5ff)+_0x30b5bc(0x6e9)](_0x49251a[_0x30b5bc(0x6af)]);_0x5a2db2['type']='range',_0x5a2db2[_0x30b5bc(0x6dd)+_0x30b5bc(0x3e9)]='sk-sl'+_0x30b5bc(0x2ec),_0x5a2db2['min']=_0x1673b3,_0x5a2db2[_0x30b5bc(0x227)]=_0x21d809,_0x5a2db2[_0x30b5bc(0x4df)]=_0x4f985f,_0x5a2db2['value']=_0x226196;var _0x47ec89=document['creat'+_0x30b5bc(0x5ff)+'ent'](_0x49251a['hQoHH']);_0x47ec89['class'+_0x30b5bc(0x3e9)]=_0x30b5bc(0x4b7)+'l',_0x47ec89[_0x30b5bc(0x48d)+_0x30b5bc(0x30b)+'t']=_0x49251a[_0x30b5bc(0x2e9)](String,_0x226196);var _0x20fc63=()=>{var _0x5476c6=_0x30b5bc,_0x4562c3={'fRdKx':function(_0x557326,_0x40864d){return _0x557326+_0x40864d;},'LHYAU':function(_0x50fcfd,_0x125662){var _0x2fa89b=_0x3f95;return _0x39cd51[_0x2fa89b(0x1d4)](_0x50fcfd,_0x125662);},'cjFqp':function(_0xb906b2,_0x33baf5){return _0x39cd51['VjgrY'](_0xb906b2,_0x33baf5);},'OhAKx':function(_0x1eb1d4,_0x2ebc28){return _0x1eb1d4+_0x2ebc28;},'ltRDQ':_0x39cd51['WtjRa'],'ZVlfn':_0x5476c6(0x45c)+'me\x20','gNDQn':'loade'+'d','qKkAe':_0x39cd51[_0x5476c6(0x47d)],'uSYdX':_0x5476c6(0x549),'GfJgB':function(_0x599ae2,_0x2f206f,_0x29dc69,_0x40691f){var _0x4a1d56=_0x5476c6;return _0x39cd51[_0x4a1d56(0x1f6)](_0x599ae2,_0x2f206f,_0x29dc69,_0x40691f);},'DtvyX':'240\x20F'+_0x5476c6(0x58b)+_0x5476c6(0x239),'lhCiw':_0x39cd51[_0x5476c6(0x4cf)]};if('mQEpr'==='mQEpr')_0x47ec89['textC'+_0x5476c6(0x30b)+'t']=_0x39cd51[_0x5476c6(0x34a)](String,_0x5a2db2['value']),_0x4b18e2['style']['setPr'+_0x5476c6(0x23b)+'y']('--p',_0x39cd51['VjgrY'](_0x39cd51[_0x5476c6(0x46a)](_0x39cd51[_0x5476c6(0x506)](_0x5a2db2[_0x5476c6(0x6ea)],_0x1673b3),_0x21d809-_0x1673b3)*(-0x6*0xf7+-0x662+0x4*0x324),'%'));else{var _0xded423=_0x334d3f[_0x5476c6(0x448)+_0x5476c6(0x274)]?_0x5476c6(0x25f)+_0x5476c6(0x25e)+_0x5476c6(0x596)+_0x5476c6(0x548)+'only,'+_0x5476c6(0x67f)+_0x5476c6(0x627)+'(relo'+_0x5476c6(0x4aa)+_0x5476c6(0x2f7)+')':_0x30dded['uwmk']?_0x4562c3['fRdKx'](_0x4562c3[_0x5476c6(0x231)](_0x4562c3[_0x5476c6(0x2e3)](_0x4562c3['OhAKx'](_0x5476c6(0x521)+_0x5476c6(0x41b)+'\x20',_0x2af88d['hooks'+'Ok']),'/')+_0x5b316c[_0x5476c6(0x515)+'Total']+_0x4562c3[_0x5476c6(0x256)]+_0x4562c3[_0x5476c6(0x2e0)],_0x2c23ae['gameL'+'oaded']?_0x4562c3['gNDQn']:'loadi'+'ng')+('\x20|\x20sh'+'ooter'+'\x20')+(_0x1955be[_0x5476c6(0x2b7)+_0x5476c6(0x25c)]?_0x4562c3[_0x5476c6(0x1b4)]:_0x4562c3['uSYdX']),_0x5476c6(0x2ba)+_0x5476c6(0x702)+'t\x20')+(_0x31c7e2[_0x5476c6(0x1c1)+_0x5476c6(0x37e)]?'held':'none'):_0x5476c6(0x521)+_0x5476c6(0x4b1)+_0x5476c6(0x328)+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x5476c6(0x1fc)+_0x5476c6(0x5bd)+_0x5476c6(0x4e4)+'ipt)';if(_0x1f881c['lastE'+_0x5476c6(0x567)])_0xded423+=_0x5476c6(0x680)+_0x5476c6(0x324)+_0x37591a[_0x5476c6(0x52e)+_0x5476c6(0x567)];return _0x245d03('Statu'+'s',_0xded423,_0x26f3ed[_0x5476c6(0x333)],null,[_0x4562c3[_0x5476c6(0x27f)](_0x82a27a,_0x4562c3[_0x5476c6(0x1db)],_0x4562c3[_0x5476c6(0x55c)],_0x4827e8('Apply',()=>{var _0x1747cf=_0x5476c6;try{if(_0x2afaf1)_0x5a6ac9[_0x1747cf(0x6b7)](_0x1747cf(0x45d)+_0x1747cf(0x24f)+_0x1747cf(0x466)+_0x1747cf(0x3b3)+_0x1747cf(0x6d8),'set_t'+'arget'+'Frame'+'Rate',[0x1ebc+0x2f*0x77+-0x33a5]);}catch(_0x1180df){}}))]);}};return _0x5a2db2['oninp'+'ut']=()=>{var _0x3cb393=_0x30b5bc;_0x223fb1[_0x3cb393(0x708)](_0x20fc63),_0x19fcf7(_0x223fb1[_0x3cb393(0x464)](Number,_0x5a2db2[_0x3cb393(0x6ea)]));},_0x20fc63(),_0x4b18e2[_0x30b5bc(0x67d)+'d'](_0x5a2db2,_0x47ec89),_0x4b18e2;}function _0x2a82de(_0x250299,_0x512e49){var _0x209792=_0x3f86fb;if(_0x223fb1[_0x209792(0x6ed)](_0x209792(0x5b5),_0x223fb1[_0x209792(0x389)])){var _0x480969=document[_0x209792(0x44f)+'eElem'+_0x209792(0x6e9)](_0x223fb1[_0x209792(0x2b0)]);return _0x480969['type']='color',_0x480969[_0x209792(0x6dd)+_0x209792(0x3e9)]='sk-co'+'lor',_0x480969[_0x209792(0x6ea)]=/^#[0-9a-f]{6}$/i['test'](_0x250299)?_0x250299:_0x223fb1[_0x209792(0x5d9)],_0x480969[_0x209792(0x3d8)+'ut']=()=>_0x512e49(_0x480969['value']),_0x480969;}else try{var _0x1b8f5a=_0x3d450e&&(_0x212397[_0x209792(0x251)+'ge']||_0x47a49a[_0x209792(0x258)]&&_0x1b5c66[_0x209792(0x258)]['messa'+'ge'])||_0x223fb1['ZHGXZ'];if(_0x19fd5f&&_0x30d796[_0x209792(0x4d1)+_0x209792(0x5e4)])_0x1b8f5a+=_0x223fb1[_0x209792(0x638)](_0x223fb1[_0x209792(0x35f)]+_0x223fb1['cCBBY'](_0x31ef97,_0x3fbea0['filen'+'ame'])[_0x209792(0x61d)]('/')['pop']()+':',_0xcc2d17[_0x209792(0x493)+'o']||'?');_0x3df67c['lastE'+'rror']=_0x52e041(_0x1b8f5a)['slice'](0x1*0x2515+-0x1730+-0xde5,-0x2569+-0x79*0x5+-0x2*-0x1433);}catch(_0x5c86d7){}}function _0x4abc2f(_0x24649c,_0x14459b,_0x1abcf8){var _0x460b32=_0x3f86fb;if(_0x223fb1[_0x460b32(0x229)](_0x460b32(0x55a),_0x223fb1['PUzyI']))try{_0x127755[_0x460b32(0x5eb)+'em'](_0x460b32(0x426)+_0x460b32(0x4eb)+_0x460b32(0x2e5)+'v1',_0x11b55d[_0x460b32(0x370)+_0x460b32(0x447)](_0x53c021));}catch(_0x5e4ff7){}else{var _0x51169f=_0x223fb1[_0x460b32(0x48f)][_0x460b32(0x61d)]('|'),_0x1cd362=0x1*0x107e+-0x9f3+-0x68b;while(!![]){switch(_0x51169f[_0x1cd362++]){case'0':return _0x3a43aa;case'1':for(var [_0x15b35a,_0x3edc1c]of _0x14459b){var _0x5dc254=document['creat'+'eElem'+_0x460b32(0x6e9)](_0x223fb1[_0x460b32(0x368)]);_0x5dc254['value']=_0x15b35a,_0x5dc254['textC'+_0x460b32(0x30b)+'t']=_0x3edc1c,_0x3a43aa[_0x460b32(0x67d)+_0x460b32(0x23c)+'d'](_0x5dc254);}continue;case'2':var _0x3a43aa=document['creat'+_0x460b32(0x5ff)+_0x460b32(0x6e9)]('selec'+'t');continue;case'3':_0x3a43aa[_0x460b32(0x6ea)]=_0x24649c;continue;case'4':_0x3a43aa[_0x460b32(0x6dd)+_0x460b32(0x3e9)]=_0x460b32(0x503)+_0x460b32(0x485);continue;case'5':_0x3a43aa['oncha'+'nge']=()=>_0x1abcf8(_0x3a43aa[_0x460b32(0x6ea)]);continue;}break;}}}function _0x449a17(_0x3b6481,_0x2aa60b){var _0x53f40c=_0x3f86fb,_0x24133b={'NuvhI':_0x53f40c(0x2d2)+'|3|1|'+'0','EcrLT':_0x53f40c(0x2f0)+'9d'};if(_0x223fb1[_0x53f40c(0x28d)](_0x53f40c(0x2fe),_0x223fb1['zHTnf'])){var _0x1ac272=_0x24133b[_0x53f40c(0x489)][_0x53f40c(0x61d)]('|'),_0x52e95b=0x1ee8+0x1b9+-0x20a1;while(!![]){switch(_0x1ac272[_0x52e95b++]){case'0':return _0x5e7614;case'1':_0x5e7614['oninp'+'ut']=()=>_0x2e92a5(_0x5e7614['value']);continue;case'2':_0x5e7614['type']=_0x53f40c(0x1ff);continue;case'3':_0x5e7614['value']=/^#[0-9a-f]{6}$/i[_0x53f40c(0x62e)](_0x5244af)?_0x540d6f:_0x24133b['EcrLT'];continue;case'4':var _0x5e7614=_0x1eed87['creat'+_0x53f40c(0x5ff)+_0x53f40c(0x6e9)]('input');continue;case'5':_0x5e7614[_0x53f40c(0x6dd)+_0x53f40c(0x3e9)]='sk-co'+_0x53f40c(0x331);continue;}break;}}else{var _0x1ac4fd=_0x223fb1['KzDDg']['split']('|'),_0x487109=0x1127+-0xcf7*-0x1+-0x505*0x6;while(!![]){switch(_0x1ac4fd[_0x487109++]){case'0':return _0x4c7771;case'1':_0x4c7771['class'+_0x53f40c(0x3e9)]='sk-bt'+'n';continue;case'2':_0x4c7771['type']=_0x223fb1[_0x53f40c(0x679)];continue;case'3':_0x4c7771[_0x53f40c(0x48d)+_0x53f40c(0x30b)+'t']=_0x3b6481;continue;case'4':_0x4c7771[_0x53f40c(0x1c4)+'ck']=_0x137afb=>{var _0x505b0a=_0x53f40c;_0x137afb[_0x505b0a(0x556)+'ropag'+_0x505b0a(0x1d3)](),_0x2aa60b();};continue;case'5':var _0x4c7771=document['creat'+_0x53f40c(0x5ff)+_0x53f40c(0x6e9)](_0x223fb1[_0x53f40c(0x679)]);continue;}break;}}}function _0x13059d(_0x175238,_0x35f48c,_0x3c0848){var _0x59f272=_0x3f86fb,_0x531859=document['creat'+_0x59f272(0x5ff)+_0x59f272(0x6e9)](_0x223fb1[_0x59f272(0x452)]);_0x531859[_0x59f272(0x6dd)+_0x59f272(0x3e9)]=_0x59f272(0x21a)+'l';var _0x138189=document['creat'+_0x59f272(0x5ff)+'ent'](_0x223fb1[_0x59f272(0x6ce)]);_0x138189[_0x59f272(0x6dd)+_0x59f272(0x3e9)]=_0x59f272(0x1a5)+'bel',_0x138189['textC'+_0x59f272(0x30b)+'t']=_0x175238;if(_0x35f48c){var _0x19aa05=document[_0x59f272(0x44f)+_0x59f272(0x5ff)+_0x59f272(0x6e9)](_0x59f272(0x355));_0x19aa05[_0x59f272(0x6dd)+_0x59f272(0x3e9)]=_0x59f272(0x4bb)+'nt',_0x19aa05[_0x59f272(0x48d)+_0x59f272(0x30b)+'t']=_0x35f48c,_0x138189[_0x59f272(0x67d)+_0x59f272(0x23c)+'d'](_0x19aa05);}return _0x531859[_0x59f272(0x67d)+'d'](_0x138189,_0x3c0848),_0x531859;}function _0x55853a(_0x8c13df,_0x4a324d){var _0xfbae39=_0x3f86fb,_0x53c539=document[_0xfbae39(0x44f)+_0xfbae39(0x5ff)+_0xfbae39(0x6e9)](_0x223fb1['OfqgW']);return _0x53c539['class'+_0xfbae39(0x3e9)]=_0x223fb1[_0xfbae39(0x5d8)]+(_0x4a324d?_0xfbae39(0x35b):''),_0x53c539['textC'+_0xfbae39(0x30b)+'t']=_0x8c13df,_0x53c539;}function _0x28b990(_0x5e02f0,_0x3eb370,_0x3e09bf,_0x399e48,_0x496719){var _0x314611=_0x3f86fb,_0x4c678a={'RcAIc':function(_0x39508f,_0x2d1334){return _0x39508f(_0x2d1334);}},_0x475731=document[_0x314611(0x44f)+_0x314611(0x5ff)+'ent'](_0x49251a['CYeTn']);_0x475731[_0x314611(0x6dd)+_0x314611(0x3e9)]=_0x49251a[_0x314611(0x3f8)]('sk-ca'+'rd',_0x3e09bf?_0x314611(0x232):'');var _0x275cec=document[_0x314611(0x44f)+_0x314611(0x5ff)+'ent']('div');_0x275cec['class'+_0x314611(0x3e9)]=_0x49251a[_0x314611(0x54d)];var _0x1e2180=document['creat'+'eElem'+_0x314611(0x6e9)](_0x49251a[_0x314611(0x5a5)]);_0x1e2180['class'+'Name']='sk-ca'+_0x314611(0x52b)+_0x314611(0x462);var _0x1f1803=document['creat'+'eElem'+_0x314611(0x6e9)]('stron'+'g');_0x1f1803[_0x314611(0x48d)+'onten'+'t']=_0x5e02f0,_0x1e2180[_0x314611(0x67d)+'dChil'+'d'](_0x1f1803);if(_0x399e48){if(_0x49251a['YGGxP']==='Paguu')_0x226f28[_0x314611(0x4be)+'or']=_0x2c4f1c,_0x223fb1['aRiIA'](_0x579caf);else{var _0x30254f=_0x13f390(_0x3e09bf,_0x51e1da=>{var _0x561e36=_0x314611;_0x475731['class'+'List'][_0x561e36(0x3f2)+'e']('on',_0x51e1da),_0x4c678a['RcAIc'](_0x399e48,_0x51e1da);});_0x275cec[_0x314611(0x67d)+'d'](_0x1e2180,_0x30254f);}}else _0x275cec[_0x314611(0x67d)+_0x314611(0x23c)+'d'](_0x1e2180);_0x475731[_0x314611(0x67d)+_0x314611(0x23c)+'d'](_0x275cec);if(_0x496719&&_0x496719['lengt'+'h']){if(_0x314611(0x683)!=='IpOvs'){var _0x1fabc9=document['creat'+_0x314611(0x5ff)+_0x314611(0x6e9)](_0x49251a[_0x314611(0x5a5)]);_0x1fabc9[_0x314611(0x6dd)+_0x314611(0x3e9)]=_0x49251a['ZMcxa'];var _0x3265a8=document[_0x314611(0x44f)+_0x314611(0x5ff)+_0x314611(0x6e9)](_0x49251a[_0x314611(0x5a5)]);_0x3265a8[_0x314611(0x6dd)+'Name']='sk-md'+_0x314611(0x20c),_0x3265a8[_0x314611(0x48d)+'onten'+'t']=_0x3eb370,_0x1fabc9['appen'+'dChil'+'d'](_0x3265a8);for(var _0x2be589 of _0x496719)_0x1fabc9['appen'+'dChil'+'d'](_0x2be589);_0x475731[_0x314611(0x67d)+'dChil'+'d'](_0x1fabc9);}else try{var _0x5c5591=new _0x239820(_0x6a2123)[_0x314611(0x5f7)+_0x314611(0x249)](_0x31a013,_0x2416a6);_0x2ebd7b[_0x314611(0x1f8)](_0x2b858b,_0x5c5591!==_0x5a9ffb?_0x5c5591[_0x314611(0x4c3)]():null);}catch(_0x599156){_0x91fab7[_0x314611(0x1f8)](_0x408bd9,null);}}return _0x475731;}var _0x1e9f78=[{'id':'comba'+'t','label':_0x49251a[_0x3f86fb(0x440)]},{'id':_0x3f86fb(0x3b8),'label':_0x49251a[_0x3f86fb(0x665)]},{'id':'visua'+'l','label':_0x3f86fb(0x2ea)+'l'},{'id':_0x3f86fb(0x344),'label':_0x3f86fb(0x394)},{'id':_0x3f86fb(0x293),'label':_0x3f86fb(0x65a)+'y'}];function _0x4ba096(){var _0x143048=_0x3f86fb,_0x252812=_0x1ea0a1[_0x143048(0x448)+_0x143048(0x274)]?_0x49251a[_0x143048(0x6fc)]:_0x1ea0a1['uwmk']?_0x49251a[_0x143048(0x2eb)](_0x49251a[_0x143048(0x1a0)](_0x49251a[_0x143048(0x645)](_0x49251a['LNWaa']('UWMK\x20'+_0x143048(0x41b)+'\x20',_0x1ea0a1[_0x143048(0x515)+'Ok']),'/')+_0x1ea0a1['hooks'+_0x143048(0x409)],_0x143048(0x345)+'s')+(_0x143048(0x45c)+_0x143048(0x1a7))+(_0x1ea0a1[_0x143048(0x2af)+'oaded']?'loade'+'d':_0x143048(0x32d)+'ng')+('\x20|\x20sh'+_0x143048(0x543)+'\x20'),_0x1ea0a1[_0x143048(0x2b7)+'ers']?_0x143048(0x541):_0x143048(0x549))+_0x49251a['koaCr']+(_0x1ea0a1['movem'+'ents']?_0x49251a['jqcrj']:_0x143048(0x549)):_0x49251a[_0x143048(0x3b9)];if(_0x1ea0a1['lastE'+_0x143048(0x567)])_0x252812+=_0x49251a[_0x143048(0x2d7)]('\x20|\x20ER'+'R:\x20',_0x1ea0a1['lastE'+_0x143048(0x567)]);return _0x28b990('Statu'+'s',_0x252812,_0x1ea0a1[_0x143048(0x333)],null,[_0x13059d(_0x49251a[_0x143048(0x48c)],_0x49251a[_0x143048(0x20f)],_0x449a17(_0x49251a[_0x143048(0x6a1)],()=>{var _0x2f8073=_0x143048;try{if(_0x2898bd)_0x2898bd[_0x2f8073(0x6b7)]('Unity'+_0x2f8073(0x24f)+'e.App'+'licat'+_0x2f8073(0x6d8),_0x2f8073(0x443)+'arget'+_0x2f8073(0x33b)+'Rate',[-0x1808*0x1+-0x709+0x2001]);}catch(_0x38bf8d){}}))]);}function _0x14417a(_0x543a79){var _0x37dadf=_0x3f86fb,_0x4e2462={'zgFCJ':'2|6|3'+_0x37dadf(0x473)+'1|7|5','osHeF':_0x223fb1[_0x37dadf(0x2a4)],'wzoDz':_0x37dadf(0x618)+'n','UOrHt':function(_0xe639bd,_0x2588f8,_0x46ef51){var _0x148050=_0x37dadf;return _0x223fb1[_0x148050(0x5cd)](_0xe639bd,_0x2588f8,_0x46ef51);},'YbBgx':_0x37dadf(0x39f),'QpRbc':function(_0x44fe67){return _0x223fb1['RUgnN'](_0x44fe67);},'mtDpw':_0x223fb1[_0x37dadf(0x2c1)],'okATk':function(_0x115bb0,_0x1f7484){return _0x115bb0===_0x1f7484;},'wRZHe':function(_0x44cee2,_0x48d933){return _0x44cee2(_0x48d933);},'SyThp':'vQaXK','LhEUK':_0x223fb1[_0x37dadf(0x3e8)],'Cczha':function(_0x5bcfe0,_0x3fe6ef){return _0x223fb1['xhOuH'](_0x5bcfe0,_0x3fe6ef);},'WNjJx':'sAJYx','OKkqh':_0x223fb1[_0x37dadf(0x68d)],'NIksC':_0x223fb1['OgEbl'],'oRPTK':_0x223fb1[_0x37dadf(0x558)],'iBDht':function(_0x25e38d){var _0x5e01d6=_0x37dadf;return _0x223fb1[_0x5e01d6(0x1e7)](_0x25e38d);},'zeMOY':function(_0x1465e3,_0x3c3a54){return _0x1465e3===_0x3c3a54;},'mdiOp':_0x223fb1[_0x37dadf(0x367)]};if(_0x223fb1[_0x37dadf(0x1d7)](_0x37dadf(0x32b),'MPRcy')){if(_0x543a79===_0x223fb1['PXBDu'])return[_0x4ba096(),_0x223fb1[_0x37dadf(0x455)](_0x28b990,_0x223fb1['JSBlF'],_0x223fb1['nSdbc'],_0x145617[_0x37dadf(0x291)],_0x173228=>{var _0x2c3797=_0x37dadf;if('jPRzO'!=='jPRzO'){var _0x34ba6f=_0x4e2462[_0x2c3797(0x59c)][_0x2c3797(0x61d)]('|'),_0x6be0ba=0xba1+-0x1451+0x8b0;while(!![]){switch(_0x34ba6f[_0x6be0ba++]){case'0':_0x170cd5['inner'+'HTML']=_0x2c3797(0x416)+'l>'+_0x3dff5c[_0x2c3797(0x28f)]+_0x4e2462[_0x2c3797(0x617)];continue;case'1':_0x170cd5[_0x2c3797(0x1c4)+'ck']=(_0x521a3f=>()=>_0x745fde(_0x521a3f))(_0x100cdf['id']);continue;case'2':var _0x170cd5=_0x1a9910[_0x2c3797(0x44f)+_0x2c3797(0x5ff)+_0x2c3797(0x6e9)]('butto'+'n');continue;case'3':_0x170cd5['class'+_0x2c3797(0x3e9)]=_0x2c3797(0x314)+'b';continue;case'4':_0x170cd5[_0x2c3797(0x44a)]=_0x37120c['label'];continue;case'5':_0x355f13['appen'+'dChil'+'d'](_0x170cd5);continue;case'6':_0x170cd5[_0x2c3797(0x2a8)]=_0x4e2462[_0x2c3797(0x4b2)];continue;case'7':_0x5494a9['set'](_0x38a81d['id'],_0x170cd5);continue;}break;}}else _0x145617[_0x2c3797(0x291)]=_0x173228,_0x29e202(),_0x4e2462[_0x2c3797(0x482)](_0x284ad4,_0x2c3797(0x291),_0x173228);},[]),_0x223fb1['YhZli'](_0x28b990,_0x223fb1[_0x37dadf(0x212)],'Skips'+_0x37dadf(0x5c4)+'ilMot'+_0x37dadf(0x1f2)+_0x37dadf(0x4ca)+_0x37dadf(0x51c)+'\x20reco'+_0x37dadf(0x414)+_0x37dadf(0x531)+'\x20neve'+_0x37dadf(0x4ef)+_0x37dadf(0x230),_0x145617[_0x37dadf(0x628)+_0x37dadf(0x5d4)],_0x4651aa=>{var _0xe2ef11=_0x37dadf,_0x4df311={'klYfR':_0xe2ef11(0x291)};_0x4e2462[_0xe2ef11(0x1c8)]==='lhzSe'?(_0x3dfccc['god']=_0x543350,_0x369716(),_0xf3dfda(_0x4df311['klYfR'],_0x20f567)):(_0x145617['noRec'+'oil']=_0x4651aa,_0x4e2462[_0xe2ef11(0x63a)](_0x29e202),_0x284ad4('noRec'+_0xe2ef11(0x5d4),_0x4651aa));},[]),_0x28b990(_0x37dadf(0x438)+'read',_0x37dadf(0x502)+'s\x20spr'+_0x37dadf(0x6e1)+_0x37dadf(0x6b4)+_0x37dadf(0x609)+_0x37dadf(0x68b)+_0x37dadf(0x495)+_0x37dadf(0x6b1)+_0x37dadf(0x651)+_0x37dadf(0x5b6)+_0x37dadf(0x36b)+_0x37dadf(0x437),_0x145617['noSpr'+_0x37dadf(0x3d0)],_0x5a462d=>{_0x145617['noSpr'+'ead']=_0x5a462d,_0x29e202();},[]),_0x28b990(_0x37dadf(0x6ac)+'\x20Fire'+'\x20[EXP'+']',_0x223fb1[_0x37dadf(0x6da)],_0x145617[_0x37dadf(0x3e7)+_0x37dadf(0x4de)],_0x31ba99=>{var _0x407ea0=_0x37dadf;_0x145617['rapid'+_0x407ea0(0x4de)]=_0x31ba99,_0x29e202();},[]),_0x223fb1['QqNaB'](_0x28b990,_0x37dadf(0x1e9)+_0x37dadf(0x6b8)+'P]',_0x223fb1[_0x37dadf(0x685)],_0x145617['damag'+_0x37dadf(0x1dd)],_0x3c123d=>{var _0x2305e1=_0x37dadf;_0x4e2462['okATk']('FSJHV','FSJHV')?(_0x145617[_0x2305e1(0x32e)+_0x2305e1(0x1dd)]=_0x3c123d,_0x29e202()):(_0x5e1be7['textC'+_0x2305e1(0x30b)+'t']=_0x4b9785(_0x50f644[_0x2305e1(0x6ea)]),_0x32afdf['style'][_0x2305e1(0x6c6)+'opert'+'y'](_0x4e2462['mtDpw'],(_0x41bf90[_0x2305e1(0x6ea)]-_0x5055b2)/(_0x29d614-_0x410c84)*(0x322+-0xc12+0x954)+'%'));},[_0x13059d(_0x223fb1['sBeTt'],null,_0x2fb5fd(_0x145617[_0x37dadf(0x32e)+'eValu'+'e'],0x4b1*-0x1+-0x7e*0x1e+0x137f,0x1a8d*-0x1+0x1*-0x26ad+-0x432e*-0x1,0x1739+0x1ffd+0xc7*-0x47,_0x1a16c1=>{var _0x35e655=_0x37dadf;_0x4e2462[_0x35e655(0x644)]!=='vQaXK'?_0x4e2462[_0x35e655(0x2ab)](_0x4e33ab,!_0x966b2e):(_0x145617[_0x35e655(0x32e)+_0x35e655(0x4d5)+'e']=_0x1a16c1,_0x4e2462[_0x35e655(0x63a)](_0x29e202));}))]),_0x28b990('Infin'+'ite\x20A'+_0x37dadf(0x517)+_0x37dadf(0x5fe),'Refil'+'ls\x20th'+'e\x20wea'+'pon\x27s'+_0x37dadf(0x38d)+_0x37dadf(0x429)+_0x37dadf(0x625)+_0x37dadf(0x534)+'every'+_0x37dadf(0x421)+'s.',_0x145617['infAm'+_0x37dadf(0x1cf)],_0x95f606=>{var _0x1d64ad=_0x37dadf;_0x145617[_0x1d64ad(0x3c3)+_0x1d64ad(0x1cf)]=_0x95f606,_0x29e202();},[_0x223fb1[_0x37dadf(0x407)](_0x55853a,_0x37dadf(0x4da)+_0x37dadf(0x2f2)+_0x37dadf(0x289)+'l\x20dra'+'in,\x20t'+_0x37dadf(0x35d)+_0x37dadf(0x1ac)+'nt\x20ha'+_0x37dadf(0x4e2)+_0x37dadf(0x6c7)+'where'+'.')])];if(_0x223fb1[_0x37dadf(0x320)](_0x543a79,_0x37dadf(0x3b8)))return[_0x223fb1[_0x37dadf(0x455)](_0x28b990,_0x223fb1[_0x37dadf(0x3a5)],_0x223fb1[_0x37dadf(0x5e3)],_0x145617['speed'+_0x37dadf(0x5c5)]!==0x1c23+-0x1*0x705+-0x14ba,null,[_0x223fb1[_0x37dadf(0x576)](_0x13059d,_0x223fb1[_0x37dadf(0x5b8)],_0x223fb1['jkXSk'],_0x2fb5fd(_0x145617[_0x37dadf(0x3a7)+_0x37dadf(0x5c5)],0x6b6+-0x957*-0x1+-0xfdb,0xaae+-0x4*-0x2c6+0x2*-0xa4d,-0x12ee+-0xd*-0x2c+0xb*0x185,_0x2eaab1=>{var _0x21a3fe=_0x37dadf;_0x145617['speed'+_0x21a3fe(0x5c5)]=_0x2eaab1,_0x4e2462['QpRbc'](_0x29e202);}))]),_0x28b990('Jump\x20'+_0x37dadf(0x639)+_0x37dadf(0x6c4),_0x223fb1['cPOmo'],_0x223fb1[_0x37dadf(0x21c)](_0x145617[_0x37dadf(0x422)+'ct'],0x1530+0x1fd7+-0x34a3)||_0x145617['gravi'+_0x37dadf(0x505)]!==-0x4df+0x17dc+-0x211*0x9,null,[_0x13059d(_0x37dadf(0x6a6)+'%',null,_0x2fb5fd(_0x145617['jumpP'+'ct'],0x1c*0xf2+0x1c9b+-0x36e1,0x26ea+0xc38+-0x4ff*0xa,0x67*0xb+-0x16*-0x15f+-0x2292,_0x2a0647=>{var _0x468c89=_0x37dadf;_0x145617[_0x468c89(0x422)+'ct']=_0x2a0647,_0x223fb1['iSvqm'](_0x29e202);})),_0x223fb1[_0x37dadf(0x576)](_0x13059d,_0x223fb1[_0x37dadf(0x39c)],_0x223fb1['iiKnb'],_0x2fb5fd(_0x145617[_0x37dadf(0x6a9)+'tyPct'],0x1d84+-0x2337+0x5bd,-0x2266+-0x24b9+0x47e7,-0x14af+-0x12f7+0x27ab,_0x438d9f=>{var _0x37ca61=_0x37dadf;_0x145617[_0x37ca61(0x6a9)+_0x37ca61(0x505)]=_0x438d9f,_0x223fb1[_0x37ca61(0x708)](_0x29e202);}))]),_0x28b990(_0x37dadf(0x583)+'-hop',_0x37dadf(0x502)+_0x37dadf(0x207)+'ement'+_0x37dadf(0x285)+_0x37dadf(0x634)+_0x37dadf(0x3b2)+_0x37dadf(0x51c)+_0x37dadf(0x3bc)+'\x20cool'+_0x37dadf(0x3bb)+'never'+'\x20appl'+_0x37dadf(0x358),_0x145617['bhop'],_0x15e5ac=>{var _0xc99d4e=_0x37dadf;if(_0xc99d4e(0x261)!==_0xc99d4e(0x261))try{new _0x407647(_0x2b1452)[_0xc99d4e(0x5f5)+'Field'](_0x583a4b,_0xe09af7,_0x53fd26);}catch(_0x4d99a2){}else _0x145617[_0xc99d4e(0x52d)]=_0x15e5ac,_0x29e202();},[])];if(_0x223fb1[_0x37dadf(0x28d)](_0x543a79,_0x223fb1['SSwND']))return[_0x223fb1[_0x37dadf(0x1ce)](_0x28b990,'Keyst'+'rokes',_0x223fb1[_0x37dadf(0x476)],_0x145617['keyst'+_0x37dadf(0x5be)],_0x10243a=>{var _0x5d6bdc=_0x37dadf;_0x145617[_0x5d6bdc(0x5e0)+_0x5d6bdc(0x5be)]=_0x10243a,_0x29e202();},[_0x13059d(_0x223fb1[_0x37dadf(0x5d0)],null,_0x223fb1['jPJrx'](_0x4abc2f,_0x145617['ksPos'],[['bl',_0x37dadf(0x1b0)+_0x37dadf(0x3ea)+'t'],['br',_0x37dadf(0x1b0)+_0x37dadf(0x1ba)+'ht'],['ml','Left\x20'+_0x37dadf(0x3f6)+'e']],_0x25d21a=>{_0x145617['ksPos']=_0x25d21a,_0x29e202();})),_0x223fb1[_0x37dadf(0x607)](_0x13059d,'Size',null,_0x2fb5fd(_0x145617['ksSca'+'le'],-0xfcf+-0x1*0x255a+0x3529+0.6,-0x23db+0x6f2*0x1+0x1cea+0.6000000000000001,-0x2477+0x1*0xef8+0x157f*0x1+0.05,_0x4e955a=>{var _0xcd0346=_0x37dadf;if(_0x4e2462['Cczha'](_0x4e2462['WNjJx'],_0xcd0346(0x6ad)))_0x145617['ksSca'+'le']=_0x4e955a,_0x29e202();else{var _0x1cd72d={'RklYv':_0xcd0346(0x6d4)+_0xcd0346(0x6e0)+'35,24'+_0xcd0346(0x5d5)+'5)'};_0x3b77e4[_0xcd0346(0x378)](),_0x100c7a[_0xcd0346(0x335)]=_0x4e2462['LhEUK'],_0x171f7a['textA'+_0xcd0346(0x684)]='left',_0x2c47a3['textB'+_0xcd0346(0x1a9)+'ne']='top';var _0x1b3350=-0x1732+-0x10f0+0x284e,_0x632b8=0x5fd*0x1+0x3*-0x218+-0x1d*-0x3,_0xbb43a3=(_0x265409,_0x17dbf0)=>{var _0x5eefc4=_0xcd0346;_0x55b70e[_0x5eefc4(0x431)+'tyle']=_0x17dbf0||_0x1cd72d[_0x5eefc4(0x572)],_0x1cfb5d[_0x5eefc4(0x451)+'ext'](_0x265409,_0x632b8,_0x1b3350),_0x1b3350+=0x20aa+0x114e+-0x31e8;};_0xbb43a3('SAKUR'+_0xcd0346(0x3c2)+_0xcd0346(0x271)+'1','#ff6b'+'9d');if(_0x21d57f[_0xcd0346(0x622)])_0x4e2462[_0xcd0346(0x2ab)](_0xbb43a3,_0x286ad8+_0xcd0346(0x589));if(!_0x98cee9[_0xcd0346(0x2af)+_0xcd0346(0x662)])_0xbb43a3('waiti'+_0xcd0346(0x1eb)+'r\x20gam'+'e…','rgba('+_0xcd0346(0x483)+'80,19'+'0,0.6'+')');_0x3f3fd6[_0xcd0346(0x294)+'re']();}})),_0x13059d('CPS\x20r'+_0x37dadf(0x2fb)+'t',null,_0x223fb1[_0x37dadf(0x5cd)](_0x13f390,_0x145617['ksCps'],_0x3d9d8a=>{var _0x26c40c=_0x37dadf;if('ixVLW'===_0x4e2462['oRPTK']){_0x3e58e0=_0x4eaa2d;if(!_0x4c19e9){var _0x23bb44=_0x36c3fa[_0x26c40c(0x44f)+_0x26c40c(0x5ff)+_0x26c40c(0x6e9)](_0x4e2462[_0x26c40c(0x61f)]);_0x23bb44[_0x26c40c(0x48d)+'onten'+'t']=_0x9ae20b,_0x577b62['appen'+'dChil'+'d'](_0x23bb44),_0x372505=_0x13bdc9(),_0x14bdf4[_0x26c40c(0x67d)+_0x26c40c(0x23c)+'d'](_0x14627d),_0x4e2462[_0x26c40c(0x2ab)](_0x22dba8,()=>_0x10a8a1['class'+_0x26c40c(0x4ea)]['add'](_0x26c40c(0x4a0)));}_0x26a5a6['class'+'List']['toggl'+'e'](_0x4e2462[_0x26c40c(0x510)],_0x246c50);}else _0x145617['ksCps']=_0x3d9d8a,_0x29e202();}))]),_0x28b990(_0x37dadf(0x29a)+_0x37dadf(0x351),_0x223fb1[_0x37dadf(0x3b1)],_0x145617[_0x37dadf(0x6e7)+_0x37dadf(0x351)],_0x354db4=>{var _0x12f854=_0x37dadf;_0x145617[_0x12f854(0x6e7)+'hair']=_0x354db4,_0x29e202();},[_0x13059d(_0x223fb1['oSBtu'],null,_0x2fb5fd(_0x145617['chSiz'+'e'],0x22fd+0x2458+-0x4755+0.5,0x1*-0x62a+-0x39e*0x6+0x1be0+0.5,-0x4b*0x2+-0x1aa9+0x1b3f+0.1,_0x4274bf=>{_0x145617['chSiz'+'e']=_0x4274bf,_0x223fb1['aRiIA'](_0x29e202);})),_0x13059d(_0x223fb1[_0x37dadf(0x65d)],null,_0x2a82de(_0x145617['chCol'+'or'],_0x54dc1e=>{var _0x292c71=_0x37dadf;_0x145617[_0x292c71(0x4be)+'or']=_0x54dc1e,_0x29e202();}))]),_0x28b990(_0x37dadf(0x51f)+'ers',_0x37dadf(0x2b2)+_0x37dadf(0x6f9)+'y.',_0x145617[_0x37dadf(0x622)],null,[_0x13059d('FPS\x20c'+_0x37dadf(0x1e5)+'r',null,_0x223fb1[_0x37dadf(0x5cd)](_0x13f390,_0x145617[_0x37dadf(0x622)],_0x1b4c7c=>{_0x145617['fps']=_0x1b4c7c,_0x223fb1['RUgnN'](_0x29e202);})),_0x55853a(_0x223fb1[_0x37dadf(0x3fc)])])];if(_0x543a79===_0x223fb1[_0x37dadf(0x42a)]){if('KwcPJ'===_0x37dadf(0x3f9))_0x2d5d2e(_0x539f04,-0x1*-0x1ddd+-0x1c19+-0x178,_0x37dadf(0x4a8),_0x3041ef),_0x1eb88b(_0x250254,0x9*0x195+-0xf7*0x7+-0x1*0x728,_0x223fb1['UlZFg'],_0x274c24);else return[_0x28b990(_0x223fb1[_0x37dadf(0x361)],_0x37dadf(0x553)+'\x20kour'+_0x37dadf(0x3f5)+_0x37dadf(0x61a)+_0x37dadf(0x20b)+_0x37dadf(0x3ad),_0x145617[_0x37dadf(0x2f4)+'ck'],_0x26484b=>{var _0x49cea7=_0x37dadf;_0x145617[_0x49cea7(0x2f4)+'ck']=_0x26484b,_0x29e202();},[_0x55853a(_0x223fb1[_0x37dadf(0x630)])])];}return[_0x223fb1[_0x37dadf(0x332)](_0x28b990,'Safe\x20'+_0x37dadf(0x2d4)+_0x37dadf(0x434)+_0x37dadf(0x29f)+_0x37dadf(0x383),_0x223fb1[_0x37dadf(0x6e3)],_0x145617[_0x37dadf(0x448)+'ode'],_0x2b1e9d=>{_0x145617['safeM'+'ode']=_0x2b1e9d,_0x29e202(),location['reloa'+'d']();},[_0x55853a(_0x223fb1['luhBV'])]),_0x28b990('ACTk\x20'+'Kille'+'r',_0x223fb1['SSuqY'],_0x145617[_0x37dadf(0x287)+_0x37dadf(0x233)],_0x249b7e=>{var _0x13520a=_0x37dadf;_0x145617['actkK'+'ill']=_0x249b7e,_0x4e2462[_0x13520a(0x6ae)](_0x29e202);},[_0x223fb1['YjkWb'](_0x55853a,'God/d'+_0x37dadf(0x1b5)+_0x37dadf(0x522)+'d\x20gre'+_0x37dadf(0x2c0)+_0x37dadf(0x4fa)+'\x20ban\x20'+'risk\x20'+_0x37dadf(0x353)+_0x37dadf(0x2df)+_0x37dadf(0x677)+_0x37dadf(0x5d3),!![])]),_0x223fb1[_0x37dadf(0x332)](_0x28b990,_0x37dadf(0x4a5)+'r',_0x223fb1[_0x37dadf(0x1c2)],!![],null,[_0x13059d('Wipe\x20'+_0x37dadf(0x1bd)+_0x37dadf(0x2cd)+'s',null,_0x449a17(_0x37dadf(0x66c),()=>{var _0x2d0ea8=_0x37dadf;_0x4e2462['zeMOY'](_0x4e2462[_0x2d0ea8(0x688)],_0x2d0ea8(0x330))?(_0x35c53d[_0x2d0ea8(0x32e)+_0x2d0ea8(0x1dd)]=_0x3dfd71,_0x2d593b()):(_0x145617={..._0x29d035},_0x29e202(),location[_0x2d0ea8(0x4cd)+'d']());}))])];}else _0x406594[_0x37dadf(0x33d)]['appen'+_0x37dadf(0x23c)+'d'](_0x244fb2);}var _0x590c88=null;function _0x5a4649(_0x3d4979){var _0x4d174f=_0x3f86fb;_0x47938a=_0x3d4979;if(!_0x590c88){var _0x4c9d38=(_0x4d174f(0x2c6)+_0x4d174f(0x2e1)+'2')[_0x4d174f(0x61d)]('|'),_0xe8a21=-0xc7c+0x2239+-0x15bd;while(!![]){switch(_0x4c9d38[_0xe8a21++]){case'0':_0x590c88=_0x223fb1['RUgnN'](_0x4f1b4b);continue;case'1':var _0x4aff64=document[_0x4d174f(0x44f)+'eElem'+_0x4d174f(0x6e9)](_0x223fb1['EhOLm']);continue;case'2':_0x223fb1['iUCdt'](requestAnimationFrame,()=>_0x590c88[_0x4d174f(0x6dd)+'List'][_0x4d174f(0x538)](_0x4d174f(0x4a0)));continue;case'3':_0x21b0a0[_0x4d174f(0x67d)+'dChil'+'d'](_0x4aff64);continue;case'4':_0x4aff64['textC'+'onten'+'t']=_0x2e9233;continue;case'5':_0x21b0a0[_0x4d174f(0x67d)+_0x4d174f(0x23c)+'d'](_0x590c88);continue;}break;}}_0x590c88[_0x4d174f(0x6dd)+_0x4d174f(0x4ea)]['toggl'+'e'](_0x223fb1[_0x4d174f(0x5a2)],_0x3d4979);}function _0x3c3b80(){_0x49251a['rvvaf'](_0x5a4649,!_0x47938a);}function _0x4f1b4b(){var _0x1a6d33=_0x3f86fb,_0x27548a={'InlQV':function(_0x21a5ba,_0x1d323e){return _0x21a5ba/_0x1d323e;},'KiheK':function(_0xe7838d,_0x5b03fe){return _0xe7838d*_0x5b03fe;},'fRrJV':function(_0x29d657,_0x24c4db){return _0x29d657!==_0x24c4db;},'YEacG':function(_0x5db6dd,_0xf64629){return _0x5db6dd<_0xf64629;},'QuEyB':'UWMK','ZKUwP':function(_0x32fc3e,_0x13a365){return _0x32fc3e===_0x13a365;},'Mtdtk':'SAFE','mWjjV':_0x1a6d33(0x25f)+_0x1a6d33(0x25e)+_0x1a6d33(0x5ec)+_0x1a6d33(0x548)+_0x1a6d33(0x6a5)+_0x1a6d33(0x67f)+_0x1a6d33(0x627)+_0x1a6d33(0x3e4)+'ad\x20to'+'\x20exit'+')','QOqmr':function(_0x3c099b,_0x16cc9d){var _0x41ae0d=_0x1a6d33;return _0x223fb1[_0x41ae0d(0x214)](_0x3c099b,_0x16cc9d);},'bswTd':_0x223fb1['WQEuJ'],'GjmvE':_0x223fb1['UJVTI'],'Rxyuj':_0x223fb1['ZzQUC']},_0x23625f=document[_0x1a6d33(0x44f)+_0x1a6d33(0x5ff)+'ent'](_0x223fb1[_0x1a6d33(0x452)]);_0x23625f['class'+_0x1a6d33(0x3e9)]=_0x1a6d33(0x4ab)+'nel';var _0x32b10c=document['creat'+'eElem'+'ent'](_0x223fb1[_0x1a6d33(0x50d)]);_0x32b10c[_0x1a6d33(0x6dd)+'Name']='mn-si'+'de';var _0x2a4446=document[_0x1a6d33(0x44f)+_0x1a6d33(0x5ff)+_0x1a6d33(0x6e9)](_0x1a6d33(0x5fa));_0x2a4446[_0x1a6d33(0x6dd)+_0x1a6d33(0x3e9)]=_0x1a6d33(0x60c)+'go',_0x2a4446['inner'+_0x1a6d33(0x4a9)]=_0x1a6d33(0x3dc)+'viewB'+_0x1a6d33(0x1d8)+_0x1a6d33(0x2a1)+'\x2024\x22\x20'+_0x1a6d33(0x6dd)+_0x1a6d33(0x523)+_0x1a6d33(0x6f6)+_0x1a6d33(0x59b)+_0x1a6d33(0x204)+'\x20d=\x22M'+'12\x2021'+_0x1a6d33(0x267)+'-2.5-'+'4-4.5'+_0x1a6d33(0x23f)+'5\x200-2'+_0x1a6d33(0x4a4)+_0x1a6d33(0x656)+_0x1a6d33(0x4b0)+_0x1a6d33(0x554)+_0x1a6d33(0x682)+_0x1a6d33(0x46b)+_0x1a6d33(0x27b)+'5-4\x207'+'.5z\x22\x20'+'fill='+'\x22none'+_0x1a6d33(0x411)+_0x1a6d33(0x703)+'#ff6b'+_0x1a6d33(0x592)+_0x1a6d33(0x22f)+_0x1a6d33(0x386)+'h=\x222\x22'+'\x20stro'+_0x1a6d33(0x1a3)+'necap'+_0x1a6d33(0x41a)+_0x1a6d33(0x67e)+_0x1a6d33(0x22f)+_0x1a6d33(0x3a8)+_0x1a6d33(0x5ad)+_0x1a6d33(0x595)+_0x1a6d33(0x5c3)+_0x1a6d33(0x279)+'e\x20cx='+_0x1a6d33(0x397)+_0x1a6d33(0x633)+_0x1a6d33(0x23e)+'\x221.5\x22'+_0x1a6d33(0x490)+_0x1a6d33(0x5c1)+'6b9d\x22'+_0x1a6d33(0x69d)+_0x1a6d33(0x6b3),_0x32b10c['appen'+_0x1a6d33(0x23c)+'d'](_0x2a4446);var _0x1de09f=document[_0x1a6d33(0x44f)+_0x1a6d33(0x5ff)+'ent'](_0x1a6d33(0x5fa));_0x1de09f[_0x1a6d33(0x6dd)+_0x1a6d33(0x3e9)]=_0x223fb1['ABAqs'];var _0x1c531a=document[_0x1a6d33(0x44f)+_0x1a6d33(0x5ff)+'ent'](_0x1a6d33(0x4d6)+'r');_0x1c531a[_0x1a6d33(0x6dd)+'Name']=_0x223fb1[_0x1a6d33(0x45a)];var _0x57eb66=document['creat'+'eElem'+'ent'](_0x1a6d33(0x5fa));_0x57eb66['class'+_0x1a6d33(0x3e9)]='mn-ti'+_0x1a6d33(0x614);var _0x13a4e3=document[_0x1a6d33(0x44f)+'eElem'+'ent']('h2');_0x13a4e3['class'+_0x1a6d33(0x3e9)]=_0x223fb1[_0x1a6d33(0x2d5)],_0x13a4e3['textC'+_0x1a6d33(0x30b)+'t']=_0x223fb1['EjPAd'];var _0x450f73=document[_0x1a6d33(0x44f)+'eElem'+_0x1a6d33(0x6e9)]('small');_0x450f73[_0x1a6d33(0x6dd)+_0x1a6d33(0x3e9)]=_0x223fb1['DBGZt'],_0x450f73[_0x1a6d33(0x48d)+_0x1a6d33(0x30b)+'t']=_0x1a6d33(0x674)+'trike'+'.io\x20m'+'enu',_0x57eb66[_0x1a6d33(0x67d)+'d'](_0x13a4e3,_0x450f73);var _0xb3b642=document['creat'+_0x1a6d33(0x5ff)+'ent']('butto'+'n');_0xb3b642['type']=_0x223fb1[_0x1a6d33(0x679)],_0xb3b642[_0x1a6d33(0x6dd)+'Name']=_0x1a6d33(0x654)+_0x1a6d33(0x313),_0xb3b642[_0x1a6d33(0x44a)]=_0x1a6d33(0x520),_0xb3b642['inner'+'HTML']='<svg\x20'+_0x1a6d33(0x1ed)+'ox=\x220'+_0x1a6d33(0x2a1)+_0x1a6d33(0x58c)+_0x1a6d33(0x204)+'\x20d=\x22M'+'6\x206l1'+_0x1a6d33(0x5fd)+_0x1a6d33(0x2b9)+'6\x2018\x22'+'/></s'+_0x1a6d33(0x6b3),_0xb3b642['oncli'+'ck']=()=>_0x5a4649(![]),_0x1c531a[_0x1a6d33(0x67d)+'d'](_0x57eb66,_0xb3b642);var _0x1339ae=document['creat'+_0x1a6d33(0x5ff)+'ent'](_0x223fb1['OfqgW']);_0x1339ae['class'+_0x1a6d33(0x3e9)]='mn-co'+'ls',_0x1de09f['appen'+'d'](_0x1c531a,_0x1339ae),_0x23625f[_0x1a6d33(0x67d)+'d'](_0x32b10c,_0x1de09f);var _0x2bc365=new Map();for(var _0x1e004c of _0x1e9f78){var _0x4f91ab=document[_0x1a6d33(0x44f)+'eElem'+_0x1a6d33(0x6e9)](_0x223fb1[_0x1a6d33(0x679)]);_0x4f91ab[_0x1a6d33(0x2a8)]=_0x223fb1[_0x1a6d33(0x679)],_0x4f91ab['class'+'Name']='mn-ta'+'b',_0x4f91ab[_0x1a6d33(0x44a)]=_0x1e004c[_0x1a6d33(0x28f)],_0x4f91ab[_0x1a6d33(0x62f)+_0x1a6d33(0x4a9)]=_0x223fb1[_0x1a6d33(0x272)](_0x1a6d33(0x416)+'l>'+_0x1e004c[_0x1a6d33(0x28f)],'</sma'+'ll>'),_0x4f91ab['oncli'+'ck']=(_0x2f705a=>()=>_0x4cad6d(_0x2f705a))(_0x1e004c['id']),_0x2bc365[_0x1a6d33(0x1f8)](_0x1e004c['id'],_0x4f91ab),_0x32b10c[_0x1a6d33(0x67d)+'dChil'+'d'](_0x4f91ab);}function _0x4cad6d(_0xd21379){var _0x360bd0=_0x1a6d33;_0x46b4cb['cat']=_0xd21379,_0x223fb1['iSvqm'](_0x567a79);var _0xbe504d=_0x1e9f78[_0x360bd0(0x5f4)](_0x24168f=>_0x24168f['id']===_0xd21379)||_0x1e9f78[-0x1fb1+-0x56c+0x3*0xc5f];_0x13a4e3['textC'+_0x360bd0(0x30b)+'t']=_0x360bd0(0x568)+_0x360bd0(0x5c0)+'r\x20—\x20'+_0xbe504d['label'];for(var [_0x51b019,_0x3070a0]of _0x2bc365)_0x3070a0[_0x360bd0(0x6dd)+_0x360bd0(0x4ea)][_0x360bd0(0x3f2)+'e']('activ'+'e',_0x223fb1[_0x360bd0(0x28d)](_0x51b019,_0xd21379));_0x1339ae[_0x360bd0(0x5f6)+_0x360bd0(0x479)+_0x360bd0(0x1e2)](..._0x14417a(_0xd21379));}return _0x4cad6d(_0x46b4cb[_0x1a6d33(0x6eb)]||_0x223fb1[_0x1a6d33(0x5bc)]),setInterval(()=>{var _0x4793e1=_0x1a6d33,_0x99bc32={'OAuOO':function(_0x29a969,_0x166059){return _0x27548a['InlQV'](_0x29a969,_0x166059);},'IFwtE':function(_0x56bb0d,_0x153672){var _0x311713=_0x3f95;return _0x27548a[_0x311713(0x263)](_0x56bb0d,_0x153672);}};if(_0x27548a['fRrJV']('HcwiI',_0x4793e1(0x4ad)))_0x5f5dcf=_0x562230['round'](_0x99bc32[_0x4793e1(0x588)](_0x99bc32['IFwtE'](_0x4dfab7,0x17cc+-0xcd*0x2e+0x10f2),_0x2bc610-_0x377b1d)),_0x5273f3=0x7*0x1ab+-0x3d7+0x7d6*-0x1,_0x5a7567=_0x11b2b2;else{if(!_0x47938a)return;var _0x3302fb=_0x1339ae[_0x4793e1(0x6d5)+'ren'];for(var _0x13f4cd=0x1efe+0x227*0x11+-0x4395;_0x27548a[_0x4793e1(0x300)](_0x13f4cd,_0x3302fb[_0x4793e1(0x388)+'h']);_0x13f4cd++){var _0x4ee0fd=_0x3302fb[_0x13f4cd][_0x4793e1(0x50f)+'Selec'+'tor']('.sk-m'+_0x4793e1(0x40e));_0x4ee0fd&&(_0x4ee0fd[_0x4793e1(0x48d)+'onten'+'t'][_0x4793e1(0x209)+'Of'](_0x27548a['QuEyB'])===-0x7c3+-0x122a+0x19ed||_0x27548a[_0x4793e1(0x4f3)](_0x4ee0fd[_0x4793e1(0x48d)+'onten'+'t'][_0x4793e1(0x209)+'Of'](_0x27548a[_0x4793e1(0x657)]),-0x1*0x252f+0x205f+0x4d0))&&(_0x4ee0fd[_0x4793e1(0x48d)+'onten'+'t']=_0x1ea0a1['safeM'+_0x4793e1(0x274)]?_0x27548a['mWjjV']:_0x1ea0a1[_0x4793e1(0x333)]?_0x27548a[_0x4793e1(0x4ed)](_0x27548a['QOqmr']('UWMK\x20'+'bound'+'\x20'+_0x1ea0a1[_0x4793e1(0x515)+'Ok']+'/',_0x1ea0a1[_0x4793e1(0x515)+_0x4793e1(0x409)])+('\x20hook'+'s')+(_0x4793e1(0x45c)+_0x4793e1(0x1a7))+(_0x1ea0a1['gameL'+_0x4793e1(0x662)]?_0x27548a['bswTd']:_0x4793e1(0x32d)+'ng')+_0x27548a['GjmvE']+(_0x1ea0a1[_0x4793e1(0x2b7)+'ers']?_0x4793e1(0x541):'none')+_0x27548a[_0x4793e1(0x6b2)]+(_0x1ea0a1[_0x4793e1(0x1c1)+_0x4793e1(0x37e)]?'held':_0x4793e1(0x549)),_0x1ea0a1['lastE'+'rror']?_0x4793e1(0x680)+_0x4793e1(0x324)+_0x1ea0a1['lastE'+_0x4793e1(0x567)]:''):_0x4793e1(0x521)+_0x4793e1(0x4b1)+_0x4793e1(0x691)+_0x4793e1(0x3ce)+'ay\x20on'+_0x4793e1(0x4e0)+'einst'+'all\x20t'+'he\x20us'+_0x4793e1(0x4e4)+'ipt)');}}},0x1d1+-0x1*-0xf59+-0xd42*0x1),_0x23625f;}var _0x2e9233=_0x3f86fb(0x4fb)+':host'+'\x20{\x20al'+_0x3f86fb(0x59f)+_0x3f86fb(0x69a)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+'{\x20box'+'-sizi'+_0x3f86fb(0x2ae)+_0x3f86fb(0x41e)+'-box;'+_0x3f86fb(0x5e8)+_0x3f86fb(0x5e9)+';\x20fon'+_0x3f86fb(0x6f0)+_0x3f86fb(0x4e1)+'\x22Inte'+_0x3f86fb(0x48b)+_0x3f86fb(0x50c)+_0x3f86fb(0x623)+_0x3f86fb(0x454)+_0x3f86fb(0x525)+',\x20san'+_0x3f86fb(0x53d)+'if;\x20}'+_0x3f86fb(0x4fb)+_0x3f86fb(0x537)+'anel\x20'+_0x3f86fb(0x399)+_0x3f86fb(0x2b8)+_0x3f86fb(0x265)+_0x3f86fb(0x643)+_0x3f86fb(0x3d6)+'ht:\x202'+'4px;\x20'+_0x3f86fb(0x47e)+_0x3f86fb(0x5df)+_0x3f86fb(0x3fb)+_0x3f86fb(0x1ae)+_0x3f86fb(0x516)+_0x3f86fb(0x29e)+',\x20cal'+_0x3f86fb(0x40a)+_0x3f86fb(0x67c)+_0x3f86fb(0x2ee)+_0x3f86fb(0x41d)+'x-hei'+'ght:\x20'+_0x3f86fb(0x6f5)+'80px,'+_0x3f86fb(0x51d)+'(100v'+'h\x20-\x204'+'8px))'+_0x3f86fb(0x456)+'\x20\x20\x20di'+_0x3f86fb(0x3b4)+_0x3f86fb(0x4e3)+'x;\x20ga'+_0x3f86fb(0x458)+_0x3f86fb(0x384)+_0x3f86fb(0x695)+_0x3f86fb(0x297)+_0x3f86fb(0x336)+_0x3f86fb(0x41e)+_0x3f86fb(0x37c)+_0x3f86fb(0x707)+_0x3f86fb(0x511)+'point'+_0x3f86fb(0x63c)+'ents:'+'\x20auto'+_0x3f86fb(0x456)+_0x3f86fb(0x641)+_0x3f86fb(0x5b0)+'und:\x20'+'rgba('+_0x3f86fb(0x477)+_0x3f86fb(0x312)+'82);\x20'+'backd'+_0x3f86fb(0x4ce)+'ilter'+_0x3f86fb(0x34c)+'r(22p'+_0x3f86fb(0x5ed)+'turat'+_0x3f86fb(0x405)+_0x3f86fb(0x4f8)+_0x3f86fb(0x550)+_0x3f86fb(0x58d)+'kdrop'+_0x3f86fb(0x591)+_0x3f86fb(0x428)+'lur(2'+_0x3f86fb(0x655)+'satur'+'ate(1'+_0x3f86fb(0x4e5)+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+_0x3f86fb(0x54a)+'ow:\x200'+_0x3f86fb(0x28b)+'1px\x20r'+_0x3f86fb(0x3de)+_0x3f86fb(0x418)+_0x3f86fb(0x3c7)+',.06)'+',\x20ins'+_0x3f86fb(0x582)+'1px\x200'+_0x3f86fb(0x369)+_0x3f86fb(0x1c9)+'255,2'+_0x3f86fb(0x2c2)+'5),\x200'+_0x3f86fb(0x1f5)+_0x3f86fb(0x2db)+'\x20rgba'+'(0,0,'+_0x3f86fb(0x5db)+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x3f86fb(0x603)+_0x3f86fb(0x2ad)+'\x20tran'+'sform'+':\x20tra'+_0x3f86fb(0x678)+'eY(18'+_0x3f86fb(0x3cf)+'point'+_0x3f86fb(0x63c)+_0x3f86fb(0x577)+_0x3f86fb(0x39a)+_0x3f86fb(0x2ac)+_0x3f86fb(0x624)+_0x3f86fb(0x465)+_0x3f86fb(0x603)+'y\x20.35'+'s\x20eas'+'e,\x20tr'+_0x3f86fb(0x4f0)+_0x3f86fb(0x629)+'5s\x20cu'+'bic-b'+'ezier'+_0x3f86fb(0x359)+'1,.36'+_0x3f86fb(0x6a4)+_0x3f86fb(0x706)+'\x20colo'+'r:\x20#f'+'6eef2'+_0x3f86fb(0x24e)+'t-siz'+_0x3f86fb(0x47c)+_0x3f86fb(0x19c)+_0x3f86fb(0x4fb)+_0x3f86fb(0x537)+'anel.'+'shown'+'\x20{\x20op'+_0x3f86fb(0x339)+':\x201;\x20'+_0x3f86fb(0x3aa)+'form:'+_0x3f86fb(0x39a)+';\x20poi'+_0x3f86fb(0x689)+_0x3f86fb(0x44d)+_0x3f86fb(0x56b)+'to;\x20}'+_0x3f86fb(0x4fb)+_0x3f86fb(0x3fa)+_0x3f86fb(0x20d)+'\x20disp'+_0x3f86fb(0x63d)+'flex;'+'\x20flex'+_0x3f86fb(0x499)+_0x3f86fb(0x35a)+':\x20col'+_0x3f86fb(0x1a1)+_0x3f86fb(0x2e4)+'-item'+_0x3f86fb(0x1a2)+_0x3f86fb(0x5f1)+_0x3f86fb(0x5f3)+_0x3f86fb(0x401)+'\x20widt'+_0x3f86fb(0x37d)+'px;\x20f'+'lex:\x20'+'none;'+_0x3f86fb(0x377)+_0x3f86fb(0x4ac)+_0x3f86fb(0x6d3)+('0;\x20bo'+'rder-'+_0x3f86fb(0x512)+_0x3f86fb(0x6d6)+_0x3f86fb(0x6f4)+_0x3f86fb(0x706)+'backg'+'round'+':\x20rgb'+'a(255'+_0x3f86fb(0x379)+'255,.'+_0x3f86fb(0x488)+'\x20box-'+_0x3f86fb(0x228)+_0x3f86fb(0x286)+_0x3f86fb(0x610)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x3f86fb(0x418)+_0x3f86fb(0x3c7)+_0x3f86fb(0x5ba)+_0x3f86fb(0x53f)+'\x20\x20\x20.m'+'n-log'+_0x3f86fb(0x650)+'ispla'+_0x3f86fb(0x396)+_0x3f86fb(0x1b8)+'lace-'+_0x3f86fb(0x6b6)+_0x3f86fb(0x374)+'ter;\x20'+'width'+_0x3f86fb(0x61e)+'x;\x20he'+_0x3f86fb(0x3b0)+'\x2032px'+_0x3f86fb(0x53f)+'\x20\x20\x20.m'+_0x3f86fb(0x529)+_0x3f86fb(0x5cf)+'\x20{\x20wi'+_0x3f86fb(0x1d1)+_0x3f86fb(0x39e)+_0x3f86fb(0x354)+_0x3f86fb(0x1aa)+'5px;\x20'+_0x3f86fb(0x20e)+_0x3f86fb(0x5d7)+'visib'+'le;\x20f'+_0x3f86fb(0x306)+':\x20dro'+'p-sha'+_0x3f86fb(0x4b3)+'\x200\x204p'+_0x3f86fb(0x4f7)+'a(255'+_0x3f86fb(0x50a)+_0x3f86fb(0x6ba)+_0x3f86fb(0x570)+'}\x0a\x20\x20\x20'+'\x20.mn-'+'tab\x20{'+'\x20disp'+_0x3f86fb(0x63d)+'flex;'+'\x20alig'+_0x3f86fb(0x43f)+'ms:\x20c'+_0x3f86fb(0x425)+';\x20jus'+'tify-'+'conte'+_0x3f86fb(0x31c)+'enter'+';\x20wid'+'th:\x205'+'2px;\x20'+_0x3f86fb(0x62d)+_0x3f86fb(0x5e5)+_0x3f86fb(0x336)+_0x3f86fb(0x41e)+':\x200;\x20'+'borde'+_0x3f86fb(0x315)+_0x3f86fb(0x5ee)+'10px;'+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+_0x3f86fb(0x1b7)+_0x3f86fb(0x492)+_0x3f86fb(0x528)+_0x3f86fb(0x42f)+_0x3f86fb(0x6c0)+_0x3f86fb(0x6dc)+'gba(2'+'46,23'+'8,242'+_0x3f86fb(0x410)+'\x20curs'+_0x3f86fb(0x4bc)+'ointe'+_0x3f86fb(0x42b)+_0x3f86fb(0x3ab)+_0x3f86fb(0x65e)+'0px;\x20'+'font-'+_0x3f86fb(0x1c0)+_0x3f86fb(0x498)+_0x3f86fb(0x269)+_0x3f86fb(0x433)+_0x3f86fb(0x314)+_0x3f86fb(0x461)+'er\x20{\x20'+_0x3f86fb(0x1ff)+':\x20rgb'+_0x3f86fb(0x49d)+',238,'+'242,.'+_0x3f86fb(0x3c0)+_0x3f86fb(0x4fb)+_0x3f86fb(0x5c8)+'ab.ac'+_0x3f86fb(0x2a0)+'{\x20col'+_0x3f86fb(0x565)+_0x3f86fb(0x19b)+_0x3f86fb(0x304)+_0x3f86fb(0x5b0)+_0x3f86fb(0x219)+'rgba('+_0x3f86fb(0x483)+_0x3f86fb(0x58e)+'7,.1)'+';\x20}\x0a\x20'+_0x3f86fb(0x2f1)+_0x3f86fb(0x2e6)+'n\x20{\x20f'+_0x3f86fb(0x471)+'1;\x20mi'+'n-wid'+_0x3f86fb(0x57e)+_0x3f86fb(0x417)+'play:'+_0x3f86fb(0x6a7)+';\x20fle'+_0x3f86fb(0x1fe)+'ectio'+_0x3f86fb(0x1be)+_0x3f86fb(0x6cc)+_0x3f86fb(0x38f)+'\x20\x20.mn'+_0x3f86fb(0x69f)+'{\x20dis'+'play:'+_0x3f86fb(0x6a7)+_0x3f86fb(0x237)+'gn-it'+'ems:\x20'+_0x3f86fb(0x288)+_0x3f86fb(0x3a9)+_0x3f86fb(0x262)+'px;\x20p'+'addin'+_0x3f86fb(0x3be)+'x\x206px'+_0x3f86fb(0x210)+_0x3f86fb(0x6d2)+_0x3f86fb(0x1e8)+_0x3f86fb(0x1d9)+_0x3f86fb(0x6d1)+_0x3f86fb(0x38f)+_0x3f86fb(0x5c7)+'-titl'+_0x3f86fb(0x221)+_0x3f86fb(0x2d0)+_0x3f86fb(0x3e1)+_0x3f86fb(0x404)+_0x3f86fb(0x1d1)+_0x3f86fb(0x269)+'\x20\x20\x20\x20.'+_0x3f86fb(0x3d3)+_0x3f86fb(0x226)+'t-siz'+_0x3f86fb(0x5f9)+_0x3f86fb(0x424)+_0x3f86fb(0x6de)+'eight'+_0x3f86fb(0x601)+_0x3f86fb(0x53f)+'\x20\x20\x20.m'+_0x3f86fb(0x673)+'\x20{\x20fo'+_0x3f86fb(0x3ab)+_0x3f86fb(0x65e)+_0x3f86fb(0x253)+'opaci')+(_0x3f86fb(0x536)+_0x3f86fb(0x26d)+'\x20\x20\x20\x20.'+_0x3f86fb(0x654)+'ose\x20{'+_0x3f86fb(0x48a)+_0x3f86fb(0x63d)+'grid;'+_0x3f86fb(0x481)+'e-ite'+'ms:\x20c'+_0x3f86fb(0x425)+_0x3f86fb(0x66b)+'th:\x202'+'8px;\x20'+'heigh'+'t:\x2028'+'px;\x20b'+_0x3f86fb(0x41e)+_0x3f86fb(0x33c)+'borde'+_0x3f86fb(0x315)+_0x3f86fb(0x5ee)+'8px;\x20'+'backg'+_0x3f86fb(0x365)+':\x20tra'+_0x3f86fb(0x1f0)+'ent;\x20'+_0x3f86fb(0x1ff)+':\x20inh'+_0x3f86fb(0x6e6)+'\x20opac'+_0x3f86fb(0x4bf)+'.45;\x20'+_0x3f86fb(0x5a9)+_0x3f86fb(0x1c3)+_0x3f86fb(0x360)+_0x3f86fb(0x53f)+_0x3f86fb(0x2f1)+_0x3f86fb(0x3f0)+'se:ho'+_0x3f86fb(0x504)+_0x3f86fb(0x201)+_0x3f86fb(0x4bf)+_0x3f86fb(0x6c3)+_0x3f86fb(0x5b0)+'und:\x20'+_0x3f86fb(0x6d4)+'255,2'+'55,25'+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+_0x3f86fb(0x393)+'vg\x20{\x20'+'width'+_0x3f86fb(0x1ea)+_0x3f86fb(0x2ca)+'ight:'+_0x3f86fb(0x2a2)+_0x3f86fb(0x1b9)+_0x3f86fb(0x4af)+_0x3f86fb(0x563)+_0x3f86fb(0x22f)+_0x3f86fb(0x25b)+_0x3f86fb(0x33f)+'olor;'+_0x3f86fb(0x2d9)+_0x3f86fb(0x527)+_0x3f86fb(0x1d1)+_0x3f86fb(0x632)+'roke-'+'linec'+'ap:\x20r'+'ound;'+'\x20}\x0a\x20\x20'+_0x3f86fb(0x5c7)+_0x3f86fb(0x29d)+_0x3f86fb(0x6d0)+_0x3f86fb(0x1cb)+';\x20min'+'-heig'+'ht:\x200'+_0x3f86fb(0x3e6)+_0x3f86fb(0x605)+_0x3f86fb(0x1c6)+'uto;\x20'+_0x3f86fb(0x560)+'ay:\x20g'+_0x3f86fb(0x290)+_0x3f86fb(0x3ca)+'templ'+'ate-c'+'olumn'+'s:\x20re'+_0x3f86fb(0x38a)+'auto-'+_0x3f86fb(0x5fb)+_0x3f86fb(0x245)+_0x3f86fb(0x56f)+_0x3f86fb(0x1b6)+'1fr))'+';\x20ali'+_0x3f86fb(0x4d8)+_0x3f86fb(0x5bf)+_0x3f86fb(0x598)+';\x20ali'+_0x3f86fb(0x6bf)+_0x3f86fb(0x5b7)+':\x20sta'+_0x3f86fb(0x1b2)+'ap:\x201'+_0x3f86fb(0x3d4)+'paddi'+_0x3f86fb(0x45e)+_0x3f86fb(0x3bd)+_0x3f86fb(0x2b1)+_0x3f86fb(0x53f)+'\x20\x20\x20.m'+'n-col'+_0x3f86fb(0x2f6)+_0x3f86fb(0x4b8)+_0x3f86fb(0x3ec)+_0x3f86fb(0x693)+'\x20{\x20wi'+_0x3f86fb(0x1d1)+_0x3f86fb(0x29b)+_0x3f86fb(0x4b5)+'\x20.mn-'+_0x3f86fb(0x441)+_0x3f86fb(0x661)+'kit-s'+_0x3f86fb(0x64f)+'bar-t'+_0x3f86fb(0x225)+_0x3f86fb(0x26f)+'kgrou'+_0x3f86fb(0x1fb)+'gba(2'+'55,25'+_0x3f86fb(0x3c7)+_0x3f86fb(0x334)+';\x20bor'+_0x3f86fb(0x6e4)+'adius'+_0x3f86fb(0x468)+_0x3f86fb(0x53f)+'\x20\x20\x20.s'+_0x3f86fb(0x23a)+_0x3f86fb(0x1cd)+_0x3f86fb(0x41e)+_0x3f86fb(0x37c)+_0x3f86fb(0x660)+_0x3f86fb(0x511)+_0x3f86fb(0x4db)+_0x3f86fb(0x365)+':\x20rgb'+_0x3f86fb(0x37b)+_0x3f86fb(0x379)+_0x3f86fb(0x1af)+'025);'+'\x20box-'+'shado'+_0x3f86fb(0x286)+_0x3f86fb(0x610)+'\x200\x200\x20'+_0x3f86fb(0x4c8)+_0x3f86fb(0x3de)+_0x3f86fb(0x418)+'5,255'+_0x3f86fb(0x5ba)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x3f86fb(0x5e7)+_0x3f86fb(0x26f)+'kgrou'+_0x3f86fb(0x1fb)+_0x3f86fb(0x3de)+_0x3f86fb(0x418)+_0x3f86fb(0x3c7)+_0x3f86fb(0x4f9)+';\x20box'+_0x3f86fb(0x54a)+'ow:\x20i'+'nset\x20'+_0x3f86fb(0x62c)+'\x201px\x20'+_0x3f86fb(0x6d4)+_0x3f86fb(0x483)+'07,15'+_0x3f86fb(0x382)+_0x3f86fb(0x37a)+'\x20\x20\x20\x20.'+'sk-ca'+'rd-he'+_0x3f86fb(0x2c8)+'displ')+('ay:\x20f'+'lex;\x20'+'align'+_0x3f86fb(0x2d6)+_0x3f86fb(0x1a2)+_0x3f86fb(0x5f1)+_0x3f86fb(0x5f3)+_0x3f86fb(0x1b1)+_0x3f86fb(0x377)+_0x3f86fb(0x4ac)+'11px\x20'+'12px;'+_0x3f86fb(0x38f)+'\x20\x20.sk'+_0x3f86fb(0x687)+_0x3f86fb(0x325)+'e\x20{\x20f'+_0x3f86fb(0x471)+'1;\x20mi'+_0x3f86fb(0x4bd)+'th:\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x3f86fb(0x23a)+_0x3f86fb(0x6a2)+_0x3f86fb(0x338)+_0x3f86fb(0x28a)+'{\x20fon'+'t-siz'+_0x3f86fb(0x47c)+_0x3f86fb(0x424)+_0x3f86fb(0x6de)+_0x3f86fb(0x47f)+':\x20600'+';\x20col'+_0x3f86fb(0x6dc)+_0x3f86fb(0x3de)+_0x3f86fb(0x305)+'8,242'+',.45)'+_0x3f86fb(0x53f)+'\x20\x20\x20.s'+_0x3f86fb(0x23a)+'d.on\x20'+_0x3f86fb(0x38c)+_0x3f86fb(0x4ee)+'itle\x20'+_0x3f86fb(0x31d)+_0x3f86fb(0x2cc)+'olor:'+_0x3f86fb(0x3ff)+'0f5;\x20'+_0x3f86fb(0x4b5)+'\x20.sk-'+_0x3f86fb(0x67a)+_0x3f86fb(0x608)+'dding'+_0x3f86fb(0x2c7)+_0x3f86fb(0x391)+_0x3f86fb(0x3d4)+_0x3f86fb(0x4b5)+_0x3f86fb(0x569)+_0x3f86fb(0x400)+'\x20{\x20fo'+'nt-si'+'ze:\x201'+'1px;\x20'+_0x3f86fb(0x282)+'ty:\x20.'+_0x3f86fb(0x337)+_0x3f86fb(0x36c)+_0x3f86fb(0x47e)+'m:\x206p'+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+_0x3f86fb(0x686)+'ispla'+'y:\x20fl'+_0x3f86fb(0x696)+_0x3f86fb(0x27d)+'items'+_0x3f86fb(0x374)+_0x3f86fb(0x436)+_0x3f86fb(0x581)+'8px;\x20'+'paddi'+_0x3f86fb(0x42d)+_0x3f86fb(0x547)+_0x3f86fb(0x352)+_0x3f86fb(0x395)+':\x2011.'+_0x3f86fb(0x659)+_0x3f86fb(0x4b5)+_0x3f86fb(0x569)+'label'+_0x3f86fb(0x6d0)+_0x3f86fb(0x1cb)+_0x3f86fb(0x6c0)+'or:\x20r'+_0x3f86fb(0x3de)+_0x3f86fb(0x305)+'8,242'+',.75)'+_0x3f86fb(0x53f)+'\x20\x20\x20.s'+_0x3f86fb(0x398)+_0x3f86fb(0x1e3)+'ispla'+_0x3f86fb(0x5ef)+_0x3f86fb(0x62a)+_0x3f86fb(0x681)+'size:'+_0x3f86fb(0x24d)+_0x3f86fb(0x34e)+_0x3f86fb(0x573)+'\x20.4;\x20'+_0x3f86fb(0x4b5)+_0x3f86fb(0x569)+'switc'+_0x3f86fb(0x6be)+'ositi'+'on:\x20r'+_0x3f86fb(0x3fd)+'ve;\x20w'+_0x3f86fb(0x1ae)+_0x3f86fb(0x3cb)+';\x20hei'+'ght:\x20'+_0x3f86fb(0x69b)+_0x3f86fb(0x34b)+'er:\x200'+';\x20bor'+_0x3f86fb(0x6e4)+'adius'+_0x3f86fb(0x49c)+'x;\x20ba'+_0x3f86fb(0x5b0)+'und:\x20'+_0x3f86fb(0x6d4)+_0x3f86fb(0x6e0)+_0x3f86fb(0x418)+'5,.07'+_0x3f86fb(0x5f2)+_0x3f86fb(0x5aa)+'\x20poin'+_0x3f86fb(0x436)+_0x3f86fb(0x2d0)+_0x3f86fb(0x39a)+_0x3f86fb(0x53f)+'\x20\x20\x20.s'+'k-swi'+_0x3f86fb(0x2d8)+_0x3f86fb(0x513)+_0x3f86fb(0x2a3)+'ntent'+_0x3f86fb(0x6ef)+'\x20posi'+'tion:'+'\x20abso'+_0x3f86fb(0x376)+_0x3f86fb(0x60a)+'\x203px;'+_0x3f86fb(0x5b9)+':\x203px'+_0x3f86fb(0x66b)+'th:\x208'+'px;\x20h'+'eight'+_0x3f86fb(0x60d)+';\x20bor'+'der-r'+'adius'+':\x2050%'+_0x3f86fb(0x2e7)+_0x3f86fb(0x1b7)+'nd:\x20r'+_0x3f86fb(0x3de)+'55,25'+_0x3f86fb(0x3c7)+',.25)'+_0x3f86fb(0x2ac)+'nsiti'+'on:\x20l'+'eft\x20.'+_0x3f86fb(0x301)+'ackgr'+'ound\x20'+'.2s;\x20'+_0x3f86fb(0x4b5)+_0x3f86fb(0x569)+'switc'+_0x3f86fb(0x60b)+'a-che'+'cked='+_0x3f86fb(0x532)+_0x3f86fb(0x647)+_0x3f86fb(0x4db)+_0x3f86fb(0x365)+_0x3f86fb(0x380))+(_0x3f86fb(0x37b)+_0x3f86fb(0x50a)+_0x3f86fb(0x6ba)+_0x3f86fb(0x372)+_0x3f86fb(0x4b5)+_0x3f86fb(0x569)+_0x3f86fb(0x6d9)+'h[ari'+_0x3f86fb(0x1fd)+'cked='+'\x22true'+'\x22]::a'+_0x3f86fb(0x53c)+_0x3f86fb(0x2b4)+'t:\x2015'+_0x3f86fb(0x336)+_0x3f86fb(0x6fa)+_0x3f86fb(0x220)+_0x3f86fb(0x280)+'b9d;\x20'+_0x3f86fb(0x4b5)+_0x3f86fb(0x569)+'field'+'\x20{\x20ba'+_0x3f86fb(0x5b0)+'und:\x20'+_0x3f86fb(0x6d4)+_0x3f86fb(0x6e0)+_0x3f86fb(0x418)+_0x3f86fb(0x1ad)+_0x3f86fb(0x2ce)+'order'+_0x3f86fb(0x33c)+_0x3f86fb(0x3db)+_0x3f86fb(0x315)+_0x3f86fb(0x5ee)+_0x3f86fb(0x5a7)+_0x3f86fb(0x1ff)+_0x3f86fb(0x243)+'eef2;'+_0x3f86fb(0x377)+_0x3f86fb(0x4ac)+_0x3f86fb(0x30c)+_0x3f86fb(0x424)+'ont-s'+'ize:\x20'+'11.5p'+_0x3f86fb(0x44e)+_0x3f86fb(0x246)+':\x20non'+'e;\x20bo'+_0x3f86fb(0x375)+'dow:\x20'+_0x3f86fb(0x302)+_0x3f86fb(0x28b)+_0x3f86fb(0x6e5)+'\x20rgba'+_0x3f86fb(0x1c9)+_0x3f86fb(0x6e0)+'55,.0'+'5);\x20}'+_0x3f86fb(0x4fb)+_0x3f86fb(0x31b)+_0x3f86fb(0x61c)+_0x3f86fb(0x2c9)+'n\x20{\x20b'+'ackgr'+'ound:'+_0x3f86fb(0x575)+_0x3f86fb(0x653)+_0x3f86fb(0x4b5)+_0x3f86fb(0x569)+_0x3f86fb(0x1c7)+_0x3f86fb(0x66a)+_0x3f86fb(0x3b4)+':\x20fle'+_0x3f86fb(0x580)+_0x3f86fb(0x690)+'tems:'+_0x3f86fb(0x50e)+'er;\x20g'+_0x3f86fb(0x637)+'px;\x20}'+_0x3f86fb(0x4fb)+'.sk-s'+_0x3f86fb(0x435)+_0x3f86fb(0x602)+'ebkit'+'-appe'+'aranc'+'e:\x20no'+_0x3f86fb(0x42e)+'ppear'+'ance:'+_0x3f86fb(0x39a)+_0x3f86fb(0x66b)+'th:\x209'+_0x3f86fb(0x3d4)+_0x3f86fb(0x62d)+_0x3f86fb(0x48e)+_0x3f86fb(0x24c)+_0x3f86fb(0x5b0)+_0x3f86fb(0x219)+'trans'+_0x3f86fb(0x486)+_0x3f86fb(0x478)+_0x3f86fb(0x433)+_0x3f86fb(0x56e)+'ider:'+_0x3f86fb(0x661)+'kit-s'+_0x3f86fb(0x435)+'-runn'+_0x3f86fb(0x381)+_0x3f86fb(0x4d9)+_0x3f86fb(0x247)+_0x3f86fb(0x3b0)+_0x3f86fb(0x1e4)+_0x3f86fb(0x34b)+'er-ra'+'dius:'+_0x3f86fb(0x1e4)+_0x3f86fb(0x5a0)+'groun'+_0x3f86fb(0x309)+_0x3f86fb(0x3d7)+'gradi'+'ent(#'+_0x3f86fb(0x19b)+'d,\x20#f'+_0x3f86fb(0x340)+_0x3f86fb(0x277)+_0x3f86fb(0x672)+_0x3f86fb(0x22b)+',\x2050%'+_0x3f86fb(0x63e)+_0x3f86fb(0x1de)+'repea'+'t,\x20rg'+'ba(25'+'5,255'+',255,'+_0x3f86fb(0x46c)+'\x20}\x0a\x20\x20'+_0x3f86fb(0x264)+_0x3f86fb(0x5ea)+_0x3f86fb(0x55b)+'webki'+'t-sli'+'der-t'+_0x3f86fb(0x225)+'{\x20-we'+'bkit-'+'appea'+_0x3f86fb(0x25a)+_0x3f86fb(0x4f1)+_0x3f86fb(0x6cb)+_0x3f86fb(0x1d1)+_0x3f86fb(0x5a7)+'heigh'+_0x3f86fb(0x26e)+_0x3f86fb(0x2a5)+_0x3f86fb(0x36c)+'top:\x20'+_0x3f86fb(0x5da)+'\x20bord'+_0x3f86fb(0x1ec)+'dius:'+_0x3f86fb(0x658)+_0x3f86fb(0x5a0)+_0x3f86fb(0x559)+'d:\x20#f'+_0x3f86fb(0x340)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-val'+'\x20{\x20fo'+'nt-si'+_0x3f86fb(0x65e)+_0x3f86fb(0x253)+'font-'+_0x3f86fb(0x1c0)+'t:\x2060'+'0;\x20mi'+_0x3f86fb(0x4bd)+_0x3f86fb(0x58a)+'8px;\x20'+_0x3f86fb(0x222)+_0x3f86fb(0x2e4)+':\x20rig'+'ht;\x20c'+_0x3f86fb(0x21e)+_0x3f86fb(0x369)+'(246,'+'238,2'+_0x3f86fb(0x216)+_0x3f86fb(0x37a)+_0x3f86fb(0x433)+_0x3f86fb(0x1d0)+_0x3f86fb(0x3fe))+('\x20widt'+_0x3f86fb(0x1da)+'px;\x20h'+_0x3f86fb(0x47f)+':\x2022p'+'x;\x20bo'+_0x3f86fb(0x705)+_0x3f86fb(0x648)+_0x3f86fb(0x41e)+_0x3f86fb(0x37c)+_0x3f86fb(0x533)+_0x3f86fb(0x336)+'ackgr'+_0x3f86fb(0x220)+_0x3f86fb(0x39a)+_0x3f86fb(0x6fb)+'ding:'+_0x3f86fb(0x38b)+'ursor'+_0x3f86fb(0x507)+'nter;'+_0x3f86fb(0x38f)+'\x20\x20.sk'+_0x3f86fb(0x276)+_0x3f86fb(0x59a)+'nt-si'+_0x3f86fb(0x65e)+'1px;\x20'+_0x3f86fb(0x1ff)+':\x20rgb'+_0x3f86fb(0x49d)+_0x3f86fb(0x600)+'242,.'+_0x3f86fb(0x24a)+_0x3f86fb(0x695)+_0x3f86fb(0x5cc)+'x\x200;\x20'+_0x3f86fb(0x4b5)+'\x20.sk-'+_0x3f86fb(0x57b)+'err\x20{'+'\x20colo'+_0x3f86fb(0x562)+_0x3f86fb(0x620)+_0x3f86fb(0x53f)+'\x20\x20\x20.s'+_0x3f86fb(0x34f)+_0x3f86fb(0x40d)+'ign-s'+_0x3f86fb(0x566)+_0x3f86fb(0x2a6)+_0x3f86fb(0x598)+';\x20bor'+'der:\x20'+'0;\x20bo'+'rder-'+'radiu'+_0x3f86fb(0x4e7)+_0x3f86fb(0x599)+'dding'+_0x3f86fb(0x60d)+'\x2016px'+';\x20bac'+'kgrou'+'nd:\x20#'+_0x3f86fb(0x19b)+_0x3f86fb(0x6d7)+_0x3f86fb(0x5cb)+'#fff;'+'\x20font'+_0x3f86fb(0x395)+':\x2011.'+_0x3f86fb(0x659)+'font-'+_0x3f86fb(0x1c0)+_0x3f86fb(0x498)+'0;\x20cu'+'rsor:'+_0x3f86fb(0x205)+_0x3f86fb(0x436)+'}\x0a\x20\x20\x20'+_0x3f86fb(0x569)+'btn:h'+'over\x20'+_0x3f86fb(0x530)+_0x3f86fb(0x49a)+'brigh'+_0x3f86fb(0x449)+_0x3f86fb(0x621)+_0x3f86fb(0x53f)+_0x3f86fb(0x5bb));window[_0x3f86fb(0x4f4)+_0x3f86fb(0x459)+_0x3f86fb(0x4fe)+'r'](_0x3f86fb(0x5a8)+'wn',_0x2c2dd2=>{var _0x5aa672=_0x3f86fb;_0x49251a[_0x5aa672(0x5b1)](_0x5aa672(0x439),_0x49251a[_0x5aa672(0x43b)])?(_0x4fcbf8[_0x5aa672(0x422)+'ct']=_0x465b4b,_0x223fb1[_0x5aa672(0x2ff)](_0x2c4d36)):_0x2c2dd2[_0x5aa672(0x5d2)]===_0x49251a[_0x5aa672(0x584)]&&(_0x2c2dd2['preve'+_0x5aa672(0x494)+_0x5aa672(0x371)](),_0x3c3b80());},!![]);var _0x57be2d=document[_0x3f86fb(0x44f)+_0x3f86fb(0x5ff)+'ent'](_0x49251a['CYeTn']);_0x57be2d['style'][_0x3f86fb(0x2d3)+'xt']='posit'+_0x3f86fb(0x32a)+_0x3f86fb(0x5d6)+'top:1'+_0x3f86fb(0x1bb)+_0x3f86fb(0x3b0)+'12px;'+_0x3f86fb(0x3ac)+_0x3f86fb(0x4b4)+_0x3f86fb(0x327)+'646;c'+_0x3f86fb(0x3ed)+_0x3f86fb(0x65b)+'ter;w'+_0x3f86fb(0x1ae)+_0x3f86fb(0x4ba)+_0x3f86fb(0x62d)+'t:26p'+_0x3f86fb(0x49f)+_0x3f86fb(0x573)+_0x3f86fb(0x432)+_0x3f86fb(0x2be)+_0x3f86fb(0x240)+_0x3f86fb(0x282)+'ty\x200.'+_0x3f86fb(0x3d1)+_0x3f86fb(0x360)+'-even'+_0x3f86fb(0x28c)+'to;fi'+_0x3f86fb(0x39b)+'drop-'+_0x3f86fb(0x228)+'w(0\x200'+'\x204px\x20'+_0x3f86fb(0x6d4)+'255,1'+'07,15'+_0x3f86fb(0x348)+'))',_0x57be2d[_0x3f86fb(0x62f)+'HTML']=_0x3f86fb(0x3dc)+'viewB'+'ox=\x220'+_0x3f86fb(0x2a1)+'\x2024\x22>'+'<path'+_0x3f86fb(0x46f)+_0x3f86fb(0x403)+_0x3f86fb(0x267)+'-2.5-'+'4-4.5'+_0x3f86fb(0x23f)+_0x3f86fb(0x4c2)+'.5\x201.'+_0x3f86fb(0x656)+_0x3f86fb(0x4b0)+_0x3f86fb(0x554)+_0x3f86fb(0x682)+'5c0\x203'+_0x3f86fb(0x27b)+'5-4\x207'+_0x3f86fb(0x2b5)+'fill='+_0x3f86fb(0x45b)+_0x3f86fb(0x411)+'oke=\x22'+_0x3f86fb(0x2f0)+'9d\x22\x20s'+'troke'+'-widt'+_0x3f86fb(0x322)+_0x3f86fb(0x2d9)+'ke-li'+_0x3f86fb(0x55f)+_0x3f86fb(0x41a)+_0x3f86fb(0x67e)+_0x3f86fb(0x22f)+_0x3f86fb(0x3a8)+_0x3f86fb(0x5ad)+'\x22roun'+_0x3f86fb(0x5c3)+_0x3f86fb(0x279)+_0x3f86fb(0x36f)+'\x2212\x22\x20'+_0x3f86fb(0x633)+_0x3f86fb(0x23e)+'\x221.5\x22'+_0x3f86fb(0x490)+'=\x22#ff'+_0x3f86fb(0x392)+'/></s'+_0x3f86fb(0x6b3),_0x57be2d[_0x3f86fb(0x44a)]=_0x3f86fb(0x568)+_0x3f86fb(0x5c0)+'r',_0x57be2d[_0x3f86fb(0x278)+_0x3f86fb(0x3d5)+'er']=()=>_0x57be2d[_0x3f86fb(0x2f8)]['opaci'+'ty']='1',_0x57be2d['onmou'+_0x3f86fb(0x427)+'ve']=()=>_0x57be2d['style'][_0x3f86fb(0x282)+'ty']=_0x3f86fb(0x242),_0x57be2d[_0x3f86fb(0x1c4)+'ck']=_0x415eca=>{_0x415eca['stopP'+'ropag'+'ation'](),_0x3c3b80();},document[_0x3f86fb(0x33d)][_0x3f86fb(0x67d)+'dChil'+'d'](_0x57be2d),_0x49251a[_0x3f86fb(0x470)](_0x350f94),requestAnimationFrame(_0x77b0b9),console[_0x3f86fb(0x652)]('[saku'+_0x3f86fb(0x4cb)+_0x3f86fb(0x64b)+'enu\x20r'+'eady.'+_0x3f86fb(0x22c)+':',_0x1ea0a1[_0x3f86fb(0x333)]);});})()));function _0x3870(){var _0x218aaa=['BwvsDw4','icaGyMe','zIXZExm','B2X1Dgu','u3LuAha','rLjytvK','Bvj2wvu','iL0GEYa','ida7igi','yunzsey','ls1W','DxjDig0','wM9Xtee','y3jLzw4','t0v5s0W','y3jVBgW','BYb7igq','ihDLyxa','Bg9N','nde5oYa','Bw4Ty2W','mNb4ksa','oc00lJu','txrKDgS','iduWjtS','nxb4oYa','u2fMzxq','oNbVAw4','mcWWlJG','AhjACLO','EMu6ide','s3byz24','Dxm6ide','oI13zwi','B2fKzwq','igXLyxy','u3brsKK','q1D4CeC','mNWXm3W','Cg9W','CMqTAgu','lK92zxi','ihSGzgK','oYb3Awq','uMvZzxq','qMTurvG','mtaWid0','qvngEuy','Dw5PDhK','wfzfrMq','ic8GDMe','BI1ZDwi','A291CNm','yxjPys0','B2f0Eq','DgHPCYa','BNnSyxq','CxLgDLG','BwjVzhK','C2STyNq','DNCGlsa','yxbWzw4','BMqIihm','ig5VigG','ihWGrvi','zM9UDc0','idqGnc4','uxbTCfi','BgLNBG','EvDiqLy','Bcb7igq','lwnHCMq','BwrPt3a','BNrLCI0','CYbpDMu','y2n1CMe','yxbWBgK','rwHptg0','rePYAuS','yMX1CG','AwDUlwK','tKCGlsa','DKPkCwe','BgXIyxi','C2STy2e','ywrKAw4','zxG7ige','AwXKigG','C01kD2u','Dgv4Dei','AxrPywW','mtrWEdS','C2STBM8','lZ48l3m','q29SB3i','lxrVCca','zgvSzxq','rK5ZAwW','zc10Axq','DhKGjq','ldePoWO','B25SEsW','sNvTCca','igzSzxG','BK9YAfa','z3jHDMK','DvPPAuO','v2LKDgG','uMfWAwq','wgHIEfK','AujeAhq','zKzYD2S','twz0BLC','ihLVDxi','uNH5DwO','DMC+','BMqGBwe','Fdn8nxW','AxrLBxm','y2fSBa','zsbBrvG','mtySmc4','mtu3lc4','B2STCMu','lwjHBNi','mcWWlJu','Acb7iha','z24Ty28','oYbJB2W','DgHLigy','zw1LBNq','mtSGyMe','DML0Eq','zwLUC3q','C2v0uhi','igvSC2u','BujmteG','zNvSBhm','u2v0r2e','ztSGD2K','BhvTBJS','rLn5qLa','yuXiuMW','mZy4v1nszwvn','ihSGzMW','BM9UztS','oYb1C2u','mtjWEca','CMDIysG','y2HPBgq','CZOGmty','zdSGy28','Aw9U','C3DPDgm','DejAvhy','sw5PDgK','B3i6ihi','y2XHC3m','B250lxC','qNLjza','mJu1ldi','zwfKige','Dw5Kzwq','A2DOtLK','zgvYlxi','mcaXChG','zxjPDdS','y3jVC3m','AvfqsKu','zw50','DMfSDwu','y2f0','Ewvdwge','EgHpDuG','yxrLvge','oIaIiJS','Dc1Myw0','vvjbx0S','zvn0EwW','BsbJzw4','ChG7cIa','BwLUkdq','Bg9NBY0','uvbkqMy','Aw9FnZi','DMvYBge','ywnRz3i','oYbWywq','wNncBhG','shLeBK0','DMLHifm','nZTWB2K','B29Rihi','zvbPEgu','DMvTzw4','B2TLpsi','DgvJDgK','CMrLCJO','icaGica','Dxm6idi','yvjPsue','zMy2yJK','ChG7ih0','zxjZihq','DxmGywm','EwX2yKy','ywnIqwe','Dw1UoYa','CZOGy2u','A2uTBgK','y2XLyxi','C2STBge','m3W2Fdu','BwuG','DwnmA1a','yxnLBgK','Ahq6idi','sffKr2O','y3jLBwu','nsWUmdm','Awr0AdO','mJu1lc4','qM90Dg8','idHWEdS','CNq7igC','BxnADvG','CuTRqwu','yw1Hz2u','mhb4lca','A2DYB3u','Awq7iha','oYbMAwW','BsbYAwC','mNb4o3i','mtaYotyZmgPKB25PtG','BxKGC2u','BJOGy28','yuTVDxi','D2vPz2G','Bw92zw0','Bxj1ANC','CJOGCg8','B25JBgK','CMvHzhK','lxK6ige','CMfUz2u','wwjcz3G','kdi1nsW','zsbZzxi','zxG6ide','C0zgsgm','zcb7igi','rwntyKK','Bw9fEha','C2STy28','zhrOoIa','qNDoA2W','yxrPB24','zKXiBuW','mNW0Fde','CKDSB0K','ywjbuNG','B3G9iJa','zwn0oIa','AdOGmZq','rhr2EvG','wezKBxq','zuv4Ca','jsbUBY0','DhjPyNu','zMuGBw8','D2fPDgK','BgrYzw4','Dcb7igq','idjWEdS','B3vUDgu','B3nWywm','wuHyAwe','CI1ZzwW','rgfTywC','oIaXnha','BMCGzM8','zxiTCMe','DMLLD0i','D2LKDgG','t1rizKC','BNnWyxi','yMvNAw4','Aw9UlLq','y2vZlG','B3bjwui','idmWChG','AhLzu3a','zsb0CMe','C2v0','u3bLzwq','AguGzNi','BMq6ihi','ywXSihq','ys1JAgu','Ec1KAxi','y29SB3i','CMvSEsa','ig9Wywm','4Ocuig5Via','y2fWtw8','phbHDgG','ihbVAw4','q2vesw0','CYbnB3y','s2Hjv1K','Aw5KzxG','y3qGB24','zxiGC2W','zxnJ','AwrLihS','B3zLCMy','twTJCxG','ideYChG','zgTPDa','qKLoAuy','AM1TqLm','vLHPuxi','zwXfuuu','ndiSlJG','y2n3q1O','zg9JDw0','Dw5KoIa','C2STy3q','i2zMzG','uunSyM0','C2HPzNq','B2XVCJO','AsXZyw4','B3vUzdO','zxmGEYa','Dgv4Dc0','DwH3uMy','reDpELC','AhvTyIa','EYbMB24','Bwf4','C2HHzg8','svj1suO','zu1kruC','CIGTlxa','ifvxtuS','rhrtAKO','C2STC3C','DhjVA2u','yw5Jzs4','teHzqvu','ig9U','AwXS','A3nqB3m','BvvYq0i','v3Lzy24','oYbHBgK','ALPuBKy','Bg9JAW','AY1Jyxi','B3bLCNq','zenOAwW','DMrztNy','mciGCJ0','ltqTnY4','DgLVBJO','nJaWia','mc41','oIaJzJy','DunesKO','ig1PBM0','DgXPBMu','ihSGAgu','vwXArMC','AwvSza','nsK7iha','tLfQvMu','EdSGyMe','ideWChG','oYbMB24','rw5NAw4','zwXPr1O','BwvZC2e','igzVDxi','mxb4oYa','y2vSzxi','yxnZAwC','Bhrsrfe','CM9WywC','zxjYB3i','Axb0kq','CMfUy2u','oIbJDxi','zxjZ','zwfWB24','tu9ersa','u0fgrsa','B2fvsKC','B3f2vwi','CdOGmti','s2LOzuS','icaUC2S','oIbHyNm','r2nTDLO','yY0XlJu','sxDJwwC','mdSGFqO','Aw9F','B3jZige','oJa7EI0','ndSGFqO','DdOGnNa','EYbIywm','DLLjwwK','uIb2ms4','t3Hzvwu','r3blu0W','B2rL','zgr0sM0','lw5VDgu','ksaWida','B25TB3u','y2LYy2W','BuveDMK','ltiUnsa','uhLKDNO','BgLNBI0','rM9Yy2u','r2zkz0i','icnMzJy','z2v0q28','B3bHy2K','DfzIz20','r3DJu1y','lMXHC3q','DZOGAw4','ywn0A0S','y2vUDgu','ihn0AwW','CM9UzYa','idaGmca','Dhm6yxu','tw5ptKy','Ag9VA1a','BgfIzwW','CMLKoYa','z29K','zw15igm','C2fMzq','CMvZDg8','A2viuK4','v0ztvNu','zZOGmta','sLLnswS','nKrLCNjLtG','q3jVC3m','ohb4oYa','odaSmtK','lwnVBhm','nJiWChG','Bgf5ig8','DgL2zsa','idaGmJq','ide0ChG','ihSGy28','rePyEhi','EdSGBwe','zMXLEc0','lxbHCMu','DhLWzq','B3bLBG','wLbru2m','D1jAsgu','oYb0CMe','EtOGmdS','BMC6igi','z2fTzuW','vLPwzwS','nNb4ida','rLbtig8','BLbSyxq','EYbSzwy','lJv6iIa','igv2zxi','C2HVB3q','AxrPB24','mtGGnIa','ihWGBw8','zxmGB24','BMf2','Aw9FmZa','CMfUC2K','AffVseG','yxrSEsa','D1L1uwG','ntuSlJa','qwjMr1e','BgLUzvq','Aw1zvxq','mxW0Fdm','oIaWide','ywqGEYa','B3b0Aw8','EdSGAgu','yxj0lG','zYb7igm','DhrPBMC','nsK7igi','Dgv4Dee','zMXLEdO','u2TPChm','nhWYFdu','y3nZvgu','tw9Kzsa','wvnIsuy','lwL0zw0','qK15BeS','DgnOoJO','ihn0CM8','A291CI0','idGWChG','zhbY','oJa7D2K','ihjLBg8','D2L0Aca','wLzSzM4','Fdb8nxW','DgLKzvC','y2PgCxa','ywXPz24','CI51As4','BI1TywK','oYbIywm','BgPYy1q','uNzmB00','vMLZDwe','ugj1y08','AwrLCG','CMvMAxG','ndHWEcK','mMHSuwryCa','i2zMnMi','icaGlM0','Bg9Hzhm','v0ftrca','ywrIBg8','r29Kie0','CZO6lxC','igv4Axq','C3r5Bgu','sw5ZDge','ieTLzxa','zwfKB3u','z3Pkqw8','rvfUB1i','wgvJD0W','uLvNBK4','wuvHy0C','mNmSigi','Aw5Zzxq','C3rYB2S','zdSGyMe','ndySmJm','AwX0zxi','zuXKAeO','C2STBwi','zdOGBgK','u2L6zq','B250zw4','nNb4idK','sgvPz2G','s2v5qq','ug9ZAxq','mcuUifm','v2vItw8','ldiXlc4','B3nL','Bw4TDge','CI1Yywq','zfPRC2G','Bw91C2u','CMPhBgW','z1LnCuO','rwXLBwu','lNnRlwy','BNq6igm','C3rYB24','v3jHCha','EsbKyw0','z1r0yMm','ugf0Aa','Ad0ImIi','nJuXzLnxvLb6','uJOG','lxrPDgW','mZm3mta4mgH3CMXlAa','ndC0odm','tKCG4Ocuia','DgrLugG','Aw9UoMy','CvPbwuW','C2XPy2u','Bg9HzgK','zgfTywC','vxHpsMm','A1nfBwS','Bg9Y','wwHABgK','DxDTAW','lc4WocK','zM9UDa','ChG7igi','ndSGBwe','BguGC3q','ywnPDhK','DtmY','rNjHBwu','oIaWoYa','yM9KEq','qwrIBg8','CMvUDem','zJzIowq','BM93','vfruy0y','BM9tChi','BwLZyW','igHVB2S','yxr0ywm','tw92zw0','nYWWlJC','vLv4Dvu','ENHcu2W','igjVCMq','oIbIBhu','re9nq28','oYbVCge','AY1IDg4','rMTVv24','AgfPCG','igzVBNq','zxzLBIa','igHLAwC','C21HBgW','DgvTlxu','AwXLzdO','AwvZlG','kc4YmIW','y3rPB24','igvYCG','mJiSocW','AguGzgu','BgvyBKi','CNPYB1q','Aw50zxi','BxvuvKq','BgLUzvC','igDHDgu','De1uq0K','CM91BMq','kYbtCge','q0PZzwe','z0rjBfy','ihjNyMe','sK9Ztey','zxj5idi','CMDPBI0','z2v0','Ag9ZDg4','zsbJEd0','C3rYAw4','yxvSDa','mJuPoYa','x19tquS','oIbJzw4','Ec1ZAge','Bhv0ztS','ihbHzgq','C2f2zq','ldi1nsW','ktSGFqO','ysGYntu','lxjHzgK','AdOGnJi','zw50CW','tNvbvKi','oIbYz2i','ywjSzs0','nYWUmJG','BMX5kq','ChG7iha','v3rwtw8','lxDPzhq','EhjOsKO','BgvUz3q','rgzMDKK','CgvHDcG','ida7igm','lNnRlwm','ignHy2G','AwvKigm','ih0kica','rvH1u2W','mNb4ide','nMi5zci','B3nLihm','twLZyW','lxnPEMu','EtOGz3i','iJeYiIa','AY1OAw4','EYbWB3m','ig5VBMu','BhrLCJO','wxD0rLC','nZaWia','mJvWEdS','vefuDxG','tvzOtva','DKzTrhK','A1vYAK8','oxW0Fdi','svfvyLO','EKXUvLm','y2fWu2G','C3bLzwq','lwXPBMu','CJSGz2e','DhjHBNm','BNqTC2K','EI1PBMq','B3rZlG','te1c','qMXVy2S','AwDODdO','txb2whO','Aw1Lihm','BgLJyxq','C3bSyxK','AwLAD0S','mtj8oxW','u3HSDK4','Bw92zq','CunPvw0','zM9YBxm','zg93BIa','igP1Bxa','idrWEca','zZOGnNa','kYbmtui','ocK7ih0','CMvU','qsblt1u','Aw5Mqw0','Fdn8mxW','D2fYBG','v0zkwui','nsWYntu','zxH0','ifvUAxq','z3jPzc0','idi2ChG','AxnPyMW','As1TB24','B3zLCMW','ChGPoYa','zwfK','mNm7Cg8','uMvJDa','Bw4TAca','mhb4oYa','C2vLBNq','oYbYAwC','BMvHCI0','B25PBNa','y29PBa','uMf0zq','yM9Yzgu','phn2zYa','DhLSzq','z2jHkdi','lMP1Bxa','ihrOzsa','ide7ig0','vxPIB0O','m3W0Fdu','khjLBg8','CMvJDa','oYbVDMu','CMfWAwq','yxvys2q','tMfTzq','BsbSzwy','ANfJCMO','lxnJCM8','DxjZB3i','tM8GuMu','rLfpCfm','BI1JBg8','BwTiCuq','Dg9Nz2W','zuTYyNC','zw50rwW','lwLVxYO','BwLKzgW','C2STCMe','te5xywe','zfDNBMy','lM1Ulxm','ChG7ihC','thzPwNy','zwXHDgK','Bg9YihS','icnMzMy','BwrLC2m','idrWEdS','y2uGB3y','mtiGmJe','Aw4TD2K','zsGXnta','D0jSDxi','runTD2G','ienquW','vg90ywW','yYGXmda','zxrL','A2jfEKO','ihSGywW','zgvZyW','A2vizwe','lc40ktS','iIbZDhi','DhfHB0C','Aw4GC2e','AwWGC3a','B2vZihq','phnTywW','oYbKAxm','ntuSmJu','tfH5yw4','psjYB3u','yM91BMq','ieaG','ktSGBwe','B3jKzxi','DhKGDMe','nJTWB2K','idiWmg0','ANvTCfa','BMPKsuy','ChG7igy','zw50zxi','C2fRDxi','C2vSzwe','zxi6igi','zwqGyw0','zwj1su0','CJSGzM8','BhvLCY4','BMC6idq','BMu7ige','yxjLBNq','CM9Szq','zMLSBfm','mc41o3q','icaGic4','kg92zxi','BgLKzxi','DgvYoYa','mdbTCY4','tM8Gu3a','uvnZzuO','CZPUB24','BLfdu1m','z2v0rwW','rhDeugO','u3bjru0','BI1PDgu','yNv3vhy','y29SCZO','Bg9Hzgu','C2v0x3q','Bw92zvq','mxWZFda','q29TyMe','z2LMEq','C2fMzu0','Dg5LC3m','DgL0Bgu','sgLHzxG','Bw4TAa','zxzLBNq','EdSGB3u','y3jLyxq','v01ligK','zMLSBfq','t2zXz1C','tgvNAw8','ihn5C3q','uxfoyui','oWOGica','BLvYz1u','CdOGmta','zw50tgK','C2D3zKe','iM5VBMu','ihWGz2e','vw5PDhK','BMC6ida','mJC2odrYEuH4s2e','zK9Hvxq','yJPOB3y','DgXL','qxjoALK','y0ncqLK','B246ig8','zs5bCha','ig1HEsa','oIa0ChG','DwX0','Ae1qDum','nwmWidm','lJa4ktS','qNf6tgG','rwHdCNa','igq9iK0','qw9ctwW','Bgv4oIa','yxrJAgu','Fdr8mhW','z2DSzwq','r2nktKK','ufLusvq','mJqSmtC','DdSGFqO','y2vdAgK','zsXTB24','FdH8nG','ztOGmtm','tuzyqKC','yM90Dg8','zwLNAhq','lxnLCMK','ihbSywm','vu9Yshq','mJu1lde','ieDLDfy','zwXK','CgfYzw4','Cfv4ALu','mdi1ktS','tNv2AeK','igrPC3a','CIiSici','Buj1Cgi','Dgv4Dem','DdOGoha','yLrfv1O','igzPBgW','qxbWBgK','BMq6ihq','BgLUzw4','BNrezwy','y3KGB24','Bw4TBwe','refswMO','DdOGnZa','lwrPCMu','DgvYoIa','rK5vEhy','oIa5oxa','ysGYndy','vMfSDwu','EdTVCge','C2HVD24','A3ndChm','D3rIruW','yw5Uywi','lJuGms4','rgfUz2u','t0HLywW','CI52mq','AtmY','sfrnta','ywqGDg8','Bw4TCge','Aw5NoIa','sgn3AuK','r0vUvhm','BdOGBM8','idqTnc4','tuLtu0K','D3PVrhO','zg93kda','zxG6mJe','FqOGica','z2v0sxq','C2STDMe','zwjRAxq','zJmY','mJzWEdS','C2STAgK','B3i6iha','BI13Awq','y2HdB2W','Axr5oIa','DxjH','BMnL','nsaWlti','DMfS','u3vpEwW','EvjdB1G','z2jKs0m','B2rLu3q','mxb4ihi','y2HLCYa','AwnRihm','CMeTA28','D2vKtge','CMvSB2e','CM9Wlwy','v0Dkve0','vgfRzxm','zMLSzw4','CIb2ywW','A2zqBu0','nJaWide','zvzHBhu','AgvHzgu','mhG2mda','z24TAxq','DhjHy2S','swyGCMu','yMfJA2C','Bg9Hzca','AxrJAa','rxHW','C3rLCa','BhKGkhi','AwX5oIa','ChbLBNm','oIbMBgu','zxjZy3i','ntaLktS','ywLYlG','CZOGoha','C2v0qxq','yMX5lum','tgLZDa','ys5RB3u','s2v5vW','uu9XBxi','yxjKlxq','CIbHzhy','yw5ZzM8','oIbUB24','ugvwt2G','wKTvD1a','ywrKrxy','r0L6zvK','ywLSzwq','EcbYz2i','jsK7ic0','lc4WncK','CMfPC2u','cIaGica','zhjHAeq','nYWWlJm','C3rLBMu','y0zUu1i','CYbpsgu','rePLCK8','wMvYB2u','C2STzMK','DMvYihS','DhLqy3q','CxnIruC','oIbWB2K','mteZmZiZnuTKDMrZCq','ihrVide','ldeWnYW','AxmGyNu','u2vNB2u','DxnqqMO','ignLBNq','CxvLCNK','tKLRC0m','mNb4oYa','CMfKAxu','ywz0zxi','u3rHDgu','Ag9VA3m','ig1PBIG','Bw1VifS','B0fKqMG','vNzQAue','A3nty2e','BMLUzW','BYb0Agu','ignHBgm','ug9mrKW','q291BNq','q2XVC2u','vvDnsYa','l3jHCgK','psjTBI0','zxbdy2e','zw0TDwK','zuP2EKe','A2uTD2K','CMfUC3a','BI1SB2C','mZq2ntuXnMDxDhbTEq','CMqTDgK','u2vJsue','yMHVCa','BgfZDeu','De5Vzgu','EYbMAwW','CMLUz3m','iNrYDwu','Dxm6idy','idK5osa','zMLSBa','DhK6ic4','lM1Ulxa','ywrK','t1vsx18','igfUzca','zfL4rLy','zNrLCIa','CY1Zzxi','lMrSBa','oYb9cIa','AuzrD1e','AgvSza','vujjvfC','B290zxi','u2HHCNa','zunJthu','ywDLigq','ChGGmdS','CMXHEsa','BM9Uzq','lxnOywq','DhfXAuO','zsb2ywW','t0Htuhm','mNb4ihu','mZy0vMjXz0Hd','D2vIA2K','r3D3rMm','BMDL','sgLKzxm','nxm0idi','mtr8mty','C3rVCfa','Dg9W','r0zwz3O','z3jVDw4','q3nbzhC','zxi6oI0','BgHdAxC','ELDss0W','r3jHDMK','BMvJyxa','zgLZCgW','zgvZ','CJOGi2y','BMu7ihm','zwCGzMe','B3i6icm','zwXMoIa','CNjVCG','u2fRDxi','ic5ZAY0','CwDiy1m','CZOGyxu','mtnZsefbvgC','mhWXFdm','C2STC2W','yxGOmJu','ocKPoYa','mtfNEwDRq2K','uMTSwxy','y2L0EtO','De1wyLG','icmYmJe','ALbkCNG','zw50CZO','DgvYigm','mcWWlJy','qMjgCgm','BM90zs4','BML0igy','tw92zq','DgG6ida','Dw5RBM8','EdSGywW','z2fWoIa','zxqGmca','qNvUBNK','uLnhC3q','x19ZywS','ms4XlJa','ChGGDwK','t0f1t08','iezquW','DgG6idi','ufmGDw4','idi0iJ4','Dc1Iywm','mdCSmtu','u0flvvi','oJiXndC','lwzPBhq','owqIihm','DgLKzs4','C3rPBgW','iNjVDw4','4Ocuig92zq','C1vwueS','C3rHCNq','EdSGCge','ihSGzM8','C3zNiJ4','EMDgq0O','CgziA1a','CuP2weK','BdOGAw4','igjHy2S','zvbSDwC','t2DfyMW','nYWWlJG','wfHLy3G','q1LLvg4','Dvrpre8','nNb4oYa','A2v5zg8','y3vYC28','CNnVCJO','ALbcqMm','BgvMDa','AM9PBJ0','lxnHBNm','w3nHA3u','y2TNCM8','re9vz1y','CNr1Cca','AgfZ','yxKGB24','yNLZs3G','B24Gzxy','BNrLBNq','Bhb4zuW','igXLzNq','lc4WnsK','icaG','ufHcrhu','AguGDxm','CM9Rzxm','zw1ZoIa','ysblB3u','psiJzMy','u3bHy2u','zciVpJW','ifjLy28','ugn0','y29TyMe','icaUBw4','lM1Ulxq','A1DssgK','q2zbBKq','Bg9YoIa','zZOGmNa','wwPRv2i','tvH4r1i','BY1ZDMC','vvHZCNG','rKXQr24','y29Kzq','B24U','B2LS','mcWWlJC','AxHLzdS','Bg93oIa','A1zqv1y','v2HOqK8','ltjWEdS','mcWUntu','y2fUDMe','B0DruKK','u2nHBgu','BtOGmJq','A2v5C3q','A2v5Dxa','rMLLBgq','B1jJv3e','yw1L','DdOGmZq','DgLVBI4','zc5VBIa','ig1HCMC','Aw46ida','lxnSAwq','C2v0sxq','lsbVDMu','EcKGC2e','AxvZoIa','EtOGyMW','DKHis24','BNrLCJS','ktSGy3u','igDHCdO','zMLUza','D3jPDgu','CMvWBge','CMvHzey','twXJtLO','ztOGmtC','zgL2','zMLSBcW','rMn2yLK','mIaXmK0','rvHqxq','zuvSzw0','ldiZocW','oIa2nta','ihSGlxC','CgfJAxq','ANLfv3G','CMzSB3C','lwfWCgW','wLfZweG','ihSGCge','EgvZige','ihrVCdO','AfTHCMK','Bw4TBg8','oIa4ChG','t3bMAMC','t3zLCNC','C2v0ida','DgvY','uNvUDgK','y2HtAxO','DgXLCW','ywTRue0','BwTXwNy','B3nizuy','yNv0Dg8','zvjHDgu','igjHBM4','zw5HyMW','AwvSzca','C3bSAxq','oIaZmNa','t0TRCwG','zJDHotm','kdeUmsK','zNbZ','ifvjiIW','BNnPDgK','Bw8GDg8','BgW+','B29RCYa','BM9szwm','CM0GlJq','B2nRoYa','uMvJB2K','mcaWida','AgvPz2G','DgvZDa','Aw5Uzxi','CMPMC3K','DwjNufu','mJSGC3q','y3K9iJe','sNvTCfq','Awr0Aa','D0nVBg8','yxa6idG','u1b3s3e','lYbhCMe','uxbsyMm','mJeZmZG4DKrSwxPw','zxiTzxy','Bgf5oIa','ksaXmda','mZuSmJq'];_0x3870=function(){return _0x218aaa;};return _0x3870();}
