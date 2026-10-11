// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.9.8
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
function _0x1b49(_0x2dcc5d,_0xaba341){_0x2dcc5d=_0x2dcc5d-(-0x26*0x60+0x1683+-0x737*0x1);var _0x589317=_0x4ac9();var _0x31fafb=_0x589317[_0x2dcc5d];if(_0x1b49['DsLRlD']===undefined){var _0x2fd29d=function(_0x2e5c7a){var _0x2466aa='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xfbe19b='',_0x1260d2='';for(var _0x7dfe6d=0x1*-0x24cb+0x3*-0x7bf+0x3c08,_0x238e6a,_0x3429e8,_0x77751c=-0xb9*-0x2d+0x7d5*0x1+-0x409*0xa;_0x3429e8=_0x2e5c7a['charAt'](_0x77751c++);~_0x3429e8&&(_0x238e6a=_0x7dfe6d%(-0x30*-0xc3+0x3*0xe9+-0x2747)?_0x238e6a*(0x20b*-0x8+-0x2607+0x369f)+_0x3429e8:_0x3429e8,_0x7dfe6d++%(-0x67*0x3f+-0x1f*0x3+-0x25*-0xb2))?_0xfbe19b+=String['fromCharCode'](-0x427*-0x1+0x228e*-0x1+0x1f66&_0x238e6a>>(-(0x5a1*-0x2+0xc6e+-0x95*0x2)*_0x7dfe6d&-0x1*-0x17a3+-0x1062+-0x73b)):0x2541+-0x99f+-0x1ba2){_0x3429e8=_0x2466aa['indexOf'](_0x3429e8);}for(var _0x58fc5b=0x773+0x3*0x897+-0x2138,_0x51a2e8=_0xfbe19b['length'];_0x58fc5b<_0x51a2e8;_0x58fc5b++){_0x1260d2+='%'+('00'+_0xfbe19b['charCodeAt'](_0x58fc5b)['toString'](0x1*0xe3b+0x724+-0x154f))['slice'](-(-0x1511*-0x1+-0x15d9*-0x1+-0x2ae8));}return decodeURIComponent(_0x1260d2);};_0x1b49['lYNsMU']=_0x2fd29d,_0x1b49['AKlJvw']={},_0x1b49['DsLRlD']=!![];}var _0x3c683a=_0x589317[0x40f+-0x20b6*-0x1+0x24c5*-0x1],_0x96b78a=_0x2dcc5d+_0x3c683a,_0x5f0c76=_0x1b49['AKlJvw'][_0x96b78a];return!_0x5f0c76?(_0x31fafb=_0x1b49['lYNsMU'](_0x31fafb),_0x1b49['AKlJvw'][_0x96b78a]=_0x31fafb):_0x31fafb=_0x5f0c76,_0x31fafb;}(function(_0x2bc86b,_0x4e1447){var _0x3a4418=_0x1b49,_0x49ac1f=_0x2bc86b();while(!![]){try{var _0x17fcd2=-parseInt(_0x3a4418(0x257))/(-0x809+0x74e+0xbc)+parseInt(_0x3a4418(0x616))/(-0x1*0xc02+0x11*-0x1+0xc15)*(-parseInt(_0x3a4418(0x301))/(0xc8d+-0x10af+0x425))+parseInt(_0x3a4418(0x3f2))/(-0x1330+-0x1d68+0x309c)+-parseInt(_0x3a4418(0x3df))/(0x76d*0x2+0x1082+-0x71*0x47)*(parseInt(_0x3a4418(0x5fa))/(0x1791+0xb*0x107+-0x22d8))+-parseInt(_0x3a4418(0x3b0))/(-0x10ed*0x1+0x2637+-0x1543*0x1)+parseInt(_0x3a4418(0x378))/(0x6e9*-0x3+0x79*-0x8+-0x1*-0x188b)+parseInt(_0x3a4418(0x3f4))/(0x4d5+0x2d2*0x4+0x55c*-0x3)*(parseInt(_0x3a4418(0x536))/(-0x23*-0x113+0x2411*-0x1+0xbf*-0x2));if(_0x17fcd2===_0x4e1447)break;else _0x49ac1f['push'](_0x49ac1f['shift']());}catch(_0x4014aa){_0x49ac1f['push'](_0x49ac1f['shift']());}}}(_0x4ac9,0x86*0xe14+-0xb99d1+0x2*0x66613),((()=>{'use strict';var _0x394b7e=_0x1b49,_0x57632f={'JSkQE':function(_0x15b011,_0x306640,_0x4d9cca){return _0x15b011(_0x306640,_0x4d9cca);},'Uxvor':function(_0x4bf0e7,_0x291032){return _0x4bf0e7!==_0x291032;},'pQTYW':_0x394b7e(0x36e),'CQQYs':'hEUqN','dkKav':'sakur'+_0x394b7e(0x527)+_0x394b7e(0x673),'ltrTr':function(_0x545850,_0x1bb92a){return _0x545850===_0x1bb92a;},'KDSFp':_0x394b7e(0x3c5),'bMTgt':function(_0x44776a,_0x19b024){return _0x44776a+_0x19b024;},'okFLl':_0x394b7e(0x3a4),'RoGqm':function(_0x532992){return _0x532992();},'vlfvm':function(_0x6201aa,_0x381ce9,_0xa431d4,_0x5266a8,_0x1efe9e){return _0x6201aa(_0x381ce9,_0xa431d4,_0x5266a8,_0x1efe9e);},'vUNdM':function(_0x261485,_0x425f59,_0xe26e2a,_0x552840,_0x51ceb6){return _0x261485(_0x425f59,_0xe26e2a,_0x552840,_0x51ceb6);},'orUFT':function(_0x25dc76,_0x3ae820){return _0x25dc76===_0x3ae820;},'MZGgr':_0x394b7e(0x52c),'mxShe':_0x394b7e(0x39f)+_0x394b7e(0x607),'NvSYg':'\x20|\x20ER'+_0x394b7e(0x6f3),'elTAs':'DsQbm','jlfce':_0x394b7e(0x40e),'TWeZo':_0x394b7e(0x64b),'nynsN':_0x394b7e(0x336)+'n','XDFcc':'HJNii','wcoXz':function(_0x500a27,_0x4e7a0e){return _0x500a27===_0x4e7a0e;},'tREzL':'1|4|0'+'|3|2','Shlqm':function(_0x35132b,_0x2367cb){return _0x35132b!==_0x2367cb;},'NczAE':'mclgo','ibUeH':_0x394b7e(0x362),'KvmpS':'yiWHY','VbzCe':_0x394b7e(0x2ee)+_0x394b7e(0x34a),'dJpkJ':function(_0x5b144b,_0x1febe7,_0x290b24,_0x31d304,_0x4ab1f4){return _0x5b144b(_0x1febe7,_0x290b24,_0x31d304,_0x4ab1f4);},'hwajq':_0x394b7e(0x165)+_0x394b7e(0x17d),'GEUkm':'1|6|3'+_0x394b7e(0x5ea)+'5|4','wdswG':function(_0x58479a,_0x187c6b,_0x4a1bcb,_0x456f0c,_0x4b0177,_0xff5874,_0x585227,_0xe6cab3){return _0x58479a(_0x187c6b,_0x4a1bcb,_0x456f0c,_0x4b0177,_0xff5874,_0x585227,_0xe6cab3);},'PjbSE':'Local'+'Die','JLHsH':_0x394b7e(0x6d9),'GkppB':'Legio'+'nPlat'+_0x394b7e(0x517)+_0x394b7e(0x12d)+'tide.'+'Recoi'+'lMoti'+'on','VnERg':function(_0x2aa66e,_0x12da66,_0x5023ac,_0x28fa43,_0x1c3ed6,_0x3722bb,_0x3eb013,_0x50c10e){return _0x2aa66e(_0x12da66,_0x5023ac,_0x28fa43,_0x1c3ed6,_0x3722bb,_0x3eb013,_0x50c10e);},'jINln':'god','dAnNR':_0x394b7e(0x606)+'th','gLPFj':'Initi'+_0x394b7e(0x17c)+_0x394b7e(0x145)+'lth','xxYGb':function(_0x21436b,_0x7b4935,_0x2e8d45,_0x500424,_0x26cf5f,_0x1e93c6,_0x224949,_0x40550f){return _0x21436b(_0x7b4935,_0x2e8d45,_0x500424,_0x26cf5f,_0x1e93c6,_0x224949,_0x40550f);},'HIRYd':'IsGro'+_0x394b7e(0x3e4),'QqBap':function(_0x3ea82f,_0x311b2c,_0x98f116,_0x280475,_0x29443f,_0x5e58ed,_0xbf19f4,_0x4009bc){return _0x3ea82f(_0x311b2c,_0x98f116,_0x280475,_0x29443f,_0x5e58ed,_0xbf19f4,_0x4009bc);},'CSXCx':'capSh'+_0x394b7e(0x4ba),'iPLJr':'Sakur'+'aKour','rFIIY':_0x394b7e(0x692),'rfZek':_0x394b7e(0x51e),'nJjnH':function(_0x2f57ab,_0x324466){return _0x2f57ab/_0x324466;},'kMKIh':function(_0x53d5cc,_0x47d743){return _0x53d5cc(_0x47d743);},'zteIN':function(_0x3e3e94,_0x261f5b){return _0x3e3e94!==_0x261f5b;},'vsjYE':function(_0x224dc9,_0x413a3e){return _0x224dc9!==_0x413a3e;},'PGLvj':function(_0x36b66c,_0x3574bc){return _0x36b66c&&_0x3574bc;},'jOgYj':function(_0x53ce6e,_0x51dd30){return _0x53ce6e!==_0x51dd30;},'gEJtD':function(_0x41a1c8,_0x3882f6,_0x43debb,_0x3f319d,_0x1de632){return _0x41a1c8(_0x3882f6,_0x43debb,_0x3f319d,_0x1de632);},'hTOwl':function(_0x1dc680,_0x11ec19,_0x4379cf,_0x53f643,_0x2e045a){return _0x1dc680(_0x11ec19,_0x4379cf,_0x53f643,_0x2e045a);},'OWqSx':function(_0x36078b,_0x2dc7ff){return _0x36078b!==_0x2dc7ff;},'pjzfv':_0x394b7e(0x41b),'lhWdN':function(_0x133460,_0x55dc3a,_0x245a5e,_0x1ec81d,_0x4641f6){return _0x133460(_0x55dc3a,_0x245a5e,_0x1ec81d,_0x4641f6);},'TDssl':function(_0x96fbdf,_0x124aee,_0x2b9982,_0x2b1190,_0x425297){return _0x96fbdf(_0x124aee,_0x2b9982,_0x2b1190,_0x425297);},'rKOYh':function(_0x48294b,_0x414632,_0x298e1d,_0x14d495,_0x132e09){return _0x48294b(_0x414632,_0x298e1d,_0x14d495,_0x132e09);},'WUTwr':function(_0x27451a,_0x41c87c){return _0x27451a+_0x41c87c;},'CJCqz':'RXjVK','YTDzd':function(_0x3bfd85,_0x29cf6a){return _0x3bfd85+_0x29cf6a;},'SgSNn':function(_0xb076ad,_0xd1a669){return _0xb076ad+_0xd1a669;},'EBMdb':function(_0x556ae5,_0x41fa39){return _0x556ae5+_0x41fa39;},'fVSVs':function(_0x1a206d,_0x36a783){return _0x1a206d*_0x36a783;},'ABNGG':function(_0x2b3546,_0x39a13e){return _0x2b3546-_0x39a13e;},'GKCRf':function(_0x87b1e2,_0x45f3ac){return _0x87b1e2-_0x45f3ac;},'NVraX':function(_0x35f9ad,_0x5a0089){return _0x35f9ad-_0x5a0089;},'fcsGG':function(_0x52ffcf,_0x4d86aa,_0x5f5174,_0x47b99b,_0xd0257a,_0x2a6795,_0x2e9fc0){return _0x52ffcf(_0x4d86aa,_0x5f5174,_0x47b99b,_0xd0257a,_0x2a6795,_0x2e9fc0);},'xLxaM':function(_0x104caf,_0x51facc){return _0x104caf+_0x51facc;},'CcTdt':function(_0x5d757d,_0x57bfdb){return _0x5d757d+_0x57bfdb;},'seOyG':function(_0x460e46,_0x18c74b){return _0x460e46+_0x18c74b;},'pgzqn':'KeyD','rQHlx':function(_0x49f1c6,_0x58f258){return _0x49f1c6+_0x58f258;},'fTmIU':'mouse'+'1','iyRWY':_0x394b7e(0x4ff),'neXnp':_0x394b7e(0x469),'BkWEC':function(_0x23b25d,_0x4a40f9){return _0x23b25d+_0x4a40f9;},'uTblM':function(_0x4efc3e,_0x40f819){return _0x4efc3e/_0x40f819;},'vruEG':'DnYha','WSbiU':_0x394b7e(0x260)+'wn','QBfLN':_0x394b7e(0x698),'HwkaD':'vemFV','HIJgh':function(_0x27b1bb,_0x3fe22f){return _0x27b1bb===_0x3fe22f;},'jzccj':_0x394b7e(0x41f)+'activ'+'e','ZlMYF':function(_0x41e45a,_0x257de3){return _0x41e45a===_0x257de3;},'Arbxz':_0x394b7e(0x2ae),'QkaUz':function(_0x27bb0c,_0x39042f){return _0x27bb0c===_0x39042f;},'ziGbf':function(_0x1fb9d9){return _0x1fb9d9();},'wuaxN':'rgba('+_0x394b7e(0x155)+_0x394b7e(0x1c8)+_0x394b7e(0x6aa)+'5)','HINcU':function(_0x518ada,_0x1e5fb9){return _0x518ada-_0x1e5fb9;},'BQAxf':function(_0x5ae35b,_0xf671ba){return _0x5ae35b*_0xf671ba;},'UnCqL':_0x394b7e(0x38f),'kRsqk':function(_0x13d285,_0x4a8c9f){return _0x13d285+_0x4a8c9f;},'ugefa':function(_0x4c1955,_0x333655){return _0x4c1955(_0x333655);},'hGcLE':function(_0x2bb26a,_0x400251){return _0x2bb26a*_0x400251;},'YZrNu':function(_0x1bc810,_0x47277a){return _0x1bc810*_0x47277a;},'eKsZn':function(_0x33a293,_0x296338){return _0x33a293*_0x296338;},'HXWES':function(_0xc80005,_0x4ba47b){return _0xc80005/_0x4ba47b;},'FOAqj':function(_0x66874c,_0x365d26){return _0x66874c/_0x365d26;},'OTPXa':function(_0xa26fe4,_0x45e840){return _0xa26fe4+_0x45e840;},'ozZPd':function(_0x558fe8,_0x28d13d){return _0x558fe8+_0x28d13d;},'UJJIZ':function(_0x31e997,_0x5aefab){return _0x31e997+_0x5aefab;},'DwaHg':function(_0x1bc960,_0x10051b){return _0x1bc960+_0x10051b;},'kRdFm':function(_0x1f7de0,_0x10ba66){return _0x1f7de0*_0x10ba66;},'lQeQP':function(_0x5d2887,_0x5dc6c5,_0x186496,_0x43436e,_0x35bd65,_0x36f216,_0x4586ac,_0x2da761){return _0x5d2887(_0x5dc6c5,_0x186496,_0x43436e,_0x35bd65,_0x36f216,_0x4586ac,_0x2da761);},'DOZCk':'LMB','nFWCN':'mouse'+'3','laZBT':function(_0x498e8e,_0xa47b8c){return _0x498e8e+_0xa47b8c;},'rCjRm':function(_0x558ba4,_0x48e4e2){return _0x558ba4+_0x48e4e2;},'gajzN':function(_0x3aad79,_0x19ae7d){return _0x3aad79(_0x19ae7d);},'MqNIS':function(_0x4d093b,_0x54be6c){return _0x4d093b*_0x54be6c;},'utNGt':function(_0x101f96,_0x233b3d){return _0x101f96-_0x233b3d;},'fKQkY':function(_0x1bc4f9,_0x3b0570){return _0x1bc4f9-_0x3b0570;},'EQWwp':function(_0x50cc7f,_0x149b0c){return _0x50cc7f+_0x149b0c;},'EWIDf':function(_0x2bab60,_0x961c1c){return _0x2bab60-_0x961c1c;},'CJliF':function(_0x17f37d,_0x5b2833){return _0x17f37d+_0x5b2833;},'ocQkw':function(_0x44a8b8,_0x4855e0){return _0x44a8b8+_0x4855e0;},'yksOd':function(_0x9b7dcd,_0x4683f4){return _0x9b7dcd*_0x4683f4;},'qEshq':'yfMlM','sLSkL':_0x394b7e(0x48f),'tqdZL':_0x394b7e(0x651)+'A\x20KOU'+_0x394b7e(0x617)+'1','ptMHM':_0x394b7e(0x412)+'9d','SYWAh':function(_0x44bc5f,_0x10fb46){return _0x44bc5f(_0x10fb46);},'UAcOC':function(_0x330167,_0xb69f){return _0x330167+_0xb69f;},'FDIRq':function(_0x536ebc,_0x2f8df1,_0x2df6ea){return _0x536ebc(_0x2f8df1,_0x2df6ea);},'rYSvA':_0x394b7e(0x53a)+_0x394b7e(0x155)+_0x394b7e(0x671)+'0,0.6'+')','ndyVL':_0x394b7e(0x6c1),'mrghg':'sk-ra'+_0x394b7e(0x23d),'rQxCr':'input','XgYEH':_0x394b7e(0x142),'KwGGQ':'sk-la'+_0x394b7e(0x136),'eCoxw':function(_0x1b1605,_0xaec1b4){return _0x1b1605(_0xaec1b4);},'aSklK':'mn-si'+'de','HKjbG':_0x394b7e(0x315)+'go','KfjEk':_0x394b7e(0x1e1)+'viewB'+_0x394b7e(0x330)+_0x394b7e(0x4c2)+_0x394b7e(0x592)+_0x394b7e(0x1a1)+_0x394b7e(0x429)+_0x394b7e(0x62e)+'svg\x22>'+'<path'+'\x20d=\x22M'+_0x394b7e(0x686)+_0x394b7e(0x404)+'-2.5-'+_0x394b7e(0x116)+'-4-7.'+_0x394b7e(0x464)+'.5\x201.'+_0x394b7e(0x623)+'\x204-4.'+_0x394b7e(0x55d)+'\x204\x204.'+_0x394b7e(0x5b9)+'-2.5\x20'+'5-4\x207'+_0x394b7e(0x262)+_0x394b7e(0x3a8)+_0x394b7e(0x471)+_0x394b7e(0x3cf)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+'troke'+_0x394b7e(0x10c)+_0x394b7e(0x4d9)+_0x394b7e(0x2b7)+_0x394b7e(0x47d)+_0x394b7e(0x168)+_0x394b7e(0x11a)+_0x394b7e(0x154)+_0x394b7e(0x2b6)+_0x394b7e(0x3b9)+_0x394b7e(0x2a8)+'\x22roun'+_0x394b7e(0x370)+_0x394b7e(0x478)+_0x394b7e(0x641)+_0x394b7e(0x54f)+_0x394b7e(0x32a)+'0\x22\x20r='+'\x221.5\x22'+_0x394b7e(0x1b9)+_0x394b7e(0x6e8)+'6b9d\x22'+'/></s'+_0x394b7e(0x1a7),'KexuC':_0x394b7e(0x57c),'FinyI':_0x394b7e(0x369)+'p','dgMtX':'Sakur'+'a\x20Kou'+'r','pGzWO':'mn-cl'+_0x394b7e(0x56b),'biSzs':_0x394b7e(0x2d6)+'|2|1|'+'7|3|4','dlGEa':_0x394b7e(0x124)+'b','oXRbF':_0x394b7e(0x3ad)+_0x394b7e(0x343),'igVYe':function(_0x1f2988,_0x353f36,_0x508938){return _0x1f2988(_0x353f36,_0x508938);},'KYvko':function(_0x451dfa,_0x457267){return _0x451dfa===_0x457267;},'HihSH':_0x394b7e(0x2f7),'MzfKn':'none','UMNYo':function(_0x4ff386,_0xb519c0){return _0x4ff386/_0xb519c0;},'NvSys':function(_0x131b80,_0x4d4204){return _0x131b80*_0x4d4204;},'iyESm':function(_0x1f79cc,_0x40933a){return _0x1f79cc+_0x40933a;},'ODDVC':'WpepR','HWKZa':_0x394b7e(0x65c),'nIrPt':_0x394b7e(0x625)+'Engin'+_0x394b7e(0x2ce)+_0x394b7e(0x4f3)+'ion','hzScc':_0x394b7e(0x29d)+'ng','GtMpi':'held','rRbpl':_0x394b7e(0x6b8)+'MISSI'+_0x394b7e(0x643)+_0x394b7e(0x1f8)+'ay\x20on'+'ly\x20(r'+_0x394b7e(0x3b3)+_0x394b7e(0x6e1)+_0x394b7e(0x35a)+'erscr'+_0x394b7e(0x4d2),'ealJl':function(_0x50d290,_0x2b8b20,_0x6cf39f,_0x4e6cc1){return _0x50d290(_0x2b8b20,_0x6cf39f,_0x4e6cc1);},'JinZf':function(_0x1825fc,_0x33cc26,_0x45756b,_0x3ab497,_0x110552,_0x242828){return _0x1825fc(_0x33cc26,_0x45756b,_0x3ab497,_0x110552,_0x242828);},'DSGWz':_0x394b7e(0x65e),'ZcoCp':_0x394b7e(0x69b),'yJSqC':function(_0x701075){return _0x701075();},'RkoZS':_0x394b7e(0x290),'wQIeX':_0x394b7e(0x3f5),'UxsXm':_0x394b7e(0x6dc)+'ode','cmSTx':_0x394b7e(0x305)+_0x394b7e(0x2b0)+_0x394b7e(0x4ed)+'Initi'+_0x394b7e(0x17c)+_0x394b7e(0x145)+_0x394b7e(0x53d)+'nd\x20OH'+'ealth'+'.Loca'+_0x394b7e(0x558)+'\x20so\x20n'+'othin'+'g\x20can'+_0x394b7e(0x6d6)+_0x394b7e(0x474)+'ill\x20y'+_0x394b7e(0x3fd),'tJBYl':_0x394b7e(0x333)+'s\x20Ove'+_0x394b7e(0x5d2)+'Weapo'+_0x394b7e(0x4fb)+_0x394b7e(0x30e)+_0x394b7e(0x601)+_0x394b7e(0x1f3)+_0x394b7e(0x37b)+_0x394b7e(0x317)+'still'+_0x394b7e(0x649)+'\x20shot'+'s.','bETOV':function(_0x570160,_0x606ac3,_0x33d071,_0x4ef8fc,_0x4c4643,_0x3604a4){return _0x570160(_0x606ac3,_0x33d071,_0x4ef8fc,_0x4c4643,_0x3604a4);},'SYFYk':_0x394b7e(0x1dd)+_0x394b7e(0x62f)+'e\x20wea'+_0x394b7e(0x531)+'\x20cach'+_0x394b7e(0x360)+_0x394b7e(0x6ef)+_0x394b7e(0x243)+_0x394b7e(0x47b)+_0x394b7e(0x532)+'s.','mNKRt':function(_0x2dd387,_0x47a4a6,_0xd702de,_0x2ce728){return _0x2dd387(_0x47a4a6,_0xd702de,_0x2ce728);},'LkJZm':_0x394b7e(0x2c5)+'\x20%','uQyEM':function(_0x1fe84a,_0xa4b777,_0x3ac2bf,_0x1f2bd8){return _0x1fe84a(_0xa4b777,_0x3ac2bf,_0x1f2bd8);},'QQBaj':_0x394b7e(0x291)+'m\x20lef'+'t','uUYzK':'Left\x20'+_0x394b7e(0x228)+'e','COawd':function(_0x117137,_0x5c1efe,_0x1d9e40,_0x2e6ff4){return _0x117137(_0x5c1efe,_0x1d9e40,_0x2e6ff4);},'oPYLk':'misc','zlTqQ':_0x394b7e(0x1ad)+'one\x20i'+'nstal'+_0x394b7e(0x5c7)+_0x394b7e(0x696)+_0x394b7e(0x311)+_0x394b7e(0x4c7)+_0x394b7e(0x283)+_0x394b7e(0x588)+'hole\x20'+'page\x20'+'load.'+'\x20ALL\x20'+_0x394b7e(0x19e)+_0x394b7e(0x345)+_0x394b7e(0x603)+'-\x20a\x20s'+'ignat'+_0x394b7e(0x31f)+_0x394b7e(0x22e)+_0x394b7e(0x23e)+_0x394b7e(0x6d1)+_0x394b7e(0x6f4)+'he\x20re'+_0x394b7e(0x223)+'thod\x20'+'throw'+'s\x20\x27fu'+_0x394b7e(0x64c)+'n\x20sig'+'natur'+'e\x20mis'+'match'+_0x394b7e(0x5bc)+_0x394b7e(0x599)+_0x394b7e(0x251)+_0x394b7e(0x5b6)+_0x394b7e(0x5dc)+_0x394b7e(0x184)+_0x394b7e(0x4e3)+'m\x20on\x20'+_0x394b7e(0x433)+_0x394b7e(0x5e0)+_0x394b7e(0x5f4)+_0x394b7e(0x4a3)+'d,\x20an'+'d\x20see'+_0x394b7e(0x4ea)+_0x394b7e(0x523)+_0x394b7e(0x242)+_0x394b7e(0x4cb)+'d\x20cho'+'kes\x20o'+'n.','LMbCl':_0x394b7e(0x179)+'les\x20C'+'odeSt'+_0x394b7e(0x512)+'etect'+_0x394b7e(0x312)+'t\x20sta'+'rtup\x20'+'via\x20S'+_0x394b7e(0x4a5)+_0x394b7e(0x1bd)+'on().'+'\x20Keep'+_0x394b7e(0x31c),'wndtt':_0x394b7e(0x461),'dHBHg':'UWMK','QmGHL':'\x20|\x20sh'+_0x394b7e(0x4ba)+'\x20','hSMuy':_0x394b7e(0x146)+_0x394b7e(0x61d),'qBfVE':_0x394b7e(0x405)+'ion:f'+_0x394b7e(0x1e3)+_0x394b7e(0x42a)+_0x394b7e(0x5f2)+_0x394b7e(0x166)+_0x394b7e(0x4de)+'48364'+'7;poi'+_0x394b7e(0x189)+_0x394b7e(0x114)+'s:non'+'e;','KcbbD':_0x394b7e(0x1b5),'baeKD':function(_0x281501,_0x3e4eec){return _0x281501===_0x3e4eec;},'cFyYg':'qUcID','UooYJ':'sakur'+_0x394b7e(0x527)+'r.ui.'+'v1','hkHBk':'<svg\x20'+_0x394b7e(0x524)+_0x394b7e(0x330)+'\x200\x2024'+_0x394b7e(0x479)+_0x394b7e(0x5a2)+_0x394b7e(0x49e)+_0x394b7e(0x686)+'c-1.5'+_0x394b7e(0x225)+'4-4.5'+'-4-7.'+_0x394b7e(0x464)+_0x394b7e(0x636)+_0x394b7e(0x623)+_0x394b7e(0x485)+_0x394b7e(0x55d)+'\x204\x204.'+_0x394b7e(0x5b9)+_0x394b7e(0x5d5)+_0x394b7e(0x380)+_0x394b7e(0x262)+'fill='+'\x22none'+_0x394b7e(0x3cf)+'oke=\x22'+_0x394b7e(0x412)+'9d\x22\x20s'+_0x394b7e(0x2b6)+_0x394b7e(0x10c)+'h=\x222\x22'+_0x394b7e(0x2b7)+'ke-li'+_0x394b7e(0x168)+_0x394b7e(0x11a)+'nd\x22\x20s'+_0x394b7e(0x2b6)+_0x394b7e(0x3b9)+'join='+_0x394b7e(0x197)+_0x394b7e(0x370)+_0x394b7e(0x478)+_0x394b7e(0x641)+'\x2212\x22\x20'+_0x394b7e(0x32a)+'0\x22\x20r='+_0x394b7e(0x568)+'\x20fill'+_0x394b7e(0x6e8)+_0x394b7e(0x26d)+_0x394b7e(0x2fc)+_0x394b7e(0x1a7),'axdtC':function(_0x283463){return _0x283463();},'eFcRz':'#ffb3'+'c6','JrBxb':_0x394b7e(0x530),'TnjLv':_0x394b7e(0x2b3)+_0x394b7e(0x241)+_0x394b7e(0x5dd)+_0x394b7e(0x4f8),'hjBgt':'godDi'+'e','SmxFi':function(_0x5e4ab0,_0x8f90ed,_0x13b9f8,_0x4944ef,_0x1a344f,_0x5896e8,_0x19c050,_0x4ad096){return _0x5e4ab0(_0x8f90ed,_0x13b9f8,_0x4944ef,_0x1a344f,_0x5896e8,_0x19c050,_0x4ad096);},'GdFew':'OShoo'+_0x394b7e(0x664),'NHAMv':'Legio'+_0x394b7e(0x1f5)+_0x394b7e(0x517)+_0x394b7e(0x12d)+'tide.'+_0x394b7e(0x221)+_0x394b7e(0x2ab),'JsnnO':_0x394b7e(0x446),'wGfVC':_0x394b7e(0x5ac)+'ra-ko'+_0x394b7e(0x4eb)+'WMK\x20i'+'nit\x20f'+_0x394b7e(0x239)+':','JJMuA':function(_0x1bed26,_0x19ddb9){return _0x1bed26(_0x19ddb9);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+'ame']||''))return;if(window['__SAK'+_0x394b7e(0x63a)+_0x394b7e(0x591)])return;window[_0x394b7e(0x14e)+_0x394b7e(0x63a)+_0x394b7e(0x591)]=!![];var _0x48f03e=_0x394b7e(0x412)+'9d',_0x36608b=_0x57632f['eFcRz'],_0x16917a={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x394b7e(0x412)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x354827={..._0x16917a};try{_0x394b7e(0x2e9)===_0x394b7e(0x289)?(_0x2141fe[_0x394b7e(0x288)+_0x394b7e(0x33f)]=_0x50e2a1,_0x124790(),_0x57632f[_0x394b7e(0x553)](_0xefef17,_0x394b7e(0x288)+'oil',_0x5ee9cd)):Object['assig'+'n'](_0x354827,JSON[_0x394b7e(0x650)](localStorage['getIt'+'em'](_0x57632f['dkKav'])||'{}'));}catch(_0x1775c8){}function _0x1e55ac(){var _0x1b38fc=_0x394b7e,_0x5d6968={'LZWVc':_0x1b38fc(0x5ac)+_0x1b38fc(0x2c3)+_0x1b38fc(0x5a3)+_0x1b38fc(0x3fc)+_0x1b38fc(0x61a)+_0x1b38fc(0x6cc)};if(_0x57632f['Uxvor']('zqXxc',_0x57632f[_0x1b38fc(0x418)]))try{_0x5e3f10['enabl'+'ed']=![];}catch(_0xc25a63){}else try{if('GUtwP'===_0x57632f[_0x1b38fc(0x593)])return _0x2db060[_0x1b38fc(0x439)](_0x5d6968[_0x1b38fc(0x38d)],_0x1209be,_0x3156a9&&_0x11cf22['messa'+'ge']),null;else localStorage[_0x1b38fc(0x57b)+'em'](_0x57632f['dkKav'],JSON[_0x1b38fc(0x1f6)+_0x1b38fc(0x350)](_0x354827));}catch(_0x52ac64){}}var _0x332b4c={'uwmk':!!window['Unity'+_0x394b7e(0x571)+_0x394b7e(0x176)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x354827['safeM'+_0x394b7e(0x5f8)],'lastError':''};try{_0x57632f[_0x394b7e(0x18f)]('sVVlY',_0x57632f[_0x394b7e(0x133)])?window[_0x394b7e(0x426)+_0x394b7e(0x490)+_0x394b7e(0x53f)+'r'](_0x394b7e(0x328),_0x497e39=>{var _0x45e0fb=_0x394b7e;if(_0x57632f[_0x45e0fb(0x44d)]('vXqYg',_0x57632f[_0x45e0fb(0x619)]))_0x5811b2=_0x29564a&&_0x289ee7['val']?_0x3ed27e[_0x45e0fb(0x128)]():-0x4*-0x66e+-0x11ed+-0x7cb;else try{var _0x5c9912=_0x497e39&&(_0x497e39['messa'+'ge']||_0x497e39[_0x45e0fb(0x328)]&&_0x497e39['error']['messa'+'ge'])||'unkno'+'wn';if(_0x497e39&&_0x497e39[_0x45e0fb(0x115)+'ame'])_0x5c9912+=_0x57632f[_0x45e0fb(0x181)](_0x57632f[_0x45e0fb(0x181)](_0x57632f[_0x45e0fb(0x557)],String(_0x497e39['filen'+_0x45e0fb(0x286)])[_0x45e0fb(0x322)]('/')[_0x45e0fb(0x16c)]())+':',_0x497e39[_0x45e0fb(0x3f8)+'o']||'?');_0x332b4c[_0x45e0fb(0x6cf)+_0x45e0fb(0x212)]=String(_0x5c9912)[_0x45e0fb(0x1ab)](-0x6*0xa+0x1ad3+-0x1a97,-0x7*0x77+0x11*-0x1b7+0x2108);}catch(_0x4506c5){}}):(_0x347cf1[_0x394b7e(0x195)+_0x394b7e(0x3ea)]=_0x72920f,_0x5763e8());}catch(_0x306433){}var _0x3f301f=null,_0x530b38=null,_0x351597={},_0x1b1b13=[],_0x1e7d54=[],_0x5ea107=new Map();function _0x3ff430(_0x237d49,_0x1af6be){var _0x1d9a8b=_0x394b7e;if(!_0x1af6be||_0x237d49[_0x1d9a8b(0x4e5)+_0x1d9a8b(0x372)](_0x1af6be)||_0x237d49[_0x1d9a8b(0x48a)+'h']>-0x16c4+0xe42+0x13*0x76)return;_0x237d49[_0x1d9a8b(0x6ca)](_0x1af6be);}function _0x437b20(_0x59eca8,_0xbf282a,_0x59fad0,_0x4898ec){var _0x293160=_0x394b7e,_0x39b1d5={'AUAfs':function(_0x225313,_0x17e608,_0x14ff6b,_0x3dd4d8,_0x4cba5f){var _0x283554=_0x1b49;return _0x57632f[_0x283554(0x41c)](_0x225313,_0x17e608,_0x14ff6b,_0x3dd4d8,_0x4cba5f);},'cFxbO':function(_0x3aedae,_0x4841a3,_0x453133,_0x47fce7,_0x1bcf34){var _0x4148d3=_0x1b49;return _0x57632f[_0x4148d3(0x2c6)](_0x3aedae,_0x4841a3,_0x453133,_0x47fce7,_0x1bcf34);}},_0x3cee10=-0x1547+0x5f*0x2c+-0x1*-0x4f3;try{_0x3cee10=_0xbf282a&&_0xbf282a['val']?_0xbf282a[_0x293160(0x128)]():-0x10b8+0x22*-0xba+-0x14b6*-0x2;}catch(_0xec0eee){}if(!_0x3cee10)return;_0x57632f[_0x293160(0x553)](_0x3ff430,_0x59eca8,_0x3cee10),_0x59fad0[_0x4898ec]=_0x59eca8[_0x293160(0x48a)+'h'];if(_0x4898ec===_0x293160(0x165)+_0x293160(0x17d)&&_0x59eca8[_0x293160(0x48a)+'h']){if(_0x57632f['orUFT'](_0x57632f[_0x293160(0x506)],_0x293160(0x4b8)))_0x39b1d5[_0x293160(0x18c)](_0x24f6d6,_0xec9ab1,-0x1c5b+0x1dc7+-0x124,_0x293160(0x64b),_0x415569),_0x39b1d5[_0x293160(0x6d3)](_0x1b21ab,_0x2fcea6,-0xd16+0x1*0xcbf+0x1*0xa3,_0x293160(0x64b),_0x43e825);else{var _0x5ef313=_0x351597[_0x293160(0x626)+'ve'];if(_0x5ef313){if(_0x57632f[_0x293160(0x4d5)](_0x293160(0x48e),_0x293160(0x28a)))try{_0x5ef313[_0x293160(0x547)+'ed']=![];}catch(_0x3de1ed){}else _0x2afe5d['stopP'+_0x293160(0x4f0)+'ation'](),_0x57632f[_0x293160(0x337)](_0x47825e);}}}}function _0x37d7e2(_0x533ad9,_0x2fd1f1,_0x30818f){var _0x1241ed=_0x394b7e,_0x2bd55c={'RAPgs':'.sk-m'+_0x1241ed(0x38e),'PfXns':_0x1241ed(0x608)+'MODE\x20'+'-\x20ove'+'rlay\x20'+_0x1241ed(0x4fd)+'\x20no\x20h'+'ooks\x20'+_0x1241ed(0x56d)+_0x1241ed(0x541)+_0x1241ed(0x6c6)+')','KupHg':function(_0x380f4c,_0x3a4b23){return _0x380f4c+_0x3a4b23;},'DZqHd':function(_0x1152c4,_0x177feb){return _0x1152c4+_0x177feb;},'lhIEh':_0x57632f['mxShe'],'PlSTB':'\x20|\x20mo'+'vemen'+'t\x20','ciaHM':_0x57632f[_0x1241ed(0x14d)]},_0x102e36=_0x5ea107[_0x1241ed(0x6dd)](_0x533ad9);!_0x102e36&&(_0x102e36=new Map(),_0x5ea107[_0x1241ed(0x134)](_0x533ad9,_0x102e36));if(!_0x102e36['has'](_0x2fd1f1))try{if(_0x57632f['elTAs']===_0x57632f[_0x1241ed(0x2d4)]){var _0x41db90=_0x215fd4[_0x5bef7d][_0x1241ed(0x2a0)+_0x1241ed(0x121)+'tor'](_0x2bd55c[_0x1241ed(0x5cb)]);_0x41db90&&(_0x41db90[_0x1241ed(0x5af)+_0x1241ed(0x4fc)+'t'][_0x1241ed(0x166)+'Of']('UWMK')===0x1ca*0x8+-0xbf0+-0x260||_0x41db90['textC'+'onten'+'t'][_0x1241ed(0x166)+'Of']('SAFE')===0x2319+0x1*0x2285+-0x459e)&&(_0x41db90['textC'+'onten'+'t']=_0x2b86a1[_0x1241ed(0x660)+_0x1241ed(0x5f8)]?_0x2bd55c[_0x1241ed(0x499)]:_0x26f2f7[_0x1241ed(0x528)]?_0x2bd55c['KupHg'](_0x2bd55c[_0x1241ed(0x302)](_0x2bd55c[_0x1241ed(0x50b)]('UWMK\x20'+'bound'+'\x20'+(_0x5dd177[_0x1241ed(0x3db)+'Total']?_0x4b1e7e[_0x1241ed(0x3db)+'Ok']+'/'+_0x59d8a8['hooks'+'Total']+(_0x1241ed(0x10d)+'s'):_0x1241ed(0x67c)+_0x1241ed(0x3a0)+_0x1241ed(0x5e9)+'all\x20o'+'ff)')+_0x2bd55c[_0x1241ed(0x38c)],_0x117b67[_0x1241ed(0x16d)+_0x1241ed(0x137)]?'loade'+'d':_0x1241ed(0x29d)+'ng')+('\x20|\x20sh'+_0x1241ed(0x4ba)+'\x20')+(_0x48ff56['shoot'+'ers']?_0x1241ed(0x6bb):_0x1241ed(0x52a)),_0x2bd55c[_0x1241ed(0x5cd)]),_0x18f356[_0x1241ed(0x165)+_0x1241ed(0x17d)]?'held':_0x1241ed(0x52a))+(_0xbec6a1[_0x1241ed(0x6cf)+_0x1241ed(0x212)]?_0x2bd55c[_0x1241ed(0x2fe)]+_0x351368[_0x1241ed(0x6cf)+_0x1241ed(0x212)]:''):_0x1241ed(0x6b8)+'MISSI'+'NG\x20-\x20'+_0x1241ed(0x1f8)+'ay\x20on'+_0x1241ed(0x3e6)+'einst'+'all\x20t'+'he\x20us'+'erscr'+'ipt)');}else{var _0x721836=new _0x3f301f(_0x533ad9)['readF'+'ield'](_0x2fd1f1,_0x30818f);_0x102e36[_0x1241ed(0x134)](_0x2fd1f1,_0x721836!==undefined?_0x721836[_0x1241ed(0x128)]():null);}}catch(_0x5847bd){_0x102e36[_0x1241ed(0x134)](_0x2fd1f1,null);}return _0x102e36[_0x1241ed(0x6dd)](_0x2fd1f1);}function _0x383420(_0x54fe6a,_0x329958,_0x3f28bb,_0x934c84){var _0xe1b4ce=_0x394b7e;if('juJBP'!=='UIjZz')try{new _0x3f301f(_0x54fe6a)[_0xe1b4ce(0x6b7)+'Field'](_0x329958,_0x3f28bb,_0x934c84);}catch(_0x263d0c){}else _0x3755aa[_0xe1b4ce(0x64e)+'or']=_0x16f788,_0x3ea7a5();}function _0xd92c6a(_0x1d9ff2,_0x5d5fd8){var _0x5178bf=_0x394b7e,_0x1d154e={'MilCu':'sk-fi'+_0x5178bf(0x32d),'pUOLa':_0x57632f[_0x5178bf(0x495)]};if(_0x57632f[_0x5178bf(0x1e0)]===_0x57632f[_0x5178bf(0x1e0)])try{if(_0x57632f['ltrTr']('QOUGm',_0x5178bf(0x207))){var _0x29fda6=new _0x3f301f(_0x1d9ff2)['readF'+'ield'](_0x5d5fd8,_0x5178bf(0x54a));return _0x29fda6?_0x29fda6['val']():0xccb+-0x34*0x40+0x35;}else{var _0xa53fba=(_0x5178bf(0x682)+'|4|0|'+'1')['split']('|'),_0x4fea09=-0xd00+0x24f5+-0x17f5;while(!![]){switch(_0xa53fba[_0x4fea09++]){case'0':_0x60d701[_0x5178bf(0x4ad)+_0x5178bf(0x23d)]=()=>_0x2e7401(_0x60d701['value']);continue;case'1':return _0x60d701;case'2':var _0x60d701=_0xbe76a3['creat'+'eElem'+_0x5178bf(0x2ab)](_0x5178bf(0x26b)+'t');continue;case'3':_0x60d701[_0x5178bf(0x1a1)+_0x5178bf(0x5d6)]=_0x1d154e['MilCu'];continue;case'4':_0x60d701[_0x5178bf(0x3cb)]=_0x106076;continue;case'5':for(var [_0xf98b93,_0x145d18]of _0x1f3574){var _0xd3e459=_0x529ca3['creat'+_0x5178bf(0x3d4)+_0x5178bf(0x2ab)](_0x1d154e['pUOLa']);_0xd3e459['value']=_0xf98b93,_0xd3e459[_0x5178bf(0x5af)+_0x5178bf(0x4fc)+'t']=_0x145d18,_0x60d701[_0x5178bf(0x4db)+_0x5178bf(0x5ce)+'d'](_0xd3e459);}continue;}break;}}}catch(_0x4cead1){return-0xa37*0x2+-0x1f0f+0x337d;}else _0x1d26ca(_0x3caf86,-0xb2*0x4+0x3*-0x16f+0x79d,_0x5178bf(0x64b),-0x1454+-0x2*0xa77+0x2942),_0x5584d3(_0x52a252,0x1843*0x1+-0x896+-0xf45,_0x57632f['TWeZo'],0xd*0x20b+-0x4*0x5c+-0x191e);}function _0x4fb7ad(_0x56f208,_0x535022,_0x42cf5b,_0x1ffb43){var _0x1aacdd=_0x394b7e;if(_0x57632f[_0x1aacdd(0x13f)]('WpGty',_0x1aacdd(0x4f1))){var _0x392309=_0x37d7e2(_0x56f208,_0x535022,_0x42cf5b);if(_0x392309!=null)_0x383420(_0x56f208,_0x535022,_0x42cf5b,_0x392309*_0x1ffb43);}else try{_0x292774[_0x1aacdd(0x547)+'ed']=!!_0x50f935;}catch(_0x2478f6){}}function _0xe84d94(_0x2b48fd,_0x4ca72a,_0x270a73,_0x125690,_0x17c86c,_0x17579d,_0x34c28f){var _0x149d29=_0x394b7e;if(_0x149d29(0x238)!==_0x149d29(0x472))try{var _0x1e6ec4=_0x530b38['hookP'+_0x149d29(0x639)]({'typeName':_0x4ca72a,'methodName':_0x270a73,'params':_0x125690,'returnType':_0x17c86c},_0x17579d);return _0x1e6ec4[_0x149d29(0x547)+'ed']=_0x34c28f!==![],_0x351597[_0x2b48fd]=_0x1e6ec4,_0x332b4c['hooks'+'Total']++,_0x1e6ec4;}catch(_0x5b36d6){return console['warn'](_0x149d29(0x5ac)+'ra-ko'+'ur]\x20h'+_0x149d29(0x3fc)+'eg\x20fa'+_0x149d29(0x6cc),_0x2b48fd,_0x5b36d6&&_0x5b36d6[_0x149d29(0x52e)+'ge']),null;}else _0x576123['assig'+'n'](_0x393fb6,_0x5ea850[_0x149d29(0x650)](_0x142afb[_0x149d29(0x6c7)+'em'](_0x57632f[_0x149d29(0x382)])||'{}'));}function _0x55cc92(_0x40f58e,_0x1166dc,_0x57cfea,_0x3dfd8d,_0x3aecf2,_0x4263e4,_0x14dd23){var _0x56c11d=_0x394b7e;try{var _0x388f89=_0x57632f[_0x56c11d(0x15d)][_0x56c11d(0x322)]('|'),_0x25edff=0x2ea+-0x1afe+0x5c*0x43;while(!![]){switch(_0x388f89[_0x25edff++]){case'0':_0x351597[_0x40f58e]=_0x55e543;continue;case'1':var _0x55e543=_0x530b38[_0x56c11d(0x1dc)+'ostfi'+'x']({'typeName':_0x1166dc,'methodName':_0x57cfea,'params':_0x3dfd8d,'returnType':_0x3aecf2},_0x4263e4);continue;case'2':return _0x55e543;case'3':_0x332b4c['hooks'+_0x56c11d(0x5fc)]++;continue;case'4':_0x55e543[_0x56c11d(0x547)+'ed']=_0x57632f['Shlqm'](_0x14dd23,![]);continue;}break;}}catch(_0x17221a){if(_0x57632f[_0x56c11d(0x306)]===_0x57632f['ibUeH'])_0x5d09be={..._0x16ba54},_0x46131c(),_0x6715ca['reloa'+'d']();else return console[_0x56c11d(0x439)]('[saku'+_0x56c11d(0x2c3)+'ur]\x20h'+'ook\x20r'+_0x56c11d(0x61a)+_0x56c11d(0x6cc),_0x40f58e,_0x17221a&&_0x17221a[_0x56c11d(0x52e)+'ge']),null;}}var _0x536a8f=()=>![];try{if(window[_0x394b7e(0x625)+_0x394b7e(0x571)+'dkit']&&!_0x354827[_0x394b7e(0x660)+_0x394b7e(0x5f8)]){_0x3f301f=window[_0x394b7e(0x625)+_0x394b7e(0x571)+_0x394b7e(0x176)]['Value'+'Wrapp'+'er'],_0x530b38=window[_0x394b7e(0x625)+_0x394b7e(0x571)+_0x394b7e(0x176)]['Runti'+'me']['creat'+'ePlug'+'in']({'name':_0x394b7e(0x656)+_0x394b7e(0x3f1),'version':'1.1.0','referencedAssemblies':[_0x57632f[_0x394b7e(0x54c)]]});if(_0x354827[_0x394b7e(0x4a6)+'od'])_0xe84d94(_0x394b7e(0x29c),'OHeal'+'th',_0x57632f[_0x394b7e(0x57f)],[_0x57632f[_0x394b7e(0x509)],_0x57632f['JLHsH']],undefined,_0x536a8f,!!_0x354827['god']);if(_0x354827[_0x394b7e(0x4a6)+'odDie'])_0x57632f[_0x394b7e(0x144)](_0xe84d94,_0x57632f['hjBgt'],'OHeal'+'th',_0x394b7e(0x6bf)+_0x394b7e(0x5cc),[_0x57632f[_0x394b7e(0x509)],'i32',_0x394b7e(0x6d9),_0x394b7e(0x6d9),'i32'],undefined,_0x536a8f,!!_0x354827[_0x394b7e(0x29c)]);if(_0x354827['hookN'+_0x394b7e(0x335)+'il'])_0xe84d94(_0x394b7e(0x288)+'oil',_0x57632f['GkppB'],'Tick',[_0x394b7e(0x6d9)],undefined,_0x536a8f,!!_0x354827['noRec'+_0x394b7e(0x33f)]);if(_0x354827[_0x394b7e(0x4c9)+'aptur'+'e'])_0x57632f[_0x394b7e(0x63e)](_0x55cc92,_0x394b7e(0x1de)+_0x394b7e(0x4ba),_0x57632f[_0x394b7e(0x3fa)],'SetGa'+'meRun'+_0x394b7e(0x6de),[_0x57632f['JLHsH'],_0x57632f['JLHsH']],undefined,(_0x3c42a0,_0x5f5354)=>{var _0x306f18=_0x394b7e;_0x57632f[_0x306f18(0x5ee)]===_0x306f18(0x244)?_0x57632f[_0x306f18(0x41c)](_0x437b20,_0x1e7d54,_0x5f5354,_0x332b4c,_0x57632f[_0x306f18(0x3ff)]):(_0xf60b8b[_0x306f18(0x1a1)+'List'][_0x306f18(0x4af)+'e']('on',_0x3c556c),_0x58b989(_0x186ec9));},!![]);if(_0x354827[_0x394b7e(0x4c9)+'aptur'+'e'])_0x55cc92('capMo'+'ve',_0x57632f['NHAMv'],_0x57632f[_0x394b7e(0x20c)],['i32'],_0x57632f[_0x394b7e(0x509)],(_0x189a17,_0x3bb6bf)=>{var _0xddf37f=_0x394b7e;_0x57632f[_0xddf37f(0x687)](_0x437b20,_0x1b1b13,_0x3bb6bf,_0x332b4c,_0x57632f[_0xddf37f(0x6e4)]);},!![]);}}catch(_0x19b64c){_0x57632f['OWqSx']('ibubN',_0x57632f[_0x394b7e(0x6b1)])?console[_0x394b7e(0x439)](_0x57632f[_0x394b7e(0x2d2)],_0x19b64c&&_0x19b64c['messa'+'ge']):(_0x313eb1[_0x394b7e(0x572)+'hair']=_0x255824,_0x57632f[_0x394b7e(0x337)](_0x3e6551));}function _0x18d929(_0x4a278b,_0x1348d8){var _0xb6d4ae=_0x394b7e,_0x487db3={'OUnDi':function(_0x4d40e0,_0x2744e0,_0x3f15cb,_0x3b63d4,_0x2ceb25){return _0x4d40e0(_0x2744e0,_0x3f15cb,_0x3b63d4,_0x2ceb25);},'pzmJC':_0x57632f[_0xb6d4ae(0x6e4)]};if(_0xb6d4ae(0x17f)!==_0x57632f[_0xb6d4ae(0x580)]){var _0x58c221=_0x351597[_0x4a278b];if(_0x58c221)try{_0x58c221['enabl'+'ed']=!!_0x1348d8;}catch(_0x80e181){}}else{if(_0x269968['Unity'+'WebMo'+_0xb6d4ae(0x176)]&&!_0x627e61[_0xb6d4ae(0x660)+'ode']){var _0x187efe=_0x57632f[_0xb6d4ae(0x132)]['split']('|'),_0x43b4b2=-0x21e2+0x2337+0x1f*-0xb;while(!![]){switch(_0x187efe[_0x43b4b2++]){case'0':if(_0x4d9722['hookG'+_0xb6d4ae(0x13d)])_0x57632f['wdswG'](_0x15914e,'godDi'+'e',_0xb6d4ae(0x606)+'th',_0x57632f[_0xb6d4ae(0x292)],[_0xb6d4ae(0x6d9),'i32',_0x57632f['JLHsH'],_0xb6d4ae(0x6d9),_0x57632f['JLHsH']],_0x1e4cca,_0x21ee74,!!_0xff43f0[_0xb6d4ae(0x29c)]);continue;case'1':_0x15d0a7=_0x45894a[_0xb6d4ae(0x625)+_0xb6d4ae(0x571)+'dkit']['Value'+_0xb6d4ae(0x35e)+'er'];continue;case'2':if(_0xc1ade6[_0xb6d4ae(0x614)+'oReco'+'il'])_0x44f2fb('noRec'+_0xb6d4ae(0x33f),_0x57632f[_0xb6d4ae(0x138)],_0xb6d4ae(0x4dd),['i32'],_0xba57d5,_0x34f61d,!!_0x541aec[_0xb6d4ae(0x288)+'oil']);continue;case'3':if(_0x188c56[_0xb6d4ae(0x4a6)+'od'])_0x57632f[_0xb6d4ae(0x144)](_0x2aafc4,_0x57632f['jINln'],_0x57632f[_0xb6d4ae(0x268)],_0x57632f[_0xb6d4ae(0x57f)],[_0xb6d4ae(0x6d9),_0x57632f['JLHsH']],_0x5d180a,_0x2f8dfc,!!_0x39829c[_0xb6d4ae(0x29c)]);continue;case'4':if(_0xa7f414['hookC'+'aptur'+'e'])_0x57632f['xxYGb'](_0x3c6ec5,'capMo'+'ve',_0xb6d4ae(0x4b1)+'nPlat'+'forms'+_0xb6d4ae(0x12d)+'tide.'+_0xb6d4ae(0x221)+_0xb6d4ae(0x2ab),_0x57632f[_0xb6d4ae(0x20c)],[_0x57632f[_0xb6d4ae(0x509)]],_0xb6d4ae(0x6d9),(_0x16301e,_0x5b6696)=>{_0x487db3['OUnDi'](_0x1e6594,_0x442e65,_0x5b6696,_0x39d9a5,_0x487db3['pzmJC']);},!![]);continue;case'5':if(_0x1eb5fa['hookC'+'aptur'+'e'])_0x57632f[_0xb6d4ae(0x1ea)](_0x48b402,_0x57632f['CSXCx'],'OShoo'+_0xb6d4ae(0x664),_0xb6d4ae(0x669)+_0xb6d4ae(0x4a7)+'ning',[_0x57632f['JLHsH'],_0x57632f['JLHsH']],_0x4a0e6f,(_0x2f583f,_0x2847c5)=>{var _0x1c5b0f=_0xb6d4ae;_0x365875(_0x83f511,_0x2847c5,_0x43168c,_0x1c5b0f(0x2ee)+_0x1c5b0f(0x34a));},!![]);continue;case'6':_0x39d83a=_0x5e6c1a[_0xb6d4ae(0x625)+'WebMo'+'dkit'][_0xb6d4ae(0x3bf)+'me'][_0xb6d4ae(0x158)+_0xb6d4ae(0x17e)+'in']({'name':_0x57632f[_0xb6d4ae(0x46c)],'version':'1.1.0','referencedAssemblies':[_0xb6d4ae(0x2b3)+'bly-C'+'Sharp'+'.dll']});continue;}break;}}}}setInterval(()=>{var _0x13f943=_0x394b7e,_0x211782={'JqLmn':function(_0x42ba24,_0x32d611){return _0x42ba24+_0x32d611;},'XSuzL':_0x57632f[_0x13f943(0x60a)]};if(!_0x3f301f||!window[_0x13f943(0x691)+_0x13f943(0x519)+'nce'])return;var _0x33aab2=(Number(_0x354827[_0x13f943(0x577)+'Pct'])||-0x1402+-0xdbd+0x9*0x3cb)/(-0x90f+0xb14+-0x1a1),_0x3f1811=_0x57632f[_0x13f943(0x4f7)](_0x57632f['kMKIh'](Number,_0x354827['jumpP'+'ct'])||-0x21d+-0x151+0x3d2,-0x575+0x2*0x1173+0x9af*-0x3),_0x26c38b=(Number(_0x354827[_0x13f943(0x125)+_0x13f943(0x19d)])||0x796+-0x2468+0x1d36)/(0xdb2+-0x25*0x20+0x8ae*-0x1),_0x3c6fbf=Math[_0x13f943(0x2c4)](-0x57a*0x7+0x18af+-0x2*-0x6d4,Number(_0x354827['damag'+'eValu'+'e'])||0x140*0x12+-0x1ca*0x15+0xfa8),_0x2227a7=_0x33aab2!==0x5e*-0x4a+0x19a7+0x186||_0x57632f[_0x13f943(0x497)](_0x3f1811,-0x13*-0x9e+0x3b*-0x65+0xb8e)||_0x57632f['vsjYE'](_0x26c38b,0x50+0x49*0x47+0x148e*-0x1)||_0x354827[_0x13f943(0x508)],_0x49e662=_0x354827[_0x13f943(0x5c3)+'ead']||_0x354827['damag'+'eExp']||_0x354827['infAm'+_0x13f943(0x546)]||_0x354827[_0x13f943(0x422)+'Exp'];if(_0x57632f['PGLvj'](!_0x2227a7,!_0x49e662))return;try{for(var _0x27158f=0x4*-0x7e1+0x6*-0x1c1+0x2a0a;_0x27158f<_0x1b1b13[_0x13f943(0x48a)+'h'];_0x27158f++){var _0x6fa2ef=_0x1b1b13[_0x27158f];if(!_0x6fa2ef)continue;_0x57632f[_0x13f943(0x29e)](_0x33aab2,0x1*0x17e1+0x37a*0x8+-0x33b0)&&(_0x57632f['gEJtD'](_0x4fb7ad,_0x6fa2ef,0x2b*0xe5+-0x41*-0x65+-0x3ff4,_0x57632f['TWeZo'],_0x33aab2),_0x4fb7ad(_0x6fa2ef,-0x6*-0x64f+0x1d1b+-0x3*0x1643,'f32',_0x33aab2),_0x4fb7ad(_0x6fa2ef,-0x229a+0x2cb*0x2+0x1c*0x10b,_0x13f943(0x64b),_0x33aab2),_0x57632f[_0x13f943(0x440)](_0x4fb7ad,_0x6fa2ef,0x98c+0x125f*0x1+-0x1bb7,_0x13f943(0x64b),_0x33aab2),_0x4fb7ad(_0x6fa2ef,-0x6b9*-0x1+-0x218d+0x1af0,_0x13f943(0x64b),_0x33aab2),_0x4fb7ad(_0x6fa2ef,-0x1077+-0x78f+0x1826,'f32',_0x33aab2));if(_0x57632f['OWqSx'](_0x3f1811,0xfe5*0x1+-0x57b+-0xa69))_0x4fb7ad(_0x6fa2ef,0x251+-0x3*-0x90b+-0x1d22,_0x57632f[_0x13f943(0x36a)],_0x3f1811);_0x57632f[_0x13f943(0x668)](_0x26c38b,-0x1*-0x21af+0x157d+-0x372b)&&(_0x4fb7ad(_0x6fa2ef,0x19f+0x155*0x17+0x1*-0x1ffa,_0x57632f[_0x13f943(0x36a)],_0x26c38b),_0x4fb7ad(_0x6fa2ef,-0x3*0x56b+0x1575+-0x274*0x2,'f32',_0x26c38b));if(_0x354827[_0x13f943(0x508)])_0x383420(_0x6fa2ef,0xd5d+-0x1*0x1438+0x777,'f32',-(-0x7b1+-0x1ea6+0x1*0x2a3e));}}catch(_0x568416){}try{if('ZaBig'!==_0x57632f['pjzfv']){if(_0x48aef1[_0x13f943(0x445)+_0x13f943(0x12a)])return;_0x2c08b1['add'](_0x211782[_0x13f943(0x570)](_0x211782[_0x13f943(0x5e6)],_0x211782[_0x13f943(0x570)](_0x5e3159['butto'+'n'],0x1acd*0x1+0x1407+-0x2ed3)));var _0x4f3b50=_0x53387e[_0x46a23d['butto'+'n']+(0x22d*0x2+-0x1*0x205b+-0xf*-0x1de)];if(_0x4f3b50){_0x4f3b50['push'](_0xf8d518['now']());if(_0x4f3b50[_0x13f943(0x48a)+'h']>-0x12d+0x8*0xd6+0x1*-0x55b)_0x4f3b50[_0x13f943(0x3bb)]();}}else for(var _0x4928b7=-0x149*-0x1e+0xe77+0x793*-0x7;_0x4928b7<_0x1e7d54[_0x13f943(0x48a)+'h'];_0x4928b7++){var _0x3e360f=_0xd92c6a(_0x1e7d54[_0x4928b7],0x1d*0x114+-0x1*-0x1511+-0x341d);if(!_0x3e360f)continue;_0x354827[_0x13f943(0x1cb)+'eExp']&&(_0x383420(_0x3e360f,0x33f+-0x8*-0x35b+-0x1*0x1dcb,_0x13f943(0x6d9),_0x3c6fbf),_0x383420(_0x3e360f,0xac*-0x1a+-0x1*0x1c9b+0x2e67,'i32',_0x3c6fbf));_0x354827['noSpr'+'ead']&&(_0x57632f[_0x13f943(0x270)](_0x383420,_0x3e360f,-0x21f+-0x8a*0x47+0x1*0x28ed,_0x13f943(0x64b),-0x3bf+0x1e73+-0x1ab4*0x1),_0x383420(_0x3e360f,0xda5+0x8c1*-0x2+0x445,_0x57632f['TWeZo'],0x243c*-0x1+-0xeb4+0x32f1));if(_0x354827['infAm'+_0x13f943(0x546)])_0x57632f[_0x13f943(0x1ce)](_0x383420,_0x3e360f,0x50+0x126f*-0x1+0x39*0x53,'i32',0x1b4e+0xdd5+0x1*-0x253c);_0x354827[_0x13f943(0x422)+_0x13f943(0x5bb)]&&(_0x57632f[_0x13f943(0x348)](_0x4fb7ad,_0x3e360f,-0xa87+-0x667+0x117a,_0x13f943(0x64b),-0xafd*0x3+0x1ff1+0x106+0.1),_0x57632f['rKOYh'](_0x383420,_0x3e360f,0x67*0x49+-0x25c9+-0x1*-0x8ca,_0x13f943(0x64b),-0x1*0x1e44+-0x2*-0xf02+-0x1*-0x40+0.1));}}catch(_0xbf59d6){}},0x1*-0x106+-0x4*0x6fd+0x1dc2),setInterval(()=>{var _0x2a8a1e=_0x394b7e;_0x332b4c[_0x2a8a1e(0x16d)+'oaded']=!!window[_0x2a8a1e(0x691)+_0x2a8a1e(0x519)+_0x2a8a1e(0x513)];try{var _0x1b3e47=0x1087*-0x1+0x11f3+0xd*-0x1c;for(var _0x191efc in _0x351597){if(_0x351597[_0x191efc]&&_0x351597[_0x191efc]['appli'+'ed'])_0x1b3e47++;}_0x332b4c['hooks'+'Ok']=_0x1b3e47;}catch(_0x494e34){}},0xc7a+0x38*-0x4d+0x846);var _0x2c8d8e=new Set(),_0x24b53c={0x1:[],0x3:[]},_0x4c0b34=![];function _0x114004(_0x227f12){var _0x55a08a=_0x394b7e;_0x2c8d8e[_0x55a08a(0x1ff)](_0x227f12['code']);}function _0x5e0641(_0x341312){var _0x2c4fd7=_0x394b7e;_0x2c8d8e[_0x2c4fd7(0x4ef)+'e'](_0x341312['code']);}function _0x557445(_0x5b4978){var _0xcbfd05=_0x394b7e;if(_0x5b4978[_0xcbfd05(0x445)+'ura'])return;_0x2c8d8e[_0xcbfd05(0x1ff)](_0x57632f[_0xcbfd05(0x1f2)](_0x57632f['rfZek'],_0x5b4978['butto'+'n']+(0x1324+0x589*0x5+-0x10*0x2ed)));var _0x42fab8=_0x24b53c[_0x57632f[_0xcbfd05(0x181)](_0x5b4978[_0xcbfd05(0x699)+'n'],-0x67*0x5e+0xdc8+-0x4cf*-0x5)];if(_0x42fab8){_0x42fab8[_0xcbfd05(0x6ca)](performance[_0xcbfd05(0x58c)]());if(_0x42fab8['lengt'+'h']>0x21f4+0xd00+-0x1766*0x2)_0x42fab8['shift']();}}function _0x442f96(_0x5d2865){var _0x9b31f3=_0x394b7e;if('SlrYF'!==_0x57632f[_0x9b31f3(0x53e)]){if(!_0x5d2865[_0x9b31f3(0x445)+'ura'])_0x2c8d8e[_0x9b31f3(0x4ef)+'e'](_0x57632f[_0x9b31f3(0x135)](_0x9b31f3(0x51e),_0x5d2865[_0x9b31f3(0x699)+'n']+(0x9ad*-0x1+0x2082+-0x16d4)));}else try{_0xc42a5f[_0x9b31f3(0x6b9)][_0x9b31f3(0x4db)+'dChil'+'d'](_0x4fc8cb);}catch(_0x3e639f){}}function _0x5dcd20(){var _0x39ce5b=_0x394b7e;_0x2c8d8e[_0x39ce5b(0x43d)]();}function _0x276214(){var _0x3f1108=_0x394b7e,_0x1425b1={'kIMAB':function(_0x48fbf7,_0xf2050a){return _0x48fbf7+_0xf2050a;},'KurvI':_0x3f1108(0x638)+'r','npCou':function(_0x31f47d,_0x2ed30d){return _0x31f47d*_0x2ed30d;},'SdyXK':_0x3f1108(0x1b6)+_0x3f1108(0x45d)+'-seri'+'f,sys'+'tem-u'+_0x3f1108(0x6a0)+_0x3f1108(0x61e)+'if','zWVvk':'#fff','hmDrv':'rgba('+_0x3f1108(0x26e)+'35,24'+'0,0.5'+'5)','dWUUL':function(_0x5660ec,_0x24f740){return _0x57632f['SgSNn'](_0x5660ec,_0x24f740);},'HxpdR':function(_0x4fba50,_0x57b867){return _0x57632f['BkWEC'](_0x4fba50,_0x57b867);},'YqWAN':function(_0x5821e7,_0x1b6dc9){return _0x57632f['uTblM'](_0x5821e7,_0x1b6dc9);},'aztgV':function(_0x110e26,_0xf2d7af){return _0x110e26+_0xf2d7af;},'OKGwK':_0x3f1108(0x53a)+_0x3f1108(0x26e)+'35,24'+_0x3f1108(0x51a)+')','zCjxP':'rgba('+'255,1'+'07,15'+_0x3f1108(0x4b7)+'5)'};if(_0x3f1108(0x3de)!==_0x57632f[_0x3f1108(0x324)]){if(_0x4c0b34)return;_0x4c0b34=!![],window[_0x3f1108(0x426)+_0x3f1108(0x490)+_0x3f1108(0x53f)+'r'](_0x57632f[_0x3f1108(0x5ef)],_0x114004,!![]),window['addEv'+'entLi'+_0x3f1108(0x53f)+'r'](_0x3f1108(0x45c),_0x5e0641,!![]),window[_0x3f1108(0x426)+'entLi'+'stene'+'r'](_0x3f1108(0x51e)+_0x3f1108(0x365),_0x557445,!![]),window['addEv'+_0x3f1108(0x490)+_0x3f1108(0x53f)+'r'](_0x3f1108(0x51e)+'up',_0x442f96,!![]),window[_0x3f1108(0x426)+_0x3f1108(0x490)+'stene'+'r'](_0x57632f[_0x3f1108(0x473)],_0x5dcd20);}else{var _0x2af50a=_0x48e97f(_0x3bb52a[_0x3f1108(0x1d9)+'le'])||-0x43*0x37+0x24e*0x4+0x52e,_0x292a27=(-0xa*0xc5+0x8bb+-0x3*0x4d)*_0x2af50a,_0x175755=(0xd21+-0x1a9+-0xb74)*_0x2af50a,_0x394981=_0x57632f[_0x3f1108(0x436)](_0x292a27*(0xe47+0xf03+-0x1d47*0x1),_0x175755*(0x19a4+0x518+-0x1eba)),_0x49f126=_0x57632f[_0x3f1108(0x22b)](_0x292a27*(-0x1968+-0xec2*-0x2+-0x419),_0x57632f['fVSVs'](_0x175755,-0x17*-0x9e+0x765+-0x1595)),_0x1f62e2=_0x1aecd4[_0x3f1108(0x261)],_0x33d21c=_0x1f62e2==='br'?_0x57632f[_0x3f1108(0x6a7)](_0x57632f['GKCRf'](_0x181e63[_0x3f1108(0x634)],0x643+-0x133d*-0x1+-0x1970),_0x394981):_0x57632f[_0x3f1108(0x135)](_0x44c467[_0x3f1108(0x48f)],-0x26b1+-0x29*-0xb7+0x972),_0x4d0d71=_0x57632f['orUFT'](_0x1f62e2,'ml')?_0x33a0ae['top']+_0x156b02['heigh'+'t']/(-0x877*0x4+-0x1362+0x2*0x1aa0)-_0x49f126/(0x29e*-0x9+0x126a+0x526):_0x57632f[_0x3f1108(0x62b)](_0x57632f[_0x3f1108(0x427)](_0x5e0b52[_0x3f1108(0x190)+'m'],_0x49f126),_0x57632f[_0x3f1108(0x13f)](_0x1f62e2,'bl')?0x1dfb+-0x1faa+0x20f:-0x208d+-0xba6+0x2cc9),_0x1166b3=(_0x3848a1,_0x2af85b,_0x238548,_0x566d99,_0x26d9d6,_0x20e9e8,_0x399593)=>{var _0x39d820=_0x3f1108,_0x22dea2=('15|12'+'|1|5|'+_0x39d820(0x277)+_0x39d820(0x24d)+_0x39d820(0x65d)+_0x39d820(0x1fd)+_0x39d820(0x11d)+'|11|6')['split']('|'),_0x10beb3=-0x1d0e+0x3*0x841+0x44b*0x1;while(!![]){switch(_0x22dea2[_0x10beb3++]){case'0':_0x3b79bc[_0x39d820(0x421)]=_0x1425b1['kIMAB'](_0x39d820(0x43b),_0x487bf2[_0x39d820(0x5df)]((0x8de*0x3+0x10f*-0x7+0x1*-0x1325)*_0x2af50a))+(_0x39d820(0x1b6)+_0x39d820(0x45d)+_0x39d820(0x4a0)+_0x39d820(0x56c)+'tem-u'+'i,san'+_0x39d820(0x61e)+'if');continue;case'1':_0x48b76e['begin'+_0x39d820(0x64f)]();continue;case'2':_0x284c26['lineW'+'idth']=0x63f+0x1e35+0x12d*-0x1f;continue;case'3':_0x466914['fillS'+_0x39d820(0x3b5)]=_0x2fac82?_0x39d820(0x53a)+_0x39d820(0x155)+_0x39d820(0x1c8)+_0x39d820(0x6aa)+'5)':'rgba('+_0x39d820(0x264)+'16,0.'+'7)';continue;case'4':_0x2b07ab[_0x39d820(0x4b6)+'aseli'+'ne']='middl'+'e';continue;case'5':if(_0x22b471['round'+_0x39d820(0x196)])_0x45be3d[_0x39d820(0x5df)+_0x39d820(0x196)](_0x238548,_0x566d99,_0x26d9d6,_0x20e9e8,(0x42b*0x2+-0x2552+-0x1d03*-0x1)*_0x2af50a);else _0x2cf07b['rect'](_0x238548,_0x566d99,_0x26d9d6,_0x20e9e8);continue;case'6':_0x1b2fd9['resto'+'re']();continue;case'7':_0x287cfa[_0x39d820(0x3c8)+'e']();continue;case'8':_0x43d621['fill']();continue;case'9':_0x3b1294[_0x39d820(0x6a2)+_0x39d820(0x5b7)]=_0x1425b1[_0x39d820(0x1fe)];continue;case'10':_0x2fac82&&(_0x4a94aa[_0x39d820(0x662)+_0x39d820(0x49f)+'r']=_0x4e6b98,_0x148304[_0x39d820(0x662)+'wBlur']=-0x2*-0x217+0x19*0x16f+0x27f7*-0x1,_0x549f23[_0x39d820(0x4f6)](),_0x58d45b['shado'+_0x39d820(0x143)]=-0xb89+0x24ba+-0x1931);continue;case'11':_0x399593&&(_0x984d85['font']=_0x1425b1[_0x39d820(0x6c4)](_0x1425b1[_0x39d820(0x6c4)]('600\x20',_0x4c3a9c[_0x39d820(0x5df)](_0x1425b1[_0x39d820(0x303)](0x56f*0x5+-0x1f*-0x13c+-0x4166,_0x2af50a))),_0x1425b1[_0x39d820(0x237)]),_0x1e052c['fillS'+'tyle']=_0x2fac82?_0x1425b1[_0x39d820(0x458)]:_0x1425b1['hmDrv'],_0x46d2e1[_0x39d820(0x25a)+'ext'](_0x399593,_0x238548+_0x26d9d6/(-0x1b01+-0x13*-0xb4+0xda7),_0x1425b1['dWUUL'](_0x1425b1[_0x39d820(0x149)](_0x566d99,_0x1425b1['YqWAN'](_0x20e9e8,-0x95a+-0x61e+0xf7a)),(-0x3*0x825+-0x76e+0x1fe5)*_0x2af50a)));continue;case'12':_0x5df575[_0x39d820(0x2cb)]();continue;case'13':_0x1f5df9['fillT'+'ext'](_0x3848a1,_0x238548+_0x26d9d6/(-0x1b4d+-0x3d*-0x83+-0x3e8),_0x1425b1['aztgV'](_0x566d99,_0x1425b1['YqWAN'](_0x20e9e8,-0x7e1*-0x2+-0x91b+-0x6a5))-(_0x399593?_0x1425b1[_0x39d820(0x303)](-0xd*0x24f+-0x3*-0x6c3+-0x5*-0x1f3,_0x2af50a):0x3b4*-0x6+-0xb9*0x31+0x39a1));continue;case'14':_0x386ccb[_0x39d820(0x1e5)+'tyle']=_0x2fac82?_0x39d820(0x38f):_0x1425b1[_0x39d820(0x4fe)];continue;case'15':var _0x2fac82=_0x5a622d[_0x39d820(0x194)](_0x2af85b);continue;case'16':_0x2f1665['strok'+_0x39d820(0x5ec)+'e']=_0x2fac82?_0x51ce6c:_0x1425b1[_0x39d820(0x3ed)];continue;}break;}};_0x57632f['fcsGG'](_0x1166b3,'W','KeyW',_0x57632f[_0x3f1108(0x556)](_0x33d21c,_0x292a27)+_0x175755,_0x4d0d71,_0x292a27,_0x292a27),_0x1166b3('A','KeyA',_0x33d21c,_0x57632f[_0x3f1108(0x3d7)](_0x4d0d71,_0x292a27)+_0x175755,_0x292a27,_0x292a27),_0x1166b3('S','KeyS',_0x33d21c+_0x292a27+_0x175755,_0x57632f[_0x3f1108(0x2a3)](_0x4d0d71,_0x292a27)+_0x175755,_0x292a27,_0x292a27),_0x1166b3('D',_0x57632f[_0x3f1108(0x4c4)],_0x33d21c+_0x57632f[_0x3f1108(0x1c7)](_0x57632f[_0x3f1108(0x135)](_0x292a27,_0x175755),0x5*-0x5f+-0x9c0+-0x1*-0xb9d),_0x4d0d71+_0x292a27+_0x175755,_0x292a27,_0x292a27);var _0x251141=(_0x394981-_0x175755)/(0xb*0x2ef+0x620+-0x2663),_0x722439=_0x57632f[_0x3f1108(0x24e)](_0x4d0d71,_0x57632f['rQHlx'](_0x292a27,_0x175755)*(-0x42*0x2f+0xd8d+0x5*-0x49));_0x1166b3(_0x3f1108(0x4c1),_0x57632f[_0x3f1108(0x646)],_0x33d21c,_0x722439,_0x251141,_0x292a27,_0x184d40[_0x3f1108(0x1c4)]?_0x245a91(-0x12c1+-0x14d0*0x1+0x2792)+_0x3f1108(0x469):''),_0x1166b3(_0x57632f[_0x3f1108(0x3e0)],_0x3f1108(0x51e)+'3',_0x33d21c+_0x251141+_0x175755,_0x722439,_0x251141,_0x292a27,_0x508ec3[_0x3f1108(0x1c4)]?_0x1b0e42(0x160f+-0x18ea*-0x1+-0x2ef6)+_0x57632f[_0x3f1108(0x1d6)]:''),_0x57632f['fcsGG'](_0x1166b3,'','Space',_0x33d21c,_0x722439+_0x292a27+_0x175755,_0x394981,_0x292a27*(0x1dcb+0x513*0x2+-0x27f1+0.45));}}function _0x578644(_0x12cf85){var _0x239035=_0x394b7e,_0x30f4d7={'DQKdw':_0x239035(0x6b5)+'|1|2|'+'4','iQKwD':function(_0x4b6950,_0x4e5f9b,_0x23f1ca,_0x5632bf,_0x15711d){return _0x4b6950(_0x4e5f9b,_0x23f1ca,_0x5632bf,_0x15711d);},'QyRJE':_0x239035(0x64b),'nqNAC':function(_0x3cd925,_0x1646a7,_0x5e1419,_0x2d3530,_0x1b3b96){return _0x3cd925(_0x1646a7,_0x5e1419,_0x2d3530,_0x1b3b96);}};if(_0x239035(0x249)===_0x57632f[_0x239035(0x5c9)]){var _0x140605=_0x24b53c[_0x12cf85]||[],_0x53032d=performance[_0x239035(0x58c)]();while(_0x140605[_0x239035(0x48a)+'h']&&_0x53032d-_0x140605[-0x2146+-0x2a1*0x1+0x23e7]>0x1cce+0x2*0x115+0x10*-0x1b1)_0x140605[_0x239035(0x3bb)]();return _0x140605['lengt'+'h'];}else{var _0x537654=_0x30f4d7[_0x239035(0x6f0)][_0x239035(0x322)]('|'),_0x9c0a93=-0xac9+0x1474+-0x9ab;while(!![]){switch(_0x537654[_0x9c0a93++]){case'0':_0xc94e2b(_0x351fb4,-0x21a7+0xe9e+0x1335,'f32',_0x4f3daa);continue;case'1':_0x30f4d7[_0x239035(0x60f)](_0x490d39,_0x57db34,-0x1d7e+0xb9*-0x7+-0x22c1*-0x1,'f32',_0x7628b6);continue;case'2':_0x3c6775(_0x24f632,0x214d+0x1*-0x249b+0x36a,_0x30f4d7['QyRJE'],_0x3ceef3);continue;case'3':_0x30f4d7[_0x239035(0x60f)](_0x490068,_0x6b68fa,0x1acd+0x685*-0x1+0xa0c*-0x2,_0x30f4d7[_0x239035(0x325)],_0x3bc129);continue;case'4':_0x30f4d7[_0x239035(0x4d7)](_0x23ad0a,_0x293d91,0x159e+-0x1*-0x2211+-0x378f,_0x30f4d7['QyRJE'],_0x42534b);continue;case'5':_0x30f4d7[_0x239035(0x4d7)](_0xb9477d,_0x25d7c6,-0x1c*-0x13d+-0x11fe+-0x582*0x3,_0x30f4d7[_0x239035(0x325)],_0x27d450);continue;}break;}}}function _0x3a2907(_0x27043c){var _0x491c14=_0x394b7e;if(document[_0x491c14(0x6b9)]&&(_0x57632f['HIJgh'](document['ready'+'State'],_0x57632f[_0x491c14(0x1e7)])||_0x57632f['ZlMYF'](document[_0x491c14(0x539)+_0x491c14(0x585)],'compl'+_0x491c14(0x67b))))_0x27043c();else document[_0x491c14(0x426)+'entLi'+_0x491c14(0x53f)+'r']('DOMCo'+'ntent'+_0x491c14(0x2e6)+'d',_0x27043c,{'once':!![]});}_0x57632f['JJMuA'](_0x3a2907,()=>{var _0x1306cc=_0x394b7e,_0x1c8f09={'UfwFL':_0x1306cc(0x57c),'SHIVs':function(_0x2515e6,_0x469734){return _0x2515e6!==_0x469734;},'QUJaU':_0x1306cc(0x685),'eNARG':_0x1306cc(0x296)+'io_30'+_0x1306cc(0x3b8)+'-pare'+'nt','UuCYH':_0x1306cc(0x1c3)+_0x1306cc(0x2ed)+_0x1306cc(0x68a)+'s','JwCFe':_0x1306cc(0x5a0),'vEJRU':_0x57632f[_0x1306cc(0x44c)],'XwtSz':_0x57632f['rfZek'],'NcRzZ':_0x1306cc(0x53a)+_0x1306cc(0x26e)+_0x1306cc(0x678)+_0x1306cc(0x37c)+'5)','ayDoh':function(_0x551f88,_0x1de28f){var _0xe85f77=_0x1306cc;return _0x57632f[_0xe85f77(0x423)](_0x551f88,_0x1de28f);},'fzjld':function(_0x2b8c13,_0x3819f4){var _0x4783c7=_0x1306cc;return _0x57632f[_0x4783c7(0x371)](_0x2b8c13,_0x3819f4);},'UfkQl':function(_0x54ad19,_0x58ec51){return _0x54ad19(_0x58ec51);},'TBcKz':_0x1306cc(0x35d),'WGhfv':_0x1306cc(0x43b),'oozPr':_0x1306cc(0x699)+'n','tWnpm':function(_0x2aac80,_0x932f1a){var _0x168e2b=_0x1306cc;return _0x57632f[_0x168e2b(0x232)](_0x2aac80,_0x932f1a);},'XhSRB':'\x20err','jFYha':function(_0x10e391,_0xf057aa){return _0x10e391===_0xf057aa;},'HkYxm':_0x57632f[_0x1306cc(0x4c0)],'qnJdd':_0x57632f['HWKZa'],'MTnNj':_0x1306cc(0x5d0)+'rd-ti'+_0x1306cc(0x434),'lRirM':_0x1306cc(0x667)+'g','jHYEB':'EHJSF','UHGhq':_0x1306cc(0x680)+'esc','CivyJ':_0x57632f[_0x1306cc(0x6d7)],'tPlWq':'set_t'+_0x1306cc(0x69c)+'Frame'+_0x1306cc(0x15a),'VroEe':'UWMK\x20'+'bound'+'\x20','MxBic':function(_0x5b52d2,_0x10e29a){return _0x5b52d2+_0x10e29a;},'ECaBf':_0x1306cc(0x10d)+'s','TEnbb':'0\x20hoo'+_0x1306cc(0x3a0)+'med\x20('+_0x1306cc(0x2f5)+_0x1306cc(0x278),'Uhagn':_0x1306cc(0x39f)+'me\x20','NOStt':_0x57632f[_0x1306cc(0x645)],'xlfvB':'\x20|\x20mo'+_0x1306cc(0x55b)+'t\x20','ZEKEd':_0x57632f[_0x1306cc(0x637)],'NSUhT':_0x57632f[_0x1306cc(0x3eb)],'aCykS':_0x1306cc(0x633)+'s','mHkSn':function(_0xd8a3d1,_0x37ff49,_0x2a3726,_0x44808d){var _0x481d74=_0x1306cc;return _0x57632f[_0x481d74(0x19c)](_0xd8a3d1,_0x37ff49,_0x2a3726,_0x44808d);},'GgImX':'calls'+_0x1306cc(0x1c5)+'yEngi'+'ne.Ap'+'plica'+'tion.'+_0x1306cc(0x314)+_0x1306cc(0x69c)+_0x1306cc(0x2b8)+'Rate','ZdtEK':_0x1306cc(0x2ec),'jkWyy':function(_0x2de7b6){return _0x2de7b6();},'MFvDW':function(_0x25cd69,_0x164c0e,_0x1b23ae,_0x5bc9a9,_0x4889a7,_0x32a504){return _0x57632f['JinZf'](_0x25cd69,_0x164c0e,_0x1b23ae,_0x5bc9a9,_0x4889a7,_0x32a504);},'wupPF':_0x1306cc(0x146)+_0x1306cc(0x527)+'r.ui.'+'v1','aXkea':function(_0x5152d2,_0x2ce8b5){var _0x2cc538=_0x1306cc;return _0x57632f[_0x2cc538(0x2f8)](_0x5152d2,_0x2ce8b5);},'RuHHI':_0x57632f['DSGWz'],'jvzgZ':function(_0x2bc349){return _0x2bc349();},'unzej':_0x1306cc(0x10f),'vopWu':_0x1306cc(0x42c),'dyNca':function(_0x48f199){return _0x48f199();},'sAkTj':function(_0x35373e){return _0x35373e();},'hTxjT':function(_0x52620a,_0x576866){return _0x52620a===_0x576866;},'sBwhv':_0x57632f[_0x1306cc(0x66c)],'HNJqA':function(_0x291bbc){return _0x291bbc();},'WnXPu':function(_0x4defad){return _0x57632f['yJSqC'](_0x4defad);},'BDVcG':'lshnp','IYHmL':function(_0x557d9b,_0x325fec,_0x8275f){return _0x557d9b(_0x325fec,_0x8275f);},'PlGek':_0x1306cc(0x2fd),'mslra':_0x1306cc(0x505),'ZjvbN':_0x57632f[_0x1306cc(0x1f4)],'PIwAU':'HpDvF','dNtiL':_0x57632f[_0x1306cc(0x6a5)],'Gdbmi':_0x57632f[_0x1306cc(0x236)],'stAws':_0x57632f['cmSTx'],'kFNYd':_0x1306cc(0x40c)+_0x1306cc(0x6b4)+_0x1306cc(0x51c)+_0x1306cc(0x21b)+'xes\x20a'+'ccura'+_0x1306cc(0x22c)+_0x1306cc(0x242)+'\x20weap'+'on\x20ev'+_0x1306cc(0x1e9)+_0x1306cc(0x695),'UxaXQ':function(_0x3289b7,_0x3ff9bf,_0x5f0aaf,_0x1b6573,_0x436560,_0x277804){return _0x3289b7(_0x3ff9bf,_0x5f0aaf,_0x1b6573,_0x436560,_0x277804);},'STePD':_0x57632f['tJBYl'],'vvoaq':function(_0x97b004,_0x2d0aab,_0x459c28,_0x34092f,_0x39207f,_0x1a6002){return _0x57632f['bETOV'](_0x97b004,_0x2d0aab,_0x459c28,_0x34092f,_0x39207f,_0x1a6002);},'IeuRu':_0x57632f[_0x1306cc(0x276)],'FzJrr':'move','bCppb':_0x1306cc(0x191),'pEcCc':function(_0x5a1636,_0x24eada,_0x42691e,_0x500b1b,_0x1feeca,_0x146085){var _0x5c203e=_0x1306cc;return _0x57632f[_0x5c203e(0x3c9)](_0x5a1636,_0x24eada,_0x42691e,_0x500b1b,_0x1feeca,_0x146085);},'PbbAa':function(_0x39972a,_0x3d3bf3,_0x4699cd,_0x121891){var _0x1706b4=_0x1306cc;return _0x57632f[_0x1706b4(0x21d)](_0x39972a,_0x3d3bf3,_0x4699cd,_0x121891);},'ZASiR':_0x57632f[_0x1306cc(0x229)],'JQwOC':function(_0x1c0d2d,_0x3ef96a){return _0x1c0d2d!==_0x3ef96a;},'ZDQTs':function(_0x5290e3,_0xb10a04,_0x3aaa4c,_0x299d51){return _0x5290e3(_0xb10a04,_0x3aaa4c,_0x299d51);},'wByog':function(_0x34c0ad,_0x586360,_0x4fabd2,_0x5123d2){return _0x57632f['uQyEM'](_0x34c0ad,_0x586360,_0x4fabd2,_0x5123d2);},'VYCGm':function(_0x4ea836,_0x455b22,_0x4ec302,_0x43cc5e){var _0x3c3c82=_0x1306cc;return _0x57632f[_0x3c3c82(0x19c)](_0x4ea836,_0x455b22,_0x4ec302,_0x43cc5e);},'uVMvQ':_0x57632f[_0x1306cc(0x2c0)],'cFvSq':_0x57632f[_0x1306cc(0x5ca)],'KNkBv':function(_0x4e8ff7,_0x254a35,_0x321aac,_0x2937b3){var _0x507fb2=_0x1306cc;return _0x57632f[_0x507fb2(0x66f)](_0x4e8ff7,_0x254a35,_0x321aac,_0x2937b3);},'JUcQf':function(_0x126c3f,_0x2be1b7,_0x238865,_0xd5f167,_0x8ffeb8,_0x255024){return _0x57632f['bETOV'](_0x126c3f,_0x2be1b7,_0x238865,_0xd5f167,_0x8ffeb8,_0x255024);},'JgmEy':_0x1306cc(0x1ec)+_0x1306cc(0x34a),'MNidY':_0x1306cc(0x594)+_0x1306cc(0x50e)+'y.','IBVYx':function(_0x1eff12,_0xa49ba0,_0x43b649,_0x5b5645){return _0x1eff12(_0xa49ba0,_0x43b649,_0x5b5645);},'UEqdF':function(_0x4ea777,_0xb88698){return _0x4ea777===_0xb88698;},'mYYMj':_0x57632f[_0x1306cc(0x5a9)],'FTiaJ':_0x1306cc(0x27f)+'ck','drmQE':_0x1306cc(0x481)+_0x1306cc(0x1ae)+_0x1306cc(0x346)+_0x1306cc(0x3da)+'—\x20no\x20'+'WASM\x20'+_0x1306cc(0x3db)+_0x1306cc(0x55f)+'\x20this'+_0x1306cc(0x1ef)+'atche'+_0x1306cc(0x566)+'\x27t\x20st'+_0x1306cc(0x459),'JjHkt':function(_0x38ccb7,_0x5723dd,_0x3dc030,_0x58537d,_0x5d2aad,_0x2f18f3){var _0x2983b6=_0x1306cc;return _0x57632f[_0x2983b6(0x3c9)](_0x38ccb7,_0x5723dd,_0x3dc030,_0x58537d,_0x5d2aad,_0x2f18f3);},'eBIiD':_0x57632f[_0x1306cc(0x68b)],'Opfuw':function(_0x409e7f,_0x283109,_0x44f5a4,_0x5a3668){return _0x409e7f(_0x283109,_0x44f5a4,_0x5a3668);},'lHfnO':'god\x20('+_0x1306cc(0x606)+_0x1306cc(0x29a)+_0x1306cc(0x359)+_0x1306cc(0x551)+'Healt'+'h)','nrGfZ':function(_0x539cdf,_0x31b866,_0x316ba0,_0x7898ba){return _0x539cdf(_0x31b866,_0x316ba0,_0x7898ba);},'xsgZQ':_0x1306cc(0x53c)+'e\x20(OH'+_0x1306cc(0x295)+'.Loca'+'lDie)','wXrtL':'noRec'+'oil\x20('+'Recoi'+_0x1306cc(0x452)+'on.Ti'+_0x1306cc(0x477),'YoEOj':_0x1306cc(0x487)+'Kille'+'r','lBCIP':_0x57632f[_0x1306cc(0x131)],'TGsho':function(_0x4888ae,_0x542f00,_0x40543f){return _0x4888ae(_0x542f00,_0x40543f);},'inpon':_0x1306cc(0x227)+'amage'+_0x1306cc(0x152)+_0x1306cc(0x3fe)+'atly\x20'+'raise'+_0x1306cc(0x6e6)+'risk\x20'+'even\x20'+_0x1306cc(0x444)+'this\x20'+_0x1306cc(0x2bd),'XQfzO':_0x1306cc(0x1a0)+'\x20leav'+'e\x20ser'+'ver-v'+'isibl'+'e\x20tra'+'ces.','IBOHO':_0x1306cc(0x351)+_0x1306cc(0x500)+_0x1306cc(0x361)+'s','qNyqI':_0x1306cc(0x5e7),'oNqxo':_0x1306cc(0x656)+'a\x20Kou'+'r\x20—\x20','WpYqh':_0x57632f['wndtt'],'Kwgkn':_0x57632f['dHBHg'],'zWmHG':function(_0x3c42f8,_0x5ac974){return _0x3c42f8===_0x5ac974;},'cElYv':_0x1306cc(0x608)+_0x1306cc(0x329)+'-\x20ove'+_0x1306cc(0x122)+'only,'+'\x20no\x20h'+_0x1306cc(0x1fc)+_0x1306cc(0x56d)+'ad\x20to'+'\x20exit'+')','oelUT':function(_0x2a693a,_0x18310c){return _0x2a693a+_0x18310c;},'yQcxl':_0x57632f['QmGHL']};_0x354827[_0x1306cc(0x403)+'ck']&&setInterval(()=>{var _0x49ba01=_0x1306cc,_0x21d1ab={'BIviu':function(_0x1de9b0,_0x59984b){return _0x1de9b0(_0x59984b);},'eytSu':function(_0x490e03,_0x3cac17){return _0x490e03/_0x3cac17;},'phCSZ':function(_0x2c7ace){return _0x2c7ace();},'NvbNg':_0x1c8f09['UfwFL'],'amuGN':_0x49ba01(0x205)};try{if(_0x1c8f09[_0x49ba01(0x612)](_0x1c8f09['QUJaU'],'qhTnG'))for(var _0x4a4e01 of[_0x49ba01(0x296)+'io_30'+'0x250'+_0x49ba01(0x5f5)+'nt',_0x49ba01(0x296)+_0x49ba01(0x2dd)+'8x90-'+_0x49ba01(0x110)+'t',_0x1c8f09[_0x49ba01(0x66e)],_0x1c8f09[_0x49ba01(0x2f4)]]){var _0x991d8=document['getEl'+'ement'+_0x49ba01(0x5d1)](_0x4a4e01);if(_0x991d8&&_0x4a4e01===_0x1c8f09[_0x49ba01(0x2f4)]){var _0xfec3f1=_0x991d8[_0x49ba01(0x16b)+'ren'];for(var _0x5e736c=-0xbe4+-0xd15+-0x18f9*-0x1;_0x5e736c<_0xfec3f1['lengt'+'h'];_0x5e736c++){if(_0x1c8f09['JwCFe']!=='XxWaJ')try{var _0x1d2df1=new _0x3ea48a(_0x51efc2)[_0x49ba01(0x4cd)+_0x49ba01(0x1a6)](_0x44b1f3,_0x49ba01(0x54a));return _0x1d2df1?_0x1d2df1['val']():-0x1*-0x1afd+-0x51c+0x1*-0x15e1;}catch(_0x1d2cce){return-0x247a+-0x253d*0x1+0x49b7;}else{if(_0xfec3f1[_0x5e736c]['id']&&_0xfec3f1[_0x5e736c]['id'][_0x49ba01(0x166)+'Of']('kour-'+_0x49ba01(0x55e))===0x1567*-0x1+0x16*-0x56+0x1ccb)_0xfec3f1[_0x5e736c][_0x49ba01(0x1a9)][_0x49ba01(0x266)+'ay']=_0x1c8f09['vEJRU'];}}}else{if(_0x991d8)_0x991d8['style'][_0x49ba01(0x266)+'ay']=_0x1c8f09[_0x49ba01(0x533)];}}else{var _0xd8151a=_0x199563[_0x49ba01(0x158)+_0x49ba01(0x3d4)+_0x49ba01(0x2ab)](_0x21d1ab['NvbNg']);_0xd8151a['class'+'Name']=_0x49ba01(0x3a7)+_0x49ba01(0x23d);var _0x5abd60=_0x252db9[_0x49ba01(0x158)+_0x49ba01(0x3d4)+'ent'](_0x49ba01(0x22d));_0x5abd60[_0x49ba01(0x6f6)]=_0x21d1ab['amuGN'],_0x5abd60[_0x49ba01(0x1a1)+_0x49ba01(0x5d6)]='sk-sl'+'ider',_0x5abd60['min']=_0x46b22f,_0x5abd60['max']=_0x51d0ac,_0x5abd60['step']=_0x5f4105,_0x5abd60[_0x49ba01(0x3cb)]=_0x14fab6;var _0x3b7323=_0x3f69aa[_0x49ba01(0x158)+'eElem'+'ent']('span');_0x3b7323[_0x49ba01(0x1a1)+_0x49ba01(0x5d6)]=_0x49ba01(0x57e)+'l',_0x3b7323['textC'+'onten'+'t']=_0x386b09(_0x154a42);var _0x50a31b=()=>{var _0x324910=_0x49ba01;_0x3b7323[_0x324910(0x5af)+'onten'+'t']=_0x21d1ab[_0x324910(0x4cc)](_0x1cc3a2,_0x5abd60['value']),_0xd8151a[_0x324910(0x1a9)]['setPr'+'opert'+'y'](_0x324910(0x2ca),_0x21d1ab[_0x324910(0x1e6)](_0x5abd60['value']-_0x372558,_0x179727-_0x350dc6)*(0x6b4*-0x2+-0x175c+0x2528)+'%');};return _0x5abd60['oninp'+'ut']=()=>{var _0x2ebe79=_0x49ba01;_0x21d1ab['phCSZ'](_0x50a31b),_0x11d44e(_0x4d9271(_0x5abd60[_0x2ebe79(0x3cb)]));},_0x50a31b(),_0xd8151a[_0x49ba01(0x4db)+'d'](_0x5abd60,_0x3b7323),_0xd8151a;}}catch(_0x5df5c0){}},-0x5*0x367+0x38*0x5c+0x191*0x3);var _0x3b62fc=document['creat'+_0x1306cc(0x3d4)+_0x1306cc(0x2ab)]('canva'+'s');_0x3b62fc[_0x1306cc(0x1a9)]['cssTe'+'xt']='posit'+'ion:f'+_0x1306cc(0x1e3)+_0x1306cc(0x42a)+':0;wi'+_0x1306cc(0x11c)+_0x1306cc(0x6a6)+_0x1306cc(0x442)+_0x1306cc(0x4a4)+'vh;z-'+'index'+_0x1306cc(0x4de)+_0x1306cc(0x2f3)+_0x1306cc(0x1d2)+_0x1306cc(0x189)+_0x1306cc(0x114)+'s:non'+'e';var _0x4c3bf8=_0x3b62fc[_0x1306cc(0x364)+'ntext']('2d');function _0x2206e6(){var _0x231835=_0x1306cc;try{if(_0x231835(0x3e5)!=='JOHnA'){if(!_0x30cbf7[_0x231835(0x445)+_0x231835(0x12a)])_0x357222[_0x231835(0x4ef)+'e'](_0x1c8f09[_0x231835(0x6c8)]+(_0x2083c2[_0x231835(0x699)+'n']+(0x2*-0xa90+-0x108+0x1629)));}else{var _0x2f2344=document[_0x231835(0x1c3)+'creen'+'Eleme'+'nt'],_0xa9e329=_0x2f2344&&_0x2f2344[_0x231835(0x69d)+'me']!==_0x231835(0x6d5)+'S'?_0x2f2344:document[_0x231835(0x6b9)]||document['docum'+'entEl'+'ement'];if(_0x3b62fc[_0x231835(0x110)+_0x231835(0x549)]!==_0xa9e329)_0xa9e329[_0x231835(0x4db)+_0x231835(0x5ce)+'d'](_0x3b62fc);}}catch(_0x21f90a){try{_0x57632f[_0x231835(0x6db)](_0x57632f['Arbxz'],_0x231835(0x2ae))?(_0x12aa72[_0x231835(0x4ac)+'ropag'+'ation'](),_0x346ce4()):document[_0x231835(0x6b9)]['appen'+'dChil'+'d'](_0x3b62fc);}catch(_0x1041ff){}}}var _0x41bfec={'w':0x0,'h':0x0,'dpr':0x0};function _0x18394e(){var _0x55243=_0x1306cc,_0x334bf1=window['devic'+_0x55243(0x2b9)+_0x55243(0x32c)+'o']||0x55*0x46+-0x209*-0x1+-0x1946,_0xb93ffe=window['inner'+'Width'],_0x52875e=window[_0x55243(0x49c)+_0x55243(0x567)+'t'];if(_0xb93ffe===_0x41bfec['w']&&_0x57632f[_0x55243(0x413)](_0x52875e,_0x41bfec['h'])&&_0x334bf1===_0x41bfec['dpr'])return;_0x41bfec['w']=_0xb93ffe,_0x41bfec['h']=_0x52875e,_0x41bfec[_0x55243(0x4bd)]=_0x334bf1,_0x3b62fc['width']=Math['round'](_0x57632f[_0x55243(0x1c7)](_0xb93ffe,_0x334bf1)),_0x3b62fc[_0x55243(0x442)+'t']=Math['round'](_0x52875e*_0x334bf1),_0x4c3bf8[_0x55243(0x323)+'ansfo'+'rm'](_0x334bf1,0x16c2+-0x2b7*0x3+-0x1d*0x81,-0x1cfd+-0x1d84+0x3a81,_0x334bf1,0xa2d*0x1+0x1186+-0x7*0x3f5,-0xf*-0xdd+0x267e*-0x1+0x198b);}var _0x1845dd=-0xb*0x333+-0x21*0x3b+0x391*0xc,_0x1209b9=performance['now'](),_0x12a538=0x12e9+0x905*-0x1+0xd3*-0xc;function _0x294923(_0x51d754){var _0x281baf=_0x1306cc,_0x5d0ef3={'ZprBI':function(_0x53deb4){var _0x4b1712=_0x1b49;return _0x57632f[_0x4b1712(0x58b)](_0x53deb4);},'GdBJr':_0x57632f['wuaxN'],'BSIaY':_0x281baf(0x53a)+_0x281baf(0x264)+_0x281baf(0x559)+'7)','ePPsR':_0x281baf(0x638)+'r','IdTEY':function(_0x5d3bd3,_0x140318){return _0x5d3bd3+_0x140318;},'ZeNeE':'700\x20','PchwN':function(_0xa93e53,_0xdad2ed){return _0xa93e53*_0xdad2ed;},'TYfgU':function(_0x5970c8,_0x219f21){return _0x57632f['HINcU'](_0x5970c8,_0x219f21);},'qkpUL':function(_0x36d252,_0x4f5bc3){return _0x36d252/_0x4f5bc3;},'dySKq':'600\x20','HUKtq':function(_0x21a3e0,_0x1add5e){var _0x39aaa2=_0x281baf;return _0x57632f[_0x39aaa2(0x5a7)](_0x21a3e0,_0x1add5e);},'TcWxX':'px\x20ui'+_0x281baf(0x45d)+'-seri'+'f,sys'+_0x281baf(0x600)+_0x281baf(0x6a0)+'s-ser'+'if','xSIda':_0x57632f[_0x281baf(0x206)],'ztKcu':'rgba('+_0x281baf(0x26e)+'35,24'+'0,0.5'+'5)','dIKTs':function(_0x1539b1,_0x3da829){var _0x458ed0=_0x281baf;return _0x57632f[_0x458ed0(0x5de)](_0x1539b1,_0x3da829);}},_0x495161=_0x57632f['ugefa'](Number,_0x354827[_0x281baf(0x1d9)+'le'])||0x947*-0x2+-0x155*-0xd+-0x6*-0x35,_0x3a870c=(0x11*-0xd3+-0x7*0x1ab+0x19d2)*_0x495161,_0x984913=_0x57632f['hGcLE'](-0xc87+-0x1*-0x997+0x2f4,_0x495161),_0x2d9943=_0x3a870c*(0x1*-0x2681+-0x2571+0x4bf5*0x1)+_0x57632f[_0x281baf(0x4b5)](_0x984913,-0x1059+0x2611*-0x1+-0x144*-0x2b),_0x2fd9b2=_0x57632f[_0x281baf(0x23a)](_0x3a870c*(0x1*0x713+0x4f*0x23+-0x11dd),_0x57632f[_0x281baf(0x463)](_0x984913,0x4*-0x72+-0x1bf8+0x1dc2)),_0x18e520=_0x354827[_0x281baf(0x261)],_0x2a124d=_0x18e520==='br'?_0x57632f[_0x281baf(0x62b)](_0x51d754[_0x281baf(0x634)],-0xf0a+0x2205+-0x12eb*0x1)-_0x2d9943:_0x57632f[_0x281baf(0x23a)](_0x51d754['left'],0x6*-0x2b9+0x1*-0xcd6+0xe9e*0x2),_0x3e3e09=_0x18e520==='ml'?_0x51d754[_0x281baf(0x437)]+_0x57632f[_0x281baf(0x4f4)](_0x51d754[_0x281baf(0x442)+'t'],-0x2*0xa57+0x12df+0x1d1)-_0x57632f['FOAqj'](_0x2fd9b2,0x17fd+-0x20b6+0x8bb):_0x57632f[_0x281baf(0x4bc)](_0x51d754[_0x281baf(0x190)+'m'],_0x2fd9b2)-(_0x18e520==='bl'?0x2304+0x1*-0x1853+-0xa51:0x142c+0x2241+-0x1*0x35d7),_0x7fc786=(_0x3fdf23,_0x7489b5,_0x1e2ef5,_0x4ae934,_0x362c81,_0x503504,_0x3c9a2d)=>{var _0x2a078b=_0x281baf;if('tgiuY'==='tgiuY'){var _0x3b29fb=_0x2c8d8e[_0x2a078b(0x194)](_0x7489b5);_0x4c3bf8['save'](),_0x4c3bf8[_0x2a078b(0x688)+'Path']();if(_0x4c3bf8['round'+'Rect'])_0x4c3bf8[_0x2a078b(0x5df)+'Rect'](_0x1e2ef5,_0x4ae934,_0x362c81,_0x503504,(0x1a*0xb5+-0x59+-0x1202)*_0x495161);else _0x4c3bf8['rect'](_0x1e2ef5,_0x4ae934,_0x362c81,_0x503504);_0x4c3bf8[_0x2a078b(0x1e5)+'tyle']=_0x3b29fb?_0x5d0ef3[_0x2a078b(0x537)]:_0x5d0ef3[_0x2a078b(0x6ec)],_0x4c3bf8[_0x2a078b(0x4f6)](),_0x4c3bf8[_0x2a078b(0x5fb)+_0x2a078b(0x148)]=0x1a01+-0x2c1*0x6+0x97a*-0x1,_0x4c3bf8[_0x2a078b(0x3c8)+'eStyl'+'e']=_0x3b29fb?_0x36608b:'rgba('+_0x2a078b(0x155)+'07,15'+_0x2a078b(0x4b7)+'5)',_0x4c3bf8[_0x2a078b(0x3c8)+'e'](),_0x3b29fb&&(_0x4c3bf8['shado'+_0x2a078b(0x49f)+'r']=_0x48f03e,_0x4c3bf8['shado'+_0x2a078b(0x143)]=0x2483+-0x9b*0x3d+0x7a,_0x4c3bf8['fill'](),_0x4c3bf8[_0x2a078b(0x662)+'wBlur']=-0x578+-0x1d*-0x115+-0x19e9),_0x4c3bf8[_0x2a078b(0x1e5)+_0x2a078b(0x3b5)]=_0x3b29fb?'#fff':_0x2a078b(0x53a)+'255,2'+_0x2a078b(0x678)+_0x2a078b(0x51a)+')',_0x4c3bf8[_0x2a078b(0x6a2)+_0x2a078b(0x5b7)]=_0x5d0ef3['ePPsR'],_0x4c3bf8['textB'+_0x2a078b(0x1ed)+'ne']='middl'+'e',_0x4c3bf8['font']=_0x5d0ef3[_0x2a078b(0x5cf)](_0x5d0ef3[_0x2a078b(0x4a9)],Math['round'](_0x5d0ef3[_0x2a078b(0x64a)](-0xa69*-0x1+0x259*0x2+-0xf0f,_0x495161)))+('px\x20ui'+'-sans'+'-seri'+'f,sys'+_0x2a078b(0x600)+_0x2a078b(0x6a0)+'s-ser'+'if'),_0x4c3bf8[_0x2a078b(0x25a)+'ext'](_0x3fdf23,_0x1e2ef5+_0x362c81/(0x21a*-0x8+-0x1d3d+0x2e0f),_0x5d0ef3[_0x2a078b(0x45e)](_0x4ae934+_0x5d0ef3[_0x2a078b(0x1d7)](_0x503504,-0x17*0x107+0x1f0a+-0x767),_0x3c9a2d?_0x5d0ef3[_0x2a078b(0x64a)](0x50*-0x43+0x1063+-0x27*-0x1e,_0x495161):0x1f0c*-0x1+-0x2437+-0x4343*-0x1)),_0x3c9a2d&&(_0x4c3bf8['font']=_0x5d0ef3['dySKq']+Math['round'](_0x5d0ef3[_0x2a078b(0x11b)](0x453+-0x439+0x1*-0x11,_0x495161))+_0x5d0ef3[_0x2a078b(0x635)],_0x4c3bf8['fillS'+_0x2a078b(0x3b5)]=_0x3b29fb?_0x5d0ef3[_0x2a078b(0x2f1)]:_0x5d0ef3['ztKcu'],_0x4c3bf8['fillT'+'ext'](_0x3c9a2d,_0x1e2ef5+_0x362c81/(0xfcd*-0x2+0x264d+0x1*-0x6b1),_0x5d0ef3['dIKTs'](_0x4ae934,_0x503504/(-0x6f9+0x4*0x387+-0x721))+(0xad*-0x2b+-0x5*0x373+0x2e56)*_0x495161)),_0x4c3bf8[_0x2a078b(0x1a3)+'re']();}else _0x22a991[_0x2a078b(0x30c)+_0x2a078b(0x140)]=_0x80fd98,_0x5d0ef3['ZprBI'](_0xc7f01b);};_0x7fc786('W','KeyW',_0x2a124d+_0x3a870c+_0x984913,_0x3e3e09,_0x3a870c,_0x3a870c),_0x7fc786('A','KeyA',_0x2a124d,_0x57632f[_0x281baf(0x23a)](_0x57632f[_0x281baf(0x652)](_0x3e3e09,_0x3a870c),_0x984913),_0x3a870c,_0x3a870c),_0x7fc786('S',_0x281baf(0x416),_0x57632f[_0x281baf(0x15b)](_0x2a124d+_0x3a870c,_0x984913),_0x57632f[_0x281baf(0x498)](_0x3e3e09+_0x3a870c,_0x984913),_0x3a870c,_0x3a870c),_0x7fc786('D',_0x281baf(0x2a9),_0x2a124d+(_0x3a870c+_0x984913)*(-0x7c*0x2f+0x224*0x1+0x14a2),_0x3e3e09+_0x3a870c+_0x984913,_0x3a870c,_0x3a870c);var _0x4812bb=(_0x2d9943-_0x984913)/(-0x253c+0x4*0x7a2+0x6b6),_0x35e51b=_0x57632f['DwaHg'](_0x3e3e09,_0x57632f['kRdFm'](_0x57632f[_0x281baf(0x135)](_0x3a870c,_0x984913),0x22dd+0x6e3+-0x2*0x14df));_0x57632f['lQeQP'](_0x7fc786,_0x57632f[_0x281baf(0x23c)],_0x57632f[_0x281baf(0x646)],_0x2a124d,_0x35e51b,_0x4812bb,_0x3a870c,_0x354827['ksCps']?_0x578644(0x683*0x3+0x1385+0x270d*-0x1)+_0x57632f[_0x281baf(0x1d6)]:''),_0x57632f[_0x281baf(0x144)](_0x7fc786,_0x57632f[_0x281baf(0x3e0)],_0x57632f[_0x281baf(0x690)],_0x57632f['laZBT'](_0x2a124d+_0x4812bb,_0x984913),_0x35e51b,_0x4812bb,_0x3a870c,_0x354827['ksCps']?_0x578644(0x1*0x1606+0x1*-0x443+-0x11c0)+_0x281baf(0x469):''),_0x57632f[_0x281baf(0x254)](_0x7fc786,'','Space',_0x2a124d,_0x57632f[_0x281baf(0x3a2)](_0x35e51b,_0x3a870c)+_0x984913,_0x2d9943,_0x57632f[_0x281baf(0x463)](_0x3a870c,-0x3cb+-0x1dd8+-0x6d*-0x4f+0.45));}function _0xffc825(_0x49515a){var _0x21e3e7=_0x1306cc,_0x489e54=_0x49515a['width']/(-0x374+0x46a+-0x4*0x3d),_0x32d6c3=_0x57632f[_0x21e3e7(0x2a7)](_0x49515a[_0x21e3e7(0x442)+'t'],-0xc00*0x3+0x1f*0x16+0x2158),_0xe19b8e=_0x57632f[_0x21e3e7(0x562)](Number,_0x354827['chSiz'+'e'])||-0x1991+0xacc+0xec6,_0x19a02c=/^#[0-9a-f]{6}$/i['test'](_0x354827['chCol'+'or'])?_0x354827[_0x21e3e7(0x64e)+'or']:'#ff6b'+'9d';_0x4c3bf8['save'](),_0x4c3bf8[_0x21e3e7(0x3c8)+_0x21e3e7(0x5ec)+'e']=_0x19a02c,_0x4c3bf8[_0x21e3e7(0x1e5)+'tyle']=_0x19a02c,_0x4c3bf8[_0x21e3e7(0x5fb)+_0x21e3e7(0x148)]=Math['max'](0x1475+0x1408+0x143e*-0x2+0.5,_0x57632f['hGcLE'](-0x1e58+0x3*0x242+0x1794,_0xe19b8e)),_0x4c3bf8[_0x21e3e7(0x662)+'wColo'+'r']=_0x19a02c,_0x4c3bf8[_0x21e3e7(0x662)+_0x21e3e7(0x143)]=0x3c*0xf+0x27d*-0xf+0x21d5;var _0x3a2c69=(0x1*-0x138f+-0x13*-0x113+-0x6a*0x2)*_0xe19b8e,_0x3a2768=_0x57632f['MqNIS'](0x800+0x1*0x9c1+0x1*-0x11b9,_0xe19b8e);_0x4c3bf8['begin'+'Path'](),_0x4c3bf8[_0x21e3e7(0x246)+'o'](_0x57632f[_0x21e3e7(0x6f5)](_0x489e54,_0x3a2c69)-_0x3a2768,_0x32d6c3),_0x4c3bf8['lineT'+'o'](_0x57632f['fKQkY'](_0x489e54,_0x3a2c69),_0x32d6c3),_0x4c3bf8['moveT'+'o'](_0x57632f[_0x21e3e7(0x374)](_0x489e54,_0x3a2c69),_0x32d6c3),_0x4c3bf8['lineT'+'o'](_0x489e54+_0x3a2c69+_0x3a2768,_0x32d6c3),_0x4c3bf8['moveT'+'o'](_0x489e54,_0x57632f[_0x21e3e7(0x565)](_0x57632f['HINcU'](_0x32d6c3,_0x3a2c69),_0x3a2768)),_0x4c3bf8['lineT'+'o'](_0x489e54,_0x32d6c3-_0x3a2c69),_0x4c3bf8[_0x21e3e7(0x246)+'o'](_0x489e54,_0x57632f[_0x21e3e7(0x344)](_0x32d6c3,_0x3a2c69)),_0x4c3bf8[_0x21e3e7(0x583)+'o'](_0x489e54,_0x57632f[_0x21e3e7(0x4a2)](_0x57632f[_0x21e3e7(0x5b3)](_0x32d6c3,_0x3a2c69),_0x3a2768)),_0x4c3bf8['strok'+'e'](),_0x4c3bf8[_0x21e3e7(0x688)+_0x21e3e7(0x64f)](),_0x4c3bf8[_0x21e3e7(0x3ef)](_0x489e54,_0x32d6c3,(0xe61+0x7*-0x119+0x6b1*-0x1+0.6000000000000001)*_0xe19b8e,-0x1*0x6e6+-0x137d+0x1a63,_0x57632f['yksOd'](Math['PI'],-0x3*-0xbbd+0x1*0x1946+-0x3c7b)),_0x4c3bf8[_0x21e3e7(0x4f6)](),_0x4c3bf8[_0x21e3e7(0x1a3)+'re']();}function _0x3d9fe7(_0x10ef89){var _0x36617b=_0x1306cc;if(_0x36617b(0x42e)!==_0x57632f[_0x36617b(0x4bf)])_0x31cbd3(!_0x3d9088);else{_0x4c3bf8[_0x36617b(0x2cb)](),_0x4c3bf8[_0x36617b(0x421)]='600\x201'+'2px\x20u'+'i-mon'+_0x36617b(0x647)+_0x36617b(0x18d)+'ospac'+'e',_0x4c3bf8[_0x36617b(0x6a2)+_0x36617b(0x5b7)]=_0x57632f[_0x36617b(0x33a)],_0x4c3bf8['textB'+'aseli'+'ne']='top';var _0x162cc8=-0x1*0xa9a+-0x171+0xc37,_0x39697c=0x39a*-0x3+-0xa34*0x1+0x37*0x62,_0x476701=(_0x102ce8,_0x38e95d)=>{var _0x35ca03=_0x36617b;_0x4c3bf8[_0x35ca03(0x1e5)+'tyle']=_0x38e95d||_0x1c8f09[_0x35ca03(0x657)],_0x4c3bf8[_0x35ca03(0x25a)+_0x35ca03(0x2f9)](_0x102ce8,_0x39697c,_0x162cc8),_0x162cc8+=-0x1297+-0x70c*0x3+0x27cb;};_0x476701(_0x57632f[_0x36617b(0x644)],_0x57632f['ptMHM']);if(_0x354827[_0x36617b(0x307)])_0x57632f['SYWAh'](_0x476701,_0x57632f['UAcOC'](_0x12a538,'\x20FPS'));if(!_0x332b4c[_0x36617b(0x16d)+'oaded'])_0x57632f['FDIRq'](_0x476701,_0x36617b(0x521)+_0x36617b(0x14a)+'r\x20gam'+'e…',_0x57632f['rYSvA']);_0x4c3bf8[_0x36617b(0x1a3)+'re']();}}function _0x4c5511(){var _0x1994c5=_0x1306cc;requestAnimationFrame(_0x4c5511),_0x1845dd++;var _0x4b4574=performance['now']();if(_0x4b4574-_0x1209b9>=-0x1df1+-0x1bf3+0x3bd8){if(_0x1c8f09[_0x1994c5(0x612)](_0x1994c5(0x589),_0x1994c5(0x589))){var _0x42ba26=new _0x1a20a2(_0x3b39f6)[_0x1994c5(0x4cd)+_0x1994c5(0x1a6)](_0xaa0d50,_0x2a2a06);_0x246ee8['set'](_0x46cf60,_0x1c8f09[_0x1994c5(0x612)](_0x42ba26,_0xbb08c1)?_0x42ba26['val']():null);}else _0x12a538=Math[_0x1994c5(0x5df)](_0x1c8f09[_0x1994c5(0x64d)](_0x1c8f09[_0x1994c5(0x234)](_0x1845dd,0x1*-0x7c1+-0x4da+0x1083),_0x4b4574-_0x1209b9)),_0x1845dd=0x2373+0x83a+-0xe8f*0x3,_0x1209b9=_0x4b4574;}_0x18394e(),_0x2206e6(),_0x4c3bf8[_0x1994c5(0x43d)+_0x1994c5(0x196)](0x1d87*-0x1+0x1716+0x1*0x671,-0x24b*0x5+-0x1a7d+0x7*0x56c,_0x41bfec['w'],_0x41bfec['h']);var _0x3cf8ce={'left':0x0,'top':0x0,'right':_0x41bfec['w'],'bottom':_0x41bfec['h'],'width':_0x41bfec['w'],'height':_0x41bfec['h']};if(_0x354827['cross'+_0x1994c5(0x379)])_0xffc825(_0x3cf8ce);if(_0x354827['keyst'+_0x1994c5(0x3ea)])_0x294923(_0x3cf8ce);_0x1c8f09['UfkQl'](_0x3d9fe7,_0x3cf8ce);}var _0x9d608f=document[_0x1306cc(0x158)+'eElem'+'ent'](_0x1306cc(0x57c));_0x9d608f['id']=_0x57632f[_0x1306cc(0x192)],_0x9d608f[_0x1306cc(0x1a9)][_0x1306cc(0x419)+'xt']=_0x57632f['qBfVE'];var _0x2e9560=_0x9d608f[_0x1306cc(0x456)+'hShad'+'ow']({'mode':_0x57632f[_0x1306cc(0x63b)]});(document[_0x1306cc(0x6b9)]||document[_0x1306cc(0x28f)+_0x1306cc(0x13a)+_0x1306cc(0x4f9)])[_0x1306cc(0x4db)+'dChil'+'d'](_0x9d608f);var _0x32b257=![],_0x3a8a3a={};try{if(_0x57632f['baeKD'](_0x1306cc(0x4e4),_0x57632f[_0x1306cc(0x476)]))_0x3a8a3a=JSON[_0x1306cc(0x650)](localStorage['getIt'+'em'](_0x57632f[_0x1306cc(0x3af)])||'{}');else{var _0x3cff27=_0x3bc777[_0x1306cc(0x626)+'ve'];if(_0x3cff27)try{_0x3cff27['enabl'+'ed']=![];}catch(_0x1350ba){}}}catch(_0x2b7337){}function _0x254e4f(){var _0x73d25b=_0x1306cc;try{localStorage['setIt'+'em'](_0x73d25b(0x146)+_0x73d25b(0x527)+_0x73d25b(0x19b)+'v1',JSON['strin'+_0x73d25b(0x350)](_0x3a8a3a));}catch(_0x431c59){}}function _0x59043d(_0x43ead0,_0x5777cf){var _0x4a2361=_0x1306cc,_0x349f04={'gMXni':'2|6|7'+'|0|3|'+'5|4|1','Skzwy':function(_0x5a0e51,_0x28d6a1){return _0x5a0e51!==_0x28d6a1;},'eJKUt':_0x4a2361(0x598),'LQYvc':_0x4a2361(0x653)+'check'+'ed','MMAUD':function(_0x418023,_0x24fc5e){var _0x1029c6=_0x4a2361;return _0x57632f[_0x1029c6(0x438)](_0x418023,_0x24fc5e);}},_0x3ed884=document['creat'+_0x4a2361(0x3d4)+_0x4a2361(0x2ab)]('butto'+'n');return _0x3ed884['type']='butto'+'n',_0x3ed884['class'+_0x4a2361(0x5d6)]=_0x4a2361(0x15f)+_0x4a2361(0x160),_0x3ed884[_0x4a2361(0x36c)+_0x4a2361(0x5c6)+'te'](_0x57632f['ndyVL'],_0x4a2361(0x658)+'h'),_0x3ed884[_0x4a2361(0x36c)+_0x4a2361(0x5c6)+'te']('aria-'+_0x4a2361(0x373)+'ed',String(!!_0x43ead0)),_0x3ed884[_0x4a2361(0x6da)+'ck']=_0x341ef0=>{var _0xaf7079=_0x4a2361;if(_0x349f04[_0xaf7079(0x12c)]('pjVYg',_0x349f04['eJKUt'])){var _0x3e3dde=_0x349f04[_0xaf7079(0x4c3)]['split']('|'),_0x47f846=0x1530+0x10*0x3b+0x18e*-0x10;while(!![]){switch(_0x3e3dde[_0x47f846++]){case'0':_0x2bb73a[_0xaf7079(0x1a1)+'Name']=_0xaf7079(0x680)+'esc';continue;case'1':_0x266331['appen'+_0xaf7079(0x5ce)+'d'](_0x4a049c);continue;case'2':var _0x4a049c=_0x2d122c[_0xaf7079(0x158)+_0xaf7079(0x3d4)+_0xaf7079(0x2ab)](_0xaf7079(0x57c));continue;case'3':_0x2bb73a['textC'+'onten'+'t']=_0x17ebe0;continue;case'4':for(var _0x1857b0 of _0x3aeb59)_0x4a049c['appen'+_0xaf7079(0x5ce)+'d'](_0x1857b0);continue;case'5':_0x4a049c[_0xaf7079(0x4db)+'dChil'+'d'](_0x2bb73a);continue;case'6':_0x4a049c[_0xaf7079(0x1a1)+'Name']='sk-mb'+'ody';continue;case'7':var _0x2bb73a=_0x314c72['creat'+'eElem'+_0xaf7079(0x2ab)](_0xaf7079(0x57c));continue;}break;}}else{_0x341ef0[_0xaf7079(0x4ac)+_0xaf7079(0x4f0)+'ation']();var _0x3bc360=_0x3ed884[_0xaf7079(0x3c3)+_0xaf7079(0x5c6)+'te']('aria-'+_0xaf7079(0x373)+'ed')!==_0xaf7079(0x290);_0x3ed884[_0xaf7079(0x36c)+_0xaf7079(0x5c6)+'te'](_0x349f04['LQYvc'],_0x349f04[_0xaf7079(0x248)](String,_0x3bc360)),_0x5777cf(_0x3bc360);}},_0x3ed884;}function _0x2224a0(_0x131c15,_0x5692c8,_0x4cf509,_0x137f4c,_0x25fa4e){var _0x351f0d=_0x1306cc,_0x537165={'mzEbk':function(_0x4acc7b,_0x2d380c){return _0x4acc7b+_0x2d380c;},'wBcFB':function(_0x27d5e7,_0x312a28){return _0x27d5e7*_0x312a28;}},_0x46131d=document['creat'+_0x351f0d(0x3d4)+_0x351f0d(0x2ab)](_0x351f0d(0x57c));_0x46131d[_0x351f0d(0x1a1)+_0x351f0d(0x5d6)]=_0x57632f[_0x351f0d(0x339)];var _0x28722b=document[_0x351f0d(0x158)+_0x351f0d(0x3d4)+_0x351f0d(0x2ab)](_0x57632f['rQxCr']);_0x28722b['type']=_0x351f0d(0x205),_0x28722b[_0x351f0d(0x1a1)+_0x351f0d(0x5d6)]=_0x351f0d(0x3f6)+_0x351f0d(0x2be),_0x28722b[_0x351f0d(0x147)]=_0x5692c8,_0x28722b[_0x351f0d(0x2c4)]=_0x4cf509,_0x28722b[_0x351f0d(0x6ea)]=_0x137f4c,_0x28722b[_0x351f0d(0x3cb)]=_0x131c15;var _0x1e1abd=document[_0x351f0d(0x158)+_0x351f0d(0x3d4)+_0x351f0d(0x2ab)]('span');_0x1e1abd[_0x351f0d(0x1a1)+_0x351f0d(0x5d6)]='sk-va'+'l',_0x1e1abd[_0x351f0d(0x5af)+'onten'+'t']=_0x57632f['kMKIh'](String,_0x131c15);var _0x3af21f=()=>{var _0xfd2785=_0x351f0d;_0x1e1abd[_0xfd2785(0x5af)+_0xfd2785(0x4fc)+'t']=String(_0x28722b[_0xfd2785(0x3cb)]),_0x46131d[_0xfd2785(0x1a9)]['setPr'+'opert'+'y']('--p',_0x537165['mzEbk'](_0x537165[_0xfd2785(0x259)]((_0x28722b[_0xfd2785(0x3cb)]-_0x5692c8)/(_0x4cf509-_0x5692c8),-0x807*-0x3+-0x13d8+-0x3d9),'%'));};return _0x28722b[_0x351f0d(0x5f0)+'ut']=()=>{var _0x486a3d=_0x351f0d;_0x486a3d(0x3ce)!==_0x486a3d(0x529)?(_0x3af21f(),_0x25fa4e(Number(_0x28722b['value']))):(_0x21394b['preve'+_0x486a3d(0x32e)+_0x486a3d(0x385)](),_0x503fd2());},_0x3af21f(),_0x46131d[_0x351f0d(0x4db)+'d'](_0x28722b,_0x1e1abd),_0x46131d;}function _0xb9c323(_0x19a0e1,_0x194749){var _0x167b3c=_0x1306cc,_0x41027b={'MYncV':_0x167b3c(0x526)+'n'};if(_0x167b3c(0x142)!==_0x57632f['XgYEH']){var _0x3857ce=_0x582af4['creat'+_0x167b3c(0x3d4)+_0x167b3c(0x2ab)](_0x167b3c(0x699)+'n');return _0x3857ce['type']='butto'+'n',_0x3857ce[_0x167b3c(0x1a1)+'Name']=_0x41027b[_0x167b3c(0x12b)],_0x3857ce[_0x167b3c(0x5af)+_0x167b3c(0x4fc)+'t']=_0x3cdb78,_0x3857ce['oncli'+'ck']=_0x10ad05=>{var _0xe30a21=_0x167b3c;_0x10ad05[_0xe30a21(0x4ac)+'ropag'+_0xe30a21(0x1f7)](),_0x117116();},_0x3857ce;}else{var _0x9da54=(_0x167b3c(0x3c1)+_0x167b3c(0x640)+'3')[_0x167b3c(0x322)]('|'),_0x340215=-0x3*0x570+-0x10*-0x13+-0x1*-0xf20;while(!![]){switch(_0x9da54[_0x340215++]){case'0':_0x8b6cdd['value']=/^#[0-9a-f]{6}$/i['test'](_0x19a0e1)?_0x19a0e1:'#ff6b'+'9d';continue;case'1':_0x8b6cdd[_0x167b3c(0x6f6)]=_0x167b3c(0x36b);continue;case'2':var _0x8b6cdd=document['creat'+'eElem'+_0x167b3c(0x2ab)](_0x167b3c(0x22d));continue;case'3':return _0x8b6cdd;case'4':_0x8b6cdd[_0x167b3c(0x5f0)+'ut']=()=>_0x194749(_0x8b6cdd[_0x167b3c(0x3cb)]);continue;case'5':_0x8b6cdd['class'+'Name']=_0x167b3c(0x3a6)+_0x167b3c(0x39b);continue;}break;}}}function _0x7c76(_0x5e32f0,_0x4ef0fa,_0x4fdedb){var _0x30925f=_0x1306cc,_0x4647f6=document['creat'+_0x30925f(0x3d4)+'ent']('selec'+'t');_0x4647f6['class'+'Name']='sk-fi'+_0x30925f(0x32d);for(var [_0x5cb392,_0x272c64]of _0x4ef0fa){var _0x3f8c32=document['creat'+'eElem'+_0x30925f(0x2ab)](_0x30925f(0x336)+'n');_0x3f8c32[_0x30925f(0x3cb)]=_0x5cb392,_0x3f8c32['textC'+_0x30925f(0x4fc)+'t']=_0x272c64,_0x4647f6[_0x30925f(0x4db)+'dChil'+'d'](_0x3f8c32);}return _0x4647f6[_0x30925f(0x3cb)]=_0x5e32f0,_0x4647f6[_0x30925f(0x4ad)+_0x30925f(0x23d)]=()=>_0x4fdedb(_0x4647f6[_0x30925f(0x3cb)]),_0x4647f6;}function _0x545bff(_0x3a2e2c,_0x592edc){var _0x51b9d2=_0x1306cc,_0x5e1add={'oDpsd':function(_0x2e8a2b,_0x32f4c0){var _0x458182=_0x1b49;return _0x1c8f09[_0x458182(0x234)](_0x2e8a2b,_0x32f4c0);},'qprpE':_0x51b9d2(0x53a)+'255,1'+'07,15'+'7,0.3'+'5)','UhfQh':_0x51b9d2(0x228)+'e','HNjIo':_0x1c8f09[_0x51b9d2(0x235)],'jjNsU':function(_0x2633af,_0x2547f7){return _0x2633af*_0x2547f7;},'cDNDb':function(_0x389f24,_0x5a599f){return _0x389f24+_0x5a599f;},'xALXb':function(_0x491de6,_0x4cfc50){return _0x491de6*_0x4cfc50;},'lysUh':'#fff','ibojp':'rgba('+_0x51b9d2(0x26e)+'35,24'+_0x51b9d2(0x139)+'5)','vkrmX':function(_0x359550,_0x2c1e42){return _0x359550/_0x2c1e42;},'xRNCe':function(_0x38530a,_0x265d7a){return _0x38530a/_0x265d7a;}},_0x326e2b=document[_0x51b9d2(0x158)+_0x51b9d2(0x3d4)+'ent'](_0x1c8f09['oozPr']);return _0x326e2b[_0x51b9d2(0x6f6)]='butto'+'n',_0x326e2b['class'+'Name']=_0x51b9d2(0x526)+'n',_0x326e2b[_0x51b9d2(0x5af)+_0x51b9d2(0x4fc)+'t']=_0x3a2e2c,_0x326e2b[_0x51b9d2(0x6da)+'ck']=_0x381671=>{var _0x354c89=_0x51b9d2;if(_0x1c8f09[_0x354c89(0x3e8)]===_0x1c8f09[_0x354c89(0x3e8)])_0x381671[_0x354c89(0x4ac)+_0x354c89(0x4f0)+_0x354c89(0x1f7)](),_0x592edc();else{var _0x570430=_0x258209[_0x354c89(0x194)](_0x110829);_0x27f431[_0x354c89(0x2cb)](),_0x31be63[_0x354c89(0x688)+_0x354c89(0x64f)]();if(_0x1eb8a0['round'+'Rect'])_0x2ee5fd[_0x354c89(0x5df)+'Rect'](_0x40a87a,_0x2776d3,_0x9be3cb,_0x1cf3f5,_0x5e1add['oDpsd'](0x45*0x25+0x9f6+-0x13e8,_0x27f187));else _0x1c2362['rect'](_0x51c484,_0x3ea281,_0x370efb,_0x1fab92);_0x6a49ed[_0x354c89(0x1e5)+_0x354c89(0x3b5)]=_0x570430?_0x354c89(0x53a)+_0x354c89(0x155)+'07,15'+_0x354c89(0x6aa)+'5)':_0x354c89(0x53a)+'22,8,'+'16,0.'+'7)',_0x5f24b0[_0x354c89(0x4f6)](),_0x58f2c1[_0x354c89(0x5fb)+'idth']=0x3c7*-0x3+-0x8*-0x112+0x2c6,_0x2f880b['strok'+'eStyl'+'e']=_0x570430?_0x4a855a:_0x5e1add['qprpE'],_0x303058[_0x354c89(0x3c8)+'e'](),_0x570430&&(_0x348b6c['shado'+_0x354c89(0x49f)+'r']=_0x2906d9,_0x45e665['shado'+_0x354c89(0x143)]=-0x1*0xad+0x3c5*-0x1+0x480,_0x5df83d[_0x354c89(0x4f6)](),_0x1357c3[_0x354c89(0x662)+'wBlur']=-0x2c4*-0x6+0x23d4+-0x346c),_0x1a016e[_0x354c89(0x1e5)+_0x354c89(0x3b5)]=_0x570430?_0x354c89(0x38f):_0x354c89(0x53a)+'255,2'+_0x354c89(0x678)+_0x354c89(0x51a)+')',_0x1eda84[_0x354c89(0x6a2)+_0x354c89(0x5b7)]='cente'+'r',_0x4c28d8[_0x354c89(0x4b6)+_0x354c89(0x1ed)+'ne']=_0x5e1add[_0x354c89(0x6b0)],_0x3268b8[_0x354c89(0x421)]=_0x5e1add[_0x354c89(0x173)]+_0x3f5b02['round']((0x14b7*-0x1+-0x1b50+0x3013)*_0x28b65a)+(_0x354c89(0x1b6)+_0x354c89(0x45d)+_0x354c89(0x4a0)+_0x354c89(0x56c)+_0x354c89(0x600)+_0x354c89(0x6a0)+_0x354c89(0x61e)+'if'),_0x91c5a7['fillT'+'ext'](_0x3770c6,_0x258d4e+_0x334807/(-0x1664+-0xcf2+0xc*0x2f2),_0x136412+_0x8daf69/(-0x912*-0x3+-0xd98+-0x367*0x4)-(_0x14012e?_0x5e1add['jjNsU'](0x8f*-0x41+0x6*-0x4d1+0x2d6*0x17,_0x353a71):-0x1*-0x2543+0x20d1+0x6*-0xbae)),_0xfd2e27&&(_0x26ff20[_0x354c89(0x421)]=_0x5e1add['cDNDb'](_0x354c89(0x217)+_0x2d7c6a['round'](_0x5e1add[_0x354c89(0x46e)](-0x82*0x3b+-0x1b32+0x3931,_0x429833)),_0x354c89(0x1b6)+_0x354c89(0x45d)+'-seri'+_0x354c89(0x56c)+'tem-u'+_0x354c89(0x6a0)+'s-ser'+'if'),_0x56651b[_0x354c89(0x1e5)+'tyle']=_0x570430?_0x5e1add['lysUh']:_0x5e1add['ibojp'],_0x42e6e3[_0x354c89(0x25a)+_0x354c89(0x2f9)](_0x3372c9,_0x5a6b71+_0x5e1add[_0x354c89(0x34f)](_0x35b6e3,-0x24e6+0x14f*-0x17+0x4301*0x1),_0x5e1add[_0x354c89(0x59f)](_0x5c22f2+_0x5e1add['xRNCe'](_0x26d83e,0x649+0x1ea4+-0x24eb),(-0x632+0x1819*-0x1+0x455*0x7)*_0x50c60c))),_0x294607['resto'+'re']();}},_0x326e2b;}function _0x2db59e(_0x58c3f8,_0xe586ab,_0x381792){var _0x295c96=_0x1306cc,_0x20e8f2=document[_0x295c96(0x158)+'eElem'+'ent'](_0x295c96(0x57c));_0x20e8f2['class'+_0x295c96(0x5d6)]=_0x295c96(0x45a)+'l';var _0x215e1e=document[_0x295c96(0x158)+_0x295c96(0x3d4)+_0x295c96(0x2ab)](_0x295c96(0x60e));_0x215e1e[_0x295c96(0x1a1)+'Name']=_0x57632f[_0x295c96(0x3d3)],_0x215e1e[_0x295c96(0x5af)+_0x295c96(0x4fc)+'t']=_0x58c3f8;if(_0xe586ab){var _0x1b24ca=document[_0x295c96(0x158)+_0x295c96(0x3d4)+_0x295c96(0x2ab)](_0x295c96(0x1b0));_0x1b24ca['class'+'Name']=_0x295c96(0x17a)+'nt',_0x1b24ca[_0x295c96(0x5af)+_0x295c96(0x4fc)+'t']=_0xe586ab,_0x215e1e['appen'+_0x295c96(0x5ce)+'d'](_0x1b24ca);}return _0x20e8f2[_0x295c96(0x4db)+'d'](_0x215e1e,_0x381792),_0x20e8f2;}function _0x1640cb(_0x3e87e5,_0x5a44f5){var _0x27b9b9=_0x1306cc,_0x3fe943=document[_0x27b9b9(0x158)+_0x27b9b9(0x3d4)+'ent']('div');return _0x3fe943[_0x27b9b9(0x1a1)+'Name']=_0x1c8f09['tWnpm'](_0x27b9b9(0x14f)+'te',_0x5a44f5?_0x1c8f09[_0x27b9b9(0x185)]:''),_0x3fe943['textC'+'onten'+'t']=_0x3e87e5,_0x3fe943;}function _0x218d47(_0x220eac,_0x531656,_0x304613,_0x21de6e,_0x5b888b){var _0xffdae0=_0x1306cc;if(_0x1c8f09[_0xffdae0(0x39e)](_0x1c8f09[_0xffdae0(0x6d0)],_0xffdae0(0x4a1))){var _0x4bca22=document[_0xffdae0(0x158)+_0xffdae0(0x3d4)+'ent'](_0xffdae0(0x57c));_0x4bca22[_0xffdae0(0x1a1)+_0xffdae0(0x5d6)]=_0xffdae0(0x5d0)+'rd'+(_0x304613?_0x1c8f09[_0xffdae0(0x470)]:'');var _0x784063=document['creat'+'eElem'+_0xffdae0(0x2ab)](_0x1c8f09['UfwFL']);_0x784063[_0xffdae0(0x1a1)+_0xffdae0(0x5d6)]=_0xffdae0(0x5d0)+_0xffdae0(0x609)+'ad';var _0x27326a=document[_0xffdae0(0x158)+_0xffdae0(0x3d4)+_0xffdae0(0x2ab)](_0x1c8f09[_0xffdae0(0x65a)]);_0x27326a[_0xffdae0(0x1a1)+'Name']=_0x1c8f09[_0xffdae0(0x6d2)];var _0x22fd9f=document['creat'+_0xffdae0(0x3d4)+_0xffdae0(0x2ab)](_0x1c8f09[_0xffdae0(0x1cf)]);_0x22fd9f[_0xffdae0(0x5af)+'onten'+'t']=_0x220eac,_0x27326a[_0xffdae0(0x4db)+_0xffdae0(0x5ce)+'d'](_0x22fd9f);if(_0x21de6e){var _0x4f48c8=_0x59043d(_0x304613,_0x4a586f=>{var _0xf8d5b6=_0xffdae0;_0x4bca22['class'+_0xf8d5b6(0x25e)]['toggl'+'e']('on',_0x4a586f),_0x1c8f09['UfkQl'](_0x21de6e,_0x4a586f);});_0x784063['appen'+'d'](_0x27326a,_0x4f48c8);}else _0x784063[_0xffdae0(0x4db)+'dChil'+'d'](_0x27326a);_0x4bca22['appen'+_0xffdae0(0x5ce)+'d'](_0x784063);if(_0x5b888b&&_0x5b888b[_0xffdae0(0x48a)+'h']){if(_0x1c8f09['jHYEB']===_0x1c8f09[_0xffdae0(0x2f6)]){var _0x539b8e=document[_0xffdae0(0x158)+_0xffdae0(0x3d4)+_0xffdae0(0x2ab)](_0x1c8f09['UfwFL']);_0x539b8e[_0xffdae0(0x1a1)+'Name']=_0xffdae0(0x45f)+'ody';var _0x50c17c=document[_0xffdae0(0x158)+_0xffdae0(0x3d4)+'ent'](_0x1c8f09[_0xffdae0(0x65a)]);_0x50c17c['class'+'Name']=_0x1c8f09[_0xffdae0(0x258)],_0x50c17c['textC'+'onten'+'t']=_0x531656,_0x539b8e[_0xffdae0(0x4db)+'dChil'+'d'](_0x50c17c);for(var _0x35a3f4 of _0x5b888b)_0x539b8e['appen'+_0xffdae0(0x5ce)+'d'](_0x35a3f4);_0x4bca22['appen'+'dChil'+'d'](_0x539b8e);}else return 0x9*-0xa1+0x1815+-0x12*0x106;}return _0x4bca22;}else{_0xc00760['push'](_0x275a47[_0xffdae0(0x58c)]());if(_0x42db04[_0xffdae0(0x48a)+'h']>-0x3*0x693+0x3*0x133+0x209*0x8)_0x571097[_0xffdae0(0x3bb)]();}}var _0x3d48d9=[{'id':_0x1306cc(0x6e7)+'t','label':'Comba'+'t'},{'id':_0x1306cc(0x5d8),'label':_0x1306cc(0x595)},{'id':_0x1306cc(0x2d0)+'l','label':'Visua'+'l'},{'id':_0x57632f[_0x1306cc(0x5a9)],'label':_0x1306cc(0x2e8)},{'id':_0x1306cc(0x522),'label':_0x1306cc(0x3e2)+'y'}];function _0x15ecff(){var _0x4af072=_0x1306cc,_0x50090f=_0x332b4c[_0x4af072(0x660)+_0x4af072(0x5f8)]?'SAFE\x20'+'MODE\x20'+'—\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+_0x4af072(0x1fc)+_0x4af072(0x56d)+_0x4af072(0x541)+_0x4af072(0x6c6)+')':_0x332b4c[_0x4af072(0x528)]?_0x1c8f09[_0x4af072(0x4e0)](_0x1c8f09[_0x4af072(0x4e0)](_0x1c8f09['VroEe'],_0x332b4c[_0x4af072(0x3db)+'Total']?_0x1c8f09['MxBic'](_0x332b4c['hooks'+'Ok']+'/',_0x332b4c['hooks'+'Total'])+_0x1c8f09['ECaBf']:_0x1c8f09['TEnbb'])+_0x1c8f09[_0x4af072(0x14b)]+(_0x332b4c[_0x4af072(0x16d)+'oaded']?'loade'+'d':_0x1c8f09[_0x4af072(0x4cf)])+(_0x4af072(0x233)+_0x4af072(0x4ba)+'\x20'),_0x332b4c[_0x4af072(0x2ee)+_0x4af072(0x34a)]?'held':_0x4af072(0x52a))+_0x1c8f09[_0x4af072(0x492)]+(_0x332b4c[_0x4af072(0x165)+_0x4af072(0x17d)]?_0x1c8f09['ZEKEd']:_0x4af072(0x52a)):_0x1c8f09[_0x4af072(0x5a5)];if(_0x332b4c['lastE'+'rror'])_0x50090f+='\x20|\x20ER'+_0x4af072(0x6f3)+_0x332b4c[_0x4af072(0x6cf)+_0x4af072(0x212)];return _0x218d47(_0x1c8f09[_0x4af072(0x2de)],_0x50090f,_0x332b4c[_0x4af072(0x528)],null,[_0x1c8f09['mHkSn'](_0x2db59e,'240\x20F'+_0x4af072(0x61c)+_0x4af072(0x494),_0x1c8f09['GgImX'],_0x545bff(_0x1c8f09['ZdtEK'],()=>{var _0x54c055=_0x4af072;try{if(_0x530b38)_0x530b38[_0x54c055(0x341)](_0x1c8f09['CivyJ'],_0x1c8f09[_0x54c055(0x141)],[-0x2*-0x1e6+0x5*-0x5d9+-0x3*-0x8cb]);}catch(_0x521c1e){}}))]);}function _0x2c70e5(_0x1ce35c){var _0x3418df=_0x1306cc,_0x22fef6={'xPOmb':function(_0x243600,_0x2ac9b8){return _0x243600!==_0x2ac9b8;},'HGAqb':_0x1c8f09['BDVcG'],'rouvF':function(_0xebb23,_0x384e5b,_0x2085c1){return _0x1c8f09['IYHmL'](_0xebb23,_0x384e5b,_0x2085c1);},'zYIib':function(_0x3b283e){return _0x3b283e();},'vplVh':function(_0x395d26,_0x4b9165){return _0x395d26===_0x4b9165;},'JZYsR':function(_0x5e7081,_0x536102){return _0x5e7081!==_0x536102;},'vYkRN':_0x1c8f09['PlGek'],'VRyrx':_0x3418df(0x1d5)+'2px\x20u'+'i-mon'+'ospac'+'e,mon'+'ospac'+'e','zYCsD':function(_0x4b2a44,_0x4bd7fd,_0x3b585){var _0x425c3d=_0x3418df;return _0x1c8f09[_0x425c3d(0x1bc)](_0x4b2a44,_0x4bd7fd,_0x3b585);},'JGPqQ':'SAKUR'+_0x3418df(0x630)+'R\x20v1.'+'1','PpPRQ':_0x3418df(0x412)+'9d','iTAIo':function(_0x55d6dc,_0x1f6b96){return _0x55d6dc(_0x1f6b96);},'foCHE':_0x1c8f09[_0x3418df(0x58e)],'xHziY':function(_0x35c773,_0x2d8e37,_0x2b21b2){return _0x35c773(_0x2d8e37,_0x2b21b2);},'rMztm':_0x3418df(0x53a)+_0x3418df(0x155)+'80,19'+_0x3418df(0x4be)+')','qlIOB':function(_0x3a0d3a){return _0x3a0d3a();},'Bzarm':'UqdHQ','Miaih':_0x3418df(0x2dc)+_0x3418df(0x5ea)+'3','ornjP':_0x3418df(0x653)+_0x3418df(0x373)+'ed','devoC':_0x1c8f09[_0x3418df(0x353)]};if(_0x1c8f09[_0x3418df(0x2cc)](_0x1c8f09['PIwAU'],_0x1c8f09[_0x3418df(0x1ba)])){var _0x295b7b={'SXmIC':function(_0x2398b6){var _0x2cd4ef=_0x3418df;return _0x1c8f09[_0x2cd4ef(0x5f1)](_0x2398b6);}};return[_0x1c8f09[_0x3418df(0x61f)](_0x27e5cd,'Adblo'+'ck',_0x3418df(0x308)+'\x20kour'+_0x3418df(0x6b3)+'\x20bann'+_0x3418df(0x3b4)+_0x3418df(0x5f3),_0x32b093['adblo'+'ck'],_0x3c5aa1=>{var _0x4ce0a6=_0x3418df;_0x3860fb[_0x4ce0a6(0x403)+'ck']=_0x3c5aa1,_0x295b7b[_0x4ce0a6(0x41d)](_0x50f467);},[_0x1e4df7('Takes'+'\x20effe'+_0x3418df(0x57d)+_0x3418df(0x2c2)+_0x3418df(0x6a9)+'en\x20to'+_0x3418df(0x280)+'.')])];}else{if(_0x1ce35c==='comba'+'t')return[_0x15ecff(),_0x218d47(_0x1c8f09[_0x3418df(0x38b)],_0x1c8f09[_0x3418df(0x267)],_0x354827['god'],_0x3c6ce2=>{var _0x4bd996=_0x3418df,_0x1a3d6d={'ZTDWf':'kour-'+'io_'};if(_0x22fef6[_0x4bd996(0x448)]('GfPCA',_0x22fef6[_0x4bd996(0x2ad)]))_0x354827[_0x4bd996(0x29c)]=_0x3c6ce2,_0x1e55ac(),_0x18d929(_0x4bd996(0x29c),_0x3c6ce2),_0x18d929('godDi'+'e',_0x3c6ce2);else{if(_0x1ede99[_0xd14f7c]['id']&&_0x4b9da8[_0x20aa06]['id'][_0x4bd996(0x166)+'Of'](_0x1a3d6d[_0x4bd996(0x187)])===-0xce3+-0xd3b+0x1a1e)_0x430536[_0x3d22f7][_0x4bd996(0x1a9)][_0x4bd996(0x266)+'ay']=_0x4bd996(0x52a);}},[]),_0x218d47('No\x20Re'+'coil',_0x3418df(0x481)+'\x20Reco'+_0x3418df(0x5c5)+_0x3418df(0x543)+_0x3418df(0x20b)+_0x3418df(0x320)+_0x3418df(0x338)+'il\x20sp'+_0x3418df(0x21a)+_0x3418df(0x409)+_0x3418df(0x347)+_0x3418df(0x6f2),_0x354827[_0x3418df(0x288)+_0x3418df(0x33f)],_0x41466f=>{var _0x4a0a52=_0x3418df;_0x354827[_0x4a0a52(0x288)+'oil']=_0x41466f,_0x1e55ac(),_0x22fef6[_0x4a0a52(0x27d)](_0x18d929,_0x4a0a52(0x288)+_0x4a0a52(0x33f),_0x41466f);},[]),_0x1c8f09[_0x3418df(0x61f)](_0x218d47,_0x3418df(0x18b)+_0x3418df(0x602),_0x1c8f09['kFNYd'],_0x354827[_0x3418df(0x5c3)+_0x3418df(0x271)],_0x33f088=>{var _0x38c0da=_0x3418df;_0x354827[_0x38c0da(0x5c3)+_0x38c0da(0x271)]=_0x33f088,_0x1e55ac();},[]),_0x1c8f09[_0x3418df(0x1c1)](_0x218d47,_0x3418df(0x66b)+_0x3418df(0x332)+_0x3418df(0x366)+']',_0x1c8f09[_0x3418df(0x579)],_0x354827[_0x3418df(0x422)+_0x3418df(0x5bb)],_0x49b399=>{var _0x52765e=_0x3418df;_0x354827['rapid'+_0x52765e(0x5bb)]=_0x49b399,_0x1e55ac();},[]),_0x218d47('Damag'+_0x3418df(0x6ab)+'P]','Overw'+'rites'+_0x3418df(0x20e)+'tideW'+_0x3418df(0x60d)+_0x3418df(0x2b4)+_0x3418df(0x484)+_0x3418df(0x250)+_0x3418df(0x24a)+_0x3418df(0x655)+'serve'+_0x3418df(0x694)+'idate'+'s.',_0x354827['damag'+'eExp'],_0x5eef6d=>{var _0x43c660=_0x3418df;_0x354827[_0x43c660(0x1cb)+'eExp']=_0x5eef6d,_0x22fef6[_0x43c660(0x284)](_0x1e55ac);},[_0x1c8f09[_0x3418df(0x203)](_0x2db59e,_0x3418df(0x19a)+_0x3418df(0x66d)+'ue',null,_0x2224a0(_0x354827[_0x3418df(0x1cb)+_0x3418df(0x47c)+'e'],-0x997+-0x3*0x63b+0x1c52,-0x7*0x27e+0x38b*-0x1+0x16f1,-0x1871+-0x19eb+0x3261,_0x1b3e3f=>{var _0x17dd6b=_0x3418df;if(_0x22fef6[_0x17dd6b(0x467)](_0x22fef6[_0x17dd6b(0x231)],_0x22fef6[_0x17dd6b(0x231)])){var _0x44a1f4=_0x54c5ef['devic'+'ePixe'+'lRati'+'o']||-0x21c7+-0x2516+-0xc1*-0x5e,_0x4bcdff=_0x8235c['inner'+_0x17dd6b(0x3fb)],_0x54c95d=_0x9c01db[_0x17dd6b(0x49c)+'Heigh'+'t'];if(_0x4bcdff===_0x881160['w']&&_0x22fef6[_0x17dd6b(0x47f)](_0x54c95d,_0x1b8a9d['h'])&&_0x44a1f4===_0x321cec[_0x17dd6b(0x4bd)])return;_0x3730ac['w']=_0x4bcdff,_0x45f93e['h']=_0x54c95d,_0x1b8950[_0x17dd6b(0x4bd)]=_0x44a1f4,_0x239a8d[_0x17dd6b(0x342)]=_0x57ea39['round'](_0x4bcdff*_0x44a1f4),_0x292cf9[_0x17dd6b(0x442)+'t']=_0xd33b37[_0x17dd6b(0x5df)](_0x54c95d*_0x44a1f4),_0x349208['setTr'+_0x17dd6b(0x28e)+'rm'](_0x44a1f4,-0x11e5+0x1d*0x18+0xf2d*0x1,0x43+0x8*-0x330+-0x47*-0x5b,_0x44a1f4,0x89f*-0x2+0x1e2a+-0xcec,-0x1e9*-0x2+-0x1277+0xea5);}else _0x354827[_0x17dd6b(0x1cb)+_0x17dd6b(0x47c)+'e']=_0x1b3e3f,_0x22fef6['zYIib'](_0x1e55ac);}))]),_0x1c8f09[_0x3418df(0x60b)](_0x218d47,_0x3418df(0x1bb)+'ite\x20A'+'mmo\x20['+'EXP]',_0x1c8f09['IeuRu'],_0x354827[_0x3418df(0x16a)+'moExp'],_0x416960=>{var _0x53cedf=_0x3418df,_0x2b5760={'HgXNc':_0x1c8f09[_0x53cedf(0x39c)]};if(_0x1c8f09[_0x53cedf(0x5a8)](_0x1c8f09['RuHHI'],_0x53cedf(0x432)))_0x354827['infAm'+'moExp']=_0x416960,_0x1e55ac();else try{_0xf7749a[_0x53cedf(0x57b)+'em'](_0x2b5760['HgXNc'],_0x17498a[_0x53cedf(0x1f6)+'gify'](_0x55d2d4));}catch(_0x146c40){}},[_0x1640cb(_0x3418df(0x659)+'loads'+_0x3418df(0x37a)+_0x3418df(0x247)+_0x3418df(0x224)+'he\x20de'+_0x3418df(0x47e)+'nt\x20ha'+'ppens'+_0x3418df(0x52f)+_0x3418df(0x49b)+'.')])];if(_0x1ce35c===_0x1c8f09[_0x3418df(0x5a1)]){if(_0x1c8f09[_0x3418df(0x65f)]!==_0x3418df(0x2af))return[_0x1c8f09[_0x3418df(0x2bb)](_0x218d47,_0x3418df(0x2c5),_0x3418df(0x333)+_0x3418df(0x31e)+_0x3418df(0x1af)+'\x20Move'+'ment\x20'+_0x3418df(0x577)+'\x20limi'+_0x3418df(0x44a)+_0x3418df(0x398)+'celer'+_0x3418df(0x1f7)+'.',_0x1c8f09['aXkea'](_0x354827['speed'+'Pct'],-0x70*-0x28+0x5*0x57e+-0x8ea*0x5),null,[_0x1c8f09[_0x3418df(0x563)](_0x2db59e,_0x1c8f09[_0x3418df(0x226)],'100\x20='+_0x3418df(0x293)+'ult',_0x1c8f09[_0x3418df(0x60b)](_0x2224a0,_0x354827['speed'+_0x3418df(0x113)],0x1aa2+-0x5d0+-0x14a0,0x9b1*-0x4+-0x697+-0x1*-0x2e87,0x525+0xe98+-0x13b8,_0x3c2e50=>{var _0x1c4ce3=_0x3418df;_0x354827[_0x1c4ce3(0x577)+'Pct']=_0x3c2e50,_0x1e55ac();}))]),_0x218d47(_0x3418df(0x213)+'/\x20Gra'+_0x3418df(0x269),'Scale'+_0x3418df(0x1bf)+'ement'+'.jump'+_0x3418df(0x4d3)+_0x3418df(0x3d0)+'both\x20'+_0x3418df(0x125)+_0x3418df(0x2df)+_0x3418df(0x31b),_0x354827['jumpP'+'ct']!==0x1c9*-0x9+-0x1a22+-0x2a97*-0x1||_0x1c8f09['JQwOC'](_0x354827[_0x3418df(0x125)+_0x3418df(0x19d)],0x1bed+-0x1944+-0x245*0x1),null,[_0x1c8f09['ZDQTs'](_0x2db59e,_0x3418df(0x213)+'%',null,_0x2224a0(_0x354827[_0x3418df(0x42b)+'ct'],0xb48+-0x30*-0x4d+0x6*-0x441,-0x1b85+0x744+0x156d,0x24f4*0x1+-0x1ab+-0x94*0x3d,_0x224b0e=>{var _0x33e15b=_0x3418df;_0x354827[_0x33e15b(0x42b)+'ct']=_0x224b0e,_0x1e55ac();})),_0x2db59e('Gravi'+'ty\x20%','lower'+'\x20=\x20fl'+'oaty',_0x1c8f09['MFvDW'](_0x2224a0,_0x354827[_0x3418df(0x125)+_0x3418df(0x19d)],0xfff+0x1*-0x17c3+0x2*0x3e7,-0x18*0x10d+-0x1*0x1ada+-0x7b*-0x6e,-0xe54+0x24a1*-0x1+0x32fa,_0x40a8c2=>{var _0xd46460=_0x3418df;_0x354827[_0xd46460(0x125)+_0xd46460(0x19d)]=_0x40a8c2,_0x1e55ac();}))]),_0x218d47(_0x3418df(0x46a)+'-hop',_0x3418df(0x40c)+_0x3418df(0x1bf)+'ement'+_0x3418df(0x455)+_0x3418df(0x11e)+'ime\x20s'+_0x3418df(0x320)+_0x3418df(0x555)+_0x3418df(0x5c4)+_0x3418df(0x68c)+_0x3418df(0x604)+_0x3418df(0x67d)+_0x3418df(0x298),_0x354827['bhop'],_0x4b739d=>{_0x354827['bhop']=_0x4b739d,_0x1e55ac();},[])];else _0x16a7d9[_0x3418df(0x662)+'wColo'+'r']=_0x59324c,_0x43b9f8[_0x3418df(0x662)+_0x3418df(0x143)]=0x1e8f*-0x1+0x610+0x4e9*0x5,_0x1987cb['fill'](),_0x4649bc[_0x3418df(0x662)+_0x3418df(0x143)]=0x7*-0x529+0x16e*0x7+0x1a1d;}if(_0x1ce35c==='visua'+'l')return[_0x218d47(_0x3418df(0x677)+_0x3418df(0x3ea),_0x3418df(0x169)+_0x3418df(0x3d6)+'/RMB\x20'+_0x3418df(0x676)+_0x3418df(0x596)+_0x3418df(0x394)+'.',_0x354827[_0x3418df(0x195)+'rokes'],_0x7fbace=>{var _0x12c79e=_0x3418df;if(_0x12c79e(0x6a3)!==_0x12c79e(0x6a3)){_0x5871c5[_0x12c79e(0x2cb)](),_0x1f011a[_0x12c79e(0x421)]=_0x22fef6[_0x12c79e(0x1db)],_0x56b97e['textA'+'lign']=_0x12c79e(0x48f),_0x3f6558['textB'+_0x12c79e(0x1ed)+'ne']=_0x12c79e(0x437);var _0x3bbf9a=-0x384+-0x13b+0x4eb,_0x28e187=0x174*-0x12+-0x3*-0x983+-0x255,_0x541cdc=(_0x2b2f9e,_0x3fa218)=>{var _0x38e60b=_0x12c79e;_0x3532ab['fillS'+_0x38e60b(0x3b5)]=_0x3fa218||_0x38e60b(0x53a)+'255,2'+_0x38e60b(0x678)+'0,0.7'+'5)',_0x528b65[_0x38e60b(0x25a)+'ext'](_0x2b2f9e,_0x28e187,_0x3bbf9a),_0x3bbf9a+=-0x10e*-0x6+-0x2034+0x19f0;};_0x22fef6['zYCsD'](_0x541cdc,_0x22fef6['JGPqQ'],_0x22fef6[_0x12c79e(0x13e)]);if(_0x297ddc['fps'])_0x22fef6[_0x12c79e(0x4ee)](_0x541cdc,_0x5d17c4+_0x22fef6['foCHE']);if(!_0x42832d['gameL'+_0x12c79e(0x137)])_0x22fef6['xHziY'](_0x541cdc,_0x12c79e(0x521)+'ng\x20fo'+'r\x20gam'+'e…',_0x22fef6['rMztm']);_0x552bce[_0x12c79e(0x1a3)+'re']();}else _0x354827['keyst'+'rokes']=_0x7fbace,_0x1c8f09[_0x12c79e(0x514)](_0x1e55ac);},[_0x1c8f09[_0x3418df(0x5c2)](_0x2db59e,_0x3418df(0x28c)+_0x3418df(0x26f),null,_0x1c8f09[_0x3418df(0x3a3)](_0x7c76,_0x354827[_0x3418df(0x261)],[['bl',_0x1c8f09['uVMvQ']],['br',_0x3418df(0x291)+_0x3418df(0x3aa)+'ht'],['ml',_0x1c8f09['cFvSq']]],_0xb5ddc0=>{var _0x5e8f39=_0x3418df;_0x354827[_0x5e8f39(0x261)]=_0xb5ddc0,_0x22fef6[_0x5e8f39(0x304)](_0x1e55ac);})),_0x1c8f09['PbbAa'](_0x2db59e,_0x3418df(0x62d),null,_0x2224a0(_0x354827['ksSca'+'le'],0x4ac+0x118c+0x3*-0x768+0.6,-0x1*0x1ed5+-0x1761*0x1+-0x3637*-0x1+0.6000000000000001,-0x1*0xcf1+-0xa*-0x2ce+-0xf1b+0.05,_0x5db5d6=>{var _0x111b37=_0x3418df;if(_0x1c8f09[_0x111b37(0x1c9)]!==_0x1c8f09['vopWu'])_0x354827[_0x111b37(0x1d9)+'le']=_0x5db5d6,_0x1c8f09['dyNca'](_0x1e55ac);else{var _0xb689a9=_0x31fafb&&(_0x2fd29d[_0x111b37(0x52e)+'ge']||_0x3c683a[_0x111b37(0x328)]&&_0x96b78a[_0x111b37(0x328)]['messa'+'ge'])||_0x111b37(0x1b1)+'wn';if(_0x5f0c76&&_0x2e5c7a[_0x111b37(0x115)+_0x111b37(0x286)])_0xb689a9+=_0x111b37(0x3a4)+_0x2466aa(_0xfbe19b['filen'+_0x111b37(0x286)])[_0x111b37(0x322)]('/')['pop']()+':'+(_0x1260d2[_0x111b37(0x3f8)+'o']||'?');_0x7dfe6d[_0x111b37(0x6cf)+_0x111b37(0x212)]=_0x238e6a(_0xb689a9)[_0x111b37(0x1ab)](-0x4cd*0x7+0x1*-0x176e+0x3909,0x209+-0x20c5+0xdf*0x24);}})),_0x2db59e('CPS\x20r'+'eadou'+'t',null,_0x59043d(_0x354827[_0x3418df(0x1c4)],_0x239b55=>{var _0xecfadd=_0x3418df;_0x354827[_0xecfadd(0x1c4)]=_0x239b55,_0x22fef6[_0xecfadd(0x304)](_0x1e55ac);}))]),_0x218d47('Cross'+_0x3418df(0x379),_0x3418df(0x294)+'m\x20cen'+'ter\x20c'+'rossh'+'air.',_0x354827[_0x3418df(0x572)+_0x3418df(0x379)],_0x33005f=>{var _0x1d61e7=_0x3418df;_0x354827[_0x1d61e7(0x572)+_0x1d61e7(0x379)]=_0x33005f,_0x1c8f09['sAkTj'](_0x1e55ac);},[_0x2db59e('Size',null,_0x2224a0(_0x354827['chSiz'+'e'],0x481+-0xd1+-0x3b0+0.5,0xb6b+0x2200+-0x19*0x1d1+0.5,0x9*0x2fd+0x87*-0x4a+0x3*0x40b+0.1,_0x5e034f=>{var _0x24db43=_0x3418df;_0x354827[_0x24db43(0x216)+'e']=_0x5e034f,_0x1e55ac();})),_0x1c8f09['KNkBv'](_0x2db59e,_0x3418df(0x61b),null,_0xb9c323(_0x354827[_0x3418df(0x64e)+'or'],_0x367ce4=>{var _0x53ca30=_0x3418df;if(_0x1c8f09[_0x53ca30(0x2cc)](_0x1c8f09['sBwhv'],_0x1c8f09[_0x53ca30(0x44f)]))_0x354827[_0x53ca30(0x64e)+'or']=_0x367ce4,_0x1e55ac();else{var _0x29198f={'nlkuP':function(_0x3a7aeb,_0x447a90){return _0x3a7aeb(_0x447a90);}},_0x4fbed1=_0x37a821(_0x3eb574,_0x3fcc51=>{var _0x1d5b40=_0x53ca30;_0x5d69a7['class'+_0x1d5b40(0x25e)]['toggl'+'e']('on',_0x3fcc51),_0x29198f['nlkuP'](_0x46774d,_0x3fcc51);});_0x5284fb[_0x53ca30(0x4db)+'d'](_0x5b0599,_0x4fbed1);}}))]),_0x1c8f09[_0x3418df(0x245)](_0x218d47,_0x1c8f09[_0x3418df(0x2d5)],_0x1c8f09['MNidY'],_0x354827[_0x3418df(0x307)],null,[_0x1c8f09[_0x3418df(0x6ad)](_0x2db59e,'FPS\x20c'+_0x3418df(0x4ae)+'r',null,_0x59043d(_0x354827[_0x3418df(0x307)],_0x2620c7=>{var _0x23b5d9=_0x3418df;_0x354827['fps']=_0x2620c7,_0x1c8f09[_0x23b5d9(0x4ec)](_0x1e55ac);})),_0x1640cb('No\x20en'+'emy\x20c'+_0x3418df(0x4ae)+_0x3418df(0x5a4)+_0x3418df(0x43c)+'ild\x20h'+_0x3418df(0x220)+_0x3418df(0x211)+'isibl'+_0x3418df(0x182)+'ers\x20t'+_0x3418df(0x150)+'gybac'+'k\x20on.')])];if(_0x1c8f09[_0x3418df(0x535)](_0x1ce35c,_0x1c8f09[_0x3418df(0x407)]))return[_0x218d47(_0x1c8f09['FTiaJ'],_0x3418df(0x308)+'\x20kour'+_0x3418df(0x6b3)+_0x3418df(0x340)+'er\x20sl'+'ots.',_0x354827[_0x3418df(0x403)+'ck'],_0x75b632=>{var _0x7d6fb8=_0x3418df;_0x22fef6[_0x7d6fb8(0x47f)]('PWLxa',_0x22fef6['Bzarm'])?(_0x1cd29f=new _0x41e5c3(),_0x3d7ae0['set'](_0x227447,_0x4d0b59)):(_0x354827['adblo'+'ck']=_0x75b632,_0x22fef6[_0x7d6fb8(0x304)](_0x1e55ac));},[_0x1c8f09[_0x3418df(0x642)](_0x1640cb,'Takes'+'\x20effe'+_0x3418df(0x57d)+_0x3418df(0x2c2)+'ad\x20wh'+_0x3418df(0x46b)+'ggled'+'.')])];return[_0x218d47('Safe\x20'+'Mode\x20'+'(over'+_0x3418df(0x1a8)+_0x3418df(0x157),_0x1c8f09[_0x3418df(0x5da)],_0x354827[_0x3418df(0x660)+_0x3418df(0x5f8)],_0x40d855=>{var _0x4e5900=_0x3418df;_0x354827[_0x4e5900(0x660)+_0x4e5900(0x5f8)]=_0x40d855,_0x1e55ac(),location[_0x4e5900(0x4a3)+'d']();},[_0x1640cb(_0x3418df(0x5eb)+_0x3418df(0x285)+'\x20relo'+_0x3418df(0x621)+_0x3418df(0x14c)+'ches\x20'+'load\x20'+_0x3418df(0x629)+'fe\x20mo'+_0x3418df(0x36d)+_0x3418df(0x450)+'eeze\x20'+_0x3418df(0x501)+_0x3418df(0x414)+_0x3418df(0x1b4)+'\x20—\x20te'+'ll\x20me'+'\x20the\x20'+_0x3418df(0x3db)+_0x3418df(0x25d)+'ied\x20c'+_0x3418df(0x129))]),_0x1c8f09['JjHkt'](_0x218d47,'Hook\x20'+_0x3418df(0x681)+'switc'+'hes',_0x1c8f09['eBIiD'],_0x354827['hookG'+'od']||_0x354827[_0x3418df(0x4a6)+_0x3418df(0x13d)]||_0x354827[_0x3418df(0x614)+'oReco'+'il']||_0x354827[_0x3418df(0x4c9)+'aptur'+'e'],_0x232152=>{var _0x315dd8=_0x3418df;if('UIHNG'!==_0x315dd8(0x2a2)){var _0x1ae0a7=_0x22fef6[_0x315dd8(0x65b)]['split']('|'),_0x4bf515=-0x1fde+0x248+0x1d96;while(!![]){switch(_0x1ae0a7[_0x4bf515++]){case'0':_0x354827[_0x315dd8(0x4c9)+_0x315dd8(0x489)+'e']=_0x232152;continue;case'1':_0x354827['hookG'+'od']=_0x232152;continue;case'2':_0x22fef6[_0x315dd8(0x304)](_0x1e55ac);continue;case'3':location[_0x315dd8(0x4a3)+'d']();continue;case'4':_0x354827[_0x315dd8(0x4a6)+_0x315dd8(0x13d)]=_0x232152;continue;case'5':_0x354827['hookN'+_0x315dd8(0x335)+'il']=_0x232152;continue;}break;}}else _0x3a8210[_0x315dd8(0x29c)]=_0xcfe05a,_0x14d0a3(),_0x53b825(_0x315dd8(0x29c),_0x5ce5ba),_0x2f1b3e(_0x315dd8(0x53c)+'e',_0x278cdd);},[_0x1c8f09[_0x3418df(0x642)](_0x1640cb,'Appli'+_0x3418df(0x285)+_0x3418df(0x2c2)+_0x3418df(0x2b2)),_0x1c8f09[_0x3418df(0x3c6)](_0x2db59e,_0x1c8f09[_0x3418df(0x430)],null,_0x1c8f09['IYHmL'](_0x59043d,_0x354827['hookG'+'od'],_0x1e71cf=>{var _0x4d8119=_0x3418df;if(_0x22fef6['JZYsR']('Zbqht',_0x4d8119(0x2cd)))_0x354827[_0x4d8119(0x4a6)+'od']=_0x1e71cf,_0x22fef6[_0x4d8119(0x304)](_0x1e55ac);else{_0x576984['stopP'+'ropag'+_0x4d8119(0x1f7)]();var _0x1e9a59=_0x3f0d17[_0x4d8119(0x3c3)+_0x4d8119(0x5c6)+'te'](_0x22fef6['ornjP'])!==_0x22fef6[_0x4d8119(0x218)];_0x49ab90[_0x4d8119(0x36c)+'tribu'+'te'](_0x4d8119(0x653)+_0x4d8119(0x373)+'ed',_0x22fef6[_0x4d8119(0x4ee)](_0x3475d9,_0x1e9a59)),_0xc1c8bb(_0x1e9a59);}})),_0x1c8f09[_0x3418df(0x5f9)](_0x2db59e,_0x1c8f09['xsgZQ'],null,_0x59043d(_0x354827['hookG'+'odDie'],_0x253091=>{var _0x17ca71=_0x3418df;_0x354827[_0x17ca71(0x4a6)+'odDie']=_0x253091,_0x1e55ac();})),_0x1c8f09[_0x3418df(0x1d4)](_0x2db59e,_0x1c8f09['wXrtL'],null,_0x59043d(_0x354827[_0x3418df(0x614)+_0x3418df(0x335)+'il'],_0x3c849d=>{var _0xd3e5cc=_0x3418df;_0xd3e5cc(0x58d)!=='BvWGb'?(_0x439fcb['damag'+'eExp']=_0x534623,_0x22fef6[_0xd3e5cc(0x304)](_0x1a1945)):(_0x354827[_0xd3e5cc(0x614)+'oReco'+'il']=_0x3c849d,_0x1e55ac());})),_0x2db59e('captu'+_0x3418df(0x300)+'etGam'+_0x3418df(0x6a8)+'ing\x20+'+_0x3418df(0x199)+'ounde'+'d)',_0x3418df(0x6e2)+_0x3418df(0x2ef)+'work\x20'+'witho'+_0x3418df(0x697)+'is',_0x59043d(_0x354827['hookC'+_0x3418df(0x489)+'e'],_0x371856=>{var _0x530f20=_0x3418df;_0x354827[_0x530f20(0x4c9)+_0x530f20(0x489)+'e']=_0x371856,_0x1e55ac();}))]),_0x218d47(_0x1c8f09['YoEOj'],_0x1c8f09[_0x3418df(0x2e1)],_0x354827[_0x3418df(0x30c)+'ill'],_0x2af7c0=>{var _0x307a0f=_0x3418df;_0x354827['actkK'+_0x307a0f(0x140)]=_0x2af7c0,_0x1c8f09['WnXPu'](_0x1e55ac);},[_0x1c8f09['TGsho'](_0x1640cb,_0x1c8f09['inpon'],!![])]),_0x1c8f09[_0x3418df(0x1c1)](_0x218d47,_0x3418df(0x4b9)+'r',_0x1c8f09[_0x3418df(0x3b6)],!![],null,[_0x2db59e(_0x1c8f09['IBOHO'],null,_0x1c8f09[_0x3418df(0x2b1)](_0x545bff,_0x1c8f09[_0x3418df(0x468)],()=>{var _0xa03b02=_0x3418df;_0x354827={..._0x16917a},_0x22fef6['qlIOB'](_0x1e55ac),location[_0xa03b02(0x4a3)+'d']();}))])];}}var _0x11985b=null;function _0x5e8132(_0x3fcf54){var _0x150ded=_0x1306cc;_0x32b257=_0x3fcf54;if(!_0x11985b){var _0x3aa34b=document['creat'+_0x150ded(0x3d4)+'ent'](_0x150ded(0x1a9));_0x3aa34b[_0x150ded(0x5af)+'onten'+'t']=_0x1fef39,_0x2e9560['appen'+_0x150ded(0x5ce)+'d'](_0x3aa34b),_0x11985b=_0x10f9d5(),_0x2e9560[_0x150ded(0x4db)+_0x150ded(0x5ce)+'d'](_0x11985b),requestAnimationFrame(()=>_0x11985b[_0x150ded(0x1a1)+_0x150ded(0x25e)][_0x150ded(0x1ff)]('shown'));}_0x11985b[_0x150ded(0x1a1)+'List']['toggl'+'e'](_0x150ded(0x1a5),_0x3fcf54);}function _0x50a1a6(){var _0x36cb5c=_0x1306cc;_0x57632f[_0x36cb5c(0x504)](_0x5e8132,!_0x32b257);}function _0x10f9d5(){var _0x192b91=_0x1306cc,_0x1fad4f=document[_0x192b91(0x158)+_0x192b91(0x3d4)+_0x192b91(0x2ab)](_0x192b91(0x57c));_0x1fad4f[_0x192b91(0x1a1)+'Name']='mn-pa'+_0x192b91(0x376);var _0x5f381c=document[_0x192b91(0x158)+'eElem'+'ent'](_0x192b91(0x123));_0x5f381c[_0x192b91(0x1a1)+_0x192b91(0x5d6)]=_0x57632f[_0x192b91(0x18a)];var _0x41364d=document['creat'+'eElem'+_0x192b91(0x2ab)](_0x192b91(0x57c));_0x41364d['class'+'Name']=_0x57632f[_0x192b91(0x186)],_0x41364d[_0x192b91(0x49c)+_0x192b91(0x3d8)]=_0x57632f['KfjEk'],_0x5f381c['appen'+'dChil'+'d'](_0x41364d);var _0x10c9ae=document[_0x192b91(0x158)+_0x192b91(0x3d4)+_0x192b91(0x2ab)](_0x57632f[_0x192b91(0x2e4)]);_0x10c9ae['class'+'Name']=_0x192b91(0x5f6)+'in';var _0x218897=document[_0x192b91(0x158)+_0x192b91(0x3d4)+'ent']('heade'+'r');_0x218897['class'+'Name']=_0x57632f['FinyI'];var _0x56c198=document[_0x192b91(0x158)+'eElem'+'ent']('div');_0x56c198[_0x192b91(0x1a1)+_0x192b91(0x5d6)]=_0x192b91(0x45b)+'tles';var _0x522414=document[_0x192b91(0x158)+_0x192b91(0x3d4)+_0x192b91(0x2ab)]('h2');_0x522414[_0x192b91(0x1a1)+'Name']=_0x192b91(0x435),_0x522414['textC'+_0x192b91(0x4fc)+'t']=_0x57632f[_0x192b91(0x6bd)];var _0x3158b8=document[_0x192b91(0x158)+_0x192b91(0x3d4)+_0x192b91(0x2ab)](_0x192b91(0x1b0));_0x3158b8['class'+'Name']='mn-su'+'b',_0x3158b8['textC'+_0x192b91(0x4fc)+'t']=_0x192b91(0x6df)+_0x192b91(0x354)+_0x192b91(0x4f5)+'enu',_0x56c198['appen'+'d'](_0x522414,_0x3158b8);var _0x341f21=document[_0x192b91(0x158)+'eElem'+_0x192b91(0x2ab)]('butto'+'n');_0x341f21[_0x192b91(0x6f6)]=_0x192b91(0x699)+'n',_0x341f21['class'+_0x192b91(0x5d6)]=_0x57632f['pGzWO'],_0x341f21[_0x192b91(0x126)]='Close',_0x341f21[_0x192b91(0x49c)+'HTML']='<svg\x20'+'viewB'+_0x192b91(0x330)+'\x200\x2024'+'\x2024\x22>'+_0x192b91(0x5a2)+_0x192b91(0x49e)+_0x192b91(0x443)+_0x192b91(0x18e)+'18\x206\x20'+'6\x2018\x22'+_0x192b91(0x2fc)+'vg>',_0x341f21[_0x192b91(0x6da)+'ck']=()=>_0x5e8132(![]),_0x218897['appen'+'d'](_0x56c198,_0x341f21);var _0x11034c=document[_0x192b91(0x158)+_0x192b91(0x3d4)+_0x192b91(0x2ab)](_0x192b91(0x57c));_0x11034c['class'+_0x192b91(0x5d6)]='mn-co'+'ls',_0x10c9ae[_0x192b91(0x4db)+'d'](_0x218897,_0x11034c),_0x1fad4f[_0x192b91(0x4db)+'d'](_0x5f381c,_0x10c9ae);var _0x5de4cf=new Map();for(var _0x4da087 of _0x3d48d9){var _0x53de57=_0x57632f[_0x192b91(0x3a5)][_0x192b91(0x322)]('|'),_0x1a0dfe=0x57*-0x51+-0x161c+-0x83*-0x61;while(!![]){switch(_0x53de57[_0x1a0dfe++]){case'0':_0x28fc60[_0x192b91(0x1a1)+'Name']=_0x57632f['dlGEa'];continue;case'1':_0x28fc60[_0x192b91(0x49c)+_0x192b91(0x3d8)]=_0x57632f['xLxaM']('<smal'+'l>'+_0x4da087['label'],_0x57632f[_0x192b91(0x2fa)]);continue;case'2':_0x28fc60['title']=_0x4da087[_0x192b91(0x387)];continue;case'3':_0x5de4cf[_0x192b91(0x134)](_0x4da087['id'],_0x28fc60);continue;case'4':_0x5f381c[_0x192b91(0x4db)+'dChil'+'d'](_0x28fc60);continue;case'5':var _0x28fc60=document[_0x192b91(0x158)+_0x192b91(0x3d4)+_0x192b91(0x2ab)]('butto'+'n');continue;case'6':_0x28fc60[_0x192b91(0x6f6)]=_0x192b91(0x699)+'n';continue;case'7':_0x28fc60[_0x192b91(0x6da)+'ck']=(_0xcc2752=>()=>_0x31ff0c(_0xcc2752))(_0x4da087['id']);continue;}break;}}function _0x31ff0c(_0x3c63b1){var _0x5ce15b=_0x192b91;_0x3a8a3a[_0x5ce15b(0x454)]=_0x3c63b1,_0x254e4f();var _0x3faa66=_0x3d48d9['find'](_0x2d4e0e=>_0x2d4e0e['id']===_0x3c63b1)||_0x3d48d9[-0x4c+0x1*-0x781+0x1*0x7cd];_0x522414[_0x5ce15b(0x5af)+'onten'+'t']=_0x1c8f09[_0x5ce15b(0x19f)]+_0x3faa66[_0x5ce15b(0x387)];for(var [_0x3d6226,_0x510f5e]of _0x5de4cf)_0x510f5e[_0x5ce15b(0x1a1)+'List']['toggl'+'e'](_0x5ce15b(0x6e3)+'e',_0x3d6226===_0x3c63b1);_0x11034c['repla'+_0x5ce15b(0x58f)+_0x5ce15b(0x161)](..._0x2c70e5(_0x3c63b1));}return _0x31ff0c(_0x3a8a3a[_0x192b91(0x454)]||_0x192b91(0x6e7)+'t'),_0x57632f[_0x192b91(0x316)](setInterval,()=>{var _0x5e3d0c=_0x192b91;if(_0x1c8f09[_0x5e3d0c(0x21e)]!==_0x1c8f09[_0x5e3d0c(0x21e)]){if(_0x3ffab9)return;_0x54ccc9=!![],_0x3d4438[_0x5e3d0c(0x426)+'entLi'+'stene'+'r'](_0x5e3d0c(0x260)+'wn',_0x2c941f,!![]),_0x38f0b4['addEv'+_0x5e3d0c(0x490)+'stene'+'r']('keyup',_0x41c291,!![]),_0x33c80d['addEv'+'entLi'+'stene'+'r']('mouse'+'down',_0x1047b7,!![]),_0x489d38[_0x5e3d0c(0x426)+_0x5e3d0c(0x490)+'stene'+'r'](_0x5e3d0c(0x51e)+'up',_0x2a2507,!![]),_0x1ca4fe[_0x5e3d0c(0x426)+_0x5e3d0c(0x490)+'stene'+'r']('blur',_0x20c3a2);}else{if(!_0x32b257)return;var _0x522790=_0x11034c[_0x5e3d0c(0x16b)+'ren'];for(var _0x5af5ee=-0x770+0xfde+-0x86e;_0x5af5ee<_0x522790[_0x5e3d0c(0x48a)+'h'];_0x5af5ee++){var _0x3a75c5=_0x522790[_0x5af5ee]['query'+_0x5e3d0c(0x121)+_0x5e3d0c(0x46f)]('.sk-m'+_0x5e3d0c(0x38e));_0x3a75c5&&(_0x3a75c5[_0x5e3d0c(0x5af)+_0x5e3d0c(0x4fc)+'t'][_0x5e3d0c(0x166)+'Of'](_0x1c8f09['Kwgkn'])===-0x1*-0x1961+0x912+-0x2273||_0x1c8f09[_0x5e3d0c(0x29f)](_0x3a75c5['textC'+_0x5e3d0c(0x4fc)+'t'][_0x5e3d0c(0x166)+'Of']('SAFE'),0xa3e+0x1*-0x2515+-0x1ad7*-0x1))&&(_0x3a75c5[_0x5e3d0c(0x5af)+'onten'+'t']=_0x332b4c[_0x5e3d0c(0x660)+'ode']?_0x1c8f09[_0x5e3d0c(0x153)]:_0x332b4c['uwmk']?'UWMK\x20'+_0x5e3d0c(0x2e3)+'\x20'+(_0x332b4c[_0x5e3d0c(0x3db)+'Total']?_0x1c8f09[_0x5e3d0c(0x1a4)](_0x1c8f09[_0x5e3d0c(0x4e0)](_0x332b4c[_0x5e3d0c(0x3db)+'Ok'],'/')+_0x332b4c['hooks'+_0x5e3d0c(0x5fc)],_0x1c8f09[_0x5e3d0c(0x457)]):_0x5e3d0c(0x67c)+_0x5e3d0c(0x3a0)+_0x5e3d0c(0x5e9)+'all\x20o'+'ff)')+('\x20|\x20ga'+_0x5e3d0c(0x607))+(_0x332b4c[_0x5e3d0c(0x16d)+'oaded']?'loade'+'d':_0x1c8f09['NOStt'])+_0x1c8f09['yQcxl']+(_0x332b4c[_0x5e3d0c(0x2ee)+_0x5e3d0c(0x34a)]?_0x1c8f09[_0x5e3d0c(0x53b)]:_0x1c8f09[_0x5e3d0c(0x533)])+(_0x5e3d0c(0x39a)+_0x5e3d0c(0x55b)+'t\x20')+(_0x332b4c['movem'+_0x5e3d0c(0x17d)]?'held':'none')+(_0x332b4c['lastE'+_0x5e3d0c(0x212)]?_0x1c8f09['oelUT'](_0x5e3d0c(0x156)+'R:\x20',_0x332b4c['lastE'+'rror']):''):_0x5e3d0c(0x6b8)+'MISSI'+_0x5e3d0c(0x48d)+'overl'+_0x5e3d0c(0x33c)+'ly\x20(r'+'einst'+_0x5e3d0c(0x6e1)+'he\x20us'+'erscr'+'ipt)');}}},0x1*-0x10d0+-0x2f9*-0x1+-0xb*-0x19d),_0x1fad4f;}var _0x1fef39='\x0a\x20\x20\x20\x20'+':host'+_0x1306cc(0x5fe)+'l:\x20in'+_0x1306cc(0x162)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x1306cc(0x287)+_0x1306cc(0x67e)+_0x1306cc(0x503)+_0x1306cc(0x552)+_0x1306cc(0x5a6)+_0x1306cc(0x219)+_0x1306cc(0x1d1)+_0x1306cc(0x49d)+'t-fam'+_0x1306cc(0x2a6)+_0x1306cc(0x401)+'r\x22,\x20\x22'+_0x1306cc(0x178)+'\x20UI\x22,'+_0x1306cc(0x5bf)+_0x1306cc(0x6a4)+',\x20san'+'s-ser'+'if;\x20}'+'\x0a\x20\x20\x20\x20'+_0x1306cc(0x51f)+_0x1306cc(0x200)+'{\x20pos'+_0x1306cc(0x4d0)+':\x20abs'+'olute'+';\x20rig'+_0x1306cc(0x4b0)+'4px;\x20'+_0x1306cc(0x190)+_0x1306cc(0x1e4)+_0x1306cc(0x3c7)+_0x1306cc(0x388)+_0x1306cc(0x5e8)+_0x1306cc(0x665)+_0x1306cc(0x6a1)+_0x1306cc(0x6d8)+_0x1306cc(0x5b1)+_0x1306cc(0x68e)+');\x20ma'+_0x1306cc(0x1a2)+_0x1306cc(0x3d9)+_0x1306cc(0x584)+_0x1306cc(0x27b)+_0x1306cc(0x377)+'(100v'+_0x1306cc(0x3a9)+_0x1306cc(0x520)+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+_0x1306cc(0x180)+':\x20fle'+_0x1306cc(0x399)+_0x1306cc(0x111)+_0x1306cc(0x1df)+_0x1306cc(0x2d8)+_0x1306cc(0x2d7)+'px;\x20b'+_0x1306cc(0x552)+'-radi'+_0x1306cc(0x310)+'2px;\x20'+'point'+'er-ev'+_0x1306cc(0x622)+'\x20auto'+_0x1306cc(0x1ac)+_0x1306cc(0x37d)+'ckgro'+_0x1306cc(0x202)+_0x1306cc(0x53a)+_0x1306cc(0x23b)+',21,.'+_0x1306cc(0x5c1)+'backd'+_0x1306cc(0x31a)+_0x1306cc(0x25c)+_0x1306cc(0x263)+'r(22p'+'x)\x20sa'+'turat'+_0x1306cc(0x1cc)+_0x1306cc(0x548)+_0x1306cc(0x151)+'t-bac'+'kdrop'+'-filt'+_0x1306cc(0x1ee)+_0x1306cc(0x29b)+_0x1306cc(0x16e)+_0x1306cc(0x1fa)+'ate(1'+'50%);'+_0x1306cc(0x1e2)+_0x1306cc(0x5e5)+_0x1306cc(0x5aa)+_0x1306cc(0x428)+_0x1306cc(0x381)+_0x1306cc(0x275)+'gba(2'+'55,25'+_0x1306cc(0x13c)+',.06)'+',\x20ins'+_0x1306cc(0x6cb)+'1px\x200'+_0x1306cc(0x6ba)+'(255,'+_0x1306cc(0x26e)+'55,.0'+_0x1306cc(0x2ea)+_0x1306cc(0x1b7)+_0x1306cc(0x66a)+'\x20rgba'+_0x1306cc(0x1f1)+'0,.55'+');\x0a\x20\x20'+_0x1306cc(0x68d)+_0x1306cc(0x5ba)+'y:\x200;'+_0x1306cc(0x465)+'sform'+_0x1306cc(0x32b)+_0x1306cc(0x159)+_0x1306cc(0x574)+_0x1306cc(0x26a)+_0x1306cc(0x480)+'er-ev'+_0x1306cc(0x622)+'\x20none'+';\x20tra'+_0x1306cc(0x4d8)+'on:\x20o'+_0x1306cc(0x5ba)+'y\x20.35'+'s\x20eas'+'e,\x20tr'+_0x1306cc(0x28e)+_0x1306cc(0x240)+_0x1306cc(0x321)+_0x1306cc(0x2bc)+_0x1306cc(0x6bc)+_0x1306cc(0x2ac)+_0x1306cc(0x41e)+_0x1306cc(0x55a)+'\x20\x20\x20\x20\x20'+_0x1306cc(0x590)+_0x1306cc(0x43f)+_0x1306cc(0x58a)+_0x1306cc(0x49d)+'t-siz'+_0x1306cc(0x319)+'px;\x20}'+_0x1306cc(0x1e2)+'.mn-p'+_0x1306cc(0x167)+_0x1306cc(0x1a5)+_0x1306cc(0x5e1)+_0x1306cc(0x30d)+':\x201;\x20'+'trans'+_0x1306cc(0x265)+'\x20none'+';\x20poi'+'nter-'+'event'+_0x1306cc(0x475)+'to;\x20}'+_0x1306cc(0x1e2)+'.mn-s'+'ide\x20{'+_0x1306cc(0x393)+'lay:\x20'+'flex;'+'\x20flex'+_0x1306cc(0x5c8)+'ction'+':\x20col'+'umn;\x20'+'align'+_0x1306cc(0x38a)+'s:\x20ce'+_0x1306cc(0x2ff)+'\x20gap:'+'\x204px;'+'\x20widt'+'h:\x2062'+'px;\x20f'+'lex:\x20'+'none;'+'\x20padd'+_0x1306cc(0x4a8)+_0x1306cc(0x6c3)+('0;\x20bo'+'rder-'+_0x1306cc(0x3ec)+'s:\x2016'+'px;\x0a\x20'+_0x1306cc(0x1c2)+_0x1306cc(0x392)+_0x1306cc(0x5df)+_0x1306cc(0x59d)+_0x1306cc(0x50f)+',255,'+_0x1306cc(0x586)+_0x1306cc(0x449)+'\x20box-'+_0x1306cc(0x662)+_0x1306cc(0x486)+_0x1306cc(0x402)+_0x1306cc(0x381)+'1px\x20r'+_0x1306cc(0x663)+_0x1306cc(0x515)+'5,255'+_0x1306cc(0x39d)+';\x20}\x0a\x20'+_0x1306cc(0x28d)+_0x1306cc(0x198)+_0x1306cc(0x420)+_0x1306cc(0x2a1)+_0x1306cc(0x693)+_0x1306cc(0x4fa)+_0x1306cc(0x28b)+'items'+_0x1306cc(0x406)+_0x1306cc(0x661)+'width'+_0x1306cc(0x1d3)+'x;\x20he'+'ight:'+'\x2032px'+_0x1306cc(0x5ae)+_0x1306cc(0x28d)+_0x1306cc(0x198)+'o-svg'+_0x1306cc(0x6ce)+_0x1306cc(0x183)+'25px;'+'\x20heig'+_0x1306cc(0x4b0)+_0x1306cc(0x25f)+_0x1306cc(0x400)+_0x1306cc(0x31d)+_0x1306cc(0x34c)+'le;\x20f'+_0x1306cc(0x25c)+_0x1306cc(0x4aa)+'p-sha'+_0x1306cc(0x534)+'\x200\x204p'+_0x1306cc(0x4c8)+_0x1306cc(0x50f)+_0x1306cc(0x3dd)+_0x1306cc(0x1cd)+_0x1306cc(0x5ab)+'}\x0a\x20\x20\x20'+'\x20.mn-'+'tab\x20{'+'\x20disp'+_0x1306cc(0x208)+'flex;'+_0x1306cc(0x174)+_0x1306cc(0x55c)+'ms:\x20c'+'enter'+';\x20jus'+_0x1306cc(0x331)+_0x1306cc(0x2f2)+_0x1306cc(0x5d7)+_0x1306cc(0x6b2)+';\x20wid'+'th:\x205'+'2px;\x20'+_0x1306cc(0x442)+'t:\x2034'+'px;\x20b'+_0x1306cc(0x552)+':\x200;\x20'+_0x1306cc(0x3b7)+_0x1306cc(0x2e7)+'ius:\x20'+'10px;'+_0x1306cc(0x1e2)+_0x1306cc(0x20f)+_0x1306cc(0x118)+_0x1306cc(0x44e)+_0x1306cc(0x605)+_0x1306cc(0x628)+_0x1306cc(0x119)+'or:\x20r'+'gba(2'+_0x1306cc(0x1fb)+_0x1306cc(0x4ca)+_0x1306cc(0x56f)+_0x1306cc(0x1eb)+_0x1306cc(0x451)+_0x1306cc(0x5d4)+'r;\x20fo'+'nt-si'+_0x1306cc(0x35c)+_0x1306cc(0x1f9)+_0x1306cc(0x550)+_0x1306cc(0x52d)+_0x1306cc(0x488)+_0x1306cc(0x516)+_0x1306cc(0x34b)+'mn-ta'+_0x1306cc(0x2bf)+'er\x20{\x20'+'color'+_0x1306cc(0x59d)+_0x1306cc(0x15e)+_0x1306cc(0x1b3)+'242,.'+'8);\x20}'+_0x1306cc(0x1e2)+_0x1306cc(0x2c9)+_0x1306cc(0x3f7)+_0x1306cc(0x1d0)+'{\x20col'+'or:\x20#'+_0x1306cc(0x6ed)+'d;\x20ba'+_0x1306cc(0x3d5)+_0x1306cc(0x202)+_0x1306cc(0x53a)+_0x1306cc(0x155)+'07,15'+_0x1306cc(0x279)+_0x1306cc(0x5ae)+'\x20\x20\x20.m'+_0x1306cc(0x424)+_0x1306cc(0x384)+_0x1306cc(0x327)+_0x1306cc(0x35b)+_0x1306cc(0x44b)+'th:\x200'+_0x1306cc(0x22a)+'play:'+_0x1306cc(0x4f2)+_0x1306cc(0x3be)+'x-dir'+'ectio'+_0x1306cc(0x4e1)+_0x1306cc(0x561)+'\x20}\x0a\x20\x20'+_0x1306cc(0x2d9)+_0x1306cc(0x3d1)+_0x1306cc(0x675)+'play:'+'\x20flex'+_0x1306cc(0x493)+'gn-it'+_0x1306cc(0x4bb)+_0x1306cc(0x638)+_0x1306cc(0x5b5)+_0x1306cc(0x177)+'px;\x20p'+_0x1306cc(0x2d8)+'g:\x206p'+'x\x206px'+'\x2012px'+_0x1306cc(0x6ee)+_0x1306cc(0x56e)+'ect:\x20'+_0x1306cc(0x59a)+'\x20}\x0a\x20\x20'+_0x1306cc(0x2d9)+_0x1306cc(0x27e)+_0x1306cc(0x120)+_0x1306cc(0x441)+_0x1306cc(0x3e9)+'in-wi'+_0x1306cc(0x183)+_0x1306cc(0x516)+_0x1306cc(0x34b)+'mn-h\x20'+'{\x20fon'+_0x1306cc(0x214)+'e:\x2017'+_0x1306cc(0x40f)+'ont-w'+_0x1306cc(0x4b4)+_0x1306cc(0x4d4)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-sub'+'\x20{\x20fo'+_0x1306cc(0x63c)+_0x1306cc(0x35c)+_0x1306cc(0x627)+_0x1306cc(0x4dc))+(_0x1306cc(0x415)+'4;\x20}\x0a'+_0x1306cc(0x34b)+_0x1306cc(0x59c)+_0x1306cc(0x3ab)+'\x20disp'+_0x1306cc(0x208)+_0x1306cc(0x56a)+_0x1306cc(0x230)+_0x1306cc(0x3b1)+_0x1306cc(0x666)+_0x1306cc(0x6b2)+';\x20wid'+'th:\x202'+'8px;\x20'+_0x1306cc(0x442)+_0x1306cc(0x2c8)+'px;\x20b'+_0x1306cc(0x552)+':\x200;\x20'+'borde'+'r-rad'+_0x1306cc(0x352)+_0x1306cc(0x1b8)+_0x1306cc(0x392)+_0x1306cc(0x5df)+':\x20tra'+_0x1306cc(0x43a)+_0x1306cc(0x2e0)+'color'+_0x1306cc(0x42f)+_0x1306cc(0x507)+'\x20opac'+_0x1306cc(0x37f)+'.45;\x20'+_0x1306cc(0x6d4)+'r:\x20po'+_0x1306cc(0x41f)+_0x1306cc(0x5ae)+_0x1306cc(0x28d)+_0x1306cc(0x51d)+_0x1306cc(0x21c)+'ver\x20{'+_0x1306cc(0x34d)+'ity:\x20'+'1;\x20ba'+_0x1306cc(0x3d5)+_0x1306cc(0x202)+'rgba('+_0x1306cc(0x26e)+_0x1306cc(0x515)+_0x1306cc(0x5b0)+_0x1306cc(0x518)+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20s'+_0x1306cc(0x4df)+_0x1306cc(0x342)+':\x2014p'+_0x1306cc(0x2e5)+_0x1306cc(0x4da)+_0x1306cc(0x299)+_0x1306cc(0x5b4)+'l:\x20no'+_0x1306cc(0x4e9)+_0x1306cc(0x2b6)+_0x1306cc(0x256)+'rentC'+_0x1306cc(0x679)+'\x20stro'+_0x1306cc(0x483)+'dth:\x20'+_0x1306cc(0x5e3)+_0x1306cc(0x2c1)+'linec'+_0x1306cc(0x6af)+_0x1306cc(0x3ac)+'\x20}\x0a\x20\x20'+_0x1306cc(0x2d9)+_0x1306cc(0x69a)+_0x1306cc(0x40b)+_0x1306cc(0x5b2)+_0x1306cc(0x36f)+_0x1306cc(0x24c)+'ht:\x200'+_0x1306cc(0x48c)+_0x1306cc(0x274)+_0x1306cc(0x5ff)+'uto;\x20'+_0x1306cc(0x266)+_0x1306cc(0x222)+_0x1306cc(0x425)+_0x1306cc(0x188)+_0x1306cc(0x2d3)+'ate-c'+_0x1306cc(0x69f)+'s:\x20re'+_0x1306cc(0x355)+_0x1306cc(0x4ab)+_0x1306cc(0x2f0)+'\x20minm'+'ax(25'+'0px,\x20'+'1fr))'+_0x1306cc(0x493)+'gn-it'+'ems:\x20'+_0x1306cc(0x3b2)+';\x20ali'+_0x1306cc(0x68f)+_0x1306cc(0x391)+_0x1306cc(0x10e)+_0x1306cc(0x17b)+_0x1306cc(0x24b)+_0x1306cc(0x1f9)+_0x1306cc(0x3f3)+'ng:\x200'+_0x1306cc(0x2b5)+_0x1306cc(0x62a)+_0x1306cc(0x5ae)+'\x20\x20\x20.m'+'n-col'+_0x1306cc(0x21f)+_0x1306cc(0x4b3)+_0x1306cc(0x684)+_0x1306cc(0x3a1)+_0x1306cc(0x6ce)+'dth:\x20'+'8px;\x20'+_0x1306cc(0x462)+'\x20.mn-'+_0x1306cc(0x1c0)+':-web'+_0x1306cc(0x27c)+'croll'+'bar-t'+'humb\x20'+_0x1306cc(0x411)+'kgrou'+_0x1306cc(0x253)+'gba(2'+'55,25'+'5,255'+_0x1306cc(0x50a)+';\x20bor'+_0x1306cc(0x47a)+_0x1306cc(0x564)+_0x1306cc(0x59e)+_0x1306cc(0x5ae)+_0x1306cc(0x273)+_0x1306cc(0x43e)+_0x1306cc(0x2db)+_0x1306cc(0x552)+_0x1306cc(0x3e7)+'us:\x201'+'2px;\x20'+_0x1306cc(0x392)+'round'+_0x1306cc(0x59d)+'a(255'+',255,'+_0x1306cc(0x586)+'025);'+_0x1306cc(0x670)+'shado'+'w:\x20in'+_0x1306cc(0x402)+'\x200\x200\x20'+'1px\x20r'+_0x1306cc(0x663)+'55,25'+'5,255'+_0x1306cc(0x39d)+_0x1306cc(0x5ae)+_0x1306cc(0x273)+_0x1306cc(0x43e)+_0x1306cc(0x5c0)+_0x1306cc(0x411)+'kgrou'+_0x1306cc(0x253)+'gba(2'+_0x1306cc(0x515)+_0x1306cc(0x13c)+',.04)'+';\x20box'+_0x1306cc(0x5aa)+_0x1306cc(0x46d)+_0x1306cc(0x5e2)+'0\x200\x200'+_0x1306cc(0x545)+'rgba('+_0x1306cc(0x155)+_0x1306cc(0x1c8)+'7,.28'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ca'+_0x1306cc(0x609)+_0x1306cc(0x4d6)+_0x1306cc(0x266))+(_0x1306cc(0x1da)+_0x1306cc(0x13b)+_0x1306cc(0x6cd)+'-item'+_0x1306cc(0x560)+_0x1306cc(0x2ff)+_0x1306cc(0x193)+'\x208px;'+'\x20padd'+_0x1306cc(0x4a8)+_0x1306cc(0x2aa)+'12px;'+_0x1306cc(0x50d)+'\x20\x20.sk'+_0x1306cc(0x6ae)+_0x1306cc(0x27e)+'e\x20{\x20f'+'lex:\x20'+'1;\x20mi'+_0x1306cc(0x44b)+'th:\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x1306cc(0x43e)+'d-tit'+_0x1306cc(0x67a)+'rong\x20'+'{\x20fon'+'t-siz'+_0x1306cc(0x319)+_0x1306cc(0x40f)+'ont-w'+'eight'+':\x20600'+_0x1306cc(0x119)+_0x1306cc(0x466)+_0x1306cc(0x663)+_0x1306cc(0x1fb)+'8,242'+_0x1306cc(0x30a)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x1306cc(0x43e)+'d.on\x20'+'.sk-c'+_0x1306cc(0x578)+_0x1306cc(0x5be)+_0x1306cc(0x667)+_0x1306cc(0x318)+_0x1306cc(0x2e2)+_0x1306cc(0x170)+'0f5;\x20'+_0x1306cc(0x462)+'\x20.sk-'+'mbody'+_0x1306cc(0x30b)+_0x1306cc(0x69e)+':\x200\x201'+_0x1306cc(0x576)+'0px;\x20'+_0x1306cc(0x462)+_0x1306cc(0x624)+_0x1306cc(0x375)+_0x1306cc(0x431)+'nt-si'+_0x1306cc(0x35c)+'1px;\x20'+_0x1306cc(0x4dc)+'ty:\x20.'+'4;\x20ma'+_0x1306cc(0x6f1)+_0x1306cc(0x190)+_0x1306cc(0x6eb)+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+_0x1306cc(0x297)+_0x1306cc(0x2a1)+_0x1306cc(0x525)+_0x1306cc(0x48b)+_0x1306cc(0x1c6)+_0x1306cc(0x6e0)+_0x1306cc(0x406)+_0x1306cc(0x661)+'gap:\x20'+'8px;\x20'+_0x1306cc(0x3f3)+_0x1306cc(0x22f)+_0x1306cc(0x510)+_0x1306cc(0x6c2)+_0x1306cc(0x127)+_0x1306cc(0x410)+_0x1306cc(0x25f)+'}\x0a\x20\x20\x20'+_0x1306cc(0x624)+'label'+_0x1306cc(0x40b)+_0x1306cc(0x5b2)+';\x20col'+_0x1306cc(0x466)+_0x1306cc(0x663)+_0x1306cc(0x1fb)+'8,242'+_0x1306cc(0x272)+_0x1306cc(0x5ae)+'\x20\x20\x20.s'+_0x1306cc(0x15c)+_0x1306cc(0x255)+_0x1306cc(0x2a1)+_0x1306cc(0x5bd)+_0x1306cc(0x3ae)+'font-'+_0x1306cc(0x57a)+_0x1306cc(0x3bd)+';\x20opa'+_0x1306cc(0x16f)+'\x20.4;\x20'+_0x1306cc(0x462)+_0x1306cc(0x624)+_0x1306cc(0x658)+'h\x20{\x20p'+_0x1306cc(0x3ee)+_0x1306cc(0x49a)+_0x1306cc(0x20d)+_0x1306cc(0x6c5)+_0x1306cc(0x388)+'\x2026px'+';\x20hei'+_0x1306cc(0x3d9)+_0x1306cc(0x5ad)+_0x1306cc(0x3e3)+_0x1306cc(0x5f7)+';\x20bor'+'der-r'+'adius'+':\x2099p'+'x;\x20ba'+_0x1306cc(0x3d5)+'und:\x20'+'rgba('+'255,2'+'55,25'+_0x1306cc(0x672)+');\x20cu'+'rsor:'+_0x1306cc(0x3d2)+_0x1306cc(0x661)+'flex:'+'\x20none'+';\x20}\x0a\x20'+_0x1306cc(0x273)+'k-swi'+_0x1306cc(0x502)+_0x1306cc(0x5d3)+'\x20{\x20co'+'ntent'+':\x20\x22\x22;'+'\x20posi'+_0x1306cc(0x4c5)+_0x1306cc(0x3dc)+_0x1306cc(0x1e8)+_0x1306cc(0x1b2)+_0x1306cc(0x447)+'\x20left'+_0x1306cc(0x59b)+_0x1306cc(0x5e4)+'th:\x208'+_0x1306cc(0x3c4)+'eight'+':\x208px'+';\x20bor'+_0x1306cc(0x47a)+_0x1306cc(0x564)+_0x1306cc(0x2cf)+_0x1306cc(0x587)+_0x1306cc(0x118)+'nd:\x20r'+_0x1306cc(0x663)+_0x1306cc(0x515)+_0x1306cc(0x13c)+',.25)'+';\x20tra'+_0x1306cc(0x4d8)+_0x1306cc(0x654)+'eft\x20.'+_0x1306cc(0x542)+_0x1306cc(0x11f)+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x1306cc(0x6b6)+_0x1306cc(0x326)+'cked='+_0x1306cc(0x52b)+_0x1306cc(0x363)+_0x1306cc(0x392)+'round'+_0x1306cc(0x59d))+(_0x1306cc(0x50f)+_0x1306cc(0x3dd)+_0x1306cc(0x1cd)+'25);\x20'+'}\x0a\x20\x20\x20'+_0x1306cc(0x624)+_0x1306cc(0x658)+'h[ari'+_0x1306cc(0x326)+_0x1306cc(0x313)+_0x1306cc(0x52b)+_0x1306cc(0x453)+_0x1306cc(0x210)+'{\x20lef'+'t:\x2015'+_0x1306cc(0x2c7)+_0x1306cc(0x11f)+_0x1306cc(0x4b2)+_0x1306cc(0x5db)+_0x1306cc(0x610)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x1306cc(0x334)+'\x20{\x20ba'+_0x1306cc(0x3d5)+_0x1306cc(0x202)+_0x1306cc(0x53a)+'255,2'+_0x1306cc(0x515)+'5,.03'+'5);\x20b'+'order'+':\x200;\x20'+'borde'+'r-rad'+_0x1306cc(0x352)+_0x1306cc(0x23f)+'color'+':\x20#f6'+'eef2;'+_0x1306cc(0x62c)+_0x1306cc(0x4a8)+'6px\x209'+_0x1306cc(0x40f)+'ont-s'+'ize:\x20'+'11.5p'+'x;\x20ou'+_0x1306cc(0x117)+':\x20non'+_0x1306cc(0x51b)+'x-sha'+_0x1306cc(0x3cd)+'inset'+_0x1306cc(0x381)+_0x1306cc(0x5b8)+'\x20rgba'+'(255,'+_0x1306cc(0x26e)+_0x1306cc(0x201)+_0x1306cc(0x648)+_0x1306cc(0x1e2)+'.sk-f'+_0x1306cc(0x674)+_0x1306cc(0x336)+_0x1306cc(0x1aa)+_0x1306cc(0x11f)+_0x1306cc(0x4b2)+_0x1306cc(0x42d)+'419;\x20'+_0x1306cc(0x462)+'\x20.sk-'+_0x1306cc(0x205)+_0x1306cc(0x632)+'splay'+_0x1306cc(0x2eb)+_0x1306cc(0x482)+'ign-i'+'tems:'+'\x20cent'+_0x1306cc(0x544)+'ap:\x208'+_0x1306cc(0x582)+_0x1306cc(0x1e2)+'.sk-s'+_0x1306cc(0x4e6)+'\x20{\x20-w'+'ebkit'+_0x1306cc(0x26c)+_0x1306cc(0x2fb)+_0x1306cc(0x689)+'ne;\x20a'+'ppear'+'ance:'+_0x1306cc(0x383)+_0x1306cc(0x5e4)+'th:\x209'+'0px;\x20'+_0x1306cc(0x442)+_0x1306cc(0x33b)+_0x1306cc(0x12e)+'ckgro'+'und:\x20'+'trans'+_0x1306cc(0x110)+'t;\x20}\x0a'+_0x1306cc(0x34b)+_0x1306cc(0x3f6)+_0x1306cc(0x163)+':-web'+_0x1306cc(0x27c)+_0x1306cc(0x4e6)+'-runn'+_0x1306cc(0x368)+'track'+'\x20{\x20he'+'ight:'+_0x1306cc(0x460)+_0x1306cc(0x3e3)+'er-ra'+_0x1306cc(0x3f0)+_0x1306cc(0x460)+_0x1306cc(0x554)+_0x1306cc(0x6e5)+_0x1306cc(0x1f0)+_0x1306cc(0x12f)+_0x1306cc(0x396)+'ent(#'+_0x1306cc(0x6ed)+_0x1306cc(0x367)+_0x1306cc(0x112)+_0x1306cc(0x3bc)+_0x1306cc(0x3c0)+_0x1306cc(0x172)+',\x2050%'+_0x1306cc(0x5ed)+_0x1306cc(0x252)+_0x1306cc(0x1ca)+_0x1306cc(0x282)+_0x1306cc(0x30f)+'5,255'+_0x1306cc(0x40a)+_0x1306cc(0x683)+_0x1306cc(0x50d)+_0x1306cc(0x491)+_0x1306cc(0x4ce)+'er::-'+'webki'+_0x1306cc(0x281)+_0x1306cc(0x25b)+_0x1306cc(0x35f)+_0x1306cc(0x215)+_0x1306cc(0x538)+_0x1306cc(0x5d9)+_0x1306cc(0x40d)+_0x1306cc(0x2a5)+_0x1306cc(0x309)+_0x1306cc(0x183)+_0x1306cc(0x23f)+_0x1306cc(0x442)+'t:\x206p'+_0x1306cc(0x50c)+_0x1306cc(0x6f1)+_0x1306cc(0x32f)+_0x1306cc(0x3ca)+'\x20bord'+'er-ra'+_0x1306cc(0x3f0)+'\x2050%;'+_0x1306cc(0x554)+_0x1306cc(0x6e5)+'d:\x20#f'+'f6b9d'+_0x1306cc(0x5ae)+'\x20\x20\x20.s'+'k-val'+_0x1306cc(0x431)+'nt-si'+_0x1306cc(0x35c)+_0x1306cc(0x627)+'font-'+_0x1306cc(0x52d)+_0x1306cc(0x575)+_0x1306cc(0x175)+_0x1306cc(0x44b)+_0x1306cc(0x54b)+'8px;\x20'+'text-'+_0x1306cc(0x6cd)+_0x1306cc(0x33e)+'ht;\x20c'+_0x1306cc(0x2e2)+_0x1306cc(0x6ba)+'(246,'+_0x1306cc(0x3f9)+_0x1306cc(0x130)+_0x1306cc(0x518)+_0x1306cc(0x34b)+_0x1306cc(0x3a6)+_0x1306cc(0x24f))+(_0x1306cc(0x209)+'h:\x2034'+_0x1306cc(0x3c4)+'eight'+':\x2022p'+_0x1306cc(0x613)+_0x1306cc(0x573)+_0x1306cc(0x5fd)+_0x1306cc(0x552)+'-radi'+'us:\x206'+_0x1306cc(0x2c7)+_0x1306cc(0x11f)+_0x1306cc(0x4b2)+'\x20none'+';\x20pad'+_0x1306cc(0x2d1)+'\x200;\x20c'+_0x1306cc(0x3c2)+_0x1306cc(0x349)+_0x1306cc(0x2ff)+'\x20}\x0a\x20\x20'+_0x1306cc(0x491)+_0x1306cc(0x27a)+'\x20{\x20fo'+_0x1306cc(0x63c)+'ze:\x201'+'1px;\x20'+'color'+':\x20rgb'+_0x1306cc(0x15e)+_0x1306cc(0x1b3)+'242,.'+_0x1306cc(0x1d8)+_0x1306cc(0x2d8)+'g:\x202p'+_0x1306cc(0x2ba)+_0x1306cc(0x462)+'\x20.sk-'+_0x1306cc(0x20a)+'err\x20{'+'\x20colo'+_0x1306cc(0x43f)+_0x1306cc(0x408)+_0x1306cc(0x5ae)+_0x1306cc(0x273)+_0x1306cc(0x3cc)+'\x20{\x20al'+_0x1306cc(0x67f)+'elf:\x20'+'flex-'+'start'+_0x1306cc(0x171)+'der:\x20'+_0x1306cc(0x1be)+'rder-'+_0x1306cc(0x3ec)+_0x1306cc(0x6c9)+_0x1306cc(0x496)+'dding'+_0x1306cc(0x6c0)+'\x2016px'+_0x1306cc(0x587)+'kgrou'+_0x1306cc(0x4e7)+_0x1306cc(0x6ed)+_0x1306cc(0x511)+_0x1306cc(0x357)+_0x1306cc(0x4e2)+_0x1306cc(0x6c2)+_0x1306cc(0x127)+':\x2011.'+_0x1306cc(0x25f)+'font-'+'weigh'+_0x1306cc(0x488)+_0x1306cc(0x41a)+_0x1306cc(0x4d1)+'\x20poin'+_0x1306cc(0x661)+_0x1306cc(0x462)+_0x1306cc(0x624)+_0x1306cc(0x540)+_0x1306cc(0x3ba)+_0x1306cc(0x6ac)+_0x1306cc(0x620)+_0x1306cc(0x631)+_0x1306cc(0x390)+'(1.1)'+_0x1306cc(0x5ae)+_0x1306cc(0x3e1));window[_0x1306cc(0x426)+_0x1306cc(0x490)+_0x1306cc(0x53f)+'r']('keydo'+'wn',_0x4a6b76=>{var _0x4abefe=_0x1306cc;_0x57632f[_0x4abefe(0x63d)](_0x4a6b76[_0x4abefe(0x63f)],_0x4abefe(0x397)+'t')&&(_0x57632f[_0x4abefe(0x668)](_0x57632f[_0x4abefe(0x2a4)],_0x4abefe(0x417))?(_0x4a6b76['preve'+'ntDef'+_0x4abefe(0x385)](),_0x50a1a6()):_0x2fad8a[_0x4abefe(0x43d)]());},!![]);var _0x37d6a0=document[_0x1306cc(0x158)+_0x1306cc(0x3d4)+_0x1306cc(0x2ab)](_0x1306cc(0x57c));_0x37d6a0[_0x1306cc(0x1a9)]['cssTe'+'xt']='posit'+_0x1306cc(0x389)+'ixed;'+_0x1306cc(0x356)+_0x1306cc(0x611)+_0x1306cc(0x4da)+_0x1306cc(0x386)+_0x1306cc(0x581)+_0x1306cc(0x6e9)+'47483'+_0x1306cc(0x54d)+_0x1306cc(0x3c2)+_0x1306cc(0x597)+_0x1306cc(0x4e8)+'idth:'+'26px;'+_0x1306cc(0x442)+'t:26p'+'x;opa'+_0x1306cc(0x16f)+_0x1306cc(0x37e)+'ransi'+_0x1306cc(0x4c5)+'opaci'+_0x1306cc(0x615)+_0x1306cc(0x6be)+_0x1306cc(0x41f)+'-even'+_0x1306cc(0x54e)+'to;fi'+_0x1306cc(0x204)+'drop-'+_0x1306cc(0x662)+_0x1306cc(0x164)+'\x204px\x20'+'rgba('+'255,1'+_0x1306cc(0x1c8)+'7,0.7'+'))',_0x37d6a0['inner'+_0x1306cc(0x3d8)]=_0x57632f['hkHBk'],_0x37d6a0['title']='Sakur'+_0x1306cc(0x2da)+'r',_0x37d6a0[_0x1306cc(0x34e)+_0x1306cc(0x4c6)+'er']=()=>_0x37d6a0['style']['opaci'+'ty']='1',_0x37d6a0['onmou'+_0x1306cc(0x618)+'ve']=()=>_0x37d6a0['style'][_0x1306cc(0x4dc)+'ty']=_0x1306cc(0x358),_0x37d6a0['oncli'+'ck']=_0x421c30=>{_0x421c30['stopP'+'ropag'+'ation'](),_0x50a1a6();},document['body'][_0x1306cc(0x4db)+'dChil'+'d'](_0x37d6a0),_0x57632f[_0x1306cc(0x395)](_0x276214),requestAnimationFrame(_0x4c5511),console['log'](_0x1306cc(0x5ac)+_0x1306cc(0x2c3)+_0x1306cc(0x569)+_0x1306cc(0x60c)+_0x1306cc(0x33d)+'\x20UWMK'+':',_0x332b4c[_0x1306cc(0x528)]);});})()));function _0x4ac9(){var _0x2d84c7=['mNb4ide','C3bLzwq','yxjKlxq','u1rLueq','C2L6ztO','C2v0sxq','zgL2','y3qGB24','C2STDMe','z0XqrMO','CKzjsvK','EI1PBMq','ChG7ih0','BgLUzvq','BwLUkdq','u3rHDgu','mJu1lc4','oYbIywm','DgHLihC','Cgfuyva','nMvLzJi','EMLhyMy','BM93','qNzxr2i','BxnSCMe','y2vdAgK','ignVBg8','t1vsx18','idi0iIa','q1frwxm','rLbtig8','tw92zq','y2uGB3y','oNbVAw4','CgPwwwC','ig1VBwu','BM9UztS','oIaZChG','Bw4Ty2W','oIbYz2i','oIa0ChG','y0rorgi','whHxyuO','rNPkCNi','phbHDgG','DxjDigG','CJOGDgG','tLnvAfq','lwjVEdS','qLfbEgy','yvHRzwe','B1bztgS','lxnOywq','ocKPoYa','w3nHA3u','mtrWEdS','oYb9cIa','Dgv4Dem','nsWUmdu','DNCGlsa','zxG6ide','B2nrA3C','oYbMAwW','CJSGz2e','igLZigm','BgLNBG','mcaXChG','nwmWidm','CgfJAxq','rxHW','jYb0Agu','EtOGyMW','AxrSzsa','ihn5C3q','zc5VBIa','odiPoYa','D0j5B2C','BM9tChi','ignVB2W','AwXnB3q','DhjPyNu','BhmGysa','lwrPCMu','shDRyuq','DvvzEKS','uKfqz3m','rgLL','ugXtvei','zenOAwW','swrurvK','C2STy2e','qNLjza','CNrPzgu','ywz0zxi','B2LUDgu','ltiUnsa','tMfTzq','BNq6igm','Bw92zq','yxbWzwe','zhjTuuu','icnMzJy','ywXSzwq','u2HHCNa','A1jZCwS','CM91BMq','DcbHihq','ihSGB3a','BNnLDca','mJSGC3q','oYb3Awq','icbIB3G','wfn1EKW','uMvZzxq','ig1PBIG','BwvKicG','Fdb8mNW','qxbWBgK','zvn0EwW','ksaXmda','s3zTCfm','v1nIAvu','B25PBNa','AMTxExK','oJa7EI0','B3rZlG','Aw1Llca','lxbHCMu','Bw4TBwe','zxi6ida','B2rL','BNjhzLO','nNLLCgjlCW','BgLUzvC','vg90ywW','ida7igi','ihSGywW','lxK6ige','DgvTlxu','ihrVide','CMvHza','yxvSDca','BMv2zxi','CMfUC3a','t0HLywW','BwuG','u0fgrsa','CMqTAgu','CMzAzwS','DNzVyxe','zw51ihi','zwfWB24','C3bHBG','AvflD0q','yJLKoYa','mNb4o3i','u0HjvNm','EdSGyM8','Ag9VA04','DhKGmc4','mtG4mJyWnKTqweHuEG','uIb2ms4','C2vSzwe','s0rtrNa','zwCGzMe','q29SB3i','ufmGDw4','ys11Aq','CY1Zzxi','tuz2rfC','DgvYoIa','ywqUieK','zw50CZO','oc00lJu','ic5ZAY0','vw5PDhK','y2fWtw8','mxb4oYa','yxjLBNq','Aw4GC2e','nNb4ida','r0TduMy','ihbHzgq','u2L6zq','Bg9NBY0','BhmGDgG','qsblt1u','yNjPz2G','ihSGzgK','u3rHDhu','CMLNAhq','vgnxEfG','lJuGms4','r3rnCgK','y2vUDgu','CMvMAxG','vvjbx0S','s2nIyKq','BNqTC2K','s1L2A28','u214rMK','y29Kzq','Fdb8nhW','zsbJEd0','vwzRuwW','tKCG4Ocuia','DhfKwKW','AhPty2m','zLrTsvu','B3nWywm','nsK7ih0','igDHDgu','ugnOD04','zJmY','BMn0Aw8','yxLeB2G','y2HdB2W','ugf0Aa','CgfYC2u','u0flvvi','t1rqwge','yxjPys0','B246igW','ihrOzsa','u2fRDxi','tMnsELO','C3DPDgm','swyGCMu','vwz3rKW','twLHAwG','ig9U','FdeWFde','C3nfufi','yKnWCgi','C2fMzu0','DgvYoYa','C2HHzg8','z2jHkdi','DgvY','nJiWChG','Bxm6igm','C3rYB24','t1DXu3G','u2v0r2e','idGWChG','uMfWAwq','wMnVq3a','zsb2ywW','zu5buKC','q09HD2q','igjVEc0','odaSmtK','nsWUmdC','CI52mq','AwvSzca','EYbKAxm','kYbtCge','s2v5C3q','mZuSmJq','B2XVCJS','BguGC3q','zxrL','mcbOB28','igfWCgW','lxnPEMK','AwDUlxm','C2STBwq','CMLZAYa','mNWZFdu','lJa4ktS','lxnJCM8','zLztvMK','mtiGmJe','zePWA0O','yMvNAw4','ztOGBM8','lwjHBNi','EMXuCve','zg93BIa','icaGig8','ndHWEcK','z24Ty28','BKzxq04','Dw5PDhK','t2nnEgO','EtOGz3i','CIb2ywW','mdbTCY4','v0fttsa','DxqGDgG','yMX1CG','yNv0Dg8','lwnVBhm','Cgruuwe','yxjNzxq','DgfNtMe','zgrPBMC','B2X1Bw4','AsXZyw4','lcbJywW','Dgv4Dee','rur4sM0','zw0TDwK','D1fjzvG','mdb2DZS','qujor0C','zvj1BM4','ywqGD2G','nYWWlJG','zsbBrvG','EYbMAwW','sujwwxG','lwnHCMq','yxa6ihi','vwHMuwG','sNnUBK8','zw50zxi','lwLVxYO','CYbZChi','nxWWFdm','AfTHCMK','D3jPDgu','vvDnsYa','yM9KEq','ihjNyMe','AgvSza','zxPPzxi','zgDnDfG','mNm7Cg8','tg9JywW','oIa4ChG','CM9Szq','igzVBNq','mtjWEca','A0Lnqui','DMu7ihC','igv4Axq','z2v0sxq','whD0u3O','CZOGoha','ChvZAa','zxqGmca','AwXLzdO','ywXPz24','ihSGD2K','BgfZDeu','sgTzEg0','B3qGBwe','tvrUtMO','y0z4yK8','y3vYC28','q0fovKe','igH1CNq','BKLYuhq','yYGXmda','AtmY','B25JBgK','u2HSCw0','r29Kie0','z2v0','BMLUzW','A291CNm','AxrLBxm','ywXSihq','BM8Gy2G','ywn0Axy','AhDHANe','z3jVDw4','igjHBIa','y29TyMe','psiJzMy','zxG6mJe','C3rLCa','BtOGnNa','qLnjyvK','zMy2yJK','oYb1C2u','Bw8GDg8','rfflzhC','CMDPBI0','yw5Jzs4','uJOG','DgnOihq','Dxror3q','DhLWzq','lxDPzhq','igHVB2S','oIbZDge','AwXerM8','CgfYzw4','CdOGmta','zJzIowq','ugn0','zxzLBNq','zMLSzw4','nc00lJu','DgXPBMu','A2DYB3u','oYbJB2W','psjYB3u','sfvlDhe','zhrOoJe','Fdb8mtm','sNvTCfq','ywnRz3i','zxmGEYa','u2vSzwm','CMXHEsa','BMf2','Bw4TDge','z3jHDMK','DgL0Bgu','lxnPEMu','DMfS','B3vUDc4','DxjH','tvLUy1y','u2T6D3K','lK92zxi','EdSGyMe','BMvHCI0','ndiSlJG','te1Iq2W','r0vvA20','sNjcEgi','C2v0','wvreEMq','yMvS','B2fKzwq','r2TWCei','mcWWlJu','zw50rwW','Bgv4oYa','nsWYntu','B2reAwu','uhbquLe','D2nVwhO','AwXS','DfbSv3e','uM9xEeq','D0jSDxi','vM5fuMC','A2vizwe','C2fRDxi','BwLU','Awr0Aa','shHWzfi','BMCGzM8','vwHHz24','zIbTyxq','tNztwwC','x19tquS','C2STBM8','BYbWAwC','D2vIA2K','l3jHCgK','y0vSwxy','BMqIihm','mJu1lde','ihWGrvi','BMX5kq','y3jLyxq','BNnSyxq','uMf0zq','B3PAugq','AY1OAw4','DfjfEKW','ysGYndy','C2STC3C','AxrJAa','BgrYzw4','AxrPywW','AwrLCJO','DYGWida','Bw92zw0','Aw5KzxG','yw5LBc4','BMvJyxa','v0ftrca','Aw5Mqw0','y2HPBgq','Cg9W','z2fTzuW','mNb4ksa','y2L0EtO','icnMzMy','oYbIB3i','CIGTlxa','se5Qsw8','igfSAwC','mdSGBwK','zgTPDa','CdOGmti','u2vNB2u','rgLZywi','C2STAgK','CNq7igC','yxrLvge','zw50CW','zvbSDwC','ENziC2e','C3bSyxK','yK1uz3q','zvbSyxK','zhrOoIa','lIbuDxi','wgHtuKi','seTQyKC','wLrev2y','z3jPzc0','BNrLCI0','yvnRBeS','tM8Gu3a','qvvbzNm','zsXTB24','mIaXmK0','seLkz2G','yM90Dg8','vhz0B24','AfnnDxK','igDHCdO','AgfZ','A2v5C3q','uMvJDa','iNjVDw4','BI1SB2C','ieLZr3i','rgfTywC','CI51As4','zwfSsMW','DhLqy3q','t0zgigi','B05XEg8','vgHLC2u','y2XHC3m','Ec1OzwK','CMvZDg8','B2vSvvq','C2HVD24','AwvSza','DMC+','Bgf5ig8','C3r5Bgu','BIb7igi','C2XPy2u','oWOGica','rwfJAca','ifvxtuS','igzVDxi','C21HBgW','Dw5RBM8','ihrVCdO','ldiZocW','Bgf0zwq','B3bLBG','ChGGDwK','idmWChG','ohb4oYa','igzPBgW','ze50AuW','sw5MAw4','svLiBuW','DgvJDgK','mdSGyM8','CYbnB3y','y29SCZO','vxHHwfe','icaGica','zNvSBhm','A3ndChm','ifvUAxq','BgLNBI0','zLztvNm','mdCSmtu','Dw56zwO','CMvWzwe','zgfTywC','zsGXnta','mtu3lc4','verZC2W','BfjPCK0','DgL2zsa','Aw46ida','nJTWB2K','oIaZmNa','s05RqNy','nJaWide','BMvyBNa','CwTWvuW','nsK7iha','A3nty2e','yxK6igy','vLj5CNG','Ag9VA1a','uMvMAwW','y2fWu2G','ChG7iha','wergy2m','phn2zYa','cIaGica','AxHLzdS','BtOGmJq','zMLSBfm','zxL0u3u','ANPJy2O','Bhv0ztS','zxj5idi','uxfcyxa','ign1CNm','q291BNq','yxnLBgK','zxi6igi','igLMig0','zdOGBgK','kdaSmcW','v1vuD3i','mcuUifm','uMTVwLm','BLbSyxq','C3rYAw4','yxrPB24','B3zLCMW','mhb4oYa','C2f0Dxi','ndySmJm','B29RCYa','nhW5Fdq','s3vYDKK','ywrK','yw5LBca','ntuSlJa','Dw5KoIa','BuHRu24','BhrLCJO','CMfUz2u','vw5dCuW','uu9vr20','Bgf5oIa','ihDPzhq','BM90zs4','AwnRihm','seLswwq','zwXHDgK','ie92zxi','icbIywm','zNrLCIa','ieDLDfy','CNjVCG','sNvTCca','Dc1ZAxO','EYaTD2u','y2HtAxO','nJaWia','zgv2B0m','ig1HCMC','CMLUz3m','BMqGBwe','C2u6Ag8','Bu5luNq','v3bzCwG','CZO6lxC','yxmGBM8','tw92zw0','yxK6igC','ywWGBwu','Aw4Sihq','ltiUns0','wKftAvi','r29Kl2q','BwLKzgW','tgTkwM0','oYbKAxm','rujnzgi','y3KGB24','Aw5WDxq','Agf0igq','BMC6idq','ihbSywm','DLLRuK4','AxLfu20','ihWGC2G','zNPQBgq','v0DOzNy','vxHZwg0','u2r5weS','yLbLrMu','ywLSzwq','qMTxrum','mJqSmtC','re9Aq2S','BMDL','B2vZig4','nNb4oYa','CM0GlJq','yMX5lum','ihLVDxi','idK5osa','EwLxsfK','sLvJuwy','Bw92zvq','BcbKCMe','tu1bvuq','DMvTrLy','BguGAwy','yxa6ide','lwHLAwC','Fde2FdC','CLfiBhG','Bg9YihS','yw5Uywi','BNqGAxq','jsbUBY0','BMq6ihi','zMnZr0C','Dcb7igq','oIbJDxi','nZiZmta0B1brruzw','vuHhAhe','D0jJrKi','zMLSBfq','zgvYlxq','AwX0zxi','lwfWCgW','tgLZDa','nxb4oYa','A2v5zg8','A3nqB3m','lJv6iIa','oIbIBhu','mJiSocW','zM9YBtO','zgLZCgW','C3rbD3m','zefUtLi','DML0Eq','ChGPoYa','C2vSzwm','lwfWCgu','nMi5zci','mJu1ldi','Aw9U','BgHxze4','zwfK','lc43nsK','icaGlNm','CMzSB3C','mxb4ihi','u1LgwwS','m3W4Fdi','zMyP','nYWUmsK','lw5VDgu','odbWEcW','A2L0lxm','CM91DKy','lxrPDgW','qwrIBg8','z2DSzwq','Dc1ZBgK','DcWGCMC','igzVCIa','ELLjAwi','zxmGB24','yw1L','EYbIB3G','BM9szwm','AhPwqu0','C1vyCxi','BgfJzs0','ug9ZAxq','icaGlM0','yw5ZzM8','zg9JDw0','Dhj1zq','qM90Dg8','ugPIu0u','igrLzMe','q3vZDg8','zwfSDgG','A291CI0','Bcb7igq','AwvZlG','ide0ChG','DgGUsw4','BhvYkdi','z29K','Bg9HzgK','AK9NwwO','ELDTseC','CxvLCNK','AxnWBge','BeXXqxe','C2vpEuC','sgLOu0G','oIbUB24','AwX5oIa','rK9bCwO','AM9PBJ0','s2v5ra','mtfWEca','zw50','kc4YmIW','seDbCwi','DNL2vvm','quXVywC','CYbpsgu','veDZAg8','ywqU','qxnZzw0','igrHBwe','idrWEca','DhjVA2u','ihn0CM8','rNjHBwu','zvbPEgu','EcaWoYa','CevJq2m','yMLJlwi','B24U','AwrLCG','yJPOB3y','uvfcywO','CM9Rzs0','ihjLBg8','CMeTA28','Bwf4','u3bLzwq','DLvoze0','ChG7igi','DdOGmJG','lM1Ulxq','ls1W','C2f2zq','Afr4ALq','sKnUrLa','zs5bCha','oIa1mcu','DMLZDwe','zgLUzZO','D0DMvKm','DgvTCgW','AMXMy2u','sMDTrxK','nxW2Fda','zZOGmta','ywrKAw4','icaUBw4','ysblB3u','zcb7igi','mxW0Fdu','Aw9FnZi','yun5A1m','DhKGDMe','zw50oYa','Bejdsva','B2XVCJO','yM91BMq','s2v4Dum','EdSGAgu','tg9Hzgu','CI1Yywq','twLZyW','rgneAuG','nsKSida','oIbMBgu','qxbWBhK','y3jLzw4','C2HVB3q','zwf0CYa','zMLSBcW','Efnjzge','y29UDgu','ndGZnJq','vxvdwuG','ywXSig8','AKHzrui','zhrXC2u','DNnQwuu','zxH0','B1HsyKy','yxjHBMm','lZ48l3m','teHLu0K','y2LHse0','BNrLCJS','CMuGkfm','m2r5t05uDG','rfPXsgq','BNbdB3u','CwXjt0i','qMXVy2S','tMn6quu','zNbZ','sgLKzxm','ztSGD2K','lc40nsK','ihSGCge','ywn0A0S','ywnPDhK','zvjHDgu','yMeOmJu','Dxm6idi','DhjHBxa','B3jZige','y2TLzd0','C2v0x3q','Bw4TBg8','AwDwwwu','ig1HEsa','zYb7igm','ztOGmtm','CM9Wlwy','BhvLCY4','ie9olG','Bg93oIa','CYbHBgW','DxjLihq','BYb0Agu','nxmGy3u','C3bSAxq','C2v0vhi','DNj1ruC','uxLssKu','ys1JAgu','Bgv4oIa','zxjYB3i','tu9ersa','y3K9iJe','oIb0CMe','BfjHDgK','zwXK','BNrezwy','Dg9WoIa','B3G9iJa','DgLMEs0','iezPCMu','u2nHBgu','zMLLBgq','B1jLy28','B3b0Aw8','uM9hCw0','ihjLy28','BxjNAgC','C0XtA0W','DdOGoha','yxKGB24','zwfKEs4','oIbYAwC','B2LS','igjHBM4','y2fSBa','D2LKDgG','BgW+','BgfAqLq','EsbKzwy','igvUDgK','CIbHzhy','CKTpwwG','oIbWB2K','zxjZ','icaGic4','DMLZAwi','ig9Wywm','B25TB3u','DMTYBvG','z2LMEq','v2LWzsa','AxvZoIa','wMP2yK4','DhjPA2u','CgvHDcG','Dg9WoJe','Bg9YoIa','mc41','AxrPyxq','AguGDxm','mtSGBwK','EMu6ide','Ae1Sre8','v3jHCha','AhvTyIa','zwqGyw0','DhrPBMC','q0XcseO','iL0GEYa','z2v0q28','zg93BG','ifTfwfa','zcWGi2y','ywjSzs0','Bw4TDg8','vfDLwM8','y29SB3i','C2v0qxq','zguSihq','ENfyEgm','oYbTAw4','zciVpJW','tNztExm','zgvZ','y2HLy2S','rvfxD3a','BwrLC2m','BMvS','ignHBgm','nJyYmtm4nevJB2nWva','AgfPCG','ihn0AwW','zxj2zxi','mcWWlJC','icaGyMe','mc41o3q','Axr5oIa','ns00idC','idaGmca','zgTlyxy','ig5VBMu','BIb7igy','yxvSDa','mtjWEdS','BgfIzwW','Awr0AdO','Aw9UoMy','lwL0zw0','r2rIBwK','BgHjrwG','tfPxvMm','zgvZyW','i2zMzG','Dg5LC3m','BNrLBNq','yMfJA2C','igrPC3a','zxjSyxK','yxHKDem','z3jHzgK','sw5Zzxi','DxmGywm','EdSGz2e','ihWGBw8','Bg9Y','D3vWuey','lc4WnsK','AKzzAge','ihWGz2e','A3mGyxi','BgXIyxi','CKnQuM0','vLLdr20','ieaG','yMLtENm','C2STy28','C2STCMe','zMLSBd0','AcaTidq','BsbYAwC','B3nLihS','B3vUzdS','pc9ZBwe','B2nRoYa','vw9VwuO','nJu4odyXDLz4Bfr0','zs1PDgu','C3rHCNq','zwLUC3q','zxiGC2W','DhLSzq','wffMEK8','yM9Yzgu','mhG2mda','lwXPBMu','B3zLCIa','C2HPzNq','ksaWida','ideWChG','oYbMBgu','uNvUDgK','ic8GDMe','mNWXFdu','DxjZB3i','z2v0qxq','ChG7igG','sxnxufe','t3bMDxC','ChG7ihC','C3rYB2S','sMLUwMy','ltjWEdS','DMfSDwu','AY1IDg4','zg93oIa','zNHYDeq','iIbZDhi','igfUzca','lxrVCca','ihbVAw4','s3Dhr1e','zuvSzw0','y2TNCM8','kYbmtui','q2nuzhq','sfrnta','z2H0oIa','CMvSEsa','Ag9VA3m','igfIC28','ldeWnYW','AMzSAeC','nZiXmJm1C2fHDwv6','AxLsv1K','icaG','u2fMzxq','igjVCMq','Dw5Kzwq','sK9iBKe','BhKGkhi','lxjHzgK','vejJs3O','ide7ig0','CM9Rzxm','CLjICgW','CMfKAxu','EKnQEfa','B3nPDgK','yxjJ','zgL1CZO','yuTVDxi','mZaWoda0ngzwrvDWsW','CgfKzgK','mte5nZbYwvrnt0i','yuTpvwi','C2STC2W','ywiUywm','BgLUzw4','mJm4ldi','r2rgzxC','v2LKDgG','B29Rihi','B3uU','zcbNCMu','vMj6q2u','B3zLCMy','iKLUDgu','C2v0ida','ywrIBg8','yY0XlJu','Cg9ZAxq','oIbJzw4','BvLztwO','zJDHotm','ig5LDMu','ldi1nsW','ihSGzMW','wMvYB2u','CMfUy2u','s1zivMe','ChG7igy','oIaXms4','EYbIywm','i2zMnMi','uwTHvxO','B2STCMu','DhK6ic4','s2v5uW','r1D3rKm','CffuwvC','y3nZvgu','mdSGy3u','wMfcAwC','DMXMDM0','u1HTsum','msWUmZy','Aw50zxi','BYb7igq','zM9UDa','CMfWAwq','vu1oww8','BI1TywK','CMLKoYa','ywrKrxy','tLzYyvG','B3C6ida','psjTBI0','Aw5Zzxq','ANvTCfa','u0HItwW','icmYmJe','EwznBe0','oIbPBMG','BeHMBK8','ihSGzM8','rwrbweq','B25Lige','DgXL','Bw4TAa','u2DttM4','Dg9W','DwDLzMe','D2fYBG','BNnWyxi','nZaWia','AxmGyNu','y2XLyxi','AY1Jyxi','CJOGi2y','AfrpD2W','zMXLEdO','AgvPz2G','nIa2Bde','D2L0Aca','x19ZywS','r01ICgO','idnWEdS','EfbpBwi','mdi1ktS','DhmGCgW','BI13Awq','txPMs24','BhrYvhi','BMq6ihq','C0j3Ahy','AguGzNi','B3i6iha','Be1VDgK','iL06oMe','y2f0','lMXHC3q','yxr0ywm','runHqMy','ELDwDMS','yxj0lG','C2STy3q','Bw4TDgK','A2v5Dxa','lxnHBNm','vfLMz1u','C2STBwi','idjWEdS','s2v3seu','FqOGica','zuTZwM4','nsaWlti','ihrYyw4','B3i6ihi','sLPzC1i','Cu55CuK','ienquW','qNvUBNK','zw4GDg8','AvbmsNi','B3C6igK','Eefmwgi','Dg9Y','Cw5kzgq','iM5VBMu','veTYCeC','uujMte4','ig9YigS','CZOGyxu','y0z5wwC','y2SP','y2LYy2W','idi0iJ4','zgvYlxi','zxzLCNK','zvzHBhu','A2uTBgK','y3jLBwu','DNbSvMG','Cg9PBNq','u2TPChm','EdSGywW','A2uTD2K','z2uUiei','idqTnc4','DZOGAw4','qunuAYa','DdOGnZa','yxb0Dxi','BgvUz3q','zxG7ige','oYbVDMu','tKCGlsa','yxHIBgS','BgvMDa','zw50tgK','icaUC2S','EgXMDKi','oYbHBgK','Bg9JAW','BNLUC04','EdSGCge','ENrLsu4','vuPksvO','ugzyBNm','B246ihi','D2HLCMu','Aw5Uzxi','oYbMB24','igq9iK0','D0nVBg8','lxnLCMK','v3bLCfi','q0PSAuy','CMvSB2e','DdOXmda','Dg9Wrgu','Ag9VA0C','BwvsDw4','Aw5NoIa','wMvozuu','oIbKCM8','yxv0BY0','C3rVCfa','B25JAge','B3vUDgu','Dg9Nz2W','Ahq6idi','tgvNAw8','B3vUzdO','zwjRAxq','zwLNAhq','wvPYtNu','Dgv4Dei','nYWWlJm','q1H2ExK','rgfUz2u','B290zxi','zw1ZoIa','seLoy1u','zhbY','mcWWlJy','CuvZAhe','t0revKm','te1c','idaGmJq','z01yBMK','CgD6Cw4','DgLVBJO','C2vLBNq','B2XPBMu','EcbYz2i','Ag9VA0m','ocWYndi','igj1AwW','qKL2Axu','CMvHzey','lxnSAwq','tK9tDhq','AxrPB24','CNnVCJO','Axb0kq','rM9Yy2u','oIa2nta','vxH2B3i','ywqGEYa','BNfoqum','BNnPDgK','Ad0ImIi','AwDODdO','yxbWzw4','B3bHy2K','vgLJAW','oJiXndC','DMCGEYa','DfDUCg0','BJOGy28','i2zMzJS','BIb0Agu','CvvJsuq','Aw5JBhu','BgLKzxi','BMq6icm','DgvYo3C','BMu7ihm','ihDOAwm','DxjDifu','se5kCue','ywX0Ac4','Avrbsw8','zgvSzxq','CM9WywC','v3bhDhK','igzSzxG','BgLJyxq','sfHxrvm','lMLVig0','zMLSBa','BKPQBKG','lMrSBa','zw1LBNq','Awq7iha','BI5MAxi','B250zw4','B25SEsW','t0ThD0S','uK1c','BxKGC2u','AxmGAg8','DgnOoJO','BMC6igi','zunVEhC','iezquW','tvPhz3i','zxjPDdS','yMHVCa','sKXiC0G','lc4WocK','s3vWsgC','EdSGBwe','ih0kica','DMvYBge','ysGYntu','ChGGmdS','zdSGy28','ywDLigq','BMnL','ANz6z1O','ntuSmJu','mdSGFqO','zM9YBxm','ktSGFqO','sw5ZDge','mcWWlJG','ztSGyM8','zwfKige','BI1JBg8','Bw91C2u','lM1Ulxa','ohb4ksK','D2fPDgK','C2fMzq','AcbVBMu','DMLLD0i','EtOGzMW','C2STyNq','ys5RB3u','DxDTAW','EMTqsgK','BM9Uzq','iNrYDwu','tgLxCuO','D2vPz2G','BwvZC2e','igvSC2u','C1zwBfK','Cg9Uj3m','idiWmg0','DKvkuLu','zg93kda','vuvXzey','nJy1mffWyxv3BW','r2rcsNi','yMTPDc0','CMvHzhK','CMDIysG','wKvlrwq','z29KrgK','BhrOige','q0PdCxO','C3rLBMu','yNrUoMG','ywqGDg8','mNmSigi','Aw9UlLq','zxi7igC','idfWEca','Bw9fEha','zw5HyMW','jsK7ic0','De5Vzgu','DtmY','DgG6idi','vg5Qthy','nJq2o2m','Dhm6yxu','iJeYiIa','zM9UDc0','zvrHA2u','B3jKzxi','sLnRuuu','igjHy2S','igP1Bxa','EeX4yu0','B2TgtgW','BerPzsW','mtySmc4','ldePoWO','DMvTzw4','BI1PDgu','nxm0idi','Aw9F','lIbvC2u','CZOGy2u','BhvTBJS','z2fQEK4','ugjIqwe','ywrPDxm','rvDjrgy','CYb3B24','sgvPz2G','iJeUnsi','DxjDig0','z3jPzdS','B3nL','zIXZExm','khjLBg8','CI1ZzwW','lc40ktS','sNfmBw4','v2vItw8','y3jVC3m','CMrLCJO','zvKOmtG','DdOGnJa'];_0x4ac9=function(){return _0x2d84c7;};return _0x4ac9();}
