// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.9.14
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
function _0x2a57(_0x2af46a,_0x2b8b89){_0x2af46a=_0x2af46a-(0x1e36+0x1ec2+-0x3ba0);var _0x46d695=_0x2df4();var _0xa1fd58=_0x46d695[_0x2af46a];if(_0x2a57['WhJmiO']===undefined){var _0x4cc92e=function(_0x3d523e){var _0x252718='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x182157='',_0x25262e='';for(var _0x13ef5c=0x7*-0x3d+0x2*-0xdd8+0x1d5b,_0x29c809,_0x1048f8,_0x8e889d=0x11d4+-0x1*0x1771+-0x3*-0x1df;_0x1048f8=_0x3d523e['charAt'](_0x8e889d++);~_0x1048f8&&(_0x29c809=_0x13ef5c%(0xfbc+0x1265*0x1+-0x221d)?_0x29c809*(-0x85a+-0x171*0x3+0xced)+_0x1048f8:_0x1048f8,_0x13ef5c++%(0xf69*-0x2+0x135*0x16+0x4*0x112))?_0x182157+=String['fromCharCode'](0x7a3+-0x1cec+0x1648&_0x29c809>>(-(0x34*0x95+0xde5*0x1+-0x2c27*0x1)*_0x13ef5c&0xadb+0x1ca2+-0x2777)):0x8d*-0xd+0x1*0x2663+-0x1f3a){_0x1048f8=_0x252718['indexOf'](_0x1048f8);}for(var _0x3274c3=0x7f9*-0x2+0x63d*-0x1+0x162f,_0x53aa7e=_0x182157['length'];_0x3274c3<_0x53aa7e;_0x3274c3++){_0x25262e+='%'+('00'+_0x182157['charCodeAt'](_0x3274c3)['toString'](-0x542*-0x1+-0x13c2+0xe90))['slice'](-(0xc8*0xb+-0x1706+0x1*0xe70));}return decodeURIComponent(_0x25262e);};_0x2a57['oiaRWi']=_0x4cc92e,_0x2a57['EnIvZg']={},_0x2a57['WhJmiO']=!![];}var _0x1095cc=_0x46d695[0x1601+0x3*-0x4bd+-0x7ca],_0x4df96b=_0x2af46a+_0x1095cc,_0x100838=_0x2a57['EnIvZg'][_0x4df96b];return!_0x100838?(_0xa1fd58=_0x2a57['oiaRWi'](_0xa1fd58),_0x2a57['EnIvZg'][_0x4df96b]=_0xa1fd58):_0xa1fd58=_0x100838,_0xa1fd58;}(function(_0x4fda42,_0x4df42c){var _0x584ee4=_0x2a57,_0x33b210=_0x4fda42();while(!![]){try{var _0x46d466=parseInt(_0x584ee4(0x4e0))/(0x8*-0x31f+-0x25e2+0x3edb)*(parseInt(_0x584ee4(0x5fa))/(-0x1ad7*-0x1+0xb00+-0x25d5))+parseInt(_0x584ee4(0x60a))/(-0x3*-0x45+0x985+-0xa51)+-parseInt(_0x584ee4(0x2c9))/(0x6f7*0x3+-0x183a*-0x1+-0x503*0x9)+parseInt(_0x584ee4(0x32a))/(0x1*-0x2573+-0x1119+0x3691)*(parseInt(_0x584ee4(0x5ad))/(0x1831*0x1+-0x1f*-0x117+-0x1cfa*0x2))+-parseInt(_0x584ee4(0x3ba))/(-0x53*-0x16+0x155+-0x870)*(-parseInt(_0x584ee4(0x4ee))/(0xbb*0x8+0x1*0x1150+-0x1720))+-parseInt(_0x584ee4(0x325))/(0x1c7+0x961+-0xb1f)*(-parseInt(_0x584ee4(0x26f))/(0x11b*0x1f+-0x301*0x6+0x567*-0x3))+-parseInt(_0x584ee4(0x2a3))/(-0x1*0x18e9+0x7*-0x385+0x5*0x9eb)*(parseInt(_0x584ee4(0x4a6))/(-0x1dc1+0x12a6+-0x5*-0x23b));if(_0x46d466===_0x4df42c)break;else _0x33b210['push'](_0x33b210['shift']());}catch(_0x236603){_0x33b210['push'](_0x33b210['shift']());}}}(_0x2df4,0xd0f20+-0x43*0x4f8+-0x17425*0x2),((()=>{'use strict';var _0x2732b0=_0x2a57,_0x37e40a={'XgXAb':_0x2732b0(0x4d8),'kCHTq':'Unity'+_0x2732b0(0x27f)+_0x2732b0(0x5ba)+'licat'+'ion','uLgCI':'set_t'+'arget'+'Frame'+_0x2732b0(0x541),'KCgZe':function(_0x2e91db,_0xf764ac){return _0x2e91db!==_0xf764ac;},'ZWWIv':_0x2732b0(0x722),'CNzpV':_0x2732b0(0x45d),'JkjFv':function(_0x33f079,_0x5d4bd4){return _0x33f079===_0x5d4bd4;},'hJlli':_0x2732b0(0x3c3),'BzpdP':'unkno'+'wn','PqTBg':function(_0x1ff581,_0x6b104d){return _0x1ff581+_0x6b104d;},'HtRvk':_0x2732b0(0x510),'iJkUy':function(_0x54d04f,_0x533766){return _0x54d04f(_0x533766);},'Phfbs':function(_0x4b4dfd,_0x2d7911,_0x2e140f){return _0x4b4dfd(_0x2d7911,_0x2e140f);},'rKUtV':'aWqVs','rzTQX':function(_0x195b41,_0xfa931a){return _0x195b41===_0xfa931a;},'lbLJG':_0x2732b0(0x511),'jAqKE':function(_0xcb8caa,_0x25c599){return _0xcb8caa!=_0x25c599;},'llnBt':function(_0x234a43,_0xd5e591){return _0x234a43!==_0xd5e591;},'mGMkH':function(_0x397dc2,_0x41e5fb){return _0x397dc2!==_0x41e5fb;},'jhJFZ':'[saku'+_0x2732b0(0x6cd)+_0x2732b0(0x5db)+_0x2732b0(0x2b2)+_0x2732b0(0x706)+_0x2732b0(0x547),'mKBHK':function(_0x393fee,_0x124d6d){return _0x393fee*_0x124d6d;},'wezBK':'rgba('+_0x2732b0(0x41f)+'07,15'+_0x2732b0(0x16e)+'5)','zjXGt':'700\x20','oZsJE':function(_0x30f367,_0x167c24){return _0x30f367/_0x167c24;},'klRsT':function(_0x4ae361,_0x279438){return _0x4ae361/_0x279438;},'avaXy':_0x2732b0(0x2cd),'Dksck':function(_0x491bdd,_0x494f57,_0xfc7678,_0x4e35ae,_0x19ed02){return _0x491bdd(_0x494f57,_0xfc7678,_0x4e35ae,_0x19ed02);},'praMa':'\x20|\x20ga'+_0x2732b0(0x2b7),'NQbPJ':_0x2732b0(0x504)+_0x2732b0(0x4c4),'wxOYw':function(_0x3f7a83,_0x349a6f){return _0x3f7a83/_0x349a6f;},'ZeCMP':function(_0x1c350e,_0x1e4cae){return _0x1c350e(_0x1e4cae);},'xBObs':function(_0x3aa20e,_0x1549e9){return _0x3aa20e!==_0x1549e9;},'EVnrh':_0x2732b0(0x461),'oZgbb':'aVGSx','zVteP':_0x2732b0(0x51f),'iTLjq':function(_0x5033ab,_0x1bbbf5,_0x59b634,_0x1abf82,_0x10ee06){return _0x5033ab(_0x1bbbf5,_0x59b634,_0x1abf82,_0x10ee06);},'QHVRf':function(_0x4996cf,_0x1fe21b){return _0x4996cf!==_0x1fe21b;},'sntNK':function(_0xa90f06,_0x1a19a8,_0x52e1e3,_0x301ead,_0x12f522){return _0xa90f06(_0x1a19a8,_0x52e1e3,_0x301ead,_0x12f522);},'tzsRf':function(_0x34d9ef,_0x47a245,_0x2681cb,_0x7a3188,_0xb84202){return _0x34d9ef(_0x47a245,_0x2681cb,_0x7a3188,_0xb84202);},'cqNbS':function(_0x5cb03f,_0x446819,_0x5a9dac,_0x5a5d50,_0x4e609c){return _0x5cb03f(_0x446819,_0x5a9dac,_0x5a5d50,_0x4e609c);},'BOWfK':function(_0x2aeef4,_0x2fce41){return _0x2aeef4<_0x2fce41;},'oVyKJ':'i32','UXTnz':function(_0x57ff3c,_0x1fc55d,_0x2271ae,_0x2a0bb7,_0x29ba6c){return _0x57ff3c(_0x1fc55d,_0x2271ae,_0x2a0bb7,_0x29ba6c);},'STdCX':function(_0x494c4d,_0x4ac157,_0x6a4389,_0x29f413,_0x1ab235){return _0x494c4d(_0x4ac157,_0x6a4389,_0x29f413,_0x1ab235);},'xxVcL':'pZlRq','vhVVp':'sk-no'+'te','zztAR':'\x20err','raYXM':function(_0x4f3424,_0x18445e){return _0x4f3424===_0x18445e;},'XvdIx':'rQcFn','PAxvB':_0x2732b0(0x57f),'fGLeu':function(_0xd331f0,_0x29fb29){return _0xd331f0===_0x29fb29;},'gRCpq':'tKoum','ojBGJ':_0x2732b0(0x378),'hRIDj':function(_0x1e1e59,_0x2d2df6){return _0x1e1e59>_0x2d2df6;},'zJJbd':function(_0x8a4d1,_0x578b33){return _0x8a4d1+_0x578b33;},'LbYVu':function(_0x3e1b6e,_0x194769){return _0x3e1b6e+_0x194769;},'vRHUW':_0x2732b0(0x6aa)+_0x2732b0(0x664)+'4|1','jOWex':'mouse'+'up','ddvER':function(_0x514c1e,_0x41352b){return _0x514c1e>_0x41352b;},'TVDJl':_0x2732b0(0x16f),'KiyMa':function(_0x507d17,_0xaf74e4){return _0x507d17!==_0xaf74e4;},'nmGHT':'CANVA'+'S','AQhAX':function(_0x1235f2,_0x3cdc43){return _0x1235f2!==_0x3cdc43;},'PBtLj':_0x2732b0(0x4f6)+'22,8,'+_0x2732b0(0x71e)+'7)','tXwBp':function(_0x5f26a9,_0x1b451a){return _0x5f26a9!==_0x1b451a;},'goLvp':_0x2732b0(0x6c1),'RQltp':function(_0x24276e,_0xa21e51){return _0x24276e-_0xa21e51;},'WbulW':function(_0x44656b,_0x400fc5){return _0x44656b===_0x400fc5;},'wDYPj':function(_0x20ee23,_0x57c597){return _0x20ee23-_0x57c597;},'NuRlf':function(_0x196019,_0x9ef01d){return _0x196019/_0x9ef01d;},'HlryU':function(_0x2360ea,_0x154119){return _0x2360ea-_0x154119;},'Kntbt':function(_0x1bdd3a,_0x3fea82){return _0x1bdd3a+_0x3fea82;},'pkTNA':function(_0x171be3,_0x4895d6,_0x23a682,_0x3ba19d,_0x481950,_0x5704d3,_0x437c1c){return _0x171be3(_0x4895d6,_0x23a682,_0x3ba19d,_0x481950,_0x5704d3,_0x437c1c);},'HmaGL':_0x2732b0(0x398),'UQzdZ':function(_0x576ac5,_0x35f9c3,_0xe8d47f,_0x43b444,_0x1b54b6,_0x12dc63,_0x6ec6bd){return _0x576ac5(_0x35f9c3,_0xe8d47f,_0x43b444,_0x1b54b6,_0x12dc63,_0x6ec6bd);},'wxcxD':_0x2732b0(0x47a),'BaTpr':function(_0x5598ef,_0x1dd04b){return _0x5598ef+_0x1dd04b;},'ZyPXT':function(_0x107a3a,_0x54bb62){return _0x107a3a+_0x54bb62;},'WevHf':_0x2732b0(0x4b9),'XMfLO':function(_0x54d8c,_0x1b66ac){return _0x54d8c*_0x1b66ac;},'oaRZO':function(_0x5e94a4,_0xb67a82){return _0x5e94a4/_0xb67a82;},'KOjhM':_0x2732b0(0x6ec),'ukcRd':_0x2732b0(0x378)+'1','lLFLU':function(_0xe86aba,_0x2bc86f){return _0xe86aba(_0x2bc86f);},'LmoVu':'\x20CPS','seAnQ':function(_0x11a095,_0x167777,_0x4ba5ea,_0x334fff,_0x1cb2fb,_0x42db9a,_0x20f9c1,_0x10a370){return _0x11a095(_0x167777,_0x4ba5ea,_0x334fff,_0x1cb2fb,_0x42db9a,_0x20f9c1,_0x10a370);},'NYcQM':function(_0x432ca8,_0x215fde){return _0x432ca8+_0x215fde;},'otGeD':function(_0xe128f1,_0x4517d0){return _0xe128f1+_0x4517d0;},'RclvL':_0x2732b0(0x1d9)+'ve','DQJRU':'capSh'+'ooter','ehbld':function(_0x216e3a,_0x23cfdf,_0x1d54b4,_0x27a46d,_0x3c331f,_0x3019f3,_0x19c2fa,_0x7e1610){return _0x216e3a(_0x23cfdf,_0x1d54b4,_0x27a46d,_0x3c331f,_0x3019f3,_0x19c2fa,_0x7e1610);},'cgLsk':_0x2732b0(0x40b)+'Die','Tyfik':'rBVqy','HPSPO':_0x2732b0(0x4ad)+'itch','gsYYv':'switc'+'h','Zhlbo':'input','GmkHq':_0x2732b0(0x614)+'ider','rwjpw':'sk-va'+'l','tEcVd':function(_0x573e2b,_0x58ba56){return _0x573e2b===_0x58ba56;},'aJDFm':'MxClU','wjfqp':'sk-co'+'lor','DOzYm':'#ff6b'+'9d','virxD':_0x2732b0(0x32e)+_0x2732b0(0x6b1)+'5','mPhzc':_0x2732b0(0x498)+'n','LuTZs':'bZTar','uiOsk':'small','KDKTs':'none','VCCXa':'\x20|\x20mo'+'vemen'+'t\x20','XvCWe':function(_0x234c7c,_0x2d4d50){return _0x234c7c===_0x2d4d50;},'pyLFw':function(_0x370802,_0x5b771b){return _0x370802+_0x5b771b;},'fLrXn':'\x20on','rNIBi':'div','jAKpq':_0x2732b0(0x3a3)+_0x2732b0(0x221),'QrMWL':'dxZxH','gMbty':_0x2732b0(0x48e)+'de','JIYQy':_0x2732b0(0x3cb)+'go','NlioV':_0x2732b0(0x1d8)+'in','oROEu':'mn-to'+'p','WtAxn':_0x2732b0(0x274)+'tles','MqbVb':_0x2732b0(0x525),'pgfvT':'Sakur'+'a\x20Kou'+'r','rjbOp':_0x2732b0(0x5b0)+'n','RnVFC':'5|2|1'+_0x2732b0(0x1c2)+'4|0|3','nvfsm':function(_0x59baaf,_0x651896){return _0x59baaf+_0x651896;},'czZko':function(_0x58a639,_0x36013e,_0x2d8b8f){return _0x58a639(_0x36013e,_0x2d8b8f);},'pOXZM':function(_0xb27c1c,_0x151494){return _0xb27c1c===_0x151494;},'srNPc':_0x2732b0(0x20c),'AgOJN':function(_0x1ca98a){return _0x1ca98a();},'EJHdl':_0x2732b0(0x3cd)+'io_30'+_0x2732b0(0x213)+_0x2732b0(0x60e)+'nt','gykET':function(_0x243797,_0x1301fc){return _0x243797===_0x1301fc;},'yOXUP':function(_0x5e793e,_0x2e2db3){return _0x5e793e-_0x2e2db3;},'DldqF':_0x2732b0(0x53b)+'2px\x20u'+_0x2732b0(0x67e)+'ospac'+_0x2732b0(0x3fd)+_0x2732b0(0x72c)+'e','DBiff':'top','SORqY':_0x2732b0(0x5b3)+'a.kou'+_0x2732b0(0x43e)+'v1','gSwju':_0x2732b0(0x421),'mKpVk':_0x2732b0(0x336)+'ers','idIBF':function(_0x1bd7f1,_0x2e78ea,_0x561e6e,_0x4ff7cc,_0x5ac05f,_0x3a00e3,_0x3f6d67,_0x12da1d){return _0x1bd7f1(_0x2e78ea,_0x561e6e,_0x4ff7cc,_0x5ac05f,_0x3a00e3,_0x3f6d67,_0x12da1d);},'xByll':_0x2732b0(0x15b)+'nPlat'+_0x2732b0(0x44a)+'.Over'+_0x2732b0(0x22b)+_0x2732b0(0x648)+_0x2732b0(0x5b5)+'on','JTzyY':'Sakur'+_0x2732b0(0x158),'BnbhS':'UWMK\x20'+_0x2732b0(0x54d)+'\x20','TMdCw':'\x20hook'+'s','PbccE':_0x2732b0(0x696)+'d','iVgEU':_0x2732b0(0x2f6)+'ng','oZGvU':_0x2732b0(0x197)+'ooter'+'\x20','GLnjn':_0x2732b0(0x47d),'ERgtb':function(_0x43d872,_0x4bba36,_0x3ee325,_0x176b69){return _0x43d872(_0x4bba36,_0x3ee325,_0x176b69);},'LWoKl':_0x2732b0(0x175),'BeUwZ':'middl'+'e','ZlLwK':function(_0x7c8149,_0x547336){return _0x7c8149/_0x547336;},'kCLlI':_0x2732b0(0x465),'EsHJp':function(_0x4794fd,_0x5b09d2){return _0x4794fd+_0x5b09d2;},'evprH':function(_0x572549,_0x56da2e,_0x1a8ddd,_0x599972,_0x4ddc4a,_0x503de9,_0x9777e5,_0x4cc0c6){return _0x572549(_0x56da2e,_0x1a8ddd,_0x599972,_0x4ddc4a,_0x503de9,_0x9777e5,_0x4cc0c6);},'QhfuO':'RMB','qAbpx':_0x2732b0(0x378)+'3','KeCLl':_0x2732b0(0x5cf)+_0x2732b0(0x710),'wfIjy':_0x2732b0(0x2e2),'xzIQT':_0x2732b0(0x64a),'NCuRO':_0x2732b0(0x5d7),'wbNHG':function(_0x3ec46b){return _0x3ec46b();},'MoqET':function(_0x3a3f43,_0x122592){return _0x3a3f43!==_0x122592;},'blQVR':function(_0x1d1a60,_0x286068,_0x147957,_0x31a3bf,_0x525eae,_0x58e309){return _0x1d1a60(_0x286068,_0x147957,_0x31a3bf,_0x525eae,_0x58e309);},'jWASp':'Keyst'+_0x2732b0(0x380),'BJvGD':'WASD\x20'+'+\x20LMB'+'/RMB\x20'+_0x2732b0(0x394)+_0x2732b0(0x469)+_0x2732b0(0x384)+'.','gbaoV':_0x2732b0(0x187)+'m\x20rig'+'ht','KSDqw':'Custo'+_0x2732b0(0x607)+_0x2732b0(0x290)+'rossh'+_0x2732b0(0x58d),'oJrBX':_0x2732b0(0x385)+'emy\x20c'+'ounte'+_0x2732b0(0x253)+_0x2732b0(0x512)+'ild\x20h'+_0x2732b0(0x25f)+'\x20GetV'+_0x2732b0(0x470)+'ePlay'+_0x2732b0(0x4ab)+_0x2732b0(0x3a7)+_0x2732b0(0x35b)+'k\x20on.','woOaw':function(_0x45294b,_0x1ecbe6,_0x255d7a){return _0x45294b(_0x1ecbe6,_0x255d7a);},'JbdVM':_0x2732b0(0x40f)+'e\x20(OH'+'ealth'+_0x2732b0(0x19b)+'lDie)','AAqLG':'noRec'+_0x2732b0(0x20f)+_0x2732b0(0x648)+'lMoti'+_0x2732b0(0x430)+'ck)','BbEFz':_0x2732b0(0x5f5)+_0x2732b0(0x6e4)+'r','gwSPW':'Disab'+_0x2732b0(0x3ac)+'odeSt'+'age\x20d'+'etect'+_0x2732b0(0x36e)+_0x2732b0(0x1bf)+'rtup\x20'+_0x2732b0(0x2c3)+_0x2732b0(0x281)+_0x2732b0(0x472)+_0x2732b0(0x314)+_0x2732b0(0x413)+'\x20ON.','NTITe':function(_0x2ea648,_0x1d09bb,_0x3afbfc){return _0x2ea648(_0x1d09bb,_0x3afbfc);},'WURMW':'NHreA','agwuS':'SAFE','vdYhx':function(_0x2da287,_0x1f6a37){return _0x2da287+_0x1f6a37;},'DhGMV':_0x2732b0(0x3fc)+_0x2732b0(0x6d5)+_0x2732b0(0x56b)+_0x2732b0(0x641)+'ff)','WErZh':function(_0x145cc6,_0x238b73,_0x63af7,_0xbd690d,_0x6071ff){return _0x145cc6(_0x238b73,_0x63af7,_0xbd690d,_0x6071ff);},'yNBFj':_0x2732b0(0x32f)+'ion:f'+_0x2732b0(0x195)+_0x2732b0(0x458)+_0x2732b0(0x25a)+'dth:1'+_0x2732b0(0x4b4)+_0x2732b0(0x42b)+'t:100'+'vh;z-'+'index'+':2147'+_0x2732b0(0x481)+_0x2732b0(0x3fa)+_0x2732b0(0x26b)+'event'+_0x2732b0(0x68b)+'e','vBrmO':'open','eGKcm':_0x2732b0(0x564)+'t','REFgC':_0x2732b0(0x5ce)+'t','uLcWP':'Visua'+'l','APDIz':'misc','YxAff':'safe','leDja':_0x2732b0(0x3c0)+'viewB'+_0x2732b0(0x482)+'\x200\x2024'+_0x2732b0(0x215)+_0x2732b0(0x1f7)+_0x2732b0(0x1c1)+_0x2732b0(0x1ee)+'c-1.5'+_0x2732b0(0x24a)+_0x2732b0(0x5c6)+'-4-7.'+'5\x200-2'+_0x2732b0(0x711)+_0x2732b0(0x6a8)+_0x2732b0(0x3a5)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0x2732b0(0x324)+_0x2732b0(0x66b)+'fill='+'\x22none'+_0x2732b0(0x35a)+_0x2732b0(0x1df)+'#ff6b'+_0x2732b0(0x4a2)+'troke'+_0x2732b0(0x2dd)+'h=\x222\x22'+_0x2732b0(0x4d9)+'ke-li'+'necap'+_0x2732b0(0x367)+_0x2732b0(0x30c)+_0x2732b0(0x6e5)+_0x2732b0(0x1a6)+'join='+_0x2732b0(0x2fb)+_0x2732b0(0x4d5)+_0x2732b0(0x38d)+_0x2732b0(0x34a)+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+_0x2732b0(0x4b3)+'\x20fill'+'=\x22#ff'+'6b9d\x22'+_0x2732b0(0x618)+_0x2732b0(0x2c1),'DoXRT':_0x2732b0(0x5b3)+_0x2732b0(0x5af)+'r.v1','jPntQ':_0x2732b0(0x25c),'KEHwW':'1.1.0','UewaJ':function(_0x5491be,_0x5a30cd,_0x32834e,_0x1ddb45,_0x40a80c,_0x42ad51,_0x1ac4d8,_0x2afd3a){return _0x5491be(_0x5a30cd,_0x32834e,_0x1ddb45,_0x40a80c,_0x42ad51,_0x1ac4d8,_0x2afd3a);},'EyhCH':_0x2732b0(0x40f)+'e','URsjG':'noRec'+'oil','wjntk':_0x2732b0(0x3e0)+_0x2732b0(0x5ff)+_0x2732b0(0x449),'gQvyG':'rSmOH','Zsrjp':function(_0x1e8004,_0x1b1535,_0x3fca35){return _0x1e8004(_0x1b1535,_0x3fca35);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+_0x2732b0(0x269)]||''))return;if(window[_0x2732b0(0x22f)+'URA_K'+_0x2732b0(0x681)])return;window[_0x2732b0(0x22f)+'URA_K'+_0x2732b0(0x681)]=!![];var _0x1d60b2=_0x2732b0(0x473)+'9d',_0xa2da9=_0x2732b0(0x1e1)+'c6',_0x36dd44={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x37e40a['DOzYm'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x13a183={..._0x36dd44};try{Object[_0x2732b0(0x15f)+'n'](_0x13a183,JSON['parse'](localStorage['getIt'+'em'](_0x37e40a[_0x2732b0(0x579)])||'{}'));}catch(_0x383597){}function _0x311b49(){var _0x26ce3f=_0x2732b0,_0x3b66a1={'Altvl':_0x26ce3f(0x51f)};if('AmvEO'===_0x37e40a['XgXAb'])_0x30f894(_0x31ece4,0x1ea8+0x1*0x1e65+0x1*-0x3c85,_0x3b66a1[_0x26ce3f(0x688)],0x141*-0x5+-0x82c+0xe71),_0x24d3a5(_0x50c24c,-0x82d+0x21c0+0x17b*-0x11,'f32',0x12ab+0x2635*0x1+-0x38df);else try{localStorage['setIt'+'em'](_0x26ce3f(0x5b3)+_0x26ce3f(0x5af)+'r.v1',JSON[_0x26ce3f(0x396)+'gify'](_0x13a183));}catch(_0x23d86d){}}var _0x56bd59={'uwmk':!!window[_0x2732b0(0x659)+_0x2732b0(0x603)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x13a183[_0x2732b0(0x47f)+_0x2732b0(0x18d)],'lastError':''};try{window[_0x2732b0(0x570)+_0x2732b0(0x455)+_0x2732b0(0x49e)+'r']('error',_0x3117ac=>{var _0x4b60d1=_0x2732b0;if(_0x37e40a[_0x4b60d1(0x567)](_0x37e40a[_0x4b60d1(0x2fa)],_0x37e40a[_0x4b60d1(0x516)]))try{if(_0x37e40a['JkjFv'](_0x37e40a[_0x4b60d1(0x24c)],_0x4b60d1(0x6ae)))try{if(_0x2c6371)_0x22c89e[_0x4b60d1(0x202)](_0x37e40a['kCHTq'],_0x37e40a['uLgCI'],[0x6b*0x5d+-0x1*0x22ac+0x343*-0x1]);}catch(_0xf453c6){}else{var _0x50f464=_0x3117ac&&(_0x3117ac['messa'+'ge']||_0x3117ac[_0x4b60d1(0x4d0)]&&_0x3117ac['error'][_0x4b60d1(0x464)+'ge'])||_0x37e40a[_0x4b60d1(0x611)];if(_0x3117ac&&_0x3117ac[_0x4b60d1(0x251)+'ame'])_0x50f464+=_0x37e40a[_0x4b60d1(0x4fd)](_0x37e40a[_0x4b60d1(0x5f7)]+_0x37e40a[_0x4b60d1(0x6fd)](String,_0x3117ac['filen'+'ame'])['split']('/')[_0x4b60d1(0x1f9)]()+':',_0x3117ac[_0x4b60d1(0x2db)+'o']||'?');_0x56bd59[_0x4b60d1(0x5ab)+_0x4b60d1(0x3d9)]=String(_0x50f464)[_0x4b60d1(0x2a1)](0x98*0xb+0xe77+-0x14ff,0x130c+-0x11d1+0x9b*-0x1);}}catch(_0x5771fc){}else return _0x5c4fbf['warn']('[saku'+_0x4b60d1(0x6cd)+_0x4b60d1(0x5db)+_0x4b60d1(0x2b2)+_0x4b60d1(0x706)+_0x4b60d1(0x547),_0x5e714c,_0x32f554&&_0x43a46b['messa'+'ge']),null;});}catch(_0x3455b0){}var _0x87cbca=null,_0x2c02bf=null,_0x1c6390={},_0x2ae36c=[],_0x533347=[],_0x3019c1=new Map();function _0x242b4f(_0xaa5bf7,_0x2deac5){var _0x98a1c=_0x2732b0;if(!_0x2deac5||_0xaa5bf7[_0x98a1c(0x40e)+_0x98a1c(0x3a2)](_0x2deac5)||_0xaa5bf7['lengt'+'h']>-0x20*-0x115+-0x88c+0x227*-0xc)return;_0xaa5bf7[_0x98a1c(0x32c)](_0x2deac5);}function _0x3b94eb(_0x373bde,_0x18150d,_0x358028,_0x4e510f){var _0x4dfa5d=_0x2732b0,_0x1ef085={'AaNQv':function(_0x1c7110,_0x2985cd){return _0x1c7110+_0x2985cd;},'FEdDq':function(_0x2b9e52,_0x2e7f61){return _0x2b9e52-_0x2e7f61;}},_0x131f75=-0x4e6*0x7+-0x8e7*0x2+-0x1*-0x3418;try{_0x131f75=_0x18150d&&_0x18150d[_0x4dfa5d(0x62e)]?_0x18150d['val']():-0x3d2+0x12e9*-0x1+0x16bb;}catch(_0x3bf240){}if(!_0x131f75)return;_0x37e40a['Phfbs'](_0x242b4f,_0x373bde,_0x131f75),_0x358028[_0x4e510f]=_0x373bde['lengt'+'h'];if(_0x37e40a['JkjFv'](_0x4e510f,_0x4dfa5d(0x3dc)+'ents')&&_0x373bde[_0x4dfa5d(0x6a4)+'h']){if(_0x37e40a[_0x4dfa5d(0x588)]!==_0x37e40a[_0x4dfa5d(0x588)])_0x4a73fd['textC'+_0x4dfa5d(0x27c)+'t']=_0x24aee3(_0x12f4fb[_0x4dfa5d(0x5b7)]),_0x3a6ca8[_0x4dfa5d(0x258)]['setPr'+'opert'+'y'](_0x4dfa5d(0x608),_0x1ef085[_0x4dfa5d(0x2a8)](_0x1ef085[_0x4dfa5d(0x4c8)](_0x4029ee['value'],_0xd0ee0)/(_0x3918ab-_0x53c8d9)*(0x2cf*0x2+0x9*-0x175+0x7e3),'%'));else{var _0x4663e8=_0x1c6390[_0x4dfa5d(0x1d9)+'ve'];if(_0x4663e8)try{_0x4663e8['enabl'+'ed']=![];}catch(_0x4603a4){}}}}function _0xf23780(_0x5c0124,_0xb836af,_0x3317b3){var _0x26c7d6=_0x2732b0,_0x3fc92c=_0x3019c1[_0x26c7d6(0x6b4)](_0x5c0124);if(!_0x3fc92c){if(_0x37e40a['rzTQX'](_0x37e40a[_0x26c7d6(0x15e)],_0x26c7d6(0x40a)))return 0xaeb+0xee3+0x1*-0x19ce;else _0x3fc92c=new Map(),_0x3019c1[_0x26c7d6(0x538)](_0x5c0124,_0x3fc92c);}if(!_0x3fc92c[_0x26c7d6(0x3b3)](_0xb836af))try{var _0x18f249=new _0x87cbca(_0x5c0124)['readF'+_0x26c7d6(0x419)](_0xb836af,_0x3317b3);_0x3fc92c['set'](_0xb836af,_0x37e40a['KCgZe'](_0x18f249,undefined)?_0x18f249['val']():null);}catch(_0x28065e){_0x3fc92c['set'](_0xb836af,null);}return _0x3fc92c[_0x26c7d6(0x6b4)](_0xb836af);}function _0x3b3b30(_0x383e61,_0x384661,_0x813007,_0x507bce){try{new _0x87cbca(_0x383e61)['write'+'Field'](_0x384661,_0x813007,_0x507bce);}catch(_0x45b089){}}function _0x4676d1(_0x2e3c5d,_0x421765){var _0x34dd0c=_0x2732b0;try{var _0x2c17e7=new _0x87cbca(_0x2e3c5d)[_0x34dd0c(0x311)+_0x34dd0c(0x419)](_0x421765,'u32');return _0x2c17e7?_0x2c17e7[_0x34dd0c(0x62e)]():0x2bc+0xab3*0x3+-0x22d5;}catch(_0x577089){return-0x1*0x859+0x99e+-0x5*0x41;}}function _0x12c44c(_0x481e1f,_0x4e3c1f,_0x44c94,_0x5dba5b){var _0x410145=_0x2732b0,_0x17d73e=_0xf23780(_0x481e1f,_0x4e3c1f,_0x44c94);if(_0x37e40a[_0x410145(0x628)](_0x17d73e,null))_0x3b3b30(_0x481e1f,_0x4e3c1f,_0x44c94,_0x17d73e*_0x5dba5b);}function _0x56278c(_0x390b90,_0x543769,_0x30ee66,_0x37ff3d,_0x17f2ef,_0x509a89,_0x4e8bb4){var _0x19340d=_0x2732b0;if(_0x37e40a['llnBt']('gXyUE',_0x19340d(0x4f8))){var _0x1db6e1=new _0x1afdb9(_0x55fde6)['readF'+'ield'](_0x95edb6,_0x5719c8);_0x5122ef['set'](_0x8ae38e,_0x37e40a[_0x19340d(0x567)](_0x1db6e1,_0x1792c8)?_0x1db6e1[_0x19340d(0x62e)]():null);}else try{var _0x101554=('1|0|3'+'|2|4')[_0x19340d(0x2f8)]('|'),_0x4165d6=0x23aa+0x27*-0x5f+0x5*-0x43d;while(!![]){switch(_0x101554[_0x4165d6++]){case'0':_0x2642e6['enabl'+'ed']=_0x4e8bb4!==![];continue;case'1':var _0x2642e6=_0x2c02bf[_0x19340d(0x660)+'refix']({'typeName':_0x543769,'methodName':_0x30ee66,'params':_0x37ff3d,'returnType':_0x17f2ef},_0x509a89);continue;case'2':_0x56bd59['hooks'+'Total']++;continue;case'3':_0x1c6390[_0x390b90]=_0x2642e6;continue;case'4':return _0x2642e6;}break;}}catch(_0x13db6f){return console['warn']('[saku'+'ra-ko'+_0x19340d(0x5db)+_0x19340d(0x2b2)+_0x19340d(0x706)+_0x19340d(0x547),_0x390b90,_0x13db6f&&_0x13db6f[_0x19340d(0x464)+'ge']),null;}}function _0x5400e4(_0x57a895,_0x56dfd9,_0x45493d,_0x3a48ed,_0x2b95b0,_0x4c5f5b,_0x14fbcc){var _0x7c7416=_0x2732b0;try{var _0x7a7c94=_0x2c02bf[_0x7c7416(0x660)+'ostfi'+'x']({'typeName':_0x56dfd9,'methodName':_0x45493d,'params':_0x3a48ed,'returnType':_0x2b95b0},_0x4c5f5b);return _0x7a7c94['enabl'+'ed']=_0x37e40a[_0x7c7416(0x173)](_0x14fbcc,![]),_0x1c6390[_0x57a895]=_0x7a7c94,_0x56bd59[_0x7c7416(0x3db)+'Total']++,_0x7a7c94;}catch(_0x4fafff){return console[_0x7c7416(0x57a)](_0x37e40a['jhJFZ'],_0x57a895,_0x4fafff&&_0x4fafff[_0x7c7416(0x464)+'ge']),null;}}var _0x2a220c=()=>![];try{if(window['Unity'+'WebMo'+_0x2732b0(0x3f9)]&&!_0x13a183[_0x2732b0(0x47f)+'ode']){if('spZwh'!==_0x37e40a['jPntQ']){_0x87cbca=window[_0x2732b0(0x659)+_0x2732b0(0x603)+'dkit'][_0x2732b0(0x685)+_0x2732b0(0x31e)+'er'],_0x2c02bf=window[_0x2732b0(0x659)+_0x2732b0(0x603)+_0x2732b0(0x3f9)][_0x2732b0(0x557)+'me']['creat'+_0x2732b0(0x612)+'in']({'name':_0x37e40a['JTzyY'],'version':_0x37e40a['KEHwW'],'referencedAssemblies':['Assem'+'bly-C'+'Sharp'+_0x2732b0(0x66e)]});if(_0x13a183['hookG'+'od'])_0x37e40a[_0x2732b0(0x376)](_0x56278c,_0x2732b0(0x64b),_0x2732b0(0x18e)+'th','Initi'+_0x2732b0(0x1cc)+_0x2732b0(0x4bd)+_0x2732b0(0x425),[_0x2732b0(0x171),'i32'],undefined,_0x2a220c,!!_0x13a183['god']);if(_0x13a183['hookG'+_0x2732b0(0x1ec)])_0x56278c(_0x37e40a['EyhCH'],'OHeal'+'th',_0x37e40a[_0x2732b0(0x6ca)],[_0x37e40a[_0x2732b0(0x545)],_0x2732b0(0x171),'i32',_0x2732b0(0x171),_0x2732b0(0x171)],undefined,_0x2a220c,!!_0x13a183[_0x2732b0(0x64b)]);if(_0x13a183[_0x2732b0(0x4f5)+'oReco'+'il'])_0x56278c(_0x37e40a[_0x2732b0(0x5d9)],_0x2732b0(0x15b)+'nPlat'+'forms'+_0x2732b0(0x338)+'tide.'+_0x2732b0(0x648)+_0x2732b0(0x5b5)+'on','Tick',[_0x37e40a['oVyKJ']],undefined,_0x2a220c,!!_0x13a183[_0x2732b0(0x28e)+'oil']);if(_0x13a183['hookC'+_0x2732b0(0x1dd)+'e'])_0x5400e4(_0x37e40a[_0x2732b0(0x703)],'OShoo'+_0x2732b0(0x497),_0x37e40a['wjntk'],[_0x37e40a[_0x2732b0(0x545)],_0x37e40a['oVyKJ']],undefined,(_0x3f3bf8,_0x1e5c5c)=>{var _0x4b455d=_0x2732b0;_0x3b94eb(_0x533347,_0x1e5c5c,_0x56bd59,'shoot'+_0x4b455d(0x375));},!![]);if(_0x13a183[_0x2732b0(0x2e5)+_0x2732b0(0x1dd)+'e'])_0x5400e4(_0x2732b0(0x1d9)+'ve',_0x2732b0(0x15b)+_0x2732b0(0x1e2)+_0x2732b0(0x44a)+'.Over'+_0x2732b0(0x22b)+_0x2732b0(0x192)+_0x2732b0(0x37d),'IsGro'+'unded',[_0x37e40a['oVyKJ']],_0x2732b0(0x171),(_0x48c8bb,_0x389e1d)=>{var _0x2395fa=_0x2732b0,_0x52ac3d={'GCtpS':function(_0xf9a9c7,_0x42b0ec){var _0x1017ca=_0x2a57;return _0x37e40a[_0x1017ca(0x3e2)](_0xf9a9c7,_0x42b0ec);},'ELVjr':_0x2395fa(0x4f6)+_0x2395fa(0x41f)+_0x2395fa(0x35f)+_0x2395fa(0x69b)+'5)','EpQQc':_0x37e40a[_0x2395fa(0x601)],'rdSBv':'#fff','wpqTE':function(_0x4887df,_0x5b337f){return _0x4887df+_0x5b337f;},'KYbUO':_0x37e40a[_0x2395fa(0x70d)],'JtLhJ':_0x2395fa(0x26a)+'-sans'+_0x2395fa(0x27d)+_0x2395fa(0x68e)+'tem-u'+'i,san'+'s-ser'+'if','Oiria':function(_0x3cbf79,_0x43c5cf){return _0x3cbf79+_0x43c5cf;},'Syksa':function(_0x465112,_0x340a16){var _0x5a8e39=_0x2395fa;return _0x37e40a[_0x5a8e39(0x4e3)](_0x465112,_0x340a16);},'IvzwP':function(_0xccd04b,_0x16cc59){return _0xccd04b-_0x16cc59;},'GAYKT':function(_0x1dd16c,_0xd0a63f){return _0x1dd16c+_0xd0a63f;},'FgReR':function(_0x1a957f,_0x5574bd){return _0x37e40a['klRsT'](_0x1a957f,_0x5574bd);}};if(_0x37e40a['KCgZe'](_0x37e40a[_0x2395fa(0x3b8)],_0x2395fa(0x56a)))_0x37e40a[_0x2395fa(0x3ce)](_0x3b94eb,_0x2ae36c,_0x389e1d,_0x56bd59,'movem'+_0x2395fa(0x651));else{var _0x4efcc6=_0x42d8cb['has'](_0x34b8c2);_0x138725['save'](),_0x5e7c6a[_0x2395fa(0x3de)+_0x2395fa(0x2ca)]();if(_0x26860a['round'+_0x2395fa(0x188)])_0x5ec74d[_0x2395fa(0x2ec)+'Rect'](_0x1b65e7,_0x3f0feb,_0x567f0b,_0x134b8f,_0x52ac3d['GCtpS'](0x9bb+-0x184e+0xe9a,_0x456546));else _0x1d596d[_0x2395fa(0x494)](_0x544ee9,_0x58b7c2,_0x41200f,_0x2d05d7);_0x4b0686['fillS'+_0x2395fa(0x522)]=_0x4efcc6?_0x52ac3d['ELVjr']:_0x2395fa(0x4f6)+_0x2395fa(0x6df)+'16,0.'+'7)',_0x19c334[_0x2395fa(0x6bd)](),_0x5d6b43[_0x2395fa(0x670)+_0x2395fa(0x2cc)]=0x2*-0x18a+-0x1*0xd0b+0x1020,_0x1bbfd7[_0x2395fa(0x3dd)+_0x2395fa(0x2d6)+'e']=_0x4efcc6?_0x5bf892:_0x52ac3d[_0x2395fa(0x1f6)],_0x40e154['strok'+'e'](),_0x4efcc6&&(_0x1bd292[_0x2395fa(0x3d3)+_0x2395fa(0x683)+'r']=_0xda5d88,_0x4f3e26[_0x2395fa(0x3d3)+_0x2395fa(0x321)]=0x2215+-0xe27+-0x13e0,_0x44812b['fill'](),_0x2a108d[_0x2395fa(0x3d3)+_0x2395fa(0x321)]=-0x4*0x14+-0x804+0x854*0x1),_0xa82f33[_0x2395fa(0x2bb)+_0x2395fa(0x522)]=_0x4efcc6?_0x52ac3d[_0x2395fa(0x5be)]:_0x2395fa(0x4f6)+_0x2395fa(0x5e7)+'35,24'+_0x2395fa(0x437)+')',_0x14c1e9[_0x2395fa(0x420)+'lign']=_0x2395fa(0x530)+'r',_0x1be740[_0x2395fa(0x4ef)+_0x2395fa(0x315)+'ne']=_0x2395fa(0x548)+'e',_0x43335d[_0x2395fa(0x423)]=_0x52ac3d[_0x2395fa(0x599)](_0x52ac3d['KYbUO']+_0x16171d[_0x2395fa(0x2ec)](_0x52ac3d['GCtpS'](0x3*0x9c2+-0x345+0x3*-0x8a7,_0x25eccd)),_0x52ac3d['JtLhJ']),_0xa89882['fillT'+'ext'](_0x4b013c,_0x52ac3d['Oiria'](_0x3515f6,_0x52ac3d[_0x2395fa(0x640)](_0x431390,-0x3*0xb9d+-0x2*-0xf4a+-0x1*-0x445)),_0x52ac3d[_0x2395fa(0x463)](_0x26e215+_0x512b60/(-0xd*0x16a+0xe5e+-0x1*-0x406),_0x42af1f?_0x52ac3d[_0x2395fa(0x3b1)](0x192*0x7+-0xa*-0x3d1+-0x3*0x1061,_0x53a222):0x364+0x8d0+0x47*-0x2c)),_0x513f8e&&(_0x56fd86['font']=_0x52ac3d['GAYKT'](_0x52ac3d['wpqTE']('600\x20',_0x39fb60['round']((0x779+-0x5*0xf9+-0x1*0x293)*_0x1fe8d9)),_0x52ac3d['JtLhJ']),_0x3c1f78[_0x2395fa(0x2bb)+_0x2395fa(0x522)]=_0x4efcc6?_0x52ac3d[_0x2395fa(0x5be)]:'rgba('+_0x2395fa(0x5e7)+_0x2395fa(0x56f)+_0x2395fa(0x32d)+'5)',_0x1a2728[_0x2395fa(0x4a9)+'ext'](_0x39f2f7,_0x3a2768+_0x52ac3d[_0x2395fa(0x160)](_0x2386e6,-0xefb+-0x1*-0x17b9+0x56*-0x1a),_0x52ac3d['GAYKT'](_0x17345c,_0x24934c/(0x69f+-0xba+-0xb*0x89))+(-0x1*0xb15+-0x26a3+0x31c0)*_0x1750e1)),_0x534939['resto'+'re']();}},!![]);}else try{var _0x41ffed=_0x31b9e6[_0x2732b0(0x660)+_0x2732b0(0x25e)+'x']({'typeName':_0x84e9c0,'methodName':_0x365cbe,'params':_0x10458c,'returnType':_0x143d2e},_0x1b924a);return _0x41ffed['enabl'+'ed']=_0x21d9b3!==![],_0x3b8230[_0x2a2853]=_0x41ffed,_0x530eb6[_0x2732b0(0x3db)+'Total']++,_0x41ffed;}catch(_0x55165d){return _0x5a363f[_0x2732b0(0x57a)](_0x2732b0(0x701)+_0x2732b0(0x6cd)+_0x2732b0(0x5db)+'ook\x20r'+'eg\x20fa'+'iled:',_0x52a097,_0x55165d&&_0x55165d['messa'+'ge']),null;}}}catch(_0x316b91){if(_0x37e40a[_0x2732b0(0x563)]('yAxXJ',_0x37e40a['gQvyG']))console[_0x2732b0(0x57a)](_0x2732b0(0x701)+'ra-ko'+_0x2732b0(0x5f8)+_0x2732b0(0x574)+'nit\x20f'+_0x2732b0(0x68c)+':',_0x316b91&&_0x316b91[_0x2732b0(0x464)+'ge']);else try{var _0x1ac78b=_0x1ab21e[_0x2732b0(0x660)+'refix']({'typeName':_0x3698f9,'methodName':_0xcd65f4,'params':_0x119bd2,'returnType':_0x39a436},_0x2c1c0b);return _0x1ac78b['enabl'+'ed']=_0x433352!==![],_0x397161[_0x4fe3e2]=_0x1ac78b,_0x5b5262[_0x2732b0(0x3db)+_0x2732b0(0x69d)]++,_0x1ac78b;}catch(_0x1a8da9){return _0x1825f5[_0x2732b0(0x57a)]('[saku'+_0x2732b0(0x6cd)+_0x2732b0(0x5db)+_0x2732b0(0x2b2)+_0x2732b0(0x706)+'iled:',_0x1689af,_0x1a8da9&&_0x1a8da9['messa'+'ge']),null;}}function _0x3fb7a4(_0x27f3e8,_0x3b55fe){var _0x894a04=_0x1c6390[_0x27f3e8];if(_0x894a04)try{_0x894a04['enabl'+'ed']=!!_0x3b55fe;}catch(_0x1c5be0){}}setInterval(()=>{var _0x1aea0b=_0x2732b0,_0x368e9d={'diHgd':function(_0x6eda51,_0x50fe7c){return _0x6eda51(_0x50fe7c);},'RrnCg':'UWMK','Iseel':function(_0x39dbc1,_0x327f88){return _0x39dbc1===_0x327f88;},'fhLsz':_0x1aea0b(0x4c6),'wVfaH':function(_0x40d8f2,_0x5a05b8){return _0x40d8f2+_0x5a05b8;},'UabPu':'UWMK\x20'+_0x1aea0b(0x54d)+'\x20','fcdVa':function(_0x698753,_0x317ad5){return _0x698753+_0x317ad5;},'BPUuc':_0x37e40a['praMa'],'TMqkS':_0x1aea0b(0x696)+'d','ypGLv':'\x20|\x20sh'+_0x1aea0b(0x1e0)+'\x20','UftCT':_0x1aea0b(0x2e6),'vWoHw':_0x37e40a[_0x1aea0b(0x42f)]};if(!_0x87cbca||!window[_0x1aea0b(0x34d)+'Insta'+_0x1aea0b(0x412)])return;var _0x1814b8=(Number(_0x13a183['speed'+_0x1aea0b(0x1fa)])||0x7*-0x2c7+-0x179c+0x2b71)/(0x1a9f+-0x145*0x19+0xeb*0x6),_0x11af1e=_0x37e40a[_0x1aea0b(0x702)](Number(_0x13a183['jumpP'+'ct'])||-0x1813*-0x1+-0x5*-0x74c+-0x3c2b,-0x10b5+-0xa86*-0x3+0xf7*-0xf),_0x5430ce=(_0x37e40a['ZeCMP'](Number,_0x13a183[_0x1aea0b(0x727)+_0x1aea0b(0x569)])||-0x392+-0xf2b+0x53*0x3b)/(0x52*-0x5b+-0x1e2e*0x1+0x3bb8),_0x446204=Math['max'](-0x1*0x14ad+-0xedd+0x238b,Number(_0x13a183['damag'+'eValu'+'e'])||-0x19a9+0x405+0x163a*0x1),_0x2745a9=_0x37e40a['xBObs'](_0x1814b8,-0x1f20+0x22e1*-0x1+0x4202)||_0x37e40a[_0x1aea0b(0x173)](_0x11af1e,0x8ed*-0x1+0xcda+-0x3ec)||_0x37e40a['xBObs'](_0x5430ce,0x256a*0x1+-0x8ff+-0x1c6a)||_0x13a183[_0x1aea0b(0x388)],_0x5804a8=_0x13a183[_0x1aea0b(0x4bc)+'ead']||_0x13a183[_0x1aea0b(0x65b)+_0x1aea0b(0x637)]||_0x13a183[_0x1aea0b(0x200)+_0x1aea0b(0x4df)]||_0x13a183[_0x1aea0b(0x723)+_0x1aea0b(0x17a)];if(!_0x2745a9&&!_0x5804a8)return;try{for(var _0x4f8c3b=0x2564+-0x164+-0xc*0x300;_0x4f8c3b<_0x2ae36c[_0x1aea0b(0x6a4)+'h'];_0x4f8c3b++){if(_0x37e40a['rzTQX'](_0x37e40a[_0x1aea0b(0x5a8)],_0x1aea0b(0x461))){var _0x4c2fac=_0x2ae36c[_0x4f8c3b];if(!_0x4c2fac)continue;_0x1814b8!==-0x1*0x129b+0x5*-0x16a+-0xad*-0x26&&(_0x1aea0b(0x37f)!==_0x37e40a['oZgbb']?_0xcbed0f[_0x1aea0b(0x15f)+'n'](_0x47a29f,_0x2c66a5['parse'](_0x405a1f[_0x1aea0b(0x649)+'em']('sakur'+_0x1aea0b(0x5af)+_0x1aea0b(0x697))||'{}')):(_0x37e40a['Dksck'](_0x12c44c,_0x4c2fac,-0xf17*0x1+-0x1f57+-0x59*-0x86,_0x37e40a[_0x1aea0b(0x725)],_0x1814b8),_0x37e40a[_0x1aea0b(0x3ce)](_0x12c44c,_0x4c2fac,-0xc8*0x1d+0x3b*-0x8d+-0x3753*-0x1,_0x37e40a[_0x1aea0b(0x725)],_0x1814b8),_0x12c44c(_0x4c2fac,0x15d*0x7+0xb+0x3*-0x322,'f32',_0x1814b8),_0x12c44c(_0x4c2fac,-0x7*0x38c+0x21eb+0x1*-0x8e3,_0x37e40a[_0x1aea0b(0x725)],_0x1814b8),_0x37e40a[_0x1aea0b(0x506)](_0x12c44c,_0x4c2fac,0xf6e+-0x243b+0x14e9*0x1,_0x1aea0b(0x51f),_0x1814b8),_0x12c44c(_0x4c2fac,0x274+0x1518+-0x2*0xbb6,_0x1aea0b(0x51f),_0x1814b8)));if(_0x37e40a['QHVRf'](_0x11af1e,-0x1027+0xb4d+0x4db))_0x37e40a[_0x1aea0b(0x270)](_0x12c44c,_0x4c2fac,-0x1*-0x2187+0x21e9+0xb3*-0x60,_0x37e40a[_0x1aea0b(0x725)],_0x11af1e);_0x37e40a[_0x1aea0b(0x572)](_0x5430ce,0x66*-0x1d+0x6ec+-0x4a3*-0x1)&&(_0x37e40a[_0x1aea0b(0x655)](_0x12c44c,_0x4c2fac,0x39*0x2e+0x154*0x13+-0x22*0x109,_0x37e40a['zVteP'],_0x5430ce),_0x37e40a['cqNbS'](_0x12c44c,_0x4c2fac,0x33*-0x4a+-0x7*-0xef+0x881,_0x1aea0b(0x51f),_0x5430ce));if(_0x13a183[_0x1aea0b(0x388)])_0x3b3b30(_0x4c2fac,0x2*0x4f4+-0x1*0x103c+0x6f0,'f32',-(-0x43b+-0x1874+0x104b*0x2));}else _0x406aa0[_0x1aea0b(0x3ab)+_0x1aea0b(0x5a7)][_0x1aea0b(0x24b)+'e']('on',_0xc37cef),_0x368e9d[_0x1aea0b(0x1d0)](_0x5bd642,_0x2c493c);}}catch(_0x1c7700){}try{for(var _0x4c8e89=-0x19c*0xa+0x23f0+-0x13d8;_0x37e40a[_0x1aea0b(0x28f)](_0x4c8e89,_0x533347['lengt'+'h']);_0x4c8e89++){var _0x206d0a=_0x4676d1(_0x533347[_0x4c8e89],0x2e0+0x4a2+0x2*-0x3a5);if(!_0x206d0a)continue;_0x13a183['damag'+'eExp']&&(_0x3b3b30(_0x206d0a,-0x1*-0x2083+0x235b+0x2*-0x21c9,_0x37e40a['oVyKJ'],_0x446204),_0x3b3b30(_0x206d0a,-0xa*-0x17a+0x11f8+-0x2068,'i32',_0x446204));_0x13a183[_0x1aea0b(0x4bc)+_0x1aea0b(0x714)]&&(_0x37e40a[_0x1aea0b(0x53e)](_0x3b3b30,_0x206d0a,-0x3*-0x8de+0x15ce+0x4*-0xbf8,_0x1aea0b(0x51f),-0x4a+-0x1d7*0x11+0x1f91),_0x37e40a[_0x1aea0b(0x53e)](_0x3b3b30,_0x206d0a,-0x19ae+0x224c+0x1*-0x836,_0x37e40a[_0x1aea0b(0x725)],-0x1091+-0x2fb*-0x2+0xa9c));if(_0x13a183[_0x1aea0b(0x200)+_0x1aea0b(0x4df)])_0x37e40a[_0x1aea0b(0x732)](_0x3b3b30,_0x206d0a,-0x1a7b+-0x113f+0x2c16,_0x37e40a[_0x1aea0b(0x545)],-0x2*-0x5df+0xd43+-0x151a);if(_0x13a183['rapid'+'Exp']){if(_0x37e40a['mGMkH'](_0x37e40a['xxVcL'],_0x37e40a['xxVcL'])){if(!_0xd2e6a1)return;var _0x580ec8=_0x50e26b['child'+_0x1aea0b(0x1b6)];for(var _0x42930a=0x8e*0xd+0x10bb*0x2+0x4*-0xa2b;_0x42930a<_0x580ec8[_0x1aea0b(0x6a4)+'h'];_0x42930a++){var _0x51b819=_0x580ec8[_0x42930a][_0x1aea0b(0x67c)+_0x1aea0b(0x52d)+_0x1aea0b(0x435)](_0x1aea0b(0x5cf)+'desc');_0x51b819&&(_0x51b819[_0x1aea0b(0x4d4)+'onten'+'t'][_0x1aea0b(0x6b8)+'Of'](_0x368e9d[_0x1aea0b(0x59c)])===-0x17*0x8d+0x2513+-0x1868||_0x368e9d['Iseel'](_0x51b819['textC'+_0x1aea0b(0x27c)+'t'][_0x1aea0b(0x6b8)+'Of'](_0x368e9d['fhLsz']),0x447+0x500+0x5f*-0x19))&&(_0x51b819[_0x1aea0b(0x4d4)+_0x1aea0b(0x27c)+'t']=_0x350fb7[_0x1aea0b(0x47f)+'ode']?'SAFE\x20'+'MODE\x20'+_0x1aea0b(0x23d)+_0x1aea0b(0x186)+'only,'+_0x1aea0b(0x480)+'ooks\x20'+_0x1aea0b(0x260)+_0x1aea0b(0x500)+_0x1aea0b(0x226)+')':_0x4ad453['uwmk']?_0x368e9d[_0x1aea0b(0x3b7)](_0x368e9d[_0x1aea0b(0x5d2)]+(_0x5f4e08[_0x1aea0b(0x3db)+_0x1aea0b(0x69d)]?_0x368e9d[_0x1aea0b(0x61f)](_0x83b769[_0x1aea0b(0x3db)+'Ok'],'/')+_0x3eae91[_0x1aea0b(0x3db)+_0x1aea0b(0x69d)]+('\x20hook'+'s'):_0x1aea0b(0x3fc)+'ks\x20ar'+_0x1aea0b(0x56b)+'all\x20o'+'ff)')+_0x368e9d['BPUuc']+(_0xa4115c[_0x1aea0b(0x70b)+_0x1aea0b(0x636)]?_0x368e9d[_0x1aea0b(0x5aa)]:_0x1aea0b(0x2f6)+'ng')+_0x368e9d['ypGLv']+(_0x172d62['shoot'+_0x1aea0b(0x375)]?'held':_0x368e9d[_0x1aea0b(0x6be)])+(_0x1aea0b(0x3f8)+_0x1aea0b(0x3c1)+'t\x20'),_0x376a84[_0x1aea0b(0x3dc)+'ents']?'held':_0x368e9d[_0x1aea0b(0x6be)])+(_0x3b6de0['lastE'+_0x1aea0b(0x3d9)]?_0x368e9d['vWoHw']+_0x527de1[_0x1aea0b(0x5ab)+'rror']:''):'UWMK\x20'+_0x1aea0b(0x486)+'NG\x20-\x20'+_0x1aea0b(0x429)+'ay\x20on'+_0x1aea0b(0x2b6)+_0x1aea0b(0x4e6)+'all\x20t'+_0x1aea0b(0x289)+'erscr'+_0x1aea0b(0x3e5));}}else _0x12c44c(_0x206d0a,0x1c8e+-0x5*-0x112+-0x215c,'f32',0x1*-0x254c+-0x181+0x26cd+0.1),_0x3b3b30(_0x206d0a,0x3bc*-0x4+-0x1*0x1676+0x25c6,'f32',-0x1c91+-0x50e+0x219f+0.1);}}}catch(_0x549121){}},-0x1156+0x129c+-0x2*0x3f),_0x37e40a[_0x2732b0(0x317)](setInterval,()=>{var _0x6f8772=_0x2732b0;if(_0x37e40a[_0x6f8772(0x5e6)]('GstHh',_0x37e40a['XvdIx'])){var _0xe6820=_0x424ff1[_0x6f8772(0x355)+_0x6f8772(0x5f3)+'ent'](_0x6f8772(0x383));return _0xe6820[_0x6f8772(0x3ab)+'Name']=_0x37e40a['vhVVp']+(_0x4e0975?_0x37e40a['zztAR']:''),_0xe6820[_0x6f8772(0x4d4)+'onten'+'t']=_0x5793c6,_0xe6820;}else{_0x56bd59['gameL'+_0x6f8772(0x636)]=!!window[_0x6f8772(0x34d)+_0x6f8772(0x490)+_0x6f8772(0x412)];try{if(_0x37e40a[_0x6f8772(0x28c)](_0x6f8772(0x57f),_0x37e40a[_0x6f8772(0x5b9)])){var _0x175219=-0x1387+-0x26ec+-0x1*-0x3a73;for(var _0x1e1f44 in _0x1c6390){if(_0x1c6390[_0x1e1f44]&&_0x1c6390[_0x1e1f44][_0x6f8772(0x35e)+'ed'])_0x175219++;}_0x56bd59[_0x6f8772(0x3db)+'Ok']=_0x175219;}else{var _0x2bce09=_0x4ef20c(_0x164e0a,_0x3cafdb=>{var _0x108fe6=_0x6f8772;_0x114b05['class'+'List'][_0x108fe6(0x24b)+'e']('on',_0x3cafdb),_0x241a6b(_0x3cafdb);});_0x57c867[_0x6f8772(0x6d3)+'d'](_0x542a04,_0x2bce09);}}catch(_0x2c0b94){}}},0x1f4*-0x6+0x1*0x602+0x4cf*0x2);var _0x108989=new Set(),_0x34b20e={0x1:[],0x3:[]},_0x2473bc=![];function _0x3c3f91(_0x527142){var _0x3a5dbd=_0x2732b0;_0x37e40a['fGLeu'](_0x3a5dbd(0x21b),_0x37e40a[_0x3a5dbd(0x2e7)])?_0x108989[_0x3a5dbd(0x5de)](_0x527142[_0x3a5dbd(0x230)]):_0x46d080[_0x3a5dbd(0x698)]['appen'+_0x3a5dbd(0x52b)+'d'](_0x244f5a);}function _0x273f0c(_0x232fa1){var _0x5a1eed=_0x2732b0;_0x108989[_0x5a1eed(0x632)+'e'](_0x232fa1[_0x5a1eed(0x230)]);}function _0x510df0(_0x5372ac){var _0x445088=_0x2732b0;if(_0x5372ac['__sak'+_0x445088(0x390)])return;_0x108989[_0x445088(0x5de)](_0x37e40a['PqTBg'](_0x37e40a[_0x445088(0x5c8)],_0x5372ac['butto'+'n']+(0x1*-0x377+-0x1*-0x19d6+0x7*-0x332)));var _0x4babc0=_0x34b20e[_0x5372ac[_0x445088(0x5b0)+'n']+(-0x6c4+0x1*0x1613+-0x51a*0x3)];if(_0x4babc0){_0x4babc0['push'](performance[_0x445088(0x3a4)]());if(_0x37e40a['hRIDj'](_0x4babc0['lengt'+'h'],-0x1*-0x1d8d+-0x13ef+-0x976))_0x4babc0[_0x445088(0x72b)]();}}function _0x13862e(_0x2a2f25){var _0x48e44d=_0x2732b0;if(!_0x2a2f25[_0x48e44d(0x517)+'ura'])_0x108989[_0x48e44d(0x632)+'e'](_0x37e40a[_0x48e44d(0x666)](_0x48e44d(0x378),_0x37e40a[_0x48e44d(0x5c4)](_0x2a2f25['butto'+'n'],-0x11a4*-0x1+0x109f*-0x1+-0x104)));}function _0x5c996a(){var _0xe85aa8=_0x2732b0;_0x108989[_0xe85aa8(0x3a9)]();}function _0x321326(){var _0xc6e70a=_0x2732b0,_0x3e5d7b=_0x37e40a['vRHUW'][_0xc6e70a(0x2f8)]('|'),_0x322501=0x1a9f+0x20c7+0x2*-0x1db3;while(!![]){switch(_0x3e5d7b[_0x322501++]){case'0':window[_0xc6e70a(0x570)+_0xc6e70a(0x455)+'stene'+'r'](_0xc6e70a(0x5bb)+'wn',_0x3c3f91,!![]);continue;case'1':window['addEv'+'entLi'+_0xc6e70a(0x49e)+'r'](_0xc6e70a(0x3ef),_0x5c996a);continue;case'2':window[_0xc6e70a(0x570)+'entLi'+'stene'+'r']('keyup',_0x273f0c,!![]);continue;case'3':_0x2473bc=!![];continue;case'4':window[_0xc6e70a(0x570)+_0xc6e70a(0x455)+'stene'+'r'](_0x37e40a[_0xc6e70a(0x280)],_0x13862e,!![]);continue;case'5':window[_0xc6e70a(0x570)+'entLi'+_0xc6e70a(0x49e)+'r'](_0xc6e70a(0x378)+_0xc6e70a(0x39b),_0x510df0,!![]);continue;case'6':if(_0x2473bc)return;continue;}break;}}function _0x40e862(_0x3cc3ff){var _0x1a1eb7=_0x2732b0,_0x1435fd=_0x34b20e[_0x3cc3ff]||[],_0xd8838c=performance[_0x1a1eb7(0x3a4)]();while(_0x1435fd['lengt'+'h']&&_0x37e40a[_0x1a1eb7(0x591)](_0xd8838c-_0x1435fd[0xd*0x11+-0x5b*-0x3e+-0x16e7],-0x200+0xd*-0xcd+0x1051))_0x1435fd[_0x1a1eb7(0x72b)]();return _0x1435fd[_0x1a1eb7(0x6a4)+'h'];}function _0x575de0(_0x4cfe81){var _0x413657=_0x2732b0;if(_0x413657(0x571)===_0x37e40a[_0x413657(0x6a0)])try{new _0x14107e(_0x5d618d)['write'+_0x413657(0x59d)](_0x548d32,_0x4b9ab9,_0x208418);}catch(_0x192e92){}else{if(document['body']&&(document[_0x413657(0x5f0)+'State']==='inter'+'activ'+'e'||document[_0x413657(0x5f0)+_0x413657(0x282)]===_0x413657(0x684)+_0x413657(0x50c)))_0x4cfe81();else document[_0x413657(0x570)+_0x413657(0x455)+_0x413657(0x49e)+'r'](_0x413657(0x268)+_0x413657(0x335)+_0x413657(0x42c)+'d',_0x4cfe81,{'once':!![]});}}_0x575de0(()=>{var _0xbe9793=_0x2732b0,_0x24d3b5={'QEjwN':_0xbe9793(0x3cd)+_0xbe9793(0x6c8)+_0xbe9793(0x1b7)+_0xbe9793(0x60e)+'nt','pTqpT':_0x37e40a[_0xbe9793(0x48b)],'CmvXJ':function(_0x4c9bd4,_0x245378){return _0x4c9bd4===_0x245378;},'jUeYN':_0xbe9793(0x2e6),'cyWqU':function(_0x3f98b9,_0x2f4824){return _0x37e40a['gykET'](_0x3f98b9,_0x2f4824);},'zRrTd':function(_0x166d85,_0x460bbe){return _0x166d85*_0x460bbe;},'REwSm':function(_0x2d9716,_0x8c3ce4){return _0x2d9716-_0x8c3ce4;},'dfMNQ':'#ff6b'+'9d','NmbgT':function(_0x4a5beb,_0x191296){return _0x4a5beb-_0x191296;},'VJjEw':function(_0x5d6172,_0x4b2166){var _0x1235c3=_0xbe9793;return _0x37e40a[_0x1235c3(0x62a)](_0x5d6172,_0x4b2166);},'HPPFv':function(_0x4ab77f,_0x2bb153){return _0x4ab77f+_0x2bb153;},'dZtYy':function(_0x4beadb,_0xa7f279){return _0x4beadb/_0xa7f279;},'PCYmH':function(_0x3a7a50,_0x20780b){return _0x3a7a50*_0x20780b;},'nldgn':function(_0x255b2e,_0x4fcb1d){return _0x255b2e*_0x4fcb1d;},'JNQCw':_0xbe9793(0x194),'gAkEO':_0x37e40a[_0xbe9793(0x3b6)],'PPktK':_0x37e40a['DBiff'],'eucSW':function(_0x3770ab,_0x17cbc7,_0x5b0950){return _0x3770ab(_0x17cbc7,_0x5b0950);},'tumEM':function(_0x53b104,_0x3d0d62){var _0x508a20=_0xbe9793;return _0x37e40a[_0x508a20(0x401)](_0x53b104,_0x3d0d62);},'dkWDa':'\x20FPS','VRseS':function(_0x55915a,_0x2727d2){return _0x55915a>=_0x2727d2;},'xdIct':_0x37e40a['SORqY'],'INMje':function(_0x4bf7a9){return _0x4bf7a9();},'bNTFr':_0x37e40a['gSwju'],'oMXqf':_0x37e40a['mKpVk'],'gNIeQ':function(_0x1ca774,_0x8923f,_0x177e12,_0x4ced74,_0x49de9b,_0x46a6a2,_0x222041,_0x1c3498){return _0x37e40a['idIBF'](_0x1ca774,_0x8923f,_0x177e12,_0x4ced74,_0x49de9b,_0x46a6a2,_0x222041,_0x1c3498);},'BxXaM':'IsGro'+_0xbe9793(0x2af),'xOuuf':function(_0x90076d,_0x284203,_0x1a79bd,_0x4bb208,_0x43058c,_0x253f8e,_0xc5931a,_0x5d0f37){return _0x37e40a['ehbld'](_0x90076d,_0x284203,_0x1a79bd,_0x4bb208,_0x43058c,_0x253f8e,_0xc5931a,_0x5d0f37);},'fxlGT':_0xbe9793(0x28e)+_0xbe9793(0x372),'EIPmL':_0x37e40a[_0xbe9793(0x207)],'VLVdU':_0xbe9793(0x171),'naGJw':_0x37e40a[_0xbe9793(0x374)],'Kiblm':_0xbe9793(0x4b7),'zXxrU':_0xbe9793(0x40f)+'e','TKzDH':'OHeal'+'th','UIbwn':_0x37e40a[_0xbe9793(0x6ca)],'rqnnI':_0xbe9793(0x2c6)+_0xbe9793(0x497),'nSKNQ':function(_0x3e0f4d,_0x12eacc,_0x2430f8,_0x38c75b,_0x3de2e7){return _0x3e0f4d(_0x12eacc,_0x2430f8,_0x38c75b,_0x3de2e7);},'YFliD':_0xbe9793(0x378)+'down','wPNjr':_0xbe9793(0x1f8)+'MODE\x20'+_0xbe9793(0x60d)+'rlay\x20'+'only,'+'\x20no\x20h'+_0xbe9793(0x368)+'(relo'+'ad\x20to'+'\x20exit'+')','kJpFV':_0x37e40a[_0xbe9793(0x6bf)],'TOTWC':function(_0x1066ac,_0x30f758){var _0x4b2f8c=_0xbe9793;return _0x37e40a[_0x4b2f8c(0x666)](_0x1066ac,_0x30f758);},'fbYJC':_0x37e40a['TMdCw'],'WonIz':_0x37e40a['PbccE'],'UhpgC':_0x37e40a[_0xbe9793(0x166)],'FwvWU':_0x37e40a[_0xbe9793(0x460)],'bNoXU':_0x37e40a[_0xbe9793(0x296)],'hXxbu':function(_0x557903,_0x15ea29,_0x3ba3a5,_0x1b54f1){var _0x53d6b7=_0xbe9793;return _0x37e40a[_0x53d6b7(0x1d4)](_0x557903,_0x15ea29,_0x3ba3a5,_0x1b54f1);},'GgBEb':_0xbe9793(0x6f0)+'\x20Unit'+'yEngi'+_0xbe9793(0x54a)+'plica'+'tion.'+'set_t'+'arget'+'Frame'+'Rate','JYMOz':function(_0x20ea2b,_0x340986,_0x2b0eff){return _0x20ea2b(_0x340986,_0x2b0eff);},'DgsUQ':'Apply','hLfdb':_0xbe9793(0x43d),'dXmCM':_0xbe9793(0x60f),'YiouC':function(_0xd55d74){return _0xd55d74();},'OMzJN':function(_0x4537e7,_0x24fc78){return _0x4537e7===_0x24fc78;},'MQsqU':_0xbe9793(0x1eb),'TkRIK':_0x37e40a['LWoKl'],'idbkW':function(_0xcf51c5){return _0xcf51c5();},'sExyJ':'cente'+'r','RiVeV':_0x37e40a[_0xbe9793(0x6d9)],'MXNdD':function(_0xdab6a6,_0x13c910){var _0x418e76=_0xbe9793;return _0x37e40a[_0x418e76(0x718)](_0xdab6a6,_0x13c910);},'lWlss':function(_0x2d3b3f,_0x36c5a1){return _0x2d3b3f*_0x36c5a1;},'KRRqy':function(_0x4abd4c,_0x54ef9c){var _0x33c9fa=_0xbe9793;return _0x37e40a[_0x33c9fa(0x20b)](_0x4abd4c,_0x54ef9c);},'WSBTd':function(_0x20c807,_0x47a9f3){return _0x37e40a['yOXUP'](_0x20c807,_0x47a9f3);},'wbnAA':function(_0x178a72,_0x4bf041){return _0x178a72+_0x4bf041;},'UOAnR':function(_0x443ec6,_0x4746ee){return _0x37e40a['ZlLwK'](_0x443ec6,_0x4746ee);},'Oesvz':function(_0x264f26,_0x244d39){return _0x264f26-_0x244d39;},'Uyvbt':_0x37e40a['kCLlI'],'nwAxA':function(_0x5f0db5,_0x2f8e37){return _0x5f0db5+_0x2f8e37;},'shXIa':function(_0x360f7c,_0x358280){return _0x360f7c+_0x358280;},'JqGyL':function(_0x24d8c0,_0x4d529b){return _0x37e40a['EsHJp'](_0x24d8c0,_0x4d529b);},'UqEYV':function(_0x53efff,_0x1b54b2){return _0x53efff+_0x1b54b2;},'VvVkA':function(_0x694fbc,_0x1031bb,_0x1da600,_0x2bbb45,_0x150978,_0xc880e4,_0x2d53e9,_0x3778b){return _0x37e40a['evprH'](_0x694fbc,_0x1031bb,_0x1da600,_0x2bbb45,_0x150978,_0xc880e4,_0x2d53e9,_0x3778b);},'xuwNA':_0x37e40a['KOjhM'],'kQAoI':function(_0x4adcd5,_0x390c3b){return _0x4adcd5(_0x390c3b);},'fzzec':_0x37e40a[_0xbe9793(0x327)],'PMRiS':_0x37e40a[_0xbe9793(0x340)],'ElRXU':function(_0x39695d,_0x22a621){return _0x39695d+_0x22a621;},'jbOPl':function(_0x5a5b3b,_0x36c530){var _0x42b711=_0xbe9793;return _0x37e40a[_0x42b711(0x718)](_0x5a5b3b,_0x36c530);},'eUwHM':_0x37e40a['LmoVu'],'ovYkV':function(_0x56a031,_0x4989c9,_0x409d9a,_0x29ee19,_0x3a2020,_0x8ace1b,_0x376f3c){return _0x56a031(_0x4989c9,_0x409d9a,_0x29ee19,_0x3a2020,_0x8ace1b,_0x376f3c);},'ahUxV':function(_0x3bf861,_0x499da6){return _0x37e40a['zJJbd'](_0x3bf861,_0x499da6);},'fJXew':'switc'+'h','efxWu':_0xbe9793(0x51f),'EDDlF':_0x37e40a[_0xbe9793(0x739)],'xCgBD':function(_0x2a87be,_0x19bbe5){return _0x2a87be!==_0x19bbe5;},'AZsrg':_0x37e40a['wfIjy'],'RPHGX':_0x37e40a[_0xbe9793(0x46d)],'PeLpQ':function(_0x2d7ddf){return _0x2d7ddf();},'VvGQP':_0xbe9793(0x564)+'t','FRoST':_0x37e40a[_0xbe9793(0x658)],'ZdIjY':function(_0x47cea9){var _0x25e344=_0xbe9793;return _0x37e40a[_0x25e344(0x17c)](_0x47cea9);},'vnzkA':'Skips'+_0xbe9793(0x717)+_0xbe9793(0x309)+_0xbe9793(0x5bf)+_0xbe9793(0x29d)+_0xbe9793(0x6f1)+_0xbe9793(0x675)+_0xbe9793(0x5df)+'rings'+_0xbe9793(0x30e)+'r\x20adv'+_0xbe9793(0x1cf),'RWFlW':'Rapid'+'\x20Fire'+_0xbe9793(0x434)+']','vYRVm':'Scale'+_0xbe9793(0x51a)+'rtide'+_0xbe9793(0x5f2)+'n.fir'+'eRate'+_0xbe9793(0x669)+_0xbe9793(0x382)+_0xbe9793(0x3bc)+_0xbe9793(0x4cd)+_0xbe9793(0x2fc)+'\x20gate'+'\x20shot'+'s.','vEVqE':function(_0x532af2,_0x5766d2,_0x319591,_0x31bc8e){var _0x138dca=_0xbe9793;return _0x37e40a[_0x138dca(0x1d4)](_0x532af2,_0x5766d2,_0x319591,_0x31bc8e);},'BxDLf':function(_0x3dde7f,_0x314b63,_0x5ea268,_0x496505,_0x96f03f,_0x31928f){return _0x3dde7f(_0x314b63,_0x5ea268,_0x496505,_0x96f03f,_0x31928f);},'KGIhe':'move','txnwE':function(_0x434980,_0x272e09){var _0x8f12e0=_0xbe9793;return _0x37e40a[_0x8f12e0(0x563)](_0x434980,_0x272e09);},'sBwSf':function(_0x511a15,_0x554cd6,_0x501d1c,_0x47b0a3,_0x497dcd,_0x46429f){return _0x511a15(_0x554cd6,_0x501d1c,_0x47b0a3,_0x497dcd,_0x46429f);},'uJnfj':function(_0x1ded49,_0xa07d30,_0x436044,_0x3c8096,_0x35b05f,_0x40a4f4){return _0x37e40a['blQVR'](_0x1ded49,_0xa07d30,_0x436044,_0x3c8096,_0x35b05f,_0x40a4f4);},'IIizo':function(_0x157055,_0x1eff71,_0x30b323,_0x279db7,_0x253c09,_0x36a86a){return _0x157055(_0x1eff71,_0x30b323,_0x279db7,_0x253c09,_0x36a86a);},'snSoC':'Zeroe'+'s\x20Mov'+_0xbe9793(0x264)+'.last'+_0xbe9793(0x626)+_0xbe9793(0x59b)+'o\x20the'+'\x20jump'+_0xbe9793(0x2b3)+'down\x20'+_0xbe9793(0x5a1)+'\x20appl'+'ies.','XliFB':function(_0x3dc643,_0x3b167a){return _0x37e40a['JkjFv'](_0x3dc643,_0x3b167a);},'mlIOj':_0x37e40a[_0xbe9793(0x16a)],'LODPL':_0x37e40a[_0xbe9793(0x257)],'OSElf':_0x37e40a[_0xbe9793(0x566)],'xeZkv':'CPS\x20r'+_0xbe9793(0x4bf)+'t','cMmGw':_0x37e40a[_0xbe9793(0x508)],'qfcFs':function(_0x1952c2,_0x12aa36,_0x1d6982,_0x307678,_0x59045f,_0x30cacd){return _0x1952c2(_0x12aa36,_0x1d6982,_0x307678,_0x59045f,_0x30cacd);},'XUqFb':function(_0x25bd9a,_0x1f9330,_0x4a165c,_0xde489a){return _0x25bd9a(_0x1f9330,_0x4a165c,_0xde489a);},'iyPZJ':_0xbe9793(0x381)+_0xbe9793(0x375),'bjhFL':'FPS\x20o'+_0xbe9793(0x1b3)+'y.','ubzUc':_0xbe9793(0x2a4)+'ounte'+'r','sMHRr':_0x37e40a[_0xbe9793(0x2b8)],'WYgcN':_0xbe9793(0x518),'HReuF':'Adblo'+'ck','rdGlv':'Each\x20'+'one\x20i'+_0xbe9793(0x6d7)+'ls\x20a\x20'+'WASM\x20'+'tramp'+_0xbe9793(0x418)+'\x20for\x20'+_0xbe9793(0x3d8)+_0xbe9793(0x20e)+_0xbe9793(0x581)+'load.'+_0xbe9793(0x29f)+'OFF\x20b'+'y\x20def'+_0xbe9793(0x3cf)+'-\x20a\x20s'+'ignat'+'ure\x20t'+'hat\x20d'+_0xbe9793(0x189)+'ot\x20ma'+'tch\x20t'+_0xbe9793(0x403)+_0xbe9793(0x3c9)+_0xbe9793(0x322)+_0xbe9793(0x68d)+'s\x20\x27fu'+_0xbe9793(0x4a3)+_0xbe9793(0x476)+_0xbe9793(0x5fb)+'e\x20mis'+_0xbe9793(0x448)+_0xbe9793(0x354)+_0xbe9793(0x27a)+_0xbe9793(0x5f9)+'\x20is\x20c'+_0xbe9793(0x2de)+_0xbe9793(0x1d2)+_0xbe9793(0x454)+'m\x20on\x20'+_0xbe9793(0x67d)+_0xbe9793(0x208)+'ime,\x20'+'reloa'+_0xbe9793(0x24f)+_0xbe9793(0x31a)+_0xbe9793(0x2b4)+_0xbe9793(0x3e6)+'\x20your'+_0xbe9793(0x552)+_0xbe9793(0x4ff)+_0xbe9793(0x5b1)+'n.','XOQgF':function(_0x425cf7,_0x389408,_0x4b1342){return _0x37e40a['woOaw'](_0x425cf7,_0x389408,_0x4b1342);},'ImiqX':_0x37e40a[_0xbe9793(0x475)],'qcHoP':_0x37e40a['AAqLG'],'rjxaP':function(_0x8b365b,_0x320fd5,_0x49d3b4){var _0x2a2573=_0xbe9793;return _0x37e40a[_0x2a2573(0x41c)](_0x8b365b,_0x320fd5,_0x49d3b4);},'MQcjr':_0x37e40a[_0xbe9793(0x406)],'YRiTw':_0x37e40a['gwSPW'],'YaTMV':function(_0x424c26,_0x17dfbc,_0x356a52){return _0x37e40a['NTITe'](_0x424c26,_0x17dfbc,_0x356a52);},'EcRcS':_0xbe9793(0x18c)+'r','SgTyD':function(_0xfe7665,_0x1ee7d7){var _0x468341=_0xbe9793;return _0x37e40a[_0x468341(0x28f)](_0xfe7665,_0x1ee7d7);},'BgAur':_0x37e40a['WURMW'],'HamPJ':_0x37e40a['agwuS'],'dxIkF':function(_0x4c3fed,_0x34dbb0){var _0x3ace59=_0xbe9793;return _0x37e40a[_0x3ace59(0x535)](_0x4c3fed,_0x34dbb0);},'gssFt':function(_0x4407f5,_0x34a430){return _0x4407f5+_0x34a430;},'vfdeg':_0x37e40a[_0xbe9793(0x62c)],'TrEWW':function(_0x23ed43,_0x5a7d4f){return _0x23ed43+_0x5a7d4f;},'MNTOQ':_0x37e40a['NQbPJ'],'kcJQH':function(_0x43c726,_0x3afcef,_0x378f5a,_0x151900,_0x209fe9){return _0x37e40a['WErZh'](_0x43c726,_0x3afcef,_0x378f5a,_0x151900,_0x209fe9);}};_0x13a183['adblo'+'ck']&&_0x37e40a[_0xbe9793(0x41c)](setInterval,()=>{var _0x294215=_0xbe9793;try{for(var _0x48b4f4 of[_0x24d3b5[_0x294215(0x66a)],'kour-'+_0x294215(0x5a5)+_0x294215(0x3a6)+'paren'+'t',_0x24d3b5[_0x294215(0x4dc)],_0x294215(0x6ab)+'creen'+_0x294215(0x488)+'s']){var _0x176b15=document['getEl'+'ement'+_0x294215(0x409)](_0x48b4f4);if(_0x176b15&&_0x24d3b5['CmvXJ'](_0x48b4f4,'fulls'+_0x294215(0x1fe)+'-banr'+'s')){var _0x45bb17=_0x176b15['child'+_0x294215(0x1b6)];for(var _0x4044f6=-0x11*0xb+0x99+-0x1*-0x22;_0x4044f6<_0x45bb17['lengt'+'h'];_0x4044f6++){if(_0x45bb17[_0x4044f6]['id']&&_0x45bb17[_0x4044f6]['id']['index'+'Of'](_0x294215(0x3cd)+_0x294215(0x515))===0xafc+0x73c*0x1+-0x1238)_0x45bb17[_0x4044f6][_0x294215(0x258)][_0x294215(0x23e)+'ay']=_0x24d3b5[_0x294215(0x440)];}}else{if(_0x176b15)_0x176b15['style']['displ'+'ay']=_0x24d3b5['jUeYN'];}}}catch(_0x3a4811){}},-0x1*-0x1321+0x25e5+-0x3136);var _0x3ffff8=document['creat'+_0xbe9793(0x5f3)+'ent']('canva'+'s');_0x3ffff8['style'][_0xbe9793(0x719)+'xt']=_0x37e40a['yNBFj'];var _0x56ef88=_0x3ffff8[_0xbe9793(0x606)+'ntext']('2d');function _0x2a4340(){var _0x583ae1=_0xbe9793;try{var _0x262f29=document[_0x583ae1(0x6ab)+_0x583ae1(0x1fe)+_0x583ae1(0x5a9)+'nt'],_0x5c4ce4=_0x262f29&&_0x37e40a[_0x583ae1(0x4e9)](_0x262f29[_0x583ae1(0x4e7)+'me'],_0x37e40a['nmGHT'])?_0x262f29:document['body']||document['docum'+_0x583ae1(0x5c0)+_0x583ae1(0x264)];if(_0x37e40a[_0x583ae1(0x328)](_0x3ffff8['paren'+_0x583ae1(0x37e)],_0x5c4ce4))_0x5c4ce4[_0x583ae1(0x6d3)+_0x583ae1(0x52b)+'d'](_0x3ffff8);}catch(_0x29344f){try{document[_0x583ae1(0x698)]['appen'+_0x583ae1(0x52b)+'d'](_0x3ffff8);}catch(_0x3bf2fe){}}}var _0x4186f9={'w':0x0,'h':0x0,'dpr':0x0};function _0x993aac(){var _0x2969a4=_0xbe9793,_0x27eb27=window[_0x2969a4(0x6a7)+'ePixe'+'lRati'+'o']||-0x5*0x4be+0x789*-0x5+0x3d64*0x1,_0x503bef=window['inner'+'Width'],_0x417a90=window[_0x2969a4(0x2d1)+'Heigh'+'t'];if(_0x24d3b5['cyWqU'](_0x503bef,_0x4186f9['w'])&&_0x417a90===_0x4186f9['h']&&_0x24d3b5['cyWqU'](_0x27eb27,_0x4186f9['dpr']))return;_0x4186f9['w']=_0x503bef,_0x4186f9['h']=_0x417a90,_0x4186f9['dpr']=_0x27eb27,_0x3ffff8['width']=Math[_0x2969a4(0x2ec)](_0x503bef*_0x27eb27),_0x3ffff8[_0x2969a4(0x42b)+'t']=Math['round'](_0x24d3b5['zRrTd'](_0x417a90,_0x27eb27)),_0x56ef88[_0x2969a4(0x560)+'ansfo'+'rm'](_0x27eb27,0x405+-0x2c5*-0xb+0x113e*-0x2,0x1*0x6dc+0x6*0x49d+-0x228a,_0x27eb27,0x1*-0x247e+0x12fc+0x6*0x2eb,0x4b2+-0x2*0xd29+0x1*0x15a0);}var _0x4cd128=-0x95*0x16+0x5c0+0x70e,_0x5e55a7=performance['now'](),_0x4fc41b=-0x1ab9+-0x13*-0x72+0x1243;function _0x56f935(_0x1ee64d){var _0x5becd3=_0xbe9793,_0x1d4834={'PVOcN':'rgba('+'255,1'+'07,15'+_0x5becd3(0x69b)+'5)','GLlSr':_0x37e40a['PBtLj'],'YMwtj':function(_0x2e2879,_0xbd320d){var _0x5a2c39=_0x5becd3;return _0x37e40a[_0x5a2c39(0x6c9)](_0x2e2879,_0xbd320d);},'blFdh':'FUsJR','xmKsn':_0x37e40a[_0x5becd3(0x737)],'GipRR':function(_0x57b929,_0x4025db){var _0x1df792=_0x5becd3;return _0x37e40a[_0x1df792(0x3e2)](_0x57b929,_0x4025db);},'tunRv':_0x5becd3(0x26a)+'-sans'+'-seri'+'f,sys'+_0x5becd3(0x279)+_0x5becd3(0x2cb)+_0x5becd3(0x51e)+'if','ZvJJz':function(_0x54c9ca,_0x4dfdc2){return _0x54c9ca*_0x4dfdc2;},'vCaBg':function(_0x4c029c,_0x2a8847){return _0x4c029c+_0x2a8847;},'TesUs':function(_0x15c4e2,_0xd4a617){return _0x15c4e2*_0xd4a617;},'KnIbM':function(_0x142883,_0x36d638){return _0x142883+_0x36d638;},'pQbkd':function(_0x372c4a,_0x395f8b){return _0x372c4a/_0x395f8b;}},_0x1ce2d8=_0x37e40a['iJkUy'](Number,_0x13a183[_0x5becd3(0x1e6)+'le'])||0x11bb+0x1*-0x456+-0xd64,_0x1b96a1=(-0x1*0x699+0x2655+-0x1f9a)*_0x1ce2d8,_0x4f9a05=(-0x1fd6+-0xc97*0x1+0x2c71)*_0x1ce2d8,_0x55e8bd=_0x1b96a1*(-0x3*0x91+0xfe9*-0x1+0x119f)+_0x4f9a05*(0x16a4+0x193*-0x6+0x8*-0x1a6),_0x51f809=_0x37e40a[_0x5becd3(0x4fd)](_0x1b96a1*(0x2338+-0x26ad*-0x1+-0x49e2),_0x4f9a05*(-0x19e+0x73e+-0x59e)),_0x2cc22c=_0x13a183['ksPos'],_0x4122a8=_0x2cc22c==='br'?_0x37e40a[_0x5becd3(0x61e)](_0x1ee64d['right']-(0x10b*-0x5+-0x1abe+0x2005),_0x55e8bd):_0x1ee64d['left']+(0x4*0xc2+-0x1*-0xdf+-0x3d7),_0x34a6b3=_0x37e40a[_0x5becd3(0x21d)](_0x2cc22c,'ml')?_0x37e40a['wDYPj'](_0x1ee64d[_0x5becd3(0x23f)]+_0x37e40a['NuRlf'](_0x1ee64d[_0x5becd3(0x42b)+'t'],0x2159*0x1+0x219c+-0x42f3),_0x51f809/(-0x1d*0xbb+0x3b*-0x70+0x2f01)):_0x37e40a[_0x5becd3(0x54c)](_0x1ee64d[_0x5becd3(0x29e)+'m']-_0x51f809,_0x2cc22c==='bl'?0x651+-0x1*0x20cb+0x1ada:-0x8c4*-0x1+-0x11*-0x246+-0x2ed4),_0x55d04e=(_0x19d27d,_0x2f695c,_0x2bbc79,_0x146e57,_0x409f5c,_0x1ac0e3,_0x4d506d)=>{var _0x27d3bf=_0x5becd3,_0x413297=_0x108989[_0x27d3bf(0x3b3)](_0x2f695c);_0x56ef88['save'](),_0x56ef88[_0x27d3bf(0x3de)+'Path']();if(_0x56ef88[_0x27d3bf(0x2ec)+'Rect'])_0x56ef88[_0x27d3bf(0x2ec)+'Rect'](_0x2bbc79,_0x146e57,_0x409f5c,_0x1ac0e3,(0x14dc+-0x1fad+0xad8*0x1)*_0x1ce2d8);else _0x56ef88[_0x27d3bf(0x494)](_0x2bbc79,_0x146e57,_0x409f5c,_0x1ac0e3);_0x56ef88[_0x27d3bf(0x2bb)+'tyle']=_0x413297?_0x1d4834[_0x27d3bf(0x320)]:_0x1d4834[_0x27d3bf(0x2d0)],_0x56ef88[_0x27d3bf(0x6bd)](),_0x56ef88[_0x27d3bf(0x670)+'idth']=-0x724+-0x291*-0x9+-0xff4,_0x56ef88[_0x27d3bf(0x3dd)+_0x27d3bf(0x2d6)+'e']=_0x413297?_0xa2da9:_0x27d3bf(0x4f6)+_0x27d3bf(0x41f)+_0x27d3bf(0x35f)+_0x27d3bf(0x16e)+'5)',_0x56ef88[_0x27d3bf(0x3dd)+'e'](),_0x413297&&(_0x1d4834[_0x27d3bf(0x3a8)](_0x1d4834[_0x27d3bf(0x4eb)],_0x27d3bf(0x3b9))?(_0x56ef88[_0x27d3bf(0x3d3)+_0x27d3bf(0x683)+'r']=_0x1d60b2,_0x56ef88[_0x27d3bf(0x3d3)+_0x27d3bf(0x321)]=-0x1fc0+-0x1*0x851+-0x281f*-0x1,_0x56ef88[_0x27d3bf(0x6bd)](),_0x56ef88[_0x27d3bf(0x3d3)+'wBlur']=-0x203c*-0x1+-0x984+-0x16b8):(_0x27ba9e=new _0x17491c(),_0x31137b[_0x27d3bf(0x538)](_0x219249,_0x2adc6b))),_0x56ef88['fillS'+_0x27d3bf(0x522)]=_0x413297?_0x1d4834[_0x27d3bf(0x31c)]:'rgba('+_0x27d3bf(0x5e7)+_0x27d3bf(0x56f)+_0x27d3bf(0x437)+')',_0x56ef88[_0x27d3bf(0x420)+_0x27d3bf(0x2b1)]='cente'+'r',_0x56ef88[_0x27d3bf(0x4ef)+_0x27d3bf(0x315)+'ne']=_0x27d3bf(0x548)+'e',_0x56ef88['font']='700\x20'+Math[_0x27d3bf(0x2ec)](_0x1d4834[_0x27d3bf(0x2e4)](0x247f+0xcad+-0x3120,_0x1ce2d8))+_0x1d4834[_0x27d3bf(0x402)],_0x56ef88[_0x27d3bf(0x4a9)+_0x27d3bf(0x169)](_0x19d27d,_0x2bbc79+_0x409f5c/(0x8b*-0x27+-0xd75+-0x3*-0xb8c),_0x146e57+_0x1ac0e3/(0x3*-0x60e+-0x164d+0xd*0x31d)-(_0x4d506d?_0x1d4834['ZvJJz'](0x131+0x280*0x4+-0x2c*0x41,_0x1ce2d8):-0x2f*0xc7+0x169*-0x13+-0x304*-0x15)),_0x4d506d&&(_0x56ef88[_0x27d3bf(0x423)]=_0x1d4834['vCaBg'](_0x27d3bf(0x267)+Math[_0x27d3bf(0x2ec)](_0x1d4834['TesUs'](-0x1*0xed5+0x4c7*-0x5+0x26c1,_0x1ce2d8)),'px\x20ui'+'-sans'+'-seri'+'f,sys'+'tem-u'+_0x27d3bf(0x2cb)+_0x27d3bf(0x51e)+'if'),_0x56ef88[_0x27d3bf(0x2bb)+'tyle']=_0x413297?_0x1d4834['xmKsn']:'rgba('+'255,2'+_0x27d3bf(0x56f)+_0x27d3bf(0x32d)+'5)',_0x56ef88[_0x27d3bf(0x4a9)+'ext'](_0x4d506d,_0x2bbc79+_0x409f5c/(0x11cc+0x35*0x7a+0x44e*-0xa),_0x1d4834[_0x27d3bf(0x43b)](_0x146e57+_0x1d4834[_0x27d3bf(0x265)](_0x1ac0e3,-0x2601+-0x1943*-0x1+-0x10*-0xcc),(0x2611*-0x1+0x1*0x233+-0x11f3*-0x2)*_0x1ce2d8))),_0x56ef88[_0x27d3bf(0x1a2)+'re']();};_0x55d04e('W',_0x5becd3(0x465),_0x37e40a['Kntbt'](_0x4122a8+_0x1b96a1,_0x4f9a05),_0x34a6b3,_0x1b96a1,_0x1b96a1),_0x37e40a['pkTNA'](_0x55d04e,'A',_0x37e40a['HmaGL'],_0x4122a8,_0x34a6b3+_0x1b96a1+_0x4f9a05,_0x1b96a1,_0x1b96a1),_0x37e40a['UQzdZ'](_0x55d04e,'S',_0x37e40a['wxcxD'],_0x37e40a['BaTpr'](_0x4122a8,_0x1b96a1)+_0x4f9a05,_0x37e40a[_0x5becd3(0x313)](_0x34a6b3,_0x1b96a1)+_0x4f9a05,_0x1b96a1,_0x1b96a1),_0x55d04e('D',_0x37e40a['WevHf'],_0x37e40a['BaTpr'](_0x4122a8,_0x37e40a[_0x5becd3(0x3d2)](_0x37e40a[_0x5becd3(0x61b)](_0x1b96a1,_0x4f9a05),-0x25f*0x2+0x26d1+0x201*-0x11)),_0x37e40a[_0x5becd3(0x666)](_0x34a6b3,_0x1b96a1)+_0x4f9a05,_0x1b96a1,_0x1b96a1);var _0x229a7b=_0x37e40a['oaRZO'](_0x55e8bd-_0x4f9a05,-0x1317*0x1+-0x26e0+0x39f9),_0x25bfb4=_0x34a6b3+_0x37e40a['mKBHK'](_0x1b96a1+_0x4f9a05,-0x1c92+-0x2*-0x10f3+-0x552);_0x55d04e(_0x37e40a[_0x5becd3(0x20d)],_0x37e40a[_0x5becd3(0x6fe)],_0x4122a8,_0x25bfb4,_0x229a7b,_0x1b96a1,_0x13a183[_0x5becd3(0x617)]?_0x37e40a['BaTpr'](_0x37e40a[_0x5becd3(0x401)](_0x40e862,0x731*-0x4+-0x14*0x94+0x1*0x2855),_0x37e40a[_0x5becd3(0x625)]):''),_0x37e40a[_0x5becd3(0x474)](_0x55d04e,_0x5becd3(0x399),_0x5becd3(0x378)+'3',_0x37e40a['NYcQM'](_0x4122a8,_0x229a7b)+_0x4f9a05,_0x25bfb4,_0x229a7b,_0x1b96a1,_0x13a183['ksCps']?_0x37e40a[_0x5becd3(0x568)](_0x40e862(0x373*0x7+-0x4*-0x3df+-0x1*0x279e),_0x37e40a['LmoVu']):''),_0x37e40a['pkTNA'](_0x55d04e,'',_0x5becd3(0x6b2),_0x4122a8,_0x25bfb4+_0x1b96a1+_0x4f9a05,_0x55e8bd,_0x1b96a1*(-0x449*-0x8+-0x763*-0x5+0x17bd*-0x3+0.45));}function _0x611832(_0x12b248){var _0x3975c7=_0xbe9793,_0x32d32c=('20|18'+_0x3975c7(0x235)+_0x3975c7(0x66f)+'|21|1'+'4|15|'+_0x3975c7(0x2cf)+_0x3975c7(0x1fb)+'12|13'+_0x3975c7(0x4ae)+_0x3975c7(0x52c)+_0x3975c7(0x58e)+'3|17|'+'4')[_0x3975c7(0x2f8)]('|'),_0x3822fe=-0x1*0x757+0x53e*-0x3+-0x5*-0x49d;while(!![]){switch(_0x32d32c[_0x3822fe++]){case'0':_0x56ef88['moveT'+'o'](_0x3a98d9,_0x24d3b5['REwSm'](_0x1c324c-_0x47015f,_0x2f2cee));continue;case'1':_0x56ef88[_0x3975c7(0x452)+'o'](_0x3a98d9,_0x1c324c+_0x47015f);continue;case'2':_0x56ef88['begin'+_0x3975c7(0x2ca)]();continue;case'3':_0x56ef88[_0x3975c7(0x3dd)+'e']();continue;case'4':_0x56ef88['resto'+'re']();continue;case'5':_0x56ef88[_0x3975c7(0x3de)+'Path']();continue;case'6':var _0x37e7cf=/^#[0-9a-f]{6}$/i['test'](_0x13a183[_0x3975c7(0x447)+'or'])?_0x13a183[_0x3975c7(0x447)+'or']:_0x24d3b5[_0x3975c7(0x652)];continue;case'7':_0x56ef88['fillS'+'tyle']=_0x37e7cf;continue;case'8':_0x56ef88['lineT'+'o'](_0x24d3b5[_0x3975c7(0x22a)](_0x3a98d9,_0x47015f),_0x1c324c);continue;case'9':_0x56ef88['lineT'+'o'](_0x3a98d9,_0x1c324c-_0x47015f);continue;case'10':_0x56ef88[_0x3975c7(0x56e)]();continue;case'11':_0x56ef88['moveT'+'o'](_0x24d3b5['NmbgT'](_0x24d3b5[_0x3975c7(0x59a)](_0x3a98d9,_0x47015f),_0x2f2cee),_0x1c324c);continue;case'12':_0x56ef88[_0x3975c7(0x452)+'o'](_0x3a98d9+_0x47015f,_0x1c324c);continue;case'13':_0x56ef88[_0x3975c7(0x578)+'o'](_0x3a98d9+_0x47015f+_0x2f2cee,_0x1c324c);continue;case'14':_0x56ef88[_0x3975c7(0x3d3)+'wColo'+'r']=_0x37e7cf;continue;case'15':_0x56ef88[_0x3975c7(0x3d3)+_0x3975c7(0x321)]=0x14*-0x1d5+0x2dd*0x8+-0x496*-0x3;continue;case'16':_0x56ef88[_0x3975c7(0x578)+'o'](_0x3a98d9,_0x24d3b5['HPPFv'](_0x1c324c+_0x47015f,_0x2f2cee));continue;case'17':_0x56ef88[_0x3975c7(0x6bd)]();continue;case'18':var _0x1bd24f=Number(_0x13a183[_0x3975c7(0x4e1)+'e'])||-0x146*0x7+0x14d9+0x2*-0x5f7;continue;case'19':var _0x47015f=(-0x148a+0x1*0xe31+-0x7*-0xe9)*_0x1bd24f,_0x2f2cee=_0x24d3b5['zRrTd'](0x1f*0xb9+-0xa*-0x101+-0x1*0x2069,_0x1bd24f);continue;case'20':var _0x3a98d9=_0x24d3b5['dZtYy'](_0x12b248['width'],0x219d*0x1+-0x1*0x1af5+-0x6a6),_0x1c324c=_0x12b248[_0x3975c7(0x42b)+'t']/(-0x25*-0xbe+0x5d9+-0x6a9*0x5);continue;case'21':_0x56ef88[_0x3975c7(0x670)+'idth']=Math[_0x3975c7(0x360)](0x9d*0x9+0x1*0x51+-0x5d5+0.5,_0x24d3b5['PCYmH'](-0x71*0x2f+0x14e8+-0x3*0xd,_0x1bd24f));continue;case'22':_0x56ef88['strok'+_0x3975c7(0x2d6)+'e']=_0x37e7cf;continue;case'23':_0x56ef88[_0x3975c7(0x1c7)](_0x3a98d9,_0x1c324c,_0x24d3b5['nldgn'](-0x205f+0x2533+-0x4d3+0.6000000000000001,_0x1bd24f),-0x330+0xf24+-0xbf4,Math['PI']*(0x141b*0x1+-0x1c31+-0x38*-0x25));continue;}break;}}function _0x41130b(_0x24dbf4){var _0x239c4b=_0xbe9793;if(_0x24d3b5[_0x239c4b(0x73a)]==='duVjI'){_0x56ef88[_0x239c4b(0x56e)](),_0x56ef88[_0x239c4b(0x423)]=_0x24d3b5[_0x239c4b(0x6ba)],_0x56ef88[_0x239c4b(0x420)+'lign']='left',_0x56ef88[_0x239c4b(0x4ef)+'aseli'+'ne']=_0x24d3b5['PPktK'];var _0x308f51=-0x1e2f+-0x1ee3+0x3d3e,_0x54735e=-0x1689+-0x1*-0x1e67+0x1a*-0x4d,_0x2b3107=(_0x306b12,_0x5565bc)=>{var _0xd48aa3=_0x239c4b;_0x56ef88[_0xd48aa3(0x2bb)+_0xd48aa3(0x522)]=_0x5565bc||'rgba('+'255,2'+'35,24'+_0xd48aa3(0x6d0)+'5)',_0x56ef88['fillT'+'ext'](_0x306b12,_0x54735e,_0x308f51),_0x308f51+=0x1584+0x2b*-0xe+-0x131a;};_0x24d3b5[_0x239c4b(0x72e)](_0x2b3107,_0x239c4b(0x48a)+_0x239c4b(0x26e)+_0x239c4b(0x543)+'1',_0x239c4b(0x473)+'9d');if(_0x13a183[_0x239c4b(0x471)])_0x24d3b5[_0x239c4b(0x3ee)](_0x2b3107,_0x4fc41b+_0x24d3b5['dkWDa']);if(!_0x56bd59[_0x239c4b(0x70b)+_0x239c4b(0x636)])_0x24d3b5['eucSW'](_0x2b3107,'waiti'+_0x239c4b(0x3ae)+'r\x20gam'+'e…',_0x239c4b(0x4f6)+'255,1'+'80,19'+_0x239c4b(0x667)+')');_0x56ef88[_0x239c4b(0x1a2)+'re']();}else _0x180e6f[_0x239c4b(0x2ea)+'ed']=![];}function _0x5212d0(){var _0x1791a9=_0xbe9793,_0x57cd25=('1|8|0'+'|10|9'+_0x1791a9(0x35d)+'2|7|3'+'|6')[_0x1791a9(0x2f8)]('|'),_0x1791e1=-0x15f2*0x1+0x24e7+-0xef5;while(!![]){switch(_0x57cd25[_0x1791e1++]){case'0':var _0x3462fc=performance['now']();continue;case'1':requestAnimationFrame(_0x5212d0);continue;case'2':var _0x28cda3={'left':0x0,'top':0x0,'right':_0x4186f9['w'],'bottom':_0x4186f9['h'],'width':_0x4186f9['w'],'height':_0x4186f9['h']};continue;case'3':if(_0x13a183[_0x1791a9(0x2df)+'rokes'])_0x56f935(_0x28cda3);continue;case'4':_0x56ef88[_0x1791a9(0x3a9)+_0x1791a9(0x188)](0x3*-0x80b+0x6*0x46a+0x1*-0x25b,0xc2a+-0x2467+0x183d,_0x4186f9['w'],_0x4186f9['h']);continue;case'5':_0x2a4340();continue;case'6':_0x41130b(_0x28cda3);continue;case'7':if(_0x13a183[_0x1791a9(0x4b5)+_0x1791a9(0x5c3)])_0x611832(_0x28cda3);continue;case'8':_0x4cd128++;continue;case'9':_0x993aac();continue;case'10':_0x24d3b5[_0x1791a9(0x332)](_0x3462fc-_0x5e55a7,-0x15b3*0x1+-0x25cd+0x3d74)&&(_0x4fc41b=Math[_0x1791a9(0x2ec)](_0x24d3b5['dZtYy'](_0x4cd128*(0x2*-0xca3+0x113e+0xbf0),_0x3462fc-_0x5e55a7)),_0x4cd128=-0x1fb4*-0x1+0xdc3+-0x2d77,_0x5e55a7=_0x3462fc);continue;}break;}}var _0x365e1b=document[_0xbe9793(0x355)+'eElem'+'ent']('div');_0x365e1b['id']=_0xbe9793(0x5b3)+_0xbe9793(0x1cd),_0x365e1b[_0xbe9793(0x258)][_0xbe9793(0x719)+'xt']=_0xbe9793(0x32f)+'ion:f'+'ixed;'+_0xbe9793(0x458)+':0;z-'+_0xbe9793(0x6b8)+_0xbe9793(0x373)+_0xbe9793(0x481)+_0xbe9793(0x623)+_0xbe9793(0x26b)+'event'+'s:non'+'e;';var _0x16c88b=_0x365e1b[_0xbe9793(0x672)+_0xbe9793(0x665)+'ow']({'mode':_0x37e40a['vBrmO']});(document[_0xbe9793(0x698)]||document['docum'+_0xbe9793(0x5c0)+'ement'])[_0xbe9793(0x6d3)+_0xbe9793(0x52b)+'d'](_0x365e1b);var _0x367c1d=![],_0x1b0b79={};try{_0x1b0b79=JSON[_0xbe9793(0x673)](localStorage[_0xbe9793(0x649)+'em'](_0xbe9793(0x5b3)+'a.kou'+'r.ui.'+'v1')||'{}');}catch(_0x1c6767){}function _0x3be840(){var _0x8f518c=_0xbe9793;try{localStorage[_0x8f518c(0x312)+'em'](_0x24d3b5[_0x8f518c(0x682)],JSON[_0x8f518c(0x396)+'gify'](_0x1b0b79));}catch(_0x1cce75){}}function _0x3015ec(_0x19fee8,_0x293153){var _0x10f03f=_0xbe9793,_0xb733dc={'TDwjl':_0x37e40a[_0x10f03f(0x3ad)],'DPeYa':_0x37e40a[_0x10f03f(0x545)],'OmidE':function(_0x5af990,_0x356d8d,_0x1103df,_0x104176,_0x4429dc){return _0x5af990(_0x356d8d,_0x1103df,_0x104176,_0x4429dc);},'ZzvBH':_0x10f03f(0x1ef)+_0x10f03f(0x158),'whsxk':_0x37e40a[_0x10f03f(0x703)],'hazYL':_0x10f03f(0x2c6)+'ter','FkrZI':_0x10f03f(0x15b)+'nPlat'+_0x10f03f(0x44a)+_0x10f03f(0x338)+_0x10f03f(0x22b)+_0x10f03f(0x648)+'lMoti'+'on','rkzuE':function(_0x10e9f4,_0x37284d,_0x244b2b,_0x3c9229,_0x3fbcfc,_0x4e703b,_0x54584e,_0x8d485c){var _0xb812d2=_0x10f03f;return _0x37e40a[_0xb812d2(0x6fa)](_0x10e9f4,_0x37284d,_0x244b2b,_0x3c9229,_0x3fbcfc,_0x4e703b,_0x54584e,_0x8d485c);},'acsnR':_0x37e40a[_0x10f03f(0x6ca)],'gQsIk':function(_0x1c22d1,_0x748819){return _0x37e40a['xBObs'](_0x1c22d1,_0x748819);},'dgeod':_0x37e40a['Tyfik'],'GUEby':_0x10f03f(0x172)+'check'+'ed','CXLww':_0x10f03f(0x216)},_0x2ab170=document[_0x10f03f(0x355)+'eElem'+_0x10f03f(0x37d)]('butto'+'n');return _0x2ab170['type']=_0x10f03f(0x5b0)+'n',_0x2ab170['class'+'Name']=_0x37e40a['HPSPO'],_0x2ab170[_0x10f03f(0x3f0)+'tribu'+'te'](_0x10f03f(0x514),_0x37e40a[_0x10f03f(0x66d)]),_0x2ab170[_0x10f03f(0x3f0)+_0x10f03f(0x2a2)+'te'](_0x10f03f(0x172)+_0x10f03f(0x527)+'ed',String(!!_0x19fee8)),_0x2ab170['oncli'+'ck']=_0x35ccaa=>{var _0x38dab9=_0x10f03f;if(_0xb733dc[_0x38dab9(0x62b)](_0xb733dc[_0x38dab9(0x4c1)],'jnDnf')){_0x35ccaa['stopP'+_0x38dab9(0x646)+_0x38dab9(0x339)]();var _0x37bf1e=_0x2ab170[_0x38dab9(0x2dc)+'tribu'+'te'](_0xb733dc[_0x38dab9(0x3bf)])!==_0xb733dc[_0x38dab9(0x58f)];_0x2ab170['setAt'+_0x38dab9(0x2a2)+'te'](_0x38dab9(0x172)+_0x38dab9(0x527)+'ed',String(_0x37bf1e)),_0x293153(_0x37bf1e);}else{var _0x40a3a8=('2|0|3'+'|6|7|'+'5|4|1')['split']('|'),_0x4aff3f=-0x11de+0x8*-0x3d3+0x183b*0x2;while(!![]){switch(_0x40a3a8[_0x4aff3f++]){case'0':_0x2e71aa=_0x3bca05['Unity'+_0x38dab9(0x603)+_0x38dab9(0x3f9)][_0x38dab9(0x685)+'Wrapp'+'er'];continue;case'1':if(_0x19071c[_0x38dab9(0x2e5)+_0x38dab9(0x1dd)+'e'])_0x48ceae(_0xb733dc[_0x38dab9(0x6ff)],'Legio'+_0x38dab9(0x1e2)+_0x38dab9(0x44a)+'.Over'+'tide.'+_0x38dab9(0x192)+'ent',_0x38dab9(0x2ce)+'unded',[_0x38dab9(0x171)],_0xb733dc[_0x38dab9(0x51b)],(_0x2fd061,_0x17d7fe)=>{var _0x13c944=_0x38dab9;_0x7bd4d9['aJxCC'](_0x48150a,_0x37bf93,_0x17d7fe,_0xc214e2,_0x13c944(0x3dc)+'ents');},!![]);continue;case'2':var _0x7bd4d9={'aJxCC':function(_0x11fc02,_0xc038d1,_0x558c86,_0x13edce,_0x281964){var _0x1ac452=_0x38dab9;return _0xb733dc[_0x1ac452(0x377)](_0x11fc02,_0xc038d1,_0x558c86,_0x13edce,_0x281964);}};continue;case'3':_0x26d9cd=_0x75e607['Unity'+'WebMo'+'dkit'][_0x38dab9(0x557)+'me']['creat'+_0x38dab9(0x612)+'in']({'name':_0xb733dc['ZzvBH'],'version':'1.1.0','referencedAssemblies':['Assem'+'bly-C'+_0x38dab9(0x2be)+_0x38dab9(0x66e)]});continue;case'4':if(_0x4b4abc[_0x38dab9(0x2e5)+'aptur'+'e'])_0x5f221a(_0xb733dc[_0x38dab9(0x191)],_0xb733dc['hazYL'],'SetGa'+'meRun'+_0x38dab9(0x449),[_0xb733dc[_0x38dab9(0x51b)],'i32'],_0x3e4007,(_0x408fae,_0x2b0e21)=>{_0x249406(_0x58f5b8,_0x2b0e21,_0x466112,'shoot'+'ers');},!![]);continue;case'5':if(_0x3b1175[_0x38dab9(0x4f5)+_0x38dab9(0x2f1)+'il'])_0x3afd9d(_0x38dab9(0x28e)+_0x38dab9(0x372),_0xb733dc[_0x38dab9(0x52e)],'Tick',[_0xb733dc[_0x38dab9(0x51b)]],_0x219346,_0x2d77de,!!_0x389c55['noRec'+_0x38dab9(0x372)]);continue;case'6':if(_0x308aee[_0x38dab9(0x3c2)+'od'])_0x743137(_0x38dab9(0x64b),'OHeal'+'th',_0x38dab9(0x65a)+'ateTa'+_0x38dab9(0x4bd)+_0x38dab9(0x425),['i32',_0x38dab9(0x171)],_0x2138de,_0x46734f,!!_0x1a463a[_0x38dab9(0x64b)]);continue;case'7':if(_0xb30041['hookG'+'odDie'])_0xb733dc['rkzuE'](_0x2b4971,_0x38dab9(0x40f)+'e','OHeal'+'th',_0xb733dc[_0x38dab9(0x318)],['i32',_0xb733dc[_0x38dab9(0x51b)],_0x38dab9(0x171),_0xb733dc['DPeYa'],_0xb733dc['DPeYa']],_0x3613d9,_0x413142,!!_0x46367a[_0x38dab9(0x64b)]);continue;}break;}}},_0x2ab170;}function _0x3a3559(_0x35e576,_0x4c72c8,_0x36a206,_0xf23a3d,_0x1c68c0){var _0x3a46f3=_0xbe9793,_0x59b493=document[_0x3a46f3(0x355)+'eElem'+_0x3a46f3(0x37d)](_0x3a46f3(0x383));_0x59b493[_0x3a46f3(0x3ab)+_0x3a46f3(0x359)]='sk-ra'+'nge';var _0x749cb9=document[_0x3a46f3(0x355)+_0x3a46f3(0x5f3)+'ent'](_0x37e40a['Zhlbo']);_0x749cb9[_0x3a46f3(0x27e)]='range',_0x749cb9['class'+_0x3a46f3(0x359)]=_0x37e40a[_0x3a46f3(0x36c)],_0x749cb9[_0x3a46f3(0x3b4)]=_0x4c72c8,_0x749cb9[_0x3a46f3(0x360)]=_0x36a206,_0x749cb9[_0x3a46f3(0x728)]=_0xf23a3d,_0x749cb9[_0x3a46f3(0x5b7)]=_0x35e576;var _0x47d869=document['creat'+_0x3a46f3(0x5f3)+'ent']('span');_0x47d869['class'+_0x3a46f3(0x359)]=_0x37e40a['rwjpw'],_0x47d869[_0x3a46f3(0x4d4)+_0x3a46f3(0x27c)+'t']=String(_0x35e576);var _0xe2cb40=()=>{var _0x4fc2e2=_0x3a46f3;_0x47d869['textC'+_0x4fc2e2(0x27c)+'t']=_0x24d3b5[_0x4fc2e2(0x3ee)](String,_0x749cb9[_0x4fc2e2(0x5b7)]),_0x59b493['style'][_0x4fc2e2(0x6da)+'opert'+'y']('--p',_0x24d3b5[_0x4fc2e2(0x285)](_0x24d3b5['dZtYy'](_0x749cb9[_0x4fc2e2(0x5b7)]-_0x4c72c8,_0x24d3b5['REwSm'](_0x36a206,_0x4c72c8)),-0x542+-0x1a5e+0x4*0x801)+'%');};return _0x749cb9[_0x3a46f3(0x653)+'ut']=()=>{var _0xa6fdf8=_0x3a46f3,_0xb7260={'gbzRd':function(_0x493339){return _0x24d3b5['INMje'](_0x493339);}};_0x24d3b5[_0xa6fdf8(0x255)]===_0xa6fdf8(0x421)?(_0xe2cb40(),_0x1c68c0(Number(_0x749cb9['value']))):(_0x33a397[_0xa6fdf8(0x2e5)+'aptur'+'e']=_0x301b70,_0xb7260[_0xa6fdf8(0x4d3)](_0xca47b2));},_0xe2cb40(),_0x59b493[_0x3a46f3(0x6d3)+'d'](_0x749cb9,_0x47d869),_0x59b493;}function _0x3f090e(_0x2a881e,_0x4bf2dd){var _0x48c043=_0xbe9793;if(_0x37e40a['tEcVd'](_0x37e40a['aJDFm'],_0x48c043(0x1c5))){var _0x4b8ffa=document[_0x48c043(0x355)+_0x48c043(0x5f3)+'ent'](_0x48c043(0x19f));return _0x4b8ffa['type']=_0x48c043(0x4f4),_0x4b8ffa[_0x48c043(0x3ab)+'Name']=_0x37e40a[_0x48c043(0x334)],_0x4b8ffa['value']=/^#[0-9a-f]{6}$/i[_0x48c043(0x4b6)](_0x2a881e)?_0x2a881e:_0x37e40a[_0x48c043(0x17e)],_0x4b8ffa[_0x48c043(0x653)+'ut']=()=>_0x4bf2dd(_0x4b8ffa[_0x48c043(0x5b7)]),_0x4b8ffa;}else{var _0x440c85={'ynGPN':_0x24d3b5[_0x48c043(0x4d1)],'ZAYIq':function(_0x56106f,_0x3dfdf3,_0xd22d32,_0x4b20df,_0x42a31){return _0x56106f(_0x3dfdf3,_0xd22d32,_0x4b20df,_0x42a31);}};if(_0x34704f[_0x48c043(0x659)+_0x48c043(0x603)+_0x48c043(0x3f9)]&&!_0x3fd035[_0x48c043(0x47f)+_0x48c043(0x18d)]){var _0x580d04=('1|4|3'+_0x48c043(0x2f4)+_0x48c043(0x3d1))['split']('|'),_0x4dada5=-0x1*0x229b+-0x1ca2+0x3f3d;while(!![]){switch(_0x580d04[_0x4dada5++]){case'0':if(_0xf8de71['hookC'+'aptur'+'e'])_0x24d3b5['gNIeQ'](_0x349e1a,_0x48c043(0x1d9)+'ve','Legio'+_0x48c043(0x1e2)+_0x48c043(0x44a)+'.Over'+_0x48c043(0x22b)+_0x48c043(0x192)+_0x48c043(0x37d),_0x24d3b5['BxXaM'],[_0x48c043(0x171)],'i32',(_0x4937bc,_0x1e9165)=>{var _0x135aa8=_0x48c043;_0x440c85[_0x135aa8(0x3ff)](_0x11ddc3,_0x2c63f8,_0x1e9165,_0x100d09,'movem'+_0x135aa8(0x651));},!![]);continue;case'1':_0x3dd53f=_0x54f4d0[_0x48c043(0x659)+'WebMo'+'dkit'][_0x48c043(0x685)+_0x48c043(0x31e)+'er'];continue;case'2':if(_0x86b6bf['hookN'+_0x48c043(0x2f1)+'il'])_0x24d3b5['xOuuf'](_0x139210,_0x24d3b5['fxlGT'],_0x24d3b5['EIPmL'],'Tick',[_0x24d3b5[_0x48c043(0x415)]],_0x3c4096,_0x56748f,!!_0x425544[_0x48c043(0x28e)+_0x48c043(0x372)]);continue;case'3':if(_0x131cdc['hookG'+'od'])_0x3af3a7(_0x48c043(0x64b),_0x48c043(0x18e)+'th','Initi'+'ateTa'+_0x48c043(0x4bd)+'lth',[_0x48c043(0x171),_0x24d3b5['VLVdU']],_0x50a2b2,_0x26a413,!!_0x49284d[_0x48c043(0x64b)]);continue;case'4':_0x2d0cf6=_0x5cf5f7['Unity'+_0x48c043(0x603)+_0x48c043(0x3f9)]['Runti'+'me']['creat'+'ePlug'+'in']({'name':_0x24d3b5['naGJw'],'version':_0x24d3b5['Kiblm'],'referencedAssemblies':['Assem'+_0x48c043(0x3da)+'Sharp'+'.dll']});continue;case'5':if(_0x56cddb[_0x48c043(0x3c2)+_0x48c043(0x1ec)])_0x1cd34e(_0x24d3b5[_0x48c043(0x556)],_0x24d3b5['TKzDH'],_0x24d3b5[_0x48c043(0x5d0)],['i32','i32',_0x48c043(0x171),_0x48c043(0x171),_0x48c043(0x171)],_0x57f4aa,_0x23c8be,!!_0x4a7e95[_0x48c043(0x64b)]);continue;case'6':if(_0x3fbc55['hookC'+_0x48c043(0x1dd)+'e'])_0xb016d1(_0x48c043(0x1fd)+_0x48c043(0x1e0),_0x24d3b5[_0x48c043(0x621)],_0x48c043(0x3e0)+_0x48c043(0x5ff)+'ning',[_0x48c043(0x171),_0x48c043(0x171)],_0x3b47cb,(_0x54ff8e,_0x5e7961)=>{_0x35ea50(_0x4a2188,_0x5e7961,_0xd8e896,_0x440c85['ynGPN']);},!![]);continue;}break;}}}}function _0x1b9dcf(_0x22c84b,_0x397fde,_0x357afd){var _0x18ff69=_0xbe9793,_0x40afb2=_0x37e40a[_0x18ff69(0x4e5)]['split']('|'),_0x26d994=0x94*0xb+-0x2072+-0x6a*-0x3f;while(!![]){switch(_0x40afb2[_0x26d994++]){case'0':_0x46e7a5[_0x18ff69(0x441)+_0x18ff69(0x5a2)]=()=>_0x357afd(_0x46e7a5[_0x18ff69(0x5b7)]);continue;case'1':var _0x46e7a5=document[_0x18ff69(0x355)+'eElem'+'ent'](_0x18ff69(0x183)+'t');continue;case'2':_0x46e7a5[_0x18ff69(0x3ab)+'Name']='sk-fi'+'eld';continue;case'3':for(var [_0x43dfed,_0x548a7b]of _0x397fde){var _0x5467c0=document['creat'+'eElem'+_0x18ff69(0x37d)]('optio'+'n');_0x5467c0['value']=_0x43dfed,_0x5467c0[_0x18ff69(0x4d4)+_0x18ff69(0x27c)+'t']=_0x548a7b,_0x46e7a5['appen'+_0x18ff69(0x52b)+'d'](_0x5467c0);}continue;case'4':_0x46e7a5[_0x18ff69(0x5b7)]=_0x22c84b;continue;case'5':return _0x46e7a5;}break;}}function _0x260435(_0x507cb6,_0x18326c){var _0x4c8bfa=_0xbe9793,_0x4c5719=document[_0x4c8bfa(0x355)+'eElem'+_0x4c8bfa(0x37d)]('butto'+'n');return _0x4c5719[_0x4c8bfa(0x27e)]='butto'+'n',_0x4c5719[_0x4c8bfa(0x3ab)+'Name']=_0x37e40a[_0x4c8bfa(0x534)],_0x4c5719[_0x4c8bfa(0x4d4)+'onten'+'t']=_0x507cb6,_0x4c5719['oncli'+'ck']=_0x25cdfb=>{var _0x5ec534=_0x4c8bfa;_0x25cdfb['stopP'+_0x5ec534(0x646)+_0x5ec534(0x339)](),_0x18326c();},_0x4c5719;}function _0x24d581(_0x351008,_0x228625,_0x835134){var _0x3f63d6=_0xbe9793,_0x19f3ad=document[_0x3f63d6(0x355)+_0x3f63d6(0x5f3)+'ent'](_0x3f63d6(0x383));_0x19f3ad[_0x3f63d6(0x3ab)+_0x3f63d6(0x359)]='sk-ct'+'l';var _0x2857b8=document[_0x3f63d6(0x355)+'eElem'+_0x3f63d6(0x37d)]('span');_0x2857b8[_0x3f63d6(0x3ab)+'Name']='sk-la'+_0x3f63d6(0x5d8),_0x2857b8[_0x3f63d6(0x4d4)+_0x3f63d6(0x27c)+'t']=_0x351008;if(_0x228625){if(_0x37e40a['LuTZs']===_0x37e40a[_0x3f63d6(0x6c0)]){var _0x414d9d=document['creat'+_0x3f63d6(0x5f3)+_0x3f63d6(0x37d)](_0x37e40a[_0x3f63d6(0x6b7)]);_0x414d9d['class'+_0x3f63d6(0x359)]=_0x3f63d6(0x63a)+'nt',_0x414d9d[_0x3f63d6(0x4d4)+_0x3f63d6(0x27c)+'t']=_0x228625,_0x2857b8[_0x3f63d6(0x6d3)+_0x3f63d6(0x52b)+'d'](_0x414d9d);}else _0x24d3b5['nSKNQ'](_0x791ea,_0x23fce4,0x172*0xb+-0x148b+0x4f1,_0x24d3b5[_0x3f63d6(0x415)],_0x576d80),_0x24d3b5[_0x3f63d6(0x2bc)](_0x57c453,_0x50c8f1,-0x1*0x1e7+0xfe+-0x13d*-0x1,'i32',_0x33c99c);}return _0x19f3ad[_0x3f63d6(0x6d3)+'d'](_0x2857b8,_0x835134),_0x19f3ad;}function _0x340eb8(_0x248ff7,_0x3b8e2b){var _0x369b5a=_0xbe9793;if(_0x37e40a['AQhAX'](_0x369b5a(0x499),_0x369b5a(0x499)))try{_0x2a5a7c['enabl'+'ed']=!!_0x1a8ace;}catch(_0x7424c4){}else{var _0x13f76b=document[_0x369b5a(0x355)+'eElem'+_0x369b5a(0x37d)](_0x369b5a(0x383));return _0x13f76b[_0x369b5a(0x3ab)+_0x369b5a(0x359)]=_0x37e40a[_0x369b5a(0x568)](_0x37e40a[_0x369b5a(0x635)],_0x3b8e2b?_0x369b5a(0x44e):''),_0x13f76b[_0x369b5a(0x4d4)+_0x369b5a(0x27c)+'t']=_0x248ff7,_0x13f76b;}}function _0x2dfd65(_0x3e632a,_0x1c43ba,_0xd30241,_0x518862,_0x52521a){var _0xf66241=_0xbe9793,_0x31604={'RmyEk':function(_0x1980b8,_0x4abf35){return _0x1980b8+_0x4abf35;},'ChAev':'\x20|\x20ga'+_0xf66241(0x2b7),'bPeRd':'loade'+'d','rcwgS':_0x37e40a[_0xf66241(0x416)],'FblAO':_0x37e40a[_0xf66241(0x6ac)],'MnQIt':'UWMK\x20'+_0xf66241(0x486)+'NG\x20-\x20'+_0xf66241(0x429)+'ay\x20on'+'ly\x20(r'+'einst'+_0xf66241(0x6c7)+'he\x20us'+_0xf66241(0x590)+'ipt)','hWZql':function(_0x3ef331,_0xd314a){return _0x3ef331!==_0xd314a;}};if(_0x37e40a[_0xf66241(0x3e3)](_0xf66241(0x250),_0xf66241(0x520))){if(_0x5cc422)return;_0x3db88d=!![],_0x1e08ee['addEv'+'entLi'+_0xf66241(0x49e)+'r'](_0xf66241(0x5bb)+'wn',_0x508aa2,!![]),_0x530f73['addEv'+_0xf66241(0x455)+'stene'+'r']('keyup',_0x1fafa6,!![]),_0x3ff06d[_0xf66241(0x570)+'entLi'+_0xf66241(0x49e)+'r'](_0x24d3b5[_0xf66241(0x38c)],_0x5742dc,!![]),_0x1f1a96['addEv'+'entLi'+'stene'+'r'](_0xf66241(0x378)+'up',_0x2b360b,!![]),_0x212d75['addEv'+'entLi'+'stene'+'r']('blur',_0xe0a059);}else{var _0x7b12c3=document['creat'+'eElem'+_0xf66241(0x37d)](_0xf66241(0x383));_0x7b12c3['class'+'Name']=_0x37e40a['pyLFw'](_0xf66241(0x3eb)+'rd',_0xd30241?_0x37e40a[_0xf66241(0x5c7)]:'');var _0x157535=document['creat'+_0xf66241(0x5f3)+'ent']('div');_0x157535['class'+'Name']='sk-ca'+_0xf66241(0x2b9)+'ad';var _0x37d1cb=document[_0xf66241(0x355)+'eElem'+'ent'](_0x37e40a['rNIBi']);_0x37d1cb[_0xf66241(0x3ab)+'Name']='sk-ca'+'rd-ti'+'tle';var _0x12b09a=document[_0xf66241(0x355)+_0xf66241(0x5f3)+_0xf66241(0x37d)]('stron'+'g');_0x12b09a['textC'+_0xf66241(0x27c)+'t']=_0x3e632a,_0x37d1cb[_0xf66241(0x6d3)+_0xf66241(0x52b)+'d'](_0x12b09a);if(_0x518862){var _0xb024bb=_0x3015ec(_0xd30241,_0x1cfe07=>{var _0x15a536=_0xf66241;_0x31604['hWZql'](_0x15a536(0x562),'HCtZb')?_0x1b00e8[_0x15a536(0x4d4)+_0x15a536(0x27c)+'t']=_0x57ed38[_0x15a536(0x47f)+_0x15a536(0x18d)]?'SAFE\x20'+_0x15a536(0x21a)+'-\x20ove'+_0x15a536(0x186)+_0x15a536(0x1b5)+_0x15a536(0x480)+_0x15a536(0x368)+_0x15a536(0x260)+_0x15a536(0x500)+'\x20exit'+')':_0x2c75a1['uwmk']?_0x31604['RmyEk']('UWMK\x20'+'bound'+'\x20'+(_0x3ed94a[_0x15a536(0x3db)+_0x15a536(0x69d)]?_0x16e6b7[_0x15a536(0x3db)+'Ok']+'/'+_0xddcc5f[_0x15a536(0x3db)+_0x15a536(0x69d)]+('\x20hook'+'s'):'0\x20hoo'+'ks\x20ar'+'med\x20('+'all\x20o'+_0x15a536(0x1ff))+_0x31604[_0x15a536(0x707)]+(_0x5b9223[_0x15a536(0x70b)+_0x15a536(0x636)]?_0x31604[_0x15a536(0x3c6)]:_0x15a536(0x2f6)+'ng')+('\x20|\x20sh'+_0x15a536(0x1e0)+'\x20')+(_0x4cf80c[_0x15a536(0x336)+'ers']?_0x15a536(0x47d):_0x31604[_0x15a536(0x236)])+_0x31604[_0x15a536(0x277)]+(_0x25eae4[_0x15a536(0x3dc)+_0x15a536(0x651)]?_0x15a536(0x47d):'none'),_0xea1e4e['lastE'+'rror']?_0x15a536(0x504)+_0x15a536(0x4c4)+_0x55b2f3[_0x15a536(0x5ab)+'rror']:''):_0x31604['MnQIt']:(_0x7b12c3[_0x15a536(0x3ab)+'List'][_0x15a536(0x24b)+'e']('on',_0x1cfe07),_0x518862(_0x1cfe07));});_0x157535[_0xf66241(0x6d3)+'d'](_0x37d1cb,_0xb024bb);}else _0x157535['appen'+'dChil'+'d'](_0x37d1cb);_0x7b12c3[_0xf66241(0x6d3)+_0xf66241(0x52b)+'d'](_0x157535);if(_0x52521a&&_0x52521a['lengt'+'h']){var _0x28b49f=document[_0xf66241(0x355)+'eElem'+_0xf66241(0x37d)](_0xf66241(0x383));_0x28b49f['class'+'Name']=_0x37e40a['jAKpq'];var _0x478a1a=document['creat'+'eElem'+'ent'](_0x37e40a[_0xf66241(0x179)]);_0x478a1a['class'+_0xf66241(0x359)]='sk-md'+_0xf66241(0x21c),_0x478a1a['textC'+'onten'+'t']=_0x1c43ba,_0x28b49f['appen'+_0xf66241(0x52b)+'d'](_0x478a1a);for(var _0x26ebec of _0x52521a)_0x28b49f['appen'+_0xf66241(0x52b)+'d'](_0x26ebec);_0x7b12c3['appen'+'dChil'+'d'](_0x28b49f);}return _0x7b12c3;}}var _0x145e42=[{'id':_0x37e40a[_0xbe9793(0x5e2)],'label':_0x37e40a['REFgC']},{'id':'move','label':'Move'},{'id':_0xbe9793(0x262)+'l','label':_0x37e40a['uLcWP']},{'id':_0x37e40a['APDIz'],'label':_0xbe9793(0x62f)},{'id':_0x37e40a['YxAff'],'label':_0xbe9793(0x50f)+'y'}];function _0x2718e6(){var _0x26475e=_0xbe9793,_0x12f29a=_0x56bd59[_0x26475e(0x47f)+_0x26475e(0x18d)]?_0x24d3b5['wPNjr']:_0x56bd59['uwmk']?_0x24d3b5['HPPFv'](_0x24d3b5[_0x26475e(0x28b)](_0x24d3b5['kJpFV']+(_0x56bd59[_0x26475e(0x3db)+'Total']?_0x24d3b5[_0x26475e(0x29a)](_0x24d3b5[_0x26475e(0x28b)](_0x56bd59[_0x26475e(0x3db)+'Ok']+'/',_0x56bd59['hooks'+_0x26475e(0x69d)]),_0x24d3b5[_0x26475e(0x5cd)]):'0\x20hoo'+'ks\x20ar'+'med\x20('+_0x26475e(0x641)+'ff)')+(_0x26475e(0x43c)+_0x26475e(0x2b7)),_0x56bd59['gameL'+_0x26475e(0x636)]?_0x24d3b5[_0x26475e(0x46c)]:_0x24d3b5[_0x26475e(0x620)]),_0x24d3b5['FwvWU'])+(_0x56bd59[_0x26475e(0x336)+_0x26475e(0x375)]?_0x24d3b5[_0x26475e(0x316)]:_0x26475e(0x2e6))+(_0x26475e(0x3f8)+'vemen'+'t\x20')+(_0x56bd59[_0x26475e(0x3dc)+_0x26475e(0x651)]?_0x26475e(0x47d):_0x26475e(0x2e6)):_0x26475e(0x51c)+'MISSI'+_0x26475e(0x4cb)+'overl'+'ay\x20on'+'ly\x20(r'+_0x26475e(0x4e6)+_0x26475e(0x6c7)+_0x26475e(0x289)+_0x26475e(0x590)+_0x26475e(0x3e5);if(_0x56bd59[_0x26475e(0x5ab)+_0x26475e(0x3d9)])_0x12f29a+='\x20|\x20ER'+_0x26475e(0x4c4)+_0x56bd59[_0x26475e(0x5ab)+_0x26475e(0x3d9)];return _0x2dfd65(_0x26475e(0x4cf)+'s',_0x12f29a,_0x56bd59['uwmk'],null,[_0x24d3b5['hXxbu'](_0x24d581,_0x26475e(0x252)+_0x26475e(0x44d)+_0x26475e(0x33a),_0x24d3b5['GgBEb'],_0x24d3b5[_0x26475e(0x5a6)](_0x260435,_0x24d3b5[_0x26475e(0x337)],()=>{var _0x39c898=_0x26475e;try{if(_0x2c02bf)_0x2c02bf[_0x39c898(0x202)]('Unity'+_0x39c898(0x27f)+'e.App'+_0x39c898(0x426)+_0x39c898(0x6bb),_0x39c898(0x549)+_0x39c898(0x288)+'Frame'+_0x39c898(0x541),[0x15*-0x1a5+0x49d*0x3+0x15a2]);}catch(_0x47d4e4){}}))]);}function _0x458f1b(_0x253f07){var _0x2e6bba=_0xbe9793,_0x1007c2={'GrmFO':function(_0x71d6ed,_0x53c728,_0x3dca87){return _0x71d6ed(_0x53c728,_0x3dca87);},'xmmEU':'butto'+'n','jsIgn':_0x24d3b5[_0x2e6bba(0x580)],'zSRMC':_0x2e6bba(0x172)+_0x2e6bba(0x527)+'ed','mogZC':function(_0xb60d1){return _0xb60d1();},'AVhaL':_0x24d3b5[_0x2e6bba(0x1de)],'bKnYb':_0x24d3b5[_0x2e6bba(0x592)],'arvaP':_0x2e6bba(0x1c3)+'s','HXLjF':_0x2e6bba(0x43c)+'me\x20','xWeLf':'loade'+'d','DpEhr':_0x24d3b5['jUeYN'],'pfaeF':function(_0x188836,_0x289ba8){var _0x341ec8=_0x2e6bba;return _0x24d3b5[_0x341ec8(0x36b)](_0x188836,_0x289ba8);},'bbYXl':'vLPAr','aXnOR':_0x24d3b5[_0x2e6bba(0x598)],'OlvnU':'BwDbh','IrbVo':function(_0x24f1e7,_0x174f04){var _0x138a12=_0x2e6bba;return _0x24d3b5[_0x138a12(0x17b)](_0x24f1e7,_0x174f04);},'vcWdM':_0x24d3b5[_0x2e6bba(0x4b0)],'TOHtE':function(_0x2087ef){var _0x117acf=_0x2e6bba;return _0x24d3b5[_0x117acf(0x59f)](_0x2087ef);},'PwDxq':function(_0xe1737f){return _0x24d3b5['PeLpQ'](_0xe1737f);}};if(_0x2e6bba(0x36f)===_0x2e6bba(0x36f)){if(_0x24d3b5[_0x2e6bba(0x17b)](_0x253f07,_0x24d3b5['VvGQP'])){if(_0x24d3b5['OMzJN'](_0x2e6bba(0x5d7),_0x24d3b5['FRoST']))return[_0x24d3b5[_0x2e6bba(0x1a5)](_0x2718e6),_0x2dfd65(_0x2e6bba(0x721)+'ode',_0x2e6bba(0x37a)+_0x2e6bba(0x6b6)+'alth.'+'Initi'+'ateTa'+_0x2e6bba(0x4bd)+'lth\x20a'+_0x2e6bba(0x64f)+_0x2e6bba(0x630)+_0x2e6bba(0x19b)+'lDie,'+_0x2e6bba(0x22d)+'othin'+'g\x20can'+'\x20hurt'+_0x2e6bba(0x576)+_0x2e6bba(0x44c)+_0x2e6bba(0x45f),_0x13a183[_0x2e6bba(0x64b)],_0x1cced4=>{var _0x5145a8=_0x2e6bba;_0x13a183[_0x5145a8(0x64b)]=_0x1cced4,_0x311b49(),_0x24d3b5['JYMOz'](_0x3fb7a4,_0x5145a8(0x64b),_0x1cced4),_0x3fb7a4(_0x5145a8(0x40f)+'e',_0x1cced4);},[]),_0x2dfd65(_0x2e6bba(0x2c8)+_0x2e6bba(0x71f),_0x24d3b5[_0x2e6bba(0x2e1)],_0x13a183[_0x2e6bba(0x28e)+_0x2e6bba(0x372)],_0x52e3b6=>{var _0x2194df=_0x2e6bba;_0x13a183[_0x2194df(0x28e)+_0x2194df(0x372)]=_0x52e3b6,_0x311b49(),_0x1007c2['GrmFO'](_0x3fb7a4,'noRec'+_0x2194df(0x372),_0x52e3b6);},[]),_0x2dfd65(_0x2e6bba(0x1c0)+'read',_0x2e6bba(0x1f5)+'s\x20spr'+_0x2e6bba(0x600)+'nd\x20ma'+_0x2e6bba(0x1a4)+_0x2e6bba(0x45c)+_0x2e6bba(0x41d)+'\x20your'+_0x2e6bba(0x168)+'on\x20ev'+_0x2e6bba(0x4f7)+_0x2e6bba(0x25d),_0x13a183['noSpr'+'ead'],_0x26506f=>{_0x13a183['noSpr'+'ead']=_0x26506f,_0x311b49();},[]),_0x2dfd65(_0x24d3b5[_0x2e6bba(0x5e1)],_0x24d3b5['vYRVm'],_0x13a183['rapid'+_0x2e6bba(0x17a)],_0x2004ba=>{var _0x39ef76=_0x2e6bba,_0x16662a={'WxxHI':'true','fRwKJ':function(_0x1adc80,_0x46713f){var _0x389149=_0x2a57;return _0x24d3b5[_0x389149(0x3ee)](_0x1adc80,_0x46713f);},'bPNRJ':function(_0x4211cc,_0x3df2c0){return _0x4211cc(_0x3df2c0);}};if(_0x24d3b5[_0x39ef76(0x1d7)]==='VVtZd'){var _0x13e3b9=_0x358a6f[_0x39ef76(0x355)+_0x39ef76(0x5f3)+_0x39ef76(0x37d)](_0x1007c2[_0x39ef76(0x738)]);return _0x13e3b9[_0x39ef76(0x27e)]=_0x39ef76(0x5b0)+'n',_0x13e3b9['class'+_0x39ef76(0x359)]='sk-sw'+'itch',_0x13e3b9['setAt'+'tribu'+'te'](_0x39ef76(0x514),_0x1007c2['jsIgn']),_0x13e3b9[_0x39ef76(0x3f0)+'tribu'+'te'](_0x1007c2[_0x39ef76(0x1ca)],_0x48abb7(!!_0x489f0d)),_0x13e3b9[_0x39ef76(0x4be)+'ck']=_0x4845fb=>{var _0x308d11=_0x39ef76;_0x4845fb['stopP'+_0x308d11(0x646)+'ation']();var _0x47149e=_0x13e3b9['getAt'+'tribu'+'te'](_0x308d11(0x172)+'check'+'ed')!==_0x16662a[_0x308d11(0x6a3)];_0x13e3b9[_0x308d11(0x3f0)+_0x308d11(0x2a2)+'te'](_0x308d11(0x172)+_0x308d11(0x527)+'ed',_0x16662a[_0x308d11(0x5e0)](_0x6883fe,_0x47149e)),_0x16662a['bPNRJ'](_0x4b3772,_0x47149e);},_0x13e3b9;}else _0x13a183['rapid'+_0x39ef76(0x17a)]=_0x2004ba,_0x24d3b5['INMje'](_0x311b49);},[]),_0x2dfd65(_0x2e6bba(0x645)+_0x2e6bba(0x352)+'P]',_0x2e6bba(0x224)+'rites'+_0x2e6bba(0x362)+_0x2e6bba(0x671)+'eapon'+'\x20dama'+'ge.\x20B'+'annab'+_0x2e6bba(0x3b2)+'\x20the\x20'+'serve'+_0x2e6bba(0x1ce)+_0x2e6bba(0x3ea)+'s.',_0x13a183[_0x2e6bba(0x65b)+_0x2e6bba(0x637)],_0x25d80d=>{var _0x4bfa15=_0x2e6bba;_0x4bfa15(0x60f)!==_0x24d3b5[_0x4bfa15(0x633)]?(_0x3599a1[_0x4bfa15(0x28e)+'oil']=_0x293ba0,_0x53ec6f(),_0x5b4eec(_0x4bfa15(0x28e)+_0x4bfa15(0x372),_0x348627)):(_0x13a183[_0x4bfa15(0x65b)+_0x4bfa15(0x637)]=_0x25d80d,_0x311b49());},[_0x24d3b5[_0x2e6bba(0x6f6)](_0x24d581,'Damag'+'e\x20val'+'ue',null,_0x3a3559(_0x13a183['damag'+'eValu'+'e'],0x1f69+-0x4*-0x130+-0x7*0x529,-0x1dfb+-0x1bd9+0x2*0x1de4,-0xeed+0xd9d+0x155,_0x4b7fc9=>{var _0xcd969=_0x2e6bba;_0x13a183[_0xcd969(0x65b)+'eValu'+'e']=_0x4b7fc9,_0x24d3b5[_0xcd969(0x59f)](_0x311b49);}))]),_0x24d3b5[_0x2e6bba(0x695)](_0x2dfd65,_0x2e6bba(0x50b)+_0x2e6bba(0x1ae)+'mmo\x20['+'EXP]',_0x2e6bba(0x29b)+_0x2e6bba(0x391)+'e\x20wea'+_0x2e6bba(0x326)+_0x2e6bba(0x2f7)+'ed\x20am'+'mo\x20to'+_0x2e6bba(0x34c)+_0x2e6bba(0x238)+_0x2e6bba(0x479)+'s.',_0x13a183['infAm'+'moExp'],_0x400929=>{var _0x57aafd=_0x2e6bba;_0x13a183[_0x57aafd(0x200)+_0x57aafd(0x4df)]=_0x400929,_0x311b49();},[_0x340eb8(_0x2e6bba(0x609)+'loads'+_0x2e6bba(0x594)+_0x2e6bba(0x5dc)+_0x2e6bba(0x1e5)+'he\x20de'+_0x2e6bba(0x585)+_0x2e6bba(0x677)+_0x2e6bba(0x3d6)+_0x2e6bba(0x22e)+_0x2e6bba(0x1cb)+'.')])];else _0x1fe1a4[_0x2e6bba(0x471)]=_0x155643,_0x1081ab();}if(_0x24d3b5['CmvXJ'](_0x253f07,_0x24d3b5['KGIhe']))return[_0x2dfd65('Speed',_0x2e6bba(0x693)+_0x2e6bba(0x656)+'\x20four'+'\x20Move'+'ment\x20'+_0x2e6bba(0x6e1)+'\x20limi'+_0x2e6bba(0x410)+_0x2e6bba(0x4b2)+'celer'+_0x2e6bba(0x339)+'.',_0x24d3b5[_0x2e6bba(0x619)](_0x13a183[_0x2e6bba(0x6e1)+_0x2e6bba(0x1fa)],-0x1a03+-0x2668+-0x161*-0x2f),null,[_0x24d581(_0x2e6bba(0x246)+'\x20%',_0x2e6bba(0x692)+_0x2e6bba(0x203)+'ult',_0x3a3559(_0x13a183['speed'+'Pct'],-0x2b7*-0x7+-0x1c81+0x1*0x9b2,0x2572*-0x1+0xb61+0x1b3d,-0x1d12+0x82e+0x65*0x35,_0x285517=>{var _0x167b06=_0x2e6bba;_0x13a183[_0x167b06(0x6e1)+'Pct']=_0x285517,_0x311b49();}))]),_0x24d3b5['sBwSf'](_0x2dfd65,'Jump\x20'+'/\x20Gra'+_0x2e6bba(0x233),_0x2e6bba(0x693)+_0x2e6bba(0x487)+_0x2e6bba(0x264)+_0x2e6bba(0x4fe)+'Force'+_0x2e6bba(0x445)+'both\x20'+_0x2e6bba(0x727)+_0x2e6bba(0x3c4)+_0x2e6bba(0x205),_0x13a183['jumpP'+'ct']!==-0x21cc+-0x1b0f+0x3d3f||_0x13a183['gravi'+'tyPct']!==0x71e*-0x1+0x10bc+-0x93a,null,[_0x24d581('Jump\x20'+'%',null,_0x3a3559(_0x13a183[_0x2e6bba(0x408)+'ct'],-0x65*-0x1f+0x201a+-0x2c23*0x1,0xb*-0x2d5+0x1ae*0x9+-0x371*-0x5,0x155*0x1a+0x137+0x4*-0x8f5,_0x1b5cad=>{var _0x216847=_0x2e6bba;_0x13a183[_0x216847(0x408)+'ct']=_0x1b5cad,_0x311b49();})),_0x24d581(_0x2e6bba(0x5eb)+_0x2e6bba(0x6f8),_0x2e6bba(0x57b)+_0x2e6bba(0x371)+_0x2e6bba(0x3f2),_0x24d3b5['uJnfj'](_0x3a3559,_0x13a183['gravi'+_0x2e6bba(0x569)],-0x1350+-0xc1c+0x1f76,0x2*-0x409+0x1b76+-0x129c,-0x277*-0x5+-0x1*-0x215f+-0x2dad*0x1,_0x242033=>{var _0x1f12d5=_0x2e6bba;_0x13a183['gravi'+'tyPct']=_0x242033,_0x1007c2[_0x1f12d5(0x532)](_0x311b49);}))]),_0x24d3b5[_0x2e6bba(0x724)](_0x2dfd65,'Bunny'+'-hop',_0x24d3b5['snSoC'],_0x13a183[_0x2e6bba(0x388)],_0x200b24=>{var _0x26c33d=_0x2e6bba;_0x13a183['bhop']=_0x200b24,_0x1007c2[_0x26c33d(0x532)](_0x311b49);},[])];if(_0x24d3b5['XliFB'](_0x253f07,_0x2e6bba(0x262)+'l')){if('eRZGM'===_0x2e6bba(0x217))new _0x206554(_0x1a56d8)['write'+'Field'](_0x1f54e9,_0x2dde44,_0x404969);else return[_0x2dfd65(_0x24d3b5[_0x2e6bba(0x39e)],_0x24d3b5[_0x2e6bba(0x4ba)],_0x13a183[_0x2e6bba(0x2df)+_0x2e6bba(0x380)],_0x554105=>{var _0x361146=_0x2e6bba;'IBqhy'===_0x361146(0x699)?(_0x52be52(_0x2ecef3,-0x1*-0xf76+-0x146*0x7+-0x8*0xc0,_0x361146(0x51f),-0x3*0xd9+-0x13*0x1ca+0x2489+0.1),_0x161808(_0x18bd4c,-0x1cc4+0x1dd2+0x1d*-0x6,_0x1007c2[_0x361146(0x50e)],0x2*0x9d6+0x73*-0x29+-0x141+0.1)):(_0x13a183['keyst'+'rokes']=_0x554105,_0x311b49());},[_0x24d581('Posit'+_0x2e6bba(0x6bb),null,_0x1b9dcf(_0x13a183['ksPos'],[['bl',_0x2e6bba(0x187)+_0x2e6bba(0x1bd)+'t'],['br',_0x24d3b5['OSElf']],['ml','Left\x20'+_0x2e6bba(0x548)+'e']],_0x392213=>{var _0x308ec1=_0x2e6bba,_0x1a4aaa={'LNYtt':_0x1007c2[_0x308ec1(0x2aa)],'XBVke':function(_0xdb0f76,_0x3f3cc9){return _0xdb0f76===_0x3f3cc9;},'jTvcn':_0x308ec1(0x4c6),'GOuMG':'SAFE\x20'+_0x308ec1(0x21a)+_0x308ec1(0x23d)+_0x308ec1(0x186)+_0x308ec1(0x1b5)+'\x20no\x20h'+'ooks\x20'+_0x308ec1(0x260)+_0x308ec1(0x500)+_0x308ec1(0x226)+')','DlevL':function(_0x2a288a,_0x273bed){return _0x2a288a+_0x273bed;},'zFFaZ':function(_0x394019,_0x2ab23e){return _0x394019+_0x2ab23e;},'Fgycz':_0x1007c2[_0x308ec1(0x2c5)],'nYRum':'0\x20hoo'+'ks\x20ar'+'med\x20('+_0x308ec1(0x641)+_0x308ec1(0x1ff),'anSwj':_0x1007c2[_0x308ec1(0x392)],'yaJPp':_0x1007c2['xWeLf'],'Sefbi':'held','EOSzS':_0x1007c2[_0x308ec1(0x4a5)],'KyQNO':_0x308ec1(0x504)+_0x308ec1(0x4c4)};if(_0x1007c2[_0x308ec1(0x3c7)](_0x1007c2[_0x308ec1(0x47e)],_0x1007c2['aXnOR']))_0x13a183[_0x308ec1(0x305)]=_0x392213,_0x1007c2[_0x308ec1(0x532)](_0x311b49);else{var _0x39f6ac=_0x35cb1c[_0xfff55][_0x308ec1(0x67c)+'Selec'+_0x308ec1(0x435)](_0x1a4aaa['LNYtt']);_0x39f6ac&&(_0x1a4aaa['XBVke'](_0x39f6ac[_0x308ec1(0x4d4)+_0x308ec1(0x27c)+'t'][_0x308ec1(0x6b8)+'Of'](_0x308ec1(0x341)),-0x25*-0x57+-0x11c9*0x1+0x536)||_0x39f6ac['textC'+'onten'+'t'][_0x308ec1(0x6b8)+'Of'](_0x1a4aaa['jTvcn'])===-0x24d+-0x13ae+0x15fb)&&(_0x39f6ac['textC'+_0x308ec1(0x27c)+'t']=_0xde92b9['safeM'+'ode']?_0x1a4aaa['GOuMG']:_0x5b50bf['uwmk']?_0x1a4aaa[_0x308ec1(0x49c)](_0x1a4aaa[_0x308ec1(0x49c)](_0x1a4aaa[_0x308ec1(0x49c)]('UWMK\x20'+'bound'+'\x20'+(_0x37e18a[_0x308ec1(0x3db)+_0x308ec1(0x69d)]?_0x1a4aaa['DlevL'](_0x1a4aaa['zFFaZ'](_0x2d53ec['hooks'+'Ok'],'/'),_0x421d9d[_0x308ec1(0x3db)+'Total'])+_0x1a4aaa[_0x308ec1(0x3f7)]:_0x1a4aaa['nYRum'])+_0x1a4aaa[_0x308ec1(0x3d7)]+(_0x32cdc7[_0x308ec1(0x70b)+'oaded']?_0x1a4aaa[_0x308ec1(0x18f)]:_0x308ec1(0x2f6)+'ng')+(_0x308ec1(0x197)+_0x308ec1(0x1e0)+'\x20'),_0x55b2c3['shoot'+'ers']?_0x1a4aaa[_0x308ec1(0x45e)]:'none'),_0x308ec1(0x3f8)+'vemen'+'t\x20')+(_0xffb13a[_0x308ec1(0x3dc)+'ents']?'held':_0x1a4aaa[_0x308ec1(0x582)]),_0x555256[_0x308ec1(0x5ab)+'rror']?_0x1a4aaa['KyQNO']+_0x504fb6['lastE'+'rror']:''):'UWMK\x20'+'MISSI'+_0x308ec1(0x2d5)+'overl'+_0x308ec1(0x393)+_0x308ec1(0x2b6)+_0x308ec1(0x4e6)+_0x308ec1(0x6c7)+_0x308ec1(0x289)+_0x308ec1(0x590)+_0x308ec1(0x3e5));}})),_0x24d581('Size',null,_0x3a3559(_0x13a183[_0x2e6bba(0x1e6)+'le'],0x20dc+-0x218d+0xb1+0.6,0x3c*0x3+0x8c*0x41+-0x9*0x407+0.6000000000000001,-0x1874+0x1*-0x145b+-0x2ccf*-0x1+0.05,_0x1bfa6d=>{var _0x130e02=_0x2e6bba;_0x13a183[_0x130e02(0x1e6)+'le']=_0x1bfa6d,_0x311b49();})),_0x24d581(_0x24d3b5[_0x2e6bba(0x35c)],null,_0x3015ec(_0x13a183[_0x2e6bba(0x617)],_0x2d966d=>{var _0x1124c6=_0x2e6bba;_0x13a183[_0x1124c6(0x617)]=_0x2d966d,_0x311b49();}))]),_0x2dfd65('Cross'+'hair',_0x24d3b5['cMmGw'],_0x13a183[_0x2e6bba(0x4b5)+_0x2e6bba(0x5c3)],_0x249b76=>{var _0x45189e=_0x2e6bba;_0x1007c2['pfaeF']('BwDbh',_0x1007c2[_0x45189e(0x730)])?_0x30635f['enabl'+'ed']=!!_0x223fe5:(_0x13a183[_0x45189e(0x4b5)+_0x45189e(0x5c3)]=_0x249b76,_0x311b49());},[_0x24d3b5['hXxbu'](_0x24d581,_0x2e6bba(0x507),null,_0x24d3b5[_0x2e6bba(0x196)](_0x3a3559,_0x13a183[_0x2e6bba(0x4e1)+'e'],-0x3*-0xa96+0x2100+-0x40c2+0.5,-0x1*0x9e5+-0x5e5+0xfcc+0.5,0x1ae4+-0x21c5+0x6e1+0.1,_0x33d6d6=>{var _0x24fdc8=_0x2e6bba;_0x13a183[_0x24fdc8(0x4e1)+'e']=_0x33d6d6,_0x311b49();})),_0x24d3b5[_0x2e6bba(0x559)](_0x24d581,_0x2e6bba(0x2b0),null,_0x3f090e(_0x13a183['chCol'+'or'],_0x51c45b=>{var _0x2ed7a8=_0x2e6bba;_0x13a183[_0x2ed7a8(0x447)+'or']=_0x51c45b,_0x311b49();}))]),_0x2dfd65(_0x24d3b5[_0x2e6bba(0x2a5)],_0x24d3b5[_0x2e6bba(0x199)],_0x13a183[_0x2e6bba(0x471)],null,[_0x24d581(_0x24d3b5[_0x2e6bba(0x720)],null,_0x3015ec(_0x13a183['fps'],_0x16a6a1=>{var _0x6f34dc=_0x2e6bba;_0x13a183[_0x6f34dc(0x471)]=_0x16a6a1,_0x311b49();})),_0x340eb8(_0x24d3b5['sMHRr'])])];}if(_0x253f07===_0x24d3b5['WYgcN'])return[_0x2dfd65(_0x24d3b5['HReuF'],_0x2e6bba(0x1ad)+'\x20kour'+_0x2e6bba(0x597)+'\x20bann'+'er\x20sl'+'ots.',_0x13a183['adblo'+'ck'],_0x4dbc82=>{var _0x41d9e1=_0x2e6bba;_0x24d3b5[_0x41d9e1(0x293)](_0x41d9e1(0x1eb),_0x24d3b5[_0x41d9e1(0x654)])?(_0x13a183['adblo'+'ck']=_0x4dbc82,_0x311b49()):(_0x45acea[_0x41d9e1(0x1e6)+'le']=_0x2dd9da,_0x1c9549());},[_0x340eb8(_0x2e6bba(0x3e7)+_0x2e6bba(0x6ce)+_0x2e6bba(0x307)+_0x2e6bba(0x502)+_0x2e6bba(0x2e3)+_0x2e6bba(0x5ec)+_0x2e6bba(0x1aa)+'.')])];return[_0x24d3b5['uJnfj'](_0x2dfd65,_0x2e6bba(0x69c)+_0x2e6bba(0x523)+'(over'+'lay\x20o'+_0x2e6bba(0x4dd),'Skips'+_0x2e6bba(0x1e3)+_0x2e6bba(0x483)+_0x2e6bba(0x49a)+'—\x20no\x20'+_0x2e6bba(0x593)+'hooks'+'.\x20Use'+'\x20this'+_0x2e6bba(0x70f)+_0x2e6bba(0x2d4)+_0x2e6bba(0x4d6)+'\x27t\x20st'+_0x2e6bba(0x30a),_0x13a183[_0x2e6bba(0x47f)+_0x2e6bba(0x18d)],_0x178401=>{var _0x5159c8=_0x2e6bba;_0x13a183['safeM'+_0x5159c8(0x18d)]=_0x178401,_0x24d3b5['INMje'](_0x311b49),location[_0x5159c8(0x615)+'d']();},[_0x340eb8(_0x2e6bba(0x5e3)+_0x2e6bba(0x6eb)+_0x2e6bba(0x502)+_0x2e6bba(0x1f0)+'f\x20mat'+_0x2e6bba(0x70c)+_0x2e6bba(0x493)+'in\x20sa'+'fe\x20mo'+_0x2e6bba(0x5c1)+'he\x20fr'+_0x2e6bba(0x5e4)+_0x2e6bba(0x5ca)+_0x2e6bba(0x266)+_0x2e6bba(0x492)+'\x20—\x20te'+_0x2e6bba(0x1c6)+_0x2e6bba(0x2f3)+'hooks'+_0x2e6bba(0x64e)+_0x2e6bba(0x15c)+'ount.')]),_0x2dfd65('Hook\x20'+_0x2e6bba(0x54e)+_0x2e6bba(0x1e4)+_0x2e6bba(0x2fd),_0x24d3b5[_0x2e6bba(0x71b)],_0x13a183['hookG'+'od']||_0x13a183[_0x2e6bba(0x3c2)+_0x2e6bba(0x1ec)]||_0x13a183['hookN'+_0x2e6bba(0x2f1)+'il']||_0x13a183[_0x2e6bba(0x2e5)+_0x2e6bba(0x1dd)+'e'],_0x4b1175=>{var _0x118983=_0x2e6bba;_0x13a183[_0x118983(0x3c2)+'od']=_0x4b1175,_0x13a183[_0x118983(0x3c2)+_0x118983(0x1ec)]=_0x4b1175,_0x13a183[_0x118983(0x4f5)+_0x118983(0x2f1)+'il']=_0x4b1175,_0x13a183['hookC'+'aptur'+'e']=_0x4b1175,_0x1007c2['mogZC'](_0x311b49),location['reloa'+'d']();},[_0x340eb8(_0x2e6bba(0x5e3)+'es\x20on'+'\x20relo'+_0x2e6bba(0x30d)),_0x24d3b5['hXxbu'](_0x24d581,'god\x20('+'OHeal'+_0x2e6bba(0x700)+_0x2e6bba(0x676)+_0x2e6bba(0x4da)+_0x2e6bba(0x3a1)+'h)',null,_0x24d3b5['XOQgF'](_0x3015ec,_0x13a183['hookG'+'od'],_0x225667=>{var _0x353f8a=_0x2e6bba,_0x1b062f={'UKavm':function(_0x6aed6){return _0x6aed6();}};_0x24d3b5['TkRIK']===_0x353f8a(0x333)?(_0x150244['hookN'+_0x353f8a(0x2f1)+'il']=_0x576bd2,_0x1b062f[_0x353f8a(0x6c4)](_0x6d96fd)):(_0x13a183['hookG'+'od']=_0x225667,_0x24d3b5[_0x353f8a(0x705)](_0x311b49));})),_0x24d581(_0x24d3b5[_0x2e6bba(0x1a9)],null,_0x3015ec(_0x13a183['hookG'+'odDie'],_0xcc581f=>{var _0x5f5b5a=_0x2e6bba;if(_0x1007c2['IrbVo'](_0x1007c2['vcWdM'],'JHRIX'))_0x13a183[_0x5f5b5a(0x3c2)+_0x5f5b5a(0x1ec)]=_0xcc581f,_0x1007c2[_0x5f5b5a(0x6d6)](_0x311b49);else{var _0x6ddfe=_0x47cd50[_0x5f5b5a(0x660)+_0x5f5b5a(0x25e)+'x']({'typeName':_0x4e81be,'methodName':_0x212e40,'params':_0x7d9d0c,'returnType':_0x2e664d},_0x3de666);return _0x6ddfe[_0x5f5b5a(0x2ea)+'ed']=_0x5db574!==![],_0xb17f08[_0x39f595]=_0x6ddfe,_0x21e5fe[_0x5f5b5a(0x3db)+'Total']++,_0x6ddfe;}})),_0x24d581(_0x24d3b5[_0x2e6bba(0x28d)],null,_0x24d3b5[_0x2e6bba(0x5a6)](_0x3015ec,_0x13a183[_0x2e6bba(0x4f5)+_0x2e6bba(0x2f1)+'il'],_0x59f785=>{var _0x4a3ee2=_0x2e6bba;_0x13a183[_0x4a3ee2(0x4f5)+_0x4a3ee2(0x2f1)+'il']=_0x59f785,_0x311b49();})),_0x24d581('captu'+'re\x20(S'+'etGam'+_0x2e6bba(0x613)+_0x2e6bba(0x3d4)+_0x2e6bba(0x344)+_0x2e6bba(0x70e)+'d)','no\x20ch'+_0x2e6bba(0x531)+_0x2e6bba(0x4c9)+'witho'+'ut\x20th'+'is',_0x24d3b5[_0x2e6bba(0x6d4)](_0x3015ec,_0x13a183[_0x2e6bba(0x2e5)+_0x2e6bba(0x1dd)+'e'],_0x325292=>{var _0xbc3781=_0x2e6bba;_0x13a183[_0xbc3781(0x2e5)+_0xbc3781(0x1dd)+'e']=_0x325292,_0x1007c2[_0xbc3781(0x15d)](_0x311b49);}))]),_0x24d3b5[_0x2e6bba(0x457)](_0x2dfd65,_0x24d3b5['MQcjr'],_0x24d3b5[_0x2e6bba(0x4ca)],_0x13a183['actkK'+_0x2e6bba(0x5d6)],_0x3450d3=>{var _0x2e6101=_0x2e6bba;_0x13a183[_0x2e6101(0x6cb)+'ill']=_0x3450d3,_0x311b49();},[_0x24d3b5['YaTMV'](_0x340eb8,_0x2e6bba(0x6ad)+_0x2e6bba(0x1a1)+_0x2e6bba(0x5bd)+_0x2e6bba(0x6ee)+'atly\x20'+_0x2e6bba(0x6d1)+_0x2e6bba(0x734)+_0x2e6bba(0x54e)+'even\x20'+_0x2e6bba(0x45b)+_0x2e6bba(0x1f2)+'on.',!![])]),_0x24d3b5['sBwSf'](_0x2dfd65,_0x24d3b5[_0x2e6bba(0x348)],_0x2e6bba(0x736)+'\x20leav'+_0x2e6bba(0x1f1)+_0x2e6bba(0x456)+_0x2e6bba(0x470)+_0x2e6bba(0x47b)+_0x2e6bba(0x5c2),!![],null,[_0x24d581(_0x2e6bba(0x206)+_0x2e6bba(0x15a)+_0x2e6bba(0x43a)+'s',null,_0x260435(_0x2e6bba(0x644),()=>{var _0x98db7e=_0x2e6bba;_0x13a183={..._0x36dd44},_0x311b49(),location[_0x98db7e(0x615)+'d']();}))])];}else{var _0x5e8b1e={'wrHrY':_0x2e6bba(0x4f6)+_0x2e6bba(0x41f)+'07,15'+_0x2e6bba(0x69b)+'5)','jBzoN':_0x24d3b5[_0x2e6bba(0x6c2)],'kliSd':_0x24d3b5[_0x2e6bba(0x55a)],'BVpoY':function(_0x1bfa1d,_0x51580b){return _0x1bfa1d*_0x51580b;},'guAAg':function(_0x38790f,_0x17db78){var _0x4017b9=_0x2e6bba;return _0x24d3b5[_0x4017b9(0x28b)](_0x38790f,_0x17db78);},'RxYem':function(_0x25f42d,_0xe6316b){var _0x31ca31=_0x2e6bba;return _0x24d3b5[_0x31ca31(0x29a)](_0x25f42d,_0xe6316b);},'whavx':function(_0x3efd3e,_0x4ba435){return _0x3efd3e+_0x4ba435;},'fNHZd':_0x2e6bba(0x267),'ldDXM':_0x2e6bba(0x26a)+'-sans'+'-seri'+'f,sys'+_0x2e6bba(0x279)+_0x2e6bba(0x2cb)+'s-ser'+'if','jUreo':function(_0x2b4b1c,_0x1275f4){return _0x24d3b5['zRrTd'](_0x2b4b1c,_0x1275f4);}},_0x1f5d76=_0x2ced1c(_0x44e596['ksSca'+'le'])||0x4*-0x58c+-0x1*0x29+0x2*0xb2d,_0x24f106=(0x135a+0xa20+-0x1d58)*_0x1f5d76,_0x6ba4c5=(0x1*0x179c+-0x1*-0xfd7+0x7e3*-0x5)*_0x1f5d76,_0x1e2169=_0x24d3b5[_0x2e6bba(0x1da)](_0x24f106*(0x2680+-0x1db6+0x3*-0x2ed),_0x6ba4c5*(-0x13e2+-0x950+0x1d34)),_0x45e29a=_0x24f106*(0x15ba+0x1c26+-0x45*0xb9)+_0x24d3b5['lWlss'](_0x6ba4c5,0x5*0x491+-0x2209+0xb36),_0x44b356=_0x579d74[_0x2e6bba(0x305)],_0x4fbd27=_0x44b356==='br'?_0x24d3b5['VJjEw'](_0x5054a0[_0x2e6bba(0x228)],0xa7*0x36+-0x518*0x4+0x1*-0xeca)-_0x1e2169:_0x24d3b5['HPPFv'](_0x4b2ae6['left'],-0x79d+0xbbd+-0x410),_0x4f3bff=_0x24d3b5[_0x2e6bba(0x1e7)](_0x44b356,'ml')?_0x24d3b5['WSBTd'](_0x24d3b5['wbnAA'](_0x4d80ed[_0x2e6bba(0x23f)],_0x24d3b5['UOAnR'](_0x15ffea[_0x2e6bba(0x42b)+'t'],-0x1*0x2628+-0x3a0+0x29ca)),_0x45e29a/(0x8*-0x1ed+-0xd*0x15b+0x2109)):_0x24d3b5[_0x2e6bba(0x22a)](_0x24d3b5['Oesvz'](_0x4da7c8[_0x2e6bba(0x29e)+'m'],_0x45e29a),_0x44b356==='bl'?-0x1fca+-0xf05+0x2f2f:0x1bb1+0x61d+-0x2138),_0x5f3214=(_0x48ffaf,_0x18e9ae,_0x20d3a2,_0x24ebaf,_0x29fbf3,_0x297db2,_0x30e779)=>{var _0x313c9b=_0x2e6bba,_0x15c307=_0x275372['has'](_0x18e9ae);_0xec8ed5['save'](),_0x14ec68[_0x313c9b(0x3de)+'Path']();if(_0x49d132['round'+'Rect'])_0x5996ba[_0x313c9b(0x2ec)+'Rect'](_0x20d3a2,_0x24ebaf,_0x29fbf3,_0x297db2,(0x1a08+0x78a+-0x218b)*_0x1f5d76);else _0x1c4b85['rect'](_0x20d3a2,_0x24ebaf,_0x29fbf3,_0x297db2);_0x537cab['fillS'+'tyle']=_0x15c307?_0x5e8b1e[_0x313c9b(0x4a8)]:_0x313c9b(0x4f6)+_0x313c9b(0x6df)+_0x313c9b(0x71e)+'7)',_0x454e3e[_0x313c9b(0x6bd)](),_0x538b13[_0x313c9b(0x670)+_0x313c9b(0x2cc)]=0xe94+-0x254c+0x16b9,_0x3b2121[_0x313c9b(0x3dd)+_0x313c9b(0x2d6)+'e']=_0x15c307?_0x4c10c1:_0x313c9b(0x4f6)+_0x313c9b(0x41f)+'07,15'+'7,0.3'+'5)',_0x346e15[_0x313c9b(0x3dd)+'e'](),_0x15c307&&(_0x58f237[_0x313c9b(0x3d3)+_0x313c9b(0x683)+'r']=_0x444a99,_0x4ada6d['shado'+_0x313c9b(0x321)]=-0xb74+0x3*0x943+-0x1047,_0x148547[_0x313c9b(0x6bd)](),_0x53d297['shado'+'wBlur']=-0xb4c+-0x2092*0x1+0x15ef*0x2),_0x133e1f[_0x313c9b(0x2bb)+'tyle']=_0x15c307?_0x313c9b(0x6c1):_0x313c9b(0x4f6)+_0x313c9b(0x5e7)+_0x313c9b(0x56f)+_0x313c9b(0x437)+')',_0x294f6b[_0x313c9b(0x420)+_0x313c9b(0x2b1)]=_0x5e8b1e['jBzoN'],_0x3b55f5['textB'+'aseli'+'ne']=_0x5e8b1e['kliSd'],_0x21733a[_0x313c9b(0x423)]=_0x313c9b(0x159)+_0x32ad73['round'](_0x5e8b1e[_0x313c9b(0x331)](0xf7d+0x1*0xe05+0xebb*-0x2,_0x1f5d76))+(_0x313c9b(0x26a)+_0x313c9b(0x575)+'-seri'+'f,sys'+_0x313c9b(0x279)+_0x313c9b(0x2cb)+_0x313c9b(0x51e)+'if'),_0x54d39c[_0x313c9b(0x4a9)+_0x313c9b(0x169)](_0x48ffaf,_0x5e8b1e[_0x313c9b(0x4e8)](_0x20d3a2,_0x29fbf3/(-0xb7b+0x97b+-0x1*-0x202)),_0x24ebaf+_0x297db2/(-0x386*0xb+-0x1967+0x402b)-(_0x30e779?(0x2207+-0xf48+-0x12ba)*_0x1f5d76:-0x32b*-0xc+0x17ea+-0x3dee*0x1)),_0x30e779&&(_0x5621db[_0x313c9b(0x423)]=_0x5e8b1e[_0x313c9b(0x163)](_0x5e8b1e['whavx'](_0x5e8b1e[_0x313c9b(0x3e9)],_0x2f0488['round']((-0x110b*-0x1+-0x1*-0x7ee+-0x18f0)*_0x1f5d76)),_0x5e8b1e[_0x313c9b(0x58b)]),_0x57d8a3[_0x313c9b(0x2bb)+_0x313c9b(0x522)]=_0x15c307?'#fff':_0x313c9b(0x4f6)+'255,2'+_0x313c9b(0x56f)+'0,0.5'+'5)',_0x114a71['fillT'+_0x313c9b(0x169)](_0x30e779,_0x20d3a2+_0x29fbf3/(-0xc57+-0x1e9+0xe42),_0x5e8b1e[_0x313c9b(0x5a0)](_0x24ebaf,_0x297db2/(-0x1e68+-0xe4a+0x1*0x2cb4))+_0x5e8b1e['jUreo'](0xd*-0xe9+-0xbc1+0x179e,_0x1f5d76))),_0x11206c[_0x313c9b(0x1a2)+'re']();};_0x5f3214('W',_0x24d3b5['Uyvbt'],_0x24d3b5['nwAxA'](_0x24d3b5['TOTWC'](_0x4fbd27,_0x24f106),_0x6ba4c5),_0x4f3bff,_0x24f106,_0x24f106),_0x5f3214('A','KeyA',_0x4fbd27,_0x24d3b5[_0x2e6bba(0x6d8)](_0x4f3bff,_0x24f106)+_0x6ba4c5,_0x24f106,_0x24f106),_0x5f3214('S','KeyS',_0x24d3b5[_0x2e6bba(0x58c)](_0x24d3b5[_0x2e6bba(0x4a7)](_0x4fbd27,_0x24f106),_0x6ba4c5),_0x24d3b5[_0x2e6bba(0x6ed)](_0x4f3bff+_0x24f106,_0x6ba4c5),_0x24f106,_0x24f106),_0x5f3214('D',_0x2e6bba(0x4b9),_0x4fbd27+(_0x24f106+_0x6ba4c5)*(0x1e2c+0x25af+-0x43d9),_0x4f3bff+_0x24f106+_0x6ba4c5,_0x24f106,_0x24f106);var _0x42df3a=_0x24d3b5['UOAnR'](_0x1e2169-_0x6ba4c5,-0x20a4*-0x1+-0x183b+-0x867),_0xfeb5f5=_0x4f3bff+_0x24d3b5[_0x2e6bba(0x285)](_0x24f106+_0x6ba4c5,-0x241*0x2+0x122+0x2*0x1b1);_0x24d3b5['VvVkA'](_0x5f3214,_0x24d3b5[_0x2e6bba(0x679)],_0x2e6bba(0x378)+'1',_0x4fbd27,_0xfeb5f5,_0x42df3a,_0x24f106,_0x4a3b35[_0x2e6bba(0x617)]?_0x24d3b5['kQAoI'](_0x5ccb1e,-0x1fc1+-0x9*0x9+0x3*0xab1)+_0x2e6bba(0x42d):''),_0x5f3214(_0x24d3b5[_0x2e6bba(0x40d)],_0x24d3b5[_0x2e6bba(0x2d7)],_0x24d3b5[_0x2e6bba(0x50a)](_0x4fbd27,_0x42df3a)+_0x6ba4c5,_0xfeb5f5,_0x42df3a,_0x24f106,_0x146a03[_0x2e6bba(0x617)]?_0x24d3b5[_0x2e6bba(0x587)](_0x38c4d3(0x179+0x3e1+-0x557*0x1),_0x24d3b5[_0x2e6bba(0x33f)]):''),_0x24d3b5['ovYkV'](_0x5f3214,'',_0x2e6bba(0x6b2),_0x4fbd27,_0x24d3b5['ahUxV'](_0xfeb5f5,_0x24f106)+_0x6ba4c5,_0x1e2169,_0x24f106*(0x1*0x14d7+-0x245e+0xf87+0.45));}}var _0x5b3806=null;function _0x43de88(_0x1666e8){var _0x252cad=_0xbe9793;if(_0x37e40a[_0x252cad(0x2c0)]==='dxZxH'){_0x367c1d=_0x1666e8;if(!_0x5b3806){var _0x2d9d18=(_0x252cad(0x214)+'|5|3|'+'4')[_0x252cad(0x2f8)]('|'),_0xe25e61=0x1*-0x89e+-0x100b+0x18a9*0x1;while(!![]){switch(_0x2d9d18[_0xe25e61++]){case'0':_0x2c8144['textC'+'onten'+'t']=_0x2deeab;continue;case'1':var _0x2c8144=document['creat'+_0x252cad(0x5f3)+'ent'](_0x252cad(0x258));continue;case'2':_0x16c88b[_0x252cad(0x6d3)+_0x252cad(0x52b)+'d'](_0x2c8144);continue;case'3':_0x16c88b[_0x252cad(0x6d3)+_0x252cad(0x52b)+'d'](_0x5b3806);continue;case'4':requestAnimationFrame(()=>_0x5b3806['class'+'List'][_0x252cad(0x5de)](_0x252cad(0x6c6)));continue;case'5':_0x5b3806=_0x5a3ab4();continue;}break;}}_0x5b3806[_0x252cad(0x3ab)+_0x252cad(0x5a7)]['toggl'+'e']('shown',_0x1666e8);}else{var _0x2931ed=_0xe04f4b[_0x5359a5];if(_0x2931ed)try{_0x2931ed[_0x252cad(0x2ea)+'ed']=!!_0x503a25;}catch(_0x42fb51){}}}function _0x2ea795(){_0x37e40a['ZeCMP'](_0x43de88,!_0x367c1d);}function _0x5a3ab4(){var _0x1f1f23=_0xbe9793,_0x2d89b3={'yqdQp':function(_0x2dd746,_0x422aed){var _0x58876a=_0x2a57;return _0x37e40a[_0x58876a(0x61b)](_0x2dd746,_0x422aed);},'tlkEL':function(_0x21e252,_0x5c9639){return _0x21e252===_0x5c9639;}},_0x3343f2=document['creat'+'eElem'+'ent'](_0x37e40a[_0x1f1f23(0x179)]);_0x3343f2[_0x1f1f23(0x3ab)+_0x1f1f23(0x359)]=_0x1f1f23(0x73c)+'nel';var _0x4e2f17=document[_0x1f1f23(0x355)+_0x1f1f23(0x5f3)+_0x1f1f23(0x37d)](_0x1f1f23(0x478));_0x4e2f17[_0x1f1f23(0x3ab)+_0x1f1f23(0x359)]=_0x37e40a['gMbty'];var _0x23b6af=document[_0x1f1f23(0x355)+'eElem'+_0x1f1f23(0x37d)]('div');_0x23b6af[_0x1f1f23(0x3ab)+'Name']=_0x37e40a[_0x1f1f23(0x387)],_0x23b6af[_0x1f1f23(0x2d1)+'HTML']=_0x1f1f23(0x3c0)+_0x1f1f23(0x4af)+_0x1f1f23(0x482)+'\x200\x2024'+_0x1f1f23(0x2ac)+_0x1f1f23(0x3ab)+_0x1f1f23(0x31f)+_0x1f1f23(0x46a)+'svg\x22>'+'<path'+_0x1f1f23(0x1c1)+_0x1f1f23(0x1ee)+_0x1f1f23(0x44b)+_0x1f1f23(0x24a)+'4-4.5'+_0x1f1f23(0x4a1)+'5\x200-2'+_0x1f1f23(0x711)+_0x1f1f23(0x6a8)+_0x1f1f23(0x3a5)+'5s4\x202'+_0x1f1f23(0x5b6)+_0x1f1f23(0x33d)+'-2.5\x20'+'5-4\x207'+_0x1f1f23(0x66b)+'fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+_0x1f1f23(0x473)+_0x1f1f23(0x4a2)+'troke'+'-widt'+'h=\x222\x22'+_0x1f1f23(0x4d9)+_0x1f1f23(0x1e9)+_0x1f1f23(0x297)+_0x1f1f23(0x367)+_0x1f1f23(0x30c)+_0x1f1f23(0x6e5)+_0x1f1f23(0x1a6)+_0x1f1f23(0x6e6)+_0x1f1f23(0x2fb)+'d\x22/><'+'circl'+'e\x20cx='+'\x2212\x22\x20'+'cy=\x221'+_0x1f1f23(0x369)+_0x1f1f23(0x4b3)+'\x20fill'+'=\x22#ff'+_0x1f1f23(0x53f)+_0x1f1f23(0x618)+_0x1f1f23(0x2c1),_0x4e2f17[_0x1f1f23(0x6d3)+'dChil'+'d'](_0x23b6af);var _0x20490d=document[_0x1f1f23(0x355)+'eElem'+'ent']('div');_0x20490d['class'+_0x1f1f23(0x359)]=_0x37e40a[_0x1f1f23(0x5a4)];var _0x20cab9=document['creat'+_0x1f1f23(0x5f3)+'ent']('heade'+'r');_0x20cab9['class'+'Name']=_0x37e40a['oROEu'];var _0x476d26=document['creat'+'eElem'+'ent'](_0x37e40a['rNIBi']);_0x476d26[_0x1f1f23(0x3ab)+_0x1f1f23(0x359)]=_0x37e40a[_0x1f1f23(0x5c5)];var _0x42a008=document[_0x1f1f23(0x355)+'eElem'+_0x1f1f23(0x37d)]('h2');_0x42a008[_0x1f1f23(0x3ab)+_0x1f1f23(0x359)]=_0x37e40a[_0x1f1f23(0x302)],_0x42a008['textC'+_0x1f1f23(0x27c)+'t']=_0x37e40a['pgfvT'];var _0x3c7b06=document['creat'+_0x1f1f23(0x5f3)+'ent'](_0x1f1f23(0x446));_0x3c7b06[_0x1f1f23(0x3ab)+_0x1f1f23(0x359)]='mn-su'+'b',_0x3c7b06[_0x1f1f23(0x4d4)+_0x1f1f23(0x27c)+'t']='kours'+_0x1f1f23(0x3d5)+_0x1f1f23(0x63b)+'enu',_0x476d26[_0x1f1f23(0x6d3)+'d'](_0x42a008,_0x3c7b06);var _0x3bac9e=document['creat'+_0x1f1f23(0x5f3)+'ent'](_0x37e40a['rjbOp']);_0x3bac9e['type']=_0x37e40a[_0x1f1f23(0x6e2)],_0x3bac9e['class'+_0x1f1f23(0x359)]=_0x1f1f23(0x602)+'ose',_0x3bac9e['title']=_0x1f1f23(0x726),_0x3bac9e['inner'+_0x1f1f23(0x6f7)]='<svg\x20'+'viewB'+_0x1f1f23(0x482)+'\x200\x2024'+_0x1f1f23(0x215)+_0x1f1f23(0x1f7)+'\x20d=\x22M'+'6\x206l1'+_0x1f1f23(0x272)+_0x1f1f23(0x306)+'6\x2018\x22'+'/></s'+_0x1f1f23(0x2c1),_0x3bac9e['oncli'+'ck']=()=>_0x43de88(![]),_0x20cab9[_0x1f1f23(0x6d3)+'d'](_0x476d26,_0x3bac9e);var _0x55aea4=document['creat'+_0x1f1f23(0x5f3)+_0x1f1f23(0x37d)](_0x1f1f23(0x383));_0x55aea4[_0x1f1f23(0x3ab)+_0x1f1f23(0x359)]='mn-co'+'ls',_0x20490d[_0x1f1f23(0x6d3)+'d'](_0x20cab9,_0x55aea4),_0x3343f2[_0x1f1f23(0x6d3)+'d'](_0x4e2f17,_0x20490d);var _0x3077bc=new Map();for(var _0x4e4ea5 of _0x145e42){var _0x5b8e9f=_0x37e40a['RnVFC'][_0x1f1f23(0x2f8)]('|'),_0x537f1a=0x18a7+-0x219b+0x2fc*0x3;while(!![]){switch(_0x5b8e9f[_0x537f1a++]){case'0':_0x3077bc[_0x1f1f23(0x538)](_0x4e4ea5['id'],_0x3af118);continue;case'1':_0x3af118[_0x1f1f23(0x3ab)+_0x1f1f23(0x359)]=_0x1f1f23(0x6ea)+'b';continue;case'2':_0x3af118['type']='butto'+'n';continue;case'3':_0x4e2f17[_0x1f1f23(0x6d3)+_0x1f1f23(0x52b)+'d'](_0x3af118);continue;case'4':_0x3af118[_0x1f1f23(0x4be)+'ck']=(_0x3a0bb0=>()=>_0x23c4b8(_0x3a0bb0))(_0x4e4ea5['id']);continue;case'5':var _0x3af118=document['creat'+_0x1f1f23(0x5f3)+'ent']('butto'+'n');continue;case'6':_0x3af118['inner'+_0x1f1f23(0x6f7)]=_0x37e40a['nvfsm'](_0x1f1f23(0x5c9)+'l>',_0x4e4ea5['label'])+(_0x1f1f23(0x5da)+_0x1f1f23(0x2d3));continue;case'7':_0x3af118[_0x1f1f23(0x647)]=_0x4e4ea5['label'];continue;}break;}}function _0x23c4b8(_0x268b9b){var _0x3c87bb=_0x1f1f23;_0x1b0b79[_0x3c87bb(0x18b)]=_0x268b9b,_0x3be840();var _0x182186=_0x145e42[_0x3c87bb(0x42a)](_0x265a4b=>_0x265a4b['id']===_0x268b9b)||_0x145e42[0xf*-0x7f+0x1*0x143d+-0xccc];_0x42a008[_0x3c87bb(0x4d4)+'onten'+'t']=_0x2d89b3[_0x3c87bb(0x551)](_0x3c87bb(0x1ef)+'a\x20Kou'+_0x3c87bb(0x4c2),_0x182186['label']);for(var [_0x5be762,_0x1c4689]of _0x3077bc)_0x1c4689['class'+_0x3c87bb(0x5a7)][_0x3c87bb(0x24b)+'e']('activ'+'e',_0x2d89b3[_0x3c87bb(0x3be)](_0x5be762,_0x268b9b));_0x55aea4[_0x3c87bb(0x712)+'ceChi'+_0x3c87bb(0x583)](..._0x458f1b(_0x268b9b));}return _0x23c4b8(_0x1b0b79['cat']||'comba'+'t'),_0x37e40a['czZko'](setInterval,()=>{var _0x284826=_0x1f1f23,_0x3ed751={'XLBxi':function(_0x3468cc,_0x3581a5){return _0x3468cc(_0x3581a5);}};if(!_0x367c1d)return;var _0x598605=_0x55aea4['child'+_0x284826(0x1b6)];for(var _0x28d0be=0x20d1+-0x3*0x55b+-0x10c0;_0x24d3b5[_0x284826(0x1c4)](_0x28d0be,_0x598605[_0x284826(0x6a4)+'h']);_0x28d0be++){if(_0x24d3b5[_0x284826(0x1e7)]('NHreA',_0x24d3b5[_0x284826(0x5bc)])){var _0x1c24a0=_0x598605[_0x28d0be]['query'+_0x284826(0x52d)+_0x284826(0x435)](_0x284826(0x5cf)+_0x284826(0x710));_0x1c24a0&&(_0x24d3b5['cyWqU'](_0x1c24a0[_0x284826(0x4d4)+_0x284826(0x27c)+'t'][_0x284826(0x6b8)+'Of'](_0x284826(0x341)),0x16*-0xbb+0x1*0x1d3c+0x2a2*-0x5)||_0x1c24a0['textC'+'onten'+'t'][_0x284826(0x6b8)+'Of'](_0x24d3b5[_0x284826(0x26d)])===-0x23e7+0x2097+0x10*0x35)&&(_0x1c24a0['textC'+'onten'+'t']=_0x56bd59[_0x284826(0x47f)+_0x284826(0x18d)]?_0x284826(0x1f8)+'MODE\x20'+_0x284826(0x23d)+'rlay\x20'+_0x284826(0x1b5)+'\x20no\x20h'+'ooks\x20'+_0x284826(0x260)+_0x284826(0x500)+'\x20exit'+')':_0x56bd59['uwmk']?_0x24d3b5[_0x284826(0x46b)](_0x24d3b5['HPPFv'](_0x24d3b5[_0x284826(0x28b)](_0x24d3b5[_0x284826(0x54f)]('UWMK\x20'+_0x284826(0x54d)+'\x20',_0x56bd59[_0x284826(0x3db)+'Total']?_0x24d3b5[_0x284826(0x28b)](_0x24d3b5[_0x284826(0x46b)](_0x24d3b5['gssFt'](_0x56bd59[_0x284826(0x3db)+'Ok'],'/'),_0x56bd59[_0x284826(0x3db)+'Total']),'\x20hook'+'s'):_0x24d3b5[_0x284826(0x72d)]),_0x284826(0x43c)+'me\x20')+(_0x56bd59[_0x284826(0x70b)+_0x284826(0x636)]?_0x24d3b5[_0x284826(0x46c)]:'loadi'+'ng'),_0x24d3b5['FwvWU']),_0x56bd59[_0x284826(0x336)+_0x284826(0x375)]?_0x284826(0x47d):_0x24d3b5['jUeYN'])+('\x20|\x20mo'+_0x284826(0x3c1)+'t\x20')+(_0x56bd59[_0x284826(0x3dc)+'ents']?_0x284826(0x47d):_0x284826(0x2e6))+(_0x56bd59[_0x284826(0x5ab)+'rror']?_0x24d3b5[_0x284826(0x555)](_0x24d3b5['MNTOQ'],_0x56bd59[_0x284826(0x5ab)+'rror']):''):'UWMK\x20'+_0x284826(0x486)+'NG\x20-\x20'+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x284826(0x6c7)+_0x284826(0x289)+_0x284826(0x590)+'ipt)');}else _0x3ed751['XLBxi'](_0xe451ea,!_0x9e65da);}},0x21dd+-0x1b8f+-0x2*0x133),_0x3343f2;}var _0x2deeab=_0xbe9793(0x4d7)+_0xbe9793(0x291)+_0xbe9793(0x308)+_0xbe9793(0x46e)+_0xbe9793(0x709)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+'{\x20box'+_0xbe9793(0x6b9)+'ng:\x20b'+_0xbe9793(0x304)+_0xbe9793(0x6e9)+_0xbe9793(0x2eb)+'in:\x200'+_0xbe9793(0x5ef)+'t-fam'+_0xbe9793(0x1a3)+_0xbe9793(0x5cb)+_0xbe9793(0x689)+'Segoe'+'\x20UI\x22,'+_0xbe9793(0x1b4)+_0xbe9793(0x624)+_0xbe9793(0x2ee)+_0xbe9793(0x51e)+_0xbe9793(0x6cf)+_0xbe9793(0x4d7)+_0xbe9793(0x4fc)+_0xbe9793(0x212)+_0xbe9793(0x222)+'ition'+':\x20abs'+_0xbe9793(0x3d0)+_0xbe9793(0x65e)+'ht:\x202'+_0xbe9793(0x2bd)+'botto'+_0xbe9793(0x300)+_0xbe9793(0x25b)+_0xbe9793(0x544)+_0xbe9793(0x231)+_0xbe9793(0x2e8)+_0xbe9793(0x49d)+_0xbe9793(0x23b)+'vw\x20-\x20'+'48px)'+');\x20ma'+'x-hei'+_0xbe9793(0x24e)+_0xbe9793(0x2ed)+'80px,'+'\x20calc'+_0xbe9793(0x2a7)+_0xbe9793(0x18a)+'8px))'+_0xbe9793(0x496)+'\x20\x20\x20di'+_0xbe9793(0x438)+':\x20fle'+_0xbe9793(0x2c7)+_0xbe9793(0x616)+'px;\x20p'+_0xbe9793(0x2b5)+'g:\x2010'+'px;\x20b'+_0xbe9793(0x304)+'-radi'+_0xbe9793(0x66c)+_0xbe9793(0x622)+'point'+_0xbe9793(0x180)+_0xbe9793(0x23c)+'\x20auto'+_0xbe9793(0x496)+_0xbe9793(0x678)+'ckgro'+_0xbe9793(0x16d)+_0xbe9793(0x4f6)+'24,17'+_0xbe9793(0x6a2)+_0xbe9793(0x4bb)+'backd'+_0xbe9793(0x49f)+_0xbe9793(0x211)+_0xbe9793(0x271)+_0xbe9793(0x53c)+'x)\x20sa'+_0xbe9793(0x589)+'e(150'+'%);\x20-'+'webki'+_0xbe9793(0x3e1)+'kdrop'+'-filt'+_0xbe9793(0x21e)+_0xbe9793(0x6ef)+'2px)\x20'+_0xbe9793(0x55c)+'ate(1'+_0xbe9793(0x61d)+_0xbe9793(0x4d7)+_0xbe9793(0x46f)+_0xbe9793(0x237)+_0xbe9793(0x5f1)+_0xbe9793(0x694)+'1px\x20r'+_0xbe9793(0x3bb)+'55,25'+'5,255'+_0xbe9793(0x26c)+_0xbe9793(0x411)+_0xbe9793(0x64c)+_0xbe9793(0x218)+_0xbe9793(0x165)+_0xbe9793(0x162)+_0xbe9793(0x5e7)+'55,.0'+'5),\x200'+'\x2030px'+_0xbe9793(0x71d)+_0xbe9793(0x165)+_0xbe9793(0x4ea)+_0xbe9793(0x181)+');\x0a\x20\x20'+_0xbe9793(0x6f9)+_0xbe9793(0x59e)+'y:\x200;'+'\x20tran'+_0xbe9793(0x529)+':\x20tra'+_0xbe9793(0x526)+_0xbe9793(0x5d3)+'px);\x20'+_0xbe9793(0x1fc)+'er-ev'+_0xbe9793(0x23c)+'\x20none'+';\x20tra'+_0xbe9793(0x561)+_0xbe9793(0x5dd)+_0xbe9793(0x59e)+_0xbe9793(0x386)+'s\x20eas'+_0xbe9793(0x690)+'ansfo'+_0xbe9793(0x4f9)+'5s\x20cu'+_0xbe9793(0x52f)+'ezier'+_0xbe9793(0x16c)+_0xbe9793(0x1ba)+_0xbe9793(0x193)+'\x20\x20\x20\x20\x20'+'\x20colo'+_0xbe9793(0x4fb)+_0xbe9793(0x58a)+_0xbe9793(0x5ef)+_0xbe9793(0x491)+_0xbe9793(0x643)+_0xbe9793(0x3f1)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0xbe9793(0x55b)+'shown'+_0xbe9793(0x33e)+_0xbe9793(0x4f1)+_0xbe9793(0x67f)+'trans'+'form:'+'\x20none'+';\x20poi'+_0xbe9793(0x26b)+_0xbe9793(0x243)+_0xbe9793(0x3fe)+_0xbe9793(0x287)+'\x0a\x20\x20\x20\x20'+_0xbe9793(0x16b)+_0xbe9793(0x52a)+_0xbe9793(0x2da)+'lay:\x20'+_0xbe9793(0x41b)+_0xbe9793(0x36a)+_0xbe9793(0x319)+'ction'+':\x20col'+_0xbe9793(0x346)+'align'+'-item'+_0xbe9793(0x292)+_0xbe9793(0x1a7)+_0xbe9793(0x6af)+_0xbe9793(0x6f3)+_0xbe9793(0x30f)+_0xbe9793(0x595)+_0xbe9793(0x303)+'lex:\x20'+_0xbe9793(0x330)+_0xbe9793(0x1a8)+'ing:\x20'+_0xbe9793(0x275)+(_0xbe9793(0x68a)+_0xbe9793(0x323)+'radiu'+_0xbe9793(0x542)+_0xbe9793(0x60c)+_0xbe9793(0x495)+'backg'+_0xbe9793(0x2ec)+_0xbe9793(0x6bc)+'a(255'+',255,'+'255,.'+_0xbe9793(0x6de)+'\x20box-'+'shado'+'w:\x20in'+_0xbe9793(0x1f3)+'\x200\x200\x20'+_0xbe9793(0x39a)+'gba(2'+'55,25'+_0xbe9793(0x414)+',.05)'+_0xbe9793(0x73b)+_0xbe9793(0x17d)+_0xbe9793(0x55e)+_0xbe9793(0x2d2)+_0xbe9793(0x351)+_0xbe9793(0x6e3)+'id;\x20p'+_0xbe9793(0x5ea)+'items'+':\x20cen'+_0xbe9793(0x6f4)+'width'+_0xbe9793(0x201)+_0xbe9793(0x361)+_0xbe9793(0x6b5)+'\x2032px'+';\x20}\x0a\x20'+_0xbe9793(0x17d)+'n-log'+'o-svg'+_0xbe9793(0x2f2)+_0xbe9793(0x2ff)+_0xbe9793(0x47c)+_0xbe9793(0x34e)+'ht:\x202'+'5px;\x20'+_0xbe9793(0x4f3)+_0xbe9793(0x185)+_0xbe9793(0x5fe)+_0xbe9793(0x733)+_0xbe9793(0x211)+':\x20dro'+_0xbe9793(0x273)+'dow(0'+'\x200\x204p'+'x\x20rgb'+_0xbe9793(0x536)+_0xbe9793(0x209)+_0xbe9793(0x357)+'8));\x20'+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0xbe9793(0x657)+_0xbe9793(0x2da)+_0xbe9793(0x6e0)+_0xbe9793(0x41b)+'\x20alig'+'n-ite'+_0xbe9793(0x708)+_0xbe9793(0x662)+_0xbe9793(0x729)+_0xbe9793(0x5b8)+_0xbe9793(0x4db)+_0xbe9793(0x505)+_0xbe9793(0x662)+_0xbe9793(0x554)+_0xbe9793(0x713)+'2px;\x20'+_0xbe9793(0x42b)+_0xbe9793(0x48c)+_0xbe9793(0x428)+'order'+':\x200;\x20'+_0xbe9793(0x38e)+'r-rad'+_0xbe9793(0x586)+_0xbe9793(0x1b0)+_0xbe9793(0x4d7)+'\x20\x20bac'+'kgrou'+'nd:\x20t'+'ransp'+'arent'+_0xbe9793(0x3e8)+'or:\x20r'+'gba(2'+'46,23'+'8,242'+_0xbe9793(0x28a)+_0xbe9793(0x48d)+'or:\x20p'+'ointe'+_0xbe9793(0x178)+_0xbe9793(0x1ab)+_0xbe9793(0x41e)+_0xbe9793(0x716)+_0xbe9793(0x6dd)+'weigh'+_0xbe9793(0x1dc)+_0xbe9793(0x182)+'\x20\x20\x20\x20.'+'mn-ta'+_0xbe9793(0x444)+_0xbe9793(0x57d)+_0xbe9793(0x4f4)+':\x20rgb'+_0xbe9793(0x4a0)+_0xbe9793(0x57e)+_0xbe9793(0x6a1)+'8);\x20}'+_0xbe9793(0x4d7)+'.mn-t'+'ab.ac'+_0xbe9793(0x329)+'{\x20col'+_0xbe9793(0x36d)+_0xbe9793(0x240)+_0xbe9793(0x356)+_0xbe9793(0x263)+_0xbe9793(0x16d)+_0xbe9793(0x4f6)+_0xbe9793(0x41f)+_0xbe9793(0x35f)+_0xbe9793(0x404)+_0xbe9793(0x73b)+'\x20\x20\x20.m'+'n-mai'+_0xbe9793(0x229)+_0xbe9793(0x4e4)+_0xbe9793(0x55f)+'n-wid'+_0xbe9793(0x174)+_0xbe9793(0x731)+'play:'+'\x20flex'+_0xbe9793(0x37c)+'x-dir'+_0xbe9793(0x4aa)+_0xbe9793(0x71c)+'lumn;'+_0xbe9793(0x294)+'\x20\x20.mn'+'-top\x20'+'{\x20dis'+'play:'+_0xbe9793(0x36a)+_0xbe9793(0x232)+_0xbe9793(0x2ef)+_0xbe9793(0x3b5)+'cente'+'r;\x20ga'+_0xbe9793(0x23a)+_0xbe9793(0x4ec)+'addin'+_0xbe9793(0x680)+'x\x206px'+_0xbe9793(0x54b)+';\x20use'+'r-sel'+_0xbe9793(0x62d)+_0xbe9793(0x330)+_0xbe9793(0x294)+_0xbe9793(0x276)+'-titl'+'es\x20{\x20'+'flex:'+_0xbe9793(0x1d1)+_0xbe9793(0x442)+_0xbe9793(0x2ff)+_0xbe9793(0x182)+_0xbe9793(0x245)+'mn-h\x20'+'{\x20fon'+'t-siz'+_0xbe9793(0x43f)+'px;\x20f'+'ont-w'+_0xbe9793(0x249)+_0xbe9793(0x604)+_0xbe9793(0x73b)+_0xbe9793(0x17d)+'n-sub'+'\x20{\x20fo'+'nt-si'+_0xbe9793(0x41e)+'1px;\x20'+_0xbe9793(0x6a9))+(_0xbe9793(0x44f)+_0xbe9793(0x553)+'\x20\x20\x20\x20.'+_0xbe9793(0x602)+_0xbe9793(0x521)+'\x20disp'+_0xbe9793(0x6e0)+_0xbe9793(0x259)+_0xbe9793(0x439)+'e-ite'+'ms:\x20c'+'enter'+_0xbe9793(0x554)+_0xbe9793(0x38a)+_0xbe9793(0x1e8)+'heigh'+_0xbe9793(0x6d2)+_0xbe9793(0x428)+_0xbe9793(0x304)+_0xbe9793(0x234)+'borde'+_0xbe9793(0x33b)+_0xbe9793(0x586)+'8px;\x20'+'backg'+_0xbe9793(0x2ec)+':\x20tra'+_0xbe9793(0x638)+'ent;\x20'+_0xbe9793(0x4f4)+_0xbe9793(0x3bd)+'erit;'+'\x20opac'+'ity:\x20'+_0xbe9793(0x432)+'curso'+'r:\x20po'+_0xbe9793(0x57c)+_0xbe9793(0x73b)+_0xbe9793(0x17d)+_0xbe9793(0x242)+'se:ho'+_0xbe9793(0x6a5)+'\x20opac'+_0xbe9793(0x4c7)+_0xbe9793(0x34b)+'ckgro'+_0xbe9793(0x16d)+'rgba('+'255,2'+'55,25'+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0xbe9793(0x602)+'ose\x20s'+'vg\x20{\x20'+_0xbe9793(0x2ae)+_0xbe9793(0x1ea)+_0xbe9793(0x361)+_0xbe9793(0x6b5)+'\x2014px'+_0xbe9793(0x4b8)+_0xbe9793(0x39d)+_0xbe9793(0x1ac)+_0xbe9793(0x6e5)+_0xbe9793(0x2a9)+_0xbe9793(0x30b)+_0xbe9793(0x5d5)+_0xbe9793(0x4d9)+_0xbe9793(0x565)+'dth:\x20'+_0xbe9793(0x4de)+_0xbe9793(0x301)+'linec'+'ap:\x20r'+_0xbe9793(0x395)+_0xbe9793(0x294)+_0xbe9793(0x276)+_0xbe9793(0x227)+_0xbe9793(0x3fb)+_0xbe9793(0x4ac)+';\x20min'+_0xbe9793(0x1bb)+'ht:\x200'+_0xbe9793(0x366)+'rflow'+'-y:\x20a'+'uto;\x20'+_0xbe9793(0x23e)+_0xbe9793(0x3c8)+'rid;\x20'+'grid-'+_0xbe9793(0x3df)+_0xbe9793(0x537)+'olumn'+_0xbe9793(0x4c0)+_0xbe9793(0x61c)+_0xbe9793(0x2c4)+_0xbe9793(0x349)+'\x20minm'+'ax(25'+_0xbe9793(0x29c)+_0xbe9793(0x6a6)+_0xbe9793(0x232)+_0xbe9793(0x2ef)+_0xbe9793(0x3b5)+'start'+_0xbe9793(0x232)+_0xbe9793(0x6b3)+'ntent'+':\x20sta'+_0xbe9793(0x503)+'ap:\x201'+_0xbe9793(0x716)+_0xbe9793(0x634)+_0xbe9793(0x170)+_0xbe9793(0x467)+_0xbe9793(0x167)+_0xbe9793(0x73b)+_0xbe9793(0x17d)+'n-col'+_0xbe9793(0x295)+_0xbe9793(0x1db)+'-scro'+'llbar'+'\x20{\x20wi'+_0xbe9793(0x2ff)+'8px;\x20'+'}\x0a\x20\x20\x20'+_0xbe9793(0x53d)+_0xbe9793(0x49b)+':-web'+'kit-s'+_0xbe9793(0x691)+_0xbe9793(0x3f6)+_0xbe9793(0x4f2)+_0xbe9793(0x468)+_0xbe9793(0x3a0)+'nd:\x20r'+'gba(2'+'55,25'+_0xbe9793(0x414)+_0xbe9793(0x220)+';\x20bor'+_0xbe9793(0x72f)+_0xbe9793(0x1b9)+_0xbe9793(0x424)+_0xbe9793(0x73b)+'\x20\x20\x20.s'+_0xbe9793(0x31d)+'d\x20{\x20b'+_0xbe9793(0x304)+_0xbe9793(0x69e)+_0xbe9793(0x22c)+_0xbe9793(0x622)+_0xbe9793(0x4d2)+_0xbe9793(0x2ec)+_0xbe9793(0x6bc)+'a(255'+_0xbe9793(0x6cc)+'255,.'+_0xbe9793(0x6de)+'\x20box-'+'shado'+_0xbe9793(0x5ee)+_0xbe9793(0x1f3)+_0xbe9793(0x694)+_0xbe9793(0x39a)+_0xbe9793(0x3bb)+'55,25'+'5,255'+',.05)'+';\x20}\x0a\x20'+_0xbe9793(0x71a)+_0xbe9793(0x31d)+'d.on\x20'+_0xbe9793(0x468)+_0xbe9793(0x3a0)+_0xbe9793(0x4cc)+'gba(2'+_0xbe9793(0x661)+'5,255'+_0xbe9793(0x190)+';\x20box'+_0xbe9793(0x237)+_0xbe9793(0x501)+'nset\x20'+_0xbe9793(0x353)+'\x201px\x20'+'rgba('+_0xbe9793(0x41f)+'07,15'+'7,.28'+_0xbe9793(0x1c8)+_0xbe9793(0x245)+_0xbe9793(0x3eb)+_0xbe9793(0x2b9)+_0xbe9793(0x6f5)+_0xbe9793(0x23e))+(_0xbe9793(0x3ec)+_0xbe9793(0x69f)+_0xbe9793(0x1b2)+'-item'+'s:\x20ce'+'nter;'+_0xbe9793(0x6af)+'\x208px;'+_0xbe9793(0x1a8)+_0xbe9793(0x204)+_0xbe9793(0x27b)+_0xbe9793(0x56d)+_0xbe9793(0x294)+_0xbe9793(0x6b0)+'-card'+'-titl'+_0xbe9793(0x650)+_0xbe9793(0x4e4)+'1;\x20mi'+'n-wid'+_0xbe9793(0x174)+';\x20}\x0a\x20'+_0xbe9793(0x71a)+_0xbe9793(0x31d)+_0xbe9793(0x310)+_0xbe9793(0x24d)+_0xbe9793(0x663)+'{\x20fon'+_0xbe9793(0x491)+_0xbe9793(0x643)+_0xbe9793(0x303)+'ont-w'+'eight'+':\x20600'+';\x20col'+_0xbe9793(0x389)+_0xbe9793(0x3bb)+_0xbe9793(0x5ae)+_0xbe9793(0x6c3)+_0xbe9793(0x4ce)+_0xbe9793(0x73b)+'\x20\x20\x20.s'+_0xbe9793(0x31d)+_0xbe9793(0x3aa)+_0xbe9793(0x485)+_0xbe9793(0x1ed)+'itle\x20'+'stron'+_0xbe9793(0x1b1)+_0xbe9793(0x674)+_0xbe9793(0x436)+_0xbe9793(0x286)+_0xbe9793(0x577)+'\x20.sk-'+'mbody'+_0xbe9793(0x64d)+_0xbe9793(0x63c)+':\x200\x201'+_0xbe9793(0x63f)+'0px;\x20'+_0xbe9793(0x577)+_0xbe9793(0x5fd)+'mdesc'+_0xbe9793(0x6e8)+'nt-si'+_0xbe9793(0x41e)+_0xbe9793(0x2f5)+'opaci'+_0xbe9793(0x44f)+'4;\x20ma'+'rgin-'+_0xbe9793(0x29e)+_0xbe9793(0x6e7)+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+_0xbe9793(0x38f)+_0xbe9793(0x176)+_0xbe9793(0x351)+_0xbe9793(0x19c)+_0xbe9793(0x1d5)+_0xbe9793(0x63e)+_0xbe9793(0x596)+_0xbe9793(0x407)+'ter;\x20'+_0xbe9793(0x65c)+'8px;\x20'+_0xbe9793(0x634)+_0xbe9793(0x19a)+_0xbe9793(0x686)+_0xbe9793(0x63d)+'-size'+':\x2011.'+_0xbe9793(0x5d4)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'label'+_0xbe9793(0x3fb)+_0xbe9793(0x4ac)+_0xbe9793(0x3e8)+'or:\x20r'+'gba(2'+'46,23'+_0xbe9793(0x6c3)+_0xbe9793(0x2d9)+_0xbe9793(0x73b)+'\x20\x20\x20.s'+'k-hin'+'t\x20{\x20d'+_0xbe9793(0x351)+'y:\x20bl'+_0xbe9793(0x177)+_0xbe9793(0x6dd)+_0xbe9793(0x68f)+'\x2010px'+_0xbe9793(0x40c)+_0xbe9793(0x5f6)+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0xbe9793(0x1e4)+_0xbe9793(0x248)+_0xbe9793(0x33c)+'on:\x20r'+_0xbe9793(0x363)+_0xbe9793(0x53a)+_0xbe9793(0x544)+_0xbe9793(0x48f)+';\x20hei'+_0xbe9793(0x24e)+_0xbe9793(0x51d)+_0xbe9793(0x2d8)+'er:\x200'+';\x20bor'+'der-r'+'adius'+_0xbe9793(0x417)+_0xbe9793(0x629)+_0xbe9793(0x263)+'und:\x20'+_0xbe9793(0x4f6)+_0xbe9793(0x5e7)+'55,25'+_0xbe9793(0x6fb)+_0xbe9793(0x4ed)+_0xbe9793(0x299)+'\x20poin'+_0xbe9793(0x6f4)+_0xbe9793(0x2e9)+'\x20none'+_0xbe9793(0x73b)+'\x20\x20\x20.s'+_0xbe9793(0x2a6)+_0xbe9793(0x4c3)+_0xbe9793(0x345)+_0xbe9793(0x41a)+_0xbe9793(0x335)+':\x20\x22\x22;'+'\x20posi'+'tion:'+_0xbe9793(0x364)+'lute;'+'\x20top:'+_0xbe9793(0x34f)+_0xbe9793(0x5f4)+_0xbe9793(0x528)+_0xbe9793(0x554)+_0xbe9793(0x4a4)+_0xbe9793(0x405)+_0xbe9793(0x249)+':\x208px'+';\x20bor'+'der-r'+'adius'+_0xbe9793(0x477)+';\x20bac'+_0xbe9793(0x3a0)+_0xbe9793(0x4cc)+_0xbe9793(0x3bb)+_0xbe9793(0x661)+_0xbe9793(0x414)+_0xbe9793(0x3af)+_0xbe9793(0x573)+_0xbe9793(0x561)+_0xbe9793(0x45a)+_0xbe9793(0x39f)+'2s,\x20b'+_0xbe9793(0x2f9)+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0xbe9793(0x1e4)+'h[ari'+_0xbe9793(0x1bc)+_0xbe9793(0x244)+_0xbe9793(0x3cc)+_0xbe9793(0x5e9)+_0xbe9793(0x4d2)+_0xbe9793(0x2ec)+_0xbe9793(0x6bc))+(_0xbe9793(0x536)+',107,'+_0xbe9793(0x357)+'25);\x20'+_0xbe9793(0x577)+'\x20.sk-'+_0xbe9793(0x1e4)+_0xbe9793(0x5fc)+'a-che'+_0xbe9793(0x244)+'\x22true'+'\x22]::a'+'fter\x20'+_0xbe9793(0x1d3)+_0xbe9793(0x50d)+'px;\x20b'+'ackgr'+'ound:'+'\x20#ff6'+_0xbe9793(0x72a)+_0xbe9793(0x577)+'\x20.sk-'+_0xbe9793(0x5d1)+_0xbe9793(0x5cc)+_0xbe9793(0x263)+_0xbe9793(0x16d)+_0xbe9793(0x4f6)+_0xbe9793(0x5e7)+_0xbe9793(0x661)+_0xbe9793(0x610)+_0xbe9793(0x6c5)+_0xbe9793(0x304)+_0xbe9793(0x234)+_0xbe9793(0x38e)+'r-rad'+_0xbe9793(0x586)+_0xbe9793(0x5a3)+_0xbe9793(0x4f4)+':\x20#f6'+_0xbe9793(0x1f4)+_0xbe9793(0x1a8)+_0xbe9793(0x204)+_0xbe9793(0x627)+'px;\x20f'+'ont-s'+_0xbe9793(0x284)+'11.5p'+'x;\x20ou'+_0xbe9793(0x451)+_0xbe9793(0x379)+'e;\x20bo'+_0xbe9793(0x443)+_0xbe9793(0x450)+_0xbe9793(0x458)+_0xbe9793(0x694)+_0xbe9793(0x184)+_0xbe9793(0x165)+'(255,'+_0xbe9793(0x5e7)+'55,.0'+'5);\x20}'+_0xbe9793(0x4d7)+_0xbe9793(0x2f0)+'ield\x20'+'optio'+'n\x20{\x20b'+_0xbe9793(0x2f9)+_0xbe9793(0x2c2)+'\x20#221'+'419;\x20'+'}\x0a\x20\x20\x20'+_0xbe9793(0x5fd)+_0xbe9793(0x2e0)+'\x20{\x20di'+_0xbe9793(0x438)+_0xbe9793(0x2ba)+_0xbe9793(0x540)+'ign-i'+_0xbe9793(0x519)+'\x20cent'+_0xbe9793(0x5ac)+_0xbe9793(0x1c9)+_0xbe9793(0x3f1)+_0xbe9793(0x4d7)+_0xbe9793(0x67b)+_0xbe9793(0x3f4)+'\x20{\x20-w'+'ebkit'+'-appe'+_0xbe9793(0x219)+_0xbe9793(0x3f5)+_0xbe9793(0x509)+'ppear'+_0xbe9793(0x6f2)+_0xbe9793(0x19d)+_0xbe9793(0x554)+'th:\x209'+'0px;\x20'+'heigh'+'t:\x208p'+'x;\x20ba'+'ckgro'+_0xbe9793(0x16d)+'trans'+'paren'+'t;\x20}\x0a'+_0xbe9793(0x245)+'sk-sl'+'ider:'+_0xbe9793(0x558)+_0xbe9793(0x298)+_0xbe9793(0x3f4)+'-runn'+_0xbe9793(0x39c)+'track'+_0xbe9793(0x427)+'ight:'+'\x202px;'+_0xbe9793(0x2d8)+_0xbe9793(0x5b2)+_0xbe9793(0x239)+'\x202px;'+_0xbe9793(0x19e)+_0xbe9793(0x4b1)+_0xbe9793(0x6fc)+'near-'+'gradi'+_0xbe9793(0x4e2)+_0xbe9793(0x240)+_0xbe9793(0x20a)+_0xbe9793(0x278)+_0xbe9793(0x397)+'\x20/\x20va'+'r(--p'+',\x2050%'+_0xbe9793(0x31b)+_0xbe9793(0x1be)+_0xbe9793(0x3f3)+_0xbe9793(0x32b)+'ba(25'+'5,255'+_0xbe9793(0x6cc)+'.08);'+'\x20}\x0a\x20\x20'+_0xbe9793(0x6b0)+_0xbe9793(0x546)+'er::-'+'webki'+_0xbe9793(0x453)+_0xbe9793(0x735)+_0xbe9793(0x4f2)+'{\x20-we'+_0xbe9793(0x513)+'appea'+'rance'+_0xbe9793(0x379)+_0xbe9793(0x61a)+'dth:\x20'+'6px;\x20'+_0xbe9793(0x42b)+_0xbe9793(0x161)+'x;\x20ma'+_0xbe9793(0x668)+_0xbe9793(0x342)+_0xbe9793(0x489)+_0xbe9793(0x2d8)+_0xbe9793(0x5b2)+_0xbe9793(0x239)+'\x2050%;'+_0xbe9793(0x19e)+'groun'+_0xbe9793(0x261)+_0xbe9793(0x278)+_0xbe9793(0x73b)+'\x20\x20\x20.s'+_0xbe9793(0x4c5)+_0xbe9793(0x6e8)+'nt-si'+'ze:\x201'+_0xbe9793(0x2f5)+'font-'+_0xbe9793(0x1b8)+_0xbe9793(0x533)+_0xbe9793(0x365)+_0xbe9793(0x4fa)+_0xbe9793(0x38a)+'8px;\x20'+'text-'+'align'+_0xbe9793(0x431)+_0xbe9793(0x704)+'olor:'+'\x20rgba'+'(246,'+'238,2'+'42,.8'+_0xbe9793(0x1c8)+'\x20\x20\x20\x20.'+_0xbe9793(0x3ca)+_0xbe9793(0x3b0))+(_0xbe9793(0x30f)+_0xbe9793(0x550)+_0xbe9793(0x405)+_0xbe9793(0x249)+_0xbe9793(0x5e5)+_0xbe9793(0x400)+_0xbe9793(0x5b4)+_0xbe9793(0x283)+_0xbe9793(0x304)+_0xbe9793(0x69e)+'us:\x206'+_0xbe9793(0x428)+'ackgr'+_0xbe9793(0x2c2)+_0xbe9793(0x19d)+_0xbe9793(0x3e4)+_0xbe9793(0x2ad)+_0xbe9793(0x247)+_0xbe9793(0x484)+_0xbe9793(0x466)+'nter;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0xbe9793(0x2fe)+'\x20{\x20fo'+_0xbe9793(0x1ab)+'ze:\x201'+_0xbe9793(0x2f5)+_0xbe9793(0x4f4)+_0xbe9793(0x6bc)+_0xbe9793(0x4a0)+_0xbe9793(0x57e)+_0xbe9793(0x6a1)+_0xbe9793(0x631)+'addin'+'g:\x202p'+'x\x200;\x20'+_0xbe9793(0x577)+_0xbe9793(0x5fd)+_0xbe9793(0x1af)+_0xbe9793(0x223)+_0xbe9793(0x2a0)+_0xbe9793(0x4fb)+'f7a93'+_0xbe9793(0x73b)+_0xbe9793(0x71a)+_0xbe9793(0x343)+'\x20{\x20al'+_0xbe9793(0x225)+'elf:\x20'+_0xbe9793(0x524)+'start'+';\x20bor'+'der:\x20'+_0xbe9793(0x68a)+_0xbe9793(0x323)+'radiu'+'s:\x208p'+_0xbe9793(0x1d6)+'dding'+':\x208px'+_0xbe9793(0x2ab)+_0xbe9793(0x642)+'kgrou'+_0xbe9793(0x687)+_0xbe9793(0x240)+_0xbe9793(0x6dc)+_0xbe9793(0x21f)+_0xbe9793(0x3ed)+_0xbe9793(0x63d)+_0xbe9793(0x6db)+':\x2011.'+_0xbe9793(0x5d4)+'font-'+'weigh'+_0xbe9793(0x1dc)+_0xbe9793(0x38b)+'rsor:'+_0xbe9793(0x65f)+_0xbe9793(0x6f4)+_0xbe9793(0x577)+'\x20.sk-'+'btn:h'+'over\x20'+_0xbe9793(0x17f)+_0xbe9793(0x584)+_0xbe9793(0x241)+'tness'+_0xbe9793(0x422)+';\x20}\x0a\x20'+_0xbe9793(0x358));window['addEv'+_0xbe9793(0x455)+_0xbe9793(0x49e)+'r'](_0xbe9793(0x5bb)+'wn',_0x473e2b=>{var _0x5aa03a=_0xbe9793;_0x473e2b[_0x5aa03a(0x230)]===_0x5aa03a(0x350)+'t'&&(_0x37e40a['pOXZM'](_0x37e40a['srNPc'],_0x37e40a['srNPc'])?(_0x473e2b[_0x5aa03a(0x639)+'ntDef'+_0x5aa03a(0x56c)](),_0x37e40a[_0x5aa03a(0x69a)](_0x2ea795)):(_0x313f01(_0x4a60a4,-0x2*0xe77+0xbb7*0x3+-0x60f,_0x24d3b5[_0x5aa03a(0x1de)],_0x4101fc),_0x15e962(_0x3d477a,0x1ce1+0x1*-0x16bf+-0x1*0x5f6,_0x5aa03a(0x51f),_0x236c20),_0x1e8759(_0x333a06,-0xad*0x34+-0x13+0xab*0x35,'f32',_0x2d5306),_0x24d3b5['kcJQH'](_0x282c65,_0x1f90a7,0x1d*0x3d+-0xc*-0x259+-0x22e1,_0x24d3b5[_0x5aa03a(0x1de)],_0x32da08),_0x24d3b5[_0x5aa03a(0x605)](_0x3b45df,_0x4ed22a,0x211*-0x3+0xd6f*0x1+-0x720,_0x5aa03a(0x51f),_0xdd374c),_0x21ed5c(_0x216fda,-0x9f1+-0x1a13*0x1+0x2424,'f32',_0x3eaa21)));},!![]);var _0x49b109=document['creat'+'eElem'+_0xbe9793(0x37d)]('div');_0x49b109[_0xbe9793(0x258)][_0xbe9793(0x719)+'xt']=_0xbe9793(0x32f)+'ion:f'+'ixed;'+_0xbe9793(0x210)+'2px;r'+'ight:'+'12px;'+_0xbe9793(0x55d)+_0xbe9793(0x2bf)+_0xbe9793(0x70a)+_0xbe9793(0x1a0)+'ursor'+_0xbe9793(0x539)+_0xbe9793(0x462)+'idth:'+_0xbe9793(0x65d)+'heigh'+_0xbe9793(0x5e8)+_0xbe9793(0x370)+_0xbe9793(0x5f6)+_0xbe9793(0x164)+_0xbe9793(0x4f0)+_0xbe9793(0x254)+_0xbe9793(0x6a9)+'ty\x200.'+_0xbe9793(0x67a)+_0xbe9793(0x57c)+'-even'+'ts:au'+'to;fi'+'lter:'+_0xbe9793(0x5ed)+_0xbe9793(0x3d3)+'w(0\x200'+_0xbe9793(0x467)+_0xbe9793(0x4f6)+_0xbe9793(0x41f)+_0xbe9793(0x35f)+'7,0.7'+'))',_0x49b109[_0xbe9793(0x2d1)+_0xbe9793(0x6f7)]=_0x37e40a[_0xbe9793(0x347)],_0x49b109[_0xbe9793(0x647)]=_0xbe9793(0x1ef)+_0xbe9793(0x60b)+'r',_0x49b109[_0xbe9793(0x3c5)+_0xbe9793(0x198)+'er']=()=>_0x49b109[_0xbe9793(0x258)][_0xbe9793(0x6a9)+'ty']='1',_0x49b109['onmou'+_0xbe9793(0x37b)+'ve']=()=>_0x49b109['style'][_0xbe9793(0x6a9)+'ty']='0.5',_0x49b109['oncli'+'ck']=_0x1b68f9=>{_0x1b68f9['stopP'+'ropag'+'ation'](),_0x2ea795();},document[_0xbe9793(0x698)][_0xbe9793(0x6d3)+'dChil'+'d'](_0x49b109),_0x321326(),_0x37e40a[_0xbe9793(0x715)](requestAnimationFrame,_0x5212d0),console[_0xbe9793(0x256)](_0xbe9793(0x701)+_0xbe9793(0x6cd)+'ur]\x20m'+_0xbe9793(0x433)+_0xbe9793(0x459)+'\x20UWMK'+':',_0x56bd59[_0xbe9793(0x42e)]);});})()));function _0x2df4(){var _0x1fa18d=['vw5PDhK','sw5PDgK','zgfTywC','z2fWoIa','mJzWEdS','oYbYAwC','ihbVAw4','Ag9VA1a','ntuSmJu','zw50zxi','CM9UzYa','Fdj8nxW','AfnOywq','EKPkyMq','mcWWlJy','CMDPBI0','ihrVide','uuvQD04','lJv6iIa','Dxm6idi','z3nzwxy','lMrSBa','FdiYFdC','BgLUzvC','DgLKzvC','yxr0ywm','CgfYC2u','B2XVCJO','ihjLy28','AxrPyxq','BNqGAge','icaGyMe','Ehv3tKe','mNm7Cg8','lNnRlxm','CxvLCNK','B25Lige','As1TB24','oIaXoYa','zZOGnNa','t1vsx18','Egrjy3q','D0nVBg8','y29TCgW','vMfSDwu','ChGGmdS','BMq6icm','qwX0DMW','CIiSici','mdSGyM8','CZPUB24','ywLSzwq','DgHYB3C','zIXZExm','C2L6ztO','zsWGDhi','y3jVBgW','mtaWid0','u2nHBgu','idaGmca','qNHetgy','Bg9Hzgu','CI52mq','yM9KEq','sfj6Dfi','qwDpsK4','nYWWlJG','u2fMzsa','vg90ywW','lxjHzgK','Bgv4oYa','vfzesMW','mJqYlc4','ldiXlc4','v3H4seK','BgvUz3q','DMvYihS','mwzYksK','zgv2Awm','oc00lJu','B3bHy2K','nNWZFda','zNvSBhm','vKndwge','r29Kl2q','sKzAENy','igDHCdO','icaUC2S','Fdr8mhW','u3bHy2u','z24Ty28','z2v0','AwDODdO','CYbpsgu','DwLpC2S','Aw5KzxG','lxnPEMK','z0fRru8','Aw9U','oIbYz2i','zMLSBa','vwz0q1q','qM5IAfm','thvuwNm','i2zMzG','C0v4EuO','ocWYndi','vuTHDM0','nsK7igi','C2HVD24','ywXSihq','Aw9FmZa','DfH3qNa','y2DmC2S','ywn0A0S','ldi1nsW','CMeTA28','igvMzMu','Awy7ih0','mcWWlJC','CMfPC2u','DdOGmJG','yxbWzw4','CMP4yva','A3mGyxi','ve9iDeu','BNn0ywW','C2Hyswe','qMvvD1O','C2v0uhi','lxnPEMu','zdSGy28','zM9UDc0','mdi1ktS','mJiSocW','Bgf5oIa','C3bLzwq','CMPIt3a','EtOGz3i','s2LSBgu','DhjVA2u','AM9PBJ0','BtOGnNa','ihSGzM8','lwjVEdS','Bw4TDge','zxmGB24','te1c','vxffwvy','zcbNCMu','BhvYkdi','y2fSBhm','BYb0Agu','yw5JztO','idrWEdS','DgvYoYa','ywqGEYa','DKvwCuu','sfrnta','DhKGjq','icaGig8','zwHIBgq','nsWUmdC','zdOGBgK','AuPRvxK','DwTJuMq','ver3AMW','DgGUsw4','w3nHA3u','D3HpwxC','rffkuLu','Ahq7igm','AwrIA1C','zwCGzMe','q2Hbzxy','Bxm6igm','AxrPywW','ndC0odm','z2fTzuW','y2HLCYa','EMPyr3q','B3vUzgu','igLMig0','zgvZyW','lJuGms4','CMvWBge','DgG6idu','zwfK','wMvdtva','mhb4oYa','ifjLy28','qMfuChi','y3nZvgu','icaGlNm','CMrhBhy','BJOGy28','idGWChG','mtySmc4','y29PBa','Dwj6vwm','r29Kie0','v3jezwG','CMfWAwq','suLPEM8','ELz0zva','q2XVC2u','z3jHDMK','C3rLCa','oYbQDxm','yJLKoYa','C2HPzNq','B3nWywm','DMzKzwC','zxvJu1C','zgvYlxi','t2X2BLu','oYbKAxm','u1rKq1G','Bgu7igy','igjHBIa','zgvYlxq','vgHLC2u','z29mDNa','Eg1Trvu','s2vdtgW','sK5rq3C','oYb9cIa','Bw4TCge','yuTVDxi','nZaWia','BxKGC2u','tgvNAw8','AwvKigm','uhDeEhe','BgjmsKC','yxnZAwC','rMDszvi','DdOGnNa','kdi1nsW','uNHzzw0','mc41o3q','ihjNyMe','AvzNrvu','nNb4ida','ihDLyxa','zxH0','ALDbu3a','lM1Ulxm','kc4YmIW','Dw5KoIa','nYWWlJm','v2zpr0O','BMC6ida','AtmY','yxjPys0','BuDnA0G','DgG6ida','B3HosMG','Bcb7igq','B2nRoYa','CJSGzM8','CK5jqMK','rxHW','y3LxCvu','D2joseC','icaGlM0','re96ww0','EYbMAwW','zxiTzxy','mcWUntu','mdSGFqO','C2vSzwm','mcaXChG','Bg93oIa','CMXHEsa','qM90Dg8','uMvJDa','B2vZig4','AcaTidq','y2f0','rgfUz2u','B2rL','t0HLywW','Ewfkuha','lc4WncK','D2HZEgS','tw92zw0','ldePoWO','zhvwAKK','AxHLzdS','CwzJrNm','ihWGC2G','C2vLBNq','yMPOrKW','BMC6idq','lKXVy2e','EtOGzMW','ig5VBMu','igjHy2S','Aw5WDxq','nJq2o2m','yw1Hz2u','CMvZDg8','AwX5oIa','EgvZige','wMrjALK','lwXPBMu','BNrLCJS','ihbHzgq','sw1PCvG','z2DSzwq','BNqTC2K','BMu7ihm','sgLKzxm','AxrLiee','BM90zs4','mtbWEdS','zYb7igm','ywXPz24','DMvYBge','ihn5C3q','B25SEsW','CMvU','mhGYnta','D2vPz2G','ywrPDxm','msWUmZy','lwHLAwC','ys1JAgu','BsbSzwy','jsbUBY0','DcbZDge','tM8Gu3a','igq9iK0','FdD8nNW','igHVB2S','u2DuEuq','txHdBfu','BgWGBwu','yxjJ','ktSGFqO','yxa6idG','ELnstum','D2HLCMu','yxrLvge','ys11Aq','CIb2ywW','yw5Jzs4','zgLiz2q','ide7ig0','lIbuDxi','EYbSzwy','rvjNDgi','zxG7ige','EdSGCge','AeXMzgi','Bw4TBwe','y2fWtw8','tvHozeq','zwjRAxq','DdOGnZa','yxb0Dxi','zwz4v3u','B2TLpsi','B290zxi','i2zMyJm','BLbSyxq','ifvxtuS','C3DPDgm','Aw4Sihq','A3nty2e','s1jsCxK','ohb4oYa','A2uTBgK','oIaXnha','yMHprM0','B2reAwu','yxjKlxq','mtiGmJe','u2fRDxi','ywqUieK','zsbZzxi','DgHPCYa','C2v0ida','zwvMmJS','wMvYB2u','rxbruwm','phbHDgG','u0fgrsa','Cg9W','ugn0','mtf8ohW','Cg9PBNq','y2fWu2G','y3jLzw4','zMyP','Aw5Mqw0','oIaZmNa','y2fSBa','igrLzMe','Aw5NoIa','BhvLCY4','v2LWzsa','Eej5BgW','DcbHihq','ldeWnYW','zcWGi2y','zKDmzxu','BMfwBwS','s09QAe0','Ag9Szsa','B2LSicG','Dg9WoJe','AwX0zxi','yw5LBca','mhG2mda','mxWWFdi','idi0iJ4','Dhj1zq','uwLTv2K','mxb4ida','yxjHBMm','tu9ersa','DeTVDw0','zxnJ','v2j1BfC','zxi6igi','Bg9YoIa','lc4WocK','B2r5','EYbWB3m','zxjYihS','t3zLCNC','AwDUlxm','igv4Axq','lwnVBhm','CMLNAhq','BIb7igy','tM1Iz1q','DgLKzs4','Dxm6ide','ihnVig4','igvSC2u','x19tquS','y29Kzq','ig1PBIG','oYbHBgK','DML0Eq','oIaWoYa','Fdz8mta','CMn3z1m','lxnOywq','zxzLCNK','zgL1CZO','CdOGmti','yYGXmda','zw50CZO','lsbVDMu','zgLZCgW','Dg9W','zMy2yJK','yNjPz2G','BI1JBg8','zxzLBNq','y2TLzd0','icaGic4','u3bLzwq','ida7igm','Acb7iha','zwLNAhq','ltiUns0','Dg9Nz2W','AePSBgK','BguGC3q','z2H0oIa','zcWGyw4','vezuAMi','zMLSzw4','mJqWiey','CJOGDgG','DgLVBJO','yK5urNi','Bg9N','qKP2r0q','C3r5Bgu','z3jPzdS','oJa7D2K','ChG7ihC','D21LEwq','mdbTCY4','B3n0zMK','yxmGBM8','khjLBg8','zdOGi2y','DMLZDwe','y2TNCM8','zw1LBNq','CffIA2q','B2STCMu','nJaWia','re9nq28','yw1L','ChGGDwK','BNrLCI0','lc4WnIK','sgfTueO','qsblt1u','odK1mJmXmffNqLfdtq','C250tKS','oIbIBhu','mIaXmK0','Cc1ZAge','Bw4TDgK','mtjWEca','icaUBw4','rMjSqu8','zJzIowq','DgvTlxu','ig1VBwu','mtfWEca','B250zw4','lxnLCMK','DhLWzq','rw5NAw4','AK9xzxG','Dg9Wrgu','u3rHDgu','ida7igi','AxPLoIa','ELjYvgq','mgy1oYa','Dg87ih0','yxjNzxq','AguGDxm','lc40ktS','sfbqrNy','CNPuuvG','CwniB1a','BM9szwm','qK9xzKS','DgvYigm','oMHVC3q','CZOGy2u','t016sK4','ih0kica','CZO6lxC','r0XUAM4','BMvJyxa','A2L0lxm','CNnVCJO','ve9uv0m','uMvMAwW','mhb4lca','AwnRihm','yM90Dg8','iefmtca','ignVBg8','C2XPy2u','DhjPyNu','mJu3nZe0nMPcANzKwq','rLbtigm','AxLqwKO','AY1ZD2K','kdeWmhy','qwfouxy','oIbJDxi','yKTUwwi','ide2ChG','idi0iIa','zgLUzZO','D2LKDgG','Dw5Kzwq','q29SB3i','BgLNBG','B29Rihi','ignVB2W','ihDOAwm','ywrKAw4','BhKGkhi','BwuG','B0PYqLG','CMqTAgu','oIbMBgu','zMLSBfm','BLnltLe','nhb4oYa','u2HHCNa','zxG6mJe','uxjnv0W','DMC+','B3vUzdO','DMLHifm','yxv0BY0','yxj2yva','t1nOB28','EdSGz2e','tM8GuMu','mtaXnZu1nMPABwDACG','ugf0Aa','AsXZyw4','Awr0Aa','rfHHyuq','sxnhCM8','mtL8nxW','r0XSu3i','Aw5Uzxi','BYb7igq','BgW+','yxrJAgu','tKCGlsa','zvn0EwW','ue1sAvm','igjVCMq','lc43nsK','igrPC3a','BgLUzw4','z2v0qxq','lxDPzhq','ywXSzwq','A2v5C3q','CMfUz2u','DM56A0e','uwfLrLy','ywqGD2G','r2LWuLi','Ag9VA0m','BM9Uzq','z1jdChe','nJiWChG','zMXLEdO','zw5HyMW','ig1HCMC','CM91BMq','BwLUkdq','lcbZyw4','z24TAxq','lNnRlwy','B1jLy28','ihSGD2K','ihrOzsa','Fdv8mNW','mxb4oYa','Bg9HzgK','ignHy2G','C3bSAxq','ywnRz3i','wLDxsxy','iNjVDw4','C3rPBgW','AgvZ','lw5VDgu','zhrOoIa','BtOGmJq','CM9Rzs0','txfIvMi','ChG7igy','B3jKzxi','A3nqB3m','mtGGnIa','y3qGB24','ihSGywW','AwXnB3q','yxj0lG','CMvUDem','BMqIihm','ywqU','ig5LDMu','ihDPzhq','zc10Axq','CMvHzey','C2v0sxq','wNLqwfq','B24Oks4','yxnLBgK','yK5Vwfu','wNnYANa','ywnZBLi','lwrPCMu','zcbZzwu','ksaXmda','Eg1lC24','AY1Jyxi','v3jHCha','psjTBI0','ufzpy04','D0jSDxi','DgHVzca','CMrLCI0','ns00idC','ovPQsvjAEG','Cg9Uj3m','uwHMDu8','qvfOqvG','DgL2zsa','ntm4otK4nwXhsMTLCW','DcWGCMC','ChvZAa','mcWWlJu','mxWYFdm','Cg9ZAxq','BM9UztS','qLzWB1K','vLjZzvm','rxLvwgm','D2PMCxa','BNrLBNq','C2HVB3q','rgDZvve','lK92zxi','yxrPB24','Bg9JAW','CI1Yywq','B3nPDgK','nwmWidm','ihSGB3a','zvv3se0','CufIChG','vvDnsW','Dg9WoIa','AY1IDg4','ieLZr3i','ywz0zxi','Dw1UoYa','BgveAMe','rwnsy1m','zMLSBcW','zsbJEd0','mtSGyMe','idK5osa','Dw5PDhK','igHLAwC','idnWEdS','sw5Zzxi','AxnWBge','zsbBrvG','mcaWida','jYb0Agu','y3jLyxq','zdSGyMe','mtu3lc4','icaG','tMfTzq','iIbZDhi','z3LIywm','EgvAA3y','Fdv8nhW','yxbWBgK','mdCSmtu','Bwf4','EdSGAgu','ie92zxi','zwXHDgK','igfIC28','mdSGBwK','oYbVDMu','psjYB3u','B29RCYa','mciGCJ0','igzSzxG','EenNqKq','r21Rshe','B3i6icm','B3jZige','wfDWt0S','EdTVCge','id0GzMW','B2LS','oJiXndC','sLr6EvK','zxjZ','vwv3yuO','t21Pzeu','Bw91C2u','oIbUB24','qMXVy2S','C2vSzwe','oYbMBgu','zw50','De5Vzgu','yvzhu3G','CM9Rzxm','q291BNq','mcuUifm','zgL2','zxjSyxK','tM8Gzw4','EsaUmZu','sKLzuxK','yMHVCa','B3i6ihi','DgG6idi','mdSGy3u','wuzSAuq','y2LYy2W','yM9Yzgu','C2STy3q','DxjH','BhmGDgG','sfHmAKy','yxKGB24','kYbtCge','B3vUzdS','C3rYAw4','ksaWida','s2v5qq','uK1c','mxb4ihi','zg93BG','ywjSzs0','BdOGBM8','BwXjt2O','zwz0ic4','A2DYB3u','sgvHBhq','zgvZ','C2STBwi','BM93','idqTnc4','ohG5mc0','BYbWAwC','wu13DgO','y2XLyxi','zc5VBIa','y2XHC3m','BgvZiem','uMnSDKW','BMCGzM8','lc4YnsK','Bg9YihS','r0n0Cfm','BguGAwy','AgfZ','BwLU','zw1ZoIa','rgXKCuy','D1zMyuG','yxzHwhK','A0Pbwui','mtu0mtqWBuHNzuPZ','z2jHkdi','zxj2zxi','oIbPBMG','DgXRruW','r1vfyNK','phn2zYa','DMvTzw4','Ag9VA0C','CKDTwfa','DhKGDMe','B25TB3u','yLbLuMq','CgzHzuy','yxK6igC','ywWGBwu','C2STy28','Bw4TBg8','iNrYDwu','A291CI0','rgTZy2S','yxvSDca','B2X1Dgu','nNWW','we1Mte8','C2HHzg8','Aw5NicS','DhjPA2u','ChbLBNm','yw5tD2O','DgHLihC','CNjVCG','yMX5lum','Ag9VA3m','Bw92zw0','C3rYB2S','yMvNAw4','DgvTCgW','u2v0r2e','Dc1Iywm','BuTcseS','whzdv2u','oYbWywq','Axb0kq','AcbVBMu','vgfRzxm','oYbJB2W','zK5iwMq','AwrHDgu','C2STy2e','yxK6igy','i2zMzJS','DhvTru0','yMX1CG','C2v0qxq','ChG7ih0','B2f0Eq','CMvWzwe','BgLKzxi','ztOGBM8','yMfYlxq','rMD5y3O','ihWGBw8','zgTPDa','nJTWB2K','ihSGzMW','mcbOB28','zsXTB24','CZOGyxu','wKfzsxe','EdSGyM8','BeXgtfu','DhvUuNy','AguGCMu','nYWUmsK','ChG7igG','qMjfrNO','oIbJzw4','ANvTCfa','qNLjza','B3LiAMK','tg9JywW','oYbVCge','zNP6zwm','Aw5JBhu','z29KrgK','DhmGCgW','lcbPBNm','BMnL','ieTLzxa','nsWYntu','vKXwzfu','s0rlvhm','oIa5oxa','B2XPBMu','AwvSza','ihSGy28','zMXLEdS','ugHMyNm','y3KGB24','EMu6ide','mJu1lde','Dgv4Dee','rffxy1O','kdeUmsK','zM9UDa','oIa0ChG','BhrO','BgLJyxq','ihSGAgu','ChG7igi','B3zLCMW','zMLUza','AgvPz2G','tg9Hzgu','ienquW','DxDTAW','tLfIueO','B24UvgK','oIbYAwC','lJq1oYa','zw51ihi','ifTfwfa','Dg9Y','icnMzMy','mcWWlJG','C3bSyxK','ihbSywm','DhrPBMC','s25jyK0','ihWGz2e','vuLqDvu','CI51As4','ztOGmtC','ALvLwu4','B25JAge','Aw4TD2K','Ec1ZAge','yJPOB3y','igfUzca','C21HBgW','y2HdB2W','Bwf0y2G','BMLUzW','zM9YBxm','yY0XlJu','AwXSihK','ufmGDw4','igvYCG','DhK6ic4','zg93oIa','DgXPBMu','Bw92zvq','Dc1ZBgK','BIb0Agu','zw50tgK','DMvYlxy','DuPUzMO','Aw5Zzxq','zwfKEs4','B246igW','D2L0Aca','y2n1CMe','C1H4AhK','u2vMyMK','B3uU','B1PhDLu','rNbAt00','DgvYo3C','sxz6D1a','BwvZC2e','s2v5vW','oIbWB2K','idrWEca','EYbIywm','y2uGB3y','Bg9NBY0','zhHjA0y','v29UsxO','EhPjuvq','BdOGAw4','icbIB3G','AxnPyMW','zNbZ','DgvJDgK','i2zMnMi','C2vbBLe','sMjKvK0','BIbZAwC','oIa1mcu','BMf2','idiWmg0','s2v5uW','zsb0CMe','mJvWEdS','AgvSza','yMjzwgW','C2fMzu0','ig5VigG','ndGZnJq','B3G9iJa','igvUDgK','DxjZB3i','lNnRlwm','tuLtu0K','CYbnB3y','lwjHBNi','ltjWEdS','u0flvvi','ruPizgW','DdOGmZq','ign1CNm','Bw4TC2K','idi2ChG','sw5ZDge','Dc1ZAxO','Bgf0zwq','Bg9Hzca','CMvJDa','icaGica','oWOGica','DgvY','C2STyNq','DezeDM4','CMvSEsa','y29SCZO','rgXLDKW','lcbJywW','C3rLBMu','CM9Wlwy','ysGYndy','ltqTnY4','owqIihm','BMn0Aw8','DgG6idG','rhbfAhi','mty4sfflBxby','BNDbEee','D3jiCLK','zMLSBfq','zwn0Aw8','zxjZihq','zxG6ide','C2STC3C','Fdb8oxW','DMLLD0i','uLbir1G','z3jVDw4','DxmGywm','iJeUnsi','mdb2DZS','y3jVC3m','DgvZDa','ms4XlJa','oYbMAwW','s2v5ra','te9eueW','odiPoYa','BM9tChi','A2vizwe','B25JBgK','zwfKB3u','CZOGCMu','zgDLB2q','CIdIGjqG','DgnOoJO','uJOG','AY12ywW','u0fgrq','Axr5oIa','rKvKrhe','D29YAYa','wvjPvhC','tKCG4Ocuia','BMq6ihi','ig1HEsa','lc40nsK','u3rHDhu','zxjYB3i','B01yCwy','yMfJA2C','z2j6uMq','Dgv4Dem','zciVpJW','CYb3B24','cIaGica','EgrNBfe','ihn0CM8','zvrHA2u','y29UDgu','CfrXCfq','BMX5kq','mJSGC3q','Bw9fEha','mZmYnJG2uuHTq2fi','y2HtAxO','zw50kcm','B1PZsKu','Bgv4oIa','DMLYEeq','zwLUC3q','DgfNtMe','z3vbqwC','s2L5twe','kdaSmcW','yMXgzgG','ChG7iha','ktSGy3u','nJruD1Dgufm','Dgv4Dei','CMfUC2K','ywnPDhK','AhvTyIa','B3zLCMy','y29SB3i','Ag9VA04','CMDIysG','zxj5idi','z1H5vuu','CM0GlJq','BI13Awq','CJOGi2y','lM1Ulxa','uhfuqMC','lMP1Bxa','zcbJAg8','ywqGDg8','B3C6igK','ihjLBg8','CNq7igC','ihWGrvi','BNq6igm','AvrmANe','u2L6zq','s1neCxC','BMu7ige','rwXswfu','sw5MAw4','zxrL','DdOGmtu','qvzOyuW','u2fMzxq','ieaG','zxDUvgC','AxmGyNu','yMTPDc0','CM9Szq','Aw9F','q056Cfy','x19ZywS','BwLZyW','DgvTCZO','CYbpDMu','rfbLwwe','vvDnsYa','mtrWEdS','CY1Zzxi','zJmY','uNLOweO','B3nLihS','DhLSzq','tw9Kzsa','zMXLEc0','Bw4TAa','BNnSyxq','y2HLy2S','oIaZChG','C2zVCM0','AwrLihS','zenOAwW','mxWXnNW','u2vSzwm','rMTYwKK','yMLJlwi','y2vUDgu','zwf0CYa','Bw9NwKm','DdOGnJa','BvbOEMm','DMrzAhG','ysGYntu','yxrLlwm','C2v0','oNbVAw4','DMu7ihC','nJaWide','CIGYmNa','ic5TBI0','vvHuBNO','nMi5zci','EdSGywW','uMf0zq','CZOGmty','uIb2ms4','Awr0AdO','B1z5s0O','lxnSAwq','AwXLzdO','BwLKzgW','C2v0x3q','BMuUqxa','ideYChG','sgXYEvu','yM91BMq','CMLZAYa','z3nZrNq','AdOGmZq','ExfKuxa','igj1AwW','ndSGFqO','oYb3Awq','vhjfv1C','ELH4CLu','uNvUDgK','oI13zwi','wfvXrMi','uMLwzvy','yw5LBc4','C2f0Dxi','EI1PBMq','BI1SB2C','mtSGBwK','C2v0vhi','BNnPDgK','sen0wMi','tw9Xrvq','y29TyMe','A2uTD2K','z2jHB1y','s0nNwMu','B3rhzuq','DhLqy3q','DLPwvfu','BwvKicG','yxvSDa','mtjWEdS','C2f2zq','mZuSmJq','ywrKrxy','DxHPEeK','uuHwuMy','oYb0CMe','v01ligK','lxnHBNm','ig9YigS','FqOGica','BgLUzvq','rg9yuLq','D2fYBG','Bg93zxi','Aw50zxi','zxiGEYa','ldiZocW','Bvbrwu4','zKPyzxC','CgfNzsa','ru9tELm','BgrYzw4','DgvYoIa','y3jLBwu','AxvZoIa','AMjpugW','CKTvDfy','DhvYyxq','nMvLzJi','Bgrewe0','sNfhEuW','ywLYlG','m3WYFdi','q1HmD3C','zxjZy3i','zgr2rvi','rureBey','v0fttsa','ihn0AwW','AdOGnJi','AxrLBxm','lwLVxYO','qvPZCMC','D3bXveu','vKPQrxC','Aw1Lihm','uNjUq2C','rMLLBgq','CgfJAxq','wwLVDum','D2HHDNG','BMv2zxi','BMDL','nNb4oYa','tMXPB1y','Aw9FnZi','sLLnt3O','tgLZDa','rvzUCMG','rwXLBwu','ve1XA1m','BgfZDeu','zxi7igC','nM9lDNfWwG','ndySmJm','ys5RB3u','yNv0Dg8','A2vZig8','zxiTCMe','C2fRDxi','CMrLCJO','Be1VDgK','idqGnc4','DMfSDwu','DgLMEs0','uef4DKi','zs5bCha','A2v5zg8','qMDbDxi','l3jHCgK','CMrtqNy','Aw9UlLq','zw50rwW','zguSihq','y2vZlG','AgfPCG','tgjzvNu','v3rbEg4','nc00lJu','zKXYwg4','B2Pcr0O','phnTywW','AxmGAg8','iKLUDgu','ihSGyMe','zMjzsKm','q29TyMe','lNnRlw0','vuLID24','zMLLBgq','vwfIuhu','zvKOmtG','nxb4oYa','B2XVCJS','AwXS','sxL1CMS','yMvS','vvjZAKC','pc9ZBwe','DxjDigG','BcbKCMe','B246ig8','ywrK','AwWGC3a','zLj3s0O','uLDgBfC','zuDly20','qxbWBgK','zwv6zsa','oIaYmNa','CMfzwe0','mJu1ldi','DdOYnNa','iL0GEYa','BgfJzs0','r3jHDMK','zw4GDg8','zhjVCc0','DZOGAw4','oYbMB24','CMvHzhK','B3C6ida','v2vHCg8','zuvSzw0','igXLzNq','qunuAYa','y2L0EtO','shrsDMS','DxjDifu','BNqGAxq','nLjnuhHLsG','BMf0Dxi','AfTHCMK','ic5ZAY0','DMLZAwi','BwvsDw4','zwfKige','D2v6qKS','Bw4Ty2W','v2vItw8','oIa2nta','A2nkuuG','z2v0q28','BsbJzw4','ls1W','swyGCMu','mJKWmta3nwroyNHICG','ysblB3u','ChG7cIa','4Ocuig92zq','lxbHCMu','DgLZq1O','nsWUmdm','qNPWzfa','zvbSDwC','zvj1BM4','C2STC2W','CMvSB2e','CdOGmta','A3ndChm','lZ48l3m','DhHUD0u','ztSGD2K','s250yNq','CgvHDcG','ntaLktS','uLfSDha','zMnKvMe','vwHWz0m','CNfUBKK','mNb4oYa','nZTWB2K','zw0TDwK','tg1VvNu','sNvTCfq','nNb4idK','AKfXs0u','EdSGyMe','Eu9yvva','z1fZswS','rgHhtvy','zwn0oIa','DMfS','twLZyW','zwfSDgG','nsK7iha','zgvSzxq','zfHTq00','CgfKzgK','DMHwvNa','B2fKzwq','zuv4Ca','BNnWyxi','ChjLDMu','C2STAgK','lMLVig0','zgrPBMC','igzVBNq','BgLNBI0','mNb4ide','u3LRC2e','ywXSig8','oYbIywm','ztOGmtm','uMvZzxq','rgfTywC','CM9WywC','DgL0Bgu','uMvJB2K','z2v0sxq','sKHssvG','z29K','zxqGmca','ihSGCge','lwfWCgW','BMqGt0G','zsb7igy','zw50CW','zgzntLe','B25PBNa','tvfZCvu','DhPZuMy','CYbHBgW','DgfIihS','tKn1uK8'];_0x2df4=function(){return _0x1fa18d;};return _0x2df4();}
