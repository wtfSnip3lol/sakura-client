// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.0.2
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
(function(_0x647cb7,_0x4d03dc){var _0x3057db=_0x1cf9,_0x353a3a=_0x647cb7();while(!![]){try{var _0x51c950=-parseInt(_0x3057db(0x41b))/(-0xad4+-0x57*0x6a+-0x2edb*-0x1)+-parseInt(_0x3057db(0x311))/(0x23*0xef+0x323*0x3+-0x2a14)*(parseInt(_0x3057db(0x2ac))/(-0x7*-0x380+0x22d7+-0x1*0x3b54))+-parseInt(_0x3057db(0x3b9))/(0x1b*0x4a+0x21d7*-0x1+0x1a0d)+-parseInt(_0x3057db(0x24d))/(-0x17f*-0x11+-0xb5*-0x21+-0x30bf)+parseInt(_0x3057db(0x40d))/(0x181d+-0x1d*0x101+-0x506*-0x1)+-parseInt(_0x3057db(0x1df))/(0x24c*-0x4+0x2004+0x1*-0x16cd)*(-parseInt(_0x3057db(0x34a))/(0x18d*0xa+-0x26b2+-0x1738*-0x1))+parseInt(_0x3057db(0x58e))/(0x1*0x246b+0x14f*-0x5+0x1*-0x1dd7);if(_0x51c950===_0x4d03dc)break;else _0x353a3a['push'](_0x353a3a['shift']());}catch(_0x546c9c){_0x353a3a['push'](_0x353a3a['shift']());}}}(_0x280c,0xb0bdc+0xcb6cb+-0xb582d),((()=>{'use strict';var _0x25923c=_0x1cf9,_0x33c932={'bwopl':function(_0xb2077b,_0x132787){return _0xb2077b>=_0x132787;},'CnLCd':function(_0x51a2e0,_0x3bc065){return _0x51a2e0*_0x3bc065;},'sahZo':function(_0x42d3f4,_0x410548){return _0x42d3f4-_0x410548;},'usHlN':function(_0x8edc7e){return _0x8edc7e();},'hXrLR':function(_0x4f10f7,_0x244441){return _0x4f10f7(_0x244441);},'zlYLr':'SyuyH','GtXPM':_0x25923c(0x273)+'n','NsCCq':'sk-bt'+'n','bnnPV':_0x25923c(0x278)+'|10|1'+_0x25923c(0x5a2)+'|8|5|'+_0x25923c(0x236)+'16|17'+'|15|3'+_0x25923c(0x56e)+_0x25923c(0x64c)+_0x25923c(0x310)+'0|13|'+_0x25923c(0x580)+'9','UDclo':function(_0x2bbaaf,_0x497b7f){return _0x2bbaaf+_0x497b7f;},'jYLON':function(_0x23391c,_0x2ee0bf){return _0x23391c*_0x2ee0bf;},'jtLfX':function(_0x5cd499,_0x1eef1e){return _0x5cd499*_0x1eef1e;},'RRSVA':function(_0x3e70c8,_0x31ba39){return _0x3e70c8-_0x31ba39;},'bYACE':function(_0x14256b,_0x53e555){return _0x14256b-_0x53e555;},'cCcvV':function(_0x164930,_0x5a3bfd){return _0x164930+_0x5a3bfd;},'OpnVl':_0x25923c(0x582),'BLOID':_0x25923c(0x2de)+_0x25923c(0x4d4),'DtAac':function(_0x1dc0f3,_0x3fc2f3){return _0x1dc0f3!==_0x3fc2f3;},'pcuzi':_0x25923c(0x667),'dpaxv':_0x25923c(0x503),'thOEa':function(_0xf99f31,_0x3a65ed){return _0xf99f31===_0x3a65ed;},'WdSPp':'tWmuF','mHZPM':function(_0x23fbd9,_0x231175){return _0x23fbd9!=_0x231175;},'GZZaB':function(_0x400dab,_0x277a33){return _0x400dab*_0x277a33;},'JUcLe':_0x25923c(0x42b),'YdiXz':_0x25923c(0x357),'Xkdhw':'fINbS','XSkcX':_0x25923c(0x35c),'jJKEI':function(_0x34b6de,_0x2da0f0,_0x520e5c,_0x4be72d,_0x375250){return _0x34b6de(_0x2da0f0,_0x520e5c,_0x4be72d,_0x375250);},'nvmiR':function(_0x119ee3,_0x53c7db,_0x3ad526,_0x50b852,_0x577c8f){return _0x119ee3(_0x53c7db,_0x3ad526,_0x50b852,_0x577c8f);},'yXXVY':function(_0x2e1261,_0x449659){return _0x2e1261<_0x449659;},'leGow':_0x25923c(0x1d3)+_0x25923c(0x600),'zFfQE':'UWMK','vGoaU':_0x25923c(0x4a8)+_0x25923c(0x2be)+_0x25923c(0x198)+_0x25923c(0x5e4)+_0x25923c(0x199)+'\x20no\x20h'+_0x25923c(0x4c7)+_0x25923c(0x380)+_0x25923c(0x50e)+_0x25923c(0x51e)+')','GOVRq':function(_0x2f09a6,_0x3078c3){return _0x2f09a6+_0x3078c3;},'MuWDE':function(_0x1f8cab,_0x2e4192){return _0x1f8cab+_0x2e4192;},'StVvO':function(_0x1d44ab,_0x22f935){return _0x1d44ab+_0x22f935;},'gFvfp':_0x25923c(0x3be)+_0x25923c(0x294),'AmvMS':_0x25923c(0x21d)+'ng','WkyXd':_0x25923c(0x383)+_0x25923c(0x510)+'t\x20','mynrs':'none','XRgmC':_0x25923c(0x5b6)+_0x25923c(0x34c)+'NG\x20-\x20'+'overl'+'ay\x20on'+_0x25923c(0x19d)+'einst'+_0x25923c(0x660)+_0x25923c(0xfe)+'erscr'+_0x25923c(0x4f6),'eLtsQ':_0x25923c(0x5cf)+_0x25923c(0x3cb),'JtoEN':function(_0x5bd8ea,_0x199576){return _0x5bd8ea/_0x199576;},'YkpAw':function(_0x3c22a0,_0xb3e07a){return _0x3c22a0(_0xb3e07a);},'BfHma':'f32','xBOSX':function(_0x1fad09,_0x1ba950,_0x342f58,_0x571735,_0x4ec915){return _0x1fad09(_0x1ba950,_0x342f58,_0x571735,_0x4ec915);},'KbGhl':function(_0x52c8c6,_0x2aaa0c,_0x267611,_0x263625,_0x1ad8c4){return _0x52c8c6(_0x2aaa0c,_0x267611,_0x263625,_0x1ad8c4);},'lJEbF':function(_0x469795,_0x132a85,_0x2647e2,_0x28940a,_0x5462b4){return _0x469795(_0x132a85,_0x2647e2,_0x28940a,_0x5462b4);},'Dcswg':function(_0x3e6cf3,_0x35e995){return _0x3e6cf3!==_0x35e995;},'RDVmo':'sHfWf','ucwCn':'i32','GBXZP':'sk-fi'+_0x25923c(0x60a),'OmnPu':function(_0x3f2036,_0x24199d){return _0x3f2036!==_0x24199d;},'ztlpI':_0x25923c(0x2f9),'UWLoV':function(_0x3eb2da,_0xc418ee){return _0x3eb2da>_0xc418ee;},'kGmhA':function(_0x4aadbb,_0x2aee15){return _0x4aadbb+_0x2aee15;},'UkKgR':function(_0x47f2b1,_0x4b9efb){return _0x47f2b1+_0x4b9efb;},'WPDCU':_0x25923c(0x39d),'fpKDs':_0x25923c(0x167),'JlhWl':_0x25923c(0x283),'XPuxd':_0x25923c(0x66b)+_0x25923c(0x583),'zzhHX':'keydo'+'wn','GOmGA':function(_0x4bb747,_0x198ec4){return _0x4bb747>_0x198ec4;},'EPbRF':_0x25923c(0x664),'Sfyoo':'kour-'+'io_72'+_0x25923c(0x2f5)+_0x25923c(0x146)+'t','oOAuM':_0x25923c(0x226)+_0x25923c(0x2b7)+_0x25923c(0x641)+_0x25923c(0x28b)+'nt','ETIuu':_0x25923c(0x153)+_0x25923c(0x39b)+_0x25923c(0x435)+'s','glBmw':function(_0x223aec,_0x5643d6){return _0x223aec===_0x5643d6;},'NEvce':'kour-'+_0x25923c(0xf7),'tbjpA':'CANVA'+'S','UgzLy':function(_0x224c79,_0x7b253e){return _0x224c79===_0x7b253e;},'HGDnL':function(_0xb74e13,_0x184dfe){return _0xb74e13+_0x184dfe;},'BNUBa':function(_0xe3a6f0,_0x254999){return _0xe3a6f0*_0x254999;},'NRApr':function(_0x382fa2,_0x2e7bfb){return _0x382fa2-_0x2e7bfb;},'RMlBD':_0x25923c(0x265),'Qnxei':_0x25923c(0x323),'IeUSk':_0x25923c(0x248),'kuKpd':'sk-sl'+_0x25923c(0x14f),'XMmxU':function(_0x2a29b6,_0x5fddae){return _0x2a29b6+_0x5fddae;},'ZxlqD':'AuiLL','IVIyn':'inABU','SPCFC':_0x25923c(0xd9)+'nge','pdwOP':_0x25923c(0x13e),'knHsJ':function(_0x1260ea,_0x41e6d1){return _0x1260ea(_0x41e6d1);},'QBjEX':'color','yZxgZ':function(_0xa4ca95,_0x1ffcd3){return _0xa4ca95!==_0x1ffcd3;},'wZDAC':_0x25923c(0x421)+'g','YJkWv':function(_0x5a0c3c,_0x45cc54,_0x17688d){return _0x5a0c3c(_0x45cc54,_0x17688d);},'NTZQk':_0x25923c(0x467)+_0x25923c(0x4e8),'Inpwy':function(_0x262c0b){return _0x262c0b();},'GoHNR':function(_0x2e5859,_0x37d89d){return _0x2e5859-_0x37d89d;},'Bocvr':_0x25923c(0x56c),'Hogti':'0|13|'+'6|1|2'+_0x25923c(0x154)+'|14|8'+_0x25923c(0x16d)+_0x25923c(0x1a6)+_0x25923c(0x4c2)+'|5|11','sLLwd':'cente'+'r','SzNtt':function(_0x26616d,_0x55333c){return _0x26616d+_0x55333c;},'dXzOM':function(_0x4bbae3,_0x330f0b){return _0x4bbae3+_0x330f0b;},'JlCav':function(_0x1cbf1a,_0x918c19){return _0x1cbf1a+_0x918c19;},'vQzUa':function(_0x3ba200,_0x51e990){return _0x3ba200*_0x51e990;},'knDXr':'mouse'+'1','hBLyi':function(_0x14f428,_0x59cead){return _0x14f428(_0x59cead);},'wlJSg':'waiti'+_0x25923c(0x1e0)+_0x25923c(0xf9)+'e…','LxjiD':_0x25923c(0x443)+_0x25923c(0x499),'oSZcB':_0x25923c(0x20e)+_0x25923c(0x13f)+'ed','PopqZ':function(_0x32eb19,_0x16fa21,_0x1a670e){return _0x32eb19(_0x16fa21,_0x1a670e);},'xnuNj':_0x25923c(0x431),'HxMce':'KVdWE','pgvxx':_0x25923c(0x5d3)+'s\x20OHe'+'alth.'+_0x25923c(0x244)+'ateTa'+'keHea'+'lth\x20a'+'nd\x20OH'+_0x25923c(0x285)+_0x25923c(0x48c)+'lDie,'+_0x25923c(0x16e)+_0x25923c(0x10c)+'g\x20can'+_0x25923c(0x547)+'\x20or\x20k'+'ill\x20y'+_0x25923c(0x398),'hoWTK':_0x25923c(0x290)+'read','cTImn':_0x25923c(0x2ae)+'\x20Fire'+_0x25923c(0x3c8)+']','zHbgM':'Scale'+'s\x20Ove'+'rtide'+'Weapo'+'n.fir'+_0x25923c(0x38a)+'\x20to\x201'+_0x25923c(0x405)+'erver'+'\x20may\x20'+'still'+'\x20gate'+_0x25923c(0x63d)+'s.','ZAcLm':function(_0x2e2af9,_0x6eec41,_0x3ef7d2,_0x4f886a,_0x62f07a,_0x48c315){return _0x2e2af9(_0x6eec41,_0x3ef7d2,_0x4f886a,_0x62f07a,_0x48c315);},'ATSzq':'100\x20='+_0x25923c(0x3f1)+'ult','BxSsK':function(_0x52a5b2,_0x211376,_0x4d4f15,_0x4f4bff){return _0x52a5b2(_0x211376,_0x4d4f15,_0x4f4bff);},'WoHFV':'Bunny'+'-hop','izNVH':function(_0x32e5df,_0x49cd56,_0x4ca24f,_0x2a8421,_0x16dc5a,_0x4344ea){return _0x32e5df(_0x49cd56,_0x4ca24f,_0x2a8421,_0x16dc5a,_0x4344ea);},'jROfA':_0x25923c(0x231)+_0x25923c(0x616),'NknFn':function(_0x409f50,_0x58f449,_0x387f89,_0x26e572,_0x1e562a,_0x572e27){return _0x409f50(_0x58f449,_0x387f89,_0x26e572,_0x1e562a,_0x572e27);},'gyQEQ':_0x25923c(0x2f6),'FtyLs':'misc','hZSEf':'Disab'+'les\x20C'+_0x25923c(0x514)+_0x25923c(0x21f)+_0x25923c(0x305)+_0x25923c(0x663)+_0x25923c(0x625)+_0x25923c(0x188)+_0x25923c(0x570)+_0x25923c(0x20d)+_0x25923c(0x3e4)+_0x25923c(0x39c)+_0x25923c(0x1e9)+_0x25923c(0x35e),'tewIs':_0x25923c(0x5b9),'iZIgC':_0x25923c(0x599),'QwmMf':_0x25923c(0x47f)+_0x25923c(0x20a)+_0x25923c(0x1f4)+_0x25923c(0x5dd)+'ff)','xegfr':function(_0x7c5636,_0x49fea2){return _0x7c5636+_0x49fea2;},'OgKRl':_0x25923c(0x209)+_0x25923c(0x2dd)+_0x25923c(0x390)+'\x200\x2024'+'\x2024\x22\x20'+_0x25923c(0x47b)+_0x25923c(0x523)+_0x25923c(0x41d)+_0x25923c(0x34f)+_0x25923c(0x4a9)+_0x25923c(0x3ba)+'12\x2021'+_0x25923c(0x1bd)+_0x25923c(0x3cc)+_0x25923c(0x3aa)+_0x25923c(0x539)+_0x25923c(0x33a)+_0x25923c(0x1c1)+_0x25923c(0x19c)+_0x25923c(0x21a)+_0x25923c(0x36b)+_0x25923c(0xe6)+'5c0\x203'+_0x25923c(0x52d)+'5-4\x207'+_0x25923c(0x324)+_0x25923c(0x124)+_0x25923c(0x24f)+_0x25923c(0x55b)+_0x25923c(0x315)+_0x25923c(0x32b)+'9d\x22\x20s'+_0x25923c(0xe7)+_0x25923c(0x3ce)+_0x25923c(0x62b)+_0x25923c(0x4d2)+_0x25923c(0x2fe)+'necap'+_0x25923c(0x30d)+'nd\x22\x20s'+'troke'+_0x25923c(0x543)+'join='+_0x25923c(0x53e)+_0x25923c(0x60d)+'circl'+_0x25923c(0x3ff)+_0x25923c(0x529)+_0x25923c(0x2e2)+'0\x22\x20r='+_0x25923c(0x596)+_0x25923c(0x1fe)+_0x25923c(0x349)+'6b9d\x22'+_0x25923c(0x555)+_0x25923c(0x2e3),'Icrnk':_0x25923c(0x177)+'trike'+_0x25923c(0x32e)+_0x25923c(0x255),'nxOmB':function(_0x340c3b,_0x1af5fa){return _0x340c3b+_0x1af5fa;},'fWOFh':function(_0x26ed9c){return _0x26ed9c();},'gEkmw':_0x25923c(0x1b1)+'s','FkNqD':'posit'+_0x25923c(0x1d6)+_0x25923c(0x242)+_0x25923c(0x627)+':0;wi'+_0x25923c(0x656)+_0x25923c(0x35d)+_0x25923c(0x2c8)+_0x25923c(0x225)+_0x25923c(0x415)+_0x25923c(0x43d)+':2147'+'48364'+'6;poi'+_0x25923c(0x1de)+_0x25923c(0x1f7)+'s:non'+'e','DWloI':_0x25923c(0x49e),'cjiFB':'ranUJ','zKTVt':_0x25923c(0x43e)+'t','xlKOk':_0x25923c(0x22f)+'t','jTjNS':'Move','jCgKr':_0x25923c(0x3df),'UnbQZ':'[saku'+_0x25923c(0x411)+_0x25923c(0x609)+_0x25923c(0x408)+_0x25923c(0x4fc)+_0x25923c(0x60b)+':','iNODa':_0x25923c(0x32b)+'9d','KySMc':_0x25923c(0x4db)+_0x25923c(0x4a7),'tmhlJ':_0x25923c(0x2c3),'kvCOg':function(_0x3ed545,_0x402e44,_0xc4369c,_0x2f9096,_0x2757a3,_0x2ad560,_0xe879cb,_0xd0016d){return _0x3ed545(_0x402e44,_0xc4369c,_0x2f9096,_0x2757a3,_0x2ad560,_0xe879cb,_0xd0016d);},'mAMMq':_0x25923c(0x3a8)+'th','TygWi':function(_0x3c4845,_0x5c24a0,_0x242e15,_0xceeafd,_0x3a8111,_0x561437,_0x4db630,_0x3117d4){return _0x3c4845(_0x5c24a0,_0x242e15,_0xceeafd,_0x3a8111,_0x561437,_0x4db630,_0x3117d4);},'SkdqV':_0x25923c(0x376)+'oil','WcNEW':_0x25923c(0x301)+_0x25923c(0x615)+'forms'+'.Over'+'tide.'+_0x25923c(0xef)+_0x25923c(0x32a)+'on','doHqv':_0x25923c(0x62a),'gZjQb':'capMo'+'ve'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+_0x25923c(0x137)]||''))return;if(window['__SAK'+_0x25923c(0x3db)+'OUR__'])return;window[_0x25923c(0x5a7)+_0x25923c(0x3db)+'OUR__']=!![];var _0x264822=_0x33c932[_0x25923c(0x4d5)],_0x134c5f=_0x25923c(0x1b4)+'c6',_0xf5d7fa={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x25923c(0x32b)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x192421={..._0xf5d7fa};try{Object['assig'+'n'](_0x192421,JSON['parse'](localStorage['getIt'+'em'](_0x25923c(0x178)+_0x25923c(0x302)+_0x25923c(0x2fb))||'{}'));}catch(_0x242422){}function _0x48307d(){var _0x37f5d2=_0x25923c,_0x2fe3fd={'xbIYX':function(_0xa3b936,_0x59ed07){return _0xa3b936===_0x59ed07;}};if('ePwSf'==='SsDMS'){if(_0x233262[_0x3c75a1]['id']&&_0x2fe3fd[_0x37f5d2(0x27f)](_0x443f4f[_0x3db7fd]['id'][_0x37f5d2(0x43d)+'Of'](_0x37f5d2(0x226)+_0x37f5d2(0xf7)),0x1ed*0xb+0x112e+-0x265d))_0x5eb984[_0x383fef][_0x37f5d2(0x201)][_0x37f5d2(0x13a)+'ay']=_0x37f5d2(0x67b);}else try{localStorage['setIt'+'em']('sakur'+_0x37f5d2(0x302)+'r.v1',JSON['strin'+'gify'](_0x192421));}catch(_0x4888e1){}}var _0x3ef74d={'uwmk':!!window['Unity'+'WebMo'+_0x25923c(0x1c7)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x192421['safeM'+_0x25923c(0x5ce)],'lastError':''};try{window[_0x25923c(0x2c6)+'entLi'+'stene'+'r'](_0x25923c(0x5e3),_0x2981fe=>{var _0x3fcc0d=_0x25923c;if(_0x3fcc0d(0x12f)===_0x33c932['zlYLr']){_0x43bedf(_0x403cfc),_0x20bb14++;var _0x39c7ac=_0x1201b3['now']();_0x33c932['bwopl'](_0x39c7ac-_0x27b00f,-0xa3*-0x11+-0x1a00+0x1*0x1121)&&(_0xfe829c=_0x162305[_0x3fcc0d(0x482)](_0x33c932['CnLCd'](_0x3654fb,-0x412+-0x5a7*0x6+0x29e4)/_0x33c932['sahZo'](_0x39c7ac,_0x249d6d)),_0x178b97=-0x118*0x19+0x15b9+0x1*0x59f,_0xea5da4=_0x39c7ac);_0x25e089(),_0x33c932[_0x3fcc0d(0x19f)](_0xb2d1af),_0x173a41[_0x3fcc0d(0x4f0)+_0x3fcc0d(0x30f)](-0x1*0x1dd0+-0x188e*-0x1+0x542,-0x2369+0x181+-0x3e*-0x8c,_0x10c926['w'],_0xeb0c9d['h']);var _0x5d0aea={'left':0x0,'top':0x0,'right':_0x12690b['w'],'bottom':_0x5b3e72['h'],'width':_0x3f64f5['w'],'height':_0x33a75b['h']};if(_0x15600a['cross'+_0x3fcc0d(0x39e)])_0x102b9e(_0x5d0aea);if(_0x49ed42[_0x3fcc0d(0x351)+_0x3fcc0d(0x5a5)])_0x33c932[_0x3fcc0d(0x26b)](_0x56ae55,_0x5d0aea);_0x33c932[_0x3fcc0d(0x26b)](_0x25e8e0,_0x5d0aea);}else try{var _0x5406dd=_0x2981fe&&(_0x2981fe[_0x3fcc0d(0x5d5)+'ge']||_0x2981fe[_0x3fcc0d(0x5e3)]&&_0x2981fe[_0x3fcc0d(0x5e3)][_0x3fcc0d(0x5d5)+'ge'])||_0x3fcc0d(0x280)+'wn';if(_0x2981fe&&_0x2981fe['filen'+'ame'])_0x5406dd+='\x20@\x20'+String(_0x2981fe[_0x3fcc0d(0x107)+_0x3fcc0d(0x137)])[_0x3fcc0d(0x114)]('/')['pop']()+':'+(_0x2981fe[_0x3fcc0d(0x108)+'o']||'?');_0x3ef74d[_0x3fcc0d(0x60e)+'rror']=String(_0x5406dd)['slice'](0x9*0x2dc+0x4ef*0x2+-0x239a,-0x1559*-0x1+-0x657+-0xe62);}catch(_0x47c88f){}});}catch(_0x4df6d8){}var _0x1f3eee=null,_0x5a3830=null,_0x4e46b1={},_0x1f2964=[],_0x2873fc=[],_0xdad705=new Map();function _0x4636c3(_0x5efd91,_0x1046de){var _0x433d38=_0x25923c;if(!_0x1046de||_0x5efd91['inclu'+'des'](_0x1046de)||_0x5efd91[_0x433d38(0x197)+'h']>0x161*-0xc+-0x2bb+0x1387)return;_0x5efd91['push'](_0x1046de);}function _0x147d90(_0x23d428,_0x553faa,_0x115116,_0x502d2f){var _0x38bc21=_0x25923c;if(_0x33c932[_0x38bc21(0x4c3)]!==_0x38bc21(0x30a)){var _0x1f5714=0x314+-0x1*0x1aa5+0x1791;try{_0x1f5714=_0x553faa&&_0x553faa[_0x38bc21(0x1a9)]?_0x553faa['val']():0x125e+0x17e0+-0x2a3e;}catch(_0x41b5fb){}if(!_0x1f5714)return;_0x4636c3(_0x23d428,_0x1f5714),_0x115116[_0x502d2f]=_0x23d428['lengt'+'h'];if(_0x502d2f===_0x33c932['BLOID']&&_0x23d428['lengt'+'h']){if(_0x33c932[_0x38bc21(0x3a5)](_0x38bc21(0x36e),_0x38bc21(0x36e))){var _0x2647ba=_0x2345dd[_0x38bc21(0x4e5)+'eElem'+'ent'](_0x33c932[_0x38bc21(0x3d0)]);return _0x2647ba[_0x38bc21(0x4c5)]=_0x38bc21(0x273)+'n',_0x2647ba[_0x38bc21(0x47b)+_0x38bc21(0x3d4)]=_0x33c932[_0x38bc21(0x203)],_0x2647ba['textC'+'onten'+'t']=_0x3ff824,_0x2647ba['oncli'+'ck']=_0x306b8b=>{var _0x50ece7=_0x38bc21;_0x306b8b['stopP'+_0x50ece7(0x1d8)+_0x50ece7(0x381)](),_0x3cb610();},_0x2647ba;}else{var _0x579c3e=_0x4e46b1[_0x38bc21(0x5c6)+'ve'];if(_0x579c3e){if(_0x33c932[_0x38bc21(0x66f)]===_0x38bc21(0x667))try{_0x579c3e[_0x38bc21(0x428)+'ed']=![];}catch(_0xb1df02){}else _0x2aa1e4(!_0x132892);}}}}else{var _0x430080=_0x33c932[_0x38bc21(0x402)]['split']('|'),_0x26383a=-0x225e+-0x1d3+-0x11*-0x221;while(!![]){switch(_0x430080[_0x26383a++]){case'0':_0x127e04[_0x38bc21(0x1e6)+'wBlur']=-0x565+0xbdd*0x3+-0x1e2c;continue;case'1':_0x5261ab[_0x38bc21(0x470)]();continue;case'2':_0x9401fe[_0x38bc21(0x2e8)+_0x38bc21(0x399)+'e']=_0x1e7aa4;continue;case'3':_0x56cd14['moveT'+'o'](_0x283d4d+_0x319dbb,_0x404c5d);continue;case'4':_0x426c93[_0x38bc21(0xf0)]();continue;case'5':_0x3da1bd[_0x38bc21(0x1e6)+_0x38bc21(0x2c2)+'r']=_0x1e7aa4;continue;case'6':_0x59ed16['moveT'+'o'](_0x283d4d,_0x33c932['UDclo'](_0x404c5d,_0x319dbb));continue;case'7':_0x371acf['moveT'+'o'](_0x283d4d,_0x404c5d-_0x319dbb-_0x1d312f);continue;case'8':_0x294c16[_0x38bc21(0x18b)+'idth']=_0x3b34a4['max'](-0x2b*-0xb7+0x231+0x20ed*-0x1+0.5,(0x2*-0x104f+-0x15f6+-0x11*-0x336)*_0x2de41e);continue;case'9':_0x23e1a7[_0x38bc21(0x4cc)+'re']();continue;case'10':var _0x1e7aa4=/^#[0-9a-f]{6}$/i['test'](_0x185363['chCol'+'or'])?_0x2c5d7[_0x38bc21(0x4dd)+'or']:'#ff6b'+'9d';continue;case'11':_0x4421ce['arc'](_0x283d4d,_0x404c5d,_0x33c932[_0x38bc21(0x2c7)](-0x270e+-0x18c5+0x26*0x1ae+0.6000000000000001,_0x2de41e),-0xe5f+0xfee+-0x18f,_0x33c932['jYLON'](_0x2a403d['PI'],0x2*-0x7a3+0x3d*0x79+-0x1*0xd8d));continue;case'12':_0x16f5a1[_0x38bc21(0x391)+'o'](_0x283d4d,_0x404c5d-_0x319dbb);continue;case'13':_0x3995d2[_0x38bc21(0x4d7)+_0x38bc21(0x5db)]();continue;case'14':var _0x319dbb=_0x33c932['jtLfX'](0xc54+0x2276+-0x2ec4,_0x2de41e),_0x1d312f=(0x1c86+0xf65+-0x7*0x645)*_0x2de41e;continue;case'15':_0x5bf7e8['lineT'+'o'](_0x33c932['RRSVA'](_0x283d4d,_0x319dbb),_0x404c5d);continue;case'16':_0x1f1dd3['begin'+'Path']();continue;case'17':_0x102004[_0x38bc21(0x651)+'o'](_0x33c932['bYACE'](_0x283d4d,_0x319dbb)-_0x1d312f,_0x404c5d);continue;case'18':_0x2a49be[_0x38bc21(0x391)+'o'](_0x33c932['UDclo'](_0x33c932[_0x38bc21(0x568)](_0x283d4d,_0x319dbb),_0x1d312f),_0x404c5d);continue;case'19':_0x4ed606['lineT'+'o'](_0x283d4d,_0x404c5d+_0x319dbb+_0x1d312f);continue;case'20':_0x2dc5fb[_0x38bc21(0x2e8)+'e']();continue;case'21':var _0x2de41e=_0x1782be(_0x54a463['chSiz'+'e'])||0x3*0x449+-0x1*0x22ee+-0x24*-0x9d;continue;case'22':var _0x283d4d=_0x2c0fde['width']/(-0x1*-0x1b7f+-0x52e+0x1*-0x164f),_0x404c5d=_0x2377f3[_0x38bc21(0x2c8)+'t']/(0xacf+0x1c5*-0x15+-0x2*-0xd2e);continue;case'23':_0x5ea188[_0x38bc21(0x3b8)+'tyle']=_0x1e7aa4;continue;}break;}}}function _0x334493(_0x5d90cc,_0x1f73b4,_0x471be2){var _0x1306c4=_0x25923c,_0x2fe11b=_0xdad705['get'](_0x5d90cc);!_0x2fe11b&&(_0x2fe11b=new Map(),_0xdad705['set'](_0x5d90cc,_0x2fe11b));if(!_0x2fe11b['has'](_0x1f73b4))try{if(_0x33c932['DtAac'](_0x1306c4(0x635),_0x1306c4(0x532))){var _0x29736a=new _0x1f3eee(_0x5d90cc)['readF'+'ield'](_0x1f73b4,_0x471be2);_0x2fe11b['set'](_0x1f73b4,_0x33c932[_0x1306c4(0x3a5)](_0x29736a,undefined)?_0x29736a[_0x1306c4(0x1a9)]():null);}else _0x22b979[_0x1306c4(0x1a2)+'n'](_0x2e3087,_0x1b9de2['parse'](_0x1202e4[_0x1306c4(0x25d)+'em'](_0x1306c4(0x178)+_0x1306c4(0x302)+_0x1306c4(0x2fb))||'{}'));}catch(_0x43d328){_0x2fe11b['set'](_0x1f73b4,null);}return _0x2fe11b[_0x1306c4(0x1e4)](_0x1f73b4);}function _0xc3f5a0(_0x542bfc,_0x2761e5,_0x377fa2,_0x4e1b7a){try{new _0x1f3eee(_0x542bfc)['write'+'Field'](_0x2761e5,_0x377fa2,_0x4e1b7a);}catch(_0x42e616){}}function _0x42e2cc(_0x124c18,_0x459e32){var _0x5f57e9=_0x25923c;try{if('NwsBB'===_0x33c932[_0x5f57e9(0x25e)])_0x1a01cc(_0x51b0fe,_0x192b7d,_0x2a18ac,_0x5f57e9(0x2de)+_0x5f57e9(0x4d4));else{var _0x17da94=new _0x1f3eee(_0x124c18)['readF'+_0x5f57e9(0x4bf)](_0x459e32,_0x5f57e9(0x5f1));return _0x17da94?_0x17da94['val']():-0xcce*-0x3+0x850+0x1*-0x2eba;}}catch(_0x498b0e){return _0x33c932[_0x5f57e9(0x3c6)]('tWmuF',_0x33c932['WdSPp'])?0x135b+-0x5d1*0x1+-0xd8a:(_0x1fce9f[_0x5f57e9(0x2c1)]('[saku'+_0x5f57e9(0x411)+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0x5f57e9(0x14d),_0x2b499e,_0x16f087&&_0x226cc5['messa'+'ge']),null);}}function _0x5946bf(_0x3da548,_0x471140,_0x5be3c2,_0xf4078){var _0x3bcd4a=_0x25923c,_0x292874=_0x334493(_0x3da548,_0x471140,_0x5be3c2);if(_0x33c932['mHZPM'](_0x292874,null))_0xc3f5a0(_0x3da548,_0x471140,_0x5be3c2,_0x33c932[_0x3bcd4a(0x557)](_0x292874,_0xf4078));}function _0x33db05(_0x54b771,_0x201af,_0x259557,_0x5d47d6,_0x2716e2,_0xa37dda,_0x2a7ab6){var _0x459c73=_0x25923c,_0x7736d9={'SogPI':'sk-md'+_0x459c73(0x4e8)};if('ftNQA'!==_0x33c932['JUcLe'])_0xcab51a['appen'+_0x459c73(0x5c5)+'d'](_0x368ff2);else try{var _0x582bd5=_0x5a3830[_0x459c73(0x473)+_0x459c73(0xed)]({'typeName':_0x201af,'methodName':_0x259557,'params':_0x5d47d6,'returnType':_0x2716e2},_0xa37dda);return _0x582bd5['enabl'+'ed']=_0x2a7ab6!==![],_0x4e46b1[_0x54b771]=_0x582bd5,_0x3ef74d[_0x459c73(0x1b2)+'Total']++,_0x582bd5;}catch(_0x2fb381){if(_0x33c932[_0x459c73(0x3c6)]('bntvK',_0x33c932['YdiXz'])){var _0x3a0c49=_0xc76300[_0x459c73(0x4e5)+_0x459c73(0x206)+_0x459c73(0x5d0)]('div');_0x3a0c49[_0x459c73(0x47b)+_0x459c73(0x3d4)]='sk-mb'+_0x459c73(0x2a7);var _0x4ea539=_0x514bcd[_0x459c73(0x4e5)+_0x459c73(0x206)+'ent']('div');_0x4ea539[_0x459c73(0x47b)+_0x459c73(0x3d4)]=_0x7736d9[_0x459c73(0x548)],_0x4ea539[_0x459c73(0x51f)+'onten'+'t']=_0x1ccfd3,_0x3a0c49['appen'+_0x459c73(0x5c5)+'d'](_0x4ea539);for(var _0x96cc8a of _0x2de9fc)_0x3a0c49[_0x459c73(0x2cc)+_0x459c73(0x5c5)+'d'](_0x96cc8a);_0x19f13a['appen'+_0x459c73(0x5c5)+'d'](_0x3a0c49);}else return console[_0x459c73(0x2c1)](_0x459c73(0x45a)+_0x459c73(0x411)+'ur]\x20h'+'ook\x20r'+_0x459c73(0xee)+_0x459c73(0x14d),_0x54b771,_0x2fb381&&_0x2fb381[_0x459c73(0x5d5)+'ge']),null;}}function _0x2db511(_0x3cb09b,_0x121da3,_0x46616f,_0xd3f679,_0x3cdf2c,_0x180ba4,_0xa0ee01){var _0x16a05e=_0x25923c;if(_0x33c932['DtAac'](_0x16a05e(0x38c),_0x33c932[_0x16a05e(0x5cc)]))_0x3eccef[_0x16a05e(0x158)+'od']=_0x2993ab,_0x2f2417[_0x16a05e(0x158)+_0x16a05e(0x412)]=_0x3c3292,_0x2383e3['hookN'+_0x16a05e(0x40c)+'il']=_0x39c4e7,_0x45c421[_0x16a05e(0x479)+'aptur'+'e']=_0x312ae2,_0x91417d(),_0x2a7402[_0x16a05e(0x524)+'d']();else try{var _0x589227=(_0x16a05e(0x424)+_0x16a05e(0x1c3))[_0x16a05e(0x114)]('|'),_0x310323=0x12c6+0xb11+-0x1dd7*0x1;while(!![]){switch(_0x589227[_0x310323++]){case'0':return _0x368df7;case'1':_0x3ef74d[_0x16a05e(0x1b2)+_0x16a05e(0xdc)]++;continue;case'2':_0x4e46b1[_0x3cb09b]=_0x368df7;continue;case'3':var _0x368df7=_0x5a3830['hookP'+_0x16a05e(0x3a6)+'x']({'typeName':_0x121da3,'methodName':_0x46616f,'params':_0xd3f679,'returnType':_0x3cdf2c},_0x180ba4);continue;case'4':_0x368df7[_0x16a05e(0x428)+'ed']=_0x33c932['DtAac'](_0xa0ee01,![]);continue;}break;}}catch(_0x58a5cd){return console[_0x16a05e(0x2c1)](_0x16a05e(0x45a)+_0x16a05e(0x411)+_0x16a05e(0x487)+'ook\x20r'+'eg\x20fa'+'iled:',_0x3cb09b,_0x58a5cd&&_0x58a5cd[_0x16a05e(0x5d5)+'ge']),null;}}var _0x19506b=()=>![];try{if(window['Unity'+_0x25923c(0x3ca)+_0x25923c(0x1c7)]&&!_0x192421['safeM'+_0x25923c(0x5ce)]){if('ktEgK'!=='ktEgK')return-0x25ac+0xe7*-0x28+0x4*0x1271;else{_0x1f3eee=window[_0x25923c(0x559)+'WebMo'+_0x25923c(0x1c7)][_0x25923c(0x28a)+'Wrapp'+'er'],_0x5a3830=window[_0x25923c(0x559)+_0x25923c(0x3ca)+'dkit']['Runti'+'me'][_0x25923c(0x4e5)+'ePlug'+'in']({'name':_0x33c932['KySMc'],'version':_0x33c932[_0x25923c(0x44b)],'referencedAssemblies':[_0x25923c(0x2ee)+_0x25923c(0x430)+_0x25923c(0x517)+'.dll']});if(_0x192421['hookG'+'od'])_0x33c932[_0x25923c(0x536)](_0x33db05,_0x25923c(0x431),'OHeal'+'th','Initi'+'ateTa'+_0x25923c(0x451)+_0x25923c(0x3f0),[_0x25923c(0x5eb),'i32'],undefined,_0x19506b,!!_0x192421[_0x25923c(0x431)]);if(_0x192421[_0x25923c(0x158)+_0x25923c(0x412)])_0x33db05(_0x25923c(0x57b)+'e',_0x33c932[_0x25923c(0x263)],_0x25923c(0x1be)+'Die',[_0x33c932['ucwCn'],_0x33c932['ucwCn'],'i32','i32',_0x25923c(0x5eb)],undefined,_0x19506b,!!_0x192421['god']);if(_0x192421[_0x25923c(0x362)+'oReco'+'il'])_0x33c932['TygWi'](_0x33db05,_0x33c932[_0x25923c(0x542)],_0x33c932['WcNEW'],_0x33c932['doHqv'],['i32'],undefined,_0x19506b,!!_0x192421[_0x25923c(0x376)+_0x25923c(0x12c)]);if(_0x192421['hookC'+_0x25923c(0x33f)+'e'])_0x33c932[_0x25923c(0x536)](_0x2db511,_0x25923c(0x13d)+'ooter',_0x25923c(0x31f)+'ter',_0x25923c(0x2ce)+'meRun'+_0x25923c(0x2b0),['i32',_0x33c932[_0x25923c(0x2b2)]],undefined,(_0x237a92,_0x1ade15)=>{var _0x597889=_0x25923c;if('DCjZk'===_0x33c932[_0x597889(0xfa)])_0x33c932['jJKEI'](_0x147d90,_0x2873fc,_0x1ade15,_0x3ef74d,_0x597889(0x29c)+_0x597889(0x160));else{var _0x48afa0=_0x357e41['capMo'+'ve'];if(_0x48afa0)try{_0x48afa0['enabl'+'ed']=![];}catch(_0x223f03){}}},!![]);if(_0x192421[_0x25923c(0x479)+_0x25923c(0x33f)+'e'])_0x2db511(_0x33c932[_0x25923c(0x191)],_0x25923c(0x301)+_0x25923c(0x615)+_0x25923c(0x49a)+'.Over'+'tide.'+_0x25923c(0x5a1)+_0x25923c(0x5d0),_0x25923c(0x462)+_0x25923c(0x22d),[_0x33c932['ucwCn']],_0x25923c(0x5eb),(_0x4a8b94,_0x4505d7)=>{var _0x130a1f=_0x25923c;_0x33c932[_0x130a1f(0x2e7)](_0x147d90,_0x1f2964,_0x4505d7,_0x3ef74d,'movem'+_0x130a1f(0x4d4));},!![]);}}}catch(_0x3f33b8){console['warn'](_0x25923c(0x45a)+'ra-ko'+_0x25923c(0x474)+_0x25923c(0x468)+_0x25923c(0x210)+_0x25923c(0x2bc)+':',_0x3f33b8&&_0x3f33b8[_0x25923c(0x5d5)+'ge']);}function _0x5c3d0b(_0x5ae167,_0x20d3a2){var _0x26144f=_0x25923c,_0x537f68=_0x4e46b1[_0x5ae167];if(_0x537f68){if(_0x26144f(0x606)!=='fTyvr')try{_0x537f68[_0x26144f(0x428)+'ed']=!!_0x20d3a2;}catch(_0x162a94){}else try{new _0x59cb11(_0x42f151)['write'+_0x26144f(0x553)](_0x273ac4,_0x354a35,_0x16fcb9);}catch(_0x3157f9){}}}setInterval(()=>{var _0x2f567d=_0x25923c,_0x4a23be={'UJRwg':_0x2f567d(0x265),'NgxoI':_0x2f567d(0x673)+'l','xYolx':_0x2f567d(0x1eb)+_0x2f567d(0x320),'DKLwx':_0x33c932[_0x2f567d(0x21c)]};if(!_0x1f3eee||!window['unity'+_0x2f567d(0x50c)+_0x2f567d(0x378)])return;var _0x52c0b5=(_0x33c932[_0x2f567d(0x26b)](Number,_0x192421['speed'+_0x2f567d(0x48e)])||-0xd21*0x1+0x1237*0x1+-0x4b2)/(0x2000+0x6d*0x53+-0x42f3),_0x5a487c=(Number(_0x192421['jumpP'+'ct'])||-0x794+0x1dae+-0x15b6)/(0x2*-0x3b+-0x5*-0x7bd+-0x1*0x25d7),_0x401ab2=_0x33c932['JtoEN'](Number(_0x192421['gravi'+_0x2f567d(0x5f7)])||-0x2597+0x9fb*0x1+0x1c00,-0x17*0x68+-0x16e0+0x2*0x104e),_0x5bd6bd=Math[_0x2f567d(0x2a6)](0xe22+0x3*0x2b7+-0x1646,_0x33c932['YkpAw'](Number,_0x192421[_0x2f567d(0x1cb)+'eValu'+'e'])||-0x7da+0x693+-0x3*-0x9f),_0xfe45c=_0x52c0b5!==0x745*0x5+0x676*-0x5+-0x40a||_0x5a487c!==-0xfd3*0x1+-0x1*0x2401+0x33d5||_0x401ab2!==0x26a0+0x1139+-0x37d8||_0x192421[_0x2f567d(0x387)],_0x3f979e=_0x192421['noSpr'+'ead']||_0x192421['damag'+_0x2f567d(0x5ef)]||_0x192421['infAm'+_0x2f567d(0x2fa)]||_0x192421[_0x2f567d(0x4b4)+_0x2f567d(0x4da)];if(!_0xfe45c&&!_0x3f979e)return;try{for(var _0xace9ba=-0x1*-0xcfb+-0x231c+0x1621;_0xace9ba<_0x1f2964['lengt'+'h'];_0xace9ba++){if(_0x33c932[_0x2f567d(0x3a5)](_0x2f567d(0x215),'EmsGZ')){var _0x994568=_0x1f2964[_0xace9ba];if(!_0x994568)continue;if(_0x33c932['DtAac'](_0x52c0b5,0x1aef+0x2040+0x1*-0x3b2e)){if(_0x2f567d(0x469)!=='cljiB'){if(!_0x52f5b7)return;var _0x4fb520=_0x221a1f[_0x2f567d(0x5d7)+'ren'];for(var _0x10de38=-0x509*-0x4+0x11d7+-0x15*0x1cf;_0x33c932[_0x2f567d(0x3cf)](_0x10de38,_0x4fb520[_0x2f567d(0x197)+'h']);_0x10de38++){var _0x6d8c63=_0x4fb520[_0x10de38][_0x2f567d(0x38b)+_0x2f567d(0x54d)+'tor'](_0x33c932[_0x2f567d(0x3ea)]);_0x6d8c63&&(_0x6d8c63['textC'+_0x2f567d(0x346)+'t'][_0x2f567d(0x43d)+'Of'](_0x33c932[_0x2f567d(0x48a)])===-0x1c9c+-0x1*0x2285+0x3f21*0x1||_0x6d8c63[_0x2f567d(0x51f)+'onten'+'t']['index'+'Of']('SAFE')===-0x3b*-0xd+0x178d*0x1+-0x1a8c)&&(_0x6d8c63['textC'+'onten'+'t']=_0x5b0c73[_0x2f567d(0x36a)+'ode']?_0x33c932[_0x2f567d(0x5ee)]:_0x27a6d3[_0x2f567d(0x4f4)]?_0x33c932[_0x2f567d(0x3dc)](_0x33c932['UDclo'](_0x33c932[_0x2f567d(0x5d8)](_0x2f567d(0x5b6)+_0x2f567d(0x174)+'\x20'+(_0x288b92[_0x2f567d(0x1b2)+'Total']?_0x33c932['MuWDE'](_0x33c932[_0x2f567d(0x4a5)](_0x6ac149[_0x2f567d(0x1b2)+'Ok'],'/')+_0x4452b9['hooks'+_0x2f567d(0xdc)],_0x2f567d(0x678)+'s'):_0x2f567d(0x47f)+'ks\x20ar'+_0x2f567d(0x1f4)+'all\x20o'+_0x2f567d(0x3b1))+_0x33c932[_0x2f567d(0x65a)],_0x573ecb[_0x2f567d(0x492)+'oaded']?_0x2f567d(0x1fd)+'d':_0x33c932[_0x2f567d(0x4cb)]),_0x2f567d(0x5dc)+_0x2f567d(0x3fa)+'\x20'),_0x437a61['shoot'+_0x2f567d(0x160)]?'held':_0x2f567d(0x67b))+_0x33c932[_0x2f567d(0x427)]+(_0x33760f['movem'+_0x2f567d(0x4d4)]?'held':_0x33c932[_0x2f567d(0x3f9)])+(_0xe73a9b[_0x2f567d(0x60e)+'rror']?_0x2f567d(0x218)+_0x2f567d(0x270)+_0x2dcf31[_0x2f567d(0x60e)+_0x2f567d(0x3c4)]:''):_0x33c932['XRgmC']);}}else _0x5946bf(_0x994568,0xd*0x7d+0x29*-0x4+0xcb*-0x7,_0x2f567d(0x239),_0x52c0b5),_0x5946bf(_0x994568,0x138c+0x53*0x6d+-0x36b7,_0x2f567d(0x239),_0x52c0b5),_0x5946bf(_0x994568,0x1c82+-0x9e7+-0x126b,_0x33c932['BfHma'],_0x52c0b5),_0x33c932[_0x2f567d(0x3a3)](_0x5946bf,_0x994568,-0x1ca3*-0x1+0xf1*-0x17+0xf8*-0x7,_0x33c932['BfHma'],_0x52c0b5),_0x33c932['KbGhl'](_0x5946bf,_0x994568,-0x1355+0x1*0x2535+-0x3*0x5ec,_0x2f567d(0x239),_0x52c0b5),_0x33c932[_0x2f567d(0x3a3)](_0x5946bf,_0x994568,0xe73+0xab6+-0x1d*0xdd,_0x2f567d(0x239),_0x52c0b5);}if(_0x5a487c!==0x1f6d*-0x1+0x1*0x2056+-0xe8)_0x33c932[_0x2f567d(0x128)](_0x5946bf,_0x994568,0x16e5+0x14ac+-0x2b41,_0x2f567d(0x239),_0x5a487c);_0x401ab2!==0xe12+0x6*0x68+-0x1081&&(_0x5946bf(_0x994568,0xfab+0x2a*-0x14+0xc1b*-0x1,_0x2f567d(0x239),_0x401ab2),_0x33c932[_0x2f567d(0x1aa)](_0x5946bf,_0x994568,-0x11*0x4+0x1*0x2393+-0x2303,_0x2f567d(0x239),_0x401ab2));if(_0x192421[_0x2f567d(0x387)])_0x33c932[_0x2f567d(0x54b)](_0xc3f5a0,_0x994568,0x4*-0x519+-0x10*-0x1d9+0x4*-0x224,_0x33c932[_0x2f567d(0x155)],-(0x4*-0x723+-0x19b6+0x3a29));}else{var _0x2f4aee=_0x21ddba['creat'+_0x2f567d(0x206)+_0x2f567d(0x5d0)](_0x4a23be['UJRwg']);_0x2f4aee['class'+_0x2f567d(0x3d4)]=_0x4a23be['NgxoI'];var _0x608a3=_0x29415e[_0x2f567d(0x4e5)+_0x2f567d(0x206)+_0x2f567d(0x5d0)](_0x2f567d(0x13e));_0x608a3[_0x2f567d(0x47b)+'Name']=_0x4a23be[_0x2f567d(0x38e)],_0x608a3['textC'+_0x2f567d(0x346)+'t']=_0x11c705;if(_0x440c1b){var _0x193e48=_0x449475[_0x2f567d(0x4e5)+_0x2f567d(0x206)+'ent']('small');_0x193e48['class'+_0x2f567d(0x3d4)]=_0x2f567d(0x139)+'nt',_0x193e48['textC'+'onten'+'t']=_0x1aa1da,_0x608a3[_0x2f567d(0x2cc)+'dChil'+'d'](_0x193e48);}return _0x2f4aee[_0x2f567d(0x2cc)+'d'](_0x608a3,_0x489dc4),_0x2f4aee;}}}catch(_0x5e2210){}try{for(var _0xbd7466=-0x4f3*-0x7+0x25a8+0x1*-0x484d;_0xbd7466<_0x2873fc['lengt'+'h'];_0xbd7466++){var _0x9a8dac=_0x42e2cc(_0x2873fc[_0xbd7466],-0xf9f+-0x2293+0x326a);if(!_0x9a8dac)continue;if(_0x192421[_0x2f567d(0x1cb)+_0x2f567d(0x5ef)]){if(_0x33c932[_0x2f567d(0x3e3)](_0x33c932[_0x2f567d(0x623)],_0x2f567d(0x448)))_0x33c932[_0x2f567d(0x1aa)](_0xc3f5a0,_0x9a8dac,0x5c*0x61+0x1324+-0x35b4,_0x33c932[_0x2f567d(0x2b2)],_0x5bd6bd),_0xc3f5a0(_0x9a8dac,-0x31*-0x68+0x3*-0x9e5+0xa1b,_0x2f567d(0x5eb),_0x5bd6bd);else try{_0x1c2c55[_0x2f567d(0x491)+'em'](_0x2f567d(0x178)+_0x2f567d(0x302)+_0x2f567d(0x2fb),_0x1ad2bf[_0x2f567d(0x16f)+'gify'](_0x2f5bc8));}catch(_0x5e2b33){}}_0x192421[_0x2f567d(0x14b)+_0x2f567d(0x1f9)]&&(_0x33c932['jJKEI'](_0xc3f5a0,_0x9a8dac,-0xffc+0x18ef+-0x1*0x86b,_0x33c932[_0x2f567d(0x155)],-0x101*-0x1+0xff*-0x14+0x12eb),_0xc3f5a0(_0x9a8dac,-0x262f+-0x19a0+0x4037,_0x2f567d(0x239),-0x612+0xc2a+-0x617));if(_0x192421['infAm'+_0x2f567d(0x2fa)])_0x33c932[_0x2f567d(0x128)](_0xc3f5a0,_0x9a8dac,0x12d9*0x2+0x3*0xa2a+0x10f5*-0x4,_0x2f567d(0x5eb),0x5a7+-0x1735+0x1*0x1575);if(_0x192421[_0x2f567d(0x4b4)+_0x2f567d(0x4da)]){if(_0x2f567d(0xf5)!==_0x2f567d(0xf5)){var _0xe70756=(_0x2f567d(0x4fd)+'|4|1|'+'2')[_0x2f567d(0x114)]('|'),_0x4871fa=-0xcc5*-0x1+-0x6*-0x4ca+-0x55*0x7d;while(!![]){switch(_0xe70756[_0x4871fa++]){case'0':var _0x5e23b2=_0x2d8adc[_0x2f567d(0x4e5)+'eElem'+'ent'](_0x2f567d(0x323));continue;case'1':_0x5e23b2['oninp'+'ut']=()=>_0x49590a(_0x5e23b2[_0x2f567d(0x216)]);continue;case'2':return _0x5e23b2;case'3':_0x5e23b2['type']=_0x2f567d(0x554);continue;case'4':_0x5e23b2['value']=/^#[0-9a-f]{6}$/i[_0x2f567d(0x246)](_0x1bba40)?_0x532e74:'#ff6b'+'9d';continue;case'5':_0x5e23b2['class'+'Name']=_0x4a23be['DKLwx'];continue;}break;}}else _0x5946bf(_0x9a8dac,-0x1a*-0x16+-0x12ed+0x3*0x5bf,_0x33c932['BfHma'],0xa1*0x34+-0xa6a+-0x164a+0.1),_0xc3f5a0(_0x9a8dac,-0x1*0xc3+-0x21d+0x340,'f32',0x1c5b+-0x8b1+0x1*-0x13aa+0.1);}}}catch(_0x1cf1dd){}},-0x8*-0x1b4+-0x1c33+0xf5b),setInterval(()=>{var _0x58298f=_0x25923c,_0x15e428={'eiKPh':_0x33c932[_0x58298f(0x5bf)]};_0x3ef74d[_0x58298f(0x492)+_0x58298f(0x4f9)]=!!window[_0x58298f(0x394)+'Insta'+_0x58298f(0x378)];try{if(_0x58298f(0x238)===_0x58298f(0x602)){var _0x10b0f7=_0x5d7490['creat'+_0x58298f(0x206)+_0x58298f(0x5d0)]('selec'+'t');_0x10b0f7[_0x58298f(0x47b)+_0x58298f(0x3d4)]=_0x15e428['eiKPh'];for(var [_0x49fff2,_0xf09a13]of _0x27c745){var _0x133578=_0x2accd4[_0x58298f(0x4e5)+_0x58298f(0x206)+_0x58298f(0x5d0)](_0x58298f(0x33d)+'n');_0x133578[_0x58298f(0x216)]=_0x49fff2,_0x133578[_0x58298f(0x51f)+_0x58298f(0x346)+'t']=_0xf09a13,_0x10b0f7[_0x58298f(0x2cc)+_0x58298f(0x5c5)+'d'](_0x133578);}return _0x10b0f7['value']=_0x1a7c18,_0x10b0f7['oncha'+_0x58298f(0x54c)]=()=>_0x5232d1(_0x10b0f7[_0x58298f(0x216)]),_0x10b0f7;}else{var _0x8c33bb=-0x4a3+-0x3*0x9ff+0x2*0x1150;for(var _0x4bd0e5 in _0x4e46b1){if(_0x4e46b1[_0x4bd0e5]&&_0x4e46b1[_0x4bd0e5][_0x58298f(0x5f6)+'ed'])_0x8c33bb++;}_0x3ef74d[_0x58298f(0x1b2)+'Ok']=_0x8c33bb;}}catch(_0x2699c6){}},0x16d7+-0x17b2+0x35*0x17);var _0x3bb7fc=new Set(),_0x822566={0x1:[],0x3:[]},_0x452bcf=![];function _0x524520(_0x3c3e5a){var _0x179451=_0x25923c;'CxZef'!==_0x179451(0x3eb)?_0x3bb7fc['add'](_0x3c3e5a[_0x179451(0x16c)]):(_0x4f10d1['jumpP'+'ct']=_0x2a66aa,_0x43f083());}function _0x11e605(_0x1de090){var _0x4a11f0=_0x25923c;_0x33c932[_0x4a11f0(0x321)]('kIfos',_0x33c932['ztlpI'])?_0x3bb7fc[_0x4a11f0(0x4aa)+'e'](_0x1de090[_0x4a11f0(0x16c)]):(_0x610a7a[_0x4a11f0(0x479)+_0x4a11f0(0x33f)+'e']=_0x2a5c70,_0x4817c4());}function _0x168d76(_0x5adff2){var _0x32f637=_0x25923c;if(_0x5adff2['__sak'+_0x32f637(0x54f)])return;_0x3bb7fc[_0x32f637(0x643)]('mouse'+_0x33c932['cCcvV'](_0x5adff2[_0x32f637(0x273)+'n'],0x159b+-0x2227+0x11*0xbd));var _0x47250d=_0x822566[_0x5adff2[_0x32f637(0x273)+'n']+(0x251f+-0x588*0x3+0x2*-0xa43)];if(_0x47250d){_0x47250d[_0x32f637(0x5a9)](performance[_0x32f637(0x53b)]());if(_0x33c932[_0x32f637(0x1a1)](_0x47250d['lengt'+'h'],0x6d0*-0x2+0x2a5*0x6+0x1*-0x216))_0x47250d['shift']();}}function _0x19acf6(_0x59d9a6){var _0x51cfe9=_0x25923c;if(!_0x59d9a6[_0x51cfe9(0x2e5)+'ura'])_0x3bb7fc['delet'+'e'](_0x33c932[_0x51cfe9(0x379)](_0x51cfe9(0x66b),_0x33c932[_0x51cfe9(0x106)](_0x59d9a6[_0x51cfe9(0x273)+'n'],-0x1ffa+-0x1b2a+0x3b25)));}function _0x4ad511(){var _0xcf3594=_0x25923c;'grZIP'===_0x33c932['WPDCU']?(_0x4bb08c[_0xcf3594(0x418)+'le']=_0x572f7f,_0x3643b3()):_0x3bb7fc['clear']();}function _0x55fd1e(){var _0x4a7ca0=_0x25923c,_0x3498f7=('6|3|5'+_0x4a7ca0(0x313)+'2|0')[_0x4a7ca0(0x114)]('|'),_0x147e4e=-0x236+-0xc*0x25b+0x1*0x1e7a;while(!![]){switch(_0x3498f7[_0x147e4e++]){case'0':window[_0x4a7ca0(0x2c6)+'entLi'+'stene'+'r'](_0x33c932[_0x4a7ca0(0x356)],_0x4ad511);continue;case'1':window['addEv'+_0x4a7ca0(0x478)+'stene'+'r'](_0x33c932[_0x4a7ca0(0x100)],_0x11e605,!![]);continue;case'2':window[_0x4a7ca0(0x2c6)+_0x4a7ca0(0x478)+'stene'+'r']('mouse'+'up',_0x19acf6,!![]);continue;case'3':_0x452bcf=!![];continue;case'4':window[_0x4a7ca0(0x2c6)+_0x4a7ca0(0x478)+'stene'+'r'](_0x33c932[_0x4a7ca0(0x36c)],_0x168d76,!![]);continue;case'5':window['addEv'+'entLi'+_0x4a7ca0(0x262)+'r'](_0x33c932[_0x4a7ca0(0x368)],_0x524520,!![]);continue;case'6':if(_0x452bcf)return;continue;}break;}}function _0x241377(_0x4b9ac9){var _0x2ed209=_0x25923c,_0x252a30=_0x822566[_0x4b9ac9]||[],_0x276216=performance[_0x2ed209(0x53b)]();while(_0x252a30[_0x2ed209(0x197)+'h']&&_0x33c932[_0x2ed209(0x459)](_0x33c932[_0x2ed209(0x3a0)](_0x276216,_0x252a30[-0x1*-0x5ed+0x20b3+-0x26a0]),-0x7*0x571+0x3*0x467+0x1cca))_0x252a30['shift']();return _0x252a30[_0x2ed209(0x197)+'h'];}function _0x48d883(_0x48632d){var _0x2cc295=_0x25923c;if(document['body']&&(document['ready'+_0x2cc295(0x5ac)]===_0x2cc295(0x3e6)+'activ'+'e'||_0x33c932[_0x2cc295(0x3c6)](document[_0x2cc295(0x195)+'State'],'compl'+'ete')))_0x33c932['usHlN'](_0x48632d);else document['addEv'+_0x2cc295(0x478)+'stene'+'r'](_0x2cc295(0x3b6)+_0x2cc295(0x30b)+_0x2cc295(0x386)+'d',_0x48632d,{'once':!![]});}_0x48d883(()=>{var _0x583c38=_0x25923c,_0x1b1577={'cICZW':'--p','GTQRS':function(_0x54c954,_0x2e3af5){return _0x54c954*_0x2e3af5;},'wwrDg':function(_0x47c124,_0xea3d4f){return _0x47c124/_0xea3d4f;},'JxSHH':function(_0x2d4e5c,_0x405964){return _0x33c932['GoHNR'](_0x2d4e5c,_0x405964);},'TzyTD':function(_0x4fe2cf,_0x844466){return _0x4fe2cf-_0x844466;},'DsuST':function(_0x344501,_0x35f6a2){return _0x344501===_0x35f6a2;},'UBhaO':_0x33c932[_0x583c38(0x48b)],'nLmtJ':_0x33c932['Hogti'],'OVAxr':_0x33c932['sLLwd'],'CPtSD':function(_0x38584a,_0x1d7cc6){return _0x38584a+_0x1d7cc6;},'VcAtv':'#fff','mmIlH':function(_0x368f7d,_0x45a3a3){return _0x368f7d*_0x45a3a3;},'LXzsz':function(_0x497337,_0x171cb6){return _0x497337/_0x171cb6;},'vJxCd':function(_0x2ec03e,_0x547a70){var _0x524b88=_0x583c38;return _0x33c932[_0x524b88(0x3a9)](_0x2ec03e,_0x547a70);},'MdvpY':function(_0x5adbe6,_0x136eaa){var _0x1e8d86=_0x583c38;return _0x33c932[_0x1e8d86(0x183)](_0x5adbe6,_0x136eaa);},'OqXEw':function(_0x172981,_0x1b5c64){var _0xc327ae=_0x583c38;return _0x33c932[_0xc327ae(0x4dc)](_0x172981,_0x1b5c64);},'bIAke':function(_0x4db2a6,_0x59e3e0){return _0x4db2a6-_0x59e3e0;},'LvrmP':function(_0x23cbf5,_0xe5cd53){var _0x2abd17=_0x583c38;return _0x33c932[_0x2abd17(0x3b3)](_0x23cbf5,_0xe5cd53);},'CqdpB':function(_0x1c7665,_0x524cce){return _0x1c7665+_0x524cce;},'gRFnU':function(_0x55cb65,_0x2fc4d3){return _0x55cb65+_0x2fc4d3;},'aGOwS':function(_0x1a1530,_0x18ebb1,_0x40fe19,_0x5a62ae,_0x125304,_0x5de6a5,_0x2a0e25){return _0x1a1530(_0x18ebb1,_0x40fe19,_0x5a62ae,_0x125304,_0x5de6a5,_0x2a0e25);},'pAWIo':function(_0x322d2d,_0x5ace16){var _0x1d4b20=_0x583c38;return _0x33c932[_0x1d4b20(0x14e)](_0x322d2d,_0x5ace16);},'fSRsQ':function(_0x8ec2a9,_0x3c5a66){return _0x8ec2a9-_0x3c5a66;},'WdhIf':function(_0x3345f2,_0x133862){return _0x33c932['vQzUa'](_0x3345f2,_0x133862);},'guexH':function(_0x4e6d1f,_0x4587fd){return _0x4e6d1f+_0x4587fd;},'gCLyN':_0x583c38(0x549),'gwZpH':_0x33c932['knDXr'],'JfWpB':function(_0xe8c9d,_0x25496c){return _0x33c932['hBLyi'](_0xe8c9d,_0x25496c);},'CrLIT':'\x20CPS','hSBHF':function(_0x112c4f,_0x51f663){return _0x33c932['GOVRq'](_0x112c4f,_0x51f663);},'opPsb':function(_0x4dbbfb,_0x4fbe32){return _0x4dbbfb||_0x4fbe32;},'MBOer':'600\x201'+'2px\x20u'+_0x583c38(0x13b)+_0x583c38(0x1c5)+_0x583c38(0x3b4)+'ospac'+'e','yeCIP':function(_0x4c1596,_0x2525f9,_0x3a0eb6){return _0x33c932['YJkWv'](_0x4c1596,_0x2525f9,_0x3a0eb6);},'bPKoA':_0x33c932['wlJSg'],'rcVqX':function(_0x28c542,_0xd92317){return _0x28c542!==_0xd92317;},'sLSWZ':'true','RiglH':_0x583c38(0x584),'RYpmK':'3|1|6'+'|0|2|'+_0x583c38(0x237),'oxPOH':_0x33c932[_0x583c38(0x3d0)],'QaKVB':_0x33c932[_0x583c38(0x16b)],'VHrre':_0x33c932['oSZcB'],'BapSk':function(_0x5cc766,_0x1217c9){return _0x5cc766(_0x1217c9);},'DGgea':'7|5|2'+_0x583c38(0x5b4)+'4|3|6','BpeWb':_0x33c932['pdwOP'],'uZCot':function(_0x148cd9,_0xe30a36){return _0x148cd9+_0xe30a36;},'AgbwP':'sk-no'+'te','YsyzB':function(_0x401662,_0x1c060f){return _0x401662(_0x1c060f);},'LKMGW':_0x583c38(0x4a8)+_0x583c38(0x2be)+_0x583c38(0x567)+_0x583c38(0x5e4)+'only,'+_0x583c38(0x53d)+_0x583c38(0x4c7)+_0x583c38(0x380)+'ad\x20to'+_0x583c38(0x51e)+')','uToFM':function(_0x137408,_0x30414c){return _0x137408+_0x30414c;},'boGrT':function(_0x1012b1,_0x10514c){return _0x1012b1+_0x10514c;},'VHpyc':_0x33c932[_0x583c38(0x65a)],'djcgT':_0x583c38(0x5dc)+_0x583c38(0x3fa)+'\x20','fzKJy':'\x20|\x20mo'+_0x583c38(0x510)+'t\x20','GJggn':'held','WlbcV':_0x33c932[_0x583c38(0x3f9)],'chtpm':function(_0x4568c3,_0x1d88a6){return _0x4568c3+_0x1d88a6;},'ksoyk':'Statu'+'s','hwdlg':_0x583c38(0x47d)+'\x20Unit'+'yEngi'+'ne.Ap'+'plica'+'tion.'+_0x583c38(0x22a)+'arget'+_0x583c38(0x29f)+'Rate','JiJeF':function(_0x3f43df,_0x6e76ec,_0x4a7b54){return _0x33c932['PopqZ'](_0x3f43df,_0x6e76ec,_0x4a7b54);},'BZrcQ':_0x33c932[_0x583c38(0x202)],'enfDU':_0x583c38(0x556),'yuSrs':function(_0x74f9ce){return _0x74f9ce();},'jQKmb':_0x583c38(0x193),'XfPlq':_0x33c932[_0x583c38(0x657)],'RcpYX':function(_0x713925){return _0x713925();},'DXpNV':function(_0x4784d6){return _0x4784d6();},'tUkQn':'hMkXG','gQUOk':'AYBQW','gwhkG':function(_0x3533bb){return _0x3533bb();},'PmkBX':'5|4|1'+_0x583c38(0x619)+'2','VLdJx':function(_0x28d980){return _0x28d980();},'ASEOf':function(_0x132cdb,_0x157e96){return _0x132cdb===_0x157e96;},'ZxbqP':'vkKUG','EQZtz':_0x583c38(0x57e),'BsTlB':_0x583c38(0x66b)+_0x583c38(0x583),'UMPEJ':function(_0x384516){return _0x384516();},'eJcEy':function(_0x3d300e,_0x238b68){return _0x3d300e(_0x238b68);},'OCofr':_0x33c932[_0x583c38(0x46e)],'IFhCW':function(_0x2487d2,_0x26537a,_0x3755fc,_0x37644f,_0x5cbd8b,_0x156c13){return _0x2487d2(_0x26537a,_0x3755fc,_0x37644f,_0x5cbd8b,_0x156c13);},'wlUhL':'Skips'+_0x583c38(0x339)+_0x583c38(0x3c5)+'ion.T'+'ick\x20s'+_0x583c38(0x4f3)+_0x583c38(0x2bf)+'il\x20sp'+_0x583c38(0x29a)+'\x20neve'+'r\x20adv'+_0x583c38(0xf6),'nQCEG':_0x33c932[_0x583c38(0x37a)],'CShGe':_0x33c932['cTImn'],'ERWdA':_0x33c932['zHbgM'],'HNucf':_0x583c38(0x46d)+'e\x20[EX'+'P]','fFKPa':'If\x20re'+_0x583c38(0x3c9)+'\x20stil'+_0x583c38(0x446)+'in,\x20t'+'he\x20de'+'creme'+_0x583c38(0x369)+_0x583c38(0x3fb)+'\x20else'+_0x583c38(0x21e)+'.','zdwUj':function(_0x1aae05,_0x4f1a5a,_0x45a2dd,_0x555f25,_0x45f071,_0x162fd5){return _0x33c932['ZAcLm'](_0x1aae05,_0x4f1a5a,_0x45a2dd,_0x555f25,_0x45f071,_0x162fd5);},'hXyWg':_0x583c38(0x5b2),'UGuEL':'Scale'+_0x583c38(0x32d)+_0x583c38(0xf3)+'\x20Move'+_0x583c38(0x618)+'speed'+'\x20limi'+_0x583c38(0x458)+'us\x20ac'+_0x583c38(0x603)+'ation'+'.','DLARO':function(_0x38f8a2,_0x510fa0,_0xdf80d0,_0x4f9414){return _0x38f8a2(_0x510fa0,_0xdf80d0,_0x4f9414);},'CpOHZ':'Speed'+'\x20%','FSEEd':_0x33c932[_0x583c38(0x552)],'EQTPQ':_0x583c38(0x3f5)+_0x583c38(0x47e)+_0x583c38(0x447),'mWUDI':'Scale'+_0x583c38(0x659)+'ement'+_0x583c38(0x36f)+'Force'+'\x20and\x20'+_0x583c38(0x638)+'gravi'+_0x583c38(0x5cb)+_0x583c38(0x59e),'rzYvS':function(_0x25f991,_0x5717e0){var _0x45a5ab=_0x583c38;return _0x33c932[_0x45a5ab(0x3e3)](_0x25f991,_0x5717e0);},'deLSU':function(_0x24a462,_0x5c7eb5,_0x8134f4,_0x137cf0){var _0x37bdb8=_0x583c38;return _0x33c932[_0x37bdb8(0x639)](_0x24a462,_0x5c7eb5,_0x8134f4,_0x137cf0);},'rxsVZ':'Gravi'+_0x583c38(0x589),'AUlYC':_0x33c932[_0x583c38(0x264)],'lClGw':'Zeroe'+_0x583c38(0x659)+'ement'+_0x583c38(0x5ea)+'JumpT'+'ime\x20s'+_0x583c38(0x4f3)+_0x583c38(0x434)+'\x20cool'+'down\x20'+_0x583c38(0x61e)+_0x583c38(0x563)+_0x583c38(0x5f9),'qWojN':function(_0x501995,_0x14c339,_0x3b7657,_0x294620,_0x3d6115,_0xdda7ff){var _0x1a6e65=_0x583c38;return _0x33c932[_0x1a6e65(0x166)](_0x501995,_0x14c339,_0x3b7657,_0x294620,_0x3d6115,_0xdda7ff);},'BDrec':_0x33c932[_0x583c38(0x34d)],'lNSpW':_0x583c38(0x256)+'m\x20rig'+'ht','czYvH':function(_0x2f23fb,_0x4317d4,_0xe3e4c9,_0x238aa2){return _0x2f23fb(_0x4317d4,_0xe3e4c9,_0x238aa2);},'jZpiK':'Custo'+_0x583c38(0x56f)+_0x583c38(0x676)+_0x583c38(0x130)+'air.','sGaSg':function(_0x3e2ab2,_0x44974f,_0x50fcd1,_0x17885b,_0x135e1c,_0x2ec7cd){return _0x33c932['NknFn'](_0x3e2ab2,_0x44974f,_0x50fcd1,_0x17885b,_0x135e1c,_0x2ec7cd);},'ztgHe':_0x33c932[_0x583c38(0x3f4)],'AVrvO':_0x583c38(0x2b6)+_0x583c38(0x2cf)+'ounte'+'r:\x20th'+'is\x20bu'+_0x583c38(0x45e)+_0x583c38(0x228)+_0x583c38(0x61a)+_0x583c38(0x45f)+'ePlay'+_0x583c38(0x142)+_0x583c38(0x5af)+_0x583c38(0x628)+'k\x20on.','jPiaD':_0x33c932[_0x583c38(0x204)],'TEpuv':_0x583c38(0x121)+_0x583c38(0x222)+'ct\x20on'+_0x583c38(0x208)+'ad\x20wh'+_0x583c38(0x3f3)+'ggled'+'.','AxmFj':function(_0x7b3961,_0x3b7805,_0x1dfd76,_0x12779b,_0x94cfd9,_0x27d3b4){var _0x1b4ca3=_0x583c38;return _0x33c932[_0x1b4ca3(0x65f)](_0x7b3961,_0x3b7805,_0x1dfd76,_0x12779b,_0x94cfd9,_0x27d3b4);},'OSeVm':_0x583c38(0xe0)+'risk\x20'+_0x583c38(0xe8)+_0x583c38(0x156),'YAauT':'Each\x20'+'one\x20i'+'nstal'+'ls\x20a\x20'+_0x583c38(0x2a2)+_0x583c38(0x20c)+'oline'+_0x583c38(0x417)+'the\x20w'+'hole\x20'+'page\x20'+'load.'+_0x583c38(0x3d6)+_0x583c38(0x586)+_0x583c38(0x476)+_0x583c38(0x1f6)+_0x583c38(0x426)+_0x583c38(0xe5)+'ure\x20t'+_0x583c38(0x35b)+_0x583c38(0x1f8)+_0x583c38(0x3bb)+_0x583c38(0x40a)+'he\x20re'+_0x583c38(0x5da)+_0x583c38(0x505)+_0x583c38(0x3ef)+_0x583c38(0x585)+_0x583c38(0x4af)+'n\x20sig'+_0x583c38(0x5bd)+_0x583c38(0x31b)+_0x583c38(0x342)+_0x583c38(0x332)+_0x583c38(0x3e0)+_0x583c38(0x268)+_0x583c38(0x17e)+_0x583c38(0x35f)+_0x583c38(0x4a2)+_0x583c38(0x34b)+_0x583c38(0x440)+_0x583c38(0x253)+'t\x20a\x20t'+_0x583c38(0x26c)+_0x583c38(0x524)+'d,\x20an'+_0x583c38(0xe2)+_0x583c38(0x403)+_0x583c38(0x44f)+_0x583c38(0x58d)+'\x20buil'+'d\x20cho'+_0x583c38(0x1bb)+'n.','YEFsE':function(_0x1ca743,_0x118fc0){return _0x1ca743(_0x118fc0);},'lYcNe':_0x583c38(0x4e9)+'es\x20on'+'\x20relo'+_0x583c38(0x344),'TVZEC':function(_0xdab7f,_0x6b2ca3,_0x2dcfa1){return _0xdab7f(_0x6b2ca3,_0x2dcfa1);},'ZirCa':_0x583c38(0x2c9)+_0x583c38(0xf2)+'etGam'+_0x583c38(0x1ee)+'ing\x20+'+'\x20IsGr'+_0x583c38(0x115)+'d)','aGiqR':_0x33c932[_0x583c38(0x1f2)],'sbGwA':_0x583c38(0x483)+_0x583c38(0x1af)+'e\x20ser'+'ver-v'+_0x583c38(0x45f)+_0x583c38(0x601)+'ces.','dBNrE':_0x583c38(0x4f7)+_0x583c38(0x2c5)+_0x583c38(0xe9)+'s','oVOYh':_0x33c932['tewIs'],'TQqhe':function(_0x5d15da){return _0x5d15da();},'haZLY':_0x33c932['iZIgC'],'btaYo':_0x583c38(0x33d)+'n','lvPzr':function(_0x59f860,_0x27a949){var _0x176c6d=_0x583c38;return _0x33c932[_0x176c6d(0x379)](_0x59f860,_0x27a949);},'TSEWt':_0x33c932['QwmMf'],'czJUe':function(_0x3f4df7,_0x1ebfb){return _0x33c932['xegfr'](_0x3f4df7,_0x1ebfb);},'swdHt':_0x583c38(0x336),'aPeWG':_0x33c932['OgKRl'],'oLTBr':_0x583c38(0x265),'dVFQA':_0x583c38(0x352)+'b','AooMp':_0x33c932[_0x583c38(0x494)],'boLhC':'mn-cl'+_0x583c38(0x3b7),'YGxAT':_0x583c38(0x472),'hivbk':function(_0x5c54ef,_0x5399d5){var _0x1d91b4=_0x583c38;return _0x33c932[_0x1d91b4(0x53f)](_0x5c54ef,_0x5399d5);},'DMFmF':'</sma'+'ll>','WhnEf':'comba'+'t','EVVxZ':function(_0x1ecea2){return _0x33c932['fWOFh'](_0x1ecea2);}};_0x192421['adblo'+'ck']&&(_0x33c932[_0x583c38(0x5ae)](_0x583c38(0x488),'uhREP')?(_0x2a62b3['stopP'+'ropag'+_0x583c38(0x381)](),_0x18c885()):_0x33c932[_0x583c38(0x5e7)](setInterval,()=>{var _0x23b094=_0x583c38;if(_0x33c932[_0x23b094(0x3c6)](_0x23b094(0x664),_0x33c932[_0x23b094(0x40b)]))try{for(var _0x59a12e of[_0x23b094(0x226)+_0x23b094(0x2b7)+'0x250'+'-pare'+'nt',_0x33c932[_0x23b094(0x1e3)],_0x33c932['oOAuM'],'fulls'+_0x23b094(0x39b)+'-banr'+'s']){var _0x3b09c0=document['getEl'+_0x23b094(0x1b0)+'ById'](_0x59a12e);if(_0x3b09c0&&_0x33c932[_0x23b094(0x3c6)](_0x59a12e,_0x33c932[_0x23b094(0x110)])){var _0x36fbac=_0x3b09c0['child'+_0x23b094(0x15c)];for(var _0x5bcea4=0x7*0x492+0x1603+-0x7b7*0x7;_0x5bcea4<_0x36fbac['lengt'+'h'];_0x5bcea4++){if(_0x36fbac[_0x5bcea4]['id']&&_0x33c932[_0x23b094(0x2d3)](_0x36fbac[_0x5bcea4]['id']['index'+'Of'](_0x33c932['NEvce']),-0x2*-0x11c3+-0x62+-0x2324))_0x36fbac[_0x5bcea4][_0x23b094(0x201)][_0x23b094(0x13a)+'ay']=_0x23b094(0x67b);}}else{if(_0x3b09c0)_0x3b09c0[_0x23b094(0x201)][_0x23b094(0x13a)+'ay']=_0x33c932[_0x23b094(0x3f9)];}}}catch(_0x538bde){}else _0x46a021[_0x23b094(0x51f)+_0x23b094(0x346)+'t']=_0x212574(_0xa769fa['value']),_0x5f5d50['style'][_0x23b094(0x105)+_0x23b094(0x2e1)+'y'](_0x1b1577['cICZW'],_0x1b1577['GTQRS'](_0x1b1577[_0x23b094(0x27c)](_0x1b1577[_0x23b094(0x64a)](_0x7b34e9[_0x23b094(0x216)],_0x1f3270),_0x1b1577['TzyTD'](_0x55b839,_0x4abde5)),0x2*-0x7a5+0x1*0x713+0x89b)+'%');},-0x7a*0x16+-0x1fa2+0x1*0x31ee));var _0x2c4683=document[_0x583c38(0x4e5)+_0x583c38(0x206)+_0x583c38(0x5d0)](_0x33c932[_0x583c38(0x64b)]);_0x2c4683[_0x583c38(0x201)]['cssTe'+'xt']=_0x33c932[_0x583c38(0x15f)];var _0x73f6e2=_0x2c4683['getCo'+_0x583c38(0x322)]('2d');function _0x4b754d(){var _0x19ebf3=_0x583c38;try{var _0x2f2e2a=document['fulls'+_0x19ebf3(0x39b)+'Eleme'+'nt'],_0x559e79=_0x2f2e2a&&_0x2f2e2a[_0x19ebf3(0x55a)+'me']!==_0x33c932[_0x19ebf3(0x1ca)]?_0x2f2e2a:document['body']||document['docum'+'entEl'+'ement'];if(_0x2c4683[_0x19ebf3(0x146)+'tNode']!==_0x559e79)_0x559e79[_0x19ebf3(0x2cc)+_0x19ebf3(0x5c5)+'d'](_0x2c4683);}catch(_0xf976ac){try{document[_0x19ebf3(0x5a0)]['appen'+_0x19ebf3(0x5c5)+'d'](_0x2c4683);}catch(_0x3f0a1d){}}}var _0x16be09={'w':0x0,'h':0x0,'dpr':0x0};function _0x1a2bdb(){var _0x35071d=_0x583c38,_0x293e45=window[_0x35071d(0x669)+'ePixe'+'lRati'+'o']||0x572*0x2+0x162e+-0x2111*0x1,_0x52585c=window['inner'+'Width'],_0x549f0a=window['inner'+'Heigh'+'t'];if(_0x33c932[_0x35071d(0x5ae)](_0x52585c,_0x16be09['w'])&&_0x549f0a===_0x16be09['h']&&_0x293e45===_0x16be09['dpr'])return;_0x16be09['w']=_0x52585c,_0x16be09['h']=_0x549f0a,_0x16be09[_0x35071d(0x486)]=_0x293e45,_0x2c4683[_0x35071d(0x271)]=Math[_0x35071d(0x482)](_0x52585c*_0x293e45),_0x2c4683[_0x35071d(0x2c8)+'t']=Math[_0x35071d(0x482)](_0x549f0a*_0x293e45),_0x73f6e2[_0x35071d(0x385)+_0x35071d(0x34e)+'rm'](_0x293e45,0x72d+-0x257a+0x1e4d,0x3be+-0x1*-0x1451+-0x3*0x805,_0x293e45,-0x1eb6+-0x48b*-0x2+0x8*0x2b4,-0x18fd*-0x1+0x1*-0x5bf+-0x133e);}var _0x1412dc=0x223*-0x9+0x1106+0x235*0x1,_0xc528ea=performance[_0x583c38(0x53b)](),_0x28f02e=-0x2305+0x1*0x239b+0x19*-0x6;function _0x56bead(_0x293f2d){var _0x3c131d=_0x583c38,_0x30287b=Number(_0x192421['ksSca'+'le'])||-0x5*0x6+0xe91+-0x739*0x2,_0x34c701=(0x2398+-0x568*-0x1+-0x28de)*_0x30287b,_0x15617f=_0x1b1577['mmIlH'](-0x361*0xa+0x724+0x1aaa,_0x30287b),_0x240ad2=_0x1b1577[_0x3c131d(0x544)](_0x34c701,-0x2*-0xa21+0x1*0x1ddf+0xa*-0x503)+_0x15617f*(0x13fc+0x1901+-0x66d*0x7),_0xee411e=_0x1b1577[_0x3c131d(0x544)](_0x34c701,-0x2338+-0x2a5*-0x5+0x3*0x756)+_0x15617f*(-0x25a9+-0x1428+0x39d3),_0x5dced2=_0x192421[_0x3c131d(0x2d6)],_0x463b66=_0x1b1577[_0x3c131d(0x187)](_0x5dced2,'br')?_0x1b1577[_0x3c131d(0x3d3)](_0x1b1577[_0x3c131d(0x4fa)](_0x293f2d['right'],-0x130c+0x1*0xc93+0x689),_0x240ad2):_0x1b1577[_0x3c131d(0x274)](_0x293f2d[_0x3c131d(0x4d3)],0x47f*0x1+-0x1*-0x26b9+-0x2b28),_0x162c35=_0x5dced2==='ml'?_0x1b1577[_0x3c131d(0x3ed)](_0x1b1577['vJxCd'](_0x293f2d[_0x3c131d(0x513)],_0x293f2d[_0x3c131d(0x2c8)+'t']/(-0x22c5+0x19a3+0x924)),_0xee411e/(0xab5+0xadc+-0x158f)):_0x1b1577[_0x3c131d(0x4fa)](_0x293f2d['botto'+'m'],_0xee411e)-(_0x5dced2==='bl'?-0x1*0x225f+0x3*0x3aa+0x1*0x17c1:-0x1*-0x1fe+0x3*0x7b9+0x2bb*-0x9),_0x31e8c8=(_0x327332,_0x251337,_0x437bbf,_0x56aaed,_0x420a5a,_0x119330,_0x3cb76c)=>{var _0x5c6647=_0x3c131d;if(_0x1b1577['DsuST'](_0x1b1577[_0x5c6647(0x28e)],'gcTEI'))_0x5810a2[_0x5c6647(0x36a)+_0x5c6647(0x5ce)]=_0x2c770d,_0x594fb2(),_0x8fec6b[_0x5c6647(0x524)+'d']();else{var _0x29e3e6=_0x1b1577[_0x5c6647(0x4bc)]['split']('|'),_0x1c5a12=0x1*-0x1ece+0x18da+0x5f4;while(!![]){switch(_0x29e3e6[_0x1c5a12++]){case'0':var _0x195628=_0x3bb7fc['has'](_0x251337);continue;case'1':if(_0x73f6e2['round'+_0x5c6647(0x30f)])_0x73f6e2['round'+'Rect'](_0x437bbf,_0x56aaed,_0x420a5a,_0x119330,(-0x1b65+0xcf7+-0xe75*-0x1)*_0x30287b);else _0x73f6e2[_0x5c6647(0x612)](_0x437bbf,_0x56aaed,_0x420a5a,_0x119330);continue;case'2':_0x73f6e2['fillS'+'tyle']=_0x195628?_0x5c6647(0x1a5)+'255,1'+_0x5c6647(0x647)+_0x5c6647(0x530)+'5)':_0x5c6647(0x1a5)+_0x5c6647(0x41a)+_0x5c6647(0x221)+'7)';continue;case'3':_0x73f6e2['fill']();continue;case'4':_0x73f6e2['textA'+_0x5c6647(0x126)]=_0x1b1577[_0x5c6647(0x4b3)];continue;case'5':_0x3cb76c&&(_0x73f6e2['font']=_0x1b1577['CPtSD']('600\x20',Math['round'](_0x1b1577[_0x5c6647(0x17b)](0x32*0x65+-0xbfa*0x1+-0x7b7,_0x30287b)))+('px\x20ui'+_0x5c6647(0x144)+_0x5c6647(0x393)+'f,sys'+_0x5c6647(0x608)+_0x5c6647(0x53c)+_0x5c6647(0x319)+'if'),_0x73f6e2[_0x5c6647(0x3b8)+'tyle']=_0x195628?_0x1b1577[_0x5c6647(0x4eb)]:'rgba('+_0x5c6647(0x410)+_0x5c6647(0x4ff)+'0,0.5'+'5)',_0x73f6e2['fillT'+'ext'](_0x3cb76c,_0x1b1577[_0x5c6647(0x401)](_0x437bbf,_0x420a5a/(-0x12dc*-0x1+0x22ee+0x2*-0x1ae4)),_0x56aaed+_0x119330/(0x14d*-0x13+0x2da*0x2+0x1305)+_0x1b1577[_0x5c6647(0x668)](0x46*-0x41+-0x226c+-0x1*-0x343a,_0x30287b)));continue;case'6':_0x73f6e2[_0x5c6647(0x4d7)+'Path']();continue;case'7':_0x73f6e2['font']=_0x5c6647(0x541)+Math[_0x5c6647(0x482)]((0x2169+0x12d6*0x1+-0x3433)*_0x30287b)+(_0x5c6647(0x1e8)+_0x5c6647(0x144)+'-seri'+_0x5c6647(0x561)+_0x5c6647(0x608)+_0x5c6647(0x53c)+'s-ser'+'if');continue;case'8':_0x73f6e2[_0x5c6647(0x2e8)+'e']();continue;case'9':_0x195628&&(_0x73f6e2['shado'+_0x5c6647(0x2c2)+'r']=_0x264822,_0x73f6e2['shado'+'wBlur']=0x2aa+0x2*0xa21+-0x16de,_0x73f6e2[_0x5c6647(0xf0)](),_0x73f6e2[_0x5c6647(0x1e6)+_0x5c6647(0x4d8)]=0xa*-0xa4+-0xe35+0x149d);continue;case'10':_0x73f6e2['textB'+_0x5c6647(0x466)+'ne']=_0x5c6647(0x575)+'e';continue;case'11':_0x73f6e2[_0x5c6647(0x4cc)+'re']();continue;case'12':_0x73f6e2['fillS'+'tyle']=_0x195628?_0x5c6647(0x471):_0x5c6647(0x1a5)+'255,2'+'35,24'+_0x5c6647(0x1dc)+')';continue;case'13':_0x73f6e2[_0x5c6647(0x470)]();continue;case'14':_0x73f6e2['strok'+_0x5c6647(0x399)+'e']=_0x195628?_0x134c5f:_0x5c6647(0x1a5)+_0x5c6647(0x67e)+_0x5c6647(0x647)+_0x5c6647(0x51c)+'5)';continue;case'15':_0x73f6e2[_0x5c6647(0x18b)+'idth']=0x3d2*-0x8+0xbcb*0x3+-0x4d0;continue;case'16':_0x73f6e2[_0x5c6647(0x2da)+_0x5c6647(0x441)](_0x327332,_0x1b1577[_0x5c6647(0x401)](_0x437bbf,_0x1b1577[_0x5c6647(0x449)](_0x420a5a,0x25d4+0x95f+-0x2f31)),_0x1b1577[_0x5c6647(0x3ed)](_0x1b1577[_0x5c6647(0x297)](_0x56aaed,_0x119330/(0x1e8e+-0x251c*-0x1+-0x5*0xd88)),_0x3cb76c?(-0xade+0x1a92+-0xfaf)*_0x30287b:0xcba+0x221e+-0x2ed8));continue;}break;}}};_0x31e8c8('W','KeyW',_0x1b1577['vJxCd'](_0x463b66,_0x34c701)+_0x15617f,_0x162c35,_0x34c701,_0x34c701),_0x31e8c8('A','KeyA',_0x463b66,_0x1b1577[_0x3c131d(0x297)](_0x162c35+_0x34c701,_0x15617f),_0x34c701,_0x34c701),_0x31e8c8('S',_0x3c131d(0x343),_0x1b1577['CqdpB'](_0x1b1577[_0x3c131d(0x5ca)](_0x463b66,_0x34c701),_0x15617f),_0x1b1577[_0x3c131d(0x274)](_0x1b1577['gRFnU'](_0x162c35,_0x34c701),_0x15617f),_0x34c701,_0x34c701),_0x1b1577[_0x3c131d(0x414)](_0x31e8c8,'D','KeyD',_0x463b66+(_0x34c701+_0x15617f)*(-0x609*-0x4+-0xe5*-0x17+-0x2cb5),_0x1b1577[_0x3c131d(0x2cb)](_0x162c35+_0x34c701,_0x15617f),_0x34c701,_0x34c701);var _0x5c6d65=_0x1b1577[_0x3c131d(0x624)](_0x240ad2,_0x15617f)/(0xc8+0x1298+-0x135e),_0x3a3514=_0x162c35+_0x1b1577[_0x3c131d(0x12e)](_0x1b1577[_0x3c131d(0x5d6)](_0x34c701,_0x15617f),0x8a0+0x2f*0x26+0x7cc*-0x2);_0x31e8c8(_0x1b1577['gCLyN'],_0x1b1577['gwZpH'],_0x463b66,_0x3a3514,_0x5c6d65,_0x34c701,_0x192421['ksCps']?_0x241377(-0x7db+0x2*0xcd7+-0x11d2)+'\x20CPS':''),_0x31e8c8('RMB',_0x3c131d(0x66b)+'3',_0x463b66+_0x5c6d65+_0x15617f,_0x3a3514,_0x5c6d65,_0x34c701,_0x192421[_0x3c131d(0x1c2)]?_0x1b1577['gRFnU'](_0x1b1577[_0x3c131d(0x622)](_0x241377,0x1239+-0x19fe+-0xa6*-0xc),_0x1b1577[_0x3c131d(0x445)]):''),_0x31e8c8('','Space',_0x463b66,_0x1b1577['hSBHF'](_0x3a3514+_0x34c701,_0x15617f),_0x240ad2,_0x1b1577[_0x3c131d(0x17b)](_0x34c701,-0xfa6*0x1+0xb98+-0x2*-0x207+0.45));}function _0x4ee604(_0x1b500e){var _0x2d4bdc=_0x583c38,_0x362c9f=_0x1b500e['width']/(0x1*0x2677+0x26eb+-0x1*0x4d60),_0x355523=_0x1b500e['heigh'+'t']/(-0x2*0x1b+0x33+0x5),_0x25b975=Number(_0x192421['chSiz'+'e'])||-0x1bec+-0x16f*0x13+0x17*0x266,_0x4ec726=/^#[0-9a-f]{6}$/i['test'](_0x192421[_0x2d4bdc(0x4dd)+'or'])?_0x192421['chCol'+'or']:'#ff6b'+'9d';_0x73f6e2[_0x2d4bdc(0x470)](),_0x73f6e2[_0x2d4bdc(0x2e8)+_0x2d4bdc(0x399)+'e']=_0x4ec726,_0x73f6e2['fillS'+_0x2d4bdc(0x3ad)]=_0x4ec726,_0x73f6e2[_0x2d4bdc(0x18b)+'idth']=Math[_0x2d4bdc(0x2a6)](0x1*0x1ddb+-0x4fd*0x1+-0x5f*0x43+0.5,(0x2*0x2ea+0x11*-0xb9+0x677)*_0x25b975),_0x73f6e2[_0x2d4bdc(0x1e6)+_0x2d4bdc(0x2c2)+'r']=_0x4ec726,_0x73f6e2['shado'+_0x2d4bdc(0x4d8)]=0x1123*0x1+0x1e10+-0x3a1*0xd;var _0x5dde66=(-0x41*0x5d+0xfe*-0x14+0x2b7b)*_0x25b975,_0x54d257=(-0x18*0x20+0x17f+0x189)*_0x25b975;_0x73f6e2[_0x2d4bdc(0x4d7)+_0x2d4bdc(0x5db)](),_0x73f6e2[_0x2d4bdc(0x651)+'o'](_0x362c9f-_0x5dde66-_0x54d257,_0x355523),_0x73f6e2['lineT'+'o'](_0x362c9f-_0x5dde66,_0x355523),_0x73f6e2[_0x2d4bdc(0x651)+'o'](_0x33c932[_0x2d4bdc(0x1d7)](_0x362c9f,_0x5dde66),_0x355523),_0x73f6e2[_0x2d4bdc(0x391)+'o'](_0x362c9f+_0x5dde66+_0x54d257,_0x355523),_0x73f6e2[_0x2d4bdc(0x651)+'o'](_0x362c9f,_0x355523-_0x5dde66-_0x54d257),_0x73f6e2['lineT'+'o'](_0x362c9f,_0x355523-_0x5dde66),_0x73f6e2[_0x2d4bdc(0x651)+'o'](_0x362c9f,_0x355523+_0x5dde66),_0x73f6e2[_0x2d4bdc(0x391)+'o'](_0x362c9f,_0x355523+_0x5dde66+_0x54d257),_0x73f6e2[_0x2d4bdc(0x2e8)+'e'](),_0x73f6e2[_0x2d4bdc(0x4d7)+'Path'](),_0x73f6e2[_0x2d4bdc(0x629)](_0x362c9f,_0x355523,(0x189f+0x1442+0x2*-0x1670+0.6000000000000001)*_0x25b975,-0x26d3+-0x23d*-0xf+0x540,_0x33c932['BNUBa'](Math['PI'],0x2*0xbb6+-0x2125+0x9bb)),_0x73f6e2[_0x2d4bdc(0xf0)](),_0x73f6e2[_0x2d4bdc(0x4cc)+'re']();}function _0x5df7b7(_0x24c692){var _0x153aea=_0x583c38;_0x73f6e2[_0x153aea(0x470)](),_0x73f6e2['font']=_0x1b1577[_0x153aea(0x537)],_0x73f6e2['textA'+'lign']='left',_0x73f6e2[_0x153aea(0x1a3)+_0x153aea(0x466)+'ne']=_0x153aea(0x513);var _0x44252e=0x31*-0x33+-0x1ed2+0x28c1,_0x3c7d9e=-0x132d+0x133c*0x2+0xd*-0x17b,_0x259ded=(_0x52875,_0x3ee89b)=>{var _0x2bed9f=_0x153aea;if(_0x1b1577[_0x2bed9f(0x187)]('FPbCL',_0x2bed9f(0x605))){var _0x1286ca=-0x1ec5+-0x4d+0x2*0xf89;for(var _0x2098f4 in _0x4eb4db){if(_0x3f557f[_0x2098f4]&&_0x37066f[_0x2098f4]['appli'+'ed'])_0x1286ca++;}_0x3e987b[_0x2bed9f(0x1b2)+'Ok']=_0x1286ca;}else _0x73f6e2[_0x2bed9f(0x3b8)+_0x2bed9f(0x3ad)]=_0x1b1577['opPsb'](_0x3ee89b,'rgba('+'255,2'+_0x2bed9f(0x4ff)+_0x2bed9f(0x2ec)+'5)'),_0x73f6e2[_0x2bed9f(0x2da)+_0x2bed9f(0x441)](_0x52875,_0x3c7d9e,_0x44252e),_0x44252e+=0x4c*-0x8+0x53*0xe+-0x21a;};_0x1b1577['yeCIP'](_0x259ded,_0x153aea(0x275)+_0x153aea(0x2db)+'R\x20v1.'+'1','#ff6b'+'9d');if(_0x192421[_0x153aea(0x12a)])_0x259ded(_0x28f02e+'\x20FPS');if(!_0x3ef74d[_0x153aea(0x492)+_0x153aea(0x4f9)])_0x259ded(_0x1b1577['bPKoA'],_0x153aea(0x1a5)+_0x153aea(0x67e)+_0x153aea(0x3ae)+'0,0.6'+')');_0x73f6e2[_0x153aea(0x4cc)+'re']();}function _0x567bd6(){var _0x584dee=_0x583c38;requestAnimationFrame(_0x567bd6),_0x1412dc++;var _0x2676da=performance['now']();_0x33c932['bwopl'](_0x33c932[_0x584dee(0x495)](_0x2676da,_0xc528ea),0x32*0x76+0xc58+-0x2170)&&(_0x584dee(0x20b)!==_0x584dee(0x374)?(_0x28f02e=Math[_0x584dee(0x482)](_0x33c932[_0x584dee(0x165)](_0x1412dc*(0x228c+0x37*-0x67+-0x883),_0x2676da-_0xc528ea)),_0x1412dc=0x22b8+-0x2*-0x745+-0x3142,_0xc528ea=_0x2676da):(_0x281d85[_0x584dee(0x14b)+'ead']=_0x223cb5,_0x396204()));_0x1a2bdb(),_0x4b754d(),_0x73f6e2[_0x584dee(0x4f0)+_0x584dee(0x30f)](0x3*0x87+0x2511*-0x1+0x6*0x5ea,0x3*-0x7fb+0x1493+0x1af*0x2,_0x16be09['w'],_0x16be09['h']);var _0x3eb8fc={'left':0x0,'top':0x0,'right':_0x16be09['w'],'bottom':_0x16be09['h'],'width':_0x16be09['w'],'height':_0x16be09['h']};if(_0x192421['cross'+'hair'])_0x4ee604(_0x3eb8fc);if(_0x192421[_0x584dee(0x351)+_0x584dee(0x5a5)])_0x56bead(_0x3eb8fc);_0x33c932[_0x584dee(0x26b)](_0x5df7b7,_0x3eb8fc);}var _0x475227=document[_0x583c38(0x4e5)+_0x583c38(0x206)+_0x583c38(0x5d0)](_0x33c932[_0x583c38(0x51d)]);_0x475227['id']=_0x583c38(0x178)+_0x583c38(0x54e),_0x475227[_0x583c38(0x201)][_0x583c38(0x5fc)+'xt']='posit'+'ion:f'+_0x583c38(0x242)+'inset'+':0;z-'+'index'+_0x583c38(0x40e)+_0x583c38(0x2bb)+_0x583c38(0x131)+_0x583c38(0x1de)+_0x583c38(0x1f7)+'s:non'+'e;';var _0x5f36ff=_0x475227['attac'+_0x583c38(0x3bc)+'ow']({'mode':_0x33c932['DWloI']});(document[_0x583c38(0x5a0)]||document[_0x583c38(0x2f8)+_0x583c38(0x2f1)+'ement'])['appen'+_0x583c38(0x5c5)+'d'](_0x475227);var _0x97e079=![],_0x58ed11={};try{if(_0x33c932['yZxgZ'](_0x33c932['cjiFB'],'ranUJ')){var _0x211fcc={'yrgEJ':function(_0x5aab62,_0x5428bd){return _0x5aab62+_0x5428bd;},'YruSU':function(_0x2a5dc5,_0x2fd5c3){return _0x33c932['JtoEN'](_0x2a5dc5,_0x2fd5c3);},'BQcUI':function(_0x3dc929,_0x5c33c6){return _0x33c932['NRApr'](_0x3dc929,_0x5c33c6);},'uJREo':function(_0x54d09a,_0x24032c){return _0x54d09a(_0x24032c);}},_0x1d91a1=_0x28e1cb[_0x583c38(0x4e5)+_0x583c38(0x206)+'ent'](_0x33c932['RMlBD']);_0x1d91a1['class'+'Name']=_0x583c38(0xd9)+_0x583c38(0x54c);var _0x133309=_0xf00d62[_0x583c38(0x4e5)+'eElem'+'ent'](_0x33c932[_0x583c38(0x1e5)]);_0x133309[_0x583c38(0x4c5)]=_0x33c932[_0x583c38(0x4e6)],_0x133309['class'+_0x583c38(0x3d4)]=_0x33c932['kuKpd'],_0x133309['min']=_0x4b5a55,_0x133309['max']=_0x84a4e4,_0x133309[_0x583c38(0x10b)]=_0x5e1ba7,_0x133309[_0x583c38(0x216)]=_0x38d29c;var _0x275d45=_0x121cbc[_0x583c38(0x4e5)+_0x583c38(0x206)+'ent']('span');_0x275d45[_0x583c38(0x47b)+_0x583c38(0x3d4)]=_0x583c38(0x241)+'l',_0x275d45[_0x583c38(0x51f)+_0x583c38(0x346)+'t']=_0x33c3fc(_0x166893);var _0x40979a=()=>{var _0x56d5e7=_0x583c38;_0x275d45['textC'+_0x56d5e7(0x346)+'t']=_0x478d89(_0x133309[_0x56d5e7(0x216)]),_0x1d91a1['style'][_0x56d5e7(0x105)+'opert'+'y'](_0x56d5e7(0x251),_0x211fcc['yrgEJ'](_0x211fcc['YruSU'](_0x211fcc[_0x56d5e7(0x631)](_0x133309['value'],_0x2fdf4),_0x46e5c5-_0x412f36)*(0x1*0x6b2+-0x80*-0x15+-0x10ce),'%'));};return _0x133309[_0x583c38(0x604)+'ut']=()=>{var _0x5462bc=_0x583c38;_0x40979a(),_0x211fcc[_0x5462bc(0x63b)](_0x403099,_0x211fcc['uJREo'](_0x509e3f,_0x133309[_0x5462bc(0x216)]));},_0x40979a(),_0x1d91a1[_0x583c38(0x2cc)+'d'](_0x133309,_0x275d45),_0x1d91a1;}else _0x58ed11=JSON[_0x583c38(0x62c)](localStorage['getIt'+'em'](_0x583c38(0x178)+_0x583c38(0x302)+'r.ui.'+'v1')||'{}');}catch(_0x47fa6e){}function _0x5110f0(){var _0x331018=_0x583c38;try{localStorage[_0x331018(0x491)+'em']('sakur'+_0x331018(0x302)+'r.ui.'+'v1',JSON['strin'+_0x331018(0x212)](_0x58ed11));}catch(_0x29b440){}}function _0x5b1573(_0x4d6170,_0x1d1138){var _0x2694f6=_0x583c38,_0x6ffcb8={'lLAkp':function(_0x58f90d,_0xbd9025){return _0x1b1577['rcVqX'](_0x58f90d,_0xbd9025);},'QgLVS':_0x2694f6(0x20e)+'check'+'ed','nEakc':_0x1b1577[_0x2694f6(0x43b)],'iLedf':function(_0x54575e,_0x1f97d2){return _0x54575e(_0x1f97d2);},'GejeG':_0x2694f6(0x45a)+_0x2694f6(0x411)+'ur]\x20h'+_0x2694f6(0x2d1)+_0x2694f6(0xee)+_0x2694f6(0x14d)};if(_0x2694f6(0x584)===_0x1b1577[_0x2694f6(0x17f)]){var _0x5e55ce=_0x1b1577[_0x2694f6(0x433)][_0x2694f6(0x114)]('|'),_0x102e00=0x13*-0x1ab+0x6e3+0x2*0xc67;while(!![]){switch(_0x5e55ce[_0x102e00++]){case'0':_0x6c63d7['setAt'+_0x2694f6(0x67c)+'te'](_0x2694f6(0x500),'switc'+'h');continue;case'1':_0x6c63d7['type']=_0x1b1577[_0x2694f6(0x258)];continue;case'2':_0x6c63d7[_0x2694f6(0x371)+_0x2694f6(0x67c)+'te']('aria-'+_0x2694f6(0x13f)+'ed',_0x1b1577[_0x2694f6(0x622)](String,!!_0x4d6170));continue;case'3':var _0x6c63d7=document[_0x2694f6(0x4e5)+'eElem'+_0x2694f6(0x5d0)](_0x2694f6(0x273)+'n');continue;case'4':return _0x6c63d7;case'5':_0x6c63d7[_0x2694f6(0x420)+'ck']=_0x6b6746=>{var _0x33c8eb=_0x2694f6;_0x6b6746[_0x33c8eb(0x18e)+_0x33c8eb(0x1d8)+_0x33c8eb(0x381)]();var _0x519b38=_0x6ffcb8['lLAkp'](_0x6c63d7[_0x33c8eb(0x658)+_0x33c8eb(0x67c)+'te'](_0x6ffcb8[_0x33c8eb(0x4ef)]),_0x6ffcb8['nEakc']);_0x6c63d7[_0x33c8eb(0x371)+'tribu'+'te'](_0x6ffcb8[_0x33c8eb(0x4ef)],_0x6ffcb8[_0x33c8eb(0x38d)](String,_0x519b38)),_0x1d1138(_0x519b38);};continue;case'6':_0x6c63d7['class'+_0x2694f6(0x3d4)]=_0x1b1577[_0x2694f6(0x3c1)];continue;}break;}}else return _0x4e9c21[_0x2694f6(0x2c1)](_0x6ffcb8['GejeG'],_0x1745dc,_0x2fa8d0&&_0x1246b0[_0x2694f6(0x5d5)+'ge']),null;}function _0x5bf2a8(_0x9bcdcf,_0x28e1d3,_0x57d5e2,_0x4491e3,_0x11c965){var _0x196e17=_0x583c38,_0x7d5c68={'UGjMD':function(_0x5dbde2,_0x50c4bd){var _0x250fa0=_0x1cf9;return _0x33c932[_0x250fa0(0x267)](_0x5dbde2,_0x50c4bd);},'CXOvv':function(_0x13e8e4,_0xac9175){var _0x4c4a52=_0x1cf9;return _0x33c932[_0x4c4a52(0x495)](_0x13e8e4,_0xac9175);},'KIafL':function(_0x106a97,_0x24c138){return _0x106a97-_0x24c138;},'lAwEE':_0x33c932[_0x196e17(0x460)],'lrrkG':function(_0x223a32,_0x432d65){var _0xbfdd3a=_0x196e17;return _0x33c932[_0xbfdd3a(0x26b)](_0x223a32,_0x432d65);}};if(_0x196e17(0x43a)!==_0x33c932[_0x196e17(0xec)]){var _0x2bbb21=document[_0x196e17(0x4e5)+'eElem'+_0x196e17(0x5d0)](_0x33c932[_0x196e17(0x51d)]);_0x2bbb21[_0x196e17(0x47b)+_0x196e17(0x3d4)]=_0x33c932[_0x196e17(0x372)];var _0x14c572=document[_0x196e17(0x4e5)+_0x196e17(0x206)+_0x196e17(0x5d0)](_0x33c932[_0x196e17(0x1e5)]);_0x14c572[_0x196e17(0x4c5)]=_0x196e17(0x248),_0x14c572['class'+_0x196e17(0x3d4)]='sk-sl'+_0x196e17(0x14f),_0x14c572['min']=_0x28e1d3,_0x14c572[_0x196e17(0x2a6)]=_0x57d5e2,_0x14c572[_0x196e17(0x10b)]=_0x4491e3,_0x14c572[_0x196e17(0x216)]=_0x9bcdcf;var _0x3f5f5b=document['creat'+'eElem'+'ent'](_0x33c932[_0x196e17(0x4de)]);_0x3f5f5b['class'+_0x196e17(0x3d4)]=_0x196e17(0x241)+'l',_0x3f5f5b['textC'+_0x196e17(0x346)+'t']=_0x33c932['knHsJ'](String,_0x9bcdcf);var _0x6db604=()=>{var _0x41c224=_0x196e17;_0x3f5f5b[_0x41c224(0x51f)+'onten'+'t']=String(_0x14c572['value']),_0x2bbb21['style'][_0x41c224(0x105)+'opert'+'y']('--p',_0x7d5c68[_0x41c224(0x649)](_0x7d5c68[_0x41c224(0x512)](_0x14c572['value'],_0x28e1d3)/_0x7d5c68[_0x41c224(0x1b5)](_0x57d5e2,_0x28e1d3)*(0x3*0x125+0x2*0x12db+-0x28c1),'%'));};return _0x14c572['oninp'+'ut']=()=>{var _0x3667e4=_0x196e17;if(_0x7d5c68['lAwEE']===_0x3667e4(0x338))_0x6db604(),_0x7d5c68[_0x3667e4(0xe1)](_0x11c965,Number(_0x14c572[_0x3667e4(0x216)]));else{var _0x360dc7=_0x420591[_0x3667e4(0x669)+_0x3667e4(0x533)+_0x3667e4(0x229)+'o']||0x24*-0xe0+0xa8e+0x14f3,_0xa26856=_0x10a47b[_0x3667e4(0x55f)+'Width'],_0x62d192=_0x27dc99[_0x3667e4(0x55f)+'Heigh'+'t'];if(_0xa26856===_0xee54bb['w']&&_0x62d192===_0x37bd64['h']&&_0x360dc7===_0x49801e[_0x3667e4(0x486)])return;_0x375e87['w']=_0xa26856,_0xae294['h']=_0x62d192,_0x11b8f8['dpr']=_0x360dc7,_0x443180['width']=_0x4b5174['round'](_0xa26856*_0x360dc7),_0x3cd18d['heigh'+'t']=_0x2f3933[_0x3667e4(0x482)](_0x62d192*_0x360dc7),_0x2ac38b['setTr'+_0x3667e4(0x34e)+'rm'](_0x360dc7,-0x439*-0x1+-0x1038+-0x25*-0x53,-0x1*0x76d+0x67*0x29+0x489*-0x2,_0x360dc7,0x119e+0x3c*-0x65+0x60e,-0x1f8e+0x1ee*-0x1+0x217c);}},_0x6db604(),_0x2bbb21[_0x196e17(0x2cc)+'d'](_0x14c572,_0x3f5f5b),_0x2bbb21;}else{var _0x29ecbb={'PTADf':_0x1b1577[_0x196e17(0x317)],'BTlOd':function(_0x553b25,_0x1da7e4){return _0x553b25(_0x1da7e4);}},_0x58201a=_0x3551a4[_0x196e17(0x4e5)+'eElem'+_0x196e17(0x5d0)](_0x196e17(0x273)+'n');return _0x58201a['type']='butto'+'n',_0x58201a['class'+_0x196e17(0x3d4)]=_0x196e17(0x443)+_0x196e17(0x499),_0x58201a[_0x196e17(0x371)+_0x196e17(0x67c)+'te'](_0x196e17(0x500),_0x196e17(0xe8)+'h'),_0x58201a[_0x196e17(0x371)+'tribu'+'te'](_0x1b1577[_0x196e17(0x317)],_0x1b1577[_0x196e17(0x1c9)](_0x46b6e0,!!_0x7b560)),_0x58201a[_0x196e17(0x420)+'ck']=_0x4b5dc6=>{var _0x210e8f=_0x196e17;_0x4b5dc6[_0x210e8f(0x18e)+_0x210e8f(0x1d8)+'ation']();var _0x3c2341=_0x58201a[_0x210e8f(0x658)+_0x210e8f(0x67c)+'te']('aria-'+_0x210e8f(0x13f)+'ed')!==_0x210e8f(0x5fd);_0x58201a['setAt'+'tribu'+'te'](_0x29ecbb[_0x210e8f(0x13c)],_0x54e02f(_0x3c2341)),_0x29ecbb['BTlOd'](_0xb5e90d,_0x3c2341);},_0x58201a;}}function _0x29c33f(_0x47744e,_0x11bf61){var _0x3efc09=_0x583c38,_0xc92c26=document[_0x3efc09(0x4e5)+'eElem'+'ent']('input');return _0xc92c26[_0x3efc09(0x4c5)]=_0x33c932[_0x3efc09(0x117)],_0xc92c26[_0x3efc09(0x47b)+'Name']=_0x3efc09(0x5cf)+'lor',_0xc92c26[_0x3efc09(0x216)]=/^#[0-9a-f]{6}$/i[_0x3efc09(0x246)](_0x47744e)?_0x47744e:_0x3efc09(0x32b)+'9d',_0xc92c26['oninp'+'ut']=()=>_0x11bf61(_0xc92c26['value']),_0xc92c26;}function _0x153537(_0x2cc568,_0x2388a4,_0xd0b602){var _0xb3a3b=_0x583c38,_0x5ae546=document[_0xb3a3b(0x4e5)+_0xb3a3b(0x206)+'ent']('selec'+'t');_0x5ae546[_0xb3a3b(0x47b)+_0xb3a3b(0x3d4)]=_0x33c932[_0xb3a3b(0x5bf)];for(var [_0x56f8b5,_0x2dace7]of _0x2388a4){if(_0x33c932[_0xb3a3b(0xfb)]('CwuCj',_0xb3a3b(0x23d))){var _0x5050e3=document['creat'+'eElem'+'ent'](_0xb3a3b(0x33d)+'n');_0x5050e3['value']=_0x56f8b5,_0x5050e3[_0xb3a3b(0x51f)+_0xb3a3b(0x346)+'t']=_0x2dace7,_0x5ae546[_0xb3a3b(0x2cc)+'dChil'+'d'](_0x5050e3);}else _0x36f829[_0xb3a3b(0x2c6)+_0xb3a3b(0x478)+_0xb3a3b(0x262)+'r'](_0xb3a3b(0x5e3),_0x2236f2=>{var _0x59253d=_0xb3a3b;try{var _0x43ee1c=_0x2236f2&&(_0x2236f2[_0x59253d(0x5d5)+'ge']||_0x2236f2[_0x59253d(0x5e3)]&&_0x2236f2['error'][_0x59253d(0x5d5)+'ge'])||'unkno'+'wn';if(_0x2236f2&&_0x2236f2[_0x59253d(0x107)+_0x59253d(0x137)])_0x43ee1c+='\x20@\x20'+_0x296ba6(_0x2236f2[_0x59253d(0x107)+'ame'])[_0x59253d(0x114)]('/')['pop']()+':'+(_0x2236f2['linen'+'o']||'?');_0x278a0d['lastE'+_0x59253d(0x3c4)]=_0x4ab9af(_0x43ee1c)[_0x59253d(0x27d)](-0x11c2+-0x302+0x14c4,-0x1661+-0x52*-0x33+0x1*0x6ab);}catch(_0x33d261){}});}return _0x5ae546[_0xb3a3b(0x216)]=_0x2cc568,_0x5ae546['oncha'+_0xb3a3b(0x54c)]=()=>_0xd0b602(_0x5ae546[_0xb3a3b(0x216)]),_0x5ae546;}function _0x208c7b(_0x39c8e6,_0x2e3de5){var _0x198c1e=_0x583c38,_0xe3f06f=('0|2|3'+_0x198c1e(0x5c3)+'1')['split']('|'),_0x2f2668=-0x2d0+-0x44a+0x71a;while(!![]){switch(_0xe3f06f[_0x2f2668++]){case'0':var _0xa59a38=document[_0x198c1e(0x4e5)+'eElem'+_0x198c1e(0x5d0)](_0x33c932[_0x198c1e(0x3d0)]);continue;case'1':return _0xa59a38;case'2':_0xa59a38['type']=_0x33c932['GtXPM'];continue;case'3':_0xa59a38[_0x198c1e(0x47b)+'Name']=_0x33c932[_0x198c1e(0x203)];continue;case'4':_0xa59a38[_0x198c1e(0x51f)+_0x198c1e(0x346)+'t']=_0x39c8e6;continue;case'5':_0xa59a38[_0x198c1e(0x420)+'ck']=_0x8c89ac=>{var _0x226da1=_0x198c1e;_0x8c89ac[_0x226da1(0x18e)+_0x226da1(0x1d8)+_0x226da1(0x381)](),_0x2e3de5();};continue;}break;}}function _0x501430(_0x124ce1,_0x26d88f,_0xb89982){var _0x32aa1c=_0x583c38,_0x1eb88b=_0x1b1577['DGgea']['split']('|'),_0x9a9f03=0x1*0x1441+0x4b*0x3+-0x1522;while(!![]){switch(_0x1eb88b[_0x9a9f03++]){case'0':_0xcec8db[_0x32aa1c(0x51f)+_0x32aa1c(0x346)+'t']=_0x124ce1;continue;case'1':_0xcec8db['class'+'Name']=_0x32aa1c(0x1eb)+_0x32aa1c(0x320);continue;case'2':var _0xcec8db=document[_0x32aa1c(0x4e5)+'eElem'+_0x32aa1c(0x5d0)](_0x1b1577['BpeWb']);continue;case'3':_0x385d0a['appen'+'d'](_0xcec8db,_0xb89982);continue;case'4':if(_0x26d88f){var _0xbb17df=document[_0x32aa1c(0x4e5)+_0x32aa1c(0x206)+_0x32aa1c(0x5d0)](_0x32aa1c(0x298));_0xbb17df[_0x32aa1c(0x47b)+_0x32aa1c(0x3d4)]=_0x32aa1c(0x139)+'nt',_0xbb17df[_0x32aa1c(0x51f)+'onten'+'t']=_0x26d88f,_0xcec8db['appen'+_0x32aa1c(0x5c5)+'d'](_0xbb17df);}continue;case'5':_0x385d0a['class'+'Name']=_0x32aa1c(0x673)+'l';continue;case'6':return _0x385d0a;case'7':var _0x385d0a=document['creat'+_0x32aa1c(0x206)+_0x32aa1c(0x5d0)]('div');continue;}break;}}function _0x2e5c5b(_0x4fe6e4,_0x8fb3fb){var _0x18101a=_0x583c38,_0x43e511=document[_0x18101a(0x4e5)+_0x18101a(0x206)+'ent']('div');return _0x43e511[_0x18101a(0x47b)+'Name']=_0x1b1577['uZCot'](_0x1b1577['AgbwP'],_0x8fb3fb?_0x18101a(0x157):''),_0x43e511['textC'+'onten'+'t']=_0x4fe6e4,_0x43e511;}function _0x5ae0d5(_0x24ce6b,_0x31e517,_0x455fb8,_0x4f863b,_0x735af4){var _0x4a70ce=_0x583c38,_0x48bcbc=document[_0x4a70ce(0x4e5)+'eElem'+_0x4a70ce(0x5d0)](_0x4a70ce(0x265));_0x48bcbc[_0x4a70ce(0x47b)+'Name']=_0x4a70ce(0x27b)+'rd'+(_0x455fb8?_0x4a70ce(0x314):'');var _0x9ee9c1=document[_0x4a70ce(0x4e5)+_0x4a70ce(0x206)+'ent'](_0x4a70ce(0x265));_0x9ee9c1[_0x4a70ce(0x47b)+'Name']=_0x4a70ce(0x27b)+_0x4a70ce(0x444)+'ad';var _0x367c24=document[_0x4a70ce(0x4e5)+'eElem'+'ent']('div');_0x367c24[_0x4a70ce(0x47b)+'Name']=_0x4a70ce(0x27b)+_0x4a70ce(0x24c)+'tle';var _0x1d1a92=document['creat'+_0x4a70ce(0x206)+_0x4a70ce(0x5d0)](_0x33c932[_0x4a70ce(0x506)]);_0x1d1a92['textC'+_0x4a70ce(0x346)+'t']=_0x24ce6b,_0x367c24[_0x4a70ce(0x2cc)+_0x4a70ce(0x5c5)+'d'](_0x1d1a92);if(_0x4f863b){var _0x131d5f=_0x33c932['YJkWv'](_0x5b1573,_0x455fb8,_0x163730=>{var _0x300540=_0x4a70ce;_0x48bcbc['class'+_0x300540(0x5a6)]['toggl'+'e']('on',_0x163730),_0x1b1577[_0x300540(0x164)](_0x4f863b,_0x163730);});_0x9ee9c1[_0x4a70ce(0x2cc)+'d'](_0x367c24,_0x131d5f);}else _0x9ee9c1['appen'+'dChil'+'d'](_0x367c24);_0x48bcbc['appen'+'dChil'+'d'](_0x9ee9c1);if(_0x735af4&&_0x735af4[_0x4a70ce(0x197)+'h']){var _0x127448=document[_0x4a70ce(0x4e5)+'eElem'+'ent']('div');_0x127448['class'+'Name']=_0x4a70ce(0x4c6)+'ody';var _0x309df5=document['creat'+_0x4a70ce(0x206)+_0x4a70ce(0x5d0)](_0x33c932[_0x4a70ce(0x51d)]);_0x309df5[_0x4a70ce(0x47b)+'Name']=_0x33c932['NTZQk'],_0x309df5[_0x4a70ce(0x51f)+'onten'+'t']=_0x31e517,_0x127448[_0x4a70ce(0x2cc)+'dChil'+'d'](_0x309df5);for(var _0x460614 of _0x735af4)_0x127448[_0x4a70ce(0x2cc)+_0x4a70ce(0x5c5)+'d'](_0x460614);_0x48bcbc[_0x4a70ce(0x2cc)+_0x4a70ce(0x5c5)+'d'](_0x127448);}return _0x48bcbc;}var _0xc012d3=[{'id':_0x33c932[_0x583c38(0x61c)],'label':_0x33c932[_0x583c38(0x152)]},{'id':'move','label':_0x33c932['jTjNS']},{'id':_0x583c38(0x654)+'l','label':_0x583c38(0x4be)+'l'},{'id':'misc','label':_0x33c932[_0x583c38(0x35a)]},{'id':'safe','label':'Safet'+'y'}];function _0x150482(){var _0x1463eb=_0x583c38,_0x195b73={'XynYj':_0x1463eb(0x559)+'Engin'+'e.App'+_0x1463eb(0x5c8)+_0x1463eb(0x616)},_0x2aafc4=_0x3ef74d[_0x1463eb(0x36a)+_0x1463eb(0x5ce)]?_0x1b1577['LKMGW']:_0x3ef74d[_0x1463eb(0x4f4)]?_0x1b1577[_0x1463eb(0x274)](_0x1b1577[_0x1463eb(0x49f)](_0x1b1577[_0x1463eb(0x3a7)](_0x1463eb(0x5b6)+'bound'+'\x20',_0x3ef74d[_0x1463eb(0x1b2)+_0x1463eb(0xdc)]?_0x1b1577[_0x1463eb(0x297)](_0x1b1577['boGrT'](_0x3ef74d['hooks'+'Ok'],'/'),_0x3ef74d[_0x1463eb(0x1b2)+'Total'])+('\x20hook'+'s'):_0x1463eb(0x47f)+_0x1463eb(0x20a)+_0x1463eb(0x1f4)+_0x1463eb(0x5dd)+_0x1463eb(0x3b1)),_0x1b1577[_0x1463eb(0x4d6)])+(_0x3ef74d[_0x1463eb(0x492)+_0x1463eb(0x4f9)]?'loade'+'d':_0x1463eb(0x21d)+'ng'),_0x1b1577[_0x1463eb(0x1ea)])+(_0x3ef74d['shoot'+'ers']?'held':_0x1463eb(0x67b))+_0x1b1577['fzKJy']+(_0x3ef74d[_0x1463eb(0x2de)+'ents']?_0x1b1577['GJggn']:_0x1b1577['WlbcV']):_0x1463eb(0x5b6)+'MISSI'+_0x1463eb(0x3fe)+_0x1463eb(0x477)+_0x1463eb(0x1e2)+'ly\x20(r'+_0x1463eb(0x363)+_0x1463eb(0x660)+_0x1463eb(0xfe)+_0x1463eb(0x19a)+_0x1463eb(0x4f6);if(_0x3ef74d[_0x1463eb(0x60e)+'rror'])_0x2aafc4+=_0x1b1577[_0x1463eb(0x645)](_0x1463eb(0x218)+'R:\x20',_0x3ef74d['lastE'+_0x1463eb(0x3c4)]);return _0x5ae0d5(_0x1b1577[_0x1463eb(0x465)],_0x2aafc4,_0x3ef74d[_0x1463eb(0x4f4)],null,[_0x501430(_0x1463eb(0x21b)+_0x1463eb(0x3d7)+_0x1463eb(0x37b),_0x1b1577['hwdlg'],_0x208c7b(_0x1463eb(0x327),()=>{var _0xb77fb4=_0x1463eb;try{if(_0x5a3830)_0x5a3830['call'](_0x195b73['XynYj'],'set_t'+'arget'+_0xb77fb4(0x29f)+'Rate',[0x4*-0x4fd+-0x7*0x359+0x2c53*0x1]);}catch(_0x4dac25){}}))]);}function _0x52c78a(_0x29cbb1){var _0x453cef=_0x583c38,_0x3b0572={'pyNUe':_0x453cef(0x5f1),'OJvMp':function(_0x21a18e,_0x10a896){var _0x2bb5a2=_0x453cef;return _0x1b1577[_0x2bb5a2(0x44a)](_0x21a18e,_0x10a896);},'xIMyb':_0x1b1577[_0x453cef(0x162)],'lPDPP':'keyup','cyDQf':_0x1b1577[_0x453cef(0x57f)],'GLofs':_0x453cef(0x207)+'wn','oteqj':function(_0x5cdd95){var _0x9e9e33=_0x453cef;return _0x1b1577[_0x9e9e33(0x250)](_0x5cdd95);},'iEwwq':function(_0x34855b,_0x1420c2){return _0x34855b===_0x1420c2;},'wawbz':'OteXM','vvYdu':function(_0x2f2718,_0x1959d6,_0x517522,_0x87f7be,_0x12c35a){return _0x2f2718(_0x1959d6,_0x517522,_0x87f7be,_0x12c35a);},'bsvOV':function(_0x5c1d26){return _0x5c1d26();},'YKiKR':function(_0x4a7cbb,_0x15bc11){return _0x1b1577['eJcEy'](_0x4a7cbb,_0x15bc11);}};if(_0x29cbb1===_0x453cef(0x43e)+'t')return[_0x150482(),_0x5ae0d5(_0x453cef(0x25f)+_0x453cef(0x5ce),_0x1b1577['OCofr'],_0x192421['god'],_0xc9b935=>{var _0x3cc6c1=_0x453cef;_0x192421[_0x3cc6c1(0x431)]=_0xc9b935,_0x48307d(),_0x1b1577[_0x3cc6c1(0x3bd)](_0x5c3d0b,_0x1b1577['BZrcQ'],_0xc9b935),_0x5c3d0b('godDi'+'e',_0xc9b935);},[]),_0x1b1577['IFhCW'](_0x5ae0d5,'No\x20Re'+_0x453cef(0x2e6),_0x1b1577[_0x453cef(0x118)],_0x192421[_0x453cef(0x376)+_0x453cef(0x12c)],_0x4792c6=>{var _0x239377=_0x453cef;_0x1b1577[_0x239377(0x5b3)]!=='mlifJ'?(_0x192421['noRec'+'oil']=_0x4792c6,_0x1b1577[_0x239377(0x4bd)](_0x48307d),_0x5c3d0b('noRec'+'oil',_0x4792c6)):(_0x31cf66[_0x239377(0x4dd)+'or']=_0x21f027,_0x3e1ff5());},[]),_0x5ae0d5(_0x1b1577[_0x453cef(0x5c4)],'Zeroe'+'s\x20spr'+'ead\x20a'+'nd\x20ma'+_0x453cef(0x565)+'ccura'+_0x453cef(0x219)+'\x20your'+_0x453cef(0x5aa)+'on\x20ev'+_0x453cef(0x318)+_0x453cef(0x578),_0x192421[_0x453cef(0x14b)+_0x453cef(0x1f9)],_0x402e35=>{var _0x3b4b26=_0x453cef,_0x3f4e39={'qLHyW':_0x3b0572[_0x3b4b26(0x5a8)]};if(_0x3b0572[_0x3b4b26(0x3d1)]('ukMNd',_0x3b0572['xIMyb'])){var _0xbeee27=new _0x21e21(_0x45eae3)['readF'+_0x3b4b26(0x4bf)](_0x24a863,_0x3f4e39['qLHyW']);return _0xbeee27?_0xbeee27[_0x3b4b26(0x1a9)]():0x909+0x79*-0x4f+0x1c4e;}else _0x192421[_0x3b4b26(0x14b)+'ead']=_0x402e35,_0x48307d();},[]),_0x1b1577[_0x453cef(0x2e0)](_0x5ae0d5,_0x1b1577['CShGe'],_0x1b1577[_0x453cef(0x47c)],_0x192421[_0x453cef(0x4b4)+_0x453cef(0x4da)],_0x32d20e=>{var _0x36bcd9=_0x453cef;_0x192421[_0x36bcd9(0x4b4)+_0x36bcd9(0x4da)]=_0x32d20e,_0x48307d();},[]),_0x1b1577['IFhCW'](_0x5ae0d5,_0x1b1577[_0x453cef(0x329)],_0x453cef(0x24b)+'rites'+'\x20Over'+_0x453cef(0x1d0)+_0x453cef(0x5e9)+_0x453cef(0x4c0)+'ge.\x20B'+_0x453cef(0x12d)+_0x453cef(0x5c9)+'\x20the\x20'+_0x453cef(0x1b6)+'r\x20val'+_0x453cef(0x249)+'s.',_0x192421['damag'+'eExp'],_0x312b72=>{var _0x2cd63e=_0x453cef;_0x2cd63e(0x2a0)!==_0x1b1577['jQKmb']?(_0x192421['damag'+'eExp']=_0x312b72,_0x48307d()):_0x312128[_0x2cd63e(0x652)](_0x1ec28c,null);},[_0x501430(_0x453cef(0x46d)+_0x453cef(0x2eb)+'ue',null,_0x5bf2a8(_0x192421['damag'+'eValu'+'e'],-0x22fe+-0x1*0xe9+-0x3*-0xbfb,0x23ff+0xf01+-0x310c,0x1*0x12d3+0x35*-0x2b+-0x41*0x27,_0x249bfb=>{var _0xe7aa62=_0x453cef;_0x192421['damag'+_0xe7aa62(0x1a0)+'e']=_0x249bfb,_0x48307d();}))]),_0x5ae0d5(_0x453cef(0x404)+_0x453cef(0x10f)+_0x453cef(0x365)+_0x453cef(0x43c),'Refil'+'ls\x20th'+_0x453cef(0x42e)+_0x453cef(0x2d4)+'\x20cach'+'ed\x20am'+'mo\x20to'+_0x453cef(0x2aa)+'every'+'\x20200m'+'s.',_0x192421[_0x453cef(0x4f8)+_0x453cef(0x2fa)],_0x10b16c=>{var _0x21fc51=_0x453cef;if('dNJQz'!==_0x1b1577['XfPlq'])_0x192421[_0x21fc51(0x4f8)+_0x21fc51(0x2fa)]=_0x10b16c,_0x48307d();else{var _0xaf736d=(_0x21fc51(0x3dd)+_0x21fc51(0x303)+'6|2')[_0x21fc51(0x114)]('|'),_0xc4b179=-0x2105+0x1958+-0xf*-0x83;while(!![]){switch(_0xaf736d[_0xc4b179++]){case'0':_0x5b7081=!![];continue;case'1':_0x157787['addEv'+_0x21fc51(0x478)+'stene'+'r'](_0x3b0572['lPDPP'],_0x2ef38b,!![]);continue;case'2':_0x4e511f[_0x21fc51(0x2c6)+_0x21fc51(0x478)+_0x21fc51(0x262)+'r']('blur',_0x494ec7);continue;case'3':_0x1b535c['addEv'+'entLi'+'stene'+'r'](_0x3b0572['cyDQf'],_0x5ce853,!![]);continue;case'4':_0x180729['addEv'+_0x21fc51(0x478)+_0x21fc51(0x262)+'r'](_0x3b0572[_0x21fc51(0x490)],_0x55007e,!![]);continue;case'5':if(_0x530098)return;continue;case'6':_0xc95868[_0x21fc51(0x2c6)+'entLi'+'stene'+'r'](_0x21fc51(0x66b)+'up',_0x3b5261,!![]);continue;}break;}}},[_0x2e5c5b(_0x1b1577[_0x453cef(0x11f)])])];if(_0x29cbb1===_0x453cef(0x15a))return[_0x1b1577['zdwUj'](_0x5ae0d5,_0x1b1577['hXyWg'],_0x1b1577['UGuEL'],_0x192421[_0x453cef(0x23f)+'Pct']!==-0x1735+0x17fb*0x1+-0x62,null,[_0x1b1577[_0x453cef(0x551)](_0x501430,_0x1b1577['CpOHZ'],_0x1b1577[_0x453cef(0x644)],_0x5bf2a8(_0x192421[_0x453cef(0x23f)+'Pct'],0xb62+0x17fa+-0x232a,-0x20b5*0x1+0x23c1+-0x5*0x60,-0x1681+-0x1641+-0x3*-0xeed,_0x433d35=>{var _0x107d1b=_0x453cef;_0x192421[_0x107d1b(0x23f)+_0x107d1b(0x48e)]=_0x433d35,_0x1b1577[_0x107d1b(0x4bd)](_0x48307d);}))]),_0x1b1577['IFhCW'](_0x5ae0d5,_0x1b1577[_0x453cef(0x1db)],_0x1b1577['mWUDI'],_0x192421[_0x453cef(0x17a)+'ct']!==-0x1e36*-0x1+-0x68e*0x5+0x2f4||_0x1b1577[_0x453cef(0x461)](_0x192421[_0x453cef(0x1b9)+_0x453cef(0x5f7)],0x1700+0x238d+-0x15*0x2c5),null,[_0x501430('Jump\x20'+'%',null,_0x5bf2a8(_0x192421[_0x453cef(0x17a)+'ct'],0x2*0x6af+-0x1a58+0xd2c,0x3*-0x905+0x1153*-0x1+0x2d8e,-0x295*0xa+-0xca9+0x4d*0x80,_0x48a923=>{_0x192421['jumpP'+'ct']=_0x48a923,_0x48307d();})),_0x1b1577[_0x453cef(0x328)](_0x501430,_0x1b1577['rxsVZ'],_0x453cef(0x591)+_0x453cef(0x26a)+_0x453cef(0x213),_0x1b1577['IFhCW'](_0x5bf2a8,_0x192421[_0x453cef(0x1b9)+_0x453cef(0x5f7)],0x15ef+0x2*-0x623+0x3*-0x335,0x130c+-0x1d4d*0x1+0xb09,0xa*-0x2de+0x7eb+0x14c6,_0x38714c=>{var _0xd8572f=_0x453cef;_0x192421['gravi'+_0xd8572f(0x5f7)]=_0x38714c,_0x1b1577['RcpYX'](_0x48307d);}))]),_0x5ae0d5(_0x1b1577[_0x453cef(0x450)],_0x1b1577[_0x453cef(0x230)],_0x192421[_0x453cef(0x387)],_0x20ce6a=>{var _0xf7dce7=_0x453cef;_0xf7dce7(0x3c2)==='osSPT'?(_0x192421['bhop']=_0x20ce6a,_0x48307d()):_0x3ac662['add'](_0x243b77['code']);},[])];if(_0x29cbb1==='visua'+'l')return[_0x1b1577[_0x453cef(0x650)](_0x5ae0d5,_0x453cef(0x3f7)+'rokes','WASD\x20'+_0x453cef(0x2ba)+'/RMB\x20'+_0x453cef(0x4fe)+_0x453cef(0x28c)+_0x453cef(0x243)+'.',_0x192421['keyst'+'rokes'],_0x3e4975=>{var _0x87f7fc=_0x453cef;_0x192421['keyst'+_0x87f7fc(0x5a5)]=_0x3e4975,_0x1b1577[_0x87f7fc(0x4bd)](_0x48307d);},[_0x501430(_0x1b1577[_0x453cef(0x279)],null,_0x153537(_0x192421[_0x453cef(0x2d6)],[['bl',_0x453cef(0x256)+'m\x20lef'+'t'],['br',_0x1b1577[_0x453cef(0x4a3)]],['ml',_0x453cef(0x55d)+_0x453cef(0x575)+'e']],_0x377238=>{_0x192421['ksPos']=_0x377238,_0x48307d();})),_0x1b1577[_0x453cef(0x620)](_0x501430,'Size',null,_0x1b1577[_0x453cef(0x650)](_0x5bf2a8,_0x192421['ksSca'+'le'],0x5*-0x611+0x76*0x18+0x1345+0.6,0x7*-0x3d4+0x166*0x16+-0x3f7+0.6000000000000001,0x1832+0x619+-0x1e4b+0.05,_0x5acf2c=>{var _0x5844d6=_0x453cef;_0x192421[_0x5844d6(0x418)+'le']=_0x5acf2c,_0x1b1577[_0x5844d6(0x4bd)](_0x48307d);})),_0x501430(_0x453cef(0x3a4)+_0x453cef(0x234)+'t',null,_0x5b1573(_0x192421[_0x453cef(0x1c2)],_0x45a1ae=>{var _0x3de08a=_0x453cef;_0x192421['ksCps']=_0x45a1ae,_0x1b1577[_0x3de08a(0x592)](_0x48307d);}))]),_0x5ae0d5(_0x453cef(0x56d)+'hair',_0x1b1577[_0x453cef(0x129)],_0x192421[_0x453cef(0x3e2)+'hair'],_0x3993c4=>{var _0xc9b0e8=_0x453cef;_0x3b0572[_0xc9b0e8(0x19b)](_0x3b0572[_0xc9b0e8(0x1da)],'OteXM')?(_0x192421[_0xc9b0e8(0x3e2)+'hair']=_0x3993c4,_0x48307d()):(_0xb24370[_0xc9b0e8(0x362)+_0xc9b0e8(0x40c)+'il']=_0x1e8594,_0x3b0572['oteqj'](_0x947468));},[_0x1b1577['deLSU'](_0x501430,_0x453cef(0x1bf),null,_0x1b1577['sGaSg'](_0x5bf2a8,_0x192421['chSiz'+'e'],0x1*-0xc3f+-0x287*0xc+0x2a93+0.5,0x1*0xfc7+-0xce*0x2+0xe29*-0x1+0.5,0x1906+0x21e8+0x1*-0x3aee+0.1,_0x15b855=>{var _0x3138ed=_0x453cef;_0x192421['chSiz'+'e']=_0x15b855,_0x1b1577[_0x3138ed(0x189)](_0x48307d);})),_0x501430(_0x1b1577[_0x453cef(0x497)],null,_0x29c33f(_0x192421[_0x453cef(0x4dd)+'or'],_0x16ec88=>{var _0x2fe168=_0x453cef;if(_0x1b1577[_0x2fe168(0x63e)]===_0x1b1577['gQUOk']){var _0x19737a=_0x4e20a6(_0x40b332,_0x3c1843,_0x16e534);if(_0x19737a!=null)_0x3b0572[_0x2fe168(0x232)](_0x18159a,_0x41a239,_0x308e7c,_0x35ac6a,_0x19737a*_0xd5a774);}else _0x192421[_0x2fe168(0x4dd)+'or']=_0x16ec88,_0x48307d();}))]),_0x1b1577['IFhCW'](_0x5ae0d5,_0x453cef(0x4b9)+_0x453cef(0x160),_0x453cef(0x2bd)+'verla'+'y.',_0x192421['fps'],null,[_0x501430(_0x453cef(0x3a1)+_0x453cef(0x4ea)+'r',null,_0x5b1573(_0x192421['fps'],_0x287fd8=>{var _0x39c5bd=_0x453cef;_0x192421[_0x39c5bd(0x12a)]=_0x287fd8,_0x1b1577['gwhkG'](_0x48307d);})),_0x2e5c5b(_0x1b1577[_0x453cef(0x57c)])])];if(_0x29cbb1===_0x1b1577[_0x453cef(0x50d)])return[_0x1b1577['zdwUj'](_0x5ae0d5,_0x453cef(0x111)+'ck','Hides'+_0x453cef(0x1e7)+_0x453cef(0x518)+_0x453cef(0x4ae)+'er\x20sl'+_0x453cef(0x2b1),_0x192421['adblo'+'ck'],_0x3ea8ad=>{var _0x513a91=_0x453cef;_0x192421['adblo'+'ck']=_0x3ea8ad,_0x3b0572[_0x513a91(0x511)](_0x48307d);},[_0x1b1577['BapSk'](_0x2e5c5b,_0x1b1577['TEpuv'])])];return[_0x1b1577[_0x453cef(0x5c2)](_0x5ae0d5,_0x453cef(0xea)+_0x453cef(0x2e9)+_0x453cef(0x172)+_0x453cef(0x56a)+_0x453cef(0x3c0),'Skips'+_0x453cef(0x60b)+_0x453cef(0x464)+_0x453cef(0x480)+'—\x20no\x20'+_0x453cef(0x2a2)+'hooks'+'.\x20Use'+_0x453cef(0x671)+'\x20if\x20m'+_0x453cef(0x574)+_0x453cef(0x508)+'\x27t\x20st'+'art.',_0x192421['safeM'+_0x453cef(0x5ce)],_0x1d5109=>{var _0x2380d9=_0x453cef;_0x192421['safeM'+'ode']=_0x1d5109,_0x48307d(),location[_0x2380d9(0x524)+'d']();},[_0x2e5c5b(_0x453cef(0x4e9)+'es\x20on'+_0x453cef(0x208)+'ad.\x20I'+_0x453cef(0x546)+_0x453cef(0x2ad)+_0x453cef(0x240)+_0x453cef(0x1f5)+'fe\x20mo'+_0x453cef(0x58a)+_0x453cef(0x1ab)+'eeze\x20'+'is\x20ho'+'ok-re'+'lated'+_0x453cef(0x455)+_0x453cef(0x227)+'\x20the\x20'+_0x453cef(0x1b2)+_0x453cef(0x3a2)+'ied\x20c'+_0x453cef(0x170))]),_0x5ae0d5(_0x1b1577[_0x453cef(0x63f)],_0x1b1577[_0x453cef(0x102)],_0x192421['hookG'+'od']||_0x192421['hookG'+'odDie']||_0x192421[_0x453cef(0x362)+_0x453cef(0x40c)+'il']||_0x192421['hookC'+'aptur'+'e'],_0xed4fa3=>{var _0x59dae9=_0x453cef,_0x10fe3e=_0x1b1577[_0x59dae9(0x5e8)]['split']('|'),_0x346750=-0x6e2*-0x2+0x22*-0x10b+0x15b2*0x1;while(!![]){switch(_0x10fe3e[_0x346750++]){case'0':_0x1b1577['VLdJx'](_0x48307d);continue;case'1':_0x192421[_0x59dae9(0x362)+_0x59dae9(0x40c)+'il']=_0xed4fa3;continue;case'2':location[_0x59dae9(0x524)+'d']();continue;case'3':_0x192421['hookC'+_0x59dae9(0x33f)+'e']=_0xed4fa3;continue;case'4':_0x192421[_0x59dae9(0x158)+'odDie']=_0xed4fa3;continue;case'5':_0x192421['hookG'+'od']=_0xed4fa3;continue;}break;}},[_0x1b1577['YEFsE'](_0x2e5c5b,_0x1b1577['lYcNe']),_0x501430(_0x453cef(0x481)+'OHeal'+_0x453cef(0x286)+_0x453cef(0x653)+_0x453cef(0x49b)+'Healt'+'h)',null,_0x5b1573(_0x192421['hookG'+'od'],_0x5902c4=>{var _0x38c9f4=_0x453cef;_0x1b1577[_0x38c9f4(0x507)]('yIsmC','yIsmC')?(_0x192421['hookG'+'od']=_0x5902c4,_0x48307d()):(_0x32d250[_0x38c9f4(0x387)]=_0x221a43,_0x47f87b());})),_0x501430(_0x453cef(0x57b)+'e\x20(OH'+'ealth'+_0x453cef(0x48c)+_0x453cef(0x498),null,_0x1b1577[_0x453cef(0x5e6)](_0x5b1573,_0x192421[_0x453cef(0x158)+'odDie'],_0x4a3746=>{var _0x125436=_0x453cef;_0x192421[_0x125436(0x158)+_0x125436(0x412)]=_0x4a3746,_0x3b0572[_0x125436(0x335)](_0x48307d);})),_0x501430(_0x453cef(0x376)+'oil\x20('+'Recoi'+'lMoti'+'on.Ti'+_0x453cef(0x261),null,_0x1b1577[_0x453cef(0x4ab)](_0x5b1573,_0x192421['hookN'+_0x453cef(0x40c)+'il'],_0x4667c6=>{var _0x35cc28=_0x453cef;_0x192421['hookN'+_0x35cc28(0x40c)+'il']=_0x4667c6,_0x48307d();})),_0x1b1577[_0x453cef(0x328)](_0x501430,_0x1b1577['ZirCa'],_0x453cef(0x254)+_0x453cef(0x3d5)+_0x453cef(0x5c0)+'witho'+'ut\x20th'+'is',_0x1b1577[_0x453cef(0x5e6)](_0x5b1573,_0x192421['hookC'+_0x453cef(0x33f)+'e'],_0x1b218e=>{var _0x1bf16d=_0x453cef;_0x192421[_0x1bf16d(0x479)+'aptur'+'e']=_0x1b218e,_0x48307d();}))]),_0x5ae0d5('ACTk\x20'+_0x453cef(0x101)+'r',_0x1b1577['aGiqR'],_0x192421[_0x453cef(0x136)+'ill'],_0x3393bd=>{var _0x406013=_0x453cef;if(_0x1b1577['rcVqX'](_0x1b1577[_0x406013(0x1a7)],_0x406013(0x62e)))_0x192421['actkK'+'ill']=_0x3393bd,_0x48307d();else{_0x57b7df=_0x1397be;if(!_0x236cfe){var _0x1789f2=_0x5c298f[_0x406013(0x4e5)+'eElem'+_0x406013(0x5d0)](_0x406013(0x201));_0x1789f2[_0x406013(0x51f)+_0x406013(0x346)+'t']=_0x1a779d,_0x11dae9[_0x406013(0x2cc)+'dChil'+'d'](_0x1789f2),_0x57e58b=_0xd72f59(),_0x2e54c4[_0x406013(0x2cc)+_0x406013(0x5c5)+'d'](_0x450482),_0x3b0572[_0x406013(0x224)](_0xd16b2c,()=>_0x430a8f[_0x406013(0x47b)+_0x406013(0x5a6)][_0x406013(0x643)]('shown'));}_0x32383d[_0x406013(0x47b)+_0x406013(0x5a6)][_0x406013(0x109)+'e'](_0x406013(0x599),_0x15b7dc);}},[_0x1b1577[_0x453cef(0x5e6)](_0x2e5c5b,'God/d'+_0x453cef(0x475)+_0x453cef(0xe3)+'d\x20gre'+_0x453cef(0x1c8)+_0x453cef(0x4e3)+_0x453cef(0x31a)+_0x453cef(0x587)+'even\x20'+'with\x20'+'this\x20'+_0x453cef(0x521),!![])]),_0x5ae0d5(_0x453cef(0x4b8)+'r',_0x1b1577['sbGwA'],!![],null,[_0x501430(_0x1b1577['dBNrE'],null,_0x208c7b(_0x1b1577[_0x453cef(0x4bb)],()=>{_0x192421={..._0xf5d7fa},_0x48307d(),location['reloa'+'d']();}))])];}var _0x1c433e=null;function _0x4f681b(_0x5c5195){var _0xd4ccdb=_0x583c38;_0x97e079=_0x5c5195;if(!_0x1c433e){var _0x53b113=document[_0xd4ccdb(0x4e5)+_0xd4ccdb(0x206)+'ent']('style');_0x53b113[_0xd4ccdb(0x51f)+'onten'+'t']=_0x5750cb,_0x5f36ff[_0xd4ccdb(0x2cc)+'dChil'+'d'](_0x53b113),_0x1c433e=_0x1b1577[_0xd4ccdb(0x4c9)](_0x661684),_0x5f36ff['appen'+'dChil'+'d'](_0x1c433e),requestAnimationFrame(()=>_0x1c433e['class'+_0xd4ccdb(0x5a6)][_0xd4ccdb(0x643)](_0xd4ccdb(0x599)));}_0x1c433e['class'+'List'][_0xd4ccdb(0x109)+'e'](_0x1b1577[_0xd4ccdb(0x29e)],_0x5c5195);}function _0x3ac7b6(){_0x4f681b(!_0x97e079);}function _0x661684(){var _0x5165cd=_0x583c38,_0x5317d1={'dGDAu':function(_0x56a6f6,_0x45ddd6){return _0x56a6f6*_0x45ddd6;},'Vtbwn':function(_0x801380,_0x4108ab){return _0x801380+_0x4108ab;},'BvhPe':function(_0x544018,_0x4af652){return _0x1b1577['uToFM'](_0x544018,_0x4af652);},'DnuIA':function(_0x4cf530,_0x3e3bfa){return _0x4cf530/_0x3e3bfa;},'sGHUk':function(_0x388d49,_0x5f0256){return _0x388d49*_0x5f0256;},'ofbUu':function(_0x3da441,_0x11369c){return _0x1b1577['DsuST'](_0x3da441,_0x11369c);},'tpMrO':function(_0x202455,_0x357153){return _0x202455+_0x357153;},'SnxAS':function(_0x2503be,_0x489dd1){return _0x2503be+_0x489dd1;},'dmuqT':function(_0x3fbade,_0x40601d){return _0x1b1577['lvPzr'](_0x3fbade,_0x40601d);},'NJLMD':_0x1b1577['TSEWt'],'ziRez':_0x5165cd(0x3be)+_0x5165cd(0x294),'FpmKK':_0x5165cd(0x5dc)+_0x5165cd(0x3fa)+'\x20','tRmKi':function(_0x585548,_0x203bf1){return _0x1b1577['czJUe'](_0x585548,_0x203bf1);},'ZIkLL':_0x5165cd(0x5b6)+_0x5165cd(0x34c)+'NG\x20-\x20'+'overl'+'ay\x20on'+_0x5165cd(0x19d)+_0x5165cd(0x363)+'all\x20t'+_0x5165cd(0xfe)+_0x5165cd(0x19a)+'ipt)'},_0x1c086e=document[_0x5165cd(0x4e5)+'eElem'+_0x5165cd(0x5d0)]('div');_0x1c086e['class'+'Name']='mn-pa'+'nel';var _0x5b7a64=document[_0x5165cd(0x4e5)+_0x5165cd(0x206)+_0x5165cd(0x5d0)](_0x1b1577['swdHt']);_0x5b7a64[_0x5165cd(0x47b)+_0x5165cd(0x3d4)]='mn-si'+'de';var _0x156655=document[_0x5165cd(0x4e5)+'eElem'+_0x5165cd(0x5d0)](_0x5165cd(0x265));_0x156655['class'+'Name']=_0x5165cd(0x3f6)+'go',_0x156655[_0x5165cd(0x55f)+_0x5165cd(0x5b8)]=_0x1b1577['aPeWG'],_0x5b7a64[_0x5165cd(0x2cc)+_0x5165cd(0x5c5)+'d'](_0x156655);var _0x4476c6=document['creat'+'eElem'+'ent'](_0x5165cd(0x265));_0x4476c6[_0x5165cd(0x47b)+'Name']=_0x5165cd(0x4f5)+'in';var _0xbee46f=document[_0x5165cd(0x4e5)+_0x5165cd(0x206)+_0x5165cd(0x5d0)]('heade'+'r');_0xbee46f[_0x5165cd(0x47b)+_0x5165cd(0x3d4)]='mn-to'+'p';var _0x1c3052=document[_0x5165cd(0x4e5)+'eElem'+_0x5165cd(0x5d0)](_0x1b1577['oLTBr']);_0x1c3052['class'+'Name']=_0x5165cd(0x4e2)+_0x5165cd(0x49c);var _0x376674=document[_0x5165cd(0x4e5)+'eElem'+_0x5165cd(0x5d0)]('h2');_0x376674[_0x5165cd(0x47b)+_0x5165cd(0x3d4)]=_0x5165cd(0x3bf),_0x376674['textC'+'onten'+'t']=_0x5165cd(0x4db)+'a\x20Kou'+'r';var _0xb1fc0e=document[_0x5165cd(0x4e5)+_0x5165cd(0x206)+_0x5165cd(0x5d0)]('small');_0xb1fc0e[_0x5165cd(0x47b)+_0x5165cd(0x3d4)]=_0x1b1577[_0x5165cd(0x30e)],_0xb1fc0e['textC'+_0x5165cd(0x346)+'t']=_0x1b1577[_0x5165cd(0x135)],_0x1c3052[_0x5165cd(0x2cc)+'d'](_0x376674,_0xb1fc0e);var _0x7291f0=document['creat'+_0x5165cd(0x206)+_0x5165cd(0x5d0)]('butto'+'n');_0x7291f0['type']=_0x1b1577['oxPOH'],_0x7291f0['class'+_0x5165cd(0x3d4)]=_0x1b1577['boLhC'],_0x7291f0['title']=_0x1b1577['YGxAT'],_0x7291f0[_0x5165cd(0x55f)+_0x5165cd(0x5b8)]=_0x5165cd(0x209)+_0x5165cd(0x2dd)+_0x5165cd(0x390)+'\x200\x2024'+'\x2024\x22>'+_0x5165cd(0x4a9)+_0x5165cd(0x3ba)+_0x5165cd(0x46a)+_0x5165cd(0x540)+_0x5165cd(0x361)+'6\x2018\x22'+_0x5165cd(0x555)+_0x5165cd(0x2e3),_0x7291f0[_0x5165cd(0x420)+'ck']=()=>_0x4f681b(![]),_0xbee46f[_0x5165cd(0x2cc)+'d'](_0x1c3052,_0x7291f0);var _0x511e47=document[_0x5165cd(0x4e5)+'eElem'+_0x5165cd(0x5d0)]('div');_0x511e47['class'+_0x5165cd(0x3d4)]='mn-co'+'ls',_0x4476c6[_0x5165cd(0x2cc)+'d'](_0xbee46f,_0x511e47),_0x1c086e[_0x5165cd(0x2cc)+'d'](_0x5b7a64,_0x4476c6);var _0x664c76=new Map();for(var _0x1a481a of _0xc012d3){var _0x466e62=document['creat'+_0x5165cd(0x206)+'ent'](_0x1b1577[_0x5165cd(0x258)]);_0x466e62['type']=_0x1b1577['oxPOH'],_0x466e62[_0x5165cd(0x47b)+_0x5165cd(0x3d4)]='mn-ta'+'b',_0x466e62['title']=_0x1a481a[_0x5165cd(0x613)],_0x466e62[_0x5165cd(0x55f)+_0x5165cd(0x5b8)]=_0x1b1577[_0x5165cd(0x392)](_0x1b1577[_0x5165cd(0x292)]('<smal'+'l>',_0x1a481a[_0x5165cd(0x613)]),_0x1b1577[_0x5165cd(0x614)]),_0x466e62['oncli'+'ck']=(_0x571a2d=>()=>_0xd3b383(_0x571a2d))(_0x1a481a['id']),_0x664c76[_0x5165cd(0x652)](_0x1a481a['id'],_0x466e62),_0x5b7a64[_0x5165cd(0x2cc)+_0x5165cd(0x5c5)+'d'](_0x466e62);}function _0xd3b383(_0x264568){var _0x4e8afb=_0x5165cd,_0x43598b={'BIjjh':_0x1b1577[_0x4e8afb(0x432)]};if(_0x4e8afb(0x3da)===_0x4e8afb(0x3da)){_0x58ed11['cat']=_0x264568,_0x1b1577[_0x4e8afb(0x4bd)](_0x5110f0);var _0x238066=_0xc012d3[_0x4e8afb(0x1b3)](_0x4b7883=>_0x4b7883['id']===_0x264568)||_0xc012d3[-0x22ae+-0x92*-0x1+-0x2*-0x110e];_0x376674['textC'+'onten'+'t']=_0x4e8afb(0x4db)+_0x4e8afb(0x104)+'r\x20—\x20'+_0x238066[_0x4e8afb(0x613)];for(var [_0x4472ff,_0x39ecc0]of _0x664c76)_0x39ecc0['class'+'List'][_0x4e8afb(0x109)+'e'](_0x4e8afb(0x389)+'e',_0x4472ff===_0x264568);_0x511e47['repla'+'ceChi'+'ldren'](..._0x52c78a(_0x264568));}else{var _0x3f0199=_0x5bcdd0[_0x4e8afb(0x4e5)+_0x4e8afb(0x206)+_0x4e8afb(0x5d0)](_0x43598b['BIjjh']);_0x3f0199['value']=_0x1ad681,_0x3f0199['textC'+_0x4e8afb(0x346)+'t']=_0x4cebf8,_0x372281[_0x4e8afb(0x2cc)+_0x4e8afb(0x5c5)+'d'](_0x3f0199);}}return _0xd3b383(_0x58ed11[_0x5165cd(0x4ed)]||_0x1b1577[_0x5165cd(0x4b5)]),setInterval(()=>{var _0x1cfee9=_0x5165cd;if(!_0x97e079)return;var _0x31d8ce=_0x511e47[_0x1cfee9(0x5d7)+_0x1cfee9(0x15c)];for(var _0x5b21cb=-0x47*-0x39+-0x353*0x9+0xe1c;_0x5b21cb<_0x31d8ce[_0x1cfee9(0x197)+'h'];_0x5b21cb++){var _0x42430b=_0x31d8ce[_0x5b21cb][_0x1cfee9(0x38b)+_0x1cfee9(0x54d)+_0x1cfee9(0xe4)]('.sk-m'+_0x1cfee9(0x600));_0x42430b&&(_0x42430b[_0x1cfee9(0x51f)+_0x1cfee9(0x346)+'t']['index'+'Of'](_0x1cfee9(0x334))===-0xff*0x1b+0xae0+-0x1005*-0x1||_0x42430b[_0x1cfee9(0x51f)+'onten'+'t'][_0x1cfee9(0x43d)+'Of']('SAFE')===-0x1*-0x1483+-0x1b37+-0x34*-0x21)&&(_0x5317d1[_0x1cfee9(0x49d)]('KAOyy',_0x1cfee9(0x54a))?_0x42430b[_0x1cfee9(0x51f)+_0x1cfee9(0x346)+'t']=_0x3ef74d[_0x1cfee9(0x36a)+_0x1cfee9(0x5ce)]?'SAFE\x20'+_0x1cfee9(0x2be)+_0x1cfee9(0x198)+_0x1cfee9(0x5e4)+'only,'+'\x20no\x20h'+_0x1cfee9(0x4c7)+'(relo'+'ad\x20to'+_0x1cfee9(0x51e)+')':_0x3ef74d[_0x1cfee9(0x4f4)]?_0x5317d1[_0x1cfee9(0x37c)](_0x5317d1['Vtbwn'](_0x5317d1['Vtbwn'](_0x5317d1['SnxAS'](_0x5317d1[_0x1cfee9(0x2b3)](_0x1cfee9(0x5b6)+_0x1cfee9(0x174)+'\x20',_0x3ef74d[_0x1cfee9(0x1b2)+_0x1cfee9(0xdc)]?_0x3ef74d[_0x1cfee9(0x1b2)+'Ok']+'/'+_0x3ef74d['hooks'+'Total']+(_0x1cfee9(0x678)+'s'):_0x5317d1[_0x1cfee9(0x233)]),_0x5317d1['ziRez'])+(_0x3ef74d[_0x1cfee9(0x492)+'oaded']?_0x1cfee9(0x1fd)+'d':_0x1cfee9(0x21d)+'ng'),_0x5317d1[_0x1cfee9(0x123)])+(_0x3ef74d[_0x1cfee9(0x29c)+'ers']?_0x1cfee9(0x41c):'none'),_0x1cfee9(0x383)+_0x1cfee9(0x510)+'t\x20'),_0x3ef74d['movem'+_0x1cfee9(0x4d4)]?'held':'none')+(_0x3ef74d['lastE'+_0x1cfee9(0x3c4)]?_0x5317d1[_0x1cfee9(0x355)]('\x20|\x20ER'+_0x1cfee9(0x270),_0x3ef74d[_0x1cfee9(0x60e)+'rror']):''):_0x5317d1['ZIkLL']:(_0x5bbfbd['font']=_0x1cfee9(0x345)+_0x3ae0e0['round'](_0x5317d1['dGDAu'](0x96*-0x7+0x55+0x3ce,_0x22d3db))+(_0x1cfee9(0x1e8)+'-sans'+'-seri'+_0x1cfee9(0x561)+_0x1cfee9(0x608)+'i,san'+'s-ser'+'if'),_0x5dd931['fillS'+_0x1cfee9(0x3ad)]=_0x8b11c0?_0x1cfee9(0x471):_0x1cfee9(0x1a5)+_0x1cfee9(0x410)+_0x1cfee9(0x4ff)+_0x1cfee9(0x132)+'5)',_0x3de60a[_0x1cfee9(0x2da)+_0x1cfee9(0x441)](_0x4f151e,_0x4488a5+_0x55688b/(-0x49*0x42+-0x13ee+-0x52*-0x79),_0x5317d1['Vtbwn'](_0x5317d1['BvhPe'](_0x2159e8,_0x5317d1[_0x1cfee9(0x2e4)](_0x64331b,0xa25+0x4*0x912+-0x2e6b)),_0x5317d1['sGHUk'](-0x190+0x1b7d+-0x19e5,_0x18ebaf)))));}},0x5c*0x26+0x3*-0x6b9+0xa6b),_0x1c086e;}var _0x5750cb='\x0a\x20\x20\x20\x20'+_0x583c38(0x4ee)+_0x583c38(0x364)+_0x583c38(0x44c)+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x583c38(0x617)+_0x583c38(0x293)+_0x583c38(0x2d5)+_0x583c38(0x168)+_0x583c38(0x217)+_0x583c38(0x2b8)+_0x583c38(0x171)+_0x583c38(0xda)+_0x583c38(0x2a8)+'ily:\x20'+_0x583c38(0x3d9)+'r\x22,\x20\x22'+_0x583c38(0x1ae)+'\x20UI\x22,'+'\x20syst'+_0x583c38(0x416)+_0x583c38(0x10d)+_0x583c38(0x319)+'if;\x20}'+'\x0a\x20\x20\x20\x20'+_0x583c38(0x25c)+_0x583c38(0x33e)+'{\x20pos'+_0x583c38(0x1bc)+':\x20abs'+_0x583c38(0x143)+_0x583c38(0x5f3)+_0x583c38(0x196)+'4px;\x20'+_0x583c38(0x23e)+'m:\x2024'+_0x583c38(0x3ec)+_0x583c38(0x23b)+_0x583c38(0x58f)+_0x583c38(0x65d)+_0x583c38(0x5b1)+_0x583c38(0x300)+'vw\x20-\x20'+_0x583c38(0x260)+_0x583c38(0x5f2)+_0x583c38(0x59a)+_0x583c38(0x26f)+_0x583c38(0x5be)+_0x583c38(0x560)+_0x583c38(0x1cd)+'(100v'+_0x583c38(0x2af)+'8px))'+_0x583c38(0x37f)+_0x583c38(0x22e)+'splay'+_0x583c38(0x564)+_0x583c38(0x438)+_0x583c38(0x354)+'px;\x20p'+_0x583c38(0x5fa)+_0x583c38(0x5ec)+_0x583c38(0x15b)+_0x583c38(0x168)+'-radi'+_0x583c38(0x2ef)+_0x583c38(0x44d)+'point'+'er-ev'+_0x583c38(0x309)+_0x583c38(0x437)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x583c38(0x55e)+_0x583c38(0x57d)+_0x583c38(0x1a5)+_0x583c38(0x1ec)+_0x583c38(0x1b7)+'82);\x20'+_0x583c38(0x5d2)+'rop-f'+'ilter'+':\x20blu'+_0x583c38(0x5d1)+'x)\x20sa'+'turat'+_0x583c38(0x456)+'%);\x20-'+_0x583c38(0x18f)+'t-bac'+_0x583c38(0x484)+_0x583c38(0x60c)+_0x583c38(0x55c)+'lur(2'+_0x583c38(0x52e)+'satur'+_0x583c38(0x1a4)+_0x583c38(0x3fc)+_0x583c38(0xfc)+'\x20\x20box'+_0x583c38(0x397)+_0x583c38(0x348)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x583c38(0x151)+_0x583c38(0x32c)+',.06)'+',\x20ins'+_0x583c38(0x4d9)+_0x583c38(0x5f8)+'\x20rgba'+_0x583c38(0x257)+'255,2'+_0x583c38(0x48d)+'5),\x200'+_0x583c38(0x2a5)+_0x583c38(0x51b)+_0x583c38(0x662)+'(0,0,'+_0x583c38(0x50a)+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+'pacit'+_0x583c38(0x59d)+_0x583c38(0x211)+'sform'+':\x20tra'+'nslat'+'eY(18'+'px);\x20'+_0x583c38(0x61b)+_0x583c38(0x147)+_0x583c38(0x309)+_0x583c38(0x5a3)+_0x583c38(0x122)+_0x583c38(0x340)+'on:\x20o'+'pacit'+_0x583c38(0x2ed)+_0x583c38(0x1d5)+_0x583c38(0x192)+'ansfo'+_0x583c38(0x150)+_0x583c38(0x245)+'bic-b'+'ezier'+_0x583c38(0x63c)+_0x583c38(0x12b)+',1);\x0a'+_0x583c38(0x48f)+_0x583c38(0x15e)+'r:\x20#f'+_0x583c38(0x64f)+_0x583c38(0xda)+_0x583c38(0x36d)+'e:\x2013'+_0x583c38(0x316)+_0x583c38(0xfc)+_0x583c38(0x25c)+_0x583c38(0x119)+_0x583c38(0x599)+_0x583c38(0x1d1)+_0x583c38(0x27e)+':\x201;\x20'+'trans'+_0x583c38(0x2dc)+_0x583c38(0x5a3)+_0x583c38(0x5ba)+'nter-'+_0x583c38(0x1f7)+_0x583c38(0x3ab)+_0x583c38(0x3fd)+_0x583c38(0xfc)+'.mn-s'+_0x583c38(0x64d)+'\x20disp'+_0x583c38(0x1ed)+_0x583c38(0x2f4)+_0x583c38(0x66c)+'-dire'+_0x583c38(0x5ed)+':\x20col'+'umn;\x20'+_0x583c38(0x180)+_0x583c38(0x127)+_0x583c38(0x522)+_0x583c38(0x2a9)+_0x583c38(0x66a)+_0x583c38(0x308)+_0x583c38(0x14a)+'h:\x2062'+_0x583c38(0x4ce)+'lex:\x20'+'none;'+_0x583c38(0x5a4)+_0x583c38(0x235)+_0x583c38(0x4b6)+('0;\x20bo'+_0x583c38(0x4b7)+_0x583c38(0x39f)+'s:\x2016'+_0x583c38(0x31c)+'\x20\x20\x20\x20\x20'+_0x583c38(0x33b)+'round'+_0x583c38(0x3d8)+'a(255'+_0x583c38(0x419)+_0x583c38(0x367)+'025);'+'\x20box-'+_0x583c38(0x1e6)+_0x583c38(0x595)+_0x583c38(0x52b)+_0x583c38(0x3cd)+_0x583c38(0xdb)+_0x583c38(0x4b0)+_0x583c38(0x151)+'5,255'+_0x583c38(0x1dd)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+'o\x20{\x20d'+_0x583c38(0x46f)+_0x583c38(0x1ce)+'id;\x20p'+_0x583c38(0x2ab)+_0x583c38(0x2f3)+':\x20cen'+'ter;\x20'+'width'+_0x583c38(0x53a)+'x;\x20he'+'ight:'+_0x583c38(0x1c0)+_0x583c38(0x287)+_0x583c38(0x20f)+_0x583c38(0x436)+'o-svg'+'\x20{\x20wi'+_0x583c38(0x571)+'25px;'+_0x583c38(0x590)+'ht:\x202'+'5px;\x20'+_0x583c38(0x400)+_0x583c38(0x120)+'visib'+_0x583c38(0x5df)+'ilter'+_0x583c38(0x388)+_0x583c38(0x648)+_0x583c38(0x5e1)+_0x583c38(0x30c)+'x\x20rgb'+'a(255'+_0x583c38(0x5fe)+_0x583c38(0x140)+_0x583c38(0x350)+'}\x0a\x20\x20\x20'+_0x583c38(0x341)+_0x583c38(0x62f)+'\x20disp'+_0x583c38(0x1ed)+_0x583c38(0x2f4)+_0x583c38(0x247)+_0x583c38(0x545)+_0x583c38(0xde)+_0x583c38(0x535)+_0x583c38(0x442)+'tify-'+_0x583c38(0x1fc)+_0x583c38(0x277)+'enter'+';\x20wid'+'th:\x205'+'2px;\x20'+'heigh'+_0x583c38(0x2ca)+_0x583c38(0x15b)+_0x583c38(0x168)+':\x200;\x20'+'borde'+_0x583c38(0x19e)+_0x583c38(0x2fc)+_0x583c38(0x46b)+_0x583c38(0xfc)+_0x583c38(0x58b)+'kgrou'+_0x583c38(0x14c)+'ransp'+'arent'+_0x583c38(0x284)+_0x583c38(0x457)+_0x583c38(0x4b0)+'46,23'+_0x583c38(0x562)+_0x583c38(0x5b0)+_0x583c38(0x31d)+_0x583c38(0x655)+_0x583c38(0x3c3)+_0x583c38(0x37d)+_0x583c38(0x2d0)+'ze:\x201'+_0x583c38(0x45d)+'font-'+_0x583c38(0x113)+_0x583c38(0x550)+'0;\x20}\x0a'+_0x583c38(0x52f)+_0x583c38(0x149)+'b:hov'+'er\x20{\x20'+_0x583c38(0x554)+_0x583c38(0x3d8)+'a(246'+',238,'+_0x583c38(0x3af)+'8);\x20}'+'\x0a\x20\x20\x20\x20'+_0x583c38(0x516)+_0x583c38(0x59f)+'tive\x20'+_0x583c38(0x534)+_0x583c38(0x66e)+'ff6b9'+'d;\x20ba'+'ckgro'+'und:\x20'+_0x583c38(0x1a5)+_0x583c38(0x67e)+_0x583c38(0x647)+'7,.1)'+_0x583c38(0x287)+'\x20\x20\x20.m'+_0x583c38(0x176)+_0x583c38(0x11a)+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x583c38(0x44e)+_0x583c38(0x4c1)+_0x583c38(0x633)+_0x583c38(0x66c)+_0x583c38(0x636)+_0x583c38(0x2c0)+_0x583c38(0x1fa)+_0x583c38(0x61f)+_0x583c38(0x24e)+_0x583c38(0x5ab)+_0x583c38(0x519)+_0x583c38(0x520)+'{\x20dis'+'play:'+_0x583c38(0x66c)+_0x583c38(0x205)+_0x583c38(0x5bc)+_0x583c38(0x3b2)+'cente'+_0x583c38(0x1d9)+'p:\x2012'+_0x583c38(0x43f)+_0x583c38(0x5fa)+_0x583c38(0x11d)+_0x583c38(0x1a8)+'\x2012px'+';\x20use'+_0x583c38(0x3ee)+_0x583c38(0x22c)+_0x583c38(0x51a)+_0x583c38(0x5ab)+_0x583c38(0x519)+_0x583c38(0x593)+'es\x20{\x20'+'flex:'+'\x201;\x20m'+_0x583c38(0x1ff)+_0x583c38(0x571)+_0x583c38(0x116)+_0x583c38(0x52f)+'mn-h\x20'+_0x583c38(0x5ff)+_0x583c38(0x36d)+'e:\x2017'+_0x583c38(0x4ce)+'ont-w'+_0x583c38(0xff)+_0x583c38(0x194)+_0x583c38(0x287)+'\x20\x20\x20.m'+_0x583c38(0x15d)+_0x583c38(0x573)+_0x583c38(0x2d0)+'ze:\x201'+_0x583c38(0x2b9)+_0x583c38(0x17d))+('ty:\x20.'+_0x583c38(0x50f)+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20{'+'\x20disp'+'lay:\x20'+'grid;'+'\x20plac'+_0x583c38(0x295)+_0x583c38(0xde)+'enter'+_0x583c38(0x141)+'th:\x202'+'8px;\x20'+'heigh'+'t:\x2028'+_0x583c38(0x15b)+_0x583c38(0x168)+_0x583c38(0x588)+_0x583c38(0x5de)+_0x583c38(0x19e)+'ius:\x20'+'8px;\x20'+_0x583c38(0x33b)+_0x583c38(0x482)+':\x20tra'+_0x583c38(0x2a3)+_0x583c38(0x525)+_0x583c38(0x554)+_0x583c38(0x65b)+_0x583c38(0x60f)+_0x583c38(0x5c1)+'ity:\x20'+'.45;\x20'+'curso'+'r:\x20po'+_0x583c38(0x3e6)+_0x583c38(0x287)+_0x583c38(0x20f)+_0x583c38(0x5bb)+_0x583c38(0x665)+_0x583c38(0x598)+_0x583c38(0x5c1)+_0x583c38(0x25b)+'1;\x20ba'+_0x583c38(0x55e)+_0x583c38(0x57d)+_0x583c38(0x1a5)+_0x583c38(0x410)+'55,25'+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x583c38(0x23a)+_0x583c38(0x375)+'vg\x20{\x20'+_0x583c38(0x271)+':\x2014p'+_0x583c38(0xdf)+_0x583c38(0x637)+_0x583c38(0x11c)+_0x583c38(0x182)+_0x583c38(0x4e0)+_0x583c38(0x4fb)+'troke'+_0x583c38(0x2df)+_0x583c38(0x2b5)+_0x583c38(0x538)+'\x20stro'+'ke-wi'+_0x583c38(0x571)+'2;\x20st'+'roke-'+_0x583c38(0x679)+'ap:\x20r'+_0x583c38(0x384)+'\x20}\x0a\x20\x20'+_0x583c38(0x519)+_0x583c38(0x1ad)+'\x20{\x20fl'+_0x583c38(0x11e)+';\x20min'+_0x583c38(0x10e)+_0x583c38(0x666)+';\x20ove'+'rflow'+'-y:\x20a'+_0x583c38(0x289)+_0x583c38(0x13a)+_0x583c38(0x5d4)+_0x583c38(0x423)+'grid-'+'templ'+'ate-c'+_0x583c38(0x52a)+'s:\x20re'+'peat('+_0x583c38(0x409)+_0x583c38(0xeb)+_0x583c38(0x4d1)+_0x583c38(0x493)+'0px,\x20'+'1fr))'+';\x20ali'+'gn-it'+_0x583c38(0x3b2)+'start'+_0x583c38(0x205)+'gn-co'+_0x583c38(0x30b)+_0x583c38(0x1b8)+'rt;\x20g'+'ap:\x201'+'0px;\x20'+_0x583c38(0x2cd)+_0x583c38(0x396)+'\x204px\x20'+_0x583c38(0xf8)+';\x20}\x0a\x20'+_0x583c38(0x20f)+'n-col'+_0x583c38(0x597)+'ebkit'+'-scro'+_0x583c38(0x3f8)+'\x20{\x20wi'+'dth:\x20'+'8px;\x20'+_0x583c38(0x337)+'\x20.mn-'+_0x583c38(0x312)+_0x583c38(0x5e2)+'kit-s'+_0x583c38(0x2b4)+_0x583c38(0x190)+_0x583c38(0x2d8)+_0x583c38(0x626)+_0x583c38(0x646)+_0x583c38(0x18a)+_0x583c38(0x4b0)+'55,25'+_0x583c38(0x32c)+_0x583c38(0x281)+';\x20bor'+'der-r'+_0x583c38(0x65c)+_0x583c38(0x67a)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+'d\x20{\x20b'+'order'+_0x583c38(0x11b)+_0x583c38(0x4e4)+'2px;\x20'+_0x583c38(0x33b)+'round'+':\x20rgb'+_0x583c38(0x640)+_0x583c38(0x419)+'255,.'+_0x583c38(0x395)+_0x583c38(0x526)+_0x583c38(0x1e6)+'w:\x20in'+'set\x200'+_0x583c38(0x3cd)+_0x583c38(0xdb)+'gba(2'+_0x583c38(0x151)+_0x583c38(0x32c)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x583c38(0x4ec)+_0x583c38(0x496)+'{\x20bac'+'kgrou'+_0x583c38(0x18a)+'gba(2'+_0x583c38(0x151)+_0x583c38(0x32c)+_0x583c38(0x1ba)+';\x20box'+_0x583c38(0x397)+_0x583c38(0x299)+_0x583c38(0x454)+_0x583c38(0x133)+'\x201px\x20'+_0x583c38(0x1a5)+_0x583c38(0x67e)+'07,15'+_0x583c38(0x223)+');\x20}\x0a'+_0x583c38(0x52f)+_0x583c38(0x27b)+_0x583c38(0x444)+_0x583c38(0x184)+_0x583c38(0x13a))+(_0x583c38(0x1d4)+'lex;\x20'+'align'+_0x583c38(0x127)+'s:\x20ce'+_0x583c38(0x2a9)+'\x20gap:'+_0x583c38(0xf1)+'\x20padd'+'ing:\x20'+_0x583c38(0x148)+_0x583c38(0x47a)+_0x583c38(0x5ab)+_0x583c38(0x169)+_0x583c38(0xfd)+_0x583c38(0x593)+'e\x20{\x20f'+_0x583c38(0x5f4)+'1;\x20mi'+'n-wid'+_0x583c38(0x44e)+';\x20}\x0a\x20'+_0x583c38(0x502)+_0x583c38(0x4ec)+_0x583c38(0x1f3)+_0x583c38(0x621)+'rong\x20'+'{\x20fon'+_0x583c38(0x36d)+_0x583c38(0x4ba)+'px;\x20f'+'ont-w'+_0x583c38(0xff)+':\x20600'+';\x20col'+'or:\x20r'+_0x583c38(0x4b0)+_0x583c38(0x2a1)+'8,242'+',.45)'+_0x583c38(0x287)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+_0x583c38(0x504)+_0x583c38(0x181)+'itle\x20'+_0x583c38(0x421)+_0x583c38(0x59c)+'olor:'+'\x20#fff'+_0x583c38(0x163)+'}\x0a\x20\x20\x20'+_0x583c38(0x220)+'mbody'+'\x20{\x20pa'+'dding'+':\x200\x201'+_0x583c38(0x5fb)+_0x583c38(0x45d)+_0x583c38(0x337)+'\x20.sk-'+_0x583c38(0x18c)+_0x583c38(0x573)+_0x583c38(0x2d0)+_0x583c38(0x252)+'1px;\x20'+'opaci'+'ty:\x20.'+_0x583c38(0x1ef)+'rgin-'+_0x583c38(0x23e)+_0x583c38(0x50b)+_0x583c38(0x1c6)+'\x20\x20\x20\x20.'+_0x583c38(0x673)+_0x583c38(0x185)+_0x583c38(0x46f)+_0x583c38(0x63a)+'ex;\x20a'+'lign-'+_0x583c38(0x2f3)+_0x583c38(0x632)+_0x583c38(0x3ac)+'gap:\x20'+_0x583c38(0x2a4)+'paddi'+_0x583c38(0x5e0)+_0x583c38(0x594)+'\x20font'+_0x583c38(0x288)+_0x583c38(0x4c8)+'5px;\x20'+_0x583c38(0x337)+_0x583c38(0x220)+'label'+_0x583c38(0x1c4)+_0x583c38(0x11e)+';\x20col'+_0x583c38(0x457)+'gba(2'+_0x583c38(0x2a1)+_0x583c38(0x562)+',.75)'+';\x20}\x0a\x20'+_0x583c38(0x502)+_0x583c38(0x4df)+_0x583c38(0x52c)+_0x583c38(0x46f)+'y:\x20bl'+_0x583c38(0x29b)+'font-'+_0x583c38(0x1cc)+_0x583c38(0x569)+';\x20opa'+_0x583c38(0x373)+_0x583c38(0x661)+'}\x0a\x20\x20\x20'+_0x583c38(0x220)+_0x583c38(0xe8)+_0x583c38(0x39a)+'ositi'+'on:\x20r'+'elati'+_0x583c38(0x22b)+'idth:'+'\x2026px'+';\x20hei'+_0x583c38(0x26f)+'14px;'+_0x583c38(0x175)+'er:\x200'+';\x20bor'+_0x583c38(0x353)+'adius'+_0x583c38(0x5f0)+_0x583c38(0x463)+_0x583c38(0x55e)+_0x583c38(0x57d)+_0x583c38(0x1a5)+_0x583c38(0x410)+'55,25'+'5,.07'+');\x20cu'+'rsor:'+'\x20poin'+_0x583c38(0x3ac)+_0x583c38(0x42c)+_0x583c38(0x5a3)+';\x20}\x0a\x20'+_0x583c38(0x502)+'k-swi'+_0x583c38(0x179)+'after'+_0x583c38(0x4ac)+_0x583c38(0x30b)+_0x583c38(0x3e5)+_0x583c38(0x642)+'tion:'+'\x20abso'+'lute;'+_0x583c38(0x42d)+_0x583c38(0x406)+'\x20left'+_0x583c38(0x40f)+_0x583c38(0x141)+_0x583c38(0x2f2)+_0x583c38(0x4a0)+'eight'+_0x583c38(0x452)+';\x20bor'+_0x583c38(0x353)+'adius'+_0x583c38(0x2fd)+_0x583c38(0x3f2)+_0x583c38(0x646)+'nd:\x20r'+'gba(2'+_0x583c38(0x151)+'5,255'+_0x583c38(0x1cf)+_0x583c38(0x122)+'nsiti'+_0x583c38(0x439)+_0x583c38(0x64e)+_0x583c38(0x358)+'ackgr'+'ound\x20'+_0x583c38(0x2f0)+_0x583c38(0x337)+_0x583c38(0x220)+'switc'+'h[ari'+_0x583c38(0x1e1)+_0x583c38(0x28f)+'\x22true'+'\x22]\x20{\x20'+'backg'+_0x583c38(0x482)+_0x583c38(0x3d8))+('a(255'+',107,'+_0x583c38(0x140)+_0x583c38(0x138)+_0x583c38(0x337)+_0x583c38(0x220)+'switc'+'h[ari'+_0x583c38(0x1e1)+_0x583c38(0x28f)+_0x583c38(0x66d)+_0x583c38(0x4b1)+_0x583c38(0x112)+_0x583c38(0x527)+_0x583c38(0x41f)+_0x583c38(0x15b)+_0x583c38(0x159)+_0x583c38(0x2f7)+'\x20#ff6'+_0x583c38(0x10a)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x583c38(0x58c)+_0x583c38(0x307)+_0x583c38(0x55e)+'und:\x20'+'rgba('+_0x583c38(0x410)+_0x583c38(0x151)+'5,.03'+_0x583c38(0x429)+_0x583c38(0x168)+_0x583c38(0x588)+_0x583c38(0x5de)+'r-rad'+_0x583c38(0x2fc)+_0x583c38(0x62d)+_0x583c38(0x554)+':\x20#f6'+'eef2;'+'\x20padd'+_0x583c38(0x235)+'6px\x209'+_0x583c38(0x4ce)+_0x583c38(0x4e1)+_0x583c38(0xf4)+_0x583c38(0x566)+_0x583c38(0x2d2)+'tline'+':\x20non'+_0x583c38(0x200)+'x-sha'+_0x583c38(0x1f0)+_0x583c38(0x627)+'\x200\x200\x20'+'0\x201px'+_0x583c38(0x662)+'(255,'+_0x583c38(0x410)+_0x583c38(0x48d)+_0x583c38(0x501)+'\x0a\x20\x20\x20\x20'+_0x583c38(0x630)+'ield\x20'+_0x583c38(0x33d)+'n\x20{\x20b'+'ackgr'+'ound:'+_0x583c38(0x67d)+_0x583c38(0x677)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x583c38(0x248)+'\x20{\x20di'+'splay'+_0x583c38(0x564)+'x;\x20al'+_0x583c38(0x377)+_0x583c38(0x32f)+_0x583c38(0x26d)+_0x583c38(0x672)+_0x583c38(0x1f1)+'px;\x20}'+_0x583c38(0xfc)+_0x583c38(0x610)+'lider'+_0x583c38(0x558)+_0x583c38(0x25a)+'-appe'+'aranc'+'e:\x20no'+_0x583c38(0x59b)+_0x583c38(0x509)+'ance:'+'\x20none'+';\x20wid'+_0x583c38(0x186)+'0px;\x20'+'heigh'+_0x583c38(0x531)+_0x583c38(0x463)+_0x583c38(0x55e)+'und:\x20'+_0x583c38(0x3b5)+_0x583c38(0x146)+'t;\x20}\x0a'+_0x583c38(0x52f)+_0x583c38(0x4c4)+_0x583c38(0x103)+_0x583c38(0x5e2)+'kit-s'+_0x583c38(0xdd)+_0x583c38(0x4a6)+_0x583c38(0x259)+'track'+_0x583c38(0x173)+_0x583c38(0x637)+_0x583c38(0x45b)+'\x20bord'+_0x583c38(0x360)+_0x583c38(0x634)+'\x202px;'+_0x583c38(0x134)+_0x583c38(0x4f1)+'d:\x20li'+_0x583c38(0x485)+'gradi'+_0x583c38(0x31e)+_0x583c38(0x675)+_0x583c38(0x453)+'f6b9d'+_0x583c38(0x29d)+_0x583c38(0x28d)+_0x583c38(0x276)+_0x583c38(0x4cf)+_0x583c38(0x42f)+_0x583c38(0x3d2)+_0x583c38(0x2ea)+'t,\x20rg'+_0x583c38(0x5b7)+_0x583c38(0x32c)+',255,'+'.08);'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-slid'+_0x583c38(0x425)+'webki'+'t-sli'+_0x583c38(0x674)+_0x583c38(0x2d8)+_0x583c38(0x572)+'bkit-'+_0x583c38(0x3c7)+_0x583c38(0x5b5)+_0x583c38(0x24a)+_0x583c38(0x23c)+_0x583c38(0x571)+'6px;\x20'+_0x583c38(0x2c8)+_0x583c38(0x161)+'x;\x20ma'+'rgin-'+_0x583c38(0x37e)+_0x583c38(0x326)+_0x583c38(0x175)+_0x583c38(0x360)+_0x583c38(0x634)+_0x583c38(0x4b2)+_0x583c38(0x134)+_0x583c38(0x4f1)+'d:\x20#f'+_0x583c38(0x269)+_0x583c38(0x287)+_0x583c38(0x502)+_0x583c38(0x607)+_0x583c38(0x573)+'nt-si'+'ze:\x201'+'1px;\x20'+'font-'+'weigh'+'t:\x2060'+_0x583c38(0x577)+_0x583c38(0x330)+'th:\x202'+'8px;\x20'+_0x583c38(0x61d)+'align'+_0x583c38(0x347)+'ht;\x20c'+_0x583c38(0x333)+_0x583c38(0x662)+_0x583c38(0x4f2)+'238,2'+_0x583c38(0x16a)+_0x583c38(0x17c)+_0x583c38(0x52f)+_0x583c38(0x5cf)+'lor\x20{')+(_0x583c38(0x14a)+'h:\x2034'+'px;\x20h'+_0x583c38(0xff)+':\x2022p'+_0x583c38(0x528)+_0x583c38(0x370)+_0x583c38(0x145)+_0x583c38(0x168)+_0x583c38(0x11b)+'us:\x206'+_0x583c38(0x15b)+'ackgr'+_0x583c38(0x2f7)+_0x583c38(0x5a3)+';\x20pad'+_0x583c38(0x325)+_0x583c38(0x1d2)+_0x583c38(0x33c)+_0x583c38(0x18d)+_0x583c38(0x2a9)+'\x20}\x0a\x20\x20'+_0x583c38(0x169)+_0x583c38(0x4a4)+'\x20{\x20fo'+'nt-si'+'ze:\x201'+_0x583c38(0x2b9)+'color'+_0x583c38(0x3d8)+_0x583c38(0x579)+',238,'+'242,.'+_0x583c38(0x26e)+'addin'+_0x583c38(0x422)+_0x583c38(0x296)+_0x583c38(0x337)+'\x20.sk-'+'note.'+'err\x20{'+_0x583c38(0x15e)+'r:\x20#f'+_0x583c38(0x2d7)+_0x583c38(0x287)+'\x20\x20\x20.s'+'k-btn'+_0x583c38(0x364)+_0x583c38(0x670)+_0x583c38(0x41e)+'flex-'+'start'+_0x583c38(0x42a)+'der:\x20'+_0x583c38(0x5f5)+_0x583c38(0x4b7)+_0x583c38(0x39f)+_0x583c38(0x125)+'x;\x20pa'+_0x583c38(0x65e)+_0x583c38(0x452)+'\x2016px'+_0x583c38(0x3f2)+_0x583c38(0x646)+'nd:\x20#'+'ff6b9'+'d;\x20co'+'lor:\x20'+_0x583c38(0x4ca)+_0x583c38(0x413)+_0x583c38(0x288)+':\x2011.'+'5px;\x20'+_0x583c38(0x4ad)+_0x583c38(0x113)+_0x583c38(0x550)+'0;\x20cu'+_0x583c38(0x57a)+_0x583c38(0x4d0)+'ter;\x20'+_0x583c38(0x337)+'\x20.sk-'+_0x583c38(0x3de)+_0x583c38(0x1fb)+'{\x20fil'+'ter:\x20'+'brigh'+'tness'+_0x583c38(0x359)+';\x20}\x0a\x20'+'\x20\x20\x20');window[_0x583c38(0x2c6)+_0x583c38(0x478)+'stene'+'r'](_0x33c932[_0x583c38(0x368)],_0x10d841=>{var _0x509f49=_0x583c38;_0x10d841[_0x509f49(0x16c)]===_0x509f49(0x4e7)+'t'&&(_0x10d841[_0x509f49(0x5ad)+_0x509f49(0x56b)+_0x509f49(0x5c7)](),_0x33c932[_0x509f49(0x2ff)](_0x3ac7b6));},!![]);var _0x5a536b=document['creat'+'eElem'+'ent'](_0x33c932[_0x583c38(0x51d)]);_0x5a536b[_0x583c38(0x201)][_0x583c38(0x5fc)+'xt']=_0x583c38(0x382)+'ion:f'+_0x583c38(0x242)+_0x583c38(0x2c4)+_0x583c38(0x3e8)+_0x583c38(0x637)+_0x583c38(0x47a)+_0x583c38(0x45c)+'ex:21'+_0x583c38(0x576)+_0x583c38(0x3b0)+_0x583c38(0x33c)+':poin'+_0x583c38(0x306)+'idth:'+_0x583c38(0x2d9)+_0x583c38(0x2c8)+'t:26p'+_0x583c38(0x5cd)+_0x583c38(0x373)+'0.5;t'+_0x583c38(0x1ac)+_0x583c38(0x38f)+_0x583c38(0x17d)+'ty\x200.'+_0x583c38(0x214)+_0x583c38(0x3e6)+_0x583c38(0x3e7)+_0x583c38(0x5e5)+'to;fi'+_0x583c38(0x489)+_0x583c38(0x331)+'shado'+_0x583c38(0x4cd)+_0x583c38(0x282)+'rgba('+_0x583c38(0x67e)+_0x583c38(0x647)+_0x583c38(0x3e1)+'))',_0x5a536b['inner'+_0x583c38(0x5b8)]=_0x583c38(0x209)+'viewB'+_0x583c38(0x390)+_0x583c38(0x366)+_0x583c38(0x272)+_0x583c38(0x4a9)+_0x583c38(0x3ba)+_0x583c38(0x27a)+'c-1.5'+'-2.5-'+_0x583c38(0x3aa)+'-4-7.'+_0x583c38(0x33a)+'.5\x201.'+_0x583c38(0x19c)+'\x204-4.'+_0x583c38(0x36b)+'\x204\x204.'+_0x583c38(0x304)+_0x583c38(0x52d)+_0x583c38(0x611)+'.5z\x22\x20'+_0x583c38(0x124)+_0x583c38(0x24f)+_0x583c38(0x55b)+'oke=\x22'+_0x583c38(0x32b)+'9d\x22\x20s'+'troke'+_0x583c38(0x3ce)+_0x583c38(0x62b)+_0x583c38(0x4d2)+'ke-li'+_0x583c38(0x3e9)+_0x583c38(0x30d)+'nd\x22\x20s'+_0x583c38(0xe7)+'-line'+_0x583c38(0x4a1)+_0x583c38(0x53e)+'d\x22/><'+'circl'+_0x583c38(0x3ff)+_0x583c38(0x529)+'cy=\x221'+'0\x22\x20r='+_0x583c38(0x596)+_0x583c38(0x1fe)+_0x583c38(0x349)+_0x583c38(0x291)+'/></s'+_0x583c38(0x2e3),_0x5a536b['title']='Sakur'+_0x583c38(0x104)+'r',_0x5a536b['onmou'+'seent'+'er']=()=>_0x5a536b['style']['opaci'+'ty']='1',_0x5a536b[_0x583c38(0x46c)+_0x583c38(0x266)+'ve']=()=>_0x5a536b['style'][_0x583c38(0x17d)+'ty']=_0x583c38(0x515),_0x5a536b[_0x583c38(0x420)+'ck']=_0x30efc7=>{var _0x4aa63c=_0x583c38;_0x30efc7[_0x4aa63c(0x18e)+_0x4aa63c(0x1d8)+_0x4aa63c(0x381)](),_0x1b1577[_0x4aa63c(0x407)](_0x3ac7b6);},document[_0x583c38(0x5a0)]['appen'+_0x583c38(0x5c5)+'d'](_0x5a536b),_0x55fd1e(),requestAnimationFrame(_0x567bd6),console[_0x583c38(0x5d9)](_0x33c932[_0x583c38(0x581)],_0x3ef74d['uwmk']);});})()));function _0x1cf9(_0x2b7d7e,_0x41175d){_0x2b7d7e=_0x2b7d7e-(-0x4d+-0x9c1+0xae7*0x1);var _0x149d87=_0x280c();var _0x26e16f=_0x149d87[_0x2b7d7e];if(_0x1cf9['MjaDEP']===undefined){var _0x13fbcc=function(_0x253ea2){var _0xb0971d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2d27d0='',_0x120a8b='';for(var _0x3d9774=0x2*-0x991+-0x8c3*-0x4+-0xfea,_0x20f67d,_0xe06fde,_0x4def13=0xf9d+-0xa9f+-0x4fe;_0xe06fde=_0x253ea2['charAt'](_0x4def13++);~_0xe06fde&&(_0x20f67d=_0x3d9774%(0x804+0xebb+-0x16bb)?_0x20f67d*(0x26af+-0xffd+-0x1*0x1672)+_0xe06fde:_0xe06fde,_0x3d9774++%(0xeb3+0xb2*-0x2f+0x1*0x11ff))?_0x2d27d0+=String['fromCharCode'](0x1*0x270d+-0xe*0x23a+-0x6e2&_0x20f67d>>(-(0x133f+0x21e7+0x26*-0x166)*_0x3d9774&-0xfba+-0x2fe*0x5+0x1eb6)):-0x88d+0x12a*0xa+-0x1*0x317){_0xe06fde=_0xb0971d['indexOf'](_0xe06fde);}for(var _0x394961=0x666*0x4+0x116d*-0x2+-0x5*-0x1da,_0x69d5ec=_0x2d27d0['length'];_0x394961<_0x69d5ec;_0x394961++){_0x120a8b+='%'+('00'+_0x2d27d0['charCodeAt'](_0x394961)['toString'](-0x2334+0x1*-0x153d+0x3881))['slice'](-(0x14*-0xa+-0xc5b*-0x2+-0x17ec));}return decodeURIComponent(_0x120a8b);};_0x1cf9['nntsDE']=_0x13fbcc,_0x1cf9['IJjWVJ']={},_0x1cf9['MjaDEP']=!![];}var _0x36486b=_0x149d87[-0x1*-0xa6f+-0x119*-0x7+-0x121e],_0x5eea4f=_0x2b7d7e+_0x36486b,_0x3053ea=_0x1cf9['IJjWVJ'][_0x5eea4f];return!_0x3053ea?(_0x26e16f=_0x1cf9['nntsDE'](_0x26e16f),_0x1cf9['IJjWVJ'][_0x5eea4f]=_0x26e16f):_0x26e16f=_0x3053ea,_0x26e16f;}function _0x280c(){var _0x55253b=['ltqTnY4','oIaZmNa','BM93','AsXZyw4','ig5VigG','iNjVDw4','BNHpBui','mIaXmK0','nZaWia','u2TKCvy','lwXPBMu','twr2CfK','BI1PDgu','zIbTyxq','igH1CNq','u29NueK','te1c','s0fpExK','BePfyKy','BMDL','u2vSzwm','ys11Aq','DxjH','DdOGnZa','reXbuK8','qvrtENe','rMLLBgq','y29SB3i','lZ48l3m','Bxvgu0m','r1PAyui','ihSGlxC','vw5PDhK','DgfNtMe','iIbZDhi','zxi6igi','tgvMDca','y2TNCM8','Aw5Uzxi','odbWEcW','zIXZExm','ocWYndi','igfWCgW','oIbMBgu','EgvZige','mteUnxa','4Ocuig92zq','y0nJDLy','ideWChG','Bgf5ig8','BNrezwy','yuD4CwK','q3jVC3m','Fde4FdC','BsbJzw4','DMLHifm','zhrOoIa','EYaTD2u','ihSGzM8','yxrJAgu','BwLKzgW','ndC0odm','mdSGBwK','mdbTCY4','ysGYndy','CNnVCJO','z29KrgK','qvzYDK8','Dw5KoIa','DwTntMq','qNnuBei','mtf8nhW','vw5IuvO','tgLtzuG','zg93BG','ywziA0y','CYaNzNu','t0zgigi','CMLZAYa','oIaWoYa','DhKGjq','zguSihq','icbIywm','zMLLBgq','ihLVDxi','mJm3nJiXmtvOB0rAwey','ig1PBIG','igHLAwC','Bg93zxi','rfHWtLy','lxrPDgW','ChGGmdS','DZOGAw4','iJeUnsi','CZO6lxC','DMvYihS','C2HVD24','Ec1OzwK','BMu7ige','zYb7igm','EtOGmdS','BhvLCY4','ywiUywm','yM9KEq','tw92zw0','Fdj8mJm','ig5VBMu','ihbHzgq','CM9Rzxm','tgLZDa','x19tquS','ChLovwu','ChvZAa','ihDLyxa','ih0kica','u3rHDgu','ChjLDMu','vwD6thK','BYbWAwC','lc40ktS','lcbJywW','u3bLzwq','zw5Mrfu','Fdf8mhW','CMfUy2u','vvDnsYa','yMeOmJu','sfrnta','uMvZzxq','oYbWB2K','BI1JBg8','z24TAxq','BMf0Dxi','BwLUkdq','r0jywLa','D29YAYa','ig9Wywm','qxHTrMO','Fdr8nxW','BLfdruC','zenOAwW','y2fWtw8','yxvSDa','BgLJyxq','BguGAwy','z1jgBLu','DhKGDMe','wgTKAhC','EdTVCge','B2rL','C2STy28','zw50','CIGYmNa','yMfJA2q','qMXVy2S','yxK6igC','BwvZC2e','z3vLEeG','y2HPBgq','r09wuNe','Bg9N','ywWGBwu','ugf0Aa','ihWGC2G','ywXSig8','yM9Yzgu','Bgu7igy','BMC6idq','zg93kda','oI13zwi','zxjYB3i','CMXHEsa','Dhm6yxu','Ewvdsva','ug9WCvO','ug1RqLG','zwfWB24','lMXHC3q','AtmY','zZOGmta','y3rPB24','DKDVyvu','zuv4Ca','oIa5oxa','DtmY','ktSGBwe','oYbYAwC','Bgv4oIa','mdSGyM8','yxbWBgK','DhLqy3q','mxb4ida','AwvZlG','ywrKAw4','mNb4ide','y3nZvgu','Dhj1zq','ldeWnYW','EYbMB24','zgvZyW','zsb0CMe','C1rtqu8','y2vSzxi','B25PBNa','uKrksuq','DxLuzeq','AY12ywW','DgvTlxu','DxjDig0','zwXK','ifvxtuS','lwzPBhq','zciVpJW','BgfZDeu','zxjPDdS','lNnRlxm','ns00idC','CMvJDa','BgfIzwW','re1gBuy','BLbSyxq','Aw9U','EYbIB3G','BwvUDca','Fdn8mhW','ieDLDfy','Cg9PBNq','EKTuvNq','Dgv4Dc0','BMv2zxi','BJOGy28','y3PzDKG','BguGC3q','sMzxCei','uKrwBw8','zLnsC1e','DcbZDge','EYbIywm','Aw5Zzxq','z3LIywm','yxjJ','vgLJAW','Ad0ImIi','CgfYC2u','nNb4oYa','AhvlAfC','DgfIihS','lNnRlwy','qLfJvuK','oIbJzw4','CgXHEtO','zgL1CZO','EvnlCe0','oYbMBgu','AwDODdO','yM90Aca','qNHtC0S','EtOGzMW','DuPsrw8','kc4YmIW','ihnOB3q','DfvRuw4','t1nLvM0','ysGYntu','mhG2mda','ihbVC2K','ywrK','rLnfrwq','y2H0Cg0','A2DYB3u','mdCSmtu','Cc1ZAge','vuDQtuq','sNHtseG','z0vRBxC','FdeYFdy','AwrLihS','zwz0ic4','nMvLzJi','CvDVAK4','Bw92zvq','C2v0','AxrPyxq','DMLZDwe','B3i6iha','zhrOoJe','shHny2u','z2v0qxq','CYbnB3y','z0z2zNa','oIbPBMG','ywrPDxm','nJiWChG','zgrPBMC','tMTUrM4','ywXSihq','ic40oYa','ihjNyMe','B3jZige','t0Xnv3y','C2u6Ag8','Ahq6ida','CM55Cu0','Bw1jBeG','zgv2Awm','igDHCdO','Bw91C2u','igzSzxG','iNrYDwu','B3i6icm','Cgn1EMK','AwDUlxm','ihrOAxm','zxi7igC','C2STy3q','zgvYlxq','zMy2yJK','DgvYigm','nde5oYa','igHVB2S','BgLUzwm','oIa0ChG','BM9Uzq','DhjPyNu','icmYmJe','mJu1lde','C2STCMe','oYbMB24','mxb4ihi','vg90ywW','BgLKzxi','Bxm6igm','EdSGAgu','sg9VAYa','BhjYA0C','zcbZzwu','l3jHCgK','Dg9Y','AwDUyxq','idqGnc4','DhjVA2u','C3DPDgm','DhrPBMC','u2fMzsa','zMLSBcW','svzjEw4','CMvMAxG','zwCGzMe','uMvJB2K','zMLSBa','idHWEdS','CMuGkfm','igzVDxi','AxPLoIa','rMrOEwS','yw5Jzs4','Aw9F','nNb4ida','CIbNyw0','wfnRy1G','EvP4z1O','cIaGica','lwnHCMq','AguGDxm','zwLNAhq','sMXOv2W','s2LSBgu','wufHDvq','AwrLCJO','ysblB3u','C2v0uhi','vwTlz1i','zMLSzw4','BgLUzw4','Dg9Nz2W','yJLKoYa','C3rLCa','B3rOAw4','lcbZyw4','lwHLAwC','AxrLiee','rvrjDxu','qwrIBg8','zNrLCIa','D2vPz2G','C3bSAxq','B3vUzgu','mdSGFqO','uujQrvG','D2XvAeW','yw5LBc4','BIb7igy','lxjHzgK','ide0ChG','zZOGnNa','zxG6ide','zKzluge','Bg93oIa','vgfRzxm','oYb0CMe','rNbTs0S','zMLSBd0','CZOGoha','BgLNBG','lwL0zw0','AKPlruK','ALPWAuS','zNbZ','msWUmZy','B2LS','yw5Uywi','v2rOswy','AwvYAeW','CM9ZC2G','nZTWB2K','mcWWlJu','mcaWida','igjHy2S','qw9Vtxa','ywn0A0S','yw1L','mJuPoYa','C2STAgK','zgLZCgW','As1TB24','ufrbrgy','y2fWu2G','C3bHBG','y2HLy2S','mtu3lc4','oYb3Awq','zxjZihq','B2X1Dgu','lxnHBNm','ida7igi','CgfYzw4','zxiTzxy','mtfWEca','Bw4TDge','ihDPzhq','BM9tChi','BMq6ihq','AwXLzdO','sMXdyxy','AwrLCG','CM0GlJq','ntuSmJu','EgXlt2S','zNvSBhm','Fdn8mtu','qMziBwe','AgvZ','igvYCG','Ag9VA0C','ywnRz3i','Bw92zq','ChG7igi','CMvU','BI1ZDwi','ignVBg8','rMToCuq','zxjZ','DdOGnNa','rvfADhO','mgy1oYa','wxn5EKi','sNrVru4','AxPovKG','yMX1CG','B3jKzxi','icaUC2S','ndiSlJG','thHQAuq','y29Kzq','FdL8mti','ihnVig4','C3rYAw4','B3vUDc4','Aw46ida','kg92zxi','ihSGAgu','yM91BMq','igjVCMq','BI1TywK','A291CNm','C2fRDxi','DgnOoJO','ANvTCfa','r1rruLm','ktSGFqO','B3bHy2K','igLZigm','uMLNBeG','ywXPz24','yxjKlxq','oYbMAwW','ANrmzLG','ywqGEYa','Bcb7igq','DgG6idK','rhn1u1q','CNr1Cca','uMnWwvG','BMq6ihi','BgLUzvC','BwrLC2m','oIbWB2K','C3rVCfa','D2vIA2K','yMfYlxq','z1PQuwi','zsWGDhi','werdzLO','oIa2nta','CMvHzhK','Ahq6idi','BgvUz3q','lsbVDMu','B25SEsW','zxjZy3i','Auv3D3e','oc00lJu','BhKGkhi','CI1Yywq','DxniBe4','zvzHBhu','vvDmB1y','yxnZAwC','Dgv4Dei','yxrLkde','CMDIysG','Fdr8mta','wNHICva','Eca2ChG','DMfS','s2jhAgW','AguGzNi','CMfUC2K','lwnVBhm','u2vNB2u','igXLyxy','zw1LBNq','y2fUDMe','Ag9VA3m','zMLUza','i2zMyJm','s0LHzKW','C2vYDMu','ldiXlc4','oIbZDge','z3jHDMK','lc4WncK','A2vZig8','AxrPB24','yY0XlJu','tg9JywW','u2L6zq','idmYChG','lJuGms4','A3ndChm','Fdf8ma','ihSGzMW','B3nWywm','EdSGFqO','zgTPDa','yxrSEsa','qMfWu2S','DgjQCee','zgfTywC','C2L6ztO','ignHBgm','EtOGz3i','lc4YnsK','DgLKzvC','ihSGB3a','ida7igm','lNnRlw0','yxK6igy','CYbLyxm','Aw9UoMy','seDeBKW','CM9WywC','CJSGz2e','D2f3yNO','rvfuufe','mcWWlJG','lc4WnsK','BNrLCI0','mJm0mdi3nvnvrNLfza','BMCGzM8','ys1JAgu','yxKGB24','u2z5B28','z2v0','uw54zwK','C2HHzg8','igTVDxi','ChGGDwK','ieTLzxa','zgPJz1q','C2STBge','mJqSmtC','Bgf5oIa','zvj1BM4','ndSGBwe','zg93oIa','yxa6idG','AfPtrwy','zc10Axq','BwvKicG','Aw4GC2e','yxvSDca','zxzLBNq','B2vZig4','zwfK','zwn0Aw8','B3zLCIa','y29UDgu','Bg9Hzgu','igzPBgW','Aw4TD2K','ztSGyM8','C3r5Bgu','Eg51tMO','tNndq3e','rNr5thm','oYbHBgK','zuvSzw0','A2v5zg8','ihjLBg8','phn2zYa','A3mGyxi','rNHSD28','DhjHBxa','Dg9Wrgu','yxjPys0','icaGlM0','BML0igy','ihrYyw4','z2LMEq','B2f0Eq','mNm7Cg8','uK5Hvfy','DMfSDwu','lwjVEdS','ihWGrvi','y3KGB24','idqTnc4','mJqWiey','zuX0C1e','Bg9HzgK','D2HLCMu','ywDLigq','ic5ZAY0','mtySmc4','igvMzMu','nYWUmJG','wuTPs1i','DdOXmda','A291CI0','BgWGBwu','yxmGBM8','BfjHDgK','C2v0x3q','DMu7ihC','zwn0oIa','Dw5Kzwq','icaGzgK','q29TyMe','BenSr3C','ug9ZAxq','DNzzzhu','tKPmtuq','zwfKB3u','Aw5NoIa','mhWXnhW','nxW0','CfHTte8','zJmY','Bw4Ty2W','Awr0AdO','ztSGD2K','B2jxt1G','yM90Dg8','C3bLzwq','Bg9Hzca','C2STDMe','AxHLzdS','zxjSyxK','sw5PDgK','nxmGy3u','DgvZDa','igfSAwC','CMfUz2u','AwrHDgu','oIbUB24','t3zLCNC','CMqTDgK','mZyWnJyXnwDuwKzXBW','BhvTBJS','iM5VBMu','vu1qruO','ls1W','EMu6ide','B25Lige','BM8Gy2G','zw51','qM90Dg8','kdi1nsW','B3Hqt0G','ywjSzs0','zwjRAxq','Axr5oIa','lM1Ulxa','z2v0sxq','zhbHEhy','r29Kie0','ndHWEcK','y2SP','C3rLBMu','Bufntxe','v29irLy','zgL2','C2vSzwe','we1TEfu','BNqGAxq','zJzIowq','id0GzMW','AfHYtfi','Aw1Llca','ignLBNq','nsK7iha','z2H0oIa','uJOG','D2LKDgG','idi0iJ4','yNv0Dg8','thzYBva','u0flvvi','CIGTlxa','BNq6igm','mJj8mJe','qKrYzwm','mtiGmJe','C2STy2e','D3DYrgC','C2XPy2u','ywnPDhK','EgjjwvG','Dw5RBM8','lc4WocK','idrWEca','A2v5Dxa','oYbJB2W','zwfSDgG','DgGUsw4','oYb9cIa','lxnPEMu','DxrVoYa','vMfSDwu','lxbHCMu','y2uGB3y','ic8GDMe','vujOyu8','y2TLzd0','tM8Gu3a','nMi5zci','BhzqENi','lxnPEMK','BwuG','zs1PDgu','EcaWoYa','DKP4q2q','C21HBgW','B3C6igK','CMLUz3m','B2nRoYa','C2HVB3q','ksaWida','AgfAtfK','rNjHBwu','rMrXtvi','ndySmJm','v0fttsa','BNnWyxi','ohb4oYa','idmWChG','Bwf4','B2r5','Dc1Myw0','BNrLCJS','idK5osa','BgfJzs0','nJi0m3biyw1Wvq','y2HLCYa','uMfWAwq','AcaTidq','BMLUzW','B3rZlG','Dwn3q24','zg11Cvq','y3jVBgW','CMvUDem','tM8Gzw4','Aw9FmZa','ig1HCMC','mxb4oYa','kYbmtui','ndGZnJq','ywLSzwq','rLbtig8','tu9ersa','ihjLy28','Ec1KAxi','D2fYBG','D0nVBg8','ms4XlJa','Dg9WoJe','BxKGC2u','ywrKrxy','q25mq2q','AgvPz2G','y2fWDhu','DdOGmZq','Cefxsw8','yxbWzw4','CgfKzgK','u2v0r2e','zw15igm','BNqTC2K','B29Rihi','EdSGB3u','z2XcBxC','Cg9Uj3m','BMC6igi','A3nqB3m','zJDHotm','AhvTyIa','mJzWEdS','zMLSBfq','qsblt1u','zM9YBtO','DMLLD0i','Bw92zw0','oIbJDxi','suzOq1C','B3bLCNq','y3K9iJe','DMC+','rg51sue','x19ZywS','y29PBa','BNzTAvi','C3rYB2S','tw9Kzsa','CMvWzwe','zsb2ywW','mcWWlJC','EsaUmZu','qxnZzw0','Dxm6idi','lJjZoYa','zw50rwW','DgG6idG','AxrLBxm','zMXLEdS','ohG5mc0','q29SB3i','B3vUzdO','zg9JDw0','wuXXEvm','Bw9fEha','CI52mq','AxvZoIa','oIa1mcu','A2uTBgK','sw5WD3K','yYGXmda','tgvNAw8','ys5RB3u','Fdf8m3W','nwmWidm','zxrLy3q','DgvYo3C','ihSGyMe','idrWEdS','zw50CZO','v3Ltv3K','BNrLBNq','idaGnha','psjYB3u','zfzguue','uMvJDa','Fde5Fdi','mti2mLDYu1ziwG','y29SCZO','Fdf8nhW','ig9U','B2TLpsi','ChG7ih0','vKHYCMu','zxj5idi','CY1Zzxi','igjHBIa','zsbTAxm','ChG7cIa','ign1CNm','zw50kcm','t1nOB28','yMvS','t21Uuhu','BNrLEhq','Aw5WDxq','lJv6iIa','zgLUzZO','ltjWEdS','qxbWBhK','zgvmu1u','se51y2y','Be1VDgK','i2zMnMi','nsWYntu','CYbHBgW','lMLVig0','DgvTCZO','BI13Awq','zhjVCc0','jYb0Agu','B2XVCJO','vvDnsW','B3rLCwO','BMf2','FqOGica','qxvPteW','ifjLy28','nsaWlti','yMfJA2C','DxjZB3i','B3b0Aw8','yw5LBca','yxb0Dxi','BNnPDgK','ic5TBI0','Bwf0y2G','s2v5uW','ywqU','nJaWia','B250zw4','oIbYAwC','B3C6ida','psiJzMy','mJrrAMn5tKe','BIb0Agu','tuLtu0K','ALjpzKe','yw5ZzM8','C3zNiJ4','ocKPoYa','A2v5C3q','Bw4TC3u','zgvYlxi','CdOGmta','DfjTs2K','zNblrhm','yurHt2O','mNmSigi','kdeUmsK','AKnNs3i','Agf0igq','renQwMS','mdb2DZS','ie9olG','ywXSzwq','zxiTCMe','mtGGnIa','Ag9VA04','zwLUC3q','ihSGywW','Bw1VifS','idaGmJq','mJu1lc4','ENPOsfG','BNqGAge','C2fMzu0','nxm0idi','wfb1Egq','Dc1ZAxO','rKfjuKO','lMP1Bxa','CMrLCJO','C2v0qxq','u1bdrKm','y2L0EtO','uffwELa','B3nLihm','BM9szwm','AwDUlwK','BMnL','A0DTAee','Ag9xveS','Bg9JAW','DhbnCK8','CJSGzM8','Dg9WoIa','oWOGica','khjLBg8','yxrPB24','Cg9ZAxq','ihWGBw8','B3vUzdS','C2v0vhi','tg9Hzgu','yMHVCa','oIbKCM8','ywn0Axy','zvjHDgu','CxvLCNK','zKLoyLm','AuXLzgy','EfLVBhG','DgLVBJO','B3G9iJa','BgLUzvq','AgL2yMS','lxnLCMK','Dw5PDhK','mdi1ktS','BMC6ida','lxnOywq','B3uU','zvn0EwW','Acb7iha','y3jLzw4','B24Oks4','A3rNvvu','AgfPCG','CMfKAxu','yLLbq0u','rLbtigm','lwfWCgW','Eejpu1G','q1btihi','rhrbywm','B3n0zMK','DvrVrK0','t0HLywW','u3PoDhq','nc00lJu','CZOGyxu','DgvYoYa','DhLSzq','odaSmtK','mJqYlc4','nJq2o2m','zMyP','zw1ZoIa','zfH6t00','zsXTB24','DhjHBNm','re9nq28','B3nL','zMLSBfm','mtaXndm4ne9rq0DJBq','igq9iK0','B3qGBwe','AfnOywq','sMLkzuy','ihWGz2e','Bw4TAa','BMX5kq','uwflvKi','B3ntufq','B2LUDgu','CNjVCG','AwXnB3q','DgHprwe','yxbWzwe','ifTfwfa','Bg9Hzhm','v2vItw8','Bg9Y','ltiUns0','idaGmca','lxDPzhq','EvHyvLK','r3ryue0','t0P2txa','jsbUBY0','t3fyrxC','tMfTzq','zwf0CYa','iefmtca','ufmGDw4','oIbYz2i','iKLUDgu','ug55vhG','vvjbx0S','vurJBg8','nxWWFdq','yNrUoMG','twLZyW','ig1VBwu','nYWWlJC','y3jVC3m','rgnZD2C','DgvJDgK','oIaIiJS','Aw50zxi','lwv2zw4','mNb4o3i','BMvJyxa','BgvhB3C','wufTBgC','ChG7ihC','vhP5veq','CI1ZzwW','DgHYB3C','BhrO','igrLzMe','oYbIywm','zw4GDg8','z3Lrrve','sNvTCca','Bw4TBg8','s2v5C3q','BgXIyxi','BxLUCNm','B290zxi','ChbLBNm','ntaLktS','Dg87ih0','tKCG4Ocuia','zsbJEd0','B3zLCMy','q1b0u0q','yM5Uufy','ihDOAwm','sw5MAw4','mcuUifm','idnWEdS','rvzwEfO','zw51ihi','yxv0BY0','DgnOihq','rvbIuKy','B1jLy28','ntm0mtqXmfbrAxfIEa','oJiXndC','oIaZChG','mJu1ldi','CMeTA28','B2reAwu','igzVBNq','yuDpD1m','DMG7EI0','zw0TDwK','igzVCIa','A3nty2e','ldi1nsW','mJiSocW','mtqZmtCYnwTcDwjorG','AgvSza','Bg9NBY0','zwXMoIa','DdOGmtu','B25JBgK','C3rYB24','zZOGmNa','CMLKoYa','m3W0Fdi','zxi6oI0','lsbHihm','v2T5wgq','zw5HyMW','nsK7igi','oYbIB3i','zNrouue','zMXLEdO','ihrVCdO','zsb3zwe','ksaXmda','yMX5lum','z29K','yNrHww8','uLLWBuS','igP1Bxa','lwjHBNi','BI1SB2C','igf1Dg8','EdSGz2e','B246igW','DgLvBvO','C0Xtv1O','rvHqxq','Aw5KzxG','y29TyMe','ChG7iha','BsbVBIa','zxH0','oYbQDxm','C2STC3C','CMqTAgu','q3jmsvq','BcbKCMe','DML0Eq','ruvkz08','tfH6C3O','CMnwCvG','Dg1OBeO','BdOGAw4','mNb4oYa','DgG6ida','AcbVBMu','qvvSwum','A2vizwe','oIa4ChG','zcWGi2y','BNnLDca','iokaLcb0zq','zsGXnta','B3i6ihi','DhmGCgW','r09Tr0e','w3nHA3u','idjWEdS','EI1PBMq','mhb4oYa','AwXKigG','AxnPyMW','wNHSCuq','CNPzDLm','sxnhCM8','EdSGyMe','igvUDgK','A3nVEwS','yxnLBgK','C2STBwq','v01ligK','y2XQAui','nIa2Bde','mtbWEdS','B25TB3u','rgfTywC','CgD2EhG','AxnWBge','C2f2zq','i2zMzG','q2XVC2u','Ag9VA1a','DxjDifu','yw1Hz2u','EsbKzwy','B3zLCMW','zw50tgK','Ag9VA0m','mtjWEdS','y2XHC3m','rvjxzee','y2fSBhm','lYbhCMe','mcbOB28','CMvSEsa','z29KicG','CM91BMq','vgHLC2u','A2rYB3a','BMvHCI0','zhbY','DxjDigG','yKrVDxa','BhrLCJO','EKzMuuu','qM9JDNi','lKXVy2e','ntuSlJa','ugn0','icaGica','r0XVzNm','C2v0sxq','z2fTzuW','yxGOmJu','swnYBMS','uLjtvKe','zc5VBIa','ENrNsgu','BerPzsK','AxrJAa','zM9YBxm','zvrHA2u','DgXLCW','B2zIvxu','B3bLBG','q3fKCei','ChG7igG','AM9PBJ0','lIbuDxi','Be5tCfC','lw5VDgu','u3rwDK8','lxj1BM4','yuTVDxi','u0fgrsa','phbHDgG','zgvSzxq','vfzArum','ihSGy28','zM9UDc0','igjHBM4','BMn0Aw8','z2jHkdi','iL06oMe','iduWjtS','t1zbEhi','CMfWAwq','v2HUrwy','mtjWEca','CMrLCI0','rgfUz2u','q291BNq','ztOGmtm','B1zpwwG','BKXTDeO','ExvtCNm','vMLZDwe','AwvSza','igrHBwe','oYbKAxm','FdD8mty','t3bUvMW','C2STC2W','DhLWzq','C2STBwi','B29RCYa','oIaXms4','vffXAgu','i2zMzJS','qw12tvm','CMvZDg8','DYGWida','ChG7igy','lca1mcu','ihbVAw4','ig1PBM0','ihn0CM8','BgvMDa','zw50CW','Au5prge','vKHWEwm','yMvNAw4','D0jSDxi','zxqGmca','rxHW','u2fRDxi','r29itLi','y2HdB2W','Cgr3t1a','AY1OAw4','BdOGBM8','B250lxm','Bw4TDgK','CMfPC2u','Dxm6ide','y3jLyxq','swvvu2S','sw5Zzxi','zxnJ','qxbWBgK','B3vUDgu','vMnbDhy','AY1Jyxi','y2f0','oMHVC3q','uwDmvLm','y2XLyxi','z3jVDw4','kdi0nIW','BYb0Agu','DxDTAW','Bw4TBwe','Axb0kq','v2LWzsa','Aw5Mqw0','B2fKzwq','yKLbA2u','BMu7ihm','zwfKEs4','mhWZFdu','kYbtCge','mZuSmJq','CM9Szq','nsK7ih0','icaGlNm','CfLsBKm','lNnRlwm','DgHVzca','D1Pequm','qvnft2y','CYb3B24','ChbLyxi','mcWUntu','BtOGnNa','sw5ZDge','ALbPyuq','ywqGDg8','ndSGFqO','DMvTzw4','yNn2t1y','q1HpDNy','Dg9W','B2rLu3q','mc41','lM1Ulxq','u2HHCNa','lwLVxYO','icaUBw4','BM9UztS','idGWChG','nYWWlJm','uK1SqKq','igv4Axq','Dgv4Dem','lxrVCca','B24U','CZOGy2u','psjTBI0','CMvSB2e','zw50oYa','igjVEc0','EYbSzwy','EdSGyM8','iJeYiIa','B2X1Bw4','C2v0ida','Dcb7igq','ltiUnsa','mNb4ksa','icaGic4','nYWWlJG','DdOGoha','B05MExa','zvbPEgu','EYbJB2W','zw50zxi','A3zdt2C','tujpzxi','B2XVCJS'];_0x280c=function(){return _0x55253b;};return _0x280c();}
