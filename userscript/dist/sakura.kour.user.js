// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.9.3
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
function _0x29e6(_0x3bbfa1,_0x298432){_0x3bbfa1=_0x3bbfa1-(0xf39+0x1448+0x22d9*-0x1);var _0x50e425=_0x1054();var _0x47e60a=_0x50e425[_0x3bbfa1];if(_0x29e6['kVMQiA']===undefined){var _0x4beed4=function(_0x52ed39){var _0x331b5d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x33b5c6='',_0x2196f8='';for(var _0x75eda3=-0x42*-0x39+-0x144f+0x59d,_0x48b031,_0x11d27c,_0x1fda38=0x2d*-0xb7+-0xe95+-0x5d8*-0x8;_0x11d27c=_0x52ed39['charAt'](_0x1fda38++);~_0x11d27c&&(_0x48b031=_0x75eda3%(0x15*0x128+-0x1c27+0x3e3)?_0x48b031*(-0x398+-0x22c*0x11+0xa31*0x4)+_0x11d27c:_0x11d27c,_0x75eda3++%(0xd5e+0x2*0x574+0x17*-0x10e))?_0x33b5c6+=String['fromCharCode'](-0x84b+0x1f8b+-0x1b*0xd3&_0x48b031>>(-(-0xc81*-0x2+-0x179*0x2+-0x160e)*_0x75eda3&-0xd8c*0x2+0x42f+-0x135*-0x13)):-0x392+-0x196c+0x6*0x4d5){_0x11d27c=_0x331b5d['indexOf'](_0x11d27c);}for(var _0x3d5077=0x1a16+-0x1bdc+-0x2*-0xe3,_0x272963=_0x33b5c6['length'];_0x3d5077<_0x272963;_0x3d5077++){_0x2196f8+='%'+('00'+_0x33b5c6['charCodeAt'](_0x3d5077)['toString'](0x2*-0xa7+0x10bd+-0xf5f))['slice'](-(0x20e6+-0x493+-0x1c51));}return decodeURIComponent(_0x2196f8);};_0x29e6['fqVNpT']=_0x4beed4,_0x29e6['tPYzoM']={},_0x29e6['kVMQiA']=!![];}var _0x54475f=_0x50e425[-0x1*-0x20a7+0x2625+-0x11b3*0x4],_0x1b2e57=_0x3bbfa1+_0x54475f,_0x6e9703=_0x29e6['tPYzoM'][_0x1b2e57];return!_0x6e9703?(_0x47e60a=_0x29e6['fqVNpT'](_0x47e60a),_0x29e6['tPYzoM'][_0x1b2e57]=_0x47e60a):_0x47e60a=_0x6e9703,_0x47e60a;}(function(_0x277ef5,_0xecb1b9){var _0x1799d3=_0x29e6,_0x3bb227=_0x277ef5();while(!![]){try{var _0xb949c4=parseInt(_0x1799d3(0x353))/(0x31*0x1d+-0x1bb4+0x1628)*(-parseInt(_0x1799d3(0x153))/(-0x1902+0xd21+0xbe3))+parseInt(_0x1799d3(0x187))/(-0x1a53+-0xa*0x247+0x311c)*(parseInt(_0x1799d3(0x3ae))/(0x5a2+0x5d*0x65+-0x2a4f))+-parseInt(_0x1799d3(0x47f))/(-0x17f0+0x55a*0x4+0x1*0x28d)*(-parseInt(_0x1799d3(0x338))/(0x3fa+0x1c77*0x1+-0x206b))+parseInt(_0x1799d3(0x385))/(-0x1c9b*-0x1+0xaa6+0x139d*-0x2)+parseInt(_0x1799d3(0x1e8))/(0x122d+-0xa48+-0x7dd)+parseInt(_0x1799d3(0x246))/(-0x3*0x69e+0xbd0+-0x1*-0x813)*(-parseInt(_0x1799d3(0x4c4))/(0x5*-0x8b+-0x1d*-0xc3+0x2d*-0x6e))+-parseInt(_0x1799d3(0x47d))/(-0xa6e+-0x1*0x5e7+-0x20*-0x83)*(-parseInt(_0x1799d3(0x597))/(0x13*0x16+0x1*-0x1a30+-0x2f*-0x86));if(_0xb949c4===_0xecb1b9)break;else _0x3bb227['push'](_0x3bb227['shift']());}catch(_0x3ad8ef){_0x3bb227['push'](_0x3bb227['shift']());}}}(_0x1054,-0x12665*0xd+-0x41b66+-0x1dc7*-0xfb),((()=>{'use strict';var _0x32e67c=_0x29e6,_0x44b4b1={'yiruO':'unkno'+'wn','CTzXd':function(_0x564cb8,_0xa52518){return _0x564cb8+_0xa52518;},'omhTl':'\x20@\x20','iNvwx':function(_0x1b6564,_0x2ae7f8){return _0x1b6564*_0x2ae7f8;},'phhMw':_0x32e67c(0x23f)+_0x32e67c(0x42a),'jimJJ':_0x32e67c(0x3ea),'ubGWX':_0x32e67c(0x3af)+_0x32e67c(0x55b),'nfnMv':function(_0x8ee609,_0x2eea9a){return _0x8ee609(_0x2eea9a);},'QkiPh':function(_0x1315f7){return _0x1315f7();},'ebnKN':'movem'+'ents','tMeLT':function(_0x215cb8,_0x438476,_0x4935f7){return _0x215cb8(_0x438476,_0x4935f7);},'wCRoi':function(_0x5c0692,_0x36c27c){return _0x5c0692===_0x36c27c;},'qpauc':function(_0xe40d20,_0x5af3d6,_0x209e69,_0xb3a656){return _0xe40d20(_0x5af3d6,_0x209e69,_0xb3a656);},'ORecp':function(_0x267767){return _0x267767();},'iiRLR':'JVWrQ','rOWme':_0x32e67c(0x100)+'|4|3','tJLFv':function(_0xbbb00e,_0x490753,_0x5f0c7a,_0x158eb5,_0x2fcf4f){return _0xbbb00e(_0x490753,_0x5f0c7a,_0x158eb5,_0x2fcf4f);},'iaCnf':function(_0x1da957,_0x29d8e0,_0x53975b,_0x4366d4,_0x3d86ef){return _0x1da957(_0x29d8e0,_0x53975b,_0x4366d4,_0x3d86ef);},'HmUje':function(_0xdd9c7c,_0x57fe28){return _0xdd9c7c-_0x57fe28;},'KhPVC':function(_0x3b2d50,_0x49f24e){return _0x3b2d50/_0x49f24e;},'TYmsh':function(_0x313128,_0x4729dd){return _0x313128*_0x4729dd;},'MtYvn':function(_0x24a562){return _0x24a562();},'GrAhe':function(_0x353789){return _0x353789();},'EoeBo':function(_0x2630bf,_0x241549){return _0x2630bf!==_0x241549;},'qNssP':'TdMFZ','bMuXQ':_0x32e67c(0x42f),'bidOR':function(_0x8bd5ee,_0x3744b4){return _0x8bd5ee/_0x3744b4;},'JuGRe':function(_0x5f50ed,_0x487043){return _0x5f50ed===_0x487043;},'tnslN':_0x32e67c(0x595),'pVQha':function(_0x5d889c,_0x1b09ed){return _0x5d889c<_0x1b09ed;},'lTNFA':'f32','Povsb':function(_0x55e0fa,_0x1e7036){return _0x55e0fa!==_0x1e7036;},'slIQG':function(_0x266974,_0x2b1168,_0x5284a1,_0x29bc36,_0x4722b9){return _0x266974(_0x2b1168,_0x5284a1,_0x29bc36,_0x4722b9);},'oeFSs':_0x32e67c(0x54d),'FuyxH':function(_0x1a8454,_0x480b6f,_0x1563c2,_0x381f26,_0x28ef67){return _0x1a8454(_0x480b6f,_0x1563c2,_0x381f26,_0x28ef67);},'hkxHR':'ualna','gkhLP':'zJiLY','Amnjt':function(_0x5f3aad,_0x5e7700){return _0x5f3aad+_0x5e7700;},'fiCYQ':_0x32e67c(0x5a4)+'up','oALks':_0x32e67c(0xcd),'gIohy':_0x32e67c(0x1c1)+_0x32e67c(0x37c)+'e','nIlOx':_0x32e67c(0x397)+'ete','DUfOq':function(_0x220ff4,_0x378183,_0x1f4f37,_0x404341,_0x18324a){return _0x220ff4(_0x378183,_0x1f4f37,_0x404341,_0x18324a);},'KFvHW':'kour-'+_0x32e67c(0x3e5)+'0x250'+'-pare'+'nt','kaSIX':_0x32e67c(0x185)+_0x32e67c(0x434)+_0x32e67c(0x542)+'s','VIccN':'Kewzf','aXTQa':'none','LZtiR':function(_0x41f3e3,_0x54b056){return _0x41f3e3*_0x54b056;},'Ivxuh':function(_0x46d254,_0x43f038){return _0x46d254-_0x43f038;},'Aiirz':function(_0x396c56,_0x3aba82){return _0x396c56-_0x3aba82;},'bJzhG':function(_0x23110d,_0x59da68){return _0x23110d*_0x59da68;},'bEiiR':function(_0x2b3284,_0x4f6dd6){return _0x2b3284===_0x4f6dd6;},'hkBZx':_0x32e67c(0x156)+_0x32e67c(0x57a)+'2','QdSkC':'optio'+'n','wmUWD':_0x32e67c(0x1d6),'jCYOS':_0x32e67c(0x45e)+'MODE\x20'+'—\x20ove'+'rlay\x20'+_0x32e67c(0xc8)+_0x32e67c(0x463)+'ooks\x20'+_0x32e67c(0x626)+_0x32e67c(0x3fa)+'\x20exit'+')','PuHUo':function(_0xc04f3e,_0x2c2e89){return _0xc04f3e+_0x2c2e89;},'gdUFO':function(_0x396d26,_0x544db4){return _0x396d26+_0x544db4;},'LpDxx':function(_0x49ca0f,_0x379b67){return _0x49ca0f+_0x379b67;},'OAYne':_0x32e67c(0x236)+_0x32e67c(0x2f3),'Mtofd':_0x32e67c(0x425)+'d','ETivX':_0x32e67c(0x588),'NtdKy':'UWMK\x20'+_0x32e67c(0x232)+'NG\x20—\x20'+_0x32e67c(0x3fd)+'ay\x20on'+_0x32e67c(0x4be)+_0x32e67c(0x32a)+_0x32e67c(0x29c)+_0x32e67c(0x5d7)+'erscr'+_0x32e67c(0x621),'dqONE':_0x32e67c(0x2d5)+'PS\x20un'+'lock','TyOCN':'calls'+'\x20Unit'+_0x32e67c(0x1f6)+'ne.Ap'+_0x32e67c(0x598)+_0x32e67c(0x58b)+_0x32e67c(0x528)+_0x32e67c(0x175)+_0x32e67c(0x643)+'Rate','ZtrLX':_0x32e67c(0x620),'Gfbyf':function(_0x597fd5){return _0x597fd5();},'orkuf':function(_0x3cfb5e,_0x10a56a){return _0x3cfb5e(_0x10a56a);},'kfJcD':_0x32e67c(0x4a0),'dXxBr':_0x32e67c(0x1b9)+'255,1'+_0x32e67c(0x3eb)+_0x32e67c(0x342)+'5)','LCQaJ':function(_0x40d214,_0x5dd5ea){return _0x40d214===_0x5dd5ea;},'fVDHM':function(_0x13afb4,_0x4df2ed,_0x276a26,_0x194d1a,_0x1d5856,_0x3c7a0e,_0x463f29){return _0x13afb4(_0x4df2ed,_0x276a26,_0x194d1a,_0x1d5856,_0x3c7a0e,_0x463f29);},'XLIdi':'Space','rywzT':_0x32e67c(0x37c)+'e','eezYS':'nIOsX','irLeY':_0x32e67c(0x306)+'2px\x20u'+_0x32e67c(0x1a8)+_0x32e67c(0x5a7)+'e,mon'+_0x32e67c(0x5a7)+'e','yPhfq':_0x32e67c(0x1a3),'hFGAL':'Xekku','lOCza':function(_0xd7e9a,_0x107e5c){return _0xd7e9a===_0x107e5c;},'hIiVN':'div','stall':_0x32e67c(0x329),'KDFKS':_0x32e67c(0x559)+'lor','kcExZ':'sk-no'+'te','RayDA':_0x32e67c(0x17c),'riHFS':'stron'+'g','sBrrh':'sk-mb'+'ody','iNJGp':_0x32e67c(0x528)+'arget'+_0x32e67c(0x643)+_0x32e67c(0x126),'arJqn':function(_0x4fd601){return _0x4fd601();},'vXAKT':'UTZlW','dAGvT':function(_0x471fe0,_0x52df8b,_0x2702c8){return _0x471fe0(_0x52df8b,_0x2702c8);},'GpGZb':_0x32e67c(0xd4)+'l','LlkOK':'Scale'+'s\x20Ove'+_0x32e67c(0x411)+_0x32e67c(0x4dd)+_0x32e67c(0x108)+_0x32e67c(0x613)+_0x32e67c(0x43d)+_0x32e67c(0x103)+_0x32e67c(0x3ab)+_0x32e67c(0x116)+'still'+'\x20gate'+_0x32e67c(0x4e7)+'s.','Qrlql':function(_0x96a6d9,_0x2fb814){return _0x96a6d9(_0x2fb814);},'DeRfh':'100\x20='+_0x32e67c(0x27e)+'ult','vdwsF':_0x32e67c(0x15c)+'/\x20Gra'+'vity','KvUAh':_0x32e67c(0x568)+'es\x20on'+'\x20relo'+_0x32e67c(0x5d9)+'f\x20mat'+_0x32e67c(0x504)+'load\x20'+_0x32e67c(0x62c)+'fe\x20mo'+_0x32e67c(0x57b)+'he\x20fr'+_0x32e67c(0x169)+'is\x20ho'+_0x32e67c(0x366)+_0x32e67c(0x161)+'\x20—\x20te'+'ll\x20me'+_0x32e67c(0x2a8)+_0x32e67c(0x443)+_0x32e67c(0x282)+'ied\x20c'+'ount.','QCEyx':'Hook\x20'+_0x32e67c(0x274)+_0x32e67c(0x230)+_0x32e67c(0x283),'TSWoy':_0x32e67c(0x333)+_0x32e67c(0x186)+'odeSt'+'age\x20d'+'etect'+_0x32e67c(0xdb)+'t\x20sta'+'rtup\x20'+_0x32e67c(0x5fd)+_0x32e67c(0x571)+_0x32e67c(0x284)+'on().'+_0x32e67c(0x5b5)+'\x20ON.','uhfrX':function(_0x1e34e6,_0x109a50,_0x179146,_0x509b3f,_0x27f995,_0x2c5bc7){return _0x1e34e6(_0x109a50,_0x179146,_0x509b3f,_0x27f995,_0x2c5bc7);},'YQvkZ':_0x32e67c(0x1aa)+'r','NBfVN':_0x32e67c(0xa9)+_0x32e67c(0x438)+'\x20','SFvkz':_0x32e67c(0x3e1)+_0x32e67c(0xd5),'gJIwN':'mn-h','EJmjw':'Sakur'+_0x32e67c(0x523)+'r','rgcgM':'<svg\x20'+_0x32e67c(0x56a)+_0x32e67c(0x61d)+_0x32e67c(0x229)+'\x2024\x22>'+_0x32e67c(0x4fe)+_0x32e67c(0x1f1)+_0x32e67c(0x2cf)+_0x32e67c(0x60f)+'18\x206\x20'+_0x32e67c(0xd7)+_0x32e67c(0x494)+_0x32e67c(0xae),'QTgsd':_0x32e67c(0x53d)+'ls','IVwbu':function(_0xc61442,_0x589def){return _0xc61442(_0x589def);},'cKtFP':_0x32e67c(0x11c)+'t','ahCJM':function(_0x2b4b03,_0x56077e,_0x3fe091){return _0x2b4b03(_0x56077e,_0x3fe091);},'ilclx':'posit'+_0x32e67c(0x520)+_0x32e67c(0x607)+_0x32e67c(0x5c0)+':0;z-'+_0x32e67c(0x5bd)+_0x32e67c(0x539)+_0x32e67c(0x5d2)+'7;poi'+_0x32e67c(0x37f)+'event'+'s:non'+'e;','ZFxyQ':_0x32e67c(0x529),'UHtGn':_0x32e67c(0x538),'gZuGo':'visua'+'l','QGbtU':_0x32e67c(0x56d),'dxPBm':_0x32e67c(0x14d)+_0x32e67c(0x520)+_0x32e67c(0x607)+'top:1'+'2px;r'+'ight:'+'12px;'+_0x32e67c(0x435)+_0x32e67c(0x4cc)+'47483'+_0x32e67c(0x5e9)+_0x32e67c(0x15e)+_0x32e67c(0x22b)+'ter;w'+_0x32e67c(0x1c6)+'26px;'+_0x32e67c(0x433)+_0x32e67c(0x281)+'x;opa'+_0x32e67c(0x25e)+_0x32e67c(0x3f6)+_0x32e67c(0x395)+_0x32e67c(0x288)+'opaci'+_0x32e67c(0x2da)+_0x32e67c(0x24a)+'inter'+_0x32e67c(0x48e)+_0x32e67c(0x34b)+_0x32e67c(0xf2)+_0x32e67c(0x586)+_0x32e67c(0x565)+_0x32e67c(0x604)+'w(0\x200'+'\x204px\x20'+'rgba('+_0x32e67c(0x33f)+_0x32e67c(0x3eb)+_0x32e67c(0x5c7)+'))','OHKcJ':_0x32e67c(0x292)+'viewB'+_0x32e67c(0x61d)+_0x32e67c(0x229)+_0x32e67c(0x178)+'<path'+'\x20d=\x22M'+_0x32e67c(0x21f)+'c-1.5'+_0x32e67c(0xbe)+_0x32e67c(0x50b)+_0x32e67c(0x35e)+'5\x200-2'+_0x32e67c(0x294)+'8-4.5'+_0x32e67c(0x3ee)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+'5-4\x207'+_0x32e67c(0x4c1)+_0x32e67c(0x226)+_0x32e67c(0x41f)+_0x32e67c(0x307)+'oke=\x22'+_0x32e67c(0x413)+'9d\x22\x20s'+_0x32e67c(0xf5)+'-widt'+'h=\x222\x22'+_0x32e67c(0x21e)+_0x32e67c(0x304)+_0x32e67c(0x4dc)+'=\x22rou'+_0x32e67c(0x27f)+'troke'+_0x32e67c(0x3c2)+'join='+'\x22roun'+'d\x22/><'+'circl'+'e\x20cx='+'\x2212\x22\x20'+_0x32e67c(0x38e)+_0x32e67c(0x32c)+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+'6b9d\x22'+'/></s'+'vg>','MBvEo':'[saku'+_0x32e67c(0xfe)+_0x32e67c(0x609)+_0x32e67c(0x11b)+_0x32e67c(0xd1)+'\x20UWMK'+':','vdFhG':_0x32e67c(0x413)+'9d','rbnXK':_0x32e67c(0x3a3)+'c6','tHZUf':function(_0x36446a,_0x4fe632){return _0x36446a!==_0x4fe632;},'poxNO':_0x32e67c(0x3fc),'WkfXw':_0x32e67c(0x605),'Zgezg':'god','qWkpO':function(_0x2fefe9,_0x347c8d,_0x2b0cd9,_0x3103ed,_0x1cb830,_0x3ede19,_0x2630e7,_0x4d17ac){return _0x2fefe9(_0x347c8d,_0x2b0cd9,_0x3103ed,_0x1cb830,_0x3ede19,_0x2630e7,_0x4d17ac);},'YVwmb':_0x32e67c(0x143)+_0x32e67c(0x622)+_0x32e67c(0x20c),'aTBhQ':'Sakur'+_0x32e67c(0x564),'GSqzC':'capMo'+'ve','kxAcW':'IsGro'+_0x32e67c(0xa8),'arARW':_0x32e67c(0x2fd)+_0x32e67c(0x516),'nMFKW':'Tick','fMBnh':_0x32e67c(0x505)+'th','VwOsV':'Local'+_0x32e67c(0x3da),'nKsTg':function(_0x71ab0e,_0x1ddb8e,_0x4661d9){return _0x71ab0e(_0x1ddb8e,_0x4661d9);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x32e67c(0x32e)](location[_0x32e67c(0x1da)+_0x32e67c(0x130)]||''))return;if(window['__SAK'+'URA_K'+'OUR__'])return;window[_0x32e67c(0x121)+_0x32e67c(0x1d7)+_0x32e67c(0x4aa)]=!![];var _0x1c1e11=_0x44b4b1[_0x32e67c(0x102)],_0x44c5ea=_0x44b4b1[_0x32e67c(0x535)],_0x31474a={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x3e3487={..._0x31474a};try{Object['assig'+'n'](_0x3e3487,JSON[_0x32e67c(0x58c)](localStorage[_0x32e67c(0x272)+'em']('sakur'+_0x32e67c(0x512)+'r.v1')||'{}'));}catch(_0x5e889c){}function _0x491b4b(){var _0x5b0ad6=_0x32e67c;try{localStorage[_0x5b0ad6(0x4c0)+'em'](_0x5b0ad6(0x3cc)+'a.kou'+_0x5b0ad6(0x3a5),JSON[_0x5b0ad6(0x2a6)+_0x5b0ad6(0x300)](_0x3e3487));}catch(_0x27e3fe){}}var _0x34ef73={'uwmk':!!window[_0x32e67c(0x1df)+_0x32e67c(0x64c)+_0x32e67c(0x5a6)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x3e3487[_0x32e67c(0x3ac)+_0x32e67c(0x361)],'lastError':''};try{if(_0x44b4b1[_0x32e67c(0x374)](_0x32e67c(0x16c),_0x44b4b1[_0x32e67c(0x5d1)]))window[_0x32e67c(0x58e)+'entLi'+_0x32e67c(0x2d9)+'r'](_0x44b4b1['WkfXw'],_0x61f6=>{var _0x1e0ed7=_0x32e67c;try{var _0x37d02c=_0x61f6&&(_0x61f6[_0x1e0ed7(0x20f)+'ge']||_0x61f6[_0x1e0ed7(0x605)]&&_0x61f6[_0x1e0ed7(0x605)][_0x1e0ed7(0x20f)+'ge'])||_0x44b4b1['yiruO'];if(_0x61f6&&_0x61f6[_0x1e0ed7(0x3dd)+_0x1e0ed7(0x130)])_0x37d02c+=_0x44b4b1[_0x1e0ed7(0x487)](_0x44b4b1[_0x1e0ed7(0x5f5)]+String(_0x61f6['filen'+_0x1e0ed7(0x130)])[_0x1e0ed7(0x3ef)]('/')[_0x1e0ed7(0x3d5)]()+':',_0x61f6[_0x1e0ed7(0x337)+'o']||'?');_0x34ef73[_0x1e0ed7(0xe6)+'rror']=String(_0x37d02c)[_0x1e0ed7(0x4a8)](-0x2*-0xd9+0x1*0x19e7+-0x1b99,-0x15d7*0x1+-0x1de7+0x345e);}catch(_0xbbc10b){}});else{var _0x34c3d0={'ArYvE':function(_0x49e89a,_0x3d059f){return _0x49e89a(_0x3d059f);},'HTKKj':function(_0x26f727,_0x1946ea){var _0x23db07=_0x32e67c;return _0x44b4b1[_0x23db07(0x1cc)](_0x26f727,_0x1946ea);},'iQlle':function(_0x4331e3,_0x579f92){return _0x4331e3-_0x579f92;},'XwPgJ':function(_0x29a9f6){return _0x29a9f6();}},_0x2fc4b1=_0x443ec8[_0x32e67c(0x249)+_0x32e67c(0x2fb)+_0x32e67c(0x3d3)]('div');_0x2fc4b1[_0x32e67c(0x3f8)+'Name']=_0x44b4b1[_0x32e67c(0x1b2)];var _0x46b8d7=_0x32a9bf[_0x32e67c(0x249)+'eElem'+'ent']('input');_0x46b8d7[_0x32e67c(0xad)]=_0x44b4b1[_0x32e67c(0x3f7)],_0x46b8d7[_0x32e67c(0x3f8)+'Name']=_0x44b4b1['ubGWX'],_0x46b8d7[_0x32e67c(0x2a1)]=_0x2439ef,_0x46b8d7['max']=_0x44805d,_0x46b8d7[_0x32e67c(0x58f)]=_0x388cbf,_0x46b8d7[_0x32e67c(0x4cf)]=_0x38c85f;var _0x568ca0=_0x32e5d0['creat'+'eElem'+_0x32e67c(0x3d3)](_0x32e67c(0x1bf));_0x568ca0['class'+_0x32e67c(0x28c)]=_0x32e67c(0x106)+'l',_0x568ca0[_0x32e67c(0x295)+_0x32e67c(0x38f)+'t']=_0x44b4b1['nfnMv'](_0x5b8db9,_0x17d604);var _0x2d09c4=()=>{var _0x2305b1=_0x32e67c;_0x568ca0[_0x2305b1(0x295)+'onten'+'t']=_0x34c3d0['ArYvE'](_0x4b8c24,_0x46b8d7['value']),_0x2fc4b1[_0x2305b1(0x154)][_0x2305b1(0xaf)+_0x2305b1(0xde)+'y'](_0x2305b1(0xfa),_0x34c3d0[_0x2305b1(0x1e6)](_0x34c3d0['iQlle'](_0x46b8d7[_0x2305b1(0x4cf)],_0x3ec9ab)/(_0x2fd129-_0x18e569),0x122*0x11+-0x12*-0x175+-0x2d18)+'%');};return _0x46b8d7['oninp'+'ut']=()=>{_0x34c3d0['XwPgJ'](_0x2d09c4),_0x36e0d1(_0x284341(_0x46b8d7['value']));},_0x44b4b1['QkiPh'](_0x2d09c4),_0x2fc4b1['appen'+'d'](_0x46b8d7,_0x568ca0),_0x2fc4b1;}}catch(_0x4763f0){}var _0x426b0e=null,_0x5f3fcc=null,_0x3895ee={},_0x789d9a=[],_0x12c2a3=[],_0x4b51f2=new Map();function _0x31b81c(_0x713bdb,_0x294b68){var _0x194ebd=_0x32e67c;if(!_0x294b68||_0x713bdb[_0x194ebd(0xda)+_0x194ebd(0x4e1)](_0x294b68)||_0x713bdb['lengt'+'h']>0x522+0x1cfc*0x1+-0x21de*0x1)return;_0x713bdb[_0x194ebd(0x644)](_0x294b68);}function _0x5be1f0(_0x1b866b,_0x332958,_0x4b434a,_0x26f7ab){var _0x2c053b=_0x32e67c,_0x4c4c67=(_0x2c053b(0x30c)+_0x2c053b(0x457)+'0')['split']('|'),_0x5a5a74=-0xf3a+0x154b+-0x1*0x611;while(!![]){switch(_0x4c4c67[_0x5a5a74++]){case'0':if(_0x26f7ab===_0x44b4b1[_0x2c053b(0x61f)]&&_0x1b866b[_0x2c053b(0x259)+'h']){var _0x3dd43f=_0x3895ee['capMo'+'ve'];if(_0x3dd43f)try{_0x3dd43f[_0x2c053b(0xf8)+'ed']=![];}catch(_0x8e3541){}}continue;case'1':try{_0x552f41=_0x332958&&_0x332958[_0x2c053b(0x24e)]?_0x332958[_0x2c053b(0x24e)]():-0x1*-0x3f5+0x1253*0x1+-0x1*0x1648;}catch(_0x385b16){}continue;case'2':if(!_0x552f41)return;continue;case'3':var _0x552f41=0x429+0x22c6+-0x26ef*0x1;continue;case'4':_0x4b434a[_0x26f7ab]=_0x1b866b['lengt'+'h'];continue;case'5':_0x44b4b1[_0x2c053b(0x382)](_0x31b81c,_0x1b866b,_0x552f41);continue;}break;}}function _0x4e2668(_0x2358a6,_0x502c4a,_0x241ac8){var _0x583841=_0x32e67c,_0x56640f=_0x4b51f2['get'](_0x2358a6);!_0x56640f&&(_0x56640f=new Map(),_0x4b51f2['set'](_0x2358a6,_0x56640f));if(!_0x56640f[_0x583841(0x1b1)](_0x502c4a))try{var _0x1dfcf4=new _0x426b0e(_0x2358a6)['readF'+_0x583841(0xb7)](_0x502c4a,_0x241ac8);_0x56640f[_0x583841(0x195)](_0x502c4a,_0x1dfcf4!==undefined?_0x1dfcf4['val']():null);}catch(_0x3ca441){_0x56640f[_0x583841(0x195)](_0x502c4a,null);}return _0x56640f[_0x583841(0xaa)](_0x502c4a);}function _0x30cab1(_0x3df6b2,_0x16db7a,_0xd5fd38,_0x122e93){var _0x447459=_0x32e67c;try{new _0x426b0e(_0x3df6b2)[_0x447459(0x417)+_0x447459(0x1fe)](_0x16db7a,_0xd5fd38,_0x122e93);}catch(_0x1cd0bd){}}function _0x536dfb(_0x5f4121,_0xd22eeb){var _0x390834=_0x32e67c;try{var _0x323894=new _0x426b0e(_0x5f4121)[_0x390834(0x2c2)+_0x390834(0xb7)](_0xd22eeb,'u32');return _0x323894?_0x323894[_0x390834(0x24e)]():0x5bd+0x1*0x247f+-0x35*0xcc;}catch(_0x10d66a){return 0xc25+-0x11e4*-0x2+-0x2fed;}}function _0x49f31d(_0x20899a,_0x2864af,_0x1d54a8,_0x5c6e49){var _0x551759=_0x32e67c;if(_0x44b4b1[_0x551759(0x182)](_0x551759(0x26c),_0x551759(0x424)))try{_0x50ae18[_0x551759(0xf8)+'ed']=!!_0xe6cb08;}catch(_0x7f95f0){}else{var _0x5f9f04=_0x44b4b1['qpauc'](_0x4e2668,_0x20899a,_0x2864af,_0x1d54a8);if(_0x5f9f04!=null)_0x30cab1(_0x20899a,_0x2864af,_0x1d54a8,_0x5f9f04*_0x5c6e49);}}function _0x5b7558(_0x582347,_0x55f6a5,_0x307e03,_0x382ed5,_0x3b0fc7,_0x379142,_0xc6f3b4){var _0x11368a=_0x32e67c;try{var _0x2a415c=_0x5f3fcc['hookP'+'refix']({'typeName':_0x55f6a5,'methodName':_0x307e03,'params':_0x382ed5,'returnType':_0x3b0fc7},_0x379142);return _0x2a415c[_0x11368a(0xf8)+'ed']=_0xc6f3b4!==![],_0x3895ee[_0x582347]=_0x2a415c,_0x34ef73['hooks'+_0x11368a(0x58a)]++,_0x2a415c;}catch(_0x1ad774){if(_0x11368a(0xf7)===_0x11368a(0xf7))return console['warn'](_0x11368a(0x51a)+'ra-ko'+_0x11368a(0x1d5)+_0x11368a(0x1ff)+_0x11368a(0x5f6)+_0x11368a(0x509),_0x582347,_0x1ad774&&_0x1ad774['messa'+'ge']),null;else _0x47c64c[_0x11368a(0x581)+'or']=_0x293084,_0xd84149();}}function _0x2cfb67(_0x4b1ee5,_0x4ee4c5,_0x664b54,_0x2cda10,_0x2e0fa2,_0x3591e8,_0x2ce854){var _0x154233=_0x32e67c,_0x37cfdd={'BTFXA':function(_0x4df1d1){var _0x28ca6f=_0x29e6;return _0x44b4b1[_0x28ca6f(0x1cf)](_0x4df1d1);}};try{if(_0x154233(0x269)===_0x44b4b1[_0x154233(0xe8)])_0x59cecb['actkK'+'ill']=_0x233c05,_0x37cfdd['BTFXA'](_0x4b1495);else{var _0x275f23=_0x44b4b1[_0x154233(0x5db)]['split']('|'),_0x525cf0=-0xd69*0x1+0x23a0+-0x1637;while(!![]){switch(_0x275f23[_0x525cf0++]){case'0':_0x3895ee[_0x4b1ee5]=_0x1f770e;continue;case'1':_0x1f770e[_0x154233(0xf8)+'ed']=_0x2ce854!==![];continue;case'2':var _0x1f770e=_0x5f3fcc['hookP'+_0x154233(0x5a8)+'x']({'typeName':_0x4ee4c5,'methodName':_0x664b54,'params':_0x2cda10,'returnType':_0x2e0fa2},_0x3591e8);continue;case'3':return _0x1f770e;case'4':_0x34ef73[_0x154233(0x443)+_0x154233(0x58a)]++;continue;}break;}}}catch(_0x425865){return console[_0x154233(0x215)]('[saku'+'ra-ko'+_0x154233(0x1d5)+_0x154233(0x1ff)+'eg\x20fa'+'iled:',_0x4b1ee5,_0x425865&&_0x425865['messa'+'ge']),null;}}var _0x47c09c=()=>![];try{if(window['Unity'+'WebMo'+_0x32e67c(0x5a6)]&&!_0x3e3487['safeM'+'ode']){var _0x57cfe6=(_0x32e67c(0x4fd)+'|6|5|'+_0x32e67c(0x10c))[_0x32e67c(0x3ef)]('|'),_0x363d0c=0x8e2*-0x3+-0x105a+0xac0*0x4;while(!![]){switch(_0x57cfe6[_0x363d0c++]){case'0':if(_0x3e3487['hookG'+'od'])_0x5b7558(_0x44b4b1[_0x32e67c(0x453)],'OHeal'+'th','Initi'+_0x32e67c(0x3f1)+'keHea'+'lth',['i32',_0x44b4b1[_0x32e67c(0x5b0)]],undefined,_0x47c09c,!!_0x3e3487[_0x32e67c(0x561)]);continue;case'1':if(_0x3e3487[_0x32e67c(0xeb)+_0x32e67c(0xdd)+'e'])_0x44b4b1[_0x32e67c(0x492)](_0x2cfb67,_0x32e67c(0x491)+_0x32e67c(0x438),'OShoo'+'ter',_0x44b4b1[_0x32e67c(0x235)],['i32',_0x32e67c(0x54d)],undefined,(_0x3cc63f,_0x20e5cb)=>{var _0x5372a7=_0x32e67c;_0x44b4b1[_0x5372a7(0x320)](_0x5be1f0,_0x12c2a3,_0x20e5cb,_0x34ef73,_0x5372a7(0x159)+_0x5372a7(0x2e6));},!![]);continue;case'2':_0x426b0e=window['Unity'+_0x32e67c(0x64c)+'dkit'][_0x32e67c(0x55f)+_0x32e67c(0x267)+'er'];continue;case'3':_0x5f3fcc=window[_0x32e67c(0x1df)+_0x32e67c(0x64c)+'dkit'][_0x32e67c(0x5b2)+'me']['creat'+_0x32e67c(0x513)+'in']({'name':_0x44b4b1[_0x32e67c(0x5ba)],'version':'1.1.0','referencedAssemblies':[_0x32e67c(0x38b)+_0x32e67c(0x4b6)+_0x32e67c(0x4e0)+_0x32e67c(0x637)]});continue;case'4':if(_0x3e3487[_0x32e67c(0xeb)+'aptur'+'e'])_0x2cfb67(_0x44b4b1['GSqzC'],'Legio'+'nPlat'+_0x32e67c(0x606)+_0x32e67c(0x440)+_0x32e67c(0x600)+_0x32e67c(0x51f)+_0x32e67c(0x3d3),_0x44b4b1[_0x32e67c(0x50e)],[_0x32e67c(0x54d)],'i32',(_0xf7ac50,_0x38a739)=>{var _0x450073=_0x32e67c;_0x44b4b1['iaCnf'](_0x5be1f0,_0x789d9a,_0x38a739,_0x34ef73,_0x44b4b1[_0x450073(0x61f)]);},!![]);continue;case'5':if(_0x3e3487[_0x32e67c(0x278)+'oReco'+'il'])_0x5b7558(_0x44b4b1['arARW'],'Legio'+_0x32e67c(0x15d)+'forms'+_0x32e67c(0x440)+_0x32e67c(0x600)+_0x32e67c(0x170)+_0x32e67c(0x63f)+'on',_0x44b4b1[_0x32e67c(0x227)],[_0x44b4b1['oeFSs']],undefined,_0x47c09c,!!_0x3e3487['noRec'+_0x32e67c(0x516)]);continue;case'6':if(_0x3e3487[_0x32e67c(0x339)+_0x32e67c(0x2c7)])_0x44b4b1[_0x32e67c(0x492)](_0x5b7558,'godDi'+'e',_0x44b4b1['fMBnh'],_0x44b4b1[_0x32e67c(0x277)],[_0x44b4b1[_0x32e67c(0x5b0)],_0x44b4b1[_0x32e67c(0x5b0)],'i32',_0x44b4b1[_0x32e67c(0x5b0)],_0x32e67c(0x54d)],undefined,_0x47c09c,!!_0x3e3487['god']);continue;}break;}}}catch(_0x20071c){console['warn'](_0x32e67c(0x51a)+'ra-ko'+'ur]\x20U'+_0x32e67c(0x370)+_0x32e67c(0x2fe)+_0x32e67c(0x2c0)+':',_0x20071c&&_0x20071c[_0x32e67c(0x20f)+'ge']);}function _0x54098f(_0x4c54b2,_0x100355){var _0x1005d3=_0x32e67c;if(_0x44b4b1[_0x1005d3(0x5de)](_0x44b4b1[_0x1005d3(0x253)],_0x44b4b1['qNssP'])){_0x44b4b1['nfnMv'](_0x58db84,_0x5a3929),_0x3dbf58++;var _0x44197e=_0x5daf7f[_0x1005d3(0x2a3)]();_0x44b4b1['HmUje'](_0x44197e,_0x55de36)>=0x2003+0x2355+-0x4164&&(_0x128a18=_0x5e53fd['round'](_0x44b4b1['KhPVC'](_0x44b4b1[_0x1005d3(0x52d)](_0x30a2c7,-0x242+-0x112a+0x1754),_0x44b4b1[_0x1005d3(0x49b)](_0x44197e,_0x2c176f))),_0x158de4=-0x2229+0x1145*-0x1+0x3a*0xe3,_0x2f0bda=_0x44197e);_0x44b4b1[_0x1005d3(0x19b)](_0x38457e),_0x44b4b1['GrAhe'](_0x4e18ee),_0x4deae2[_0x1005d3(0x19e)+_0x1005d3(0x202)](0xe3*0x11+0x53+-0x7b3*0x2,0x7f*0x22+-0x20f4+0x1016,_0x5e9a43['w'],_0x5b356f['h']);var _0x2e2213={'left':0x0,'top':0x0,'right':_0x15e420['w'],'bottom':_0x6f0ffa['h'],'width':_0xd8a26f['w'],'height':_0x531077['h']};if(_0x1d235a[_0x1005d3(0xf4)+_0x1005d3(0x1cb)])_0x44b4b1['nfnMv'](_0x1cd1b8,_0x2e2213);if(_0x3f55f7['keyst'+'rokes'])_0x237e3a(_0x2e2213);_0x44b4b1['nfnMv'](_0x417fb0,_0x2e2213);}else{var _0x57e3f4=_0x3895ee[_0x4c54b2];if(_0x57e3f4)try{_0x57e3f4[_0x1005d3(0xf8)+'ed']=!!_0x100355;}catch(_0x41d847){}}}setInterval(()=>{var _0x4b85cf=_0x32e67c;if(_0x4b85cf(0x42f)!==_0x44b4b1[_0x4b85cf(0x3ba)])_0x1f1926[_0x4b85cf(0x128)+_0x4b85cf(0x4ea)+'ault'](),_0x5d41e1();else{if(!_0x426b0e||!window[_0x4b85cf(0x26e)+_0x4b85cf(0x4ab)+_0x4b85cf(0x5e0)])return;var _0x257ea7=_0x44b4b1[_0x4b85cf(0x4fc)](Number(_0x3e3487[_0x4b85cf(0x2d1)+'Pct'])||-0x8a*-0x17+-0x9a1*-0x3+0x28e5*-0x1,-0x2428+-0x1d*0x135+0x581*0xd),_0xdbfe89=(Number(_0x3e3487[_0x4b85cf(0x216)+'ct'])||0x2588+-0x5*0x445+0x1*-0xfcb)/(0x22d4+0x6b*0x49+0x1*-0x40f3),_0x3c25ab=_0x44b4b1[_0x4b85cf(0x362)](Number(_0x3e3487['gravi'+_0x4b85cf(0x19f)])||-0x1e6e+0x13c9+0xb09,0x13f9+0x1b*-0x88+-0x53d),_0x473a71=Math[_0x4b85cf(0x3c5)](-0xb14*-0x2+-0x1bb5*0x1+-0x9*-0x9e,Number(_0x3e3487[_0x4b85cf(0x38c)+'eValu'+'e'])||-0x8b*0x3b+-0x2*-0x59e+-0x721*-0x3),_0x170f67=_0x44b4b1[_0x4b85cf(0x5de)](_0x257ea7,-0xa90+-0x1*-0x10b9+-0x628)||_0x44b4b1[_0x4b85cf(0x5de)](_0xdbfe89,0x1e7a+0xfe*-0x11+-0xd9b)||_0x3c25ab!==0x1619+-0x2624+-0x9e*-0x1a||_0x3e3487['bhop'],_0x49a0a7=_0x3e3487['noSpr'+'ead']||_0x3e3487[_0x4b85cf(0x38c)+'eExp']||_0x3e3487['infAm'+'moExp']||_0x3e3487[_0x4b85cf(0x1ad)+_0x4b85cf(0x5ae)];if(!_0x170f67&&!_0x49a0a7)return;try{if(_0x44b4b1[_0x4b85cf(0x220)](_0x4b85cf(0x137),_0x44b4b1['tnslN']))_0x2e2218['hookG'+'od']=_0x226ff6,_0x1f20bc['hookG'+_0x4b85cf(0x2c7)]=_0x42e431,_0x272c61[_0x4b85cf(0x278)+'oReco'+'il']=_0x3e4a36,_0x2da72f[_0x4b85cf(0xeb)+'aptur'+'e']=_0x209743,_0x44b4b1[_0x4b85cf(0x19b)](_0x1a7d57),_0x2f2ce3[_0x4b85cf(0x209)+'d']();else for(var _0x1b952b=-0x1945+0x142f*0x1+0x516;_0x44b4b1['pVQha'](_0x1b952b,_0x789d9a['lengt'+'h']);_0x1b952b++){var _0xe685af=_0x789d9a[_0x1b952b];if(!_0xe685af)continue;if(_0x44b4b1[_0x4b85cf(0x5de)](_0x257ea7,-0x1d39+-0x6fd*0x1+-0x2437*-0x1)){var _0x1a2e3b=(_0x4b85cf(0x4b3)+_0x4b85cf(0x2e8)+'2')['split']('|'),_0x566578=-0x10*0x89+0x1b*-0x14d+-0x1*-0x2baf;while(!![]){switch(_0x1a2e3b[_0x566578++]){case'0':_0x44b4b1['tJLFv'](_0x49f31d,_0xe685af,0xcc+-0x1bcc+0xa*0x2b6,_0x44b4b1['lTNFA'],_0x257ea7);continue;case'1':_0x49f31d(_0xe685af,0xf21+-0x22f*0x5+-0x402,_0x44b4b1[_0x4b85cf(0x165)],_0x257ea7);continue;case'2':_0x44b4b1[_0x4b85cf(0x320)](_0x49f31d,_0xe685af,0xbd7*0x3+-0x6ad*-0x5+0x1*-0x44c6,_0x44b4b1[_0x4b85cf(0x165)],_0x257ea7);continue;case'3':_0x49f31d(_0xe685af,0x1*-0x164f+0x1591*0x1+-0x12*-0xd,'f32',_0x257ea7);continue;case'4':_0x49f31d(_0xe685af,0x25*-0x101+0x22ed+0x4d*0x8,'f32',_0x257ea7);continue;case'5':_0x49f31d(_0xe685af,0x132b*-0x1+0x197*-0x1+0x14ea,_0x44b4b1['lTNFA'],_0x257ea7);continue;}break;}}if(_0xdbfe89!==0x1*0x37c+0xb76+-0x33*0x4b)_0x49f31d(_0xe685af,0x61*-0x25+-0x47*-0x81+-0x1572,_0x44b4b1[_0x4b85cf(0x165)],_0xdbfe89);_0x44b4b1['Povsb'](_0x3c25ab,-0x18dd+-0x1*0xf7f+0x285d*0x1)&&(_0x49f31d(_0xe685af,-0x2*-0x213+-0x26*-0x1b+-0x48*0x1c,_0x4b85cf(0x54c),_0x3c25ab),_0x44b4b1['slIQG'](_0x49f31d,_0xe685af,-0x1997+-0x1467+0x2e4a,_0x44b4b1[_0x4b85cf(0x165)],_0x3c25ab));if(_0x3e3487['bhop'])_0x44b4b1['tJLFv'](_0x30cab1,_0xe685af,0x2413*0x1+0x3*0x7b2+-0x3a8d,_0x4b85cf(0x54c),-(0x119c+-0x959+-0x45c));}}catch(_0x5e5ad8){}try{for(var _0x282a67=0x2*0x94f+-0x14d1*-0x1+-0xf*0x2a1;_0x282a67<_0x12c2a3[_0x4b85cf(0x259)+'h'];_0x282a67++){var _0x4673eb=_0x536dfb(_0x12c2a3[_0x282a67],0x2*0x92b+-0x5*-0x769+-0x372b);if(!_0x4673eb)continue;_0x3e3487['damag'+_0x4b85cf(0xba)]&&(_0x30cab1(_0x4673eb,-0x2*0x1e5+-0xca3+0x10b9,_0x44b4b1[_0x4b85cf(0x5b0)],_0x473a71),_0x30cab1(_0x4673eb,0x17*0x89+-0x150*-0xf+0x2e1*-0xb,_0x4b85cf(0x54d),_0x473a71));_0x3e3487['noSpr'+_0x4b85cf(0x27d)]&&(_0x30cab1(_0x4673eb,0xa85*0x1+0x112d+-0x6*0x487,_0x44b4b1[_0x4b85cf(0x165)],-0xb4d+0x11a4+-0x657),_0x44b4b1['slIQG'](_0x30cab1,_0x4673eb,0x2205+-0x1518+0x5*-0x281,_0x44b4b1[_0x4b85cf(0x165)],0x1486+0x18b0+0x1*-0x2d35));if(_0x3e3487['infAm'+_0x4b85cf(0x619)])_0x44b4b1['FuyxH'](_0x30cab1,_0x4673eb,-0x3*0x883+0x110c+0x8d9,_0x44b4b1['oeFSs'],0x3*-0x617+0x1b11+0xb3*-0x7);_0x3e3487['rapid'+_0x4b85cf(0x5ae)]&&(_0x49f31d(_0x4673eb,0x6*-0x6b+0xd35+-0x17*0x71,_0x4b85cf(0x54c),-0x169*-0x1+-0x1*-0xd8d+0x5*-0x2fe+0.1),_0x30cab1(_0x4673eb,0x417+-0x1c9*0x7+-0x8*-0x119,_0x4b85cf(0x54c),-0x1a87*-0x1+0x1afb*-0x1+-0x3a*-0x2+0.1));}}catch(_0x1c1d6b){}}},-0x2*-0x5a2+0x2*0x6d3+0x1822*-0x1),_0x44b4b1['nKsTg'](setInterval,()=>{var _0x5f217a=_0x32e67c;_0x34ef73['gameL'+'oaded']=!!window['unity'+_0x5f217a(0x4ab)+_0x5f217a(0x5e0)];try{if(_0x44b4b1['EoeBo'](_0x44b4b1[_0x5f217a(0x213)],_0x44b4b1[_0x5f217a(0x213)]))_0x5d5bd0=new _0x3e1292(),_0x41d204[_0x5f217a(0x195)](_0x13c630,_0x48e3fb);else{var _0x114786=-0xad8+-0x9*-0x382+-0x14ba*0x1;for(var _0x59d84a in _0x3895ee){if(_0x3895ee[_0x59d84a]&&_0x3895ee[_0x59d84a][_0x5f217a(0x602)+'ed'])_0x114786++;}_0x34ef73[_0x5f217a(0x443)+'Ok']=_0x114786;}}catch(_0x57e89e){}},-0x2474+-0x876+-0x6*-0x823);var _0x25485a=new Set(),_0x1d0d95={0x1:[],0x3:[]},_0xead8ea=![];function _0xf4e9f2(_0x573682){var _0xba65bc=_0x32e67c;_0x25485a[_0xba65bc(0x22f)](_0x573682['code']);}function _0x2052fd(_0x4381fd){var _0x5c488b=_0x32e67c;_0x44b4b1['EoeBo'](_0x44b4b1['gkhLP'],'zfWDv')?_0x25485a['delet'+'e'](_0x4381fd[_0x5c488b(0x3bd)]):(_0x51796d[_0x5c488b(0x276)+_0x5c488b(0x619)]=_0xe04125,_0x44b4b1[_0x5c488b(0x19b)](_0x4eec0a));}function _0x4ba04f(_0x13f696){var _0x338818=_0x32e67c;if(_0x13f696['__sak'+_0x338818(0x16b)])return;_0x25485a[_0x338818(0x22f)](_0x338818(0x5a4)+_0x44b4b1[_0x338818(0x61c)](_0x13f696[_0x338818(0x612)+'n'],-0x24ef+-0x8a6+0x2d96));var _0x44e09e=_0x1d0d95[_0x13f696[_0x338818(0x612)+'n']+(0x1*0x252a+-0x1130+-0x13f9)];if(_0x44e09e){_0x44e09e[_0x338818(0x644)](performance['now']());if(_0x44e09e[_0x338818(0x259)+'h']>0x1*0x158f+-0x1b55+0x5ee)_0x44e09e[_0x338818(0x48c)]();}}function _0x6c3b74(_0x352051){var _0x266f02=_0x32e67c;if(!_0x352051[_0x266f02(0x325)+_0x266f02(0x16b)])_0x25485a[_0x266f02(0x636)+'e'](_0x44b4b1['Amnjt']('mouse',_0x352051['butto'+'n']+(0x2667+0x26ee+-0x4d54)));}function _0x525433(){var _0x14f80f=_0x32e67c;_0x44b4b1['Povsb'](_0x14f80f(0x36f),_0x14f80f(0x493))?_0x25485a['clear']():(_0x213de6['cross'+_0x14f80f(0x1cb)]=_0x3eb205,_0x53bfcf());}function _0x3e2bb8(){var _0x4fc423=_0x32e67c;if(_0xead8ea)return;_0xead8ea=!![],window[_0x4fc423(0x58e)+_0x4fc423(0x38a)+_0x4fc423(0x2d9)+'r']('keydo'+'wn',_0xf4e9f2,!![]),window['addEv'+'entLi'+'stene'+'r'](_0x4fc423(0x1dd),_0x2052fd,!![]),window[_0x4fc423(0x58e)+'entLi'+_0x4fc423(0x2d9)+'r'](_0x4fc423(0x5a4)+_0x4fc423(0x34d),_0x4ba04f,!![]),window[_0x4fc423(0x58e)+'entLi'+'stene'+'r'](_0x44b4b1[_0x4fc423(0x593)],_0x6c3b74,!![]),window['addEv'+_0x4fc423(0x38a)+_0x4fc423(0x2d9)+'r'](_0x44b4b1['oALks'],_0x525433);}function _0x31e7ff(_0x9bd5ad){var _0x4e6aaa=_0x32e67c,_0x1a1280={'rBzoZ':_0x4e6aaa(0x54c)};if(_0x44b4b1[_0x4e6aaa(0x220)]('KAtfD',_0x4e6aaa(0x4a6))){var _0x4583d9=_0x1d0d95[_0x9bd5ad]||[],_0x409192=performance['now']();while(_0x4583d9['lengt'+'h']&&_0x409192-_0x4583d9[0xfb*0x1f+0x2307+-0x35*0x13c]>0x2f6*0x1+0x26b+0xd*-0x1d)_0x4583d9['shift']();return _0x4583d9['lengt'+'h'];}else _0x150d9a(_0x2923bf,0x1d2*-0x3+-0x1981*-0x1+-0x13c3,_0x4e6aaa(0x54c),_0x59e69f),_0x561899(_0x18b70f,-0x5*-0x656+-0x53*0x5a+-0x234,_0x1a1280[_0x4e6aaa(0x16d)],_0x5708f9);}function _0x2897bd(_0x105c06){var _0x332861=_0x32e67c;if(document[_0x332861(0x167)]&&(document['ready'+_0x332861(0x488)]===_0x44b4b1[_0x332861(0x618)]||document['ready'+_0x332861(0x488)]===_0x44b4b1[_0x332861(0x322)]))_0x105c06();else document[_0x332861(0x58e)+_0x332861(0x38a)+'stene'+'r']('DOMCo'+_0x332861(0x34f)+_0x332861(0x522)+'d',_0x105c06,{'once':!![]});}_0x2897bd(()=>{var _0x59cd30=_0x32e67c,_0x12a870={'IHelR':function(_0x85dbd8,_0x6cd16a){var _0x321fc3=_0x29e6;return _0x44b4b1[_0x321fc3(0x5de)](_0x85dbd8,_0x6cd16a);},'BJnQl':function(_0x568276,_0x4aff83){return _0x568276*_0x4aff83;},'MUoIW':function(_0x30b76d,_0x43fdd2){return _0x30b76d+_0x43fdd2;},'ngGOh':function(_0x3d245a,_0x4e51da){return _0x3d245a/_0x4e51da;},'FumIi':function(_0x37a084,_0x40fc3b){return _0x37a084-_0x40fc3b;},'QUdTT':function(_0x51f607,_0x55a791){return _0x51f607+_0x55a791;},'tevMr':_0x44b4b1[_0x59cd30(0x327)],'OHGAo':_0x44b4b1[_0x59cd30(0x1e3)],'tNhlc':_0x59cd30(0x566)+'e','ytasK':function(_0x38d119,_0x40fbd6){return _0x44b4b1['nfnMv'](_0x38d119,_0x40fbd6);},'bpufr':function(_0x399e15,_0x3c2e4a){return _0x44b4b1['LCQaJ'](_0x399e15,_0x3c2e4a);},'iGxeD':function(_0x51ca17,_0x566fc1){return _0x44b4b1['gdUFO'](_0x51ca17,_0x566fc1);},'iWpJr':function(_0x16f610,_0x3fdb9f,_0x2441a7,_0x525492,_0x207ab9,_0x33160e,_0x17fdf3){return _0x16f610(_0x3fdb9f,_0x2441a7,_0x525492,_0x207ab9,_0x33160e,_0x17fdf3);},'cSaTN':function(_0x4a9ebd,_0x3148e7,_0x4417a4,_0x2b149a,_0x324870,_0x2eadf8,_0x5f2b29){var _0xdd55e8=_0x59cd30;return _0x44b4b1[_0xdd55e8(0x2e7)](_0x4a9ebd,_0x3148e7,_0x4417a4,_0x2b149a,_0x324870,_0x2eadf8,_0x5f2b29);},'vCKCJ':function(_0x3302e0,_0x246afb){return _0x3302e0+_0x246afb;},'VYefe':_0x59cd30(0x477),'PJzZw':function(_0x2062bd,_0x467a79){return _0x2062bd+_0x467a79;},'BOaXe':function(_0x22fe87,_0x562231){return _0x22fe87*_0x562231;},'uNclg':function(_0x2fc567,_0x875ce2,_0xc42f63,_0x1c2902,_0x3c39c1,_0x2212f1,_0x5a59c4,_0x1eba6b){return _0x2fc567(_0x875ce2,_0xc42f63,_0x1c2902,_0x3c39c1,_0x2212f1,_0x5a59c4,_0x1eba6b);},'xqyaG':_0x59cd30(0x53f),'qSJJx':'\x20CPS','FsgYR':_0x44b4b1[_0x59cd30(0x5e2)],'epVgd':function(_0x281d03,_0x228a8a){return _0x44b4b1['LpDxx'](_0x281d03,_0x228a8a);},'okPFu':function(_0x509588,_0x5bebf6){return _0x509588*_0x5bebf6;},'CXkax':_0x44b4b1[_0x59cd30(0x1ea)],'NZHzx':_0x59cd30(0x188),'sEGEG':_0x44b4b1['eezYS'],'oOfGW':_0x44b4b1['irLeY'],'teGfs':_0x59cd30(0x118),'nhVVk':function(_0x27b1d7,_0x571a05,_0x5ab349){var _0x14ace0=_0x59cd30;return _0x44b4b1[_0x14ace0(0x382)](_0x27b1d7,_0x571a05,_0x5ab349);},'NqcGf':_0x59cd30(0x250)+_0x59cd30(0x1c5)+'R\x20v1.'+'1','nlfPq':_0x59cd30(0x413)+'9d','FyOlJ':_0x44b4b1[_0x59cd30(0x3b5)],'oKhwc':_0x59cd30(0x2e3)+_0x59cd30(0x377)+_0x59cd30(0x4df)+'e…','NCNAL':'rgba('+_0x59cd30(0x33f)+_0x59cd30(0x469)+_0x59cd30(0x464)+')','XxGxK':function(_0x20cbca,_0x560661){var _0x191de2=_0x59cd30;return _0x44b4b1[_0x191de2(0x220)](_0x20cbca,_0x560661);},'mkhQn':function(_0x3cbfcd){return _0x3cbfcd();},'MTQoW':_0x44b4b1[_0x59cd30(0x45a)],'tsYcQ':function(_0x54caef,_0x469571){return _0x44b4b1['lOCza'](_0x54caef,_0x469571);},'dIMLY':'DqoHV','aspaZ':_0x59cd30(0xfa),'PdIWB':function(_0x1295b7,_0x6e3b3e){return _0x1295b7+_0x6e3b3e;},'zYsnG':_0x44b4b1[_0x59cd30(0x5cc)],'KCrDc':'sk-ra'+_0x59cd30(0x42a),'iDHiP':_0x44b4b1['jimJJ'],'Ggvae':function(_0x6e0c55,_0x296db8){return _0x6e0c55(_0x296db8);},'Scvlb':function(_0xe124d3,_0x577e59){return _0xe124d3+_0x577e59;},'GOqMH':_0x44b4b1[_0x59cd30(0x12a)],'rCTDO':_0x44b4b1[_0x59cd30(0x303)],'KxEoU':'sk-bt'+'n','KRlhi':_0x59cd30(0x612)+'n','dAUKI':_0x44b4b1['kcExZ'],'oHzAD':_0x44b4b1[_0x59cd30(0x62f)],'TjNyG':_0x44b4b1[_0x59cd30(0x64d)],'JmRbO':function(_0x562b32,_0x13756f,_0x37a798){return _0x562b32(_0x13756f,_0x37a798);},'CsWAd':_0x44b4b1['sBrrh'],'VNpzO':_0x44b4b1[_0x59cd30(0x5af)],'cfVjg':'JBCNo','CcWdC':function(_0x39eb81){return _0x44b4b1['arJqn'](_0x39eb81);},'XOgbe':_0x44b4b1[_0x59cd30(0x55d)],'EAyaW':function(_0xdcfee,_0x2bda2b,_0x1fd1ed){return _0x44b4b1['dAGvT'](_0xdcfee,_0x2bda2b,_0x1fd1ed);},'kJBqe':function(_0x1e8e54){return _0x1e8e54();},'jnxtt':_0x44b4b1[_0x59cd30(0x507)],'gUKGZ':function(_0x3cee3e,_0x43a871,_0x3fb436,_0x3a625d,_0x3e901b,_0x3ed09f){return _0x3cee3e(_0x43a871,_0x3fb436,_0x3a625d,_0x3e901b,_0x3ed09f);},'fbeQJ':_0x59cd30(0xe0)+'s\x20OHe'+'alth.'+'Initi'+'ateTa'+'keHea'+_0x59cd30(0xdc)+_0x59cd30(0x10a)+_0x59cd30(0x635)+'.Loca'+'lDie,'+_0x59cd30(0x317)+'othin'+'g\x20can'+_0x59cd30(0x286)+_0x59cd30(0x5ce)+_0x59cd30(0x189)+'ou.','JmzxH':_0x44b4b1['LlkOK'],'YDJUk':'Damag'+'e\x20[EX'+'P]','EtreI':function(_0x739f72,_0x4afe12){var _0x316913=_0x59cd30;return _0x44b4b1[_0x316913(0x1f3)](_0x739f72,_0x4afe12);},'XBFpj':function(_0x5cd2a5,_0x32801b,_0x4be2d5,_0x371f2){return _0x5cd2a5(_0x32801b,_0x4be2d5,_0x371f2);},'DvBzT':'Speed'+'\x20%','NZDNG':_0x44b4b1[_0x59cd30(0x5e6)],'eIjVK':_0x44b4b1['vdwsF'],'IsrGr':'visua'+'l','Qmugu':_0x59cd30(0x5a3)+'rokes','csWlm':'WASD\x20'+_0x59cd30(0x4e5)+_0x59cd30(0x2f8)+_0x59cd30(0x34c)+_0x59cd30(0x23a)+_0x59cd30(0x1c4)+'.','YFtYV':function(_0xd2f660,_0xe3b8f2,_0x306342){return _0xd2f660(_0xe3b8f2,_0x306342);},'kstcw':_0x59cd30(0x484)+_0x59cd30(0x1cb),'aCLUq':function(_0x59a057,_0x1a3585,_0x20c27c,_0x4b5c3a){return _0x44b4b1['qpauc'](_0x59a057,_0x1a3585,_0x20c27c,_0x4b5c3a);},'hTqSO':'Count'+'ers','hFKUY':function(_0x12bfc8,_0x49737c){return _0x12bfc8(_0x49737c);},'Jervw':function(_0x47c293,_0x18ce49){return _0x44b4b1['nfnMv'](_0x47c293,_0x18ce49);},'tNpML':_0x59cd30(0x172)+'\x20UWMK'+_0x59cd30(0x406)+'rely\x20'+_0x59cd30(0x5eb)+_0x59cd30(0x28e)+_0x59cd30(0x443)+'.\x20Use'+_0x59cd30(0x336)+'\x20if\x20m'+_0x59cd30(0x408)+'s\x20won'+'\x27t\x20st'+'art.','oOyUA':_0x44b4b1['KvUAh'],'rPLXL':_0x44b4b1[_0x59cd30(0x315)],'eAfIF':function(_0x9a9ab,_0xf02195){return _0x9a9ab(_0xf02195);},'Kelfq':_0x59cd30(0x431)+_0x59cd30(0x505)+_0x59cd30(0x219)+_0x59cd30(0x51c)+_0x59cd30(0x4b2)+_0x59cd30(0x30d)+'h)','JSZyY':function(_0xa98495,_0x2f151e,_0x540c59,_0x532396){return _0xa98495(_0x2f151e,_0x540c59,_0x532396);},'fTrRP':_0x44b4b1[_0x59cd30(0xb9)],'EWqtX':_0x59cd30(0x4ef)+_0x59cd30(0x258)+'/rapi'+_0x59cd30(0x51b)+_0x59cd30(0x3ce)+'raise'+_0x59cd30(0x432)+_0x59cd30(0x274)+_0x59cd30(0x4ec)+_0x59cd30(0x357)+_0x59cd30(0x4c6)+_0x59cd30(0x610),'zhqzH':function(_0x44aed4,_0x235b2c,_0x57139e,_0x4a52bf,_0x1a1211,_0x32e1a5){var _0x4c8cf8=_0x59cd30;return _0x44b4b1[_0x4c8cf8(0x1cd)](_0x44aed4,_0x235b2c,_0x57139e,_0x4a52bf,_0x1a1211,_0x32e1a5);},'ofrNo':_0x44b4b1['YQvkZ'],'rvfmM':function(_0x1f1bfa,_0x16e822,_0x1781f3){return _0x1f1bfa(_0x16e822,_0x1781f3);},'jHYIK':'Reset','haiur':_0x59cd30(0x4da)+'a\x20Kou'+_0x59cd30(0x14b),'tHjxy':function(_0x2ad204,_0x4abe79){var _0x1611bb=_0x59cd30;return _0x44b4b1[_0x1611bb(0x318)](_0x2ad204,_0x4abe79);},'DzWxD':function(_0xc122c7,_0x469f06){return _0xc122c7+_0x469f06;},'ohdbG':_0x59cd30(0x239)+'s','MyeTc':_0x59cd30(0x3c8)+'ks\x20ar'+'med\x20('+'all\x20o'+_0x59cd30(0x57e),'gYhXG':_0x44b4b1[_0x59cd30(0x3cd)],'sFhfX':_0x44b4b1['ETivX'],'kJdmF':_0x59cd30(0x343)+'de','camAL':_0x59cd30(0x375)+'in','QnlFg':_0x59cd30(0x43b)+'r','GGDfP':_0x44b4b1[_0x59cd30(0x3bf)],'uTYEq':_0x44b4b1['gJIwN'],'wHmjH':_0x44b4b1[_0x59cd30(0x54f)],'PNegy':'small','LOsyt':_0x59cd30(0x53b),'DoFoP':_0x44b4b1['rgcgM'],'ihCTF':_0x44b4b1['QTgsd'],'Pctpw':_0x59cd30(0x394)+_0x59cd30(0x40c)+'7|1|0','kbxWF':function(_0x5d4a06,_0x144596){return _0x5d4a06+_0x144596;},'tXrIQ':'mn-ta'+'b','WmrIB':function(_0x929cc7,_0x19e40f){var _0x17af60=_0x59cd30;return _0x44b4b1[_0x17af60(0xbd)](_0x929cc7,_0x19e40f);},'MflOR':_0x44b4b1[_0x59cd30(0x23d)],'AcTKm':function(_0x335442,_0x48ad18,_0x435163){var _0x2743d5=_0x59cd30;return _0x44b4b1[_0x2743d5(0xcf)](_0x335442,_0x48ad18,_0x435163);},'GIKuN':function(_0x686f9e){return _0x686f9e();},'jsszo':_0x59cd30(0x185)+_0x59cd30(0x434)+'-banr'+'s','jDmuL':function(_0x26713e,_0x2b5cd4){return _0x26713e<_0x2b5cd4;},'yxknG':function(_0xac0bdf,_0x5e72b8){return _0xac0bdf===_0x5e72b8;},'EZEBq':_0x44b4b1['aXTQa']};_0x3e3487['adblo'+'ck']&&setInterval(()=>{var _0x14b9b9=_0x59cd30,_0x2eaf40={'QHNSC':function(_0x6585d3,_0x31b2d7,_0x173613,_0x347b4c,_0x49407d){var _0x2df876=_0x29e6;return _0x44b4b1[_0x2df876(0x4ba)](_0x6585d3,_0x31b2d7,_0x173613,_0x347b4c,_0x49407d);}};try{for(var _0x185736 of[_0x44b4b1[_0x14b9b9(0xc5)],_0x14b9b9(0x2e4)+'io_72'+_0x14b9b9(0xb0)+_0x14b9b9(0x62e)+'t','kour-'+_0x14b9b9(0x3e5)+_0x14b9b9(0x43e)+_0x14b9b9(0x4f2)+'nt',_0x44b4b1[_0x14b9b9(0x544)]]){if(_0x14b9b9(0x3ff)!==_0x44b4b1[_0x14b9b9(0x631)]){var _0x559a8a=document['getEl'+_0x14b9b9(0x4f8)+_0x14b9b9(0x214)](_0x185736);if(_0x559a8a&&_0x185736==='fulls'+_0x14b9b9(0x434)+_0x14b9b9(0x542)+'s'){var _0x5999bd=_0x559a8a[_0x14b9b9(0x136)+_0x14b9b9(0x3a0)];for(var _0x53c99e=-0x6d3*-0x4+0x25ee+0x413a*-0x1;_0x53c99e<_0x5999bd['lengt'+'h'];_0x53c99e++){if(_0x5999bd[_0x53c99e]['id']&&_0x5999bd[_0x53c99e]['id'][_0x14b9b9(0x5bd)+'Of'](_0x14b9b9(0x2e4)+_0x14b9b9(0xd0))===-0x366+-0x13c9*0x1+-0x5*-0x4a3)_0x5999bd[_0x53c99e]['style']['displ'+'ay']=_0x14b9b9(0x2e1);}}else{if(_0x559a8a)_0x559a8a['style'][_0x14b9b9(0x49c)+'ay']=_0x44b4b1['aXTQa'];}}else _0x2eaf40[_0x14b9b9(0x627)](_0x2efbcd,_0x52475a,_0x4e4256,_0x54bb82,_0x14b9b9(0x159)+_0x14b9b9(0x2e6));}}catch(_0x160eda){}},0x2*0x1be+-0x2581+0x1*0x29d5);var _0xf351cd=document[_0x59cd30(0x249)+'eElem'+'ent']('canva'+'s');_0xf351cd[_0x59cd30(0x154)]['cssTe'+'xt']=_0x59cd30(0x14d)+_0x59cd30(0x520)+_0x59cd30(0x607)+_0x59cd30(0x5c0)+_0x59cd30(0x299)+_0x59cd30(0x208)+_0x59cd30(0x64a)+'heigh'+'t:100'+'vh;z-'+_0x59cd30(0x5bd)+':2147'+_0x59cd30(0x5d2)+_0x59cd30(0x5bc)+'nter-'+_0x59cd30(0xf3)+_0x59cd30(0x2d6)+'e';var _0x4d3d2c=_0xf351cd['getCo'+_0x59cd30(0x551)]('2d');function _0x481718(){var _0x4e5774=_0x59cd30;if(_0x12a870['IHelR'](_0x4e5774(0x5e4),_0x4e5774(0x5e4))){var _0x4c83f9=-0x1f8b+-0x4*-0x96a+-0x61d;for(var _0x34121b in _0x16f30a){if(_0x286b14[_0x34121b]&&_0x1a1fed[_0x34121b]['appli'+'ed'])_0x4c83f9++;}_0x1a119b[_0x4e5774(0x443)+'Ok']=_0x4c83f9;}else try{var _0x2c0c2a=document[_0x4e5774(0x185)+'creen'+_0x4e5774(0x1e1)+'nt'],_0x23d79c=_0x2c0c2a&&_0x2c0c2a['tagNa'+'me']!==_0x4e5774(0x2d8)+'S'?_0x2c0c2a:document[_0x4e5774(0x167)]||document['docum'+_0x4e5774(0xe1)+'ement'];if(_0xf351cd['paren'+_0x4e5774(0x46a)]!==_0x23d79c)_0x23d79c[_0x4e5774(0x44b)+_0x4e5774(0x419)+'d'](_0xf351cd);}catch(_0xd54dc3){try{document[_0x4e5774(0x167)][_0x4e5774(0x44b)+_0x4e5774(0x419)+'d'](_0xf351cd);}catch(_0x3a0e12){}}}var _0x5c56a4={'w':0x0,'h':0x0,'dpr':0x0};function _0x1f669f(){var _0x2d4d98=_0x59cd30,_0x1277a3=window[_0x2d4d98(0x2bf)+'ePixe'+_0x2d4d98(0x31e)+'o']||-0x12d4+-0x425*0x1+0x1*0x16fa,_0x77e70d=window['inner'+_0x2d4d98(0xc3)],_0x505b04=window[_0x2d4d98(0x2a9)+_0x2d4d98(0x324)+'t'];if(_0x77e70d===_0x5c56a4['w']&&_0x505b04===_0x5c56a4['h']&&_0x1277a3===_0x5c56a4['dpr'])return;_0x5c56a4['w']=_0x77e70d,_0x5c56a4['h']=_0x505b04,_0x5c56a4[_0x2d4d98(0x5d0)]=_0x1277a3,_0xf351cd[_0x2d4d98(0x5cf)]=Math[_0x2d4d98(0x5a0)](_0x12a870['BJnQl'](_0x77e70d,_0x1277a3)),_0xf351cd[_0x2d4d98(0x433)+'t']=Math[_0x2d4d98(0x5a0)](_0x505b04*_0x1277a3),_0x4d3d2c['setTr'+_0x2d4d98(0x45d)+'rm'](_0x1277a3,0x334+0x9b3+-0x44d*0x3,0x161*0x1a+-0x5fe+-0x4e*0x62,_0x1277a3,0x2*-0x527+-0x7*-0x203+-0x3c7,-0x4c6+0x25e3+-0x31*0xad);}var _0x1ac69e=0x763*-0x4+0x1*-0x1eca+0x2*0x1e2b,_0x24bf75=performance[_0x59cd30(0x2a3)](),_0x57f02b=0x856+0x1*0xfe9+-0x183f;function _0x23396f(_0x5d3db1){var _0x57706c=_0x59cd30,_0x3eda83=_0x12a870[_0x57706c(0x62d)](Number,_0x3e3487['ksSca'+'le'])||0x1b7b+0x1508+-0x3082,_0x10aa87=(-0xb3*-0x13+0x1632*-0x1+0x90b)*_0x3eda83,_0x238dd4=_0x12a870[_0x57706c(0x57f)](0x11a6+0x26df+-0x3881,_0x3eda83),_0x454b8d=_0x10aa87*(0x35*-0x7d+-0x91c+0x80*0x46)+_0x12a870[_0x57706c(0x57f)](_0x238dd4,-0xb4f+-0x2*0xb15+0x217b*0x1),_0x40f866=_0x10aa87*(-0x2*0x78d+0xd4c+-0x9b*-0x3)+_0x12a870['BJnQl'](_0x238dd4,-0x1*0x1662+-0x43f*0x1+0x1*0x1aa3),_0x2e7940=_0x3e3487[_0x57706c(0x1b6)],_0x570c5a=_0x12a870[_0x57706c(0x1fa)](_0x2e7940,'br')?_0x12a870['FumIi'](_0x5d3db1['right'],0x1c39+0x82*0x20+-0x2c69*0x1)-_0x454b8d:_0x12a870[_0x57706c(0x436)](_0x5d3db1[_0x57706c(0x12c)],0x1*-0xfc9+-0x1*0x2273+0x324c),_0x2c9df4=_0x2e7940==='ml'?_0x12a870[_0x57706c(0x23b)](_0x5d3db1[_0x57706c(0x118)],_0x5d3db1[_0x57706c(0x433)+'t']/(0x2*0x8d6+-0x1ec4+0x68d*0x2))-_0x40f866/(0x231c+-0x3e9+-0x1f31):_0x5d3db1[_0x57706c(0x54e)+'m']-_0x40f866-(_0x2e7940==='bl'?-0x18cc+0x1b7e+-0x252:0xe1a+0x218c+-0x2f10),_0x271a35=(_0x3f0c66,_0x1655ae,_0x4ed943,_0x251d8d,_0x10a68b,_0x5f0a0c,_0x459576)=>{var _0x28efd6=_0x57706c,_0x54cc7e=(_0x28efd6(0x1e9)+_0x28efd6(0x2fc)+_0x28efd6(0x14f)+_0x28efd6(0x596)+_0x28efd6(0x12f)+_0x28efd6(0x176)+_0x28efd6(0x1d4)+'4|5|1')['split']('|'),_0x47f313=0x9c3+-0x1766+0xda3;while(!![]){switch(_0x54cc7e[_0x47f313++]){case'0':_0x4d3d2c['begin'+_0x28efd6(0x302)]();continue;case'1':_0x4d3d2c['resto'+'re']();continue;case'2':_0x4d3d2c[_0x28efd6(0x1be)+'idth']=0x119a+0x1ff*-0x6+-0x59f;continue;case'3':_0x15986b&&(_0x4d3d2c[_0x28efd6(0x604)+_0x28efd6(0x297)+'r']=_0x1c1e11,_0x4d3d2c['shado'+_0x28efd6(0x2c3)]=0x9fd*-0x3+0x7*-0x139+0xc*0x337,_0x4d3d2c['fill'](),_0x4d3d2c[_0x28efd6(0x604)+'wBlur']=0x1a3f+0x6f*0x43+-0x1*0x374c);continue;case'4':_0x4d3d2c[_0x28efd6(0x3a1)+_0x28efd6(0x298)](_0x3f0c66,_0x12a870[_0x28efd6(0x436)](_0x4ed943,_0x12a870[_0x28efd6(0x1db)](_0x10a68b,-0x147e+0x8b*-0x10+0x1d30)),_0x12a870[_0x28efd6(0x115)](_0x251d8d+_0x12a870[_0x28efd6(0x1db)](_0x5f0a0c,-0x1*0x6bf+-0x5fd+-0xcbe*-0x1),_0x459576?_0x12a870[_0x28efd6(0x57f)](0x25b+-0x1f1e+0x1cc8,_0x3eda83):0x9bc+0x1*-0x565+0xb*-0x65));continue;case'5':_0x459576&&(_0x4d3d2c[_0x28efd6(0x30e)]=_0x12a870['QUdTT'](_0x28efd6(0xf6),Math[_0x28efd6(0x5a0)]((-0xe2d+0x520*0x2+0x27*0x1a)*_0x3eda83))+('px\x20ui'+_0x28efd6(0x200)+'-seri'+_0x28efd6(0x4d9)+_0x28efd6(0x2b8)+_0x28efd6(0x478)+_0x28efd6(0x125)+'if'),_0x4d3d2c[_0x28efd6(0x16f)+'tyle']=_0x15986b?_0x12a870['tevMr']:_0x28efd6(0x1b9)+'255,2'+_0x28efd6(0x34e)+'0,0.5'+'5)',_0x4d3d2c[_0x28efd6(0x3a1)+_0x28efd6(0x298)](_0x459576,_0x4ed943+_0x10a68b/(-0x1a48+-0x966+0x23b0),_0x12a870['MUoIW'](_0x12a870[_0x28efd6(0x436)](_0x251d8d,_0x12a870[_0x28efd6(0x1db)](_0x5f0a0c,0x8bf+0x98a+-0x1247)),_0x12a870['BJnQl'](0x3f5+0x1959+-0x3*0x9c2,_0x3eda83))));continue;case'6':_0x4d3d2c[_0x28efd6(0x1d9)]();continue;case'7':_0x4d3d2c[_0x28efd6(0x16f)+_0x28efd6(0x582)]=_0x15986b?_0x28efd6(0x4a0):_0x28efd6(0x1b9)+_0x28efd6(0x138)+_0x28efd6(0x34e)+'0,0.8'+')';continue;case'8':_0x4d3d2c[_0x28efd6(0x63a)+'lign']=_0x28efd6(0x3a8)+'r';continue;case'9':_0x4d3d2c[_0x28efd6(0x10e)]();continue;case'10':_0x4d3d2c[_0x28efd6(0x16f)+_0x28efd6(0x582)]=_0x15986b?_0x12a870[_0x28efd6(0x141)]:'rgba('+_0x28efd6(0x5be)+_0x28efd6(0xd3)+'7)';continue;case'11':if(_0x4d3d2c[_0x28efd6(0x5a0)+_0x28efd6(0x202)])_0x4d3d2c[_0x28efd6(0x5a0)+_0x28efd6(0x202)](_0x4ed943,_0x251d8d,_0x10a68b,_0x5f0a0c,(0xd0a+-0x1d5d*0x1+0x105a)*_0x3eda83);else _0x4d3d2c[_0x28efd6(0x29e)](_0x4ed943,_0x251d8d,_0x10a68b,_0x5f0a0c);continue;case'12':_0x4d3d2c[_0x28efd6(0x5e1)+'e']();continue;case'13':var _0x15986b=_0x25485a[_0x28efd6(0x1b1)](_0x1655ae);continue;case'14':_0x4d3d2c['textB'+_0x28efd6(0x11d)+'ne']=_0x12a870[_0x28efd6(0x1ca)];continue;case'15':_0x4d3d2c[_0x28efd6(0x30e)]=_0x28efd6(0x2f4)+Math['round']((-0x1*-0x194+0x23d*0x1+-0xc1*0x5)*_0x3eda83)+(_0x28efd6(0x17d)+_0x28efd6(0x200)+_0x28efd6(0x4c8)+'f,sys'+_0x28efd6(0x2b8)+'i,san'+_0x28efd6(0x125)+'if');continue;case'16':_0x4d3d2c[_0x28efd6(0x5e1)+'eStyl'+'e']=_0x15986b?_0x44c5ea:_0x28efd6(0x1b9)+_0x28efd6(0x33f)+_0x28efd6(0x3eb)+_0x28efd6(0x583)+'5)';continue;}break;}};_0x271a35('W',_0x57706c(0x4d5),_0x12a870['QUdTT'](_0x570c5a+_0x10aa87,_0x238dd4),_0x2c9df4,_0x10aa87,_0x10aa87),_0x12a870[_0x57706c(0x4bf)](_0x271a35,'A','KeyA',_0x570c5a,_0x12a870[_0x57706c(0x23b)](_0x2c9df4+_0x10aa87,_0x238dd4),_0x10aa87,_0x10aa87),_0x12a870['cSaTN'](_0x271a35,'S',_0x57706c(0x53e),_0x12a870['vCKCJ'](_0x12a870['MUoIW'](_0x570c5a,_0x10aa87),_0x238dd4),_0x2c9df4+_0x10aa87+_0x238dd4,_0x10aa87,_0x10aa87),_0x271a35('D',_0x12a870['VYefe'],_0x570c5a+_0x12a870[_0x57706c(0x57f)](_0x12a870['PJzZw'](_0x10aa87,_0x238dd4),-0x21d+-0x3bf*-0x1+-0x1a0),_0x12a870['iGxeD'](_0x2c9df4+_0x10aa87,_0x238dd4),_0x10aa87,_0x10aa87);var _0x444efc=_0x12a870[_0x57706c(0x1db)](_0x454b8d-_0x238dd4,-0x14f6*-0x1+0x2a5+0x1*-0x1799),_0x3a7f3e=_0x2c9df4+_0x12a870[_0x57706c(0x364)](_0x10aa87+_0x238dd4,0x1092*0x2+-0x459+-0x1cc9*0x1);_0x271a35(_0x57706c(0x50f),_0x57706c(0x5a4)+'1',_0x570c5a,_0x3a7f3e,_0x444efc,_0x10aa87,_0x3e3487['ksCps']?_0x31e7ff(0x2543*0x1+0x23cc+0x81e*-0x9)+'\x20CPS':''),_0x12a870[_0x57706c(0x1af)](_0x271a35,_0x12a870[_0x57706c(0x2a0)],'mouse'+'3',_0x12a870[_0x57706c(0x149)](_0x570c5a,_0x444efc)+_0x238dd4,_0x3a7f3e,_0x444efc,_0x10aa87,_0x3e3487['ksCps']?_0x12a870['ytasK'](_0x31e7ff,0xebe+-0x12a*-0x7+-0x16e1)+_0x12a870[_0x57706c(0x3ed)]:''),_0x271a35('',_0x12a870[_0x57706c(0xcb)],_0x570c5a,_0x12a870[_0x57706c(0x3d1)](_0x3a7f3e+_0x10aa87,_0x238dd4),_0x454b8d,_0x12a870[_0x57706c(0x61e)](_0x10aa87,-0x17b*-0x16+0x15f0+-0x3682+0.45));}function _0x36a9ea(_0x40815a){var _0x559bd6=_0x59cd30,_0x387ef0=_0x40815a[_0x559bd6(0x5cf)]/(0x2*0x1202+-0x73b*-0x1+-0x2b3d),_0x2a6650=_0x40815a['heigh'+'t']/(-0x2*0x8ef+0x3d1*0x2+0x45*0x26),_0x742fd8=_0x44b4b1['nfnMv'](Number,_0x3e3487[_0x559bd6(0xbb)+'e'])||0x23ce+-0x1*0x33b+0x1*-0x2092,_0x588dfe=/^#[0-9a-f]{6}$/i[_0x559bd6(0x32e)](_0x3e3487['chCol'+'or'])?_0x3e3487['chCol'+'or']:_0x559bd6(0x413)+'9d';_0x4d3d2c['save'](),_0x4d3d2c['strok'+_0x559bd6(0x591)+'e']=_0x588dfe,_0x4d3d2c['fillS'+'tyle']=_0x588dfe,_0x4d3d2c['lineW'+_0x559bd6(0x52c)]=Math[_0x559bd6(0x3c5)](0x5de+-0x595*0x5+0x160c+0.5,_0x44b4b1[_0x559bd6(0x266)](0x1*-0xb03+-0x3bc*-0x2+-0x1*-0x38d,_0x742fd8)),_0x4d3d2c[_0x559bd6(0x604)+_0x559bd6(0x297)+'r']=_0x588dfe,_0x4d3d2c['shado'+_0x559bd6(0x2c3)]=-0x742*0x1+-0x2*-0x7e1+-0x87a;var _0x54feb3=(0x1*-0x10a5+0x2589+0x2*-0xa6f)*_0x742fd8,_0x333c76=_0x44b4b1[_0x559bd6(0x1cc)](0x19f7+-0x1211+-0x2*0x3ef,_0x742fd8);_0x4d3d2c[_0x559bd6(0x530)+'Path'](),_0x4d3d2c[_0x559bd6(0x31d)+'o'](_0x44b4b1[_0x559bd6(0x379)](_0x44b4b1[_0x559bd6(0x3b7)](_0x387ef0,_0x54feb3),_0x333c76),_0x2a6650),_0x4d3d2c['lineT'+'o'](_0x387ef0-_0x54feb3,_0x2a6650),_0x4d3d2c['moveT'+'o'](_0x387ef0+_0x54feb3,_0x2a6650),_0x4d3d2c[_0x559bd6(0x360)+'o'](_0x387ef0+_0x54feb3+_0x333c76,_0x2a6650),_0x4d3d2c[_0x559bd6(0x31d)+'o'](_0x387ef0,_0x2a6650-_0x54feb3-_0x333c76),_0x4d3d2c[_0x559bd6(0x360)+'o'](_0x387ef0,_0x2a6650-_0x54feb3),_0x4d3d2c[_0x559bd6(0x31d)+'o'](_0x387ef0,_0x44b4b1['CTzXd'](_0x2a6650,_0x54feb3)),_0x4d3d2c[_0x559bd6(0x360)+'o'](_0x387ef0,_0x44b4b1[_0x559bd6(0x487)](_0x44b4b1['CTzXd'](_0x2a6650,_0x54feb3),_0x333c76)),_0x4d3d2c[_0x559bd6(0x5e1)+'e'](),_0x4d3d2c['begin'+'Path'](),_0x4d3d2c[_0x559bd6(0x1ac)](_0x387ef0,_0x2a6650,_0x44b4b1[_0x559bd6(0x5fb)](0x1b79+0x13*0xf1+0x2d5b*-0x1+0.6000000000000001,_0x742fd8),-0x1a4+0x23a5+-0x2201*0x1,Math['PI']*(-0x1f00+0x748+0x17ba)),_0x4d3d2c['fill'](),_0x4d3d2c['resto'+'re']();}function _0x182ce2(_0x2f93d8){var _0x300848=_0x59cd30,_0xcc7a19={'MAHjT':function(_0x51dc4d){return _0x51dc4d();},'Pnjit':'Sakur'+'a\x20Kou'+_0x300848(0x14b),'yWvwx':_0x12a870[_0x300848(0x31b)],'oEXfH':function(_0x13b81a,_0x163dcb){var _0x5dd8a1=_0x300848;return _0x12a870[_0x5dd8a1(0x1fa)](_0x13b81a,_0x163dcb);},'OnHaL':_0x12a870[_0x300848(0x1c9)],'Gclwj':_0x12a870[_0x300848(0xef)],'buNNp':'rgba('+'255,2'+'35,24'+'0,0.7'+'5)'};_0x4d3d2c[_0x300848(0x1d9)](),_0x4d3d2c['font']=_0x12a870['oOfGW'],_0x4d3d2c[_0x300848(0x63a)+_0x300848(0x429)]=_0x300848(0x12c),_0x4d3d2c['textB'+_0x300848(0x11d)+'ne']=_0x12a870[_0x300848(0x20b)];var _0x320558=0x296*0x4+-0x140e+0x9e2,_0x3d3d4e=0xf78+0x2349+-0x3*0x10e7,_0xbebcd3=(_0x32cce5,_0x239004)=>{var _0x3dbda7=_0x300848;if(_0xcc7a19['oEXfH'](_0xcc7a19[_0x3dbda7(0x28f)],_0xcc7a19['Gclwj'])){_0x239cac['cat']=_0x515f64,_0xcc7a19[_0x3dbda7(0x37b)](_0x4859d0);var _0x1d2866=_0x3b1af9[_0x3dbda7(0xf0)](_0x521183=>_0x521183['id']===_0x1e868d)||_0x2f16b3[0x6ae+0x15*0x9c+-0x137a];_0x22b241[_0x3dbda7(0x295)+'onten'+'t']=_0xcc7a19['Pnjit']+_0x1d2866['label'];for(var [_0x5bfbf2,_0x1a0e0d]of _0x12ad49)_0x1a0e0d['class'+_0x3dbda7(0x648)][_0x3dbda7(0x4a7)+'e'](_0xcc7a19[_0x3dbda7(0x2b0)],_0x5bfbf2===_0x23ec2f);_0xf236f1[_0x3dbda7(0x5ea)+_0x3dbda7(0x445)+_0x3dbda7(0x17f)](..._0x5b694e(_0x543c41));}else _0x4d3d2c['fillS'+'tyle']=_0x239004||_0xcc7a19[_0x3dbda7(0x10f)],_0x4d3d2c[_0x3dbda7(0x3a1)+_0x3dbda7(0x298)](_0x32cce5,_0x3d3d4e,_0x320558),_0x320558+=-0x2b4*-0x1+0x2531+-0x9*0x46d;};_0x12a870['nhVVk'](_0xbebcd3,_0x12a870[_0x300848(0x334)],_0x12a870[_0x300848(0x5c1)]);if(_0x3e3487['fps'])_0xbebcd3(_0x57f02b+_0x12a870[_0x300848(0x42b)]);if(!_0x34ef73['gameL'+_0x300848(0x587)])_0xbebcd3(_0x12a870[_0x300848(0x134)],_0x12a870[_0x300848(0x3b0)]);_0x4d3d2c[_0x300848(0xd8)+'re']();}function _0x18e644(){var _0x1670d9=_0x59cd30,_0x37f55d={'qBuuo':function(_0x123a4e){return _0x12a870['mkhQn'](_0x123a4e);}};if(_0x12a870[_0x1670d9(0x61a)]===_0x1670d9(0x2aa)){var _0x5251a6=_0x2beb40[_0x1670d9(0x2bf)+_0x1670d9(0x3cf)+'lRati'+'o']||0x17*0x1+0xf7f*-0x1+0x1*0xf69,_0x50d560=_0xe78b3f[_0x1670d9(0x2a9)+_0x1670d9(0xc3)],_0x18120b=_0x2fb3e2[_0x1670d9(0x2a9)+_0x1670d9(0x324)+'t'];if(_0x50d560===_0x3d9693['w']&&_0x18120b===_0x5aee32['h']&&_0x12a870[_0x1670d9(0x3ad)](_0x5251a6,_0x345535[_0x1670d9(0x5d0)]))return;_0x3be726['w']=_0x50d560,_0x2c9ab3['h']=_0x18120b,_0x4eaf5b['dpr']=_0x5251a6,_0x2d04b6[_0x1670d9(0x5cf)]=_0x39e6ab['round'](_0x50d560*_0x5251a6),_0x1b3b4d[_0x1670d9(0x433)+'t']=_0x12dd70[_0x1670d9(0x5a0)](_0x18120b*_0x5251a6),_0x27ba5c['setTr'+_0x1670d9(0x45d)+'rm'](_0x5251a6,-0x2*-0x4b7+0x1bf4+-0x2562,-0x166d+0x5*0x6b2+-0xb0d,_0x5251a6,-0x188*0x1+-0x2403*0x1+0x258b,0xf95+-0x33f*0x7+0x724);}else{requestAnimationFrame(_0x18e644),_0x1ac69e++;var _0x28e071=performance[_0x1670d9(0x2a3)]();_0x28e071-_0x24bf75>=-0x4*-0x4bd+-0xbff+-0x501&&(_0x12a870['tsYcQ'](_0x1670d9(0x32d),_0x12a870[_0x1670d9(0xff)])?(_0x57f02b=Math[_0x1670d9(0x5a0)](_0x1ac69e*(0x511+-0x5*0x451+0x146c)/(_0x28e071-_0x24bf75)),_0x1ac69e=0xb9b+-0x188c+0xcf1,_0x24bf75=_0x28e071):(_0x1e5533['adblo'+'ck']=_0x253bc2,_0x37f55d[_0x1670d9(0x3f4)](_0x554bb5)));_0x1f669f(),_0x481718(),_0x4d3d2c[_0x1670d9(0x19e)+_0x1670d9(0x202)](0x1*-0x154b+-0xa*-0x18d+0x5c9,-0x13af+0x1942+-0x593*0x1,_0x5c56a4['w'],_0x5c56a4['h']);var _0x30f779={'left':0x0,'top':0x0,'right':_0x5c56a4['w'],'bottom':_0x5c56a4['h'],'width':_0x5c56a4['w'],'height':_0x5c56a4['h']};if(_0x3e3487['cross'+_0x1670d9(0x1cb)])_0x36a9ea(_0x30f779);if(_0x3e3487[_0x1670d9(0x546)+_0x1670d9(0x517)])_0x23396f(_0x30f779);_0x182ce2(_0x30f779);}}var _0x3995ad=document[_0x59cd30(0x249)+'eElem'+'ent'](_0x44b4b1['hIiVN']);_0x3995ad['id']=_0x59cd30(0x3cc)+_0x59cd30(0x36c),_0x3995ad['style']['cssTe'+'xt']=_0x44b4b1['ilclx'];var _0x638f31=_0x3995ad[_0x59cd30(0x174)+'hShad'+'ow']({'mode':_0x44b4b1[_0x59cd30(0x1ee)]});(document['body']||document['docum'+_0x59cd30(0xe1)+'ement'])[_0x59cd30(0x44b)+_0x59cd30(0x419)+'d'](_0x3995ad);var _0x35ee82=![],_0x3b0d4b={};try{_0x3b0d4b=JSON[_0x59cd30(0x58c)](localStorage[_0x59cd30(0x272)+'em'](_0x59cd30(0x3cc)+_0x59cd30(0x512)+_0x59cd30(0x1c2)+'v1')||'{}');}catch(_0x124dca){}function _0xb92b9c(){var _0x128419=_0x59cd30;if(_0x44b4b1[_0x128419(0x15a)]('OrFzt',_0x128419(0x261)))try{localStorage['setIt'+'em']('sakur'+'a.kou'+'r.ui.'+'v1',JSON[_0x128419(0x2a6)+'gify'](_0x3b0d4b));}catch(_0x5c245b){}else _0x573231[_0x128419(0x215)](_0x128419(0x51a)+'ra-ko'+_0x128419(0x557)+_0x128419(0x370)+_0x128419(0x2fe)+_0x128419(0x2c0)+':',_0x28e1ce&&_0x126a6a['messa'+'ge']);}function _0x1cf682(_0x38f70c,_0x39972a){var _0x5dea6f=_0x59cd30,_0xd470e9={'ukinY':_0x44b4b1['hkBZx'],'VhUjF':function(_0xb8ed4,_0x44baf5,_0x3e8263,_0x28119e,_0x3813ff){return _0xb8ed4(_0x44baf5,_0x3e8263,_0x28119e,_0x3813ff);},'btFJa':_0x5dea6f(0x54c),'DsgYz':function(_0x1f5bb3,_0x1cdd36){return _0x1f5bb3!==_0x1cdd36;}},_0x38b546=document['creat'+'eElem'+_0x5dea6f(0x3d3)]('butto'+'n');return _0x38b546['type']=_0x5dea6f(0x612)+'n',_0x38b546['class'+_0x5dea6f(0x28c)]='sk-sw'+_0x5dea6f(0x13f),_0x38b546[_0x5dea6f(0x2e5)+_0x5dea6f(0x575)+'te'](_0x5dea6f(0x27a),_0x5dea6f(0x230)+'h'),_0x38b546['setAt'+'tribu'+'te'](_0x5dea6f(0xc2)+_0x5dea6f(0x1a0)+'ed',String(!!_0x38f70c)),_0x38b546[_0x5dea6f(0x1f7)+'ck']=_0x5434e9=>{var _0x1a66d2=_0x5dea6f;if(_0x1a66d2(0xbc)!=='pyNKw'){var _0x3548a9=_0xd470e9[_0x1a66d2(0x273)]['split']('|'),_0x110e6d=-0x1*-0x32f+0x1ae+-0x4dd;while(!![]){switch(_0x3548a9[_0x110e6d++]){case'0':_0x1e105f(_0x516f01,0x16bb+0x81*-0x1a+-0x979,_0x1a66d2(0x54c),_0x4bcb7f);continue;case'1':_0xd470e9[_0x1a66d2(0x390)](_0xfb9a99,_0xc63a7e,0xf2b+0x4c*-0x57+0x2f*0x3b,_0x1a66d2(0x54c),_0x5ce9e5);continue;case'2':_0xd470e9[_0x1a66d2(0x390)](_0x176849,_0x529895,0xbb+0x550+-0x5eb,_0xd470e9['btFJa'],_0x1d0930);continue;case'3':_0x147b8b(_0x3ba312,-0x7*-0x95+-0xb6d+0x1*0x78e,'f32',_0x20cefd);continue;case'4':_0xd470e9['VhUjF'](_0x6d8fc2,_0xa5cdac,0xa6*-0x1d+0xbbb+0x3*0x265,'f32',_0x40b850);continue;case'5':_0xd470e9[_0x1a66d2(0x390)](_0x538ed4,_0x46d24a,-0x6a1*-0x1+-0x145c+0xdeb,_0xd470e9[_0x1a66d2(0x354)],_0x44dc86);continue;}break;}}else{_0x5434e9['stopP'+'ropag'+'ation']();var _0x499217=_0xd470e9[_0x1a66d2(0x552)](_0x38b546[_0x1a66d2(0x550)+_0x1a66d2(0x575)+'te'](_0x1a66d2(0xc2)+_0x1a66d2(0x1a0)+'ed'),_0x1a66d2(0x2b1));_0x38b546[_0x1a66d2(0x2e5)+'tribu'+'te']('aria-'+_0x1a66d2(0x1a0)+'ed',String(_0x499217)),_0x39972a(_0x499217);}},_0x38b546;}function _0xca2c89(_0x3e28c8,_0x1e07d1,_0x5231b5,_0x3bed9b,_0x11eb0b){var _0x4ece88=_0x59cd30,_0x2bf368={'RecVk':function(_0x2a2652,_0x3fffeb){return _0x2a2652(_0x3fffeb);}},_0x3853c6=document['creat'+'eElem'+_0x4ece88(0x3d3)](_0x12a870['zYsnG']);_0x3853c6[_0x4ece88(0x3f8)+'Name']=_0x12a870['KCrDc'];var _0xb2a78=document['creat'+_0x4ece88(0x2fb)+'ent'](_0x4ece88(0x2bd));_0xb2a78['type']=_0x12a870[_0x4ece88(0x36b)],_0xb2a78[_0x4ece88(0x3f8)+_0x4ece88(0x28c)]='sk-sl'+'ider',_0xb2a78['min']=_0x1e07d1,_0xb2a78[_0x4ece88(0x3c5)]=_0x5231b5,_0xb2a78['step']=_0x3bed9b,_0xb2a78[_0x4ece88(0x4cf)]=_0x3e28c8;var _0x3e222b=document['creat'+_0x4ece88(0x2fb)+'ent'](_0x4ece88(0x1bf));_0x3e222b[_0x4ece88(0x3f8)+_0x4ece88(0x28c)]=_0x4ece88(0x106)+'l',_0x3e222b[_0x4ece88(0x295)+'onten'+'t']=_0x12a870[_0x4ece88(0x3b1)](String,_0x3e28c8);var _0x57b098=()=>{var _0x5459f3=_0x4ece88;_0x3e222b[_0x5459f3(0x295)+'onten'+'t']=_0x12a870['ytasK'](String,_0xb2a78['value']),_0x3853c6['style'][_0x5459f3(0xaf)+_0x5459f3(0xde)+'y'](_0x12a870[_0x5459f3(0x623)],_0x12a870['PdIWB']((_0xb2a78['value']-_0x1e07d1)/(_0x5231b5-_0x1e07d1)*(-0x2*-0xbab+-0x53*0x2+-0x164c),'%'));};return _0xb2a78[_0x4ece88(0x22d)+'ut']=()=>{var _0x2c7466=_0x4ece88;_0x57b098(),_0x2bf368['RecVk'](_0x11eb0b,Number(_0xb2a78[_0x2c7466(0x4cf)]));},_0x57b098(),_0x3853c6['appen'+'d'](_0xb2a78,_0x3e222b),_0x3853c6;}function _0x428bb6(_0x1fb7aa,_0x23ef85){var _0x238ad6=_0x59cd30,_0x576c71={'WExmG':function(_0x43aafb,_0x581ebf){var _0x4a8dda=_0x29e6;return _0x12a870[_0x4a8dda(0xee)](_0x43aafb,_0x581ebf);},'EtKnE':'sk-no'+'te','DjeyE':_0x238ad6(0x1bc)};if(_0x12a870[_0x238ad6(0x1fa)](_0x12a870['GOqMH'],_0x238ad6(0x329))){var _0x486a25=('4|0|3'+_0x238ad6(0x17b)+'5')['split']('|'),_0x179bb6=0x6a3+0x185e*0x1+-0x1f01;while(!![]){switch(_0x486a25[_0x179bb6++]){case'0':_0x26c932[_0x238ad6(0xad)]=_0x238ad6(0x4bc);continue;case'1':_0x26c932['oninp'+'ut']=()=>_0x23ef85(_0x26c932[_0x238ad6(0x4cf)]);continue;case'2':_0x26c932['value']=/^#[0-9a-f]{6}$/i[_0x238ad6(0x32e)](_0x1fb7aa)?_0x1fb7aa:_0x12a870['nlfPq'];continue;case'3':_0x26c932[_0x238ad6(0x3f8)+'Name']=_0x12a870[_0x238ad6(0x183)];continue;case'4':var _0x26c932=document['creat'+'eElem'+'ent'](_0x238ad6(0x2bd));continue;case'5':return _0x26c932;}break;}}else{var _0x144a57=_0x372ce7[_0x238ad6(0x249)+_0x238ad6(0x2fb)+_0x238ad6(0x3d3)]('div');return _0x144a57[_0x238ad6(0x3f8)+_0x238ad6(0x28c)]=_0x576c71['WExmG'](_0x576c71[_0x238ad6(0x3e9)],_0x95c719?_0x576c71[_0x238ad6(0x21a)]:''),_0x144a57[_0x238ad6(0x295)+'onten'+'t']=_0x1c049d,_0x144a57;}}function _0x3d0adf(_0x2a29b9,_0x576da6,_0x2f90e8){var _0x8fd30a=_0x59cd30,_0x15804f=document[_0x8fd30a(0x249)+_0x8fd30a(0x2fb)+_0x8fd30a(0x3d3)]('selec'+'t');_0x15804f['class'+_0x8fd30a(0x28c)]='sk-fi'+_0x8fd30a(0x132);for(var [_0x56b485,_0x33bfa3]of _0x576da6){var _0x48b887=document[_0x8fd30a(0x249)+'eElem'+_0x8fd30a(0x3d3)](_0x44b4b1[_0x8fd30a(0x526)]);_0x48b887[_0x8fd30a(0x4cf)]=_0x56b485,_0x48b887[_0x8fd30a(0x295)+_0x8fd30a(0x38f)+'t']=_0x33bfa3,_0x15804f[_0x8fd30a(0x44b)+_0x8fd30a(0x419)+'d'](_0x48b887);}return _0x15804f[_0x8fd30a(0x4cf)]=_0x2a29b9,_0x15804f[_0x8fd30a(0x460)+_0x8fd30a(0x42a)]=()=>_0x2f90e8(_0x15804f[_0x8fd30a(0x4cf)]),_0x15804f;}function _0x179b3a(_0x44fd4f,_0x51f1b8){var _0x3ebef5=_0x59cd30,_0x480818=('5|4|0'+'|1|2|'+'3')[_0x3ebef5(0x3ef)]('|'),_0xaca5f8=-0xd*-0x4d+-0x1*-0x185+-0x56e*0x1;while(!![]){switch(_0x480818[_0xaca5f8++]){case'0':_0x1fd86e['class'+_0x3ebef5(0x28c)]=_0x12a870[_0x3ebef5(0x194)];continue;case'1':_0x1fd86e[_0x3ebef5(0x295)+'onten'+'t']=_0x44fd4f;continue;case'2':_0x1fd86e['oncli'+'ck']=_0x496060=>{var _0x50e7c3=_0x3ebef5;_0x496060['stopP'+_0x50e7c3(0x525)+'ation'](),_0x51f1b8();};continue;case'3':return _0x1fd86e;case'4':_0x1fd86e['type']=_0x3ebef5(0x612)+'n';continue;case'5':var _0x1fd86e=document[_0x3ebef5(0x249)+_0x3ebef5(0x2fb)+_0x3ebef5(0x3d3)](_0x12a870['KRlhi']);continue;}break;}}function _0x45c9e6(_0x5af380,_0x57f80f,_0x3af836){var _0x4cbed6=_0x59cd30,_0x4e47ac=(_0x4cbed6(0x25a)+'|7|4|'+_0x4cbed6(0x358))[_0x4cbed6(0x3ef)]('|'),_0x3051ba=-0x2b3*-0xe+-0x2*0xb8d+-0xeb0;while(!![]){switch(_0x4e47ac[_0x3051ba++]){case'0':if(_0x57f80f){var _0xd27ad0=document[_0x4cbed6(0x249)+_0x4cbed6(0x2fb)+'ent'](_0x44b4b1[_0x4cbed6(0x515)]);_0xd27ad0['class'+_0x4cbed6(0x28c)]='sk-hi'+'nt',_0xd27ad0['textC'+'onten'+'t']=_0x57f80f,_0x929f93['appen'+_0x4cbed6(0x419)+'d'](_0xd27ad0);}continue;case'1':var _0x35baa3=document[_0x4cbed6(0x249)+_0x4cbed6(0x2fb)+'ent'](_0x4cbed6(0x244));continue;case'2':_0x35baa3[_0x4cbed6(0x44b)+'d'](_0x929f93,_0x3af836);continue;case'3':var _0x929f93=document[_0x4cbed6(0x249)+_0x4cbed6(0x2fb)+_0x4cbed6(0x3d3)](_0x4cbed6(0x1bf));continue;case'4':_0x929f93[_0x4cbed6(0x295)+_0x4cbed6(0x38f)+'t']=_0x5af380;continue;case'5':_0x35baa3['class'+'Name']=_0x4cbed6(0xd4)+'l';continue;case'6':return _0x35baa3;case'7':_0x929f93[_0x4cbed6(0x3f8)+_0x4cbed6(0x28c)]='sk-la'+_0x4cbed6(0x32f);continue;}break;}}function _0xda0779(_0x1f9819,_0x59f8d0){var _0x43a6c4=_0x59cd30,_0x5785a5=document['creat'+'eElem'+'ent']('div');return _0x5785a5[_0x43a6c4(0x3f8)+_0x43a6c4(0x28c)]=_0x12a870[_0x43a6c4(0x1ce)]+(_0x59f8d0?_0x43a6c4(0x1bc):''),_0x5785a5['textC'+_0x43a6c4(0x38f)+'t']=_0x1f9819,_0x5785a5;}function _0x4265b1(_0x15771a,_0x4a2202,_0x503443,_0x2ed7c0,_0x1c51b7){var _0xeea1c2=_0x59cd30,_0xef1f42=document['creat'+'eElem'+_0xeea1c2(0x3d3)](_0x12a870[_0xeea1c2(0x5bb)]);_0xef1f42['class'+_0xeea1c2(0x28c)]=_0xeea1c2(0x473)+'rd'+(_0x503443?_0xeea1c2(0x534):'');var _0x5a6b5e=document['creat'+'eElem'+'ent']('div');_0x5a6b5e[_0xeea1c2(0x3f8)+'Name']=_0xeea1c2(0x473)+'rd-he'+'ad';var _0x374451=document['creat'+'eElem'+_0xeea1c2(0x3d3)](_0xeea1c2(0x244));_0x374451[_0xeea1c2(0x3f8)+'Name']='sk-ca'+_0xeea1c2(0x540)+'tle';var _0x1dedbf=document[_0xeea1c2(0x249)+_0xeea1c2(0x2fb)+'ent'](_0x12a870[_0xeea1c2(0x17e)]);_0x1dedbf['textC'+'onten'+'t']=_0x15771a,_0x374451[_0xeea1c2(0x44b)+'dChil'+'d'](_0x1dedbf);if(_0x2ed7c0){var _0x55d19d=_0x12a870[_0xeea1c2(0x5ef)](_0x1cf682,_0x503443,_0x30a7a6=>{var _0x5d6f3d=_0xeea1c2,_0x45aadd={'BpXHx':function(_0x501fc7,_0x4876ed){return _0x501fc7||_0x4876ed;}};_0x12a870[_0x5d6f3d(0x19c)]!=='lOAvm'?(_0x1d57ec[_0x5d6f3d(0x16f)+'tyle']=_0x45aadd['BpXHx'](_0x3d76f1,'rgba('+_0x5d6f3d(0x138)+'35,24'+_0x5d6f3d(0xce)+'5)'),_0x1a2a91[_0x5d6f3d(0x3a1)+'ext'](_0x122536,_0x5a810a,_0x75bcc8),_0x460ea5+=0x2257*0x1+0xc58+-0x2e9f):(_0xef1f42[_0x5d6f3d(0x3f8)+_0x5d6f3d(0x648)][_0x5d6f3d(0x4a7)+'e']('on',_0x30a7a6),_0x2ed7c0(_0x30a7a6));});_0x5a6b5e['appen'+'d'](_0x374451,_0x55d19d);}else _0x5a6b5e['appen'+'dChil'+'d'](_0x374451);_0xef1f42[_0xeea1c2(0x44b)+_0xeea1c2(0x419)+'d'](_0x5a6b5e);if(_0x1c51b7&&_0x1c51b7[_0xeea1c2(0x259)+'h']){var _0x37a4da=('6|0|2'+_0xeea1c2(0x4f5)+_0xeea1c2(0x37d))[_0xeea1c2(0x3ef)]('|'),_0x5bc48d=-0x1b48*0x1+0xe90+0xcb8;while(!![]){switch(_0x37a4da[_0x5bc48d++]){case'0':_0x5c3153['class'+'Name']=_0x12a870[_0xeea1c2(0x25c)];continue;case'1':_0x2551a1['textC'+'onten'+'t']=_0x4a2202;continue;case'2':var _0x2551a1=document[_0xeea1c2(0x249)+'eElem'+_0xeea1c2(0x3d3)](_0x12a870[_0xeea1c2(0x5bb)]);continue;case'3':_0x5c3153['appen'+'dChil'+'d'](_0x2551a1);continue;case'4':_0xef1f42[_0xeea1c2(0x44b)+'dChil'+'d'](_0x5c3153);continue;case'5':_0x2551a1['class'+'Name']='sk-md'+_0xeea1c2(0x400);continue;case'6':var _0x5c3153=document['creat'+'eElem'+_0xeea1c2(0x3d3)](_0xeea1c2(0x244));continue;case'7':for(var _0x3294e6 of _0x1c51b7)_0x5c3153[_0xeea1c2(0x44b)+'dChil'+'d'](_0x3294e6);continue;}break;}}return _0xef1f42;}var _0x380436=[{'id':'comba'+'t','label':_0x59cd30(0x263)+'t'},{'id':'move','label':_0x44b4b1[_0x59cd30(0x231)]},{'id':_0x44b4b1[_0x59cd30(0x119)],'label':_0x59cd30(0x18d)+'l'},{'id':_0x59cd30(0x524),'label':_0x59cd30(0x3df)},{'id':_0x44b4b1['QGbtU'],'label':'Safet'+'y'}];function _0x47b9c9(){var _0x4b5e6f=_0x59cd30,_0x240db5=_0x34ef73[_0x4b5e6f(0x3ac)+'ode']?_0x44b4b1['jCYOS']:_0x34ef73[_0x4b5e6f(0x124)]?_0x44b4b1['PuHUo'](_0x44b4b1[_0x4b5e6f(0x61c)](_0x44b4b1[_0x4b5e6f(0x5d8)](_0x44b4b1[_0x4b5e6f(0x318)]('UWMK\x20'+'bound'+'\x20'+(_0x34ef73[_0x4b5e6f(0x443)+'Total']?_0x34ef73['hooks'+'Ok']+'/'+_0x34ef73[_0x4b5e6f(0x443)+_0x4b5e6f(0x58a)]+('\x20hook'+'s'):'0\x20hoo'+_0x4b5e6f(0x22e)+_0x4b5e6f(0x241)+_0x4b5e6f(0x330)+'ff)'),_0x44b4b1['OAYne']),_0x34ef73[_0x4b5e6f(0x495)+_0x4b5e6f(0x587)]?_0x44b4b1[_0x4b5e6f(0x5ad)]:_0x4b5e6f(0x2d7)+'ng')+(_0x4b5e6f(0xa9)+_0x4b5e6f(0x438)+'\x20'),_0x34ef73[_0x4b5e6f(0x159)+_0x4b5e6f(0x2e6)]?_0x44b4b1[_0x4b5e6f(0x615)]:_0x4b5e6f(0x2e1))+('\x20|\x20mo'+_0x4b5e6f(0x127)+'t\x20'),_0x34ef73[_0x4b5e6f(0x19a)+_0x4b5e6f(0x344)]?_0x4b5e6f(0x588):_0x4b5e6f(0x2e1)):_0x44b4b1[_0x4b5e6f(0x391)];if(_0x34ef73['lastE'+_0x4b5e6f(0x2c5)])_0x240db5+='\x20|\x20ER'+_0x4b5e6f(0x514)+_0x34ef73[_0x4b5e6f(0xe6)+_0x4b5e6f(0x2c5)];return _0x4265b1(_0x4b5e6f(0x2f5)+'s',_0x240db5,_0x34ef73[_0x4b5e6f(0x124)],null,[_0x45c9e6(_0x44b4b1[_0x4b5e6f(0x49d)],_0x44b4b1[_0x4b5e6f(0x341)],_0x179b3a(_0x44b4b1[_0x4b5e6f(0x1f2)],()=>{var _0xd548ac=_0x4b5e6f;try{if(_0x5f3fcc)_0x5f3fcc['call'](_0xd548ac(0x1df)+_0xd548ac(0x21b)+'e.App'+_0xd548ac(0x3f0)+'ion',_0x12a870[_0xd548ac(0x296)],[-0x3b*-0x46+-0x1*0x1b+0xf17*-0x1]);}catch(_0x2cdd63){}}))]);}function _0x3076ac(_0x31645a){var _0x2b0e42=_0x59cd30,_0x1ba320={'WbvpV':_0x2b0e42(0x3fb)+'e','YzoYm':function(_0x43a9e0,_0x4eff73,_0x488870){var _0x5215ce=_0x2b0e42;return _0x12a870[_0x5215ce(0x368)](_0x43a9e0,_0x4eff73,_0x488870);},'QEDjo':_0x2b0e42(0x1df)+_0x2b0e42(0x21b)+'e.App'+_0x2b0e42(0x3f0)+_0x2b0e42(0x5f4),'fcuYZ':function(_0x39a080){var _0x1a0e11=_0x2b0e42;return _0x12a870[_0x1a0e11(0xc9)](_0x39a080);},'LJTfq':function(_0x5e362b){return _0x5e362b();},'TWcNE':function(_0x167f85){return _0x167f85();},'grJRE':function(_0x4d1047){var _0x5bdeb3=_0x2b0e42;return _0x12a870[_0x5bdeb3(0x3e4)](_0x4d1047);},'WXhNz':function(_0x4f91ff){return _0x4f91ff();},'EmRSw':function(_0x27cf4f){return _0x27cf4f();},'yptUw':function(_0xed8675){return _0xed8675();},'UAofC':function(_0x3e47df){return _0x3e47df();},'kcxjv':'QBsVm','OpguK':_0x12a870[_0x2b0e42(0x2d4)],'MQuze':'sk-la'+'bel'};if(_0x12a870['XxGxK'](_0x31645a,_0x2b0e42(0x11c)+'t'))return[_0x47b9c9(),_0x12a870['gUKGZ'](_0x4265b1,_0x2b0e42(0x5c6)+_0x2b0e42(0x361),_0x12a870['fbeQJ'],_0x3e3487[_0x2b0e42(0x561)],_0x4d90bd=>{_0x3e3487['god']=_0x4d90bd,_0x491b4b(),_0x54098f('god',_0x4d90bd),_0x54098f(_0x1ba320['WbvpV'],_0x4d90bd);},[]),_0x4265b1('No\x20Re'+_0x2b0e42(0x5d4),'Skips'+'\x20Reco'+'ilMot'+'ion.T'+'ick\x20s'+_0x2b0e42(0x248)+'\x20reco'+_0x2b0e42(0x47e)+'rings'+'\x20neve'+_0x2b0e42(0x245)+_0x2b0e42(0x254),_0x3e3487['noRec'+_0x2b0e42(0x516)],_0x4dad6a=>{var _0x2b74ff=_0x2b0e42;_0x3e3487['noRec'+_0x2b74ff(0x516)]=_0x4dad6a,_0x491b4b(),_0x1ba320[_0x2b74ff(0x63e)](_0x54098f,_0x2b74ff(0x2fd)+'oil',_0x4dad6a);},[]),_0x4265b1(_0x2b0e42(0x151)+'read',_0x2b0e42(0x470)+_0x2b0e42(0x36e)+_0x2b0e42(0xac)+_0x2b0e42(0x384)+'xes\x20a'+_0x2b0e42(0x4e2)+'cy\x20on'+_0x2b0e42(0x26f)+_0x2b0e42(0x107)+_0x2b0e42(0x42e)+'ery\x202'+_0x2b0e42(0x3be),_0x3e3487['noSpr'+_0x2b0e42(0x27d)],_0x5c5f9f=>{var _0x4e3776=_0x2b0e42;_0x3e3487['noSpr'+_0x4e3776(0x27d)]=_0x5c5f9f,_0x491b4b();},[]),_0x4265b1(_0x2b0e42(0x2ef)+_0x2b0e42(0x1a2)+_0x2b0e42(0x3a7)+']',_0x12a870[_0x2b0e42(0x224)],_0x3e3487['rapid'+'Exp'],_0x17dfed=>{var _0x16edbf=_0x2b0e42;if(_0x16edbf(0x48a)!==_0x12a870['cfVjg'])try{if(_0x3e5a90)_0x1f7f86[_0x16edbf(0x42c)](_0x1ba320['QEDjo'],_0x16edbf(0x528)+'arget'+'Frame'+'Rate',[-0x2c0+-0x6*-0x56a+-0x1ccc]);}catch(_0x1d1663){}else _0x3e3487[_0x16edbf(0x1ad)+'Exp']=_0x17dfed,_0x12a870[_0x16edbf(0x203)](_0x491b4b);},[]),_0x4265b1(_0x12a870[_0x2b0e42(0x462)],_0x2b0e42(0x5b9)+_0x2b0e42(0x11e)+'\x20Over'+_0x2b0e42(0x190)+_0x2b0e42(0x2f7)+_0x2b0e42(0xc0)+'ge.\x20B'+_0x2b0e42(0x60d)+'le\x20if'+_0x2b0e42(0x2a8)+_0x2b0e42(0x1b4)+_0x2b0e42(0x113)+'idate'+'s.',_0x3e3487[_0x2b0e42(0x38c)+'eExp'],_0x5f413c=>{var _0x4ac48e=_0x2b0e42;_0x3e3487[_0x4ac48e(0x38c)+'eExp']=_0x5f413c,_0x491b4b();},[_0x45c9e6('Damag'+_0x2b0e42(0x482)+'ue',null,_0x12a870['gUKGZ'](_0xca2c89,_0x3e3487[_0x2b0e42(0x38c)+'eValu'+'e'],-0x491*0x1+-0x52e+0x1f5*0x5,-0x7b8*-0x4+0x261*0x5+-0x28d1,0x13*0x15d+0x1*0x1535+-0x2f17*0x1,_0x3be80e=>{_0x3e3487['damag'+'eValu'+'e']=_0x3be80e,_0x491b4b();}))]),_0x4265b1(_0x2b0e42(0x311)+'ite\x20A'+'mmo\x20['+_0x2b0e42(0x563),_0x2b0e42(0xc4)+'ls\x20th'+'e\x20wea'+_0x2b0e42(0x43a)+'\x20cach'+_0x2b0e42(0x12b)+_0x2b0e42(0x35a)+_0x2b0e42(0x20a)+'every'+_0x2b0e42(0x242)+'s.',_0x3e3487[_0x2b0e42(0x276)+_0x2b0e42(0x619)],_0x1743ec=>{var _0x48b9b3=_0x2b0e42;_0x3e3487[_0x48b9b3(0x276)+_0x48b9b3(0x619)]=_0x1743ec,_0x491b4b();},[_0x12a870['EtreI'](_0xda0779,_0x2b0e42(0x2c6)+'loads'+_0x2b0e42(0x1bb)+'l\x20dra'+'in,\x20t'+_0x2b0e42(0x3e8)+_0x2b0e42(0x319)+'nt\x20ha'+'ppens'+_0x2b0e42(0x531)+_0x2b0e42(0x4c7)+'.')])];if(_0x31645a===_0x2b0e42(0x44f))return[_0x12a870[_0x2b0e42(0x41e)](_0x4265b1,_0x2b0e42(0x48f),_0x2b0e42(0x5c8)+_0x2b0e42(0x50d)+_0x2b0e42(0x30f)+'\x20Move'+'ment\x20'+'speed'+_0x2b0e42(0x388)+'ts\x20pl'+_0x2b0e42(0x486)+_0x2b0e42(0x2af)+_0x2b0e42(0x129)+'.',_0x3e3487['speed'+'Pct']!==-0xc51+-0x7e1*0x2+0x1c77,null,[_0x12a870[_0x2b0e42(0x1c0)](_0x45c9e6,_0x12a870['DvBzT'],_0x12a870[_0x2b0e42(0x641)],_0xca2c89(_0x3e3487[_0x2b0e42(0x2d1)+_0x2b0e42(0x212)],0x522+-0x3*0x139+0x1*-0x145,0xf41+0x1*0x94f+-0x1764,0x60+-0x1377+-0x4c7*-0x4,_0x12b990=>{var _0x1b2dc8=_0x2b0e42;_0x3e3487['speed'+_0x1b2dc8(0x212)]=_0x12b990,_0x1ba320['fcuYZ'](_0x491b4b);}))]),_0x4265b1(_0x12a870['eIjVK'],_0x2b0e42(0x5c8)+'s\x20Mov'+'ement'+'.jump'+'Force'+_0x2b0e42(0x23e)+_0x2b0e42(0x585)+_0x2b0e42(0x4b7)+_0x2b0e42(0x458)+'lues.',_0x3e3487[_0x2b0e42(0x216)+'ct']!==0x10fa+-0x5f*-0x1f+-0x1c17||_0x12a870[_0x2b0e42(0x48b)](_0x3e3487['gravi'+_0x2b0e42(0x19f)],0x147*0x1d+-0x1*0x20dd+-0x3ca),null,[_0x45c9e6(_0x2b0e42(0x15c)+'%',null,_0x12a870[_0x2b0e42(0x41e)](_0xca2c89,_0x3e3487[_0x2b0e42(0x216)+'ct'],0xb06+-0x1c6+0x7a*-0x13,-0x1*0x24b2+-0x1834+0x3e12*0x1,-0x11ae+0xb1+0x1102,_0x502105=>{_0x3e3487['jumpP'+'ct']=_0x502105,_0x1ba320['LJTfq'](_0x491b4b);})),_0x12a870[_0x2b0e42(0x1c0)](_0x45c9e6,_0x2b0e42(0x409)+_0x2b0e42(0x41a),_0x2b0e42(0x46e)+_0x2b0e42(0x5c3)+_0x2b0e42(0x56e),_0xca2c89(_0x3e3487[_0x2b0e42(0x4b7)+_0x2b0e42(0x19f)],-0x1c5e+-0x1cb6+0x391e,0x2*-0x977+-0x1*-0xfd+0x12b9,-0x1*0x163d+-0x2*0xb9b+0x78*0x61,_0x47784b=>{var _0xfd2006=_0x2b0e42;if(_0xfd2006(0x1f0)!=='zhYUA'){if(!_0x5dff5a||_0x3c26de[_0xfd2006(0xda)+_0xfd2006(0x4e1)](_0x37ad96)||_0x3cdb90[_0xfd2006(0x259)+'h']>0x179e+-0x1c46+0x4e8)return;_0x1bf375['push'](_0x5152fa);}else _0x3e3487[_0xfd2006(0x4b7)+_0xfd2006(0x19f)]=_0x47784b,_0x1ba320[_0xfd2006(0x476)](_0x491b4b);}))]),_0x4265b1('Bunny'+'-hop','Zeroe'+_0x2b0e42(0x49f)+'ement'+'.last'+'JumpT'+'ime\x20s'+_0x2b0e42(0x248)+'\x20jump'+'\x20cool'+'down\x20'+'never'+_0x2b0e42(0x4f0)+_0x2b0e42(0x18a),_0x3e3487[_0x2b0e42(0xe7)],_0x3a54f6=>{var _0x2e866e=_0x2b0e42;_0x3e3487[_0x2e866e(0xe7)]=_0x3a54f6,_0x491b4b();},[])];if(_0x12a870[_0x2b0e42(0x5dd)](_0x31645a,_0x12a870[_0x2b0e42(0x638)]))return[_0x4265b1(_0x12a870[_0x2b0e42(0x580)],_0x12a870[_0x2b0e42(0x5ff)],_0x3e3487[_0x2b0e42(0x546)+_0x2b0e42(0x517)],_0x1ee72c=>{_0x3e3487['keyst'+'rokes']=_0x1ee72c,_0x1ba320['grJRE'](_0x491b4b);},[_0x45c9e6(_0x2b0e42(0x3d0)+_0x2b0e42(0x5f4),null,_0x12a870[_0x2b0e42(0x1c0)](_0x3d0adf,_0x3e3487['ksPos'],[['bl','Botto'+_0x2b0e42(0x114)+'t'],['br','Botto'+'m\x20rig'+'ht'],['ml',_0x2b0e42(0x5cb)+_0x2b0e42(0x566)+'e']],_0x114317=>{var _0x442f18=_0x2b0e42;_0x3e3487[_0x442f18(0x1b6)]=_0x114317,_0x1ba320['WXhNz'](_0x491b4b);})),_0x45c9e6('Size',null,_0xca2c89(_0x3e3487[_0x2b0e42(0x35c)+'le'],0x628+0x1*-0x527+0x1*-0x101+0.6,0xb32+0x1ed*-0xc+0x3f9*0x3+0.6000000000000001,-0x1*-0x232+0x79*0x35+-0x1b3f+0.05,_0x3458fd=>{var _0x3f19c1=_0x2b0e42;_0x3e3487[_0x3f19c1(0x35c)+'le']=_0x3458fd,_0x12a870[_0x3f19c1(0x3e4)](_0x491b4b);})),_0x45c9e6(_0x2b0e42(0x497)+'eadou'+'t',null,_0x12a870['YFtYV'](_0x1cf682,_0x3e3487[_0x2b0e42(0x4fa)],_0x5ae217=>{var _0x3f2e6a=_0x2b0e42;_0x3e3487['ksCps']=_0x5ae217,_0x1ba320[_0x3f2e6a(0x44a)](_0x491b4b);}))]),_0x12a870[_0x2b0e42(0x41e)](_0x4265b1,_0x12a870['kstcw'],_0x2b0e42(0x2ba)+_0x2b0e42(0x55c)+_0x2b0e42(0x3a2)+'rossh'+_0x2b0e42(0x313),_0x3e3487['cross'+'hair'],_0x19762c=>{var _0x2c1e8e=_0x2b0e42;_0x3e3487[_0x2c1e8e(0xf4)+'hair']=_0x19762c,_0x491b4b();},[_0x45c9e6('Size',null,_0xca2c89(_0x3e3487['chSiz'+'e'],-0x5*0x63e+0x1f12*0x1+-0x3*-0xc+0.5,-0xdb*-0x1f+0x9bf*-0x1+-0x862*0x2+0.5,-0x223*0x1+-0xd9+0x2fc+0.1,_0x3fab60=>{_0x3e3487['chSiz'+'e']=_0x3fab60,_0x491b4b();})),_0x12a870[_0x2b0e42(0x352)](_0x45c9e6,'Color',null,_0x428bb6(_0x3e3487['chCol'+'or'],_0x1f27cb=>{_0x3e3487['chCol'+'or']=_0x1f27cb,_0x1ba320['yptUw'](_0x491b4b);}))]),_0x4265b1(_0x12a870[_0x2b0e42(0x2b2)],'FPS\x20o'+_0x2b0e42(0x423)+'y.',_0x3e3487['fps'],null,[_0x45c9e6('FPS\x20c'+_0x2b0e42(0x29a)+'r',null,_0x1cf682(_0x3e3487[_0x2b0e42(0x48d)],_0x15b431=>{var _0x4a07bf=_0x2b0e42,_0x443993={'BIFfq':function(_0x59f530){return _0x59f530();},'DNvfi':function(_0x2daed0,_0x386d12,_0x2cb849){return _0x2daed0(_0x386d12,_0x2cb849);},'SHWiL':_0x4a07bf(0x2fd)+'oil'};_0x12a870['XOgbe']!==_0x12a870['XOgbe']?(_0x55ca2d[_0x4a07bf(0x2fd)+_0x4a07bf(0x516)]=_0x41c7ff,_0x443993['BIFfq'](_0x51afee),_0x443993[_0x4a07bf(0x53a)](_0xe22975,_0x443993[_0x4a07bf(0x1c3)],_0x144e0f)):(_0x3e3487[_0x4a07bf(0x48d)]=_0x15b431,_0x491b4b());})),_0x12a870[_0x2b0e42(0x218)](_0xda0779,_0x2b0e42(0xb2)+_0x2b0e42(0x5e3)+'ounte'+'r:\x20th'+'is\x20bu'+_0x2b0e42(0x109)+_0x2b0e42(0x33c)+_0x2b0e42(0x560)+_0x2b0e42(0x4b4)+_0x2b0e42(0x446)+'ers\x20t'+'o\x20pig'+'gybac'+'k\x20on.')])];if(_0x31645a===_0x2b0e42(0x524))return[_0x4265b1(_0x2b0e42(0x131)+'ck',_0x2b0e42(0x3d6)+'\x20kour'+'-io_*'+_0x2b0e42(0x4af)+'er\x20sl'+_0x2b0e42(0x2ed),_0x3e3487[_0x2b0e42(0x237)+'ck'],_0x248db5=>{var _0x253530=_0x2b0e42;'ValbZ'!==_0x253530(0x5a5)?(_0x3e3487['adblo'+'ck']=_0x248db5,_0x1ba320[_0x253530(0x1a6)](_0x491b4b)):_0xf80cd0['clear']();},[_0x12a870[_0x2b0e42(0x173)](_0xda0779,_0x2b0e42(0x2f2)+'\x20effe'+_0x2b0e42(0x5f3)+_0x2b0e42(0x2c8)+'ad\x20wh'+_0x2b0e42(0x21d)+'ggled'+'.')])];return[_0x4265b1(_0x2b0e42(0x25f)+_0x2b0e42(0x41d)+_0x2b0e42(0x4f9)+'lay\x20o'+'nly)',_0x12a870[_0x2b0e42(0x4de)],_0x3e3487[_0x2b0e42(0x3ac)+_0x2b0e42(0x361)],_0x428ece=>{var _0x28db38=_0x2b0e42;_0x3e3487[_0x28db38(0x3ac)+_0x28db38(0x361)]=_0x428ece,_0x491b4b(),location['reloa'+'d']();},[_0xda0779(_0x12a870[_0x2b0e42(0x287)])]),_0x4265b1(_0x12a870['rPLXL'],_0x2b0e42(0x105)+_0x2b0e42(0x33e)+_0x2b0e42(0x2ab)+_0x2b0e42(0x485)+_0x2b0e42(0x28e)+_0x2b0e42(0x4f4)+_0x2b0e42(0x39e)+'\x20for\x20'+_0x2b0e42(0x221)+_0x2b0e42(0x1ba)+'page\x20'+'load.'+_0x2b0e42(0xd6)+_0x2b0e42(0x599)+_0x2b0e42(0x499)+_0x2b0e42(0x4c5)+'-\x20a\x20s'+_0x2b0e42(0x403)+'ure\x20t'+_0x2b0e42(0x15f)+_0x2b0e42(0x2ac)+_0x2b0e42(0x562)+_0x2b0e42(0x503)+_0x2b0e42(0x64b)+_0x2b0e42(0x447)+'thod\x20'+_0x2b0e42(0x3fe)+_0x2b0e42(0x46b)+_0x2b0e42(0x12d)+_0x2b0e42(0x31f)+'natur'+'e\x20mis'+_0x2b0e42(0x111)+'\x27\x20the'+'\x20mome'+'nt\x20it'+_0x2b0e42(0x642)+_0x2b0e42(0x2ae)+_0x2b0e42(0x56c)+_0x2b0e42(0x614)+_0x2b0e42(0x617)+'one\x20a'+'t\x20a\x20t'+'ime,\x20'+'reloa'+_0x2b0e42(0x3b3)+_0x2b0e42(0x5fe)+_0x2b0e42(0x4d2)+'h\x20one'+_0x2b0e42(0x26f)+'\x20buil'+'d\x20cho'+_0x2b0e42(0x168)+'n.',_0x3e3487['hookG'+'od']||_0x3e3487['hookG'+'odDie']||_0x3e3487[_0x2b0e42(0x278)+'oReco'+'il']||_0x3e3487['hookC'+_0x2b0e42(0xdd)+'e'],_0x1e2263=>{var _0x27537b=_0x2b0e42;_0x3e3487['hookG'+'od']=_0x1e2263,_0x3e3487[_0x27537b(0x339)+'odDie']=_0x1e2263,_0x3e3487['hookN'+_0x27537b(0x554)+'il']=_0x1e2263,_0x3e3487[_0x27537b(0xeb)+'aptur'+'e']=_0x1e2263,_0x1ba320[_0x27537b(0x293)](_0x491b4b),location[_0x27537b(0x209)+'d']();},[_0x12a870[_0x2b0e42(0x5f1)](_0xda0779,'Appli'+'es\x20on'+_0x2b0e42(0x2c8)+'ad.'),_0x45c9e6(_0x12a870[_0x2b0e42(0x32b)],null,_0x12a870[_0x2b0e42(0x40e)](_0x1cf682,_0x3e3487['hookG'+'od'],_0x411b77=>{_0x3e3487['hookG'+'od']=_0x411b77,_0x491b4b();})),_0x12a870['aCLUq'](_0x45c9e6,_0x2b0e42(0x3fb)+_0x2b0e42(0x3de)+_0x2b0e42(0x635)+_0x2b0e42(0x4e4)+_0x2b0e42(0x468),null,_0x12a870[_0x2b0e42(0x1f8)](_0x1cf682,_0x3e3487['hookG'+'odDie'],_0x3986c1=>{var _0x31a382=_0x2b0e42,_0x4920fd={'XwkPh':_0x31a382(0x5d3)+_0x31a382(0x498)};if(_0x1ba320[_0x31a382(0x518)]===_0x31a382(0x396))_0x3e3487[_0x31a382(0x339)+'odDie']=_0x3986c1,_0x491b4b();else try{var _0x555a35=_0x4920fd[_0x31a382(0x55a)]['split']('|'),_0x252386=-0x15*-0x1a6+-0x1b*0x115+-0x567;while(!![]){switch(_0x555a35[_0x252386++]){case'0':var _0x488ef1=_0x2770f4['hookP'+_0x31a382(0x5a8)+'x']({'typeName':_0x408d95,'methodName':_0x51e59a,'params':_0x33e3d0,'returnType':_0x137b2a},_0x503575);continue;case'1':_0x79514a[_0x31a382(0x443)+_0x31a382(0x58a)]++;continue;case'2':return _0x488ef1;case'3':_0x488ef1[_0x31a382(0xf8)+'ed']=_0x4c7049!==![];continue;case'4':_0x372c36[_0x3b80b6]=_0x488ef1;continue;}break;}}catch(_0x34ba88){return _0x2c60f4[_0x31a382(0x215)]('[saku'+_0x31a382(0xfe)+_0x31a382(0x1d5)+'ook\x20r'+'eg\x20fa'+'iled:',_0x6fddae,_0x34ba88&&_0x34ba88[_0x31a382(0x20f)+'ge']),null;}})),_0x45c9e6('noRec'+'oil\x20('+'Recoi'+_0x2b0e42(0x63f)+'on.Ti'+_0x2b0e42(0x11a),null,_0x12a870[_0x2b0e42(0x5ef)](_0x1cf682,_0x3e3487['hookN'+'oReco'+'il'],_0x2ab6ed=>{var _0x2cd4f1=_0x2b0e42;_0x3e3487[_0x2cd4f1(0x278)+'oReco'+'il']=_0x2ab6ed,_0x491b4b();})),_0x12a870[_0x2b0e42(0x271)](_0x45c9e6,_0x2b0e42(0x46f)+_0x2b0e42(0x4f3)+_0x2b0e42(0x2d0)+'eRunn'+_0x2b0e42(0x120)+_0x2b0e42(0x180)+_0x2b0e42(0x549)+'d)','no\x20ch'+'eats\x20'+'work\x20'+'witho'+'ut\x20th'+'is',_0x12a870['YFtYV'](_0x1cf682,_0x3e3487[_0x2b0e42(0xeb)+_0x2b0e42(0xdd)+'e'],_0x58fab3=>{var _0x232870=_0x2b0e42;if(_0x232870(0xdf)!==_0x232870(0x405))_0x3e3487['hookC'+_0x232870(0xdd)+'e']=_0x58fab3,_0x491b4b();else{var _0x593f1b=_0x266b55[_0x232870(0x249)+_0x232870(0x2fb)+_0x232870(0x3d3)](_0x232870(0x244));_0x593f1b['class'+'Name']=_0x1ba320[_0x232870(0xf9)];var _0x2cfaab=_0x518046[_0x232870(0x249)+_0x232870(0x2fb)+_0x232870(0x3d3)](_0x232870(0x1bf));_0x2cfaab['class'+'Name']=_0x1ba320['MQuze'],_0x2cfaab['textC'+'onten'+'t']=_0x435804;if(_0x168f9c){var _0x37e400=_0x51be8f['creat'+'eElem'+'ent']('small');_0x37e400[_0x232870(0x3f8)+_0x232870(0x28c)]=_0x232870(0x372)+'nt',_0x37e400[_0x232870(0x295)+_0x232870(0x38f)+'t']=_0x1bf9eb,_0x2cfaab[_0x232870(0x44b)+_0x232870(0x419)+'d'](_0x37e400);}return _0x593f1b['appen'+'d'](_0x2cfaab,_0x15d8bd),_0x593f1b;}}))]),_0x4265b1(_0x2b0e42(0x2de)+_0x2b0e42(0x547)+'r',_0x12a870[_0x2b0e42(0x3c4)],_0x3e3487[_0x2b0e42(0x448)+'ill'],_0x46d47a=>{var _0x1fd53d=_0x2b0e42;_0x3e3487[_0x1fd53d(0x448)+_0x1fd53d(0x204)]=_0x46d47a,_0x491b4b();},[_0xda0779(_0x12a870[_0x2b0e42(0x45b)],!![])]),_0x12a870['zhqzH'](_0x4265b1,_0x12a870['ofrNo'],_0x2b0e42(0x556)+_0x2b0e42(0x43c)+_0x2b0e42(0x4cb)+_0x2b0e42(0x146)+_0x2b0e42(0x4b4)+_0x2b0e42(0x45c)+_0x2b0e42(0x145),!![],null,[_0x45c9e6('Wipe\x20'+_0x2b0e42(0xc6)+_0x2b0e42(0xc1)+'s',null,_0x12a870[_0x2b0e42(0x4db)](_0x179b3a,_0x12a870['jHYIK'],()=>{_0x3e3487={..._0x31474a},_0x12a870['CcWdC'](_0x491b4b),location['reloa'+'d']();}))])];}var _0x3fe1f5=null;function _0x542138(_0x5b8b3f){var _0x264db3=_0x59cd30;_0x35ee82=_0x5b8b3f;if(!_0x3fe1f5){var _0x54e019=document[_0x264db3(0x249)+'eElem'+'ent'](_0x264db3(0x154));_0x54e019[_0x264db3(0x295)+'onten'+'t']=_0x2b2e7a,_0x638f31[_0x264db3(0x44b)+_0x264db3(0x419)+'d'](_0x54e019),_0x3fe1f5=_0x44b4b1[_0x264db3(0x316)](_0x3aa627),_0x638f31[_0x264db3(0x44b)+_0x264db3(0x419)+'d'](_0x3fe1f5),_0x44b4b1[_0x264db3(0x359)](requestAnimationFrame,()=>_0x3fe1f5[_0x264db3(0x3f8)+_0x264db3(0x648)][_0x264db3(0x22f)]('shown'));}_0x3fe1f5['class'+_0x264db3(0x648)][_0x264db3(0x4a7)+'e'](_0x264db3(0x3c0),_0x5b8b3f);}function _0x13a641(){var _0x24980c=_0x59cd30,_0x462dd5={'vximj':function(_0x246065,_0x35c9c9){return _0x246065!==_0x35c9c9;}};if(_0x24980c(0x46c)!==_0x24980c(0x46c))try{var _0x45f955=new _0x3771c0(_0x2fdf81)[_0x24980c(0x2c2)+'ield'](_0x313eca,_0x18af7a);_0x3dbd80[_0x24980c(0x195)](_0x5336da,_0x462dd5['vximj'](_0x45f955,_0x374076)?_0x45f955[_0x24980c(0x24e)]():null);}catch(_0x12b286){_0x5e7c83['set'](_0x42a453,null);}else _0x542138(!_0x35ee82);}function _0x3aa627(){var _0x5c65d5=_0x59cd30,_0x1d370b={'UibWa':'.sk-m'+_0x5c65d5(0x5ca),'rBGEF':function(_0xe1235e,_0x5643e){return _0xe1235e===_0x5643e;},'SaoKA':'SAFE\x20'+_0x5c65d5(0x28a)+'-\x20ove'+_0x5c65d5(0xb8)+_0x5c65d5(0xc8)+'\x20no\x20h'+_0x5c65d5(0x43f)+_0x5c65d5(0x626)+_0x5c65d5(0x3fa)+_0x5c65d5(0x355)+')','KdpRJ':function(_0x88285b,_0x1932cf){return _0x88285b+_0x1932cf;},'wYfNS':function(_0x141186,_0xf297a3){return _0x12a870['tHjxy'](_0x141186,_0xf297a3);},'FCNtY':function(_0x381fe3,_0x5cd3dd){var _0xeb3ea7=_0x5c65d5;return _0x12a870[_0xeb3ea7(0x5f2)](_0x381fe3,_0x5cd3dd);},'cKzkB':function(_0x276c6c,_0x49ec3e){return _0x276c6c+_0x49ec3e;},'kgXDX':function(_0x131a04,_0x18decf){var _0x3da6d2=_0x5c65d5;return _0x12a870[_0x3da6d2(0x5ed)](_0x131a04,_0x18decf);},'mgLOj':_0x12a870[_0x5c65d5(0x25b)],'twgsz':_0x12a870[_0x5c65d5(0x3e7)],'pYgJo':_0x5c65d5(0x236)+_0x5c65d5(0x2f3),'HovVh':_0x5c65d5(0x425)+'d','YeuLF':_0x5c65d5(0x2d7)+'ng','HffjO':_0x12a870[_0x5c65d5(0x4d3)],'nqISv':_0x12a870[_0x5c65d5(0x1e0)],'bNBwW':'none','ZTGRd':'UWMK\x20'+_0x5c65d5(0x232)+'NG\x20-\x20'+'overl'+_0x5c65d5(0x414)+_0x5c65d5(0x4be)+_0x5c65d5(0x32a)+'all\x20t'+_0x5c65d5(0x5d7)+'erscr'+_0x5c65d5(0x621)},_0x31dc84=document['creat'+'eElem'+_0x5c65d5(0x3d3)](_0x5c65d5(0x244));_0x31dc84[_0x5c65d5(0x3f8)+_0x5c65d5(0x28c)]='mn-pa'+'nel';var _0x1ae958=document['creat'+_0x5c65d5(0x2fb)+'ent']('nav');_0x1ae958[_0x5c65d5(0x3f8)+_0x5c65d5(0x28c)]=_0x12a870['kJdmF'];var _0x5bd0b3=document[_0x5c65d5(0x249)+_0x5c65d5(0x2fb)+'ent']('div');_0x5bd0b3['class'+_0x5c65d5(0x28c)]=_0x5c65d5(0x140)+'go',_0x5bd0b3['inner'+_0x5c65d5(0x323)]=_0x5c65d5(0x292)+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22\x20'+_0x5c65d5(0x3f8)+_0x5c65d5(0x11f)+_0x5c65d5(0x4a5)+_0x5c65d5(0x5b7)+_0x5c65d5(0x4fe)+_0x5c65d5(0x1f1)+'12\x2021'+_0x5c65d5(0x2ea)+_0x5c65d5(0xbe)+_0x5c65d5(0x50b)+_0x5c65d5(0x35e)+_0x5c65d5(0x45f)+_0x5c65d5(0x294)+_0x5c65d5(0x466)+_0x5c65d5(0x3ee)+_0x5c65d5(0x39b)+_0x5c65d5(0x389)+_0x5c65d5(0x420)+_0x5c65d5(0x52f)+'5-4\x207'+'.5z\x22\x20'+_0x5c65d5(0x226)+'\x22none'+_0x5c65d5(0x307)+'oke=\x22'+_0x5c65d5(0x413)+_0x5c65d5(0x519)+_0x5c65d5(0xf5)+'-widt'+_0x5c65d5(0x59e)+_0x5c65d5(0x21e)+_0x5c65d5(0x304)+_0x5c65d5(0x4dc)+'=\x22rou'+'nd\x22\x20s'+'troke'+'-line'+_0x5c65d5(0x428)+_0x5c65d5(0x225)+_0x5c65d5(0x193)+'circl'+_0x5c65d5(0x4eb)+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+_0x5c65d5(0x349)+_0x5c65d5(0x13b)+'6b9d\x22'+'/></s'+'vg>',_0x1ae958[_0x5c65d5(0x44b)+_0x5c65d5(0x419)+'d'](_0x5bd0b3);var _0x4eaa7c=document[_0x5c65d5(0x249)+_0x5c65d5(0x2fb)+_0x5c65d5(0x3d3)](_0x12a870[_0x5c65d5(0x5bb)]);_0x4eaa7c['class'+_0x5c65d5(0x28c)]=_0x12a870['camAL'];var _0x37f347=document['creat'+'eElem'+'ent'](_0x12a870[_0x5c65d5(0x61b)]);_0x37f347['class'+_0x5c65d5(0x28c)]='mn-to'+'p';var _0x368874=document[_0x5c65d5(0x249)+_0x5c65d5(0x2fb)+'ent']('div');_0x368874[_0x5c65d5(0x3f8)+_0x5c65d5(0x28c)]=_0x12a870[_0x5c65d5(0x21c)];var _0xb0f388=document['creat'+_0x5c65d5(0x2fb)+'ent']('h2');_0xb0f388['class'+'Name']=_0x12a870[_0x5c65d5(0x2b3)],_0xb0f388['textC'+_0x5c65d5(0x38f)+'t']=_0x12a870['wHmjH'];var _0x1a8f08=document[_0x5c65d5(0x249)+_0x5c65d5(0x2fb)+'ent'](_0x12a870['PNegy']);_0x1a8f08['class'+'Name']=_0x5c65d5(0x5dc)+'b',_0x1a8f08[_0x5c65d5(0x295)+'onten'+'t']='kours'+_0x5c65d5(0x1b3)+_0x5c65d5(0x5f9)+_0x5c65d5(0x260),_0x368874[_0x5c65d5(0x44b)+'d'](_0xb0f388,_0x1a8f08);var _0x15ee19=document[_0x5c65d5(0x249)+_0x5c65d5(0x2fb)+_0x5c65d5(0x3d3)]('butto'+'n');_0x15ee19['type']=_0x5c65d5(0x612)+'n',_0x15ee19[_0x5c65d5(0x3f8)+'Name']=_0x5c65d5(0x2ce)+'ose',_0x15ee19[_0x5c65d5(0x351)]=_0x12a870[_0x5c65d5(0x590)],_0x15ee19[_0x5c65d5(0x2a9)+'HTML']=_0x12a870[_0x5c65d5(0x592)],_0x15ee19[_0x5c65d5(0x1f7)+'ck']=()=>_0x542138(![]),_0x37f347[_0x5c65d5(0x44b)+'d'](_0x368874,_0x15ee19);var _0x1bec81=document[_0x5c65d5(0x249)+'eElem'+_0x5c65d5(0x3d3)](_0x5c65d5(0x244));_0x1bec81[_0x5c65d5(0x3f8)+_0x5c65d5(0x28c)]=_0x12a870[_0x5c65d5(0x112)],_0x4eaa7c[_0x5c65d5(0x44b)+'d'](_0x37f347,_0x1bec81),_0x31dc84[_0x5c65d5(0x44b)+'d'](_0x1ae958,_0x4eaa7c);var _0x15e878=new Map();for(var _0x3f73e6 of _0x380436){var _0x3faa7b=_0x12a870[_0x5c65d5(0x228)]['split']('|'),_0x48acbd=0x1*-0x218e+-0x2032+-0x20e*-0x20;while(!![]){switch(_0x3faa7b[_0x48acbd++]){case'0':_0x1ae958[_0x5c65d5(0x44b)+_0x5c65d5(0x419)+'d'](_0x123d18);continue;case'1':_0x15e878[_0x5c65d5(0x195)](_0x3f73e6['id'],_0x123d18);continue;case'2':_0x123d18[_0x5c65d5(0x351)]=_0x3f73e6[_0x5c65d5(0x321)];continue;case'3':_0x123d18['inner'+_0x5c65d5(0x323)]=_0x12a870['kbxWF']('<smal'+'l>',_0x3f73e6['label'])+(_0x5c65d5(0x2bc)+_0x5c65d5(0x60b));continue;case'4':var _0x123d18=document[_0x5c65d5(0x249)+'eElem'+_0x5c65d5(0x3d3)](_0x12a870[_0x5c65d5(0x4a3)]);continue;case'5':_0x123d18[_0x5c65d5(0xad)]=_0x5c65d5(0x612)+'n';continue;case'6':_0x123d18[_0x5c65d5(0x3f8)+_0x5c65d5(0x28c)]=_0x12a870[_0x5c65d5(0x2db)];continue;case'7':_0x123d18['oncli'+'ck']=(_0x34d215=>()=>_0x559e1b(_0x34d215))(_0x3f73e6['id']);continue;}break;}}function _0x559e1b(_0xd77649){var _0x4cb6cc=_0x5c65d5,_0x1fcf18=('1|2|4'+_0x4cb6cc(0x264)+'3')[_0x4cb6cc(0x3ef)]('|'),_0x1c609a=-0x973+-0x139d*0x1+-0x5*-0x5d0;while(!![]){switch(_0x1fcf18[_0x1c609a++]){case'0':for(var [_0x514b7d,_0x31ca49]of _0x15e878)_0x31ca49['class'+'List']['toggl'+'e']('activ'+'e',_0x12a870[_0x4cb6cc(0x5dd)](_0x514b7d,_0xd77649));continue;case'1':_0x3b0d4b['cat']=_0xd77649;continue;case'2':_0xb92b9c();continue;case'3':_0x1bec81[_0x4cb6cc(0x5ea)+_0x4cb6cc(0x445)+_0x4cb6cc(0x17f)](..._0x3076ac(_0xd77649));continue;case'4':var _0x2fe815=_0x380436['find'](_0xe229d=>_0xe229d['id']===_0xd77649)||_0x380436[0x1349+0x8ed*0x1+-0x1c36];continue;case'5':_0xb0f388[_0x4cb6cc(0x295)+'onten'+'t']=_0x12a870['haiur']+_0x2fe815['label'];continue;}break;}}return _0x12a870['WmrIB'](_0x559e1b,_0x3b0d4b['cat']||_0x12a870[_0x5c65d5(0x33d)]),_0x12a870[_0x5c65d5(0x63d)](setInterval,()=>{var _0x1a2516=_0x5c65d5;if(!_0x35ee82)return;var _0x1667cf=_0x1bec81[_0x1a2516(0x136)+_0x1a2516(0x3a0)];for(var _0x23db06=-0x1bfc+-0x1408+0x3004;_0x23db06<_0x1667cf[_0x1a2516(0x259)+'h'];_0x23db06++){var _0x593ed2=_0x1667cf[_0x23db06][_0x1a2516(0x398)+'Selec'+_0x1a2516(0x51e)](_0x1d370b[_0x1a2516(0x133)]);_0x593ed2&&(_0x593ed2['textC'+_0x1a2516(0x38f)+'t'][_0x1a2516(0x5bd)+'Of'](_0x1a2516(0x479))===-0x175e+0x805*0x1+0xf59||_0x1d370b['rBGEF'](_0x593ed2['textC'+'onten'+'t']['index'+'Of']('SAFE'),0x3a*0x11+-0x22b2+0x1ed8))&&(_0x593ed2['textC'+'onten'+'t']=_0x34ef73['safeM'+'ode']?_0x1d370b['SaoKA']:_0x34ef73[_0x1a2516(0x124)]?_0x1d370b[_0x1a2516(0x569)](_0x1d370b[_0x1a2516(0x387)](_0x1d370b['FCNtY'](_0x1d370b['cKzkB'](_0x1d370b[_0x1a2516(0x465)](_0x1d370b[_0x1a2516(0x1a5)](_0x1a2516(0x62a)+'bound'+'\x20',_0x34ef73['hooks'+_0x1a2516(0x58a)]?_0x34ef73[_0x1a2516(0x443)+'Ok']+'/'+_0x34ef73[_0x1a2516(0x443)+_0x1a2516(0x58a)]+_0x1d370b['mgLOj']:_0x1d370b['twgsz']),_0x1d370b[_0x1a2516(0x3e3)]),_0x34ef73[_0x1a2516(0x495)+'oaded']?_0x1d370b[_0x1a2516(0x577)]:_0x1d370b[_0x1a2516(0x363)]),_0x1d370b['HffjO'])+(_0x34ef73[_0x1a2516(0x159)+_0x1a2516(0x2e6)]?_0x1d370b[_0x1a2516(0x5a1)]:_0x1d370b['bNBwW']),_0x1a2516(0x2ca)+_0x1a2516(0x127)+'t\x20'),_0x34ef73[_0x1a2516(0x19a)+_0x1a2516(0x344)]?_0x1d370b['nqISv']:_0x1d370b['bNBwW'])+(_0x34ef73[_0x1a2516(0xe6)+'rror']?_0x1a2516(0x4d0)+'R:\x20'+_0x34ef73[_0x1a2516(0xe6)+_0x1a2516(0x2c5)]:''):_0x1d370b[_0x1a2516(0x4ff)]);}},0x1a33+-0x119*-0x19+0x3*-0x1094),_0x31dc84;}var _0x2b2e7a=_0x59cd30(0x381)+':host'+_0x59cd30(0x308)+_0x59cd30(0x251)+'itial'+';\x20}\x0a\x20'+_0x59cd30(0x1a1)+_0x59cd30(0x2b6)+'-sizi'+_0x59cd30(0x256)+_0x59cd30(0x2d3)+_0x59cd30(0x4b1)+'\x20marg'+_0x59cd30(0x426)+';\x20fon'+'t-fam'+_0x59cd30(0x4ee)+_0x59cd30(0x371)+_0x59cd30(0x2b7)+_0x59cd30(0xcc)+'\x20UI\x22,'+_0x59cd30(0x1fc)+_0x59cd30(0x35b)+_0x59cd30(0x2df)+'s-ser'+_0x59cd30(0x3a6)+_0x59cd30(0x381)+_0x59cd30(0x310)+_0x59cd30(0x27c)+'{\x20pos'+_0x59cd30(0x192)+_0x59cd30(0x5ee)+_0x59cd30(0x2ad)+';\x20rig'+_0x59cd30(0x537)+'4px;\x20'+_0x59cd30(0x54e)+_0x59cd30(0x4ce)+_0x59cd30(0x5ab)+'idth:'+_0x59cd30(0x5ac)+_0x59cd30(0x3b2)+_0x59cd30(0x442)+'c(100'+'vw\x20-\x20'+'48px)'+_0x59cd30(0x4ad)+'x-hei'+'ght:\x20'+_0x59cd30(0xd9)+_0x59cd30(0x265)+'\x20calc'+_0x59cd30(0xe4)+_0x59cd30(0x39d)+_0x59cd30(0x628)+_0x59cd30(0x572)+_0x59cd30(0x415)+_0x59cd30(0x451)+':\x20fle'+_0x59cd30(0x639)+_0x59cd30(0x314)+_0x59cd30(0x30a)+_0x59cd30(0x1f5)+'g:\x2010'+_0x59cd30(0x36d)+_0x59cd30(0x2d3)+'-radi'+_0x59cd30(0x3cb)+'2px;\x20'+_0x59cd30(0x14c)+_0x59cd30(0x348)+_0x59cd30(0xc7)+'\x20auto'+';\x0a\x20\x20\x20'+_0x59cd30(0x5fa)+_0x59cd30(0x13d)+_0x59cd30(0x2b5)+_0x59cd30(0x1b9)+_0x59cd30(0x184)+',21,.'+_0x59cd30(0x4a4)+'backd'+_0x59cd30(0x3c3)+'ilter'+':\x20blu'+_0x59cd30(0x101)+'x)\x20sa'+_0x59cd30(0x40b)+'e(150'+_0x59cd30(0x50a)+'webki'+_0x59cd30(0x625)+'kdrop'+_0x59cd30(0x5df)+_0x59cd30(0x25d)+'lur(2'+_0x59cd30(0x3c9)+'satur'+'ate(1'+_0x59cd30(0x158)+_0x59cd30(0x381)+'\x20\x20box'+_0x59cd30(0x41b)+_0x59cd30(0x18f)+_0x59cd30(0x2a5)+_0x59cd30(0x5b3)+'gba(2'+_0x59cd30(0x1e4)+'5,255'+_0x59cd30(0xe3)+_0x59cd30(0x40f)+_0x59cd30(0x4ae)+_0x59cd30(0x290)+_0x59cd30(0x53c)+_0x59cd30(0x59d)+_0x59cd30(0x138)+'55,.0'+_0x59cd30(0x332)+'\x2030px'+_0x59cd30(0x601)+'\x20rgba'+_0x59cd30(0x3c1)+'0,.55'+_0x59cd30(0x5aa)+_0x59cd30(0x1d1)+'pacit'+_0x59cd30(0x2e9)+'\x20tran'+'sform'+_0x59cd30(0x3e6)+_0x59cd30(0x392)+'eY(18'+_0x59cd30(0x1fb)+'point'+_0x59cd30(0x348)+_0x59cd30(0xc7)+_0x59cd30(0x4c9)+';\x20tra'+_0x59cd30(0x4e6)+_0x59cd30(0x29f)+'pacit'+_0x59cd30(0x270)+_0x59cd30(0x24d)+_0x59cd30(0x4d6)+_0x59cd30(0x45d)+_0x59cd30(0x191)+'5s\x20cu'+'bic-b'+_0x59cd30(0xca)+'(.22,'+_0x59cd30(0x2c1)+_0x59cd30(0x633)+_0x59cd30(0x13a)+_0x59cd30(0x123)+'r:\x20#f'+'6eef2'+_0x59cd30(0x2b9)+_0x59cd30(0x5e7)+'e:\x2013'+'px;\x20}'+_0x59cd30(0x381)+'.mn-p'+_0x59cd30(0x410)+'shown'+_0x59cd30(0x456)+_0x59cd30(0x157)+':\x201;\x20'+'trans'+'form:'+_0x59cd30(0x4c9)+';\x20poi'+_0x59cd30(0x37f)+_0x59cd30(0xf3)+'s:\x20au'+_0x59cd30(0x222)+'\x0a\x20\x20\x20\x20'+'.mn-s'+'ide\x20{'+'\x20disp'+'lay:\x20'+'flex;'+_0x59cd30(0x480)+'-dire'+'ction'+':\x20col'+'umn;\x20'+_0x59cd30(0x196)+'-item'+_0x59cd30(0x521)+'nter;'+'\x20gap:'+_0x59cd30(0x422)+'\x20widt'+'h:\x2062'+_0x59cd30(0x603)+_0x59cd30(0x58d)+_0x59cd30(0x350)+_0x59cd30(0x1dc)+'ing:\x20'+_0x59cd30(0x30b)+(_0x59cd30(0x52e)+_0x59cd30(0x46d)+'radiu'+_0x59cd30(0x2d2)+_0x59cd30(0x5c9)+_0x59cd30(0x13a)+_0x59cd30(0x5bf)+_0x59cd30(0x5a0)+_0x59cd30(0x301)+_0x59cd30(0x1ef)+',255,'+'255,.'+_0x59cd30(0x164)+_0x59cd30(0xfb)+_0x59cd30(0x604)+'w:\x20in'+'set\x200'+_0x59cd30(0x2a5)+_0x59cd30(0x5b3)+_0x59cd30(0x148)+_0x59cd30(0x1e4)+'5,255'+',.05)'+_0x59cd30(0x16e)+'\x20\x20\x20.m'+'n-log'+_0x59cd30(0x207)+'ispla'+_0x59cd30(0x201)+'id;\x20p'+_0x59cd30(0x467)+_0x59cd30(0x41c)+_0x59cd30(0x3c6)+_0x59cd30(0x59a)+_0x59cd30(0x5cf)+_0x59cd30(0x35f)+'x;\x20he'+_0x59cd30(0x139)+_0x59cd30(0x205)+_0x59cd30(0x16e)+_0x59cd30(0x630)+'n-log'+_0x59cd30(0x198)+_0x59cd30(0x166)+'dth:\x20'+_0x59cd30(0x502)+_0x59cd30(0x3f3)+'ht:\x202'+'5px;\x20'+_0x59cd30(0x14a)+'low:\x20'+'visib'+'le;\x20f'+'ilter'+':\x20dro'+_0x59cd30(0x380)+_0x59cd30(0x3c7)+'\x200\x204p'+'x\x20rgb'+'a(255'+_0x59cd30(0x369)+'157,.'+_0x59cd30(0x5d5)+_0x59cd30(0x49a)+_0x59cd30(0x555)+_0x59cd30(0x584)+_0x59cd30(0x3d7)+'lay:\x20'+_0x59cd30(0x40a)+_0x59cd30(0x142)+_0x59cd30(0x2a7)+_0x59cd30(0x346)+_0x59cd30(0x1c7)+';\x20jus'+_0x59cd30(0x589)+'conte'+_0x59cd30(0x475)+_0x59cd30(0x1c7)+_0x59cd30(0x1d8)+_0x59cd30(0x474)+_0x59cd30(0x624)+_0x59cd30(0x433)+_0x59cd30(0x57c)+'px;\x20b'+_0x59cd30(0x2d3)+_0x59cd30(0x27b)+'borde'+_0x59cd30(0x52b)+'ius:\x20'+_0x59cd30(0x481)+_0x59cd30(0x381)+'\x20\x20bac'+'kgrou'+'nd:\x20t'+_0x59cd30(0x1ae)+_0x59cd30(0x416)+_0x59cd30(0x543)+'or:\x20r'+_0x59cd30(0x148)+_0x59cd30(0xea)+'8,242'+',.4);'+_0x59cd30(0x496)+'or:\x20p'+'ointe'+_0x59cd30(0x13c)+_0x59cd30(0x1a4)+'ze:\x201'+_0x59cd30(0x24c)+'font-'+_0x59cd30(0x26a)+_0x59cd30(0x181)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-ta'+'b:hov'+'er\x20{\x20'+_0x59cd30(0x4bc)+':\x20rgb'+_0x59cd30(0x471)+_0x59cd30(0x197)+'242,.'+'8);\x20}'+_0x59cd30(0x381)+'.mn-t'+_0x59cd30(0x1ab)+'tive\x20'+'{\x20col'+_0x59cd30(0x206)+_0x59cd30(0x536)+_0x59cd30(0x23c)+_0x59cd30(0x13d)+_0x59cd30(0x2b5)+_0x59cd30(0x1b9)+'255,1'+_0x59cd30(0x3eb)+'7,.1)'+_0x59cd30(0x16e)+_0x59cd30(0x630)+_0x59cd30(0x5cd)+'n\x20{\x20f'+'lex:\x20'+_0x59cd30(0x60a)+_0x59cd30(0x268)+'th:\x200'+';\x20dis'+_0x59cd30(0x4c3)+_0x59cd30(0x480)+';\x20fle'+'x-dir'+'ectio'+_0x59cd30(0x412)+'lumn;'+'\x20}\x0a\x20\x20'+_0x59cd30(0x5d6)+_0x59cd30(0x5e5)+_0x59cd30(0x162)+_0x59cd30(0x4c3)+_0x59cd30(0x480)+_0x59cd30(0x179)+_0x59cd30(0x1f4)+_0x59cd30(0x2fa)+'cente'+'r;\x20ga'+_0x59cd30(0x5b6)+_0x59cd30(0x30a)+_0x59cd30(0x1f5)+_0x59cd30(0x44c)+_0x59cd30(0x345)+'\x2012px'+_0x59cd30(0x461)+_0x59cd30(0x2cb)+_0x59cd30(0x3d8)+'none;'+_0x59cd30(0x52a)+'\x20\x20.mn'+'-titl'+_0x59cd30(0x573)+_0x59cd30(0x18b)+'\x201;\x20m'+_0x59cd30(0x4d8)+'dth:\x20'+_0x59cd30(0x1ec)+_0x59cd30(0x38d)+'mn-h\x20'+_0x59cd30(0x4e9)+'t-siz'+_0x59cd30(0x450)+_0x59cd30(0x603)+_0x59cd30(0x4c2)+_0x59cd30(0xf1)+_0x59cd30(0x326)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x59cd30(0x47b)+_0x59cd30(0x439)+'nt-si'+_0x59cd30(0x2c4)+_0x59cd30(0x291)+_0x59cd30(0x135))+('ty:\x20.'+'4;\x20}\x0a'+_0x59cd30(0x38d)+'mn-cl'+'ose\x20{'+_0x59cd30(0x3d7)+'lay:\x20'+_0x59cd30(0x2e0)+_0x59cd30(0x252)+_0x59cd30(0x51d)+_0x59cd30(0x346)+_0x59cd30(0x1c7)+_0x59cd30(0x1d8)+_0x59cd30(0x44e)+_0x59cd30(0x63b)+'heigh'+'t:\x2028'+'px;\x20b'+'order'+_0x59cd30(0x27b)+_0x59cd30(0x3b4)+'r-rad'+_0x59cd30(0x640)+_0x59cd30(0x63b)+_0x59cd30(0x5bf)+_0x59cd30(0x5a0)+_0x59cd30(0x3e6)+_0x59cd30(0x1de)+'ent;\x20'+'color'+_0x59cd30(0x262)+'erit;'+_0x59cd30(0x20d)+_0x59cd30(0x5b8)+'.45;\x20'+_0x59cd30(0x4ed)+'r:\x20po'+_0x59cd30(0x1c1)+_0x59cd30(0x16e)+'\x20\x20\x20.m'+_0x59cd30(0x373)+_0x59cd30(0x257)+_0x59cd30(0x152)+'\x20opac'+_0x59cd30(0x5b8)+'1;\x20ba'+_0x59cd30(0x13d)+'und:\x20'+_0x59cd30(0x1b9)+_0x59cd30(0x138)+_0x59cd30(0x1e4)+_0x59cd30(0x532)+_0x59cd30(0x4bd)+'\x20\x20\x20\x20.'+_0x59cd30(0x2ce)+_0x59cd30(0x56f)+_0x59cd30(0x404)+'width'+_0x59cd30(0x418)+_0x59cd30(0x14e)+'ight:'+'\x2014px'+';\x20fil'+_0x59cd30(0x437)+'ne;\x20s'+'troke'+_0x59cd30(0x3f2)+_0x59cd30(0x2f0)+'olor;'+_0x59cd30(0x21e)+_0x59cd30(0x56b)+_0x59cd30(0xb6)+_0x59cd30(0x1b5)+'roke-'+_0x59cd30(0x455)+_0x59cd30(0x441)+'ound;'+_0x59cd30(0x52a)+'\x20\x20.mn'+_0x59cd30(0x5f7)+'\x20{\x20fl'+_0x59cd30(0x312)+_0x59cd30(0x3a4)+'-heig'+'ht:\x200'+_0x59cd30(0x40d)+_0x59cd30(0x383)+_0x59cd30(0x511)+'uto;\x20'+_0x59cd30(0x49c)+_0x59cd30(0x150)+'rid;\x20'+_0x59cd30(0x39c)+_0x59cd30(0x646)+_0x59cd30(0x59c)+_0x59cd30(0x4e3)+_0x59cd30(0x1d3)+_0x59cd30(0x5e8)+_0x59cd30(0x1f9)+_0x59cd30(0x22a)+_0x59cd30(0x2eb)+'ax(25'+_0x59cd30(0x110)+_0x59cd30(0xb5)+_0x59cd30(0x179)+_0x59cd30(0x1f4)+_0x59cd30(0x2fa)+_0x59cd30(0x501)+';\x20ali'+_0x59cd30(0x34a)+_0x59cd30(0x34f)+_0x59cd30(0x1e7)+_0x59cd30(0x340)+_0x59cd30(0x365)+_0x59cd30(0x24c)+'paddi'+'ng:\x200'+_0x59cd30(0x4d7)+'6px\x200'+_0x59cd30(0x16e)+_0x59cd30(0x630)+_0x59cd30(0x19d)+'s::-w'+_0x59cd30(0xb1)+'-scro'+_0x59cd30(0x376)+'\x20{\x20wi'+_0x59cd30(0xb6)+_0x59cd30(0x63b)+_0x59cd30(0x49a)+_0x59cd30(0x555)+_0x59cd30(0x1fd)+':-web'+_0x59cd30(0x4ac)+_0x59cd30(0x39f)+'bar-t'+_0x59cd30(0x3b9)+'{\x20bac'+_0x59cd30(0x147)+'nd:\x20r'+'gba(2'+'55,25'+_0x59cd30(0x4bb)+_0x59cd30(0x608)+_0x59cd30(0x407)+'der-r'+'adius'+':\x204px'+_0x59cd30(0x16e)+'\x20\x20\x20.s'+_0x59cd30(0x1eb)+_0x59cd30(0x1ed)+_0x59cd30(0x2d3)+'-radi'+_0x59cd30(0x4ca)+'2px;\x20'+'backg'+'round'+_0x59cd30(0x301)+_0x59cd30(0x1ef)+_0x59cd30(0x399)+'255,.'+'025);'+'\x20box-'+'shado'+'w:\x20in'+_0x59cd30(0x578)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x59cd30(0x1e4)+_0x59cd30(0x4bb)+_0x59cd30(0x18e)+_0x59cd30(0x16e)+_0x59cd30(0x356)+'k-car'+_0x59cd30(0xec)+_0x59cd30(0x500)+_0x59cd30(0x147)+'nd:\x20r'+_0x59cd30(0x148)+_0x59cd30(0x1e4)+'5,255'+_0x59cd30(0x240)+_0x59cd30(0x567)+_0x59cd30(0x41b)+'ow:\x20i'+'nset\x20'+'0\x200\x200'+_0x59cd30(0x629)+_0x59cd30(0x1b9)+'255,1'+'07,15'+_0x59cd30(0x44d)+');\x20}\x0a'+_0x59cd30(0x38d)+'sk-ca'+_0x59cd30(0x2bb)+'ad\x20{\x20'+_0x59cd30(0x49c))+(_0x59cd30(0x279)+'lex;\x20'+_0x59cd30(0x196)+_0x59cd30(0x548)+_0x59cd30(0x521)+_0x59cd30(0x49e)+_0x59cd30(0x18c)+_0x59cd30(0x155)+_0x59cd30(0x1dc)+_0x59cd30(0x4b8)+'11px\x20'+'12px;'+_0x59cd30(0x52a)+'\x20\x20.sk'+_0x59cd30(0x1bd)+_0x59cd30(0x17a)+'e\x20{\x20f'+_0x59cd30(0x58d)+_0x59cd30(0x60a)+'n-wid'+_0x59cd30(0x217)+_0x59cd30(0x16e)+'\x20\x20\x20.s'+_0x59cd30(0x1eb)+_0x59cd30(0x558)+_0x59cd30(0x533)+_0x59cd30(0x506)+_0x59cd30(0x4e9)+_0x59cd30(0x5e7)+_0x59cd30(0x553)+'px;\x20f'+'ont-w'+_0x59cd30(0xf1)+':\x20600'+';\x20col'+_0x59cd30(0x2be)+'gba(2'+_0x59cd30(0xea)+_0x59cd30(0x5ec)+',.45)'+_0x59cd30(0x16e)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+_0x59cd30(0x4a1)+_0x59cd30(0x117)+_0x59cd30(0x22c)+'stron'+_0x59cd30(0x541)+_0x59cd30(0x4a2)+_0x59cd30(0x15b)+'0f5;\x20'+_0x59cd30(0x49a)+'\x20.sk-'+'mbody'+'\x20{\x20pa'+'dding'+':\x200\x201'+'2px\x201'+_0x59cd30(0x24c)+_0x59cd30(0x49a)+_0x59cd30(0x36a)+_0x59cd30(0x4fb)+_0x59cd30(0x439)+'nt-si'+_0x59cd30(0x2c4)+'1px;\x20'+_0x59cd30(0x135)+_0x59cd30(0x5c5)+'4;\x20ma'+'rgin-'+'botto'+_0x59cd30(0x60e)+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x59cd30(0xd4)+'l\x20{\x20d'+_0x59cd30(0xab)+_0x59cd30(0x160)+_0x59cd30(0x2ec)+_0x59cd30(0x31c)+_0x59cd30(0x41c)+_0x59cd30(0x3c6)+'ter;\x20'+_0x59cd30(0xd2)+'8px;\x20'+_0x59cd30(0x1c8)+_0x59cd30(0x4a9)+_0x59cd30(0x255)+_0x59cd30(0x634)+_0x59cd30(0x3e2)+_0x59cd30(0x335)+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x59cd30(0x36a)+'label'+'\x20{\x20fl'+'ex:\x201'+';\x20col'+_0x59cd30(0x2be)+_0x59cd30(0x148)+'46,23'+_0x59cd30(0x5ec)+',.75)'+_0x59cd30(0x16e)+_0x59cd30(0x356)+'k-hin'+_0x59cd30(0x2dc)+'ispla'+'y:\x20bl'+_0x59cd30(0x2dd)+_0x59cd30(0x60c)+_0x59cd30(0x177)+_0x59cd30(0x367)+';\x20opa'+'city:'+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+_0x59cd30(0x36a)+_0x59cd30(0x230)+_0x59cd30(0x39a)+_0x59cd30(0x545)+_0x59cd30(0x401)+_0x59cd30(0x199)+_0x59cd30(0x594)+'idth:'+'\x2026px'+';\x20hei'+'ght:\x20'+_0x59cd30(0x4f7)+_0x59cd30(0x2a4)+_0x59cd30(0x1b8)+';\x20bor'+'der-r'+_0x59cd30(0x5f8)+_0x59cd30(0xed)+_0x59cd30(0xb4)+_0x59cd30(0x13d)+'und:\x20'+'rgba('+'255,2'+'55,25'+'5,.07'+_0x59cd30(0x378)+_0x59cd30(0x5a2)+'\x20poin'+_0x59cd30(0x59a)+_0x59cd30(0x18b)+'\x20none'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x59cd30(0xe5)+'tch::'+'after'+'\x20{\x20co'+'ntent'+_0x59cd30(0x449)+'\x20posi'+_0x59cd30(0x288)+_0x59cd30(0x649)+_0x59cd30(0x280)+_0x59cd30(0x122)+'\x203px;'+'\x20left'+_0x59cd30(0x33a)+_0x59cd30(0x1d8)+'th:\x208'+_0x59cd30(0x2c9)+'eight'+_0x59cd30(0xbf)+_0x59cd30(0x407)+_0x59cd30(0x37a)+'adius'+':\x2050%'+';\x20bac'+_0x59cd30(0x147)+_0x59cd30(0x328)+_0x59cd30(0x148)+'55,25'+_0x59cd30(0x4bb)+',.25)'+_0x59cd30(0x1a7)+_0x59cd30(0x4e6)+_0x59cd30(0x234)+_0x59cd30(0x26b)+'2s,\x20b'+_0x59cd30(0x247)+_0x59cd30(0x331)+'.2s;\x20'+'}\x0a\x20\x20\x20'+_0x59cd30(0x36a)+_0x59cd30(0x230)+'h[ari'+_0x59cd30(0x3aa)+_0x59cd30(0x3d2)+_0x59cd30(0x54b)+_0x59cd30(0x510)+_0x59cd30(0x5bf)+'round'+':\x20rgb')+('a(255'+_0x59cd30(0x369)+_0x59cd30(0x5b1)+'25);\x20'+_0x59cd30(0x49a)+'\x20.sk-'+_0x59cd30(0x230)+'h[ari'+_0x59cd30(0x3aa)+_0x59cd30(0x3d2)+_0x59cd30(0x54b)+_0x59cd30(0x24f)+_0x59cd30(0x5c2)+'{\x20lef'+_0x59cd30(0x2b4)+'px;\x20b'+'ackgr'+_0x59cd30(0x1b7)+_0x59cd30(0x289)+'b9d;\x20'+'}\x0a\x20\x20\x20'+_0x59cd30(0x36a)+_0x59cd30(0x37e)+_0x59cd30(0x54a)+_0x59cd30(0x13d)+_0x59cd30(0x2b5)+'rgba('+'255,2'+_0x59cd30(0x1e4)+_0x59cd30(0x238)+'5);\x20b'+_0x59cd30(0x2d3)+_0x59cd30(0x27b)+'borde'+_0x59cd30(0x52b)+_0x59cd30(0x640)+_0x59cd30(0x4f6)+_0x59cd30(0x4bc)+_0x59cd30(0x430)+'eef2;'+_0x59cd30(0x1dc)+_0x59cd30(0x4b8)+_0x59cd30(0x570)+'px;\x20f'+'ont-s'+_0x59cd30(0x29d)+'11.5p'+'x;\x20ou'+_0x59cd30(0x26d)+_0x59cd30(0x10b)+'e;\x20bo'+_0x59cd30(0x57d)+_0x59cd30(0xfc)+_0x59cd30(0x5c0)+_0x59cd30(0x2a5)+_0x59cd30(0x4e8)+_0x59cd30(0x53c)+'(255,'+_0x59cd30(0x138)+'55,.0'+_0x59cd30(0x3d4)+'\x0a\x20\x20\x20\x20'+_0x59cd30(0x63c)+'ield\x20'+_0x59cd30(0x454)+_0x59cd30(0x12e)+_0x59cd30(0x247)+'ound:'+_0x59cd30(0x2f6)+_0x59cd30(0x574)+_0x59cd30(0x49a)+_0x59cd30(0x36a)+_0x59cd30(0x3ea)+'\x20{\x20di'+_0x59cd30(0x451)+_0x59cd30(0x28d)+_0x59cd30(0x47a)+_0x59cd30(0x59b)+'tems:'+_0x59cd30(0x393)+'er;\x20g'+'ap:\x208'+_0x59cd30(0x490)+_0x59cd30(0x381)+'.sk-s'+_0x59cd30(0x3f5)+_0x59cd30(0x647)+'ebkit'+_0x59cd30(0x3ec)+'aranc'+_0x59cd30(0x62b)+'ne;\x20a'+'ppear'+_0x59cd30(0x5a9)+_0x59cd30(0x4c9)+';\x20wid'+_0x59cd30(0x3dc)+_0x59cd30(0x24c)+'heigh'+_0x59cd30(0x576)+'x;\x20ba'+_0x59cd30(0x13d)+'und:\x20'+_0x59cd30(0x489)+_0x59cd30(0x62e)+_0x59cd30(0x616)+'\x20\x20\x20\x20.'+'sk-sl'+'ider:'+_0x59cd30(0x508)+_0x59cd30(0x4ac)+_0x59cd30(0x3f5)+'-runn'+'able-'+'track'+_0x59cd30(0x1e5)+_0x59cd30(0x139)+'\x202px;'+'\x20bord'+_0x59cd30(0x24b)+'dius:'+_0x59cd30(0x2f9)+_0x59cd30(0x5f0)+_0x59cd30(0x211)+'d:\x20li'+_0x59cd30(0x2cd)+_0x59cd30(0x402)+_0x59cd30(0x611)+_0x59cd30(0x536)+'d,\x20#f'+_0x59cd30(0x4d1)+')\x200\x200'+'\x20/\x20va'+'r(--p'+_0x59cd30(0x2ff)+_0x59cd30(0x144)+_0x59cd30(0x483)+'repea'+'t,\x20rg'+_0x59cd30(0x1d2)+'5,255'+_0x59cd30(0x399)+_0x59cd30(0x163)+_0x59cd30(0x52a)+_0x59cd30(0x104)+_0x59cd30(0x42d)+_0x59cd30(0x645)+_0x59cd30(0x309)+_0x59cd30(0x472)+'der-t'+_0x59cd30(0x3b9)+_0x59cd30(0x459)+_0x59cd30(0x55e)+_0x59cd30(0x3d9)+_0x59cd30(0x33b)+':\x20non'+_0x59cd30(0x5c4)+'dth:\x20'+'6px;\x20'+'heigh'+_0x59cd30(0x3b6)+_0x59cd30(0x452)+'rgin-'+_0x59cd30(0x4b0)+_0x59cd30(0x171)+'\x20bord'+'er-ra'+_0x59cd30(0x210)+_0x59cd30(0x305)+'\x20back'+'groun'+'d:\x20#f'+_0x59cd30(0x4d1)+';\x20}\x0a\x20'+_0x59cd30(0x356)+_0x59cd30(0x29b)+'\x20{\x20fo'+_0x59cd30(0x1a4)+'ze:\x201'+_0x59cd30(0x291)+'font-'+_0x59cd30(0x26a)+'t:\x2060'+_0x59cd30(0x285)+'n-wid'+_0x59cd30(0x44e)+_0x59cd30(0x63b)+'text-'+_0x59cd30(0x196)+':\x20rig'+'ht;\x20c'+'olor:'+_0x59cd30(0x53c)+'(246,'+_0x59cd30(0x4f1)+'42,.8'+_0x59cd30(0x4bd)+_0x59cd30(0x38d)+'sk-co'+'lor\x20{')+(_0x59cd30(0x31a)+'h:\x2034'+'px;\x20h'+'eight'+_0x59cd30(0x233)+_0x59cd30(0x10d)+_0x59cd30(0xfd)+_0x59cd30(0x4cd)+_0x59cd30(0x2d3)+_0x59cd30(0x275)+'us:\x206'+_0x59cd30(0x36d)+_0x59cd30(0x247)+'ound:'+'\x20none'+';\x20pad'+_0x59cd30(0x5da)+_0x59cd30(0x2e2)+'ursor'+_0x59cd30(0x386)+_0x59cd30(0x49e)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x59cd30(0x3e0)+_0x59cd30(0x439)+_0x59cd30(0x1a4)+_0x59cd30(0x2c4)+_0x59cd30(0x291)+'color'+_0x59cd30(0x301)+_0x59cd30(0x471)+_0x59cd30(0x197)+_0x59cd30(0xe2)+_0x59cd30(0x35d)+_0x59cd30(0x1f5)+_0x59cd30(0x4b9)+'x\x200;\x20'+_0x59cd30(0x49a)+_0x59cd30(0x36a)+_0x59cd30(0x421)+'err\x20{'+_0x59cd30(0x123)+'r:\x20#f'+_0x59cd30(0x1b0)+_0x59cd30(0x16e)+'\x20\x20\x20.s'+_0x59cd30(0x347)+_0x59cd30(0x308)+_0x59cd30(0x3a9)+_0x59cd30(0x632)+_0x59cd30(0x20e)+_0x59cd30(0x501)+_0x59cd30(0x407)+_0x59cd30(0x5b4)+_0x59cd30(0x52e)+_0x59cd30(0x46d)+'radiu'+_0x59cd30(0x13e)+_0x59cd30(0x2ee)+_0x59cd30(0x47c)+':\x208px'+'\x2016px'+_0x59cd30(0x579)+'kgrou'+_0x59cd30(0x1e2)+_0x59cd30(0x536)+_0x59cd30(0x3bc)+_0x59cd30(0xb3)+_0x59cd30(0x1d0)+_0x59cd30(0x634)+'-size'+_0x59cd30(0x335)+_0x59cd30(0x4b5)+_0x59cd30(0x60c)+_0x59cd30(0x26a)+_0x59cd30(0x181)+_0x59cd30(0x3bb)+_0x59cd30(0x5a2)+_0x59cd30(0x1a9)+'ter;\x20'+_0x59cd30(0x49a)+_0x59cd30(0x36a)+_0x59cd30(0x2a2)+'over\x20'+'{\x20fil'+'ter:\x20'+_0x59cd30(0x444)+_0x59cd30(0x3ca)+_0x59cd30(0x4d4)+_0x59cd30(0x16e)+'\x20\x20\x20');window['addEv'+_0x59cd30(0x38a)+_0x59cd30(0x2d9)+'r'](_0x59cd30(0xe9)+'wn',_0x4bd20e=>{var _0x16ec2c=_0x59cd30;'oINou'===_0x16ec2c(0x50c)?_0x4bd20e[_0x16ec2c(0x3bd)]==='Inser'+'t'&&(_0x4bd20e['preve'+_0x16ec2c(0x4ea)+_0x16ec2c(0x243)](),_0x13a641()):(_0x2c5c41={..._0x4e4ce3},_0x12a870['GIKuN'](_0x2e3f85),_0x450571[_0x16ec2c(0x209)+'d']());},!![]);var _0x5cc8ff=document['creat'+_0x59cd30(0x2fb)+_0x59cd30(0x3d3)]('div');_0x5cc8ff[_0x59cd30(0x154)][_0x59cd30(0x223)+'xt']=_0x44b4b1['dxPBm'],_0x5cc8ff[_0x59cd30(0x2a9)+_0x59cd30(0x323)]=_0x44b4b1[_0x59cd30(0x3db)],_0x5cc8ff['title']='Sakur'+_0x59cd30(0x523)+'r',_0x5cc8ff[_0x59cd30(0x3b8)+'seent'+'er']=()=>_0x5cc8ff[_0x59cd30(0x154)][_0x59cd30(0x135)+'ty']='1',_0x5cc8ff['onmou'+'selea'+'ve']=()=>_0x5cc8ff['style']['opaci'+'ty']='0.5',_0x5cc8ff[_0x59cd30(0x1f7)+'ck']=_0x3725c7=>{var _0x7c3a54=_0x59cd30;if(_0x7c3a54(0x3f9)!==_0x7c3a54(0x427))_0x3725c7[_0x7c3a54(0x2cc)+'ropag'+_0x7c3a54(0x129)](),_0x12a870[_0x7c3a54(0x203)](_0x13a641);else for(var _0x199d91 of['kour-'+'io_30'+_0x7c3a54(0x59f)+'-pare'+'nt',_0x7c3a54(0x2e4)+'io_72'+'8x90-'+'paren'+'t',_0x7c3a54(0x2e4)+_0x7c3a54(0x3e5)+_0x7c3a54(0x43e)+_0x7c3a54(0x4f2)+'nt',_0x12a870[_0x7c3a54(0x2f1)]]){var _0x4a843b=_0x4282aa[_0x7c3a54(0x28b)+_0x7c3a54(0x4f8)+_0x7c3a54(0x214)](_0x199d91);if(_0x4a843b&&_0x199d91===_0x12a870[_0x7c3a54(0x2f1)]){var _0x35d21e=_0x4a843b[_0x7c3a54(0x136)+'ren'];for(var _0x54ba97=0x584+0x58*0x1+-0x6*0xfa;_0x12a870['jDmuL'](_0x54ba97,_0x35d21e['lengt'+'h']);_0x54ba97++){if(_0x35d21e[_0x54ba97]['id']&&_0x12a870[_0x7c3a54(0x5fc)](_0x35d21e[_0x54ba97]['id'][_0x7c3a54(0x5bd)+'Of'](_0x7c3a54(0x2e4)+_0x7c3a54(0xd0)),-0x160*-0x7+-0x2231*-0x1+0x1*-0x2bd1))_0x35d21e[_0x54ba97][_0x7c3a54(0x154)]['displ'+'ay']=_0x12a870[_0x7c3a54(0x16a)];}}else{if(_0x4a843b)_0x4a843b[_0x7c3a54(0x154)][_0x7c3a54(0x49c)+'ay']=_0x12a870['EZEBq'];}}},document['body']['appen'+_0x59cd30(0x419)+'d'](_0x5cc8ff),_0x3e2bb8(),requestAnimationFrame(_0x18e644),console['log'](_0x44b4b1[_0x59cd30(0x527)],_0x34ef73[_0x59cd30(0x124)]);});})()));function _0x1054(){var _0xff97b=['CYbnB3y','i2zMzG','lNnRlwm','B2XVCJO','s1jSAgK','odiPoYa','Bg9NBY0','s0f0zKq','Dg9Nz2W','C2XPy2u','BMC6idq','t1vsx18','sw5ZDge','A2L0lxm','ktSGBwe','zxqGmca','igjHBM4','Dg9WoIa','lwjVEdS','zvrHA2u','nxWZFdq','AxnPyMW','nxb4oYa','yMX5lum','z3jHDMK','Aw5NoIa','zZOGmNa','rfvMt3e','nsWYntu','y29SB3i','ktSGFqO','BhKGkhi','AvDWsNi','C2v0sxq','lJv6iIa','B250lxC','CgXHEtO','ntiWueXxANnY','yxvSDca','DgHPCYa','D2HLCMu','lxnLCMK','ig5VBMu','Dxm6ide','zsbZzxi','zxG6mJe','ida7igi','BtOGmJq','DMfSDwu','ihWGrvi','zJzIowq','ihDOAwm','z1LOweC','kdeUmsK','s2v5vW','zsWGDhi','idrWEca','Aw4TD2K','zIXZExm','u2fRDxi','CNzMBu0','BMvJyxa','v2vHCg8','De5WtuW','CIbNyw0','u2HHCNa','zgvZ','y2n1CMe','B2X1Bw4','lKXVy2e','kYbmtui','BNnPDgK','ihnOB3q','mcaXChG','EYbMB24','BNrezwy','zsbJEd0','zxzLBIa','y3vYC28','AwX5oIa','r29Kl2q','igfWCgW','mJm4ldi','lxbHCMu','CMuGkfm','DhjHBxa','Fdv8mxW','nNb4oYa','mtrWEdS','zw1LBNq','kg92zxi','A3ndChm','BwrLC2m','yMLKt1i','mNWZFda','phbHDgG','wLrhuMq','EYbIywm','C3rHCNq','mJvWEdS','DgnOihq','y2HLCYa','t0HLywW','CM9UzYa','r3bhwMi','oI13zwi','AwXLzdO','jsK7ic0','nc00lJu','B0LoB3u','CYbHBgW','A3Hby1C','te1c','iL0GEYa','lxK6ige','ys5RB3u','zvbSDwC','uJOG','D21vv0q','B2LS','CM9Rzxm','A2n4ANy','owqIihm','w3nHA3u','zcbNCMu','AxrPyxq','zs1PDgu','Dg9Y','tw92zw0','Aw9UoMy','CZOGy2u','tg9Hzgu','ysblB3u','BwLZyW','CM9WywC','uwrtA0m','tuj2rw8','C2v0x3q','B3bLBG','ih0kica','CI1Yywq','Awr0Aa','vfLTC2G','mdSGyM8','ltiUnsa','yMvNAw4','igvSC2u','nsWUmdu','BguGC3q','ig9U','CMjUweS','zMy2yJK','Ahq6idi','tw92zq','oJiXndC','re52zMK','q2XVC2u','ihjNyMe','Bw4Ty28','s2v5uW','uK1c','CMqTDgK','zYb7igm','lwjHBNi','oYbJB2W','A2ftsvG','B3nPDgK','A2v5C3q','s2LSBgu','lwL0zw0','B3vUzgu','ihSGyMe','iNrYDwu','zJmY','AtmY','yM90Dg8','ruPTANC','z2v0qxq','BNrLEhq','rhnNwxO','ztOGmtm','B1jLy28','ic5TBI0','vgHLC2u','DxjDifu','zc10Axq','C2STy28','whDRugG','AwrLCG','BsbJzw4','DLHbs1q','yMTPDc0','vMfSDwu','ieDLDfy','z29K','B3qGBwe','rvHqxq','yuTVDxi','zhjVCc0','BwLKzgW','oYbIB3G','qxbWBgK','s2rWuKO','DMLLD0i','A2uTD2K','lIbuDxi','C2fMzq','B2f0Eq','B3nLihm','nNb4idK','Dg9Wrgu','oWOGica','zxmGEYa','nde5oYa','DhjPyNu','DdOGoha','sg92vMG','C2v0ida','oYbIywm','Fdn8nhW','zguSihq','DdOGmZq','Ec1ZAge','zMyP','qKPUuwW','uw11z3u','y2HdB2W','DhLSzq','nYWWlJm','DgfIihS','yM90Aca','BhrLCJO','B2fKzwq','AgvSza','DgLMEs0','vg90ywW','DgLVBI4','CgfYC2u','Bgv4oIa','ywrKrxy','C3rLCa','te9ZExq','zvn0EwW','rg9gB1a','zMLdwve','DMu7ihC','EfbACvi','mNWXnNW','mtj1qxPpBxK','CgXPy2e','t0zgigi','DgvYoYa','AwDUlwK','yxrLlwm','kdi1nsW','Ad0ImIi','mhGYnta','CM91BMq','BNfju3y','CNnVCJO','s2v5C3q','Bw91C2u','r1PmDNG','zgTPDa','B3nWywm','B3n0zMK','yw5JztO','ktSkica','ChG7ihC','ig1PBIG','txrVzMq','rxHW','Au5kr3a','B2vgu3m','mtu3lc4','uNvUDgK','mxb4ihi','zgvYoIa','ieTLzxa','CdOGmti','C3zNiJ4','Axr5oIa','t3zLCNC','yvrcAfe','ELLZBKC','nJTWB2K','Aw5KzxG','mJiSocW','yMfJA2C','Aw5Zzxq','BMXMuhe','zNrLCIa','id0GzMW','ztSGD2K','DhK6ic4','r29Kie0','nYWWlJC','u2nHBgu','ChG7cIa','zgvZyW','tgvMDca','AeLPvK4','BI1TywK','ig9YigS','D2LKDgG','zhbY','Cg94tK8','ndGZnJq','mhWZFdq','y29PBa','ocKPoYa','icaUBw4','AguGDxm','z2rvrK8','ywqUieK','zgLUzZO','CK9xBwu','Bw4TC3u','Dhnzy1e','rw9LqM8','lwzPBhq','BMnL','C3rYB2S','weXjzgK','zw15igm','CwfiBw4','lxrVCca','rgvszMG','Dc1ZAxO','CgvHDcG','nJq2o2m','CMvWBge','4Ocuig5Via','ocWYndi','DeHQEhK','oIbHyNm','sM1syK8','igjHy2S','zufMsuy','rhPxEeq','y3qGB24','Aw9U','B21OvgW','zwCGzMe','lwnVBhm','ywrPDxm','lMLVig0','icaGyMe','yKP6AeC','ExHRBKC','DMLHifm','zcbZzwu','y3nxBg0','DgLKzs4','idGWChG','yxbWBgK','ChG7igy','C2HHzg8','zxjYB3i','zM9YBxm','AxHLzdS','lc4WocK','DxjDig0','mtSGBwK','BgW+','zM9UDc0','yw5Uywi','BtOGnNa','mIaXmK0','B24U','zw50kcm','yNv0Dg8','zvjHDgu','BIb0Agu','rvrPDLG','DdSGFqO','BsbVBIa','z0LVAhK','Bw9fEha','tvrrB1C','uw5SrMC','qw1UANq','B3G9iJa','B2TqrNu','zwjUs04','qxbWBhK','Axb0kq','BwvsDw4','yxnWyvO','mNb4oYa','Dc1Iywm','khjLBg8','uuHou0m','ohb4ksK','idfWEca','vvDnsYa','ztOGBM8','Aw4GC2e','ExrHC0S','CgfYzw4','uMf5ree','icaGlM0','vKLJy04','zwXMoIa','ldePoWO','igzVBNq','zwfSDgG','zgvSzxq','lMrSBa','sxnYr3i','EdSGz2e','Dgv4Dee','ohb4oYa','lNnRlwy','qwnus20','wxPVww0','Be1VDgK','AxvZoIa','tLPetKC','igLZigm','rNjHBwu','ChvZAa','zxi6oI0','DgvTCgW','ihSGlxC','tgLZDa','igfIC28','mdb2DZS','AguGCMu','v2vItw8','CMLirLm','Dw5Kzwq','ihWGC2G','z2v0','AxnWBge','zwfKige','DhLWzq','DMC+','C2v0uhi','ohG5mc0','zwjRAxq','tM8Gzw4','Bg9YoIa','EdSGyMe','mwzYksK','zhrOoIa','AwvSza','CMXHEsa','vfnxB3K','zuv4Ca','y2HtAxO','ChLos3C','svz3yNu','ltiUns0','oIa4ChG','igrHBwe','DhrPBMC','yxjPys0','v2LKDgG','uMvMAwW','s0z2sfC','BxKGC2u','zw50CZO','B25SEsW','A0PcCwu','zxPPzxi','rNnNwvi','u2vNB2u','yMX1CG','mcWWlJC','ywHdsK0','Aw9F','zwfKEs4','z2fWoIa','mtySmc4','C2STy3q','DgXLCW','iefmtca','nIaXoci','CMvZDg8','BwLUkdq','Aw5JBhu','B3jZige','BhrOige','yxb0Dxi','B3bLCNq','D1nyr2i','qMXVy2S','zw50rwW','mJqYlc4','lc4WnIK','kdeWmhy','AY1ZD2K','BgfZDeu','yMHVCa','AwLstfi','A2v5zg8','ndySmJm','Ag9VA0m','zc5VBIa','oIa5oxa','u2n2Bgi','C0vhruC','zMLUza','zwLNAhq','Dg87zMK','zxzLBNq','y3jVC3m','DhjVA2u','nJaWia','yxbczwm','zw5HyMW','t3bNDuS','ls1W','igjVEc0','zg93oIa','CMrLCJO','CMeTA28','zeLntfK','mNWXFda','CIGYmNa','DMrgAeC','mcuUifm','icaUC2S','rwfJAca','C2STDMe','ihDLyxa','BI5MAxi','AwXKigG','BMqGt0G','oIbUB24','mxW0','EdSGyM8','zMLSBa','yNvotNa','mhb4lca','Bwf0y2G','AwHdvey','CIb2ywW','BsbSzwy','rNvTswK','ig1HEsa','yxjKlxq','Dg9W','z1P1r28','y2SP','zw51ihi','y29TyMe','yxnLBgK','CML0zxm','psjTBI0','Aw5NicS','x19tquS','ihrVCdO','ignVBg8','DxDTAW','CY1Zzxi','uMf0zq','DMvTzw4','ChjLDMu','yxrPB24','C3rHBgW','zwqGyw0','BgvMDa','BMn0Aw8','BIb7igi','mtj8m3W','yw1L','qwrIBg8','zwXK','vwLIv2e','B0TOD2m','B3bHy2K','y2HPBgq','tfH4Chm','mJu1ldi','AwDODdO','icaGica','psiJzMy','CJSGzM8','y2TNCM8','CZOGoha','AxrJAa','Bw4TBg8','t0Hhqw8','igfSAwC','u2v0r2e','ksaXmda','y2vZlG','DMvYlxy','A2DYB3u','z2jHkdi','ueP6wNC','B3zLCMy','CIdIGjqG','Cg9PBNq','Cg9ZAxq','EdSGAgu','mtb8oxW','yxK6igC','tM8Gu3a','DMvYihS','mJeZnJm3ne5hshn2vG','C3r5Bgu','idHWEdS','mhWXFdu','ywnPDhK','ntaLktS','C2HVB3q','yKvPAvi','icnMzMy','sNvTCca','BLbSyxq','DxjZB3i','Agf0igq','EtOGzMW','Bgf0zwq','EYbKAxm','lJa4ktS','mdi1ktS','BfrorKe','ihSGD2K','yM9KEq','A2vZig8','zwv6zsa','rvPfqNe','DxjH','wKDmvK8','CKj6B1O','oYb9cIa','zMLSBfm','uMvJB2K','ltjWEdS','u2TPChm','sMvYDNC','yxr0ywm','yxjNzxq','n3W4Fde','C2L6ztO','idi0iJ4','oYbHBgK','lxrPDgW','Fdj8mxW','Be9bDM0','ChGGDwK','vgPoEuC','BgrYzw4','ieLZr3i','DdOGnZa','D0nsB2K','CKnure8','mJqSmtC','zNvSBhm','BgvZiem','mJeXnJvUuNDZwLi','v2rZzve','AwXSihK','AwvZlG','zMXLEdO','igDHCdO','vMLZDwe','lc4WnsK','B3C6ida','DgLKzvC','CM0GlJq','AxrPB24','zciVpJW','s3HfB1u','C2v0','ywXPz24','ldiZocW','BY1ZDMC','zwXHDgK','Bw92zw0','txrzDM4','B0H6quq','BI1JB2W','y2XLyxi','DhLqy3q','y2HLy2S','icaGkIa','iezPCMu','iezquW','BNqTC2K','A2DyrfG','tePuzNe','oYb0CMe','As1TB24','ihbVAw4','rgfUz2u','ywiUywm','yxjJ','CMfWAwq','CMfUC3a','Du5JBgC','zJDHotm','AgfZ','CgHOtxC','DhjPA2u','C2vYDMu','mJSGC3q','A3nqB3m','B3vUzdO','zxi6ida','CMDIysG','Ag9Szsa','ihn0AwW','igvYCG','lwnHCMq','BgLUzvC','C3bHBG','wejgCgO','Aw50zxi','CI51As4','u0HxAuW','zxjSyxK','qsblt1u','Awr0AdO','zw50zxi','CgfKzgK','tLPiENG','De5OBgm','AgfPCG','Au52D3G','DwHMCLG','zefvs0K','t1jLy3a','i2zMzJS','icaGig8','yMeOmJu','CZOGCMu','nhWXnxW','DxjDigG','C21HBgW','vvjbx0S','oYb3Awq','C2f2zq','Ag9ZDg4','BMDht2G','ihbHzgq','A2v5Dxa','BNnWyxi','vw5PDhK','C0zOzLG','rwXLBwu','BMq6icm','zfH4qNi','ntuSmJu','ihSGAgu','sfrls2O','oIbZDge','mZm4mZK4nfHUA1zksW','mtn8nNW','CNL3ELq','AY1Jyxi','mdSGFqO','zcb7igi','wKz4Eve','ysGYntu','EMHzvue','igq9iK0','wNrYtfG','uxjSCwW','z24TAxq','ywrKAw4','EuvUz2K','B25JBgK','BMHwvMS','yxv0BY0','yNb1zNi','ChGPoYa','ihn5C3q','y29SCZO','rMLLBgq','B29Rihi','lxnHBNm','EtOGz3i','uMvJDa','BwTOuw4','AwXS','idmYChG','B3i6icm','BYb7igq','zhrOoJe','CMvSB2e','idK5osa','DgvhzNm','BMLUzW','ig9Wywm','zMXLEc0','BwvZC2e','zgL1CZO','z3jVDw4','ugn0','AgT4sfi','qNLjza','D2fYBG','ANvTCfa','DgG6ida','AezlvvK','DgGUsw4','rgPLEuu','rw5NAw4','r0DezLa','zw4GDg8','ihn0CM8','mtiGmJe','sNvhuMu','DgHLihC','Dg87ih0','y3nZvgu','sM16EeG','iNjVDw4','zMLSBd0','BK1gs1C','ugn0ChC','idaGmJq','zMLSBcW','oNbVAw4','AxrSzsa','B25PBNa','A3mGyxi','ywrK','C3DPDgm','vuH0r24','tuLtu0K','oIaYmNa','B246igW','wvz3Bwi','ihWGz2e','ywrIBg8','nsWUmdm','igHVB2S','y2uGB3y','AuD4zuq','zdSGyMe','y0T0rLa','igfUzca','C2STCMe','lc4WncK','BwvKicG','idiWmg0','yxvSDa','zgL2','CIbHzhy','mtCXnZaYBe11tLfn','ywnRz3i','BYb0Agu','y3jLyxq','mNm7Cg8','zxiTCMe','mhb4oYa','CYbLyxm','DMfS','iL06oMe','u0flvvi','BdOGAw4','ihbSywm','Cu5ZC1a','yw5Jzs4','ChGGmdS','BMC6igi','C2u6Ag8','yw1Hz2u','BgvUz3q','mxW1Fdm','B2HKyKC','q3nxqwq','zxi6igi','y2L0EtO','u2fMzsa','zw51','t3jgENq','oIbPBMG','q29TyMe','Fdv8mhW','odbWEcW','tfP0Avi','v3jHCha','BI13Awq','qxHuzvi','D2vPz2G','zwz0ic4','wKPKDK4','DgXPBMu','Dw5PDhK','ihLVDxi','EsaUmZu','sLnAEvK','z2v0sxq','DwTPBLK','CMLZAYa','lxjHzgK','Aw5Mqw0','vNDpC1y','Ag9VA04','yxK6igy','CM9Szq','oIaWoYa','yw5LBca','zwfK','igrLzMe','BMqIihm','Bhv0ztS','DdOYnNa','lwfWCgW','AgvZ','DgvJDgK','mdSGBwK','igH1CNq','B095vue','DgLVBJO','icnMzJy','tu9ersa','z2v0rwW','tMfTzq','oIbMBgu','v0fttsa','t25iyuW','mxb4ida','mxb4oYa','phn2zYa','vufVzKm','lJuGms4','Dgv4Dem','vK5WEK8','D0nVBg8','zxH0','oJa7D2K','B3vUDgu','AY12ywW','ywXSihq','AxPLoIa','CMvJDa','B246ig8','Ehf5yuC','BwLU','yNrUoMG','BM93','igjVCMq','idaGmca','C3rYAw4','BI1PDgu','ihrOzsa','Aw5Uzxi','sNrtrLq','BNn0ywW','B2vZig4','B2X1Dgu','ywXSzwq','y2vSzxi','EvD2D3G','Dhj1zq','AfrXu08','Dvrzrxe','DdOGmtu','Dw5KoIa','EYbIB3G','CIiSici','DgvTlxu','oYbMB24','q3vZDg8','CMqTAgu','pc9ZBwe','Aw5WDxq','B3i6ihi','zgv2Awm','ywLSzwq','msWUmZy','CMvHzey','D0jSDxi','EMu6ide','CNjVCG','swyGCMu','B2reAwu','ihjLBg8','ChG7igG','ihWGBw8','CI1ZzwW','C3rVCfa','BMvHCI0','Bw4Ty2W','nIa2Bde','zxrhyw0','C3bLzwq','CZOGmty','B3jKzxi','AM54Dhq','mJqWiey','CZPUB24','Bg9HzgK','q0fovKe','C3rLBMu','DhKGmc4','DfHYsve','Dcb7igq','B2nRoYa','qunuAYa','lcbZyw4','z3jPzdS','BM9Uzq','ida7igm','D2fPDgK','A291CI0','C2v0qxq','zxjZ','zLzese0','Fdf8mhW','EtOGmdS','yY0XlJu','ig1PBM0','zxG7ige','B3rZlG','EdSGCge','uMfWAwq','CMvUDem','ANnZEM8','vgfRzxm','BwuG','nZaWia','u3rHDhu','icmYmJe','zwfWB24','l1jnqIa','idjWEdS','zw1ZoIa','zuvSzw0','mhWXmxW','BM9szwm','BML0igy','lca1mcu','z2LMEq','oIbYz2i','ugf0Aa','s0rgs1m','A2uTBgK','iduWjtS','nJaWide','iIbZDhi','ihSGywW','D2vIA2K','ChG7iha','mtjWEca','m3WXFdi','sgvHBhq','zM9UDa','igzVDxi','lM1Ulxa','sw5MAw4','zxG6ide','ywLYlG','CdOGmta','uunfExG','r2zIEwy','ihnVig4','thbeEhG','y3jLBwu','ihDPzhq','q1HRyxG','BgLNBI0','Bw92zvq','BfjHDgK','BIbZAwC','DePmrNy','BgfIzwW','BKLSt3G','sfrnta','sgvPz2G','x19ZywS','oIa2nta','A2zky0q','BMq6ihi','Du14DgK','zwLUC3q','s2vSzNe','mciGCJ0','rhfVsfy','DgvZDa','yMvS','ywXSig8','B3vUzca','nsKSida','rgLZywi','tNfJr2y','oIaXms4','ihrOAxm','BgLUzw4','nLrLvePnrW','Ag9VA0C','oIaZChG','CMfUy2u','yxmGBM8','twzSt1i','B25LigK','mJu1lde','CNq7igC','vhLpq04','nYWWlJG','Bw4TC2K','zw50CW','Eca2ChG','Bxm6igm','AY1IDg4','zxiTzxy','igzPBgW','z24Ty28','Dhm6yxu','kYbtCge','zg93BG','mZuSmJq','BNrLBNq','BM9UztS','DgL0Bgu','yunmvxe','mvLxB2PjtG','yNrgsMe','igv4Axq','icaGlNm','D2L0Aca','mhWYFdy','B3jRDwy','Bw8GDg8','zw0TDwK','A3nty2e','nsK7iha','ltqTnY4','oIaZmNa','BgLUzvq','B2rL','s2HqvKm','wwv1tey','qK9Hwgu','yxa6ide','B2STCMu','ideWChG','ruf5yvC','ldeWnYW','ic5ZAY0','AuriAva','ys11Aq','ChG7igi','CYbZChi','zhrcDLe','v01ligK','iKLUDgu','C2STAgK','BI1JBg8','DeHAvwy','Bw4TBwe','BgXIyxi','BMCGzM8','ktSGy3u','sxz4DwG','zgvYlxi','tufiALq','ywn0Axy','m3W3Fdq','zMLLBgq','BNrLCI0','Cc1ZAge','cIaGica','De1Ltfq','CMzSB3C','BMqGBwe','nJqYotmXog1hDwfqvW','oIbWB2K','D1LMtLm','igXPBwK','idqGnc4','zw50tgK','qxnZzw0','zgfTywC','icaGic4','y3K9iJe','B250zw4','vMHvAKy','tNrKs3K','BNnSyxq','ignLBNq','nhW1Fdy','CMfUC2K','uujZvM0','y29TCgW','CxvLCNK','ldi1nsW','Acb7iha','nxm0idi','z3jPzc0','AcaTidq','B2XPBMu','y3jVBgW','CMvU','zMLSBfq','DgvYigm','i2zMyJm','oYbTAw4','CI52mq','Awy7ih0','ifTfwfa','y2vUDgu','AwDUlxm','ys1JAgu','zxj2zxi','C2fMzu0','whHhEeS','mtm2s01quKHq','C2STC2W','tKnoquW','r2D2ywu','nJiWChG','zcWGyw4','yM9Yzgu','EvbOzNe','DdOGnNa','qwLPCNO','B25TB3u','AhvTyIa','yK11wfe','mdSGy3u','zdSGy28','y29Kzq','mdbTCY4','u0z2A3O','C2HVD24','kdaSmcW','lwXPBMu','CM9Wlwy','zLrYuLa','Bwf4','oIbJzw4','zg93kda','mcbOB28','mNb4ksa','Dg5LC3m','Dxm6idi','C2fRDxi','tKjMvK4','yxrSEsa','zvbPEgu','ug9ZAxq','zxbwz2q','y2TLzd0','zw50','nsK7ih0','Cg9W','sgLKzxm','igrPC3a','zwn0oIa','yxbWzwe','rgLL','t0Hly0O','DgG6idK','zMLSzw4','zsaOt0G','twLZyW','lw5VDgu','Bw4TDgK','lxnPEMu','CfLNsM8','q2nxzem','Aw9FmZa','oIb0CMe','txLLvgm','AguGzgu','rxrlBKu','CMfUz2u','mdCSmtu','lwfWCgu','CvnksNG','idqTnc4','C3bSAxq','BgLJyxq','yxrLvge','oIbJDxi','igHLAwC','Cuj1Dw8','BgLKzxi','mc41o3q','AMLTsKO','y2XHC3m','z2Hnq28','ywqGDg8','z29KrgK','DhzcB2O','B3zLCMW','DgHYB3C','A2D1z28','zxnJ','B246ihi','z3jHzgK','AwDUyxq','DMCGEYa','ChDKqM4','igvUDgK','oYbIB3i','yxrJAgu','r3jHDMK','zMXLEdS','DhvYyxq','Fdj8m3W','oYbVDMu','wuz0wvy','lcbPBNm','yw5LBc4','CNrPzgu','BJOGy28','i2zMnMi','yxKGB24','icaGzgK','yxjLBNq','D3jPDgu','oIaXnha','zenOAwW','DhKGjq','lxnOywq','AxrLBxm','tw9Kzsa','z1vlr1O','iM5VBMu','nwmWidm','BM90zs4','idrWEdS','DMvYBge','BhbAuK0','Bg9Hzgu','Aw46ida','wgfpyMW','AM9PBJ0','BgLNBG','BMDL','rNLpBeO','y2fSBa','lxnSAwq','B24Gzxy','s2XruuS','oIaJzJy','z29KicG','igjHBIa','AgvPz2G','y3jLzw4','EI1PBMq','tvvVsvC','BdOGBM8','B290zxi','ihSGzM8','Cg9Uj3m','AgvHzgu','igXLyxy','ihrVide','mhG2mda','B29RCYa','lK92zxi','yxa6ihi','lcbJywW','Ag9VA3m','yNjPz2G','y2vdAgK','zvbSyxK','ywWGBwu','ywn0A0S','oIaIiJS','rw1su3C','yxbWzw4','zZOGnNa','nYWUmJG','DgG6idi','Bw92zq','ztOGmtC','C3bSyxK','EdSGBwe','wMDLEMC','B3b0Aw8','BgLUzwm','ihSGB3a','Fdv8nhW','DhKGDMe','EYaTD2u','AezhquW','rvDXDfG','zsb0CMe','yw5ZzM8','u0fgrsa','nsaWlti','B25JAge','oYb1C2u','wurkvwS','ig5VigG','mcWWlJy','rKnoDfK','oc00lJu','BgfJzs0','BerPzsK','odaSmtK','De5Vzgu','CYaNzNu','qw5otwm','CMrLCI0','Bg93zxi','y2fWDhu','wMvYB2u','ysGYndy','Dc1ZBgK','C2STy2e','DgG6idu','BNq6igm','vfDJtKu','s2v5ra','AsXZyw4','vvDnsW','EdSGywW','BI1ZDwi','zgrPBMC','mZCZotK3oejhwvv4DW','AwWGC3a','ndaXnJG2nvf1thr3zG','igzSzxG','mtbWEdS','zsb2ywW','jsbUBY0','q3jVC3m','BhmGysa','DxmGywm','q1r6wgq','u3rHDgu','DhjHBNm','sKjdtM8','suHLBfi','C2HPzNq','zNbZ','lwv2zw4','u3bLzwq','ChG7ih0','y2fWu2G','CvDRCe8','rKHUtM0','lZ48l3m','z2fTzuW','ign1CNm','q1btihi','Fdf8mG','EsbKzwy','FqOGica','sg1vAMu','zgLZCgW','zhfptKu','BNrLCJS'];_0x1054=function(){return _0xff97b;};return _0x1054();}
