// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.9.10
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
function _0x32f8(){var _0x306b0d=['DdOYnNa','4Ocuig5Via','zKfsve8','lc40ktS','y2uGB3y','DdOGmJG','EYbMB24','ywn0A0S','ys5RB3u','zvn0EwW','q29SB3i','oIbIBhu','mZzSyxfgDe0','y3K9iJe','ideYChG','phbHDgG','zw50CW','lc4WnsK','rMLLBgq','lsbHihm','oJa7D2K','mNb4o3i','CYbLyxm','igvYCG','rgzdAvi','igq9iK0','EYbWB3m','owqIihm','Bw4TCge','lxnPEMK','zg93kda','tKCGlsa','v3jHCha','CxbzuK4','t1vsx18','C3r5Bgu','kc4YmIW','BM9szwm','y3qGB24','zwfSDgG','v2vItw8','nYWUmJG','DxjDifu','z29KrgK','Dw5KoIa','iL0GEYa','z2v0sxq','zMXLEdS','oYbMAwW','AcbVBMu','wwLNvMq','y2HdB2W','C2fMzu0','ihDOAwm','mIaXmK0','C2STy28','zsXTB24','ltiUns0','A3Pgv3G','lwzPBhq','C2STyNq','lwjVEdS','B3bHy2K','zxzLBIa','igXLyxy','ugjuCMm','sKnby2u','zgv2Awm','DxjLihq','FqOGica','yxrLkde','zvzHBhu','re9WwuK','BNrLEhq','whDPs3e','yw1Hz2u','CIbHzhy','Dhm6yxu','BevVt3i','zNHvCw0','CYbZChi','zvrHA2u','Awj2zgi','Aw9FmZa','ChvZAa','kYbtCge','ltiUnsa','wvfHv2i','v0fttsa','zgfLr2S','EdSGCge','ztOGBM8','AtmY','zM9UDa','D2L0Ag8','EuvUz2K','ndHWEcK','C2STy2e','z2fTzuW','mtGGnIa','zwLNAhq','CLHUy3q','zxmGB24','ktSGy3u','BwLUkdq','AxvZoIa','psiJzMy','CwfKwNi','BMC6ida','BguGAwy','sxrSyMe','vxjkz1C','C3rHCNq','B3zLCMW','A09PCue','C2HPzNq','ywn0Axy','yxKGB24','Cw9YChO','B29RCYa','lNnRlwy','ywqGEYa','uKr5ALy','yxnLBgK','nYWWlJm','zxjZ','As1TB24','CKL6sKy','C2f0Dxi','zciVpJW','oYbIB3i','mcaWida','zMLSBd0','DMLZDwe','EdSGFqO','yM91BMq','Aw9F','ufmGDw4','u3rHDgu','zwqGyw0','B24U','yMvNAw4','BMqIihm','Dg9WoJe','CM9UzYa','EtOGzMW','Bg9Y','Ag9Szsa','BM93','lxnOywq','BMv2zxi','uhL1yKu','DMvYBge','mcWWlJG','zwPwqMm','y29SB3i','EdSGz2e','B05WBfa','DhLWzq','rwXLBwu','AxHLzdS','sgvPz2G','AKP6B0S','mxb4ihi','ieTLzxa','CNHIquy','DNrgqNq','DvzsEgi','C052ALC','oYb9cIa','Aw5KzxG','Dcb7igq','oYbTAw4','B3nL','u3bLzwq','u2fRDxi','CM9ZC2G','tvrUBNa','lNnRlw0','Dg9W','Aw4Sihq','Dw5PDhK','lxDPzhq','D2fYBG','mxb4oYa','zvj1BM4','mwzYksK','DdOGoha','x19ZywS','z2jHkdi','BMLUzW','BfrUzM4','Fdr8mNW','AwvSzca','Dg9Wrgu','zwf0CYa','kdi1nsW','oIa2mda','ldeWnYW','BvvnBfy','t3jqyxu','ysblB3u','A2v5zg8','mNb4oYa','tMfdCwO','B3rOAw4','ChjLDMu','icaGlM0','sgLKzxm','vhztv1y','t3zry3m','zw5HyMW','DhLqy3q','zsb0CMe','B3C6igK','ihn0CM8','Bw4TDg8','ChG7igy','ltjWEdS','DfPyCLa','q1vPtu8','iL06oMe','igvMzMu','zMzwuhe','qNLjza','ChG7iha','zg93BG','lxnLCMK','zxH0','zwfWB24','ide0ChG','BwLZyW','ztOGmtC','DwH5uhC','q0fovKe','oIaWoYa','CM9WywC','D2jHAg4','ifvUAxq','z3LIywm','y29SCZO','CYbnB3y','CMDPBI0','CgfNzsa','zcbNCMu','nsK7iha','CMXHEsa','DxmGywm','B3jZige','sunxyxO','Ag9ZDg4','BMq6ihi','zxqGmca','s090Ahm','igXPBwK','nsaWlti','zxjPDdS','rwfJAca','B3rZlG','ie1VDMu','qu1es0m','Ag9VA0C','iNjVDw4','wKvHC0i','y3jVC3m','y2PqALq','qLLtDhq','C2STDMe','zgfTywC','iezPCMu','BI1TywK','igvSC2u','zgrPBMC','veXcDuS','Be1VDgK','zw0TDwK','D0nVBg8','oYb0CMe','tgDpte8','yxGOmJu','BNrLBNq','mtaWid0','zeflsva','ruTSu3y','v3zPvKq','CMrLCJO','BMC6idq','ldi1nsW','DMvTzw4','EtOGyMW','AxnPyMW','zgTPDa','DK96C2G','ignVBg8','ignHy2G','y2fWu2G','ignVB2W','sgXwsLa','y2LYy2W','s2v5uW','Aw5WDxq','qLnQr2O','lca1mcu','yxnZAwC','rwTWs0S','B2rL','qxbWBgK','CI1ZzwW','zNbZ','yxjNzxq','z1rYEfu','DgvZDa','uxHfyMC','Dc1Iywm','BgLNBG','Aw50zxi','CJSGz2e','C2STzMK','oYbJB2W','ihbVAw4','lNnRlxm','mdi1ktS','ywrKAw4','Bg9Hzc4','idmWChG','Aw9UlLq','zwCGzMe','zcWGi2y','ve9Awfy','EcbYz2i','BMzmsuy','B0jAD0K','Aur5B08','DMC+','zw50CZO','DhjPyNu','zvbSDwC','zdSGyMe','C3bSAxq','z3jHDMK','CMLKoYa','ENDVvg4','nNb4idK','DgnOihq','mZuSmJq','zxi7igC','zgLUzZO','igHVB2S','y2XHC3m','Bg93oIa','q1btihi','ienquW','iJeUnsi','uMvMAwW','yxbWzw4','B2STCMu','mtjWEca','DgL0Bgu','C2STy3q','BsbJzw4','AMzTt3i','ywrK','lxnSAwq','ywqGDg8','mcuUifm','DdOGnNa','rNjHBwu','qurIDvq','Fdv8mtm','EdSGyMe','oIbYAwC','B25JBgK','sw5Zzxi','ugrHre8','oIaZmNa','nJmZBM1mAgnY','wvD0wMC','B3qGBwe','DeTOr3q','oYb1C2u','ywjSzs0','B3nLihS','BgfIzwW','ieLZr3i','DgLVBJO','igzVBNq','uKPUBMe','CYaNzNu','ldiZocW','zKjKBwy','CNLvBgW','CM9Rzs0','BMuUqxa','Dw5RBM8','Dg9Y','oIbUB24','BMq6icm','C2STAgK','AgvSza','lwjHBNi','Bg9JAW','BerPzsW','DgvJDgK','oMHVC3q','zxjZy3i','veXuBfm','yw5Jzs4','uMvJB2K','C3bSyxK','ywqGD2G','A2LWELm','yM90Aca','AgrPDKq','yMD5sfe','t2ritKm','ndqXnJe2mg5uEvv0Aq','mcWWlJC','ida7igi','B2LS','ih0kica','tgjTzey','C3rYB2S','swDLtui','igfWCgW','nxm0idi','ntC4otG5zuvYvKLb','ywiUywm','vxHLt3i','zgvSzxq','lwHLAwC','vgfRzxm','yxrLvge','ywXSihq','ANPntgu','suTAtey','yNHlr2G','yMHVCa','ztSGyM8','rvHqxq','u0fgrsa','rMLfAwG','BsbYAwC','y2XLyxi','ieaG','ihn5C3q','nxWZFdq','DdOGnZa','oIbYz2i','idi0iIa','zxnJ','ic5ZAY0','Bg9Hzhm','B3vUzgu','tgLZDa','DwPNDgi','vfzdCNK','y3vYC28','C2STCMe','idaGnha','A2rYB3a','A05VC1e','s1Lzv1a','Bxfmq1K','vKrxEeW','DtmY','B1HzBwm','mtu3lc4','u2L6zq','ihn0AwW','r3j6yva','AY1IDg4','ndyZmJq4rhnbB3Hq','Awr0Aa','nMi5zci','zxiTzxy','ywrKrxy','Bw9fEha','Dc1ZAxO','BNnWyxi','C3rYAw4','ywXSig8','AguGzNi','oJa7EI0','BwvsDw4','AY1Jyxi','nxmGy3u','Bhb4twm','A3nqB3m','BgLUzvC','t3zLCNC','mtSGyMe','AwvSza','EYbKAxm','AhvTyIa','mtrWEdS','ignLBNq','z24TAxq','sfrnta','icaGica','CM0GlJq','CIGTlxa','C2STC2W','C2HVD24','zwjRAxq','A2v5C3q','B2XVCJO','zcb7igi','Acb7iha','mJm4ldi','C2v0uhi','w3nHA3u','BwrLC2m','BMu7ihm','i2zMzG','lYbhCMe','lxnHBNm','CIiSici','yxjHBMm','r3jHDMK','igjVEc0','yxrSEsa','B3nLihm','y3jLyxq','iokaLcb0zq','DgG6ida','oYbHBgK','icaUC2S','DhK6ic4','AwX0zxi','rwfwt3a','zK1zvfu','ndSGBwe','phn2zYa','D2L0Aca','CMvHza','DgLKzvC','su5uyK4','uMf0zq','svvlAwy','zxrL','ChGPoYa','icaG','lwfWCgu','lcbJywW','icnMzMy','B2X1Dgu','suzcweu','EdSGAgu','C3bHBG','zvfzDwu','B246ig8','CgfKzgK','CgfYzw4','nIa2Bde','AguGDxm','AgvPz2G','BKrHCNm','yxa6idG','j3qGC3q','B24Oks4','swndvKi','mZuYmJu1AeDMwgvZ','idGWChG','wfDWzg0','C25Ruwy','lxj1BM4','igrLzMe','v29TyuG','C2L6ztO','zguSihq','Ahbkv3e','Dgv4Dei','te1c','B3i6iha','EKzTELG','DuzevLO','kdeWmhy','lc4WnIK','q3vZDg8','uMvJDa','BgfZDeu','ihDPzhq','lwHVCa','ANfsDxi','AxrLiee','tgvNAw8','BI1JBg8','mcaXChG','s2v5C3q','D3jPDgu','CNr1Cca','lwLVxYO','igzVDxi','A3f6CMG','AwXLzdO','B3i6icm','mJSGC3q','A1nYuxe','CMqTDgK','CZOGyxu','BNqTC2K','igrPC3a','zwvMmJS','BM9Uzq','yxrLlwm','B3n0zMK','lxrPDgW','BhvYkdi','ywLYlG','ihSGywW','Bez6zge','icmYmJe','m3WWFdu','CMLUz3m','mcWUntu','zxiTCMe','zNrLCIa','s1DSsu8','AwDUlxm','B25JAge','DhLSzq','zMLSBfm','rxb3v2K','DMLZAwi','teX1thG','BM9tChi','thbzy08','zhjVCc0','zxG7ige','rxHW','y2TNCM8','BMrzt3C','sKDfCK4','yJPOB3y','BgrNDwy','CMvU','wfjjrLG','BwLKzgW','CMfUy2u','Fdz8mxW','ig1VBwu','v01ligK','Duz5sxm','BwLU','mtb8na','BMvHCI0','yxvSDa','BhvLCY4','BgLUzvq','u2nHBgu','DgLKzs4','oIbKCM8','zw51ihi','oIaJzJy','BIbZAwC','B3b0Aw8','vvDnsW','qw1VBhC','rNntAhC','zMXuC1e','ztOGmtm','EYbMAwW','nxW3Fdm','BuTSBLa','yMeOmJu','iM5VBMu','Bg9NBY0','yMf4D28','mhWY','ue5VBwS','ihSGAgu','EYbIB3G','nsK7igi','B2r5','A2DYB3u','y2HPBgq','ysGYndy','C2XPy2u','CxvLCNK','CgXHEtO','yNfLy28','CI51As4','y3nZvgu','igfSAwC','vvDnsYa','zvbPEgu','BgvUz3q','igfUzca','q3jVC3m','qMrTELi','EwLgvKu','yxK6igy','AwrHDgu','z29JEeC','q29TyMe','zwLUC3q','AffZD3y','BgXIyxi','DMG7EI0','B0rmB2O','ugn0','igjHBM4','wMvYB2u','AxPLoIa','thznuhO','Bgu7igy','oIaXoYa','sLrJrvm','C2vSzwe','qMP2q2u','qwXQrwW','lsbVDMu','BhKGkhi','u0fgrq','ntaLktS','ig9U','C2fRDxi','CMeTA28','mJqWiey','Bw92zvq','C2Xusuu','icaGlNm','v0ftrca','CZOGmty','oIb0CMe','zgvYlxq','ihjLBg8','tgvMDca','sw5PDgK','CJOGCg8','Dg9Nz2W','igjHy2S','AsXZyw4','D29WBuS','ihrOAxm','CIdIGjqG','DhKGmc4','BM8Gy2G','ida7igm','oIa4ChG','ihSGzM8','zLPtCwG','Dgv4Dc0','A2nsz3G','zgvZyW','DgnOoJO','zsb2ywW','CMzSB3C','BhPZqLm','CI1Yywq','C3rLCa','nxb4oYa','oIa2nta','ktSkica','s3rXBvy','Cg9W','zxrLy3q','t2LSsxm','lc40nsK','mNb4ksa','CMvHzhK','yxa6ide','oIbMBgu','yuLJvLe','yxrPB24','Dhj1zq','v1nuqNe','re9nq28','D0jSDxi','lJjZoYa','AgfZ','oYb3Awq','B246igW','CMnNC0S','CMvMAxG','ig1PBM0','BuDND2G','oYbIB3G','Bhv0ztS','DgHYB3C','ifvjiIW','CI52mq','zxjSyxK','ieDLDfy','y3jLBwu','ywnPDhK','t0HLywW','id0GzMW','DvDUtM0','vwn2r08','zxmGEYa','Eg5RsuS','BMnL','uMvZzxq','ysGYntu','zsbJEd0','icaGic4','idiWmg0','oJiXndC','quvXvuS','BgvZiem','CZOGy2u','B3jKzxi','CMvUDem','oIbZDge','t29fCNu','EdTVCge','ENvfwwG','BIb7igy','BLHfwwS','AM9PBJ0','ihSGy28','zYb7igm','ihWGC2G','uxjiA1m','oYbWywq','ywWGBwu','y2vZlG','Axr5oIa','Du9lqvC','rLLyv1O','mhG2mda','DMu7ihC','y3DPBxu','ktSGFqO','yNrUoMG','lIbvC2u','CMDIysG','mcbOB28','z2fWoIa','zMXLEdO','tK5hsMe','wKjTA00','zenOAwW','y2fWtw8','DgG6idG','zMLSzw4','mJqYlc4','BYbWAwC','rNHVAhi','nhb4oYa','jsbUBY0','ihSGzMW','igXLzNq','y2vUDgu','DhmGCgW','Bw4TC2K','DgvTCZO','Ag9VA3m','yM5WrK8','Bw4TDge','ifTfwfa','mtu5nJGWodr1wwj6v1a','DMLLD0i','Cg9PBNq','D2HLCMu','Bxm6igm','BM9UztS','zgzquLm','lwL0zw0','DgvTCgW','zw50tgK','nYWUmsK','iJeYiIa','BerPzsK','yxr6wMK','oIaXnha','uNvUDgK','qMjkqNe','EMu6ide','tvLMu2e','z2v0rwW','C2HHzg8','B1jLy28','B2XPBMu','Bw4TAca','u3nNt1q','y0TRrfO','BwvKicG','tu9ersa','z1PhB1a','ndiSlJG','Ag9VA0m','i2zMyJm','ig5VBMu','mtbWEdS','Dxnbv0u','zsWGDhi','yxjPys0','BhrLCJO','tMfTzq','wM5frM0','x19tquS','BgHjtM0','zg9JDw0','lZ48l3m','D2LKDgG','yxjJ','ENPhwxm','qLnht1q','tM8Gu3a','lc4WocK','ys1JAgu','BI1SB2C','CNnVCJO','BgLUzwm','vLP4DLK','C2v0qxq','Bw4TAa','u3bHy2u','zc5VBIa','oIa5oxa','DhjPA2u','te5LCei','s0fOEMi','uKnesxa','ihnOB3q','mtjWEdS','AwnRihm','CZPUB24','zuvSzw0','DePuzw4','z3jHzgK','zwv6zsa','B0vqAK0','q1frte8','u2vSzwm','Awy7ih0','nhWYFdu','q0PfA1i','AY1OAw4','BxKGC2u','Bg9YihS','u3rHDhu','ihjNyMe','CMLZAYa','ywz0zxi','ihSGCge','Bg9HzgK','mc41','Dgv4Dem','uufjrxi','vuPlDvu','zw4GDg8','C2jQuMG','BsbSzwy','B2fKzwq','A291CNm','B2X1Bw4','qKLQwvO','ide2ChG','BgLUzw4','ideWChG','nsWUmdm','B2LSicG','s2v5qq','C3rYB24','mJu1ldi','C2vSzwm','ig5VigG','Eff1Dw8','DhvYyxq','oYbYAwC','BNqGAxq','oYbOzwK','yMfYlxq','zcbZzwu','BLbSyxq','ohb4ksK','nJq2o2m','BNnPDgK','BMqGBwe','Aw1Lihm','Aw4GC2e','yNjPz2G','AxrSzsa','zw50rwW','idmYChG','igLZigm','De5Vzgu','ywX0Ac4','Agf0igq','BY1ZDMC','C2fMzq','DMvYihS','AwXKigG','tNrsB3q','BNrLCI0','Dw1UoYa','swDgENe','AwXnB3q','u0jMy3a','AgfPCG','zM9YBxm','oIbWB2K','oc00lJu','zMyP','z2DSzwq','ChG7cIa','zgvYlxi','ihSGD2K','zhrOoJe','zgL2','swyGCMu','CgfYC2u','t1nOB28','u2TPChm','zxzLBNq','yxbWBgK','igDHCdO','mJu1lde','C2HVB3q','C2v0sxq','Aw5Uzxi','igrHBwe','zIXZExm','AwDODdO','yMX1CG','B2L5D3u','Cfv0tMu','DvHysfO','lcbZyw4','zw1LBNq','y3rPB24','yw5ZzM8','oYbQDxm','zsbTAxm','yMTPDc0','BhmGDgG','B3zLCMy','Dxm6idy','ywrIBg8','BhrOige','lc43nsK','ruHbAfG','nsWYntu','DhjVA2u','CeTRuhO','oNbVAw4','zNvSBhm','zvL4vNe','z3z2sMK','B24UvgK','Aw5NicS','CMvSB2e','tezTChO','zg93BIa','zg93oIa','oYbVCge','idaGmJq','C3bLzwq','yM90Dg8','yuLrqwW','DgG6idi','BgvMDa','icaGig8','CIGYmNa','ig9Wywm','EdSGywW','BYb0Agu','oI13zwi','s2LTDKm','nIaXoci','D1nKB0i','mJzWEdS','B25SEsW','vuThyuC','z3fkwKm','B25TB3u','A2L0lxm','B3vUDc4','AxrLBxm','ndGZnJq','ksaXmda','CNjVCG','Aw1Llca','EKHdv2e','idnWEdS','B3jiqLu','EsaUmZu','zdSGy28','l3jHCgK','odaSmtK','oWOGica','CJSGzM8','BML0igy','z2LMEq','rvLeuNO','lxnPEMu','mJu1lc4','l1jnqIa','B3C6ida','mhWYFdm','nc00lJu','zw1ZoIa','y29TyMe','CYbHBgW','zMLSBfq','Aw4TD2K','cIaGica','mhGYnta','qM90Dg8','tw92zw0','wujtrxK','zKHnCu0','Bwf4','nJTWB2K','CgXPy2e','zJmY','BI1PDgu','CY1Zzxi','EdSGyM8','BuvHDK0','yM9KEq','B3i6ihi','z2v0qxq','CxjVA3O','ru9gvNC','Fdf8mNW','Dxm6ide','Bw4Ty2W','igTVDxi','AwXS','ihbVC2K','zw50kcm','EYaTD2u','CYbpsgu','ntuSlJa','EYbSzwy','z1bzq3u','sfjJzwW','Ag5KteG','CYbpDMu','yw1L','mta0vLD2zxbk','CMuGkfm','zMXLEc0','BwvZC2e','Bw92zq','z29K','B3G9iJa','yuTVDxi','r2z5A0O','sw5ZDge','ywnRz3i','ndySmJm','vw5PDhK','ihLVDxi','uKLNuLm','vwDjAxe','tKPgs2O','uK1c','y29Kzq','Dxm6idi','D2LqEKi','sxnhCM8','zxG6mJe','CLnXDg0','ANPgu3m','ywDLigq','AwX5oIa','zwfK','BK5Qvuy','uurxBKu','psjYB3u','C2v0x3q','ns00idC','Awr0AdO','rM9Yy2u','ugf0Aa','CgfJAxq','ihWGz2e','BI13Awq','DxjH','mJqSmtC','CMfKAxu','BMDL','wK1Kvxy','v2LKDgG','Cg9ZC3K','vg90ywW','ohG5mc0','ig5LDMu','khjLBg8','Avjruxy','D0HVrwy','Ag9VA1a','twLZyW','A3nty2e','zgvYoIa','EK5HA2e','ihWGBw8','Aw9UoMy','ChbLBNm','BfjHDgK','DdOGmZq','ig1HEsa','v3LUww8','quD5Afe','B3uU','z3v1BNK','phnTywW','C2v0','DgLVBI4','AY1ZD2K','y3jLzw4','u3DAB0K','zxiGEYa','rgLL','A2vizwe','suLTELy','y2HLy2S','lM1Ulxa','iNrYDwu','qNvUBNK','A3ndChm','uenwEg0','ihrVCdO','CM9Wlwy','BYb7igq','yM9Yzgu','zsbZzxi','uej5zuC','t0LsAMS','Aw5Mqw0','DxDTAW','C3DPDgm','thz2wha','Ag9VA04','DgHOseW','t3Lurfq','igDHDgu','FdL8mNW','Bgf5oIa','Bgf5ig8','ig9YigS','zJzIowq','Aw5JBhu','C2v0ida','ru9grw4','Aw5Zzxq','igH1CNq','s2Pcv0q','D29YAYa','y0Tezgq','lMLVig0','DgvTlxu','sgfequ0','ihDLyxa','EvLoDxu','tuLtu0K','zJDHotm','CM91BMq','yMfJA2q','B250lxC','rgfUz2u','Bw1VifS','DgvYoYa','icaGkIa','uhzgyLG','zgLZCgW','DxjDigG','z2uUiei','u2vNB2u','A3mGyxi','ywrPDxm','C2vYDMu','AxrJAa','zxjYB3i','Bw8GDg8','A3bgrgy','ihSGB3a','ywXSzwq','BI1JB2W','AwDUyxq','s0PpwKm','ihrOzsa','nsWUmdu','s2v5ra','B25PBNa','ntuSmJu','lxK6ige','Bw92zw0','ChG7igG','nwmWidm','DgLMEs0','uJOG','yxDKzuK','q015zKW','Dc1ZBgK','Ahq7igm','ic8GDMe','zMLSBa','ntKYnKXps2n3tq','B3vUzdO','zw50','i2zMnMi','zuv4Ca','igzSzxG','CMqTAgu','igfIC28','oIaXms4','idrWEdS','DeHcA1G','B29Rihi','i2zMzJS','Ahf2qK4','vMjxBxK','ndSGFqO','ihbSywm','Bg9Hzgu','psjTBI0','icnMzJy','rermsxa','zwDjt3i','idaGmca','ihrVide','C2STC3C','yMLJlwi','DxjZB3i','ihbHzgq','mxb4ida','vvjbx0S','ztSGD2K','mdCSmtu','u0flvvi','y2HtAxO','DMfS','y2f0','idrWEca','ign1CNm','lKXVy2e','uwLAA2y','CMvZDg8','B2reAwu','B2TLpsi','n2jtu05yDq','s0zbvNK','zgvZ','zwn0oIa','CM9Rzxm','ie9olG','Aw9U','s2LSBgu','yY0XlJu','AwrLCJO','Bw91C2u','zwzoCKi','yMfJA2C','qMXVy2S','oIa1mcu','zw15igm','B1Pozfq','CJOGDgG','Dgv4Dee','jsK7ic0','tM8GuMu','zM9UDc0','ChG7igi','lxrVCca','zxi6ida','sgnRqMy','BKvVEeK','zIbTyxq','AMvnvfC','yNnkuee','iIbZDhi','DhjHBNm','ic5TBI0','zxi6igi','icaUBw4','wKnMu2S','rw5NAw4','lwnVBhm','kYbmtui','nda4ndaWmKj3v0TPta','C2f2zq','DNCGlsa','zZOGnNa','y0PnsfO','DKfhDMW','zxG6ide','ChG7ih0','Ad0ImIi','ChGGDwK','iKLUDgu','idfWEca','AMPiv2e','DhKGDMe','y2L0EtO','C3rLBMu','idqTnc4','BMq6ihq','C2zVCM0','A291CI0','DgG6idK','B250zw4','AwDUlwK','mtySmc4','q291BNq','B25LigK','AKLttuO','oIa0ChG','DgfNtMe','DZOGAw4','CMfPC2u','Dg87ih0','B290zxi','BguGC3q','zwfKige','B3vUzca','lxbHCMu','CMfUC3a','yxb0Dxi','BNrLCJS','ue1bug0','icaGzgK','zYbJyw4','zMy2yJK','zw50zxi','ExfYC1e','zhbY','C3rVCfa','qvHAEwy','ocWYndi','nJiWChG','zZOGmta','zhrOoIa','BwuG','qwrIBg8','DuLkwfa','ohb4oYa','ifvxtuS','BNnSyxq','Bg9YoIa','D2fPDgK','igzPBgW','t0HNuxK','B2nRoYa','lwv2zw4','CK1Xyxm','Dg5LC3m','B3vUDgu','yxmGBM8','AxnWBge','BMqGt0G','BePlv3e','nNb4ida','EdSGB3u','DMfSDwu','yNv0Dg8','lw5VDgu','Awq7iha','Aw5NoIa','CMfWAwq','CMrLCI0','zdOGi2y','oIbJDxi','C21HBgW','ELnMsKi','ltqTnY4','y2SP','igv4Axq','uMfWAwq','BtOGnNa','ANvTCfa','z24Ty28','B2rLu3q','Bwf0y2G'];_0x32f8=function(){return _0x306b0d;};return _0x32f8();}function _0x3f74(_0x4e130c,_0x342acd){_0x4e130c=_0x4e130c-(0xd*-0x10b+-0x1d31*-0x1+-0x1*0xee6);var _0x1edd08=_0x32f8();var _0x378cb2=_0x1edd08[_0x4e130c];if(_0x3f74['kFmmJV']===undefined){var _0x43ce6b=function(_0xf7318f){var _0x5a1613='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x35c965='',_0x1d7896='';for(var _0x4a5621=0x1*-0x5f1+0x26*-0x53+0x1243,_0x4c8bb2,_0x5f27ec,_0x4c3d04=-0x1*-0x175c+-0xd90+-0x9cc;_0x5f27ec=_0xf7318f['charAt'](_0x4c3d04++);~_0x5f27ec&&(_0x4c8bb2=_0x4a5621%(0x12a9+0x66*0x37+-0x288f*0x1)?_0x4c8bb2*(-0x25cd+0x337*0x4+0x1931)+_0x5f27ec:_0x5f27ec,_0x4a5621++%(-0x66f+-0x1*0x31+-0xaa*-0xa))?_0x35c965+=String['fromCharCode'](0x1cb*0x15+0xc*-0x1f0+-0x1ad*0x8&_0x4c8bb2>>(-(0x29*0xf1+0x4*0x1ae+0x2d4f*-0x1)*_0x4a5621&-0x143*0xd+-0x3*0xca4+-0x1*-0x3659)):0x1cd3+0x1e96+-0x3b69){_0x5f27ec=_0x5a1613['indexOf'](_0x5f27ec);}for(var _0x42ad44=0x162a+0x1821+-0x2e4b,_0x4f21b6=_0x35c965['length'];_0x42ad44<_0x4f21b6;_0x42ad44++){_0x1d7896+='%'+('00'+_0x35c965['charCodeAt'](_0x42ad44)['toString'](-0x11de+-0x3d2+-0x15c*-0x10))['slice'](-(-0x1018+-0x1c5*-0x11+-0xdfb));}return decodeURIComponent(_0x1d7896);};_0x3f74['DyGsKz']=_0x43ce6b,_0x3f74['hJVOAj']={},_0x3f74['kFmmJV']=!![];}var _0x17810d=_0x1edd08[-0x217+-0x151b+0x1732],_0x1a4385=_0x4e130c+_0x17810d,_0x9a0297=_0x3f74['hJVOAj'][_0x1a4385];return!_0x9a0297?(_0x378cb2=_0x3f74['DyGsKz'](_0x378cb2),_0x3f74['hJVOAj'][_0x1a4385]=_0x378cb2):_0x378cb2=_0x9a0297,_0x378cb2;}(function(_0x15749a,_0x417088){var _0x5248b5=_0x3f74,_0x427ddc=_0x15749a();while(!![]){try{var _0x56e202=parseInt(_0x5248b5(0x1af))/(-0x38d*-0x1+0xca9+0x1*-0x1035)+parseInt(_0x5248b5(0x513))/(0xc87+0x10b1*-0x2+-0x1*-0x14dd)*(-parseInt(_0x5248b5(0x17d))/(-0x17b6+0x104c+0x76d))+-parseInt(_0x5248b5(0x5cf))/(-0x52e+-0x4*0x808+-0x232*-0x11)*(parseInt(_0x5248b5(0x237))/(-0x1ead*-0x1+0x225a+-0x13a*0x35))+parseInt(_0x5248b5(0x565))/(-0x2d3+-0x798+0x21*0x51)*(parseInt(_0x5248b5(0x53e))/(-0x1*0x25de+0x2*0x865+0x151b))+parseInt(_0x5248b5(0x474))/(-0xe9d+0xf8e+-0xe9*0x1)*(-parseInt(_0x5248b5(0x1dd))/(0x5*-0x2bb+0x888*0x4+0x3*-0x6d0))+-parseInt(_0x5248b5(0x1a5))/(-0xbd4*0x1+0x14*-0x2f+0xf8a)+parseInt(_0x5248b5(0x35a))/(-0x2*0xc89+-0x2de+0x1bfb);if(_0x56e202===_0x417088)break;else _0x427ddc['push'](_0x427ddc['shift']());}catch(_0x536b18){_0x427ddc['push'](_0x427ddc['shift']());}}}(_0x32f8,0x79fff+-0x3c2e0+-0x1*-0x15811),((()=>{'use strict';var _0x1f4d7f=_0x3f74,_0x5a7a38={'ujgtb':function(_0x5c0e8b){return _0x5c0e8b();},'QxEbg':'true','wiPzB':function(_0x3756ab,_0x2a0238){return _0x3756ab(_0x2a0238);},'PByeG':function(_0x4a8a51,_0x3370d6){return _0x4a8a51(_0x3370d6);},'NJFKj':function(_0x1cb35a,_0x1b9eba){return _0x1cb35a===_0x1b9eba;},'qorpz':_0x1f4d7f(0x59c),'TLTlS':_0x1f4d7f(0x2d2)+_0x1f4d7f(0x5cb)+'r.v1','iEKSB':'Adblo'+'ck','MYfSa':'xeszk','kNosQ':function(_0x3ef62a,_0x4e1290){return _0x3ef62a+_0x4e1290;},'DDLIp':function(_0xe243c8){return _0xe243c8();},'LbmdF':function(_0x47f452,_0x268fc8){return _0x47f452>_0x268fc8;},'XWpdm':function(_0x4c7459,_0x1a190e){return _0x4c7459/_0x1a190e;},'zuEYh':function(_0x286bad,_0x3dcb1b){return _0x286bad*_0x3dcb1b;},'TVCry':function(_0x4f7deb,_0x1d146c){return _0x4f7deb-_0x1d146c;},'YigVd':function(_0x206219,_0x46a9e6){return _0x206219+_0x46a9e6;},'EHAhX':function(_0x2a7021,_0x52068e){return _0x2a7021-_0x52068e;},'snkQf':function(_0x25851e,_0x5a9b4b){return _0x25851e+_0x5a9b4b;},'wpTaD':_0x1f4d7f(0x33a),'ZUGRh':'UYhHF','iRQQv':'rgba('+'255,2'+_0x1f4d7f(0x15e)+_0x1f4d7f(0x1a6)+'5)','FsShw':_0x1f4d7f(0x5a3),'RIgRS':function(_0x4493fc,_0x8354ed){return _0x4493fc!==_0x8354ed;},'flTsQ':function(_0x4cbff1,_0x26b24b){return _0x4cbff1===_0x26b24b;},'uOKAW':function(_0xf53b53,_0xde7338,_0x2f69a1,_0x39e8df){return _0xf53b53(_0xde7338,_0x2f69a1,_0x39e8df);},'TvSWV':function(_0x5d27f2,_0x1ef986){return _0x5d27f2(_0x1ef986);},'iDyoO':function(_0x34e27f,_0x3fba3e){return _0x34e27f!==_0x3fba3e;},'rMqas':'shoot'+_0x1f4d7f(0x640),'aIQAl':function(_0x4bdcfb,_0xfd0ebf,_0x44bb67,_0x3494d4,_0x2822bd){return _0x4bdcfb(_0xfd0ebf,_0x44bb67,_0x3494d4,_0x2822bd);},'BSGOT':function(_0x524e94,_0xbfc5bd){return _0x524e94<_0xbfc5bd;},'hqvBN':function(_0x488a78,_0x3ef735){return _0x488a78===_0x3ef735;},'ffVPq':_0x1f4d7f(0x4d4),'XwiKq':'f32','CLqst':function(_0x5c2849,_0x22d9e8,_0xc8ef94,_0x22134d,_0x53ff1f){return _0x5c2849(_0x22d9e8,_0xc8ef94,_0x22134d,_0x53ff1f);},'mGgwh':function(_0xcd38af,_0x40ee64,_0x4a8bf4,_0x167d77,_0x53b25d){return _0xcd38af(_0x40ee64,_0x4a8bf4,_0x167d77,_0x53b25d);},'LRZaw':function(_0x5285d9,_0xa02703,_0x519f62,_0x2c7185,_0x2887ca){return _0x5285d9(_0xa02703,_0x519f62,_0x2c7185,_0x2887ca);},'HlVJP':function(_0x16155c,_0x3792c8){return _0x16155c===_0x3792c8;},'pXEnh':'sAnno','WFboP':_0x1f4d7f(0x635),'rBUrS':function(_0x4878e9,_0x543575){return _0x4878e9===_0x543575;},'OrPau':'zwoTn','IImzV':_0x1f4d7f(0x548),'oXYmc':function(_0x232d3b,_0x38b199){return _0x232d3b+_0x38b199;},'hdivD':_0x1f4d7f(0x1c3)+_0x1f4d7f(0x285)+_0x1f4d7f(0x2a2),'NaCqj':_0x1f4d7f(0x548)+'up','gTrxU':_0x1f4d7f(0x548)+_0x1f4d7f(0xe8),'AEqUK':'keyup','lpxMc':function(_0x21b780,_0x1499e0){return _0x21b780!==_0x1499e0;},'vBhFx':_0x1f4d7f(0x360),'VbHyg':function(_0x2a35a3,_0x53f63f){return _0x2a35a3===_0x53f63f;},'yYGKV':_0x1f4d7f(0x578)+'io_30'+_0x1f4d7f(0x452)+_0x1f4d7f(0x589)+'nt','UJKuU':_0x1f4d7f(0x578)+'io_72'+_0x1f4d7f(0x4a3)+_0x1f4d7f(0x22e)+'t','wHoEf':'kour-'+_0x1f4d7f(0x616)+_0x1f4d7f(0x33b)+_0x1f4d7f(0x589)+'nt','XFrDr':function(_0x436a79,_0x50806e){return _0x436a79===_0x50806e;},'QiZkf':_0x1f4d7f(0x261),'PbTrc':function(_0x3642ef,_0x112bbc){return _0x3642ef===_0x112bbc;},'dGiYQ':'kpFDf','aIcVQ':function(_0x5f1ec8,_0x34728c){return _0x5f1ec8/_0x34728c;},'gIqij':function(_0x4c8926,_0x240b9f){return _0x4c8926===_0x240b9f;},'HJodN':_0x1f4d7f(0x415)+_0x1f4d7f(0x4bb)+'-banr'+'s','efNrB':function(_0xaa56b8,_0x148143){return _0xaa56b8===_0x148143;},'LpYcO':function(_0x56dea9,_0x510b49){return _0x56dea9(_0x510b49);},'gZGoP':_0x1f4d7f(0x5b0)+'n','kTVgu':_0x1f4d7f(0x52b)+'itch','JGErN':_0x1f4d7f(0x4d0)+'h','wbahn':_0x1f4d7f(0x37e)+_0x1f4d7f(0x4c1)+'ed','kpJob':'4|5|3'+_0x1f4d7f(0x464)+'0','ryUll':_0x1f4d7f(0x65e),'kcRgx':_0x1f4d7f(0x4ac),'sMdSS':_0x1f4d7f(0x5ff)+'n','zSfJB':_0x1f4d7f(0x3f0),'lFzda':'sk-no'+'te','fLdaY':_0x1f4d7f(0x2d1),'ODtCd':'sk-ca'+_0x1f4d7f(0x519)+'ad','ZBmkM':function(_0x473e26,_0x238b87,_0x13fb0e){return _0x473e26(_0x238b87,_0x13fb0e);},'IcCVB':'sk-md'+_0x1f4d7f(0x1c7),'ibvdb':_0x1f4d7f(0x282),'TvTyj':_0x1f4d7f(0x1bd)+'MODE\x20'+'—\x20ove'+'rlay\x20'+_0x1f4d7f(0x42f)+'\x20no\x20h'+_0x1f4d7f(0x63a)+_0x1f4d7f(0x4a5)+_0x1f4d7f(0x171)+_0x1f4d7f(0x5bc)+')','KjBWD':function(_0x34cdb4,_0x1d8bc0){return _0x34cdb4+_0x1d8bc0;},'OIRjk':'UWMK\x20'+_0x1f4d7f(0x64a)+'\x20','VpKon':function(_0x41efa9,_0x39a8e0){return _0x41efa9+_0x39a8e0;},'IgeMB':_0x1f4d7f(0x161)+'s','INTbN':_0x1f4d7f(0x342)+_0x1f4d7f(0x4f6)+'med\x20('+'all\x20o'+_0x1f4d7f(0x3ea),'TOZXV':'loadi'+'ng','uFDVZ':_0x1f4d7f(0x333)+_0x1f4d7f(0x585)+'\x20','yoEUd':_0x1f4d7f(0x4ad)+_0x1f4d7f(0x126)+'t\x20','RDyjV':_0x1f4d7f(0x194),'OJvEe':_0x1f4d7f(0x2b2)+_0x1f4d7f(0x4e8)+'NG\x20—\x20'+_0x1f4d7f(0x634)+'ay\x20on'+_0x1f4d7f(0x2ce)+_0x1f4d7f(0x2bd)+_0x1f4d7f(0x1b6)+_0x1f4d7f(0x230)+'erscr'+'ipt)','IUKif':function(_0x63becf,_0xf0fa0c){return _0x63becf+_0xf0fa0c;},'AXZyf':function(_0x17911d,_0x59a3c7,_0x3bd35f,_0x5c9042,_0x566335,_0x34e9fb){return _0x17911d(_0x59a3c7,_0x3bd35f,_0x5c9042,_0x566335,_0x34e9fb);},'nDars':_0x1f4d7f(0x3ab)+'s','hvcAn':'Apply','TaNyy':function(_0x46ce48,_0x548cfb){return _0x46ce48(_0x548cfb);},'rXnct':function(_0x135992){return _0x135992();},'cKkDZ':function(_0x4a7a5a,_0x17cd53,_0x26c3d8,_0x1d2806,_0x57d370,_0xa64a2c,_0x321af4){return _0x4a7a5a(_0x17cd53,_0x26c3d8,_0x1d2806,_0x57d370,_0xa64a2c,_0x321af4);},'sNvjW':_0x1f4d7f(0x131),'UcvGO':function(_0x2cf887,_0x292cab){return _0x2cf887*_0x292cab;},'kSrQq':function(_0x5a8732,_0x998712){return _0x5a8732+_0x998712;},'RUZmT':function(_0x245cf6,_0x1a5dbd){return _0x245cf6||_0x1a5dbd;},'yiFVE':_0x1f4d7f(0x533)+'A\x20KOU'+'R\x20v1.'+'1','RCDIp':'--p','daeGk':'sk-sl'+'ider','zwUiB':'sk-la'+'bel','YBSEy':_0x1f4d7f(0x5ee)+'e','cKDdd':_0x1f4d7f(0x367),'XRhaM':_0x1f4d7f(0x55a),'kLjPd':function(_0x1c2654){return _0x1c2654();},'BjvCe':'Zeroe'+_0x1f4d7f(0x613)+_0x1f4d7f(0x587)+_0x1f4d7f(0x3d1)+'xes\x20a'+'ccura'+'cy\x20on'+_0x1f4d7f(0x481)+_0x1f4d7f(0x4e6)+'on\x20ev'+'ery\x202'+'00ms.','rSqtm':'Damag'+'e\x20[EX'+'P]','HckBf':_0x1f4d7f(0x167)+_0x1f4d7f(0x40a)+'e\x20wea'+'pon\x27s'+_0x1f4d7f(0x12c)+_0x1f4d7f(0x64e)+_0x1f4d7f(0x4fb)+'\x20999\x20'+'every'+_0x1f4d7f(0x323)+'s.','vOzsh':_0x1f4d7f(0x28f)+_0x1f4d7f(0x44e)+_0x1f4d7f(0x256)+_0x1f4d7f(0x109)+'ment\x20'+_0x1f4d7f(0x420)+_0x1f4d7f(0x104)+_0x1f4d7f(0x353)+_0x1f4d7f(0xfd)+'celer'+'ation'+'.','gqJZC':'Jump\x20'+'%','tHBkX':_0x1f4d7f(0x252)+_0x1f4d7f(0x542),'mUMlV':function(_0x502910,_0x5753a1,_0x189f43,_0xdb72f5){return _0x502910(_0x5753a1,_0x189f43,_0xdb72f5);},'hndLH':function(_0x1fc0e7,_0x49386a,_0x33d833,_0x3784b1,_0x1684e3,_0x172871){return _0x1fc0e7(_0x49386a,_0x33d833,_0x3784b1,_0x1684e3,_0x172871);},'dPMhf':'Safe\x20'+'Mode\x20'+'(over'+_0x1f4d7f(0x4d8)+'nly)','xnkIK':'style','ldguf':_0x1f4d7f(0x1fc),'nXEYk':function(_0x9c4c3c,_0x210b25){return _0x9c4c3c(_0x210b25);},'nfLIF':'role','Nerlb':'.sk-m'+_0x1f4d7f(0x2ee),'UgWlq':_0x1f4d7f(0x499)+_0x1f4d7f(0x59a),'nsMFL':_0x1f4d7f(0x5df)+'nel','KAgTZ':_0x1f4d7f(0x354)+'de','bgyHQ':'<svg\x20'+_0x1f4d7f(0x35b)+_0x1f4d7f(0x47a)+_0x1f4d7f(0x41f)+_0x1f4d7f(0x1c6)+_0x1f4d7f(0x162)+_0x1f4d7f(0x525)+_0x1f4d7f(0x2a0)+'svg\x22>'+'<path'+_0x1f4d7f(0x5dc)+'12\x2021'+_0x1f4d7f(0x546)+'-2.5-'+_0x1f4d7f(0x44b)+'-4-7.'+'5\x200-2'+'.5\x201.'+_0x1f4d7f(0x3e9)+_0x1f4d7f(0x575)+_0x1f4d7f(0x1ae)+'\x204\x204.'+'5c0\x203'+_0x1f4d7f(0x619)+_0x1f4d7f(0x494)+'.5z\x22\x20'+_0x1f4d7f(0x647)+_0x1f4d7f(0x29f)+'\x22\x20str'+_0x1f4d7f(0x53d)+'#ff6b'+_0x1f4d7f(0x5de)+_0x1f4d7f(0x412)+_0x1f4d7f(0xbc)+'h=\x222\x22'+'\x20stro'+'ke-li'+'necap'+'=\x22rou'+_0x1f4d7f(0x651)+'troke'+'-line'+_0x1f4d7f(0x330)+_0x1f4d7f(0x10c)+_0x1f4d7f(0x644)+_0x1f4d7f(0x130)+_0x1f4d7f(0x321)+_0x1f4d7f(0x365)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+'6b9d\x22'+_0x1f4d7f(0x385)+_0x1f4d7f(0x153),'mhNfv':_0x1f4d7f(0xde)+'p','LMbEh':'Sakur'+_0x1f4d7f(0xcf)+'r','ndYOw':_0x1f4d7f(0x466)+_0x1f4d7f(0x670),'QAIEr':'Close','cQutM':_0x1f4d7f(0xe2),'ejVBc':_0x1f4d7f(0x4b7)+'l>','EkpKK':'mn-ta'+'b','hLiKg':function(_0x23d880,_0x1128f9,_0x15ef2d){return _0x23d880(_0x1128f9,_0x15ef2d);},'oBZwI':_0x1f4d7f(0x17a)+'t','QDWnE':_0x1f4d7f(0x42d),'HRcel':_0x1f4d7f(0x478),'EpwWi':'Move','EOFVw':'misc','dUzZX':'Safet'+'y','oZNdT':_0x1f4d7f(0xd0)+'wn','thhHL':'posit'+_0x1f4d7f(0x4ae)+_0x1f4d7f(0x663)+_0x1f4d7f(0x652)+_0x1f4d7f(0x5d8)+_0x1f4d7f(0x3fe)+_0x1f4d7f(0x39b)+'z-ind'+_0x1f4d7f(0x48a)+'47483'+_0x1f4d7f(0x3cf)+_0x1f4d7f(0x52d)+_0x1f4d7f(0x414)+'ter;w'+'idth:'+_0x1f4d7f(0x42e)+'heigh'+_0x1f4d7f(0x5c3)+_0x1f4d7f(0x32c)+'city:'+'0.5;t'+'ransi'+_0x1f4d7f(0x186)+'opaci'+_0x1f4d7f(0x2e6)+'2s;po'+_0x1f4d7f(0x141)+_0x1f4d7f(0x5a5)+_0x1f4d7f(0x610)+'to;fi'+_0x1f4d7f(0x37f)+_0x1f4d7f(0x279)+_0x1f4d7f(0x36e)+'w(0\x200'+_0x1f4d7f(0x537)+'rgba('+_0x1f4d7f(0x3f8)+'07,15'+'7,0.7'+'))','ZnEFm':'[saku'+_0x1f4d7f(0x2d3)+'ur]\x20m'+_0x1f4d7f(0x292)+'eady.'+'\x20UWMK'+':','rIzJF':_0x1f4d7f(0x188),'ADbuT':'eRAph','HpaHL':_0x1f4d7f(0x228),'cJMHZ':_0x1f4d7f(0x672)+_0x1f4d7f(0x47b),'FcSqo':_0x1f4d7f(0x479),'DOpYI':'Local'+_0x1f4d7f(0x4be),'qadZr':'i32','jqRur':function(_0x1c4e97,_0x37816e,_0x500222,_0x9677b7,_0x1d15e6,_0x44c73e,_0x5f40c2,_0x26a1ec){return _0x1c4e97(_0x37816e,_0x500222,_0x9677b7,_0x1d15e6,_0x44c73e,_0x5f40c2,_0x26a1ec);},'WynYo':'Tick','GfykJ':'SetGa'+_0x1f4d7f(0x1e9)+_0x1f4d7f(0xc4),'prWFM':_0x1f4d7f(0x489)+'unded','IXOZo':function(_0x2ddf0c,_0x4480bd,_0x4034f2){return _0x2ddf0c(_0x4480bd,_0x4034f2);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x1f4d7f(0x100)+_0x1f4d7f(0x473)]||''))return;if(window[_0x1f4d7f(0x382)+_0x1f4d7f(0x530)+_0x1f4d7f(0x5e5)])return;window[_0x1f4d7f(0x382)+_0x1f4d7f(0x530)+_0x1f4d7f(0x5e5)]=!![];var _0x49dba4='#ff6b'+'9d',_0x366bba=_0x1f4d7f(0x379)+'c6',_0x5e00a0={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x1e456d={..._0x5e00a0};try{if(_0x5a7a38[_0x1f4d7f(0x642)]!==_0x5a7a38[_0x1f4d7f(0x175)])Object[_0x1f4d7f(0x135)+'n'](_0x1e456d,JSON[_0x1f4d7f(0x3f2)](localStorage[_0x1f4d7f(0x5f1)+'em'](_0x5a7a38['TLTlS'])||'{}'));else{if(_0x168226['body']&&(_0x1c3d71[_0x1f4d7f(0x2fe)+_0x1f4d7f(0x64d)]===_0x1f4d7f(0x141)+'activ'+'e'||_0x2d1084['ready'+'State']==='compl'+_0x1f4d7f(0x221)))_0x5a7a38['ujgtb'](_0x6dd24b);else _0x3b4772[_0x1f4d7f(0x1e1)+'entLi'+_0x1f4d7f(0x574)+'r']('DOMCo'+_0x1f4d7f(0x11e)+'Loade'+'d',_0x2066db,{'once':!![]});}}catch(_0x44565c){}function _0x316386(){var _0x1854f9=_0x1f4d7f;try{if(_0x5a7a38['NJFKj'](_0x5a7a38['qorpz'],_0x5a7a38[_0x1854f9(0x639)]))localStorage['setIt'+'em'](_0x5a7a38[_0x1854f9(0x19b)],JSON['strin'+_0x1854f9(0x444)](_0x1e456d));else{_0x390cca[_0x1854f9(0x594)+_0x1854f9(0xf2)+_0x1854f9(0x302)]();var _0x119920=_0x31e98d[_0x1854f9(0x461)+_0x1854f9(0x155)+'te'](_0x1854f9(0x37e)+_0x1854f9(0x4c1)+'ed')!==_0x5a7a38[_0x1854f9(0x13e)];_0x4fd7b3[_0x1854f9(0x391)+_0x1854f9(0x155)+'te']('aria-'+'check'+'ed',_0x5a7a38[_0x1854f9(0x488)](_0x169513,_0x119920)),_0x5a7a38[_0x1854f9(0x4cc)](_0x2f3d70,_0x119920);}}catch(_0x32c26d){}}var _0x2ed664={'uwmk':!!window[_0x1f4d7f(0x480)+_0x1f4d7f(0x5eb)+_0x1f4d7f(0x129)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x1e456d[_0x1f4d7f(0x5f7)+_0x1f4d7f(0x137)],'lastError':''};try{_0x5a7a38['HpaHL']===_0x5a7a38['HpaHL']?window[_0x1f4d7f(0x1e1)+'entLi'+'stene'+'r']('error',_0x1d6e82=>{var _0xc07bea=_0x1f4d7f,_0x4e1553={'KFAVy':function(_0x139c2a,_0x51a0e8,_0x179abf,_0x2cdf26,_0x26d2ad,_0x318c79){return _0x139c2a(_0x51a0e8,_0x179abf,_0x2cdf26,_0x26d2ad,_0x318c79);},'ototu':_0x5a7a38['iEKSB'],'zHCWa':function(_0xaa6da7,_0x37b10f){return _0x5a7a38['wiPzB'](_0xaa6da7,_0x37b10f);}};if(_0x5a7a38[_0xc07bea(0x484)](_0x5a7a38['MYfSa'],_0x5a7a38[_0xc07bea(0x36c)]))try{if(_0x5a7a38[_0xc07bea(0x484)]('gnsZZ','gnsZZ')){var _0x5522af=_0x1d6e82&&(_0x1d6e82[_0xc07bea(0x477)+'ge']||_0x1d6e82['error']&&_0x1d6e82[_0xc07bea(0x4fa)]['messa'+'ge'])||_0xc07bea(0x18f)+'wn';if(_0x1d6e82&&_0x1d6e82['filen'+'ame'])_0x5522af+=_0x5a7a38[_0xc07bea(0x1d2)](_0x5a7a38[_0xc07bea(0x1d2)](_0xc07bea(0x1c1)+String(_0x1d6e82['filen'+_0xc07bea(0x473)])[_0xc07bea(0x158)]('/')['pop'](),':'),_0x1d6e82[_0xc07bea(0x3bd)+'o']||'?');_0x2ed664[_0xc07bea(0x24a)+_0xc07bea(0x438)]=String(_0x5522af)[_0xc07bea(0x2ab)](0x185c+0x175d+-0x2fb9,0xd64+-0x31f+0x9a5*-0x1);}else return[_0x4e1553[_0xc07bea(0x53f)](_0x5156be,_0x4e1553['ototu'],'Hides'+_0xc07bea(0x467)+_0xc07bea(0x255)+_0xc07bea(0x2c3)+'er\x20sl'+_0xc07bea(0x108),_0x45574b['adblo'+'ck'],_0x15f3e4=>{var _0x15cd9e=_0xc07bea;_0x42b3ac[_0x15cd9e(0x40d)+'ck']=_0x15f3e4,_0x190642();},[_0x4e1553[_0xc07bea(0x43a)](_0x3aa1b8,_0xc07bea(0x1b4)+'\x20effe'+'ct\x20on'+_0xc07bea(0x2dc)+'ad\x20wh'+_0xc07bea(0x3b5)+_0xc07bea(0x3eb)+'.')])];}catch(_0x3d1a9c){}else try{_0x2ec8fb[_0xc07bea(0xd9)+'ed']=![];}catch(_0x3623f4){}}):(_0x53e7d1['safeM'+'ode']=_0x3ceed1,_0x5a7a38['DDLIp'](_0x4f2c8d),_0x10211a['reloa'+'d']());}catch(_0x4b5600){}var _0x140505=null,_0x351996=null,_0x1583c9={},_0x4d763b=[],_0x155459=[],_0x4422c8=new Map();function _0x576aa2(_0x51ed00,_0x46198c){var _0x1b84fb=_0x1f4d7f;if(!_0x46198c||_0x51ed00[_0x1b84fb(0x4db)+_0x1b84fb(0x540)](_0x46198c)||_0x5a7a38[_0x1b84fb(0x1aa)](_0x51ed00['lengt'+'h'],-0x1b57+0x203d+-0x46*0x11))return;_0x51ed00[_0x1b84fb(0x617)](_0x46198c);}function _0x25bad5(_0x161bf9,_0x162242,_0x30d982,_0x5f1a3c){var _0x155e67=_0x1f4d7f,_0x58f47f=-0x1*-0x4cf+0x26*0xdd+0x259d*-0x1;try{_0x58f47f=_0x162242&&_0x162242['val']?_0x162242[_0x155e67(0x535)]():-0xb0*-0x2b+0x1*-0x214f+-0x7*-0x89;}catch(_0x3c482b){}if(!_0x58f47f)return;_0x576aa2(_0x161bf9,_0x58f47f),_0x30d982[_0x5f1a3c]=_0x161bf9[_0x155e67(0x2b4)+'h'];if(_0x5f1a3c==='movem'+_0x155e67(0x5d3)&&_0x161bf9['lengt'+'h']){var _0x20fc52=_0x1583c9[_0x155e67(0x348)+'ve'];if(_0x20fc52){if(_0x5a7a38[_0x155e67(0x484)](_0x5a7a38['wpTaD'],_0x5a7a38['ZUGRh'])){var _0x339012=_0x4a9245[_0x155e67(0x386)]/(0x1ac9+-0x1f2f+0x468),_0x5d822a=_0x5a7a38[_0x155e67(0x239)](_0x579213['heigh'+'t'],0x13f9+-0x1715*-0x1+-0x26*0x122),_0x19d5ec=_0x543b8a(_0x416655['chSiz'+'e'])||-0xc*0x100+-0x1ef5+0x2af6,_0x54fa4c=/^#[0-9a-f]{6}$/i[_0x155e67(0x13d)](_0x31defc[_0x155e67(0x5f6)+'or'])?_0x24f526[_0x155e67(0x5f6)+'or']:_0x155e67(0x516)+'9d';_0x392f9d[_0x155e67(0x566)](),_0x1c067d[_0x155e67(0x1ab)+_0x155e67(0x5cc)+'e']=_0x54fa4c,_0xf86618[_0x155e67(0x273)+_0x155e67(0x272)]=_0x54fa4c,_0x1d7fb7[_0x155e67(0x1ee)+_0x155e67(0x1de)]=_0x39db51['max'](0x14b6+-0x6*0x2c3+-0x423*0x1+0.5,(0x73*0x13+0x308*-0x4+0x399)*_0x19d5ec),_0xe22d18[_0x155e67(0x36e)+_0x155e67(0x11a)+'r']=_0x54fa4c,_0x3765fd[_0x155e67(0x36e)+'wBlur']=-0x228f+0x2f4+0x1fa1*0x1;var _0x2f4e9e=_0x5a7a38[_0x155e67(0x32d)](0x1*0x485+0x155*0x2+0xd*-0x8d,_0x19d5ec),_0x31e162=(0x1195+0xcf7+-0x364*0x9)*_0x19d5ec;_0x19ade8[_0x155e67(0x650)+_0x155e67(0x497)](),_0x29fcff['moveT'+'o'](_0x5a7a38['TVCry'](_0x339012,_0x2f4e9e)-_0x31e162,_0x5d822a),_0x1e4af1[_0x155e67(0x28e)+'o'](_0x339012-_0x2f4e9e,_0x5d822a),_0x3aa411[_0x155e67(0x2d5)+'o'](_0x5a7a38['kNosQ'](_0x339012,_0x2f4e9e),_0x5d822a),_0xc29f9e[_0x155e67(0x28e)+'o'](_0x5a7a38[_0x155e67(0x5f5)](_0x339012,_0x2f4e9e)+_0x31e162,_0x5d822a),_0x9b3e99[_0x155e67(0x2d5)+'o'](_0x339012,_0x5a7a38[_0x155e67(0x410)](_0x5a7a38[_0x155e67(0x410)](_0x5d822a,_0x2f4e9e),_0x31e162)),_0x31bc5c[_0x155e67(0x28e)+'o'](_0x339012,_0x5d822a-_0x2f4e9e),_0x32ea65[_0x155e67(0x2d5)+'o'](_0x339012,_0x5a7a38['snkQf'](_0x5d822a,_0x2f4e9e)),_0x5c8c5c[_0x155e67(0x28e)+'o'](_0x339012,_0x5d822a+_0x2f4e9e+_0x31e162),_0xe234d3['strok'+'e'](),_0x3d2c89[_0x155e67(0x650)+'Path'](),_0x10d322[_0x155e67(0x387)](_0x339012,_0x5d822a,(-0x2259+0x15d9+0x123*0xb+0.6000000000000001)*_0x19d5ec,0x30*-0x2+-0xdc0+0xe20,_0x4817cc['PI']*(0x24df+-0x1bd1+0x6*-0x182)),_0x413113[_0x155e67(0x512)](),_0x37972c[_0x155e67(0x53b)+'re']();}else try{'OdHNC'===_0x155e67(0x1a4)?_0x20fc52['enabl'+'ed']=![]:(_0x4780b8[_0x155e67(0x10b)+'od']=_0x3d64a9,_0xa911e5[_0x155e67(0x10b)+_0x155e67(0x53c)]=_0x2cbda3,_0x255714['hookN'+_0x155e67(0x36f)+'il']=_0x184387,_0x1cc345[_0x155e67(0x378)+_0x155e67(0x58b)+'e']=_0xfe28c3,_0x1b218f(),_0x41942f[_0x155e67(0x41a)+'d']());}catch(_0x23cc4e){}}}}function _0x38c27a(_0x3e5a1a,_0x1395b3,_0x29517a){var _0x11a656=_0x1f4d7f;if(_0x5a7a38['NJFKj'](_0x5a7a38[_0x11a656(0x298)],_0x11a656(0x5a3))){var _0x420e1b=_0x4422c8['get'](_0x3e5a1a);!_0x420e1b&&(_0x420e1b=new Map(),_0x4422c8[_0x11a656(0x4b8)](_0x3e5a1a,_0x420e1b));if(!_0x420e1b[_0x11a656(0x308)](_0x1395b3))try{var _0x4b0bfb=new _0x140505(_0x3e5a1a)['readF'+_0x11a656(0x1f1)](_0x1395b3,_0x29517a);_0x420e1b[_0x11a656(0x4b8)](_0x1395b3,_0x5a7a38['RIgRS'](_0x4b0bfb,undefined)?_0x4b0bfb[_0x11a656(0x535)]():null);}catch(_0x5bfb2){'zSoix'!==_0x11a656(0x244)?_0x420e1b[_0x11a656(0x4b8)](_0x1395b3,null):_0x3dd5e7['appen'+'dChil'+'d'](_0x386d75);}return _0x420e1b['get'](_0x1395b3);}else _0x17e425['fillS'+'tyle']=_0x29fe5e||_0x5a7a38[_0x11a656(0x4a6)],_0x3cb1a9['fillT'+'ext'](_0x585c19,_0x3e09b0,_0x5b72aa),_0x4a1bb7+=-0x11*-0x101+0x1*0x135d+-0x245e;}function _0x179ac2(_0x235a55,_0x2df33a,_0x5aca99,_0x4adb57){var _0x1b624c=_0x1f4d7f,_0x412020={'hSmpF':function(_0x166ae8,_0x1c26a2){var _0x11194b=_0x3f74;return _0x5a7a38[_0x11194b(0x482)](_0x166ae8,_0x1c26a2);}};try{if(_0x5a7a38[_0x1b624c(0x299)](_0x1b624c(0x120),_0x1b624c(0x383))){var _0x4cffb7=_0x27e82a[_0x1b624c(0x415)+'creen'+_0x1b624c(0x662)+'nt'],_0x5dbd14=_0x4cffb7&&_0x412020['hSmpF'](_0x4cffb7[_0x1b624c(0x581)+'me'],_0x1b624c(0xf0)+'S')?_0x4cffb7:_0x4c282c[_0x1b624c(0x45f)]||_0x2d77d1['docum'+'entEl'+'ement'];if(_0x3a530a['paren'+_0x1b624c(0x3d9)]!==_0x5dbd14)_0x5dbd14[_0x1b624c(0x168)+_0x1b624c(0x347)+'d'](_0x551deb);}else new _0x140505(_0x235a55)[_0x1b624c(0x253)+_0x1b624c(0x5d5)](_0x2df33a,_0x5aca99,_0x4adb57);}catch(_0x38d689){}}function _0x540b5d(_0x2d0cc9,_0x502f68){var _0x447112=_0x1f4d7f;try{var _0x1cd820=new _0x140505(_0x2d0cc9)['readF'+'ield'](_0x502f68,_0x447112(0x1d6));return _0x1cd820?_0x1cd820['val']():0x774+0x88f+-0x1003;}catch(_0x44f5d0){return-0x13d9+-0x43*-0xc+0x263*0x7;}}function _0x35655c(_0x3a9ca3,_0x4394b9,_0x3b8328,_0x303847){var _0x178741=_0x1f4d7f,_0x425b39=_0x5a7a38[_0x178741(0x339)](_0x38c27a,_0x3a9ca3,_0x4394b9,_0x3b8328);if(_0x425b39!=null)_0x179ac2(_0x3a9ca3,_0x4394b9,_0x3b8328,_0x425b39*_0x303847);}function _0x36fc6a(_0x518055,_0x529744,_0x435a53,_0x6acf4b,_0x59e1a9,_0x48551e,_0x5f1d71){var _0x48c17d=_0x1f4d7f;try{var _0x422646=_0x351996['hookP'+_0x48c17d(0x30c)]({'typeName':_0x529744,'methodName':_0x435a53,'params':_0x6acf4b,'returnType':_0x59e1a9},_0x48551e);return _0x422646['enabl'+'ed']=_0x5a7a38[_0x48c17d(0x152)](_0x5f1d71,![]),_0x1583c9[_0x518055]=_0x422646,_0x2ed664['hooks'+'Total']++,_0x422646;}catch(_0x44f523){if(_0x48c17d(0x345)!=='CoFRN')return console['warn']('[saku'+'ra-ko'+_0x48c17d(0x4f3)+'ook\x20r'+_0x48c17d(0x14c)+_0x48c17d(0x258),_0x518055,_0x44f523&&_0x44f523[_0x48c17d(0x477)+'ge']),null;else _0x5a7a38[_0x48c17d(0x527)](_0xd6ebe0),_0x5a7a38[_0x48c17d(0xd7)](_0x487581,_0x25058b(_0x457f07[_0x48c17d(0x5af)]));}}function _0xb776a3(_0x36a170,_0x2e1044,_0x41f03b,_0x579377,_0x12d19f,_0x111513,_0x4220f1){var _0x5b436b=_0x1f4d7f;try{if(_0x5b436b(0x23d)===_0x5b436b(0x23d)){var _0x4686bb=_0x351996[_0x5b436b(0x4a8)+_0x5b436b(0x263)+'x']({'typeName':_0x2e1044,'methodName':_0x41f03b,'params':_0x579377,'returnType':_0x12d19f},_0x111513);return _0x4686bb['enabl'+'ed']=_0x4220f1!==![],_0x1583c9[_0x36a170]=_0x4686bb,_0x2ed664[_0x5b436b(0x356)+_0x5b436b(0x4a2)]++,_0x4686bb;}else _0x1d67c4['assig'+'n'](_0x4c32c0,_0x1f222d[_0x5b436b(0x3f2)](_0x464961[_0x5b436b(0x5f1)+'em'](_0x5b436b(0x2d2)+_0x5b436b(0x5cb)+_0x5b436b(0x313))||'{}'));}catch(_0x18b86f){return console[_0x5b436b(0xbd)](_0x5b436b(0x204)+_0x5b436b(0x2d3)+_0x5b436b(0x4f3)+_0x5b436b(0x51e)+_0x5b436b(0x14c)+'iled:',_0x36a170,_0x18b86f&&_0x18b86f[_0x5b436b(0x477)+'ge']),null;}}var _0xa558fa=()=>![];try{if(window['Unity'+'WebMo'+_0x1f4d7f(0x129)]&&!_0x1e456d[_0x1f4d7f(0x5f7)+_0x1f4d7f(0x137)]){_0x140505=window[_0x1f4d7f(0x480)+'WebMo'+'dkit']['Value'+_0x1f4d7f(0x5e3)+'er'],_0x351996=window['Unity'+'WebMo'+_0x1f4d7f(0x129)][_0x1f4d7f(0x369)+'me'][_0x1f4d7f(0x210)+_0x1f4d7f(0x156)+'in']({'name':_0x5a7a38[_0x1f4d7f(0x569)],'version':'1.1.0','referencedAssemblies':['Assem'+'bly-C'+'Sharp'+'.dll']});if(_0x1e456d[_0x1f4d7f(0x10b)+'od'])_0x36fc6a(_0x5a7a38['FcSqo'],'OHeal'+'th',_0x1f4d7f(0x2de)+'ateTa'+'keHea'+'lth',[_0x1f4d7f(0x61f),_0x1f4d7f(0x61f)],undefined,_0xa558fa,!!_0x1e456d['god']);if(_0x1e456d[_0x1f4d7f(0x10b)+'odDie'])_0x36fc6a(_0x1f4d7f(0x5ee)+'e',_0x1f4d7f(0x318)+'th',_0x5a7a38[_0x1f4d7f(0x60b)],[_0x1f4d7f(0x61f),_0x5a7a38[_0x1f4d7f(0x62e)],_0x1f4d7f(0x61f),'i32',_0x5a7a38[_0x1f4d7f(0x62e)]],undefined,_0xa558fa,!!_0x1e456d[_0x1f4d7f(0x479)]);if(_0x1e456d[_0x1f4d7f(0x4d2)+_0x1f4d7f(0x36f)+'il'])_0x5a7a38[_0x1f4d7f(0x24d)](_0x36fc6a,'noRec'+_0x1f4d7f(0x1a8),_0x1f4d7f(0x24f)+_0x1f4d7f(0x3cd)+_0x1f4d7f(0x3e7)+'.Over'+_0x1f4d7f(0x290)+_0x1f4d7f(0x19d)+'lMoti'+'on',_0x5a7a38[_0x1f4d7f(0x4b3)],['i32'],undefined,_0xa558fa,!!_0x1e456d[_0x1f4d7f(0x5e8)+'oil']);if(_0x1e456d[_0x1f4d7f(0x378)+'aptur'+'e'])_0xb776a3(_0x1f4d7f(0x12d)+'ooter',_0x1f4d7f(0x3f3)+'ter',_0x5a7a38[_0x1f4d7f(0x47c)],[_0x5a7a38[_0x1f4d7f(0x62e)],_0x5a7a38['qadZr']],undefined,(_0x491b07,_0x221cd8)=>{var _0x3af30e=_0x1f4d7f;_0x25bad5(_0x155459,_0x221cd8,_0x2ed664,_0x5a7a38[_0x3af30e(0x5a6)]);},!![]);if(_0x1e456d['hookC'+'aptur'+'e'])_0x5a7a38[_0x1f4d7f(0x24d)](_0xb776a3,_0x1f4d7f(0x348)+'ve','Legio'+'nPlat'+_0x1f4d7f(0x3e7)+'.Over'+'tide.'+_0x1f4d7f(0x454)+_0x1f4d7f(0x515),_0x5a7a38['prWFM'],[_0x1f4d7f(0x61f)],_0x1f4d7f(0x61f),(_0x5a7c84,_0x425dab)=>{var _0x3af08d=_0x1f4d7f;_0x5a7a38[_0x3af08d(0x422)](_0x25bad5,_0x4d763b,_0x425dab,_0x2ed664,_0x3af08d(0x508)+_0x3af08d(0x5d3));},!![]);}}catch(_0x5c8d68){console[_0x1f4d7f(0xbd)]('[saku'+'ra-ko'+_0x1f4d7f(0x5ed)+_0x1f4d7f(0x287)+_0x1f4d7f(0x443)+'ailed'+':',_0x5c8d68&&_0x5c8d68['messa'+'ge']);}function _0x4ec127(_0x4f69e3,_0x47bd54){var _0x28c672=_0x1583c9[_0x4f69e3];if(_0x28c672)try{_0x28c672['enabl'+'ed']=!!_0x47bd54;}catch(_0x359926){}}setInterval(()=>{var _0xb43993=_0x1f4d7f;if(!_0x140505||!window[_0xb43993(0x678)+'Insta'+_0xb43993(0x31e)])return;var _0x59ffdb=_0x5a7a38[_0xb43993(0x239)](Number(_0x1e456d['speed'+'Pct'])||-0x194b+-0x31*0x1b+0x1eda,0x2*0x1d7+-0x53*-0x2+0x38*-0x12),_0x47a433=_0x5a7a38['XWpdm'](Number(_0x1e456d[_0xb43993(0x5bf)+'ct'])||-0x25d*-0x1+-0xe00+0xc07,-0x76e+-0x1d4d+0x251f),_0x2a7233=(Number(_0x1e456d[_0xb43993(0x159)+'tyPct'])||0x1f12*-0x1+0x123a+-0xf2*-0xe)/(-0x18*0x12e+-0x1f61+0x3c15),_0x57ad8e=Math[_0xb43993(0x457)](-0x2*0xdb4+0x1e83+-0x31a,Number(_0x1e456d['damag'+'eValu'+'e'])||0x371*-0x4+0x1215+-0x3bb),_0x33d59d=_0x59ffdb!==-0xd4a+-0x13e0+0x212b*0x1||_0x47a433!==-0x2326+0x2267+0xc0||_0x5a7a38[_0xb43993(0x152)](_0x2a7233,0x1afd+0x1e21+-0x1*0x391d)||_0x1e456d['bhop'],_0x14945e=_0x1e456d[_0xb43993(0x277)+_0xb43993(0x48f)]||_0x1e456d['damag'+'eExp']||_0x1e456d['infAm'+'moExp']||_0x1e456d[_0xb43993(0x5b4)+'Exp'];if(!_0x33d59d&&!_0x14945e)return;try{for(var _0x1e2549=0x372*0x7+0x442+-0x10*0x1c6;_0x5a7a38[_0xb43993(0x389)](_0x1e2549,_0x4d763b[_0xb43993(0x2b4)+'h']);_0x1e2549++){var _0x3b0497=_0x4d763b[_0x1e2549];if(!_0x3b0497)continue;if(_0x59ffdb!==-0x1*0x3be+-0xae2+0xea1){if(_0x5a7a38[_0xb43993(0x520)](_0xb43993(0x4d4),_0x5a7a38[_0xb43993(0xe5)])){var _0x4aa347=('5|1|0'+_0xb43993(0xc6)+'3')['split']('|'),_0x18f623=0xef2+0x1a33+-0x2925*0x1;while(!![]){switch(_0x4aa347[_0x18f623++]){case'0':_0x35655c(_0x3b0497,-0x1*-0xcb5+0xb19+-0xbcf*0x2,_0xb43993(0x45a),_0x59ffdb);continue;case'1':_0x35655c(_0x3b0497,-0x1e*-0x5+0xf4*-0x8+-0xd*-0x8e,_0xb43993(0x45a),_0x59ffdb);continue;case'2':_0x35655c(_0x3b0497,0x96c+0x19da+-0x2*0x1195,'f32',_0x59ffdb);continue;case'3':_0x35655c(_0x3b0497,-0x92b*-0x1+0x128*-0x1+-0x7e3,_0xb43993(0x45a),_0x59ffdb);continue;case'4':_0x35655c(_0x3b0497,0x954+0xdd4+0x5bd*-0x4,_0x5a7a38[_0xb43993(0x60d)],_0x59ffdb);continue;case'5':_0x35655c(_0x3b0497,-0x8e6*-0x2+0x1896+-0x2a3a,_0x5a7a38[_0xb43993(0x60d)],_0x59ffdb);continue;}break;}}else{var _0x2a9be4=_0x1cf51d[_0xb43993(0x4a8)+_0xb43993(0x263)+'x']({'typeName':_0x49521e,'methodName':_0x1f4650,'params':_0x3b690d,'returnType':_0x2c3c71},_0x1f2882);return _0x2a9be4[_0xb43993(0xd9)+'ed']=_0x467d3e!==![],_0x4e800d[_0x15da38]=_0x2a9be4,_0x16115f['hooks'+_0xb43993(0x4a2)]++,_0x2a9be4;}}if(_0x47a433!==-0x17c7+-0x165a+0x1*0x2e22)_0x5a7a38['CLqst'](_0x35655c,_0x3b0497,-0x1bf2+-0x1a1*-0x13+0x35*-0xd,_0xb43993(0x45a),_0x47a433);_0x2a7233!==-0x988+-0x18f1+0x227a&&(_0x35655c(_0x3b0497,-0xbb1*-0x2+0x17cb*0x1+-0x2ee5,'f32',_0x2a7233),_0x35655c(_0x3b0497,0x1*-0x15fe+0xf8*0x2+0x5*0x412,_0x5a7a38[_0xb43993(0x60d)],_0x2a7233));if(_0x1e456d[_0xb43993(0x1ba)])_0x5a7a38[_0xb43993(0x30e)](_0x179ac2,_0x3b0497,0x102d+0x3*-0xb32+0x1205*0x1,'f32',-(-0x1094+-0x230e+0x3789*0x1));}}catch(_0x37c460){}try{for(var _0x5424f5=0x27*-0xca+0x1bbf+0x307;_0x5a7a38['BSGOT'](_0x5424f5,_0x155459['lengt'+'h']);_0x5424f5++){var _0xb4aba=_0x540b5d(_0x155459[_0x5424f5],0x81b+-0x13bc+0xbd9);if(!_0xb4aba)continue;_0x1e456d[_0xb43993(0x112)+'eExp']&&(_0x5a7a38['LRZaw'](_0x179ac2,_0xb4aba,0x13*-0x1e1+0x1af7+0x908,_0xb43993(0x61f),_0x57ad8e),_0x179ac2(_0xb4aba,0x3fd*-0x9+-0x18f9*-0x1+0xb40,_0xb43993(0x61f),_0x57ad8e));_0x1e456d[_0xb43993(0x277)+_0xb43993(0x48f)]&&(_0x179ac2(_0xb4aba,0x1*-0x89a+0x5d4+0x34e,'f32',0x2500+0x1704+0xf01*-0x4),_0x179ac2(_0xb4aba,-0xba1+-0x1dda+-0x1*-0x29e3,_0x5a7a38['XwiKq'],-0x233*-0x8+-0x815*0x3+0x6a8));if(_0x1e456d[_0xb43993(0x4ce)+_0xb43993(0x1e2)])_0x179ac2(_0xb4aba,-0x204a+-0x1e6d+0x3f13,_0xb43993(0x61f),-0x46d*0x4+-0x164c+-0x2be7*-0x1);_0x1e456d[_0xb43993(0x5b4)+'Exp']&&(_0x5a7a38[_0xb43993(0x12f)](_0x5a7a38['pXEnh'],_0x5a7a38['WFboP'])?_0x803867[_0xb43993(0xd9)+'ed']=!!_0x42348e:(_0x35655c(_0xb4aba,-0x2bf*-0x2+0x17b2+-0x1ca4,_0x5a7a38['XwiKq'],0x8c5+-0x104e+0x1*0x789+0.1),_0x179ac2(_0xb4aba,0x20ea+-0x1*-0x2655+-0x46df*0x1,_0x5a7a38['XwiKq'],0xd*0x300+-0xe6a+-0x1896+0.1)));}}catch(_0x388bd9){}},0x1801+0x50f+-0x389*0x8),_0x5a7a38['IXOZo'](setInterval,()=>{var _0x1d3621=_0x1f4d7f;_0x2ed664[_0x1d3621(0x625)+'oaded']=!!window[_0x1d3621(0x678)+_0x1d3621(0x47d)+_0x1d3621(0x31e)];try{var _0x1413fd=0x900+-0x1543*0x1+-0xc43*-0x1;for(var _0x2a9f55 in _0x1583c9){if(_0x1583c9[_0x2a9f55]&&_0x1583c9[_0x2a9f55][_0x1d3621(0x3f6)+'ed'])_0x1413fd++;}_0x2ed664[_0x1d3621(0x356)+'Ok']=_0x1413fd;}catch(_0xc3dc4c){}},0x2510+-0x1b97+0x1db*-0x3);var _0x345361=new Set(),_0x598078={0x1:[],0x3:[]},_0x1e43a6=![];function _0x36ac52(_0xfd0f5a){_0x345361['add'](_0xfd0f5a['code']);}function _0x14bc14(_0x1c9759){var _0x259750=_0x1f4d7f;if(_0x5a7a38['rBUrS'](_0x5a7a38[_0x259750(0xce)],_0x259750(0x15b)))_0x345361[_0x259750(0x1b2)+'e'](_0x1c9759[_0x259750(0x486)]);else{var _0xf53c94=_0x191247[_0x259750(0x606)+_0x259750(0x2b3)+_0x259750(0x4b0)+'o']||0x1dac+0x2683+-0xb5d*0x6,_0x56349d=_0x3a5569[_0x259750(0x3fb)+_0x259750(0x4a0)],_0x43df8f=_0x161ea0['inner'+'Heigh'+'t'];if(_0x5a7a38[_0x259750(0x484)](_0x56349d,_0x265570['w'])&&_0x5a7a38[_0x259750(0x484)](_0x43df8f,_0x5107b9['h'])&&_0x5a7a38['NJFKj'](_0xf53c94,_0x584c2d['dpr']))return;_0x271c2f['w']=_0x56349d,_0x4f28b3['h']=_0x43df8f,_0x25f07d['dpr']=_0xf53c94,_0x33a46b['width']=_0x41eb4c['round'](_0x56349d*_0xf53c94),_0x43c607[_0x259750(0x231)+'t']=_0x25bd98[_0x259750(0x4ea)](_0x5a7a38['zuEYh'](_0x43df8f,_0xf53c94)),_0x411b33['setTr'+'ansfo'+'rm'](_0xf53c94,0x20*-0xd+-0xc0e+-0x6d7*-0x2,-0x3b*0x64+0x154d+-0x3*-0x95,_0xf53c94,-0x1755+-0x2*0xd17+-0x41*-0xc3,0x95*0x29+0x22cc+-0x1*0x3aa9);}}function _0x496516(_0x17033a){var _0x3c7b64=_0x1f4d7f;if(_0x17033a['__sak'+_0x3c7b64(0x49b)])return;_0x345361[_0x3c7b64(0x16f)](_0x5a7a38[_0x3c7b64(0x4c0)]+_0x5a7a38[_0x3c7b64(0x1d7)](_0x17033a['butto'+'n'],0xa4c+0xab9+-0x1504*0x1));var _0x5c1e07=_0x598078[_0x5a7a38['oXYmc'](_0x17033a['butto'+'n'],0x1d35*-0x1+0x1*-0xe5+0x1e1b)];if(_0x5c1e07){_0x5c1e07['push'](performance['now']());if(_0x5c1e07[_0x3c7b64(0x2b4)+'h']>0x4*0x9bf+-0xc90+-0x1a44)_0x5c1e07[_0x3c7b64(0x636)]();}}function _0x581487(_0x330bad){var _0x1ffbcc=_0x1f4d7f;if(!_0x330bad[_0x1ffbcc(0xc2)+_0x1ffbcc(0x49b)])_0x345361[_0x1ffbcc(0x1b2)+'e'](_0x5a7a38[_0x1ffbcc(0x4c0)]+(_0x330bad['butto'+'n']+(0x1bce+-0x6*-0x3d6+-0x32d1)));}function _0x532152(){var _0x4f5167=_0x1f4d7f;_0x345361[_0x4f5167(0x1c0)]();}function _0x5de4a1(){var _0x3ab24a=_0x1f4d7f,_0x59ef40=_0x5a7a38[_0x3ab24a(0x1a2)]['split']('|'),_0x25c5ff=-0x673+0x1*0x1505+-0xe92;while(!![]){switch(_0x59ef40[_0x25c5ff++]){case'0':window[_0x3ab24a(0x1e1)+'entLi'+'stene'+'r'](_0x5a7a38[_0x3ab24a(0xd2)],_0x581487,!![]);continue;case'1':window[_0x3ab24a(0x1e1)+'entLi'+_0x3ab24a(0x574)+'r'](_0x5a7a38[_0x3ab24a(0x13c)],_0x496516,!![]);continue;case'2':window[_0x3ab24a(0x1e1)+'entLi'+'stene'+'r'](_0x3ab24a(0x3ff),_0x532152);continue;case'3':_0x1e43a6=!![];continue;case'4':window['addEv'+_0x3ab24a(0x363)+'stene'+'r']('keydo'+'wn',_0x36ac52,!![]);continue;case'5':if(_0x1e43a6)return;continue;case'6':window['addEv'+'entLi'+'stene'+'r'](_0x5a7a38[_0x3ab24a(0x325)],_0x14bc14,!![]);continue;}break;}}function _0x59a98e(_0x3be7eb){var _0x18b99d=_0x1f4d7f,_0x4840f4=_0x598078[_0x3be7eb]||[],_0x275103=performance[_0x18b99d(0x657)]();while(_0x4840f4[_0x18b99d(0x2b4)+'h']&&_0x5a7a38[_0x18b99d(0x410)](_0x275103,_0x4840f4[-0x1b96+0x21f6+-0x660])>0x25b1+-0x1*-0x187d+-0x3a46)_0x4840f4[_0x18b99d(0x636)]();return _0x4840f4[_0x18b99d(0x2b4)+'h'];}function _0x4b1c4c(_0x57c370){var _0x29b561=_0x1f4d7f;if(_0x5a7a38[_0x29b561(0x1ec)](_0x5a7a38['vBhFx'],_0x5a7a38['vBhFx']))return _0x28105d[_0x29b561(0xbd)]('[saku'+_0x29b561(0x2d3)+_0x29b561(0x4f3)+'ook\x20r'+_0x29b561(0x14c)+_0x29b561(0x258),_0x47d162,_0x1f0fc5&&_0x3a818c['messa'+'ge']),null;else{if(document[_0x29b561(0x45f)]&&(document[_0x29b561(0x2fe)+_0x29b561(0x64d)]===_0x29b561(0x141)+_0x29b561(0x637)+'e'||_0x5a7a38['VbHyg'](document[_0x29b561(0x2fe)+'State'],'compl'+_0x29b561(0x221))))_0x57c370();else document['addEv'+_0x29b561(0x363)+_0x29b561(0x574)+'r'](_0x29b561(0x305)+_0x29b561(0x11e)+'Loade'+'d',_0x57c370,{'once':!![]});}}_0x4b1c4c(()=>{var _0x210c27=_0x1f4d7f,_0x2a0c68={'vtFBt':function(_0x277fb,_0x31af31,_0x14bbb7,_0x3b4138){return _0x277fb(_0x31af31,_0x14bbb7,_0x3b4138);},'dMFHD':function(_0x51af8d,_0x22ab4d){return _0x51af8d!=_0x22ab4d;},'hpJWq':function(_0x19a193,_0xf476b8,_0x51c6ba,_0x1dc705,_0x59c22b){return _0x19a193(_0xf476b8,_0x51c6ba,_0x1dc705,_0x59c22b);},'jJzoK':function(_0x56d6c6){return _0x56d6c6();},'GuUOX':_0x210c27(0x1b7),'eUuDB':_0x210c27(0x56a),'gPYCu':function(_0x2c12bf,_0x20bcb0){var _0x40aed2=_0x210c27;return _0x5a7a38[_0x40aed2(0x239)](_0x2c12bf,_0x20bcb0);},'IKZLF':'rgba('+_0x210c27(0x3f8)+_0x210c27(0x532)+'7,0.8'+'5)','ICWaz':'rgba('+_0x210c27(0x3c3)+_0x210c27(0x15e)+_0x210c27(0x65c)+')','qpYRN':function(_0x3c54c5,_0x12f1ea){return _0x3c54c5+_0x12f1ea;},'VZxvY':function(_0x39f925,_0x22adbb){return _0x39f925+_0x22adbb;},'gLxZf':_0x210c27(0x504),'KAhzb':function(_0x226cb8,_0xa98975){return _0x226cb8+_0xa98975;},'jWENU':function(_0x2f03a4,_0x4b43bd){return _0x5a7a38['IUKif'](_0x2f03a4,_0x4b43bd);},'uWnNm':function(_0x44331f,_0x18fab0){return _0x44331f*_0x18fab0;},'JCAce':function(_0x520922,_0x5e0c79){var _0x22d1f8=_0x210c27;return _0x5a7a38[_0x22d1f8(0x299)](_0x520922,_0x5e0c79);},'xQuuo':function(_0x596ebc,_0x5f329f){return _0x596ebc-_0x5f329f;},'wWNri':function(_0x3a0bc3,_0x366d59,_0x3a0b31,_0xaceeae,_0x1dc3be,_0x4b866f,_0x2840c1){var _0x66ec14=_0x210c27;return _0x5a7a38[_0x66ec14(0x373)](_0x3a0bc3,_0x366d59,_0x3a0b31,_0xaceeae,_0x1dc3be,_0x4b866f,_0x2840c1);},'nvAhH':_0x5a7a38[_0x210c27(0x66b)],'CMyfL':_0x210c27(0x548)+'3','KJOZC':function(_0x219bcb,_0x216bec){var _0x2783dd=_0x210c27;return _0x5a7a38[_0x2783dd(0x1d7)](_0x219bcb,_0x216bec);},'BIjYZ':_0x210c27(0x165),'zMHiV':function(_0x239c3c,_0x4cc3a5,_0x3e5b60,_0x54a284,_0x4b0f0f,_0x2d63cf,_0x38e4d6,_0x1d76d8){return _0x239c3c(_0x4cc3a5,_0x3e5b60,_0x54a284,_0x4b0f0f,_0x2d63cf,_0x38e4d6,_0x1d76d8);},'EYDRz':function(_0x1767b1,_0x162a95){return _0x1767b1(_0x162a95);},'guuny':function(_0xc0aa3e,_0x313b72){return _0xc0aa3e(_0x313b72);},'eQYue':function(_0x2e9f26,_0x964e54){var _0x58cf4b=_0x210c27;return _0x5a7a38[_0x58cf4b(0x239)](_0x2e9f26,_0x964e54);},'gvvJi':function(_0x115850,_0xb9ac80){var _0x3df7a6=_0x210c27;return _0x5a7a38[_0x3df7a6(0x31b)](_0x115850,_0xb9ac80);},'oiywu':function(_0x3ad77b,_0x41c01e){return _0x3ad77b*_0x41c01e;},'mqLCY':function(_0x488972,_0x30fd1b){return _0x5a7a38['EHAhX'](_0x488972,_0x30fd1b);},'cUrjr':function(_0x316c82,_0x2257a9){return _0x316c82+_0x2257a9;},'qfneY':function(_0x326786,_0x424c17){var _0x22733c=_0x210c27;return _0x5a7a38[_0x22733c(0x25b)](_0x326786,_0x424c17);},'zfMCi':function(_0x2ef4e9,_0x1667b1){return _0x5a7a38['RUZmT'](_0x2ef4e9,_0x1667b1);},'BWedv':_0x210c27(0x676),'LwdFt':_0x5a7a38[_0x210c27(0x2b8)],'gFKhL':_0x210c27(0x516)+'9d','mKlnP':function(_0x4703d8,_0x37f4c3){return _0x4703d8!==_0x37f4c3;},'TaqGh':_0x5a7a38[_0x210c27(0x399)],'lJIUK':function(_0x4a98ab,_0x2a8d41){return _0x4a98ab+_0x2a8d41;},'jOrXv':function(_0x5f5234,_0x28d64a){var _0x1543f2=_0x210c27;return _0x5a7a38[_0x1543f2(0x32d)](_0x5f5234,_0x28d64a);},'vIZxe':function(_0x11151a){return _0x11151a();},'prZYQ':'range','TLBuK':_0x5a7a38[_0x210c27(0x61c)],'CAPZK':_0x5a7a38['zwUiB'],'pUtNe':_0x210c27(0x5b8),'tMPoV':_0x210c27(0x193)+'nt','KimvC':function(_0x2f6c1d,_0x38856c){return _0x2f6c1d(_0x38856c);},'bxKGh':function(_0x298ffb,_0x2cea8b,_0x1010e5){return _0x298ffb(_0x2cea8b,_0x1010e5);},'VByFV':_0x210c27(0x479),'cwimu':_0x5a7a38[_0x210c27(0x455)],'tZXrP':_0x210c27(0x3e5),'EKlSv':function(_0x2a83cf){return _0x2a83cf();},'lyvEC':function(_0xe6d3ff){var _0x3b7e0e=_0x210c27;return _0x5a7a38[_0x3b7e0e(0x1cc)](_0xe6d3ff);},'GYaZA':function(_0x5273b0,_0x5c66a2){return _0x5a7a38['lpxMc'](_0x5273b0,_0x5c66a2);},'mEavM':_0x5a7a38[_0x210c27(0x4e2)],'Wurke':function(_0x3d4f18){return _0x5a7a38['ujgtb'](_0x3d4f18);},'JSGyx':function(_0x123c01){return _0x123c01();},'Fxohr':_0x5a7a38['XRhaM'],'FSSZN':'WujMd','awdeI':function(_0x34cd13){return _0x34cd13();},'RoMug':'mOKny','PdaDO':function(_0x13e3d8){return _0x5a7a38['kLjPd'](_0x13e3d8);},'dFvtQ':function(_0x5e3d23){return _0x5e3d23();},'cgLeP':function(_0x29936f,_0x2ac2f4){return _0x29936f+_0x2ac2f4;},'ZeLLI':_0x5a7a38['OIRjk'],'noFQJ':_0x210c27(0x4ad)+'vemen'+'t\x20','UxeOr':function(_0x2d4320){return _0x2d4320();},'lJKWq':function(_0x324e66,_0x2dbeb1,_0x48bd51,_0x4f604b,_0x2db88f,_0x17cd61){return _0x324e66(_0x2dbeb1,_0x48bd51,_0x4f604b,_0x2db88f,_0x17cd61);},'CQQLO':function(_0x16d598,_0x1dab9f,_0x1012b4,_0x41f393,_0x256c2c,_0x536c68){var _0x588526=_0x210c27;return _0x5a7a38[_0x588526(0x595)](_0x16d598,_0x1dab9f,_0x1012b4,_0x41f393,_0x256c2c,_0x536c68);},'opdnP':_0x210c27(0x3f4)+'\x20Reco'+_0x210c27(0x3e4)+_0x210c27(0x14b)+_0x210c27(0x39c)+_0x210c27(0x429)+'\x20reco'+'il\x20sp'+_0x210c27(0x26b)+_0x210c27(0x4a4)+_0x210c27(0x60f)+_0x210c27(0x19c),'WSTBq':_0x5a7a38[_0x210c27(0x2cb)],'fHMqM':function(_0x3c4c9d,_0x4b1d7f,_0x3ebaa5,_0x4f3624,_0x4a7157,_0x2ea421){return _0x3c4c9d(_0x4b1d7f,_0x3ebaa5,_0x4f3624,_0x4a7157,_0x2ea421);},'usAWE':'Scale'+_0x210c27(0x472)+'rtide'+'Weapo'+'n.fir'+'eRate'+_0x210c27(0x52a)+_0x210c27(0x172)+'erver'+_0x210c27(0x4b2)+'still'+_0x210c27(0x4d5)+_0x210c27(0x39a)+'s.','AMDKC':function(_0x149e45,_0x135bda,_0x15fb96,_0x3a10aa,_0x55b329,_0xf239bd){return _0x149e45(_0x135bda,_0x15fb96,_0x3a10aa,_0x55b329,_0xf239bd);},'oEPjM':_0x5a7a38[_0x210c27(0x48b)],'yPvQR':_0x5a7a38[_0x210c27(0x557)],'bsJPA':function(_0x1ae9e7,_0x2fd6de){return _0x1ae9e7(_0x2fd6de);},'PNomk':_0x210c27(0x3f1)+_0x210c27(0x1c9)+_0x210c27(0x1da)+'l\x20dra'+_0x210c27(0x677)+'he\x20de'+_0x210c27(0x316)+'nt\x20ha'+_0x210c27(0x4af)+_0x210c27(0x115)+_0x210c27(0x35d)+'.','FtRww':'eYuIW','eWkPz':_0x5a7a38[_0x210c27(0x12a)],'kzFWx':'Speed'+'\x20%','xuInk':_0x210c27(0x11f)+_0x210c27(0x23c)+'ult','PyubE':'Jump\x20'+_0x210c27(0x208)+'vity','BdmzR':_0x5a7a38[_0x210c27(0x431)],'LNepB':function(_0x26211b,_0xa7a3d0,_0x20e5ba,_0x6f62b9){return _0x26211b(_0xa7a3d0,_0x20e5ba,_0x6f62b9);},'EalZm':_0x210c27(0x4c4)+_0x210c27(0x24c),'JsijK':_0x210c27(0x2c4)+'s\x20Mov'+_0x210c27(0x404)+'.last'+'JumpT'+_0x210c27(0x3d2)+_0x210c27(0x429)+'\x20jump'+_0x210c27(0x12e)+_0x210c27(0x41c)+_0x210c27(0x659)+_0x210c27(0x1ad)+'ies.','LgOLO':_0x5a7a38[_0x210c27(0x51d)],'EhYba':_0x210c27(0x453)+_0x210c27(0x1bf)+'ht','djeFg':_0x210c27(0x1d9),'hQswv':_0x210c27(0x2b6)+_0x210c27(0x3e6),'SwZoI':function(_0x22b3ec,_0x432b94,_0x17ab0a,_0x4e2d86){var _0x25493d=_0x210c27;return _0x5a7a38[_0x25493d(0xcd)](_0x22b3ec,_0x432b94,_0x17ab0a,_0x4e2d86);},'nNjUF':function(_0x1d1a69,_0x410101,_0x472084){var _0x53b9a7=_0x210c27;return _0x5a7a38[_0x53b9a7(0x346)](_0x1d1a69,_0x410101,_0x472084);},'OoEru':function(_0x4f66e2,_0x561a5d,_0x5a985f,_0x428993,_0x4d5499,_0x2a7c48){var _0x26c46d=_0x210c27;return _0x5a7a38[_0x26c46d(0x471)](_0x4f66e2,_0x561a5d,_0x5a985f,_0x428993,_0x4d5499,_0x2a7c48);},'ngLQT':function(_0x35aee8,_0x5683b4,_0x1e3d37,_0x3cf75d){return _0x35aee8(_0x5683b4,_0x1e3d37,_0x3cf75d);},'RqYIa':function(_0x413af4,_0x2669ac,_0x4232c4){return _0x5a7a38['ZBmkM'](_0x413af4,_0x2669ac,_0x4232c4);},'iBugm':_0x210c27(0xed),'KQiML':function(_0x508614,_0x5cf476,_0x468eae,_0x2d4d61,_0x418b53,_0x51bd1f){return _0x508614(_0x5cf476,_0x468eae,_0x2d4d61,_0x418b53,_0x51bd1f);},'BbJBq':_0x5a7a38['dPMhf'],'JjnKb':function(_0x540d01,_0x4e4623){return _0x540d01(_0x4e4623);},'nEoxI':_0x210c27(0x138)+_0x210c27(0x629)+'\x20relo'+'ad.\x20I'+_0x210c27(0x559)+'ches\x20'+'load\x20'+_0x210c27(0x3d3)+'fe\x20mo'+_0x210c27(0x23f)+_0x210c27(0x1e7)+_0x210c27(0x3a1)+'is\x20ho'+_0x210c27(0x169)+'lated'+_0x210c27(0x211)+'ll\x20me'+'\x20the\x20'+_0x210c27(0x356)+'-appl'+'ied\x20c'+_0x210c27(0x434),'jhphN':'Hook\x20'+'risk\x20'+_0x210c27(0x4d0)+'hes','KYYWP':_0x210c27(0x138)+_0x210c27(0x629)+_0x210c27(0x2dc)+'ad.','KOths':function(_0x5f1c5e,_0x1f655a,_0x4ba642,_0x2a92b8){var _0x409e94=_0x210c27;return _0x5a7a38[_0x409e94(0x339)](_0x5f1c5e,_0x1f655a,_0x4ba642,_0x2a92b8);},'LvMPz':'godDi'+'e\x20(OH'+_0x210c27(0x5ea)+_0x210c27(0x539)+_0x210c27(0x366),'fBdmf':'captu'+_0x210c27(0x475)+'etGam'+_0x210c27(0xbf)+_0x210c27(0x419)+_0x210c27(0x185)+_0x210c27(0x1ca)+'d)','CJEkR':function(_0x11b3cd,_0x57ab0f,_0x6c7c32,_0x1c392d,_0x26dbbc,_0x30674a){var _0x10635a=_0x210c27;return _0x5a7a38[_0x10635a(0x595)](_0x11b3cd,_0x57ab0f,_0x6c7c32,_0x1c392d,_0x26dbbc,_0x30674a);},'twQMs':'Disab'+_0x210c27(0x326)+_0x210c27(0x5c1)+_0x210c27(0x48d)+_0x210c27(0x2fa)+_0x210c27(0xfe)+'t\x20sta'+_0x210c27(0x254)+'via\x20S'+_0x210c27(0xc8)+_0x210c27(0x198)+_0x210c27(0x235)+_0x210c27(0x667)+_0x210c27(0x543),'tKhGt':'God/d'+_0x210c27(0x60e)+_0x210c27(0x43f)+_0x210c27(0xfa)+_0x210c27(0x20e)+_0x210c27(0x583)+'\x20ban\x20'+_0x210c27(0x3ad)+_0x210c27(0x602)+_0x210c27(0x21b)+'this\x20'+_0x210c27(0x64f),'IgFzq':'1|3|5'+'|0|2|'+'4','ezjDF':_0x5a7a38[_0x210c27(0x31d)],'PMAPm':_0x5a7a38[_0x210c27(0x280)],'DpqKR':'unkno'+'wn','DfCiR':_0x210c27(0x1c1),'SsgOT':function(_0x1b34c5,_0x1a709f){var _0x50b744=_0x210c27;return _0x5a7a38[_0x50b744(0x32f)](_0x1b34c5,_0x1a709f);},'fxUqm':_0x5a7a38[_0x210c27(0x150)],'LFmpz':_0x5a7a38['Nerlb'],'sbjRh':_0x5a7a38['UgWlq'],'bFLZY':_0x210c27(0x261),'cplXM':_0x5a7a38['nsMFL'],'uOfiY':_0x5a7a38['KAgTZ'],'bzTCy':_0x5a7a38[_0x210c27(0x1a3)],'qABTm':_0x5a7a38['mhNfv'],'PvFbX':_0x210c27(0x392),'orHBU':_0x5a7a38['LMbEh'],'HRKkj':_0x5a7a38['gZGoP'],'RmzQe':_0x5a7a38[_0x210c27(0x27d)],'ZEpuJ':_0x5a7a38[_0x210c27(0x3b3)],'VbWmy':'mn-co'+'ls','jISMJ':_0x5a7a38['cQutM'],'LLuLx':_0x210c27(0x3a6)+'|3|1|'+'6|0|7','OkYHy':_0x5a7a38[_0x210c27(0x65d)],'HAETb':_0x5a7a38[_0x210c27(0x136)],'KWlIO':'comba'+'t','BMjtW':function(_0x4801d0,_0x1622b2,_0x2bbf64){return _0x5a7a38['hLiKg'](_0x4801d0,_0x1622b2,_0x2bbf64);},'VDWxL':_0x5a7a38[_0x210c27(0x151)]};_0x1e456d[_0x210c27(0x40d)+'ck']&&setInterval(()=>{var _0x13d242=_0x210c27;if(_0x13d242(0x4c6)!==_0x13d242(0x4c6)){var _0x3feb74=_0x2a0c68[_0x13d242(0x669)](_0x34633d,_0x571140,_0x406f2e,_0x1f4712);if(_0x2a0c68['dMFHD'](_0x3feb74,null))_0x2a0c68[_0x13d242(0x240)](_0x4cba57,_0xa99153,_0x5d7173,_0x4eb16d,_0x3feb74*_0x5d3376);}else try{for(var _0x14f8b8 of[_0x5a7a38['yYGKV'],_0x5a7a38[_0x13d242(0x3b4)],_0x5a7a38[_0x13d242(0x4a7)],_0x13d242(0x415)+_0x13d242(0x4bb)+_0x13d242(0x195)+'s']){var _0xbe4675=document[_0x13d242(0x36d)+_0x13d242(0x404)+_0x13d242(0xe6)](_0x14f8b8);if(_0xbe4675&&_0x5a7a38['XFrDr'](_0x14f8b8,'fulls'+_0x13d242(0x4bb)+'-banr'+'s')){var _0x4f74cc=_0xbe4675['child'+'ren'];for(var _0x17a740=-0x16d5+0x6f4+0xfe1;_0x17a740<_0x4f74cc['lengt'+'h'];_0x17a740++){if(_0x4f74cc[_0x17a740]['id']&&_0x4f74cc[_0x17a740]['id']['index'+'Of'](_0x13d242(0x578)+_0x13d242(0x64b))===0x3b*0x1d+0x44f*0x3+-0x139c)_0x4f74cc[_0x17a740]['style'][_0x13d242(0x4f2)+'ay']=_0x13d242(0x261);}}else{if(_0xbe4675)_0xbe4675[_0x13d242(0x5e6)][_0x13d242(0x4f2)+'ay']=_0x5a7a38['QiZkf'];}}}catch(_0x3d6817){}},-0xeff+0x2*-0x4c1+0x1*0x2051);var _0x435595=document[_0x210c27(0x210)+'eElem'+_0x210c27(0x515)]('canva'+'s');_0x435595[_0x210c27(0x5e6)][_0x210c27(0x2b0)+'xt']='posit'+_0x210c27(0x4ae)+_0x210c27(0x663)+'inset'+_0x210c27(0x5d7)+_0x210c27(0x3ef)+'00vw;'+_0x210c27(0x231)+'t:100'+_0x210c27(0x2c0)+_0x210c27(0x66d)+_0x210c27(0x324)+'48364'+_0x210c27(0x458)+'nter-'+_0x210c27(0x3f5)+'s:non'+'e';var _0x476f76=_0x435595['getCo'+_0x210c27(0x60c)]('2d');function _0x1eb01f(){var _0x1025ae=_0x210c27,_0x1f7815={'EaVOp':_0x1025ae(0x5e6),'LvvXp':function(_0x20da88){return _0x20da88();}};try{var _0x23c754=document['fulls'+_0x1025ae(0x4bb)+'Eleme'+'nt'],_0x3faada=_0x23c754&&_0x23c754[_0x1025ae(0x581)+'me']!==_0x1025ae(0xf0)+'S'?_0x23c754:document['body']||document[_0x1025ae(0x384)+_0x1025ae(0x3d6)+_0x1025ae(0x404)];if(_0x435595[_0x1025ae(0x22e)+'tNode']!==_0x3faada)_0x3faada['appen'+_0x1025ae(0x347)+'d'](_0x435595);}catch(_0x3bef33){if(_0x2a0c68['GuUOX']!==_0x1025ae(0x2bb))try{if(_0x2a0c68['eUuDB']!==_0x1025ae(0x56a)){var _0x1fd964=_0x4b782e[_0x1025ae(0x210)+'eElem'+_0x1025ae(0x515)](_0x1f7815[_0x1025ae(0x217)]);_0x1fd964[_0x1025ae(0x3b2)+'onten'+'t']=_0x27b63c,_0x1bccbf[_0x1025ae(0x168)+_0x1025ae(0x347)+'d'](_0x1fd964),_0x1c4d20=_0x1f7815[_0x1025ae(0x4d1)](_0x19e4ec),_0x52eaa6['appen'+_0x1025ae(0x347)+'d'](_0x1d8ca6),_0xef4a3d(()=>_0x39bee4[_0x1025ae(0x162)+'List'][_0x1025ae(0x16f)](_0x1025ae(0x1fc)));}else document[_0x1025ae(0x45f)]['appen'+'dChil'+'d'](_0x435595);}catch(_0xf4ecc0){}else _0x2f588a['rapid'+_0x1025ae(0x27b)]=_0x3f74ed,_0x2a0c68[_0x1025ae(0x665)](_0x3be3fc);}}var _0x55ca5a={'w':0x0,'h':0x0,'dpr':0x0};function _0x5dc1c1(){var _0xb00e18=_0x210c27,_0x2ae0e2=window[_0xb00e18(0x606)+_0xb00e18(0x2b3)+_0xb00e18(0x4b0)+'o']||-0x228+0xdbb+-0x1*0xb92,_0x1a7c3a=window['inner'+_0xb00e18(0x4a0)],_0x2fae2c=window[_0xb00e18(0x3fb)+_0xb00e18(0x664)+'t'];if(_0x1a7c3a===_0x55ca5a['w']&&_0x5a7a38[_0xb00e18(0x604)](_0x2fae2c,_0x55ca5a['h'])&&_0x2ae0e2===_0x55ca5a[_0xb00e18(0x593)])return;_0x55ca5a['w']=_0x1a7c3a,_0x55ca5a['h']=_0x2fae2c,_0x55ca5a[_0xb00e18(0x593)]=_0x2ae0e2,_0x435595['width']=Math['round'](_0x5a7a38['zuEYh'](_0x1a7c3a,_0x2ae0e2)),_0x435595['heigh'+'t']=Math['round'](_0x5a7a38[_0xb00e18(0x32d)](_0x2fae2c,_0x2ae0e2)),_0x476f76['setTr'+'ansfo'+'rm'](_0x2ae0e2,0x1e6e+0x33d+0x27*-0xdd,0x853+0x2*-0x7b1+0x1*0x70f,_0x2ae0e2,0x2*-0xc12+-0x8c*-0x8+0x4*0x4f1,-0x1647+-0x5*0x6b+0x2*0xc2f);}var _0x1e191c=-0x177f+0x1b*0x8e+0x3*0x2d7,_0x215316=performance[_0x210c27(0x657)](),_0x12c793=-0x3*-0x30b+-0x264+0x4b*-0x17;function _0x4cc5be(_0x594a1a){var _0x430c21=_0x210c27,_0x39b58f=('1|12|'+'6|14|'+'7|0|8'+_0x430c21(0x176)+_0x430c21(0x4d6)+'3|11|'+_0x430c21(0x28a))[_0x430c21(0x158)]('|'),_0x268ba3=-0xfce+-0xf1*0x21+0x2edf;while(!![]){switch(_0x39b58f[_0x268ba3++]){case'0':var _0x319559=_0x54d5e0==='ml'?_0x594a1a[_0x430c21(0x676)]+_0x594a1a[_0x430c21(0x231)+'t']/(0x1*-0x77e+-0x11dd*0x2+-0x16*-0x1f7)-_0x2a0c68[_0x430c21(0x46f)](_0x28a6a1,-0x7e9+0x31*0xc7+-0x1e2c):_0x594a1a[_0x430c21(0x421)+'m']-_0x28a6a1-(_0x54d5e0==='bl'?0x26e4+0x1*0xb7b+-0x31ff*0x1:0x1*0x1433+0x2*-0xd72+0x747);continue;case'1':var _0x2ce6c4={'rxbAF':_0x2a0c68[_0x430c21(0x1b8)],'oNplP':_0x2a0c68[_0x430c21(0xff)],'lTnfn':_0x430c21(0x283)+'e','lEoOr':function(_0x11922c,_0x11a833){var _0x323478=_0x430c21;return _0x2a0c68[_0x323478(0x5e4)](_0x11922c,_0x11a833);},'SxjZB':function(_0x5be11b,_0x49febe){var _0x56437d=_0x430c21;return _0x2a0c68[_0x56437d(0x46f)](_0x5be11b,_0x49febe);},'hydvx':function(_0x1ebc07,_0x1945ac){return _0x1ebc07*_0x1945ac;},'ZMdUv':function(_0x96ab42,_0x162564){var _0x589f0c=_0x430c21;return _0x2a0c68[_0x589f0c(0x390)](_0x96ab42,_0x162564);}};continue;case'2':_0x5288dd('D',_0x2a0c68['gLxZf'],_0x2a0c68[_0x430c21(0x5e4)](_0x307062,_0x2a0c68['KAhzb'](_0x5cac83,_0x4be70b)*(0x20ba+-0x1f64+-0x154)),_0x2a0c68['jWENU'](_0x319559+_0x5cac83,_0x4be70b),_0x5cac83,_0x5cac83);continue;case'3':var _0xf03e8c=_0x2a0c68[_0x430c21(0x46f)](_0x14e365-_0x4be70b,0x11*-0x137+-0xad8*0x1+-0x1*-0x1f81),_0x3d4528=_0x319559+_0x2a0c68[_0x430c21(0x31a)](_0x5cac83+_0x4be70b,-0x366*0x2+0x1707+-0x1039);continue;case'4':_0x5288dd('',_0x430c21(0x393),_0x307062,_0x3d4528+_0x5cac83+_0x4be70b,_0x14e365,_0x5cac83*(0x206f+-0x1*-0xbcf+0x7*-0x652+0.45));continue;case'5':_0x5288dd('W','KeyW',_0x2a0c68['KAhzb'](_0x307062,_0x5cac83)+_0x4be70b,_0x319559,_0x5cac83,_0x5cac83);continue;case'6':var _0x14e365=_0x5cac83*(0x396+-0x1*0xffe+-0x1*-0xc6b)+_0x4be70b*(-0x27*-0xa7+-0x1cc9+-0x2*-0x1ad),_0x28a6a1=_0x2a0c68[_0x430c21(0x31a)](_0x5cac83,0x3*0xc31+0x19*0x71+0x5*-0x985)+_0x4be70b*(-0x21c9+0x4*0x99+-0x1*-0x1f67);continue;case'7':var _0x307062=_0x2a0c68[_0x430c21(0x605)](_0x54d5e0,'br')?_0x2a0c68[_0x430c21(0x3c6)](_0x594a1a['right']-(-0x1*0x1d9f+0xc01+0x3e*0x49),_0x14e365):_0x594a1a[_0x430c21(0x424)]+(-0x66f+0x11cf+-0xb50);continue;case'8':var _0x5288dd=(_0x4f4e38,_0xa7416a,_0x2961c0,_0x4079aa,_0x41836a,_0x3948f8,_0x5bc16b)=>{var _0x5dd243=_0x430c21,_0x4dbb40=_0x345361['has'](_0xa7416a);_0x476f76[_0x5dd243(0x566)](),_0x476f76['begin'+'Path']();if(_0x476f76[_0x5dd243(0x4ea)+'Rect'])_0x476f76[_0x5dd243(0x4ea)+_0x5dd243(0x249)](_0x2961c0,_0x4079aa,_0x41836a,_0x3948f8,(0x1*-0x37b+0x26cc+0x2*-0x11a5)*_0x4af8b7);else _0x476f76['rect'](_0x2961c0,_0x4079aa,_0x41836a,_0x3948f8);_0x476f76[_0x5dd243(0x273)+_0x5dd243(0x272)]=_0x4dbb40?_0x2ce6c4[_0x5dd243(0x668)]:'rgba('+'22,8,'+_0x5dd243(0x57c)+'7)',_0x476f76[_0x5dd243(0x512)](),_0x476f76[_0x5dd243(0x1ee)+'idth']=-0x1838+-0x216d+0x2f*0x13a,_0x476f76[_0x5dd243(0x1ab)+_0x5dd243(0x5cc)+'e']=_0x4dbb40?_0x366bba:_0x5dd243(0x341)+'255,1'+'07,15'+_0x5dd243(0x63f)+'5)',_0x476f76[_0x5dd243(0x1ab)+'e'](),_0x4dbb40&&(_0x476f76['shado'+'wColo'+'r']=_0x49dba4,_0x476f76['shado'+_0x5dd243(0x306)]=-0x2*0x5ba+0x23*-0x99+0x206d,_0x476f76['fill'](),_0x476f76[_0x5dd243(0x36e)+'wBlur']=-0x1*-0xd22+0x3f0+-0x1112),_0x476f76['fillS'+_0x5dd243(0x272)]=_0x4dbb40?'#fff':_0x2ce6c4[_0x5dd243(0x660)],_0x476f76[_0x5dd243(0x550)+'lign']=_0x5dd243(0x352)+'r',_0x476f76['textB'+_0x5dd243(0x63e)+'ne']=_0x2ce6c4[_0x5dd243(0xc5)],_0x476f76['font']=_0x2ce6c4[_0x5dd243(0x611)]('700\x20',Math[_0x5dd243(0x4ea)]((-0xc51*-0x1+0x10cd+-0x1d12*0x1)*_0x4af8b7))+(_0x5dd243(0x56e)+_0x5dd243(0x209)+_0x5dd243(0xe9)+_0x5dd243(0x3fd)+_0x5dd243(0x4e4)+_0x5dd243(0x2e2)+'s-ser'+'if'),_0x476f76['fillT'+_0x5dd243(0xea)](_0x4f4e38,_0x2961c0+_0x2ce6c4['SxjZB'](_0x41836a,0xa1e+-0x356+-0x6c6),_0x2ce6c4['lEoOr'](_0x4079aa,_0x3948f8/(0x503+-0x1*-0x1afc+-0x13*0x1af))-(_0x5bc16b?_0x2ce6c4['hydvx'](-0x101*0x1f+0xc51*-0x1+-0x1*-0x2b75,_0x4af8b7):-0x1b9b+-0x3*-0x301+0x1298)),_0x5bc16b&&(_0x476f76['font']=_0x2ce6c4[_0x5dd243(0x49f)]('600\x20'+Math[_0x5dd243(0x4ea)]((-0x13cf+-0x1e0c+0x31e4)*_0x4af8b7),_0x5dd243(0x56e)+_0x5dd243(0x209)+'-seri'+_0x5dd243(0x3fd)+_0x5dd243(0x4e4)+'i,san'+_0x5dd243(0x45c)+'if'),_0x476f76[_0x5dd243(0x273)+_0x5dd243(0x272)]=_0x4dbb40?_0x5dd243(0x207):'rgba('+'255,2'+_0x5dd243(0x15e)+'0,0.5'+'5)',_0x476f76[_0x5dd243(0x44f)+_0x5dd243(0xea)](_0x5bc16b,_0x2961c0+_0x41836a/(-0x21f6+-0x80*0x2f+0x3978),_0x4079aa+_0x3948f8/(0x66*0x27+-0x1*0xb9b+0x3*-0x14f)+(0xc53*0x1+-0x1*-0xfb7+-0x1c02)*_0x4af8b7)),_0x476f76[_0x5dd243(0x53b)+'re']();};continue;case'9':_0x2a0c68['wWNri'](_0x5288dd,'S',_0x2a0c68['nvAhH'],_0x2a0c68['qpYRN'](_0x307062,_0x5cac83)+_0x4be70b,_0x319559+_0x5cac83+_0x4be70b,_0x5cac83,_0x5cac83);continue;case'10':_0x5288dd(_0x430c21(0x485),_0x2a0c68[_0x430c21(0x50e)],_0x307062+_0xf03e8c+_0x4be70b,_0x3d4528,_0xf03e8c,_0x5cac83,_0x1e456d['ksCps']?_0x2a0c68[_0x430c21(0x501)](_0x59a98e(0xe3b*0x1+-0x1064*-0x1+-0x1e9c),_0x2a0c68[_0x430c21(0x3bb)]):'');continue;case'11':_0x2a0c68['zMHiV'](_0x5288dd,_0x430c21(0x242),'mouse'+'1',_0x307062,_0x3d4528,_0xf03e8c,_0x5cac83,_0x1e456d['ksCps']?_0x2a0c68[_0x430c21(0x398)](_0x2a0c68['EYDRz'](_0x59a98e,0x1*0x1cc5+0x1*-0x1751+-0x573),_0x430c21(0x165)):'');continue;case'12':var _0x4af8b7=_0x2a0c68[_0x430c21(0x4b6)](Number,_0x1e456d[_0x430c21(0x4aa)+'le'])||0x392*0x4+0x1a30+0x9*-0x47f,_0x5cac83=(0xcef+-0xe2f*0x2+0xf91)*_0x4af8b7,_0x4be70b=(0xc7c+-0x9*-0x46+-0xeee)*_0x4af8b7;continue;case'13':_0x5288dd('A',_0x430c21(0x3c1),_0x307062,_0x2a0c68[_0x430c21(0x390)](_0x319559+_0x5cac83,_0x4be70b),_0x5cac83,_0x5cac83);continue;case'14':var _0x54d5e0=_0x1e456d['ksPos'];continue;}break;}}function _0x2dc1c2(_0x2aa5d3){var _0x2b2840=_0x210c27,_0x41f4ec=_0x2aa5d3['width']/(-0x626+0x3d8*0x8+-0x1898),_0x13faeb=_0x2a0c68[_0x2b2840(0x22b)](_0x2aa5d3[_0x2b2840(0x231)+'t'],-0x1a86+-0x2002+0x3a8a),_0x128030=_0x2a0c68['EYDRz'](Number,_0x1e456d['chSiz'+'e'])||0x5c1+0xf7f+-0x153f,_0x3122c0=/^#[0-9a-f]{6}$/i[_0x2b2840(0x13d)](_0x1e456d[_0x2b2840(0x5f6)+'or'])?_0x1e456d[_0x2b2840(0x5f6)+'or']:'#ff6b'+'9d';_0x476f76[_0x2b2840(0x566)](),_0x476f76[_0x2b2840(0x1ab)+'eStyl'+'e']=_0x3122c0,_0x476f76['fillS'+_0x2b2840(0x272)]=_0x3122c0,_0x476f76['lineW'+_0x2b2840(0x1de)]=Math[_0x2b2840(0x457)](-0x5*0x744+0x13a*-0xa+0x1*0x3099+0.5,_0x2a0c68[_0x2b2840(0x417)](-0x412*0x9+-0x1029+0x34cd,_0x128030)),_0x476f76[_0x2b2840(0x36e)+'wColo'+'r']=_0x3122c0,_0x476f76[_0x2b2840(0x36e)+_0x2b2840(0x306)]=0x1376*-0x2+0xb6c+0x21e*0xd;var _0x858d77=_0x2a0c68['oiywu'](0x56f*0x7+0x1a5e+-0x4061,_0x128030),_0x4d7c01=_0x2a0c68[_0x2b2840(0x400)](-0x5fc+-0xe*-0x10+0xbc*0x7,_0x128030);_0x476f76[_0x2b2840(0x650)+'Path'](),_0x476f76['moveT'+'o'](_0x2a0c68[_0x2b2840(0x1d4)](_0x41f4ec-_0x858d77,_0x4d7c01),_0x13faeb),_0x476f76['lineT'+'o'](_0x41f4ec-_0x858d77,_0x13faeb),_0x476f76[_0x2b2840(0x2d5)+'o'](_0x2a0c68['cUrjr'](_0x41f4ec,_0x858d77),_0x13faeb),_0x476f76['lineT'+'o'](_0x2a0c68['qfneY'](_0x41f4ec+_0x858d77,_0x4d7c01),_0x13faeb),_0x476f76[_0x2b2840(0x2d5)+'o'](_0x41f4ec,_0x13faeb-_0x858d77-_0x4d7c01),_0x476f76[_0x2b2840(0x28e)+'o'](_0x41f4ec,_0x13faeb-_0x858d77),_0x476f76['moveT'+'o'](_0x41f4ec,_0x13faeb+_0x858d77),_0x476f76[_0x2b2840(0x28e)+'o'](_0x41f4ec,_0x2a0c68[_0x2b2840(0x398)](_0x2a0c68['qfneY'](_0x13faeb,_0x858d77),_0x4d7c01)),_0x476f76[_0x2b2840(0x1ab)+'e'](),_0x476f76['begin'+_0x2b2840(0x497)](),_0x476f76[_0x2b2840(0x387)](_0x41f4ec,_0x13faeb,_0x2a0c68['gvvJi'](-0xdac+0x2*-0xac7+0x233b+0.6000000000000001,_0x128030),-0x1101+0x1b04+-0xa03,Math['PI']*(-0x8b3+-0x183a+0x20ef)),_0x476f76[_0x2b2840(0x512)](),_0x476f76[_0x2b2840(0x53b)+'re']();}function _0x595a01(_0x247553){var _0x4b8496=_0x210c27;_0x476f76['save'](),_0x476f76[_0x4b8496(0x620)]='600\x201'+'2px\x20u'+_0x4b8496(0x641)+'ospac'+_0x4b8496(0x5fb)+'ospac'+'e',_0x476f76['textA'+_0x4b8496(0x140)]='left',_0x476f76[_0x4b8496(0x241)+_0x4b8496(0x63e)+'ne']=_0x2a0c68['BWedv'];var _0x14b171=-0xe75*-0x2+0x17e9*-0x1+-0x4d5,_0x5b929b=0x15fd*0x1+0x14af+-0x2aa0,_0x12cc86=(_0x265761,_0x3fda2d)=>{var _0x3cd286=_0x4b8496;_0x476f76['fillS'+'tyle']=_0x2a0c68['zfMCi'](_0x3fda2d,'rgba('+'255,2'+_0x3cd286(0x15e)+'0,0.7'+'5)'),_0x476f76['fillT'+_0x3cd286(0xea)](_0x265761,_0x5b929b,_0x14b171),_0x14b171+=-0xba+-0xcba+0xd84;};_0x12cc86(_0x2a0c68['LwdFt'],_0x2a0c68['gFKhL']);if(_0x1e456d[_0x4b8496(0x13a)])_0x12cc86(_0x2a0c68[_0x4b8496(0x390)](_0x12c793,'\x20FPS'));if(!_0x2ed664[_0x4b8496(0x625)+'oaded'])_0x12cc86(_0x4b8496(0x5a1)+'ng\x20fo'+'r\x20gam'+'e…','rgba('+_0x4b8496(0x3f8)+_0x4b8496(0x440)+'0,0.6'+')');_0x476f76['resto'+'re']();}function _0x4061b1(){var _0x205b45=_0x210c27;if('baxwo'===_0x205b45(0x2a1)){_0x5a7a38['wiPzB'](requestAnimationFrame,_0x4061b1),_0x1e191c++;var _0x344761=performance[_0x205b45(0x657)]();_0x5a7a38[_0x205b45(0x1cd)](_0x344761,_0x215316)>=0x4d3*0x2+-0x1e5*-0x3+-0xd61&&(_0x205b45(0x4fc)!==_0x5a7a38['dGiYQ']?new _0x5cdf1f(_0x4784e8)['write'+'Field'](_0x163524,_0xb7619c,_0xecce6b):(_0x12c793=Math[_0x205b45(0x4ea)](_0x5a7a38[_0x205b45(0x301)](_0x1e191c*(-0x502*0x1+-0x1f54+-0x22*-0x12f),_0x344761-_0x215316)),_0x1e191c=-0x10d+0x15be+-0x14b1*0x1,_0x215316=_0x344761));_0x5dc1c1(),_0x1eb01f(),_0x476f76[_0x205b45(0x1c0)+'Rect'](-0x10cb+-0x1ad+0x1278,-0x1a20+0x382+0x169e,_0x55ca5a['w'],_0x55ca5a['h']);var _0xae47c2={'left':0x0,'top':0x0,'right':_0x55ca5a['w'],'bottom':_0x55ca5a['h'],'width':_0x55ca5a['w'],'height':_0x55ca5a['h']};if(_0x1e456d[_0x205b45(0x10e)+_0x205b45(0x3e6)])_0x2dc1c2(_0xae47c2);if(_0x1e456d['keyst'+'rokes'])_0x5a7a38[_0x205b45(0x488)](_0x4cc5be,_0xae47c2);_0x595a01(_0xae47c2);}else{var _0x4ac619=_0x39ccaa[_0x205b45(0x4a8)+_0x205b45(0x30c)]({'typeName':_0x4f039a,'methodName':_0x177e99,'params':_0x124923,'returnType':_0x3d1f31},_0x5e9ae9);return _0x4ac619['enabl'+'ed']=_0x2a0c68[_0x205b45(0x29d)](_0x56bd79,![]),_0x2a8461[_0xe749c8]=_0x4ac619,_0x1aade8[_0x205b45(0x356)+_0x205b45(0x4a2)]++,_0x4ac619;}}var _0x29ce8e=document[_0x210c27(0x210)+'eElem'+_0x210c27(0x515)]('div');_0x29ce8e['id']='sakur'+'a-ui',_0x29ce8e['style'][_0x210c27(0x2b0)+'xt']='posit'+'ion:f'+_0x210c27(0x663)+_0x210c27(0x4de)+_0x210c27(0x1e8)+'index'+_0x210c27(0x324)+_0x210c27(0x436)+'7;poi'+'nter-'+_0x210c27(0x3f5)+_0x210c27(0x39d)+'e;';var _0x524e41=_0x29ce8e['attac'+'hShad'+'ow']({'mode':'open'});(document[_0x210c27(0x45f)]||document[_0x210c27(0x384)+_0x210c27(0x3d6)+_0x210c27(0x404)])['appen'+'dChil'+'d'](_0x29ce8e);var _0x2c2942=![],_0x507806={};try{if(_0x5a7a38[_0x210c27(0x549)](_0x5a7a38[_0x210c27(0x491)],_0x210c27(0x2d6)))for(var _0x9e1773 of[_0x210c27(0x578)+_0x210c27(0x616)+'0x250'+'-pare'+'nt','kour-'+'io_72'+'8x90-'+'paren'+'t',_0x5a7a38['wHoEf'],_0x210c27(0x415)+_0x210c27(0x4bb)+_0x210c27(0x195)+'s']){var _0x30a32c=_0x56b0a1['getEl'+_0x210c27(0x404)+_0x210c27(0xe6)](_0x9e1773);if(_0x30a32c&&_0x5a7a38['gIqij'](_0x9e1773,_0x5a7a38['HJodN'])){var _0x58303e=_0x30a32c['child'+'ren'];for(var _0x5ae7fa=0x1335+-0xecc+-0x469;_0x5ae7fa<_0x58303e['lengt'+'h'];_0x5ae7fa++){if(_0x58303e[_0x5ae7fa]['id']&&_0x5a7a38['efNrB'](_0x58303e[_0x5ae7fa]['id']['index'+'Of'](_0x210c27(0x578)+'io_'),-0x10*0xf1+-0x2ec*0x1+0x47f*0x4))_0x58303e[_0x5ae7fa]['style']['displ'+'ay']=_0x5a7a38[_0x210c27(0x53a)];}}else{if(_0x30a32c)_0x30a32c[_0x210c27(0x5e6)]['displ'+'ay']='none';}}else _0x507806=JSON[_0x210c27(0x3f2)](localStorage['getIt'+'em'](_0x210c27(0x2d2)+_0x210c27(0x5cb)+_0x210c27(0x2af)+'v1')||'{}');}catch(_0x3845c1){}function _0x261fba(){var _0x3f2b77=_0x210c27;try{localStorage[_0x3f2b77(0x3fa)+'em']('sakur'+'a.kou'+_0x3f2b77(0x2af)+'v1',JSON[_0x3f2b77(0x1e5)+_0x3f2b77(0x444)](_0x507806));}catch(_0xead2c8){}}function _0x2a99c3(_0x35cd52,_0x32851a){var _0xc2da5e=_0x210c27,_0x57c84b={'OvQcs':function(_0x41712e,_0x2549ad){return _0x5a7a38['lpxMc'](_0x41712e,_0x2549ad);},'MrKAj':function(_0x3dca5a,_0x107b0a){var _0x41dbc6=_0x3f74;return _0x5a7a38[_0x41dbc6(0x278)](_0x3dca5a,_0x107b0a);}},_0x246fc0=document['creat'+_0xc2da5e(0x39e)+_0xc2da5e(0x515)]('butto'+'n');return _0x246fc0['type']=_0x5a7a38[_0xc2da5e(0x376)],_0x246fc0['class'+_0xc2da5e(0x380)]=_0x5a7a38['kTVgu'],_0x246fc0['setAt'+'tribu'+'te']('role',_0x5a7a38[_0xc2da5e(0x27e)]),_0x246fc0[_0xc2da5e(0x391)+'tribu'+'te'](_0x5a7a38[_0xc2da5e(0xf3)],String(!!_0x35cd52)),_0x246fc0[_0xc2da5e(0x179)+'ck']=_0xee3159=>{var _0x1c176e=_0xc2da5e;_0xee3159[_0x1c176e(0x594)+_0x1c176e(0xf2)+'ation']();var _0x27ba88=_0x57c84b[_0x1c176e(0xd8)](_0x246fc0['getAt'+_0x1c176e(0x155)+'te'](_0x1c176e(0x37e)+'check'+'ed'),_0x1c176e(0x303));_0x246fc0[_0x1c176e(0x391)+_0x1c176e(0x155)+'te'](_0x1c176e(0x37e)+_0x1c176e(0x4c1)+'ed',String(_0x27ba88)),_0x57c84b['MrKAj'](_0x32851a,_0x27ba88);},_0x246fc0;}function _0x6e7621(_0x5ac77e,_0x525e71,_0x1cef5b,_0x312c62,_0x5014ff){var _0x3cc90b=_0x210c27,_0x3996ae=document[_0x3cc90b(0x210)+'eElem'+_0x3cc90b(0x515)]('div');_0x3996ae[_0x3cc90b(0x162)+_0x3cc90b(0x380)]=_0x3cc90b(0x1cf)+_0x3cc90b(0x49e);var _0x388afe=document[_0x3cc90b(0x210)+_0x3cc90b(0x39e)+'ent'](_0x3cc90b(0x132));_0x388afe[_0x3cc90b(0x661)]=_0x2a0c68['prZYQ'],_0x388afe[_0x3cc90b(0x162)+'Name']=_0x2a0c68[_0x3cc90b(0x117)],_0x388afe[_0x3cc90b(0x289)]=_0x525e71,_0x388afe[_0x3cc90b(0x457)]=_0x1cef5b,_0x388afe[_0x3cc90b(0x2f4)]=_0x312c62,_0x388afe['value']=_0x5ac77e;var _0x65ff1c=document[_0x3cc90b(0x210)+'eElem'+_0x3cc90b(0x515)](_0x3cc90b(0x22a));_0x65ff1c[_0x3cc90b(0x162)+'Name']=_0x3cc90b(0x111)+'l',_0x65ff1c[_0x3cc90b(0x3b2)+_0x3cc90b(0x57a)+'t']=_0x2a0c68[_0x3cc90b(0x4b6)](String,_0x5ac77e);var _0x584356=()=>{var _0x1fb9a4=_0x3cc90b;if('ZtLhv'!=='iRMBY')_0x65ff1c[_0x1fb9a4(0x3b2)+_0x1fb9a4(0x57a)+'t']=String(_0x388afe[_0x1fb9a4(0x5af)]),_0x3996ae['style'][_0x1fb9a4(0x203)+'opert'+'y'](_0x2a0c68['TaqGh'],_0x2a0c68['lJIUK'](_0x2a0c68['jOrXv'](_0x2a0c68[_0x1fb9a4(0x3c6)](_0x388afe[_0x1fb9a4(0x5af)],_0x525e71)/(_0x1cef5b-_0x525e71),-0x1b52+-0x2659+-0x1*-0x420f),'%'));else{var _0x314b74=_0x17810d&&(_0x1a4385['messa'+'ge']||_0x9a0297['error']&&_0xf7318f['error'][_0x1fb9a4(0x477)+'ge'])||'unkno'+'wn';if(_0x5a1613&&_0x35c965[_0x1fb9a4(0x34a)+'ame'])_0x314b74+=_0x1fb9a4(0x1c1)+_0x1d7896(_0x4a5621['filen'+_0x1fb9a4(0x473)])['split']('/')[_0x1fb9a4(0x2f9)]()+':'+(_0x4c8bb2[_0x1fb9a4(0x3bd)+'o']||'?');_0x5f27ec['lastE'+_0x1fb9a4(0x438)]=_0x4c3d04(_0x314b74)['slice'](-0x5*0xb5+-0x211+0x59a,-0x1*0xfbf+-0x6a3+-0xbe*-0x1f);}};return _0x388afe[_0x3cc90b(0x505)+'ut']=()=>{var _0x59256f=_0x3cc90b;_0x2a0c68['vIZxe'](_0x584356),_0x2a0c68[_0x59256f(0x4b6)](_0x5014ff,_0x2a0c68[_0x59256f(0x4b6)](Number,_0x388afe['value']));},_0x2a0c68[_0x3cc90b(0x665)](_0x584356),_0x3996ae[_0x3cc90b(0x168)+'d'](_0x388afe,_0x65ff1c),_0x3996ae;}function _0x4a2c0a(_0x1fc530,_0x53eefc){var _0x184b40=_0x210c27,_0x257dec=_0x5a7a38['kpJob']['split']('|'),_0x27acda=-0x71e+0x1939+0x1*-0x121b;while(!![]){switch(_0x257dec[_0x27acda++]){case'0':return _0x419720;case'1':_0x419720[_0x184b40(0x5af)]=/^#[0-9a-f]{6}$/i[_0x184b40(0x13d)](_0x1fc530)?_0x1fc530:'#ff6b'+'9d';continue;case'2':_0x419720[_0x184b40(0x505)+'ut']=()=>_0x53eefc(_0x419720['value']);continue;case'3':_0x419720['class'+_0x184b40(0x380)]=_0x184b40(0x5fa)+_0x184b40(0x655);continue;case'4':var _0x419720=document[_0x184b40(0x210)+'eElem'+_0x184b40(0x515)]('input');continue;case'5':_0x419720[_0x184b40(0x661)]=_0x5a7a38[_0x184b40(0x18c)];continue;}break;}}function _0x1d0fae(_0x48537f,_0x3d7355,_0x34c026){var _0x5a1840=_0x210c27,_0x386bda=document[_0x5a1840(0x210)+_0x5a1840(0x39e)+_0x5a1840(0x515)](_0x5a1840(0x3c4)+'t');_0x386bda[_0x5a1840(0x162)+_0x5a1840(0x380)]=_0x5a1840(0x143)+'eld';for(var [_0x2a7194,_0x2ca3fa]of _0x3d7355){if(_0x5a7a38[_0x5a1840(0x2ed)]!==_0x5a1840(0x528)){var _0x8bedd3=document[_0x5a1840(0x210)+_0x5a1840(0x39e)+_0x5a1840(0x515)](_0x5a1840(0x295)+'n');_0x8bedd3['value']=_0x2a7194,_0x8bedd3['textC'+'onten'+'t']=_0x2ca3fa,_0x386bda[_0x5a1840(0x168)+_0x5a1840(0x347)+'d'](_0x8bedd3);}else{var _0x3b47d0=_0x57d7de[_0x4e4925];if(_0x3b47d0)try{_0x3b47d0[_0x5a1840(0xd9)+'ed']=!!_0x2b7564;}catch(_0x470d92){}}}return _0x386bda[_0x5a1840(0x5af)]=_0x48537f,_0x386bda[_0x5a1840(0x271)+'nge']=()=>_0x34c026(_0x386bda['value']),_0x386bda;}function _0xb6e79d(_0x3f24e1,_0x5302b7){var _0x1735e9=_0x210c27,_0x3eae4f={'igalv':function(_0x1d03f2,_0x5c0fa4){var _0x2d9a4c=_0x3f74;return _0x5a7a38[_0x2d9a4c(0x23a)](_0x1d03f2,_0x5c0fa4);},'FYWhR':function(_0x27ba29){return _0x27ba29();}};if(_0x5a7a38[_0x1735e9(0x520)](_0x1735e9(0x4a1),'dBIzV'))return-0x1*0x1f1+-0x5*-0x553+-0x12*0x15f;else{var _0x162377=document[_0x1735e9(0x210)+'eElem'+'ent'](_0x1735e9(0x5b0)+'n');return _0x162377[_0x1735e9(0x661)]=_0x1735e9(0x5b0)+'n',_0x162377['class'+_0x1735e9(0x380)]=_0x5a7a38['sMdSS'],_0x162377[_0x1735e9(0x3b2)+_0x1735e9(0x57a)+'t']=_0x3f24e1,_0x162377[_0x1735e9(0x179)+'ck']=_0x40638a=>{var _0x5c3d3e=_0x1735e9,_0x223540={'FlKBO':function(_0xd4264d,_0x2922b5){return _0x3eae4f['igalv'](_0xd4264d,_0x2922b5);},'eYxVq':_0x5c3d3e(0x4fa)};_0x5c3d3e(0x592)!==_0x5c3d3e(0x592)?_0x298806[_0x5c3d3e(0x1e1)+_0x5c3d3e(0x363)+_0x5c3d3e(0x574)+'r'](_0x223540[_0x5c3d3e(0x416)],_0x6a35fa=>{var _0x35d7f1=_0x5c3d3e;try{var _0x304af7=_0x6a35fa&&(_0x6a35fa[_0x35d7f1(0x477)+'ge']||_0x6a35fa[_0x35d7f1(0x4fa)]&&_0x6a35fa[_0x35d7f1(0x4fa)][_0x35d7f1(0x477)+'ge'])||'unkno'+'wn';if(_0x6a35fa&&_0x6a35fa[_0x35d7f1(0x34a)+'ame'])_0x304af7+=_0x223540['FlKBO'](_0x223540['FlKBO'](_0x35d7f1(0x1c1),_0x5f3f3f(_0x6a35fa[_0x35d7f1(0x34a)+'ame'])[_0x35d7f1(0x158)]('/')['pop']())+':',_0x6a35fa['linen'+'o']||'?');_0x3a5a73[_0x35d7f1(0x24a)+'rror']=_0x470c67(_0x304af7)['slice'](-0xcbb+0x5d0+0x6eb,-0xade*0x3+-0x6ab+0x27e5);}catch(_0x55001c){}}):(_0x40638a[_0x5c3d3e(0x594)+_0x5c3d3e(0xf2)+_0x5c3d3e(0x302)](),_0x3eae4f['FYWhR'](_0x5302b7));},_0x162377;}}function _0x5ad44e(_0x9b8f46,_0x49ca86,_0x38721e){var _0x4a5e73=_0x210c27,_0x33657a=document[_0x4a5e73(0x210)+'eElem'+'ent'](_0x4a5e73(0x3f0));_0x33657a[_0x4a5e73(0x162)+_0x4a5e73(0x380)]=_0x4a5e73(0x16c)+'l';var _0x3967f1=document['creat'+_0x4a5e73(0x39e)+_0x4a5e73(0x515)](_0x4a5e73(0x22a));_0x3967f1[_0x4a5e73(0x162)+'Name']=_0x2a0c68['CAPZK'],_0x3967f1[_0x4a5e73(0x3b2)+_0x4a5e73(0x57a)+'t']=_0x9b8f46;if(_0x49ca86){var _0x42b9ed=document[_0x4a5e73(0x210)+'eElem'+_0x4a5e73(0x515)](_0x2a0c68[_0x4a5e73(0x401)]);_0x42b9ed[_0x4a5e73(0x162)+'Name']=_0x2a0c68['tMPoV'],_0x42b9ed['textC'+'onten'+'t']=_0x49ca86,_0x3967f1[_0x4a5e73(0x168)+_0x4a5e73(0x347)+'d'](_0x42b9ed);}return _0x33657a[_0x4a5e73(0x168)+'d'](_0x3967f1,_0x38721e),_0x33657a;}function _0x1cfd81(_0x39c651,_0x160e77){var _0x3ac331=_0x210c27,_0x4326d1=document[_0x3ac331(0x210)+_0x3ac331(0x39e)+'ent'](_0x5a7a38[_0x3ac331(0x5b9)]);return _0x4326d1[_0x3ac331(0x162)+'Name']=_0x5a7a38[_0x3ac331(0x268)]+(_0x160e77?_0x3ac331(0x5da):''),_0x4326d1['textC'+_0x3ac331(0x57a)+'t']=_0x39c651,_0x4326d1;}function _0x5375c9(_0x1b8f9b,_0xa486c3,_0x5dce1b,_0x282d31,_0x2d1c25){var _0x53a948=_0x210c27,_0x2214f4=document['creat'+'eElem'+_0x53a948(0x515)]('div');_0x2214f4[_0x53a948(0x162)+_0x53a948(0x380)]='sk-ca'+'rd'+(_0x5dce1b?_0x5a7a38['fLdaY']:'');var _0xd6b79e=document['creat'+_0x53a948(0x39e)+_0x53a948(0x515)](_0x53a948(0x3f0));_0xd6b79e[_0x53a948(0x162)+_0x53a948(0x380)]=_0x5a7a38['ODtCd'];var _0xce5dac=document['creat'+_0x53a948(0x39e)+'ent'](_0x53a948(0x3f0));_0xce5dac[_0x53a948(0x162)+_0x53a948(0x380)]=_0x53a948(0x624)+_0x53a948(0x25c)+'tle';var _0x5770d9=document['creat'+'eElem'+_0x53a948(0x515)]('stron'+'g');_0x5770d9[_0x53a948(0x3b2)+_0x53a948(0x57a)+'t']=_0x1b8f9b,_0xce5dac[_0x53a948(0x168)+'dChil'+'d'](_0x5770d9);if(_0x282d31){var _0x5435ae=_0x5a7a38['ZBmkM'](_0x2a99c3,_0x5dce1b,_0x3bb3aa=>{var _0x3326fb=_0x53a948;_0x2214f4[_0x3326fb(0x162)+'List']['toggl'+'e']('on',_0x3bb3aa),_0x2a0c68[_0x3326fb(0x42b)](_0x282d31,_0x3bb3aa);});_0xd6b79e[_0x53a948(0x168)+'d'](_0xce5dac,_0x5435ae);}else _0xd6b79e['appen'+'dChil'+'d'](_0xce5dac);_0x2214f4['appen'+_0x53a948(0x347)+'d'](_0xd6b79e);if(_0x2d1c25&&_0x2d1c25[_0x53a948(0x2b4)+'h']){var _0x55eb74=('6|4|1'+'|0|2|'+_0x53a948(0x29c))[_0x53a948(0x158)]('|'),_0xe4f53e=-0x21*0x22+0x71*0x1+0x3f1;while(!![]){switch(_0x55eb74[_0xe4f53e++]){case'0':_0x3489be[_0x53a948(0x162)+'Name']=_0x5a7a38[_0x53a948(0x236)];continue;case'1':var _0x3489be=document[_0x53a948(0x210)+'eElem'+_0x53a948(0x515)]('div');continue;case'2':_0x3489be[_0x53a948(0x3b2)+_0x53a948(0x57a)+'t']=_0xa486c3;continue;case'3':_0x2214f4['appen'+_0x53a948(0x347)+'d'](_0x21d66a);continue;case'4':_0x21d66a[_0x53a948(0x162)+'Name']='sk-mb'+_0x53a948(0x2a7);continue;case'5':_0x21d66a[_0x53a948(0x168)+_0x53a948(0x347)+'d'](_0x3489be);continue;case'6':var _0x21d66a=document[_0x53a948(0x210)+'eElem'+'ent'](_0x5a7a38[_0x53a948(0x5b9)]);continue;case'7':for(var _0x41e25c of _0x2d1c25)_0x21d66a['appen'+_0x53a948(0x347)+'d'](_0x41e25c);continue;}break;}}return _0x2214f4;}var _0x1687a2=[{'id':_0x210c27(0x44d)+'t','label':_0x210c27(0x2bc)+'t'},{'id':_0x5a7a38[_0x210c27(0x470)],'label':_0x5a7a38[_0x210c27(0x274)]},{'id':'visua'+'l','label':'Visua'+'l'},{'id':_0x5a7a38[_0x210c27(0x463)],'label':_0x210c27(0x4a9)},{'id':_0x210c27(0x3dd),'label':_0x5a7a38['dUzZX']}];function _0x39959d(){var _0x2cde56=_0x210c27,_0x231bd4={'fMYTU':_0x5a7a38[_0x2cde56(0x615)]},_0x2d0c00=_0x2ed664[_0x2cde56(0x5f7)+'ode']?_0x5a7a38['TvTyj']:_0x2ed664['uwmk']?_0x5a7a38['oXYmc'](_0x5a7a38[_0x2cde56(0x4e0)](_0x5a7a38[_0x2cde56(0x23a)](_0x5a7a38[_0x2cde56(0x4cd)],_0x2ed664['hooks'+_0x2cde56(0x4a2)]?_0x5a7a38['VpKon'](_0x2ed664[_0x2cde56(0x356)+'Ok']+'/'+_0x2ed664['hooks'+_0x2cde56(0x4a2)],_0x5a7a38[_0x2cde56(0x1ac)]):_0x5a7a38[_0x2cde56(0x21e)]),_0x2cde56(0x499)+_0x2cde56(0x59a))+(_0x2ed664['gameL'+'oaded']?_0x2cde56(0x524)+'d':_0x5a7a38[_0x2cde56(0x14e)])+_0x5a7a38[_0x2cde56(0x245)],_0x2ed664[_0x2cde56(0x3f9)+_0x2cde56(0x640)]?_0x2cde56(0x194):'none')+_0x5a7a38['yoEUd']+(_0x2ed664[_0x2cde56(0x508)+_0x2cde56(0x5d3)]?_0x5a7a38[_0x2cde56(0x63d)]:_0x5a7a38[_0x2cde56(0x53a)]):_0x5a7a38['OJvEe'];if(_0x2ed664[_0x2cde56(0x24a)+_0x2cde56(0x438)])_0x2d0c00+=_0x5a7a38[_0x2cde56(0x220)]('\x20|\x20ER'+_0x2cde56(0x50c),_0x2ed664[_0x2cde56(0x24a)+'rror']);return _0x5a7a38[_0x2cde56(0x595)](_0x5375c9,_0x5a7a38[_0x2cde56(0x232)],_0x2d0c00,_0x2ed664[_0x2cde56(0x4cf)],null,[_0x5a7a38['uOKAW'](_0x5ad44e,_0x2cde56(0x2d4)+_0x2cde56(0x64c)+_0x2cde56(0x196),'calls'+_0x2cde56(0xf4)+_0x2cde56(0x622)+_0x2cde56(0x18e)+_0x2cde56(0x459)+_0x2cde56(0x4b9)+_0x2cde56(0x493)+'arget'+'Frame'+_0x2cde56(0x21f),_0x5a7a38[_0x2cde56(0x346)](_0xb6e79d,_0x5a7a38['hvcAn'],()=>{var _0x3fbe5d=_0x2cde56;if(_0x231bd4[_0x3fbe5d(0x218)]!==_0x231bd4['fMYTU'])_0x4fc2b8[_0x3fbe5d(0x378)+'aptur'+'e']=_0x198d25,_0x5a7567();else try{if(_0x351996)_0x351996['call']('Unity'+_0x3fbe5d(0x562)+'e.App'+'licat'+_0x3fbe5d(0x544),'set_t'+_0x3fbe5d(0x13b)+_0x3fbe5d(0x174)+_0x3fbe5d(0x21f),[0x1*0xdab+0x607*-0x6+0x176f*0x1]);}catch(_0x3bd568){}}))]);}function _0x535511(_0xe4211c){var _0x37fa37=_0x210c27,_0x36deea={'Amolw':function(_0x49e6c3,_0x6b82f6){return _0x49e6c3!==_0x6b82f6;},'BYStt':function(_0x4ed6a6){var _0x1e5245=_0x3f74;return _0x2a0c68[_0x1e5245(0x50d)](_0x4ed6a6);},'uFyIs':_0x37fa37(0x261),'JTcES':function(_0x508027,_0x5b3e84){return _0x508027!==_0x5b3e84;},'tJTen':_0x2a0c68['RoMug'],'Itlba':function(_0x2c2239){var _0x56e588=_0x37fa37;return _0x2a0c68[_0x56e588(0x17b)](_0x2c2239);},'vERSw':function(_0x2c63ce){return _0x2c63ce();},'axImI':function(_0x4e7d04){return _0x2a0c68['dFvtQ'](_0x4e7d04);},'bqeco':function(_0x1db5f4){return _0x1db5f4();},'KtqmV':function(_0x5ae421,_0x8cf310){return _0x5ae421===_0x8cf310;},'WviVD':function(_0x5b3979,_0x1e754e){return _0x2a0c68['cgLeP'](_0x5b3979,_0x1e754e);},'UrJgW':_0x2a0c68['ZeLLI'],'QrHkS':_0x2a0c68['noFQJ'],'yYNuu':function(_0xde025f){return _0xde025f();}};if(_0xe4211c===_0x37fa37(0x44d)+'t')return[_0x2a0c68[_0x37fa37(0x1b1)](_0x39959d),_0x2a0c68[_0x37fa37(0x5ac)](_0x5375c9,'God\x20M'+_0x37fa37(0x137),_0x37fa37(0x54b)+_0x37fa37(0x46c)+_0x37fa37(0x3da)+_0x37fa37(0x2de)+_0x37fa37(0x1b5)+_0x37fa37(0x4bf)+_0x37fa37(0x40e)+_0x37fa37(0x5ab)+_0x37fa37(0x5ea)+'.Loca'+_0x37fa37(0x197)+'\x20so\x20n'+_0x37fa37(0xd3)+_0x37fa37(0x58f)+_0x37fa37(0x4df)+_0x37fa37(0x4d9)+'ill\x20y'+_0x37fa37(0x4b5),_0x1e456d[_0x37fa37(0x479)],_0x5ae94e=>{var _0xd9b19b=_0x37fa37;_0x1e456d[_0xd9b19b(0x479)]=_0x5ae94e,_0x316386(),_0x2a0c68[_0xd9b19b(0x1b9)](_0x4ec127,_0x2a0c68['VByFV'],_0x5ae94e),_0x4ec127(_0x2a0c68[_0xd9b19b(0x33d)],_0x5ae94e);},[]),_0x2a0c68[_0x37fa37(0x3a3)](_0x5375c9,_0x37fa37(0x552)+'coil',_0x2a0c68['opdnP'],_0x1e456d[_0x37fa37(0x5e8)+'oil'],_0x244583=>{var _0x34a82f=_0x37fa37;_0x36deea[_0x34a82f(0x297)]('vqlrJ','vqlrJ')?_0x4d4909['setIt'+'em']('sakur'+_0x34a82f(0x5cb)+'r.ui.'+'v1',_0x1a0733['strin'+_0x34a82f(0x444)](_0x1696a3)):(_0x1e456d['noRec'+_0x34a82f(0x1a8)]=_0x244583,_0x36deea[_0x34a82f(0x110)](_0x316386),_0x4ec127(_0x34a82f(0x5e8)+'oil',_0x244583));},[]),_0x5375c9(_0x37fa37(0x38a)+_0x37fa37(0x21c),_0x2a0c68[_0x37fa37(0x304)],_0x1e456d['noSpr'+'ead'],_0x128ff9=>{_0x1e456d['noSpr'+'ead']=_0x128ff9,_0x316386();},[]),_0x2a0c68['fHMqM'](_0x5375c9,_0x37fa37(0x5bd)+_0x37fa37(0x113)+_0x37fa37(0x359)+']',_0x2a0c68[_0x37fa37(0x37c)],_0x1e456d[_0x37fa37(0x5b4)+_0x37fa37(0x27b)],_0x563fd2=>{var _0xfc5b30=_0x37fa37;_0x1e456d[_0xfc5b30(0x5b4)+'Exp']=_0x563fd2,_0x316386();},[]),_0x2a0c68['AMDKC'](_0x5375c9,_0x2a0c68[_0x37fa37(0x3a2)],_0x37fa37(0x1ef)+'rites'+'\x20Over'+_0x37fa37(0x21d)+_0x37fa37(0xeb)+_0x37fa37(0x3fc)+_0x37fa37(0x4f4)+'annab'+_0x37fa37(0x630)+_0x37fa37(0x502)+_0x37fa37(0x4f8)+'r\x20val'+_0x37fa37(0x2ba)+'s.',_0x1e456d[_0x37fa37(0x112)+_0x37fa37(0x517)],_0x441229=>{var _0x3a6673=_0x37fa37;_0x1e456d[_0x3a6673(0x112)+'eExp']=_0x441229,_0x316386();},[_0x5ad44e('Damag'+_0x37fa37(0x2f0)+'ue',null,_0x6e7621(_0x1e456d['damag'+_0x37fa37(0x60a)+'e'],0x1b55+0xa+0x1*-0x1b55,0x24ed+0x1e16+-0x410f,0x21f*-0x1+0xbca+0xbe*-0xd,_0x23bdb0=>{var _0x1902bc=_0x37fa37,_0x44e7c2={'jzFSs':_0x1902bc(0x578)+'io_','tEEiu':_0x36deea[_0x1902bc(0x288)]};if(_0x36deea[_0x1902bc(0x2c9)](_0x1902bc(0x2eb),_0x36deea[_0x1902bc(0x39f)]))_0x1e456d['damag'+'eValu'+'e']=_0x23bdb0,_0x36deea[_0x1902bc(0x631)](_0x316386);else{if(_0x5c4d0d[_0xb4a9ba]['id']&&_0x42a9c8[_0x40513b]['id'][_0x1902bc(0x66d)+'Of'](_0x44e7c2[_0x1902bc(0x48c)])===-0x5b0+0x3*-0x25f+0xccd)_0x23cb24[_0x2a725a][_0x1902bc(0x5e6)][_0x1902bc(0x4f2)+'ay']=_0x44e7c2['tEEiu'];}}))]),_0x2a0c68[_0x37fa37(0x3a3)](_0x5375c9,'Infin'+_0x37fa37(0x24e)+_0x37fa37(0x4ee)+_0x37fa37(0x1bc),_0x2a0c68['yPvQR'],_0x1e456d['infAm'+_0x37fa37(0x1e2)],_0x1477b2=>{var _0x31cbb8=_0x37fa37;_0x1e456d[_0x31cbb8(0x4ce)+'moExp']=_0x1477b2,_0x316386();},[_0x2a0c68[_0x37fa37(0x55b)](_0x1cfd81,_0x2a0c68[_0x37fa37(0x2a3)])])];if(_0x2a0c68['JCAce'](_0xe4211c,'move')){if(_0x2a0c68[_0x37fa37(0x605)](_0x37fa37(0x2c1),_0x2a0c68['FtRww']))_0x57e907[_0x37fa37(0x40d)+'ck']=_0x170021,_0x36deea['Itlba'](_0x2b79d4);else return[_0x2a0c68['lJKWq'](_0x5375c9,_0x37fa37(0x671),_0x2a0c68['eWkPz'],_0x1e456d[_0x37fa37(0x420)+'Pct']!==0x78d+-0xb*-0x33c+0xe3f*-0x3,null,[_0x5ad44e(_0x2a0c68[_0x37fa37(0x5fd)],_0x2a0c68['xuInk'],_0x6e7621(_0x1e456d[_0x37fa37(0x420)+'Pct'],0x1*0x8f5+0x5f1+-0x75a*0x2,0x1*0x24df+0x13*0x97+-0x4*0xbba,0x2248+-0x215b*0x1+-0xe8,_0x3af33c=>{var _0x306831=_0x37fa37;_0x1e456d['speed'+_0x306831(0x2c2)]=_0x3af33c,_0x36deea['vERSw'](_0x316386);}))]),_0x5375c9(_0x2a0c68[_0x37fa37(0x65a)],_0x37fa37(0x28f)+_0x37fa37(0xf7)+_0x37fa37(0x404)+'.jump'+_0x37fa37(0x496)+_0x37fa37(0x2b5)+_0x37fa37(0x1a1)+'gravi'+_0x37fa37(0x572)+_0x37fa37(0x28d),_0x1e456d[_0x37fa37(0x5bf)+'ct']!==0x1*0x232c+-0xcfe*0x2+-0x8cc||_0x1e456d[_0x37fa37(0x159)+'tyPct']!==0x11cf+0x4*-0x86a+0x103d,null,[_0x5ad44e(_0x2a0c68[_0x37fa37(0x2b7)],null,_0x2a0c68[_0x37fa37(0x456)](_0x6e7621,_0x1e456d['jumpP'+'ct'],-0x1*0x256+0xbe7*0x1+-0x95f*0x1,-0xd70+0x75a*-0x3+0x24aa,0x1*0x70d+-0x19b6+0x12ae,_0x116df3=>{_0x1e456d['jumpP'+'ct']=_0x116df3,_0x36deea['axImI'](_0x316386);})),_0x2a0c68[_0x37fa37(0x397)](_0x5ad44e,_0x37fa37(0x20c)+'ty\x20%','lower'+_0x37fa37(0x319)+'oaty',_0x6e7621(_0x1e456d[_0x37fa37(0x159)+_0x37fa37(0xda)],-0x16bd*-0x1+-0xd4b*-0x1+0x10f*-0x22,-0xef2*0x1+-0x21d7+0x3191,-0xa22+-0x1*-0x1217+-0x1*0x7f0,_0x5d85a7=>{var _0x3348e8=_0x37fa37;_0x3348e8(0x3e5)===_0x2a0c68[_0x3348e8(0xe1)]?(_0x1e456d[_0x3348e8(0x159)+_0x3348e8(0xda)]=_0x5d85a7,_0x2a0c68[_0x3348e8(0x121)](_0x316386)):(_0x3bf153[_0x3348e8(0x4ce)+'moExp']=_0x1199a8,_0x1b190f());}))]),_0x5375c9(_0x2a0c68['EalZm'],_0x2a0c68['JsijK'],_0x1e456d[_0x37fa37(0x1ba)],_0x58760e=>{var _0x515ac6=_0x37fa37;_0x1e456d[_0x515ac6(0x1ba)]=_0x58760e,_0x316386();},[])];}if(_0xe4211c===_0x37fa37(0x648)+'l'){if(_0x2a0c68['JCAce'](_0x37fa37(0x674),'MTnnp'))return[_0x5375c9(_0x2a0c68[_0x37fa37(0x11c)],_0x37fa37(0x2d8)+_0x37fa37(0x564)+_0x37fa37(0x448)+_0x37fa37(0x618)+_0x37fa37(0x5c7)+_0x37fa37(0x314)+'.',_0x1e456d[_0x37fa37(0x1fe)+_0x37fa37(0x542)],_0x382fe8=>{var _0x208ae4=_0x37fa37;_0x1e456d[_0x208ae4(0x1fe)+_0x208ae4(0x542)]=_0x382fe8,_0x316386();},[_0x5ad44e('Posit'+'ion',null,_0x1d0fae(_0x1e456d[_0x37fa37(0x1ed)],[['bl','Botto'+_0x37fa37(0x3b7)+'t'],['br',_0x2a0c68['EhYba']],['ml',_0x37fa37(0x2dd)+'middl'+'e']],_0x47e277=>{_0x1e456d['ksPos']=_0x47e277,_0x316386();})),_0x5ad44e(_0x2a0c68['djeFg'],null,_0x2a0c68['lJKWq'](_0x6e7621,_0x1e456d[_0x37fa37(0x4aa)+'le'],0x1180+-0x29+-0xc1*0x17+0.6,0x266f*0x1+-0x10*-0x149+-0x3afe+0.6000000000000001,0x12b5*-0x1+0xe46+0x46f+0.05,_0x21b8bc=>{_0x1e456d['ksSca'+'le']=_0x21b8bc,_0x2a0c68['lyvEC'](_0x316386);})),_0x2a0c68['LNepB'](_0x5ad44e,_0x37fa37(0x164)+'eadou'+'t',null,_0x2a99c3(_0x1e456d[_0x37fa37(0x4c5)],_0x567b4f=>{var _0x3cc3b8=_0x37fa37;if(_0x2a0c68['GYaZA'](_0x2a0c68[_0x3cc3b8(0x45e)],_0x3cc3b8(0x357)))_0x1e456d[_0x3cc3b8(0x4c5)]=_0x567b4f,_0x316386();else try{_0x481927[_0x3cc3b8(0x45f)][_0x3cc3b8(0x168)+'dChil'+'d'](_0x13abc3);}catch(_0x2f0e54){}}))]),_0x5375c9(_0x2a0c68[_0x37fa37(0x2be)],_0x37fa37(0x248)+_0x37fa37(0x16d)+'ter\x20c'+_0x37fa37(0x673)+_0x37fa37(0x266),_0x1e456d[_0x37fa37(0x10e)+_0x37fa37(0x3e6)],_0x49a291=>{var _0x5322ed=_0x37fa37;_0x1e456d[_0x5322ed(0x10e)+_0x5322ed(0x3e6)]=_0x49a291,_0x36deea[_0x5322ed(0x2ae)](_0x316386);},[_0x5ad44e('Size',null,_0x2a0c68[_0x37fa37(0x10a)](_0x6e7621,_0x1e456d['chSiz'+'e'],-0xfb7+-0x15c4+0x5*0x77f+0.5,-0x1b7*0xb+0x2fc+0xfe3*0x1+0.5,0x2176+-0x3*-0x5e2+-0x331c+0.1,_0x46b038=>{var _0x498647=_0x37fa37;_0x2a0c68[_0x498647(0x29d)](_0x498647(0x30b),_0x498647(0x30b))?(_0x42942d['damag'+_0x498647(0x517)]=_0x2dc050,_0x479af1()):(_0x1e456d[_0x498647(0x534)+'e']=_0x46b038,_0x316386());})),_0x2a0c68[_0x37fa37(0x4bc)](_0x5ad44e,_0x37fa37(0x5cd),null,_0x2a0c68[_0x37fa37(0x490)](_0x4a2c0a,_0x1e456d[_0x37fa37(0x5f6)+'or'],_0x58f1a2=>{var _0x13eab0=_0x37fa37;_0x1e456d[_0x13eab0(0x5f6)+'or']=_0x58f1a2,_0x2a0c68['Wurke'](_0x316386);}))]),_0x2a0c68[_0x37fa37(0x32b)](_0x5375c9,_0x37fa37(0x57d)+'ers','FPS\x20o'+_0x37fa37(0x65b)+'y.',_0x1e456d['fps'],null,[_0x2a0c68['ngLQT'](_0x5ad44e,'FPS\x20c'+_0x37fa37(0x5a8)+'r',null,_0x2a0c68['RqYIa'](_0x2a99c3,_0x1e456d[_0x37fa37(0x13a)],_0x5dfede=>{_0x1e456d['fps']=_0x5dfede,_0x2a0c68['JSGyx'](_0x316386);})),_0x1cfd81('No\x20en'+_0x37fa37(0x54d)+'ounte'+_0x37fa37(0x54f)+'is\x20bu'+_0x37fa37(0x3df)+_0x37fa37(0x5a9)+_0x37fa37(0x315)+_0x37fa37(0x128)+'ePlay'+'ers\x20t'+_0x37fa37(0x34c)+_0x37fa37(0xf5)+'k\x20on.')])];else{var _0x22f516=_0x1631b5[_0x1ed635]||[],_0x51f659=_0x251366[_0x37fa37(0x657)]();while(_0x22f516[_0x37fa37(0x2b4)+'h']&&_0x51f659-_0x22f516[-0xc1*0x27+0x44*0x1+0x1d23]>0x10ac+-0x14ed+0x829)_0x22f516[_0x37fa37(0x636)]();return _0x22f516[_0x37fa37(0x2b4)+'h'];}}if(_0xe4211c===_0x2a0c68['iBugm'])return[_0x2a0c68['KQiML'](_0x5375c9,_0x37fa37(0x59b)+'ck',_0x37fa37(0xd6)+_0x37fa37(0x467)+'-io_*'+'\x20bann'+'er\x20sl'+'ots.',_0x1e456d[_0x37fa37(0x40d)+'ck'],_0x1b63aa=>{var _0x226782=_0x37fa37,_0x1a5063={'qrokz':function(_0x3f77b6,_0x5148ee){return _0x3f77b6<_0x5148ee;},'wlnIO':_0x226782(0x675)+'desc','OXqJC':function(_0x5bd60a,_0x5b0582){return _0x36deea['KtqmV'](_0x5bd60a,_0x5b0582);},'HaDAM':'UWMK','FiEih':function(_0x591323,_0x22238a){return _0x591323===_0x22238a;},'uVRxb':function(_0x315d12,_0x3b3e56){var _0x1a49ec=_0x226782;return _0x36deea[_0x1a49ec(0x122)](_0x315d12,_0x3b3e56);},'PzwoX':_0x36deea[_0x226782(0x632)],'GrzaP':function(_0x3f0386,_0x7ca2d0){var _0x409d41=_0x226782;return _0x36deea[_0x409d41(0x122)](_0x3f0386,_0x7ca2d0);},'ZEasB':function(_0x3e1397,_0x44d179){return _0x36deea['WviVD'](_0x3e1397,_0x44d179);},'AljEl':_0x226782(0x161)+'s','pKkPz':'loade'+'d','kipzS':_0x226782(0x3b0)+'ng','eriqe':_0x36deea[_0x226782(0x334)],'kTXjw':_0x36deea['uFyIs']};if('oAjJA'!==_0x226782(0x4b4))_0x1e456d[_0x226782(0x40d)+'ck']=_0x1b63aa,_0x36deea['Itlba'](_0x316386);else{if(!_0x39c2e2)return;var _0x542ed2=_0x2fd424[_0x226782(0x2a9)+_0x226782(0x281)];for(var _0x143489=-0xb9e*-0x3+0x35*-0x1f+-0x1c6f;_0x1a5063[_0x226782(0x462)](_0x143489,_0x542ed2['lengt'+'h']);_0x143489++){var _0x3b4d53=_0x542ed2[_0x143489]['query'+_0x226782(0x3a4)+_0x226782(0x190)](_0x1a5063['wlnIO']);_0x3b4d53&&(_0x1a5063['OXqJC'](_0x3b4d53[_0x226782(0x3b2)+_0x226782(0x57a)+'t'][_0x226782(0x66d)+'Of'](_0x1a5063[_0x226782(0x4e5)]),0x1927+-0x1c*0x136+0x8c1)||_0x1a5063[_0x226782(0x1be)](_0x3b4d53[_0x226782(0x3b2)+_0x226782(0x57a)+'t']['index'+'Of']('SAFE'),0x78c+0x1ec7+-0x2653))&&(_0x3b4d53[_0x226782(0x3b2)+'onten'+'t']=_0x50cef4[_0x226782(0x5f7)+_0x226782(0x137)]?_0x226782(0x1bd)+'MODE\x20'+'-\x20ove'+_0x226782(0xfc)+_0x226782(0x42f)+_0x226782(0x3c5)+_0x226782(0x63a)+_0x226782(0x4a5)+_0x226782(0x171)+'\x20exit'+')':_0x31dfdb[_0x226782(0x4cf)]?_0x1a5063[_0x226782(0x66a)](_0x1a5063[_0x226782(0x66a)](_0x1a5063['uVRxb'](_0x1a5063['PzwoX'],_0x483b55[_0x226782(0x356)+'Total']?_0x1a5063[_0x226782(0x1db)](_0x1a5063[_0x226782(0x10d)](_0xeee8e5[_0x226782(0x356)+'Ok'],'/'),_0x498c29[_0x226782(0x356)+_0x226782(0x4a2)])+_0x1a5063[_0x226782(0x2cc)]:'0\x20hoo'+_0x226782(0x4f6)+'med\x20('+'all\x20o'+_0x226782(0x3ea))+('\x20|\x20ga'+'me\x20'),_0x466bfe[_0x226782(0x625)+_0x226782(0x3b8)]?_0x1a5063[_0x226782(0x413)]:_0x1a5063[_0x226782(0x1a0)])+('\x20|\x20sh'+_0x226782(0x585)+'\x20'),_0x352ae8[_0x226782(0x3f9)+_0x226782(0x640)]?'held':_0x226782(0x261))+_0x1a5063['eriqe']+(_0x477d66[_0x226782(0x508)+'ents']?_0x226782(0x194):_0x1a5063['kTXjw'])+(_0x690367['lastE'+_0x226782(0x438)]?'\x20|\x20ER'+_0x226782(0x50c)+_0x52c18c['lastE'+'rror']:''):_0x226782(0x2b2)+_0x226782(0x4e8)+_0x226782(0x5e2)+'overl'+_0x226782(0x638)+'ly\x20(r'+'einst'+_0x226782(0x1b6)+'he\x20us'+'erscr'+'ipt)');}}},[_0x1cfd81('Takes'+_0x37fa37(0xe4)+_0x37fa37(0x5e9)+'\x20relo'+_0x37fa37(0x19f)+_0x37fa37(0x3b5)+_0x37fa37(0x3eb)+'.')])];return[_0x2a0c68[_0x37fa37(0x10a)](_0x5375c9,_0x2a0c68[_0x37fa37(0x36a)],_0x37fa37(0x3f4)+_0x37fa37(0x59e)+'\x20enti'+'rely\x20'+_0x37fa37(0x5c4)+'WASM\x20'+'hooks'+_0x37fa37(0x340)+_0x37fa37(0x2e4)+'\x20if\x20m'+'atche'+'s\x20won'+_0x37fa37(0x234)+'art.',_0x1e456d[_0x37fa37(0x5f7)+'ode'],_0x33ea9c=>{var _0x27a650=_0x37fa37;_0x1e456d[_0x27a650(0x5f7)+'ode']=_0x33ea9c,_0x36deea[_0x27a650(0x4e7)](_0x316386),location[_0x27a650(0x41a)+'d']();},[_0x2a0c68['JjnKb'](_0x1cfd81,_0x2a0c68[_0x37fa37(0x558)])]),_0x5375c9(_0x2a0c68['jhphN'],_0x37fa37(0x107)+_0x37fa37(0x57e)+'nstal'+'ls\x20a\x20'+_0x37fa37(0x61b)+'tramp'+_0x37fa37(0x370)+'\x20for\x20'+'the\x20w'+_0x37fa37(0x656)+_0x37fa37(0xf9)+_0x37fa37(0x149)+'\x20ALL\x20'+'OFF\x20b'+'y\x20def'+'ault\x20'+_0x37fa37(0x5d6)+_0x37fa37(0x500)+_0x37fa37(0x607)+_0x37fa37(0x3db)+'oes\x20n'+_0x37fa37(0x17f)+_0x37fa37(0x15d)+'he\x20re'+_0x37fa37(0x336)+'thod\x20'+_0x37fa37(0x311)+_0x37fa37(0x189)+'nctio'+_0x37fa37(0x294)+'natur'+_0x37fa37(0x408)+_0x37fa37(0x5c2)+'\x27\x20the'+_0x37fa37(0x286)+_0x37fa37(0x3c9)+_0x37fa37(0x3d8)+_0x37fa37(0x4fe)+'.\x20Tur'+'n\x20the'+'m\x20on\x20'+'one\x20a'+'t\x20a\x20t'+_0x37fa37(0x439)+'reloa'+'d,\x20an'+_0x37fa37(0x3cc)+_0x37fa37(0x5f8)+_0x37fa37(0x5f4)+_0x37fa37(0x481)+'\x20buil'+'d\x20cho'+'kes\x20o'+'n.',_0x1e456d[_0x37fa37(0x10b)+'od']||_0x1e456d[_0x37fa37(0x10b)+_0x37fa37(0x53c)]||_0x1e456d[_0x37fa37(0x4d2)+'oReco'+'il']||_0x1e456d[_0x37fa37(0x378)+_0x37fa37(0x58b)+'e'],_0x3c4cf1=>{var _0xd5fe14=_0x37fa37;if(_0x36deea[_0xd5fe14(0x2f8)]('XcRYQ',_0xd5fe14(0x3e0))){var _0x4fc2ad=_0x34d72a['creat'+'eElem'+_0xd5fe14(0x515)]('optio'+'n');_0x4fc2ad[_0xd5fe14(0x5af)]=_0x4e8b85,_0x4fc2ad['textC'+'onten'+'t']=_0x570318,_0x2ab638[_0xd5fe14(0x168)+'dChil'+'d'](_0x4fc2ad);}else{var _0x18d799=(_0xd5fe14(0x26a)+'|1|4|'+'2')[_0xd5fe14(0x158)]('|'),_0xea0e6c=-0x5cb+0x5f+0x56c;while(!![]){switch(_0x18d799[_0xea0e6c++]){case'0':_0x1e456d[_0xd5fe14(0x10b)+'odDie']=_0x3c4cf1;continue;case'1':_0x1e456d['hookC'+'aptur'+'e']=_0x3c4cf1;continue;case'2':location['reloa'+'d']();continue;case'3':_0x1e456d[_0xd5fe14(0x10b)+'od']=_0x3c4cf1;continue;case'4':_0x36deea[_0xd5fe14(0x4e7)](_0x316386);continue;case'5':_0x1e456d[_0xd5fe14(0x4d2)+_0xd5fe14(0x36f)+'il']=_0x3c4cf1;continue;}break;}}},[_0x1cfd81(_0x2a0c68[_0x37fa37(0x1d3)]),_0x2a0c68[_0x37fa37(0x103)](_0x5ad44e,'god\x20('+_0x37fa37(0x318)+'th.In'+'itiat'+_0x37fa37(0x614)+'Healt'+'h)',null,_0x2a99c3(_0x1e456d[_0x37fa37(0x10b)+'od'],_0x5349cc=>{var _0x49c183=_0x37fa37;_0x36deea['Amolw'](_0x49c183(0x402),'uXXHZ')?(_0x51b5b6[_0x49c183(0x5f6)+'or']=_0x3a7d19,_0x3af485()):(_0x1e456d['hookG'+'od']=_0x5349cc,_0x316386());})),_0x2a0c68[_0x37fa37(0x103)](_0x5ad44e,_0x2a0c68[_0x37fa37(0x2c6)],null,_0x2a99c3(_0x1e456d['hookG'+'odDie'],_0x92c621=>{var _0x595bf9=_0x37fa37;_0x1e456d[_0x595bf9(0x10b)+_0x595bf9(0x53c)]=_0x92c621,_0x316386();})),_0x5ad44e(_0x37fa37(0x5e8)+_0x37fa37(0x3c0)+_0x37fa37(0x19d)+_0x37fa37(0x118)+_0x37fa37(0x418)+_0x37fa37(0x5bb),null,_0x2a99c3(_0x1e456d[_0x37fa37(0x4d2)+'oReco'+'il'],_0x1b5b6f=>{var _0x52d023=_0x37fa37;_0x1e456d['hookN'+_0x52d023(0x36f)+'il']=_0x1b5b6f,_0x316386();})),_0x5ad44e(_0x2a0c68[_0x37fa37(0x18b)],_0x37fa37(0x2e7)+_0x37fa37(0xc9)+_0x37fa37(0x4e1)+_0x37fa37(0x621)+'ut\x20th'+'is',_0x2a99c3(_0x1e456d[_0x37fa37(0x378)+'aptur'+'e'],_0x3b2cdc=>{var _0xe16c2d=_0x37fa37;_0x2a0c68[_0xe16c2d(0x34d)]===_0x2a0c68['FSSZN']?(_0x2b370c[_0xe16c2d(0x1fe)+_0xe16c2d(0x542)]=_0x4e0bb1,_0x36deea['Itlba'](_0x5e8ca1)):(_0x1e456d[_0xe16c2d(0x378)+_0xe16c2d(0x58b)+'e']=_0x3b2cdc,_0x316386());}))]),_0x2a0c68['CJEkR'](_0x5375c9,'ACTk\x20'+_0x37fa37(0x545)+'r',_0x2a0c68['twQMs'],_0x1e456d['actkK'+'ill'],_0x59d8df=>{var _0x56afc5=_0x37fa37;_0x1e456d[_0x56afc5(0x5ca)+_0x56afc5(0x468)]=_0x59d8df,_0x316386();},[_0x1cfd81(_0x2a0c68[_0x37fa37(0x180)],!![])]),_0x2a0c68[_0x37fa37(0x3a7)](_0x5375c9,_0x37fa37(0x4ed)+'r','These'+_0x37fa37(0x603)+_0x37fa37(0x4cb)+'ver-v'+_0x37fa37(0x128)+_0x37fa37(0xdb)+_0x37fa37(0x337),!![],null,[_0x5ad44e('Wipe\x20'+_0x37fa37(0x3a9)+'tting'+'s',null,_0xb6e79d(_0x37fa37(0x31f),()=>{var _0x59b9c4=_0x37fa37;_0x1e456d={..._0x5e00a0},_0x316386(),location[_0x59b9c4(0x41a)+'d']();}))])];}var _0x3b9f9a=null;function _0x82e0b(_0x590574){var _0x4d585b=_0x210c27;_0x2c2942=_0x590574;if(!_0x3b9f9a){var _0x2dce1e=_0x2a0c68[_0x4d585b(0x3e3)]['split']('|'),_0x23edda=-0x163b+0x1208+-0x433*-0x1;while(!![]){switch(_0x2dce1e[_0x23edda++]){case'0':_0x3b9f9a=_0x56738a();continue;case'1':var _0x434438=document[_0x4d585b(0x210)+'eElem'+_0x4d585b(0x515)](_0x2a0c68['ezjDF']);continue;case'2':_0x524e41[_0x4d585b(0x168)+_0x4d585b(0x347)+'d'](_0x3b9f9a);continue;case'3':_0x434438['textC'+'onten'+'t']=_0x513f26;continue;case'4':_0x2a0c68[_0x4d585b(0x445)](requestAnimationFrame,()=>_0x3b9f9a[_0x4d585b(0x162)+_0x4d585b(0x1cb)][_0x4d585b(0x16f)](_0x4d585b(0x1fc)));continue;case'5':_0x524e41['appen'+'dChil'+'d'](_0x434438);continue;}break;}}_0x3b9f9a['class'+_0x4d585b(0x1cb)]['toggl'+'e'](_0x2a0c68[_0x4d585b(0x58d)],_0x590574);}function _0x19dbcd(){_0x5a7a38['TaNyy'](_0x82e0b,!_0x2c2942);}function _0x56738a(){var _0x37ce92=_0x210c27,_0x5c7853={'fARTO':function(_0x1c1f59,_0x5050d6){return _0x1c1f59+_0x5050d6;},'UgIiq':_0x37ce92(0x5b0)+'n','Olsih':_0x2a0c68[_0x37ce92(0x612)],'lzsBS':'aria-'+'check'+'ed','uhyPw':function(_0x25a657,_0x25546c){return _0x25a657(_0x25546c);},'vmYVF':_0x37ce92(0x17e),'jjHWa':_0x2a0c68[_0x37ce92(0x41b)],'OilIs':function(_0x5d6e8d,_0x322074){return _0x5d6e8d===_0x322074;},'kqzrh':_0x37ce92(0x296),'oUfzX':_0x37ce92(0x2cf),'ZCfSk':function(_0x428610,_0x33b017){return _0x2a0c68['mKlnP'](_0x428610,_0x33b017);},'LioSS':'SAFE\x20'+_0x37ce92(0x375)+_0x37ce92(0x2cd)+'rlay\x20'+'only,'+'\x20no\x20h'+_0x37ce92(0x63a)+_0x37ce92(0x4a5)+_0x37ce92(0x171)+'\x20exit'+')','DLGFY':'UWMK\x20'+'bound'+'\x20','wopmK':function(_0x2ee938,_0x209e58){return _0x2ee938+_0x209e58;},'LYRQX':_0x37ce92(0x161)+'s','jfmOr':_0x2a0c68[_0x37ce92(0x3b6)],'JBJLS':'loade'+'d','kpyHC':_0x37ce92(0x194),'BSjGj':_0x2a0c68['bFLZY'],'cjPjT':'\x20|\x20mo'+'vemen'+'t\x20'},_0x426a1b=document['creat'+'eElem'+'ent'](_0x37ce92(0x3f0));_0x426a1b[_0x37ce92(0x162)+_0x37ce92(0x380)]=_0x2a0c68['cplXM'];var _0x448c5d=document[_0x37ce92(0x210)+'eElem'+_0x37ce92(0x515)]('nav');_0x448c5d[_0x37ce92(0x162)+'Name']=_0x2a0c68['uOfiY'];var _0x43d775=document[_0x37ce92(0x210)+'eElem'+'ent']('div');_0x43d775['class'+'Name']='mn-lo'+'go',_0x43d775[_0x37ce92(0x3fb)+_0x37ce92(0x1f7)]=_0x2a0c68['bzTCy'],_0x448c5d[_0x37ce92(0x168)+'dChil'+'d'](_0x43d775);var _0x25d146=document[_0x37ce92(0x210)+_0x37ce92(0x39e)+_0x37ce92(0x515)](_0x37ce92(0x3f0));_0x25d146[_0x37ce92(0x162)+_0x37ce92(0x380)]='mn-ma'+'in';var _0x48a6f2=document['creat'+_0x37ce92(0x39e)+'ent']('heade'+'r');_0x48a6f2[_0x37ce92(0x162)+_0x37ce92(0x380)]=_0x2a0c68['qABTm'];var _0x7f479b=document[_0x37ce92(0x210)+'eElem'+_0x37ce92(0x515)](_0x37ce92(0x3f0));_0x7f479b[_0x37ce92(0x162)+_0x37ce92(0x380)]='mn-ti'+'tles';var _0xee0438=document[_0x37ce92(0x210)+'eElem'+_0x37ce92(0x515)]('h2');_0xee0438[_0x37ce92(0x162)+'Name']=_0x2a0c68[_0x37ce92(0x4f1)],_0xee0438['textC'+_0x37ce92(0x57a)+'t']=_0x2a0c68[_0x37ce92(0x43c)];var _0x18b976=document[_0x37ce92(0x210)+_0x37ce92(0x39e)+'ent']('small');_0x18b976[_0x37ce92(0x162)+_0x37ce92(0x380)]='mn-su'+'b',_0x18b976['textC'+'onten'+'t']=_0x37ce92(0x3b9)+_0x37ce92(0x396)+_0x37ce92(0x4e3)+'enu',_0x7f479b[_0x37ce92(0x168)+'d'](_0xee0438,_0x18b976);var _0x315b2f=document[_0x37ce92(0x210)+_0x37ce92(0x39e)+'ent'](_0x2a0c68['HRKkj']);_0x315b2f[_0x37ce92(0x661)]=_0x37ce92(0x5b0)+'n',_0x315b2f[_0x37ce92(0x162)+'Name']=_0x2a0c68['RmzQe'],_0x315b2f[_0x37ce92(0x16b)]=_0x2a0c68['ZEpuJ'],_0x315b2f[_0x37ce92(0x3fb)+_0x37ce92(0x1f7)]=_0x37ce92(0x21a)+_0x37ce92(0x35b)+_0x37ce92(0x47a)+'\x200\x2024'+'\x2024\x22>'+_0x37ce92(0x5d2)+_0x37ce92(0x5dc)+_0x37ce92(0x22f)+_0x37ce92(0x5f9)+_0x37ce92(0x626)+_0x37ce92(0x42c)+_0x37ce92(0x385)+_0x37ce92(0x153),_0x315b2f[_0x37ce92(0x179)+'ck']=()=>_0x82e0b(![]),_0x48a6f2[_0x37ce92(0x168)+'d'](_0x7f479b,_0x315b2f);var _0x2ac145=document['creat'+_0x37ce92(0x39e)+'ent'](_0x37ce92(0x3f0));_0x2ac145[_0x37ce92(0x162)+_0x37ce92(0x380)]=_0x2a0c68[_0x37ce92(0x521)],_0x25d146['appen'+'d'](_0x48a6f2,_0x2ac145),_0x426a1b['appen'+'d'](_0x448c5d,_0x25d146);var _0x9c287b=new Map();for(var _0x2c6a5 of _0x1687a2){if(_0x2a0c68['JCAce']('ZJlhW',_0x2a0c68[_0x37ce92(0x57f)]))try{var _0x535187=_0x2f7198&&(_0x2280ab['messa'+'ge']||_0x19e197['error']&&_0x2b06bd[_0x37ce92(0x4fa)][_0x37ce92(0x477)+'ge'])||_0x2a0c68['DpqKR'];if(_0x223d3b&&_0x1e5438[_0x37ce92(0x34a)+'ame'])_0x535187+=_0x2a0c68[_0x37ce92(0x5db)]+_0x2a0c68[_0x37ce92(0x372)](_0x59d4bf,_0xc58fa8[_0x37ce92(0x34a)+_0x37ce92(0x473)])['split']('/')[_0x37ce92(0x2f9)]()+':'+(_0x1c0bb6[_0x37ce92(0x3bd)+'o']||'?');_0x5466f1[_0x37ce92(0x24a)+_0x37ce92(0x438)]=_0xd75c85(_0x535187)['slice'](0x1*-0xb09+0xef5+0x3ec*-0x1,-0xd2b*0x1+-0x1*0x1327+0x20f2);}catch(_0x1983ed){}else{var _0x4d8dca=_0x2a0c68[_0x37ce92(0x276)]['split']('|'),_0x56dd76=-0x3b*-0x42+0x191+-0x10c7;while(!![]){switch(_0x4d8dca[_0x56dd76++]){case'0':_0x9c287b[_0x37ce92(0x4b8)](_0x2c6a5['id'],_0x4505ad);continue;case'1':_0x4505ad[_0x37ce92(0x3fb)+'HTML']=_0x2a0c68['OkYHy']+_0x2c6a5[_0x37ce92(0x184)]+('</sma'+'ll>');continue;case'2':_0x4505ad[_0x37ce92(0x661)]='butto'+'n';continue;case'3':_0x4505ad[_0x37ce92(0x16b)]=_0x2c6a5['label'];continue;case'4':var _0x4505ad=document['creat'+_0x37ce92(0x39e)+_0x37ce92(0x515)]('butto'+'n');continue;case'5':_0x4505ad[_0x37ce92(0x162)+'Name']=_0x2a0c68['HAETb'];continue;case'6':_0x4505ad['oncli'+'ck']=(_0xee4542=>()=>_0xf6db8d(_0xee4542))(_0x2c6a5['id']);continue;case'7':_0x448c5d[_0x37ce92(0x168)+_0x37ce92(0x347)+'d'](_0x4505ad);continue;}break;}}}function _0xf6db8d(_0x38a2d6){var _0x21fc15=_0x37ce92,_0x1be7ce=(_0x21fc15(0x44a)+'|5|4|'+'1')[_0x21fc15(0x158)]('|'),_0x202efa=0x3de+-0x6c*0x18+-0x2*-0x321;while(!![]){switch(_0x1be7ce[_0x202efa++]){case'0':_0x507806[_0x21fc15(0x536)]=_0x38a2d6;continue;case'1':_0x2ac145['repla'+'ceChi'+'ldren'](..._0x535511(_0x38a2d6));continue;case'2':_0x261fba();continue;case'3':var _0x201462=_0x1687a2['find'](_0x2ec8c1=>_0x2ec8c1['id']===_0x38a2d6)||_0x1687a2[-0x1612+-0x3*0x71c+0x5*0x8ae];continue;case'4':for(var [_0x2dafb6,_0x4c8aee]of _0x9c287b)_0x4c8aee['class'+_0x21fc15(0x1cb)][_0x21fc15(0x2e0)+'e'](_0x21fc15(0x637)+'e',_0x2dafb6===_0x38a2d6);continue;case'5':_0xee0438[_0x21fc15(0x3b2)+'onten'+'t']=_0x5c7853[_0x21fc15(0x5c5)](_0x21fc15(0x672)+_0x21fc15(0xcf)+_0x21fc15(0x2e5),_0x201462[_0x21fc15(0x184)]);continue;}break;}}return _0x2a0c68['guuny'](_0xf6db8d,_0x507806['cat']||_0x2a0c68[_0x37ce92(0x26f)]),_0x2a0c68['BMjtW'](setInterval,()=>{var _0x830d37=_0x37ce92,_0x56b204={'YQaWb':_0x830d37(0x303),'zzGYs':_0x5c7853[_0x830d37(0x2f2)],'EOFEn':function(_0x13c008,_0x60e66c){var _0x4e701a=_0x830d37;return _0x5c7853[_0x4e701a(0xef)](_0x13c008,_0x60e66c);}};if(_0x5c7853['vmYVF']===_0x830d37(0x430)){var _0x1c3b8e=0x45*0x60+-0x225d+-0x29*-0x35;for(var _0x276236 in _0x22c2a6){if(_0x16f9ba[_0x276236]&&_0x469a1b[_0x276236][_0x830d37(0x3f6)+'ed'])_0x1c3b8e++;}_0x1fde9e[_0x830d37(0x356)+'Ok']=_0x1c3b8e;}else{if(!_0x2c2942)return;var _0x32d1e7=_0x2ac145[_0x830d37(0x2a9)+_0x830d37(0x281)];for(var _0x3d50d8=0x67*0x61+0x1a3f*0x1+0x2*-0x20a3;_0x3d50d8<_0x32d1e7[_0x830d37(0x2b4)+'h'];_0x3d50d8++){var _0x52d883=_0x32d1e7[_0x3d50d8][_0x830d37(0x2ac)+'Selec'+'tor'](_0x5c7853[_0x830d37(0x571)]);if(_0x52d883&&(_0x5c7853[_0x830d37(0x2fb)](_0x52d883['textC'+_0x830d37(0x57a)+'t'][_0x830d37(0x66d)+'Of'](_0x5c7853[_0x830d37(0x257)]),0x1*-0x126e+0xd4c+0x522)||_0x5c7853['OilIs'](_0x52d883['textC'+_0x830d37(0x57a)+'t']['index'+'Of'](_0x5c7853['oUfzX']),-0xec1+0x1c33+0x1*-0xd72))){if(_0x5c7853[_0x830d37(0x561)]('rpgUe','rpgUe')){var _0x3093ad=_0x42f4b3['creat'+_0x830d37(0x39e)+_0x830d37(0x515)](_0x5c7853[_0x830d37(0x483)]);return _0x3093ad[_0x830d37(0x661)]=_0x5c7853[_0x830d37(0x483)],_0x3093ad[_0x830d37(0x162)+_0x830d37(0x380)]=_0x830d37(0x52b)+_0x830d37(0x4f9),_0x3093ad[_0x830d37(0x391)+_0x830d37(0x155)+'te'](_0x5c7853['Olsih'],'switc'+'h'),_0x3093ad['setAt'+_0x830d37(0x155)+'te'](_0x830d37(0x37e)+'check'+'ed',_0x1b0fd5(!!_0x23fc71)),_0x3093ad[_0x830d37(0x179)+'ck']=_0x9e6dd7=>{var _0xb43b9a=_0x830d37;_0x9e6dd7['stopP'+_0xb43b9a(0xf2)+'ation']();var _0x5c4335=_0x3093ad[_0xb43b9a(0x461)+_0xb43b9a(0x155)+'te'](_0xb43b9a(0x37e)+'check'+'ed')!==_0x56b204[_0xb43b9a(0x61a)];_0x3093ad['setAt'+'tribu'+'te'](_0x56b204[_0xb43b9a(0x388)],_0x56b204[_0xb43b9a(0x4dd)](_0x3ea228,_0x5c4335)),_0x56b204['EOFEn'](_0x2154d0,_0x5c4335);},_0x3093ad;}else _0x52d883[_0x830d37(0x3b2)+_0x830d37(0x57a)+'t']=_0x2ed664[_0x830d37(0x5f7)+_0x830d37(0x137)]?_0x5c7853['LioSS']:_0x2ed664[_0x830d37(0x4cf)]?_0x5c7853[_0x830d37(0x5c5)](_0x5c7853[_0x830d37(0x5c5)](_0x5c7853['fARTO'](_0x5c7853['DLGFY']+(_0x2ed664[_0x830d37(0x356)+_0x830d37(0x4a2)]?_0x5c7853[_0x830d37(0x2e3)](_0x2ed664['hooks'+'Ok']+'/',_0x2ed664['hooks'+_0x830d37(0x4a2)])+_0x5c7853['LYRQX']:'0\x20hoo'+'ks\x20ar'+_0x830d37(0x374)+_0x830d37(0x1e6)+'ff)')+_0x5c7853[_0x830d37(0x16e)],_0x2ed664[_0x830d37(0x625)+_0x830d37(0x3b8)]?_0x5c7853['JBJLS']:'loadi'+'ng')+('\x20|\x20sh'+_0x830d37(0x585)+'\x20'),_0x2ed664['shoot'+_0x830d37(0x640)]?_0x5c7853['kpyHC']:_0x5c7853[_0x830d37(0x133)])+_0x5c7853[_0x830d37(0x10f)],_0x2ed664[_0x830d37(0x508)+_0x830d37(0x5d3)]?_0x830d37(0x194):'none')+(_0x2ed664[_0x830d37(0x24a)+'rror']?'\x20|\x20ER'+_0x830d37(0x50c)+_0x2ed664[_0x830d37(0x24a)+_0x830d37(0x438)]:''):_0x830d37(0x2b2)+_0x830d37(0x4e8)+_0x830d37(0x5e2)+_0x830d37(0x634)+_0x830d37(0x638)+_0x830d37(0x2ce)+'einst'+'all\x20t'+_0x830d37(0x230)+_0x830d37(0x19a)+'ipt)';}}}},-0x25b3+-0x2082+-0x4a1d*-0x1),_0x426a1b;}var _0x513f26=_0x210c27(0x451)+_0x210c27(0x199)+_0x210c27(0x267)+'l:\x20in'+'itial'+_0x210c27(0x66c)+_0x210c27(0x4f0)+_0x210c27(0x2a5)+_0x210c27(0x5e0)+'ng:\x20b'+_0x210c27(0x328)+_0x210c27(0x600)+'\x20marg'+'in:\x200'+';\x20fon'+'t-fam'+_0x210c27(0x48e)+_0x210c27(0x56f)+_0x210c27(0x20a)+_0x210c27(0x4f5)+_0x210c27(0x312)+_0x210c27(0x1c2)+_0x210c27(0x119)+_0x210c27(0x403)+'s-ser'+_0x210c27(0x3a5)+'\x0a\x20\x20\x20\x20'+_0x210c27(0x4c2)+'anel\x20'+_0x210c27(0x5dd)+'ition'+':\x20abs'+_0x210c27(0x227)+_0x210c27(0x3c8)+'ht:\x202'+_0x210c27(0x34e)+'botto'+'m:\x2024'+'px;\x20w'+_0x210c27(0x495)+'\x20min('+_0x210c27(0x597)+_0x210c27(0x225)+'c(100'+_0x210c27(0x567)+_0x210c27(0x623)+');\x20ma'+'x-hei'+'ght:\x20'+_0x210c27(0x62b)+'80px,'+'\x20calc'+_0x210c27(0x246)+'h\x20-\x204'+_0x210c27(0x3ce)+_0x210c27(0x441)+_0x210c27(0x58e)+_0x210c27(0x19e)+_0x210c27(0x300)+_0x210c27(0x65f)+'p:\x2010'+_0x210c27(0xe7)+_0x210c27(0x148)+_0x210c27(0x598)+_0x210c27(0x554)+'order'+'-radi'+_0x210c27(0x487)+_0x210c27(0xd1)+'point'+_0x210c27(0x1e0)+'ents:'+'\x20auto'+_0x210c27(0x441)+'\x20\x20\x20ba'+_0x210c27(0x27c)+_0x210c27(0x5ef)+_0x210c27(0x341)+_0x210c27(0x49c)+',21,.'+'82);\x20'+_0x210c27(0x4eb)+_0x210c27(0x4c8)+_0x210c27(0x216)+_0x210c27(0x5ce)+_0x210c27(0x426)+'x)\x20sa'+_0x210c27(0x3c7)+'e(150'+_0x210c27(0x551)+'webki'+_0x210c27(0x13f)+_0x210c27(0x1d1)+_0x210c27(0x5fe)+_0x210c27(0x55f)+_0x210c27(0x265)+_0x210c27(0x2fd)+_0x210c27(0x643)+_0x210c27(0x609)+_0x210c27(0x2d0)+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+_0x210c27(0x658)+_0x210c27(0x449)+_0x210c27(0x529)+_0x210c27(0x666)+_0x210c27(0xc3)+_0x210c27(0x506)+'5,255'+_0x210c27(0x247)+',\x20ins'+_0x210c27(0x102)+_0x210c27(0x52f)+_0x210c27(0x3ac)+'(255,'+_0x210c27(0x3c3)+_0x210c27(0x46d)+'5),\x200'+_0x210c27(0x14a)+_0x210c27(0x238)+_0x210c27(0x3ac)+'(0,0,'+_0x210c27(0x26c)+_0x210c27(0x2f7)+_0x210c27(0x425)+'pacit'+'y:\x200;'+'\x20tran'+_0x210c27(0x577)+_0x210c27(0x2da)+_0x210c27(0x59f)+'eY(18'+_0x210c27(0x222)+_0x210c27(0x35c)+_0x210c27(0x1e0)+_0x210c27(0x154)+'\x20none'+_0x210c27(0x11b)+_0x210c27(0x3d0)+_0x210c27(0x22c)+_0x210c27(0x498)+_0x210c27(0x43d)+_0x210c27(0x5d9)+_0x210c27(0x37d)+_0x210c27(0x406)+_0x210c27(0x1f9)+_0x210c27(0x1eb)+_0x210c27(0x52c)+'ezier'+_0x210c27(0x5e7)+'1,.36'+',1);\x0a'+_0x210c27(0x1f8)+_0x210c27(0x12b)+'r:\x20#f'+'6eef2'+';\x20fon'+'t-siz'+'e:\x2013'+'px;\x20}'+_0x210c27(0x451)+'.mn-p'+'anel.'+'shown'+_0x210c27(0x4fd)+_0x210c27(0x317)+_0x210c27(0x2c8)+_0x210c27(0x55d)+'form:'+_0x210c27(0x37a)+';\x20poi'+_0x210c27(0x3e1)+_0x210c27(0x3f5)+_0x210c27(0x25d)+_0x210c27(0x584)+'\x0a\x20\x20\x20\x20'+'.mn-s'+'ide\x20{'+_0x210c27(0x25f)+_0x210c27(0x4d7)+'flex;'+'\x20flex'+'-dire'+_0x210c27(0x405)+':\x20col'+_0x210c27(0x3e2)+'align'+'-item'+_0x210c27(0x327)+'nter;'+'\x20gap:'+_0x210c27(0x51c)+'\x20widt'+'h:\x2062'+'px;\x20f'+'lex:\x20'+_0x210c27(0x35f)+_0x210c27(0x52e)+_0x210c27(0x5b3)+_0x210c27(0x16a)+('0;\x20bo'+_0x210c27(0x5b5)+'radiu'+_0x210c27(0x2d9)+_0x210c27(0x3ec)+_0x210c27(0x1f8)+'backg'+'round'+_0x210c27(0x1c5)+'a(255'+_0x210c27(0x125)+_0x210c27(0x447)+_0x210c27(0x147)+_0x210c27(0x20d)+'shado'+'w:\x20in'+'set\x200'+_0x210c27(0x529)+_0x210c27(0x666)+_0x210c27(0xc3)+'55,25'+'5,255'+_0x210c27(0x5d4)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x210c27(0x4c9)+'ispla'+'y:\x20gr'+_0x210c27(0x5b2)+'lace-'+_0x210c27(0x435)+':\x20cen'+_0x210c27(0x4ef)+_0x210c27(0x386)+_0x210c27(0x17c)+_0x210c27(0x229)+_0x210c27(0x3fe)+_0x210c27(0x3d7)+_0x210c27(0x66c)+_0x210c27(0xd5)+_0x210c27(0x38d)+_0x210c27(0x3dc)+_0x210c27(0x3ee)+_0x210c27(0x599)+'25px;'+'\x20heig'+'ht:\x202'+_0x210c27(0x2f5)+_0x210c27(0x40b)+_0x210c27(0x163)+_0x210c27(0x275)+_0x210c27(0x2c7)+_0x210c27(0x216)+_0x210c27(0x291)+'p-sha'+_0x210c27(0x5e1)+_0x210c27(0x1d0)+_0x210c27(0x14f)+_0x210c27(0x320)+_0x210c27(0xcc)+'157,.'+'8));\x20'+'}\x0a\x20\x20\x20'+_0x210c27(0x55e)+'tab\x20{'+_0x210c27(0x25f)+'lay:\x20'+_0x210c27(0x5f2)+_0x210c27(0x2b1)+_0x210c27(0x45b)+_0x210c27(0x35e)+'enter'+_0x210c27(0x407)+_0x210c27(0x50b)+'conte'+'nt:\x20c'+_0x210c27(0x591)+_0x210c27(0x309)+'th:\x205'+_0x210c27(0xd1)+_0x210c27(0x231)+_0x210c27(0x4b1)+'px;\x20b'+_0x210c27(0x328)+_0x210c27(0xf1)+'borde'+_0x210c27(0x2f3)+_0x210c27(0x62c)+_0x210c27(0x37b)+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+_0x210c27(0x2a8)+_0x210c27(0x576)+_0x210c27(0x58a)+'arent'+';\x20col'+_0x210c27(0x460)+'gba(2'+'46,23'+'8,242'+_0x210c27(0x5c6)+_0x210c27(0x538)+_0x210c27(0x243)+'ointe'+_0x210c27(0x442)+_0x210c27(0x25e)+_0x210c27(0x36b)+'0px;\x20'+'font-'+'weigh'+_0x210c27(0x1c4)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x210c27(0x358)+_0x210c27(0x27f)+_0x210c27(0x4bd)+_0x210c27(0x65e)+':\x20rgb'+_0x210c27(0x2aa)+_0x210c27(0x18a)+'242,.'+'8);\x20}'+_0x210c27(0x451)+'.mn-t'+_0x210c27(0x1b0)+'tive\x20'+'{\x20col'+_0x210c27(0x259)+_0x210c27(0x590)+_0x210c27(0x157)+_0x210c27(0x27c)+'und:\x20'+_0x210c27(0x341)+_0x210c27(0x3f8)+_0x210c27(0x532)+_0x210c27(0x364)+';\x20}\x0a\x20'+_0x210c27(0xd5)+_0x210c27(0x114)+_0x210c27(0x32e)+'lex:\x20'+'1;\x20mi'+_0x210c27(0x49a)+_0x210c27(0x212)+';\x20dis'+_0x210c27(0x2ad)+'\x20flex'+';\x20fle'+'x-dir'+'ectio'+'n:\x20co'+'lumn;'+_0x210c27(0x1a9)+'\x20\x20.mn'+_0x210c27(0x555)+_0x210c27(0x1f2)+_0x210c27(0x2ad)+_0x210c27(0x518)+';\x20ali'+_0x210c27(0x1f6)+_0x210c27(0x44c)+_0x210c27(0x352)+_0x210c27(0x142)+'p:\x2012'+_0x210c27(0xe7)+'addin'+_0x210c27(0x568)+'x\x206px'+_0x210c27(0x5d1)+_0x210c27(0x181)+_0x210c27(0x139)+_0x210c27(0x541)+_0x210c27(0x35f)+_0x210c27(0x1a9)+_0x210c27(0x560)+'-titl'+_0x210c27(0x31c)+_0x210c27(0x344)+'\x201;\x20m'+_0x210c27(0x450)+_0x210c27(0x599)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x210c27(0x371)+_0x210c27(0x5c9)+'t-siz'+_0x210c27(0xee)+'px;\x20f'+_0x210c27(0x4ec)+'eight'+_0x210c27(0x2f6)+_0x210c27(0x66c)+_0x210c27(0xd5)+'n-sub'+_0x210c27(0x2ea)+'nt-si'+_0x210c27(0x36b)+'1px;\x20'+'opaci')+(_0x210c27(0x215)+_0x210c27(0x522)+'\x20\x20\x20\x20.'+'mn-cl'+_0x210c27(0x183)+_0x210c27(0x25f)+_0x210c27(0x4d7)+'grid;'+_0x210c27(0x523)+'e-ite'+_0x210c27(0x35e)+_0x210c27(0x591)+';\x20wid'+'th:\x202'+'8px;\x20'+_0x210c27(0x231)+_0x210c27(0x5c8)+'px;\x20b'+'order'+':\x200;\x20'+_0x210c27(0x4ca)+_0x210c27(0x2f3)+_0x210c27(0x62c)+_0x210c27(0x59d)+_0x210c27(0x54a)+'round'+_0x210c27(0x2da)+_0x210c27(0x1e4)+'ent;\x20'+'color'+':\x20inh'+_0x210c27(0x106)+'\x20opac'+_0x210c27(0x338)+'.45;\x20'+_0x210c27(0x1ce)+_0x210c27(0x2df)+_0x210c27(0x141)+_0x210c27(0x66c)+'\x20\x20\x20.m'+_0x210c27(0x250)+'se:ho'+_0x210c27(0x3de)+_0x210c27(0x427)+'ity:\x20'+_0x210c27(0x1f0)+_0x210c27(0x27c)+_0x210c27(0x5ef)+'rgba('+_0x210c27(0x3c3)+_0x210c27(0x506)+_0x210c27(0x503)+_0x210c27(0x33e)+_0x210c27(0x322)+_0x210c27(0x466)+_0x210c27(0x20f)+'vg\x20{\x20'+_0x210c27(0x386)+_0x210c27(0x368)+'x;\x20he'+_0x210c27(0x3fe)+_0x210c27(0xec)+_0x210c27(0x5f3)+'l:\x20no'+_0x210c27(0x206)+'troke'+_0x210c27(0x5b7)+_0x210c27(0x329)+'olor;'+_0x210c27(0xdd)+'ke-wi'+_0x210c27(0x599)+_0x210c27(0x25a)+_0x210c27(0x18d)+_0x210c27(0x38f)+'ap:\x20r'+'ound;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x210c27(0x563)+_0x210c27(0x350)+'ex:\x201'+_0x210c27(0x66f)+_0x210c27(0x1b3)+'ht:\x200'+';\x20ove'+_0x210c27(0x2f1)+_0x210c27(0x507)+'uto;\x20'+_0x210c27(0x4f2)+'ay:\x20g'+_0x210c27(0x15a)+'grid-'+_0x210c27(0x362)+_0x210c27(0x262)+_0x210c27(0x3ba)+'s:\x20re'+'peat('+'auto-'+'fill,'+_0x210c27(0x30d)+_0x210c27(0x11d)+'0px,\x20'+_0x210c27(0xc0)+_0x210c27(0x213)+_0x210c27(0x1f6)+_0x210c27(0x44c)+_0x210c27(0x633)+';\x20ali'+_0x210c27(0x5c0)+_0x210c27(0x11e)+_0x210c27(0x32a)+'rt;\x20g'+_0x210c27(0x2ff)+'0px;\x20'+'paddi'+_0x210c27(0x62f)+'\x204px\x20'+_0x210c27(0x5ad)+';\x20}\x0a\x20'+_0x210c27(0xd5)+_0x210c27(0x4ff)+'s::-w'+'ebkit'+'-scro'+_0x210c27(0x2bf)+'\x20{\x20wi'+_0x210c27(0x599)+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x210c27(0x55e)+_0x210c27(0xf6)+':-web'+'kit-s'+'croll'+_0x210c27(0x3cb)+_0x210c27(0x1f3)+'{\x20bac'+_0x210c27(0x2a8)+'nd:\x20r'+_0x210c27(0xc3)+_0x210c27(0x506)+_0x210c27(0x411)+_0x210c27(0x38b)+';\x20bor'+_0x210c27(0x3ed)+_0x210c27(0x4f7)+_0x210c27(0x580)+';\x20}\x0a\x20'+_0x210c27(0x2d7)+'k-car'+_0x210c27(0x200)+_0x210c27(0x328)+'-radi'+_0x210c27(0x465)+'2px;\x20'+_0x210c27(0x54a)+_0x210c27(0x4ea)+':\x20rgb'+_0x210c27(0x320)+_0x210c27(0x125)+_0x210c27(0x447)+_0x210c27(0x147)+_0x210c27(0x20d)+_0x210c27(0x36e)+_0x210c27(0x582)+_0x210c27(0x4dc)+_0x210c27(0x529)+_0x210c27(0x666)+'gba(2'+_0x210c27(0x506)+'5,255'+_0x210c27(0x5d4)+_0x210c27(0x66c)+'\x20\x20\x20.s'+_0x210c27(0x1ea)+'d.on\x20'+'{\x20bac'+_0x210c27(0x2a8)+_0x210c27(0x101)+_0x210c27(0xc3)+_0x210c27(0x506)+'5,255'+',.04)'+_0x210c27(0x30f)+'-shad'+_0x210c27(0xdc)+'nset\x20'+_0x210c27(0x646)+_0x210c27(0x570)+_0x210c27(0x341)+'255,1'+_0x210c27(0x532)+_0x210c27(0x5ec)+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ca'+'rd-he'+_0x210c27(0x63c)+_0x210c27(0x4f2))+(_0x210c27(0x2b9)+'lex;\x20'+'align'+_0x210c27(0x361)+_0x210c27(0x327)+'nter;'+_0x210c27(0x3f7)+'\x208px;'+'\x20padd'+'ing:\x20'+'11px\x20'+'12px;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-card'+_0x210c27(0x264)+'e\x20{\x20f'+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x210c27(0x212)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x210c27(0x1ea)+'d-tit'+_0x210c27(0x586)+_0x210c27(0x653)+_0x210c27(0x5c9)+_0x210c27(0x1e3)+_0x210c27(0x29a)+'px;\x20f'+_0x210c27(0x4ec)+_0x210c27(0x627)+_0x210c27(0xcb)+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+_0x210c27(0x596)+_0x210c27(0x2fc)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x210c27(0x1ea)+_0x210c27(0x394)+'.sk-c'+'ard-t'+_0x210c27(0x3d5)+_0x210c27(0x3c2)+_0x210c27(0x332)+_0x210c27(0x1ff)+_0x210c27(0x226)+'0f5;\x20'+_0x210c27(0x608)+'\x20.sk-'+'mbody'+_0x210c27(0x3af)+_0x210c27(0x116)+':\x200\x201'+'2px\x201'+'0px;\x20'+_0x210c27(0x608)+'\x20.sk-'+_0x210c27(0x205)+'\x20{\x20fo'+'nt-si'+'ze:\x201'+_0x210c27(0xbe)+_0x210c27(0x601)+'ty:\x20.'+_0x210c27(0x219)+_0x210c27(0xf8)+'botto'+_0x210c27(0x5be)+_0x210c27(0x649)+_0x210c27(0x322)+_0x210c27(0x16c)+'l\x20{\x20d'+'ispla'+_0x210c27(0x654)+_0x210c27(0x27a)+'lign-'+'items'+':\x20cen'+_0x210c27(0x4ef)+_0x210c27(0x343)+_0x210c27(0x59d)+_0x210c27(0x22d)+_0x210c27(0x124)+'px\x200;'+_0x210c27(0x187)+_0x210c27(0x446)+_0x210c27(0x51b)+_0x210c27(0x2f5)+_0x210c27(0x608)+'\x20.sk-'+_0x210c27(0x184)+_0x210c27(0x350)+_0x210c27(0x56b)+_0x210c27(0x144)+_0x210c27(0x460)+'gba(2'+_0x210c27(0x47f)+_0x210c27(0x596)+_0x210c27(0x40f)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x210c27(0x3a8)+_0x210c27(0x66e)+_0x210c27(0x5aa)+_0x210c27(0x127)+_0x210c27(0x5a4)+'font-'+_0x210c27(0x23e)+_0x210c27(0x3be)+_0x210c27(0x41e)+_0x210c27(0x573)+'\x20.4;\x20'+_0x210c27(0x608)+_0x210c27(0x1c8)+'switc'+_0x210c27(0x201)+'ositi'+'on:\x20r'+'elati'+_0x210c27(0x33c)+_0x210c27(0x495)+'\x2026px'+_0x210c27(0x3ca)+'ght:\x20'+_0x210c27(0x1f4)+'\x20bord'+_0x210c27(0x556)+_0x210c27(0x645)+'der-r'+'adius'+_0x210c27(0x395)+_0x210c27(0x177)+_0x210c27(0x27c)+'und:\x20'+'rgba('+_0x210c27(0x3c3)+_0x210c27(0x506)+'5,.07'+_0x210c27(0x62a)+_0x210c27(0x38e)+'\x20poin'+'ter;\x20'+_0x210c27(0x344)+_0x210c27(0x37a)+_0x210c27(0x66c)+_0x210c27(0x2d7)+_0x210c27(0x4ba)+_0x210c27(0x2ef)+_0x210c27(0x3ae)+_0x210c27(0x331)+_0x210c27(0x11e)+':\x20\x22\x22;'+_0x210c27(0x469)+_0x210c27(0x186)+_0x210c27(0x51a)+_0x210c27(0x310)+_0x210c27(0x4c7)+_0x210c27(0x43b)+_0x210c27(0x351)+':\x203px'+_0x210c27(0x309)+_0x210c27(0x349)+_0x210c27(0x509)+_0x210c27(0x627)+_0x210c27(0x2e9)+_0x210c27(0x645)+_0x210c27(0x3ed)+'adius'+_0x210c27(0x54c)+';\x20bac'+_0x210c27(0x2a8)+_0x210c27(0x101)+_0x210c27(0xc3)+'55,25'+_0x210c27(0x411)+',.25)'+_0x210c27(0x11b)+_0x210c27(0x3d0)+_0x210c27(0x30a)+'eft\x20.'+'2s,\x20b'+_0x210c27(0x47e)+_0x210c27(0x588)+_0x210c27(0x307)+_0x210c27(0x608)+'\x20.sk-'+_0x210c27(0x4d0)+'h[ari'+_0x210c27(0x38c)+'cked='+_0x210c27(0x4c3)+_0x210c27(0x5f0)+'backg'+_0x210c27(0x4ea)+':\x20rgb')+('a(255'+',107,'+_0x210c27(0x1d8)+'25);\x20'+_0x210c27(0x608)+_0x210c27(0x1c8)+_0x210c27(0x4d0)+'h[ari'+'a-che'+'cked='+_0x210c27(0x4c3)+_0x210c27(0xe3)+_0x210c27(0x26e)+_0x210c27(0x46e)+'t:\x2015'+_0x210c27(0x554)+'ackgr'+'ound:'+_0x210c27(0x526)+'b9d;\x20'+_0x210c27(0x608)+'\x20.sk-'+'field'+'\x20{\x20ba'+_0x210c27(0x27c)+'und:\x20'+'rgba('+_0x210c27(0x3c3)+_0x210c27(0x506)+_0x210c27(0x3bf)+_0x210c27(0x2a6)+'order'+_0x210c27(0xf1)+_0x210c27(0x4ca)+'r-rad'+'ius:\x20'+'6px;\x20'+_0x210c27(0x65e)+_0x210c27(0x293)+_0x210c27(0x260)+_0x210c27(0x52e)+_0x210c27(0x5b3)+_0x210c27(0x15c)+_0x210c27(0xdf)+'ont-s'+_0x210c27(0x2c5)+'11.5p'+_0x210c27(0x5ae)+'tline'+_0x210c27(0x191)+_0x210c27(0x1bb)+'x-sha'+_0x210c27(0x41d)+_0x210c27(0x4de)+_0x210c27(0x529)+_0x210c27(0x251)+'\x20rgba'+_0x210c27(0xca)+_0x210c27(0x3c3)+_0x210c27(0x46d)+'5);\x20}'+_0x210c27(0x451)+_0x210c27(0x63b)+_0x210c27(0xc7)+'optio'+'n\x20{\x20b'+'ackgr'+_0x210c27(0x514)+_0x210c27(0x269)+'419;\x20'+_0x210c27(0x608)+_0x210c27(0x1c8)+'range'+'\x20{\x20di'+'splay'+':\x20fle'+_0x210c27(0x428)+_0x210c27(0x57b)+_0x210c27(0x355)+_0x210c27(0x1f5)+_0x210c27(0x15f)+_0x210c27(0x233)+_0x210c27(0x56c)+'\x0a\x20\x20\x20\x20'+_0x210c27(0x146)+'lider'+'\x20{\x20-w'+_0x210c27(0x1fd)+_0x210c27(0x224)+_0x210c27(0x20b)+_0x210c27(0x61e)+'ne;\x20a'+'ppear'+'ance:'+_0x210c27(0x37a)+_0x210c27(0x309)+_0x210c27(0x579)+'0px;\x20'+'heigh'+_0x210c27(0xc1)+'x;\x20ba'+_0x210c27(0x27c)+_0x210c27(0x5ef)+'trans'+_0x210c27(0x22e)+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x210c27(0x1fb)+_0x210c27(0x547)+_0x210c27(0x42a)+_0x210c27(0x433)+'lider'+_0x210c27(0x23b)+_0x210c27(0x182)+'track'+_0x210c27(0x2a4)+_0x210c27(0x3fe)+'\x202px;'+'\x20bord'+_0x210c27(0x26d)+'dius:'+'\x202px;'+_0x210c27(0x2e1)+'groun'+'d:\x20li'+_0x210c27(0x28b)+_0x210c27(0x3a0)+_0x210c27(0x46a)+_0x210c27(0x590)+_0x210c27(0x14d)+'f6b9d'+')\x200\x200'+_0x210c27(0x511)+_0x210c27(0x1fa)+_0x210c27(0x134)+_0x210c27(0x437)+_0x210c27(0x34f)+'repea'+'t,\x20rg'+_0x210c27(0x29e)+'5,255'+',255,'+'.08);'+_0x210c27(0x1a9)+_0x210c27(0x214)+_0x210c27(0x170)+'er::-'+'webki'+_0x210c27(0x50f)+_0x210c27(0x2db)+_0x210c27(0x1f3)+_0x210c27(0x46b)+_0x210c27(0x409)+'appea'+_0x210c27(0x284)+':\x20non'+_0x210c27(0x531)+_0x210c27(0x599)+'6px;\x20'+'heigh'+_0x210c27(0x173)+'x;\x20ma'+'rgin-'+'top:\x20'+_0x210c27(0xe0)+'\x20bord'+_0x210c27(0x26d)+'dius:'+'\x2050%;'+'\x20back'+'groun'+_0x210c27(0x5b6)+_0x210c27(0x4da)+_0x210c27(0x66c)+_0x210c27(0x2d7)+'k-val'+_0x210c27(0x2ea)+_0x210c27(0x25e)+'ze:\x201'+'1px;\x20'+_0x210c27(0x553)+'weigh'+'t:\x2060'+'0;\x20mi'+_0x210c27(0x49a)+_0x210c27(0x423)+_0x210c27(0x59d)+_0x210c27(0x2ec)+'align'+_0x210c27(0x178)+_0x210c27(0x510)+_0x210c27(0x1ff)+_0x210c27(0x3ac)+'(246,'+_0x210c27(0x202)+_0x210c27(0x377)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x210c27(0x5fa)+_0x210c27(0x3aa))+(_0x210c27(0x24b)+'h:\x2034'+_0x210c27(0x509)+'eight'+':\x2022p'+_0x210c27(0x45d)+_0x210c27(0x123)+_0x210c27(0x1a7)+_0x210c27(0x328)+'-radi'+_0x210c27(0x40c)+_0x210c27(0x554)+_0x210c27(0x47e)+_0x210c27(0x514)+'\x20none'+_0x210c27(0x335)+_0x210c27(0x160)+_0x210c27(0x2e8)+'ursor'+_0x210c27(0x3e8)+_0x210c27(0x58c)+_0x210c27(0x1a9)+'\x20\x20.sk'+_0x210c27(0x5b1)+'\x20{\x20fo'+'nt-si'+_0x210c27(0x36b)+_0x210c27(0xbe)+_0x210c27(0x65e)+':\x20rgb'+_0x210c27(0x2aa)+',238,'+_0x210c27(0x34b)+_0x210c27(0xfb)+_0x210c27(0x148)+'g:\x202p'+'x\x200;\x20'+'}\x0a\x20\x20\x20'+_0x210c27(0x1c8)+'note.'+'err\x20{'+'\x20colo'+'r:\x20#f'+_0x210c27(0x4e9)+_0x210c27(0x66c)+_0x210c27(0x2d7)+_0x210c27(0x1dc)+'\x20{\x20al'+_0x210c27(0x270)+'elf:\x20'+_0x210c27(0x476)+'start'+';\x20bor'+_0x210c27(0x4ab)+'0;\x20bo'+_0x210c27(0x5b5)+_0x210c27(0x49d)+'s:\x208p'+_0x210c27(0x61d)+_0x210c27(0x116)+_0x210c27(0x2e9)+_0x210c27(0x3bc)+';\x20bac'+'kgrou'+_0x210c27(0x192)+_0x210c27(0x590)+_0x210c27(0x43e)+_0x210c27(0x5a0)+_0x210c27(0x51f)+_0x210c27(0x187)+_0x210c27(0x446)+_0x210c27(0x51b)+'5px;\x20'+'font-'+'weigh'+_0x210c27(0x1c4)+'0;\x20cu'+_0x210c27(0x38e)+_0x210c27(0x145)+'ter;\x20'+_0x210c27(0x608)+_0x210c27(0x1c8)+_0x210c27(0x33f)+'over\x20'+_0x210c27(0x29b)+'ter:\x20'+_0x210c27(0x3d4)+_0x210c27(0x5a7)+'(1.1)'+_0x210c27(0x66c)+_0x210c27(0x223));window[_0x210c27(0x1e1)+'entLi'+_0x210c27(0x574)+'r'](_0x5a7a38[_0x210c27(0x54e)],_0x58f511=>{var _0x528757=_0x210c27;_0x58f511[_0x528757(0x486)]===_0x2a0c68[_0x528757(0x1d5)]&&(_0x58f511[_0x528757(0xd4)+'ntDef'+_0x528757(0x28c)](),_0x19dbcd());},!![]);var _0x493362=document[_0x210c27(0x210)+'eElem'+'ent']('div');_0x493362[_0x210c27(0x5e6)][_0x210c27(0x2b0)+'xt']=_0x5a7a38[_0x210c27(0x4d3)],_0x493362[_0x210c27(0x3fb)+_0x210c27(0x1f7)]=_0x210c27(0x21a)+'viewB'+'ox=\x220'+_0x210c27(0x41f)+'\x2024\x22>'+'<path'+_0x210c27(0x5dc)+'12\x2021'+_0x210c27(0x546)+_0x210c27(0x5fc)+_0x210c27(0x44b)+_0x210c27(0x5ba)+_0x210c27(0x105)+'.5\x201.'+'8-4.5'+_0x210c27(0x575)+_0x210c27(0x1ae)+'\x204\x204.'+_0x210c27(0x50a)+_0x210c27(0x619)+_0x210c27(0x494)+'.5z\x22\x20'+'fill='+'\x22none'+_0x210c27(0x55c)+_0x210c27(0x53d)+_0x210c27(0x516)+'9d\x22\x20s'+_0x210c27(0x412)+_0x210c27(0xbc)+_0x210c27(0x56d)+_0x210c27(0xdd)+'ke-li'+'necap'+_0x210c27(0x492)+_0x210c27(0x651)+'troke'+'-line'+_0x210c27(0x330)+_0x210c27(0x10c)+_0x210c27(0x644)+_0x210c27(0x130)+'e\x20cx='+'\x2212\x22\x20'+_0x210c27(0x5d0)+'0\x22\x20r='+_0x210c27(0x166)+_0x210c27(0x5a2)+_0x210c27(0x62d)+_0x210c27(0x1df)+'/></s'+'vg>',_0x493362[_0x210c27(0x16b)]=_0x210c27(0x672)+_0x210c27(0xcf)+'r',_0x493362['onmou'+'seent'+'er']=()=>_0x493362['style']['opaci'+'ty']='1',_0x493362[_0x210c27(0x432)+_0x210c27(0x2ca)+'ve']=()=>_0x493362[_0x210c27(0x5e6)]['opaci'+'ty']=_0x210c27(0x3b1),_0x493362[_0x210c27(0x179)+'ck']=_0x365406=>{var _0x2e81dc=_0x210c27;_0x365406['stopP'+_0x2e81dc(0xf2)+_0x2e81dc(0x302)](),_0x5a7a38[_0x2e81dc(0x628)](_0x19dbcd);},document[_0x210c27(0x45f)]['appen'+_0x210c27(0x347)+'d'](_0x493362),_0x5de4a1(),requestAnimationFrame(_0x4061b1),console['log'](_0x5a7a38[_0x210c27(0x381)],_0x2ed664[_0x210c27(0x4cf)]);});})()));
