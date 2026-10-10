// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.9.6
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
function _0x4928(_0x174790,_0x569114){_0x174790=_0x174790-(0x26b*-0x6+0x1*-0x17a8+0xa*0x3e5);var _0xf5e642=_0x51a4();var _0x39ca84=_0xf5e642[_0x174790];if(_0x4928['Fxivsj']===undefined){var _0x422f12=function(_0x2d0be7){var _0xb95ca1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4697b6='',_0x480273='';for(var _0x12438d=-0x1541*-0x1+0xfe8+-0x2529,_0xbb3c2,_0x5bf2a1,_0x50d2b3=0x1055+-0x1d9+-0xe7c;_0x5bf2a1=_0x2d0be7['charAt'](_0x50d2b3++);~_0x5bf2a1&&(_0xbb3c2=_0x12438d%(-0xe4b*-0x2+0x2e7+-0x1f79)?_0xbb3c2*(-0x1781+-0x17*-0x125+-0x292)+_0x5bf2a1:_0x5bf2a1,_0x12438d++%(0x11*0x2b+0x389+-0x660))?_0x4697b6+=String['fromCharCode'](-0x1*-0x692+-0x132d*-0x1+-0x18c0&_0xbb3c2>>(-(-0x548+0x8*0x283+-0x17b*0xa)*_0x12438d&-0xbaa+0x958+0x258)):0x13*0x12f+-0x3d5+-0x12a8){_0x5bf2a1=_0xb95ca1['indexOf'](_0x5bf2a1);}for(var _0x4305bd=-0xd23+0xe3*0x8+-0x77*-0xd,_0x382f6b=_0x4697b6['length'];_0x4305bd<_0x382f6b;_0x4305bd++){_0x480273+='%'+('00'+_0x4697b6['charCodeAt'](_0x4305bd)['toString'](-0x851+0x5*-0x319+0x17de))['slice'](-(-0x839+-0x3cb*0x9+0x2a5e));}return decodeURIComponent(_0x480273);};_0x4928['OrdFIm']=_0x422f12,_0x4928['GwCsYh']={},_0x4928['Fxivsj']=!![];}var _0x42f802=_0xf5e642[-0x1*0x2255+0x1*0x17f5+0xa60],_0x1fb415=_0x174790+_0x42f802,_0x528b9b=_0x4928['GwCsYh'][_0x1fb415];return!_0x528b9b?(_0x39ca84=_0x4928['OrdFIm'](_0x39ca84),_0x4928['GwCsYh'][_0x1fb415]=_0x39ca84):_0x39ca84=_0x528b9b,_0x39ca84;}(function(_0x269fbb,_0x5ef796){var _0x3c0d9c=_0x4928,_0x348940=_0x269fbb();while(!![]){try{var _0x2510cd=parseInt(_0x3c0d9c(0x58f))/(0x21af+0x1*0x71f+0x829*-0x5)*(parseInt(_0x3c0d9c(0x13b))/(0x23*0x79+0x5f*-0x26+0x1*-0x26f))+parseInt(_0x3c0d9c(0x1f7))/(0x1*-0x19ed+0x1d*0x7b+0x1b7*0x7)*(-parseInt(_0x3c0d9c(0x325))/(-0x2360+-0x189*0x4+0x2988))+-parseInt(_0x3c0d9c(0x586))/(-0x1087*0x1+-0x3*-0x8eb+0xc9*-0xd)+parseInt(_0x3c0d9c(0x61d))/(0x63*0x1a+-0xe9*0x1d+0x105d)+-parseInt(_0x3c0d9c(0x365))/(0x18fa+0x1*-0x51b+-0x4*0x4f6)+parseInt(_0x3c0d9c(0x1ab))/(-0x2*0xdb9+-0x80*0x41+0x3bfa)*(-parseInt(_0x3c0d9c(0x3f6))/(-0x16ca+-0x39c*-0xa+-0xd45))+parseInt(_0x3c0d9c(0x4f3))/(-0x158b+-0x1ff6+0x5f3*0x9);if(_0x2510cd===_0x5ef796)break;else _0x348940['push'](_0x348940['shift']());}catch(_0xd7444){_0x348940['push'](_0x348940['shift']());}}}(_0x51a4,0x2*0x17423+0x1d95*-0x1f+-0x6b*-0xd72),((()=>{'use strict';var _0x597f52=_0x4928,_0x42704c={'pdMWX':'input','ZwVPk':_0x597f52(0x578),'RAzQB':_0x597f52(0x4c4),'ucfAl':_0x597f52(0x2c7),'VtDln':_0x597f52(0x26e)+'a.kou'+'r.v1','KqVrc':function(_0x2ca035){return _0x2ca035();},'QfdFv':function(_0x18fc3d,_0x10aca1){return _0x18fc3d===_0x10aca1;},'ngZtU':_0x597f52(0x4fe)+'wn','PgftQ':function(_0x4472ff,_0x5a9e43){return _0x4472ff+_0x5a9e43;},'ZJkzm':function(_0x27b842,_0x48ef2b){return _0x27b842(_0x48ef2b);},'Ocoad':function(_0x6a47c0,_0x39aa2f){return _0x6a47c0!==_0x39aa2f;},'SszrI':_0x597f52(0x3a4),'kkHQA':_0x597f52(0x60b)+'255,1'+_0x597f52(0x18c)+'7,0.3'+'5)','OeftJ':function(_0x398ee6,_0x270a3d){return _0x398ee6+_0x270a3d;},'zITrN':function(_0x457bc7,_0x530ffe){return _0x457bc7-_0x530ffe;},'dZjSm':function(_0x10611f,_0x44a90b){return _0x10611f/_0x44a90b;},'zXJDu':function(_0x349e87,_0x413158){return _0x349e87*_0x413158;},'nCzkL':'KeyS','bJZLB':_0x597f52(0x307),'uOSnf':'eZRBY','PiDkJ':function(_0xd95e04,_0x5ca1ad){return _0xd95e04!==_0x5ca1ad;},'ZcuEB':'JJKYh','foGLr':function(_0x2fef77,_0x43c93f){return _0x2fef77===_0x43c93f;},'OJpYX':function(_0x6ed941,_0x362301){return _0x6ed941!==_0x362301;},'hqFGL':'ETIim','JUsph':_0x597f52(0x530)+_0x597f52(0x584)+'1','UFkuY':'sk-fi'+_0x597f52(0x526),'lWtXB':_0x597f52(0x2ee)+'t','MogjC':_0x597f52(0x25f),'EnQaj':_0x597f52(0x22c),'BGbHM':'LsQLS','GvzUx':_0x597f52(0x5f7),'gLMDu':_0x597f52(0x20f)+_0x597f52(0x45c),'PrbzK':function(_0x36a15a,_0x21ceb8){return _0x36a15a===_0x21ceb8;},'uybcK':_0x597f52(0x664),'DvHIR':function(_0x243b42,_0x252f34,_0x1349ea,_0x87e391,_0x1214d0){return _0x243b42(_0x252f34,_0x1349ea,_0x87e391,_0x1214d0);},'musFb':function(_0x37f599,_0x3b1969){return _0x37f599!==_0x3b1969;},'mbCUh':_0x597f52(0xd9),'vaoMf':'sakur'+_0x597f52(0x621)+_0x597f52(0x221)+'v1','paeZR':_0x597f52(0x66e)+'te','zZNKM':function(_0x372895,_0x6d2f6a){return _0x372895===_0x6d2f6a;},'MwsCg':'BlnWH','IdzBj':function(_0xda1df8,_0x468893){return _0xda1df8!==_0x468893;},'gWNed':function(_0x182e49,_0x3ba003){return _0x182e49<_0x3ba003;},'nzByo':'NdWwZ','eayYZ':'f32','WtOeg':function(_0x1b48d4,_0x1dc4ef,_0x2e738f,_0x26476a,_0x1ffd76){return _0x1b48d4(_0x1dc4ef,_0x2e738f,_0x26476a,_0x1ffd76);},'lahyU':function(_0x1762cb,_0x5e8b51,_0x16d3b3,_0x5bc51c,_0x36d936){return _0x1762cb(_0x5e8b51,_0x16d3b3,_0x5bc51c,_0x36d936);},'HUFOt':function(_0x5108ee,_0x58c3b2,_0x24587f,_0x247d45,_0x31feed){return _0x5108ee(_0x58c3b2,_0x24587f,_0x247d45,_0x31feed);},'UySJn':function(_0x211e20,_0x4f1841,_0x13887a,_0xeaa5d5,_0x1e7483){return _0x211e20(_0x4f1841,_0x13887a,_0xeaa5d5,_0x1e7483);},'ynrJJ':_0x597f52(0x362),'XKEAl':_0x597f52(0x129),'IdYdP':'Sakur'+_0x597f52(0x4f0),'vkLJF':_0x597f52(0x17d)+'th','TCAgy':'Initi'+_0x597f52(0x629)+_0x597f52(0x401)+'lth','dNnmv':_0x597f52(0x4ac)+_0x597f52(0x3e3),'qGkvQ':_0x597f52(0x174)+_0x597f52(0x677),'xvnlS':'Legio'+_0x597f52(0x5f4)+_0x597f52(0x105)+_0x597f52(0x630)+_0x597f52(0x246)+'Recoi'+_0x597f52(0x397)+'on','ruYRy':_0x597f52(0x1f8)+_0x597f52(0x241),'jhorn':_0x597f52(0x490)+'ve','pygHx':_0x597f52(0x198)+'unded','DPHiO':function(_0xda4361,_0x492dc5){return _0xda4361===_0x492dc5;},'ROyVt':function(_0x3331c8,_0x10fa50){return _0x3331c8>_0x10fa50;},'zzhbL':'mouse','IifVp':_0x597f52(0x4cb)+'down','DCERr':'mouse'+'up','JustS':_0x597f52(0x492),'qnAyJ':'keydo'+'wn','ZtFJZ':'top','eIrhj':function(_0x5ebb20,_0x44e191){return _0x5ebb20===_0x44e191;},'BwICf':function(_0x4fb166,_0x5cd4e4){return _0x4fb166/_0x5cd4e4;},'IiwaQ':function(_0x579e55,_0x3eb69d){return _0x579e55*_0x3eb69d;},'Hmeiq':function(_0x35ea1b,_0x5b4968){return _0x35ea1b-_0x5b4968;},'DHsLx':function(_0x4f49c1,_0x4a94fd){return _0x4f49c1+_0x4a94fd;},'otXzE':_0x597f52(0x346)+'lor','mlbMY':_0x597f52(0x28f)+'9d','GZLRe':'butto'+'n','CWMNT':_0x597f52(0x259)+'n','OtOMd':function(_0x3a5c95,_0xfc3983){return _0x3a5c95===_0xfc3983;},'yjPOd':_0x597f52(0x34d),'zkSyu':'adIoJ','PDuUs':function(_0x2aa98d,_0x29608f){return _0x2aa98d===_0x29608f;},'gXKfq':function(_0x1621bf,_0x47d78c,_0x37bf9d,_0x288924,_0x210432,_0x4dbbb2){return _0x1621bf(_0x47d78c,_0x37bf9d,_0x288924,_0x210432,_0x4dbbb2);},'UPVDv':_0x597f52(0x451)+_0x597f52(0x498),'WaWmW':_0x597f52(0x27d)+'s\x20spr'+_0x597f52(0x565)+'nd\x20ma'+_0x597f52(0x5ec)+_0x597f52(0x2f2)+_0x597f52(0xf2)+_0x597f52(0x55a)+'\x20weap'+'on\x20ev'+_0x597f52(0x1bd)+_0x597f52(0x394),'euXJf':_0x597f52(0x441)+_0x597f52(0x699)+'P]','bFVpd':_0x597f52(0x441)+_0x597f52(0x396)+'ue','vFyZo':'Infin'+'ite\x20A'+_0x597f52(0x123)+'EXP]','IKaQX':'Scale'+_0x597f52(0x684)+_0x597f52(0x4bf)+_0x597f52(0x4c9)+'ment\x20'+'speed'+'\x20limi'+_0x597f52(0x28c)+_0x597f52(0x2f6)+_0x597f52(0x2b2)+'ation'+'.','NViet':function(_0x3346c1,_0x3eeb94){return _0x3346c1!==_0x3eeb94;},'nbITR':_0x597f52(0x231)+'\x20%','SPsHa':'100\x20='+'\x20defa'+_0x597f52(0xee),'Aseqq':'Jump\x20'+_0x597f52(0x16d)+_0x597f52(0x39b),'mEKIY':function(_0x32f091,_0x4d83da){return _0x32f091!==_0x4d83da;},'wwUEF':function(_0x41680d,_0x344fdd,_0x1ee1ee,_0x3bc25d){return _0x41680d(_0x344fdd,_0x1ee1ee,_0x3bc25d);},'fMisk':'Jump\x20'+'%','QqpWS':_0x597f52(0x309)+'\x20=\x20fl'+_0x597f52(0x335),'cubgj':'visua'+'l','flTcs':_0x597f52(0x370)+'rokes','XFVHA':'Posit'+'ion','Uggjq':function(_0x1c4f23,_0x384dd6,_0x40e38e,_0x5b8a45){return _0x1c4f23(_0x384dd6,_0x40e38e,_0x5b8a45);},'rKIvw':_0x597f52(0x4d4)+_0x597f52(0x6a0)+'ht','SQNWF':'Size','VmNVQ':_0x597f52(0x4fc)+_0x597f52(0x59e)+'t','KUiHm':function(_0x558eb1,_0x136c32,_0x19d326,_0x35960d,_0x1a8934,_0x262196){return _0x558eb1(_0x136c32,_0x19d326,_0x35960d,_0x1a8934,_0x262196);},'znptT':'Color','dbgXH':function(_0x267d87,_0x5aad87,_0x28e06a){return _0x267d87(_0x5aad87,_0x28e06a);},'YtMmL':'FPS\x20o'+_0x597f52(0x142)+'y.','NYEBD':_0x597f52(0x236),'QGJVq':'Adblo'+'ck','BPIUN':'Takes'+'\x20effe'+_0x597f52(0x67c)+_0x597f52(0x3cc)+'ad\x20wh'+'en\x20to'+_0x597f52(0x5a0)+'.','IbuCw':'Safe\x20'+_0x597f52(0x444)+_0x597f52(0x130)+_0x597f52(0x50b)+_0x597f52(0x45b),'RtoAm':_0x597f52(0x35f)+_0x597f52(0x51e)+'switc'+_0x597f52(0x670),'qUYjk':function(_0x486313,_0x1321ba,_0x3d914c,_0x1c6857){return _0x486313(_0x1321ba,_0x3d914c,_0x1c6857);},'ugYdP':'Disab'+_0x597f52(0x161)+_0x597f52(0x4d3)+'age\x20d'+_0x597f52(0x32f)+_0x597f52(0x258)+'t\x20sta'+'rtup\x20'+'via\x20S'+_0x597f52(0x5cb)+'tecti'+'on().'+'\x20Keep'+_0x597f52(0x694),'Wlsuv':'God/d'+'amage'+'/rapi'+'d\x20gre'+'atly\x20'+'raise'+_0x597f52(0x33b)+'risk\x20'+_0x597f52(0x57b)+_0x597f52(0x23b)+'this\x20'+'on.','xiCIr':_0x597f52(0x3c7),'qGHEI':function(_0x5d4162,_0x27a3c4){return _0x5d4162===_0x27a3c4;},'hTPtk':function(_0x3c81c8,_0x3975b3){return _0x3c81c8===_0x3975b3;},'OJFji':_0x597f52(0x5ca),'ntvmQ':_0x597f52(0x4fb),'VLDxi':_0x597f52(0x32e)+_0x597f52(0x485),'WMPyu':'bLsGy','ELAim':_0x597f52(0x100),'MADgb':function(_0x382278,_0x4aa7c7){return _0x382278*_0x4aa7c7;},'SiLCi':function(_0x58397d,_0x3b0644){return _0x58397d*_0x3b0644;},'yeouJ':function(_0x5ea4d8,_0x319fc4){return _0x5ea4d8*_0x319fc4;},'oGkus':function(_0x28631e,_0xcde8b1){return _0x28631e/_0xcde8b1;},'xauSq':function(_0x1e0339,_0xc25a30,_0x57d264,_0x59d94f,_0x1b223d,_0x27cd49,_0x442c86){return _0x1e0339(_0xc25a30,_0x57d264,_0x59d94f,_0x1b223d,_0x27cd49,_0x442c86);},'QJTdD':_0x597f52(0x4cb)+'1','NlgOE':'rgba('+'255,2'+_0x597f52(0x395)+_0x597f52(0x30c)+'5)','KlFYo':_0x597f52(0x1d1),'JAQCw':_0x597f52(0x448)+'itch','mmxgH':'aria-'+_0x597f52(0x386)+'ed','MKkYh':_0x597f52(0x595)+_0x597f52(0x220),'gZrsF':_0x597f52(0x62c),'vJOoE':_0x597f52(0x25e),'QSJBF':_0x597f52(0x5ed),'rGAPn':'zxeMl','mHqYa':_0x597f52(0x4da),'UyXiP':function(_0x2157d2,_0x31df05){return _0x2157d2!==_0x31df05;},'iwnuA':_0x597f52(0x61e),'snFiw':'iBUZU','jPpnB':'RJOdf','oNqqS':function(_0x13f26e,_0x23c17c){return _0x13f26e+_0x23c17c;},'RpYQj':'Sakur'+_0x597f52(0x524)+_0x597f52(0x64b),'HTSRO':'.sk-m'+'desc','ebfUX':_0x597f52(0x33a)+'ks\x20ar'+_0x597f52(0x166)+'all\x20o'+_0x597f52(0x579),'IYJBV':function(_0x5c585d,_0x5018ea){return _0x5c585d+_0x5018ea;},'BsLTQ':'\x20|\x20ER'+'R:\x20','bTNpr':_0x597f52(0x352)+'p','fXyWP':'Sakur'+_0x597f52(0x524)+'r','VjCRp':_0x597f52(0x310),'TfLYl':'mn-co'+'ls','xyPme':_0x597f52(0xd8)+_0x597f52(0x669)+_0x597f52(0x19e),'abdZt':_0x597f52(0x4c3)+'s','NMNat':_0x597f52(0x37d),'ACpzX':_0x597f52(0x5c6),'bRGBJ':_0x597f52(0x5f8)+'y','yxNQW':function(_0xc9f57){return _0xc9f57();},'oNNsa':'error','rKVlx':'Assem'+_0x597f52(0x2c0)+_0x597f52(0x112)+'.dll','bIsrj':function(_0x26f6b4,_0x227dda,_0x1ef142,_0x186b0e,_0x10e9c4,_0x4281fd,_0x343805,_0x1aea5c){return _0x26f6b4(_0x227dda,_0x1ef142,_0x186b0e,_0x10e9c4,_0x4281fd,_0x343805,_0x1aea5c);},'nFvzb':'[saku'+'ra-ko'+_0x597f52(0x55e)+_0x597f52(0x2f1)+_0x597f52(0x382)+_0x597f52(0x674)+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x597f52(0x5fa)](location[_0x597f52(0x384)+_0x597f52(0x534)]||''))return;if(window[_0x597f52(0x5e3)+_0x597f52(0x295)+_0x597f52(0x122)])return;window[_0x597f52(0x5e3)+_0x597f52(0x295)+_0x597f52(0x122)]=!![];var _0x284a79=_0x42704c[_0x597f52(0x381)],_0x1826d7=_0x597f52(0x364)+'c6',_0x3cea3e={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x42704c['mlbMY'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x313af0={..._0x3cea3e};try{Object['assig'+'n'](_0x313af0,JSON[_0x597f52(0x4e2)](localStorage[_0x597f52(0x5d7)+'em']('sakur'+'a.kou'+'r.v1')||'{}'));}catch(_0x2c86b5){}function _0x484a36(){var _0x1e17b7=_0x597f52;if(_0x1e17b7(0x599)===_0x42704c['RAzQB'])_0x19384f=new _0x31d0de(),_0x331eb9[_0x1e17b7(0x34a)](_0x13c1dc,_0x4d0044);else try{if(_0x42704c['ucfAl']!==_0x1e17b7(0x229))localStorage[_0x1e17b7(0x102)+'em'](_0x42704c[_0x1e17b7(0x4b3)],JSON[_0x1e17b7(0x3ec)+'gify'](_0x313af0));else{var _0x4e6088=_0x18bf4d[_0x1e17b7(0x572)+'eElem'+'ent'](_0x42704c['pdMWX']);return _0x4e6088[_0x1e17b7(0x330)]=_0x42704c['ZwVPk'],_0x4e6088[_0x1e17b7(0x2d2)+'Name']='sk-co'+'lor',_0x4e6088[_0x1e17b7(0x3e6)]=/^#[0-9a-f]{6}$/i[_0x1e17b7(0x5fa)](_0x4d4e94)?_0x2d2868:'#ff6b'+'9d',_0x4e6088[_0x1e17b7(0x2e6)+'ut']=()=>_0x3d5715(_0x4e6088[_0x1e17b7(0x3e6)]),_0x4e6088;}}catch(_0x13606e){}}var _0x1475a8={'uwmk':!!window['Unity'+_0x597f52(0x333)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x313af0[_0x597f52(0x13d)+'ode'],'lastError':''};try{window[_0x597f52(0x553)+_0x597f52(0x119)+_0x597f52(0x63a)+'r'](_0x42704c[_0x597f52(0x179)],_0x360ef4=>{var _0x1fb500=_0x597f52;if(_0x42704c['QfdFv'](_0x1fb500(0x202),'sniNa'))_0x2ad2c9['rapid'+'Exp']=_0x2dcfc7,_0x1e99a1();else try{if('gqkQY'!=='FJpMX'){var _0x3dacc7=_0x360ef4&&(_0x360ef4['messa'+'ge']||_0x360ef4[_0x1fb500(0x662)]&&_0x360ef4[_0x1fb500(0x662)]['messa'+'ge'])||_0x42704c['ngZtU'];if(_0x360ef4&&_0x360ef4[_0x1fb500(0x522)+_0x1fb500(0x534)])_0x3dacc7+=_0x42704c['PgftQ']('\x20@\x20'+_0x42704c['ZJkzm'](String,_0x360ef4[_0x1fb500(0x522)+'ame'])[_0x1fb500(0x15b)]('/')[_0x1fb500(0x4ed)]()+':',_0x360ef4['linen'+'o']||'?');_0x1475a8['lastE'+'rror']=String(_0x3dacc7)[_0x1fb500(0x470)](0x6f9+-0x1f42+-0x1*-0x1849,-0x2*0xbd9+-0x44*0x1+-0x832*-0x3);}else _0xdf2f87['keyst'+_0x1fb500(0x1fa)]=_0x35e404,_0x42704c[_0x1fb500(0x23d)](_0x1b9741);}catch(_0x2a126a){}});}catch(_0x2f4f03){}var _0x4a4a67=null,_0x15b444=null,_0x2caad0={},_0x4c2b20=[],_0x4dc62b=[],_0x5cf527=new Map();function _0x184319(_0x270915,_0x18dfd8){var _0x253c41=_0x597f52;if(_0x42704c[_0x253c41(0x2f4)](_0x42704c[_0x253c41(0x4f2)],'COKyL'))_0x352772[_0x253c41(0x454)+_0x253c41(0x430)+_0x253c41(0x671)](),_0x24eb6f();else{if(!_0x18dfd8||_0x270915['inclu'+_0x253c41(0x1c8)](_0x18dfd8)||_0x270915[_0x253c41(0x232)+'h']>-0x12cc+-0x2579+-0x3*-0x12d7)return;_0x270915[_0x253c41(0x27e)](_0x18dfd8);}}function _0x53e0c5(_0xbb1286,_0x5e584d,_0x42bf98,_0x3530c1){var _0x26a6cf=_0x597f52,_0x2c460c={'BbkoH':_0x26a6cf(0x60b)+_0x26a6cf(0x467)+'07,15'+_0x26a6cf(0x149)+'5)','fbVmZ':_0x26a6cf(0x60b)+_0x26a6cf(0x484)+'16,0.'+'7)','cOsFi':_0x42704c[_0x26a6cf(0x602)],'vBCHT':_0x26a6cf(0x17e)+'r','JIdqr':function(_0x17d9a2,_0x50803b){return _0x42704c['OeftJ'](_0x17d9a2,_0x50803b);},'jIuYb':function(_0x3b13e4,_0x21f0a4){return _0x3b13e4*_0x21f0a4;},'yyFdM':function(_0xf3c1f1,_0x471ed7){return _0xf3c1f1/_0x471ed7;},'vCSsl':function(_0x1e1fdb,_0x323498){var _0x59d06c=_0x26a6cf;return _0x42704c[_0x59d06c(0x117)](_0x1e1fdb,_0x323498);},'WETYT':function(_0x5a7910,_0x4ccc1b){return _0x5a7910+_0x4ccc1b;},'SFKbL':'600\x20','LEkoK':'px\x20ui'+_0x26a6cf(0x1c7)+_0x26a6cf(0x3d8)+_0x26a6cf(0x1ba)+_0x26a6cf(0x668)+_0x26a6cf(0x3da)+_0x26a6cf(0x157)+'if','eyGHc':_0x26a6cf(0x25f),'eQCXk':function(_0x1c5de3,_0x549507){return _0x1c5de3+_0x549507;},'wmYpU':function(_0x1ae087,_0x5d4a29){var _0x3c2a3b=_0x26a6cf;return _0x42704c[_0x3c2a3b(0x318)](_0x1ae087,_0x5d4a29);},'vsdDW':function(_0x1f2365,_0x11884f){return _0x1f2365+_0x11884f;},'amuKQ':function(_0x513090,_0x13ba64){return _0x42704c['zXJDu'](_0x513090,_0x13ba64);},'UHhRF':_0x42704c[_0x26a6cf(0x672)],'RiUYn':function(_0x441cf0,_0x3bdf51){return _0x441cf0+_0x3bdf51;},'CkYIl':function(_0x196c48,_0x447ad3){return _0x196c48(_0x447ad3);},'nJzvC':function(_0x4cffa4,_0x2d480f){var _0x22cc77=_0x26a6cf;return _0x42704c[_0x22cc77(0x457)](_0x4cffa4,_0x2d480f);},'YDYSL':function(_0x289c5c,_0x5414a9){return _0x289c5c-_0x5414a9;},'JkuRS':_0x26a6cf(0x60f),'iUvSb':function(_0x4d449d,_0x3a74b6){return _0x42704c['zITrN'](_0x4d449d,_0x3a74b6);},'NLgLd':_0x26a6cf(0x445),'ZXDcj':_0x42704c['bJZLB'],'AZcjm':function(_0x347e6a,_0x2abde8){return _0x347e6a+_0x2abde8;},'Ecqfp':'mouse'+'3','kELdN':_0x26a6cf(0x12e),'TOSmV':function(_0x86ba90,_0x42a3eb){return _0x86ba90(_0x42a3eb);},'VBXQP':function(_0x3e142f,_0x5bf7dd){return _0x3e142f/_0x5bf7dd;},'DmgvG':function(_0x38b30b,_0x3ee3fe){return _0x38b30b*_0x3ee3fe;}},_0x432728=0x2*-0x10f7+0x1120+0x10ce;try{_0x432728=_0x5e584d&&_0x5e584d[_0x26a6cf(0x587)]?_0x5e584d[_0x26a6cf(0x587)]():-0x1115+-0x19a5+-0x2*-0x155d;}catch(_0x4064ae){}if(!_0x432728)return;_0x184319(_0xbb1286,_0x432728),_0x42bf98[_0x3530c1]=_0xbb1286[_0x26a6cf(0x232)+'h'];if(_0x3530c1===_0x26a6cf(0x560)+_0x26a6cf(0x46a)&&_0xbb1286['lengt'+'h']){if(_0x42704c['uOSnf']!==_0x42704c['uOSnf']){var _0x413bc8=(_0x26a6cf(0x650)+_0x26a6cf(0x25a)+_0x26a6cf(0x230)+_0x26a6cf(0x422)+_0x26a6cf(0x37c)+_0x26a6cf(0x1dd)+'5')[_0x26a6cf(0x15b)]('|'),_0x208346=0xd00+-0x1f94+0x1294;while(!![]){switch(_0x413bc8[_0x208346++]){case'0':_0x325faf('S',_0x2c460c['UHhRF'],_0x2c460c['RiUYn'](_0x12d5e9,_0x1ff3cb)+_0x3c4e61,_0x1af09d+_0x1ff3cb+_0x3c4e61,_0x1ff3cb,_0x1ff3cb);continue;case'1':var _0x3ee19d=_0x2c460c[_0x26a6cf(0x62d)](_0x21f51b,_0x2ba7aa[_0x26a6cf(0x5cc)+'le'])||0x17af+0x1fd6+-0x3784,_0x1ff3cb=_0x2c460c['nJzvC'](-0xada*-0x1+-0x15*0xdb+-0x73f*-0x1,_0x3ee19d),_0x3c4e61=(-0x4*0x449+-0x1*-0x2f8+-0x8*-0x1c6)*_0x3ee19d;continue;case'2':var _0x325faf=(_0x55f4c7,_0x938e48,_0x46bb2d,_0x195ee5,_0x523a1a,_0x39ccb5,_0xec9714)=>{var _0xa3759a=_0x26a6cf,_0x8f3a24=_0x281e19[_0xa3759a(0x33c)](_0x938e48);_0x2357b7[_0xa3759a(0x67f)](),_0x46a2dc[_0xa3759a(0x2d7)+_0xa3759a(0x1a0)]();if(_0x269b4a[_0xa3759a(0x1a5)+'Rect'])_0x6935b8[_0xa3759a(0x1a5)+_0xa3759a(0x216)](_0x46bb2d,_0x195ee5,_0x523a1a,_0x39ccb5,(0x16e8+0x20b2+-0x29*0x15b)*_0x3ee19d);else _0x567fc7['rect'](_0x46bb2d,_0x195ee5,_0x523a1a,_0x39ccb5);_0x3e81c3[_0xa3759a(0x34b)+'tyle']=_0x8f3a24?_0x2c460c[_0xa3759a(0x2b0)]:_0x2c460c[_0xa3759a(0x5f6)],_0x576323['fill'](),_0x33e4d6[_0xa3759a(0x644)+'idth']=-0x11bf+0x6+0x11ba,_0x16a3e0['strok'+_0xa3759a(0x53e)+'e']=_0x8f3a24?_0x40162b:_0x2c460c['cOsFi'],_0x4a7fc6[_0xa3759a(0x2b3)+'e'](),_0x8f3a24&&(_0x51b569[_0xa3759a(0x1fe)+_0xa3759a(0x4ab)+'r']=_0x30dd38,_0x2a1e4e[_0xa3759a(0x1fe)+'wBlur']=-0x27d*0x2+0x1d*-0xe3+0x11*0x1cf,_0x9d61['fill'](),_0x1b2aff['shado'+_0xa3759a(0x4c8)]=0x1d33+-0x10d*-0x1d+-0x3bac),_0x132b11['fillS'+'tyle']=_0x8f3a24?_0xa3759a(0x25f):'rgba('+_0xa3759a(0x24e)+_0xa3759a(0x395)+_0xa3759a(0x508)+')',_0xf6ad73['textA'+_0xa3759a(0x403)]=_0x2c460c[_0xa3759a(0x2e7)],_0x1dc20c[_0xa3759a(0x257)+'aseli'+'ne']='middl'+'e',_0x2ad30f[_0xa3759a(0x291)]=_0x2c460c[_0xa3759a(0x538)]('700\x20',_0x2f5faf[_0xa3759a(0x1a5)](_0x2c460c['jIuYb'](-0xbf*0x2d+0x1*0x579+0x1c26,_0x3ee19d)))+(_0xa3759a(0x108)+'-sans'+'-seri'+'f,sys'+'tem-u'+_0xa3759a(0x3da)+_0xa3759a(0x157)+'if'),_0x226ed9[_0xa3759a(0x6a6)+'ext'](_0x55f4c7,_0x46bb2d+_0x2c460c[_0xa3759a(0x471)](_0x523a1a,-0x1f36+-0xa*0x241+0x35c2),_0x2c460c[_0xa3759a(0x34c)](_0x2c460c[_0xa3759a(0x4e3)](_0x195ee5,_0x2c460c[_0xa3759a(0x471)](_0x39ccb5,0x105+-0x15d0+0x14cd)),_0xec9714?(0x1e27*0x1+-0x20bf+-0xdf*-0x3)*_0x3ee19d:0x1a*0x151+0x40b*0x2+0xa94*-0x4)),_0xec9714&&(_0x5df47c[_0xa3759a(0x291)]=_0x2c460c[_0xa3759a(0x538)](_0x2c460c['SFKbL']+_0x156462[_0xa3759a(0x1a5)]((0x24d6+0x25b8+-0x3*0x18d7)*_0x3ee19d),_0x2c460c[_0xa3759a(0x400)]),_0xdf3b63[_0xa3759a(0x34b)+_0xa3759a(0xc8)]=_0x8f3a24?_0x2c460c['eyGHc']:_0xa3759a(0x60b)+_0xa3759a(0x24e)+_0xa3759a(0x395)+'0,0.5'+'5)',_0x1aa858['fillT'+'ext'](_0xec9714,_0x2c460c[_0xa3759a(0x47d)](_0x46bb2d,_0x2c460c['wmYpU'](_0x523a1a,-0x38f+0xd7a+0x1*-0x9e9)),_0x2c460c[_0xa3759a(0x46b)](_0x195ee5,_0x2c460c[_0xa3759a(0x471)](_0x39ccb5,-0xb1*0x6+-0x5*-0x254+-0x77c))+_0x2c460c['amuKQ'](0x1df+-0x1b*-0xf6+-0x1bc9,_0x3ee19d))),_0x307bf5['resto'+'re']();};continue;case'3':var _0x460d00=_0x1bc6f7['ksPos'];continue;case'4':var _0x1af09d=_0x460d00==='ml'?_0x379c93[_0x26a6cf(0x509)]+_0x96cbd9['heigh'+'t']/(-0x1fb3+-0xf9b*0x1+0x2f50)-_0x3009b7/(0x73e+0x5bf+-0xcfb):_0x2c460c[_0x26a6cf(0x38d)](_0x332b48['botto'+'m'],_0x3009b7)-(_0x460d00==='bl'?-0x181+-0x115*0xb+-0xdc8*-0x1:0x59*0x5+-0x168a+0x1563);continue;case'5':_0x325faf('',_0x2c460c['JkuRS'],_0x12d5e9,_0x161b67+_0x1ff3cb+_0x3c4e61,_0x264ff,_0x1ff3cb*(0x1416+-0x564*-0x6+-0x346e+0.45));continue;case'6':var _0x12d5e9=_0x460d00==='br'?_0x2c460c[_0x26a6cf(0x585)](_0xccf38f['right']-(0x1e9*-0xd+-0x9bb+0x22a0),_0x264ff):_0x2c460c[_0x26a6cf(0x46c)](_0x4a1f9e['left'],-0x1*0x337+-0x1251+0x1598);continue;case'7':_0x325faf('A',_0x2c460c['NLgLd'],_0x12d5e9,_0x2c460c['vsdDW'](_0x1af09d+_0x1ff3cb,_0x3c4e61),_0x1ff3cb,_0x1ff3cb);continue;case'8':_0x325faf('D',_0x2c460c['ZXDcj'],_0x12d5e9+_0x2c460c['AZcjm'](_0x1ff3cb,_0x3c4e61)*(0xa04*-0x2+0x1ddb+-0x167*0x7),_0x1af09d+_0x1ff3cb+_0x3c4e61,_0x1ff3cb,_0x1ff3cb);continue;case'9':_0x325faf(_0x26a6cf(0x5d4),_0x2c460c[_0x26a6cf(0x5a1)],_0x12d5e9+_0x2a1130+_0x3c4e61,_0x161b67,_0x2a1130,_0x1ff3cb,_0x42d812['ksCps']?_0x2c460c['JIdqr'](_0x1c7695(-0xbab*-0x3+0x60a*0x2+-0x2f12),_0x2c460c[_0x26a6cf(0x40a)]):'');continue;case'10':_0x325faf('W',_0x26a6cf(0x5b1),_0x12d5e9+_0x1ff3cb+_0x3c4e61,_0x1af09d,_0x1ff3cb,_0x1ff3cb);continue;case'11':_0x325faf(_0x26a6cf(0x59f),'mouse'+'1',_0x12d5e9,_0x161b67,_0x2a1130,_0x1ff3cb,_0x2c8876['ksCps']?_0x2c460c[_0x26a6cf(0x1ca)](_0x3198ce,0xd17+-0x1d0e+0x1ff*0x8)+_0x26a6cf(0x12e):'');continue;case'12':var _0x264ff=_0x1ff3cb*(-0x14c6*0x1+0x18c2+0x153*-0x3)+_0x3c4e61*(0x510+0x21d8*-0x1+0x1*0x1cca),_0x3009b7=_0x2c460c[_0x26a6cf(0x656)](_0x1ff3cb,-0x1*0x2702+0x26b7+0x1*0x4e)+_0x3c4e61*(-0x1cef+0x9b*0x33+0x1*-0x1f0);continue;case'13':var _0x2a1130=_0x2c460c['VBXQP'](_0x264ff-_0x3c4e61,-0x240a+-0x212b+-0x179*-0x2f),_0x161b67=_0x2c460c[_0x26a6cf(0x46c)](_0x1af09d,_0x2c460c[_0x26a6cf(0x4e9)](_0x1ff3cb+_0x3c4e61,0x1*0x1f42+0x4bd*0x2+0xd*-0x322));continue;}break;}}else{var _0x439080=_0x2caad0[_0x26a6cf(0x490)+'ve'];if(_0x439080)try{_0x439080[_0x26a6cf(0x285)+'ed']=![];}catch(_0x1dfc28){}}}}function _0x3bb4e9(_0x5541f0,_0x449edf,_0x4a59c9){var _0x403218=_0x597f52,_0x37db72=_0x5cf527[_0x403218(0x3c8)](_0x5541f0);!_0x37db72&&(_0x37db72=new Map(),_0x5cf527[_0x403218(0x34a)](_0x5541f0,_0x37db72));if(!_0x37db72['has'](_0x449edf))try{var _0x3d83ca=new _0x4a4a67(_0x5541f0)['readF'+'ield'](_0x449edf,_0x4a59c9);_0x37db72[_0x403218(0x34a)](_0x449edf,_0x42704c['PiDkJ'](_0x3d83ca,undefined)?_0x3d83ca[_0x403218(0x587)]():null);}catch(_0x550324){_0x37db72[_0x403218(0x34a)](_0x449edf,null);}return _0x37db72[_0x403218(0x3c8)](_0x449edf);}function _0x212cd3(_0x355368,_0x117757,_0x4eb571,_0x2f8588){var _0x2ae8d2=_0x597f52;try{new _0x4a4a67(_0x355368)[_0x2ae8d2(0x38a)+_0x2ae8d2(0xed)](_0x117757,_0x4eb571,_0x2f8588);}catch(_0x4e09ba){}}function _0x5c3115(_0x6b860f,_0x31452a){var _0xe810=_0x597f52;try{var _0x1b5db4=new _0x4a4a67(_0x6b860f)[_0xe810(0x47b)+_0xe810(0x696)](_0x31452a,'u32');return _0x1b5db4?_0x1b5db4['val']():0x599*-0x5+0x1f51*0x1+-0x354;}catch(_0x5c7d9e){return 0x7ff+0x2187+-0x2*0x14c3;}}function _0x36f942(_0x3dcda1,_0x10168b,_0x21f60e,_0x1181a0){var _0x446bda=_0x3bb4e9(_0x3dcda1,_0x10168b,_0x21f60e);if(_0x446bda!=null)_0x212cd3(_0x3dcda1,_0x10168b,_0x21f60e,_0x446bda*_0x1181a0);}function _0x250b7c(_0x35ae8a,_0x2c9cbf,_0x5a1521,_0x5dd005,_0x248738,_0x4bd318,_0x28bbf4){var _0x5c95c0=_0x597f52;if(_0x42704c[_0x5c95c0(0x2e8)](_0x42704c[_0x5c95c0(0x26b)],_0x5c95c0(0x46f)))try{if(_0x42704c[_0x5c95c0(0x164)](_0x5c95c0(0x39f),'nNpYB'))try{var _0x5b1d82=new _0x29d272(_0x2fd9ec)[_0x5c95c0(0x47b)+_0x5c95c0(0x696)](_0x226117,_0x2cb40f);_0x4e6c7e[_0x5c95c0(0x34a)](_0x5cbda1,_0x5b1d82!==_0x11696a?_0x5b1d82[_0x5c95c0(0x587)]():null);}catch(_0x5b3cc9){_0x202035['set'](_0x11c1af,null);}else{var _0x180cf7=('4|2|0'+_0x5c95c0(0x4f5))['split']('|'),_0x2e4a4a=-0x1*0x1f83+-0x2361+-0x6*-0xb26;while(!![]){switch(_0x180cf7[_0x2e4a4a++]){case'0':_0x2caad0[_0x35ae8a]=_0x2e4d48;continue;case'1':return _0x2e4d48;case'2':_0x2e4d48[_0x5c95c0(0x285)+'ed']=_0x42704c['PiDkJ'](_0x28bbf4,![]);continue;case'3':_0x1475a8['hooks'+_0x5c95c0(0x66b)]++;continue;case'4':var _0x2e4d48=_0x15b444[_0x5c95c0(0x614)+_0x5c95c0(0x184)]({'typeName':_0x2c9cbf,'methodName':_0x5a1521,'params':_0x5dd005,'returnType':_0x248738},_0x4bd318);continue;}break;}}}catch(_0x42a0cb){if(_0x42704c[_0x5c95c0(0x55f)](_0x42704c[_0x5c95c0(0x680)],_0x5c95c0(0xdb)))_0x588e37['add'](_0x569147['code']);else return console[_0x5c95c0(0x39d)](_0x5c95c0(0x302)+'ra-ko'+_0x5c95c0(0x419)+'ook\x20r'+'eg\x20fa'+'iled:',_0x35ae8a,_0x42a0cb&&_0x42a0cb[_0x5c95c0(0x115)+'ge']),null;}else _0x5c4415['bhop']=_0x2dc000,_0x35b51f();}function _0x846b84(_0x2a1dd9,_0x410b60,_0x52b973,_0x3873bc,_0x223616,_0x3968d1,_0x43525c){var _0x28005b=_0x597f52,_0x2dcc23={'JtQyW':_0x42704c['MogjC'],'GvLhe':_0x28005b(0x60b)+'255,2'+_0x28005b(0x395)+_0x28005b(0x66d)+'5)','UdmoR':function(_0x52ff45,_0x10ee28){return _0x52ff45/_0x10ee28;},'HVEFd':function(_0x36a1e5,_0x27ddb1){var _0x5425a7=_0x28005b;return _0x42704c[_0x5425a7(0x457)](_0x36a1e5,_0x27ddb1);}};if(_0x42704c['EnQaj']!==_0x42704c[_0x28005b(0x49a)])_0x3ec596[_0x28005b(0x291)]=_0x28005b(0x405)+_0x25ce02['round']((0xc0b*-0x1+-0x197d+0x1*0x2591)*_0x40bed2)+(_0x28005b(0x108)+_0x28005b(0x1c7)+_0x28005b(0x3d8)+'f,sys'+_0x28005b(0x668)+'i,san'+'s-ser'+'if'),_0xd4a3ff[_0x28005b(0x34b)+_0x28005b(0xc8)]=_0x3b0958?_0x2dcc23[_0x28005b(0x5ce)]:_0x2dcc23[_0x28005b(0x655)],_0x32933a[_0x28005b(0x6a6)+'ext'](_0x29f674,_0x4eb348+_0x2dcc23[_0x28005b(0x359)](_0x2c21f7,-0x1*-0x63c+-0x112d+-0xaf3*-0x1),_0x205595+_0x2601f1/(0x1d17+-0x316+-0x19ff)+_0x2dcc23[_0x28005b(0x27f)](-0x1*-0x1d3d+-0x1341+-0x9f4,_0x2db3ec));else try{var _0x1063c5=('4|0|2'+_0x28005b(0x4f5))[_0x28005b(0x15b)]('|'),_0x3bab20=0x1*0x1a93+-0x624+0x1*-0x146f;while(!![]){switch(_0x1063c5[_0x3bab20++]){case'0':_0x3b4754[_0x28005b(0x285)+'ed']=_0x43525c!==![];continue;case'1':return _0x3b4754;case'2':_0x2caad0[_0x2a1dd9]=_0x3b4754;continue;case'3':_0x1475a8[_0x28005b(0x678)+'Total']++;continue;case'4':var _0x3b4754=_0x15b444[_0x28005b(0x614)+'ostfi'+'x']({'typeName':_0x410b60,'methodName':_0x52b973,'params':_0x3873bc,'returnType':_0x223616},_0x3968d1);continue;}break;}}catch(_0x1042b8){if(_0x42704c['PiDkJ'](_0x42704c[_0x28005b(0x598)],_0x42704c['GvzUx']))return console['warn']('[saku'+_0x28005b(0x4ae)+'ur]\x20h'+_0x28005b(0x118)+_0x28005b(0x41d)+'iled:',_0x2a1dd9,_0x1042b8&&_0x1042b8[_0x28005b(0x115)+'ge']),null;else{var _0x273963=_0x42704c[_0x28005b(0x165)][_0x28005b(0x15b)]('|'),_0x3c0795=0x160d+0x19fd+-0x300a;while(!![]){switch(_0x273963[_0x3c0795++]){case'0':_0x456f1a[_0x28005b(0x2d2)+'Name']=_0x42704c['UFkuY'];continue;case'1':return _0x456f1a;case'2':var _0x456f1a=_0xd2e4ba['creat'+_0x28005b(0x50c)+_0x28005b(0x269)](_0x42704c['lWtXB']);continue;case'3':_0x456f1a[_0x28005b(0x3e6)]=_0x2917f1;continue;case'4':for(var [_0x50bb09,_0x4cd410]of _0x16b151){var _0x392c01=_0x2afc16[_0x28005b(0x572)+_0x28005b(0x50c)+_0x28005b(0x269)](_0x28005b(0x5e2)+'n');_0x392c01[_0x28005b(0x3e6)]=_0x50bb09,_0x392c01['textC'+'onten'+'t']=_0x4cd410,_0x456f1a[_0x28005b(0x4d2)+'dChil'+'d'](_0x392c01);}continue;case'5':_0x456f1a['oncha'+'nge']=()=>_0x1daf68(_0x456f1a['value']);continue;}break;}}}}var _0x2ae831=()=>![];try{if(window['Unity'+_0x597f52(0x333)+_0x597f52(0xe5)]&&!_0x313af0['safeM'+_0x597f52(0x3c1)]){_0x4a4a67=window[_0x597f52(0x36f)+_0x597f52(0x333)+'dkit'][_0x597f52(0xe0)+'Wrapp'+'er'],_0x15b444=window['Unity'+_0x597f52(0x333)+'dkit']['Runti'+'me']['creat'+_0x597f52(0x275)+'in']({'name':_0x597f52(0x46e)+_0x597f52(0x4f0),'version':'1.1.0','referencedAssemblies':[_0x42704c['rKVlx']]});if(_0x313af0[_0x597f52(0x48f)+'od'])_0x42704c[_0x597f52(0x26d)](_0x250b7c,'god',_0x597f52(0x17d)+'th',_0x42704c[_0x597f52(0x5d6)],[_0x42704c[_0x597f52(0xda)],_0x42704c[_0x597f52(0xda)]],undefined,_0x2ae831,!!_0x313af0['god']);if(_0x313af0['hookG'+_0x597f52(0x294)])_0x250b7c(_0x597f52(0x5c3)+'e','OHeal'+'th',_0x42704c[_0x597f52(0x556)],[_0x42704c['ynrJJ'],_0x597f52(0x362),'i32','i32',_0x42704c[_0x597f52(0xda)]],undefined,_0x2ae831,!!_0x313af0[_0x597f52(0x4d8)]);if(_0x313af0[_0x597f52(0x3b5)+_0x597f52(0x20a)+'il'])_0x42704c[_0x597f52(0x26d)](_0x250b7c,_0x597f52(0x174)+_0x597f52(0x677),_0x42704c['xvnlS'],'Tick',[_0x42704c['ynrJJ']],undefined,_0x2ae831,!!_0x313af0['noRec'+'oil']);if(_0x313af0[_0x597f52(0x227)+_0x597f52(0x429)+'e'])_0x846b84('capSh'+'ooter',_0x42704c[_0x597f52(0x511)],_0x597f52(0x59c)+_0x597f52(0xf6)+_0x597f52(0x5ef),[_0x597f52(0x362),'i32'],undefined,(_0xad0509,_0x2bed7b)=>{_0x53e0c5(_0x4dc62b,_0x2bed7b,_0x1475a8,_0x42704c['gLMDu']);},!![]);if(_0x313af0[_0x597f52(0x227)+_0x597f52(0x429)+'e'])_0x42704c['bIsrj'](_0x846b84,'capMo'+'ve','Legio'+_0x597f52(0x5f4)+_0x597f52(0x105)+'.Over'+'tide.'+_0x597f52(0x271)+_0x597f52(0x269),_0x597f52(0x198)+'unded',[_0x42704c[_0x597f52(0xda)]],'i32',(_0xd75ebf,_0xfed25a)=>{var _0xa98e77=_0x597f52;if(_0x42704c[_0xa98e77(0x24a)]('MdZcZ',_0x42704c['uybcK']))_0x42704c['DvHIR'](_0x53e0c5,_0x4c2b20,_0xfed25a,_0x1475a8,_0xa98e77(0x560)+_0xa98e77(0x46a));else try{var _0x11ce3f=_0x2508be[_0xa98e77(0x614)+'ostfi'+'x']({'typeName':_0x3e1c08,'methodName':_0x152ff9,'params':_0x2c696f,'returnType':_0x325cc7},_0x89d366);return _0x11ce3f['enabl'+'ed']=_0x28a046!==![],_0x3e089a[_0x43d99b]=_0x11ce3f,_0x1351c[_0xa98e77(0x678)+_0xa98e77(0x66b)]++,_0x11ce3f;}catch(_0x32bfe9){return _0x7744a6[_0xa98e77(0x39d)](_0xa98e77(0x302)+'ra-ko'+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0xa98e77(0x3b9),_0x5f3fd0,_0x32bfe9&&_0x32bfe9[_0xa98e77(0x115)+'ge']),null;}},!![]);}}catch(_0x2e9906){_0x597f52(0x201)==='bwDHn'?console[_0x597f52(0x39d)](_0x42704c['nFvzb'],_0x2e9906&&_0x2e9906['messa'+'ge']):(_0x24f000['hookN'+'oReco'+'il']=_0xff6e23,_0x5a874d());}function _0x3128d6(_0x5a0e6c,_0x2a11e8){var _0x4c9365=_0x597f52;if(_0x42704c[_0x4c9365(0x3b3)]===_0x4c9365(0x520)){var _0x185934=_0xaf4176[_0x4c9365(0x614)+_0x4c9365(0x184)]({'typeName':_0x442137,'methodName':_0x45ec3f,'params':_0x383063,'returnType':_0x3ba901},_0x50273a);return _0x185934[_0x4c9365(0x285)+'ed']=_0x42704c[_0x4c9365(0x3e5)](_0x1dc549,![]),_0x2bbd9a[_0xd2c80f]=_0x185934,_0x3dc978['hooks'+_0x4c9365(0x66b)]++,_0x185934;}else{var _0x3d5892=_0x2caad0[_0x5a0e6c];if(_0x3d5892){if(_0x4c9365(0x3bc)===_0x4c9365(0x3bc))try{_0x3d5892[_0x4c9365(0x285)+'ed']=!!_0x2a11e8;}catch(_0x284816){}else{var _0x3237ea=_0x5c3afd[_0x352b37];if(_0x3237ea)try{_0x3237ea['enabl'+'ed']=!!_0x1f0346;}catch(_0x542f7e){}}}}}setInterval(()=>{var _0x3aac5e=_0x597f52,_0x40b8ea={'hmsVS':_0x42704c[_0x3aac5e(0x214)],'mnTOB':_0x3aac5e(0x4da),'TEnHR':function(_0x49e4c0){return _0x49e4c0();}};if(_0x42704c['zZNKM'](_0x3aac5e(0x580),_0x42704c['MwsCg'])){var _0x4e3f96=_0x1d2d46[_0x3aac5e(0x572)+'eElem'+_0x3aac5e(0x269)](_0x3aac5e(0x168));return _0x4e3f96['class'+_0x3aac5e(0x61a)]=_0x40b8ea[_0x3aac5e(0x44b)]+(_0xbc035b?_0x40b8ea['mnTOB']:''),_0x4e3f96['textC'+_0x3aac5e(0x4f6)+'t']=_0x5a47ff,_0x4e3f96;}else{if(!_0x4a4a67||!window['unity'+_0x3aac5e(0x3e8)+_0x3aac5e(0x5e5)])return;var _0x3a1066=_0x42704c[_0x3aac5e(0x318)](Number(_0x313af0['speed'+_0x3aac5e(0x5c1)])||0x16a*-0x17+-0x7b9*-0x3+0x9bf,-0x21c2+0x1*-0x2111+0x4337),_0x5972e7=(Number(_0x313af0['jumpP'+'ct'])||0x3e4*-0x9+-0x1acf+-0x1*-0x3e37)/(0xc2*-0x2+-0x149a+0x1682),_0x559c00=(Number(_0x313af0[_0x3aac5e(0x18a)+'tyPct'])||-0x252e*0x1+-0x15d4+0x3b66)/(-0x1647*0x1+-0x29d+0x1948),_0x58d321=Math[_0x3aac5e(0x10e)](-0x3f9+-0x1*0x4a9+-0x21*-0x43,Number(_0x313af0[_0x3aac5e(0x5a8)+'eValu'+'e'])||0x244e*-0x1+0x19e6+0xe*0xc9),_0x52652a=_0x3a1066!==-0x1224+0xb23+-0xd*-0x8a||_0x42704c[_0x3aac5e(0x212)](_0x5972e7,0xa5a+0x20e0*-0x1+0x1687)||_0x42704c['IdzBj'](_0x559c00,-0x2*0xfbb+-0x1c84+0x53*0xb9)||_0x313af0[_0x3aac5e(0x4e7)],_0x346761=_0x313af0['noSpr'+'ead']||_0x313af0[_0x3aac5e(0x5a8)+_0x3aac5e(0x573)]||_0x313af0[_0x3aac5e(0x4df)+_0x3aac5e(0x42c)]||_0x313af0[_0x3aac5e(0x293)+'Exp'];if(!_0x52652a&&!_0x346761)return;try{for(var _0x59d653=-0x4da*-0x7+0x2cd+-0xc41*0x3;_0x42704c['gWNed'](_0x59d653,_0x4c2b20['lengt'+'h']);_0x59d653++){if(_0x3aac5e(0x64c)!==_0x3aac5e(0x64c))_0x1e3820[_0x3aac5e(0x13d)+_0x3aac5e(0x3c1)]=_0x43910e,_0x23ac63(),_0x3bdb89[_0x3aac5e(0xe4)+'d']();else{var _0x2405c8=_0x4c2b20[_0x59d653];if(!_0x2405c8)continue;_0x3a1066!==0x7a3+0x25e7*-0x1+-0xa17*-0x3&&('UZehU'===_0x42704c['nzByo']?(_0x29e1d1[_0x3aac5e(0x21f)+'hair']=_0x552e43,_0x40b8ea['TEnHR'](_0x43dba2)):(_0x36f942(_0x2405c8,0x1e02*0x1+0x22a*-0x1+-0xdd8*0x2,_0x3aac5e(0x1f0),_0x3a1066),_0x36f942(_0x2405c8,-0x1*0xbbf+-0x28*0x7e+0x1f9b,'f32',_0x3a1066),_0x42704c[_0x3aac5e(0x666)](_0x36f942,_0x2405c8,-0x511+-0x1de*0x2+0x1*0x8fd,_0x42704c['eayYZ'],_0x3a1066),_0x42704c['WtOeg'](_0x36f942,_0x2405c8,0x1e0e+-0x1*0x41b+-0x1fb*0xd,_0x3aac5e(0x1f0),_0x3a1066),_0x36f942(_0x2405c8,-0x418*-0x9+-0x1b*0x153+-0xfb,_0x3aac5e(0x1f0),_0x3a1066),_0x42704c['lahyU'](_0x36f942,_0x2405c8,0x2ad*0x7+0x1856+0x1*-0x2af1,_0x3aac5e(0x1f0),_0x3a1066)));if(_0x5972e7!==0x7f*0xe+-0x11c*0x8+0x1ef)_0x36f942(_0x2405c8,0x12f6*0x1+0x1*-0x443+-0x1*0xe63,_0x3aac5e(0x1f0),_0x5972e7);_0x559c00!==-0x1d0*0x2+0x4e5*0x6+-0x19bd&&(_0x36f942(_0x2405c8,0x918+0x24ec+-0x2dbc,'f32',_0x559c00),_0x42704c[_0x3aac5e(0x1fb)](_0x36f942,_0x2405c8,-0x49*0x3+-0x1d58+0x1e7f,_0x3aac5e(0x1f0),_0x559c00));if(_0x313af0[_0x3aac5e(0x4e7)])_0x42704c[_0x3aac5e(0x2a9)](_0x212cd3,_0x2405c8,-0x14d0+0xe1*0x8+0xe64,_0x42704c['eayYZ'],-(0x2*0xd15+0x2215+-0x3858));}}}catch(_0x540d80){}try{for(var _0x30b7cb=0x1592+-0x12d1+-0x3*0xeb;_0x42704c[_0x3aac5e(0x66f)](_0x30b7cb,_0x4dc62b['lengt'+'h']);_0x30b7cb++){if('jEybs'!=='JBWQE'){var _0x3ffb9f=_0x5c3115(_0x4dc62b[_0x30b7cb],0xa*-0x1+-0x1845+0x1887);if(!_0x3ffb9f)continue;_0x313af0[_0x3aac5e(0x5a8)+_0x3aac5e(0x573)]&&(_0x42704c['UySJn'](_0x212cd3,_0x3ffb9f,0xb*0x2a5+-0x152a+-0x7a1,_0x42704c['ynrJJ'],_0x58d321),_0x212cd3(_0x3ffb9f,-0x1af8+0x1*0x2659+-0xb0d,_0x3aac5e(0x362),_0x58d321));_0x313af0[_0x3aac5e(0x300)+'ead']&&(_0x42704c['HUFOt'](_0x212cd3,_0x3ffb9f,-0x3e*-0x77+0x1b*-0x6d+-0x10cb,'f32',0x739+0xb01*-0x2+0xec9),_0x212cd3(_0x3ffb9f,0x3ac*0x4+0x19*0x83+-0x1b13,_0x42704c['eayYZ'],-0x15d*-0x17+0x1a2b+-0x3985));if(_0x313af0[_0x3aac5e(0x4df)+_0x3aac5e(0x42c)])_0x212cd3(_0x3ffb9f,0x4d9+-0x25d5+0x58*0x61,_0x3aac5e(0x362),0x6*-0x73+-0x2373*-0x1+-0x1cda);_0x313af0['rapid'+'Exp']&&(_0x36f942(_0x3ffb9f,-0x2ef+0x56*0x49+-0x150b,_0x42704c[_0x3aac5e(0x4bb)],-0x10fc+-0x272+0x3*0x67a+0.1),_0x212cd3(_0x3ffb9f,-0x3d7*0x5+0x1*0x3dd+0xfb6,_0x42704c[_0x3aac5e(0x4bb)],0x2327*-0x1+-0x1*0x201a+-0x9*-0x779+0.1));}else try{_0x481708['setIt'+'em'](_0x42704c['vaoMf'],_0x5de156[_0x3aac5e(0x3ec)+'gify'](_0x4f031c));}catch(_0x14748e){}}}catch(_0x28cade){}}},-0x1333+0x561*-0x6+0x93*0x5b),setInterval(()=>{var _0x1a4bd5=_0x597f52,_0x33c570={'KKAOL':function(_0x336d9b,_0x2e89cc,_0x27fc53,_0x2c4e5e,_0x3dad11){return _0x336d9b(_0x2e89cc,_0x27fc53,_0x2c4e5e,_0x3dad11);},'WZAxD':_0x1a4bd5(0x1f0)};if(_0x1a4bd5(0x1e9)!=='upcHY')_0x3d7c87(_0x2d2329,0x21d1*-0x1+0x1e1+0x2078,'f32',0x142f*0x1+-0x123+-0x130c),_0x33c570['KKAOL'](_0xd87282,_0x1cc2e5,0x1d26+-0x1*0x1f01+0x243,_0x33c570['WZAxD'],-0x1*0xcfd+0x271*0xd+-0x12bf);else{_0x1475a8[_0x1a4bd5(0x435)+_0x1a4bd5(0x215)]=!!window['unity'+_0x1a4bd5(0x3e8)+'nce'];try{var _0x4ce220=-0x16cc+0xacd+0xbff;for(var _0xbf86da in _0x2caad0){if(_0x2caad0[_0xbf86da]&&_0x2caad0[_0xbf86da]['appli'+'ed'])_0x4ce220++;}_0x1475a8[_0x1a4bd5(0x678)+'Ok']=_0x4ce220;}catch(_0x1e0c5d){}}},0x113d+0x1018+-0x1d6d);var _0x271f86=new Set(),_0x431b18={0x1:[],0x3:[]},_0x16d37e=![];function _0x27f4b6(_0x5f0310){var _0x45ef03=_0x597f52;_0x271f86['add'](_0x5f0310[_0x45ef03(0x4d7)]);}function _0x50ad58(_0x2f76fa){var _0x5cdb3b=_0x597f52;if(_0x42704c[_0x5cdb3b(0x212)](_0x5cdb3b(0x129),_0x42704c[_0x5cdb3b(0x414)])){var _0x4dfc89=0x416*-0x1+0x15*-0x2c+0xc5*0xa;for(var _0x4bc0e4 in _0x2a23c9){if(_0x960c9a[_0x4bc0e4]&&_0xc679c8[_0x4bc0e4]['appli'+'ed'])_0x4dfc89++;}_0x3dd31a[_0x5cdb3b(0x678)+'Ok']=_0x4dfc89;}else _0x271f86[_0x5cdb3b(0x1ec)+'e'](_0x2f76fa['code']);}function _0x5d69bd(_0x436b98){var _0x18604f=_0x597f52,_0x32a9ab={'YulLG':_0x18604f(0x560)+_0x18604f(0x46a)};if(_0x42704c['DPHiO'](_0x18604f(0x16a),_0x18604f(0x4b0))){var _0x2b1848={'aOZIa':function(_0x3c7cde,_0x583a8a,_0x2b3c73,_0x4279f8,_0x56e452){var _0x5bb64b=_0x18604f;return _0x42704c[_0x5bb64b(0x5c8)](_0x3c7cde,_0x583a8a,_0x2b3c73,_0x4279f8,_0x56e452);}};if(_0x5eeda6[_0x18604f(0x36f)+'WebMo'+_0x18604f(0xe5)]&&!_0x586bbf['safeM'+'ode']){_0x136595=_0x4c777d['Unity'+'WebMo'+'dkit'][_0x18604f(0xe0)+'Wrapp'+'er'],_0x759fb0=_0x578ab9['Unity'+'WebMo'+_0x18604f(0xe5)]['Runti'+'me'][_0x18604f(0x572)+_0x18604f(0x275)+'in']({'name':_0x42704c[_0x18604f(0x253)],'version':_0x18604f(0x685),'referencedAssemblies':['Assem'+'bly-C'+'Sharp'+'.dll']});if(_0x30d02b['hookG'+'od'])_0x4db7ab('god',_0x42704c[_0x18604f(0x1e8)],_0x42704c[_0x18604f(0x5d6)],[_0x18604f(0x362),'i32'],_0x2f8bee,_0x303280,!!_0x285d67[_0x18604f(0x4d8)]);if(_0x15718f['hookG'+_0x18604f(0x294)])_0x407fdf('godDi'+'e','OHeal'+'th',_0x42704c['dNnmv'],[_0x18604f(0x362),_0x42704c[_0x18604f(0xda)],_0x18604f(0x362),'i32','i32'],_0x102ee9,_0x1a2824,!!_0x53d87d['god']);if(_0x3d9ffe[_0x18604f(0x3b5)+'oReco'+'il'])_0x1a8c7d(_0x42704c[_0x18604f(0x1df)],_0x42704c[_0x18604f(0x658)],_0x18604f(0x4c1),['i32'],_0x52bb5a,_0x5c0572,!!_0x56fbef[_0x18604f(0x174)+_0x18604f(0x677)]);if(_0x195b0a['hookC'+'aptur'+'e'])_0x5f19e2(_0x18604f(0x682)+'ooter',_0x42704c[_0x18604f(0x511)],_0x18604f(0x59c)+_0x18604f(0xf6)+_0x18604f(0x5ef),[_0x18604f(0x362),'i32'],_0x27e711,(_0x246599,_0x1427ba)=>{var _0x228f36=_0x18604f;_0x2b1848[_0x228f36(0x4b5)](_0x15087f,_0x3877cd,_0x1427ba,_0x4c7f32,_0x228f36(0x20f)+_0x228f36(0x45c));},!![]);if(_0x24c9d5[_0x18604f(0x227)+_0x18604f(0x429)+'e'])_0x4fc3ef(_0x42704c['jhorn'],_0x18604f(0x459)+_0x18604f(0x5f4)+_0x18604f(0x105)+'.Over'+'tide.'+'Movem'+_0x18604f(0x269),_0x42704c['pygHx'],[_0x42704c[_0x18604f(0xda)]],_0x42704c[_0x18604f(0xda)],(_0x2eb483,_0x518723)=>{_0x5ae8ea(_0x699fdc,_0x518723,_0x441b10,_0x32a9ab['YulLG']);},!![]);}}else{if(_0x436b98[_0x18604f(0x2fe)+'ura'])return;_0x271f86[_0x18604f(0x13f)](_0x18604f(0x4cb)+_0x42704c['PgftQ'](_0x436b98[_0x18604f(0x557)+'n'],0x1*-0x31d+-0x1c03+0x1f21));var _0x988a31=_0x431b18[_0x436b98['butto'+'n']+(0x94b+0x484+-0x13*0xba)];if(_0x988a31){_0x988a31[_0x18604f(0x27e)](performance[_0x18604f(0x267)]());if(_0x42704c['ROyVt'](_0x988a31[_0x18604f(0x232)+'h'],-0x1*0x160f+-0xe*0x256+0x36eb))_0x988a31[_0x18604f(0x4a6)]();}}}function _0x208809(_0x36a4ad){var _0x58a274=_0x597f52;if(!_0x36a4ad['__sak'+_0x58a274(0x3fe)])_0x271f86[_0x58a274(0x1ec)+'e'](_0x42704c['zzhbL']+(_0x36a4ad[_0x58a274(0x557)+'n']+(0x1dcf+0x1009*-0x1+0x19*-0x8d)));}function _0x370faf(){_0x271f86['clear']();}function _0x418e70(){var _0x3560b8=_0x597f52,_0xd0a174=(_0x3560b8(0x29f)+_0x3560b8(0x690)+'4|3')[_0x3560b8(0x15b)]('|'),_0x5ba1a9=-0x1*0xe82+0x1*0x12eb+-0x1*0x469;while(!![]){switch(_0xd0a174[_0x5ba1a9++]){case'0':window[_0x3560b8(0x553)+_0x3560b8(0x119)+'stene'+'r'](_0x42704c['IifVp'],_0x5d69bd,!![]);continue;case'1':if(_0x16d37e)return;continue;case'2':_0x16d37e=!![];continue;case'3':window[_0x3560b8(0x553)+_0x3560b8(0x119)+_0x3560b8(0x63a)+'r'](_0x3560b8(0x14e),_0x370faf);continue;case'4':window['addEv'+_0x3560b8(0x119)+_0x3560b8(0x63a)+'r'](_0x42704c['DCERr'],_0x208809,!![]);continue;case'5':window[_0x3560b8(0x553)+'entLi'+'stene'+'r'](_0x42704c['JustS'],_0x50ad58,!![]);continue;case'6':window[_0x3560b8(0x553)+'entLi'+_0x3560b8(0x63a)+'r'](_0x42704c[_0x3560b8(0x341)],_0x27f4b6,!![]);continue;}break;}}function _0x1c97c2(_0x12cd11){var _0x197e83=_0x431b18[_0x12cd11]||[],_0x4b9b14=performance['now']();while(_0x197e83['lengt'+'h']&&_0x4b9b14-_0x197e83[-0x965+0x1*0x249e+-0x1b39]>-0x1681+-0x49*0x53+0x3214)_0x197e83['shift']();return _0x197e83['lengt'+'h'];}function _0x332c33(_0x4d82bf){var _0x260abb=_0x597f52,_0x45d458={'DWVWQ':'0|1|6'+'|2|5|'+'8|4|9'+'|7|3','qXbPK':'600\x201'+_0x260abb(0x695)+'i-mon'+_0x260abb(0x39e)+'e,mon'+'ospac'+'e','wdgxS':_0x42704c[_0x260abb(0x626)],'ZvpJw':function(_0x3935bf,_0x5e6dff,_0x50673c){return _0x3935bf(_0x5e6dff,_0x50673c);}};if(_0x42704c[_0x260abb(0x4a5)](_0x260abb(0x19d),'ZRKBs')){var _0x498d16=_0x45d458[_0x260abb(0x218)][_0x260abb(0x15b)]('|'),_0x152875=-0x14dc+0xd27+0x1*0x7b5;while(!![]){switch(_0x498d16[_0x152875++]){case'0':_0x17aca9['save']();continue;case'1':_0x4db68a[_0x260abb(0x291)]=_0x45d458[_0x260abb(0x652)];continue;case'2':_0x4a3663[_0x260abb(0x257)+'aseli'+'ne']=_0x45d458['wdgxS'];continue;case'3':_0x4f53f7[_0x260abb(0x60a)+'re']();continue;case'4':_0x45d458[_0x260abb(0x167)](_0x1101dd,_0x260abb(0x110)+'A\x20KOU'+_0x260abb(0x55d)+'1','#ff6b'+'9d');continue;case'5':var _0x276f66=0x88b+0x2671+-0x4*0xbb4,_0x2d1c36=-0x5*-0x314+-0xc5a+-0x2fe;continue;case'6':_0x544dc9[_0x260abb(0x334)+_0x260abb(0x403)]=_0x260abb(0x5f5);continue;case'7':if(!_0x4c0a5d['gameL'+_0x260abb(0x215)])_0x1101dd('waiti'+'ng\x20fo'+_0x260abb(0x321)+'e…','rgba('+'255,1'+_0x260abb(0x205)+'0,0.6'+')');continue;case'8':var _0x1101dd=(_0x453890,_0x29a40f)=>{var _0x3e8426=_0x260abb;_0x84e889[_0x3e8426(0x34b)+'tyle']=_0x29a40f||_0x3e8426(0x60b)+_0x3e8426(0x24e)+_0x3e8426(0x395)+_0x3e8426(0x30c)+'5)',_0x501980[_0x3e8426(0x6a6)+_0x3e8426(0x57e)](_0x453890,_0x2d1c36,_0x276f66),_0x276f66+=-0xcd2*0x1+-0x7ab*-0x1+0x537;};continue;case'9':if(_0x4f5bcd[_0x260abb(0x679)])_0x1101dd(_0x184a00+_0x260abb(0x55b));continue;}break;}}else{if(document[_0x260abb(0x136)]&&(_0x42704c[_0x260abb(0x4a5)](document[_0x260abb(0x26a)+_0x260abb(0x11e)],_0x260abb(0x5ba)+_0x260abb(0x437)+'e')||document[_0x260abb(0x26a)+'State']===_0x260abb(0x67a)+_0x260abb(0x40d)))_0x42704c[_0x260abb(0x23d)](_0x4d82bf);else document[_0x260abb(0x553)+_0x260abb(0x119)+_0x260abb(0x63a)+'r']('DOMCo'+_0x260abb(0x153)+_0x260abb(0x33e)+'d',_0x4d82bf,{'once':!![]});}}_0x332c33(()=>{var _0x2e908b=_0x597f52,_0x2479b1={'zNhZk':_0x2e908b(0x5ba)+_0x2e908b(0x437)+'e','gYdCt':function(_0x2ac740,_0x3fef0b){return _0x42704c['eIrhj'](_0x2ac740,_0x3fef0b);},'hokTA':_0x2e908b(0x67a)+_0x2e908b(0x40d),'kbuXs':function(_0x376ae2){return _0x376ae2();},'oEERx':'kcFKf','GTsQv':'SAYQr','dIgtY':'kour-'+_0x2e908b(0x432)+_0x2e908b(0x564)+_0x2e908b(0xf0)+'nt','yACbq':function(_0xf1e980,_0x264588){var _0x467172=_0x2e908b;return _0x42704c[_0x467172(0x54c)](_0xf1e980,_0x264588);},'vosfX':_0x42704c[_0x2e908b(0x49e)],'iHVZR':function(_0x4fa062,_0x4ae6fa){return _0x4fa062<_0x4ae6fa;},'mQqHm':_0x42704c[_0x2e908b(0xcd)],'RTLcw':_0x42704c['VLDxi'],'fdqwc':'none','KeErF':function(_0x59c3c0,_0x2d951a){return _0x59c3c0===_0x2d951a;},'lAAnA':function(_0x140589,_0x54f65a){return _0x140589*_0x54f65a;},'xXcRT':_0x2e908b(0x1aa)+'S','FZTNt':_0x42704c['WMPyu'],'NFVnh':function(_0x2a850e,_0x39e1ce){return _0x2a850e+_0x39e1ce;},'NmYWv':_0x2e908b(0x108)+_0x2e908b(0x1c7)+_0x2e908b(0x3d8)+_0x2e908b(0x1ba)+'tem-u'+_0x2e908b(0x3da)+_0x2e908b(0x157)+'if','GstTj':function(_0x536ff3,_0x524f4b){return _0x536ff3-_0x524f4b;},'VcLLh':function(_0x4303db,_0x589851){return _0x42704c['IiwaQ'](_0x4303db,_0x589851);},'tFmEf':'#fff','YGMqg':_0x42704c[_0x2e908b(0x388)],'AmeUH':_0x2e908b(0x272),'hbnnj':function(_0x228fa1,_0x3f2887){var _0x4acacb=_0x2e908b;return _0x42704c[_0x4acacb(0x1c2)](_0x228fa1,_0x3f2887);},'boDlK':function(_0xc7ca02,_0x339ebe){return _0xc7ca02+_0x339ebe;},'LDqjE':function(_0x480902,_0x49f58e){return _0x480902+_0x49f58e;},'QUohy':function(_0x3b6975,_0xcde8bf){var _0x70d6b3=_0x2e908b;return _0x42704c[_0x70d6b3(0x12b)](_0x3b6975,_0xcde8bf);},'fsTxY':function(_0x1bb257,_0x562b30){var _0x489f1c=_0x2e908b;return _0x42704c[_0x489f1c(0x56e)](_0x1bb257,_0x562b30);},'VXeHC':function(_0x35d202,_0x5dca53){return _0x35d202-_0x5dca53;},'aImRw':function(_0x1f55ed,_0x47c4ee){return _0x1f55ed===_0x47c4ee;},'WPRjC':function(_0x30945f,_0xe45ce){return _0x30945f+_0xe45ce;},'drccB':function(_0x1c5076,_0x31bc8c){var _0x2fe9ca=_0x2e908b;return _0x42704c[_0x2fe9ca(0x3d6)](_0x1c5076,_0x31bc8c);},'agHwN':function(_0x40084b,_0xe3a283){return _0x40084b===_0xe3a283;},'rsSyI':function(_0x6723d1,_0x2c1e17){return _0x6723d1+_0x2c1e17;},'iIwsp':function(_0x3cfa75,_0x25bce5,_0x3168b2,_0x4207e2,_0x121d3d,_0x381546,_0x42609c){return _0x42704c['xauSq'](_0x3cfa75,_0x25bce5,_0x3168b2,_0x4207e2,_0x121d3d,_0x381546,_0x42609c);},'BvxgB':_0x2e908b(0xd2),'PSdqL':function(_0x3260c4,_0x5402f8){return _0x3260c4+_0x5402f8;},'lMcwi':_0x2e908b(0x307),'oenKU':function(_0x287d52,_0xcbeb7e){return _0x287d52+_0xcbeb7e;},'xvmxr':_0x2e908b(0x59f),'HrhCd':_0x42704c[_0x2e908b(0x55c)],'Fbwzm':function(_0x173750,_0x39952d){return _0x173750+_0x39952d;},'rRrTp':'\x20CPS','pGkyp':'mouse'+'3','ntCxk':function(_0x1fc104,_0x3816d8){return _0x1fc104+_0x3816d8;},'ntHcp':'mFrIF','FMvqz':_0x42704c['NlgOE'],'gfmdE':function(_0x8f6ced,_0x3c301e,_0x1131f7){var _0x1d5905=_0x2e908b;return _0x42704c[_0x1d5905(0x68a)](_0x8f6ced,_0x3c301e,_0x1131f7);},'iImAy':function(_0x396e18,_0x316ae9){var _0x22ce1b=_0x2e908b;return _0x42704c[_0x22ce1b(0x521)](_0x396e18,_0x316ae9);},'rKmKp':'\x20FPS','TXaon':'waiti'+_0x2e908b(0x29d)+'r\x20gam'+'e…','skNEI':function(_0xa7a64e,_0x72f2ef){return _0xa7a64e>=_0x72f2ef;},'rPDgz':function(_0x41aaf0,_0x18cb71){return _0x41aaf0(_0x18cb71);},'zFkud':_0x42704c[_0x2e908b(0x2ca)],'Wahzj':'butto'+'n','umYwk':_0x42704c[_0x2e908b(0x3fc)],'odWco':_0x2e908b(0x312)+'h','JYzpr':_0x42704c[_0x2e908b(0x2d5)],'SeZTM':function(_0x2f2df0){var _0x42f3ea=_0x2e908b;return _0x42704c[_0x42f3ea(0x23d)](_0x2f2df0);},'VwVPb':function(_0x278962,_0x1d0644){return _0x278962(_0x1d0644);},'WKDba':_0x42704c[_0x2e908b(0xf7)],'ddiFw':_0x2e908b(0x168),'mKtNt':function(_0x1c0ee1){var _0x40c404=_0x2e908b;return _0x42704c[_0x40c404(0x23d)](_0x1c0ee1);},'vRGFC':_0x42704c['gZrsF'],'cBnXX':_0x42704c[_0x2e908b(0x481)],'BSIYn':_0x2e908b(0x3d9)+'l','RURTl':_0x2e908b(0x541)+_0x2e908b(0xd7),'kQJHN':'f32','NTwKA':function(_0x1f1f2c,_0x5b4d5e){var _0x435eae=_0x2e908b;return _0x42704c[_0x435eae(0x15f)](_0x1f1f2c,_0x5b4d5e);},'cgmlq':_0x42704c['QSJBF'],'Odtkt':_0x42704c[_0x2e908b(0x2fc)],'psNzE':_0x42704c['mHqYa'],'MwKUS':function(_0xa2396d,_0x28ce17){var _0x31fec5=_0x2e908b;return _0x42704c[_0x31fec5(0x350)](_0xa2396d,_0x28ce17);},'zeBNk':_0x42704c[_0x2e908b(0x38f)],'lDMNB':function(_0x535889,_0x1bef36){return _0x535889(_0x1bef36);},'cOWUG':function(_0x8e234e,_0x11ce23){return _0x8e234e!==_0x11ce23;},'FQhoY':_0x2e908b(0x3e1)+'rd','nAkTn':_0x2e908b(0x3e1)+_0x2e908b(0x320)+'ad','FnUIO':'sk-ca'+'rd-ti'+_0x2e908b(0x1e2),'bDHdV':_0x42704c['snFiw'],'OWCAk':_0x2e908b(0xe6),'QviIS':_0x42704c['jPpnB'],'naZqo':'NLzHR','fFbfJ':function(_0x10a7cd,_0xcd57bf){var _0x195600=_0x2e908b;return _0x42704c[_0x195600(0x183)](_0x10a7cd,_0xcd57bf);},'vTQuV':function(_0x4fa239,_0x1117f0){return _0x4fa239+_0x1117f0;},'BHgKU':function(_0x4f3074,_0x109c09){return _0x4f3074+_0x109c09;},'gGZNn':_0x2e908b(0x617)+_0x2e908b(0x3b6)+'\x20','HqxhN':'held','feaxR':function(_0x547393,_0x4db724,_0x4e9b42,_0x13b8ce){return _0x547393(_0x4db724,_0x4e9b42,_0x13b8ce);},'cuOyC':function(_0xd2c5bf){return _0xd2c5bf();},'pPAlP':'exZbz','LcbiK':function(_0x558009,_0x3073f7){return _0x558009===_0x3073f7;},'znIjF':_0x2e908b(0x3fd)+'|5|4|'+'0','VrxsS':function(_0x1aa1a8,_0x39ded1){return _0x42704c['oNqqS'](_0x1aa1a8,_0x39ded1);},'vgank':_0x42704c[_0x2e908b(0x535)],'ZSERT':'activ'+'e','zPoWy':_0x42704c[_0x2e908b(0x453)],'AuhxA':function(_0x267da1,_0x3b2259){return _0x267da1+_0x3b2259;},'BXYIb':_0x2e908b(0x516)+'s','Qvfia':_0x42704c['ebfUX'],'JuwUB':'\x20|\x20ga'+_0x2e908b(0x2eb),'OnuSd':_0x2e908b(0x33d)+'d','MskNI':'\x20|\x20mo'+_0x2e908b(0x431)+'t\x20','QyRwD':function(_0x3583f4,_0x5a6e6a){return _0x42704c['IYJBV'](_0x3583f4,_0x5a6e6a);},'FlCAQ':_0x42704c['BsLTQ'],'qzUWI':_0x2e908b(0x52b)+_0x2e908b(0x3ff)+'NG\x20-\x20'+'overl'+_0x2e908b(0x54a)+'ly\x20(r'+'einst'+_0x2e908b(0x500)+_0x2e908b(0x411)+'erscr'+_0x2e908b(0x5de),'SiAnx':_0x2e908b(0x4a2),'xLmmc':_0x2e908b(0x51f)+'de','ouPpP':'mn-ma'+'in','nUuEb':_0x42704c[_0x2e908b(0x440)],'btNyN':_0x42704c['fXyWP'],'hatgr':'mn-su'+'b','vIEWG':_0x2e908b(0x1eb)+'trike'+_0x2e908b(0x387)+'enu','vHnZZ':_0x2e908b(0x353)+_0x2e908b(0x2da),'DfweO':_0x42704c['VjCRp'],'ZAAYh':_0x2e908b(0x3e7)+'viewB'+'ox=\x220'+_0x2e908b(0x3ba)+'\x2024\x22>'+_0x2e908b(0x35d)+_0x2e908b(0x697)+_0x2e908b(0x543)+_0x2e908b(0x2d3)+_0x2e908b(0x4ad)+_0x2e908b(0x2db)+_0x2e908b(0x54f)+'vg>','MkHvf':_0x42704c[_0x2e908b(0x654)],'DbGrH':_0x42704c['xyPme'],'yRVTv':function(_0x268b3c,_0x4bcda4){var _0x48b71f=_0x2e908b;return _0x42704c[_0x48b71f(0x561)](_0x268b3c,_0x4bcda4);},'IFgPY':_0x2e908b(0x646)+'t'};_0x313af0['adblo'+'ck']&&setInterval(()=>{var _0x29d187=_0x2e908b,_0x113cfe={'svaYM':function(_0x427ad3,_0x325991){return _0x427ad3===_0x325991;}};if(_0x2479b1['oEERx']!=='kcFKf'){if(_0x22410c['body']&&(_0x3da284['ready'+'State']===_0x2479b1['zNhZk']||_0x2479b1['gYdCt'](_0x3b42dd['ready'+_0x29d187(0x11e)],_0x2479b1['hokTA'])))_0x2479b1[_0x29d187(0x2c2)](_0x416e92);else _0x2b4608['addEv'+'entLi'+_0x29d187(0x63a)+'r']('DOMCo'+'ntent'+_0x29d187(0x33e)+'d',_0x370594,{'once':!![]});}else try{if(_0x2479b1['GTsQv']==='HLjOL')_0x113cfe['svaYM'](_0x57939d['code'],_0x29d187(0x464)+'t')&&(_0x6eecf4[_0x29d187(0x436)+'ntDef'+_0x29d187(0x1c5)](),_0x27c3f6());else for(var _0x35a028 of[_0x29d187(0x32e)+_0x29d187(0x432)+'0x250'+'-pare'+'nt',_0x29d187(0x32e)+_0x29d187(0x2d8)+_0x29d187(0x3aa)+'paren'+'t',_0x2479b1['dIgtY'],_0x29d187(0x2f3)+_0x29d187(0x4b8)+'-banr'+'s']){var _0x3b0a2b=document['getEl'+_0x29d187(0x3ea)+'ById'](_0x35a028);if(_0x3b0a2b&&_0x2479b1[_0x29d187(0x242)](_0x35a028,_0x29d187(0x2f3)+'creen'+'-banr'+'s')){if('RshzO'===_0x2479b1['vosfX']){var _0x43c5aa=_0x3b0a2b['child'+_0x29d187(0x17b)];for(var _0x27415b=-0x143*0x1d+-0xa*-0x127+0x1911;_0x2479b1['iHVZR'](_0x27415b,_0x43c5aa[_0x29d187(0x232)+'h']);_0x27415b++){if(_0x2479b1['yACbq'](_0x2479b1[_0x29d187(0x2cd)],_0x2479b1['mQqHm'])){if(_0x43c5aa[_0x27415b]['id']&&_0x43c5aa[_0x27415b]['id'][_0x29d187(0x551)+'Of'](_0x2479b1['RTLcw'])===0xf6c*-0x1+-0x3*-0xafe+-0x118e)_0x43c5aa[_0x27415b][_0x29d187(0x549)][_0x29d187(0x1e6)+'ay']=_0x29d187(0x45d);}else _0x4205b9(),_0x442bd8(_0x1001e8(_0x484dfc['value']));}}else{var _0x299b82=new _0x268e65(_0x3fae3d)['readF'+'ield'](_0x39d16b,_0x5b6bd8);_0x2d5bdb[_0x29d187(0x34a)](_0x4e5cb0,_0x299b82!==_0x584f65?_0x299b82['val']():null);}}else{if(_0x3b0a2b)_0x3b0a2b[_0x29d187(0x549)][_0x29d187(0x1e6)+'ay']=_0x2479b1['fdqwc'];}}}catch(_0x47434b){}},-0x2*0xa97+0x115*0x2+-0x1ad4*-0x1);var _0xd8c296=document['creat'+'eElem'+'ent'](_0x42704c['abdZt']);_0xd8c296[_0x2e908b(0x549)]['cssTe'+'xt']=_0x2e908b(0x4a0)+_0x2e908b(0x2b5)+_0x2e908b(0x5ae)+_0x2e908b(0x44f)+':0;wi'+'dth:1'+_0x2e908b(0x20c)+'heigh'+_0x2e908b(0xf1)+_0x2e908b(0x15d)+_0x2e908b(0x551)+_0x2e908b(0x111)+'48364'+_0x2e908b(0x398)+_0x2e908b(0x532)+_0x2e908b(0x52a)+_0x2e908b(0x329)+'e';var _0x51e1e0=_0xd8c296['getCo'+_0x2e908b(0x141)]('2d');function _0x6735eb(){var _0x9fc29d=_0x2e908b;try{var _0x38fff2=document[_0x9fc29d(0x2f3)+_0x9fc29d(0x4b8)+_0x9fc29d(0x2a3)+'nt'],_0x582bb8=_0x38fff2&&_0x38fff2[_0x9fc29d(0x35e)+'me']!=='CANVA'+'S'?_0x38fff2:document[_0x9fc29d(0x136)]||document['docum'+'entEl'+_0x9fc29d(0x3ea)];if(_0xd8c296['paren'+_0x9fc29d(0x491)]!==_0x582bb8)_0x582bb8['appen'+'dChil'+'d'](_0xd8c296);}catch(_0xf42a0c){try{document[_0x9fc29d(0x136)][_0x9fc29d(0x4d2)+_0x9fc29d(0x393)+'d'](_0xd8c296);}catch(_0x371fb3){}}}var _0xf2ce10={'w':0x0,'h':0x0,'dpr':0x0};function _0x162fd1(){var _0x2e5dc8=_0x2e908b,_0x334d1a=window['devic'+_0x2e5dc8(0x2c8)+_0x2e5dc8(0x1fc)+'o']||0x2c2+-0x5de+0x31d,_0x1b785e=window['inner'+'Width'],_0x5b398a=window[_0x2e5dc8(0x5af)+_0x2e5dc8(0x592)+'t'];if(_0x1b785e===_0xf2ce10['w']&&_0x2479b1[_0x2e5dc8(0x3c5)](_0x5b398a,_0xf2ce10['h'])&&_0x334d1a===_0xf2ce10[_0x2e5dc8(0x69e)])return;_0xf2ce10['w']=_0x1b785e,_0xf2ce10['h']=_0x5b398a,_0xf2ce10['dpr']=_0x334d1a,_0xd8c296[_0x2e5dc8(0x3f1)]=Math[_0x2e5dc8(0x1a5)](_0x1b785e*_0x334d1a),_0xd8c296[_0x2e5dc8(0x5a6)+'t']=Math[_0x2e5dc8(0x1a5)](_0x2479b1[_0x2e5dc8(0x3ab)](_0x5b398a,_0x334d1a)),_0x51e1e0['setTr'+'ansfo'+'rm'](_0x334d1a,-0x1861+0xe85+0x9dc,-0x1*-0x1fb9+0x5e8+0x1*-0x25a1,_0x334d1a,-0x2*0xf75+0x219d+-0x2b3,-0x199*-0x8+0x910+-0x15d8);}var _0x44664e=-0x25fa+-0x1*0x121d+-0x1*-0x3817,_0x1039f8=performance['now'](),_0x4a3368=0x548+0xe4f+-0x3b*0x55;function _0x56f747(_0x48cecd){var _0x42d516=_0x2e908b,_0x3a6764={'OVXKh':function(_0x11250b,_0x4ed229){return _0x11250b!==_0x4ed229;},'Kijln':_0x2479b1[_0x42d516(0x5d3)],'LQhJF':_0x2479b1['FZTNt'],'JOXNd':function(_0x41b425,_0x36008c){return _0x41b425*_0x36008c;},'ekbaD':'rgba('+'22,8,'+'16,0.'+'7)','kwkuz':function(_0x15e58e,_0x2a3be1){var _0x26a431=_0x42d516;return _0x2479b1[_0x26a431(0x52c)](_0x15e58e,_0x2a3be1);},'PNUdn':'700\x20','HUjwA':_0x2479b1['NmYWv'],'AFfck':function(_0x507a09,_0x32cc4c){var _0x50147e=_0x42d516;return _0x2479b1[_0x50147e(0x3ee)](_0x507a09,_0x32cc4c);},'BvDZr':_0x42d516(0x368),'OnoHo':function(_0xba3f3,_0x31d084){return _0x2479b1['VcLLh'](_0xba3f3,_0x31d084);},'RXQPK':_0x2479b1[_0x42d516(0x3e4)],'PrbWR':function(_0x214792,_0x1a186f){return _0x214792+_0x1a186f;},'eXpAa':function(_0x2932e2,_0x286edd){return _0x2932e2/_0x286edd;},'vTUCz':function(_0x52fb81,_0x52b250){return _0x2479b1['lAAnA'](_0x52fb81,_0x52b250);}};if(_0x2479b1[_0x42d516(0x3c5)](_0x2479b1[_0x42d516(0x417)],_0x2479b1[_0x42d516(0x120)]))_0x3cfea2[_0x42d516(0x3ed)]=_0x38b8ce,_0x53f877();else{var _0x437410=Number(_0x313af0['ksSca'+'le'])||0x1*0x233f+0xd3f+0x307d*-0x1,_0x32c1ab=_0x2479b1['hbnnj'](-0x2502+-0x1*0x387+-0x1d*-0x167,_0x437410),_0x4d4bf4=(-0x5bf+-0x18de+0x1*0x1ea1)*_0x437410,_0xb640be=_0x2479b1['boDlK'](_0x32c1ab*(0x50*0x2b+0x18a*0x11+-0x2797),_0x2479b1[_0x42d516(0x3ab)](_0x4d4bf4,0x1d85+-0x1410+-0x1*0x973)),_0xbc1452=_0x2479b1[_0x42d516(0x357)](_0x2479b1[_0x42d516(0x5e6)](_0x32c1ab,0x20c8+-0x103d+-0x1088),_0x2479b1['fsTxY'](_0x4d4bf4,-0x14*-0x76+-0x1ca1+-0x3*-0x679)),_0x37c128=_0x313af0[_0x42d516(0x268)],_0x5ace2a=_0x37c128==='br'?_0x2479b1[_0x42d516(0x413)](_0x2479b1['VXeHC'](_0x48cecd['right'],0x15*-0x1ab+-0x2a7*-0x9+0x4*0x2ce),_0xb640be):_0x48cecd[_0x42d516(0x5f5)]+(0xa92+-0x1a04+0x5*0x31a),_0x1c74e1=_0x2479b1['aImRw'](_0x37c128,'ml')?_0x2479b1[_0x42d516(0x4d9)](_0x48cecd[_0x42d516(0x509)],_0x48cecd[_0x42d516(0x5a6)+'t']/(0x1*-0x3be+0x1f85+-0x1bc5))-_0x2479b1[_0x42d516(0x493)](_0xbc1452,0xed5+0x1254+0x171*-0x17):_0x48cecd[_0x42d516(0x5a5)+'m']-_0xbc1452-(_0x2479b1['agHwN'](_0x37c128,'bl')?0x6*-0x463+-0x364+0x1e16*0x1:0x1a30*-0x1+-0x15*0x31+0x1ecb),_0x26ff2f=(_0x2ced44,_0xff06f4,_0x199196,_0x4a9fc1,_0xe321e4,_0x205979,_0x3a51b5)=>{var _0x56a3e0=_0x42d516,_0x55b0fd={'isdCY':function(_0x315be0,_0x1a081e){var _0xceeee6=_0x4928;return _0x3a6764[_0xceeee6(0x2a1)](_0x315be0,_0x1a081e);},'ZGNoq':_0x3a6764['Kijln']};if(_0x3a6764['OVXKh'](_0x3a6764[_0x56a3e0(0x1a4)],'fRTut')){var _0x4c146c=_0x271f86[_0x56a3e0(0x33c)](_0xff06f4);_0x51e1e0[_0x56a3e0(0x67f)](),_0x51e1e0[_0x56a3e0(0x2d7)+_0x56a3e0(0x1a0)]();if(_0x51e1e0[_0x56a3e0(0x1a5)+'Rect'])_0x51e1e0[_0x56a3e0(0x1a5)+_0x56a3e0(0x216)](_0x199196,_0x4a9fc1,_0xe321e4,_0x205979,_0x3a6764[_0x56a3e0(0x423)](0x2470+0xb94+-0x7*0x6db,_0x437410));else _0x51e1e0[_0x56a3e0(0x5bb)](_0x199196,_0x4a9fc1,_0xe321e4,_0x205979);_0x51e1e0[_0x56a3e0(0x34b)+_0x56a3e0(0xc8)]=_0x4c146c?'rgba('+_0x56a3e0(0x467)+_0x56a3e0(0x18c)+'7,0.8'+'5)':_0x3a6764['ekbaD'],_0x51e1e0[_0x56a3e0(0x53b)](),_0x51e1e0[_0x56a3e0(0x644)+'idth']=-0x1*0xb29+0x1*0x5f+0xacb,_0x51e1e0[_0x56a3e0(0x2b3)+_0x56a3e0(0x53e)+'e']=_0x4c146c?_0x1826d7:'rgba('+'255,1'+'07,15'+_0x56a3e0(0x180)+'5)',_0x51e1e0[_0x56a3e0(0x2b3)+'e']();_0x4c146c&&(_0x51e1e0[_0x56a3e0(0x1fe)+'wColo'+'r']=_0x284a79,_0x51e1e0['shado'+_0x56a3e0(0x4c8)]=0x4*0x1db+0x3e*0x1+-0x79c,_0x51e1e0['fill'](),_0x51e1e0['shado'+'wBlur']=-0x1*0xeef+-0xe*-0x6d+0x8f9*0x1);_0x51e1e0['fillS'+'tyle']=_0x4c146c?_0x56a3e0(0x25f):'rgba('+'255,2'+_0x56a3e0(0x395)+_0x56a3e0(0x508)+')',_0x51e1e0[_0x56a3e0(0x334)+'lign']=_0x56a3e0(0x17e)+'r',_0x51e1e0[_0x56a3e0(0x257)+'aseli'+'ne']=_0x56a3e0(0x26f)+'e',_0x51e1e0['font']=_0x3a6764[_0x56a3e0(0x59d)](_0x3a6764[_0x56a3e0(0x299)],Math[_0x56a3e0(0x1a5)]((-0x188c+-0x25b+0x1*0x1af3)*_0x437410))+_0x3a6764[_0x56a3e0(0x48d)],_0x51e1e0[_0x56a3e0(0x6a6)+_0x56a3e0(0x57e)](_0x2ced44,_0x3a6764[_0x56a3e0(0x59d)](_0x199196,_0xe321e4/(-0x243f+0x125c+0x11e5)),_0x3a6764[_0x56a3e0(0x687)](_0x4a9fc1+_0x205979/(0x1245+0x7e9+-0x1a2c),_0x3a51b5?(-0x2085+0x1033+-0x2f*-0x59)*_0x437410:-0x147b+0x15a9+-0x12e));if(_0x3a51b5){if(_0x3a6764[_0x56a3e0(0x2e5)]===_0x3a6764[_0x56a3e0(0x2e5)])_0x51e1e0[_0x56a3e0(0x291)]=_0x3a6764['kwkuz']('600\x20'+Math[_0x56a3e0(0x1a5)](_0x3a6764['OnoHo'](-0x8+-0x12e2*0x1+0x3f*0x4d,_0x437410)),_0x56a3e0(0x108)+_0x56a3e0(0x1c7)+_0x56a3e0(0x3d8)+'f,sys'+_0x56a3e0(0x668)+_0x56a3e0(0x3da)+'s-ser'+'if'),_0x51e1e0[_0x56a3e0(0x34b)+'tyle']=_0x4c146c?_0x3a6764[_0x56a3e0(0x366)]:_0x56a3e0(0x60b)+_0x56a3e0(0x24e)+_0x56a3e0(0x395)+'0,0.5'+'5)',_0x51e1e0[_0x56a3e0(0x6a6)+_0x56a3e0(0x57e)](_0x3a51b5,_0x3a6764['PrbWR'](_0x199196,_0xe321e4/(-0x1*0x2335+0x20e5+-0x2*-0x129)),_0x3a6764[_0x56a3e0(0x101)](_0x4a9fc1+_0x3a6764[_0x56a3e0(0x2d0)](_0x205979,0x9d4+0x7a2*-0x2+0x22*0x29),_0x3a6764[_0x56a3e0(0x11c)](0x223*0x1+0x2263+-0x247e,_0x437410)));else{var _0x3274aa=_0x39f1ca[_0x56a3e0(0x2f3)+_0x56a3e0(0x4b8)+'Eleme'+'nt'],_0x50c8b9=_0x3274aa&&_0x55b0fd[_0x56a3e0(0x1fd)](_0x3274aa['tagNa'+'me'],_0x55b0fd['ZGNoq'])?_0x3274aa:_0x1a4921[_0x56a3e0(0x136)]||_0x401b28[_0x56a3e0(0x127)+_0x56a3e0(0x5a4)+'ement'];if(_0x540fac[_0x56a3e0(0x22d)+_0x56a3e0(0x491)]!==_0x50c8b9)_0x50c8b9['appen'+_0x56a3e0(0x393)+'d'](_0x5153af);}}_0x51e1e0['resto'+'re']();}else{var _0x2fe31b=_0x9c1e7[_0x56a3e0(0x572)+'eElem'+'ent']('optio'+'n');_0x2fe31b['value']=_0x342010,_0x2fe31b[_0x56a3e0(0x23e)+'onten'+'t']=_0x7fc86f,_0x2a0df7['appen'+'dChil'+'d'](_0x2fe31b);}};_0x26ff2f('W',_0x42d516(0x5b1),_0x2479b1[_0x42d516(0x613)](_0x2479b1['NFVnh'](_0x5ace2a,_0x32c1ab),_0x4d4bf4),_0x1c74e1,_0x32c1ab,_0x32c1ab),_0x2479b1['iIwsp'](_0x26ff2f,'A',_0x42d516(0x445),_0x5ace2a,_0x2479b1['NFVnh'](_0x2479b1[_0x42d516(0x52c)](_0x1c74e1,_0x32c1ab),_0x4d4bf4),_0x32c1ab,_0x32c1ab),_0x26ff2f('S',_0x2479b1['BvxgB'],_0x2479b1[_0x42d516(0x475)](_0x5ace2a,_0x32c1ab)+_0x4d4bf4,_0x2479b1[_0x42d516(0x4d9)](_0x2479b1['LDqjE'](_0x1c74e1,_0x32c1ab),_0x4d4bf4),_0x32c1ab,_0x32c1ab),_0x26ff2f('D',_0x2479b1[_0x42d516(0x19b)],_0x5ace2a+(_0x32c1ab+_0x4d4bf4)*(0x1595+-0x1b*-0x1+-0x15ae),_0x1c74e1+_0x32c1ab+_0x4d4bf4,_0x32c1ab,_0x32c1ab);var _0x40e9b7=(_0xb640be-_0x4d4bf4)/(-0x2342+0x1*0x24f5+0x1b1*-0x1),_0x2a2709=_0x2479b1[_0x42d516(0x357)](_0x1c74e1,_0x2479b1[_0x42d516(0x1b9)](_0x32c1ab,_0x4d4bf4)*(-0x455*-0x1+-0x8a1+0x44e));_0x26ff2f(_0x2479b1[_0x42d516(0xf4)],_0x2479b1[_0x42d516(0x38e)],_0x5ace2a,_0x2a2709,_0x40e9b7,_0x32c1ab,_0x313af0[_0x42d516(0x3ed)]?_0x2479b1[_0x42d516(0x482)](_0x1c97c2(-0x926*-0x4+0x1*-0x833+-0x1c64),_0x2479b1[_0x42d516(0x148)]):''),_0x26ff2f(_0x42d516(0x5d4),_0x2479b1[_0x42d516(0x23a)],_0x2479b1[_0x42d516(0x482)](_0x2479b1[_0x42d516(0x52c)](_0x5ace2a,_0x40e9b7),_0x4d4bf4),_0x2a2709,_0x40e9b7,_0x32c1ab,_0x313af0[_0x42d516(0x3ed)]?_0x1c97c2(0x1*0x1a02+0x17e4+-0x31e3)+_0x42d516(0x12e):''),_0x26ff2f('','Space',_0x5ace2a,_0x2479b1[_0x42d516(0x203)](_0x2479b1['WPRjC'](_0x2a2709,_0x32c1ab),_0x4d4bf4),_0xb640be,_0x32c1ab*(-0x18b6+0x219f+-0x8e9+0.45));}}function _0x58a495(_0x4f113c){var _0x2f345f=_0x2e908b,_0x24626d=_0x42704c[_0x2f345f(0xe7)](_0x4f113c[_0x2f345f(0x3f1)],0x9c7+-0x1327*0x1+0x962*0x1),_0x550e4a=_0x4f113c[_0x2f345f(0x5a6)+'t']/(0xc80+-0x1c62+-0x1c4*-0x9),_0x53698b=Number(_0x313af0[_0x2f345f(0xc9)+'e'])||0x1*-0x148d+-0x3*0x141+0x5*0x4dd,_0x4275b8=/^#[0-9a-f]{6}$/i[_0x2f345f(0x5fa)](_0x313af0[_0x2f345f(0x544)+'or'])?_0x313af0[_0x2f345f(0x544)+'or']:'#ff6b'+'9d';_0x51e1e0[_0x2f345f(0x67f)](),_0x51e1e0['strok'+_0x2f345f(0x53e)+'e']=_0x4275b8,_0x51e1e0['fillS'+'tyle']=_0x4275b8,_0x51e1e0['lineW'+'idth']=Math[_0x2f345f(0x10e)](0x22e3+0x7ef+-0x2ad1+0.5,_0x42704c[_0x2f345f(0x5f0)](-0x1*0x1dcd+0x11ff*0x1+0xa8*0x12,_0x53698b)),_0x51e1e0['shado'+'wColo'+'r']=_0x4275b8,_0x51e1e0[_0x2f345f(0x1fe)+'wBlur']=-0x135b+0x3e5+0x1*0xf7c;var _0x62aad=(0x6c2*-0x5+0x1*-0x2681+0x21*0x231)*_0x53698b,_0x532921=_0x42704c[_0x2f345f(0x5f0)](0x2d9*0xd+-0x1d95+-0x768,_0x53698b);_0x51e1e0[_0x2f345f(0x2d7)+_0x2f345f(0x1a0)](),_0x51e1e0['moveT'+'o'](_0x24626d-_0x62aad-_0x532921,_0x550e4a),_0x51e1e0[_0x2f345f(0x274)+'o'](_0x24626d-_0x62aad,_0x550e4a),_0x51e1e0['moveT'+'o'](_0x24626d+_0x62aad,_0x550e4a),_0x51e1e0[_0x2f345f(0x274)+'o'](_0x24626d+_0x62aad+_0x532921,_0x550e4a),_0x51e1e0[_0x2f345f(0x54b)+'o'](_0x24626d,_0x550e4a-_0x62aad-_0x532921),_0x51e1e0['lineT'+'o'](_0x24626d,_0x42704c['Hmeiq'](_0x550e4a,_0x62aad)),_0x51e1e0[_0x2f345f(0x54b)+'o'](_0x24626d,_0x550e4a+_0x62aad),_0x51e1e0['lineT'+'o'](_0x24626d,_0x42704c[_0x2f345f(0x521)](_0x550e4a,_0x62aad)+_0x532921),_0x51e1e0['strok'+'e'](),_0x51e1e0['begin'+'Path'](),_0x51e1e0[_0x2f345f(0x5aa)](_0x24626d,_0x550e4a,(-0x54b+-0x1016+0x1562+0.6000000000000001)*_0x53698b,0xd33*-0x1+-0x1*-0x553+0x30*0x2a,Math['PI']*(-0x255f+-0x61*-0x47+0x2*0x53d)),_0x51e1e0[_0x2f345f(0x53b)](),_0x51e1e0[_0x2f345f(0x60a)+'re']();}function _0x1c1fc4(_0xd46a55){var _0x55f15c=_0x2e908b;_0x51e1e0[_0x55f15c(0x67f)](),_0x51e1e0['font']='600\x201'+'2px\x20u'+'i-mon'+_0x55f15c(0x39e)+'e,mon'+'ospac'+'e',_0x51e1e0['textA'+'lign']=_0x55f15c(0x5f5),_0x51e1e0['textB'+_0x55f15c(0xff)+'ne']=_0x55f15c(0x509);var _0x20f1eb=-0x174+-0x21e0*-0x1+-0xc*0x2b0,_0x35992c=0x2d0+0x1b6d+-0x1e31,_0x1c716b=(_0x44ade5,_0x8bbbcf)=>{var _0x5604ea=_0x55f15c;_0x5604ea(0x591)!==_0x2479b1[_0x5604ea(0x54e)]?_0x4cd24a['enabl'+'ed']=!!_0x429d58:(_0x51e1e0['fillS'+_0x5604ea(0xc8)]=_0x8bbbcf||_0x2479b1[_0x5604ea(0x5a3)],_0x51e1e0[_0x5604ea(0x6a6)+_0x5604ea(0x57e)](_0x44ade5,_0x35992c,_0x20f1eb),_0x20f1eb+=0xe*0xf7+0x1687+-0x23f9);};_0x2479b1['gfmdE'](_0x1c716b,'SAKUR'+_0x55f15c(0x50a)+_0x55f15c(0x55d)+'1',_0x55f15c(0x28f)+'9d');if(_0x313af0['fps'])_0x1c716b(_0x2479b1[_0x55f15c(0xd1)](_0x4a3368,_0x2479b1['rKmKp']));if(!_0x1475a8[_0x55f15c(0x435)+_0x55f15c(0x215)])_0x2479b1[_0x55f15c(0x67b)](_0x1c716b,_0x2479b1[_0x55f15c(0x447)],_0x55f15c(0x60b)+_0x55f15c(0x467)+_0x55f15c(0x205)+_0x55f15c(0x461)+')');_0x51e1e0[_0x55f15c(0x60a)+'re']();}function _0x33c9da(){var _0x347944=_0x2e908b;requestAnimationFrame(_0x33c9da),_0x44664e++;var _0x1985e9=performance[_0x347944(0x267)]();_0x2479b1[_0x347944(0x18e)](_0x2479b1['GstTj'](_0x1985e9,_0x1039f8),-0x1*0x2485+-0xf96+0x360f)&&(_0x4a3368=Math['round'](_0x44664e*(0x4d1+0x24b7+0x1*-0x25a0)/_0x2479b1[_0x347944(0x3ee)](_0x1985e9,_0x1039f8)),_0x44664e=-0x217c+-0x22d3+0x444f,_0x1039f8=_0x1985e9);_0x162fd1(),_0x6735eb(),_0x51e1e0['clear'+_0x347944(0x216)](0x2f*-0xd3+0x3fb+-0x3*-0xb96,-0xe8b+-0x614*0x5+0x2cef,_0xf2ce10['w'],_0xf2ce10['h']);var _0x1cd225={'left':0x0,'top':0x0,'right':_0xf2ce10['w'],'bottom':_0xf2ce10['h'],'width':_0xf2ce10['w'],'height':_0xf2ce10['h']};if(_0x313af0['cross'+'hair'])_0x58a495(_0x1cd225);if(_0x313af0[_0x347944(0x13e)+_0x347944(0x1fa)])_0x2479b1['rPDgz'](_0x56f747,_0x1cd225);_0x2479b1[_0x347944(0x529)](_0x1c1fc4,_0x1cd225);}var _0x3b9de9=document[_0x2e908b(0x572)+_0x2e908b(0x50c)+_0x2e908b(0x269)]('div');_0x3b9de9['id']='sakur'+_0x2e908b(0x4ca),_0x3b9de9['style']['cssTe'+'xt']=_0x2e908b(0x4a0)+_0x2e908b(0x2b5)+'ixed;'+'inset'+':0;z-'+_0x2e908b(0x551)+':2147'+'48364'+_0x2e908b(0x42d)+_0x2e908b(0x532)+'event'+'s:non'+'e;';var _0x29c9de=_0x3b9de9['attac'+_0x2e908b(0x3c6)+'ow']({'mode':_0x42704c[_0x2e908b(0x1a1)]});(document['body']||document[_0x2e908b(0x127)+_0x2e908b(0x5a4)+'ement'])[_0x2e908b(0x4d2)+_0x2e908b(0x393)+'d'](_0x3b9de9);var _0x55cf39=![],_0x284445={};try{_0x284445=JSON[_0x2e908b(0x4e2)](localStorage[_0x2e908b(0x5d7)+'em'](_0x42704c['vaoMf'])||'{}');}catch(_0x301d77){}function _0x22b644(){var _0x32db27=_0x2e908b,_0x286d55={'qcdvB':_0x32db27(0x1b7)+'b','ZtSUa':function(_0x146aa3,_0x58ff81){return _0x42704c['DHsLx'](_0x146aa3,_0x58ff81);},'swXqP':_0x32db27(0x155)+'l>'};if(_0x32db27(0x452)===_0x32db27(0x452))try{localStorage[_0x32db27(0x102)+'em'](_0x32db27(0x26e)+'a.kou'+'r.ui.'+'v1',JSON[_0x32db27(0x3ec)+_0x32db27(0x4b6)](_0x284445));}catch(_0x217c93){}else{var _0x4981e3=(_0x32db27(0x45e)+'|2|6|'+_0x32db27(0x1bc))['split']('|'),_0x1c0433=0x101*-0x9+0x6d9*0x5+-0x1934*0x1;while(!![]){switch(_0x4981e3[_0x1c0433++]){case'0':_0x1e1ef3[_0x32db27(0x330)]=_0x32db27(0x557)+'n';continue;case'1':var _0x1e1ef3=_0x266b74['creat'+_0x32db27(0x50c)+'ent'](_0x32db27(0x557)+'n');continue;case'2':_0x1e1ef3[_0x32db27(0x4cd)]=_0x104bd5[_0x32db27(0x135)];continue;case'3':_0x16e92b['set'](_0x219911['id'],_0x1e1ef3);continue;case'4':_0x3db8ce[_0x32db27(0x4d2)+'dChil'+'d'](_0x1e1ef3);continue;case'5':_0x1e1ef3[_0x32db27(0x2d2)+'Name']=_0x286d55[_0x32db27(0x139)];continue;case'6':_0x1e1ef3['inner'+_0x32db27(0x62e)]=_0x286d55[_0x32db27(0x409)](_0x286d55['swXqP'],_0x46eec9['label'])+('</sma'+'ll>');continue;case'7':_0x1e1ef3[_0x32db27(0x28d)+'ck']=(_0x1f31e9=>()=>_0x227bdb(_0x1f31e9))(_0x4e2f15['id']);continue;}break;}}}function _0x4e60c1(_0x33a18e,_0x3ba88d){var _0x41311a=_0x2e908b,_0x1af603=document[_0x41311a(0x572)+_0x41311a(0x50c)+'ent'](_0x41311a(0x557)+'n');return _0x1af603[_0x41311a(0x330)]=_0x2479b1[_0x41311a(0x43e)],_0x1af603[_0x41311a(0x2d2)+_0x41311a(0x61a)]=_0x2479b1[_0x41311a(0x60d)],_0x1af603['setAt'+_0x41311a(0x4d1)+'te']('role',_0x2479b1[_0x41311a(0x1cc)]),_0x1af603[_0x41311a(0x290)+_0x41311a(0x4d1)+'te'](_0x2479b1['JYzpr'],String(!!_0x33a18e)),_0x1af603['oncli'+'ck']=_0x2b3da1=>{var _0x466d6d=_0x41311a;_0x2b3da1['stopP'+_0x466d6d(0x430)+'ation']();var _0x164078=_0x1af603[_0x466d6d(0x562)+_0x466d6d(0x4d1)+'te']('aria-'+_0x466d6d(0x386)+'ed')!==_0x2479b1['zFkud'];_0x1af603[_0x466d6d(0x290)+'tribu'+'te']('aria-'+_0x466d6d(0x386)+'ed',String(_0x164078)),_0x2479b1['rPDgz'](_0x3ba88d,_0x164078);},_0x1af603;}function _0x1c59f2(_0x109051,_0x152374,_0x13a1b8,_0x41a764,_0x44c820){var _0x1b3208=_0x2e908b,_0x1101e8=('12|4|'+_0x1b3208(0x425)+_0x1b3208(0x1c1)+'14|13'+_0x1b3208(0x428)+'|0|15'+'|17|1'+_0x1b3208(0x497)+'3|9')['split']('|'),_0x4367e0=-0xb*0x332+-0x40f*0x8+0x439e;while(!![]){switch(_0x1101e8[_0x4367e0++]){case'0':var _0xc9df53=document[_0x1b3208(0x572)+_0x1b3208(0x50c)+_0x1b3208(0x269)](_0x1b3208(0x505));continue;case'1':var _0x589f3a=()=>{var _0x381289=_0x1b3208;_0xc9df53[_0x381289(0x23e)+_0x381289(0x4f6)+'t']=_0x306d7e[_0x381289(0x29e)](String,_0xa9b700[_0x381289(0x3e6)]),_0x57373e[_0x381289(0x549)]['setPr'+'opert'+'y'](_0x306d7e[_0x381289(0x159)],_0x306d7e['VLzJL'](_0xa9b700[_0x381289(0x3e6)]-_0x152374,_0x13a1b8-_0x152374)*(0x16f0+0x305*0xc+-0x3ac8)+'%');};continue;case'2':_0xa9b700[_0x1b3208(0x2d2)+'Name']=_0x2479b1[_0x1b3208(0x601)];continue;case'3':_0x57373e[_0x1b3208(0x4d2)+'d'](_0xa9b700,_0xc9df53);continue;case'4':var _0x57373e=document['creat'+'eElem'+_0x1b3208(0x269)](_0x2479b1['ddiFw']);continue;case'5':_0xa9b700['step']=_0x41a764;continue;case'6':_0x2479b1['mKtNt'](_0x589f3a);continue;case'7':_0xa9b700[_0x1b3208(0x2e6)+'ut']=()=>{var _0x573acb=_0x1b3208;_0x2479b1[_0x573acb(0x38b)](_0x589f3a),_0x2479b1[_0x573acb(0x1d8)](_0x44c820,Number(_0xa9b700['value']));};continue;case'8':_0xa9b700['type']=_0x2479b1['vRGFC'];continue;case'9':return _0x57373e;case'10':_0xa9b700['value']=_0x109051;continue;case'11':var _0xa9b700=document[_0x1b3208(0x572)+_0x1b3208(0x50c)+_0x1b3208(0x269)]('input');continue;case'12':var _0x306d7e={'XBqHT':function(_0x5b6da0,_0x48f916){return _0x5b6da0(_0x48f916);},'UYqTw':_0x2479b1[_0x1b3208(0x2f0)],'VLzJL':function(_0x50090c,_0x49c16e){return _0x50090c/_0x49c16e;}};continue;case'13':_0xa9b700['max']=_0x13a1b8;continue;case'14':_0xa9b700[_0x1b3208(0x636)]=_0x152374;continue;case'15':_0xc9df53[_0x1b3208(0x2d2)+_0x1b3208(0x61a)]=_0x2479b1[_0x1b3208(0x68b)];continue;case'16':_0x57373e['class'+'Name']=_0x2479b1[_0x1b3208(0x2f8)];continue;case'17':_0xc9df53[_0x1b3208(0x23e)+'onten'+'t']=String(_0x109051);continue;}break;}}function _0x3e45b7(_0x4c94a1,_0x290dea){var _0x4935fb=_0x2e908b,_0x5a15c8=document['creat'+_0x4935fb(0x50c)+_0x4935fb(0x269)]('input');return _0x5a15c8[_0x4935fb(0x330)]='color',_0x5a15c8['class'+_0x4935fb(0x61a)]=_0x42704c[_0x4935fb(0x41e)],_0x5a15c8[_0x4935fb(0x3e6)]=/^#[0-9a-f]{6}$/i[_0x4935fb(0x5fa)](_0x4c94a1)?_0x4c94a1:_0x42704c['mlbMY'],_0x5a15c8['oninp'+'ut']=()=>_0x290dea(_0x5a15c8[_0x4935fb(0x3e6)]),_0x5a15c8;}function _0x2a999b(_0x260cd3,_0x2de07e,_0x654593){var _0x3b6e76=_0x2e908b,_0x294095=document[_0x3b6e76(0x572)+_0x3b6e76(0x50c)+_0x3b6e76(0x269)]('selec'+'t');_0x294095['class'+_0x3b6e76(0x61a)]=_0x42704c['UFkuY'];for(var [_0x30cd5c,_0x1f0b23]of _0x2de07e){var _0x6b0cdc=document['creat'+_0x3b6e76(0x50c)+_0x3b6e76(0x269)](_0x3b6e76(0x5e2)+'n');_0x6b0cdc['value']=_0x30cd5c,_0x6b0cdc['textC'+'onten'+'t']=_0x1f0b23,_0x294095['appen'+_0x3b6e76(0x393)+'d'](_0x6b0cdc);}return _0x294095['value']=_0x260cd3,_0x294095[_0x3b6e76(0x1d0)+_0x3b6e76(0xd7)]=()=>_0x654593(_0x294095['value']),_0x294095;}function _0x483b9f(_0x1d7e76,_0x555918){var _0x519c80=_0x2e908b,_0x53c53f=document['creat'+'eElem'+'ent'](_0x42704c[_0x519c80(0x21e)]);return _0x53c53f['type']=_0x42704c[_0x519c80(0x21e)],_0x53c53f['class'+_0x519c80(0x61a)]=_0x42704c['CWMNT'],_0x53c53f[_0x519c80(0x23e)+_0x519c80(0x4f6)+'t']=_0x1d7e76,_0x53c53f['oncli'+'ck']=_0x5f3fec=>{var _0x203d3e=_0x519c80,_0x51bf44={'WVffs':_0x2479b1[_0x203d3e(0x525)],'gWQNu':function(_0x269132,_0x29ad1b,_0x400fac,_0x49774e,_0x2c8722){return _0x269132(_0x29ad1b,_0x400fac,_0x49774e,_0x2c8722);}};_0x2479b1['NTwKA'](_0x2479b1[_0x203d3e(0x207)],_0x203d3e(0x5ed))?(_0x38550d(_0xa2418e,0x1261+0x3*0x55b+-0x18f*0x16,'f32',_0x504256),_0x26f38c(_0x2c1715,0xcf+0x4de+-0x581,_0x203d3e(0x1f0),_0x264ba2),_0x1c7926(_0x356388,-0xd2e+-0x1a1d+0x277b,_0x51bf44['WVffs'],_0x2dc792),_0x51bf44['gWQNu'](_0x114af4,_0x2bc5e9,0x1813*-0x1+0x1a54+0x20d*-0x1,_0x51bf44[_0x203d3e(0x648)],_0x1df903),_0x3f6008(_0x900d25,-0xdd+-0x77*0x43+0x201e,_0x51bf44[_0x203d3e(0x648)],_0x435db9),_0x48ff76(_0x598a3e,0x766+0x2108+-0x284e,_0x51bf44['WVffs'],_0x46f364)):(_0x5f3fec['stopP'+_0x203d3e(0x430)+'ation'](),_0x555918());},_0x53c53f;}function _0x21ad0b(_0x1ea48f,_0x56e94a,_0x2bd335){var _0x4f690b=_0x2e908b,_0x1ab5ed=document['creat'+'eElem'+'ent'](_0x2479b1[_0x4f690b(0x4aa)]);_0x1ab5ed['class'+_0x4f690b(0x61a)]=_0x4f690b(0x2be)+'l';var _0x168447=document[_0x4f690b(0x572)+_0x4f690b(0x50c)+_0x4f690b(0x269)](_0x4f690b(0x505));_0x168447[_0x4f690b(0x2d2)+'Name']='sk-la'+_0x4f690b(0x21b),_0x168447['textC'+'onten'+'t']=_0x1ea48f;if(_0x56e94a){if(_0x2479b1['NTwKA'](_0x2479b1[_0x4f690b(0x27c)],_0x4f690b(0x575)))_0x332cec['setIt'+'em']('sakur'+_0x4f690b(0x621)+_0x4f690b(0x408),_0x3400b5[_0x4f690b(0x3ec)+'gify'](_0x540cf6));else{var _0x282d10=document[_0x4f690b(0x572)+_0x4f690b(0x50c)+_0x4f690b(0x269)]('small');_0x282d10['class'+_0x4f690b(0x61a)]='sk-hi'+'nt',_0x282d10[_0x4f690b(0x23e)+_0x4f690b(0x4f6)+'t']=_0x56e94a,_0x168447['appen'+_0x4f690b(0x393)+'d'](_0x282d10);}}return _0x1ab5ed[_0x4f690b(0x4d2)+'d'](_0x168447,_0x2bd335),_0x1ab5ed;}function _0xac0d62(_0x252528,_0x43cfd1){var _0x466da9=_0x2e908b,_0x21be48=document[_0x466da9(0x572)+_0x466da9(0x50c)+'ent'](_0x466da9(0x168));return _0x21be48['class'+'Name']=_0x466da9(0x66e)+'te'+(_0x43cfd1?_0x2479b1[_0x466da9(0x462)]:''),_0x21be48[_0x466da9(0x23e)+_0x466da9(0x4f6)+'t']=_0x252528,_0x21be48;}function _0x3ef5c9(_0x3e571d,_0x1f804c,_0x5bb72f,_0x3b4c92,_0x2d83e9){var _0x56b097=_0x2e908b;if(_0x2479b1[_0x56b097(0x4be)](_0x56b097(0x3e9),'WZPDP')){var _0x43ddf9=document[_0x56b097(0x572)+'eElem'+'ent'](_0x2479b1['ddiFw']);_0x43ddf9['class'+'Name']=_0x2479b1[_0x56b097(0x3ac)]+(_0x5bb72f?_0x56b097(0x5ac):'');var _0x56bfce=document[_0x56b097(0x572)+_0x56b097(0x50c)+_0x56b097(0x269)](_0x56b097(0x168));_0x56bfce['class'+_0x56b097(0x61a)]=_0x2479b1[_0x56b097(0x260)];var _0x1c7d81=document['creat'+'eElem'+'ent'](_0x2479b1['ddiFw']);_0x1c7d81['class'+_0x56b097(0x61a)]=_0x2479b1[_0x56b097(0x66a)];var _0x5c5027=document[_0x56b097(0x572)+'eElem'+_0x56b097(0x269)](_0x56b097(0x628)+'g');_0x5c5027[_0x56b097(0x23e)+_0x56b097(0x4f6)+'t']=_0x3e571d,_0x1c7d81[_0x56b097(0x4d2)+_0x56b097(0x393)+'d'](_0x5c5027);if(_0x3b4c92){if('oMLhn'===_0x56b097(0x36e)){var _0x9b0f52=_0x4e60c1(_0x5bb72f,_0x324bea=>{var _0x86e46a=_0x56b097,_0x89f7a9={'rhukw':function(_0x2985be,_0x58cf09){return _0x2985be(_0x58cf09);}};if(_0x2479b1[_0x86e46a(0x2c1)](_0x2479b1['zeBNk'],_0x86e46a(0x61e))){_0x595337[_0x86e46a(0x454)+_0x86e46a(0x430)+'ation']();var _0x14b983=_0x10e928['getAt'+_0x86e46a(0x4d1)+'te']('aria-'+_0x86e46a(0x386)+'ed')!==_0x86e46a(0x1d1);_0x53d6be[_0x86e46a(0x290)+'tribu'+'te'](_0x86e46a(0x5ea)+_0x86e46a(0x386)+'ed',_0x1d2a8a(_0x14b983)),_0x89f7a9['rhukw'](_0x56c48f,_0x14b983);}else _0x43ddf9[_0x86e46a(0x2d2)+_0x86e46a(0x649)][_0x86e46a(0x4cc)+'e']('on',_0x324bea),_0x2479b1[_0x86e46a(0x426)](_0x3b4c92,_0x324bea);});_0x56bfce[_0x56b097(0x4d2)+'d'](_0x1c7d81,_0x9b0f52);}else _0x4324bf['hookG'+'od']=_0x2ee8c3,_0x149995();}else _0x2479b1[_0x56b097(0x4cf)](_0x2479b1[_0x56b097(0x243)],_0x2479b1['OWCAk'])?(_0x339a68['ksSca'+'le']=_0x224892,_0x1dbf5e()):_0x56bfce['appen'+_0x56b097(0x393)+'d'](_0x1c7d81);_0x43ddf9[_0x56b097(0x4d2)+'dChil'+'d'](_0x56bfce);if(_0x2d83e9&&_0x2d83e9['lengt'+'h']){if(_0x2479b1['KeErF'](_0x2479b1['QviIS'],_0x56b097(0x643))){_0x20d05['gameL'+_0x56b097(0x215)]=!!_0x185f6a[_0x56b097(0x3f7)+_0x56b097(0x3e8)+'nce'];try{var _0x17e4c1=0x2*-0xda0+0x4a5+0x9*0x283;for(var _0x1a5016 in _0x2607c6){if(_0xd321ab[_0x1a5016]&&_0x2e6669[_0x1a5016]['appli'+'ed'])_0x17e4c1++;}_0x504bae['hooks'+'Ok']=_0x17e4c1;}catch(_0x45761d){}}else{var _0x3d270b=document[_0x56b097(0x572)+_0x56b097(0x50c)+'ent'](_0x56b097(0x168));_0x3d270b['class'+_0x56b097(0x61a)]='sk-mb'+_0x56b097(0x273);var _0x5e52b1=document[_0x56b097(0x572)+'eElem'+_0x56b097(0x269)](_0x2479b1[_0x56b097(0x4aa)]);_0x5e52b1[_0x56b097(0x2d2)+_0x56b097(0x61a)]='sk-md'+'esc',_0x5e52b1['textC'+_0x56b097(0x4f6)+'t']=_0x1f804c,_0x3d270b[_0x56b097(0x4d2)+_0x56b097(0x393)+'d'](_0x5e52b1);for(var _0x544a9a of _0x2d83e9)_0x3d270b['appen'+'dChil'+'d'](_0x544a9a);_0x43ddf9[_0x56b097(0x4d2)+_0x56b097(0x393)+'d'](_0x3d270b);}}return _0x43ddf9;}else _0x1d8d8a(_0x3c0643,_0x907c97,_0x57e8cb,'movem'+'ents');}var _0x4eaa5e=[{'id':'comba'+'t','label':'Comba'+'t'},{'id':_0x2e908b(0x531),'label':_0x42704c[_0x2e908b(0x406)]},{'id':'visua'+'l','label':_0x2e908b(0x61f)+'l'},{'id':_0x42704c['NYEBD'],'label':_0x2e908b(0x2ff)},{'id':'safe','label':_0x42704c['bRGBJ']}];function _0x4393bf(){var _0x654765=_0x2e908b,_0x4e7cb4={'Qrdar':_0x654765(0x32e)+'io_','xhGzw':_0x2479b1[_0x654765(0x323)]},_0x347a4a=_0x1475a8['safeM'+_0x654765(0x3c1)]?'SAFE\x20'+_0x654765(0x1e4)+'—\x20ove'+_0x654765(0xf5)+_0x654765(0x28a)+_0x654765(0xcb)+_0x654765(0x3a0)+_0x654765(0x657)+_0x654765(0x439)+_0x654765(0xdc)+')':_0x1475a8[_0x654765(0xf8)]?_0x2479b1['boDlK'](_0x2479b1[_0x654765(0x613)](_0x2479b1['fFbfJ'](_0x2479b1[_0x654765(0x63e)](_0x654765(0x52b)+_0x654765(0x3be)+'\x20'+(_0x1475a8['hooks'+_0x654765(0x66b)]?_0x2479b1[_0x654765(0x1a6)](_0x1475a8[_0x654765(0x678)+'Ok']+'/',_0x1475a8['hooks'+_0x654765(0x66b)])+('\x20hook'+'s'):_0x654765(0x33a)+'ks\x20ar'+_0x654765(0x166)+_0x654765(0x17c)+'ff)'),'\x20|\x20ga'+_0x654765(0x2eb))+(_0x1475a8['gameL'+'oaded']?_0x654765(0x33d)+'d':_0x654765(0x247)+'ng'),_0x2479b1['gGZNn']),_0x1475a8[_0x654765(0x20f)+_0x654765(0x45c)]?_0x654765(0x62f):_0x2479b1[_0x654765(0x3d0)])+('\x20|\x20mo'+'vemen'+'t\x20'),_0x1475a8['movem'+'ents']?_0x2479b1['HqxhN']:_0x654765(0x45d)):_0x654765(0x52b)+_0x654765(0x3ff)+_0x654765(0x263)+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x654765(0x500)+'he\x20us'+_0x654765(0x137)+'ipt)';if(_0x1475a8['lastE'+_0x654765(0x345)])_0x347a4a+=_0x2479b1['vTQuV']('\x20|\x20ER'+_0x654765(0x4c0),_0x1475a8[_0x654765(0x40e)+_0x654765(0x345)]);return _0x3ef5c9('Statu'+'s',_0x347a4a,_0x1475a8[_0x654765(0xf8)],null,[_0x2479b1['feaxR'](_0x21ad0b,_0x654765(0x126)+'PS\x20un'+_0x654765(0x355),'calls'+_0x654765(0x5c5)+_0x654765(0x499)+_0x654765(0x692)+'plica'+_0x654765(0x194)+'set_t'+'arget'+_0x654765(0x10a)+_0x654765(0x240),_0x483b9f(_0x654765(0x5dd),()=>{var _0x105df5=_0x654765;try{if('FVpMD'!==_0x4e7cb4['xhGzw']){if(_0x15b444)_0x15b444['call']('Unity'+_0x105df5(0x186)+'e.App'+'licat'+_0x105df5(0x1b1),_0x105df5(0x2b1)+_0x105df5(0x313)+_0x105df5(0x10a)+'Rate',[0xb14*0x2+-0x4f4+-0x1044]);}else{if(_0x3eeeae[_0x23b6c8]['id']&&_0x33e169[_0x4c5a13]['id'][_0x105df5(0x551)+'Of'](_0x4e7cb4[_0x105df5(0x594)])===-0x53*-0x29+-0x78f+-0x5bc)_0x35cad2[_0x3529ec][_0x105df5(0x549)][_0x105df5(0x1e6)+'ay']=_0x105df5(0x45d);}}catch(_0x5ab0dc){}}))]);}function _0x5622ed(_0x36dede){var _0x1e5e3b=_0x2e908b,_0x13b8e6={'kdVmY':_0x42704c[_0x1e5e3b(0x1df)],'vgmzx':function(_0x2568ec){var _0x4e104f=_0x1e5e3b;return _0x42704c[_0x4e104f(0x23d)](_0x2568ec);},'ikUaD':function(_0x38d7fa,_0x2151e6){var _0x483002=_0x1e5e3b;return _0x42704c[_0x483002(0x1d3)](_0x38d7fa,_0x2151e6);},'ojgWr':_0x42704c[_0x1e5e3b(0x446)],'bsWaa':function(_0x455345,_0x471982){return _0x455345<_0x471982;},'fLoXc':_0x42704c[_0x1e5e3b(0x279)],'amshC':_0x1e5e3b(0x343),'ksILb':function(_0x3c6227,_0x534246,_0xda7866,_0x905d71,_0x45dc19){return _0x3c6227(_0x534246,_0xda7866,_0x905d71,_0x45dc19);},'KBodt':_0x1e5e3b(0x362),'AysCh':_0x1e5e3b(0x3bf),'Yefjk':_0x1e5e3b(0x312)+'h','amrpd':function(_0x4ac6b0,_0x30797a){return _0x4ac6b0!==_0x30797a;},'HmEpu':function(_0x78e5fe,_0x195fed){return _0x78e5fe===_0x195fed;},'MSHTc':_0x1e5e3b(0x2ad),'tkcHn':_0x1e5e3b(0x539)};if(_0x1e5e3b(0x410)!==_0x1e5e3b(0x5ee)){if(_0x42704c[_0x1e5e3b(0x287)](_0x36dede,_0x1e5e3b(0x646)+'t'))return[_0x4393bf(),_0x42704c[_0x1e5e3b(0x43a)](_0x3ef5c9,_0x1e5e3b(0x603)+_0x1e5e3b(0x3c1),_0x1e5e3b(0x16b)+'s\x20OHe'+'alth.'+'Initi'+_0x1e5e3b(0x629)+_0x1e5e3b(0x401)+_0x1e5e3b(0x1c3)+_0x1e5e3b(0x234)+_0x1e5e3b(0x4ff)+_0x1e5e3b(0x2af)+_0x1e5e3b(0x622)+'\x20so\x20n'+_0x1e5e3b(0x17a)+_0x1e5e3b(0xeb)+_0x1e5e3b(0x62b)+_0x1e5e3b(0x43b)+'ill\x20y'+'ou.',_0x313af0[_0x1e5e3b(0x4d8)],_0x4391e1=>{var _0x5dded3=_0x1e5e3b;_0x313af0[_0x5dded3(0x4d8)]=_0x4391e1,_0x484a36(),_0x3128d6(_0x5dded3(0x4d8),_0x4391e1),_0x2479b1[_0x5dded3(0x67b)](_0x3128d6,_0x5dded3(0x5c3)+'e',_0x4391e1);},[]),_0x3ef5c9(_0x42704c['UPVDv'],_0x1e5e3b(0x4b4)+'\x20Reco'+'ilMot'+_0x1e5e3b(0x237)+_0x1e5e3b(0x627)+_0x1e5e3b(0x5e8)+_0x1e5e3b(0x581)+_0x1e5e3b(0x317)+_0x1e5e3b(0x276)+'\x20neve'+'r\x20adv'+_0x1e5e3b(0x244),_0x313af0[_0x1e5e3b(0x174)+'oil'],_0x4f6ee0=>{var _0x224cb4=_0x1e5e3b;_0x313af0[_0x224cb4(0x174)+'oil']=_0x4f6ee0,_0x484a36(),_0x3128d6(_0x13b8e6[_0x224cb4(0x1d7)],_0x4f6ee0);},[]),_0x3ef5c9(_0x1e5e3b(0xfa)+_0x1e5e3b(0x3dc),_0x42704c[_0x1e5e3b(0xe9)],_0x313af0[_0x1e5e3b(0x300)+_0x1e5e3b(0x360)],_0x928770=>{var _0x438742=_0x1e5e3b;_0x313af0[_0x438742(0x300)+'ead']=_0x928770,_0x484a36();},[]),_0x42704c['gXKfq'](_0x3ef5c9,'Rapid'+_0x1e5e3b(0x2a0)+_0x1e5e3b(0x262)+']','Scale'+'s\x20Ove'+'rtide'+'Weapo'+_0x1e5e3b(0x14c)+_0x1e5e3b(0x3df)+'\x20to\x201'+'0%.\x20S'+_0x1e5e3b(0x3a9)+_0x1e5e3b(0x518)+_0x1e5e3b(0x698)+_0x1e5e3b(0x40f)+_0x1e5e3b(0x392)+'s.',_0x313af0[_0x1e5e3b(0x293)+'Exp'],_0x3e886a=>{var _0xc884d2=_0x1e5e3b;_0x313af0[_0xc884d2(0x293)+_0xc884d2(0x2ae)]=_0x3e886a,_0x484a36();},[]),_0x42704c[_0x1e5e3b(0x43a)](_0x3ef5c9,_0x42704c[_0x1e5e3b(0x5b4)],_0x1e5e3b(0x547)+_0x1e5e3b(0x306)+_0x1e5e3b(0x189)+'tideW'+'eapon'+'\x20dama'+_0x1e5e3b(0x249)+_0x1e5e3b(0x4bd)+'le\x20if'+'\x20the\x20'+_0x1e5e3b(0x30b)+_0x1e5e3b(0x6a8)+_0x1e5e3b(0xfc)+'s.',_0x313af0[_0x1e5e3b(0x5a8)+_0x1e5e3b(0x573)],_0x144fcc=>{var _0xa424ea=_0x1e5e3b;_0x313af0[_0xa424ea(0x5a8)+'eExp']=_0x144fcc,_0x484a36();},[_0x21ad0b(_0x42704c['bFVpd'],null,_0x1c59f2(_0x313af0[_0x1e5e3b(0x5a8)+_0x1e5e3b(0x37b)+'e'],0x1eb7+-0x42b+-0x1a82,0x26a4+-0x2585+0xd5,0x413*-0x1+-0x1206+0x161e,_0x22e655=>{var _0x18c127=_0x1e5e3b;if('YOzoC'==='soTOq'){_0x369e11[_0x18c127(0x27e)](_0x58cdc8[_0x18c127(0x267)]());if(_0x482bc3[_0x18c127(0x232)+'h']>-0x1ac4+-0x3eb*0x6+0x326e)_0x507560[_0x18c127(0x4a6)]();}else _0x313af0[_0x18c127(0x5a8)+_0x18c127(0x37b)+'e']=_0x22e655,_0x13b8e6['vgmzx'](_0x484a36);}))]),_0x42704c['gXKfq'](_0x3ef5c9,_0x42704c['vFyZo'],_0x1e5e3b(0x683)+_0x1e5e3b(0x30f)+_0x1e5e3b(0x29a)+'pon\x27s'+_0x1e5e3b(0x146)+_0x1e5e3b(0x571)+_0x1e5e3b(0x233)+_0x1e5e3b(0x1c4)+_0x1e5e3b(0x402)+'\x20200m'+'s.',_0x313af0['infAm'+_0x1e5e3b(0x42c)],_0x3d3e37=>{var _0x4f43fb=_0x1e5e3b;_0x313af0[_0x4f43fb(0x4df)+'moExp']=_0x3d3e37,_0x484a36();},[_0xac0d62('If\x20re'+'loads'+_0x1e5e3b(0x23f)+'l\x20dra'+'in,\x20t'+_0x1e5e3b(0x4f9)+'creme'+'nt\x20ha'+_0x1e5e3b(0x19c)+_0x1e5e3b(0x51c)+_0x1e5e3b(0x358)+'.')])];if(_0x42704c[_0x1e5e3b(0x1d3)](_0x36dede,_0x1e5e3b(0x531))){if(_0x1e5e3b(0x1ee)!=='LnfVP')_0x5abec0[_0x1e5e3b(0x34a)](_0xcd501d,null);else return[_0x3ef5c9('Speed',_0x42704c['IKaQX'],_0x42704c['NViet'](_0x313af0[_0x1e5e3b(0x1bb)+_0x1e5e3b(0x5c1)],-0x1*-0x1005+-0xb*-0x29+0x2e6*-0x6),null,[_0x21ad0b(_0x42704c['nbITR'],_0x42704c['SPsHa'],_0x42704c[_0x1e5e3b(0x43a)](_0x1c59f2,_0x313af0[_0x1e5e3b(0x1bb)+'Pct'],0x1256+-0x34c*0x1+-0xed8,-0xec8+-0x2*0xb4b+0x1*0x268a,-0x15ea+0x18d6+0x1*-0x2e7,_0x1ee3aa=>{var _0x417ed7=_0x1e5e3b,_0x54a3af={'ZJbQR':_0x417ed7(0x595)+_0x417ed7(0x220),'hzeMY':function(_0x39db7f){return _0x2479b1['SeZTM'](_0x39db7f);},'bMoGV':_0x417ed7(0x505)};if(_0x417ed7(0x4de)!=='kzmBD')_0x313af0['speed'+'Pct']=_0x1ee3aa,_0x484a36();else{var _0x3a949b=('3|4|8'+_0x417ed7(0x1ad)+_0x417ed7(0x4db)+'11|16'+_0x417ed7(0x607)+'|6|10'+'|15|1'+'3|9|5')['split']('|'),_0x23a5c4=-0x1758+0x17f2+-0x9a;while(!![]){switch(_0x3a949b[_0x23a5c4++]){case'0':_0xb1e79b['class'+_0x417ed7(0x61a)]='sk-va'+'l';continue;case'1':_0x5e278a[_0x417ed7(0x2d2)+'Name']=_0x54a3af[_0x417ed7(0x10d)];continue;case'2':_0x5e278a['type']=_0x417ed7(0x62c);continue;case'3':var _0x25acba=_0x42cdc3['creat'+'eElem'+_0x417ed7(0x269)](_0x417ed7(0x168));continue;case'4':_0x25acba['class'+_0x417ed7(0x61a)]='sk-ra'+'nge';continue;case'5':return _0x25acba;case'6':_0xb1e79b[_0x417ed7(0x23e)+'onten'+'t']=_0x5dd972(_0xf8dfd4);continue;case'7':_0x5e278a[_0x417ed7(0x636)]=_0xa729fd;continue;case'8':var _0x5e278a=_0x27cecc[_0x417ed7(0x572)+_0x417ed7(0x50c)+'ent'](_0x417ed7(0x204));continue;case'9':_0x25acba[_0x417ed7(0x4d2)+'d'](_0x5e278a,_0xb1e79b);continue;case'10':var _0x2ae5d3=()=>{var _0x587f55=_0x417ed7;_0xb1e79b['textC'+'onten'+'t']=_0x308f1f(_0x5e278a[_0x587f55(0x3e6)]),_0x25acba['style'][_0x587f55(0x3de)+'opert'+'y'](_0x587f55(0x25e),(_0x5e278a[_0x587f55(0x3e6)]-_0x46eae6)/(_0x3b19b6-_0x5a71a4)*(0x9*0x89+0x10f*-0x4+0x7*-0x7)+'%');};continue;case'11':_0x5e278a['step']=_0xe24a6d;continue;case'12':_0x5e278a['max']=_0x2ed68a;continue;case'13':_0x54a3af['hzeMY'](_0x2ae5d3);continue;case'14':var _0xb1e79b=_0x1e1fcb[_0x417ed7(0x572)+_0x417ed7(0x50c)+'ent'](_0x54a3af[_0x417ed7(0x171)]);continue;case'15':_0x5e278a['oninp'+'ut']=()=>{var _0x6e79f4=_0x417ed7;_0x2ae5d3(),_0x4bdc07(_0x2d4e34(_0x5e278a[_0x6e79f4(0x3e6)]));};continue;case'16':_0x5e278a[_0x417ed7(0x3e6)]=_0xf714b5;continue;}break;}}}))]),_0x3ef5c9(_0x42704c['Aseqq'],_0x1e5e3b(0x3c0)+_0x1e5e3b(0x675)+'ement'+'.jump'+_0x1e5e3b(0xd4)+_0x1e5e3b(0x510)+'both\x20'+'gravi'+'ty\x20va'+_0x1e5e3b(0x4b7),_0x42704c[_0x1e5e3b(0x2f4)](_0x313af0['jumpP'+'ct'],-0x89c+0x91*-0x7+0xcf7)||_0x42704c[_0x1e5e3b(0x22b)](_0x313af0[_0x1e5e3b(0x18a)+_0x1e5e3b(0x653)],0x264b*0x1+0x17c4+-0x1*0x3dab),null,[_0x42704c[_0x1e5e3b(0x4f7)](_0x21ad0b,_0x42704c['fMisk'],null,_0x42704c[_0x1e5e3b(0x43a)](_0x1c59f2,_0x313af0['jumpP'+'ct'],0x1*-0x3d5+-0x11bd*0x1+0x15c4*0x1,-0x1*-0xd44+-0x230d*0x1+-0x7a7*-0x3,0x2*-0xab2+-0x4a*-0x4c+-0x1*0x8f,_0x7162d7=>{var _0x1725db=_0x1e5e3b;_0x313af0[_0x1725db(0x56d)+'ct']=_0x7162d7,_0x484a36();})),_0x42704c['wwUEF'](_0x21ad0b,'Gravi'+_0x1e5e3b(0x2c4),_0x42704c['QqpWS'],_0x1c59f2(_0x313af0[_0x1e5e3b(0x18a)+_0x1e5e3b(0x653)],-0x1d5a+0x9fe*-0x3+0x3b5e,0x2219+0xf45+0x566*-0x9,-0x1a8e+0x4d9*0x1+0x15ba,_0x16a4e8=>{var _0x514ec6=_0x1e5e3b;_0x313af0[_0x514ec6(0x18a)+'tyPct']=_0x16a4e8,_0x13b8e6[_0x514ec6(0x43d)](_0x484a36);}))]),_0x3ef5c9(_0x1e5e3b(0x16f)+_0x1e5e3b(0x152),'Zeroe'+'s\x20Mov'+'ement'+_0x1e5e3b(0x3a5)+_0x1e5e3b(0x570)+_0x1e5e3b(0x2a8)+_0x1e5e3b(0x5e8)+'\x20jump'+_0x1e5e3b(0x49f)+_0x1e5e3b(0x172)+_0x1e5e3b(0x3a6)+_0x1e5e3b(0x64f)+'ies.',_0x313af0['bhop'],_0x3346e1=>{var _0x5a79e4=_0x1e5e3b;_0x313af0[_0x5a79e4(0x4e7)]=_0x3346e1,_0x2479b1[_0x5a79e4(0x25c)](_0x484a36);},[])];}if(_0x36dede===_0x42704c[_0x1e5e3b(0x22a)])return[_0x3ef5c9(_0x42704c[_0x1e5e3b(0x52d)],'WASD\x20'+_0x1e5e3b(0x473)+'/RMB\x20'+'+\x20Spa'+_0x1e5e3b(0x69c)+_0x1e5e3b(0x519)+'.',_0x313af0['keyst'+_0x1e5e3b(0x1fa)],_0xca25d0=>{var _0x383a4e=_0x1e5e3b;_0x13b8e6['ikUaD']('hGeAy',_0x383a4e(0x2e3))?(_0x327219[_0x383a4e(0x2d2)+'List'][_0x383a4e(0x4cc)+'e']('on',_0x4b8e73),_0x2d72a8(_0x36b3a8)):(_0x313af0['keyst'+'rokes']=_0xca25d0,_0x13b8e6[_0x383a4e(0x43d)](_0x484a36));},[_0x21ad0b(_0x42704c['XFVHA'],null,_0x42704c[_0x1e5e3b(0x2e9)](_0x2a999b,_0x313af0[_0x1e5e3b(0x268)],[['bl',_0x1e5e3b(0x4d4)+'m\x20lef'+'t'],['br',_0x42704c['rKIvw']],['ml','Left\x20'+_0x1e5e3b(0x26f)+'e']],_0x2e8a1e=>{var _0x23b9da=_0x1e5e3b;_0x313af0[_0x23b9da(0x268)]=_0x2e8a1e,_0x484a36();})),_0x42704c[_0x1e5e3b(0x4f7)](_0x21ad0b,_0x42704c[_0x1e5e3b(0x27a)],null,_0x42704c[_0x1e5e3b(0x43a)](_0x1c59f2,_0x313af0['ksSca'+'le'],0xdcc+-0x1*0x18f1+-0x3*-0x3b7+0.6,0x14*0x3+-0x2036+0xaa9*0x3+0.6000000000000001,-0x559*0x4+0x1eb5+-0x3*0x31b+0.05,_0x1e7bdb=>{_0x313af0['ksSca'+'le']=_0x1e7bdb,_0x484a36();})),_0x21ad0b(_0x42704c[_0x1e5e3b(0x3a8)],null,_0x4e60c1(_0x313af0['ksCps'],_0x10f494=>{var _0x29ba53=_0x1e5e3b;if(_0x13b8e6['ikUaD'](_0x13b8e6[_0x29ba53(0x3c3)],'iSYEP'))_0x313af0['ksCps']=_0x10f494,_0x484a36();else try{_0x1dddc9[_0x29ba53(0x136)]['appen'+'dChil'+'d'](_0x575cd5);}catch(_0x516ae4){}}))]),_0x42704c[_0x1e5e3b(0x2cb)](_0x3ef5c9,_0x1e5e3b(0x455)+'hair','Custo'+_0x1e5e3b(0x548)+_0x1e5e3b(0x195)+_0x1e5e3b(0x651)+'air.',_0x313af0[_0x1e5e3b(0x21f)+'hair'],_0x4c52f5=>{var _0x3293b3=_0x1e5e3b,_0x480483={'IXBVN':function(_0x3bcc80,_0x1eb46a){return _0x13b8e6['bsWaa'](_0x3bcc80,_0x1eb46a);},'atnVz':function(_0x321399,_0x1d5aac){return _0x321399===_0x1d5aac;}};if(_0x13b8e6['fLoXc']==='GZNSd'){var _0x50029d=_0x257584[_0x3293b3(0x54d)+_0x3293b3(0x17b)];for(var _0x57a56b=0x2b*-0xc1+0x1408+-0x7*-0x1c5;_0x480483['IXBVN'](_0x57a56b,_0x50029d[_0x3293b3(0x232)+'h']);_0x57a56b++){if(_0x50029d[_0x57a56b]['id']&&_0x480483['atnVz'](_0x50029d[_0x57a56b]['id'][_0x3293b3(0x551)+'Of'](_0x3293b3(0x32e)+_0x3293b3(0x485)),0x1ef5+-0x1f91*0x1+-0x34*-0x3))_0x50029d[_0x57a56b][_0x3293b3(0x549)][_0x3293b3(0x1e6)+'ay']='none';}}else _0x313af0[_0x3293b3(0x21f)+_0x3293b3(0x434)]=_0x4c52f5,_0x484a36();},[_0x42704c[_0x1e5e3b(0x2e9)](_0x21ad0b,'Size',null,_0x1c59f2(_0x313af0['chSiz'+'e'],0x1e1d+0x1431+-0x324e+0.5,0x19d0+0x2*-0x1279+0xb24+0.5,-0xc31+0x83b*0x1+0x3f6+0.1,_0x58c0e7=>{_0x313af0['chSiz'+'e']=_0x58c0e7,_0x484a36();})),_0x21ad0b(_0x42704c[_0x1e5e3b(0x65e)],null,_0x42704c[_0x1e5e3b(0x68a)](_0x3e45b7,_0x313af0['chCol'+'or'],_0x5e7a77=>{var _0x46d53a=_0x1e5e3b,_0x1d5872={'cBsCv':function(_0x122443){return _0x122443();}};_0x13b8e6[_0x46d53a(0x191)]!==_0x13b8e6['amshC']?(_0x168f51['noSpr'+'ead']=_0x6a5824,_0x1d5872['cBsCv'](_0x31add4)):(_0x313af0[_0x46d53a(0x544)+'or']=_0x5e7a77,_0x13b8e6['vgmzx'](_0x484a36));}))]),_0x42704c[_0x1e5e3b(0x2cb)](_0x3ef5c9,_0x1e5e3b(0x53c)+_0x1e5e3b(0x45c),_0x42704c['YtMmL'],_0x313af0['fps'],null,[_0x21ad0b(_0x1e5e3b(0x1f1)+'ounte'+'r',null,_0x4e60c1(_0x313af0[_0x1e5e3b(0x679)],_0x417f33=>{var _0x2b3f54=_0x1e5e3b;_0x313af0[_0x2b3f54(0x679)]=_0x417f33,_0x2479b1['kbuXs'](_0x484a36);})),_0xac0d62(_0x1e5e3b(0x537)+_0x1e5e3b(0x3b2)+_0x1e5e3b(0x326)+_0x1e5e3b(0x266)+_0x1e5e3b(0x1de)+_0x1e5e3b(0x576)+'as\x20no'+_0x1e5e3b(0x5f2)+_0x1e5e3b(0x517)+'ePlay'+_0x1e5e3b(0x4e5)+'o\x20pig'+_0x1e5e3b(0x16e)+_0x1e5e3b(0x2e1))])];if(_0x36dede===_0x42704c[_0x1e5e3b(0x3f3)])return[_0x3ef5c9(_0x42704c[_0x1e5e3b(0x1b0)],_0x1e5e3b(0x151)+'\x20kour'+_0x1e5e3b(0x27b)+_0x1e5e3b(0x3d3)+'er\x20sl'+'ots.',_0x313af0[_0x1e5e3b(0x5ff)+'ck'],_0xe26dfd=>{var _0x5ce6e2=_0x1e5e3b;if(_0x5ce6e2(0x35b)!==_0x5ce6e2(0x5b5))_0x313af0['adblo'+'ck']=_0xe26dfd,_0x13b8e6['vgmzx'](_0x484a36);else try{var _0x3e22ab=new _0x578cdb(_0x57a444)[_0x5ce6e2(0x47b)+_0x5ce6e2(0x696)](_0x176041,_0x5ce6e2(0x567));return _0x3e22ab?_0x3e22ab['val']():-0x23b3+0x2375*0x1+-0x3e*-0x1;}catch(_0x14f05b){return 0xb8*0x1b+0x1*-0x623+-0xd45;}},[_0xac0d62(_0x42704c['BPIUN'])])];return[_0x3ef5c9(_0x42704c['IbuCw'],_0x1e5e3b(0x4b4)+_0x1e5e3b(0x188)+_0x1e5e3b(0x217)+'rely\x20'+'—\x20no\x20'+_0x1e5e3b(0xce)+'hooks'+'.\x20Use'+_0x1e5e3b(0x2ed)+_0x1e5e3b(0x4c2)+'atche'+_0x1e5e3b(0x278)+_0x1e5e3b(0x154)+_0x1e5e3b(0xd6),_0x313af0[_0x1e5e3b(0x13d)+'ode'],_0x115c27=>{var _0x1199ad=_0x1e5e3b;_0x2479b1[_0x1199ad(0x2c1)](_0x1199ad(0x48e),_0x2479b1[_0x1199ad(0x663)])?(_0x13b8e6[_0x1199ad(0x363)](_0x4ffea0,_0x5c32e9,-0x8df*0x3+-0x1d65+-0x1*-0x384e,_0x13b8e6[_0x1199ad(0x2aa)],_0x4d2523),_0x5f19a8(_0x59aa19,-0x51a+-0x1*-0x163b+-0x10cd,'i32',_0x5ed89a)):(_0x313af0[_0x1199ad(0x13d)+_0x1199ad(0x3c1)]=_0x115c27,_0x484a36(),location[_0x1199ad(0xe4)+'d']());},[_0x42704c['ZJkzm'](_0xac0d62,_0x1e5e3b(0x209)+_0x1e5e3b(0x2f7)+'\x20relo'+'ad.\x20I'+_0x1e5e3b(0x61c)+_0x1e5e3b(0x4d0)+'load\x20'+_0x1e5e3b(0x6a4)+_0x1e5e3b(0x6a1)+'de,\x20t'+_0x1e5e3b(0x611)+_0x1e5e3b(0x1bf)+_0x1e5e3b(0x337)+_0x1e5e3b(0x1b6)+'lated'+'\x20—\x20te'+'ll\x20me'+'\x20the\x20'+_0x1e5e3b(0x678)+'-appl'+_0x1e5e3b(0x56f)+'ount.')]),_0x3ef5c9(_0x42704c['RtoAm'],_0x1e5e3b(0x332)+_0x1e5e3b(0x69f)+_0x1e5e3b(0x20d)+_0x1e5e3b(0x11b)+_0x1e5e3b(0xce)+_0x1e5e3b(0x3f8)+_0x1e5e3b(0x474)+'\x20for\x20'+'the\x20w'+'hole\x20'+'page\x20'+_0x1e5e3b(0x1d5)+_0x1e5e3b(0x178)+_0x1e5e3b(0x56a)+_0x1e5e3b(0x4e0)+'ault\x20'+'-\x20a\x20s'+_0x1e5e3b(0x67d)+'ure\x20t'+_0x1e5e3b(0x66c)+_0x1e5e3b(0x610)+_0x1e5e3b(0x19a)+'tch\x20t'+_0x1e5e3b(0x286)+_0x1e5e3b(0x1ea)+_0x1e5e3b(0x3dd)+'throw'+_0x1e5e3b(0x16c)+'nctio'+_0x1e5e3b(0x5e7)+'natur'+_0x1e5e3b(0x2b4)+_0x1e5e3b(0x487)+'\x27\x20the'+_0x1e5e3b(0x34f)+'nt\x20it'+_0x1e5e3b(0xdd)+'alled'+_0x1e5e3b(0x5b6)+_0x1e5e3b(0x2b8)+_0x1e5e3b(0x689)+_0x1e5e3b(0x3ad)+'t\x20a\x20t'+_0x1e5e3b(0x356)+_0x1e5e3b(0xe4)+'d,\x20an'+_0x1e5e3b(0x438)+_0x1e5e3b(0x305)+_0x1e5e3b(0x3ef)+_0x1e5e3b(0x55a)+'\x20buil'+_0x1e5e3b(0x4fd)+'kes\x20o'+'n.',_0x313af0[_0x1e5e3b(0x48f)+'od']||_0x313af0[_0x1e5e3b(0x48f)+_0x1e5e3b(0x294)]||_0x313af0['hookN'+'oReco'+'il']||_0x313af0['hookC'+_0x1e5e3b(0x429)+'e'],_0x101f74=>{var _0x49fba8=_0x1e5e3b;_0x313af0[_0x49fba8(0x48f)+'od']=_0x101f74,_0x313af0['hookG'+'odDie']=_0x101f74,_0x313af0[_0x49fba8(0x3b5)+_0x49fba8(0x20a)+'il']=_0x101f74,_0x313af0['hookC'+_0x49fba8(0x429)+'e']=_0x101f74,_0x484a36(),location['reloa'+'d']();},[_0x42704c[_0x1e5e3b(0x561)](_0xac0d62,_0x1e5e3b(0x209)+'es\x20on'+_0x1e5e3b(0x3cc)+_0x1e5e3b(0x12a)),_0x42704c[_0x1e5e3b(0x200)](_0x21ad0b,'god\x20('+'OHeal'+_0x1e5e3b(0x1e0)+'itiat'+'eTake'+_0x1e5e3b(0x5fb)+'h)',null,_0x4e60c1(_0x313af0[_0x1e5e3b(0x48f)+'od'],_0x1099f4=>{_0x313af0['hookG'+'od']=_0x1099f4,_0x484a36();})),_0x21ad0b('godDi'+_0x1e5e3b(0x44a)+_0x1e5e3b(0x4ff)+'.Loca'+'lDie)',null,_0x4e60c1(_0x313af0[_0x1e5e3b(0x48f)+_0x1e5e3b(0x294)],_0x5e2e6a=>{var _0x1e4c36=_0x1e5e3b;_0x313af0['hookG'+'odDie']=_0x5e2e6a,_0x2479b1[_0x1e4c36(0x2c2)](_0x484a36);})),_0x21ad0b(_0x1e5e3b(0x174)+_0x1e5e3b(0x389)+'Recoi'+'lMoti'+_0x1e5e3b(0xca)+'ck)',null,_0x4e60c1(_0x313af0['hookN'+_0x1e5e3b(0x20a)+'il'],_0xf216e9=>{var _0x154c85=_0x1e5e3b;_0x313af0[_0x154c85(0x3b5)+_0x154c85(0x20a)+'il']=_0xf216e9,_0x484a36();})),_0x42704c[_0x1e5e3b(0x2e9)](_0x21ad0b,_0x1e5e3b(0x456)+_0x1e5e3b(0x1ce)+_0x1e5e3b(0x378)+'eRunn'+_0x1e5e3b(0x265)+_0x1e5e3b(0x641)+'ounde'+'d)',_0x1e5e3b(0x3e2)+'eats\x20'+'work\x20'+'witho'+_0x1e5e3b(0x121)+'is',_0x4e60c1(_0x313af0['hookC'+'aptur'+'e'],_0x116fa3=>{var _0x52f224=_0x1e5e3b,_0x3f2068={'iztYr':function(_0xb03804,_0x28f6d4){var _0x5981d4=_0x4928;return _0x13b8e6[_0x5981d4(0x170)](_0xb03804,_0x28f6d4);},'EHSmr':_0x52f224(0x5ea)+_0x52f224(0x386)+'ed'};if(_0x13b8e6[_0x52f224(0x125)](_0x52f224(0x2ad),_0x13b8e6['MSHTc']))_0x313af0[_0x52f224(0x227)+_0x52f224(0x429)+'e']=_0x116fa3,_0x13b8e6[_0x52f224(0x43d)](_0x484a36);else{var _0x2000a7=_0x2e0116[_0x52f224(0x572)+'eElem'+_0x52f224(0x269)]('butto'+'n');return _0x2000a7[_0x52f224(0x330)]='butto'+'n',_0x2000a7['class'+_0x52f224(0x61a)]='sk-sw'+_0x52f224(0x14a),_0x2000a7[_0x52f224(0x290)+'tribu'+'te'](_0x13b8e6['AysCh'],_0x13b8e6[_0x52f224(0x22e)]),_0x2000a7[_0x52f224(0x290)+'tribu'+'te'](_0x52f224(0x5ea)+_0x52f224(0x386)+'ed',_0x3e44c8(!!_0x2c448c)),_0x2000a7[_0x52f224(0x28d)+'ck']=_0x5b36f7=>{var _0x3cbc17=_0x52f224;_0x5b36f7[_0x3cbc17(0x454)+_0x3cbc17(0x430)+_0x3cbc17(0x671)]();var _0x6e90d6=_0x3f2068[_0x3cbc17(0x390)](_0x2000a7[_0x3cbc17(0x562)+'tribu'+'te'](_0x3f2068['EHSmr']),_0x3cbc17(0x1d1));_0x2000a7['setAt'+_0x3cbc17(0x4d1)+'te'](_0x3cbc17(0x5ea)+_0x3cbc17(0x386)+'ed',_0x62babe(_0x6e90d6)),_0x2f43e0(_0x6e90d6);},_0x2000a7;}}))]),_0x42704c[_0x1e5e3b(0x2cb)](_0x3ef5c9,_0x1e5e3b(0x185)+_0x1e5e3b(0x280)+'r',_0x42704c['ugYdP'],_0x313af0[_0x1e5e3b(0x373)+'ill'],_0x36b818=>{var _0x37541b=_0x1e5e3b;if(_0x2479b1[_0x37541b(0x3b4)](_0x37541b(0x62a),'jCoVm'))_0x313af0[_0x37541b(0x373)+'ill']=_0x36b818,_0x484a36();else return 0x216*0x1+0x207*0xc+-0x7*0x3c6;},[_0xac0d62(_0x42704c[_0x1e5e3b(0x199)],!![])]),_0x3ef5c9(_0x1e5e3b(0x5e4)+'r',_0x1e5e3b(0x31a)+_0x1e5e3b(0x36c)+_0x1e5e3b(0x311)+'ver-v'+_0x1e5e3b(0x517)+'e\x20tra'+_0x1e5e3b(0x514),!![],null,[_0x42704c['wwUEF'](_0x21ad0b,_0x1e5e3b(0x26c)+'my\x20se'+'tting'+'s',null,_0x483b9f(_0x42704c['xiCIr'],()=>{_0x313af0={..._0x3cea3e},_0x484a36(),location['reloa'+'d']();}))])];}else{var _0x4bdedd=_0x420a6a['creat'+'eElem'+'ent'](_0x13b8e6['tkcHn']);_0x4bdedd[_0x1e5e3b(0x2d2)+_0x1e5e3b(0x61a)]='sk-hi'+'nt',_0x4bdedd[_0x1e5e3b(0x23e)+_0x1e5e3b(0x4f6)+'t']=_0x5ead43,_0x50a5ef[_0x1e5e3b(0x4d2)+_0x1e5e3b(0x393)+'d'](_0x4bdedd);}}var _0x2ac44c=null;function _0x372538(_0x42dbb0){var _0x2f5d85=_0x2e908b;_0x55cf39=_0x42dbb0;if(!_0x2ac44c){var _0x59487f=_0x2479b1[_0x2f5d85(0x563)][_0x2f5d85(0x15b)]('|'),_0x8adc88=0x13*-0x17b+-0x600+0x2221*0x1;while(!![]){switch(_0x59487f[_0x8adc88++]){case'0':requestAnimationFrame(()=>_0x2ac44c[_0x2f5d85(0x2d2)+_0x2f5d85(0x649)][_0x2f5d85(0x13f)](_0x2f5d85(0x593)));continue;case'1':_0x46420a['textC'+_0x2f5d85(0x4f6)+'t']=_0x244383;continue;case'2':var _0x46420a=document['creat'+_0x2f5d85(0x50c)+'ent'](_0x2f5d85(0x549));continue;case'3':_0x29c9de[_0x2f5d85(0x4d2)+_0x2f5d85(0x393)+'d'](_0x46420a);continue;case'4':_0x29c9de['appen'+'dChil'+'d'](_0x2ac44c);continue;case'5':_0x2ac44c=_0x88fdb3();continue;}break;}}_0x2ac44c['class'+'List'][_0x2f5d85(0x4cc)+'e'](_0x2f5d85(0x593),_0x42dbb0);}function _0x528306(){_0x372538(!_0x55cf39);}function _0x88fdb3(){var _0x515308=_0x2e908b,_0x4ff27f=document['creat'+_0x515308(0x50c)+_0x515308(0x269)](_0x2479b1[_0x515308(0x4aa)]);_0x4ff27f[_0x515308(0x2d2)+_0x515308(0x61a)]='mn-pa'+_0x515308(0xe2);var _0x3ed0a0=document['creat'+_0x515308(0x50c)+'ent'](_0x2479b1['SiAnx']);_0x3ed0a0['class'+_0x515308(0x61a)]=_0x2479b1['xLmmc'];var _0x19f51c=document[_0x515308(0x572)+'eElem'+'ent']('div');_0x19f51c[_0x515308(0x2d2)+_0x515308(0x61a)]=_0x515308(0xe8)+'go',_0x19f51c['inner'+_0x515308(0x62e)]='<svg\x20'+'viewB'+_0x515308(0x2c9)+'\x200\x2024'+_0x515308(0x3f5)+_0x515308(0x2d2)+_0x515308(0x64d)+_0x515308(0x5be)+'svg\x22>'+_0x515308(0x35d)+'\x20d=\x22M'+'12\x2021'+_0x515308(0x58e)+'-2.5-'+_0x515308(0x558)+_0x515308(0x288)+_0x515308(0x1e5)+'.5\x201.'+_0x515308(0x4bc)+'\x204-4.'+_0x515308(0x14b)+'\x204\x204.'+'5c0\x203'+_0x515308(0x113)+_0x515308(0x415)+'.5z\x22\x20'+_0x515308(0x665)+_0x515308(0x2e2)+_0x515308(0x12f)+'oke=\x22'+'#ff6b'+_0x515308(0x60c)+_0x515308(0x6a7)+_0x515308(0x41c)+_0x515308(0x427)+'\x20stro'+'ke-li'+_0x515308(0x3f4)+_0x515308(0x623)+'nd\x22\x20s'+_0x515308(0x6a7)+_0x515308(0x5c9)+'join='+'\x22roun'+_0x515308(0x637)+'circl'+'e\x20cx='+_0x515308(0x640)+_0x515308(0x25d)+_0x515308(0x103)+_0x515308(0x114)+_0x515308(0x315)+_0x515308(0x256)+'6b9d\x22'+_0x515308(0x54f)+'vg>',_0x3ed0a0['appen'+_0x515308(0x393)+'d'](_0x19f51c);var _0x24a3f2=document[_0x515308(0x572)+'eElem'+'ent'](_0x515308(0x168));_0x24a3f2[_0x515308(0x2d2)+_0x515308(0x61a)]=_0x2479b1[_0x515308(0x1a7)];var _0x31c8a9=document['creat'+'eElem'+'ent']('heade'+'r');_0x31c8a9[_0x515308(0x2d2)+'Name']=_0x2479b1[_0x515308(0x3a2)];var _0x1982c6=document[_0x515308(0x572)+_0x515308(0x50c)+'ent']('div');_0x1982c6['class'+'Name']=_0x515308(0x197)+_0x515308(0x57c);var _0x326866=document['creat'+'eElem'+'ent']('h2');_0x326866[_0x515308(0x2d2)+'Name']=_0x515308(0x3cf),_0x326866['textC'+'onten'+'t']=_0x2479b1[_0x515308(0x53a)];var _0x58b25c=document[_0x515308(0x572)+'eElem'+_0x515308(0x269)]('small');_0x58b25c['class'+'Name']=_0x2479b1['hatgr'],_0x58b25c[_0x515308(0x23e)+_0x515308(0x4f6)+'t']=_0x2479b1[_0x515308(0x5df)],_0x1982c6['appen'+'d'](_0x326866,_0x58b25c);var _0x167b30=document[_0x515308(0x572)+_0x515308(0x50c)+'ent'](_0x2479b1[_0x515308(0x43e)]);_0x167b30['type']=_0x2479b1[_0x515308(0x43e)],_0x167b30[_0x515308(0x2d2)+_0x515308(0x61a)]=_0x2479b1[_0x515308(0x472)],_0x167b30['title']=_0x2479b1['DfweO'],_0x167b30[_0x515308(0x5af)+'HTML']=_0x2479b1['ZAAYh'],_0x167b30[_0x515308(0x28d)+'ck']=()=>_0x372538(![]),_0x31c8a9[_0x515308(0x4d2)+'d'](_0x1982c6,_0x167b30);var _0x34e2cd=document['creat'+_0x515308(0x50c)+_0x515308(0x269)](_0x2479b1['ddiFw']);_0x34e2cd['class'+_0x515308(0x61a)]=_0x2479b1['MkHvf'],_0x24a3f2['appen'+'d'](_0x31c8a9,_0x34e2cd),_0x4ff27f[_0x515308(0x4d2)+'d'](_0x3ed0a0,_0x24a3f2);var _0x24023b=new Map();for(var _0x395a4e of _0x4eaa5e){var _0x2b07b8=_0x2479b1[_0x515308(0xd0)][_0x515308(0x15b)]('|'),_0x1ef7b4=-0xb6b+0x15bf+-0xa54;while(!![]){switch(_0x2b07b8[_0x1ef7b4++]){case'0':_0x4cfe4a['type']=_0x2479b1[_0x515308(0x43e)];continue;case'1':var _0x4cfe4a=document[_0x515308(0x572)+_0x515308(0x50c)+'ent'](_0x2479b1['Wahzj']);continue;case'2':_0x4cfe4a[_0x515308(0x5af)+_0x515308(0x62e)]=_0x515308(0x155)+'l>'+_0x395a4e[_0x515308(0x135)]+(_0x515308(0x31d)+_0x515308(0x495));continue;case'3':_0x24023b['set'](_0x395a4e['id'],_0x4cfe4a);continue;case'4':_0x4cfe4a['class'+'Name']=_0x515308(0x1b7)+'b';continue;case'5':_0x4cfe4a[_0x515308(0x4cd)]=_0x395a4e['label'];continue;case'6':_0x3ed0a0[_0x515308(0x4d2)+'dChil'+'d'](_0x4cfe4a);continue;case'7':_0x4cfe4a['oncli'+'ck']=(_0x2b33bc=>()=>_0x2070d2(_0x2b33bc))(_0x395a4e['id']);continue;}break;}}function _0x2070d2(_0x58731a){var _0x14fdf2=_0x515308;_0x284445['cat']=_0x58731a,_0x22b644();var _0x9fd61b=_0x4eaa5e['find'](_0x536ff4=>_0x536ff4['id']===_0x58731a)||_0x4eaa5e[-0x3*0x939+0x26ff*-0x1+0x42aa];_0x326866['textC'+_0x14fdf2(0x4f6)+'t']=_0x2479b1[_0x14fdf2(0x63c)](_0x2479b1['vgank'],_0x9fd61b['label']);for(var [_0x11fb6a,_0x4fb506]of _0x24023b)_0x4fb506[_0x14fdf2(0x2d2)+'List'][_0x14fdf2(0x4cc)+'e'](_0x2479b1['ZSERT'],_0x11fb6a===_0x58731a);_0x34e2cd['repla'+_0x14fdf2(0x5ad)+'ldren'](..._0x5622ed(_0x58731a));}return _0x2479b1['yRVTv'](_0x2070d2,_0x284445[_0x515308(0x2c3)]||_0x2479b1[_0x515308(0x5fe)]),setInterval(()=>{var _0x44460d=_0x515308;if(!_0x55cf39)return;var _0x1965b6=_0x34e2cd['child'+_0x44460d(0x17b)];for(var _0xa2d870=-0x1*0x14f2+-0x21*0x107+-0x36d9*-0x1;_0xa2d870<_0x1965b6[_0x44460d(0x232)+'h'];_0xa2d870++){var _0x395f0c=_0x1965b6[_0xa2d870]['query'+'Selec'+_0x44460d(0x348)](_0x2479b1[_0x44460d(0x21c)]);_0x395f0c&&(_0x395f0c[_0x44460d(0x23e)+_0x44460d(0x4f6)+'t'][_0x44460d(0x551)+'Of'](_0x44460d(0x588))===-0x3*-0x533+-0x1e36+0xe9d||_0x395f0c[_0x44460d(0x23e)+_0x44460d(0x4f6)+'t'][_0x44460d(0x551)+'Of'](_0x44460d(0x5db))===0x20fe+0x15b*0x7+-0x2a7b)&&(_0x395f0c[_0x44460d(0x23e)+_0x44460d(0x4f6)+'t']=_0x1475a8[_0x44460d(0x13d)+_0x44460d(0x3c1)]?_0x44460d(0x1b5)+_0x44460d(0x1e4)+_0x44460d(0x5cf)+_0x44460d(0xf5)+_0x44460d(0x28a)+_0x44460d(0xcb)+_0x44460d(0x3a0)+'(relo'+'ad\x20to'+'\x20exit'+')':_0x1475a8[_0x44460d(0xf8)]?_0x2479b1[_0x44460d(0x1b9)](_0x2479b1[_0x44460d(0x6a5)](_0x2479b1[_0x44460d(0x203)](_0x2479b1['NFVnh'](_0x44460d(0x52b)+_0x44460d(0x3be)+'\x20',_0x1475a8[_0x44460d(0x678)+_0x44460d(0x66b)]?_0x2479b1['NFVnh'](_0x2479b1['LDqjE'](_0x2479b1[_0x44460d(0x63e)](_0x1475a8['hooks'+'Ok'],'/'),_0x1475a8[_0x44460d(0x678)+'Total']),_0x2479b1[_0x44460d(0x566)]):_0x2479b1[_0x44460d(0x106)])+_0x2479b1[_0x44460d(0x41b)],_0x1475a8['gameL'+'oaded']?_0x2479b1[_0x44460d(0x175)]:'loadi'+'ng')+_0x2479b1['gGZNn'],_0x1475a8[_0x44460d(0x20f)+_0x44460d(0x45c)]?_0x44460d(0x62f):_0x2479b1[_0x44460d(0x3d0)])+_0x2479b1[_0x44460d(0x5fd)]+(_0x1475a8[_0x44460d(0x560)+_0x44460d(0x46a)]?_0x2479b1[_0x44460d(0x5da)]:_0x2479b1[_0x44460d(0x3d0)]),_0x1475a8['lastE'+_0x44460d(0x345)]?_0x2479b1[_0x44460d(0x478)](_0x2479b1[_0x44460d(0x407)],_0x1475a8['lastE'+_0x44460d(0x345)]):''):_0x2479b1[_0x44460d(0x5d2)]);}},0xc39+0x1*-0x12e0+0x3*0x385),_0x4ff27f;}var _0x244383='\x0a\x20\x20\x20\x20'+':host'+_0x2e908b(0x1b4)+'l:\x20in'+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+'{\x20box'+_0x2e908b(0x645)+'ng:\x20b'+'order'+_0x2e908b(0x589)+_0x2e908b(0x633)+_0x2e908b(0x68e)+_0x2e908b(0x41f)+_0x2e908b(0x5fc)+_0x2e908b(0x347)+'\x22Inte'+_0x2e908b(0x4b9)+'Segoe'+_0x2e908b(0x404)+_0x2e908b(0x65c)+_0x2e908b(0x59b)+',\x20san'+'s-ser'+_0x2e908b(0x10f)+'\x0a\x20\x20\x20\x20'+_0x2e908b(0x4a7)+'anel\x20'+_0x2e908b(0x631)+'ition'+':\x20abs'+'olute'+_0x2e908b(0x68f)+'ht:\x202'+_0x2e908b(0x147)+_0x2e908b(0x5a5)+'m:\x2024'+'px;\x20w'+'idth:'+_0x2e908b(0x238)+_0x2e908b(0x5e1)+_0x2e908b(0xfd)+_0x2e908b(0x344)+'vw\x20-\x20'+_0x2e908b(0x2fa)+_0x2e908b(0x574)+_0x2e908b(0x37e)+_0x2e908b(0x5a9)+'min(4'+_0x2e908b(0x420)+_0x2e908b(0xe1)+'(100v'+'h\x20-\x204'+_0x2e908b(0x53f)+_0x2e908b(0x568)+'\x20\x20\x20di'+_0x2e908b(0x69d)+_0x2e908b(0x391)+_0x2e908b(0x49d)+_0x2e908b(0x688)+_0x2e908b(0x13c)+_0x2e908b(0x158)+'g:\x2010'+'px;\x20b'+_0x2e908b(0x65d)+_0x2e908b(0x1b2)+_0x2e908b(0x4dc)+_0x2e908b(0x245)+'point'+_0x2e908b(0x18b)+'ents:'+_0x2e908b(0x3d7)+_0x2e908b(0x568)+'\x20\x20\x20ba'+'ckgro'+_0x2e908b(0x156)+_0x2e908b(0x60b)+'24,17'+_0x2e908b(0x24d)+_0x2e908b(0x239)+_0x2e908b(0x46d)+'rop-f'+'ilter'+_0x2e908b(0x533)+'r(22p'+'x)\x20sa'+_0x2e908b(0x45f)+_0x2e908b(0x3f2)+_0x2e908b(0x4ee)+_0x2e908b(0x5c2)+'t-bac'+'kdrop'+'-filt'+'er:\x20b'+_0x2e908b(0x18f)+_0x2e908b(0x5b3)+_0x2e908b(0x59a)+_0x2e908b(0x634)+_0x2e908b(0x14f)+_0x2e908b(0x2bd)+'\x20\x20box'+'-shad'+_0x2e908b(0x296)+_0x2e908b(0x596)+'1px\x20r'+_0x2e908b(0x597)+'55,25'+_0x2e908b(0x28b)+_0x2e908b(0x1e1)+_0x2e908b(0x42f)+_0x2e908b(0x38c)+_0x2e908b(0x383)+'\x20rgba'+_0x2e908b(0x24c)+_0x2e908b(0x24e)+_0x2e908b(0x449)+_0x2e908b(0x583)+_0x2e908b(0x64a)+_0x2e908b(0x63b)+'\x20rgba'+_0x2e908b(0x12d)+_0x2e908b(0x502)+');\x0a\x20\x20'+_0x2e908b(0x3b8)+_0x2e908b(0x57a)+'y:\x200;'+'\x20tran'+_0x2e908b(0x176)+_0x2e908b(0x523)+_0x2e908b(0x43c)+_0x2e908b(0x28e)+_0x2e908b(0x615)+'point'+_0x2e908b(0x18b)+_0x2e908b(0x53d)+_0x2e908b(0x2fd)+_0x2e908b(0x5bc)+_0x2e908b(0x642)+_0x2e908b(0x31e)+'pacit'+'y\x20.35'+'s\x20eas'+'e,\x20tr'+_0x2e908b(0x552)+_0x2e908b(0x57d)+_0x2e908b(0x618)+_0x2e908b(0x31f)+'ezier'+_0x2e908b(0x463)+'1,.36'+',1);\x0a'+_0x2e908b(0x11d)+_0x2e908b(0x5d5)+_0x2e908b(0x2cf)+_0x2e908b(0x489)+';\x20fon'+_0x2e908b(0x223)+_0x2e908b(0x351)+_0x2e908b(0x385)+_0x2e908b(0x2bd)+'.mn-p'+'anel.'+_0x2e908b(0x593)+_0x2e908b(0x32c)+_0x2e908b(0x676)+_0x2e908b(0x673)+'trans'+_0x2e908b(0x30e)+_0x2e908b(0x2fd)+_0x2e908b(0x252)+_0x2e908b(0x532)+_0x2e908b(0x52a)+'s:\x20au'+'to;\x20}'+'\x0a\x20\x20\x20\x20'+_0x2e908b(0x1f3)+_0x2e908b(0x4e8)+_0x2e908b(0x3d5)+'lay:\x20'+_0x2e908b(0x68d)+_0x2e908b(0x4ef)+_0x2e908b(0x50f)+'ction'+_0x2e908b(0x327)+_0x2e908b(0x29c)+'align'+_0x2e908b(0x624)+_0x2e908b(0x1af)+'nter;'+_0x2e908b(0x4ec)+_0x2e908b(0x1f6)+'\x20widt'+'h:\x2062'+_0x2e908b(0x42b)+_0x2e908b(0x104)+_0x2e908b(0x250)+'\x20padd'+_0x2e908b(0x681)+'12px\x20'+('0;\x20bo'+_0x2e908b(0x342)+_0x2e908b(0x371)+_0x2e908b(0x4a8)+_0x2e908b(0x372)+'\x20\x20\x20\x20\x20'+'backg'+'round'+_0x2e908b(0x31b)+'a(255'+_0x2e908b(0x3a3)+'255,.'+'025);'+_0x2e908b(0x5a2)+'shado'+_0x2e908b(0x51b)+'set\x200'+_0x2e908b(0x596)+_0x2e908b(0x51a)+_0x2e908b(0x597)+'55,25'+_0x2e908b(0x28b)+_0x2e908b(0x4f1)+_0x2e908b(0x2a6)+'\x20\x20\x20.m'+_0x2e908b(0x367)+_0x2e908b(0x503)+_0x2e908b(0x477)+_0x2e908b(0x36b)+_0x2e908b(0x24f)+_0x2e908b(0x5eb)+_0x2e908b(0x5d1)+_0x2e908b(0x1b3)+_0x2e908b(0x399)+'width'+':\x2032p'+_0x2e908b(0x298)+_0x2e908b(0x513)+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x2e908b(0x367)+_0x2e908b(0x69a)+_0x2e908b(0x1b8)+_0x2e908b(0x2b7)+_0x2e908b(0x546)+_0x2e908b(0x63f)+_0x2e908b(0x6a3)+_0x2e908b(0x5f9)+'overf'+'low:\x20'+_0x2e908b(0x3d1)+_0x2e908b(0x480)+_0x2e908b(0x150)+':\x20dro'+_0x2e908b(0x4af)+'dow(0'+_0x2e908b(0x377)+_0x2e908b(0x65f)+_0x2e908b(0x3eb)+_0x2e908b(0x44e)+_0x2e908b(0x235)+_0x2e908b(0x283)+_0x2e908b(0x261)+'\x20.mn-'+_0x2e908b(0x314)+'\x20disp'+'lay:\x20'+_0x2e908b(0x68d)+_0x2e908b(0xef)+_0x2e908b(0x3b1)+_0x2e908b(0x301)+_0x2e908b(0xdf)+_0x2e908b(0x162)+'tify-'+'conte'+'nt:\x20c'+_0x2e908b(0xdf)+_0x2e908b(0x3db)+_0x2e908b(0x47a)+_0x2e908b(0x245)+'heigh'+_0x2e908b(0x1da)+_0x2e908b(0x324)+_0x2e908b(0x65d)+':\x200;\x20'+_0x2e908b(0x4e4)+_0x2e908b(0x31c)+'ius:\x20'+_0x2e908b(0x2bc)+'\x0a\x20\x20\x20\x20'+_0x2e908b(0x3bb)+_0x2e908b(0x289)+_0x2e908b(0x2a7)+'ransp'+_0x2e908b(0x5c7)+_0x2e908b(0x4b2)+'or:\x20r'+_0x2e908b(0x597)+_0x2e908b(0x536)+_0x2e908b(0x5b0)+',.4);'+_0x2e908b(0x33f)+_0x2e908b(0x45a)+'ointe'+_0x2e908b(0x5e9)+_0x2e908b(0x2d4)+_0x2e908b(0x2ac)+_0x2e908b(0x4a3)+'font-'+'weigh'+_0x2e908b(0x4f4)+'0;\x20}\x0a'+_0x2e908b(0x213)+_0x2e908b(0x1b7)+_0x2e908b(0x638)+_0x2e908b(0x476)+_0x2e908b(0x578)+':\x20rgb'+'a(246'+',238,'+_0x2e908b(0x5c0)+_0x2e908b(0x1ae)+'\x0a\x20\x20\x20\x20'+_0x2e908b(0x380)+_0x2e908b(0x1f5)+_0x2e908b(0x69b)+_0x2e908b(0x496)+_0x2e908b(0x5f1)+'ff6b9'+'d;\x20ba'+_0x2e908b(0x483)+_0x2e908b(0x156)+'rgba('+_0x2e908b(0x467)+_0x2e908b(0x18c)+'7,.1)'+_0x2e908b(0x2a6)+_0x2e908b(0x322)+_0x2e908b(0x1cb)+'n\x20{\x20f'+_0x2e908b(0x104)+_0x2e908b(0x19f)+_0x2e908b(0x494)+_0x2e908b(0xcf)+_0x2e908b(0x2df)+'play:'+_0x2e908b(0x4ef)+_0x2e908b(0x582)+_0x2e908b(0x2fb)+_0x2e908b(0x2e4)+'n:\x20co'+_0x2e908b(0x37f)+_0x2e908b(0x1d4)+_0x2e908b(0x304)+_0x2e908b(0x3a7)+'{\x20dis'+_0x2e908b(0x2a4)+_0x2e908b(0x4ef)+_0x2e908b(0x42a)+_0x2e908b(0x5bd)+_0x2e908b(0x32d)+_0x2e908b(0x17e)+_0x2e908b(0x412)+'p:\x2012'+'px;\x20p'+_0x2e908b(0x158)+_0x2e908b(0x4c5)+_0x2e908b(0xd3)+_0x2e908b(0x297)+_0x2e908b(0x3b0)+'r-sel'+_0x2e908b(0x443)+_0x2e908b(0x250)+_0x2e908b(0x1d4)+'\x20\x20.mn'+_0x2e908b(0x3c4)+_0x2e908b(0x1c6)+'flex:'+_0x2e908b(0x40b)+'in-wi'+_0x2e908b(0x2b7)+_0x2e908b(0x281)+'\x20\x20\x20\x20.'+_0x2e908b(0x2a5)+_0x2e908b(0x58a)+'t-siz'+_0x2e908b(0x691)+'px;\x20f'+'ont-w'+_0x2e908b(0x1ac)+':\x20650'+_0x2e908b(0x2a6)+_0x2e908b(0x322)+_0x2e908b(0x661)+'\x20{\x20fo'+'nt-si'+'ze:\x201'+'1px;\x20'+_0x2e908b(0x2ec))+('ty:\x20.'+_0x2e908b(0x211)+'\x20\x20\x20\x20.'+_0x2e908b(0x353)+'ose\x20{'+_0x2e908b(0x3d5)+'lay:\x20'+'grid;'+'\x20plac'+_0x2e908b(0x619)+_0x2e908b(0x301)+_0x2e908b(0xdf)+_0x2e908b(0x3db)+_0x2e908b(0x58b)+'8px;\x20'+_0x2e908b(0x5a6)+_0x2e908b(0x1db)+_0x2e908b(0x324)+'order'+_0x2e908b(0x2bb)+'borde'+'r-rad'+_0x2e908b(0xcc)+_0x2e908b(0x21d)+'backg'+_0x2e908b(0x1a5)+':\x20tra'+_0x2e908b(0x52e)+'ent;\x20'+_0x2e908b(0x578)+_0x2e908b(0x1d2)+'erit;'+_0x2e908b(0x1f9)+'ity:\x20'+_0x2e908b(0x3fb)+_0x2e908b(0x1f2)+_0x2e908b(0x177)+'inter'+_0x2e908b(0x2a6)+_0x2e908b(0x322)+_0x2e908b(0x4a9)+'se:ho'+_0x2e908b(0x376)+'\x20opac'+_0x2e908b(0x2ce)+_0x2e908b(0x254)+_0x2e908b(0x483)+_0x2e908b(0x156)+_0x2e908b(0x60b)+'255,2'+_0x2e908b(0xea)+'5,.05'+_0x2e908b(0x319)+_0x2e908b(0x213)+'mn-cl'+_0x2e908b(0x42e)+'vg\x20{\x20'+_0x2e908b(0x3f1)+':\x2014p'+_0x2e908b(0x298)+'ight:'+_0x2e908b(0x1e7)+_0x2e908b(0x450)+_0x2e908b(0x10c)+'ne;\x20s'+'troke'+_0x2e908b(0x20e)+'rentC'+'olor;'+_0x2e908b(0x465)+'ke-wi'+_0x2e908b(0x2b7)+_0x2e908b(0x3e0)+_0x2e908b(0x620)+'linec'+_0x2e908b(0x336)+'ound;'+_0x2e908b(0x1d4)+_0x2e908b(0x304)+_0x2e908b(0x182)+_0x2e908b(0x5b9)+_0x2e908b(0x50e)+_0x2e908b(0x47e)+'-heig'+_0x2e908b(0x58d)+';\x20ove'+_0x2e908b(0x3cb)+_0x2e908b(0x328)+'uto;\x20'+'displ'+_0x2e908b(0x3b7)+'rid;\x20'+_0x2e908b(0x56b)+_0x2e908b(0x50d)+_0x2e908b(0x56c)+_0x2e908b(0x3a1)+'s:\x20re'+'peat('+_0x2e908b(0x32a)+_0x2e908b(0x2ea)+_0x2e908b(0x225)+_0x2e908b(0x57f)+_0x2e908b(0x21a)+_0x2e908b(0x540)+';\x20ali'+'gn-it'+_0x2e908b(0x32d)+_0x2e908b(0x25b)+_0x2e908b(0x42a)+'gn-co'+_0x2e908b(0x153)+_0x2e908b(0x3ae)+_0x2e908b(0x190)+_0x2e908b(0x4a4)+_0x2e908b(0x4a3)+_0x2e908b(0x2de)+_0x2e908b(0x316)+_0x2e908b(0x527)+_0x2e908b(0xf3)+_0x2e908b(0x2a6)+'\x20\x20\x20.m'+_0x2e908b(0xfe)+_0x2e908b(0x1ff)+_0x2e908b(0x41a)+_0x2e908b(0x36d)+_0x2e908b(0x22f)+_0x2e908b(0x1b8)+_0x2e908b(0x2b7)+_0x2e908b(0x21d)+_0x2e908b(0x261)+_0x2e908b(0x1a2)+_0x2e908b(0x224)+_0x2e908b(0x5cd)+_0x2e908b(0x13a)+_0x2e908b(0x528)+_0x2e908b(0x181)+_0x2e908b(0x128)+_0x2e908b(0x2dd)+_0x2e908b(0x289)+'nd:\x20r'+_0x2e908b(0x597)+_0x2e908b(0xea)+'5,255'+_0x2e908b(0x3f9)+_0x2e908b(0x5ab)+'der-r'+'adius'+_0x2e908b(0x375)+_0x2e908b(0x2a6)+_0x2e908b(0x15a)+'k-car'+_0x2e908b(0x39a)+'order'+_0x2e908b(0x1b2)+_0x2e908b(0x264)+_0x2e908b(0x245)+'backg'+'round'+':\x20rgb'+_0x2e908b(0x3eb)+',255,'+'255,.'+_0x2e908b(0x354)+_0x2e908b(0x5a2)+_0x2e908b(0x1fe)+_0x2e908b(0x51b)+_0x2e908b(0x5bf)+_0x2e908b(0x596)+'1px\x20r'+_0x2e908b(0x597)+_0x2e908b(0xea)+_0x2e908b(0x28b)+_0x2e908b(0x4f1)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2e908b(0x340)+'d.on\x20'+_0x2e908b(0x2dd)+'kgrou'+'nd:\x20r'+'gba(2'+_0x2e908b(0xea)+'5,255'+_0x2e908b(0x1d6)+_0x2e908b(0x2dc)+_0x2e908b(0x44c)+_0x2e908b(0x4c6)+'nset\x20'+'0\x200\x200'+'\x201px\x20'+'rgba('+'255,1'+'07,15'+_0x2e908b(0x1be)+');\x20}\x0a'+_0x2e908b(0x213)+_0x2e908b(0x3e1)+_0x2e908b(0x320)+'ad\x20{\x20'+_0x2e908b(0x1e6))+(_0x2e908b(0x2d6)+_0x2e908b(0x124)+_0x2e908b(0x4ea)+_0x2e908b(0x624)+_0x2e908b(0x1af)+'nter;'+_0x2e908b(0x4ec)+_0x2e908b(0x2d1)+_0x2e908b(0x292)+_0x2e908b(0x681)+_0x2e908b(0x639)+'12px;'+_0x2e908b(0x1d4)+'\x20\x20.sk'+_0x2e908b(0x1cf)+_0x2e908b(0x3c4)+'e\x20{\x20f'+_0x2e908b(0x104)+_0x2e908b(0x19f)+'n-wid'+_0x2e908b(0xcf)+_0x2e908b(0x2a6)+'\x20\x20\x20.s'+'k-car'+_0x2e908b(0x606)+'le\x20st'+'rong\x20'+_0x2e908b(0x58a)+'t-siz'+'e:\x2013'+_0x2e908b(0x42b)+'ont-w'+_0x2e908b(0x1ac)+':\x20600'+_0x2e908b(0x4b2)+'or:\x20r'+_0x2e908b(0x597)+_0x2e908b(0x536)+_0x2e908b(0x5b0)+_0x2e908b(0x577)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2e908b(0x340)+'d.on\x20'+_0x2e908b(0x4eb)+_0x2e908b(0x616)+'itle\x20'+_0x2e908b(0x628)+_0x2e908b(0x34e)+'olor:'+'\x20#fff'+_0x2e908b(0x1c9)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x2e908b(0x469)+'\x20{\x20pa'+_0x2e908b(0x116)+':\x200\x201'+'2px\x201'+'0px;\x20'+_0x2e908b(0x261)+_0x2e908b(0x2bf)+_0x2e908b(0x226)+_0x2e908b(0x4fa)+'nt-si'+_0x2e908b(0x2ac)+_0x2e908b(0x270)+'opaci'+'ty:\x20.'+'4;\x20ma'+_0x2e908b(0x47f)+'botto'+'m:\x206p'+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+'l\x20{\x20d'+_0x2e908b(0x477)+_0x2e908b(0x4e1)+_0x2e908b(0xfb)+_0x2e908b(0x107)+'items'+':\x20cen'+_0x2e908b(0x399)+'gap:\x20'+_0x2e908b(0x21d)+'paddi'+'ng:\x204'+_0x2e908b(0x251)+_0x2e908b(0x418)+_0x2e908b(0x632)+_0x2e908b(0x3fa)+'5px;\x20'+_0x2e908b(0x261)+_0x2e908b(0x2bf)+_0x2e908b(0x135)+_0x2e908b(0x5b9)+_0x2e908b(0x50e)+';\x20col'+'or:\x20r'+_0x2e908b(0x597)+_0x2e908b(0x536)+_0x2e908b(0x5b0)+',.75)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-hin'+_0x2e908b(0x361)+_0x2e908b(0x477)+_0x2e908b(0x5c4)+_0x2e908b(0x460)+_0x2e908b(0x208)+_0x2e908b(0x169)+_0x2e908b(0x11a)+';\x20opa'+'city:'+_0x2e908b(0x145)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x2e908b(0x312)+'h\x20{\x20p'+_0x2e908b(0x192)+'on:\x20r'+_0x2e908b(0x65b)+_0x2e908b(0x3d2)+_0x2e908b(0x2ba)+_0x2e908b(0x11f)+';\x20hei'+_0x2e908b(0x5a9)+'14px;'+'\x20bord'+'er:\x200'+_0x2e908b(0x5ab)+'der-r'+_0x2e908b(0x255)+_0x2e908b(0x196)+'x;\x20ba'+'ckgro'+_0x2e908b(0x156)+'rgba('+_0x2e908b(0x24e)+'55,25'+_0x2e908b(0x30a)+');\x20cu'+_0x2e908b(0x143)+_0x2e908b(0x4dd)+'ter;\x20'+_0x2e908b(0x134)+_0x2e908b(0x2fd)+_0x2e908b(0x2a6)+_0x2e908b(0x15a)+_0x2e908b(0x4f8)+_0x2e908b(0x331)+'after'+_0x2e908b(0x222)+_0x2e908b(0x153)+_0x2e908b(0x647)+_0x2e908b(0x369)+'tion:'+'\x20abso'+_0x2e908b(0x43f)+'\x20top:'+'\x203px;'+_0x2e908b(0x4d5)+':\x203px'+_0x2e908b(0x3db)+'th:\x208'+_0x2e908b(0x5b2)+_0x2e908b(0x1ac)+_0x2e908b(0x466)+_0x2e908b(0x5ab)+'der-r'+'adius'+_0x2e908b(0x49b)+_0x2e908b(0x15e)+'kgrou'+'nd:\x20r'+'gba(2'+'55,25'+_0x2e908b(0x28b)+_0x2e908b(0x2ab)+_0x2e908b(0x5bc)+_0x2e908b(0x642)+_0x2e908b(0x60e)+'eft\x20.'+_0x2e908b(0x5b7)+_0x2e908b(0x1a8)+_0x2e908b(0x160)+'.2s;\x20'+_0x2e908b(0x261)+'\x20.sk-'+_0x2e908b(0x312)+_0x2e908b(0x2b9)+_0x2e908b(0x4d6)+_0x2e908b(0x416)+_0x2e908b(0x1c0)+_0x2e908b(0x5d0)+_0x2e908b(0x133)+_0x2e908b(0x1a5)+_0x2e908b(0x31b))+('a(255'+_0x2e908b(0x44e)+'157,.'+_0x2e908b(0x44d)+_0x2e908b(0x261)+'\x20.sk-'+'switc'+'h[ari'+'a-che'+'cked='+'\x22true'+_0x2e908b(0x600)+_0x2e908b(0x1d9)+_0x2e908b(0x3f0)+_0x2e908b(0x635)+_0x2e908b(0x324)+_0x2e908b(0x1a8)+'ound:'+'\x20#ff6'+_0x2e908b(0x3c9)+_0x2e908b(0x261)+'\x20.sk-'+_0x2e908b(0x39c)+_0x2e908b(0x48c)+_0x2e908b(0x483)+_0x2e908b(0x156)+_0x2e908b(0x60b)+_0x2e908b(0x24e)+_0x2e908b(0xea)+'5,.03'+_0x2e908b(0x2ef)+'order'+_0x2e908b(0x2bb)+_0x2e908b(0x4e4)+_0x2e908b(0x31c)+'ius:\x20'+_0x2e908b(0x144)+_0x2e908b(0x578)+_0x2e908b(0x219)+_0x2e908b(0x1dc)+_0x2e908b(0x292)+_0x2e908b(0x681)+'6px\x209'+_0x2e908b(0x42b)+'ont-s'+'ize:\x20'+'11.5p'+_0x2e908b(0x52f)+_0x2e908b(0x468)+':\x20non'+'e;\x20bo'+_0x2e908b(0x515)+_0x2e908b(0x488)+'inset'+'\x200\x200\x20'+_0x2e908b(0x374)+'\x20rgba'+_0x2e908b(0x24c)+_0x2e908b(0x24e)+'55,.0'+_0x2e908b(0x24b)+'\x0a\x20\x20\x20\x20'+'.sk-f'+_0x2e908b(0x2a2)+_0x2e908b(0x5e2)+'n\x20{\x20b'+'ackgr'+_0x2e908b(0x2c6)+'\x20#221'+_0x2e908b(0x693)+'}\x0a\x20\x20\x20'+_0x2e908b(0x2bf)+'range'+_0x2e908b(0x486)+'splay'+':\x20fle'+_0x2e908b(0x569)+_0x2e908b(0xf9)+_0x2e908b(0x206)+_0x2e908b(0x4e6)+_0x2e908b(0x131)+_0x2e908b(0x5a7)+_0x2e908b(0x385)+'\x0a\x20\x20\x20\x20'+'.sk-s'+_0x2e908b(0x140)+_0x2e908b(0x10b)+_0x2e908b(0x41a)+_0x2e908b(0x379)+_0x2e908b(0x47c)+'e:\x20no'+_0x2e908b(0x433)+_0x2e908b(0x659)+'ance:'+_0x2e908b(0x2fd)+_0x2e908b(0x3db)+'th:\x209'+_0x2e908b(0x4a3)+_0x2e908b(0x5a6)+_0x2e908b(0x550)+'x;\x20ba'+_0x2e908b(0x483)+'und:\x20'+'trans'+'paren'+_0x2e908b(0x138)+_0x2e908b(0x213)+_0x2e908b(0x595)+'ider:'+':-web'+'kit-s'+_0x2e908b(0x140)+'-runn'+'able-'+'track'+_0x2e908b(0x2cc)+_0x2e908b(0x513)+'\x202px;'+_0x2e908b(0x14d)+_0x2e908b(0x504)+_0x2e908b(0x555)+_0x2e908b(0x479)+_0x2e908b(0x3bd)+_0x2e908b(0x3c2)+_0x2e908b(0x660)+_0x2e908b(0x5d9)+_0x2e908b(0x68c)+'ent(#'+'ff6b9'+_0x2e908b(0x3cd)+'f6b9d'+')\x200\x200'+_0x2e908b(0x3ce)+_0x2e908b(0x1ed)+_0x2e908b(0x17f)+_0x2e908b(0x5d8)+'%\x20no-'+_0x2e908b(0x35a)+_0x2e908b(0x338)+_0x2e908b(0x5f3)+_0x2e908b(0x28b)+',255,'+_0x2e908b(0xe3)+_0x2e908b(0x1d4)+_0x2e908b(0x284)+'-slid'+_0x2e908b(0x210)+_0x2e908b(0x5c2)+'t-sli'+_0x2e908b(0x132)+_0x2e908b(0x128)+_0x2e908b(0x30d)+'bkit-'+'appea'+'rance'+_0x2e908b(0x3ca)+'e;\x20wi'+_0x2e908b(0x2b7)+_0x2e908b(0x144)+_0x2e908b(0x5a6)+'t:\x206p'+'x;\x20ma'+'rgin-'+'top:\x20'+_0x2e908b(0x609)+_0x2e908b(0x14d)+'er-ra'+'dius:'+_0x2e908b(0x2d9)+'\x20back'+'groun'+_0x2e908b(0x506)+_0x2e908b(0x282)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2e908b(0x1cd)+_0x2e908b(0x4fa)+'nt-si'+_0x2e908b(0x2ac)+_0x2e908b(0x270)+_0x2e908b(0x208)+_0x2e908b(0x625)+_0x2e908b(0x12c)+'0;\x20mi'+_0x2e908b(0x494)+_0x2e908b(0x58b)+'8px;\x20'+'text-'+_0x2e908b(0x4ea)+_0x2e908b(0x4c7)+_0x2e908b(0x23c)+'olor:'+_0x2e908b(0x424)+_0x2e908b(0x193)+_0x2e908b(0x109)+_0x2e908b(0x5e0)+_0x2e908b(0x319)+_0x2e908b(0x213)+_0x2e908b(0x346)+_0x2e908b(0x339))+('\x20widt'+_0x2e908b(0x604)+_0x2e908b(0x5b2)+'eight'+':\x2022p'+_0x2e908b(0x608)+_0x2e908b(0x458)+_0x2e908b(0x29b)+_0x2e908b(0x65d)+'-radi'+_0x2e908b(0x2f5)+_0x2e908b(0x324)+_0x2e908b(0x1a8)+'ound:'+_0x2e908b(0x2fd)+';\x20pad'+_0x2e908b(0x36a)+'\x200;\x20c'+_0x2e908b(0x501)+_0x2e908b(0x1a9)+'nter;'+_0x2e908b(0x1d4)+'\x20\x20.sk'+'-note'+_0x2e908b(0x4fa)+_0x2e908b(0x2d4)+'ze:\x201'+_0x2e908b(0x270)+_0x2e908b(0x578)+':\x20rgb'+'a(246'+',238,'+'242,.'+_0x2e908b(0x40c)+'addin'+_0x2e908b(0x248)+_0x2e908b(0x542)+_0x2e908b(0x261)+_0x2e908b(0x2bf)+_0x2e908b(0x308)+_0x2e908b(0x187)+_0x2e908b(0x5d5)+'r:\x20#f'+_0x2e908b(0x3af)+_0x2e908b(0x2a6)+'\x20\x20\x20.s'+_0x2e908b(0x5b8)+'\x20{\x20al'+_0x2e908b(0x421)+_0x2e908b(0x2b6)+'flex-'+_0x2e908b(0x25b)+_0x2e908b(0x5ab)+_0x2e908b(0x612)+_0x2e908b(0x686)+_0x2e908b(0x342)+_0x2e908b(0x371)+'s:\x208p'+_0x2e908b(0xde)+_0x2e908b(0x116)+_0x2e908b(0x466)+_0x2e908b(0x590)+_0x2e908b(0x15e)+_0x2e908b(0x289)+_0x2e908b(0x605)+'ff6b9'+_0x2e908b(0x277)+_0x2e908b(0x15c)+_0x2e908b(0x18d)+_0x2e908b(0x418)+_0x2e908b(0x632)+_0x2e908b(0x3fa)+'5px;\x20'+'font-'+'weigh'+_0x2e908b(0x4f4)+'0;\x20cu'+_0x2e908b(0x143)+_0x2e908b(0x4dd)+_0x2e908b(0x399)+'}\x0a\x20\x20\x20'+_0x2e908b(0x2bf)+_0x2e908b(0x4a1)+'over\x20'+_0x2e908b(0x48a)+'ter:\x20'+'brigh'+'tness'+'(1.1)'+_0x2e908b(0x2a6)+_0x2e908b(0x442));window[_0x2e908b(0x553)+_0x2e908b(0x119)+'stene'+'r'](_0x42704c[_0x2e908b(0x341)],_0x545b5a=>{var _0x236797=_0x2e908b,_0x23d551={'obvNs':'rgba('+_0x236797(0x24e)+_0x236797(0x395)+_0x236797(0x30c)+'5)'};_0x42704c[_0x236797(0x512)]('LZvUc',_0x236797(0x667))?(_0x160200[_0x236797(0x34b)+_0x236797(0xc8)]=_0x4ca86f||_0x23d551['obvNs'],_0x59dd11[_0x236797(0x6a6)+_0x236797(0x57e)](_0x19b2ff,_0x520da5,_0x4f9db5),_0x29d927+=0x2227+-0x1fc5*-0x1+0x41dc*-0x1):_0x545b5a[_0x236797(0x4d7)]===_0x236797(0x464)+'t'&&(_0x545b5a['preve'+_0x236797(0x2e0)+_0x236797(0x1c5)](),_0x528306());},!![]);var _0xf18d1a=document[_0x2e908b(0x572)+'eElem'+_0x2e908b(0x269)]('div');_0xf18d1a['style'][_0x2e908b(0x5dc)+'xt']='posit'+_0x2e908b(0x2b5)+_0x2e908b(0x5ae)+'top:1'+_0x2e908b(0x37a)+_0x2e908b(0x513)+'12px;'+_0x2e908b(0x49c)+_0x2e908b(0x4ba)+_0x2e908b(0x1ef)+'646;c'+_0x2e908b(0x501)+_0x2e908b(0x67e)+'ter;w'+_0x2e908b(0x2ba)+_0x2e908b(0x2f9)+'heigh'+'t:26p'+'x;opa'+_0x2e908b(0x32b)+_0x2e908b(0x1a3)+_0x2e908b(0x228)+_0x2e908b(0x51d)+_0x2e908b(0x2ec)+'ty\x200.'+_0x2e908b(0x173)+'inter'+_0x2e908b(0x65a)+_0x2e908b(0x545)+'to;fi'+'lter:'+_0x2e908b(0x58c)+'shado'+'w(0\x200'+_0x2e908b(0x527)+_0x2e908b(0x60b)+'255,1'+_0x2e908b(0x18c)+_0x2e908b(0x4ce)+'))',_0xf18d1a[_0x2e908b(0x5af)+_0x2e908b(0x62e)]=_0x2e908b(0x3e7)+'viewB'+_0x2e908b(0x2c9)+_0x2e908b(0x3ba)+'\x2024\x22>'+_0x2e908b(0x35d)+_0x2e908b(0x697)+'12\x2021'+_0x2e908b(0x58e)+_0x2e908b(0x6a2)+_0x2e908b(0x558)+'-4-7.'+_0x2e908b(0x1e5)+_0x2e908b(0x35c)+_0x2e908b(0x4bc)+_0x2e908b(0x63d)+_0x2e908b(0x14b)+_0x2e908b(0x303)+_0x2e908b(0x1e3)+_0x2e908b(0x113)+_0x2e908b(0x415)+_0x2e908b(0x3d4)+_0x2e908b(0x665)+'\x22none'+_0x2e908b(0x12f)+_0x2e908b(0x61b)+_0x2e908b(0x28f)+_0x2e908b(0x60c)+_0x2e908b(0x6a7)+_0x2e908b(0x41c)+'h=\x222\x22'+_0x2e908b(0x465)+_0x2e908b(0x4b1)+'necap'+'=\x22rou'+_0x2e908b(0x559)+'troke'+_0x2e908b(0x5c9)+_0x2e908b(0x2c5)+_0x2e908b(0x1f4)+'d\x22/><'+_0x2e908b(0x20b)+'e\x20cx='+'\x2212\x22\x20'+_0x2e908b(0x25d)+'0\x22\x20r='+'\x221.5\x22'+_0x2e908b(0x315)+_0x2e908b(0x256)+_0x2e908b(0x64e)+_0x2e908b(0x54f)+_0x2e908b(0xd5),_0xf18d1a['title']=_0x42704c['fXyWP'],_0xf18d1a[_0x2e908b(0x48b)+_0x2e908b(0x163)+'er']=()=>_0xf18d1a['style']['opaci'+'ty']='1',_0xf18d1a['onmou'+'selea'+'ve']=()=>_0xf18d1a['style'][_0x2e908b(0x2ec)+'ty']=_0x2e908b(0xec),_0xf18d1a[_0x2e908b(0x28d)+'ck']=_0x2ee121=>{var _0x24510b=_0x2e908b;_0x2ee121['stopP'+_0x24510b(0x430)+'ation'](),_0x528306();},document[_0x2e908b(0x136)]['appen'+'dChil'+'d'](_0xf18d1a),_0x42704c['yxNQW'](_0x418e70),requestAnimationFrame(_0x33c9da),console['log'](_0x2e908b(0x302)+'ra-ko'+_0x2e908b(0x349)+_0x2e908b(0x507)+_0x2e908b(0x554)+_0x2e908b(0x188)+':',_0x1475a8[_0x2e908b(0xf8)]);});})()));function _0x51a4(){var _0x213ddf=['AKnVvM0','igH1CNq','CMfUz2u','q2TzswW','sfrnta','AgvSza','lK92zxi','EYbWB3m','lxnPEMu','ig1HCMC','yxrLkde','DdOGmtu','BwLU','zciVpJW','yJPOB3y','mtfWEca','C3rLBMu','idGWChG','vNj4C1m','idqTnc4','DLrrDvy','igHLAwC','iJeYiIa','ieLZr3i','BNnPDgK','zLv0Auy','BgLUzvC','lxnPEMK','y29TyMe','oIaIiJS','v1zMzNm','tgLZDa','idmWChG','CIdIGjqG','v1LZz1C','psjTBI0','nMi5zci','igfWCgW','mxWXmNW','CM9ZC2G','CvHIueS','DhLqy3q','vgzmwwW','r3zmAgu','yw11s1e','khjLBg8','EhzUBfm','ChbLyxi','lwv2zw4','zwXHDgK','ihn5C3q','B3jKzxi','EM5WDfq','EcbYz2i','zdOGBgK','BI1ZDwi','zxjYB3i','CfbbBfa','twrAy1O','zMLSBd0','rhzisvi','vfnMqwC','DgvTlxu','Fdv8mNW','rM5vsu8','vg90ywW','Agf0igq','mcWWlJu','C2STBM8','z1Dozwq','AgvZ','yxrPB24','BKn6A0W','oIaXoYa','ywLSzwq','CYbnB3y','ywnPDhK','B2LS','Ag9VA3m','zNbZ','y29TCgW','z2zTzeu','y3qGB24','AwDUyxq','oNbVAw4','C2f2zq','Ahfgr0W','Aw5NoIa','y2fWu2G','uMvMAwW','CYbHBgW','ms4XlJa','mdSGyM8','quzMy2S','CdOGmta','BsbVBIa','zgjNweG','qLnjww4','z3jHzgK','zMXLEdS','Aw46ida','oYbYAwC','Fdv8mhW','ztOGmtC','BMuUqxa','nde5oYa','ie9olG','mNb4ihu','AwvSza','igq9iK0','C3rPBgW','zsbBrvG','BY1ZDMC','DgL2zsa','y2uGB3y','C3bSyxK','zhbY','B25LigK','BsbYAwC','zMuGBw8','ltiUns0','Ahq6idi','Aw4GC2e','qxvOEee','zMLSBfq','DhjVA2u','CIb2ywW','DhLSzq','y2HtAxO','B24UvgK','ig5VigG','AxvZoIa','BNr2Bve','v0fttsa','DgG6ida','rgjhCKG','AuLTqxK','s2v5uW','Eca2ChG','rM9Yy2u','DMC+','yxj0lG','BMDL','mxWWFdq','yMrQv0u','Ew5YsKO','rvrjAw0','igv4Axq','igLZigm','EdSGCge','zw50zxi','vMfSDwu','ignHBgm','BMvS','lJa4ktS','CMvSB2e','zgTPDa','qKj3u1e','qNDjq2y','Bw4TBg8','v2fxBvC','ntuSmJu','zYbJyw4','mc41','rMLLBgq','DwX0','igfSAwC','lxbHCMu','DdOXmda','y3KGB24','nNb4ida','EhzTEhi','CMXHEsa','BwvsDw4','tuTRwwG','DxDTAW','AwDUlwK','tM8Gu3a','zxG7ige','AwrHDgu','lcbJywW','BI1JB2W','yxnLBgK','rK93rM4','uhjIv1i','C2v0sxq','mciGCJ0','Bgv4oIa','zM9YBxm','uxzMAwe','BgLNBI0','ChGGDwK','mJm4ldi','rNjHBwu','ihSGlxC','BdOGBM8','wKPIuvi','Bwf4','Awy7ih0','u0flvvi','oJiXndC','u2HHCNa','ltiUnsa','iJeUnsi','BwvZC2e','zgrPBMC','EKLuCK4','B29Rihi','zw50tgK','ideWChG','BhmGysa','DLrvq3O','icaGica','u3rHDgu','idi2ChG','qw1LvuG','DxqGDgG','t1vsx18','Bw1VifS','Bgv4oYa','sg1fChu','mJqWiey','zg9JDw0','AhvTyIa','CgvNsgO','ywqU','u2Lmq2K','DdOGnJa','kdaSmcW','ienquW','iIbZDhi','kg92zxi','zxi7igC','zgvYlxq','yMfJA2C','zMXLEdO','BgfIzwW','yM9KEq','zxjZy3i','DdSGFqO','CwnKDKi','A2L0lxm','mKLpt01fsW','ChG7iha','C2fMzu0','A2v5C3q','ywrK','BgLKzxi','BNrLEhq','DMvYBge','CNnVCJO','nNb4oYa','ic40oYa','ignHy2G','nhb4oYa','CLjYvha','nYWWlJG','AxrJAa','nxm0idi','BI5MAxi','igjVCMq','yMX1CG','ntaLktS','AwX0zxi','sgLKzxm','lwHVCa','BNrLBNq','j3qGC3q','phnTywW','Dw5KoIa','CY1Zzxi','ywrKAw4','vvLXvhC','icaGlNm','C3bSAxq','Bg9YoIa','DMG7EI0','oYbIywm','swr6qMO','B3vUzca','BgvZiem','oYbQDxm','C2vLBNq','zM9hthi','sLvZCgG','BwvKicG','wNzWsNC','zgL2','C2L6ztO','zKTMzxO','qMXVy2S','CYaNzNu','lYbhCMe','z3LIywm','qNvUBNK','yw1YCgq','yK1Vr1y','zg93BIa','mNm7Cg8','BM9szwm','t251u2q','C2zVCM0','CJOGCg8','iefmtca','B05oC2e','B3rOAw4','CMvU','ywXSig8','t0HLywW','y2vUDgu','lca1mcu','nYWWlJm','yMfYlxq','lwnVBhm','ugDMDfe','CMvMAxG','qunuAYa','rw5NAw4','zxjYihS','ifvxtuS','ie92zxi','z3jHDMK','zxiTzxy','mdCSmtu','i2zMzJS','C2ToruK','BhvYkdi','CNq7igC','yw1ZAem','B3nPDgK','kdi0nIW','DgLVBI4','DgvYigm','oIa5oxa','Bw4TDgK','sxnhCM8','v2XZDxy','B3qGBwe','Be1JD2K','ChbLBNm','AMrvAxe','n3WZFdy','mtSGBwK','ugf0Aa','tK1oyxq','ic5TBI0','mc41o3q','tffOsKy','CM91BMq','qKHNs1u','B3vqCfa','ywnRz3i','oIbWB2K','q0fovKe','ntKXmLjWzhjAAW','zwLNAhq','Fdj8mxW','ocK7ih0','CZOGy2u','uuDkvNe','Aw9U','lxjHzgK','oIbJzw4','ihSGywW','u0fgrsa','B2STCMu','Bw4TDge','ihSGD2K','B2vUs1u','zIXZExm','C3bLzwq','n3WZFdq','zxj5idi','nYWUmJG','zwv6zsa','iNrYDwu','FdH8mNW','tufez2i','BhrOige','idK5osa','yxvSDa','zxmGEYa','lxnHBNm','zgvZ','mgy1oYa','ve9tBvy','BI1TywK','B2rxy28','AY12ywW','CMuGkfm','lwnHCMq','B25JAge','Dhj1zq','oIbPBMG','t3rptwq','ih0kica','Bg9Hzc4','lc4WncK','A2rwBvK','vNDwugi','zNrLCIa','DdOGmZq','DdOGmJG','zwvMmJS','mtf8oxW','AxmGyNu','CuDRDLe','DgGUsw4','lc4WnIK','DgXL','nwmWidm','tu9ersa','nsaWlti','zgLZCgW','ide0ChG','DMTmsKy','DxbJsfK','ywWGBwu','A291CNm','zgvSzxq','CIGTlxa','tg5MvLa','ndC0odm','zJmY','rLbtigm','y3vYC28','lM1Ulxm','iNjVDw4','ywiUywm','idrWEdS','mJy0wxDkAK5X','t1nOB28','ig9Wywm','CM9Rzxm','sfvgt3q','BfjHDgK','AxnKq1K','C2HHzg8','CZO6lxC','CvvzAMS','yNDesg4','vw1NCNy','BNrdEgS','Aw5WDxq','odaSmtK','DgvTCZO','y2DTBhe','zM9UDc0','qxbWBgK','B1jLy28','y2LYy2W','mdb2DZS','BNn0ywW','oIbJDxi','C2HVB3q','zxi6oI0','ndSGFqO','ugLeA0O','icaGic4','CgfLwLi','B2fKzwq','uMvJDa','igvUDgK','rfDwv1e','oIaJzJy','mhb4lca','yMvS','ELbVv3K','ohb4oYa','r1PmuMu','y3jVC3m','AwrLCG','CI51As4','ihSGy28','Dc1ZAxO','y29SCZO','ig1PBM0','BwrLC2m','Ag9VA0m','CMfUC2K','D1bABK0','y3vIz2O','BuvlsvK','r2zev04','CgfYzw4','wwvMAMS','BgXIyxi','Fdj8mta','u3bLzwq','BgvUz3q','Bw8GDg8','BMqGt0G','mtu3lc4','BwLZyW','Aw9UlLq','ig1PBIG','odiPoYa','CeDRExa','D2L0Aca','Ahq7igm','s3fwCMm','Dgv4Dem','ihn0AwW','uMf0zq','DgvY','EufdyNe','yKrizfy','yw5Jzs4','mNb4oYa','DgLKzs4','Bg9HzgK','zZOGmNa','z2uUiei','uhjIEKS','nsK7ih0','kdi1nsW','ldiXlc4','mJu1ldi','Awq7iha','BM9UztS','ChGGmdS','oYbWB2K','swrzzfa','mtSGyMe','ywrPDxm','psiJzMy','Dgv4Dei','B3jZige','C2STyNq','m3W2Fdq','C3rHCNq','y3vpEum','y3K9iJe','ls1W','i2zMzG','BKfRvg4','FqOGica','ifTfwfa','tKCG4Ocuia','Dxm6ide','Aw5NicS','CJOGDgG','BM93','A3nqB3m','zw50','CMvHzhK','wMn1rui','v2LWzsa','yKLZCMO','C2fRDxi','BwLKzgW','mxb4oYa','tw92zw0','r0LPBMu','B2r5','BgLUzvq','zvbSDwC','CMLUz3m','zdSGy28','CYb3B24','EMTtExu','u1fov0y','lwLVxYO','t2r0A3q','wMvYB2u','ChvZAa','sfzfrMq','s2LSBgu','mdSGFqO','zJzIowq','ocKPoYa','icaUC2S','zw5HyMW','AguGCMu','uer1vxm','ltqTnY4','A2DYB3u','B25SEsW','nsWYntu','DhmGCgW','B25JBgK','zvKOmtG','i2zMnMi','C2v0qxq','zM9UDa','ihbHzgq','CMfWAwq','B2reAwu','vvjbx0S','B3C6ida','ideYChG','EdSGAgu','ue5vzg4','zsb3zwe','ida7igi','Dw1UoYa','BMCGzM8','wejXsfq','mxWYFdy','iezPCMu','t1zys2G','AwvSzca','rwXLBwu','CgXHEtO','Bw4TAca','oYb9cIa','BMq6ihq','Aw1Lihm','vxLtsM4','s0jVzhq','lc4YnsK','EMu6ide','DujfvMK','rxHW','lKXVy2e','qMjRB0G','C2v0x3q','y2vSzxi','C3rYB2S','zsbTAxm','Aw9UoMy','zwXMoIa','zhrOoIa','BIb0Agu','AfTHCMK','Awr0AdO','oIaWoYa','mtbWEdS','cIaGica','C2STy3q','ic5ZAY0','yMX5lum','txDlvvm','A2j1whm','y2f0','DhKGjq','AM9PBJ0','B3vUzdO','qMXgCfa','zvbPEgu','B3G9iJa','s2Xgww8','s1vPsg0','ihSGAgu','BvfXsg0','Axr5oIa','CJOGi2y','zvHWqwe','idHWEdS','y2XHC3m','mIaXmK0','BNqTC2K','Bw14z0G','yxK6igy','yMvNAw4','Aw9FnZi','iduWjtS','B3nL','nIaXoci','oYbIB3G','EYbIywm','CgfKzgK','oYbKAxm','BNrezwy','AYbVBI4','iM5VBMu','AKXOr1C','zwn0Aw8','qNzewNi','B25PBNa','DKjdsfq','uwzKrNy','vwDNANe','zMLSBcW','BwuG','B3bHy2K','ihrOAxm','C2vSzwm','nsK7igi','y0jUwfG','v01ligK','y2n1CMe','zNvSBhm','t2nVywq','Dxm6idy','DxmGywm','zxmGB24','uLvsvgW','mJzWEdS','ndHWEcK','Ec1KAxi','CKDbug4','ig5VBMu','x19ZywS','twLZyW','BM9tChi','Bxm6igm','w3nHA3u','idqGnc4','icaUBw4','ihDOAwm','CML0zxm','s2v5ra','BM90zs4','Bg93zxi','nsWUmdC','C2vYDMu','mcWWlJC','EYaTD2u','zM9YBtO','BhmGDgG','q2XVC2u','zsbZzxi','C3DPDgm','yxjNzxq','DgfIihS','igzPBgW','BMC6ida','AwWGC3a','zfPQu20','ktSGFqO','vgHLC2u','oIbYz2i','CI1Yywq','pc9ZBwe','B246ig8','yMLJlwi','CMqTAgu','CIbNyw0','icaGlM0','BMfACw8','ChG7igi','nti2mgLOALz3BG','B3vUDgu','oIbJB2W','lxK6ige','CZPUB24','yxv0BY0','y2L0EtO','ihSGB3a','zw1ZoIa','A291CI0','zxrLy3q','DhLWzq','DgnOoJO','rwfJAca','v2vItw8','Dgv4Dee','B2f0Eq','yxa6ihi','AxmGAg8','DcWGCMC','Bg9YihS','mcbOB28','igjHBIa','AgfZ','Bg9Hzgu','tg9Hzgu','ign1CNm','AY1Jyxi','Cw5bEuO','CMrLCI0','ExLNsMC','yYGXmda','CNjVCG','C2STy28','AwX5oIa','Dg9Y','DxjDig0','C2v0','zMLSBfm','DKntC2W','Avnzrva','zYb7igm','ig1VBwu','vxLyAva','ztOGmtm','Bw4TDg8','Bw4Ty2W','mdi1ktS','Bg9JAW','Aw1Llca','terXAKu','D2HLCMu','vwrTB1i','CMvWzwe','uuPfEhq','lJuGms4','phbHDgG','DgfNtMe','sg9VAYa','zwfK','Dcb7igq','AtmY','A3njtgi','i2zMyJm','ndqYnde3nw1nwvzpCW','uLHrueS','BI1SB2C','u2vVwLe','ihbVC2K','zgLUzZO','EtOGz3i','igXLyxy','lxnJCM8','B01mAg4','vw5PDhK','s2v5C3q','CMfKAxu','ChG7cIa','ywn0A0S','mcaXChG','oIa0ChG','DMvYihS','idaGnha','zxrhyw0','lwfWCgu','mNb4o3i','zvzHBhu','ohWXm3W','B3bLBG','Ec1OzwK','BhvTBJS','lM1Ulxq','BwXItvK','BML0igy','mxb4ida','Ag9ZDg4','ChG7ih0','y2HLy2S','lMLVig0','ruXbAw0','B2LSicG','D3jPDgu','u2vAve0','zxqGmca','wurzu0W','shjOq2q','AxDUDue','AxP0wxi','oIbMBgu','ihnOB3q','zenOAwW','mdbTCY4','mZuSmJq','zsb2ywW','Be1VDgK','nJTWB2K','DgvYoYa','zcb7igi','DML0Eq','zMLLBgq','D2fYBG','B3nWywm','AhbOtNa','B29RCYa','B2X1Bw4','BLv1rwi','ldi1nsW','q09lEuW','lMXHC3q','BMv2zxi','lxrVCca','vM1ovLe','zxj2zxi','ohG5mc0','BefbBKe','rLfOB1K','B25Lige','oIbZDge','zJDHotm','oYb1C2u','BI1PDgu','zw15igm','BwjdvwG','tgnIAuS','Ag9VA04','B290zxi','yxK6igC','icaGig8','AwXLzdO','idaGmJq','icbIywm','A2HqsfK','igjHy2S','yM91BMq','CM9Szq','u2nHBgu','B2rL','z3jVDw4','B2PNv3i','lxrPDgW','s2vfCKy','AfnOywq','uMvZzxq','z2v0','yJLKoYa','oIbUB24','CMzSB3C','ihjLBg8','zcWGi2y','ic8GDMe','Bw4TAa','zMrXD2m','DMLZAwi','DMu7ihC','igjHBM4','lJv6iIa','igrPC3a','B0DRDxm','igf1Dg8','lxnLCMK','C2STDMe','AsXZyw4','oYb3Awq','CMvHza','DgHVzca','C2v0uhi','zvjHDgu','mJSGC3q','C2STy2e','BM8Gy2G','rgLL','DezTrwy','BxvZrMi','DMfSDwu','phn2zYa','sw5ZDge','zxncBgm','zw1LBNq','ysGYntu','C3rYAw4','A3ndChm','r3n0vgO','AcbVBMu','EYbSzwy','D2LKDgG','zsGXnta','tLLfqKq','BMvJyxa','idi0iIa','nJu5n1LMqNvQtG','Dw5PDhK','DhjHBxa','lc4WocK','oIaXms4','lJq1oYa','sKfrq3C','mNWXFdm','DxjH','tuLtu0K','tevRB0S','A2vizwe','zxzLCNK','BgLNBG','ifvjiIW','nJaWia','qunWELG','rMXdqve','CI52mq','wNrtvwe','A0vmze4','ide7ig0','nsK7iha','zxrL','BgfZDeu','igDHDgu','v0vXv0e','AguGDxm','CJSGz2e','vLHLsem','weTfqwW','ns00idC','y2TLzd0','wuDnCwC','igzVBNq','DxjDigG','zwjRAxq','sNv3vui','lxDPzhq','zwCGzMe','B3ryEKu','oYbMB24','odbWEcW','AwDUlxm','FdD8mhW','sK9ytMq','ihjNyMe','mtz8mte','BerntKi','Ad0ImIi','Fdv8mta','yxb0Dxi','oYbHBgK','ChG7igy','Bw9fEha','nZTWB2K','B3nLihm','lcbPBNm','CM9WywC','DMvTzw4','Aw9FmZa','BMu7ige','AgfPCG','z2fTzuW','ChjLDMu','ywn0Axy','zcbZzwu','ywqGDg8','z1HlzNe','ig9YigS','BNnSyxq','DMDTENG','v2fOEMO','Bhv0ztS','yLroChi','rgfTywC','icaG','zwn0oIa','tw9Kzsa','s2v5qq','EwPqt2q','vfHHB24','C2STC3C','ntuSlJa','zsaOt0G','Ag1ZvLm','lxnOywq','mJuPoYa','ldeWnYW','Aw5Zzxq','oYbMAwW','tM8GuMu','rNfmBfe','sfrtuK8','C3rVCfa','q3jVC3m','y2fWDhu','ELHkrhu','CMrLCJO','tgvNAw8','B3i6iha','BMX5kq','zxjZ','BM9Uzq','mxWWFdu','DhvYyxq','B2nRoYa','mcWWlJy','ChnoEKu','kc4YmIW','sw5Zzxi','ihn0CM8','oIa4ChG','mJu1lde','DgXPBMu','BwjVzhK','zw50CW','DNnKrfC','uMLvww4','yMfJA2q','u2fRDxi','sKPlwwG','C2XPy2u','ExLgze0','DKHUwLO','kYbmtui','B2XPBMu','ufnKCuW','zxiGEYa','AxnWBge','uxLsD0q','idjWEdS','DgG6idu','CMvHzey','yxjHBMm','zvfdwgS','oYbTAw4','CMDPBI0','Bgu7igy','DKPpB0u','rMj3EM0','y2TNCM8','mJiSocW','Aw9F','ihSGzgK','Bwf0y2G','zg93oIa','nMvLzJi','EYbMAwW','B25TB3u','ihSGyMe','sfvQD0e','zxHAyNO','Ag9VA0C','y2fWtw8','De5Vzgu','A2v5Dxa','zhjJy0i','BI13Awq','BgW+','EYbJB2W','FdD8nNW','y29PBa','EuvUz2K','rw5rywO','oIa1mcu','EI1PBMq','EdSGz2e','t0PgAMK','ignVB2W','Cg9ZAxq','yNrUoMG','BMf2','mhb4oYa','yxa6ide','zuLYAgO','C2HPzNq','lM1Ulxa','CZOGmty','BI1JBg8','zgrPrNC','D0nVBg8','tg9JywW','mtGGnIa','CMeTA28','Cc1ZAge','s3rZqNi','A2uTBgK','oYbJB2W','vNreBg4','u2TPChm','yu9Aswe','z2LMEq','BhvLCY4','y3jLzw4','CIiSici','zxG6mJe','zwf5wvO','oc00lJu','yw5Uywi','y09xvuC','igzVDxi','uJOG','vgLJAW','igLMig0','y2fUDMe','q3nJr04','zZOGnNa','B3C6igK','oIbYAwC','D0jSDxi','ie1VDMu','ys11Aq','Bw91C2u','Dg9Nz2W','DgL0Bgu','nYWWlJC','z1LKq3q','y2HLCYa','DhjPyNu','yxbWzw4','B2rLu3q','qM90Dg8','igXLzNq','ys1JAgu','y29Kzq','z29K','v1bsAKm','igvYCG','n3WXmNW','Dxm6idi','ihbVAw4','D3vNu04','Aw5Mqw0','EsbKzwy','EtOGzMW','CgfYC2u','v0vuwvq','yM9Yzgu','zxjZihq','ignLBNq','yMHVCa','AwrLihS','rg1NDKC','ywXPz24','lNnRlwm','igDHCdO','Cg9W','jsK7ic0','igzSzxG','yuTVDxi','lc4WnsK','u3n6CKK','mtCZodq0nZbks0v0uLu','DdOGnZa','Fdn8mq','B250zw4','D3Dvruy','AY1ZD2K','AguGzgu','ihSGzM8','rg1RC3K','q1btihi','zcbJAg8','Dw5RBM8','zwfSDgG','ywXSihq','DxjZB3i','mcWUntu','BYb7igq','zxiTCMe','C3bHBG','zdOGi2y','zw51ihi','mcWWlJG','Dg9W','qsblt1u','Bgf5ig8','zuvSzw0','DgvTCgW','zxG6ide','lwrPCMu','igfUzca','CNvzuNK','CuDiruK','AwDODdO','y2vZlG','Ec1ZAge','igHVB2S','AxnPyMW','ig1HEsa','zxjSyxK','mxb4ihi','DZOGAw4','igvSC2u','DgLVBJO','CMLZAYa','Bw4TC2K','Ew1lExG','t2vMDeO','zMLSzw4','oIb0CMe','ysblB3u','A1fkse4','zwXK','idrWEca','y3jVBgW','CLbez3O','zxzLBNq','vvDnsYa','tKzwBMG','zMXuy3m','BNnWyxi','EdSGB3u','mNWWFdq','Bw92zq','BNrLCI0','oIbIBhu','yw1L','uNbzuwO','ndySmJm','tM8Gzw4','sKLKCxi','C21HBgW','yNroEu4','zMLSBa','q291BNq','zw50CZO','zvn0EwW','ohb4ksK','mwzYksK','C2STCMe','EcaWoYa','nIa2Bde','y2HdB2W','Dhm6yxu','mJvWEdS','t3zLCNC','BsbJzw4','C3r5Bgu','yxKGB24','Bw92zvq','AfrqDgS','y2HPBgq','BNriy3a','lZ48l3m','DdOGoha','Aw5KzxG','yw5ZzM8','ywrKrxy','zwfKEs4','zgL1CZO','ze5UBxy','yNv0Dg8','nc00lJu','BMqIihm','ihLVDxi','iezquW','uuPuzeq','uIb2ms4','DxjDifu','t0PWwvG','Bw92zw0','wKPREM0','z2v0qxq','EM5jAKy','mhG2mda','zwfKige','qLHzswi','DtmY','oWOGica','EdSGywW','t0zgigi','z3jPzc0','yxrLlwm','ANvTCfa','EwvVDuO','AwvKigm','sNvTCfq','zwqGyw0','y3jLyxq','zuv4Ca','ktSGBwe','ENHLtwW','AwXKigG','lc40nsK','y29SB3i','zMyP','CgfJAxq','zxzLBIa','DgXLCW','CM0GlJq','zxH0','yxGOmJu','rM9uvNi','ihjLy28','oYbMBgu','nsKSida','Fdn8nxW','Avv2u2i','mJG1ntyZmhPvBLHjra','DMfS','vvDnsW','lwjVEdS','EYbMB24','DgG6idi','zhjVCc0','Ahq6ida','yY0XlJu','mJe5nJeWruv6tu5c','ide2ChG','BuzYsuy','sgvPz2G','C2HVD24','uxjKyxi','C2STC2W','idaGmca','z2jHkdi','qKDIse0','zhPlDwO','C2f0Dxi','zw0TDwK','u2v0r2e','A3DRDxO','zwfKB3u','te1c','z2DSzwq','rwnXzNa','igjVEc0','rK12CxO','zw50rwW','yM90Dg8','AgvPz2G','yxa6idG','zgfTywC','z2H0oIa','yxjJ','oYbIB3i','ig9U','y2vdAgK','AxHLzdS','Aw5Uzxi','ocWYndi','s2v5vW','ChG7igG','mNb4ksa','zxvysMy','vunuzxe','lIbuDxi','mNmSigi','AY1IDg4','ihSGzMW','Aw50zxi','CMvJDa','oYb0CMe','z24TAxq','Bg9NBY0','C2v0ida','mJqYlc4','ugn0','D2vIA2K','z29KrgK','EtOGyMW','ifvUAxq','tw92zq','yxjLBNq','v3rpzwC','lwXPBMu','uNnOEK8','Dg9Wrgu','A3nty2e','oI13zwi','sNrrEvC','lsbVDMu','iL0GEYa','AxrLBxm','CxPvv0K','EfHJuLq','uK1c','ignVBg8','venbz3K','z2v0sxq','ksaXmda','BMvHCI0','shf4Ae4','u0fgrq','y3nZvgu','qxbWBhK','Axb0kq','DKLfv0C','ndiSlJG','nJiWChG','B3b0Aw8','x19tquS','rgfUz2u','BMnL','uvvVAhK','BIbZAwC','BYb0Agu','CJSGzM8','yxjPys0','BgfJzs0','EgvZige','A0HqwNC','EwTdweu','BMLUzW','swL3yve','B3i6icm','ieDLDfy','yMeOmJu','BLbSyxq','BgvMDa','zMjwBvO','te9SrNC','u2fMzxq','nxb4oYa','DgvZDa','sgvHBhq','Dc1Myw0','txnRtKK','suzNufK','ywrIBg8','iL06oMe','v0TeyMe','A2Tiuue','r29Kie0','AdOGmZq','BMq6icm','zc10Axq','Fde0Fda','EdSGyM8','ltjWEdS','CMvZDg8','CMDIysG','owqIihm','Dw1zD2S','B246igW','u3bHy2u','B2vZig4','AguGzNi','zgvYoIa','CNntEuK','Ag9VA1a','ChGPoYa','yxjKlxq','ihWGC2G','nxmGy3u','zs1PDgu','tMfTzq','B2TLpsi','zIbTyxq','mtm1otm5nNjxrhDstq','sLbZEuC','vMLZDwe','CM9Rzs0','ys5RB3u','BerPzsW','psjYB3u','lwL0zw0','D2vPz2G','wNrgsLO','AwnRihm','C3rYB24','yxrLvge'];_0x51a4=function(){return _0x213ddf;};return _0x51a4();}
