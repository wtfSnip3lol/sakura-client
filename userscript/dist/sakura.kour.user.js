// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.9.1
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
function _0x380b(){var _0x108c45=['ideYChG','BdOGAw4','DgvZDa','CIb2ywW','EYbIywm','lxjHzgK','u2fRDxi','nYWWlJG','v1vnv2K','sw5ZDge','mNmSigi','mNb4ihu','C3DPDgm','rMLLBgq','B2XVCJS','oIaYmNa','AsXZyw4','zw1LBNq','lM1Ulxa','r3b4C3a','B3i6iha','uhn2rfK','oYbJB2W','ignVB2W','twXqsvO','BIb7igy','CM91BMq','C2STC2W','BKHjAhe','ywqGD2G','tgvNAw8','DgL2zsa','ANzmr3G','BsbYAwC','ihjNyMe','BxPPvKK','CdOGmta','AwPxCLi','Ag9VA04','ltjWEdS','AwXLzdO','tgLZDa','igLMig0','A2uTBgK','Aw46ida','zMuGBw8','zvj1BM4','yMTPDc0','BwLZyW','C2HVD24','yxr0ywm','EdSGAgu','lJuGms4','x19tquS','DMvTzw4','CMXHEsa','D1z0Cey','ih0kica','shPMBhu','idqTnc4','y3rPB24','zwLNAhq','oYbIywm','ieDLDfy','idmYChG','yMfJA2C','DcbHihq','A2v5C3q','DxDTAW','D1LnExe','mJqWiey','Aw5Uzxi','tM8Gu3a','B25PBNa','ChG7cIa','Dgv4Dem','lIbuDxi','BI1PDgu','tgLzt0y','Dg9WoJe','l3jHCgK','CYbZChi','y3jLBwu','AeHuDMG','DLLmA28','zdSGyMe','tKCGlsa','BNrLBNq','AxnWBge','zxH0','yY0XlJu','kdeWmhy','y3nZvgu','lxK6ige','BNqGAxq','BxDjqwC','DcbZDge','qMXcBue','twLZyW','y2HtAxO','re9nq28','mZq2otC4mMTltKPoqW','Bw4TAca','C3rPBgW','ChG7ih0','BI1SB2C','zMLUza','Dcb7igq','wuPmtwK','C2u6Ag8','D3zHs0C','u0flvvi','rLDKANC','Aej2D2S','v1HNDeq','ww5TrhG','mtn8nNW','EYbMB24','Dg9Nz2W','qxnZzw0','ztSGyM8','ls1W','Bg9Hzhm','zg9JDw0','z0X5s2m','ihSGD2K','kdeUmsK','ltiUnsa','zcb7igi','AfnOywq','yMX1CG','igjVCMq','Bgf5oIa','ntG5oty2neTOA05muq','yM9Yzgu','AgvSza','qNLjza','zMLSBfq','oIaJzJy','CKfmtxu','DhLWzq','ys1JAgu','igzVCIa','zxPPzxi','C1jgrxm','BMC6igi','Bxm6igm','ndHWEcK','AcaTidq','Aw9UlLq','zMXLEdS','C2v0ida','Aw9FmZa','AwvSza','vM9vDu4','ugn0','idfWEca','DhjVA2u','q25stvO','C2HVB3q','tMzeDwe','uwDby1O','wgnozMi','oMHVC3q','qxretxi','Dg87ih0','CdOGmti','Dhj1zq','mtjWEdS','wM5rqMu','A2DYB3u','mcWWlJG','tunuDLa','u0fgrq','ota1odHXyLLcsfu','zw50CZO','zw50CW','zg93kda','Bgf5ig8','rNjHBwu','zKXfA2G','lwXPBMu','B3nWywm','BMq6ihi','uLbIy3a','CM9Rzxm','ndSGFqO','zZOGmta','C3r5Bgu','seXmBu8','Cg9ZAxq','DgvTCZO','ysGYndy','BgvMDa','Ahq7igm','mZuYndG1mhr0rKLiAG','qufWsK8','tMfTzq','Bw4TDge','u3bLzwq','oYbYAwC','zxqGmca','C3rYB2S','CI52mq','BML0igy','A1jNy1u','te1c','y2f0','DxrVoYa','zvbPEgu','t25fsLy','DMC+','EuvUz2K','BMvHCI0','ywrK','idjWEdS','zvn0EwW','ren2zwK','AdOGmZq','ChbLBNm','rwfNwfu','uhL6tfG','DhLqy3q','yNv0Dg8','Dhm6yxu','B3zLCMW','igv4Axq','ysblB3u','Acb7iha','yxK6igy','mhW0Fde','B25SEsW','Bw4TDg8','oIaIiJS','yxa6ide','oYbQDxm','AgfZ','vwnXA24','mIaXmK0','Bw4Ty2W','wejSzuS','yxrLvge','oYbIB3G','AwrLihS','Be1VDgK','ig1PBM0','oYbMAwW','yxvSDca','AwvZlG','B3qGBwe','zxiTCMe','m3WXnhW','B2r5','zgrPBMC','CM0GlJq','CMDIysG','ig9U','yxKGB24','tfPYDK8','DgLVBJO','yMrUAve','zsaOt0G','nxm0idi','iezPCMu','sfrnta','yM9KEq','Bg9HzgK','CMfUy2u','CZPUB24','ChGGDwK','DhmGCgW','CMfUC2K','B250lxC','y1fkwxG','ug9ZAxq','owqIihm','uMvJB2K','B3C6ida','Bgv4oIa','icnMzMy','w3nHA3u','ntuSlJa','Ag9ZDg4','ChvZAa','DMLZDwe','Awr0AdO','DhjHy2S','AgfPCG','C2zVCM0','lK92zxi','lYbhCMe','qxbWBgK','s2v5ra','zvrHA2u','CMfKAxu','idHWEdS','DgnOihq','A3DKC0q','ChznDxq','yxjJ','rMD6zvC','y05et0C','tM8GuMu','ihWGBw8','qw9qBvO','rMfPvM4','EcbYz2i','mxb4ida','zw4GDg8','zeHbr2i','r3ruuuS','lxrPDgW','ns00idC','D0nVBg8','AfTHCMK','oYbOzwK','uNHXteu','mdb2DZS','ieTLzxa','BwuG','AxrJAa','y29TCgW','AguGzgu','zxjYB3i','DZOGAw4','BwLKzgW','ywX0Ac4','zxi7igC','v0fttsa','y2HdB2W','mJzWEdS','vNL5BM8','yLvoru8','Cg9W','AxHLzdS','lZ48l3m','ig1HCMC','mcWWlJC','ChG7igy','yMfJA2q','lwfWCgu','C2STy2e','DdOGnNa','y2LYy2W','Dg5LC3m','BMTnEei','mxWYm3W','C3bLzwq','oJa7D2K','Ag9VA1a','EdSGFqO','ig5VigG','ChG7iha','BgvUz3q','yKjJs08','BwvZC2e','qM90Dg8','DgLVBI4','z3jPzc0','zvzHBhu','y2fUDMe','ywjSzs0','EuTizKS','Ce16D3e','EcKGC2e','AguGCMu','BsbJzw4','AxrLBxm','ihDLyxa','zguSihq','yw1L','BwrLC2m','EYbIB3G','y05LALm','CY1Zzxi','DKLwrvO','Fdb8mNW','zxjZy3i','BgLUzvC','EdSGywW','Bw4TDgK','zgLZCgW','oIb0CMe','DgvTlxu','zMzcCxu','Aw5NoIa','CNnQwMK','B3zLCIa','lc4WncK','ideWChG','yxrLlwm','A2vizwe','swj2sxa','A2vZig8','yvHhq2y','DxmGywm','rfPxzxi','AY1Jyxi','A3ndChm','seHtwwi','Bg9Hzgu','vvDnsYa','oIa4ChG','DNf4sg0','ig1PBIG','DMvYlxy','zwfKige','Awr0Aa','Ec1ZAge','BMqIihm','uJOG','ztOGmtm','oIbYz2i','Bw4TCge','zg93BIa','A2uTD2K','wgvmvee','ANvTCfa','ALfhEem','BYb0Agu','oIbZDge','zsb3zwe','DgLMEs0','B3C6igK','zxjZ','y2HPBgq','zxLlu20','ihbSywm','uw9nuMu','s2zZvvy','Aw9F','nsWUmdu','A2rYB3a','ywnRz3i','z3jHDMK','Aw9FnZi','mhWYFdq','ExLmv0G','oIbWB2K','AwX5oIa','uMf0zq','lwjHBNi','C3rLCa','CM9SBLG','ignVBg8','Bw92zq','nMi5zci','Dg9WoIa','iIbZDhi','vgjsD1G','uuXWs0q','mJqYlc4','yuD3q2S','zM9UDa','icmYmJe','ihrOAxm','wxvVDNe','mdbTCY4','nNWY','y0LVB2O','CMvHzhK','wwfoD0O','DhKGjq','lNnRlxm','CMqTDgK','y3jLzw4','zgvYlxi','lwjVEdS','AxPLoIa','zxi6oI0','B3nLihm','tNDJBhy','Auj2y0i','Dgv4Dc0','C2fMzu0','Fdj8mW','BMX5kq','B290zxi','zMLSBa','DxjDigG','DML0Eq','B1jLy28','AwDgr3O','B3nVwe4','B2reAwu','BLbSyxq','ihSGzgK','zZOGnNa','B25JBgK','vKrpzKW','C21HBgW','ndiSlJG','Avf6wLu','s1fwDxq','Dw5Kzwq','lxrVCca','zwqGyw0','sw5PDgK','qNDtA3y','ugf0Aa','uvHYtu8','Duj5yLC','mNW5Fde','zgTPDa','EdSGB3u','oYbVDMu','zK5Pufq','vg90ywW','y2n1CMe','igvYCG','Fdj8oxW','A3nty2e','mgy1oYa','rujxDem','BhvYkdi','CMzxsLu','B2X1Dgu','A291CNm','ywrPDxm','zM9UDc0','tu9ersa','C2LMqNi','zwLUC3q','psjYB3u','q2XVC2u','BgfJzs0','u3rHDhu','lJv6iIa','ruHqzKm','CM9ZC2G','Dxm6ide','t1DYAhC','lxDPzhq','CM9WywC','CIbNyw0','yxrJAgu','igDHCdO','Dgv4Dee','ltiUns0','C2f2zq','BM9Uzq','B3jKzxi','CgvHDcG','tgPfqvm','BNrLEhq','rw5NAw4','tw92zw0','lKXVy2e','zgj3u1G','DgvTCgW','BMuUqxa','mtf8na','BMDL','q29TyMe','yxb0Dxi','lwHLAwC','icaGig8','vLLRqxO','mty4mta2zKLdzefX','ywLSzwq','vMnus2K','sgvHBhq','Dgv4Dei','u2nHBgu','BI1TywK','Aw5Zzxq','y3vxq3a','CKvRAw8','ihWGrvi','ywn0Axy','4Ocuig5Via','qKDOyum','n3WXFdi','zw1ZoIa','Dw5KoIa','B3vUDc4','mxb4oYa','ihn5C3q','zw50','BgLKzxi','oYbWywq','y3jLyxq','mcWWlJu','nc00lJu','ys5RB3u','EtOGzMW','Dxvgtwu','vNnqB2i','wersBgi','phn2zYa','tKHLzeW','uePKuKi','ihbHzgq','zw50zxi','nsWUmdC','DgfNtMe','ywrKrxy','uK1c','ihSGy28','DdOGmZq','Aw5KzxG','B2LUDgu','z2v0qxq','ic40oYa','sfrtthq','D0zKrNa','CYbpDMu','yNrUoMG','zwfSDgG','zuvSzw0','y2fSBhm','nNb4oYa','nu5jyw13ra','Aezmt1G','vvjbx0S','qMHcBMi','ldiXlc4','DMfSDwu','ohG5mc0','nJq2o2m','zxG6mJe','CgfJAxq','ihDPzhq','ic5ZAY0','uMDUAxe','zMLLBgq','iJeUnsi','ufbZzgK','B2fKzwq','ChjLDMu','lxnHBNm','ldeWnYW','igrPC3a','mhWZFdu','CZOGy2u','Bwfvu0u','EMu6ide','uvzHEfa','AwrHDgu','m3W0Fda','ihWGC2G','qMrVtg8','Bw91C2u','CMqTAgu','CYaNzNu','De5Vzgu','mcbOB28','B3n0zMK','CI1ZzwW','yw5JztO','mc41','yxj0lG','Evr0ywK','B24Gzxy','y2fWu2G','qsblt1u','ida7igi','y01RvKm','AwrLCJO','BYb7igq','ihbVC2K','B2vZig4','ChGGmdS','EM9OwKO','y3jVC3m','CMvHza','vgHLC2u','y0vkELa','zsGXnta','DwjVDfC','DLjczuW','ieaG','CMvHzey','igHLAwC','B3uU','zs1PDgu','EYaTD2u','Fdn8mNW','igzSzxG','ihnOB3q','rg5kBfq','kYbtCge','zeLZu2e','C3bSAxq','DgvYoYa','igvSC2u','BMqGBwe','ihDOAwm','AxPSDeq','CNjVCG','y2vUDgu','yxv0BY0','ztOGBM8','z2LMEq','B3bLBG','CYb3B24','u1fmuKe','zw5HyMW','mNm7Cg8','DMLLD0i','Ad0ImIi','zMyP','Bw92zvq','Dg9W','vxvswMC','zYb7igm','mti2nZG0n3nRtuj5vW','zsbJEd0','Bg9YihS','BNn0ywW','vfnSu0S','kdi1nsW','B25JAge','u3nTrLi','ieLZr3i','zhjVCc0','BM9tChi','ihSGAgu','rxHW','DgnOoJO','AxrPyxq','nsWUmdm','ntuSmJu','Dxm6idy','oIa2mda','u3bHy2u','v1jPBNa','ndySmJm','DMLZAwi','wLbNwNe','zMLSBcW','DwP6AfG','zfnmv0O','ihrOzsa','C2STCMe','D2LKDgG','Aw5JBhu','uujHs1a','zhHOBgq','Bw92zw0','iM5VBMu','BM93','zg93BG','igXPBwK','DgfIihS','BtOGnNa','Eca2ChG','EK1lreS','j3qGC3q','yxHLtgS','EfvmD20','C3rVCfa','B3vUzca','zxrhyw0','mdSGBwK','CgfYzw4','yxbWBgK','zgL1CZO','z2fTzuW','BfjPr2q','AwvSzca','zMXLEdO','icaGic4','tu9ACw0','zerWseO','ywXPz24','ufmGDw4','r29Kl2q','rgLL','iL0GEYa','C2STBwq','yNbLyxy','C2v0vhi','wNbQBwW','kc4YmIW','DxjLihq','kdi0nIW','DxjZB3i','y2XHC3m','DNLlC0u','Aw9UoMy','mwzYksK','BuLKz2y','quXMy2u','ruTmCLK','sfzbBMG','tKCG4Ocuia','B3i6icm','AhDVrNq','C3rHCNq','A3nqB3m','khjLBg8','BNrLCJS','y21gDKu','ktSGBwe','zxrL','r29Kie0','BMnL','D2fYBG','y2XLyxi','D2vPz2G','yw5LBca','D2L0Ag8','D2fPDgK','mNWZ','zM9YBxm','BMvS','msWUmZy','iNjVDw4','y2fWDhu','yxbWzwe','vvDnsW','CvPUDvi','B3jZige','icaGlM0','ywiUywm','tevksge','ihbVAw4','zgvZyW','rwXusM4','ifvUAxq','Axr5oIa','CZO6lxC','zgfTywC','Cg9PBNq','CIdIGjqG','D3jPDgu','z3jPzdS','r1nXy2G','BNnSyxq','ie9olG','C2HHzg8','nJaWide','CI51As4','BhrO','CMvU','zw51ihi','lxnLCMK','yMX5lum','sgLKzxm','BgW+','jsbUBY0','BgfIzwW','CgXPy2e','sg5LswS','DgLKzs4','BNqTC2K','icaG','yvDtv1a','yxnLBgK','BMq6icm','tg9JywW','qNzozNG','zsb2ywW','zwv6zsa','t0zgigi','ldi1nsW','DhjHBxa','zM5Ttxy','EKzdDvC','BwvKicG','DhLSzq','AwrLCG','nhb4oYa','BcbKCMe','ohWXm3W','zxzLBIa','AY1OAw4','A291CI0','B2f0Eq','yxjKlxq','C2STy28','DgL0Bgu','ohb4ksK','DdOXmda','iJeYiIa','tuPeCfK','C0LAzhC','wfvRELK','zhbY','suDLB0K','AxrLiee','C0P6wfu','uMvMAwW','zgvSzxq','oYbIB3i','nsaWlti','y2fWtw8','u2fMzxq','A3rtvwm','Dc1ZAxO','CMvZDg8','ihn0CM8','mdCSmtu','igzPBgW','EI1PBMq','DLv3AuK','idrWEca','AdOGnJi','Awq7iha','AgvPz2G','AxnPyMW','zs5bCha','mJm4ldi','CNq7igC','C2v0','ienquW','lxnOywq','s2v5qq','oIaXms4','ihSGlxC','s2v5vW','BgrYzw4','zwCGzMe','yxjPys0','ywXSihq','u0DLDKe','DgHYB3C','CertCwC','y2HLy2S','kg92zxi','tM8Gzw4','zwfKEs4','Eer6zeq','t1nOB28','lMLVig0','BgLUzwm','kYbmtui','ig9Wywm','zNbZ','Aw5Mqw0','rvnlzMO','Axvnv0C','BMC6ida','turOD1a','yxbWzw4','CuvsExm','ig5VBMu','y2fSBa','zMLqCLu','icaUBw4','oYbVCge','BgWGBwu','qNvUBNK','B3nPDgK','BM9szwm','zxiTzxy','BhmGDgG','t1vsx18','CYbHBgW','uMvJDa','ndm5nZK1qvDVvNfN','z0Hxs0C','wNjgv1i','oIaXnha','y2vSzxi','ohb4oYa','Bhv0ztS','mxb4ihi','igHVB2S','BgLNBG','rff4yMm','ywPXDeS','whL0wNC','zMLSBd0','DwTpuLG','zgL2','AxrSzsa','ywXSig8','zwjRAxq','qKr2zgG','Bw4TAa','ihLVDxi','Ag9VA3m','rLbtigm','DdOGmJG','Fdv8m3W','Egfmzgq','zxG7ige','mtjWEca','sxnStwK','zhrOoIa','zMy2yJK','CZOGoha','mhW1Fdq','zxjZihq','lwrPCMu','i2zMyJm','oIbJDxi','C2f0Dxi','sK5tAMu','vefUzLi','idaGmca','CYbLyxm','ihSGywW','CxPYruC','AwX0zxi','qwrIBg8','oYb9cIa','CYbnB3y','BwLU','yM90Aca','psiJzMy','Axb0kq','ruToENm','wxvHt1O','mtfWEca','ihWGz2e','nxWWFdq','vMrTA0O','Bwf4','y3K9iJe','ic5TBI0','CJOGCg8','EYbMAwW','nsK7igi','zvbSyxK','sxLyvw8','q01zA0K','mZuSmJq','igfIC28','BsbSzwy','Dw5RBM8','y29UDgu','mtiGmJe','A2v5Dxa','B24U','B2LS','tMTdq3O','C2STBge','Ec1KAxi','zvbSDwC','CMeTA28','vw5PDhK','AY1IDg4','EMHzr3K','mtGGnIa','C2STBM8','zxnJ','DhK6ic4','AwXKigG','yMHVCa','iNrYDwu','zw50kcm','zMXLEc0','BguGC3q','D29YAYa','B3vUzdO','tg5hwee','mtSGBwK','C2STBwi','z3jVDw4','Aw50zxi','q0fovKe','zKPguMG','yvvIqNu','rgfTywC','ywn0A0S','C2v0sxq','zxj2zxi','mcaWida','ktSGFqO','BhmGysa','ocWYndi','rgHMC08','Ag9VA0m','ic8GDMe','sM9rzNK','BguGAwy','mdi1ktS','ignHBgm','Bg9N','DMvYBge','BwvsDw4','CMfWAwq','z0nvqvO','BgfZDeu','uurOtwW','DKvez3q','B250zw4','z2uUiei','Bg9Hzca','zxiGEYa','y3vYC28','nJiWChG','BI1JB2W','r3jHDMK','v2LKDgG','ndGZnJq','ChG7igi','lwnHCMq','Awy7ih0','CMvUDem','BgLJyxq','idaGnha','B3nL','yxjNzxq','rgLZywi','CgfKzgK','Bgv4oYa','C2vLBNq','DgvY','BtOGmJq','zxi6ida','y2uGB3y','mJu1ldi','sNnftuC','DhjHBNm','BgvZiem','zxzLCNK','AguGDxm','nNW1','CJSGz2e','igzVDxi','BM9UztS','sg9VAYa','u0fgrsa','B2XPBMu','zJzIowq','idi2ChG','zJmY','BujNseK','oJiXndC','DgvYoIa','EsaUmZu','z3LIywm','jYb0Agu','BsbVBIa','iduWjtS','mhGYnta','B0v1rey','BNnLDca','qMXVy2S','Aw5NicS','wujYuwu','DtmY','tgXntfK','nZTWB2K','mtbWEdS','zMLSBfm','mdSGyM8','B3G9iJa','zwXHDgK','ltqTnY4','l1jnqIa','oIaWoYa','AM9PBJ0','icaUC2S','ie1VDMu','nYWUmJG','CeLnBvC','zcWGi2y','z2H0oIa','AwDODdO','Cvzwv0y','lc40ktS','mJu1lde','oIbUB24','ignHy2G','CMvJDa','zxG6ide','s3j6su0','DdOGnJa','i2zMnMi','BM90zs4','BNrLCI0','CM9Rzs0','C2v0qxq','icaGzgK','icbIywm','yNjPz2G','tuLtu0K','CMLNAhq','iL06oMe','yxjHBMm','yKvVDhu','v2vItw8','lNnRlw0','pc9ZBwe','yMvNAw4','BhvLCY4','EfjysLG','AcbVBMu','idiWmg0','lMrSBa','sK5LDum','D0jSDxi','lxbHCMu','C2L6ztO','swvgBuO','yMLJlwi','B3nLihS','y29SB3i','ihrVCdO','wLLYzNm','x19ZywS','EtOGyMW','ihnVig4','t0HLywW','Bw4TC2K','icaGkIa','igDHDgu','BMu7ige','sw5Zzxi','q3vZDg8','mhb4oYa','txDQwM8','C2fhzNy','BhvfwxG','B3vUDgu','BhrOige','sNvTCca','DgXLCW','EsbKzwy','ldePoWO','tg9Hzgu','Cc1ZAge','zYbJyw4','zxjSyxK','BIb0Agu','oIaZmNa','DxjH','z2fWoIa','lsbHihm','z2v0sxq','zwXK','igfUzca','v3bUAgi','Dg87zMK','vgLJAW','C2STy3q','zgjruLC','z1zNAMu','yM5Wuhm','suTnB1a','CvvmA3m','y2TNCM8','D21sqMu','idnWEdS','C2fRDxi','idaGmJq','C3zNiJ4','B29RCYa','C2STDMe','yw1Hz2u','DuPYqLe','BKfTDhK','yxK6igC','CKP5rei','A2L0lxm','zw51','icaGica','y29PBa','ign1CNm','ifvxtuS','ChG7igG','nxb4oYa','BNnPDgK','y29Kzq','DwX0','uuXktgq','nIaXoci','DgLKzvC','BgLUzvq','mcWWlJy','B3bHy2K','FqOGica','mhWYFde','oYb3Awq','CxvLCNK','ALPRufO','Aw5WDxq','AtmY','nMvLzJi','v0LhB2u','C2v0x3q','rwnuywi','mJuPoYa','zxrLy3q','CvjnD1O','DMfS','v3jHCha','ocK7ih0','z2v0q28','B3b0Aw8','AwDUyxq','nwmWidm','ihjLBg8','rLbtig8','igfSAwC','Dw5PDhK','CK95uvC','B29Rihi','m29jCvfRCG','y2HLCYa','yw5ZzM8','rg9ivgi','mtySmc4','lxnPEMK','BMvJyxa','Dgj6DLG','DhjPyNu','lNnRlwy','D2rZBvu','z29KrgK','quXksgy','DgXL','zgvZ','lc4WnsK','oIa1mcu','Cg9Uj3m','CJSGzM8','ANbJCxa','BxKGC2u','CLvKvxG','vMLZDwe','zw50rwW','qMH4D0m','BhKGkhi','lxnPEMu','vwjztNe','mdSGy3u','Bw9fEha','DgG6idK','EvbdzNK','C2STAgK','EdSGz2e','u0LJu1y','C0LWzKG','swyGCMu','CIiSici','i2zMzG','ida7igm','ignLBNq','B250lxm','tg1Iwwi','ide7ig0','B3vUzdS','mJiSocW','C2vYDMu','C2HPzNq','idi0iJ4','EYbKAxm','A2zdBe0','AgvZ','sxLluKC','qxbWBhK','quzwsgK','Bg9Y','ywqGDg8','zsbTAxm','C3bSyxK','tgvMDca','DgHPCYa','yxrSEsa','Ag9VA0C','Aw1Llca','psjTBI0','DdOGnZa','zKDSCMu','tgXyteK','Aw4Sihq','zvKOmtG','oYbWB2K','B2rL','ywqUieK','D0z3Aeu','4Ocuig92zq','wen3rKe','AhvTyIa','Bw4TC3u','u2v0r2e','A1ncvK0','CgfNzsa','AxrPywW','igfWCgW','B2TLpsi','mtu3lc4','y2L0EtO','ExP2ELu','cIaGica','ANzMsKS','CNr1Cca','nJaWia','oIbYAwC','Dw1UoYa','C1vNvwG','B2STCMu','q291BNq','CLfUBMS','C1bgwgq','tw9Kzsa','icaGlNm','yMeOmJu','BI13Awq','tLzxt2m','id0GzMW','nYWWlJm','CMDPBI0','DMu7ihC','CZOGmty','u2vSzwm','zenOAwW','Ae10C0e','B246igW','z2jHkdi','Fdz8mxW','C3rYAw4','oI13zwi','uNvUDgK','DvL2zuS','zxHUv08','mJqSmtC','zw50tgK','C2XPy2u','v0Ltufm','ihSGzM8','EYbJB2W','oIbMBgu','ysGYntu','BgLUzw4','mJu1lc4','Dg9Y','lwfWCgW','nsK7iha','BwjVzhK','Eg1TCwK','ihrVide','CMLKoYa','A3mGyxi','lcbPBNm','CMvSB2e','ELHtsKi','CgXHEtO','EgvZige','nsWYntu','y29SCZO','z29K','BMLUzW','lc4WnIK','C3rLBMu','zvjHDgu','zuv4Ca','zxzLBNq','zwfK','s2DorNC','yw5Uywi','mNb4oYa','tuL5Efi','mxW0Fdm','zxmGB24','y2TLzd0','s2v5uW','mhW1FdC','yxrPB24'];_0x380b=function(){return _0x108c45;};return _0x380b();}function _0x4e2b(_0x211642,_0x31f452){_0x211642=_0x211642-(0x6a*0xd+-0x162e+0x11a6);var _0x552062=_0x380b();var _0x46f421=_0x552062[_0x211642];if(_0x4e2b['XxxrOW']===undefined){var _0x4335ab=function(_0x396aa6){var _0x27dbd6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xfd708f='',_0x4c04b0='';for(var _0x4d2ae9=0x12e4+-0x22c5+0xfe1,_0x2327d6,_0x4c9a3f,_0x316309=0x307+0x655*-0x4+-0x207*-0xb;_0x4c9a3f=_0x396aa6['charAt'](_0x316309++);~_0x4c9a3f&&(_0x2327d6=_0x4d2ae9%(-0x1fc6*0x1+-0x1*0xeff+0x1*0x2ec9)?_0x2327d6*(0x1d3d+0x10a*0x13+0x1*-0x30bb)+_0x4c9a3f:_0x4c9a3f,_0x4d2ae9++%(0xfef*0x1+0x1*0x14fb+0x2*-0x1273))?_0xfd708f+=String['fromCharCode'](-0x1*-0xca+0x1af5+0x8*-0x358&_0x2327d6>>(-(0x1469*0x1+0x988+-0x1def)*_0x4d2ae9&0x977+-0xb*0x315+-0x3e*-0x65)):0x5f3*-0x2+0x9d4+0x109*0x2){_0x4c9a3f=_0x27dbd6['indexOf'](_0x4c9a3f);}for(var _0x86d6b4=0x12*0x16c+0xa3*-0x2b+0x1c9,_0x138543=_0xfd708f['length'];_0x86d6b4<_0x138543;_0x86d6b4++){_0x4c04b0+='%'+('00'+_0xfd708f['charCodeAt'](_0x86d6b4)['toString'](0xc6b+0xfce+0x51*-0x59))['slice'](-(-0x19d7+0x1da1+-0x3c8));}return decodeURIComponent(_0x4c04b0);};_0x4e2b['MGOgpI']=_0x4335ab,_0x4e2b['FoEuUL']={},_0x4e2b['XxxrOW']=!![];}var _0x5195ef=_0x552062[0x786+-0x15a+0x13c*-0x5],_0x68ec5d=_0x211642+_0x5195ef,_0x4109ea=_0x4e2b['FoEuUL'][_0x68ec5d];return!_0x4109ea?(_0x46f421=_0x4e2b['MGOgpI'](_0x46f421),_0x4e2b['FoEuUL'][_0x68ec5d]=_0x46f421):_0x46f421=_0x4109ea,_0x46f421;}(function(_0x5391c6,_0x35978b){var _0x1022d0=_0x4e2b,_0x2ffd29=_0x5391c6();while(!![]){try{var _0x22f48e=-parseInt(_0x1022d0(0x188))/(-0x2005+-0xe0b+-0x3*-0xf5b)*(-parseInt(_0x1022d0(0x152))/(-0x15ac+0xd0*0xd+0xb1e))+parseInt(_0x1022d0(0x431))/(0x1f17+0x92*-0x2+-0x1df0*0x1)*(-parseInt(_0x1022d0(0x581))/(0x1c82+0xa3*0x1a+-0x2*0x1686))+parseInt(_0x1022d0(0x2db))/(0x11f8+-0x4*0x28f+-0x7b7*0x1)+parseInt(_0x1022d0(0x538))/(0x2b3*-0x3+0x238d+-0x1b6e)+-parseInt(_0x1022d0(0x1e6))/(0x1*0x25c3+-0x1*-0x86f+0x1*-0x2e2b)+-parseInt(_0x1022d0(0x558))/(-0x25e6+-0x1*0x1fed+0x45db)+parseInt(_0x1022d0(0x596))/(0x26c*-0xc+-0x1*0x346+0x205f);if(_0x22f48e===_0x35978b)break;else _0x2ffd29['push'](_0x2ffd29['shift']());}catch(_0x232104){_0x2ffd29['push'](_0x2ffd29['shift']());}}}(_0x380b,0xed369+-0x135e7*0x9+-0x9be1*-0x7),((()=>{'use strict';var _0xaec139=_0x4e2b,_0x2a6e37={'dHAGb':'rgba('+_0xaec139(0x3a8)+'07,15'+_0xaec139(0x4da)+'5)','EcTab':'px\x20ui'+_0xaec139(0x19a)+_0xaec139(0x269)+'f,sys'+'tem-u'+_0xaec139(0x4e3)+'s-ser'+'if','YuaOZ':function(_0x5149cf,_0x47ccc7){return _0x5149cf-_0x47ccc7;},'mBgHI':'rgba('+'255,2'+_0xaec139(0x31f)+'0,0.5'+'5)','wbthG':function(_0x53bdb2,_0x2e3dfa){return _0x53bdb2/_0x2e3dfa;},'AApJO':function(_0x39d76b,_0x5bdc30){return _0x39d76b+_0x5bdc30;},'nAmty':function(_0x25bb30,_0x51fdb2){return _0x25bb30===_0x51fdb2;},'awgnB':'klxai','rfWJU':_0xaec139(0x3fb)+'a.kou'+_0xaec139(0x59e),'eTjXL':function(_0x536a15,_0x1ccc5d){return _0x536a15<_0x1ccc5d;},'uuFMe':function(_0x45517e,_0x1e831d){return _0x45517e+_0x1e831d;},'vIVEZ':'\x20|\x20mo'+'vemen'+'t\x20','kfClM':_0xaec139(0x55a),'XHDGk':function(_0x51a3d8,_0x2f0a03){return _0x51a3d8===_0x2f0a03;},'tbzvX':_0xaec139(0xf1),'cMkVC':_0xaec139(0x1c3),'JoQfy':function(_0x2daa96,_0x2b8325){return _0x2daa96(_0x2b8325);},'xrFPU':function(_0x1db9b4,_0x2d5e94,_0x3c91a3,_0x5a70b5,_0x529278,_0x20273b,_0x5f049d,_0x1bf144){return _0x1db9b4(_0x2d5e94,_0x3c91a3,_0x5a70b5,_0x529278,_0x20273b,_0x5f049d,_0x1bf144);},'MOZqm':'Legio'+_0xaec139(0x109)+_0xaec139(0x249)+_0xaec139(0x5f4)+_0xaec139(0x271)+_0xaec139(0x146)+_0xaec139(0x166),'yPCfy':_0xaec139(0x41c),'BHMZq':_0xaec139(0x115)+_0xaec139(0x5c4)+_0xaec139(0x65a)+_0xaec139(0x266),'nHIhq':_0xaec139(0x384),'QXrMO':function(_0x1bae31,_0x15b68f,_0x5a98fd,_0x3c505a,_0x2d0c91){return _0x1bae31(_0x15b68f,_0x5a98fd,_0x3c505a,_0x2d0c91);},'UuRZg':function(_0x7c9ffc,_0x326901,_0x3a9a97,_0x35a72b){return _0x7c9ffc(_0x326901,_0x3a9a97,_0x35a72b);},'sIZdw':function(_0xfcb906,_0x1a19cd){return _0xfcb906*_0x1a19cd;},'aUbBu':function(_0x548a80){return _0x548a80();},'kWEOY':function(_0x46a4d2,_0x4e5e44){return _0x46a4d2!==_0x4e5e44;},'UwgAV':'ThJPa','ydwDB':_0xaec139(0x465),'HVAnh':_0xaec139(0x5eb)+'ra-ko'+_0xaec139(0x103)+_0xaec139(0x430)+_0xaec139(0x2b5)+'iled:','LlXLI':function(_0x1719f6,_0x3c7d54){return _0x1719f6===_0x3c7d54;},'sIpfH':function(_0x1fa41c,_0x5d0b49,_0x5c9a2a,_0x57420c,_0x1e2263,_0x2dc28a,_0x3b6135,_0x626356){return _0x1fa41c(_0x5d0b49,_0x5c9a2a,_0x57420c,_0x1e2263,_0x2dc28a,_0x3b6135,_0x626356);},'LiYOF':function(_0x127296,_0x1827b3){return _0x127296!==_0x1827b3;},'VTeoV':_0xaec139(0x662),'GtTQK':'bEyuv','jfBkz':_0xaec139(0x2b6)+_0xaec139(0x2bb)+'ed','ukORX':'true','YJLMi':function(_0x33fbf4,_0x563230){return _0x33fbf4/_0x563230;},'WIGoe':function(_0x4cd3b2,_0x11e990,_0x1b351d,_0x15b2e0,_0x37eeb2){return _0x4cd3b2(_0x11e990,_0x1b351d,_0x15b2e0,_0x37eeb2);},'NkCCz':function(_0x42fd12,_0x2d2add,_0x5c4896,_0x44756c,_0x3dd054){return _0x42fd12(_0x2d2add,_0x5c4896,_0x44756c,_0x3dd054);},'KQVut':function(_0xa3bd26,_0x2d09b7,_0x132b39,_0x237229,_0x1128a9){return _0xa3bd26(_0x2d09b7,_0x132b39,_0x237229,_0x1128a9);},'sifBr':function(_0x1ee8ea,_0x520891,_0x336e96,_0x53dc1c,_0x2815a1){return _0x1ee8ea(_0x520891,_0x336e96,_0x53dc1c,_0x2815a1);},'oEuDF':function(_0x3d997e,_0x150c81){return _0x3d997e<_0x150c81;},'qTMvh':function(_0x41ef27,_0x366465,_0x452169,_0x15e61a,_0x3e4a17){return _0x41ef27(_0x366465,_0x452169,_0x15e61a,_0x3e4a17);},'mwIAg':function(_0x46b0ae,_0x5d9374){return _0x46b0ae===_0x5d9374;},'ujzhX':_0xaec139(0x1fa),'HBqZT':function(_0xa4774,_0xb179e1,_0x386928,_0x3993e8,_0x5f22a8){return _0xa4774(_0xb179e1,_0x386928,_0x3993e8,_0x5f22a8);},'msKPi':function(_0x30931a,_0x3ed9e7,_0x4f6590,_0x87a3d0){return _0x30931a(_0x3ed9e7,_0x4f6590,_0x87a3d0);},'cNejS':function(_0xecefad,_0x1a19cb,_0x401124,_0x3a3428,_0x2ecc92){return _0xecefad(_0x1a19cb,_0x401124,_0x3a3428,_0x2ecc92);},'SXayY':_0xaec139(0x3bb),'stANu':function(_0x37a8e6,_0x4a76d6){return _0x37a8e6+_0x4a76d6;},'dbQRW':function(_0x3116c3,_0x2afe1b){return _0x3116c3===_0x2afe1b;},'MBXjS':'xvAON','VDOfL':function(_0x2c440b,_0x3aa160){return _0x2c440b>_0x3aa160;},'XBleK':function(_0x4958c7,_0x3f5654){return _0x4958c7===_0x3f5654;},'ftlkK':_0xaec139(0x392),'fNiPT':_0xaec139(0x1a6),'pxDRC':_0xaec139(0x380)+'MODE\x20'+'—\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+_0xaec139(0x3fe)+_0xaec139(0x23b)+'ad\x20to'+_0xaec139(0x5b5)+')','QDhMl':function(_0x510392,_0x27e2af){return _0x510392+_0x27e2af;},'hSSzc':'loade'+'d','xULwm':'none','RaNry':'UWMK\x20'+_0xaec139(0x3b7)+_0xaec139(0x236)+_0xaec139(0x5b4)+_0xaec139(0x5d4)+_0xaec139(0x44a)+'einst'+_0xaec139(0x2b7)+_0xaec139(0x37a)+_0xaec139(0x64c)+'ipt)','ZLmIS':function(_0x55e752,_0xe58b10){return _0x55e752+_0xe58b10;},'sJzXU':function(_0x428b32,_0x3511e9,_0x4f7521,_0x3625d5){return _0x428b32(_0x3511e9,_0x4f7521,_0x3625d5);},'HTSLt':function(_0x4986fb,_0x48e413,_0x1d6d99){return _0x4986fb(_0x48e413,_0x1d6d99);},'JQdGD':_0xaec139(0x466),'GpzWf':function(_0x3a695b,_0x12b115){return _0x3a695b===_0x12b115;},'bpeav':'FWdjw','ZOLgj':_0xaec139(0x2fc)+_0xaec139(0x4a2)+_0xaec139(0x248),'BhxwC':'mouse'+_0xaec139(0x20a),'jvfJK':_0xaec139(0x555),'qZnuR':'keydo'+'wn','MlPIZ':'inter'+_0xaec139(0x15d)+'e','NHedL':_0xaec139(0x614)+_0xaec139(0x23f),'iGXuI':_0xaec139(0x537)+_0xaec139(0x52a)+_0xaec139(0x3e3)+'d','fiPrU':_0xaec139(0x288)+_0xaec139(0x56b)+_0xaec139(0x38d)+'-pare'+'nt','AFVHi':'fulls'+'creen'+'-banr'+'s','bnpPs':function(_0x13f263,_0x4df396){return _0x13f263===_0x4df396;},'JNSje':function(_0x373744,_0x541b89){return _0x373744*_0x541b89;},'OfjJv':function(_0x459dfd,_0x5d5346){return _0x459dfd===_0x5d5346;},'jQdyg':function(_0xe9e019,_0x17b750){return _0xe9e019!==_0x17b750;},'wmRBe':_0xaec139(0x4bc),'dIsSa':'left','SosIS':_0xaec139(0x542)+_0xaec139(0x1b3)+'R\x20v1.'+'1','MKGeE':function(_0x56c4d0,_0x51be71){return _0x56c4d0(_0x51be71);},'JPDBi':_0xaec139(0x247)+'ng\x20fo'+_0xaec139(0x13a)+'e…','Hzflu':_0xaec139(0x5d2)+'255,1'+'80,19'+_0xaec139(0x414)+')','TAnfR':_0xaec139(0x3fb)+_0xaec139(0x16c)+_0xaec139(0x265)+'v1','bBcKO':'5|0|3'+'|2|4|'+'1','gEGHf':_0xaec139(0x428)+'n','VcTKi':_0xaec139(0x342),'udFaT':'span','QWasM':_0xaec139(0x121),'yTtai':function(_0x1a301b,_0x3df89e,_0x508843){return _0x1a301b(_0x3df89e,_0x508843);},'kSBVM':_0xaec139(0x32f),'AiYvP':function(_0x2eaf97,_0x4bc3f5,_0x510dc4,_0x5edb96,_0x5aaa12){return _0x2eaf97(_0x4bc3f5,_0x510dc4,_0x5edb96,_0x5aaa12);},'rJyDB':'#ff6b'+'9d','WqDgD':'Zpjml','ALfce':'comba'+'t','RPbcp':_0xaec139(0x390)+'s\x20OHe'+_0xaec139(0x619)+_0xaec139(0x115)+_0xaec139(0x5c4)+_0xaec139(0x65a)+_0xaec139(0x3de)+'nd\x20OH'+_0xaec139(0x184)+_0xaec139(0x147)+'lDie,'+_0xaec139(0x3d1)+'othin'+_0xaec139(0x3e5)+'\x20hurt'+'\x20or\x20k'+'ill\x20y'+_0xaec139(0x1c6),'vqxHm':function(_0x2352d5,_0x11e965,_0x3756c5,_0x10ab7b,_0x354db4,_0x297152){return _0x2352d5(_0x11e965,_0x3756c5,_0x10ab7b,_0x354db4,_0x297152);},'pMzwq':'Skips'+'\x20Reco'+'ilMot'+_0xaec139(0x568)+'ick\x20s'+_0xaec139(0x676)+'\x20reco'+'il\x20sp'+'rings'+'\x20neve'+'r\x20adv'+'ance.','eSkjQ':_0xaec139(0x51b)+_0xaec139(0x1bd),'SsmFR':'Zeroe'+_0xaec139(0x524)+_0xaec139(0x669)+_0xaec139(0x1d2)+_0xaec139(0x4be)+_0xaec139(0x120)+'cy\x20on'+_0xaec139(0x2f0)+_0xaec139(0x643)+_0xaec139(0x1b1)+'ery\x202'+_0xaec139(0xed),'AoPmZ':'Scale'+_0xaec139(0x182)+'rtide'+'Weapo'+'n.fir'+_0xaec139(0x4c5)+_0xaec139(0x4b7)+'0%.\x20S'+_0xaec139(0x347)+'\x20may\x20'+_0xaec139(0x53a)+_0xaec139(0x3d5)+_0xaec139(0x1cb)+'s.','xRXJX':_0xaec139(0x344)+'e\x20[EX'+'P]','vUwiI':function(_0xbe26d3,_0x5e7d7b,_0x2b0db6,_0x3ce7e2){return _0xbe26d3(_0x5e7d7b,_0x2b0db6,_0x3ce7e2);},'pIMmW':_0xaec139(0x455)+_0xaec139(0x54d)+'\x20stil'+_0xaec139(0x284)+_0xaec139(0x475)+_0xaec139(0x615)+_0xaec139(0x525)+'nt\x20ha'+_0xaec139(0x5ae)+_0xaec139(0x1d1)+'where'+'.','vSImH':_0xaec139(0xe1),'ESKfj':'100\x20='+'\x20defa'+_0xaec139(0x40f),'ktSUc':function(_0x32e3e1,_0x27b6ca,_0x57d7cf,_0x302577,_0x126c2a,_0x129752){return _0x32e3e1(_0x27b6ca,_0x57d7cf,_0x302577,_0x126c2a,_0x129752);},'DoCMc':'Scale'+'s\x20Mov'+_0xaec139(0x4e4)+'.jump'+'Force'+_0xaec139(0x3ee)+_0xaec139(0x30d)+_0xaec139(0x685)+'ty\x20va'+_0xaec139(0x3c0),'izltD':function(_0x5b5192,_0x2241d7){return _0x5b5192!==_0x2241d7;},'ACtWV':_0xaec139(0x2d3)+'-hop','GnDLg':'Keyst'+'rokes','kZFQa':_0xaec139(0x5e5)+'ion','BdoLo':function(_0x3a247b,_0xeb57aa,_0x4f483e,_0x4d4eb7){return _0x3a247b(_0xeb57aa,_0x4f483e,_0x4d4eb7);},'PmLel':_0xaec139(0x637)+_0xaec139(0x321)+'t','uYveK':_0xaec139(0x46c)+'middl'+'e','tUKLR':'Color','ijWrR':function(_0xce4766,_0x3d08cf,_0x585436){return _0xce4766(_0x3d08cf,_0x585436);},'GSqch':_0xaec139(0x42c)+_0xaec139(0x354)+'y.','UNOFx':function(_0x3a246b,_0xc017cd){return _0x3a246b===_0xc017cd;},'ZPgZq':'sEmfX','PJdRB':function(_0x17f49d,_0x3d64ab){return _0x17f49d(_0x3d64ab);},'kwdsD':'Takes'+'\x20effe'+'ct\x20on'+_0xaec139(0x42b)+_0xaec139(0x4f0)+_0xaec139(0x607)+'ggled'+'.','BvNfx':_0xaec139(0x37f)+'risk\x20'+'switc'+_0xaec139(0x464),'JsEMG':_0xaec139(0x5f6)+_0xaec139(0x4ce)+'\x20relo'+'ad.','NfDua':'godDi'+_0xaec139(0x5d8)+_0xaec139(0x184)+_0xaec139(0x147)+'lDie)','Gpxsp':function(_0x2c2cdb,_0x26d021,_0x3c5604){return _0x2c2cdb(_0x26d021,_0x3c5604);},'EKNzs':function(_0x1fab6c,_0x5e8471,_0xa70992,_0x5d8c66){return _0x1fab6c(_0x5e8471,_0xa70992,_0x5d8c66);},'MwjZo':function(_0x545764,_0x4df27b,_0x335518){return _0x545764(_0x4df27b,_0x335518);},'DLlak':_0xaec139(0x223)+_0xaec139(0x400)+_0xaec139(0x523)+'d\x20gre'+_0xaec139(0x46e)+'raise'+'\x20ban\x20'+'risk\x20'+_0xaec139(0x286)+'with\x20'+_0xaec139(0x46d)+_0xaec139(0x326),'QVaxP':function(_0x308c8e,_0x5421e2,_0x2d65a1,_0x222959,_0x58b09f,_0x7e5ccd){return _0x308c8e(_0x5421e2,_0x2d65a1,_0x222959,_0x58b09f,_0x7e5ccd);},'XAfEY':'Dange'+'r','JQbhP':function(_0x303368,_0x5c0766,_0x5dc8c6,_0x58c5e6){return _0x303368(_0x5c0766,_0x5dc8c6,_0x58c5e6);},'MDhwP':function(_0x2910c7,_0x4d1481,_0x424010){return _0x2910c7(_0x4d1481,_0x424010);},'iQzZU':'Reset','hNNbv':function(_0x380313,_0x49bd5e){return _0x380313!==_0x49bd5e;},'CnRMZ':'igFGz','IeFmJ':'yzvzU','MCTvP':_0xaec139(0x58f),'ajqtK':'Sakur'+_0xaec139(0x5b6)+_0xaec139(0x25d),'DvnMt':_0xaec139(0x670)+_0xaec139(0x24a),'jCyDF':'nav','aWSWP':'<svg\x20'+_0xaec139(0x1df)+'ox=\x220'+'\x200\x2024'+'\x2024\x22\x20'+_0xaec139(0x22e)+_0xaec139(0x471)+'logo-'+_0xaec139(0x3fd)+'<path'+'\x20d=\x22M'+_0xaec139(0x324)+_0xaec139(0x52d)+_0xaec139(0x13e)+_0xaec139(0x16b)+_0xaec139(0x39b)+_0xaec139(0x29a)+_0xaec139(0x507)+'8-4.5'+_0xaec139(0x50e)+'5s4\x202'+'\x204\x204.'+_0xaec139(0x42a)+_0xaec139(0x552)+_0xaec139(0x60b)+_0xaec139(0x133)+'fill='+_0xaec139(0x208)+'\x22\x20str'+_0xaec139(0x484)+'#ff6b'+_0xaec139(0x5e6)+_0xaec139(0x570)+_0xaec139(0x138)+'h=\x222\x22'+_0xaec139(0x2a0)+_0xaec139(0x4fe)+_0xaec139(0x437)+'=\x22rou'+_0xaec139(0x66c)+_0xaec139(0x570)+_0xaec139(0x588)+_0xaec139(0x39e)+_0xaec139(0x24c)+'d\x22/><'+'circl'+_0xaec139(0x1e7)+_0xaec139(0x28f)+'cy=\x221'+'0\x22\x20r='+_0xaec139(0x196)+'\x20fill'+_0xaec139(0x30e)+_0xaec139(0xe2)+_0xaec139(0x622)+_0xaec139(0x5a6),'ffBqu':_0xaec139(0x2ea),'VYkAz':'mn-ma'+'in','QgAcZ':'heade'+'r','mziVI':'Sakur'+'a\x20Kou'+'r','JNeuC':_0xaec139(0x10e),'owDvi':_0xaec139(0x5b2)+'n','bidTz':'mn-co'+'ls','dbiQj':function(_0x1a5fd4,_0x3d16cf){return _0x1a5fd4+_0x3d16cf;},'cmFvE':_0xaec139(0x3be)+_0xaec139(0x26c),'XDRlb':function(_0x483991,_0x34b283){return _0x483991(_0x34b283);},'yKHfK':_0xaec139(0x57c),'wFdFp':function(_0x52a073,_0x2e8b61){return _0x52a073/_0x2e8b61;},'IGeoI':function(_0x20487f,_0x1cb372){return _0x20487f*_0x1cb372;},'KrzIM':function(_0x8a717b,_0xaee2cb){return _0x8a717b+_0xaee2cb;},'LZrvO':function(_0x1d9898,_0x3d3020){return _0x1d9898-_0x3d3020;},'iuMWG':function(_0x57df87,_0x58d3e5,_0xbc9a1c,_0x3f7767,_0xd3c8ec,_0x717dcb,_0x4830cb){return _0x57df87(_0x58d3e5,_0xbc9a1c,_0x3f7767,_0xd3c8ec,_0x717dcb,_0x4830cb);},'CMYkI':function(_0x5b3139,_0x11898c){return _0x5b3139+_0x11898c;},'KfsUV':function(_0x4447cf,_0x38f4f6){return _0x4447cf+_0x38f4f6;},'XeLTA':function(_0xc9e6c5,_0x4f79b8){return _0xc9e6c5>=_0x4f79b8;},'QUCMN':function(_0x1bb860,_0x199c7a){return _0x1bb860*_0x199c7a;},'pvMut':'sk-sw'+_0xaec139(0x613),'gVKlZ':_0xaec139(0x54c),'TXNqS':function(_0x2810e9){return _0x2810e9();},'xamQj':_0xaec139(0x44c),'iQwZR':_0xaec139(0x61f),'IslMi':function(_0x4d219d,_0x406a50){return _0x4d219d+_0x406a50;},'qzrEG':_0xaec139(0x1c2),'LlMLY':'Move','MJDpY':_0xaec139(0x535),'kJdPE':'safe','vEDgt':_0xaec139(0x29c)+'y','nkMxB':_0xaec139(0x5eb)+'ra-ko'+'ur]\x20m'+_0xaec139(0x268)+_0xaec139(0x2be)+_0xaec139(0x40a)+':','jvLGx':'error','WUMWi':'1.1.0','PsvDY':'god','DnJlT':_0xaec139(0x3d2)+'th','rolnX':_0xaec139(0x2d5)+_0xaec139(0x327),'rQnnk':'Legio'+_0xaec139(0x109)+'forms'+'.Over'+_0xaec139(0x271)+_0xaec139(0x5e7)+_0xaec139(0x5c7)+'on','TbRwX':_0xaec139(0x3f1),'ZYrfs':_0xaec139(0x47f)+'meRun'+'ning','rJwPL':function(_0x1b6731,_0x212e28,_0x57ce4e,_0x42e594,_0x2b050d,_0x490d1e,_0xef8294,_0x4f0747){return _0x1b6731(_0x212e28,_0x57ce4e,_0x42e594,_0x2b050d,_0x490d1e,_0xef8294,_0x4f0747);},'QzNXY':function(_0x1ecb82,_0x1a011d){return _0x1ecb82(_0x1a011d);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0xaec139(0x5ed)+_0xaec139(0x645)]||''))return;if(window[_0xaec139(0x508)+_0xaec139(0x18a)+_0xaec139(0x2d8)])return;window['__SAK'+_0xaec139(0x18a)+'OUR__']=!![];var _0x170171=_0x2a6e37['rJyDB'],_0x514ca7=_0xaec139(0x2ff)+'c6',_0x26a2a0={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x2a6e37[_0xaec139(0x404)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x1793a8={..._0x26a2a0};try{Object['assig'+'n'](_0x1793a8,JSON['parse'](localStorage[_0xaec139(0x3ec)+'em'](_0xaec139(0x3fb)+_0xaec139(0x16c)+'r.v1')||'{}'));}catch(_0x1a4cdd){}function _0x36925f(){var _0x4bd575=_0xaec139,_0x15dd88={'BhBnb':function(_0x454c67,_0x4930fe){return _0x454c67*_0x4930fe;},'zFCuW':_0x2a6e37[_0x4bd575(0x608)],'vQJeX':_0x4bd575(0x5d2)+_0x4bd575(0x375)+_0x4bd575(0x31f)+_0x4bd575(0x57e)+')','jQGxC':_0x2a6e37[_0x4bd575(0x420)],'idDmb':function(_0x2ddd92,_0x2de674){var _0x250c64=_0x4bd575;return _0x2a6e37[_0x250c64(0x311)](_0x2ddd92,_0x2de674);},'hHTvh':function(_0x36b7b2,_0x9103cd){return _0x36b7b2+_0x9103cd;},'XCwFA':_0x4bd575(0x48b),'xmmqi':_0x2a6e37[_0x4bd575(0x385)],'EHPfC':function(_0x520d3c,_0x4f3a3d){return _0x2a6e37['wbthG'](_0x520d3c,_0x4f3a3d);},'pDSqg':function(_0x5c2021,_0x51854a){var _0xc5bacc=_0x4bd575;return _0x2a6e37[_0xc5bacc(0x597)](_0x5c2021,_0x51854a);}};if(_0x2a6e37[_0x4bd575(0x402)]('PSmSE',_0x2a6e37['awgnB'])){var _0x3c4001=_0x48a553[_0x4bd575(0x5bf)](_0x7a0a7a);_0x470fec[_0x4bd575(0x13f)](),_0xf7c75a[_0x4bd575(0x3bf)+_0x4bd575(0x117)]();if(_0x523adc[_0x4bd575(0x4ed)+_0x4bd575(0x2da)])_0x549e2b[_0x4bd575(0x4ed)+_0x4bd575(0x2da)](_0x32de37,_0x5b8ff4,_0x179aac,_0x178fe6,_0x15dd88['BhBnb'](0x2*-0x2ce+0x16f+0x434,_0x44fc97));else _0x4d174e[_0x4bd575(0x3ab)](_0x301595,_0x2fa213,_0x138a62,_0x3fce99);_0x49f1b6[_0x4bd575(0x397)+'tyle']=_0x3c4001?_0x15dd88[_0x4bd575(0x27f)]:_0x4bd575(0x5d2)+'22,8,'+'16,0.'+'7)',_0x3a82d6['fill'](),_0x337c67['lineW'+_0x4bd575(0x66a)]=0xeb*-0x13+-0x2b*-0x39+0x7df,_0x4db34d[_0x4bd575(0x59d)+'eStyl'+'e']=_0x3c4001?_0x2acdf1:_0x4bd575(0x5d2)+_0x4bd575(0x3a8)+'07,15'+_0x4bd575(0x499)+'5)',_0x14cf3f[_0x4bd575(0x59d)+'e'](),_0x3c4001&&(_0x2c8a77[_0x4bd575(0x263)+'wColo'+'r']=_0x9846a7,_0x16621a['shado'+'wBlur']=-0x2af+0x16eb*0x1+0x29*-0x7e,_0x4309f7[_0x4bd575(0x102)](),_0xfbb09f[_0x4bd575(0x263)+_0x4bd575(0x3c6)]=0x26ba+-0x5*0x6e9+-0x42d),_0x5886a3[_0x4bd575(0x397)+'tyle']=_0x3c4001?_0x4bd575(0x457):_0x15dd88['vQJeX'],_0x2719e1['textA'+'lign']=_0x4bd575(0x1d6)+'r',_0x2ab5ed[_0x4bd575(0x156)+_0x4bd575(0x275)+'ne']=_0x4bd575(0x618)+'e',_0x264ef0['font']='700\x20'+_0x3bcfdb['round']((-0x1*-0xf6f+-0x29*-0x9f+-0x28da)*_0x154694)+_0x15dd88[_0x4bd575(0x675)],_0x303d26['fillT'+_0x4bd575(0x52c)](_0x4bb76f,_0x432d8f+_0x3daf1a/(-0x92*0x30+-0x5a5*-0x5+-0xd7),_0x15dd88['idDmb'](_0x15dd88['hHTvh'](_0x532d0f,_0x2b0bc9/(0x675+-0x1*0x4c2+-0x1b1)),_0x3a6359?_0x15dd88[_0x4bd575(0x18b)](0x1c23+-0xa57*0x1+-0x11c7,_0x2c4a84):-0x2*0x11d7+0x2255*0x1+-0x45*-0x5)),_0x3e5630&&(_0x1ac78d[_0x4bd575(0xe9)]=_0x15dd88[_0x4bd575(0x526)](_0x15dd88[_0x4bd575(0x47c)],_0x4f7f18[_0x4bd575(0x4ed)](_0x15dd88['BhBnb'](0x50d+-0x71*0x3e+0x165a,_0x256bc9)))+_0x15dd88[_0x4bd575(0x675)],_0x38bf89['fillS'+'tyle']=_0x3c4001?_0x4bd575(0x457):_0x15dd88[_0x4bd575(0x4b6)],_0x189fc8[_0x4bd575(0x55c)+'ext'](_0x114ea6,_0x15dd88['hHTvh'](_0x48a8a9,_0x15dd88['EHPfC'](_0xa02ad0,0x1*0x1d52+-0xb09+-0x1247)),_0x15dd88[_0x4bd575(0x2ba)](_0xaf9686,_0x15dd88[_0x4bd575(0x134)](_0x3658c4,0x1*0x1be7+0x2*-0x813+-0xbbf))+(-0x1f50+-0x1*-0x2512+-0x5ba)*_0x144126)),_0x527be8[_0x4bd575(0x29f)+'re']();}else try{localStorage[_0x4bd575(0x346)+'em'](_0x2a6e37[_0x4bd575(0x127)],JSON[_0x4bd575(0x4a3)+_0x4bd575(0x1d9)](_0x1793a8));}catch(_0x472e40){}}var _0xb0bb11={'uwmk':!!window['Unity'+_0xaec139(0x3bc)+_0xaec139(0x11b)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x1793a8['safeM'+'ode'],'lastError':''};try{if(_0x2a6e37['izltD']('HJtqg','izMit'))window[_0xaec139(0x178)+'entLi'+'stene'+'r'](_0x2a6e37[_0xaec139(0x4f3)],_0x5584cc=>{var _0x3d6c87=_0xaec139,_0x4b4b23={'JiHFr':function(_0x1ecbe9,_0x5b3a22){return _0x2a6e37['eTjXL'](_0x1ecbe9,_0x5b3a22);},'QLpKD':_0x3d6c87(0x3bd)+_0x3d6c87(0x256),'DoHTb':_0x3d6c87(0x24f),'yrONY':'SAFE\x20'+_0x3d6c87(0x12c)+'-\x20ove'+'rlay\x20'+_0x3d6c87(0x5ba)+_0x3d6c87(0x632)+_0x3d6c87(0x3fe)+'(relo'+_0x3d6c87(0x469)+'\x20exit'+')','NCRch':function(_0x55e374,_0x33dc21){return _0x2a6e37['uuFMe'](_0x55e374,_0x33dc21);},'Nwclv':function(_0x264416,_0x3f9b47){return _0x264416+_0x3f9b47;},'dxhld':function(_0x256420,_0x3daeae){return _0x256420+_0x3daeae;},'vYLko':function(_0x371ac6,_0x3daf0f){return _0x371ac6+_0x3daf0f;},'Yuovq':_0x3d6c87(0x1aa)+'ks\x20ar'+'med\x20('+'all\x20o'+'ff)','lRiGd':'\x20|\x20sh'+_0x3d6c87(0x101)+'\x20','jpcqp':_0x2a6e37[_0x3d6c87(0x64a)],'LmbYb':_0x2a6e37[_0x3d6c87(0x463)],'BkGsD':'none','XvMZC':_0x3d6c87(0x664)+_0x3d6c87(0x3b7)+_0x3d6c87(0x529)+'overl'+'ay\x20on'+_0x3d6c87(0x44a)+_0x3d6c87(0x12e)+_0x3d6c87(0x2b7)+'he\x20us'+'erscr'+_0x3d6c87(0x30f)};try{if(_0x2a6e37['XHDGk'](_0x2a6e37[_0x3d6c87(0x438)],_0x3d6c87(0xf1))){var _0x58e6cb=_0x5584cc&&(_0x5584cc['messa'+'ge']||_0x5584cc['error']&&_0x5584cc[_0x3d6c87(0x616)]['messa'+'ge'])||_0x3d6c87(0x322)+'wn';if(_0x5584cc&&_0x5584cc['filen'+_0x3d6c87(0x645)])_0x58e6cb+=_0x2a6e37[_0x3d6c87(0x16e)](_0x2a6e37[_0x3d6c87(0x1b5)],_0x2a6e37[_0x3d6c87(0x34f)](String,_0x5584cc['filen'+_0x3d6c87(0x645)])['split']('/')[_0x3d6c87(0x620)]())+':'+(_0x5584cc[_0x3d6c87(0x4b0)+'o']||'?');_0xb0bb11[_0x3d6c87(0x358)+'rror']=String(_0x58e6cb)[_0x3d6c87(0x4aa)](0x1f8+0x1f51+-0x2149,0xd*-0x20b+-0x21ac+0x1449*0x3);}else{if(!_0x3415f8)return;var _0x5e4b33=_0x314372[_0x3d6c87(0x67c)+_0x3d6c87(0x267)];for(var _0x278256=-0x597*0x6+0x2*0x1bb+0x1e14;_0x4b4b23['JiHFr'](_0x278256,_0x5e4b33[_0x3d6c87(0x634)+'h']);_0x278256++){var _0x39ee05=_0x5e4b33[_0x278256]['query'+_0x3d6c87(0x49d)+'tor'](_0x4b4b23[_0x3d6c87(0xe6)]);_0x39ee05&&(_0x39ee05['textC'+'onten'+'t']['index'+'Of'](_0x4b4b23[_0x3d6c87(0x434)])===-0xaef*0x3+-0x9a5+0x2a72||_0x39ee05['textC'+'onten'+'t'][_0x3d6c87(0x17c)+'Of'](_0x3d6c87(0x580))===-0x1f12*-0x1+-0x1e54+0x5f*-0x2)&&(_0x39ee05[_0x3d6c87(0x51e)+'onten'+'t']=_0x53d248[_0x3d6c87(0xfe)+_0x3d6c87(0x478)]?_0x4b4b23['yrONY']:_0x11f204[_0x3d6c87(0x517)]?_0x4b4b23['NCRch'](_0x4b4b23['Nwclv'](_0x4b4b23[_0x3d6c87(0xfb)](_0x4b4b23[_0x3d6c87(0x206)]('UWMK\x20'+'bound'+'\x20',_0x45e228['hooks'+_0x3d6c87(0x11f)]?_0x4b4b23[_0x3d6c87(0x527)](_0x3fe570[_0x3d6c87(0x2f1)+'Ok'],'/')+_0x4c333c['hooks'+'Total']+(_0x3d6c87(0x2e3)+'s'):_0x4b4b23[_0x3d6c87(0xec)]),_0x3d6c87(0x313)+_0x3d6c87(0x612))+(_0x892d48[_0x3d6c87(0x21a)+'oaded']?'loade'+'d':'loadi'+'ng')+_0x4b4b23[_0x3d6c87(0x21b)],_0x3598de['shoot'+'ers']?_0x3d6c87(0x55a):_0x3d6c87(0x140))+_0x4b4b23[_0x3d6c87(0x444)],_0x250d93[_0x3d6c87(0x207)+_0x3d6c87(0x583)]?_0x4b4b23[_0x3d6c87(0x45b)]:_0x4b4b23['BkGsD'])+(_0xcfca20[_0x3d6c87(0x358)+_0x3d6c87(0x1d5)]?_0x4b4b23[_0x3d6c87(0x206)](_0x3d6c87(0x15c)+'R:\x20',_0x4a7647[_0x3d6c87(0x358)+'rror']):''):_0x4b4b23['XvMZC']);}}}catch(_0x5dcb66){}});else{var _0x49b666=(_0xaec139(0x19d)+'|4|1|'+_0xaec139(0xee))['split']('|'),_0x4d75ad=-0x6f*-0x49+0xf*-0x271+0x4f8;while(!![]){switch(_0x49b666[_0x4d75ad++]){case'0':_0x5302cc=_0x5c322b[_0xaec139(0x32d)+'WebMo'+'dkit']['Value'+_0xaec139(0x425)+'er'];continue;case'1':if(_0x5c8743[_0xaec139(0x4f9)+_0xaec139(0x105)+'il'])_0x2a6e37['xrFPU'](_0xf77c7,'noRec'+'oil','Legio'+'nPlat'+'forms'+'.Over'+'tide.'+_0xaec139(0x5e7)+_0xaec139(0x5c7)+'on','Tick',[_0xaec139(0x41c)],_0x48a6c4,_0x530c82,!!_0x188b78[_0xaec139(0x2d5)+_0xaec139(0x327)]);continue;case'2':if(_0xe56f95['hookC'+'aptur'+'e'])_0x36a214(_0xaec139(0x29b)+'ve',_0x2a6e37[_0xaec139(0x21f)],'IsGro'+_0xaec139(0x112),[_0xaec139(0x41c)],'i32',(_0x211af1,_0x28d6d1)=>{var _0x3bd72e=_0xaec139;_0x370b85(_0x48700a,_0x28d6d1,_0x53e44c,'movem'+_0x3bd72e(0x583));},!![]);continue;case'3':_0x50d177=_0x58c551['Unity'+_0xaec139(0x3bc)+_0xaec139(0x11b)][_0xaec139(0x4a5)+'me'][_0xaec139(0x169)+'ePlug'+'in']({'name':_0xaec139(0x4d9)+'aKour','version':'1.1.0','referencedAssemblies':[_0xaec139(0x54a)+_0xaec139(0x26a)+'Sharp'+_0xaec139(0x3c4)]});continue;case'4':if(_0x2b84c2[_0xaec139(0x46f)+_0xaec139(0x108)])_0x26bee9(_0xaec139(0x43c)+'e',_0xaec139(0x3d2)+'th','Local'+_0xaec139(0x224),[_0x2a6e37['yPCfy'],_0xaec139(0x41c),_0x2a6e37['yPCfy'],_0x2a6e37['yPCfy'],_0x2a6e37['yPCfy']],_0x28f9a8,_0xd178c1,!!_0x48e7fe['god']);continue;case'5':if(_0x1accfc[_0xaec139(0x46f)+'od'])_0x528da1('god',_0xaec139(0x3d2)+'th',_0x2a6e37['BHMZq'],[_0xaec139(0x41c),'i32'],_0x57dbc6,_0x1eadb9,!!_0x1cdf27['god']);continue;case'6':if(_0x5add8d[_0xaec139(0x34d)+_0xaec139(0x14e)+'e'])_0x1ef68a('capSh'+'ooter','OShoo'+_0xaec139(0x371),_0xaec139(0x47f)+_0xaec139(0x355)+_0xaec139(0x4c2),[_0xaec139(0x41c),_0x2a6e37['yPCfy']],_0x2dae98,(_0x5e2e17,_0xf15089)=>{var _0x23cdc7=_0xaec139;_0x536a9d(_0x194989,_0xf15089,_0x5de2bd,_0x23cdc7(0x572)+'ers');},!![]);continue;}break;}}}catch(_0x43296c){}var _0x324cc3=null,_0x463125=null,_0x2c1d6e={},_0x51a022=[],_0x269014=[],_0x194f1b=new Map();function _0x3c3fa1(_0x1d1541,_0xe4478a){var _0x32001c=_0xaec139;if(_0x32001c(0x137)!=='JrAqP'){if(!_0xe4478a||_0x1d1541[_0x32001c(0x204)+_0x32001c(0x43f)](_0xe4478a)||_0x1d1541[_0x32001c(0x634)+'h']>-0x5*0x214+0x1897+-0xdf3*0x1)return;_0x1d1541[_0x32001c(0x5ee)](_0xe4478a);}else _0x1a6d97['add'](_0x362d9c[_0x32001c(0x40e)]);}function _0x2d8cb9(_0x1b5673,_0x47c6b7,_0x2cb305,_0x50d867){var _0x1a3511=_0xaec139,_0x535c1e=-0x19b3+0x18cc+0xe7*0x1;try{_0x535c1e=_0x47c6b7&&_0x47c6b7['val']?_0x47c6b7['val']():0x561+-0xb51*0x3+0x1c92;}catch(_0x37cb05){}if(!_0x535c1e)return;_0x3c3fa1(_0x1b5673,_0x535c1e),_0x2cb305[_0x50d867]=_0x1b5673[_0x1a3511(0x634)+'h'];if(_0x2a6e37['nAmty'](_0x50d867,_0x1a3511(0x207)+'ents')&&_0x1b5673[_0x1a3511(0x634)+'h']){var _0x240334=_0x2c1d6e[_0x1a3511(0x29b)+'ve'];if(_0x240334)try{_0x240334[_0x1a3511(0x1dd)+'ed']=![];}catch(_0x1ec195){}}}function _0x9d9a68(_0x2dd30a,_0x19df87,_0xb1c6cf){var _0xf91311=_0xaec139;if(_0xf91311(0x5a5)===_0xf91311(0x5a5)){var _0x49244f=_0x194f1b['get'](_0x2dd30a);!_0x49244f&&(_0x49244f=new Map(),_0x194f1b['set'](_0x2dd30a,_0x49244f));if(!_0x49244f[_0xf91311(0x5bf)](_0x19df87))try{var _0x43380d=new _0x324cc3(_0x2dd30a)[_0xf91311(0x1c4)+_0xf91311(0x56c)](_0x19df87,_0xb1c6cf);_0x49244f['set'](_0x19df87,_0x43380d!==undefined?_0x43380d[_0xf91311(0x424)]():null);}catch(_0x29b026){_0x49244f[_0xf91311(0x2ad)](_0x19df87,null);}return _0x49244f['get'](_0x19df87);}else _0x251660(_0x44e0cf,0x48b+0x2461+-0x28a4,_0x2a6e37[_0xf91311(0x4ef)],_0x5ac219),_0x2a6e37[_0xf91311(0x118)](_0x337d5,_0x50a76d,0x3b*-0x1e+0x9b*0x38+0x2*-0xd59,_0x2a6e37['nHIhq'],_0x2dcb58);}function _0x530898(_0x3b60b4,_0x154a6d,_0x3c0048,_0x3db0eb){var _0x913900=_0xaec139;try{new _0x324cc3(_0x3b60b4)[_0x913900(0x25e)+_0x913900(0x4e0)](_0x154a6d,_0x3c0048,_0x3db0eb);}catch(_0x5e2175){}}function _0x28776d(_0x5ce06c,_0x421512){var _0x24df8e=_0xaec139;try{var _0x584def=new _0x324cc3(_0x5ce06c)[_0x24df8e(0x1c4)+_0x24df8e(0x56c)](_0x421512,_0x24df8e(0x393));return _0x584def?_0x584def[_0x24df8e(0x424)]():-0xe55*0x1+0xa27+0x6b*0xa;}catch(_0x3c774e){return 0x2557+0x7a*-0x2b+-0x10d9;}}function _0x1d72b8(_0x4dca9e,_0x340bdd,_0x23d546,_0xcddd44){var _0x4a94f2=_0xaec139,_0x46d6f1=_0x2a6e37['UuRZg'](_0x9d9a68,_0x4dca9e,_0x340bdd,_0x23d546);if(_0x46d6f1!=null)_0x2a6e37[_0x4a94f2(0x118)](_0x530898,_0x4dca9e,_0x340bdd,_0x23d546,_0x2a6e37[_0x4a94f2(0x291)](_0x46d6f1,_0xcddd44));}function _0x1b2fbb(_0xb5dc99,_0x32aae1,_0x5c0d53,_0x468882,_0xa0a94e,_0xeb5738,_0x187616){var _0x3a9a47=_0xaec139;try{var _0x204962=_0x463125['hookP'+'refix']({'typeName':_0x32aae1,'methodName':_0x5c0d53,'params':_0x468882,'returnType':_0xa0a94e},_0xeb5738);return _0x204962[_0x3a9a47(0x1dd)+'ed']=_0x2a6e37['kWEOY'](_0x187616,![]),_0x2c1d6e[_0xb5dc99]=_0x204962,_0xb0bb11['hooks'+_0x3a9a47(0x11f)]++,_0x204962;}catch(_0x425aed){if(_0x2a6e37['UwgAV']!==_0x2a6e37['ydwDB'])return console['warn'](_0x2a6e37[_0x3a9a47(0x235)],_0xb5dc99,_0x425aed&&_0x425aed['messa'+'ge']),null;else _0x104659[_0x3a9a47(0x335)]=_0x178c75,_0x2a6e37['aUbBu'](_0x4a2fbb);}}function _0xf06847(_0x5e9f88,_0x108fee,_0x273638,_0x186cf1,_0x4f9763,_0x5d7a81,_0x3b63c6){var _0x41708d=_0xaec139,_0x232cfd={'ACZiK':_0x41708d(0x4d0),'drzIJ':function(_0x53fe49,_0x293a6f){return _0x53fe49+_0x293a6f;},'kRgcU':function(_0x40cacf,_0x1cd5fb){return _0x40cacf/_0x1cd5fb;},'ubotW':function(_0x20b819,_0x662eb1){return _0x20b819-_0x662eb1;},'Ucqkn':function(_0x278c52,_0x49d07a){return _0x278c52+_0x49d07a;},'vyKsE':function(_0x1ee4e2,_0x429c0b){return _0x2a6e37['wbthG'](_0x1ee4e2,_0x429c0b);},'KcWvS':function(_0x5b679c,_0x3eb09d){var _0x1576e5=_0x41708d;return _0x2a6e37[_0x1576e5(0x291)](_0x5b679c,_0x3eb09d);},'hUXOj':function(_0x2c064f,_0x3174d3){return _0x2c064f===_0x3174d3;},'hwoFt':function(_0x5947c3,_0x283ec4){return _0x2a6e37['LlXLI'](_0x5947c3,_0x283ec4);},'gVgje':function(_0x296973,_0x3b71f0){return _0x296973*_0x3b71f0;},'LEJHa':_0x41708d(0x5f7),'exnWO':function(_0x1b4e59,_0xdd6711){var _0x382eb7=_0x41708d;return _0x2a6e37[_0x382eb7(0x597)](_0x1b4e59,_0xdd6711);},'wdsmU':function(_0x595a9e,_0x22dcee){var _0x889644=_0x41708d;return _0x2a6e37[_0x889644(0x597)](_0x595a9e,_0x22dcee);},'HfZhc':function(_0x350b50,_0x29bd19,_0x54b6f4,_0x172868,_0x229991,_0x4778fc,_0xaa055a,_0x21b169){var _0x61d804=_0x41708d;return _0x2a6e37[_0x61d804(0x454)](_0x350b50,_0x29bd19,_0x54b6f4,_0x172868,_0x229991,_0x4778fc,_0xaa055a,_0x21b169);},'uBybW':function(_0x25d225,_0x133180){var _0x10737f=_0x41708d;return _0x2a6e37[_0x10737f(0x34f)](_0x25d225,_0x133180);},'bFXKP':_0x41708d(0x1a6)+'3','eZfOG':function(_0x205c8c,_0x326385){return _0x205c8c(_0x326385);},'saGfv':function(_0x5a5e79,_0x36c28c){return _0x5a5e79(_0x36c28c);}};try{var _0x49388d=_0x463125[_0x41708d(0x630)+_0x41708d(0x1ab)+'x']({'typeName':_0x108fee,'methodName':_0x273638,'params':_0x186cf1,'returnType':_0x4f9763},_0x5d7a81);return _0x49388d['enabl'+'ed']=_0x3b63c6!==![],_0x2c1d6e[_0x5e9f88]=_0x49388d,_0xb0bb11[_0x41708d(0x2f1)+_0x41708d(0x11f)]++,_0x49388d;}catch(_0x335516){if(_0x2a6e37['LiYOF'](_0x2a6e37['VTeoV'],_0x2a6e37[_0x41708d(0x609)]))return console[_0x41708d(0x242)](_0x2a6e37[_0x41708d(0x235)],_0x5e9f88,_0x335516&&_0x335516['messa'+'ge']),null;else{var _0xcb418b=(_0x41708d(0x5ce)+'7|10|'+'12|5|'+_0x41708d(0x547)+'1|0|8'+_0x41708d(0x122)+_0x41708d(0x14b))['split']('|'),_0x4105d7=0x1e5a+0xccb+-0x2b25;while(!![]){switch(_0xcb418b[_0x4105d7++]){case'0':_0x3feaf6('S',_0x232cfd['ACZiK'],_0x232cfd['drzIJ'](_0x19eafb,_0x22908d)+_0x3fe418,_0x1e2892+_0x22908d+_0x3fe418,_0x22908d,_0x22908d);continue;case'1':_0x3feaf6('A','KeyA',_0x19eafb,_0x1e2892+_0x22908d+_0x3fe418,_0x22908d,_0x22908d);continue;case'2':var _0x24dfe5=_0x232cfd[_0x41708d(0x5a0)](_0x232cfd[_0x41708d(0x1c1)](_0xf6d38f,_0x3fe418),0x3*-0x505+-0x87c+0x178d*0x1),_0x25dc69=_0x1e2892+(_0x22908d+_0x3fe418)*(-0x5*0x622+0x3*-0x51b+0x2dfd);continue;case'3':var _0x163ab7={'FGubM':function(_0x2831e3,_0x37e703){return _0x2831e3*_0x37e703;},'QLJLd':_0x41708d(0x1d6)+'r','sUgUh':function(_0x168416,_0x3120c0){return _0x168416+_0x3120c0;},'dFYNI':function(_0x179f81,_0x1e3e3c){return _0x179f81*_0x1e3e3c;},'urHiM':function(_0x1aee8f,_0x2ff3e7){return _0x1aee8f-_0x2ff3e7;},'PyzLX':function(_0x6f1a4a,_0x56bcf9){return _0x6f1a4a*_0x56bcf9;},'TSlSK':function(_0x41edf5,_0x313887){return _0x41edf5*_0x313887;},'IyXUo':function(_0x5d8454,_0x58843f){var _0x3ce6ba=_0x41708d;return _0x232cfd[_0x3ce6ba(0x5c0)](_0x5d8454,_0x58843f);},'hMtsA':function(_0x2e832e,_0x13c2c2){var _0x21f8da=_0x41708d;return _0x232cfd[_0x21f8da(0x22f)](_0x2e832e,_0x13c2c2);}};continue;case'4':_0x3feaf6('','Space',_0x19eafb,_0x25dc69+_0x22908d+_0x3fe418,_0xf6d38f,_0x232cfd['KcWvS'](_0x22908d,0x47f+0x10*0x196+-0x1ddf+0.45));continue;case'5':var _0x1e2892=_0x232cfd['hUXOj'](_0x1f7239,'ml')?_0x5731ae['top']+_0x5348d6['heigh'+'t']/(0x4be*-0x5+-0x294+0x1a4c)-_0x232cfd[_0x41708d(0x5a0)](_0x319c46,-0x6d9+0x55e+0x17d):_0x232cfd['ubotW'](_0x232cfd[_0x41708d(0x1c1)](_0x5495f8['botto'+'m'],_0x319c46),_0x232cfd[_0x41708d(0x238)](_0x1f7239,'bl')?-0x100a*-0x1+0x4*0x206+-0x17c2:0x156e+-0x12c9+-0x20f);continue;case'6':_0x3feaf6('W','KeyW',_0x19eafb+_0x22908d+_0x3fe418,_0x1e2892,_0x22908d,_0x22908d);continue;case'7':var _0xf6d38f=_0x22908d*(0x21e9*-0x1+0x3*-0xa8c+0x4190*0x1)+_0x3fe418*(-0x173f*-0x1+-0x84d+-0xef0),_0x319c46=_0x22908d*(-0x2213+0xc4+-0xa*-0x355)+_0x232cfd[_0x41708d(0x3f4)](_0x3fe418,0xefe+-0x1e38+0x1a*0x96);continue;case'8':_0x3feaf6('D',_0x232cfd[_0x41708d(0x254)],_0x232cfd['Ucqkn'](_0x19eafb,_0x232cfd[_0x41708d(0x3f4)](_0x232cfd[_0x41708d(0x4a7)](_0x22908d,_0x3fe418),0x60a*-0x4+-0x2*0x1064+0x38f2)),_0x232cfd[_0x41708d(0x43b)](_0x1e2892+_0x22908d,_0x3fe418),_0x22908d,_0x22908d);continue;case'9':_0x232cfd['HfZhc'](_0x3feaf6,_0x41708d(0x5a1),_0x41708d(0x1a6)+'1',_0x19eafb,_0x25dc69,_0x24dfe5,_0x22908d,_0x54d08f['ksCps']?_0x232cfd[_0x41708d(0x119)](_0x345405,0x1449*-0x1+-0xc5a+-0x2*-0x1052)+_0x41708d(0x2ae):'');continue;case'10':var _0x1f7239=_0x2082f5[_0x41708d(0x23a)];continue;case'11':_0x3feaf6('RMB',_0x232cfd['bFXKP'],_0x19eafb+_0x24dfe5+_0x3fe418,_0x25dc69,_0x24dfe5,_0x22908d,_0x533910[_0x41708d(0x661)]?_0x232cfd['eZfOG'](_0x3ccc9c,-0x3ae*0x9+-0xb5+0x21d6)+'\x20CPS':'');continue;case'12':var _0x19eafb=_0x1f7239==='br'?_0x232cfd[_0x41708d(0x1c1)](_0x21888d[_0x41708d(0x3b8)],-0x3*-0x63d+-0xd2*0x1+0x391*-0x5)-_0xf6d38f:_0x1e52ee[_0x41708d(0x594)]+(-0x1*-0x1e2f+-0x2501*-0x1+-0x4320);continue;case'13':var _0x3feaf6=(_0x3347ac,_0x3751a7,_0x5a542d,_0x510bd3,_0x21e24b,_0x379f08,_0x3c888a)=>{var _0x413cf0=_0x41708d,_0x4a20ab=_0x1417d0[_0x413cf0(0x5bf)](_0x3751a7);_0x55ef71[_0x413cf0(0x13f)](),_0x2251fb[_0x413cf0(0x3bf)+_0x413cf0(0x117)]();if(_0x37efba[_0x413cf0(0x4ed)+_0x413cf0(0x2da)])_0x226239[_0x413cf0(0x4ed)+'Rect'](_0x5a542d,_0x510bd3,_0x21e24b,_0x379f08,_0x163ab7['FGubM'](0x21bc+0x164b+0xe*-0x400,_0x45e9a0));else _0x1e93e9[_0x413cf0(0x3ab)](_0x5a542d,_0x510bd3,_0x21e24b,_0x379f08);_0x44fbab['fillS'+_0x413cf0(0x281)]=_0x4a20ab?'rgba('+_0x413cf0(0x3a8)+'07,15'+'7,0.8'+'5)':_0x413cf0(0x5d2)+_0x413cf0(0x45e)+_0x413cf0(0x435)+'7)',_0x44e2df[_0x413cf0(0x102)](),_0x481806['lineW'+_0x413cf0(0x66a)]=0xb2c+0x1*0x18c6+-0x23f1,_0xbd8d3f['strok'+_0x413cf0(0x5ab)+'e']=_0x4a20ab?_0x4a61ee:_0x413cf0(0x5d2)+'255,1'+_0x413cf0(0x2a1)+_0x413cf0(0x499)+'5)',_0x467780[_0x413cf0(0x59d)+'e'](),_0x4a20ab&&(_0x50ad6e['shado'+_0x413cf0(0x60c)+'r']=_0xc3d1e6,_0xeed3ad[_0x413cf0(0x263)+'wBlur']=-0xb36+-0x1e4+0xd28,_0x1fb4d9['fill'](),_0x15ad5b[_0x413cf0(0x263)+'wBlur']=-0x1073+0xdba+0x2b9*0x1),_0x26949b[_0x413cf0(0x397)+'tyle']=_0x4a20ab?'#fff':_0x413cf0(0x5d2)+'255,2'+_0x413cf0(0x31f)+_0x413cf0(0x57e)+')',_0x631221[_0x413cf0(0x13d)+'lign']=_0x163ab7[_0x413cf0(0x410)],_0x5235fd[_0x413cf0(0x156)+_0x413cf0(0x275)+'ne']=_0x413cf0(0x618)+'e',_0x271e1b[_0x413cf0(0xe9)]=_0x163ab7[_0x413cf0(0x48e)]('700\x20'+_0x427809[_0x413cf0(0x4ed)](_0x163ab7['dFYNI'](-0x2bf*-0xb+0x5*0x247+-0x298c,_0x45e9a0)),'px\x20ui'+_0x413cf0(0x19a)+'-seri'+'f,sys'+_0x413cf0(0x652)+_0x413cf0(0x4e3)+'s-ser'+'if'),_0x381fb8[_0x413cf0(0x55c)+_0x413cf0(0x52c)](_0x3347ac,_0x163ab7['sUgUh'](_0x5a542d,_0x21e24b/(-0x1*-0xd81+0x263b+-0x33ba)),_0x163ab7['urHiM'](_0x510bd3+_0x379f08/(0x1*0x50b+0x1*-0x1f2a+-0x1*-0x1a21),_0x3c888a?_0x163ab7[_0x413cf0(0x5b0)](0x1eaa+-0x1*-0xdb1+-0x2c56,_0x45e9a0):0x168*0xc+-0x1654+0x4*0x15d)),_0x3c888a&&(_0x59ef86[_0x413cf0(0xe9)]=_0x163ab7['sUgUh'](_0x413cf0(0x48b),_0x293e23[_0x413cf0(0x4ed)](_0x163ab7[_0x413cf0(0x1ea)](0x121d*-0x2+0x1ad1+0x972,_0x45e9a0)))+('px\x20ui'+_0x413cf0(0x19a)+'-seri'+'f,sys'+_0x413cf0(0x652)+_0x413cf0(0x4e3)+'s-ser'+'if'),_0x4dc675[_0x413cf0(0x397)+_0x413cf0(0x281)]=_0x4a20ab?_0x413cf0(0x457):_0x413cf0(0x5d2)+'255,2'+'35,24'+_0x413cf0(0x16a)+'5)',_0x54ee54[_0x413cf0(0x55c)+'ext'](_0x3c888a,_0x5a542d+_0x21e24b/(0x1e6a+-0x4*0x955+0x6ec),_0x163ab7[_0x413cf0(0x31d)](_0x510bd3+_0x163ab7[_0x413cf0(0x49f)](_0x379f08,0x29c*-0x1+-0xc8b*0x3+0x283f),(0x5db+-0x40d*-0x5+0x4*-0x685)*_0x45e9a0))),_0x534e01['resto'+'re']();};continue;case'14':var _0x45e9a0=_0x232cfd[_0x41708d(0x3db)](_0x1c501f,_0x3838f2['ksSca'+'le'])||0x832+-0xb8b+0x2*0x1ad,_0x22908d=_0x232cfd[_0x41708d(0x3f4)](-0x4b0+-0x2*0x786+0x13de,_0x45e9a0),_0x3fe418=(-0xcdc+0xa8a+-0x1*-0x256)*_0x45e9a0;continue;}break;}}}}var _0x21be69=()=>![];try{if(window[_0xaec139(0x32d)+_0xaec139(0x3bc)+_0xaec139(0x11b)]&&!_0x1793a8[_0xaec139(0xfe)+_0xaec139(0x478)]){_0x324cc3=window[_0xaec139(0x32d)+'WebMo'+_0xaec139(0x11b)]['Value'+_0xaec139(0x425)+'er'],_0x463125=window[_0xaec139(0x32d)+_0xaec139(0x3bc)+_0xaec139(0x11b)]['Runti'+'me'][_0xaec139(0x169)+_0xaec139(0x32b)+'in']({'name':_0xaec139(0x4d9)+'aKour','version':_0x2a6e37[_0xaec139(0x4db)],'referencedAssemblies':['Assem'+'bly-C'+'Sharp'+_0xaec139(0x3c4)]});if(_0x1793a8[_0xaec139(0x46f)+'od'])_0x1b2fbb(_0x2a6e37[_0xaec139(0x4e8)],_0x2a6e37[_0xaec139(0x1cc)],'Initi'+'ateTa'+'keHea'+'lth',['i32','i32'],undefined,_0x21be69,!!_0x1793a8['god']);if(_0x1793a8['hookG'+'odDie'])_0x1b2fbb('godDi'+'e',_0x2a6e37[_0xaec139(0x1cc)],_0xaec139(0x277)+_0xaec139(0x224),['i32',_0xaec139(0x41c),_0xaec139(0x41c),_0x2a6e37['yPCfy'],_0xaec139(0x41c)],undefined,_0x21be69,!!_0x1793a8[_0xaec139(0x4c1)]);if(_0x1793a8[_0xaec139(0x4f9)+_0xaec139(0x105)+'il'])_0x1b2fbb(_0x2a6e37[_0xaec139(0xdf)],_0x2a6e37[_0xaec139(0x491)],_0x2a6e37[_0xaec139(0xe5)],[_0xaec139(0x41c)],undefined,_0x21be69,!!_0x1793a8[_0xaec139(0x2d5)+_0xaec139(0x327)]);if(_0x1793a8[_0xaec139(0x34d)+_0xaec139(0x14e)+'e'])_0xf06847(_0xaec139(0x1b2)+'ooter',_0xaec139(0x2c0)+'ter',_0x2a6e37[_0xaec139(0x3ce)],[_0x2a6e37[_0xaec139(0x450)],'i32'],undefined,(_0x3c6cd0,_0x57beea)=>{var _0x46a364=_0xaec139;_0x2d8cb9(_0x269014,_0x57beea,_0xb0bb11,'shoot'+_0x46a364(0x67b));},!![]);if(_0x1793a8[_0xaec139(0x34d)+_0xaec139(0x14e)+'e'])_0x2a6e37['rJwPL'](_0xf06847,_0xaec139(0x29b)+'ve',_0xaec139(0x4f1)+_0xaec139(0x109)+_0xaec139(0x249)+_0xaec139(0x5f4)+_0xaec139(0x271)+'Movem'+_0xaec139(0x166),'IsGro'+_0xaec139(0x112),[_0x2a6e37['yPCfy']],'i32',(_0x5a8edd,_0x23e6eb)=>{var _0x4660ec=_0xaec139;_0x2d8cb9(_0x51a022,_0x23e6eb,_0xb0bb11,'movem'+_0x4660ec(0x583));},!![]);}}catch(_0x2b746c){console[_0xaec139(0x242)]('[saku'+_0xaec139(0x32c)+'ur]\x20U'+'WMK\x20i'+_0xaec139(0x59f)+_0xaec139(0x153)+':',_0x2b746c&&_0x2b746c[_0xaec139(0x636)+'ge']);}function _0x57d04e(_0x31a050,_0x3d2388){var _0x4b7ec9=_0xaec139,_0x2abc84=_0x2c1d6e[_0x31a050];if(_0x2abc84)try{if(_0x4b7ec9(0x65f)===_0x4b7ec9(0x2cc)){_0x59ab47['stopP'+'ropag'+_0x4b7ec9(0x4d2)]();var _0x492687=_0x226d06[_0x4b7ec9(0x17e)+_0x4b7ec9(0x439)+'te'](_0x2a6e37['jfBkz'])!==_0x2a6e37[_0x4b7ec9(0x2e9)];_0x5118e0['setAt'+_0x4b7ec9(0x439)+'te'](_0x2a6e37['jfBkz'],_0x1155a5(_0x492687)),_0x32fe31(_0x492687);}else _0x2abc84['enabl'+'ed']=!!_0x3d2388;}catch(_0x1c81bb){}}setInterval(()=>{var _0x4f1d93=_0xaec139;if(!_0x324cc3||!window[_0x4f1d93(0x42e)+_0x4f1d93(0x4dc)+_0x4f1d93(0x241)])return;var _0x3917b7=(Number(_0x1793a8['speed'+_0x4f1d93(0x56e)])||0x8cb*-0x4+-0x16d8+-0x2a*-0x164)/(-0x47e+-0x146*0x3+-0x22d*-0x4),_0x40055a=_0x2a6e37[_0x4f1d93(0x53f)](Number(_0x1793a8['jumpP'+'ct'])||-0x12e8+-0x13*-0x1a3+-0xbcd,0x1c25+0x20af+0xf1c*-0x4),_0x1dd3c0=(Number(_0x1793a8[_0x4f1d93(0x685)+_0x4f1d93(0x5b1)])||0x2*-0x10bb+-0x2293*-0x1+-0xb9)/(0x2*-0xb2c+0x110*0x11+0x4ac),_0x153602=Math[_0x4f1d93(0x316)](-0x154a+-0xe7e+-0x1*-0x23c9,Number(_0x1793a8[_0x4f1d93(0x25b)+_0x4f1d93(0x63a)+'e'])||0x2*-0xfc8+-0x126f+-0x17*-0x233),_0x4e7667=_0x3917b7!==-0xe*0x1cd+-0x25bc+0x3ef3||_0x40055a!==-0x4*0x445+-0x1a06+0x2b1b||_0x1dd3c0!==0x962+0x1*0x10bb+-0x1*0x1a1c||_0x1793a8[_0x4f1d93(0x335)],_0x294762=_0x1793a8[_0x4f1d93(0x1f0)+_0x4f1d93(0x4c8)]||_0x1793a8[_0x4f1d93(0x25b)+'eExp']||_0x1793a8[_0x4f1d93(0x2c6)+_0x4f1d93(0x44e)]||_0x1793a8[_0x4f1d93(0x356)+_0x4f1d93(0x1f2)];if(!_0x4e7667&&!_0x294762)return;try{for(var _0x54351b=-0xebc*-0x1+0xcaa+-0x1b66;_0x54351b<_0x51a022[_0x4f1d93(0x634)+'h'];_0x54351b++){var _0x1e83a4=_0x51a022[_0x54351b];if(!_0x1e83a4)continue;_0x3917b7!==-0xcd4+0x1*-0x20a7+0x2d7c&&(_0x2a6e37['WIGoe'](_0x1d72b8,_0x1e83a4,-0xc55+0x5af*-0x2+0x17db,_0x2a6e37[_0x4f1d93(0x4ef)],_0x3917b7),_0x2a6e37['NkCCz'](_0x1d72b8,_0x1e83a4,-0x1d22*0x1+0xe*-0x77+0x11e8*0x2,_0x2a6e37[_0x4f1d93(0x4ef)],_0x3917b7),_0x2a6e37['WIGoe'](_0x1d72b8,_0x1e83a4,0x2e*0x6e+-0x1*0x14d+0x1247*-0x1,_0x2a6e37[_0x4f1d93(0x4ef)],_0x3917b7),_0x2a6e37[_0x4f1d93(0x118)](_0x1d72b8,_0x1e83a4,0x5aa+0x1caa+-0x2220,_0x4f1d93(0x384),_0x3917b7),_0x2a6e37[_0x4f1d93(0x111)](_0x1d72b8,_0x1e83a4,0x4*0x191+-0x5*-0x1d2+-0x2a*0x5d,_0x2a6e37[_0x4f1d93(0x4ef)],_0x3917b7),_0x2a6e37[_0x4f1d93(0x12d)](_0x1d72b8,_0x1e83a4,-0x175d+0xc02*-0x2+0x1*0x2f81,_0x2a6e37[_0x4f1d93(0x4ef)],_0x3917b7));if(_0x40055a!==-0x7d8+-0x1de+-0x3*-0x33d)_0x1d72b8(_0x1e83a4,0x1565+-0x41f+-0x10f6,_0x2a6e37['nHIhq'],_0x40055a);_0x1dd3c0!==-0x1009+0x146a*0x1+-0x460&&(_0x2a6e37[_0x4f1d93(0x118)](_0x1d72b8,_0x1e83a4,0x14b8+-0x9*0x137+-0x981,'f32',_0x1dd3c0),_0x1d72b8(_0x1e83a4,-0x1b*0x57+0x537+0x442,_0x2a6e37['nHIhq'],_0x1dd3c0));if(_0x1793a8['bhop'])_0x530898(_0x1e83a4,-0x1a85+-0x1618+0x3139,'f32',-(0xd*0x81+-0x1c0+-0xe6));}}catch(_0x3d5906){}try{for(var _0x2dceaa=-0x1f*-0xef+-0x4e*0x1+-0x1*0x1ca3;_0x2a6e37[_0x4f1d93(0x38e)](_0x2dceaa,_0x269014[_0x4f1d93(0x634)+'h']);_0x2dceaa++){var _0x20aece=_0x28776d(_0x269014[_0x2dceaa],-0xb4b+0x1*-0x146c+-0x147*-0x19);if(!_0x20aece)continue;_0x1793a8['damag'+_0x4f1d93(0x4c6)]&&(_0x530898(_0x20aece,-0x204f+0x4e*0x5b+-0x1*-0x4e1,_0x2a6e37['yPCfy'],_0x153602),_0x2a6e37['qTMvh'](_0x530898,_0x20aece,-0x1*0x15a5+0x67*0x4+0x1*0x145d,_0x4f1d93(0x41c),_0x153602));_0x1793a8[_0x4f1d93(0x1f0)+_0x4f1d93(0x4c8)]&&(_0x2a6e37[_0x4f1d93(0x532)](_0x2a6e37[_0x4f1d93(0x1ff)],_0x2a6e37['ujzhX'])?(_0x530898(_0x20aece,0x243+-0x1*-0x26a9+-0x2864,'f32',-0x14e7+0xdee+0x6f9),_0x530898(_0x20aece,0xa85*-0x2+-0x1*-0x490+0x10e2*0x1,_0x2a6e37[_0x4f1d93(0x4ef)],-0x2*0xcb3+0x2*0x712+-0x3c1*-0x3)):(_0x2e96ee={..._0xb8daa7},_0x35ac83(),_0x4f7a39[_0x4f1d93(0x4bb)+'d']()));if(_0x1793a8['infAm'+'moExp'])_0x2a6e37['HBqZT'](_0x530898,_0x20aece,0xd07+0x318+0x1*-0xfc3,_0x2a6e37['yPCfy'],-0x4e+-0x1fff+0x90d*0x4);_0x1793a8['rapid'+_0x4f1d93(0x1f2)]&&(_0x2a6e37[_0x4f1d93(0x111)](_0x1d72b8,_0x20aece,0x1661+0x106c+-0x1*0x2641,'f32',-0xfab*0x1+0x28b+0xd20+0.1),_0x2a6e37[_0x4f1d93(0x328)](_0x530898,_0x20aece,0x79+0x3*0x588+0x1*-0x10b1,_0x2a6e37[_0x4f1d93(0x4ef)],-0x48f*0x2+-0x134d+0x1c6b*0x1+0.1));}}catch(_0x182af3){}},0x1066+-0x1d*0xcf+0x7d5),setInterval(()=>{var _0x6ae8b8=_0xaec139;_0xb0bb11[_0x6ae8b8(0x21a)+_0x6ae8b8(0x198)]=!!window[_0x6ae8b8(0x42e)+'Insta'+_0x6ae8b8(0x241)];try{var _0x1a43bb=-0x2557*-0x1+-0x4*0x3a8+0x1*-0x16b7;for(var _0x1c06f1 in _0x2c1d6e){if(_0x2c1d6e[_0x1c06f1]&&_0x2c1d6e[_0x1c06f1]['appli'+'ed'])_0x1a43bb++;}_0xb0bb11[_0x6ae8b8(0x2f1)+'Ok']=_0x1a43bb;}catch(_0x408d86){}},-0x8cb*-0x1+-0x1a7b*0x1+0x1598);var _0x4dab10=new Set(),_0xa33347={0x1:[],0x3:[]},_0xb9c5bd=![];function _0x1e4a6f(_0x39f811){var _0x27a363=_0xaec139,_0x5123b9={'mIdgf':function(_0x2568e4,_0x49cd8c,_0x24a0cf,_0x3b1565){return _0x2a6e37['msKPi'](_0x2568e4,_0x49cd8c,_0x24a0cf,_0x3b1565);},'wPfcP':function(_0x422b55,_0x549ef9,_0x5e57b6,_0x1ab8a3,_0x1ca74a){var _0x579190=_0x4e2b;return _0x2a6e37[_0x579190(0x648)](_0x422b55,_0x549ef9,_0x5e57b6,_0x1ab8a3,_0x1ca74a);}};if(_0x2a6e37[_0x27a363(0x521)](_0x27a363(0x3bb),_0x2a6e37['SXayY'])){var _0x5d8859=_0x5123b9[_0x27a363(0x232)](_0x508c94,_0x3d859f,_0x1ec433,_0x23e35b);if(_0x5d8859!=null)_0x5123b9['wPfcP'](_0x3978fb,_0x5d463f,_0x4e3b22,_0x3ac58b,_0x5d8859*_0x112917);}else _0x4dab10[_0x27a363(0x5a9)](_0x39f811['code']);}function _0xb306ee(_0x300dd3){var _0x437846=_0xaec139;_0x4dab10[_0x437846(0x298)+'e'](_0x300dd3[_0x437846(0x40e)]);}function _0x258f66(_0x396592){var _0x31ff4b=_0xaec139;if(_0x31ff4b(0x205)!==_0x31ff4b(0x205))_0x195ffe[_0x31ff4b(0x243)]();else{if(_0x396592[_0x31ff4b(0x3cf)+_0x31ff4b(0x3e9)])return;_0x4dab10[_0x31ff4b(0x5a9)]('mouse'+_0x2a6e37['stANu'](_0x396592[_0x31ff4b(0x5b2)+'n'],0xd4f+0x47b*0x2+0x3b6*-0x6));var _0x279cb1=_0xa33347[_0x396592[_0x31ff4b(0x5b2)+'n']+(0xff+0x25f4+-0x3e5*0xa)];if(_0x279cb1){if(_0x2a6e37[_0x31ff4b(0x3f3)](_0x2a6e37['MBXjS'],'RaZNI'))try{var _0x206853=(_0x31ff4b(0x5b9)+_0x31ff4b(0xff))[_0x31ff4b(0x1cf)]('|'),_0x198a09=-0x1019*0x2+-0x8*-0x223+0x78d*0x2;while(!![]){switch(_0x206853[_0x198a09++]){case'0':var _0x1cba10=_0x3f9e81[_0x31ff4b(0x630)+_0x31ff4b(0x1ab)+'x']({'typeName':_0x1efff1,'methodName':_0x592647,'params':_0x24a1de,'returnType':_0x380646},_0x3241a3);continue;case'1':_0x1bb766[_0x429a35]=_0x1cba10;continue;case'2':_0x2ce1cb[_0x31ff4b(0x2f1)+'Total']++;continue;case'3':return _0x1cba10;case'4':_0x1cba10[_0x31ff4b(0x1dd)+'ed']=_0x31eb50!==![];continue;}break;}}catch(_0x11e599){return _0x584648[_0x31ff4b(0x242)]('[saku'+'ra-ko'+'ur]\x20h'+_0x31ff4b(0x430)+_0x31ff4b(0x2b5)+_0x31ff4b(0x4fb),_0x469771,_0x11e599&&_0x11e599['messa'+'ge']),null;}else{_0x279cb1['push'](performance['now']());if(_0x2a6e37[_0x31ff4b(0x10d)](_0x279cb1[_0x31ff4b(0x634)+'h'],-0x239f+-0x35*-0x61+0xfb2))_0x279cb1['shift']();}}}}function _0x1796b0(_0x56772c){var _0x28ade6=_0xaec139;if(_0x2a6e37[_0x28ade6(0x5c3)](_0x2a6e37['ftlkK'],'YBrQe')){if(!_0x56772c[_0x28ade6(0x3cf)+_0x28ade6(0x3e9)])_0x4dab10[_0x28ade6(0x298)+'e'](_0x2a6e37[_0x28ade6(0x11e)]+(_0x56772c[_0x28ade6(0x5b2)+'n']+(0x384+0x26*0xca+0x4c9*-0x7)));}else _0x2b52ea(!_0x318d95);}function _0x3b47bc(){var _0xfe62c6=_0xaec139;_0x2a6e37['kWEOY'](_0xfe62c6(0x3f7),_0xfe62c6(0x577))?_0x4dab10[_0xfe62c6(0x243)]():(_0x2813d5(_0x1618e4,-0x1259+0x4*0x79a+-0xb87,_0x2a6e37[_0xfe62c6(0x4ef)],0x10a4+0x1*0x1971+-0x2a15),_0x2a6e37[_0xfe62c6(0x41e)](_0x5ebae8,_0x216e30,-0x1*-0x103d+0x78f+-0x3*0x7cc,_0xfe62c6(0x384),-0xe1f+-0x1*-0x11e5+-0x3c5));}function _0x28f8ec(){var _0x1d3006=_0xaec139;if(_0x2a6e37['GpzWf'](_0x1d3006(0x543),_0x2a6e37[_0x1d3006(0x227)])){var _0x3d40bf=_0x2a6e37['ZOLgj']['split']('|'),_0x2308a5=-0x4*0x1c+-0x34*-0xa6+-0x2148;while(!![]){switch(_0x3d40bf[_0x2308a5++]){case'0':if(_0xb9c5bd)return;continue;case'1':window[_0x1d3006(0x178)+'entLi'+_0x1d3006(0x4c4)+'r'](_0x2a6e37[_0x1d3006(0x449)],_0x258f66,!![]);continue;case'2':window['addEv'+_0x1d3006(0x4a9)+'stene'+'r'](_0x1d3006(0x1a6)+'up',_0x1796b0,!![]);continue;case'3':window['addEv'+'entLi'+'stene'+'r'](_0x2a6e37[_0x1d3006(0x489)],_0x3b47bc);continue;case'4':window[_0x1d3006(0x178)+_0x1d3006(0x4a9)+_0x1d3006(0x4c4)+'r'](_0x2a6e37[_0x1d3006(0x250)],_0x1e4a6f,!![]);continue;case'5':_0xb9c5bd=!![];continue;case'6':window['addEv'+'entLi'+'stene'+'r'](_0x1d3006(0x325),_0xb306ee,!![]);continue;}break;}}else{var _0x2caa87=_0x45fc8a['safeM'+_0x1d3006(0x478)]?_0x2a6e37['pxDRC']:_0xfa88b5['uwmk']?_0x2a6e37['AApJO'](_0x2a6e37[_0x1d3006(0x16e)](_0x2a6e37[_0x1d3006(0x359)]('UWMK\x20'+'bound'+'\x20'+(_0x55bc1f[_0x1d3006(0x2f1)+_0x1d3006(0x11f)]?_0x3ff118[_0x1d3006(0x2f1)+'Ok']+'/'+_0x2db4a4[_0x1d3006(0x2f1)+_0x1d3006(0x11f)]+('\x20hook'+'s'):_0x1d3006(0x1aa)+_0x1d3006(0x4b9)+_0x1d3006(0x280)+'all\x20o'+'ff)')+('\x20|\x20ga'+_0x1d3006(0x612))+(_0x51bd17[_0x1d3006(0x21a)+'oaded']?_0x2a6e37['hSSzc']:_0x1d3006(0x5dd)+'ng'),_0x1d3006(0x1a4)+'ooter'+'\x20')+(_0x3c21f0[_0x1d3006(0x572)+_0x1d3006(0x67b)]?_0x2a6e37[_0x1d3006(0x463)]:_0x2a6e37['xULwm']),_0x1d3006(0x602)+_0x1d3006(0x509)+'t\x20'),_0x22658f[_0x1d3006(0x207)+_0x1d3006(0x583)]?_0x2a6e37['kfClM']:_0x1d3006(0x140)):_0x2a6e37['RaNry'];if(_0x76c63d['lastE'+_0x1d3006(0x1d5)])_0x2caa87+=_0x2a6e37['ZLmIS'](_0x1d3006(0x15c)+'R:\x20',_0x1c53ab['lastE'+'rror']);return _0x2df2eb(_0x1d3006(0x132)+'s',_0x2caa87,_0x34c5ad[_0x1d3006(0x517)],null,[_0x2a6e37[_0x1d3006(0x296)](_0x52a52e,'240\x20F'+_0x1d3006(0x222)+'lock',_0x1d3006(0x186)+'\x20Unit'+_0x1d3006(0x5a7)+_0x1d3006(0x14a)+'plica'+'tion.'+'set_t'+_0x1d3006(0x36c)+'Frame'+_0x1d3006(0xdc),_0x2a6e37[_0x1d3006(0x180)](_0x310e94,_0x2a6e37['JQdGD'],()=>{var _0x4942e4=_0x1d3006;try{if(_0x349aeb)_0xb29849[_0x4942e4(0x2ce)]('Unity'+'Engin'+_0x4942e4(0x2aa)+'licat'+'ion',_0x4942e4(0x41f)+_0x4942e4(0x36c)+_0x4942e4(0x586)+'Rate',[-0x1*-0xe9+-0x18d4+-0x849*-0x3]);}catch(_0x22a407){}}))]);}}function _0x39ddf6(_0x616253){var _0x4d7c42=_0xaec139,_0x25185b=_0xa33347[_0x616253]||[],_0x298256=performance[_0x4d7c42(0x209)]();while(_0x25185b[_0x4d7c42(0x634)+'h']&&_0x2a6e37['YuaOZ'](_0x298256,_0x25185b[-0xd*-0x239+-0x1*0x1a4d+-0x298])>0x73b+-0x1501+0x11ae)_0x25185b[_0x4d7c42(0x460)]();return _0x25185b[_0x4d7c42(0x634)+'h'];}function _0x154f29(_0x5dc2f7){var _0x41e5ba=_0xaec139;if(document['body']&&(_0x2a6e37[_0x41e5ba(0x532)](document[_0x41e5ba(0xf0)+'State'],_0x2a6e37[_0x41e5ba(0x4eb)])||document[_0x41e5ba(0xf0)+'State']===_0x2a6e37[_0x41e5ba(0x172)]))_0x5dc2f7();else document['addEv'+_0x41e5ba(0x4a9)+'stene'+'r'](_0x2a6e37['iGXuI'],_0x5dc2f7,{'once':!![]});}_0x2a6e37['QzNXY'](_0x154f29,()=>{var _0x436aeb=_0xaec139,_0x31a85a={'rUdUx':_0x436aeb(0x3d7)+'t','ZEnpq':function(_0x2ca4ed,_0x26d02e){var _0x8c6a72=_0x436aeb;return _0x2a6e37[_0x8c6a72(0x10d)](_0x2ca4ed,_0x26d02e);},'YnmDx':_0x2a6e37[_0x436aeb(0x63d)],'EGFeg':'TssNk','LnGXA':function(_0x573bd9,_0xf24c60){return _0x573bd9!==_0xf24c60;},'CfgHO':_0x436aeb(0x5d2)+_0x436aeb(0x45e)+_0x436aeb(0x435)+'7)','SGevA':'#fff','FKbhr':_0x2a6e37[_0x436aeb(0x420)],'dbwSX':function(_0x20868d,_0x269880){var _0xf7474f=_0x436aeb;return _0x2a6e37[_0xf7474f(0x181)](_0x20868d,_0x269880);},'FgzeW':function(_0x13b25a,_0x4317a0){var _0x589095=_0x436aeb;return _0x2a6e37[_0x589095(0x294)](_0x13b25a,_0x4317a0);},'jZkPZ':_0x2a6e37[_0x436aeb(0x385)],'fGlre':function(_0x3d1440,_0x1fcdfa){return _0x3d1440+_0x1fcdfa;},'maUSE':function(_0x1eebca,_0x3727cc){var _0x2ad060=_0x436aeb;return _0x2a6e37[_0x2ad060(0x3ad)](_0x1eebca,_0x3727cc);},'rALMu':function(_0x100d78,_0x973ea1){return _0x100d78*_0x973ea1;},'MIyxR':function(_0x57dab2,_0x3a27ec){var _0x1fd483=_0x436aeb;return _0x2a6e37[_0x1fd483(0x5d5)](_0x57dab2,_0x3a27ec);},'ZrFWR':function(_0x3d9705,_0x429873){return _0x3d9705+_0x429873;},'hFLOX':function(_0x5a8e23,_0x24553f){return _0x5a8e23===_0x24553f;},'FaiVn':function(_0x2f97fe,_0x38778e,_0xefa2fc,_0x5ce3de,_0xea8b8c,_0x21117b,_0x3dee4a){return _0x2f97fe(_0x38778e,_0xefa2fc,_0x5ce3de,_0xea8b8c,_0x21117b,_0x3dee4a);},'AeJuE':_0x436aeb(0x2b0),'qRMwZ':'KeyS','eyKSm':_0x436aeb(0x5f7),'WXgtD':_0x436aeb(0x2ae),'xaLdd':function(_0x2cf220,_0xbaf25f,_0x572be7,_0x341414,_0x27eb05,_0x578432,_0x534fca){var _0x35316d=_0x436aeb;return _0x2a6e37[_0x35316d(0x2c8)](_0x2cf220,_0xbaf25f,_0x572be7,_0x341414,_0x27eb05,_0x578432,_0x534fca);},'rsjZi':function(_0x1aa36e,_0x286637){return _0x1aa36e+_0x286637;},'eRhwi':function(_0x43635f,_0x490537){return _0x43635f!==_0x490537;},'VoUuN':'msHAM','BDvdh':function(_0x529bcd,_0x25b3a6){return _0x529bcd+_0x25b3a6;},'CQkuR':function(_0x5d8a2c,_0x1457b1){return _0x5d8a2c*_0x1457b1;},'rEkio':function(_0x41384e,_0x360041){return _0x41384e-_0x360041;},'JxxIe':function(_0x40ab52,_0xae5913){var _0x4fe63d=_0x436aeb;return _0x2a6e37[_0x4fe63d(0x294)](_0x40ab52,_0xae5913);},'jQmZj':function(_0x364039,_0x429c39){var _0x55ce41=_0x436aeb;return _0x2a6e37[_0x55ce41(0x31e)](_0x364039,_0x429c39);},'cNDOG':function(_0x11b9e6,_0x12a47e){var _0x33056f=_0x436aeb;return _0x2a6e37[_0x33056f(0x31e)](_0x11b9e6,_0x12a47e);},'HneIk':function(_0x4c266c,_0x450d69){var _0x4f1910=_0x436aeb;return _0x2a6e37[_0x4f1910(0x680)](_0x4c266c,_0x450d69);},'EagXU':function(_0x45861f,_0x24a066){return _0x45861f+_0x24a066;},'VdmkJ':function(_0x1039bd){return _0x1039bd();},'UkFLd':function(_0x50a233,_0xf9c340){return _0x50a233(_0xf9c340);},'Wpnhb':function(_0x576f88,_0x1c4d6e){var _0xb399e0=_0x436aeb;return _0x2a6e37[_0xb399e0(0x673)](_0x576f88,_0x1c4d6e);},'xyviW':function(_0x2cc7c6,_0x519c2e){return _0x2a6e37['QUCMN'](_0x2cc7c6,_0x519c2e);},'qVVWF':_0x2a6e37['owDvi'],'dDpHJ':_0x436aeb(0x2b6)+_0x436aeb(0x2bb)+'ed','IRoXo':_0x2a6e37[_0x436aeb(0x5fd)],'aXGCf':function(_0x443b9b){var _0x4a5dee=_0x436aeb;return _0x2a6e37[_0x4a5dee(0x343)](_0x443b9b);},'jGMqn':_0x2a6e37['gVKlZ'],'KgNFw':'range','gCUAZ':_0x436aeb(0x4ee)+_0x436aeb(0x282),'osoXN':function(_0x3c8610){var _0x2e1ed1=_0x436aeb;return _0x2a6e37[_0x2e1ed1(0x343)](_0x3c8610);},'PPsdi':'u32','wYMyq':function(_0x531803,_0x44f885){return _0x531803(_0x44f885);},'Vyyno':'sk-ca'+'rd','SQLRA':_0x436aeb(0x628)+_0x436aeb(0x1a7)+'ad','IKMoP':_0x436aeb(0x2ea),'sPFXd':_0x436aeb(0x226)+_0x436aeb(0x332),'vaArn':_0x436aeb(0x32d)+_0x436aeb(0x145)+_0x436aeb(0x2aa)+_0x436aeb(0x369)+'ion','EKLrY':function(_0x1110c8,_0x2c1026){var _0xdbd92=_0x436aeb;return _0x2a6e37[_0xdbd92(0x597)](_0x1110c8,_0x2c1026);},'vbCWI':_0x436aeb(0x664)+'bound'+'\x20','ALJHf':_0x436aeb(0x1aa)+'ks\x20ar'+_0x436aeb(0x280)+_0x436aeb(0x2ec)+_0x436aeb(0x1e1),'ttpOC':'loade'+'d','HBLBL':_0x436aeb(0x5dd)+'ng','xDzdD':'\x20|\x20sh'+'ooter'+'\x20','BGhaC':_0x436aeb(0x140),'VsPob':_0x2a6e37[_0x436aeb(0x463)],'eEPtH':_0x436aeb(0x34c),'cQJYx':function(_0x506c31){return _0x2a6e37['TXNqS'](_0x506c31);},'EBWtC':function(_0x5e9104){return _0x5e9104();},'zsGPn':'BHQCU','kcPck':'gCrVH','IbvIp':function(_0x1d8115,_0x3ac24d){return _0x1d8115-_0x3ac24d;},'AzCkW':function(_0x38ea31,_0x94299f){return _0x38ea31+_0x94299f;},'QoMRe':_0x2a6e37['xamQj'],'ZiJWd':function(_0x2d3296,_0x1d2c4c){return _0x2d3296(_0x1d2c4c);},'XgEXa':_0x2a6e37['iQwZR'],'zcEld':'eTUzt','uJrBQ':_0x436aeb(0x3bd)+_0x436aeb(0x256),'kSLhe':'UWMK','wvaKG':function(_0x30fdce,_0x182217){var _0x2e8fc0=_0x436aeb;return _0x2a6e37[_0x2e8fc0(0x2f8)](_0x30fdce,_0x182217);},'cuWCp':function(_0x3cd9dd,_0x5a6c89){return _0x3cd9dd+_0x5a6c89;},'cEJzP':function(_0x5141d2,_0x4cbbf4){return _0x5141d2+_0x4cbbf4;},'LjEAS':_0x436aeb(0x602)+'vemen'+'t\x20','zWsRr':function(_0x2e6b10,_0x4e008d){var _0x269a0e=_0x436aeb;return _0x2a6e37[_0x269a0e(0x1d4)](_0x2e6b10,_0x4e008d);}};if(_0x1793a8['adblo'+'ck']){if(_0x2a6e37[_0x436aeb(0x3f5)]('vRBeL',_0x2a6e37[_0x436aeb(0x307)]))setInterval(()=>{var _0x3829b2=_0x436aeb;try{for(var _0x247c94 of[_0x2a6e37[_0x3829b2(0x2cf)],_0x3829b2(0x288)+_0x3829b2(0x686)+_0x3829b2(0x18e)+_0x3829b2(0x217)+'t','kour-'+_0x3829b2(0x56b)+'0x600'+_0x3829b2(0x3c7)+'nt',_0x2a6e37[_0x3829b2(0x467)]]){if(_0x3829b2(0x200)!=='ifcCd'){var _0x22a441=document['getEl'+_0x3829b2(0x4e4)+_0x3829b2(0x55b)](_0x247c94);if(_0x22a441&&_0x2a6e37['XHDGk'](_0x247c94,'fulls'+_0x3829b2(0xf5)+_0x3829b2(0xdd)+'s')){var _0x2927a0=_0x22a441['child'+'ren'];for(var _0x22d907=-0x1*0x1f2f+0x2195*0x1+-0x266;_0x22d907<_0x2927a0[_0x3829b2(0x634)+'h'];_0x22d907++){if(_0x2927a0[_0x22d907]['id']&&_0x2a6e37[_0x3829b2(0x3f5)](_0x2927a0[_0x22d907]['id'][_0x3829b2(0x17c)+'Of'](_0x3829b2(0x288)+_0x3829b2(0x681)),-0x68*-0x11+-0x3*-0x28+-0x2*0x3b0))_0x2927a0[_0x22d907][_0x3829b2(0x58f)][_0x3829b2(0x650)+'ay']=_0x2a6e37[_0x3829b2(0x212)];}}else{if(_0x22a441)_0x22a441['style']['displ'+'ay']=_0x3829b2(0x140);}}else _0x47968b[_0x3829b2(0x40e)]===_0x31a85a[_0x3829b2(0x446)]&&(_0x1ba647[_0x3829b2(0x199)+'ntDef'+'ault'](),_0x1a2684());}}catch(_0x1c0a9e){}},-0x299+-0x185*0x5+-0x1cd*-0xa);else{if(!_0x5dfc83||_0x3703a3['inclu'+_0x436aeb(0x43f)](_0x176138)||_0x31a85a['ZEnpq'](_0x37218e[_0x436aeb(0x634)+'h'],-0x1217*0x1+0x1166+0x1*0xf1))return;_0x405f93[_0x436aeb(0x5ee)](_0x5a93ef);}}var _0x34ef56=document[_0x436aeb(0x169)+_0x436aeb(0x185)+_0x436aeb(0x166)](_0x436aeb(0x63b)+'s');_0x34ef56['style'][_0x436aeb(0x52f)+'xt']=_0x436aeb(0x591)+_0x436aeb(0x230)+_0x436aeb(0x621)+_0x436aeb(0x159)+_0x436aeb(0x62f)+'dth:1'+_0x436aeb(0x610)+'heigh'+_0x436aeb(0x28e)+'vh;z-'+'index'+':2147'+'48364'+'6;poi'+_0x436aeb(0x3b1)+_0x436aeb(0x4c7)+_0x436aeb(0x5df)+'e';var _0x132043=_0x34ef56[_0x436aeb(0x427)+_0x436aeb(0x144)]('2d');function _0x4dc321(){var _0x154d8c=_0x436aeb;if(_0x31a85a[_0x154d8c(0x546)]!==_0x31a85a['EGFeg'])try{var _0x5e845a=document['fulls'+_0x154d8c(0xf5)+'Eleme'+'nt'],_0x2fa136=_0x5e845a&&_0x5e845a[_0x154d8c(0x177)+'me']!==_0x154d8c(0x341)+'S'?_0x5e845a:document[_0x154d8c(0x5dc)]||document['docum'+'entEl'+'ement'];if(_0x31a85a[_0x154d8c(0x33c)](_0x34ef56['paren'+_0x154d8c(0x1a9)],_0x2fa136))_0x2fa136[_0x154d8c(0x2cb)+'dChil'+'d'](_0x34ef56);}catch(_0x254e1f){if(_0x154d8c(0x194)===_0x154d8c(0x194))try{if('fnmMv'!==_0x154d8c(0x27e)){var _0x15df1c=_0x226557['creat'+_0x154d8c(0x185)+'ent']('small');_0x15df1c['class'+'Name']='sk-hi'+'nt',_0x15df1c[_0x154d8c(0x51e)+_0x154d8c(0x35b)+'t']=_0x2831a4,_0x5d3a63['appen'+'dChil'+'d'](_0x15df1c);}else document['body']['appen'+_0x154d8c(0x49e)+'d'](_0x34ef56);}catch(_0x235d0c){}else _0x1470bc=_0x482b8b&&_0x5ca71d['val']?_0x529d2f[_0x154d8c(0x424)]():0x153f+0x2e1*-0xa+0x78b;}else _0x4dede8=_0x21c10a['parse'](_0x39045d['getIt'+'em'](_0x154d8c(0x3fb)+'a.kou'+_0x154d8c(0x265)+'v1')||'{}');}var _0x38e40d={'w':0x0,'h':0x0,'dpr':0x0};function _0x42fc29(){var _0x1e358c=_0x436aeb,_0x42ef34=window['devic'+_0x1e358c(0x5a4)+'lRati'+'o']||0x11f8+-0xe*-0xa7+-0x1b19,_0x3c0515=window[_0x1e358c(0x51a)+_0x1e358c(0x363)],_0x422efe=window['inner'+'Heigh'+'t'];if(_0x3c0515===_0x38e40d['w']&&_0x422efe===_0x38e40d['h']&&_0x42ef34===_0x38e40d[_0x1e358c(0x293)])return;_0x38e40d['w']=_0x3c0515,_0x38e40d['h']=_0x422efe,_0x38e40d[_0x1e358c(0x293)]=_0x42ef34,_0x34ef56[_0x1e358c(0x203)]=Math[_0x1e358c(0x4ed)](_0x2a6e37['JNSje'](_0x3c0515,_0x42ef34)),_0x34ef56[_0x1e358c(0x2a8)+'t']=Math[_0x1e358c(0x4ed)](_0x2a6e37[_0x1e358c(0x302)](_0x422efe,_0x42ef34)),_0x132043[_0x1e358c(0x228)+_0x1e358c(0x433)+'rm'](_0x42ef34,0xe18+0x25dc+-0x33f4,-0x1*0x17b1+-0x1841+0x2ff2,_0x42ef34,0x1c9a+0x846+-0x24e0,-0x2585+0xfd5*-0x2+0x452f);}var _0xcde50e=-0x2155+-0x1*-0x1601+0xb54,_0x4c2857=performance['now'](),_0xcadb1=0x4b4+-0xb11+0x65d;function _0x3d297c(_0x51c9fd){var _0x5cb249=_0x436aeb,_0x46be8b=Number(_0x1793a8[_0x5cb249(0x123)+'le'])||0x538+0x3*-0x42d+0x750,_0x23dccc=(-0xa34*0x1+-0x1*0x1387+0x1ddd)*_0x46be8b,_0x4d38a7=(-0x1*0xacc+-0x1d81*0x1+0x2851)*_0x46be8b,_0x4dd068=_0x31a85a['maUSE'](_0x31a85a[_0x5cb249(0x5ff)](_0x23dccc,0x479+0x469*-0x3+0x8c5),_0x31a85a[_0x5cb249(0x5ff)](_0x4d38a7,-0x1afb+0x1*-0x1399+0x2e96)),_0x15ec56=_0x31a85a[_0x5cb249(0x55e)](_0x23dccc,-0x1814+-0x125b+0x2a72)+_0x4d38a7*(-0x1a26+-0x1d69*-0x1+-0x31*0x11),_0x365dc6=_0x1793a8[_0x5cb249(0x23a)],_0x49045f=_0x365dc6==='br'?_0x31a85a[_0x5cb249(0x4cc)](_0x31a85a[_0x5cb249(0x4cc)](_0x51c9fd['right'],-0x2420+-0x117e+0x35ae),_0x4dd068):_0x51c9fd[_0x5cb249(0x594)]+(0xe63+0x2478+0x1*-0x32cb),_0x1d0772=_0x365dc6==='ml'?_0x31a85a[_0x5cb249(0x4cc)](_0x31a85a[_0x5cb249(0x2dd)](_0x51c9fd['top'],_0x51c9fd['heigh'+'t']/(-0x2ac+-0xf*-0x4+0x1*0x272)),_0x15ec56/(-0x3*-0x7b9+0x9a9*0x4+-0x3dcd)):_0x31a85a['MIyxR'](_0x51c9fd['botto'+'m']-_0x15ec56,_0x31a85a[_0x5cb249(0x189)](_0x365dc6,'bl')?0x3bf*0x9+-0x2f5*0xb+-0xd0:0x22bf+0x1c09+0x346*-0x13),_0x4b2d38=(_0x2ca162,_0x3db074,_0xcfdf2d,_0x417a6c,_0x42f70c,_0x1f6a22,_0x146b40)=>{var _0x353d4d=_0x5cb249,_0x597d07=_0x4dab10[_0x353d4d(0x5bf)](_0x3db074);_0x132043['save'](),_0x132043[_0x353d4d(0x3bf)+_0x353d4d(0x117)]();if(_0x132043['round'+_0x353d4d(0x2da)])_0x132043[_0x353d4d(0x4ed)+_0x353d4d(0x2da)](_0xcfdf2d,_0x417a6c,_0x42f70c,_0x1f6a22,(0x809+-0x1*-0x41c+0x8d*-0x16)*_0x46be8b);else _0x132043['rect'](_0xcfdf2d,_0x417a6c,_0x42f70c,_0x1f6a22);_0x132043['fillS'+'tyle']=_0x597d07?_0x353d4d(0x5d2)+_0x353d4d(0x3a8)+_0x353d4d(0x2a1)+'7,0.8'+'5)':_0x31a85a['CfgHO'],_0x132043[_0x353d4d(0x102)](),_0x132043['lineW'+_0x353d4d(0x66a)]=-0x2*0x379+-0x1666*-0x1+-0x7*0x235,_0x132043[_0x353d4d(0x59d)+_0x353d4d(0x5ab)+'e']=_0x597d07?_0x514ca7:_0x353d4d(0x5d2)+'255,1'+_0x353d4d(0x2a1)+_0x353d4d(0x499)+'5)',_0x132043[_0x353d4d(0x59d)+'e'](),_0x597d07&&(_0x132043['shado'+_0x353d4d(0x60c)+'r']=_0x170171,_0x132043[_0x353d4d(0x263)+'wBlur']=0x9*0x17+0x31*-0x3b+0x8e*0x13,_0x132043[_0x353d4d(0x102)](),_0x132043['shado'+_0x353d4d(0x3c6)]=0x1*-0x252e+-0x2551*0x1+-0x1e9*-0x27),_0x132043[_0x353d4d(0x397)+'tyle']=_0x597d07?_0x31a85a[_0x353d4d(0x2b8)]:'rgba('+'255,2'+_0x353d4d(0x31f)+'0,0.8'+')',_0x132043['textA'+_0x353d4d(0x2e4)]=_0x353d4d(0x1d6)+'r',_0x132043['textB'+_0x353d4d(0x275)+'ne']=_0x353d4d(0x618)+'e',_0x132043['font']='700\x20'+Math['round']((0x16*-0x17e+-0xf81+0x3061)*_0x46be8b)+_0x31a85a['FKbhr'],_0x132043[_0x353d4d(0x55c)+_0x353d4d(0x52c)](_0x2ca162,_0xcfdf2d+_0x42f70c/(-0x1f7e+0xf3*-0x21+-0x3*-0x14f1),_0x417a6c+_0x31a85a['dbwSX'](_0x1f6a22,0x1a2*-0x1+0x70a+0x1*-0x566)-(_0x146b40?_0x31a85a[_0x353d4d(0x5ff)](0xcb*0x1b+0x1a3+-0x1707,_0x46be8b):0x1143+0x1af+-0x12f2)),_0x146b40&&(_0x132043['font']=_0x353d4d(0x48b)+Math['round']((-0x10f0+-0xbb6+0x1caf)*_0x46be8b)+(_0x353d4d(0x5e0)+'-sans'+'-seri'+'f,sys'+'tem-u'+'i,san'+_0x353d4d(0x649)+'if'),_0x132043['fillS'+_0x353d4d(0x281)]=_0x597d07?_0x31a85a['SGevA']:_0x31a85a[_0x353d4d(0x41a)],_0x132043[_0x353d4d(0x55c)+_0x353d4d(0x52c)](_0x146b40,_0x31a85a[_0x353d4d(0x473)](_0xcfdf2d,_0x42f70c/(0x1221+-0x903+-0x91c)),_0x417a6c+_0x1f6a22/(0x1*-0x324+0x826+-0x500)+(-0x84f+-0x128*0x7+0x106f)*_0x46be8b)),_0x132043[_0x353d4d(0x29f)+'re']();};_0x4b2d38('W',_0x5cb249(0x2b3),_0x49045f+_0x23dccc+_0x4d38a7,_0x1d0772,_0x23dccc,_0x23dccc),_0x31a85a[_0x5cb249(0x604)](_0x4b2d38,'A',_0x31a85a['AeJuE'],_0x49045f,_0x1d0772+_0x23dccc+_0x4d38a7,_0x23dccc,_0x23dccc),_0x4b2d38('S',_0x31a85a[_0x5cb249(0x423)],_0x31a85a['fGlre'](_0x31a85a[_0x5cb249(0x19f)](_0x49045f,_0x23dccc),_0x4d38a7),_0x31a85a[_0x5cb249(0x19f)](_0x1d0772+_0x23dccc,_0x4d38a7),_0x23dccc,_0x23dccc),_0x4b2d38('D',_0x31a85a[_0x5cb249(0x67d)],_0x49045f+(_0x23dccc+_0x4d38a7)*(-0x6b+0x3*-0x215+-0xe*-0x7a),_0x1d0772+_0x23dccc+_0x4d38a7,_0x23dccc,_0x23dccc);var _0x593a9b=(_0x4dd068-_0x4d38a7)/(-0x1*0x3f5+0x2d2+0x125),_0x56b4e8=_0x1d0772+_0x31a85a['FgzeW'](_0x31a85a['ZrFWR'](_0x23dccc,_0x4d38a7),-0x1*0xc17+-0x81*0x3+-0x1*-0xd9c);_0x4b2d38('LMB','mouse'+'1',_0x49045f,_0x56b4e8,_0x593a9b,_0x23dccc,_0x1793a8[_0x5cb249(0x661)]?_0x39ddf6(0x2e*-0x20+-0x1*-0x1609+0x1048*-0x1)+_0x31a85a[_0x5cb249(0x545)]:''),_0x4b2d38(_0x5cb249(0x179),_0x5cb249(0x1a6)+'3',_0x49045f+_0x593a9b+_0x4d38a7,_0x56b4e8,_0x593a9b,_0x23dccc,_0x1793a8[_0x5cb249(0x661)]?_0x39ddf6(0x1bed+0xd0*-0x2+-0x1a4a)+_0x31a85a[_0x5cb249(0x545)]:''),_0x31a85a[_0x5cb249(0x2f5)](_0x4b2d38,'',_0x5cb249(0x1f9),_0x49045f,_0x31a85a[_0x5cb249(0x473)](_0x31a85a[_0x5cb249(0x655)](_0x56b4e8,_0x23dccc),_0x4d38a7),_0x4dd068,_0x23dccc*(0x1d47*-0x1+0x243a*0x1+0x251*-0x3+0.45));}function _0x1efed1(_0x4c963c){var _0x2f3f8a=_0x436aeb;if(_0x31a85a['eRhwi'](_0x31a85a['VoUuN'],_0x31a85a[_0x2f3f8a(0x56d)]))_0x1620b7[_0x2f3f8a(0x242)](_0x2f3f8a(0x5eb)+_0x2f3f8a(0x32c)+'ur]\x20U'+'WMK\x20i'+_0x2f3f8a(0x59f)+'ailed'+':',_0x163394&&_0xd3e3a[_0x2f3f8a(0x636)+'ge']);else{var _0x20ca40=(_0x2f3f8a(0x285)+'4|3|2'+_0x2f3f8a(0x11a)+_0x2f3f8a(0x4d1)+'|12|1'+'9|11|'+'6|14|'+'20|16'+'|15|1'+_0x2f3f8a(0x160)+_0x2f3f8a(0x62d)+_0x2f3f8a(0x417)+'8')['split']('|'),_0x504a1d=0x28f+0x11e1+-0x1470;while(!![]){switch(_0x20ca40[_0x504a1d++]){case'0':_0x132043['arc'](_0x27d62b,_0x3176a4,(-0x1ff6+0x298*-0x3+0x27bf+0.6000000000000001)*_0x46c6b6,-0x129b+-0x265c+0x38f7,_0x31a85a['rALMu'](Math['PI'],0x808+0x1*-0x128+0x3*-0x24a));continue;case'1':_0x132043[_0x2f3f8a(0x413)+'o'](_0x27d62b,_0x31a85a[_0x2f3f8a(0x2ee)](_0x3176a4+_0x3b2f6e,_0x4b6086));continue;case'2':_0x132043[_0x2f3f8a(0x102)]();continue;case'3':_0x132043[_0x2f3f8a(0x13f)]();continue;case'4':var _0x5922bf=/^#[0-9a-f]{6}$/i['test'](_0x1793a8['chCol'+'or'])?_0x1793a8['chCol'+'or']:'#ff6b'+'9d';continue;case'5':_0x132043['shado'+'wColo'+'r']=_0x5922bf;continue;case'6':_0x132043['lineT'+'o'](_0x31a85a[_0x2f3f8a(0x4cc)](_0x27d62b,_0x3b2f6e),_0x3176a4);continue;case'7':_0x132043[_0x2f3f8a(0x263)+'wBlur']=-0x175+-0x1*0xb6c+-0x1*-0xce7;continue;case'8':var _0x27d62b=_0x4c963c[_0x2f3f8a(0x203)]/(0x1ed5+-0x84c+-0x1687*0x1),_0x3176a4=_0x31a85a[_0x2f3f8a(0x148)](_0x4c963c[_0x2f3f8a(0x2a8)+'t'],0x17b1*-0x1+0x9b8*0x2+0x443*0x1);continue;case'9':_0x132043['fillS'+_0x2f3f8a(0x281)]=_0x5922bf;continue;case'10':_0x132043['lineW'+_0x2f3f8a(0x66a)]=Math['max'](-0x4ce+0x263+-0x2*-0x136+0.5,_0x31a85a['CQkuR'](0x144e*-0x1+0x37d+0x10d3*0x1,_0x46c6b6));continue;case'11':_0x132043[_0x2f3f8a(0x1e2)+'o'](_0x31a85a[_0x2f3f8a(0x15b)](_0x27d62b,_0x3b2f6e)-_0x4b6086,_0x3176a4);continue;case'12':var _0x3b2f6e=_0x31a85a['JxxIe'](0xfa6+-0x31*0x9a+0xdda,_0x46c6b6),_0x4b6086=(-0xa*0xe2+0x1*0x1147+-0x86b)*_0x46c6b6;continue;case'13':var _0x46c6b6=Number(_0x1793a8[_0x2f3f8a(0x536)+'e'])||0xccd*-0x3+-0xb*-0x178+0x1640;continue;case'14':_0x132043[_0x2f3f8a(0x1e2)+'o'](_0x31a85a['jQmZj'](_0x27d62b,_0x3b2f6e),_0x3176a4);continue;case'15':_0x132043[_0x2f3f8a(0x413)+'o'](_0x27d62b,_0x3176a4-_0x3b2f6e);continue;case'16':_0x132043['moveT'+'o'](_0x27d62b,_0x31a85a['rEkio'](_0x3176a4-_0x3b2f6e,_0x4b6086));continue;case'17':_0x132043[_0x2f3f8a(0x1e2)+'o'](_0x27d62b,_0x31a85a[_0x2f3f8a(0x600)](_0x3176a4,_0x3b2f6e));continue;case'18':_0x132043['resto'+'re']();continue;case'19':_0x132043[_0x2f3f8a(0x3bf)+_0x2f3f8a(0x117)]();continue;case'20':_0x132043[_0x2f3f8a(0x413)+'o'](_0x31a85a['HneIk'](_0x31a85a[_0x2f3f8a(0x5af)](_0x27d62b,_0x3b2f6e),_0x4b6086),_0x3176a4);continue;case'21':_0x132043[_0x2f3f8a(0x59d)+'e']();continue;case'22':_0x132043[_0x2f3f8a(0x59d)+_0x2f3f8a(0x5ab)+'e']=_0x5922bf;continue;case'23':_0x132043[_0x2f3f8a(0x3bf)+_0x2f3f8a(0x117)]();continue;}break;}}}function _0x5a5c43(_0x489efa){var _0x25433b=_0x436aeb,_0x402334={'oWlhe':function(_0x34c88c){return _0x34c88c();},'EgikF':function(_0xcfe22a,_0x332679){return _0x2a6e37['OfjJv'](_0xcfe22a,_0x332679);}};if(_0x2a6e37['jQdyg'](_0x2a6e37[_0x25433b(0x3f9)],_0x2a6e37[_0x25433b(0x3f9)]))_0x4b1688['hookG'+_0x25433b(0x108)]=_0x59a31a,_0x31a85a[_0x25433b(0x315)](_0x309007);else{_0x132043[_0x25433b(0x13f)](),_0x132043[_0x25433b(0xe9)]=_0x25433b(0x264)+_0x25433b(0x4de)+'i-mon'+_0x25433b(0x589)+'e,mon'+_0x25433b(0x589)+'e',_0x132043[_0x25433b(0x13d)+_0x25433b(0x2e4)]=_0x2a6e37[_0x25433b(0x1ce)],_0x132043[_0x25433b(0x156)+_0x25433b(0x275)+'ne']=_0x25433b(0x1e3);var _0x259bdf=-0x22a0+0x20d0+0x4*0x7f,_0x2f713a=0x1*0xac5+-0x2b3*0x1+-0x806,_0x2430fb=(_0x4c9ad2,_0x311038)=>{var _0x297f8b=_0x25433b;_0x402334['EgikF'](_0x297f8b(0x54f),_0x297f8b(0x42f))?(_0x402334['oWlhe'](_0x2c0299),_0x273a06(_0xced4ad(_0x2dc1e9[_0x297f8b(0x18d)]))):(_0x132043['fillS'+_0x297f8b(0x281)]=_0x311038||_0x297f8b(0x5d2)+_0x297f8b(0x375)+_0x297f8b(0x31f)+_0x297f8b(0x624)+'5)',_0x132043['fillT'+'ext'](_0x4c9ad2,_0x2f713a,_0x259bdf),_0x259bdf+=0x1f2b+-0xf29+0x2*-0x7f9);};_0x2430fb(_0x2a6e37['SosIS'],_0x25433b(0x3af)+'9d');if(_0x1793a8['fps'])_0x2a6e37['MKGeE'](_0x2430fb,_0xcadb1+'\x20FPS');if(!_0xb0bb11[_0x25433b(0x21a)+'oaded'])_0x2430fb(_0x2a6e37['JPDBi'],_0x2a6e37[_0x25433b(0x50d)]);_0x132043[_0x25433b(0x29f)+'re']();}}function _0x53a0ee(){var _0x2dff57=_0x436aeb;_0x31a85a['UkFLd'](requestAnimationFrame,_0x53a0ee),_0xcde50e++;var _0x12e4a6=performance['now']();_0x31a85a[_0x2dff57(0x3ef)](_0x31a85a[_0x2dff57(0x15b)](_0x12e4a6,_0x4c2857),-0x6*0x67a+0x12b3+0x161d)&&(_0xcadb1=Math[_0x2dff57(0x4ed)](_0x31a85a['xyviW'](_0xcde50e,-0x222b+0x217*0xa+0x112d*0x1)/_0x31a85a[_0x2dff57(0x15b)](_0x12e4a6,_0x4c2857)),_0xcde50e=0x1*-0x8d7+0x24b3+-0x1bdc,_0x4c2857=_0x12e4a6);_0x42fc29(),_0x4dc321(),_0x132043['clear'+_0x2dff57(0x2da)](-0x4a9*-0x3+0xa27+-0xc11*0x2,-0x20fc+-0x1a1b+0x3b17,_0x38e40d['w'],_0x38e40d['h']);var _0x271f15={'left':0x0,'top':0x0,'right':_0x38e40d['w'],'bottom':_0x38e40d['h'],'width':_0x38e40d['w'],'height':_0x38e40d['h']};if(_0x1793a8['cross'+_0x2dff57(0x5f2)])_0x1efed1(_0x271f15);if(_0x1793a8[_0x2dff57(0x516)+_0x2dff57(0x58c)])_0x3d297c(_0x271f15);_0x5a5c43(_0x271f15);}var _0x7a9811=document[_0x436aeb(0x169)+_0x436aeb(0x185)+_0x436aeb(0x166)]('div');_0x7a9811['id']=_0x436aeb(0x3fb)+'a-ui',_0x7a9811[_0x436aeb(0x58f)][_0x436aeb(0x52f)+'xt']=_0x436aeb(0x591)+_0x436aeb(0x230)+_0x436aeb(0x621)+'inset'+':0;z-'+_0x436aeb(0x17c)+_0x436aeb(0x386)+_0x436aeb(0x364)+_0x436aeb(0x395)+'nter-'+_0x436aeb(0x4c7)+_0x436aeb(0x5df)+'e;';var _0x2a63c2=_0x7a9811[_0x436aeb(0x505)+_0x436aeb(0x554)+'ow']({'mode':_0x436aeb(0x1da)});(document['body']||document[_0x436aeb(0x54e)+_0x436aeb(0x448)+'ement'])['appen'+_0x436aeb(0x49e)+'d'](_0x7a9811);var _0x19f4a7=![],_0x78f5e2={};try{_0x78f5e2=JSON['parse'](localStorage[_0x436aeb(0x3ec)+'em'](_0x2a6e37['TAnfR'])||'{}');}catch(_0x37b287){}function _0x1d08a2(){var _0x1e974e=_0x436aeb;try{localStorage[_0x1e974e(0x346)+'em'](_0x2a6e37[_0x1e974e(0x303)],JSON['strin'+_0x1e974e(0x1d9)](_0x78f5e2));}catch(_0x15b6fd){}}function _0x4d3ba2(_0x45609f,_0x409a29){var _0x5b45d3=_0x436aeb;if('HUQpX'==='ljuZq')_0x3b738f['adblo'+'ck']=_0x277512,_0x387bd3();else{var _0x597309=(_0x5b45d3(0x4cd)+_0x5b45d3(0x64b)+_0x5b45d3(0x37b))['split']('|'),_0x5222d8=-0x1c35+0x9ba+0x127b;while(!![]){switch(_0x597309[_0x5222d8++]){case'0':_0x139424[_0x5b45d3(0x3b3)+_0x5b45d3(0x439)+'te']('role',_0x5b45d3(0x4df)+'h');continue;case'1':var _0x139424=document[_0x5b45d3(0x169)+'eElem'+'ent'](_0x31a85a[_0x5b45d3(0x3a6)]);continue;case'2':_0x139424[_0x5b45d3(0x3b3)+_0x5b45d3(0x439)+'te'](_0x31a85a[_0x5b45d3(0x220)],String(!!_0x45609f));continue;case'3':_0x139424[_0x5b45d3(0x22e)+_0x5b45d3(0x598)]=_0x31a85a['IRoXo'];continue;case'4':_0x139424[_0x5b45d3(0x55f)]=_0x31a85a['qVVWF'];continue;case'5':return _0x139424;case'6':_0x139424[_0x5b45d3(0x10c)+'ck']=_0xa8d72a=>{var _0x3990a1=_0x5b45d3;_0xa8d72a['stopP'+_0x3990a1(0x139)+'ation']();var _0x2ddd43=_0x139424['getAt'+'tribu'+'te']('aria-'+_0x3990a1(0x2bb)+'ed')!==_0x3990a1(0x57a);_0x139424[_0x3990a1(0x3b3)+_0x3990a1(0x439)+'te'](_0x3990a1(0x2b6)+_0x3990a1(0x2bb)+'ed',String(_0x2ddd43)),_0x409a29(_0x2ddd43);};continue;}break;}}}function _0x148845(_0x196029,_0x228f31,_0x47b5d7,_0x3e33d7,_0x310b31){var _0x4ce863=_0x436aeb,_0x29b737={'VObUW':function(_0x43bb31){return _0x43bb31();},'XcNfb':function(_0x567e9f,_0x13c2de){return _0x567e9f(_0x13c2de);},'XUkzY':_0x31a85a['jGMqn'],'DQxbc':function(_0x1cb794,_0x10a926){return _0x31a85a['CQkuR'](_0x1cb794,_0x10a926);}};if('ElTJn'!==_0x4ce863(0x257))_0x5d1e7a[_0x4ce863(0x536)+'e']=_0x4c6eb5,_0x29b737['VObUW'](_0x13e804);else{var _0x18c7ad=document[_0x4ce863(0x169)+_0x4ce863(0x185)+'ent']('div');_0x18c7ad[_0x4ce863(0x22e)+'Name']=_0x4ce863(0x202)+_0x4ce863(0x14c);var _0x1e0bf8=document[_0x4ce863(0x169)+_0x4ce863(0x185)+_0x4ce863(0x166)](_0x4ce863(0x41b));_0x1e0bf8['type']=_0x31a85a[_0x4ce863(0x4c9)],_0x1e0bf8[_0x4ce863(0x22e)+_0x4ce863(0x598)]=_0x31a85a[_0x4ce863(0x357)],_0x1e0bf8[_0x4ce863(0x30c)]=_0x228f31,_0x1e0bf8['max']=_0x47b5d7,_0x1e0bf8[_0x4ce863(0xde)]=_0x3e33d7,_0x1e0bf8[_0x4ce863(0x18d)]=_0x196029;var _0x75c5b6=document['creat'+_0x4ce863(0x185)+_0x4ce863(0x166)]('span');_0x75c5b6[_0x4ce863(0x22e)+_0x4ce863(0x598)]=_0x4ce863(0x3ff)+'l',_0x75c5b6[_0x4ce863(0x51e)+_0x4ce863(0x35b)+'t']=String(_0x196029);var _0x5ee7f0=()=>{var _0x551d91=_0x4ce863;_0x75c5b6['textC'+_0x551d91(0x35b)+'t']=_0x29b737[_0x551d91(0x575)](String,_0x1e0bf8['value']),_0x18c7ad['style']['setPr'+'opert'+'y'](_0x29b737[_0x551d91(0x292)],_0x29b737[_0x551d91(0x2e5)]((_0x1e0bf8[_0x551d91(0x18d)]-_0x228f31)/(_0x47b5d7-_0x228f31),0x1c1*-0x16+0x1*0x3ec+-0x502*-0x7)+'%');};return _0x1e0bf8['oninp'+'ut']=()=>{var _0x5b8b37=_0x4ce863;_0x31a85a['aXGCf'](_0x5ee7f0),_0x310b31(Number(_0x1e0bf8[_0x5b8b37(0x18d)]));},_0x31a85a[_0x4ce863(0x107)](_0x5ee7f0),_0x18c7ad[_0x4ce863(0x2cb)+'d'](_0x1e0bf8,_0x75c5b6),_0x18c7ad;}}function _0x15c49d(_0x571ed9,_0x1757c0){var _0x5797de=_0x436aeb,_0x3ebdca=document['creat'+_0x5797de(0x185)+'ent'](_0x5797de(0x41b));return _0x3ebdca[_0x5797de(0x55f)]=_0x5797de(0x3cc),_0x3ebdca[_0x5797de(0x22e)+'Name']='sk-co'+_0x5797de(0x468),_0x3ebdca['value']=/^#[0-9a-f]{6}$/i[_0x5797de(0x4d5)](_0x571ed9)?_0x571ed9:_0x5797de(0x3af)+'9d',_0x3ebdca[_0x5797de(0x51c)+'ut']=()=>_0x1757c0(_0x3ebdca[_0x5797de(0x18d)]),_0x3ebdca;}function _0x2f8023(_0x27aafe,_0x55220f,_0x33c4df){var _0x4b0d02=_0x436aeb,_0x2be9f5=_0x2a6e37[_0x4b0d02(0x635)]['split']('|'),_0x1e0015=0x1af*-0x1+0x804+-0x655;while(!![]){switch(_0x2be9f5[_0x1e0015++]){case'0':_0x5a72a7[_0x4b0d02(0x22e)+_0x4b0d02(0x598)]='sk-fi'+_0x4b0d02(0x3ed);continue;case'1':return _0x5a72a7;case'2':_0x5a72a7['value']=_0x27aafe;continue;case'3':for(var [_0x589055,_0x335dfd]of _0x55220f){var _0x4c5400=document['creat'+_0x4b0d02(0x185)+'ent'](_0x2a6e37['gEGHf']);_0x4c5400[_0x4b0d02(0x18d)]=_0x589055,_0x4c5400[_0x4b0d02(0x51e)+_0x4b0d02(0x35b)+'t']=_0x335dfd,_0x5a72a7['appen'+_0x4b0d02(0x49e)+'d'](_0x4c5400);}continue;case'4':_0x5a72a7[_0x4b0d02(0x1ec)+_0x4b0d02(0x14c)]=()=>_0x33c4df(_0x5a72a7['value']);continue;case'5':var _0x5a72a7=document[_0x4b0d02(0x169)+_0x4b0d02(0x185)+_0x4b0d02(0x166)]('selec'+'t');continue;}break;}}function _0x48c500(_0x34574d,_0x2cad57){var _0x4658b3=_0x436aeb;if(_0x4658b3(0x4ab)===_0x2a6e37[_0x4658b3(0x154)]){var _0x2d1068=new _0x508e5c(_0xc6356f)['readF'+_0x4658b3(0x56c)](_0xb6de04,_0x31a85a[_0x4658b3(0x197)]);return _0x2d1068?_0x2d1068[_0x4658b3(0x424)]():-0x1*-0x13d7+-0x18*-0xcb+-0x26df;}else{var _0x379d4f=(_0x4658b3(0x687)+_0x4658b3(0x2f4)+'1')[_0x4658b3(0x1cf)]('|'),_0x426942=0x189a+0x27c+0xd8b*-0x2;while(!![]){switch(_0x379d4f[_0x426942++]){case'0':var _0x2c2288=document['creat'+_0x4658b3(0x185)+_0x4658b3(0x166)](_0x4658b3(0x5b2)+'n');continue;case'1':return _0x2c2288;case'2':_0x2c2288['type']=_0x4658b3(0x5b2)+'n';continue;case'3':_0x2c2288['oncli'+'ck']=_0x5e2e83=>{var _0x360c9f=_0x4658b3;_0x5e2e83[_0x360c9f(0x213)+'ropag'+'ation'](),_0x2cad57();};continue;case'4':_0x2c2288['class'+_0x4658b3(0x598)]='sk-bt'+'n';continue;case'5':_0x2c2288[_0x4658b3(0x51e)+_0x4658b3(0x35b)+'t']=_0x34574d;continue;}break;}}}function _0x12a13e(_0x5635cf,_0x409edc,_0x471d66){var _0x1a8490=_0x436aeb,_0x4b3ac8=document['creat'+_0x1a8490(0x185)+_0x1a8490(0x166)]('div');_0x4b3ac8[_0x1a8490(0x22e)+'Name']=_0x1a8490(0x3f2)+'l';var _0x59e338=document[_0x1a8490(0x169)+'eElem'+_0x1a8490(0x166)](_0x2a6e37['udFaT']);_0x59e338[_0x1a8490(0x22e)+_0x1a8490(0x598)]=_0x1a8490(0x329)+'bel',_0x59e338['textC'+_0x1a8490(0x35b)+'t']=_0x5635cf;if(_0x409edc){var _0x385f1f=document[_0x1a8490(0x169)+_0x1a8490(0x185)+'ent']('small');_0x385f1f[_0x1a8490(0x22e)+'Name']=_0x1a8490(0x451)+'nt',_0x385f1f[_0x1a8490(0x51e)+_0x1a8490(0x35b)+'t']=_0x409edc,_0x59e338[_0x1a8490(0x2cb)+_0x1a8490(0x49e)+'d'](_0x385f1f);}return _0x4b3ac8['appen'+'d'](_0x59e338,_0x471d66),_0x4b3ac8;}function _0x55e57a(_0x4def83,_0x261927){var _0x14e04d=_0x436aeb,_0x7b2043=document['creat'+_0x14e04d(0x185)+'ent']('div');return _0x7b2043[_0x14e04d(0x22e)+_0x14e04d(0x598)]=_0x14e04d(0x331)+'te'+(_0x261927?_0x2a6e37['QWasM']:''),_0x7b2043['textC'+_0x14e04d(0x35b)+'t']=_0x4def83,_0x7b2043;}function _0x3541fb(_0x22cc21,_0x5ea82a,_0x3f4009,_0x47fc7d,_0x51c068){var _0x3f83bd=_0x436aeb,_0x56f320={'QZHxH':function(_0x1d61ce,_0x97a76c){var _0x235874=_0x4e2b;return _0x31a85a[_0x235874(0x4cc)](_0x1d61ce,_0x97a76c);}},_0x262847=document['creat'+_0x3f83bd(0x185)+_0x3f83bd(0x166)]('div');_0x262847['class'+'Name']=_0x31a85a[_0x3f83bd(0x61e)]+(_0x3f4009?_0x3f83bd(0x5d3):'');var _0xe36307=document['creat'+'eElem'+'ent'](_0x3f83bd(0x2ea));_0xe36307['class'+'Name']=_0x31a85a[_0x3f83bd(0x1dc)];var _0x92ad49=document['creat'+'eElem'+_0x3f83bd(0x166)](_0x31a85a[_0x3f83bd(0x3f6)]);_0x92ad49['class'+'Name']=_0x3f83bd(0x628)+_0x3f83bd(0xf4)+_0x3f83bd(0x43e);var _0x2f83b6=document[_0x3f83bd(0x169)+'eElem'+_0x3f83bd(0x166)]('stron'+'g');_0x2f83b6['textC'+'onten'+'t']=_0x22cc21,_0x92ad49['appen'+'dChil'+'d'](_0x2f83b6);if(_0x47fc7d){var _0x18a181=_0x4d3ba2(_0x3f4009,_0x4eaa7f=>{var _0x194d49=_0x3f83bd;_0x194d49(0x563)!=='BMKQe'?(_0x262847['class'+_0x194d49(0x4fc)][_0x194d49(0x549)+'e']('on',_0x4eaa7f),_0x31a85a[_0x194d49(0x518)](_0x47fc7d,_0x4eaa7f)):(_0x10fb34=_0x44ffa2[_0x194d49(0x4ed)](_0x149f0a*(0x1*0x655+-0x9*-0x427+-0x27cc)/_0x56f320['QZHxH'](_0x3c9e72,_0x5bcb77)),_0x561032=-0xaf2+0x1244*-0x1+0x1*0x1d36,_0x48bc43=_0x1cd82a);});_0xe36307[_0x3f83bd(0x2cb)+'d'](_0x92ad49,_0x18a181);}else _0xe36307[_0x3f83bd(0x2cb)+'dChil'+'d'](_0x92ad49);_0x262847['appen'+'dChil'+'d'](_0xe36307);if(_0x51c068&&_0x51c068[_0x3f83bd(0x634)+'h']){if('uOLgC'!=='uOLgC')try{var _0x1f55b6=new _0x44d137(_0x14819c)['readF'+'ield'](_0x418a7e,'u32');return _0x1f55b6?_0x1f55b6['val']():0x37*0x59+-0xfb8+-0x367;}catch(_0x17ac84){return 0x214a+0x464*-0x2+-0x1882;}else{var _0x58cf43=document[_0x3f83bd(0x169)+_0x3f83bd(0x185)+_0x3f83bd(0x166)](_0x31a85a[_0x3f83bd(0x3f6)]);_0x58cf43[_0x3f83bd(0x22e)+'Name']=_0x3f83bd(0x33e)+_0x3f83bd(0x5cf);var _0x3cb6cd=document[_0x3f83bd(0x169)+'eElem'+_0x3f83bd(0x166)](_0x31a85a[_0x3f83bd(0x3f6)]);_0x3cb6cd[_0x3f83bd(0x22e)+'Name']=_0x31a85a[_0x3f83bd(0x492)],_0x3cb6cd['textC'+'onten'+'t']=_0x5ea82a,_0x58cf43[_0x3f83bd(0x2cb)+_0x3f83bd(0x49e)+'d'](_0x3cb6cd);for(var _0x4cdead of _0x51c068)_0x58cf43[_0x3f83bd(0x2cb)+'dChil'+'d'](_0x4cdead);_0x262847[_0x3f83bd(0x2cb)+_0x3f83bd(0x49e)+'d'](_0x58cf43);}}return _0x262847;}var _0x423884=[{'id':'comba'+'t','label':_0x436aeb(0x14d)+'t'},{'id':'move','label':_0x2a6e37[_0x436aeb(0x394)]},{'id':_0x436aeb(0x5ef)+'l','label':_0x436aeb(0x447)+'l'},{'id':'misc','label':_0x2a6e37[_0x436aeb(0x290)]},{'id':_0x2a6e37['kJdPE'],'label':_0x2a6e37[_0x436aeb(0x35a)]}];function _0xaf2231(){var _0x34ab18=_0x436aeb,_0x2ce6e3=_0xb0bb11['safeM'+_0x34ab18(0x478)]?'SAFE\x20'+'MODE\x20'+_0x34ab18(0x47b)+'rlay\x20'+'only,'+_0x34ab18(0x632)+'ooks\x20'+'(relo'+_0x34ab18(0x469)+'\x20exit'+')':_0xb0bb11[_0x34ab18(0x517)]?_0x31a85a[_0x34ab18(0x234)](_0x31a85a[_0x34ab18(0x19f)](_0x31a85a['vbCWI'],_0xb0bb11[_0x34ab18(0x2f1)+_0x34ab18(0x11f)]?_0x31a85a[_0x34ab18(0x270)](_0xb0bb11['hooks'+'Ok']+'/'+_0xb0bb11[_0x34ab18(0x2f1)+_0x34ab18(0x11f)],'\x20hook'+'s'):_0x31a85a[_0x34ab18(0x43d)])+('\x20|\x20ga'+_0x34ab18(0x612))+(_0xb0bb11[_0x34ab18(0x21a)+'oaded']?_0x31a85a['ttpOC']:_0x31a85a['HBLBL'])+_0x31a85a[_0x34ab18(0x2bf)]+(_0xb0bb11['shoot'+_0x34ab18(0x67b)]?_0x34ab18(0x55a):_0x31a85a[_0x34ab18(0x15f)])+(_0x34ab18(0x602)+_0x34ab18(0x509)+'t\x20'),_0xb0bb11[_0x34ab18(0x207)+_0x34ab18(0x583)]?_0x31a85a[_0x34ab18(0x16f)]:_0x31a85a['BGhaC']):_0x34ab18(0x664)+_0x34ab18(0x3b7)+'NG\x20—\x20'+_0x34ab18(0x5b4)+_0x34ab18(0x5d4)+_0x34ab18(0x44a)+'einst'+_0x34ab18(0x2b7)+_0x34ab18(0x37a)+'erscr'+'ipt)';if(_0xb0bb11[_0x34ab18(0x358)+'rror'])_0x2ce6e3+='\x20|\x20ER'+'R:\x20'+_0xb0bb11[_0x34ab18(0x358)+_0x34ab18(0x1d5)];return _0x3541fb(_0x34ab18(0x132)+'s',_0x2ce6e3,_0xb0bb11['uwmk'],null,[_0x12a13e(_0x34ab18(0x519)+'PS\x20un'+'lock',_0x34ab18(0x186)+_0x34ab18(0x258)+_0x34ab18(0x5a7)+'ne.Ap'+_0x34ab18(0x26f)+_0x34ab18(0x638)+_0x34ab18(0x41f)+_0x34ab18(0x36c)+_0x34ab18(0x586)+_0x34ab18(0xdc),_0x48c500(_0x34ab18(0x466),()=>{var _0x42658f=_0x34ab18;try{if(_0x463125)_0x463125['call'](_0x31a85a['vaArn'],_0x42658f(0x41f)+_0x42658f(0x36c)+'Frame'+_0x42658f(0xdc),[0x7e8*0x1+0x2207*-0x1+0x1b0f]);}catch(_0x53d736){}}))]);}function _0x47c958(_0x4f3ee5){var _0x33202a=_0x436aeb,_0x3b67f7={'luEYx':function(_0x378184){return _0x378184();},'yyLWH':function(_0x165fce,_0x8daaaa,_0x521ddb){var _0x4b4319=_0x4e2b;return _0x2a6e37[_0x4b4319(0x1b0)](_0x165fce,_0x8daaaa,_0x521ddb);},'QuDSQ':_0x33202a(0x4c1),'kIBYC':function(_0x1abaa8,_0x188299,_0x2b16db){return _0x1abaa8(_0x188299,_0x2b16db);},'kEdCW':_0x33202a(0x5d7),'wFwhE':function(_0x2bc565){return _0x2bc565();},'BwSkv':function(_0x19f20d){return _0x19f20d();},'DCvei':_0x2a6e37[_0x33202a(0x480)],'SIcSV':function(_0x1f7527,_0x4bac7f,_0x14021c,_0x4d61fa,_0x5453b0){return _0x2a6e37['AiYvP'](_0x1f7527,_0x4bac7f,_0x14021c,_0x4d61fa,_0x5453b0);},'gHWKG':'i32','iBvcB':_0x2a6e37['rJyDB'],'RxqLE':_0x33202a(0x28b)+_0x33202a(0x468),'TUKLM':_0x2a6e37['WqDgD']};if(_0x2a6e37[_0x33202a(0x474)](_0x4f3ee5,_0x2a6e37[_0x33202a(0x233)]))return[_0xaf2231(),_0x3541fb(_0x33202a(0x240)+'ode',_0x2a6e37[_0x33202a(0x58b)],_0x1793a8[_0x33202a(0x4c1)],_0x453d28=>{var _0x4598eb=_0x33202a;_0x1793a8[_0x4598eb(0x4c1)]=_0x453d28,_0x3b67f7['luEYx'](_0x36925f),_0x3b67f7[_0x4598eb(0x688)](_0x57d04e,_0x3b67f7['QuDSQ'],_0x453d28),_0x3b67f7['kIBYC'](_0x57d04e,'godDi'+'e',_0x453d28);},[]),_0x2a6e37[_0x33202a(0x666)](_0x3541fb,_0x33202a(0x601)+_0x33202a(0x408),_0x2a6e37[_0x33202a(0x63e)],_0x1793a8[_0x33202a(0x2d5)+'oil'],_0x222792=>{var _0x1a582f=_0x33202a;_0x1793a8[_0x1a582f(0x2d5)+'oil']=_0x222792,_0x3b67f7[_0x1a582f(0x3dc)](_0x36925f),_0x3b67f7['yyLWH'](_0x57d04e,_0x1a582f(0x2d5)+'oil',_0x222792);},[]),_0x2a6e37[_0x33202a(0x666)](_0x3541fb,_0x2a6e37['eSkjQ'],_0x2a6e37[_0x33202a(0x1ed)],_0x1793a8[_0x33202a(0x1f0)+_0x33202a(0x4c8)],_0x3aabb0=>{var _0x331cbd=_0x33202a;if(_0x31a85a['eEPtH']!=='DhfsO'){var _0x117a1e=_0x2984fc[_0x331cbd(0x29b)+'ve'];if(_0x117a1e)try{_0x117a1e[_0x331cbd(0x1dd)+'ed']=![];}catch(_0x4ed5ad){}}else _0x1793a8[_0x331cbd(0x1f0)+_0x331cbd(0x4c8)]=_0x3aabb0,_0x36925f();},[]),_0x3541fb('Rapid'+_0x33202a(0x5da)+'\x20[EXP'+']',_0x2a6e37[_0x33202a(0x603)],_0x1793a8[_0x33202a(0x356)+_0x33202a(0x1f2)],_0x4076ce=>{var _0x5b8428=_0x33202a;_0x1793a8['rapid'+_0x5b8428(0x1f2)]=_0x4076ce,_0x31a85a['osoXN'](_0x36925f);},[]),_0x3541fb(_0x2a6e37[_0x33202a(0x3c1)],'Overw'+'rites'+'\x20Over'+_0x33202a(0x412)+'eapon'+'\x20dama'+_0x33202a(0x35c)+_0x33202a(0x4ca)+_0x33202a(0x350)+'\x20the\x20'+_0x33202a(0x45f)+_0x33202a(0x4d6)+_0x33202a(0x1a2)+'s.',_0x1793a8[_0x33202a(0x25b)+_0x33202a(0x4c6)],_0x2a619f=>{var _0x458fed=_0x33202a;_0x458fed(0xe8)!==_0x3b67f7['kEdCW']?(_0x1793a8[_0x458fed(0x25b)+_0x458fed(0x4c6)]=_0x2a619f,_0x36925f()):new _0x14f2af(_0x17199f)[_0x458fed(0x25e)+_0x458fed(0x4e0)](_0x3b3491,_0x422428,_0x741331);},[_0x2a6e37[_0x33202a(0x2a4)](_0x12a13e,'Damag'+_0x33202a(0x279)+'ue',null,_0x148845(_0x1793a8['damag'+_0x33202a(0x63a)+'e'],0x1e5e+0x1c*0x2a+-0x22ec,0x1*-0x1a93+-0x1d0f+0x2be*0x15,0x4a9+0x257c+0x10*-0x2a2,_0x1a4fa6=>{var _0x4f8b94=_0x33202a;_0x1793a8['damag'+'eValu'+'e']=_0x1a4fa6,_0x3b67f7[_0x4f8b94(0x47a)](_0x36925f);}))]),_0x3541fb('Infin'+_0x33202a(0x295)+'mmo\x20['+'EXP]',_0x33202a(0x297)+_0x33202a(0x2d7)+_0x33202a(0x678)+_0x33202a(0x442)+_0x33202a(0x3aa)+_0x33202a(0x114)+'mo\x20to'+'\x20999\x20'+_0x33202a(0x379)+_0x33202a(0x3c3)+'s.',_0x1793a8[_0x33202a(0x2c6)+_0x33202a(0x44e)],_0x4ae077=>{var _0x18adaf=_0x33202a;_0x1793a8[_0x18adaf(0x2c6)+_0x18adaf(0x44e)]=_0x4ae077,_0x36925f();},[_0x55e57a(_0x2a6e37[_0x33202a(0x3a2)])])];if(_0x4f3ee5===_0x2a6e37['vSImH'])return[_0x3541fb('Speed',_0x33202a(0x157)+_0x33202a(0x2d9)+_0x33202a(0x37d)+_0x33202a(0x3a0)+'ment\x20'+'speed'+_0x33202a(0x20b)+_0x33202a(0x5e1)+_0x33202a(0x65e)+_0x33202a(0x2df)+'ation'+'.',_0x1793a8[_0x33202a(0x62e)+'Pct']!==-0x1737+-0x1e15*-0x1+-0x67a,null,[_0x2a6e37['msKPi'](_0x12a13e,_0x33202a(0x59a)+'\x20%',_0x2a6e37[_0x33202a(0x2c7)],_0x2a6e37[_0x33202a(0x29d)](_0x148845,_0x1793a8[_0x33202a(0x62e)+_0x33202a(0x56e)],-0x4*0xad+-0x2014*-0x1+-0x1d2e,0x10*0xbc+-0x3a*-0x52+-0x1d28,0x2c8*-0x6+-0x16eb+-0x20*-0x13d,_0x2a52d2=>{var _0x2d65d7=_0x33202a;_0x1793a8['speed'+_0x2d65d7(0x56e)]=_0x2a52d2,_0x36925f();}))]),_0x3541fb(_0x33202a(0x3df)+_0x33202a(0x5f5)+_0x33202a(0x104),_0x2a6e37['DoCMc'],_0x1793a8['jumpP'+'ct']!==0x108f*-0x1+-0x2d7*-0x5+0x2c0||_0x2a6e37['izltD'](_0x1793a8['gravi'+'tyPct'],0x17*0xb1+-0xa*-0x2b5+-0x1*0x2a95),null,[_0x12a13e('Jump\x20'+'%',null,_0x2a6e37['ktSUc'](_0x148845,_0x1793a8[_0x33202a(0x674)+'ct'],0x1*-0x4c9+0x1*0xc22+-0x727*0x1,-0x460+-0xa6c+0xff8,0xb*0x35+0xef1+-0x1133,_0x2d8170=>{var _0x2b0d0d=_0x33202a;_0x1793a8[_0x2b0d0d(0x674)+'ct']=_0x2d8170,_0x3b67f7[_0x2b0d0d(0x3dc)](_0x36925f);})),_0x2a6e37[_0x33202a(0x296)](_0x12a13e,_0x33202a(0x362)+_0x33202a(0xf2),'lower'+_0x33202a(0x498)+_0x33202a(0x289),_0x148845(_0x1793a8[_0x33202a(0x685)+'tyPct'],0x1a96+-0x10fb+0x1*-0x991,-0x1d*-0xb8+-0xd*-0x25f+-0x7*0x745,-0x1*-0x204d+0x19a*0x15+-0x41ea,_0x2c45d1=>{_0x1793a8['gravi'+'tyPct']=_0x2c45d1,_0x31a85a['cQJYx'](_0x36925f);}))]),_0x3541fb(_0x2a6e37['ACtWV'],'Zeroe'+_0x33202a(0x30b)+'ement'+'.last'+'JumpT'+'ime\x20s'+_0x33202a(0x676)+'\x20jump'+_0x33202a(0x4ea)+_0x33202a(0x671)+'never'+_0x33202a(0x483)+_0x33202a(0x5cb),_0x1793a8['bhop'],_0x462f85=>{_0x1793a8['bhop']=_0x462f85,_0x36925f();},[])];if(_0x4f3ee5===_0x33202a(0x5ef)+'l')return[_0x3541fb(_0x2a6e37['GnDLg'],'WASD\x20'+_0x33202a(0x2c3)+_0x33202a(0x39c)+_0x33202a(0x1cd)+_0x33202a(0x374)+_0x33202a(0x3e6)+'.',_0x1793a8['keyst'+'rokes'],_0x79ea65=>{var _0x391f8d=_0x33202a;_0x1793a8[_0x391f8d(0x516)+_0x391f8d(0x58c)]=_0x79ea65,_0x36925f();},[_0x2a6e37[_0x33202a(0x1e4)](_0x12a13e,_0x2a6e37['kZFQa'],null,_0x2a6e37[_0x33202a(0x1a5)](_0x2f8023,_0x1793a8['ksPos'],[['bl',_0x2a6e37['PmLel']],['br','Botto'+_0x33202a(0x4f4)+'ht'],['ml',_0x2a6e37[_0x33202a(0x4a6)]]],_0xbfda6=>{var _0xe47b91=_0x33202a;_0x1793a8['ksPos']=_0xbfda6,_0x31a85a[_0xe47b91(0x125)](_0x36925f);})),_0x12a13e('Size',null,_0x148845(_0x1793a8[_0x33202a(0x123)+'le'],0x873*0x3+0x32c+-0x95*0x31+0.6,-0xdb*0x2b+0xa9*-0x34+0x2*0x238f+0.6000000000000001,-0x4f*0x51+-0x8*0x2b4+0x181*0x1f+0.05,_0x12475d=>{var _0x14cb97=_0x33202a;_0x1793a8['ksSca'+'le']=_0x12475d,_0x3b67f7[_0x14cb97(0x116)](_0x36925f);})),_0x12a13e('CPS\x20r'+'eadou'+'t',null,_0x4d3ba2(_0x1793a8[_0x33202a(0x661)],_0x1db939=>{_0x1793a8['ksCps']=_0x1db939,_0x36925f();}))]),_0x3541fb('Cross'+_0x33202a(0x5f2),_0x33202a(0x3d8)+_0x33202a(0x641)+'ter\x20c'+_0x33202a(0x135)+'air.',_0x1793a8[_0x33202a(0x1bc)+_0x33202a(0x5f2)],_0x46cce5=>{var _0x32f71f=_0x33202a;_0x31a85a['zsGPn']===_0x32f71f(0x20f)?(_0x43b35d['ksCps']=_0x5ee4d4,_0x3b67f7[_0x32f71f(0x47a)](_0x3c154a)):(_0x1793a8[_0x32f71f(0x1bc)+'hair']=_0x46cce5,_0x36925f());},[_0x12a13e('Size',null,_0x2a6e37[_0x33202a(0x29d)](_0x148845,_0x1793a8[_0x33202a(0x536)+'e'],0x566*-0x1+-0x1*0x2349+0x28af+0.5,-0x62*0x45+-0x227a+-0x617*-0xa+0.5,-0x31d*0x8+-0x188b*0x1+0x3173+0.1,_0x2a4896=>{_0x1793a8['chSiz'+'e']=_0x2a4896,_0x36925f();})),_0x12a13e(_0x2a6e37['tUKLR'],null,_0x2a6e37[_0x33202a(0x4f8)](_0x15c49d,_0x1793a8['chCol'+'or'],_0x563ce9=>{_0x1793a8['chCol'+'or']=_0x563ce9,_0x36925f();}))]),_0x3541fb(_0x33202a(0x490)+'ers',_0x2a6e37[_0x33202a(0x260)],_0x1793a8[_0x33202a(0x2c5)],null,[_0x12a13e(_0x33202a(0x2f2)+_0x33202a(0x3dd)+'r',null,_0x4d3ba2(_0x1793a8['fps'],_0x57372a=>{_0x1793a8['fps']=_0x57372a,_0x36925f();})),_0x55e57a(_0x33202a(0x2bd)+'emy\x20c'+_0x33202a(0x3dd)+'r:\x20th'+'is\x20bu'+_0x33202a(0x334)+'as\x20no'+_0x33202a(0x512)+_0x33202a(0x2a9)+_0x33202a(0x31c)+_0x33202a(0x2fd)+'o\x20pig'+_0x33202a(0x389)+'k\x20on.')])];if(_0x2a6e37['UNOFx'](_0x4f3ee5,_0x33202a(0x503))){if('sQzTw'!==_0x2a6e37[_0x33202a(0x1fd)])return[_0x3541fb(_0x33202a(0x309)+'ck',_0x33202a(0x26b)+'\x20kour'+'-io_*'+'\x20bann'+'er\x20sl'+'ots.',_0x1793a8['adblo'+'ck'],_0x48d223=>{var _0x533b5d=_0x33202a;_0x3b67f7[_0x533b5d(0x5ac)]===_0x3b67f7['DCvei']?(_0x1793a8['adblo'+'ck']=_0x48d223,_0x36925f()):_0x4f1397['assig'+'n'](_0x4c2328,_0x56f91b['parse'](_0xbf9c6c[_0x533b5d(0x3ec)+'em'](_0x533b5d(0x3fb)+'a.kou'+'r.v1')||'{}'));},[_0x2a6e37['PJdRB'](_0x55e57a,_0x2a6e37[_0x33202a(0x5fc)])])];else{if(_0x11c20f[_0x13a4c9]&&_0x263b5a[_0x38746a][_0x33202a(0x218)+'ed'])_0xca030a++;}}return[_0x3541fb('Safe\x20'+_0x33202a(0x493)+_0x33202a(0x2bc)+_0x33202a(0x585)+_0x33202a(0x100),'Skips'+'\x20UWMK'+'\x20enti'+'rely\x20'+_0x33202a(0x15e)+_0x33202a(0x61b)+_0x33202a(0x2f1)+'.\x20Use'+_0x33202a(0xeb)+_0x33202a(0x4fd)+_0x33202a(0x13b)+_0x33202a(0x1db)+_0x33202a(0x210)+_0x33202a(0x1af),_0x1793a8[_0x33202a(0xfe)+_0x33202a(0x478)],_0x520378=>{var _0x1b4916=_0x33202a;_0x1793a8[_0x1b4916(0xfe)+'ode']=_0x520378,_0x36925f(),location[_0x1b4916(0x4bb)+'d']();},[_0x55e57a(_0x33202a(0x5f6)+_0x33202a(0x4ce)+_0x33202a(0x42b)+_0x33202a(0x479)+'f\x20mat'+_0x33202a(0x432)+_0x33202a(0x35d)+'in\x20sa'+_0x33202a(0x500)+_0x33202a(0x644)+'he\x20fr'+_0x33202a(0x27a)+'is\x20ho'+_0x33202a(0x48f)+'lated'+'\x20—\x20te'+_0x33202a(0x2d2)+_0x33202a(0x201)+'hooks'+_0x33202a(0x4b3)+'ied\x20c'+_0x33202a(0x163))]),_0x3541fb(_0x2a6e37[_0x33202a(0x278)],'Each\x20'+'one\x20i'+_0x33202a(0x1e9)+_0x33202a(0x34a)+_0x33202a(0x61b)+_0x33202a(0x27d)+_0x33202a(0x381)+_0x33202a(0x561)+'the\x20w'+'hole\x20'+_0x33202a(0x481)+'load.'+'\x20ALL\x20'+_0x33202a(0x27b)+_0x33202a(0x3e1)+_0x33202a(0x5ca)+_0x33202a(0x3eb)+_0x33202a(0x429)+_0x33202a(0x22b)+'hat\x20d'+_0x33202a(0x1b9)+_0x33202a(0x5cc)+_0x33202a(0x5fb)+_0x33202a(0x640)+'al\x20me'+'thod\x20'+_0x33202a(0x2b9)+_0x33202a(0x1a8)+'nctio'+'n\x20sig'+'natur'+_0x33202a(0x46a)+'match'+_0x33202a(0x38a)+'\x20mome'+_0x33202a(0x531)+'\x20is\x20c'+'alled'+_0x33202a(0x51f)+_0x33202a(0x3e7)+_0x33202a(0x38b)+'one\x20a'+_0x33202a(0x515)+_0x33202a(0x470)+_0x33202a(0x4bb)+'d,\x20an'+'d\x20see'+_0x33202a(0x1d3)+_0x33202a(0x3c2)+_0x33202a(0x2f0)+'\x20buil'+'d\x20cho'+_0x33202a(0x65c)+'n.',_0x1793a8['hookG'+'od']||_0x1793a8['hookG'+_0x33202a(0x108)]||_0x1793a8['hookN'+_0x33202a(0x105)+'il']||_0x1793a8[_0x33202a(0x34d)+_0x33202a(0x14e)+'e'],_0x264906=>{var _0x14440a=_0x33202a;if(_0x31a85a['kcPck']!==_0x14440a(0x544)){var _0x48cf2e=(_0x14440a(0x314)+_0x14440a(0x1c9)+'1')[_0x14440a(0x1cf)]('|'),_0x1db5b8=-0x1*-0xa9+0x1*0x2191+-0x1*0x223a;while(!![]){switch(_0x48cf2e[_0x1db5b8++]){case'0':_0x1793a8['hookG'+_0x14440a(0x108)]=_0x264906;continue;case'1':location['reloa'+'d']();continue;case'2':_0x31a85a[_0x14440a(0x5e4)](_0x36925f);continue;case'3':_0x1793a8['hookC'+_0x14440a(0x14e)+'e']=_0x264906;continue;case'4':_0x1793a8[_0x14440a(0x4f9)+'oReco'+'il']=_0x264906;continue;case'5':_0x1793a8[_0x14440a(0x46f)+'od']=_0x264906;continue;}break;}}else _0x3b67f7[_0x14440a(0x453)](_0x49646e,_0x274bcb,-0x124+0xcb*-0xa+0x95e,_0x3b67f7[_0x14440a(0x2dc)],_0x506fcb),_0x3b67f7['SIcSV'](_0x3bad33,_0x5a1082,-0x2191+-0x439+-0x2*-0x130f,_0x3b67f7['gHWKG'],_0x155eca);},[_0x2a6e37['MKGeE'](_0x55e57a,_0x2a6e37[_0x33202a(0x376)]),_0x12a13e('god\x20('+'OHeal'+'th.In'+_0x33202a(0x1f4)+_0x33202a(0x5f8)+_0x33202a(0x155)+'h)',null,_0x4d3ba2(_0x1793a8['hookG'+'od'],_0x237ce3=>{var _0x276679=_0x33202a;_0x1793a8['hookG'+'od']=_0x237ce3,_0x31a85a[_0x276679(0x65d)](_0x36925f);})),_0x12a13e(_0x2a6e37[_0x33202a(0x573)],null,_0x2a6e37[_0x33202a(0x4e6)](_0x4d3ba2,_0x1793a8['hookG'+_0x33202a(0x108)],_0x968cf4=>{var _0x40b03f=_0x33202a;_0x1793a8['hookG'+_0x40b03f(0x108)]=_0x968cf4,_0x36925f();})),_0x2a6e37[_0x33202a(0x310)](_0x12a13e,_0x33202a(0x2d5)+'oil\x20('+'Recoi'+_0x33202a(0x5c7)+'on.Ti'+'ck)',null,_0x2a6e37[_0x33202a(0x3da)](_0x4d3ba2,_0x1793a8[_0x33202a(0x4f9)+_0x33202a(0x105)+'il'],_0x312e43=>{var _0x49c94e=_0x33202a;_0x1793a8[_0x49c94e(0x4f9)+'oReco'+'il']=_0x312e43,_0x36925f();})),_0x2a6e37['vUwiI'](_0x12a13e,_0x33202a(0x24d)+'re\x20(S'+_0x33202a(0x215)+_0x33202a(0x501)+_0x33202a(0x391)+_0x33202a(0x1ee)+'ounde'+'d)','no\x20ch'+'eats\x20'+_0x33202a(0x33a)+_0x33202a(0x246)+'ut\x20th'+'is',_0x4d3ba2(_0x1793a8[_0x33202a(0x34d)+_0x33202a(0x14e)+'e'],_0x2d0bca=>{var _0x1d20b5=_0x33202a;_0x1793a8[_0x1d20b5(0x34d)+'aptur'+'e']=_0x2d0bca,_0x3b67f7[_0x1d20b5(0x47a)](_0x36925f);}))]),_0x3541fb('ACTk\x20'+'Kille'+'r',_0x33202a(0x36d)+_0x33202a(0x378)+'odeSt'+'age\x20d'+_0x33202a(0x422)+_0x33202a(0x251)+_0x33202a(0x533)+_0x33202a(0x48a)+'via\x20S'+'topDe'+'tecti'+'on().'+_0x33202a(0x611)+_0x33202a(0x262),_0x1793a8[_0x33202a(0x345)+'ill'],_0x40ee85=>{_0x1793a8['actkK'+'ill']=_0x40ee85,_0x36925f();},[_0x55e57a(_0x2a6e37['DLlak'],!![])]),_0x2a6e37[_0x33202a(0x1a1)](_0x3541fb,_0x2a6e37['XAfEY'],_0x33202a(0x1be)+'\x20leav'+'e\x20ser'+_0x33202a(0x668)+_0x33202a(0x2a9)+'e\x20tra'+'ces.',!![],null,[_0x2a6e37['JQbhP'](_0x12a13e,'Wipe\x20'+_0x33202a(0x445)+'tting'+'s',null,_0x2a6e37[_0x33202a(0x2ca)](_0x48c500,_0x2a6e37[_0x33202a(0x110)],()=>{var _0x3a2218=_0x33202a,_0x515d1d={'zohZJ':'0|2|3'+'|1|5|'+'4','NVWOc':_0x3b67f7[_0x3a2218(0xfc)],'fLEkh':_0x3b67f7[_0x3a2218(0x60f)]};if(_0x3b67f7['TUKLM']!==_0x3a2218(0x229)){var _0x45d63c=_0x515d1d[_0x3a2218(0x1bb)][_0x3a2218(0x1cf)]('|'),_0x1767a5=0x1*0xf9d+0x4f*0x16+0x47b*-0x5;while(!![]){switch(_0x45d63c[_0x1767a5++]){case'0':var _0x175470=_0x39f18e[_0x3a2218(0x169)+_0x3a2218(0x185)+_0x3a2218(0x166)](_0x3a2218(0x41b));continue;case'1':_0x175470[_0x3a2218(0x18d)]=/^#[0-9a-f]{6}$/i[_0x3a2218(0x4d5)](_0x3c71bc)?_0x3f80af:_0x515d1d[_0x3a2218(0x497)];continue;case'2':_0x175470[_0x3a2218(0x55f)]='color';continue;case'3':_0x175470[_0x3a2218(0x22e)+_0x3a2218(0x598)]=_0x515d1d[_0x3a2218(0x587)];continue;case'4':return _0x175470;case'5':_0x175470[_0x3a2218(0x51c)+'ut']=()=>_0x21177a(_0x175470['value']);continue;}break;}}else _0x1793a8={..._0x26a2a0},_0x36925f(),location['reloa'+'d']();}))])];}var _0x16ccc9=null;function _0x3ba44a(_0xadda60){var _0x47f1e3=_0x436aeb;if(_0x2a6e37['hNNbv'](_0x47f1e3(0x106),_0x2a6e37[_0x47f1e3(0x571)]))_0x195b25['safeM'+'ode']=_0x4922d3,_0x402d5d(),_0x24a75c[_0x47f1e3(0x4bb)+'d']();else{_0x19f4a7=_0xadda60;if(!_0x16ccc9){if(_0x47f1e3(0x487)===_0x2a6e37[_0x47f1e3(0x3c9)]){var _0x11b4d1=document['creat'+_0x47f1e3(0x185)+'ent'](_0x2a6e37[_0x47f1e3(0x57f)]);_0x11b4d1['textC'+_0x47f1e3(0x35b)+'t']=_0x79877b,_0x2a63c2['appen'+'dChil'+'d'](_0x11b4d1),_0x16ccc9=_0x2ef073(),_0x2a63c2['appen'+_0x47f1e3(0x49e)+'d'](_0x16ccc9),_0x2a6e37[_0x47f1e3(0x173)](requestAnimationFrame,()=>_0x16ccc9[_0x47f1e3(0x22e)+'List']['add'](_0x47f1e3(0x504)));}else{var _0x57455a=new _0x57191e(_0x8f1f25)['readF'+'ield'](_0x3af5fe,_0x54b761);_0x5a1270[_0x47f1e3(0x2ad)](_0x4e9e17,_0x57455a!==_0x156e60?_0x57455a[_0x47f1e3(0x424)]():null);}}_0x16ccc9[_0x47f1e3(0x22e)+_0x47f1e3(0x4fc)][_0x47f1e3(0x549)+'e'](_0x47f1e3(0x504),_0xadda60);}}function _0x594fc6(){var _0x548c32=_0x436aeb,_0xe1425e={'sunNI':function(_0x4c4665,_0xc460ad){return _0x4c4665(_0xc460ad);},'HKvXE':function(_0x553ace,_0x4ae1f6){return _0x553ace*_0x4ae1f6;},'BlBmA':function(_0x363d4b,_0x552a38){var _0x2cf5c7=_0x4e2b;return _0x31a85a[_0x2cf5c7(0x65b)](_0x363d4b,_0x552a38);},'diUQL':function(_0x58c031,_0xff5453){return _0x31a85a['AzCkW'](_0x58c031,_0xff5453);}};if(_0x548c32(0x44c)===_0x31a85a[_0x548c32(0x67f)])_0x31a85a['ZiJWd'](_0x3ba44a,!_0x19f4a7);else{var _0x1ea84f=_0x4a266d[_0x548c32(0x203)]/(0x1a59+0x24*0x51+0xd*-0x2e7),_0x6a0dac=_0x190582[_0x548c32(0x2a8)+'t']/(0x679+0x1*-0x2576+0x1eff),_0x4d4b42=_0xe1425e['sunNI'](_0x293d20,_0x5bded7[_0x548c32(0x536)+'e'])||-0x1015+0x7af*-0x5+0x3681,_0x29da57=/^#[0-9a-f]{6}$/i[_0x548c32(0x4d5)](_0x15820e[_0x548c32(0x61c)+'or'])?_0x151066['chCol'+'or']:'#ff6b'+'9d';_0x23e45d['save'](),_0x5dc8a4['strok'+_0x548c32(0x5ab)+'e']=_0x29da57,_0xcc2ae[_0x548c32(0x397)+_0x548c32(0x281)]=_0x29da57,_0x50cf92[_0x548c32(0x64d)+_0x548c32(0x66a)]=_0x132d79[_0x548c32(0x316)](-0x9aa+0x11*-0x1d2+0x289d+0.5,(-0x179a*-0x1+-0x249a+0x12*0xb9)*_0x4d4b42),_0x2eb894[_0x548c32(0x263)+_0x548c32(0x60c)+'r']=_0x29da57,_0x2f2cbf[_0x548c32(0x263)+_0x548c32(0x3c6)]=0x59a*0x1+0x1212+-0x17a6;var _0x32ff45=_0xe1425e['HKvXE'](-0x1*-0x206b+0x1dd5+-0x3e3a*0x1,_0x4d4b42),_0x331121=(0x2*0x1241+-0x1e60+0x47*-0x16)*_0x4d4b42;_0x322ae4[_0x548c32(0x3bf)+_0x548c32(0x117)](),_0xc9410d[_0x548c32(0x1e2)+'o'](_0xe1425e['BlBmA'](_0x1ea84f,_0x32ff45)-_0x331121,_0x6a0dac),_0x25f0f9[_0x548c32(0x413)+'o'](_0x1ea84f-_0x32ff45,_0x6a0dac),_0x57407e['moveT'+'o'](_0x1ea84f+_0x32ff45,_0x6a0dac),_0x98f736[_0x548c32(0x413)+'o'](_0xe1425e['diUQL'](_0x1ea84f,_0x32ff45)+_0x331121,_0x6a0dac),_0x2d8489[_0x548c32(0x1e2)+'o'](_0x1ea84f,_0xe1425e[_0x548c32(0x534)](_0xe1425e[_0x548c32(0x534)](_0x6a0dac,_0x32ff45),_0x331121)),_0x1fcb19['lineT'+'o'](_0x1ea84f,_0xe1425e['BlBmA'](_0x6a0dac,_0x32ff45)),_0x57d4cd[_0x548c32(0x1e2)+'o'](_0x1ea84f,_0xe1425e['diUQL'](_0x6a0dac,_0x32ff45)),_0xf7bfec[_0x548c32(0x413)+'o'](_0x1ea84f,_0x6a0dac+_0x32ff45+_0x331121),_0x5729d8[_0x548c32(0x59d)+'e'](),_0x44acf0[_0x548c32(0x3bf)+_0x548c32(0x117)](),_0x5f2c57[_0x548c32(0x5fe)](_0x1ea84f,_0x6a0dac,(0x127c+-0x3d1*0x9+0xfde+0.6000000000000001)*_0x4d4b42,-0x1*-0x7c3+0x229c+-0x2a5f,_0x40a512['PI']*(-0x5d*0x6a+0x23e9+0x29b*0x1)),_0xa35bc4['fill'](),_0x159d93[_0x548c32(0x29f)+'re']();}}function _0x2ef073(){var _0x168592=_0x436aeb,_0x2bb4c7={'wVtpF':_0x168592(0x1a3)+'|2|1|'+'5','TKpub':function(_0x8687cd,_0x271f30){return _0x8687cd===_0x271f30;},'HuTII':function(_0x58cc7f,_0x21c055){return _0x2a6e37['QDhMl'](_0x58cc7f,_0x21c055);},'axeLk':_0x2a6e37[_0x168592(0x2e6)],'HLLmO':function(_0x4b2bfe,_0x4945b3){return _0x4b2bfe(_0x4945b3);}},_0x17665e=document[_0x168592(0x169)+_0x168592(0x185)+'ent'](_0x168592(0x2ea));_0x17665e['class'+'Name']=_0x2a6e37['DvnMt'];var _0x3eaffc=document['creat'+'eElem'+'ent'](_0x2a6e37['jCyDF']);_0x3eaffc['class'+'Name']=_0x168592(0x3d3)+'de';var _0x357012=document['creat'+_0x168592(0x185)+'ent'](_0x168592(0x2ea));_0x357012['class'+'Name']='mn-lo'+'go',_0x357012[_0x168592(0x51a)+_0x168592(0x5db)]=_0x2a6e37[_0x168592(0x274)],_0x3eaffc[_0x168592(0x2cb)+_0x168592(0x49e)+'d'](_0x357012);var _0x10b8d3=document[_0x168592(0x169)+_0x168592(0x185)+'ent'](_0x2a6e37[_0x168592(0x653)]);_0x10b8d3[_0x168592(0x22e)+'Name']=_0x2a6e37[_0x168592(0x151)];var _0x147793=document[_0x168592(0x169)+_0x168592(0x185)+_0x168592(0x166)](_0x2a6e37[_0x168592(0x574)]);_0x147793[_0x168592(0x22e)+_0x168592(0x598)]=_0x168592(0x5bb)+'p';var _0x30bfc0=document[_0x168592(0x169)+_0x168592(0x185)+_0x168592(0x166)]('div');_0x30bfc0[_0x168592(0x22e)+'Name']=_0x168592(0x64f)+_0x168592(0x3e0);var _0x45683c=document[_0x168592(0x169)+'eElem'+'ent']('h2');_0x45683c[_0x168592(0x22e)+'Name']=_0x168592(0x2ef),_0x45683c[_0x168592(0x51e)+_0x168592(0x35b)+'t']=_0x2a6e37[_0x168592(0x4f6)];var _0x4d34a7=document[_0x168592(0x169)+'eElem'+_0x168592(0x166)](_0x2a6e37[_0x168592(0x3c5)]);_0x4d34a7[_0x168592(0x22e)+_0x168592(0x598)]=_0x168592(0x47e)+'b',_0x4d34a7['textC'+_0x168592(0x35b)+'t']=_0x168592(0x129)+'trike'+_0x168592(0x2c1)+_0x168592(0x406),_0x30bfc0['appen'+'d'](_0x45683c,_0x4d34a7);var _0x1a9471=document[_0x168592(0x169)+_0x168592(0x185)+_0x168592(0x166)](_0x168592(0x5b2)+'n');_0x1a9471[_0x168592(0x55f)]=_0x2a6e37['owDvi'],_0x1a9471['class'+_0x168592(0x598)]=_0x168592(0x5c2)+_0x168592(0x36b),_0x1a9471['title']=_0x168592(0x130),_0x1a9471[_0x168592(0x51a)+_0x168592(0x5db)]=_0x168592(0x171)+_0x168592(0x1df)+_0x168592(0x399)+'\x200\x2024'+_0x168592(0x461)+'<path'+'\x20d=\x22M'+'6\x206l1'+_0x168592(0x5c1)+_0x168592(0x330)+_0x168592(0x411)+'/></s'+_0x168592(0x5a6),_0x1a9471['oncli'+'ck']=()=>_0x3ba44a(![]),_0x147793[_0x168592(0x2cb)+'d'](_0x30bfc0,_0x1a9471);var _0xf3d22f=document['creat'+'eElem'+'ent'](_0x168592(0x2ea));_0xf3d22f[_0x168592(0x22e)+'Name']=_0x2a6e37['bidTz'],_0x10b8d3[_0x168592(0x2cb)+'d'](_0x147793,_0xf3d22f),_0x17665e['appen'+'d'](_0x3eaffc,_0x10b8d3);var _0x36e8cb=new Map();for(var _0x5dffa4 of _0x423884){var _0x270ff6=('3|2|4'+'|0|5|'+'1|7|6')[_0x168592(0x1cf)]('|'),_0x32713c=-0x1456*0x1+-0x397*0x3+-0x1*-0x1f1b;while(!![]){switch(_0x270ff6[_0x32713c++]){case'0':_0x520a38[_0x168592(0x28c)]=_0x5dffa4['label'];continue;case'1':_0x520a38[_0x168592(0x10c)+'ck']=(_0x1459f4=>()=>_0x7f17b4(_0x1459f4))(_0x5dffa4['id']);continue;case'2':_0x520a38[_0x168592(0x55f)]='butto'+'n';continue;case'3':var _0x520a38=document[_0x168592(0x169)+'eElem'+_0x168592(0x166)](_0x168592(0x5b2)+'n');continue;case'4':_0x520a38[_0x168592(0x22e)+_0x168592(0x598)]=_0x168592(0x599)+'b';continue;case'5':_0x520a38[_0x168592(0x51a)+'HTML']=_0x2a6e37['dbiQj']('<smal'+'l>',_0x5dffa4[_0x168592(0x26e)])+_0x2a6e37[_0x168592(0x23d)];continue;case'6':_0x3eaffc[_0x168592(0x2cb)+_0x168592(0x49e)+'d'](_0x520a38);continue;case'7':_0x36e8cb['set'](_0x5dffa4['id'],_0x520a38);continue;}break;}}function _0x7f17b4(_0x396a40){var _0x2d8163=_0x168592,_0x31ac93=_0x2bb4c7[_0x2d8163(0x50b)][_0x2d8163(0x1cf)]('|'),_0x2467b9=-0xe81+0x2*-0x4de+0x183d;while(!![]){switch(_0x31ac93[_0x2467b9++]){case'0':var _0x337c55=_0x423884[_0x2d8163(0x53d)](_0x546bb3=>_0x546bb3['id']===_0x396a40)||_0x423884[0x99f+0x1*0x1731+-0x20d0];continue;case'1':for(var [_0x7d2d8,_0x29d2d]of _0x36e8cb)_0x29d2d['class'+'List'][_0x2d8163(0x549)+'e']('activ'+'e',_0x2bb4c7['TKpub'](_0x7d2d8,_0x396a40));continue;case'2':_0x45683c[_0x2d8163(0x51e)+_0x2d8163(0x35b)+'t']=_0x2bb4c7['HuTII'](_0x2bb4c7[_0x2d8163(0x211)],_0x337c55[_0x2d8163(0x26e)]);continue;case'3':_0x78f5e2[_0x2d8163(0x5a2)]=_0x396a40;continue;case'4':_0x1d08a2();continue;case'5':_0xf3d22f['repla'+'ceChi'+_0x2d8163(0x2b4)](..._0x2bb4c7[_0x2d8163(0x590)](_0x47c958,_0x396a40));continue;}break;}}return _0x2a6e37[_0x168592(0x170)](_0x7f17b4,_0x78f5e2['cat']||_0x2a6e37[_0x168592(0x233)]),setInterval(()=>{var _0x120093=_0x168592;if(_0x31a85a['XgEXa']!==_0x31a85a['zcEld']){if(!_0x19f4a7)return;var _0x1dc2f3=_0xf3d22f[_0x120093(0x67c)+_0x120093(0x267)];for(var _0x4a882b=-0x2278+-0x100+0x2378;_0x4a882b<_0x1dc2f3[_0x120093(0x634)+'h'];_0x4a882b++){var _0x56d83b=_0x1dc2f3[_0x4a882b][_0x120093(0x419)+_0x120093(0x49d)+_0x120093(0x4b2)](_0x31a85a[_0x120093(0x401)]);_0x56d83b&&(_0x56d83b[_0x120093(0x51e)+'onten'+'t']['index'+'Of'](_0x31a85a['kSLhe'])===0x34*0x29+0x1035+-0x1889||_0x31a85a[_0x120093(0x189)](_0x56d83b['textC'+'onten'+'t']['index'+'Of'](_0x120093(0x580)),0xef+0x2427+-0x2516))&&(_0x56d83b['textC'+_0x120093(0x35b)+'t']=_0xb0bb11[_0x120093(0xfe)+_0x120093(0x478)]?_0x120093(0x380)+'MODE\x20'+'-\x20ove'+_0x120093(0x50a)+'only,'+'\x20no\x20h'+_0x120093(0x3fe)+_0x120093(0x23b)+_0x120093(0x469)+_0x120093(0x5b5)+')':_0xb0bb11['uwmk']?_0x31a85a[_0x120093(0x541)](_0x31a85a[_0x120093(0x541)](_0x31a85a[_0x120093(0x15a)](_0x120093(0x664)+'bound'+'\x20'+(_0xb0bb11['hooks'+'Total']?_0x31a85a[_0x120093(0x1bf)](_0xb0bb11['hooks'+'Ok']+'/'+_0xb0bb11['hooks'+_0x120093(0x11f)],_0x120093(0x2e3)+'s'):_0x120093(0x1aa)+_0x120093(0x4b9)+_0x120093(0x280)+_0x120093(0x2ec)+_0x120093(0x1e1)),'\x20|\x20ga'+_0x120093(0x612)),_0xb0bb11[_0x120093(0x21a)+_0x120093(0x198)]?_0x120093(0x663)+'d':_0x120093(0x5dd)+'ng'),_0x120093(0x1a4)+'ooter'+'\x20')+(_0xb0bb11['shoot'+_0x120093(0x67b)]?_0x31a85a[_0x120093(0x16f)]:_0x31a85a[_0x120093(0x15f)])+_0x31a85a[_0x120093(0x143)]+(_0xb0bb11[_0x120093(0x207)+_0x120093(0x583)]?'held':_0x31a85a[_0x120093(0x15f)])+(_0xb0bb11['lastE'+_0x120093(0x1d5)]?'\x20|\x20ER'+_0x120093(0x66d)+_0xb0bb11[_0x120093(0x358)+_0x120093(0x1d5)]:''):_0x120093(0x664)+_0x120093(0x3b7)+'NG\x20-\x20'+_0x120093(0x5b4)+_0x120093(0x5d4)+'ly\x20(r'+_0x120093(0x12e)+_0x120093(0x2b7)+'he\x20us'+_0x120093(0x64c)+_0x120093(0x30f));}}else try{_0x1d47ba['body'][_0x120093(0x2cb)+_0x120093(0x49e)+'d'](_0x426702);}catch(_0x1a5c61){}},-0x1350+0x22f1+-0x1*0xbb9),_0x17665e;}var _0x79877b=_0x436aeb(0x488)+_0x436aeb(0x576)+_0x436aeb(0x306)+_0x436aeb(0x4d4)+_0x436aeb(0x482)+_0x436aeb(0x30a)+_0x436aeb(0x3d4)+_0x436aeb(0x647)+_0x436aeb(0x436)+_0x436aeb(0x564)+'order'+_0x436aeb(0xf7)+_0x436aeb(0x623)+_0x436aeb(0x4ff)+';\x20fon'+'t-fam'+_0x436aeb(0xdb)+'\x22Inte'+_0x436aeb(0x456)+'Segoe'+'\x20UI\x22,'+_0x436aeb(0x165)+'em-ui'+',\x20san'+_0x436aeb(0x649)+_0x436aeb(0x367)+'\x0a\x20\x20\x20\x20'+_0x436aeb(0x4e5)+_0x436aeb(0x245)+'{\x20pos'+'ition'+':\x20abs'+_0x436aeb(0x128)+_0x436aeb(0x59b)+'ht:\x202'+_0x436aeb(0x283)+'botto'+_0x436aeb(0x372)+'px;\x20w'+'idth:'+_0x436aeb(0x667)+_0x436aeb(0x360)+',\x20cal'+'c(100'+'vw\x20-\x20'+_0x436aeb(0x566)+_0x436aeb(0x23e)+'x-hei'+'ght:\x20'+'min(4'+'80px,'+_0x436aeb(0x352)+_0x436aeb(0x52e)+_0x436aeb(0x567)+_0x436aeb(0x28d)+';\x0a\x20\x20\x20'+_0x436aeb(0x3b4)+_0x436aeb(0x46b)+_0x436aeb(0x4ae)+_0x436aeb(0x452)+_0x436aeb(0x4f7)+_0x436aeb(0x633)+'addin'+_0x436aeb(0x58e)+'px;\x20b'+'order'+_0x436aeb(0x4d8)+'us:\x202'+_0x436aeb(0x4cb)+'point'+_0x436aeb(0x2d6)+_0x436aeb(0x582)+'\x20auto'+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+'ckgro'+_0x436aeb(0x162)+_0x436aeb(0x5d2)+_0x436aeb(0x4a8)+_0x436aeb(0x18c)+'82);\x20'+_0x436aeb(0x626)+'rop-f'+'ilter'+':\x20blu'+'r(22p'+_0x436aeb(0x63f)+'turat'+_0x436aeb(0x1c0)+'%);\x20-'+'webki'+'t-bac'+_0x436aeb(0x683)+'-filt'+'er:\x20b'+_0x436aeb(0x126)+'2px)\x20'+_0x436aeb(0x301)+'ate(1'+'50%);'+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+'-shad'+_0x436aeb(0x5e8)+'\x200\x200\x20'+'1px\x20r'+_0x436aeb(0x4a1)+_0x436aeb(0x1f6)+_0x436aeb(0x4bf)+_0x436aeb(0x4c3)+_0x436aeb(0x4ba)+_0x436aeb(0x59c)+_0x436aeb(0x606)+_0x436aeb(0x4f5)+_0x436aeb(0x1eb)+'255,2'+'55,.0'+'5),\x200'+'\x2030px'+'\x2080px'+'\x20rgba'+'(0,0,'+'0,.55'+');\x0a\x20\x20'+_0x436aeb(0x150)+_0x436aeb(0x191)+'y:\x200;'+'\x20tran'+_0x436aeb(0x5f3)+_0x436aeb(0x651)+_0x436aeb(0x261)+_0x436aeb(0x476)+'px);\x20'+_0x436aeb(0x25c)+'er-ev'+_0x436aeb(0x582)+'\x20none'+';\x20tra'+'nsiti'+'on:\x20o'+'pacit'+_0x436aeb(0x388)+_0x436aeb(0x305)+'e,\x20tr'+_0x436aeb(0x433)+_0x436aeb(0x5d1)+'5s\x20cu'+_0x436aeb(0x3ca)+_0x436aeb(0x562)+_0x436aeb(0x22a)+_0x436aeb(0x24b)+_0x436aeb(0x3e2)+'\x20\x20\x20\x20\x20'+_0x436aeb(0xe0)+'r:\x20#f'+_0x436aeb(0x41d)+';\x20fon'+_0x436aeb(0x29e)+_0x436aeb(0x66e)+_0x436aeb(0x53b)+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel.'+'shown'+'\x20{\x20op'+'acity'+':\x201;\x20'+_0x436aeb(0x377)+'form:'+'\x20none'+_0x436aeb(0x477)+'nter-'+_0x436aeb(0x4c7)+'s:\x20au'+_0x436aeb(0x578)+'\x0a\x20\x20\x20\x20'+'.mn-s'+_0x436aeb(0x5c6)+_0x436aeb(0x19c)+'lay:\x20'+_0x436aeb(0x569)+_0x436aeb(0x1ca)+_0x436aeb(0x2fe)+_0x436aeb(0x50f)+':\x20col'+_0x436aeb(0x48d)+'align'+'-item'+_0x436aeb(0x19e)+'nter;'+_0x436aeb(0x13c)+'\x204px;'+'\x20widt'+_0x436aeb(0x2a6)+_0x436aeb(0x625)+'lex:\x20'+_0x436aeb(0x37e)+'\x20padd'+_0x436aeb(0x654)+_0x436aeb(0x2f7)+(_0x436aeb(0x398)+'rder-'+_0x436aeb(0x5f9)+_0x436aeb(0x49c)+_0x436aeb(0x51d)+_0x436aeb(0x407)+'backg'+_0x436aeb(0x4ed)+':\x20rgb'+_0x436aeb(0x4af)+_0x436aeb(0x27c)+_0x436aeb(0x4b1)+_0x436aeb(0x351)+'\x20box-'+_0x436aeb(0x263)+'w:\x20in'+_0x436aeb(0x56a)+'\x200\x200\x20'+_0x436aeb(0x2e2)+_0x436aeb(0x4a1)+_0x436aeb(0x1f6)+_0x436aeb(0x4bf)+',.05)'+';\x20}\x0a\x20'+_0x436aeb(0x252)+_0x436aeb(0x53c)+_0x436aeb(0x1b7)+_0x436aeb(0x52b)+'y:\x20gr'+_0x436aeb(0x2a7)+_0x436aeb(0x131)+_0x436aeb(0x642)+':\x20cen'+'ter;\x20'+_0x436aeb(0x203)+_0x436aeb(0x3e8)+'x;\x20he'+_0x436aeb(0x3a5)+_0x436aeb(0x513)+_0x436aeb(0x30a)+'\x20\x20\x20.m'+'n-log'+'o-svg'+'\x20{\x20wi'+_0x436aeb(0x2f9)+'25px;'+_0x436aeb(0x1c5)+'ht:\x202'+_0x436aeb(0x40c)+'overf'+'low:\x20'+_0x436aeb(0x1fc)+'le;\x20f'+_0x436aeb(0x308)+':\x20dro'+_0x436aeb(0x3e4)+_0x436aeb(0x584)+_0x436aeb(0x36a)+_0x436aeb(0x605)+_0x436aeb(0x4af)+_0x436aeb(0x19b)+'157,.'+'8));\x20'+_0x436aeb(0x416)+_0x436aeb(0x318)+_0x436aeb(0x20c)+_0x436aeb(0x19c)+_0x436aeb(0x557)+'flex;'+_0x436aeb(0x42d)+_0x436aeb(0x520)+'ms:\x20c'+_0x436aeb(0x175)+_0x436aeb(0x5be)+_0x436aeb(0x679)+_0x436aeb(0x323)+'nt:\x20c'+_0x436aeb(0x175)+_0x436aeb(0x418)+'th:\x205'+'2px;\x20'+_0x436aeb(0x2a8)+_0x436aeb(0x17b)+_0x436aeb(0x365)+'order'+':\x200;\x20'+'borde'+'r-rad'+'ius:\x20'+_0x436aeb(0x396)+'\x0a\x20\x20\x20\x20'+_0x436aeb(0x3b5)+'kgrou'+'nd:\x20t'+'ransp'+'arent'+_0x436aeb(0x4e9)+'or:\x20r'+_0x436aeb(0x4a1)+_0x436aeb(0x1fb)+_0x436aeb(0x34b)+_0x436aeb(0x3a7)+_0x436aeb(0x409)+_0x436aeb(0x4e7)+_0x436aeb(0x17d)+_0x436aeb(0x443)+'nt-si'+'ze:\x201'+_0x436aeb(0x3d9)+'font-'+'weigh'+_0x436aeb(0x472)+'0;\x20}\x0a'+_0x436aeb(0x21e)+'mn-ta'+'b:hov'+_0x436aeb(0x35e)+'color'+_0x436aeb(0x66f)+_0x436aeb(0x593)+',238,'+'242,.'+_0x436aeb(0x426)+'\x0a\x20\x20\x20\x20'+'.mn-t'+_0x436aeb(0x253)+_0x436aeb(0x4f2)+_0x436aeb(0x4ad)+_0x436aeb(0x237)+'ff6b9'+_0x436aeb(0x528)+_0x436aeb(0x3f8)+_0x436aeb(0x162)+_0x436aeb(0x5d2)+_0x436aeb(0x3a8)+'07,15'+'7,.1)'+_0x436aeb(0x30a)+_0x436aeb(0x252)+_0x436aeb(0x158)+_0x436aeb(0x4ec)+_0x436aeb(0x5e9)+_0x436aeb(0x33d)+'n-wid'+'th:\x200'+';\x20dis'+'play:'+'\x20flex'+';\x20fle'+_0x436aeb(0x32a)+'ectio'+'n:\x20co'+'lumn;'+_0x436aeb(0x50c)+_0x436aeb(0x2d0)+_0x436aeb(0x113)+_0x436aeb(0x462)+_0x436aeb(0x4bd)+_0x436aeb(0x1ca)+';\x20ali'+'gn-it'+_0x436aeb(0x161)+_0x436aeb(0x1d6)+_0x436aeb(0x37c)+_0x436aeb(0x579)+_0x436aeb(0x633)+'addin'+_0x436aeb(0x10b)+_0x436aeb(0x20e)+_0x436aeb(0x4d3)+';\x20use'+_0x436aeb(0x1ac)+'ect:\x20'+_0x436aeb(0x37e)+_0x436aeb(0x50c)+'\x20\x20.mn'+_0x436aeb(0x60a)+'es\x20{\x20'+_0x436aeb(0x21d)+_0x436aeb(0x45c)+'in-wi'+_0x436aeb(0x2f9)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x436aeb(0x539)+_0x436aeb(0x548)+_0x436aeb(0x29e)+'e:\x2017'+'px;\x20f'+_0x436aeb(0x5e3)+'eight'+':\x20650'+';\x20}\x0a\x20'+_0x436aeb(0x252)+'n-sub'+'\x20{\x20fo'+_0x436aeb(0x272)+_0x436aeb(0x1a0)+_0x436aeb(0x164)+_0x436aeb(0x415))+('ty:\x20.'+_0x436aeb(0x58d)+_0x436aeb(0x21e)+'mn-cl'+_0x436aeb(0x3cb)+'\x20disp'+_0x436aeb(0x557)+_0x436aeb(0x25f)+_0x436aeb(0x67e)+_0x436aeb(0x1c7)+_0x436aeb(0x565)+'enter'+';\x20wid'+'th:\x202'+_0x436aeb(0x2e0)+'heigh'+_0x436aeb(0x2f3)+'px;\x20b'+_0x436aeb(0x141)+_0x436aeb(0x39d)+'borde'+'r-rad'+'ius:\x20'+'8px;\x20'+'backg'+_0x436aeb(0x4ed)+_0x436aeb(0x651)+'nspar'+'ent;\x20'+'color'+':\x20inh'+'erit;'+_0x436aeb(0x2c4)+_0x436aeb(0x259)+'.45;\x20'+_0x436aeb(0x35f)+_0x436aeb(0x319)+'inter'+';\x20}\x0a\x20'+_0x436aeb(0x252)+'n-clo'+_0x436aeb(0x540)+'ver\x20{'+'\x20opac'+_0x436aeb(0x259)+'1;\x20ba'+'ckgro'+'und:\x20'+'rgba('+_0x436aeb(0x375)+'55,25'+_0x436aeb(0x682)+_0x436aeb(0x349)+'\x20\x20\x20\x20.'+_0x436aeb(0x5c2)+_0x436aeb(0xfa)+'vg\x20{\x20'+_0x436aeb(0x203)+_0x436aeb(0x2de)+_0x436aeb(0x506)+'ight:'+'\x2014px'+_0x436aeb(0x5c9)+'l:\x20no'+'ne;\x20s'+'troke'+_0x436aeb(0x300)+_0x436aeb(0x368)+_0x436aeb(0x4e1)+'\x20stro'+_0x436aeb(0x672)+'dth:\x20'+'2;\x20st'+_0x436aeb(0x3b2)+_0x436aeb(0x2c2)+'ap:\x20r'+_0x436aeb(0x45d)+'\x20}\x0a\x20\x20'+_0x436aeb(0x2d0)+'-cols'+'\x20{\x20fl'+_0x436aeb(0x3ac)+';\x20min'+_0x436aeb(0x14f)+'ht:\x200'+_0x436aeb(0x11d)+'rflow'+_0x436aeb(0x530)+_0x436aeb(0x5a3)+_0x436aeb(0x650)+_0x436aeb(0x403)+_0x436aeb(0x4b8)+_0x436aeb(0x639)+_0x436aeb(0x149)+_0x436aeb(0x659)+'olumn'+'s:\x20re'+_0x436aeb(0x142)+_0x436aeb(0x1d7)+_0x436aeb(0x1fe)+_0x436aeb(0x5c8)+'ax(25'+'0px,\x20'+_0x436aeb(0x231)+';\x20ali'+'gn-it'+_0x436aeb(0x161)+_0x436aeb(0x239)+';\x20ali'+'gn-co'+'ntent'+_0x436aeb(0x677)+_0x436aeb(0x2ac)+_0x436aeb(0x5bd)+'0px;\x20'+_0x436aeb(0x36e)+_0x436aeb(0x2c9)+'\x204px\x20'+'6px\x200'+_0x436aeb(0x30a)+'\x20\x20\x20.m'+_0x436aeb(0x361)+_0x436aeb(0x25a)+_0x436aeb(0x2ed)+'-scro'+'llbar'+_0x436aeb(0x550)+_0x436aeb(0x2f9)+_0x436aeb(0x2e0)+'}\x0a\x20\x20\x20'+_0x436aeb(0x318)+_0x436aeb(0x4c0)+_0x436aeb(0x4a4)+'kit-s'+'croll'+'bar-t'+'humb\x20'+'{\x20bac'+_0x436aeb(0x57d)+'nd:\x20r'+_0x436aeb(0x4a1)+_0x436aeb(0x1f6)+'5,255'+',.08)'+_0x436aeb(0x299)+'der-r'+_0x436aeb(0x12a)+':\x204px'+_0x436aeb(0x30a)+'\x20\x20\x20.s'+'k-car'+_0x436aeb(0x553)+_0x436aeb(0x141)+_0x436aeb(0x4d8)+_0x436aeb(0x136)+'2px;\x20'+_0x436aeb(0x514)+_0x436aeb(0x4ed)+':\x20rgb'+_0x436aeb(0x4af)+',255,'+'255,.'+_0x436aeb(0x351)+'\x20box-'+'shado'+_0x436aeb(0x617)+_0x436aeb(0x56a)+_0x436aeb(0x304)+_0x436aeb(0x2e2)+_0x436aeb(0x4a1)+_0x436aeb(0x1f6)+'5,255'+_0x436aeb(0x440)+_0x436aeb(0x30a)+_0x436aeb(0x494)+_0x436aeb(0x660)+'d.on\x20'+_0x436aeb(0x4d7)+_0x436aeb(0x57d)+_0x436aeb(0x58a)+_0x436aeb(0x4a1)+'55,25'+_0x436aeb(0x4bf)+_0x436aeb(0x657)+_0x436aeb(0x5c5)+_0x436aeb(0x2af)+_0x436aeb(0x67a)+_0x436aeb(0x38f)+_0x436aeb(0x348)+_0x436aeb(0x56f)+_0x436aeb(0x5d2)+_0x436aeb(0x3a8)+'07,15'+_0x436aeb(0x3a1)+');\x20}\x0a'+_0x436aeb(0x21e)+_0x436aeb(0x628)+'rd-he'+'ad\x20{\x20'+'displ')+(_0x436aeb(0x5b8)+_0x436aeb(0x36f)+_0x436aeb(0x221)+'-item'+_0x436aeb(0x19e)+_0x436aeb(0x23c)+_0x436aeb(0x13c)+_0x436aeb(0x5fa)+_0x436aeb(0x174)+'ing:\x20'+_0x436aeb(0x312)+_0x436aeb(0x57b)+'\x20}\x0a\x20\x20'+_0x436aeb(0x39f)+_0x436aeb(0x366)+'-titl'+'e\x20{\x20f'+_0x436aeb(0x5e9)+'1;\x20mi'+'n-wid'+'th:\x200'+_0x436aeb(0x30a)+_0x436aeb(0x494)+_0x436aeb(0x660)+'d-tit'+_0x436aeb(0x339)+'rong\x20'+_0x436aeb(0x548)+_0x436aeb(0x29e)+_0x436aeb(0x66e)+'px;\x20f'+_0x436aeb(0x5e3)+_0x436aeb(0x510)+_0x436aeb(0x1f8)+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+'8,242'+',.45)'+_0x436aeb(0x30a)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+'.sk-c'+_0x436aeb(0x28a)+_0x436aeb(0x2eb)+'stron'+_0x436aeb(0x1e5)+'olor:'+_0x436aeb(0x5ea)+_0x436aeb(0x124)+'}\x0a\x20\x20\x20'+_0x436aeb(0x193)+_0x436aeb(0x4b5)+'\x20{\x20pa'+_0x436aeb(0x5d0)+':\x200\x201'+'2px\x201'+'0px;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x436aeb(0x646)+'\x20{\x20fo'+_0x436aeb(0x272)+_0x436aeb(0x1a0)+'1px;\x20'+_0x436aeb(0x415)+_0x436aeb(0x333)+'4;\x20ma'+_0x436aeb(0x49a)+'botto'+_0x436aeb(0x20d)+_0x436aeb(0x631)+_0x436aeb(0x21e)+_0x436aeb(0x3f2)+'l\x20{\x20d'+_0x436aeb(0x52b)+_0x436aeb(0x16d)+_0x436aeb(0x2f6)+'lign-'+'items'+':\x20cen'+'ter;\x20'+_0x436aeb(0x3ea)+_0x436aeb(0x2e0)+_0x436aeb(0x36e)+'ng:\x204'+_0x436aeb(0x1ba)+'\x20font'+_0x436aeb(0x44b)+':\x2011.'+'5px;\x20'+_0x436aeb(0x416)+'\x20.sk-'+_0x436aeb(0x26e)+'\x20{\x20fl'+_0x436aeb(0x3ac)+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+_0x436aeb(0x34b)+',.75)'+_0x436aeb(0x30a)+'\x20\x20\x20.s'+_0x436aeb(0x287)+_0x436aeb(0x53e)+_0x436aeb(0x52b)+_0x436aeb(0x3d0)+'ock;\x20'+_0x436aeb(0x12b)+_0x436aeb(0x3c8)+_0x436aeb(0x658)+_0x436aeb(0x2d1)+_0x436aeb(0x486)+_0x436aeb(0x17f)+'}\x0a\x20\x20\x20'+_0x436aeb(0x193)+_0x436aeb(0x4df)+_0x436aeb(0x5b7)+_0x436aeb(0x2d4)+'on:\x20r'+_0x436aeb(0x39a)+_0x436aeb(0x49b)+_0x436aeb(0x5f0)+_0x436aeb(0x383)+_0x436aeb(0x60e)+_0x436aeb(0x3a4)+'14px;'+_0x436aeb(0x556)+_0x436aeb(0x373)+';\x20bor'+_0x436aeb(0xf6)+'adius'+':\x2099p'+'x;\x20ba'+'ckgro'+_0x436aeb(0x162)+_0x436aeb(0x5d2)+'255,2'+'55,25'+_0x436aeb(0x176)+');\x20cu'+'rsor:'+_0x436aeb(0x255)+_0x436aeb(0x1d0)+'flex:'+'\x20none'+_0x436aeb(0x30a)+'\x20\x20\x20.s'+'k-swi'+_0x436aeb(0x1f3)+'after'+_0x436aeb(0x17a)+_0x436aeb(0x52a)+_0x436aeb(0x5bc)+_0x436aeb(0x1b8)+'tion:'+_0x436aeb(0x320)+_0x436aeb(0x2e1)+_0x436aeb(0x3cd)+_0x436aeb(0x3fa)+'\x20left'+':\x203px'+';\x20wid'+'th:\x208'+'px;\x20h'+'eight'+_0x436aeb(0x665)+_0x436aeb(0x299)+_0x436aeb(0xf6)+_0x436aeb(0x12a)+_0x436aeb(0x441)+';\x20bac'+_0x436aeb(0x57d)+_0x436aeb(0x58a)+_0x436aeb(0x4a1)+_0x436aeb(0x1f6)+_0x436aeb(0x4bf)+',.25)'+';\x20tra'+_0x436aeb(0x40d)+_0x436aeb(0x4a0)+'eft\x20.'+_0x436aeb(0x4dd)+_0x436aeb(0x684)+_0x436aeb(0x214)+'.2s;\x20'+_0x436aeb(0x416)+_0x436aeb(0x193)+_0x436aeb(0x4df)+_0x436aeb(0x60d)+_0x436aeb(0x560)+'cked='+_0x436aeb(0x336)+_0x436aeb(0x225)+_0x436aeb(0x514)+_0x436aeb(0x4ed)+_0x436aeb(0x66f))+('a(255'+',107,'+_0x436aeb(0x485)+_0x436aeb(0x421)+_0x436aeb(0x416)+_0x436aeb(0x193)+_0x436aeb(0x4df)+_0x436aeb(0x60d)+_0x436aeb(0x560)+_0x436aeb(0x4cf)+'\x22true'+_0x436aeb(0x3b9)+'fter\x20'+'{\x20lef'+'t:\x2015'+_0x436aeb(0x365)+'ackgr'+'ound:'+'\x20#ff6'+'b9d;\x20'+_0x436aeb(0x416)+'\x20.sk-'+_0x436aeb(0x195)+'\x20{\x20ba'+'ckgro'+_0x436aeb(0x162)+_0x436aeb(0x5d2)+_0x436aeb(0x375)+_0x436aeb(0x1f6)+_0x436aeb(0x1f5)+_0x436aeb(0x31b)+_0x436aeb(0x141)+_0x436aeb(0x39d)+_0x436aeb(0x559)+'r-rad'+'ius:\x20'+_0x436aeb(0x187)+_0x436aeb(0x3cc)+_0x436aeb(0x55d)+'eef2;'+'\x20padd'+_0x436aeb(0x654)+'6px\x209'+_0x436aeb(0x625)+_0x436aeb(0x45a)+_0x436aeb(0xf8)+'11.5p'+_0x436aeb(0x11c)+'tline'+':\x20non'+_0x436aeb(0x54b)+_0x436aeb(0x66b)+'dow:\x20'+_0x436aeb(0x159)+_0x436aeb(0x304)+'0\x201px'+'\x20rgba'+'(255,'+_0x436aeb(0x375)+_0x436aeb(0x5ec)+'5);\x20}'+'\x0a\x20\x20\x20\x20'+_0x436aeb(0x43a)+_0x436aeb(0x21c)+_0x436aeb(0x428)+'n\x20{\x20b'+_0x436aeb(0x684)+_0x436aeb(0x33b)+_0x436aeb(0xea)+'419;\x20'+_0x436aeb(0x416)+_0x436aeb(0x193)+'range'+_0x436aeb(0x10a)+'splay'+_0x436aeb(0x4ae)+_0x436aeb(0x64e)+'ign-i'+_0x436aeb(0x592)+_0x436aeb(0x459)+_0x436aeb(0x61a)+'ap:\x208'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x436aeb(0xf3)+_0x436aeb(0x167)+_0x436aeb(0x2b2)+'ebkit'+_0x436aeb(0x627)+_0x436aeb(0x3ba)+_0x436aeb(0x1d8)+_0x436aeb(0x3d6)+'ppear'+_0x436aeb(0x1ad)+_0x436aeb(0x2cd)+_0x436aeb(0x418)+_0x436aeb(0x44f)+_0x436aeb(0x3d9)+'heigh'+'t:\x208p'+'x;\x20ba'+_0x436aeb(0x3f8)+'und:\x20'+'trans'+'paren'+'t;\x20}\x0a'+_0x436aeb(0x21e)+_0x436aeb(0x4ee)+_0x436aeb(0x1b6)+_0x436aeb(0x4a4)+_0x436aeb(0x405)+'lider'+'-runn'+_0x436aeb(0x63c)+_0x436aeb(0x5f1)+_0x436aeb(0x1f1)+_0x436aeb(0x3a5)+_0x436aeb(0x5aa)+_0x436aeb(0x556)+_0x436aeb(0x5cd)+'dius:'+'\x202px;'+'\x20back'+_0x436aeb(0x33f)+'d:\x20li'+_0x436aeb(0x5a8)+'gradi'+_0x436aeb(0x337)+_0x436aeb(0x2fa)+_0x436aeb(0x3a3)+_0x436aeb(0x382)+')\x200\x200'+_0x436aeb(0x34e)+'r(--p'+',\x2050%'+')\x20100'+_0x436aeb(0x26d)+'repea'+'t,\x20rg'+_0x436aeb(0x495)+'5,255'+',255,'+'.08);'+_0x436aeb(0x50c)+'\x20\x20.sk'+'-slid'+_0x436aeb(0xf9)+'webki'+'t-sli'+'der-t'+_0x436aeb(0x47d)+_0x436aeb(0x1c8)+_0x436aeb(0x502)+_0x436aeb(0x24e)+_0x436aeb(0x5de)+_0x436aeb(0x3a9)+'e;\x20wi'+_0x436aeb(0x2f9)+_0x436aeb(0x187)+_0x436aeb(0x2a8)+_0x436aeb(0x629)+'x;\x20ma'+'rgin-'+_0x436aeb(0xe3)+_0x436aeb(0x4fa)+'\x20bord'+_0x436aeb(0x5cd)+_0x436aeb(0x219)+_0x436aeb(0x38c)+'\x20back'+_0x436aeb(0x33f)+'d:\x20#f'+'f6b9d'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-val'+_0x436aeb(0x4ac)+'nt-si'+'ze:\x201'+'1px;\x20'+'font-'+_0x436aeb(0x244)+_0x436aeb(0x3ae)+_0x436aeb(0x216)+_0x436aeb(0x496)+'th:\x202'+_0x436aeb(0x2e0)+_0x436aeb(0xfd)+_0x436aeb(0x221)+_0x436aeb(0x48c)+_0x436aeb(0x595)+'olor:'+'\x20rgba'+_0x436aeb(0x22c)+_0x436aeb(0x2ab)+_0x436aeb(0x10f)+_0x436aeb(0x349)+'\x20\x20\x20\x20.'+'sk-co'+_0x436aeb(0x1e8))+(_0x436aeb(0x192)+_0x436aeb(0x5ad)+_0x436aeb(0x40b)+'eight'+_0x436aeb(0x4e2)+'x;\x20bo'+'rder:'+_0x436aeb(0x1b4)+_0x436aeb(0x141)+'-radi'+_0x436aeb(0x1f7)+_0x436aeb(0x365)+'ackgr'+_0x436aeb(0x33b)+_0x436aeb(0x2cd)+_0x436aeb(0x168)+'ding:'+_0x436aeb(0x458)+_0x436aeb(0x22d)+_0x436aeb(0xda)+'nter;'+_0x436aeb(0x50c)+_0x436aeb(0x39f)+'-note'+_0x436aeb(0x4ac)+_0x436aeb(0x272)+'ze:\x201'+_0x436aeb(0x164)+_0x436aeb(0x3cc)+':\x20rgb'+'a(246'+',238,'+_0x436aeb(0xe7)+_0x436aeb(0x4b4)+'addin'+'g:\x202p'+'x\x200;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x436aeb(0x3b0)+'err\x20{'+'\x20colo'+'r:\x20#f'+'f7a93'+';\x20}\x0a\x20'+_0x436aeb(0x494)+_0x436aeb(0x32e)+_0x436aeb(0x306)+'ign-s'+'elf:\x20'+_0x436aeb(0x338)+_0x436aeb(0x239)+';\x20bor'+'der:\x20'+_0x436aeb(0x398)+'rder-'+_0x436aeb(0x5f9)+_0x436aeb(0x2fb)+'x;\x20pa'+'dding'+_0x436aeb(0x665)+'\x2016px'+_0x436aeb(0x511)+_0x436aeb(0x57d)+_0x436aeb(0x276)+_0x436aeb(0x2fa)+'d;\x20co'+'lor:\x20'+'#fff;'+'\x20font'+'-size'+_0x436aeb(0x2b1)+_0x436aeb(0x40c)+'font-'+_0x436aeb(0x244)+_0x436aeb(0x472)+_0x436aeb(0x44d)+'rsor:'+'\x20poin'+_0x436aeb(0x1d0)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x436aeb(0x183)+_0x436aeb(0x656)+_0x436aeb(0x31a)+_0x436aeb(0x387)+_0x436aeb(0x3b6)+_0x436aeb(0x62b)+_0x436aeb(0x551)+_0x436aeb(0x30a)+_0x436aeb(0x273));window[_0x436aeb(0x178)+'entLi'+_0x436aeb(0x4c4)+'r']('keydo'+'wn',_0x24c13c=>{var _0x378486=_0x436aeb;_0x24c13c['code']===_0x31a85a[_0x378486(0x446)]&&(_0x24c13c['preve'+'ntDef'+'ault'](),_0x594fc6());},!![]);var _0x23a97f=document[_0x436aeb(0x169)+'eElem'+_0x436aeb(0x166)]('div');_0x23a97f[_0x436aeb(0x58f)][_0x436aeb(0x52f)+'xt']=_0x436aeb(0x591)+'ion:f'+'ixed;'+_0x436aeb(0x522)+'2px;r'+_0x436aeb(0x3a5)+_0x436aeb(0x57b)+_0x436aeb(0x2a3)+_0x436aeb(0x190)+'47483'+_0x436aeb(0x18f)+_0x436aeb(0x22d)+':poin'+'ter;w'+'idth:'+_0x436aeb(0x61d)+_0x436aeb(0x2a8)+'t:26p'+'x;opa'+'city:'+'0.5;t'+_0x436aeb(0x5e2)+_0x436aeb(0x5d6)+_0x436aeb(0x415)+'ty\x200.'+_0x436aeb(0x1de)+_0x436aeb(0x340)+'-even'+_0x436aeb(0x5b3)+_0x436aeb(0x3f0)+'lter:'+_0x436aeb(0x1ef)+'shado'+'w(0\x200'+_0x436aeb(0x2a5)+'rgba('+'255,1'+_0x436aeb(0x2a1)+'7,0.7'+'))',_0x23a97f[_0x436aeb(0x51a)+'HTML']=_0x436aeb(0x171)+_0x436aeb(0x1df)+'ox=\x220'+_0x436aeb(0x3fc)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x436aeb(0x324)+'c-1.5'+_0x436aeb(0x13e)+'4-4.5'+_0x436aeb(0x39b)+'5\x200-2'+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x436aeb(0x5d9)+'\x204\x204.'+'5c0\x203'+_0x436aeb(0x552)+_0x436aeb(0x60b)+'.5z\x22\x20'+_0x436aeb(0x2e8)+'\x22none'+_0x436aeb(0xe4)+_0x436aeb(0x484)+_0x436aeb(0x3af)+_0x436aeb(0x5e6)+_0x436aeb(0x570)+'-widt'+_0x436aeb(0x1e0)+'\x20stro'+_0x436aeb(0x4fe)+_0x436aeb(0x437)+_0x436aeb(0x12f)+_0x436aeb(0x66c)+_0x436aeb(0x570)+_0x436aeb(0x588)+_0x436aeb(0x39e)+_0x436aeb(0x24c)+'d\x22/><'+_0x436aeb(0x62a)+'e\x20cx='+'\x2212\x22\x20'+_0x436aeb(0x317)+'0\x22\x20r='+'\x221.5\x22'+_0x436aeb(0x2a2)+'=\x22#ff'+_0x436aeb(0xe2)+_0x436aeb(0x622)+_0x436aeb(0x5a6),_0x23a97f['title']=_0x436aeb(0x4d9)+'a\x20Kou'+'r',_0x23a97f['onmou'+_0x436aeb(0x370)+'er']=()=>_0x23a97f[_0x436aeb(0x58f)]['opaci'+'ty']='1',_0x23a97f['onmou'+'selea'+'ve']=()=>_0x23a97f['style']['opaci'+'ty']=_0x436aeb(0x1ae),_0x23a97f[_0x436aeb(0x10c)+'ck']=_0x20a782=>{var _0x190dda=_0x436aeb;if(_0x31a85a['zWsRr'](_0x190dda(0xef),_0x190dda(0x2e7)))_0x20a782['stopP'+_0x190dda(0x139)+'ation'](),_0x594fc6();else{if(!_0x50899b[_0x190dda(0x3cf)+'ura'])_0x2e8a5a[_0x190dda(0x298)+'e'](_0x190dda(0x1a6)+(_0x9556a8[_0x190dda(0x5b2)+'n']+(-0xaf3*0x1+-0x1*0xcb3+0x17a7)));}},document['body']['appen'+'dChil'+'d'](_0x23a97f),_0x28f8ec(),requestAnimationFrame(_0x53a0ee),console[_0x436aeb(0x353)](_0x2a6e37[_0x436aeb(0x62c)],_0xb0bb11[_0x436aeb(0x517)]);});})()));
