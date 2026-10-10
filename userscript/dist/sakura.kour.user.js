// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.0.1
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
function _0x1047(_0x47f133,_0x46bbbd){_0x47f133=_0x47f133-(-0x2ce*0x7+-0x2d7*0xa+0x31d5);var _0x38a0dc=_0x4c48();var _0x7a3e57=_0x38a0dc[_0x47f133];if(_0x1047['CeekiP']===undefined){var _0x2cbb24=function(_0x3c07f0){var _0x3a2b69='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x356d5d='',_0x2b0ce1='';for(var _0x263daa=0x5a1*-0x4+0x183e+-0x11*0x1a,_0x1d3a24,_0x44723c,_0x3ac7be=-0x17e*0x16+0x14b1+0xc23;_0x44723c=_0x3c07f0['charAt'](_0x3ac7be++);~_0x44723c&&(_0x1d3a24=_0x263daa%(-0x114e+0xf*-0x22+-0x3*-0x670)?_0x1d3a24*(-0x22be*0x1+0x18ad+0xa51)+_0x44723c:_0x44723c,_0x263daa++%(0x7*-0x2f5+0x21ed+-0xd36))?_0x356d5d+=String['fromCharCode'](0x1*0x5ad+-0x36*-0xb2+-0x2*0x151d&_0x1d3a24>>(-(-0x6d8+-0xfa8+-0x56*-0x43)*_0x263daa&-0x1*0x31a+-0x3bb*0x1+-0x15f*-0x5)):0x2*0x52c+-0x142+-0x916){_0x44723c=_0x3a2b69['indexOf'](_0x44723c);}for(var _0x3bc69a=-0x142f+-0x33b*0x6+0x2791,_0x1e6588=_0x356d5d['length'];_0x3bc69a<_0x1e6588;_0x3bc69a++){_0x2b0ce1+='%'+('00'+_0x356d5d['charCodeAt'](_0x3bc69a)['toString'](0x1bfd+0x1*0x37d+0x1*-0x1f6a))['slice'](-(-0x1b7e+-0x17a5+0x3325));}return decodeURIComponent(_0x2b0ce1);};_0x1047['FKjFrz']=_0x2cbb24,_0x1047['TtNYPb']={},_0x1047['CeekiP']=!![];}var _0x15849f=_0x38a0dc[0xcde+-0x1421+-0x8f*-0xd],_0x31eda9=_0x47f133+_0x15849f,_0x195ef1=_0x1047['TtNYPb'][_0x31eda9];return!_0x195ef1?(_0x7a3e57=_0x1047['FKjFrz'](_0x7a3e57),_0x1047['TtNYPb'][_0x31eda9]=_0x7a3e57):_0x7a3e57=_0x195ef1,_0x7a3e57;}(function(_0x24fff5,_0x58e578){var _0x433137=_0x1047,_0xe7f8c2=_0x24fff5();while(!![]){try{var _0x5d56ed=parseInt(_0x433137(0x352))/(0x23cb+-0x20f9+-0x2d1*0x1)+parseInt(_0x433137(0x784))/(0x1e2c+-0x1f95+0xb*0x21)*(-parseInt(_0x433137(0x207))/(-0x86*-0x38+-0x24c9+0x77c))+-parseInt(_0x433137(0x458))/(0x18a4+-0x59*0x2+-0x6*0x3fd)*(-parseInt(_0x433137(0x21f))/(0x1506+0xa*0x133+-0x20ff))+parseInt(_0x433137(0x6a8))/(-0x1f46+-0x21b9+0x4105)+-parseInt(_0x433137(0x202))/(0x14bf+0x2224+-0x1*0x36dc)+-parseInt(_0x433137(0x6f0))/(-0x2d2*0x5+0x3*0x1c1+-0x1*-0x8df)*(parseInt(_0x433137(0x3ae))/(0x21fc*-0x1+-0x115*0x1+0x1*0x231a))+parseInt(_0x433137(0x59c))/(0xa*-0x2bd+-0x1*0xe9f+0x2a0b)*(parseInt(_0x433137(0x59b))/(0x1c1d+-0x5*0x640+0x1*0x32e));if(_0x5d56ed===_0x58e578)break;else _0xe7f8c2['push'](_0xe7f8c2['shift']());}catch(_0x486394){_0xe7f8c2['push'](_0xe7f8c2['shift']());}}}(_0x4c48,0x30*0x3cfb+-0x68cc*0xb+0x1e78f),((()=>{'use strict';var _0x5c2211=_0x1047,_0x45abbd={'rrdri':_0x5c2211(0x36d)+_0x5c2211(0x6ee)+'r.v1','MaVqV':function(_0x3f7ace,_0x443f24){return _0x3f7ace!==_0x443f24;},'GLvTT':function(_0x3973c7,_0x2ba9ca){return _0x3973c7!==_0x2ba9ca;},'lfaGw':function(_0x117e9a,_0x25862e,_0x5c8e9b,_0x59c114){return _0x117e9a(_0x25862e,_0x5c8e9b,_0x59c114);},'ZuoPD':function(_0x17040d,_0x45db45){return _0x17040d*_0x45db45;},'eSabB':'YmvbI','SlJiM':_0x5c2211(0x429)+'ers','Uqeip':_0x5c2211(0x4ed),'vLhMg':function(_0x2d3ba3,_0x5332bb,_0x3c68a7,_0x424f40,_0x4613db){return _0x2d3ba3(_0x5332bb,_0x3c68a7,_0x424f40,_0x4613db);},'uRBrN':function(_0x2fa1ae,_0x2f378e){return _0x2fa1ae===_0x2f378e;},'sxXVE':_0x5c2211(0x24c)+'d','wtkJU':function(_0xfc2437,_0x2bcc12){return _0xfc2437(_0x2bcc12);},'ZzEBb':function(_0x537bb7,_0x509321){return _0x537bb7&&_0x509321;},'QVNKP':'rdWIA','YLtFP':function(_0x24669e,_0x2f3ce6){return _0x24669e!==_0x2f3ce6;},'uBlcd':function(_0xa8294b,_0x69e6ea){return _0xa8294b!==_0x69e6ea;},'tkTaF':_0x5c2211(0x619),'EWkLQ':function(_0x5e16d9,_0x2db7ab){return _0x5e16d9!==_0x2db7ab;},'cYUwK':function(_0x3576ac,_0x582a16,_0x2e3777,_0x436d98,_0x3c88f9){return _0x3576ac(_0x582a16,_0x2e3777,_0x436d98,_0x3c88f9);},'kALFB':'QWuyC','fraJr':function(_0x5be833,_0x15898b){return _0x5be833!==_0x15898b;},'vphXw':_0x5c2211(0x4a1),'iWnvU':'igsFO','aCqnQ':function(_0x5de40c,_0xe68f17,_0x5a8f10,_0xe2b320,_0x272032){return _0x5de40c(_0xe68f17,_0x5a8f10,_0xe2b320,_0x272032);},'fIQSI':function(_0x38b84f,_0x5f1586){return _0x38b84f===_0x5f1586;},'hPTVd':_0x5c2211(0x506),'smXwb':function(_0x2aedea,_0x43af37){return _0x2aedea+_0x43af37;},'muXbs':'mouse','RNEAq':function(_0x4e974a){return _0x4e974a();},'GeVix':function(_0x3ea9e4,_0x333877){return _0x3ea9e4===_0x333877;},'vrXzc':_0x5c2211(0x6c7),'FIsiP':function(_0x2e9526,_0x3966f){return _0x2e9526===_0x3966f;},'Aoyid':function(_0x20dba9,_0x334f0a){return _0x20dba9!==_0x334f0a;},'FWWWb':'mmCHZ','tmFZk':_0x5c2211(0x562),'LvCnh':function(_0x848761,_0x3b4717){return _0x848761-_0x3b4717;},'fvSbS':_0x5c2211(0x30d)+'ete','bflDu':function(_0x3fbd4f){return _0x3fbd4f();},'Sbcwt':_0x5c2211(0x277)+_0x5c2211(0x727)+'Loade'+'d','PfByr':_0x5c2211(0x1ec),'jxLEV':_0x5c2211(0x43d)+'io_30'+_0x5c2211(0x70b)+'-pare'+'nt','bNMCK':'fulls'+_0x5c2211(0x415)+'-banr'+'s','fSsUm':_0x5c2211(0x42a),'fdAWs':'yWcVh','AeJjt':'SAKUR'+_0x5c2211(0x345)+_0x5c2211(0x47f)+'1','Ugalx':_0x5c2211(0x216)+'9d','UOGqI':function(_0x36b7f6,_0x51a756){return _0x36b7f6(_0x51a756);},'trxDE':function(_0x4acab8,_0x5d7902,_0x144153){return _0x4acab8(_0x5d7902,_0x144153);},'MykSz':_0x5c2211(0x700)+_0x5c2211(0x4d2)+'r\x20gam'+'e…','rBMAl':_0x5c2211(0x528)+'255,1'+_0x5c2211(0x755)+'0,0.6'+')','oLjoS':function(_0x1f5088,_0xc7ba45){return _0x1f5088+_0xc7ba45;},'ZKRAI':function(_0x1b8b5f,_0x4f8baf){return _0x1b8b5f!==_0x4f8baf;},'PIpgw':'sk-ca'+'rd','uRnMV':_0x5c2211(0x521),'wHGiZ':_0x5c2211(0x78d)+_0x5c2211(0x647)+_0x5c2211(0x525),'lXImy':_0x5c2211(0x4d6),'fVpXR':'sk-mb'+_0x5c2211(0x402),'XKIQu':'sk-md'+'esc','MIopW':function(_0x42b1f0,_0x1cf521,_0x3fc748,_0xb591ac,_0x2d212f){return _0x42b1f0(_0x1cf521,_0x3fc748,_0xb591ac,_0x2d212f);},'RUlng':_0x5c2211(0x6e0),'epLKP':function(_0x2f7bb0,_0x38027a){return _0x2f7bb0===_0x38027a;},'INLIq':function(_0xcdfb35){return _0xcdfb35();},'LzGyp':'NenXh','LPHLI':_0x5c2211(0x70a),'XaoOT':function(_0x3c7479,_0xd0f8b,_0x301aa8,_0x3e5480,_0x555128,_0x24dee3){return _0x3c7479(_0xd0f8b,_0x301aa8,_0x3e5480,_0x555128,_0x24dee3);},'kcCXB':_0x5c2211(0x4a5)+'s\x20OHe'+_0x5c2211(0x3b0)+_0x5c2211(0x30b)+_0x5c2211(0x5ca)+_0x5c2211(0x498)+_0x5c2211(0x557)+'nd\x20OH'+'ealth'+_0x5c2211(0x3f6)+'lDie,'+'\x20so\x20n'+_0x5c2211(0x720)+_0x5c2211(0x426)+'\x20hurt'+'\x20or\x20k'+'ill\x20y'+'ou.','FtnKz':function(_0x29b8ca,_0x35fa0d,_0x21ce18,_0x4ee75d,_0x58231e,_0x29e46a){return _0x29b8ca(_0x35fa0d,_0x21ce18,_0x4ee75d,_0x58231e,_0x29e46a);},'LmHyp':_0x5c2211(0x6f2)+'s\x20spr'+_0x5c2211(0x798)+'nd\x20ma'+_0x5c2211(0x539)+'ccura'+'cy\x20on'+_0x5c2211(0x584)+_0x5c2211(0x3e8)+_0x5c2211(0x515)+'ery\x202'+'00ms.','RGWLc':function(_0x3598bc,_0x20cd68,_0x2a2ced,_0x4d5164,_0x1fa5ba,_0x3faf98){return _0x3598bc(_0x20cd68,_0x2a2ced,_0x4d5164,_0x1fa5ba,_0x3faf98);},'OAVPm':_0x5c2211(0x3ff)+_0x5c2211(0x6d3)+_0x5c2211(0x4e4)+']','WEqbM':'Scale'+_0x5c2211(0x270)+_0x5c2211(0x234)+_0x5c2211(0x532)+_0x5c2211(0x793)+_0x5c2211(0x4a8)+_0x5c2211(0x58c)+'0%.\x20S'+_0x5c2211(0x33f)+'\x20may\x20'+_0x5c2211(0x363)+_0x5c2211(0x792)+_0x5c2211(0x261)+'s.','hKXJN':function(_0x5e4a6b,_0x175809,_0x207acb,_0xd65a9a,_0x4fc129,_0x127712){return _0x5e4a6b(_0x175809,_0x207acb,_0xd65a9a,_0x4fc129,_0x127712);},'pOtDi':_0x5c2211(0x50d)+_0x5c2211(0x6c4)+'mmo\x20['+_0x5c2211(0x349),'WzCdC':'If\x20re'+_0x5c2211(0x520)+'\x20stil'+_0x5c2211(0x522)+_0x5c2211(0x655)+'he\x20de'+'creme'+_0x5c2211(0x504)+'ppens'+'\x20else'+_0x5c2211(0x588)+'.','bTFTn':'Speed','SINaq':function(_0x5f2a25,_0x4068ea,_0x55a786,_0x3b17e5){return _0x5f2a25(_0x4068ea,_0x55a786,_0x3b17e5);},'FsHjC':'Speed'+'\x20%','KvTqr':_0x5c2211(0x60a)+_0x5c2211(0x71c)+_0x5c2211(0x547),'satpC':_0x5c2211(0x418)+_0x5c2211(0x4db)+_0x5c2211(0x2c7)+_0x5c2211(0x73c)+_0x5c2211(0x667)+_0x5c2211(0x3bf)+_0x5c2211(0x20b)+_0x5c2211(0x23a)+'ty\x20va'+_0x5c2211(0x77d),'BMWOL':function(_0x12e461,_0x12e860){return _0x12e461!==_0x12e860;},'pCCDf':function(_0x4491c6,_0x500fab,_0x55f934,_0x573f60,_0x1e7b86,_0x33928d){return _0x4491c6(_0x500fab,_0x55f934,_0x573f60,_0x1e7b86,_0x33928d);},'kYQUL':'Gravi'+_0x5c2211(0x707),'cpkBB':'lower'+_0x5c2211(0x714)+'oaty','BbkLH':_0x5c2211(0x4bb)+'-hop','ekHtx':'Zeroe'+'s\x20Mov'+_0x5c2211(0x2c7)+'.last'+_0x5c2211(0x641)+'ime\x20s'+_0x5c2211(0x60f)+'\x20jump'+_0x5c2211(0x32e)+_0x5c2211(0x3c0)+'never'+'\x20appl'+_0x5c2211(0x44d),'SqZOe':_0x5c2211(0x3f7)+_0x5c2211(0x5ae)+'/RMB\x20'+'+\x20Spa'+_0x5c2211(0x34a)+_0x5c2211(0x2ef)+'.','kuiYF':function(_0x34c491,_0x3ec886,_0x3be0bd,_0x545f35){return _0x34c491(_0x3ec886,_0x3be0bd,_0x545f35);},'gVnUJ':_0x5c2211(0x3a3)+'m\x20lef'+'t','NtneB':function(_0x47895b,_0x417ec7,_0x396d88,_0x410c0d,_0x43406f,_0x223412){return _0x47895b(_0x417ec7,_0x396d88,_0x410c0d,_0x43406f,_0x223412);},'pNtQq':_0x5c2211(0x2b1)+'m\x20cen'+'ter\x20c'+_0x5c2211(0x63c)+_0x5c2211(0x231),'hGxSE':'Size','GgiHw':_0x5c2211(0x26a)+_0x5c2211(0x510)+'y.','Wfngn':function(_0x1628e5,_0x927c85,_0x31b0c2,_0xc0bc56){return _0x1628e5(_0x927c85,_0x31b0c2,_0xc0bc56);},'KNROc':function(_0x21899d,_0x48456e,_0x36924b,_0x904e9d,_0x1ce66a,_0x2feb6a){return _0x21899d(_0x48456e,_0x36924b,_0x904e9d,_0x1ce66a,_0x2feb6a);},'bakqA':'Skips'+_0x5c2211(0x3c6)+_0x5c2211(0x24f)+'rely\x20'+'—\x20no\x20'+'WASM\x20'+_0x5c2211(0x483)+'.\x20Use'+'\x20this'+_0x5c2211(0x362)+'atche'+_0x5c2211(0x327)+_0x5c2211(0x372)+_0x5c2211(0x768),'jRIAC':'Appli'+'es\x20on'+_0x5c2211(0x50f)+'ad.\x20I'+_0x5c2211(0x5a0)+'ches\x20'+'load\x20'+'in\x20sa'+_0x5c2211(0x54a)+_0x5c2211(0x3c8)+_0x5c2211(0x1f8)+_0x5c2211(0x22e)+_0x5c2211(0x3f1)+_0x5c2211(0x675)+'lated'+'\x20—\x20te'+'ll\x20me'+'\x20the\x20'+_0x5c2211(0x483)+_0x5c2211(0x4cd)+_0x5c2211(0x43a)+'ount.','traHN':_0x5c2211(0x481)+_0x5c2211(0x1d3)+'switc'+'hes','uAqYb':_0x5c2211(0x442)+_0x5c2211(0x299)+'ealth'+_0x5c2211(0x3f6)+_0x5c2211(0x1f4),'gUcgV':function(_0xbf2334,_0x1b4b66,_0x5e1594){return _0xbf2334(_0x1b4b66,_0x5e1594);},'ALVnW':_0x5c2211(0x38f)+_0x5c2211(0x288)+_0x5c2211(0x67c)+_0x5c2211(0x725)+_0x5c2211(0x215)+'\x20IsGr'+'ounde'+'d)','hDHFp':function(_0x4fc413,_0xa8eea2,_0x519aed){return _0x4fc413(_0xa8eea2,_0x519aed);},'SCmhE':function(_0xb0d277,_0x3cebce,_0xdc6e10,_0x1d9f86,_0x34ec3a,_0x5f5c62){return _0xb0d277(_0x3cebce,_0xdc6e10,_0x1d9f86,_0x34ec3a,_0x5f5c62);},'kftWF':_0x5c2211(0x5cb)+_0x5c2211(0x781)+_0x5c2211(0x1dc)+'d\x20gre'+_0x5c2211(0x70c)+_0x5c2211(0x635)+_0x5c2211(0x568)+'risk\x20'+_0x5c2211(0x68c)+'with\x20'+_0x5c2211(0x6ce)+'on.','kOeWH':'Dange'+'r','UiNGe':'Reset','KBYrN':_0x5c2211(0x404)+'|5|1|'+'3','HZedb':'shown','JhhQB':_0x5c2211(0x405)+'n','nviXh':_0x5c2211(0x74e),'NNrRv':_0x5c2211(0x3bc),'EnJEY':function(_0x16ba68,_0x295cb7){return _0x16ba68*_0x295cb7;},'anBnK':function(_0x46e76d,_0x95c8f8){return _0x46e76d-_0x95c8f8;},'HEtee':function(_0x596f50,_0x3d426b){return _0x596f50+_0x3d426b;},'kAoCt':function(_0x380be3,_0x416c83,_0x5f5478,_0x4ae6e2,_0xa94558,_0x2781ed,_0x35ab22){return _0x380be3(_0x416c83,_0x5f5478,_0x4ae6e2,_0xa94558,_0x2781ed,_0x35ab22);},'qwqwE':'KeyD','oWhyx':function(_0x40abe8,_0x5dc26d){return _0x40abe8(_0x5dc26d);},'YhxVP':_0x5c2211(0x20f),'qvJVP':function(_0x1f9808,_0x45bfbe,_0x39f460,_0x101e66,_0x37bfd6,_0x44ecb4,_0x47a8e5){return _0x1f9808(_0x45bfbe,_0x39f460,_0x101e66,_0x37bfd6,_0x44ecb4,_0x47a8e5);},'KtrXg':_0x5c2211(0x5ad),'qDwGL':function(_0x3426ce,_0x1a5d57){return _0x3426ce(_0x1a5d57);},'NKEoj':'BlDxF','JVJoT':'rgba('+_0x5c2211(0x741)+'35,24'+'0,0.5'+'5)','QgiJS':_0x5c2211(0x76e)+'s','ozLcQ':'\x20|\x20ga'+_0x5c2211(0x2ac),'KkyHv':_0x5c2211(0x376),'trldF':'iThCg','lfHYh':function(_0x18b453){return _0x18b453();},'vaZxr':'TrQnf','Rhxxr':_0x5c2211(0x1ef)+_0x5c2211(0x57e)+_0x5c2211(0x788)+_0x5c2211(0x603)+_0x5c2211(0x6fe),'sPLbN':_0x5c2211(0x573)+'ng','MSkRc':function(_0x57ab7a,_0x2e4e4f){return _0x57ab7a+_0x2e4e4f;},'SrkdC':_0x5c2211(0x310)+_0x5c2211(0x470)+'r\x20—\x20','mkjri':'nav','RTxxj':_0x5c2211(0x427),'prrkv':_0x5c2211(0x683)+'trike'+'.io\x20m'+_0x5c2211(0x718),'ccLrr':'canva'+'s','jTcIc':_0x5c2211(0x62b)+'ion:f'+_0x5c2211(0x322)+_0x5c2211(0x5f2)+':0;z-'+'index'+_0x5c2211(0x766)+'48364'+_0x5c2211(0x565)+_0x5c2211(0x5a1)+_0x5c2211(0x791)+_0x5c2211(0x5e3)+'e;','JEiFk':_0x5c2211(0x257),'woaMN':'Misc','UIkct':_0x5c2211(0x62b)+_0x5c2211(0x4f7)+_0x5c2211(0x322)+_0x5c2211(0x3ab)+_0x5c2211(0x5f1)+_0x5c2211(0x549)+_0x5c2211(0x731)+_0x5c2211(0x3d2)+_0x5c2211(0x26c)+_0x5c2211(0x275)+'646;c'+_0x5c2211(0x4ad)+':poin'+_0x5c2211(0x338)+_0x5c2211(0x590)+_0x5c2211(0x782)+_0x5c2211(0x3b9)+'t:26p'+_0x5c2211(0x70d)+_0x5c2211(0x348)+_0x5c2211(0x437)+'ransi'+_0x5c2211(0x2cb)+'opaci'+_0x5c2211(0x226)+'2s;po'+_0x5c2211(0x3eb)+_0x5c2211(0x5ce)+'ts:au'+'to;fi'+'lter:'+'drop-'+'shado'+'w(0\x200'+_0x5c2211(0x475)+_0x5c2211(0x528)+_0x5c2211(0x697)+_0x5c2211(0x688)+_0x5c2211(0x66a)+'))','XSWVF':_0x5c2211(0x63f)+'viewB'+_0x5c2211(0x4b8)+'\x200\x2024'+_0x5c2211(0x5d7)+'<path'+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x5c2211(0x283)+_0x5c2211(0x577)+'-4-7.'+_0x5c2211(0x6a1)+'.5\x201.'+_0x5c2211(0x341)+'\x204-4.'+_0x5c2211(0x30a)+_0x5c2211(0x25b)+_0x5c2211(0x4be)+_0x5c2211(0x413)+'5-4\x207'+_0x5c2211(0x2e9)+_0x5c2211(0x5b7)+'\x22none'+'\x22\x20str'+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x5c2211(0x6b6)+'-widt'+'h=\x222\x22'+_0x5c2211(0x663)+_0x5c2211(0x592)+'necap'+_0x5c2211(0x3df)+_0x5c2211(0x40b)+_0x5c2211(0x6b6)+_0x5c2211(0x2cf)+'join='+_0x5c2211(0x5a3)+_0x5c2211(0x360)+'circl'+'e\x20cx='+_0x5c2211(0x48e)+_0x5c2211(0x451)+_0x5c2211(0x382)+_0x5c2211(0x77c)+'\x20fill'+_0x5c2211(0x67b)+'6b9d\x22'+_0x5c2211(0x6a6)+_0x5c2211(0x2e8),'rduzJ':_0x5c2211(0x39b)+'c6','DDQmB':'error','lALxC':_0x5c2211(0x310)+'aKour','WXnGb':'1.1.0','QfxHV':_0x5c2211(0x49f)+'th','rceXz':function(_0x3468b6,_0x36a59f,_0x46fde3,_0x3a761a,_0x40fce7,_0x55ed5f,_0x5e40bf,_0x4e497a){return _0x3468b6(_0x36a59f,_0x46fde3,_0x3a761a,_0x40fce7,_0x55ed5f,_0x5e40bf,_0x4e497a);},'TbXZN':'godDi'+'e','NazSd':'Local'+_0x5c2211(0x63a),'vimFQ':_0x5c2211(0x4c8),'KcLhH':'capSh'+_0x5c2211(0x400),'QWxEe':'capMo'+'ve','HxOTX':'dlTFi'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x5c2211(0x69e)](location['hostn'+_0x5c2211(0x55b)]||''))return;if(window[_0x5c2211(0x54b)+_0x5c2211(0x43e)+_0x5c2211(0x4dc)])return;window[_0x5c2211(0x54b)+'URA_K'+'OUR__']=!![];var _0x46f68c=_0x45abbd['Ugalx'],_0x5e3c98=_0x45abbd['rduzJ'],_0x432b56={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x45abbd[_0x5c2211(0x318)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x3eb972={..._0x432b56};try{Object['assig'+'n'](_0x3eb972,JSON[_0x5c2211(0x3bd)](localStorage[_0x5c2211(0x51a)+'em'](_0x45abbd[_0x5c2211(0x4fb)])||'{}'));}catch(_0x52511b){}function _0x333973(){var _0xe75de5=_0x5c2211;try{localStorage[_0xe75de5(0x537)+'em'](_0x45abbd['rrdri'],JSON[_0xe75de5(0x559)+'gify'](_0x3eb972));}catch(_0x431852){}}var _0xdf5aa={'uwmk':!!window[_0x5c2211(0x4eb)+'WebMo'+_0x5c2211(0x4e0)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x3eb972[_0x5c2211(0x713)+'ode'],'lastError':''};try{window[_0x5c2211(0x64e)+'entLi'+'stene'+'r'](_0x45abbd[_0x5c2211(0x2d8)],_0x221db0=>{var _0x1dbf8b=_0x5c2211;try{if(_0x1dbf8b(0x2f7)===_0x1dbf8b(0x595))_0x46d2f6[_0x1dbf8b(0x45a)+_0x1dbf8b(0x78b)]=_0x59a9cc,_0x188b45();else{var _0x4e31e6=_0x221db0&&(_0x221db0[_0x1dbf8b(0x5c7)+'ge']||_0x221db0['error']&&_0x221db0[_0x1dbf8b(0x200)]['messa'+'ge'])||'unkno'+'wn';if(_0x221db0&&_0x221db0['filen'+_0x1dbf8b(0x55b)])_0x4e31e6+='\x20@\x20'+String(_0x221db0['filen'+_0x1dbf8b(0x55b)])[_0x1dbf8b(0x5b3)]('/')[_0x1dbf8b(0x694)]()+':'+(_0x221db0[_0x1dbf8b(0x2c6)+'o']||'?');_0xdf5aa[_0x1dbf8b(0x661)+_0x1dbf8b(0x28a)]=String(_0x4e31e6)[_0x1dbf8b(0x2b5)](0x1*0x43e+-0x1*-0x22c7+-0x2705,-0x2696+-0x1fea+0x4720);}}catch(_0x48ed9d){}});}catch(_0x58c917){}var _0x30fdd6=null,_0x3d63ab=null,_0x457063={},_0xb06ebe=[],_0xc66a01=[],_0xde7d54=new Map();function _0x70633(_0x2d7f73,_0x127ea7){var _0x892a84=_0x5c2211;if(!_0x127ea7||_0x2d7f73['inclu'+_0x892a84(0x51b)](_0x127ea7)||_0x2d7f73['lengt'+'h']>-0x19*-0x151+-0x2475+-0x6*-0xa2)return;_0x2d7f73[_0x892a84(0x2bb)](_0x127ea7);}function _0xb31cbc(_0x2b8e1d,_0x67bf06,_0x145be8,_0x2b33d6){var _0xfb8832=_0x5c2211,_0x2bbe36=0xdbb+-0x2*0x123c+0x16bd;try{_0x2bbe36=_0x67bf06&&_0x67bf06['val']?_0x67bf06[_0xfb8832(0x357)]():0x1ff0+-0x293*-0xe+-0x9a*0x71;}catch(_0x4c3c30){}if(!_0x2bbe36)return;_0x70633(_0x2b8e1d,_0x2bbe36),_0x145be8[_0x2b33d6]=_0x2b8e1d[_0xfb8832(0x5f8)+'h'];if(_0x2b33d6===_0xfb8832(0x34b)+_0xfb8832(0x46b)&&_0x2b8e1d[_0xfb8832(0x5f8)+'h']){var _0x38fd9e=_0x457063[_0xfb8832(0x305)+'ve'];if(_0x38fd9e)try{_0x38fd9e[_0xfb8832(0x71a)+'ed']=![];}catch(_0x393de1){}}}function _0x1e2da6(_0x14cab5,_0x31519d,_0x4ea2c0){var _0x326346=_0x5c2211,_0x360e70=_0xde7d54['get'](_0x14cab5);!_0x360e70&&(_0x45abbd[_0x326346(0x2a6)](_0x326346(0x623),_0x326346(0x648))?(_0x360e70=new Map(),_0xde7d54[_0x326346(0x2fe)](_0x14cab5,_0x360e70)):(_0x275d14['speed'+'Pct']=_0x460ef1,_0x25f765()));if(!_0x360e70[_0x326346(0x3ec)](_0x31519d))try{var _0x378044=new _0x30fdd6(_0x14cab5)[_0x326346(0x2b4)+'ield'](_0x31519d,_0x4ea2c0);_0x360e70['set'](_0x31519d,_0x45abbd[_0x326346(0x5f9)](_0x378044,undefined)?_0x378044['val']():null);}catch(_0x31f8eb){_0x360e70['set'](_0x31519d,null);}return _0x360e70['get'](_0x31519d);}function _0x1eb93e(_0x384ef9,_0x42e637,_0x24bfcf,_0x15cdf1){var _0x21393a=_0x5c2211;try{'UySNp'==='UySNp'?new _0x30fdd6(_0x384ef9)[_0x21393a(0x2f2)+_0x21393a(0x5b2)](_0x42e637,_0x24bfcf,_0x15cdf1):_0x24a13f['setIt'+'em'](_0x21393a(0x36d)+_0x21393a(0x6ee)+'r.v1',_0x1c0b6c['strin'+'gify'](_0x166cb1));}catch(_0x196ad1){}}function _0x317092(_0xa57f47,_0x58d749){var _0x4bf217=_0x5c2211;try{var _0x46324a=new _0x30fdd6(_0xa57f47)[_0x4bf217(0x2b4)+_0x4bf217(0x4aa)](_0x58d749,_0x4bf217(0x484));return _0x46324a?_0x46324a[_0x4bf217(0x357)]():0x3be+-0x1*0x2c8+-0xf6;}catch(_0x17bb99){return-0x1ad0+-0xdb8+-0x2*-0x1444;}}function _0x306be2(_0x47af0c,_0x41eb42,_0x5507de,_0x626bd6){var _0xe86e5f=_0x5c2211,_0x54934c=_0x45abbd['lfaGw'](_0x1e2da6,_0x47af0c,_0x41eb42,_0x5507de);if(_0x54934c!=null)_0x1eb93e(_0x47af0c,_0x41eb42,_0x5507de,_0x45abbd[_0xe86e5f(0x513)](_0x54934c,_0x626bd6));}function _0x1d3e22(_0x1774ba,_0x1f2edf,_0x359722,_0x535ec7,_0x2a8a4d,_0x227998,_0x30fdc0){var _0xf75d37=_0x5c2211;if('JKVJD'!=='LzUde')try{var _0x1aa12f=_0x3d63ab[_0xf75d37(0x4d4)+'refix']({'typeName':_0x1f2edf,'methodName':_0x359722,'params':_0x535ec7,'returnType':_0x2a8a4d},_0x227998);return _0x1aa12f[_0xf75d37(0x71a)+'ed']=_0x30fdc0!==![],_0x457063[_0x1774ba]=_0x1aa12f,_0xdf5aa[_0xf75d37(0x483)+'Total']++,_0x1aa12f;}catch(_0x5f4a72){return console['warn'](_0xf75d37(0x290)+_0xf75d37(0x57a)+_0xf75d37(0x6d1)+_0xf75d37(0x447)+_0xf75d37(0x1ee)+_0xf75d37(0x31e),_0x1774ba,_0x5f4a72&&_0x5f4a72['messa'+'ge']),null;}else _0xab5185['appen'+'dChil'+'d'](_0x56258b);}function _0x3fac71(_0x197ec0,_0x49e016,_0x5692cb,_0x5b3dbd,_0x128245,_0x584fd9,_0x472e45){var _0xad8858=_0x5c2211;try{if(_0xad8858(0x60e)!==_0x45abbd['eSabB']){var _0x4316f2=_0x3d63ab[_0xad8858(0x4d4)+_0xad8858(0x763)+'x']({'typeName':_0x49e016,'methodName':_0x5692cb,'params':_0x5b3dbd,'returnType':_0x128245},_0x584fd9);return _0x4316f2['enabl'+'ed']=_0x472e45!==![],_0x457063[_0x197ec0]=_0x4316f2,_0xdf5aa[_0xad8858(0x483)+_0xad8858(0x47e)]++,_0x4316f2;}else _0x19b3c0[_0xad8858(0x358)+'le']=_0x437966,_0xd91af4();}catch(_0x1d2405){return console[_0xad8858(0x61a)]('[saku'+'ra-ko'+_0xad8858(0x6d1)+_0xad8858(0x447)+_0xad8858(0x1ee)+_0xad8858(0x31e),_0x197ec0,_0x1d2405&&_0x1d2405['messa'+'ge']),null;}}var _0x1601cd=()=>![];try{if(window[_0x5c2211(0x4eb)+'WebMo'+_0x5c2211(0x4e0)]&&!_0x3eb972['safeM'+_0x5c2211(0x73e)]){_0x30fdd6=window['Unity'+_0x5c2211(0x27d)+_0x5c2211(0x4e0)]['Value'+'Wrapp'+'er'],_0x3d63ab=window['Unity'+'WebMo'+'dkit'][_0x5c2211(0x243)+'me']['creat'+_0x5c2211(0x502)+'in']({'name':_0x45abbd[_0x5c2211(0x732)],'version':_0x45abbd[_0x5c2211(0x6b0)],'referencedAssemblies':[_0x5c2211(0x74f)+_0x5c2211(0x566)+_0x5c2211(0x2c8)+_0x5c2211(0x583)]});if(_0x3eb972[_0x5c2211(0x45a)+'od'])_0x1d3e22('god',_0x45abbd[_0x5c2211(0x5f6)],_0x5c2211(0x30b)+_0x5c2211(0x5ca)+'keHea'+'lth',['i32',_0x5c2211(0x4c8)],undefined,_0x1601cd,!!_0x3eb972[_0x5c2211(0x44c)]);if(_0x3eb972[_0x5c2211(0x45a)+'odDie'])_0x45abbd[_0x5c2211(0x22d)](_0x1d3e22,_0x45abbd[_0x5c2211(0x68a)],_0x45abbd[_0x5c2211(0x5f6)],_0x45abbd['NazSd'],[_0x45abbd['vimFQ'],_0x5c2211(0x4c8),_0x45abbd[_0x5c2211(0x2a1)],_0x5c2211(0x4c8),'i32'],undefined,_0x1601cd,!!_0x3eb972[_0x5c2211(0x44c)]);if(_0x3eb972[_0x5c2211(0x1e5)+_0x5c2211(0x5e9)+'il'])_0x1d3e22('noRec'+_0x5c2211(0x6e9),_0x5c2211(0x68b)+'nPlat'+_0x5c2211(0x3ba)+'.Over'+_0x5c2211(0x724)+'Recoi'+'lMoti'+'on','Tick',['i32'],undefined,_0x1601cd,!!_0x3eb972[_0x5c2211(0x47a)+_0x5c2211(0x6e9)]);if(_0x3eb972[_0x5c2211(0x5d0)+_0x5c2211(0x5fb)+'e'])_0x3fac71(_0x45abbd[_0x5c2211(0x62f)],'OShoo'+'ter','SetGa'+_0x5c2211(0x660)+'ning',['i32',_0x45abbd[_0x5c2211(0x2a1)]],undefined,(_0x5bed8a,_0x584218)=>{var _0xd483d4=_0x5c2211;_0x45abbd[_0xd483d4(0x5f9)]('WErOL','WErOL')?_0x4507fe['delet'+'e'](_0x36c6a6[_0xd483d4(0x71e)]):_0xb31cbc(_0xc66a01,_0x584218,_0xdf5aa,_0x45abbd[_0xd483d4(0x1f5)]);},!![]);if(_0x3eb972[_0x5c2211(0x5d0)+_0x5c2211(0x5fb)+'e'])_0x3fac71(_0x45abbd[_0x5c2211(0x6db)],'Legio'+_0x5c2211(0x4b3)+_0x5c2211(0x3ba)+'.Over'+_0x5c2211(0x724)+_0x5c2211(0x78f)+'ent','IsGro'+'unded',['i32'],_0x45abbd[_0x5c2211(0x2a1)],(_0x4c9eec,_0x2968f2)=>{var _0x29d111=_0x5c2211;_0xb31cbc(_0xb06ebe,_0x2968f2,_0xdf5aa,_0x29d111(0x34b)+_0x29d111(0x46b));},!![]);}}catch(_0x12cc3d){_0x5c2211(0x708)===_0x45abbd[_0x5c2211(0x62c)]?(_0x8eefed(_0x1413f0,0x105+-0x22f2+-0x19*-0x15d,_0x45abbd[_0x5c2211(0x612)],_0x1814bd),_0x321a33(_0x314d99,-0x12e5+0x2f2*-0x7+0x27af*0x1,'f32',_0x4562a3),_0x45abbd[_0x5c2211(0x5a2)](_0x257207,_0x17827e,-0x350*0x1+0x257b*0x1+-0x1*0x21fb,_0x45abbd[_0x5c2211(0x612)],_0x508ea8),_0x3f4312(_0x3438ff,0x2*-0x9c1+0x151f*0x1+0x1*-0x169,_0x5c2211(0x4ed),_0x24bd83),_0x45abbd['vLhMg'](_0x4a6eee,_0x5627c4,0x3*0xa47+-0xdda+-0x269*0x7,_0x45abbd[_0x5c2211(0x612)],_0xc1a7b1),_0x290630(_0x52381e,0x4*-0x301+-0x5dd*0x2+0x82*0x2f,'f32',_0x25b5e2)):console[_0x5c2211(0x61a)]('[saku'+'ra-ko'+_0x5c2211(0x264)+'WMK\x20i'+'nit\x20f'+_0x5c2211(0x443)+':',_0x12cc3d&&_0x12cc3d[_0x5c2211(0x5c7)+'ge']);}function _0x4d42c8(_0x186ca7,_0x1dd440){var _0x17771c=_0x5c2211,_0x556c68=_0x457063[_0x186ca7];if(_0x556c68){if(_0x45abbd[_0x17771c(0x49b)](_0x17771c(0x76a),'LkZli'))try{_0x556c68[_0x17771c(0x71a)+'ed']=!!_0x1dd440;}catch(_0x24641d){}else return 0xc62+0x1*-0x1b4f+0xeed;}}setInterval(()=>{var _0x27f554=_0x5c2211,_0x15ccbf={'DVNHG':function(_0x45bc85,_0x257333){return _0x45bc85+_0x257333;},'rdujZ':function(_0xc04de5,_0x1ea4fb){return _0xc04de5+_0x1ea4fb;},'pQudP':_0x27f554(0x74d)+_0x27f554(0x2ac),'YNGBo':_0x45abbd['sxXVE'],'SqVCE':_0x27f554(0x445)+_0x27f554(0x74c)+'t\x20','cTgqd':_0x27f554(0x6e3),'AqQEe':_0x27f554(0x49a),'woTBk':'\x20|\x20ER'+_0x27f554(0x252),'IYIkP':_0x27f554(0x6cb)+_0x27f554(0x463)+'NG\x20-\x20'+'overl'+_0x27f554(0x1e7)+_0x27f554(0x332)+'einst'+_0x27f554(0x67a)+_0x27f554(0x516)+_0x27f554(0x42d)+_0x27f554(0x69d)};if(!_0x30fdd6||!window[_0x27f554(0x6c2)+_0x27f554(0x1cd)+'nce'])return;var _0x5ea829=(Number(_0x3eb972[_0x27f554(0x3a5)+'Pct'])||0x29c+-0x1078+-0x3*-0x4c0)/(0x274+-0x24ed+0x22dd),_0x6ccf3b=(_0x45abbd[_0x27f554(0x6a0)](Number,_0x3eb972[_0x27f554(0x6ac)+'ct'])||-0x1654*0x1+-0x7b5*0x5+-0x146b*-0x3)/(-0x5bb*0x3+0x685+0x10*0xb1),_0x5824dc=(Number(_0x3eb972['gravi'+'tyPct'])||-0x848*-0x2+-0x2ea+-0xd42)/(0x77*0x35+0xa61*-0x3+0x6e4),_0x52d05f=Math['max'](0x17*0x19b+0x1e3f+-0x432b,Number(_0x3eb972['damag'+_0x27f554(0x5ba)+'e'])||0x2472+-0x230+-0x21ac),_0x5a3b50=_0x5ea829!==-0x7*0x2f6+-0x21c3+-0x5d*-0x96||_0x45abbd['GLvTT'](_0x6ccf3b,-0xd9e+0x81f+0x580)||_0x5824dc!==-0x15b3+-0x1af6+0x30aa||_0x3eb972[_0x27f554(0x3c5)],_0x5e4dff=_0x3eb972[_0x27f554(0x21b)+'ead']||_0x3eb972[_0x27f554(0x5c2)+'eExp']||_0x3eb972[_0x27f554(0x48f)+_0x27f554(0x59d)]||_0x3eb972['rapid'+'Exp'];if(_0x45abbd['ZzEBb'](!_0x5a3b50,!_0x5e4dff))return;try{if('SXcxK'!==_0x45abbd[_0x27f554(0x666)])for(var _0x39733e=-0x40c+-0x24f2+0x28fe;_0x39733e<_0xb06ebe['lengt'+'h'];_0x39733e++){if('cvRGB'!==_0x27f554(0x230)){var _0x5ab60d=_0xb06ebe[_0x39733e];if(!_0x5ab60d)continue;_0x45abbd['YLtFP'](_0x5ea829,0x8*-0x493+-0x4*-0x7f+0x1*0x229d)&&(_0x45abbd['uBlcd'](_0x45abbd['tkTaF'],_0x27f554(0x52f))?(_0x306be2(_0x5ab60d,-0x4cb+0x1*0x44+0x1*0x4af,_0x27f554(0x4ed),_0x5ea829),_0x45abbd[_0x27f554(0x5a2)](_0x306be2,_0x5ab60d,-0xb*-0x30d+0x4*-0x7db+-0x1f7,_0x27f554(0x4ed),_0x5ea829),_0x306be2(_0x5ab60d,0x26ad+-0x6de+0x1f9f*-0x1,_0x27f554(0x4ed),_0x5ea829),_0x45abbd['vLhMg'](_0x306be2,_0x5ab60d,-0x1*0x1114+-0xb3+0x11fb*0x1,'f32',_0x5ea829),_0x306be2(_0x5ab60d,-0x3fd+-0x1c54+0x3*0xacf,_0x27f554(0x4ed),_0x5ea829),_0x306be2(_0x5ab60d,-0x16e4+0x1f6+-0xf5*-0x16,_0x27f554(0x4ed),_0x5ea829)):_0x15522f['textC'+_0x27f554(0x620)+'t']=_0x336ab0['safeM'+_0x27f554(0x73e)]?'SAFE\x20'+_0x27f554(0x6f5)+'-\x20ove'+'rlay\x20'+_0x27f554(0x448)+_0x27f554(0x77b)+_0x27f554(0x77f)+_0x27f554(0x2a7)+'ad\x20to'+'\x20exit'+')':_0x5c224f[_0x27f554(0x540)]?_0x15ccbf['DVNHG'](_0x15ccbf[_0x27f554(0x269)](_0x15ccbf[_0x27f554(0x269)](_0x15ccbf['DVNHG'](_0x27f554(0x6cb)+'bound'+'\x20',_0xb0e515[_0x27f554(0x483)+'Total']?_0x15ccbf[_0x27f554(0x40c)](_0x15ccbf[_0x27f554(0x40c)](_0x5086b9[_0x27f554(0x483)+'Ok'],'/')+_0x468872[_0x27f554(0x483)+_0x27f554(0x47e)],_0x27f554(0x76e)+'s'):_0x27f554(0x1ef)+_0x27f554(0x57e)+'med\x20('+_0x27f554(0x603)+_0x27f554(0x6fe))+_0x15ccbf['pQudP'],_0x4c9a88['gameL'+'oaded']?_0x15ccbf[_0x27f554(0x482)]:_0x27f554(0x573)+'ng')+(_0x27f554(0x74b)+'ooter'+'\x20'),_0x451b70['shoot'+'ers']?'held':'none'),_0x15ccbf['SqVCE'])+(_0x3f2d11[_0x27f554(0x34b)+_0x27f554(0x46b)]?_0x15ccbf[_0x27f554(0x2ab)]:_0x15ccbf[_0x27f554(0x509)])+(_0xb1c589[_0x27f554(0x661)+_0x27f554(0x28a)]?_0x15ccbf[_0x27f554(0x40c)](_0x15ccbf[_0x27f554(0x5a7)],_0xf8a93e['lastE'+_0x27f554(0x28a)]):''):_0x15ccbf[_0x27f554(0x274)]);if(_0x45abbd[_0x27f554(0x3d1)](_0x6ccf3b,0x1ff8+0x3d*0x95+0x8*-0x86f))_0x306be2(_0x5ab60d,0xd27+-0x2*0x92b+-0x7*-0xc9,_0x45abbd[_0x27f554(0x612)],_0x6ccf3b);_0x5824dc!==-0x107*0xe+0x2228+-0x13c5&&(_0x45abbd['cYUwK'](_0x306be2,_0x5ab60d,-0x41*-0x44+0x19*0x17e+0x1*-0x364a,_0x27f554(0x4ed),_0x5824dc),_0x306be2(_0x5ab60d,0xf8b*-0x1+-0xd1b+-0x9a6*-0x3,_0x27f554(0x4ed),_0x5824dc));if(_0x3eb972[_0x27f554(0x3c5)])_0x1eb93e(_0x5ab60d,-0x1*-0x12dd+0x1d3f+-0x2f80,_0x27f554(0x4ed),-(-0x1b43+-0x164f*0x1+0x3579));}else return _0x3b77fa['warn']('[saku'+'ra-ko'+'ur]\x20h'+_0x27f554(0x447)+_0x27f554(0x1ee)+'iled:',_0xdf5a17,_0x7ced7e&&_0x3906a1['messa'+'ge']),null;}else _0x3aef4d['set'](_0x2ca4fe,null);}catch(_0x280c91){}try{if(_0x45abbd[_0x27f554(0x4b4)]==='srZyu')_0x79f03c[_0x27f554(0x77a)+'n'](_0x48f1b3,_0x5ec8a7[_0x27f554(0x3bd)](_0xfeecb6[_0x27f554(0x51a)+'em'](_0x45abbd['rrdri'])||'{}'));else for(var _0x33020a=0x470*0x2+-0x77c+-0x164;_0x33020a<_0xc66a01['lengt'+'h'];_0x33020a++){if(_0x45abbd[_0x27f554(0x610)]('CPlmu',_0x45abbd[_0x27f554(0x749)])){var _0x411969=_0x317092(_0xc66a01[_0x33020a],-0x1f38+-0x26fd+0x466d);if(!_0x411969)continue;_0x3eb972[_0x27f554(0x5c2)+_0x27f554(0x4e9)]&&(_0x45abbd['vLhMg'](_0x1eb93e,_0x411969,-0x2*0xf4d+-0x3*-0xa21+0x1*0x83,'i32',_0x52d05f),_0x1eb93e(_0x411969,0x1a6c+-0x1*-0x22af+0x3cc7*-0x1,_0x27f554(0x4c8),_0x52d05f));_0x3eb972['noSpr'+_0x27f554(0x3f2)]&&('igsFO'===_0x45abbd['iWnvU']?(_0x1eb93e(_0x411969,0x80b+0xd95+0x1518*-0x1,_0x27f554(0x4ed),-0x187d+-0xd*-0x1ca+-0x15*-0xf),_0x45abbd['aCqnQ'](_0x1eb93e,_0x411969,0xcb1+-0xfb4*0x2+0x131f,_0x27f554(0x4ed),0xd*0x1ca+0x216e+-0x2b3*0x15)):(_0x422a02['shado'+_0x27f554(0x3fc)+'r']=_0x2fe6e2,_0x7d38c5[_0x27f554(0x20d)+_0x27f554(0x45e)]=-0xda7+-0x1*0x8c+0xe41,_0x4a1ab5['fill'](),_0x19a72f['shado'+_0x27f554(0x45e)]=-0x1ce*0x5+-0x1bbf+0x24c5));if(_0x3eb972[_0x27f554(0x48f)+'moExp'])_0x1eb93e(_0x411969,0x3e0+0x17*-0xb1+0x15*0x97,_0x27f554(0x4c8),0x2*-0x131a+-0x9*-0x29b+0x12a8);_0x3eb972['rapid'+_0x27f554(0x2b8)]&&(_0x45abbd[_0x27f554(0x39a)](_0x306be2,_0x411969,0x2054+-0x1f4b*-0x1+-0x3f13,_0x45abbd[_0x27f554(0x612)],0x125a+-0x1c3f+0x9e5+0.1),_0x1eb93e(_0x411969,-0x22d*0x1+-0x1309*-0x2+-0x2385,_0x27f554(0x4ed),0x218a+-0x212f+0x7*-0xd+0.1));}else try{_0x43b511['setIt'+'em'](_0x45abbd['rrdri'],_0x5b012f['strin'+_0x27f554(0x39d)](_0x2928a6));}catch(_0x56149c){}}}catch(_0x2ffc02){}},-0xf81+-0x1f*0x6d+0x2*0xebe),setInterval(()=>{var _0x36dd34=_0x5c2211,_0x24ffd4={'RSsKJ':function(_0x221850,_0x2f1d60){return _0x221850>_0x2f1d60;}};_0xdf5aa[_0x36dd34(0x3d0)+'oaded']=!!window['unity'+'Insta'+'nce'];try{if(_0x45abbd[_0x36dd34(0x40a)]('OEgvS','OEgvS')){var _0x101fa0=0x3*0xb20+-0x8*-0x122+0x308*-0xe;for(var _0x29d0f9 in _0x457063){if(_0x457063[_0x29d0f9]&&_0x457063[_0x29d0f9]['appli'+'ed'])_0x101fa0++;}_0xdf5aa['hooks'+'Ok']=_0x101fa0;}else{if(!_0x2546c0||_0x1f2624[_0x36dd34(0x5e7)+_0x36dd34(0x51b)](_0x41c0d8)||_0x24ffd4['RSsKJ'](_0x3de0fa['lengt'+'h'],-0x5*0x2+0x1*-0x17a8+0x17f2))return;_0x10788e[_0x36dd34(0x2bb)](_0x5ccc2f);}}catch(_0x3b2913){}},0x1*-0x14c3+-0x167b+-0x11*-0x2c6);var _0x1a3792=new Set(),_0x371df4={0x1:[],0x3:[]},_0x3be955=![];function _0x35e4b2(_0x14b625){var _0x3253fa=_0x5c2211;_0x1a3792[_0x3253fa(0x4b2)](_0x14b625[_0x3253fa(0x71e)]);}function _0x2872c6(_0x3169f2){var _0x4777fc=_0x5c2211;_0x1a3792[_0x4777fc(0x452)+'e'](_0x3169f2[_0x4777fc(0x71e)]);}function _0x4e4765(_0x404d62){var _0x595f4c=_0x5c2211;if(_0x45abbd['uRBrN'](_0x45abbd[_0x595f4c(0x217)],'OuUPq'))try{new _0x39ed68(_0x910866)[_0x595f4c(0x2f2)+_0x595f4c(0x5b2)](_0x2beb21,_0x2d9c0c,_0x1a89a3);}catch(_0x55f53c){}else{if(_0x404d62[_0x595f4c(0x5cc)+'ura'])return;_0x1a3792[_0x595f4c(0x4b2)]('mouse'+(_0x404d62[_0x595f4c(0x5fc)+'n']+(-0x12eb*0x2+-0x188e+-0x1*-0x3e65)));var _0xe1e98d=_0x371df4[_0x404d62['butto'+'n']+(-0x1*-0x359+-0x15*-0x1be+-0x27ee)];if(_0xe1e98d){_0xe1e98d[_0x595f4c(0x2bb)](performance[_0x595f4c(0x388)]());if(_0xe1e98d[_0x595f4c(0x5f8)+'h']>-0x95*0x9+0x178f*-0x1+0x1cf4)_0xe1e98d['shift']();}}}function _0x54397a(_0x1cc218){var _0x25b864=_0x5c2211;if(!_0x1cc218['__sak'+_0x25b864(0x4c6)])_0x1a3792[_0x25b864(0x452)+'e'](_0x45abbd['smXwb'](_0x45abbd['muXbs'],_0x1cc218[_0x25b864(0x5fc)+'n']+(-0x26e*-0x10+0x4ee*-0x3+-0x1815)));}function _0x424f5d(){var _0x54a00b=_0x5c2211,_0x5c5037={'jeFoF':function(_0x563eea){return _0x45abbd['RNEAq'](_0x563eea);}};_0x45abbd[_0x54a00b(0x786)](_0x54a00b(0x6c7),_0x45abbd[_0x54a00b(0x57f)])?_0x1a3792[_0x54a00b(0x440)]():(_0x4ba9cc[_0x54a00b(0x23a)+_0x54a00b(0x6f7)]=_0x282e5b,_0x5c5037['jeFoF'](_0x177d88));}function _0x5711f3(){var _0x4999f8=_0x5c2211,_0x63fc={'OJNIR':function(_0x6f8122,_0x5a7ceb){return _0x45abbd['FIsiP'](_0x6f8122,_0x5a7ceb);},'bunGp':_0x4999f8(0x3eb)+_0x4999f8(0x605)+'e'};if(_0x45abbd['Aoyid'](_0x4999f8(0x256),_0x45abbd[_0x4999f8(0x600)])){if(_0x3be955)return;_0x3be955=!![],window[_0x4999f8(0x64e)+_0x4999f8(0x4c4)+'stene'+'r']('keydo'+'wn',_0x35e4b2,!![]),window['addEv'+'entLi'+'stene'+'r']('keyup',_0x2872c6,!![]),window['addEv'+_0x4999f8(0x4c4)+'stene'+'r']('mouse'+'down',_0x4e4765,!![]),window['addEv'+_0x4999f8(0x4c4)+_0x4999f8(0x40e)+'r']('mouse'+'up',_0x54397a,!![]),window[_0x4999f8(0x64e)+_0x4999f8(0x4c4)+_0x4999f8(0x40e)+'r'](_0x45abbd['tmFZk'],_0x424f5d);}else{if(_0x121b8b['body']&&(_0x63fc[_0x4999f8(0x69a)](_0x319551[_0x4999f8(0x3b2)+_0x4999f8(0x2ad)],_0x63fc[_0x4999f8(0x2e1)])||_0x4dbbc2['ready'+_0x4999f8(0x2ad)]==='compl'+_0x4999f8(0x71d)))_0x36e3bf();else _0x1a853d[_0x4999f8(0x64e)+'entLi'+_0x4999f8(0x40e)+'r']('DOMCo'+_0x4999f8(0x727)+'Loade'+'d',_0x1f4f43,{'once':!![]});}}function _0x1c4158(_0x2a3b87){var _0x193e1c=_0x5c2211,_0x3caf98=_0x371df4[_0x2a3b87]||[],_0x3d3dab=performance[_0x193e1c(0x388)]();while(_0x3caf98[_0x193e1c(0x5f8)+'h']&&_0x45abbd[_0x193e1c(0x72a)](_0x3d3dab,_0x3caf98[-0x209b+0x2203+-0x168])>0x11c3+0x21bf+0x54a*-0x9)_0x3caf98['shift']();return _0x3caf98['lengt'+'h'];}function _0x4ddd18(_0x1b489f){var _0x27abb3=_0x5c2211;if(document[_0x27abb3(0x3e4)]&&(document[_0x27abb3(0x3b2)+_0x27abb3(0x2ad)]===_0x27abb3(0x3eb)+'activ'+'e'||document[_0x27abb3(0x3b2)+_0x27abb3(0x2ad)]===_0x45abbd[_0x27abb3(0x330)]))_0x45abbd[_0x27abb3(0x438)](_0x1b489f);else document[_0x27abb3(0x64e)+_0x27abb3(0x4c4)+'stene'+'r'](_0x45abbd[_0x27abb3(0x22b)],_0x1b489f,{'once':!![]});}_0x4ddd18(()=>{var _0x3995f1=_0x5c2211,_0x5b7184={'Lbqhy':_0x3995f1(0x4c8),'ceTyJ':_0x45abbd['JhhQB'],'yoroI':_0x45abbd['nviXh'],'EBOvU':function(_0x2bc6ee,_0x29a503){return _0x2bc6ee===_0x29a503;},'uXcpg':_0x45abbd['NNrRv'],'RWYZA':_0x3995f1(0x79b)+'r','ktpVX':function(_0x46984e,_0x4214a3){return _0x46984e+_0x4214a3;},'GVpGZ':_0x3995f1(0x459),'NZoYY':function(_0x53caae,_0x5dbef3){return _0x53caae-_0x5dbef3;},'efDcA':function(_0x2b35b1,_0xca16d3){var _0x3f6e77=_0x3995f1;return _0x45abbd[_0x3f6e77(0x693)](_0x2b35b1,_0xca16d3);},'CiNKr':function(_0x5ee634,_0x20f936){return _0x45abbd['EnJEY'](_0x5ee634,_0x20f936);},'PhOav':function(_0x973e41,_0x4e770a){return _0x973e41*_0x4e770a;},'ThXoD':function(_0x529393,_0x12cea6){var _0x2b37b3=_0x3995f1;return _0x45abbd[_0x2b37b3(0x27a)](_0x529393,_0x12cea6);},'kKLQY':function(_0x2c3be9,_0x225667){return _0x2c3be9-_0x225667;},'bYyUY':function(_0x1d0905,_0x94dd6){var _0xb03b13=_0x3995f1;return _0x45abbd[_0xb03b13(0x369)](_0x1d0905,_0x94dd6);},'mqBNH':'KeyA','ORTLt':function(_0x43d164,_0x58e80c,_0x4cf737,_0x69099b,_0x1da3c3,_0x241efc,_0x24d96d){var _0x33ff8e=_0x3995f1;return _0x45abbd[_0x33ff8e(0x6bc)](_0x43d164,_0x58e80c,_0x4cf737,_0x69099b,_0x1da3c3,_0x241efc,_0x24d96d);},'EHIJJ':_0x45abbd['qwqwE'],'dhlfI':function(_0xaad494,_0x10b679){return _0x45abbd['oWhyx'](_0xaad494,_0x10b679);},'JVntJ':_0x3995f1(0x54c),'JxQos':_0x45abbd['YhxVP'],'TeQQM':function(_0x10867b,_0x2b35ea,_0x3ca481,_0x9dd37a,_0xcddb49,_0xea3b3b,_0xfd97fa){return _0x45abbd['qvJVP'](_0x10867b,_0x2b35ea,_0x3ca481,_0x9dd37a,_0xcddb49,_0xea3b3b,_0xfd97fa);},'QOAdY':'Space','ndUAC':function(_0x3500c5,_0x59596a){return _0x3500c5/_0x59596a;},'bCiEu':_0x45abbd[_0x3995f1(0x318)],'YvtST':function(_0x33d9fe,_0x185b95){return _0x33d9fe-_0x185b95;},'AVqaO':function(_0xfb4029,_0xf99f2c){var _0x22df8b=_0x3995f1;return _0x45abbd[_0x22df8b(0x693)](_0xfb4029,_0xf99f2c);},'Pfjnv':function(_0x2103a5,_0x5f185c){return _0x2103a5*_0x5f185c;},'FxMPp':_0x45abbd[_0x3995f1(0x1e4)],'Ceevf':function(_0x376e37){var _0x26e9f5=_0x3995f1;return _0x45abbd[_0x26e9f5(0x1db)](_0x376e37);},'SHNSy':function(_0x36f877,_0x3a3d2c){return _0x36f877>=_0x3a3d2c;},'NkrCZ':'sakur'+_0x3995f1(0x6ee)+'r.ui.'+'v1','DxCtP':_0x3995f1(0x743)+_0x3995f1(0x453)+'ed','zfaDT':_0x3995f1(0x6d9),'LlmAS':_0x3995f1(0x32a)+'h','NJCjC':_0x3995f1(0x74a),'kDBLe':function(_0x147746,_0x5aff25){return _0x45abbd['qDwGL'](_0x147746,_0x5aff25);},'hqZiH':'span','gyFCG':function(_0x346479){return _0x346479();},'hWBzG':'sk-ra'+_0x3995f1(0x395),'jxwld':_0x3995f1(0x531)+'lor','VUklX':_0x45abbd[_0x3995f1(0x493)],'PfIaM':'selec'+'t','JboLT':_0x3995f1(0x5fc)+'n','jvZlu':'sk-bt'+'n','pIqpZ':_0x45abbd['JVJoT'],'VHIlW':'yrQjL','RLZVb':'small','qrKak':_0x3995f1(0x335)+'nt','WhMgl':'div','CxJli':function(_0x2b1834,_0x5cabec){return _0x45abbd['UOGqI'](_0x2b1834,_0x5cabec);},'mAyQq':'set_t'+_0x3995f1(0x3cc)+'Frame'+_0x3995f1(0x224),'NEEZO':'SAFE\x20'+'MODE\x20'+_0x3995f1(0x32f)+_0x3995f1(0x5d9)+_0x3995f1(0x448)+'\x20no\x20h'+_0x3995f1(0x77f)+'(relo'+_0x3995f1(0x1fa)+_0x3995f1(0x3cf)+')','jgLIo':function(_0xcbb4df,_0x4b5feb){return _0xcbb4df+_0x4b5feb;},'QXRTs':function(_0x71453b,_0x239d0d){return _0x71453b+_0x239d0d;},'FGGkq':function(_0x56f5e3,_0x4c59f1){var _0x261755=_0x3995f1;return _0x45abbd[_0x261755(0x693)](_0x56f5e3,_0x4c59f1);},'KHnAx':function(_0x1d3c93,_0x434455){return _0x1d3c93+_0x434455;},'siqZp':_0x45abbd[_0x3995f1(0x5c6)],'UjHFD':_0x45abbd['ozLcQ'],'QHKCU':_0x45abbd[_0x3995f1(0x5c1)],'BvAGi':'\x20|\x20sh'+'ooter'+'\x20','fTXne':'held','faldm':_0x3995f1(0x49a),'lVBSB':_0x3995f1(0x6cb)+'MISSI'+_0x3995f1(0x1df)+'overl'+_0x3995f1(0x1e7)+_0x3995f1(0x332)+'einst'+_0x3995f1(0x67a)+'he\x20us'+_0x3995f1(0x42d)+_0x3995f1(0x69d),'aMUFJ':function(_0x4079bf,_0x1cdd73){return _0x4079bf+_0x1cdd73;},'VFeRr':'sk-md'+_0x3995f1(0x558),'LhRvp':_0x45abbd['KkyHv'],'OmtUM':_0x45abbd['trldF'],'WAzvk':function(_0x6bd145){return _0x45abbd['lfHYh'](_0x6bd145);},'GYCDO':function(_0x48b8fc,_0x4d43d5){return _0x45abbd['MaVqV'](_0x48b8fc,_0x4d43d5);},'TCUtc':_0x3995f1(0x5e1),'dXBdr':_0x3995f1(0x76d),'zcpqH':function(_0x8de09c){return _0x8de09c();},'wJMxq':_0x3995f1(0x55d),'qtDjW':function(_0x1664b2,_0x59a14e){return _0x1664b2+_0x59a14e;},'oFlqR':function(_0x2250e6,_0xf55fc4){return _0x2250e6/_0xf55fc4;},'XqdRh':function(_0x535721,_0x25ac71,_0x55526d,_0x1bd433,_0x5377b1,_0x340c46,_0x5f43e4){return _0x535721(_0x25ac71,_0x55526d,_0x1bd433,_0x5377b1,_0x340c46,_0x5f43e4);},'jedVx':'mouse'+'1','ISBBy':_0x3995f1(0x2c9),'wWPev':function(_0x314c27,_0x50eadc){return _0x314c27<_0x50eadc;},'IMRWe':_0x3995f1(0x611)+'desc','HgBJa':function(_0x4f127e,_0x2a5353){return _0x4f127e===_0x2a5353;},'WDjOx':function(_0x5ea1b8,_0x559a32){return _0x5ea1b8!==_0x559a32;},'HMtvv':_0x45abbd[_0x3995f1(0x5cd)],'vaOpu':function(_0x4f87f6,_0x5e0b4a){return _0x4f87f6+_0x5e0b4a;},'tOfDM':function(_0x5c0c8e,_0x984dba){return _0x5c0c8e+_0x984dba;},'PdyFO':function(_0x5e7889,_0x22c979){return _0x5e7889+_0x22c979;},'bEGYk':_0x45abbd['Rhxxr'],'rwDjL':_0x45abbd[_0x3995f1(0x796)],'hHOAI':function(_0x3f5031,_0x491ddb){return _0x45abbd['MSkRc'](_0x3f5031,_0x491ddb);},'fJqSx':_0x45abbd[_0x3995f1(0x618)],'PtLNl':_0x3995f1(0x528)+'255,1'+'80,19'+_0x3995f1(0x6fc)+')','ZLCZL':function(_0x526821,_0x6fc633){var _0x21cb9c=_0x3995f1;return _0x45abbd[_0x21cb9c(0x265)](_0x526821,_0x6fc633);},'XeMkU':_0x3995f1(0x5ef),'XrmTR':function(_0x972780,_0xb89d94,_0x595ad7){var _0x2f0ade=_0x3995f1;return _0x45abbd[_0x2f0ade(0x64a)](_0x972780,_0xb89d94,_0x595ad7);},'gOVNw':_0x45abbd['mkjri'],'yaiRA':'<svg\x20'+'viewB'+'ox=\x220'+_0x3995f1(0x5d5)+'\x2024\x22\x20'+_0x3995f1(0x55e)+_0x3995f1(0x564)+_0x3995f1(0x75a)+'svg\x22>'+_0x3995f1(0x728)+_0x3995f1(0x414)+_0x3995f1(0x6d4)+_0x3995f1(0x57c)+_0x3995f1(0x283)+_0x3995f1(0x577)+_0x3995f1(0x50e)+'5\x200-2'+_0x3995f1(0x490)+'8-4.5'+'\x204-4.'+'5s4\x202'+_0x3995f1(0x25b)+_0x3995f1(0x4be)+_0x3995f1(0x413)+'5-4\x207'+_0x3995f1(0x2e9)+'fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+'#ff6b'+_0x3995f1(0x6a3)+_0x3995f1(0x6b6)+_0x3995f1(0x580)+_0x3995f1(0x653)+'\x20stro'+_0x3995f1(0x592)+_0x3995f1(0x5dc)+_0x3995f1(0x3df)+_0x3995f1(0x40b)+_0x3995f1(0x6b6)+'-line'+'join='+'\x22roun'+'d\x22/><'+_0x3995f1(0x5a8)+_0x3995f1(0x58a)+_0x3995f1(0x48e)+_0x3995f1(0x451)+_0x3995f1(0x382)+'\x221.5\x22'+_0x3995f1(0x387)+'=\x22#ff'+'6b9d\x22'+_0x3995f1(0x6a6)+_0x3995f1(0x2e8),'ueMWH':'mn-ma'+'in','XrQWs':_0x3995f1(0x639)+'p','CPMjF':_0x45abbd['RTxxj'],'UxRbR':'Sakur'+'a\x20Kou'+'r','xnPUU':_0x3995f1(0x594)+'b','sGYeT':_0x45abbd['prrkv'],'TpdjS':'Close','wiJgD':_0x3995f1(0x63f)+_0x3995f1(0x4d9)+_0x3995f1(0x4b8)+'\x200\x2024'+_0x3995f1(0x5d7)+'<path'+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+'18\x206\x20'+'6\x2018\x22'+_0x3995f1(0x6a6)+_0x3995f1(0x2e8),'XSjdy':'mn-co'+'ls','pQOmQ':_0x3995f1(0x237)+_0x3995f1(0x632)};_0x3eb972['adblo'+'ck']&&setInterval(()=>{var _0xd6cb43=_0x3995f1,_0x5bf105={'zGuTb':function(_0x5e200f,_0x8e83a3){return _0x5e200f>_0x8e83a3;}};if(_0x45abbd[_0xd6cb43(0x5d8)](_0x45abbd['PfByr'],'Mildn'))try{for(var _0x381575 of[_0xd6cb43(0x43d)+_0xd6cb43(0x70f)+'0x250'+'-pare'+'nt','kour-'+'io_72'+_0xd6cb43(0x560)+_0xd6cb43(0x390)+'t',_0x45abbd[_0xd6cb43(0x468)],_0x45abbd['bNMCK']]){var _0x136c89=document[_0xd6cb43(0x4f4)+'ement'+_0xd6cb43(0x699)](_0x381575);if(_0x136c89&&_0x381575==='fulls'+_0xd6cb43(0x415)+_0xd6cb43(0x38a)+'s'){if(_0x45abbd[_0xd6cb43(0x786)](_0x45abbd[_0xd6cb43(0x380)],_0x45abbd['fdAWs'])){_0x257e7d[_0xd6cb43(0x2bb)](_0x5031a3[_0xd6cb43(0x388)]());if(_0x5bf105[_0xd6cb43(0x617)](_0x1f81a2['lengt'+'h'],0x1d5*-0x2+0xed+0x2e5))_0x2e6a0f[_0xd6cb43(0x5ee)]();}else{var _0x2b1c7f=_0x136c89[_0xd6cb43(0x242)+_0xd6cb43(0x43f)];for(var _0xb6cc69=-0xeaf*-0x1+0x18e*-0xa+0x1*0xdd;_0xb6cc69<_0x2b1c7f['lengt'+'h'];_0xb6cc69++){if(_0x2b1c7f[_0xb6cc69]['id']&&_0x45abbd['FIsiP'](_0x2b1c7f[_0xb6cc69]['id']['index'+'Of']('kour-'+'io_'),0x14c5*0x1+0x1c47+-0x310c))_0x2b1c7f[_0xb6cc69][_0xd6cb43(0x541)]['displ'+'ay']=_0xd6cb43(0x49a);}}}else{if(_0x136c89)_0x136c89[_0xd6cb43(0x541)][_0xd6cb43(0x601)+'ay']=_0xd6cb43(0x49a);}}}catch(_0x3e5e32){}else _0x5c94a5(_0x51ed32,-0x14a4+-0x4b2+0x182*0x11,_0xd6cb43(0x4c8),_0x476b64),_0x178db4(_0x487f4b,0x12cd*0x1+0x7bd*0x1+-0x1a36,_0x5b7184[_0xd6cb43(0x356)],_0x190bc5);},-0x1879+-0x20e*-0x7+0x11e7);var _0x36a1c8=document[_0x3995f1(0x764)+_0x3995f1(0x287)+_0x3995f1(0x570)](_0x45abbd['ccLrr']);_0x36a1c8['style'][_0x3995f1(0x5b4)+'xt']=_0x3995f1(0x62b)+_0x3995f1(0x4f7)+_0x3995f1(0x322)+_0x3995f1(0x5f2)+':0;wi'+'dth:1'+_0x3995f1(0x5a4)+'heigh'+_0x3995f1(0x4b5)+_0x3995f1(0x621)+_0x3995f1(0x23b)+_0x3995f1(0x766)+'48364'+_0x3995f1(0x761)+_0x3995f1(0x5a1)+'event'+'s:non'+'e';var _0x156d5d=_0x36a1c8[_0x3995f1(0x614)+_0x3995f1(0x1d7)]('2d');function _0x4eb6a4(){var _0x42a88a=_0x3995f1;try{var _0x443ac8=document['fulls'+'creen'+'Eleme'+'nt'],_0x4ee993=_0x443ac8&&_0x443ac8['tagNa'+'me']!=='CANVA'+'S'?_0x443ac8:document['body']||document[_0x42a88a(0x1da)+'entEl'+_0x42a88a(0x2c7)];if(_0x45abbd[_0x42a88a(0x25e)](_0x36a1c8[_0x42a88a(0x390)+_0x42a88a(0x35d)],_0x4ee993))_0x4ee993['appen'+_0x42a88a(0x3ee)+'d'](_0x36a1c8);}catch(_0x15c0a5){try{document[_0x42a88a(0x3e4)]['appen'+_0x42a88a(0x3ee)+'d'](_0x36a1c8);}catch(_0x4adf81){}}}var _0x510dbd={'w':0x0,'h':0x0,'dpr':0x0};function _0x5f25df(){var _0x165762=_0x3995f1;if(_0x165762(0x457)!==_0x5b7184['yoroI']){var _0x2d5463=(_0x165762(0x644)+'|3|1|'+'0|2|8'+'|6')[_0x165762(0x5b3)]('|'),_0x261afc=0xf9e+-0x1*0x1fde+0x2*0x820;while(!![]){switch(_0x2d5463[_0x261afc++]){case'0':_0x510dbd['dpr']=_0x1e313e;continue;case'1':_0x510dbd['h']=_0x28285f;continue;case'2':_0x36a1c8['width']=Math[_0x165762(0x6ba)](_0x17832d*_0x1e313e);continue;case'3':_0x510dbd['w']=_0x17832d;continue;case'4':var _0x17832d=window[_0x165762(0x306)+_0x165762(0x530)],_0x28285f=window['inner'+_0x165762(0x733)+'t'];continue;case'5':var _0x1e313e=window[_0x165762(0x225)+_0x165762(0x5c0)+'lRati'+'o']||-0x1901*0x1+0x1e01+-0x4ff;continue;case'6':_0x156d5d['setTr'+_0x165762(0x347)+'rm'](_0x1e313e,-0x24c5*-0x1+-0x1*-0xb12+-0x2fd7,0x268a+0x1c91+0x29*-0x1a3,_0x1e313e,-0x109b+-0x8e7+0x1982,0x70e+0x5b3*-0x1+0x1*-0x15b);continue;case'7':if(_0x5b7184[_0x165762(0x6c0)](_0x17832d,_0x510dbd['w'])&&_0x28285f===_0x510dbd['h']&&_0x1e313e===_0x510dbd['dpr'])return;continue;case'8':_0x36a1c8[_0x165762(0x3b9)+'t']=Math['round'](_0x28285f*_0x1e313e);continue;}break;}}else{var _0x304301=_0x39a948['creat'+_0x165762(0x287)+'ent'](_0x165762(0x304)+'t');_0x304301['class'+'Name']='sk-fi'+'eld';for(var [_0x446edf,_0x239c1f]of _0x2433a5){var _0x5540fa=_0x47b5e7[_0x165762(0x764)+'eElem'+_0x165762(0x570)](_0x5b7184[_0x165762(0x760)]);_0x5540fa[_0x165762(0x2ff)]=_0x446edf,_0x5540fa[_0x165762(0x4cb)+'onten'+'t']=_0x239c1f,_0x304301[_0x165762(0x672)+_0x165762(0x3ee)+'d'](_0x5540fa);}return _0x304301[_0x165762(0x2ff)]=_0x1a8549,_0x304301[_0x165762(0x657)+'nge']=()=>_0x55eba3(_0x304301[_0x165762(0x2ff)]),_0x304301;}}var _0x598905=-0x8bc*0x2+0x40d*-0x3+0x1d9f,_0x56f168=performance[_0x3995f1(0x388)](),_0x15b3d=0x2*0x959+-0x1*-0x2006+-0x32b8;function _0x2d1485(_0x299a1e){var _0x1db937=_0x3995f1,_0x475c9e={'xIxQj':function(_0x383f39,_0x311f6c){return _0x383f39*_0x311f6c;},'jfVUM':function(_0x46ee94,_0x2a637f){return _0x46ee94===_0x2a637f;},'ZXEEu':_0x5b7184[_0x1db937(0x49e)],'EdYrE':_0x1db937(0x4a0),'AWOES':'#fff','KvsbV':_0x5b7184[_0x1db937(0x642)],'zTEhC':_0x1db937(0x2b7)+'e','cQoKk':function(_0x7c943c,_0x240cb5){return _0x5b7184['ktpVX'](_0x7c943c,_0x240cb5);},'clhjQ':_0x5b7184['GVpGZ'],'HFvNt':_0x1db937(0x59e)+_0x1db937(0x501)+_0x1db937(0x6bf)+_0x1db937(0x6bd)+'tem-u'+'i,san'+_0x1db937(0x56e)+'if','VwNpb':function(_0x5bb13e,_0x4fc6fb){return _0x5b7184['NZoYY'](_0x5bb13e,_0x4fc6fb);},'Gusxz':_0x1db937(0x591),'ZlUTb':function(_0x2158bb,_0x5d1dcf){return _0x2158bb+_0x5d1dcf;},'oZgnj':function(_0x504ddf,_0x3b75b3){return _0x504ddf/_0x3b75b3;}},_0x2f44c0=Number(_0x3eb972['ksSca'+'le'])||0x1e66+-0x3a*0x2b+-0x14a7,_0x1b0f32=(-0x1*-0x269+0x54b*0x5+-0x1cbe*0x1)*_0x2f44c0,_0xbc3188=(0x4c5+0x6*-0x2c2+-0x1*-0xbcb)*_0x2f44c0,_0x4ec250=_0x5b7184[_0x1db937(0x6be)](_0x1b0f32*(-0x248*0xe+-0xf*0xe9+0xd*0x382),_0x5b7184[_0x1db937(0x340)](_0xbc3188,-0x16c9+-0x257a*-0x1+0xb3*-0x15)),_0x313073=_0x5b7184[_0x1db937(0x2e0)](_0x1b0f32,-0x9*-0x131+-0x11*0x1e2+0x154c)+_0x5b7184[_0x1db937(0x340)](_0xbc3188,-0xc65+0x1*-0xfe5+0x1c4c),_0x40ee92=_0x3eb972[_0x1db937(0x2fa)],_0x82b614=_0x40ee92==='br'?_0x5b7184['ThXoD'](_0x299a1e[_0x1db937(0x35a)]-(-0x2ab*-0x7+0x129f+-0x129e*0x2),_0x4ec250):_0x299a1e[_0x1db937(0x5ef)]+(-0xcc7+-0x19cb*-0x1+-0xcf4),_0x309902=_0x40ee92==='ml'?_0x5b7184[_0x1db937(0x628)](_0x299a1e[_0x1db937(0x79a)]+_0x299a1e['heigh'+'t']/(-0x1b65+0x9*0x42e+-0xa37),_0x313073/(0x1*-0x182a+0x131*-0x13+0x2ecf)):_0x5b7184[_0x1db937(0x628)](_0x5b7184[_0x1db937(0x431)](_0x299a1e['botto'+'m'],_0x313073),_0x40ee92==='bl'?-0x591+-0x8de+-0x1*-0xecf:0x1db7+0x1*-0x85a+-0x14c7),_0x1db301=(_0xb142be,_0x25300c,_0x78a76e,_0x314b99,_0x2b7620,_0x48dc99,_0x37b448)=>{var _0x2d630d=_0x1db937,_0x40ff5c={'nYNGS':function(_0x2883bb){return _0x2883bb();}},_0x19c725=_0x1a3792['has'](_0x25300c);_0x156d5d[_0x2d630d(0x40f)](),_0x156d5d['begin'+'Path']();if(_0x156d5d[_0x2d630d(0x6ba)+_0x2d630d(0x706)])_0x156d5d[_0x2d630d(0x6ba)+_0x2d630d(0x706)](_0x78a76e,_0x314b99,_0x2b7620,_0x48dc99,_0x475c9e[_0x2d630d(0x2e5)](-0x1*-0x207d+-0x2*0x20b+-0x1c60,_0x2f44c0));else _0x156d5d['rect'](_0x78a76e,_0x314b99,_0x2b7620,_0x48dc99);_0x156d5d[_0x2d630d(0x5f3)+_0x2d630d(0x31a)]=_0x19c725?_0x2d630d(0x528)+'255,1'+_0x2d630d(0x688)+'7,0.8'+'5)':'rgba('+_0x2d630d(0x6ab)+_0x2d630d(0x391)+'7)',_0x156d5d['fill'](),_0x156d5d['lineW'+'idth']=-0x4a*0x12+0x4*-0xe8+0x7*0x143,_0x156d5d['strok'+'eStyl'+'e']=_0x19c725?_0x5e3c98:'rgba('+_0x2d630d(0x697)+_0x2d630d(0x688)+_0x2d630d(0x52c)+'5)',_0x156d5d[_0x2d630d(0x2bd)+'e'](),_0x19c725&&(_0x475c9e['jfVUM'](_0x475c9e[_0x2d630d(0x511)],_0x475c9e[_0x2d630d(0x366)])?(_0x5bd95a['hookG'+'od']=_0x430923,_0x351b05['hookG'+_0x2d630d(0x78b)]=_0x9a7f1f,_0x355d39[_0x2d630d(0x1e5)+_0x2d630d(0x5e9)+'il']=_0x9772fd,_0x1d55f7[_0x2d630d(0x5d0)+'aptur'+'e']=_0x5e282e,_0x40ff5c[_0x2d630d(0x52a)](_0x226d2d),_0x4e372c[_0x2d630d(0x572)+'d']()):(_0x156d5d[_0x2d630d(0x20d)+'wColo'+'r']=_0x46f68c,_0x156d5d[_0x2d630d(0x20d)+_0x2d630d(0x45e)]=-0x1674+-0x1e39+0x34bb,_0x156d5d[_0x2d630d(0x20c)](),_0x156d5d['shado'+'wBlur']=0x1bf1+0x20e5*-0x1+0x4f4)),_0x156d5d['fillS'+_0x2d630d(0x31a)]=_0x19c725?_0x475c9e['AWOES']:_0x2d630d(0x528)+'255,2'+_0x2d630d(0x6fb)+'0,0.8'+')',_0x156d5d[_0x2d630d(0x649)+'lign']=_0x475c9e[_0x2d630d(0x669)],_0x156d5d['textB'+'aseli'+'ne']=_0x475c9e[_0x2d630d(0x2d2)],_0x156d5d['font']=_0x475c9e[_0x2d630d(0x46a)](_0x475c9e[_0x2d630d(0x56c)]+Math[_0x2d630d(0x6ba)]((-0xa31*-0x3+-0x181f+-0x668)*_0x2f44c0),_0x475c9e[_0x2d630d(0x3de)]),_0x156d5d[_0x2d630d(0x2f9)+_0x2d630d(0x61b)](_0xb142be,_0x78a76e+_0x2b7620/(-0x792+0x211*-0x11+0x2ab5),_0x475c9e['VwNpb'](_0x475c9e[_0x2d630d(0x46a)](_0x314b99,_0x48dc99/(-0x10a1+-0xec2*-0x1+0xd*0x25)),_0x37b448?(0x155b+-0x1*0x216e+-0x4*-0x306)*_0x2f44c0:0xce4+0x23e5+-0x30c9)),_0x37b448&&(_0x156d5d['font']=_0x475c9e[_0x2d630d(0x4c5)]+Math['round']((0x154b+-0x8c0+-0xc82)*_0x2f44c0)+_0x475c9e[_0x2d630d(0x3de)],_0x156d5d['fillS'+_0x2d630d(0x31a)]=_0x19c725?'#fff':_0x2d630d(0x528)+_0x2d630d(0x741)+'35,24'+'0,0.5'+'5)',_0x156d5d[_0x2d630d(0x2f9)+_0x2d630d(0x61b)](_0x37b448,_0x475c9e['ZlUTb'](_0x78a76e,_0x2b7620/(0x107b*-0x1+0x19b2+-0x935)),_0x475c9e['cQoKk'](_0x314b99,_0x475c9e[_0x2d630d(0x2b2)](_0x48dc99,0x7a*0x44+0x210e+-0x4174))+(0xa*0x2f3+-0x233*-0x1+0x1*-0x1fa9)*_0x2f44c0)),_0x156d5d[_0x2d630d(0x785)+'re']();};_0x1db301('W',_0x1db937(0x769),_0x5b7184[_0x1db937(0x744)](_0x82b614+_0x1b0f32,_0xbc3188),_0x309902,_0x1b0f32,_0x1b0f32),_0x1db301('A',_0x5b7184[_0x1db937(0x28e)],_0x82b614,_0x309902+_0x1b0f32+_0xbc3188,_0x1b0f32,_0x1b0f32),_0x1db301('S','KeyS',_0x82b614+_0x1b0f32+_0xbc3188,_0x309902+_0x1b0f32+_0xbc3188,_0x1b0f32,_0x1b0f32),_0x5b7184['ORTLt'](_0x1db301,'D',_0x5b7184['EHIJJ'],_0x5b7184[_0x1db937(0x744)](_0x82b614,(_0x1b0f32+_0xbc3188)*(-0x161c+-0xda3+0x23c1)),_0x5b7184[_0x1db937(0x6be)](_0x5b7184[_0x1db937(0x744)](_0x309902,_0x1b0f32),_0xbc3188),_0x1b0f32,_0x1b0f32);var _0x5323ce=(_0x4ec250-_0xbc3188)/(-0x184*-0x2+-0x406*-0x4+-0x1*0x131e),_0x147916=_0x309902+(_0x1b0f32+_0xbc3188)*(-0x17*0x17d+-0x2c6*0xb+0x40bf);_0x1db301('LMB',_0x1db937(0x703)+'1',_0x82b614,_0x147916,_0x5323ce,_0x1b0f32,_0x3eb972['ksCps']?_0x5b7184[_0x1db937(0x42c)](_0x1c4158,-0x19ab+-0x3*-0x3ea+0xdee)+_0x5b7184['JVntJ']:''),_0x1db301(_0x5b7184['JxQos'],_0x1db937(0x703)+'3',_0x5b7184[_0x1db937(0x65c)](_0x82b614,_0x5323ce)+_0xbc3188,_0x147916,_0x5323ce,_0x1b0f32,_0x3eb972[_0x1db937(0x42b)]?_0x5b7184['bYyUY'](_0x1c4158(0x1b*0x131+-0x192e+-0x6fa),_0x5b7184['JVntJ']):''),_0x5b7184['TeQQM'](_0x1db301,'',_0x5b7184[_0x1db937(0x2c2)],_0x82b614,_0x147916+_0x1b0f32+_0xbc3188,_0x4ec250,_0x1b0f32*(-0x1*0x1e7c+0x3*0x383+-0x13f3*-0x1+0.45));}function _0x51e2c(_0x3338f2){var _0x516071=_0x3995f1,_0x234328=_0x5b7184[_0x516071(0x1d8)](_0x3338f2[_0x516071(0x344)],0x615+-0x309+-0x30a),_0x4a20d4=_0x3338f2['heigh'+'t']/(-0x2354+-0xa54+0x2daa),_0x771e15=Number(_0x3eb972[_0x516071(0x709)+'e'])||-0x41*0x6f+0x224f+-0x61f,_0x7938ff=/^#[0-9a-f]{6}$/i[_0x516071(0x69e)](_0x3eb972[_0x516071(0x6f4)+'or'])?_0x3eb972[_0x516071(0x6f4)+'or']:_0x5b7184[_0x516071(0x5e0)];_0x156d5d['save'](),_0x156d5d['strok'+'eStyl'+'e']=_0x7938ff,_0x156d5d['fillS'+_0x516071(0x31a)]=_0x7938ff,_0x156d5d[_0x516071(0x674)+'idth']=Math[_0x516071(0x5d1)](-0x1275+-0x2271*0x1+0x1d*0x1d3+0.5,(0x1*0x3fb+-0x2003+0x1c0a)*_0x771e15),_0x156d5d['shado'+_0x516071(0x3fc)+'r']=_0x7938ff,_0x156d5d['shado'+'wBlur']=-0x539+-0x1a7*0x7+0x10d0;var _0x598027=(-0x133*0x10+0x25*-0x29+0x1923)*_0x771e15,_0x23373b=(0x1907+-0x1a24+0x125)*_0x771e15;_0x156d5d[_0x516071(0x673)+_0x516071(0x37e)](),_0x156d5d['moveT'+'o'](_0x234328-_0x598027-_0x23373b,_0x4a20d4),_0x156d5d[_0x516071(0x28f)+'o'](_0x5b7184[_0x516071(0x48b)](_0x234328,_0x598027),_0x4a20d4),_0x156d5d['moveT'+'o'](_0x234328+_0x598027,_0x4a20d4),_0x156d5d['lineT'+'o'](_0x5b7184[_0x516071(0x751)](_0x234328,_0x598027)+_0x23373b,_0x4a20d4),_0x156d5d['moveT'+'o'](_0x234328,_0x4a20d4-_0x598027-_0x23373b),_0x156d5d['lineT'+'o'](_0x234328,_0x4a20d4-_0x598027),_0x156d5d[_0x516071(0x5fe)+'o'](_0x234328,_0x5b7184['efDcA'](_0x4a20d4,_0x598027)),_0x156d5d[_0x516071(0x28f)+'o'](_0x234328,_0x5b7184['bYyUY'](_0x4a20d4,_0x598027)+_0x23373b),_0x156d5d[_0x516071(0x2bd)+'e'](),_0x156d5d['begin'+'Path'](),_0x156d5d['arc'](_0x234328,_0x4a20d4,_0x5b7184[_0x516071(0x698)](0x26d+0x20ac+-0x2318+0.6000000000000001,_0x771e15),0x1757+-0x2005+0x8ae,Math['PI']*(-0x24f9+-0xa4a+-0x1*-0x2f45)),_0x156d5d[_0x516071(0x20c)](),_0x156d5d['resto'+'re']();}function _0x4144a5(_0x5d30b1){var _0xd2fe6b=_0x3995f1,_0x1cf78f={'DlLOR':function(_0x5d77ca,_0x37f4d9){return _0x5d77ca===_0x37f4d9;},'NxoRx':_0xd2fe6b(0x6d5),'WPPym':_0xd2fe6b(0x4a6)};_0x156d5d['save'](),_0x156d5d[_0xd2fe6b(0x254)]=_0xd2fe6b(0x36c)+'2px\x20u'+'i-mon'+'ospac'+_0xd2fe6b(0x22f)+'ospac'+'e',_0x156d5d[_0xd2fe6b(0x649)+'lign']=_0xd2fe6b(0x5ef),_0x156d5d[_0xd2fe6b(0x514)+_0xd2fe6b(0x747)+'ne']='top';var _0x4ffd04=0x1*0x1981+-0x2*-0x1205+0x3d5f*-0x1,_0x2c3b8e=0xd*0x127+-0x9f6+-0x4f9,_0x27f663=(_0x522605,_0x5e9ccd)=>{var _0x46158c=_0xd2fe6b,_0x265231={'ugQop':function(_0x4cdf5b,_0x58d16a){return _0x4cdf5b(_0x58d16a);}};if(_0x1cf78f[_0x46158c(0x4dd)](_0x1cf78f[_0x46158c(0x27b)],_0x1cf78f[_0x46158c(0x789)])){var _0x1e0e86={'lWyQA':function(_0xc96e04,_0x2a71c3){var _0x1dccdc=_0x46158c;return _0x265231[_0x1dccdc(0x43c)](_0xc96e04,_0x2a71c3);}},_0x42086f=_0xf7a99b(_0x46835e,_0x406424=>{var _0x582b6e=_0x46158c;_0x73f566['class'+_0x582b6e(0x59f)][_0x582b6e(0x1e6)+'e']('on',_0x406424),_0x1e0e86[_0x582b6e(0x3b6)](_0x3500c6,_0x406424);});_0x554ec5[_0x46158c(0x672)+'d'](_0x383977,_0x42086f);}else _0x156d5d[_0x46158c(0x5f3)+_0x46158c(0x31a)]=_0x5e9ccd||'rgba('+'255,2'+_0x46158c(0x6fb)+_0x46158c(0x3db)+'5)',_0x156d5d[_0x46158c(0x2f9)+_0x46158c(0x61b)](_0x522605,_0x2c3b8e,_0x4ffd04),_0x4ffd04+=0x457*-0x8+-0x247f+0x4747;};_0x27f663(_0x45abbd[_0xd2fe6b(0x696)],_0x45abbd[_0xd2fe6b(0x318)]);if(_0x3eb972[_0xd2fe6b(0x1ff)])_0x45abbd[_0xd2fe6b(0x5c4)](_0x27f663,_0x15b3d+_0xd2fe6b(0x486));if(!_0xdf5aa[_0xd2fe6b(0x3d0)+_0xd2fe6b(0x422)])_0x45abbd[_0xd2fe6b(0x4ba)](_0x27f663,_0x45abbd['MykSz'],_0x45abbd[_0xd2fe6b(0x775)]);_0x156d5d[_0xd2fe6b(0x785)+'re']();}function _0x7be633(){var _0x3e1262=_0x3995f1;if('gxklV'===_0x5b7184[_0x3e1262(0x34d)])_0x2182d2[_0x3e1262(0x32c)+'ropag'+_0x3e1262(0x4e6)](),_0x482c9b();else{var _0x168198=('9|8|7'+_0x3e1262(0x473)+'4|2|1'+_0x3e1262(0x44e)+'|0')['split']('|'),_0x5f5ba2=-0x2*0x1037+0x1709+0x965;while(!![]){switch(_0x168198[_0x5f5ba2++]){case'0':_0x4144a5(_0x37b327);continue;case'1':var _0x37b327={'left':0x0,'top':0x0,'right':_0x510dbd['w'],'bottom':_0x510dbd['h'],'width':_0x510dbd['w'],'height':_0x510dbd['h']};continue;case'2':_0x156d5d['clear'+'Rect'](0x4*-0x3d5+0x24c5*-0x1+0x3419,0x1*0x2230+-0x1*-0x407+0x43f*-0x9,_0x510dbd['w'],_0x510dbd['h']);continue;case'3':if(_0x3eb972[_0x3e1262(0x3aa)+_0x3e1262(0x368)])_0x51e2c(_0x37b327);continue;case'4':_0x4eb6a4();continue;case'5':_0x5b7184[_0x3e1262(0x598)](_0x5f25df);continue;case'6':_0x5b7184[_0x3e1262(0x61f)](_0x32a96b-_0x56f168,0xc2f+-0x2*0x470+-0x15b)&&(_0x15b3d=Math[_0x3e1262(0x6ba)](_0x598905*(0x2e*0xa3+-0xe79+0x93*-0x13)/(_0x32a96b-_0x56f168)),_0x598905=0x21de+-0x4d5*-0x3+-0x305d,_0x56f168=_0x32a96b);continue;case'7':var _0x32a96b=performance['now']();continue;case'8':_0x598905++;continue;case'9':_0x5b7184[_0x3e1262(0x42c)](requestAnimationFrame,_0x7be633);continue;case'10':if(_0x3eb972['keyst'+'rokes'])_0x2d1485(_0x37b327);continue;}break;}}}var _0x88b573=document[_0x3995f1(0x764)+'eElem'+'ent'](_0x3995f1(0x5af));_0x88b573['id']=_0x3995f1(0x36d)+_0x3995f1(0x4ea),_0x88b573[_0x3995f1(0x541)]['cssTe'+'xt']=_0x45abbd['jTcIc'];var _0x56fa53=_0x88b573['attac'+'hShad'+'ow']({'mode':_0x3995f1(0x472)});(document['body']||document[_0x3995f1(0x1da)+_0x3995f1(0x47d)+_0x3995f1(0x2c7)])['appen'+'dChil'+'d'](_0x88b573);var _0x3ddd38=![],_0x2a6758={};try{_0x2a6758=JSON['parse'](localStorage['getIt'+'em']('sakur'+'a.kou'+_0x3995f1(0x21e)+'v1')||'{}');}catch(_0x97b040){}function _0x454393(){var _0x577047=_0x3995f1;try{if('DeMHg'==='imUZn'){var _0x391216=_0x45b56c[_0x577047(0x764)+'eElem'+'ent'](_0x577047(0x541));_0x391216[_0x577047(0x4cb)+_0x577047(0x620)+'t']=_0x367030,_0x197bc1[_0x577047(0x672)+'dChil'+'d'](_0x391216),_0x53b00e=_0x447331(),_0x451276['appen'+_0x577047(0x3ee)+'d'](_0xb440b6),_0x401002(()=>_0x391d58[_0x577047(0x55e)+'List'][_0x577047(0x4b2)](_0x577047(0x339)));}else localStorage['setIt'+'em'](_0x5b7184[_0x577047(0x251)],JSON['strin'+_0x577047(0x39d)](_0x2a6758));}catch(_0x477a76){}}function _0x5f4622(_0x443bab,_0x4d4587){var _0x3a2900=_0x3995f1,_0x25d0ce=document['creat'+_0x3a2900(0x287)+'ent']('butto'+'n');return _0x25d0ce[_0x3a2900(0x272)]=_0x3a2900(0x5fc)+'n',_0x25d0ce[_0x3a2900(0x55e)+_0x3a2900(0x4ef)]=_0x3a2900(0x1e1)+_0x3a2900(0x450),_0x25d0ce['setAt'+'tribu'+'te'](_0x5b7184[_0x3a2900(0x72b)],_0x5b7184[_0x3a2900(0x403)]),_0x25d0ce[_0x3a2900(0x41a)+'tribu'+'te'](_0x5b7184[_0x3a2900(0x5e6)],String(!!_0x443bab)),_0x25d0ce[_0x3a2900(0x211)+'ck']=_0x1db998=>{var _0x388aa5=_0x3a2900;_0x1db998['stopP'+_0x388aa5(0x1f9)+'ation']();var _0x3534b8=_0x25d0ce['getAt'+_0x388aa5(0x245)+'te'](_0x388aa5(0x743)+'check'+'ed')!=='true';_0x25d0ce['setAt'+'tribu'+'te'](_0x5b7184[_0x388aa5(0x5e6)],_0x5b7184['dhlfI'](String,_0x3534b8)),_0x4d4587(_0x3534b8);},_0x25d0ce;}function _0x587a29(_0x52db13,_0x216cde,_0x1533ab,_0x5eddb0,_0x5247d7){var _0x1a98a4=_0x3995f1,_0x82eff6=(_0x1a98a4(0x2ba)+'13|1|'+'16|17'+'|14|5'+'|3|9|'+'6|10|'+'4|12|'+_0x1a98a4(0x4bc)+_0x1a98a4(0x25f))[_0x1a98a4(0x5b3)]('|'),_0x1979f3=-0x10b2+-0x219*0x1+0x11*0x11b;while(!![]){switch(_0x82eff6[_0x1979f3++]){case'0':_0x561286['appen'+'d'](_0x3274a2,_0x3f747a);continue;case'1':var _0x3274a2=document[_0x1a98a4(0x764)+_0x1a98a4(0x287)+_0x1a98a4(0x570)](_0x5b7184[_0x1a98a4(0x295)]);continue;case'2':_0x3274a2[_0x1a98a4(0x258)+'ut']=()=>{var _0x54ccf6=_0x1a98a4;_0x20e01b[_0x54ccf6(0x385)](_0x371b8e),_0x5247d7(Number(_0x3274a2[_0x54ccf6(0x2ff)]));};continue;case'3':_0x3274a2[_0x1a98a4(0x5b6)]=_0x5eddb0;continue;case'4':_0x3f747a['textC'+_0x1a98a4(0x620)+'t']=_0x5b7184[_0x1a98a4(0x723)](String,_0x52db13);continue;case'5':_0x3274a2['max']=_0x1533ab;continue;case'6':var _0x3f747a=document[_0x1a98a4(0x764)+_0x1a98a4(0x287)+_0x1a98a4(0x570)](_0x5b7184[_0x1a98a4(0x4a4)]);continue;case'7':return _0x561286;case'8':var _0x561286=document['creat'+'eElem'+'ent'](_0x1a98a4(0x5af));continue;case'9':_0x3274a2['value']=_0x52db13;continue;case'10':_0x3f747a[_0x1a98a4(0x55e)+_0x1a98a4(0x4ef)]=_0x1a98a4(0x585)+'l';continue;case'11':_0x5b7184['gyFCG'](_0x371b8e);continue;case'12':var _0x371b8e=()=>{var _0x27f915=_0x1a98a4;_0x3f747a['textC'+'onten'+'t']=String(_0x3274a2['value']),_0x561286[_0x27f915(0x541)][_0x27f915(0x3b5)+_0x27f915(0x2dc)+'y']('--p',_0x5b7184[_0x27f915(0x1d8)](_0x3274a2[_0x27f915(0x2ff)]-_0x216cde,_0x1533ab-_0x216cde)*(-0x2095*-0x1+0x1*-0x989+-0x5aa*0x4)+'%');};continue;case'13':_0x561286[_0x1a98a4(0x55e)+_0x1a98a4(0x4ef)]=_0x5b7184['hWBzG'];continue;case'14':_0x3274a2[_0x1a98a4(0x46f)]=_0x216cde;continue;case'15':var _0x20e01b={'UeSna':function(_0x2f16c3){return _0x2f16c3();}};continue;case'16':_0x3274a2['type']=_0x1a98a4(0x455);continue;case'17':_0x3274a2['class'+'Name']='sk-sl'+'ider';continue;}break;}}function _0x4d6cd1(_0x52611b,_0x313b03){var _0x75133c=_0x3995f1,_0x51c4d6=document['creat'+'eElem'+'ent']('input');return _0x51c4d6[_0x75133c(0x272)]=_0x75133c(0x444),_0x51c4d6['class'+_0x75133c(0x4ef)]=_0x5b7184[_0x75133c(0x2fb)],_0x51c4d6[_0x75133c(0x2ff)]=/^#[0-9a-f]{6}$/i['test'](_0x52611b)?_0x52611b:'#ff6b'+'9d',_0x51c4d6[_0x75133c(0x258)+'ut']=()=>_0x313b03(_0x51c4d6[_0x75133c(0x2ff)]),_0x51c4d6;}function _0x52a0b5(_0x14c5a5,_0x4b02fc,_0x415f55){var _0x31db70=_0x3995f1;if('BlDxF'!==_0x5b7184[_0x31db70(0x42f)])_0x57c63c[_0x31db70(0x5c2)+_0x31db70(0x4e9)]=_0x44c5e6,_0x279ddd();else{var _0x2a68cb=document['creat'+_0x31db70(0x287)+_0x31db70(0x570)](_0x5b7184[_0x31db70(0x543)]);_0x2a68cb[_0x31db70(0x55e)+_0x31db70(0x4ef)]='sk-fi'+_0x31db70(0x3ac);for(var [_0x3c73f3,_0x326465]of _0x4b02fc){var _0x47e111=document[_0x31db70(0x764)+_0x31db70(0x287)+'ent'](_0x31db70(0x405)+'n');_0x47e111['value']=_0x3c73f3,_0x47e111[_0x31db70(0x4cb)+_0x31db70(0x620)+'t']=_0x326465,_0x2a68cb['appen'+_0x31db70(0x3ee)+'d'](_0x47e111);}return _0x2a68cb[_0x31db70(0x2ff)]=_0x14c5a5,_0x2a68cb[_0x31db70(0x657)+'nge']=()=>_0x415f55(_0x2a68cb['value']),_0x2a68cb;}}function _0x1cb1ce(_0x5f1326,_0x2a31e3){var _0x31d1f6=_0x3995f1,_0x306eee=document['creat'+_0x31d1f6(0x287)+'ent'](_0x5b7184[_0x31d1f6(0x599)]);return _0x306eee['type']=_0x31d1f6(0x5fc)+'n',_0x306eee['class'+'Name']=_0x5b7184['jvZlu'],_0x306eee[_0x31d1f6(0x4cb)+_0x31d1f6(0x620)+'t']=_0x5f1326,_0x306eee[_0x31d1f6(0x211)+'ck']=_0x300e8b=>{var _0x1c2c31=_0x31d1f6;_0x300e8b[_0x1c2c31(0x32c)+'ropag'+'ation'](),_0x2a31e3();},_0x306eee;}function _0x2654ec(_0x57726b,_0xd0e9e8,_0x1635e5){var _0x2d1581=_0x3995f1,_0xe3ed3={'xpwtG':function(_0x23a1f2,_0xc3e9cb){return _0x23a1f2+_0xc3e9cb;},'QTSKN':function(_0x42cf93,_0x3ac4ca){return _0x42cf93*_0x3ac4ca;},'hEKpo':_0x5b7184[_0x2d1581(0x75b)],'RkOqw':function(_0x4a8ad5,_0x1d4615){return _0x4a8ad5+_0x1d4615;},'SyQED':function(_0x2f5cf2,_0x254fa5){return _0x2f5cf2+_0x254fa5;},'jDPUx':function(_0x2daacd,_0x132451){return _0x2daacd/_0x132451;}},_0xb79c75=document['creat'+_0x2d1581(0x287)+_0x2d1581(0x570)](_0x2d1581(0x5af));_0xb79c75[_0x2d1581(0x55e)+'Name']='sk-ct'+'l';var _0x36b7ca=document[_0x2d1581(0x764)+_0x2d1581(0x287)+_0x2d1581(0x570)](_0x2d1581(0x260));_0x36b7ca[_0x2d1581(0x55e)+'Name']='sk-la'+_0x2d1581(0x68d),_0x36b7ca[_0x2d1581(0x4cb)+'onten'+'t']=_0x57726b;if(_0xd0e9e8){if(_0x5b7184[_0x2d1581(0x72d)]==='yrQjL'){var _0x1171a5=document['creat'+'eElem'+_0x2d1581(0x570)](_0x5b7184['RLZVb']);_0x1171a5['class'+_0x2d1581(0x4ef)]=_0x5b7184['qrKak'],_0x1171a5[_0x2d1581(0x4cb)+'onten'+'t']=_0xd0e9e8,_0x36b7ca['appen'+_0x2d1581(0x3ee)+'d'](_0x1171a5);}else _0x1299dd['font']=_0xe3ed3[_0x2d1581(0x6b8)](_0xe3ed3[_0x2d1581(0x6b8)](_0x2d1581(0x591),_0x3cbb3b[_0x2d1581(0x6ba)](_0xe3ed3['QTSKN'](-0x14ea+-0xaa1+0xbc*0x2b,_0x307a0a))),_0x2d1581(0x59e)+_0x2d1581(0x501)+_0x2d1581(0x6bf)+'f,sys'+_0x2d1581(0x546)+_0x2d1581(0x54f)+_0x2d1581(0x56e)+'if'),_0x328ba9['fillS'+_0x2d1581(0x31a)]=_0x5a8e86?_0x2d1581(0x1cf):_0xe3ed3[_0x2d1581(0x2e6)],_0x2f7ffd['fillT'+_0x2d1581(0x61b)](_0x474fcb,_0xe3ed3[_0x2d1581(0x302)](_0x2cfd9b,_0x573a06/(0xa21*-0x1+-0x193a+0x235d)),_0xe3ed3['SyQED'](_0xe3ed3['xpwtG'](_0x32caa1,_0xe3ed3[_0x2d1581(0x63e)](_0x4cb7bf,-0x12d1+-0x20b1+-0x896*-0x6)),_0xe3ed3[_0x2d1581(0x286)](0x5e9*0x1+-0xdd3+0x3*0x2a6,_0x333208)));}return _0xb79c75[_0x2d1581(0x672)+'d'](_0x36b7ca,_0x1635e5),_0xb79c75;}function _0x54f90b(_0x5b197e,_0x3b26c5){var _0x6f54ad=_0x3995f1,_0x6f9e5f=document['creat'+'eElem'+_0x6f54ad(0x570)](_0x5b7184[_0x6f54ad(0x636)]);return _0x6f9e5f[_0x6f54ad(0x55e)+_0x6f54ad(0x4ef)]=_0x6f54ad(0x255)+'te'+(_0x3b26c5?_0x6f54ad(0x262):''),_0x6f9e5f[_0x6f54ad(0x4cb)+'onten'+'t']=_0x5b197e,_0x6f9e5f;}function _0x20d599(_0x53be49,_0x5e6e0b,_0x34268e,_0x280d14,_0x4ad135){var _0x39b6ce=_0x3995f1,_0x1d221a={'TmtJI':function(_0x50d918,_0x46076b){var _0x4996c3=_0x1047;return _0x45abbd[_0x4996c3(0x693)](_0x50d918,_0x46076b);},'ZXGXd':_0x45abbd[_0x39b6ce(0x436)]};if(_0x45abbd['ZKRAI'](_0x39b6ce(0x563),_0x39b6ce(0x1e8))){var _0x5f01fe=document[_0x39b6ce(0x764)+'eElem'+_0x39b6ce(0x570)]('div');_0x5f01fe['class'+_0x39b6ce(0x4ef)]=_0x45abbd['smXwb'](_0x45abbd['PIpgw'],_0x34268e?_0x45abbd['uRnMV']:'');var _0x2b88ba=document['creat'+'eElem'+'ent']('div');_0x2b88ba['class'+_0x39b6ce(0x4ef)]=_0x39b6ce(0x78d)+_0x39b6ce(0x3d5)+'ad';var _0x2e446c=document[_0x39b6ce(0x764)+_0x39b6ce(0x287)+'ent'](_0x39b6ce(0x5af));_0x2e446c[_0x39b6ce(0x55e)+'Name']=_0x45abbd[_0x39b6ce(0x373)];var _0x5c968c=document['creat'+_0x39b6ce(0x287)+_0x39b6ce(0x570)](_0x39b6ce(0x1d1)+'g');_0x5c968c[_0x39b6ce(0x4cb)+_0x39b6ce(0x620)+'t']=_0x53be49,_0x2e446c[_0x39b6ce(0x672)+_0x39b6ce(0x3ee)+'d'](_0x5c968c);if(_0x280d14){if(_0x45abbd[_0x39b6ce(0x40a)](_0x45abbd[_0x39b6ce(0x2d4)],'DTJOM')){var _0x5844ad=_0x5f4622(_0x34268e,_0x488350=>{var _0x4a2a4d=_0x39b6ce;_0x5f01fe[_0x4a2a4d(0x55e)+_0x4a2a4d(0x59f)]['toggl'+'e']('on',_0x488350),_0x5b7184[_0x4a2a4d(0x5b9)](_0x280d14,_0x488350);});_0x2b88ba['appen'+'d'](_0x2e446c,_0x5844ad);}else{if(_0x59f2dd['__sak'+'ura'])return;_0x59e5db['add'](_0x1d221a['TmtJI'](_0x1d221a['ZXGXd'],_0x1d221a[_0x39b6ce(0x6cc)](_0xa3c865['butto'+'n'],-0x211*-0x7+0x2551+-0x33c7)));var _0x3a9106=_0x432964[_0x49cba0[_0x39b6ce(0x5fc)+'n']+(0x1*-0x2cf+0x194c+-0x167c)];if(_0x3a9106){_0x3a9106[_0x39b6ce(0x2bb)](_0x1c9335[_0x39b6ce(0x388)]());if(_0x3a9106['lengt'+'h']>0x564+-0xf14+0x9d8)_0x3a9106['shift']();}}}else _0x2b88ba['appen'+_0x39b6ce(0x3ee)+'d'](_0x2e446c);_0x5f01fe['appen'+_0x39b6ce(0x3ee)+'d'](_0x2b88ba);if(_0x4ad135&&_0x4ad135[_0x39b6ce(0x5f8)+'h']){var _0x4b8378=document['creat'+'eElem'+_0x39b6ce(0x570)]('div');_0x4b8378['class'+'Name']=_0x45abbd[_0x39b6ce(0x6a4)];var _0x299ed3=document[_0x39b6ce(0x764)+_0x39b6ce(0x287)+'ent'](_0x39b6ce(0x5af));_0x299ed3[_0x39b6ce(0x55e)+_0x39b6ce(0x4ef)]=_0x45abbd[_0x39b6ce(0x624)],_0x299ed3['textC'+_0x39b6ce(0x620)+'t']=_0x5e6e0b,_0x4b8378['appen'+_0x39b6ce(0x3ee)+'d'](_0x299ed3);for(var _0x2c27ee of _0x4ad135)_0x4b8378[_0x39b6ce(0x672)+_0x39b6ce(0x3ee)+'d'](_0x2c27ee);_0x5f01fe[_0x39b6ce(0x672)+'dChil'+'d'](_0x4b8378);}return _0x5f01fe;}else _0x54ae8c[_0x39b6ce(0x5d0)+'aptur'+'e']=_0x1ee7cf,_0x4f86cd();}var _0xec9f16=[{'id':'comba'+'t','label':_0x3995f1(0x479)+'t'},{'id':_0x3995f1(0x4fa),'label':_0x45abbd[_0x3995f1(0x221)]},{'id':_0x3995f1(0x6dd)+'l','label':_0x3995f1(0x446)+'l'},{'id':'misc','label':_0x45abbd[_0x3995f1(0x633)]},{'id':'safe','label':_0x3995f1(0x5dd)+'y'}];function _0x4be6cf(){var _0x3a0486=_0x3995f1,_0x2d6ce4={'YRvdS':function(_0x552ce4){return _0x552ce4();},'ByTJJ':_0x5b7184[_0x3a0486(0x682)]},_0x2e86c2=_0xdf5aa[_0x3a0486(0x713)+_0x3a0486(0x73e)]?_0x5b7184[_0x3a0486(0x581)]:_0xdf5aa['uwmk']?_0x5b7184['jgLIo'](_0x5b7184[_0x3a0486(0x2cd)](_0x5b7184['bYyUY'](_0x5b7184['FGGkq']('UWMK\x20'+_0x3a0486(0x4d3)+'\x20'+(_0xdf5aa['hooks'+_0x3a0486(0x47e)]?_0x5b7184[_0x3a0486(0x677)](_0x5b7184[_0x3a0486(0x6be)](_0xdf5aa['hooks'+'Ok'],'/')+_0xdf5aa[_0x3a0486(0x483)+_0x3a0486(0x47e)],_0x5b7184[_0x3a0486(0x75f)]):_0x3a0486(0x1ef)+_0x3a0486(0x57e)+_0x3a0486(0x788)+_0x3a0486(0x603)+'ff)'),_0x5b7184[_0x3a0486(0x586)]),_0xdf5aa['gameL'+_0x3a0486(0x422)]?_0x5b7184[_0x3a0486(0x6eb)]:'loadi'+'ng'),_0x5b7184[_0x3a0486(0x303)]),_0xdf5aa['shoot'+'ers']?_0x5b7184[_0x3a0486(0x53d)]:_0x5b7184[_0x3a0486(0x5f0)])+(_0x3a0486(0x445)+_0x3a0486(0x74c)+'t\x20')+(_0xdf5aa[_0x3a0486(0x34b)+'ents']?_0x5b7184[_0x3a0486(0x53d)]:_0x3a0486(0x49a)):_0x5b7184['lVBSB'];if(_0xdf5aa[_0x3a0486(0x661)+_0x3a0486(0x28a)])_0x2e86c2+=_0x5b7184[_0x3a0486(0x417)](_0x3a0486(0x4c3)+_0x3a0486(0x252),_0xdf5aa[_0x3a0486(0x661)+'rror']);return _0x20d599(_0x3a0486(0x5f7)+'s',_0x2e86c2,_0xdf5aa['uwmk'],null,[_0x2654ec('240\x20F'+_0x3a0486(0x29a)+'lock',_0x3a0486(0x38e)+_0x3a0486(0x441)+_0x3a0486(0x770)+_0x3a0486(0x266)+'plica'+_0x3a0486(0x2ca)+'set_t'+_0x3a0486(0x3cc)+_0x3a0486(0x32b)+'Rate',_0x1cb1ce(_0x3a0486(0x271),()=>{var _0x4b886f=_0x3a0486,_0x5f1886={'VPcVY':function(_0x21099b){var _0x369d08=_0x1047;return _0x2d6ce4[_0x369d08(0x78c)](_0x21099b);}};try{if(_0x4b886f(0x593)==='MJzUF')_0x583504['hookN'+'oReco'+'il']=_0x4e992c,_0x5f1886[_0x4b886f(0x1f6)](_0x1a7f48);else{if(_0x3d63ab)_0x3d63ab[_0x4b886f(0x44f)]('Unity'+_0x4b886f(0x60c)+_0x4b886f(0x5b1)+_0x4b886f(0x1fc)+_0x4b886f(0x47b),_0x2d6ce4[_0x4b886f(0x4cf)],[0x1*-0x2489+-0x638*0x1+0x2bb1*0x1]);}}catch(_0x5eb43b){}}))]);}function _0x2dedb1(_0x594e4a){var _0x260b3a=_0x3995f1,_0xaaa695={'Ditkg':function(_0x487f6e,_0x449716,_0xa570c2){return _0x487f6e(_0x449716,_0xa570c2);},'IbgSM':'godDi'+'e','rjFpJ':function(_0x5bb2e3,_0x108181,_0x45236a){return _0x5bb2e3(_0x108181,_0x45236a);},'ctYXO':_0x260b3a(0x550),'FyyFB':function(_0x4d7729){return _0x4d7729();},'YBKsi':function(_0x34e116,_0x1b36d0){return _0x34e116!==_0x1b36d0;},'avcWK':function(_0x311850){return _0x311850();},'nwGea':function(_0x1e677c){return _0x1e677c();},'tgIks':function(_0x2bebc6,_0x2bcd26,_0xb594f5,_0xba207f,_0x2d8c07){var _0x1047bc=_0x260b3a;return _0x45abbd[_0x1047bc(0x460)](_0x2bebc6,_0x2bcd26,_0xb594f5,_0xba207f,_0x2d8c07);},'zPOcE':_0x45abbd['RUlng'],'pWTVR':function(_0xf8aef9,_0x42c169){return _0xf8aef9/_0x42c169;},'FpayI':_0x260b3a(0x591),'WHXot':'px\x20ui'+_0x260b3a(0x501)+'-seri'+'f,sys'+'tem-u'+_0x260b3a(0x54f)+'s-ser'+'if','VQrBN':function(_0x1803ce,_0x435024){return _0x1803ce+_0x435024;},'TENKX':function(_0x4fbf3d,_0x30fbc7){return _0x4fbf3d*_0x30fbc7;},'QNqVm':_0x260b3a(0x528)+'22,8,'+'16,0.'+'7)','SaSXB':_0x260b3a(0x528)+_0x260b3a(0x741)+'35,24'+'0,0.8'+')','kvGVb':function(_0x2fae3c,_0x36f757){return _0x2fae3c+_0x36f757;},'iidyw':_0x260b3a(0x2b7)+'e','cWzom':function(_0x286ac0,_0x304484){var _0x1d4299=_0x260b3a;return _0x45abbd[_0x1d4299(0x3fa)](_0x286ac0,_0x304484);},'nSWyz':_0x260b3a(0x73a),'hmqZt':function(_0x1d9370){return _0x1d9370();},'wMXXn':function(_0x16fff3,_0x3e1334){var _0x34a338=_0x260b3a;return _0x45abbd[_0x34a338(0x610)](_0x16fff3,_0x3e1334);},'pcBMW':function(_0x23f3c2){return _0x45abbd['INLIq'](_0x23f3c2);},'FcXDJ':function(_0x1c45b1,_0x516391){return _0x1c45b1||_0x516391;},'xPxPR':_0x45abbd[_0x260b3a(0x389)]};if(_0x45abbd[_0x260b3a(0x1eb)](_0x594e4a,'comba'+'t')){if(_0x45abbd['LPHLI']===_0x260b3a(0x69f)){var _0x14671b=_0x7587a9[_0x260b3a(0x764)+'eElem'+'ent'](_0x5b7184[_0x260b3a(0x636)]);_0x14671b[_0x260b3a(0x55e)+'Name']=_0x260b3a(0x308)+'ody';var _0x3c242a=_0x25411b[_0x260b3a(0x764)+_0x260b3a(0x287)+_0x260b3a(0x570)](_0x260b3a(0x5af));_0x3c242a[_0x260b3a(0x55e)+_0x260b3a(0x4ef)]=_0x5b7184[_0x260b3a(0x38d)],_0x3c242a[_0x260b3a(0x4cb)+_0x260b3a(0x620)+'t']=_0x2911cd,_0x14671b[_0x260b3a(0x672)+'dChil'+'d'](_0x3c242a);for(var _0x245ec8 of _0x611530)_0x14671b[_0x260b3a(0x672)+_0x260b3a(0x3ee)+'d'](_0x245ec8);_0x5aca7b[_0x260b3a(0x672)+'dChil'+'d'](_0x14671b);}else return[_0x4be6cf(),_0x45abbd[_0x260b3a(0x774)](_0x20d599,_0x260b3a(0x627)+_0x260b3a(0x73e),_0x45abbd[_0x260b3a(0x4c7)],_0x3eb972[_0x260b3a(0x44c)],_0x4c1695=>{var _0x4fcd20=_0x260b3a;_0x3eb972[_0x4fcd20(0x44c)]=_0x4c1695,_0x333973(),_0xaaa695[_0x4fcd20(0x33e)](_0x4d42c8,_0x4fcd20(0x44c),_0x4c1695),_0x4d42c8(_0xaaa695[_0x4fcd20(0x6b2)],_0x4c1695);},[]),_0x45abbd[_0x260b3a(0x3cd)](_0x20d599,'No\x20Re'+'coil','Skips'+_0x260b3a(0x326)+_0x260b3a(0x3f9)+_0x260b3a(0x35c)+_0x260b3a(0x6c9)+_0x260b3a(0x60f)+'\x20reco'+_0x260b3a(0x750)+_0x260b3a(0x536)+_0x260b3a(0x517)+'r\x20adv'+_0x260b3a(0x518),_0x3eb972['noRec'+_0x260b3a(0x6e9)],_0x5703ea=>{var _0x5a158c=_0x260b3a;_0x3eb972[_0x5a158c(0x47a)+'oil']=_0x5703ea,_0x333973(),_0xaaa695['rjFpJ'](_0x4d42c8,_0x5a158c(0x47a)+_0x5a158c(0x6e9),_0x5703ea);},[]),_0x20d599(_0x260b3a(0x6fa)+'read',_0x45abbd[_0x260b3a(0x378)],_0x3eb972[_0x260b3a(0x21b)+_0x260b3a(0x3f2)],_0x1a1693=>{var _0x34cf43=_0x260b3a;if('Qxwjz'===_0xaaa695['ctYXO']){if(_0x99629c[_0x1dc6bd]&&_0x4461dd[_0x144908][_0x34cf43(0x4e8)+'ed'])_0x168ae2++;}else _0x3eb972['noSpr'+_0x34cf43(0x3f2)]=_0x1a1693,_0xaaa695[_0x34cf43(0x634)](_0x333973);},[]),_0x45abbd[_0x260b3a(0x34e)](_0x20d599,_0x45abbd[_0x260b3a(0x704)],_0x45abbd[_0x260b3a(0x201)],_0x3eb972[_0x260b3a(0x314)+'Exp'],_0x58fd19=>{var _0x1386b2=_0x260b3a;_0x3eb972['rapid'+_0x1386b2(0x2b8)]=_0x58fd19,_0x5b7184[_0x1386b2(0x598)](_0x333973);},[]),_0x20d599(_0x260b3a(0x36e)+'e\x20[EX'+'P]','Overw'+_0x260b3a(0x5a5)+'\x20Over'+_0x260b3a(0x386)+'eapon'+'\x20dama'+_0x260b3a(0x51c)+_0x260b3a(0x312)+_0x260b3a(0x3e5)+_0x260b3a(0x6d0)+_0x260b3a(0x6e2)+_0x260b3a(0x48a)+_0x260b3a(0x6ef)+'s.',_0x3eb972[_0x260b3a(0x5c2)+'eExp'],_0x597a9d=>{var _0x592951=_0x260b3a;_0x3eb972[_0x592951(0x5c2)+_0x592951(0x4e9)]=_0x597a9d,_0x333973();},[_0x2654ec('Damag'+_0x260b3a(0x505)+'ue',null,_0x587a29(_0x3eb972[_0x260b3a(0x5c2)+'eValu'+'e'],-0x1*0xec5+0x1efe+-0x102f,-0x1fd7+0x1*-0x1a23+-0x3*-0x13fa,0x1d2f+0x3bb+-0x20e5,_0x17dbae=>{var _0x4bd3bc=_0x260b3a,_0x4a8d86={'sPDlt':_0x4bd3bc(0x743)+'check'+'ed','jXqxN':_0x5b7184[_0x4bd3bc(0x371)],'SwuLV':function(_0x31ff33,_0x1a7441){return _0x31ff33(_0x1a7441);}};if(_0x4bd3bc(0x756)!==_0x5b7184['OmtUM'])_0x3eb972['damag'+'eValu'+'e']=_0x17dbae,_0x5b7184[_0x4bd3bc(0x2cc)](_0x333973);else{_0x3984df[_0x4bd3bc(0x32c)+_0x4bd3bc(0x1f9)+_0x4bd3bc(0x4e6)]();var _0x328809=_0x14ca0c[_0x4bd3bc(0x3d8)+_0x4bd3bc(0x245)+'te'](_0x4a8d86['sPDlt'])!==_0x4a8d86['jXqxN'];_0x534719[_0x4bd3bc(0x41a)+_0x4bd3bc(0x245)+'te']('aria-'+_0x4bd3bc(0x453)+'ed',_0x19eec7(_0x328809)),_0x4a8d86[_0x4bd3bc(0x212)](_0x34a7f3,_0x328809);}}))]),_0x45abbd[_0x260b3a(0x3c7)](_0x20d599,_0x45abbd['pOtDi'],'Refil'+_0x260b3a(0x220)+_0x260b3a(0x3c4)+_0x260b3a(0x223)+'\x20cach'+_0x260b3a(0x48c)+_0x260b3a(0x292)+_0x260b3a(0x4f9)+_0x260b3a(0x41b)+'\x20200m'+'s.',_0x3eb972['infAm'+'moExp'],_0x2d6188=>{_0x3eb972['infAm'+'moExp']=_0x2d6188,_0x333973();},[_0x54f90b(_0x45abbd['WzCdC'])])];}if(_0x45abbd[_0x260b3a(0x40a)](_0x594e4a,_0x260b3a(0x4fa)))return[_0x20d599(_0x45abbd['bTFTn'],'Scale'+'s\x20all'+_0x260b3a(0x6ea)+_0x260b3a(0x331)+_0x260b3a(0x1e3)+_0x260b3a(0x3a5)+_0x260b3a(0x5da)+_0x260b3a(0x686)+_0x260b3a(0x37b)+'celer'+_0x260b3a(0x4e6)+'.',_0x3eb972[_0x260b3a(0x3a5)+_0x260b3a(0x33a)]!==-0xa09*0x1+-0x133*0x6+0x119f,null,[_0x45abbd['SINaq'](_0x2654ec,_0x45abbd['FsHjC'],_0x45abbd[_0x260b3a(0x6f1)],_0x587a29(_0x3eb972[_0x260b3a(0x3a5)+_0x260b3a(0x33a)],0x244*0x6+-0x213c*-0x1+-0x2ea2,0x26d1+-0x17*0xc8+-0x17*0xdb,-0x25bb*0x1+0x10f+0x24b1,_0x5131a9=>{var _0x58f57f=_0x260b3a;_0x3eb972[_0x58f57f(0x3a5)+_0x58f57f(0x33a)]=_0x5131a9,_0xaaa695['FyyFB'](_0x333973);}))]),_0x45abbd['hKXJN'](_0x20d599,'Jump\x20'+_0x260b3a(0x5d4)+'vity',_0x45abbd[_0x260b3a(0x4c1)],_0x3eb972[_0x260b3a(0x6ac)+'ct']!==-0xfc9+-0x1b86+0x2bb3||_0x45abbd['BMWOL'](_0x3eb972['gravi'+'tyPct'],0x1b53+-0x7e2+-0x130d*0x1),null,[_0x2654ec(_0x260b3a(0x4bd)+'%',null,_0x45abbd[_0x260b3a(0x739)](_0x587a29,_0x3eb972[_0x260b3a(0x6ac)+'ct'],0x1*-0x4e5+0x66b*0x1+-0x11*0x14,-0x15e6+0x1*0x26fd+0x19*-0xa3,0x265c+0x31d*-0x6+0x7*-0x2cf,_0x3d5cd0=>{var _0x1bed75=_0x260b3a;_0x3eb972[_0x1bed75(0x6ac)+'ct']=_0x3d5cd0,_0x5b7184[_0x1bed75(0x60d)](_0x333973);})),_0x2654ec(_0x45abbd['kYQUL'],_0x45abbd['cpkBB'],_0x587a29(_0x3eb972[_0x260b3a(0x23a)+'tyPct'],-0xd2e+0xc75+0xc3,0xe12+0x208d+-0x2dd7,-0x7d+0x43*-0x86+0x33c*0xb,_0x553d01=>{var _0x56967a=_0x260b3a;_0x5b7184[_0x56967a(0x329)](_0x56967a(0x35b),'qHLfw')?(_0x43f573['damag'+_0x56967a(0x5ba)+'e']=_0x439990,_0xa13351()):(_0x3eb972['gravi'+_0x56967a(0x6f7)]=_0x553d01,_0x333973());}))]),_0x20d599(_0x45abbd[_0x260b3a(0x4e3)],_0x45abbd[_0x260b3a(0x4ca)],_0x3eb972[_0x260b3a(0x3c5)],_0x12444d=>{var _0x1e4de0=_0x260b3a;_0xaaa695[_0x1e4de0(0x6e4)](_0x1e4de0(0x55f),_0x1e4de0(0x55f))?_0x2f03ac['clear']():(_0x3eb972[_0x1e4de0(0x3c5)]=_0x12444d,_0x333973());},[])];if(_0x594e4a==='visua'+'l')return[_0x20d599(_0x260b3a(0x2a2)+'rokes',_0x45abbd[_0x260b3a(0x1e2)],_0x3eb972[_0x260b3a(0x29c)+'rokes'],_0x133a5e=>{var _0x117185=_0x260b3a;_0x3eb972['keyst'+_0x117185(0x57b)]=_0x133a5e,_0x333973();},[_0x45abbd['SINaq'](_0x2654ec,'Posit'+_0x260b3a(0x47b),null,_0x45abbd['kuiYF'](_0x52a0b5,_0x3eb972[_0x260b3a(0x2fa)],[['bl',_0x45abbd['gVnUJ']],['br',_0x260b3a(0x3a3)+_0x260b3a(0x30e)+'ht'],['ml','Left\x20'+_0x260b3a(0x2b7)+'e']],_0x4ad59c=>{var _0x2d2994=_0x260b3a;_0x3eb972[_0x2d2994(0x2fa)]=_0x4ad59c,_0x333973();})),_0x2654ec('Size',null,_0x587a29(_0x3eb972[_0x260b3a(0x358)+'le'],-0x3b+0x270b+-0x26d0+0.6,0x26*0x61+0x114f+0x7ed*-0x4+0.6000000000000001,-0x1*0xe43+-0x11d5+0x1a*0x13c+0.05,_0x332efd=>{var _0x4097e8=_0x260b3a;_0x3eb972['ksSca'+'le']=_0x332efd,_0xaaa695[_0x4097e8(0x685)](_0x333973);})),_0x2654ec(_0x260b3a(0x205)+'eadou'+'t',null,_0x5f4622(_0x3eb972['ksCps'],_0x4fdcda=>{var _0x2c02be=_0x260b3a;_0x5b7184[_0x2c02be(0x399)]!==_0x5b7184[_0x2c02be(0x587)]?(_0x3eb972[_0x2c02be(0x42b)]=_0x4fdcda,_0x333973()):(_0x2656fb[_0x2c02be(0x47a)+_0x2c02be(0x6e9)]=_0x2ddb55,_0x2f32db(),_0x69b998(_0x2c02be(0x47a)+_0x2c02be(0x6e9),_0x4cf6b8));}))]),_0x45abbd[_0x260b3a(0x67d)](_0x20d599,_0x260b3a(0x53a)+_0x260b3a(0x368),_0x45abbd['pNtQq'],_0x3eb972[_0x260b3a(0x3aa)+'hair'],_0x4b2c47=>{_0x3eb972['cross'+'hair']=_0x4b2c47,_0x333973();},[_0x2654ec(_0x45abbd['hGxSE'],null,_0x587a29(_0x3eb972['chSiz'+'e'],-0x23e*-0x8+-0x18a2+0x6b2+0.5,0x407*-0x4+-0x14cd+0x24eb+0.5,0x12e9*-0x1+-0x7*0x378+0x2b31*0x1+0.1,_0x502e37=>{var _0x61caea=_0x260b3a;_0x3eb972[_0x61caea(0x709)+'e']=_0x502e37,_0xaaa695[_0x61caea(0x662)](_0x333973);})),_0x2654ec(_0x260b3a(0x64f),null,_0x4d6cd1(_0x3eb972['chCol'+'or'],_0x407204=>{var _0x1fb552=_0x260b3a;_0x3eb972[_0x1fb552(0x6f4)+'or']=_0x407204,_0x5b7184['zcpqH'](_0x333973);}))]),_0x20d599(_0x260b3a(0x6bb)+'ers',_0x45abbd[_0x260b3a(0x66f)],_0x3eb972[_0x260b3a(0x1ff)],null,[_0x45abbd[_0x260b3a(0x263)](_0x2654ec,_0x260b3a(0x39f)+_0x260b3a(0x45f)+'r',null,_0x5f4622(_0x3eb972['fps'],_0x5e41eb=>{var _0x4609b0=_0x260b3a;_0xaaa695['YBKsi'](_0xaaa695[_0x4609b0(0x31d)],_0x4609b0(0x6e0))?(_0xaaa695[_0x4609b0(0x54d)](_0x33d1f9,_0x3c7e47,0x5*0x34f+0x8a*0x33+-0x2bc1*0x1,_0x4609b0(0x4ed),_0x2f6aef),_0x2655a6(_0x40da8a,-0x1*-0x1d63+-0x994+0x22b*-0x9,_0x4609b0(0x4ed),_0xa03d3c)):(_0x3eb972[_0x4609b0(0x1ff)]=_0x5e41eb,_0x333973());})),_0x54f90b('No\x20en'+_0x260b3a(0x629)+'ounte'+_0x260b3a(0x630)+'is\x20bu'+_0x260b3a(0x328)+_0x260b3a(0x5bf)+_0x260b3a(0x24d)+'isibl'+'ePlay'+'ers\x20t'+'o\x20pig'+_0x260b3a(0x203)+'k\x20on.')])];if(_0x45abbd['uRBrN'](_0x594e4a,_0x260b3a(0x35e))){if(_0x45abbd['fIQSI'](_0x260b3a(0x62a),'FpVAS'))return[_0x45abbd[_0x260b3a(0x554)](_0x20d599,'Adblo'+'ck','Hides'+_0x260b3a(0x428)+_0x260b3a(0x6cd)+_0x260b3a(0x75c)+_0x260b3a(0x469)+_0x260b3a(0x248),_0x3eb972[_0x260b3a(0x5a9)+'ck'],_0x9a3641=>{_0x3eb972['adblo'+'ck']=_0x9a3641,_0x333973();},[_0x54f90b('Takes'+_0x260b3a(0x773)+'ct\x20on'+'\x20relo'+_0x260b3a(0x752)+'en\x20to'+_0x260b3a(0x206)+'.')])];else{var _0x46f179=('15|8|'+_0x260b3a(0x6b7)+'5|7|1'+_0x260b3a(0x300)+_0x260b3a(0x20e)+_0x260b3a(0x711)+_0x260b3a(0x3ef)+_0x260b3a(0x31b))['split']('|'),_0x50f5f5=0x4f*-0x11+-0x25a6+-0x1*-0x2ae5;while(!![]){switch(_0x46f179[_0x50f5f5++]){case'0':_0x5c7dbd['textA'+_0x260b3a(0x500)]='cente'+'r';continue;case'1':_0x2ea3a7['fillT'+'ext'](_0x372644,_0x1d5d55+_0xaaa695[_0x260b3a(0x48d)](_0x374b7e,0x141c+0x1bb6+-0x2fd0),_0x521eed+_0x498b12/(-0x4*0x12e+0x263b+-0x2181)-(_0xec4702?(-0x15b6*-0x1+-0x2133+0x1*0xb82)*_0x32f70f:0x4*0x49d+-0x2534+0x12c0));continue;case'2':_0x561a30&&(_0x1862c4['font']=_0xaaa695['FpayI']+_0x1040bb[_0x260b3a(0x6ba)]((-0x1*-0x13cf+0x11d8+-0x259e)*_0x14a01a)+_0xaaa695[_0x260b3a(0x342)],_0x429a69[_0x260b3a(0x5f3)+_0x260b3a(0x31a)]=_0x47044a?_0x260b3a(0x1cf):_0x260b3a(0x528)+_0x260b3a(0x741)+'35,24'+_0x260b3a(0x476)+'5)',_0x17646b['fillT'+'ext'](_0xc153e3,_0x1bb7b5+_0xaaa695['pWTVR'](_0x43823f,-0x237f+0x1c72+0x70f),_0xaaa695[_0x260b3a(0x28c)](_0x1fbef4,_0xaaa695[_0x260b3a(0x48d)](_0x1f9582,-0xb*0x113+-0x1f+0x5f9*0x2))+_0xaaa695['TENKX'](-0x1f*-0x97+-0x2273+-0x1*-0x1032,_0x567d07)));continue;case'3':if(_0x5470be[_0x260b3a(0x6ba)+_0x260b3a(0x706)])_0x9c265f['round'+_0x260b3a(0x706)](_0x20c571,_0x3a85df,_0x3a54dd,_0x128334,(-0xdbd+0x1fb2+0x22*-0x87)*_0x4f260a);else _0xf9ecf4[_0x260b3a(0x241)](_0x18e1f6,_0x459da3,_0xc08153,_0x50e46c);continue;case'4':_0x573916['resto'+'re']();continue;case'5':_0x2db6a0[_0x260b3a(0x5f3)+'tyle']=_0x47044a?'rgba('+_0x260b3a(0x697)+_0x260b3a(0x688)+_0x260b3a(0x5ec)+'5)':_0xaaa695['QNqVm'];continue;case'6':_0x1ff664[_0x260b3a(0x5f3)+_0x260b3a(0x31a)]=_0x47044a?'#fff':_0xaaa695[_0x260b3a(0x3c3)];continue;case'7':_0x272b7b['fill']();continue;case'8':_0x316cd7['save']();continue;case'9':_0x36f266[_0x260b3a(0x254)]=_0xaaa695[_0x260b3a(0x55a)](_0x260b3a(0x459)+_0x35e0ca[_0x260b3a(0x6ba)]((-0x13f*-0x11+0x134+-0x1657)*_0x3d7a26),_0x260b3a(0x59e)+'-sans'+'-seri'+_0x260b3a(0x6bd)+_0x260b3a(0x546)+_0x260b3a(0x54f)+_0x260b3a(0x56e)+'if');continue;case'10':_0xf886a3[_0x260b3a(0x673)+_0x260b3a(0x37e)]();continue;case'11':_0x4202c9[_0x260b3a(0x514)+_0x260b3a(0x747)+'ne']=_0xaaa695[_0x260b3a(0x36b)];continue;case'12':_0x4b9ca9['strok'+_0x260b3a(0x464)+'e']=_0x47044a?_0x33e4f3:_0x260b3a(0x528)+_0x260b3a(0x697)+_0x260b3a(0x688)+_0x260b3a(0x52c)+'5)';continue;case'13':_0xf26447['lineW'+_0x260b3a(0x6f8)]=-0x2*0xc8b+0xe97+0xa80;continue;case'14':_0x47044a&&(_0x305ca8['shado'+'wColo'+'r']=_0x6ca077,_0x1d6898[_0x260b3a(0x20d)+'wBlur']=0xbf2*0x3+0x72*-0x11+-0x13a*0x17,_0x4bcb74['fill'](),_0x5bfd3e[_0x260b3a(0x20d)+_0x260b3a(0x45e)]=0x1*-0x24a9+0x18d*0x3+-0x11*-0x1e2);continue;case'15':var _0x47044a=_0xae4b41['has'](_0x5e3d1f);continue;case'16':_0x5689fc[_0x260b3a(0x2bd)+'e']();continue;}break;}}}return[_0x20d599(_0x260b3a(0x571)+'Mode\x20'+'(over'+_0x260b3a(0x359)+'nly)',_0x45abbd['bakqA'],_0x3eb972[_0x260b3a(0x713)+_0x260b3a(0x73e)],_0x291bae=>{var _0x2d1da6=_0x260b3a;_0x3eb972['safeM'+_0x2d1da6(0x73e)]=_0x291bae,_0x333973(),location[_0x2d1da6(0x572)+'d']();},[_0x54f90b(_0x45abbd[_0x260b3a(0x4c9)])]),_0x20d599(_0x45abbd['traHN'],_0x260b3a(0x38c)+_0x260b3a(0x4f3)+_0x260b3a(0x36a)+'ls\x20a\x20'+'WASM\x20'+'tramp'+'oline'+'\x20for\x20'+'the\x20w'+_0x260b3a(0x3c2)+_0x260b3a(0x3d4)+'load.'+'\x20ALL\x20'+'OFF\x20b'+_0x260b3a(0x5b8)+'ault\x20'+'-\x20a\x20s'+_0x260b3a(0x526)+_0x260b3a(0x1d4)+_0x260b3a(0x51d)+'oes\x20n'+'ot\x20ma'+_0x260b3a(0x2d9)+_0x260b3a(0x3a0)+'al\x20me'+'thod\x20'+'throw'+_0x260b3a(0x46e)+_0x260b3a(0x46d)+_0x260b3a(0x325)+_0x260b3a(0x423)+_0x260b3a(0x3a8)+_0x260b3a(0x4ff)+_0x260b3a(0x6d2)+_0x260b3a(0x690)+_0x260b3a(0x3a1)+_0x260b3a(0x3be)+'alled'+'.\x20Tur'+'n\x20the'+'m\x20on\x20'+_0x260b3a(0x232)+_0x260b3a(0x1e0)+_0x260b3a(0x46c)+_0x260b3a(0x572)+'d,\x20an'+_0x260b3a(0x4cc)+_0x260b3a(0x1d0)+_0x260b3a(0x240)+_0x260b3a(0x584)+_0x260b3a(0x294)+'d\x20cho'+_0x260b3a(0x41c)+'n.',_0x3eb972['hookG'+'od']||_0x3eb972['hookG'+_0x260b3a(0x78b)]||_0x3eb972[_0x260b3a(0x1e5)+_0x260b3a(0x5e9)+'il']||_0x3eb972[_0x260b3a(0x5d0)+_0x260b3a(0x5fb)+'e'],_0xc5d91e=>{var _0x5ef137=_0x260b3a,_0x47751c={'UEmGB':function(_0x353d2b,_0x3fca8f){var _0x5bcf1d=_0x1047;return _0x5b7184[_0x5bcf1d(0x6c0)](_0x353d2b,_0x3fca8f);}};if(_0x5b7184[_0x5ef137(0x6c0)]('kEBPo',_0x5b7184['wJMxq'])){if(_0x2c8c38[_0x154c1a]['id']&&_0x47751c['UEmGB'](_0xb049ce[_0xe38f41]['id'][_0x5ef137(0x23b)+'Of'](_0x5ef137(0x43d)+_0x5ef137(0x578)),-0x171*0x7+-0x204a*-0x1+-0x1633))_0x1ea474[_0x85f004][_0x5ef137(0x541)][_0x5ef137(0x601)+'ay']='none';}else _0x3eb972['hookG'+'od']=_0xc5d91e,_0x3eb972[_0x5ef137(0x45a)+_0x5ef137(0x78b)]=_0xc5d91e,_0x3eb972[_0x5ef137(0x1e5)+_0x5ef137(0x5e9)+'il']=_0xc5d91e,_0x3eb972[_0x5ef137(0x5d0)+_0x5ef137(0x5fb)+'e']=_0xc5d91e,_0x5b7184['gyFCG'](_0x333973),location[_0x5ef137(0x572)+'d']();},[_0x54f90b('Appli'+'es\x20on'+'\x20relo'+_0x260b3a(0x27e)),_0x45abbd[_0x260b3a(0x263)](_0x2654ec,'god\x20('+'OHeal'+_0x260b3a(0x4a9)+_0x260b3a(0x2bf)+'eTake'+_0x260b3a(0x4b0)+'h)',null,_0x45abbd[_0x260b3a(0x4ba)](_0x5f4622,_0x3eb972[_0x260b3a(0x45a)+'od'],_0x41cb15=>{var _0x5e7809=_0x260b3a;_0x3eb972[_0x5e7809(0x45a)+'od']=_0x41cb15,_0x333973();})),_0x2654ec(_0x45abbd['uAqYb'],null,_0x45abbd['gUcgV'](_0x5f4622,_0x3eb972['hookG'+_0x260b3a(0x78b)],_0x4d9ed4=>{var _0x17f1b4=_0x260b3a;_0xaaa695['cWzom'](_0xaaa695['nSWyz'],_0xaaa695[_0x17f1b4(0x1f3)])?(_0x3eb972['hookG'+_0x17f1b4(0x78b)]=_0x4d9ed4,_0x333973()):(_0x485841(_0x35718d,0x1*0x449+0x1931+-0x2e*0xa1,_0x17f1b4(0x4ed),0x3*0x9b3+-0xdbf+0x106*-0xf+0.1),_0x23b84e(_0x2894f5,-0x26a8+0xda3+0x1965,_0x17f1b4(0x4ed),0x6e1+-0x61d*-0x5+0x2*-0x12b9+0.1));})),_0x2654ec(_0x260b3a(0x47a)+'oil\x20('+_0x260b3a(0x293)+_0x260b3a(0x1ea)+_0x260b3a(0x6aa)+'ck)',null,_0x5f4622(_0x3eb972[_0x260b3a(0x1e5)+_0x260b3a(0x5e9)+'il'],_0x2e6b4b=>{var _0x27c758=_0x260b3a;_0x3eb972['hookN'+_0x27c758(0x5e9)+'il']=_0x2e6b4b,_0xaaa695['hmqZt'](_0x333973);})),_0x2654ec(_0x45abbd['ALVnW'],_0x260b3a(0x250)+'eats\x20'+_0x260b3a(0x27f)+_0x260b3a(0x49d)+'ut\x20th'+'is',_0x45abbd[_0x260b3a(0x64a)](_0x5f4622,_0x3eb972['hookC'+_0x260b3a(0x5fb)+'e'],_0x2995bc=>{var _0x3a4078=_0x260b3a;_0xaaa695[_0x3a4078(0x38b)](_0x3a4078(0x2a9),_0x3a4078(0x2c1))?(_0x3eb972['hookC'+_0x3a4078(0x5fb)+'e']=_0x2995bc,_0xaaa695[_0x3a4078(0x2ee)](_0x333973)):(_0x53c910=new _0x124bfe(),_0x35ce9e[_0x3a4078(0x2fe)](_0x266cd8,_0x784b61));}))]),_0x45abbd[_0x260b3a(0x282)](_0x20d599,_0x260b3a(0x671)+_0x260b3a(0x21c)+'r',_0x260b3a(0x42e)+_0x260b3a(0x73f)+_0x260b3a(0x5bd)+_0x260b3a(0x2eb)+'etect'+'ors\x20a'+_0x260b3a(0x485)+'rtup\x20'+'via\x20S'+'topDe'+_0x260b3a(0x6c1)+_0x260b3a(0x659)+_0x260b3a(0x65e)+_0x260b3a(0x280),_0x3eb972[_0x260b3a(0x787)+_0x260b3a(0x69b)],_0x45d260=>{var _0x1d0daf=_0x260b3a;_0x3eb972[_0x1d0daf(0x787)+_0x1d0daf(0x69b)]=_0x45d260,_0x333973();},[_0x54f90b(_0x45abbd[_0x260b3a(0x716)],!![])]),_0x20d599(_0x45abbd['kOeWH'],'These'+_0x260b3a(0x465)+_0x260b3a(0x569)+'ver-v'+_0x260b3a(0x5fd)+_0x260b3a(0x3e0)+_0x260b3a(0x79c),!![],null,[_0x45abbd['lfaGw'](_0x2654ec,_0x260b3a(0x56d)+'my\x20se'+_0x260b3a(0x2b9)+'s',null,_0x1cb1ce(_0x45abbd[_0x260b3a(0x76c)],()=>{var _0x4d1c41=_0x260b3a,_0x2b0750={'nILsU':function(_0x4c8628,_0x45ef45){return _0xaaa695['FcXDJ'](_0x4c8628,_0x45ef45);}};_0xaaa695[_0x4d1c41(0x66c)]!=='XcitS'?(_0x3eb972={..._0x432b56},_0x333973(),location['reloa'+'d']()):(_0x45070c[_0x4d1c41(0x5f3)+_0x4d1c41(0x31a)]=_0x2b0750[_0x4d1c41(0x1fd)](_0x272bca,'rgba('+_0x4d1c41(0x741)+_0x4d1c41(0x6fb)+_0x4d1c41(0x3db)+'5)'),_0x2eeb44['fillT'+'ext'](_0xb8a42c,_0x72ff2f,_0x188077),_0xf9480a+=0xe77*0x1+0x30a+0x5f*-0x2f);}))])];}var _0x52ecad=null;function _0x46ff6b(_0x34b63f){var _0x23221c=_0x3995f1;_0x3ddd38=_0x34b63f;if(!_0x52ecad){if('HWiYS'!==_0x23221c(0x2f4)){var _0x7c8db1=_0x3d272d['creat'+'eElem'+_0x23221c(0x570)](_0x5b7184[_0x23221c(0x636)]);return _0x7c8db1['class'+_0x23221c(0x4ef)]=_0x5b7184['qtDjW'](_0x23221c(0x255)+'te',_0x373b1f?_0x23221c(0x262):''),_0x7c8db1[_0x23221c(0x4cb)+'onten'+'t']=_0x32a45a,_0x7c8db1;}else{var _0x3d33b5=_0x45abbd[_0x23221c(0x576)][_0x23221c(0x5b3)]('|'),_0x25d83f=-0x1fae+-0x8e1*-0x1+0x16cd;while(!![]){switch(_0x3d33b5[_0x25d83f++]){case'0':_0x48b95e['textC'+_0x23221c(0x620)+'t']=_0x4584a0;continue;case'1':_0x56fa53['appen'+'dChil'+'d'](_0x52ecad);continue;case'2':_0x56fa53[_0x23221c(0x672)+_0x23221c(0x3ee)+'d'](_0x48b95e);continue;case'3':_0x45abbd['wtkJU'](requestAnimationFrame,()=>_0x52ecad[_0x23221c(0x55e)+'List'][_0x23221c(0x4b2)](_0x23221c(0x339)));continue;case'4':var _0x48b95e=document[_0x23221c(0x764)+_0x23221c(0x287)+_0x23221c(0x570)](_0x23221c(0x541));continue;case'5':_0x52ecad=_0x7558e5();continue;}break;}}}_0x52ecad[_0x23221c(0x55e)+_0x23221c(0x59f)][_0x23221c(0x1e6)+'e'](_0x45abbd['HZedb'],_0x34b63f);}function _0x37af78(){_0x5b7184['kDBLe'](_0x46ff6b,!_0x3ddd38);}function _0x7558e5(){var _0x146198=_0x3995f1,_0x24acd6={'VLaGv':_0x5b7184['fJqSx'],'KABqy':_0x146198(0x605)+'e','OLOap':_0x5b7184['PtLNl'],'rcSst':function(_0x1b5a29,_0x2323fd){var _0x441e4f=_0x146198;return _0x5b7184[_0x441e4f(0x268)](_0x1b5a29,_0x2323fd);},'fNgqV':_0x146198(0x486),'ulBNP':_0x146198(0x79a),'GsTgw':_0x5b7184[_0x146198(0x4c0)],'pQwem':function(_0x13ff0d,_0xc1d80,_0x3bf0d8){var _0x4557ab=_0x146198;return _0x5b7184[_0x4557ab(0x37c)](_0x13ff0d,_0xc1d80,_0x3bf0d8);},'ZPBlg':_0x146198(0x23d)+'A\x20KOU'+'R\x20v1.'+'1'},_0x59cdf9=document[_0x146198(0x764)+_0x146198(0x287)+_0x146198(0x570)]('div');_0x59cdf9[_0x146198(0x55e)+_0x146198(0x4ef)]=_0x146198(0x652)+'nel';var _0x31e8ce=document['creat'+_0x146198(0x287)+'ent'](_0x5b7184['gOVNw']);_0x31e8ce['class'+_0x146198(0x4ef)]=_0x146198(0x430)+'de';var _0x1faddd=document['creat'+_0x146198(0x287)+_0x146198(0x570)](_0x5b7184[_0x146198(0x636)]);_0x1faddd[_0x146198(0x55e)+_0x146198(0x4ef)]='mn-lo'+'go',_0x1faddd[_0x146198(0x306)+_0x146198(0x412)]=_0x5b7184[_0x146198(0x72f)],_0x31e8ce[_0x146198(0x672)+'dChil'+'d'](_0x1faddd);var _0x2b6903=document[_0x146198(0x764)+_0x146198(0x287)+'ent'](_0x146198(0x5af));_0x2b6903[_0x146198(0x55e)+_0x146198(0x4ef)]=_0x5b7184[_0x146198(0x2a0)];var _0x50b057=document[_0x146198(0x764)+'eElem'+'ent']('heade'+'r');_0x50b057[_0x146198(0x55e)+'Name']=_0x5b7184['XrQWs'];var _0x2a0eb3=document[_0x146198(0x764)+_0x146198(0x287)+'ent']('div');_0x2a0eb3['class'+'Name']='mn-ti'+_0x146198(0x4f6);var _0x126268=document[_0x146198(0x764)+_0x146198(0x287)+'ent']('h2');_0x126268[_0x146198(0x55e)+_0x146198(0x4ef)]=_0x5b7184[_0x146198(0x25c)],_0x126268[_0x146198(0x4cb)+'onten'+'t']=_0x5b7184['UxRbR'];var _0x55a10b=document['creat'+'eElem'+_0x146198(0x570)](_0x5b7184[_0x146198(0x273)]);_0x55a10b['class'+_0x146198(0x4ef)]=_0x5b7184[_0x146198(0x424)],_0x55a10b[_0x146198(0x4cb)+_0x146198(0x620)+'t']=_0x5b7184[_0x146198(0x309)],_0x2a0eb3[_0x146198(0x672)+'d'](_0x126268,_0x55a10b);var _0x258337=document[_0x146198(0x764)+_0x146198(0x287)+_0x146198(0x570)](_0x5b7184[_0x146198(0x599)]);_0x258337[_0x146198(0x272)]=_0x146198(0x5fc)+'n',_0x258337[_0x146198(0x55e)+_0x146198(0x4ef)]=_0x146198(0x746)+'ose',_0x258337[_0x146198(0x556)]=_0x5b7184['TpdjS'],_0x258337['inner'+_0x146198(0x412)]=_0x5b7184['wiJgD'],_0x258337['oncli'+'ck']=()=>_0x46ff6b(![]),_0x50b057[_0x146198(0x672)+'d'](_0x2a0eb3,_0x258337);var _0x2f9f5c=document[_0x146198(0x764)+_0x146198(0x287)+'ent'](_0x5b7184[_0x146198(0x636)]);_0x2f9f5c['class'+_0x146198(0x4ef)]=_0x5b7184[_0x146198(0x3e6)],_0x2b6903[_0x146198(0x672)+'d'](_0x50b057,_0x2f9f5c),_0x59cdf9[_0x146198(0x672)+'d'](_0x31e8ce,_0x2b6903);var _0x88b233=new Map();for(var _0x1ccdba of _0xec9f16){var _0x19a4e8=document['creat'+_0x146198(0x287)+_0x146198(0x570)](_0x146198(0x5fc)+'n');_0x19a4e8['type']=_0x146198(0x5fc)+'n',_0x19a4e8['class'+_0x146198(0x4ef)]='mn-ta'+'b',_0x19a4e8[_0x146198(0x556)]=_0x1ccdba['label'],_0x19a4e8['inner'+'HTML']=_0x146198(0x279)+'l>'+_0x1ccdba['label']+_0x5b7184[_0x146198(0x2df)],_0x19a4e8['oncli'+'ck']=(_0xae438b=>()=>_0x5305c5(_0xae438b))(_0x1ccdba['id']),_0x88b233[_0x146198(0x2fe)](_0x1ccdba['id'],_0x19a4e8),_0x31e8ce['appen'+_0x146198(0x3ee)+'d'](_0x19a4e8);}function _0x5305c5(_0x156538){var _0x73ce34=_0x146198,_0x5ed35c=(_0x73ce34(0x33d)+'|1|3|'+'4')['split']('|'),_0x223598=0xea9+-0x34*-0x7f+-0x2875;while(!![]){switch(_0x5ed35c[_0x223598++]){case'0':_0x2a6758['cat']=_0x156538;continue;case'1':_0x126268['textC'+_0x73ce34(0x620)+'t']=_0x24acd6[_0x73ce34(0x21d)]+_0x22ff51['label'];continue;case'2':_0x454393();continue;case'3':for(var [_0x4b6b3d,_0x37fd10]of _0x88b233)_0x37fd10[_0x73ce34(0x55e)+_0x73ce34(0x59f)][_0x73ce34(0x1e6)+'e'](_0x24acd6['KABqy'],_0x4b6b3d===_0x156538);continue;case'4':_0x2f9f5c['repla'+_0x73ce34(0x5c3)+_0x73ce34(0x3dc)](..._0x2dedb1(_0x156538));continue;case'5':var _0x22ff51=_0xec9f16['find'](_0x59b0c2=>_0x59b0c2['id']===_0x156538)||_0xec9f16[0x1*0x2a+0xba5+-0xbcf];continue;}break;}}return _0x5305c5(_0x2a6758['cat']||_0x146198(0x5e8)+'t'),setInterval(()=>{var _0x5da610=_0x146198,_0x268859={'ZLtDg':_0x5da610(0x324)+'8|12|'+'0|5|2'+'|9|4|'+_0x5da610(0x323)+_0x5da610(0x396)+_0x5da610(0x684),'OPhna':function(_0x5305fa,_0x32da2f){return _0x5305fa-_0x32da2f;},'KMWCq':function(_0x20deb0,_0x3135f1){return _0x20deb0+_0x3135f1;},'jxcAP':_0x5da610(0x528)+_0x5da610(0x697)+'07,15'+'7,0.3'+'5)','GWovw':function(_0x521621,_0x4cb12d){return _0x5b7184['oFlqR'](_0x521621,_0x4cb12d);},'OKFdD':_0x5b7184['pIqpZ'],'lVXpJ':function(_0x1c4c15,_0x28cad6,_0x1295e,_0x276c9a,_0x43e837,_0x24c075,_0x311dae){var _0x3f60d8=_0x5da610;return _0x5b7184[_0x3f60d8(0x209)](_0x1c4c15,_0x28cad6,_0x1295e,_0x276c9a,_0x43e837,_0x24c075,_0x311dae);},'NVcYq':'KeyA','cuniE':function(_0x29a3ab,_0x5603df){return _0x29a3ab/_0x5603df;},'vAeQr':function(_0x267224,_0x55a801){return _0x267224-_0x55a801;},'qCvao':function(_0x259c01,_0x244e68,_0x42d7d3,_0x476527,_0x9f68ef,_0x4880e6,_0xfc422e,_0xb2d7ad){return _0x259c01(_0x244e68,_0x42d7d3,_0x476527,_0x9f68ef,_0x4880e6,_0xfc422e,_0xb2d7ad);},'zWvoU':function(_0x2d8650,_0x5460e9){return _0x2d8650*_0x5460e9;},'fwYrl':_0x5da610(0x769),'HbIOG':_0x5b7184['jedVx'],'enZHW':_0x5da610(0x54c),'lQYti':function(_0x5973f8,_0x54f030){return _0x5973f8+_0x54f030;},'VSBHa':function(_0x5823ea,_0x110abc){return _0x5823ea+_0x110abc;},'JazxO':function(_0xc96ddd,_0x2248ad){return _0xc96ddd+_0x2248ad;},'CJZlD':'Space'};if(_0x5b7184[_0x5da610(0x3d7)]!==_0x5da610(0x2c9)){var _0x30f433=('3|0|8'+_0x5da610(0x449)+_0x5da610(0x34f)+_0x5da610(0x6f9))['split']('|'),_0x18468f=-0x589+-0xf8*0x1e+0x1*0x2299;while(!![]){switch(_0x30f433[_0x18468f++]){case'0':_0x1a7935['font']=_0x5da610(0x36c)+_0x5da610(0x39e)+'i-mon'+_0x5da610(0x72c)+_0x5da610(0x22f)+'ospac'+'e';continue;case'1':_0x449c67[_0x5da610(0x785)+'re']();continue;case'2':if(!_0x4048c6[_0x5da610(0x3d0)+_0x5da610(0x422)])_0x5a5662(_0x5da610(0x700)+_0x5da610(0x4d2)+_0x5da610(0x4fe)+'e…',_0x24acd6[_0x5da610(0x4ab)]);continue;case'3':_0x4d2136[_0x5da610(0x40f)]();continue;case'4':if(_0x4ff735['fps'])_0x24acd6['rcSst'](_0x5a5662,_0x1cb139+_0x24acd6[_0x5da610(0x61c)]);continue;case'5':_0x5db7e6['textB'+_0x5da610(0x747)+'ne']=_0x24acd6['ulBNP'];continue;case'6':var _0x5a5662=(_0xfbf6e4,_0x1a7cc4)=>{var _0x39ab8c=_0x5da610;_0x4e3d02['fillS'+_0x39ab8c(0x31a)]=_0x1a7cc4||_0x39ab8c(0x528)+_0x39ab8c(0x741)+'35,24'+_0x39ab8c(0x3db)+'5)',_0x4318ae['fillT'+_0x39ab8c(0x61b)](_0xfbf6e4,_0x15438c,_0x53d499),_0x53d499+=0x8b*-0x25+0x1558+-0x131;};continue;case'7':var _0x53d499=-0x1*0x18ce+-0x167e+0xe*0x364,_0x15438c=-0xc77*0x3+0x1*0x3e7+0x218a;continue;case'8':_0x563182['textA'+'lign']=_0x24acd6[_0x5da610(0x36f)];continue;case'9':_0x24acd6[_0x5da610(0x5fa)](_0x5a5662,_0x24acd6[_0x5da610(0x462)],_0x5da610(0x216)+'9d');continue;}break;}}else{if(!_0x3ddd38)return;var _0x2228f2=_0x2f9f5c['child'+'ren'];for(var _0x5e69e3=0x13ef+0x1c5+0x4*-0x56d;_0x5b7184[_0x5da610(0x6a7)](_0x5e69e3,_0x2228f2[_0x5da610(0x5f8)+'h']);_0x5e69e3++){var _0x32e172=_0x2228f2[_0x5e69e3]['query'+_0x5da610(0x2d0)+'tor'](_0x5b7184[_0x5da610(0x3ce)]);if(_0x32e172&&(_0x5b7184[_0x5da610(0x24a)](_0x32e172[_0x5da610(0x4cb)+'onten'+'t']['index'+'Of'](_0x5da610(0x5eb)),-0xb98+-0xa1*-0xb+-0x7*-0xab)||_0x32e172['textC'+'onten'+'t'][_0x5da610(0x23b)+'Of'](_0x5da610(0x4b9))===0x1b*0x116+0x165f+0x4b3*-0xb)){if(_0x5b7184[_0x5da610(0x53c)](_0x5da610(0x50b),_0x5b7184[_0x5da610(0x29f)])){var _0x3ca9be=_0x268859['ZLtDg'][_0x5da610(0x5b3)]('|'),_0xd8412f=0x1c35+-0x2*0xb56+-0x589;while(!![]){switch(_0x3ca9be[_0xd8412f++]){case'0':var _0x41db1c=_0x4299ef==='br'?_0x268859['OPhna'](_0x567c28['right']-(-0x183d+-0x2b*0x23+-0x2*-0xf17),_0x65db8f):_0x268859[_0x5da610(0x567)](_0x478abc['left'],-0x2348+-0x1*-0x9b9+0x199f);continue;case'1':var _0x2a363f=_0x268859['OPhna'](_0x65db8f,_0x4f64d4)/(0x26b9+0x92*-0x2c+0xb*-0x13d),_0x510927=_0x41adf9+(_0x87aff8+_0x4f64d4)*(-0x49c+0xaca+-0x62c);continue;case'2':var _0x39ca69=(_0x312ffc,_0x2fde06,_0x3c25ee,_0x211cf9,_0x29dc71,_0xe103e0,_0x8bb034)=>{var _0x1eed1f=_0x5da610,_0xa78a87=_0x4c5410[_0x1eed1f(0x3ec)](_0x2fde06);_0x516ea6['save'](),_0x43336c['begin'+'Path']();if(_0x199451[_0x1eed1f(0x6ba)+'Rect'])_0x4d2aff[_0x1eed1f(0x6ba)+_0x1eed1f(0x706)](_0x3c25ee,_0x211cf9,_0x29dc71,_0xe103e0,_0x463b83[_0x1eed1f(0x2be)](0xb31+-0x1*0x21c3+0x59*0x41,_0x4f0c68));else _0x47384a['rect'](_0x3c25ee,_0x211cf9,_0x29dc71,_0xe103e0);_0x1f0501['fillS'+_0x1eed1f(0x31a)]=_0xa78a87?_0x1eed1f(0x528)+'255,1'+'07,15'+_0x1eed1f(0x5ec)+'5)':_0x463b83[_0x1eed1f(0x1fb)],_0x569e0a['fill'](),_0x280a93[_0x1eed1f(0x674)+_0x1eed1f(0x6f8)]=0xea2*-0x1+-0x1*0x23bc+0x325f,_0x57d509[_0x1eed1f(0x2bd)+_0x1eed1f(0x464)+'e']=_0xa78a87?_0x2a0794:_0x463b83[_0x1eed1f(0x3b1)],_0x12344d[_0x1eed1f(0x2bd)+'e'](),_0xa78a87&&(_0x37122e[_0x1eed1f(0x20d)+_0x1eed1f(0x3fc)+'r']=_0x37ce97,_0x5199c7[_0x1eed1f(0x20d)+_0x1eed1f(0x45e)]=-0x1*-0x615+0x23*0xf6+-0x27a9,_0x648782[_0x1eed1f(0x20c)](),_0x334a27['shado'+_0x1eed1f(0x45e)]=0x15*0x95+0x142d+-0xb*0x2f2),_0x4852a1['fillS'+_0x1eed1f(0x31a)]=_0xa78a87?_0x1eed1f(0x1cf):_0x463b83['CccTU'],_0x16d8d9[_0x1eed1f(0x649)+_0x1eed1f(0x500)]=_0x463b83['fhXfK'],_0x5e3bcc[_0x1eed1f(0x514)+_0x1eed1f(0x747)+'ne']=_0x463b83['jHDOF'],_0x890f9[_0x1eed1f(0x254)]=_0x463b83[_0x1eed1f(0x717)](_0x463b83[_0x1eed1f(0x4f1)](_0x1eed1f(0x459),_0xc3e527[_0x1eed1f(0x6ba)]((0xc25+-0xeb1*0x1+-0x8*-0x53)*_0x4f0c68)),_0x1eed1f(0x59e)+'-sans'+_0x1eed1f(0x6bf)+'f,sys'+'tem-u'+'i,san'+_0x1eed1f(0x56e)+'if'),_0x5eba64['fillT'+_0x1eed1f(0x61b)](_0x312ffc,_0x463b83[_0x1eed1f(0x6d6)](_0x3c25ee,_0x29dc71/(0x1ecf+-0x4d2+-0x19fb)),_0x463b83[_0x1eed1f(0x364)](_0x463b83[_0x1eed1f(0x5d3)](_0x211cf9,_0x463b83[_0x1eed1f(0x474)](_0xe103e0,-0x2*-0x1214+0x10a4+-0x1a65*0x2)),_0x8bb034?_0x463b83[_0x1eed1f(0x2be)](0x1301+0x14a3+0x17*-0x1b9,_0x4f0c68):-0x15cb*-0x1+-0x22*0xbf+0x393)),_0x8bb034&&(_0x4ae39f['font']=_0x463b83['iaWyF'](_0x463b83[_0x1eed1f(0x1f2)]+_0x35bccf[_0x1eed1f(0x6ba)](_0x463b83[_0x1eed1f(0x2c0)](-0x467+-0x97d*0x1+0x1*0xded,_0x4f0c68)),'px\x20ui'+_0x1eed1f(0x501)+'-seri'+'f,sys'+_0x1eed1f(0x546)+_0x1eed1f(0x54f)+_0x1eed1f(0x56e)+'if'),_0x444e28['fillS'+'tyle']=_0xa78a87?_0x463b83['MPRHV']:_0x463b83[_0x1eed1f(0x668)],_0x3cda93['fillT'+_0x1eed1f(0x61b)](_0x8bb034,_0x3c25ee+_0x463b83[_0x1eed1f(0x375)](_0x29dc71,0x1f85+-0x12b1+-0xcd2),_0x463b83['lvGTn'](_0x211cf9+_0xe103e0/(-0x79b+0x4*0x2de+0x8d*-0x7),(-0x176*-0x13+0xfa6+0x4*-0xad8)*_0x4f0c68))),_0x47c81f[_0x1eed1f(0x785)+'re']();};continue;case'3':var _0x463b83={'cKiWQ':function(_0x3d987a,_0x5e66b3){return _0x3d987a*_0x5e66b3;},'HNauQ':_0x5da610(0x528)+_0x5da610(0x6ab)+'16,0.'+'7)','VTdDW':_0x268859[_0x5da610(0x597)],'CccTU':'rgba('+'255,2'+_0x5da610(0x6fb)+'0,0.8'+')','fhXfK':_0x5da610(0x79b)+'r','jHDOF':'middl'+'e','iaWyF':function(_0x3eee0b,_0x6c8c08){return _0x3eee0b+_0x6c8c08;},'kBBtL':function(_0x2013cc,_0x184347){return _0x2013cc+_0x184347;},'CuESh':function(_0x3cc858,_0x284bb2){return _0x3cc858+_0x284bb2;},'ccBSi':function(_0x283c0e,_0x2e6691){return _0x268859['OPhna'](_0x283c0e,_0x2e6691);},'IpnHM':function(_0x56dd05,_0x9aa329){return _0x56dd05+_0x9aa329;},'rbfKC':function(_0x48fb69,_0x16270b){var _0x4bbcb5=_0x5da610;return _0x268859[_0x4bbcb5(0x4c2)](_0x48fb69,_0x16270b);},'PlHoZ':'600\x20','lZUJG':function(_0x50d08b,_0x8bb457){return _0x50d08b*_0x8bb457;},'MPRHV':_0x5da610(0x1cf),'UxXbL':_0x268859[_0x5da610(0x1ed)],'HftkN':function(_0x1cd2cc,_0x5a6d50){return _0x1cd2cc/_0x5a6d50;},'lvGTn':function(_0x42ac08,_0x5b68f2){return _0x42ac08+_0x5b68f2;}};continue;case'4':_0x268859[_0x5da610(0x656)](_0x39ca69,'A',_0x268859[_0x5da610(0x3da)],_0x41db1c,_0x41adf9+_0x87aff8+_0x4f64d4,_0x87aff8,_0x87aff8);continue;case'5':var _0x41adf9=_0x4299ef==='ml'?_0x4a2724['top']+_0x268859[_0x5da610(0x56b)](_0x7d9955['heigh'+'t'],0x1c*0x71+-0x4f*0x77+0x185f)-_0xf5d431/(-0x1f9e+0x6f*-0x5+0xd3*0x29):_0x268859['vAeQr'](_0x48ef80[_0x5da610(0x740)+'m']-_0xf5d431,_0x4299ef==='bl'?-0x1a6*-0x1+0x1*-0x12fa+0x11b4:-0x1*0x1f8c+0x2c0+-0xeb1*-0x2);continue;case'6':_0x268859['qCvao'](_0x39ca69,'RMB',_0x5da610(0x703)+'3',_0x268859[_0x5da610(0x567)](_0x41db1c,_0x2a363f)+_0x4f64d4,_0x510927,_0x2a363f,_0x87aff8,_0x52d75['ksCps']?_0x268859[_0x5da610(0x567)](_0x536f9a(-0xeb0+0x4*0x139+0x3*0x345),_0x5da610(0x54c)):'');continue;case'7':_0x39ca69('S',_0x5da610(0x5cf),_0x268859[_0x5da610(0x567)](_0x41db1c,_0x87aff8)+_0x4f64d4,_0x41adf9+_0x87aff8+_0x4f64d4,_0x87aff8,_0x87aff8);continue;case'8':var _0x65db8f=_0x268859['zWvoU'](_0x87aff8,-0x2312+-0x9a9*-0x2+0x327*0x5)+_0x4f64d4*(0xf*-0x1d+0x2c3*0x8+-0x1*0x1463),_0xf5d431=_0x87aff8*(0x1e83*0x1+0x25e+-0x20de)+_0x4f64d4*(-0x1205+0x6fb+-0xb0c*-0x1);continue;case'9':_0x39ca69('W',_0x268859['fwYrl'],_0x268859['KMWCq'](_0x268859[_0x5da610(0x567)](_0x41db1c,_0x87aff8),_0x4f64d4),_0x41adf9,_0x87aff8,_0x87aff8);continue;case'10':_0x268859['qCvao'](_0x39ca69,_0x5da610(0x783),_0x268859['HbIOG'],_0x41db1c,_0x510927,_0x2a363f,_0x87aff8,_0x35fdca['ksCps']?_0x102f54(-0x3*-0xb95+-0x1326+0x2*-0x7cc)+_0x268859['enZHW']:'');continue;case'11':var _0x4f0c68=_0x107a18(_0x55b84a['ksSca'+'le'])||0xbaa*0x1+0x10a4+0x1*-0x1c4d,_0x87aff8=_0x268859['zWvoU'](-0x5*0x229+0x1b10+-0x1*0x1021,_0x4f0c68),_0x4f64d4=(0x1*-0xcb6+0xdb2*0x1+0x3e*-0x4)*_0x4f0c68;continue;case'12':var _0x4299ef=_0xccaacc[_0x5da610(0x2fa)];continue;case'13':_0x39ca69('D','KeyD',_0x268859[_0x5da610(0x75e)](_0x41db1c,_0x268859[_0x5da610(0x4af)](_0x87aff8,_0x4f64d4)*(-0x1a30*0x1+0xe68+0xbca)),_0x268859[_0x5da610(0x377)](_0x41adf9,_0x87aff8)+_0x4f64d4,_0x87aff8,_0x87aff8);continue;case'14':_0x39ca69('',_0x268859[_0x5da610(0x66e)],_0x41db1c,_0x268859['VSBHa'](_0x510927,_0x87aff8)+_0x4f64d4,_0x65db8f,_0x87aff8*(0x15b1+0x1c50+0x2f1*-0x11+0.45));continue;}break;}}else _0x32e172['textC'+'onten'+'t']=_0xdf5aa[_0x5da610(0x713)+'ode']?_0x5da610(0x466)+_0x5da610(0x6f5)+_0x5da610(0x31c)+_0x5da610(0x5d9)+_0x5da610(0x448)+'\x20no\x20h'+_0x5da610(0x77f)+'(relo'+_0x5da610(0x1fa)+_0x5da610(0x3cf)+')':_0xdf5aa['uwmk']?_0x5b7184[_0x5da610(0x677)](_0x5b7184['vaOpu'](_0x5b7184[_0x5da610(0x5e5)](_0x5b7184[_0x5da610(0x4d7)]('UWMK\x20'+_0x5da610(0x4d3)+'\x20',_0xdf5aa['hooks'+'Total']?_0xdf5aa[_0x5da610(0x483)+'Ok']+'/'+_0xdf5aa[_0x5da610(0x483)+_0x5da610(0x47e)]+_0x5b7184['siqZp']:_0x5b7184['bEGYk'])+_0x5b7184[_0x5da610(0x586)],_0xdf5aa[_0x5da610(0x3d0)+'oaded']?_0x5b7184['QHKCU']:_0x5b7184[_0x5da610(0x71f)])+('\x20|\x20sh'+_0x5da610(0x400)+'\x20')+(_0xdf5aa['shoot'+_0x5da610(0x52e)]?_0x5da610(0x6e3):_0x5da610(0x49a)),_0x5da610(0x445)+'vemen'+'t\x20'),_0xdf5aa[_0x5da610(0x34b)+_0x5da610(0x46b)]?_0x5b7184[_0x5da610(0x53d)]:_0x5da610(0x49a))+(_0xdf5aa[_0x5da610(0x661)+_0x5da610(0x28a)]?_0x5b7184[_0x5da610(0x78a)]('\x20|\x20ER'+_0x5da610(0x252),_0xdf5aa[_0x5da610(0x661)+_0x5da610(0x28a)]):''):'UWMK\x20'+_0x5da610(0x463)+_0x5da610(0x799)+_0x5da610(0x45d)+'ay\x20on'+_0x5da610(0x332)+_0x5da610(0x381)+'all\x20t'+_0x5da610(0x516)+_0x5da610(0x42d)+_0x5da610(0x69d);}}}},0x1*0xbd9+0x22ea+0xcf*-0x35),_0x59cdf9;}var _0x4584a0=_0x3995f1(0x3ed)+':host'+_0x3995f1(0x538)+_0x3995f1(0x616)+_0x3995f1(0x519)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x3995f1(0x4d1)+'-sizi'+_0x3995f1(0x2de)+_0x3995f1(0x3f8)+_0x3995f1(0x745)+_0x3995f1(0x6cf)+_0x3995f1(0x56a)+';\x20fon'+_0x3995f1(0x307)+'ily:\x20'+'\x22Inte'+_0x3995f1(0x316)+'Segoe'+'\x20UI\x22,'+_0x3995f1(0x680)+'em-ui'+_0x3995f1(0x2f3)+'s-ser'+_0x3995f1(0x62d)+_0x3995f1(0x3ed)+'.mn-p'+'anel\x20'+_0x3995f1(0x548)+_0x3995f1(0x33c)+_0x3995f1(0x582)+_0x3995f1(0x692)+_0x3995f1(0x2a4)+_0x3995f1(0x4f0)+_0x3995f1(0x719)+_0x3995f1(0x740)+_0x3995f1(0x5e4)+_0x3995f1(0x6c3)+'idth:'+'\x20min('+'620px'+_0x3995f1(0x222)+_0x3995f1(0x1dd)+_0x3995f1(0x229)+_0x3995f1(0x721)+_0x3995f1(0x726)+'x-hei'+_0x3995f1(0x29d)+'min(4'+_0x3995f1(0x26e)+_0x3995f1(0x421)+'(100v'+'h\x20-\x204'+_0x3995f1(0x2d7)+_0x3995f1(0x544)+_0x3995f1(0x4e5)+_0x3995f1(0x3cb)+':\x20fle'+_0x3995f1(0x3ca)+_0x3995f1(0x55c)+'px;\x20p'+'addin'+_0x3995f1(0x2fc)+'px;\x20b'+_0x3995f1(0x3f8)+_0x3995f1(0x228)+_0x3995f1(0x333)+'2px;\x20'+'point'+'er-ev'+'ents:'+_0x3995f1(0x729)+_0x3995f1(0x544)+'\x20\x20\x20ba'+'ckgro'+'und:\x20'+_0x3995f1(0x528)+'24,17'+',21,.'+_0x3995f1(0x5aa)+'backd'+_0x3995f1(0x439)+_0x3995f1(0x51e)+_0x3995f1(0x24e)+'r(22p'+_0x3995f1(0x2c4)+_0x3995f1(0x29b)+'e(150'+_0x3995f1(0x23f)+'webki'+_0x3995f1(0x3f4)+_0x3995f1(0x73b)+_0x3995f1(0x512)+_0x3995f1(0x22a)+_0x3995f1(0x379)+_0x3995f1(0x353)+_0x3995f1(0x6a9)+_0x3995f1(0x79d)+'50%);'+'\x0a\x20\x20\x20\x20'+_0x3995f1(0x2f8)+'-shad'+'ow:\x200'+'\x200\x200\x20'+_0x3995f1(0x5db)+'gba(2'+_0x3995f1(0x4da)+_0x3995f1(0x3fb)+_0x3995f1(0x3e3)+',\x20ins'+'et\x200\x20'+'1px\x200'+_0x3995f1(0x313)+_0x3995f1(0x757)+'255,2'+'55,.0'+'5),\x200'+_0x3995f1(0x454)+_0x3995f1(0x6f6)+_0x3995f1(0x313)+'(0,0,'+'0,.55'+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x3995f1(0x370)+'y:\x200;'+'\x20tran'+_0x3995f1(0x503)+_0x3995f1(0x780)+_0x3995f1(0x2b3)+_0x3995f1(0x6de)+'px);\x20'+_0x3995f1(0x737)+_0x3995f1(0x320)+_0x3995f1(0x239)+_0x3995f1(0x678)+_0x3995f1(0x2ce)+_0x3995f1(0x408)+'on:\x20o'+_0x3995f1(0x370)+_0x3995f1(0x32d)+_0x3995f1(0x695)+'e,\x20tr'+'ansfo'+_0x3995f1(0x467)+_0x3995f1(0x71b)+_0x3995f1(0x244)+'ezier'+'(.22,'+'1,.36'+_0x3995f1(0x77e)+_0x3995f1(0x425)+'\x20colo'+'r:\x20#f'+_0x3995f1(0x645)+';\x20fon'+_0x3995f1(0x3f0)+'e:\x2013'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x3995f1(0x59a)+_0x3995f1(0x779)+'shown'+_0x3995f1(0x3d6)+'acity'+_0x3995f1(0x37d)+'trans'+_0x3995f1(0x4ec)+_0x3995f1(0x678)+_0x3995f1(0x3c1)+'nter-'+_0x3995f1(0x791)+_0x3995f1(0x776)+_0x3995f1(0x524)+_0x3995f1(0x3ed)+'.mn-s'+'ide\x20{'+'\x20disp'+_0x3995f1(0x6b5)+_0x3995f1(0x705)+'\x20flex'+_0x3995f1(0x602)+'ction'+':\x20col'+_0x3995f1(0x6b1)+_0x3995f1(0x735)+'-item'+'s:\x20ce'+_0x3995f1(0x1f0)+_0x3995f1(0x461)+_0x3995f1(0x1d2)+_0x3995f1(0x689)+_0x3995f1(0x4d0)+_0x3995f1(0x6ed)+_0x3995f1(0x6e6)+_0x3995f1(0x712)+_0x3995f1(0x296)+'ing:\x20'+'12px\x20'+(_0x3995f1(0x23e)+_0x3995f1(0x298)+_0x3995f1(0x492)+_0x3995f1(0x4ae)+_0x3995f1(0x797)+'\x20\x20\x20\x20\x20'+'backg'+_0x3995f1(0x6ba)+_0x3995f1(0x53e)+'a(255'+_0x3995f1(0x4b7)+_0x3995f1(0x1d6)+_0x3995f1(0x420)+_0x3995f1(0x4df)+'shado'+_0x3995f1(0x411)+_0x3995f1(0x676)+'\x200\x200\x20'+'1px\x20r'+_0x3995f1(0x25d)+_0x3995f1(0x4da)+_0x3995f1(0x3fb)+',.05)'+';\x20}\x0a\x20'+_0x3995f1(0x281)+_0x3995f1(0x4b6)+_0x3995f1(0x4f8)+_0x3995f1(0x710)+_0x3995f1(0x654)+_0x3995f1(0x57d)+_0x3995f1(0x1d5)+_0x3995f1(0x480)+_0x3995f1(0x523)+_0x3995f1(0x758)+_0x3995f1(0x344)+':\x2032p'+'x;\x20he'+_0x3995f1(0x549)+_0x3995f1(0x2af)+';\x20}\x0a\x20'+_0x3995f1(0x281)+_0x3995f1(0x4b6)+'o-svg'+'\x20{\x20wi'+'dth:\x20'+'25px;'+'\x20heig'+'ht:\x202'+_0x3995f1(0x542)+'overf'+_0x3995f1(0x321)+'visib'+_0x3995f1(0x3a6)+_0x3995f1(0x51e)+_0x3995f1(0x410)+_0x3995f1(0x615)+_0x3995f1(0x33b)+'\x200\x204p'+_0x3995f1(0x5ab)+_0x3995f1(0x3d9)+_0x3995f1(0x43b)+_0x3995f1(0x78e)+'8));\x20'+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0x3995f1(0x66b)+_0x3995f1(0x336)+_0x3995f1(0x6b5)+'flex;'+_0x3995f1(0x795)+_0x3995f1(0x777)+_0x3995f1(0x646)+_0x3995f1(0x606)+_0x3995f1(0x24b)+_0x3995f1(0x5bb)+'conte'+'nt:\x20c'+'enter'+';\x20wid'+_0x3995f1(0x658)+'2px;\x20'+_0x3995f1(0x3b9)+_0x3995f1(0x58f)+'px;\x20b'+'order'+_0x3995f1(0x6ca)+_0x3995f1(0x3b8)+_0x3995f1(0x4ee)+'ius:\x20'+_0x3995f1(0x3af)+_0x3995f1(0x3ed)+'\x20\x20bac'+'kgrou'+_0x3995f1(0x5ed)+'ransp'+_0x3995f1(0x2d3)+';\x20col'+_0x3995f1(0x608)+'gba(2'+_0x3995f1(0x5a6)+_0x3995f1(0x3fe)+_0x3995f1(0x3c9)+'\x20curs'+'or:\x20p'+_0x3995f1(0x2ed)+'r;\x20fo'+'nt-si'+_0x3995f1(0x384)+_0x3995f1(0x406)+_0x3995f1(0x419)+'weigh'+'t:\x2070'+_0x3995f1(0x53b)+_0x3995f1(0x487)+_0x3995f1(0x508)+_0x3995f1(0x2a8)+_0x3995f1(0x30c)+'color'+':\x20rgb'+'a(246'+_0x3995f1(0x354)+_0x3995f1(0x41f)+_0x3995f1(0x3f3)+_0x3995f1(0x3ed)+_0x3995f1(0x679)+_0x3995f1(0x47c)+_0x3995f1(0x50a)+_0x3995f1(0x494)+_0x3995f1(0x545)+_0x3995f1(0x337)+_0x3995f1(0x284)+'ckgro'+'und:\x20'+'rgba('+_0x3995f1(0x697)+_0x3995f1(0x688)+_0x3995f1(0x276)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x3995f1(0x37a)+'n\x20{\x20f'+'lex:\x20'+_0x3995f1(0x6da)+_0x3995f1(0x681)+_0x3995f1(0x67f)+_0x3995f1(0x2f6)+'play:'+'\x20flex'+';\x20fle'+'x-dir'+_0x3995f1(0x44b)+_0x3995f1(0x6ae)+_0x3995f1(0x6c5)+'\x20}\x0a\x20\x20'+_0x3995f1(0x491)+'-top\x20'+'{\x20dis'+_0x3995f1(0x75d)+'\x20flex'+_0x3995f1(0x238)+_0x3995f1(0x702)+_0x3995f1(0x5c8)+'cente'+'r;\x20ga'+_0x3995f1(0x1f1)+'px;\x20p'+'addin'+'g:\x206p'+_0x3995f1(0x664)+'\x2012px'+_0x3995f1(0x625)+_0x3995f1(0x5ff)+'ect:\x20'+'none;'+_0x3995f1(0x5be)+'\x20\x20.mn'+_0x3995f1(0x233)+'es\x20{\x20'+_0x3995f1(0x346)+_0x3995f1(0x61e)+'in-wi'+'dth:\x20'+_0x3995f1(0x53b)+'\x20\x20\x20\x20.'+_0x3995f1(0x2aa)+'{\x20fon'+_0x3995f1(0x3f0)+_0x3995f1(0x3b7)+_0x3995f1(0x6ed)+_0x3995f1(0x527)+_0x3995f1(0x638)+':\x20650'+';\x20}\x0a\x20'+_0x3995f1(0x281)+_0x3995f1(0x529)+'\x20{\x20fo'+_0x3995f1(0x76f)+_0x3995f1(0x384)+'1px;\x20'+_0x3995f1(0x4ce))+('ty:\x20.'+_0x3995f1(0x44a)+'\x20\x20\x20\x20.'+_0x3995f1(0x746)+'ose\x20{'+_0x3995f1(0x336)+'lay:\x20'+'grid;'+_0x3995f1(0x3a9)+_0x3995f1(0x637)+'ms:\x20c'+_0x3995f1(0x606)+';\x20wid'+_0x3995f1(0x2e3)+'8px;\x20'+'heigh'+_0x3995f1(0x742)+_0x3995f1(0x355)+_0x3995f1(0x3f8)+_0x3995f1(0x6ca)+'borde'+_0x3995f1(0x4ee)+_0x3995f1(0x62e)+'8px;\x20'+'backg'+_0x3995f1(0x6ba)+_0x3995f1(0x780)+_0x3995f1(0x1de)+_0x3995f1(0x715)+_0x3995f1(0x444)+':\x20inh'+'erit;'+_0x3995f1(0x6d8)+_0x3995f1(0x65d)+'.45;\x20'+_0x3995f1(0x4d5)+_0x3995f1(0x433)+_0x3995f1(0x3eb)+_0x3995f1(0x3b3)+_0x3995f1(0x281)+'n-clo'+'se:ho'+_0x3995f1(0x496)+_0x3995f1(0x6d8)+'ity:\x20'+_0x3995f1(0x434)+'ckgro'+'und:\x20'+_0x3995f1(0x528)+_0x3995f1(0x741)+_0x3995f1(0x4da)+_0x3995f1(0x432)+');\x20}\x0a'+_0x3995f1(0x487)+_0x3995f1(0x746)+_0x3995f1(0x249)+_0x3995f1(0x2dd)+_0x3995f1(0x344)+':\x2014p'+_0x3995f1(0x553)+_0x3995f1(0x549)+'\x2014px'+';\x20fil'+'l:\x20no'+_0x3995f1(0x435)+'troke'+':\x20cur'+_0x3995f1(0x210)+_0x3995f1(0x640)+'\x20stro'+'ke-wi'+_0x3995f1(0x416)+_0x3995f1(0x670)+'roke-'+'linec'+_0x3995f1(0x495)+'ound;'+_0x3995f1(0x5be)+'\x20\x20.mn'+_0x3995f1(0x367)+_0x3995f1(0x397)+_0x3995f1(0x3b4)+_0x3995f1(0x5bc)+_0x3995f1(0x6d7)+_0x3995f1(0x6ff)+_0x3995f1(0x3ea)+_0x3995f1(0x754)+_0x3995f1(0x64b)+_0x3995f1(0x3a4)+_0x3995f1(0x601)+'ay:\x20g'+'rid;\x20'+'grid-'+_0x3995f1(0x52b)+_0x3995f1(0x64c)+_0x3995f1(0x407)+_0x3995f1(0x650)+'peat('+_0x3995f1(0x456)+_0x3995f1(0x398)+'\x20minm'+'ax(25'+_0x3995f1(0x68e)+_0x3995f1(0x6e7)+';\x20ali'+_0x3995f1(0x702)+_0x3995f1(0x5c8)+_0x3995f1(0x535)+_0x3995f1(0x238)+_0x3995f1(0x5f4)+_0x3995f1(0x727)+':\x20sta'+_0x3995f1(0x297)+'ap:\x201'+'0px;\x20'+_0x3995f1(0x45b)+_0x3995f1(0x22c)+'\x204px\x20'+_0x3995f1(0x478)+';\x20}\x0a\x20'+_0x3995f1(0x281)+'n-col'+_0x3995f1(0x54e)+'ebkit'+'-scro'+_0x3995f1(0x687)+'\x20{\x20wi'+_0x3995f1(0x416)+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x3995f1(0x37f)+_0x3995f1(0x69c)+_0x3995f1(0x68f)+_0x3995f1(0x267)+_0x3995f1(0x26f)+'bar-t'+'humb\x20'+_0x3995f1(0x350)+_0x3995f1(0x6b4)+_0x3995f1(0x236)+_0x3995f1(0x25d)+_0x3995f1(0x4da)+'5,255'+_0x3995f1(0x409)+_0x3995f1(0x552)+_0x3995f1(0x58b)+'adius'+_0x3995f1(0x6a5)+_0x3995f1(0x3b3)+_0x3995f1(0x2d1)+_0x3995f1(0x23c)+'d\x20{\x20b'+'order'+'-radi'+'us:\x201'+_0x3995f1(0x401)+'backg'+_0x3995f1(0x6ba)+':\x20rgb'+'a(255'+',255,'+'255,.'+'025);'+_0x3995f1(0x4df)+'shado'+_0x3995f1(0x411)+_0x3995f1(0x676)+_0x3995f1(0x374)+'1px\x20r'+_0x3995f1(0x25d)+_0x3995f1(0x4da)+_0x3995f1(0x3fb)+_0x3995f1(0x3e2)+_0x3995f1(0x3b3)+_0x3995f1(0x2d1)+_0x3995f1(0x23c)+'d.on\x20'+'{\x20bac'+_0x3995f1(0x6b4)+_0x3995f1(0x236)+_0x3995f1(0x25d)+'55,25'+_0x3995f1(0x3fb)+_0x3995f1(0x40d)+_0x3995f1(0x6a2)+_0x3995f1(0x213)+_0x3995f1(0x53f)+_0x3995f1(0x488)+'0\x200\x200'+'\x201px\x20'+'rgba('+'255,1'+'07,15'+'7,.28'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x3995f1(0x78d)+_0x3995f1(0x3d5)+'ad\x20{\x20'+_0x3995f1(0x601))+(_0x3995f1(0x691)+'lex;\x20'+'align'+'-item'+'s:\x20ce'+_0x3995f1(0x1f0)+'\x20gap:'+_0x3995f1(0x6c8)+'\x20padd'+'ing:\x20'+'11px\x20'+_0x3995f1(0x731)+_0x3995f1(0x5be)+_0x3995f1(0x246)+_0x3995f1(0x497)+'-titl'+'e\x20{\x20f'+_0x3995f1(0x6e6)+_0x3995f1(0x6da)+_0x3995f1(0x681)+_0x3995f1(0x67f)+_0x3995f1(0x3b3)+'\x20\x20\x20.s'+'k-car'+_0x3995f1(0x35f)+'le\x20st'+_0x3995f1(0x2e7)+'{\x20fon'+_0x3995f1(0x3f0)+'e:\x2013'+'px;\x20f'+_0x3995f1(0x527)+_0x3995f1(0x638)+':\x20600'+_0x3995f1(0x5ea)+_0x3995f1(0x608)+'gba(2'+_0x3995f1(0x5a6)+_0x3995f1(0x3fe)+_0x3995f1(0x631)+';\x20}\x0a\x20'+_0x3995f1(0x2d1)+_0x3995f1(0x23c)+_0x3995f1(0x285)+'.sk-c'+_0x3995f1(0x361)+_0x3995f1(0x1f7)+'stron'+_0x3995f1(0x772)+_0x3995f1(0x609)+'\x20#fff'+_0x3995f1(0x2f0)+_0x3995f1(0x64d)+'\x20.sk-'+_0x3995f1(0x2b0)+_0x3995f1(0x28b)+'dding'+':\x200\x201'+_0x3995f1(0x622)+'0px;\x20'+_0x3995f1(0x64d)+_0x3995f1(0x49c)+'mdesc'+_0x3995f1(0x575)+_0x3995f1(0x76f)+'ze:\x201'+_0x3995f1(0x204)+'opaci'+_0x3995f1(0x507)+_0x3995f1(0x6e1)+_0x3995f1(0x5c5)+_0x3995f1(0x740)+'m:\x206p'+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+_0x3995f1(0x2f1)+_0x3995f1(0x710)+'y:\x20fl'+'ex;\x20a'+_0x3995f1(0x2d5)+_0x3995f1(0x480)+':\x20cen'+'ter;\x20'+_0x3995f1(0x604)+'8px;\x20'+'paddi'+_0x3995f1(0x247)+_0x3995f1(0x471)+_0x3995f1(0x574)+'-size'+':\x2011.'+_0x3995f1(0x542)+'}\x0a\x20\x20\x20'+_0x3995f1(0x49c)+_0x3995f1(0x218)+'\x20{\x20fl'+_0x3995f1(0x3b4)+';\x20col'+'or:\x20r'+_0x3995f1(0x25d)+'46,23'+_0x3995f1(0x3fe)+_0x3995f1(0x214)+_0x3995f1(0x3b3)+_0x3995f1(0x2d1)+_0x3995f1(0x383)+'t\x20{\x20d'+_0x3995f1(0x710)+'y:\x20bl'+_0x3995f1(0x6f3)+_0x3995f1(0x419)+_0x3995f1(0x738)+_0x3995f1(0x579)+_0x3995f1(0x2bc)+_0x3995f1(0x348)+_0x3995f1(0x607)+_0x3995f1(0x64d)+'\x20.sk-'+_0x3995f1(0x32a)+_0x3995f1(0x317)+_0x3995f1(0x67e)+_0x3995f1(0x736)+_0x3995f1(0x66d)+'ve;\x20w'+_0x3995f1(0x590)+'\x2026px'+';\x20hei'+_0x3995f1(0x29d)+'14px;'+'\x20bord'+_0x3995f1(0x753)+';\x20bor'+'der-r'+_0x3995f1(0x1fe)+':\x2099p'+'x;\x20ba'+'ckgro'+'und:\x20'+'rgba('+'255,2'+_0x3995f1(0x4da)+_0x3995f1(0x41d)+');\x20cu'+_0x3995f1(0x790)+'\x20poin'+'ter;\x20'+'flex:'+_0x3995f1(0x678)+_0x3995f1(0x3b3)+'\x20\x20\x20.s'+_0x3995f1(0x643)+_0x3995f1(0x2a3)+_0x3995f1(0x6ec)+_0x3995f1(0x6af)+'ntent'+_0x3995f1(0x778)+_0x3995f1(0x4e7)+_0x3995f1(0x2cb)+_0x3995f1(0x51f)+'lute;'+_0x3995f1(0x6ad)+_0x3995f1(0x734)+_0x3995f1(0x63b)+':\x203px'+_0x3995f1(0x748)+_0x3995f1(0x3e9)+'px;\x20h'+'eight'+':\x208px'+';\x20bor'+_0x3995f1(0x58b)+_0x3995f1(0x1fe)+_0x3995f1(0x208)+_0x3995f1(0x5e2)+_0x3995f1(0x6b4)+'nd:\x20r'+'gba(2'+_0x3995f1(0x4da)+_0x3995f1(0x3fb)+',.25)'+_0x3995f1(0x2ce)+_0x3995f1(0x408)+_0x3995f1(0x771)+'eft\x20.'+'2s,\x20b'+'ackgr'+_0x3995f1(0x291)+_0x3995f1(0x301)+_0x3995f1(0x64d)+'\x20.sk-'+_0x3995f1(0x32a)+'h[ari'+_0x3995f1(0x26b)+_0x3995f1(0x39c)+_0x3995f1(0x3fd)+_0x3995f1(0x651)+'backg'+_0x3995f1(0x6ba)+_0x3995f1(0x53e))+(_0x3995f1(0x3d9)+',107,'+_0x3995f1(0x78e)+'25);\x20'+_0x3995f1(0x64d)+_0x3995f1(0x49c)+'switc'+'h[ari'+_0x3995f1(0x26b)+_0x3995f1(0x39c)+_0x3995f1(0x3fd)+_0x3995f1(0x730)+_0x3995f1(0x6df)+'{\x20lef'+_0x3995f1(0x253)+'px;\x20b'+_0x3995f1(0x4b1)+'ound:'+'\x20#ff6'+'b9d;\x20'+_0x3995f1(0x64d)+_0x3995f1(0x49c)+_0x3995f1(0x365)+_0x3995f1(0x596)+'ckgro'+_0x3995f1(0x393)+'rgba('+_0x3995f1(0x741)+_0x3995f1(0x4da)+_0x3995f1(0x5f5)+'5);\x20b'+'order'+_0x3995f1(0x6ca)+_0x3995f1(0x3b8)+_0x3995f1(0x4ee)+'ius:\x20'+'6px;\x20'+_0x3995f1(0x444)+':\x20#f6'+'eef2;'+_0x3995f1(0x296)+_0x3995f1(0x2fd)+'6px\x209'+_0x3995f1(0x6ed)+_0x3995f1(0x4e2)+_0x3995f1(0x289)+_0x3995f1(0x499)+'x;\x20ou'+'tline'+_0x3995f1(0x50c)+_0x3995f1(0x41e)+'x-sha'+_0x3995f1(0x392)+_0x3995f1(0x5f2)+'\x200\x200\x20'+'0\x201px'+'\x20rgba'+'(255,'+'255,2'+'55,.0'+_0x3995f1(0x76b)+_0x3995f1(0x3ed)+_0x3995f1(0x58d)+_0x3995f1(0x315)+_0x3995f1(0x405)+'n\x20{\x20b'+'ackgr'+_0x3995f1(0x2ec)+_0x3995f1(0x765)+'419;\x20'+_0x3995f1(0x64d)+_0x3995f1(0x49c)+'range'+_0x3995f1(0x259)+'splay'+_0x3995f1(0x45c)+_0x3995f1(0x2ae)+_0x3995f1(0x6fd)+_0x3995f1(0x533)+_0x3995f1(0x1e9)+_0x3995f1(0x4de)+_0x3995f1(0x5de)+_0x3995f1(0x20a)+'\x0a\x20\x20\x20\x20'+'.sk-s'+_0x3995f1(0x2db)+_0x3995f1(0x30f)+_0x3995f1(0x477)+_0x3995f1(0x72e)+_0x3995f1(0x3d3)+'e:\x20no'+_0x3995f1(0x351)+_0x3995f1(0x767)+_0x3995f1(0x4d8)+_0x3995f1(0x678)+';\x20wid'+'th:\x209'+'0px;\x20'+_0x3995f1(0x3b9)+_0x3995f1(0x34c)+_0x3995f1(0x278)+_0x3995f1(0x561)+'und:\x20'+'trans'+_0x3995f1(0x390)+'t;\x20}\x0a'+_0x3995f1(0x487)+'sk-sl'+_0x3995f1(0x311)+_0x3995f1(0x68f)+_0x3995f1(0x267)+'lider'+_0x3995f1(0x722)+_0x3995f1(0x613)+'track'+'\x20{\x20he'+_0x3995f1(0x549)+_0x3995f1(0x3e7)+'\x20bord'+_0x3995f1(0x2e4)+_0x3995f1(0x794)+_0x3995f1(0x3e7)+'\x20back'+_0x3995f1(0x3a2)+'d:\x20li'+_0x3995f1(0x5b0)+_0x3995f1(0x65b)+_0x3995f1(0x759)+'ff6b9'+'d,\x20#f'+_0x3995f1(0x334)+_0x3995f1(0x4bf)+_0x3995f1(0x52d)+_0x3995f1(0x56f)+_0x3995f1(0x5c9)+_0x3995f1(0x3dd)+_0x3995f1(0x665)+'repea'+_0x3995f1(0x589)+'ba(25'+_0x3995f1(0x3fb)+_0x3995f1(0x4b7)+'.08);'+_0x3995f1(0x5be)+'\x20\x20.sk'+_0x3995f1(0x6e8)+'er::-'+_0x3995f1(0x3f5)+_0x3995f1(0x4a7)+'der-t'+'humb\x20'+_0x3995f1(0x31f)+_0x3995f1(0x65f)+_0x3995f1(0x1ce)+_0x3995f1(0x73d)+_0x3995f1(0x50c)+'e;\x20wi'+'dth:\x20'+_0x3995f1(0x25a)+_0x3995f1(0x3b9)+_0x3995f1(0x4fc)+_0x3995f1(0x626)+_0x3995f1(0x5c5)+_0x3995f1(0x235)+_0x3995f1(0x6b3)+_0x3995f1(0x2f5)+_0x3995f1(0x2e4)+'dius:'+_0x3995f1(0x2c3)+_0x3995f1(0x4a2)+'groun'+'d:\x20#f'+'f6b9d'+';\x20}\x0a\x20'+_0x3995f1(0x2d1)+_0x3995f1(0x21a)+_0x3995f1(0x575)+_0x3995f1(0x76f)+'ze:\x201'+'1px;\x20'+_0x3995f1(0x419)+_0x3995f1(0x5d2)+'t:\x2060'+_0x3995f1(0x3bb)+'n-wid'+_0x3995f1(0x2e3)+'8px;\x20'+'text-'+_0x3995f1(0x735)+_0x3995f1(0x3ad)+_0x3995f1(0x4a3)+_0x3995f1(0x609)+'\x20rgba'+'(246,'+_0x3995f1(0x2da)+'42,.8'+_0x3995f1(0x2a5)+_0x3995f1(0x487)+_0x3995f1(0x531)+'lor\x20{')+(_0x3995f1(0x689)+'h:\x2034'+_0x3995f1(0x5df)+'eight'+_0x3995f1(0x3e1)+_0x3995f1(0x227)+'rder:'+'\x200;\x20b'+'order'+_0x3995f1(0x228)+'us:\x206'+_0x3995f1(0x355)+'ackgr'+'ound:'+_0x3995f1(0x678)+';\x20pad'+_0x3995f1(0x26d)+'\x200;\x20c'+'ursor'+_0x3995f1(0x3a7)+'nter;'+_0x3995f1(0x5be)+_0x3995f1(0x246)+_0x3995f1(0x219)+'\x20{\x20fo'+_0x3995f1(0x76f)+'ze:\x201'+_0x3995f1(0x204)+_0x3995f1(0x444)+_0x3995f1(0x53e)+'a(246'+_0x3995f1(0x354)+'242,.'+'5);\x20p'+_0x3995f1(0x5d6)+'g:\x202p'+_0x3995f1(0x58e)+'}\x0a\x20\x20\x20'+_0x3995f1(0x49c)+'note.'+_0x3995f1(0x2b6)+_0x3995f1(0x2d6)+_0x3995f1(0x343)+_0x3995f1(0x63d)+_0x3995f1(0x3b3)+_0x3995f1(0x2d1)+'k-btn'+_0x3995f1(0x538)+_0x3995f1(0x4e1)+'elf:\x20'+'flex-'+'start'+';\x20bor'+'der:\x20'+'0;\x20bo'+'rder-'+_0x3995f1(0x492)+_0x3995f1(0x4f2)+'x;\x20pa'+_0x3995f1(0x4f5)+_0x3995f1(0x6e5)+_0x3995f1(0x6dc)+_0x3995f1(0x5e2)+'kgrou'+_0x3995f1(0x28d)+_0x3995f1(0x337)+_0x3995f1(0x6b9)+_0x3995f1(0x29e)+_0x3995f1(0x61d)+_0x3995f1(0x574)+_0x3995f1(0x5ac)+_0x3995f1(0x65a)+'5px;\x20'+_0x3995f1(0x419)+_0x3995f1(0x5d2)+_0x3995f1(0x394)+'0;\x20cu'+_0x3995f1(0x790)+_0x3995f1(0x701)+'ter;\x20'+_0x3995f1(0x64d)+_0x3995f1(0x49c)+_0x3995f1(0x762)+_0x3995f1(0x4fd)+_0x3995f1(0x1d9)+'ter:\x20'+_0x3995f1(0x60b)+_0x3995f1(0x70e)+_0x3995f1(0x4ac)+_0x3995f1(0x3b3)+_0x3995f1(0x27c));window[_0x3995f1(0x64e)+'entLi'+_0x3995f1(0x40e)+'r']('keydo'+'wn',_0x46dd0b=>{var _0x25ea2c=_0x3995f1;_0x46dd0b['code']==='Inser'+'t'&&(_0x46dd0b[_0x25ea2c(0x5b5)+_0x25ea2c(0x2e2)+_0x25ea2c(0x2ea)](),_0x37af78());},!![]);var _0x565975=document['creat'+'eElem'+'ent'](_0x3995f1(0x5af));_0x565975[_0x3995f1(0x541)][_0x3995f1(0x5b4)+'xt']=_0x45abbd[_0x3995f1(0x2c5)],_0x565975[_0x3995f1(0x306)+_0x3995f1(0x412)]=_0x45abbd[_0x3995f1(0x319)],_0x565975['title']='Sakur'+'a\x20Kou'+'r',_0x565975[_0x3995f1(0x489)+'seent'+'er']=()=>_0x565975[_0x3995f1(0x541)]['opaci'+'ty']='1',_0x565975[_0x3995f1(0x489)+'selea'+'ve']=()=>_0x565975['style'][_0x3995f1(0x4ce)+'ty']=_0x3995f1(0x6c6),_0x565975[_0x3995f1(0x211)+'ck']=_0x186c7d=>{var _0x587606=_0x3995f1;_0x186c7d[_0x587606(0x32c)+_0x587606(0x1f9)+_0x587606(0x4e6)](),_0x37af78();},document[_0x3995f1(0x3e4)][_0x3995f1(0x672)+_0x3995f1(0x3ee)+'d'](_0x565975),_0x45abbd['lfHYh'](_0x5711f3),requestAnimationFrame(_0x7be633),console['log']('[saku'+'ra-ko'+_0x3995f1(0x555)+_0x3995f1(0x534)+_0x3995f1(0x551)+_0x3995f1(0x3c6)+':',_0xdf5aa[_0x3995f1(0x540)]);});})()));function _0x4c48(){var _0x2819d7=['A2z0v0y','AwfxEuy','zw51','nhb4oYa','zw5HyMW','nxmGy3u','igrLzMe','zxrL','y29Kzq','CNDeAKW','B3rOAw4','ndHWEcK','lxj1BM4','A0rctgu','DgLKzs4','zvj1BM4','ktSGBwe','BNrLBNq','phbHDgG','igf1Dg8','thzdBMG','EMzHrfq','B3nWywm','vKHjBfC','lwfWCgu','EwfPuKe','iL06oMe','mtjWEdS','BefmEem','sgvPz2G','idnWEdS','ywXPz24','B246ihi','Cg9PBNq','C2L6ztO','Cendrgy','z05rq1K','A2rYB3a','lMP1Bxa','CMfUy2u','B2rL','BgvZiem','yM90Dg8','mJu1ldi','DdOGmJG','yxjPys0','yLL5vvK','lwjVEdS','Bw4Ty2W','yxnLBgK','oYb3Awq','DNbOwhC','Aw5WDxq','ihWGC2G','DMvTzw4','ihWGz2e','uuHdswi','qxnZzw0','AwWGC3a','qvzXyu8','ywqGD2G','zxi6ida','CMzSB3C','odaSmtK','z29YwMm','kdi1nsW','DgvYoYa','zw50kcm','Bg9NBY0','CeLXCfO','igjHBM4','CgXHEtO','BffzDgK','C2LXwNa','y2vuEuO','nJTWB2K','yNrUoMG','B3n0zMK','y3jLyxq','icmYmJe','oJiXndC','ChbLyxi','yxj0lG','s2v5vW','tgTABgK','nsK7ih0','vwLor2u','u3Lzseu','igHVB2S','BNqTC2K','EuvUz2K','B246igW','zYb7igm','igvMzMu','wgfVt1q','CKjnqwW','CZOGyxu','BI1PDgu','oIaIiJS','yw5LBc4','yxnZAwC','ig5VigG','iJeUnsi','BhvLCY4','ldePoWO','B29RCYa','oIb0CMe','yw1Hz2u','mJzWEdS','te1c','mtzAsfrcqwG','CMvZDg8','r2vwAxG','ywn0A0S','BwvKicG','v1bqEw0','AeHpquK','B2reAwu','wvj2zfm','C2STy2e','mtu3lc4','tw92zw0','CNnVCJO','zxzLBNq','igDHDgu','BI5MAxi','zgL1CZO','igfSAwC','C1bmyK4','ChG7cIa','zwfKige','tKCGlsa','Dg9W','y2vUDgu','y2vZlG','yxrLkde','sw5ZDge','yxbWzwe','i2zMzG','ihDOAwm','C3rYB24','idrWEdS','CMLZAYa','DxjLihq','BgfJzs0','mJu1lc4','BNrLEhq','BMrvqum','EYbMAwW','zg9JDw0','su5msxe','l3jHCgK','yYGXmda','BNnWyxi','tKCG4Ocuia','DcbHihq','C2STC3C','u3fAt2u','BwvUDca','s3rYwgC','Ag9VA04','Dg9Nz2W','yxKGB24','zfnuyNG','ignLBNq','Be1VDgK','rKLZAva','reHsCK8','t0Tgzeq','zwCGzMe','mcbOB28','BNrLCJS','CdOGmti','ugXiB1O','BLnxExO','BerPzsK','u2XkAu0','vLbJvLK','AxrSzsa','AguGzNi','CM9WywC','ywqGDg8','se5HDve','BgLJyxq','BKLmC1u','ywrPDxm','zNbZ','zxjYB3i','v0vXyK0','mtqWnta2muvLuenrta','z3LIywm','mxb4oYa','q1btihi','z2DSzwq','mZmYmZu1zenVBunH','oIa1mcu','whfKuMG','ChG7ih0','yM90Aca','zMLSBa','C2HHzg8','mtz8mtq','uK1c','CMvUDem','B25JBgK','u3D1tfy','lxnOywq','lc43nsK','Aw5NicS','i2zMnMi','AfbuvMq','BgfIzwW','lw5VDgu','AY12ywW','BM9tChi','s2LSBgu','vKXHr3y','CI51As4','mJq1otK1nwDrsg5OvW','BhmGDgG','sKvPrMS','lcbJywW','Cg9Uj3m','uMf0zq','zgv2Awm','DhKGmc4','EdSGyM8','lxjHzgK','DNCGlsa','zxi6igi','u2jJD3q','BMC6ida','CMnLwhO','zwv6zsa','zsXTB24','yNvkzgG','ywLYlG','B25Lige','lxrPDgW','CNrPzgu','Dg9WoIa','BMq6ihi','pc9ZBwe','oYbHBgK','zw50CZO','z3jHDMK','Aw5KzxG','AY1Jyxi','u0flvvi','mdSGyM8','jsK7ic0','AcbVBMu','CMvJDa','y2HPBgq','uNvUDgK','yMLJlwi','DhjPyNu','icaUC2S','BMC6idq','B3rZlG','B3nLihm','sgDcsMe','oYbQDxm','Bg9Hzgu','ieDLDfy','oIbIBhu','igvUDgK','BM8Gy2G','tMTYq1O','uJOG','DdOGmtu','zM9UDa','C2STBM8','tK1YBve','tw92zq','B25PBNa','ihSGzgK','nNb4oYa','idqGnc4','q1bnAKy','z2jHkdi','wuX0rLa','mhW3','C3bHBG','ihnOB3q','igvYCG','v2zUz24','DxjDifu','Cur3r0W','BMuUqxa','A2L0lxm','wKXdwKW','rfzoseC','rLbtig8','ys1JAgu','zxG6mJe','zgLUzZO','odbWEcW','y3jVBgW','CYbpDMu','qxbWBhK','DhLWzq','uKXAvMi','svLjA1a','ndC0odm','nYWUmsK','re9nq28','EdSGyMe','phnTywW','yw5cBKS','tNHVuNG','icaG','v2vItw8','ywqU','D29YAYa','ie9olG','icaGlM0','u0nTAeu','ltiUns0','zdSGyMe','zc5VBIa','uvrts04','zuvSzw0','CMuGkfm','AxPLoIa','CNjVCG','ihSGCge','vLfYqK4','BMq6icm','BxfctKG','BgLUzvq','w3nHA3u','B3vUzca','Bw8GDg8','uMvJB2K','igj1AwW','tKPdAKm','ihbHzgq','CNq7igC','CMrLCI0','zsaOt0G','ufmGDw4','DhvYyxq','A2v5C3q','z2H0oIa','Bg9YoIa','se10DNy','Dwvnv0G','DMLTrLe','s2v5C3q','DgnOoJO','oYbYAwC','ktSGFqO','twfwCvy','khjLBg8','yJPOB3y','vgrbsfu','Bw4TAca','y1rNCwq','BwuG','u3rHDgu','EdSGywW','idmYChG','BwjVzhK','q3vZDg8','B1PNBMO','BNnSyxq','CMvHzey','C2XPy2u','zxjYihS','BwLKzgW','rxHW','DhrPBMC','mtv8ohW','ChvZAa','oYbVCge','C3rYB2S','y0TPv1e','AxrPyxq','BfPvsKC','wKXzEuq','uu9bzfK','iduWjtS','EcKGC2e','vuLRy3q','BgLUzw4','zw1LBNq','u2HHCNa','CfrIBMq','DgLVBI4','DgLVBJO','z3Lgq0C','uvHsvhm','oYb0CMe','lwXPBMu','u2vSzwm','icaGlNm','ELrfAem','yxjLBNq','BfHjBxK','BgLNBI0','ignVBg8','ohb4ksK','rerrBui','DgnOihq','mJm4ldi','BgLKzxi','B3bLCNq','DMCGEYa','BMC6igi','CffpBve','ugHpyxy','yNvUr3a','BNrezwy','DgG6idi','zxiTCMe','EeL4uwO','AevlCg8','CM9UzYa','DMC+','lJv6iIa','yxvSDa','ywDLigq','B3vUzdO','B2LUDgu','CgnctvC','zxjSyxK','mgy1oYa','Bcb7igq','D3jPDgu','lcbZyw4','sfDPwvm','igjVCMq','oYbKAxm','BvDTDu8','icbIB3G','zMLSBfq','A3nqB3m','ANH3Bgq','zZOGmta','Aw5NoIa','C2v0','DMfSDwu','m3WXmNW','lJjZoYa','uMTpCxC','qNzbr2K','C2vSzwm','y2fWtw8','Aw5Uzxi','Dc1Myw0','C2STBwi','C0Dzzvq','nxm0idi','sw5PDgK','zxiGEYa','y29TCgW','BsbYAwC','ihSGlxC','u2fRDxi','AwrLCJO','yw5Uywi','ihjNyMe','CMfWAwq','AwvSzca','CIiSici','Acb7iha','vwDHBhG','wfnxvKy','DhLSzq','mxWYFdq','lsbVDMu','ELbpy0u','AwXLzdO','EYaTD2u','zxiTzxy','Bg93oIa','AxHLzdS','n3WXm3W','m3WXmxW','BIbZAwC','ifjLy28','CYb3B24','AwXKigG','r1Ldre8','C3DPDgm','rNjHBwu','C3rVCfa','EsaUmZu','ignVB2W','4Ocuig92zq','zNztyLm','ie1VDMu','BhKGkhi','Dxm6idi','zJzIowq','C2STAgK','igrPC3a','zMy2yJK','DgvYo3C','C2HVD24','ugn0','zg93kda','AxrPB24','mhWYFdu','rgL0A2C','zxj2zxi','q2Los3i','oc00lJu','v0HyB3q','CJOGi2y','D2LKDgG','qsblt1u','zMXLEdO','yw5ZzM8','y2L0EtO','rvHqxq','y2uGB3y','Bw92zw0','DdOGoha','rNHnuha','uKDxtgm','nNW5Fdq','EYbIywm','BMu7ige','nJqXnJeZzwTvq1Pn','mNb4ksa','ldiZocW','ChG7igi','tgjXAhK','DMfS','A3nty2e','Bgf5ig8','CMLNAhq','CuHmzNC','Aw9UlLq','De5Vzgu','BwLZyW','zc10Axq','zciVpJW','yxjKlxq','igLMig0','C3rPBgW','y2ncu2K','zMLLBgq','rwrzCKu','lwnVBhm','AgfPCG','sev0zwu','BNn0ywW','AwLKExC','nJaWide','C2fRDxi','rgfTywC','r3nuz3C','CgfJAxq','tgHsDNa','j3qGC3q','D0HhAvO','idaGmca','sgz0A04','Dhj1zq','sMf6Ee8','tg1iExa','BhvYkdi','BI1TywK','DxmGywm','whjTvfi','oIaXoYa','ugf0Aa','ic5TBI0','zLnZvw0','zwLUC3q','mciGCJ0','AY1OAw4','EMu6ide','vwvtBMe','DgLKzvC','igzPBgW','BM93','thPhExa','lwjHBNi','D01ywg4','rwfJAca','vKzLuNi','y2fSBhm','y2fWDhu','CgfYzw4','mtySmc4','zg93oIa','Dw5KoIa','DdOGnZa','BMDL','mxWXmhW','ihSGzMW','zMLSBcW','venvDgm','yunXBLe','i2zMyJm','y2TLzd0','z2LMEq','mNb4ihu','rLbtigm','AguGCMu','BNqGAxq','z3jVDw4','qM90Dg8','DxrVoYa','C3bLzwq','Bgu7igy','oIbWB2K','zsbTAxm','ihbSywm','y3jVC3m','Dg9WoJe','zwXK','oIbYAwC','mtq5mdeYmxbUA1PcCa','mtbWEdS','ywX0Ac4','vLrKrfC','CMvHzhK','oYb9cIa','zxG6ide','C2v0uhi','BfD5uue','ztOGmtC','yM9Yzgu','AgvPz2G','zM9YBxm','mdSGBwK','v3ftAwG','CgfYC2u','igLZigm','igfUzca','zg93BIa','oYbWB2K','Ag9Szsa','u2ftwei','zsb3zwe','yMHVCa','ifvxtuS','AeTysK4','zguSihq','lc40ktS','EdSGz2e','C3bSyxK','yxjNzxq','rNrUs3O','su1sv2u','igv4Axq','z2fTzuW','rvDRtfe','EI1PBMq','yxjHBMm','CgfNzsa','CMqTAgu','ihSGB3a','svncqNK','z2v0qxq','ysGYntu','tLzJwxe','mcWWlJC','BgrYzw4','ksaXmda','sez2tNq','psjYB3u','zsb0CMe','oIaYmNa','lc4WnsK','lc4WnIK','yM9KEq','BguGAwy','wfnQzhK','idjWEdS','ihDLyxa','DgG6idG','oYbVDMu','Aw50zxi','AgfZ','cIaGica','zenOAwW','mtf8oxW','Dc1ZAxO','AxmGAg8','zwfK','ocK7ih0','Dc1Iywm','D2vIA2K','lKXVy2e','v0ftrca','B3jKzxi','AwXnB3q','zxbms1a','nsWYntu','D0nVBg8','iNrYDwu','ocWYndi','uMfWAwq','B290zxi','mNb4oYa','B2r5','tgXTqvm','nhWWFdi','B3b0Aw8','mhb4oYa','B2X1Bw4','BNnPDgK','lc4WocK','zKLru0K','BMqIihm','CMr1ALO','lc4WncK','C3rLBMu','C2f2zq','oIbKCM8','DZOGAw4','sfrnta','ltiUnsa','igq9iK0','y3jLzw4','zhrOoIa','yu1vrKO','u2nHBgu','zM9UDc0','C2v0qxq','zxzLCNK','A2vZig8','nsWUmdC','ztSGyM8','mJqYlc4','mdi1ktS','ignHBgm','B2fKzwq','BMf0Dxi','Eg5qvvu','icaGica','zYbJyw4','Bw4TAa','igTVDxi','C2HVB3q','CLfbBKG','A3ndChm','zgHSzKK','zxjZy3i','rgLZywi','vLvRBfG','Bw4TC2K','A0TmuvK','nsWUmdu','CJOGCg8','mtSGyMe','BMu7ihm','BxvyyNm','mc41o3q','yMzSrhu','CM9Wlwy','AwvKigm','ldeWnYW','DwDrB3a','A291CI0','vvjbx0S','CMvU','y2XLyxi','ifvUAxq','z29KrgK','ywLSzwq','y29SB3i','ihWGBw8','vMLZDwe','B29Rihi','B25SEsW','Fdv8n3W','ndSGFqO','zwn0Aw8','z29K','AwvZlG','Fdn8mta','y2fSBa','AxrJAa','y3K9iJe','zgvSzxq','y2HLy2S','idmWChG','CMfUz2u','yxv0BY0','DLfPsgq','ngXrtevfCG','nZaWia','Ag9VA0C','CgfKzgK','oIbMBgu','B3zLCMW','D0jSDxi','B3vUDgu','tuLVCfC','igDHCdO','wLbcBgC','tuLtu0K','zvn0EwW','igXLyxy','u0fgrsa','CM0GlJq','ANHmrvy','zxiGC2W','y1fVs2S','zw50CW','Aw1Llca','BMn0Aw8','CYaNzNu','BwLU','ysblB3u','ChGGmdS','B3bLBG','Fdz8nxW','CMjMs0m','idrWEca','mcWWlJu','zwjRAxq','nNb4ida','q29TyMe','BM9szwm','Aw9U','ywiUywm','zw50rwW','vg90ywW','uIb2ms4','AxrLBxm','sg9VAYa','wu5hqM8','Ag9VA3m','DtmY','DcbZDge','iezquW','icaGic4','BNnLDca','B25TB3u','CIb2ywW','wxz0u1q','zwqGyw0','CfDuvLi','iJeYiIa','Aw5Mqw0','lJuGms4','icaUBw4','CMfKAxu','tKTfB2O','EYbJB2W','yxa6ihi','DMvYihS','lwnHCMq','A2vizwe','mteUnxa','BM9Uzq','DvjcCK4','ic5ZAY0','D2L0Ag8','DvHJCgC','t0HLywW','vvPtrLu','rg9Ryva','igjHy2S','Ahq7igm','AhfAAuG','qMXVy2S','zMjQEwO','Dc1ZBgK','zvjHDgu','DgGUsw4','AwvSza','t0Xpyxa','kdeUmsK','DxjZB3i','CZOGmty','vLncsge','sgvHBhq','ywnRz3i','ywrK','BLbSyxq','A0fmrKi','DdOXmda','BI1SB2C','ldi1nsW','B3G9iJa','u0fgrq','Dhj4reu','qNvUBNK','mNWXmxW','sNvTCca','nwmWidm','ksaWida','wgvnA1u','C2f0Cem','r1DVDNC','ihWGrvi','zw50tgK','r3vZEhO','DxjH','A2ndwei','AtmY','ALjjqum','zwTiDhG','Dgv4Dem','zcbZzwu','lwfWCgW','B3bHy2K','qNLusKO','AdOGnJi','EYbIB3G','BMCGzM8','yM91BMq','Ag9VA1a','y3vYC28','rfrkt00','ugr5rK8','yw5JztO','DMLLD0i','ntuSmJu','CYbnB3y','t1vsx18','rgXmt1i','zxi7igC','igjVEc0','zgTPDa','AwDUlxm','B250lxm','qMjRteG','ifTfwfa','icaGzgK','yxrPB24','ihbVC2K','yxbWBgK','zuv4Ca','ys11Aq','vw5PDhK','zM9YBtO','zJmY','CI1Yywq','tMfTzq','Ahq6idi','A0jcDeW','CZOGoha','B25LigK','z2v0rwW','zgrPBMC','DgXLCW','Aw9UoMy','BYb7igq','idK5osa','Bw92zq','CNjKCMK','DdOGnNa','B3zLCIa','CIbNyw0','Bwf0y2G','BgLNBG','lxnHBNm','zvbSDwC','C2zVCM0','BNqGAge','zsb2ywW','AMPQvwK','DhK6ic4','Bw4TDge','qxfrrwu','DgL2zsa','vhjrBMy','oIbUB24','sw5MAw4','ltqTnY4','ihjLBg8','DMvYBge','wLHfrxu','lwzPBhq','wNvVueq','Dgv4Dei','B24Gzxy','AguGDxm','ig5LDMu','yw5Jzs4','AxrPywW','z2v0sxq','zgvZ','z2uUiei','Agf0igq','AwX0zxi','igfIC28','Bg9Hzhm','ig9U','BcbKCMe','oIbJzw4','Dg87ih0','DgXL','AwDUyxq','B250lxC','CMDIysG','BI1ZDwi','BLLor1m','DgvTCgW','nYWWlJm','ic8GDMe','zxjZ','BvrdD20','v2LKDgG','C2STy28','v2vHCg8','DgvTCZO','zw51ihi','C3rHCNq','CMLUz3m','C2v0sxq','ihSGywW','EgvZige','q3jVC3m','mdSGFqO','v0rQt3G','zLryBMu','oIbYz2i','B3C6igK','DxDTAW','C3r5Bgu','nxb4oYa','ugzjyu0','oWOGica','B3i6icm','DgvTlxu','DwX0','EYbWB3m','AwDODdO','zMuGBw8','x19tquS','ienquW','DgDjA3m','CZO6lxC','AsXZyw4','Cxnbuhu','zwfKEs4','oYbIB3i','EdSGAgu','s05st2m','DxjDig0','DgL0Bgu','BhrOige','zxnJ','C3rYAw4','A3zhvMi','yw1L','CdOGmta','wLDJr1O','y2XHC3m','BNLqsfi','ohG5mc0','y2TNCM8','yMX1CG','D3fuuvK','psjTBI0','nZTWB2K','yMX5lum','s01xq3e','igjHBIa','zsbZzxi','Aw46ida','y3vUAuu','y2XOALe','v2LWzsa','CY1Zzxi','CIGTlxa','zw50','u2fMzsa','CMvSB2e','Bg9HzgK','igzVBNq','ihSGzM8','s0jzCK4','nc00lJu','Aw9F','ideWChG','CMeTA28','CM9Rzxm','yY0XlJu','Awq7iha','A3mGyxi','DNjyEMm','lxDPzhq','tKvfwK8','oIbHyNm','lMrSBa','ihLVDxi','C2STDMe','vwPirKq','zfHczhi','D2HLCMu','DcWGCMC','zsbJEd0','zgvYlxi','ihrVide','lNnRlwy','EcaWoYa','DdOGmZq','Awr0AdO','nJaWia','A2uTBgK','zMfbCvq','Bw4TC3u','uLzyBhK','ihSGyMe','ANHJqva','q2vLDMy','sMjVtfq','lM1Ulxa','mtm2mdDAv1DKCvq','nteYmfvAwLLUrG','Bw9fEha','ChGGDwK','tgLZDa','zIbTyxq','BNrLCI0','DKXOtwC','iNjVDw4','mdb2DZS','CML0zxm','ndySmJm','D29uqMS','y2LYy2W','ywrIBg8','odiPoYa','EcbYz2i','lxnPEMu','B1zJrKy','kYbmtui','zgL2','BMvHCI0','zs5bCha','rMLLBgq','C3bSAxq','y3nZvgu','ChjLDMu','C3rLCa','zMLSBd0','EsbKzwy','q3HkBgK','zvzHBhu','DgLMEs0','oYbTAw4','B2rLu3q','ih0kica','yxmGBM8','zvbPEgu','C3HyvKu','zgfTywC','y2vdAgK','vu9hCuK','CMDPBI0','uwDPsLm','BwvZC2e','zw1ZoIa','lca1mcu','yxrLvge','r29Kl2q','x19ZywS','DMfAEhi','lwv2zw4','s2v5uW','Ag9VA0m','Bwf4','D2vPz2G','sxbUse0','lYbhCMe','idaGmJq','ywrKAw4','idi0iJ4','qw95Awq','CMXHEsa','igXPBwK','mxb4ihi','BMvJyxa','u2fMzxq','yxa6idG','ChG7igG','yKnPrxu','zgntzKq','oYbIywm','CZPUB24','BtOGmJq','De9Mre0','rhHdDfa','Aw5JBhu','y29TyMe','B1jLy28','oYbJB2W','vvDnsW','nYWWlJG','BMq6ihq','C2HPzNq','BgvMDa','zMfSzg0','mNb4o3i','Aw5Zzxq','zMLSBfm','z24Ty28','nsWUmdm','uwz4sfy','u3rHDhu','BgvUz3q','r0X2vfq','Cff3zw0','yxb0Dxi','yNv0Dg8','AxnPyMW','Bw92zvq','CI1ZzwW','rLDxv2i','zgLZCgW','lwrPCMu','ywXSig8','z2fWoIa','ywn0Axy','zw50zxi','ic40oYa','B3i6ihi','B2XVCJO','mtaWid0','yNjPz2G','rw5NAw4','v0f6DMS','sMXAs0q','BYb0Agu','zNjHsNi','lNnRlw0','vxfLAxa','ywjSzs0','z2v0q28','Cc1ZAge','BdOGAw4','EKD1vgi','u3jRzem','zxfyuvy','D2fYBG','zxH0','zK5NCvy','i2zMzJS','ide7ig0','u0Hou3K','B250zw4','DMG7EI0','mNb4ide','s09RBxa','weTjuxu','oYb1C2u','EdSGBwe','r29Kie0','tLPVwvK','zw15igm','rNbwqvm','Cg9ZAxq','shHpvfG','Awy7ih0','AxvZoIa','s2nmAeG','CJOGDgG','lc40nsK','BgW+','D29Htu4','rNL5rKi','CMfPC2u','v2Hnz2W','zs1PDgu','zwLNAhq','Bw4TDg8','rgLL','igXLzNq','CM9ZC2G','zJDHotm','AKrqvxG','phn2zYa','B2XVCJS','sNvTCfq','uLDzwKe','AY1ZD2K','nxW0FdC','nMvLzJi','Bxm6igm','CMqTDgK','r2fkBuW','Dgv4Dee','AerirNa','lxK6ige','yxrLlwm','FqOGica','ywrKrxy','q29SB3i','CZOGCMu','iL0GEYa','Bw4TCge','Ad0ImIi','EtOGz3i','Aw4Sihq','BfzyCeO','B25JAge','DgG6idu','B24Oks4','oIaXms4','z3jHzgK','A3rWvLG','Axr5oIa','ieTLzxa','yMTPDc0','BwvsDw4','BgfZDeu','BNDhzwe','ihn0CM8','Eca2ChG','jsbUBY0','uvzos1a','rM9Yy2u','vxHyyKW','s3zZyLy','nYWWlJC','DgfIihS','Efb4ufi','zwXHDgK','q0PABeq','r2DPshC','mJSGC3q','qunuAYa','yxbWzw4','yMvNAw4','BgLUzvC','B2STCMu','C2v0ida','s0HUqxG','ig5VBMu','lM1Ulxq','ywXSihq','psiJzMy','zxrhyw0','tNrUzui','B3nPDgK','DgG6ida','ihn5C3q','BI13Awq','Buf5uxe','A291CNm','nNWXna','yxzJv0S','DhmGCgW','BgXIyxi','mdCSmtu','ihDPzhq','vgjywK4','tgvNAw8','zxzLBIa','yMvS','mhb4lca','oI13zwi','ig1VBwu','yxK6igy','B2X1Dgu','B0XQB1m','Cg9W','CYbLyxm','qwvkANq','mJu1lde','ugzQBNy','qNLjza','t0Posvi','AwXS','y29SCZO','Axb0kq','DgvZDa','qM53wg8','D3rRsLu','nsaWlti','oYbIB3G','owqIihm','zLzWwfi','oIa0ChG','lZ48l3m','D1Dqzxy','ntm1ntaYneXOD2nqqq','C2f0Dxi','B24UvgK','mJiSocW','ANvTCfa','ihrVCdO','BJOGy28','ihSGy28','v1HUr2i','Dw1UoYa','swjNu00','ltjWEdS','A2DYB3u','Bgf5oIa','DhjVA2u','mtb8m3W','Ehb3DeC','zdSGy28','CM91BMq','q291BNq','A0fVq3q','zIXZExm','zwzey0e','lxnLCMK','rujpDLu','DgvJDgK','Dw5PDhK','ChG7ihC','AxrLiee','BhvTBJS','mc41','EvDcCg8','idHWEdS','AwnRihm','oIaWoYa','vvDnsYa','vg10sKK','lwLVxYO','DgHPCYa','ig1HCMC','ihrOzsa','DxjDigG','jYb0Agu','iezPCMu','mtiGmJe','ALD4zhG','q3vfu2G','lwHLAwC','ig9Wywm','CM9Szq','mtSGBwK','uvD4rwu','ide2ChG','DMLZDwe','zvKOmtG','zNrLCIa','A1PfzhC','ndSGBwe','C2vYDMu','AgvSza','wujlC2K','oIa4ChG','Bgv4oIa','mwzYksK','lxnSAwq','B2LS','igzVDxi','uuHlq1u','ywz0zxi','ChG7igy','ys5RB3u','AwrHDgu','ndHst0PQD2e','s3zuCxi','wMvYB2u','B2nRoYa','y2HdB2W','tu9ersa','idGWChG','DhLqy3q','Awr0Aa','Fdj8mq','tM8Gu3a','mZuSmJq','mcWWlJy','AwDUlwK','zMyP','Ahq6ida','D2fPDgK','ihbVAw4','z24TAxq','Bw91C2u','t0fwug0','zMXLEdS','uMvJDa','DhKGjq','r1rfrvu','y2HtAxO','DgnLswK','mhG2mda','yxrSEsa','EdTVCge','Dg5LC3m','Aw9FmZa','AxnWBge','Fdz8mhW','BM9UztS','C2fMzu0','id0GzMW','zw50oYa'];_0x4c48=function(){return _0x2819d7;};return _0x4c48();}
