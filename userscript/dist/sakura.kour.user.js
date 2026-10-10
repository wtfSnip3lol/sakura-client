// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.9.8
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
(function(_0x1905f8,_0x1e2d0b){var _0x6b10fa=_0x5082,_0x4b42e0=_0x1905f8();while(!![]){try{var _0x183ba0=parseInt(_0x6b10fa(0x434))/(-0x1adf*-0x1+-0x13b9+-0x3b*0x1f)*(-parseInt(_0x6b10fa(0x1a3))/(0x1*0x20a1+-0x1*0x1da5+-0x2*0x17d))+parseInt(_0x6b10fa(0x144))/(0x1*-0x7c7+-0x15ba+-0x761*-0x4)*(parseInt(_0x6b10fa(0x29f))/(-0x5f*-0x4a+0xbe9+-0x275b))+parseInt(_0x6b10fa(0x227))/(0x3a9*0x2+-0x24d6+0x1*0x1d89)*(-parseInt(_0x6b10fa(0x465))/(-0x6c9+-0x1c56+0x2325))+parseInt(_0x6b10fa(0x15a))/(-0x1*0x19c4+0xc1f*-0x1+0x17*0x1a6)*(parseInt(_0x6b10fa(0x5c0))/(0x903+-0x23be*-0x1+-0x2cb9))+parseInt(_0x6b10fa(0x3cf))/(-0x2486*-0x1+0x2330+-0x47ad)+-parseInt(_0x6b10fa(0x3d7))/(0x18ea+-0x1d65+-0x59*-0xd)*(parseInt(_0x6b10fa(0x189))/(-0x4*0x644+0x16*-0x107+0x2fb5))+parseInt(_0x6b10fa(0x349))/(0x8*-0x3d9+0x33*0xa9+-0x2d7);if(_0x183ba0===_0x1e2d0b)break;else _0x4b42e0['push'](_0x4b42e0['shift']());}catch(_0x302e0e){_0x4b42e0['push'](_0x4b42e0['shift']());}}}(_0x2b0a,-0x2b*0x15bb+0x1f762+-0x1*-0x3e849),((()=>{'use strict';var _0xd126cc=_0x5082,_0x579e3b={'mpnSi':function(_0x3fae51,_0x346cdd){return _0x3fae51===_0x346cdd;},'KuzBp':_0xd126cc(0x68b),'yySEe':_0xd126cc(0x6a7)+'MODE\x20'+_0xd126cc(0x643)+_0xd126cc(0x4a1)+'only,'+_0xd126cc(0x22e)+'ooks\x20'+'(relo'+_0xd126cc(0x65a)+_0xd126cc(0x473)+')','ihgSw':'loade'+'d','mTlGm':_0xd126cc(0x472)+'ng','RecaL':_0xd126cc(0x2ed),'cfMbf':'\x20|\x20mo'+'vemen'+'t\x20','fsRdl':function(_0x3a96e1,_0xcaf9d){return _0x3a96e1!==_0xcaf9d;},'RYuvL':_0xd126cc(0x3eb),'YGeyr':_0xd126cc(0x6a3)+'wn','gcqyI':function(_0x5031ed,_0x3df9d3){return _0x5031ed+_0x3df9d3;},'njAUW':function(_0x56a0fa,_0x41a88f){return _0x56a0fa(_0x41a88f);},'bsjzR':'switc'+'h','WEHzo':_0xd126cc(0x672)+'n','GAiTo':function(_0x240c1b,_0x4e2108){return _0x240c1b!==_0x4e2108;},'BhDuB':_0xd126cc(0x1b7),'fbFrW':function(_0x27f141,_0x3f690b){return _0x27f141(_0x3f690b);},'zWLwo':function(_0x2d34e6,_0x2ec5fc){return _0x2d34e6>_0x2ec5fc;},'khqWp':_0xd126cc(0x3cb),'HUoQZ':function(_0x19273b,_0x5df672,_0x8b5c68){return _0x19273b(_0x5df672,_0x8b5c68);},'cpBHb':_0xd126cc(0x2e4),'jxhNG':'god','xRLgD':function(_0x524ace,_0x41905a,_0x53aa1a){return _0x524ace(_0x41905a,_0x53aa1a);},'QlfuN':function(_0xe8a35e,_0x349b2f){return _0xe8a35e!==_0x349b2f;},'MCLgN':function(_0x7a3de2,_0x424217,_0x342ef4,_0x19a723,_0x5e50b0){return _0x7a3de2(_0x424217,_0x342ef4,_0x19a723,_0x5e50b0);},'TNWre':_0xd126cc(0x3f0)+_0xd126cc(0x1da)+_0xd126cc(0x5a7)+_0xd126cc(0x2f7)+_0xd126cc(0x121)+_0xd126cc(0x3a8),'ycuRD':function(_0x4539fc,_0x3d2c29){return _0x4539fc!==_0x3d2c29;},'vrHgl':_0xd126cc(0x696)+_0xd126cc(0x141),'ykDIO':'CANVA'+'S','ueJJU':function(_0x40386b,_0x2fbf84){return _0x40386b(_0x2fbf84);},'EYUJX':function(_0xa46850,_0x1bee15){return _0xa46850!==_0x1bee15;},'DhHvv':function(_0xa2d44e,_0x2c5cd3){return _0xa2d44e<_0x2c5cd3;},'PDbKJ':function(_0x184eac,_0x3a4cf3){return _0x184eac===_0x3a4cf3;},'gvqkQ':function(_0x588578,_0x35b817,_0x53f3de,_0x5c166d,_0x50010f){return _0x588578(_0x35b817,_0x53f3de,_0x5c166d,_0x50010f);},'NQNzu':'f32','kahXD':function(_0x59db06,_0x52695e,_0x112cf7,_0x3ebe00,_0x73c5c5){return _0x59db06(_0x52695e,_0x112cf7,_0x3ebe00,_0x73c5c5);},'vpMkv':function(_0x236663,_0x1fb1f8,_0x37cfd1,_0x449279,_0x3c2c79){return _0x236663(_0x1fb1f8,_0x37cfd1,_0x449279,_0x3c2c79);},'ImfkJ':function(_0x456e65,_0x276244){return _0x456e65===_0x276244;},'nkwjW':'SmaYy','lUGPS':_0xd126cc(0x556),'EBBqB':_0xd126cc(0x5d4),'pHzyU':_0xd126cc(0x1e6),'jiLfd':_0xd126cc(0x15f)+_0xd126cc(0x63a),'vMwas':function(_0x5b3109,_0x2f85df){return _0x5b3109!==_0x2f85df;},'AvnSD':_0xd126cc(0x579),'DMIZb':'efomA','bsxQM':function(_0x31c494,_0x225a6d){return _0x31c494+_0x225a6d;},'VdPst':_0xd126cc(0x3a1),'icMzj':function(_0x110a79,_0x74fb31){return _0x110a79+_0x74fb31;},'LmTmJ':function(_0x1ac469,_0x523c94,_0x60a322,_0x1622b8,_0x1d7310){return _0x1ac469(_0x523c94,_0x60a322,_0x1622b8,_0x1d7310);},'IlMrt':function(_0x1edcca,_0x4051c1){return _0x1edcca!==_0x4051c1;},'YisEU':'keydo'+'wn','eQXoA':'mouse'+_0xd126cc(0x591),'kTlNj':_0xd126cc(0x466),'JVerv':_0xd126cc(0x237),'FwJjO':_0xd126cc(0x2b6),'TLkaS':function(_0x223628,_0xe93ed9){return _0x223628!==_0xe93ed9;},'OZWsX':_0xd126cc(0x298)+_0xd126cc(0x315)+_0xd126cc(0x346)+'|3','xxVaz':function(_0x4f22d4,_0x560661){return _0x4f22d4===_0x560661;},'hAVGO':function(_0x7ba701,_0x26608a){return _0x7ba701*_0x26608a;},'IqHWH':function(_0x2f4bb3,_0x31249a){return _0x2f4bb3-_0x31249a;},'DKzdm':function(_0x38027b,_0x889df3){return _0x38027b/_0x889df3;},'VHjpw':function(_0x98dd44,_0x1131fe){return _0x98dd44-_0x1131fe;},'rYnQg':function(_0x29c377,_0x4840b4){return _0x29c377===_0x4840b4;},'GqvvO':function(_0x1d7163,_0x257c86,_0x30252d,_0x347373,_0xdd000a,_0x2634e2,_0x414f99){return _0x1d7163(_0x257c86,_0x30252d,_0x347373,_0xdd000a,_0x2634e2,_0x414f99);},'XiKQN':function(_0x2657ea,_0x43e0bd){return _0x2657ea+_0x43e0bd;},'CZzdX':function(_0x17fb46,_0x478698,_0x49cc47,_0x1d97aa,_0x2fe0bb,_0xddd794,_0x41d1b9,_0x4a807f){return _0x17fb46(_0x478698,_0x49cc47,_0x1d97aa,_0x2fe0bb,_0xddd794,_0x41d1b9,_0x4a807f);},'xtrLG':_0xd126cc(0x62f),'xqkpq':_0xd126cc(0x4ff),'Tgxph':_0xd126cc(0x3a1)+'3','urTnT':'\x20CPS','yJdIj':function(_0x142321,_0x57325b){return _0x142321+_0x57325b;},'OcMjQ':function(_0x3cbc70,_0x47db1b){return _0x3cbc70/_0x47db1b;},'VbVsr':function(_0x263f92,_0x16fab8){return _0x263f92*_0x16fab8;},'AjmSd':function(_0x510e43,_0x173e39){return _0x510e43*_0x173e39;},'CUKeR':function(_0x38c157,_0x4881eb){return _0x38c157-_0x4881eb;},'rHStc':function(_0x302eab,_0x30523b){return _0x302eab-_0x30523b;},'CKrLg':_0xd126cc(0x48b)+_0xd126cc(0x4f4)+_0xd126cc(0x4a5)+'e…','nRJtq':_0xd126cc(0x35f)+_0xd126cc(0x3c0)+_0xd126cc(0x42c)+_0xd126cc(0x373)+')','ZaKsK':'xXYqZ','KkoCn':'3|1|4'+_0xd126cc(0x153)+_0xd126cc(0x154),'IpBkp':_0xd126cc(0x5b6),'CRyMv':'sk-ra'+_0xd126cc(0x46a),'gXqqu':_0xd126cc(0x182)+'ider','bKFDm':'span','vTYUM':_0xd126cc(0x592)+'l','nHqfj':_0xd126cc(0x487)+'n','UCapS':'sk-no'+'te','XpJnt':'\x20err','qxYyL':'SAFE\x20'+'MODE\x20'+'—\x20ove'+_0xd126cc(0x4a1)+_0xd126cc(0x2ce)+_0xd126cc(0x22e)+_0xd126cc(0x6a5)+_0xd126cc(0x62a)+_0xd126cc(0x65a)+'\x20exit'+')','XeGZl':function(_0x31010f,_0x4006c9){return _0x31010f+_0x4006c9;},'feAkB':_0xd126cc(0x4f5)+'bound'+'\x20','RHLhX':function(_0x1990a0,_0x1e460b){return _0x1990a0+_0x1e460b;},'dUBDR':function(_0x49e4c8,_0x538938){return _0x49e4c8+_0x538938;},'DCrwt':'noRec'+_0xd126cc(0x178),'IIBzr':_0xd126cc(0x65c),'SaFSg':_0xd126cc(0x20d),'qtUon':_0xd126cc(0x5bf)+_0xd126cc(0x4e7)+_0xd126cc(0x13e),'hUdOv':_0xd126cc(0x1dd)+_0xd126cc(0x514),'jAmHn':_0xd126cc(0x4d3)+_0xd126cc(0x166),'zujeu':_0xd126cc(0x164)+'e','QdUaC':'Abwsu','tjXRo':function(_0x26d8b4){return _0x26d8b4();},'jMIxf':_0xd126cc(0x3ab)+'s\x20spr'+'ead\x20a'+_0xd126cc(0x148)+'xes\x20a'+_0xd126cc(0x2b0)+_0xd126cc(0x3ac)+_0xd126cc(0x5c5)+_0xd126cc(0x3ef)+_0xd126cc(0x2eb)+'ery\x202'+_0xd126cc(0x663),'PjufS':'Overw'+_0xd126cc(0x1aa)+_0xd126cc(0x350)+_0xd126cc(0x5f3)+_0xd126cc(0x242)+'\x20dama'+_0xd126cc(0x3c3)+'annab'+_0xd126cc(0x1b9)+_0xd126cc(0x631)+'serve'+'r\x20val'+_0xd126cc(0x69d)+'s.','qifNt':function(_0x418706,_0x4041e4,_0x303918,_0x265148){return _0x418706(_0x4041e4,_0x303918,_0x265148);},'HtIWl':'Speed','GTwFP':_0xd126cc(0x1a7)+'s\x20all'+_0xd126cc(0x3b7)+'\x20Move'+'ment\x20'+'speed'+'\x20limi'+_0xd126cc(0x289)+'us\x20ac'+_0xd126cc(0x508)+_0xd126cc(0x11b)+'.','yERyC':_0xd126cc(0x537)+'\x20defa'+_0xd126cc(0x1e0),'aJDbb':function(_0x588e5b,_0x3d6c72,_0x3ed4d9,_0x36a5b6,_0x5c8ead,_0x4c4cfa){return _0x588e5b(_0x3d6c72,_0x3ed4d9,_0x36a5b6,_0x5c8ead,_0x4c4cfa);},'TiihV':_0xd126cc(0x403)+'/\x20Gra'+_0xd126cc(0x267),'hDTYf':function(_0x560524,_0x190b3e){return _0x560524!==_0x190b3e;},'GDOFa':_0xd126cc(0x403)+'%','SYqXn':_0xd126cc(0x433)+_0xd126cc(0x62e)+'oaty','oMKle':function(_0x4fe46a,_0x113f8d,_0x4f7d30,_0x3f6102,_0x44682a,_0x2bb7ab){return _0x4fe46a(_0x113f8d,_0x4f7d30,_0x3f6102,_0x44682a,_0x2bb7ab);},'kVIgP':'Zeroe'+'s\x20Mov'+'ement'+'.last'+_0xd126cc(0x4c5)+'ime\x20s'+'o\x20the'+_0xd126cc(0x68d)+'\x20cool'+_0xd126cc(0x1ca)+_0xd126cc(0x43e)+_0xd126cc(0x1e3)+'ies.','NyBXh':function(_0x5cc9c7,_0x13861a,_0x1a7129,_0x3731ba,_0x59a8e0,_0x4f13cb){return _0x5cc9c7(_0x13861a,_0x1a7129,_0x3731ba,_0x59a8e0,_0x4f13cb);},'wlzuW':'WASD\x20'+'+\x20LMB'+'/RMB\x20'+_0xd126cc(0x49e)+_0xd126cc(0x41d)+_0xd126cc(0x32a)+'.','YTYQn':_0xd126cc(0x5e6)+'m\x20lef'+'t','KhMHH':_0xd126cc(0x5e6)+'m\x20rig'+'ht','dWibC':_0xd126cc(0x2f4)+'middl'+'e','EYNaL':'Size','Tdzib':function(_0x205780,_0x5ce402,_0x3d15ab,_0xa3ecb1,_0x17622a,_0x4911bd){return _0x205780(_0x5ce402,_0x3d15ab,_0xa3ecb1,_0x17622a,_0x4911bd);},'zNxOd':function(_0x3c4069,_0xd09ad,_0x3b4f8e,_0x3699e7){return _0x3c4069(_0xd09ad,_0x3b4f8e,_0x3699e7);},'woEfC':function(_0x5417f0,_0x163f22,_0x3efb12){return _0x5417f0(_0x163f22,_0x3efb12);},'mMUNV':_0xd126cc(0x5fb)+'emy\x20c'+_0xd126cc(0x693)+'r:\x20th'+'is\x20bu'+'ild\x20h'+_0xd126cc(0x323)+_0xd126cc(0x3f1)+_0xd126cc(0x657)+_0xd126cc(0x5a3)+'ers\x20t'+_0xd126cc(0x3fd)+_0xd126cc(0x1dc)+_0xd126cc(0x12e),'wfOgu':_0xd126cc(0x2db)+_0xd126cc(0x58f)+'-io_*'+_0xd126cc(0x53b)+'er\x20sl'+'ots.','YTPWg':_0xd126cc(0x4b1)+_0xd126cc(0x4d1)+_0xd126cc(0x342)+_0xd126cc(0x5ca)+'ad\x20wh'+'en\x20to'+'ggled'+'.','fmEAq':function(_0x12c3d1,_0x2fda29){return _0x12c3d1(_0x2fda29);},'hFisy':_0xd126cc(0x132)+'es\x20on'+_0xd126cc(0x5ca)+_0xd126cc(0x530)+'f\x20mat'+_0xd126cc(0x48a)+'load\x20'+_0xd126cc(0x4db)+'fe\x20mo'+_0xd126cc(0x209)+_0xd126cc(0x15b)+'eeze\x20'+'is\x20ho'+_0xd126cc(0x61e)+'lated'+'\x20—\x20te'+_0xd126cc(0x3d5)+'\x20the\x20'+_0xd126cc(0x2f9)+_0xd126cc(0x482)+'ied\x20c'+'ount.','shJAv':'Each\x20'+_0xd126cc(0x2e6)+'nstal'+_0xd126cc(0x2f5)+_0xd126cc(0x634)+_0xd126cc(0x398)+_0xd126cc(0x366)+'\x20for\x20'+_0xd126cc(0x3c9)+_0xd126cc(0x15d)+'page\x20'+'load.'+'\x20ALL\x20'+'OFF\x20b'+'y\x20def'+_0xd126cc(0x413)+_0xd126cc(0x14a)+_0xd126cc(0x488)+_0xd126cc(0x39d)+'hat\x20d'+_0xd126cc(0x68c)+'ot\x20ma'+_0xd126cc(0x4f7)+_0xd126cc(0x1ab)+'al\x20me'+'thod\x20'+'throw'+_0xd126cc(0x622)+'nctio'+_0xd126cc(0x22f)+_0xd126cc(0x145)+_0xd126cc(0x5b1)+_0xd126cc(0x337)+'\x27\x20the'+'\x20mome'+_0xd126cc(0x651)+_0xd126cc(0x264)+'alled'+_0xd126cc(0x450)+_0xd126cc(0x437)+'m\x20on\x20'+'one\x20a'+'t\x20a\x20t'+_0xd126cc(0x34a)+_0xd126cc(0x2da)+'d,\x20an'+'d\x20see'+'\x20whic'+_0xd126cc(0x60a)+_0xd126cc(0x5c5)+_0xd126cc(0x2f1)+'d\x20cho'+_0xd126cc(0x255)+'n.','SoeVk':'god\x20('+_0xd126cc(0x609)+'th.In'+_0xd126cc(0x56f)+'eTake'+'Healt'+'h)','CRWSQ':function(_0x2d37f3,_0x3c0c70,_0x2b03cc){return _0x2d37f3(_0x3c0c70,_0x2b03cc);},'oowAi':'godDi'+'e\x20(OH'+_0xd126cc(0x4fd)+_0xd126cc(0x300)+_0xd126cc(0x266),'MfGAZ':function(_0x196db8,_0x383a0d,_0x441cac){return _0x196db8(_0x383a0d,_0x441cac);},'hkxKI':_0xd126cc(0x19b)+_0xd126cc(0x2d6)+_0xd126cc(0x195)+_0xd126cc(0x143)+_0xd126cc(0x19d)+'\x20IsGr'+_0xd126cc(0x1e4)+'d)','yZxXX':_0xd126cc(0x1d8)+'les\x20C'+_0xd126cc(0x5ee)+_0xd126cc(0x23b)+_0xd126cc(0x67e)+_0xd126cc(0x28c)+_0xd126cc(0x59c)+'rtup\x20'+_0xd126cc(0x1eb)+_0xd126cc(0x543)+'tecti'+_0xd126cc(0x2ca)+'\x20Keep'+_0xd126cc(0x40e),'voETo':'Dange'+'r','wcGXU':_0xd126cc(0x459),'RPZYK':function(_0x58fa73,_0x3cdafd){return _0x58fa73+_0x3cdafd;},'cEbua':'\x20|\x20sh'+'ooter'+'\x20','CmJvC':_0xd126cc(0x595)+_0xd126cc(0x49a),'ggEjI':_0xd126cc(0x2d0),'AqWtr':'heade'+'r','MQCAi':'mn-su'+'b','Okynn':_0xd126cc(0x491)+'ose','BtIrl':'Close','pTnva':_0xd126cc(0x1db)+'ls','Pjikh':_0xd126cc(0x5c9)+_0xd126cc(0x60b)+_0xd126cc(0x329),'biFiH':function(_0x11328b,_0x122c5d){return _0x11328b+_0x122c5d;},'Pbjzq':_0xd126cc(0x666)+'l>','ZgfOa':'</sma'+_0xd126cc(0x3b5),'ESjlY':function(_0x4cee2c,_0x31bb68,_0x1342e3){return _0x4cee2c(_0x31bb68,_0x1342e3);},'elyvm':_0xd126cc(0x35f)+_0xd126cc(0x3c0)+'07,15'+_0xd126cc(0x2d4)+'5)','CTXBO':_0xd126cc(0x35f)+_0xd126cc(0x3e7)+_0xd126cc(0x21a)+'0,0.8'+')','mNiPJ':'cente'+'r','kcWTQ':'px\x20ui'+'-sans'+'-seri'+_0xd126cc(0x400)+_0xd126cc(0x45f)+_0xd126cc(0x5c8)+_0xd126cc(0x66d)+'if','BNKtx':_0xd126cc(0x296),'NNseg':function(_0x1d17fc){return _0x1d17fc();},'ODNIH':_0xd126cc(0x575),'mBPlE':_0xd126cc(0x3f7),'kHcqk':_0xd126cc(0x2cc)+'t','GLYLe':_0xd126cc(0x62b),'HkZcq':_0xd126cc(0x515),'uwciy':_0xd126cc(0x163),'XrEpb':'sk-md'+'esc','LgiNb':_0xd126cc(0x686)+'rd-ti'+_0xd126cc(0x469),'maLVk':_0xd126cc(0x219)+'s','dhbLp':_0xd126cc(0x479)+'ion:f'+_0xd126cc(0x5d7)+_0xd126cc(0x243)+':0;z-'+_0xd126cc(0x463)+_0xd126cc(0x55b)+'48364'+_0xd126cc(0x4e8)+_0xd126cc(0x5dd)+_0xd126cc(0x5f6)+_0xd126cc(0x43f)+'e;','oSxcK':_0xd126cc(0x25a),'tvbSX':'dqzNE','gmncr':'safe','myXxg':'posit'+_0xd126cc(0x1ed)+_0xd126cc(0x5d7)+_0xd126cc(0x5e3)+'2px;r'+_0xd126cc(0x61f)+'12px;'+_0xd126cc(0x1d5)+'ex:21'+_0xd126cc(0x3d4)+'646;c'+_0xd126cc(0x687)+':poin'+'ter;w'+'idth:'+_0xd126cc(0x410)+'heigh'+_0xd126cc(0x431)+_0xd126cc(0x380)+_0xd126cc(0x25d)+'0.5;t'+_0xd126cc(0x228)+_0xd126cc(0x43a)+'opaci'+_0xd126cc(0x54f)+'2s;po'+_0xd126cc(0x1af)+_0xd126cc(0x249)+_0xd126cc(0x59b)+'to;fi'+_0xd126cc(0x5f1)+'drop-'+_0xd126cc(0x55a)+_0xd126cc(0x519)+'\x204px\x20'+_0xd126cc(0x35f)+'255,1'+'07,15'+'7,0.7'+'))','aTyLS':_0xd126cc(0x130)+'c6','XcHNx':_0xd126cc(0x1c0)+'9d','lmCJa':_0xd126cc(0x37a),'ueZiq':_0xd126cc(0x609)+'th','NANnb':_0xd126cc(0x45d)+'ateTa'+'keHea'+'lth','AAoqX':_0xd126cc(0x4cc),'UeLLU':_0xd126cc(0x5fa)+'ve','zFgFw':_0xd126cc(0x263)+'unded','Oufbs':_0xd126cc(0x3f0)+'ra-ko'+_0xd126cc(0x54a)+'WMK\x20i'+'nit\x20f'+_0xd126cc(0x2d5)+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0xd126cc(0x670)](location['hostn'+_0xd126cc(0x1fc)]||''))return;if(window['__SAK'+_0xd126cc(0x45e)+'OUR__'])return;window[_0xd126cc(0x440)+_0xd126cc(0x45e)+'OUR__']=!![];var _0x2b2cec=_0xd126cc(0x1c0)+'9d',_0xfb0e72=_0x579e3b[_0xd126cc(0x5d6)],_0x4fa1a5={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x579e3b[_0xd126cc(0x506)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x53f898={..._0x4fa1a5};try{Object['assig'+'n'](_0x53f898,JSON[_0xd126cc(0x36e)](localStorage[_0xd126cc(0x19c)+'em']('sakur'+_0xd126cc(0x2ef)+_0xd126cc(0x5de))||'{}'));}catch(_0x41b383){}function _0x3c9880(){var _0x4fb2e2=_0xd126cc;if('DUJaV'!==_0x4fb2e2(0x305))_0x1e8e72[_0x4fb2e2(0x407)+'ill']=_0x34e006,_0x12b45a();else try{_0x579e3b[_0x4fb2e2(0x137)](_0x579e3b[_0x4fb2e2(0x2f2)],_0x4fb2e2(0x5d3))?_0x308ca9['body'][_0x4fb2e2(0x175)+'dChil'+'d'](_0x36e0d8):localStorage[_0x4fb2e2(0x4e5)+'em']('sakur'+'a.kou'+_0x4fb2e2(0x5de),JSON['strin'+_0x4fb2e2(0x5ba)](_0x53f898));}catch(_0x4444d4){}}var _0x14ded4={'uwmk':!!window['Unity'+_0xd126cc(0x180)+_0xd126cc(0x28e)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x53f898[_0xd126cc(0x538)+_0xd126cc(0x422)],'lastError':''};try{_0x579e3b[_0xd126cc(0x1a1)](_0x579e3b['lmCJa'],'pZLyX')?window['addEv'+_0xd126cc(0x155)+'stene'+'r']('error',_0x187ea2=>{var _0x5d8c27=_0xd126cc,_0x1e1b8a={'ZTiMh':function(_0x1638ca,_0xc3f616){var _0x99b6ab=_0x5082;return _0x579e3b[_0x99b6ab(0x137)](_0x1638ca,_0xc3f616);},'gxghl':'UWMK','QDKln':_0x579e3b[_0x5d8c27(0x2a7)],'GRZoe':function(_0x22fa4f,_0x149c78){return _0x22fa4f+_0x149c78;},'ILRjU':function(_0x1a1817,_0x2bbbbb){return _0x1a1817+_0x2bbbbb;},'vjmjM':_0x579e3b['ihgSw'],'iGQZI':_0x579e3b[_0x5d8c27(0x1a5)],'SDjln':'\x20|\x20sh'+_0x5d8c27(0x23a)+'\x20','qSxlz':_0x579e3b[_0x5d8c27(0x2a0)],'gwJUK':_0x579e3b['cfMbf'],'ULRay':_0x5d8c27(0x2b6),'gJpCY':'\x20|\x20ER'+_0x5d8c27(0x3c2)};try{if(_0x579e3b['fsRdl'](_0x579e3b[_0x5d8c27(0x253)],_0x5d8c27(0x3eb))){if(!_0xa13532)return;var _0x3cb0dc=_0x2391da[_0x5d8c27(0x128)+_0x5d8c27(0x452)];for(var _0x11ae7d=-0x3c5*-0x1+0x189b+-0x10*0x1c6;_0x11ae7d<_0x3cb0dc['lengt'+'h'];_0x11ae7d++){var _0x1bbbc3=_0x3cb0dc[_0x11ae7d][_0x5d8c27(0x1c1)+'Selec'+_0x5d8c27(0x652)]('.sk-m'+_0x5d8c27(0x64a));_0x1bbbc3&&(_0x1e1b8a['ZTiMh'](_0x1bbbc3['textC'+_0x5d8c27(0x222)+'t']['index'+'Of'](_0x1e1b8a[_0x5d8c27(0x231)]),0x1492+0xe8b*0x1+-0x231d)||_0x1bbbc3['textC'+'onten'+'t'][_0x5d8c27(0x463)+'Of']('SAFE')===-0x1b7a*-0x1+-0xd3a+0x1*-0xe40)&&(_0x1bbbc3[_0x5d8c27(0x364)+_0x5d8c27(0x222)+'t']=_0x4eb6b6[_0x5d8c27(0x538)+_0x5d8c27(0x422)]?_0x1e1b8a[_0x5d8c27(0x421)]:_0x304a4a['uwmk']?_0x1e1b8a[_0x5d8c27(0x510)](_0x1e1b8a[_0x5d8c27(0x510)](_0x1e1b8a['ILRjU'](_0x1e1b8a[_0x5d8c27(0x3ad)](_0x5d8c27(0x4f5)+_0x5d8c27(0x399)+'\x20',_0x381664['hooks'+'Total']?_0x1e1b8a[_0x5d8c27(0x3ad)](_0x1e1b8a['ILRjU'](_0x355d6b[_0x5d8c27(0x2f9)+'Ok']+'/',_0x382bcf['hooks'+'Total']),_0x5d8c27(0x1c9)+'s'):_0x5d8c27(0x2d2)+_0x5d8c27(0x66e)+_0x5d8c27(0x35d)+'all\x20o'+'ff)')+(_0x5d8c27(0x4ae)+_0x5d8c27(0x59e))+(_0x52ce52['gameL'+'oaded']?_0x1e1b8a['vjmjM']:_0x1e1b8a[_0x5d8c27(0x1ec)]),_0x1e1b8a[_0x5d8c27(0x36d)]),_0xde6e34[_0x5d8c27(0x570)+'ers']?_0x1e1b8a['qSxlz']:'none')+_0x1e1b8a['gwJUK']+(_0x16b21c[_0x5d8c27(0x696)+'ents']?_0x5d8c27(0x2ed):_0x1e1b8a['ULRay']),_0x2bf815[_0x5d8c27(0x14f)+_0x5d8c27(0x3bf)]?_0x1e1b8a[_0x5d8c27(0x510)](_0x1e1b8a['gJpCY'],_0x26c083['lastE'+_0x5d8c27(0x3bf)]):''):_0x5d8c27(0x4f5)+_0x5d8c27(0x25e)+'NG\x20-\x20'+'overl'+_0x5d8c27(0x5b5)+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+_0x5d8c27(0x454)+_0x5d8c27(0x200));}}else{var _0x2af621=_0x187ea2&&(_0x187ea2[_0x5d8c27(0x67b)+'ge']||_0x187ea2[_0x5d8c27(0x303)]&&_0x187ea2['error'][_0x5d8c27(0x67b)+'ge'])||_0x579e3b[_0x5d8c27(0x4a0)];if(_0x187ea2&&_0x187ea2['filen'+'ame'])_0x2af621+=_0x579e3b['gcqyI'](_0x5d8c27(0x5be),_0x579e3b[_0x5d8c27(0x55c)](String,_0x187ea2['filen'+_0x5d8c27(0x1fc)])['split']('/')[_0x5d8c27(0x5ce)]())+':'+(_0x187ea2['linen'+'o']||'?');_0x14ded4[_0x5d8c27(0x14f)+_0x5d8c27(0x3bf)]=String(_0x2af621)[_0x5d8c27(0x215)](0x243e*0x1+-0x1d62+0x4*-0x1b7,0x1006+0x15b6+-0x251c);}}catch(_0x1c336f){}}):(_0x4e1f16(),_0x579e3b['njAUW'](_0x57bcd7,_0x194f6d(_0x20eda6[_0xd126cc(0x3a2)])));}catch(_0x23e909){}var _0x8baabe=null,_0x381518=null,_0x2f2bfb={},_0x4ff161=[],_0x2b2e67=[],_0x383b40=new Map();function _0x59d247(_0x2584bf,_0x12a7e5){var _0x3ba9a5=_0xd126cc;if(!_0x12a7e5||_0x2584bf['inclu'+_0x3ba9a5(0x19e)](_0x12a7e5)||_0x2584bf[_0x3ba9a5(0x2ae)+'h']>-0x1b*0x9f+0x3fd*-0x5+0x24f6)return;_0x2584bf[_0x3ba9a5(0x576)](_0x12a7e5);}function _0x44c2cb(_0x35c12f,_0x497b2e,_0x145e22,_0x160bf7){var _0x422c15=_0xd126cc,_0x3d012c={'OsSPY':function(_0x539731,_0xa586e7){var _0x12a6db=_0x5082;return _0x579e3b[_0x12a6db(0x445)](_0x539731,_0xa586e7);},'uAKcg':_0x579e3b['BhDuB'],'wMkWD':'aria-'+_0x422c15(0x3d3)+'ed','chJvr':function(_0x31ba13,_0x554de5){var _0x32a8a2=_0x422c15;return _0x579e3b[_0x32a8a2(0x64e)](_0x31ba13,_0x554de5);},'ZJCgZ':function(_0x14f27a,_0x11fa48){var _0x1166a8=_0x422c15;return _0x579e3b[_0x1166a8(0x2c7)](_0x14f27a,_0x11fa48);},'rTZgW':function(_0x37d56c,_0x1ad7d0){return _0x37d56c-_0x1ad7d0;}};if(_0x579e3b[_0x422c15(0x57f)]===_0x422c15(0x3cb)){var _0x206c85=0x22df+0xf27+-0x3206;try{_0x206c85=_0x497b2e&&_0x497b2e[_0x422c15(0x523)]?_0x497b2e[_0x422c15(0x523)]():-0x2131+-0x35f*0x8+-0x1*-0x3c29;}catch(_0x1793ac){}if(!_0x206c85)return;_0x579e3b['HUoQZ'](_0x59d247,_0x35c12f,_0x206c85),_0x145e22[_0x160bf7]=_0x35c12f[_0x422c15(0x2ae)+'h'];if(_0x160bf7==='movem'+'ents'&&_0x35c12f[_0x422c15(0x2ae)+'h']){if('zYbYC'==='zYbYC'){var _0x5f5031=_0x2f2bfb[_0x422c15(0x5fa)+'ve'];if(_0x5f5031)try{_0x5f5031[_0x422c15(0x378)+'ed']=![];}catch(_0x596dc6){}}else{var _0x2adfac=('1|4|6'+_0x422c15(0x153)+'2|3')[_0x422c15(0x430)]('|'),_0x1cb3f5=0x4af*-0x3+0x7b4+-0x145*-0x5;while(!![]){switch(_0x2adfac[_0x1cb3f5++]){case'0':_0x169c3a[_0x422c15(0x173)+'tribu'+'te'](_0x422c15(0x152),_0x579e3b['bsjzR']);continue;case'1':var _0x169c3a=_0x441ceb[_0x422c15(0x62d)+'eElem'+_0x422c15(0x453)](_0x422c15(0x672)+'n');continue;case'2':_0x169c3a['oncli'+'ck']=_0x4967a9=>{var _0x519ffb=_0x422c15;_0x4967a9[_0x519ffb(0x1bf)+'ropag'+'ation']();var _0x5c1552=_0x3d012c['OsSPY'](_0x169c3a[_0x519ffb(0x5cc)+'tribu'+'te'](_0x519ffb(0x2dd)+_0x519ffb(0x3d3)+'ed'),_0x3d012c['uAKcg']);_0x169c3a[_0x519ffb(0x173)+_0x519ffb(0x50a)+'te'](_0x3d012c[_0x519ffb(0x42b)],_0x3d012c[_0x519ffb(0x41e)](_0x39eb3a,_0x5c1552)),_0x4798a1(_0x5c1552);};continue;case'3':return _0x169c3a;case'4':_0x169c3a[_0x422c15(0x225)]=_0x579e3b['WEHzo'];continue;case'5':_0x169c3a['setAt'+_0x422c15(0x50a)+'te']('aria-'+'check'+'ed',_0x377e48(!!_0x3d68f1));continue;case'6':_0x169c3a['class'+_0x422c15(0x31b)]=_0x422c15(0x4d2)+'itch';continue;}break;}}}}else{var _0x492b39=_0x13ae50[_0x5665d1]||[],_0x1cfcfb=_0x512044['now']();while(_0x492b39[_0x422c15(0x2ae)+'h']&&_0x3d012c['ZJCgZ'](_0x3d012c['rTZgW'](_0x1cfcfb,_0x492b39[0x216a+-0xe0a+-0x1360*0x1]),-0x1*0x2197+0x255b+0x24))_0x492b39['shift']();return _0x492b39['lengt'+'h'];}}function _0x38dd69(_0x5eec26,_0x2f3a7f,_0x24f1ed){var _0x51d3f4=_0xd126cc,_0x3f070a=_0x383b40['get'](_0x5eec26);!_0x3f070a&&(_0x3f070a=new Map(),_0x383b40['set'](_0x5eec26,_0x3f070a));if(!_0x3f070a[_0x51d3f4(0x1e8)](_0x2f3a7f))try{if('IlLum'!=='eYceA'){var _0x477ce3=new _0x8baabe(_0x5eec26)[_0x51d3f4(0x667)+'ield'](_0x2f3a7f,_0x24f1ed);_0x3f070a['set'](_0x2f3a7f,_0x579e3b['GAiTo'](_0x477ce3,undefined)?_0x477ce3['val']():null);}else{var _0x497707=(_0x51d3f4(0x34e)+_0x51d3f4(0x439))[_0x51d3f4(0x430)]('|'),_0x60f9e0=0x3*0x81e+0x14d+-0xc7*0x21;while(!![]){switch(_0x497707[_0x60f9e0++]){case'0':_0x19f527[_0x2b3488]=_0x50fba6;continue;case'1':return _0x50fba6;case'2':_0x50fba6['enabl'+'ed']=_0x5f3cef!==![];continue;case'3':_0x975134['hooks'+_0x51d3f4(0x4a8)]++;continue;case'4':var _0x50fba6=_0x1e11d4['hookP'+'refix']({'typeName':_0x30da22,'methodName':_0x2e2456,'params':_0x41b2fd,'returnType':_0x31b51b},_0x1ce5b0);continue;}break;}}}catch(_0x54e4f8){_0x3f070a[_0x51d3f4(0x4a9)](_0x2f3a7f,null);}return _0x3f070a['get'](_0x2f3a7f);}function _0x555251(_0x3e94eb,_0x1adcc3,_0x31ec92,_0xcf40d2){var _0xa48fdd=_0xd126cc;try{new _0x8baabe(_0x3e94eb)['write'+_0xa48fdd(0x18d)](_0x1adcc3,_0x31ec92,_0xcf40d2);}catch(_0x4c1afc){}}function _0x9e0145(_0x4f7211,_0x4fa715){var _0x1b8740=_0xd126cc;try{var _0x3f7814=new _0x8baabe(_0x4f7211)[_0x1b8740(0x667)+'ield'](_0x4fa715,_0x579e3b[_0x1b8740(0x4bd)]);return _0x3f7814?_0x3f7814['val']():-0x241b+-0x17da+-0x3bf5*-0x1;}catch(_0x4ed90d){return-0xe5c+0x228c+0x4*-0x50c;}}function _0x5a2a18(_0x277803,_0x450407,_0x15397b,_0x5b67d3){var _0x1c39f0=_0xd126cc;if(_0x579e3b[_0x1c39f0(0x4cd)]('dAjDP','dAjDP'))_0x1a2bef['god']=_0x184925,_0x25e1f1(),_0x579e3b[_0x1c39f0(0x455)](_0x3f33b7,_0x579e3b[_0x1c39f0(0x2ee)],_0x4f3b53),_0x579e3b[_0x1c39f0(0x427)](_0xd14306,_0x1c39f0(0x164)+'e',_0xaa7205);else{var _0x541a92=_0x38dd69(_0x277803,_0x450407,_0x15397b);if(_0x541a92!=null)_0x579e3b['MCLgN'](_0x555251,_0x277803,_0x450407,_0x15397b,_0x541a92*_0x5b67d3);}}function _0x23608b(_0x3e6d4e,_0x1ef8bb,_0x573031,_0xe73182,_0x46a31b,_0x4e80c8,_0x2d0184){var _0x5200a3=_0xd126cc;try{var _0x34b97b=_0x381518[_0x5200a3(0x500)+'refix']({'typeName':_0x1ef8bb,'methodName':_0x573031,'params':_0xe73182,'returnType':_0x46a31b},_0x4e80c8);return _0x34b97b[_0x5200a3(0x378)+'ed']=_0x2d0184!==![],_0x2f2bfb[_0x3e6d4e]=_0x34b97b,_0x14ded4[_0x5200a3(0x2f9)+'Total']++,_0x34b97b;}catch(_0x3b98c6){return console[_0x5200a3(0x294)](_0x579e3b[_0x5200a3(0x52c)],_0x3e6d4e,_0x3b98c6&&_0x3b98c6['messa'+'ge']),null;}}function _0x3fec5f(_0x5ba2e7,_0x39817c,_0x401e79,_0xfe240,_0x5f4978,_0x3a7b24,_0x427e38){var _0x2eedc0=_0xd126cc;try{if(_0x579e3b['ycuRD']('wrtSb','eqWyL')){var _0x53a917=(_0x2eedc0(0x33c)+'|4|3')['split']('|'),_0x4d1aa8=0x1ea2+0x136e+-0x858*0x6;while(!![]){switch(_0x53a917[_0x4d1aa8++]){case'0':_0x2f2bfb[_0x5ba2e7]=_0x2c5eac;continue;case'1':var _0x2c5eac=_0x381518[_0x2eedc0(0x500)+_0x2eedc0(0x3bd)+'x']({'typeName':_0x39817c,'methodName':_0x401e79,'params':_0xfe240,'returnType':_0x5f4978},_0x3a7b24);continue;case'2':_0x2c5eac[_0x2eedc0(0x378)+'ed']=_0x427e38!==![];continue;case'3':return _0x2c5eac;case'4':_0x14ded4[_0x2eedc0(0x2f9)+_0x2eedc0(0x4a8)]++;continue;}break;}}else _0x4853e2[_0x2eedc0(0x563)](_0xd81cdd[_0x2eedc0(0x2e1)]);}catch(_0x435ccd){if('PqMyN'!==_0x2eedc0(0x2f6))_0x26fef7[_0x2eedc0(0x1a8)+_0x2eedc0(0x3bc)]['toggl'+'e']('on',_0x42f1e7),_0x84a82(_0x1ce1b6);else return console['warn'](_0x579e3b[_0x2eedc0(0x52c)],_0x5ba2e7,_0x435ccd&&_0x435ccd[_0x2eedc0(0x67b)+'ge']),null;}}var _0x39585a=()=>![];try{if(window[_0xd126cc(0x3a3)+'WebMo'+'dkit']&&!_0x53f898[_0xd126cc(0x538)+_0xd126cc(0x422)]){_0x8baabe=window[_0xd126cc(0x3a3)+_0xd126cc(0x180)+_0xd126cc(0x28e)]['Value'+'Wrapp'+'er'],_0x381518=window[_0xd126cc(0x3a3)+_0xd126cc(0x180)+'dkit']['Runti'+'me'][_0xd126cc(0x62d)+_0xd126cc(0x291)+'in']({'name':_0x579e3b[_0xd126cc(0x15c)],'version':_0xd126cc(0x513),'referencedAssemblies':[_0xd126cc(0x310)+_0xd126cc(0x31c)+'Sharp'+_0xd126cc(0x301)]});if(_0x53f898[_0xd126cc(0x691)+'od'])_0x23608b(_0x579e3b['jxhNG'],_0x579e3b[_0xd126cc(0x1d7)],_0x579e3b[_0xd126cc(0x53a)],[_0xd126cc(0x556),_0x579e3b[_0xd126cc(0x36a)]],undefined,_0x39585a,!!_0x53f898['god']);if(_0x53f898[_0xd126cc(0x691)+'odDie'])_0x579e3b['CZzdX'](_0x23608b,'godDi'+'e',_0xd126cc(0x609)+'th','Local'+'Die',[_0x579e3b['lUGPS'],_0x579e3b[_0xd126cc(0x36a)],_0xd126cc(0x556),_0xd126cc(0x556),_0x579e3b[_0xd126cc(0x36a)]],undefined,_0x39585a,!!_0x53f898['god']);if(_0x53f898[_0xd126cc(0x292)+_0xd126cc(0x2d9)+'il'])_0x23608b(_0x579e3b['DCrwt'],_0xd126cc(0x36c)+_0xd126cc(0x4fa)+'forms'+_0xd126cc(0x56d)+'tide.'+_0xd126cc(0x388)+_0xd126cc(0x35a)+'on',_0x579e3b[_0xd126cc(0x664)],['i32'],undefined,_0x39585a,!!_0x53f898['noRec'+_0xd126cc(0x178)]);if(_0x53f898[_0xd126cc(0x50c)+'aptur'+'e'])_0x579e3b[_0xd126cc(0x5ad)](_0x3fec5f,_0xd126cc(0x64d)+'ooter',_0xd126cc(0x4d3)+_0xd126cc(0x166),'SetGa'+_0xd126cc(0x31f)+_0xd126cc(0x4ce),['i32',_0x579e3b['lUGPS']],undefined,(_0x5cb0ca,_0x3a011c)=>{var _0x50424a=_0xd126cc;_0x44c2cb(_0x2b2e67,_0x3a011c,_0x14ded4,'shoot'+_0x50424a(0x49b));},!![]);if(_0x53f898[_0xd126cc(0x50c)+'aptur'+'e'])_0x3fec5f(_0x579e3b['UeLLU'],'Legio'+_0xd126cc(0x4fa)+'forms'+_0xd126cc(0x56d)+'tide.'+_0xd126cc(0x684)+'ent',_0x579e3b['zFgFw'],[_0x579e3b['lUGPS']],_0x579e3b[_0xd126cc(0x36a)],(_0xc5a824,_0x29740e)=>{var _0x287b73=_0xd126cc;_0x44c2cb(_0x4ff161,_0x29740e,_0x14ded4,_0x579e3b[_0x287b73(0x248)]);},!![]);}}catch(_0x13ac64){console[_0xd126cc(0x294)](_0x579e3b[_0xd126cc(0x489)],_0x13ac64&&_0x13ac64['messa'+'ge']);}function _0x1eda96(_0x58336a,_0x660be2){var _0x3d2452=_0xd126cc,_0xed69f=_0x2f2bfb[_0x58336a];if(_0xed69f)try{_0xed69f[_0x3d2452(0x378)+'ed']=!!_0x660be2;}catch(_0x29bccf){}}setInterval(()=>{var _0x362c55=_0xd126cc;if(!_0x8baabe||!window['unity'+_0x362c55(0x351)+_0x362c55(0x6a8)])return;var _0x392a90=(_0x579e3b['ueJJU'](Number,_0x53f898['speed'+_0x362c55(0x41f)])||0x6*0x2b7+-0x1386+0x10*0x3a)/(0x25b7+0x16*0x16+-0x2737),_0x504b0e=(Number(_0x53f898[_0x362c55(0x660)+'ct'])||-0x5*-0x322+0x9ff+0x1945*-0x1)/(-0xcee+-0xc1b+0x1*0x196d),_0x7b9c72=(Number(_0x53f898[_0x362c55(0x66a)+_0x362c55(0x120)])||0x67*0x51+0x1*-0x2616+-0xb*-0x89)/(-0x2*0x95+-0x724+-0x2*-0x459),_0x4290c2=Math[_0x362c55(0x50d)](-0x1*0x232b+-0x17b*-0x11+-0xd*-0xc5,_0x579e3b[_0x362c55(0x57c)](Number,_0x53f898['damag'+'eValu'+'e'])||0x2008+-0xd*-0x1a+-0x20c4),_0x91db9f=_0x579e3b['ycuRD'](_0x392a90,-0xa6f+0x20e8*0x1+-0x59e*0x4)||_0x579e3b['EYUJX'](_0x504b0e,-0x1cec+0x2634+-0x947)||_0x7b9c72!==-0x89*-0x35+0x2*-0x538+0x94*-0x1f||_0x53f898[_0x362c55(0x374)],_0x3cd998=_0x53f898[_0x362c55(0x401)+_0x362c55(0x426)]||_0x53f898[_0x362c55(0x41b)+'eExp']||_0x53f898['infAm'+'moExp']||_0x53f898[_0x362c55(0x59f)+'Exp'];if(!_0x91db9f&&!_0x3cd998)return;try{for(var _0x5660f2=0x178c+-0x854+-0x8*0x1e7;_0x579e3b[_0x362c55(0x58d)](_0x5660f2,_0x4ff161[_0x362c55(0x2ae)+'h']);_0x5660f2++){var _0x36469f=_0x4ff161[_0x5660f2];if(!_0x36469f)continue;if(_0x392a90!==0xc9*0xa+0x11a*-0x10+0x1*0x9c7){if(_0x579e3b[_0x362c55(0x1a1)]('aIMFa',_0x362c55(0x63c)))_0x579e3b[_0x362c55(0x22d)](_0x5a2a18,_0x36469f,-0xeb*-0xd+-0x2100+0x1539,_0x579e3b[_0x362c55(0x654)],_0x392a90),_0x5a2a18(_0x36469f,-0x373+0x661*0x1+0x2*-0x161,_0x362c55(0x142),_0x392a90),_0x579e3b[_0x362c55(0x21b)](_0x5a2a18,_0x36469f,0x35*-0x1+-0x110a+0x116f,_0x362c55(0x142),_0x392a90),_0x579e3b['kahXD'](_0x5a2a18,_0x36469f,0x234d+0x2659+-0x4972,'f32',_0x392a90),_0x579e3b['vpMkv'](_0x5a2a18,_0x36469f,-0x1565+-0x4*-0x127+0x10e5,_0x579e3b['NQNzu'],_0x392a90),_0x5a2a18(_0x36469f,0x613+-0xe79+0x886,'f32',_0x392a90);else{var _0x319f42=_0x180a6a[_0x362c55(0x62d)+'eElem'+'ent']('selec'+'t');_0x319f42[_0x362c55(0x1a8)+'Name']=_0x362c55(0x383)+_0x362c55(0x68a);for(var [_0x5d4f81,_0x3e411b]of _0x433f7a){var _0x1ad5b0=_0x545dc0['creat'+_0x362c55(0x571)+'ent'](_0x362c55(0x338)+'n');_0x1ad5b0[_0x362c55(0x3a2)]=_0x5d4f81,_0x1ad5b0['textC'+_0x362c55(0x222)+'t']=_0x3e411b,_0x319f42[_0x362c55(0x175)+'dChil'+'d'](_0x1ad5b0);}return _0x319f42[_0x362c55(0x3a2)]=_0x46601a,_0x319f42['oncha'+'nge']=()=>_0x48f636(_0x319f42['value']),_0x319f42;}}if(_0x504b0e!==-0x243e*0x1+0x220b*0x1+-0x3*-0xbc)_0x5a2a18(_0x36469f,0x15a*-0x1+-0x63*-0x35+-0x12d5,'f32',_0x504b0e);_0x579e3b['fsRdl'](_0x7b9c72,-0x20d+-0x5*-0x454+-0xda*0x17)&&(_0x5a2a18(_0x36469f,-0x12*-0xc9+-0x10a3+-0x17*-0x1f,_0x362c55(0x142),_0x7b9c72),_0x5a2a18(_0x36469f,-0x2460+-0x3f9+0x28a5,'f32',_0x7b9c72));if(_0x53f898['bhop'])_0x555251(_0x36469f,0xf6c+-0x1fc1+-0x10f1*-0x1,'f32',-(-0xc17+-0x33d*-0xa+-0x1064));}}catch(_0x16b7c2){}try{for(var _0x532043=-0x12ec+0x1*-0xaed+-0x9*-0x351;_0x579e3b['DhHvv'](_0x532043,_0x2b2e67[_0x362c55(0x2ae)+'h']);_0x532043++){var _0x5f126b=_0x9e0145(_0x2b2e67[_0x532043],0xf*-0x12f+0x8c6+0x933);if(!_0x5f126b)continue;_0x53f898[_0x362c55(0x41b)+_0x362c55(0x336)]&&(_0x579e3b['ImfkJ'](_0x362c55(0x414),_0x579e3b['nkwjW'])?(_0x579e3b['vpMkv'](_0x555251,_0x5f126b,-0xf8f+-0x1ff6*0x1+0x2fd1,_0x579e3b['lUGPS'],_0x4290c2),_0x555251(_0x5f126b,-0x104a+0x1fd+-0x217*-0x7,'i32',_0x4290c2)):_0x1607f5[_0x362c55(0x378)+'ed']=![]);if(_0x53f898['noSpr'+_0x362c55(0x426)]){if(_0x579e3b[_0x362c55(0x65b)]!==_0x579e3b[_0x362c55(0x4ea)])_0x555251(_0x5f126b,-0xf14+0x1*-0x2396+0x3332,_0x579e3b[_0x362c55(0x654)],-0xd24+-0xb69+0x1a3*0xf),_0x555251(_0x5f126b,-0x1*0x7d5+0x3*-0x20e+-0x4cd*-0x3,'f32',-0x1c5d+-0x3e*0x2b+0x26c8);else{var _0x2c8204=_0x283c6a[_0x362c55(0x1d2)+_0x362c55(0x4c4)+_0x362c55(0x20e)+'nt'],_0x40cfda=_0x2c8204&&_0x2c8204[_0x362c55(0x37c)+'me']!==_0x579e3b['ykDIO']?_0x2c8204:_0x53c395[_0x362c55(0x5b4)]||_0x1b1679[_0x362c55(0x48d)+_0x362c55(0x363)+_0x362c55(0x527)];if(_0x2afeba[_0x362c55(0x2c2)+_0x362c55(0x1b0)]!==_0x40cfda)_0x40cfda['appen'+_0x362c55(0x1ba)+'d'](_0x20f682);}}if(_0x53f898['infAm'+'moExp'])_0x555251(_0x5f126b,-0x1acc+0x2390+-0x868,'i32',-0x1*0xf6b+-0x1*-0x1c5c+-0x90a);_0x53f898['rapid'+_0x362c55(0x680)]&&(_0x5a2a18(_0x5f126b,-0x1*-0x24bb+-0x3*-0x31d+-0x2*0x16c3,_0x362c55(0x142),-0x5*-0x6c5+0x12c9+-0x34a2+0.1),_0x555251(_0x5f126b,0x133+0x1*-0x88d+0x7ba,'f32',0xa*-0x18e+-0xa16+-0x22*-0xc1+0.1));}}catch(_0x499e2d){}},0xd36+-0x9ac+-0x2c2),setInterval(()=>{var _0x1a0a18=_0xd126cc;_0x14ded4['gameL'+_0x1a0a18(0x4fe)]=!!window['unity'+'Insta'+'nce'];try{var _0x5f524c=-0x1163+-0x3*-0x99b+-0xb6e;for(var _0x2c8341 in _0x2f2bfb){if(_0x579e3b[_0x1a0a18(0x2fb)](_0x579e3b[_0x1a0a18(0x205)],_0x579e3b[_0x1a0a18(0x404)])){if(_0x2f2bfb[_0x2c8341]&&_0x2f2bfb[_0x2c8341][_0x1a0a18(0x5a1)+'ed'])_0x5f524c++;}else{var _0x5bdde6=_0xa8aa56['creat'+'eElem'+'ent']('input');return _0x5bdde6[_0x1a0a18(0x225)]=_0x1a0a18(0x2b3),_0x5bdde6[_0x1a0a18(0x1a8)+'Name']=_0x579e3b[_0x1a0a18(0x4d9)],_0x5bdde6[_0x1a0a18(0x3a2)]=/^#[0-9a-f]{6}$/i[_0x1a0a18(0x670)](_0x3f7380)?_0xa2ad5a:'#ff6b'+'9d',_0x5bdde6[_0x1a0a18(0x449)+'ut']=()=>_0x498c28(_0x5bdde6['value']),_0x5bdde6;}}_0x14ded4[_0x1a0a18(0x2f9)+'Ok']=_0x5f524c;}catch(_0x4e1afe){}},-0x2137+-0x2*-0x4e9+-0x1b4d*-0x1);var _0x36530d=new Set(),_0x1d1f57={0x1:[],0x3:[]},_0x10f995=![];function _0x4147e9(_0x4e5d98){var _0x1b85c5=_0xd126cc;_0x36530d[_0x1b85c5(0x563)](_0x4e5d98['code']);}function _0x16d22d(_0x3d365c){var _0x57b485=_0xd126cc;_0x36530d[_0x57b485(0x190)+'e'](_0x3d365c[_0x57b485(0x2e1)]);}function _0xeb97be(_0x4fab54){var _0x120954=_0xd126cc;if(_0x4fab54[_0x120954(0x68e)+'ura'])return;_0x36530d['add'](_0x579e3b[_0x120954(0x53c)](_0x120954(0x3a1),_0x579e3b['bsxQM'](_0x4fab54[_0x120954(0x672)+'n'],-0x2178+0x1c9*-0x11+0x3fd2)));var _0x52e71c=_0x1d1f57[_0x579e3b['gcqyI'](_0x4fab54[_0x120954(0x672)+'n'],0x14ec+-0x1f6*-0x5+0xd*-0x25d)];if(_0x52e71c){_0x52e71c[_0x120954(0x576)](performance['now']());if(_0x579e3b['zWLwo'](_0x52e71c[_0x120954(0x2ae)+'h'],0xe95*-0x1+-0x1246+0x2103))_0x52e71c[_0x120954(0x67f)]();}}function _0xad737c(_0x2929c6){var _0x12d39c=_0xd126cc;if(!_0x2929c6['__sak'+'ura'])_0x36530d['delet'+'e'](_0x579e3b[_0x12d39c(0x692)]+_0x579e3b[_0x12d39c(0x501)](_0x2929c6[_0x12d39c(0x672)+'n'],0x247*0x4+-0x1*0x1125+-0x405*-0x2));}function _0x1928d1(){var _0x265d6d=_0xd126cc;_0x579e3b[_0x265d6d(0x642)]('LXJMk',_0x265d6d(0x3b1))?_0x36530d[_0x265d6d(0x47e)]():_0x579e3b[_0x265d6d(0x1fb)](_0xc6f2d9,_0x116992,_0x18bbb6,_0x4c4f10,'shoot'+'ers');}function _0x58d99f(){var _0x2a5e25=_0xd126cc;if(_0x10f995)return;_0x10f995=!![],window['addEv'+_0x2a5e25(0x155)+'stene'+'r'](_0x579e3b['YisEU'],_0x4147e9,!![]),window['addEv'+_0x2a5e25(0x155)+_0x2a5e25(0x4d0)+'r'](_0x2a5e25(0x3bb),_0x16d22d,!![]),window['addEv'+'entLi'+_0x2a5e25(0x4d0)+'r'](_0x579e3b[_0x2a5e25(0x436)],_0xeb97be,!![]),window['addEv'+_0x2a5e25(0x155)+_0x2a5e25(0x4d0)+'r'](_0x2a5e25(0x3a1)+'up',_0xad737c,!![]),window[_0x2a5e25(0x3e4)+'entLi'+_0x2a5e25(0x4d0)+'r'](_0x2a5e25(0x5a0),_0x1928d1);}function _0x335c59(_0xd85210){var _0x54bcec=_0xd126cc,_0x88234d={'eHLeT':function(_0x24ae56,_0x403cb1,_0xa25e22){return _0x24ae56(_0x403cb1,_0xa25e22);},'JeQvE':_0x54bcec(0x565)+'oil'};if(_0x579e3b[_0x54bcec(0x302)]!==_0x54bcec(0x44c)){var _0x11bbda=_0x1d1f57[_0xd85210]||[],_0xeadf95=performance['now']();while(_0x11bbda['lengt'+'h']&&_0xeadf95-_0x11bbda[0xab9+-0x737+-0x382*0x1]>0x2*-0x946+-0x20ab+-0x67*-0x89)_0x11bbda[_0x54bcec(0x67f)]();return _0x11bbda['lengt'+'h'];}else _0x2af7a5['noRec'+'oil']=_0x4c05c5,_0x17f353(),_0x88234d['eHLeT'](_0x44fe1c,_0x88234d['JeQvE'],_0x36577f);}function _0x590e8e(_0xa507e2){var _0x322983=_0xd126cc;if(document['body']&&(document[_0x322983(0x1f4)+_0x322983(0x204)]===_0x322983(0x1af)+_0x322983(0x221)+'e'||_0x579e3b[_0x322983(0x137)](document[_0x322983(0x1f4)+_0x322983(0x204)],'compl'+_0x322983(0x2e9))))_0xa507e2();else document[_0x322983(0x3e4)+'entLi'+_0x322983(0x4d0)+'r'](_0x322983(0x608)+'ntent'+'Loade'+'d',_0xa507e2,{'once':!![]});}_0x590e8e(()=>{var _0x980b5b=_0xd126cc,_0x563388={'OOSFx':_0x579e3b[_0x980b5b(0x630)],'vMCDx':function(_0x3060f7,_0x80b116){var _0x3882e7=_0x980b5b;return _0x579e3b[_0x3882e7(0x1f2)](_0x3060f7,_0x80b116);},'Rtmzg':'HMzKa','ALRlC':_0x579e3b['CTXBO'],'Goitp':_0x579e3b[_0x980b5b(0x4f6)],'lnpfs':function(_0x2ad7ca,_0x548b0e){return _0x2ad7ca+_0x548b0e;},'bZikS':_0x579e3b[_0x980b5b(0x4fb)],'prWmi':'600\x20','YjgfL':_0x579e3b[_0x980b5b(0x1d3)],'ycOWU':_0x980b5b(0x35f)+_0x980b5b(0x3e7)+_0x980b5b(0x21a)+'0,0.5'+'5)','MloxD':function(_0x46fded,_0x5bd477){return _0x46fded/_0x5bd477;},'zMHYX':function(_0x1bcb64,_0x1007a8){var _0x4bed33=_0x980b5b;return _0x579e3b[_0x4bed33(0x61b)](_0x1bcb64,_0x1007a8);},'cAJTg':function(_0x3b0f3d,_0x4c6757){return _0x3b0f3d||_0x4c6757;},'hyorZ':function(_0x2449a9,_0x4d2022){return _0x2449a9(_0x4d2022);},'PvJIq':function(_0x379ecf,_0x1a3c0f){return _0x579e3b['rHStc'](_0x379ecf,_0x1a3c0f);},'dPokM':function(_0x4cd631){return _0x579e3b['NNseg'](_0x4cd631);},'GmrLz':_0x980b5b(0x160),'bDodR':_0x579e3b[_0x980b5b(0x69b)],'uqfSZ':_0x579e3b['mBPlE'],'pDvdN':function(_0x202475,_0x5566d3){return _0x202475+_0x5566d3;},'pPOgO':'color','ikQpH':'sk-co'+'lor','AQayB':function(_0x3d1b04,_0x216e43){return _0x3d1b04*_0x216e43;},'drFjJ':'middl'+'e','bxVBI':_0x579e3b[_0x980b5b(0x229)],'joAHV':_0x980b5b(0x383)+'eld','HheAa':_0x579e3b[_0x980b5b(0x56e)],'Enfgp':_0x579e3b[_0x980b5b(0x125)],'ujxXH':_0x980b5b(0x1ce),'hmsFE':function(_0x27bdc5,_0x1ade01){return _0x27bdc5!==_0x1ade01;},'tJZOO':_0x579e3b['uwciy'],'OjnwX':_0x980b5b(0x2f0)+_0x980b5b(0x669)+'|12|5'+'|9|11'+'|1|0|'+_0x980b5b(0x379),'HmZEe':function(_0x318104,_0x19477f,_0x574e5f){return _0x318104(_0x19477f,_0x574e5f);},'PtDtz':_0x980b5b(0x686)+'rd','fAyJV':'div','DLaka':'sk-mb'+_0x980b5b(0x653),'MZSyu':_0x579e3b[_0x980b5b(0x28a)],'HgmeB':_0x579e3b[_0x980b5b(0x31e)],'nVcdh':function(_0x2b8f02){return _0x2b8f02();},'ZEkUf':_0x980b5b(0x4cf),'UmXKP':_0x579e3b['zujeu'],'xvwkq':_0x980b5b(0x496),'mHJsF':_0x980b5b(0x2b6),'XDnGA':function(_0x136188,_0x3801b2){var _0x550e94=_0x980b5b;return _0x579e3b[_0x550e94(0x17e)](_0x136188,_0x3801b2);},'EuJoz':_0x980b5b(0x4d4),'IGgoL':function(_0x55a312){return _0x55a312();}};_0x53f898[_0x980b5b(0x5bb)+'ck']&&(_0x579e3b[_0x980b5b(0x1f2)]('woVMc',_0x980b5b(0x585))?setInterval(()=>{var _0x269a67=_0x980b5b,_0x21c54f={'FZDuP':function(_0x122d21,_0x518a5a,_0x35109d,_0x86591){return _0x122d21(_0x518a5a,_0x35109d,_0x86591);}};try{for(var _0x283e91 of[_0x269a67(0x546)+'io_30'+_0x269a67(0x293)+'-pare'+'nt','kour-'+'io_72'+_0x269a67(0x4eb)+_0x269a67(0x2c2)+'t','kour-'+'io_30'+_0x269a67(0x1f6)+_0x269a67(0x1f5)+'nt','fulls'+_0x269a67(0x4c4)+_0x269a67(0x32c)+'s']){var _0x2d7359=document[_0x269a67(0x284)+'ement'+_0x269a67(0x529)](_0x283e91);if(_0x2d7359&&_0x283e91===_0x269a67(0x1d2)+_0x269a67(0x4c4)+'-banr'+'s'){if('MWZcT'!==_0x269a67(0x2bc)){var _0x5bf706=_0x21c54f[_0x269a67(0x37f)](_0x2b585c,_0x588ef5,_0x2fc680,_0x3a612c);if(_0x5bf706!=null)_0x41d3bf(_0x4e2b3b,_0x4e7d91,_0x5b1b5a,_0x5bf706*_0x3dbfa6);}else{var _0x356cc4=_0x2d7359[_0x269a67(0x128)+'ren'];for(var _0x2af025=0x1a44+-0x21ea*0x1+-0x7a6*-0x1;_0x579e3b['DhHvv'](_0x2af025,_0x356cc4['lengt'+'h']);_0x2af025++){if('BrJyJ'===_0x579e3b[_0x269a67(0x23c)])_0x801fca=_0x7fd314['round'](_0x89146a*(-0x25ea+0x1ba3*-0x1+-0x1727*-0x3)/(_0x144bf6-_0x40a933)),_0x471118=0x10a4+-0x13ff+0x35b,_0x493544=_0x2a986c;else{if(_0x356cc4[_0x2af025]['id']&&_0x356cc4[_0x2af025]['id'][_0x269a67(0x463)+'Of'](_0x269a67(0x546)+'io_')===-0x15*-0x1e+-0x12c+0x6*-0x37)_0x356cc4[_0x2af025]['style']['displ'+'ay']=_0x579e3b[_0x269a67(0x5db)];}}}}else{if(_0x2d7359)_0x2d7359['style'][_0x269a67(0x357)+'ay']=_0x579e3b['FwJjO'];}}}catch(_0x29da7b){}},-0x3*0xcde+0x210a*-0x1+0x4f74):(_0x220432[_0x980b5b(0x41b)+_0x980b5b(0x51e)+'e']=_0x5012a1,_0x32d4f5()));var _0x367fcc=document[_0x980b5b(0x62d)+'eElem'+_0x980b5b(0x453)](_0x579e3b[_0x980b5b(0x5b7)]);_0x367fcc['style']['cssTe'+'xt']='posit'+'ion:f'+_0x980b5b(0x5d7)+'inset'+_0x980b5b(0x285)+'dth:1'+_0x980b5b(0x3fe)+'heigh'+_0x980b5b(0x58b)+_0x980b5b(0x23f)+'index'+':2147'+'48364'+'6;poi'+_0x980b5b(0x5dd)+_0x980b5b(0x5f6)+_0x980b5b(0x43f)+'e';var _0x1d4a29=_0x367fcc[_0x980b5b(0x594)+_0x980b5b(0x611)]('2d');function _0x12884c(){var _0x1a6df6=_0x980b5b;try{var _0x2f5125=document[_0x1a6df6(0x1d2)+_0x1a6df6(0x4c4)+_0x1a6df6(0x20e)+'nt'],_0x23cb7b=_0x2f5125&&_0x2f5125[_0x1a6df6(0x37c)+'me']!==_0x1a6df6(0x42e)+'S'?_0x2f5125:document[_0x1a6df6(0x5b4)]||document['docum'+_0x1a6df6(0x363)+_0x1a6df6(0x527)];if(_0x579e3b[_0x1a6df6(0x256)](_0x367fcc[_0x1a6df6(0x2c2)+_0x1a6df6(0x1b0)],_0x23cb7b))_0x23cb7b[_0x1a6df6(0x175)+_0x1a6df6(0x1ba)+'d'](_0x367fcc);}catch(_0x721686){try{document[_0x1a6df6(0x5b4)][_0x1a6df6(0x175)+_0x1a6df6(0x1ba)+'d'](_0x367fcc);}catch(_0x15d78a){}}}var _0x3a962d={'w':0x0,'h':0x0,'dpr':0x0};function _0x2dadc2(){var _0x31a73d=_0x980b5b,_0x2c8209=_0x579e3b[_0x31a73d(0x626)]['split']('|'),_0x4c855a=0x22*0x3f+-0xacb+-0x9*-0x45;while(!![]){switch(_0x2c8209[_0x4c855a++]){case'0':_0x3a962d['h']=_0x1c2948;continue;case'1':_0x3a962d['dpr']=_0x17f02a;continue;case'2':_0x367fcc[_0x31a73d(0x260)+'t']=Math[_0x31a73d(0x51a)](_0x1c2948*_0x17f02a);continue;case'3':_0x1d4a29['setTr'+_0x31a73d(0x517)+'rm'](_0x17f02a,0x1dd5+-0x1327*0x2+0x879,0xd33+-0xd7*0x1+-0xc5c,_0x17f02a,-0xa2d+-0x365*0x4+0x17c1,0x1af*0x1+0x1b1a+0x1cc9*-0x1);continue;case'4':_0x367fcc[_0x31a73d(0x4bf)]=Math[_0x31a73d(0x51a)](_0x3a55fe*_0x17f02a);continue;case'5':var _0x3a55fe=window[_0x31a73d(0x286)+_0x31a73d(0x56a)],_0x1c2948=window[_0x31a73d(0x286)+'Heigh'+'t'];continue;case'6':if(_0x3a55fe===_0x3a962d['w']&&_0x579e3b[_0x31a73d(0x2c1)](_0x1c2948,_0x3a962d['h'])&&_0x17f02a===_0x3a962d['dpr'])return;continue;case'7':var _0x17f02a=window['devic'+'ePixe'+_0x31a73d(0x3e3)+'o']||-0x19*-0x12f+0x4f7*-0x3+0xeb1*-0x1;continue;case'8':_0x3a962d['w']=_0x3a55fe;continue;}break;}}var _0x2518a6=0x1ebb+-0xc27+-0x52*0x3a,_0x134ff3=performance[_0x980b5b(0x553)](),_0x1f52c5=0xa7f*0x2+-0x2ae*0x7+0x1*-0x23c;function _0x6d3708(_0x464447){var _0x1dd596=_0x980b5b,_0x2356bd=Number(_0x53f898['ksSca'+'le'])||-0x61a+0xa68+-0x44d,_0x570df0=(0x6ea*0x1+-0x3e*-0x5f+0x29*-0xba)*_0x2356bd,_0x110671=(-0x2564+-0x2*0x540+-0x7fc*-0x6)*_0x2356bd,_0x36b45c=_0x570df0*(-0xd77*-0x1+-0x1df3+0x107f)+_0x579e3b['hAVGO'](_0x110671,-0x4a3*0x5+0x6*0x4e1+-0x615),_0x47cd59=_0x579e3b[_0x1dd596(0x61b)](_0x570df0,0xa26+-0x94+-0x98f)+_0x110671*(-0x1f8d*-0x1+-0x1f4f+-0x3c),_0x508fff=_0x53f898[_0x1dd596(0x259)],_0x14acd6=_0x508fff==='br'?_0x464447[_0x1dd596(0x518)]-(0x829*-0x2+0x1ea*-0x2+0xd*0x18e)-_0x36b45c:_0x579e3b['gcqyI'](_0x464447[_0x1dd596(0x5f5)],0x16*0xc9+-0x252b+0x13f5),_0x44d316=_0x508fff==='ml'?_0x579e3b['IqHWH'](_0x464447[_0x1dd596(0x2b4)]+_0x579e3b[_0x1dd596(0x40c)](_0x464447['heigh'+'t'],-0x2*-0xd5d+-0x10*0x4a+-0x1618),_0x579e3b['DKzdm'](_0x47cd59,0xf67+0x260b*-0x1+0x16a6)):_0x579e3b[_0x1dd596(0x4a7)](_0x464447[_0x1dd596(0x6aa)+'m']-_0x47cd59,_0x579e3b['rYnQg'](_0x508fff,'bl')?-0x19ed+-0x3*-0x35c+0x1039:0xc1*-0x1c+0x124a+0x368),_0x57a648=(_0x20a975,_0x11b590,_0x1a3fd6,_0x5d3b93,_0x24dd04,_0x4a30a5,_0xfd65c)=>{var _0x5d405b=_0x1dd596,_0x424761=_0x36530d[_0x5d405b(0x1e8)](_0x11b590);_0x1d4a29[_0x5d405b(0x5eb)](),_0x1d4a29[_0x5d405b(0x5e0)+'Path']();if(_0x1d4a29[_0x5d405b(0x51a)+_0x5d405b(0x3ff)])_0x1d4a29[_0x5d405b(0x51a)+_0x5d405b(0x3ff)](_0x1a3fd6,_0x5d3b93,_0x24dd04,_0x4a30a5,(-0x1*0x1107+0x1*-0x1e2a+0x2f38)*_0x2356bd);else _0x1d4a29[_0x5d405b(0x3f4)](_0x1a3fd6,_0x5d3b93,_0x24dd04,_0x4a30a5);_0x1d4a29['fillS'+'tyle']=_0x424761?_0x563388['OOSFx']:_0x5d405b(0x35f)+_0x5d405b(0x1b4)+_0x5d405b(0x1cd)+'7)',_0x1d4a29[_0x5d405b(0x1cf)](),_0x1d4a29['lineW'+_0x5d405b(0x3b3)]=0x1*-0x1a01+0xc14+0xdee,_0x1d4a29['strok'+'eStyl'+'e']=_0x424761?_0xfb0e72:'rgba('+'255,1'+_0x5d405b(0x25f)+'7,0.3'+'5)',_0x1d4a29[_0x5d405b(0x2b8)+'e']();if(_0x424761){if(_0x563388[_0x5d405b(0x2fe)](_0x563388[_0x5d405b(0x418)],_0x563388['Rtmzg']))try{_0x35bdae['body']['appen'+'dChil'+'d'](_0x2020be);}catch(_0x14ab8e){}else _0x1d4a29[_0x5d405b(0x55a)+'wColo'+'r']=_0x2b2cec,_0x1d4a29[_0x5d405b(0x55a)+'wBlur']=0x5a2+-0xbf7*-0x1+0x118b*-0x1,_0x1d4a29[_0x5d405b(0x1cf)](),_0x1d4a29[_0x5d405b(0x55a)+'wBlur']=0x133a*0x1+-0x17b1+0x7f*0x9;}_0x1d4a29['fillS'+_0x5d405b(0x5e2)]=_0x424761?'#fff':_0x563388[_0x5d405b(0x2b7)],_0x1d4a29[_0x5d405b(0x224)+_0x5d405b(0x416)]=_0x563388['Goitp'],_0x1d4a29['textB'+_0x5d405b(0x60d)+'ne']=_0x5d405b(0x623)+'e',_0x1d4a29[_0x5d405b(0x334)]=_0x563388['lnpfs']('700\x20'+Math['round']((0x1*0x251d+0x471+-0x2982)*_0x2356bd),_0x563388[_0x5d405b(0x3dd)]),_0x1d4a29[_0x5d405b(0x467)+_0x5d405b(0x5da)](_0x20a975,_0x1a3fd6+_0x24dd04/(-0x1*0x3f9+-0xda*0x17+0x1791*0x1),_0x5d3b93+_0x4a30a5/(0x99*0x1c+-0x1*0xe3+-0xfd7)-(_0xfd65c?(-0x17*0x95+-0x1cb2+0x2a1a)*_0x2356bd:0x13d5+0x2448+-0x5*0xb39)),_0xfd65c&&(_0x1d4a29[_0x5d405b(0x334)]=_0x563388['lnpfs'](_0x563388['prWmi'],Math[_0x5d405b(0x51a)]((0x1270+0x1107*0x1+0x2*-0x11b7)*_0x2356bd))+_0x563388[_0x5d405b(0x3dd)],_0x1d4a29[_0x5d405b(0x678)+'tyle']=_0x424761?_0x563388['YjgfL']:_0x563388['ycOWU'],_0x1d4a29[_0x5d405b(0x467)+_0x5d405b(0x5da)](_0xfd65c,_0x563388['lnpfs'](_0x1a3fd6,_0x563388['MloxD'](_0x24dd04,0x235+0xb*-0x16a+0xd5b)),_0x563388[_0x5d405b(0x3f6)](_0x5d3b93,_0x4a30a5/(-0x3*0x823+-0x1a5*0x5+-0x829*-0x4))+_0x563388[_0x5d405b(0x46f)](0x1118*0x2+-0x33c+-0x7bb*0x4,_0x2356bd))),_0x1d4a29['resto'+'re']();};_0x579e3b[_0x1dd596(0x12c)](_0x57a648,'W','KeyW',_0x14acd6+_0x570df0+_0x110671,_0x44d316,_0x570df0,_0x570df0),_0x579e3b[_0x1dd596(0x12c)](_0x57a648,'A','KeyA',_0x14acd6,_0x44d316+_0x570df0+_0x110671,_0x570df0,_0x570df0),_0x57a648('S',_0x1dd596(0x5ef),_0x579e3b[_0x1dd596(0x501)](_0x14acd6+_0x570df0,_0x110671),_0x44d316+_0x570df0+_0x110671,_0x570df0,_0x570df0),_0x57a648('D','KeyD',_0x14acd6+(_0x570df0+_0x110671)*(0xf3+0x409*-0x2+0x721),_0x579e3b['icMzj'](_0x579e3b[_0x1dd596(0x354)](_0x44d316,_0x570df0),_0x110671),_0x570df0,_0x570df0);var _0x3b28ad=(_0x36b45c-_0x110671)/(-0x2c3*0x7+0x1b03+-0x4*0x1eb),_0x3cc918=_0x579e3b[_0x1dd596(0x281)](_0x44d316,_0x579e3b[_0x1dd596(0x61b)](_0x570df0+_0x110671,-0x250a+-0x1*0x176f+0x3c7b));_0x579e3b[_0x1dd596(0x5ad)](_0x57a648,_0x579e3b[_0x1dd596(0x251)],'mouse'+'1',_0x14acd6,_0x3cc918,_0x3b28ad,_0x570df0,_0x53f898[_0x1dd596(0x11d)]?_0x579e3b[_0x1dd596(0x501)](_0x335c59(-0x5ce*0x2+-0x1*-0x2cc+-0x25*-0x3d),'\x20CPS'):''),_0x57a648(_0x579e3b['xqkpq'],_0x579e3b['Tgxph'],_0x14acd6+_0x3b28ad+_0x110671,_0x3cc918,_0x3b28ad,_0x570df0,_0x53f898['ksCps']?_0x335c59(-0x181+0x1333+0x1f7*-0x9)+_0x579e3b['urTnT']:''),_0x57a648('',_0x1dd596(0x358),_0x14acd6,_0x579e3b[_0x1dd596(0x4ca)](_0x3cc918,_0x570df0)+_0x110671,_0x36b45c,_0x570df0*(-0x5c2+0x1f6d+-0x19ab+0.45));}function _0x4039b5(_0x4980e2){var _0x104785=_0x980b5b,_0x5bd163=_0x579e3b[_0x104785(0x690)](_0x4980e2[_0x104785(0x4bf)],0x6d*-0xf+-0x2508+0x2b6d),_0x3437e1=_0x4980e2[_0x104785(0x260)+'t']/(-0x14bd*0x1+0xeed*-0x2+0x3299),_0x4c1eec=Number(_0x53f898['chSiz'+'e'])||-0x1b14+-0x1507+0x301c,_0x37f114=/^#[0-9a-f]{6}$/i[_0x104785(0x670)](_0x53f898['chCol'+'or'])?_0x53f898[_0x104785(0x17f)+'or']:_0x104785(0x1c0)+'9d';_0x1d4a29['save'](),_0x1d4a29[_0x104785(0x2b8)+'eStyl'+'e']=_0x37f114,_0x1d4a29[_0x104785(0x678)+_0x104785(0x5e2)]=_0x37f114,_0x1d4a29['lineW'+_0x104785(0x3b3)]=Math[_0x104785(0x50d)](0x1*0xb2b+0x355*-0x1+-0x1*0x7d5+0.5,(0x457*-0x8+-0x1b02+0x3dbc)*_0x4c1eec),_0x1d4a29['shado'+_0x104785(0x391)+'r']=_0x37f114,_0x1d4a29[_0x104785(0x55a)+_0x104785(0x3c6)]=-0xa6*-0x27+0x968+-0x22ac;var _0xdcbf0f=_0x579e3b['VbVsr'](0x39*0x6+-0x1feb+0x1e9b*0x1,_0x4c1eec),_0x46c41f=_0x579e3b[_0x104785(0x45c)](0x13*-0xfe+-0x1*0x220f+0x34f1*0x1,_0x4c1eec);_0x1d4a29[_0x104785(0x5e0)+_0x104785(0x3f8)](),_0x1d4a29['moveT'+'o'](_0x5bd163-_0xdcbf0f-_0x46c41f,_0x3437e1),_0x1d4a29[_0x104785(0x1e5)+'o'](_0x579e3b[_0x104785(0x5f9)](_0x5bd163,_0xdcbf0f),_0x3437e1),_0x1d4a29['moveT'+'o'](_0x5bd163+_0xdcbf0f,_0x3437e1),_0x1d4a29['lineT'+'o'](_0x5bd163+_0xdcbf0f+_0x46c41f,_0x3437e1),_0x1d4a29[_0x104785(0x40f)+'o'](_0x5bd163,_0x579e3b[_0x104785(0x4e3)](_0x579e3b['rHStc'](_0x3437e1,_0xdcbf0f),_0x46c41f)),_0x1d4a29[_0x104785(0x1e5)+'o'](_0x5bd163,_0x579e3b[_0x104785(0x4a7)](_0x3437e1,_0xdcbf0f)),_0x1d4a29[_0x104785(0x40f)+'o'](_0x5bd163,_0x3437e1+_0xdcbf0f),_0x1d4a29['lineT'+'o'](_0x5bd163,_0x579e3b['bsxQM'](_0x3437e1+_0xdcbf0f,_0x46c41f)),_0x1d4a29[_0x104785(0x2b8)+'e'](),_0x1d4a29['begin'+_0x104785(0x3f8)](),_0x1d4a29[_0x104785(0x596)](_0x5bd163,_0x3437e1,_0x579e3b[_0x104785(0x61b)](0xb*-0x329+0x1bb5+-0x8b*-0xd+0.6000000000000001,_0x4c1eec),-0x1275+-0xbf*0x4+0x1571,Math['PI']*(0x44d+-0xf4f+0xb04*0x1)),_0x1d4a29['fill'](),_0x1d4a29[_0x104785(0x2a5)+'re']();}function _0x31e2ed(_0x30b329){var _0x19aadf=_0x980b5b,_0x330495=(_0x19aadf(0x318)+_0x19aadf(0x1d0)+_0x19aadf(0x536)+_0x19aadf(0x524))[_0x19aadf(0x430)]('|'),_0x5abfde=0x4b+0xb41+-0xb8c;while(!![]){switch(_0x330495[_0x5abfde++]){case'0':_0x1d4a29['font']=_0x19aadf(0x4cb)+_0x19aadf(0x34d)+'i-mon'+'ospac'+_0x19aadf(0x136)+'ospac'+'e';continue;case'1':_0x1d4a29[_0x19aadf(0x224)+_0x19aadf(0x416)]=_0x19aadf(0x5f5);continue;case'2':_0x1d4a29[_0x19aadf(0x1b3)+'aseli'+'ne']=_0x19aadf(0x2b4);continue;case'3':if(!_0x14ded4['gameL'+_0x19aadf(0x4fe)])_0x51ab67(_0x579e3b[_0x19aadf(0x2e0)],_0x579e3b['nRJtq']);continue;case'4':_0x51ab67(_0x19aadf(0x246)+_0x19aadf(0x41c)+_0x19aadf(0x319)+'1',_0x19aadf(0x1c0)+'9d');continue;case'5':if(_0x53f898['fps'])_0x51ab67(_0x579e3b[_0x19aadf(0x354)](_0x1f52c5,'\x20FPS'));continue;case'6':_0x1d4a29['resto'+'re']();continue;case'7':var _0x51ab67=(_0x2dde97,_0x1f97bd)=>{var _0x5c0a9c=_0x19aadf;_0x1d4a29[_0x5c0a9c(0x678)+_0x5c0a9c(0x5e2)]=_0x563388[_0x5c0a9c(0x206)](_0x1f97bd,_0x5c0a9c(0x35f)+_0x5c0a9c(0x3e7)+_0x5c0a9c(0x21a)+_0x5c0a9c(0x569)+'5)'),_0x1d4a29['fillT'+'ext'](_0x2dde97,_0x3539c6,_0x22fa73),_0x22fa73+=-0xf3e*-0x1+0x5e7+-0x1515;};continue;case'8':_0x1d4a29[_0x19aadf(0x5eb)]();continue;case'9':var _0x22fa73=-0x1860+0x2240+-0x9b4,_0x3539c6=0xa77+-0x54a*0x2+0x1*0x29;continue;}break;}}function _0x42bb08(){var _0x4f5d80=_0x980b5b;_0x563388[_0x4f5d80(0x555)](requestAnimationFrame,_0x42bb08),_0x2518a6++;var _0x2fb131=performance[_0x4f5d80(0x553)]();_0x2fb131-_0x134ff3>=0x3fa+-0x4a*-0x7a+-0x254a&&(_0x1f52c5=Math[_0x4f5d80(0x51a)](_0x563388[_0x4f5d80(0x46f)](_0x2518a6,-0x1492*-0x1+0x1*-0x2509+-0x5*-0x413)/_0x563388[_0x4f5d80(0x38d)](_0x2fb131,_0x134ff3)),_0x2518a6=0x1c0f+0x1f28+-0x1f*0x1e9,_0x134ff3=_0x2fb131);_0x2dadc2(),_0x563388[_0x4f5d80(0x46c)](_0x12884c),_0x1d4a29['clear'+'Rect'](-0x1682*-0x1+-0x760+-0x95*0x1a,0x109a+0x1*-0x1cf1+-0x15f*-0x9,_0x3a962d['w'],_0x3a962d['h']);var _0x593c5d={'left':0x0,'top':0x0,'right':_0x3a962d['w'],'bottom':_0x3a962d['h'],'width':_0x3a962d['w'],'height':_0x3a962d['h']};if(_0x53f898[_0x4f5d80(0x147)+'hair'])_0x4039b5(_0x593c5d);if(_0x53f898[_0x4f5d80(0x531)+'rokes'])_0x6d3708(_0x593c5d);_0x31e2ed(_0x593c5d);}var _0x42597e=document[_0x980b5b(0x62d)+'eElem'+'ent']('div');_0x42597e['id']=_0x980b5b(0x3a4)+_0x980b5b(0x12d),_0x42597e['style'][_0x980b5b(0x2e3)+'xt']=_0x579e3b['dhbLp'];var _0x35ad10=_0x42597e['attac'+_0x980b5b(0x1f1)+'ow']({'mode':_0x980b5b(0x17a)});(document[_0x980b5b(0x5b4)]||document[_0x980b5b(0x48d)+'entEl'+_0x980b5b(0x527)])['appen'+_0x980b5b(0x1ba)+'d'](_0x42597e);var _0x5b6fdc=![],_0x4728f0={};try{if(_0x579e3b['oSxcK']!==_0x579e3b[_0x980b5b(0x177)])_0x4728f0=JSON[_0x980b5b(0x36e)](localStorage['getIt'+'em'](_0x980b5b(0x3a4)+_0x980b5b(0x2ef)+_0x980b5b(0x4da)+'v1')||'{}');else try{new _0x2887b1(_0x29cf8b)['write'+'Field'](_0x2c777e,_0x2a8d95,_0x43bb0f);}catch(_0x4f4976){}}catch(_0x45ad08){}function _0x4530a5(){var _0x31c4f1=_0x980b5b;try{_0x563388['vMCDx'](_0x563388[_0x31c4f1(0x50e)],_0x563388[_0x31c4f1(0x4d7)])?localStorage['setIt'+'em'](_0x31c4f1(0x3a4)+_0x31c4f1(0x2ef)+'r.ui.'+'v1',JSON[_0x31c4f1(0x2aa)+_0x31c4f1(0x5ba)](_0x4728f0)):(_0x38d426[_0x31c4f1(0x1bf)+_0x31c4f1(0x3cc)+'ation'](),_0x273241());}catch(_0x4e08c7){}}function _0xb3fad0(_0x2bc0c7,_0xc20e57){var _0x13e12a=_0x980b5b,_0x3e3bfc={'FBxyS':_0x13e12a(0x2dd)+_0x13e12a(0x3d3)+'ed'};if('UqWxE'!==_0x579e3b['ZaKsK']){var _0x10b1e2=_0x579e3b[_0x13e12a(0x522)]['split']('|'),_0x1fbbd0=-0x11aa*0x1+-0x13b3*-0x1+-0x209;while(!![]){switch(_0x10b1e2[_0x1fbbd0++]){case'0':_0x263b1e['setAt'+'tribu'+'te'](_0x13e12a(0x152),'switc'+'h');continue;case'1':_0x263b1e['type']=_0x579e3b['WEHzo'];continue;case'2':_0x263b1e['oncli'+'ck']=_0x56a7c6=>{var _0x37cc6d=_0x13e12a;_0x56a7c6[_0x37cc6d(0x1bf)+'ropag'+_0x37cc6d(0x11b)]();var _0x587b81=_0x263b1e['getAt'+_0x37cc6d(0x50a)+'te'](_0x3e3bfc[_0x37cc6d(0x1cc)])!==_0x37cc6d(0x1b7);_0x263b1e[_0x37cc6d(0x173)+'tribu'+'te'](_0x3e3bfc[_0x37cc6d(0x1cc)],String(_0x587b81)),_0xc20e57(_0x587b81);};continue;case'3':var _0x263b1e=document['creat'+_0x13e12a(0x571)+'ent'](_0x579e3b[_0x13e12a(0x4dd)]);continue;case'4':_0x263b1e[_0x13e12a(0x1a8)+_0x13e12a(0x31b)]=_0x13e12a(0x4d2)+_0x13e12a(0x335);continue;case'5':_0x263b1e[_0x13e12a(0x173)+_0x13e12a(0x50a)+'te'](_0x13e12a(0x2dd)+'check'+'ed',String(!!_0x2bc0c7));continue;case'6':return _0x263b1e;}break;}}else _0x4339e7['enabl'+'ed']=!!_0x45421d;}function _0x17bc0c(_0x1f1108,_0x5e192f,_0x5e5a34,_0x3b4709,_0x3eb0e3){var _0x4a12e2=_0x980b5b,_0x2a69b1=document['creat'+_0x4a12e2(0x571)+'ent'](_0x579e3b['IpBkp']);_0x2a69b1[_0x4a12e2(0x1a8)+_0x4a12e2(0x31b)]=_0x579e3b['CRyMv'];var _0x484fbe=document[_0x4a12e2(0x62d)+'eElem'+_0x4a12e2(0x453)](_0x4a12e2(0x19f));_0x484fbe[_0x4a12e2(0x225)]='range',_0x484fbe['class'+_0x4a12e2(0x31b)]=_0x579e3b['gXqqu'],_0x484fbe['min']=_0x5e192f,_0x484fbe[_0x4a12e2(0x50d)]=_0x5e5a34,_0x484fbe[_0x4a12e2(0x159)]=_0x3b4709,_0x484fbe[_0x4a12e2(0x3a2)]=_0x1f1108;var _0xd90b0c=document[_0x4a12e2(0x62d)+_0x4a12e2(0x571)+'ent'](_0x579e3b[_0x4a12e2(0x131)]);_0xd90b0c[_0x4a12e2(0x1a8)+'Name']=_0x579e3b['vTYUM'],_0xd90b0c[_0x4a12e2(0x364)+'onten'+'t']=_0x579e3b['ueJJU'](String,_0x1f1108);var _0x584505=()=>{var _0x169d25=_0x4a12e2;_0xd90b0c[_0x169d25(0x364)+_0x169d25(0x222)+'t']=_0x563388['hyorZ'](String,_0x484fbe[_0x169d25(0x3a2)]),_0x2a69b1[_0x169d25(0x19a)][_0x169d25(0x32e)+_0x169d25(0x18a)+'y'](_0x563388[_0x169d25(0x478)],_0x563388['pDvdN']((_0x484fbe['value']-_0x5e192f)/(_0x5e5a34-_0x5e192f)*(-0x5*0x473+0x4*0x634+0x1*-0x22d),'%'));};return _0x484fbe['oninp'+'ut']=()=>{_0x584505(),_0x3eb0e3(Number(_0x484fbe['value']));},_0x584505(),_0x2a69b1[_0x4a12e2(0x175)+'d'](_0x484fbe,_0xd90b0c),_0x2a69b1;}function _0x61b6d6(_0x13091b,_0x11a674){var _0x1cc1c4=_0x980b5b,_0x304b94=document[_0x1cc1c4(0x62d)+_0x1cc1c4(0x571)+'ent'](_0x1cc1c4(0x19f));return _0x304b94['type']=_0x563388[_0x1cc1c4(0x598)],_0x304b94['class'+_0x1cc1c4(0x31b)]=_0x563388[_0x1cc1c4(0x57e)],_0x304b94['value']=/^#[0-9a-f]{6}$/i[_0x1cc1c4(0x670)](_0x13091b)?_0x13091b:'#ff6b'+'9d',_0x304b94[_0x1cc1c4(0x449)+'ut']=()=>_0x11a674(_0x304b94[_0x1cc1c4(0x3a2)]),_0x304b94;}function _0x33f3ba(_0x2db13a,_0x583b72,_0x4fc140){var _0x3c8c90=_0x980b5b,_0x2b7352={'TNCpm':function(_0x5ed621,_0xb7c07){var _0x3673dd=_0x5082;return _0x563388[_0x3673dd(0x13d)](_0x5ed621,_0xb7c07);},'UiKcr':'rgba('+'255,1'+_0x3c8c90(0x25f)+'7,0.8'+'5)','JJuDo':_0x3c8c90(0x35f)+'22,8,'+_0x3c8c90(0x1cd)+'7)','wECZO':_0x563388['ALRlC'],'CoLFi':_0x3c8c90(0x40b)+'r','HNGnP':_0x563388['drFjJ'],'kPfGt':function(_0x35e8ec,_0x321328){return _0x563388['lnpfs'](_0x35e8ec,_0x321328);},'pVtKF':'700\x20','lavEf':function(_0xa9f06f,_0x5afe74){return _0xa9f06f-_0x5afe74;},'KwUDm':function(_0x4d1a98,_0x471e70){return _0x4d1a98+_0x471e70;},'hDsWj':function(_0x4209d6,_0xfa466f){return _0x4209d6*_0xfa466f;},'SSMNk':_0x3c8c90(0x296),'CVvIK':_0x3c8c90(0x35f)+'255,2'+_0x3c8c90(0x21a)+'0,0.5'+'5)'},_0x98ef2a=document['creat'+'eElem'+_0x3c8c90(0x453)](_0x563388['bxVBI']);_0x98ef2a[_0x3c8c90(0x1a8)+'Name']=_0x563388[_0x3c8c90(0x6ab)];for(var [_0x141294,_0x25f772]of _0x583b72){if(_0x3c8c90(0x551)!=='qjnCf'){var _0x4c1c96=_0x13582a[_0x3c8c90(0x1e8)](_0x217430);_0x5b46ff[_0x3c8c90(0x5eb)](),_0x46f683['begin'+'Path']();if(_0x3a9466['round'+'Rect'])_0x2d65f4[_0x3c8c90(0x51a)+'Rect'](_0x255764,_0x2f698d,_0x16ad6c,_0x50494f,_0x2b7352['TNCpm'](0x2429+-0x1cc8+0x1*-0x75a,_0x554086));else _0x1d6af6[_0x3c8c90(0x3f4)](_0x1b7f56,_0x349ab0,_0x160525,_0x1994b6);_0x3e3b47[_0x3c8c90(0x678)+_0x3c8c90(0x5e2)]=_0x4c1c96?_0x2b7352['UiKcr']:_0x2b7352['JJuDo'],_0x594295['fill'](),_0x2027ad[_0x3c8c90(0x69a)+'idth']=0x66f*0x5+-0x266*0x4+-0x141*0x12,_0x512c67[_0x3c8c90(0x2b8)+_0x3c8c90(0x208)+'e']=_0x4c1c96?_0x354052:_0x3c8c90(0x35f)+_0x3c8c90(0x3c0)+_0x3c8c90(0x25f)+'7,0.3'+'5)',_0x346965[_0x3c8c90(0x2b8)+'e'](),_0x4c1c96&&(_0x120556['shado'+_0x3c8c90(0x391)+'r']=_0x46c401,_0xdbae6[_0x3c8c90(0x55a)+_0x3c8c90(0x3c6)]=0x3f4+0x1946+-0x4*0x74b,_0x5bddbb['fill'](),_0x58e79b[_0x3c8c90(0x55a)+_0x3c8c90(0x3c6)]=0x5e*0x25+-0x6df*-0x2+-0x1b54),_0x7922f6['fillS'+'tyle']=_0x4c1c96?_0x3c8c90(0x296):_0x2b7352['wECZO'],_0x246fc9['textA'+'lign']=_0x2b7352[_0x3c8c90(0x4b2)],_0x1a1f79[_0x3c8c90(0x1b3)+'aseli'+'ne']=_0x2b7352['HNGnP'],_0x39a66e[_0x3c8c90(0x334)]=_0x2b7352['kPfGt'](_0x2b7352[_0x3c8c90(0x30e)],_0x24b75f['round']((-0x1c94+-0x207+-0x1ea7*-0x1)*_0x148d40))+(_0x3c8c90(0x504)+_0x3c8c90(0x2a3)+_0x3c8c90(0x5d8)+'f,sys'+'tem-u'+_0x3c8c90(0x5c8)+_0x3c8c90(0x66d)+'if'),_0x3c2a7c['fillT'+'ext'](_0x4af19e,_0xa0130d+_0x689c67/(0xf*0x235+0x13*-0x115+-0xc8a),_0x2b7352[_0x3c8c90(0x20f)](_0x2b7352[_0x3c8c90(0x39c)](_0x3b0853,_0x4284ac/(-0x1ae9+0x9e*-0x2b+0x55*0xa1)),_0x50aafd?_0x2b7352[_0x3c8c90(0x57a)](-0x1248+0x1012+0x1*0x23b,_0x2f8321):-0x1a23+0x1a1c+0x7)),_0x2a5b82&&(_0x2eea22[_0x3c8c90(0x334)]=_0x2b7352[_0x3c8c90(0x5d5)](_0x3c8c90(0x26e),_0x16cd4f['round'](_0x2b7352[_0x3c8c90(0x167)](-0xc68+0x18eb*0x1+-0xc7a,_0x187d6b)))+(_0x3c8c90(0x504)+_0x3c8c90(0x2a3)+'-seri'+'f,sys'+'tem-u'+_0x3c8c90(0x5c8)+'s-ser'+'if'),_0x5d3dde[_0x3c8c90(0x678)+_0x3c8c90(0x5e2)]=_0x4c1c96?_0x2b7352[_0x3c8c90(0x2b1)]:_0x2b7352[_0x3c8c90(0x385)],_0x23351f[_0x3c8c90(0x467)+_0x3c8c90(0x5da)](_0x43bd6d,_0x2b7352[_0x3c8c90(0x5d5)](_0x1d68af,_0x113cfc/(0xf00+0x1*0x8e9+-0x17e7)),_0x4be905+_0x41805e/(-0x10*-0x12a+-0x3*0x907+0x877)+(-0x94d+0x7e1*-0x4+0x28d9)*_0x557e0f)),_0x5642d3[_0x3c8c90(0x2a5)+'re']();}else{var _0x4943de=document['creat'+'eElem'+_0x3c8c90(0x453)]('optio'+'n');_0x4943de[_0x3c8c90(0x3a2)]=_0x141294,_0x4943de[_0x3c8c90(0x364)+_0x3c8c90(0x222)+'t']=_0x25f772,_0x98ef2a[_0x3c8c90(0x175)+'dChil'+'d'](_0x4943de);}}return _0x98ef2a[_0x3c8c90(0x3a2)]=_0x2db13a,_0x98ef2a['oncha'+_0x3c8c90(0x46a)]=()=>_0x4fc140(_0x98ef2a['value']),_0x98ef2a;}function _0x517a37(_0x59bcc9,_0x4c405c){var _0x442828=_0x980b5b,_0x1dac50={'enFoz':function(_0xce80b){return _0xce80b();}},_0xfbf50e=document['creat'+'eElem'+_0x442828(0x453)](_0x442828(0x672)+'n');return _0xfbf50e[_0x442828(0x225)]=_0x579e3b[_0x442828(0x4dd)],_0xfbf50e[_0x442828(0x1a8)+'Name']=_0x579e3b[_0x442828(0x12b)],_0xfbf50e[_0x442828(0x364)+'onten'+'t']=_0x59bcc9,_0xfbf50e[_0x442828(0x297)+'ck']=_0xc5a804=>{var _0x31dbdf=_0x442828;_0xc5a804['stopP'+_0x31dbdf(0x3cc)+_0x31dbdf(0x11b)](),_0x1dac50[_0x31dbdf(0x55d)](_0x4c405c);},_0xfbf50e;}function _0xaf3050(_0x41fcfc,_0x1a1fe4,_0x5f3025){var _0x1a95a9=_0x980b5b;if(_0x563388[_0x1a95a9(0x299)]==='QonLb')_0x14b75d[_0x1a95a9(0x17f)+'or']=_0x43dd53,_0x1edb57();else{var _0x24cebb=document[_0x1a95a9(0x62d)+_0x1a95a9(0x571)+'ent']('div');_0x24cebb['class'+'Name']='sk-ct'+'l';var _0x569311=document[_0x1a95a9(0x62d)+'eElem'+'ent']('span');_0x569311['class'+'Name']='sk-la'+'bel',_0x569311[_0x1a95a9(0x364)+_0x1a95a9(0x222)+'t']=_0x41fcfc;if(_0x1a1fe4){if(_0x563388[_0x1a95a9(0x308)]==='mVXYF'){var _0x348653=document['creat'+_0x1a95a9(0x571)+_0x1a95a9(0x453)](_0x563388[_0x1a95a9(0x62c)]);_0x348653[_0x1a95a9(0x1a8)+_0x1a95a9(0x31b)]=_0x1a95a9(0x618)+'nt',_0x348653['textC'+_0x1a95a9(0x222)+'t']=_0x1a1fe4,_0x569311['appen'+_0x1a95a9(0x1ba)+'d'](_0x348653);}else _0x408cf5[_0x1a95a9(0x55a)+'wColo'+'r']=_0x3c9838,_0x4afb71['shado'+'wBlur']=-0x2016+-0xfe2*0x2+-0x664*-0xa,_0x1b75a3['fill'](),_0x30179d[_0x1a95a9(0x55a)+'wBlur']=0xb*-0x34+-0x7*-0x4ed+0x673*-0x5;}return _0x24cebb[_0x1a95a9(0x175)+'d'](_0x569311,_0x5f3025),_0x24cebb;}}function _0x4c0041(_0x5e0b8a,_0x5a515b){var _0x5237bf=_0x980b5b,_0x21f1da=document[_0x5237bf(0x62d)+_0x5237bf(0x571)+'ent'](_0x5237bf(0x5b6));return _0x21f1da['class'+_0x5237bf(0x31b)]=_0x579e3b['UCapS']+(_0x5a515b?_0x579e3b['XpJnt']:''),_0x21f1da[_0x5237bf(0x364)+_0x5237bf(0x222)+'t']=_0x5e0b8a,_0x21f1da;}function _0x4d258b(_0x21ce5b,_0x2fe9ee,_0x50d1e6,_0x240377,_0x462355){var _0x414a8b=_0x980b5b,_0x47ca3e={'ApAUe':_0x414a8b(0x66f)+'esc'};if(_0x563388['hmsFE'](_0x414a8b(0x4a3),_0x563388[_0x414a8b(0x3ee)])){var _0xc30058=_0x563388[_0x414a8b(0x679)][_0x414a8b(0x430)]('|'),_0xbd5758=-0xc0d+-0x250f*-0x1+-0x1902;while(!![]){switch(_0xc30058[_0xbd5758++]){case'0':_0x480477['appen'+_0x414a8b(0x1ba)+'d'](_0x2b782e);continue;case'1':if(_0x240377){var _0x53632f=_0x563388['HmZEe'](_0xb3fad0,_0x50d1e6,_0x1ed1b8=>{var _0xf5167a=_0x414a8b;_0x480477[_0xf5167a(0x1a8)+_0xf5167a(0x3bc)]['toggl'+'e']('on',_0x1ed1b8),_0x240377(_0x1ed1b8);});_0x2b782e[_0x414a8b(0x175)+'d'](_0x5e0062,_0x53632f);}else _0x2b782e[_0x414a8b(0x175)+_0x414a8b(0x1ba)+'d'](_0x5e0062);continue;case'2':_0x480477['class'+_0x414a8b(0x31b)]=_0x563388[_0x414a8b(0x332)]+(_0x50d1e6?_0x414a8b(0x194):'');continue;case'3':_0x2b782e['class'+_0x414a8b(0x31b)]='sk-ca'+_0x414a8b(0x1df)+'ad';continue;case'4':var _0x480477=document[_0x414a8b(0x62d)+'eElem'+'ent'](_0x414a8b(0x5b6));continue;case'5':var _0x5dc16d=document['creat'+_0x414a8b(0x571)+_0x414a8b(0x453)](_0x414a8b(0x4b4)+'g');continue;case'6':var _0x5e0062=document['creat'+'eElem'+'ent'](_0x563388[_0x414a8b(0x265)]);continue;case'7':if(_0x462355&&_0x462355[_0x414a8b(0x2ae)+'h']){var _0x2122c4=(_0x414a8b(0x328)+_0x414a8b(0x24f)+'3|2|5')[_0x414a8b(0x430)]('|'),_0x76493d=0x1*-0x1532+-0x1d*-0x79+-0xd5*-0x9;while(!![]){switch(_0x2122c4[_0x76493d++]){case'0':var _0x5ed19d=document[_0x414a8b(0x62d)+_0x414a8b(0x571)+'ent'](_0x563388[_0x414a8b(0x265)]);continue;case'1':_0x5ed19d['textC'+'onten'+'t']=_0x2fe9ee;continue;case'2':for(var _0x530e23 of _0x462355)_0x37f5f5[_0x414a8b(0x175)+_0x414a8b(0x1ba)+'d'](_0x530e23);continue;case'3':_0x37f5f5['appen'+'dChil'+'d'](_0x5ed19d);continue;case'4':_0x37f5f5['class'+'Name']=_0x563388[_0x414a8b(0x659)];continue;case'5':_0x480477[_0x414a8b(0x175)+_0x414a8b(0x1ba)+'d'](_0x37f5f5);continue;case'6':_0x5ed19d[_0x414a8b(0x1a8)+_0x414a8b(0x31b)]=_0x563388[_0x414a8b(0x49d)];continue;case'7':var _0x37f5f5=document['creat'+_0x414a8b(0x571)+_0x414a8b(0x453)](_0x414a8b(0x5b6));continue;}break;}}continue;case'8':return _0x480477;case'9':_0x5dc16d[_0x414a8b(0x364)+_0x414a8b(0x222)+'t']=_0x21ce5b;continue;case'10':var _0x2b782e=document['creat'+_0x414a8b(0x571)+_0x414a8b(0x453)](_0x563388['fAyJV']);continue;case'11':_0x5e0062[_0x414a8b(0x175)+'dChil'+'d'](_0x5dc16d);continue;case'12':_0x5e0062[_0x414a8b(0x1a8)+'Name']=_0x563388[_0x414a8b(0x230)];continue;}break;}}else{var _0x1eb1aa=_0x2428d4[_0x414a8b(0x62d)+'eElem'+_0x414a8b(0x453)]('div');_0x1eb1aa[_0x414a8b(0x1a8)+'Name']=_0x414a8b(0x1c7)+_0x414a8b(0x653);var _0x18c3e6=_0x2c3db5['creat'+'eElem'+_0x414a8b(0x453)](_0x414a8b(0x5b6));_0x18c3e6[_0x414a8b(0x1a8)+_0x414a8b(0x31b)]=_0x47ca3e[_0x414a8b(0x393)],_0x18c3e6[_0x414a8b(0x364)+_0x414a8b(0x222)+'t']=_0x18f617,_0x1eb1aa[_0x414a8b(0x175)+'dChil'+'d'](_0x18c3e6);for(var _0x575b49 of _0x1d6b1b)_0x1eb1aa[_0x414a8b(0x175)+_0x414a8b(0x1ba)+'d'](_0x575b49);_0x5b3dca['appen'+_0x414a8b(0x1ba)+'d'](_0x1eb1aa);}}var _0x54d9cf=[{'id':_0x980b5b(0x4bb)+'t','label':_0x980b5b(0x188)+'t'},{'id':'move','label':'Move'},{'id':'visua'+'l','label':_0x980b5b(0x4f2)+'l'},{'id':_0x980b5b(0x1f9),'label':'Misc'},{'id':_0x579e3b[_0x980b5b(0x4c8)],'label':'Safet'+'y'}];function _0x513a5e(){var _0x532cdc=_0x980b5b,_0x25e8a9={'duMZq':function(_0x3fd7b0,_0x5bd119){return _0x3fd7b0!==_0x5bd119;},'IJyBY':_0x532cdc(0x14d)},_0x59f49c=_0x14ded4['safeM'+_0x532cdc(0x422)]?_0x579e3b['qxYyL']:_0x14ded4[_0x532cdc(0x4ec)]?_0x579e3b['XeGZl'](_0x579e3b[_0x532cdc(0x281)](_0x579e3b[_0x532cdc(0x53c)](_0x579e3b['feAkB'],_0x14ded4[_0x532cdc(0x2f9)+_0x532cdc(0x4a8)]?_0x579e3b['RHLhX'](_0x579e3b['XeGZl'](_0x14ded4['hooks'+'Ok'],'/'),_0x14ded4[_0x532cdc(0x2f9)+'Total'])+('\x20hook'+'s'):_0x532cdc(0x2d2)+'ks\x20ar'+'med\x20('+'all\x20o'+'ff)')+(_0x532cdc(0x4ae)+'me\x20')+(_0x14ded4['gameL'+'oaded']?'loade'+'d':'loadi'+'ng')+(_0x532cdc(0x534)+'ooter'+'\x20'),_0x14ded4[_0x532cdc(0x570)+_0x532cdc(0x49b)]?_0x532cdc(0x2ed):_0x532cdc(0x2b6))+_0x579e3b[_0x532cdc(0x4f9)],_0x14ded4[_0x532cdc(0x696)+_0x532cdc(0x141)]?'held':_0x532cdc(0x2b6)):_0x532cdc(0x4f5)+_0x532cdc(0x25e)+'NG\x20—\x20'+_0x532cdc(0x4a6)+'ay\x20on'+'ly\x20(r'+_0x532cdc(0x2b5)+'all\x20t'+_0x532cdc(0x3c4)+_0x532cdc(0x454)+'ipt)';if(_0x14ded4['lastE'+'rror'])_0x59f49c+=_0x579e3b[_0x532cdc(0x638)]('\x20|\x20ER'+_0x532cdc(0x3c2),_0x14ded4[_0x532cdc(0x14f)+_0x532cdc(0x3bf)]);return _0x4d258b(_0x532cdc(0x4aa)+'s',_0x59f49c,_0x14ded4[_0x532cdc(0x4ec)],null,[_0xaf3050(_0x532cdc(0x386)+_0x532cdc(0x1de)+'lock','calls'+_0x532cdc(0x5cd)+_0x532cdc(0x238)+_0x532cdc(0x561)+'plica'+'tion.'+'set_t'+_0x532cdc(0x1f8)+'Frame'+'Rate',_0x579e3b['xRLgD'](_0x517a37,_0x532cdc(0x2b2),()=>{var _0x3af9fa=_0x532cdc;try{if(_0x25e8a9[_0x3af9fa(0x456)](_0x3af9fa(0x14d),_0x25e8a9[_0x3af9fa(0x5a5)]))_0x569154(!_0x37ce5d);else{if(_0x381518)_0x381518[_0x3af9fa(0x11c)]('Unity'+_0x3af9fa(0x5b3)+'e.App'+_0x3af9fa(0x607)+_0x3af9fa(0x4c2),'set_t'+'arget'+'Frame'+'Rate',[-0x632*-0x2+-0x14*0x1af+0x1638]);}}catch(_0x558b09){}}))]);}function _0x1dcb84(_0x237a16){var _0x223a31=_0x980b5b,_0x26b00b={'MJvxh':_0x579e3b[_0x223a31(0x606)],'LkhFY':_0x223a31(0x381),'dVkXk':function(_0x518eab){return _0x518eab();},'oKzDJ':function(_0x3793f7){return _0x3793f7();},'LIRNv':_0x579e3b['IIBzr'],'QmOuR':function(_0x4bfe19,_0x2511ae){return _0x4bfe19===_0x2511ae;},'VZMEv':'rPNwS','PUcMp':_0x579e3b['SaFSg'],'WIeSZ':_0x579e3b[_0x223a31(0x1a9)],'BXykd':function(_0x462f51,_0x587f66,_0x3abffe,_0x27b78f,_0x4b113b,_0x38b948,_0x257468,_0x1ebd8a){return _0x462f51(_0x587f66,_0x3abffe,_0x27b78f,_0x4b113b,_0x38b948,_0x257468,_0x1ebd8a);},'KgHvW':_0x223a31(0x556),'gzXbA':_0x579e3b['hUdOv'],'UcXGi':function(_0x2f8d38,_0x332489,_0x59e5bb,_0x307186,_0x281e97,_0x3fc119,_0x505476,_0x50f444){return _0x2f8d38(_0x332489,_0x59e5bb,_0x307186,_0x281e97,_0x3fc119,_0x505476,_0x50f444);},'OIKXr':_0x579e3b[_0x223a31(0x27a)],'sKmmH':_0x223a31(0x5fa)+'ve','WpADx':_0x223a31(0x36c)+_0x223a31(0x4fa)+_0x223a31(0x610)+'.Over'+_0x223a31(0x394)+_0x223a31(0x684)+'ent','iHMvb':_0x579e3b[_0x223a31(0x13b)],'NkmUs':'movem'+'ents','uQvya':'Dzejt','HLHqQ':function(_0x40350f){return _0x40350f();},'bnjaY':function(_0xee98c5,_0x5ef8e8){return _0xee98c5!==_0x5ef8e8;},'BnDfs':_0x579e3b[_0x223a31(0x331)],'HGQZT':_0x223a31(0x4af)+_0x223a31(0x42a)+'0','ixXhE':function(_0x1a47ad){var _0x5b7365=_0x223a31;return _0x579e3b[_0x5b7365(0x48e)](_0x1a47ad);}};if(_0x237a16==='comba'+'t')return[_0x579e3b[_0x223a31(0x48e)](_0x513a5e),_0x4d258b(_0x223a31(0x353)+'ode',_0x223a31(0x192)+_0x223a31(0x605)+_0x223a31(0x396)+'Initi'+'ateTa'+_0x223a31(0x4c7)+_0x223a31(0x31a)+_0x223a31(0x226)+_0x223a31(0x4fd)+_0x223a31(0x300)+'lDie,'+'\x20so\x20n'+'othin'+_0x223a31(0x550)+'\x20hurt'+_0x223a31(0x5c2)+'ill\x20y'+_0x223a31(0x63d),_0x53f898['god'],_0x1c53f4=>{var _0x25497c=_0x223a31;_0x53f898[_0x25497c(0x4cf)]=_0x1c53f4,_0x563388[_0x25497c(0x326)](_0x3c9880),_0x1eda96(_0x563388[_0x25497c(0x4c3)],_0x1c53f4),_0x1eda96(_0x563388[_0x25497c(0x65d)],_0x1c53f4);},[]),_0x4d258b(_0x223a31(0x493)+'coil','Skips'+'\x20Reco'+_0x223a31(0x1d1)+'ion.T'+_0x223a31(0x4b7)+_0x223a31(0x5ec)+_0x223a31(0x470)+_0x223a31(0x14b)+_0x223a31(0x2ea)+_0x223a31(0x279)+_0x223a31(0x673)+'ance.',_0x53f898[_0x223a31(0x565)+'oil'],_0x4ff3a7=>{var _0x24633d=_0x223a31;_0x53f898[_0x24633d(0x565)+'oil']=_0x4ff3a7,_0x3c9880(),_0x1eda96(_0x26b00b[_0x24633d(0x545)],_0x4ff3a7);},[]),_0x4d258b(_0x223a31(0x30a)+_0x223a31(0x355),_0x579e3b[_0x223a31(0x45b)],_0x53f898[_0x223a31(0x401)+'ead'],_0x16a1cc=>{var _0x8f86b0=_0x223a31;_0x53f898[_0x8f86b0(0x401)+_0x8f86b0(0x426)]=_0x16a1cc,_0x3c9880();},[]),_0x4d258b(_0x223a31(0x233)+'\x20Fire'+_0x223a31(0x3c5)+']','Scale'+_0x223a31(0x5dc)+_0x223a31(0x2ff)+'Weapo'+_0x223a31(0x26c)+_0x223a31(0x1b1)+'\x20to\x201'+_0x223a31(0x557)+'erver'+_0x223a31(0x33f)+'still'+_0x223a31(0x56b)+_0x223a31(0x2fa)+'s.',_0x53f898[_0x223a31(0x59f)+'Exp'],_0x3f3da0=>{var _0x2a1e05=_0x223a31;_0x2a1e05(0x381)===_0x26b00b[_0x2a1e05(0x134)]?(_0x53f898['rapid'+_0x2a1e05(0x680)]=_0x3f3da0,_0x26b00b['dVkXk'](_0x3c9880)):_0x2c68fc[_0x2a1e05(0x190)+'e'](_0x4e8107['code']);},[]),_0x4d258b('Damag'+_0x223a31(0x635)+'P]',_0x579e3b[_0x223a31(0x45a)],_0x53f898['damag'+_0x223a31(0x336)],_0x39aaa5=>{_0x53f898['damag'+'eExp']=_0x39aaa5,_0x26b00b['oKzDJ'](_0x3c9880);},[_0x579e3b['qifNt'](_0xaf3050,_0x223a31(0x16d)+_0x223a31(0x4be)+'ue',null,_0x17bc0c(_0x53f898['damag'+_0x223a31(0x51e)+'e'],-0xe27*-0x2+-0x24bf+0x87b,-0x183a+-0x1*-0x74f+0x12df,0x1*-0x201d+-0x14ad+0x34cf*0x1,_0x3883ca=>{var _0x422b49=_0x223a31;_0x53f898['damag'+_0x422b49(0x51e)+'e']=_0x3883ca,_0x563388['nVcdh'](_0x3c9880);}))]),_0x4d258b('Infin'+'ite\x20A'+'mmo\x20['+_0x223a31(0x2cb),_0x223a31(0x5aa)+_0x223a31(0x492)+'e\x20wea'+'pon\x27s'+'\x20cach'+_0x223a31(0x502)+'mo\x20to'+_0x223a31(0x361)+_0x223a31(0x60c)+'\x20200m'+'s.',_0x53f898['infAm'+_0x223a31(0x3a6)],_0xbfdf7e=>{var _0x83012b=_0x223a31;if(_0x563388[_0x83012b(0x5f8)]===_0x83012b(0x5e9))return-0x38*0x9e+0x146f+-0xe21*-0x1;else _0x53f898[_0x83012b(0x370)+_0x83012b(0x3a6)]=_0xbfdf7e,_0x563388['dPokM'](_0x3c9880);},[_0x579e3b[_0x223a31(0x55c)](_0x4c0041,_0x223a31(0x5ac)+'loads'+_0x223a31(0x35c)+_0x223a31(0x23e)+_0x223a31(0x562)+'he\x20de'+_0x223a31(0x28f)+'nt\x20ha'+_0x223a31(0x26b)+_0x223a31(0x613)+_0x223a31(0x42f)+'.')])];if(_0x237a16===_0x223a31(0x174))return[_0x4d258b(_0x579e3b[_0x223a31(0x503)],_0x579e3b['GTwFP'],_0x53f898['speed'+_0x223a31(0x41f)]!==0x25*-0x1d+-0x142*-0x1f+-0x2269,null,[_0x579e3b[_0x223a31(0x2ab)](_0xaf3050,_0x223a31(0x647)+'\x20%',_0x579e3b[_0x223a31(0x54c)],_0x579e3b['aJDbb'](_0x17bc0c,_0x53f898[_0x223a31(0x5f4)+'Pct'],0x21a3+0x1*-0x1733+-0xa3e,0x817+0x15c9*-0x1+0xede,-0x291*-0xf+-0x2e2*-0x3+0x1d0*-0x1a,_0x51e14c=>{var _0x2ba5ba=_0x223a31;_0x53f898['speed'+_0x2ba5ba(0x41f)]=_0x51e14c,_0x3c9880();}))]),_0x4d258b(_0x579e3b[_0x223a31(0x1ef)],_0x223a31(0x1a7)+'s\x20Mov'+_0x223a31(0x527)+_0x223a31(0x4b6)+_0x223a31(0x1fe)+'\x20and\x20'+'both\x20'+'gravi'+'ty\x20va'+'lues.',_0x579e3b[_0x223a31(0x2fb)](_0x53f898[_0x223a31(0x660)+'ct'],-0xcb4+-0x1d6*0x15+0x4b2*0xb)||_0x579e3b['hDTYf'](_0x53f898[_0x223a31(0x66a)+_0x223a31(0x120)],0x85e+0x15ec+0xb2*-0x2b),null,[_0x579e3b['qifNt'](_0xaf3050,_0x579e3b[_0x223a31(0x11e)],null,_0x17bc0c(_0x53f898[_0x223a31(0x660)+'ct'],0x20ff+0xe9f*-0x1+0x166*-0xd,-0x1a92+-0x1c9a*-0x1+-0xdc,-0x3cb*-0x3+0x425*-0x2+-0x189*0x2,_0x243673=>{var _0x4d1480=_0x223a31;_0x53f898[_0x4d1480(0x660)+'ct']=_0x243673,_0x26b00b['dVkXk'](_0x3c9880);})),_0xaf3050(_0x223a31(0x3ca)+_0x223a31(0x389),_0x579e3b['SYqXn'],_0x17bc0c(_0x53f898[_0x223a31(0x66a)+'tyPct'],0xf79+-0x2412+0x14a3,-0x2132+-0x14d5*-0x1+0x2a1*0x5,0x1b3e+0x1638+-0x3*0x107b,_0x67103a=>{_0x53f898['gravi'+'tyPct']=_0x67103a,_0x3c9880();}))]),_0x579e3b['oMKle'](_0x4d258b,'Bunny'+_0x223a31(0x4d6),_0x579e3b[_0x223a31(0x601)],_0x53f898['bhop'],_0x415c0b=>{_0x53f898['bhop']=_0x415c0b,_0x3c9880();},[])];if(_0x237a16===_0x223a31(0x4df)+'l')return[_0x579e3b['NyBXh'](_0x4d258b,'Keyst'+_0x223a31(0x4dc),_0x579e3b[_0x223a31(0x2de)],_0x53f898[_0x223a31(0x531)+_0x223a31(0x4dc)],_0x224b1a=>{var _0x1b600b=_0x223a31;_0x53f898['keyst'+_0x1b600b(0x4dc)]=_0x224b1a,_0x3c9880();},[_0xaf3050(_0x223a31(0x4ab)+_0x223a31(0x4c2),null,_0x33f3ba(_0x53f898[_0x223a31(0x259)],[['bl',_0x579e3b[_0x223a31(0x688)]],['br',_0x579e3b[_0x223a31(0x644)]],['ml',_0x579e3b[_0x223a31(0x34b)]]],_0x420e35=>{var _0x4f426a=_0x223a31;_0x26b00b[_0x4f426a(0x47d)]==='GndVO'?(_0x3bd11a[_0x4f426a(0x11d)]=_0x574ff9,_0x5524da()):(_0x53f898[_0x4f426a(0x259)]=_0x420e35,_0x3c9880());})),_0xaf3050(_0x579e3b['EYNaL'],null,_0x579e3b['Tdzib'](_0x17bc0c,_0x53f898[_0x223a31(0x2d7)+'le'],-0x9af+-0x1c98+0x2647+0.6,-0x1*-0x213c+-0x1*-0x547+-0x2682+0.6000000000000001,0x14d3+0x1a89*0x1+-0x2f5c+0.05,_0x5cde7d=>{var _0x11a60d=_0x223a31;_0x26b00b['QmOuR'](_0x26b00b['VZMEv'],_0x26b00b['VZMEv'])?(_0x53f898[_0x11a60d(0x2d7)+'le']=_0x5cde7d,_0x26b00b[_0x11a60d(0x309)](_0x3c9880)):(_0x30127e[_0x11a60d(0x2d7)+'le']=_0x2e249d,_0x78d213());})),_0x579e3b['zNxOd'](_0xaf3050,_0x223a31(0x540)+'eadou'+'t',null,_0x579e3b[_0x223a31(0x427)](_0xb3fad0,_0x53f898[_0x223a31(0x11d)],_0x2b6bd1=>{var _0x3a3c66=_0x223a31,_0x5e8795={'OUlwJ':function(_0x377c2a){return _0x377c2a();}};_0x26b00b['PUcMp']===_0x3a3c66(0x359)?(_0x91ecb[_0x3a3c66(0x60e)]=_0x1bda60,_0x5e8795['OUlwJ'](_0x14ba3a)):(_0x53f898['ksCps']=_0x2b6bd1,_0x3c9880());}))]),_0x4d258b(_0x223a31(0x17d)+'hair',_0x223a31(0x211)+'m\x20cen'+_0x223a31(0x250)+_0x223a31(0x5af)+_0x223a31(0x417),_0x53f898[_0x223a31(0x147)+'hair'],_0x2df6f1=>{var _0x30222b=_0x223a31;if('Dzejt'!==_0x26b00b[_0x30222b(0x67d)]){var _0x2b8699=_0x26b00b[_0x30222b(0x369)][_0x30222b(0x430)]('|'),_0x5d34b7=0xfe+0x25*0x6a+-0x1050;while(!![]){switch(_0x2b8699[_0x5d34b7++]){case'0':_0x1086c7=_0x40f561['Unity'+_0x30222b(0x180)+'dkit']['Value'+_0x30222b(0x169)+'er'];continue;case'1':if(_0x1ffc97[_0x30222b(0x292)+_0x30222b(0x2d9)+'il'])_0x26b00b[_0x30222b(0x2df)](_0x143afd,_0x26b00b['MJvxh'],'Legio'+_0x30222b(0x4fa)+'forms'+_0x30222b(0x56d)+_0x30222b(0x394)+'Recoi'+_0x30222b(0x35a)+'on',_0x30222b(0x4cc),['i32'],_0x10cc2f,_0xe46417,!!_0x4cb91c[_0x30222b(0x565)+'oil']);continue;case'2':if(_0xda5028['hookG'+'od'])_0x246f9c('god',_0x30222b(0x609)+'th','Initi'+_0x30222b(0x525)+_0x30222b(0x4c7)+_0x30222b(0x387),[_0x26b00b[_0x30222b(0x43b)],_0x26b00b['KgHvW']],_0x2ed4b5,_0x420b51,!!_0x4ea629['god']);continue;case'3':_0x453de5=_0x20ba67['Unity'+_0x30222b(0x180)+_0x30222b(0x28e)][_0x30222b(0x5d9)+'me']['creat'+'ePlug'+'in']({'name':_0x26b00b[_0x30222b(0x67c)],'version':'1.1.0','referencedAssemblies':['Assem'+_0x30222b(0x31c)+_0x30222b(0x559)+'.dll']});continue;case'4':if(_0x354d55[_0x30222b(0x50c)+'aptur'+'e'])_0x26b00b[_0x30222b(0x5d1)](_0xa2e31e,'capSh'+'ooter',_0x26b00b[_0x30222b(0x574)],_0x30222b(0x533)+_0x30222b(0x31f)+_0x30222b(0x4ce),[_0x30222b(0x556),_0x26b00b[_0x30222b(0x43b)]],_0x90bbcc,(_0x21c01c,_0x413815)=>{_0x356ce7(_0x106df4,_0x413815,_0x40d6c1,'shoot'+'ers');},!![]);continue;case'5':if(_0xffad40['hookC'+_0x30222b(0x3e8)+'e'])_0x26b00b[_0x30222b(0x2df)](_0x31cf75,_0x26b00b['sKmmH'],_0x26b00b[_0x30222b(0x29b)],_0x30222b(0x263)+'unded',['i32'],_0x26b00b[_0x30222b(0x43b)],(_0x3223ac,_0x47b80d)=>{var _0x409a19=_0x30222b;_0x30cac3(_0x370f5c,_0x47b80d,_0x257ddb,_0x19932d[_0x409a19(0x52d)]);},!![]);continue;case'6':if(_0x14e9f5['hookG'+_0x30222b(0x245)])_0x5190f1(_0x26b00b['iHMvb'],_0x30222b(0x609)+'th','Local'+'Die',[_0x26b00b[_0x30222b(0x43b)],_0x26b00b[_0x30222b(0x43b)],_0x26b00b[_0x30222b(0x43b)],_0x26b00b['KgHvW'],_0x30222b(0x556)],_0x1bd8f8,_0x3737c3,!!_0x127c38['god']);continue;case'7':var _0x19932d={'Vciep':_0x26b00b[_0x30222b(0x27c)]};continue;}break;}}else _0x53f898[_0x30222b(0x147)+'hair']=_0x2df6f1,_0x26b00b[_0x30222b(0x661)](_0x3c9880);},[_0xaf3050('Size',null,_0x17bc0c(_0x53f898[_0x223a31(0x4f3)+'e'],-0x1*0x9f5+0xb6f+-0xbd*0x2+0.5,0x515*-0x3+-0x15be*0x1+0x24ff+0.5,-0x2426+0x1934*0x1+0xaf2+0.1,_0x2bc6cd=>{_0x53f898['chSiz'+'e']=_0x2bc6cd,_0x3c9880();})),_0xaf3050(_0x223a31(0x307),null,_0x61b6d6(_0x53f898[_0x223a31(0x17f)+'or'],_0x2c10a2=>{_0x53f898['chCol'+'or']=_0x2c10a2,_0x3c9880();}))]),_0x579e3b[_0x223a31(0x4c9)](_0x4d258b,_0x223a31(0x277)+'ers',_0x223a31(0x4d8)+_0x223a31(0x526)+'y.',_0x53f898[_0x223a31(0x60e)],null,[_0xaf3050('FPS\x20c'+'ounte'+'r',null,_0x579e3b['woEfC'](_0xb3fad0,_0x53f898[_0x223a31(0x60e)],_0x323f98=>{var _0x3e61ef=_0x223a31;_0x53f898['fps']=_0x323f98,_0x563388[_0x3e61ef(0x46c)](_0x3c9880);})),_0x579e3b[_0x223a31(0x64e)](_0x4c0041,_0x579e3b['mMUNV'])])];if(_0x237a16===_0x223a31(0x1f9)){if(_0x579e3b[_0x223a31(0x1fa)](_0x223a31(0x25b),'LVngN')){if(_0x5185fb[_0x3225dd]['id']&&_0x4d0aa0[_0x4dda21]['id']['index'+'Of']('kour-'+_0x223a31(0x5c1))===-0x16*-0x89+0x11ca+-0x1d90)_0x417de1[_0x1d952b]['style'][_0x223a31(0x357)+'ay']=_0x563388[_0x223a31(0x46b)];}else return[_0x4d258b(_0x223a31(0x5a4)+'ck',_0x579e3b[_0x223a31(0x617)],_0x53f898[_0x223a31(0x5bb)+'ck'],_0x3c8b42=>{_0x53f898['adblo'+'ck']=_0x3c8b42,_0x3c9880();},[_0x4c0041(_0x579e3b['YTPWg'])])];}return[_0x4d258b(_0x223a31(0x22c)+'Mode\x20'+_0x223a31(0x69f)+'lay\x20o'+'nly)',_0x223a31(0x57b)+'\x20UWMK'+_0x223a31(0x33a)+_0x223a31(0x648)+'—\x20no\x20'+'WASM\x20'+_0x223a31(0x2f9)+'.\x20Use'+_0x223a31(0x476)+_0x223a31(0x240)+_0x223a31(0x18e)+_0x223a31(0x552)+_0x223a31(0x5c6)+_0x223a31(0x697),_0x53f898[_0x223a31(0x538)+_0x223a31(0x422)],_0xf5da7c=>{var _0x481730=_0x223a31;_0x53f898[_0x481730(0x538)+'ode']=_0xf5da7c,_0x26b00b['HLHqQ'](_0x3c9880),location[_0x481730(0x2da)+'d']();},[_0x579e3b['fmEAq'](_0x4c0041,_0x579e3b['hFisy'])]),_0x4d258b(_0x223a31(0x485)+'risk\x20'+_0x223a31(0x126)+'hes',_0x579e3b[_0x223a31(0x1ae)],_0x53f898[_0x223a31(0x691)+'od']||_0x53f898['hookG'+'odDie']||_0x53f898['hookN'+'oReco'+'il']||_0x53f898['hookC'+_0x223a31(0x3e8)+'e'],_0x4075ca=>{var _0x3066b2=_0x223a31;if(_0x26b00b[_0x3066b2(0x694)](_0x26b00b['BnDfs'],_0x3066b2(0x3f9))){var _0x487919=new _0x5238d9(_0xd08368)[_0x3066b2(0x667)+_0x3066b2(0x30d)](_0x1178f1,_0x3a4d21);_0x45cc63[_0x3066b2(0x4a9)](_0x4a28b7,_0x487919!==_0x5557a5?_0x487919[_0x3066b2(0x523)]():null);}else{var _0x1aee53=_0x26b00b[_0x3066b2(0x158)][_0x3066b2(0x430)]('|'),_0x19714a=0x1*0x1bba+-0x1*-0x935+-0x24ef;while(!![]){switch(_0x1aee53[_0x19714a++]){case'0':location['reloa'+'d']();continue;case'1':_0x53f898[_0x3066b2(0x691)+'od']=_0x4075ca;continue;case'2':_0x26b00b['ixXhE'](_0x3c9880);continue;case'3':_0x53f898[_0x3066b2(0x691)+_0x3066b2(0x245)]=_0x4075ca;continue;case'4':_0x53f898['hookN'+_0x3066b2(0x2d9)+'il']=_0x4075ca;continue;case'5':_0x53f898[_0x3066b2(0x50c)+_0x3066b2(0x3e8)+'e']=_0x4075ca;continue;}break;}}},[_0x4c0041(_0x223a31(0x132)+'es\x20on'+_0x223a31(0x5ca)+_0x223a31(0x276)),_0xaf3050(_0x579e3b[_0x223a31(0x1ff)],null,_0x579e3b[_0x223a31(0x38f)](_0xb3fad0,_0x53f898['hookG'+'od'],_0x251f39=>{var _0x37d92c=_0x223a31;'TOzvq'===_0x37d92c(0x150)?(_0x53f898[_0x37d92c(0x691)+'od']=_0x251f39,_0x3c9880()):_0x5d21d4[_0x37d92c(0x47e)]();})),_0x579e3b[_0x223a31(0x2ab)](_0xaf3050,_0x579e3b[_0x223a31(0x1e2)],null,_0x579e3b[_0x223a31(0x427)](_0xb3fad0,_0x53f898['hookG'+_0x223a31(0x245)],_0x40d4b1=>{var _0x2c39dd=_0x223a31;_0x53f898[_0x2c39dd(0x691)+_0x2c39dd(0x245)]=_0x40d4b1,_0x3c9880();})),_0xaf3050('noRec'+'oil\x20('+_0x223a31(0x388)+'lMoti'+_0x223a31(0x512)+_0x223a31(0x27f),null,_0x579e3b['MfGAZ'](_0xb3fad0,_0x53f898['hookN'+_0x223a31(0x2d9)+'il'],_0x894492=>{var _0x4f19ba=_0x223a31;_0x563388['XDnGA']('fQUoM',_0x563388[_0x4f19ba(0x6a1)])?(_0x53f898['hookN'+_0x4f19ba(0x2d9)+'il']=_0x894492,_0x563388[_0x4f19ba(0x3a0)](_0x3c9880)):(_0x53e36c[_0x4f19ba(0x691)+'od']=_0x4b9305,_0x2ffabb());})),_0xaf3050(_0x579e3b['hkxKI'],'no\x20ch'+_0x223a31(0x698)+'work\x20'+_0x223a31(0x35b)+_0x223a31(0x29c)+'is',_0x579e3b[_0x223a31(0x455)](_0xb3fad0,_0x53f898[_0x223a31(0x50c)+_0x223a31(0x3e8)+'e'],_0x2e63a6=>{var _0x5f184f=_0x223a31;_0x53f898[_0x5f184f(0x50c)+'aptur'+'e']=_0x2e63a6,_0x3c9880();}))]),_0x579e3b[_0x223a31(0x4c9)](_0x4d258b,_0x223a31(0x395)+_0x223a31(0x344)+'r',_0x579e3b[_0x223a31(0x22a)],_0x53f898['actkK'+'ill'],_0xab7a1d=>{var _0x1c0835=_0x223a31;_0x53f898['actkK'+_0x1c0835(0x55f)]=_0xab7a1d,_0x3c9880();},[_0x4c0041('God/d'+'amage'+_0x223a31(0x446)+_0x223a31(0x347)+_0x223a31(0x1d4)+'raise'+'\x20ban\x20'+_0x223a31(0x38c)+'even\x20'+'with\x20'+_0x223a31(0x23d)+_0x223a31(0x261),!![])]),_0x579e3b[_0x223a31(0x43d)](_0x4d258b,_0x579e3b[_0x223a31(0x2c3)],'These'+'\x20leav'+'e\x20ser'+_0x223a31(0x162)+'isibl'+_0x223a31(0x258)+_0x223a31(0x3f2),!![],null,[_0x579e3b[_0x223a31(0x196)](_0xaf3050,'Wipe\x20'+_0x223a31(0x11f)+_0x223a31(0x636)+'s',null,_0x517a37(_0x579e3b[_0x223a31(0x352)],()=>{_0x53f898={..._0x4fa1a5},_0x3c9880(),location['reloa'+'d']();}))])];}var _0x572fb9=null;function _0x4f508d(_0xc318fa){var _0x5e8cc5=_0x980b5b;_0x5b6fdc=_0xc318fa;if(!_0x572fb9){var _0x2f1995=document['creat'+'eElem'+'ent'](_0x5e8cc5(0x19a));_0x2f1995[_0x5e8cc5(0x364)+'onten'+'t']=_0x2de068,_0x35ad10[_0x5e8cc5(0x175)+'dChil'+'d'](_0x2f1995),_0x572fb9=_0x563388['IGgoL'](_0xf4f9df),_0x35ad10[_0x5e8cc5(0x175)+_0x5e8cc5(0x1ba)+'d'](_0x572fb9),_0x563388[_0x5e8cc5(0x555)](requestAnimationFrame,()=>_0x572fb9[_0x5e8cc5(0x1a8)+'List']['add']('shown'));}_0x572fb9[_0x5e8cc5(0x1a8)+'List'][_0x5e8cc5(0x273)+'e'](_0x5e8cc5(0x3b2),_0xc318fa);}function _0x48a842(){_0x4f508d(!_0x5b6fdc);}function _0xf4f9df(){var _0x5b1ca8=_0x980b5b,_0x30486f={'fNhOu':function(_0x54d768){return _0x54d768();},'oBRbl':'activ'+'e','qPkbq':function(_0x23fbf6,_0x44c551){return _0x23fbf6(_0x44c551);},'RGGsM':_0x5b1ca8(0x24a),'biDKb':function(_0x3864d4,_0x365405){return _0x3864d4<_0x365405;},'WIFIw':function(_0x3d3623,_0x3365e5){return _0x3d3623===_0x3365e5;},'PAzxj':_0x5b1ca8(0x6a6),'cyikM':function(_0x2b59a5,_0x2a541b){return _0x2b59a5+_0x2a541b;},'FORfR':function(_0x640202,_0x14c74c){return _0x579e3b['RPZYK'](_0x640202,_0x14c74c);},'Xxqbh':'\x20|\x20ga'+_0x5b1ca8(0x59e),'voLGG':_0x579e3b[_0x5b1ca8(0x44a)],'zNddH':_0x5b1ca8(0x5fc)+_0x5b1ca8(0x3c2)},_0x361c33=document['creat'+'eElem'+'ent'](_0x5b1ca8(0x5b6));_0x361c33[_0x5b1ca8(0x1a8)+'Name']=_0x579e3b[_0x5b1ca8(0x4e0)];var _0x59b0d1=document['creat'+_0x5b1ca8(0x571)+'ent'](_0x579e3b['ggEjI']);_0x59b0d1[_0x5b1ca8(0x1a8)+_0x5b1ca8(0x31b)]=_0x5b1ca8(0x1be)+'de';var _0x5b6621=document['creat'+_0x5b1ca8(0x571)+_0x5b1ca8(0x453)](_0x579e3b['IpBkp']);_0x5b6621[_0x5b1ca8(0x1a8)+_0x5b1ca8(0x31b)]=_0x5b1ca8(0x662)+'go',_0x5b6621['inner'+_0x5b1ca8(0x637)]=_0x5b1ca8(0x2d8)+'viewB'+_0x5b1ca8(0x4c0)+_0x5b1ca8(0x460)+'\x2024\x22\x20'+'class'+_0x5b1ca8(0x582)+'logo-'+_0x5b1ca8(0x13c)+'<path'+'\x20d=\x22M'+_0x5b1ca8(0x34f)+_0x5b1ca8(0x54d)+'-2.5-'+'4-4.5'+'-4-7.'+_0x5b1ca8(0x509)+_0x5b1ca8(0x1e9)+'8-4.5'+'\x204-4.'+_0x5b1ca8(0x1c4)+_0x5b1ca8(0x1c3)+_0x5b1ca8(0x4a2)+_0x5b1ca8(0x577)+_0x5b1ca8(0x3e6)+'.5z\x22\x20'+_0x5b1ca8(0x3fb)+'\x22none'+'\x22\x20str'+_0x5b1ca8(0x645)+_0x5b1ca8(0x1c0)+_0x5b1ca8(0x3d6)+'troke'+'-widt'+_0x5b1ca8(0x620)+_0x5b1ca8(0x4f0)+'ke-li'+'necap'+'=\x22rou'+'nd\x22\x20s'+'troke'+'-line'+'join='+_0x5b1ca8(0x429)+_0x5b1ca8(0x247)+_0x5b1ca8(0x18f)+'e\x20cx='+_0x5b1ca8(0x135)+_0x5b1ca8(0x15e)+'0\x22\x20r='+_0x5b1ca8(0x558)+'\x20fill'+_0x5b1ca8(0x535)+'6b9d\x22'+_0x5b1ca8(0x1c6)+_0x5b1ca8(0x236),_0x59b0d1[_0x5b1ca8(0x175)+_0x5b1ca8(0x1ba)+'d'](_0x5b6621);var _0x40beda=document[_0x5b1ca8(0x62d)+_0x5b1ca8(0x571)+_0x5b1ca8(0x453)]('div');_0x40beda['class'+_0x5b1ca8(0x31b)]='mn-ma'+'in';var _0x5b9ca6=document[_0x5b1ca8(0x62d)+_0x5b1ca8(0x571)+'ent'](_0x579e3b[_0x5b1ca8(0x59d)]);_0x5b9ca6['class'+_0x5b1ca8(0x31b)]=_0x5b1ca8(0x5ed)+'p';var _0xb69226=document['creat'+_0x5b1ca8(0x571)+_0x5b1ca8(0x453)]('div');_0xb69226['class'+_0x5b1ca8(0x31b)]=_0x5b1ca8(0x415)+_0x5b1ca8(0x29d);var _0x43b805=document['creat'+'eElem'+'ent']('h2');_0x43b805['class'+_0x5b1ca8(0x31b)]='mn-h',_0x43b805['textC'+_0x5b1ca8(0x222)+'t']=_0x5b1ca8(0x1dd)+_0x5b1ca8(0x26a)+'r';var _0x45c40b=document[_0x5b1ca8(0x62d)+'eElem'+_0x5b1ca8(0x453)]('small');_0x45c40b['class'+'Name']=_0x579e3b[_0x5b1ca8(0x3f5)],_0x45c40b[_0x5b1ca8(0x364)+_0x5b1ca8(0x222)+'t']=_0x5b1ca8(0x146)+'trike'+'.io\x20m'+'enu',_0xb69226['appen'+'d'](_0x43b805,_0x45c40b);var _0x5aad3b=document[_0x5b1ca8(0x62d)+_0x5b1ca8(0x571)+_0x5b1ca8(0x453)](_0x579e3b['WEHzo']);_0x5aad3b['type']=_0x5b1ca8(0x672)+'n',_0x5aad3b['class'+_0x5b1ca8(0x31b)]=_0x579e3b['Okynn'],_0x5aad3b[_0x5b1ca8(0x63f)]=_0x579e3b[_0x5b1ca8(0x625)],_0x5aad3b['inner'+'HTML']='<svg\x20'+'viewB'+_0x5b1ca8(0x4c0)+'\x200\x2024'+_0x5b1ca8(0x699)+_0x5b1ca8(0x28d)+'\x20d=\x22M'+_0x5b1ca8(0x313)+_0x5b1ca8(0x64b)+'18\x206\x20'+_0x5b1ca8(0x681)+'/></s'+_0x5b1ca8(0x236),_0x5aad3b[_0x5b1ca8(0x297)+'ck']=()=>_0x4f508d(![]),_0x5b9ca6[_0x5b1ca8(0x175)+'d'](_0xb69226,_0x5aad3b);var _0x36e78c=document['creat'+_0x5b1ca8(0x571)+_0x5b1ca8(0x453)](_0x5b1ca8(0x5b6));_0x36e78c[_0x5b1ca8(0x1a8)+'Name']=_0x579e3b[_0x5b1ca8(0x32d)],_0x40beda[_0x5b1ca8(0x175)+'d'](_0x5b9ca6,_0x36e78c),_0x361c33[_0x5b1ca8(0x175)+'d'](_0x59b0d1,_0x40beda);var _0x48ac7d=new Map();for(var _0x26122e of _0x54d9cf){var _0x47258d=_0x579e3b['Pjikh'][_0x5b1ca8(0x430)]('|'),_0x4b9a13=-0x23a8+0x4*0x859+0x244;while(!![]){switch(_0x47258d[_0x4b9a13++]){case'0':_0x59b0d1['appen'+'dChil'+'d'](_0x5a0d97);continue;case'1':_0x5a0d97[_0x5b1ca8(0x225)]=_0x579e3b['WEHzo'];continue;case'2':var _0x5a0d97=document[_0x5b1ca8(0x62d)+_0x5b1ca8(0x571)+'ent'](_0x579e3b[_0x5b1ca8(0x4dd)]);continue;case'3':_0x5a0d97[_0x5b1ca8(0x286)+'HTML']=_0x579e3b[_0x5b1ca8(0x50f)](_0x579e3b[_0x5b1ca8(0x203)]+_0x26122e['label'],_0x579e3b[_0x5b1ca8(0x2fc)]);continue;case'4':_0x5a0d97[_0x5b1ca8(0x297)+'ck']=(_0x443b24=>()=>_0x50ffa6(_0x443b24))(_0x26122e['id']);continue;case'5':_0x5a0d97[_0x5b1ca8(0x1a8)+'Name']=_0x5b1ca8(0x52b)+'b';continue;case'6':_0x5a0d97[_0x5b1ca8(0x63f)]=_0x26122e[_0x5b1ca8(0x12f)];continue;case'7':_0x48ac7d[_0x5b1ca8(0x4a9)](_0x26122e['id'],_0x5a0d97);continue;}break;}}function _0x50ffa6(_0x3b3f58){var _0x505d5b=_0x5b1ca8,_0x363693={'ssMHs':'mouse'+_0x505d5b(0x591)};if(_0x505d5b(0x5a9)==='TAgyJ'){if(_0x5cbcb7)return;_0x3b0bf8=!![],_0x633f6c['addEv'+_0x505d5b(0x155)+_0x505d5b(0x4d0)+'r']('keydo'+'wn',_0xa501e8,!![]),_0x19898b[_0x505d5b(0x3e4)+_0x505d5b(0x155)+_0x505d5b(0x4d0)+'r'](_0x505d5b(0x3bb),_0x34a8c1,!![]),_0x4bc5a8['addEv'+'entLi'+_0x505d5b(0x4d0)+'r'](_0x363693['ssMHs'],_0x3492a1,!![]),_0x30e344[_0x505d5b(0x3e4)+'entLi'+_0x505d5b(0x4d0)+'r']('mouse'+'up',_0x21e562,!![]),_0x517fd6[_0x505d5b(0x3e4)+'entLi'+_0x505d5b(0x4d0)+'r']('blur',_0x153633);}else{_0x4728f0['cat']=_0x3b3f58,_0x30486f[_0x505d5b(0x55e)](_0x4530a5);var _0x3a1aba=_0x54d9cf['find'](_0x463fed=>_0x463fed['id']===_0x3b3f58)||_0x54d9cf[0x4*-0x87b+0x2*-0x640+-0x1736*-0x2];_0x43b805[_0x505d5b(0x364)+_0x505d5b(0x222)+'t']='Sakur'+'a\x20Kou'+'r\x20—\x20'+_0x3a1aba[_0x505d5b(0x12f)];for(var [_0x269199,_0x523e3b]of _0x48ac7d)_0x523e3b['class'+_0x505d5b(0x3bc)][_0x505d5b(0x273)+'e'](_0x30486f[_0x505d5b(0x6a9)],_0x269199===_0x3b3f58);_0x36e78c[_0x505d5b(0x170)+_0x505d5b(0x123)+_0x505d5b(0x2d3)](..._0x30486f['qPkbq'](_0x1dcb84,_0x3b3f58));}}return _0x579e3b[_0x5b1ca8(0x64e)](_0x50ffa6,_0x4728f0['cat']||_0x5b1ca8(0x4bb)+'t'),_0x579e3b['ESjlY'](setInterval,()=>{var _0x16264f=_0x5b1ca8;if(_0x16264f(0x3b4)!==_0x30486f['RGGsM']){if(!_0x5b6fdc)return;var _0x3b9033=_0x36e78c[_0x16264f(0x128)+_0x16264f(0x452)];for(var _0x43a966=-0x2*-0x6bd+-0x1*-0x193b+-0x26b5;_0x30486f[_0x16264f(0x2c9)](_0x43a966,_0x3b9033[_0x16264f(0x2ae)+'h']);_0x43a966++){var _0xed31ad=_0x3b9033[_0x43a966][_0x16264f(0x1c1)+_0x16264f(0x198)+_0x16264f(0x652)]('.sk-m'+'desc');_0xed31ad&&(_0x30486f['WIFIw'](_0xed31ad[_0x16264f(0x364)+_0x16264f(0x222)+'t'][_0x16264f(0x463)+'Of'](_0x30486f[_0x16264f(0x24c)]),0x43*0x83+0x15e+0x23a7*-0x1)||_0xed31ad[_0x16264f(0x364)+'onten'+'t'][_0x16264f(0x463)+'Of'](_0x16264f(0x612))===-0x2386+0x43*0x37+-0x1521*-0x1)&&(_0xed31ad[_0x16264f(0x364)+_0x16264f(0x222)+'t']=_0x14ded4['safeM'+_0x16264f(0x422)]?_0x16264f(0x6a7)+'MODE\x20'+_0x16264f(0x643)+'rlay\x20'+'only,'+_0x16264f(0x22e)+_0x16264f(0x6a5)+'(relo'+_0x16264f(0x65a)+_0x16264f(0x473)+')':_0x14ded4[_0x16264f(0x4ec)]?_0x30486f[_0x16264f(0x25c)](_0x30486f['FORfR'](_0x30486f['cyikM']('UWMK\x20'+_0x16264f(0x399)+'\x20',_0x14ded4[_0x16264f(0x2f9)+_0x16264f(0x4a8)]?_0x14ded4[_0x16264f(0x2f9)+'Ok']+'/'+_0x14ded4['hooks'+_0x16264f(0x4a8)]+(_0x16264f(0x1c9)+'s'):'0\x20hoo'+_0x16264f(0x66e)+_0x16264f(0x35d)+'all\x20o'+_0x16264f(0x12a))+_0x30486f['Xxqbh'],_0x14ded4[_0x16264f(0x2fd)+_0x16264f(0x4fe)]?_0x16264f(0x1c2)+'d':_0x16264f(0x472)+'ng')+_0x30486f[_0x16264f(0x48c)]+(_0x14ded4['shoot'+_0x16264f(0x49b)]?'held':_0x16264f(0x2b6))+(_0x16264f(0x339)+'vemen'+'t\x20')+(_0x14ded4[_0x16264f(0x696)+_0x16264f(0x141)]?_0x16264f(0x2ed):_0x16264f(0x2b6)),_0x14ded4[_0x16264f(0x14f)+'rror']?_0x30486f[_0x16264f(0x269)]+_0x14ded4[_0x16264f(0x14f)+'rror']:''):_0x16264f(0x4f5)+'MISSI'+'NG\x20-\x20'+'overl'+_0x16264f(0x5b5)+_0x16264f(0x52f)+'einst'+_0x16264f(0x2f3)+_0x16264f(0x3c4)+_0x16264f(0x454)+_0x16264f(0x200));}}else try{var _0x4e0cb7=new _0x3a7dcd(_0x393944)[_0x16264f(0x667)+_0x16264f(0x30d)](_0x2811d2,'u32');return _0x4e0cb7?_0x4e0cb7['val']():-0x5c6+-0x1*-0x1492+-0xecc;}catch(_0x33c2e3){return 0xb*-0xc3+-0x7*0x212+0x16df;}},-0x1241*0x1+0x1c5c+-0x633),_0x361c33;}var _0x2de068=_0x980b5b(0x218)+_0x980b5b(0x33e)+_0x980b5b(0x668)+'l:\x20in'+'itial'+';\x20}\x0a\x20'+_0x980b5b(0x2a4)+_0x980b5b(0x2e5)+'-sizi'+'ng:\x20b'+_0x980b5b(0x5ab)+_0x980b5b(0x428)+'\x20marg'+'in:\x200'+_0x980b5b(0x2bd)+_0x980b5b(0x30c)+'ily:\x20'+_0x980b5b(0x133)+_0x980b5b(0x682)+'Segoe'+_0x980b5b(0x411)+_0x980b5b(0x2e2)+_0x980b5b(0x124)+',\x20san'+_0x980b5b(0x66d)+'if;\x20}'+_0x980b5b(0x218)+_0x980b5b(0x149)+_0x980b5b(0x1bd)+'{\x20pos'+'ition'+_0x980b5b(0x3c8)+_0x980b5b(0x402)+_0x980b5b(0x516)+_0x980b5b(0x333)+_0x980b5b(0x441)+_0x980b5b(0x6aa)+_0x980b5b(0x48f)+_0x980b5b(0x646)+_0x980b5b(0x6a0)+_0x980b5b(0x5a6)+'620px'+',\x20cal'+_0x980b5b(0x27e)+'vw\x20-\x20'+'48px)'+');\x20ma'+'x-hei'+'ght:\x20'+'min(4'+_0x980b5b(0x425)+_0x980b5b(0x325)+'(100v'+_0x980b5b(0x13f)+_0x980b5b(0x171)+';\x0a\x20\x20\x20'+_0x980b5b(0x372)+_0x980b5b(0x5bc)+':\x20fle'+'x;\x20ga'+'p:\x2010'+_0x980b5b(0x2a2)+_0x980b5b(0x671)+_0x980b5b(0x1cb)+'px;\x20b'+'order'+_0x980b5b(0x140)+_0x980b5b(0x3d2)+'2px;\x20'+'point'+_0x980b5b(0x235)+_0x980b5b(0x674)+_0x980b5b(0x3ed)+_0x980b5b(0x392)+_0x980b5b(0x3e2)+'ckgro'+'und:\x20'+'rgba('+'24,17'+',21,.'+_0x980b5b(0x57d)+'backd'+_0x980b5b(0x2be)+'ilter'+_0x980b5b(0x2c8)+_0x980b5b(0x4bc)+_0x980b5b(0x13a)+_0x980b5b(0x241)+_0x980b5b(0x16a)+_0x980b5b(0x604)+'webki'+'t-bac'+_0x980b5b(0x176)+'-filt'+'er:\x20b'+'lur(2'+_0x980b5b(0x30b)+_0x980b5b(0x621)+_0x980b5b(0x1f7)+_0x980b5b(0x580)+_0x980b5b(0x218)+_0x980b5b(0x262)+'-shad'+_0x980b5b(0x457)+_0x980b5b(0x1f3)+_0x980b5b(0x405)+'gba(2'+'55,25'+_0x980b5b(0x304)+',.06)'+_0x980b5b(0x2af)+'et\x200\x20'+_0x980b5b(0x5ff)+'\x20rgba'+_0x980b5b(0x554)+_0x980b5b(0x3e7)+'55,.0'+_0x980b5b(0x239)+_0x980b5b(0x658)+_0x980b5b(0x20c)+_0x980b5b(0x588)+_0x980b5b(0x47c)+_0x980b5b(0x68f)+_0x980b5b(0x51f)+_0x980b5b(0x581)+'pacit'+_0x980b5b(0x423)+_0x980b5b(0x26f)+'sform'+_0x980b5b(0x4e4)+'nslat'+'eY(18'+_0x980b5b(0x35e)+'point'+_0x980b5b(0x235)+_0x980b5b(0x674)+'\x20none'+';\x20tra'+_0x980b5b(0x549)+'on:\x20o'+'pacit'+_0x980b5b(0x590)+'s\x20eas'+_0x980b5b(0x3d8)+_0x980b5b(0x517)+_0x980b5b(0x5fe)+'5s\x20cu'+_0x980b5b(0x161)+'ezier'+_0x980b5b(0x37d)+_0x980b5b(0x275)+_0x980b5b(0x14c)+_0x980b5b(0x40d)+'\x20colo'+_0x980b5b(0x24e)+_0x980b5b(0x3e5)+_0x980b5b(0x2bd)+_0x980b5b(0x356)+_0x980b5b(0x38a)+_0x980b5b(0x475)+'\x0a\x20\x20\x20\x20'+_0x980b5b(0x149)+_0x980b5b(0x2bb)+_0x980b5b(0x3b2)+'\x20{\x20op'+'acity'+':\x201;\x20'+_0x980b5b(0x320)+_0x980b5b(0x63b)+'\x20none'+';\x20poi'+'nter-'+'event'+_0x980b5b(0x184)+_0x980b5b(0x1a4)+_0x980b5b(0x218)+_0x980b5b(0x3df)+'ide\x20{'+_0x980b5b(0x447)+'lay:\x20'+'flex;'+_0x980b5b(0x511)+_0x980b5b(0x583)+_0x980b5b(0x5bd)+':\x20col'+'umn;\x20'+'align'+'-item'+'s:\x20ce'+'nter;'+'\x20gap:'+_0x980b5b(0x1fd)+_0x980b5b(0x5d2)+_0x980b5b(0x2e7)+_0x980b5b(0x5df)+_0x980b5b(0x348)+_0x980b5b(0x271)+'\x20padd'+'ing:\x20'+_0x980b5b(0x649)+('0;\x20bo'+_0x980b5b(0x2cf)+'radiu'+_0x980b5b(0x4b5)+'px;\x0a\x20'+'\x20\x20\x20\x20\x20'+_0x980b5b(0x4ef)+_0x980b5b(0x51a)+_0x980b5b(0x377)+_0x980b5b(0x4b8)+_0x980b5b(0x4f1)+_0x980b5b(0x138)+'025);'+'\x20box-'+_0x980b5b(0x55a)+'w:\x20in'+_0x980b5b(0x438)+'\x200\x200\x20'+_0x980b5b(0x405)+_0x980b5b(0x3db)+_0x980b5b(0x312)+'5,255'+_0x980b5b(0x665)+_0x980b5b(0x212)+_0x980b5b(0x1b5)+'n-log'+'o\x20{\x20d'+_0x980b5b(0x633)+_0x980b5b(0x29a)+_0x980b5b(0x21d)+'lace-'+'items'+_0x980b5b(0x191)+_0x980b5b(0x3e0)+_0x980b5b(0x4bf)+_0x980b5b(0x365)+_0x980b5b(0x21e)+'ight:'+'\x2032px'+_0x980b5b(0x212)+_0x980b5b(0x1b5)+_0x980b5b(0x1e7)+_0x980b5b(0x340)+'\x20{\x20wi'+_0x980b5b(0x641)+_0x980b5b(0x5ae)+'\x20heig'+'ht:\x202'+_0x980b5b(0x2f8)+'overf'+_0x980b5b(0x327)+'visib'+_0x980b5b(0x37e)+_0x980b5b(0x528)+':\x20dro'+_0x980b5b(0x5cf)+_0x980b5b(0x616)+_0x980b5b(0x330)+_0x980b5b(0x119)+_0x980b5b(0x4b8)+',107,'+'157,.'+'8));\x20'+'}\x0a\x20\x20\x20'+_0x980b5b(0x66b)+_0x980b5b(0x39e)+'\x20disp'+'lay:\x20'+_0x980b5b(0x443)+_0x980b5b(0x462)+_0x980b5b(0x51d)+_0x980b5b(0x4e6)+_0x980b5b(0x532)+_0x980b5b(0x214)+_0x980b5b(0x5c3)+'conte'+_0x980b5b(0x47f)+_0x980b5b(0x532)+_0x980b5b(0x65e)+_0x980b5b(0x3da)+'2px;\x20'+_0x980b5b(0x260)+'t:\x2034'+_0x980b5b(0x3af)+'order'+_0x980b5b(0x368)+'borde'+_0x980b5b(0x244)+_0x980b5b(0x11a)+_0x980b5b(0x1a6)+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+_0x980b5b(0x20b)+'nd:\x20t'+_0x980b5b(0x2d1)+_0x980b5b(0x46d)+';\x20col'+_0x980b5b(0x4e2)+'gba(2'+_0x980b5b(0x28b)+_0x980b5b(0x474)+_0x980b5b(0x44d)+_0x980b5b(0x36f)+'or:\x20p'+'ointe'+_0x980b5b(0x3b6)+'nt-si'+_0x980b5b(0x2a8)+_0x980b5b(0x59a)+_0x980b5b(0x52a)+'weigh'+_0x980b5b(0x375)+_0x980b5b(0x695)+'\x20\x20\x20\x20.'+_0x980b5b(0x52b)+_0x980b5b(0x490)+'er\x20{\x20'+_0x980b5b(0x2b3)+_0x980b5b(0x377)+_0x980b5b(0x2c4)+_0x980b5b(0x541)+'242,.'+_0x980b5b(0x567)+'\x0a\x20\x20\x20\x20'+_0x980b5b(0x544)+_0x980b5b(0x442)+'tive\x20'+_0x980b5b(0x689)+'or:\x20#'+'ff6b9'+'d;\x20ba'+_0x980b5b(0x539)+'und:\x20'+_0x980b5b(0x35f)+'255,1'+_0x980b5b(0x25f)+_0x980b5b(0x316)+';\x20}\x0a\x20'+_0x980b5b(0x1b5)+'n-mai'+_0x980b5b(0x371)+_0x980b5b(0x348)+'1;\x20mi'+'n-wid'+'th:\x200'+';\x20dis'+'play:'+_0x980b5b(0x511)+_0x980b5b(0x321)+_0x980b5b(0x382)+'ectio'+'n:\x20co'+_0x980b5b(0x324)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x980b5b(0x4ed)+_0x980b5b(0x4b0)+_0x980b5b(0x2c0)+'\x20flex'+';\x20ali'+_0x980b5b(0x4ac)+'ems:\x20'+_0x980b5b(0x40b)+_0x980b5b(0x486)+_0x980b5b(0x4b9)+_0x980b5b(0x2a2)+_0x980b5b(0x671)+_0x980b5b(0x3a7)+_0x980b5b(0x213)+'\x2012px'+';\x20use'+_0x980b5b(0x17b)+_0x980b5b(0x165)+_0x980b5b(0x271)+_0x980b5b(0x6a2)+'\x20\x20.mn'+'-titl'+'es\x20{\x20'+_0x980b5b(0x39f)+_0x980b5b(0x36b)+_0x980b5b(0x505)+_0x980b5b(0x641)+'0;\x20}\x0a'+_0x980b5b(0x257)+_0x980b5b(0x685)+_0x980b5b(0x60f)+_0x980b5b(0x356)+_0x980b5b(0x66c)+'px;\x20f'+_0x980b5b(0x280)+'eight'+':\x20650'+_0x980b5b(0x212)+'\x20\x20\x20.m'+_0x980b5b(0x49f)+'\x20{\x20fo'+_0x980b5b(0x1ad)+_0x980b5b(0x2a8)+_0x980b5b(0x2e8)+_0x980b5b(0x27d))+('ty:\x20.'+_0x980b5b(0x4b3)+_0x980b5b(0x257)+_0x980b5b(0x491)+'ose\x20{'+'\x20disp'+_0x980b5b(0x3fa)+_0x980b5b(0x4ba)+_0x980b5b(0x3ec)+_0x980b5b(0x2a9)+_0x980b5b(0x4e6)+_0x980b5b(0x532)+_0x980b5b(0x65e)+'th:\x202'+'8px;\x20'+'heigh'+_0x980b5b(0x495)+'px;\x20b'+'order'+':\x200;\x20'+_0x980b5b(0x18c)+_0x980b5b(0x244)+'ius:\x20'+_0x980b5b(0x3e9)+_0x980b5b(0x4ef)+_0x980b5b(0x51a)+_0x980b5b(0x4e4)+'nspar'+_0x980b5b(0x201)+_0x980b5b(0x2b3)+':\x20inh'+'erit;'+'\x20opac'+'ity:\x20'+_0x980b5b(0x5ea)+_0x980b5b(0x3a5)+'r:\x20po'+_0x980b5b(0x1af)+';\x20}\x0a\x20'+_0x980b5b(0x1b5)+_0x980b5b(0x2b9)+_0x980b5b(0x67a)+'ver\x20{'+'\x20opac'+_0x980b5b(0x1a0)+_0x980b5b(0x39a)+_0x980b5b(0x539)+'und:\x20'+_0x980b5b(0x35f)+_0x980b5b(0x3e7)+_0x980b5b(0x312)+_0x980b5b(0x283)+');\x20}\x0a'+_0x980b5b(0x257)+'mn-cl'+_0x980b5b(0x627)+'vg\x20{\x20'+'width'+_0x980b5b(0x1bb)+_0x980b5b(0x21e)+_0x980b5b(0x61f)+_0x980b5b(0x202)+';\x20fil'+'l:\x20no'+'ne;\x20s'+_0x980b5b(0x16c)+':\x20cur'+_0x980b5b(0x1c8)+_0x980b5b(0x390)+'\x20stro'+'ke-wi'+_0x980b5b(0x641)+_0x980b5b(0x3c7)+_0x980b5b(0x499)+'linec'+_0x980b5b(0x3a9)+'ound;'+'\x20}\x0a\x20\x20'+_0x980b5b(0x461)+_0x980b5b(0x217)+_0x980b5b(0x498)+'ex:\x201'+_0x980b5b(0x5c7)+_0x980b5b(0x20a)+'ht:\x200'+';\x20ove'+'rflow'+_0x980b5b(0x471)+_0x980b5b(0x507)+_0x980b5b(0x357)+'ay:\x20g'+_0x980b5b(0x151)+'grid-'+_0x980b5b(0x306)+_0x980b5b(0x481)+_0x980b5b(0x31d)+'s:\x20re'+_0x980b5b(0x3ce)+_0x980b5b(0x677)+_0x980b5b(0x187)+_0x980b5b(0x64f)+'ax(25'+_0x980b5b(0x362)+'1fr))'+_0x980b5b(0x69c)+_0x980b5b(0x4ac)+_0x980b5b(0x599)+_0x980b5b(0x288)+';\x20ali'+_0x980b5b(0x624)+'ntent'+':\x20sta'+'rt;\x20g'+_0x980b5b(0x4e9)+_0x980b5b(0x59a)+'paddi'+_0x980b5b(0x26d)+_0x980b5b(0x5f2)+_0x980b5b(0x223)+_0x980b5b(0x212)+_0x980b5b(0x1b5)+'n-col'+_0x980b5b(0x412)+'ebkit'+'-scro'+'llbar'+'\x20{\x20wi'+_0x980b5b(0x641)+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x980b5b(0x66b)+'cols:'+_0x980b5b(0x43c)+'kit-s'+'croll'+'bar-t'+'humb\x20'+_0x980b5b(0x2ba)+'kgrou'+_0x980b5b(0x156)+'gba(2'+'55,25'+_0x980b5b(0x304)+_0x980b5b(0x5fd)+_0x980b5b(0x4de)+_0x980b5b(0x406)+'adius'+_0x980b5b(0x21c)+_0x980b5b(0x212)+'\x20\x20\x20.s'+_0x980b5b(0x520)+_0x980b5b(0x311)+_0x980b5b(0x5ab)+_0x980b5b(0x140)+_0x980b5b(0x560)+'2px;\x20'+'backg'+'round'+':\x20rgb'+_0x980b5b(0x4b8)+',255,'+_0x980b5b(0x138)+_0x980b5b(0x345)+_0x980b5b(0x3f3)+'shado'+_0x980b5b(0x640)+'set\x200'+_0x980b5b(0x1f3)+_0x980b5b(0x405)+_0x980b5b(0x3db)+'55,25'+_0x980b5b(0x304)+_0x980b5b(0x665)+_0x980b5b(0x212)+'\x20\x20\x20.s'+'k-car'+_0x980b5b(0x38b)+'{\x20bac'+_0x980b5b(0x20b)+'nd:\x20r'+_0x980b5b(0x3db)+'55,25'+'5,255'+_0x980b5b(0x497)+_0x980b5b(0x1a2)+_0x980b5b(0x615)+'ow:\x20i'+_0x980b5b(0x5b0)+_0x980b5b(0x32b)+_0x980b5b(0x494)+_0x980b5b(0x35f)+_0x980b5b(0x3c0)+_0x980b5b(0x25f)+_0x980b5b(0x600)+_0x980b5b(0x448)+'\x20\x20\x20\x20.'+_0x980b5b(0x686)+'rd-he'+_0x980b5b(0x614)+'displ')+(_0x980b5b(0x409)+_0x980b5b(0x578)+_0x980b5b(0x314)+'-item'+_0x980b5b(0x1ee)+'nter;'+_0x980b5b(0x47a)+_0x980b5b(0x322)+_0x980b5b(0x5cb)+'ing:\x20'+'11px\x20'+'12px;'+_0x980b5b(0x6a2)+'\x20\x20.sk'+'-card'+_0x980b5b(0x16e)+'e\x20{\x20f'+_0x980b5b(0x348)+_0x980b5b(0x168)+_0x980b5b(0x376)+'th:\x200'+_0x980b5b(0x212)+_0x980b5b(0x197)+_0x980b5b(0x520)+'d-tit'+_0x980b5b(0x51b)+_0x980b5b(0x252)+_0x980b5b(0x60f)+_0x980b5b(0x356)+_0x980b5b(0x38a)+_0x980b5b(0x5df)+'ont-w'+_0x980b5b(0x584)+_0x980b5b(0x5e7)+_0x980b5b(0x419)+'or:\x20r'+_0x980b5b(0x3db)+_0x980b5b(0x28b)+_0x980b5b(0x474)+',.45)'+_0x980b5b(0x212)+_0x980b5b(0x197)+_0x980b5b(0x520)+'d.on\x20'+_0x980b5b(0x268)+_0x980b5b(0x1ea)+'itle\x20'+_0x980b5b(0x4b4)+'g\x20{\x20c'+_0x980b5b(0x2bf)+'\x20#fff'+'0f5;\x20'+_0x980b5b(0x53f)+'\x20.sk-'+_0x980b5b(0x16b)+'\x20{\x20pa'+_0x980b5b(0x568)+_0x980b5b(0x287)+'2px\x201'+_0x980b5b(0x59a)+'}\x0a\x20\x20\x20'+_0x980b5b(0x3de)+'mdesc'+_0x980b5b(0x384)+_0x980b5b(0x1ad)+_0x980b5b(0x2a8)+_0x980b5b(0x2e8)+_0x980b5b(0x27d)+'ty:\x20.'+_0x980b5b(0x29e)+_0x980b5b(0x367)+_0x980b5b(0x6aa)+_0x980b5b(0x5f0)+_0x980b5b(0x16f)+'\x20\x20\x20\x20.'+'sk-ct'+'l\x20{\x20d'+_0x980b5b(0x633)+'y:\x20fl'+_0x980b5b(0x2a6)+_0x980b5b(0x65f)+_0x980b5b(0x655)+':\x20cen'+_0x980b5b(0x3e0)+'gap:\x20'+_0x980b5b(0x3e9)+'paddi'+_0x980b5b(0x54e)+_0x980b5b(0x5e1)+_0x980b5b(0x185)+_0x980b5b(0x1ac)+':\x2011.'+_0x980b5b(0x2f8)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x980b5b(0x12f)+_0x980b5b(0x498)+_0x980b5b(0x3b8)+_0x980b5b(0x419)+_0x980b5b(0x4e2)+'gba(2'+_0x980b5b(0x28b)+_0x980b5b(0x474)+_0x980b5b(0x5d0)+';\x20}\x0a\x20'+_0x980b5b(0x197)+'k-hin'+_0x980b5b(0x24d)+'ispla'+'y:\x20bl'+_0x980b5b(0x58a)+_0x980b5b(0x52a)+'size:'+_0x980b5b(0x451)+_0x980b5b(0x274)+_0x980b5b(0x25d)+_0x980b5b(0x38e)+'}\x0a\x20\x20\x20'+_0x980b5b(0x3de)+_0x980b5b(0x126)+_0x980b5b(0x3ae)+'ositi'+_0x980b5b(0x2ac)+_0x980b5b(0x564)+_0x980b5b(0x1e1)+_0x980b5b(0x6a0)+_0x980b5b(0x1c5)+';\x20hei'+_0x980b5b(0x181)+_0x980b5b(0x41a)+'\x20bord'+_0x980b5b(0x2ec)+_0x980b5b(0x4de)+_0x980b5b(0x406)+_0x980b5b(0x278)+_0x980b5b(0x2ad)+_0x980b5b(0x1b8)+'ckgro'+_0x980b5b(0x683)+'rgba('+_0x980b5b(0x3e7)+_0x980b5b(0x312)+_0x980b5b(0x14e)+_0x980b5b(0x4ee)+'rsor:'+'\x20poin'+'ter;\x20'+_0x980b5b(0x39f)+'\x20none'+_0x980b5b(0x212)+'\x20\x20\x20.s'+_0x980b5b(0x432)+'tch::'+_0x980b5b(0x2c6)+_0x980b5b(0x1d6)+'ntent'+_0x980b5b(0x573)+_0x980b5b(0x122)+_0x980b5b(0x43a)+_0x980b5b(0x232)+'lute;'+_0x980b5b(0x603)+'\x203px;'+'\x20left'+':\x203px'+';\x20wid'+'th:\x208'+_0x980b5b(0x675)+'eight'+_0x980b5b(0x49c)+_0x980b5b(0x4de)+_0x980b5b(0x406)+_0x980b5b(0x278)+':\x2050%'+';\x20bac'+'kgrou'+_0x980b5b(0x156)+_0x980b5b(0x3db)+'55,25'+'5,255'+',.25)'+';\x20tra'+_0x980b5b(0x549)+_0x980b5b(0x484)+_0x980b5b(0x5a2)+'2s,\x20b'+_0x980b5b(0x52e)+_0x980b5b(0x5e4)+_0x980b5b(0x4f8)+_0x980b5b(0x53f)+_0x980b5b(0x3de)+'switc'+_0x980b5b(0x270)+_0x980b5b(0x3d9)+'cked='+_0x980b5b(0x589)+_0x980b5b(0x199)+_0x980b5b(0x4ef)+_0x980b5b(0x51a)+':\x20rgb')+('a(255'+',107,'+'157,.'+'25);\x20'+_0x980b5b(0x53f)+_0x980b5b(0x3de)+_0x980b5b(0x126)+_0x980b5b(0x270)+'a-che'+'cked='+_0x980b5b(0x589)+_0x980b5b(0x602)+_0x980b5b(0x22b)+'{\x20lef'+_0x980b5b(0x656)+_0x980b5b(0x3af)+'ackgr'+'ound:'+_0x980b5b(0x69e)+_0x980b5b(0x3d0)+'}\x0a\x20\x20\x20'+_0x980b5b(0x3de)+'field'+'\x20{\x20ba'+'ckgro'+'und:\x20'+_0x980b5b(0x35f)+_0x980b5b(0x3e7)+_0x980b5b(0x312)+_0x980b5b(0x179)+_0x980b5b(0x44b)+_0x980b5b(0x5ab)+':\x200;\x20'+'borde'+'r-rad'+'ius:\x20'+_0x980b5b(0x632)+_0x980b5b(0x2b3)+_0x980b5b(0x483)+_0x980b5b(0x317)+_0x980b5b(0x5cb)+_0x980b5b(0x6a4)+_0x980b5b(0x5f7)+_0x980b5b(0x5df)+'ont-s'+'ize:\x20'+'11.5p'+_0x980b5b(0x586)+_0x980b5b(0x521)+':\x20non'+'e;\x20bo'+_0x980b5b(0x290)+'dow:\x20'+_0x980b5b(0x243)+'\x200\x200\x20'+_0x980b5b(0x1d9)+_0x980b5b(0x588)+'(255,'+'255,2'+'55,.0'+_0x980b5b(0x216)+_0x980b5b(0x218)+_0x980b5b(0x4ad)+_0x980b5b(0x5b2)+_0x980b5b(0x338)+_0x980b5b(0x3b0)+'ackgr'+_0x980b5b(0x220)+_0x980b5b(0x295)+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'range'+_0x980b5b(0x64c)+_0x980b5b(0x5bc)+_0x980b5b(0x547)+_0x980b5b(0x157)+_0x980b5b(0x2dc)+_0x980b5b(0x639)+'\x20cent'+_0x980b5b(0x39b)+_0x980b5b(0x3b9)+_0x980b5b(0x475)+_0x980b5b(0x218)+_0x980b5b(0x2a1)+_0x980b5b(0x4a4)+'\x20{\x20-w'+_0x980b5b(0x5b8)+'-appe'+'aranc'+_0x980b5b(0x139)+'ne;\x20a'+'ppear'+'ance:'+'\x20none'+';\x20wid'+_0x980b5b(0x650)+'0px;\x20'+'heigh'+'t:\x208p'+'x;\x20ba'+'ckgro'+_0x980b5b(0x683)+_0x980b5b(0x320)+_0x980b5b(0x2c2)+_0x980b5b(0x3fc)+_0x980b5b(0x257)+_0x980b5b(0x182)+_0x980b5b(0x4e1)+':-web'+_0x980b5b(0x46e)+_0x980b5b(0x4a4)+'-runn'+_0x980b5b(0x1bc)+'track'+'\x20{\x20he'+_0x980b5b(0x61f)+_0x980b5b(0x127)+_0x980b5b(0x3ba)+'er-ra'+'dius:'+'\x202px;'+_0x980b5b(0x282)+_0x980b5b(0x5e5)+_0x980b5b(0x4d5)+_0x980b5b(0x254)+'gradi'+_0x980b5b(0x468)+_0x980b5b(0x458)+_0x980b5b(0x63e)+_0x980b5b(0x629)+')\x200\x200'+_0x980b5b(0x33b)+_0x980b5b(0x3aa)+_0x980b5b(0x58e)+')\x20100'+'%\x20no-'+'repea'+'t,\x20rg'+_0x980b5b(0x53e)+'5,255'+',255,'+_0x980b5b(0x42d)+_0x980b5b(0x6a2)+'\x20\x20.sk'+_0x980b5b(0x1f0)+_0x980b5b(0x397)+'webki'+_0x980b5b(0x3be)+'der-t'+_0x980b5b(0x343)+_0x980b5b(0x24b)+'bkit-'+'appea'+'rance'+_0x980b5b(0x619)+'e;\x20wi'+_0x980b5b(0x641)+'6px;\x20'+'heigh'+'t:\x206p'+_0x980b5b(0x272)+'rgin-'+_0x980b5b(0x3cd)+'-2px;'+_0x980b5b(0x3ba)+_0x980b5b(0x341)+_0x980b5b(0x1b2)+_0x980b5b(0x61c)+_0x980b5b(0x282)+'groun'+_0x980b5b(0x435)+'f6b9d'+_0x980b5b(0x212)+_0x980b5b(0x197)+_0x980b5b(0x17c)+'\x20{\x20fo'+'nt-si'+_0x980b5b(0x2a8)+'1px;\x20'+_0x980b5b(0x52a)+'weigh'+_0x980b5b(0x51c)+'0;\x20mi'+_0x980b5b(0x376)+_0x980b5b(0x593)+'8px;\x20'+_0x980b5b(0x4c6)+_0x980b5b(0x314)+_0x980b5b(0x4c1)+_0x980b5b(0x210)+_0x980b5b(0x2bf)+_0x980b5b(0x588)+_0x980b5b(0x5c4)+_0x980b5b(0x58c)+_0x980b5b(0x548)+_0x980b5b(0x448)+_0x980b5b(0x257)+_0x980b5b(0x15f)+_0x980b5b(0x32f))+('\x20widt'+_0x980b5b(0x1b6)+_0x980b5b(0x675)+_0x980b5b(0x584)+_0x980b5b(0x408)+'x;\x20bo'+'rder:'+_0x980b5b(0x477)+'order'+'-radi'+_0x980b5b(0x597)+_0x980b5b(0x3af)+'ackgr'+'ound:'+_0x980b5b(0x34c)+';\x20pad'+_0x980b5b(0x193)+_0x980b5b(0x61d)+_0x980b5b(0x687)+':\x20poi'+_0x980b5b(0x2cd)+_0x980b5b(0x6a2)+'\x20\x20.sk'+'-note'+'\x20{\x20fo'+'nt-si'+_0x980b5b(0x2a8)+'1px;\x20'+_0x980b5b(0x2b3)+_0x980b5b(0x377)+_0x980b5b(0x2c4)+_0x980b5b(0x541)+_0x980b5b(0x118)+'5);\x20p'+'addin'+_0x980b5b(0x424)+'x\x200;\x20'+_0x980b5b(0x53f)+_0x980b5b(0x3de)+'note.'+_0x980b5b(0x33d)+_0x980b5b(0x47b)+_0x980b5b(0x24e)+'f7a93'+_0x980b5b(0x212)+'\x20\x20\x20.s'+_0x980b5b(0x628)+_0x980b5b(0x668)+'ign-s'+'elf:\x20'+'flex-'+_0x980b5b(0x288)+';\x20bor'+_0x980b5b(0x3ea)+_0x980b5b(0x56c)+'rder-'+'radiu'+_0x980b5b(0x3dc)+_0x980b5b(0x18b)+_0x980b5b(0x568)+':\x208px'+_0x980b5b(0x44e)+_0x980b5b(0x21f)+_0x980b5b(0x20b)+'nd:\x20#'+_0x980b5b(0x458)+'d;\x20co'+'lor:\x20'+_0x980b5b(0x30f)+'\x20font'+_0x980b5b(0x1ac)+_0x980b5b(0x464)+_0x980b5b(0x2f8)+_0x980b5b(0x52a)+'weigh'+_0x980b5b(0x375)+_0x980b5b(0x444)+'rsor:'+'\x20poin'+_0x980b5b(0x3e0)+'}\x0a\x20\x20\x20'+_0x980b5b(0x3de)+_0x980b5b(0x40a)+_0x980b5b(0x587)+_0x980b5b(0x676)+_0x980b5b(0x3c1)+'brigh'+_0x980b5b(0x50b)+'(1.1)'+';\x20}\x0a\x20'+_0x980b5b(0x37b));window[_0x980b5b(0x3e4)+'entLi'+_0x980b5b(0x4d0)+'r']('keydo'+'wn',_0xf2e0ff=>{var _0x520921=_0x980b5b;_0xf2e0ff['code']===_0x520921(0x566)+'t'&&(_0xf2e0ff['preve'+_0x520921(0x183)+_0x520921(0x5a8)](),_0x48a842());},!![]);var _0x288bca=document[_0x980b5b(0x62d)+'eElem'+'ent'](_0x980b5b(0x5b6));_0x288bca[_0x980b5b(0x19a)]['cssTe'+'xt']=_0x579e3b['myXxg'],_0x288bca['inner'+'HTML']=_0x980b5b(0x2d8)+_0x980b5b(0x5b9)+_0x980b5b(0x4c0)+_0x980b5b(0x460)+_0x980b5b(0x699)+_0x980b5b(0x28d)+_0x980b5b(0x2c5)+'12\x2021'+_0x980b5b(0x54d)+_0x980b5b(0x54b)+_0x980b5b(0x53d)+_0x980b5b(0x360)+'5\x200-2'+_0x980b5b(0x1e9)+'8-4.5'+_0x980b5b(0x27b)+'5s4\x202'+_0x980b5b(0x1c3)+_0x980b5b(0x4a2)+_0x980b5b(0x577)+'5-4\x207'+'.5z\x22\x20'+_0x980b5b(0x3fb)+_0x980b5b(0x207)+_0x980b5b(0x5e8)+_0x980b5b(0x645)+'#ff6b'+'9d\x22\x20s'+_0x980b5b(0x16c)+'-widt'+_0x980b5b(0x620)+_0x980b5b(0x4f0)+_0x980b5b(0x129)+'necap'+_0x980b5b(0x542)+_0x980b5b(0x3d1)+'troke'+_0x980b5b(0x4fc)+'join='+_0x980b5b(0x429)+_0x980b5b(0x247)+_0x980b5b(0x18f)+_0x980b5b(0x480)+'\x2212\x22\x20'+'cy=\x221'+_0x980b5b(0x172)+_0x980b5b(0x558)+_0x980b5b(0x61a)+_0x980b5b(0x535)+_0x980b5b(0x572)+_0x980b5b(0x1c6)+_0x980b5b(0x236),_0x288bca['title']=_0x980b5b(0x1dd)+'a\x20Kou'+'r',_0x288bca[_0x980b5b(0x44f)+'seent'+'er']=()=>_0x288bca['style']['opaci'+'ty']='1',_0x288bca[_0x980b5b(0x44f)+'selea'+'ve']=()=>_0x288bca['style']['opaci'+'ty']=_0x980b5b(0x420),_0x288bca[_0x980b5b(0x297)+'ck']=_0x50fee5=>{var _0x30c85c=_0x980b5b;_0x50fee5[_0x30c85c(0x1bf)+_0x30c85c(0x3cc)+'ation'](),_0x48a842();},document[_0x980b5b(0x5b4)][_0x980b5b(0x175)+_0x980b5b(0x1ba)+'d'](_0x288bca),_0x58d99f(),requestAnimationFrame(_0x42bb08),console[_0x980b5b(0x234)](_0x980b5b(0x3f0)+_0x980b5b(0x1da)+_0x980b5b(0x3e1)+_0x980b5b(0x186)+'eady.'+'\x20UWMK'+':',_0x14ded4[_0x980b5b(0x4ec)]);});})()));function _0x5082(_0x10590e,_0x4c366d){_0x10590e=_0x10590e-(-0x18c0+0x7b1*-0x4+0x389c);var _0x36674e=_0x2b0a();var _0x4d7353=_0x36674e[_0x10590e];if(_0x5082['TelAig']===undefined){var _0x579071=function(_0x2fa326){var _0x510efc='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3979dc='',_0x3465bb='';for(var _0xa1214e=-0x2*-0x5f2+-0x3*-0x394+0x1*-0x16a0,_0x10b7af,_0x8c8ef3,_0x2c1903=-0xa7d+-0x1ce9+0x13b3*0x2;_0x8c8ef3=_0x2fa326['charAt'](_0x2c1903++);~_0x8c8ef3&&(_0x10b7af=_0xa1214e%(-0x1*0x12d+-0x7*0x14e+0x3*0x371)?_0x10b7af*(0x241*-0x1+0x13b+-0x2*-0xa3)+_0x8c8ef3:_0x8c8ef3,_0xa1214e++%(-0x2299+0x1*-0x21f5+0x4492))?_0x3979dc+=String['fromCharCode'](0x1ec7+-0x19be+-0x40a&_0x10b7af>>(-(-0x1*-0x1421+0x159b+0x29ba*-0x1)*_0xa1214e&-0xab3*0x3+0xdc2+0x3*0x61f)):-0x2e3+-0x1d80+-0x1*-0x2063){_0x8c8ef3=_0x510efc['indexOf'](_0x8c8ef3);}for(var _0x1eb7ff=-0x7fd*-0x2+-0x28d*0x2+-0x1d0*0x6,_0x23636b=_0x3979dc['length'];_0x1eb7ff<_0x23636b;_0x1eb7ff++){_0x3465bb+='%'+('00'+_0x3979dc['charCodeAt'](_0x1eb7ff)['toString'](-0xf8d+-0x1735+-0x1*-0x26d2))['slice'](-(-0x66a*0x1+-0x1575*-0x1+-0xf09));}return decodeURIComponent(_0x3465bb);};_0x5082['QzpjoW']=_0x579071,_0x5082['SjAYQP']={},_0x5082['TelAig']=!![];}var _0x299249=_0x36674e[0x602*0x4+0x2215+-0x3a1d],_0x583dc0=_0x10590e+_0x299249,_0x37a700=_0x5082['SjAYQP'][_0x583dc0];return!_0x37a700?(_0x4d7353=_0x5082['QzpjoW'](_0x4d7353),_0x5082['SjAYQP'][_0x583dc0]=_0x4d7353):_0x4d7353=_0x37a700,_0x4d7353;}function _0x2b0a(){var _0x1bc7f9=['lc4WocK','CM0GlJq','mxb4ida','nYWUmJG','A1zjz1a','iL06oMe','ihrVCdO','jsK7ic0','CYbpsgu','renYD3q','BgLJyxq','re9nq28','t0HLywW','AcbVBMu','Fdz8m3W','zxzLCNK','yxnLBgK','zNbZ','EYbMB24','zM9YBxm','BNrLEhq','u0fgrq','igvSC2u','ywqGEYa','lxnOywq','zg93kda','D2zpz3u','C2STAgK','oIbUB24','igzPBgW','Aefwr08','iduWjtS','ida7igm','B2STCMu','AwDODdO','Ad0ImIi','C2f0Dxi','CYaNzNu','BwLKzgW','z24Ty28','qNrjCMW','t1PxC1G','B3nLihm','AY1IDg4','zJzIowq','khjLBg8','BfPPwu4','DwP4weG','y3jLyxq','id0GzMW','te1c','zwX5DM0','ihrOzsa','nNb4oYa','AxnWBge','v0fttsa','zsbBrvG','DhrPBMC','sfrnta','zfvcrfi','DgvTCZO','Bg9Y','zM9YBtO','yuLnrMe','B3uU','zcWGi2y','DgL0Bgu','DZOGAw4','zhrOoIa','swXnCNq','lsbVDMu','s2HnseG','B2TLpsi','ChG7ihC','u3bLzwq','CMvSEsa','mtjWEca','zgvZyW','mIaXmK0','ihSGzgK','y2fWu2G','zMjgCLC','ig1PBM0','DgG6idK','BNqGAxq','Dg9Y','B2r5','tLfoENu','AxrLBxm','DdOGmtu','AxnPyMW','idmWChG','reXHA2e','ywqGDg8','rujcCui','AuLnywm','vw1ys1a','oYb3Awq','BgLNBI0','ANvTCfa','seXiCve','Bw4TBg8','mdbTCY4','qufVCvG','lc4WnsK','phnTywW','CMvHzey','ihSGywW','mhWZFdy','z3jHDMK','ic5TBI0','ztOGmtC','CY1Zzxi','A3mGyxi','C2STBwq','DgvZDa','ywrKAw4','yNv0Dg8','CIbHzhy','zw50CZO','ChG7igG','EYbMAwW','yxv0BY0','zMLSBfm','t2PUD1G','C2u6Ag8','BwvZC2e','z3PyyKe','Dvf2Ewe','zxrLy3q','C2HPzNq','rxHW','nIaXoci','CIiSici','Dw5KoIa','tw92zw0','Bw4TAca','C2STy2e','DxjZB3i','wvrzuw4','EYbJB2W','zwXK','D2vwte0','B2vZig4','igP1Bxa','x19ZywS','mcWUntu','t2nnALe','Ag9VA0C','vMrqC3q','B3vUDgu','yM5QyvK','mdSGFqO','Bw92zw0','yxj0lG','zwf0CYa','idi0iJ4','BgLUzvC','t0rosuG','oYbHBgK','AwrHDgu','icnMzJy','kg92zxi','Awr0AdO','rxvkB3O','ih0kica','Dw5RBM8','Aw5NoIa','B29RCYa','vvDnsW','u0fgrsa','BMnL','B0jsyMW','yM90Dg8','AM9bsfy','mJqYlc4','EcbYz2i','AxvZoIa','yxrPB24','y2fSBa','A3ndChm','r0rprMe','BxKGC2u','DhLqy3q','zwCGzMe','ihbVC2K','y2vdAgK','zw0TDwK','sgTAy3e','C3DPDgm','idjWEdS','y2HPBgq','A2uTBgK','zMyP','BKHXzMO','r3f2DK8','ys11Aq','AYbVBI4','BgfIzwW','i2zMyJm','yKTgrg0','qxbWBgK','iKLUDgu','tgTOrLK','iJeYiIa','zsXTB24','BxbUu2K','mJu1lc4','ztOGBM8','EcKGC2e','ENvQzxu','C3zNiJ4','qvfHEui','mxW0Fdu','AcaTidq','lxjHzgK','zw50CW','zJmY','zvj1BM4','mJrrqMTjqMq','BMf0Dxi','A291CNm','y3jVC3m','BMqGBwe','lM1Ulxa','lsbHihm','AwWGC3a','ldePoWO','ExjfCMm','nsWUmdC','BgfZDeu','ve96DNe','CMLKoYa','CM9Szq','Fdb8nxW','mNW2','zw50tgK','BMq6ihi','EdSGywW','seDrwLq','C3rLCa','mtrXv1r2qLq','AguGzNi','AfvKt3y','Ag9Szsa','y3K9iJe','C2STy28','AhDpALi','yMLJlwi','DMvYlxy','EvPOtwG','z29KrgK','zwn0oIa','DgvY','AerZv2O','mtSGBwK','v3jHCha','zsGXnta','BwjVzhK','DhjVA2u','rgfTywC','lxrPDgW','EdSGFqO','CMvWBge','ohb4ksK','mciGCJ0','C2v0qxq','Bw92zq','yxbWzw4','A2rYB3a','DhzIu1G','B2LS','nsWUmdm','B3bLBG','CI1ZzwW','AY12ywW','q3jVC3m','sw1MA0O','y2HdB2W','v2vItw8','z2H0oIa','C2STC2W','BNrezwy','CZOGyxu','igzVBNq','zw51ihi','zMLSBcW','q29TyMe','nda5odzJs0nvyuy','B3bLCNq','EdSGCge','yM9Yzgu','rMLLBgq','yxrJAgu','y2LYy2W','zgvSzxq','oIbJzw4','qMXVy2S','zgLUzZO','ig9U','zxrhyw0','EK54t2q','icaGlNm','u2vSzwm','iL0GEYa','C3r5Bgu','y2fWDhu','z2v0sxq','Aw5NicS','zgvZ','Aw5WDxq','Axr5oIa','uerIs0O','oYbIB3G','ndqXmJCYve9pA2Dl','Dg87ih0','BvrSr20','mtbWEdS','u2nHBgu','y2XHC3m','CxrvB24','CML0zxm','AguGCMu','lxnPEMu','BNqTC2K','C2Hkqxy','Aw50zxi','De5Vzgu','zvjHDgu','zgL1CZO','Dgv4Dei','mJiSocW','icaGlM0','AdOGmZq','Dhj1zq','EdSGyMe','BguGAwy','zenOAwW','oIaXnha','ywjSzs0','yw5LBca','Bw4TC2K','C3rVCfa','i2zMnMi','CxvLCNK','Bg9Hzgu','idqGnc4','nxm0idi','idi2ChG','lZ48l3m','C2STBwi','CMvUDem','igHVB2S','zg93BIa','zZOGmta','rKj4Evm','mtySmc4','C21HBgW','zMLSBa','Fdj8oxW','AwXnB3q','zNvSBhm','qK5lDhG','yxrSEsa','EI1PBMq','ihSGy28','DwvAAxe','rgLZywi','mcaXChG','CMeTA28','Bw4Ty28','z3LIywm','u2fRDxi','ufmGDw4','CMqTAgu','DwX0','DMu7ihC','B293qwK','igfWCgW','B3vUzgu','BgLUzvq','qNjKquq','BI1SB2C','AgfZ','lJuGms4','yxjKlxq','DMLHifm','AuDrwKK','Aw9UoMy','CZOGy2u','vgLPAfy','lxnSAwq','AfnOywq','Aeruwwy','idaGmca','CMvHzhK','lxbHCMu','mhG2mda','yxrLkde','yxjNzxq','BwLZyW','zNnszgW','tg1uBuO','yw1L','idrWEdS','rM9Yy2u','u29LvMS','Axb0kq','zw50oYa','ide0ChG','ugjQENe','u3rHDgu','qxzUu0q','y0fkvgC','iM5VBMu','zvn0EwW','zguSihq','lwHLAwC','A2DYB3u','idGWChG','zMXUrvG','rwXLBwu','Bgf2rwy','Ahq7igm','q3vZDg8','oYb9cIa','Eca2ChG','oYbQDxm','C2XPy2u','nsK7ih0','lwnVBhm','cIaGica','y2fUDMe','mZuSmJq','tunmz04','oIa0ChG','Awq7iha','EdSGAgu','oYbIywm','B3vUzdO','ywn0Axy','B250zw4','nNb4ida','Dgv4Dee','DhLWzq','BMqGt0G','mZvqwMTnDMy','CMfUC2K','A0HJCwS','EvP4wfG','zNrLCIa','u2fMzsa','z3zXA1e','ig5VigG','BIbZAwC','sgDTzui','z3HNAgW','igfIC28','uMfWAwq','Bg9N','zxiTzxy','DMC+','vgPPs3y','EuvUz2K','nsKSida','B290zxi','ywDLigq','sLzLCNy','DgHPCYa','BcbKCMe','DMG7EI0','igLMig0','DhvYyxq','zwfWB24','Aw5Zzxq','CI1Yywq','B2reAwu','u0flvvi','zciVpJW','DNjiz2W','lwv2zw4','EeLzzK8','EYaTD2u','uef6EgO','Dcb7igq','CJOGi2y','Fdz8mxW','DgvYigm','EhrYteC','CM9UzYa','uLL1DKW','BMvHCI0','A2vZig8','veXRyvm','icaGic4','zsb0CMe','A3nqB3m','yu9cC2m','tfzUz04','y3LPA00','y2L0EtO','tuLtu0K','mdCSmtu','AgvPz2G','B24U','icbIB3G','sxnhCM8','igLZigm','zKf5sLy','BerPzsK','DML0Eq','lNnRlwm','EK5KzeG','ysblB3u','ChbLBNm','BI5MAxi','BMC6ida','nJaWia','ihrYyw4','AfTHCMK','BM9UztS','EdSGBwe','Dg9Nz2W','oYbVCge','msWUmZy','ywqU','q291BNq','ywrPDxm','ig5LDMu','AKfTsg4','idqTnc4','tMTTvxm','B3bHy2K','yYGXmda','y2SP','B250lxC','wgLluu4','igjHy2S','nsWUmdu','z2v0rwW','oJa7D2K','Aw5Uzxi','oIaWide','C3rHCNq','DhmGCgW','whjfCgi','ndySmJm','B3jZige','phbHDgG','zgTPDa','y3jLBwu','Ec1ZAge','zvbSDwC','Ag9VA04','mhGYnta','D2fYBG','icmYmJe','i2zMzG','B25JBgK','n3W1Fdy','sgHLqwe','EtOGz3i','v3bbrhG','DxqGDgG','DgXLCW','ndSGBwe','ntq3odHsv2jTzge','uMvJyuW','lNnRlxm','ChG7iha','lxnHBNm','icaGkIa','CMvZDg8','zxG7ige','ExLtrwu','EMu6ide','zs1PDgu','C3rYAw4','CwLMtNq','B246ihi','oIa5oxa','BgvUz3q','lcbPBNm','y2n1CMe','u1nntMS','qxbWBhK','y29SB3i','Dg9W','zwLUC3q','BM9Uzq','quXsBem','C3rYB2S','BI1JBg8','EYbIywm','yw5LBc4','tvDAy1q','oYbMB24','CM9Wlwy','B2XVCJO','CgXHEtO','EhHwyxO','CgfYzw4','DM9fvg8','ysGYndy','igq9iK0','ywz0zxi','ELDmD28','oIbIBhu','yMLes2i','B24Oks4','rvHqxq','C2vSzwm','BNrLCJS','B25SEsW','CMrLCI0','BMf2','CMfUC3a','mcbOB28','BgrYzw4','nYWWlJG','ywLSzwq','CMuGkfm','A3nty2e','phn2zYa','B1jLy28','CMvSB2e','sgLKzxm','AwDUlwK','yxjPys0','D2X6DvC','qLH5A2q','q0TYtgC','y29Kzq','ihn5C3q','y3nZvgu','DtmY','EYbIB3G','B25LigK','AdOGnJi','mxb4oYa','zxrL','CMLUz3m','B24Gzxy','zxi6ida','AgvSza','ANHOtKC','ys5RB3u','nhWYFde','igj1AwW','s3v6qNa','ywXSihq','tgvMDca','BhmGysa','uhfnEu4','B29Rihi','nxb4oYa','Ag9VA3m','ihnOB3q','DK13yxm','wMDMt2e','z2fTzuW','DK1drhG','CNrPzgu','lKXVy2e','lMrSBa','A1rStMO','zxjYB3i','nsWYntu','rfvkyvy','DgvTCgW','q29SB3i','rw5Mz3a','zfzRwgS','tM8Gu3a','mNb4ksa','Dc1Myw0','AwvSza','Cfz0s0y','i2zMzJS','qxnZzw0','zcb7igi','ntuSmJu','nIa2Bde','ywXPz24','FdH8mhW','nYWUmsK','zwvMmJS','ohWWFde','uIb2ms4','BhrOige','tMfTzq','yMX5lum','B2X1Bw4','tgDPtMi','BwvsDw4','DhjHBNm','oYbMBgu','idHWEdS','yxmGBM8','BhvTBJS','ignHBgm','BLzJzgG','Bg93oIa','n3W0Fda','nhW3Fda','zxjSyxK','mcaWida','lwjHBNi','CfrUDMe','C2v0uhi','Bg9YihS','idaGnha','uwrvyum','uhreDhO','Ahq6idi','zM9UDa','AxrJAa','zuv4Ca','Bwf0y2G','B3b0Aw8','ihWGBw8','igvUDgK','ic8GDMe','mxWYFda','zxjYihS','oMHVC3q','ig1HEsa','BY1ZDMC','zxiTCMe','y3qGB24','AhvTyIa','s2LSBgu','mdi1ktS','mxW0Fdi','zcbNCMu','Bgv4oIa','mtm4mdyWmeHUr2vTrG','Aw1Llca','zfDPyKm','ig5VBMu','mNb4ihu','nhWYFda','mtiGmJe','ie92zxi','sw5ZDge','D2nhwfu','r29Kie0','z2nXEuK','CMvHza','Dc1ZAxO','zgLZCgW','u3bHy2u','vhnlB1K','Be1VDgK','D2L0Ag8','ihn0AwW','BwvKicG','ChGPoYa','CMDIysG','ltqTnY4','idK5osa','mhb4lca','zw50rwW','Dgv4Dem','oIaZmNa','B2XPBMu','CMDPBI0','oIaWoYa','v0LLu1O','Bfvhufm','ide7ig0','tgvNAw8','u0rQBg4','CgfYC2u','ign1CNm','Aw5Mqw0','BIb7igy','icaGzgK','mcWWlJy','yMHVCa','DdOGnZa','BI13Awq','oIbYz2i','zw5HyMW','n3W4','CfPmEvG','icaG','DgfNtMe','kc4YmIW','Bgu7igy','rLPeDva','EdTVCge','vwrrCNy','Ec1KAxi','C2STzMK','ihSGzM8','q1z2suS','mJqWiey','BhrO','uMvJB2K','DhKGjq','ztOGmtm','zc5VBIa','CMLZAYa','uhzksxe','ic40oYa','q1jxu1e','B2XVCJS','D0nVBg8','oWOGica','qxbbvwu','DgLKzs4','qunuAYa','ywX0Ac4','zxi6oI0','DhjHBxa','yM91BMq','mtSGyMe','zxi7igC','s3Dvrg0','DxjLihq','DgfIihS','zMXLEdO','suDNB0W','Bw91C2u','DMfSDwu','vw5PDhK','C2fRDxi','y3vYC28','Bw9fEha','zZOGnNa','AwXLzdO','yxa6ihi','CIGTlxa','wMvYB2u','y3KGB24','suXsALu','Acb7iha','ChG7igi','BIb7igi','y29PD1e','C2HVD24','Awr0Aa','wxD6q0O','BgW+','CJSGzM8','igzVDxi','zxG6ide','yxa6idG','igjVCMq','A2v5Dxa','tgLZDa','B3n0zMK','Dc1ZBgK','CNjVCG','mJu1lde','DgvYoIa','uJOG','z2uUiei','AguGDxm','ifTfwfa','D0jSDxi','mJSGC3q','oIbHyNm','DgHLihC','r3jHDMK','s3vzuMm','CM9WywC','Dg9WoIa','CgvHDcG','mte3nJuWn0XMrhfcva','yJLKoYa','BMqIihm','Dxm6idi','y2HLy2S','ndC0odm','BgWGBwu','owqIihm','mJmWCePPDxbj','zsWGDhi','ys1JAgu','DgG6idu','z2jHkdi','CZOGoha','yLPPA1m','ic5ZAY0','lM1Ulxm','DgvYoYa','DxjDig0','icaGyMe','BfjHDgK','ywrKrxy','nMvLzJi','ns00idC','mJu1ldi','yxb0Dxi','ohb4oYa','zgvYoIa','A0Dvt2y','ihbSywm','igf1Dg8','DePAt08','ihDLyxa','w3nHA3u','ieDLDfy','y2vZlG','igjVEc0','CMvJDa','tvfdqwK','Bg5WzNm','ls1W','ugf0Aa','qwj3C3u','Bgf5oIa','zMLSBd0','DdSGFqO','BYbWAwC','mdb2DZS','uMvJDa','zIXZExm','BM9tChi','B2X1Dgu','sNvTCca','re1jwMi','mxb4ihi','zgvYlxi','ywn0A0S','oIaYmNa','yxK6igy','yNrUoMG','y2vUDgu','reT6zg0','icaGica','ie9olG','Bw92zvq','mJzWEdS','ifvjiIW','CZO6lxC','yxvSDca','u21HwxK','Bw4TDgK','BgLNBG','ywLYlG','uNrTEMC','oYbJB2W','mtrWEdS','zgfTywC','qsblt1u','y2uGB3y','y2HkDNi','ugn0','mc41','uurlBg4','B2rL','EtOGmdS','zZOGmNa','odbWEcW','zwfK','Efjmz0q','lwjVEdS','iNjVDw4','Fdv8mNW','D01Rv0q','odaSmtK','lJa4ktS','q0fovKe','D2HLCMu','C3bSAxq','DdOYnNa','AY1ZD2K','Bg93zxi','mvzosLP0vG','zdOGi2y','zvfyB0e','BIb0Agu','C2v0ida','Fdn8mq','DgLVBJO','s2DiDLC','oI13zwi','tNLcwgG','BMv2zxi','CZPUB24','x19tquS','nhb4oYa','ywiUywm','zMXLEdS','mdSGy3u','r0fPvg8','l3jHCgK','igrPC3a','ktSGFqO','B25PBNa','y0vIDwe','nsK7igi','ww5IvNq','lc40ktS','ide2ChG','B25TB3u','lIbuDxi','ideWChG','CMvU','zw50','zxjZy3i','sfvVuvO','zhvnwNe','B3C6ida','zMy2yJK','uMvZzxq','ugP1zLm','AK1jEgy','qwPTu2q','sw5PDgK','vvjbx0S','DgvTlxu','idaGmJq','icaUBw4','igfSAwC','Aw5KzxG','oIaXms4','mtaXmJC0zfLPAvbK','vu9cq0u','zMLSBfq','zw50kcm','DgXL','BMDL','BuHkC0y','zfbVA00','yxjLBNq','A2L0lxm','EK1iwvG','ihjLy28','lxK6ige','Bg9HzgK','igv4Axq','ocWYndi','ChG7ih0','ihrOAxm','ida7igi','DxfMu1O','Cg9ZAxq','igDHCdO','ignVBg8','kdaSmcW','teLstNy','y2XLyxi','BNq6igm','zsbJEd0','yxrLlwm','lwfWCgW','oIaJzJy','B246igW','sg9VAYa','CJSGz2e','C2STyNq','AwDUyxq','t3vMyNm','y2HLCYa','D2fPDgK','DM9mr0C','zg9JDw0','DgPyuM8','BtOGmJq','yJPOB3y','Bw4Ty2W','BhmGDgG','tM8GuMu','idfWEca','DdOGmJG','tKfAyNu','lc4WncK','ihSGzMW','CM9Rzs0','BMvS','zxjZ','oIa4ChG','tvPtExu','kYbtCge','BI1ZDwi','wuDLExi','CMXHEsa','nwmWidm','seTvs3u','BgLKzxi','CIbNyw0','B3zLCMW','vKHQChC','vg90ywW','C2v0','u3rHDhu','ug9ZAxq','z24TAxq','lNnRlwy','ihWGz2e','mxWZFdq','EYbKAxm','vgfRzxm','q29mrMK','ndSGFqO','C3rYB24','CZOGmty','lMP1Bxa','AwnRihm','ysGYntu','CdOGmti','z3jPzdS','y29TyMe','CIGYmNa','y3bcsgi','zsb2ywW','D2LKDgG','B3G9iJa','oIbYAwC','Aw9U','wKvRvwy','y3jLzw4','sNvTCfq','Dgv4Dc0','A2vizwe','z21Uy3i','B01lBgu','EuPKswO','nJaWide','vgLJAW','uwXMDu4','BMLUzW','z29K','C3rLBMu','igvMzMu','C2STC3C','t1nOB28','zLfvB00','zdOGBgK','lwHVCa','yKrVzfi','rLbtig8','AMLmzMq','CI51As4','Aw4GC2e','CM9Rzxm','v0viEM8','oYbIB3i','DMLZDwe','q21kDKm','AwrLCJO','B3i6ihi','q1vlzvi','oIb0CMe','C2v0sxq','Bxm6igm','Fdj8nNW','nZTWB2K','yxa6ide','CeH6Evu','ohG5mc0','DxDTAW','lxrVCca','ktSGy3u','yMfJA2C','ihn0CM8','ldi1nsW','vMLZDwe','y2HtAxO','BMCGzM8','vvDnsYa','Bu5PueO','DgnOihq','lJjZoYa','y2znyMy','BLbSyxq','A2nxvfe','lwXPBMu','zwfSDgG','B2fKzwq','uK1c','Ag9VA1a','AwnnEMO','zwqGyw0','shrjv2W','ChGGDwK','Aw4TD2K','wgnitNG','DxrVoYa','y2vSzxi','nsaWlti','DhjPyNu','Dg5LC3m','Ag9VA0m','Bwf4','r21YthO','yMLgAuG','r1jAB2u','igzSzxG','B24UvgK','ms4XlJa','yuTVDxi','Bvzywuy','oYbYAwC','yw5ZzM8','CMLNAhq','DYGWida','CM91BMq','BguGC3q','DdOGnJa','BI1PDgu','zvzHBhu','ktSkica','AY1Jyxi','DgXPBMu','s2TVq24','DMfS','Fdn8nG','yxrLvge','DMvYBge','zw1LBNq','AwX0zxi','qNLjza','zM9UDc0','Bw4TDge','ve5xCMu','vMnPzxa','ywnRz3i','BhKGkhi','ywqUieK','A2v5C3q','zw50zxi','u2v0r2e','ihWGC2G','psiJzMy','n3W0Fdu','mtaWid0','C2fMzu0','y2TNCM8','tKfoBMi','igjHBM4','yNn4uu0','nc00lJu','yMeOmJu','FqOGica','q1btihi','ldiZocW','psjYB3u','Dg9Wrgu','lM1Ulxq','tuP2EgG','A291CI0','oIbMBgu','ndiSlJG','BNnPDgK','DxjDifu','ltiUns0','EuvsEum','yY0XlJu','BMC6idq','DhKGmc4','zYbJyw4','CwPUq2y','CYb3B24','BM93','kdi1nsW','AhLVCLO','AtmY','mcuUifm','iJeUnsi','u2HHCNa','C2HHzg8','oJiXndC','BMPbvvC','zw5gB3O','zK5Ot3u','AwXS','Dxm6ide','BMuUqxa','Aw4Sihq','ywrK','zwXHDgK','BM9szwm','sw5Zzxi','ocK7ih0','zgrPBMC','mcWWlJC','v2LKDgG','igDHDgu','mdSGyM8','lK92zxi','r0Xztgu','AxrPyxq','C2HVB3q','zuvSzw0','nMi5zci','oIaIiJS','t0Llwhi','v2TYv3a','ChvZAa','ltiUnsa','Bgv4oYa','Ee5wzve','ve5dCg0','u2TPChm','DwvksLu','odiPoYa','AwTrCeG','A2HXv3a','ntaLktS','icaGig8','psjTBI0','lwrPCMu','zwLNAhq','CLvwDva','EdSGB3u','B3zLCIa','ihjNyMe','iNrYDwu','B2nRoYa','DdOXmda','mJm4ldi','rgHiDNy','lca1mcu','igTVDxi','EsaUmZu','zg93BG','C2STDMe','DgG6idi','z2v0q28','Bw4TCge','yxjJ','Dxm6idy','Cfbpz08','zw1ZoIa','mhb4oYa','Dhm6yxu','DcbZDge','qxfxDhi','BwuG','CMfWAwq','yMX1CG','yxbWBgK','zwz0ic4','zvbSyxK','qwrIBg8','suP5qLK','ig1PBIG','DxjDigG','yxvSDa','BLD0Cgi','uMvMAwW','B3jKzxi','swyGCMu','q1P6zfG','mJvWEdS','CM9ZC2G','BNnLDca','zsbTAxm','AwvSzca','rw5NAw4','yM9KEq','yxKGB24','zgL2','BwfmvMS','zwjRAxq','DMLLD0i','z2LMEq','ywrIBg8','C3bSyxK','y3rPB24','ieaG','n3WWFdm','odu5ndCYAK1gu0fH','Aw9F','ig9YigS','DgLMEs0','kdi0nIW','ihLVDxi','j3qGC3q','oYbTAw4','AsXZyw4','mNWXFdu','ihjLBg8','ihbHzgq','z2v0qxq','ifvUAxq','Cg9W','Cc1ZAge','lc43nsK','vwnyr2K','ihDPzhq','r0zgzfe','CLPMv2K','A1bMr3q','yvr5tfm','AxHLzdS','lxnLCMK','uNvUDgK','zxH0','rNDkAK8','CYbpDMu','BNrLCI0','CI52mq','ChG7igy','yMvNAw4','ChGGmdS','DhLSzq','Dg9WoJe','B3vUzca','z3jVDw4','qM90Dg8','oIa2mda','iIbZDhi','ugPsAfa','lJq1oYa','C2f2zq','BYb0Agu','Bw4TDg8','B2rLu3q','s2v5uW','BtOGnNa','BhrLCJO','idrWEca','DgLKzvC','C3bLzwq','BgvMDa','zxzLBNq','nNb4idK','Ehz3A3e','sxfiv0G','y2fWtw8','tM8Gzw4','ihWGrvi'];_0x2b0a=function(){return _0x1bc7f9;};return _0x2b0a();}
