// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.9.7
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
function _0x43b7(_0x285fb8,_0x32631f){_0x285fb8=_0x285fb8-(0x1*-0xbf+0x230d+-0x20fa);var _0x6d70f8=_0x3b2b();var _0x46c083=_0x6d70f8[_0x285fb8];if(_0x43b7['KljppI']===undefined){var _0x55c05a=function(_0x43baea){var _0x7a35e7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x36aba6='',_0x3148bf='';for(var _0x2b791d=-0x19c5+-0x23c0+0x3d85*0x1,_0x1c12b0,_0x589e02,_0x231dec=0xe*-0x29e+-0x19*-0x117+0x965;_0x589e02=_0x43baea['charAt'](_0x231dec++);~_0x589e02&&(_0x1c12b0=_0x2b791d%(0x239b+-0x1*0x14d1+0xec6*-0x1)?_0x1c12b0*(-0x22c1+-0x1*-0x80b+-0x1d*-0xee)+_0x589e02:_0x589e02,_0x2b791d++%(0x1d6f+-0x18b6+0xf1*-0x5))?_0x36aba6+=String['fromCharCode'](0xc8+0x3*0xa22+0x1e2f*-0x1&_0x1c12b0>>(-(0x2032*-0x1+-0x3*-0xc7+-0x3*-0x9f5)*_0x2b791d&0x1*-0x1966+-0x9c2+-0x2*-0x1197)):0xb54+0x1d8*-0x4+-0x3f4){_0x589e02=_0x7a35e7['indexOf'](_0x589e02);}for(var _0x42edbe=0x135*0x12+-0x1e3a+-0x2*-0x440,_0x104885=_0x36aba6['length'];_0x42edbe<_0x104885;_0x42edbe++){_0x3148bf+='%'+('00'+_0x36aba6['charCodeAt'](_0x42edbe)['toString'](0x1*-0x1945+-0x12ad+-0x2c02*-0x1))['slice'](-(-0x235d+-0x18e+-0x3*-0xc4f));}return decodeURIComponent(_0x3148bf);};_0x43b7['YfgInW']=_0x55c05a,_0x43b7['JEjLFd']={},_0x43b7['KljppI']=!![];}var _0x3342c5=_0x6d70f8[0x126a+0x224b+-0x34b5],_0x78138d=_0x285fb8+_0x3342c5,_0x180513=_0x43b7['JEjLFd'][_0x78138d];return!_0x180513?(_0x46c083=_0x43b7['YfgInW'](_0x46c083),_0x43b7['JEjLFd'][_0x78138d]=_0x46c083):_0x46c083=_0x180513,_0x46c083;}(function(_0x4a33e6,_0x1bf890){var _0x1ff7bc=_0x43b7,_0x1de133=_0x4a33e6();while(!![]){try{var _0x36f5fa=parseInt(_0x1ff7bc(0x1c9))/(0xa20+0x2659*0x1+-0x1028*0x3)+parseInt(_0x1ff7bc(0x3a2))/(0xc46+0x1560+-0x21a4)*(parseInt(_0x1ff7bc(0x601))/(-0x111e+0x81e+0x903))+-parseInt(_0x1ff7bc(0x655))/(0x1b1e+-0x3*0x68a+-0x77c)+parseInt(_0x1ff7bc(0x1f6))/(-0x1181+0x245e+-0x24*0x86)+parseInt(_0x1ff7bc(0x4e9))/(0x48b+0x275+-0x6fa)*(parseInt(_0x1ff7bc(0x454))/(0x20d2+-0x1e7*0x14+0x541))+parseInt(_0x1ff7bc(0x653))/(0x13*-0x15d+0x270b+-0x68e*0x2)*(parseInt(_0x1ff7bc(0x580))/(0x1935+0x31b+0x1c47*-0x1))+-parseInt(_0x1ff7bc(0x464))/(0x669*0x5+-0xc5a+-0x13a9);if(_0x36f5fa===_0x1bf890)break;else _0x1de133['push'](_0x1de133['shift']());}catch(_0x110875){_0x1de133['push'](_0x1de133['shift']());}}}(_0x3b2b,0x14bc81+0x2*-0x8f57d+0x867df*0x1),((()=>{'use strict';var _0x275828=_0x43b7,_0x1f9529={'SvyJR':'PRetp','PxfZX':'unkno'+'wn','aXzvn':function(_0x150669,_0x27d1a3){return _0x150669+_0x27d1a3;},'qEulh':function(_0x483da2,_0x11b57c){return _0x483da2(_0x11b57c);},'TYhxq':function(_0x5624ee,_0x1cb0dd){return _0x5624ee!==_0x1cb0dd;},'HzQnM':_0x275828(0x485)+_0x275828(0x187)+'ed','waXoY':_0x275828(0x2c6),'FXsJZ':function(_0x804a31,_0xc37f61){return _0x804a31(_0xc37f61);},'LXoCe':function(_0x333598,_0x2c75ff){return _0x333598(_0x2c75ff);},'TpGrS':function(_0x4a621b,_0x33ef09){return _0x4a621b===_0x33ef09;},'fEhOs':'movem'+'ents','dpxwL':function(_0x368b9f,_0x431894){return _0x368b9f===_0x431894;},'QVAXk':'tQsxe','Gpaab':_0x275828(0x400),'DnIeS':_0x275828(0x4d4),'eKtFg':function(_0x93985e,_0x39088c){return _0x93985e!==_0x39088c;},'HLYBb':_0x275828(0x1fa),'QnQGF':_0x275828(0x72a),'UlTzl':function(_0x31ff9a,_0x29cde,_0x188994,_0xcfcd49,_0x3731d9,_0x2b4d9b,_0x541cdc,_0x539327){return _0x31ff9a(_0x29cde,_0x188994,_0xcfcd49,_0x3731d9,_0x2b4d9b,_0x541cdc,_0x539327);},'KbFWR':_0x275828(0x24a)+_0x275828(0x3ba),'HhNIs':_0x275828(0x1d0),'TyOHd':function(_0x592775,_0x1aa35b){return _0x592775!=_0x1aa35b;},'Phrhj':function(_0x4eb9ce,_0x54168a,_0x3f1b11,_0x5b1cae,_0x3b0c67){return _0x4eb9ce(_0x54168a,_0x3f1b11,_0x5b1cae,_0x3b0c67);},'NrQTE':function(_0x739022,_0x1a6625){return _0x739022||_0x1a6625;},'iyRtn':_0x275828(0x582)+_0x275828(0x602)+'35,24'+_0x275828(0x4f0)+'5)','BsWxF':_0x275828(0x41b),'QTYom':_0x275828(0x709)+'ra-ko'+_0x275828(0x2ae)+_0x275828(0x43d)+'eg\x20fa'+_0x275828(0x330),'JaqGK':function(_0x1f6653,_0x1b2d79,_0xc241f2,_0x54c47f,_0xb76a49){return _0x1f6653(_0x1b2d79,_0xc241f2,_0x54c47f,_0xb76a49);},'riBVj':_0x275828(0x57d)+'ers','MHufm':function(_0x74c197,_0x38378a){return _0x74c197/_0x38378a;},'SdUAg':function(_0x52f88d,_0x4eedc7){return _0x52f88d(_0x4eedc7);},'LtngB':function(_0x2108bc,_0x19299d){return _0x2108bc(_0x19299d);},'jsiaZ':function(_0x37764c,_0x64de86){return _0x37764c(_0x64de86);},'wYDFw':_0x275828(0x622),'LEsUt':function(_0x37a4ea,_0x3530cf,_0x53691f,_0x1570cb,_0x4b4979){return _0x37a4ea(_0x3530cf,_0x53691f,_0x1570cb,_0x4b4979);},'FduWh':function(_0x1625de,_0x119777){return _0x1625de!==_0x119777;},'naVUI':function(_0x248b86,_0x14c54e){return _0x248b86<_0x14c54e;},'HDgjm':function(_0xc1792a,_0x58a046,_0x17649e){return _0xc1792a(_0x58a046,_0x17649e);},'mPXrK':function(_0x16e1c3,_0x576554,_0x47f853,_0x1e93a8,_0x3ae1f7){return _0x16e1c3(_0x576554,_0x47f853,_0x1e93a8,_0x3ae1f7);},'TosVL':_0x275828(0x422),'oZxwa':function(_0x2de083,_0x3005c2,_0x2ec2b0,_0x9eb14,_0xb3087b){return _0x2de083(_0x3005c2,_0x2ec2b0,_0x9eb14,_0xb3087b);},'NJERb':function(_0x1b5ab6,_0x1cea58,_0x38be3a,_0x5b4d78,_0x5ec79b){return _0x1b5ab6(_0x1cea58,_0x38be3a,_0x5b4d78,_0x5ec79b);},'Qtauq':function(_0x6db2b8,_0x213e97){return _0x6db2b8+_0x213e97;},'TsKLX':_0x275828(0x6ed),'OHiCI':_0x275828(0x289),'srTkA':function(_0x57a2ec,_0x1d0fe){return _0x57a2ec===_0x1d0fe;},'WimVB':_0x275828(0x179),'yWJPK':function(_0x6243fe,_0x5b3503){return _0x6243fe+_0x5b3503;},'rVEbC':'mouse','tkBzn':function(_0x11be56,_0x16a9a4){return _0x11be56+_0x16a9a4;},'rBQVw':_0x275828(0x1c1),'CSmvb':'mouse'+'down','pLeXu':'mouse'+'up','oVAVM':_0x275828(0x5f0),'AbYkI':function(_0x2cd9fb,_0x463b27){return _0x2cd9fb>_0x463b27;},'PZwxT':'inter'+'activ'+'e','wtJzr':function(_0x2e5437,_0x34cd4a){return _0x2e5437===_0x34cd4a;},'eUsaH':'compl'+'ete','GjQtx':function(_0x152cb1,_0x42f88b){return _0x152cb1*_0x42f88b;},'xaxCF':'GchIr','hLOTZ':function(_0x5599b2,_0x34bde2){return _0x5599b2+_0x34bde2;},'AOoxg':function(_0x23c183,_0x3ae3f9){return _0x23c183*_0x3ae3f9;},'uUCag':function(_0xf93a0a,_0x4ea506){return _0xf93a0a-_0x4ea506;},'dMoes':_0x275828(0x32b),'CmxIq':function(_0x2657d9,_0x326edc,_0x279d6c,_0x5bf9d0,_0x3af46a,_0x3cf98b,_0xba92af){return _0x2657d9(_0x326edc,_0x279d6c,_0x5bf9d0,_0x3af46a,_0x3cf98b,_0xba92af);},'bPvuz':function(_0x43963e,_0x287517){return _0x43963e+_0x287517;},'lnAxN':'KeyS','jbGhG':_0x275828(0x3fa),'vVfFM':function(_0x161dfd,_0x5eb4be){return _0x161dfd+_0x5eb4be;},'TutfI':_0x275828(0x214),'rewcO':'\x20CPS','xrcPv':'mouse'+'3','OSpUe':function(_0xd94e8e,_0xa43f57){return _0xd94e8e(_0xa43f57);},'gxNJi':'Space','uwCSV':function(_0x54a79e,_0xec83e){return _0x54a79e*_0xec83e;},'IjHCv':function(_0x1b692d,_0x55b970){return _0x1b692d>=_0x55b970;},'hQlCn':function(_0x341b12){return _0x341b12();},'LZdMz':_0x275828(0x37c),'CPKis':'input','NyCVn':'span','CTQmL':_0x275828(0x635)+_0x275828(0x3de),'CRSHY':'selec'+'t','FgUHO':'sk-fi'+_0x275828(0x17f),'Vnacd':'px\x20ui'+_0x275828(0x1f8)+_0x275828(0x19f)+_0x275828(0x1e8)+_0x275828(0x48c)+_0x275828(0x3e5)+'s-ser'+'if','Unlme':_0x275828(0x582)+_0x275828(0x602)+'35,24'+_0x275828(0x254)+')','ilPGY':'1|4|0'+_0x275828(0x52b)+'5','vAguq':_0x275828(0x4ed)+'n','MFYDF':'div','HfSYd':_0x275828(0x41c)+'te','TPVbw':_0x275828(0x5b6),'FjvEU':function(_0x3eedfb,_0x3acab8){return _0x3eedfb!==_0x3acab8;},'UiWfy':_0x275828(0x38b),'lWPsB':'god','rzPxe':_0x275828(0x1c8)+'ng','rqgls':function(_0x861fbd){return _0x861fbd();},'XoVJN':function(_0x278bae){return _0x278bae();},'xkHiR':_0x275828(0x63d)+_0x275828(0x613)+_0x275828(0x544)+_0x275828(0x19b)+_0x275828(0x69c)+_0x275828(0x3f4)+'lth\x20a'+_0x275828(0x53f)+'ealth'+_0x275828(0x297)+_0x275828(0x49c)+'\x20so\x20n'+_0x275828(0x6b5)+'g\x20can'+_0x275828(0x66f)+_0x275828(0x22d)+'ill\x20y'+'ou.','VyPQQ':function(_0x2d01b1,_0x8015e8,_0x524b32,_0x388d7e,_0x116f7e,_0x35ca45){return _0x2d01b1(_0x8015e8,_0x524b32,_0x388d7e,_0x116f7e,_0x35ca45);},'yCIIq':'Skips'+_0x275828(0x5be)+'ilMot'+_0x275828(0x1ae)+_0x275828(0x4b9)+_0x275828(0x6e9)+_0x275828(0x307)+_0x275828(0x5fc)+_0x275828(0x222)+'\x20neve'+_0x275828(0x32a)+'ance.','iKPGR':'Scale'+'s\x20Ove'+_0x275828(0x42b)+_0x275828(0x611)+'n.fir'+_0x275828(0x443)+_0x275828(0x4a9)+'0%.\x20S'+_0x275828(0x312)+_0x275828(0x581)+_0x275828(0x201)+_0x275828(0x406)+'\x20shot'+'s.','jLOQe':_0x275828(0x3d8)+'rites'+_0x275828(0x605)+'tideW'+_0x275828(0x1ff)+_0x275828(0x3fe)+_0x275828(0x35b)+_0x275828(0x583)+_0x275828(0x70c)+_0x275828(0x660)+_0x275828(0x4b3)+_0x275828(0x445)+_0x275828(0x472)+'s.','XkOew':_0x275828(0x5ac)+'e\x20val'+'ue','AlPZQ':_0x275828(0x4a5)+'ite\x20A'+_0x275828(0x298)+_0x275828(0x49d),'pOhHc':_0x275828(0x1d5)+'ls\x20th'+_0x275828(0x2a4)+'pon\x27s'+_0x275828(0x585)+'ed\x20am'+'mo\x20to'+'\x20999\x20'+_0x275828(0x3dc)+'\x20200m'+'s.','XCbNH':function(_0x459b44,_0x2be9b9){return _0x459b44===_0x2be9b9;},'AKEER':_0x275828(0x5fb),'UwRSs':'TUpwO','BvHIr':function(_0x5ef6f0,_0x40c729,_0x111343,_0x427f5e){return _0x5ef6f0(_0x40c729,_0x111343,_0x427f5e);},'OpAvp':_0x275828(0x678)+'\x20defa'+_0x275828(0x160),'VLLjb':function(_0x39ed7a,_0x250733,_0x38c3ec,_0x5192cc,_0x53dc6b,_0x484dfc){return _0x39ed7a(_0x250733,_0x38c3ec,_0x5192cc,_0x53dc6b,_0x484dfc);},'zikTA':_0x275828(0x181)+'/\x20Gra'+'vity','dIUVh':function(_0x4b9ef5,_0x36580b){return _0x4b9ef5!==_0x36580b;},'BMaSR':'Jump\x20'+'%','yngSW':function(_0x540d7a,_0x526daa,_0x4225cc,_0x35e948,_0x623a03,_0xe80d8e){return _0x540d7a(_0x526daa,_0x4225cc,_0x35e948,_0x623a03,_0xe80d8e);},'rrtxW':'visua'+'l','QOrAt':_0x275828(0x47f),'Oprmn':_0x275828(0x1d4),'uNNir':'Keyst'+'rokes','ygziF':function(_0xb2c1ac,_0x387cb5,_0x2acbf6,_0x235d0f){return _0xb2c1ac(_0x387cb5,_0x2acbf6,_0x235d0f);},'YWlsP':function(_0xf8a206,_0x15c395,_0x4453b2){return _0xf8a206(_0x15c395,_0x4453b2);},'aRYZh':function(_0x4c187,_0x1609c4,_0x555332,_0x26d5bd,_0x548a3e,_0x11a25){return _0x4c187(_0x1609c4,_0x555332,_0x26d5bd,_0x548a3e,_0x11a25);},'TTSss':_0x275828(0x1be)+_0x275828(0x67d),'ASvrI':function(_0x1f6ab2,_0x44bcda,_0x5e7c66,_0x4b05c1,_0x12d659,_0xee8848){return _0x1f6ab2(_0x44bcda,_0x5e7c66,_0x4b05c1,_0x12d659,_0xee8848);},'uYsSZ':_0x275828(0x456),'RLlCo':_0x275828(0x1b5)+_0x275828(0x5fa)+'y.','kYOhg':_0x275828(0x478),'WCBJU':_0x275828(0x429)+'\x20UWMK'+_0x275828(0x26c)+_0x275828(0x287)+_0x275828(0x62e)+'WASM\x20'+_0x275828(0x440)+'.\x20Use'+_0x275828(0x1d7)+_0x275828(0x337)+_0x275828(0x2cf)+_0x275828(0x647)+_0x275828(0x57a)+'art.','uugaa':'Appli'+'es\x20on'+_0x275828(0x38d)+_0x275828(0x198)+'f\x20mat'+_0x275828(0x42f)+_0x275828(0x5ba)+_0x275828(0x41d)+'fe\x20mo'+_0x275828(0x36e)+_0x275828(0x6cf)+_0x275828(0x3cc)+_0x275828(0x249)+_0x275828(0x547)+_0x275828(0x29b)+'\x20—\x20te'+_0x275828(0x681)+_0x275828(0x660)+_0x275828(0x440)+_0x275828(0x5d6)+_0x275828(0x169)+'ount.','GHFSw':function(_0x1d64b1,_0x4de6c6,_0x1a54fb,_0x203345,_0x3a4e97,_0x43b5e7){return _0x1d64b1(_0x4de6c6,_0x1a54fb,_0x203345,_0x3a4e97,_0x43b5e7);},'wUIwv':'Appli'+_0x275828(0x2bc)+'\x20relo'+_0x275828(0x691),'xuavF':function(_0x48592e,_0x5b674e,_0x5832dc,_0x4fcc2){return _0x48592e(_0x5b674e,_0x5832dc,_0x4fcc2);},'IXSWo':function(_0x370247,_0x303b6e,_0xe348d9){return _0x370247(_0x303b6e,_0xe348d9);},'jHCuz':_0x275828(0x220)+'e\x20(OH'+'ealth'+_0x275828(0x297)+_0x275828(0x22b),'EDlSQ':_0x275828(0x5f6)+'re\x20(S'+_0x275828(0x338)+_0x275828(0x63b)+'ing\x20+'+'\x20IsGr'+_0x275828(0x5ab)+'d)','JQRvd':_0x275828(0x4f5)+'eats\x20'+_0x275828(0x59f)+_0x275828(0x4da)+_0x275828(0x4c2)+'is','GSEsT':_0x275828(0x6c8)+_0x275828(0x624)+_0x275828(0x323)+_0x275828(0x463)+_0x275828(0x65e)+_0x275828(0x70a)+_0x275828(0x53e)+_0x275828(0x6db)+'even\x20'+_0x275828(0x706)+_0x275828(0x516)+_0x275828(0x473),'zxlIa':_0x275828(0x29c)+'r','ALgSl':'Reset','wyoyv':_0x275828(0x64e),'QLVxq':function(_0x445a0e){return _0x445a0e();},'FVeJK':'shown','nvHQZ':'zCBdF','KPHob':'mn-lo'+'go','ttCnm':_0x275828(0x6f9)+'p','oRPNZ':_0x275828(0x1bc)+_0x275828(0x417)+'r','NleNA':'mn-su'+'b','ZEAxa':'mn-cl'+_0x275828(0x618),'MXDlz':_0x275828(0x576),'yYZRw':function(_0x6f7c44){return _0x6f7c44();},'tHrdm':_0x275828(0x623)+'io_','kAesW':function(_0x480c5c,_0x850b0f){return _0x480c5c!==_0x850b0f;},'PpXJb':_0x275828(0x6a9),'DvPLA':'rgba('+_0x275828(0x602)+_0x275828(0x366)+'0,0.5'+'5)','qkVpc':'rgba('+'255,1'+_0x275828(0x634)+_0x275828(0x588)+'5)','vdhyG':_0x275828(0x6d8)+'r','qNNqD':'pTcSz','QAEMv':_0x275828(0x367)+_0x275828(0x401)+_0x275828(0x320),'FUSDx':_0x275828(0x4f9)+'n','LRXvI':'0\x20hoo'+'ks\x20ar'+_0x275828(0x219)+'all\x20o'+_0x275828(0x6f2),'Bljwd':_0x275828(0x435)+'d','hwDqQ':_0x275828(0x47a)+'R:\x20','KIGHe':'Statu'+'s','OTAtC':function(_0x24269b,_0x39ee99,_0xf8df30,_0x2f8f83){return _0x24269b(_0x39ee99,_0xf8df30,_0x2f8f83);},'gAcgQ':_0x275828(0x1a5)+'PS\x20un'+'lock','xsGnu':function(_0x5e1738,_0x3a194e){return _0x5e1738*_0x3a194e;},'GDpBL':'sk-ca'+'rd','Yfcel':_0x275828(0x167),'zdziZ':function(_0x294649,_0x3b5018){return _0x294649+_0x3b5018;},'ApPpN':function(_0xca3eae,_0x348f5e){return _0xca3eae+_0x348f5e;},'JGpdr':function(_0x5f1ef5,_0x27e580){return _0x5f1ef5+_0x27e580;},'SmeEM':function(_0x14b76a,_0x18fecb){return _0x14b76a+_0x18fecb;},'fFEHx':_0x275828(0x389),'dqJVo':function(_0x37f2a6,_0x4b1cc6,_0x1847ac){return _0x37f2a6(_0x4b1cc6,_0x1847ac);},'WqllY':_0x275828(0x19b)+_0x275828(0x69c)+'keHea'+_0x275828(0x172),'gfyxr':'godDi'+'e','QJWpE':_0x275828(0x462),'tEOnB':'fFPSM','sBwtU':_0x275828(0x194)+_0x275828(0x17c),'XwAJL':function(_0x1f02ca,_0x444d37){return _0x1f02ca+_0x444d37;},'HVRWD':'UWMK\x20'+_0x275828(0x5ec)+_0x275828(0x1ad)+_0x275828(0x212)+_0x275828(0x324)+'ly\x20(r'+_0x275828(0x61c)+_0x275828(0x4d7)+_0x275828(0x4a1)+_0x275828(0x18d)+'ipt)','ISuIE':'posit'+_0x275828(0x2f4)+_0x275828(0x459)+'inset'+':0;wi'+_0x275828(0x4fa)+'00vw;'+'heigh'+_0x275828(0x166)+_0x275828(0x32f)+_0x275828(0x18e)+_0x275828(0x6ae)+_0x275828(0x5e2)+'6;poi'+'nter-'+_0x275828(0x18b)+'s:non'+'e','qiGID':'sakur'+_0x275828(0x2bb),'PCijs':'Visua'+'l','wVXth':'safe','qMYnO':_0x275828(0x44a)+'y','ptYzL':'posit'+'ion:f'+_0x275828(0x459)+_0x275828(0x539)+'2px;r'+'ight:'+_0x275828(0x2a8)+_0x275828(0x176)+_0x275828(0x4ef)+_0x275828(0x28e)+_0x275828(0x379)+'ursor'+':poin'+_0x275828(0x4fe)+'idth:'+_0x275828(0x414)+_0x275828(0x532)+_0x275828(0x60e)+_0x275828(0x46a)+_0x275828(0x3c2)+_0x275828(0x506)+_0x275828(0x16b)+_0x275828(0x1af)+_0x275828(0x587)+_0x275828(0x30c)+_0x275828(0x6d3)+'inter'+'-even'+_0x275828(0x2fb)+_0x275828(0x2ed)+'lter:'+_0x275828(0x67e)+'shado'+'w(0\x200'+'\x204px\x20'+'rgba('+'255,1'+'07,15'+_0x275828(0x39d)+'))','jdiRp':function(_0x2da261){return _0x2da261();},'IkjPl':function(_0x107402,_0xc844e3){return _0x107402(_0xc844e3);},'EiroA':'#ff6b'+'9d','UUqvZ':'#ffb3'+'c6','qntbT':'sakur'+'a.kou'+'r.v1','XTMpX':'xxxOO','ncwPD':_0x275828(0x650)+'Die','cqstc':_0x275828(0x6bd)+_0x275828(0x6dc),'HhyHe':_0x275828(0x598)+'nPlat'+_0x275828(0x345)+_0x275828(0x295)+'tide.'+'Movem'+'ent','gUwDM':'[saku'+_0x275828(0x46c)+_0x275828(0x1a3)+_0x275828(0x35e)+_0x275828(0x413)+'ailed'+':','Mfpev':function(_0xd6090e,_0x30471a,_0x166439){return _0xd6090e(_0x30471a,_0x166439);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x275828(0x27b)](location['hostn'+_0x275828(0x3a5)]||''))return;if(window['__SAK'+_0x275828(0x2df)+'OUR__'])return;window[_0x275828(0x50b)+'URA_K'+_0x275828(0x4ee)]=!![];var _0x3e7e88=_0x1f9529[_0x275828(0x2dd)],_0x2c4af5=_0x1f9529['UUqvZ'],_0x36da91={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x1f9529[_0x275828(0x2dd)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x2494c7={..._0x36da91};try{Object[_0x275828(0x3f5)+'n'](_0x2494c7,JSON[_0x275828(0x4ca)](localStorage['getIt'+'em'](_0x1f9529[_0x275828(0x46d)])||'{}'));}catch(_0x20cbb4){}function _0x4551d4(){var _0x3d5206=_0x275828;if(_0x3d5206(0x3ee)!==_0x1f9529[_0x3d5206(0x475)])_0x560e75[_0x3d5206(0x628)+'ct']=_0x43235d,_0x531aae();else try{localStorage[_0x3d5206(0x6e1)+'em'](_0x3d5206(0x614)+_0x3d5206(0x680)+_0x3d5206(0x408),JSON['strin'+_0x3d5206(0x4e4)](_0x2494c7));}catch(_0x4ea64b){}}var _0x128de9={'uwmk':!!window['Unity'+'WebMo'+_0x275828(0x180)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x2494c7['safeM'+'ode'],'lastError':''};try{if(_0x1f9529['TpGrS'](_0x1f9529['XTMpX'],'xxxOO'))window['addEv'+'entLi'+_0x275828(0x591)+'r'](_0x275828(0x62b),_0x9b87d2=>{var _0x81a687=_0x275828;try{var _0x322253=_0x9b87d2&&(_0x9b87d2[_0x81a687(0x272)+'ge']||_0x9b87d2['error']&&_0x9b87d2['error']['messa'+'ge'])||_0x1f9529[_0x81a687(0x1b4)];if(_0x9b87d2&&_0x9b87d2[_0x81a687(0x300)+'ame'])_0x322253+=_0x1f9529[_0x81a687(0x41a)]('\x20@\x20'+String(_0x9b87d2['filen'+'ame'])['split']('/')[_0x81a687(0x675)]()+':',_0x9b87d2[_0x81a687(0x51f)+'o']||'?');_0x128de9[_0x81a687(0x15b)+'rror']=_0x1f9529[_0x81a687(0x6c2)](String,_0x322253)[_0x81a687(0x31e)](-0x1bbe+-0xa*0x44+-0x2*-0xf33,-0x355*-0x8+0x1814+-0x321c);}catch(_0x45d1c1){}});else try{_0x5b7c72['body'][_0x275828(0x525)+'dChil'+'d'](_0x3f50fb);}catch(_0x4cb3b8){}}catch(_0x2c0254){}var _0x55fadd=null,_0x2bb608=null,_0x295eac={},_0x1814a8=[],_0x148c19=[],_0x3ca92d=new Map();function _0x24ec35(_0x1746ca,_0x5066fb){var _0x4e44f8=_0x275828;if(_0x4e44f8(0x19d)!=='gMrJL'){_0x5a19b8['stopP'+_0x4e44f8(0x5d2)+_0x4e44f8(0x310)]();var _0x24b7ac=_0x1f9529['TYhxq'](_0x3c0ba8[_0x4e44f8(0x4c7)+_0x4e44f8(0x20c)+'te'](_0x1f9529[_0x4e44f8(0x721)]),_0x1f9529['waXoY']);_0x186b11[_0x4e44f8(0x1a8)+_0x4e44f8(0x20c)+'te']('aria-'+_0x4e44f8(0x187)+'ed',_0x1f9529[_0x4e44f8(0x3cd)](_0x12fcd0,_0x24b7ac)),_0x1f9529['LXoCe'](_0x946fae,_0x24b7ac);}else{if(!_0x5066fb||_0x1746ca[_0x4e44f8(0x1db)+_0x4e44f8(0x277)](_0x5066fb)||_0x1746ca['lengt'+'h']>0x2*-0x52a+-0x237b+0x2e0f)return;_0x1746ca['push'](_0x5066fb);}}function _0x5df213(_0x16c6b6,_0x19bce5,_0x373f7c,_0xc60eb4){var _0x5a13bc=_0x275828,_0x4cf316={'edZke':function(_0x19d66c,_0x57812e,_0x2b69d9,_0xf4f13d,_0x15f006){return _0x19d66c(_0x57812e,_0x2b69d9,_0xf4f13d,_0x15f006);},'lHlcC':'f32'},_0x4a13a1=0x5*-0x238+0x1*0x1300+-0x7e8;try{_0x4a13a1=_0x19bce5&&_0x19bce5[_0x5a13bc(0x3c7)]?_0x19bce5['val']():-0x20a5+0x10d*-0x8+-0x5d*-0x71;}catch(_0x2c6618){}if(!_0x4a13a1)return;_0x24ec35(_0x16c6b6,_0x4a13a1),_0x373f7c[_0xc60eb4]=_0x16c6b6[_0x5a13bc(0x4b4)+'h'];if(_0x1f9529[_0x5a13bc(0x572)](_0xc60eb4,_0x1f9529[_0x5a13bc(0x733)])&&_0x16c6b6[_0x5a13bc(0x4b4)+'h']){if(_0x5a13bc(0x313)===_0x5a13bc(0x15a)){var _0x371e81=(_0x5a13bc(0x161)+_0x5a13bc(0x423)+'5')['split']('|'),_0x2f9a67=0x2e0+0xfc6+0x4d*-0x3e;while(!![]){switch(_0x371e81[_0x2f9a67++]){case'0':_0xc15e25(_0x2e871d,-0x2149+0x2*-0xcf6+-0x3*-0x13cb,_0x5a13bc(0x622),_0x423c7d);continue;case'1':_0x4cf316[_0x5a13bc(0x496)](_0x4ead1f,_0x4e818d,-0x784+-0xf*0x9e+0x10fa,_0x4cf316[_0x5a13bc(0x224)],_0x3ee80f);continue;case'2':_0x4cf316[_0x5a13bc(0x496)](_0x1b0881,_0x41c1f6,0x7*0x3a9+0x17ee+-0x315d,_0x4cf316[_0x5a13bc(0x224)],_0x2313ca);continue;case'3':_0x437604(_0xd70b84,0x1*0x1402+0x1100+-0x24da*0x1,_0x5a13bc(0x622),_0xf6edfa);continue;case'4':_0x47f717(_0x5d0dd0,0xb1*-0x18+-0x2193+0x3247,_0x5a13bc(0x622),_0x5aec86);continue;case'5':_0x5c93ae(_0x2edd2d,-0x160*0x11+-0x1*-0x1e0e+-0x68e,'f32',_0x2b9824);continue;}break;}}else{var _0x23c9d3=_0x295eac[_0x5a13bc(0x19c)+'ve'];if(_0x23c9d3){if(_0x1f9529[_0x5a13bc(0x5af)]('tQsxe',_0x1f9529['QVAXk']))try{_0x1f9529[_0x5a13bc(0x404)]!==_0x1f9529['DnIeS']?_0x23c9d3[_0x5a13bc(0x225)+'ed']=![]:_0x4ed25e(!_0x27e1fe);}catch(_0x4bc716){}else{var _0x31307f=_0xd7bcb6['creat'+'eElem'+'ent'](_0x5a13bc(0x5ee)+'n');_0x31307f[_0x5a13bc(0x504)]=_0x11cb59,_0x31307f[_0x5a13bc(0x64d)+_0x5a13bc(0x4b1)+'t']=_0x1c1f39,_0x52604c[_0x5a13bc(0x525)+_0x5a13bc(0x266)+'d'](_0x31307f);}}}}}function _0x41ba8b(_0x417536,_0x533624,_0x28e0f4){var _0x5aa50e=_0x275828,_0x3278ce=_0x3ca92d['get'](_0x417536);!_0x3278ce&&(_0x3278ce=new Map(),_0x3ca92d['set'](_0x417536,_0x3278ce));if(!_0x3278ce[_0x5aa50e(0x502)](_0x533624))try{var _0x4434bb=new _0x55fadd(_0x417536)['readF'+_0x5aa50e(0x2c7)](_0x533624,_0x28e0f4);_0x3278ce[_0x5aa50e(0x722)](_0x533624,_0x1f9529[_0x5aa50e(0x677)](_0x4434bb,undefined)?_0x4434bb['val']():null);}catch(_0x38213c){if(_0x1f9529['eKtFg']('kzTvG','kzTvG')){var _0x383213=_0x3cd0f4[_0x405878];if(_0x383213)try{_0x383213['enabl'+'ed']=!!_0x33e6ae;}catch(_0x5a6c88){}}else _0x3278ce[_0x5aa50e(0x722)](_0x533624,null);}return _0x3278ce[_0x5aa50e(0x45d)](_0x533624);}function _0x520fb3(_0x9f6bc4,_0x5a9d1f,_0x40f685,_0x96b174){var _0x1432ac=_0x275828;try{new _0x55fadd(_0x9f6bc4)[_0x1432ac(0x202)+'Field'](_0x5a9d1f,_0x40f685,_0x96b174);}catch(_0x2d1a6b){}}function _0x4598b5(_0x54a890,_0x4d5c32){var _0x22ec8d=_0x275828,_0x38dc4d={'IriWr':function(_0x5e4c1e,_0x5d2328){return _0x5e4c1e>_0x5d2328;}};if(_0x1f9529['HLYBb']!==_0x1f9529['HLYBb']){var _0x372cd2=_0x20f784[_0x1f4dd0]||[],_0x1f98ef=_0x4ed82c['now']();while(_0x372cd2[_0x22ec8d(0x4b4)+'h']&&_0x38dc4d[_0x22ec8d(0x4b5)](_0x1f98ef-_0x372cd2[0x12f4+-0x1f45*-0x1+-0x3239],-0x8*-0x14a+-0x362+-0x6*0x81))_0x372cd2[_0x22ec8d(0x442)]();return _0x372cd2[_0x22ec8d(0x4b4)+'h'];}else try{var _0x1ac1fc=new _0x55fadd(_0x54a890)[_0x22ec8d(0x5ff)+'ield'](_0x4d5c32,_0x1f9529['QnQGF']);return _0x1ac1fc?_0x1ac1fc['val']():-0x16e6+0xcf*0xf+0xac5;}catch(_0x33f7c5){return 0x1cfa+0x2241+0x3f3b*-0x1;}}function _0x207cde(_0x2aaebe,_0x2147c8,_0x7faf0f,_0x2a249e){var _0x4c13aa=_0x275828,_0x23b577={'hgtaq':'1.1.0','sHRgw':'OHeal'+'th','jkuvu':'i32','HEVfx':'godDi'+'e','cqIrd':_0x4c13aa(0x29d)+'oil','xCFYh':function(_0x126b95,_0x5340c9,_0x371d61,_0x34b0ae,_0x16da6f,_0x5d6497,_0x463f2a,_0xe06d37){return _0x1f9529['UlTzl'](_0x126b95,_0x5340c9,_0x371d61,_0x34b0ae,_0x16da6f,_0x5d6497,_0x463f2a,_0xe06d37);},'HSnBu':_0x1f9529['KbFWR'],'TebVN':'capMo'+'ve'};if(_0x1f9529['TpGrS'](_0x1f9529[_0x4c13aa(0x25a)],'LcFWU')){var _0x4695da={'eIcBA':_0x4c13aa(0x57d)+'ers','HojBc':function(_0x123887,_0x14f449,_0x53410d,_0x394cbe,_0x3b4c2e){return _0x123887(_0x14f449,_0x53410d,_0x394cbe,_0x3b4c2e);}};if(_0x2d2eba[_0x4c13aa(0x22a)+_0x4c13aa(0x4dc)+_0x4c13aa(0x180)]&&!_0x52f78c[_0x4c13aa(0x231)+'ode']){_0x5bd797=_0xaa65f9['Unity'+_0x4c13aa(0x4dc)+_0x4c13aa(0x180)]['Value'+'Wrapp'+'er'],_0x36822a=_0x1d8dec['Unity'+_0x4c13aa(0x4dc)+_0x4c13aa(0x180)]['Runti'+'me'][_0x4c13aa(0x43b)+_0x4c13aa(0x534)+'in']({'name':_0x4c13aa(0x1bc)+'aKour','version':_0x23b577[_0x4c13aa(0x4bb)],'referencedAssemblies':['Assem'+_0x4c13aa(0x244)+'Sharp'+_0x4c13aa(0x32d)]});if(_0x5a97be['hookG'+'od'])_0x20ae89('god',_0x23b577['sHRgw'],'Initi'+_0x4c13aa(0x69c)+'keHea'+_0x4c13aa(0x172),[_0x4c13aa(0x422),_0x23b577[_0x4c13aa(0x66c)]],_0x3ab74e,_0x29bb78,!!_0x243d30['god']);if(_0x35345d['hookG'+_0x4c13aa(0x1b2)])_0xd99741(_0x23b577[_0x4c13aa(0x206)],'OHeal'+'th',_0x4c13aa(0x650)+'Die',[_0x23b577['jkuvu'],_0x4c13aa(0x422),'i32',_0x4c13aa(0x422),_0x4c13aa(0x422)],_0x55f980,_0x24e0fd,!!_0x214c23[_0x4c13aa(0x692)]);if(_0x97e765[_0x4c13aa(0x56b)+'oReco'+'il'])_0x386548(_0x23b577[_0x4c13aa(0x663)],'Legio'+'nPlat'+'forms'+'.Over'+_0x4c13aa(0x210)+'Recoi'+'lMoti'+'on','Tick',[_0x4c13aa(0x422)],_0x5ed21d,_0x14dc1c,!!_0x5293f2[_0x4c13aa(0x29d)+'oil']);if(_0x4f5b8c[_0x4c13aa(0x5bd)+'aptur'+'e'])_0x23b577['xCFYh'](_0x316c5f,_0x23b577[_0x4c13aa(0x343)],_0x4c13aa(0x6bd)+_0x4c13aa(0x6dc),_0x4c13aa(0x483)+_0x4c13aa(0x62d)+_0x4c13aa(0x6b2),[_0x4c13aa(0x422),'i32'],_0x2c008c,(_0x127e13,_0x514f32)=>{var _0x390cb1=_0x4c13aa;_0x3288a6(_0x594f1f,_0x514f32,_0x4ba793,_0x4695da[_0x390cb1(0x4a3)]);},!![]);if(_0xb2ac94[_0x4c13aa(0x5bd)+'aptur'+'e'])_0x5f3e28(_0x23b577[_0x4c13aa(0x482)],'Legio'+_0x4c13aa(0x44b)+'forms'+_0x4c13aa(0x295)+_0x4c13aa(0x210)+'Movem'+_0x4c13aa(0x54b),_0x4c13aa(0x342)+'unded',[_0x4c13aa(0x422)],_0x23b577[_0x4c13aa(0x66c)],(_0x4e1c8a,_0x9d1c56)=>{var _0x426abf=_0x4c13aa;_0x4695da[_0x426abf(0x2f7)](_0x3357ae,_0xff3cc7,_0x9d1c56,_0x406292,'movem'+_0x426abf(0x545));},!![]);}}else{var _0x1a5708=_0x41ba8b(_0x2aaebe,_0x2147c8,_0x7faf0f);if(_0x1f9529['TyOHd'](_0x1a5708,null))_0x1f9529[_0x4c13aa(0x296)](_0x520fb3,_0x2aaebe,_0x2147c8,_0x7faf0f,_0x1a5708*_0x2a249e);}}function _0x48a4d0(_0x5bbf08,_0x396175,_0x1f074d,_0xef318a,_0x5d0cbe,_0x589dec,_0x5d339d){var _0x52c8e0=_0x275828;try{var _0x4210f6=_0x2bb608[_0x52c8e0(0x2c4)+_0x52c8e0(0x263)]({'typeName':_0x396175,'methodName':_0x1f074d,'params':_0xef318a,'returnType':_0x5d0cbe},_0x589dec);return _0x4210f6[_0x52c8e0(0x225)+'ed']=_0x5d339d!==![],_0x295eac[_0x5bbf08]=_0x4210f6,_0x128de9[_0x52c8e0(0x440)+_0x52c8e0(0x5cd)]++,_0x4210f6;}catch(_0x56070f){if(_0x1f9529[_0x52c8e0(0x5af)](_0x1f9529[_0x52c8e0(0x4d2)],_0x52c8e0(0x41b)))return console[_0x52c8e0(0x633)](_0x1f9529[_0x52c8e0(0x405)],_0x5bbf08,_0x56070f&&_0x56070f[_0x52c8e0(0x272)+'ge']),null;else _0x258c95['fillS'+_0x52c8e0(0x4f2)]=_0x1f9529['NrQTE'](_0x3dd35d,_0x1f9529['iyRtn']),_0x583fe9[_0x52c8e0(0x372)+'ext'](_0x249569,_0x3daa57,_0x5ec124),_0x4e0ded+=0xbfc+-0x9*0x386+-0x9e5*-0x2;}}function _0x23711e(_0x3f4424,_0x4ba609,_0x5d0249,_0x3d4367,_0x2426b1,_0x518ae7,_0x501bb7){var _0x11d4d1=_0x275828;if('Eamdb'==='RbsjK'){var _0x283a54=_0x45bf17[_0x11d4d1(0x5ad)+'creen'+'Eleme'+'nt'],_0x526368=_0x283a54&&_0x283a54[_0x11d4d1(0x720)+'me']!==_0x11d4d1(0x493)+'S'?_0x283a54:_0x395b74[_0x11d4d1(0x304)]||_0x4c6e99[_0x11d4d1(0x1f7)+_0x11d4d1(0x23c)+_0x11d4d1(0x359)];if(_0xc23bb['paren'+'tNode']!==_0x526368)_0x526368[_0x11d4d1(0x525)+_0x11d4d1(0x266)+'d'](_0x123fe6);}else try{var _0x514cf8=('2|4|0'+'|1|3')[_0x11d4d1(0x1a9)]('|'),_0xf994b9=0x10ba+0x1883*-0x1+0x7c9;while(!![]){switch(_0x514cf8[_0xf994b9++]){case'0':_0x295eac[_0x3f4424]=_0x8cf4d0;continue;case'1':_0x128de9[_0x11d4d1(0x440)+_0x11d4d1(0x5cd)]++;continue;case'2':var _0x8cf4d0=_0x2bb608['hookP'+_0x11d4d1(0x48f)+'x']({'typeName':_0x4ba609,'methodName':_0x5d0249,'params':_0x3d4367,'returnType':_0x2426b1},_0x518ae7);continue;case'3':return _0x8cf4d0;case'4':_0x8cf4d0[_0x11d4d1(0x225)+'ed']=_0x1f9529[_0x11d4d1(0x677)](_0x501bb7,![]);continue;}break;}}catch(_0x26b08f){return console[_0x11d4d1(0x633)](_0x1f9529['QTYom'],_0x3f4424,_0x26b08f&&_0x26b08f[_0x11d4d1(0x272)+'ge']),null;}}var _0x1ef592=()=>![];try{if(window['Unity'+_0x275828(0x4dc)+'dkit']&&!_0x2494c7['safeM'+_0x275828(0x700)]){_0x55fadd=window['Unity'+_0x275828(0x4dc)+'dkit']['Value'+_0x275828(0x6e7)+'er'],_0x2bb608=window[_0x275828(0x22a)+'WebMo'+_0x275828(0x180)]['Runti'+'me']['creat'+_0x275828(0x534)+'in']({'name':'Sakur'+_0x275828(0x1e1),'version':_0x275828(0x3e4),'referencedAssemblies':[_0x275828(0x17e)+'bly-C'+'Sharp'+'.dll']});if(_0x2494c7[_0x275828(0x51e)+'od'])_0x1f9529[_0x275828(0x2b8)](_0x48a4d0,_0x1f9529['lWPsB'],_0x275828(0x2a7)+'th',_0x1f9529['WqllY'],[_0x1f9529['TosVL'],_0x1f9529[_0x275828(0x3ed)]],undefined,_0x1ef592,!!_0x2494c7[_0x275828(0x692)]);if(_0x2494c7[_0x275828(0x51e)+'odDie'])_0x48a4d0(_0x275828(0x220)+'e',_0x275828(0x2a7)+'th',_0x1f9529['ncwPD'],[_0x275828(0x422),_0x275828(0x422),_0x275828(0x422),_0x1f9529[_0x275828(0x3ed)],'i32'],undefined,_0x1ef592,!!_0x2494c7[_0x275828(0x692)]);if(_0x2494c7[_0x275828(0x56b)+'oReco'+'il'])_0x48a4d0(_0x275828(0x29d)+_0x275828(0x2ce),_0x275828(0x598)+'nPlat'+_0x275828(0x345)+'.Over'+_0x275828(0x210)+'Recoi'+_0x275828(0x3d5)+'on',_0x275828(0x38f),[_0x275828(0x422)],undefined,_0x1ef592,!!_0x2494c7['noRec'+_0x275828(0x2ce)]);if(_0x2494c7[_0x275828(0x5bd)+_0x275828(0x6e8)+'e'])_0x23711e(_0x1f9529['KbFWR'],_0x1f9529['cqstc'],'SetGa'+_0x275828(0x62d)+_0x275828(0x6b2),[_0x275828(0x422),_0x275828(0x422)],undefined,(_0x4cbbc5,_0x19dbfb)=>{var _0x42c566=_0x275828;_0x1f9529[_0x42c566(0x451)](_0x5df213,_0x148c19,_0x19dbfb,_0x128de9,_0x1f9529['riBVj']);},!![]);if(_0x2494c7[_0x275828(0x5bd)+_0x275828(0x6e8)+'e'])_0x1f9529[_0x275828(0x2b8)](_0x23711e,_0x275828(0x19c)+'ve',_0x1f9529[_0x275828(0x566)],_0x275828(0x342)+_0x275828(0x375),[_0x275828(0x422)],_0x1f9529[_0x275828(0x3ed)],(_0x36b1d0,_0x3b8b78)=>{var _0x186965=_0x275828;_0x5df213(_0x1814a8,_0x3b8b78,_0x128de9,_0x186965(0x484)+_0x186965(0x545));},!![]);}}catch(_0x1031b5){console[_0x275828(0x633)](_0x1f9529['gUwDM'],_0x1031b5&&_0x1031b5['messa'+'ge']);}function _0x508b75(_0x2b4de1,_0x585e98){var _0x24034c=_0x275828,_0x2c1dae=_0x295eac[_0x2b4de1];if(_0x2c1dae)try{_0x2c1dae[_0x24034c(0x225)+'ed']=!!_0x585e98;}catch(_0x603def){}}setInterval(()=>{var _0x365f26=_0x275828;if(!_0x55fadd||!window[_0x365f26(0x398)+_0x365f26(0x2cb)+'nce'])return;var _0x13c88f=_0x1f9529['MHufm'](Number(_0x2494c7[_0x365f26(0x31a)+'Pct'])||0x108d+0x20ed+-0x3116,-0x5c2+0x668+-0x42),_0xefd1aa=(_0x1f9529['SdUAg'](Number,_0x2494c7['jumpP'+'ct'])||0x5*-0x56+-0x121*0xf+-0x1*-0x1301)/(-0x3*0xb8b+0x9be+-0x3*-0x86d),_0x1d0309=_0x1f9529['MHufm'](_0x1f9529['LtngB'](Number,_0x2494c7[_0x365f26(0x702)+'tyPct'])||-0x1*0xa24+-0x1faf*-0x1+-0x13*0x11d,-0x125*-0x6+0x4*-0x95f+0x1f02),_0x535cfa=Math[_0x365f26(0x3d2)](-0x1*0x1f41+-0x88a+-0x24*-0x11b,_0x1f9529['jsiaZ'](Number,_0x2494c7['damag'+_0x365f26(0x356)+'e'])||-0x5*0x4b2+0x15b0+0x130*0x2),_0xf039d4=_0x1f9529['TYhxq'](_0x13c88f,-0x61*0x47+-0x1d70+0x3858)||_0xefd1aa!==-0x745*0x2+-0x30+0xebb||_0x1d0309!==0x21cb+-0x685*-0x1+-0x284f*0x1||_0x2494c7['bhop'],_0x3aea72=_0x2494c7['noSpr'+_0x365f26(0x59e)]||_0x2494c7[_0x365f26(0x30b)+_0x365f26(0x57b)]||_0x2494c7[_0x365f26(0x40d)+_0x365f26(0x696)]||_0x2494c7[_0x365f26(0x427)+'Exp'];if(!_0xf039d4&&!_0x3aea72)return;try{for(var _0x4dd595=0x269a+-0x885*0x2+-0x1590;_0x4dd595<_0x1814a8['lengt'+'h'];_0x4dd595++){var _0x24d487=_0x1814a8[_0x4dd595];if(!_0x24d487)continue;if(_0x13c88f!==-0x12b*0xe+0x172*0x2+0xd77){var _0xcf072f=(_0x365f26(0x24c)+_0x365f26(0x4b2)+'1')['split']('|'),_0x1c7119=0x1f94+-0x5cf+-0x19c5;while(!![]){switch(_0xcf072f[_0x1c7119++]){case'0':_0x1f9529[_0x365f26(0x451)](_0x207cde,_0x24d487,-0x71+0xf58+-0xeb3,_0x1f9529['wYDFw'],_0x13c88f);continue;case'1':_0x207cde(_0x24d487,-0x1e27+0xddd+-0x16*-0xbf,_0x365f26(0x622),_0x13c88f);continue;case'2':_0x207cde(_0x24d487,0x111f+-0x1632+0x543,_0x1f9529['wYDFw'],_0x13c88f);continue;case'3':_0x207cde(_0x24d487,0x285+-0x1f64+0x1d07,_0x365f26(0x622),_0x13c88f);continue;case'4':_0x207cde(_0x24d487,0x163b+-0x25e6+-0x7*-0x241,_0x1f9529[_0x365f26(0x3f0)],_0x13c88f);continue;case'5':_0x1f9529['LEsUt'](_0x207cde,_0x24d487,0x1*-0x1558+-0x1ddf+0x3363,_0x365f26(0x622),_0x13c88f);continue;}break;}}if(_0xefd1aa!==-0x2*-0x14c+-0x109b+0xe04)_0x207cde(_0x24d487,-0x1*0x4+0x191*-0x3+-0x507*-0x1,_0x1f9529[_0x365f26(0x3f0)],_0xefd1aa);_0x1f9529['FduWh'](_0x1d0309,-0xb90*-0x1+-0x204d+0x14be)&&(_0x207cde(_0x24d487,0xd61+-0x3fe+-0x91b,_0x1f9529['wYDFw'],_0x1d0309),_0x207cde(_0x24d487,0xf46+-0x11a*-0xf+-0x1f80,_0x1f9529[_0x365f26(0x3f0)],_0x1d0309));if(_0x2494c7['bhop'])_0x520fb3(_0x24d487,-0xb57*-0x1+0x2b1*-0xb+0x12e0,'f32',-(0x1825+-0x24b8+0x107a));}}catch(_0x4ae53e){}try{for(var _0xc7bf66=-0x19a0+-0x144b+-0x5*-0x92f;_0x1f9529[_0x365f26(0x4e0)](_0xc7bf66,_0x148c19[_0x365f26(0x4b4)+'h']);_0xc7bf66++){var _0x300644=_0x1f9529[_0x365f26(0x693)](_0x4598b5,_0x148c19[_0xc7bf66],0x44*-0x15+0xa4*0x1+0x58*0xf);if(!_0x300644)continue;_0x2494c7['damag'+_0x365f26(0x57b)]&&(_0x1f9529['mPXrK'](_0x520fb3,_0x300644,-0x19f2+0x7dc*0x3+0x2*0x155,'i32',_0x535cfa),_0x520fb3(_0x300644,-0x1e3e+0x290+-0x6*-0x4ab,_0x1f9529[_0x365f26(0x3ed)],_0x535cfa));_0x2494c7[_0x365f26(0x4e7)+_0x365f26(0x59e)]&&(_0x520fb3(_0x300644,-0x1e12+-0x54e+0x23e8,_0x1f9529['wYDFw'],-0x19b7+0x1eed+-0x536),_0x520fb3(_0x300644,0x2*-0x1069+0x11*0x7a+-0xc90*-0x2,'f32',-0x13*-0x137+0x1e34*0x1+-0x58*0x9b));if(_0x2494c7[_0x365f26(0x40d)+'moExp'])_0x1f9529[_0x365f26(0x58c)](_0x520fb3,_0x300644,0x10ec*0x2+-0x11a+-0x2062,_0x1f9529[_0x365f26(0x3ed)],0x1*-0x9d+-0x1*-0x1edc+-0x1a58);_0x2494c7[_0x365f26(0x427)+'Exp']&&(_0x1f9529['NJERb'](_0x207cde,_0x300644,0x6fb*-0x5+0x165d+-0x14f*-0xa,'f32',-0x5a9+-0x2af+0x858+0.1),_0x520fb3(_0x300644,0x2112+-0x1863+-0x84f*0x1,'f32',0x1ee8+-0x1*0x8ef+-0xf*0x177+0.1));}}catch(_0x443d0c){}},0x1862+0xa59+-0x21f3),_0x1f9529[_0x275828(0x16c)](setInterval,()=>{var _0x38f178=_0x275828,_0xa760cb={'anoPf':_0x38f178(0x64e)};if(_0x38f178(0x289)!==_0x1f9529['OHiCI']){var _0xd6591c=('1|0|5'+_0x38f178(0x5d5)+'3')[_0x38f178(0x1a9)]('|'),_0x47bd84=-0x577+-0x21f3+0x276a;while(!![]){switch(_0xd6591c[_0x47bd84++]){case'0':_0x38e302[_0x38f178(0x64d)+'onten'+'t']=_0x221c4c;continue;case'1':var _0x38e302=_0x3cfc26[_0x38f178(0x43b)+_0x38f178(0x30f)+_0x38f178(0x54b)](_0xa760cb[_0x38f178(0x62a)]);continue;case'2':_0x24b834=_0x429e78();continue;case'3':_0x5d2871(()=>_0xaa12a8[_0x38f178(0x499)+'List'][_0x38f178(0x6f5)]('shown'));continue;case'4':_0x14e746['appen'+_0x38f178(0x266)+'d'](_0x5a7f9c);continue;case'5':_0x161362[_0x38f178(0x525)+_0x38f178(0x266)+'d'](_0x38e302);continue;}break;}}else{_0x128de9['gameL'+'oaded']=!!window[_0x38f178(0x398)+'Insta'+'nce'];try{if(_0x1f9529['srTkA'](_0x38f178(0x3ca),_0x1f9529[_0x38f178(0x6b1)]))_0x43b6a2[_0x38f178(0x280)]=_0x1f9529['Qtauq']('600\x20'+_0x1b39e1[_0x38f178(0x72c)]((0x1197+-0x1553+0x3c5)*_0x43f738),'px\x20ui'+'-sans'+_0x38f178(0x19f)+_0x38f178(0x1e8)+_0x38f178(0x48c)+_0x38f178(0x3e5)+_0x38f178(0x541)+'if'),_0x1a9a83[_0x38f178(0x4ce)+'tyle']=_0x164e24?_0x1f9529[_0x38f178(0x732)]:'rgba('+_0x38f178(0x602)+'35,24'+'0,0.5'+'5)',_0x76266a['fillT'+_0x38f178(0x196)](_0x35afdb,_0x1f9529['aXzvn'](_0x3a4b6a,_0x48d221/(-0x1c5a*-0x1+0x51*0x79+-0x25*0x1cd)),_0x4bb053+_0x44b91f/(-0x1*-0x19e2+-0x3d*0x9d+0xb89)+(-0x602+-0x170c+0x1d16)*_0x206ca1);else{var _0xdadc30=-0x155c+0x1bb4+-0xe8*0x7;for(var _0xc61369 in _0x295eac){if(_0x295eac[_0xc61369]&&_0x295eac[_0xc61369][_0x38f178(0x183)+'ed'])_0xdadc30++;}_0x128de9[_0x38f178(0x440)+'Ok']=_0xdadc30;}}catch(_0x8d5aa8){}}},0x3a*0x4a+-0x2*0x5+-0xcd2);var _0x4e82df=new Set(),_0x2acb0f={0x1:[],0x3:[]},_0x5c3143=![];function _0x19fb41(_0x5a2456){var _0x5ed4c1=_0x275828;_0x4e82df['add'](_0x5a2456[_0x5ed4c1(0x388)]);}function _0x4b46c4(_0x551363){var _0x3c5324=_0x275828;_0x4e82df[_0x3c5324(0x67c)+'e'](_0x551363[_0x3c5324(0x388)]);}function _0x23e1dc(_0x4280c0){var _0x1c376a=_0x275828;if(_0x4280c0[_0x1c376a(0x529)+_0x1c376a(0x4c9)])return;_0x4e82df[_0x1c376a(0x6f5)](_0x1f9529['yWJPK'](_0x1f9529['rVEbC'],_0x1f9529['tkBzn'](_0x4280c0[_0x1c376a(0x4f9)+'n'],-0x184*-0xb+-0x1*0x1a5f+-0x36*-0x2e)));var _0x1236ed=_0x2acb0f[_0x4280c0[_0x1c376a(0x4f9)+'n']+(0x3*0x3f+0x25f9*-0x1+0x253d*0x1)];if(_0x1236ed){_0x1236ed[_0x1c376a(0x6a0)](performance['now']());if(_0x1236ed[_0x1c376a(0x4b4)+'h']>0x4eb*-0x2+-0x1606+0x2004)_0x1236ed['shift']();}}function _0x36489c(_0x21188e){var _0xa91f50=_0x275828;if(_0x1f9529[_0xa91f50(0x701)]!==_0xa91f50(0x288)){if(!_0x21188e[_0xa91f50(0x529)+_0xa91f50(0x4c9)])_0x4e82df[_0xa91f50(0x67c)+'e'](_0xa91f50(0x632)+(_0x21188e[_0xa91f50(0x4f9)+'n']+(0x1*0xc83+-0x81+0x1*-0xc01)));}else{if(!_0x16cd89['__sak'+_0xa91f50(0x4c9)])_0x169c74[_0xa91f50(0x67c)+'e'](_0x1f9529[_0xa91f50(0x4a8)](_0x1f9529[_0xa91f50(0x6f0)],_0x5e8fd3[_0xa91f50(0x4f9)+'n']+(0x2*0x9c1+0x355*-0x1+-0x17*0xb4)));}}function _0x591f1f(){var _0x4fa494=_0x275828;_0x4fa494(0x438)!==_0x4fa494(0x1a7)?_0x4e82df[_0x4fa494(0x467)]():new _0x18e4c4(_0x5451a3)['write'+'Field'](_0xaed411,_0x49e0e8,_0x4d3113);}function _0x5c807a(){var _0x2b5637=_0x275828,_0x2ac3ad=(_0x2b5637(0x584)+_0x2b5637(0x3d9)+'4|6')[_0x2b5637(0x1a9)]('|'),_0x5e0d77=0x1525+0x376*-0xa+0xd77;while(!![]){switch(_0x2ac3ad[_0x5e0d77++]){case'0':window[_0x2b5637(0x4e6)+'entLi'+_0x2b5637(0x591)+'r']('keyup',_0x4b46c4,!![]);continue;case'1':window[_0x2b5637(0x4e6)+_0x2b5637(0x557)+_0x2b5637(0x591)+'r'](_0x2b5637(0x542)+'wn',_0x19fb41,!![]);continue;case'2':if(_0x5c3143)return;continue;case'3':window['addEv'+_0x2b5637(0x557)+_0x2b5637(0x591)+'r'](_0x1f9529['CSmvb'],_0x23e1dc,!![]);continue;case'4':window[_0x2b5637(0x4e6)+_0x2b5637(0x557)+_0x2b5637(0x591)+'r'](_0x1f9529[_0x2b5637(0x182)],_0x36489c,!![]);continue;case'5':_0x5c3143=!![];continue;case'6':window['addEv'+_0x2b5637(0x557)+'stene'+'r']('blur',_0x591f1f);continue;}break;}}function _0x4e72e8(_0x595240){var _0x19e082=_0x275828;if(_0x1f9529[_0x19e082(0x431)]!==_0x1f9529[_0x19e082(0x431)])_0x558f6f['hookG'+'od']=_0x3e4985,_0x518253();else{var _0x307229=_0x2acb0f[_0x595240]||[],_0x490693=performance['now']();while(_0x307229['lengt'+'h']&&_0x1f9529['AbYkI'](_0x490693-_0x307229[-0xb*-0xed+0x115*0x21+-0x2de4],0x1355+-0x1763+0x7f6))_0x307229['shift']();return _0x307229['lengt'+'h'];}}function _0x2347ee(_0x3dbaf2){var _0x388b8e=_0x275828;if(document[_0x388b8e(0x304)]&&(_0x1f9529[_0x388b8e(0x21c)](document[_0x388b8e(0x631)+'State'],_0x1f9529['PZwxT'])||_0x1f9529[_0x388b8e(0x717)](document[_0x388b8e(0x631)+_0x388b8e(0x53d)],_0x1f9529[_0x388b8e(0x58a)])))_0x3dbaf2();else document['addEv'+'entLi'+'stene'+'r']('DOMCo'+'ntent'+_0x388b8e(0x26e)+'d',_0x3dbaf2,{'once':!![]});}_0x2347ee(()=>{var _0x34ea02=_0x275828,_0x387a0f={'AtGec':function(_0x596fdb){return _0x596fdb();},'diFMY':'kour-'+'io_30'+_0x34ea02(0x662)+'-pare'+'nt','tobKH':'dJObM','AjxvT':_0x1f9529[_0x34ea02(0x175)],'ojwRT':'none','Lcjoh':function(_0x28b201,_0x585f27){var _0x2bcc36=_0x34ea02;return _0x1f9529[_0x2bcc36(0x3f2)](_0x28b201,_0x585f27);},'SQlFW':_0x1f9529[_0x34ea02(0x695)],'TruMr':'[saku'+_0x34ea02(0x46c)+'ur]\x20U'+_0x34ea02(0x35e)+'nit\x20f'+'ailed'+':','lHscE':function(_0x10e66f,_0xe33fc){return _0x1f9529['vVfFM'](_0x10e66f,_0xe33fc);},'SQQTi':function(_0x1677d1,_0xbce8d7){return _0x1677d1+_0xbce8d7;},'zmlZn':function(_0x2cd394,_0x2b5f89){var _0x2d4f9e=_0x34ea02;return _0x1f9529[_0x2d4f9e(0x416)](_0x2cd394,_0x2b5f89);},'sjoom':function(_0x2b4c85,_0x43cacc){return _0x2b4c85+_0x43cacc;},'kPhBl':_0x1f9529['Vnacd'],'UGhts':_0x1f9529['DvPLA'],'ETGbI':function(_0x48282b,_0x380192){var _0x5042bb=_0x34ea02;return _0x1f9529[_0x5042bb(0x3ab)](_0x48282b,_0x380192);},'dtSJC':_0x34ea02(0x48e),'UuKug':_0x1f9529[_0x34ea02(0x2e5)],'TtrIf':function(_0x31af92,_0x3ecfd0){return _0x31af92/_0x3ecfd0;},'qverx':function(_0x34fe6f,_0x5d9e26){return _0x34fe6f+_0x5d9e26;},'TFyYl':function(_0x455425,_0xdc1a94){return _0x455425-_0xdc1a94;},'wAnTU':function(_0x334d39,_0x3b6285){return _0x334d39+_0x3b6285;},'LLySb':function(_0x2c5b87,_0x5db03a){var _0x4e7fee=_0x34ea02;return _0x1f9529[_0x4e7fee(0x21c)](_0x2c5b87,_0x5db03a);},'elvfs':'jgNVI','PmBhW':'600\x201'+_0x34ea02(0x1ee)+_0x34ea02(0x282)+_0x34ea02(0x2b1)+_0x34ea02(0x290)+_0x34ea02(0x2b1)+'e','CJPfZ':'left','EbxkW':_0x34ea02(0x43f),'OQieJ':_0x34ea02(0x4e1)+'9d','qiLrL':_0x34ea02(0x476)+_0x34ea02(0x56f)+'r\x20gam'+'e…','IpfUS':_0x34ea02(0x582)+'255,1'+'07,15'+_0x34ea02(0x230)+'5)','HGvti':'rgba('+'22,8,'+_0x34ea02(0x555)+'7)','fUkNl':_0x34ea02(0x6ed),'sEQYL':_0x1f9529['vdhyG'],'UjRjg':function(_0x5788ef,_0x495dae){return _0x5788ef-_0x495dae;},'sGBgZ':_0x1f9529[_0x34ea02(0x256)],'XBQFr':'aria-'+_0x34ea02(0x187)+'ed','mmbCW':_0x1f9529['QAEMv'],'CWeUX':_0x1f9529[_0x34ea02(0x1cd)],'sGCEd':function(_0x1bdf79,_0x20c95f){return _0x1f9529['LtngB'](_0x1bdf79,_0x20c95f);},'pSdup':_0x34ea02(0x6ab),'MteQQ':_0x34ea02(0x711)+'h','kIjcQ':_0x34ea02(0x3f8)+_0x34ea02(0x1cb)+_0x34ea02(0x3b4)+'rlay\x20'+'only,'+_0x34ea02(0x5c6)+_0x34ea02(0x326)+'(relo'+_0x34ea02(0x397)+_0x34ea02(0x346)+')','uyMKp':function(_0xf1edba,_0x3bab33){return _0x1f9529['tkBzn'](_0xf1edba,_0x3bab33);},'eqzDh':function(_0x269c1e,_0x308a66){var _0x246d9b=_0x34ea02;return _0x1f9529[_0x246d9b(0x3ab)](_0x269c1e,_0x308a66);},'qpOeu':_0x1f9529[_0x34ea02(0x71e)],'brVQh':_0x1f9529['Bljwd'],'XClZx':'loadi'+'ng','FkiDY':'\x20|\x20sh'+'ooter'+'\x20','SQlyV':_0x34ea02(0x2aa),'AmeqQ':function(_0xff9d17,_0x3234b2){return _0x1f9529['hLOTZ'](_0xff9d17,_0x3234b2);},'lJXcU':_0x1f9529[_0x34ea02(0x371)],'bFTsU':function(_0x3e84ec,_0x26e539,_0x5278c5,_0x9394e3,_0x2f7998,_0x1b2a4c){return _0x3e84ec(_0x26e539,_0x5278c5,_0x9394e3,_0x2f7998,_0x1b2a4c);},'nuGpf':_0x1f9529['KIGHe'],'ecsDy':function(_0x503fc5,_0x594879,_0xcaef25,_0x237bcb){return _0x1f9529['OTAtC'](_0x503fc5,_0x594879,_0xcaef25,_0x237bcb);},'RAhng':_0x1f9529['gAcgQ'],'xhNsS':'Apply','PrJjx':function(_0x25014b,_0x437622){return _0x25014b+_0x437622;},'ntHKS':function(_0x5b2f82,_0x5ce96a){return _0x5b2f82*_0x5ce96a;},'ajoSy':function(_0x4c4b99,_0x7f0ec0){return _0x4c4b99===_0x7f0ec0;},'SEZwB':function(_0x2ecbaf,_0x221796){return _0x2ecbaf+_0x221796;},'thVCY':function(_0x3700de,_0x1657c6){var _0x56f3f4=_0x34ea02;return _0x1f9529[_0x56f3f4(0x42a)](_0x3700de,_0x1657c6);},'WaWQx':function(_0x1dd9c0,_0x332fc4,_0x941c5d,_0xd86c3c,_0x384cbd,_0x154b81,_0x2c83eb){return _0x1f9529['CmxIq'](_0x1dd9c0,_0x332fc4,_0x941c5d,_0xd86c3c,_0x384cbd,_0x154b81,_0x2c83eb);},'yGqFK':function(_0x49d0cb,_0x3baa8b){return _0x1f9529['xsGnu'](_0x49d0cb,_0x3baa8b);},'SoDjk':function(_0x38af8e,_0xbf469c){return _0x38af8e*_0xbf469c;},'mqBXE':function(_0xfa0f9f,_0x57fd61,_0x152f46,_0x2a4dfb,_0x34223b,_0x46be01,_0x2514bf,_0x429593){return _0xfa0f9f(_0x57fd61,_0x152f46,_0x2a4dfb,_0x34223b,_0x46be01,_0x2514bf,_0x429593);},'dbZHT':_0x34ea02(0x214),'MmKtz':_0x34ea02(0x2de),'WPoWb':function(_0xddefe8,_0x198ae1){return _0xddefe8*_0x198ae1;},'oiJdu':_0x34ea02(0x656),'PPEUP':_0x34ea02(0x530),'KjDeh':_0x1f9529[_0x34ea02(0x3af)],'uAfLb':function(_0x4dd69e,_0x1c6af8,_0x45a098){return _0x4dd69e(_0x1c6af8,_0x45a098);},'PmfkW':'sk-mb'+_0x34ea02(0x5c4),'UoELl':_0x1f9529['Yfcel'],'mQJpr':'bCUsO','EvRjo':_0x34ea02(0x315)+'e','jmkbP':function(_0x58537a,_0x202267){return _0x58537a(_0x202267);},'RvhDf':function(_0x580260,_0x22b906){return _0x1f9529['zdziZ'](_0x580260,_0x22b906);},'LnpNJ':function(_0x13400a,_0xa009b7){var _0x339e1b=_0x34ea02;return _0x1f9529[_0x339e1b(0x3e3)](_0x13400a,_0xa009b7);},'hrqHX':function(_0x7dd230,_0x50f494){return _0x7dd230+_0x50f494;},'KPBry':function(_0x3bf8e9,_0x4f6ced){var _0x58fbf9=_0x34ea02;return _0x1f9529[_0x58fbf9(0x420)](_0x3bf8e9,_0x4f6ced);},'vIrzU':_0x34ea02(0x603)+'bound'+'\x20','gCFiU':function(_0x2244b1,_0x1ff472){var _0x1fdf73=_0x34ea02;return _0x1f9529[_0x1fdf73(0x59d)](_0x2244b1,_0x1ff472);},'qoGOy':function(_0x257e58,_0x364c66){return _0x257e58+_0x364c66;},'bvhgk':_0x34ea02(0x1ed)+_0x34ea02(0x207)+'yEngi'+_0x34ea02(0x687)+_0x34ea02(0x6fe)+'tion.'+_0x34ea02(0x4b8)+'arget'+_0x34ea02(0x6a7)+'Rate','iCkEv':_0x1f9529['fFEHx'],'imZjG':function(_0xeef84,_0x581d3e,_0x3f57b0){return _0x1f9529['dqJVo'](_0xeef84,_0x581d3e,_0x3f57b0);},'NojuN':_0x1f9529['WqllY'],'kAnij':_0x1f9529[_0x34ea02(0x3ed)],'fpdYd':_0x34ea02(0x17e)+_0x34ea02(0x244)+'Sharp'+_0x34ea02(0x32d),'dvhYV':_0x1f9529[_0x34ea02(0x6a3)],'VuCbM':_0x1f9529['QJWpE'],'gimKa':function(_0x5e7769){return _0x5e7769();},'DsQob':function(_0x477632){return _0x477632();},'gpPHS':function(_0x13a862,_0x72f654){return _0x13a862===_0x72f654;},'mqkkr':function(_0x165408){var _0x4614d4=_0x34ea02;return _0x1f9529[_0x4614d4(0x43e)](_0x165408);},'SRFqn':_0x1f9529['tEOnB'],'jcVNb':_0x1f9529[_0x34ea02(0x3c1)],'CRzhU':_0x34ea02(0x6cc),'dAENe':function(_0x30ef3c,_0x29276c){return _0x1f9529['wtJzr'](_0x30ef3c,_0x29276c);},'FxntS':'SAFE\x20'+_0x34ea02(0x1cb)+_0x34ea02(0x6c9)+_0x34ea02(0x519)+_0x34ea02(0x1d1)+_0x34ea02(0x5c6)+'ooks\x20'+_0x34ea02(0x486)+_0x34ea02(0x397)+_0x34ea02(0x346)+')','PIfmR':function(_0x2e38da,_0x122e2e){return _0x1f9529['XwAJL'](_0x2e38da,_0x122e2e);},'byhAE':function(_0x5baedd,_0x2bb660){return _0x5baedd+_0x2bb660;},'wvxfA':function(_0x369266,_0x3e41f1){var _0x3d522d=_0x34ea02;return _0x1f9529[_0x3d522d(0x41a)](_0x369266,_0x3e41f1);},'KYiFE':function(_0x23e845,_0x36ebce){return _0x23e845+_0x36ebce;},'ShfTM':function(_0x530a86,_0x294d83){var _0xd4a9ee=_0x34ea02;return _0x1f9529[_0xd4a9ee(0x41a)](_0x530a86,_0x294d83);},'wzdsl':_0x34ea02(0x60b)+'me\x20','JhvlZ':_0x1f9529['HVRWD'],'RzJqt':_0x34ea02(0x3b5)+'t'};_0x2494c7[_0x34ea02(0x5f8)+'ck']&&_0x1f9529[_0x34ea02(0x2c0)](setInterval,()=>{var _0x21f55e=_0x34ea02,_0x2c6187={'yAXXg':_0x21f55e(0x64e)};if(_0x21f55e(0x3e9)===_0x21f55e(0x40c))_0x2e1409[_0x21f55e(0x4e7)+_0x21f55e(0x59e)]=_0x271fac,_0x387a0f['AtGec'](_0x37d256);else try{for(var _0x38f288 of[_0x387a0f[_0x21f55e(0x159)],'kour-'+_0x21f55e(0x579)+_0x21f55e(0x4bc)+_0x21f55e(0x39b)+'t','kour-'+_0x21f55e(0x642)+_0x21f55e(0x265)+_0x21f55e(0x447)+'nt','fulls'+_0x21f55e(0x568)+_0x21f55e(0x190)+'s']){var _0x272622=document[_0x21f55e(0x36c)+'ement'+'ById'](_0x38f288);if(_0x272622&&_0x38f288===_0x21f55e(0x5ad)+'creen'+_0x21f55e(0x190)+'s'){if(_0x387a0f[_0x21f55e(0x5d9)]===_0x387a0f['tobKH']){var _0x23c5b7=_0x272622[_0x21f55e(0x16d)+_0x21f55e(0x65b)];for(var _0x5c35b2=0xaf1+-0x716*-0x2+-0x191d;_0x5c35b2<_0x23c5b7[_0x21f55e(0x4b4)+'h'];_0x5c35b2++){if(_0x23c5b7[_0x5c35b2]['id']&&_0x23c5b7[_0x5c35b2]['id'][_0x21f55e(0x18e)+'Of'](_0x387a0f[_0x21f55e(0x47b)])===0xc9*0x7+-0x1f*0xf5+0x182c)_0x23c5b7[_0x5c35b2]['style'][_0x21f55e(0x694)+'ay']=_0x387a0f[_0x21f55e(0x358)];}}else{_0xfe1918=_0x130ded;if(!_0x2f1f6e){var _0xab2120=_0x5313ba[_0x21f55e(0x43b)+_0x21f55e(0x30f)+_0x21f55e(0x54b)](_0x2c6187[_0x21f55e(0x500)]);_0xab2120[_0x21f55e(0x64d)+_0x21f55e(0x4b1)+'t']=_0x320763,_0x33caba['appen'+_0x21f55e(0x266)+'d'](_0xab2120),_0x45dce2=_0x5615aa(),_0xae14db['appen'+_0x21f55e(0x266)+'d'](_0xd48fff),_0x46ef08(()=>_0x3918e9[_0x21f55e(0x499)+'List']['add']('shown'));}_0x31880b[_0x21f55e(0x499)+_0x21f55e(0x5e1)]['toggl'+'e'](_0x21f55e(0x3e2),_0x2103ff);}}else{if(_0x272622)_0x272622[_0x21f55e(0x64e)]['displ'+'ay']=_0x21f55e(0x68f);}}}catch(_0x89011e){}},-0x10ff+0x89*0x2c+0x143);var _0x521651=document[_0x34ea02(0x43b)+_0x34ea02(0x30f)+_0x34ea02(0x54b)](_0x34ea02(0x4fc)+'s');_0x521651['style'][_0x34ea02(0x510)+'xt']=_0x1f9529[_0x34ea02(0x5cf)];var _0x210ade=_0x521651[_0x34ea02(0x6d5)+_0x34ea02(0x339)]('2d');function _0x5d61fc(){var _0x58bf18=_0x34ea02,_0xac28b9={'DjVKW':'\x20@\x20','qrguN':_0x58bf18(0x62b)};try{var _0x150f54=document['fulls'+_0x58bf18(0x568)+_0x58bf18(0x16a)+'nt'],_0x489b80=_0x150f54&&_0x150f54['tagNa'+'me']!==_0x58bf18(0x493)+'S'?_0x150f54:document['body']||document['docum'+_0x58bf18(0x23c)+_0x58bf18(0x359)];if(_0x387a0f[_0x58bf18(0x72d)](_0x521651[_0x58bf18(0x39b)+_0x58bf18(0x5a8)],_0x489b80))_0x489b80['appen'+'dChil'+'d'](_0x521651);}catch(_0x106ad1){try{if(_0x58bf18(0x348)!==_0x387a0f[_0x58bf18(0x2fc)])document[_0x58bf18(0x304)]['appen'+_0x58bf18(0x266)+'d'](_0x521651);else{var _0x454639={'MaLec':_0x58bf18(0x497)+'wn','wUgHp':_0xac28b9[_0x58bf18(0x3b3)]};_0x526a9f[_0x58bf18(0x4e6)+_0x58bf18(0x557)+'stene'+'r'](_0xac28b9[_0x58bf18(0x284)],_0x27d556=>{var _0x590667=_0x58bf18;try{var _0x4ec081=_0x27d556&&(_0x27d556[_0x590667(0x272)+'ge']||_0x27d556['error']&&_0x27d556['error']['messa'+'ge'])||_0x454639['MaLec'];if(_0x27d556&&_0x27d556[_0x590667(0x300)+'ame'])_0x4ec081+=_0x454639[_0x590667(0x6ec)]+_0x58a829(_0x27d556[_0x590667(0x300)+_0x590667(0x3a5)])['split']('/')[_0x590667(0x675)]()+':'+(_0x27d556[_0x590667(0x51f)+'o']||'?');_0x864fe2[_0x590667(0x15b)+'rror']=_0x328946(_0x4ec081)['slice'](0x1d*0x91+-0x4*0x22d+-0x7b9,-0x25*-0x57+-0x67a+0x579*-0x1);}catch(_0x2a73fa){}});}}catch(_0x3f22a3){}}}var _0x20334d={'w':0x0,'h':0x0,'dpr':0x0};function _0x546f49(){var _0x529d19=_0x34ea02,_0x2e5694=window[_0x529d19(0x716)+_0x529d19(0x5f4)+_0x529d19(0x513)+'o']||-0x95a*-0x1+0xb4d+-0x14a6,_0x4b3c38=window[_0x529d19(0x39f)+_0x529d19(0x619)],_0x52bbbb=window['inner'+'Heigh'+'t'];if(_0x4b3c38===_0x20334d['w']&&_0x52bbbb===_0x20334d['h']&&_0x2e5694===_0x20334d[_0x529d19(0x37d)])return;_0x20334d['w']=_0x4b3c38,_0x20334d['h']=_0x52bbbb,_0x20334d['dpr']=_0x2e5694,_0x521651[_0x529d19(0x340)]=Math[_0x529d19(0x72c)](_0x1f9529[_0x529d19(0x6c7)](_0x4b3c38,_0x2e5694)),_0x521651['heigh'+'t']=Math[_0x529d19(0x72c)](_0x52bbbb*_0x2e5694),_0x210ade['setTr'+_0x529d19(0x5de)+'rm'](_0x2e5694,0x28*-0xef+0x2*0xc89+0xc46*0x1,-0x14e8+-0x82*0x10+0x2*0xe84,_0x2e5694,-0x1426+-0xd3f*-0x1+0x13*0x5d,0xeed+0x4*0x3f3+0x25d*-0xd);}var _0x20e46f=0x1*-0x621+0x18e3+-0x31*0x62,_0x44f0d4=performance[_0x34ea02(0x2ef)](),_0x272d3d=-0x1bd*-0x16+0x2*-0x117f+-0x340;function _0x595888(_0xf8ef54){var _0x30bfdc=_0x34ea02;if(_0x1f9529['xaxCF']!==_0x1f9529[_0x30bfdc(0x714)])_0x39fbf9[_0x30bfdc(0x633)](_0x387a0f[_0x30bfdc(0x34f)],_0x1e9dd9&&_0x12f3cd[_0x30bfdc(0x272)+'ge']);else{var _0x59f313=Number(_0x2494c7[_0x30bfdc(0x4b0)+'le'])||-0x9*-0x3a5+0x1060+-0x1896*0x2,_0x45dedd=(0x5*-0x6a7+-0x4*0x695+0x3bb9)*_0x59f313,_0xa2d51=_0x1f9529['GjQtx'](0xb*0x207+0x17*0x12a+0x310f*-0x1,_0x59f313),_0x4f6a16=_0x1f9529[_0x30bfdc(0x305)](_0x1f9529[_0x30bfdc(0x416)](_0x45dedd,-0x20b9*-0x1+-0x57*0x65+0x19d),_0xa2d51*(-0x4*-0x2a9+0x49e*0x1+-0xf40)),_0x5afff0=_0x1f9529['AOoxg'](_0x45dedd,-0x1118*-0x2+-0xd92+-0x149b)+_0xa2d51*(0x1efd+-0x3bb+-0x40*0x6d),_0x1a3d69=_0x2494c7[_0x30bfdc(0x616)],_0x2a946f=_0x1f9529[_0x30bfdc(0x572)](_0x1a3d69,'br')?_0xf8ef54[_0x30bfdc(0x2fd)]-(-0x5*0xea+0x2507+0x2065*-0x1)-_0x4f6a16:_0x1f9529['hLOTZ'](_0xf8ef54['left'],0x2*0x1072+-0x19*-0x4d+0x3ab*-0xb),_0x5d2bce=_0x1a3d69==='ml'?_0x1f9529['uUCag'](_0x1f9529['tkBzn'](_0xf8ef54['top'],_0xf8ef54[_0x30bfdc(0x532)+'t']/(0x1f5b*0x1+-0x1*-0x1de1+-0x3d3a)),_0x5afff0/(-0x1*-0x23d1+-0x1e7b+-0x2c*0x1f)):_0xf8ef54['botto'+'m']-_0x5afff0-(_0x1a3d69==='bl'?0x1*0x184d+-0x727*0x1+0x1*-0x10c6:-0x793*-0x1+-0xdd3+0x6d6),_0x616936=(_0x4818c9,_0x5b2f00,_0x3ca923,_0x3087b5,_0x49553b,_0x22f606,_0x8f35da)=>{var _0x2b1665=_0x30bfdc,_0x1a2331=('15|9|'+'14|5|'+'16|2|'+'8|12|'+_0x2b1665(0x2e0)+_0x2b1665(0x57e)+_0x2b1665(0x2da)+_0x2b1665(0x621))[_0x2b1665(0x1a9)]('|'),_0x2a9060=0x1771+0xa5d+-0x21ce;while(!![]){switch(_0x1a2331[_0x2a9060++]){case'0':_0x210ade[_0x2b1665(0x56a)+'aseli'+'ne']=_0x2b1665(0x72e)+'e';continue;case'1':_0x210ade[_0x2b1665(0x23e)+'e']();continue;case'2':_0x210ade[_0x2b1665(0x5a7)]();continue;case'3':_0x210ade[_0x2b1665(0x372)+_0x2b1665(0x196)](_0x4818c9,_0x387a0f['lHscE'](_0x3ca923,_0x49553b/(-0xf09+-0x37*0x8b+0x2ce8)),_0x387a0f[_0x2b1665(0x1df)](_0x3087b5,_0x22f606/(-0x167*0x2+0xf*0x40+-0xf0))-(_0x8f35da?_0x387a0f['zmlZn'](-0x4f*0x79+0x1c55+-0x907*-0x1,_0x59f313):0x1775+0xe3*0x11+0x1*-0x2688));continue;case'4':_0x210ade['resto'+'re']();continue;case'5':if(_0x210ade[_0x2b1665(0x72c)+'Rect'])_0x210ade[_0x2b1665(0x72c)+_0x2b1665(0x71b)](_0x3ca923,_0x3087b5,_0x49553b,_0x22f606,(-0x1eee+0x1f34+-0x3f)*_0x59f313);else _0x210ade[_0x2b1665(0x308)](_0x3ca923,_0x3087b5,_0x49553b,_0x22f606);continue;case'6':_0x210ade[_0x2b1665(0x4ce)+'tyle']=_0x233fbb?'#fff':_0x2b1665(0x582)+'255,2'+_0x2b1665(0x366)+'0,0.8'+')';continue;case'7':_0x8f35da&&(_0x210ade[_0x2b1665(0x280)]=_0x387a0f[_0x2b1665(0x3ea)]('600\x20'+Math[_0x2b1665(0x72c)](_0x387a0f[_0x2b1665(0x2ee)](0x1fe+-0xbc7+0x9d2,_0x59f313)),_0x387a0f[_0x2b1665(0x5e5)]),_0x210ade['fillS'+'tyle']=_0x233fbb?_0x2b1665(0x6ed):_0x387a0f[_0x2b1665(0x574)],_0x210ade[_0x2b1665(0x372)+_0x2b1665(0x196)](_0x8f35da,_0x387a0f[_0x2b1665(0x3ea)](_0x3ca923,_0x49553b/(-0x8ea+0x1d5b+0x146f*-0x1)),_0x3087b5+_0x22f606/(0x1e4*0xc+-0x17*-0x192+-0x3acc*0x1)+(-0x4*-0x119+0xe0b+-0x1267)*_0x59f313));continue;case'8':_0x210ade[_0x2b1665(0x264)+_0x2b1665(0x365)]=-0x1825+0x2b1*-0x2+0x1d88;continue;case'9':_0x210ade['save']();continue;case'10':_0x210ade['textA'+_0x2b1665(0x3d6)]=_0x2b1665(0x6d8)+'r';continue;case'11':_0x210ade[_0x2b1665(0x280)]=_0x387a0f[_0x2b1665(0x6cb)](_0x387a0f[_0x2b1665(0x1df)](_0x387a0f[_0x2b1665(0x537)],Math[_0x2b1665(0x72c)](_0x387a0f['zmlZn'](0x5dc+-0x2703+-0x2133*-0x1,_0x59f313))),_0x2b1665(0x659)+'-sans'+_0x2b1665(0x19f)+_0x2b1665(0x1e8)+_0x2b1665(0x48c)+_0x2b1665(0x3e5)+'s-ser'+'if');continue;case'12':_0x210ade['strok'+'eStyl'+'e']=_0x233fbb?_0x2c4af5:_0x387a0f['UuKug'];continue;case'13':_0x233fbb&&(_0x210ade[_0x2b1665(0x1e4)+_0x2b1665(0x227)+'r']=_0x3e7e88,_0x210ade['shado'+_0x2b1665(0x311)]=0x7a*-0x1a+-0xa50+0x16c2,_0x210ade[_0x2b1665(0x5a7)](),_0x210ade[_0x2b1665(0x1e4)+'wBlur']=-0x1*-0x1d32+0x2*0xb19+-0xd*0x3f4);continue;case'14':_0x210ade['begin'+_0x2b1665(0x4d5)]();continue;case'15':var _0x233fbb=_0x4e82df['has'](_0x5b2f00);continue;case'16':_0x210ade[_0x2b1665(0x4ce)+_0x2b1665(0x4f2)]=_0x233fbb?'rgba('+'255,1'+'07,15'+'7,0.8'+'5)':_0x2b1665(0x582)+_0x2b1665(0x44e)+'16,0.'+'7)';continue;}break;}};_0x616936('W',_0x1f9529['dMoes'],_0x2a946f+_0x45dedd+_0xa2d51,_0x5d2bce,_0x45dedd,_0x45dedd),_0x1f9529[_0x30bfdc(0x70d)](_0x616936,'A',_0x30bfdc(0x213),_0x2a946f,_0x1f9529[_0x30bfdc(0x386)](_0x5d2bce,_0x45dedd)+_0xa2d51,_0x45dedd,_0x45dedd),_0x1f9529[_0x30bfdc(0x70d)](_0x616936,'S',_0x1f9529['lnAxN'],_0x2a946f+_0x45dedd+_0xa2d51,_0x1f9529[_0x30bfdc(0x4a8)](_0x5d2bce,_0x45dedd)+_0xa2d51,_0x45dedd,_0x45dedd),_0x1f9529['CmxIq'](_0x616936,'D',_0x1f9529[_0x30bfdc(0x69b)],_0x2a946f+(_0x45dedd+_0xa2d51)*(-0x6*-0x336+0x5fe*0x2+-0x1f3e),_0x1f9529['vVfFM'](_0x5d2bce,_0x45dedd)+_0xa2d51,_0x45dedd,_0x45dedd);var _0xf5a049=_0x1f9529[_0x30bfdc(0x42a)](_0x4f6a16-_0xa2d51,0x1229+-0x23ac+0x1*0x1185),_0x35ea74=_0x5d2bce+(_0x45dedd+_0xa2d51)*(-0x4f5+0x3ae+0x149);_0x616936(_0x1f9529[_0x30bfdc(0x168)],_0x30bfdc(0x632)+'1',_0x2a946f,_0x35ea74,_0xf5a049,_0x45dedd,_0x2494c7[_0x30bfdc(0x1de)]?_0x4e72e8(-0xded+0xa84*-0x1+0x1872)+_0x1f9529['rewcO']:''),_0x616936(_0x30bfdc(0x630),_0x1f9529['xrcPv'],_0x2a946f+_0xf5a049+_0xa2d51,_0x35ea74,_0xf5a049,_0x45dedd,_0x2494c7[_0x30bfdc(0x1de)]?_0x1f9529['OSpUe'](_0x4e72e8,0x82f+0xeef*-0x2+0x15b2)+'\x20CPS':''),_0x1f9529[_0x30bfdc(0x70d)](_0x616936,'',_0x1f9529[_0x30bfdc(0x71f)],_0x2a946f,_0x35ea74+_0x45dedd+_0xa2d51,_0x4f6a16,_0x1f9529[_0x30bfdc(0x5c0)](_0x45dedd,-0x1*0x1c09+0xe2f+-0x2*-0x6ed+0.45));}}function _0x532b47(_0x4530ca){var _0x233adb=_0x34ea02,_0x56e7b2=_0x387a0f[_0x233adb(0x1dd)](_0x4530ca['width'],0x22da+0x1a9f+-0x3d77),_0x42adda=_0x387a0f[_0x233adb(0x1dd)](_0x4530ca[_0x233adb(0x532)+'t'],-0x515*-0x2+-0x20e3+0x211*0xb),_0x516d4f=Number(_0x2494c7['chSiz'+'e'])||0x25b5+-0x8f+-0x2525,_0x2b1cbd=/^#[0-9a-f]{6}$/i['test'](_0x2494c7[_0x233adb(0x1c3)+'or'])?_0x2494c7[_0x233adb(0x1c3)+'or']:_0x233adb(0x4e1)+'9d';_0x210ade['save'](),_0x210ade[_0x233adb(0x23e)+'eStyl'+'e']=_0x2b1cbd,_0x210ade['fillS'+_0x233adb(0x4f2)]=_0x2b1cbd,_0x210ade[_0x233adb(0x264)+'idth']=Math['max'](-0x1a81+0xcb6+0xdcc+0.5,_0x387a0f[_0x233adb(0x2ee)](0x1*-0x767+0x1*0x180a+-0x10a1,_0x516d4f)),_0x210ade[_0x233adb(0x1e4)+'wColo'+'r']=_0x2b1cbd,_0x210ade['shado'+_0x233adb(0x311)]=-0x3*-0x61+-0x207d+0x1f60;var _0x34dc3a=(-0x1*0x22f4+0xf*-0x17e+0x4*0xe57)*_0x516d4f,_0x2a6617=(0x1b37+-0xcc+0x1*-0x1a63)*_0x516d4f;_0x210ade['begin'+_0x233adb(0x4d5)](),_0x210ade['moveT'+'o'](_0x56e7b2-_0x34dc3a-_0x2a6617,_0x42adda),_0x210ade[_0x233adb(0x479)+'o'](_0x56e7b2-_0x34dc3a,_0x42adda),_0x210ade['moveT'+'o'](_0x387a0f['qverx'](_0x56e7b2,_0x34dc3a),_0x42adda),_0x210ade[_0x233adb(0x479)+'o'](_0x56e7b2+_0x34dc3a+_0x2a6617,_0x42adda),_0x210ade[_0x233adb(0x274)+'o'](_0x56e7b2,_0x387a0f[_0x233adb(0x1ce)](_0x42adda,_0x34dc3a)-_0x2a6617),_0x210ade[_0x233adb(0x479)+'o'](_0x56e7b2,_0x42adda-_0x34dc3a),_0x210ade[_0x233adb(0x274)+'o'](_0x56e7b2,_0x387a0f[_0x233adb(0x40f)](_0x42adda,_0x34dc3a)),_0x210ade[_0x233adb(0x479)+'o'](_0x56e7b2,_0x387a0f['SQQTi'](_0x42adda,_0x34dc3a)+_0x2a6617),_0x210ade['strok'+'e'](),_0x210ade['begin'+_0x233adb(0x4d5)](),_0x210ade[_0x233adb(0x4c6)](_0x56e7b2,_0x42adda,(0x1*0xb0a+-0x20d*-0x13+0x100*-0x32+0.6000000000000001)*_0x516d4f,-0xf77+0x7b9+0x7be*0x1,_0x387a0f['zmlZn'](Math['PI'],-0x1f91+-0xa*-0x32d+-0x2f)),_0x210ade['fill'](),_0x210ade['resto'+'re']();}function _0x509122(_0x5626e9){var _0x38b7f5=_0x34ea02;_0x210ade['save'](),_0x210ade[_0x38b7f5(0x280)]=_0x387a0f['PmBhW'],_0x210ade['textA'+_0x38b7f5(0x3d6)]=_0x387a0f[_0x38b7f5(0x480)],_0x210ade[_0x38b7f5(0x56a)+'aseli'+'ne']=_0x387a0f['EbxkW'];var _0x53a2ae=0x2176+0x1fd8+-0x4122,_0x38670c=0x147+-0x1e2f+0xe7a*0x2,_0x577d30=(_0x9afd0a,_0x3d03f9)=>{var _0x633602=_0x38b7f5;_0x387a0f[_0x633602(0x31c)](_0x387a0f[_0x633602(0x1ef)],_0x633602(0x258))?(_0x210ade['fillS'+'tyle']=_0x3d03f9||_0x633602(0x582)+'255,2'+'35,24'+_0x633602(0x4f0)+'5)',_0x210ade['fillT'+_0x633602(0x196)](_0x9afd0a,_0x38670c,_0x53a2ae),_0x53a2ae+=-0xcc+0x151*-0x1a+0x2316):_0x130586=_0x4fc184['parse'](_0x3cf91e['getIt'+'em'](_0x633602(0x614)+'a.kou'+'r.ui.'+'v1')||'{}');};_0x577d30(_0x38b7f5(0x28c)+'A\x20KOU'+'R\x20v1.'+'1',_0x387a0f[_0x38b7f5(0x430)]);if(_0x2494c7[_0x38b7f5(0x69a)])_0x577d30(_0x272d3d+'\x20FPS');if(!_0x128de9['gameL'+_0x38b7f5(0x177)])_0x577d30(_0x387a0f[_0x38b7f5(0x536)],_0x38b7f5(0x582)+'255,1'+'80,19'+_0x38b7f5(0x705)+')');_0x210ade['resto'+'re']();}function _0x466125(){var _0x502d82=_0x34ea02,_0x4b43dc={'vbQHb':function(_0x4ab39b){return _0x4ab39b();}};if('FTeZt'===_0x502d82(0x26f)){requestAnimationFrame(_0x466125),_0x20e46f++;var _0x1fceee=performance[_0x502d82(0x2ef)]();_0x1f9529[_0x502d82(0x209)](_0x1fceee-_0x44f0d4,-0x2387+0x4*0x8f1+-0x1*-0x1b7)&&(_0x502d82(0x4d0)===_0x502d82(0x4d0)?(_0x272d3d=Math[_0x502d82(0x72c)](_0x1f9529[_0x502d82(0x42a)](_0x20e46f*(0x1fc1+0x11*0x22d+-0x1*0x40d6),_0x1fceee-_0x44f0d4)),_0x20e46f=0x1529+-0x1*0x227e+0x1*0xd55,_0x44f0d4=_0x1fceee):(_0x4e4ea7=new _0x1a043d(),_0xd78ab9['set'](_0x33e636,_0x38535)));_0x546f49(),_0x5d61fc(),_0x210ade['clear'+_0x502d82(0x71b)](0x24c5+0x23a6+-0x486b,0x8d5+-0x59c+-0x339,_0x20334d['w'],_0x20334d['h']);var _0xa1728c={'left':0x0,'top':0x0,'right':_0x20334d['w'],'bottom':_0x20334d['h'],'width':_0x20334d['w'],'height':_0x20334d['h']};if(_0x2494c7['cross'+_0x502d82(0x67d)])_0x1f9529['LtngB'](_0x532b47,_0xa1728c);if(_0x2494c7['keyst'+_0x502d82(0x2e3)])_0x595888(_0xa1728c);_0x1f9529[_0x502d82(0x16f)](_0x509122,_0xa1728c);}else _0x247774[_0x502d82(0x569)+_0x502d82(0x67d)]=_0x739b44,_0x4b43dc[_0x502d82(0x6fb)](_0x5e65e8);}var _0x3ac27b=document['creat'+_0x34ea02(0x30f)+_0x34ea02(0x54b)](_0x34ea02(0x530));_0x3ac27b['id']=_0x1f9529[_0x34ea02(0x2a5)],_0x3ac27b[_0x34ea02(0x64e)][_0x34ea02(0x510)+'xt']='posit'+_0x34ea02(0x2f4)+'ixed;'+'inset'+':0;z-'+'index'+_0x34ea02(0x6ae)+'48364'+'7;poi'+_0x34ea02(0x60c)+_0x34ea02(0x18b)+'s:non'+'e;';var _0x49f5ea=_0x3ac27b[_0x34ea02(0x1b3)+'hShad'+'ow']({'mode':'open'});(document[_0x34ea02(0x304)]||document[_0x34ea02(0x1f7)+_0x34ea02(0x23c)+_0x34ea02(0x359)])[_0x34ea02(0x525)+'dChil'+'d'](_0x3ac27b);var _0x4d831d=![],_0x5b48b9={};try{_0x5b48b9=JSON[_0x34ea02(0x4ca)](localStorage['getIt'+'em']('sakur'+_0x34ea02(0x680)+'r.ui.'+'v1')||'{}');}catch(_0xda2bc8){}function _0xbecf7f(){var _0x2b8e06=_0x34ea02,_0x41581f={'gsBHa':_0x387a0f[_0x2b8e06(0x245)],'DenwB':_0x387a0f['HGvti'],'gSfTh':_0x387a0f['fUkNl'],'mYajH':_0x387a0f[_0x2b8e06(0x2f2)],'WAkFB':function(_0x17930b,_0x4f5d0a){return _0x17930b+_0x4f5d0a;},'hLKNd':function(_0x4033b6,_0x33fe90){var _0x3b9b9f=_0x2b8e06;return _0x387a0f[_0x3b9b9f(0x2c3)](_0x4033b6,_0x33fe90);},'Voklu':function(_0x30e0b4,_0x3e22e0){return _0x30e0b4*_0x3e22e0;},'dayjA':'600\x20','NkOmK':'px\x20ui'+_0x2b8e06(0x1f8)+'-seri'+_0x2b8e06(0x1e8)+_0x2b8e06(0x48c)+_0x2b8e06(0x3e5)+_0x2b8e06(0x541)+'if'};if(_0x387a0f[_0x2b8e06(0x247)]===_0x387a0f[_0x2b8e06(0x247)])try{if('RSRVm'===_0x2b8e06(0x2e9)){var _0x22ada7=_0x5b28be['has'](_0x46670d);_0xd40582['save'](),_0x125928[_0x2b8e06(0x291)+_0x2b8e06(0x4d5)]();if(_0x134706['round'+'Rect'])_0x13cfbf[_0x2b8e06(0x72c)+'Rect'](_0x1fc86c,_0x45e86d,_0x100951,_0x422dfd,(-0x1*-0x895+-0x1cbf+0x1431)*_0x174826);else _0x2e9ce2['rect'](_0x4e864e,_0x541f79,_0x4149bc,_0x36d3e6);_0x3484cb[_0x2b8e06(0x4ce)+_0x2b8e06(0x4f2)]=_0x22ada7?_0x41581f[_0x2b8e06(0x5dd)]:_0x41581f[_0x2b8e06(0x336)],_0x5b75b5['fill'](),_0x43865b['lineW'+'idth']=0xcfc+-0x4d4+0x1*-0x827,_0x253982[_0x2b8e06(0x23e)+_0x2b8e06(0x325)+'e']=_0x22ada7?_0x3a772a:_0x2b8e06(0x582)+'255,1'+'07,15'+'7,0.3'+'5)',_0x49bc62['strok'+'e'](),_0x22ada7&&(_0x5acd5b[_0x2b8e06(0x1e4)+_0x2b8e06(0x227)+'r']=_0x221b0b,_0x23c71d[_0x2b8e06(0x1e4)+'wBlur']=-0x313*0x9+-0xae*-0x27+-0x1*-0x137,_0x11aedc[_0x2b8e06(0x5a7)](),_0x1d1c6c[_0x2b8e06(0x1e4)+'wBlur']=-0x38*-0x3b+0x3ee*-0x8+0x1288*0x1),_0x494aea['fillS'+_0x2b8e06(0x4f2)]=_0x22ada7?_0x41581f['gSfTh']:'rgba('+'255,2'+_0x2b8e06(0x366)+_0x2b8e06(0x254)+')',_0x4713fa[_0x2b8e06(0x61b)+'lign']=_0x41581f[_0x2b8e06(0x508)],_0x551645[_0x2b8e06(0x56a)+_0x2b8e06(0x1fe)+'ne']='middl'+'e',_0x3f78fd[_0x2b8e06(0x280)]='700\x20'+_0x462e8d[_0x2b8e06(0x72c)]((0xe*-0x1c+-0x92a*-0x2+-0x10c0)*_0x471c21)+(_0x2b8e06(0x659)+_0x2b8e06(0x1f8)+_0x2b8e06(0x19f)+_0x2b8e06(0x1e8)+'tem-u'+'i,san'+_0x2b8e06(0x541)+'if'),_0xc7dfbf['fillT'+_0x2b8e06(0x196)](_0x5c2283,_0x41581f[_0x2b8e06(0x6c6)](_0x242b5b,_0x580282/(0x17c2+0x425*0x1+0x1be5*-0x1)),_0x41581f[_0x2b8e06(0x71c)](_0x4be3a5+_0x170493/(0xb57*-0x1+-0x2*0xc4d+-0x23f3*-0x1),_0x1f4a08?_0x41581f['Voklu'](0x7*-0x33b+0x1bff+-0x55d*0x1,_0x5456c2):0x2224+-0x6a*-0x5+-0x2436)),_0x555cd5&&(_0x11501e[_0x2b8e06(0x280)]=_0x41581f['WAkFB'](_0x41581f[_0x2b8e06(0x683)]+_0x597e72['round']((0x10ef+0x10a1+-0x2187*0x1)*_0x4b58c1),_0x41581f[_0x2b8e06(0x1f3)]),_0x43d618[_0x2b8e06(0x4ce)+'tyle']=_0x22ada7?_0x2b8e06(0x6ed):_0x2b8e06(0x582)+_0x2b8e06(0x602)+'35,24'+_0x2b8e06(0x2d2)+'5)',_0x101ec8[_0x2b8e06(0x372)+'ext'](_0x5bdd19,_0x4d012e+_0x42cfb3/(0x1644+-0x198a+0x23*0x18),_0x3899cc+_0x5ee573/(-0x2*-0xe81+-0x1*0x3f1+-0x503*0x5)+_0x41581f[_0x2b8e06(0x18f)](-0xe3+-0x65b+0x10a*0x7,_0x38a8c7))),_0x880e4c[_0x2b8e06(0x40e)+'re']();}else localStorage[_0x2b8e06(0x6e1)+'em'](_0x2b8e06(0x614)+_0x2b8e06(0x680)+_0x2b8e06(0x1da)+'v1',JSON['strin'+_0x2b8e06(0x4e4)](_0x5b48b9));}catch(_0x1a68e0){}else{var _0x4f1087=_0x542525[_0x2b8e06(0x19c)+'ve'];if(_0x4f1087)try{_0x4f1087[_0x2b8e06(0x225)+'ed']=![];}catch(_0x358fc1){}}}function _0x173f13(_0x15b4d6,_0x25776a){var _0x7acbdd=_0x34ea02,_0x3ebe96=_0x387a0f[_0x7acbdd(0x460)]['split']('|'),_0x4bf7d6=0x2*0xe4b+0x1587+-0x321d;while(!![]){switch(_0x3ebe96[_0x4bf7d6++]){case'0':return _0x16cd73;case'1':_0x16cd73['class'+_0x7acbdd(0x2d3)]=_0x7acbdd(0x2c8)+'itch';continue;case'2':_0x16cd73[_0x7acbdd(0x205)]='butto'+'n';continue;case'3':var _0x16cd73=document[_0x7acbdd(0x43b)+_0x7acbdd(0x30f)+_0x7acbdd(0x54b)](_0x387a0f[_0x7acbdd(0x218)]);continue;case'4':_0x16cd73['oncli'+'ck']=_0x494a23=>{var _0x5c21a3=_0x7acbdd;_0x494a23[_0x5c21a3(0x684)+'ropag'+'ation']();var _0x5f044c=_0x16cd73[_0x5c21a3(0x4c7)+'tribu'+'te'](_0x387a0f[_0x5c21a3(0x3e7)])!==_0x5c21a3(0x2c6);_0x16cd73[_0x5c21a3(0x1a8)+_0x5c21a3(0x20c)+'te'](_0x387a0f['XBQFr'],String(_0x5f044c)),_0x25776a(_0x5f044c);};continue;case'5':_0x16cd73[_0x7acbdd(0x1a8)+'tribu'+'te'](_0x387a0f[_0x7acbdd(0x3e7)],_0x387a0f[_0x7acbdd(0x34e)](String,!!_0x15b4d6));continue;case'6':_0x16cd73[_0x7acbdd(0x1a8)+'tribu'+'te'](_0x387a0f['pSdup'],_0x387a0f[_0x7acbdd(0x699)]);continue;}break;}}function _0x2d12c5(_0x25c33d,_0x1148d7,_0xb46f89,_0x356abf,_0x46985f){var _0x136fda=_0x34ea02,_0x3a957d={'luNyz':function(_0x15980b,_0x4fcee0){var _0xcc6c42=_0x43b7;return _0x1f9529[_0xcc6c42(0x416)](_0x15980b,_0x4fcee0);},'CTkJs':function(_0x512139,_0x3f0da1){return _0x512139/_0x3f0da1;},'WOuvn':function(_0x5cda11,_0x10e61a){var _0x38a672=_0x43b7;return _0x1f9529[_0x38a672(0x55c)](_0x5cda11,_0x10e61a);},'hNGNx':function(_0x350f4a){var _0x67dc56=_0x43b7;return _0x1f9529[_0x67dc56(0x39e)](_0x350f4a);}};if(_0x1f9529[_0x136fda(0x47d)]!==_0x1f9529['LZdMz']){var _0x53cd6c=_0x246b29[_0x136fda(0x231)+_0x136fda(0x700)]?_0x387a0f['kIjcQ']:_0x2af53f[_0x136fda(0x5f2)]?_0x387a0f['sjoom'](_0x387a0f[_0x136fda(0x3ea)](_0x387a0f['uyMKp']('UWMK\x20'+'bound'+'\x20',_0x3a1851[_0x136fda(0x440)+'Total']?_0x387a0f['eqzDh'](_0x231cfc[_0x136fda(0x440)+'Ok']+'/',_0x81e66e[_0x136fda(0x440)+_0x136fda(0x5cd)])+(_0x136fda(0x2e8)+'s'):_0x387a0f['qpOeu'])+(_0x136fda(0x60b)+'me\x20'),_0x21c311[_0x136fda(0x316)+'oaded']?_0x387a0f['brVQh']:_0x387a0f['XClZx'])+_0x387a0f[_0x136fda(0x6ee)]+(_0x25b886[_0x136fda(0x57d)+'ers']?_0x136fda(0x2aa):_0x387a0f[_0x136fda(0x358)])+('\x20|\x20mo'+_0x136fda(0x24b)+'t\x20'),_0x3e07fc[_0x136fda(0x484)+'ents']?_0x387a0f['SQlyV']:_0x387a0f[_0x136fda(0x358)]):_0x136fda(0x603)+'MISSI'+'NG\x20—\x20'+_0x136fda(0x212)+_0x136fda(0x324)+_0x136fda(0x69e)+'einst'+_0x136fda(0x4d7)+_0x136fda(0x4a1)+_0x136fda(0x18d)+'ipt)';if(_0x39e6e2[_0x136fda(0x15b)+_0x136fda(0x550)])_0x53cd6c+=_0x387a0f[_0x136fda(0x561)](_0x387a0f['lJXcU'],_0x297e19['lastE'+_0x136fda(0x550)]);return _0x387a0f['bFTsU'](_0x1ce642,_0x387a0f[_0x136fda(0x4c1)],_0x53cd6c,_0x118da3['uwmk'],null,[_0x387a0f['ecsDy'](_0x4226ec,_0x387a0f[_0x136fda(0x50c)],_0x136fda(0x1ed)+_0x136fda(0x207)+'yEngi'+_0x136fda(0x687)+_0x136fda(0x6fe)+_0x136fda(0x43a)+'set_t'+'arget'+'Frame'+'Rate',_0x39816c(_0x387a0f['xhNsS'],()=>{var _0x179ce5=_0x136fda;try{if(_0x4492dd)_0x3498b2[_0x179ce5(0x428)]('Unity'+'Engin'+'e.App'+_0x179ce5(0x6b3)+'ion',_0x179ce5(0x4b8)+'arget'+_0x179ce5(0x6a7)+_0x179ce5(0x29a),[-0x8*0x2ed+-0x8c4+0x2*0x108e]);}catch(_0x46a9b2){}}))]);}else{var _0xb91c9=document['creat'+_0x136fda(0x30f)+'ent'](_0x136fda(0x530));_0xb91c9[_0x136fda(0x499)+'Name']=_0x136fda(0x322)+'nge';var _0x30f208=document[_0x136fda(0x43b)+_0x136fda(0x30f)+_0x136fda(0x54b)](_0x1f9529[_0x136fda(0x5b8)]);_0x30f208['type']='range',_0x30f208['class'+'Name']=_0x136fda(0x1dc)+_0x136fda(0x6f3),_0x30f208['min']=_0x1148d7,_0x30f208['max']=_0xb46f89,_0x30f208['step']=_0x356abf,_0x30f208[_0x136fda(0x504)]=_0x25c33d;var _0x573d08=document['creat'+'eElem'+_0x136fda(0x54b)](_0x1f9529['NyCVn']);_0x573d08['class'+_0x136fda(0x2d3)]='sk-va'+'l',_0x573d08['textC'+'onten'+'t']=String(_0x25c33d);var _0x63c898=()=>{var _0x7e29b2=_0x136fda;_0x573d08[_0x7e29b2(0x64d)+'onten'+'t']=String(_0x30f208[_0x7e29b2(0x504)]),_0xb91c9[_0x7e29b2(0x64e)]['setPr'+_0x7e29b2(0x59c)+'y'](_0x7e29b2(0x1f0),_0x3a957d[_0x7e29b2(0x66d)](_0x3a957d['CTkJs'](_0x3a957d[_0x7e29b2(0x474)](_0x30f208['value'],_0x1148d7),_0xb46f89-_0x1148d7),0x1*-0x14fe+0x16a9*-0x1+-0x29*-0x113)+'%');};return _0x30f208[_0x136fda(0x50d)+'ut']=()=>{var _0x9e5181=_0x136fda;_0x3a957d[_0x9e5181(0x573)](_0x63c898),_0x46985f(Number(_0x30f208['value']));},_0x63c898(),_0xb91c9['appen'+'d'](_0x30f208,_0x573d08),_0xb91c9;}}function _0x3dab48(_0x586fa6,_0x323623){var _0x2e411c=_0x34ea02,_0x2d8a30=(_0x2e411c(0x554)+_0x2e411c(0x2eb)+'5')['split']('|'),_0x4a4202=-0x1*-0x1058+-0xd0*-0x21+-0x2b28;while(!![]){switch(_0x2d8a30[_0x4a4202++]){case'0':var _0x16db0e=document[_0x2e411c(0x43b)+_0x2e411c(0x30f)+_0x2e411c(0x54b)](_0x1f9529[_0x2e411c(0x5b8)]);continue;case'1':_0x16db0e[_0x2e411c(0x499)+'Name']=_0x1f9529[_0x2e411c(0x1f2)];continue;case'2':_0x16db0e['oninp'+'ut']=()=>_0x323623(_0x16db0e[_0x2e411c(0x504)]);continue;case'3':_0x16db0e['type']=_0x2e411c(0x2ca);continue;case'4':_0x16db0e[_0x2e411c(0x504)]=/^#[0-9a-f]{6}$/i[_0x2e411c(0x27b)](_0x586fa6)?_0x586fa6:_0x2e411c(0x4e1)+'9d';continue;case'5':return _0x16db0e;}break;}}function _0xd7dbc(_0x7a7566,_0x3cdfc0,_0x5ad8f6){var _0x746262=_0x34ea02,_0xfccb69=document[_0x746262(0x43b)+'eElem'+_0x746262(0x54b)](_0x1f9529['CRSHY']);_0xfccb69[_0x746262(0x499)+_0x746262(0x2d3)]=_0x1f9529[_0x746262(0x302)];for(var [_0x177f34,_0xf2c107]of _0x3cdfc0){var _0x456cfc=document[_0x746262(0x43b)+_0x746262(0x30f)+_0x746262(0x54b)](_0x746262(0x5ee)+'n');_0x456cfc[_0x746262(0x504)]=_0x177f34,_0x456cfc[_0x746262(0x64d)+_0x746262(0x4b1)+'t']=_0xf2c107,_0xfccb69['appen'+'dChil'+'d'](_0x456cfc);}return _0xfccb69[_0x746262(0x504)]=_0x7a7566,_0xfccb69['oncha'+_0x746262(0x4ff)]=()=>_0x5ad8f6(_0xfccb69['value']),_0xfccb69;}function _0x5a546d(_0x3c0986,_0x82b120){var _0x4be361=_0x34ea02,_0x1daa61={'YNeqR':_0x1f9529['Vnacd'],'RchSN':function(_0x58ad82,_0xaddf46){return _0x58ad82*_0xaddf46;},'GHSPG':_0x1f9529[_0x4be361(0x65f)],'JrLWF':function(_0x5f4aa8,_0x4d91b4){return _0x5f4aa8*_0x4d91b4;},'nSyDn':_0x4be361(0x582)+_0x4be361(0x602)+_0x4be361(0x366)+_0x4be361(0x2d2)+'5)','uPTzC':function(_0x548e20,_0xd6128c){return _0x548e20/_0xd6128c;},'QWPOn':function(_0x35e623,_0x2a918f){var _0x1c4336=_0x4be361;return _0x1f9529[_0x1c4336(0x560)](_0x35e623,_0x2a918f);},'RLlZw':function(_0xc4f677,_0x810a0a){return _0xc4f677*_0x810a0a;},'LycDH':function(_0x210883,_0x1ebe68){return _0x210883+_0x1ebe68;}};if(_0x1f9529['TYhxq']('qdgod',_0x4be361(0x157))){var _0x4f0a3a=_0x387a0f[_0x4be361(0x34e)](_0x738bf3,_0x55f569[_0x4be361(0x4b0)+'le'])||-0x1bfb+0x1*0x1eda+-0x16f*0x2,_0x25e6cd=_0x387a0f['zmlZn'](-0xc5a+0x403*0x7+-0xf99,_0x4f0a3a),_0x5da417=_0x387a0f[_0x4be361(0x2ee)](0x1d97+0xcf6+0x1*-0x2a89,_0x4f0a3a),_0x37849e=_0x387a0f[_0x4be361(0x65d)](_0x25e6cd*(-0x1b28+0x18d7+0x254),_0x387a0f[_0x4be361(0x71d)](_0x5da417,0x1b2f+-0x1548+0x1f7*-0x3)),_0x247855=_0x25e6cd*(-0x451+0x4bb*0x8+-0x2184)+_0x387a0f['ntHKS'](_0x5da417,0x99*-0x19+-0x2099+0x2f8c),_0x70560d=_0x435cd0[_0x4be361(0x616)],_0x1c878e=_0x387a0f['ajoSy'](_0x70560d,'br')?_0x387a0f['UjRjg'](_0x434470['right'],0x20*0xc2+-0x1258*-0x1+0x1*-0x2a88)-_0x37849e:_0x387a0f[_0x4be361(0x723)](_0x10699d['left'],0x1*0x242f+0xb34+0x977*-0x5),_0x603fd8=_0x70560d==='ml'?_0x113f40['top']+_0x387a0f[_0x4be361(0x21e)](_0x5f4c45[_0x4be361(0x532)+'t'],0x12ae+-0x176f*-0x1+0x2a1b*-0x1)-_0x247855/(-0x17e+0x259c+-0x241c*0x1):_0x3cc6a9['botto'+'m']-_0x247855-(_0x70560d==='bl'?0x2501+-0x1464+0x103d*-0x1:0x23a1+0xc*-0x1f1+-0xbbf),_0x99198f=(_0x1800b0,_0x122378,_0x35ae5b,_0xd43c81,_0x27ccf1,_0x1fd424,_0x5ea8a6)=>{var _0x3e5231=_0x4be361,_0x151dab=('3|7|8'+_0x3e5231(0x318)+_0x3e5231(0x273)+'14|1|'+'12|6|'+_0x3e5231(0x6b6)+_0x3e5231(0x2bf)+_0x3e5231(0x69f))[_0x3e5231(0x1a9)]('|'),_0x41c564=0x1*-0x1e73+-0x2*0x6f1+0x2c55;while(!![]){switch(_0x151dab[_0x41c564++]){case'0':_0x24a9e0['lineW'+_0x3e5231(0x365)]=0x4*0x1aa+-0x8*0x293+-0xdf1*-0x1;continue;case'1':_0x3d553e[_0x3e5231(0x23e)+'e']();continue;case'2':_0x504e2f['textA'+'lign']=_0x3e5231(0x6d8)+'r';continue;case'3':var _0x3b2e5b=_0x535d93['has'](_0x122378);continue;case'4':_0x594958[_0x3e5231(0x280)]='700\x20'+_0x39f060[_0x3e5231(0x72c)]((-0x471+-0x1a58+-0x1ed5*-0x1)*_0x4f0a3a)+_0x1daa61['YNeqR'];continue;case'5':if(_0x3305b2['round'+_0x3e5231(0x71b)])_0x477409[_0x3e5231(0x72c)+_0x3e5231(0x71b)](_0x35ae5b,_0xd43c81,_0x27ccf1,_0x1fd424,_0x1daa61['RchSN'](-0x269*0xd+0x5f*-0x4c+-0x1*-0x3b90,_0x4f0a3a));else _0x3157a0[_0x3e5231(0x308)](_0x35ae5b,_0xd43c81,_0x27ccf1,_0x1fd424);continue;case'6':_0x409c7a[_0x3e5231(0x4ce)+_0x3e5231(0x4f2)]=_0x3b2e5b?'#fff':_0x1daa61['GHSPG'];continue;case'7':_0x73eb73[_0x3e5231(0x415)]();continue;case'8':_0x271b5e[_0x3e5231(0x291)+_0x3e5231(0x4d5)]();continue;case'9':_0x3057e9[_0x3e5231(0x5a7)]();continue;case'10':_0x2a5ea9['textB'+'aseli'+'ne']=_0x3e5231(0x72e)+'e';continue;case'11':_0x5ea8a6&&(_0x6befec[_0x3e5231(0x280)]=_0x3e5231(0x26d)+_0x419666[_0x3e5231(0x72c)](_0x1daa61[_0x3e5231(0x50f)](-0x264e+-0x1755+0x3dac,_0x4f0a3a))+(_0x3e5231(0x659)+_0x3e5231(0x1f8)+'-seri'+_0x3e5231(0x1e8)+_0x3e5231(0x48c)+_0x3e5231(0x3e5)+_0x3e5231(0x541)+'if'),_0x13059a[_0x3e5231(0x4ce)+'tyle']=_0x3b2e5b?_0x3e5231(0x6ed):_0x1daa61['nSyDn'],_0x86cd74['fillT'+'ext'](_0x5ea8a6,_0x35ae5b+_0x1daa61['uPTzC'](_0x27ccf1,-0x67*-0x29+-0x18*0x5a+-0x80d),_0x1daa61['QWPOn'](_0xd43c81+_0x1fd424/(-0x2107+-0x7*-0xbc+0x1be5),_0x1daa61['RLlZw'](0x1*0x1d3f+-0xeb*0x19+0x191*-0x4,_0x4f0a3a))));continue;case'12':_0x3b2e5b&&(_0x4e523b[_0x3e5231(0x1e4)+'wColo'+'r']=_0x36d84b,_0x54d1b9['shado'+'wBlur']=-0x2454+0x25f8+0x1d*-0xe,_0x21e40d[_0x3e5231(0x5a7)](),_0x4f2564[_0x3e5231(0x1e4)+'wBlur']=-0x204+0x1358+0x455*-0x4);continue;case'13':_0x1f2a16[_0x3e5231(0x372)+_0x3e5231(0x196)](_0x1800b0,_0x1daa61['LycDH'](_0x35ae5b,_0x27ccf1/(0x1*-0xc1d+0x190*0x19+-0x1af1)),_0x1daa61[_0x3e5231(0x23d)](_0xd43c81,_0x1fd424/(-0x2593+-0x1996+0x9d*0x67))-(_0x5ea8a6?_0x1daa61[_0x3e5231(0x50f)](0x1*-0x180c+-0x2*0x12ae+0x3d6d,_0x4f0a3a):-0x25e*0x1+0xb*-0x29d+0xa5f*0x3));continue;case'14':_0x555bca['strok'+'eStyl'+'e']=_0x3b2e5b?_0x120f8e:_0x3e5231(0x582)+_0x3e5231(0x730)+_0x3e5231(0x634)+'7,0.3'+'5)';continue;case'15':_0x5dad93['resto'+'re']();continue;case'16':_0x5c96f0[_0x3e5231(0x4ce)+_0x3e5231(0x4f2)]=_0x3b2e5b?_0x3e5231(0x582)+_0x3e5231(0x730)+_0x3e5231(0x634)+_0x3e5231(0x230)+'5)':'rgba('+_0x3e5231(0x44e)+_0x3e5231(0x555)+'7)';continue;}break;}};_0x99198f('W',_0x4be361(0x32b),_0x1c878e+_0x25e6cd+_0x5da417,_0x603fd8,_0x25e6cd,_0x25e6cd),_0x99198f('A','KeyA',_0x1c878e,_0x603fd8+_0x25e6cd+_0x5da417,_0x25e6cd,_0x25e6cd),_0x99198f('S',_0x4be361(0x449),_0x1c878e+_0x25e6cd+_0x5da417,_0x387a0f[_0x4be361(0x30a)](_0x603fd8,_0x25e6cd)+_0x5da417,_0x25e6cd,_0x25e6cd),_0x387a0f['WaWQx'](_0x99198f,'D','KeyD',_0x1c878e+_0x387a0f[_0x4be361(0x38a)](_0x387a0f[_0x4be361(0x6cb)](_0x25e6cd,_0x5da417),0x6d7+-0x2037+-0x156*-0x13),_0x603fd8+_0x25e6cd+_0x5da417,_0x25e6cd,_0x25e6cd);var _0x28993f=_0x387a0f['thVCY'](_0x37849e-_0x5da417,0x102b*0x1+-0x1a68+-0x3d*-0x2b),_0x3f552a=_0x603fd8+_0x387a0f['SoDjk'](_0x25e6cd+_0x5da417,-0x1d1f+0xe*0x24a+-0x2eb);_0x387a0f['mqBXE'](_0x99198f,_0x387a0f[_0x4be361(0x6e0)],_0x4be361(0x632)+'1',_0x1c878e,_0x3f552a,_0x28993f,_0x25e6cd,_0x2d40a6[_0x4be361(0x1de)]?_0x387a0f[_0x4be361(0x34e)](_0xfe75c8,-0x1a6b*-0x1+-0x1359+0x3*-0x25b)+_0x387a0f['MmKtz']:''),_0x387a0f['mqBXE'](_0x99198f,_0x4be361(0x630),_0x4be361(0x632)+'3',_0x387a0f[_0x4be361(0x561)](_0x387a0f[_0x4be361(0x270)](_0x1c878e,_0x28993f),_0x5da417),_0x3f552a,_0x28993f,_0x25e6cd,_0x200c2b['ksCps']?_0x5e3277(0xa*-0x25f+-0x1f94+-0x126f*-0x3)+_0x387a0f['MmKtz']:''),_0x387a0f[_0x4be361(0x395)](_0x99198f,'','Space',_0x1c878e,_0x387a0f['SEZwB'](_0x3f552a,_0x25e6cd)+_0x5da417,_0x37849e,_0x387a0f[_0x4be361(0x2f5)](_0x25e6cd,0x5*0x155+0x14*-0xec+0xbc7+0.45));}else{var _0x405ba4=_0x1f9529[_0x4be361(0x5eb)][_0x4be361(0x1a9)]('|'),_0x71dcec=0x37a*0x7+-0x4d4+-0xe3*0x16;while(!![]){switch(_0x405ba4[_0x71dcec++]){case'0':_0xc4b120[_0x4be361(0x499)+_0x4be361(0x2d3)]=_0x1f9529[_0x4be361(0x2b9)];continue;case'1':var _0xc4b120=document['creat'+_0x4be361(0x30f)+'ent']('butto'+'n');continue;case'2':_0xc4b120[_0x4be361(0x64d)+_0x4be361(0x4b1)+'t']=_0x3c0986;continue;case'3':_0xc4b120['oncli'+'ck']=_0x8fca65=>{_0x8fca65['stopP'+'ropag'+'ation'](),_0x82b120();};continue;case'4':_0xc4b120['type']='butto'+'n';continue;case'5':return _0xc4b120;}break;}}}function _0x274346(_0x379e92,_0x26ca61,_0x44f6bc){var _0x38a3b3=_0x34ea02,_0x5701eb=document[_0x38a3b3(0x43b)+'eElem'+_0x38a3b3(0x54b)](_0x38a3b3(0x530));_0x5701eb[_0x38a3b3(0x499)+'Name']='sk-ct'+'l';var _0x92c13f=document[_0x38a3b3(0x43b)+'eElem'+_0x38a3b3(0x54b)](_0x387a0f[_0x38a3b3(0x35f)]);_0x92c13f[_0x38a3b3(0x499)+'Name']='sk-la'+_0x38a3b3(0x20d),_0x92c13f['textC'+_0x38a3b3(0x4b1)+'t']=_0x379e92;if(_0x26ca61){if(_0x38a3b3(0x67f)!=='TBlgc')_0x36f9ad['preve'+'ntDef'+'ault'](),_0x2c8a35();else{var _0x1eb1a1=document['creat'+_0x38a3b3(0x30f)+_0x38a3b3(0x54b)](_0x38a3b3(0x4f4));_0x1eb1a1[_0x38a3b3(0x499)+'Name']='sk-hi'+'nt',_0x1eb1a1['textC'+_0x38a3b3(0x4b1)+'t']=_0x26ca61,_0x92c13f['appen'+'dChil'+'d'](_0x1eb1a1);}}return _0x5701eb[_0x38a3b3(0x525)+'d'](_0x92c13f,_0x44f6bc),_0x5701eb;}function _0x1ae990(_0x242857,_0x475f8b){var _0x108bb8=_0x34ea02,_0x37e1e0=document[_0x108bb8(0x43b)+'eElem'+_0x108bb8(0x54b)](_0x1f9529['MFYDF']);return _0x37e1e0['class'+'Name']=_0x1f9529[_0x108bb8(0x4ae)]+(_0x475f8b?_0x1f9529[_0x108bb8(0x55e)]:''),_0x37e1e0[_0x108bb8(0x64d)+_0x108bb8(0x4b1)+'t']=_0x242857,_0x37e1e0;}function _0x41b83f(_0x56c738,_0x355745,_0x4b9951,_0x66b840,_0x318ead){var _0x3e882b=_0x34ea02,_0xf5c45b=document[_0x3e882b(0x43b)+'eElem'+'ent'](_0x387a0f['PPEUP']);_0xf5c45b['class'+_0x3e882b(0x2d3)]=_0x387a0f['KjDeh']+(_0x4b9951?'\x20on':'');var _0x1e497=document[_0x3e882b(0x43b)+_0x3e882b(0x30f)+_0x3e882b(0x54b)]('div');_0x1e497[_0x3e882b(0x499)+_0x3e882b(0x2d3)]=_0x3e882b(0x46e)+_0x3e882b(0x233)+'ad';var _0x44efaa=document['creat'+_0x3e882b(0x30f)+'ent'](_0x3e882b(0x530));_0x44efaa[_0x3e882b(0x499)+'Name']=_0x3e882b(0x46e)+_0x3e882b(0x56d)+_0x3e882b(0x3c3);var _0x1b41b8=document[_0x3e882b(0x43b)+_0x3e882b(0x30f)+'ent'](_0x3e882b(0x3cf)+'g');_0x1b41b8[_0x3e882b(0x64d)+'onten'+'t']=_0x56c738,_0x44efaa[_0x3e882b(0x525)+'dChil'+'d'](_0x1b41b8);if(_0x66b840){var _0x5d0865=_0x387a0f['uAfLb'](_0x173f13,_0x4b9951,_0x14a2c1=>{var _0x4558a9=_0x3e882b;_0xf5c45b['class'+'List'][_0x4558a9(0x425)+'e']('on',_0x14a2c1),_0x66b840(_0x14a2c1);});_0x1e497['appen'+'d'](_0x44efaa,_0x5d0865);}else _0x1e497[_0x3e882b(0x525)+_0x3e882b(0x266)+'d'](_0x44efaa);_0xf5c45b['appen'+_0x3e882b(0x266)+'d'](_0x1e497);if(_0x318ead&&_0x318ead['lengt'+'h']){var _0xd3878d=(_0x3e882b(0x4cb)+_0x3e882b(0x283)+'3|2|5')['split']('|'),_0x396db2=0x611*-0x3+0x22fd+-0x10ca;while(!![]){switch(_0xd3878d[_0x396db2++]){case'0':_0x3574d0['class'+'Name']=_0x3e882b(0x56c)+_0x3e882b(0x373);continue;case'1':_0x59dd35[_0x3e882b(0x499)+_0x3e882b(0x2d3)]=_0x387a0f[_0x3e882b(0x5f7)];continue;case'2':for(var _0x376a15 of _0x318ead)_0x59dd35[_0x3e882b(0x525)+_0x3e882b(0x266)+'d'](_0x376a15);continue;case'3':_0x59dd35['appen'+_0x3e882b(0x266)+'d'](_0x3574d0);continue;case'4':var _0x59dd35=document[_0x3e882b(0x43b)+_0x3e882b(0x30f)+'ent'](_0x3e882b(0x530));continue;case'5':_0xf5c45b[_0x3e882b(0x525)+'dChil'+'d'](_0x59dd35);continue;case'6':var _0x3574d0=document[_0x3e882b(0x43b)+_0x3e882b(0x30f)+_0x3e882b(0x54b)](_0x387a0f[_0x3e882b(0x4fb)]);continue;case'7':_0x3574d0['textC'+'onten'+'t']=_0x355745;continue;}break;}}return _0xf5c45b;}var _0x30c9f9=[{'id':_0x34ea02(0x25c)+'t','label':_0x34ea02(0x24f)+'t'},{'id':_0x34ea02(0x5fb),'label':'Move'},{'id':_0x1f9529['rrtxW'],'label':_0x1f9529['PCijs']},{'id':_0x1f9529[_0x34ea02(0x461)],'label':'Misc'},{'id':_0x1f9529['wVXth'],'label':_0x1f9529[_0x34ea02(0x535)]}];function _0x56a79c(){var _0x3b9ef2=_0x34ea02,_0x4240f2={'WerLF':function(_0x4e6895){return _0x4e6895();},'eczlw':function(_0x139f10,_0x5950cf){var _0x57a592=_0x43b7;return _0x387a0f[_0x57a592(0x488)](_0x139f10,_0x5950cf);},'eQeEL':_0x387a0f[_0x3b9ef2(0x54f)],'mzUHy':function(_0x4697c0,_0x5b88da){return _0x387a0f['jmkbP'](_0x4697c0,_0x5b88da);}},_0x41513e=_0x128de9['safeM'+_0x3b9ef2(0x700)]?_0x3b9ef2(0x3f8)+_0x3b9ef2(0x1cb)+'—\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+_0x3b9ef2(0x326)+_0x3b9ef2(0x486)+'ad\x20to'+_0x3b9ef2(0x346)+')':_0x128de9[_0x3b9ef2(0x5f2)]?_0x387a0f[_0x3b9ef2(0x6bc)](_0x387a0f['LnpNJ'](_0x387a0f[_0x3b9ef2(0x3b1)](_0x387a0f['KPBry'](_0x387a0f[_0x3b9ef2(0x498)],_0x128de9['hooks'+_0x3b9ef2(0x5cd)]?_0x387a0f['uyMKp'](_0x387a0f['gCFiU'](_0x128de9[_0x3b9ef2(0x440)+'Ok'],'/')+_0x128de9[_0x3b9ef2(0x440)+_0x3b9ef2(0x5cd)],'\x20hook'+'s'):'0\x20hoo'+'ks\x20ar'+'med\x20('+_0x3b9ef2(0x2c1)+_0x3b9ef2(0x6f2))+(_0x3b9ef2(0x60b)+'me\x20'),_0x128de9[_0x3b9ef2(0x316)+_0x3b9ef2(0x177)]?_0x3b9ef2(0x435)+'d':_0x387a0f[_0x3b9ef2(0x384)]),_0x387a0f[_0x3b9ef2(0x6ee)])+(_0x128de9[_0x3b9ef2(0x57d)+_0x3b9ef2(0x63f)]?_0x387a0f['SQlyV']:'none'),_0x3b9ef2(0x6df)+'vemen'+'t\x20')+(_0x128de9[_0x3b9ef2(0x484)+'ents']?_0x387a0f['SQlyV']:'none'):_0x3b9ef2(0x603)+_0x3b9ef2(0x5ec)+'NG\x20—\x20'+'overl'+'ay\x20on'+_0x3b9ef2(0x69e)+_0x3b9ef2(0x61c)+_0x3b9ef2(0x4d7)+_0x3b9ef2(0x4a1)+_0x3b9ef2(0x18d)+'ipt)';if(_0x128de9[_0x3b9ef2(0x15b)+'rror'])_0x41513e+=_0x387a0f[_0x3b9ef2(0x237)]('\x20|\x20ER'+'R:\x20',_0x128de9[_0x3b9ef2(0x15b)+_0x3b9ef2(0x550)]);return _0x41b83f(_0x387a0f['nuGpf'],_0x41513e,_0x128de9[_0x3b9ef2(0x5f2)],null,[_0x274346('240\x20F'+_0x3b9ef2(0x41f)+'lock',_0x387a0f['bvhgk'],_0x5a546d('Apply',()=>{var _0x4512fc=_0x3b9ef2;try{if(_0x387a0f['UoELl']!==_0x387a0f[_0x4512fc(0x164)]){if(_0x2bb608)_0x2bb608['call'](_0x4512fc(0x22a)+_0x4512fc(0x5d1)+'e.App'+'licat'+_0x4512fc(0x6d6),_0x4512fc(0x4b8)+_0x4512fc(0x51d)+_0x4512fc(0x6a7)+_0x4512fc(0x29a),[-0x5b3*0x3+0xa0e+0x2a9*0x3]);}else{_0x42275f[_0x4512fc(0x215)]=_0x5d4592,_0x4240f2[_0x4512fc(0x278)](_0x3de88d);var _0x5867fb=_0x487fb5['find'](_0x479dad=>_0x479dad['id']===_0x528c7b)||_0x3e89c4[-0x10*-0x140+-0xb68+-0xdc*0xa];_0x449cb7['textC'+'onten'+'t']=_0x4240f2[_0x4512fc(0x729)](_0x4512fc(0x1bc)+_0x4512fc(0x417)+_0x4512fc(0x3dd),_0x5867fb[_0x4512fc(0x625)]);for(var [_0x59a42e,_0x3b9ed0]of _0xccadad)_0x3b9ed0[_0x4512fc(0x499)+_0x4512fc(0x5e1)][_0x4512fc(0x425)+'e'](_0x4240f2[_0x4512fc(0x271)],_0x59a42e===_0x78ebc0);_0xe78677[_0x4512fc(0x2b2)+'ceChi'+'ldren'](..._0x4240f2[_0x4512fc(0x3e6)](_0x52c645,_0x2b9325));}}catch(_0x2280cc){}}))]);}function _0x549e97(_0x2d9dfb){var _0x4cba12=_0x34ea02,_0x55f73f={'WNrkc':function(_0x10fc3a,_0x29c545){return _0x10fc3a>_0x29c545;},'JVlWu':'Inser'+'t','AuOPH':function(_0x28feac){return _0x28feac();},'lgGEy':function(_0xa2658d,_0x3e1a76){return _0x1f9529['FjvEU'](_0xa2658d,_0x3e1a76);},'CFwlb':_0x1f9529['UiWfy'],'bsQmu':function(_0x385dd3){return _0x385dd3();},'IfCik':_0x1f9529[_0x4cba12(0x20f)],'fuzSV':function(_0x3894e0,_0x4b5bfd){return _0x1f9529['srTkA'](_0x3894e0,_0x4b5bfd);},'fesCo':_0x4cba12(0x20e),'OtcoT':function(_0x57b19f,_0x3e3ffa){var _0x43ffb7=_0x4cba12;return _0x1f9529[_0x43ffb7(0x4a8)](_0x57b19f,_0x3e3ffa);},'IZHYq':'loade'+'d','NGsPX':_0x1f9529['rzPxe'],'FFwDg':_0x4cba12(0x68f),'LYBEC':function(_0x3fcbf5,_0x28fbe6,_0x152af3,_0x4b555a,_0x9f7eb1){return _0x3fcbf5(_0x28fbe6,_0x152af3,_0x4b555a,_0x9f7eb1);},'IEwRt':_0x1f9529['wYDFw'],'KKowG':function(_0x49d611){var _0x4b7099=_0x4cba12;return _0x1f9529[_0x4b7099(0x3b9)](_0x49d611);}};if(_0x2d9dfb===_0x4cba12(0x25c)+'t')return[_0x1f9529[_0x4cba12(0x43e)](_0x56a79c),_0x41b83f('God\x20M'+'ode',_0x1f9529['xkHiR'],_0x2494c7[_0x4cba12(0x692)],_0x155c09=>{var _0xd260c4=_0x4cba12;if(_0x387a0f[_0xd260c4(0x477)]!=='tfovi')_0x2494c7[_0xd260c4(0x692)]=_0x155c09,_0x4551d4(),_0x387a0f[_0xd260c4(0x45e)](_0x508b75,'god',_0x155c09),_0x387a0f[_0xd260c4(0x45e)](_0x508b75,'godDi'+'e',_0x155c09);else{if(!_0x382bbe||_0x338dfa[_0xd260c4(0x1db)+_0xd260c4(0x277)](_0x42c8f6)||_0x55f73f['WNrkc'](_0x5544ed[_0xd260c4(0x4b4)+'h'],-0x6ad*-0x1+0x2e*-0x2f+-0xb*-0x2f))return;_0x47956e['push'](_0x4bf88e);}},[]),_0x1f9529[_0x4cba12(0x2d9)](_0x41b83f,_0x4cba12(0x34d)+_0x4cba12(0x232),_0x1f9529[_0x4cba12(0x1e9)],_0x2494c7[_0x4cba12(0x29d)+'oil'],_0x2b421e=>{var _0x42c277=_0x4cba12;_0x2494c7['noRec'+_0x42c277(0x2ce)]=_0x2b421e,_0x4551d4(),_0x508b75(_0x42c277(0x29d)+_0x42c277(0x2ce),_0x2b421e);},[]),_0x1f9529[_0x4cba12(0x2d9)](_0x41b83f,'No\x20Sp'+_0x4cba12(0x3f9),_0x4cba12(0x688)+_0x4cba12(0x2d6)+_0x4cba12(0x3ff)+'nd\x20ma'+_0x4cba12(0x1f5)+'ccura'+_0x4cba12(0x6c4)+_0x4cba12(0x6ce)+_0x4cba12(0x453)+_0x4cba12(0x178)+'ery\x202'+_0x4cba12(0x645),_0x2494c7['noSpr'+'ead'],_0x2c44b6=>{var _0x23da10=_0x4cba12;_0x2494c7['noSpr'+_0x23da10(0x59e)]=_0x2c44b6,_0x4551d4();},[]),_0x41b83f(_0x4cba12(0x162)+_0x4cba12(0x629)+_0x4cba12(0x666)+']',_0x1f9529[_0x4cba12(0x35c)],_0x2494c7[_0x4cba12(0x427)+'Exp'],_0x22824b=>{var _0x43404f=_0x4cba12;_0x2494c7[_0x43404f(0x427)+'Exp']=_0x22824b,_0x387a0f['AtGec'](_0x4551d4);},[]),_0x41b83f(_0x4cba12(0x5ac)+_0x4cba12(0x558)+'P]',_0x1f9529['jLOQe'],_0x2494c7['damag'+_0x4cba12(0x57b)],_0x356b8a=>{var _0x768fe8=_0x4cba12;_0x2494c7[_0x768fe8(0x30b)+'eExp']=_0x356b8a,_0x4551d4();},[_0x274346(_0x1f9529[_0x4cba12(0x5e9)],null,_0x2d12c5(_0x2494c7['damag'+_0x4cba12(0x356)+'e'],0x1aa4+0x8a5*-0x2+-0x12a*0x8,-0x17*0xb5+-0x1*-0x1031+0x1*0x206,-0x3a*-0xa3+0x2*0x1350+-0x4b89,_0x14327d=>{var _0x4576ca=_0x4cba12,_0x383280={'gSsyX':'capMo'+'ve','VSlRE':_0x4576ca(0x692),'DjZcH':_0x4576ca(0x2a7)+'th','ydoir':_0x387a0f[_0x4576ca(0x489)],'Vtxna':_0x387a0f['kAnij'],'gjHyM':_0x387a0f[_0x4576ca(0x4d6)],'RzBjV':function(_0x1460a6,_0x403dff,_0x5f5854,_0x3a9e82,_0x298935,_0x2d199d,_0x2314dd,_0x483b4d){var _0x33b7e7=_0x4576ca;return _0x387a0f[_0x33b7e7(0x6aa)](_0x1460a6,_0x403dff,_0x5f5854,_0x3a9e82,_0x298935,_0x2d199d,_0x2314dd,_0x483b4d);},'MKwjL':'capSh'+_0x4576ca(0x3ba),'SXjEV':_0x387a0f[_0x4576ca(0x3c5)],'zJsmu':'Legio'+_0x4576ca(0x44b)+'forms'+'.Over'+_0x4576ca(0x210)+_0x4576ca(0x252)+_0x4576ca(0x3d5)+'on'};if(_0x387a0f[_0x4576ca(0x2c2)]('ICUvi',_0x387a0f[_0x4576ca(0x509)])){var _0x7d7b88=(_0x4576ca(0x3c0)+'|5|6|'+_0x4576ca(0x320))[_0x4576ca(0x1a9)]('|'),_0x39c59b=0x247f+-0x13b8+0x10c7*-0x1;while(!![]){switch(_0x7d7b88[_0x39c59b++]){case'0':if(_0xbd6460[_0x4576ca(0x5bd)+_0x4576ca(0x6e8)+'e'])_0x1867fe(_0x383280[_0x4576ca(0x48b)],'Legio'+_0x4576ca(0x44b)+_0x4576ca(0x345)+_0x4576ca(0x295)+_0x4576ca(0x210)+_0x4576ca(0x439)+_0x4576ca(0x54b),_0x4576ca(0x342)+'unded',['i32'],'i32',(_0x2adbb6,_0x559ed0)=>{var _0xc32f86=_0x4576ca;_0x155724(_0x441d9d,_0x559ed0,_0x5a91d9,'movem'+_0xc32f86(0x545));},!![]);continue;case'1':_0x19e888=_0x161d88[_0x4576ca(0x22a)+_0x4576ca(0x4dc)+_0x4576ca(0x180)][_0x4576ca(0x5b2)+_0x4576ca(0x6e7)+'er'];continue;case'2':if(_0x4cccb0[_0x4576ca(0x51e)+'od'])_0x5d289a(_0x383280[_0x4576ca(0x44d)],_0x383280[_0x4576ca(0x597)],_0x383280[_0x4576ca(0x61f)],[_0x383280[_0x4576ca(0x349)],'i32'],_0x43b2ba,_0x328590,!!_0x33caaf['god']);continue;case'3':_0x152cae=_0x38caf3['Unity'+_0x4576ca(0x4dc)+'dkit']['Runti'+'me'][_0x4576ca(0x43b)+'ePlug'+'in']({'name':_0x4576ca(0x1bc)+'aKour','version':'1.1.0','referencedAssemblies':[_0x383280['gjHyM']]});continue;case'4':if(_0x4b383c['hookC'+_0x4576ca(0x6e8)+'e'])_0x383280['RzBjV'](_0x490c5c,_0x383280['MKwjL'],_0x4576ca(0x6bd)+'ter','SetGa'+'meRun'+_0x4576ca(0x6b2),[_0x383280[_0x4576ca(0x349)],_0x383280[_0x4576ca(0x349)]],_0x42c16d,(_0x42547f,_0x40b67f)=>{var _0x2a82d5=_0x4576ca;_0x3541f4(_0x4a80aa,_0x40b67f,_0x1c177e,'shoot'+_0x2a82d5(0x63f));},!![]);continue;case'5':if(_0x4fcb94['hookG'+_0x4576ca(0x1b2)])_0x3c4721(_0x383280['SXjEV'],_0x383280['DjZcH'],_0x4576ca(0x650)+_0x4576ca(0x246),[_0x4576ca(0x422),'i32',_0x383280[_0x4576ca(0x349)],_0x4576ca(0x422),_0x383280['Vtxna']],_0x2da5f9,_0x1f9535,!!_0x3010f6[_0x4576ca(0x692)]);continue;case'6':if(_0x47c41['hookN'+_0x4576ca(0x306)+'il'])_0x109bdb(_0x4576ca(0x29d)+'oil',_0x383280[_0x4576ca(0x30d)],_0x4576ca(0x38f),[_0x383280[_0x4576ca(0x349)]],_0x57411b,_0x417ffc,!!_0x3ec674['noRec'+_0x4576ca(0x2ce)]);continue;}break;}}else _0x2494c7['damag'+_0x4576ca(0x356)+'e']=_0x14327d,_0x4551d4();}))]),_0x41b83f(_0x1f9529[_0x4cba12(0x211)],_0x1f9529['pOhHc'],_0x2494c7[_0x4cba12(0x40d)+_0x4cba12(0x696)],_0x46a6b6=>{var _0x596e42=_0x4cba12;_0x2494c7[_0x596e42(0x40d)+'moExp']=_0x46a6b6,_0x387a0f[_0x596e42(0x594)](_0x4551d4);},[_0x1ae990('If\x20re'+_0x4cba12(0x648)+_0x4cba12(0x44f)+'l\x20dra'+'in,\x20t'+_0x4cba12(0x640)+'creme'+_0x4cba12(0x5a2)+'ppens'+_0x4cba12(0x2dc)+'where'+'.')])];if(_0x1f9529[_0x4cba12(0x664)](_0x2d9dfb,_0x1f9529[_0x4cba12(0x4c0)])){if('TUpwO'!==_0x1f9529[_0x4cba12(0x2b6)])try{_0x3fd3bf[_0x4cba12(0x6e1)+'em'](_0x4cba12(0x614)+'a.kou'+'r.v1',_0x5b3ad9['strin'+_0x4cba12(0x4e4)](_0x544e11));}catch(_0x4053b3){}else return[_0x1f9529['VyPQQ'](_0x41b83f,'Speed',_0x4cba12(0x495)+_0x4cba12(0x31d)+'\x20four'+'\x20Move'+_0x4cba12(0x728)+_0x4cba12(0x31a)+_0x4cba12(0x6f4)+_0x4cba12(0x448)+_0x4cba12(0x6ac)+_0x4cba12(0x5a0)+_0x4cba12(0x310)+'.',_0x1f9529[_0x4cba12(0x1d9)](_0x2494c7['speed'+_0x4cba12(0x6b9)],0x1*-0x1f85+0x3f0+0x1bf9),null,[_0x1f9529[_0x4cba12(0x22c)](_0x274346,'Speed'+'\x20%',_0x1f9529[_0x4cba12(0x6d2)],_0x2d12c5(_0x2494c7[_0x4cba12(0x31a)+_0x4cba12(0x6b9)],0x1d53*0x1+0x112a+0x69d*-0x7,-0xe69+-0x3*0x367+0xce5*0x2,-0x258d+-0x926+0x2eb8*0x1,_0x526c62=>{var _0x319a3c=_0x4cba12;_0x2494c7[_0x319a3c(0x31a)+_0x319a3c(0x6b9)]=_0x526c62,_0x4551d4();}))]),_0x1f9529[_0x4cba12(0x195)](_0x41b83f,_0x1f9529[_0x4cba12(0x253)],'Scale'+_0x4cba12(0x6d1)+'ement'+'.jump'+_0x4cba12(0x5d8)+_0x4cba12(0x4ea)+_0x4cba12(0x2d0)+'gravi'+_0x4cba12(0x710)+'lues.',_0x1f9529[_0x4cba12(0x26b)](_0x2494c7['jumpP'+'ct'],-0xd89+0x61c*0x5+-0x109f)||_0x2494c7['gravi'+'tyPct']!==0x193d+-0xca8+-0xc31,null,[_0x274346(_0x1f9529['BMaSR'],null,_0x1f9529[_0x4cba12(0x3a9)](_0x2d12c5,_0x2494c7[_0x4cba12(0x628)+'ct'],0x1*-0x22ed+0x20f+0x2110,0x22f0+0xc49+-0x2e0d,-0x1bc8+-0x11d2*0x1+0x2d9f,_0x4e392c=>{var _0x4c95d0=_0x4cba12;_0x55f73f[_0x4c95d0(0x3da)](_0x4c95d0(0x38b),_0x55f73f[_0x4c95d0(0x262)])?_0x44cab7['code']===_0x55f73f['JVlWu']&&(_0x5d7557[_0x4c95d0(0x592)+_0x4c95d0(0x1a2)+_0x4c95d0(0x314)](),_0x55f73f[_0x4c95d0(0x4db)](_0x3ac40f)):(_0x2494c7[_0x4c95d0(0x628)+'ct']=_0x4e392c,_0x4551d4());})),_0x274346(_0x4cba12(0x1b8)+'ty\x20%',_0x4cba12(0x33e)+_0x4cba12(0x4c5)+_0x4cba12(0x52c),_0x2d12c5(_0x2494c7[_0x4cba12(0x702)+'tyPct'],0x57*-0x43+0x4e8+0x11e7,-0x135*-0xf+0x1*-0x17eb+0x698,-0x425+0x74f+-0x73*0x7,_0x34b6dd=>{var _0x57e8e2=_0x4cba12;_0x2494c7[_0x57e8e2(0x702)+'tyPct']=_0x34b6dd,_0x4551d4();}))]),_0x41b83f('Bunny'+'-hop','Zeroe'+_0x4cba12(0x6d1)+'ement'+'.last'+'JumpT'+'ime\x20s'+'o\x20the'+'\x20jump'+_0x4cba12(0x223)+'down\x20'+'never'+'\x20appl'+'ies.',_0x2494c7['bhop'],_0x58da43=>{var _0x231a57=_0x4cba12;_0x2494c7[_0x231a57(0x50a)]=_0x58da43,_0x4551d4();},[])];}if(_0x2d9dfb===_0x1f9529[_0x4cba12(0x1b7)])return _0x1f9529['QOrAt']===_0x1f9529['Oprmn']?-0x296*0xc+-0x22d7*-0x1+0x41*-0xf:[_0x41b83f(_0x1f9529[_0x4cba12(0x3bc)],_0x4cba12(0x28d)+_0x4cba12(0x28b)+'/RMB\x20'+_0x4cba12(0x156)+_0x4cba12(0x2b4)+'erlay'+'.',_0x2494c7['keyst'+'rokes'],_0x253533=>{var _0x4104e8=_0x4cba12,_0x1f4a6f={'rXCjm':function(_0x143fea){return _0x55f73f['bsQmu'](_0x143fea);},'LzavS':_0x55f73f[_0x4104e8(0x5a1)],'EKbcd':function(_0xdfe9ea,_0x2dd9e8,_0xbbe355){return _0xdfe9ea(_0x2dd9e8,_0xbbe355);}};_0x55f73f['fuzSV'](_0x55f73f[_0x4104e8(0x4d3)],'wUgxC')?(_0x2494c7[_0x4104e8(0x6de)+_0x4104e8(0x2e3)]=_0x253533,_0x4551d4()):(_0x5b1109[_0x4104e8(0x692)]=_0x54478d,_0x1f4a6f[_0x4104e8(0x458)](_0x4c6392),_0x3232df(_0x1f4a6f['LzavS'],_0x14976c),_0x1f4a6f[_0x4104e8(0x34c)](_0xc7df38,_0x4104e8(0x220)+'e',_0x34341a));},[_0x274346(_0x4cba12(0x54c)+_0x4cba12(0x6d6),null,_0x1f9529[_0x4cba12(0x15f)](_0xd7dbc,_0x2494c7[_0x4cba12(0x616)],[['bl',_0x4cba12(0x165)+_0x4cba12(0x6af)+'t'],['br','Botto'+_0x4cba12(0x731)+'ht'],['ml',_0x4cba12(0x409)+_0x4cba12(0x72e)+'e']],_0x38846e=>{var _0x12175f=_0x4cba12;_0x2494c7[_0x12175f(0x616)]=_0x38846e,_0x387a0f[_0x12175f(0x293)](_0x4551d4);})),_0x274346(_0x4cba12(0x419),null,_0x1f9529[_0x4cba12(0x195)](_0x2d12c5,_0x2494c7[_0x4cba12(0x4b0)+'le'],0x3e1*-0x4+-0x180e+0x2792+0.6,-0xe2f+0x6df*-0x3+0x3b*0x97+0.6000000000000001,0xd55*0x2+-0x1f*0xf7+0x115*0x3+0.05,_0x6f3916=>{_0x2494c7['ksSca'+'le']=_0x6f3916,_0x4551d4();})),_0x274346('CPS\x20r'+_0x4cba12(0x238)+'t',null,_0x1f9529[_0x4cba12(0x515)](_0x173f13,_0x2494c7[_0x4cba12(0x1de)],_0x3e95b1=>{var _0x1e5567=_0x4cba12,_0x3c0588={'hJULw':function(_0x507455,_0x59fecf){var _0x86492c=_0x43b7;return _0x55f73f[_0x86492c(0x4b6)](_0x507455,_0x59fecf);},'rKrsc':function(_0x46f871,_0x2b78ed){var _0x899d33=_0x43b7;return _0x55f73f[_0x899d33(0x4b6)](_0x46f871,_0x2b78ed);},'tGBox':function(_0x303a57,_0x31dc94){return _0x303a57+_0x31dc94;},'FIWSg':function(_0x32c4a4,_0x4f267d){return _0x32c4a4+_0x4f267d;},'LELbg':_0x1e5567(0x60b)+'me\x20','dOhQg':_0x55f73f['IZHYq'],'LCdyp':_0x55f73f[_0x1e5567(0x5db)],'RxOVU':_0x1e5567(0x546)+'ooter'+'\x20','oDQHu':_0x55f73f['FFwDg'],'tCiSe':_0x1e5567(0x603)+_0x1e5567(0x5ec)+'NG\x20-\x20'+'overl'+_0x1e5567(0x324)+_0x1e5567(0x69e)+'einst'+_0x1e5567(0x4d7)+'he\x20us'+_0x1e5567(0x18d)+_0x1e5567(0x369)};_0x1e5567(0x4b7)==='unFEv'?(_0x2494c7[_0x1e5567(0x1de)]=_0x3e95b1,_0x4551d4()):_0x1ac51c[_0x1e5567(0x64d)+_0x1e5567(0x4b1)+'t']=_0x246b32[_0x1e5567(0x231)+'ode']?'SAFE\x20'+'MODE\x20'+'-\x20ove'+'rlay\x20'+'only,'+_0x1e5567(0x5c6)+'ooks\x20'+_0x1e5567(0x486)+_0x1e5567(0x397)+_0x1e5567(0x346)+')':_0x36af95[_0x1e5567(0x5f2)]?_0x3c0588[_0x1e5567(0x2ab)](_0x3c0588[_0x1e5567(0x563)](_0x3c0588['tGBox'](_0x1e5567(0x603)+_0x1e5567(0x567)+'\x20',_0x4a8241[_0x1e5567(0x440)+_0x1e5567(0x5cd)]?_0x3c0588[_0x1e5567(0x609)](_0x114b71[_0x1e5567(0x440)+'Ok']+'/',_0x23db21[_0x1e5567(0x440)+_0x1e5567(0x5cd)])+('\x20hook'+'s'):_0x1e5567(0x5df)+_0x1e5567(0x5aa)+'med\x20('+'all\x20o'+_0x1e5567(0x6f2)),_0x3c0588[_0x1e5567(0x724)])+(_0x49dc8e['gameL'+'oaded']?_0x3c0588['dOhQg']:_0x3c0588['LCdyp'])+_0x3c0588[_0x1e5567(0x3c9)]+(_0x12db4b['shoot'+_0x1e5567(0x63f)]?_0x1e5567(0x2aa):_0x3c0588[_0x1e5567(0x4af)])+('\x20|\x20mo'+_0x1e5567(0x24b)+'t\x20'),_0x408022[_0x1e5567(0x484)+'ents']?'held':'none')+(_0x771a9f[_0x1e5567(0x15b)+_0x1e5567(0x550)]?_0x1e5567(0x47a)+'R:\x20'+_0x3fb9ba[_0x1e5567(0x15b)+_0x1e5567(0x550)]:''):_0x3c0588['tCiSe'];}))]),_0x1f9529[_0x4cba12(0x5f9)](_0x41b83f,_0x1f9529['TTSss'],_0x4cba12(0x21f)+_0x4cba12(0x17a)+'ter\x20c'+_0x4cba12(0x5ef)+_0x4cba12(0x4ac),_0x2494c7[_0x4cba12(0x569)+_0x4cba12(0x67d)],_0xdbd2d5=>{var _0x2a4328=_0x4cba12;_0x2494c7[_0x2a4328(0x569)+'hair']=_0xdbd2d5,_0x55f73f[_0x2a4328(0x533)](_0x4551d4);},[_0x274346('Size',null,_0x1f9529['ASvrI'](_0x2d12c5,_0x2494c7[_0x4cba12(0x268)+'e'],0x1103+0x21e7*0x1+-0x32ea*0x1+0.5,-0x1234+-0x22af+-0x4cf*-0xb+0.5,0x24da+-0xf96+-0x4*0x551+0.1,_0x17b7b6=>{_0x2494c7['chSiz'+'e']=_0x17b7b6,_0x4551d4();})),_0x274346(_0x1f9529[_0x4cba12(0x565)],null,_0x3dab48(_0x2494c7[_0x4cba12(0x1c3)+'or'],_0x55dcf2=>{var _0x1239cc=_0x4cba12;_0x2494c7[_0x1239cc(0x1c3)+'or']=_0x55dcf2,_0x387a0f['DsQob'](_0x4551d4);}))]),_0x1f9529['aRYZh'](_0x41b83f,'Count'+'ers',_0x1f9529[_0x4cba12(0x1b9)],_0x2494c7['fps'],null,[_0x1f9529[_0x4cba12(0x15f)](_0x274346,'FPS\x20c'+_0x4cba12(0x1bb)+'r',null,_0x173f13(_0x2494c7['fps'],_0x32b766=>{_0x2494c7['fps']=_0x32b766,_0x4551d4();})),_0x1f9529['LtngB'](_0x1ae990,'No\x20en'+'emy\x20c'+_0x4cba12(0x1bb)+_0x4cba12(0x5d7)+_0x4cba12(0x441)+'ild\x20h'+'as\x20no'+_0x4cba12(0x36a)+_0x4cba12(0x15c)+_0x4cba12(0x465)+_0x4cba12(0x3a3)+'o\x20pig'+_0x4cba12(0x28f)+_0x4cba12(0x217))])];if(_0x2d9dfb===_0x1f9529[_0x4cba12(0x461)])return[_0x41b83f(_0x4cba12(0x6f7)+'ck','Hides'+_0x4cba12(0x5ae)+'-io_*'+'\x20bann'+_0x4cba12(0x5cc)+_0x4cba12(0x6d4),_0x2494c7[_0x4cba12(0x5f8)+'ck'],_0x5a974b=>{_0x2494c7['adblo'+'ck']=_0x5a974b,_0x4551d4();},[_0x1ae990(_0x4cba12(0x3df)+'\x20effe'+_0x4cba12(0x52d)+_0x4cba12(0x38d)+'ad\x20wh'+_0x4cba12(0x651)+'ggled'+'.')])];return[_0x41b83f('Safe\x20'+_0x4cba12(0x27c)+'(over'+_0x4cba12(0x1b6)+_0x4cba12(0x6b8),_0x1f9529['WCBJU'],_0x2494c7['safeM'+_0x4cba12(0x700)],_0x3d0baa=>{var _0x26ba69=_0x4cba12;_0x2494c7['safeM'+_0x26ba69(0x700)]=_0x3d0baa,_0x55f73f[_0x26ba69(0x4db)](_0x4551d4),location['reloa'+'d']();},[_0x1ae990(_0x1f9529['uugaa'])]),_0x1f9529['GHFSw'](_0x41b83f,'Hook\x20'+'risk\x20'+'switc'+'hes',_0x4cba12(0x6a2)+_0x4cba12(0x243)+_0x4cba12(0x2fa)+_0x4cba12(0x381)+'WASM\x20'+'tramp'+'oline'+_0x4cba12(0x67a)+_0x4cba12(0x562)+'hole\x20'+_0x4cba12(0x60d)+_0x4cba12(0x6be)+'\x20ALL\x20'+'OFF\x20b'+_0x4cba12(0x1e3)+_0x4cba12(0x3aa)+_0x4cba12(0x38c)+_0x4cba12(0x45f)+'ure\x20t'+_0x4cba12(0x4a4)+'oes\x20n'+_0x4cba12(0x6c1)+_0x4cba12(0x637)+'he\x20re'+'al\x20me'+_0x4cba12(0x3ac)+'throw'+_0x4cba12(0x319)+_0x4cba12(0x452)+_0x4cba12(0x241)+'natur'+_0x4cba12(0x672)+'match'+_0x4cba12(0x399)+'\x20mome'+_0x4cba12(0x5c8)+'\x20is\x20c'+'alled'+'.\x20Tur'+'n\x20the'+_0x4cba12(0x64a)+_0x4cba12(0x170)+_0x4cba12(0x669)+_0x4cba12(0x6a8)+'reloa'+'d,\x20an'+_0x4cba12(0x5c7)+_0x4cba12(0x6f8)+_0x4cba12(0x363)+'\x20your'+_0x4cba12(0x2f9)+_0x4cba12(0x235)+_0x4cba12(0x5ca)+'n.',_0x2494c7['hookG'+'od']||_0x2494c7['hookG'+_0x4cba12(0x1b2)]||_0x2494c7[_0x4cba12(0x56b)+_0x4cba12(0x306)+'il']||_0x2494c7['hookC'+_0x4cba12(0x6e8)+'e'],_0x469da8=>{var _0x887d32=_0x4cba12;_0x2494c7[_0x887d32(0x51e)+'od']=_0x469da8,_0x2494c7['hookG'+_0x887d32(0x1b2)]=_0x469da8,_0x2494c7['hookN'+'oReco'+'il']=_0x469da8,_0x2494c7[_0x887d32(0x5bd)+'aptur'+'e']=_0x469da8,_0x55f73f['AuOPH'](_0x4551d4),location[_0x887d32(0x228)+'d']();},[_0x1ae990(_0x1f9529[_0x4cba12(0x65a)]),_0x1f9529['xuavF'](_0x274346,'god\x20('+_0x4cba12(0x2a7)+_0x4cba12(0x279)+'itiat'+_0x4cba12(0x3e1)+'Healt'+'h)',null,_0x1f9529[_0x4cba12(0x2c0)](_0x173f13,_0x2494c7[_0x4cba12(0x51e)+'od'],_0x5ad3f2=>{_0x2494c7['hookG'+'od']=_0x5ad3f2,_0x55f73f['AuOPH'](_0x4551d4);})),_0x274346(_0x1f9529['jHCuz'],null,_0x173f13(_0x2494c7['hookG'+'odDie'],_0x3c887b=>{var _0x32abd8=_0x4cba12;_0x2494c7['hookG'+_0x32abd8(0x1b2)]=_0x3c887b,_0x4551d4();})),_0x274346(_0x4cba12(0x29d)+'oil\x20('+_0x4cba12(0x252)+'lMoti'+_0x4cba12(0x344)+_0x4cba12(0x2fe),null,_0x1f9529[_0x4cba12(0x693)](_0x173f13,_0x2494c7[_0x4cba12(0x56b)+_0x4cba12(0x306)+'il'],_0x30010a=>{var _0xaa1df5=_0x4cba12;if('awOdV'==='HeNqv'){if(_0xe3daab[_0x47f124]&&_0x4d6503[_0x40ea9c]['appli'+'ed'])_0x3e8a40++;}else _0x2494c7['hookN'+_0xaa1df5(0x306)+'il']=_0x30010a,_0x4551d4();})),_0x274346(_0x1f9529['EDlSQ'],_0x1f9529[_0x4cba12(0x16e)],_0x173f13(_0x2494c7[_0x4cba12(0x5bd)+_0x4cba12(0x6e8)+'e'],_0x3b76c1=>{var _0x3530c5=_0x4cba12;_0x2494c7['hookC'+_0x3530c5(0x6e8)+'e']=_0x3b76c1,_0x4551d4();}))]),_0x41b83f(_0x4cba12(0x1c5)+_0x4cba12(0x17b)+'r',_0x4cba12(0x639)+'les\x20C'+_0x4cba12(0x45a)+_0x4cba12(0x31f)+_0x4cba12(0x309)+_0x4cba12(0x6bb)+_0x4cba12(0x360)+_0x4cba12(0x3d7)+'via\x20S'+'topDe'+_0x4cba12(0x70f)+_0x4cba12(0x2e7)+'\x20Keep'+'\x20ON.',_0x2494c7[_0x4cba12(0x1cf)+'ill'],_0x2c9053=>{var _0x19d207=_0x4cba12;_0x55f73f['fuzSV'](_0x19d207(0x1fd),'QuyJr')?(_0x2494c7[_0x19d207(0x1cf)+'ill']=_0x2c9053,_0x55f73f[_0x19d207(0x520)](_0x4551d4)):(_0x326fd9(_0x322ef7,-0x1*0x9f2+-0x25a*-0xb+-0x6*0x290,'f32',-0x155e+-0x23e1+0x393f+0.1),_0x55f73f[_0x19d207(0x657)](_0x3262aa,_0x2effa3,-0x1aea+-0x1b57+0x36a1,_0x55f73f['IEwRt'],0xe21+-0x85*-0x2+0x161*-0xb+0.1));},[_0x1ae990(_0x1f9529[_0x4cba12(0x199)],!![])]),_0x41b83f(_0x1f9529['zxlIa'],_0x4cba12(0x33c)+'\x20leav'+_0x4cba12(0x3db)+_0x4cba12(0x4d8)+'isibl'+'e\x20tra'+_0x4cba12(0x6dd),!![],null,[_0x274346(_0x4cba12(0x4fd)+_0x4cba12(0x436)+'tting'+'s',null,_0x5a546d(_0x1f9529[_0x4cba12(0x595)],()=>{var _0x2b3058=_0x4cba12;_0x387a0f[_0x2b3058(0x1c6)](_0x2b3058(0x432),'qGXfQ')?(_0x9d42e8[_0x2b3058(0x51e)+_0x2b3058(0x1b2)]=_0x2b5cfd,_0x29dcee()):(_0x2494c7={..._0x36da91},_0x387a0f['mqkkr'](_0x4551d4),location[_0x2b3058(0x228)+'d']());}))])];}var _0x4103cb=null;function _0xbfa9b(_0xe55300){var _0x321852=_0x34ea02;_0x4d831d=_0xe55300;if(!_0x4103cb){var _0x365a88=document[_0x321852(0x43b)+_0x321852(0x30f)+_0x321852(0x54b)](_0x1f9529['wyoyv']);_0x365a88[_0x321852(0x64d)+_0x321852(0x4b1)+'t']=_0x5adbe2,_0x49f5ea['appen'+'dChil'+'d'](_0x365a88),_0x4103cb=_0x1f9529[_0x321852(0x4cd)](_0x2a9057),_0x49f5ea[_0x321852(0x525)+_0x321852(0x266)+'d'](_0x4103cb),requestAnimationFrame(()=>_0x4103cb['class'+_0x321852(0x5e1)][_0x321852(0x6f5)](_0x321852(0x3e2)));}_0x4103cb['class'+'List'][_0x321852(0x425)+'e'](_0x1f9529['FVeJK'],_0xe55300);}function _0x36b28d(){var _0x278f55=_0x34ea02;if('qzomr'!==_0x1f9529['nvHQZ'])_0xbfa9b(!_0x4d831d);else{var _0x5e366c=_0x2b1046['child'+'ren'];for(var _0x4a1cfd=-0x26b5+-0x2576+0x275*0x1f;_0x4a1cfd<_0x5e366c[_0x278f55(0x4b4)+'h'];_0x4a1cfd++){if(_0x5e366c[_0x4a1cfd]['id']&&_0x5e366c[_0x4a1cfd]['id']['index'+'Of'](_0x278f55(0x623)+'io_')===0x11ba+-0x1c1*-0x5+0x77*-0x39)_0x5e366c[_0x4a1cfd][_0x278f55(0x64e)]['displ'+'ay']=_0x387a0f[_0x278f55(0x358)];}}}function _0x2a9057(){var _0x1cbd87=_0x34ea02,_0x5bdc2d={'VFSlu':'4|3|5'+_0x1cbd87(0x6f6)+'1','bWbVU':_0x1cbd87(0x315)+'e','SKHzy':_0x1cbd87(0x542)+'wn'},_0x74d31b=document[_0x1cbd87(0x43b)+_0x1cbd87(0x30f)+'ent']('div');_0x74d31b[_0x1cbd87(0x499)+_0x1cbd87(0x2d3)]=_0x1cbd87(0x1ca)+_0x1cbd87(0x2bd);var _0x471c4f=document[_0x1cbd87(0x43b)+_0x1cbd87(0x30f)+_0x1cbd87(0x54b)](_0x1cbd87(0x44c));_0x471c4f['class'+'Name']=_0x1cbd87(0x301)+'de';var _0x5e5ccb=document[_0x1cbd87(0x43b)+'eElem'+'ent'](_0x1f9529['MFYDF']);_0x5e5ccb[_0x1cbd87(0x499)+'Name']=_0x1f9529['KPHob'],_0x5e5ccb[_0x1cbd87(0x39f)+_0x1cbd87(0x4c4)]='<svg\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+_0x1cbd87(0x487)+_0x1cbd87(0x499)+'=\x22mn-'+'logo-'+_0x1cbd87(0x332)+_0x1cbd87(0x2b7)+_0x1cbd87(0x718)+_0x1cbd87(0x5f1)+_0x1cbd87(0x5a6)+_0x1cbd87(0x27e)+'4-4.5'+_0x1cbd87(0x6e4)+'5\x200-2'+_0x1cbd87(0x4cc)+'8-4.5'+_0x1cbd87(0x51c)+'5s4\x202'+_0x1cbd87(0x5cb)+_0x1cbd87(0x719)+'-2.5\x20'+_0x1cbd87(0x2a9)+'.5z\x22\x20'+_0x1cbd87(0x2be)+'\x22none'+'\x22\x20str'+_0x1cbd87(0x2e1)+_0x1cbd87(0x4e1)+_0x1cbd87(0x68e)+_0x1cbd87(0x6f1)+_0x1cbd87(0x189)+'h=\x222\x22'+_0x1cbd87(0x577)+_0x1cbd87(0x6b4)+'necap'+'=\x22rou'+_0x1cbd87(0x3bb)+'troke'+_0x1cbd87(0x1b1)+_0x1cbd87(0x612)+_0x1cbd87(0x407)+'d\x22/><'+'circl'+'e\x20cx='+_0x1cbd87(0x3d0)+'cy=\x221'+_0x1cbd87(0x646)+_0x1cbd87(0x3b2)+'\x20fill'+_0x1cbd87(0x3ec)+'6b9d\x22'+'/></s'+_0x1cbd87(0x63e),_0x471c4f[_0x1cbd87(0x525)+'dChil'+'d'](_0x5e5ccb);var _0x5ba316=document[_0x1cbd87(0x43b)+_0x1cbd87(0x30f)+_0x1cbd87(0x54b)]('div');_0x5ba316[_0x1cbd87(0x499)+_0x1cbd87(0x2d3)]='mn-ma'+'in';var _0x180946=document['creat'+_0x1cbd87(0x30f)+_0x1cbd87(0x54b)](_0x1cbd87(0x6b0)+'r');_0x180946[_0x1cbd87(0x499)+'Name']=_0x1f9529['ttCnm'];var _0x4f09a6=document[_0x1cbd87(0x43b)+_0x1cbd87(0x30f)+_0x1cbd87(0x54b)](_0x1cbd87(0x530));_0x4f09a6['class'+'Name']='mn-ti'+_0x1cbd87(0x299);var _0x124291=document[_0x1cbd87(0x43b)+_0x1cbd87(0x30f)+'ent']('h2');_0x124291['class'+_0x1cbd87(0x2d3)]='mn-h',_0x124291[_0x1cbd87(0x64d)+_0x1cbd87(0x4b1)+'t']=_0x1f9529[_0x1cbd87(0x53b)];var _0x14fda1=document[_0x1cbd87(0x43b)+_0x1cbd87(0x30f)+_0x1cbd87(0x54b)]('small');_0x14fda1['class'+_0x1cbd87(0x2d3)]=_0x1f9529['NleNA'],_0x14fda1['textC'+_0x1cbd87(0x4b1)+'t']='kours'+_0x1cbd87(0x368)+'.io\x20m'+_0x1cbd87(0x527),_0x4f09a6['appen'+'d'](_0x124291,_0x14fda1);var _0x4235c6=document['creat'+'eElem'+_0x1cbd87(0x54b)]('butto'+'n');_0x4235c6[_0x1cbd87(0x205)]=_0x1cbd87(0x4f9)+'n',_0x4235c6['class'+_0x1cbd87(0x2d3)]=_0x1f9529['ZEAxa'],_0x4235c6[_0x1cbd87(0x171)]=_0x1f9529[_0x1cbd87(0x1a1)],_0x4235c6[_0x1cbd87(0x39f)+_0x1cbd87(0x4c4)]='<svg\x20'+'viewB'+_0x1cbd87(0x37b)+'\x200\x2024'+'\x2024\x22>'+'<path'+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+_0x1cbd87(0x697)+_0x1cbd87(0x2a2)+'/></s'+_0x1cbd87(0x63e),_0x4235c6['oncli'+'ck']=()=>_0xbfa9b(![]),_0x180946['appen'+'d'](_0x4f09a6,_0x4235c6);var _0x533423=document[_0x1cbd87(0x43b)+'eElem'+'ent'](_0x1f9529[_0x1cbd87(0x5ce)]);_0x533423[_0x1cbd87(0x499)+_0x1cbd87(0x2d3)]='mn-co'+'ls',_0x5ba316['appen'+'d'](_0x180946,_0x533423),_0x74d31b['appen'+'d'](_0x471c4f,_0x5ba316);var _0x75009=new Map();for(var _0x1a380e of _0x30c9f9){var _0x43cb53=document['creat'+_0x1cbd87(0x30f)+_0x1cbd87(0x54b)](_0x1cbd87(0x4f9)+'n');_0x43cb53[_0x1cbd87(0x205)]='butto'+'n',_0x43cb53[_0x1cbd87(0x499)+'Name']=_0x1cbd87(0x4a2)+'b',_0x43cb53[_0x1cbd87(0x171)]=_0x1a380e[_0x1cbd87(0x625)],_0x43cb53['inner'+_0x1cbd87(0x4c4)]='<smal'+'l>'+_0x1a380e[_0x1cbd87(0x625)]+(_0x1cbd87(0x197)+_0x1cbd87(0x5a9)),_0x43cb53['oncli'+'ck']=(_0x3514f3=>()=>_0x3a59e1(_0x3514f3))(_0x1a380e['id']),_0x75009['set'](_0x1a380e['id'],_0x43cb53),_0x471c4f['appen'+'dChil'+'d'](_0x43cb53);}function _0x3a59e1(_0x21eb4a){var _0x23bc92=_0x1cbd87,_0x4cad85=_0x5bdc2d['VFSlu'][_0x23bc92(0x1a9)]('|'),_0x37261b=0x17b+-0x13b7+0x123c;while(!![]){switch(_0x4cad85[_0x37261b++]){case'0':for(var [_0x186ae2,_0x3c3f53]of _0x75009)_0x3c3f53['class'+_0x23bc92(0x5e1)][_0x23bc92(0x425)+'e'](_0x5bdc2d['bWbVU'],_0x186ae2===_0x21eb4a);continue;case'1':_0x533423['repla'+_0x23bc92(0x1c7)+'ldren'](..._0x549e97(_0x21eb4a));continue;case'2':_0x124291[_0x23bc92(0x64d)+_0x23bc92(0x4b1)+'t']=_0x23bc92(0x1bc)+'a\x20Kou'+_0x23bc92(0x3dd)+_0x44c17b[_0x23bc92(0x625)];continue;case'3':_0xbecf7f();continue;case'4':_0x5b48b9['cat']=_0x21eb4a;continue;case'5':var _0x44c17b=_0x30c9f9[_0x23bc92(0x2d7)](_0x36d309=>_0x36d309['id']===_0x21eb4a)||_0x30c9f9[-0x1664+-0x22f1*-0x1+-0xc8d];continue;}break;}}return _0x3a59e1(_0x5b48b9[_0x1cbd87(0x215)]||'comba'+'t'),setInterval(()=>{var _0x21998e=_0x1cbd87;if(_0x387a0f[_0x21998e(0x1ab)]===_0x21998e(0x42c)){if(!_0x4d831d)return;var _0x58faa2=_0x533423['child'+_0x21998e(0x65b)];for(var _0x2fb1ae=0x138f+-0xe*-0x2aa+-0x38db;_0x2fb1ae<_0x58faa2[_0x21998e(0x4b4)+'h'];_0x2fb1ae++){var _0x212bf1=_0x58faa2[_0x2fb1ae]['query'+'Selec'+'tor'](_0x387a0f['jcVNb']);_0x212bf1&&(_0x387a0f[_0x21998e(0x2c2)](_0x212bf1[_0x21998e(0x64d)+_0x21998e(0x4b1)+'t'][_0x21998e(0x18e)+'Of'](_0x387a0f[_0x21998e(0x317)]),0x3e6*0x7+-0x1930+-0x1*0x21a)||_0x387a0f[_0x21998e(0x6ef)](_0x212bf1[_0x21998e(0x64d)+_0x21998e(0x4b1)+'t'][_0x21998e(0x18e)+'Of'](_0x21998e(0x6c3)),0x596*-0x5+0x79*-0x48+0xe*0x46d))&&(_0x212bf1['textC'+'onten'+'t']=_0x128de9['safeM'+'ode']?_0x387a0f[_0x21998e(0x361)]:_0x128de9['uwmk']?_0x387a0f[_0x21998e(0x30a)](_0x387a0f[_0x21998e(0x66e)](_0x387a0f['byhAE'](_0x387a0f[_0x21998e(0x561)](_0x387a0f[_0x21998e(0x200)](_0x387a0f['vIrzU'],_0x128de9[_0x21998e(0x440)+'Total']?_0x387a0f['KYiFE'](_0x387a0f[_0x21998e(0x470)](_0x128de9[_0x21998e(0x440)+'Ok'],'/'),_0x128de9[_0x21998e(0x440)+'Total'])+('\x20hook'+'s'):_0x21998e(0x5df)+'ks\x20ar'+_0x21998e(0x219)+'all\x20o'+_0x21998e(0x6f2)),_0x387a0f[_0x21998e(0x446)]),_0x128de9[_0x21998e(0x316)+_0x21998e(0x177)]?_0x21998e(0x435)+'d':'loadi'+'ng')+_0x387a0f[_0x21998e(0x6ee)]+(_0x128de9[_0x21998e(0x57d)+'ers']?'held':_0x387a0f[_0x21998e(0x358)])+(_0x21998e(0x6df)+'vemen'+'t\x20'),_0x128de9[_0x21998e(0x484)+'ents']?_0x21998e(0x2aa):_0x387a0f['ojwRT']),_0x128de9[_0x21998e(0x15b)+_0x21998e(0x550)]?_0x387a0f[_0x21998e(0x723)](_0x21998e(0x47a)+'R:\x20',_0x128de9['lastE'+_0x21998e(0x550)]):''):_0x387a0f['JhvlZ']);}}else{if(_0x51c397)return;_0xa0a0e2=!![],_0x2eb322[_0x21998e(0x4e6)+'entLi'+_0x21998e(0x591)+'r'](_0x5bdc2d['SKHzy'],_0x5f1e48,!![]),_0x5af66b['addEv'+'entLi'+'stene'+'r']('keyup',_0xfcc39d,!![]),_0x2bb0e5[_0x21998e(0x4e6)+_0x21998e(0x557)+_0x21998e(0x591)+'r'](_0x21998e(0x632)+_0x21998e(0x501),_0x18a882,!![]),_0x384070[_0x21998e(0x4e6)+'entLi'+'stene'+'r'](_0x21998e(0x632)+'up',_0x223f02,!![]),_0x502548['addEv'+_0x21998e(0x557)+'stene'+'r'](_0x21998e(0x6cd),_0x4cefac);}},-0x2364+-0xc8*-0x31+-0x4*-0x41),_0x74d31b;}var _0x5adbe2=_0x34ea02(0x52f)+_0x34ea02(0x4bf)+_0x34ea02(0x33b)+_0x34ea02(0x393)+_0x34ea02(0x682)+';\x20}\x0a\x20'+_0x34ea02(0x649)+'{\x20box'+'-sizi'+_0x34ea02(0x518)+_0x34ea02(0x60f)+'-box;'+'\x20marg'+'in:\x200'+_0x34ea02(0x661)+_0x34ea02(0x1a4)+'ily:\x20'+_0x34ea02(0x72b)+'r\x22,\x20\x22'+'Segoe'+'\x20UI\x22,'+_0x34ea02(0x4ba)+'em-ui'+',\x20san'+_0x34ea02(0x541)+'if;\x20}'+'\x0a\x20\x20\x20\x20'+_0x34ea02(0x21a)+_0x34ea02(0x4a6)+'{\x20pos'+'ition'+_0x34ea02(0x2f3)+'olute'+_0x34ea02(0x362)+_0x34ea02(0x208)+'4px;\x20'+'botto'+_0x34ea02(0x64c)+_0x34ea02(0x353)+'idth:'+_0x34ea02(0x481)+'620px'+',\x20cal'+_0x34ea02(0x275)+_0x34ea02(0x248)+_0x34ea02(0x523)+');\x20ma'+_0x34ea02(0x607)+_0x34ea02(0x35a)+_0x34ea02(0x1e5)+'80px,'+_0x34ea02(0x191)+_0x34ea02(0x590)+_0x34ea02(0x410)+_0x34ea02(0x25e)+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+_0x34ea02(0x331)+_0x34ea02(0x204)+'x;\x20ga'+_0x34ea02(0x234)+'px;\x20p'+'addin'+_0x34ea02(0x725)+_0x34ea02(0x3a0)+_0x34ea02(0x60f)+_0x34ea02(0x471)+_0x34ea02(0x4f8)+_0x34ea02(0x2ac)+_0x34ea02(0x158)+_0x34ea02(0x72f)+'ents:'+_0x34ea02(0x538)+_0x34ea02(0x57c)+_0x34ea02(0x2a3)+_0x34ea02(0x455)+_0x34ea02(0x68d)+_0x34ea02(0x582)+'24,17'+_0x34ea02(0x23f)+'82);\x20'+'backd'+_0x34ea02(0x521)+_0x34ea02(0x3e8)+':\x20blu'+_0x34ea02(0x216)+_0x34ea02(0x184)+_0x34ea02(0x1aa)+_0x34ea02(0x46f)+_0x34ea02(0x3ae)+'webki'+_0x34ea02(0x3a4)+'kdrop'+'-filt'+'er:\x20b'+_0x34ea02(0x626)+'2px)\x20'+_0x34ea02(0x676)+'ate(1'+_0x34ea02(0x671)+_0x34ea02(0x52f)+_0x34ea02(0x5ed)+_0x34ea02(0x2ad)+_0x34ea02(0x28a)+_0x34ea02(0x396)+'1px\x20r'+_0x34ea02(0x242)+_0x34ea02(0x58b)+'5,255'+_0x34ea02(0x6ba)+_0x34ea02(0x3a8)+'et\x200\x20'+_0x34ea02(0x5ea)+_0x34ea02(0x66a)+_0x34ea02(0x4dd)+_0x34ea02(0x602)+'55,.0'+_0x34ea02(0x685)+'\x2030px'+'\x2080px'+_0x34ea02(0x66a)+_0x34ea02(0x1ec)+_0x34ea02(0x457)+_0x34ea02(0x1c2)+_0x34ea02(0x36b)+_0x34ea02(0x524)+_0x34ea02(0x378)+'\x20tran'+_0x34ea02(0x26a)+_0x34ea02(0x704)+_0x34ea02(0x3d1)+_0x34ea02(0x30e)+_0x34ea02(0x6d9)+_0x34ea02(0x158)+_0x34ea02(0x72f)+'ents:'+_0x34ea02(0x54a)+_0x34ea02(0x15e)+_0x34ea02(0x4de)+'on:\x20o'+'pacit'+_0x34ea02(0x186)+'s\x20eas'+_0x34ea02(0x2db)+_0x34ea02(0x5de)+_0x34ea02(0x1ac)+'5s\x20cu'+'bic-b'+'ezier'+'(.22,'+'1,.36'+_0x34ea02(0x392)+_0x34ea02(0x492)+'\x20colo'+_0x34ea02(0x433)+_0x34ea02(0x351)+_0x34ea02(0x661)+_0x34ea02(0x667)+'e:\x2013'+_0x34ea02(0x364)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x34ea02(0x68c)+'shown'+_0x34ea02(0x23a)+_0x34ea02(0x59a)+_0x34ea02(0x5c5)+_0x34ea02(0x60a)+'form:'+_0x34ea02(0x54a)+_0x34ea02(0x698)+'nter-'+'event'+_0x34ea02(0x6eb)+'to;\x20}'+'\x0a\x20\x20\x20\x20'+_0x34ea02(0x4e3)+'ide\x20{'+'\x20disp'+_0x34ea02(0x370)+_0x34ea02(0x522)+'\x20flex'+_0x34ea02(0x2e4)+_0x34ea02(0x5f3)+_0x34ea02(0x250)+'umn;\x20'+_0x34ea02(0x3b0)+'-item'+_0x34ea02(0x4d9)+_0x34ea02(0x5f5)+'\x20gap:'+_0x34ea02(0x403)+'\x20widt'+_0x34ea02(0x350)+_0x34ea02(0x63c)+_0x34ea02(0x2f6)+'none;'+_0x34ea02(0x3fd)+'ing:\x20'+_0x34ea02(0x617)+('0;\x20bo'+_0x34ea02(0x49b)+_0x34ea02(0x6c0)+'s:\x2016'+'px;\x0a\x20'+_0x34ea02(0x492)+_0x34ea02(0x54d)+'round'+_0x34ea02(0x1fc)+_0x34ea02(0x1eb)+',255,'+_0x34ea02(0x6b7)+_0x34ea02(0x517)+_0x34ea02(0x52a)+_0x34ea02(0x1e4)+_0x34ea02(0x679)+_0x34ea02(0x690)+_0x34ea02(0x396)+_0x34ea02(0x335)+_0x34ea02(0x242)+_0x34ea02(0x58b)+_0x34ea02(0x421)+',.05)'+_0x34ea02(0x19e)+_0x34ea02(0x426)+_0x34ea02(0x2cc)+'o\x20{\x20d'+'ispla'+'y:\x20gr'+_0x34ea02(0x5d4)+_0x34ea02(0x5a4)+_0x34ea02(0x6bf)+':\x20cen'+'ter;\x20'+_0x34ea02(0x340)+_0x34ea02(0x17d)+'x;\x20he'+_0x34ea02(0x394)+'\x2032px'+_0x34ea02(0x19e)+'\x20\x20\x20.m'+_0x34ea02(0x2cc)+'o-svg'+_0x34ea02(0x727)+'dth:\x20'+_0x34ea02(0x37a)+'\x20heig'+_0x34ea02(0x208)+'5px;\x20'+_0x34ea02(0x593)+_0x34ea02(0x620)+'visib'+'le;\x20f'+'ilter'+_0x34ea02(0x3d3)+_0x34ea02(0x62c)+_0x34ea02(0x19a)+'\x200\x204p'+_0x34ea02(0x36f)+_0x34ea02(0x1eb)+',107,'+_0x34ea02(0x1d8)+_0x34ea02(0x5bc)+_0x34ea02(0x32c)+_0x34ea02(0x33a)+_0x34ea02(0x27d)+_0x34ea02(0x22e)+_0x34ea02(0x370)+'flex;'+_0x34ea02(0x188)+_0x34ea02(0x41e)+_0x34ea02(0x6ca)+'enter'+';\x20jus'+_0x34ea02(0x6ad)+'conte'+_0x34ea02(0x4f3)+_0x34ea02(0x608)+_0x34ea02(0x5c1)+'th:\x205'+_0x34ea02(0x2ac)+_0x34ea02(0x532)+_0x34ea02(0x257)+'px;\x20b'+_0x34ea02(0x60f)+':\x200;\x20'+'borde'+'r-rad'+'ius:\x20'+_0x34ea02(0x3bd)+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+_0x34ea02(0x49a)+_0x34ea02(0x58d)+_0x34ea02(0x570)+_0x34ea02(0x578)+_0x34ea02(0x552)+_0x34ea02(0x1bf)+'gba(2'+_0x34ea02(0x27a)+_0x34ea02(0x259)+_0x34ea02(0x68a)+'\x20curs'+'or:\x20p'+'ointe'+_0x34ea02(0x6a5)+'nt-si'+'ze:\x201'+'0px;\x20'+'font-'+_0x34ea02(0x596)+_0x34ea02(0x25f)+_0x34ea02(0x221)+_0x34ea02(0x387)+_0x34ea02(0x4a2)+'b:hov'+'er\x20{\x20'+_0x34ea02(0x2ca)+':\x20rgb'+'a(246'+_0x34ea02(0x503)+'242,.'+'8);\x20}'+'\x0a\x20\x20\x20\x20'+_0x34ea02(0x192)+_0x34ea02(0x1b0)+_0x34ea02(0x46b)+'{\x20col'+_0x34ea02(0x261)+'ff6b9'+'d;\x20ba'+'ckgro'+_0x34ea02(0x68d)+'rgba('+'255,1'+_0x34ea02(0x634)+'7,.1)'+';\x20}\x0a\x20'+_0x34ea02(0x426)+_0x34ea02(0x3ef)+_0x34ea02(0x374)+_0x34ea02(0x2f6)+_0x34ea02(0x64b)+'n-wid'+'th:\x200'+';\x20dis'+_0x34ea02(0x4a0)+'\x20flex'+';\x20fle'+'x-dir'+_0x34ea02(0x5c2)+'n:\x20co'+_0x34ea02(0x48a)+'\x20}\x0a\x20\x20'+_0x34ea02(0x303)+'-top\x20'+'{\x20dis'+_0x34ea02(0x4a0)+_0x34ea02(0x5e4)+_0x34ea02(0x5b1)+_0x34ea02(0x673)+_0x34ea02(0x36d)+_0x34ea02(0x6d8)+_0x34ea02(0x571)+'p:\x2012'+'px;\x20p'+_0x34ea02(0x385)+_0x34ea02(0x4eb)+_0x34ea02(0x203)+_0x34ea02(0x29e)+';\x20use'+_0x34ea02(0x3b7)+'ect:\x20'+'none;'+_0x34ea02(0x2d1)+_0x34ea02(0x303)+_0x34ea02(0x3e0)+'es\x20{\x20'+'flex:'+_0x34ea02(0x3b8)+_0x34ea02(0x4e8)+'dth:\x20'+_0x34ea02(0x221)+_0x34ea02(0x387)+_0x34ea02(0x2c5)+_0x34ea02(0x490)+_0x34ea02(0x667)+'e:\x2017'+'px;\x20f'+'ont-w'+_0x34ea02(0x4bd)+_0x34ea02(0x658)+_0x34ea02(0x19e)+'\x20\x20\x20.m'+_0x34ea02(0x51b)+'\x20{\x20fo'+_0x34ea02(0x2d4)+_0x34ea02(0x1c4)+'1px;\x20'+_0x34ea02(0x587))+('ty:\x20.'+'4;\x20}\x0a'+_0x34ea02(0x387)+_0x34ea02(0x355)+'ose\x20{'+_0x34ea02(0x22e)+_0x34ea02(0x370)+'grid;'+'\x20plac'+'e-ite'+_0x34ea02(0x6ca)+_0x34ea02(0x608)+';\x20wid'+_0x34ea02(0x269)+_0x34ea02(0x5b4)+_0x34ea02(0x532)+_0x34ea02(0x6fa)+'px;\x20b'+'order'+_0x34ea02(0x3cb)+_0x34ea02(0x5e7)+'r-rad'+_0x34ea02(0x24e)+_0x34ea02(0x5b4)+_0x34ea02(0x54d)+_0x34ea02(0x72c)+':\x20tra'+'nspar'+_0x34ea02(0x185)+_0x34ea02(0x2ca)+_0x34ea02(0x2ba)+_0x34ea02(0x402)+_0x34ea02(0x64f)+_0x34ea02(0x390)+_0x34ea02(0x193)+_0x34ea02(0x352)+_0x34ea02(0x32e)+'inter'+_0x34ea02(0x19e)+'\x20\x20\x20.m'+'n-clo'+_0x34ea02(0x412)+_0x34ea02(0x57f)+_0x34ea02(0x64f)+_0x34ea02(0x390)+_0x34ea02(0x376)+_0x34ea02(0x455)+_0x34ea02(0x68d)+_0x34ea02(0x582)+_0x34ea02(0x602)+'55,25'+_0x34ea02(0x3c8)+');\x20}\x0a'+_0x34ea02(0x387)+'mn-cl'+'ose\x20s'+_0x34ea02(0x1a0)+_0x34ea02(0x340)+':\x2014p'+_0x34ea02(0x37e)+_0x34ea02(0x394)+_0x34ea02(0x654)+_0x34ea02(0x586)+'l:\x20no'+_0x34ea02(0x40a)+'troke'+_0x34ea02(0x3fb)+_0x34ea02(0x5b3)+_0x34ea02(0x380)+_0x34ea02(0x577)+'ke-wi'+'dth:\x20'+'2;\x20st'+_0x34ea02(0x6e6)+'linec'+'ap:\x20r'+_0x34ea02(0x3be)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-cols'+_0x34ea02(0x531)+_0x34ea02(0x4be)+_0x34ea02(0x43c)+_0x34ea02(0x3f3)+'ht:\x200'+_0x34ea02(0x712)+'rflow'+'-y:\x20a'+_0x34ea02(0x229)+'displ'+_0x34ea02(0x49e)+_0x34ea02(0x549)+_0x34ea02(0x643)+'templ'+_0x34ea02(0x6a4)+_0x34ea02(0x1c0)+_0x34ea02(0x47e)+_0x34ea02(0x2b5)+_0x34ea02(0x3f1)+'fill,'+_0x34ea02(0x3f6)+'ax(25'+'0px,\x20'+_0x34ea02(0x391)+_0x34ea02(0x5b1)+'gn-it'+_0x34ea02(0x36d)+_0x34ea02(0x53a)+_0x34ea02(0x5b1)+'gn-co'+_0x34ea02(0x20a)+_0x34ea02(0x3fc)+_0x34ea02(0x3bf)+'ap:\x201'+_0x34ea02(0x39c)+_0x34ea02(0x21b)+'ng:\x200'+_0x34ea02(0x4c3)+_0x34ea02(0x491)+';\x20}\x0a\x20'+_0x34ea02(0x426)+_0x34ea02(0x3a6)+_0x34ea02(0x4f7)+_0x34ea02(0x5b0)+_0x34ea02(0x2a0)+_0x34ea02(0x281)+_0x34ea02(0x727)+_0x34ea02(0x55d)+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x34ea02(0x33a)+'cols:'+_0x34ea02(0x556)+_0x34ea02(0x514)+'croll'+_0x34ea02(0x1e0)+_0x34ea02(0x4cf)+_0x34ea02(0x469)+'kgrou'+_0x34ea02(0x5b9)+'gba(2'+_0x34ea02(0x58b)+'5,255'+',.08)'+_0x34ea02(0x2cd)+_0x34ea02(0x15d)+_0x34ea02(0x638)+_0x34ea02(0x54e)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+'d\x20{\x20b'+'order'+'-radi'+_0x34ea02(0x2f1)+_0x34ea02(0x2ac)+'backg'+_0x34ea02(0x72c)+':\x20rgb'+_0x34ea02(0x1eb)+_0x34ea02(0x636)+_0x34ea02(0x6b7)+_0x34ea02(0x517)+'\x20box-'+'shado'+_0x34ea02(0x679)+'set\x200'+_0x34ea02(0x396)+_0x34ea02(0x335)+_0x34ea02(0x242)+_0x34ea02(0x58b)+'5,255'+_0x34ea02(0x5e6)+';\x20}\x0a\x20'+_0x34ea02(0x4e5)+_0x34ea02(0x507)+_0x34ea02(0x641)+'{\x20bac'+_0x34ea02(0x49a)+'nd:\x20r'+'gba(2'+_0x34ea02(0x58b)+_0x34ea02(0x421)+_0x34ea02(0x357)+_0x34ea02(0x42d)+_0x34ea02(0x2ad)+_0x34ea02(0x2ea)+_0x34ea02(0x18c)+_0x34ea02(0x21d)+'\x201px\x20'+_0x34ea02(0x582)+'255,1'+_0x34ea02(0x634)+_0x34ea02(0x418)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x34ea02(0x46e)+'rd-he'+_0x34ea02(0x686)+_0x34ea02(0x694))+(_0x34ea02(0x6d0)+_0x34ea02(0x294)+_0x34ea02(0x3b0)+_0x34ea02(0x42e)+_0x34ea02(0x4d9)+_0x34ea02(0x5f5)+_0x34ea02(0x6a1)+'\x208px;'+'\x20padd'+_0x34ea02(0x163)+_0x34ea02(0x3f7)+'12px;'+_0x34ea02(0x2d1)+'\x20\x20.sk'+'-card'+'-titl'+'e\x20{\x20f'+'lex:\x20'+_0x34ea02(0x64b)+'n-wid'+'th:\x200'+_0x34ea02(0x19e)+_0x34ea02(0x4e5)+_0x34ea02(0x507)+'d-tit'+'le\x20st'+_0x34ea02(0x5a5)+'{\x20fon'+_0x34ea02(0x667)+_0x34ea02(0x434)+'px;\x20f'+'ont-w'+_0x34ea02(0x4bd)+_0x34ea02(0x24d)+_0x34ea02(0x552)+_0x34ea02(0x1bf)+'gba(2'+'46,23'+_0x34ea02(0x259)+_0x34ea02(0x715)+_0x34ea02(0x19e)+_0x34ea02(0x4e5)+_0x34ea02(0x507)+'d.on\x20'+_0x34ea02(0x49f)+_0x34ea02(0x65c)+'itle\x20'+_0x34ea02(0x3cf)+'g\x20{\x20c'+'olor:'+'\x20#fff'+_0x34ea02(0x2a1)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x34ea02(0x627)+_0x34ea02(0x292)+'dding'+':\x200\x201'+_0x34ea02(0x4ec)+'0px;\x20'+_0x34ea02(0x32c)+'\x20.sk-'+_0x34ea02(0x708)+_0x34ea02(0x55b)+_0x34ea02(0x2d4)+'ze:\x201'+_0x34ea02(0x707)+_0x34ea02(0x587)+_0x34ea02(0x328)+'4;\x20ma'+'rgin-'+'botto'+_0x34ea02(0x3b6)+_0x34ea02(0x1cc)+'\x20\x20\x20\x20.'+_0x34ea02(0x4e2)+_0x34ea02(0x1f1)+'ispla'+_0x34ea02(0x2d8)+'ex;\x20a'+'lign-'+'items'+':\x20cen'+_0x34ea02(0x540)+'gap:\x20'+'8px;\x20'+_0x34ea02(0x21b)+_0x34ea02(0x333)+_0x34ea02(0x154)+_0x34ea02(0x55a)+'-size'+_0x34ea02(0x468)+'5px;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x34ea02(0x625)+'\x20{\x20fl'+'ex:\x201'+';\x20col'+'or:\x20r'+'gba(2'+_0x34ea02(0x27a)+'8,242'+',.75)'+';\x20}\x0a\x20'+_0x34ea02(0x4e5)+_0x34ea02(0x689)+'t\x20{\x20d'+_0x34ea02(0x61e)+_0x34ea02(0x173)+_0x34ea02(0x40b)+_0x34ea02(0x25d)+_0x34ea02(0x33f)+'\x2010px'+_0x34ea02(0x62f)+'city:'+_0x34ea02(0x3a7)+_0x34ea02(0x32c)+'\x20.sk-'+_0x34ea02(0x711)+_0x34ea02(0x543)+_0x34ea02(0x174)+_0x34ea02(0x33d)+_0x34ea02(0x4ad)+'ve;\x20w'+'idth:'+_0x34ea02(0x56e)+_0x34ea02(0x610)+'ght:\x20'+'14px;'+_0x34ea02(0x240)+'er:\x200'+_0x34ea02(0x2cd)+'der-r'+'adius'+':\x2099p'+_0x34ea02(0x644)+'ckgro'+'und:\x20'+'rgba('+'255,2'+_0x34ea02(0x58b)+'5,.07'+_0x34ea02(0x5b7)+'rsor:'+_0x34ea02(0x66b)+_0x34ea02(0x540)+'flex:'+_0x34ea02(0x54a)+';\x20}\x0a\x20'+_0x34ea02(0x4e5)+_0x34ea02(0x3ad)+_0x34ea02(0x6fd)+'after'+'\x20{\x20co'+_0x34ea02(0x20a)+_0x34ea02(0x71a)+_0x34ea02(0x3d4)+'tion:'+_0x34ea02(0x155)+'lute;'+'\x20top:'+_0x34ea02(0x6fc)+_0x34ea02(0x25b)+_0x34ea02(0x251)+_0x34ea02(0x5c1)+'th:\x208'+_0x34ea02(0x437)+'eight'+_0x34ea02(0x599)+_0x34ea02(0x2cd)+_0x34ea02(0x15d)+_0x34ea02(0x638)+_0x34ea02(0x2f0)+_0x34ea02(0x1d3)+_0x34ea02(0x49a)+_0x34ea02(0x5b9)+_0x34ea02(0x242)+_0x34ea02(0x58b)+'5,255'+_0x34ea02(0x50e)+';\x20tra'+_0x34ea02(0x4de)+_0x34ea02(0x1e2)+_0x34ea02(0x45c)+'2s,\x20b'+_0x34ea02(0x4a7)+'ound\x20'+_0x34ea02(0x713)+_0x34ea02(0x32c)+_0x34ea02(0x2c9)+_0x34ea02(0x711)+_0x34ea02(0x347)+_0x34ea02(0x668)+_0x34ea02(0x5d0)+'\x22true'+_0x34ea02(0x70e)+_0x34ea02(0x54d)+_0x34ea02(0x72c)+':\x20rgb')+('a(255'+',107,'+_0x34ea02(0x1d8)+_0x34ea02(0x512)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x34ea02(0x347)+'a-che'+'cked='+_0x34ea02(0x6ea)+_0x34ea02(0x494)+_0x34ea02(0x600)+_0x34ea02(0x511)+'t:\x2015'+_0x34ea02(0x3a0)+'ackgr'+_0x34ea02(0x70b)+_0x34ea02(0x59b)+'b9d;\x20'+_0x34ea02(0x32c)+'\x20.sk-'+_0x34ea02(0x6e2)+'\x20{\x20ba'+'ckgro'+_0x34ea02(0x68d)+_0x34ea02(0x582)+_0x34ea02(0x602)+'55,25'+'5,.03'+_0x34ea02(0x29f)+_0x34ea02(0x60f)+_0x34ea02(0x3cb)+_0x34ea02(0x5e7)+_0x34ea02(0x23b)+'ius:\x20'+_0x34ea02(0x6ff)+'color'+_0x34ea02(0x334)+_0x34ea02(0x5e0)+_0x34ea02(0x3fd)+_0x34ea02(0x163)+_0x34ea02(0x22f)+'px;\x20f'+_0x34ea02(0x6da)+_0x34ea02(0x5a3)+_0x34ea02(0x3c6)+_0x34ea02(0x424)+'tline'+':\x20non'+_0x34ea02(0x5b5)+_0x34ea02(0x726)+_0x34ea02(0x31b)+_0x34ea02(0x5dc)+_0x34ea02(0x396)+_0x34ea02(0x3ce)+_0x34ea02(0x66a)+_0x34ea02(0x4dd)+_0x34ea02(0x602)+'55,.0'+_0x34ea02(0x1f4)+_0x34ea02(0x52f)+'.sk-f'+_0x34ea02(0x18a)+'optio'+_0x34ea02(0x382)+_0x34ea02(0x4a7)+_0x34ea02(0x70b)+_0x34ea02(0x4f6)+'419;\x20'+_0x34ea02(0x32c)+'\x20.sk-'+_0x34ea02(0x69d)+'\x20{\x20di'+'splay'+_0x34ea02(0x204)+_0x34ea02(0x37f)+_0x34ea02(0x52e)+_0x34ea02(0x27f)+_0x34ea02(0x450)+_0x34ea02(0x1e6)+_0x34ea02(0x3eb)+_0x34ea02(0x364)+_0x34ea02(0x52f)+_0x34ea02(0x670)+_0x34ea02(0x2d5)+_0x34ea02(0x67b)+'ebkit'+'-appe'+'aranc'+_0x34ea02(0x5c3)+'ne;\x20a'+'ppear'+'ance:'+'\x20none'+';\x20wid'+'th:\x209'+_0x34ea02(0x39c)+'heigh'+'t:\x208p'+_0x34ea02(0x644)+_0x34ea02(0x455)+'und:\x20'+_0x34ea02(0x60a)+_0x34ea02(0x39b)+_0x34ea02(0x551)+_0x34ea02(0x387)+_0x34ea02(0x1dc)+'ider:'+':-web'+_0x34ea02(0x514)+'lider'+_0x34ea02(0x285)+_0x34ea02(0x341)+'track'+_0x34ea02(0x55f)+_0x34ea02(0x394)+_0x34ea02(0x4ab)+'\x20bord'+'er-ra'+'dius:'+_0x34ea02(0x4ab)+_0x34ea02(0x276)+_0x34ea02(0x5bb)+_0x34ea02(0x564)+_0x34ea02(0x5fd)+'gradi'+_0x34ea02(0x615)+_0x34ea02(0x61a)+_0x34ea02(0x58f)+_0x34ea02(0x553)+')\x200\x200'+'\x20/\x20va'+_0x34ea02(0x674)+',\x2050%'+')\x20100'+'%\x20no-'+_0x34ea02(0x35d)+_0x34ea02(0x236)+_0x34ea02(0x4aa)+_0x34ea02(0x421)+_0x34ea02(0x636)+_0x34ea02(0x5c9)+_0x34ea02(0x2d1)+_0x34ea02(0x5fe)+_0x34ea02(0x2f8)+'er::-'+_0x34ea02(0x1bd)+_0x34ea02(0x267)+_0x34ea02(0x526)+'humb\x20'+_0x34ea02(0x5da)+_0x34ea02(0x2e6)+_0x34ea02(0x377)+'rance'+':\x20non'+_0x34ea02(0x226)+_0x34ea02(0x55d)+_0x34ea02(0x6ff)+_0x34ea02(0x532)+_0x34ea02(0x652)+'x;\x20ma'+'rgin-'+_0x34ea02(0x2b0)+'-2px;'+'\x20bord'+_0x34ea02(0x1d6)+_0x34ea02(0x444)+_0x34ea02(0x505)+'\x20back'+_0x34ea02(0x5bb)+_0x34ea02(0x20b)+_0x34ea02(0x553)+_0x34ea02(0x19e)+_0x34ea02(0x4e5)+'k-val'+_0x34ea02(0x55b)+_0x34ea02(0x2d4)+_0x34ea02(0x1c4)+_0x34ea02(0x707)+_0x34ea02(0x25d)+_0x34ea02(0x596)+'t:\x2060'+_0x34ea02(0x260)+_0x34ea02(0x575)+'th:\x202'+'8px;\x20'+_0x34ea02(0x47c)+_0x34ea02(0x3b0)+_0x34ea02(0x48d)+_0x34ea02(0x3c4)+_0x34ea02(0x321)+_0x34ea02(0x66a)+'(246,'+'238,2'+_0x34ea02(0x255)+');\x20}\x0a'+_0x34ea02(0x387)+_0x34ea02(0x635)+_0x34ea02(0x559))+('\x20widt'+_0x34ea02(0x1e7)+_0x34ea02(0x437)+_0x34ea02(0x4bd)+':\x2022p'+_0x34ea02(0x4df)+_0x34ea02(0x5bf)+'\x200;\x20b'+'order'+'-radi'+_0x34ea02(0x3a1)+_0x34ea02(0x3a0)+_0x34ea02(0x4a7)+_0x34ea02(0x70b)+_0x34ea02(0x54a)+_0x34ea02(0x6a6)+'ding:'+_0x34ea02(0x703)+'ursor'+':\x20poi'+_0x34ea02(0x5f5)+_0x34ea02(0x2d1)+'\x20\x20.sk'+_0x34ea02(0x606)+_0x34ea02(0x55b)+'nt-si'+_0x34ea02(0x1c4)+_0x34ea02(0x707)+'color'+_0x34ea02(0x1fc)+_0x34ea02(0x34b)+_0x34ea02(0x503)+'242,.'+_0x34ea02(0x68b)+'addin'+_0x34ea02(0x2ec)+'x\x200;\x20'+_0x34ea02(0x32c)+'\x20.sk-'+_0x34ea02(0x2e2)+'err\x20{'+'\x20colo'+'r:\x20#f'+_0x34ea02(0x4f1)+';\x20}\x0a\x20'+_0x34ea02(0x4e5)+'k-btn'+_0x34ea02(0x33b)+_0x34ea02(0x6e3)+_0x34ea02(0x604)+_0x34ea02(0x466)+_0x34ea02(0x53a)+_0x34ea02(0x2cd)+_0x34ea02(0x1a6)+_0x34ea02(0x329)+_0x34ea02(0x49b)+_0x34ea02(0x6c0)+_0x34ea02(0x2ff)+'x;\x20pa'+_0x34ea02(0x1ea)+_0x34ea02(0x599)+_0x34ea02(0x2a6)+_0x34ea02(0x1d3)+_0x34ea02(0x49a)+_0x34ea02(0x5d3)+_0x34ea02(0x61a)+_0x34ea02(0x58e)+_0x34ea02(0x39a)+_0x34ea02(0x411)+_0x34ea02(0x55a)+'-size'+':\x2011.'+'5px;\x20'+_0x34ea02(0x25d)+'weigh'+'t:\x2070'+_0x34ea02(0x5e8)+'rsor:'+_0x34ea02(0x66b)+_0x34ea02(0x540)+_0x34ea02(0x32c)+_0x34ea02(0x2c9)+'btn:h'+_0x34ea02(0x383)+_0x34ea02(0x45b)+_0x34ea02(0x5e3)+_0x34ea02(0x53c)+'tness'+_0x34ea02(0x34a)+_0x34ea02(0x19e)+_0x34ea02(0x548));window['addEv'+_0x34ea02(0x557)+_0x34ea02(0x591)+'r']('keydo'+'wn',_0x2a3a0e=>{var _0x3f5245=_0x34ea02;_0x387a0f[_0x3f5245(0x6ef)](_0x2a3a0e['code'],_0x387a0f['RzJqt'])&&(_0x2a3a0e[_0x3f5245(0x592)+'ntDef'+_0x3f5245(0x314)](),_0x387a0f[_0x3f5245(0x293)](_0x36b28d));},!![]);var _0x4bae57=document[_0x34ea02(0x43b)+_0x34ea02(0x30f)+'ent'](_0x34ea02(0x530));_0x4bae57['style'][_0x34ea02(0x510)+'xt']=_0x1f9529[_0x34ea02(0x665)],_0x4bae57['inner'+_0x34ea02(0x4c4)]='<svg\x20'+'viewB'+'ox=\x220'+_0x34ea02(0x38e)+_0x34ea02(0x4d1)+'<path'+'\x20d=\x22M'+_0x34ea02(0x5f1)+'c-1.5'+_0x34ea02(0x27e)+_0x34ea02(0x1d2)+_0x34ea02(0x6e4)+'5\x200-2'+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x34ea02(0x61d)+_0x34ea02(0x5cb)+_0x34ea02(0x719)+_0x34ea02(0x6d7)+'5-4\x207'+_0x34ea02(0x1f9)+_0x34ea02(0x2be)+'\x22none'+_0x34ea02(0x1ba)+_0x34ea02(0x2e1)+_0x34ea02(0x4e1)+'9d\x22\x20s'+_0x34ea02(0x6f1)+'-widt'+'h=\x222\x22'+'\x20stro'+'ke-li'+_0x34ea02(0x286)+_0x34ea02(0x354)+_0x34ea02(0x3bb)+_0x34ea02(0x6f1)+_0x34ea02(0x1b1)+_0x34ea02(0x612)+_0x34ea02(0x407)+'d\x22/><'+_0x34ea02(0x6e5)+_0x34ea02(0x51a)+'\x2212\x22\x20'+_0x34ea02(0x589)+_0x34ea02(0x646)+'\x221.5\x22'+'\x20fill'+_0x34ea02(0x3ec)+'6b9d\x22'+_0x34ea02(0x528)+_0x34ea02(0x63e),_0x4bae57[_0x34ea02(0x171)]=_0x34ea02(0x1bc)+_0x34ea02(0x417)+'r',_0x4bae57['onmou'+_0x34ea02(0x6c5)+'er']=()=>_0x4bae57[_0x34ea02(0x64e)][_0x34ea02(0x587)+'ty']='1',_0x4bae57[_0x34ea02(0x1fb)+_0x34ea02(0x239)+'ve']=()=>_0x4bae57['style'][_0x34ea02(0x587)+'ty']=_0x34ea02(0x63a),_0x4bae57['oncli'+'ck']=_0x4d05c6=>{var _0x1dc6ae=_0x34ea02;_0x4d05c6[_0x1dc6ae(0x684)+'ropag'+'ation'](),_0x1f9529['yYZRw'](_0x36b28d);},document['body'][_0x34ea02(0x525)+_0x34ea02(0x266)+'d'](_0x4bae57),_0x1f9529[_0x34ea02(0x327)](_0x5c807a),_0x1f9529['IkjPl'](requestAnimationFrame,_0x466125),console[_0x34ea02(0x4c8)]('[saku'+_0x34ea02(0x46c)+_0x34ea02(0x2b3)+'enu\x20r'+'eady.'+_0x34ea02(0x2af)+':',_0x128de9['uwmk']);});})()));function _0x3b2b(){var _0x1c98b5=['ihSGzM8','DvvdywC','zhrOoIa','vfbwyNC','ihSGAgu','uxrHDxe','qw1LCve','DgHLihC','CKTYC2m','zdOGBgK','DvLZu1O','sgH5sgu','yM91BMq','y3jLzw4','y3jVC3m','Dgv4Dei','Ag9VA04','C2STBwq','CMqTDgK','idi2ChG','BMCGzM8','CMfUC3a','CJSGz2e','vhbhCLm','Ae5htNG','vuDODhm','BI13Awq','q2XVC2u','ihn0CM8','yxjLBNq','Aw9FnZi','j3qGC3q','zuv4Ca','oWOGica','C2HVB3q','nNWXmhW','DMvYihS','mJe2ou1IsK1iCa','ig1HEsa','CMDIysG','yw5Uywi','mNW1Fde','ignHy2G','oYbMAwW','B3bHy2K','nYWWlJm','y3K9iJe','zvvZyuG','ntuSmJu','B1P4D2e','BMq6ihq','zdSGy28','zcWGi2y','kdeWmhy','C3rLBMu','ChjLDMu','B3zLCMy','qxrhzwm','quXNu2W','D2vPz2G','rgPAy0G','tgvNAw8','oIa4ChG','ywnPDhK','icnMzJy','B3bLCNq','u21Lru0','zwfK','D29YAYa','y2vSzxi','swzdAwS','BNqGAge','AxPLoIa','BgfJzs0','CM9UzYa','yY0XlJu','zMLSBa','De5Vzgu','BgW+','A3mGyxi','B3vUzgu','rgfTywC','zNvSBhm','igTVDxi','zhb4D0W','zwjRAxq','oYbHBgK','vMfSDwu','CMvUDem','ohb4oYa','ztSGyM8','igvYCG','ktSGy3u','q1blAxm','BMq6ihi','Bg9Hzca','z3jVDw4','ocKPoYa','Ag9VA0m','ifjLy28','CMrLCJO','DxDdu1y','oYb3Awq','zwn0Aw8','ztOGBM8','B2r5','oIaXoYa','ig5VigG','zcbZzwu','BNqGAxq','lJa4ktS','A2vZig8','idqGnc4','zxiGC2W','vg90ywW','tuzzrey','svn1suu','y2TLzd0','rw5NAw4','CM9WywC','BMq6icm','Awq7iha','Fdj8nhW','lwfWCgW','CJOGDgG','rM9Yy2u','Dg9Is0G','EYaTD2u','tKDZufG','Aw5Zzxq','z3ncsge','yw5ZzM8','mcbOB28','zwvMmJS','tgLZDa','ndGZnJq','DgvYoIa','igzSzxG','A1bOqMW','lc4WnsK','yM9Yzgu','mdSGy3u','wgTpzxC','mxb4ida','AwXqr1K','tuLtu0K','icbIB3G','B3b0Aw8','CM9ZC2G','DunnwuK','mtiGmJe','DxDTAW','y3rPB24','zvbPEgu','BNrLCJS','y2fWDhu','ug1MA1C','ywrIBg8','yvjzwMG','DMvYBge','Bw92zq','AwWGC3a','BMvHCI0','icaUC2S','CMvHzey','zNrLCIa','nZi2oufbDwjuuW','mJu1ldi','vvDnsYa','zwXMoIa','ie92zxi','lw5VDgu','Ec1OzwK','zw50zxi','rKLxu2C','DhjHBNm','ihWGz2e','BNrLCI0','CgfNzsa','DdOYnNa','B3jKzxi','oYbOzwK','v2vHCg8','AM9PBJ0','CYbpsgu','C2fRDxi','zw50kcm','A3nqB3m','mtjWEca','B3nL','v2LKDgG','zMy2yJK','Dgv4Dee','zwLUC3q','nxm0idi','AxnWBge','EwrVAxi','Bg93oIa','m3W3Fdq','zJmY','A291CI0','yw1Hz2u','BgfIzwW','BhvYkdi','BwjVzhK','ANvTCfa','iezPCMu','yw5Vugy','zxjYB3i','Cc1ZAge','BwvsDw4','4Ocuig5Via','oYbVCge','uK1c','CMvHzhK','Bw91C2u','D2fYBG','mdCSmtu','C2STy28','ldi1nsW','DgnOihq','ywrPDxm','rgLZywi','mc41','zvj1BM4','ChG7igy','qMXVy2S','DMC+','zxjZ','AguGzgu','zc5VBIa','Aw9FmZa','z3jPzc0','EdSGyMe','mdbTCY4','mciGCJ0','CYb3B24','Bg9Hzhm','icaGkIa','BsbVBIa','mtSGBwK','BtOGmJq','Dgv4Dem','C3r5Bgu','ig9Wywm','tg9JywW','zw4GDg8','DdOGnNa','oefkr0vRDG','ide0ChG','mZiZmZy3mMLPBK9lta','C3bHBG','tfLcrum','oIa2nta','ChGGDwK','D1vjD3y','CMvU','yxjKlxq','uhjkANG','yxrSEsa','vw5SBwu','ihrOzsa','oYbMB24','mhGYnta','y3fjCMq','wenItKG','ChrzEKW','ifTfwfa','Dc1ZAxO','ys1JAgu','DcbHihq','ihjNyMe','ihbVAw4','AMT1DNu','BhvoExO','ueLMBvi','igH1CNq','lNnRlxm','ntaLktS','zsbTAxm','z24TAxq','CIGTlxa','Cg9W','C2f0Dxi','vfLOEhe','mtaWid0','DZOGAw4','igzVCIa','ihSGlxC','zgvSzxq','AgfPCG','zhjVCc0','vejSz2m','ys5RB3u','BgWGBwu','AxrPywW','zgf5AKe','C3rVCfa','nsKSida','ywqGEYa','BMuUqxa','wMvYB2u','AY1OAw4','lc40ktS','nsK7iha','yw5LBc4','Dw5KoIa','owqIihm','BM9Uzq','C2v0ida','ywqU','z29K','serNAM0','zgLZCgW','uhbysMi','Bw9fEha','mtGGnIa','oYbWB2K','txrLuve','zNbZ','AMjhAeC','yxrLvge','CMfUz2u','BhKGkhi','mtf8mtu','ChvZAa','igDHCdO','rwfJAca','z2z5Ehi','yxrLlwm','CJSGzM8','oYbWywq','rNjHBwu','Aw1Llca','veDuwK8','Bxfcweu','CM9Szq','DxmGywm','DgLMEs0','oJiXndC','BsbSzwy','AgvHzgu','v2LTvKi','BMLUzW','BgLJyxq','A2uTBgK','B3rOAw4','mNWXmhW','mJu1lc4','BMX5kq','ugn0','lc4WnIK','B3jZige','uNzOrgy','t1nOB28','Bg9Hzc4','AxrLBxm','CMfKAxu','B3qGBwe','Cuv1BgG','u0fgrq','y3KGB24','C2vLBNq','v0fRrKi','r2PrDhG','r29Kl2q','lsbVDMu','Bxm6igm','rvrhyKK','vvDnsW','yMX1CG','ihLVDxi','AguGzNi','yxK6igy','CYbnB3y','t3bbDNa','mNm7Cg8','B3rZlG','z2v0q28','Aw9U','ltiUnsa','y2vUDgu','ChGPoYa','B250lxm','CMLZAYa','DgvY','y2vZlG','A2v5C3q','ihWGBw8','zgjAsfq','C2v0sxq','zMLLBgq','AwDUlxm','ltqTnY4','y2LYy2W','CM9Rzs0','v3jHCha','yxb0Dxi','BYb0Agu','iNrYDwu','CZOGyxu','D1vNsha','i2zMzG','rMTPrfK','zefftMu','CLzfyKm','DhjVA2u','zMyP','AwrLCG','igXPBwK','ywrK','Fdj8mhW','qwrIBg8','ihDOAwm','Bw4TDg8','DdOGmJG','DMjrsgi','idnWEdS','DgnOoJO','CgXPy2e','nNb4oYa','B2rL','CKjrvNC','z3jHDMK','ida7igm','oIb0CMe','mcWWlJy','D2L0Aca','mxb4oYa','BwrLC2m','w3nHA3u','CMfPC2u','B3vUzdO','BguGAwy','q214sxe','iL0GEYa','DgvJDgK','DhKGDMe','C3DPDgm','oYbVDMu','lJjZoYa','Egf4q0y','lc40nsK','zgv2Awm','D3rkENi','igq9iK0','nwmWidm','oIaIiJS','uMvJDa','AeXltMq','BNris1m','tfjyDKK','z3HosMK','DgfNtMe','shPrBK0','C2v0','u0vAD0i','tevmyMC','zZOGmta','Ec1ZAge','ihSGD2K','BwvUDca','zwn6BhC','DtmY','iKLUDgu','CM91BMq','tgnQB2G','BwLKzgW','zxiTzxy','mJu1lde','BsbYAwC','vhnltfG','zKvOt3m','ChGGmdS','igfIC28','kYbtCge','CwrNB2q','Cg9PBNq','zgLgtvK','t3zLCui','BgfZDeu','AxnPyMW','zgvYlxi','oYb0CMe','EwD6Auy','DwX0','m3WWFdi','uMfWAwq','Aw5NoIa','BvfkChi','qM90Dg8','DdOXmda','rMTRt0C','vhv0zKK','AwvKigm','rwXLBwu','CMfUC2K','twzWzxy','y2HPBgq','sLfsDMq','u2rvqwC','B25Lige','DgL0Bgu','BhrO','EtOGyMW','B3nPDgK','DeHYzg0','EI1PBMq','B2fKzwq','B24Gzxy','D1zQANi','BsbJzw4','s2LSBgu','zgvZyW','oIaZmNa','qxnZzw0','zwXK','zgTPDa','sNvTCca','CeXLwhu','yxbWBgK','EcKGC2e','zw50oYa','EsaUmZu','y2HLy2S','igfSAwC','lxDPzhq','AwvSzca','zxzLBNq','BNnLDca','zxjZy3i','Aw5KzxG','vM9RBhu','lwjHBNi','ignHBgm','lM1Ulxq','lJq1oYa','lNnRlw0','vKXmAMi','zxH0','pc9ZBwe','ywqUieK','r1nfC1q','zg93kda','sw5PDgK','y2fWtw8','z01YsKW','oYb9cIa','lxnLCMK','DMCGEYa','tvHeBhO','BNrezwy','DxjDifu','Dc1Myw0','mJqWiey','zgvYoIa','Dxvrree','C2v0qxq','C3bSAxq','DhvYyxq','u1jgCw4','CM0GlJq','tKCGlsa','Aw9UlLq','DgLVBJO','ywiUywm','lwXPBMu','B2reAwu','yxr0ywm','uhHMwLG','rLbtig8','Bgf5ig8','CNj0EfC','r3jHDMK','uKXSq28','iIbZDhi','B3vUDgu','u2fRDxi','D2vIA2K','q3jVC3m','B3i6ihi','B2X1Bw4','zxzbqwC','ktSkica','y2HdB2W','EMu6ide','qunuAYa','z3bqsfm','y2vdAgK','Bg9HzgK','mti1mtKYog5yD2f6ra','Bw4TCge','tu9ersa','EdSGFqO','rLvtrhG','vez5wwW','ywn0A0S','ruXRvMS','B25SEsW','nc00lJu','oYbIywm','B21iy1m','uMvMAwW','zxiTCMe','ihrOAxm','mtu3lc4','rMr1v2G','CI51As4','Aw5JBhu','C2STC2W','vhrYswy','A3ndChm','u1frvgK','yMfYlxq','yuTVDxi','B246igW','EsbKzwy','C2HHzg8','BwLUkdq','zxi7igC','AdOGmZq','zIXZExm','Eunjsxe','zgrPBMC','ysGYntu','kdaSmcW','y2fSBhm','mNb4ihu','zwX2zNm','ls1W','Bcb7igq','q1rrBuW','tMTpBuS','nsK7ih0','EgvZige','mtK5mZi0nu11v3HgEG','zg9JDw0','lxnHBNm','lJv6iIa','y1nYr3O','B25TB3u','oIbYz2i','uxv5sNi','yxnLBgK','zwfWB24','D3z4zKe','C3rPBgW','D3jPDgu','Eca2ChG','oIbMBgu','DhLWzq','sevwzNG','ifvUAxq','Ahq6idi','swPiq3y','BNrLBNq','zdOGi2y','DhjPyNu','yMvS','D1vNEem','BfDqC0i','DgLKzs4','qwXqwLe','B3zLCMW','s2v5qq','te1c','y2f0','CIGYmNa','AYbVBI4','q1DLvvG','BwvKicG','lM1Ulxa','CgfKzgK','C3juA0e','mcaWida','DgHwq1K','q3vZDg8','z29KrgK','mdSGFqO','CMLUz3m','ignVB2W','BeHSy0m','zw5HyMW','ztSGD2K','D0nVBg8','CMvSB2e','DxrVoYa','vw5PDhK','BerPzsK','qNzisxi','ig9YigS','igrPC3a','nNb4idK','nYWWlJG','C2fMzu0','y29PBa','CMqTAgu','CdOGmta','zcbJAg8','DcWGCMC','Cw9ht3K','zwfKB3u','C2vSzwe','ihSGB3a','CI1Yywq','zw50rwW','uvDqt24','C3rYB2S','ldiXlc4','igjVCMq','BIbZAwC','z2jHkdi','B25LigK','yMX5lum','sxbMvvm','rgLL','C0Dcz1O','DNCGlsa','AxmGAg8','y2fWu2G','DMvTzw4','m3W1Fdi','oIa2mda','AxvZoIa','q29TyMe','oIbJB2W','oIaZChG','uMvJB2K','EMLRvee','mcWWlJG','ndiSlJG','Cu5oCuq','DdOGmZq','AMDovKK','ocWYndi','sgHosxm','igXLzNq','y29TyMe','zM9UDc0','ohb4ksK','DdOGnZa','mdSGBwK','B3i6icm','q0z3Bgi','CMvMAxG','BgLUzvC','mhG2mda','zenOAwW','Dc1ZBgK','y2HtAxO','DgG6idi','C2zVCM0','zeLvvMG','igvUDgK','nJaWia','tg9Hzgu','rLrLwNq','zxf6rgG','zvfLruW','BwvZC2e','FdL8mhW','Bw92zvq','yYGXmda','igjHy2S','zgvZ','v2vYtey','DgGUsw4','ndySmJm','DgvZDa','tw9Kzsa','DgfIihS','ltiUns0','DgvTCZO','zM9UDa','BgXIyxi','As1TB24','Fdb8n3W','CxjNDu4','lxj1BM4','BMvJyxa','CMvSEsa','ywjrAvu','uu1ltM4','B3C6ida','kYbmtui','u0flvvi','v0ftrca','ndC0odm','z3LIywm','zsXTB24','yMvNAw4','ihSGCge','z2LTs2e','Bgv4oYa','lK92zxi','ugHYAgO','lKXVy2e','Bw1VifS','DgXLCW','uMf0zq','Bgf0zwq','rgfUz2u','BM9szwm','ideYChG','nsK7igi','lxnJCM8','mgy1oYa','nIaXoci','icaGyMe','zsb3zwe','CwLhsuq','ide2ChG','t0HLywW','mtjWEdS','ns00idC','AgvSza','AePvthC','mNb4oYa','lxnOywq','DxjDigG','ifvxtuS','Dg9WoIa','B3nWywm','CMvWBge','DxjDig0','y2uGB3y','CgvHDcG','vxDsu3m','phbHDgG','vwXuEMW','DKfNDxe','oIbPBMG','ys11Aq','zxmGB24','BMvS','zMLSBd0','nhWXm3W','svHtv28','ywXSig8','ywPVu3K','vwPsAMC','Ag9VA1a','Bw4TAca','Dhj1zq','AwvSza','C2STC3C','ic5ZAY0','y29SB3i','sw5ZDge','BI1SB2C','oYbIB3i','B2LS','yxrJAgu','yM90Aca','ih0kica','mcWWlJu','tMfTzq','BNqTC2K','BgLKzxi','CYbZChi','zMLUza','EtOGzMW','vNLquve','mhWXmxW','zsWGDhi','igvSC2u','rwLYB0e','ienquW','vvjbx0S','mxWXm3W','B2TLpsi','BM90zs4','CM9Rzxm','lwrPCMu','CwTwCgm','yMTPDc0','B24Oks4','igHVB2S','zMznwe8','B3C6igK','Fdr8mNW','zZOGmNa','Dg87zMK','EM1SwM4','BM93','oIa1mcu','Dxm6ide','C0vrwuW','oIbHyNm','Aw9UoMy','v1bVv2i','Bgv4oIa','sg9QqMm','lxnSAwq','igj1AwW','BNn0ywW','Dhm6yxu','u1fSrLC','CMLNAhq','y2SP','CZOGoha','zMLSzw4','Bw4TC2K','rMDvse8','icaUBw4','yM9KEq','AeXpvfO','B1jLy28','ihjLy28','CMvJDa','zxrLy3q','BeHZy0u','zgfTywC','DhKGmc4','EKPZBxu','zvKOmtG','zuvSzw0','yxrPB24','D0jSDxi','zxj2zxi','qwLOC2W','yxvSDa','ywn0Axy','z2fTzuW','q1j6Afu','Fdv8mty','CYaNzNu','C3bLzwq','zg93oIa','teX5u2i','CYbHBgW','C2XPy2u','ywDLigq','nhWW','B2XVCJO','C2STCMe','l3jHCgK','yxKGB24','zvn0EwW','B29RCYa','AMrPuNa','DhK6ic4','mdSGyM8','CIbHzhy','s2v5vW','FqOGica','lMrSBa','CJOGCg8','DMG7EI0','AwXLzdO','C3bSyxK','C3zNiJ4','BMC6idq','oIaJzJy','mxb4ihi','rgvUD0i','igLMig0','zxrhyw0','BNrLEhq','ic5TBI0','ihSGywW','vgHLC2u','B246ihi','Bg93zxi','C2L6ztO','D2LKDgG','ywjSzs0','sxnhCM8','sfnUqNu','B24UvgK','zM9YBxm','igv4Axq','AfTHCMK','Evz5BKK','vNr4BMe','kdeUmsK','ysGYndy','ruTIy2q','tM8GuMu','C0Ddrwq','vhj1txi','AdOGnJi','nMvLzJi','y3vYC28','ChG7ihC','psjYB3u','Bw4Ty2W','zvzHBhu','lc4WncK','B2P3uLq','zw1LBNq','z2H0oIa','z2uUiei','AuTqr1i','CMvWzwe','v01ligK','B2Lkzhu','DcbZDge','rNHUDfm','oYbYAwC','AcbVBMu','ChG7ih0','Awr0Aa','mZuSmJq','m3WYFde','DhjPA2u','Axb0kq','ieDLDfy','icaGig8','z2v0rwW','zw1ZoIa','zguSihq','EcbYz2i','Bgf5oIa','AhDeCve','zMLSBfq','zxnJ','BIb7igy','Dw5Kzwq','mtSGyMe','yxbWzwe','EtOGmdS','nJq2o2m','mJvWEdS','B3G9iJa','rKTdBeq','zhbY','EdSGAgu','EdSGywW','B2XVCJS','BhmGysa','BIb7igi','B3zLCIa','wenSwNG','ywrKAw4','yLb2DxO','icaGic4','y29Kzq','r3LJBgO','EuDXrKS','Bw9Rzeq','lsbHihm','ihjLBg8','idaGmJq','vgLJAW','Axr5oIa','mwzYksK','ldePoWO','BdOGAw4','AwDODdO','v2fxuxG','idaGmca','ywqGDg8','Dw5PDhK','jYb0Agu','Bg9YoIa','CgfYzw4','mhb4oYa','nYWWlJC','AffSq24','Aw5Uzxi','ChG7igi','Dxm6idy','nda0D3Hdtfz5','zxjZihq','Dc1Iywm','yw1L','BI1JB2W','ic40oYa','lcbPBNm','Ew5Nu1C','yxvSDca','DLzMrK0','DgHVzca','AY1ZD2K','jsK7ic0','r0rWqKW','ywXPz24','AhjXsfG','iJeUnsi','rgPws1C','4Ocuig92zq','sw5Zzxi','BtOGnNa','CI1ZzwW','ide7ig0','CNfNBhm','B290zxi','BMqIihm','Du5oAxi','mtbWEdS','B3vUzdS','CNq7igC','mxWZFdi','C0j3Dfu','y2L0EtO','DgXL','Ahq7igm','zhzOwvy','mteUnxa','DMfS','nsWUmdu','uNHpvLu','qKfrAgO','oIaWoYa','zwv6zsa','rLHZsLO','mcaXChG','C3rYB24','iJeYiIa','BNnSyxq','Bwf4','oIbKCM8','ihbVC2K','Be1VDgK','BgLNBG','CNr1Cca','t3zLCNC','Fdb8m3W','BgDhrxK','zsbZzxi','zxzLCNK','CIdIGjqG','Bg9Y','vgfRzxm','lxrPDgW','zvrHA2u','C2HVD24','qxbqCe4','ms4XlJa','AsXZyw4','BxPvshK','wejrrNi','AwX0zxi','q3btAuS','C2PVB20','yxa6idG','psiJzMy','vg9ZvKW','ufjLDha','BI1TywK','D1LerNC','yxv0BY0','A0fLC1C','lwHLAwC','A2vizwe','yxnZAwC','ig1PBM0','mtfWEca','u0fgrsa','CMvHza','s2v5ra','oIbJDxi','oIbZDge','ihbHzgq','igrHBwe','zwfKige','zxP0rNi','Fdz8nxW','zxjPDdS','idrWEdS','r3bHywi','uvrzB20','igDHDgu','iNjVDw4','CI52mq','tgvMDca','BMu7ihm','B2nRoYa','qMnjD2O','Aw5Mqw0','CMvZDg8','D0fUvfu','AcaTidq','i2zMzJS','C2u6Ag8','BML0igy','mJzWEdS','C2f2zq','qu9VEgC','ysblB3u','nYWUmJG','u2L6zq','yvH6DM4','vujRAKS','C2STBM8','Aw4GC2e','BI1PDgu','ufmGDw4','sKDWzhi','nsWYntu','AtmY','Fdf8nhW','EdSGB3u','Dg9Nz2W','icaGlM0','CMfWAwq','y2fSBa','u2TPChm','tuH1zM0','CNrPzgu','zKzqu00','oYbIB3G','lwL0zw0','y2HLCYa','t1fPzuO','B1zbvK0','z21Vvxe','CJOGi2y','ztOGmtm','Bg9Hzgu','BxKGC2u','ChG7igG','BMHSzxm','tw92zw0','DgLVBI4','y3jLyxq','oYbTAw4','B29Rihi','wg9wsK4','Dg9W','Ag9VA3m','AxmGyNu','C2HPzNq','zvjHDgu','zgL1CZO','CIb2ywW','D3PKC2W','lxbHCMu','DhmGCgW','s2v5uW','u2fMzxq','BLbSyxq','BMf2','vLnSuKu','mJiSocW','ihn0AwW','ignLBNq','sMfXr0S','BMn0Aw8','ihDLyxa','mtaZodfXBwjkCNy','y2TNCM8','q29SB3i','mcWUntu','CLHdAM0','AxHLzdS','B2rLu3q','EYbMAwW','zwz0ic4','z2v0','Aw1AAKC','AwDUyxq','Bw1Iq1C','A1LpAgC','tfb2tKC','zcbNCMu','mtyZntGZotbhwgDyuwm','zvbSyxK','zMXLEc0','y2XLyxi','oIaXms4','EYbIywm','EdTVCge','DgL2zsa','CMeTA28','Cw50yLq','C2STy2e','zsGXnta','u2HMve0','lxjHzgK','AwrHDgu','B24U','v091DM4','u3z5sLi','D2fPDgK','AunRrxy','BwLZyW','BgLUzvq','ihWGrvi','qwP4DLq','Dgv4Dc0','tfPKtxO','CZOGCMu','BfvhtKS','q0PqzLO','ig1PBIG','vgvIvK4','u2v0r2e','Bw92zw0','yxjPys0','khjLBg8','idi0iIa','CxzLCNG','tM9QDu4','BhvTBJS','z1nZEvG','DgvTlxu','oIbYAwC','nZaWia','B3n0zMK','EYbMB24','nNb4ida','icaGica','q0fovKe','iL06oMe','u2nHBgu','zwrAA2u','Dw5RBM8','DKLYELu','y2XHC3m','A2DYB3u','CMrLCI0','BerPzsW','rvHqxq','yxK6igC','lNnRlwm','CgXHEtO','AguGDxm','Bw4TDge','zuLJqKe','Agf0igq','sw5MAw4','yw5LBca','ywnRz3i','EvDkueS','ihrVide','yMeOmJu','idjWEdS','ywLYlG','zwXHDgK','sgztwwq','B0rrshu','A3nty2e','B250zw4','Fdb8nhW','C2vYDMu','BgvUz3q','sxjPv3i','t3rJB1q','Dw5grxy','C2v0x3q','AwnRihm','ihn5C3q','AgD0yxe','ohG5mc0','zwLNAhq','zxG6ide','oMHVC3q','quTfrvi','BNvhCgy','DxqGDgG','idrWEca','sfrnta','id0GzMW','yxjJ','z2v0qxq','Bg9N','DxjH','CgfYC2u','nhWXFdy','lJuGms4','uuXwEhe','zMLSBfm','AhvTyIa','tMvpD3G','idi0iJ4','qNnxEey','zMvZq28','DK5lBuu','ugf0Aa','zNbKwwq','ywXSihq','DMvYlxy','CZOGy2u','D2L0Ag8','qxvpueG','v2vItw8','kdi1nsW','BNnPDgK','EdSGyM8','BMfwvuK','i2zMnMi','C2STy3q','lM1Ulxm','z2LMEq','icaGlNm','ywrKrxy','BM9tChi','Aw4TD2K','ndiWnMXbrKnosW','igfUzca','zZOGnNa','mNb4ide','C2STyNq','t1vsx18','zxG6mJe','mcWWlJC','zJDHotm','DhLSzq','BNq6igm','C21HBgW','BM8Gy2G','icmYmJe','CZO6lxC','Dxm6idi','yNv0Dg8','zhrOoJe','ufbfvva','y2fUDMe','v2LWzsa','DgvYo3C','BMDL','EufywgC','zg93BG','AgfZ','ldiZocW','DMfSDwu','iduWjtS','mc41o3q','AY1Jyxi','BvLHAKG','vNvdyK0','yMHVCa','x19tquS','uKfOBMC','B25PBNa','lc4YnsK','sNjmv0y','y3nZvgu','EYbSzwy','mJuPoYa','BfjHDgK','A2L0lxm','wvDSC1a','DgHPCYa','mdi1ktS','BMC6igi','CMXHEsa','zsbJEd0','BI1ZDwi','idqTnc4','yxjNzxq','Ag9VA0C','BgLUzw4','s0TVD0C','CM9Wlwy','zMXLEdS','ndHWEcK','CgfJAxq','yxbWzw4','zgvYlxq','zw51','lZ48l3m','x19ZywS','igjVEc0','Fdj8m3W','B2f0Eq','y3qGB24','AwDUlwK','cIaGica','zgL2','ihSGzMW','AgvPz2G','yNnrBxu','zvbSDwC','Cu1zBK8','CwLmCKW','zhrtsKm','igf1Dg8','Dg9WoJe','C3rHCNq','B1jqtLO','yNjPz2G','u3rHDgu','igjHBIa','BMqGt0G','DgvYoYa','CY1Zzxi','A2v5zg8','Acb7iha','ywX0Ac4','zw50CW','ihWGC2G','B2STCMu','icaG','CMLKoYa','ig5VBMu','zw50','ug9ZAxq','yMfJA2C','oIa0ChG','rxzsAM8','CNjVCG','DdSGFqO','oYbJB2W','zJzIowq','mhWZFde','mtySmc4','oI13zwi','zw50tgK','zsbBrvG','Bg9YihS','igzVBNq'];_0x3b2b=function(){return _0x1c98b5;};return _0x3b2b();}
