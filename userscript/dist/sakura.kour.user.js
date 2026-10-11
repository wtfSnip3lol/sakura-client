// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.0.4
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
(function(_0x4aca4e,_0x330260){var _0x25ac4a=_0x719b,_0x52ae6b=_0x4aca4e();while(!![]){try{var _0x44819d=parseInt(_0x25ac4a(0x4dc))/(-0x10*-0x241+0x51*-0x2e+-0x1581)+-parseInt(_0x25ac4a(0x5fe))/(0x1*0xb26+0x201f+-0x2b43)*(parseInt(_0x25ac4a(0x331))/(-0x198a+0xce*0x28+-0x6a3))+-parseInt(_0x25ac4a(0x290))/(-0xd*0x2ab+-0x133*-0xb+0x2*0xac1)+parseInt(_0x25ac4a(0x27e))/(0x127d+0x32b*-0x1+0x1*-0xf4d)+parseInt(_0x25ac4a(0x29f))/(-0xcc2*-0x1+-0xb*-0x71+-0x1197)*(-parseInt(_0x25ac4a(0x3d6))/(-0x5b7+-0x3*0x25+-0x62d*-0x1))+-parseInt(_0x25ac4a(0x63f))/(0x137e+0x109b+-0x2411)+-parseInt(_0x25ac4a(0x267))/(-0x15d*0x4+0x5fd+-0x80)*(-parseInt(_0x25ac4a(0x2cb))/(0x21c6+-0x21c3+0x7*0x1));if(_0x44819d===_0x330260)break;else _0x52ae6b['push'](_0x52ae6b['shift']());}catch(_0x1572e3){_0x52ae6b['push'](_0x52ae6b['shift']());}}}(_0xe055,-0x1ae041+0x2909*-0x6e+0x3b437b),((()=>{'use strict';var _0x292783=_0x719b,_0x160913={'xWfkA':function(_0x39b741){return _0x39b741();},'YPQLk':'oLcIe','xcJgd':_0x292783(0x46e)+'wn','gXhvQ':function(_0x2f77f4,_0x5c9b09){return _0x2f77f4+_0x5c9b09;},'xwztL':function(_0x2af566,_0x3de9d6){return _0x2af566+_0x3de9d6;},'kQgZh':function(_0x2e8b81,_0x2195d6){return _0x2e8b81(_0x2195d6);},'SMKIp':function(_0x5668f2,_0x4ef21c){return _0x5668f2(_0x4ef21c);},'EfXBr':function(_0x4a9995,_0x325312){return _0x4a9995>_0x325312;},'nnAUw':function(_0x4f256c,_0x4d36f1){return _0x4f256c===_0x4d36f1;},'wFwTD':_0x292783(0x644)+_0x292783(0x23d),'KhpoR':'vCkRc','cEPlr':_0x292783(0x116),'kigMD':'fEpRU','TMeCD':function(_0x30c886,_0x40727c){return _0x30c886===_0x40727c;},'FImGX':'dnkoE','hFGQq':_0x292783(0x3a4),'CJKeI':function(_0x37f9f6,_0x4fc822,_0x48696c,_0x555858){return _0x37f9f6(_0x4fc822,_0x48696c,_0x555858);},'uNWQb':function(_0x2bddc0,_0x271323){return _0x2bddc0!==_0x271323;},'yvZbA':'[saku'+_0x292783(0x316)+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0x292783(0x141),'stwdF':'0|2|4'+'|3|1','ZYvNp':function(_0x283efe,_0x334c66){return _0x283efe!==_0x334c66;},'doiQJ':_0x292783(0x114),'cziRB':_0x292783(0x342)+_0x292783(0x1a0),'CblDH':function(_0x3f2da2,_0x579469,_0x4bb17c,_0x351b5b,_0x59456e){return _0x3f2da2(_0x579469,_0x4bb17c,_0x351b5b,_0x59456e);},'AYgoL':function(_0xd59098,_0x2968bc){return _0xd59098!==_0x2968bc;},'TZrDB':function(_0x2415ce,_0x17a128){return _0x2415ce/_0x17a128;},'YqaZM':function(_0xd994a4,_0x561c85){return _0xd994a4(_0x561c85);},'kjZKk':function(_0x3a5c59,_0x25ac7a){return _0x3a5c59!==_0x25ac7a;},'HMEuZ':function(_0x53047e,_0x1412bf){return _0x53047e===_0x1412bf;},'NTLzC':function(_0x5f330c,_0x56ffde){return _0x5f330c===_0x56ffde;},'PZYQK':'jxXcQ','IWWTS':_0x292783(0x63c),'hlMXW':function(_0x6d182,_0x4a93c3){return _0x6d182!==_0x4a93c3;},'UhrXg':_0x292783(0x27c),'WHtFG':function(_0x6945bf,_0x1fea54,_0x2ca938,_0x4cc0a1,_0x387e5d){return _0x6945bf(_0x1fea54,_0x2ca938,_0x4cc0a1,_0x387e5d);},'OmePY':'vkVaL','xKtPj':function(_0x590df2,_0x39fd11){return _0x590df2===_0x39fd11;},'unide':_0x292783(0x231),'LLvsu':_0x292783(0x179),'YyVqn':function(_0x1b8d35,_0x1021de,_0x597a15,_0x61e072,_0x6bcd22){return _0x1b8d35(_0x1021de,_0x597a15,_0x61e072,_0x6bcd22);},'JSWaC':'i32','ObCZx':function(_0x1dc614,_0x1a38f9){return _0x1dc614+_0x1a38f9;},'TaTOS':_0x292783(0x4bb),'oXbHR':_0x292783(0x4f7),'gKezG':function(_0x34e3d8,_0x425c30){return _0x34e3d8+_0x425c30;},'ihSVC':_0x292783(0x4bb)+'up','WHXys':'blur','CRXRt':_0x292783(0x5ca),'dXYvp':_0x292783(0x212)+_0x292783(0x2e1)+'e','OBFzP':function(_0x57b994,_0x3e3475){return _0x57b994===_0x3e3475;},'FthWs':_0x292783(0x122)+_0x292783(0x13f)+_0x292783(0x22b)+'d','UooBh':function(_0x3c0afa,_0x32d885){return _0x3c0afa!==_0x32d885;},'xVNHB':function(_0x56d10a,_0x587abd){return _0x56d10a*_0x587abd;},'lIJOr':function(_0x4e66bf,_0x2f3784){return _0x4e66bf*_0x2f3784;},'fTJYv':function(_0x54a81f,_0x3aeadf){return _0x54a81f*_0x3aeadf;},'UdHfT':function(_0x4ccd27,_0x362ff9){return _0x4ccd27===_0x362ff9;},'tlxwz':function(_0xd54ea9,_0x29bccf){return _0xd54ea9-_0x29bccf;},'QytlD':function(_0x2db3f1,_0x28f017){return _0x2db3f1+_0x28f017;},'GFgBW':function(_0x1d8428,_0x55e0ac){return _0x1d8428/_0x55e0ac;},'vOpHl':_0x292783(0x235),'BLnYF':function(_0x2f7c8b,_0x8d3fd2){return _0x2f7c8b+_0x8d3fd2;},'gEzrH':function(_0x36ef41,_0x38e2f5){return _0x36ef41+_0x38e2f5;},'RwDfz':function(_0x4fef0c,_0x2532eb,_0x6374e4,_0x52bbb5,_0x543c4d,_0x80dbfc,_0x2ece8a){return _0x4fef0c(_0x2532eb,_0x6374e4,_0x52bbb5,_0x543c4d,_0x80dbfc,_0x2ece8a);},'Lvfrs':_0x292783(0x19a),'xqvUY':function(_0x57beec,_0x5bbe69){return _0x57beec-_0x5bbe69;},'RdbLy':'LMB','kTTxa':_0x292783(0x4bb)+'1','CAlIQ':_0x292783(0x577),'zlaQe':function(_0x1c36c0,_0x1b2ad4){return _0x1c36c0+_0x1b2ad4;},'LPKJM':function(_0x3fef2a,_0x1e2539){return _0x3fef2a+_0x1e2539;},'rRkzB':'\x20CPS','obxNB':_0x292783(0x508),'PzUuD':function(_0x3ccbc8,_0x323751){return _0x3ccbc8+_0x323751;},'PCnpM':'600\x201'+_0x292783(0x310)+'i-mon'+'ospac'+_0x292783(0x287)+_0x292783(0x2e0)+'e','Kgaip':'left','hQFOh':'top','MVZjv':function(_0x4facd0,_0x4b27d4,_0x12683b){return _0x4facd0(_0x4b27d4,_0x12683b);},'DrpnF':function(_0x5ee441,_0x5ec607){return _0x5ee441(_0x5ec607);},'rnlpK':_0x292783(0x296)+'ng\x20fo'+_0x292783(0x4d4)+'e…','YUvrn':'rgba('+_0x292783(0x628)+'80,19'+_0x292783(0x22a)+')','IzABq':function(_0x91067c){return _0x91067c();},'Krdrz':function(_0x228d47,_0x1eaad4){return _0x228d47/_0x1eaad4;},'cHYHU':function(_0x33f214,_0x43a4a4){return _0x33f214-_0x43a4a4;},'GilAH':_0x292783(0x4bf)+'h','xYFWz':'FYsNh','osfqc':'mzXeC','tpcgu':_0x292783(0x3aa),'xPbbB':_0x292783(0x4eb),'wyEPq':_0x292783(0x49d),'UlYGz':function(_0x34d16b,_0x3f761e){return _0x34d16b===_0x3f761e;},'jTtUB':'sk-ca'+'rd','tMJob':'sk-ca'+_0x292783(0x4d5)+'ad','Lbbnj':_0x292783(0x345)+'g','xuCGC':function(_0x2a5ad8,_0x2ff200){return _0x2a5ad8!==_0x2ff200;},'ZYGLT':_0x292783(0x1c4),'lFtzG':'4|6|3'+_0x292783(0x365)+'7|1|0','Puzwi':function(_0x534a08,_0x8ff3d9){return _0x534a08===_0x8ff3d9;},'dUiJH':_0x292783(0x28d)+'t','ppuUY':function(_0x5dcc0d,_0x130879,_0x492ea1,_0x242c9f,_0x4fe3d5,_0x1b42c0){return _0x5dcc0d(_0x130879,_0x492ea1,_0x242c9f,_0x4fe3d5,_0x1b42c0);},'eBFMa':_0x292783(0x578)+_0x292783(0x2b3)+'ead\x20a'+_0x292783(0x249)+'xes\x20a'+'ccura'+_0x292783(0x4b3)+_0x292783(0x133)+_0x292783(0x168)+_0x292783(0x323)+'ery\x202'+'00ms.','UxeVd':function(_0x3dbf5e,_0xea1c1e,_0x367889,_0x545c9c,_0xaba73c,_0x32ba0f){return _0x3dbf5e(_0xea1c1e,_0x367889,_0x545c9c,_0xaba73c,_0x32ba0f);},'OPHOx':function(_0x2287c1,_0x2719a3){return _0x2287c1(_0x2719a3);},'LFUBx':_0x292783(0x3bb),'lvQeS':'czzBj','Flnyz':function(_0x348cb3,_0x573763){return _0x348cb3!==_0x573763;},'TJQVh':function(_0x1d34bd,_0x55c49c,_0x2532f0,_0x51285e,_0x589f7f,_0x43dfdf){return _0x1d34bd(_0x55c49c,_0x2532f0,_0x51285e,_0x589f7f,_0x43dfdf);},'AgrBl':function(_0x5eb4b1,_0x67b1a,_0x5e9add,_0x44b607){return _0x5eb4b1(_0x67b1a,_0x5e9add,_0x44b607);},'UHbJo':_0x292783(0x16f)+'%','UPEEd':'Gravi'+'ty\x20%','mswYe':_0x292783(0x445)+'l','ifawa':'Left\x20'+_0x292783(0x13c)+'e','EPrMQ':_0x292783(0x5aa)+_0x292783(0x3e1)+'y.','xlpDe':'FPS\x20c'+'ounte'+'r','KBDBS':function(_0xd2a5a9,_0x51e84f,_0xb8ab88){return _0xd2a5a9(_0x51e84f,_0xb8ab88);},'bsEQI':_0x292783(0x244),'TylhE':'Hides'+_0x292783(0x23a)+_0x292783(0x2ba)+_0x292783(0x3fd)+_0x292783(0x3e0)+'ots.','fFQLk':function(_0x471efc,_0x20bca9,_0x5f16d8,_0x10dbeb,_0x285da1,_0x30678a){return _0x471efc(_0x20bca9,_0x5f16d8,_0x10dbeb,_0x285da1,_0x30678a);},'bvnhM':'Safe\x20'+_0x292783(0x293)+_0x292783(0x3e8)+_0x292783(0x45d)+_0x292783(0x3bc),'DtZeP':_0x292783(0x3c9)+'es\x20on'+'\x20relo'+_0x292783(0x599)+_0x292783(0x16e)+'ches\x20'+_0x292783(0x469)+_0x292783(0x2cd)+'fe\x20mo'+'de,\x20t'+_0x292783(0x447)+_0x292783(0x3db)+_0x292783(0x2f2)+'ok-re'+_0x292783(0x302)+_0x292783(0x541)+_0x292783(0x5e5)+'\x20the\x20'+'hooks'+_0x292783(0x18c)+'ied\x20c'+_0x292783(0x4ad),'hVVxr':_0x292783(0x5a4)+'risk\x20'+_0x292783(0x4bf)+_0x292783(0x136),'EcXlu':function(_0x5cc2e0,_0x3198c0){return _0x5cc2e0(_0x3198c0);},'HScwx':'god\x20('+'OHeal'+_0x292783(0x5cc)+_0x292783(0x161)+'eTake'+'Healt'+'h)','vXLZf':'no\x20ch'+_0x292783(0x554)+_0x292783(0x11a)+_0x292783(0x2b0)+_0x292783(0x22c)+'is','ZCbMv':function(_0x141b14,_0xe949f7,_0x212813){return _0x141b14(_0xe949f7,_0x212813);},'YJNmj':function(_0x5eb727,_0x1f9a4a,_0x5448da){return _0x5eb727(_0x1f9a4a,_0x5448da);},'ujuZk':function(_0x32faa9,_0x12b6a6){return _0x32faa9+_0x12b6a6;},'bPYzd':function(_0x2d08d8,_0x375108){return _0x2d08d8/_0x375108;},'hkBKw':_0x292783(0x25b)+'r','zdbaR':'rgba('+'255,2'+_0x292783(0x134)+_0x292783(0x4d8)+')','iTpET':function(_0x222d3b,_0x2fcfed){return _0x222d3b*_0x2fcfed;},'oCHMa':function(_0x11ad81,_0x38789b){return _0x11ad81+_0x38789b;},'ndzDN':function(_0x4b69cc,_0x5bb98b){return _0x4b69cc*_0x5bb98b;},'aJDjp':_0x292783(0x444)+_0x292783(0x57f)+_0x292783(0x624)+'v1','MSbli':'SAFE\x20'+'MODE\x20'+_0x292783(0x2ef)+'rlay\x20'+'only,'+'\x20no\x20h'+_0x292783(0x5f2)+_0x292783(0x3f5)+_0x292783(0x2b7)+_0x292783(0x12d)+')','sdukw':_0x292783(0x5a0)+_0x292783(0xe4)+_0x292783(0x393)+_0x292783(0x1ba)+'ff)','KGNuy':_0x292783(0x495),'zKXtD':'\x20|\x20ER'+'R:\x20','UaVEf':_0x292783(0x39c)+'MISSI'+'NG\x20-\x20'+_0x292783(0x5fa)+_0x292783(0x285)+_0x292783(0x360)+_0x292783(0x3d9)+_0x292783(0x51e)+'he\x20us'+_0x292783(0x4b2)+'ipt)','rDbof':'5|2|0'+'|4|1|'+'3','KCoRX':'butto'+'n','jTtkr':'Statu'+'s','XUsXn':'calls'+_0x292783(0x39f)+'yEngi'+_0x292783(0x3a6)+_0x292783(0x563)+_0x292783(0x378)+'set_t'+_0x292783(0x3cf)+_0x292783(0x29d)+_0x292783(0x202),'REFqh':_0x292783(0x4a2)+'a\x20Kou'+_0x292783(0x42b),'RAAlo':_0x292783(0x5ee),'gZJDo':_0x292783(0x4a2)+_0x292783(0x297)+'r','HhrMk':_0x292783(0x2df)+'b','zUdvA':'kours'+_0x292783(0x5c6)+_0x292783(0x5ef)+_0x292783(0x2b5),'Xnvhh':function(_0x583fc2,_0x235b61){return _0x583fc2(_0x235b61);},'NplcJ':function(_0x37bc21,_0x22c5a6){return _0x37bc21===_0x22c5a6;},'UvFCn':'sakur'+_0x292783(0x178),'ZcGVJ':'safe','YEbrl':_0x292783(0x3fb)+'y','UKfRC':_0x292783(0x35b)+'wn','JTOhA':_0x292783(0x123)+_0x292783(0x223)+_0x292783(0x55b)+_0x292783(0x48e)+_0x292783(0x514)+'<path'+_0x292783(0x57d)+_0x292783(0x4e2)+'c-1.5'+_0x292783(0x14a)+_0x292783(0x5f3)+'-4-7.'+_0x292783(0x5a1)+'.5\x201.'+_0x292783(0x53d)+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x292783(0x60f)+_0x292783(0x611)+_0x292783(0x145)+'.5z\x22\x20'+_0x292783(0x647)+_0x292783(0x4f8)+_0x292783(0x498)+'oke=\x22'+_0x292783(0x5c7)+_0x292783(0x11e)+_0x292783(0x101)+_0x292783(0x411)+'h=\x222\x22'+_0x292783(0x1cb)+_0x292783(0x2da)+_0x292783(0x30b)+_0x292783(0x594)+_0x292783(0x210)+_0x292783(0x101)+_0x292783(0x346)+'join='+'\x22roun'+_0x292783(0x12c)+'circl'+_0x292783(0x11d)+_0x292783(0x216)+_0x292783(0x278)+_0x292783(0x527)+'\x221.5\x22'+'\x20fill'+_0x292783(0x186)+_0x292783(0x4d9)+'/></s'+_0x292783(0x153),'JFBSW':function(_0x1be684){return _0x1be684();},'MxaIA':'[saku'+'ra-ko'+'ur]\x20m'+'enu\x20r'+'eady.'+_0x292783(0x49a)+':','PDghX':'#ff6b'+'9d','aILsf':_0x292783(0x3e4)+'th','zIUHd':'Initi'+_0x292783(0x55d)+_0x292783(0x56b)+'lth','UuiYd':_0x292783(0x536)+'nPlat'+_0x292783(0x3ea)+_0x292783(0x4d6)+'tide.'+_0x292783(0x2c6)+_0x292783(0x28a),'kXqIe':'IsGro'+'unded','ROnWo':function(_0xb4ca71,_0xfbedd3,_0x2ecb78,_0x4dee8d,_0x341c41,_0x15706d,_0x1dca0b,_0x54f447){return _0xb4ca71(_0xfbedd3,_0x2ecb78,_0x4dee8d,_0x341c41,_0x15706d,_0x1dca0b,_0x54f447);},'SDLlS':_0x292783(0x4a2)+_0x292783(0x4e1),'qSpSp':_0x292783(0x50c)+_0x292783(0x316)+_0x292783(0x354)+_0x292783(0xff)+_0x292783(0x574)+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x292783(0x5c1)](location['hostn'+'ame']||''))return;if(window[_0x292783(0x48b)+_0x292783(0x19f)+_0x292783(0x28f)])return;window[_0x292783(0x48b)+_0x292783(0x19f)+_0x292783(0x28f)]=!![];var _0x529259=_0x160913[_0x292783(0x3a1)],_0x211604=_0x292783(0x2f1)+'c6',_0x516f06={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x596ed7={..._0x516f06};try{'CBMkN'===_0x292783(0x228)?(_0x39dccb[_0x292783(0x56a)+_0x292783(0x596)]=_0x56a6d3,_0x4aa62()):Object[_0x292783(0x203)+'n'](_0x596ed7,JSON['parse'](localStorage[_0x292783(0x2d2)+'em']('sakur'+'a.kou'+'r.v1')||'{}'));}catch(_0x345451){}function _0x2d259f(){var _0x2ea077=_0x292783;try{localStorage[_0x2ea077(0x33f)+'em']('sakur'+_0x2ea077(0x57f)+'r.v1',JSON[_0x2ea077(0x4f9)+_0x2ea077(0x586)](_0x596ed7));}catch(_0xeb39af){}}var _0x134b04={'uwmk':!!window[_0x292783(0xe7)+'WebMo'+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x596ed7['safeM'+_0x292783(0x472)],'lastError':''};try{window[_0x292783(0x221)+'entLi'+_0x292783(0x2bd)+'r'](_0x292783(0x567),_0x3201e8=>{var _0x2bbdb8=_0x292783;if(_0x160913[_0x2bbdb8(0x579)]!=='iQOot')try{var _0x2b7df2=_0x3201e8&&(_0x3201e8[_0x2bbdb8(0x33d)+'ge']||_0x3201e8['error']&&_0x3201e8[_0x2bbdb8(0x567)][_0x2bbdb8(0x33d)+'ge'])||_0x160913['xcJgd'];if(_0x3201e8&&_0x3201e8[_0x2bbdb8(0x40c)+'ame'])_0x2b7df2+=_0x160913[_0x2bbdb8(0x45f)](_0x160913[_0x2bbdb8(0x4c6)]('\x20@\x20'+_0x160913[_0x2bbdb8(0x401)](String,_0x3201e8[_0x2bbdb8(0x40c)+'ame'])['split']('/')['pop'](),':'),_0x3201e8[_0x2bbdb8(0x30f)+'o']||'?');_0x134b04[_0x2bbdb8(0x283)+_0x2bbdb8(0x5e4)]=_0x160913['SMKIp'](String,_0x2b7df2)[_0x2bbdb8(0x371)](-0x460+0x1*-0xe59+-0x1*-0x12b9,0x77c+0x9*0x24b+-0x1b7f);}catch(_0x2cfab5){}else _0x2c72c5['jumpP'+'ct']=_0x464fe4,_0x160913[_0x2bbdb8(0x5d7)](_0x24f627);});}catch(_0x4af054){}var _0x298a62=null,_0x3cfef3=null,_0x3032bf={},_0x578386=[],_0x42b702=[],_0x3ec8b8=new Map();function _0x24f604(_0x4a2eae,_0x2c18c9){var _0xb57624=_0x292783;if(!_0x2c18c9||_0x4a2eae[_0xb57624(0x60e)+_0xb57624(0x2c8)](_0x2c18c9)||_0x160913['EfXBr'](_0x4a2eae['lengt'+'h'],-0x6c2*0x4+0x17e1*0x1+0x367))return;_0x4a2eae[_0xb57624(0x1b5)](_0x2c18c9);}function _0x129510(_0x1fd38b,_0x5357b6,_0x4b6a6a,_0x1c902e){var _0x314269=_0x292783,_0x36e41d=0x485*-0x3+0x60c+0x281*0x3;try{_0x36e41d=_0x5357b6&&_0x5357b6[_0x314269(0x2dc)]?_0x5357b6['val']():-0x4*0x269+0xb1d+0x1d*-0xd;}catch(_0x19d709){}if(!_0x36e41d)return;_0x24f604(_0x1fd38b,_0x36e41d),_0x4b6a6a[_0x1c902e]=_0x1fd38b[_0x314269(0x1e6)+'h'];if(_0x160913[_0x314269(0xf2)](_0x1c902e,_0x160913[_0x314269(0x343)])&&_0x1fd38b[_0x314269(0x1e6)+'h']){var _0x34c114=_0x3032bf[_0x314269(0x2ff)+'ve'];if(_0x34c114)try{_0x34c114['enabl'+'ed']=![];}catch(_0x48b71a){}}}function _0x356018(_0x4a369b,_0x51f9c1,_0x8980a6){var _0x9fc0e6=_0x292783,_0x19e9bc={'Aijmd':'sk-no'+'te'},_0x16db10=_0x3ec8b8['get'](_0x4a369b);!_0x16db10&&(_0x160913[_0x9fc0e6(0x3ee)]===_0x160913['cEPlr']?(_0x53257d[_0x9fc0e6(0x37b)]=_0x4bf0a0,_0x575d37()):(_0x16db10=new Map(),_0x3ec8b8[_0x9fc0e6(0x553)](_0x4a369b,_0x16db10)));if(!_0x16db10['has'](_0x51f9c1))try{if(_0x160913[_0x9fc0e6(0x5f7)]!=='fEpRU'){var _0x3e2546=_0x2f280c[_0x9fc0e6(0x52c)+'eElem'+_0x9fc0e6(0x28a)](_0x9fc0e6(0x3aa));return _0x3e2546['class'+_0x9fc0e6(0x4db)]=_0x19e9bc['Aijmd']+(_0x103b8b?'\x20err':''),_0x3e2546['textC'+'onten'+'t']=_0x344ea0,_0x3e2546;}else{var _0x407b26=new _0x298a62(_0x4a369b)[_0x9fc0e6(0x421)+'ield'](_0x51f9c1,_0x8980a6);_0x16db10[_0x9fc0e6(0x553)](_0x51f9c1,_0x407b26!==undefined?_0x407b26[_0x9fc0e6(0x2dc)]():null);}}catch(_0x240abb){_0x16db10[_0x9fc0e6(0x553)](_0x51f9c1,null);}return _0x16db10[_0x9fc0e6(0x3f1)](_0x51f9c1);}function _0x27a6a2(_0x5c62b3,_0x42246f,_0x17e1db,_0x130fc0){var _0x77342b=_0x292783;try{if(_0x160913[_0x77342b(0x255)](_0x160913['FImGX'],_0x160913[_0x77342b(0x539)])){var _0x12705a=_0x96d456[_0x5e2da1];if(_0x12705a)try{_0x12705a[_0x77342b(0x351)+'ed']=!!_0xfa3c5;}catch(_0x2f365c){}}else new _0x298a62(_0x5c62b3)['write'+'Field'](_0x42246f,_0x17e1db,_0x130fc0);}catch(_0x2c6050){}}function _0x298ed1(_0x45e2f5,_0x214be1){var _0x211d7a=_0x292783;try{var _0x3a8f27=new _0x298a62(_0x45e2f5)[_0x211d7a(0x421)+'ield'](_0x214be1,'u32');return _0x3a8f27?_0x3a8f27[_0x211d7a(0x2dc)]():0xdbc+0x299*0x1+-0x1055;}catch(_0xd8f9a4){return-0x20a7+0x2*-0x10f1+0x4289;}}function _0xffa3ff(_0x68b38a,_0x15cba5,_0x4d47bd,_0x42e97a){var _0x2b0902=_0x292783;if(_0x160913['TMeCD'](_0x2b0902(0x557),_0x2b0902(0x27a))){if(!_0x5b7e09[_0x2b0902(0x416)+_0x2b0902(0x634)])_0x3c745f[_0x2b0902(0x314)+'e'](_0x2b0902(0x4bb)+(_0x36aa99[_0x2b0902(0x106)+'n']+(-0x1f54*-0x1+-0x79*-0x2f+-0x358a)));}else{var _0x316ec2=_0x160913['CJKeI'](_0x356018,_0x68b38a,_0x15cba5,_0x4d47bd);if(_0x316ec2!=null)_0x27a6a2(_0x68b38a,_0x15cba5,_0x4d47bd,_0x316ec2*_0x42e97a);}}function _0x599d84(_0x10a349,_0xa5aa6,_0x21fbe7,_0x5c2428,_0x47f637,_0x2fd8ce,_0x12b7cb){var _0x53a3f3=_0x292783;try{var _0x1dba7b=_0x3cfef3['hookP'+'refix']({'typeName':_0xa5aa6,'methodName':_0x21fbe7,'params':_0x5c2428,'returnType':_0x47f637},_0x2fd8ce);return _0x1dba7b['enabl'+'ed']=_0x160913['uNWQb'](_0x12b7cb,![]),_0x3032bf[_0x10a349]=_0x1dba7b,_0x134b04[_0x53a3f3(0x3ef)+_0x53a3f3(0x537)]++,_0x1dba7b;}catch(_0x436b84){return console[_0x53a3f3(0x3d5)](_0x160913[_0x53a3f3(0x2db)],_0x10a349,_0x436b84&&_0x436b84['messa'+'ge']),null;}}function _0x4558db(_0x2dbf9c,_0x3da487,_0x58474e,_0x40489f,_0x58c55e,_0x58d5cf,_0x4e3c4e){var _0x5e7b72=_0x292783;if(_0x5e7b72(0x504)!==_0x160913[_0x5e7b72(0x60d)])try{var _0x171961=_0x3cfef3[_0x5e7b72(0x2f5)+_0x5e7b72(0x18f)+'x']({'typeName':_0x3da487,'methodName':_0x58474e,'params':_0x40489f,'returnType':_0x58c55e},_0x58d5cf);return _0x171961['enabl'+'ed']=_0x160913['ZYvNp'](_0x4e3c4e,![]),_0x3032bf[_0x2dbf9c]=_0x171961,_0x134b04[_0x5e7b72(0x3ef)+_0x5e7b72(0x537)]++,_0x171961;}catch(_0x30de05){return console[_0x5e7b72(0x3d5)]('[saku'+_0x5e7b72(0x316)+_0x5e7b72(0x304)+'ook\x20r'+_0x5e7b72(0x632)+'iled:',_0x2dbf9c,_0x30de05&&_0x30de05['messa'+'ge']),null;}else{var _0x1e7319=_0x160913[_0x5e7b72(0x270)]['split']('|'),_0x1420eb=-0x723+0x5*-0x1+-0x394*-0x2;while(!![]){switch(_0x1e7319[_0x1420eb++]){case'0':var _0x5862e6=_0x36a292[_0x5e7b72(0x2f5)+'refix']({'typeName':_0x1a24ce,'methodName':_0x30c520,'params':_0x103e4c,'returnType':_0x14e6d1},_0x5bdef9);continue;case'1':return _0x5862e6;case'2':_0x5862e6[_0x5e7b72(0x351)+'ed']=_0x160913[_0x5e7b72(0x448)](_0x251578,![]);continue;case'3':_0xc3f42f['hooks'+_0x5e7b72(0x537)]++;continue;case'4':_0x5a3dd0[_0x544ce7]=_0x5862e6;continue;}break;}}}var _0x3f3c8c=()=>![];try{if(window[_0x292783(0xe7)+'WebMo'+_0x292783(0x492)]&&!_0x596ed7[_0x292783(0x350)+_0x292783(0x472)]){var _0x22eb20=(_0x292783(0x53b)+_0x292783(0x1e4)+_0x292783(0x595))['split']('|'),_0x5c4aa7=0xd27+0x8df+-0x1606;while(!![]){switch(_0x22eb20[_0x5c4aa7++]){case'0':if(_0x596ed7['hookN'+_0x292783(0x1e2)+'il'])_0x599d84(_0x292783(0x217)+_0x292783(0x183),'Legio'+'nPlat'+'forms'+_0x292783(0x4d6)+'tide.'+_0x292783(0x44b)+_0x292783(0x5c0)+'on',_0x292783(0x643),[_0x160913[_0x292783(0x27b)]],undefined,_0x3f3c8c,!!_0x596ed7[_0x292783(0x217)+_0x292783(0x183)]);continue;case'1':if(_0x596ed7['hookG'+_0x292783(0x1f0)])_0x599d84(_0x292783(0x219)+'e','OHeal'+'th',_0x292783(0x46b)+_0x292783(0x100),[_0x292783(0x2dd),'i32','i32','i32','i32'],undefined,_0x3f3c8c,!!_0x596ed7[_0x292783(0x35d)]);continue;case'2':if(_0x596ed7[_0x292783(0x2a8)+'od'])_0x599d84(_0x292783(0x35d),_0x160913['aILsf'],_0x160913[_0x292783(0x317)],[_0x292783(0x2dd),_0x292783(0x2dd)],undefined,_0x3f3c8c,!!_0x596ed7['god']);continue;case'3':if(_0x596ed7['hookC'+_0x292783(0x552)+'e'])_0x4558db(_0x292783(0x2ff)+'ve',_0x160913[_0x292783(0x515)],_0x160913[_0x292783(0x26a)],[_0x292783(0x2dd)],_0x160913[_0x292783(0x27b)],(_0x500a3b,_0x548571)=>{var _0x37670b=_0x292783;_0x160913['CblDH'](_0x129510,_0x578386,_0x548571,_0x134b04,_0x160913[_0x37670b(0x343)]);},!![]);continue;case'4':_0x298a62=window[_0x292783(0xe7)+_0x292783(0x3af)+_0x292783(0x492)][_0x292783(0x2eb)+_0x292783(0x2be)+'er'];continue;case'5':if(_0x596ed7['hookC'+'aptur'+'e'])_0x160913[_0x292783(0x4e4)](_0x4558db,_0x292783(0x3d1)+_0x292783(0x218),_0x292783(0x5ec)+_0x292783(0x4b4),_0x292783(0xf8)+'meRun'+'ning',[_0x160913['JSWaC'],_0x160913['JSWaC']],undefined,(_0x387c0d,_0x5247a7)=>{var _0x4ecb0e=_0x292783;_0x129510(_0x42b702,_0x5247a7,_0x134b04,_0x160913[_0x4ecb0e(0x129)]);},!![]);continue;case'6':_0x3cfef3=window[_0x292783(0xe7)+_0x292783(0x3af)+_0x292783(0x492)]['Runti'+'me']['creat'+_0x292783(0x5f0)+'in']({'name':_0x160913['SDLlS'],'version':'1.1.0','referencedAssemblies':['Assem'+_0x292783(0x56f)+_0x292783(0x5df)+'.dll']});continue;}break;}}}catch(_0x32a53d){console['warn'](_0x160913[_0x292783(0x512)],_0x32a53d&&_0x32a53d['messa'+'ge']);}function _0x21630a(_0x25fdc8,_0x548c8d){var _0x376b2d=_0x292783,_0x12b530=_0x3032bf[_0x25fdc8];if(_0x12b530)try{_0x160913['AYgoL']('tbwkS',_0x376b2d(0x21d))?_0x12b530[_0x376b2d(0x351)+'ed']=!!_0x548c8d:_0x565ef3(!_0xffcbe1);}catch(_0xafb5dd){}}setInterval(()=>{var _0x5882cf=_0x292783,_0x2fde93={'Akvrz':function(_0x25a0e7,_0x46c0f6){return _0x25a0e7-_0x46c0f6;},'svvSS':function(_0x326dc5,_0x1abd30){return _0x326dc5/_0x1abd30;},'wRLCf':function(_0x5cf874){var _0x2b9ec7=_0x719b;return _0x160913[_0x2b9ec7(0x5d7)](_0x5cf874);},'AsYmm':function(_0x27b4c5,_0x5886f3){return _0x27b4c5(_0x5886f3);},'BjGnV':function(_0x4e628e,_0x22c2f3){return _0x160913['SMKIp'](_0x4e628e,_0x22c2f3);}};if(!_0x298a62||!window['unity'+_0x5882cf(0x230)+'nce'])return;var _0xe1cdc0=_0x160913[_0x5882cf(0x4e0)](_0x160913[_0x5882cf(0x497)](Number,_0x596ed7['speed'+_0x5882cf(0x17a)])||0x1*0x19a3+0x1d18+-0x3*0x121d,0x11a6+-0x1*0x209+-0xf39),_0x4fa604=(Number(_0x596ed7['jumpP'+'ct'])||0x1a4d+0x2*0xbf+-0x1b67)/(0xd4*-0x1b+0x3*0x31c+0xd6c),_0x34d0a9=(Number(_0x596ed7[_0x5882cf(0x4f4)+'tyPct'])||-0x52f+0x1*0x890+-0xf*0x33)/(-0x2*-0xd28+0x1474+-0x2e60),_0x486a10=Math['max'](0xec0+0x9*-0x1ff+-0x8*-0x67,Number(_0x596ed7[_0x5882cf(0x4a8)+'eValu'+'e'])||-0x9b6+-0xd8d+0x17d9),_0x3f48cf=_0x160913['uNWQb'](_0xe1cdc0,-0x1e88+0xa1a+0x146f)||_0x160913['ZYvNp'](_0x4fa604,0x198e+0x1880+-0x320d)||_0x160913[_0x5882cf(0x181)](_0x34d0a9,0xdaa+0x10ce+-0x1e77)||_0x596ed7['bhop'],_0x42261b=_0x596ed7[_0x5882cf(0x1b4)+'ead']||_0x596ed7['damag'+_0x5882cf(0x626)]||_0x596ed7[_0x5882cf(0x56a)+'moExp']||_0x596ed7[_0x5882cf(0x2aa)+'Exp'];if(!_0x3f48cf&&!_0x42261b)return;try{if(_0x160913['HMEuZ']('qYsrg',_0x5882cf(0x606))){_0x44b6b5(_0x2caf88),_0xe3e21a++;var _0x18f941=_0x190279[_0x5882cf(0x502)]();_0x2fde93['Akvrz'](_0x18f941,_0xd3cc42)>=-0x24f7+-0x4*0x2+0x3b*0xa9&&(_0x594ee4=_0xcf204e['round'](_0x2fde93['svvSS'](_0x4e3471*(0xedb+0x423+-0xf16),_0x18f941-_0x4c3d83)),_0x4ed3e=0x1d3*0xc+-0x2412+0x2*0x717,_0x31a4dc=_0x18f941);_0x2fde93[_0x5882cf(0x138)](_0x30e0a7),_0x318354(),_0x386b35[_0x5882cf(0x2fd)+'Rect'](-0x9f4*-0x2+-0x1013+-0x3d5,-0x54b*-0x2+0x22df+0x1af*-0x1b,_0x15faf2['w'],_0x1c6bbf['h']);var _0x4cb0f1={'left':0x0,'top':0x0,'right':_0x47c3d7['w'],'bottom':_0x478408['h'],'width':_0x1167f1['w'],'height':_0x2fda02['h']};if(_0x1210f4['cross'+'hair'])_0x2fde93[_0x5882cf(0x37f)](_0x360220,_0x4cb0f1);if(_0x2db25d[_0x5882cf(0x191)+_0x5882cf(0x3e5)])_0x2fde93['BjGnV'](_0x456c7b,_0x4cb0f1);_0x3f2c89(_0x4cb0f1);}else for(var _0x356aa7=-0x7*0x170+0x1c43+-0x1233;_0x356aa7<_0x578386[_0x5882cf(0x1e6)+'h'];_0x356aa7++){if(_0x160913[_0x5882cf(0x32b)](_0x160913[_0x5882cf(0x5cd)],_0x160913[_0x5882cf(0x2f9)]))new _0x20a464(_0x47ec86)[_0x5882cf(0x1bc)+'Field'](_0x56efe0,_0x3a883c,_0xf4ef01);else{var _0x3f1c4f=_0x578386[_0x356aa7];if(!_0x3f1c4f)continue;if(_0x160913[_0x5882cf(0x518)](_0xe1cdc0,0xd0f*-0x1+-0x1246+0x1f56)){var _0x543947=(_0x5882cf(0x45c)+_0x5882cf(0x1e4)+'2')['split']('|'),_0x52e9e2=-0x1ae2+0x375+0x176d;while(!![]){switch(_0x543947[_0x52e9e2++]){case'0':_0x160913[_0x5882cf(0x4f2)](_0xffa3ff,_0x3f1c4f,0x91b+0x1ee5+-0x94*0x45,'f32',_0xe1cdc0);continue;case'1':_0xffa3ff(_0x3f1c4f,-0x370+0x26c0+-0x8c7*0x4,'f32',_0xe1cdc0);continue;case'2':_0xffa3ff(_0x3f1c4f,-0x1*0x2527+0x130*-0x13+0x3bd7,_0x160913[_0x5882cf(0x5bb)],_0xe1cdc0);continue;case'3':_0x160913[_0x5882cf(0x4f2)](_0xffa3ff,_0x3f1c4f,0x1*-0x2a9+-0x12ee+-0x15c7*-0x1,_0x5882cf(0x27c),_0xe1cdc0);continue;case'4':_0x160913['WHtFG'](_0xffa3ff,_0x3f1c4f,0x1614+-0x1ad9+0x4ed,'f32',_0xe1cdc0);continue;case'5':_0xffa3ff(_0x3f1c4f,-0x26fa+0x17f6*0x1+0x12*0xd8,_0x160913[_0x5882cf(0x5bb)],_0xe1cdc0);continue;}break;}}if(_0x4fa604!==-0x154f+-0x1*-0x16ea+0xa*-0x29)_0xffa3ff(_0x3f1c4f,0x2ad*-0x6+-0x10c3+-0xb0b*-0x3,_0x5882cf(0x27c),_0x4fa604);if(_0x160913[_0x5882cf(0x448)](_0x34d0a9,0x8*0x224+0x3*-0x19b+-0xc4e)){if(_0x5882cf(0x1d0)===_0x160913[_0x5882cf(0x1ee)])_0xffa3ff(_0x3f1c4f,-0x2f6+0x6f1*-0x3+-0x1*-0x1811,_0x5882cf(0x27c),_0x34d0a9),_0xffa3ff(_0x3f1c4f,0xb2*0x1f+-0x3*0xc19+0xf09,'f32',_0x34d0a9);else{if(_0x561202[_0x39f6cf]['id']&&_0x3bd047[_0x144aa7]['id'][_0x5882cf(0x2ed)+'Of'](_0x5882cf(0x5e2)+_0x5882cf(0x489))===0x179b+0x90d+-0x20a8)_0x3a058e[_0x40a413]['style']['displ'+'ay']='none';}}if(_0x596ed7[_0x5882cf(0x41a)])_0x27a6a2(_0x3f1c4f,-0x1df*-0x3+0xa3b+-0xf3c,_0x160913['UhrXg'],-(-0x5*0x474+0x1*0xa2d+0xffe));}}}catch(_0x46a99d){}try{if(_0x160913['xKtPj'](_0x5882cf(0x152),_0x160913[_0x5882cf(0x1d4)]))_0xfd62b4[_0x5882cf(0x273)+'le']=_0x4fc475,_0xbbc662();else for(var _0x38ff26=-0x1d2e+-0x235a+0x2*0x2044;_0x38ff26<_0x42b702[_0x5882cf(0x1e6)+'h'];_0x38ff26++){var _0x228b35=_0x298ed1(_0x42b702[_0x38ff26],0x1*-0x24ed+0xda7+0x177e);if(!_0x228b35)continue;_0x596ed7['damag'+'eExp']&&(_0x27a6a2(_0x228b35,0x254c+-0x1*-0x3+-0x2503,'i32',_0x486a10),_0x160913['CblDH'](_0x27a6a2,_0x228b35,0x18c3+0x12db+-0x2b4a,_0x5882cf(0x2dd),_0x486a10));_0x596ed7['noSpr'+_0x5882cf(0x391)]&&(_0x160913['xKtPj'](_0x160913[_0x5882cf(0x291)],_0x160913['LLvsu'])?(_0x160913['WHtFG'](_0x27a6a2,_0x228b35,-0x66e*0x3+-0x569+0x193b,'f32',0x59d*0x2+-0x2*-0xf79+0xa8b*-0x4),_0x160913['YyVqn'](_0x27a6a2,_0x228b35,0x1c8b+-0x239*0x6+0x1a5*-0x9,'f32',0x19c1+-0x1*-0x2665+-0x4025)):_0x321255['setIt'+'em'](_0x5882cf(0x444)+'a.kou'+'r.ui.'+'v1',_0x59ece4['strin'+_0x5882cf(0x586)](_0x41f754)));if(_0x596ed7[_0x5882cf(0x56a)+_0x5882cf(0x596)])_0x160913[_0x5882cf(0x4f2)](_0x27a6a2,_0x228b35,0x2586+0x3*-0x796+-0x8*0x1cd,_0x160913['JSWaC'],-0x773*0x1+0xa4*-0xd+0x16*0xe5);_0x596ed7[_0x5882cf(0x2aa)+_0x5882cf(0x3cd)]&&(_0xffa3ff(_0x228b35,0x221*0x4+-0x2*0x110d+-0x53a*-0x5,_0x160913['UhrXg'],-0x1eee+-0x654+-0x2542*-0x1+0.1),_0x27a6a2(_0x228b35,-0x1429*0x1+-0x175+0x15fe,_0x5882cf(0x27c),0x9*0x1fa+0xa53+-0x1c1d+0.1));}}catch(_0x4cbd21){}},-0x2de*0x7+-0x844+0x1d1e),_0x160913['ZCbMv'](setInterval,()=>{var _0x4bf2ce=_0x292783;_0x134b04[_0x4bf2ce(0x115)+_0x4bf2ce(0x268)]=!!window['unity'+_0x4bf2ce(0x230)+'nce'];try{var _0x424a9a=0xf18*0x1+-0xf*-0x1ab+-0x281d;for(var _0x588e70 in _0x3032bf){if(_0x3032bf[_0x588e70]&&_0x3032bf[_0x588e70][_0x4bf2ce(0x4fc)+'ed'])_0x424a9a++;}_0x134b04['hooks'+'Ok']=_0x424a9a;}catch(_0x3f6f5f){}},0xb93*-0x1+-0xd*0x3a+0x126d*0x1);var _0x8fd090=new Set(),_0x837bb={0x1:[],0x3:[]},_0x402651=![];function _0x1ea07b(_0x12839e){var _0x5d0d0f=_0x292783;_0x8fd090[_0x5d0d0f(0x172)](_0x12839e['code']);}function _0x181f31(_0x4bd707){var _0x4abcf2=_0x292783;_0x8fd090['delet'+'e'](_0x4bd707[_0x4abcf2(0x17e)]);}function _0x111add(_0x11a981){var _0x45980a=_0x292783,_0x5d9e77={'EEjRE':_0x45980a(0x44e)};if(_0x11a981[_0x45980a(0x416)+_0x45980a(0x634)])return;_0x8fd090[_0x45980a(0x172)](_0x160913[_0x45980a(0x609)](_0x160913[_0x45980a(0x2d4)],_0x11a981[_0x45980a(0x106)+'n']+(0x47f*-0x5+0x33d*-0x1+-0x3*-0x893)));var _0x490fc7=_0x837bb[_0x11a981[_0x45980a(0x106)+'n']+(-0x126d*-0x1+0xb20*-0x3+0xb*0x15c)];if(_0x490fc7){if(_0x160913[_0x45980a(0x2bc)](_0x160913['oXbHR'],'XaEMZ')){var _0x5f0168=('4|1|2'+'|3|5|'+'0')[_0x45980a(0x5d8)]('|'),_0x2d780e=-0x1745+0xf*-0x5f+0x1cd6;while(!![]){switch(_0x5f0168[_0x2d780e++]){case'0':return _0x33c78a;case'1':_0x33c78a[_0x45980a(0x1a1)]=_0x5d9e77[_0x45980a(0x5f6)];continue;case'2':_0x33c78a['class'+_0x45980a(0x4db)]='sk-co'+_0x45980a(0x422);continue;case'3':_0x33c78a[_0x45980a(0x50e)]=/^#[0-9a-f]{6}$/i[_0x45980a(0x5c1)](_0x132b80)?_0x3c2e38:_0x45980a(0x5c7)+'9d';continue;case'4':var _0x33c78a=_0x17b3b0[_0x45980a(0x52c)+_0x45980a(0x1ab)+_0x45980a(0x28a)]('input');continue;case'5':_0x33c78a[_0x45980a(0x617)+'ut']=()=>_0x3062c4(_0x33c78a['value']);continue;}break;}}else{_0x490fc7[_0x45980a(0x1b5)](performance[_0x45980a(0x502)]());if(_0x490fc7[_0x45980a(0x1e6)+'h']>-0x238+-0x6b*-0x8+-0xf8*0x1)_0x490fc7[_0x45980a(0x3f0)]();}}}function _0x31383c(_0xe47370){var _0x594e95=_0x292783;if(!_0xe47370[_0x594e95(0x416)+_0x594e95(0x634)])_0x8fd090[_0x594e95(0x314)+'e'](_0x160913[_0x594e95(0x23f)](_0x160913[_0x594e95(0x2d4)],_0x160913[_0x594e95(0x609)](_0xe47370['butto'+'n'],0x256e+-0x11*0x18a+0x3c1*-0x3)));}function _0x54719b(){var _0x10fb41=_0x292783;_0x10fb41(0x4d2)===_0x10fb41(0x2ee)?(_0x3893c0['chSiz'+'e']=_0x50f4c3,_0x54f55d()):_0x8fd090['clear']();}function _0x5fd30a(){var _0x2f1d6a=_0x292783,_0x3af3d8=(_0x2f1d6a(0x120)+'|4|0|'+'2|6')[_0x2f1d6a(0x5d8)]('|'),_0x22cfbc=-0x1*0x26ad+0x8e*0x33+0xa63*0x1;while(!![]){switch(_0x3af3d8[_0x22cfbc++]){case'0':window[_0x2f1d6a(0x221)+'entLi'+'stene'+'r'](_0x2f1d6a(0x4bb)+_0x2f1d6a(0x51a),_0x111add,!![]);continue;case'1':_0x402651=!![];continue;case'2':window[_0x2f1d6a(0x221)+_0x2f1d6a(0x591)+_0x2f1d6a(0x2bd)+'r'](_0x160913['ihSVC'],_0x31383c,!![]);continue;case'3':window['addEv'+_0x2f1d6a(0x591)+_0x2f1d6a(0x2bd)+'r']('keydo'+'wn',_0x1ea07b,!![]);continue;case'4':window[_0x2f1d6a(0x221)+'entLi'+_0x2f1d6a(0x2bd)+'r'](_0x2f1d6a(0x18e),_0x181f31,!![]);continue;case'5':if(_0x402651)return;continue;case'6':window['addEv'+_0x2f1d6a(0x591)+'stene'+'r'](_0x160913[_0x2f1d6a(0x135)],_0x54719b);continue;}break;}}function _0x3ff157(_0x5e444c){var _0x410fbc=_0x292783,_0x30e1c0=_0x837bb[_0x5e444c]||[],_0x433b94=performance['now']();while(_0x30e1c0['lengt'+'h']&&_0x433b94-_0x30e1c0[0x1*-0x21ee+0xe9f+-0x1*-0x134f]>-0x6d*0x59+0x713*0x1+-0x115d*-0x2)_0x30e1c0[_0x410fbc(0x3f0)]();return _0x30e1c0[_0x410fbc(0x1e6)+'h'];}function _0x2582a6(_0xe79c38){var _0x4b93f1=_0x292783;if(_0x4b93f1(0x479)!==_0x160913['CRXRt']){if(document['body']&&(_0x160913['NTLzC'](document[_0x4b93f1(0x3de)+_0x4b93f1(0x5e1)],_0x160913[_0x4b93f1(0x4b6)])||_0x160913['OBFzP'](document[_0x4b93f1(0x3de)+'State'],'compl'+'ete')))_0xe79c38();else document[_0x4b93f1(0x221)+'entLi'+'stene'+'r'](_0x160913['FthWs'],_0xe79c38,{'once':!![]});}else _0x253f3e[_0x4b93f1(0x351)+'ed']=![];}_0x2582a6(()=>{var _0x52522e=_0x292783,_0x174548={'mjulo':'kour-'+_0x52522e(0x372)+_0x52522e(0x3ca)+'paren'+'t','tDdze':function(_0x50b9b2,_0x1435e2){return _0x50b9b2===_0x1435e2;},'fjWKH':_0x52522e(0x195),'XNRAE':_0x52522e(0x26c)+_0x52522e(0x500)+'|11|1'+_0x52522e(0x36c)+_0x52522e(0x2f3)+_0x52522e(0x131)+'14|2|'+_0x52522e(0x397),'BbRtq':function(_0x1b0135,_0x5e3e97){return _0x1b0135+_0x5e3e97;},'hrjfI':function(_0x3c86ea,_0x4e5598){var _0x2f4858=_0x52522e;return _0x160913[_0x2f4858(0x1bb)](_0x3c86ea,_0x4e5598);},'ZLzod':function(_0x5b9b2e,_0x5b2c71){return _0x5b9b2e*_0x5b2c71;},'rngRf':function(_0x319c0b,_0xdec1a5){return _0x160913['PzUuD'](_0x319c0b,_0xdec1a5);},'tbHXp':_0x52522e(0x568),'pdHKe':_0x52522e(0x1af)+'-sans'+'-seri'+'f,sys'+'tem-u'+'i,san'+'s-ser'+'if','IxQxT':function(_0x16236e,_0x1dbf09){return _0x160913['lIJOr'](_0x16236e,_0x1dbf09);},'yiLVO':'rgba('+_0x52522e(0x628)+_0x52522e(0x2a3)+'7,0.8'+'5)','CHDYn':_0x52522e(0x31a)+_0x52522e(0x222)+_0x52522e(0x134)+'0,0.5'+'5)','CMkfX':function(_0x1167ee,_0x5e2899){var _0x34d093=_0x52522e;return _0x160913[_0x34d093(0x629)](_0x1167ee,_0x5e2899);},'dSdLx':_0x160913['hkBKw'],'qfVjd':_0x160913[_0x52522e(0x325)],'ubdCo':function(_0x3455ca,_0x29e059){return _0x3455ca/_0x29e059;},'IEoRh':function(_0x58e10a,_0x43b123){return _0x160913['iTpET'](_0x58e10a,_0x43b123);},'eZtjO':function(_0xed04c9,_0x27140d){return _0xed04c9-_0x27140d;},'MitdH':function(_0x755486,_0x21a80b){return _0x755486+_0x21a80b;},'rtNEr':function(_0x36d352,_0x3a080d){return _0x160913['oCHMa'](_0x36d352,_0x3a080d);},'XUpBI':function(_0x1f2754,_0x101dfc){return _0x160913['ndzDN'](_0x1f2754,_0x101dfc);},'MFciv':function(_0x128a55,_0x183e4d){return _0x128a55||_0x183e4d;},'YjUHo':_0x52522e(0x31a)+'255,2'+_0x52522e(0x134)+_0x52522e(0x2ac)+'5)','CbAzu':_0x160913['aJDjp'],'weCeA':'true','ZgwvW':function(_0x202b69,_0x38988d){return _0x202b69===_0x38988d;},'GzzGn':_0x160913[_0x52522e(0x260)],'SdAiX':_0x160913[_0x52522e(0x1f2)],'FezjF':_0x52522e(0x645)+_0x52522e(0x20a),'AabYR':'loadi'+'ng','OsMAV':_0x160913[_0x52522e(0x4c1)],'wcXSa':_0x52522e(0x359)+_0x52522e(0x326)+'t\x20','MFuSi':_0x160913['zKXtD'],'ZHAcZ':_0x160913[_0x52522e(0x10d)],'Xzwdo':_0x52522e(0x616),'wUqXl':_0x160913[_0x52522e(0x4ca)],'ibMEV':_0x52522e(0x46a),'IUgmz':'sk-va'+'l','SQMMG':_0x160913['rDbof'],'ZEoeZ':_0x52522e(0x328)+_0x52522e(0x422),'qLpBX':_0x52522e(0x44e),'eXwCQ':_0x52522e(0x5c7)+'9d','UBhsD':_0x52522e(0x335),'kAUMQ':_0x52522e(0x584)+_0x52522e(0x54a)+'0','IUSnE':_0x160913[_0x52522e(0x340)],'JLbfp':_0x52522e(0x342)+_0x52522e(0x1a0),'kaMsh':_0x160913[_0x52522e(0x343)],'OuFqy':function(_0x413e44,_0x77fea9,_0x359779,_0x10fefc,_0x5dcc99,_0x1b91a9,_0x19524f,_0x4f2829){return _0x413e44(_0x77fea9,_0x359779,_0x10fefc,_0x5dcc99,_0x1b91a9,_0x19524f,_0x4f2829);},'eOavr':_0x52522e(0x2dd),'roYUE':'SAFE\x20'+_0x52522e(0x3ed)+'—\x20ove'+_0x52522e(0x384)+_0x52522e(0x146)+'\x20no\x20h'+'ooks\x20'+'(relo'+'ad\x20to'+'\x20exit'+')','GvfeO':function(_0xbcff57,_0x55c4ec){return _0xbcff57+_0x55c4ec;},'TNEah':function(_0x26d460,_0x43dc32){return _0x26d460+_0x43dc32;},'LWVMa':function(_0x3fd57f,_0x13d68b){return _0x160913['zlaQe'](_0x3fd57f,_0x13d68b);},'EFFba':function(_0x2dfeb6,_0x138824){var _0x160ed3=_0x52522e;return _0x160913[_0x160ed3(0x2d5)](_0x2dfeb6,_0x138824);},'EnBOq':_0x52522e(0x39c)+'bound'+'\x20','wzBSe':_0x52522e(0x58b)+_0x52522e(0x218)+'\x20','FvEJc':function(_0x2b926c,_0x4ea651){return _0x2b926c+_0x4ea651;},'UwFTc':function(_0x550224,_0x54db15,_0x1ada08,_0x54efaf,_0x1417f7,_0x246da7){return _0x550224(_0x54db15,_0x1ada08,_0x54efaf,_0x1417f7,_0x246da7);},'wbmkC':_0x160913[_0x52522e(0x112)],'JUWcz':_0x160913[_0x52522e(0x3d0)],'xCSyx':function(_0x1a5d83,_0x3065a1,_0x1dd646){return _0x1a5d83(_0x3065a1,_0x1dd646);},'GhYUZ':'noRec'+_0x52522e(0x183),'UURbI':_0x52522e(0x1b3),'gPekv':function(_0x48919a){return _0x48919a();},'GhTeE':_0x52522e(0x3d8),'UfnHN':function(_0x111c40){return _0x111c40();},'hwETX':function(_0x2bf730){return _0x160913['xWfkA'](_0x2bf730);},'oMTCG':_0x52522e(0x18d),'ZkntX':function(_0x34722a){return _0x34722a();},'DGRLW':function(_0x287e9d){return _0x287e9d();},'eazWS':_0x160913[_0x52522e(0x426)],'grxgn':_0x160913['RAAlo'],'YkFqJ':function(_0x347671,_0x70ed62){return _0x347671+_0x70ed62;},'DrTav':_0x52522e(0x2f7)+'tles','DHgvQ':_0x160913['gZJDo'],'faGZF':_0x160913['HhrMk'],'ptfZp':_0x160913['zUdvA'],'wOnUb':_0x52522e(0x5fd)+_0x52522e(0x3c4),'cFHqi':_0x52522e(0x44f),'DlXwx':_0x52522e(0x1ae)+'|0|2|'+_0x52522e(0x5b0),'VhZtB':_0x52522e(0x48f)+_0x52522e(0x3c8),'QxftN':function(_0x2f59fe,_0xd71f0e){var _0x3f6c1f=_0x52522e;return _0x160913[_0x3f6c1f(0x2ad)](_0x2f59fe,_0xd71f0e);},'ZdfMI':function(_0x1e9f41,_0x38db12){return _0x160913['NplcJ'](_0x1e9f41,_0x38db12);}};_0x596ed7['adblo'+'ck']&&setInterval(()=>{var _0x47625d=_0x52522e;try{for(var _0x2ae3d7 of[_0x47625d(0x5e2)+'io_30'+_0x47625d(0x117)+_0x47625d(0x5e0)+'nt',_0x174548['mjulo'],_0x47625d(0x5e2)+_0x47625d(0x2e3)+_0x47625d(0x618)+_0x47625d(0x5e0)+'nt','fulls'+_0x47625d(0x4a0)+_0x47625d(0x4c8)+'s']){if(_0x47625d(0x19b)!==_0x47625d(0x26f)){var _0x562a4f=document['getEl'+'ement'+'ById'](_0x2ae3d7);if(_0x562a4f&&_0x174548['tDdze'](_0x2ae3d7,'fulls'+'creen'+_0x47625d(0x4c8)+'s')){var _0x17dc68=_0x562a4f['child'+'ren'];for(var _0x1417a7=-0x157*0x7+-0x1f0e+0x286f;_0x1417a7<_0x17dc68[_0x47625d(0x1e6)+'h'];_0x1417a7++){if(_0x17dc68[_0x1417a7]['id']&&_0x17dc68[_0x1417a7]['id']['index'+'Of']('kour-'+_0x47625d(0x489))===0x2*-0xd1c+-0x8ae+-0x1*-0x22e6)_0x17dc68[_0x1417a7][_0x47625d(0x49d)]['displ'+'ay']=_0x47625d(0x195);}}else{if(_0x562a4f)_0x562a4f[_0x47625d(0x49d)][_0x47625d(0x520)+'ay']=_0x174548['fjWKH'];}}else return 0x261d+-0x1d*-0x4f+-0x2f10;}}catch(_0x3dae83){}},-0x1830+-0x10*0x72+0x2720);var _0x11a5c2=document['creat'+_0x52522e(0x1ab)+'ent']('canva'+'s');_0x11a5c2['style'][_0x52522e(0x1b6)+'xt']='posit'+_0x52522e(0x62c)+_0x52522e(0x5ba)+'inset'+':0;wi'+'dth:1'+_0x52522e(0x4fe)+'heigh'+'t:100'+_0x52522e(0x64a)+'index'+':2147'+'48364'+_0x52522e(0x32a)+'nter-'+_0x52522e(0x593)+_0x52522e(0x3fe)+'e';var _0x3080a7=_0x11a5c2[_0x52522e(0x488)+_0x52522e(0x352)]('2d');function _0x2ff125(){var _0x4b4578=_0x52522e;try{var _0x4f6350=document[_0x4b4578(0x23c)+_0x4b4578(0x4a0)+'Eleme'+'nt'],_0x26be08=_0x4f6350&&_0x160913['UooBh'](_0x4f6350[_0x4b4578(0x11b)+'me'],'CANVA'+'S')?_0x4f6350:document[_0x4b4578(0x3a0)]||document['docum'+_0x4b4578(0x355)+_0x4b4578(0x368)];if(_0x11a5c2['paren'+_0x4b4578(0x4ba)]!==_0x26be08)_0x26be08[_0x4b4578(0x4ce)+_0x4b4578(0x54c)+'d'](_0x11a5c2);}catch(_0x55812b){try{document['body']['appen'+_0x4b4578(0x54c)+'d'](_0x11a5c2);}catch(_0x4e35bc){}}}var _0x57224e={'w':0x0,'h':0x0,'dpr':0x0};function _0x2a8129(){var _0x58f07e=_0x52522e,_0x529351=window['devic'+'ePixe'+_0x58f07e(0x550)+'o']||-0x12a*-0x8+-0x7b+-0x4*0x235,_0x4813a2=window['inner'+_0x58f07e(0x2e8)],_0xc92e0e=window['inner'+'Heigh'+'t'];if(_0x4813a2===_0x57224e['w']&&_0x160913[_0x58f07e(0x32b)](_0xc92e0e,_0x57224e['h'])&&_0x529351===_0x57224e['dpr'])return;_0x57224e['w']=_0x4813a2,_0x57224e['h']=_0xc92e0e,_0x57224e['dpr']=_0x529351,_0x11a5c2['width']=Math['round'](_0x4813a2*_0x529351),_0x11a5c2['heigh'+'t']=Math[_0x58f07e(0x38d)](_0xc92e0e*_0x529351),_0x3080a7[_0x58f07e(0x1ed)+'ansfo'+'rm'](_0x529351,0x10ec+-0xdb1+-0x33b*0x1,0x1*-0x2653+-0x5f1*0x4+-0x3e17*-0x1,_0x529351,-0x116f*-0x1+0x20ce+0x595*-0x9,-0x1a0b+0x137*-0xb+-0x1*-0x2768);}var _0x41bebf=0x748+0x1235+-0x197d,_0x1cd815=performance[_0x52522e(0x502)](),_0x516ec7=-0x1f48+0xa13+0x3d*0x59;function _0x418f03(_0x2f0134){var _0x251178=_0x52522e,_0x3b7844=Number(_0x596ed7[_0x251178(0x273)+'le'])||0x4ec+0x4*-0x32b+-0x7c1*-0x1,_0x3f7591=(-0x883+0x2603+-0x1d5e)*_0x3b7844,_0x5b0281=_0x160913[_0x251178(0x3b8)](-0x16*0x62+-0x16f7+0x1*0x1f67,_0x3b7844),_0x301be7=_0x3f7591*(0xc61*0x1+-0x1*0x12eb+-0x68d*-0x1)+_0x160913[_0x251178(0x1c8)](_0x5b0281,0x11*-0xca+0x23d8*-0x1+0x3144),_0x157e44=_0x3f7591*(-0x1748+0x12b8+0x493)+_0x160913['fTJYv'](_0x5b0281,0x688+-0x1*0x2378+0x1cf2),_0x1f3bdd=_0x596ed7[_0x251178(0x542)],_0x422842=_0x160913['UdHfT'](_0x1f3bdd,'br')?_0x160913['tlxwz'](_0x2f0134[_0x251178(0x45a)],0x120*0x1f+-0xf62+0x1*-0x136e)-_0x301be7:_0x160913['QytlD'](_0x2f0134['left'],-0x25*0xa7+-0x5*-0x362+0x749*0x1),_0x29d3f1=_0x160913[_0x251178(0x538)](_0x1f3bdd,'ml')?_0x160913[_0x251178(0x555)](_0x2f0134[_0x251178(0x503)],_0x160913[_0x251178(0x1a5)](_0x2f0134['heigh'+'t'],-0xa21+0x2*-0x11cb+0x2db9))-_0x157e44/(-0x34e+0x9fd*0x2+0x3*-0x58e):_0x2f0134['botto'+'m']-_0x157e44-(_0x160913[_0x251178(0x538)](_0x1f3bdd,'bl')?-0x1ac9+0x51*-0x4f+0x3428:0x2171*0x1+-0x1*0x58a+0x25*-0xbd),_0x86d7d0=(_0x378dff,_0x40998a,_0x6704d2,_0x114242,_0x2f3597,_0x99159a,_0x4d43c9)=>{var _0x4ebf39=_0x251178,_0x3b48d3=_0x174548[_0x4ebf39(0x4fb)][_0x4ebf39(0x5d8)]('|'),_0x1fc54a=-0x2*0x13e+0x226f+0x1ff3*-0x1;while(!![]){switch(_0x3b48d3[_0x1fc54a++]){case'0':var _0x4f8a52=_0x8fd090['has'](_0x40998a);continue;case'1':_0x3080a7['fillT'+'ext'](_0x378dff,_0x174548['BbRtq'](_0x6704d2,_0x2f3597/(0xa59+0x1*0x257f+0x2*-0x17eb)),_0x174548[_0x4ebf39(0x45b)](_0x114242,_0x99159a/(-0x36+-0xd32*-0x1+0x2*-0x67d))-(_0x4d43c9?_0x174548['ZLzod'](-0x721+-0x11*0xf3+0x1749,_0x3b7844):0x26c*-0x10+0xb14+0x1bac));continue;case'2':_0x3080a7[_0x4ebf39(0x63a)]=_0x174548['rngRf'](_0x174548[_0x4ebf39(0x256)]+Math['round']((-0x1*0x1e07+0x695*-0x3+0x31d2)*_0x3b7844),_0x174548['pdHKe']);continue;case'3':if(_0x3080a7[_0x4ebf39(0x38d)+_0x4ebf39(0x3a5)])_0x3080a7['round'+_0x4ebf39(0x3a5)](_0x6704d2,_0x114242,_0x2f3597,_0x99159a,_0x174548['IxQxT'](0x71*0x48+-0x3fe+-0x45*0x67,_0x3b7844));else _0x3080a7[_0x4ebf39(0x566)](_0x6704d2,_0x114242,_0x2f3597,_0x99159a);continue;case'4':_0x3080a7[_0x4ebf39(0x487)+'e']();continue;case'5':_0x3080a7[_0x4ebf39(0x1de)+'Path']();continue;case'6':_0x3080a7['strok'+'eStyl'+'e']=_0x4f8a52?_0x211604:'rgba('+_0x4ebf39(0x628)+_0x4ebf39(0x2a3)+'7,0.3'+'5)';continue;case'7':_0x3080a7['resto'+'re']();continue;case'8':_0x3080a7[_0x4ebf39(0x126)+_0x4ebf39(0x348)]=_0x4f8a52?_0x174548['yiLVO']:'rgba('+_0x4ebf39(0x46d)+'16,0.'+'7)';continue;case'9':_0x4d43c9&&(_0x3080a7[_0x4ebf39(0x63a)]=_0x4ebf39(0x4b1)+Math['round']((0x581+-0x1*-0x577+-0xaef)*_0x3b7844)+(_0x4ebf39(0x1af)+_0x4ebf39(0x3b4)+_0x4ebf39(0x174)+_0x4ebf39(0x171)+'tem-u'+'i,san'+_0x4ebf39(0x15f)+'if'),_0x3080a7['fillS'+_0x4ebf39(0x348)]=_0x4f8a52?_0x4ebf39(0x104):_0x174548['CHDYn'],_0x3080a7[_0x4ebf39(0x2c7)+_0x4ebf39(0x3b5)](_0x4d43c9,_0x174548[_0x4ebf39(0x5af)](_0x6704d2,_0x2f3597/(0x253+-0x1346*-0x2+0x3*-0xd9f)),_0x114242+_0x174548[_0x4ebf39(0x385)](_0x99159a,-0x24f8+0x5f1+0x46f*0x7)+(-0xc64+-0x205c+0x2cc8)*_0x3b7844));continue;case'10':_0x3080a7['save']();continue;case'11':_0x3080a7[_0x4ebf39(0x295)]();continue;case'12':_0x3080a7[_0x4ebf39(0x44a)+'lign']=_0x174548[_0x4ebf39(0x525)];continue;case'13':_0x4f8a52&&(_0x3080a7[_0x4ebf39(0x1d2)+_0x4ebf39(0x25d)+'r']=_0x529259,_0x3080a7[_0x4ebf39(0x1d2)+_0x4ebf39(0x20b)]=0x3*-0x4ee+-0x187d*0x1+0x2755,_0x3080a7['fill'](),_0x3080a7[_0x4ebf39(0x1d2)+_0x4ebf39(0x20b)]=-0x39a*-0x9+0x16bb+-0x3725);continue;case'14':_0x3080a7['textB'+_0x4ebf39(0x399)+'ne']=_0x4ebf39(0x13c)+'e';continue;case'15':_0x3080a7[_0x4ebf39(0x544)+_0x4ebf39(0x31c)]=0x1*0x686+-0x2*-0xe74+0x3*-0xbcf;continue;case'16':_0x3080a7['fillS'+'tyle']=_0x4f8a52?_0x4ebf39(0x104):_0x174548[_0x4ebf39(0x159)];continue;}break;}};_0x86d7d0('W',_0x160913[_0x251178(0x207)],_0x160913[_0x251178(0x423)](_0x422842+_0x3f7591,_0x5b0281),_0x29d3f1,_0x3f7591,_0x3f7591),_0x86d7d0('A','KeyA',_0x422842,_0x160913[_0x251178(0x150)](_0x29d3f1,_0x3f7591)+_0x5b0281,_0x3f7591,_0x3f7591),_0x86d7d0('S','KeyS',_0x422842+_0x3f7591+_0x5b0281,_0x29d3f1+_0x3f7591+_0x5b0281,_0x3f7591,_0x3f7591),_0x160913[_0x251178(0xfa)](_0x86d7d0,'D',_0x160913['Lvfrs'],_0x422842+(_0x3f7591+_0x5b0281)*(-0x2052+-0x15ef+0x1*0x3643),_0x29d3f1+_0x3f7591+_0x5b0281,_0x3f7591,_0x3f7591);var _0x5eb21e=_0x160913[_0x251178(0x54f)](_0x301be7,_0x5b0281)/(0x584+-0x17*-0x14+0xbb*-0xa),_0x3d0ee7=_0x160913['BLnYF'](_0x29d3f1,(_0x3f7591+_0x5b0281)*(0x24f3+0x1dc3+-0x10ad*0x4));_0x86d7d0(_0x160913['RdbLy'],_0x160913[_0x251178(0x5a7)],_0x422842,_0x3d0ee7,_0x5eb21e,_0x3f7591,_0x596ed7['ksCps']?_0x160913[_0x251178(0x150)](_0x3ff157(-0x20f3+-0x4f*0x11+0x4d*0x7f),'\x20CPS'):''),_0x86d7d0(_0x160913[_0x251178(0x4f6)],_0x251178(0x4bb)+'3',_0x160913['zlaQe'](_0x422842+_0x5eb21e,_0x5b0281),_0x3d0ee7,_0x5eb21e,_0x3f7591,_0x596ed7[_0x251178(0x480)]?_0x160913['LPKJM'](_0x3ff157(0x38f+-0x15b2+0x1226),_0x160913['rRkzB']):''),_0x86d7d0('',_0x160913[_0x251178(0x548)],_0x422842,_0x160913['PzUuD'](_0x3d0ee7+_0x3f7591,_0x5b0281),_0x301be7,_0x3f7591*(0x1b4*0x14+0x1af8+-0x3d08+0.45));}function _0x916660(_0x61989f){var _0x2c4590=_0x52522e,_0x4ab9e0=_0x61989f[_0x2c4590(0x333)]/(0x6c1+0x6ae+0x1eb*-0x7),_0x2b293d=_0x174548['ubdCo'](_0x61989f[_0x2c4590(0x62a)+'t'],0x97*-0x21+-0x26de*-0x1+-0x1365),_0x6def12=Number(_0x596ed7[_0x2c4590(0x1dd)+'e'])||0x17d+-0xe95+0xd19,_0x5193f1=/^#[0-9a-f]{6}$/i[_0x2c4590(0x5c1)](_0x596ed7[_0x2c4590(0x5b1)+'or'])?_0x596ed7['chCol'+'or']:_0x2c4590(0x5c7)+'9d';_0x3080a7['save'](),_0x3080a7['strok'+_0x2c4590(0x234)+'e']=_0x5193f1,_0x3080a7[_0x2c4590(0x126)+'tyle']=_0x5193f1,_0x3080a7[_0x2c4590(0x544)+_0x2c4590(0x31c)]=Math['max'](0x5*0x44a+-0x23f3+0xe82+0.5,(0x1225+-0x25e+-0x1*0xfc5)*_0x6def12),_0x3080a7[_0x2c4590(0x1d2)+'wColo'+'r']=_0x5193f1,_0x3080a7[_0x2c4590(0x1d2)+_0x2c4590(0x20b)]=-0x1328+0x23*0x89+0x73;var _0x17204b=(0x1*0x12dc+0x25c3+0x3899*-0x1)*_0x6def12,_0x19bfd0=_0x174548['IEoRh'](-0x15e3+0x215b*0x1+-0xc*0xf4,_0x6def12);_0x3080a7[_0x2c4590(0x1de)+_0x2c4590(0x425)](),_0x3080a7[_0x2c4590(0x4a1)+'o'](_0x4ab9e0-_0x17204b-_0x19bfd0,_0x2b293d),_0x3080a7['lineT'+'o'](_0x174548[_0x2c4590(0x1df)](_0x4ab9e0,_0x17204b),_0x2b293d),_0x3080a7['moveT'+'o'](_0x4ab9e0+_0x17204b,_0x2b293d),_0x3080a7[_0x2c4590(0x5fc)+'o'](_0x174548[_0x2c4590(0x45b)](_0x4ab9e0,_0x17204b)+_0x19bfd0,_0x2b293d),_0x3080a7[_0x2c4590(0x4a1)+'o'](_0x4ab9e0,_0x2b293d-_0x17204b-_0x19bfd0),_0x3080a7[_0x2c4590(0x5fc)+'o'](_0x4ab9e0,_0x2b293d-_0x17204b),_0x3080a7[_0x2c4590(0x4a1)+'o'](_0x4ab9e0,_0x174548['hrjfI'](_0x2b293d,_0x17204b)),_0x3080a7[_0x2c4590(0x5fc)+'o'](_0x4ab9e0,_0x174548[_0x2c4590(0x2b6)](_0x174548['rtNEr'](_0x2b293d,_0x17204b),_0x19bfd0)),_0x3080a7[_0x2c4590(0x487)+'e'](),_0x3080a7['begin'+'Path'](),_0x3080a7['arc'](_0x4ab9e0,_0x2b293d,(-0x19b2+-0x156*-0x18+-0x65d+0.6000000000000001)*_0x6def12,0x1892+0x12*-0xc9+-0xa70,_0x174548[_0x2c4590(0x484)](Math['PI'],0xc59+-0x1*-0x15a5+-0x21fc)),_0x3080a7['fill'](),_0x3080a7['resto'+'re']();}function _0x1841f0(_0x228616){var _0x4c2611=_0x52522e;_0x3080a7[_0x4c2611(0x454)](),_0x3080a7['font']=_0x160913[_0x4c2611(0x1ce)],_0x3080a7[_0x4c2611(0x44a)+'lign']=_0x160913[_0x4c2611(0x5a9)],_0x3080a7[_0x4c2611(0x286)+'aseli'+'ne']=_0x160913['hQFOh'];var _0x37deea=0xbb9+-0x1b76+0xfe9,_0x13fc13=0x12e*-0x4+-0xcae*-0x1+0x7ea*-0x1,_0x20ba14=(_0x5136fa,_0x258e23)=>{var _0x509a16=_0x4c2611;_0x3080a7['fillS'+'tyle']=_0x174548[_0x509a16(0x341)](_0x258e23,_0x174548[_0x509a16(0x464)]),_0x3080a7[_0x509a16(0x2c7)+_0x509a16(0x3b5)](_0x5136fa,_0x13fc13,_0x37deea),_0x37deea+=0x7*-0x2f9+-0x2*0xd7f+0x2fdd;};_0x160913[_0x4c2611(0x4b8)](_0x20ba14,_0x4c2611(0x49c)+'A\x20KOU'+_0x4c2611(0x17c)+'1','#ff6b'+'9d');if(_0x596ed7['fps'])_0x160913[_0x4c2611(0x206)](_0x20ba14,_0x516ec7+'\x20FPS');if(!_0x134b04[_0x4c2611(0x115)+'oaded'])_0x20ba14(_0x160913['rnlpK'],_0x160913['YUvrn']);_0x3080a7['resto'+'re']();}function _0x583bfe(){var _0x32236e=_0x52522e,_0x530acb=(_0x32236e(0x37c)+_0x32236e(0x144)+'|0|3|'+'4|2|5'+'|9')['split']('|'),_0x133cc5=0x122d+0x2104+0xa3d*-0x5;while(!![]){switch(_0x530acb[_0x133cc5++]){case'0':_0x160913[_0x32236e(0x5bc)](_0x2ff125);continue;case'1':_0x41bebf++;continue;case'2':if(_0x596ed7['cross'+_0x32236e(0x17d)])_0x916660(_0x330a48);continue;case'3':_0x3080a7[_0x32236e(0x2fd)+'Rect'](-0x392*-0x7+-0x1ea7+0x5a9,0x8ea+-0x1*0xc77+0x38d,_0x57224e['w'],_0x57224e['h']);continue;case'4':var _0x330a48={'left':0x0,'top':0x0,'right':_0x57224e['w'],'bottom':_0x57224e['h'],'width':_0x57224e['w'],'height':_0x57224e['h']};continue;case'5':if(_0x596ed7[_0x32236e(0x191)+_0x32236e(0x3e5)])_0x160913[_0x32236e(0x497)](_0x418f03,_0x330a48);continue;case'6':var _0x4b1894=performance[_0x32236e(0x502)]();continue;case'7':_0x2a8129();continue;case'8':_0x160913['kQgZh'](requestAnimationFrame,_0x583bfe);continue;case'9':_0x1841f0(_0x330a48);continue;case'10':_0x4b1894-_0x1cd815>=0x31c*0x3+-0x135c+0xbfc&&(_0x516ec7=Math['round'](_0x160913[_0x32236e(0x2b9)](_0x41bebf*(-0x1f1f+0x266f+0x2*-0x1b4),_0x160913[_0x32236e(0x2f8)](_0x4b1894,_0x1cd815))),_0x41bebf=-0x1*0x234a+0x215e+0x1ec,_0x1cd815=_0x4b1894);continue;}break;}}var _0x2c6773=document['creat'+_0x52522e(0x1ab)+_0x52522e(0x28a)](_0x52522e(0x3aa));_0x2c6773['id']=_0x160913['UvFCn'],_0x2c6773[_0x52522e(0x49d)][_0x52522e(0x1b6)+'xt']='posit'+_0x52522e(0x62c)+_0x52522e(0x5ba)+_0x52522e(0x50d)+':0;z-'+_0x52522e(0x2ed)+':2147'+_0x52522e(0x60c)+_0x52522e(0x29b)+'nter-'+'event'+_0x52522e(0x3fe)+'e;';var _0x5101a9=_0x2c6773['attac'+'hShad'+'ow']({'mode':'open'});(document[_0x52522e(0x3a0)]||document['docum'+_0x52522e(0x355)+_0x52522e(0x368)])['appen'+_0x52522e(0x54c)+'d'](_0x2c6773);var _0x436542=![],_0xd3284c={};try{_0xd3284c=JSON['parse'](localStorage[_0x52522e(0x2d2)+'em']('sakur'+_0x52522e(0x57f)+_0x52522e(0x624)+'v1')||'{}');}catch(_0x2a93b3){}function _0x1321d2(){var _0x465738=_0x52522e;try{localStorage[_0x465738(0x33f)+'em'](_0x174548[_0x465738(0x2cf)],JSON[_0x465738(0x4f9)+'gify'](_0xd3284c));}catch(_0x15bbc6){}}function _0x33023e(_0x54da2f,_0x778d9b){var _0x301915=_0x52522e;if(_0x160913[_0x301915(0x369)](_0x301915(0x103),_0x301915(0x103))){var _0xc0bc70=document[_0x301915(0x52c)+'eElem'+_0x301915(0x28a)](_0x301915(0x106)+'n');return _0xc0bc70[_0x301915(0x1a1)]='butto'+'n',_0xc0bc70['class'+_0x301915(0x4db)]=_0x301915(0x59f)+'itch',_0xc0bc70[_0x301915(0x490)+_0x301915(0x59e)+'te']('role',_0x160913['GilAH']),_0xc0bc70[_0x301915(0x490)+'tribu'+'te'](_0x301915(0x474)+_0x301915(0x455)+'ed',String(!!_0x54da2f)),_0xc0bc70[_0x301915(0x14e)+'ck']=_0x24352b=>{var _0x3d1cf1=_0x301915;_0x24352b[_0x3d1cf1(0x383)+_0x3d1cf1(0x63d)+_0x3d1cf1(0x16c)]();var _0x294c8c=_0xc0bc70[_0x3d1cf1(0x2c4)+_0x3d1cf1(0x59e)+'te'](_0x3d1cf1(0x474)+'check'+'ed')!==_0x174548[_0x3d1cf1(0x2e9)];_0xc0bc70[_0x3d1cf1(0x490)+'tribu'+'te'](_0x3d1cf1(0x474)+'check'+'ed',String(_0x294c8c)),_0x778d9b(_0x294c8c);},_0xc0bc70;}else{var _0x5c8495=_0x58aeed[_0x476b7a][_0x301915(0x2b8)+'Selec'+_0x301915(0x5c4)](_0x301915(0x19d)+'desc');_0x5c8495&&(_0x174548[_0x301915(0x40d)](_0x5c8495[_0x301915(0x361)+_0x301915(0x215)+'t'][_0x301915(0x2ed)+'Of']('UWMK'),-0x21ac+0x1fdc*0x1+0x2*0xe8)||_0x174548[_0x301915(0x5c9)](_0x5c8495['textC'+_0x301915(0x215)+'t']['index'+'Of']('SAFE'),-0x1924*0x1+-0x85a+-0x3*-0xb2a))&&(_0x5c8495['textC'+_0x301915(0x215)+'t']=_0x40f94d['safeM'+_0x301915(0x472)]?_0x174548[_0x301915(0x17b)]:_0x365f4e['uwmk']?_0x174548[_0x301915(0x2b6)](_0x301915(0x39c)+'bound'+'\x20'+(_0x123c49[_0x301915(0x3ef)+_0x301915(0x537)]?_0x174548['rtNEr'](_0x2c9f11['hooks'+'Ok'],'/')+_0xf978a9[_0x301915(0x3ef)+_0x301915(0x537)]+('\x20hook'+'s'):_0x174548['SdAiX'])+_0x174548['FezjF']+(_0xfeef6e[_0x301915(0x115)+'oaded']?_0x301915(0x29c)+'d':_0x174548[_0x301915(0x4bc)]),'\x20|\x20sh'+'ooter'+'\x20')+(_0x2fc2a8[_0x301915(0x342)+_0x301915(0x1a0)]?_0x174548[_0x301915(0x364)]:'none')+_0x174548[_0x301915(0x608)]+(_0x9874cb[_0x301915(0x644)+_0x301915(0x23d)]?'held':_0x301915(0x195))+(_0x2de5dd[_0x301915(0x283)+_0x301915(0x5e4)]?_0x174548['MFuSi']+_0x2a308f['lastE'+'rror']:''):_0x174548[_0x301915(0x251)]);}}function _0x13f8ff(_0x1e2b7e,_0x3b094d,_0x5c2c31,_0xfabfa4,_0x5a2948){var _0x5c3317=_0x52522e,_0x57a6b7={'qoSdc':function(_0x50a863,_0x367ec0){return _0x50a863(_0x367ec0);},'ebrEZ':function(_0x24e119,_0x48928b){return _0x24e119+_0x48928b;}},_0x4d18c5=document[_0x5c3317(0x52c)+_0x5c3317(0x1ab)+'ent'](_0x174548[_0x5c3317(0x38a)]);_0x4d18c5['class'+_0x5c3317(0x4db)]='sk-ra'+'nge';var _0x5c1e69=document[_0x5c3317(0x52c)+'eElem'+_0x5c3317(0x28a)](_0x174548['ibMEV']);_0x5c1e69['type']=_0x5c3317(0x2b1),_0x5c1e69['class'+_0x5c3317(0x4db)]=_0x5c3317(0x51d)+_0x5c3317(0x619),_0x5c1e69['min']=_0x3b094d,_0x5c1e69['max']=_0x5c2c31,_0x5c1e69['step']=_0xfabfa4,_0x5c1e69[_0x5c3317(0x50e)]=_0x1e2b7e;var _0x855425=document[_0x5c3317(0x52c)+_0x5c3317(0x1ab)+'ent'](_0x5c3317(0x164));_0x855425[_0x5c3317(0x576)+'Name']=_0x174548['IUgmz'],_0x855425[_0x5c3317(0x361)+_0x5c3317(0x215)+'t']=String(_0x1e2b7e);var _0x19f3dc=()=>{var _0x5b0761=_0x5c3317;_0x855425[_0x5b0761(0x361)+_0x5b0761(0x215)+'t']=_0x57a6b7[_0x5b0761(0x622)](String,_0x5c1e69[_0x5b0761(0x50e)]),_0x4d18c5[_0x5b0761(0x49d)][_0x5b0761(0x1c3)+_0x5b0761(0x382)+'y'](_0x5b0761(0xfb),_0x57a6b7[_0x5b0761(0x193)]((_0x5c1e69['value']-_0x3b094d)/(_0x5c2c31-_0x3b094d)*(0xa13+-0x9*-0x22d+-0x1d44),'%'));};return _0x5c1e69[_0x5c3317(0x617)+'ut']=()=>{var _0x3bd0de=_0x5c3317,_0x1ba1c7={'GtlBZ':function(_0x2c177f,_0x6de512){return _0x2c177f>_0x6de512;},'nZaJS':function(_0x1d6e8c,_0x70f5c2){var _0x1dd81c=_0x719b;return _0x174548[_0x1dd81c(0x1df)](_0x1d6e8c,_0x70f5c2);}};if(_0x3bd0de(0x32c)===_0x174548['Xzwdo']){var _0x59d323=_0x4c2792[_0x597071]||[],_0x2576f4=_0x12056b[_0x3bd0de(0x502)]();while(_0x59d323[_0x3bd0de(0x1e6)+'h']&&_0x1ba1c7['GtlBZ'](_0x1ba1c7[_0x3bd0de(0x257)](_0x2576f4,_0x59d323[-0x23c2+0x1288+0x113a]),-0x1ffa+0x117c+-0x1d7*-0xa))_0x59d323['shift']();return _0x59d323[_0x3bd0de(0x1e6)+'h'];}else _0x19f3dc(),_0x5a2948(Number(_0x5c1e69['value']));},_0x19f3dc(),_0x4d18c5['appen'+'d'](_0x5c1e69,_0x855425),_0x4d18c5;}function _0x1a3897(_0x1c422e,_0x4a88d5){var _0x13afc8=_0x52522e,_0x17e9ec=_0x174548[_0x13afc8(0x5cf)][_0x13afc8(0x5d8)]('|'),_0x18970d=-0xb*0xc6+0xe94+-0x612;while(!![]){switch(_0x17e9ec[_0x18970d++]){case'0':_0xb78cf1['class'+_0x13afc8(0x4db)]=_0x174548[_0x13afc8(0x288)];continue;case'1':_0xb78cf1['oninp'+'ut']=()=>_0x4a88d5(_0xb78cf1['value']);continue;case'2':_0xb78cf1[_0x13afc8(0x1a1)]=_0x174548['qLpBX'];continue;case'3':return _0xb78cf1;case'4':_0xb78cf1['value']=/^#[0-9a-f]{6}$/i['test'](_0x1c422e)?_0x1c422e:_0x174548[_0x13afc8(0x5fb)];continue;case'5':var _0xb78cf1=document[_0x13afc8(0x52c)+'eElem'+_0x13afc8(0x28a)]('input');continue;}break;}}function _0x1a83a6(_0x246c62,_0xb200c1,_0x3ee473){var _0x1190b8=_0x52522e;if(_0x174548['tDdze'](_0x174548['UBhsD'],'PpVxS')){var _0x5aee20=_0x174548['kAUMQ'][_0x1190b8(0x5d8)]('|'),_0x2b8d9c=0x15a5+0x17c9+-0x2d6e;while(!![]){switch(_0x5aee20[_0x2b8d9c++]){case'0':return _0x55e9ca;case'1':_0x55e9ca[_0x1190b8(0x50e)]=_0x246c62;continue;case'2':_0x55e9ca['oncha'+'nge']=()=>_0x3ee473(_0x55e9ca[_0x1190b8(0x50e)]);continue;case'3':var _0x55e9ca=document[_0x1190b8(0x52c)+'eElem'+'ent'](_0x1190b8(0x54b)+'t');continue;case'4':_0x55e9ca[_0x1190b8(0x576)+_0x1190b8(0x4db)]=_0x1190b8(0x466)+'eld';continue;case'5':for(var [_0x4f14fe,_0x5bce05]of _0xb200c1){var _0x5393e1=document[_0x1190b8(0x52c)+_0x1190b8(0x1ab)+'ent']('optio'+'n');_0x5393e1[_0x1190b8(0x50e)]=_0x4f14fe,_0x5393e1[_0x1190b8(0x361)+'onten'+'t']=_0x5bce05,_0x55e9ca[_0x1190b8(0x4ce)+_0x1190b8(0x54c)+'d'](_0x5393e1);}continue;}break;}}else _0x26c9fe['clear']();}function _0x5b95ed(_0x7a0e98,_0x5635e3){var _0x1457e8=_0x52522e,_0x3503af=document['creat'+'eElem'+'ent']('butto'+'n');return _0x3503af[_0x1457e8(0x1a1)]=_0x174548['IUSnE'],_0x3503af['class'+_0x1457e8(0x4db)]='sk-bt'+'n',_0x3503af[_0x1457e8(0x361)+_0x1457e8(0x215)+'t']=_0x7a0e98,_0x3503af['oncli'+'ck']=_0x559879=>{var _0x233905=_0x1457e8;_0x559879['stopP'+_0x233905(0x63d)+_0x233905(0x16c)](),_0x5635e3();},_0x3503af;}function _0x7c1ced(_0x486322,_0x388f75,_0x4a6fe7){var _0x26373d=_0x52522e;if(_0x160913[_0x26373d(0x621)]===_0x160913[_0x26373d(0x1d5)])try{_0x56110e['setIt'+'em'](_0x174548[_0x26373d(0x2cf)],_0x5ade3c[_0x26373d(0x4f9)+_0x26373d(0x586)](_0x5788b9));}catch(_0x3a1f1b){}else{var _0x904442=document['creat'+_0x26373d(0x1ab)+_0x26373d(0x28a)](_0x160913[_0x26373d(0x4ca)]);_0x904442[_0x26373d(0x576)+_0x26373d(0x4db)]='sk-ct'+'l';var _0x1da57c=document[_0x26373d(0x52c)+'eElem'+_0x26373d(0x28a)](_0x26373d(0x164));_0x1da57c[_0x26373d(0x576)+_0x26373d(0x4db)]='sk-la'+'bel',_0x1da57c[_0x26373d(0x361)+_0x26373d(0x215)+'t']=_0x486322;if(_0x388f75){var _0x5b2d8f=document[_0x26373d(0x52c)+'eElem'+_0x26373d(0x28a)](_0x160913['xPbbB']);_0x5b2d8f['class'+'Name']=_0x26373d(0x47b)+'nt',_0x5b2d8f[_0x26373d(0x361)+_0x26373d(0x215)+'t']=_0x388f75,_0x1da57c['appen'+_0x26373d(0x54c)+'d'](_0x5b2d8f);}return _0x904442['appen'+'d'](_0x1da57c,_0x4a6fe7),_0x904442;}}function _0x72e37a(_0x34ca35,_0x73da33){var _0x454c0f=_0x52522e,_0x556c3a=document['creat'+'eElem'+'ent'](_0x454c0f(0x3aa));return _0x556c3a[_0x454c0f(0x576)+_0x454c0f(0x4db)]=_0x454c0f(0x5c5)+'te'+(_0x73da33?'\x20err':''),_0x556c3a[_0x454c0f(0x361)+'onten'+'t']=_0x34ca35,_0x556c3a;}function _0x21acc0(_0x5d77e7,_0x239b55,_0xbdf2ba,_0xdc0959,_0x568aa5){var _0x30ea2a=_0x52522e,_0x2f030e={'otMAv':_0x160913['wyEPq']};if(_0x160913[_0x30ea2a(0x239)](_0x30ea2a(0x3c6),'ghWTI')){var _0x41cae6=document['creat'+_0x30ea2a(0x1ab)+'ent'](_0x160913[_0x30ea2a(0x4ca)]);_0x41cae6[_0x30ea2a(0x576)+'Name']=_0x160913['jTtUB']+(_0xbdf2ba?'\x20on':'');var _0x264edc=document[_0x30ea2a(0x52c)+_0x30ea2a(0x1ab)+_0x30ea2a(0x28a)](_0x160913[_0x30ea2a(0x4ca)]);_0x264edc['class'+_0x30ea2a(0x4db)]=_0x160913[_0x30ea2a(0x5dc)];var _0x9ae182=document[_0x30ea2a(0x52c)+'eElem'+_0x30ea2a(0x28a)](_0x160913[_0x30ea2a(0x4ca)]);_0x9ae182[_0x30ea2a(0x576)+_0x30ea2a(0x4db)]=_0x30ea2a(0x3d4)+'rd-ti'+_0x30ea2a(0x1a3);var _0x10cec0=document['creat'+_0x30ea2a(0x1ab)+'ent'](_0x160913[_0x30ea2a(0x4fa)]);_0x10cec0['textC'+_0x30ea2a(0x215)+'t']=_0x5d77e7,_0x9ae182['appen'+_0x30ea2a(0x54c)+'d'](_0x10cec0);if(_0xdc0959){var _0x1f7c83=_0x33023e(_0xbdf2ba,_0x17d07f=>{var _0x54e291=_0x30ea2a,_0x466081={'QMjGZ':_0x174548[_0x54e291(0x315)],'sRkGu':function(_0x4fb65a,_0x4ab018,_0x32fe33,_0x174877,_0x5f38ac){return _0x4fb65a(_0x4ab018,_0x32fe33,_0x174877,_0x5f38ac);},'WPVHN':_0x174548['kaMsh'],'EjBGX':_0x54e291(0x605),'skqsa':'Assem'+'bly-C'+'Sharp'+_0x54e291(0x4d1),'TZihz':_0x54e291(0x3e4)+'th','vfyYz':'Local'+_0x54e291(0x100),'qXRVm':function(_0x3dfffc,_0x14b074,_0x4a027c,_0x3c5d5d,_0x1f7236,_0x1ffe83,_0x55cbfe,_0x2eed41){var _0x2577c8=_0x54e291;return _0x174548[_0x2577c8(0x23e)](_0x3dfffc,_0x14b074,_0x4a027c,_0x3c5d5d,_0x1f7236,_0x1ffe83,_0x55cbfe,_0x2eed41);},'zrZwV':_0x174548[_0x54e291(0xeb)],'giJvp':function(_0x52e0f6,_0x1e480d,_0x755634,_0x16694e,_0x3097bf,_0xa70574,_0x36649b,_0x39a041){return _0x174548['OuFqy'](_0x52e0f6,_0x1e480d,_0x755634,_0x16694e,_0x3097bf,_0xa70574,_0x36649b,_0x39a041);},'whwlU':_0x54e291(0x450)+_0x54e291(0x419)};if('HvQsz'==='HvQsz')_0x41cae6[_0x54e291(0x576)+_0x54e291(0x37e)]['toggl'+'e']('on',_0x17d07f),_0xdc0959(_0x17d07f);else{_0x3274cc=_0x4ba68e['Unity'+_0x54e291(0x3af)+'dkit'][_0x54e291(0x2eb)+_0x54e291(0x2be)+'er'],_0x543ff9=_0x54ecae[_0x54e291(0xe7)+'WebMo'+_0x54e291(0x492)][_0x54e291(0x533)+'me'][_0x54e291(0x52c)+_0x54e291(0x5f0)+'in']({'name':_0x54e291(0x4a2)+'aKour','version':_0x466081[_0x54e291(0x511)],'referencedAssemblies':[_0x466081['skqsa']]});if(_0x48565a['hookG'+'od'])_0x396697(_0x54e291(0x35d),_0x466081[_0x54e291(0x501)],_0x54e291(0x1d6)+_0x54e291(0x55d)+'keHea'+_0x54e291(0x1f4),['i32','i32'],_0x24ab05,_0x5dabe9,!!_0x1cda1e[_0x54e291(0x35d)]);if(_0x1b5931[_0x54e291(0x2a8)+'odDie'])_0xef09cd(_0x54e291(0x219)+'e',_0x466081[_0x54e291(0x501)],_0x466081[_0x54e291(0x39b)],[_0x54e291(0x2dd),'i32','i32','i32',_0x54e291(0x2dd)],_0x243e14,_0x3a9284,!!_0x3c1fa6['god']);if(_0x26be34[_0x54e291(0x4bd)+'oReco'+'il'])_0x466081[_0x54e291(0x157)](_0x5d02b7,'noRec'+_0x54e291(0x183),'Legio'+_0x54e291(0x506)+_0x54e291(0x3ea)+_0x54e291(0x4d6)+_0x54e291(0x4c4)+'Recoi'+_0x54e291(0x5c0)+'on','Tick',[_0x466081[_0x54e291(0x53a)]],_0x2a2814,_0x3ac31d,!!_0x2c73a3[_0x54e291(0x217)+'oil']);if(_0x4eba41[_0x54e291(0xe9)+'aptur'+'e'])_0x466081[_0x54e291(0x356)](_0x452b0c,_0x54e291(0x3d1)+'ooter',_0x54e291(0x5ec)+_0x54e291(0x4b4),_0x54e291(0xf8)+'meRun'+'ning',['i32',_0x466081[_0x54e291(0x53a)]],_0x409a04,(_0x250b64,_0x237026)=>{var _0x5b706b=_0x54e291;_0x127b22(_0x326028,_0x237026,_0x3bfbcd,_0x466081[_0x5b706b(0x38c)]);},!![]);if(_0x348f1a['hookC'+_0x54e291(0x552)+'e'])_0xcedfd3(_0x54e291(0x2ff)+'ve','Legio'+'nPlat'+_0x54e291(0x3ea)+'.Over'+'tide.'+_0x54e291(0x2c6)+_0x54e291(0x28a),_0x466081[_0x54e291(0x35a)],[_0x54e291(0x2dd)],_0x466081['zrZwV'],(_0x2cd7e7,_0x1e74cb)=>{var _0x2a4639=_0x54e291;_0x466081[_0x2a4639(0x5d4)](_0x3cd62d,_0xaedf2e,_0x1e74cb,_0xa09bb8,_0x466081['WPVHN']);},!![]);}});_0x264edc[_0x30ea2a(0x4ce)+'d'](_0x9ae182,_0x1f7c83);}else _0x264edc[_0x30ea2a(0x4ce)+_0x30ea2a(0x54c)+'d'](_0x9ae182);_0x41cae6[_0x30ea2a(0x4ce)+'dChil'+'d'](_0x264edc);if(_0x568aa5&&_0x568aa5['lengt'+'h']){if(_0x160913['xuCGC'](_0x160913[_0x30ea2a(0x639)],'DvYrf')){var _0x4e8cfc=_0x160913[_0x30ea2a(0x3b9)][_0x30ea2a(0x5d8)]('|'),_0x48e8e4=0x1f4*0x11+0x12dd+-0x3411;while(!![]){switch(_0x4e8cfc[_0x48e8e4++]){case'0':_0x41cae6[_0x30ea2a(0x4ce)+_0x30ea2a(0x54c)+'d'](_0x3e679a);continue;case'1':for(var _0x19c6a0 of _0x568aa5)_0x3e679a[_0x30ea2a(0x4ce)+_0x30ea2a(0x54c)+'d'](_0x19c6a0);continue;case'2':_0x3ff0ef[_0x30ea2a(0x361)+'onten'+'t']=_0x239b55;continue;case'3':var _0x3ff0ef=document['creat'+_0x30ea2a(0x1ab)+_0x30ea2a(0x28a)](_0x160913['tpcgu']);continue;case'4':var _0x3e679a=document[_0x30ea2a(0x52c)+_0x30ea2a(0x1ab)+'ent'](_0x160913['tpcgu']);continue;case'5':_0x3ff0ef[_0x30ea2a(0x576)+'Name']=_0x30ea2a(0x438)+_0x30ea2a(0x55c);continue;case'6':_0x3e679a[_0x30ea2a(0x576)+_0x30ea2a(0x4db)]='sk-mb'+'ody';continue;case'7':_0x3e679a['appen'+_0x30ea2a(0x54c)+'d'](_0x3ff0ef);continue;}break;}}else{var _0x58facf=_0x1e80cd['creat'+_0x30ea2a(0x1ab)+'ent'](_0x2f030e[_0x30ea2a(0x237)]);_0x58facf[_0x30ea2a(0x361)+'onten'+'t']=_0x42e697,_0x258e43['appen'+'dChil'+'d'](_0x58facf),_0x4ea021=_0x28f5fc(),_0x1d0e95['appen'+'dChil'+'d'](_0x224d1e),_0x52a519(()=>_0x3b67fb[_0x30ea2a(0x576)+_0x30ea2a(0x37e)][_0x30ea2a(0x172)]('shown'));}}return _0x41cae6;}else try{_0x14f357['enabl'+'ed']=!!_0x13bb7d;}catch(_0x207f94){}}var _0x3c2c46=[{'id':_0x160913[_0x52522e(0x21a)],'label':'Comba'+'t'},{'id':_0x52522e(0x44c),'label':_0x52522e(0x40a)},{'id':_0x160913[_0x52522e(0x2bf)],'label':_0x52522e(0x588)+'l'},{'id':_0x160913[_0x52522e(0x509)],'label':'Misc'},{'id':_0x160913[_0x52522e(0x21c)],'label':_0x160913[_0x52522e(0x446)]}];function _0x32374a(){var _0x4afe9c=_0x52522e,_0x23f9b9=_0x134b04['safeM'+_0x4afe9c(0x472)]?_0x174548[_0x4afe9c(0x15d)]:_0x134b04['uwmk']?_0x174548['GvfeO'](_0x174548[_0x4afe9c(0x5b6)](_0x174548[_0x4afe9c(0x60a)](_0x174548[_0x4afe9c(0x528)](_0x174548['EnBOq']+(_0x134b04['hooks'+_0x4afe9c(0x537)]?_0x134b04['hooks'+'Ok']+'/'+_0x134b04[_0x4afe9c(0x3ef)+_0x4afe9c(0x537)]+('\x20hook'+'s'):'0\x20hoo'+_0x4afe9c(0xe4)+_0x4afe9c(0x393)+'all\x20o'+'ff)'),'\x20|\x20ga'+'me\x20'),_0x134b04['gameL'+'oaded']?'loade'+'d':'loadi'+'ng')+_0x174548[_0x4afe9c(0x111)]+(_0x134b04[_0x4afe9c(0x342)+'ers']?'held':'none'),_0x174548[_0x4afe9c(0x608)]),_0x134b04[_0x4afe9c(0x644)+_0x4afe9c(0x23d)]?'held':'none'):'UWMK\x20'+'MISSI'+'NG\x20—\x20'+'overl'+'ay\x20on'+_0x4afe9c(0x360)+'einst'+_0x4afe9c(0x51e)+_0x4afe9c(0x57b)+_0x4afe9c(0x4b2)+'ipt)';if(_0x134b04[_0x4afe9c(0x283)+'rror'])_0x23f9b9+=_0x174548[_0x4afe9c(0x34e)](_0x4afe9c(0x58f)+_0x4afe9c(0x43e),_0x134b04['lastE'+_0x4afe9c(0x5e4)]);return _0x174548[_0x4afe9c(0x128)](_0x21acc0,_0x174548[_0x4afe9c(0x3f2)],_0x23f9b9,_0x134b04[_0x4afe9c(0x338)],null,[_0x7c1ced('240\x20F'+'PS\x20un'+_0x4afe9c(0x4ee),_0x174548[_0x4afe9c(0x185)],_0x5b95ed('Apply',()=>{var _0x34e89c=_0x4afe9c;try{if(_0x3cfef3)_0x3cfef3['call']('Unity'+_0x34e89c(0x5b8)+'e.App'+'licat'+_0x34e89c(0x3eb),_0x34e89c(0x329)+_0x34e89c(0x3cf)+'Frame'+'Rate',[0x1*0x19c7+-0x1f3+-0x5*0x494]);}catch(_0x4c1049){}}))]);}function _0xa1df24(_0x1bc206){var _0x17c8ca=_0x52522e,_0xfab3d8={'rnAoG':function(_0x5252b2){return _0x5252b2();},'vqfXE':_0x17c8ca(0x219)+'e','wVOqz':function(_0x4b1ab2,_0x54e5fb){return _0x4b1ab2===_0x54e5fb;},'jjGMe':function(_0x335e72,_0x5956f4){return _0x335e72===_0x5956f4;},'DEfZv':'OdFYX','iiyVk':function(_0x22d75d){return _0x22d75d();},'epreA':_0x17c8ca(0x56c),'XctXN':function(_0x4e5ba9){return _0x4e5ba9();},'iygaU':function(_0x2ef5ee){return _0x2ef5ee();},'vcCnF':_0x17c8ca(0x42c),'qEEbo':function(_0x35f90b){return _0x35f90b();},'FniZN':_0x17c8ca(0x4b1),'rSTWz':function(_0x2d6332,_0x14021e){return _0x2d6332*_0x14021e;},'EXOAb':_0x17c8ca(0x1af)+_0x17c8ca(0x3b4)+'-seri'+'f,sys'+_0x17c8ca(0x42a)+_0x17c8ca(0x5d9)+'s-ser'+'if','bGilh':function(_0x34cd15,_0x155704){return _0x34cd15+_0x155704;},'UTkWc':function(_0x1fed56){var _0x3bf12c=_0x17c8ca;return _0x160913[_0x3bf12c(0x5d7)](_0x1fed56);},'uNQXm':'18|20'+_0x17c8ca(0x43d)+'3|4|1'+'7|19|'+_0x17c8ca(0x543)+_0x17c8ca(0x62d)+'|7|0|'+_0x17c8ca(0x31f)+_0x17c8ca(0x4ec)+_0x17c8ca(0x241)+'|12|1'+_0x17c8ca(0x2fb)+'6','rgfid':function(_0x9c4b3b,_0x22737f){return _0x9c4b3b-_0x22737f;},'LTcHC':function(_0xa8c74,_0x7786d4){var _0x12a597=_0x17c8ca;return _0x160913[_0x12a597(0x23f)](_0xa8c74,_0x7786d4);},'FoJqv':function(_0x4074e5,_0x2c8c4a){return _0x4074e5-_0x2c8c4a;},'BsuVG':function(_0x562c6d,_0x1712c4){return _0x562c6d+_0x1712c4;},'Baosb':function(_0x2a008d,_0x1b25ca){return _0x2a008d-_0x1b25ca;},'DZdgJ':function(_0x27c4bd,_0x54b8ee){return _0x27c4bd*_0x54b8ee;},'hRccQ':function(_0x25fcc5,_0x101aaa){return _0x25fcc5/_0x101aaa;},'ZizJy':function(_0x460509,_0x1a579f){var _0x7b24d4=_0x17c8ca;return _0x160913[_0x7b24d4(0x4e0)](_0x460509,_0x1a579f);},'YJOFW':function(_0x2c03db,_0x51125e){return _0x2c03db(_0x51125e);},'BEwlw':_0x17c8ca(0x2e6)};if(_0x160913[_0x17c8ca(0x4e6)](_0x1bc206,_0x160913[_0x17c8ca(0x21a)]))return[_0x32374a(),_0x21acc0('God\x20M'+_0x17c8ca(0x472),'Block'+_0x17c8ca(0x635)+_0x17c8ca(0x24c)+_0x17c8ca(0x1d6)+_0x17c8ca(0x55d)+'keHea'+_0x17c8ca(0x40b)+_0x17c8ca(0x27f)+_0x17c8ca(0x14c)+_0x17c8ca(0x312)+'lDie,'+'\x20so\x20n'+_0x17c8ca(0x320)+_0x17c8ca(0x485)+'\x20hurt'+'\x20or\x20k'+_0x17c8ca(0x4e5)+_0x17c8ca(0x20e),_0x596ed7[_0x17c8ca(0x35d)],_0x40725d=>{var _0x1a7b66=_0x17c8ca;_0x596ed7[_0x1a7b66(0x35d)]=_0x40725d,_0xfab3d8['rnAoG'](_0x2d259f),_0x21630a('god',_0x40725d),_0x21630a(_0xfab3d8['vqfXE'],_0x40725d);},[]),_0x21acc0(_0x17c8ca(0x1cf)+'coil','Skips'+'\x20Reco'+'ilMot'+_0x17c8ca(0x187)+_0x17c8ca(0x196)+'o\x20the'+'\x20reco'+_0x17c8ca(0x5d2)+_0x17c8ca(0x1b8)+_0x17c8ca(0x582)+'r\x20adv'+'ance.',_0x596ed7['noRec'+_0x17c8ca(0x183)],_0x55a352=>{var _0x4e0f55=_0x17c8ca;_0x596ed7[_0x4e0f55(0x217)+'oil']=_0x55a352,_0x2d259f(),_0x174548['xCSyx'](_0x21630a,_0x174548[_0x4e0f55(0x477)],_0x55a352);},[]),_0x160913['ppuUY'](_0x21acc0,_0x17c8ca(0x2f4)+'read',_0x160913[_0x17c8ca(0x1c5)],_0x596ed7['noSpr'+_0x17c8ca(0x391)],_0x16e08d=>{var _0x4fd68c=_0x17c8ca;if(_0x4fd68c(0x405)===_0x174548[_0x4fd68c(0x465)]){var _0x264841=_0x3b7b1b[_0x4fd68c(0x305)+_0x4fd68c(0x368)+_0x4fd68c(0x429)](_0x2187fe);if(_0x264841&&_0xfab3d8[_0x4fd68c(0x26d)](_0x1c6b47,_0x4fd68c(0x23c)+'creen'+'-banr'+'s')){var _0x250f08=_0x264841[_0x4fd68c(0x1ec)+_0x4fd68c(0x24f)];for(var _0x41cec7=-0x7b4+0x3b*-0x69+0x1fe7;_0x41cec7<_0x250f08[_0x4fd68c(0x1e6)+'h'];_0x41cec7++){if(_0x250f08[_0x41cec7]['id']&&_0xfab3d8[_0x4fd68c(0x250)](_0x250f08[_0x41cec7]['id'][_0x4fd68c(0x2ed)+'Of']('kour-'+'io_'),0x379*-0x9+-0x1bd3+0x3b14))_0x250f08[_0x41cec7][_0x4fd68c(0x49d)][_0x4fd68c(0x520)+'ay']=_0x4fd68c(0x195);}}else{if(_0x264841)_0x264841[_0x4fd68c(0x49d)][_0x4fd68c(0x520)+'ay']=_0x4fd68c(0x195);}}else _0x596ed7[_0x4fd68c(0x1b4)+'ead']=_0x16e08d,_0x174548[_0x4fd68c(0x29e)](_0x2d259f);},[]),_0x21acc0('Rapid'+_0x17c8ca(0x194)+'\x20[EXP'+']','Scale'+_0x17c8ca(0x300)+_0x17c8ca(0x1e7)+_0x17c8ca(0x43a)+_0x17c8ca(0x33a)+_0x17c8ca(0x52e)+_0x17c8ca(0xed)+_0x17c8ca(0x28b)+'erver'+_0x17c8ca(0x147)+'still'+_0x17c8ca(0x37d)+_0x17c8ca(0x57e)+'s.',_0x596ed7[_0x17c8ca(0x2aa)+_0x17c8ca(0x3cd)],_0xaccabf=>{var _0x59dc15=_0x17c8ca;_0x174548[_0x59dc15(0x5c9)](_0x174548['GhTeE'],'fDlfO')?(_0x596ed7[_0x59dc15(0x2aa)+'Exp']=_0xaccabf,_0x174548[_0x59dc15(0x29e)](_0x2d259f)):_0x71930d['setIt'+'em'](_0x59dc15(0x444)+_0x59dc15(0x57f)+'r.v1',_0x39296b['strin'+_0x59dc15(0x586)](_0x1fe55d));},[]),_0x160913[_0x17c8ca(0x42f)](_0x21acc0,'Damag'+'e\x20[EX'+'P]',_0x17c8ca(0x505)+'rites'+'\x20Over'+_0x17c8ca(0x55f)+_0x17c8ca(0x607)+_0x17c8ca(0x521)+_0x17c8ca(0x452)+_0x17c8ca(0x110)+'le\x20if'+'\x20the\x20'+_0x17c8ca(0x47d)+'r\x20val'+_0x17c8ca(0x12e)+'s.',_0x596ed7[_0x17c8ca(0x4a8)+_0x17c8ca(0x626)],_0x35192e=>{var _0x16dd90=_0x17c8ca;if(_0xfab3d8[_0x16dd90(0x48d)]!==_0x16dd90(0x197))_0x596ed7[_0x16dd90(0x4a8)+'eExp']=_0x35192e,_0xfab3d8[_0x16dd90(0x3c3)](_0x2d259f);else return _0x897cc7[_0x16dd90(0x3d5)](_0x16dd90(0x50c)+'ra-ko'+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0x16dd90(0x141),_0x182ffb,_0x86da0d&&_0x3aceaa[_0x16dd90(0x33d)+'ge']),null;},[_0x7c1ced('Damag'+'e\x20val'+'ue',null,_0x160913['UxeVd'](_0x13f8ff,_0x596ed7['damag'+_0x17c8ca(0x3f8)+'e'],0x209a+0x73*-0x4b+0x121,0xa22+0x10f+-0x93d,0x24ad+0x2420+-0x48c8,_0x44679c=>{var _0x189851=_0x17c8ca;_0xfab3d8['epreA']==='oVQze'?(_0x596ed7[_0x189851(0x4a8)+_0x189851(0x3f8)+'e']=_0x44679c,_0xfab3d8[_0x189851(0x258)](_0x2d259f)):(_0x25b950['shado'+'wColo'+'r']=_0x443e25,_0x836c6e[_0x189851(0x1d2)+_0x189851(0x20b)]=-0x21*-0xef+0x2*-0xdc2+-0x33d,_0x331d9a['fill'](),_0x803e06['shado'+_0x189851(0x20b)]=0xf7a+0x9*-0xb1+0x941*-0x1);}))]),_0x21acc0(_0x17c8ca(0x155)+_0x17c8ca(0x390)+_0x17c8ca(0x3f9)+'EXP]',_0x17c8ca(0x11c)+_0x17c8ca(0x52f)+_0x17c8ca(0x468)+'pon\x27s'+_0x17c8ca(0x18a)+'ed\x20am'+_0x17c8ca(0x377)+'\x20999\x20'+_0x17c8ca(0x2c1)+_0x17c8ca(0x5f4)+'s.',_0x596ed7['infAm'+_0x17c8ca(0x596)],_0x5b4ca6=>{var _0x47bedf=_0x17c8ca;'eILJI'===_0xfab3d8[_0x47bedf(0x417)]?(_0x596ed7['infAm'+_0x47bedf(0x596)]=_0x5b4ca6,_0xfab3d8[_0x47bedf(0x476)](_0x2d259f)):(_0xce8b39['preve'+_0x47bedf(0x19e)+'ault'](),_0xfab3d8[_0x47bedf(0x33b)](_0x4e13e7));},[_0x160913['OPHOx'](_0x72e37a,_0x17c8ca(0x5d1)+_0x17c8ca(0x1b9)+_0x17c8ca(0x41b)+_0x17c8ca(0x2ce)+_0x17c8ca(0x549)+'he\x20de'+_0x17c8ca(0x431)+_0x17c8ca(0x143)+_0x17c8ca(0x4a7)+_0x17c8ca(0x387)+'where'+'.')])];if(_0x1bc206===_0x17c8ca(0x44c)){if(_0x160913['AYgoL'](_0x160913[_0x17c8ca(0x4d0)],_0x160913['lvQeS']))return[_0x160913[_0x17c8ca(0x42f)](_0x21acc0,'Speed','Scale'+'s\x20all'+_0x17c8ca(0x226)+_0x17c8ca(0x589)+_0x17c8ca(0x3a7)+_0x17c8ca(0x1aa)+_0x17c8ca(0x176)+'ts\x20pl'+'us\x20ac'+_0x17c8ca(0x57a)+'ation'+'.',_0x160913['Flnyz'](_0x596ed7[_0x17c8ca(0x1aa)+'Pct'],0x2b*0x13+-0xf19+0x2*0x626),null,[_0x160913[_0x17c8ca(0x592)](_0x7c1ced,_0x17c8ca(0x2ab)+'\x20%',_0x17c8ca(0x2e7)+_0x17c8ca(0x139)+_0x17c8ca(0x4e7),_0x160913[_0x17c8ca(0x418)](_0x13f8ff,_0x596ed7[_0x17c8ca(0x1aa)+_0x17c8ca(0x17a)],0x1*-0xc37+0x68*0xb+0x1*0x7f1,-0xc4*-0x10+0xb7*0x15+-0x1*0x1a17,0x1e03+0x1283+-0x3081*0x1,_0x4c3b97=>{_0x596ed7['speed'+'Pct']=_0x4c3b97,_0x2d259f();}))]),_0x21acc0('Jump\x20'+_0x17c8ca(0x601)+'vity','Scale'+_0x17c8ca(0x535)+_0x17c8ca(0x368)+_0x17c8ca(0x5be)+_0x17c8ca(0x1ea)+_0x17c8ca(0x50b)+'both\x20'+'gravi'+_0x17c8ca(0x1b0)+_0x17c8ca(0x381),_0x160913['uNWQb'](_0x596ed7['jumpP'+'ct'],-0x1473+-0x85c*-0x1+0xc7b*0x1)||_0x160913[_0x17c8ca(0x10b)](_0x596ed7[_0x17c8ca(0x4f4)+'tyPct'],-0xa5*0x37+0x4fc*0x5+0xaeb),null,[_0x160913[_0x17c8ca(0x204)](_0x7c1ced,_0x160913['UHbJo'],null,_0x13f8ff(_0x596ed7[_0x17c8ca(0x5ea)+'ct'],0x1c88+0xa21+0xe5*-0x2b,-0x2b5*0xa+-0x1d53*-0x1+0x1*-0x115,-0x2f*0xbc+-0x1*0x1fb6+0x3*0x1615,_0xda6a02=>{var _0x56c06c=_0x17c8ca;_0x596ed7['jumpP'+'ct']=_0xda6a02,_0x174548[_0x56c06c(0x2a7)](_0x2d259f);})),_0x7c1ced(_0x160913[_0x17c8ca(0x33c)],_0x17c8ca(0x3f4)+'\x20=\x20fl'+'oaty',_0x160913[_0x17c8ca(0x42f)](_0x13f8ff,_0x596ed7[_0x17c8ca(0x4f4)+_0x17c8ca(0x2d8)],0xccd+0x25ea+0x32ad*-0x1,0x9*-0x28f+-0x17f*0x19+0x1*0x3d36,-0x48f*-0x6+-0x43f*0x9+0xae2*0x1,_0x4f8f00=>{var _0x33a8e3=_0x17c8ca;_0x596ed7[_0x33a8e3(0x4f4)+_0x33a8e3(0x2d8)]=_0x4f8f00,_0x174548[_0x33a8e3(0x1f6)](_0x2d259f);}))]),_0x160913['TJQVh'](_0x21acc0,_0x17c8ca(0x24b)+_0x17c8ca(0x265),_0x17c8ca(0x578)+_0x17c8ca(0x535)+_0x17c8ca(0x368)+'.last'+'JumpT'+_0x17c8ca(0x2b4)+_0x17c8ca(0x3e6)+_0x17c8ca(0x4ef)+'\x20cool'+'down\x20'+'never'+_0x17c8ca(0x336)+'ies.',_0x596ed7['bhop'],_0x2d0353=>{var _0x4dc4b2=_0x17c8ca;_0x174548[_0x4dc4b2(0x13a)]==='PlnuX'?(_0x3354d2[_0x4dc4b2(0x63a)]=_0xfab3d8[_0x4dc4b2(0x1dc)]+_0x490ffc[_0x4dc4b2(0x38d)](_0xfab3d8['rSTWz'](-0x464+-0x8c*0x29+0x1ad9*0x1,_0x5a92c3))+_0xfab3d8[_0x4dc4b2(0x5ac)],_0x1a35f5[_0x4dc4b2(0x126)+'tyle']=_0x7f6fbd?'#fff':'rgba('+_0x4dc4b2(0x222)+'35,24'+'0,0.5'+'5)',_0x53b844[_0x4dc4b2(0x2c7)+_0x4dc4b2(0x3b5)](_0x2d4054,_0x4f3e3d+_0x31c7ec/(-0x2339+0x3*-0xbd5+0x66e*0xb),_0xfab3d8['bGilh'](_0xfab3d8['bGilh'](_0x5729f6,_0x138610/(-0x114f+-0x1bff*0x1+0x1*0x2d50)),(0x1348+-0x11ab+-0x195)*_0x60d6a7))):(_0x596ed7[_0x4dc4b2(0x41a)]=_0x2d0353,_0x2d259f());},[])];else _0x282fc4['hookN'+_0x17c8ca(0x1e2)+'il']=_0x21c409,_0x161dc2();}if(_0x160913[_0x17c8ca(0x255)](_0x1bc206,_0x160913[_0x17c8ca(0x2bf)]))return[_0x160913['UxeVd'](_0x21acc0,_0x17c8ca(0x2fa)+_0x17c8ca(0x3e5),_0x17c8ca(0x571)+'+\x20LMB'+'/RMB\x20'+_0x17c8ca(0x4c7)+'ce\x20ov'+_0x17c8ca(0x1e0)+'.',_0x596ed7[_0x17c8ca(0x191)+'rokes'],_0x19e149=>{var _0x4167f3=_0x17c8ca;_0x4167f3(0x27d)!=='FhsOJ'?_0x280839=_0x492e42&&_0x3dcf9a[_0x4167f3(0x2dc)]?_0x438f36['val']():0x60e+0x83*0x43+-0x2857:(_0x596ed7['keyst'+_0x4167f3(0x3e5)]=_0x19e149,_0x2d259f());},[_0x7c1ced(_0x17c8ca(0x5a8)+_0x17c8ca(0x3eb),null,_0x1a83a6(_0x596ed7['ksPos'],[['bl','Botto'+'m\x20lef'+'t'],['br',_0x17c8ca(0x306)+'m\x20rig'+'ht'],['ml',_0x160913['ifawa']]],_0x44e6ef=>{var _0x48ded1=_0x17c8ca;_0x596ed7[_0x48ded1(0x542)]=_0x44e6ef,_0x174548[_0x48ded1(0x23b)](_0x2d259f);})),_0x7c1ced('Size',null,_0x160913['TJQVh'](_0x13f8ff,_0x596ed7[_0x17c8ca(0x273)+'le'],0x2*0x951+-0x487*-0x8+-0x19d*0x22+0.6,-0x2060+0x377*-0x1+-0x3e*-0x94+0.6000000000000001,0x15ec+0x1b6+-0x17a2+0.05,_0x2d4a8c=>{var _0x1258c6=_0x17c8ca;_0x596ed7[_0x1258c6(0x273)+'le']=_0x2d4a8c,_0x2d259f();})),_0x160913['AgrBl'](_0x7c1ced,'CPS\x20r'+'eadou'+'t',null,_0x33023e(_0x596ed7['ksCps'],_0x385c3f=>{_0x596ed7['ksCps']=_0x385c3f,_0x2d259f();}))]),_0x21acc0(_0x17c8ca(0x64b)+_0x17c8ca(0x17d),_0x17c8ca(0x289)+_0x17c8ca(0x4f3)+_0x17c8ca(0x2e4)+'rossh'+'air.',_0x596ed7['cross'+_0x17c8ca(0x17d)],_0x1eddff=>{var _0x3456fb=_0x17c8ca;_0x596ed7[_0x3456fb(0x301)+'hair']=_0x1eddff,_0x2d259f();},[_0x7c1ced(_0x17c8ca(0x3c0),null,_0x13f8ff(_0x596ed7['chSiz'+'e'],0x133*0x5+-0x7*0x217+0x8a2+0.5,0x1a56*0x1+0x1*-0x269f+0xc4b+0.5,0xdb1+0xf04+-0x1cb5+0.1,_0x1207bd=>{_0x596ed7['chSiz'+'e']=_0x1207bd,_0x2d259f();})),_0x7c1ced('Color',null,_0x1a3897(_0x596ed7[_0x17c8ca(0x5b1)+'or'],_0x4706ed=>{var _0xff345d=_0x17c8ca;_0x596ed7[_0xff345d(0x5b1)+'or']=_0x4706ed,_0xfab3d8[_0xff345d(0x33b)](_0x2d259f);}))]),_0x160913[_0x17c8ca(0x418)](_0x21acc0,_0x17c8ca(0x5ae)+_0x17c8ca(0x1a0),_0x160913[_0x17c8ca(0x1c6)],_0x596ed7['fps'],null,[_0x160913[_0x17c8ca(0x204)](_0x7c1ced,_0x160913['xlpDe'],null,_0x160913['KBDBS'](_0x33023e,_0x596ed7['fps'],_0x538930=>{var _0x25eff4=_0x17c8ca;_0x596ed7[_0x25eff4(0x37b)]=_0x538930,_0x174548[_0x25eff4(0x29e)](_0x2d259f);})),_0x72e37a(_0x17c8ca(0x587)+_0x17c8ca(0x2ec)+_0x17c8ca(0x52b)+_0x17c8ca(0x16a)+_0x17c8ca(0x4be)+'ild\x20h'+_0x17c8ca(0x349)+_0x17c8ca(0x357)+'isibl'+'ePlay'+_0x17c8ca(0x165)+_0x17c8ca(0x433)+'gybac'+'k\x20on.')])];if(_0x1bc206===_0x160913['bsEQI'])return[_0x21acc0('Adblo'+'ck',_0x160913[_0x17c8ca(0x453)],_0x596ed7[_0x17c8ca(0x3f6)+'ck'],_0x27a9e5=>{_0x596ed7['adblo'+'ck']=_0x27a9e5,_0x2d259f();},[_0x72e37a('Takes'+_0x17c8ca(0x1b1)+'ct\x20on'+'\x20relo'+_0x17c8ca(0x1be)+_0x17c8ca(0x585)+'ggled'+'.')])];return[_0x160913['fFQLk'](_0x21acc0,_0x160913[_0x17c8ca(0x37a)],'Skips'+'\x20UWMK'+'\x20enti'+'rely\x20'+_0x17c8ca(0x499)+'WASM\x20'+'hooks'+_0x17c8ca(0x646)+_0x17c8ca(0x641)+'\x20if\x20m'+_0x17c8ca(0xf4)+'s\x20won'+'\x27t\x20st'+'art.',_0x596ed7['safeM'+'ode'],_0x5aca58=>{var _0x458743=_0x17c8ca;_0x596ed7['safeM'+'ode']=_0x5aca58,_0x2d259f(),location[_0x458743(0x532)+'d']();},[_0x72e37a(_0x160913[_0x17c8ca(0x36a)])]),_0x160913[_0x17c8ca(0x4f1)](_0x21acc0,_0x160913[_0x17c8ca(0x56d)],_0x17c8ca(0x613)+_0x17c8ca(0x367)+'nstal'+_0x17c8ca(0x437)+_0x17c8ca(0x4a6)+'tramp'+_0x17c8ca(0x461)+'\x20for\x20'+_0x17c8ca(0x2a4)+'hole\x20'+_0x17c8ca(0x3b6)+_0x17c8ca(0x404)+'\x20ALL\x20'+_0x17c8ca(0x529)+_0x17c8ca(0x1f9)+_0x17c8ca(0x2ae)+_0x17c8ca(0x61c)+'ignat'+_0x17c8ca(0x51f)+_0x17c8ca(0x60b)+'oes\x20n'+_0x17c8ca(0x163)+_0x17c8ca(0x56e)+'he\x20re'+_0x17c8ca(0x1c0)+_0x17c8ca(0x5e7)+'throw'+_0x17c8ca(0x294)+'nctio'+'n\x20sig'+_0x17c8ca(0x583)+'e\x20mis'+'match'+_0x17c8ca(0x15e)+_0x17c8ca(0x62e)+'nt\x20it'+_0x17c8ca(0x513)+'alled'+'.\x20Tur'+_0x17c8ca(0x1c2)+'m\x20on\x20'+'one\x20a'+'t\x20a\x20t'+'ime,\x20'+_0x17c8ca(0x532)+_0x17c8ca(0x580)+_0x17c8ca(0x388)+'\x20whic'+_0x17c8ca(0x25a)+'\x20your'+_0x17c8ca(0x1d3)+_0x17c8ca(0x22e)+'kes\x20o'+'n.',_0x596ed7['hookG'+'od']||_0x596ed7[_0x17c8ca(0x2a8)+_0x17c8ca(0x1f0)]||_0x596ed7[_0x17c8ca(0x4bd)+_0x17c8ca(0x1e2)+'il']||_0x596ed7['hookC'+'aptur'+'e'],_0x2b2cbe=>{var _0x5a3202=_0x17c8ca,_0x219dec=('0|1|4'+_0x5a3202(0x365)+'3')[_0x5a3202(0x5d8)]('|'),_0x44be01=-0x9*-0x117+-0xbb2+0x1e3;while(!![]){switch(_0x219dec[_0x44be01++]){case'0':_0x596ed7['hookG'+'od']=_0x2b2cbe;continue;case'1':_0x596ed7['hookG'+_0x5a3202(0x1f0)]=_0x2b2cbe;continue;case'2':_0xfab3d8[_0x5a3202(0x3b0)](_0x2d259f);continue;case'3':location[_0x5a3202(0x532)+'d']();continue;case'4':_0x596ed7[_0x5a3202(0x4bd)+'oReco'+'il']=_0x2b2cbe;continue;case'5':_0x596ed7['hookC'+_0x5a3202(0x552)+'e']=_0x2b2cbe;continue;}break;}},[_0x160913[_0x17c8ca(0x1b2)](_0x72e37a,'Appli'+'es\x20on'+_0x17c8ca(0x53f)+'ad.'),_0x7c1ced(_0x160913['HScwx'],null,_0x33023e(_0x596ed7[_0x17c8ca(0x2a8)+'od'],_0x24709e=>{var _0x16444b=_0x17c8ca;_0x596ed7[_0x16444b(0x2a8)+'od']=_0x24709e,_0xfab3d8[_0x16444b(0x3b0)](_0x2d259f);})),_0x7c1ced('godDi'+_0x17c8ca(0x62b)+_0x17c8ca(0x14c)+'.Loca'+'lDie)',null,_0x33023e(_0x596ed7[_0x17c8ca(0x2a8)+_0x17c8ca(0x1f0)],_0x5b3600=>{var _0x2543d7=_0x17c8ca;_0x596ed7[_0x2543d7(0x2a8)+_0x2543d7(0x1f0)]=_0x5b3600,_0x2d259f();})),_0x160913['CJKeI'](_0x7c1ced,'noRec'+_0x17c8ca(0x546)+_0x17c8ca(0x44b)+_0x17c8ca(0x5c0)+'on.Ti'+_0x17c8ca(0x14b),null,_0x160913['MVZjv'](_0x33023e,_0x596ed7[_0x17c8ca(0x4bd)+'oReco'+'il'],_0x1b9e98=>{var _0x47fff6=_0x17c8ca;if(_0xfab3d8['wVOqz'](_0x47fff6(0x2e6),_0xfab3d8[_0x47fff6(0x277)]))_0x596ed7['hookN'+_0x47fff6(0x1e2)+'il']=_0x1b9e98,_0x2d259f();else{var _0x5c1ac5=_0xfab3d8[_0x47fff6(0x406)][_0x47fff6(0x5d8)]('|'),_0x51488a=0x8c*0x30+-0x2*-0xec3+0x1be3*-0x2;while(!![]){switch(_0x5c1ac5[_0x51488a++]){case'0':_0xd118d8['lineT'+'o'](_0xfab3d8['rgfid'](_0x53d4ae,_0x3fced6),_0x170972);continue;case'1':_0x2c5814[_0x47fff6(0x5fc)+'o'](_0xfab3d8[_0x47fff6(0x50f)](_0x53d4ae+_0x3fced6,_0xdbb9e4),_0x170972);continue;case'2':var _0x3fced6=(0x31*0x35+0x10*0x1d9+-0x27af)*_0x21e5aa,_0xdbb9e4=(0x517*0x1+-0x71e+0x20f)*_0x21e5aa;continue;case'3':_0x4b37f9[_0x47fff6(0x5fc)+'o'](_0x53d4ae,_0x170972+_0x3fced6+_0xdbb9e4);continue;case'4':_0x23bff5['strok'+'eStyl'+'e']=_0xbcf65a;continue;case'5':_0x16c070[_0x47fff6(0x5fc)+'o'](_0x53d4ae,_0x170972-_0x3fced6);continue;case'6':_0x13803d[_0x47fff6(0x4f5)+'re']();continue;case'7':_0x11de5b[_0x47fff6(0x4a1)+'o'](_0xfab3d8['FoJqv'](_0x53d4ae-_0x3fced6,_0xdbb9e4),_0x170972);continue;case'8':_0x5c440a['moveT'+'o'](_0x53d4ae,_0xfab3d8[_0x47fff6(0x50f)](_0x170972,_0x3fced6));continue;case'9':_0x28b8d0['strok'+'e']();continue;case'10':_0x5e3290[_0x47fff6(0x4a1)+'o'](_0xfab3d8[_0x47fff6(0x173)](_0x53d4ae,_0x3fced6),_0x170972);continue;case'11':_0x54ea80[_0x47fff6(0x1d2)+'wColo'+'r']=_0xbcf65a;continue;case'12':_0x4a91d9['begin'+'Path']();continue;case'13':_0x3890c6['moveT'+'o'](_0x53d4ae,_0xfab3d8[_0x47fff6(0x1f5)](_0x170972,_0x3fced6)-_0xdbb9e4);continue;case'14':_0x364063[_0x47fff6(0x55a)](_0x53d4ae,_0x170972,_0xfab3d8['DZdgJ'](-0x23*-0x65+-0x8a6+0x6e*-0xc+0.6000000000000001,_0x21e5aa),0x2*-0xe06+0x2*-0xd06+0x3618,_0x42f897['PI']*(-0x442+-0xbb*0x24+0x1e90));continue;case'15':_0x15caa5['fill']();continue;case'16':_0x1470cc['shado'+_0x47fff6(0x20b)]=0x10f4+0xca*0x1c+-0x4a*0x87;continue;case'17':_0x337c2f[_0x47fff6(0x126)+'tyle']=_0xbcf65a;continue;case'18':var _0x53d4ae=_0xfab3d8['hRccQ'](_0x57d6ee['width'],-0x29*-0xe5+-0x2*-0x18a+-0x27bf),_0x170972=_0xfab3d8['ZizJy'](_0x124ad9['heigh'+'t'],-0x1*0x23f6+-0x6b*-0x17+0x1a5b);continue;case'19':_0x18c320[_0x47fff6(0x544)+'idth']=_0x5d61c3[_0x47fff6(0x319)](0x1d20+0x2065+-0x3d84+0.5,(-0x1*0x160f+0x1*-0x2582+0x1*0x3b93)*_0x21e5aa);continue;case'20':var _0x21e5aa=_0xfab3d8['YJOFW'](_0x2c210f,_0x5e6407[_0x47fff6(0x1dd)+'e'])||-0x7*0x211+0x1b*0xec+0x4*-0x29b;continue;case'21':var _0xbcf65a=/^#[0-9a-f]{6}$/i[_0x47fff6(0x5c1)](_0x25e8b8['chCol'+'or'])?_0x39a2b0[_0x47fff6(0x5b1)+'or']:_0x47fff6(0x5c7)+'9d';continue;case'22':_0x53404f[_0x47fff6(0x1de)+_0x47fff6(0x425)]();continue;case'23':_0x586f9a['save']();continue;}break;}}})),_0x7c1ced(_0x17c8ca(0x311)+_0x17c8ca(0x3ec)+_0x17c8ca(0x61d)+'eRunn'+_0x17c8ca(0x36e)+'\x20IsGr'+_0x17c8ca(0x13b)+'d)',_0x160913[_0x17c8ca(0x47f)],_0x160913[_0x17c8ca(0x4b8)](_0x33023e,_0x596ed7[_0x17c8ca(0xe9)+_0x17c8ca(0x552)+'e'],_0xb8b6ea=>{_0x596ed7['hookC'+'aptur'+'e']=_0xb8b6ea,_0x2d259f();}))]),_0x160913[_0x17c8ca(0x4f1)](_0x21acc0,'ACTk\x20'+'Kille'+'r',_0x17c8ca(0x12b)+_0x17c8ca(0x3ac)+_0x17c8ca(0x443)+'age\x20d'+'etect'+_0x17c8ca(0x5b5)+_0x17c8ca(0x113)+_0x17c8ca(0x5c8)+_0x17c8ca(0x28e)+'topDe'+'tecti'+_0x17c8ca(0x275)+_0x17c8ca(0xf9)+_0x17c8ca(0x564),_0x596ed7[_0x17c8ca(0x262)+_0x17c8ca(0x36b)],_0x176102=>{var _0x281aeb=_0x17c8ca;_0x596ed7['actkK'+_0x281aeb(0x36b)]=_0x176102,_0x2d259f();},[_0x160913['ZCbMv'](_0x72e37a,_0x17c8ca(0x1cd)+_0x17c8ca(0x3ce)+_0x17c8ca(0x321)+_0x17c8ca(0x457)+'atly\x20'+'raise'+'\x20ban\x20'+_0x17c8ca(0x259)+_0x17c8ca(0x463)+_0x17c8ca(0x496)+_0x17c8ca(0x54e)+_0x17c8ca(0x158),!![])]),_0x160913['ppuUY'](_0x21acc0,'Dange'+'r','These'+'\x20leav'+'e\x20ser'+'ver-v'+'isibl'+'e\x20tra'+_0x17c8ca(0x30a),!![],null,[_0x160913[_0x17c8ca(0x592)](_0x7c1ced,'Wipe\x20'+_0x17c8ca(0x10e)+'tting'+'s',null,_0x160913['YJNmj'](_0x5b95ed,'Reset',()=>{var _0x105427=_0x17c8ca;_0x596ed7={..._0x516f06},_0xfab3d8[_0x105427(0x3c3)](_0x2d259f),location['reloa'+'d']();}))])];}var _0xfffe08=null;function _0x1fed3e(_0x260253){var _0x3f493f=_0x52522e;_0x436542=_0x260253;if(!_0xfffe08){var _0x3875c0=document[_0x3f493f(0x52c)+_0x3f493f(0x1ab)+_0x3f493f(0x28a)](_0x160913[_0x3f493f(0x109)]);_0x3875c0['textC'+_0x3f493f(0x215)+'t']=_0x3118b0,_0x5101a9[_0x3f493f(0x4ce)+'dChil'+'d'](_0x3875c0),_0xfffe08=_0x3dba05(),_0x5101a9[_0x3f493f(0x4ce)+_0x3f493f(0x54c)+'d'](_0xfffe08),requestAnimationFrame(()=>_0xfffe08['class'+_0x3f493f(0x37e)][_0x3f493f(0x172)](_0x3f493f(0x34a)));}_0xfffe08['class'+'List'][_0x3f493f(0x5b4)+'e']('shown',_0x260253);}function _0x28c7bc(){_0x1fed3e(!_0x436542);}function _0x3dba05(){var _0x1cab3b=_0x52522e,_0x145b15={'VVXjl':function(_0x2d9081,_0x1c6ce6){return _0x174548['tDdze'](_0x2d9081,_0x1c6ce6);},'YUTqN':'SAFE','GroiO':_0x174548[_0x1cab3b(0x441)],'LaNhS':_0x174548[_0x1cab3b(0x17b)],'DPGpF':function(_0x17e651,_0x2f8a68){return _0x17e651+_0x2f8a68;},'FNQTe':function(_0x2bdea5,_0x104fd8){return _0x174548['YkFqJ'](_0x2bdea5,_0x104fd8);},'pIUIJ':_0x174548[_0x1cab3b(0x111)],'XKTyw':_0x1cab3b(0x495),'Njmeg':_0x174548[_0x1cab3b(0x608)],'YXAZs':'none'},_0x1e3a32=document['creat'+_0x1cab3b(0x1ab)+'ent']('div');_0x1e3a32[_0x1cab3b(0x576)+_0x1cab3b(0x4db)]=_0x1cab3b(0x2c3)+_0x1cab3b(0x119);var _0x4428db=document['creat'+'eElem'+_0x1cab3b(0x28a)]('nav');_0x4428db['class'+_0x1cab3b(0x4db)]='mn-si'+'de';var _0x33444d=document[_0x1cab3b(0x52c)+_0x1cab3b(0x1ab)+'ent']('div');_0x33444d[_0x1cab3b(0x576)+_0x1cab3b(0x4db)]=_0x1cab3b(0x10f)+'go',_0x33444d[_0x1cab3b(0x5db)+'HTML']=_0x1cab3b(0x123)+'viewB'+_0x1cab3b(0x55b)+'\x200\x2024'+_0x1cab3b(0x2fc)+_0x1cab3b(0x576)+_0x1cab3b(0x5a2)+_0x1cab3b(0x24e)+_0x1cab3b(0xf7)+'<path'+_0x1cab3b(0x57d)+_0x1cab3b(0x4e2)+'c-1.5'+_0x1cab3b(0x14a)+_0x1cab3b(0x5f3)+_0x1cab3b(0x5e3)+_0x1cab3b(0x5a1)+_0x1cab3b(0x14f)+'8-4.5'+_0x1cab3b(0x5b3)+_0x1cab3b(0x1e1)+_0x1cab3b(0x22f)+_0x1cab3b(0x60f)+_0x1cab3b(0x611)+_0x1cab3b(0x145)+_0x1cab3b(0x2a9)+'fill='+_0x1cab3b(0x4f8)+'\x22\x20str'+_0x1cab3b(0x51b)+'#ff6b'+_0x1cab3b(0x11e)+_0x1cab3b(0x101)+'-widt'+_0x1cab3b(0x162)+_0x1cab3b(0x1cb)+_0x1cab3b(0x2da)+_0x1cab3b(0x30b)+_0x1cab3b(0x594)+'nd\x22\x20s'+_0x1cab3b(0x101)+'-line'+_0x1cab3b(0x1f8)+_0x1cab3b(0x31b)+_0x1cab3b(0x12c)+_0x1cab3b(0x3f3)+_0x1cab3b(0x11d)+'\x2212\x22\x20'+_0x1cab3b(0x278)+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+_0x1cab3b(0x4d9)+_0x1cab3b(0x5b2)+_0x1cab3b(0x153),_0x4428db[_0x1cab3b(0x4ce)+_0x1cab3b(0x54c)+'d'](_0x33444d);var _0x42a109=document[_0x1cab3b(0x52c)+_0x1cab3b(0x1ab)+_0x1cab3b(0x28a)](_0x1cab3b(0x3aa));_0x42a109[_0x1cab3b(0x576)+'Name']='mn-ma'+'in';var _0xeef4ae=document[_0x1cab3b(0x52c)+'eElem'+'ent'](_0x1cab3b(0xe8)+'r');_0xeef4ae[_0x1cab3b(0x576)+_0x1cab3b(0x4db)]=_0x1cab3b(0x1e5)+'p';var _0x545c78=document['creat'+_0x1cab3b(0x1ab)+'ent'](_0x1cab3b(0x3aa));_0x545c78[_0x1cab3b(0x576)+'Name']=_0x174548[_0x1cab3b(0x5f1)];var _0x3f1c0b=document['creat'+'eElem'+'ent']('h2');_0x3f1c0b['class'+'Name']='mn-h',_0x3f1c0b['textC'+_0x1cab3b(0x215)+'t']=_0x174548[_0x1cab3b(0x344)];var _0x29c7c9=document['creat'+_0x1cab3b(0x1ab)+_0x1cab3b(0x28a)](_0x1cab3b(0x4eb));_0x29c7c9[_0x1cab3b(0x576)+'Name']=_0x174548[_0x1cab3b(0x412)],_0x29c7c9[_0x1cab3b(0x361)+'onten'+'t']=_0x174548[_0x1cab3b(0x3c2)],_0x545c78[_0x1cab3b(0x4ce)+'d'](_0x3f1c0b,_0x29c7c9);var _0x1a4490=document[_0x1cab3b(0x52c)+_0x1cab3b(0x1ab)+_0x1cab3b(0x28a)](_0x174548['IUSnE']);_0x1a4490[_0x1cab3b(0x1a1)]=_0x174548['IUSnE'],_0x1a4490[_0x1cab3b(0x576)+_0x1cab3b(0x4db)]=_0x174548['wOnUb'],_0x1a4490['title']=_0x174548[_0x1cab3b(0x4c2)],_0x1a4490['inner'+'HTML']='<svg\x20'+'viewB'+_0x1cab3b(0x55b)+'\x200\x2024'+_0x1cab3b(0x514)+_0x1cab3b(0x5cb)+'\x20d=\x22M'+_0x1cab3b(0x5ed)+_0x1cab3b(0x4e8)+'18\x206\x20'+_0x1cab3b(0x39e)+'/></s'+'vg>',_0x1a4490[_0x1cab3b(0x14e)+'ck']=()=>_0x1fed3e(![]),_0xeef4ae['appen'+'d'](_0x545c78,_0x1a4490);var _0x1094da=document['creat'+_0x1cab3b(0x1ab)+'ent'](_0x1cab3b(0x3aa));_0x1094da['class'+_0x1cab3b(0x4db)]=_0x1cab3b(0x602)+'ls',_0x42a109[_0x1cab3b(0x4ce)+'d'](_0xeef4ae,_0x1094da),_0x1e3a32[_0x1cab3b(0x4ce)+'d'](_0x4428db,_0x42a109);var _0x3b34ab=new Map();for(var _0x47dcb5 of _0x3c2c46){var _0xb5c5ab=_0x174548['DlXwx'][_0x1cab3b(0x5d8)]('|'),_0x5d5eb7=0x7*0x1d9+-0x1c*0xac+-0x23*-0x2b;while(!![]){switch(_0xb5c5ab[_0x5d5eb7++]){case'0':_0x534dc5['title']=_0x47dcb5['label'];continue;case'1':var _0x534dc5=document[_0x1cab3b(0x52c)+'eElem'+_0x1cab3b(0x28a)](_0x1cab3b(0x106)+'n');continue;case'2':_0x534dc5[_0x1cab3b(0x5db)+_0x1cab3b(0x3c5)]='<smal'+'l>'+_0x47dcb5['label']+_0x174548['VhZtB'];continue;case'3':_0x4428db['appen'+'dChil'+'d'](_0x534dc5);continue;case'4':_0x534dc5[_0x1cab3b(0x14e)+'ck']=(_0x29db59=>()=>_0x5cc251(_0x29db59))(_0x47dcb5['id']);continue;case'5':_0x534dc5[_0x1cab3b(0x1a1)]=_0x1cab3b(0x106)+'n';continue;case'6':_0x534dc5[_0x1cab3b(0x576)+'Name']=_0x1cab3b(0x389)+'b';continue;case'7':_0x3b34ab['set'](_0x47dcb5['id'],_0x534dc5);continue;}break;}}function _0x5cc251(_0x5ad408){var _0x32b2aa=_0x1cab3b;_0xd3284c[_0x32b2aa(0x4a4)]=_0x5ad408,_0x174548[_0x32b2aa(0x2e5)](_0x1321d2);var _0x2edea1=_0x3c2c46[_0x32b2aa(0x4df)](_0x31faa3=>_0x31faa3['id']===_0x5ad408)||_0x3c2c46[0x1a41+-0x1d6*0x12+0x6cb];_0x3f1c0b['textC'+_0x32b2aa(0x215)+'t']=_0x174548['eazWS']+_0x2edea1['label'];for(var [_0x4cd3b8,_0xa301c2]of _0x3b34ab)_0xa301c2['class'+_0x32b2aa(0x37e)][_0x32b2aa(0x5b4)+'e'](_0x32b2aa(0x2e1)+'e',_0x4cd3b8===_0x5ad408);_0x1094da['repla'+'ceChi'+_0x32b2aa(0x121)](..._0xa1df24(_0x5ad408));}return _0x174548['QxftN'](_0x5cc251,_0xd3284c['cat']||_0x1cab3b(0x28d)+'t'),setInterval(()=>{var _0x57012a=_0x1cab3b,_0x4df529={'PrcJj':function(_0x58f1f0){return _0x58f1f0();},'rwKOJ':function(_0x3135b2,_0x2bb4a8,_0x1b01b7){return _0x3135b2(_0x2bb4a8,_0x1b01b7);}};if(!_0x436542)return;var _0x197d5e=_0x1094da['child'+_0x57012a(0x24f)];for(var _0x59b255=-0x60*0x41+-0x2cc+0x1b2c;_0x59b255<_0x197d5e[_0x57012a(0x1e6)+'h'];_0x59b255++){var _0x248d13=_0x197d5e[_0x59b255]['query'+_0x57012a(0x1a9)+_0x57012a(0x5c4)](_0x57012a(0x19d)+_0x57012a(0x451));_0x248d13&&(_0x145b15[_0x57012a(0x233)](_0x248d13['textC'+'onten'+'t'][_0x57012a(0x2ed)+'Of'](_0x57012a(0x276)),0x19*-0x15d+-0x2368+0x457d)||_0x145b15[_0x57012a(0x233)](_0x248d13['textC'+_0x57012a(0x215)+'t']['index'+'Of'](_0x145b15[_0x57012a(0x625)]),0x2fb*0xc+-0x153b*-0x1+-0x38ff))&&('moCYj'===_0x145b15[_0x57012a(0x604)]?_0x248d13['textC'+_0x57012a(0x215)+'t']=_0x134b04['safeM'+_0x57012a(0x472)]?_0x145b15[_0x57012a(0x254)]:_0x134b04[_0x57012a(0x338)]?_0x145b15['DPGpF'](_0x145b15['DPGpF'](_0x57012a(0x39c)+_0x57012a(0x30d)+'\x20'+(_0x134b04[_0x57012a(0x3ef)+_0x57012a(0x537)]?_0x145b15[_0x57012a(0x2f6)](_0x145b15['FNQTe'](_0x134b04[_0x57012a(0x3ef)+'Ok'],'/'),_0x134b04['hooks'+'Total'])+('\x20hook'+'s'):_0x57012a(0x5a0)+'ks\x20ar'+_0x57012a(0x393)+_0x57012a(0x1ba)+'ff)')+(_0x57012a(0x645)+_0x57012a(0x20a))+(_0x134b04[_0x57012a(0x115)+_0x57012a(0x268)]?_0x57012a(0x29c)+'d':_0x57012a(0x1c9)+'ng'),_0x145b15['pIUIJ'])+(_0x134b04[_0x57012a(0x342)+'ers']?_0x145b15['XKTyw']:_0x57012a(0x195))+_0x145b15[_0x57012a(0x5f5)],_0x134b04['movem'+_0x57012a(0x23d)]?_0x145b15['XKTyw']:_0x145b15['YXAZs'])+(_0x134b04['lastE'+'rror']?_0x57012a(0x58f)+_0x57012a(0x43e)+_0x134b04['lastE'+_0x57012a(0x5e4)]:''):_0x57012a(0x39c)+_0x57012a(0x638)+'NG\x20-\x20'+_0x57012a(0x5fa)+'ay\x20on'+_0x57012a(0x360)+'einst'+'all\x20t'+_0x57012a(0x57b)+_0x57012a(0x4b2)+'ipt)':(_0x5909b1[_0x57012a(0x35d)]=_0x25bb93,_0x4df529[_0x57012a(0x398)](_0x1b521f),_0x4df529[_0x57012a(0x559)](_0x50a9d6,_0x57012a(0x35d),_0x4478e5),_0x3cfd2b('godDi'+'e',_0x358f7b)));}},-0x9cb*0x2+0x16ba*0x1+0x1c*0x7),_0x1e3a32;}var _0x3118b0=_0x52522e(0x540)+_0x52522e(0x483)+_0x52522e(0x598)+'l:\x20in'+_0x52522e(0xf5)+_0x52522e(0x253)+'\x20\x20\x20*\x20'+_0x52522e(0x175)+'-sizi'+'ng:\x20b'+_0x52522e(0x2af)+_0x52522e(0x41e)+'\x20marg'+'in:\x200'+';\x20fon'+_0x52522e(0x38b)+_0x52522e(0x229)+'\x22Inte'+_0x52522e(0x198)+_0x52522e(0x440)+_0x52522e(0x1fe)+'\x20syst'+_0x52522e(0x58a)+',\x20san'+'s-ser'+'if;\x20}'+_0x52522e(0x540)+_0x52522e(0x637)+'anel\x20'+_0x52522e(0x308)+'ition'+_0x52522e(0x424)+'olute'+';\x20rig'+'ht:\x202'+_0x52522e(0xfc)+_0x52522e(0x272)+'m:\x2024'+_0x52522e(0x34c)+'idth:'+_0x52522e(0x460)+'620px'+',\x20cal'+_0x52522e(0x3b3)+'vw\x20-\x20'+'48px)'+_0x52522e(0x292)+'x-hei'+_0x52522e(0x59a)+_0x52522e(0x48a)+_0x52522e(0x105)+_0x52522e(0x2d6)+_0x52522e(0x62f)+_0x52522e(0x379)+'8px))'+_0x52522e(0x211)+'\x20\x20\x20di'+'splay'+_0x52522e(0x51c)+'x;\x20ga'+_0x52522e(0x10a)+_0x52522e(0x2d0)+_0x52522e(0x2cc)+_0x52522e(0x154)+_0x52522e(0x40f)+_0x52522e(0x2af)+_0x52522e(0x12f)+_0x52522e(0x61a)+'2px;\x20'+_0x52522e(0x279)+_0x52522e(0x28c)+'ents:'+'\x20auto'+_0x52522e(0x211)+_0x52522e(0x4ff)+'ckgro'+_0x52522e(0x167)+_0x52522e(0x31a)+'24,17'+',21,.'+'82);\x20'+'backd'+_0x52522e(0x192)+_0x52522e(0x14d)+_0x52522e(0x232)+'r(22p'+_0x52522e(0x5e9)+'turat'+'e(150'+'%);\x20-'+_0x52522e(0x5a5)+_0x52522e(0x493)+'kdrop'+'-filt'+'er:\x20b'+_0x52522e(0x32e)+'2px)\x20'+_0x52522e(0x49e)+'ate(1'+'50%);'+_0x52522e(0x540)+_0x52522e(0x4b0)+_0x52522e(0x1fc)+_0x52522e(0x4c0)+_0x52522e(0x2a0)+_0x52522e(0x44d)+_0x52522e(0x38f)+_0x52522e(0x34d)+_0x52522e(0x188)+_0x52522e(0x396)+_0x52522e(0x3c7)+_0x52522e(0x24a)+'1px\x200'+_0x52522e(0x573)+'(255,'+'255,2'+_0x52522e(0x5ad)+_0x52522e(0x449)+_0x52522e(0x3ad)+_0x52522e(0x523)+_0x52522e(0x573)+'(0,0,'+'0,.55'+');\x0a\x20\x20'+_0x52522e(0x1c1)+'pacit'+_0x52522e(0x35c)+_0x52522e(0x1f3)+_0x52522e(0x4a5)+_0x52522e(0x5e6)+_0x52522e(0x243)+'eY(18'+_0x52522e(0x303)+'point'+'er-ev'+_0x52522e(0x4c9)+_0x52522e(0x16b)+_0x52522e(0x408)+'nsiti'+_0x52522e(0x470)+'pacit'+_0x52522e(0x5a6)+_0x52522e(0x545)+_0x52522e(0x5d5)+_0x52522e(0x36d)+_0x52522e(0x63e)+_0x52522e(0x39d)+'bic-b'+_0x52522e(0x430)+_0x52522e(0x225)+_0x52522e(0x15a)+_0x52522e(0x3e3)+_0x52522e(0x516)+'\x20colo'+'r:\x20#f'+_0x52522e(0x3cc)+_0x52522e(0x1ff)+_0x52522e(0x4cf)+'e:\x2013'+'px;\x20}'+_0x52522e(0x540)+'.mn-p'+'anel.'+_0x52522e(0x34a)+'\x20{\x20op'+_0x52522e(0x565)+':\x201;\x20'+_0x52522e(0x240)+'form:'+_0x52522e(0x16b)+_0x52522e(0x5a3)+'nter-'+_0x52522e(0x593)+'s:\x20au'+'to;\x20}'+_0x52522e(0x540)+_0x52522e(0x1ca)+_0x52522e(0x4ac)+_0x52522e(0x263)+'lay:\x20'+'flex;'+_0x52522e(0x19c)+_0x52522e(0x1e8)+'ction'+':\x20col'+'umn;\x20'+'align'+_0x52522e(0x32d)+_0x52522e(0x213)+_0x52522e(0x3cb)+_0x52522e(0x547)+_0x52522e(0x5bd)+'\x20widt'+_0x52522e(0x43f)+_0x52522e(0x49b)+'lex:\x20'+_0x52522e(0x5e8)+_0x52522e(0x2c0)+_0x52522e(0x572)+'12px\x20'+(_0x52522e(0x491)+'rder-'+_0x52522e(0x246)+_0x52522e(0x30e)+'px;\x0a\x20'+_0x52522e(0x516)+_0x52522e(0x22d)+'round'+_0x52522e(0x298)+'a(255'+_0x52522e(0x4ae)+_0x52522e(0x590)+_0x52522e(0xf3)+'\x20box-'+_0x52522e(0x1d2)+_0x52522e(0x2ca)+'set\x200'+_0x52522e(0x2a0)+_0x52522e(0x44d)+_0x52522e(0x38f)+'55,25'+_0x52522e(0x188)+',.05)'+_0x52522e(0x253)+'\x20\x20\x20.m'+_0x52522e(0x4fd)+_0x52522e(0x2d9)+'ispla'+_0x52522e(0x4c3)+'id;\x20p'+_0x52522e(0x5f9)+_0x52522e(0x61b)+':\x20cen'+'ter;\x20'+_0x52522e(0x333)+_0x52522e(0x284)+'x;\x20he'+'ight:'+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x52522e(0x4fd)+'o-svg'+'\x20{\x20wi'+_0x52522e(0x4da)+_0x52522e(0x271)+_0x52522e(0x38e)+_0x52522e(0xf6)+_0x52522e(0x3fa)+_0x52522e(0x370)+_0x52522e(0x2d3)+'visib'+'le;\x20f'+_0x52522e(0x14d)+':\x20dro'+'p-sha'+'dow(0'+'\x200\x204p'+_0x52522e(0x125)+_0x52522e(0x5dd)+_0x52522e(0x58c)+'157,.'+_0x52522e(0x2a1)+_0x52522e(0x3d3)+_0x52522e(0x507)+'tab\x20{'+'\x20disp'+'lay:\x20'+_0x52522e(0x47a)+_0x52522e(0x130)+_0x52522e(0x299)+'ms:\x20c'+_0x52522e(0x238)+_0x52522e(0x21b)+_0x52522e(0x148)+_0x52522e(0x245)+'nt:\x20c'+_0x52522e(0x238)+';\x20wid'+_0x52522e(0x612)+'2px;\x20'+_0x52522e(0x62a)+'t:\x2034'+'px;\x20b'+'order'+_0x52522e(0x1ac)+_0x52522e(0x247)+'r-rad'+_0x52522e(0x26b)+'10px;'+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+_0x52522e(0x526)+_0x52522e(0x2d1)+'ransp'+'arent'+_0x52522e(0x575)+_0x52522e(0x4ed)+_0x52522e(0x38f)+'46,23'+_0x52522e(0x4f0)+_0x52522e(0x2bb)+_0x52522e(0x3ff)+'or:\x20p'+'ointe'+'r;\x20fo'+'nt-si'+_0x52522e(0x3f7)+_0x52522e(0x36f)+_0x52522e(0x3c1)+_0x52522e(0x2fe)+'t:\x2070'+_0x52522e(0x1c7)+_0x52522e(0x4d7)+'mn-ta'+_0x52522e(0x4cd)+'er\x20{\x20'+_0x52522e(0x44e)+_0x52522e(0x298)+'a(246'+',238,'+_0x52522e(0x137)+_0x52522e(0x403)+_0x52522e(0x540)+_0x52522e(0x482)+'ab.ac'+_0x52522e(0x322)+_0x52522e(0x366)+_0x52522e(0x41c)+'ff6b9'+_0x52522e(0x182)+_0x52522e(0x648)+_0x52522e(0x167)+_0x52522e(0x31a)+'255,1'+_0x52522e(0x2a3)+'7,.1)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x52522e(0x55e)+_0x52522e(0x3a8)+'lex:\x20'+_0x52522e(0x5de)+'n-wid'+'th:\x200'+_0x52522e(0x1a4)+_0x52522e(0x5eb)+_0x52522e(0x19c)+';\x20fle'+'x-dir'+_0x52522e(0x32f)+_0x52522e(0x3a9)+_0x52522e(0x40e)+_0x52522e(0x242)+_0x52522e(0x556)+_0x52522e(0x1ef)+_0x52522e(0x169)+'play:'+_0x52522e(0x19c)+';\x20ali'+_0x52522e(0xef)+'ems:\x20'+'cente'+_0x52522e(0x205)+'p:\x2012'+_0x52522e(0x2d0)+'addin'+_0x52522e(0x13d)+'x\x206px'+_0x52522e(0x462)+_0x52522e(0x3dc)+_0x52522e(0x1f1)+'ect:\x20'+_0x52522e(0x5e8)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-titl'+'es\x20{\x20'+'flex:'+_0x52522e(0x2de)+'in-wi'+_0x52522e(0x4da)+_0x52522e(0x1c7)+'\x20\x20\x20\x20.'+_0x52522e(0x2c2)+'{\x20fon'+_0x52522e(0x4cf)+_0x52522e(0x415)+'px;\x20f'+'ont-w'+_0x52522e(0x376)+_0x52522e(0x3e7)+_0x52522e(0x253)+'\x20\x20\x20.m'+_0x52522e(0x5c2)+'\x20{\x20fo'+_0x52522e(0x386)+'ze:\x201'+_0x52522e(0x25e)+_0x52522e(0x274))+('ty:\x20.'+_0x52522e(0x413)+_0x52522e(0x4d7)+_0x52522e(0x5fd)+_0x52522e(0x208)+'\x20disp'+_0x52522e(0x3ab)+_0x52522e(0x2a6)+_0x52522e(0x45e)+'e-ite'+_0x52522e(0x561)+_0x52522e(0x238)+_0x52522e(0x31d)+'th:\x202'+'8px;\x20'+'heigh'+'t:\x2028'+_0x52522e(0x40f)+_0x52522e(0x2af)+':\x200;\x20'+_0x52522e(0x247)+'r-rad'+_0x52522e(0x26b)+'8px;\x20'+_0x52522e(0x22d)+'round'+_0x52522e(0x5e6)+'nspar'+_0x52522e(0x400)+_0x52522e(0x44e)+_0x52522e(0x630)+_0x52522e(0xee)+_0x52522e(0x3da)+_0x52522e(0x4dd)+'.45;\x20'+_0x52522e(0x280)+_0x52522e(0x517)+'inter'+_0x52522e(0x253)+_0x52522e(0x1a7)+_0x52522e(0x5b7)+'se:ho'+'ver\x20{'+'\x20opac'+_0x52522e(0x4dd)+_0x52522e(0x427)+_0x52522e(0x648)+_0x52522e(0x167)+_0x52522e(0x31a)+'255,2'+_0x52522e(0x34d)+_0x52522e(0x481)+');\x20}\x0a'+_0x52522e(0x4d7)+'mn-cl'+'ose\x20s'+_0x52522e(0x282)+'width'+_0x52522e(0x200)+_0x52522e(0x35e)+_0x52522e(0x623)+'\x2014px'+_0x52522e(0x327)+'l:\x20no'+_0x52522e(0x118)+'troke'+_0x52522e(0x420)+'rentC'+_0x52522e(0x1cc)+_0x52522e(0x1cb)+'ke-wi'+_0x52522e(0x4da)+'2;\x20st'+'roke-'+_0x52522e(0x108)+'ap:\x20r'+_0x52522e(0x10c)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-cols'+'\x20{\x20fl'+_0x52522e(0x199)+_0x52522e(0x20f)+'-heig'+_0x52522e(0x47e)+';\x20ove'+_0x52522e(0x31e)+'-y:\x20a'+'uto;\x20'+'displ'+_0x52522e(0x636)+_0x52522e(0x142)+_0x52522e(0x3bf)+'templ'+_0x52522e(0x1ad)+'olumn'+'s:\x20re'+_0x52522e(0x3a2)+'auto-'+_0x52522e(0x166)+'\x20minm'+_0x52522e(0x61f)+'0px,\x20'+'1fr))'+_0x52522e(0x522)+_0x52522e(0xef)+'ems:\x20'+_0x52522e(0x3a3)+_0x52522e(0x522)+_0x52522e(0x25f)+_0x52522e(0x13f)+':\x20sta'+_0x52522e(0x409)+'ap:\x201'+_0x52522e(0x36f)+'paddi'+'ng:\x200'+_0x52522e(0x5d0)+'6px\x200'+_0x52522e(0x253)+_0x52522e(0x1a7)+_0x52522e(0x151)+_0x52522e(0x17f)+_0x52522e(0x1a8)+'-scro'+'llbar'+'\x20{\x20wi'+_0x52522e(0x4da)+_0x52522e(0x53e)+'}\x0a\x20\x20\x20'+'\x20.mn-'+'cols:'+':-web'+_0x52522e(0x4cc)+_0x52522e(0x140)+'bar-t'+'humb\x20'+_0x52522e(0x362)+_0x52522e(0x526)+'nd:\x20r'+_0x52522e(0x38f)+'55,25'+'5,255'+_0x52522e(0x18b)+_0x52522e(0x1fa)+_0x52522e(0xea)+'adius'+':\x204px'+_0x52522e(0x253)+_0x52522e(0x184)+'k-car'+_0x52522e(0x43c)+_0x52522e(0x2af)+_0x52522e(0x12f)+'us:\x201'+_0x52522e(0x53c)+_0x52522e(0x22d)+_0x52522e(0x38d)+':\x20rgb'+_0x52522e(0x5dd)+',255,'+_0x52522e(0x590)+'025);'+'\x20box-'+_0x52522e(0x1d2)+_0x52522e(0x2ca)+_0x52522e(0x220)+_0x52522e(0x2a0)+_0x52522e(0x44d)+_0x52522e(0x38f)+_0x52522e(0x34d)+_0x52522e(0x188)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x52522e(0x434)+_0x52522e(0x519)+'{\x20bac'+'kgrou'+'nd:\x20r'+_0x52522e(0x38f)+_0x52522e(0x34d)+_0x52522e(0x188)+_0x52522e(0x3be)+';\x20box'+_0x52522e(0x1fc)+_0x52522e(0x127)+_0x52522e(0x5b9)+_0x52522e(0x48c)+'\x201px\x20'+'rgba('+'255,1'+'07,15'+_0x52522e(0x597)+');\x20}\x0a'+_0x52522e(0x4d7)+_0x52522e(0x3d4)+'rd-he'+_0x52522e(0x627)+'displ')+('ay:\x20f'+_0x52522e(0x4a3)+_0x52522e(0xfd)+'-item'+_0x52522e(0x213)+'nter;'+_0x52522e(0x547)+'\x208px;'+'\x20padd'+_0x52522e(0x572)+_0x52522e(0x610)+_0x52522e(0x374)+_0x52522e(0x242)+_0x52522e(0x428)+_0x52522e(0x510)+'-titl'+_0x52522e(0x1b7)+'lex:\x20'+'1;\x20mi'+'n-wid'+'th:\x200'+_0x52522e(0x253)+_0x52522e(0x184)+_0x52522e(0x434)+_0x52522e(0x16d)+_0x52522e(0x177)+'rong\x20'+_0x52522e(0x562)+'t-siz'+'e:\x2013'+_0x52522e(0x49b)+'ont-w'+_0x52522e(0x376)+_0x52522e(0x620)+';\x20col'+'or:\x20r'+_0x52522e(0x38f)+_0x52522e(0x560)+_0x52522e(0x4f0)+',.45)'+_0x52522e(0x253)+'\x20\x20\x20.s'+'k-car'+_0x52522e(0x519)+'.sk-c'+_0x52522e(0xfe)+_0x52522e(0x402)+_0x52522e(0x345)+'g\x20{\x20c'+_0x52522e(0x54d)+_0x52522e(0x201)+_0x52522e(0x34f)+'}\x0a\x20\x20\x20'+_0x52522e(0x614)+_0x52522e(0x5d3)+_0x52522e(0x569)+_0x52522e(0x57c)+_0x52522e(0xec)+_0x52522e(0x2e2)+_0x52522e(0x36f)+'}\x0a\x20\x20\x20'+_0x52522e(0x614)+_0x52522e(0x5ce)+'\x20{\x20fo'+_0x52522e(0x386)+_0x52522e(0x3f7)+'1px;\x20'+'opaci'+'ty:\x20.'+'4;\x20ma'+_0x52522e(0x4cb)+_0x52522e(0x272)+_0x52522e(0x4ab)+_0x52522e(0x530)+'\x20\x20\x20\x20.'+_0x52522e(0x1e9)+_0x52522e(0x4b9)+_0x52522e(0x107)+_0x52522e(0x25c)+_0x52522e(0x5ab)+'lign-'+'items'+_0x52522e(0x375)+'ter;\x20'+_0x52522e(0x189)+'8px;\x20'+_0x52522e(0x5c3)+_0x52522e(0x337)+'px\x200;'+'\x20font'+_0x52522e(0x214)+_0x52522e(0x5ff)+'5px;\x20'+_0x52522e(0x3d3)+'\x20.sk-'+_0x52522e(0x410)+'\x20{\x20fl'+'ex:\x201'+_0x52522e(0x575)+_0x52522e(0x4ed)+_0x52522e(0x38f)+_0x52522e(0x560)+_0x52522e(0x4f0)+',.75)'+_0x52522e(0x253)+_0x52522e(0x184)+_0x52522e(0x3df)+_0x52522e(0x309)+_0x52522e(0x107)+_0x52522e(0x1d8)+'ock;\x20'+_0x52522e(0x3c1)+_0x52522e(0x1fb)+_0x52522e(0x475)+';\x20opa'+'city:'+_0x52522e(0x581)+'}\x0a\x20\x20\x20'+_0x52522e(0x614)+'switc'+'h\x20{\x20p'+'ositi'+'on:\x20r'+_0x52522e(0x42e)+_0x52522e(0x170)+_0x52522e(0x1d7)+_0x52522e(0x102)+_0x52522e(0x2c5)+_0x52522e(0x59a)+'14px;'+_0x52522e(0x456)+'er:\x200'+_0x52522e(0x1fa)+_0x52522e(0xea)+'adius'+_0x52522e(0x347)+'x;\x20ba'+'ckgro'+_0x52522e(0x167)+'rgba('+_0x52522e(0x222)+_0x52522e(0x34d)+_0x52522e(0x600)+');\x20cu'+'rsor:'+_0x52522e(0x248)+_0x52522e(0x603)+_0x52522e(0x631)+_0x52522e(0x16b)+_0x52522e(0x253)+'\x20\x20\x20.s'+_0x52522e(0x13e)+'tch::'+_0x52522e(0x436)+'\x20{\x20co'+_0x52522e(0x13f)+':\x20\x22\x22;'+'\x20posi'+'tion:'+_0x52522e(0x124)+'lute;'+_0x52522e(0x20d)+_0x52522e(0x227)+_0x52522e(0x156)+':\x203px'+_0x52522e(0x31d)+_0x52522e(0x1bd)+'px;\x20h'+_0x52522e(0x376)+_0x52522e(0x50a)+';\x20bor'+'der-r'+_0x52522e(0x59d)+_0x52522e(0x20c)+';\x20bac'+_0x52522e(0x526)+_0x52522e(0x47c)+_0x52522e(0x38f)+'55,25'+_0x52522e(0x188)+_0x52522e(0x30c)+';\x20tra'+_0x52522e(0x1f7)+_0x52522e(0x46f)+'eft\x20.'+'2s,\x20b'+'ackgr'+_0x52522e(0x180)+_0x52522e(0x58d)+_0x52522e(0x3d3)+_0x52522e(0x614)+_0x52522e(0x4bf)+'h[ari'+'a-che'+_0x52522e(0x3b2)+_0x52522e(0x4de)+'\x22]\x20{\x20'+_0x52522e(0x22d)+_0x52522e(0x38d)+_0x52522e(0x298))+('a(255'+',107,'+_0x52522e(0x380)+'25);\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x52522e(0x224)+_0x52522e(0x252)+'cked='+'\x22true'+'\x22]::a'+_0x52522e(0x149)+_0x52522e(0x531)+_0x52522e(0x1e3)+'px;\x20b'+'ackgr'+'ound:'+_0x52522e(0x3b1)+_0x52522e(0x33e)+_0x52522e(0x3d3)+_0x52522e(0x614)+_0x52522e(0x5da)+_0x52522e(0x4b5)+_0x52522e(0x648)+_0x52522e(0x167)+'rgba('+_0x52522e(0x222)+_0x52522e(0x34d)+'5,.03'+_0x52522e(0x1eb)+_0x52522e(0x2af)+_0x52522e(0x1ac)+'borde'+_0x52522e(0x4af)+'ius:\x20'+_0x52522e(0x21e)+'color'+':\x20#f6'+_0x52522e(0x41d)+_0x52522e(0x2c0)+_0x52522e(0x572)+_0x52522e(0xf0)+'px;\x20f'+_0x52522e(0x59b)+'ize:\x20'+'11.5p'+_0x52522e(0x3ae)+'tline'+':\x20non'+_0x52522e(0x558)+_0x52522e(0x190)+'dow:\x20'+'inset'+_0x52522e(0x2a0)+_0x52522e(0xe6)+'\x20rgba'+'(255,'+_0x52522e(0x222)+_0x52522e(0x5ad)+_0x52522e(0x46c)+_0x52522e(0x540)+'.sk-f'+'ield\x20'+_0x52522e(0x29a)+_0x52522e(0x41f)+'ackgr'+_0x52522e(0x394)+_0x52522e(0x24d)+_0x52522e(0x236)+_0x52522e(0x3d3)+'\x20.sk-'+_0x52522e(0x2b1)+'\x20{\x20di'+'splay'+_0x52522e(0x51c)+_0x52522e(0x4ea)+'ign-i'+_0x52522e(0x313)+'\x20cent'+'er;\x20g'+_0x52522e(0x26e)+_0x52522e(0x1da)+_0x52522e(0x540)+'.sk-s'+_0x52522e(0x52d)+'\x20{\x20-w'+'ebkit'+'-appe'+_0x52522e(0x2b2)+'e:\x20no'+_0x52522e(0x21f)+'ppear'+_0x52522e(0x649)+'\x20none'+_0x52522e(0x31d)+_0x52522e(0x281)+'0px;\x20'+_0x52522e(0x62a)+'t:\x208p'+'x;\x20ba'+_0x52522e(0x648)+'und:\x20'+_0x52522e(0x240)+_0x52522e(0x4e9)+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x52522e(0x51d)+_0x52522e(0x458)+_0x52522e(0x1bf)+'kit-s'+'lider'+_0x52522e(0x432)+'able-'+_0x52522e(0x1a2)+'\x20{\x20he'+_0x52522e(0x623)+_0x52522e(0x615)+_0x52522e(0x456)+_0x52522e(0x414)+_0x52522e(0x439)+_0x52522e(0x615)+'\x20back'+_0x52522e(0x334)+_0x52522e(0x459)+'near-'+_0x52522e(0x467)+_0x52522e(0x266)+_0x52522e(0x4a9)+_0x52522e(0x264)+_0x52522e(0x43b)+_0x52522e(0x4b7)+_0x52522e(0x2d7)+'r(--p'+_0x52522e(0x4d3)+_0x52522e(0x473)+'%\x20no-'+_0x52522e(0x570)+'t,\x20rg'+'ba(25'+_0x52522e(0x188)+_0x52522e(0x4ae)+_0x52522e(0x15b)+_0x52522e(0x242)+'\x20\x20.sk'+_0x52522e(0x534)+'er::-'+_0x52522e(0x5a5)+_0x52522e(0x318)+_0x52522e(0x39a)+_0x52522e(0x332)+_0x52522e(0x324)+'bkit-'+_0x52522e(0x1a6)+'rance'+':\x20non'+'e;\x20wi'+'dth:\x20'+_0x52522e(0x21e)+_0x52522e(0x62a)+'t:\x206p'+'x;\x20ma'+_0x52522e(0x4cb)+'top:\x20'+'-2px;'+'\x20bord'+_0x52522e(0x414)+_0x52522e(0x439)+_0x52522e(0x1fd)+_0x52522e(0x42d)+'groun'+'d:\x20#f'+_0x52522e(0x43b)+';\x20}\x0a\x20'+_0x52522e(0x184)+_0x52522e(0x2a5)+_0x52522e(0x407)+'nt-si'+_0x52522e(0x3f7)+'1px;\x20'+_0x52522e(0x3c1)+_0x52522e(0x2fe)+_0x52522e(0x3ba)+'0;\x20mi'+'n-wid'+_0x52522e(0x5bf)+'8px;\x20'+_0x52522e(0x3d7)+_0x52522e(0xfd)+_0x52522e(0x5d6)+_0x52522e(0x392)+_0x52522e(0x54d)+'\x20rgba'+_0x52522e(0x160)+_0x52522e(0x269)+'42,.8'+_0x52522e(0x551)+_0x52522e(0x4d7)+_0x52522e(0x328)+_0x52522e(0x2f0))+(_0x52522e(0x3e9)+_0x52522e(0x307)+_0x52522e(0x1db)+_0x52522e(0x376)+':\x2022p'+'x;\x20bo'+_0x52522e(0x4e3)+'\x200;\x20b'+'order'+'-radi'+'us:\x206'+'px;\x20b'+'ackgr'+_0x52522e(0x394)+_0x52522e(0x16b)+_0x52522e(0x2a2)+'ding:'+_0x52522e(0x5f8)+_0x52522e(0x1d9)+':\x20poi'+'nter;'+_0x52522e(0x242)+_0x52522e(0x428)+'-note'+_0x52522e(0x407)+'nt-si'+_0x52522e(0x3f7)+'1px;\x20'+_0x52522e(0x44e)+':\x20rgb'+'a(246'+_0x52522e(0x209)+_0x52522e(0x137)+'5);\x20p'+'addin'+_0x52522e(0x435)+_0x52522e(0x34b)+_0x52522e(0x3d3)+_0x52522e(0x614)+'note.'+_0x52522e(0xe5)+_0x52522e(0x486)+_0x52522e(0x640)+'f7a93'+_0x52522e(0x253)+_0x52522e(0x184)+_0x52522e(0x373)+'\x20{\x20al'+_0x52522e(0x633)+_0x52522e(0x132)+_0x52522e(0x2ea)+'start'+';\x20bor'+_0x52522e(0x339)+_0x52522e(0x491)+_0x52522e(0x261)+_0x52522e(0x246)+_0x52522e(0x1d1)+_0x52522e(0xf1)+_0x52522e(0x57c)+_0x52522e(0x50a)+'\x2016px'+';\x20bac'+_0x52522e(0x526)+'nd:\x20#'+'ff6b9'+_0x52522e(0x49f)+'lor:\x20'+_0x52522e(0x395)+_0x52522e(0x58e)+'-size'+':\x2011.'+_0x52522e(0x3fa)+_0x52522e(0x3c1)+_0x52522e(0x2fe)+'t:\x2070'+_0x52522e(0x442)+'rsor:'+'\x20poin'+_0x52522e(0x603)+_0x52522e(0x3d3)+_0x52522e(0x614)+'btn:h'+_0x52522e(0x363)+_0x52522e(0x3e2)+_0x52522e(0x471)+_0x52522e(0x12a)+_0x52522e(0x2c9)+'(1.1)'+_0x52522e(0x253)+_0x52522e(0x3fc));window[_0x52522e(0x221)+'entLi'+_0x52522e(0x2bd)+'r'](_0x160913[_0x52522e(0x63b)],_0x24127c=>{var _0x58ba62=_0x52522e;if(_0x174548['ZdfMI'](_0x24127c[_0x58ba62(0x17e)],_0x58ba62(0x3bd)+'t')){if(_0x58ba62(0x35f)!==_0x58ba62(0x15c))_0x24127c['preve'+'ntDef'+'ault'](),_0x28c7bc();else{if(_0x280d46)return;_0x1f126b=!![],_0x5c6aa5[_0x58ba62(0x221)+_0x58ba62(0x591)+'stene'+'r'](_0x58ba62(0x35b)+'wn',_0x29aa48,!![]),_0x3ca649['addEv'+'entLi'+'stene'+'r']('keyup',_0x423d8c,!![]),_0x4860be[_0x58ba62(0x221)+_0x58ba62(0x591)+_0x58ba62(0x2bd)+'r'](_0x58ba62(0x4bb)+'down',_0x4003f6,!![]),_0x4efaab['addEv'+_0x58ba62(0x591)+'stene'+'r'](_0x58ba62(0x4bb)+'up',_0x1a378c,!![]),_0x411f51['addEv'+_0x58ba62(0x591)+_0x58ba62(0x2bd)+'r']('blur',_0x5ea4c4);}}},!![]);var _0x435664=document[_0x52522e(0x52c)+'eElem'+_0x52522e(0x28a)]('div');_0x435664['style'][_0x52522e(0x1b6)+'xt']=_0x52522e(0x4c5)+'ion:f'+_0x52522e(0x5ba)+'top:1'+'2px;r'+'ight:'+'12px;'+_0x52522e(0x52a)+_0x52522e(0x642)+'47483'+_0x52522e(0x478)+_0x52522e(0x1d9)+':poin'+'ter;w'+_0x52522e(0x1d7)+'26px;'+_0x52522e(0x62a)+_0x52522e(0x330)+_0x52522e(0x11f)+_0x52522e(0x353)+'0.5;t'+_0x52522e(0x59c)+_0x52522e(0x3b7)+_0x52522e(0x274)+'ty\x200.'+_0x52522e(0x358)+_0x52522e(0x212)+_0x52522e(0x3dd)+'ts:au'+_0x52522e(0x61e)+'lter:'+'drop-'+'shado'+'w(0\x200'+'\x204px\x20'+'rgba('+'255,1'+_0x52522e(0x2a3)+'7,0.7'+'))',_0x435664[_0x52522e(0x5db)+'HTML']=_0x160913['JTOhA'],_0x435664['title']=_0x160913[_0x52522e(0x524)],_0x435664['onmou'+'seent'+'er']=()=>_0x435664['style'][_0x52522e(0x274)+'ty']='1',_0x435664[_0x52522e(0x3d2)+'selea'+'ve']=()=>_0x435664[_0x52522e(0x49d)]['opaci'+'ty']='0.5',_0x435664['oncli'+'ck']=_0x290828=>{var _0x2dfc05=_0x52522e;_0x290828[_0x2dfc05(0x383)+'ropag'+'ation'](),_0x28c7bc();},document[_0x52522e(0x3a0)][_0x52522e(0x4ce)+'dChil'+'d'](_0x435664),_0x160913['JFBSW'](_0x5fd30a),requestAnimationFrame(_0x583bfe),console[_0x52522e(0x494)](_0x160913[_0x52522e(0x4aa)],_0x134b04['uwmk']);});})()));function _0x719b(_0xbdc900,_0xd45012){_0xbdc900=_0xbdc900-(0x20e8+0x1ceb+-0x3cef);var _0x442e7f=_0xe055();var _0x357745=_0x442e7f[_0xbdc900];if(_0x719b['BfFZYZ']===undefined){var _0xcb3e93=function(_0xbc2559){var _0x25b8ed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x20a844='',_0x556539='';for(var _0x5e5845=0x79f*-0x5+0x1bb6+0xa65,_0x23c282,_0x7f882c,_0x51492c=0xb*-0xf1+-0x595*-0x5+-0x118e;_0x7f882c=_0xbc2559['charAt'](_0x51492c++);~_0x7f882c&&(_0x23c282=_0x5e5845%(0x2263+-0x1*-0x9cd+0x4*-0xb0b)?_0x23c282*(0x1*-0x2419+-0x47*-0x5b+0xb1c)+_0x7f882c:_0x7f882c,_0x5e5845++%(0x7c3+-0x30*0x45+0x531))?_0x20a844+=String['fromCharCode'](-0x2d0*0x8+0xd*-0x169+0x29d4&_0x23c282>>(-(0x35f+0x1*-0x1232+0xed5)*_0x5e5845&-0x1*0x1a5+-0x1c92+0x1e3d)):0x1395+0x74*0xb+0x1891*-0x1){_0x7f882c=_0x25b8ed['indexOf'](_0x7f882c);}for(var _0x17c640=-0x1788+0x2237+-0xaaf,_0x370ff6=_0x20a844['length'];_0x17c640<_0x370ff6;_0x17c640++){_0x556539+='%'+('00'+_0x20a844['charCodeAt'](_0x17c640)['toString'](0x989*0x1+0x261e*0x1+0x1*-0x2f97))['slice'](-(0x5eb+0x1b98+-0x2181));}return decodeURIComponent(_0x556539);};_0x719b['PTniuf']=_0xcb3e93,_0x719b['JpNdKV']={},_0x719b['BfFZYZ']=!![];}var _0x48edd6=_0x442e7f[-0x1803+-0x1841+0x1822*0x2],_0x185cad=_0xbdc900+_0x48edd6,_0x25b6f3=_0x719b['JpNdKV'][_0x185cad];return!_0x25b6f3?(_0x357745=_0x719b['PTniuf'](_0x357745),_0x719b['JpNdKV'][_0x185cad]=_0x357745):_0x357745=_0x25b6f3,_0x357745;}function _0xe055(){var _0x4b9070=['tgjIBMO','we5squu','yxbWBgK','BI1SB2C','mdb2DZS','icaGyMe','nxWZFdG','vfPPAhO','BM93','Dg9W','DM9hA1y','t3zLCNC','BLbSyxq','ic5TBI0','u3bHy2u','yNnfuuK','oIa4ChG','igfUzca','w3nHA3u','Aw5Zzxq','DMfSDwu','tfrJsem','lwnHCMq','rwPcr1G','CvnWu3a','igLZigm','idi0iJ4','vxvPwwq','icaGica','CJOGCg8','AgXnwfC','zc5VBIa','zg93BG','B2TLpsi','oIbMBgu','C2STC2W','ywXSihq','DxjLihq','zgLZCgW','igrHBwe','oYbHBgK','idGWChG','z1Pkrg8','zfnKthG','A2DYB3u','mciGCJ0','ruzgyMe','t0zgigi','EI1PBMq','B3vUDgu','y3jLyxq','BgLKzxi','zvjHDgu','BhmGDgG','EdSGFqO','EYbSzwy','CMvSB2e','uNvUDgK','lxnSAwq','CYbnB3y','tgvNAw8','vg90ywW','vwrizLq','Aezhuxe','ENjAD1y','nhW2Fdi','mNb4oYa','oc00lJu','ohb4oYa','ihjLBg8','cIaGica','iokaLcb0zq','A3nqB3m','mtf8mty','BgLUzvC','CYbLyxm','B2LSicG','igDHCdO','B2j4tKi','Aw4Sihq','Fdf8mNW','C2vSzwm','zenOAwW','B2XVCJO','DgHPCYa','Ehf2vvK','BfjHDgK','ktSGFqO','yxb0Dxi','C2v0','zwf0CYa','uxL0Beq','icaUBw4','zhrXu2y','ztSGyM8','CNDlt0O','yxjJ','B3G9iJa','zxnJ','yxrLvge','BI1TywK','DgLKzvC','ndySmJm','Bxm6igm','EYbMB24','CgXPy2e','ie9olG','ywnPDhK','CMvJDa','zxjYB3i','nZaWia','ihSGCge','Aw5Mqw0','A2vizwe','B1zrEMu','AfzwEhi','DgnOihq','yMX5lum','CMvWzwe','v0ftrca','Aw5NoIa','ihjNyMe','BML0igy','oYbJB2W','y2XHC3m','uK1c','wMvYB2u','wvbrtgS','y2vSzxi','AguGDxm','zgrPBMC','igq9iK0','ihnOB3q','ys5RB3u','zcWGyw4','ic40oYa','ig5LDMu','BMf0Dxi','m3W0Fdu','zw4GDg8','z2LMEq','tM8Gzw4','vMLZDwe','ie1VDMu','zw0TDwK','ihWGC2G','ldeWnYW','lJjZoYa','igzVBNq','ihWGrvi','mJu1lc4','zw50tgK','q0PlzuK','zxzLBNq','psjYB3u','nxWZ','Bw9fEha','nYWUmJG','ihSGywW','ywqUieK','z2H0oIa','B250lxm','CMfUC2K','ywrPDxm','DhjPyNu','C2STC3C','mcbOB28','nsaWlti','psjTBI0','oYbWB2K','sg9VAYa','D2vIA2K','EsaUmZu','A1ruEge','ug9ZAxq','s2DHAxa','rLbtig8','zxG7ige','rvHpqwi','ntuSlJa','q291BNq','qMjsDhe','nhW3Fdm','y2HdB2W','lZ48l3m','idqTnc4','Dg9Nz2W','B3jZige','ve5fywG','BI1JBg8','rw5NAw4','BNnLDca','AxHLzdS','vwHYwgC','sxPbqNe','idrWEdS','lMP1Bxa','DgG6idi','Be1VDgK','DgvZDa','BI1ZDwi','CgfKzgK','Dg9Y','C2STBM8','DhjPA2u','i2zMnMi','CNr1Cca','wMD3DLC','zhD2wMW','phbHDgG','DgGUsw4','ufPzuuS','BwrLC2m','u1fntuC','idrWEca','swyGCMu','AwWGC3a','BwjVzhK','C1jRr3u','zsWGDhi','oIbYAwC','EfDMA0e','C3bSAxq','AsXZyw4','zMLLBgq','Aw5Uzxi','De1kB2i','ysGYntu','mtSGBwK','u2HHCNa','lxbHCMu','u3rHDgu','A291CI0','ltqTnY4','CNjVCG','BgWGBwu','oIb0CMe','DgHVzca','BM9UztS','EcKGC2e','ANvTCfa','CgXHEtO','t1nOB28','nIa2Bde','Bw9dwwO','lMLVig0','zvbSDwC','rhjuyxy','B29RCYa','nc00lJu','idiWmg0','tMPTzwC','ruvQuKu','A2LNtuq','ida7igm','BgfJzs0','B3zLCMW','zvH3q1e','BgLUzvq','Bw4Ty2W','mZqWntGWnfLlDwPmBq','oIaXms4','nsWUmdC','lYbhCMe','Bw4Ty28','DgvYoYa','r3jVAu8','ms4XlJa','suresKC','zwfWB24','D2nyu2e','t2jdwNG','tfDwtwe','Agf0igq','ndGZnJq','zg9PuuO','Aw5JBhu','nwmWidm','mtfWEca','ltiUnsa','DgG6idu','rwfJAca','ic5ZAY0','idjWEdS','DwrdCM8','B25PBNa','mhG2mda','AwrLCG','Dxm6idi','AxrLBxm','lsbHihm','zxrhyw0','Dg87zMK','yxGOmJu','oIa2mda','EfLgv3O','Cw9tzgm','AwDODdO','CI51As4','wvvuCu4','zuv4Ca','ywqGEYa','mJu1lde','yLbzEMq','AgvPz2G','zsaOt0G','Aw9UoMy','Fdj8mJi','ig1VBwu','kdeWmhy','oIbPBMG','zMXLEdO','zwCGzMe','AwDUlxm','DxjH','CYbpsgu','yxK6igC','lM1Ulxa','tuLtu0K','wLLhtfq','zM9UDa','vuTMuKm','r1DZr1G','CM9WywC','CM0GlJq','mta1mJeXnZzoqKPXEM8','CJOGi2y','ihrOAxm','zxG6mJe','vgLJAW','Bw92zw0','ihWGz2e','lIbvC2u','zMLSBd0','y2TNCM8','yw5JztO','DMG7EI0','q3jVC3m','A3mGyxi','zxjYihS','mcaXChG','vw5PDhK','AgvHzgu','Ag9VA0m','zgvYlxi','zu9HDNi','oIaWide','ihrVide','zxjPDdS','z24TAxq','nNb4idK','EdSGCge','BM5bvxC','mdi1ktS','yxrJAgu','AxrPywW','Ahq6idi','C3zNiJ4','u2v0r2e','ieTLzxa','uNDezNO','ls1W','nhb4oYa','ywXPz24','yxjKlxq','v01ligK','rgLL','DhjVA2u','idi2ChG','tM9YDum','i2zMzG','odbWEcW','yNv0Dg8','AxnWBge','BgLUzwm','D3Lfuhe','CdOGmta','Ehvdr0m','B3vUzdS','vwfwrwy','BxKGC2u','Bw4TBg8','yw5Uywi','D3Pcu2u','ALr0A3i','DcbZDge','EuHswuS','z2fTzuW','CxzXwKu','mhGYnta','BMu7ihm','BMvS','D29YAYa','DgfNtMe','uMvMAwW','zsbJEd0','owqIihm','EdTVCge','nxWXFdm','BgrYzw4','re9nq28','phn2zYa','igfIC28','EcbYz2i','zMLSBfm','B3C6igK','vxDgvgm','y3PPuKi','yNjPz2G','rgLZywi','zciVpJW','igv4Axq','AwrHDgu','lxjHzgK','igfSAwC','nNWXmNW','zwXMoIa','ihLVDxi','mZuSmJq','v0HyExm','AgvZ','mJqYlc4','D1jmq2y','igrLzMe','B01uq0C','B3vUzgu','BwLKzgW','zZOGnNa','AY1ZD2K','BNrLBNq','y3jVBgW','AwXLzdO','CMLKoYa','BNqGAge','FdeWFdC','ns00idC','B25SEsW','ig1HEsa','DgLMEs0','zNrLCIa','ltiUns0','y2SP','zwfSDgG','AwX0zxi','B25JBgK','lJuGms4','z0v6CKG','BI1JB2W','wKvIu1i','DMC+','zZOGmta','sw5MAw4','igXLzNq','CvHsvM0','B24U','CwzwAMq','msWUmZy','lJa4ktS','v0TcEwS','CM9zvuu','jYb0Agu','CY1Zzxi','kdi0nIW','AxrPyxq','Ad0ImIi','B3qGBwe','C3bHBG','zxjZihq','zMLSBcW','Dw5KoIa','ihDLyxa','EYbKAxm','CJOGDgG','ig5VBMu','yxrPB24','zc10Axq','zIbTyxq','sNvTCca','DMu7ihC','zIXZExm','ywrK','qNn1vKC','lxnLCMK','EYbIB3G','igXPBwK','BguGC3q','ys11Aq','zhjiDvm','ugn0','r3P6r24','uIb2ms4','AgfPCG','y29Kzq','CZO6lxC','B3vUzca','A2PAs2S','zdSGyMe','B2LS','icaGlNm','sLvxy3O','psiJzMy','Aw9UlLq','nsWYntu','z2fWoIa','ignHy2G','lc4WocK','lwfWCgW','rvbiBKW','A2v5Dxa','B3n0zMK','Ec1ZAge','A2v5C3q','CM9Wlwy','zwjYrvO','iezPCMu','BM9Uzq','AwnRihm','zwrXEuC','CIiSici','zxG6ide','s2v5ra','uePjvwC','igzSzxG','lNnRlw0','BNrezwy','vvjbx0S','zxjZ','DhLWzq','DhjHy2S','DgXL','oYbKAxm','r0zNqLC','yxbWzwe','icaGlM0','zwjRAxq','u2vSzwm','C3bLzwq','zuvSzw0','oIaWoYa','yxrLlwm','mxW1Fdy','ChGGDwK','DhKGDMe','igvMzMu','rwnyBhu','y0jrCvO','BM9tChi','ChvZAa','y3nZvgu','zsb7igy','CMLUz3m','Bg9Hzhm','ywXSig8','DwP1wMS','D3jPDgu','DgG6idG','ywqGD2G','oI13zwi','ywWGBwu','icaGig8','BIb0Agu','C2v0uhi','v25preq','zujgtwe','rvbYtve','mdSGFqO','BeLkt3i','Bg9HzgK','lM1Ulxm','ihn0CM8','B2XVCJS','r29Kl2q','uenUCe0','tM8GuMu','DMTwyuW','CZOGoha','C2HHzg8','igj1AwW','Dw5Pzgu','B3nMCwm','sw5PDgK','Awr0AdO','EtOGyMW','DxjZB3i','ChG7ih0','ChG7igG','rM5PwK4','y2HtAxO','yMvNAw4','zvP0AK8','zxjSyxK','nxm0idi','B1jLy28','DdOGmtu','Fdf8mhW','Bw4TDg8','BgvUz3q','CNrPzgu','lwrPCMu','C2STy3q','rM9Yy2u','nsK7igi','y2HPBgq','C2v0vhi','t21LufK','lxrVCca','B2reAwu','CI1ZzwW','C2r1A3C','ihrYyw4','BhrO','qMfVC2i','AhDfvfG','BNnPDgK','AM9PBJ0','EsbKzwy','oYbIB3i','C2L6ztO','lxnOywq','iduWjtS','ifvjiIW','oYbMB24','oIaXnha','icnMzMy','uMf0zq','yxnZAwC','qwDYqMW','CJSGz2e','rhjWBKy','DK9WsgW','B3nLihS','ldiZocW','BwuG','D0jSDxi','oIa1mcu','ihrVCdO','B3uU','oYbTAw4','BMqIihm','oWOGica','Aw50zxi','CZOGy2u','lxnPEMu','B250zw4','iJeYiIa','BM9szwm','B290zxi','z29KrgK','zfvPsKG','oYbQDxm','wMnhvKO','zu1SA2i','nNb4oYa','BMu7ige','C2v0ida','ywrKrxy','mJu1ldi','DMLLD0i','AfTHCMK','kc4YmIW','igzVDxi','idnWEdS','wMfzvgi','AwX5oIa','mcWWlJy','tg9Hzgu','DxqGDgG','yMfJA2C','zcbJAg8','idqGnc4','sw5ZDge','zKvhr2W','oIbIBhu','vLzyAMW','zvn0EwW','s2v5vW','nde5oYa','B3rnqxy','zw50zxi','vwXzr3O','igTVDxi','wMTUDfG','zNvSBhm','zw50CW','t3vgCxK','z0TLEKC','DhjHBNm','ohWZFdK','ih0kica','BNnSyxq','BwLZyW','y29UDgu','CMfKAxu','yM9Yzgu','ihbVAw4','BMqGBwe','zxqGmca','qNvUBNK','ywX0Ac4','icmYmJe','Bg9NBY0','CMvU','AMPhtwu','wKHby1O','ys1JAgu','oYb9cIa','tgfoAfm','ve1Lq0q','Dgjiwha','BLPHsLm','wgn0we4','CMLZAYa','AcbVBMu','y2vUDgu','EtOGzMW','D0nVBg8','mxb4oYa','z24Ty28','tvnIBgK','CMrLCI0','ywn0A0S','igrPC3a','zcWGi2y','lwHVCa','zw50kcm','mJD3BKXKvwi','B2fKzwq','mJm4ldi','A1HXswu','AxvZoIa','mhWXmhW','D1zpCxO','yxa6idG','v1DyA3a','C3r3zey','mJvWEdS','yM90Dg8','A3nty2e','B3bHy2K','B24Oks4','vvDnsW','qKv3BhC','y3K9iJe','Cg9PBNq','wvrcsMC','sLnxyum','zJmY','rMHZt0O','nZK4mZa3mg9rwMnytq','BMqGt0G','y3vYC28','DgG6idK','DMCGEYa','BgfZDeu','oIaZmNa','yxKGB24','Dgv4Dei','zsXTB24','wKvVzvO','q3vZDg8','zw50','mcuUifm','zxiTzxy','y29TyMe','DMLHifm','t1vsx18','otGYodi0tNjerNb2','teX2C3u','ktSGBwe','tw9Kzsa','CYaNzNu','zMLSBa','D2fPDgK','ysblB3u','oIbYz2i','BI1PDgu','B3b0Aw8','nZTWB2K','Bg9Hzgu','rNjHBwu','z1bLA3y','mtG2CwfQC2Hq','idaGmca','ocKPoYa','oYbWywq','mdCSmtu','DgHLihC','AY12ywW','z3jPzdS','vwzUse4','Ag9VA0C','lJv6iIa','CMfWAwq','u3bLzwq','mcWWlJC','wg52AgG','yxvSDca','B3jKzxi','D2L0Ag8','CMfUz2u','yxjHBMm','CYbZChi','Aw1Lihm','zw51','twL0zeG','ywqGDg8','CxvLCNK','s3jKCNO','lwLVxYO','lc40ktS','se1fDvO','C3rLBMu','v3jHCha','Bxn3wwu','ihbHzgq','zxzLCNK','Bw4TAca','Bw4TCge','z2v0qxq','oYbOzwK','tw92zw0','zMLSBfq','zgvZ','Dg5LC3m','DZOGAw4','odC5oteZmhn2uxDnCW','ywrKAw4','Aw4GC2e','BcbKCMe','q2jbENu','ChG7iha','BMq6ihq','z2v0sxq','Bg93oIa','vgfut1m','tfblsK0','ignHBgm','ic8GDMe','DhLqy3q','BYb7igq','A2uTBgK','ExzAyKe','DMfS','AtmY','ide7ig0','Bw4TC3u','B3nWywm','ywn0Axy','mNb4ide','Aw9FmZa','DgvYigm','reDstfC','Bgv0wwS','mtaWid0','v2LKDgG','D2vdzue','zMXLEc0','vMfSDwu','zw15igm','Aw5KzxG','txLYAei','lsbVDMu','Bg9YihS','i2zMyJm','AxmGAg8','FdeZFde','tM8Gu3a','Ag9VA1a','rfbhCey','Bw4TDgK','y0Hzsfu','svDxvfm','s2v5C3q','nhWXnxW','idi0iIa','y2XLyxi','D2vPz2G','y2fWtw8','CYbpDMu','y3jVC3m','Bgf0zwq','ChGPoYa','DxjDigG','z2v0rwW','qM90Dg8','AdOGmZq','EYbWB3m','Dcb7igq','y2vZlG','BMvJyxa','lc4YnsK','yM91BMq','CZOGmty','BgLUzw4','mNb4ihu','y2fWDhu','lKXVy2e','DgvTCZO','zgvSzxq','sKXIzNa','CMeTA28','EKLvsgq','Dc1ZBgK','Bwf4','CMDIysG','iNjVDw4','Awr0Aa','oYb3Awq','CMzSB3C','mtb8mxW','B3rOAw4','l3jHCgK','DgL2zsa','B24Gzxy','EYaTD2u','EMrIyvi','DMvTzw4','oYbMAwW','C2STy28','C2v0x3q','nJTWB2K','tLrmEKm','DKzbugS','lwL0zw0','BhvYkdi','zwn0Aw8','DdOYnNa','m2rAuLbxDW','AhvTyIa','D2LKDgG','z3jVDw4','uhbwEfm','igfWCgW','BMC6idq','DxDTAW','zgvYoIa','BI5MAxi','AxLNyvu','vvbfrwq','BwvZC2e','yJLKoYa','C2v0sxq','s0nVuLG','tuzJAxy','C2HVB3q','D0z3veq','reHNDLe','C3rYB24','lwXPBMu','oIa5oxa','DhLSzq','yxmGBM8','C2HVD24','EcaWoYa','ChG7ihC','ntuSmJu','rNzfsMm','mgy1oYa','C2fMzu0','zw5HyMW','BNrLEhq','y2L0EtO','DxjDifu','zw50rwW','z2LkDNa','ieDLDfy','mNm7Cg8','ihWGBw8','D2H3Bfu','A2v5zg8','EtOGmdS','z29K','EdSGAgu','se9ezLu','BhKGkhi','Dgv4Dem','EYbIywm','B3zLCIa','t3nnqvy','Fdv8mNW','EYbJB2W','B25LigK','zw1LBNq','t0jgELa','rhrAzva','AwXS','nxW2Fdq','yw5ZzM8','Aw5NicS','mhb4oYa','B3zLCMy','C2XPy2u','Aw9FnZi','AY1IDg4','mtjWEdS','oIbJzw4','zwLNAhq','Bw8GDg8','DgLVBI4','AcaTidq','yNzUAe0','zNbZ','ohWXFdy','igDHDgu','tgLZDa','qxnzBw0','mtu3lc4','BhvLCY4','B3bLCNq','C3rVCfa','CMXHEsa','q01RzLG','BNqTC2K','igvSC2u','zcbZzwu','Bw4TDge','D1vXwgW','Dc1Myw0','uu1Qr1O','CM91BMq','igHLAwC','z2jHkdi','AxrLiee','zwfK','Ahq7igm','BwvKicG','B3vUzdO','i2zMzJS','lc4WnIK','mxW5FdC','uhjJsMO','yxnLBgK','zgvYlxq','DMz5wxO','vvDnsYa','nxmGy3u','nIaXoci','ifvUAxq','yM9KEq','uerNAfG','CgvHDcG','C3rHCNq','s2TSEMG','uMvJDa','BMuUqxa','BwvUDca','BIb7igy','BJOGy28','zgL2','Bgf5oIa','BgvZiem','idmWChG','EdSGB3u','v2vItw8','vvrRv2m','icnMzJy','y2TLzd0','yYGXmda','lxnHBNm','zxH0','CgfNzsa','DgLVBJO','Efzosei','Bez0EKC','DdOGnJa','DuPtCuS','BMX5kq','sw5Zzxi','lc4WncK','z3jPzc0','u2L6zq','zM9UDc0','ChrMwNa','AwL5vMS','B3nL','sfrnta','z2HxveK','lcbPBNm','BgW+','qxbWBgK','ohG5mc0','BNrLCJS','nMvLzJi','rxHW','yw1Hz2u','yxjNzxq','wfvZwg4','y2fWu2G','B25TB3u','FqOGica','C2STy2e','D2fYBG','mtC1nJC5zMP3u2DN','Dgv4Dc0','zKrSzK8','zwLUC3q','ig9Wywm','zwv6zsa','oYb1C2u','lwv2zw4','CMvHzhK','AY1OAw4','zxiGC2W','DMvYBge','EYbMAwW','ldePoWO','t0HLywW','CM9Rzxm','BYb0Agu','oIa2nta','kg92zxi','ihDPzhq','zM9YBxm','Aw9U','CMuGkfm','tu9ersa','s2HWB1i','Ag9VA3m','C2HPzNq','z2v0','D2jTA0m','y2LYy2W','Bg93zxi','khjLBg8','ywrIBg8','EMu6ide','zvzHBhu','Bw1VifS','nxb4oYa','u2fMzxq','icaG','igjHBM4','CZPUB24','ign1CNm','zw50oYa','A1fNwMG','AxrSzsa','ocK7ih0','Bg9Hzc4','yMDSyuS','Du5rwg0','ihSGzM8','oYb0CMe','CNq7igC','tw92zq','BhrOige','zMLSzw4','DerKEMu','BhvTBJS','ChG7igi','BgfIzwW','lxDPzhq','zMfhwKy','ndSGFqO','zxiTCMe','ztOGmtC','x19ZywS','DMndBKy','vePrvMG','Dw5Kzwq','yMHVCa','ihn0AwW','B3i6icm','zwvMmJS','lwjVEdS','BIb7igi','oIbJDxi','CMvHzey','Bg9Y','qKXUwuy','oIbHyNm','ugf0Aa','uKvgCwG','mtSGyMe','icaUC2S','qNLjza','DgvTlxu','CIdIGjqG','zuLmsKK','igjHy2S','zwXHDgK','vxHLvMq','zxPPzxi','y3jLBwu','lxj1BM4','BYbWAwC','AY1Jyxi','zZOGmNa','ywz0zxi','BhmGysa','C2STBwq','zgL1CZO','v2vHCg8','zJzIowq','zcb7igi','FdiXFdi','uJOG','AdOGnJi','u2vNB2u','z3j4z24','mdSGy3u','B2rLu3q','C2fRDxi','DMLZDwe','wuvICMW','AguGzNi','wLL2tNa','nsKSida','Dgv4Dee','uMvJB2K','Bw92zq','mxb4ihi','y29SB3i','q2XVC2u','sxnhCM8','zgvZyW','z2uUiei','vhLSAeu','C2f2zq','y2HLy2S','igjVCMq','zcbNCMu','AwrLCJO','zdOGBgK','CMLNAhq','AhjQzKK','nhW1Fdm','Bgf5ig8','ihbSywm','z1HODLe','ig1PBIG','B2XPBMu','ideYChG','zxzLBIa','wwPvsg8','vvvsyKK','C2STzMK','z3jHzgK','zsb3zwe','Bg9Hzca','Aw5WDxq','tg9JywW','nsK7ih0','mJiSocW','Dw5RBM8','B246igW','B246ig8','DgvYoIa','B2rL','ksaXmda','yxjPys0','ideWChG','CuvfyM8','r2HzvvO','nJq2o2m','uuLoEwu','zMXLEdS','C2STAgK','BMq6ihi','C2vYDMu','Ahq6ida','DLHmwMy','A3ndChm','nsWUmdu','lM1Ulxq','oMHVC3q','wfvWqKK','zYbJyw4','ignVBg8','C3rYB2S','z2v0q28','Aw9F','BwLUkdq','x19tquS','mcaWida','revMwNy','idaGmJq','pc9ZBwe','C2v0qxq','mdSGyM8','zgTPDa','Dc1Iywm','Bg9N','AgvSza','D2L0Aca','wxfHwK0','iIbZDhi','4Ocuig5Via','ifvxtuS','ChG7igy','u0flvvi','C3r5Bgu','C2f0Dxi','zdSGy28','y3jLzw4','Bw92zvq','u2fRDxi','Bgv4oYa','y2f0','C2zVCM0','v0fttsa','ChbLBNm','zgfTywC','zMy2yJK','txHHsue','BtOGnNa','AwrLihS','B3vUDc4','ldi1nsW','CI1Yywq','icbIB3G','nJaWia','zxjZy3i','y3KGB24','DgvY','ihSGyMe','zfHzDNa','ksaWida','tvzAANy','Bcb7igq','De5Vzgu','Bw91C2u','qwfIwvi','Ag9VA04','AxmGyNu','C3DPDgm','B3C6ida','s0DoDxK','y0ziCwK','EtOGz3i','DgLKzs4','Cg9ZAxq','EhD6DeW','kYbtCge','lwjHBNi','zw50CZO','DhbJz3u','CMDPBI0','A2L0lxm','yJPOB3y','yxbWzw4','Dc1ZAxO','tezvqNG','lMrSBa','wxjAEKq','lca1mcu','CIbNyw0','CMqTAgu','lK92zxi','icaGic4','mcWWlJG','nMi5zci','zhrOoIa','tMfTzq','nZCYndeZzgXXuuHU','Axr5oIa','iNrYDwu','zMLUza','vfPYrei','yuTVDxi','mtiGmJe','CMrLCJO','uK9Uv28','AwXSihK','uhv6D2K','DwX0','mIaXmK0','CgfYzw4','EdSGywW','C21HBgW','mtn8nxW','B3i6ihi','Bg9JAW','igP1Bxa','ocWYndi','zKzrtgS','q2jSreG','BsbJzw4','z3jHDMK','CMvZDg8','q0fSsve','r2PTtNe','iM5VBMu','C3rYAw4'];_0xe055=function(){return _0x4b9070;};return _0xe055();}
